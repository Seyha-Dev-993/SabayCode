import { DART_COURSE_DATA } from './dartCourseData';
import { KOTLIN_COURSE_DATA } from './kotlinCourseData';
import { SWIFT_COURSE_DATA } from './swiftCourseData';
import { JAVA_COURSE_DATA } from './javaCourseData';
import { FLUTTER_COURSE_DATA } from './flutterCourseData';
import { REACT_NATIVE_COURSE_DATA } from './reactNativeCourseData';
import { SWIFTUI_COURSE_DATA } from './swiftUICourseData';
import { JETPACK_COMPOSE_COURSE_DATA } from './jetpackComposeCourseData';
import { KMM_COURSE_DATA } from './kmmCourseData';
import { DOTNET_MAUI_COURSE_DATA } from './dotnetMauiCourseData';

export interface MobileCourseCategory {
  id: string;
  order: number;
  title: { en: string; km: string };
  badge: { en: string; km: string };
  description: { en: string; km: string };
}

export interface MobileLesson {
  id: string;
  slug: string;
  moduleNumber: number;
  lessonNumberInModule: number;
  title: { en: string; km: string };
  durationMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  explanation: { en: string; km: string };
  tutorial: { en: string; km: string };
  starterCode: { html: string };
  realWorldExample?: {
    title: { en: string; km: string };
    description: { en: string; km: string };
  };
  practiceExercise?: {
    question: { en: string; km: string };
    solution: string;
  };
  quizQuestions?: Array<{
    id: string;
    question: { en: string; km: string };
    options: Array<{ id: string; text: { en: string; km: string }; isCorrect: boolean }>;
    explanation: { en: string; km: string };
  }>;
}

export interface MobileCourse {
  id: string;
  title: { en: string; km: string };
  iconName: string;
  type: 'language' | 'framework';
  parentLanguageId?: string;
  categoryId: 'languages' | 'frameworks';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  shortDescription: { en: string; km: string };
  summary: { en: string; km: string };
  estimatedHours: number;
  lessonCount: number;
  usedFor: string;
  realWorldApps: string[];
  prerequisites: { en: string; km: string };
  whatYouWillLearn: { en: string[]; km: string[] };
  toolsAndSetup: { en: string; km: string };
  cheatSheet: Array<{
    concept: string;
    code: string;
    explanation: { en: string; km: string };
  }>;
  quiz: Array<{
    id: string;
    question: { en: string; km: string };
    options: Array<{ id: string; text: { en: string; km: string }; isCorrect: boolean }>;
    explanation: { en: string; km: string };
  }>;
  capstoneProject: {
    title: { en: string; km: string };
    description: { en: string; km: string };
    starterCode: { html: string };
    finalCode?: string;
    featureChecklist?: { en: string[]; km: string[] };
  };
  lessons: MobileLesson[];
}

export const MOBILE_CATEGORIES: MobileCourseCategory[] = [
  {
    id: 'languages',
    order: 1,
    title: { en: '1. Core Mobile Languages (Foundation First)', km: '១. ភាសាមូលដ្ឋានគ្រឹះនៃ Mobile Development' },
    badge: { en: 'Language Basics', km: 'គ្រឹះនៃភាសាសរសេរកូដ' },
    description: {
      en: 'Master the underlying programming languages first before moving into complex mobile frameworks.',
      km: 'រៀនយល់ដឹងពីភាសាសរសេរកូដឲ្យបានច្បាស់លាស់ មុននឹងឈានទៅប្រើប្រាស់ Mobile Frameworks។'
    }
  },
  {
    id: 'frameworks',
    order: 2,
    title: { en: '2. Frameworks & Real App Development', km: '២. Frameworks & ការសរសេរកម្មវិធីពិតប្រាកដ' },
    badge: { en: 'Cross-Platform & Native UI', km: 'បង្កើត App លើ iOS & Android' },
    description: {
      en: 'Build native and cross-platform mobile apps for iOS and Android using modern UI toolkits.',
      km: 'បង្កើតកម្មវិធីទូរស័ព្ទដៃដើរលើ iOS និង Android ដោយប្រើប្រាស់ UI Toolkits ទំនើបៗ។'
    }
  }
];

export const MOBILE_COURSES: MobileCourse[] = [
  // 1. Dart
  DART_COURSE_DATA,

  // 2. Kotlin
  KOTLIN_COURSE_DATA,

  // 3. Swift
  SWIFT_COURSE_DATA,

  // 4. Java for Android
  JAVA_COURSE_DATA,

  // 5. Flutter
  FLUTTER_COURSE_DATA,

  // 6. React Native
  REACT_NATIVE_COURSE_DATA,

  // 7. Jetpack Compose
  JETPACK_COMPOSE_COURSE_DATA,

  // 8. SwiftUI
  SWIFTUI_COURSE_DATA,

  // 9. Kotlin Multiplatform Mobile (KMM)
  KMM_COURSE_DATA,

  // 10. .NET MAUI
  DOTNET_MAUI_COURSE_DATA
];
