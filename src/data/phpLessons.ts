import { Topic } from '../types';
import { phpLessonsPart1 } from './phpLessonsPart1';
import { phpLessonsPart2 } from './phpLessonsPart2';
import { phpLessonsPart3 } from './phpLessonsPart3';
import { phpLessonsPart4 } from './phpLessonsPart4';
import { phpLessonsPart5 } from './phpLessonsPart5';

export const phpTopics: Topic[] = [
  {
    id: "getting-started",
    title: {
      en: "Getting Started",
      km: "ចាប់ផ្តើមដំបូង"
    },
    lessons: [...phpLessonsPart1, ...phpLessonsPart2]
  },
  {
    id: "php-oop",
    title: {
      en: "PHP OOP",
      km: "PHP បែបតម្រង់វត្ថុ (OOP)"
    },
    lessons: phpLessonsPart3
  },
  {
    id: "php-forms",
    title: {
      en: "PHP Forms",
      km: "ទម្រង់ព័ត៌មាន PHP Forms"
    },
    lessons: phpLessonsPart4
  },
  {
    id: "php-advanced",
    title: {
      en: "PHP Advanced",
      km: "កម្រិតខ្ពស់ PHP Advanced"
    },
    lessons: phpLessonsPart5
  }
];
