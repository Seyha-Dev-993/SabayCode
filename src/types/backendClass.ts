export interface BackendQuizOption {
  id: string;
  text: { en: string; km: string };
  isCorrect: boolean;
}

export interface BackendQuizQuestion {
  id: string;
  question: { en: string; km: string };
  codeSnippet?: string;
  options: BackendQuizOption[];
  explanation: { en: string; km: string };
}

export interface BackendLesson {
  id: string;
  slug: string;
  moduleNumber: number;
  lessonNumberInModule: number;
  title: { en: string; km: string };
  durationMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  explanation: { en: string; km: string };
  tutorial?: { en: string; km: string };
  starterCode?: {
    js?: string;
    sql?: string;
    json?: string;
    bash?: string;
    python?: string;
    php?: string;
  };
  simulatedOutput?: string;
  realWorldExample: {
    title: { en: string; km: string };
    description: { en: string; km: string };
    code?: string;
  };
  practiceExercise: {
    question: { en: string; km: string };
    hints?: { en: string; km: string }[];
    solution: string;
  };
  quizQuestions: BackendQuizQuestion[];
}

export interface BackendModule {
  id: string;
  moduleNumber: number;
  title: { en: string; km: string };
  description: { en: string; km: string };
  lessons: BackendLesson[];
}

export interface BackendClassEnrollment {
  enrolled: boolean;
  enrolledAt: string;
  lastVisitedLessonId: string;
  completedLessonIds: string[];
  quizScores: Record<string, number>; // lessonId or quizId -> percent
  capstoneSubmitted?: boolean;
}
