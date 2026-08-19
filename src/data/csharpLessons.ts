import { Topic } from '../types';
import { csharpLessonsPart1 } from './csharpLessonsPart1';
import { csharpLessonsPart2 } from './csharpLessonsPart2';
import { csharpLessonsPart3 } from './csharpLessonsPart3';
import { csharpLessonsPart4 } from './csharpLessonsPart4';

export const csharpTopics: Topic[] = [
  {
    id: "csharp-basics",
    title: {
      en: "C# Basics",
      km: "មូលដ្ឋានគ្រឹះ C#"
    },
    lessons: [...csharpLessonsPart1, ...csharpLessonsPart2]
  },
  {
    id: "csharp-methods",
    title: {
      en: "C# Methods",
      km: "វិធីសាស្ត្រ C# Methods"
    },
    lessons: csharpLessonsPart3
  },
  {
    id: "csharp-classes",
    title: {
      en: "C# Classes",
      km: "ថ្នាក់ និងវត្ថុ C#"
    },
    lessons: csharpLessonsPart4
  }
];
