export interface FrontendQuizOption {
  id: string;
  text: { en: string; km: string };
  isCorrect: boolean;
}

export interface FrontendQuizQuestion {
  id: string;
  question: { en: string; km: string };
  codeSnippet?: string;
  options: FrontendQuizOption[];
  explanation: { en: string; km: string };
}

export interface FrontendLesson {
  id: string;
  slug: string;
  moduleNumber: number;
  lessonNumberInModule: number;
  title: { en: string; km: string };
  durationMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  explanation: { en: string; km: string };
  tutorial: { en: string; km: string };
  screenReaderAnnouncement?: string;
  accessibilityTree?: string;
  viewportComparison?: {
    mobile: { width: string; description: { en: string; km: string } };
    tablet: { width: string; description: { en: string; km: string } };
    desktop: { width: string; description: { en: string; km: string } };
  };
  starterCode: {
    html?: string;
    css?: string;
    js?: string;
  };
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
  quizQuestions: FrontendQuizQuestion[];
}

export interface FrontendModule {
  id: string;
  moduleNumber: number;
  title: { en: string; km: string };
  description: { en: string; km: string };
  lessons: FrontendLesson[];
}

export interface FrontendClassEnrollment {
  enrolled: boolean;
  enrolledAt: string;
  lastVisitedLessonId: string;
  completedLessonIds: string[];
  quizScores: Record<string, number>; // lessonId or quizId -> percent
  capstoneSubmitted?: boolean;
}

export interface FrontendCourse {
  id: string;
  title: { en: string; km: string };
  iconName: string;
  categoryId: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  shortDescription: { en: string; km: string };
  summary: { en: string; km: string };
  estimatedHours: number;
  lessonCount: number;
  cheatSheet: Array<{
    concept: string;
    code: string;
    explanation: { en: string; km: string };
  }>;
  quiz: FrontendQuizQuestion[];
  capstoneProject: {
    title: { en: string; km: string };
    description: { en: string; km: string };
    starterCode: {
      html?: string;
      css?: string;
      js?: string;
    };
    solutionCode?: {
      html?: string;
      css?: string;
      js?: string;
    };
  };
  lessons: FrontendLesson[];
}
