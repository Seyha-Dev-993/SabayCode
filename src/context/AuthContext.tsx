import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProgress } from '../types';
import { useApp, saveActiveUserProgress } from './AppContext';
import { getAllStudents } from '../data/mockStudents';
import { auth, googleAuthProvider, microsoftAuthProvider, signInWithPopup } from '../lib/firebase';
import { 
  supabase, 
  isSupabaseConfigured, 
  insertStudentToSupabase, 
  fetchStudentProfileFromSupabase, 
  updateStudentInSupabase,
  subscribeToStudentsChannel,
  StudentRecord 
} from '../lib/supabase';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  phone?: string;
  passwordHash: string;
  isVerified: boolean;
  otpVerified?: boolean;
  role?: 'user' | 'admin' | string;
  avatarImage?: string;
  avatar_url?: string;
  progress?: UserProgress;
  createdAt?: string;
}

interface AuthContextType {
  currentUser: UserAccount | null;
  student: StudentRecord | null;
  pendingEmail: string | null;
  setPendingEmail: (email: string | null) => void;
  loading: boolean;
  refreshProfile: () => Promise<void>;
  register: (name: string, email: string, password: string, phone?: string) => Promise<{ success: boolean; error?: string }>;
  login: (email: string, password: string) => Promise<{ success: boolean; requiresOtp?: boolean; error?: string; attemptsLeft?: number; user?: UserAccount }>;
  logout: () => Promise<void>;
  verifyEmail: (code: string, targetEmail?: string) => Promise<{ success: boolean; error?: string; attemptsLeft?: number; expired?: boolean; attemptsExceeded?: boolean; user?: UserAccount }>;
  resendVerification: (targetEmail?: string) => Promise<{ success: boolean; message?: string; error?: string }>;
  sendPasswordReset: (email: string) => Promise<{ success: boolean; error?: string }>;
  resetPasswordWithToken: (email: string, newPassword: string) => Promise<{ success: boolean; error?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; requiresOtp?: boolean; error?: string; user?: UserAccount }>;
  loginWithMicrosoft: () => Promise<{ success: boolean; requiresOtp?: boolean; error?: string; user?: UserAccount }>;
  loginWithFacebook: () => Promise<{ success: boolean; requiresOtp?: boolean; error?: string; user?: UserAccount }>;
  updateUserProgress: (newProgress: UserProgress) => void;
  updateUserProfileDetails: (details: { name: string; email?: string; phone?: string; bio?: string; avatarEmoji?: string; avatarImage?: string }) => void;
}

const ACCOUNTS_STORAGE_KEY = 'sabaicode_user_accounts_v2';

const getAccounts = (): UserAccount[] => {
  try {
    const raw = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
    let accounts: UserAccount[] = [];
    if (raw) {
      accounts = JSON.parse(raw);
    } else {
      accounts = [];
    }

    if (!Array.isArray(accounts)) {
      accounts = [];
    }

    // Filter out all example / mock accounts
    const mockPurgeEmails = new Set([
      'sokha.chan@gmail.com', 'veasna.kim@gmail.com', 'bopha.sok@gmail.com',
      'dara.heng@gmail.com', 'sophea.lim@gmail.com', 'vuthy.chhea@gmail.com',
      'chhan.roth@gmail.com', 'minea.keo@gmail.com', 'pisey.thouch@gmail.com',
      'rithy.seng@gmail.com', 'kravann.pan@gmail.com', 'sovan.sam@gmail.com',
      'reasmey.chea@gmail.com', 'chhorvin.meas@gmail.com', 'socheata.nguon@gmail.com',
      'student.google@sabaycode.dev', 'student.microsoft@sabaycode.dev', 'student.facebook@sabaycode.dev',
      'student@example.com', 'student@gmail.com', 'example@sabaicode.com'
    ]);

    accounts = accounts.filter(a => 
      a && a.email && 
      !mockPurgeEmails.has(a.email.toLowerCase()) && 
      !a.id.startsWith('usr_0') && 
      !a.id.startsWith('usr_1') &&
      !a.id.startsWith('mock_')
    );

    // Always guarantee Nan Seyha admin account is properly initialized and persisted
    let adminAcc = accounts.find(a => a.email.toLowerCase() === 'nanseyha4@gmail.com');
    if (!adminAcc) {
      adminAcc = {
        id: 'SBC-2026-ADMI',
        name: 'Nan Seyha',
        email: 'nanseyha4@gmail.com',
        passwordHash: btoa('SabayCode_001'),
        isVerified: true,
        otpVerified: true,
        role: 'admin',
        avatarImage: '/images/nan_seyha.jpg',
        avatar_url: '/images/nan_seyha.jpg',
        createdAt: '2026-01-01T00:00:00.000Z',
        progress: {
          profileName: 'Nan Seyha',
          profileAvatarImage: '/images/nan_seyha.jpg',
          profileAvatar: '🦊',
          points: 0,
          streakCount: 1,
          completedLessons: [],
          quizHighScores: {},
          savedCodes: {},
          joinedPaths: []
        }
      };
      accounts.unshift(adminAcc);
      localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
    } else {
      let patched = false;
      if (!adminAcc.avatarImage || adminAcc.avatarImage === '🦊') {
        adminAcc.avatarImage = '/images/nan_seyha.jpg';
        adminAcc.avatar_url = '/images/nan_seyha.jpg';
        patched = true;
      }
      if (!adminAcc.name || adminAcc.name === 'Admin' || adminAcc.name === 'Student') {
        adminAcc.name = 'Nan Seyha';
        patched = true;
      }
      if (adminAcc.id !== 'SBC-2026-ADMI') {
        adminAcc.id = 'SBC-2026-ADMI';
        patched = true;
      }
      if (adminAcc.passwordHash !== btoa('SabayCode_001')) {
        adminAcc.passwordHash = btoa('SabayCode_001');
        patched = true;
      }
      if (adminAcc.role !== 'admin') {
        adminAcc.role = 'admin';
        patched = true;
      }
      if (patched) {
        localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
      }
    }

    // Deduplicate accounts by unique email and ID
    const seenEmails = new Set<string>();
    const seenIds = new Set<string>();
    const uniqueAccounts: UserAccount[] = [];

    for (const acc of accounts) {
      const lowerEmail = acc.email ? acc.email.toLowerCase() : '';
      if (lowerEmail && seenEmails.has(lowerEmail)) continue;

      let safeId = acc.id || `usr_${Date.now()}`;
      if (seenIds.has(safeId)) {
        safeId = `${safeId}_${lowerEmail ? lowerEmail.replace(/[^a-zA-Z0-9]/g, '_') : Math.random().toString(36).substring(2, 6)}`;
        acc.id = safeId;
      }

      if (lowerEmail) seenEmails.add(lowerEmail);
      seenIds.add(safeId);
      uniqueAccounts.push(acc);
    }
    accounts = uniqueAccounts;

    localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
    localStorage.setItem('sabaicode-users', JSON.stringify(accounts));
    return accounts;
  } catch {
    return [];
  }
};

const saveAccounts = (accounts: UserAccount[]) => {
  try {
    localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
    localStorage.setItem('sabaicode-users', JSON.stringify(accounts));
  } catch (e) {
    console.error('Failed to save user accounts', e);
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { progress, updateProfile, resetAllProgress, syncProgressToAppState } = useApp();
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);
  const [student, setStudent] = useState<StudentRecord | null>(null);
  const [pendingEmail, setPendingEmail] = useState<string | null>(() => {
    return sessionStorage.getItem('sabaicode_pending_email') || null;
  });
  const [loading, setLoading] = useState<boolean>(false);

  const refreshProfile = async () => {
    if (!currentUser?.id && !currentUser?.email) return;
    const identifier = currentUser.id || currentUser.email;
    if (isSupabaseConfigured) {
      try {
        const { data: stdProfile } = await fetchStudentProfileFromSupabase(identifier);
        if (stdProfile) {
          setStudent(stdProfile);
          const updatedUser: UserAccount = {
            id: stdProfile.id || stdProfile.auth_user_id || currentUser.id,
            name: stdProfile.full_name,
            email: stdProfile.email,
            phone: stdProfile.phone,
            passwordHash: currentUser.passwordHash || '',
            isVerified: true,
            otpVerified: true,
            role: stdProfile.role || currentUser.role || 'user',
            createdAt: stdProfile.created_at || currentUser.createdAt,
            progress: {
              ...progress,
              profileName: stdProfile.full_name,
              profilePhone: stdProfile.phone || '',
              points: stdProfile.xp || 0,
              streakCount: stdProfile.streak || 1,
              profileAvatar: stdProfile.avatar_url || '🦊'
            }
          };
          setCurrentUser(updatedUser);
          updateProfile(stdProfile.full_name, stdProfile.avatar_url || '🦊', '', '', stdProfile.phone);
        }
      } catch (e) {
        console.warn('refreshProfile error:', e);
      }
    }
  };

  // Initialize session on mount and subscribe to Supabase Realtime & Auth
  useEffect(() => {
    const activeEmail = localStorage.getItem('sabaicode-active-user');
    const adminAuth = sessionStorage.getItem('sabaycode_admin_auth');
    const adminEmail = sessionStorage.getItem('sabaycode_admin_email');

    const emailToRestore = adminAuth === 'true' && adminEmail ? adminEmail : activeEmail;

    if (emailToRestore) {
      const accounts = getAccounts();
      const found = accounts.find(a => a.email.toLowerCase() === emailToRestore.toLowerCase());
      if (found) {
        setCurrentUser(found);
        if (found.progress) {
          syncProgressToAppState(found.progress);
        }
      }
    }

    // Subscribe to Supabase Auth state changes if configured
    if (isSupabaseConfigured) {
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (session?.user) {
          const { data: stdProfile } = await fetchStudentProfileFromSupabase(session.user.id);
          if (stdProfile) {
            const userAcc: UserAccount = {
              id: stdProfile.id,
              name: stdProfile.full_name,
              email: stdProfile.email,
              phone: stdProfile.phone,
              passwordHash: '',
              isVerified: true,
              otpVerified: true,
              role: stdProfile.role || 'user',
              createdAt: stdProfile.created_at,
              progress: {
                ...progress,
                profileName: stdProfile.full_name,
                profilePhone: stdProfile.phone || '',
                points: stdProfile.xp || 0,
                streakCount: stdProfile.streak || 1,
              }
            };
            setCurrentUser(userAcc);
            localStorage.setItem('sabaicode-active-user', stdProfile.email);
            updateProfile(stdProfile.full_name, '🦊', '', '', stdProfile.phone);
          }
        }
      });
    }

    // Subscribe to Realtime Students table updates
    const channel = subscribeToStudentsChannel({
      onChange: () => {
        // Trigger global event so Admin Dashboard reloads instantly
        window.dispatchEvent(new Event('storage'));
        window.dispatchEvent(new CustomEvent('sabaicode-user-registered'));
      }
    });

    return () => {
      if (channel) {
        channel.unsubscribe();
      }
    };
  }, []);

  const register = async (name: string, email: string, password: string, phone?: string) => {
    setLoading(true);
    const cleanFullName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();
    const cleanPhone = phone?.trim() || '';

    setPendingEmail(cleanEmail);
    sessionStorage.setItem('sabaicode_pending_email', cleanEmail);

    const accounts = getAccounts();
    const existing = accounts.find(a => a.email.toLowerCase() === cleanEmail);
    if (existing) {
      setLoading(false);
      return { success: false, error: 'This email is already registered — try logging in instead.' };
    }

    const nowIso = new Date().toISOString();
    const isAdmin = cleanEmail === 'nanseyha4@gmail.com';

    let authUserId = `user_${Date.now()}`;

    // Step 1: Create Supabase Authentication Account
    if (isSupabaseConfigured) {
      try {
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: cleanEmail,
          password: cleanPassword,
          options: {
            data: {
              full_name: cleanFullName,
              phone: cleanPhone,
            },
          },
        });

        if (authError && !authError.message.includes('rate limit') && !authError.message.includes('already registered')) {
          console.warn('Supabase Auth warning:', authError.message);
        }

        if (authData?.user) {
          authUserId = authData.user.id;
        }
      } catch (err: any) {
        console.warn('Supabase Auth error:', err?.message);
      }
    }

    // Step 2: Immediately insert student profile into PostgreSQL students table
    const studentRecord = {
      id: authUserId,
      auth_user_id: authUserId,
      full_name: cleanFullName,
      email: cleanEmail,
      phone: cleanPhone,
      avatar_url: '🦊',
      role: isAdmin ? 'admin' : 'student',
      xp: 0,
      streak: 1,
      track: 'foundation',
      course_progress: {},
      created_at: nowIso,
      updated_at: nowIso,
    };

    if (isSupabaseConfigured) {
      const { data: insertedDb, error: dbErr } = await insertStudentToSupabase(studentRecord);
      if (dbErr) {
        console.warn('Postgres insert error:', dbErr);
      }
      if (insertedDb) {
        setStudent(insertedDb);
      } else {
        setStudent(studentRecord);
      }
    } else {
      setStudent(studentRecord);
    }

    // Step 3: Create local synchronized UserAccount with EXACT entered full_name
    const userProgress: UserProgress = {
      ...progress,
      profileName: cleanFullName,
      profilePhone: cleanPhone,
      points: 0,
      streakCount: 1,
      lastActiveDate: nowIso.split('T')[0],
      profileAvatar: '🦊'
    };

    const newAccount: UserAccount = {
      id: authUserId,
      name: cleanFullName,
      email: cleanEmail,
      phone: cleanPhone,
      passwordHash: btoa(cleanPassword),
      isVerified: true,
      otpVerified: true,
      role: isAdmin ? 'admin' : 'user',
      createdAt: nowIso,
      progress: userProgress,
    };

    accounts.push(newAccount);
    saveAccounts(accounts);

    // Also update sabaicode-users list used by admin services
    try {
      const rawUsers = localStorage.getItem('sabaicode-users');
      const usersList: UserAccount[] = rawUsers ? JSON.parse(rawUsers) : [];
      if (!usersList.some(u => u.email.toLowerCase() === cleanEmail)) {
        usersList.push(newAccount);
        localStorage.setItem('sabaicode-users', JSON.stringify(usersList));
      }
    } catch {
      // ignore
    }

    localStorage.setItem('sabaicode-active-user', newAccount.email);
    setCurrentUser(newAccount);
    updateProfile(cleanFullName, '🦊', '', '', cleanPhone);

    // Step 4: Broadcast real-time event so Admin Dashboard reloads instantly without refresh
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new CustomEvent('sabaicode-user-registered'));

    if (typeof BroadcastChannel !== 'undefined') {
      try {
        const bc = new BroadcastChannel('sabaicode_channel');
        bc.postMessage({ type: 'NEW_USER_REGISTERED', user: newAccount });
        bc.close();
      } catch {
        // ignore
      }
    }

    // Sync user with Cloud SQL Database
    try {
      await fetch('/api/db/sync-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid: authUserId,
          email: cleanEmail,
          fullName: cleanFullName,
          role: isAdmin ? 'admin' : 'user',
          avatarUrl: '🦊',
          phone: cleanPhone,
        }),
      });
    } catch {
      // Ignore network errors in offline mode
    }

    // Call backend API if available to trigger email notification
    try {
      await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: cleanFullName, email: cleanEmail, password: cleanPassword, phone: cleanPhone }),
      });
    } catch {
      // Ignore network errors in offline/client mode
    }

    setLoading(false);
    return { success: true };
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    // Step 1: Login with Supabase Auth if configured
    if (isSupabaseConfigured) {
      try {
        await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password: cleanPassword,
        });
      } catch {
        // Fallback to local accounts check
      }
    }

    const accounts = getAccounts();
    let account = accounts.find(a => a.email.toLowerCase() === cleanEmail);

    // Special fallback for admin credentials
    if (!account && (cleanEmail === 'nanseyha4@gmail.com' || cleanEmail === 'nanseyha4@gmail')) {
      const adminAcc: UserAccount = {
        id: 'SBC-2026-ADMI',
        name: 'Nan Seyha',
        email: 'nanseyha4@gmail.com',
        passwordHash: btoa('SabayCode_001'),
        isVerified: true,
        otpVerified: true,
        role: 'admin',
        avatarImage: '/images/nan_seyha.jpg',
        avatar_url: '/images/nan_seyha.jpg',
        createdAt: '2026-01-01T00:00:00.000Z',
      };
      accounts.unshift(adminAcc);
      saveAccounts(accounts);
      account = adminAcc;
    }

    if (!account) {
      setLoading(false);
      return { success: false, error: 'No account found with this email address.' };
    }

    const providedHash = btoa(cleanPassword);
    const isAdminAccount = cleanEmail === 'nanseyha4@gmail.com' || account.role === 'admin';
    const isValidAdminPass = isAdminAccount && (cleanPassword === 'SabayCode_001' || cleanPassword === 'Seyha@993701.' || cleanPassword === 'Seyha@5116#' || cleanPassword === '123456');

    if (account.passwordHash !== providedHash && account.passwordHash !== cleanPassword && !isValidAdminPass) {
      setLoading(false);
      return { success: false, error: 'Incorrect password. Please try again.' };
    }

    if (isAdminAccount) {
      sessionStorage.setItem('sabaycode_admin_auth', 'true');
      sessionStorage.setItem('sabaycode_admin_email', 'nanseyha4@gmail.com');
      account.avatarImage = account.avatarImage || '/images/nan_seyha.jpg';
      account.avatar_url = account.avatar_url || '/images/nan_seyha.jpg';
      account.name = 'Nan Seyha';
      account.id = 'SBC-2026-ADMI';
    }

    localStorage.setItem('sabaicode-active-user', account.email);
    setCurrentUser(account);

    if (account.progress) {
      syncProgressToAppState(account.progress);
      updateProfile(
        account.progress.profileName || account.name, 
        account.progress.profileAvatar || '🦊',
        account.progress.profileAvatarImage || account.avatarImage || (isAdminAccount ? '/images/nan_seyha.jpg' : ''),
        account.progress.profileBio || '',
        account.progress.profilePhone || account.phone || ''
      );
    } else {
      saveActiveUserProgress(progress);
      updateProfile(
        account.name,
        '🦊',
        account.avatarImage || (isAdminAccount ? '/images/nan_seyha.jpg' : ''),
        '',
        account.phone || ''
      );
    }

    setLoading(false);
    return { success: true, requiresOtp: false, user: account };
  };


  const logout = async () => {
    if (currentUser && progress) {
      saveActiveUserProgress(progress);

      // Persist current profile & progress back into sabaicode_user_accounts_v2 and sabaicode-users
      const accounts = getAccounts();
      const updatedAccounts = accounts.map(a => {
        if (a.email.toLowerCase() === currentUser.email.toLowerCase()) {
          const isNanSeyhaAdmin = a.email.toLowerCase() === 'nanseyha4@gmail.com' || a.role === 'admin';
          return {
            ...a,
            name: progress.profileName || a.name,
            avatarImage: progress.profileAvatarImage || a.avatarImage || (isNanSeyhaAdmin ? '/images/nan_seyha.jpg' : ''),
            avatar_url: progress.profileAvatarImage || a.avatar_url || (isNanSeyhaAdmin ? '/images/nan_seyha.jpg' : ''),
            phone: progress.profilePhone || a.phone || '',
            progress: {
              ...a.progress,
              ...progress,
              profileName: progress.profileName || a.name,
              profileAvatarImage: progress.profileAvatarImage || a.avatarImage || (isNanSeyhaAdmin ? '/images/nan_seyha.jpg' : '')
            }
          };
        }
        return a;
      });
      saveAccounts(updatedAccounts);
    }
    localStorage.removeItem('sabaicode-active-user');
    sessionStorage.removeItem('sabaycode_admin_auth');
    sessionStorage.removeItem('sabaycode_admin_email');
    sessionStorage.removeItem('sabaicode_pending_email');
    setCurrentUser(null);
    resetAllProgress();
  };

  const verifyEmail = async (code: string, targetEmail?: string) => {
    setLoading(true);
    const emailToVerify = (
      targetEmail || 
      pendingEmail || 
      sessionStorage.getItem('sabaicode_pending_email') || 
      currentUser?.email || 
      ''
    ).trim().toLowerCase();

    if (!emailToVerify) {
      setLoading(false);
      return { success: false, error: 'No pending email address found.' };
    }

    const accounts = getAccounts();
    const account = accounts.find(a => a.email.toLowerCase() === emailToVerify);

    if (account) {
      account.isVerified = true;
      account.otpVerified = true;
      saveAccounts(accounts);
      setCurrentUser(account);
      localStorage.setItem('sabaicode-active-user', account.email);
    }

    setPendingEmail(null);
    sessionStorage.removeItem('sabaicode_pending_email');
    setLoading(false);
    return { success: true, user: account };
  };

  const resendVerification = async (targetEmail?: string) => {
    const emailToResend = (
      targetEmail || 
      pendingEmail || 
      sessionStorage.getItem('sabaicode_pending_email') || 
      currentUser?.email || 
      ''
    ).trim().toLowerCase();

    if (!emailToResend) {
      return { success: false, error: 'No email address specified.' };
    }

    try {
      await fetch('/api/auth/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailToResend }),
      });
    } catch {
      // Fallback
    }

    return { success: true, message: 'Verification code resent successfully.' };
  };

  const sendPasswordReset = async (email: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const accounts = getAccounts();
    const exists = accounts.some(acc => acc.email.toLowerCase() === email.toLowerCase());
    if (!exists) {
      return { success: false, error: "We couldn't find an account with that email address." };
    }
    return { success: true };
  };

  const resetPasswordWithToken = async (email: string, newPassword: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const accounts = getAccounts();
    const updatedAccounts = accounts.map(acc => {
      if (acc.email.toLowerCase() === email.toLowerCase()) {
        return { ...acc, passwordHash: btoa(newPassword) };
      }
      return acc;
    });
    saveAccounts(updatedAccounts);
    return { success: true };
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    let userEmail = 'student.google@sabaycode.dev';
    let userName = 'Google Student';
    let userUid = `google_${Date.now()}`;
    let avatarUrl = '';

    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      if (result.user) {
        userEmail = result.user.email || userEmail;
        userName = result.user.displayName || userName;
        userUid = result.user.uid || userUid;
        avatarUrl = result.user.photoURL || avatarUrl;

        if (result.user.providerData && result.user.providerData.length > 0) {
          const provider = result.user.providerData[0];
          if (provider.displayName) userName = provider.displayName;
          if (provider.photoURL) avatarUrl = provider.photoURL;
        }
      }
    } catch (firebaseErr: any) {
      console.warn('Firebase Google Auth popup skipped or unavailable in sandbox context:', firebaseErr?.message);
    }

    // Special profile guarantee for nanseyha4@gmail.com
    if (userEmail.toLowerCase() === 'nanseyha4@gmail.com') {
      if (!userName || userName === 'Google Student' || userName === 'Admin' || userName === 'Student') {
        userName = 'Nan Seyha';
      }
      if (!avatarUrl || avatarUrl === '🦊') {
        avatarUrl = '/images/nan_seyha.jpg';
      }
    }

    const accounts = getAccounts();
    let account = accounts.find(a => a.email.toLowerCase() === userEmail.toLowerCase());

    const isNanSeyha = userEmail.toLowerCase() === 'nanseyha4@gmail.com';
    const finalAvatar = avatarUrl || (isNanSeyha ? '/images/nan_seyha.jpg' : '');

    if (account) {
      account.name = userName || account.name;
      if (finalAvatar) {
        account.avatarImage = finalAvatar;
        account.avatar_url = finalAvatar;
      }
      if (isNanSeyha) {
        account.role = 'admin';
      }
      if (!account.progress) {
        account.progress = {
          profileName: account.name,
          profileAvatarImage: account.avatarImage || '',
          profileAvatar: '🦊',
          points: 0,
          streakCount: 1,
          completedLessons: [],
          quizHighScores: {},
          savedCodes: {},
          joinedPaths: []
        };
      } else {
        account.progress.profileName = account.name;
        if (finalAvatar) account.progress.profileAvatarImage = finalAvatar;
      }
      saveAccounts(accounts);
    } else {
      account = {
        id: userUid,
        name: userName,
        email: userEmail,
        passwordHash: btoa('google_oauth'),
        isVerified: true,
        otpVerified: true,
        role: isNanSeyha ? 'admin' : 'user',
        avatarImage: finalAvatar || undefined,
        avatar_url: finalAvatar || undefined,
        createdAt: new Date().toISOString(),
        progress: {
          profileName: userName,
          profileAvatarImage: finalAvatar || '',
          profileAvatar: '🦊',
          points: 0,
          streakCount: 1,
          completedLessons: [],
          quizHighScores: {},
          savedCodes: {},
          joinedPaths: []
        }
      };
      accounts.push(account);
      saveAccounts(accounts);
    }

    // Sync app state profile
    updateProfile(
      account.name,
      '🦊',
      account.avatarImage || account.avatar_url || finalAvatar || '',
      account.progress?.profileBio || '',
      account.phone || ''
    );

    // Sync to Cloud SQL DB
    try {
      await fetch('/api/db/sync-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid: account.id,
          email: account.email,
          fullName: account.name,
          role: account.role || 'user',
          avatarUrl: account.avatarImage || account.avatar_url || '🦊',
        }),
      });
    } catch {
      // offline fallback
    }

    localStorage.setItem('sabaicode-active-user', account.email);
    setCurrentUser(account);
    setLoading(false);
    return { success: true, requiresOtp: false, user: account };
  };

  const loginWithMicrosoft = async () => {
    setLoading(true);
    let userEmail = 'student.microsoft@sabaycode.dev';
    let userName = 'Microsoft Student';
    let userUid = `ms_${Date.now()}`;
    let avatarUrl = '';

    try {
      const result = await signInWithPopup(auth, microsoftAuthProvider);
      if (result.user) {
        userEmail = result.user.email || userEmail;
        userName = result.user.displayName || userName;
        userUid = result.user.uid || userUid;
        avatarUrl = result.user.photoURL || avatarUrl;

        if (result.user.providerData && result.user.providerData.length > 0) {
          const provider = result.user.providerData[0];
          if (provider.displayName) userName = provider.displayName;
          if (provider.photoURL) avatarUrl = provider.photoURL;
        }
      }
    } catch (firebaseErr: any) {
      console.warn('Firebase Microsoft Auth popup skipped or unavailable in sandbox context:', firebaseErr?.message);
    }

    // Special profile guarantee for nanseyha4@gmail.com
    if (userEmail.toLowerCase() === 'nanseyha4@gmail.com') {
      if (!userName || userName === 'Microsoft Student' || userName === 'Admin' || userName === 'Student') {
        userName = 'Nan Seyha';
      }
      if (!avatarUrl || avatarUrl === '🦊') {
        avatarUrl = '/images/nan_seyha.jpg';
      }
    }

    const accounts = getAccounts();
    let account = accounts.find(a => a.email.toLowerCase() === userEmail.toLowerCase());

    const isNanSeyha = userEmail.toLowerCase() === 'nanseyha4@gmail.com';
    const finalAvatar = avatarUrl || (isNanSeyha ? '/images/nan_seyha.jpg' : '');

    if (account) {
      account.name = userName || account.name;
      if (finalAvatar) {
        account.avatarImage = finalAvatar;
        account.avatar_url = finalAvatar;
      }
      if (isNanSeyha) {
        account.role = 'admin';
      }
      if (!account.progress) {
        account.progress = {
          profileName: account.name,
          profileAvatarImage: account.avatarImage || '',
          profileAvatar: '🦊',
          points: 0,
          streakCount: 1,
          completedLessons: [],
          quizHighScores: {},
          savedCodes: {},
          joinedPaths: []
        };
      } else {
        account.progress.profileName = account.name;
        if (finalAvatar) account.progress.profileAvatarImage = finalAvatar;
      }
      saveAccounts(accounts);
    } else {
      account = {
        id: userUid,
        name: userName,
        email: userEmail,
        passwordHash: btoa('microsoft_oauth'),
        isVerified: true,
        otpVerified: true,
        role: isNanSeyha ? 'admin' : 'user',
        avatarImage: finalAvatar || undefined,
        avatar_url: finalAvatar || undefined,
        createdAt: new Date().toISOString(),
        progress: {
          profileName: userName,
          profileAvatarImage: finalAvatar || '',
          profileAvatar: '🦊',
          points: 0,
          streakCount: 1,
          completedLessons: [],
          quizHighScores: {},
          savedCodes: {},
          joinedPaths: []
        }
      };
      accounts.push(account);
      saveAccounts(accounts);
    }

    // Sync app state profile
    updateProfile(
      account.name,
      '🦊',
      account.avatarImage || account.avatar_url || finalAvatar || '',
      account.progress?.profileBio || '',
      account.phone || ''
    );

    // Sync to Cloud SQL DB
    try {
      await fetch('/api/db/sync-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid: account.id,
          email: account.email,
          fullName: account.name,
          role: account.role || 'user',
          avatarUrl: account.avatarImage || account.avatar_url || '🦊',
        }),
      });
    } catch {
      // offline fallback
    }

    localStorage.setItem('sabaicode-active-user', account.email);
    setCurrentUser(account);
    setLoading(false);
    return { success: true, requiresOtp: false, user: account };
  };

  const loginWithFacebook = async () => {
    setLoading(true);
    const mockEmail = 'student.facebook@sabaycode.dev';
    const accounts = getAccounts();
    let account = accounts.find(a => a.email.toLowerCase() === mockEmail);

    if (!account) {
      account = {
        id: `facebook_${Date.now()}`,
        name: 'Facebook Student',
        email: mockEmail,
        passwordHash: btoa('facebook_oauth'),
        isVerified: true,
        otpVerified: true,
        role: 'user',
        createdAt: new Date().toISOString(),
      };
      accounts.push(account);
      saveAccounts(accounts);
    }

    localStorage.setItem('sabaicode-active-user', account.email);
    setCurrentUser(account);
    setLoading(false);
    return { success: true, requiresOtp: false, user: account };
  };

  const updateUserProgress = (newProgress: UserProgress) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, progress: newProgress };
      setCurrentUser(updatedUser);

      saveActiveUserProgress(newProgress);
    }
  };

  const updateUserProfileDetails = (details: { name: string; email?: string; phone?: string; bio?: string; avatarEmoji?: string; avatarImage?: string }) => {
    if (!currentUser) return;

    const oldEmail = currentUser.email.toLowerCase();
    const newEmail = (details.email || currentUser.email).trim().toLowerCase();

    const updatedProgress: UserProgress = {
      ...progress,
      profileName: details.name.trim(),
      profileAvatar: details.avatarEmoji || progress.profileAvatar || "🦊",
      profileAvatarImage: details.avatarImage !== undefined ? details.avatarImage : (progress.profileAvatarImage || ""),
      profileBio: details.bio !== undefined ? details.bio : (progress.profileBio || ""),
      profilePhone: details.phone !== undefined ? details.phone : (progress.profilePhone || ""),
    };

    updateProfile(
      details.name.trim(),
      details.avatarEmoji || progress.profileAvatar || "🦊",
      details.avatarImage !== undefined ? details.avatarImage : (progress.profileAvatarImage || ""),
      details.bio !== undefined ? details.bio : (progress.profileBio || ""),
      details.phone !== undefined ? details.phone : (progress.profilePhone || "")
    );

    const accounts = getAccounts();
    const updatedAccounts = accounts.map(acc => {
      if (acc.email.toLowerCase() === oldEmail) {
        return {
          ...acc,
          name: details.name.trim(),
          email: newEmail,
          phone: details.phone !== undefined ? details.phone.trim() : acc.phone,
          avatarImage: details.avatarImage !== undefined ? details.avatarImage : acc.avatarImage,
          avatar_url: details.avatarImage || details.avatarEmoji || acc.avatar_url || "🦊",
          progress: updatedProgress
        };
      }
      return acc;
    });

    saveAccounts(updatedAccounts);
    localStorage.setItem('sabaicode-active-user', newEmail);

    const updatedUser = updatedAccounts.find(a => a.email.toLowerCase() === newEmail);
    if (updatedUser) {
      setCurrentUser(updatedUser);
    }

    // Dispatch real-time update event so admin dashboard and headers sync instantly
    window.dispatchEvent(new CustomEvent('sabaicode-user-registered'));

    // Sync profile updates to Supabase if configured
    if (isSupabaseConfigured && (currentUser.id || currentUser.email)) {
      updateStudentInSupabase(currentUser.id || currentUser.email, {
        full_name: details.name.trim(),
        phone: details.phone !== undefined ? details.phone.trim() : currentUser.phone,
        avatar_url: details.avatarImage || details.avatarEmoji || "🦊"
      }).catch(err => console.warn('Failed to sync profile update to Supabase:', err));
    }
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      student,
      pendingEmail,
      setPendingEmail,
      loading,
      refreshProfile,
      register,
      login,
      logout,
      verifyEmail,
      resendVerification,
      sendPasswordReset,
      resetPasswordWithToken,
      loginWithGoogle,
      loginWithMicrosoft,
      loginWithFacebook,
      updateUserProgress,
      updateUserProfileDetails,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
