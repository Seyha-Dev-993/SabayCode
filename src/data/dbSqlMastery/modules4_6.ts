import { DatabaseSqlModule } from '../../types/databaseSqlMasteryClass';

export const MODULES_4_6: DatabaseSqlModule[] = [
  {
    id: 'module-4',
    moduleNumber: 4,
    title: {
      en: 'Module 4: Joins — Combining Tables',
      km: 'មូឌុលទី ៤៖ ការភ្ជាប់តារាង (Joins — Combining Tables)',
    },
    description: {
      en: 'Mastering relational table joins with heavy visual Venn diagrams: INNER, LEFT, RIGHT, FULL OUTER, Self Joins, and multi-table joining.',
      km: 'ស្ទាត់ជំនាញលើការភ្ជាប់តារាង relational ជាមួយរូបភាព Venn Diagrams៖ INNER, LEFT, RIGHT, FULL OUTER, Self Join និងការភ្ជាប់តារាងច្រើន។',
    },
    lessons: [
      {
        id: 'm4-l1',
        moduleId: 'module-4',
        moduleNumber: 4,
        lessonNumber: 1,
        title: {
          en: 'Why Joins Exist & Relational Querying',
          km: 'មូលហេតុដែលត្រូវប្រើ JOIN និងការទាញយកទិន្នន័យ Relational',
        },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        description: {
          en: 'Understanding relational normalization benefits and why relational databases split data across multiple tables.',
          km: 'ការយល់ដឹងពីប្រយោជន៍នៃ Normalization និងមូលហេតុដែលដាតាបេសបំបែកទិន្នន័យជាច្រើនតារាង។',
        },
        explanation: {
          en: 'In normalized relational databases, data redundancy is minimized by storing entities in separate specialized tables. For instance, customer information lives in a customers table, while purchasing history lives in an orders table. Without table joins, application code would be forced to execute multiple sequential queries (N+1 query problem) and stitch datasets together in application memory. The SQL JOIN operator enables the database engine’s join matcher to correlate rows across multiple tables in a single atomic set-oriented query execution using foreign key constraints.',
          km: 'នៅក្នុង Relational Database ទិន្នន័យត្រូវបានបំបែកជាច្រើនតារាង ដើម្បីកុំឱ្យមានទិន្នន័យស្ទួន (Data Redundancy)។ ឧទាហរណ៍ ព័ត៌មានអតិថិជននៅក្នុងតារាង customers ឯប្រវត្តិនៃការទិញនៅក្នុងតារាង orders។ ប្រសិនបើយើងមិនប្រើប្រាស់ JOIN ទេ កម្មវិធីរបស់យើងនឹងត្រូវសរសេរ Query ច្រើនដង (N+1 query problem) ហើយយកមកបូកបញ្ចូលគ្នាក្នុង Memory ដែលធ្វើឱ្យ App ដើរយឺតខ្លាំង។ បញ្ជា SQL JOIN អនុញ្ញាតឱ្យដាតាបេសភ្ជាប់ទិន្នន័យរវាងតារាងច្រើនក្នុង Query តែមួយដោយប្រើ Foreign Keys។',
        },
        diagram: {
          type: 'relational-model',
          caption: {
            en: 'Table Relationship linking customers.id to orders.customer_id',
            km: 'ទំនាក់ទំនងរវាងតារាង customers.id ភ្ជាប់ទៅកាន់ orders.customer_id',
          },
          svgData: {
            tables: [
              { name: 'customers (Table A)', columns: [{ name: 'id: 1', type: 'PK', pk: true }, { name: 'name: "Dara"', type: 'TEXT' }] },
              { name: 'orders (Table B)', columns: [{ name: 'id: 501', type: 'PK', pk: true }, { name: 'customer_id: 1', type: 'FK', fk: true }, { name: 'total: $45', type: 'NUMERIC' }] }
            ]
          }
        },
        tutorial: {
          en: `### Relational Joins Key Principles:
1. **Normalization**: Eliminates duplicated strings or customer details across millions of order rows.
2. **Foreign Key Alignment**: Matches \`TableA.primary_key = TableB.foreign_key\`.
3. **Atomic Execution**: Database engine handles index joins in C/C++ native speed.

Let's inspect how JOIN correlates customers with orders:`,
          km: `### គោលការណ៍គ្រឹះនៃ Relational JOIN៖
១. **Normalization**៖ លុបបំបាត់ការសរសេរឈ្មោះអតិថិជនស្ទួនរាប់ពាន់ដងក្នុងតារាង Order។
២. **Foreign Key Alignment**៖ ភ្ជាប់ \`TableA.primary_key = TableB.foreign_key\`។
៣. **Atomic Execution**៖ ម៉ាស៊ីនដាតាបេសរត់ការភ្ជាប់ក្នុងល្បឿនលឿនបំផុតកម្រិត C/C++ Native។`,
        },
        codeExample: {
          title: {
            en: 'First Relational Table Join Query',
            km: 'ការសរសេរ Query ភ្ជាប់តារាងលើកដំបូង',
          },
          description: {
            en: 'Correlating customer names with order amounts using foreign key matching.',
            km: 'ការភ្ជាប់ឈ្មោះអតិថិជនជាមួយចំនួនទឹកប្រាក់បញ្ជាទិញ។',
          },
          code: `SELECT 
  c.customer_name,
  o.order_id,
  o.order_total
FROM customers AS c
JOIN orders AS o ON c.id = o.customer_id;`,
        },
        outputPreview: {
          columns: ['customer_name', 'order_id', 'order_total'],
          rows: [
            ['Dara Sok', 501, 45.00],
            ['Dara Sok', 502, 120.00],
            ['Bopha Chan', 503, 15.50]
          ],
          explanation: {
            en: 'The query combines customer names with their corresponding orders via matching IDs.',
            km: 'Query បានភ្ជាប់ឈ្មោះអតិថិជន ជាមួយការបញ្ជាទិញដែលត្រូវគ្នាតាមរយៈ ID។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE users (id INT, name TEXT);
CREATE TABLE posts (id INT, user_id INT, title TEXT);

INSERT INTO users VALUES (1, 'Sophea');
INSERT INTO posts VALUES (10, 1, 'SQL Joins Explained');

SELECT u.name, p.title FROM users u JOIN posts p ON u.id = p.user_id;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'JOIN connects users and posts where u.id equals p.user_id.', km: 'JOIN ភ្ជាប់ users និង posts ដោយផ្អែកលើ u.id ស្មើ p.user_id។' }
          ]
        },
        quiz: [
          {
            id: 'm4-l1-q1',
            question: {
              en: 'What primary issue occurs when developers fetch data without joins by running loop queries in application code?',
              km: 'តើបញ្ហាធំអ្វីដែលកើតឡើង នៅពេល Developer ទាញយកទិន្នន័យដោយមិនប្រើ JOIN តែប្រើ Loop ក្នុង App?',
            },
            options: [
              { id: 'opt1', text: { en: 'The N+1 Query Problem causing heavy network latency and database overhead', km: 'បញ្ហា N+1 Query Problem ដែលធ្វើឱ្យបណ្តាញដើរយឺត និងដាតាបេសដើរយឺតខ្លាំង' }, isCorrect: true },
              { id: 'opt2', text: { en: 'The database server immediately deletes all tables', km: 'ដាតាបេសលុបតារាងទាំងអស់ចោលភ្លាមៗ' }, isCorrect: false },
              { id: 'opt3', text: { en: 'SQL syntax becomes shorter', km: 'កូដ SQL ប្រែជាខ្លីជាងមុន' }, isCorrect: false }
            ],
            explanation: {
              en: 'Executing query loops in code creates the N+1 query performance bottleneck. SQL JOIN resolves this in 1 fast database call.',
              km: 'ការរត់ Query ក្នុង Loop ក្នុងកូដបង្កើតបញ្ហា N+1 Query។ ការប្រើ SQL JOIN ដោះស្រាយបញ្ហានេះក្នុង ១ Query តែប៉ុណ្ណោះ។',
            }
          }
        ]
      },
      {
        id: 'm4-l2',
        moduleId: 'module-4',
        moduleNumber: 4,
        lessonNumber: 2,
        title: {
          en: 'INNER JOIN (Intersection Set)',
          km: 'INNER JOIN (ការទាញយកទិន្នន័យដែលមានក្នុងតារាងទាំងពីរ)',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Understanding INNER JOIN semantics, set intersection logic, and foreign key matching.',
          km: 'ការយល់ដឹងពីអត្ថន័យ INNER JOIN តក្កវិជ្ជា Intersection និងការផ្ទៀងផ្ទាត់ Foreign Key។',
        },
        explanation: {
          en: 'An INNER JOIN returns only those rows where there is a matching value in both the left table and the right table. Mathematically, INNER JOIN represents the intersection set (A ∩ B) between two relations. If a row in Table A has no corresponding matching key in Table B, or if a row in Table B has no matching key in Table A, those unmatched rows are completely excluded from the result set. INNER JOIN is the default join type in ANSI SQL (writing JOIN is equivalent to INNER JOIN).',
          km: 'INNER JOIN បង្វិលមកវិញនូវតែជួរដេកណាដែលមានទិន្នន័យត្រូវគ្នាទាំងក្នុងតារាងខាងឆ្វេង (Table A) និងតារាងខាងស្តាំ (Table B) ប៉ុណ្ណោះ។ តាមផ្នែកគណិតវិទ្យា INNER JOIN គឺជាប្រសព្វរវាងសំណុំពីរ (A ∩ B)។ ប្រសិនបើជួរដេកក្នុងតារាង A គ្មាន Key ត្រូវគ្នាក្នុងតារាង B ឬជួរដេកក្នុងតារាង B គ្មានក្នុងតារាង A ទេ នោះជួរដេកទាំងនោះនឹងត្រូវចម្រោះចោលមិនបង្ហាញក្នុងលទ្ធផលឡើយ។ ក្នុង SQL ការសរសេរ JOIN ស្មើនឹងការសរសេរ INNER JOIN។',
        },
        diagram: {
          type: 'venn-inner',
          caption: {
            en: 'Venn Diagram: INNER JOIN returns exclusively the overlapping intersection (A ∩ B)',
            km: 'Venn Diagram៖ INNER JOIN បង្វិលតែផ្នែកដែលប្រសព្វគ្នាជាន់លើគ្នាតែប៉ុណ្ណោះ (A ∩ B)',
          },
          svgData: {
            vennLabels: {
              left: 'Table A (Customers without Orders excluded)',
              right: 'Table B (Unassigned Orders excluded)',
              center: 'INNER JOIN (Matched Customers with Orders)'
            }
          }
        },
        tutorial: {
          en: `### INNER JOIN Syntax:
\`\`\`sql
SELECT A.col, B.col
FROM TableA AS A
INNER JOIN TableB AS B ON A.id = B.foreign_id;
\`\`\`

Let's test INNER JOIN matching students with enrolled courses:`,
          km: `### ទម្រង់ INNER JOIN Syntax៖
\`\`\`sql
SELECT A.col, B.col
FROM TableA AS A
INNER JOIN TableB AS B ON A.id = B.foreign_id;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'INNER JOIN Querying Enrolled Students Only',
            km: 'INNER JOIN ទាញយកតែសិស្សណាដែលបានចុះឈ្មោះរៀនពិតប្រាកដ',
          },
          description: {
            en: 'Filtering out students who have not enrolled in any active course.',
            km: 'ការចម្រោះចោលសិស្សដែលមិនទាន់ចុះឈ្មោះមុខវិជ្ជាណាមួយ។',
          },
          code: `SELECT 
  s.full_name AS student_name,
  c.course_title,
  e.enrollment_date
FROM students AS s
INNER JOIN enrollments AS e ON s.id = e.student_id
INNER JOIN courses AS c ON e.course_id = c.id;`,
        },
        outputPreview: {
          columns: ['student_name', 'course_title', 'enrollment_date'],
          rows: [
            ['Dara Sok', 'Database Design & SQL', '2026-03-01'],
            ['Sophea Vonn', 'Backend Development', '2026-03-05']
          ],
          explanation: {
            en: 'Only student records with active matching enrollments appear in the intersection result.',
            km: 'មានតែសិស្សដែលមានកំណត់ត្រាចុះឈ្មោះរៀនពិតប្រាកដប៉ុណ្ណោះដែលបង្ហាញក្នុងលទ្ធផល។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE a (id INT, val TEXT);
CREATE TABLE b (a_id INT, val TEXT);
INSERT INTO a VALUES (1, 'A1'), (2, 'A2');
INSERT INTO b VALUES (1, 'B1');

SELECT a.val, b.val FROM a INNER JOIN b ON a.id = b.a_id;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Only id = 1 matches in both tables, so 1 row is returned.', km: 'មានតែ id = 1 ប៉ុណ្ណោះដែលមានក្នុងតារាងទាំងពីរ ដូច្នេះបង្វិល ១ ជួរដេក។' }
          ]
        },
        quiz: [
          {
            id: 'm4-l2-q1',
            question: {
              en: 'What happens to unmatched rows in Table A during an INNER JOIN with Table B?',
              km: 'តើមានអ្វីកើតឡើងចំពោះជួរដេកក្នុងតារាង A ដែលគ្មានទិន្នន័យត្រូវគ្នាក្នុងតារាង B នៅពេលប្រើ INNER JOIN?',
            },
            options: [
              { id: 'opt1', text: { en: 'Unmatched rows are excluded from the result set', km: 'ជួរដេកដែលមិនត្រូវគ្នា ត្រូវចម្រោះចោលមិនបង្ហាញក្នុងលទ្ធផលឡើយ' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Unmatched rows are returned with NULL values', km: 'ជួរដេកដែលមិនត្រូវគ្នា ត្រូវបានបង្ហាញជាមួយតម្លៃ NULL' }, isCorrect: false },
              { id: 'opt3', text: { en: 'The database throws a foreign key violation error', km: 'ដាតាបេសបង្ហាញ error foreign key violation' }, isCorrect: false }
            ],
            explanation: {
              en: 'INNER JOIN returns strictly the matching intersection. Unmatched records on either side are omitted.',
              km: 'INNER JOIN បង្វិលតែផ្នែកដែលត្រូវគ្នា។ ជួរដេកដែលមិនត្រូវគ្នានឹងត្រូវចម្រោះចោល។',
            }
          }
        ]
      },
      {
        id: 'm4-l3',
        moduleId: 'module-4',
        moduleNumber: 4,
        lessonNumber: 3,
        title: {
          en: 'LEFT JOIN & RIGHT JOIN (Preserving Outer Records)',
          km: 'LEFT JOIN និង RIGHT JOIN (ការរក្សាទុកទិន្នន័យខាងក្រៅ)',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Preserving all rows from the primary table while attaching optional matching data from referenced tables.',
          km: 'ការរក្សាទុកជួរដេកទាំងអស់ពីតារាងដើម ព្រមទាំងភ្ជាប់ទិន្នន័យពីតារាងបន្ទាប់ប្រសិនបើមាន (ប្រសិនបើគ្មាន ជំនួសដោយ NULL)។',
        },
        explanation: {
          en: 'A LEFT JOIN (or LEFT OUTER JOIN) preserves every single row from the left table (Table A), regardless of whether a matching record exists in the right table (Table B). If a match exists in Table B, the attributes are populated; if no match exists, NULL values are filled for all columns coming from Table B. This makes LEFT JOIN ideal for identifying missing or inactive records (e.g., finding customers who have placed zero orders: WHERE orders.id IS NULL). A RIGHT JOIN operates identically, except it preserves all rows from the right table.',
          km: 'LEFT JOIN (ឬ LEFT OUTER JOIN) រក្សាទុកគ្រប់ជួរដេកទាំងអស់នៃតារាងខាងឆ្វេង (Table A) ដោយមិនខ្វល់ថាមានទិន្នន័យត្រូវគ្នាក្នុងតារាងខាងស្តាំ (Table B) ឬអត់ឡើយ។ ប្រសិនបើមានទិន្នន័យក្នុងតារាង B វានឹងបង្ហាញទិន្នន័យនោះ ប្រសិនបើគ្មានទេ វានឹងជំនួសដោយតម្លៃ NULL សម្រាប់ជួរឈរមកពីតារាង B។ លក្ខណៈនេះធ្វើឱ្យ LEFT JOIN ល្អបំផុតសម្រាប់ស្វែងរកទិន្នន័យដែលអវត្តមាន (ឧ. ស្វែងរកអតិថិជនដែលមិនដែលទិញទំនិញសោះ៖ WHERE orders.id IS NULL)។ RIGHT JOIN ដំណើការដូចគ្នា ប៉ុន្តែរក្សាទុកទិន្នន័យតារាងខាងស្តាំ។',
        },
        diagram: {
          type: 'venn-left',
          caption: {
            en: 'Venn Diagram: LEFT JOIN preserves ALL rows of Table A + matching rows from Table B',
            km: 'Venn Diagram៖ LEFT JOIN រក្សាទុកគ្រប់ជួរដេកនៃតារាង A + ទិន្នន័យត្រូវគ្នានៃតារាង B',
          },
          svgData: {
            vennLabels: {
              left: 'Table A (All Rows Preserved)',
              right: 'Table B (Matching Rows Only)',
              center: 'LEFT JOIN Result Set (Nulls for missing B)'
            }
          }
        },
        tutorial: {
          en: `### LEFT JOIN Syntax & Usage:
\`\`\`sql
SELECT A.name, B.order_total
FROM customers AS A
LEFT JOIN orders AS B ON A.id = B.customer_id;
\`\`\`

Let's write a query identifying customers with ZERO orders:`,
          km: `### ទម្រង់ LEFT JOIN Syntax៖
\`\`\`sql
SELECT A.name, B.order_total
FROM customers AS A
LEFT JOIN orders AS B ON A.id = B.customer_id;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Finding Inactive Customers with LEFT JOIN & IS NULL',
            km: 'ការស្វែងរកអតិថិជនដែលមិនទាន់ទិញទំនិញ ដោយប្រើ LEFT JOIN & IS NULL',
          },
          description: {
            en: 'Preserving all customers and filtering for those without order records.',
            km: 'រក្សាទុកអតិថិជនទាំងអស់ ហើយចម្រោះយកតែអ្នកដែលគ្មានទិន្នន័យ Order។',
          },
          code: `SELECT 
  c.customer_name,
  c.email_address,
  o.order_id
FROM customers AS c
LEFT JOIN orders AS o ON c.id = o.customer_id
WHERE o.order_id IS NULL;`,
        },
        outputPreview: {
          columns: ['customer_name', 'email_address', 'order_id'],
          rows: [
            ['Kosal Keo', 'kosal@gmail.com', null],
            ['Chanthou Srey', 'chanthou@gmail.com', null]
          ],
          explanation: {
            en: 'Customers Kosal and Chanthou appear in the output with order_id = NULL because they have placed no orders.',
            km: 'អតិថិជន Kosal និង Chanthou បង្ហាញក្នុងលទ្ធផលជាមួយ order_id = NULL ព្រោះពួកគាត់មិនដែលទិញទំនិញឡើយ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE users (id INT, name TEXT);
CREATE TABLE orders (id INT, user_id INT);
INSERT INTO users VALUES (1, 'Dara'), (2, 'Bopha');
INSERT INTO orders VALUES (101, 1);

SELECT u.name, o.id FROM users u LEFT JOIN orders o ON u.id = o.user_id;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Bopha will appear with o.id = NULL because Bopha has no orders.', km: 'Bopha នឹងបង្ហាញជាមួយ o.id = NULL ព្រោះគ្មានការបញ្ជាទិញ។' }
          ]
        },
        quiz: [
          {
            id: 'm4-l3-q1',
            question: {
              en: 'In a LEFT JOIN, what values are populated for Table B columns when a row in Table A has no match?',
              km: 'នៅក្នុង LEFT JOIN តើតម្លៃអ្វីដែលត្រូវជំនួសក្នុងជួរឈរតារាង B នៅពេលជួរដេកតារាង A គ្មានទិន្នន័យត្រូវគ្នា?',
            },
            options: [
              { id: 'opt1', text: { en: 'NULL values', km: 'តម្លៃ NULL' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Zero (0)', km: 'លេខសូន្យ (0)' }, isCorrect: false },
              { id: 'opt3', text: { en: 'The row is omitted completely', km: 'ជួរដេកត្រូវលុបចោលទាំងស្រុង' }, isCorrect: false }
            ],
            explanation: {
              en: 'LEFT JOIN preserves all left table rows, substituting NULL for missing right table attributes.',
              km: 'LEFT JOIN រក្សាទុកគ្រប់ជួរដេកតារាងឆ្វេង ដោយជំនួស NULL សម្រាប់ជួរឈរតារាងស្តាំដែលគ្មានទិន្នន័យ។',
            }
          }
        ]
      },
      {
        id: 'm4-l4',
        moduleId: 'module-4',
        moduleNumber: 4,
        lessonNumber: 4,
        title: {
          en: 'FULL OUTER JOIN & CROSS JOIN',
          km: 'FULL OUTER JOIN និង CROSS JOIN (Cartesian Product)',
        },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        description: {
          en: 'Combining full set unions with FULL OUTER JOIN and generating Cartesian product matrix pairs with CROSS JOIN.',
          km: 'ការបូកបញ្ចូលទិន្នន័យទាំងអស់ជាមួយ FULL OUTER JOIN និងការបង្កើតបន្សំជួរដេកគ្រប់ករណីជាមួយ CROSS JOIN។',
        },
        explanation: {
          en: 'A FULL OUTER JOIN combines the results of both LEFT JOIN and RIGHT JOIN. It returns all records when there is a match in either left or right table records, filling NULLs wherever matches are missing on either side. Mathematically, it represents the full set union (A ∪ B). Conversely, a CROSS JOIN produces the Cartesian product of two tables, pairing every single row from Table A with every single row from Table B. If Table A has 10 rows and Table B has 10 rows, a CROSS JOIN generates 10 x 10 = 100 combination rows. CROSS JOIN is useful for generating matrix grid pairs (e.g., matching all product colors with all product sizes).',
          km: 'FULL OUTER JOIN បូកបញ្ចូលលទ្ធផលនៃ LEFT JOIN និង RIGHT JOIN បញ្ចូលគ្នា។ វាបង្វិលរាល់ជួរដេកទាំងអស់ឱ្យតែមានទិន្នន័យក្នុងតារាង A ឬ តារាង B ដោយជំនួស NULL ត្រង់ណាដែលគ្មានទិន្នន័យត្រូវគ្នា។ តាមផ្នែកគណិតវិទ្យា វាជា Set Union (A ∪ B)។ ចំណែកឯ CROSS JOIN បង្កើត Cartesian Product ដោយយកគ្រប់ជួរដេកនៃតារាង A ទៅផ្គូផ្គងជាមួយគ្រប់ជួរដេកនៃតារាង B។ ប្រសិនបើតារាង A មាន ១០ ជួរដេក ហើយតារាង B មាន ១០ ជួរដេក CROSS JOIN នឹងបង្កើតទិន្នន័យ ១០ x ១០ = ១០០ ជួរដេក។ គេប្រើ CROSS JOIN សម្រាប់បង្កើតបន្សំទំនិញ (ឧ. ផ្គូផ្គងគ្រប់ពណ៌ទំនិញ ជាមួយគ្រប់ទំហំទំនិញ)។',
        },
        diagram: {
          type: 'venn-full',
          caption: {
            en: 'Venn Diagram: FULL OUTER JOIN returns complete set union of Table A and Table B (A ∪ B)',
            km: 'Venn Diagram៖ FULL OUTER JOIN បង្វិលសំណុំទិន្នន័យទាំងស្រុងនៃតារាង A និង B (A ∪ B)',
          },
          svgData: {
            vennLabels: {
              left: 'Table A Unmatched',
              right: 'Table B Unmatched',
              center: 'Matched Records (FULL UNION)'
            }
          }
        },
        tutorial: {
          en: `### Comparison:
- **FULL OUTER JOIN**: Returns all rows from both tables, filling NULLs on missing sides.
- **CROSS JOIN**: Combines every row of A with every row of B ($M \\times N$ rows).

Let's test CROSS JOIN generating product size-color variant matrixes:`,
          km: `### ការប្រៀបធៀប៖
- **FULL OUTER JOIN**៖ បង្វិលគ្រប់ជួរដេកពីតារាងទាំងពីរ ដោយដាក់ NULL ត្រង់ណាគ្មានទិន្នន័យ។
- **CROSS JOIN**៖ ផ្គូផ្គងគ្រប់ជួរដេកនៃ A ជាមួយ B (លទ្ធផល = $M \\times N$ ជួរដេក)។`,
        },
        codeExample: {
          title: {
            en: 'Generating Product Variant Matrix with CROSS JOIN',
            km: 'ការបង្កើតបន្សំប្រភេទទំនិញ (Matrix) ជាមួយ CROSS JOIN',
          },
          description: {
            en: 'Pairing all available shirt colors with all available shirt sizes.',
            km: 'ការផ្គូផ្គងគ្រប់ពណ៌អាវ ជាមួយគ្រប់ទំហំអាវ។',
          },
          code: `SELECT 
  c.color_name,
  s.size_code
FROM colors AS c
CROSS JOIN sizes AS s;`,
        },
        outputPreview: {
          columns: ['color_name', 'size_code'],
          rows: [
            ['Red', 'S'],
            ['Red', 'M'],
            ['Red', 'L'],
            ['Blue', 'S'],
            ['Blue', 'M'],
            ['Blue', 'L']
          ],
          explanation: {
            en: 'The CROSS JOIN multiplied 2 colors by 3 sizes to generate all 6 matrix variant combinations.',
            km: 'CROSS JOIN បានគុណ ពណ៌ចំនួន ២ ជាមួយ ទំហំចំនួន ៣ បង្កើតបានជាបន្សំទំនិញសរុប ៦។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE x (val TEXT); CREATE TABLE y (num INT);
INSERT INTO x VALUES ('A'), ('B'); INSERT INTO y VALUES (1), (2);

SELECT x.val, y.num FROM x CROSS JOIN y;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: '2 rows in x multiplied by 2 rows in y produces 4 output rows.', km: '២ ជួរដេកក្នុង x គុណនឹង ២ ជួរដេកក្នុង y បង្កើតបាន ៤ ជួរដេកលទ្ធផល។' }
          ]
        },
        quiz: [
          {
            id: 'm4-l4-q1',
            question: {
              en: 'If Table A contains 5 rows and Table B contains 4 rows, how many total rows will a CROSS JOIN produce?',
              km: 'ប្រសិនបើតារាង A មាន ៥ ជួរដេក ហើយតារាង B មាន ៤ ជួរដេក តើ CROSS JOIN នឹងបង្កើតទិន្នន័យសរុបប៉ុន្មានជួរដេក?',
            },
            options: [
              { id: 'opt1', text: { en: '20 rows (5 x 4)', km: '២០ ជួរដេក (៥ x ៤)' }, isCorrect: true },
              { id: 'opt2', text: { en: '9 rows (5 + 4)', km: '៩ ជួរដេក (៥ + ៤)' }, isCorrect: false },
              { id: 'opt3', text: { en: '5 rows', km: '៥ ជួរដេក' }, isCorrect: false }
            ],
            explanation: {
              en: 'A CROSS JOIN produces the Cartesian product, multiplying the row counts of both tables (5 x 4 = 20).',
              km: 'CROSS JOIN បង្កើត Cartesian product ដោយយកចំនួនជួរដេកគុណចូលគ្នា (៥ x ៤ = ២០)។',
            }
          }
        ]
      },
      {
        id: 'm4-l5',
        moduleId: 'module-4',
        moduleNumber: 4,
        lessonNumber: 5,
        title: {
          en: 'Self Joins — Joining a Table to Itself',
          km: 'Self Join — ការភ្ជាប់តារាងទៅកាន់ខ្លួនវាផ្ទាល់',
        },
        durationMinutes: 20,
        difficulty: 'Advanced',
        description: {
          en: 'Querying hierarchical trees, organizational charts, and parent-child relationships within a single table.',
          km: 'ការទាញយកទិន្នន័យដែលមានរចនាសម្ព័ន្ធមែកធាង (Hierarchy) និងតារាងបុគ្គលិក-ប្រធាន ក្នុងតារាងតែមួយ។',
        },
        explanation: {
          en: 'A Self Join is a regular table join in which a table is joined with itself. Self joins are essential when a table contains a unary recursive relationship—where a foreign key in a row references the primary key of another row inside the same table. The classic use case is an organization employee table where each employee record contains a manager_id referencing the employee_id of their supervisor in the same table. To perform a self join, developers must assign distinct table aliases (e.g., employees AS emp JOIN employees AS mgr) to differentiate between the primary instance and referenced instance.',
          km: 'Self Join គឺជាការភ្ជាប់តារាងមួយទៅកាន់ខ្លួនវាផ្ទាល់។ គេប្រើប្រាស់ Self Join នៅពេលតារាងមួយមានទំនាក់ទំនងបង្វិលចូលខ្លួនឯង (Recursive Relationship) — គឺនៅពេល Foreign Key ក្នុងជួរដេកមួយ ចង្អុលទៅ Primary Key នៃជួរដេកមួយទៀតក្នុងតារាងដដែល។ ឧទាហរណ៍ជាក់ស្តែងគឺ តារាងបុគ្គលិក ដែលជួរឈរ manager_id ចង្អុលទៅកាន់ employee_id នៃប្រធានក្នុងតារាងដដែល។ ដើម្បីធ្វើ Self Join យើងត្រូវតែប្រើ Table Aliases ខុសគ្នា (ឧ. employees AS emp JOIN employees AS mgr) ដើម្បីកុំឱ្យច្រឡំ។',
        },
        diagram: {
          type: 'er-diagram',
          caption: {
            en: 'Self-referencing unary relationship: employee.manager_id -> employee.id',
            km: 'ទំនាក់ទំនងភ្ជាប់ខ្លួនឯង៖ employee.manager_id -> employee.id',
          },
          svgData: {
            nodes: [
              { id: 'emp', label: 'emp (Employee Instance)', subtext: 'id: 102, name: "Dara", manager_id: 101', x: 100, y: 100, type: 'primary' },
              { id: 'mgr', label: 'mgr (Manager Instance)', subtext: 'id: 101, name: "Sophea (Boss)"', x: 380, y: 100, type: 'secondary' },
            ],
            links: [
              { from: 'emp', to: 'mgr', label: 'Self Join FK Reference' }
            ]
          }
        },
        tutorial: {
          en: `### Self Join Pattern:
\`\`\`sql
SELECT 
  emp.full_name AS employee_name,
  mgr.full_name AS manager_name
FROM employees AS emp
LEFT JOIN employees AS mgr ON emp.manager_id = mgr.id;
\`\`\`

Let's test querying organizational supervisor trees using a Self Join:`,
          km: `### ទម្រង់ Self Join Pattern៖
\`\`\`sql
SELECT 
  emp.full_name AS employee_name,
  mgr.full_name AS manager_name
FROM employees AS emp
LEFT JOIN employees AS mgr ON emp.manager_id = mgr.id;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Querying Organizational Manager Relationships',
            km: 'ការទាញយកទិន្នន័យទំនាក់ទំនងរវាងបុគ្គលិក និងប្រធាន',
          },
          description: {
            en: 'Joining employees table to itself to resolve supervisor names.',
            km: 'ការភ្ជាប់តារាង employees ទៅកាន់ខ្លួនឯង ដើម្បីបង្ហាញឈ្មោះប្រធានផ្ទាល់។',
          },
          code: `SELECT 
  e.full_name AS staff_member,
  e.job_title,
  COALESCE(m.full_name, 'Top Executive / No Manager') AS supervisor
FROM staff AS e
LEFT JOIN staff AS m ON e.manager_id = m.id;`,
        },
        outputPreview: {
          columns: ['staff_member', 'job_title', 'supervisor'],
          rows: [
            ['Sophea Sok', 'CEO', 'Top Executive / No Manager'],
            ['Dara Ly', 'Engineering Lead', 'Sophea Sok'],
            ['Bopha Vonn', 'Senior Developer', 'Dara Ly']
          ],
          explanation: {
            en: 'The self join accurately matched each staff member to their supervisor in the same table.',
            km: 'Self join បានភ្ជាប់បុគ្គលិកនីមួយៗទៅកាន់ប្រធានរបស់ពួកគាត់ក្នុងតារាងតែមួយយ៉ាងត្រឹមត្រូវ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE emp (id INT, name TEXT, mgr_id INT);
INSERT INTO emp VALUES (1, 'Boss', NULL), (2, 'Worker', 1);

SELECT e.name AS worker, m.name AS boss 
FROM emp e LEFT JOIN emp m ON e.mgr_id = m.id;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Worker matches Boss via e.mgr_id = m.id.', km: 'Worker ភ្ជាប់ត្រូវចំ Boss តាមរយៈ e.mgr_id = m.id។' }
          ]
        },
        quiz: [
          {
            id: 'm4-l5-q1',
            question: {
              en: 'Why are Table Aliases MANDATORY when executing a Self Join in SQL?',
              km: 'ហេតុអ្វីបានជា Table Aliases ជាតម្រូវការចាំបាច់ដាច់ខាត នៅពេលធ្វើ Self Join ក្នុង SQL?',
            },
            options: [
              { id: 'opt1', text: { en: 'To distinguish between the left and right instances of the same table in queries', km: 'ដើម្បីបែងចែកឱ្យច្បាស់រវាងតារាងឆ្វេង និងស្តាំនៃតារាងតែមួយក្នុង query' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Because SQL prohibits table joins without aliases', km: 'ព្រោះ SQL ហាមមិនឱ្យ join ដោយគ្មាន alias' }, isCorrect: false }
            ],
            explanation: {
              en: 'Aliases resolve ambiguity when referencing columns from two instances of the same underlying table.',
              km: 'Alias ដោះស្រាយភាពមិនច្បាស់លាស់ នៅពេលទាញយកជួរឈរចេញពីតារាងតែមួយដែលត្រូវប្រើពីរដង។',
            }
          }
        ]
      },
      {
        id: 'm4-l6',
        moduleId: 'module-4',
        moduleNumber: 4,
        lessonNumber: 6,
        title: {
          en: 'Joining Three or More Tables',
          km: 'ការភ្ជាប់តារាងចាប់ពីបីឡើងទៅ (Multi-Table Joins)',
        },
        durationMinutes: 25,
        difficulty: 'Advanced',
        description: {
          en: 'Chaining multiple JOIN clauses sequentially to traverse complex relational entity graphs.',
          km: 'ការតភ្ជាប់បញ្ជា JOIN ច្រើនតំណាក់កាល ដើម្បីទាញយកទិន្នន័យពីតារាងច្រើនដែលទាក់ទងគ្នា។',
        },
        explanation: {
          en: 'In complex enterprise databases, answering a single business question often requires combining attributes from three, four, or more normalized tables. For example, generating an e-commerce invoice summary requires chaining orders -> order_items -> products -> categories -> customers. In SQL, multiple JOIN clauses are evaluated sequentially in chain order. The output result set of the first join becomes the left-hand input relation for the subsequent join clause. To maintain optimal query execution performance, developers should order joins logically and verify that appropriate foreign key indexes exist on join keys.',
          km: 'នៅក្នុងប្រព័ន្ធដាតាបេសធំៗ ការបង្កើតរបាយការណ៍មួយ ចាំបាច់ត្រូវទាញយកទិន្នន័យចេញពីតារាង ៣, ៤ ឬច្រើនជាងនេះ។ ឧទាហរណ៍ ការបង្កើតវិក្កយបត្រ E-commerce ត្រូវភ្ជាប់តារាង orders -> order_items -> products -> categories -> customers។ ក្នុង SQL បញ្ជា JOIN ច្រើន ត្រូវបានរត់តាមលំដាប់តំណាក់កាល។ លទ្ធផលនៃការភ្ជាប់តារាងទីមួយ នឹងក្លាយជាប្រភពសម្រាប់ភ្ជាប់ទៅតារាងបន្ទាប់ទៀត។ ដើម្បីឱ្យ Query រត់បានលឿន ត្រូវប្រាកដថាជួរឈរដែលយកមក JOIN មាន Index ត្រឹមត្រូវ។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'Multi-table join pipeline chaining 4 relational tables sequentially',
            km: 'ខ្សែច្រវាក់ភ្ជាប់តារាង multi-table join ចំនួន ៤ តារាង',
          },
          svgData: {
            nodes: [
              { id: 't1', label: 'customers', subtext: 'Base Table', x: 60, y: 100, type: 'primary' },
              { id: 't2', label: 'JOIN orders', subtext: 'FK: customer_id', x: 200, y: 100, type: 'secondary' },
              { id: 't3', label: 'JOIN order_items', subtext: 'FK: order_id', x: 360, y: 100, type: 'accent' },
              { id: 't4', label: 'JOIN products', subtext: 'FK: product_id', x: 500, y: 100, type: 'warning' },
            ],
            links: [
              { from: 't1', to: 't2' },
              { from: 't2', to: 't3' },
              { from: 't3', to: 't4' }
            ]
          }
        },
        tutorial: {
          en: `### Multi-Table Join Syntax:
\`\`\`sql
SELECT 
  c.name, o.order_date, p.product_name, oi.quantity
FROM customers AS c
JOIN orders AS o ON c.id = o.customer_id
JOIN order_items AS oi ON o.id = oi.order_id
JOIN products AS p ON oi.product_id = p.id;
\`\`\`

Let's test querying complete purchase order breakdowns across 4 tables:`,
          km: `### ទម្រង់ Multi-Table Join Syntax៖
\`\`\`sql
SELECT 
  c.name, o.order_date, p.product_name, oi.quantity
FROM customers AS c
JOIN orders AS o ON c.id = o.customer_id
JOIN order_items AS oi ON o.id = oi.order_id
JOIN products AS p ON oi.product_id = p.id;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Multi-Table E-Commerce Item Breakdown Query',
            km: 'Query បង្ហាញព័ត៌មានលម្អិតការបញ្ជាទិញភ្ជាប់ ៤ តារាង',
          },
          description: {
            en: 'Chaining customers, orders, items, and products into a single result set.',
            km: 'ការភ្ជាប់តារាង customers, orders, items, និង products ក្នុង Query តែមួយ។',
          },
          code: `SELECT 
  c.customer_name,
  o.id AS order_number,
  p.product_name,
  i.quantity,
  i.unit_price * i.quantity AS line_item_total
FROM customers AS c
JOIN orders AS o ON c.id = o.customer_id
JOIN order_items AS i ON o.id = i.order_id
JOIN products AS p ON i.product_id = p.id
ORDER BY o.id DESC;`,
        },
        outputPreview: {
          columns: ['customer_name', 'order_number', 'product_name', 'quantity', 'line_item_total'],
          rows: [
            ['Dara Sok', 1005, 'MacBook Pro 16"', 1, 2499.00],
            ['Dara Sok', 1005, 'USB-C Hub Multiport', 2, 90.00],
            ['Sophea Vonn', 1004, 'Mechanical Keyboard', 1, 129.00]
          ],
          explanation: {
            en: 'The multi-table join resolves keys across 4 tables, providing a detailed line-item invoice view.',
            km: 'Multi-table join បានភ្ជាប់ Key រវាង ៤ តារាង បង្ហាញជារបាយការណ៍លម្អិតនៃវិក្កយបត្រ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE c (id INT, name TEXT);
CREATE TABLE o (id INT, c_id INT);
CREATE TABLE p (id INT, o_id INT, title TEXT);

INSERT INTO c VALUES (1, 'Sok');
INSERT INTO o VALUES (10, 1);
INSERT INTO p VALUES (100, 10, 'Book SQL');

SELECT c.name, p.title FROM c JOIN o ON c.id=o.c_id JOIN p ON o.id=p.o_id;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Sequential joins link c -> o -> p smoothly.', km: 'ការភ្ជាប់តាមលំដាប់ c -> o -> p បង្ហាញលទ្ធផលត្រឹមត្រូវ។' }
          ]
        },
        quiz: [
          {
            id: 'm4-l6-q1',
            question: {
              en: 'In SQL, what determines the input dataset for the second JOIN clause in a 3-table join query?',
              km: 'នៅក្នុង SQL តើអ្វីជាប្រភពទិន្នន័យសម្រាប់បញ្ជា JOIN ទី២ ក្នុងការសរសេរ ៣ តារាង?',
            },
            options: [
              { id: 'opt1', text: { en: 'The combined intermediate result set produced by the first JOIN clause', km: 'សំណុំទិន្នន័យលទ្ធផលបណ្តោះអាសន្នដែលកើតចេញពីការ JOIN លើកទី១' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Only the original raw primary table', km: 'មានតែតារាងដើមដំបូងគេបង្អស់' }, isCorrect: false }
            ],
            explanation: {
              en: 'Joins execute sequentially; the second join operates on the intermediate relation returned by the first join.',
              km: 'Joins រត់តាមលំដាប់លំដោយ។ JOIN ទី២ ដំណើការលើលទ្ធផលបណ្តោះអាសន្ននៃការ JOIN ទី១។',
            }
          }
        ]
      },
      {
        id: 'm4-l7',
        moduleId: 'module-4',
        moduleNumber: 4,
        lessonNumber: 7,
        title: {
          en: 'Common Join Mistakes & Performance Pitfalls',
          km: 'កំហុសឆ្គងទូទៅក្នុងការ JOIN និងការការពារកុំឱ្យ Query ដើរយឺត',
        },
        durationMinutes: 20,
        difficulty: 'Advanced',
        description: {
          en: 'Avoiding accidental Cartesian products, missing ON conditions, fan-out duplicate counts, and missing indexes.',
          km: 'ការគេចវាងកំហុស Cartesian Products ការភ្លេចលក្ខខណ្ឌ ON ការរាប់ទិន្នន័យស្ទួន (Fan-out) និងការខ្វះ Index។',
        },
        explanation: {
          en: 'While joins are powerful, improper join logic can severely degrade database performance or produce incorrect business calculations. One major flaw is omitting the ON clause or supplying an incomplete join predicate, which silently degenerates the query into an accidental Cartesian product (CROSS JOIN), locking CPU and memory. Another common hazard is the "Fan-Out Effect"—when joining a 1:N table before performing aggregations causes sum totals to multiply exponentially due to duplicate rows. Always index foreign key columns used in ON conditions to allow the query planner to choose fast Hash or Merge join algorithms.',
          km: 'ទោះបីជា JOIN មានប្រយោជន៍ខ្លាំង ក៏ប៉ុន្តែការសរសេរមិនបានត្រឹមត្រូវ អាចធ្វើឱ្យដាតាបេសដើរយឺត ឬគណនាតួលេខខុសធ្ងន់ធ្ងរ។ កំហុសឆ្គងទី១ គឺការសរសេរភ្លេចលក្ខខណ្ឌ ON ដែលធ្វើឱ្យ Query ក្លាយជា Cartesian product ដោយអចេតនា ធ្វើឱ្យ Server គាំង។ កំហុសឆ្គងទី២ គឺ "Fan-Out Effect" ដែលកើតឡើងនៅពេលយើង JOIN តារាង 1:N មុនពេលបូកសរុប ធ្វើឱ្យផលបូកកើនឡើងគុណនឹងច្រើនដងដោយសារទិន្នន័យស្ទួន។ យើងត្រូវតែបង្កើត Index លើជួរឈរ Foreign Key ជានិច្ចដើម្បីឱ្យ Query រត់លឿន។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'Fan-out duplicate count explosion caused by joining one-to-many before aggregating',
            km: 'បញ្ហា Fan-out ធ្វើឱ្យទិន្នន័យកើនឡើងស្ទួនច្រើនដង ដោយសារការ JOIN តារាង 1:N មុនបូកសរុប',
          },
          svgData: {
            nodes: [
              { id: 'parent', label: 'Order $100 (1 Row)', subtext: 'Parent Record', x: 80, y: 100, type: 'primary' },
              { id: 'join', label: 'JOIN 3 Items', subtext: '1:N Fan-Out Multiplier', x: 280, y: 100, type: 'warning' },
              { id: 'result', label: 'Order Amount Duplicated x3 ($300)', subtext: '❌ Incorrect Sum Explosion', x: 480, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'parent', to: 'join' },
              { from: 'join', to: 'result' }
            ]
          }
        },
        tutorial: {
          en: `### Best Practices Checklist for Joins:
1. **Always explicitly write \`ON A.id = B.fk\`**.
2. **Index Foreign Keys**: Create indexes on join key columns.
3. **Prevent Fan-Out**: Aggregate child items *before* joining to parents if computing order totals.
4. **Use Explicit Aliases**: Always prefix columns with table alias (\`o.total\` not \`total\`).

Let's inspect how to write safe, clean joins:`,
          km: `### វិធានល្អៗសម្រាប់ការប្រើប្រាស់ JOIN (Best Practices)៖
១. **សរសេរលក្ខខណ្ឌ \`ON A.id = B.fk\` ឱ្យច្បាស់លាស់ជានិច្ច**។
២. **បង្កើត Index លើ Foreign Keys**៖ បង្កើត index លើជួរឈរដែលយកមក join។
៣. **ការពារ Fan-Out**៖ បូកសរុបទិន្នន័យតារាងកូនមុន មុនពេលយកមក JOIN ជាមួយតារាងមេ។
៤. **ប្រើប្រាស់ Table Alias**៖ ដាក់ Prefix ឈ្មោះតារាងមុខជួរឈរជានិច្ច (\`o.total\` មិនមែន \`total\`)។`,
        },
        codeExample: {
          title: {
            en: 'Avoiding Fan-Out with Pre-Aggregated CTE Subqueries',
            km: 'ការដោះស្រាយបញ្ហា Fan-Out ដោយប្រើ Pre-Aggregated Subquery',
          },
          description: {
            en: 'Aggregating order items first before joining to orders to prevent duplicate total calculation.',
            km: 'ការបូកសរុបទំនិញក្នុង Order Items មុន មុនពេលយកមក JOIN ជាមួយ Orders។',
          },
          code: `WITH item_totals AS (
  SELECT order_id, SUM(unit_price * quantity) AS calculated_sum
  FROM order_items
  GROUP BY order_id
)
SELECT 
  o.id AS order_id,
  o.order_date,
  it.calculated_sum
FROM orders AS o
JOIN item_totals AS it ON o.id = it.order_id;`,
        },
        outputPreview: {
          columns: ['order_id', 'order_date', 'calculated_sum'],
          rows: [
            [1001, '2026-03-01', 2589.00],
            [1002, '2026-03-02', 145.50]
          ],
          explanation: {
            en: 'Pre-aggregating item totals in a CTE eliminates duplicate row inflation during the parent join.',
            km: 'ការបូកសរុបទិន្នន័យមុនក្នុង CTE បានលុបបំបាត់បញ្ហាទិន្នន័យស្ទួន ធ្វើឱ្យផលបូកត្រឹមត្រូវ ១០០%។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE orders (id INT, total NUMERIC);
CREATE TABLE items (id INT, order_id INT, name TEXT);
INSERT INTO orders VALUES (1, 100);
INSERT INTO items VALUES (10, 1, 'Pen'), (11, 1, 'Paper');

SELECT o.id, COUNT(i.id) AS item_count FROM orders o JOIN items i ON o.id = i.order_id GROUP BY o.id;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Grouping by order ID correctly calculates 2 items for order 1.', km: 'ការ GROUP BY តាម order ID គណនាបាន ២ ទំនិញត្រឹមត្រូវសម្រាប់ order 1។' }
          ]
        },
        quiz: [
          {
            id: 'm4-l7-q1',
            question: {
              en: 'What causes the "Fan-Out Effect" when joining two tables in SQL?',
              km: 'តើអ្វីជាមូលហេតុដែលបង្កឱ្យមាន "Fan-Out Effect" នៅពេល JOIN តារាងពីរក្នុង SQL?',
            },
            options: [
              { id: 'opt1', text: { en: 'Joining a 1:N table duplicates parent rows for each matching child row, inflating aggregates if not grouped first', km: 'ការ JOIN តារាង 1:N ធ្វើឱ្យជួរដេកតារាងមេស្ទួនតាមចំនួនតារាងកូន ដែលធ្វើឱ្យផលបូកកើនឡើងខុស' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Using the WHERE clause instead of HAVING', km: 'ការប្រើបញ្ជា WHERE ជំនួស HAVING' }, isCorrect: false }
            ],
            explanation: {
              en: 'Fan-out multiplies parent rows for every matching child record, artificially inflating un-grouped SUM or COUNT aggregates.',
              km: 'Fan-out ធ្វើឱ្យជួរដេកតារាងមេស្ទួនតាមចំនួនជួរដេកកូន ដែលធ្វើឱ្យផលបូក SUM ឬ COUNT កើនឡើងខុសពីការពិត។',
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-5',
    moduleNumber: 5,
    title: {
      en: 'Module 5: Modifying Data & Transactions',
      km: 'មូឌុលទី ៥៖ ការកែប្រែទិន្នន័យ និងប្រធានប្រតិបត្តិការ (Data Modification & Transactions)',
    },
    description: {
      en: 'Mastering INSERT, UPDATE, DELETE, and transactional safety with BEGIN, COMMIT, ROLLBACK, and isolation integrity.',
      km: 'ស្ទាត់ជំនាញលើ INSERT, UPDATE, DELETE និងសុវត្ថិភាពប្រតិបត្តិការជាមួយ BEGIN, COMMIT, ROLLBACK និង ACID isolation។',
    },
    lessons: [
      {
        id: 'm5-l1',
        moduleId: 'module-5',
        moduleNumber: 5,
        lessonNumber: 1,
        title: {
          en: 'INSERT — Adding New Records',
          km: 'ការបន្ថែមទិន្នន័យថ្មីជាមួយបញ្ជា INSERT',
        },
        durationMinutes: 20,
        difficulty: 'Beginner',
        description: {
          en: 'Inserting single rows, multi-row batches, default values, and returning generated auto-increment primary keys.',
          km: 'ការបញ្ចូលទិន្នន័យមួយជួរដេក បញ្ចូលជាក្រុម (Batch) ការប្រើតម្លៃ Default និងការបង្វិល Primary Key ដែលបានបង្កើត។',
        },
        explanation: {
          en: 'The INSERT INTO statement appends new records into a target database table. In modern software applications, developers should always supply explicit column target lists (INSERT INTO table (col1, col2) VALUES (...)) to prevent breakage if table schema ordering changes later. High-performance backend services utilize multi-row batch inserts (inserting hundreds of tuples in a single SQL statement) to drastically reduce network round-trips to the database server. PostgreSQL and modern RDBMSs support the RETURNING clause (e.g., RETURNING id), returning generated primary keys immediately without issuing an extra SELECT query.',
          km: 'បញ្ជា INSERT INTO ត្រូវបានប្រើដើម្បីបន្ថែមទិន្នន័យថ្មីទៅក្នុងតារាង។ ក្នុងការអភិវឌ្ឍសូហ្វវែរ យើងគួរតែប្រកាសឈ្មោះជួរឈរឱ្យច្បាស់លាស់ជានិច្ច (INSERT INTO table (col1, col2) VALUES (...)) ដើម្បីការពារកុំឱ្យមាន Error នៅពេលរចនាសម្ព័ន្ធតារាងប្រែប្រួល។ សម្រាប់ប្រព័ន្ធដែលមានទិន្នន័យច្រើន គេប្រើប្រាស់ Multi-row Batch Insert (បញ្ចូលទិន្នន័យរាប់រយក្នុង Query តែមួយ) ដើម្បីបង្កើនល្បឿន និងកាត់បន្ថយការតភ្ជាប់ទៅ Server។ PostgreSQL ក៏មានបំពាក់នូវបញ្ជា RETURNING id សម្រាប់បង្វិល ID ដែលបានបង្កើតថ្មីភ្លាមៗដោយមិនបាច់សរសេរ SELECT ថែមមួយទៀតឡើយ។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'INSERT Execution appending tuple into table and returning generated surrogate key',
            km: 'ដំណើរការ INSERT បន្ថែមទិន្នន័យទៅក្នុងតារាង និងបង្វិល ID ថ្មីមកវិញ',
          },
          svgData: {
            nodes: [
              { id: 'tuple', label: 'New Record Data', subtext: '("Laptop", $1200)', x: 80, y: 100, type: 'primary' },
              { id: 'insert', label: 'INSERT INTO products ... RETURNING id', subtext: 'Disk Storage Append', x: 280, y: 100, type: 'secondary' },
              { id: 'returned', label: 'Returned Generated ID: 105', subtext: 'Immediate Key Assignment', x: 480, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'tuple', to: 'insert' },
              { from: 'insert', to: 'returned' }
            ]
          }
        },
        tutorial: {
          en: `### Multi-Row Batch Insert Syntax:
\`\`\`sql
INSERT INTO categories (category_name, is_active) 
VALUES 
  ('Laptops', TRUE),
  ('Tablets', TRUE),
  ('Accessories', FALSE)
RETURNING category_id, category_name;
\`\`\`

Let's execute a multi-row insert and inspect returned keys:`,
          km: `### ទម្រង់ Multi-Row Batch Insert Syntax៖
\`\`\`sql
INSERT INTO categories (category_name, is_active) 
VALUES 
  ('Laptops', TRUE),
  ('Tablets', TRUE),
  ('Accessories', FALSE)
RETURNING category_id, category_name;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Batch Inserting Products with Key Return',
            km: 'ការបញ្ចូលទិន្នន័យច្រើនជួរដេក និងការបង្វិល Key មកវិញ',
          },
          description: {
            en: 'Inserting multiple product rows and returning generated IDs.',
            km: 'ការបញ្ចូលទំនិញច្រើនក្នុងពេលតែមួយ និងទាញយក ID ដែលបង្កើតបាន។',
          },
          code: `INSERT INTO products (product_name, unit_price, stock_quantity)
VALUES 
  ('Ergonomic Mouse', 35.00, 100),
  ('USB-C Dongle', 15.00, 250)
RETURNING id, product_name, created_at;`,
        },
        outputPreview: {
          columns: ['id', 'product_name', 'created_at'],
          rows: [
            [101, 'Ergonomic Mouse', '2026-08-03 14:00:00'],
            [102, 'USB-C Dongle', '2026-08-03 14:00:00']
          ],
          explanation: {
            en: 'The database inserted both records and immediately returned generated surrogate keys and timestamp defaults.',
            km: 'ដាតាបេសបានបញ្ចូលទិន្នន័យទាំងពីរ ហើយបង្វិលមកវិញនូវ ID និង Timestamp បង្កើតថ្មីភ្លាមៗ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE tags (id SERIAL PRIMARY KEY, tag_name TEXT);

INSERT INTO tags (tag_name) VALUES ('SQL'), ('PostgreSQL') RETURNING *;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'RETURNING * outputs the inserted rows including generated IDs.', km: 'RETURNING * បង្ហាញទិន្នន័យដែលបានបញ្ចូលរួមទាំង ID ស្វ័យប្រវត្តិ។' }
          ]
        },
        quiz: [
          {
            id: 'm5-l1-q1',
            question: {
              en: 'What is the purpose of the RETURNING clause in an INSERT statement?',
              km: 'តើបញ្ជា RETURNING ក្នុងអត្ថបទ INSERT មានប្រយោជន៍អ្វី?',
            },
            options: [
              { id: 'opt1', text: { en: 'To immediately return generated primary keys or default values without an extra SELECT query', km: 'ដើម្បីបង្វិល Primary Key ឬតម្លៃ Default ដែលទើបបង្កើតភ្លាមៗ ដោយមិនបាច់សរសេរ SELECT ថែម' }, isCorrect: true },
              { id: 'opt2', text: { en: 'To undo the insert operation', km: 'ដើម្បីលុបចោលប្រតិបត្តិការបញ្ចូលទិន្នន័យ' }, isCorrect: false }
            ],
            explanation: {
              en: 'RETURNING eliminates the need for a follow-up SELECT query to retrieve auto-generated IDs.',
              km: 'RETURNING លុបបំបាត់ការសរសេរ SELECT មួយទៀត ដើម្បីទាញយក ID ដែលទើបបង្កើត។',
            }
          }
        ]
      },
      {
        id: 'm5-l2',
        moduleId: 'module-5',
        moduleNumber: 5,
        lessonNumber: 2,
        title: {
          en: 'UPDATE — Modifying Existing Data Safely',
          km: 'ការកែប្រែទិន្នន័យដោយសុវត្ថិភាពជាមួយ UPDATE',
        },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        description: {
          en: 'Modifying table column values, using conditional expressions, and avoiding catastrophic un-scoped updates.',
          km: 'ការកែប្រែតម្លៃជួរឈរ ការប្រើលក្ខខណ្ឌច្បាស់លាស់ និងការការពារកុំឱ្យ UPDATE ជ្រុលប៉ះពាល់ទិន្នន័យទាំងអស់។',
        },
        explanation: {
          en: 'The UPDATE statement alters existing attribute values across one or more rows in a table. The single most vital safety rule when executing an UPDATE statement is ensuring a precise WHERE clause is attached. Omitting the WHERE clause causes the database engine to update EVERY SINGLE ROW in the entire table unconditionally, overwriting critical data. In production environments, developers mitigate this risk by testing UPDATE queries inside transactional blocks (BEGIN; UPDATE ...; ROLLBACK;) or executing a SELECT query with the identical WHERE predicate prior to running the UPDATE.',
          km: 'បញ្ជា UPDATE ត្រូវបានប្រើដើម្បីកែប្រែទិន្នន័យដែលមានស្រាប់ក្នុងតារាង។ វិធានសុវត្ថិភាពសំខាន់បំផុតទី១ គឺត្រូវតែមានបញ្ជា WHERE ជាក់លាក់ជានិច្ច។ ការសរសេរ UPDATE ដោយគ្មាន WHERE នឹងធ្វើឱ្យដាតាបេសកែប្រែទិន្នន័យ គ្រប់ជួរដេកទាំងអស់ ក្នុងតារាងដោយគ្មានលើកលែង ដែលបណ្តាលឱ្យបាត់បង់ទិន្នន័យធ្ងន់ធ្ងរ។ ក្នុងប្រព័ន្ធពិត អ្នកជំនាញតែងតែធ្វើការ Test UPDATE ក្នុង Transaction (BEGIN; UPDATE ...; ROLLBACK;) ឬរត់ SELECT មើលទិន្នន័យជាមុនសិន មុននឹងសម្រេចចិត្ត UPDATE។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'Safe UPDATE Pipeline guarded by WHERE primary key predicate',
            km: 'ដំណើរការ UPDATE ប្រកបដោយសុវត្ថិភាព ការពារដោយលក្ខខណ្ឌ WHERE Primary Key',
          },
          svgData: {
            nodes: [
              { id: 'target', label: 'Target: UPDATE products SET price = 80', subtext: 'Modification Intended', x: 80, y: 100, type: 'primary' },
              { id: 'where', label: 'WHERE id = 501', subtext: 'Exact Primary Key Guard', x: 280, y: 100, type: 'warning' },
              { id: 'applied', label: '1 Row Updated', subtext: 'Safe Isolated Modification', x: 480, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'target', to: 'where' },
              { from: 'where', to: 'applied' }
            ]
          }
        },
        tutorial: {
          en: `### Safe UPDATE Syntax:
\`\`\`sql
UPDATE products 
SET unit_price = 49.99, stock_quantity = stock_quantity + 10
WHERE id = 101;
\`\`\`

Let's test updating price and stock level safely:`,
          km: `### ទម្រង់ UPDATE ប្រកបដោយសុវត្ថិភាព៖
\`\`\`sql
UPDATE products 
SET unit_price = 49.99, stock_quantity = stock_quantity + 10
WHERE id = 101;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Updating Inventory Stock and Status',
            km: 'ការធ្វើបច្ចុប្បន្នភាពស្តុកទំនិញ និងស្ថានភាព',
          },
          description: {
            en: 'Modifying price and incrementing stock for specific product ID.',
            km: 'ការកែប្រែតម្លៃ និងបង្កើនចំនួនស្តុកសម្រាប់ទំនិញជាក់លាក់។',
          },
          code: `UPDATE inventory
SET 
  unit_price = 119.99,
  stock_quantity = stock_quantity + 50,
  updated_at = CURRENT_TIMESTAMP
WHERE id = 42
RETURNING id, unit_price, stock_quantity, updated_at;`,
        },
        outputPreview: {
          columns: ['id', 'unit_price', 'stock_quantity', 'updated_at'],
          rows: [
            [42, 119.99, 150, '2026-08-03 14:15:00']
          ],
          explanation: {
            en: 'Only row ID 42 was updated; stock was incremented by 50 and price set to 119.99.',
            km: 'មានតែជួរដេក ID 42 ប៉ុណ្ណោះដែលត្រូវកែប្រែ៖ ស្តុកកើនឡើង ៥០ និងតម្លៃប្តូរទៅ ១១៩.៩៩។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE users (id INT PRIMARY KEY, points INT);
INSERT INTO users VALUES (1, 100), (2, 200);

UPDATE users SET points = points + 50 WHERE id = 1;
SELECT * FROM users;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'User 1 points increase from 100 to 150; User 2 remains 200.', km: 'User 1 ពិន្ទុកើនពី ១០០ ទៅ ១៥០; User 2 នៅរក្សា ២០០ ដដែល។' }
          ]
        },
        quiz: [
          {
            id: 'm5-l2-q1',
            question: {
              en: 'What happens if an UPDATE statement is executed WITHOUT a WHERE clause?',
              km: 'តើមានអ្វីកើតឡើង ប្រសិនបើបញ្ជា UPDATE ត្រូវរត់ដោយគ្មានបញ្ជា WHERE?',
            },
            options: [
              { id: 'opt1', text: { en: 'Every single row in the entire table will be updated unconditionally', km: 'គ្រប់ជួរដេកទាំងអស់ក្នុងតារាងនឹងត្រូវកែប្រែទាំងអស់ដោយគ្មានលើកលែង' }, isCorrect: true },
              { id: 'opt2', text: { en: 'The database rejects the query automatically', km: 'ដាតាបេសបដិសេធ query ដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
            ],
            explanation: {
              en: 'Without a WHERE filter predicate, UPDATE applies the column modifications across all table rows.',
              km: 'បើគ្មាន WHERE ចម្រោះទេ UPDATE នឹងអនុវត្តការកែប្រែលើគ្រប់ជួរដេកក្នុងតារាងទាំងអស់។',
            }
          }
        ]
      },
      {
        id: 'm5-l3',
        moduleId: 'module-5',
        moduleNumber: 5,
        lessonNumber: 3,
        title: {
          en: 'DELETE — Removing Data Safely',
          km: 'ការលុបទិន្នន័យដោយសុវត្ថិភាពជាមួយ DELETE (vs TRUNCATE)',
        },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        description: {
          en: 'Deleting specified table rows safely, soft deletion patterns (is_deleted flag), and TRUNCATE differences.',
          km: 'ការលុបជួរដេកដែលបានកំណត់ បច្ចេកទេស Soft Delete (is_deleted) និងភាពខុសគ្នារវាង DELETE និង TRUNCATE។',
        },
        explanation: {
          en: 'The DELETE statement removes specific rows matching a WHERE clause from a table. Like UPDATE, executing a DELETE statement without a WHERE predicate wipes all records in the table. In modern software architecture, production systems often prefer Soft Deletion (setting an "is_deleted = TRUE" or "deleted_at = TIMESTAMP" column) rather than hard DELETE, preserving historical audit trails and enabling accidental recovery. When the total removal of all table rows is intentionally required, TRUNCATE TABLE is vastly faster than DELETE because it deallocates data pages directly rather than logging individual row deletions.',
          km: 'បញ្ជា DELETE ត្រូវបានប្រើដើម្បីលុបជួរដេកជាក់លាក់ចេញពីតារាង។ ដូចគ្នានឹង UPDATE ដែរ ការលុបដោយគ្មាន WHERE នឹងលុបទិន្នន័យចោលទាំងអស់ក្នុងតារាង។ ក្នុងប្រព័ន្ធទំនើប គេនិយមប្រើបច្ចេកទេស Soft Delete (ការប្តូររង់ "is_deleted = TRUE" ឬ "deleted_at = TIMESTAMP") ជំនួសឱ្យការ Hard Delete ព្រោះវាជួយរក្សាប្រវត្តិនៃការលុប និងអាច Restore ទិន្នន័យមកវិញបានប្រសិនបើច្រឡំ។ ប៉ុន្តែប្រសិនបើចង់លុបទិន្នន័យទាំងអស់ក្នុងតារាងចោលភ្លាមៗ បញ្ជា TRUNCATE TABLE មានល្បឿនលឿនជាង DELETE ឆ្ងាយណាស់ ព្រោះវាលុប Disk Pages ផ្ទាល់តែម្តង។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'Hard DELETE vs Soft DELETE (is_deleted boolean flag update)',
            km: 'ការប្រៀបធៀប Hard DELETE និង Soft DELETE (ការប្រើប្រាស់ flag is_deleted)',
          },
          svgData: {
            nodes: [
              { id: 'hard', label: 'Hard DELETE FROM users WHERE id=5', subtext: 'Row Permanently Erased from Disk', x: 80, y: 100, type: 'warning' },
              { id: 'soft', label: 'Soft DELETE: UPDATE users SET is_deleted=TRUE', subtext: 'Preserves Record & Audit Trail', x: 380, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### DELETE vs TRUNCATE:

| Feature | DELETE FROM table | TRUNCATE TABLE |
| :--- | :--- | :--- |
| **WHERE Clause** | ✅ Allowed | ❌ Not Allowed |
| **Speed** | Slower (Row by row logging) | Blazing Fast (Page deallocation) |
| **Transaction Rollback** | Fully Rollbackable | Rollbackable in PostgreSQL |
| **Audit Logs** | Triggers fire per row | Triggers do not fire |

Let's test soft deletion in SQL:`,
          km: `### ការប្រៀបធៀប DELETE និង TRUNCATE៖

| លក្ខណៈ | DELETE FROM table | TRUNCATE TABLE |
| :--- | :--- | :--- |
| **បញ្ជា WHERE** | ✅ ប្រើបាន | ❌ ប្រើមិនបាន |
| **ល្បឿន** | យឺតជាង (លុបម្តងមួយជួរដេក) | លឿនខ្លាំង (លុប Disk Page ផ្ទាល់) |
| **Rollback** | អាច Rollback មកវិញបាន | អាច Rollback បានលើ PostgreSQL |`,
        },
        codeExample: {
          title: {
            en: 'Implementing Production Soft Delete Pattern',
            km: 'ការសរសេរប្រព័ន្ធ Soft Delete សម្រាប់ប្រព័ន្ធផលិតកម្ម',
          },
          description: {
            en: 'Setting deleted_at timestamp instead of permanently purging table row.',
            km: 'ការកំណត់ Timestamp ក្នុង deleted_at ជំនួសឱ្យការលុបជួរដេកចោលជាអចិន្ត្រៃយ៍។',
          },
          code: `UPDATE accounts 
SET 
  is_active = FALSE,
  deleted_at = CURRENT_TIMESTAMP
WHERE id = 88;

-- Active accounts view query
SELECT * FROM accounts WHERE deleted_at IS NULL;`,
        },
        outputPreview: {
          columns: ['id', 'account_name', 'is_active', 'deleted_at'],
          rows: [
            [88, 'Old Test Account', false, '2026-08-03 14:20:00']
          ],
          explanation: {
            en: 'The row is preserved safely for audit history while queries filtering "deleted_at IS NULL" treat it as removed.',
            km: 'ជួរដេកត្រូវបានរក្សាទុកដោយសុវត្ថិភាពសម្រាប់ Audit ខណៈ Query ទូទៅ "deleted_at IS NULL" នឹងមិនបង្ហាញឡើយ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE temp_logs (id INT, msg TEXT);
INSERT INTO temp_logs VALUES (1, 'Error 1'), (2, 'Error 2');

DELETE FROM temp_logs WHERE id = 1;
SELECT * FROM temp_logs;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Only ID 1 is deleted; ID 2 remains in the table.', km: 'មានតែ ID 1 ប៉ុណ្ណោះដែលត្រូវលុប; ID 2 នៅរក្សាដដែល។' }
          ]
        },
        quiz: [
          {
            id: 'm5-l3-q1',
            question: {
              en: 'Why do production enterprise applications prefer Soft Deletion over hard DELETE statements?',
              km: 'ហេតុអ្វីបានជាប្រព័ន្ធ Enterprise ភាគច្រើននិយមប្រើ Soft Deletion ជំនួសឱ្យការប្រើ hard DELETE?',
            },
            options: [
              { id: 'opt1', text: { en: 'Soft deletion maintains audit history trails and allows accidental deletion recovery', km: 'Soft deletion រក្សាទុកប្រវត្តិនៃការលុបសម្រាប់ Audit និងអាច Restore មកវិញបានប្រសិនបើច្រឡំ' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Hard DELETE statement is forbidden in PostgreSQL', km: 'Hard DELETE ត្រូវគេហាមឃាត់ក្នុង PostgreSQL' }, isCorrect: false }
            ],
            explanation: {
              en: 'Soft deletion preserves audit trails and protects against accidental unrecoverable data loss.',
              km: 'Soft deletion រក្សាប្រវត្តិ Audit និងការពារការបាត់បង់ទិន្នន័យដោយអចេតនា។',
            }
          }
        ]
      },
      {
        id: 'm5-l4',
        moduleId: 'module-5',
        moduleNumber: 5,
        lessonNumber: 4,
        title: {
          en: 'Transactions — BEGIN, COMMIT, ROLLBACK',
          km: 'ប្រធានប្រតិបត្តិការ (Transactions — BEGIN, COMMIT, ROLLBACK)',
        },
        durationMinutes: 25,
        difficulty: 'Advanced',
        description: {
          en: 'Ensuring ACID atomicity in banking transfers and multi-statement operations with transactional safety.',
          km: 'ការធានា ACID Atomicity ក្នុងប្រព័ន្ធទូទាត់ប្រាក់ធនាគារ និងប្រតិបត្តិការច្រើនកូដ ជាមួយសុវត្ថិភាព Transaction។',
        },
        explanation: {
          en: 'A Database Transaction is a logical unit of work executing one or more SQL statements atomically. ACID Atomicity mandates an "all-or-nothing" execution model: either every statement inside the transaction succeeds and is permanently persisted via COMMIT, or if any error occurs, the entire transaction is undone via ROLLBACK, reverting the database to its exact pre-transaction state. Banking fund transfers are the classic example: deducting money from Account A and adding money to Account B MUST happen atomically inside a transaction; if the system crashes midway, ROLLBACK restores Account A’s balance.',
          km: 'Database Transaction គឺជាបណ្តុំនៃបញ្ជា SQL មួយឬច្រើនដែលត្រូវបានដំណើការជាឯកតាអតូមិកតែមួយ (Atomic Unit)។ គោលការណ៍ ACID Atomicity តម្រូវឱ្យរត់តាមវិធាន "ទាំងអស់ ឬគ្មានសោះ" (All-or-Nothing)៖ ពោលគឺរាល់បញ្ជា SQL ទាំងអស់ក្នុង Transaction ត្រូវតែជោគជ័យទាំងអស់ រួចត្រូវបានរក្សាទុកជាអចិន្ត្រៃយ៍ដោយ COMMIT ឬប្រសិនបើមាន Error តែមួយកើតឡើង ប្រព័ន្ធនឹងលុបចោលប្រតិបត្តិការទាំងអស់វិញភ្លាមៗតាមរយៈ ROLLBACK ដោយស្តារទិន្នន័យទៅកាន់ស្ថានភាពដើម ១០០%។ ឧទាហរណ៍ ការផ្ទេរប្រាក់ធនាគារ៖ ដកប្រាក់ពីគណនី A និងបន្ថែមប្រាក់ទៅគណនី B ត្រូវតែស្ថិតក្នុង Transaction តែមួយជានិច្ច។',
        },
        diagram: {
          type: 'transaction',
          caption: {
            en: 'Transaction Lifecycle: BEGIN -> Statements -> COMMIT (persist) or ROLLBACK (revert)',
            km: 'វដ្តជីវិត Transaction៖ BEGIN -> បញ្ជា SQL -> COMMIT (រក្សាទុក) ឬ ROLLBACK (លុបចោលវិញ)',
          },
          svgData: {
            nodes: [
              { id: 'begin', label: 'BEGIN TRANSACTION', subtext: 'Open Atomic Block', x: 60, y: 100, type: 'primary' },
              { id: 'step1', label: 'Deduct Acc A (-$100)', subtext: 'Uncommitted In-Memory', x: 220, y: 100, type: 'secondary' },
              { id: 'step2', label: 'Add Acc B (+$100)', subtext: 'Uncommitted In-Memory', x: 380, y: 100, type: 'secondary' },
              { id: 'commit', label: 'COMMIT / ROLLBACK', subtext: 'All-or-Nothing Resolution', x: 520, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'begin', to: 'step1' },
              { from: 'step1', to: 'step2' },
              { from: 'step2', to: 'commit' }
            ]
          }
        },
        tutorial: {
          en: `### Transaction Flow:
\`\`\`sql
BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- If checks pass:
COMMIT;

-- If error occurs:
-- ROLLBACK;
\`\`\`

Let's test an atomic banking transfer transaction:`,
          km: `### ដំណើរការ Transaction៖
\`\`\`sql
BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- ប្រសិនបើត្រឹមត្រូវទាំងអស់៖
COMMIT;

-- ប្រសិនបើមាន Error៖
-- ROLLBACK;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Executing Atomic Bank Transfer Transaction',
            km: 'ការអនុវត្តការផ្ទេរប្រាក់ធនាគារប្រកបដោយសុវត្ថិភាព Atomicity',
          },
          description: {
            en: 'Wrapping multi-table update sequence in transaction block with COMMIT.',
            km: 'ការរុំបញ្ជា UPDATE ច្រើនតារាងក្នុង Transaction Block ជាមួយ COMMIT។',
          },
          code: `BEGIN;

-- Step 1: Deduct from Sender
UPDATE bank_accounts 
SET balance = balance - 250.00 
WHERE account_no = 'KH-ABA-001' AND balance >= 250.00;

-- Step 2: Credit to Recipient
UPDATE bank_accounts 
SET balance = balance + 250.00 
WHERE account_no = 'KH-ACLEDA-002';

-- Step 3: Record Audit Log
INSERT INTO transaction_logs (sender, recipient, amount)
VALUES ('KH-ABA-001', 'KH-ACLEDA-002', 250.00);

COMMIT;`,
        },
        outputPreview: {
          columns: ['status', 'transaction_state'],
          rows: [
            ['COMMIT', 'Transaction successfully committed. All 3 state changes written to disk WAL log.']
          ],
          explanation: {
            en: 'All 3 operations succeeded atomically; changes were permanently committed to disk storage.',
            km: 'ប្រតិបត្តិការទាំង ៣ បានជោគជ័យជាមួយគ្នា ហើយទិន្នន័យត្រូវបានរក្សាទុកលើ Disk ជាអចិន្ត្រៃយ៍។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE wallet (id INT, balance NUMERIC);
INSERT INTO wallet VALUES (1, 500);

BEGIN;
UPDATE wallet SET balance = balance - 100 WHERE id = 1;
ROLLBACK;

SELECT * FROM wallet;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'After ROLLBACK, balance reverts to original 500.', km: 'បន្ទាប់ពី ROLLBACK ប្រាក់ក្នុង wallet ត្រឡប់ទៅ ៥០០ ដើមវិញ។' }
          ]
        },
        quiz: [
          {
            id: 'm5-l4-q1',
            question: {
              en: 'What does the ROLLBACK command do during an active database transaction?',
              km: 'តើបញ្ជា ROLLBACK ធ្វើអ្វីខ្លះក្នុងពេលដំណើការ Transaction?',
            },
            options: [
              { id: 'opt1', text: { en: 'Cancels all modifications made inside the current transaction block, reverting data to the state prior to BEGIN', km: 'លុបចោលរាល់ការកែប្រែទាំងអស់ក្នុង transaction ហើយស្តារទិន្នន័យទៅស្ថានភាពដើមវិញ' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Saves half of the updates to disk', km: 'រក្សាទុកទិន្នន័យពាក់កណ្តាលលើ disk' }, isCorrect: false }
            ],
            explanation: {
              en: 'ROLLBACK discards all uncommitted modifications in the transaction, maintaining atomicity.',
              km: 'ROLLBACK បោះបង់ចោលការកែប្រែទាំងអស់ក្នុង Transaction ដើម្បីធានានូវ Atomicity។',
            }
          }
        ]
      },
      {
        id: 'm5-l5',
        moduleId: 'module-5',
        moduleNumber: 5,
        lessonNumber: 5,
        title: {
          en: 'Data Integrity & Check Constraints',
          km: 'ការការពារសុវត្ថិភាពទិន្នន័យជាមួយ CHECK & UNIQUE Constraints',
        },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        description: {
          en: 'Enforcing business logic rules directly inside the database using CHECK, UNIQUE, NOT NULL, and DEFAULT constraints.',
          km: 'ការកំណត់វិធានអាជីវកម្មផ្ទាល់ក្នុងដាតាបេស ដោយប្រើប្រាស់លក្ខខណ្ឌ CHECK, UNIQUE, NOT NULL, និង DEFAULT។',
        },
        explanation: {
          en: 'While application code validates user inputs on the frontend and API layers, enforcing Data Integrity directly inside the database schema provides the ultimate defense-in-depth guarantee. Database constraints enforce business invariant rules regardless of which application, microservice, or script attempts to modify data. Key constraints include: NOT NULL (prohibits missing values), UNIQUE (prevents duplicates), CHECK (validates range conditions like "balance >= 0" or "age >= 18"), and DEFAULT (supplies fallback values automatically).',
          km: 'ទោះបីជាកម្មវិធី Frontend និង API ធ្វើការពិនិត្យទិន្នន័យ (Validation) ក៏ដោយ ប៉ុន្តែការកំណត់ Data Integrity Direct ក្នុង Schema ដាតាបេស គឺជាការការពាររឹងមាំបំផុតចុងក្រោយ។ លក្ខខណ្ឌដាតាបេស (Constraints) បង្ខំឱ្យទិន្នន័យរត់តាមវិធានអាជីវកម្ម ដោយមិនខ្វល់ថាកម្មវិធីណាជាអ្នកបញ្ចូលឡើយ។ លក្ខខណ្ឌសំខាន់ៗរួមមាន៖ NOT NULL (ហាមទទេ), UNIQUE (ហាមជាន់គ្នា), CHECK (ពិនិត្យលក្ខខណ្ឌលេខដូចជា "balance >= 0" ឬ "age >= 18") និង DEFAULT (ផ្តល់តម្លៃជំនួសស្វ័យប្រវត្តិ)។',
        },
        diagram: {
          type: 'security',
          caption: {
            en: 'Database Engine Constraint Barrier catching invalid data inputs at schema level',
            km: 'រំភើបការពារ Constraint Barrier ក្នុងដាតាបេស ទប់ស្កាត់ទិន្នន័យខុសលក្ខខណ្ឌ',
          },
          svgData: {
            nodes: [
              { id: 'bad_input', label: 'Insert: balance = -50.00', subtext: 'Invalid Input Attempt', x: 80, y: 100, type: 'warning' },
              { id: 'check', label: 'CHECK (balance >= 0)', subtext: 'Constraint Engine Gate', x: 280, y: 100, type: 'primary' },
              { id: 'reject', label: '❌ Transaction Aborted', subtext: 'Check Constraint Violation', x: 480, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'bad_input', to: 'check' },
              { from: 'check', to: 'reject' }
            ]
          }
        },
        tutorial: {
          en: `### Constraint Declaration Example:
\`\`\`sql
CREATE TABLE user_accounts (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  age INT CHECK (age >= 18),
  account_balance NUMERIC(10,2) DEFAULT 0.00 CHECK (account_balance >= 0.00)
);
\`\`\`

Let's test constraint enforcement when inserting invalid balance:`,
          km: `### ទម្រង់នៃការប្រកាស Constraint៖
\`\`\`sql
CREATE TABLE user_accounts (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  age INT CHECK (age >= 18),
  account_balance NUMERIC(10,2) DEFAULT 0.00 CHECK (account_balance >= 0.00)
);
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Creating Schema with Robust Constraints',
            km: 'ការបង្កើត Schema ជាមួយ Constraints ការពារទិន្នន័យ',
          },
          description: {
            en: 'Defining CHECK constraints for positive prices and valid email formats.',
            km: 'ការកំណត់លក្ខខណ្ឌ CHECK សម្រាប់តម្លៃវិជ្ជមាន និងទម្រង់ Email។',
          },
          code: `CREATE TABLE ecommerce_products (
  id SERIAL PRIMARY KEY,
  sku_code VARCHAR(50) NOT NULL UNIQUE,
  price NUMERIC(10,2) NOT NULL CHECK (price > 0.00),
  discount_percent INT DEFAULT 0 CHECK (discount_percent BETWEEN 0 AND 100)
);`,
        },
        outputPreview: {
          columns: ['status', 'schema_validation'],
          rows: [
            ['SUCCESS', 'Table created with active UNIQUE(sku_code) and CHECK(price > 0) constraints.']
          ],
          explanation: {
            en: 'Any attempt to insert price <= 0 or discount > 100 will be instantly rejected by the database.',
            km: 'រាល់ការព្យាយាមបញ្ចូល price <= 0 ឬ discount > 100 នឹងត្រូវដាតាបេសបដិសេធភ្លាមៗ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE account (id INT, balance NUMERIC CHECK (balance >= 0));
INSERT INTO account VALUES (1, 100);

-- Try inserting negative balance:
-- INSERT INTO account VALUES (2, -50);`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Uncommenting negative balance insert will trigger a Check Constraint Violation error.', km: 'ការលុបសញ្ញា -- លើប្រាក់អវិជ្ជមាន នឹងបង្កើត error Check Constraint Violation។' }
          ]
        },
        quiz: [
          {
            id: 'm5-l5-q1',
            question: {
              en: 'What primary advantage does placing CHECK constraints inside the database provide over relying solely on frontend code?',
              km: 'តើការកំណត់ CHECK constraint ក្នុងដាតាបេស មានប្រៀបជាងការត្រួតពិនិត្យតែលើ Frontend យ៉ាងដូចម្តេច?',
            },
            options: [
              { id: 'opt1', text: { en: 'Guarantees data integrity across all applications, scripts, and microservices accessing the database', km: 'ធានាសុវត្ថិភាពទិន្នន័យ ១០០% លើគ្រប់ App, Script និង Microservices ទាំងអស់ដែលចូលប្រើដាតាបេស' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Frontend code runs faster when database constraints exist', km: 'Frontend កូដរត់លឿនជាងមុន' }, isCorrect: false }
            ],
            explanation: {
              en: 'Database constraints enforce integrity at the central data authority, protecting against bugged clients or scripts.',
              km: 'Database constraints បង្ខំឱ្យទិន្នន័យត្រឹមត្រូវពីប្រភពកណ្តាល ការពារកុំឱ្យមានកំហុសពី Client ឬ Script ផ្សេងៗ។',
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-6',
    moduleNumber: 6,
    title: {
      en: 'Module 6: Database Design & Normalization',
      km: 'មូឌុលទី ៦៖ ការរចនាទិន្នន័យ និង Normalization (Database Design)',
    },
    description: {
      en: 'Entity-Relationship modeling, 1NF, 2NF, 3NF normalization, intentional denormalization, and worked Cambodian e-commerce database design.',
      km: 'ការរចនា ER Diagram, លក្ខខណ្ឌ 1NF, 2NF, 3NF Normalization, Denormalization និងការរចនាដាតាបេស E-Commerce កម្ពុជាពីបាតដៃទទេ។',
    },
    lessons: [
      {
        id: 'm6-l1',
        moduleId: 'module-6',
        moduleNumber: 6,
        lessonNumber: 1,
        title: {
          en: 'Entity-Relationship (ER) Modeling',
          km: 'ការសរសេរ ER Diagram និងការរចនា Schema (ER Modeling)',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Designing conceptual schemas with Entities, Attributes, Relationships, and Cardinality before writing SQL code.',
          km: 'ការរចនា Schema គំរូដោយប្រើប្រាស់ Entities, Attributes, Relationships និង Cardinality មុនពេលសរសេរកូដ SQL។',
        },
        explanation: {
          en: 'Before writing a single line of CREATE TABLE DDL code, professional database architects design an Entity-Relationship (ER) Model. ER modeling visually charts the domain domain entities (e.g., Users, Products, Orders), their underlying attributes (e.g., user_email, product_price), and the relationship cardinality between them (One-to-One, One-to-Many, Many-to-Many). Designing an ER diagram upfront uncovers hidden business rules, prevents flawed schema architecture, and serves as the blueprint for software engineering teams during feature expansion.',
          km: 'មុនពេលសរសេរកូដ CREATE TABLE ភាសា SQL ឡើយ អ្នកជំនាញរចនាដាតាបេសត្រូវតែរៀបចំ Entity-Relationship (ER) Model ជាមុនសិន។ ER Modeling ជួយគូរបង្ហាញពីប្រភេទទិន្នន័យ (Entities), លក្ខណៈសម្បត្តិ (Attributes), និងទំនាក់ទំនងរវាងតារាង (One-to-One, One-to-Many, Many-to-Many) ឱ្យឃើញច្បាស់ស្តែង។ ការរចនា ER Diagram ជាមុន ជួយឱ្យយើងមើលឃើញកំហុសរចនាសម្ព័ន្ធទាន់ពេល និងបម្រើជាប្លង់មេសម្រាប់ក្រុមអភិវឌ្ឍន៍សូហ្វវែរ។',
        },
        diagram: {
          type: 'er-diagram',
          caption: {
            en: 'Entity-Relationship Diagram mapping Customer (1) to Orders (N) to Order Items (M)',
            km: 'ER Diagram បង្ហាញទំនាក់ទំនងរវាង Customer (1) ទៅកាន់ Orders (N) និង Order Items (M)',
          },
          svgData: {
            nodes: [
              { id: 'c', label: 'Customer (Entity)', subtext: 'PK: id, name, email', x: 60, y: 100, type: 'primary' },
              { id: 'o', label: 'Order (Entity)', subtext: 'PK: id, FK: customer_id', x: 260, y: 100, type: 'secondary' },
              { id: 'p', label: 'Product (Entity)', subtext: 'PK: id, title, price', x: 460, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'c', to: 'o', label: '1 : N (Places)' },
              { from: 'o', to: 'p', label: 'N : M (Contains)' }
            ]
          }
        },
        tutorial: {
          en: `### Key Components of ER Diagrams:
1. **Entities** (Rectangles): Business domain objects (e.g., \`Student\`, \`Class\`).
2. **Attributes** (Ovals/Subtext): Properties of entities (e.g., \`student_name\`).
3. **Relationships** (Diamonds/Links): Associations between entities (e.g., \`Enrolls_In\`).
4. **Cardinality**:
   - **1:1** : One User has One Profile.
   - **1:N** : One Customer places Many Orders.
   - **N:M** : Many Students join Many Courses (Requires Junction Table).`,
          km: `### រចនាសម្ព័ន្ធសំខាន់នៃ ER Diagram៖
១. **Entities** (រូបចតុកោណកែង)៖ វត្ថុក្នុងអាជីវកម្ម (ឧ. \`Student\`, \`Class\`)
២. **Attributes** (លក្ខណៈ)៖ ព័ត៌មានរបស់ Entity (ឧ. \`student_name\`)
៣. **Relationships** (ទំនាក់ទំនង)៖ ការភ្ជាប់រវាង Entity (ឧ. \`Enrolls_In\`)
៤. **Cardinality**៖
   - **1:1** ៖ គណនីម្នាក់មាន Profile មួយ
   - **1:N** ៖ អតិថិជនម្នាក់ទិញទំនិញបានច្រើនដង
   - **N:M** ៖ សិស្សច្រើននាក់ រៀនមុខវិជ្ជាច្រើន (ត្រូវការ Junction Table)`,
        },
        codeExample: {
          title: {
            en: 'Translating N:M ER Relationship into SQL Junction Table',
            km: 'ការបំប្លែង N:M ER Relationship ទៅជា SQL Junction Table',
          },
          description: {
            en: 'Creating junction table for many-to-many relationship between students and courses.',
            km: 'ការបង្កើត Junction Table សម្រាប់ទំនាក់ទំនង Many-to-Many រវាងសិស្ស និងមុខវិជ្ជា។',
          },
          code: `CREATE TABLE students (id SERIAL PRIMARY KEY, name TEXT);
CREATE TABLE courses (id SERIAL PRIMARY KEY, title TEXT);

-- Junction Table resolving N:M relationship
CREATE TABLE course_enrollments (
  student_id INT REFERENCES students(id) ON DELETE CASCADE,
  course_id INT REFERENCES courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (student_id, course_id)
);`,
        },
        outputPreview: {
          columns: ['status', 'er_schema'],
          rows: [
            ['SUCCESS', 'Junction table "course_enrollments" created with composite primary key (student_id, course_id).']
          ],
          explanation: {
            en: 'The junction table course_enrollments cleanly resolves the Many-to-Many ER relationship in SQL.',
            km: 'តារាង Junction Table បានបំប្លែងទំនាក់ទំនង Many-to-Many មកជាទម្រង់ SQL យ៉ាងមានរបៀបរៀបរយ។',
          }
        },
        tryItYourself: {
          starterCode: `SELECT 'ER Modeling' AS concept, '1:N and N:M Cardinality' AS rule;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Many-to-Many relationships always require a junction table in relational databases.', km: 'ទំនាក់ទំនង Many-to-Many តែងតែត្រូវការ Junction Table ក្នុង Relational Database។' }
          ]
        },
        quiz: [
          {
            id: 'm6-l1-q1',
            question: {
              en: 'How is a Many-to-Many (N:M) relationship represented in a Relational Database schema?',
              km: 'តើទំនាក់ទំនង Many-to-Many (N:M) ត្រូវបានបង្កើតក្នុង Relational Database Schema តាមវិធីណា?',
            },
            options: [
              { id: 'opt1', text: { en: 'By creating an intermediate Junction (Join) Table containing foreign keys referencing both primary tables', km: 'តាមរយៈការបង្កើត Junction Table កណ្តាលមួយដែលមាន Foreign Keys ភ្ជាប់ទៅតារាងទាំងពីរ' }, isCorrect: true },
              { id: 'opt2', text: { en: 'By storing comma-separated lists of IDs inside a text column', km: 'តាមរយៈការសរសេរ ID តៗគ្នាដោយប្រើក្បៀសក្នុងជួរឈរអត្ថបទ' }, isCorrect: false }
            ],
            explanation: {
              en: 'Relational database theory mandates creating a junction table with composite keys for N:M relations.',
              km: 'ទ្រឹស្តី Relational តម្រូវឱ្យបង្កើត Junction table ជាមួយ Composite Primary Key សម្រាប់ទំនាក់ទំនង N:M។',
            }
          }
        ]
      },
      {
        id: 'm6-l2',
        moduleId: 'module-6',
        moduleNumber: 6,
        lessonNumber: 2,
        title: {
          en: 'First Normal Form (1NF) — Atomic Values',
          km: 'First Normal Form (1NF) — តម្លៃអតូមិក (Atomic Values)',
        },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        description: {
          en: 'Eliminating multi-valued repeating groups, comma-separated lists, and non-atomic column values.',
          km: 'ការលុបបំបាត់ទិន្នន័យស្ទួនជាក្រុម ការសរសេរអក្សរតៗគ្នាតាមក្បៀស និងការធ្វើឱ្យតម្លៃជួរឈរទៅជា Atomic។',
        },
        explanation: {
          en: 'First Normal Form (1NF) sets the baseline standard for relational table design. A table is in 1NF if and only if: 1. Every column attribute contains strictly atomic (indivisible) single values, 2. There are no repeating column groups (such as phone1, phone2, phone3), 3. Each row is uniquely identified by a primary key, and 4. The order of rows and columns does not affect data meaning. Storing comma-separated lists inside a text column (e.g., "012888999, 092111222") violates 1NF because query engines cannot index or filter individual phone numbers efficiently.',
          km: 'First Normal Form (1NF) គឺជាស្តង់ដារដំបូងបង្អស់ក្នុងការរចនាដាតាបេស Relational។ តារាងមួយស្ថិតក្នុង 1NF លុះត្រាតែ៖ ១. រាល់ជួរឈរទាំងអស់រក្សាទុកតែតម្លៃ Atomic (តម្លៃតែមួយគត់មិនអាចបំបែកបាន) ២. គ្មានការបង្កើតជួរឈរស្ទួនជាក្រុម (ដូចជា phone1, phone2, phone3) ៣. ជួរដេកនីមួយៗមាន Primary Key ច្បាស់លាស់។ ការរក្សាទុកលេខទូរស័ព្ទតៗគ្នាដោយប្រើក្បៀស (ឧ. "012888999, 092111222") រំលោភលើលក្ខខណ្ឌ 1NF ព្រោះដាតាបេសមិនអាច Index ឬស្វែងរកលេខនីមួយៗបានលឿនឡើយ។',
        },
        diagram: {
          type: 'normalization',
          caption: {
            en: '1NF Transformation: Splitting non-atomic comma-separated phones into distinct rows',
            km: 'ការបំប្លែងទៅជា 1NF៖ បំបែកលេខទូរស័ព្ទតៗគ្នាតាមក្បៀស ឱ្យទៅជាជួរដេកដាច់ដោយឡែកពីគ្នា',
          },
          svgData: {
            tables: [
              { name: 'Un-normalized (Violates 1NF)', columns: [{ name: 'user: "Dara"', type: 'TEXT' }, { name: 'phones: "012888999, 092111222"', type: 'NON-ATOMIC' }] },
              { name: '1NF Compliant Table', columns: [{ name: 'user: "Dara"', type: 'TEXT' }, { name: 'phone: "012888999"', type: 'ATOMIC' }] },
              { name: '1NF Compliant Table (Row 2)', columns: [{ name: 'user: "Dara"', type: 'TEXT' }, { name: 'phone: "092111222"', type: 'ATOMIC' }] }
            ]
          }
        },
        tutorial: {
          en: `### 1NF Rules Checklist:
1. **Atomic Values**: One single value per cell (No JSON arrays or comma lists).
2. **No Repeating Columns**: No \`tag1\`, \`tag2\`, \`tag3\`.
3. **Primary Key**: Defined unique key for every row.

Let's refactor un-normalized data into 1NF compliant tables:`,
          km: `### វិធានត្រួតពិនិត្យ 1NF Checklist៖
១. **Atomic Values**៖ តម្លៃតែមួយក្នុងមួយប្រអប់ (គ្មាន JSON Array ឬក្បៀស)
២. **គ្មានជួរឈរស្ទួន**៖ គ្មាន \`tag1\`, \`tag2\`, \`tag3\`
៣. **Primary Key**៖ មាន Key ត្រឹមត្រូវសម្រាប់ជួរដេកនីមួយៗ`,
        },
        codeExample: {
          title: {
            en: '1NF Schema Refactoring',
            km: 'ការកែប្រែ Schema ឱ្យស្របតាម 1NF',
          },
          description: {
            en: 'Extracting repeating phone numbers into a dedicated normalized customer_phones table.',
            km: 'ការទាញយកលេខទូរស័ព្ទច្រើន ទៅដាក់ក្នុងតារាង customer_phones ដាច់ដោយឡែក។',
          },
          code: `-- 1NF Compliant Design
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(100) NOT NULL
);

CREATE TABLE customer_phones (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(id) ON DELETE CASCADE,
  phone_number VARCHAR(20) NOT NULL
);`,
        },
        outputPreview: {
          columns: ['status', 'normalization_check'],
          rows: [
            ['SUCCESS', '1NF enforced: customer_phones holds individual atomic phone records per row.']
          ],
          explanation: {
            en: 'Every phone number now sits in its own atomic row, fully compliant with 1NF rules.',
            km: 'រាល់លេខទូរស័ព្ទទាំងអស់ពេលនេះស្ថិតក្នុងជួរដេក Atomic មួយៗ ស្របតាមស្តង់ដារ 1NF។',
          }
        },
        tryItYourself: {
          starterCode: `SELECT '1NF' AS rule, 'Atomic Values Only' AS condition;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: '1NF forbids storing comma-separated values in a single database cell.', km: '1NF ហាមឃាត់មិនឱ្យរក្សាទុកតម្លៃតៗគ្នាតាមក្បៀសក្នុងប្រអប់ដាតាបេសតែមួយឡើយ។' }
          ]
        },
        quiz: [
          {
            id: 'm6-l2-q1',
            question: {
              en: 'Which database table design violates First Normal Form (1NF)?',
              km: 'តើការរចនាតារាងដាតាបេសមួយណាដែលរំលោភលើ First Normal Form (1NF)?',
            },
            options: [
              { id: 'opt1', text: { en: 'A column storing a string of comma-separated phone numbers "0123, 0456, 0789"', km: 'ជួរឈរដែលរក្សាទុកលេខទូរស័ព្ទតៗគ្នាតាមក្បៀស "0123, 0456, 0789"' }, isCorrect: true },
              { id: 'opt2', text: { en: 'A table where every cell contains a single integer or string', km: 'តារាងដែលរាល់ប្រអប់ទាំងអស់រក្សាទុកតែលេខ ឬអត្ថបទតែមួយ' }, isCorrect: false }
            ],
            explanation: {
              en: 'Comma-separated lists violate 1NF because attributes are not atomic.',
              km: 'ការសរសេរអក្សរតៗគ្នាតាមក្បៀស រំលោភលើ 1NF ព្រោះទិន្នន័យមិនមែនជា Atomicឡើយ។',
            }
          }
        ]
      },
      {
        id: 'm6-l3',
        moduleId: 'module-6',
        moduleNumber: 6,
        lessonNumber: 3,
        title: {
          en: 'Second Normal Form (2NF) — Partial Dependencies',
          km: 'Second Normal Form (2NF) — ការលុបបំបាត់ Partial Dependencies',
        },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        description: {
          en: 'Meeting 1NF requirements and eliminating partial functional dependencies on composite keys.',
          km: 'ការបំពេញលក្ខខណ្ឌ 1NF និងការលុបបំបាត់ Partial Functional Dependencies លើ Composite Keys។',
        },
        explanation: {
          en: 'A table is in Second Normal Form (2NF) if and only if it is already in 1NF and contains no Partial Functional Dependencies. A partial dependency occurs when a non-key column depends on only ONE part of a composite primary key rather than the complete composite key. For example, in a table with a composite primary key (order_id, product_id), storing product_name inside the same table creates a partial dependency because product_name depends solely on product_id, not on order_id. To achieve 2NF, attributes depending on only part of the key must be moved into their own dedicated entity table.',
          km: 'តារាងមួយស្ថិតក្នុង Second Normal Form (2NF) លុះត្រាតែវាស្ថិតក្នុង 1NF រួចរាល់ ហើយគ្មាន Partial Functional Dependencies។ Partial dependency កើតឡើងនៅពេលជួរឈរធម្មតា អាស្រ័យលើ តែផ្នែកមួយ នៃ Composite Primary Key ប៉ុណ្ណោះ។ ឧទាហរណ៍ ក្នុងតារាងដែលមាន Composite Key (order_id, product_id) ប្រសិនបើយើងដាក់ product_name ក្នុងតារាងនោះដែរ វាបង្កើត Partial Dependency ព្រោះ product_name អាស្រ័យលើតែ product_id ប៉ុណ្ណោះ មិនអាស្រ័យលើ order_id ឡើយ។ ដើម្បីឱ្យបាន 2NF យើងត្រូវដក product_name ទៅដាក់ក្នុងតារាង products ដាច់ដោយឡែក។',
        },
        diagram: {
          type: 'normalization',
          caption: {
            en: '2NF Refactoring: Removing Partial Dependency product_name from Composite Order Items',
            km: 'ការបំប្លែង 2NF៖ ដក product_name ដែលមាន Partial Dependency ចេញពី Order Items',
          },
          svgData: {
            tables: [
              { name: 'Violates 2NF (Composite PK: order_id, product_id)', columns: [{ name: 'product_name', type: 'PARTIAL DEPENDENCY' }] },
              { name: '2NF Table 1: order_items', columns: [{ name: 'order_id (PK)', type: 'INT' }, { name: 'product_id (PK)', type: 'INT' }, { name: 'quantity', type: 'INT' }] },
              { name: '2NF Table 2: products', columns: [{ name: 'product_id (PK)', type: 'INT' }, { name: 'product_name', type: 'FULL DEPENDENCY' }] }
            ]
          }
        },
        tutorial: {
          en: `### 2NF Refactoring Steps:
1. Verify table is in 1NF.
2. Identify composite primary keys.
3. Check if any non-key attribute depends on only half of the composite key.
4. Move partial dependent columns into their own standalone table.

Let's inspect a clean 2NF normalized design:`,
          km: `### ជំហានបំប្លែងទៅជា 2NF៖
១. ប្រាកដថាតារាងស្ថិតក្នុង 1NF
២. ពិនិត្យមើល Composite Primary Keys
៣. ស្វែងរកជួរឈរណាដែលអាស្រ័យលើតែពាក់កណ្តាលនៃ Composite Key
៤. ដកជួរឈរនោះទៅដាក់ក្នុងតារាងថ្មីដាច់ដោយឡែក`,
        },
        codeExample: {
          title: {
            en: '2NF Normalized Schema Definition',
            km: 'ការសរសេរ Schema ស្របតាម 2NF',
          },
          description: {
            en: 'Separating product details into products table and keeping order_items fully dependent.',
            km: 'ការបំបែកព័ត៌មានទំនិញទៅតារាង products និងរក្សា order_items ឱ្យអាស្រ័យលើ Key ទាំងមូល។',
          },
          code: `CREATE TABLE products (
  product_id INT PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  unit_price NUMERIC(10,2) NOT NULL
);

CREATE TABLE order_items (
  order_id INT REFERENCES orders(id),
  product_id INT REFERENCES products(product_id),
  quantity INT NOT NULL,
  price_at_purchase NUMERIC(10,2) NOT NULL,
  PRIMARY KEY (order_id, product_id)
);`,
        },
        outputPreview: {
          columns: ['status', '2nf_compliance'],
          rows: [
            ['SUCCESS', '2NF achieved: product_name stored exclusively in products table; order_items holds order-specific quantity and purchase price.']
          ],
          explanation: {
            en: 'Product details are isolated in products, eliminating partial dependency anomalies in order_items.',
            km: 'ព័ត៌មានទំនិញត្រូវបានបំបែកទៅតារាង products លុបបំបាត់បញ្ហា partial dependency ទាំងស្រុង។',
          }
        },
        tryItYourself: {
          starterCode: `SELECT '2NF' AS rule, 'Eliminate Partial Dependencies on Composite Keys' AS criteria;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: '2NF applies specifically to tables with composite primary keys.', km: '2NF អនុវត្តជាពិសេសលើតារាងដែលមាន Composite Primary Keys។' }
          ]
        },
        quiz: [
          {
            id: 'm6-l3-q1',
            question: {
              en: 'What condition defines a Partial Functional Dependency in database normalization?',
              km: 'តើលក្ខខណ្ឌអ្វីដែលកំណត់ថាជា Partial Functional Dependency ក្នុងការធ្វើ Normalization?',
            },
            options: [
              { id: 'opt1', text: { en: 'When a non-key column depends on only part of a composite primary key', km: 'នៅពេលជួរឈរធម្មតា អាស្រ័យលើតែផ្នែកមួយនៃ composite primary key' }, isCorrect: true },
              { id: 'opt2', text: { en: 'When a primary key is null', km: 'នៅពេល primary key មានតម្លៃ null' }, isCorrect: false }
            ],
            explanation: {
              en: 'Partial dependencies occur when a column depends on subset attributes of a multi-column composite key.',
              km: 'Partial dependencies កើតឡើងនៅពេលជួរឈរអាស្រ័យលើតែផ្នែកខ្លះនៃ composite key។',
            }
          }
        ]
      },
      {
        id: 'm6-l4',
        moduleId: 'module-6',
        moduleNumber: 6,
        lessonNumber: 4,
        title: {
          en: 'Third Normal Form (3NF) — Transitive Dependencies',
          km: 'Third Normal Form (3NF) — ការលុបបំបាត់ Transitive Dependencies',
        },
        durationMinutes: 25,
        difficulty: 'Advanced',
        description: {
          en: 'Achieving 3NF by removing transitive dependencies where non-key columns depend on other non-key columns.',
          km: 'ការសម្រេចបាន 3NF ដោយលុបបំបាត់ Transitive Dependencies (នៅពេលជួរឈរមិនមែន Key អាស្រ័យលើជួរឈរមិនមែន Key មួយទៀត)។',
        },
        explanation: {
          en: 'A table is in Third Normal Form (3NF) if and only if it is already in 2NF and contains no Transitive Dependencies. A transitive dependency occurs when a non-primary-key column depends on another non-primary-key column (X -> Y -> Z). For example, storing zipcode, city_name, and state_name in an employee table creates a transitive dependency because city_name depends on zipcode rather than directly on employee_id. If a zipcode changes, updating city_name across thousands of employee rows risks update anomalies. In 3NF, non-key attributes must depend ON THE KEY, THE WHOLE KEY, AND NOTHING BUT THE KEY.',
          km: 'តារាងមួយស្ថិតក្នុង Third Normal Form (3NF) លុះត្រាតែវាស្ថិតក្នុង 2NF រួចរាល់ ហើយគ្មាន Transitive Dependencies។ Transitive dependency កើតឡើងនៅពេលជួរឈរមិនមែន Key អាស្រ័យលើ ជួរឈរមិនមែន Key មួយទៀត (X -> Y -> Z)។ ឧទាហរណ៍ ការដាក់ zipcode, city_name, និង state_name ក្នុងតារាងបុគ្គលិក បង្កើត Transitive Dependency ព្រោះ city_name អាស្រ័យលើ zipcode មិនមែនអាស្រ័យលើ employee_id ដោយផ្ទាល់ឡើយ។ ប្រសិនបើកូដប្រពន្ធសំបុត្រផ្លាស់ប្តូរ យើងត្រូវកែប្រែទិន្នន័យរាប់ពាន់ជួរដេក ដែលងាយនឹងកើត Error។ សេចក្តីសន្និដ្ឋាននៃ 3NF គឺ រាល់ជួរឈរទាំងអស់ត្រូវតែអាស្រ័យលើ PRIMARY KEY, លើ PRIMARY KEY ទាំងមូល និងគ្មានអ្វីក្រៅពី PRIMARY KEY ឡើយ។',
        },
        diagram: {
          type: 'normalization',
          caption: {
            en: '3NF Refactoring: Extracting Transitive Zipcode Location data into separate table',
            km: 'ការបំប្លែង 3NF៖ ដកទិន្នន័យ Zipcode ដែលមាន Transitive Dependency ទៅតារាងដាច់ដោយឡែក',
          },
          svgData: {
            tables: [
              { name: 'Violates 3NF (emp_id -> zipcode -> city)', columns: [{ name: 'city_name', type: 'TRANSITIVE DEPENDENCY' }] },
              { name: '3NF Table 1: employees', columns: [{ name: 'emp_id (PK)', type: 'INT' }, { name: 'zipcode (FK)', type: 'VARCHAR' }] },
              { name: '3NF Table 2: zipcodes', columns: [{ name: 'zipcode (PK)', type: 'VARCHAR' }, { name: 'city_name', type: 'DIRECT DEPENDENCY' }] }
            ]
          }
        },
        tutorial: {
          en: `### Golden Rule of 3NF:
> "All non-key attributes must depend on **The Key**, **The Whole Key**, and **Nothing But The Key** (so help me Codd)."

Let's refactor transitive dependencies into 3NF compliant tables:`,
          km: `### វិធានមាសនៃ 3NF៖
> "រាល់ជួរឈរមិនមែន Key ទាំងអស់ ត្រូវតែអាស្រ័យលើ **Primary Key**, **Primary Key ទាំងមូល**, និង **គ្មានអ្វីក្រៅពី Primary Key ឡើយ**។"`,
        },
        codeExample: {
          title: {
            en: '3NF Normalized Database Schema',
            km: 'ការសរសេរ Schema ស្របតាមស្តង់ដារ 3NF',
          },
          description: {
            en: 'Extracting location details from employees into dedicated zipcodes table.',
            km: 'ការបំបែកព័ត៌មានទីតាំងក្រុង ចេញពីតារាងបុគ្គលិកទៅកាន់តារាង zipcodes។',
          },
          code: `CREATE TABLE zipcodes (
  zipcode VARCHAR(10) PRIMARY KEY,
  city_name VARCHAR(100) NOT NULL,
  province_name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  zipcode VARCHAR(10) REFERENCES zipcodes(zipcode)
);`,
        },
        outputPreview: {
          columns: ['status', '3nf_validation'],
          rows: [
            ['SUCCESS', '3NF achieved: Transitive dependency emp -> zipcode -> city resolved via foreign key.']
          ],
          explanation: {
            en: 'City names are now managed in zipcodes table. Updating a city name requires modifying exactly 1 row.',
            km: 'ឈ្មោះក្រុងត្រូវបានគ្រប់គ្រងក្នុងតារាង zipcodes។ ការប្តូរឈ្មោះក្រុងត្រូវការកែប្រែតែ ១ ជួរដេកប៉ុណ្ណោះ។',
          }
        },
        tryItYourself: {
          starterCode: `SELECT '3NF' AS rule, 'No Transitive Dependencies (X -> Y -> Z)' AS condition;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: '3NF ensures non-key columns depend strictly on the primary key alone.', km: '3NF ធានាថាជួរឈរមិនមែន Key អាស្រ័យលើ Primary Key តែមួយគត់។' }
          ]
        },
        quiz: [
          {
            id: 'm6-l4-q1',
            question: {
              en: 'What constitutes a Transitive Dependency in database normalization?',
              km: 'តើអ្វីជាការបង្កើត Transitive Dependency ក្នុងការធ្វើ Normalization?',
            },
            options: [
              { id: 'opt1', text: { en: 'When a non-primary-key column depends on another non-primary-key column', km: 'នៅពេលជួរឈរមិនមែន Primary Key អាស្រ័យលើជួរឈរមិនមែន Primary Key មួយទៀត' }, isCorrect: true },
              { id: 'opt2', text: { en: 'When a table has two primary keys', km: 'នៅពេលតារាងមាន primary key ពីរ' }, isCorrect: false }
            ],
            explanation: {
              en: 'Transitive dependencies occur when non-key column A determines non-key column B.',
              km: 'Transitive dependencies កើតឡើងនៅពេលជួរឈរមិនមែន key A កំណត់តម្លៃជួរឈរមិនមែន key B។',
            }
          }
        ]
      },
      {
        id: 'm6-l5',
        moduleId: 'module-6',
        moduleNumber: 6,
        lessonNumber: 5,
        title: {
          en: 'Denormalization — Intentional Performance Optimization',
          km: 'Denormalization — ការបំពានវិធានដោយចេតនាដើម្បីបង្កើនល្បឿន',
        },
        durationMinutes: 20,
        difficulty: 'Advanced',
        description: {
          en: 'Understanding when and why software architects intentionally duplicate data or pre-compute aggregates.',
          km: 'ការយល់ដឹងពីពេលវេលា និងមូលហេតុដែលអ្នកជំនាញរចនាដាតាបេស បង្កើតទិន្នន័យស្ទួនដោយចេតនា ដើម្បីបង្កើនល្បឿន។',
        },
        explanation: {
          en: 'While 3NF normalization eliminates data redundancy and update anomalies, highly normalized databases require executing expensive multi-table joins during high-throughput read operations. Denormalization is the deliberate process of adding redundant data or pre-computed aggregates (such as total_order_count inside a customers table) to a normalized schema to dramatically boost read performance. Denormalization should only be performed when read throughput bottlenecks are empirically proven, and application code or database triggers are implemented to keep redundant fields strictly synchronized.',
          km: 'ទោះបីជា 3NF Normalization លុបបំបាត់ទិន្នន័យស្ទួនបានល្អយ៉ាងណាក៏ដោយ ប៉ុន្តែការធ្វើ Normalization ជ្រុលពេក ធ្វើឱ្យដាតាបេសត្រូវសរសេរ JOIN ច្រើនតារាងស្មុគស្មាញ នៅពេលមានអ្នកចូលមើលច្រើន។ Denormalization គឺជាដំណើរការនៃការបង្កើតទិន្នន័យស្ទួន ឬទិន្នន័យបូកសរុបទុកជាមុន (ដូចជា ជួរឈរ total_order_count ក្នុងតារាង customers) ដោយចេតនា ដើម្បីបង្កើនល្បឿន Read ឱ្យលឿនបំផុត។ យើងធ្វើ Denormalization តែនៅពេលដាតាបេសដើរយឺតខ្លាំងដោយសារ Read ច្រើន ហើយយើងមាន Trigger ឬ Backend កូដសម្រាប់ទប់ទល់ទិន្នន័យស្ទួនឱ្យត្រូវគ្នានិច្ច។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Denormalization Trade-off: Faster Read Speed vs Complexity of Synchronizing Duplicated Attributes',
            km: 'Denormalization Trade-off៖ ល្បឿន Read លឿនខ្លាំង ប្រៀបធៀបនឹងការលំបាកក្នុងការ Synchronize ទិន្នន័យស្ទួន',
          },
          svgData: {
            nodes: [
              { id: 'norm', label: 'Normalized (3NF)', subtext: 'Slow Reads (Joins required), Fast & Safe Writes', x: 80, y: 100, type: 'primary' },
              { id: 'denorm', label: 'Denormalized', subtext: 'Blazing Fast Reads, Complex Sync Writes', x: 380, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### Normalization vs Denormalization:

| Criteria | Normalized (3NF) | Denormalized |
| :--- | :--- | :--- |
| **Primary Goal** | Data Integrity & Zero Redundancy | Blazing Fast Read Performance |
| **Joins Required** | Heavy Multi-table Joins | Minimal or Zero Joins |
| **Write Speed** | Fast (Write once) | Slower (Update multiple duplicated spots) |
| **Best Use Case** | Transactional OLTP systems | Analytical OLAP & High-read Dashboard APIs |

Let's test denormalization using a cached total column:`,
          km: `### ការប្រៀបធៀប Normalization និង Denormalization៖

| លក្ខណៈ | Normalized (3NF) | Denormalized |
| :--- | :--- | :--- |
| **គោលដៅធំ** | សុវត្ថិភាពទិន្នន័យ និងគ្មានទិន្នន័យស្ទួន | ល្បឿន Read លឿនបំផុត |
| **ការ JOIN** | ប្រើប្រាស់ JOIN ច្រើនតារាង | ប្រើ JOIN តិច ឬមិនបាច់ប្រើ |
| **ករណីប្រើប្រាស់** | ប្រព័ន្ធប្រតិបត្តិការ OLTP (Banking/Orders) | ប្រព័ន្ធធ្វើរបាយការណ៍ Dashboard OLAP |`,
        },
        codeExample: {
          title: {
            en: 'Denormalized Schema with Cached Aggregates',
            km: 'ការសរសេរ Denormalized Schema ជាមួយ Cached Aggregates',
          },
          description: {
            en: 'Adding pre-calculated total_spent directly inside customers table for fast API response.',
            km: 'ការបន្ថែមជួរឈរ total_spent ក្នុងតារាង customers ដើម្បឆ្លើយតប API លឿន។',
          },
          code: `CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(100) NOT NULL,
  -- Denormalized cached aggregate column for sub-millisecond profile reads
  total_orders_count INT DEFAULT 0,
  total_amount_spent NUMERIC(12,2) DEFAULT 0.00
);`,
        },
        outputPreview: {
          columns: ['customer_name', 'total_orders_count', 'total_amount_spent'],
          rows: [
            ['Dara Sok', 14, 1250.00]
          ],
          explanation: {
            en: 'API queries can fetch total order statistics directly without joining the orders table.',
            km: 'API អាចទាញយកស្ថិតិទិញសរុបបានភ្លាមៗ ដោយមិនបាច់សរសេរ JOIN ទៅតារាង orders ឡើយ។',
          }
        },
        tryItYourself: {
          starterCode: `SELECT 'Denormalization' AS strategy, 'Trade write speed for blazing fast reads' AS trade_off;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Denormalization speeds up read queries by avoiding complex table joins.', km: 'Denormalization បង្កើនល្បឿន read query ដោយចៀសវាងការ join តារាងស្មុគ្រស្មាញ។' }
          ]
        },
        quiz: [
          {
            id: 'm6-l5-q1',
            question: {
              en: 'What is the primary trade-off when implementing Denormalization in a database schema?',
              km: 'តើអ្វីជា Trade-off ធំជាងគេ នៅពេលយើងធ្វើ Denormalization ក្នុង Schema ដាតាបេស?',
            },
            options: [
              { id: 'opt1', text: { en: 'Read queries become much faster, but write operations become more complex as duplicated data must be kept synchronized', km: 'Read Query ដើរលឿនខ្លាំង ប៉ុន្តែ Write ប្រតិបត្តិការស្មុគស្មាញ ព្រោះត្រូវទប់ទិន្នន័យស្ទួនឱ្យត្រូវគ្នានិច្ច' }, isCorrect: true },
              { id: 'opt2', text: { en: 'The database server stops supporting SQL queries', km: 'ដាតាបេសឈប់គាំទ្របញ្ជា SQL' }, isCorrect: false }
            ],
            explanation: {
              en: 'Denormalization improves read speeds at the expense of duplicate data maintenance during write operations.',
              km: 'Denormalization បង្កើនល្បឿន read ដោយដោះដូរជាមួយការលំបាកថែទាំទិន្នន័យស្ទួនពេល write។',
            }
          }
        ]
      },
      {
        id: 'm6-l6',
        moduleId: 'module-6',
        moduleNumber: 6,
        lessonNumber: 6,
        title: {
          en: 'Designing a Cambodian E-Commerce Database Schema',
          km: 'ការរចនា Schema ដាតាបេស E-Commerce កម្ពុជាពីបាតដៃទទេ',
        },
        durationMinutes: 30,
        difficulty: 'Master',
        description: {
          en: 'Designing a production-grade relational database for a Cambodian e-commerce platform with KHQR payments.',
          km: 'ការរចនាដាតាបេស Relational កម្រិតផលិតកម្ម សម្រាប់ប្រព័ន្ធ E-Commerce កម្ពុជា ជាមួយប្រព័ន្ធបង់ប្រាក់ KHQR។',
        },
        explanation: {
          en: 'Putting theory into real-world engineering practice: designing a complete production-ready relational database schema for a Cambodian e-commerce platform. The system models customers, addresses (provinces/districts), vendors, products, inventory variants, shopping carts, orders, order items, KHQR transaction audit logs, and delivery tracking status. The design incorporates 3NF normalization, explicit foreign key cascades, proper column constraints (CHECK, UNIQUE), and strategic indexing for KHQR hash lookup verification.',
          km: 'ការយកទ្រឹស្តីមកអនុវត្តក្នុងពិភពវិស្វកម្មពិតប្រាកដ៖ ការរចនា Schema ដាតាបេសពេញលេញ សម្រាប់ប្រព័ន្ធ E-Commerce កម្ពុជា។ ប្រព័ន្ធនេះគ្របដណ្តប់លើ អតិថិជន, អាសយដ្ឋាន (ខេត្ត/ស្រុក), អ្នកលក់, ទំនិញ, ស្តុក, កន្ត្រកទំនិញ, ការបញ្ជាទិញ, ប្រវត្តិទូទាត់ប្រាក់ KHQR, និងការតាមដានការដឹកជញ្ជូន។ Schema នេះត្រូវបានរចនាយ៉ាងត្រឹមត្រូវតាមស្តង់ដារ 3NF, Foreign Key Cascades, Column Constraints (CHECK, UNIQUE) និង Indexing សម្រាប់ស្វែងរកប្រតិបត្តិការ KHQR ក្នុងល្បឿនលឿន។',
        },
        diagram: {
          type: 'er-diagram',
          caption: {
            en: 'Production Cambodian E-Commerce ER Architecture Schema Overview',
            km: 'ប្លង់ស្ថាបត្យកម្ម ER Schema នៃប្រព័ន្ធ E-Commerce កម្ពុជា',
          },
          svgData: {
            nodes: [
              { id: 'usr', label: 'users', subtext: 'PK: id, phone, name', x: 60, y: 100, type: 'primary' },
              { id: 'ord', label: 'orders', subtext: 'PK: id, FK: user_id, total', x: 260, y: 100, type: 'secondary' },
              { id: 'khqr', label: 'khqr_transactions', subtext: 'PK: id, md5_hash, status', x: 460, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'usr', to: 'ord', label: 'Places Order' },
              { from: 'ord', to: 'khqr', label: 'Generates Payment' }
            ]
          }
        },
        tutorial: {
          en: `### Key Entities in Cambodian E-Commerce Database:
1. **users**: Customer profiles & mobile phone auth.
2. **provinces_districts**: Address master lookup (Phnom Penh, Siem Reap, Battambang).
3. **products & product_variants**: SKU variants (Color, Size).
4. **orders & order_items**: Customer purchase line items.
5. **khqr_payments**: Bakong KHQR transaction hash verification logs.

Let's inspect the DDL for the complete e-commerce schema:`,
          km: `### Entities សំខាន់ៗក្នុងប្រព័ន្ធ E-Commerce កម្ពុជា៖
១. **users**៖ ព័ត៌មានអតិថិជន និងលេខទូរស័ព្ទ
២. **provinces_districts**៖ អាសយដ្ឋានរាជធានី-ខេត្ត (ភ្នំពេញ, សៀមរាប, បាត់ដំបង...)
៣. **products & product_variants**៖ ទំនិញ និងទំហំ/ពណ៌ (SKU)
៤. **orders & order_items**៖ ការបញ្ជាទិញ និងទំនិញលម្អិត
៥. **khqr_payments**៖ ប្រវត្តិប្រតិបត្តិការបង់ប្រាក់ Bakong KHQR`,
        },
        codeExample: {
          title: {
            en: 'Complete Cambodian E-Commerce & KHQR Schema Definition',
            km: 'ការសរសេរ Schema ពេញលេញសម្រាប់ E-Commerce កម្ពុជា និង KHQR',
          },
          description: {
            en: 'Production DDL script defining tables, foreign keys, and KHQR audit logs.',
            km: 'កូដ DDL បង្កើតតារាង Foreign Keys និងប្រវត្តិទូទាត់ប្រាក់ KHQR។',
          },
          code: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  phone_number VARCHAR(20) NOT NULL UNIQUE,
  full_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE RESTRICT,
  total_khr NUMERIC(15,2) NOT NULL CHECK (total_khr >= 0),
  total_usd NUMERIC(10,2) NOT NULL CHECK (total_usd >= 0),
  order_status VARCHAR(30) DEFAULT 'PENDING_PAYMENT',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE khqr_payments (
  id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders(id) ON DELETE CASCADE,
  bakong_md5_hash VARCHAR(64) NOT NULL UNIQUE,
  currency VARCHAR(3) CHECK (currency IN ('KHR', 'USD')),
  amount NUMERIC(15,2) NOT NULL,
  payment_status VARCHAR(20) DEFAULT 'SUCCESS',
  paid_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
        },
        outputPreview: {
          columns: ['status', 'architecture_result'],
          rows: [
            ['SUCCESS', 'Production E-Commerce Schema initialized: 3NF normalized with Bakong KHQR payment tracking.']
          ],
          explanation: {
            en: 'The database schema successfully provisions multi-currency e-commerce tables with KHQR payment verification.',
            km: 'Schema ដាតាបេសបានបង្កើតតារាង E-Commerce គាំទ្រពីររូបិយវត្ថុ (KHR/USD) និង KHQR ដោយជោគជ័យ។',
          }
        },
        tryItYourself: {
          starterCode: `SELECT 'Cambodian E-Commerce DB' AS platform, '3NF + Bakong KHQR Integrated' AS status;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'The schema is structured for enterprise scalability and auditability.', km: 'Schema ត្រូវបានរចនាឡើងសម្រាប់ប្រព័ន្ធធំ Enterprise និងមានសុវត្ថិភាពខ្ពស់។' }
          ]
        },
        quiz: [
          {
            id: 'm6-l6-q1',
            question: {
              en: 'Why is storing bakong_md5_hash with a UNIQUE constraint crucial in the khqr_payments table?',
              km: 'ហេតុអ្វីបានជាការរក្សាទុក bakong_md5_hash ជាមួយ UNIQUE constraint មានសារៈសំខាន់ខ្លាំងក្នុងតារាង khqr_payments?',
            },
            options: [
              { id: 'opt1', text: { en: 'Prevents double-spending replay attacks by ensuring a KHQR transaction hash can only be redeemed once', km: 'ការពារការបង់ប្រាក់ស្ទួន (Double-spending) ដោយធានាថា Transaction Hash នៃ KHQR មួយអាចប្រើបានតែម្តងគត់' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Reduces the size of user phone numbers', km: 'កាត់បន្ថយទំហំលេខទូរស័ព្ទ' }, isCorrect: false }
            ],
            explanation: {
              en: 'UNIQUE constraint on transaction hashes prevents malicious actors from reusing a single Bakong payment hash for multiple orders.',
              km: 'UNIQUE constraint លើ transaction hash ការពារកុំឱ្យមានគេយក Hash បង់ប្រាក់ Bakong មួយ មកបោកប្រាស់ប្រើច្រើនដង។',
            }
          }
        ]
      }
    ]
  }
];
