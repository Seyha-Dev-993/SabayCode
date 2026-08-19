export interface BilingualText {
  en: string;
  km: string;
}

export interface CustomDiagram {
  type: 
    | 'architecture' 
    | 'relational-model' 
    | 'er-diagram' 
    | 'venn-inner' 
    | 'venn-left' 
    | 'venn-right' 
    | 'venn-full' 
    | 'venn-cross'
    | 'btree' 
    | 'normalization' 
    | 'flowchart' 
    | 'transaction' 
    | 'security' 
    | 'orm'
    | 'custom';
  caption: BilingualText;
  svgData?: {
    nodes?: Array<{ id: string; label: string; subtext?: string; x: number; y: number; type?: 'primary' | 'secondary' | 'accent' | 'warning' }>;
    links?: Array<{ from: string; to: string; label?: string; style?: 'solid' | 'dashed' }>;
    tables?: Array<{ name: string; columns: Array<{ name: string; type: string; pk?: boolean; fk?: boolean }> }>;
    vennLabels?: { left: string; right: string; center: string };
    treeNodes?: any;
    customSvg?: string;
  };
}

export interface CodeExample {
  title: BilingualText;
  description: BilingualText;
  code: string;
}

export interface TableOutputPreview {
  columns: string[];
  rows: (string | number | boolean | null)[][];
  explanation: BilingualText;
}

export interface TryItYourselfSql {
  starterCode: string;
  sampleDataSetupSql?: string;
  hints: BilingualText[];
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

export interface DatabaseSqlLesson {
  id: string;
  moduleId: string;
  moduleNumber: number;
  lessonNumber: number;
  title: BilingualText;
  durationMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Master';
  description: BilingualText; // Short 1-2 sentence description
  explanation: BilingualText; // Substantive 4-6 sentence explanation required per prompt
  diagram: CustomDiagram; // Required explanatory image/diagram per prompt
  tutorial: BilingualText; // Step-by-step tutorial walkthrough
  codeExample: CodeExample; // Formatted SQL code example
  outputPreview: TableOutputPreview; // Rendered output table preview
  tryItYourself: TryItYourselfSql; // Runnable SQL editor
  quiz: QuizQuestion[];
}

export interface DatabaseSqlModule {
  id: string;
  moduleNumber: number;
  title: BilingualText;
  description: BilingualText;
  lessons: DatabaseSqlLesson[];
}

export interface DatabaseSqlClassEnrollment {
  enrolled: boolean;
  enrolledAt: string;
  lastVisitedLessonId: string;
  completedLessonIds: string[];
  quizScores: Record<string, number>;
  capstoneSubmitted: boolean;
  capstoneSubmittedAt?: string;
  capstoneCode?: string;
  capstoneNotes?: string;
  capstoneSubmission?: {
    githubRepoUrl?: string;
    sqlScriptSnippet?: string;
    submittedAt?: string;
  };
}

export interface DatabaseSqlClassInfo {
  id: string;
  title: BilingualText;
  shortDescription: BilingualText;
  badge: string;
  rating: number;
  ratingCount: number;
  durationWeeks: number;
  durationHours: number;
  moduleCount: number;
  lessonCount: number;
  enrolledCount: number;
  level: string;
  prerequisites: {
    en: string[];
    km: string[];
  };
  skillsAcquired: string[];
}
