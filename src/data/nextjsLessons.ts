import { Topic } from '../types';
import { nextjsLessonsPart1 } from './nextjsLessonsPart1';
import { nextjsLessonsPart2 } from './nextjsLessonsPart2';
import { nextjsLessonsPart3 } from './nextjsLessonsPart3';
import { nextjsLessonsPart4 } from './nextjsLessonsPart4';
import { nextjsLessonsPart5 } from './nextjsLessonsPart5';
import { nextjsLessonsPart6 } from './nextjsLessonsPart6';

// Map lessons back to their logical folders/topics
export const nextjsTopics: Topic[] = [
  {
    id: "nextjs-getting-started",
    title: { en: "Getting Started", km: "ការចាប់ផ្តើមដំបូង" },
    lessons: nextjsLessonsPart1.slice(0, 6) // Pages 1 to 6
  },
  {
    id: "nextjs-core-features",
    title: { en: "Next.js Features", km: "លក្ខណៈពិសេស Next.js" },
    lessons: nextjsLessonsPart1.slice(6, 14) // Pages 7 to 14
  },
  {
    id: "nextjs-routing-cluster",
    title: { en: "Next.js Routing", km: "ប្រព័ន្ធរៀបចំផ្លូវកូដ" },
    lessons: nextjsLessonsPart2.slice(0, 9) // Pages 15 to 23
  },
  {
    id: "nextjs-configuration-cluster",
    title: { en: "Next.js Configuration", km: "ការកំណត់រចនាសម្ព័ន្ធ" },
    lessons: nextjsLessonsPart2.slice(9, 13) // Pages 24 to 27
  },
  {
    id: "nextjs-api-backend-cluster",
    title: { en: "Next.js API & Backend", km: "API និងផ្នែក Backend" },
    lessons: nextjsLessonsPart3.slice(0, 5) // Pages 28 to 32
  },
  {
    id: "nextjs-api-reference-cluster",
    title: { en: "Next.js API Reference", km: "សៀវភៅណែនាំ APIs" },
    lessons: nextjsLessonsPart3.slice(5, 15) // Pages 33 to 42
  },
  {
    id: "nextjs-styling-seo-cluster",
    title: { en: "Next.js Styling & SEO", km: "ការរចនាបថ និងប្រព័ន្ធ SEO" },
    lessons: nextjsLessonsPart4.slice(0, 3) // Pages 43 to 45
  },
  {
    id: "nextjs-advanced-topics-cluster",
    title: { en: "Next.js Advanced Topics", km: "ចំណេះដឹងកម្រិតខ្ពស់" },
    lessons: nextjsLessonsPart4.slice(3, 15) // Pages 46 to 57
  },
  {
    id: "nextjs-performance-cluster",
    title: { en: "Next.js Performance Optimization", km: "ការបង្កើនល្បឿនគេហទំព័រ" },
    lessons: nextjsLessonsPart5.slice(0, 9) // Pages 58 to 66
  },
  {
    id: "nextjs-testing-cluster",
    title: { en: "Next.js Testing", km: "ការធ្វើតេស្តសាកល្បងកូដ" },
    lessons: nextjsLessonsPart6.slice(0, 5) // Pages 67 to 71
  },
  {
    id: "nextjs-debugging-deployment-cluster",
    title: { en: "Next.js Debugging & Deployment", km: "ការកែកំហុស និងការដាក់ឱ្យដើរ" },
    lessons: nextjsLessonsPart6.slice(5, 7) // Pages 72 to 73
  },
  {
    id: "nextjs-useful-resources-cluster",
    title: { en: "Next.js Useful Resources", km: "ធនធានមានប្រយោជន៍ និងជំនួយ" },
    lessons: nextjsLessonsPart6.slice(7, 11) // Pages 74 to 77
  }
];
