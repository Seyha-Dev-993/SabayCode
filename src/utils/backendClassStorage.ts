import { BackendClassEnrollment } from '../types/backendClass';

const STORAGE_KEY = 'sabaycode_backend_class_enrollment';

const DEFAULT_ENROLLMENT: BackendClassEnrollment = {
  enrolled: false,
  enrolledAt: '',
  lastVisitedLessonId: 'm1-l1',
  completedLessonIds: [],
  quizScores: {},
  capstoneSubmitted: false,
};

export function getBackendEnrollment(): BackendClassEnrollment {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_ENROLLMENT;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_ENROLLMENT, ...parsed };
  } catch (err) {
    console.error('Failed to parse backend class enrollment', err);
    return DEFAULT_ENROLLMENT;
  }
}

export function saveBackendEnrollment(data: Partial<BackendClassEnrollment>): BackendClassEnrollment {
  const current = getBackendEnrollment();
  const updated = { ...current, ...data };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    // Dispatch custom event so components re-render when enrollment updates
    window.dispatchEvent(new Event('backend-enrollment-updated'));
  } catch (err) {
    console.error('Failed to save backend class enrollment', err);
  }
  return updated;
}

export function enrollInBackendClass(): BackendClassEnrollment {
  const current = getBackendEnrollment();
  if (current.enrolled) return current;

  return saveBackendEnrollment({
    enrolled: true,
    enrolledAt: new Date().toISOString(),
    lastVisitedLessonId: current.lastVisitedLessonId || 'm1-l1',
  });
}

export function markBackendLessonComplete(lessonId: string): BackendClassEnrollment {
  const current = getBackendEnrollment();
  const completed = new Set(current.completedLessonIds);
  completed.add(lessonId);

  return saveBackendEnrollment({
    completedLessonIds: Array.from(completed),
    lastVisitedLessonId: lessonId,
  });
}

export function markBackendLessonIncomplete(lessonId: string): BackendClassEnrollment {
  const current = getBackendEnrollment();
  const completed = current.completedLessonIds.filter((id) => id !== lessonId);

  return saveBackendEnrollment({
    completedLessonIds: completed,
  });
}

export function saveBackendQuizScore(lessonId: string, percent: number): BackendClassEnrollment {
  const current = getBackendEnrollment();
  const quizScores = { ...current.quizScores, [lessonId]: percent };
  return saveBackendEnrollment({ quizScores });
}
