import { Topic } from '../types';
import { javaLessonsPart1 } from './javaLessonsPart1';
import { javaLessonsPart2 } from './javaLessonsPart2';
import { javaLessonsPart3 } from './javaLessonsPart3';
import { javaLessonsPart4 } from './javaLessonsPart4';
import { javaLessonsPart5 } from './javaLessonsPart5';

export const javaTopics: Topic[] = [
  {
    id: "getting-started",
    title: {
      en: "Java Basics",
      km: "មូលដ្ឋានគ្រឹះ Java"
    },
    lessons: javaLessonsPart1
  },
  {
    id: "java-methods",
    title: {
      en: "Java Methods",
      km: "វិធីសាស្ត្រ Java"
    },
    lessons: javaLessonsPart2
  },
  {
    id: "java-classes",
    title: {
      en: "Java Classes",
      km: "ថ្នាក់ និងវត្ថុ Java"
    },
    lessons: javaLessonsPart3
  },
  {
    id: "java-errors",
    title: {
      en: "Java Errors",
      km: "ការគ្រប់គ្រងកំហុស Java"
    },
    lessons: javaLessonsPart4.slice(0, 5)
  },
  {
    id: "java-file-handling",
    title: {
      en: "Java File Handling",
      km: "ការចាត់ចែងឯកសារ Java"
    },
    lessons: javaLessonsPart4.slice(5, 10)
  },
  {
    id: "java-io-streams",
    title: {
      en: "Java I/O Streams",
      km: "ស្ទ្រីមទិន្នន័យ I/O"
    },
    lessons: javaLessonsPart4.slice(10, 15)
  },
  {
    id: "java-data-structures",
    title: {
      en: "Java Data Structures",
      km: "រចនាសម្ព័ន្ធទិន្នន័យ Java"
    },
    lessons: javaLessonsPart5
  }
];
