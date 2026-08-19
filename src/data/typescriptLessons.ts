import { Topic } from '../types';
import { TYPESCRIPT_LESSONS_PART1 } from './typescriptLessonsPart1';
import { TYPESCRIPT_LESSONS_PART2 } from './typescriptLessonsPart2';

export const typescriptTopics: Topic[] = [
  {
    id: "getting-started",
    title: {
      en: "TypeScript Curriculum",
      km: "កម្មវិធីសិក្សា TypeScript"
    },
    lessons: [
      ...TYPESCRIPT_LESSONS_PART1 as any,
      ...TYPESCRIPT_LESSONS_PART2 as any
    ]
  }
];
