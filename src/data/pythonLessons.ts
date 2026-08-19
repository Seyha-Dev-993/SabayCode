import { Topic } from '../types';
import { pythonLessonsPart1 } from './pythonLessonsPart1';
import { pythonLessonsPart2 } from './pythonLessonsPart2';
import { pythonLessonsPart3 } from './pythonLessonsPart3';

export const pythonTopics: Topic[] = [
  {
    id: "getting-started",
    title: {
      en: "Getting Started",
      km: "ការចាប់ផ្តើមដំបូង"
    },
    lessons: [
      ...pythonLessonsPart1,
      ...pythonLessonsPart2
    ]
  },
  {
    id: "python-classes",
    title: {
      en: "Python Classes",
      km: "ថ្នាក់ភាសា Python (OOP)"
    },
    lessons: pythonLessonsPart3.slice(0, 10) // 10 lessons (OOP through Inner Classes)
  },
  {
    id: "file-handling",
    title: {
      en: "File Handling",
      km: "ការគ្រប់គ្រងឯកសារ (File)"
    },
    lessons: pythonLessonsPart3.slice(10) // 4 lessons (File Handling through Delete Files)
  }
];
