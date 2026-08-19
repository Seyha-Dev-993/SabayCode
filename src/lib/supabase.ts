import { createClient, SupabaseClient, RealtimeChannel } from '@supabase/supabase-js';

// Safely validate HTTP/HTTPS URL
function getValidUrl(url: string | undefined): string {
  if (!url) return 'https://placeholder.supabase.co';
  let formatted = url.trim();
  if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
    formatted = 'https://' + formatted;
  }
  try {
    const parsed = new URL(formatted);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.origin;
    }
  } catch {
    // Invalid URL format
  }
  return 'https://placeholder.supabase.co';
}

const rawUrl = (import.meta.env?.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL || '').trim();
const rawKey = (import.meta.env?.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || '').trim();

const validUrl = getValidUrl(rawUrl);

export const isSupabaseConfigured = Boolean(
  rawUrl && 
  rawKey && 
  validUrl !== 'https://placeholder.supabase.co' && 
  !rawUrl.includes('placeholder') &&
  !rawUrl.includes('YOUR_') &&
  !rawUrl.includes('MY_')
);

// Initialize Supabase Client
export const supabase: SupabaseClient = createClient(
  validUrl,
  rawKey || 'placeholder-anon-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
    realtime: {
      params: {
        eventsPerSecond: 10,
      },
    },
  }
);

export interface ChatMessage {
  id: string;
  sender: string;
  sender_avatar?: string;
  text: string;
  room?: string;
  is_bot?: boolean;
  created_at: string;
  reactions?: Record<string, number>;
}

export interface LiveCodeSnippet {
  id: string;
  title: string;
  language: string;
  code: string;
  author: string;
  created_at: string;
  updated_at?: string;
}

/**
 * Fetch initial records from Supabase Postgres 'chat_messages' table
 */
export async function fetchChatMessages(room: string = 'general'): Promise<{ data: ChatMessage[] | null; error: string | null }> {
  if (!isSupabaseConfigured) {
    return { data: null, error: 'Supabase URL and Anon Key are not set in environment variables.' };
  }

  try {
    const { data, error } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('room', room)
      .order('created_at', { ascending: true })
      .limit(100);

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: data as ChatMessage[], error: null };
  } catch (err: any) {
    return { data: null, error: err.message || 'Failed to fetch chat messages.' };
  }
}

/**
 * Function to insert a new message record into 'chat_messages' Postgres table
 */
export async function insertChatMessage(
  message: Omit<ChatMessage, 'id' | 'created_at'>
): Promise<{ data: ChatMessage | null; error: string | null }> {
  if (!isSupabaseConfigured) {
    return { data: null, error: 'Supabase environment variables are missing (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY).' };
  }

  try {
    const payload = {
      sender: message.sender,
      sender_avatar: message.sender_avatar || (message.is_bot ? '🤖' : '🦊'),
      text: message.text,
      room: message.room || 'general',
      is_bot: message.is_bot ?? false,
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('chat_messages')
      .insert([payload])
      .select()
      .single();

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: data as ChatMessage, error: null };
  } catch (err: any) {
    return { data: null, error: err.message || 'Error inserting chat message.' };
  }
}

/**
 * Function to update a record in 'chat_messages' Postgres table
 */
export async function updateChatMessage(
  id: string,
  updates: Partial<ChatMessage>
): Promise<{ error: string | null }> {
  if (!isSupabaseConfigured) {
    return { error: 'Supabase is not configured.' };
  }

  try {
    const { error } = await supabase
      .from('chat_messages')
      .update(updates)
      .eq('id', id);

    if (error) return { error: error.message };
    return { error: null };
  } catch (err: any) {
    return { error: err.message || 'Error updating message.' };
  }
}

/**
 * Function to delete a record in 'chat_messages' Postgres table
 */
export async function deleteChatMessage(id: string): Promise<{ error: string | null }> {
  if (!isSupabaseConfigured) {
    return { error: 'Supabase is not configured.' };
  }

  try {
    const { error } = await supabase
      .from('chat_messages')
      .delete()
      .eq('id', id);

    if (error) return { error: error.message };
    return { error: null };
  } catch (err: any) {
    return { error: err.message || 'Error deleting message.' };
  }
}

/**
 * Subscribe to real-time Postgres changes for 'chat_messages' table
 * Uses Supabase's .channel().on('postgres_changes', ...) listener
 */
export function subscribeToChatMessages(
  room: string,
  callbacks: {
    onInsert?: (newRecord: ChatMessage) => void;
    onUpdate?: (updatedRecord: ChatMessage) => void;
    onDelete?: (deletedId: string) => void;
    onStatusChange?: (status: 'SUBSCRIBED' | 'TIMED_OUT' | 'CLOSED' | 'CHANNEL_ERROR' | 'CONNECTING') => void;
    onError?: (error: Error | string) => void;
  }
): RealtimeChannel | null {
  if (!isSupabaseConfigured) {
    callbacks.onError?.('Supabase credentials (VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY) are not configured.');
    return null;
  }

  callbacks.onStatusChange?.('CONNECTING');

  const channel = supabase
    .channel(`public:chat_messages:room=${room}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'chat_messages',
        filter: `room=eq.${room}`,
      },
      (payload) => {
        if (payload.eventType === 'INSERT' && payload.new) {
          callbacks.onInsert?.(payload.new as ChatMessage);
        } else if (payload.eventType === 'UPDATE' && payload.new) {
          callbacks.onUpdate?.(payload.new as ChatMessage);
        } else if (payload.eventType === 'DELETE' && payload.old) {
          callbacks.onDelete?.(payload.old.id);
        }
      }
    )
    .subscribe((status, err) => {
      if (status === 'SUBSCRIBED') {
        callbacks.onStatusChange?.('SUBSCRIBED');
      } else if (status === 'CHANNEL_ERROR') {
        callbacks.onStatusChange?.('CHANNEL_ERROR');
        callbacks.onError?.(err?.message || 'Realtime subscription channel error.');
      } else if (status === 'TIMED_OUT') {
        callbacks.onStatusChange?.('TIMED_OUT');
        callbacks.onError?.('Realtime subscription timed out.');
      } else if (status === 'CLOSED') {
        callbacks.onStatusChange?.('CLOSED');
      }
    });

  return channel;
}

export interface StudentRecord {
  id: string;
  auth_user_id?: string;
  full_name: string;
  email: string;
  phone?: string;
  avatar_url?: string;
  role?: string;
  xp?: number;
  streak?: number;
  track?: string;
  course_progress?: Record<string, any>;
  created_at?: string;
  updated_at?: string;
}

/**
 * Fetch all students from Supabase 'students' table
 */
export async function fetchStudentsFromSupabase(): Promise<{ data: StudentRecord[] | null; error: string | null }> {
  if (!isSupabaseConfigured) {
    return { data: null, error: 'Supabase credentials are not configured.' };
  }
  try {
    const { data, error } = await supabase
      .from('students')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return { data: null, error: error.message };
    }
    return { data: data as StudentRecord[], error: null };
  } catch (err: any) {
    return { data: null, error: err?.message || 'Failed to fetch students from Supabase.' };
  }
}

/**
 * Fetch student profile by auth_user_id or email from Supabase
 */
export async function fetchStudentProfileFromSupabase(identifier: string): Promise<{ data: StudentRecord | null; error: string | null }> {
  if (!isSupabaseConfigured) {
    return { data: null, error: 'Supabase is not configured.' };
  }
  try {
    const { data, error } = await supabase
      .from('students')
      .select('*')
      .or(`auth_user_id.eq.${identifier},email.eq.${identifier.toLowerCase()}`)
      .limit(1)
      .maybeSingle();

    if (error) return { data: null, error: error.message };
    return { data: data as StudentRecord, error: null };
  } catch (err: any) {
    return { data: null, error: err?.message || 'Failed to fetch student profile.' };
  }
}

/**
 * Insert a new student profile into Supabase 'students' table
 */
export async function insertStudentToSupabase(
  student: StudentRecord
): Promise<{ data: StudentRecord | null; error: string | null }> {
  if (!isSupabaseConfigured) {
    return { data: null, error: 'Supabase credentials are not configured.' };
  }
  try {
    const payload = {
      id: student.id,
      auth_user_id: student.auth_user_id || student.id,
      full_name: student.full_name,
      email: student.email.toLowerCase(),
      phone: student.phone || '',
      avatar_url: student.avatar_url || '🦊',
      role: student.role || 'student',
      xp: student.xp ?? 0,
      streak: student.streak ?? 1,
      track: student.track || 'foundation',
      course_progress: student.course_progress || {},
      created_at: student.created_at || new Date().toISOString(),
      updated_at: student.updated_at || new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('students')
      .insert([payload])
      .select()
      .maybeSingle();

    if (error) {
      return { data: null, error: error.message };
    }
    return { data: (data || payload) as StudentRecord, error: null };
  } catch (err: any) {
    return { data: null, error: err?.message || 'Error inserting student profile.' };
  }
}

/**
 * Update an existing student record in Supabase 'students' table
 */
export async function updateStudentInSupabase(
  id: string,
  updates: Partial<StudentRecord>
): Promise<{ error: string | null }> {
  if (!isSupabaseConfigured) {
    return { error: 'Supabase is not configured.' };
  }
  try {
    const { error } = await supabase
      .from('students')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) return { error: error.message };
    return { error: null };
  } catch (err: any) {
    return { error: err?.message || 'Error updating student record.' };
  }
}

/**
 * Subscribe to real-time changes in Supabase 'students' table
 */
export function subscribeToStudentsChannel(
  callbacks: {
    onInsert?: (newRecord: StudentRecord) => void;
    onUpdate?: (updatedRecord: StudentRecord) => void;
    onDelete?: (deletedId: string) => void;
    onChange?: () => void;
  }
): RealtimeChannel | null {
  if (!isSupabaseConfigured) {
    return null;
  }

  const channel = supabase
    .channel('public:students:realtime')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'students',
      },
      (payload) => {
        callbacks.onChange?.();
        if (payload.eventType === 'INSERT' && payload.new) {
          callbacks.onInsert?.(payload.new as StudentRecord);
        } else if (payload.eventType === 'UPDATE' && payload.new) {
          callbacks.onUpdate?.(payload.new as StudentRecord);
        } else if (payload.eventType === 'DELETE' && payload.old) {
          callbacks.onDelete?.(payload.old.id);
        }
      }
    )
    .subscribe();

  return channel;
}
