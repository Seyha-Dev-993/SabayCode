import { DatabaseSqlClassInfo, DatabaseSqlLesson, DatabaseSqlModule } from '../types/databaseSqlMasteryClass';
import { MODULES_1_3 } from './dbSqlMastery/modules1_3';
import { MODULES_4_6 } from './dbSqlMastery/modules4_6';
import { MODULES_7_9 } from './dbSqlMastery/modules7_9';
import { MODULES_10_12 } from './dbSqlMastery/modules10_12';
import { MODULES_13_14 } from './dbSqlMastery/modules13_14';

export const DATABASE_SQL_CLASS_INFO: DatabaseSqlClassInfo = {
  id: 'database-sql-mastery',
  title: {
    en: 'Database Design & SQL Mastery',
    km: 'ការរចនាដាតាបេស និងស្ទាត់ជំនាញ SQL',
  },
  shortDescription: {
    en: 'Master relational database theory, schema design, SQL queries from basics to advanced window functions, indexing, transactions, and real-world database architecture.',
    km: 'រៀនសូត្រទ្រឹស្តីដាតាបេស Relational, ការរចនា Schema, បញ្ជា SQL ពីគ្រឹះដល់កម្រិតខ្ពស់, Window Functions, Indexing, Transactions និងស្ថាបត្យកម្មដាតាបេសក្នុងប្រព័ន្ធពិត។',
  },
  badge: 'Intermediate',
  rating: 4.9,
  ratingCount: 1420,
  durationWeeks: 14,
  durationHours: 65,
  moduleCount: 14,
  lessonCount: 52,
  enrolledCount: 3850,
  level: 'Intermediate to Advanced',
  prerequisites: {
    en: ['Basic understanding of computer logic', 'Familiarity with data tables or spreadsheets'],
    km: ['យល់ដឹងពី Logic កុំព្យូទ័រជាគ្រឹះ', 'ស្គាល់តារាងទិន្នន័យ (Table / Spreadsheet)'],
  },
  skillsAcquired: [
    'Relational Database Architecture (RDBMS)',
    '3NF Schema Normalization & ER Modeling',
    'SQL DDL, DML, DQL & Joins (INNER, LEFT, FULL, CROSS)',
    'Advanced CTEs & Recursive Hierarchical Queries',
    'Window Functions (ROW_NUMBER, RANK, LAG, LEAD)',
    'B-Tree & Composite Index Query Optimization',
    'ACID Transactions & Locking (SELECT FOR UPDATE)',
    'PostgreSQL Stored Procedures & Triggers',
    'Table Partitioning, Replication & Security (RBAC)',
  ],
};

export const DATABASE_SQL_MODULES: DatabaseSqlModule[] = [
  ...MODULES_1_3,
  ...MODULES_4_6,
  ...MODULES_7_9,
  ...MODULES_10_12,
  ...MODULES_13_14,
];

export const getAllDatabaseSqlLessons = (): DatabaseSqlLesson[] => {
  const lessons: DatabaseSqlLesson[] = [];
  DATABASE_SQL_MODULES.forEach((mod) => {
    lessons.push(...mod.lessons);
  });
  return lessons;
};

export const getDatabaseSqlLessonById = (lessonId: string): DatabaseSqlLesson | undefined => {
  const all = getAllDatabaseSqlLessons();
  return all.find((l) => l.id === lessonId);
};
