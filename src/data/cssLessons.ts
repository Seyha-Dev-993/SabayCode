import { Topic } from '../types';
import { cssLessonsPart1 } from './cssLessonsPart1';
import { cssLessonsPart2 } from './cssLessonsPart2';
import { cssLessonsPart3 } from './cssLessonsPart3';
import { cssLessonsPart4 } from './cssLessonsPart4';

export const cssTopics: Topic[] = [
  {
    id: "getting-started",
    title: {
      en: "Getting Started",
      km: "ការចាប់ផ្តើមដំបូង"
    },
    lessons: [
      ...cssLessonsPart1,
      ...cssLessonsPart2,
      ...cssLessonsPart3
    ]
  },
  {
    id: "css-advanced",
    title: {
      en: "CSS Advanced",
      km: "លក្ខណៈកម្រិតខ្ពស់ CSS"
    },
    lessons: [
      ...cssLessonsPart4
    ]
  }
];
