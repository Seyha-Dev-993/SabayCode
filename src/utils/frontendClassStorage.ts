import { FrontendClassEnrollment } from '../types/frontendClass';

const STORAGE_KEY = 'sabaycode_frontend_class_enrollment_v1';

const defaultEnrollment: FrontendClassEnrollment = {
  enrolled: false,
  enrolledAt: '',
  lastVisitedLessonId: 'm1-l1',
  completedLessonIds: [],
  quizScores: {},
  capstoneSubmitted: false,
};

export const getFrontendClassEnrollment = (): FrontendClassEnrollment => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultEnrollment;
    const parsed = JSON.parse(raw);
    return { ...defaultEnrollment, ...parsed };
  } catch (e) {
    return defaultEnrollment;
  }
};

export const saveFrontendClassEnrollment = (data: Partial<FrontendClassEnrollment>): FrontendClassEnrollment => {
  try {
    const current = getFrontendClassEnrollment();
    const updated = { ...current, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    return defaultEnrollment;
  }
};

export const enrollInFrontendClass = (): FrontendClassEnrollment => {
  const current = getFrontendClassEnrollment();
  const updated: FrontendClassEnrollment = {
    ...current,
    enrolled: true,
    enrolledAt: current.enrolledAt || new Date().toISOString(),
    lastVisitedLessonId: current.lastVisitedLessonId || 'm1-l1',
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const markLessonCompleteInClass = (lessonId: string): FrontendClassEnrollment => {
  const current = getFrontendClassEnrollment();
  const completed = new Set(current.completedLessonIds);
  completed.add(lessonId);
  const updated: FrontendClassEnrollment = {
    ...current,
    completedLessonIds: Array.from(completed),
    lastVisitedLessonId: lessonId,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const setLastVisitedLesson = (lessonId: string): FrontendClassEnrollment => {
  const current = getFrontendClassEnrollment();
  const updated: FrontendClassEnrollment = {
    ...current,
    lastVisitedLessonId: lessonId,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const saveQuizScoreInClass = (quizId: string, scorePercent: number): FrontendClassEnrollment => {
  const current = getFrontendClassEnrollment();
  const updated: FrontendClassEnrollment = {
    ...current,
    quizScores: {
      ...current.quizScores,
      [quizId]: scorePercent,
    },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};
