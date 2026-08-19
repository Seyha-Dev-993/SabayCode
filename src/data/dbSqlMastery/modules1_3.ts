import { DatabaseSqlModule } from '../../types/databaseSqlMasteryClass';

export const MODULES_1_3: DatabaseSqlModule[] = [
  {
    id: 'module-1',
    moduleNumber: 1,
    title: {
      en: 'Module 1: Database Fundamentals',
      km: 'មូឌុលទី ១៖ មូលដ្ឋានគ្រឹះនៃទិន្នន័យ និងដាតាបេស',
    },
    description: {
      en: 'Understand what databases are, relational vs non-relational systems, tables, keys, and DBMS architectures.',
      km: 'យល់ដឹងពីអ្វីជាដាតាបេស ភាពខុសគ្នារវាង Relational និង Non-relational, តារាង, Keys និងប្រព័ន្ធគ្រប់គ្រងដាតាបេស (DBMS)។',
    },
    lessons: [
      {
        id: 'm1-l1',
        moduleId: 'module-1',
        moduleNumber: 1,
        lessonNumber: 1,
        title: {
          en: 'What is a Database & Structured Data',
          km: 'អ្វីជាដាតាបេស និងទិន្នន័យដែលមានរចនាសម្ព័ន្ធ (Structured Data)',
        },
        durationMinutes: 20,
        difficulty: 'Beginner',
        description: {
          en: 'Introduction to databases, structured data storage, and why files/spreadsheets fall short for production software.',
          km: 'សេចក្តីផ្តើមអំពីដាតាបេស ការរក្សាទុកទិន្នន័យមានរចនាសម្ព័ន្ធ និងមូលហេតុដែល File/Excel មិនអាចជំនួសដាតាបេសក្នុងប្រព័ន្ធធំៗបាន។',
        },
        explanation: {
          en: 'A database is an organized, persistent collection of structured data designed for rapid querying, concurrent access, and ACID transactional integrity. Unlike traditional text files or spreadsheets, a database provides atomic operations, multi-user concurrency controls, index acceleration, and crash recovery. In production software applications, databases ensure that millions of users can read and write data simultaneously without corrupting records or creating race conditions. As a software engineer or database architect, understanding database engines allows you to model real-world business domains efficiently, maintain strict data accuracy, and build scalable systems that support fast search and data retrieval.',
          km: 'ដាតាបេស គឺជាប្រព័ន្ធប្រមូលផ្តុំ និងរក្សាទុកទិន្នន័យដែលមានរចនាសម្ព័ន្ធយ៉ាងមានរបៀបរៀបរយ ដើម្បីងាយស្រួលក្នុងការស្វែងរក ធ្វើបច្ចុប្បន្នភាព និងគ្រប់គ្រង។ ខុសពីការប្រើប្រាស់ File ធម្មតា ឬ Excel Spreadsheet ដាតាបេសផ្តល់នូវសុវត្ថិភាពទិន្នន័យ Concurrency Control (មនុស្សច្រើនអាចចូលប្រើប្រាស់ក្នុងពេលតែមួយ) និង ACID Transactions ដែលធានាថាទិន្នន័យមិនបាត់បង់ ឬខូចខាតឡើយ។ សម្រាប់អ្នកអភិវឌ្ឍន៍សូហ្វវែរ ការយល់ដឹងអំពីដាតាបេសគឺជារឿងខានមិនបាន ដើម្បីបង្កើតប្រព័ន្ធដែលអាចគាំទ្រអ្នកប្រើប្រាស់រាប់លាននាក់ ដោយមានល្បឿនលឿន និងភាពត្រឹមត្រូវខ្ពស់។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Architecture: Client Applications connecting to DBMS with SQL Queries',
            km: 'ស្ថាបត្យកម្ម៖ កម្មវិធីទូរស័ព្ទ/វេបសាយ ភ្ជាប់ទៅកាន់ DBMS តាមរយៈ SQL Query',
          },
          svgData: {
            nodes: [
              { id: 'app', label: 'Client App / Web', subtext: 'React / Express Backend', x: 80, y: 100, type: 'primary' },
              { id: 'sql', label: 'SQL Engine', subtext: 'Parser & Execution Plan', x: 260, y: 100, type: 'secondary' },
              { id: 'storage', label: 'Disk Storage', subtext: 'Tables, B-Trees & WAL Logs', x: 440, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'app', to: 'sql', label: 'SELECT * FROM users;' },
              { from: 'sql', to: 'storage', label: 'Fetch Pages from Disk' },
            ]
          }
        },
        tutorial: {
          en: `In this lesson, we explore how databases store records in tables consisting of rows (records) and columns (attributes).

### Key Concepts:
1. **Persistence**: Data stays saved even after power outage or application restarts.
2. **ACID Properties**: Atomicity, Consistency, Isolation, and Durability ensure bulletproof transactions.
3. **Structured vs Unstructured Data**:
   - **Structured Data**: Fixed schema, tabular format (e.g., Bank Accounts, Orders, Products).
   - **Unstructured Data**: Raw text, video files, audio recordings.

Let's examine how a database table holds structured customer records:`,
          km: `ក្នុងមេរៀននេះ យើងនឹងសិក្សាអំពីរបៀបដែលដាតាបេសរក្សាទុកកំណត់ត្រាក្នុងតារាង (Tables) ដែលចែកចេញជាជួរដេក (Rows/Records) និងជួរឈរ (Columns/Fields)។

### សំខាន់ៗដែលត្រូវចងចាំ៖
១. **Persistence (ភាពអចិន្ត្រៃយ៍)**៖ ទិន្នន័យមិនបាត់បង់ឡើយ ទោះបីជាដាច់ភ្លើង ឬបិទកម្មវិធីក៏ដោយ។
២. **ACID Properties**៖ លក្ខណៈសម្បត្តិ ៤ យ៉ាងដែលធានាថារាល់ប្រតិបត្តិការទិន្នន័យមានសុវត្ថិភាព ១០០%។
៣. **Structured vs Unstructured Data**៖
   - **Structured Data**៖ ទិន្នន័យមានរចនាសម្ព័ន្ធច្បាស់លាស់ ជារាងតារាង (ឧ. គណនីធនាគារ, កម្មង់ទំនិញ)។
   - **Unstructured Data**៖ រូបភាព, វីដេអូ, ឬអត្ថបទរាយរាយ។`,
        },
        codeExample: {
          title: {
            en: 'Inspecting Database System Information',
            km: 'ការពិនិត្យមើលព័ត៌មានប្រព័ន្ធដាតាបេស',
          },
          description: {
            en: 'Sample query demonstrating how to inspect system settings and database connection status.',
            km: 'កូដគំរូសម្រាប់ពិនិត្យមើលកំណែទម្រង់ និងស្ថានភាពដាតាបេស។',
          },
          code: `SELECT version() AS db_version, current_database() AS database_name, current_user AS active_user;`,
        },
        outputPreview: {
          columns: ['db_version', 'database_name', 'active_user'],
          rows: [
            ['PostgreSQL 16.2 on x86_64-pc-linux-gnu', 'sabaycode_production', 'admin_dev']
          ],
          explanation: {
            en: 'The database server returns metadata showing the running PostgreSQL engine version, active database, and connected user role.',
            km: 'ម៉ាស៊ីនបម្រើដាតាបេសបង្វិលមកវិញនូវ Metadata ដែលបង្ហាញពីកំណែ PostgreSQL ឈ្មោះដាតាបេស និង User ដែលកំពុងប្រើប្រាស់។',
          }
        },
        tryItYourself: {
          starterCode: `SELECT 'SabayCode Database System' AS platform_name, 100 AS status_code;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Use SELECT statement to return literal values or calculate expressions.', km: 'ប្រើប្រាស់បញ្ជា SELECT ដើម្បីបង្វិលតម្លៃផ្ទៀងផ្ទាត់ ឬគណនាកើនឡើង។' },
          ]
        },
        quiz: [
          {
            id: 'm1-l1-q1',
            question: {
              en: 'What primary advantage does a Database Management System (DBMS) offer over plain JSON files?',
              km: 'តើប្រព័ន្ធគ្រប់គ្រងដាតាបេស (DBMS) មានប្រៀបជាង File JSON ធម្មតាតាមរយៈចំណុចសំខាន់អ្វី?',
            },
            options: [
              { id: 'opt1', text: { en: 'DBMS provides ACID transactions, concurrency control, and fast indexing', km: 'DBMS មាន ACID transactions, ការគ្រប់គ្រង Concurrency និង Indexing លឿន' }, isCorrect: true },
              { id: 'opt2', text: { en: 'JSON files process queries faster for millions of rows', km: 'File JSON ដំណើការ query លឿនជាងសម្រាប់ទិន្នន័យរាប់លាន' }, isCorrect: false },
              { id: 'opt3', text: { en: 'DBMS requires no disk space', km: 'DBMS មិនត្រូវការទីកន្លែងផ្ទុកលើ Disk ឡើយ' }, isCorrect: false },
            ],
            explanation: {
              en: 'DBMS engines provide ACID integrity, multi-user concurrency locks, and B-tree indexes for fast querying.',
              km: 'DBMS ផ្តល់នូវសុវត្ថិភាពទិន្នន័យ ACID, Concurrency Control និង Index សម្រាប់ស្វែងរកទិន្នន័យលឿន។',
            }
          }
        ]
      },
      {
        id: 'm1-l2',
        moduleId: 'module-1',
        moduleNumber: 1,
        lessonNumber: 2,
        title: {
          en: 'Relational vs Non-Relational (SQL vs NoSQL)',
          km: 'ប្រៀបធៀប Relational (SQL) និង Non-Relational (NoSQL)',
        },
        durationMinutes: 25,
        difficulty: 'Beginner',
        description: {
          en: 'Comparing relational databases (SQL) with document/key-value stores (NoSQL) and choosing the right tool.',
          km: 'ការប្រៀបធៀបដាតាបេស relational (SQL) ជាមួយ document/key-value stores (NoSQL) និងការជ្រើសរើសដាតាបេសឱ្យត្រូវនឹងតម្រូវការ។',
        },
        explanation: {
          en: 'Relational databases store data in strictly structured tables with predefined schemas and enforce relations between entities through foreign keys. In contrast, Non-Relational (NoSQL) databases store data as key-value pairs, flexible JSON documents, graph nodes, or wide-column stores. SQL databases excel when your data schema is well-defined and requires complex multi-table joins, auditability, and absolute financial consistency (such as banking systems and e-commerce transactions). NoSQL databases shine when handling unstructured or rapidly evolving schema data with horizontal scaling requirements across distributed clusters.',
          km: 'Relational Databases (SQL) រក្សាទុកទិន្នន័យក្នុងតារាងដែលមាន Schema ច្បាស់លាស់ និងភ្ជាប់ទំនាក់ទំនងគ្នាតាមរយៈ Foreign Keys។ ចំណែកឯ Non-Relational Databases (NoSQL) រក្សាទុកទិន្នន័យជាឯកសារ JSON, Key-Value, ឬ Graph ដែលអាចកែប្រែទម្រង់បានរហ័ស។ យើងជ្រើសរើសប្រើប្រាស់ SQL ដាតាបេស នៅពេលប្រព័ន្ធត្រូវការការភ្ជាប់តារាងច្រើន (Joins), ភាពច្បាស់លាស់នៃ Schema និងសុវត្ថិភាពហិរញ្ញវត្ថុ។ យើងប្រើ NoSQL នៅពេលទិន្នន័យគ្មានទម្រង់ថេរ ឬត្រូវការ Horizontal Scaling លើម៉ាស៊ីនច្រើន។',
        },
        diagram: {
          type: 'relational-model',
          caption: {
            en: 'Relational (Tables & Foreign Keys) vs NoSQL (Document JSON)',
            km: 'ទម្រង់ Relational (តារាង & Foreign Keys) ប្រៀបធៀបនឹង NoSQL (Document JSON)',
          },
          svgData: {
            tables: [
              { name: 'SQL: users (Table)', columns: [{ name: 'id', type: 'INT', pk: true }, { name: 'email', type: 'VARCHAR' }] },
              { name: 'SQL: orders (Table)', columns: [{ name: 'id', type: 'INT', pk: true }, { name: 'user_id', type: 'INT', fk: true }] },
              { name: 'NoSQL: orders (JSON Document)', columns: [{ name: '{ _id: "x1", user: { email: "dara@mail.com" }, items: [...] }', type: 'JSON' }] }
            ]
          }
        },
        tutorial: {
          en: `### SQL vs NoSQL Comparison:

| Feature | SQL (Relational) | NoSQL (Non-Relational) |
| :--- | :--- | :--- |
| **Data Structure** | Tables (Rows & Columns) | JSON Documents, Key-Value, Graphs |
| **Schema** | Rigid, predefined upfront | Dynamic, flexible schema |
| **Joins** | Powerful multi-table JOINs | Avoided; nested data preferred |
| **ACID Guarantees** | Strong ACID out of the box | BASE (Eventual Consistency) |
| **Examples** | PostgreSQL, MySQL, SQLite | MongoDB, Redis, Cassandra |

Let's write a query in SQL that joins related tables, a signature feature of Relational Databases:`,
          km: `### ការប្រៀបធៀប SQL និង NoSQL៖

| លក្ខណៈ | SQL (Relational) | NoSQL (Non-Relational) |
| :--- | :--- | :--- |
| **រចនាសម្ព័ន្ធ** | តារាង (Rows & Columns) | JSON Document, Key-Value, Graph |
| **Schema** | ថេរ និងកំណត់មុនច្បាស់លាស់ | Flexible អាចប្រែប្រួលបាន |
| **ការភ្ជាប់តារាង (JOIN)** | ខ្លាំងក្លា រហ័ស និងមានប្រសិទ្ធភាព | មិនសូវប្រើ ភាគច្រើនដាក់ប្រមូលផ្តុំក្នុង JSON តែមួយ |
| **ACID Guarantees** | ខ្ពស់ និងតឹងរ៉ឹងបំផុត | ភាគច្រើនជា Eventual Consistency |
| **ឧទាហរណ៍** | PostgreSQL, MySQL, SQLite | MongoDB, Redis, Cassandra |`,
        },
        codeExample: {
          title: {
            en: 'Querying Relational Data Across Tables',
            km: 'ការស្វែងរកទិន្នន័យ Relational រវាងតារាងដែលទាក់ទងគ្នា',
          },
          description: {
            en: 'Retrieving user orders by linking the users table to the orders table.',
            km: 'ទាញយកទិន្នន័យការទិញទំនិញដោយភ្ជាប់តារាង users ទៅកាន់តារាង orders។',
          },
          code: `SELECT users.name, orders.order_date, orders.total_amount
FROM users
JOIN orders ON users.id = orders.user_id;`,
        },
        outputPreview: {
          columns: ['name', 'order_date', 'total_amount'],
          rows: [
            ['Dara Sok', '2026-03-15', 45.00],
            ['Bopha Chan', '2026-03-16', 120.50],
            ['Sovan Keo', '2026-03-16', 15.00],
          ],
          explanation: {
            en: 'The relational query joins records from two separate tables where foreign key user_id matches primary key users.id.',
            km: 'បញ្ជា SQL Relational បានភ្ជាប់កំណត់ត្រាតារាងពីរចូលគ្នាដោយផ្អែកលើ Primary Key និង Foreign Key។',
          }
        },
        tryItYourself: {
          starterCode: `SELECT * FROM users;`,
          sampleDataSetupSql: `CREATE TABLE users (id INT, name TEXT); INSERT INTO users VALUES (1, 'Dara Sok'), (2, 'Bopha Chan');`,
          hints: [
            { en: 'Select all columns from users table using wildcard (*).', km: 'ជ្រើសរើសជួរឈរទាំងអស់ពីតារាង users ដោយប្រើសញ្ញា ផ្កាយ (*)' }
          ]
        },
        quiz: [
          {
            id: 'm1-l2-q1',
            question: {
              en: 'Which use case is BEST suited for a Relational (SQL) Database?',
              km: 'តើករណីប្រើប្រាស់មួយណាដែលស័ក្តិសមបំផុតសម្រាប់ Relational (SQL) Database?',
            },
            options: [
              { id: 'opt1', text: { en: 'E-commerce banking transaction system requiring strict relational auditability', km: 'ប្រព័ន្ធប្រតិបត្តិការហិរញ្ញវត្ថុ/ធនាគារដែលត្រូវការភាពត្រឹមត្រូវខ្ពស់ និង Audit' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Storing unstructured raw log text files with zero schema', km: 'ការផ្ទុក Log Files រាយរាយដែលគ្មាន Schema' }, isCorrect: false },
              { id: 'opt3', text: { en: 'Simple temporary in-memory key-value caching', km: 'ការធ្វើ Cache បណ្តោះអាសន្នលើ RAM' }, isCorrect: false }
            ],
            explanation: {
              en: 'SQL relational databases guarantee transactional integrity (ACID) and schema enforcement, essential for e-commerce and banking.',
              km: 'SQL ដាតាបេស ធានានូវភាពត្រឹមត្រូវនៃទិន្នន័យ (ACID) និង Schema ច្បាស់លាស់ ដែលជាតម្រូវការចាំបាច់សម្រាប់ប្រព័ន្ធហិរញ្ញវត្ថុ។',
            }
          }
        ]
      },
      {
        id: 'm1-l3',
        moduleId: 'module-1',
        moduleNumber: 1,
        lessonNumber: 3,
        title: {
          en: 'Tables, Rows, & Columns Explained',
          km: 'ការយល់ដឹងអំពី តារាង (Tables), ជួរដេក (Rows), និងជួរឈរ (Columns)',
        },
        durationMinutes: 20,
        difficulty: 'Beginner',
        description: {
          en: 'Anatomy of a relational table: entities, attributes, tuples, and data types.',
          km: 'រចនាសម្ព័ន្ធលម្អិតនៃតារាង relational៖ អ៊ិនទីទី (Entities), លក្ខណៈ (Attributes), ជួរដេក (Tuples) និងប្រភេទទិន្នន័យ (Data Types)។',
        },
        explanation: {
          en: 'At the heart of the relational model introduced by Edgar F. Codd is the relation, represented visually as a two-dimensional table. A table represents a real-world entity type (such as Students, Products, or Invoices). Columns represent attributes or properties of that entity (such as student_name, price, or order_date), each assigned a specific data type (INTEGER, VARCHAR, BOOLEAN, TIMESTAMP). Rows (also known as records or tuples) represent individual concrete instances of that entity. Designing clean tables with strict column data types prevents data corruption and ensures that your application always reads standardized inputs.',
          km: 'នៅក្នុង Relational Model តារាង (Table) គឺជាតំណាងនៃវត្ថុ ឬ Entity ក្នុងពិភពពិត (ដូចជា សិស្ស, ទំនិញ, ឬ វិក្កយបត្រ)។ ជួរឈរ (Column) គឺជាលក្ខណៈសម្បត្តិ (Attribute) របស់ Entity នោះ ហើយជួរឈរនីមួយៗត្រូវតែមានប្រភេទទិន្នន័យ (Data Type) ច្បាស់លាស់ (ដូចជា លេខគត់ INTEGER, អក្សរ VARCHAR, ឬ កាលបរិច្ឆេទ TIMESTAMP)។ ជួរដេក (Row/Record) គឺជាព័ត៌មានជាក់ស្តែងមួយៗដែលត្រូវបានបញ្ចូលក្នុងតារាង។ ការកំណត់រចនាសម្ព័ន្ធតារាងបានត្រឹមត្រូវ ការពារមិនឱ្យទិន្នន័យខុសទម្រង់ត្រូវបានបញ្ចូលឡើយ។',
        },
        diagram: {
          type: 'relational-model',
          caption: {
            en: 'Anatomy of a Database Table (Columns, Rows, and Primary Key)',
            km: 'រចនាសម្ព័ន្ធនៃតារាងដាតាបេស (ជួរឈរ, ជួរដេក, និង Primary Key)',
          },
          svgData: {
            tables: [
              {
                name: 'students (Table)',
                columns: [
                  { name: 'id (Column 1 - INT)', type: 'PK', pk: true },
                  { name: 'full_name (Column 2 - VARCHAR)', type: 'TEXT' },
                  { name: 'gpa (Column 3 - DECIMAL)', type: 'NUMERIC' }
                ]
              }
            ]
          }
        },
        tutorial: {
          en: `### Anatomy of a Table:
1. **Table Name**: Pluralized noun representing the entity (e.g., \`products\`, \`customers\`).
2. **Columns (Fields)**:
   - \`id\` -> INT (Unique Identifier)
   - \`product_name\` -> VARCHAR(100) (Text)
   - \`unit_price\` -> DECIMAL(10,2) (Currency)
   - \`is_active\` -> BOOLEAN (True/False)
3. **Rows (Records)**: Individual data entries.

Let's inspect table columns and data types:`,
          km: `### រចនាសម្ព័ន្ធលម្អិតនៃតារាង៖
១. **ឈ្មោះតារាង (Table Name)**៖ ជាពាក្យនាមតំណាងឱ្យ Entity (ឧ. \`products\`, \`customers\`)។
២. **ជួរឈរ (Columns/Fields)**៖
   - \`id\` -> INT (អត្តសញ្ញាណតែមួយ)
   - \`product_name\` -> VARCHAR(100) (អត្ថបទ)
   - \`unit_price\` -> DECIMAL(10,2) (តម្លៃប្រាក់)
   - \`is_active\` -> BOOLEAN (ពិត/មិនពិត)
៣. **ជួរដេក (Rows/Records)**៖ ព័ត៌មានជាក់ស្តែងមួយៗ។`,
        },
        codeExample: {
          title: {
            en: 'Creating a Well-Defined Table Schema',
            km: 'ការបង្កើត Schema តារាងដែលមានរចនាសម្ព័ន្ធត្រឹមត្រូវ',
          },
          description: {
            en: 'Defining table structure with explicit column data types and constraints.',
            km: 'ការកំណត់រចនាសម្ព័ន្ធតារាង ព្រមទាំងប្រភេទទិន្នន័យ និងលក្ខខណ្ឌសម្រាប់ជួរឈរនីមួយៗ។',
          },
          code: `CREATE TABLE products (
  id INT PRIMARY KEY,
  product_name VARCHAR(150) NOT NULL,
  unit_price NUMERIC(10, 2) NOT NULL,
  stock_quantity INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
        },
        outputPreview: {
          columns: ['status', 'message'],
          rows: [
            ['SUCCESS', 'Table "products" created successfully with 5 columns.']
          ],
          explanation: {
            en: 'The DDL statement executes successfully, creating a relational table with data type rules enforcement.',
            km: 'បញ្ជា DDL បានបង្កើតតារាង "products" ដោយជោគជ័យជាមួយលក្ខខណ្ឌប្រភេទទិន្នន័យច្បាស់លាស់។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  age INT
);

INSERT INTO students VALUES (1, 'Sophea Sok', 21);
SELECT * FROM students;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'First create table, insert row, and select to verify.', km: 'បង្កើតតារាងមុន បន្ទាប់មកបញ្ចូលទិន្នន័យ រួចទាញយកទិន្នន័យមកមើល។' }
          ]
        },
        quiz: [
          {
            id: 'm1-l3-q1',
            question: {
              en: 'In relational database terminology, what does a ROW represent?',
              km: 'នៅក្នុងពាក្យបច្ចេកទេសដាតាបេស Relational តើ ជួរដេក (Row) តំណាងឱ្យអ្វី?',
            },
            options: [
              { id: 'opt1', text: { en: 'A single concrete record or instance of an entity', km: 'កំណត់ត្រា ឬទិន្នន័យជាក់ស្តែងមួយនៃ Entity' }, isCorrect: true },
              { id: 'opt2', text: { en: 'An attribute property name such as email', km: 'ឈ្មោះលក្ខណៈសម្បត្តិដូចជា email' }, isCorrect: false },
              { id: 'opt3', text: { en: 'The database server operating system', km: 'ប្រព័ន្ធប្រតិបត្តិការម៉ាស៊ីនបម្រើ' }, isCorrect: false }
            ],
            explanation: {
              en: 'A row (record) represents an individual entity instance, whereas a column represents an attribute property.',
              km: 'ជួរដេក (Row) តំណាងឱ្យទិន្នន័យជាក់ស្តែងមួយ ខណៈជួរឈរ (Column) តំណាងឱ្យលក្ខណៈសម្បត្តិរបស់វា។',
            }
          }
        ]
      },
      {
        id: 'm1-l4',
        moduleId: 'module-1',
        moduleNumber: 1,
        lessonNumber: 4,
        title: {
          en: 'Primary Keys & Unique Identification',
          km: 'Primary Key និងការកំណត់អត្តសញ្ញាណទិន្នន័យតែមួយគត់',
        },
        durationMinutes: 20,
        difficulty: 'Beginner',
        description: {
          en: 'Understanding Primary Keys, natural keys vs surrogate keys (UUIDs, Auto-Increment IDs), and uniqueness constraints.',
          km: 'ការយល់ដឹងអំពី Primary Key, Natural Key ប្រៀបធៀប Surrogate Key (Auto-Increment ID, UUID) និងលក្ខខណ្ឌ Uniqueness។',
        },
        explanation: {
          en: 'A Primary Key is a column or set of columns that uniquely identifies each individual row in a table. A primary key constraint strictly guarantees two properties: uniqueness (no two rows can share the same key value) and non-nullability (a primary key can never be NULL). Database engineers choose between Natural Keys (real-world unique attributes like National ID or Passport Number) and Surrogate Keys (system-generated artificial identifiers like auto-incrementing integers or UUIDs). Surrogate keys are strongly preferred in modern web and mobile applications because they isolate internal database references from external business changes and provide consistent join performance across tables.',
          km: 'Primary Key គឺជាជួរឈរ ឬបន្សំជួរឈរដែលកំណត់អត្តសញ្ញាណជួរដេកនីមួយៗឱ្យនៅតែមួយគត់ (Unique) ក្នុងតារាង។ Primary Key មានលក្ខណៈពិសេស ២ យ៉ាង៖ មិនអាចជាន់គ្នា (Unique) និងមិនអាចទទេរបានឡើយ (NOT NULL)។ ក្នុងការរចនាដាតាបេស យើងអាចជ្រើសរើសរវាង Natural Key (លេខអត្តសញ្ញាណប័ណ្ណ) និង Surrogate Key (លេខរៀង Auto-increment ឬ UUID)។ ក្នុងប្រព័ន្ធទំនើប គេនិយមប្រើ Surrogate Key ដើម្បីកុំឱ្យប៉ះពាល់ដល់ការភ្ជាប់ទំនាក់ទំនងរវាងតារាងនៅពេលព័ត៌មានខាងក្រៅផ្លាស់ប្តូរ។',
        },
        diagram: {
          type: 'relational-model',
          caption: {
            en: 'Primary Key Constraint enforcing uniqueness and preventing duplicate IDs',
            km: 'លក្ខខណ្ឌ Primary Key ធានាភាព Unique និងរារាំងមិនឱ្យមាន ID ជាន់គ្នា',
          },
          svgData: {
            tables: [
              {
                name: 'users (Primary Key: id)',
                columns: [
                  { name: '101 (Valid PK)', type: 'INT', pk: true },
                  { name: '102 (Valid PK)', type: 'INT', pk: true },
                  { name: '101 (❌ ERROR: Duplicate Primary Key)', type: 'REJECTED' }
                ]
              }
            ]
          }
        },
        tutorial: {
          en: `### Natural Key vs Surrogate Key:

1. **Surrogate Key (Recommended)**:
   - \`id INT AUTO_INCREMENT PRIMARY KEY\` (or \`SERIAL\` / \`UUID\`).
   - Independent of business logic changes.
2. **Natural Key**:
   - \`national_id_card_number VARCHAR(20) PRIMARY KEY\`.
   - Fragile if government formats or rules change.

Let's test Primary Key constraint enforcement in SQL:`,
          km: `### ការប្រៀបធៀប Natural Key និង Surrogate Key៖

១. **Surrogate Key (ចំណូលចិត្តទូទៅ)**៖
   - \`id INT AUTO_INCREMENT PRIMARY KEY\` ឬ \`UUID\`
   - មិនរងឥទ្ធិពលពីការកែប្រែព័ត៌មានខាងក្រៅឡើយ។
២. **Natural Key**៖
   - \`id_card_number VARCHAR(20) PRIMARY KEY\`
   - មានហានិភ័យប្រសិនបើទម្រង់ផ្លូវការខាងក្រៅផ្លាស់ប្តូរ។`,
        },
        codeExample: {
          title: {
            en: 'Defining Primary Keys with Auto-Increment & UUIDs',
            km: 'ការកំណត់ Primary Key ជាមួយ Auto-Increment និង UUID',
          },
          description: {
            en: 'Creating table with integer auto-increment primary key constraint.',
            km: 'ការបង្កើតតារាងជាមួយ Primary Key លេខរៀងស្វ័យប្រវត្តិ។',
          },
          code: `CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO categories (category_name) VALUES ('Laptops'), ('Smartphones');
SELECT * FROM categories;`,
        },
        outputPreview: {
          columns: ['category_id', 'category_name'],
          rows: [
            [1, 'Laptops'],
            [2, 'Smartphones']
          ],
          explanation: {
            en: 'The database automatically assigned sequential integer primary key values (1 and 2) to each row.',
            km: 'ដាតាបេសបានបង្កើតលេខរៀង Primary Key (1 និង 2) ដោយស្វ័យប្រវត្តិសម្រាប់កំណត់ត្រានីមួយៗ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE test_pk (
  id INT PRIMARY KEY,
  label TEXT
);
INSERT INTO test_pk VALUES (1, 'First Record');
SELECT * FROM test_pk;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Inserting duplicate ID 1 will throw a Primary Key Violation error.', km: 'ការបញ្ចូល ID 1 ជាន់គ្នា នឹងបណ្តាលឱ្យមានកំហុស Primary Key Violation។' }
          ]
        },
        quiz: [
          {
            id: 'm1-l4-q1',
            question: {
              en: 'What happens if you attempt to insert a NULL value into a Primary Key column?',
              km: 'តើមានអ្វីកើតឡើង ប្រសិនបើអ្នកព្យាយាមបញ្ចូលតម្លៃ NULL ទៅក្នុងជួរឈរ Primary Key?',
            },
            options: [
              { id: 'opt1', text: { en: 'The database rejects the insert with a NOT NULL violation error', km: 'ដាតាបេសបដិសេធប្រតិបត្តិការជាមួយកំហុស NOT NULL violation' }, isCorrect: true },
              { id: 'opt2', text: { en: 'The database converts NULL to empty string', km: 'ដាតាបេសប្តូរ NULL ទៅជាអក្សរទទេ' }, isCorrect: false },
              { id: 'opt3', text: { en: 'The database creates a duplicate key', km: 'ដាតាបេសបង្កើត Key ជាន់គ្នា' }, isCorrect: false }
            ],
            explanation: {
              en: 'Primary Key constraints explicitly prohibit NULL values and duplicate entries.',
              km: 'លក្ខខណ្ឌ Primary Key ហាមឃាត់ដាច់ខាតមិនឱ្យមានតម្លៃ NULL និងតម្លៃជាន់គ្នាឡើយ។',
            }
          }
        ]
      },
      {
        id: 'm1-l5',
        moduleId: 'module-1',
        moduleNumber: 1,
        lessonNumber: 5,
        title: {
          en: 'Foreign Keys & Table Relationships',
          km: 'Foreign Key និងទំនាក់ទំនងរវាងតារាង (Table Relationships)',
        },
        durationMinutes: 25,
        difficulty: 'Beginner',
        description: {
          en: 'Linking tables using Foreign Keys, Referential Integrity, and CASCADE deletion rules.',
          km: 'ការភ្ជាប់ទំនាក់ទំនងរវាងតារាងតាមរយៈ Foreign Key, Referential Integrity, និងលក្ខខណ្ឌ CASCADE។',
        },
        explanation: {
          en: 'A Foreign Key is a column or group of columns in one table that references the Primary Key of another table, establishing a parent-child relationship. Foreign key constraints enforce Referential Integrity, ensuring that a child record cannot reference a non-existent parent row. For example, in an e-commerce database, every order row contains a customer_id referencing the customers table. If an application attempts to insert an order with an invalid customer_id, the DBMS halts execution to protect data consistency. Foreign keys also configure cascading actions, such as ON DELETE CASCADE or ON DELETE SET NULL, defining how child records respond when a parent record is deleted.',
          km: 'Foreign Key គឺជាជួរឈរនៅក្នុងតារាងកូន (Child Table) ដែលចង្អុលទៅកាន់ Primary Key នៃតារាងមេ (Parent Table) ដើម្បីបង្កើតទំនាក់ទំនងរវាងតារាងទាំងពីរ។ Foreign Key ធានានូវ Referential Integrity ដែលការពារមិនឱ្យមានទិន្នន័យកូនកំព្រា (Orphan Records) ឡើយ។ ឧទាហរណ៍ ក្នុងតារាង orders មានជួរឈរ customer_id ដែលភ្ជាប់ទៅកាន់តារាង customers។ ប្រសិនបើយើងព្យាយាមបង្កើត Order ដោយប្រើ customer_id ដែលគ្មានក្នុងតារាងមេ ដាតាបេសនឹងបដិសេធភ្លាមៗ។ យើងក៏អាចកំណត់លក្ខខណ្ឌ ON DELETE CASCADE ដើម្បលុបទិន្នន័យកូនដោយស្វ័យប្រវត្តិនៅពេលតារាងមេត្រូវបានលុប។',
        },
        diagram: {
          type: 'er-diagram',
          caption: {
            en: 'Parent Table (customers) referenced by Child Table (orders) via Foreign Key',
            km: 'តារាងមេ (customers) ភ្ជាប់ទៅកាន់តារាងកូន (orders) តាមរយៈ Foreign Key',
          },
          svgData: {
            nodes: [
              { id: 'parent', label: 'customers (Parent)', subtext: 'id (PK): 10', x: 100, y: 100, type: 'primary' },
              { id: 'child', label: 'orders (Child)', subtext: 'customer_id (FK) -> 10', x: 340, y: 100, type: 'secondary' },
            ],
            links: [
              { from: 'parent', to: 'child', label: '1-to-Many Relationship' }
            ]
          }
        },
        tutorial: {
          en: `### Types of Table Relationships:
1. **One-to-Many (1:N)**: One customer can place many orders (Most common).
2. **One-to-One (1:1)**: One user profile per user account.
3. **Many-to-Many (N:M)**: Students enrolled in multiple courses (Requires a Join/Junction Table).

Let's write a SQL statement linking orders to customers via Foreign Key:`,
          km: `### ប្រភេទនៃទំនាក់ទំនងរវាងតារាង៖
១. **One-to-Many (1:N)**៖ អតិថិជនម្នាក់អាចធ្វើការបញ្ជាទិញច្រើនដង (ពេញនិយមបំផុត)។
២. **One-to-One (1:1)**៖ គណនីម្នាក់មាន Profile តែមួយ។
៣. **Many-to-Many (N:M)**៖ សិស្សម្នាក់ចុះឈ្មោះរៀនបានច្រើនមុខវិជ្ជា ហើយមុខវិជ្ជាមានសិស្សច្រើន (ត្រូវការ Junction Table)។`,
        },
        codeExample: {
          title: {
            en: 'Creating Parent & Child Tables with Foreign Key Constraints',
            km: 'ការបង្កើតតារាងមេ និងតារាងកូនជាមួយលក្ខខណ្ឌ Foreign Key',
          },
          description: {
            en: 'Declaring foreign key constraint referencing parent primary key.',
            km: 'ការប្រកាសលក្ខខណ្ឌ Foreign Key ភ្ជាប់ទៅ Primary Key នៃតារាងមេ។',
          },
          code: `CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY,
  customer_name VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(customer_id) ON DELETE CASCADE,
  order_total NUMERIC(10,2) NOT NULL
);`,
        },
        outputPreview: {
          columns: ['status', 'referential_integrity'],
          rows: [
            ['SUCCESS', 'Foreign Key constraint "orders_customer_id_fkey" active.']
          ],
          explanation: {
            en: 'The orders table now mandates that all customer_id values must exist in customers table.',
            km: 'តារាង orders ពេលនេះតម្រូវឱ្យរាល់តម្លៃ customer_id ទាំងអស់ត្រូវតែមានស្រាប់ក្នុងតារាង customers។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE dept (id INT PRIMARY KEY, dname TEXT);
CREATE TABLE emp (id INT PRIMARY KEY, dept_id INT REFERENCES dept(id), ename TEXT);

INSERT INTO dept VALUES (1, 'Engineering');
INSERT INTO emp VALUES (101, 1, 'Sopheak');
SELECT * FROM emp;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Inserting employee with dept_id = 99 will fail because department 99 does not exist.', km: 'ការបញ្ចូលបុគ្គលិកប្រើ dept_id = 99 នឹងបរាជ័យ ព្រោះគ្មានដេប៉ាតឺម៉ង់លេខ 99 ឡើយ។' }
          ]
        },
        quiz: [
          {
            id: 'm1-l5-q1',
            question: {
              en: 'What does Referential Integrity guarantee in a Relational Database?',
              km: 'តើ Referential Integrity ធានានូវអ្វីខ្លះនៅក្នុង Relational Database?',
            },
            options: [
              { id: 'opt1', text: { en: 'Foreign key values in child tables must match an existing primary key in the parent table', km: 'តម្លៃ Foreign Key ក្នុងតារាងកូនត្រូវតែត្រូវគ្នានឹង Primary Key ដែលមានស្រាប់ក្នុងតារាងមេ' }, isCorrect: true },
              { id: 'opt2', text: { en: 'All column text must be stored in uppercase', km: 'អត្ថបទទាំងអស់ត្រូវតែរក្សាទុកជាអក្សរធំ' }, isCorrect: false },
              { id: 'opt3', text: { en: 'Tables are automatically backed up every hour', km: 'តារាងត្រូវសែនចម្លងទុកស្វ័យប្រវត្តិនីមួយៗម៉ោង' }, isCorrect: false }
            ],
            explanation: {
              en: 'Referential integrity guarantees that foreign key references always point to valid, existing parent rows.',
              km: 'Referential integrity ធានាថាការភ្ជាប់ Foreign key តែងតែចង្អុលទៅកាន់ជួរដេកដែលមានស្រាប់ក្នុងតារាងមេ។',
            }
          }
        ]
      },
      {
        id: 'm1-l6',
        moduleId: 'module-1',
        moduleNumber: 1,
        lessonNumber: 6,
        title: {
          en: 'DBMS Engines Overview (PostgreSQL, MySQL, SQLite)',
          km: 'ទិដ្ឋភាពទូទៅនៃប្រព័ន្ធ DBMS (PostgreSQL, MySQL, SQLite)',
        },
        durationMinutes: 20,
        difficulty: 'Beginner',
        description: {
          en: 'Comparing major relational database management systems, embedded vs server architectures.',
          km: 'ការប្រៀបធៀបប្រព័ន្ធគ្រប់គ្រងដាតាបេស Relational សំខាន់ៗ និងរចនាសម្ព័ន្ធ Embedded ធៀបនឹង Client-Server។',
        },
        explanation: {
          en: 'While SQL is an ANSI/ISO standard language, different Relational Database Management Systems (RDBMS) implement custom storage engines, extended SQL functions, and execution capabilities. PostgreSQL is renowned as the most feature-rich enterprise open-source database, supporting advanced JSONB indexing, custom extensions (like PostGIS), and complex analytical queries. MySQL (and MariaDB) powers a massive portion of the web ecosystem, celebrated for high read speeds and straightforward replication topologies. SQLite is an embedded zero-configuration serverless database engine, storing the entire database inside a single binary file on disk, making it the world’s most deployed database across mobile apps, desktop software, and edge devices.',
          km: 'ទោះបីជា SQL ជាភាសាស្តង់ដារ ANSI/ISO ក៏ដោយ ប៉ុន្តែប្រព័ន្ធ RDBMS ផ្សេងៗគ្នាមានលក្ខណៈពិសេសរៀងៗខ្លួន។ PostgreSQL ត្រូវបានគេស្គាល់ថាជាដាតាបេស enterprise open-source ដែលមានសមត្ថភាពខ្ពស់បំផុត គាំទ្រ JSONB, PostGIS និង Query សមុគ្រស្មាញ។ MySQL ត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយលើវេបសាយធំៗទូទាំងពិភពលោក ដោយសារល្បឿន Read លឿន និងភាពងាយស្រួលក្នុងការធ្វើ Replication។ SQLite គឺជា Embedded Serverless Database ដែលរក្សាទុកទិន្នន័យក្នុង File តែមួយលើ Disk ដែលត្រូវប្រើប្រាស់ច្រើនជាងគេលើ Mobile Apps (iOS/Android) និង Edge Devices។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Server RDBMS Architecture (PostgreSQL/MySQL) vs Embedded RDBMS (SQLite)',
            km: 'ស្ថាបត្យកម្ម Server RDBMS (PostgreSQL/MySQL) ប្រៀបធៀបនឹង Embedded RDBMS (SQLite)',
          },
          svgData: {
            nodes: [
              { id: 'server_db', label: 'Client-Server (PostgreSQL/MySQL)', subtext: 'TCP Network Connection to Port 5432/3306', x: 100, y: 100, type: 'primary' },
              { id: 'embedded_db', label: 'Embedded (SQLite)', subtext: 'Direct File I/O inside App Process Memory', x: 360, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### Selecting the Right RDBMS:

1. **PostgreSQL**: Complex analytics, geospatial data, JSON document queries, strict standard compliance.
2. **MySQL / MariaDB**: Web platforms, WordPress, high read-heavy traffic applications.
3. **SQLite**: Mobile applications (Flutter/iOS/Android), local desktop tools, test suites, CLI tools.

Let's test standard SQL syntax compatible across all three engines:`,
          km: `### ការជ្រើសរើស RDBMS ឱ្យត្រូវនឹងតម្រូវការ៖

១. **PostgreSQL**៖ ការវិភាគទិន្នន័យស្មុគស្មាញ, ទិន្នន័យភូមិសាស្ត្រ (GIS), ប្រព័ន្ធ Enterprise។
២. **MySQL / MariaDB**៖ Web Applications, WordPress, ប្រព័ន្ធដែលមានការ Read ច្រើន។
៣. **SQLite**៖ កម្មវិធីទូរស័ព្ទ (Flutter/iOS/Android), កម្មវិធី Desktop, និងការ Test កូដ។`,
        },
        codeExample: {
          title: {
            en: 'Portable ANSI SQL Standard Query',
            km: 'បញ្ជា ANSI SQL ស្តង់ដារដែលអាចដំណើការលើគ្រប់ DBMS',
          },
          description: {
            en: 'Standard SQL syntax supported natively by PostgreSQL, MySQL, and SQLite.',
            km: 'ទម្រង់ SQL ស្តង់ដារដែលគាំទ្រលើ PostgreSQL, MySQL, និង SQLite។',
          },
          code: `SELECT 
  'PostgreSQL / MySQL / SQLite' AS engine_support,
  CURRENT_DATE AS today_date;`,
        },
        outputPreview: {
          columns: ['engine_support', 'today_date'],
          rows: [
            ['PostgreSQL / MySQL / SQLite', '2026-08-03']
          ],
          explanation: {
            en: 'Standard SQL functions run identically across all compliant SQL database engines.',
            km: 'បញ្ជា SQL ស្តង់ដារដំណើការដូចគ្នាបេះបិទលើគ្រប់ម៉ាស៊ីន RDBMS។',
          }
        },
        tryItYourself: {
          starterCode: `SELECT 10 * 5 AS product_result, 'DBMS Standard SQL' AS note;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Basic calculations and string output are portable across all SQL databases.', km: 'ការគណនាមូលដ្ឋាន និងអត្ថបទអាចដំណើការបានលើគ្រប់ដាតាបេស SQL។' }
          ]
        },
        quiz: [
          {
            id: 'm1-l6-q1',
            question: {
              en: 'Which architecture best describes SQLite compared to PostgreSQL?',
              km: 'តើស្ថាបត្យកម្មមួយណាដែលពិពណ៌នាអំពី SQLite បានត្រឹមត្រូវបំផុតប្រៀបធៀបនឹង PostgreSQL?',
            },
            options: [
              { id: 'opt1', text: { en: 'SQLite is an embedded, serverless single-file database running inside application process memory', km: 'SQLite ជា Embedded Serverless Database រក្សាទុកក្នុង File តែមួយក្នុង Memory របស់ App' }, isCorrect: true },
              { id: 'opt2', text: { en: 'SQLite requires a background server daemon listening on network port 5432', km: 'SQLite ត្រូវការ Server រត់ក្នុង Background លើ Port 5432' }, isCorrect: false },
              { id: 'opt3', text: { en: 'SQLite cannot execute SQL SELECT queries', km: 'SQLite មិនអាចដំណើការបញ្ជា SELECT បានឡើយ' }, isCorrect: false }
            ],
            explanation: {
              en: 'SQLite is an embedded library compiled directly into applications, requiring no separate server daemon.',
              km: 'SQLite គឺជា Library ដែលបញ្ចូនផ្ទាល់ក្នុង App ដោយមិនបាច់មាន Server ដាច់ដោយឡែកឡើយ។',
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-2',
    moduleNumber: 2,
    title: {
      en: 'Module 2: SQL Basics — Querying Data',
      km: 'មូឌុលទី ២៖ មូលដ្ឋានគ្រឹះ SQL — ការស្វែងរក និងទាញយកទិន្នន័យ',
    },
    description: {
      en: 'Mastering the SELECT statement, filtering with WHERE, sorting with ORDER BY, and limiting query output.',
      km: 'ស្ទាត់ជំនាញលើបញ្ជា SELECT, ការចោះទិន្នន័យជាមួយ WHERE, ការរៀបលំដាប់ជាមួយ ORDER BY និង LIMIT/OFFSET។',
    },
    lessons: [
      {
        id: 'm2-l1',
        moduleId: 'module-2',
        moduleNumber: 2,
        lessonNumber: 1,
        title: {
          en: 'SELECT Statement Fundamentals',
          km: 'មូលដ្ឋានគ្រឹះនៃបញ្ជា SELECT',
        },
        durationMinutes: 20,
        difficulty: 'Beginner',
        description: {
          en: 'Writing your first SQL queries to retrieve specific columns or entire rows from database tables.',
          km: 'ការសរសេរ query ដំបូងដើម្បីទាញយកជួរឈរជាក់លាក់ ឬជួរដេកទាំងអស់ចេញពីតារាងដាតាបេស។',
        },
        explanation: {
          en: 'The SELECT statement is the foundational data query command in Structured Query Language (SQL). It instructs the database engine to retrieve data from one or more tables and project specific attributes into a result set. When querying database tables, software engineers should explicitly specify column names rather than using the wildcard asterisk (SELECT *), as explicit projection minimizes network bandwidth, leverages index coverage, and prevents breaking application code if table schemas change later. Understanding how the query optimizer evaluates projection clauses lays the groundwork for high-performance SQL development.',
          km: 'បញ្ជា SELECT គឺជាបញ្ជាគ្រឹះដំបូងគេ និងសំខាន់បំផុតក្នុងភាសា SQL សម្រាប់ទាញយកទិន្នន័យចេញពីតារាង។ វាប្រាប់ម៉ាស៊ីនដាតាបេសឱ្យជ្រើសរើសជួរឈរដែលយើងត្រូវការ ហើយបង្ហាញចេញជាតារាងលទ្ធផល (Result Set)។ អ្នកជំនាញសូហ្វវែរគួរតែសរសេរឈ្មោះជួរឈរឱ្យច្បាស់លាស់ (ឧ. SELECT id, name) ជំនួសឱ្យការប្រើប្រាស់សញ្ញាផ្កាយ (SELECT *) ព្រោះការសរសេរច្បាស់លាស់ជួយកាត់បន្ថយការប្រៀបប្រកួត Bandwidth បង្កើនល្បឿន Query និងការពារកុំឱ្យមាន Error នៅពេលតារាងត្រូវបន្ថែមជួរឈរថ្មី។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'SELECT Projection: Filtering columns from raw stored table rows',
            km: 'SELECT Projection៖ ការជ្រើសរើសតែជួរឈរដែលត្រូវការចេញពីតារាងដើម',
          },
          svgData: {
            nodes: [
              { id: 'table', label: 'Raw Table (10 Columns)', subtext: 'id, name, email, phone, address...', x: 80, y: 100, type: 'primary' },
              { id: 'select', label: 'SELECT name, email', subtext: 'Column Projection', x: 280, y: 100, type: 'secondary' },
              { id: 'result', label: 'Result Set (2 Columns)', subtext: 'Optimized Lightweight Payload', x: 480, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'table', to: 'select' },
              { from: 'select', to: 'result' }
            ]
          }
        },
        tutorial: {
          en: `### Syntax Breakdown:
\`\`\`sql
SELECT column1, column2 FROM table_name;
\`\`\`

- **SELECT**: Declares which columns to project in the output.
- **FROM**: Specifies the source table storing the records.

Let's write a query retrieving student names and emails:`,
          km: `### ទម្រង់កូដសំខាន់៖
\`\`\`sql
SELECT column1, column2 FROM table_name;
\`\`\`

- **SELECT**៖ កំណត់ជួរឈរដែលចង់បង្ហាញក្នុងលទ្ធផល។
- **FROM**៖ បញ្ជាក់ឈ្មោះតារាងដែលរក្សាទុកទិន្នន័យ។`,
        },
        codeExample: {
          title: {
            en: 'Projecting Specific Columns',
            km: 'ការជ្រើសរើសទាញយកតែជួរឈរដែលត្រូវការ',
          },
          description: {
            en: 'Retrieving user name and role from the system accounts table.',
            km: 'ទាញយកតែឈ្មោះ និងតួនាទីរបស់អ្នកប្រើប្រាស់ចេញពីតារាង។',
          },
          code: `SELECT full_name, email_address, user_role FROM sys_users;`,
        },
        outputPreview: {
          columns: ['full_name', 'email_address', 'user_role'],
          rows: [
            ['Sophea Sok', 'sophea@sabaycode.com', 'Instructor'],
            ['Dara Ly', 'dara@sabaycode.com', 'Student'],
            ['Bopha Vonn', 'bopha@sabaycode.com', 'Admin']
          ],
          explanation: {
            en: 'The output table reflects only the 3 columns explicitly named in the SELECT list.',
            km: 'តារាងលទ្ធផលបង្ហាញតែជួរឈរ ៣ ដែលបានប្រកាសក្នុងបញ្ជា SELECT ប៉ុណ្ណោះ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE products (id INT, title TEXT, price NUMERIC);
INSERT INTO products VALUES (1, 'MacBook Pro', 1200), (2, 'Keychron Keyboard', 85);

SELECT title, price FROM products;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Only title and price columns will be returned in the output.', km: 'មានតែជួរឈរ title និង price ប៉ុណ្ណោះដែលត្រូវបានបង្វិលមកវិញ។' }
          ]
        },
        quiz: [
          {
            id: 'm2-l1-q1',
            question: {
              en: 'Why is specifying explicit column names preferred over "SELECT *" in production code?',
              km: 'ហេតុអ្វីបានជាការសរសេរឈ្មោះជួរឈរច្បាស់លាស់ ប្រសើរជាងការប្រើ "SELECT *" ក្នុងកូដផលិតកម្ម?',
            },
            options: [
              { id: 'opt1', text: { en: 'Reduces network data overhead and prevents schema coupling bugs', km: 'កាត់បន្ថយ Bandwidth ទិន្នន័យ និងការពារ Error ពេល Schema ផ្លាស់ប្តូរ' }, isCorrect: true },
              { id: 'opt2', text: { en: 'SELECT * deletes data automatically after 10 seconds', km: 'SELECT * លុបទិន្នន័យស្វ័យប្រវត្តិបន្ទាប់ពី ១០វិនាទី' }, isCorrect: false },
              { id: 'opt3', text: { en: 'Explicit column names turn off database security', km: 'ការសរសេរឈ្មោះជួរឈរបិទសុវត្ថិភាពដាតាបេស' }, isCorrect: false }
            ],
            explanation: {
              en: 'Explicit column projections keep query payloads lightweight and protect applications from breaking when new columns are added.',
              km: 'ការសរសេរឈ្មោះជួរឈរច្បាស់លាស់ធ្វើឱ្យទិន្នន័យលទ្ធផលស្រាល និងការពារមិនឱ្យ App មានបញ្ហាពេលតារាងបន្ថែមជួរឈរថ្មី។',
            }
          }
        ]
      },
      {
        id: 'm2-l2',
        moduleId: 'module-2',
        moduleNumber: 2,
        lessonNumber: 2,
        title: {
          en: 'Filtering Rows with the WHERE Clause',
          km: 'ការចោះ ឬចម្រោះទិន្នន័យជាមួយបញ្ជា WHERE',
        },
        durationMinutes: 25,
        difficulty: 'Beginner',
        description: {
          en: 'Filtering table records based on exact conditions, numerical ranges, and comparison operators.',
          km: 'ការចម្រោះយកជួរដេកក្នុងតារាង ដោយផ្អែកលើលក្ខខណ្ឌជាក់លាក់ ប្រមាណវិធីប្រៀបធៀប និងកម្រិតតួលេខ។',
        },
        explanation: {
          en: 'The WHERE clause evaluates conditional expressions for every row in a table, filtering out records that do not evaluate to TRUE. Comparison operators include equality (=), inequality (!= or <>), greater than (>), less than (<), and range bounds. When a WHERE clause is executed, the database query planner checks whether an index exists on the filtered column; if present, it utilizes a fast index scan to locate matching rows instantly without reading every block on disk. Filtering early at the database level rather than inside application code dramatically optimizes backend CPU usage and response time.',
          km: 'បញ្ជា WHERE ត្រូវបានប្រើប្រាស់ដើម្បីពិនិត្យលក្ខខណ្ឌលើរាល់ជួរដេកទាំងអស់ក្នុងតារាង ដោយបង្វិលមកវិញតែជួរដេកណាដែលផ្ទៀងផ្ទាត់ត្រូវ (TRUE) ប៉ុណ្ណោះ។ យើងអាចប្រើប្រាស់ប្រមាណវិធីប្រៀបធៀបដូចជា ស្មើ (=), មិនស្មើ (!= ឬ <>), ធំជាង (>), តូចជាង (<) ជាដើម។ នៅពេល Query ដំណើការ ម៉ាស៊ីនដាតាបេសនឹងស្វែងរក Index លើជួរឈរនោះ ដើម្បីទាញយកទិន្នន័យបានលឿនបំផុត។ ការចម្រោះទិន្នន័យនៅកម្រិតដាតាបេស ជួយឱ្យប្រព័ន្ធ Backend រត់បានលឿន និងមិនចំណាយ Memory ដោយអត់ប្រយោជន៍។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'WHERE Clause execution filtering out invalid records before returning result set',
            km: 'បញ្ជា WHERE ចម្រោះចោលកំណត់ត្រាដែលមិនត្រូវលក្ខខណ្ឌ មុនពេលបង្វិលលទ្ធផល',
          },
          svgData: {
            nodes: [
              { id: 'all_rows', label: 'All Table Rows (10,000)', subtext: 'Unfiltered Disk Pages', x: 80, y: 100, type: 'primary' },
              { id: 'filter', label: 'WHERE price > 500', subtext: 'Boolean Evaluation', x: 280, y: 100, type: 'warning' },
              { id: 'matched', label: 'Filtered Rows (250)', subtext: 'Returned to Application', x: 480, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### Common Comparison Operators:
- \`=\` : Equals
- \`!=\` or \`<>\` : Not Equal
- \`>\` / \`>=\` : Greater than / Greater than or equal
- \`<\` / \`<=\` : Less than / Less than or equal

Let's query products priced over $500:`,
          km: `### ប្រមាណវិធីប្រៀបធៀបទូទៅ៖
- \`=\` ៖ ស្មើ
- \`!=\` ឬ \`<>\` ៖ មិនស្មើ
- \`>\` / \`>=\` ៖ ធំជាង / ធំជាង ឬស្មើ
- \`<\` / \`<=\` ៖ តូចជាង / តូចជាង ឬស្មើ`,
        },
        codeExample: {
          title: {
            en: 'Filtering Products by Price Threshold',
            km: 'ការចម្រោះទំនិញតាមកម្រិតតម្លៃ',
          },
          description: {
            en: 'Retrieving active products with unit price exceeding 100.',
            km: 'ទាញយកទំនិញដែលមានតម្លៃលើសពី ១០០ ដុល្លារ។',
          },
          code: `SELECT product_name, unit_price, stock_quantity 
FROM inventory 
WHERE unit_price > 100.00;`,
        },
        outputPreview: {
          columns: ['product_name', 'unit_price', 'stock_quantity'],
          rows: [
            ['UltraWide Monitor 34"', 450.00, 12],
            ['Mechanical Ergonomic Keyboard', 129.99, 45]
          ],
          explanation: {
            en: 'Only records satisfying unit_price > 100.00 are included in the returned table.',
            km: 'មានតែទំនិញណាដែលមាន unit_price លើសពី ១០០.០០ ប៉ុណ្ណោះដែលត្រូវបានបង្ហាញ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE users (id INT, name TEXT, age INT);
INSERT INTO users VALUES (1, 'Vanna', 25), (2, 'Kosal', 17), (3, 'Chantra', 30);

SELECT name, age FROM users WHERE age >= 18;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'WHERE age >= 18 excludes Kosal (age 17).', km: 'WHERE age >= 18 នឹងចម្រោះ Kosal (អាយុ ១៧) ចោល។' }
          ]
        },
        quiz: [
          {
            id: 'm2-l2-q1',
            question: {
              en: 'Which operator is used in SQL to check for inequality?',
              km: 'តើប្រមាណវិធីមួយណាដែលប្រើប្រាស់ក្នុង SQL ដើម្បផ្ទៀងផ្ទាត់ភាព "មិនស្មើ"?',
            },
            options: [
              { id: 'opt1', text: { en: '!= or <>', km: '!= ឬ <>' }, isCorrect: true },
              { id: 'opt2', text: { en: '==', km: '==' }, isCorrect: false },
              { id: 'opt3', text: { en: '===', km: '===' }, isCorrect: false }
            ],
            explanation: {
              en: 'In SQL, inequality can be written as either != or <>. Standard double-equals (==) is not valid SQL.',
              km: 'ក្នុង SQL ភាពមិនស្មើអាចសរសេរជា != ឬ <>។',
            }
          }
        ]
      },
      {
        id: 'm2-l3',
        moduleId: 'module-2',
        moduleNumber: 2,
        lessonNumber: 3,
        title: {
          en: 'Sorting Results with ORDER BY',
          km: 'ការរៀបលំដាប់ទិន្នន័យជាមួយ ORDER BY (ASC / DESC)',
        },
        durationMinutes: 20,
        difficulty: 'Beginner',
        description: {
          en: 'Sorting query outputs alphabetically, numerically, or by date in ascending or descending order.',
          km: 'ការតម្រៀបលទ្ធផល query តាមលំដាប់អក្សរ តួលេខ ឬកាលបរិច្ឆេទ ឡើងលើ (ASC) ឬចុះក្រោម (DESC)។',
        },
        explanation: {
          en: 'In relational database theory, tables are unordered sets of tuples. Unless an explicit ORDER BY clause is attached to a query, the order in which rows are returned by the database engine is non-deterministic and can vary based on disk page layouts or parallel scan plans. The ORDER BY clause specifies one or more sort key columns, along with direction modifiers: ASC (Ascending, default) or DESC (Descending). Multiple sort columns can be chained together (e.g., ORDER BY department ASC, salary DESC) to establish secondary tie-breaking logic.',
          km: 'នៅក្នុងទ្រឹស្តី Relational ដាតាបេស តារាងមិនមានលំដាប់ជួរដេកថេរឡើយ។ ប្រសិនបើយើងមិនសរសេរ ORDER BY ទេ ម៉ាស៊ីនដាតាបេសអាចបង្វិលជួរដេកមកតាមអំពើចិត្ត។ បញ្ជា ORDER BY ត្រូវបានប្រើប្រាស់ដើម្បីរៀបលំដាប់លទ្ធផលតាមជួរឈរមួយឬច្រើន ដោយប្រើ ASC (ឡើងលើ ពីតូចទៅធំ/ពី A-Z) ឬ DESC (ចុះក្រោម ពីធំទៅតូច/ពី Z-A)។ យើងក៏អាចរៀបលំដាប់តាមជួរឈរច្រើនក្នុងពេលតែមួយបានផងដែរ (ឧ. ORDER BY department ASC, salary DESC)។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'ORDER BY Sorting Pipeline: Unsorted input tuples mapped into sorted result sequence',
            km: 'ដំណើរការរៀបលំដាប់ ORDER BY៖ រៀបចំជួរដេកពីគ្មានលំដាប់ ឱ្យទៅជាលំដាប់ត្រឹមត្រូវ',
          },
          svgData: {
            nodes: [
              { id: 'unsorted', label: 'Unsorted Rows', subtext: '[45, 12, 89, 5]', x: 80, y: 100, type: 'primary' },
              { id: 'sort', label: 'ORDER BY score DESC', subtext: 'Sorter Node', x: 280, y: 100, type: 'secondary' },
              { id: 'sorted', label: 'Sorted Output', subtext: '[89, 45, 12, 5]', x: 480, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### Syntax Rules:
\`\`\`sql
SELECT column1, column2 
FROM table_name 
ORDER BY column1 DESC, column2 ASC;
\`\`\`

- **ASC**: Ascending order (1 to 9, A to Z, oldest date to newest).
- **DESC**: Descending order (9 to 1, Z to A, newest date to oldest).

Let's sort employees by highest salary first:`,
          km: `### វិធានសរសេរកូដ៖
\`\`\`sql
SELECT column1, column2 
FROM table_name 
ORDER BY column1 DESC, column2 ASC;
\`\`\`

- **ASC**៖ រៀបពីតូចទៅធំ (1-9, A-Z, ចាស់ទៅថ្មី)
- **DESC**៖ រៀបពីធំទៅតូច (9-1, Z-A, ថ្មីទៅចាស់)`,
        },
        codeExample: {
          title: {
            en: 'Sorting High Earners First',
            km: 'ការរៀបលំដាប់បុគ្គលិកដែលមានប្រាក់ខែខ្ពស់ជាងគេមុន',
          },
          description: {
            en: 'Sorting employees by salary descending and full name ascending.',
            km: 'តម្រៀបប្រាក់ខែពីធំទៅតូច ហើយតម្រៀបឈ្មោះតាម A-Z។',
          },
          code: `SELECT full_name, department, salary 
FROM employees 
ORDER BY salary DESC, full_name ASC;`,
        },
        outputPreview: {
          columns: ['full_name', 'department', 'salary'],
          rows: [
            ['Sokha Heng', 'Executive', 3500.00],
            ['Arun Pich', 'Engineering', 2400.00],
            ['Borey Srey', 'Engineering', 2400.00],
            ['Chanthou Keo', 'Marketing', 1200.00]
          ],
          explanation: {
            en: 'Salaries are sorted descending. For employees with tied salaries ($2400), full_name tie-breaks alphabetically.',
            km: 'ប្រាក់ខែត្រូវតម្រៀបពីធំទៅតូច។ សម្រាប់ប្រាក់ខែស្មើគ្នា ($2400) ឈ្មោះត្រូវបានរៀបតាម A-Z។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE scores (student TEXT, points INT);
INSERT INTO scores VALUES ('Dara', 88), ('Sophea', 95), ('Bopha', 78);

SELECT * FROM scores ORDER BY points DESC;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'ORDER BY points DESC places Sophea (95) at the top of the result list.', km: 'ORDER BY points DESC នឹងដាក់ Sophea (95) នៅលើគេបង្អស់។' }
          ]
        },
        quiz: [
          {
            id: 'm2-l3-q1',
            question: {
              en: 'What is the default sort direction if neither ASC nor DESC is specified in ORDER BY?',
              km: 'តើទិសដៅរៀបលំដាប់ Default ជាអ្វី ប្រសិនបើយើងមិនសរសេរ ASC ឬ DESC ក្នុង ORDER BY?',
            },
            options: [
              { id: 'opt1', text: { en: 'ASC (Ascending order)', km: 'ASC (រៀបពីតូចទៅធំ)' }, isCorrect: true },
              { id: 'opt2', text: { en: 'DESC (Descending order)', km: 'DESC (រៀបពីធំទៅតូច)' }, isCorrect: false },
              { id: 'opt3', text: { en: 'Random ordering', km: 'រៀបតាមអំពើចិត្ត' }, isCorrect: false }
            ],
            explanation: {
              en: 'If no direction keyword is provided, SQL defaults to ASC (Ascending).',
              km: 'ប្រសិនបើយើងមិនដាក់ Keyword ទេ SQL នឹងយក ASC ដោយស្វ័យប្រវត្តិ។',
            }
          }
        ]
      },
      {
        id: 'm2-l4',
        moduleId: 'module-2',
        moduleNumber: 2,
        lessonNumber: 4,
        title: {
          en: 'Paging Data with LIMIT & OFFSET',
          km: 'ការធ្វើ Pagination ជាមួយបញ្ជា LIMIT និង OFFSET',
        },
        durationMinutes: 20,
        difficulty: 'Beginner',
        description: {
          en: 'Limiting result row counts and implementing offset pagination for user interfaces.',
          km: 'ការកម្រិតចំនួនជួរដេកលទ្ធផល និងការធ្វើ Pagination សម្រាប់បង្ហាញលើ UI វេបសាយ ឬ App។',
        },
        explanation: {
          en: 'When querying tables containing thousands or millions of records, returning the entire dataset at once consumes excessive memory and crashes web applications. The LIMIT clause restricts the maximum number of rows returned by a query, while OFFSET skips a specified number of leading rows before starting to return results. Together, LIMIT and OFFSET form the core pagination mechanism used by UI components to display discrete pages of data (e.g., Page 1 = LIMIT 10 OFFSET 0, Page 2 = LIMIT 10 OFFSET 10). Always pair LIMIT and OFFSET with an explicit ORDER BY clause to guarantee consistent page windows.',
          km: 'នៅពេលតារាងមានទិន្នន័យរាប់ម៉ឺនជួរ ការទាញយកមកទាំងអស់ក្នុងពេលតែមួយ នឹងធ្វើឱ្យ App ដើរយឺត ឬសាំងចោល។ បញ្ជា LIMIT ត្រូវបានប្រើដើម្បីកម្រិតចំនួនជួរដេកអតិបរមាដែលត្រូវបង្វិលមកវិញ ខណៈ OFFSET ត្រូវបានប្រើដើម្បីរំលងជួរដេកខាងដើម។ ការបូកបញ្ចូលគ្នារវាង LIMIT និង OFFSET គឺជាបច្ចេកទេស Pagination ដែលគេប្រើលើ Frontend (ដូចជា Page 1 = LIMIT 10 OFFSET 0, Page 2 = LIMIT 10 OFFSET 10)។ ត្រូវចាំថាតែងតែប្រើប្រាស់ជាមួយ ORDER BY ដើម្បីឱ្យទិន្នន័យតាមទំព័រនីមួយៗរៀបបានត្រឹមត្រូវ។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'LIMIT and OFFSET window slicing contiguous query pages',
            km: 'ការកាត់ទំព័រទិន្នន័យ (Pagination) ដោយប្រើ LIMIT និង OFFSET',
          },
          svgData: {
            nodes: [
              { id: 'p1', label: 'Page 1 (Rows 1-5)', subtext: 'LIMIT 5 OFFSET 0', x: 80, y: 100, type: 'primary' },
              { id: 'p2', label: 'Page 2 (Rows 6-10)', subtext: 'LIMIT 5 OFFSET 5', x: 280, y: 100, type: 'secondary' },
              { id: 'p3', label: 'Page 3 (Rows 11-15)', subtext: 'LIMIT 5 OFFSET 10', x: 480, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'p1', to: 'p2' },
              { from: 'p2', to: 'p3' }
            ]
          }
        },
        tutorial: {
          en: `### Pagination Formula:
\`\`\`sql
-- Page N with size S
SELECT * FROM table_name 
ORDER BY id ASC 
LIMIT S OFFSET (N - 1) * S;
\`\`\`

Let's fetch Page 2 (3 items per page):`,
          km: `### រូបមន្តគណនា Pagination៖
\`\`\`sql
-- ទំព័រទី N ដោយមានទំហំមួយទំព័រ S
SELECT * FROM table_name 
ORDER BY id ASC 
LIMIT S OFFSET (N - 1) * S;
\`\`\`

តោះទាញយកទិន្នន័យទំព័រទី ២ (បង្ហាញ ៣ ក្នុងមួយទំព័រ)៖`,
        },
        codeExample: {
          title: {
            en: 'Implementing Page 2 Data Fetch',
            km: 'ការទាញយកទិន្នន័យសម្រាប់ទំព័រទី ២',
          },
          description: {
            en: 'Retrieving 3 items starting from the 4th matching row (OFFSET 3).',
            km: 'ទាញយកទិន្នន័យចំនួន ៣ រំលង ៣ ដំបូង (OFFSET 3)។',
          },
          code: `SELECT id, product_name, unit_price 
FROM products 
ORDER BY id ASC 
LIMIT 3 OFFSET 3;`,
        },
        outputPreview: {
          columns: ['id', 'product_name', 'unit_price'],
          rows: [
            [4, 'Wireless Mouse', 25.00],
            [5, 'USB-C Cable 2m', 12.50],
            [6, 'HDMI Adapter', 18.00]
          ],
          explanation: {
            en: 'The query skips IDs 1-3 and returns exactly 3 rows starting from ID 4.',
            km: 'Query រំលង ID 1-3 ហើយបង្ហាញតែ ៣ ជួរដេកបន្ទាប់ (ចាប់ពី ID 4)។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE items (id INT, name TEXT);
INSERT INTO items VALUES (1,'A'),(2,'B'),(3,'C'),(4,'D'),(5,'E');

SELECT * FROM items ORDER BY id ASC LIMIT 2 OFFSET 0;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Changing OFFSET 0 to OFFSET 2 will return items C and D.', km: 'ប្តូរ OFFSET 0 ទៅ OFFSET 2 នឹងបង្វិលមកវិញនូវ C និង D។' }
          ]
        },
        quiz: [
          {
            id: 'm2-l4-q1',
            question: {
              en: 'What offset value should be used for Page 3 if each page displays 10 rows?',
              km: 'តើតម្លៃ OFFSET ប៉ុន្មានដែលត្រូវប្រើសម្រាប់ទំព័រទី ៣ ប្រសិនបើមួយទំព័របង្ហាញ ១០ ជួរដេក?',
            },
            options: [
              { id: 'opt1', text: { en: 'OFFSET 20', km: 'OFFSET 20' }, isCorrect: true },
              { id: 'opt2', text: { en: 'OFFSET 30', km: 'OFFSET 30' }, isCorrect: false },
              { id: 'opt3', text: { en: 'OFFSET 10', km: 'OFFSET 10' }, isCorrect: false }
            ],
            explanation: {
              en: 'Formula: (Page - 1) * Size = (3 - 1) * 10 = 20.',
              km: 'រូបមន្ត៖ (៣ - ១) * ១០ = ២០។',
            }
          }
        ]
      },
      {
        id: 'm2-l5',
        moduleId: 'module-2',
        moduleNumber: 2,
        lessonNumber: 5,
        title: {
          en: 'Handling NULL Values (IS NULL / IS NOT NULL / COALESCE)',
          km: 'ការគ្រប់គ្រងតម្លៃទទេ NULL (IS NULL / IS NOT NULL / COALESCE)',
        },
        durationMinutes: 20,
        difficulty: 'Beginner',
        description: {
          en: 'Understanding three-valued logic in SQL, checking for missing values, and providing fallback defaults.',
          km: 'ការយល់ដឹងអំពី Three-Valued Logic ក្នុង SQL ការត្រួតពិនិត្យតម្លៃទទេ និងការប្រើប្រាស់តម្លៃជំនួស (Default Fallback)។',
        },
        explanation: {
          en: 'In SQL, NULL represents the total absence of a value or unknown data. NULL is not equal to zero (0), nor is it equal to an empty string (""). Because of SQL’s Three-Valued Logic (TRUE, FALSE, UNKNOWN), evaluating expressions like "column = NULL" always yields UNKNOWN, which evaluates as FALSE in WHERE clauses. To filter or test for missing data, developers must use the explicit operators "IS NULL" or "IS NOT NULL". Additionally, the COALESCE() function allows developers to evaluate a list of arguments sequentially and return the first non-null value, providing clean default fallbacks in application UI layers.',
          km: 'នៅក្នុង SQL តម្លៃ NULL តំណាងឱ្យភាពទទេស្អាត ឬគ្មានទិន្នន័យ។ NULL មិនស្មើលេខសូន្យ (0) ហើយក៏មិនស្មើអក្សរទទេ ("") ដែរ។ ដោយសារ SQL ប្រើប្រាស់ Three-Valued Logic ការប្រើប្រាស់ "column = NULL" នឹងបង្វិលលទ្ធផល UNKNOWN ដែលធ្វើឱ្យ Query រត់មិនត្រូវ។ ដើម្បីពិនិត្យតម្លៃ NULL យើងត្រូវតែប្រើបញ្ជាពិសេស "IS NULL" ឬ "IS NOT NULL"។ លើសពីនេះ អនុគមន៍ COALESCE() ត្រូវបានប្រើប្រាស់ដើម្បីផ្តល់តម្លៃជំនួស (Default Value) ដោយស្វ័យប្រវត្តិនៅពេលជួរឈរនោះមានតម្លៃ NULL។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'COALESCE Function returning the first non-null argument in sequence',
            km: 'អនុគមន៍ COALESCE បង្វិលមកវិញនូវតម្លៃដំបូងគេដែលមិនមែនជា NULL',
          },
          svgData: {
            nodes: [
              { id: 'input', label: 'COALESCE(phone, mobile, "N/A")', subtext: 'Evaluation Sequence', x: 80, y: 100, type: 'primary' },
              { id: 'check1', label: 'phone IS NULL', subtext: 'Skip to next', x: 280, y: 100, type: 'warning' },
              { id: 'result', label: 'Returns mobile ("012888999")', subtext: 'First Non-Null Value', x: 480, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'input', to: 'check1' },
              { from: 'check1', to: 'result' }
            ]
          }
        },
        tutorial: {
          en: `### Key Rules for NULLs:
1. **Never use \`=\` with NULL**: Write \`WHERE phone IS NULL\` instead of \`WHERE phone = NULL\`.
2. **COALESCE Function**: \`COALESCE(val1, val2, fallback)\` returns first non-null value.

Let's inspect how COALESCE handles missing contact numbers:`,
          km: `### វិធានសំខាន់សម្រាប់ NULL៖
១. **ហាមប្រើ \`=\` ជាមួយ NULL**៖ ត្រូវសរសេរ \`WHERE phone IS NULL\` ជំនួសឱ្យ \`WHERE phone = NULL\`។
២. **អនុគមន៍ COALESCE**៖ \`COALESCE(val1, val2, fallback)\` បង្វិលតម្លៃដំបូងដែលមិន NULL។`,
        },
        codeExample: {
          title: {
            en: 'Filtering NULLs & Providing Fallbacks with COALESCE',
            km: 'ការចម្រោះតម្លៃ NULL និងការប្រើតម្លៃជំនួស COALESCE',
          },
          description: {
            en: 'Retrieving user contact with COALESCE fallback for missing phone numbers.',
            km: 'ទាញយកលេខទូរស័ព្ទ ដោយប្រើអត្ថបទជំនួសប្រសិនបើគ្មានលេខទូរស័ព្ទ។',
          },
          code: `SELECT 
  full_name,
  COALESCE(phone_number, 'No Phone Provided') AS contact_phone
FROM customers
WHERE email_address IS NOT NULL;`,
        },
        outputPreview: {
          columns: ['full_name', 'contact_phone'],
          rows: [
            ['Dara Sok', '012 888 999'],
            ['Bopha Chan', 'No Phone Provided']
          ],
          explanation: {
            en: 'For Bopha Chan whose phone_number was NULL, COALESCE seamlessly substituted "No Phone Provided".',
            km: 'សម្រាប់ Bopha Chan ដែលគ្មានលេខទូរស័ព្ទ (NULL) អនុគមន៍ COALESCE បានជំនួសដោយ "No Phone Provided"។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE test_null (id INT, val TEXT);
INSERT INTO test_null VALUES (1, 'Hello'), (2, NULL);

SELECT id, COALESCE(val, 'DEFAULT_TEXT') AS result FROM test_null;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Row 2 returns DEFAULT_TEXT because val is NULL.', km: 'ជួរដេកទី ២ បង្វិល DEFAULT_TEXT ព្រោះ val មានតម្លៃ NULL។' }
          ]
        },
        quiz: [
          {
            id: 'm2-l5-q1',
            question: {
              en: 'Which SQL predicate correctly checks if a column contains a missing NULL value?',
              km: 'តើបញ្ជា SQL មួយណាដែលត្រឹមត្រូវសម្រាប់ពិនិត្យមើលថាតើជួរឈរមានតម្លៃ NULL ឬទេ?',
            },
            options: [
              { id: 'opt1', text: { en: 'WHERE column_name IS NULL', km: 'WHERE column_name IS NULL' }, isCorrect: true },
              { id: 'opt2', text: { en: 'WHERE column_name = NULL', km: 'WHERE column_name = NULL' }, isCorrect: false },
              { id: 'opt3', text: { en: 'WHERE column_name == "NULL"', km: 'WHERE column_name == "NULL"' }, isCorrect: false }
            ],
            explanation: {
              en: 'SQL mandates using the IS NULL predicate because equality comparison (= NULL) evaluates to UNKNOWN.',
              km: 'SQL តម្រូវឱ្យប្រើបញ្ជា IS NULL ព្រោះការប្រើប្រាស់ = NULL បង្វិលតម្លៃ UNKNOWN។',
            }
          }
        ]
      },
      {
        id: 'm2-l6',
        moduleId: 'module-2',
        moduleNumber: 2,
        lessonNumber: 6,
        title: {
          en: 'Column & Table Aliasing with AS',
          km: 'ការកំណត់ឈ្មោះបណ្តោះអាសន្ន (Aliasing) ជាមួយ AS',
        },
        durationMinutes: 15,
        difficulty: 'Beginner',
        description: {
          en: 'Renaming output columns and abbreviating table names for clean readable SQL queries.',
          km: 'ការប្តូរឈ្មោះជួរឈរលទ្ធផល និងការកាត់ឈ្មោះតារាងឱ្យខ្លី ដើម្បីងាយស្រួលអានកូដ SQL។',
        },
        explanation: {
          en: 'Aliasing using the AS keyword gives a temporary descriptive name to a column or table within the context of a single query execution. Column aliases improve result set clarity, especially when projecting calculated expressions, aggregate values, or concatenations (e.g., SELECT first_name || \' \' || last_name AS full_name). Table aliases abbreviate long table names (e.g., FROM ecommerce_customer_orders AS o), making multi-table joins significantly cleaner and easier to maintain.',
          km: 'ការប្រើប្រាស់ Keyword "AS" ត្រូវបានប្រើដើម្បីផ្តល់ឈ្មោះបណ្តោះអាសន្នដល់ជួរឈរ ឬតារាងក្នុង Query នោះ។ Column Alias ជួយឱ្យតារាងលទ្ធផលងាយយល់ ជាពិសេសពេលយើងធ្វើការគណនា ឬបូកភ្ជាប់អក្សរចូលគ្នា (ឧ. SELECT first_name || \' \' || last_name AS full_name)។ Table Alias ជួយបង្រួមឈ្មោះតារាងវែងៗឱ្យនៅខ្លី ធ្វើឱ្យការសរសេរ JOIN ច្រើនតារាងមានរបៀបរៀបរយ និងងាយស្រួលសរសេរ។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'Column Aliasing renaming raw database expressions into readable UI titles',
            km: 'Column Aliasing ប្តូរឈ្មោះកន្សោមគណនាស្មុគស្មាញ ឱ្យទៅជាឈ្មោះលទ្ធផលច្បាស់លាស់',
          },
          svgData: {
            nodes: [
              { id: 'raw', label: 'unit_price * 1.10', subtext: 'Unfriendly Raw Calculation', x: 80, y: 100, type: 'primary' },
              { id: 'alias', label: 'AS price_with_tax', subtext: 'Alias Renaming', x: 280, y: 100, type: 'secondary' },
              { id: 'ui', label: 'Column Header: "price_with_tax"', subtext: 'Clean Result Projection', x: 480, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### Column and Table Alias Examples:
\`\`\`sql
-- Column Alias
SELECT first_name || ' ' || last_name AS full_name FROM staff;

-- Table Alias
SELECT s.first_name, s.email FROM staff AS s;
\`\`\`

Let's test aliasing calculated price values:`,
          km: `### ឧទាហរណ៍នៃការប្រើប្រាស់ Alias៖
\`\`\`sql
-- Column Alias
SELECT first_name || ' ' || last_name AS full_name FROM staff;

-- Table Alias
SELECT s.first_name, s.email FROM staff AS s;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Applying Column & Table Aliases',
            km: 'ការអនុវត្ត Column និង Table Aliases ក្នុង Query',
          },
          description: {
            en: 'Renaming calculated column and shortening table name.',
            km: 'ការប្តូរឈ្មោះជួរឈរគណនា និងការកាត់ឈ្មោះតារាង។',
          },
          code: `SELECT 
  p.product_name AS item_title,
  p.unit_price AS base_price,
  p.unit_price * 0.90 AS discounted_price
FROM products AS p;`,
        },
        outputPreview: {
          columns: ['item_title', 'base_price', 'discounted_price'],
          rows: [
            ['Gaming Laptop', 1000.00, 900.00],
            ['Wireless Headset', 80.00, 72.00]
          ],
          explanation: {
            en: 'The returned column headers reflect the clean aliases declared with AS.',
            km: 'ឈ្មោះជួរឈរនៃតារាងលទ្ធផលបង្ហាញតាមឈ្មោះ Alias ដែលបានកំណត់ជាមួយ AS។',
          }
        },
        tryItYourself: {
          starterCode: `SELECT 'Dara' AS first_name, 'Sok' AS last_name;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Aliasing literal values returns custom column header names.', km: 'ការប្រើ Alias លើតម្លៃផ្ទាល់ នឹងបង្វិលឈ្មោះជួរឈរតាមការកំណត់។' }
          ]
        },
        quiz: [
          {
            id: 'm2-l6-q1',
            question: {
              en: 'Does an AS alias permanently rename the column inside the database table on disk?',
              km: 'តើការប្រើ AS Alias ប្តូរឈ្មោះជួរឈរក្នុងតារាងលើ Disk ជាអចិន្ត្រៃយ៍ឬទេ?',
            },
            options: [
              { id: 'opt1', text: { en: 'No, an alias is temporary and only affects the returned query result set', km: 'ទេ Alias គ្រាន់តែជាឈ្មោះបណ្តោះអាសន្នសម្រាប់តែលទ្ធផល query ប៉ុណ្ណោះ' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Yes, it permanently alters the table schema definition', km: 'បាទ/ចាស វាផ្លាស់ប្តូរ Schema តារាងជាអចិន្ត្រៃយ៍' }, isCorrect: false }
            ],
            explanation: {
              en: 'Aliases are purely virtual projection renames for the scope of the single query.',
              km: 'Alias គ្រាន់តែជាការប្តូរឈ្មោះបង្ហាញបណ្តោះអាសន្នសម្រាប់តែ Query នោះប៉ុណ្ណោះ។',
            }
          }
        ]
      },
      {
        id: 'm2-l7',
        moduleId: 'module-2',
        moduleNumber: 2,
        lessonNumber: 7,
        title: {
          en: 'String, Numeric, & Date Functions',
          km: 'អនុគមន៍អត្ថបទ តួលេខ និងកាលបរិច្ឆេទ (String, Numeric, Date Functions)',
        },
        durationMinutes: 25,
        difficulty: 'Beginner',
        description: {
          en: 'Transforming text with UPPER/LOWER/CONCAT, rounding numbers, and calculating date intervals.',
          km: 'ការបំប្លែងអត្ថបទជាមួយ UPPER/LOWER/CONCAT ការបង្គត់តួលេខ និងការគណនាចន្លោះពេលកាលបរិច្ឆេទ។',
        },
        explanation: {
          en: 'SQL engines come equipped with powerful built-in scalar functions to manipulate scalar data types directly within queries. String functions like UPPER(), LOWER(), TRIM(), and LENGTH() format text data for standardized comparisons. Numeric functions like ROUND(), CEIL(), and ABS() perform mathematical calculations on numbers. Date and time functions like NOW(), EXTRACT(), and DATE_TRUNC() process temporal values, enabling developers to compute user ages, subscription expiration dates, and time differences directly on the database engine before serving data to APIs.',
          km: 'ម៉ាស៊ីន SQL មានបំពាក់នូវ Scalar Functions ជាច្រើនសម្រាប់កែច្នៃទិន្នន័យក្នុង Query ស្រាប់។ អនុគមន៍អត្ថបទដូចជា UPPER(), LOWER(), TRIM(), និង LENGTH() ប្រើសម្រាប់តម្រឹមអក្សរ។ អនុគមន៍តួលេខដូចជា ROUND(), CEIL(), ABS() ប្រើសម្រាប់គណនាគណិតវិទ្យាលើលេខ។ អនុគមន៍កាលបរិច្ឆេទដូចជា NOW(), EXTRACT(), DATE_TRUNC() ប្រើសម្រាប់គណនាអាយុ, ថ្ងៃផុតកំណត់, ឬចន្លោះពេល មុនពេលបញ្ជូនទៅកាន់ API។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'Scalar Built-in SQL Functions processing raw table values into transformed scalar outputs',
            km: 'អនុគមន៍ Scalar SQL កែច្នៃតម្លៃដើមក្នុងតារាង ឱ្យទៅជាទម្រង់ថ្មីស្អាត',
          },
          svgData: {
            nodes: [
              { id: 'raw', label: 'Raw String: "   sok dara  "', subtext: 'Unformatted Input', x: 80, y: 100, type: 'primary' },
              { id: 'func', label: 'UPPER(TRIM(name))', subtext: 'Scalar Function Pipeline', x: 280, y: 100, type: 'secondary' },
              { id: 'out', label: 'Transformed Output: "SOK DARA"', subtext: 'Cleaned Output', x: 480, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### Common Built-In Functions:
- **String**: \`UPPER(str)\`, \`LOWER(str)\`, \`LENGTH(str)\`, \`TRIM(str)\`
- **Numeric**: \`ROUND(val, decimals)\`, \`ABS(val)\`, \`CEIL(val)\`
- **Date**: \`CURRENT_DATE\`, \`EXTRACT(YEAR FROM date)\`

Let's test these scalar functions in SQL:`,
          km: `### អនុគមន៍ទូទៅដែលត្រូវចងចាំ៖
- **អត្ថបទ**៖ \`UPPER(str)\`, \`LOWER(str)\`, \`LENGTH(str)\`, \`TRIM(str)\`
- **តួលេខ**៖ \`ROUND(val, decimals)\`, \`ABS(val)\`, \`CEIL(val)\`
- **កាលបរិច្ឆេទ**៖ \`CURRENT_DATE\`, \`EXTRACT(YEAR FROM date)\``,
        },
        codeExample: {
          title: {
            en: 'Formatting Text & Rounding Values',
            km: 'ការតម្រឹមអត្ថបទ និងការបង្គត់តួលេខ',
          },
          description: {
            en: 'Applying UPPER, LENGTH, and ROUND functions in projection list.',
            km: 'ការប្រើប្រាស់ UPPER, LENGTH, និង ROUND លើជួរឈរ។',
          },
          code: `SELECT 
  UPPER(product_name) AS upper_title,
  LENGTH(product_name) AS title_char_length,
  ROUND(unit_price, 1) AS rounded_price
FROM products;`,
        },
        outputPreview: {
          columns: ['upper_title', 'title_char_length', 'rounded_price'],
          rows: [
            ['MACBOOK PRO 16"', 15, 2499.50],
            ['WIRELESS MOUSE', 14, 25.00]
          ],
          explanation: {
            en: 'The values in each row are dynamically transformed by string and rounding functions.',
            km: 'តម្លៃក្នុងជួរដេកនីមួយៗត្រូវបានបំប្លែងដោយស្វ័យប្រវត្តិតាមរយៈអនុគមន៍អត្ថបទ និងការបង្គត់លេខ។',
          }
        },
        tryItYourself: {
          starterCode: `SELECT 
  UPPER('sabaycode cambodia') AS brand,
  ROUND(88.567, 2) AS formatted_score;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'UPPER transforms string to uppercase; ROUND(val, 2) rounds to 2 decimal places.', km: 'UPPER ប្តូរជាអក្សរធំ ហើយ ROUND(val, 2) បង្គត់យកក្បៀស ២ ខ្ទង់។' }
          ]
        },
        quiz: [
          {
            id: 'm2-l7-q1',
            question: {
              en: 'Which SQL function rounds a numeric value to a specified number of decimal places?',
              km: 'តើអនុគមន៍ SQL មួយណាដែលបង្គត់តួលេខទៅតាមចំនួនខ្ទង់ក្បៀសដែលបានកំណត់?',
            },
            options: [
              { id: 'opt1', text: { en: 'ROUND()', km: 'ROUND()' }, isCorrect: true },
              { id: 'opt2', text: { en: 'TRUNC()', km: 'TRUNC()' }, isCorrect: false },
              { id: 'opt3', text: { en: 'LENGTH()', km: 'LENGTH()' }, isCorrect: false }
            ],
            explanation: {
              en: 'The ROUND(numeric_expression, decimals) function rounds values to the specified decimal precision.',
              km: 'អនុគមន៍ ROUND(numeric_expression, decimals) បង្គត់តួលេខតាមខ្ទង់ក្បៀសដែលចង់បាន។',
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-3',
    moduleNumber: 3,
    title: {
      en: 'Module 3: Filtering & Aggregating Data',
      km: 'មូឌុលទី ៣៖ ការបូកសរុប និងការចម្រោះទិន្នន័យស្មុគស្មាញ (Aggregation & Filtering)',
    },
    description: {
      en: 'Mastering logical operators, aggregate functions (COUNT, SUM, AVG), GROUP BY, and HAVING filtering.',
      km: 'ស្ទាត់ជំនាញលើ Logical Operators, អនុគមន៍បូកសរុប (COUNT, SUM, AVG), GROUP BY, និងបញ្ជា HAVING។',
    },
    lessons: [
      {
        id: 'm3-l1',
        moduleId: 'module-3',
        moduleNumber: 3,
        lessonNumber: 1,
        title: {
          en: 'Logical Operators (AND, OR, NOT, IN, BETWEEN, LIKE)',
          km: 'ប្រមាណវិធីតក្កវិជ្ជា (AND, OR, NOT, IN, BETWEEN, LIKE)',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Combining multi-column condition predicates with logical operators and wildcard pattern matching.',
          km: 'ការបូកបញ្ចូលលក្ខខណ្ឌច្រើនជួរឈរជាមួយ Logical Operators និងការស្វែងរកអត្ថបទតាមទម្រង់ (Wildcard LIKE)។',
        },
        explanation: {
          en: 'Complex database queries frequently require evaluating multiple criteria across multiple attributes. Logical operators combine boolean predicates: AND mandates that both conditions evaluate to true, OR requires at least one condition to be true, and NOT negates a predicate. Range filtering is simplified using BETWEEN min AND max. Evaluating membership against a set of values is streamlined using the IN (val1, val2) operator. For text pattern matching, the LIKE operator pairs with wildcards: percent (%) matches any sequence of zero or more characters, while underscore (_) matches exactly one character.',
          km: 'ការសរសេរ Query ស្មុគស្មាញ ចាំបាច់ត្រូវផ្ទៀងផ្ទាត់លក្ខខណ្ឌច្រើនជួរឈរក្នុងពេលតែមួយ។ ប្រមាណវិធីតក្កវិជ្ជា AND តម្រូវឱ្យលក្ខខណ្ឌទាំងពីរត្រូវ (TRUE) ទាំងពីរ, OR តម្រូវឱ្យត្រូវយ៉ាងហោចណាស់មួយ, ហើយ NOT សម្រាប់ផ្លាស់ប្តូរលក្ខខណ្ឌទៅជាបដិសេធ។ សម្រាប់ការស្វែងរកតាមចន្លោះលេខ យើងប្រើ BETWEEN min AND max។ សម្រាប់ការផ្ទៀងផ្ទាត់ជាមួយបញ្ជីតម្លៃ យើងប្រើ IN (val1, val2)។ សម្រាប់ការស្វែងរកអត្ថបទតាមទម្រង់ យើងប្រើ LIKE ជាមួយសញ្ញា % (តំណាងឱ្យអក្សរប៉ុន្មានក៏បាន) និង _ (តំណាងឱ្យអក្សរតែមួយខ្ទង់)។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'LIKE wildcard matching pattern using % for zero or more characters',
            km: 'ការស្វែងរកអត្ថបទជាមួយ LIKE និងសញ្ញា % (Wildcard Pattern Matching)',
          },
          svgData: {
            nodes: [
              { id: 'pattern', label: 'WHERE name LIKE "Sok%"', subtext: 'Pattern Rule', x: 80, y: 100, type: 'primary' },
              { id: 'eval', label: 'Check Text Prefix', subtext: 'Starts with "Sok"', x: 280, y: 100, type: 'secondary' },
              { id: 'matches', label: 'Matches: "Sokha", "Sokrat", "Sok"', subtext: 'Filtered Matches', x: 480, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### Key Logical Operators:
- **AND**: Both conditions must be True.
- **OR**: Either condition can be True.
- **IN ('A', 'B')**: Column matches any item in set.
- **BETWEEN x AND y**: Inclusive numerical or date range.
- **LIKE 'Cambodia%'**: Wildcard matching text starting with "Cambodia".

Let's test multi-condition filtering:`,
          km: `### ប្រមាណវិធីតក្កវិជ្ជាសំខាន់ៗ៖
- **AND**៖ លក្ខខណ្ឌទាំងពីរត្រូវតែ True
- **OR**៖ យ៉ាងហោចណាស់លក្ខខណ្ឌមួយ True
- **IN ('A', 'B')**៖ តម្លៃជួរឈរត្រូវគ្នានឹងតម្លៃណាមួយក្នុងបញ្ជី
- **BETWEEN x AND y**៖ ចន្លោះលេខ ឬថ្ងៃ (រាប់បញ្ចូលទាំង x និង y)
- **LIKE 'Cambodia%'**៖ ស្វែងរកអត្ថបទដែលផ្តើមដោយ "Cambodia"`,
        },
        codeExample: {
          title: {
            en: 'Filtering with IN, BETWEEN, and LIKE',
            km: 'ការចម្រោះទិន្នន័យជាមួយ IN, BETWEEN, និង LIKE',
          },
          description: {
            en: 'Querying students in Phnom Penh or Siem Reap with high grades.',
            km: 'ស្វែងរកសិស្សនៅភ្នំពេញ ឬសៀមរាប ដែលមានពិន្ទុចន្លោះពី ៨០ ទៅ ១០០។',
          },
          code: `SELECT name, city, gpa 
FROM students 
WHERE city IN ('Phnom Penh', 'Siem Reap')
  AND gpa BETWEEN 3.2 AND 4.0
  AND name LIKE 'S%';`,
        },
        outputPreview: {
          columns: ['name', 'city', 'gpa'],
          rows: [
            ['Sophea Sok', 'Phnom Penh', 3.85],
            ['Sovan Keo', 'Siem Reap', 3.40]
          ],
          explanation: {
            en: 'Returned students match all criteria: city is PP/Siem Reap, GPA is between 3.2-4.0, and name starts with "S".',
            km: 'សិស្សដែលបង្ហាញត្រូវគ្រប់លក្ខខណ្ឌទាំងអស់៖ នៅភ្នំពេញ/សៀមរាប ពិន្ទុចន្លោះ ៣.២-៤.០ និងឈ្មោះផ្តើមដោយអក្សរ "S"។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE test_like (word TEXT);
INSERT INTO test_like VALUES ('PostgreSQL'), ('Python'), ('JavaScript');

SELECT * FROM test_like WHERE word LIKE 'P%';`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'LIKE "P%" matches PostgreSQL and Python.', km: 'LIKE "P%" ស្វែងរកឃើញ PostgreSQL និង Python។' }
          ]
        },
        quiz: [
          {
            id: 'm3-l1-q1',
            question: {
              en: 'In SQL LIKE patterns, what does the percent sign (%) wildcard represent?',
              km: 'នៅក្នុងទម្រង់ SQL LIKE តើនិមិត្តសញ្ញា % តំណាងឱ្យអ្វី?',
            },
            options: [
              { id: 'opt1', text: { en: 'Any sequence of zero or more characters', km: 'អក្សរអ្វីក៏បាន ចំនួនប៉ុន្មានក៏បាន (រួមទាំង ០ ខ្ទង់)' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Exactly one single character', km: 'អក្សរតែមួយខ្ទង់គត់' }, isCorrect: false },
              { id: 'opt3', text: { en: 'Only numeric digits', km: 'តែលេខប៉ុណ្ណោះ' }, isCorrect: false }
            ],
            explanation: {
              en: 'The % wildcard matches zero or more characters of any type, while _ matches exactly one character.',
              km: 'សញ្ញា % ស្វែងរកអក្សរអ្វីក៏បានមិនកំណត់ចំនួនឡើយ ខណៈសញ្ញា _ ស្វែងរកអក្សរតែមួយខ្ទង់។',
            }
          }
        ]
      },
      {
        id: 'm3-l2',
        moduleId: 'module-3',
        moduleNumber: 3,
        lessonNumber: 2,
        title: {
          en: 'Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)',
          km: 'អនុគមន៍បូកសរុប (COUNT, SUM, AVG, MIN, MAX)',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Calculating summary statistics across table rows: counts, totals, averages, and extreme boundaries.',
          km: 'ការគណនាស្ថិតិសរុបលើជួរដេកក្នុងតារាង៖ ការរាប់ចំនួន ផលបូក មធ្យមភាគ តម្លៃអប្បបរមា និងអតិបរមា។',
        },
        explanation: {
          en: 'Aggregate functions summarize multiple input rows into a single scalar result row. COUNT() tallies the number of rows or non-null column values. SUM() calculates the mathematical total of a numeric column. AVG() computes the arithmetic mean. MIN() and MAX() identify the lowest and highest boundary values across numbers, strings, or dates. Crucially, aggregate functions automatically ignore NULL values during calculation (except for COUNT(*)). Utilizing aggregates at the database level optimizes analytics reporting, avoiding transferring raw datasets to application servers.',
          km: 'អនុគមន៍បូកសរុប (Aggregate Functions) បូកសរុបទិន្នន័យពីជួរដេកច្រើន មកជាលទ្ធផលមួយជួរដេក។ COUNT() ប្រើសម្រាប់រាប់ចំនួនជួរដេក។ SUM() គណនាផលបូកសរុប។ AVG() គណនាតម្លៃមធ្យមភាគ។ MIN() និង MAX() ស្វែងរករកតម្លៃតូចបំផុត និងធំបំផុត។ ចំណុចសំខាន់គឺរាល់អនុគមន៍បូកសរុបទាំងអស់ រំលងតម្លៃ NULL ដោយស្វ័យប្រវត្តិ (លើកលែងតែ COUNT(*))។ ការបូកសរុបទិន្នន័យនៅកម្រិតដាតាបេស ជួយឱ្យការធ្វើរបាយការណ៍មានល្បឿនលឿនបំផុត។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'Aggregation Reduction: Collapsing 1,000 order row amounts into single SUM total',
            km: 'ការបង្រួញទិន្នន័យ៖ បូកសរុបទិន្នន័យ ១,០០០ ជួរដេក ឱ្យមកនៅត្រឹមផលបូកសរុប SUM មួយជួរ',
          },
          svgData: {
            nodes: [
              { id: 'rows', label: '1,000 Order Amounts', subtext: '[10.00, 45.00, 120.00...]', x: 80, y: 100, type: 'primary' },
              { id: 'agg', label: 'SUM(amount)', subtext: 'Aggregate Pipeline', x: 280, y: 100, type: 'secondary' },
              { id: 'out', label: '$45,230.00', subtext: 'Single Scalar Summary', x: 480, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### Essential Aggregate Functions:
- \`COUNT(*)\` : Counts total number of rows.
- \`COUNT(col)\` : Counts non-null entries in column.
- \`SUM(col)\` : Calculates sum total of numbers.
- \`AVG(col)\` : Calculates average score/price.
- \`MIN(col)\` / \`MAX(col)\` : Lowest and highest values.

Let's calculate sales revenue statistics:`,
          km: `### អនុគមន៍បូកសរុបសំខាន់ៗ៖
- \`COUNT(*)\` ៖ រាប់ចំនួនជួរដេកសរុបទាំងអស់
- \`COUNT(col)\` ៖ រាប់ចំនួនទិន្នន័យដែលមិន NULL ក្នុងជួរឈរ
- \`SUM(col)\` ៖ ផលបូកសរុបនៃតួលេខ
- \`AVG(col)\` ៖ តម្លៃមធ្យមភាគ
- \`MIN(col)\` / \`MAX(col)\` ៖ តម្លៃតូចបំផុត និងធំបំផុត`,
        },
        codeExample: {
          title: {
            en: 'Computing Executive Revenue Analytics',
            km: 'ការគណនាស្ថិតិចំណូលសរុបសម្រាប់ថ្នាក់ដឹកនាំ',
          },
          description: {
            en: 'Calculating total count, revenue sum, average order, min, and max sales.',
            km: 'គណនាចំនួនការទិញសរុប ផលបូកចំណូល មធ្យមភាគ និងតម្លៃទាប/ខ្ពស់បំផុត។',
          },
          code: `SELECT 
  COUNT(*) AS total_orders,
  SUM(order_total) AS total_revenue,
  ROUND(AVG(order_total), 2) AS avg_order_value,
  MIN(order_total) AS smallest_sale,
  MAX(order_total) AS largest_sale
FROM sales_orders;`,
        },
        outputPreview: {
          columns: ['total_orders', 'total_revenue', 'avg_order_value', 'smallest_sale', 'largest_sale'],
          rows: [
            [1250, 84500.00, 67.60, 5.00, 1200.00]
          ],
          explanation: {
            en: 'The query collapses all 1,250 sales records into a single statistical summary line.',
            km: 'Query បានបូកសរុបទិន្នន័យការទិញទាំង ១,២៥០ មកជាបន្ទាត់ស្ថិតិសរុបតែមួយ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE sales (amount NUMERIC);
INSERT INTO sales VALUES (10), (20), (30), (NULL);

SELECT COUNT(*) AS row_count, COUNT(amount) AS non_null_count, SUM(amount) AS total FROM sales;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'COUNT(*) counts 4 rows; COUNT(amount) counts 3 non-null amounts.', km: 'COUNT(*) រាប់បាន ៤ ជួរដេក; COUNT(amount) រាប់បាន ៣ ជួរដែលមានទិន្នន័យ។' }
          ]
        },
        quiz: [
          {
            id: 'm3-l2-q1',
            question: {
              en: 'How do aggregate functions like SUM() and AVG() handle NULL values?',
              km: 'តើអនុគមន៍បូកសរុបដូចជា SUM() និង AVG() ចាត់ចែងតម្លៃ NULL យ៉ាងដូចម្តេច?',
            },
            options: [
              { id: 'opt1', text: { en: 'They automatically ignore NULL values during computation', km: 'ពួកគេរំលងតម្លៃ NULL ដោយស្វ័យប្រវត្តិក្នុងពេលគណនា' }, isCorrect: true },
              { id: 'opt2', text: { en: 'They cause the query to fail with an error', km: 'ពួកគេធ្វើឱ្យ query បរាជ័យជាមួយ error' }, isCorrect: false },
              { id: 'opt3', text: { en: 'They convert NULLs to zero and include them in AVG calculations', km: 'ពួកគេប្តូរ NULL ទៅលេខ ០ ហើយរាប់ចូលក្នុង AVG' }, isCorrect: false }
            ],
            explanation: {
              en: 'SQL aggregate functions implicitly skip NULL values, preventing skewed mathematical averages.',
              km: 'អនុគមន៍បូកសរុប SQL រំលងតម្លៃ NULL ដោយស្វ័យប្រវត្តិ ដើម្បីការពារកុំឱ្យខូចតម្លៃមធ្យមភាគ។',
            }
          }
        ]
      },
      {
        id: 'm3-l3',
        moduleId: 'module-3',
        moduleNumber: 3,
        lessonNumber: 3,
        title: {
          en: 'Grouping Data with GROUP BY',
          km: 'ការបែងចែកក្រុមទិន្នន័យជាមួយ GROUP BY',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Partitioning table rows into categorical groups to calculate aggregate metrics per group.',
          km: 'ការបែងចែកជួរដេកក្នុងតារាងជាក្រុមតាមប្រភេទទិន្នន័យ ដើម្បីគណនាស្ថិតិបូកសរុបក្នុងក្រុមនីមួយៗ។',
        },
        explanation: {
          en: 'The GROUP BY clause partitions table records into distinct summary buckets based on matching values in one or more grouping columns. When GROUP BY is executed, SQL computes aggregate functions (such as COUNT, SUM, or AVG) independently for each individual group. For example, rather than computing total sales revenue across the entire company, GROUP BY category enables computing revenue broken down by product category or sales territory. Any column projected in the SELECT list that is not wrapped inside an aggregate function MUST be explicitly listed in the GROUP BY clause.',
          km: 'បញ្ជា GROUP BY ត្រូវបានប្រើប្រាស់ដើម្បីបែងចែកជួរដេកក្នុងតារាងជាក្រុមៗ ដោយផ្អែកលើតម្លៃដូចគ្នាក្នុងជួរឈរមួយឬច្រើន។ នៅពេលប្រើ GROUP BY អនុគមន៍បូកសរុប (ដូចជា COUNT, SUM, AVG) នឹងគណនាដាច់ដោយឡែកសម្រាប់ក្រុមនីមួយៗ។ ឧទាហរណ៍ ជំនួសឱ្យការបូកចំណូលសរុបក្រុមហ៊ុនទាំងមូល GROUP BY category អនុញ្ញាតឱ្យយើងមើលឃើញចំណូលបែងចែកតាមប្រភេទទំនិញនីមួយៗ។ វិធានសំខាន់គឺ រាល់ជួរឈរណាដែលសរសេរក្នុង SELECT ហើយមិនបានដាក់ក្នុងអនុគមន៍បូកសរុប ត្រូវតែសរសេរក្នុង GROUP BY ដាច់ខាត។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'GROUP BY Bucketing: Partitioning rows into category buckets prior to aggregation',
            km: 'ការបែងចែកក្រុម GROUP BY៖ ប្រមូលផ្តុំជួរដេកតាមប្រភេទទំនិញ មុនពេលបូកសរុប',
          },
          svgData: {
            nodes: [
              { id: 'all', label: 'Unfiltered Sales Rows', subtext: 'Laptops, Phones, Accessories', x: 80, y: 100, type: 'primary' },
              { id: 'group', label: 'GROUP BY category', subtext: 'Partitioning Engine', x: 280, y: 100, type: 'secondary' },
              { id: 'buckets', label: 'Laptops Total: $12k | Phones: $8k', subtext: 'Group Summaries', x: 480, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### Golden Rule of GROUP BY:
If a column appears in \`SELECT\`, it must EITHER be inside an aggregate function like \`SUM(x)\` OR listed in the \`GROUP BY\` clause.

Let's group sales revenue by department:`,
          km: `### វិធានមាសនៃ GROUP BY៖
ប្រសិនបើជួរឈរមានក្នុង \`SELECT\` វាត្រូវតែស្ថិតក្នុងអនុគមន៍បូកសរុបដូចជា \`SUM(x)\` ឬត្រូវតែមានចែងក្នុងបញ្ជា \`GROUP BY\`។`,
        },
        codeExample: {
          title: {
            en: 'Grouping Sales Revenue by Department',
            km: 'ការបូកសរុបចំណូលតាមផ្នែក/ដេប៉ាតឺម៉ង់នីមួយៗ',
          },
          description: {
            en: 'Calculating employee count and average salary broken down by department.',
            km: 'គណនាចំនួនបុគ្គលិក និងប្រាក់ខែមធ្យមភាគ បែងចែកតាមដេប៉ាតឺម៉ង់។',
          },
          code: `SELECT 
  department,
  COUNT(*) AS employee_count,
  ROUND(AVG(salary), 2) AS avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;`,
        },
        outputPreview: {
          columns: ['department', 'employee_count', 'avg_salary'],
          rows: [
            ['Executive', 3, 3200.00],
            ['Engineering', 14, 2150.50],
            ['Marketing', 6, 1250.00]
          ],
          explanation: {
            en: 'The query partitions records by department, computing count and average salary for each distinct team.',
            km: 'Query បានបែងចែកបុគ្គលិកតាមដេប៉ាតឺម៉ង់ រួចគណនាចំនួន និងប្រាក់ខែមធ្យមភាគសម្រាប់ក្រុមនីមួយៗ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE orders (category TEXT, price NUMERIC);
INSERT INTO orders VALUES ('Electronics', 100), ('Electronics', 200), ('Books', 15);

SELECT category, SUM(price) AS total FROM orders GROUP BY category;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Electronics group sums to 300; Books sums to 15.', km: 'ក្រុម Electronics មានផលបូក ៣០០; ក្រុម Books មានផលបូក ១៥។' }
          ]
        },
        quiz: [
          {
            id: 'm3-l3-q1',
            question: {
              en: 'Which column MUST be listed in the GROUP BY clause?',
              km: 'តើជួរឈរមួយណាដែលត្រូវតែមានចែងនៅក្នុងបញ្ជា GROUP BY?',
            },
            options: [
              { id: 'opt1', text: { en: 'Any non-aggregated column present in the SELECT list', km: 'រាល់ជួរឈរទាំងឡាយណាដែលសរសេរក្នុង SELECT ហើយមិនមែនជាអនុគមន៍បូកសរុប' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Only primary key columns', km: 'មានតែជួរឈរ Primary Key ប៉ុណ្ណោះ' }, isCorrect: false },
              { id: 'opt3', text: { en: 'Columns wrapped inside SUM() or COUNT()', km: 'ជួរឈរដែលនៅក្នុង SUM() ឬ COUNT()' }, isCorrect: false }
            ],
            explanation: {
              en: 'Unaggregated SELECT columns must be in the GROUP BY clause to define the grouping key.',
              km: 'រាល់ជួរឈរណាដែលមិនមែនជាអនុគមន៍បូកសរុប ត្រូវតែមានក្នុង GROUP BY ដើម្បីកំណត់ជា Grouping Key។',
            }
          }
        ]
      },
      {
        id: 'm3-l4',
        moduleId: 'module-3',
        moduleNumber: 3,
        lessonNumber: 4,
        title: {
          en: 'Filtering Groups with HAVING (vs WHERE)',
          km: 'ការចម្រោះក្រុមទិន្នន័យជាមួយ HAVING (ប្រៀបធៀបនឹង WHERE)',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Understanding the key architectural difference between row filtering (WHERE) and group filtering (HAVING).',
          km: 'ការយល់ដឹងពីភាពខុសគ្នាសំខាន់រវាងការចម្រោះជួរដេក (WHERE) និងការចម្រោះក្រុមទិន្នន័យ (HAVING)។',
        },
        explanation: {
          en: 'A foundational concept in SQL execution order is the difference between WHERE and HAVING. The WHERE clause filters individual raw rows BEFORE any grouping or aggregation takes place. Conversely, the HAVING clause filters grouped summary buckets AFTER the GROUP BY clause has aggregated the rows. Because WHERE operates on unaggregated disk rows, it CANNOT reference aggregate functions like "WHERE SUM(sales) > 1000". To filter categories based on aggregated metrics (e.g., finding departments with more than 5 employees or total sales exceeding $50,000), developers MUST use the HAVING clause.',
          km: 'ចំណុចគន្លឹះសំខាន់ក្នុង SQL គឺភាពខុសគ្នារវាង WHERE និង HAVING។ បញ្ជា WHERE ចម្រោះជួរដេកទិន្នន័យដើម មុនពេល ការបូកសរុប ឬបែងចែកក្រុម (Grouping) កើតឡើង។ ផ្ទុយទៅវិញ បញ្ជា HAVING ចម្រោះក្រុមទិន្នន័យ បន្ទាប់ពី បញ្ជា GROUP BY បានបូកសរុបរួចរាល់។ ដោយសារ WHERE ដំណើការលើជួរដេកដើម វាមិនអាច ប្រើជាមួយអនុគមន៍បូកសរុបដូចជា "WHERE SUM(sales) > 1000" បានឡើយ។ ប្រសិនបើយើងចង់ចម្រោះក្រុមតាមផលបូក ឬចំនួន (ឧ. ស្វែងរកផ្នែកដែលមានបុគ្គលិកលើសពី ៥ នាក់) យើងត្រូវតែប្រើ HAVING។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'Execution Sequence: WHERE filters raw rows -> GROUP BY buckets -> HAVING filters summary groups',
            km: 'លំដាប់ដំណើការ៖ WHERE ចម្រោះជួរដេកដើម -> GROUP BY បែងចែកក្រុម -> HAVING ចម្រោះក្រុមលទ្ធផល',
          },
          svgData: {
            nodes: [
              { id: 'where', label: '1. WHERE price > 10', subtext: 'Raw Row Filter (Pre-Aggregation)', x: 80, y: 100, type: 'primary' },
              { id: 'groupby', label: '2. GROUP BY category', subtext: 'Bucketing Engine', x: 280, y: 100, type: 'secondary' },
              { id: 'having', label: '3. HAVING COUNT(*) > 5', subtext: 'Group Summary Filter (Post-Aggregation)', x: 480, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'where', to: 'groupby' },
              { from: 'groupby', to: 'having' }
            ]
          }
        },
        tutorial: {
          en: `### Summary Matrix: WHERE vs HAVING

| Clause | Operates On | When Executed | Can Use Aggregates? |
| :--- | :--- | :--- | :--- |
| **WHERE** | Individual raw rows | BEFORE GROUP BY | ❌ NO (Syntax Error) |
| **HAVING** | Aggregated groups | AFTER GROUP BY | ✅ YES |

Let's find departments with average salary exceeding $2,000:`,
          km: `### តារាងប្រៀបធៀប៖ WHERE និង HAVING

| បញ្ជា | ដំណើការលើ | ពេលរត់ | ប្រើ Aggregate បាន? |
| :--- | :--- | :--- | :--- |
| **WHERE** | ជួរដេកដើមមួយៗ | មុន GROUP BY | ❌ មិនបានដាច់ខាត (Syntax Error) |
| **HAVING** | ក្រុមទិន្នន័យបូកសរុប | បន្ទាប់ពី GROUP BY | ✅ បាន |`,
        },
        codeExample: {
          title: {
            en: 'Filtering High-Volume Product Categories',
            km: 'ការចម្រោះប្រភេទទំនិញដែលមានការលក់ច្រើន',
          },
          description: {
            en: 'Combining WHERE row filter, GROUP BY, and HAVING group filter.',
            km: 'ការប្រើប្រាស់ WHERE, GROUP BY, និង HAVING ក្នុង Query តែមួយ។',
          },
          code: `SELECT 
  category,
  COUNT(*) AS product_count,
  SUM(stock_quantity) AS total_stock
FROM inventory
WHERE is_active = TRUE
GROUP BY category
HAVING COUNT(*) >= 3;`,
        },
        outputPreview: {
          columns: ['category', 'product_count', 'total_stock'],
          rows: [
            ['Laptops & Computers', 8, 142],
            ['Mobile Accessories', 15, 680]
          ],
          explanation: {
            en: 'WHERE filtered active products first, GROUP BY bucketed by category, and HAVING excluded categories with fewer than 3 items.',
            km: 'WHERE ចម្រោះទំនិញ active មុន, GROUP BY បែងចែកតាមប្រភេទទំនិញ, ហើយ HAVING ចម្រោះចោលប្រភេទទំនិញណាដែលមានតិចជាង ៣។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE sales (dept TEXT, amount INT);
INSERT INTO sales VALUES ('HR', 100), ('IT', 500), ('IT', 600);

SELECT dept, SUM(amount) AS total 
FROM sales 
GROUP BY dept 
HAVING SUM(amount) > 300;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'HAVING SUM(amount) > 300 includes IT (1100) and excludes HR (100).', km: 'HAVING SUM(amount) > 300 នឹងបង្ហាញតែផ្នែក IT (1100) ហើយចម្រោះ HR (100) ចោល។' }
          ]
        },
        quiz: [
          {
            id: 'm3-l4-q1',
            question: {
              en: 'Why does writing "WHERE COUNT(*) > 5" trigger a SQL syntax error?',
              km: 'ហេតុអ្វីបានជាការសរសេរ "WHERE COUNT(*) > 5" បណ្តាលឱ្យមាន SQL Syntax Error?',
            },
            options: [
              { id: 'opt1', text: { en: 'WHERE executes before rows are aggregated into groups; HAVING must be used instead', km: 'WHERE រត់មុនពេលទិន្នន័យត្រូវបានបូកសរុបជាក្រុម ដូច្នេះត្រូវប្រើ HAVING ជំនួសវិញ' }, isCorrect: true },
              { id: 'opt2', text: { en: 'COUNT(*) can only be used with text columns', km: 'COUNT(*) អាចប្រើបានតែជាមួយជួរឈរអត្ថបទ' }, isCorrect: false },
              { id: 'opt3', text: { en: 'SQL prohibits filtering numbers greater than 5', km: 'SQL ហាមឃាត់មិនឱ្យចម្រោះលេខធំជាង ៥' }, isCorrect: false }
            ],
            explanation: {
              en: 'WHERE filters unaggregated raw rows before grouping. Aggregates like COUNT() can only be filtered in the HAVING clause.',
              km: 'WHERE ចម្រោះជួរដេកដើមមុនពេលបូកសរុប។ ការចម្រោះលើអនុគមន៍បូកសរុបដូចជា COUNT() អាចធ្វើបានតែក្នុងបញ្ជា HAVING ប៉ុណ្ណោះ។',
            }
          }
        ]
      },
      {
        id: 'm3-l5',
        moduleId: 'module-3',
        moduleNumber: 3,
        lessonNumber: 5,
        title: {
          en: 'Combining Aggregation with Sorting & Filtering',
          km: 'ការរួមបញ្ចូលគ្នារវាងការបូកសរុប ការរៀបលំដាប់ និងការចម្រោះទិន្នន័យ',
        },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        description: {
          en: 'Writing end-to-end SQL queries combining WHERE, GROUP BY, HAVING, ORDER BY, and LIMIT.',
          km: 'ការសរសេរ Query ពេញលេញដោយបូកបញ្ចូលគ្នានូវ WHERE, GROUP BY, HAVING, ORDER BY, និង LIMIT។',
        },
        explanation: {
          en: 'Real-world business intelligence and backend reporting queries combine every clause studied so far into a unified SQL pipeline. Understanding the strict logical query processing order enforced by database engines is essential: 1. FROM (Identify tables), 2. WHERE (Filter raw rows), 3. GROUP BY (Aggregate buckets), 4. HAVING (Filter aggregated groups), 5. SELECT (Project expressions), 6. ORDER BY (Sort result rows), 7. LIMIT (Slice pagination window). Writing clauses in this logical order ensures syntax correctness and predictable query performance.',
          km: 'ការសរសេរ Query របាយការណ៍ក្នុងប្រព័ន្ធពិត ប្រៀបដូចជាខ្សែច្រវាក់ផលិតកម្មដែលរួមបញ្ចូលគ្រប់បញ្ជាទាំងអស់ចូលគ្នា។ ការយល់ដឹងពីលំដាប់ដំណើការផ្ទៃក្នុងរបស់ដាតាបេសគឺជារឿងសំខាន់បំផុត៖ ១. FROM (ជ្រើសរើសតារាង), ២. WHERE (ចម្រោះជួរដេកដើម), ៣. GROUP BY (បែងចែកក្រុមបូកសរុប), ៤. HAVING (ចម្រោះក្រុមលទ្ធផល), ៥. SELECT (ជ្រើសរើសជួរឈរបង្ហាញ), ៦. ORDER BY (រៀបលំដាប់), ៧. LIMIT (កាត់យកចំនួន)។ ការសរសេរតាមលំដាប់នេះ ធានាថាកូដគ្មាន Error និងមានប្រសិទ្ធភាពខ្ពស់។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'Logical SQL Query Execution Order (FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT)',
            km: 'លំដាប់ដំណើការ Query ផ្ទៃក្នុងរបស់ដាតាបេស (FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT)',
          },
          svgData: {
            nodes: [
              { id: 's1', label: '1. FROM & WHERE', subtext: 'Source & Row Filter', x: 60, y: 100, type: 'primary' },
              { id: 's2', label: '2. GROUP BY & HAVING', subtext: 'Aggregates & Group Filter', x: 220, y: 100, type: 'secondary' },
              { id: 's3', label: '3. SELECT & ORDER BY', subtext: 'Projection & Sorting', x: 380, y: 100, type: 'accent' },
              { id: 's4', label: '4. LIMIT', subtext: 'Window Slicing', x: 520, y: 100, type: 'warning' },
            ],
            links: [
              { from: 's1', to: 's2' },
              { from: 's2', to: 's3' },
              { from: 's3', to: 's4' }
            ]
          }
        },
        tutorial: {
          en: `### SQL Clause Execution Order:
1. **FROM** : Source tables loaded
2. **WHERE** : Raw row predicates filtered
3. **GROUP BY** : Summary buckets created
4. **HAVING** : Aggregate group predicates filtered
5. **SELECT** : Expressions projected & aliases assigned
6. **ORDER BY** : Final sorting applied
7. **LIMIT** : Window sliced

Let's write a top-category report query following this pipeline:`,
          km: `### លំដាប់ដំណើការ SQL (Logical Execution Order)៖
១. **FROM** ៖ ទាញយកតារាង
២. **WHERE** ៖ ចម្រោះជួរដេកដើម
៣. **GROUP BY** ៖ បង្កើតក្រុមបូកសរុប
៤. **HAVING** ៖ ចម្រោះក្រុមលទ្ធផល
៥. **SELECT** ៖ ជ្រើសរើសជួរឈរបង្ហាញ
៦. **ORDER BY** ៖ រៀបលំដាប់
៧. **LIMIT** ៖ កាត់យកចំនួន`,
        },
        codeExample: {
          title: {
            en: 'Top Revenue Categories Report Query',
            km: 'Query របាយការណ៍ប្រភេទទំនិញដែលរកចំណូលបានច្រើនជាងគេ',
          },
          description: {
            en: 'Complete query combining WHERE, GROUP BY, HAVING, ORDER BY, and LIMIT.',
            km: 'Query ពេញលេញដែលប្រើប្រាស់ WHERE, GROUP BY, HAVING, ORDER BY, និង LIMIT។',
          },
          code: `SELECT 
  category,
  COUNT(*) AS total_items,
  SUM(unit_price * stock_quantity) AS inventory_value
FROM products
WHERE status = 'AVAILABLE'
GROUP BY category
HAVING SUM(unit_price * stock_quantity) > 5000
ORDER BY inventory_value DESC
LIMIT 5;`,
        },
        outputPreview: {
          columns: ['category', 'total_items', 'inventory_value'],
          rows: [
            ['Laptops', 12, 28400.00],
            ['Monitors', 25, 11250.00],
            ['Smartphones', 18, 9800.00]
          ],
          explanation: {
            en: 'The query seamlessly filters active products, aggregates inventory valuation, filters categories over $5,000, sorts descending, and caps at top 5.',
            km: 'Query បានចម្រោះទំនិញ គណនាតម្លៃស្តុកសរុប ជ្រើសតែក្រុមលើសពី $5,000 រៀបតាមតម្លៃពីធំទៅតូច និងកម្រិតយកត្រឹម ៥ ប្រភេទទំនិញដំបូង។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE sales (dept TEXT, score INT);
INSERT INTO sales VALUES ('A', 10),('A', 20),('B', 50),('B', 40);

SELECT dept, AVG(score) AS avg_score 
FROM sales 
GROUP BY dept 
ORDER BY avg_score DESC;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Dept B average is 45; Dept A average is 15. Dept B appears first.', km: 'ផ្នែក B មានមធ្យមភាគ ៤៥; ផ្នែក A មានមធ្យមភាគ ១៥។ B នឹងបង្ហាញមុនគេ។' }
          ]
        },
        quiz: [
          {
            id: 'm3-l5-q1',
            question: {
              en: 'Which clause is executed FIRST by the SQL engine during query processing?',
              km: 'តើបញ្ជា SQL មួយណាដែលត្រូវបានដំណើការមុនគេបង្អស់ដោយដាតាបេស?',
            },
            options: [
              { id: 'opt1', text: { en: 'FROM (identifying source tables)', km: 'FROM (ជ្រើសរើសតារាងប្រភពទិន្នន័យ)' }, isCorrect: true },
              { id: 'opt2', text: { en: 'SELECT (projecting columns)', km: 'SELECT (ជ្រើសរើសជួរឈរ)' }, isCorrect: false },
              { id: 'opt3', text: { en: 'ORDER BY (sorting rows)', km: 'ORDER BY (រៀបលំដាប់)' }, isCorrect: false }
            ],
            explanation: {
              en: 'The database engine must first evaluate the FROM clause to load source tables before applying filters or projections.',
              km: 'ម៉ាស៊ីនដាតាបេសត្រូវតែដំណើការបញ្ជា FROM មុនគេបង្អស់ ដើម្បីស្គាល់តារាងទិន្នន័យ មុនពេលចម្រោះ ឬជ្រើសរើសជួរឈរ។',
            }
          }
        ]
      }
    ]
  }
];
