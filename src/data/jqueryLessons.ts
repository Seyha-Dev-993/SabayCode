import { Topic } from '../types';
import { jqueryLessonsPart1 } from './jqueryLessonsPart1';
import { jqueryLessonsPart2 } from './jqueryLessonsPart2';
import { jqueryLessonsPart3 } from './jqueryLessonsPart3';
import { jqueryLessonsPart4, jqueryReferences, jqueryQuizzes, jqueryMiniProjects } from './jqueryLessonsPart4';

// Map all 46 lessons into their exact topic headings
export const jqueryTopics: Topic[] = [
  {
    id: "getting-started",
    title: { en: "Getting Started", km: "ការចាប់ផ្តើមដំបូង" },
    lessons: jqueryLessonsPart1.slice(0, 6) // Lessons 1-6
  },
  {
    id: "jquery-effects",
    title: { en: "jQuery Effects", km: "ចលនា និងផលរំញ័រ" },
    lessons: jqueryLessonsPart1.slice(6, 13) // Lessons 7-13
  },
  {
    id: "jquery-html",
    title: { en: "jQuery HTML", km: "ការគ្រប់គ្រង HTML/DOM" },
    lessons: jqueryLessonsPart2.slice(0, 7) // Lessons 14-20
  },
  {
    id: "jquery-traversing",
    title: { en: "jQuery Traversing", km: "ការរុករករចនាសម្ព័ន្ធ" },
    lessons: jqueryLessonsPart2.slice(7, 12) // Lessons 21-25
  },
  {
    id: "jquery-ajax",
    title: { en: "jQuery AJAX", km: "ការងារទាញទិន្នន័យ AJAX" },
    lessons: jqueryLessonsPart3.slice(0, 3) // Lessons 26-28
  },
  {
    id: "jquery-misc",
    title: { en: "jQuery Misc", km: "មុខងារផ្សេងៗ" },
    lessons: jqueryLessonsPart3.slice(3, 5) // Lessons 29-30
  },
  {
    id: "jquery-cert",
    title: { en: "jQuery Cert", km: "វិញ្ញាបនបត្របញ្ចប់" },
    lessons: [jqueryLessonsPart3[5]] // Lesson 31
  },
  {
    id: "jquery-examples",
    title: { en: "jQuery Examples", km: "ឧទាហរណ៍ និងផែនការ" },
    lessons: jqueryLessonsPart3.slice(6, 12) // Lessons 32-37
  },
  {
    id: "jquery-references",
    title: { en: "jQuery References", km: "សៀវភៅជំនួយរហ័ស" },
    lessons: jqueryLessonsPart4 // Lessons 38-46
  }
];

// Re-export references, quizzes and mini-projects for central coursesData registry
export { jqueryReferences, jqueryQuizzes, jqueryMiniProjects };
