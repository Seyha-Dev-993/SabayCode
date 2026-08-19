import { DataAnalyticsClassEnrollment } from '../types/dataAnalyticsClass';

const STORAGE_KEY = 'sabaycode_data_analytics_class_enrollment_v1';

const defaultEnrollment: DataAnalyticsClassEnrollment = {
  enrolled: false,
  enrolledAt: '',
  lastVisitedLessonId: 'm1-l1',
  completedLessonIds: [],
  quizScores: {},
  capstoneSubmitted: false,
};

const notifyListeners = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('data-analytics-enrollment-updated'));
  }
};

export const getDataAnalyticsClassEnrollment = (): DataAnalyticsClassEnrollment => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultEnrollment;
    const parsed = JSON.parse(raw);
    return { ...defaultEnrollment, ...parsed };
  } catch (e) {
    return defaultEnrollment;
  }
};

export const loadDataAnalyticsClassEnrollment = getDataAnalyticsClassEnrollment;

export const enrollInDataAnalyticsClass = (): DataAnalyticsClassEnrollment => {
  const current = getDataAnalyticsClassEnrollment();
  const updated: DataAnalyticsClassEnrollment = {
    ...current,
    enrolled: true,
    enrolledAt: current.enrolledAt || new Date().toISOString(),
    lastVisitedLessonId: current.lastVisitedLessonId || 'm1-l1',
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners();
  return updated;
};

export const markDataAnalyticsLessonComplete = (lessonId: string): DataAnalyticsClassEnrollment => {
  const current = getDataAnalyticsClassEnrollment();
  const completed = new Set(current.completedLessonIds);
  completed.add(lessonId);
  const updated: DataAnalyticsClassEnrollment = {
    ...current,
    completedLessonIds: Array.from(completed),
    lastVisitedLessonId: lessonId,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners();
  return updated;
};

export const completeDataAnalyticsLesson = markDataAnalyticsLessonComplete;

export const setDataAnalyticsLastVisitedLesson = (lessonId: string): DataAnalyticsClassEnrollment => {
  const current = getDataAnalyticsClassEnrollment();
  const updated: DataAnalyticsClassEnrollment = {
    ...current,
    lastVisitedLessonId: lessonId,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners();
  return updated;
};

export const updateLastVisitedDataAnalyticsLesson = setDataAnalyticsLastVisitedLesson;

export const saveDataAnalyticsQuizScore = (quizId: string, scorePercent: number): DataAnalyticsClassEnrollment => {
  const current = getDataAnalyticsClassEnrollment();
  const updated: DataAnalyticsClassEnrollment = {
    ...current,
    quizScores: {
      ...current.quizScores,
      [quizId]: scorePercent,
    },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners();
  return updated;
};

export const submitDataAnalyticsCapstone = (capstoneCode: string = '', notes: string = ''): DataAnalyticsClassEnrollment => {
  const current = getDataAnalyticsClassEnrollment();
  const updated: DataAnalyticsClassEnrollment = {
    ...current,
    capstoneSubmitted: true,
    capstoneSubmittedAt: new Date().toISOString(),
    capstoneCode,
    capstoneNotes: notes,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners();
  return updated;
};

export const submitDataAnalyticsCapstonePortfolio = (portfolio: any): DataAnalyticsClassEnrollment => {
  return submitDataAnalyticsCapstone(JSON.stringify(portfolio), 'Portfolio submitted');
};
