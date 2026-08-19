import { Topic, Lesson } from '../types';
import { BOOTSTRAP_LESSONS_PART1 } from './bootstrapLessonsPart1';
import { BOOTSTRAP_LESSONS_PART2 } from './bootstrapLessonsPart2';
import { FrontendLesson } from '../types/frontendClass';

const adaptFrontendLessonToLesson = (fl: FrontendLesson): Lesson => ({
  id: fl.id,
  title: fl.title,
  content: {
    en: `${fl.explanation.en}\n\n${fl.tutorial.en}`,
    km: `${fl.explanation.km}\n\n${fl.tutorial.km}`,
  },
  starterCode: fl.starterCode.html || fl.starterCode.css || fl.starterCode.js || '',
});

export const bootstrapLessonsPart1: Lesson[] = BOOTSTRAP_LESSONS_PART1.map(adaptFrontendLessonToLesson);
export const bootstrapLessonsPart2: Lesson[] = BOOTSTRAP_LESSONS_PART2.map(adaptFrontendLessonToLesson);

export const bootstrapTopics: Topic[] = [
  {
    id: "bootstrap-getting-started",
    title: {
      en: "Bootstrap 5 Getting Started & UI Components",
      km: "ការចាប់ផ្តើមដំបូង និងសមាសភាគ UI"
    },
    lessons: [
      ...bootstrapLessonsPart1,
      ...bootstrapLessonsPart2
    ]
  }
];
