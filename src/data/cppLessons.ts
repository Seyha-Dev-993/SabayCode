import { Topic } from '../types';
import { cppLessonsPart1 } from './cppLessonsPart1';
import { cppLessonsPart2 } from './cppLessonsPart2';
import { cppLessonsPart3 } from './cppLessonsPart3';
import { cppLessonsPart4 } from './cppLessonsPart4';
import { cppLessonsPart5 } from './cppLessonsPart5';

export const cppTopics: Topic[] = [
  {
    id: "getting-started",
    title: {
      en: "C++ Basics",
      km: "មូលដ្ឋានគ្រឹះ C++"
    },
    lessons: [...cppLessonsPart1, ...cppLessonsPart2]
  },
  {
    id: "cpp-functions",
    title: {
      en: "C++ Functions",
      km: "អនុគមន៍ C++"
    },
    lessons: cppLessonsPart3
  },
  {
    id: "cpp-classes",
    title: {
      en: "C++ Classes",
      km: "ថ្នាក់ និងវត្ថុ C++"
    },
    lessons: cppLessonsPart4
  },
  {
    id: "cpp-errors",
    title: {
      en: "C++ Errors",
      km: "ការគ្រប់គ្រងកំហុស C++"
    },
    lessons: cppLessonsPart5
  }
];
