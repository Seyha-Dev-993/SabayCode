import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LanguageCode, UserProgress } from '../types';
import { isSupabaseConfigured, updateStudentInSupabase } from '../lib/supabase';
import { ProgressService } from '../services/ProgressService';

interface AppContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  progress: UserProgress;
  completeLesson: (courseId: string, lessonId: string, savedCode?: string) => void;
  setQuizScore: (courseId: string, quizId: string, score: number) => void;
  saveUserCode: (key: string, code: string) => void;
  resetAllProgress: () => void;
  syncProgressToAppState: (newProgress: UserProgress) => void;
  updateProfile: (name: string, avatar: string, avatarImage?: string, bio?: string, phone?: string) => void;
  addXP: (points: number) => void;
  sandboxData: { code: string; lang: string; title: string; lessonId?: string; courseId?: string } | null;
  setSandboxData: (data: { code: string; lang: string; title: string; lessonId?: string; courseId?: string } | null) => void;
}

const defaultProgress: UserProgress = {
  completedLessons: [],
  quizHighScores: {},
  savedCodes: {},
  joinedPaths: [],
  streakCount: 1,
  points: 0,
  profileName: "",
  profileAvatar: "🦊",
};

export const saveActiveUserProgress = (updatedProgress: UserProgress) => {
  try {
    localStorage.setItem('sabaicode-progress', JSON.stringify(updatedProgress));
    const activeEmail = localStorage.getItem('sabaicode-active-user');
    if (!activeEmail) return;

    // 1. Sync to sabaicode_user_accounts_v2
    const ACCOUNTS_STORAGE_KEY = 'sabaicode_user_accounts_v2';
    const rawAccounts = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
    if (rawAccounts) {
      const accounts = JSON.parse(rawAccounts);
      let found = false;
      const updatedAccounts = accounts.map((acc: any) => {
        if (acc.email && acc.email.toLowerCase() === activeEmail.toLowerCase()) {
          found = true;
          return {
            ...acc,
            progress: updatedProgress
          };
        }
        return acc;
      });
      if (found) {
        localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(updatedAccounts));
      }
    }

    // 2. Sync to sabaicode-users
    const rawUsers = localStorage.getItem('sabaicode-users');
    if (rawUsers) {
      const users = JSON.parse(rawUsers);
      const updatedUsers = users.map((u: any) => {
        if (u.email && u.email.toLowerCase() === activeEmail.toLowerCase()) {
          return {
            ...u,
            progress: updatedProgress
          };
        }
        return u;
      });
      localStorage.setItem('sabaicode-users', JSON.stringify(updatedUsers));
    }

    // 3. Sync to Supabase Postgres if configured
    if (isSupabaseConfigured) {
      updateStudentInSupabase(activeEmail, {
        xp: updatedProgress.points || 0,
        streak: updatedProgress.streakCount || 1,
        course_progress: {
          completedLessons: updatedProgress.completedLessons || [],
          quizHighScores: updatedProgress.quizHighScores || {},
          savedCodes: updatedProgress.savedCodes || {},
          joinedPaths: updatedProgress.joinedPaths || []
        }
      }).catch(err => console.warn('Failed to sync progress to Supabase:', err));
    }
  } catch (e) {
    console.error('Error saving active user progress', e);
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>('km');
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');
  const [progress, setProgressState] = useState<UserProgress>(defaultProgress);
  const [sandboxData, setSandboxData] = useState<{ code: string; lang: string; title: string; lessonId?: string; courseId?: string } | null>(null);

  // Load progress accurately from ProgressService
  const refreshProgressFromService = useCallback(() => {
    const activeEmail = localStorage.getItem('sabaicode-active-user') || 'active_student@sabaycode.com';
    const activeName = localStorage.getItem('sabaicode-active-user-name') || 'Student';
    const activeId = localStorage.getItem('sabaicode-active-user-id') || `std_${activeEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;

    const stats = ProgressService.getDashboardStatistics(activeId, activeName, activeEmail);

    const savedProgressRaw = localStorage.getItem('sabaicode-progress');
    let legacyParsed: Partial<UserProgress> = {};
    if (savedProgressRaw) {
      try {
        legacyParsed = JSON.parse(savedProgressRaw);
      } catch (e) {
        console.warn('Legacy parse warning:', e);
      }
    }

    // Compute combined list of completed lessons
    const serviceLessons = Object.values(
      ProgressService.getItem<Record<string, any>>('sabaicode_v3_lesson_progress', {})
    )
      .filter((l: any) => (l.studentId === activeId || (l.studentEmail && l.studentEmail.toLowerCase() === activeEmail.toLowerCase())) && l.status === 'completed')
      .map((l: any) => `${l.courseId}-${l.lessonId}`);

    const combinedLessons = Array.from(new Set([
      ...(legacyParsed.completedLessons || []),
      ...serviceLessons
    ]));

    const compositeProgress: UserProgress = {
      completedLessons: combinedLessons,
      quizHighScores: legacyParsed.quizHighScores || {},
      savedCodes: legacyParsed.savedCodes || {},
      joinedPaths: legacyParsed.joinedPaths || [],
      streakCount: Math.max(stats.currentStreak, legacyParsed.streakCount || 1),
      points: Math.max(stats.totalXP, legacyParsed.points || 0),
      profileName: legacyParsed.profileName || activeName || 'Student',
      profileAvatar: legacyParsed.profileAvatar || '🦊',
      profileAvatarImage: legacyParsed.profileAvatarImage,
      profileBio: legacyParsed.profileBio,
      profilePhone: legacyParsed.profilePhone
    };

    setProgressState(compositeProgress);
  }, []);

  // 1. Initial Load & Event Listeners
  useEffect(() => {
    const savedLang = localStorage.getItem('sabaicode-lang') as LanguageCode;
    setLanguageState(savedLang || 'km');

    const savedTheme = localStorage.getItem('sabaicode-theme') as 'light' | 'dark';
    setThemeState(savedTheme || 'light');

    refreshProgressFromService();

    const handleProgressUpdate = () => {
      refreshProgressFromService();
    };

    window.addEventListener('sabaicode-progress-updated', handleProgressUpdate);
    window.addEventListener('storage', handleProgressUpdate);

    return () => {
      window.removeEventListener('sabaicode-progress-updated', handleProgressUpdate);
      window.removeEventListener('storage', handleProgressUpdate);
    };
  }, [refreshProgressFromService]);

  // 2. Sync Theme class with document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // 3. Sync Language class and attribute with document element
  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('lang', language);
    if (language === 'km') {
      root.classList.add('lang-km');
      root.classList.remove('lang-en');
    } else {
      root.classList.add('lang-en');
      root.classList.remove('lang-km');
    }
  }, [language]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('sabaicode-lang', lang);
  };

  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
    localStorage.setItem('sabaicode-theme', newTheme);
  };

  // Atomic lesson completion via ProgressService
  const completeLesson = (courseId: string, lessonId: string, savedCode?: string) => {
    const activeEmail = localStorage.getItem('sabaicode-active-user') || 'active_student@sabaycode.com';
    const activeName = progress.profileName || localStorage.getItem('sabaicode-active-user-name') || 'Student';
    const activeId = localStorage.getItem('sabaicode-active-user-id') || `std_${activeEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;

    const lessonKey = `${courseId}-${lessonId}`;
    setProgressState((prev) => {
      if (prev.completedLessons.includes(lessonKey)) return prev;
      const updated = {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonKey],
        points: (prev.points || 0) + 50,
      };
      saveActiveUserProgress(updated);
      return updated;
    });

    ProgressService.completeLessonAtomic(activeId, activeName, activeEmail, courseId, lessonId, savedCode)
      .then(() => {
        refreshProgressFromService();
      })
      .catch((err) => {
        console.error('Error completing lesson via ProgressService:', err);
        refreshProgressFromService();
      });
  };

  // Atomic quiz submission via ProgressService
  const setQuizScore = (courseId: string, quizId: string, score: number) => {
    const activeEmail = localStorage.getItem('sabaicode-active-user') || 'active_student@sabaycode.com';
    const activeName = progress.profileName || localStorage.getItem('sabaicode-active-user-name') || 'Student';
    const activeId = localStorage.getItem('sabaicode-active-user-id') || `std_${activeEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;

    ProgressService.submitQuizAtomic(activeId, activeName, activeEmail, courseId, quizId, score)
      .then(() => {
        refreshProgressFromService();
      })
      .catch((err) => console.error('Error submitting quiz score:', err));
  };

  const saveUserCode = (key: string, code: string) => {
    setProgressState((prev) => {
      const updated = {
        ...prev,
        savedCodes: {
          ...prev.savedCodes,
          [key]: code
        }
      };
      saveActiveUserProgress(updated);
      return updated;
    });
  };

  const addXP = (points: number) => {
    const activeEmail = localStorage.getItem('sabaicode-active-user') || 'active_student@sabaycode.com';
    const activeId = localStorage.getItem('sabaicode-active-user-id') || `std_${activeEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;

    ProgressService.recordXPTransactionAtomic({
      studentId: activeId,
      amount: points,
      source: 'streak_bonus',
      description: `Bonus XP Earned (${points} XP)`,
      referenceId: `bonus_${Date.now()}`,
      idempotencyKey: `bonus_xp_${activeId}_${Date.now()}`
    }).then(() => refreshProgressFromService());
  };

  const updateProfile = (name: string, avatar: string, avatarImage?: string, bio?: string, phone?: string) => {
    setProgressState((prev) => {
      const updated = {
        ...prev,
        profileName: name,
        profileAvatar: avatar,
        profileAvatarImage: avatarImage !== undefined ? avatarImage : prev.profileAvatarImage,
        profileBio: bio !== undefined ? bio : prev.profileBio,
        profilePhone: phone !== undefined ? phone : prev.profilePhone
      };
      saveActiveUserProgress(updated);
      return updated;
    });
  };

  const resetAllProgress = () => {
    const activeEmail = localStorage.getItem('sabaicode-active-user') || 'active_student@sabaycode.com';
    const activeId = localStorage.getItem('sabaicode-active-user-id') || `std_${activeEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;

    localStorage.removeItem('sabaicode_v3_lesson_progress');
    localStorage.removeItem('sabaicode_v3_course_progress');
    localStorage.removeItem('sabaicode_v3_quiz_progress');
    localStorage.removeItem('sabaicode_v3_xp_transactions');
    localStorage.removeItem('sabaicode_v3_certificates');
    localStorage.removeItem('sabaicode-progress');

    refreshProgressFromService();
  };

  const syncProgressToAppState = (newProgress: UserProgress) => {
    if (!newProgress) return;
    setProgressState((prev) => {
      const mergedLessons = Array.from(new Set([
        ...(prev.completedLessons || []),
        ...(newProgress.completedLessons || [])
      ]));

      const mergedProgress: UserProgress = {
        ...prev,
        ...newProgress,
        completedLessons: mergedLessons,
        points: Math.max(prev.points || 0, newProgress.points || 0),
        streakCount: Math.max(prev.streakCount || 1, newProgress.streakCount || 1)
      };

      saveActiveUserProgress(mergedProgress);
      return mergedProgress;
    });
  };

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      theme,
      setTheme,
      progress,
      completeLesson,
      setQuizScore,
      saveUserCode,
      resetAllProgress,
      syncProgressToAppState,
      updateProfile,
      addXP,
      sandboxData,
      setSandboxData
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

