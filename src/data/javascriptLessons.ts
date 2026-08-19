import { Topic } from '../types';
import { javascriptLessonsPart1 } from './javascriptLessonsPart1';
import { javascriptLessonsPart2 } from './javascriptLessonsPart2';
import { javascriptLessonsPart3 } from './javascriptLessonsPart3';

export const javascriptTopics: Topic[] = [
  {
    id: "getting-started",
    title: {
      en: "Getting Started",
      km: "ការចាប់ផ្តើមដំបូង"
    },
    lessons: [
      ...javascriptLessonsPart1,
      ...javascriptLessonsPart2
    ]
  },
  {
    id: "js-advanced",
    title: {
      en: "JS Advanced",
      km: "JS Advanced"
    },
    lessons: [
      ...javascriptLessonsPart3
    ]
  }
];
