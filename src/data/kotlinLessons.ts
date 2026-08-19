import { Topic } from '../types';
import { kotlinLessonsPart1 } from './kotlinLessonsPart1';
import { kotlinLessonsPart2 } from './kotlinLessonsPart2';
import { kotlinLessonsPart3 } from './kotlinLessonsPart3';
import { kotlinLessonsPart4 } from './kotlinLessonsPart4';

export const kotlinTopics: Topic[] = [
  {
    id: "kotlin-tutorial",
    title: {
      en: "Kotlin Tutorial",
      km: "មេរៀនគ្រឹះ Kotlin"
    },
    lessons: [
      ...kotlinLessonsPart1,
      ...kotlinLessonsPart2,
      ...kotlinLessonsPart3
    ]
  },
  {
    id: "kotlin-classes",
    title: {
      en: "Kotlin Classes",
      km: "ថ្នាក់ និងវត្ថុ Kotlin"
    },
    lessons: [
      ...kotlinLessonsPart4
    ]
  }
];
