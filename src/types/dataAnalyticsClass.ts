export interface BilingualText {
  en: string;
  km: string;
}

export interface QuizOption {
  id: string;
  text: BilingualText;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  question: BilingualText;
  options: QuizOption[];
  explanation: BilingualText;
}

export interface CodeExample {
  code: string;
  language: 'python' | 'sql';
  title: BilingualText;
  description: BilingualText;
}

export interface OutputPreview {
  output: string;
  explanation: BilingualText;
}

export interface TryItYourself {
  starterCode: string;
  expectedOutput: string;
  language: 'python' | 'sql';
  hints: BilingualText[];
}

export interface DataAnalyticsLesson {
  id: string;
  moduleId: string;
  moduleNumber: number;
  lessonNumber: number;
  title: BilingualText;
  durationMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Master';
  description: BilingualText;
  tutorial: BilingualText;
  codeExample: CodeExample;
  outputPreview: OutputPreview;
  tryItYourself: TryItYourself;
  quiz: QuizQuestion[];
}

export interface DataAnalyticsModule {
  id: string;
  moduleNumber: number;
  title: BilingualText;
  description: BilingualText;
  lessons: DataAnalyticsLesson[];
}

export interface DataAnalyticsClassEnrollment {
  enrolled: boolean;
  enrolledAt: string;
  lastVisitedLessonId: string;
  completedLessonIds: string[];
  quizScores: Record<string, number>;
  capstoneSubmitted: boolean;
  capstoneSubmittedAt?: string;
  capstoneCode?: string;
  capstoneNotes?: string;
}
