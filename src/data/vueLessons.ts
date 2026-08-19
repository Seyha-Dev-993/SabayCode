import { Topic } from '../types';
import { vueLessonsPart1 } from './vueLessonsPart1';
import { vueLessonsPart2 } from './vueLessonsPart2';
import { vueLessonsPart3 } from './vueLessonsPart3';

// Map Vue lessons back to the sidebar groups
export const vueTopics: Topic[] = [
  {
    id: "getting-started",
    title: { en: "Getting Started", km: "ការចាប់ផ្តើមដំបូង" },
    lessons: vueLessonsPart1 // Pages 1 to 17
  },
  {
    id: "scaling-up",
    title: { en: "SCALING UP", km: "ការបង្កើនកម្រិត" },
    lessons: [
      ...vueLessonsPart2, // Pages 18 to 30
      ...vueLessonsPart3  // Pages 31 to 41
    ]
  }
];
