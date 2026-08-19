import { DatabaseSqlClassEnrollment } from '../types/databaseSqlMasteryClass';

const STORAGE_KEY = 'sabaycode_db_sql_mastery_enrollment_v1';

const defaultEnrollment: DatabaseSqlClassEnrollment = {
  enrolled: false,
  enrolledAt: '',
  lastVisitedLessonId: 'm1-l1',
  completedLessonIds: [],
  quizScores: {},
  capstoneSubmitted: false,
};

const notifyListeners = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('db-sql-mastery-enrollment-updated'));
  }
};

export const getDatabaseSqlClassEnrollment = (): DatabaseSqlClassEnrollment => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultEnrollment;
    const parsed = JSON.parse(raw);
    return { ...defaultEnrollment, ...parsed };
  } catch (e) {
    return defaultEnrollment;
  }
};

export const loadDatabaseSqlClassEnrollment = getDatabaseSqlClassEnrollment;

export const enrollInDatabaseSqlClass = (): DatabaseSqlClassEnrollment => {
  const current = getDatabaseSqlClassEnrollment();
  const updated: DatabaseSqlClassEnrollment = {
    ...current,
    enrolled: true,
    enrolledAt: current.enrolledAt || new Date().toISOString(),
    lastVisitedLessonId: current.lastVisitedLessonId || 'm1-l1',
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners();
  return updated;
};

export const markDatabaseSqlLessonComplete = (lessonId: string): DatabaseSqlClassEnrollment => {
  const current = getDatabaseSqlClassEnrollment();
  const completed = new Set(current.completedLessonIds);
  completed.add(lessonId);
  const updated: DatabaseSqlClassEnrollment = {
    ...current,
    completedLessonIds: Array.from(completed),
    lastVisitedLessonId: lessonId,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners();
  return updated;
};

export const completeDatabaseSqlLesson = markDatabaseSqlLessonComplete;

export const setDatabaseSqlLastVisitedLesson = (lessonId: string): DatabaseSqlClassEnrollment => {
  const current = getDatabaseSqlClassEnrollment();
  const updated: DatabaseSqlClassEnrollment = {
    ...current,
    lastVisitedLessonId: lessonId,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners();
  return updated;
};

export const updateLastVisitedDatabaseSqlLesson = setDatabaseSqlLastVisitedLesson;

export const saveDatabaseSqlQuizScore = (quizId: string, scorePercent: number): DatabaseSqlClassEnrollment => {
  const current = getDatabaseSqlClassEnrollment();
  const updated: DatabaseSqlClassEnrollment = {
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

export const submitDatabaseSqlCapstone = (capstoneCode: string = '', notes: string = ''): DatabaseSqlClassEnrollment => {
  const current = getDatabaseSqlClassEnrollment();
  const updated: DatabaseSqlClassEnrollment = {
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

export const submitDatabaseSqlCapstonePortfolio = (portfolio: { githubRepoUrl?: string; sqlScriptSnippet?: string }): DatabaseSqlClassEnrollment => {
  const current = getDatabaseSqlClassEnrollment();
  const updated: DatabaseSqlClassEnrollment = {
    ...current,
    capstoneSubmitted: true,
    capstoneSubmittedAt: new Date().toISOString(),
    capstoneSubmission: {
      githubRepoUrl: portfolio.githubRepoUrl,
      sqlScriptSnippet: portfolio.sqlScriptSnippet,
      submittedAt: new Date().toISOString(),
    },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners();
  return updated;
};
