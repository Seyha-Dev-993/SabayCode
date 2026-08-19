export interface BackendCourseCategory {
  id: 'languages' | 'frameworks' | 'databases' | 'security';
  order: number;
  title: { en: string; km: string };
  badge: { en: string; km: string };
  description: { en: string; km: string };
}

export interface BackendLesson {
  id: string;
  slug: string;
  moduleNumber: number;
  lessonNumberInModule: number;
  title: { en: string; km: string };
  durationMinutes: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  objective: { en: string; km: string };
  explanation?: { en: string; km: string };
  tutorial?: { en: string; km: string };
  starterCode: {
    language: string;
    code: string;
  };
  simulatedOutput?: string;
  realWorldExample?: {
    title: { en: string; km: string };
    description: { en: string; km: string };
  };
  practiceExercise?: {
    question: { en: string; km: string };
    solution: string;
  };
  tips?: { en: string; km: string };
  quizQuestions?: Array<{
    id: string;
    question: { en: string; km: string };
    options: Array<{ id: string; text: { en: string; km: string }; isCorrect: boolean }>;
    explanation: { en: string; km: string };
  }>;
}

export interface BackendCourse {
  id: string; // e.g. 'php', 'database-sql', 'javascript-nodejs', 'python', 'java-backend', 'laravel', 'express', 'django', 'spring-boot', 'database-mongodb', 'api-security'
  slug: string;
  title: { en: string; km: string };
  iconName: string;
  type: 'language' | 'framework' | 'database' | 'cross-cutting';
  parentLanguageId?: string; // e.g. 'php' for 'laravel', 'javascript-nodejs' for 'express', 'python' for 'django', 'java-backend' for 'spring-boot'
  categoryId: 'languages' | 'frameworks' | 'databases' | 'security';
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
    id: string;
    slug: string;
    title: { en: string; km: string };
    description: { en: string; km: string };
    starterCode: { language: string; code: string };
    finalCode: string;
    featureChecklist: { en: string[]; km: string[] };
    sampleRequests?: Array<{
      title: string;
      method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
      url: string;
      headers?: Record<string, string>;
      body?: string;
      responseStatus: number;
      responseBody: string;
    }>;
  };
  modules: Array<{
    moduleNumber: number;
    title: { en: string; km: string };
    description: { en: string; km: string };
    lessons: BackendLesson[];
  }>;
}

export const BACKEND_CATEGORIES: BackendCourseCategory[] = [
  {
    id: 'languages',
    order: 1,
    title: { en: '1. Core Languages & Fundamentals', km: '១. ភាសាមូលដ្ឋាន និងគ្រឹះ Backend' },
    badge: { en: 'Language & Runtime', km: 'ភាសា និង Runtime' },
    description: {
      en: 'Master backend programming languages and runtime mechanics before moving into production web frameworks.',
      km: 'រៀនយល់ដឹងពីភាសាសរសេរកូដ និងដំណើរការ Runtime ឲ្យបានច្បាស់លាស់ មុននឹងឈានទៅប្រើប្រាស់ Frameworks។'
    }
  },
  {
    id: 'frameworks',
    order: 2,
    title: { en: '2. Frameworks & Production Backend', km: '២. Frameworks & ការសរសេរ Server អាជីព' },
    badge: { en: 'Production Frameworks', km: 'Frameworks សម្រាប់បង្កើត API' },
    description: {
      en: 'Apply your core language skills to build real REST APIs, web servers, and microservices with industry frameworks.',
      km: 'យកចំណេះដឹងភាសាមូលដ្ឋានទៅបង្កើត REST APIs, Web Servers និងសេវាកម្មអាជីវកម្មពិតប្រាកដ។'
    }
  },
  {
    id: 'databases',
    order: 3,
    title: { en: '3. Databases, NoSQL & Security', km: '៣. គម្រោងទិន្នន័យ NoSQL និងសុវត្ថិភាព API' },
    badge: { en: 'Data & Security', km: 'ទិន្នន័យ និងសុវត្ថិភាព' },
    description: {
      en: 'Relational SQL, MongoDB NoSQL, authentication (JWT/OAuth), input sanitization, and OWASP API security fundamentals.',
      km: 'រៀនពី SQL Database, MongoDB, ការផ្ទៀងផ្ទាត់សិទ្ធិ (JWT), និងការការពារសុវត្ថិភាព API តាមស្តង់ដារ OWASP។'
    }
  }
];

import { SQL_DATABASE_COURSE_DATA } from './backendCourses/sqlDatabaseCourseData';
import { PHP_BACKEND_COURSE_DATA } from './backendCourses/phpBackendCourseData';
import { NODEJS_COURSE_DATA } from './backendCourses/nodejsCourseData';
import { PYTHON_BACKEND_COURSE_DATA } from './backendCourses/pythonBackendCourseData';
import { JAVA_BACKEND_COURSE_DATA } from './backendCourses/javaBackendCourseData';

import { LARAVEL_COURSE_DATA } from './backendCourses/laravelCourseData';
import { EXPRESS_COURSE_DATA } from './backendCourses/expressCourseData';
import { DJANGO_COURSE_DATA } from './backendCourses/djangoCourseData';
import { SPRING_BOOT_COURSE_DATA } from './backendCourses/springBootCourseData';

import { MONGODB_COURSE_DATA } from './backendCourses/mongodbCourseData';
import { API_SECURITY_COURSE_DATA } from './backendCourses/apiSecurityCourseData';

export const ALL_BACKEND_COURSES: BackendCourse[] = [
  // 1. Languages & Core Fundamentals
  PHP_BACKEND_COURSE_DATA,
  NODEJS_COURSE_DATA,
  PYTHON_BACKEND_COURSE_DATA,
  JAVA_BACKEND_COURSE_DATA,

  // 2. Production Frameworks
  LARAVEL_COURSE_DATA,
  EXPRESS_COURSE_DATA,
  DJANGO_COURSE_DATA,
  SPRING_BOOT_COURSE_DATA,

  // 3. Databases & Security
  SQL_DATABASE_COURSE_DATA,
  MONGODB_COURSE_DATA,
  API_SECURITY_COURSE_DATA
];

export const getBackendCourseBySlug = (slug: string): BackendCourse | undefined => {
  return ALL_BACKEND_COURSES.find((course) => 
    course.slug === slug || 
    course.id === slug ||
    (course.id === 'laravel' && (slug === 'laravel-production-apis' || slug === 'laravel')) ||
    (course.id === 'express' && (slug === 'express' || slug === 'express-rest-api' || slug === 'express-js')) ||
    (course.id === 'django' && (slug === 'django' || slug === 'django-rest-framework' || slug === 'django-framework')) ||
    (course.id === 'spring-boot' && (slug === 'spring-boot' || slug === 'spring' || slug === 'spring-boot-framework' || slug === 'spring-boot-apis')) ||
    (course.id === 'java-backend' && (slug === 'java-backend-engineering' || slug === 'java-backend')) ||
    (course.id === 'python-backend' && (slug === 'python-language-backend' || slug === 'python-backend')) ||
    (course.id === 'database-sql' && (slug === 'database-sql-fundamentals' || slug === 'database-sql' || slug === 'sql-database')) ||
    (course.id === 'mongodb' && (slug === 'mongodb-nosql-document-databases' || slug === 'mongodb' || slug === 'mongodb-nosql' || slug === 'mongodb-database'))
  );
};

export const getBackendCourseById = (id: string): BackendCourse | undefined => {
  return ALL_BACKEND_COURSES.find((course) => course.id === id);
};

