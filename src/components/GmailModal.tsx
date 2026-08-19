import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  requestGmailToken,
  getGmailProfile,
  listGmailMessages,
  sendGmailEmail,
  fetchGoogleContacts,
  GmailMessage,
  GmailProfile,
  GoogleContact,
} from '../services/gmailService';
import {
  Mail,
  Send,
  RefreshCw,
  Inbox,
  CheckCircle2,
  AlertCircle,
  X,
  User,
  Search,
  Plus,
  ArrowLeft,
  Lock,
  ExternalLink,
  Users,
  Copy,
  Check,
} from 'lucide-react';

interface GmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GmailModal: React.FC<GmailModalProps> = ({ isOpen, onClose }) => {
  const { language } = useApp();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<GmailProfile | null>(null);
  const [messages, setMessages] = useState<GmailMessage[]>([]);
  const [contacts, setContacts] = useState<GoogleContact[]>([]);
  const [activeTab, setActiveTab] = useState<'inbox' | 'contacts'>('inbox');
  const [selectedMessage, setSelectedMessage] = useState<GmailMessage | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [contactsLoading, setContactsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('in:inbox');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  // Compose State
  const [isComposing, setIsComposing] = useState<boolean>(false);
  const [toEmail, setToEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [bodyText, setBodyText] = useState<string>('');
  const [sending, setSending] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleConnectGmail = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = await requestGmailToken();
      setAccessToken(token);
      
      const userProfile = await getGmailProfile(token);
      setProfile(userProfile);

      const inboxMsgs = await listGmailMessages(token, 10, searchQuery);
      setMessages(inboxMsgs);

      // Load contacts in background
      try {
        const userContacts = await fetchGoogleContacts(token);
        setContacts(userContacts);
      } catch (cErr) {
        console.warn('Could not fetch contacts:', cErr);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to authenticate with Gmail & Google Contacts');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadContacts = async () => {
    if (!accessToken) return;
    setContactsLoading(true);
    try {
      const userContacts = await fetchGoogleContacts(accessToken);
      setContacts(userContacts);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch contacts');
    } finally {
      setContactsLoading(false);
    }
  };

  const handleRefreshMessages = async () => {
    if (!accessToken) return;
    setLoading(true);
    setError(null);
    try {
      const inboxMsgs = await listGmailMessages(accessToken, 10, searchQuery);
      setMessages(inboxMsgs);
    } catch (err: any) {
      setError(err.message || 'Failed to refresh messages');
    } finally {
      setLoading(false);
    }
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessToken) return;
    if (!toEmail.trim() || !subject.trim() || !bodyText.trim()) {
      setError('Please fill in recipient, subject, and email body.');
      return;
    }

    setSending(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await sendGmailEmail(accessToken, toEmail.trim(), subject.trim(), bodyText.trim());
      setSuccessMessage('Email sent successfully via Gmail!');
      setIsComposing(false);
      setToEmail('');
      setSubject('');
      setBodyText('');
      
      // Refresh inbox after short delay
      setTimeout(() => {
        handleRefreshMessages();
      }, 1000);
    } catch (err: any) {
      setError(err.message || 'Failed to send email');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[85vh] overflow-hidden animate-fade-in">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                <span>Gmail Studio Integration</span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400">
                  Google Workspace
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'en'
                  ? 'Connect your Gmail account to manage emails and send notifications'
                  : 'ភ្ជាប់គណនី Gmail របស់អ្នកដើម្បីគ្រប់គ្រងអ៊ីមែល និងផ្ញើសារ'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {error && (
            <div className="flex items-center space-x-2 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span className="flex-1">{error}</span>
            </div>
          )}

          {successMessage && (
            <div className="flex items-center space-x-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 text-emerald-600 dark:text-emerald-400 text-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span className="flex-1">{successMessage}</span>
            </div>
          )}

          {!accessToken ? (
            /* Unauthenticated / Connect View */
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-red-500 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-red-500/20">
                <Mail className="w-8 h-8" />
              </div>
              <div className="max-w-md space-y-2">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'en' ? 'Connect Google Gmail' : 'ភ្ជាប់គណនី Gmail របស់ Google'}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {language === 'en'
                    ? 'Authenticate securely via official Google OAuth2 to list your Gmail messages and compose emails directly from SabayCode.'
                    : 'ផ្ទៀងផ្ទាត់ដោយសុវត្ថិភាពតាមរយៈ Google OAuth2 ដើម្បីមើលសារ និងផ្ញើសារ Gmail ដោយផ្ទាល់ពី SabayCode។'}
                </p>
              </div>

              <button
                onClick={handleConnectGmail}
                disabled={loading}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm shadow-md shadow-red-600/20 transition disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Connecting Google OAuth...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Authorize & Connect Gmail</span>
                  </>
                )}
              </button>

              <div className="text-[11px] text-slate-400 dark:text-slate-500 flex items-center space-x-1">
                <span>Secured by Google OAuth 2.0</span>
                <span>•</span>
                <span>Client ID: 147685874423</span>
              </div>
            </div>
          ) : (
            /* Connected View */
            <div className="space-y-4">
              {/* Account Toolbar & Tab Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xs">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {profile?.emailAddress || 'Connected Account'}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Messages: {profile?.messagesTotal ?? '—'} | Contacts: {contacts.length}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex bg-white dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold">
                    <button
                      onClick={() => {
                        setActiveTab('inbox');
                        setIsComposing(false);
                        setSelectedMessage(null);
                      }}
                      className={`px-3 py-1 rounded-md transition flex items-center space-x-1 cursor-pointer ${
                        activeTab === 'inbox'
                          ? 'bg-red-600 text-white font-bold'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                      }`}
                    >
                      <Inbox className="w-3.5 h-3.5" />
                      <span>Inbox</span>
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab('contacts');
                        setIsComposing(false);
                        setSelectedMessage(null);
                        if (contacts.length === 0) handleLoadContacts();
                      }}
                      className={`px-3 py-1 rounded-md transition flex items-center space-x-1 cursor-pointer ${
                        activeTab === 'contacts'
                          ? 'bg-red-600 text-white font-bold'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                      }`}
                    >
                      <Users className="w-3.5 h-3.5" />
                      <span>Contacts</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setIsComposing(true);
                      setSelectedMessage(null);
                    }}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition shadow-sm cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Compose</span>
                  </button>
                  <button
                    onClick={() => {
                      if (activeTab === 'inbox') handleRefreshMessages();
                      else handleLoadContacts();
                    }}
                    disabled={loading || contactsLoading}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
                    title="Refresh"
                  >
                    <RefreshCw className={`w-4 h-4 ${loading || contactsLoading ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>

              {/* View Router inside Connected View */}
              {isComposing ? (
                /* Compose Email Form */
                <form onSubmit={handleSendEmail} className="space-y-3 bg-slate-50 dark:bg-slate-950/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => setIsComposing(false)}
                      className="flex items-center space-x-1 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-white"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200">New Message</span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">
                      To Email
                    </label>
                    <input
                      type="email"
                      value={toEmail}
                      onChange={(e) => setToEmail(e.target.value)}
                      placeholder="recipient@example.com"
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Subject line..."
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1">
                      Message Body
                    </label>
                    <textarea
                      value={bodyText}
                      onChange={(e) => setBodyText(e.target.value)}
                      rows={6}
                      placeholder="Type your email message here..."
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>

                  <div className="flex justify-end space-x-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsComposing(false)}
                      className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={sending}
                      className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition shadow-md disabled:opacity-50 cursor-pointer"
                    >
                      {sending ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Email</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : selectedMessage ? (
                /* Selected Message Detail */
                <div className="space-y-3 bg-slate-50 dark:bg-slate-950/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                    <button
                      onClick={() => setSelectedMessage(null)}
                      className="flex items-center space-x-1 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-white"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Inbox</span>
                    </button>
                    <span className="text-[10px] text-slate-400 font-mono">{selectedMessage.date}</span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                      {selectedMessage.subject}
                    </h4>
                    <div className="text-xs text-slate-500 dark:text-slate-400 space-y-0.5">
                      <div><strong className="text-slate-700 dark:text-slate-300">From:</strong> {selectedMessage.from}</div>
                      <div><strong className="text-slate-700 dark:text-slate-300">To:</strong> {selectedMessage.to}</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap font-sans">
                    {selectedMessage.snippet || 'No plain text snippet available for this message.'}
                  </div>
                </div>
              ) : activeTab === 'contacts' ? (
                /* Contacts List */
                <div className="space-y-2">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span>Google Contacts ({contacts.length})</span>
                    </span>
                  </div>

                  {contactsLoading ? (
                    <div className="p-8 text-center text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/30 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center space-x-2">
                      <RefreshCw className="w-4 h-4 animate-spin text-red-500" />
                      <span>Loading Google Contacts...</span>
                    </div>
                  ) : contacts.length === 0 ? (
                    <div className="p-8 text-center text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/30 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
                      No Google contacts found or permission not granted.
                    </div>
                  ) : (
                    <div className="space-y-1.5 max-h-[350px] overflow-y-auto pr-1">
                      {contacts.map((contact, idx) => (
                        <div
                          key={contact.resourceName || idx}
                          className="p-3 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 transition flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-3">
                            {contact.photoUrl ? (
                              <img
                                src={contact.photoUrl}
                                alt={contact.name}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs">
                                {contact.name?.[0]?.toUpperCase() || 'C'}
                              </div>
                            )}
                            <div>
                              <div className="text-xs font-bold text-slate-900 dark:text-white">
                                {contact.name}
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                                {contact.email || contact.phone || 'No email specified'}
                              </div>
                            </div>
                          </div>

                          {contact.email && (
                            <div className="flex items-center space-x-1.5">
                              <button
                                onClick={() => {
                                  setToEmail(contact.email!);
                                  setIsComposing(true);
                                }}
                                className="px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950/50 hover:bg-red-100 text-red-600 dark:text-red-400 text-xs font-semibold transition"
                              >
                                Email
                              </button>
                              <button
                                onClick={() => {
                                  navigator.clipboard.writeText(contact.email!);
                                  setCopiedEmail(contact.email!);
                                  setTimeout(() => setCopiedEmail(null), 2000);
                                }}
                                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white transition"
                                title="Copy Email"
                              >
                                {copiedEmail === contact.email ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Inbox Messages List */
                <div className="space-y-2">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                      <Inbox className="w-4 h-4 text-red-500" />
                      <span>Inbox Messages ({messages.length})</span>
                    </span>
                  </div>

                  {messages.length === 0 ? (
                    <div className="p-8 text-center text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/30 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
                      No messages found or inbox is empty.
                    </div>
                  ) : (
                    <div className="space-y-1.5 max-h-[350px] overflow-y-auto pr-1">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          onClick={() => setSelectedMessage(msg)}
                          className="p-3 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 transition cursor-pointer flex flex-col space-y-1"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[70%]">
                              {msg.from}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono truncate">
                              {msg.date ? new Date(msg.date).toLocaleDateString() : ''}
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 truncate">
                            {msg.subject}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                            {msg.snippet}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex items-center justify-between">
          <a
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-red-600 dark:text-red-400 hover:underline flex items-center space-x-1"
          >
            <span>Open Web Gmail</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
