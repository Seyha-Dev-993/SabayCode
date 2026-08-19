import { AIPromptClassEnrollment, CapstoneTemplateItem } from '../types/aiPromptClass';

const STORAGE_KEY = 'sabaycode_ai_prompt_class_enrollment_v1';

const defaultEnrollment: AIPromptClassEnrollment = {
  enrolled: false,
  enrolledAt: '',
  lastVisitedLessonId: 'm1-l1',
  completedLessonIds: [],
  quizScores: {},
  capstoneTemplates: [],
  capstoneSubmitted: false,
};

const notifyListeners = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('ai-prompt-enrollment-updated'));
  }
};

export const getAIPromptClassEnrollment = (): AIPromptClassEnrollment => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultEnrollment;
    const parsed = JSON.parse(raw);
    return { ...defaultEnrollment, ...parsed };
  } catch (e) {
    return defaultEnrollment;
  }
};

export const loadAIPromptClassEnrollment = getAIPromptClassEnrollment;
export const getAIPromptEnrollment = getAIPromptClassEnrollment;

export const saveAIPromptClassEnrollment = (data: Partial<AIPromptClassEnrollment>): AIPromptClassEnrollment => {
  try {
    const current = getAIPromptClassEnrollment();
    const updated = { ...current, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    notifyListeners();
    return updated;
  } catch (e) {
    return defaultEnrollment;
  }
};

export const enrollInAIPromptClass = (): AIPromptClassEnrollment => {
  const current = getAIPromptClassEnrollment();
  const updated: AIPromptClassEnrollment = {
    ...current,
    enrolled: true,
    enrolledAt: current.enrolledAt || new Date().toISOString(),
    lastVisitedLessonId: current.lastVisitedLessonId || 'm1-l1',
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners();
  return updated;
};

export const markAIPromptLessonComplete = (lessonId: string): AIPromptClassEnrollment => {
  const current = getAIPromptClassEnrollment();
  const completed = new Set(current.completedLessonIds);
  completed.add(lessonId);
  const updated: AIPromptClassEnrollment = {
    ...current,
    completedLessonIds: Array.from(completed),
    lastVisitedLessonId: lessonId,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners();
  return updated;
};

export const setAIPromptLastVisitedLesson = (lessonId: string): AIPromptClassEnrollment => {
  const current = getAIPromptClassEnrollment();
  const updated: AIPromptClassEnrollment = {
    ...current,
    lastVisitedLessonId: lessonId,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners();
  return updated;
};

export const saveAIPromptQuizScore = (quizId: string, scorePercent: number): AIPromptClassEnrollment => {
  const current = getAIPromptClassEnrollment();
  const updated: AIPromptClassEnrollment = {
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

export const saveCapstoneTemplates = (templates: CapstoneTemplateItem[], submit: boolean = false): AIPromptClassEnrollment => {
  const current = getAIPromptClassEnrollment();
  const updated: AIPromptClassEnrollment = {
    ...current,
    capstoneTemplates: templates,
    capstoneSubmitted: current.capstoneSubmitted || submit,
    capstoneSubmittedAt: submit ? new Date().toISOString() : current.capstoneSubmittedAt,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners();
  return updated;
};

export const completeAIPromptLesson = markAIPromptLessonComplete;
export const updateLastVisitedLesson = setAIPromptLastVisitedLesson;
export const submitCapstonePortfolio = (portfolio: any) => saveCapstoneTemplates(portfolio?.templates || [], true);
