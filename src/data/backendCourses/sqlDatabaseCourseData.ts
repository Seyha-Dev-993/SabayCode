import { BackendCourse } from '../backendCoursesHubData';

export const SQL_DATABASE_COURSE_DATA: BackendCourse = {
  id: 'database-sql',
  slug: 'database-sql-fundamentals',
  title: {
    en: 'Database & SQL Fundamentals — Storing and Querying Real Data',
    km: 'មូលដ្ឋាន Database & SQL — ការរក្សាទុក និងសាកសួរទិន្នន័យពិតប្រាកដ'
  },
  iconName: 'database',
  type: 'database',
  categoryId: 'databases',
  difficulty: 'Beginner',
  shortDescription: {
    en: 'The universal skill behind every backend: designing and querying relational databases.',
    km: 'ជំនាញជាសកលនៅពីក្រោយ backend គ្រប់យ៉ាង៖ ការរចនា និងសាកសួរមូលដ្ឋានទិន្នន័យទាក់ទង។'
  },
  summary: {
    en: 'No matter which backend language or framework you use — Node.js, Java, PHP, or anything else — almost every real application needs to store and retrieve data reliably, and that almost always means a relational database queried with SQL. This course is completely language-agnostic: you\'ll learn how relational databases are structured, how to write SQL to read, filter, and combine data, how to design a schema that models real-world relationships correctly, and how to keep queries fast as data grows. Everything here transfers directly into every other backend course on this track — whether you\'re connecting from Node.js with a driver, from Java with JDBC, or from Laravel with Eloquent, the SQL and database design concepts underneath are exactly the same. By the end, you\'ll be able to design a real relational database from scratch and write the SQL to power a real application on top of it.',
    km: 'មិនថាអ្នកប្រើភាសា ឬ framework backend មួយណាទេ — Node.js, Java, PHP ឬអ្វីផ្សេងទៀត — កម្មវិធីពិតប្រាកដស្ទើរតែទាំងអស់ត្រូវការរក្សាទុក និងទាញយកទិន្នន័យដោយអាចទុកចិត្តបាន ហើយនោះស្ទើរតែតែងតែមានន័យថាមូលដ្ឋានទិន្នន័យទាក់ទង (relational database) ដែលសាកសួរដោយ SQL។ វគ្គសិក្សានេះមិនអាស្រ័យលើភាសាណាមួយឡើយ៖ អ្នកនឹងរៀនពីរបៀបដែលមូលដ្ឋានទិន្នន័យទាក់ទងត្រូវបានរៀបចំរចនាសម្ព័ន្ធ, របៀបសរសេរ SQL ដើម្បីអាន ត្រង និងផ្សំទិន្នន័យ, របៀបរចនា schema ដែលបង្ហាញពីទំនាក់ទំនងក្នុងពិភពពិតបានត្រឹមត្រូវ, និងរបៀបរក្សា query ឱ្យលឿននៅពេលទិន្នន័យកើនឡើង។ អ្វីៗទាំងអស់នៅទីនេះនឹងអាចអនុវត្តបានដោយផ្ទាល់ទៅលើវគ្គ backend ផ្សេងទៀតទាំងអស់នៅលើផ្លូវនេះ — មិនថាអ្នកភ្ជាប់ពី Node.js ជាមួយ driver, ពី Java ជាមួយ JDBC ឬពី Laravel ជាមួយ Eloquent, គំនិត SQL និងការរចនាមូលដ្ឋានទិន្នន័យនៅផ្នែកខាងក្រោមគឺដូចគ្នាបេះបិទ។ ចប់វគ្គនេះ អ្នកនឹងអាចរចនាមូលដ្ឋានទិន្នន័យទាក់ទងពិតប្រាកដពីដើម ហើយសរសេរ SQL ដើម្បីជំរុញកម្មវិធីពិតប្រាកដនៅលើវា។'
  },
  estimatedHours: 20,
  lessonCount: 31,
  usedFor: 'Relational Database Design, Universal Backend SQL, Schema Normalization, Query Optimization, Multi-Table Reporting',
  realWorldApps: ['Library Management Catalog', 'E-Commerce Product & Order DB', 'Banking Ledger & Audit Trail', 'SaaS Multi-tenant User Engine'],
  prerequisites: {
    en: 'None required. Basic familiarity with any programming language is helpful for context but this course teaches SQL and database concepts from the ground up, independent of any specific backend language or framework.',
    km: 'មិនទាមទារចំណេះដឹងជាមុនទេ។ ការស្គាល់ភាសាសរសេរកូដណាមួយជាមូលដ្ឋានគឺមានប្រយោជន៍ ប៉ុន្តែវគ្គសិក្សានេះបង្រៀនគំនិត SQL និង Database ចាប់ពីបាតគ្រឹះឡើងទៅ ដោយឯករាជ្យពីភាសា ឬ framework Backend ជាក់លាក់ណាមួយ។'
  },
  whatYouWillLearn: {
    en: [
      'Understand what a relational database is, and how it organizes data into tables',
      'Write core SQL queries: SELECT, WHERE, ORDER BY, and LIMIT',
      'Filter and summarize data with aggregate functions and GROUP BY / HAVING',
      'Combine data across tables using INNER JOIN, LEFT JOIN, and understand foreign keys',
      'Insert, update, and delete data safely, including the basics of transactions',
      'Design a schema: choosing data types, primary keys, foreign keys, and constraints',
      'Understand normalization (1NF, 2NF, 3NF) and why it prevents data inconsistency',
      'Understand indexes and use EXPLAIN to see how a query actually runs',
      'Write subqueries and understand when a view is useful',
      'Recognize how application code (in any language) connects to and queries a database',
      'Design and query a complete, realistic relational database from scratch'
    ],
    km: [
      'យល់ដឹងពីអ្វីជា Relational Database និងរបៀបដែលវារៀបចំទិន្នន័យទៅជា Tables',
      'សរសេរ SQL Queries មូលដ្ឋាន៖ SELECT, WHERE, ORDER BY, និង LIMIT',
      'ត្រង និងសរុបទិន្នន័យជាមួយ Aggregate functions និង GROUP BY / HAVING',
      'ភ្ជាប់ទិន្នន័យឆ្លង Table ដោយប្រើ INNER JOIN, LEFT JOIN និងយល់ពី Foreign Keys',
      'បញ្ជូល កែប្រែ និងលុបទិន្នន័យដោយសុវត្ថិភាព រួមទាំងមូលដ្ឋានគ្រឹះនៃ Transactions',
      'រចនា Schema៖ ការជ្រើសរើស Data Types, Primary Keys, Foreign Keys, និង Constraints',
      'យល់ដឹងពី Normalization (1NF, 2NF, 3NF) និងហេតុផលដែលវាការពារ Data Inconsistency',
      'យល់ដឹងពី Indexes និងប្រើប្រាស់ EXPLAIN ដើម្បីមើលដំណើរការពិតប្រាកដនៃ Query',
      'សរសេរ Subqueries និងយល់ដឹងពីពេលដែល View មានប្រយោជន៍',
      'ស្គាល់ពីរបៀបដែល App Code (Node.js, Java, PHP) ភ្ជាប់ និង Query Database',
      'រចនា និងសាកសួរ Relational Database ពិតប្រាកដពេញលេញពីបាតគ្រឹះ'
    ]
  },
  toolsAndSetup: {
    en: '1. Install PostgreSQL (recommended) or MySQL — both are free and widely used in production\n2. Install a lightweight SQL client such as DBeaver or TablePlus for running queries and browsing tables visually\n3. Alternatively, use an in-browser SQL sandbox (no install required) for the early lessons if you just want to start typing queries immediately\n4. Confirm your setup by connecting to your database and running `SELECT 1;`',
    km: '១. ដំឡើង PostgreSQL (ណែនាំ) ឬ MySQL — ទាំងពីរគឺឥតគិតថ្លៃ និងប្រើប្រាស់ទូលំទូលាយក្នុង Production\n២. ដំឡើង SQL client ស្រាលៗដូចជា DBeaver ឬ TablePlus សម្រាប់រត់ Query និងមើល Table ដោយផ្ទាល់\n៣. ឬប្រើប្រាស់ SQL Sandbox ក្នុង Browser (មិនបាច់ដំឡើង) សម្រាប់មេរៀនដំបូង ប្រសិនបើអ្នកចង់សរសេរ Query ភ្លាមៗ\n៤. ផ្ទៀងផ្ទាត់ការដំឡើងរបស់អ្នកដោយភ្ជាប់ទៅ Database ហើយរត់ `SELECT 1;`'
  },
  cheatSheet: [
    {
      concept: 'SELECT & Filter with WHERE',
      code: `SELECT title, published_year, genre\nFROM books\nWHERE published_year BETWEEN 2015 AND 2023\n  AND genre = 'Fiction'\nORDER BY published_year DESC\nLIMIT 10;`,
      explanation: {
        en: 'Fetches top 10 fiction books published between 2015 and 2023 sorted by newest first.',
        km: 'ទាញយកសៀវភៅបែប Fiction 10 ក្បាលដែលបោះពុម្ពចន្លោះឆ្នាំ 2015 ដល់ 2023 តម្រៀបតាមឆ្នាំថ្មីបំផុតមុន។'
      }
    },
    {
      concept: 'INNER JOIN across tables',
      code: `SELECT books.title, authors.name AS author_name, genres.name AS genre_name\nFROM books\nINNER JOIN authors ON books.author_id = authors.id\nINNER JOIN genres ON books.genre_id = genres.id\nORDER BY books.title;`,
      explanation: {
        en: 'Combines books, authors, and genres into a single unified report matching foreign keys.',
        km: 'ភ្ជាប់ទិន្នន័យសៀវភៅ អ្នកនិពន្ធ និងប្រភេទសៀវភៅចូលគ្នាតាមរយៈ Foreign Keys។'
      }
    },
    {
      concept: 'GROUP BY & HAVING aggregation',
      code: `SELECT genre_id, COUNT(*) AS total_books, AVG(price) AS avg_price\nFROM books\nGROUP BY genre_id\nHAVING COUNT(*) >= 5\nORDER BY avg_price DESC;`,
      explanation: {
        en: 'Groups books by genre and calculates average price, filtering only genres with at least 5 books.',
        km: 'ប្រមូលផ្តុំសៀវភៅតាមប្រភេទ និងគណនាតម្លៃមធ្យម ដោយបង្ហាញតែប្រភេទណាដែលមានសៀវភៅចាប់ពី 5 ក្បាលឡើង។'
      }
    },
    {
      concept: 'Normalized Table Creation (3NF)',
      code: `CREATE TABLE authors (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(255) NOT NULL,\n    email VARCHAR(255) UNIQUE\n);\n\nCREATE TABLE books (\n    id SERIAL PRIMARY KEY,\n    title VARCHAR(255) NOT NULL,\n    author_id INTEGER REFERENCES authors(id) ON DELETE CASCADE\n);`,
      explanation: {
        en: 'Creates normalized tables with auto-incrementing primary keys and referential integrity via foreign key constraints.',
        km: 'បង្កើត Tables ស្តង់ដារ Normalization ជាមួយ Primary Keys និង Foreign Key Constraints។'
      }
    }
  ],
  quiz: [
    {
      id: 'sql-q1',
      question: {
        en: 'What is the key functional difference between a WHERE clause and a HAVING clause in SQL?',
        km: 'តើអ្វីជាភាពខុសគ្នាសំខាន់រវាង WHERE clause និង HAVING clause ក្នុង SQL?'
      },
      options: [
        { id: '1', text: { en: 'WHERE filters individual rows before grouping; HAVING filters aggregated groups created by GROUP BY', km: 'WHERE ត្រងជួរដេកទោល (individual rows) មុនពេលប្រមូលផ្តុំ; HAVING ត្រងក្រុម aggregate បន្ទាប់ពី GROUP BY' }, isCorrect: true },
        { id: '2', text: { en: 'HAVING can only be used with SELECT statements, while WHERE is for UPDATE only', km: 'HAVING ប្រើបានតែជាមួយ SELECT ចំណែក WHERE ប្រើតែជាមួយ UPDATE' }, isCorrect: false },
        { id: '3', text: { en: 'WHERE is faster than HAVING because it automatically creates a database index', km: 'WHERE លឿនជាង HAVING ព្រោះវាបង្កើត index ដោយស្វ័យប្រវត្តិ' }, isCorrect: false },
        { id: '4', text: { en: 'There is no difference; they are interchangeable keywords', km: 'គ្មានភាពខុសគ្នាទេ ពួកវាជាពាក្យដូចគ្នា' }, isCorrect: false }
      ],
      explanation: {
        en: 'WHERE filters rows before any aggregate functions or GROUP BY clauses are evaluated. HAVING filters the result set after rows have been grouped and aggregates (like COUNT, SUM, AVG) have been calculated.',
        km: 'WHERE ត្រង row នីមួយៗមុនពេលរត់ Aggregate Function ឬ GROUP BY។ រីឯ HAVING ត្រងលទ្ធផលក្រុមបន្ទាប់ពីប្រមូលផ្តុំរួច។'
      }
    },
    {
      id: 'sql-q2',
      question: {
        en: 'How do you correctly test if a column value is NULL in SQL?',
        km: 'តើអ្នកត្រួតពិនិត្យមើលថាតើតម្លៃក្នុង Column ជា NULL ដោយរបៀបណាត្រឹមត្រូវក្នុង SQL?'
      },
      options: [
        { id: '1', text: { en: 'WHERE column_name IS NULL', km: 'WHERE column_name IS NULL' }, isCorrect: true },
        { id: '2', text: { en: 'WHERE column_name = NULL', km: 'WHERE column_name = NULL' }, isCorrect: false },
        { id: '3', text: { en: 'WHERE column_name == "NULL"', km: 'WHERE column_name == "NULL"' }, isCorrect: false },
        { id: '4', text: { en: 'WHERE column_name EQUALS NULL', km: 'WHERE column_name EQUALS NULL' }, isCorrect: false }
      ],
      explanation: {
        en: 'In SQL, NULL represents an unknown value, so standard comparison operators like `=` always return false/unknown. You must use `IS NULL` or `IS NOT NULL`.',
        km: 'ក្នុង SQL, NULL តំណាងឱ្យតម្លៃមិនស្គាល់ ដូច្នេះការប្រៀបធៀបដោយប្រើ `=` នឹងបញ្ជូន false ជានិច្ច។ អ្នកត្រូវតែប្រើ `IS NULL` ឬ `IS NOT NULL`។'
      }
    }
  ],
  capstoneProject: {
    id: 'library-catalog-db',
    slug: 'library-catalog-db',
    title: {
      en: 'Library Catalog DB',
      km: 'ប្រព័ន្ធទិន្នន័យបណ្ណាល័យ (Library Catalog DB)'
    },
    description: {
      en: 'Design and populate a complete relational database for a library system: books, authors, genres, members, and loans, with correctly normalized tables, foreign keys, constraints, and a set of real-world reporting queries.',
      km: 'រចនា និងបញ្ជូលទិន្នន័យក្នុង Relational Database ពេញលេញសម្រាប់ប្រព័ន្ធបណ្ណាល័យ៖ សៀវភៅ អ្នកនិពន្ធ ប្រភេទសៀវភៅ សមាជិក និងការខ្ចី ដោយប្រើប្រាស់ Normalized Tables, Foreign Keys, និង SQL Analytics Queries។'
    },
    featureChecklist: {
      en: [
        'authors table (id, name, bio)',
        'genres table (id, name)',
        'books table (id, title, author_id, genre_id, published_year, copies_available)',
        'members table (id, name, email, joined_date)',
        'loans table (id, book_id, member_id, loaned_date, due_date, returned_date)',
        'Query: list all currently overdue loans with member and book details',
        'Query: find the 5 most-borrowed books of all time',
        'Query: find members who currently have 3 or more active loans',
        'Query: average number of days books are kept before being returned, grouped by genre',
        'At least one index added to speed up a slow query, verified with EXPLAIN'
      ],
      km: [
        'authors table (id, name, bio)',
        'genres table (id, name)',
        'books table (id, title, author_id, genre_id, published_year, copies_available)',
        'members table (id, name, email, joined_date)',
        'loans table (id, book_id, member_id, loaned_date, due_date, returned_date)',
        'Query: ទាញបញ្ជីសៀវភៅដែលខ្ចីហួសកាលកំណត់ (overdue loans) រួមជាមួយព័ត៌មានសមាជិក និងសៀវភៅ',
        'Query: ស្វែងរកសៀវភៅដែលត្រូវគេខ្ចីច្រើនបំផុតទាំង ៥ (top 5 most-borrowed)',
        'Query: ស្វែងរកសមាជិកដែលមានការខ្ចីសកម្មចាប់ពី ៣ ក្បាលឡើងទៅ',
        'Query: គណនាចំនួនថ្ងៃមធ្យមដែលសៀវភៅត្រូវបានរក្សាមុនពេលសង តាមប្រភេទសៀវភៅ',
        'បន្ថែម Index យ៉ាងហោចណាស់មួយដើម្បីពន្លឿន Query និងផ្ទៀងផ្ទាត់ជាមួយ EXPLAIN'
      ]
    },
    starterCode: {
      language: 'sql',
      code: `-- Step 1: Create authors table
CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    bio TEXT
);

-- Step 2: Create genres table
CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

-- Step 3: Create books table with foreign keys
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id INTEGER REFERENCES authors(id) ON DELETE RESTRICT,
    genre_id INTEGER REFERENCES genres(id) ON DELETE SET NULL,
    published_year INTEGER,
    copies_available INTEGER DEFAULT 1
);`
    },
    finalCode: `-- Full Schema and Reporting Query Suite for Library Catalog DB

-- 1. Members Table
CREATE TABLE members (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    joined_date DATE NOT NULL DEFAULT CURRENT_DATE
);

-- 2. Loans Table
CREATE TABLE loans (
    id SERIAL PRIMARY KEY,
    book_id INTEGER NOT NULL REFERENCES books(id) ON DELETE CASCADE,
    member_id INTEGER NOT NULL REFERENCES members(id) ON DELETE CASCADE,
    loaned_date DATE NOT NULL DEFAULT CURRENT_DATE,
    due_date DATE NOT NULL,
    returned_date DATE
);

-- 3. Query: List currently overdue loans
SELECT 
    l.id AS loan_id,
    m.name AS member_name,
    m.email AS member_email,
    b.title AS book_title,
    l.loaned_date,
    l.due_date,
    (CURRENT_DATE - l.due_date) AS days_overdue
FROM loans l
INNER JOIN members m ON l.member_id = m.id
INNER JOIN books b ON l.book_id = b.id
WHERE l.returned_date IS NULL
  AND l.due_date < CURRENT_DATE
ORDER BY days_overdue DESC;

-- 4. Query: Top 5 most-borrowed books
SELECT 
    b.id,
    b.title,
    a.name AS author_name,
    COUNT(l.id) AS total_times_borrowed
FROM books b
INNER JOIN authors a ON b.author_id = a.id
LEFT JOIN loans l ON b.id = l.book_id
GROUP BY b.id, b.title, a.name
ORDER BY total_times_borrowed DESC
LIMIT 5;

-- 5. Query: Members with 3 or more active loans
SELECT 
    m.id,
    m.name,
    m.email,
    COUNT(l.id) AS active_loans_count
FROM members m
INNER JOIN loans l ON m.id = l.member_id
WHERE l.returned_date IS NULL
GROUP BY m.id, m.name, m.email
HAVING COUNT(l.id) >= 3;

-- 6. Index to optimize overdue loan lookups
CREATE INDEX idx_loans_active_due_date ON loans(returned_date, due_date);`,
    sampleRequests: [
      {
        title: 'Run Overdue Loan Audit Query',
        method: 'POST',
        url: '/api/v1/database/query',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: 'SELECT l.id, m.name, b.title, l.due_date FROM loans l JOIN members m ON l.member_id = m.id JOIN books b ON l.book_id = b.id WHERE l.returned_date IS NULL AND l.due_date < CURRENT_DATE;'
        }, null, 2),
        responseStatus: 200,
        responseBody: JSON.stringify({
          rowCount: 2,
          rows: [
            { loan_id: 104, member_name: 'Sophea Chan', book_title: 'Designing Data-Intensive Applications', days_overdue: 5 },
            { loan_id: 108, member_name: 'Bory Kim', book_title: 'Clean Code', days_overdue: 2 }
          ]
        }, null, 2)
      }
    ]
  },
  modules: [
    // Module 1 — Introduction to Databases (3 lessons)
    {
      moduleNumber: 1,
      title: {
        en: 'Module 1 — Introduction to Databases',
        km: 'មេរៀនទី ១ — ការណែនាំអំពី Database'
      },
      description: {
        en: 'Understand relational database concepts, install PostgreSQL/MySQL tools, and master basic table vocabulary.',
        km: 'យល់ដឹងពីគំនិត Relational Database, ដំឡើង PostgreSQL/MySQL tools និងស្គាល់ពាក្យបច្ចេកទេសតារាងមូលដ្ឋាន។'
      },
      lessons: [
        {
          id: 'db-1-1',
          slug: 'what-is-a-relational-database',
          moduleNumber: 1,
          lessonNumberInModule: 1,
          title: {
            en: '1.1 What a relational database is, and why almost every backend uses one',
            km: '១.១ អ្វីជា Relational Database និងហេតុអ្វី Backend ស្ទើរតែទាំងអស់ប្រើវា'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Explain what a relational database is and why backend applications rely on one instead of storing data in plain files.',
            km: 'ពន្យល់ពីអ្វីជា Relational Database និងមូលហេតុដែល Backend ពឹងផ្អែកលើវាជំនួសឱ្យការរក្សាទុកទិន្នន័យក្នុង File ធម្មតា។'
          },
          explanation: {
            en: 'A relational database organizes data into tables — think of a table as a spreadsheet with strictly defined columns, where every row follows the same structure. What makes it "relational" is that tables can reference each other: a books table might reference an authors table through a shared identifier, letting you model real-world relationships without duplicating author information across every book row. Databases also guarantee concurrent safe access, ACID transactions, and structured searching via SQL.',
            km: 'Relational database រៀបចំទិន្នន័យទៅជា តារាង (tables) — គិតថាតារាងជាសន្លឹកកិច្ចការដែលមានជួរឈរកំណត់យ៉ាងតឹងរឹង ដែលជួរដេកនីមួយៗអនុវត្តតាមរចនាសម្ព័ន្ធដូចគ្នា។ អ្វីដែលធ្វើឱ្យវា "ទាក់ទង" គឺថាតារាងអាចយោងទៅគ្នាទៅវិញទៅមក៖ តារាង books អាចយោងទៅតារាង authors តាមរយៈអត្តសញ្ញាណរួម ដែលអនុញ្ញាតឱ្យអ្នកបង្ហាញពីទំនាក់ទំនងក្នុងពិភពពិតដោយមិនបាច់ចម្លងព័ត៌មានអ្នកនិពន្ធដដែលៗឡើយ។'
          },
          starterCode: {
            language: 'sql',
            code: `-- A simple query filtering books published after 2020
SELECT id, title, published_year
FROM books
WHERE published_year > 2020
ORDER BY title;`
          },
          practiceExercise: {
            question: {
              en: 'Write a SQL query that retrieves all books with a published_year of 2022, sorted by title.',
              km: 'សរសេរ SQL query ដើម្បីទាញយកសៀវភៅទាំងអស់ដែលមាន published_year ស្មើ 2022 តម្រៀបតាមចំណងជើង។'
            },
            solution: `SELECT id, title, published_year\nFROM books\nWHERE published_year = 2022\nORDER BY title;`
          },
          tips: {
            en: 'Thinking of a database as "just a bigger spreadsheet file" is a common trap — databases enforce data constraints and safely handle thousands of concurrent queries at once.',
            km: 'ការគិតថា Database ជា "គ្រាន់តែ File spreadsheet ធំជាងមុន" គឺជាគំនិតមិនទាន់គ្រប់ជ្រុងជ្រោយ — Database ធានា Constraints និងគ្រប់គ្រងការ Query រាប់ពាន់ក្នុងពេលតែមួយដោយសុវត្ថិភាព។'
          }
        },
        {
          id: 'db-1-2',
          slug: 'setting-up-local-database-sql-client',
          moduleNumber: 1,
          lessonNumberInModule: 2,
          title: {
            en: '1.2 Setting up a local database and connecting with a SQL client',
            km: '១.២ ការដំឡើង Database ក្នុងម៉ាស៊ីន និងការភ្ជាប់ជាមួយ SQL Client'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Set up PostgreSQL or MySQL locally or via container, connect using DBeaver or TablePlus, and verify the connection with `SELECT 1;`.',
            km: 'ដំឡើង PostgreSQL ឬ MySQL, ភ្ជាប់ដោយប្រើ DBeaver ឬ TablePlus និងផ្ទៀងផ្ទាត់ការភ្ជាប់ដោយរត់ `SELECT 1;`។'
          },
          starterCode: {
            language: 'sql',
            code: `-- Verification query
SELECT 1 AS connection_test;`
          }
        },
        {
          id: 'db-1-3',
          slug: 'tables-rows-and-columns-basic-vocabulary',
          moduleNumber: 1,
          lessonNumberInModule: 3,
          title: {
            en: '1.3 Tables, rows, and columns — the basic vocabulary',
            km: '១.៣ Tables, Rows, និង Columns — ពាក្យបច្ចេកទេសគ្រឹះ'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Define schema, table, row (tuple), column (field), primary key, and NULL concept in relational databases.',
            km: 'កំណត់និយមន័យ Schema, Table, Row (Tuple), Column (Field), Primary Key, និង مفهوم NULL ក្នុង Relational Database។'
          },
          starterCode: {
            language: 'sql',
            code: `-- Checking table columns in PostgreSQL
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'books';`
          }
        }
      ]
    },

    // Module 2 — Basic Queries (5 lessons)
    {
      moduleNumber: 2,
      title: {
        en: 'Module 2 — Basic Queries',
        km: 'មេរៀនទី ២ — SQL Queries មូលដ្ឋាន'
      },
      description: {
        en: 'Master SELECT statements, column aliasing, row filtering with WHERE, sorting with ORDER BY, and pagination with LIMIT/OFFSET.',
        km: 'ស្ទាត់ជំនាញ SELECT statements, ការដាក់ឈ្មោះ Alias, ការត្រង Row ជាមួយ WHERE, ការតម្រៀបជាមួយ ORDER BY និង Pagination ជាមួយ LIMIT/OFFSET។'
      },
      lessons: [
        {
          id: 'db-2-1',
          slug: 'select-choosing-columns-to-return',
          moduleNumber: 2,
          lessonNumberInModule: 1,
          title: {
            en: '2.1 SELECT and choosing which columns to return',
            km: '២.១ SELECT និងការជ្រើសរើស Columns ដែលត្រូវបង្ហាញ'
          },
          durationMinutes: 18,
          difficulty: 'Beginner',
          objective: {
            en: 'Write SELECT queries targeting specific columns, renaming output columns with AS aliases, and avoiding wildcard `SELECT *` in production code.',
            km: 'សរសេរ SELECT queries ជ្រើសរើស columns ជាក់លាក់, ប្តូរឈ្មោះ column ដោយប្រើ AS aliases និងចៀសវាង `SELECT *` ក្នុង Production។'
          },
          starterCode: {
            language: 'sql',
            code: `SELECT title AS book_title, published_year AS year
FROM books;`
          }
        },
        {
          id: 'db-2-2',
          slug: 'filtering-rows-with-where',
          moduleNumber: 2,
          lessonNumberInModule: 2,
          title: {
            en: '2.2 Filtering rows with WHERE',
            km: '២.២ ការត្រង Row ដោយប្រើ WHERE'
          },
          durationMinutes: 22,
          difficulty: 'Beginner',
          objective: {
            en: 'Filter rows using comparison operators (=, !=, >, <), logical operators (AND, OR, NOT), BETWEEN, IN, LIKE, and IS NULL.',
            km: 'ត្រង row ដោយប្រើប្រាស់ Comparison operators, Logical operators, BETWEEN, IN, LIKE, និង IS NULL។'
          },
          explanation: {
            en: 'WHERE specifies conditions that rows must meet to be included in the result set. You can combine conditions using AND / OR, check range with BETWEEN, check against a list with IN, and perform text pattern matching with LIKE (e.g. LIKE \'The%\'). Always remember that NULL values require `IS NULL` or `IS NOT NULL` testing rather than equality operators.',
            km: 'WHERE កំណត់លក្ខខណ្ឌដែល row ត្រូវតែបំពេញដើម្បីបង្ហាញក្នុងលទ្ធផល។ អ្នកអាចបូកផ្សំលក្ខខណ្ឌដោយប្រើ AND / OR, ពិនិត្យចន្លោះដោយ BETWEEN, ពិនិត្យក្នុងបញ្ជីដោយ IN, និងស្វែងរកទម្រង់អត្ថបទដោយ LIKE។ ចាំជានិច្ចថាតម្លៃ NULL ទាមទារ `IS NULL` ឬ `IS NOT NULL`។'
          },
          starterCode: {
            language: 'sql',
            code: `-- Books published between 2015 and 2023 in the "Fiction" genre
SELECT title, published_year, genre
FROM books
WHERE published_year BETWEEN 2015 AND 2023
  AND genre = 'Fiction';`
          },
          practiceExercise: {
            question: {
              en: 'Write a query that returns all books in the "Sci-Fi" genre OR published before 2000.',
              km: 'សរសេរ query ដើម្បីទាញយកសៀវភៅទាំងអស់ដែលស្ថិតក្នុងប្រភេទ "Sci-Fi" ឬបោះពុម្ពមុនឆ្នាំ 2000។'
            },
            solution: `SELECT title, genre, published_year\nFROM books\nWHERE genre = 'Sci-Fi' OR published_year < 2000;`
          },
          tips: {
            en: 'Using `=` to check for NULL values like `WHERE author_id = NULL` always yields false — always use `WHERE author_id IS NULL`.',
            km: 'ការប្រើ `=` ដើម្បីពិនិត្យតម្លៃ NULL ដូចជា `WHERE author_id = NULL` នឹងបញ្ជូនលទ្ធផលខុសជានិច្ច — ត្រូវប្រើ `WHERE author_id IS NULL` ជានិច្ច។'
          }
        },
        {
          id: 'db-2-3',
          slug: 'sorting-results-with-order-by',
          moduleNumber: 2,
          lessonNumberInModule: 3,
          title: {
            en: '2.3 Sorting results with ORDER BY',
            km: '២.៣ ការតម្រៀបលទ្ធផលជាមួយ ORDER BY'
          },
          durationMinutes: 18,
          difficulty: 'Beginner',
          objective: {
            en: 'Sort query results ascending (ASC) or descending (DESC) by single or multiple columns.',
            km: 'តម្រៀបលទ្ធផល query ឡើងលើ (ASC) ឬចុះក្រោម (DESC) តាម column មួយ ឬច្រើន។'
          },
          starterCode: {
            language: 'sql',
            code: `SELECT title, published_year, copies_available
FROM books
ORDER BY published_year DESC, title ASC;`
          }
        },
        {
          id: 'db-2-4',
          slug: 'limiting-results-with-limit-and-offset',
          moduleNumber: 2,
          lessonNumberInModule: 4,
          title: {
            en: '2.4 Limiting results with LIMIT and OFFSET',
            km: '២.៤ ការកំណត់ចំនួនលទ្ធផលជាមួយ LIMIT និង OFFSET'
          },
          durationMinutes: 18,
          difficulty: 'Beginner',
          objective: {
            en: 'Implement pagination logic using LIMIT for page size and OFFSET for skipping records.',
            km: 'អនុវត្ត Pagination logic ដោយប្រើ LIMIT សម្រាប់ទំហំទំព័រ និង OFFSET សម្រាប់រំលងកំណត់ត្រា។'
          },
          starterCode: {
            language: 'sql',
            code: `-- Page 2 with 10 items per page
SELECT id, title, published_year
FROM books
ORDER BY id ASC
LIMIT 10 OFFSET 10;`
          }
        },
        {
          id: 'db-2-5',
          slug: 'practice-write-five-queries-sample-books-table',
          moduleNumber: 2,
          lessonNumberInModule: 5,
          title: {
            en: '2.5 Practice: write five queries against a sample books table',
            km: '២.៥ អនុវត្ត៖ សរសេរ ៥ Query លើតារាងគំរូ books'
          },
          durationMinutes: 24,
          difficulty: 'Beginner',
          objective: {
            en: 'Combine SELECT, WHERE, ORDER BY, and LIMIT in practical exercise challenges.',
            km: 'បូកផ្សំ SELECT, WHERE, ORDER BY, និង LIMIT ក្នុងលំហាត់អនុវត្តជាក់ស្តែង។'
          },
          starterCode: {
            language: 'sql',
            code: `-- Query challenge: find top 3 newest books with copies_available > 0
SELECT title, published_year, copies_available
FROM books
WHERE copies_available > 0
ORDER BY published_year DESC
LIMIT 3;`
          }
        }
      ]
    },

    // Module 3 — Aggregating Data (4 lessons)
    {
      moduleNumber: 3,
      title: {
        en: 'Module 3 — Aggregating Data',
        km: 'មេរៀនទី ៣ — ការសរុបទិន្នន័យ (Aggregating Data)'
      },
      description: {
        en: 'Summarize datasets with COUNT, SUM, AVG, MIN, MAX, group rows with GROUP BY, and filter grouped data with HAVING.',
        km: 'សរុបទិន្នន័យជាមួយ COUNT, SUM, AVG, MIN, MAX, ប្រមូលផ្តុំ row ជាមួយ GROUP BY និងត្រងក្រុមទិន្នន័យជាមួយ HAVING។'
      },
      lessons: [
        {
          id: 'db-3-1',
          slug: 'aggregate-functions-count-sum-avg-min-max',
          moduleNumber: 3,
          lessonNumberInModule: 1,
          title: {
            en: '3.1 Aggregate functions: COUNT, SUM, AVG, MIN, MAX',
            km: '៣.១ Aggregate functions៖ COUNT, SUM, AVG, MIN, MAX'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Perform mathematical computations across rows to return single summary metrics.',
            km: 'គណនាប្រមាណវិធីគណិតវិទ្យាឆ្លងកាត់ row ដើម្បីបញ្ជូនត្រឡប់តម្លៃសរុបទោល។'
          },
          starterCode: {
            language: 'sql',
            code: `SELECT 
    COUNT(*) AS total_books,
    AVG(copies_available) AS avg_copies,
    MIN(published_year) AS oldest_year,
    MAX(published_year) AS newest_year
FROM books;`
          }
        },
        {
          id: 'db-3-2',
          slug: 'grouping-rows-with-group-by',
          moduleNumber: 3,
          lessonNumberInModule: 2,
          title: {
            en: '3.2 Grouping rows with GROUP BY',
            km: '៣.២ ការប្រមូលផ្តុំ Row ដោយប្រើ GROUP BY'
          },
          durationMinutes: 22,
          difficulty: 'Beginner',
          objective: {
            en: 'Partition query results into subset groups based on shared column values to calculate group metrics.',
            km: 'បែងចែកលទ្ធផល query ជាក្រុមតូចៗតាមតម្លៃ column រួមគ្នាដើម្បីគណនាតម្លៃសរុបប្រចាំក្រុម។'
          },
          starterCode: {
            language: 'sql',
            code: `SELECT genre_id, COUNT(*) AS book_count, AVG(copies_available) AS avg_stock
FROM books
GROUP BY genre_id;`
          }
        },
        {
          id: 'db-3-3',
          slug: 'filtering-groups-with-having-vs-where',
          moduleNumber: 3,
          lessonNumberInModule: 3,
          title: {
            en: '3.3 Filtering groups with HAVING (vs filtering rows with WHERE)',
            km: '៣.៣ ការត្រងក្រុមជាមួយ HAVING (ប្រៀបធៀបនឹងការត្រង Row ជាមួយ WHERE)'
          },
          durationMinutes: 22,
          difficulty: 'Beginner',
          objective: {
            en: 'Differentiate when to filter individual records using WHERE versus filtering aggregated group calculations using HAVING.',
            km: 'បែងចែកពេលវេលាត្រូវត្រងកំណត់ត្រាទោលជាមួយ WHERE និងការត្រងក្រុម aggregate បន្ទាប់ពីប្រមូលផ្តុំជាមួយ HAVING។'
          },
          starterCode: {
            language: 'sql',
            code: `SELECT genre_id, COUNT(*) AS total_books
FROM books
WHERE published_year >= 2000
GROUP BY genre_id
HAVING COUNT(*) >= 3;`
          }
        },
        {
          id: 'db-3-4',
          slug: 'practice-find-average-book-price-per-genre',
          moduleNumber: 3,
          lessonNumberInModule: 4,
          title: {
            en: '3.4 Practice: find the average book price per genre',
            km: '៣.៤ អនុវត្ត៖ រកតម្លៃសៀវភៅមធ្យមតាមប្រភេទនីមួយៗ'
          },
          durationMinutes: 22,
          difficulty: 'Beginner',
          objective: {
            en: 'Write aggregate queries combining GROUP BY, HAVING, and ORDER BY to generate real-world summaries.',
            km: 'សរសេរ aggregate queries បូកផ្សំ GROUP BY, HAVING, និង ORDER BY ដើម្បីទាញយករាយការណ៍សរុប។'
          },
          starterCode: {
            language: 'sql',
            code: `SELECT genre_id, COUNT(*) AS book_count, ROUND(AVG(price), 2) AS avg_price
FROM books
GROUP BY genre_id
ORDER BY avg_price DESC;`
          }
        }
      ]
    },

    // Module 4 — Joins & Relationships (5 lessons)
    {
      moduleNumber: 4,
      title: {
        en: 'Module 4 — Joins & Relationships',
        km: 'មេរៀនទី ៤ — Joins & Relationships'
      },
      description: {
        en: 'Understand foreign keys, combine multi-table datasets with INNER JOIN and LEFT JOIN, and write multi-table queries.',
        km: 'យល់ដឹងពី Foreign Keys, បញ្ជូលទិន្នន័យច្រើន Table ជាមួយ INNER JOIN, LEFT JOIN និងសរសេរ Multi-table Queries។'
      },
      lessons: [
        {
          id: 'db-4-1',
          slug: 'why-data-is-split-across-multiple-tables-foreign-keys',
          moduleNumber: 4,
          lessonNumberInModule: 1,
          title: {
            en: '4.1 Why data is split across multiple tables — foreign keys explained',
            km: '៤.១ ហេតុអ្វីទិន្នន័យត្រូវបំបែកតាម Table ច្រើន — ការពន្យល់ពី Foreign Keys'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand relational integrity, foreign key references, and one-to-many relationship structures.',
            km: 'យល់ដឹងពី Relational Integrity, Foreign Key references និងរចនាសម្ព័ន្ធទំនាក់ទំនង One-to-Many។'
          },
          starterCode: {
            language: 'sql',
            code: `-- Creating authors and books with foreign key
CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id INTEGER REFERENCES authors(id)
);`
          }
        },
        {
          id: 'db-4-2',
          slug: 'inner-join-combining-rows-that-match-in-both-tables',
          moduleNumber: 4,
          lessonNumberInModule: 2,
          title: {
            en: '4.2 INNER JOIN — combining rows that match in both tables',
            km: '៤.២ INNER JOIN — ការផ្សំ Row ដែលមានតម្លៃត្រូវគ្នាក្នុង Table ទាំងពីរ'
          },
          durationMinutes: 24,
          difficulty: 'Intermediate',
          objective: {
            en: 'Write INNER JOIN queries matching primary key / foreign key columns between two tables.',
            km: 'សរសេរ INNER JOIN queries ភ្ជាប់ Primary Key និង Foreign Key រវាង Table ពីរ។'
          },
          explanation: {
            en: 'Once data is split across tables to avoid duplication (say, books and authors), you often need to bring it back together for a readable result — like showing each book alongside its author\'s actual name instead of just an author_id number. An INNER JOIN matches rows from one table to rows in another based on a shared key condition in the ON clause, including only matching rows.',
            km: 'នៅពេលទិន្នន័យត្រូវបំបែកតាម Table ដើម្បីចៀសវាងការចម្លងព័ត៌មានជាន់គ្នា អ្នកតែងតែត្រូវភ្ជាប់វាបញ្ចូលគ្នាវិញសម្រាប់បង្ហាញ — ដូចជាការបង្ហាញចំណងជើងសៀវភៅជាមួយឈ្មោះអ្នកនិពន្ធពិតប្រាកដ។ INNER JOIN ភ្ជាប់ row ពី Table មួយទៅ Table មួយទៀតផ្អែកលើលក្ខខណ្ឌ Key ក្នុង ON clause ដោយបង្ហាញតែ row ណាដែលមានតម្លៃត្រូវគ្នាទាំងពីរប៉ុណ្ណោះ។'
          },
          starterCode: {
            language: 'sql',
            code: `SELECT books.title, authors.name AS author_name
FROM books
INNER JOIN authors ON books.author_id = authors.id
ORDER BY books.title;`
          },
          practiceExercise: {
            question: {
              en: 'Extend the query to also join in a genres table (books.genre_id = genres.id) and include genres.name as genre_name.',
              km: 'ពង្រីក query ខាងលើដោយបន្ថែម JOIN ទៅកាន់តារាង genres (books.genre_id = genres.id) និងបង្ហាញ genres.name ជា genre_name។'
            },
            solution: `SELECT books.title, authors.name AS author_name, genres.name AS genre_name\nFROM books\nINNER JOIN authors ON books.author_id = authors.id\nINNER JOIN genres ON books.genre_id = genres.id\nORDER BY books.title;`
          },
          tips: {
            en: 'Forgetting the ON condition creates a Cartesian product (CROSS JOIN), pairing every row in the first table with every row in the second table!',
            km: 'ការភ្លេចសរសេរ ON condition នឹងបណ្តាលឱ្យកើត Cartesian product (CROSS JOIN) ដែលផ្គូផ្គងគ្រប់ row នៃ Table ទីមួយជាមួយគ្រប់ row នៃ Table ទីពីរ!'
          }
        },
        {
          id: 'db-4-3',
          slug: 'left-join-keeping-unmatched-rows-from-left-table',
          moduleNumber: 4,
          lessonNumberInModule: 3,
          title: {
            en: '4.3 LEFT JOIN — keeping unmatched rows from the left table',
            km: '៤.៣ LEFT JOIN — ការរក្សាទុក Row ដែលគ្មានការផ្គូផ្គងពី Table ខាងឆ្វេង'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Use LEFT JOIN to include all records from the left table even if no matching row exists in the joined table.',
            km: 'ប្រើប្រាស់ LEFT JOIN ដើម្បីបង្ហាញគ្រប់កំណត់ត្រាពី Table ខាងឆ្វេង ទោះបីជាគ្មានការផ្គូផ្គងក្នុង Table ខាងស្តាំក៏ដោយ។'
          },
          starterCode: {
            language: 'sql',
            code: `-- Find authors even if they have 0 written books in system
SELECT authors.name, COUNT(books.id) AS books_count
FROM authors
LEFT JOIN books ON authors.id = books.author_id
GROUP BY authors.id, authors.name;`
          }
        },
        {
          id: 'db-4-4',
          slug: 'joining-three-or-more-tables',
          moduleNumber: 4,
          lessonNumberInModule: 4,
          title: {
            en: '4.4 Joining three or more tables',
            km: '៤.៤ ការ JOIN តារាង ៣ ឬច្រើនបញ្ចូលគ្នា'
          },
          durationMinutes: 24,
          difficulty: 'Intermediate',
          objective: {
            en: 'Chain multiple JOIN clauses across normalized tables like members, loans, books, and authors.',
            km: 'តភ្ជាប់ JOIN clauses ច្រើនបន្តបន្ទាប់គ្នាឆ្លងកាត់ Table ដូចជា members, loans, books, និង authors។'
          },
          starterCode: {
            language: 'sql',
            code: `SELECT 
    members.name AS member_name,
    books.title AS book_title,
    authors.name AS author_name,
    loans.loaned_date
FROM loans
INNER JOIN members ON loans.member_id = members.id
INNER JOIN books ON loans.book_id = books.id
INNER JOIN authors ON books.author_id = authors.id;`
          }
        },
        {
          id: 'db-4-5',
          slug: 'practice-join-authors-books-genres-report',
          moduleNumber: 4,
          lessonNumberInModule: 5,
          title: {
            en: '4.5 Practice: join authors, books, and genres into one readable report',
            km: '៤.៥ អនុវត្ត៖ JOIN តារាង authors, books, និង genres ចូលគ្នាក្នុងរបាយការណ៍តែមួយ'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build a production-ready catalog listing query with formatted column aliases and joins.',
            km: 'សរសេរ Query ទាញយករាយការណ៍ Catalog បញ្ជីសៀវភៅពេញលេញជាមួយ Alias និង JOINs។'
          },
          starterCode: {
            language: 'sql',
            code: `SELECT 
    b.id AS book_id,
    b.title,
    a.name AS author_name,
    g.name AS genre_name,
    b.published_year
FROM books b
JOIN authors a ON b.author_id = a.id
JOIN genres g ON b.genre_id = g.id
ORDER BY a.name ASC, b.published_year DESC;`
          }
        }
      ]
    },

    // Module 5 — Modifying Data (4 lessons)
    {
      moduleNumber: 5,
      title: {
        en: 'Module 5 — Modifying Data',
        km: 'មេរៀនទី ៥ — ការកែប្រែទិន្នន័យ (Data Manipulation)'
      },
      description: {
        en: 'Master INSERT, UPDATE, DELETE statements safely, and understand transaction boundaries (BEGIN, COMMIT, ROLLBACK).',
        km: 'ស្ទាត់ជំនាញបញ្ជា INSERT, UPDATE, DELETE ដោយសុវត្ថិភាព និងយល់ពីដែនកំណត់ Transaction (BEGIN, COMMIT, ROLLBACK)។'
      },
      lessons: [
        {
          id: 'db-5-1',
          slug: 'insert-adding-new-rows',
          moduleNumber: 5,
          lessonNumberInModule: 1,
          title: {
            en: '5.1 INSERT — adding new rows',
            km: '៥.១ INSERT — ការបន្ថែម Row ថ្មី'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Insert single and batch multiple rows into database tables with explicit column lists.',
            km: 'បញ្ជូល row ទោល និងបញ្ជូល row ច្រើនក្នុងពេលតែមួយ (batch insert) ដោយប្រកាសបញ្ជី column ច្បាស់លាស់។'
          },
          starterCode: {
            language: 'sql',
            code: `INSERT INTO authors (name, bio)
VALUES 
  ('Robert C. Martin', 'Author of Clean Code'),
  ('Martin Fowler', 'Software Architecture Consultant');`
          }
        },
        {
          id: 'db-5-2',
          slug: 'update-changing-existing-rows-safely',
          moduleNumber: 5,
          lessonNumberInModule: 2,
          title: {
            en: '5.2 UPDATE — changing existing rows safely (and why WHERE matters here too)',
            km: '៥.២ UPDATE — ការកែប្រែ Row មានស្រាប់ដោយសុវត្ថិភាព'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Modify existing table values using UPDATE and always guard with targeted WHERE clauses.',
            km: 'កែប្រែតម្លៃក្នុង Table ដោយប្រើ UPDATE និងការពារដោយប្រើប្រាស់ WHERE clause ជាក់លាក់ជានិច្ច។'
          },
          starterCode: {
            language: 'sql',
            code: `-- Safely update copies available for a specific book ID
UPDATE books
SET copies_available = copies_available - 1
WHERE id = 42 AND copies_available > 0;`
          }
        },
        {
          id: 'db-5-3',
          slug: 'delete-and-the-danger-of-missing-where-clause',
          moduleNumber: 5,
          lessonNumberInModule: 3,
          title: {
            en: '5.3 DELETE and the danger of a missing WHERE clause',
            km: '៥.៣ DELETE និងគ្រោះថ្នាក់នៃការភ្លេចសរសេរ WHERE Clause'
          },
          durationMinutes: 18,
          difficulty: 'Beginner',
          objective: {
            en: 'Remove rows safely using DELETE WITH WHERE clauses and understand TRUNCATE vs DELETE.',
            km: 'លុប row ដោយសុវត្ថិភាពដោយប្រើ DELETE ជាមួយ WHERE និងយល់ពីភាពខុសគ្នារវាង TRUNCATE និង DELETE។'
          },
          starterCode: {
            language: 'sql',
            code: `-- Always test target rows with SELECT before running DELETE
DELETE FROM loans
WHERE returned_date IS NOT NULL AND loaned_date < '2020-01-01';`
          }
        },
        {
          id: 'db-5-4',
          slug: 'transactions-begin-commit-rollback',
          moduleNumber: 5,
          lessonNumberInModule: 4,
          title: {
            en: '5.4 Transactions: BEGIN, COMMIT, ROLLBACK for multi-step changes',
            km: '៥.៤ Transactions: BEGIN, COMMIT, ROLLBACK សម្រាប់ការផ្លាស់ប្តូរច្រើនជំហាន'
          },
          durationMinutes: 24,
          difficulty: 'Intermediate',
          objective: {
            en: 'Ensure ACID guarantees for atomic operations like banking transfers or loan checkouts using transactions.',
            km: 'ធានា ACID guarantees សម្រាប់ប្រតិបត្តិការលក្ខណៈ Atomic ដូចជាការផ្ទេរប្រាក់ ឬការខ្ចីសៀវភៅដោយប្រើ Transactions។'
          },
          starterCode: {
            language: 'sql',
            code: `BEGIN;

-- Decrement book stock
UPDATE books SET copies_available = copies_available - 1 WHERE id = 10;

-- Record the loan
INSERT INTO loans (book_id, member_id, due_date) VALUES (10, 5, CURRENT_DATE + INTERVAL '14 days');

COMMIT;`
          }
        }
      ]
    },

    // Module 6 — Schema Design (5 lessons)
    {
      moduleNumber: 6,
      title: {
        en: 'Module 6 — Schema Design',
        km: 'មេរៀនទី ៦ — ការរចនា Schema (Schema Design)'
      },
      description: {
        en: 'Choose appropriate data types, design primary/foreign keys, enforce constraints, and normalize tables into 1NF, 2NF, 3NF.',
        km: 'ជ្រើសរើស Data Types សមស្រប, រចនា Primary/Foreign Keys, កំណត់ Constraints, និងធ្វើ Normalization (1NF, 2NF, 3NF)។'
      },
      lessons: [
        {
          id: 'db-6-1',
          slug: 'choosing-data-types-text-numbers-dates-booleans',
          moduleNumber: 6,
          lessonNumberInModule: 1,
          title: {
            en: '6.1 Choosing data types: text, numbers, dates, booleans',
            km: '៦.១ ការជ្រើសរើស Data Types: Text, Numbers, Dates, Booleans'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Select appropriate SQL column types: VARCHAR, TEXT, INTEGER, DECIMAL/NUMERIC, DATE, TIMESTAMP, and BOOLEAN.',
            km: 'ជ្រើសរើស Column types ឱ្យបានសមស្រប៖ VARCHAR, TEXT, INTEGER, DECIMAL, DATE, TIMESTAMP, និង BOOLEAN។'
          },
          starterCode: {
            language: 'sql',
            code: `CREATE TABLE members (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    account_balance DECIMAL(10, 2) DEFAULT 0.00,
    is_active BOOLEAN DEFAULT TRUE,
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
          }
        },
        {
          id: 'db-6-2',
          slug: 'primary-keys-and-autoincrementing-ids',
          moduleNumber: 6,
          lessonNumberInModule: 2,
          title: {
            en: '6.2 Primary keys and auto-incrementing IDs',
            km: '៦.២ Primary Keys និង Auto-incrementing IDs'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Understand entity identity, SERIAL / AUTO_INCREMENT columns, and UUID primary keys.',
            km: 'យល់ដឹងពី Entity identity, SERIAL / AUTO_INCREMENT columns, និង UUID primary keys។'
          },
          starterCode: {
            language: 'sql',
            code: `-- PostgreSQL auto-incrementing primary key
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);`
          }
        },
        {
          id: 'db-6-3',
          slug: 'foreign-keys-and-referential-integrity',
          moduleNumber: 6,
          lessonNumberInModule: 3,
          title: {
            en: '6.3 Foreign keys and referential integrity',
            km: '៦.៣ Foreign Keys និង Referential Integrity'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Enforce relational rules with foreign key constraints, ON DELETE CASCADE, ON DELETE RESTRICT, and ON DELETE SET NULL.',
            km: 'កំណត់លក្ខខណ្ឌ Foreign Key Constraints រួមមាន ON DELETE CASCADE, RESTRICT, និង SET NULL។'
          },
          starterCode: {
            language: 'sql',
            code: `CREATE TABLE loans (
    id SERIAL PRIMARY KEY,
    book_id INTEGER REFERENCES books(id) ON DELETE RESTRICT,
    member_id INTEGER REFERENCES members(id) ON DELETE CASCADE
);`
          }
        },
        {
          id: 'db-6-4',
          slug: 'normalization-1nf-2nf-3nf-explained',
          moduleNumber: 6,
          lessonNumberInModule: 4,
          title: {
            en: '6.4 Normalization: 1NF, 2NF, 3NF explained with a practical example',
            km: '៦.៤ Normalization: 1NF, 2NF, 3NF ត្រូវបានពន្យល់តាមឧទាហរណ៍អនុវត្ត'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Recognize flat unnormalized tables and decompose them into First, Second, and Third Normal Forms (3NF).',
            km: 'ស្គាល់តារាងទម្រង់ Flat unnormalized និងបំបែកវាទៅជា First, Second, និង Third Normal Forms (3NF)។'
          },
          explanation: {
            en: 'Normalization is the process of organizing tables so that each piece of information is stored in exactly one place, avoiding duplication and data inconsistency. 1NF requires scalar values (no comma-separated lists in one cell). 2NF eliminates partial key dependencies. 3NF ensures non-key columns depend exclusively on the primary key, avoiding transitive dependencies.',
            km: 'Normalization គឺជាដំណើរការរៀបចំតារាងដើម្បីឱ្យព័ត៌មាននីមួយៗត្រូវបានរក្សាទុកតែមួយកន្លែងគត់ ចៀសវាងការចម្លងជាន់គ្នា និង Data Inconsistency។ 1NF ទាមទារ scalar values។ 2NF បាត់បង់ Partial dependencies។ 3NF ធានាថា Non-key columns ពឹងផ្អែកតែលើ Primary key តែមួយគត់។'
          },
          starterCode: {
            language: 'sql',
            code: `-- BEFORE: Flat table with author info duplicated on every book row
-- books_flat(id, title, author_name, author_email, genre)

-- AFTER: Normalized 3NF Schema
CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255)
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    author_id INTEGER REFERENCES authors(id)
);`
          },
          practiceExercise: {
            question: {
              en: 'The books table above stores genre as plain text. Convert genre into a separate normalized table `genres` and reference it from `books`.',
              km: 'តារាង books ខាងលើរក្សាទុក genre ជាអត្ថបទធម្មតា។ ចូរផ្លាស់ប្តូរវាទៅជាតារាងដាច់ដោយឡែក `genres` ហើយភ្ជាប់ reference ពី `books`។'
            },
            solution: `CREATE TABLE genres (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100) UNIQUE NOT NULL\n);\n\nALTER TABLE books ADD COLUMN genre_id INTEGER REFERENCES genres(id);`
          },
          tips: {
            en: 'Normalization prevents update anomalies where changing an author\'s email requires updating 500 book rows!',
            km: 'Normalization ការពារ Update Anomalies ដែលការប្តូរ Email អ្នកនិពន្ធម្នាក់ទាមទារឱ្យ Update កូដរាប់រយជួរជាន់គ្នា!'
          }
        },
        {
          id: 'db-6-5',
          slug: 'practice-redesign-flat-table-into-normalized-tables',
          moduleNumber: 6,
          lessonNumberInModule: 5,
          title: {
            en: '6.5 Practice: redesign a poorly structured single "flat" table into normalized tables',
            km: '៦.៥ អនុវត្ត៖ រចនាតារាង "Flat" ទម្រង់មិនល្អ ឱ្យទៅជា Normalized Tables'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Take a messy spreadsheet-style SQL table and break it down into clean normalized relational entities.',
            km: 'យកតារាង SQL ទម្រង់ Spreadsheet មិនរៀបរយ មកបំបែកជា Relational Entities ស្តង់ដារ។'
          },
          starterCode: {
            language: 'sql',
            code: `-- Redesign challenge: split raw_orders_flat into users, products, orders, order_items
CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255) UNIQUE);
CREATE TABLE orders (id SERIAL PRIMARY KEY, user_id INT REFERENCES users(id), ordered_at TIMESTAMP);`
          }
        }
      ]
    },

    // Module 7 — Performance & Indexes (3 lessons)
    {
      moduleNumber: 7,
      title: {
        en: 'Module 7 — Performance & Indexes',
        km: 'មេរៀនទី ៧ — ប្រសិទ្ធភាព & Indexes'
      },
      description: {
        en: 'Understand B-Tree indexes, analyze query execution plans with EXPLAIN, and optimize slow database lookups.',
        km: 'យល់ដឹងពី B-Tree indexes, វិភាគល្បឿន Query ជាមួយ EXPLAIN និងពន្លឿនការស្វែងរកទិន្នន័យយឺត។'
      },
      lessons: [
        {
          id: 'db-7-1',
          slug: 'indexes-speeding-up-lookups',
          moduleNumber: 7,
          lessonNumberInModule: 1,
          title: {
            en: '7.1 What an index is, and how it speeds up lookups',
            km: '៧.១ អ្វីជា Index និងរបៀបដែលវាពន្លឿនការស្វែងរកទិន្នន័យ'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand database indexing data structures (B-Trees) and know when to add indexes to foreign keys or search columns.',
            km: 'យល់ដឹងពី រចនាសម្ព័ន្ធ Index (B-Trees) និងដឹងពីពេលដែលត្រូវបន្ថែម Index លើ Foreign keys ឬ Search columns។'
          },
          starterCode: {
            language: 'sql',
            code: `-- Creating a secondary index on book titles
CREATE INDEX idx_books_title ON books(title);

-- Composite index for filtering by author and publication year
CREATE INDEX idx_books_author_year ON books(author_id, published_year);`
          }
        },
        {
          id: 'db-7-2',
          slug: 'reading-query-plan-explain',
          moduleNumber: 7,
          lessonNumberInModule: 2,
          title: {
            en: '7.2 Reading a query plan with EXPLAIN',
            km: '៧.២ ការអាន Query Plan ដោយប្រើ EXPLAIN'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Use EXPLAIN and EXPLAIN ANALYZE to detect Sequential Scans versus Index Scans in SQL query execution.',
            km: 'ប្រើប្រាស់ EXPLAIN និង EXPLAIN ANALYZE ដើម្បីសម្គាល់ Sequential Scan ប្រៀបធៀបនឹង Index Scan។'
          },
          starterCode: {
            language: 'sql',
            code: `EXPLAIN ANALYZE
SELECT * FROM books WHERE title = 'Clean Code';`
          }
        },
        {
          id: 'db-7-3',
          slug: 'practice-add-index-confirm-explain',
          moduleNumber: 7,
          lessonNumberInModule: 3,
          title: {
            en: '7.3 Practice: add an index to a slow query and confirm the improvement with EXPLAIN',
            km: '៧.៣ អនុវត្ត៖ បន្ថែម Index លើ Query យឺត និងផ្ទៀងផ្ទាត់ការវិវឌ្ឍជាមួយ EXPLAIN'
          },
          durationMinutes: 24,
          difficulty: 'Intermediate',
          objective: {
            en: 'Benchmark query execution time before and after applying a targeted database index.',
            km: 'វាស់វែងពេលវេលារត់ Query មុន និងក្រោយពេលបន្ថែម Database Index ជាក់លាក់។'
          },
          starterCode: {
            language: 'sql',
            code: `-- Step 1: Explain before index
EXPLAIN ANALYZE SELECT * FROM loans WHERE due_date < CURRENT_DATE AND returned_date IS NULL;

-- Step 2: Add composite index
CREATE INDEX idx_loans_overdue ON loans(returned_date, due_date);

-- Step 3: Re-verify with EXPLAIN ANALYZE
EXPLAIN ANALYZE SELECT * FROM loans WHERE due_date < CURRENT_DATE AND returned_date IS NULL;`
          }
        }
      ]
    },

    // Module 8 — Advanced Queries, Application Use & Capstone (2 lessons + capstone)
    {
      moduleNumber: 8,
      title: {
        en: 'Module 8 — Advanced Queries, Application Use & Capstone',
        km: 'មេរៀនទី ៨ — Subqueries, Views, ការភ្ជាប់ App Code & Capstone Project'
      },
      description: {
        en: 'Master subqueries, database views, understand backend client driver connection pooling, and complete the Library Catalog capstone.',
        km: 'ស្ទាត់ជំនាញ Subqueries, Database Views, យល់ដឹងពី Connection Pooling ក្នុង App Code និងបញ្ចប់ Capstone Project។'
      },
      lessons: [
        {
          id: 'db-8-1',
          slug: 'subqueries-and-views',
          moduleNumber: 8,
          lessonNumberInModule: 1,
          title: {
            en: '8.1 Subqueries and views',
            km: '៨.១ Subqueries និង Views'
          },
          durationMinutes: 24,
          difficulty: 'Intermediate',
          objective: {
            en: 'Write nested subqueries in WHERE/FROM clauses and encapsulate reusable multi-table join logic inside database VIEWs.',
            km: 'សរសេរ Nested Subqueries ក្នុង WHERE/FROM clauses និងចងក្រង Logic JOIN ស្មុគស្មាញទុកក្នុង Database VIEWs។'
          },
          starterCode: {
            language: 'sql',
            code: `-- Subquery: find books with above-average publication year
SELECT title, published_year
FROM books
WHERE published_year > (SELECT AVG(published_year) FROM books);

-- Database View encapsulation
CREATE VIEW active_overdue_loans AS
SELECT l.id, m.name AS member_name, b.title AS book_title, l.due_date
FROM loans l
JOIN members m ON l.member_id = m.id
JOIN books b ON l.book_id = b.id
WHERE l.returned_date IS NULL AND l.due_date < CURRENT_DATE;`
          }
        },
        {
          id: 'db-8-2',
          slug: 'app-code-database-connection-conceptual',
          moduleNumber: 8,
          lessonNumberInModule: 2,
          title: {
            en: '8.2 How application code connects to and queries a database',
            km: '៨.២ របៀបដែល App Code (Node.js, Java, PHP) ភ្ជាប់ និង Query Database'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand database drivers, connection pools, ORMs vs raw query builders, and parameterized queries for SQL injection prevention.',
            km: 'យល់ដឹងពី Database Drivers, Connection Pools, ORMs vs Raw Query Builders និង Parameterized Queries ដើម្បីការពារ SQL Injection។'
          },
          starterCode: {
            language: 'sql',
            code: `-- Always use parameterized queries in application code!
-- Example prepared statement placeholder concept:
SELECT id, email FROM users WHERE email = $1 AND is_active = $2;`
          }
        }
      ]
    }
  ]
};
