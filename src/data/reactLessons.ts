import { Topic, Lesson } from '../types';
import { FrontendLesson } from '../types/frontendClass';
import { REACT_LESSONS_PART1 } from './reactLessonsPart1';
import { REACT_LESSONS_PART2 } from './reactLessonsPart2';
import { REACT_LESSONS_PART3 } from './reactLessonsPart3';
import { REACT_LESSONS_PART4 } from './reactLessonsPart4';

const adaptLesson = (l: FrontendLesson): Lesson => ({
  id: l.id,
  title: l.title,
  content: l.explanation,
  starterCode: typeof l.starterCode === 'string' ? l.starterCode : (l.starterCode?.js || l.starterCode?.html || '')
});

export const reactTopics: Topic[] = [
  {
    id: "getting-started",
    title: {
      en: "Getting Started",
      km: "ការចាប់ផ្តើមដំបូង"
    },
    lessons: [
      ...REACT_LESSONS_PART1.map(adaptLesson),
      ...REACT_LESSONS_PART2.map(adaptLesson),
      ...REACT_LESSONS_PART3.map(adaptLesson)
    ]
  },
  {
    id: "react-hooks",
    title: {
      en: "React Hooks & Routing",
      km: "ការប្រើប្រាស់ React Hooks & Routing"
    },
    lessons: REACT_LESSONS_PART4.map(adaptLesson)
  }
];
