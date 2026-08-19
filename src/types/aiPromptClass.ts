export interface BilingualText {
  en: string;
  km: string;
}

export interface BeforeAfterExample {
  scenario: BilingualText;
  weakPrompt: string;
  weakOutput: BilingualText;
  improvedPrompt: string;
  improvedOutput: BilingualText;
  keyImprovements: BilingualText[];
}

export interface PromptExercise {
  scenario: BilingualText;
  targetDomain: string;
  hints: BilingualText[];
  sampleStrongPrompt: string;
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

export interface AIPromptLesson {
  id: string;
  moduleId: string;
  moduleNumber: number;
  lessonNumber: number;
  title: BilingualText;
  durationMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Master';
  description: BilingualText; // 3-5 original sentences
  tutorial: BilingualText; // Markdown or detailed text
  beforeAfter: BeforeAfterExample;
  realWorldExample: {
    context: BilingualText;
    solution: BilingualText;
  };
  exercise: PromptExercise;
  quiz: QuizQuestion[];
}

export interface AIPromptModule {
  id: string;
  moduleNumber: number;
  title: BilingualText;
  description: BilingualText;
  lessons: AIPromptLesson[];
}

export interface CapstoneTemplateItem {
  id: string;
  domain: string;
  title: string;
  promptText: string;
  structureExplanation: string;
  sampleOutput: string;
}

export interface AIPromptClassEnrollment {
  enrolled: boolean;
  enrolledAt: string;
  lastVisitedLessonId: string;
  completedLessonIds: string[];
  quizScores: Record<string, number>;
  capstoneTemplates: CapstoneTemplateItem[];
  capstoneSubmitted: boolean;
  capstoneSubmittedAt?: string;
}
