// Supabase Edge Function: AI Chatbot for Chat Rooms
// Path: supabase/functions/chat-bot/index.ts

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const aiApiKey = Deno.env.get('AI_API_KEY') || Deno.env.get('GEMINI_API_KEY');
    if (!aiApiKey) {
      return new Response(
        JSON.stringify({ error: 'AI_API_KEY secret is not set in Supabase Edge Function secrets.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();

    // Support both Postgres Database Webhook payload & direct client call
    let room = 'general';
    let userText = '';
    let senderName = 'User';
    let isBotMessage = false;

    if (body.record) {
      // Triggered by Postgres Webhook on INSERT
      const record = body.record;
      room = record.room || 'general';
      userText = record.text || record.message || '';
      senderName = record.sender || 'User';
      isBotMessage = Boolean(record.is_bot);
    } else {
      // Direct call
      room = body.room || 'general';
      userText = body.text || body.message || '';
      senderName = body.sender || 'User';
      isBotMessage = Boolean(body.is_bot);
    }

    // Ignore if message is already from a bot to prevent infinite reply loops
    if (isBotMessage || senderName.toLowerCase().includes('bot')) {
      return new Response(
        JSON.stringify({ success: true, message: 'Skipped bot-generated message.' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!userText.trim()) {
      return new Response(
        JSON.stringify({ error: 'Message text is empty.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase Client using Service Role Key or fallback to Request Auth Header
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || Deno.env.get('SUPABASE_ANON_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch last 10 messages from the room for conversational context
    let conversationHistory = '';
    if (supabaseUrl && supabaseKey) {
      const { data: recentMsgs } = await supabase
        .from('chat_messages')
        .select('sender, text, is_bot')
        .eq('room', room)
        .order('created_at', { ascending: false })
        .limit(8);

      if (recentMsgs && recentMsgs.length > 0) {
        conversationHistory = recentMsgs
          .reverse()
          .map((m) => `${m.sender}${m.is_bot ? ' (AI Bot)' : ''}: ${m.text}`)
          .join('\n');
      }
    }

    // Prepare system instructions depending on the active chat room
    let roomPersona = 'general software engineering and web development';
    if (room === 'javascript') roomPersona = 'JavaScript, TypeScript, React, Vite, and Web UI development';
    if (room === 'python') roomPersona = 'Python, AI, Data Science, Machine Learning, and backend scripting';
    if (room === 'showcase') roomPersona = 'giving constructive feedback and encouragement on developer project showcases';

    const systemPrompt = `You are SabayCode Bot, a helpful, friendly, and knowledgeable AI assistant in the #${room} developer chat lounge.
Your expertise is in ${roomPersona}.
Keep your responses concise, clear, and engaging (1 to 3 short paragraphs max, or clean code snippets if relevant).
Be supportive and format code with markdown backticks when explaining code.

Recent conversation in #${room}:
${conversationHistory || `${senderName}: ${userText}`}

Latest message from ${senderName}: "${userText}"`;

    // Call Gemini API via REST endpoint
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${aiApiKey}`;
    const aiResponse = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: systemPrompt }],
          },
        ],
      }),
    });

    if (!aiResponse.ok) {
      const errText = await aiResponse.text();
      console.error('Gemini API Error:', errText);
      return new Response(
        JSON.stringify({ error: 'Failed to generate AI response.' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const aiData = await aiResponse.json();
    const botReplyText =
      aiData.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      'I am here to help with your coding questions!';

    // Insert the bot's reply into chat_messages Postgres table
    if (supabaseUrl && supabaseKey) {
      const { data: insertedMsg, error: insertError } = await supabase
        .from('chat_messages')
        .insert([
          {
            sender: 'SabayCode Bot',
            sender_avatar: '🤖',
            text: botReplyText,
            room: room,
            is_bot: true,
            created_at: new Date().toISOString(),
          },
        ])
        .select()
        .single();

      if (insertError) {
        console.error('Supabase insert error:', insertError);
      }

      return new Response(
        JSON.stringify({ success: true, reply: botReplyText, messageRecord: insertedMsg }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, reply: botReplyText }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    console.error('Edge function internal error:', err);
    return new Response(
      JSON.stringify({ error: err.message || 'Internal Server Error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
