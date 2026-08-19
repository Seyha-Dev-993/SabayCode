import { supabase, isSupabaseConfigured, StudentRecord } from '../lib/supabase';
import { AdminStudent, AdminCertificate, AdminActivityLog } from '../types';

/**
 * Service providing real-time data access and persistence using Supabase as the single source of truth.
 */

// Helper to map DB record or UserAccount to AdminStudent
export function formatToAdminStudent(record: any): AdminStudent {
  return {
    id: record.id || record.auth_user_id || `std_${Date.now()}`,
    auth_user_id: record.auth_user_id || record.id,
    full_name: record.full_name || record.name || 'Anonymous Student',
    email: record.email ? record.email.toLowerCase() : '',
    phone: record.phone || record.profilePhone || '',
    avatar_url: record.avatar_url || record.avatarImage || record.profileAvatar || '🦊',
    role: record.role || (record.email?.toLowerCase() === 'nanseyha4@gmail.com' ? 'admin' : 'student'),
    status: record.status || 'active',
    xp: typeof record.xp === 'number' ? record.xp : (record.progress?.points || 0),
    streak: typeof record.streak === 'number' ? record.streak : (record.progress?.streakCount || 1),
    track: record.track || 'foundation',
    created_at: record.created_at || record.createdAt || new Date().toISOString(),
    updated_at: record.updated_at || new Date().toISOString(),
    course_progress: record.course_progress || record.progress?.completedLessons || {},
    certificates_count: record.certificates_count || 0,
    last_login: record.last_login || new Date().toISOString()
  };
}

/**
 * Fetch all students directly from Supabase PostgreSQL 'students' table
 */
export async function fetchAllStudentsFromSupabase(): Promise<AdminStudent[]> {
  if (!isSupabaseConfigured) {
    return getLocalFallbackStudents();
  }

  try {
    const { data, error } = await supabase
      .from('students')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data) {
      console.warn('Supabase fetch query error:', error?.message);
      return getLocalFallbackStudents();
    }

    const fetchedStudents = data.map(formatToAdminStudent);
    const seenEmails = new Set<string>();
    const seenIds = new Set<string>();
    const students: AdminStudent[] = [];

    for (const s of fetchedStudents) {
      const emailLower = s.email ? s.email.toLowerCase() : '';
      if (emailLower && seenEmails.has(emailLower)) continue;
      
      let uniqueId = s.id || `std_${Date.now()}`;
      if (seenIds.has(uniqueId)) {
        uniqueId = `${uniqueId}_${emailLower ? emailLower.replace(/[^a-zA-Z0-9]/g, '_') : Math.random().toString(36).substring(2, 6)}`;
        s.id = uniqueId;
      }

      if (emailLower) seenEmails.add(emailLower);
      seenIds.add(uniqueId);
      students.push(s);
    }

    // Merge with any local offline users if missing from Supabase
    const localUsers = getLocalFallbackStudents();

    for (const localUser of localUsers) {
      const emailLower = localUser.email ? localUser.email.toLowerCase() : '';
      if ((!emailLower || !seenEmails.has(emailLower)) && (!localUser.id || !seenIds.has(localUser.id))) {
        let uniqueId = localUser.id;
        if (seenIds.has(uniqueId)) {
          uniqueId = `${uniqueId}_${emailLower ? emailLower.replace(/[^a-zA-Z0-9]/g, '_') : Math.random().toString(36).substring(2, 6)}`;
          localUser.id = uniqueId;
        }
        if (emailLower) seenEmails.add(emailLower);
        seenIds.add(uniqueId);
        students.push(localUser);
        // Async insert missing local user to Supabase
        syncStudentToSupabase(localUser);
      }
    }

    return students.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  } catch (err) {
    console.error('Error fetching students from Supabase:', err);
    return getLocalFallbackStudents();
  }
}

/**
 * Local fallback users from storage
 */
function getLocalFallbackStudents(): AdminStudent[] {
  try {
    const rawV2 = localStorage.getItem('sabaicode_user_accounts_v2');
    const rawUsers = localStorage.getItem('sabaicode-users');

    const listV2 = rawV2 ? JSON.parse(rawV2) : [];
    const listUsers = rawUsers ? JSON.parse(rawUsers) : [];

    const mapByEmail = new Map<string, any>();

    const mockPurgeEmails = new Set([
      'sokha.chan@gmail.com', 'veasna.kim@gmail.com', 'bopha.sok@gmail.com',
      'dara.heng@gmail.com', 'sophea.lim@gmail.com', 'vuthy.chhea@gmail.com',
      'chhan.roth@gmail.com', 'minea.keo@gmail.com', 'pisey.thouch@gmail.com',
      'rithy.seng@gmail.com', 'kravann.pan@gmail.com', 'sovan.sam@gmail.com',
      'reasmey.chea@gmail.com', 'chhorvin.meas@gmail.com', 'socheata.nguon@gmail.com',
      'student.google@sabaycode.dev', 'student.microsoft@sabaycode.dev', 'student.facebook@sabaycode.dev',
      'student@example.com', 'student@gmail.com', 'example@sabaicode.com'
    ]);

    const isValidUser = (item: any) => {
      if (!item || !item.email) return false;
      const lower = item.email.toLowerCase();
      if (mockPurgeEmails.has(lower)) return false;
      if (typeof item.id === 'string' && (item.id.startsWith('usr_0') || item.id.startsWith('usr_1') || item.id.startsWith('mock_'))) return false;
      return true;
    };

    if (Array.isArray(listV2)) {
      listV2.forEach(item => {
        if (isValidUser(item)) {
          mapByEmail.set(item.email.toLowerCase(), item);
        }
      });
    }

    if (Array.isArray(listUsers)) {
      listUsers.forEach(item => {
        if (isValidUser(item)) {
          const lower = item.email.toLowerCase();
          if (!mapByEmail.has(lower)) {
            mapByEmail.set(lower, item);
          } else {
            mapByEmail.set(lower, { ...mapByEmail.get(lower), ...item });
          }
        }
      });
    }

    if (!mapByEmail.has('nanseyha4@gmail.com')) {
      mapByEmail.set('nanseyha4@gmail.com', {
        id: 'SBC-2026-ADMI',
        name: 'Nan Seyha',
        email: 'nanseyha4@gmail.com',
        role: 'admin',
        avatarImage: '/images/nan_seyha.jpg',
        avatar_url: '/images/nan_seyha.jpg',
        phone: ''
      });
    }

    const formattedList = Array.from(mapByEmail.values()).map(formatToAdminStudent);
    const seenEmails = new Set<string>();
    const seenIds = new Set<string>();
    const result: AdminStudent[] = [];

    for (const item of formattedList) {
      const emailLower = item.email ? item.email.toLowerCase() : '';
      if (emailLower && seenEmails.has(emailLower)) continue;

      let uniqueId = item.id || `std_${Date.now()}`;
      if (seenIds.has(uniqueId)) {
        uniqueId = `${uniqueId}_${emailLower ? emailLower.replace(/[^a-zA-Z0-9]/g, '_') : Math.random().toString(36).substring(2, 6)}`;
        item.id = uniqueId;
      }

      if (emailLower) seenEmails.add(emailLower);
      seenIds.add(uniqueId);
      result.push(item);
    }

    return result;
  } catch {
    return [];
  }
}

/**
 * Insert or update student to Supabase
 */
export async function syncStudentToSupabase(student: Partial<AdminStudent>): Promise<boolean> {
  if (!isSupabaseConfigured || !student.id) return false;

  try {
    const payload = {
      id: student.id,
      auth_user_id: student.auth_user_id || student.id,
      full_name: student.full_name,
      email: student.email?.toLowerCase(),
      phone: student.phone || '',
      avatar_url: student.avatar_url || '🦊',
      role: student.role || 'student',
      status: student.status || 'active',
      xp: student.xp || 0,
      streak: student.streak || 1,
      track: student.track || 'foundation',
      course_progress: student.course_progress || {},
      certificates_count: student.certificates_count || 0,
      updated_at: new Date().toISOString()
    };

    const { error } = await supabase.from('students').upsert([payload], { onConflict: 'id' });
    if (error) {
      console.warn('Supabase upsert student error:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Failed sync to Supabase:', err);
    return false;
  }
}

/**
 * Save updated student details to Supabase
 */
export async function updateAdminStudentInSupabase(
  studentId: string, 
  updates: Partial<AdminStudent>,
  adminUserEmail: string = 'admin@sabaycode.com'
): Promise<{ success: boolean; error?: string }> {
  try {
    // 1. Update in local storage
    const localList = getLocalFallbackStudents();
    const idx = localList.findIndex(s => s.id === studentId || s.email.toLowerCase() === updates.email?.toLowerCase());
    if (idx !== -1) {
      const isImg = updates.avatar_url && (
        updates.avatar_url.startsWith('data:image/') ||
        updates.avatar_url.startsWith('http://') ||
        updates.avatar_url.startsWith('https://') ||
        updates.avatar_url.startsWith('/') ||
        updates.avatar_url.startsWith('blob:')
      );

      localList[idx] = { 
        ...localList[idx], 
        ...updates, 
        avatarImage: isImg ? updates.avatar_url : undefined,
        updated_at: new Date().toISOString() 
      };

      if (localList[idx].progress) {
        if (isImg) {
          localList[idx].progress.profileAvatarImage = updates.avatar_url;
        } else if (updates.avatar_url) {
          localList[idx].progress.profileAvatarImage = '';
          localList[idx].progress.profileAvatar = updates.avatar_url;
        }
      }

      localStorage.setItem('sabaicode_user_accounts_v2', JSON.stringify(localList));
      localStorage.setItem('sabaicode-users', JSON.stringify(localList));

      // Also update active user cache if editing the currently active student
      const activeEmail = localStorage.getItem('sabaicode-active-user')?.toLowerCase();
      if (activeEmail && localList[idx].email?.toLowerCase() === activeEmail) {
        const progKey = `sabaicode-progress-${activeEmail}`;
        const activeProgRaw = localStorage.getItem(progKey);
        if (activeProgRaw) {
          try {
            const activeProg = JSON.parse(activeProgRaw);
            if (updates.avatar_url) {
              if (isImg) {
                activeProg.profileAvatarImage = updates.avatar_url;
              } else {
                activeProg.profileAvatarImage = '';
                activeProg.profileAvatar = updates.avatar_url;
              }
            }
            if (updates.full_name) {
              activeProg.profileName = updates.full_name;
            }
            localStorage.setItem(progKey, JSON.stringify(activeProg));
          } catch (e) {
            console.warn('Failed to sync active user progress:', e);
          }
        }
      }
    }

    // 2. Update directly in Supabase Postgres
    if (isSupabaseConfigured) {
      const { error } = await supabase
        .from('students')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', studentId);

      if (error) {
        console.warn('Supabase student update notice:', error.message);
      }
    }

    // 3. Log activity in Supabase
    await logAdminActivityInSupabase({
      user_id: studentId,
      user_email: adminUserEmail,
      user_name: 'Administrator',
      action: `Updated student details for ${updates.full_name || studentId}`,
      details: JSON.stringify(updates),
      type: 'admin_action'
    });

    // 4. Dispatch real-time event
    window.dispatchEvent(new CustomEvent('sabaicode-user-registered'));
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message || 'Failed to update student' };
  }
}

/**
 * Toggle student suspended status
 */
export async function toggleSuspendStudentInSupabase(
  studentId: string, 
  currentStatus: 'active' | 'suspended',
  studentName: string,
  adminUserEmail: string = 'admin@sabaycode.com'
): Promise<{ success: boolean; newStatus: 'active' | 'suspended' }> {
  const newStatus = currentStatus === 'active' ? 'suspended' : 'active';
  
  await updateAdminStudentInSupabase(
    studentId, 
    { status: newStatus },
    adminUserEmail
  );

  await logAdminActivityInSupabase({
    user_id: studentId,
    user_email: adminUserEmail,
    user_name: 'Administrator',
    action: `${newStatus === 'suspended' ? 'Suspended' : 'Reactivated'} account for ${studentName}`,
    type: 'status_change'
  });

  return { success: true, newStatus };
}

/**
 * Delete student record from Supabase
 */
export async function deleteStudentFromSupabase(
  studentId: string,
  studentName: string,
  adminUserEmail: string = 'admin@sabaycode.com'
): Promise<{ success: boolean; error?: string }> {
  try {
    // Local storage removal
    const localList = getLocalFallbackStudents().filter(s => s.id !== studentId);
    localStorage.setItem('sabaicode_user_accounts_v2', JSON.stringify(localList));
    localStorage.setItem('sabaicode-users', JSON.stringify(localList));

    // Supabase removal
    if (isSupabaseConfigured) {
      const { error } = await supabase
        .from('students')
        .delete()
        .eq('id', studentId);

      if (error) {
        console.warn('Supabase delete notice:', error.message);
      }
    }

    await logAdminActivityInSupabase({
      user_id: studentId,
      user_email: adminUserEmail,
      user_name: 'Administrator',
      action: `Permanently deleted student ${studentName} (${studentId})`,
      type: 'admin_action'
    });

    window.dispatchEvent(new CustomEvent('sabaicode-user-registered'));
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message || 'Failed to delete student' };
  }
}

/**
 * Fetch Certificates from Supabase
 */
export async function fetchCertificatesFromSupabase(): Promise<AdminCertificate[]> {
  if (!isSupabaseConfigured) {
    return getLocalCertificates();
  }

  try {
    const { data, error } = await supabase
      .from('certificates')
      .select('*')
      .order('issue_date', { ascending: false });

    if (error || !data) {
      return getLocalCertificates();
    }

    return data as AdminCertificate[];
  } catch {
    return getLocalCertificates();
  }
}

function getLocalCertificates(): AdminCertificate[] {
  try {
    const raw = localStorage.getItem('sabaicode_certificates');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Issue new Certificate in Supabase
 */
export async function issueCertificateInSupabase(
  certData: Omit<AdminCertificate, 'id' | 'issue_date' | 'certificate_code'>,
  adminUserEmail: string = 'admin@sabaycode.com'
): Promise<AdminCertificate | null> {
  const newCert: AdminCertificate = {
    id: `cert_${Date.now()}`,
    student_id: certData.student_id,
    student_name: certData.student_name,
    student_email: certData.student_email,
    course_id: certData.course_id,
    course_title: certData.course_title,
    issue_date: new Date().toISOString(),
    certificate_code: `SABAY-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Date.now().toString().slice(-4)}`,
    grade: certData.grade || 'Excellence'
  };

  // Local storage save
  const existingCerts = getLocalCertificates();
  existingCerts.unshift(newCert);
  localStorage.setItem('sabaicode_certificates', JSON.stringify(existingCerts));

  // Supabase save
  if (isSupabaseConfigured) {
    try {
      await supabase.from('certificates').insert([newCert]);
    } catch (e) {
      console.warn('Supabase certificate insert notice:', e);
    }
  }

  // Update student cert count
  const students = await fetchAllStudentsFromSupabase();
  const student = students.find(s => s.id === certData.student_id || s.email.toLowerCase() === certData.student_email.toLowerCase());
  if (student) {
    await updateAdminStudentInSupabase(
      student.id, 
      { certificates_count: (student.certificates_count || 0) + 1 },
      adminUserEmail
    );
  }

  await logAdminActivityInSupabase({
    user_id: certData.student_id,
    user_email: adminUserEmail,
    user_name: 'Administrator',
    action: `Issued ${certData.course_title} Certificate to ${certData.student_name}`,
    details: `Code: ${newCert.certificate_code}`,
    type: 'certificate'
  });

  return newCert;
}

/**
 * Fetch Activity Logs from Supabase
 */
export async function fetchActivityLogsFromSupabase(): Promise<AdminActivityLog[]> {
  if (!isSupabaseConfigured) {
    return getLocalActivityLogs();
  }

  try {
    const { data, error } = await supabase
      .from('activity_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    if (error || !data || data.length === 0) {
      return getLocalActivityLogs();
    }

    return data as AdminActivityLog[];
  } catch {
    return getLocalActivityLogs();
  }
}

function getLocalActivityLogs(): AdminActivityLog[] {
  try {
    const raw = localStorage.getItem('sabaicode_activity_logs');
    return raw ? JSON.parse(raw) : [
      {
        id: 'log_init',
        user_email: 'nanseyha4@gmail.com',
        user_name: 'Nan Seyha (System Admin)',
        action: 'Initialized SabayCode Production Admin Dashboard with Supabase Realtime',
        created_at: new Date().toISOString(),
        type: 'admin_action'
      }
    ];
  } catch {
    return [];
  }
}

/**
 * Insert Activity Log to Supabase
 */
export async function logAdminActivityInSupabase(
  log: Omit<AdminActivityLog, 'id' | 'created_at'>
): Promise<void> {
  const newLog: AdminActivityLog = {
    id: `log_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    user_id: log.user_id || 'admin',
    user_email: log.user_email || 'admin@sabaycode.com',
    user_name: log.user_name || 'Administrator',
    action: log.action,
    details: log.details || '',
    created_at: new Date().toISOString(),
    type: log.type || 'admin_action'
  };

  // Save to LocalStorage
  const logs = getLocalActivityLogs();
  logs.unshift(newLog);
  localStorage.setItem('sabaicode_activity_logs', JSON.stringify(logs.slice(0, 200)));

  // Save to Supabase
  if (isSupabaseConfigured) {
    try {
      await supabase.from('activity_logs').insert([newLog]);
    } catch (e) {
      console.warn('Supabase log error:', e);
    }
  }

  // Dispatch custom event
  window.dispatchEvent(new CustomEvent('sabaicode-realtime-activity', { detail: newLog }));
}

/**
 * Subscribe to Supabase Realtime Postgres Changes across students, certificates, and activity_logs
 */
export function subscribeToAllAdminRealtime(
  onPayload: (payload: { table: string; eventType: string; record: any }) => void
) {
  if (!isSupabaseConfigured) return null;

  const channel = supabase
    .channel('public:admin_realtime_hub')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'students' },
      (payload) => {
        onPayload({ table: 'students', eventType: payload.eventType, record: payload.new || payload.old });
      }
    )
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'certificates' },
      (payload) => {
        onPayload({ table: 'certificates', eventType: payload.eventType, record: payload.new || payload.old });
      }
    )
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'activity_logs' },
      (payload) => {
        onPayload({ table: 'activity_logs', eventType: payload.eventType, record: payload.new || payload.old });
      }
    )
    .subscribe();

  return channel;
}
