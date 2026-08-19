import { Topic } from '../types';
import { mysqlLessonsPart1 } from './mysqlLessonsPart1';
import { mysqlLessonsPart2 } from './mysqlLessonsPart2';
import { mysqlLessonsPart3 } from './mysqlLessonsPart3';
import { mysqlLessonsPart4 } from './mysqlLessonsPart4';

// Extract lessons by ID or slice to match the exact subsections defined in the user requirements
const gettingStartedLessons = mysqlLessonsPart1.slice(0, 3); // 1. mysql-home, 2. mysql-intro, 3. mysql-rdbms
const mysqlSqlLessons = [
  ...mysqlLessonsPart1.slice(3), // 4. mysql-sql to 15. mysql-delete
  ...mysqlLessonsPart2,          // 16. mysql-limit to 30. mysql-left-join
  ...mysqlLessonsPart3.slice(0, 13) // 31. mysql-right-join to 43. mysql-operators
];
const mysqlDatabaseLessons = [
  ...mysqlLessonsPart3.slice(13), // 44. mysql-create-db, 45. mysql-drop-db
  ...mysqlLessonsPart4           // 46. mysql-create-table to 61. mysql-functions
];

export const mysqlTopics: Topic[] = [
  {
    id: "mysql-getting-started",
    title: {
      en: "Getting Started",
      km: "ការចាប់ផ្តើមដំបូង"
    },
    lessons: gettingStartedLessons
  },
  {
    id: "mysql-sql-section",
    title: {
      en: "MYSQL SQL",
      km: "MYSQL SQL"
    },
    lessons: mysqlSqlLessons
  },
  {
    id: "mysql-database-section",
    title: {
      en: "MYSQL DATABASE",
      km: "MYSQL DATABASE"
    },
    lessons: mysqlDatabaseLessons
  }
];
