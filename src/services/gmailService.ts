declare const google: any;

const GOOGLE_CLIENT_ID =
  import.meta.env.VITE_GOOGLE_CLIENT_ID ||
  '292333305165-f64j5hioilmlp91e1kk15dp2dslnjbor.apps.googleusercontent.com';

const GMAIL_SCOPES = [
  'https://mail.google.com/',
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/gmail.compose',
  'https://www.googleapis.com/auth/gmail.modify',
  'https://www.googleapis.com/auth/contacts.readonly',
];

export interface GoogleContact {
  resourceName: string;
  name?: string;
  email?: string;
  photoUrl?: string;
  phone?: string;
}

export interface GmailMessageHeader {
  name: string;
  value: string;
}

export interface GmailMessage {
  id: string;
  threadId: string;
  snippet?: string;
  internalDate?: string;
  payload?: {
    headers: GmailMessageHeader[];
    body?: {
      data?: string;
    };
  };
  subject?: string;
  from?: string;
  to?: string;
  date?: string;
}

export interface GmailProfile {
  emailAddress: string;
  messagesTotal: number;
  threadsTotal: number;
  historyId: string;
}

/**
 * Request OAuth 2.0 access token via Google Identity Services client-side prompt
 */
export function requestGmailToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof google === 'undefined' || !google.accounts || !google.accounts.oauth2) {
      return reject(new Error('Google Identity Services SDK is not loaded yet. Please refresh or try again.'));
    }

    try {
      const client = google.accounts.oauth2.initTokenClient({
        client_id: GOOGLE_CLIENT_ID,
        scope: GMAIL_SCOPES.join(' '),
        callback: (response: any) => {
          if (response.error) {
            console.error('Google OAuth error:', response);
            reject(new Error(response.error_description || response.error || 'Authentication failed'));
          } else if (response.access_token) {
            resolve(response.access_token);
          } else {
            reject(new Error('No access token received'));
          }
        },
      });

      client.requestAccessToken({ prompt: 'consent' });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Get current user's Gmail profile
 */
export async function getGmailProfile(accessToken: string): Promise<GmailProfile> {
  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/profile', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Failed to fetch profile (Status ${res.status})`);
  }

  return res.json();
}

/**
 * List messages from user's Gmail inbox
 */
export async function listGmailMessages(
  accessToken: string,
  maxResults = 10,
  query = 'in:inbox'
): Promise<GmailMessage[]> {
  const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=${maxResults}&q=${encodeURIComponent(
    query
  )}`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Failed to list messages (Status ${res.status})`);
  }

  const data = await res.json();
  if (!data.messages || data.messages.length === 0) {
    return [];
  }

  // Fetch details for each message concurrently
  const detailPromises = data.messages.map((m: { id: string }) => getGmailMessageDetails(accessToken, m.id));
  return Promise.all(detailPromises);
}

/**
 * Get individual message details
 */
export async function getGmailMessageDetails(accessToken: string, messageId: string): Promise<GmailMessage> {
  const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}?format=full`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Failed to fetch message details (Status ${res.status})`);
  }

  const rawMessage = await res.json();
  const headers: GmailMessageHeader[] = rawMessage.payload?.headers || [];

  const subjectHeader = headers.find((h) => h.name.toLowerCase() === 'subject');
  const fromHeader = headers.find((h) => h.name.toLowerCase() === 'from');
  const toHeader = headers.find((h) => h.name.toLowerCase() === 'to');
  const dateHeader = headers.find((h) => h.name.toLowerCase() === 'date');

  return {
    id: rawMessage.id,
    threadId: rawMessage.threadId,
    snippet: rawMessage.snippet,
    internalDate: rawMessage.internalDate,
    payload: rawMessage.payload,
    subject: subjectHeader ? subjectHeader.value : '(No Subject)',
    from: fromHeader ? fromHeader.value : 'Unknown Sender',
    to: toHeader ? toHeader.value : 'Me',
    date: dateHeader ? dateHeader.value : '',
  };
}

/**
 * Send email using Gmail API (RFC 2822 format, base64url encoded)
 */
export async function sendGmailEmail(
  accessToken: string,
  to: string,
  subject: string,
  body: string
): Promise<{ id: string; threadId: string }> {
  const emailLines = [
    `To: ${to}`,
    'Content-Type: text/plain; charset=utf-8',
    'MIME-Version: 1.0',
    `Subject: ${subject}`,
    '',
    body,
  ];

  const emailRaw = emailLines.join('\r\n');
  const base64EncodedEmail = btoa(unescape(encodeURIComponent(emailRaw)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ raw: base64EncodedEmail }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Failed to send email (Status ${res.status})`);
  }

  return res.json();
}

/**
 * Fetch Google Contacts using Google People API
 */
export async function fetchGoogleContacts(accessToken: string): Promise<GoogleContact[]> {
  const url =
    'https://people.googleapis.com/v1/people/me/connections?personFields=names,emailAddresses,photos,phoneNumbers&pageSize=100';

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Failed to fetch contacts (Status ${res.status})`);
  }

  const data = await res.json();
  if (!data.connections || !Array.isArray(data.connections)) {
    return [];
  }

  return data.connections.map((c: any) => ({
    resourceName: c.resourceName || '',
    name: c.names?.[0]?.displayName || 'No Name',
    email: c.emailAddresses?.[0]?.value || '',
    photoUrl: c.photos?.[0]?.url || '',
    phone: c.phoneNumbers?.[0]?.value || '',
  }));
}
