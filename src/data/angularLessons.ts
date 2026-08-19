import { Topic, Lesson } from '../types';
import { ANGULAR_LESSONS_PART1 } from './angularLessonsPart1';
import { ANGULAR_LESSONS_PART2 } from './angularLessonsPart2';
import { angularLessonsPart3 } from './angularLessonsPart3';
import { angularLessonsPart4 } from './angularLessonsPart4';
import { FrontendLesson } from '../types/frontendClass';

const adaptFrontendLessonToLesson = (fl: FrontendLesson): Lesson => ({
  id: fl.id,
  title: fl.title,
  content: {
    en: `${fl.explanation.en}\n\n${fl.tutorial.en}`,
    km: `${fl.explanation.km}\n\n${fl.tutorial.km}`,
  },
  starterCode: typeof fl.starterCode === 'string'
    ? fl.starterCode
    : (fl.starterCode?.html || fl.starterCode?.css || fl.starterCode?.js || ''),
});

export const angularLessonsPart1: Lesson[] = ANGULAR_LESSONS_PART1.map(adaptFrontendLessonToLesson);
export const angularLessonsPart2: Lesson[] = ANGULAR_LESSONS_PART2.map(adaptFrontendLessonToLesson);

export const angularTopics: Topic[] = [
  {
    id: "getting-started",
    title: {
      en: "Getting Started",
      km: "ចាប់ផ្តើមដំបូង"
    },
    lessons: [...angularLessonsPart1, ...angularLessonsPart2]
  },
  {
    id: "advanced-angular",
    title: {
      en: "Advanced Angular",
      km: "កម្រិតខ្ពស់ Advanced Angular"
    },
    lessons: [...angularLessonsPart3, ...angularLessonsPart4]
  }
];

