import { DatabaseSqlModule } from '../../types/databaseSqlMasteryClass';

export const MODULES_7_9: DatabaseSqlModule[] = [
  {
    id: 'module-7',
    moduleNumber: 7,
    title: {
      en: 'Module 7: Advanced Subqueries, CTEs & Set Operations',
      km: 'មូឌុលទី ៧៖ បច្ចេកទេស Subqueries, CTEs (WITH Clause) និង Set Operations',
    },
    description: {
      en: 'Mastering scalar and correlated subqueries, Common Table Expressions (CTEs), recursive CTE tree queries, and UNION/INTERSECT/EXCEPT set operations.',
      km: 'ស្ទាត់ជំនាញលើ Scalar និង Correlated Subqueries, Common Table Expressions (CTEs), Recursive CTEs សម្រាប់ទិន្នន័យ Hierarchy និងល្បិច Set Operations។',
    },
    lessons: [
      {
        id: 'm7-l1',
        moduleId: 'module-7',
        moduleNumber: 7,
        lessonNumber: 1,
        title: {
          en: 'Scalar & Correlated Subqueries',
          km: 'Scalar Subqueries និង Correlated Subqueries',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Writing queries embedded within queries, comparing values against calculated scalar subqueries, and executing correlated row-by-row lookups.',
          km: 'ការសរសេរ Query បញ្ជ្រៀបក្នុង Query ការប្រៀបធៀបតម្លៃជាមួយ Scalar Subquery និងការប្រើប្រាស់ Correlated Subquery។',
        },
        explanation: {
          en: 'A Subquery is a SELECT query nested inside an outer SQL statement (SELECT, INSERT, UPDATE, or DELETE). Subqueries fall into two major execution categories: Scalar Subqueries (returning a single 1x1 value like an average price) and Correlated Subqueries (where the inner query depends dynamically on column attributes from the current row of the outer query). While scalar subqueries execute once for the entire statement, correlated subqueries logically execute once per row evaluated by the outer query, making indexing on join keys essential to avoid quadratic performance degradation.',
          km: 'Subquery គឺជាបញ្ជា SELECT ដែលស្ថិតនៅខាងក្នុង SQL Statement មួយទៀត។ Subquery ត្រូវបានបែងចែកជាពីរប្រភេទធំៗ៖ Scalar Subquery (បង្វិលមកវិញនូវតម្លៃទោល ១x១ ដូចជាតម្លៃមធ្យម) និង Correlated Subquery (ដែល Query ខាងក្នុង អាស្រ័យលើតម្លៃជួរឈរនៃ Query ខាងក្រៅ)។ Scalar Subquery រត់តែម្តងគត់ ឯ Correlated Subquery រត់ម្តងសម្រាប់ជួរដេកនីមួយៗនៃ Query ខាងក្រៅ ដូច្នេះការបង្កើត Index លើ Key គឺចាំបាច់បំផុត។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Scalar Subquery vs Correlated Subquery Execution Loop Difference',
            km: 'ភាពខុសគ្នានៃការរត់រវាង Scalar Subquery និង Correlated Subquery',
          },
          svgData: {
            nodes: [
              { id: 'scalar', label: 'Scalar Subquery', subtext: 'Executes ONCE -> Returns Single Constant $150', x: 80, y: 100, type: 'primary' },
              { id: 'corr', label: 'Correlated Subquery', subtext: 'Executes N Times (Per Row Outer Match)', x: 380, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### Scalar Subquery Pattern:
\`\`\`sql
SELECT product_name, unit_price
FROM products
WHERE unit_price > (SELECT AVG(unit_price) FROM products);
\`\`\`

Let's test querying products priced above the company average:`,
          km: `### ទម្រង់ Scalar Subquery Pattern៖
\`\`\`sql
SELECT product_name, unit_price
FROM products
WHERE unit_price > (SELECT AVG(unit_price) FROM products);
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Correlated Subquery Finding Top Earners Per Department',
            km: 'ការប្រើប្រាស់ Correlated Subquery រកបុគ្គលិកដែលមានប្រាក់ខែខ្ពស់ជាងគេតាមផ្នែក',
          },
          description: {
            en: 'Comparing employee salaries against the average of their specific department.',
            km: 'ការប្រៀបធៀបប្រាក់ខែបុគ្គលិក ជាមួយប្រាក់ខែមធ្យមនៃផ្នែកនីមួយៗ។',
          },
          code: `SELECT 
  e.full_name,
  e.department_id,
  e.salary
FROM staff AS e
WHERE e.salary > (
  SELECT AVG(s.salary)
  FROM staff AS s
  WHERE s.department_id = e.department_id
);`,
        },
        outputPreview: {
          columns: ['full_name', 'department_id', 'salary'],
          rows: [
            ['Dara Sok', 10, 2500.00],
            ['Sophea Vonn', 20, 3100.00]
          ],
          explanation: {
            en: 'The inner query re-evaluates average salary dynamically for each department_id of the outer employee.',
            km: 'Inner query គណនាប្រាក់ខែមធ្យមឡើងវិញតាម department_id នីមួយៗនៃបុគ្គលិកខាងក្រៅ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE items (name TEXT, price NUMERIC);
INSERT INTO items VALUES ('A', 10), ('B', 20), ('C', 30);

SELECT name, price FROM items WHERE price > (SELECT AVG(price) FROM items);`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Average is 20, so item C (30) is returned.', km: 'តម្លៃមធ្យមគឺ ២០ ដូច្នេះទំនិញ C (៣០) ត្រូវបង្ហាញ។' }
          ]
        },
        quiz: [
          {
            id: 'm7-l1-q1',
            question: {
              en: 'How many times does a Scalar Subquery execute during query execution?',
              km: 'តើ Scalar Subquery រត់ប៉ុន្មានដងក្នុងអំឡុងពេលដំណើការ Query?',
            },
            options: [
              { id: 'opt1', text: { en: 'Exactly ONCE for the entire query', km: 'រត់តែ ១ ដងគត់សម្រាប់ query ទាំងមូល' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Once per row returned by the outer table', km: 'រត់ម្តងសម្រាប់ជួរដេកនីមួយៗនៃតារាងខាងក្រៅ' }, isCorrect: false }
            ],
            explanation: {
              en: 'Scalar subqueries compute a single independent value once upfront during query preparation.',
              km: 'Scalar subqueries គណនាតម្លៃទោលតែមួយដងមុនដំបូងគេ។',
            }
          }
        ]
      },
      {
        id: 'm7-l2',
        moduleId: 'module-7',
        moduleNumber: 7,
        lessonNumber: 2,
        title: {
          en: 'CTEs (Common Table Expressions / WITH Clause)',
          km: 'CTEs — ការប្រើប្រាស់ WITH Clause ដើម្បីសម្រួលកូដ SQL',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Structuring complex SQL logic into modular, readable named temporary result sets using the WITH keyword.',
          km: 'ការរៀបចំកូដ SQL ស្មុគស្មាញឱ្យទៅជា Module អានស្រួល ដោយប្រើប្រាស់ពាក្យគន្លឹះ WITH (Common Table Expressions)។',
        },
        explanation: {
          en: 'A Common Table Expression (CTE) is a temporary named result set defined using the WITH clause that exists solely within the execution scope of a single SQL statement. CTEs eliminate messy, heavily nested inline subqueries by breaking long transformation pipelines into clean, modular, self-documenting blocks. Modern query optimizers inline CTEs seamlessly into the overall execution plan while making SQL code significantly easier to maintain, debug, and unit test.',
          km: 'Common Table Expression (CTE) គឺជាសំណុំទិន្នន័យបណ្តោះអាសន្នដែលមានឈ្មោះ ច្បាស់លាស់ ដោយប្រើបញ្ជា WITH ដែលរស់នៅតែក្នុងអំឡុងពេលរត់ SQL Statement មួយប៉ុណ្ណោះ។ CTEs លុបបំបាត់ការសរសេរ Subqueries ជាន់គ្នាច្រើនជាន់ដែលពិបាកមើល ដោយបំបែកវាជាប្លុកស្អាតៗ Module ងាយស្រួលអាន និងថែទាំ។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'CTE Modular Pipeline Structure: WITH cte_a AS (...), cte_b AS (...) SELECT ...',
            km: 'រចនាសម្ព័ន្ធ CTE Pipeline៖ WITH cte_a AS (...), cte_b AS (...) SELECT ...',
          },
          svgData: {
            nodes: [
              { id: 'cte1', label: 'WITH high_val_orders AS (...)', subtext: 'Module 1: Filter Orders > $1000', x: 80, y: 100, type: 'primary' },
              { id: 'cte2', label: 'customer_stats AS (...)', subtext: 'Module 2: Aggregate By Customer', x: 280, y: 100, type: 'secondary' },
              { id: 'final', label: 'SELECT * FROM customer_stats', subtext: 'Clean Final Output Query', x: 480, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'cte1', to: 'cte2' },
              { from: 'cte2', to: 'final' }
            ]
          }
        },
        tutorial: {
          en: `### CTE Syntax:
\`\`\`sql
WITH regional_sales AS (
  SELECT region, SUM(amount) AS total_sales
  FROM sales
  GROUP BY region
)
SELECT region, total_sales
FROM regional_sales
WHERE total_sales > 100000;
\`\`\`

Let's test writing a multi-stage CTE query:`,
          km: `### ទម្រង់ CTE Syntax៖
\`\`\`sql
WITH regional_sales AS (
  SELECT region, SUM(amount) AS total_sales
  FROM sales
  GROUP BY region
)
SELECT region, total_sales
FROM regional_sales
WHERE total_sales > 100000;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Multi-Stage CTE Pipeline for Sales Analytics',
            km: 'ការសរសេរ CTE ច្រើនតំណាក់កាល សម្រាប់ការធ្វើរបាយការណ៍លក់',
          },
          description: {
            en: 'Chaining multiple CTEs together to compute customer retention metrics.',
            km: 'ការភ្ជាប់ CTE ច្រើនចូលគ្នា ដើម្បីគណនាសូចនាករអតិថិជន។',
          },
          code: `WITH monthly_orders AS (
  SELECT 
    customer_id,
    COUNT(id) AS order_count,
    SUM(total_amount) AS total_spent
  FROM orders
  WHERE order_date >= '2026-01-01'
  GROUP BY customer_id
),
vip_customers AS (
  SELECT customer_id, total_spent
  FROM monthly_orders
  WHERE total_spent >= 500.00
)
SELECT 
  c.customer_name,
  v.total_spent
FROM vip_customers AS v
JOIN customers AS c ON v.customer_id = c.id;`,
        },
        outputPreview: {
          columns: ['customer_name', 'total_spent'],
          rows: [
            ['Dara Sok', 1250.00],
            ['Bopha Vonn', 890.00]
          ],
          explanation: {
            en: 'The chained CTE pipeline computed monthly metrics first, filtered VIPs second, and joined names last.',
            km: 'CTE បែប Pipeline គណនាទិន្នន័យប្រចាំខែមុន រួចចម្រោះ VIP ហើយភ្ជាប់ឈ្មោះនៅចុងក្រោយបង្អស់។',
          }
        },
        tryItYourself: {
          starterCode: `WITH numbers AS (
  SELECT 1 AS n UNION SELECT 2 UNION SELECT 3
)
SELECT SUM(n) FROM numbers;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'The CTE creates a temporary table with numbers 1, 2, 3 and calculates sum = 6.', km: 'CTE បង្កើតតារាងបណ្តោះអាសន្នដែលមានលេខ ១, ២, ៣ ហើយគណនាផលបូក = ៦។' }
          ]
        },
        quiz: [
          {
            id: 'm7-l2-q1',
            question: {
              en: 'What is the key readability advantage of CTEs over nested subqueries?',
              km: 'តើអ្វីជាប្រយោជន៍ធំបំផុតនៃការប្រើ CTE ប្រៀបធៀបនឹង Subqueries ជាន់គ្នា?',
            },
            options: [
              { id: 'opt1', text: { en: 'CTEs organize SQL logic linearly from top to bottom into modular, named blocks', km: 'CTEs រៀបចំកូដ SQL តាមលំដាប់លីនេអ៊ែរពីលើចុះក្រោមជាប្លុកស្អាតមានឈ្មោះច្បាស់លាស់' }, isCorrect: true },
              { id: 'opt2', text: { en: 'CTEs disable table joins entirely', km: 'CTEs បិទមិនឱ្យប្រើ JOIN' }, isCorrect: false }
            ],
            explanation: {
              en: 'CTEs structure SQL queries linearly from top-to-bottom, replacing ugly nested subqueries.',
              km: 'CTEs រៀបចំកូដ SQL ពីលើចុះក្រោម ជំនួស subqueries ជាន់គ្នាដែលពិបាកមើល។',
            }
          }
        ]
      },
      {
        id: 'm7-l3',
        moduleId: 'module-7',
        moduleNumber: 7,
        lessonNumber: 3,
        title: {
          en: 'Recursive CTEs — Querying Hierarchies & Trees',
          km: 'Recursive CTEs — ការទាញយកទិន្នន័យ Hierarchy និងរចនាសម្ព័ន្ធមែកធាង',
        },
        durationMinutes: 30,
        difficulty: 'Master',
        description: {
          en: 'Traversing organizational supervisor hierarchies, category subtrees, and bill-of-materials recursively with WITH RECURSIVE.',
          km: 'ការរត់ទាញយកទិន្នន័យមែកធាងក្រុមហ៊ុន ប្រភេទប្រភេទទំនិញជាន់ៗ និង Bill-of-Materials ដោយប្រើ WITH RECURSIVE។',
        },
        explanation: {
          en: 'A Recursive CTE (defined using WITH RECURSIVE) is a specialized query capability that iteratively executes upon its own intermediate results until a termination condition is reached. Recursive CTEs consist of two parts joined by UNION ALL: an Anchor Member (which executes once to establish the root level nodes of the hierarchy) and a Recursive Member (which references the CTE itself to fetch child nodes at depth level N+1). Recursive CTEs are essential for querying organizational org charts, multi-level product category trees, and graph traversal paths in SQL.',
          km: 'Recursive CTE (កំណត់ដោយ WITH RECURSIVE) គឺជាសមត្ថភាពទាញយកទិន្នន័យបង្វិលជុំ (Iterative) ដែលរត់លើលទ្ធផលបណ្តោះអាសន្នរបស់ខ្លួនឯង រហូតដល់ជួបលក្ខខណ្ឌបញ្ឈប់។ Recursive CTE មានពីរផ្នែកភ្ជាប់ដោយ UNION ALL៖ ផ្នែក Anchor Member (រត់លើកដំបូងដើម្បីរក Root Node) និងផ្នែក Recursive Member (ដែលហៅឈ្មោះ CTE ខ្លួនឯង ដើម្បីរក Child Node នៅជាន់បន្ទាប់ N+1)។',
        },
        diagram: {
          type: 'flowchart',
          caption: {
            en: 'Recursive CTE Tree Traversal: Anchor Member (Depth 0) -> Recursive Member (Depth N+1)',
            km: 'ដំណើរការ Recursive CTE៖ Anchor Member (ជាន់ទី ០) -> Recursive Member (ជាន់ទី N+1)',
          },
          svgData: {
            nodes: [
              { id: 'anchor', label: 'Anchor Member (CEO)', subtext: 'Depth 0 Root Node', x: 80, y: 100, type: 'primary' },
              { id: 'rec1', label: 'Recursive Step 1 (VPs)', subtext: 'Depth 1 Children', x: 280, y: 100, type: 'secondary' },
              { id: 'rec2', label: 'Recursive Step 2 (Staff)', subtext: 'Depth 2 Children (Terminates)', x: 480, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'anchor', to: 'rec1' },
              { from: 'rec1', to: 'rec2' }
            ]
          }
        },
        tutorial: {
          en: `### WITH RECURSIVE Template:
\`\`\`sql
WITH RECURSIVE org_chart AS (
  -- Anchor Member: Root CEO
  SELECT id, full_name, manager_id, 1 AS depth
  FROM employees WHERE manager_id IS NULL
  
  UNION ALL
  
  -- Recursive Member: Subordinates
  SELECT e.id, e.full_name, e.manager_id, o.depth + 1
  FROM employees e
  JOIN org_chart o ON e.manager_id = o.id
)
SELECT * FROM org_chart ORDER BY depth;
\`\`\`

Let's test generating numbers 1 to 5 using a Recursive CTE:`,
          km: `### ទម្រង់ WITH RECURSIVE Template៖
\`\`\`sql
WITH RECURSIVE org_chart AS (
  -- Anchor Member: Root CEO
  SELECT id, full_name, manager_id, 1 AS depth
  FROM employees WHERE manager_id IS NULL
  
  UNION ALL
  
  -- Recursive Member: Subordinates
  SELECT e.id, e.full_name, e.manager_id, o.depth + 1
  FROM employees e
  JOIN org_chart o ON e.manager_id = o.id
)
SELECT * FROM org_chart ORDER BY depth;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Traversing Company Org Chart Depth with Recursive CTE',
            km: 'ការរត់ទាញយកឋានានុក្រមបុគ្គលិកក្រុមហ៊ុនជាមួយ Recursive CTE',
          },
          description: {
            en: 'Calculating employee organizational depth level from CEO downwards.',
            km: 'ការគណនាជាន់ឋានៈបុគ្គលិកចាប់ពី CEO ចុះមកក្រោម។',
          },
          code: `WITH RECURSIVE staff_tree AS (
  -- Anchor: Root executive
  SELECT id, full_name, manager_id, 1 AS level_depth, full_name::text AS path
  FROM staff
  WHERE manager_id IS NULL

  UNION ALL

  -- Recursive step: direct reports
  SELECT s.id, s.full_name, s.manager_id, st.level_depth + 1, (st.path || ' -> ' || s.full_name)::text
  FROM staff s
  JOIN staff_tree st ON s.manager_id = st.id
)
SELECT id, full_name, level_depth, path
FROM staff_tree
ORDER BY level_depth, id;`,
        },
        outputPreview: {
          columns: ['id', 'full_name', 'level_depth', 'path'],
          rows: [
            [1, 'Sophea Sok (CEO)', 1, 'Sophea Sok (CEO)'],
            [2, 'Dara Ly (Engineering Lead)', 2, 'Sophea Sok (CEO) -> Dara Ly'],
            [5, 'Bopha Vonn (Developer)', 3, 'Sophea Sok (CEO) -> Dara Ly -> Bopha Vonn']
          ],
          explanation: {
            en: 'The recursive query traversed all reporting levels and dynamically built the full manager path text.',
            km: 'Recursive query បានរត់កាត់គ្រប់ជាន់ និងបង្កើតផ្លូវដឹកនាំ Path យ៉ាងត្រឹមត្រូវ។',
          }
        },
        tryItYourself: {
          starterCode: `WITH RECURSIVE counter AS (
  SELECT 1 AS val
  UNION ALL
  SELECT val + 1 FROM counter WHERE val < 5
)
SELECT * FROM counter;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Generates sequence 1, 2, 3, 4, 5 recursively.', km: 'បង្កើតស៊េរីលេខ ១, ២, ៣, ៤, ៥ ដោយបង្វិលជុំ។' }
          ]
        },
        quiz: [
          {
            id: 'm7-l3-q1',
            question: {
              en: 'What are the two mandatory member components inside a WITH RECURSIVE CTE statement?',
              km: 'តើអ្វីជាសមាសភាគពីរដែលមិនអាចខ្វះបានក្នុងបញ្ជា WITH RECURSIVE CTE?',
            },
            options: [
              { id: 'opt1', text: { en: 'Anchor Member and Recursive Member connected by UNION ALL', km: 'Anchor Member និង Recursive Member ដែលភ្ជាប់គ្នាដោយ UNION ALL' }, isCorrect: true },
              { id: 'opt2', text: { en: 'PRIMARY KEY and FOREIGN KEY', km: 'PRIMARY KEY និង FOREIGN KEY' }, isCorrect: false }
            ],
            explanation: {
              en: 'WITH RECURSIVE combines an initial Anchor query with an iterative Recursive query via UNION ALL.',
              km: 'WITH RECURSIVE បញ្ចូលគ្នារវាង Anchor query ដំបូង និង Recursive query បង្វិលជុំតាមរយៈ UNION ALL។',
            }
          }
        ]
      },
      {
        id: 'm7-l4',
        moduleId: 'module-7',
        moduleNumber: 7,
        lessonNumber: 4,
        title: {
          en: 'Set Operations — UNION, INTERSECT, EXCEPT',
          km: 'ការប្រើប្រាស់ Set Operations (UNION, INTERSECT, EXCEPT)',
        },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        description: {
          en: 'Combining, intersecting, and subtracting query result sets using mathematical set theory operations.',
          km: 'ការបូកទិន្នន័យ ការរកប្រសព្វទិន្នន័យ និងការដកទិន្នន័យចេញពីគ្នា ដោយប្រើប្រាស់ Set Theory។',
        },
        explanation: {
          en: 'SQL Set Operations treat two or more SELECT result sets as mathematical sets. UNION combines row sets and removes duplicate records (UNION ALL preserves duplicates for faster execution); INTERSECT returns only rows common to both result sets (intersection set); EXCEPT (or MINUS in Oracle) subtracts the second result set from the first, returning rows present in query 1 but absent in query 2. For a set operation to execute successfully, both queries MUST have identical column counts and compatible data types in corresponding positions.',
          km: 'SQL Set Operations ទុកលទ្ធផលនៃ SELECT query ចំនួនពីរ ឬច្រើនជាសំណុំគណិតវិទ្យា។ UNION បូកលទ្ធផលចូលគ្នា និងលុបទិន្នន័យស្ទួន (UNION ALL រក្សាទុកទិន្នន័យស្ទួនដើម្បីល្បឿនលឿន); INTERSECT បង្វិលតែទិន្នន័យដែលមានក្នុង query ទាំងពីរ; EXCEPT ដកទិន្នន័យនៃ query ទីពីរចេញពី query ទីមួយ។ ដើម្បីប្រើ Set Operations បាន query ទាំងពីរត្រូវតែមានចំនួនជួរឈរស្មើគ្នា និង Data Type ដូចគ្នា។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'SQL Set Operators: UNION (A ∪ B), INTERSECT (A ∩ B), EXCEPT (A - B)',
            km: 'SQL Set Operators៖ UNION (A ∪ B), INTERSECT (A ∩ B), EXCEPT (A - B)',
          },
          svgData: {
            nodes: [
              { id: 'u', label: 'UNION / UNION ALL', subtext: 'Combines Result Sets (A ∪ B)', x: 60, y: 100, type: 'primary' },
              { id: 'i', label: 'INTERSECT', subtext: 'Overlapping Matches Only (A ∩ B)', x: 260, y: 100, type: 'accent' },
              { id: 'e', label: 'EXCEPT', subtext: 'Subtracts Set B from Set A (A - B)', x: 460, y: 100, type: 'warning' },
            ]
          }
        },
        tutorial: {
          en: `### Rules for Set Operations:
1. Both queries must have the **same number of columns**.
2. Corresponding columns must have **compatible data types**.
3. **UNION** removes duplicates; **UNION ALL** keeps duplicates (much faster).

Let's test combining customer and vendor email directories with UNION:`,
          km: `### វិធាននៃការប្រើប្រាស់ Set Operations៖
១. Query ទាំងពីរត្រូវតែមាន **ចំនួនជួរឈរស្មើគ្នា**។
២. ជួរឈរដែលត្រូវគ្នាត្រូវតែមាន **Data Type ត្រូវគ្នា**។
៣. **UNION** លុបទិន្នន័យស្ទួន; **UNION ALL** រក្សាទុកទិន្នន័យស្ទួន (លឿនជាង)។`,
        },
        codeExample: {
          title: {
            en: 'Unified Contact Directory with UNION ALL',
            km: 'ការបូកបញ្ចូលបញ្ជីទំនាក់ទំនងទូទាំងក្រុមហ៊ុនជាមួយ UNION ALL',
          },
          description: {
            en: 'Merging customer and staff contact details into a single unified directory.',
            km: 'ការបូកបញ្ជីអ៊ីមែលអតិថិជន និងបុគ្គលិកចូលគ្នាក្នុងបញ្ជីតែមួយ។',
          },
          code: `SELECT full_name, email_address, 'CUSTOMER' AS contact_type
FROM customers

UNION ALL

SELECT full_name, email_address, 'STAFF' AS contact_type
FROM staff
ORDER BY full_name ASC;`,
        },
        outputPreview: {
          columns: ['full_name', 'email_address', 'contact_type'],
          rows: [
            ['Bopha Vonn', 'bopha@staff.com', 'STAFF'],
            ['Dara Sok', 'dara@gmail.com', 'CUSTOMER'],
            ['Sophea Sok', 'sophea@staff.com', 'STAFF']
          ],
          explanation: {
            en: 'UNION ALL concatenated both query streams and attached a discriminator column.',
            km: 'UNION ALL បានបូកបញ្ចូលប្រភពទិន្នន័យទាំងពីរ និងបន្ថែមជួរឈរ Discriminator យ៉ាងត្រឹមត្រូវ។',
          }
        },
        tryItYourself: {
          starterCode: `SELECT 'Apple' AS fruit UNION ALL SELECT 'Apple' UNION SELECT 'Banana';`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'UNION removes duplicate Apple, leaving Apple and Banana.', km: 'UNION លុប Apple ស្ទួនមួយចោល នៅសល់តែ Apple និង Banana។' }
          ]
        },
        quiz: [
          {
            id: 'm7-l4-q1',
            question: {
              en: 'Why is UNION ALL generally faster than UNION in SQL?',
              km: 'ហេតុអ្វីបានជា UNION ALL ជាទូទៅមានល្បឿនលឿនជាង UNION ក្នុង SQL?',
            },
            options: [
              { id: 'opt1', text: { en: 'UNION ALL skips the expensive distinct sort/hash duplicate elimination step', km: 'UNION ALL រំលងវគ្គចម្រោះ/លុបទិន្នន័យស្ទួន (Duplicate Removal) ដែលចំណាយពេលខ្លាំង' }, isCorrect: true },
              { id: 'opt2', text: { en: 'UNION ALL deletes table indexes', km: 'UNION ALL លុប Index តារាងចោល' }, isCorrect: false }
            ],
            explanation: {
              en: 'UNION performs a hash/sort deduplication pass, whereas UNION ALL simply concatenates result streams directly.',
              km: 'UNION ត្រូវចំណាយពេលរៀបលំដាប់លុបទិន្នន័យស្ទួន ឯ UNION ALL បូកបញ្ចូលទិន្នន័យភ្លាមៗ។',
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-8',
    moduleNumber: 8,
    title: {
      en: 'Module 8: Window Functions & Analytical SQL',
      km: 'មូឌុលទី ៨៖ Window Functions និងការវិភាគទិន្នន័យកម្រិតខ្ពស់ (Analytical SQL)',
    },
    description: {
      en: 'Mastering OVER(), PARTITION BY, ORDER BY, ranking functions (ROW_NUMBER, RANK, DENSE_RANK), navigation functions (LAG, LEAD), and running aggregates.',
      km: 'ស្ទាត់ជំនាញលើ OVER(), PARTITION BY, ORDER BY បញ្ជា Ranking (ROW_NUMBER, RANK, DENSE_RANK), Navigation (LAG, LEAD) និង Running Totals។',
    },
    lessons: [
      {
        id: 'm8-l1',
        moduleId: 'module-8',
        moduleNumber: 8,
        lessonNumber: 1,
        title: {
          en: 'Understanding OVER() & PARTITION BY',
          km: 'ការយល់ដឹងពី OVER() Clause និង PARTITION BY',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Computing aggregate statistics across partitioned row subsets without collapsing underlying detail rows.',
          km: 'ការគណនាស្ថិតិលើក្រុមទិន្នន័យ (Partition) ដោយមិនបាត់បង់ជួរដេកលម្អិតដើម (មិនដូច GROUP BY ឡើយ)។',
        },
        explanation: {
          en: 'Unlike standard GROUP BY aggregation which collapses multiple rows into a single summary row, Window Functions perform calculations across a set of table rows related to the current row while preserving every individual detail row in the output. The OVER() clause defines the window framing behavior: PARTITION BY divides rows into logical groups (similar to GROUP BY), and ORDER BY sorts rows within each partition. Window functions enable side-by-side comparison of individual transaction amounts against group totals or group averages.',
          km: 'ខុសប្លែកពី GROUP BY ដែលបង្រួញជួរដេកច្រើនឱ្យមកសល់តែជួរដេកសរុបមួយ បញ្ជា Window Functions គណនាលើក្រុមទិន្នន័យ ប៉ុន្តែនៅរក្សាទុកគ្រប់ជួរដេកលម្អិតទាំងអស់មិនឱ្យបាត់បង់ឡើយ។ បញ្ជា OVER() កំណត់ក្រុម Window ៖ PARTITION BY បែងចែកទិន្នន័យជាក្រុមក្បាលដី ហើយ ORDER BY រៀបលំដាប់ក្នុងក្រុមនីមួយៗ។ គេប្រើ Window functions សម្រាប់ប្រៀបធៀបតម្លៃលម្អិតរបស់បុគ្គលម្នាក់ៗ ជាមួយតម្លៃមធ្យមនៃក្រុមរបស់គាត់។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'GROUP BY vs Window Function OVER(PARTITION BY ...)',
            km: 'ការប្រៀបធៀប GROUP BY (បង្រួញជួរដេក) និង Window Function (រក្សាជួរដេកដដែល)',
          },
          svgData: {
            nodes: [
              { id: 'gb', label: 'GROUP BY department_id', subtext: 'Collapses 100 rows into 5 aggregate rows', x: 80, y: 100, type: 'warning' },
              { id: 'wf', label: 'AVG(salary) OVER(PARTITION BY department_id)', subtext: 'Preserves all 100 rows + attaches dept avg', x: 380, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### Window Function Syntax:
\`\`\`sql
SELECT 
  employee_name,
  department_id,
  salary,
  AVG(salary) OVER(PARTITION BY department_id) AS dept_avg_salary
FROM employees;
\`\`\`

Let's test comparing individual salaries against department averages:`,
          km: `### ទម្រង់ Window Function Syntax៖
\`\`\`sql
SELECT 
  employee_name,
  department_id,
  salary,
  AVG(salary) OVER(PARTITION BY department_id) AS dept_avg_salary
FROM employees;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Comparing Product Prices Against Category Averages',
            km: 'ការប្រៀបធៀបតម្លៃទំនិញ ជាមួយតម្លៃមធ្យមនៃប្រភេទនិមួយៗ',
          },
          description: {
            en: 'Calculating price deviation from category mean using PARTITION BY.',
            km: 'ការគណនាគម្លាតតម្លៃទំនិញធៀបនឹងតម្លៃមធ្យមប្រចាំ Category។',
          },
          code: `SELECT 
  p.product_name,
  p.category_id,
  p.unit_price,
  AVG(p.unit_price) OVER(PARTITION BY p.category_id) AS category_avg_price,
  p.unit_price - AVG(p.unit_price) OVER(PARTITION BY p.category_id) AS price_diff
FROM products AS p;`,
        },
        outputPreview: {
          columns: ['product_name', 'category_id', 'unit_price', 'category_avg_price', 'price_diff'],
          rows: [
            ['MacBook Pro', 1, 2000.00, 1200.00, 800.00],
            ['Wireless Mouse', 1, 400.00, 1200.00, -800.00]
          ],
          explanation: {
            en: 'Every detail product row remains present alongside its computed category average and price deviation.',
            km: 'គ្រប់ជួរដេកទំនិញត្រូវបានរក្សាទុកដដែល ព្រមទាំងបង្ហាញបន្ថែមនូវតម្លៃមធ្យម និងផលដកគម្លាត។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE emp (dept TEXT, sal INT);
INSERT INTO emp VALUES ('IT', 1000), ('IT', 2000), ('HR', 1500);

SELECT dept, sal, AVG(sal) OVER(PARTITION BY dept) FROM emp;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'IT dept average is 1500; HR average is 1500.', km: 'ផ្នែក IT តម្លៃមធ្យម ១៥០០; ផ្នែក HR តម្លៃមធ្យម ១៥០០។' }
          ]
        },
        quiz: [
          {
            id: 'm8-l1-q1',
            question: {
              en: 'What is the fundamental structural difference between GROUP BY and Window Functions OVER()?',
              km: 'តើអ្វីជាភាពខុសគ្នារចនាសម្ព័ន្ធគ្រឹះរវាង GROUP BY និង Window Functions OVER()?',
            },
            options: [
              { id: 'opt1', text: { en: 'GROUP BY collapses detail rows into single aggregates, while Window Functions preserve detail rows', km: 'GROUP BY បង្រួញជួរដេកឱ្យមកសល់តែជួរដេកសរុប ឯ Window Functions រក្សាទុកគ្រប់ជួរដេកទាំងអស់' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Window Functions can only be used on numeric columns', km: 'Window Functions ប្រើបានតែលើលេខ' }, isCorrect: false }
            ],
            explanation: {
              en: 'Window functions preserve individual row identity while calculating aggregate metrics across partitions.',
              km: 'Window functions រក្សាអត្តសញ្ញាណជួរដេកនីមួយៗ ព្រមទាំងគណនាស្ថិតិក្រុម។',
            }
          }
        ]
      },
      {
        id: 'm8-l2',
        moduleId: 'module-8',
        moduleNumber: 8,
        lessonNumber: 2,
        title: {
          en: 'Ranking Functions — ROW_NUMBER, RANK, DENSE_RANK',
          km: 'ការរៀបចំចំណាត់ថ្នាក់ជាមួយ ROW_NUMBER, RANK, DENSE_RANK',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Assigning sequential position ranks, handling ties with RANK vs DENSE_RANK, and selecting Top-N per group.',
          km: 'ការវាយតម្លៃលេខរៀង ស្ទាត់ជំនាញលើចំណាត់ថ្នាក់ស្មើគ្នា (Ties) និងការទាញយក Top-N ទិន្នន័យក្នុងប្រព័ន្ធ។',
        },
        explanation: {
          en: 'Ranking window functions calculate numerical rank order positions across partitioned data subsets: 1) ROW_NUMBER() assigns a unique sequential integer (1, 2, 3, 4) regardless of tied values; 2) RANK() assigns identical ranks to tied values but skips subsequent rank numbers (e.g., 1, 2, 2, 4); 3) DENSE_RANK() assigns identical ranks to tied values without skipping subsequent rank numbers (e.g., 1, 2, 2, 3). ROW_NUMBER() inside a CTE is the standard SQL pattern for selecting Top-N records per category or deduplicating records.',
          km: 'បញ្ជា Ranking window functions គណនាលេខរៀងចំណាត់ថ្នាក់លើក្រុមទិន្នន័យ៖ ១) ROW_NUMBER() បង្កើតលេខរៀងបន្តបន្ទាប់ (១, ២, ៣, ៤) ដោយមិនខ្វល់ពីតម្លៃស្មើគ្នា; ២) RANK() ផ្តល់លេខរៀងស្មើគ្នាចំពោះតម្លៃស្មើគ្នា ប៉ុន្តែរំលងលេខបន្ទាប់ (ឧ. ១, ២, ២, ៤); ៣) DENSE_RANK() ផ្តល់លេខរៀងស្មើគ្នាចំពោះតម្លៃស្មើគ្នា ដោយមិនរំលងលេខបន្ទាប់ឡើយ (ឧ. ១, ២, ២, ៣)។ គេប្រើ ROW_NUMBER() ក្នុង CTE សម្រាប់ទាញយក Top-N ទិន្នន័យ ឬលុបទិន្នន័យស្ទួន។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Comparison of Ranking Behavior on Tied Values ($100, $100, $80)',
            km: 'ការប្រៀបធៀបលទ្ធផល Ranking លើតម្លៃស្មើគ្នា ($100, $100, $80)',
          },
          svgData: {
            nodes: [
              { id: 'row', label: 'ROW_NUMBER()', subtext: '1, 2, 3 (Strict sequential)', x: 80, y: 100, type: 'primary' },
              { id: 'rank', label: 'RANK()', subtext: '1, 1, 3 (Skips rank 2)', x: 280, y: 100, type: 'warning' },
              { id: 'dense', label: 'DENSE_RANK()', subtext: '1, 1, 2 (No rank skipped)', x: 480, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### Top-N Per Group Pattern:
\`\`\`sql
WITH ranked_sales AS (
  SELECT 
    salesperson, department, total_sales,
    ROW_NUMBER() OVER(PARTITION BY department ORDER BY total_sales DESC) AS rank_no
  FROM sales
)
SELECT * FROM ranked_sales WHERE rank_no <= 3;
\`\`\`

Let's test ranking top earners inside each department:`,
          km: `### ទម្រង់ Top-N Per Group Pattern៖
\`\`\`sql
WITH ranked_sales AS (
  SELECT 
    salesperson, department, total_sales,
    ROW_NUMBER() OVER(PARTITION BY department ORDER BY total_sales DESC) AS rank_no
  FROM sales
)
SELECT * FROM ranked_sales WHERE rank_no <= 3;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Finding Highest Paid Employee in Each Department',
            km: 'ការទាញយកបុគ្គលិកដែលមានប្រាក់ខែខ្ពស់ជាងគេប្រចាំផ្នែកនីមួយៗ',
          },
          description: {
            en: 'Using DENSE_RANK inside a CTE to isolate top rank position.',
            km: 'ការប្រើប្រាស់ DENSE_RANK ក្នុង CTE ដើម្បីទាញយកបុគ្គលិកលេខ ១ តាមផ្នែក។',
          },
          code: `WITH ranked_staff AS (
  SELECT 
    full_name,
    department_id,
    salary,
    DENSE_RANK() OVER(PARTITION BY department_id ORDER BY salary DESC) AS sal_rank
  FROM staff
)
SELECT full_name, department_id, salary
FROM ranked_staff
WHERE sal_rank = 1;`,
        },
        outputPreview: {
          columns: ['full_name', 'department_id', 'salary'],
          rows: [
            ['Dara Ly', 10, 3500.00],
            ['Sophea Vonn', 20, 4200.00]
          ],
          explanation: {
            en: 'DENSE_RANK = 1 accurately filtered exclusively the highest paid staff members per department.',
            km: 'DENSE_RANK = 1 បានចម្រោះយកតែបុគ្គលិកដែលមានប្រាក់ខែខ្ពស់ជាងគេប្រចាំផ្នែកនីមួយៗយ៉ាងត្រឹមត្រូវ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE scores (val INT);
INSERT INTO scores VALUES (100), (100), (90);

SELECT val, ROW_NUMBER() OVER(ORDER BY val DESC), RANK() OVER(ORDER BY val DESC), DENSE_RANK() OVER(ORDER BY val DESC) FROM scores;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Observe ROW_NUMBER=(1,2,3), RANK=(1,1,3), DENSE_RANK=(1,1,2).', km: 'សង្កេតមើល ROW_NUMBER=(1,2,3), RANK=(1,1,3), DENSE_RANK=(1,1,2)។' }
          ]
        },
        quiz: [
          {
            id: 'm8-l2-q1',
            question: {
              en: 'If two rows tie for 1st place, what sequence will RANK() vs DENSE_RANK() output for the third row?',
              km: 'ប្រសិនបើពីរជួរដេកមានពិន្ទុស្មើគ្នានៅលេខ ១ តើ RANK() vs DENSE_RANK() បង្ហាញលេខរៀងអ្វីសម្រាប់ជួរដេកទី ៣?',
            },
            options: [
              { id: 'opt1', text: { en: 'RANK() outputs 3, while DENSE_RANK() outputs 2', km: 'RANK() បង្ហាញលេខ ៣ ឯ DENSE_RANK() បង្ហាញលេខ ២' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Both output 2', km: 'បង្ហាញលេខ ២ ដូចគ្នា' }, isCorrect: false }
            ],
            explanation: {
              en: 'RANK() skips the second position (1, 1, 3) whereas DENSE_RANK() produces dense consecutive ranks (1, 1, 2).',
              km: 'RANK() រំលងលេខ ២ (១, ១, ៣) ឯ DENSE_RANK() រៀបលេខបន្តបន្ទាប់គ្នា (១, ១, ២)។',
            }
          }
        ]
      },
      {
        id: 'm8-l3',
        moduleId: 'module-8',
        moduleNumber: 8,
        lessonNumber: 3,
        title: {
          en: 'Value Navigation — LAG, LEAD, FIRST_VALUE',
          km: 'ការមើលទិន្នន័យមុននិងក្រោយជាមួយ LAG និង LEAD',
        },
        durationMinutes: 25,
        difficulty: 'Advanced',
        description: {
          en: 'Accessing data from previous or subsequent rows without executing self-joins, computing period-over-period growth.',
          km: 'ការទាញយកទិន្នន័យនៃជួរដេកមុន (LAG) ឬជួរដេកក្រោយ (LEAD) ដោយមិនបាច់ធ្វើ Self Join ដើម្បីគណនាអត្រាកំណើន។',
        },
        explanation: {
          en: 'Navigation window functions allow queries to look backward or forward across ordered result rows relative to the current position without executing complex self-joins: 1) LAG(col, offset) retrieves attribute values from N rows BEFORE the current row; 2) LEAD(col, offset) retrieves values from N rows AFTER the current row. These functions are critical for financial analytics, computing month-over-month revenue growth percentage, or measuring elapsed time durations between sequential user event logs.',
          km: 'Navigation window functions អនុញ្ញាតឱ្យ Query ទាញយកទិន្នន័យនៃជួរដេកមុន ឬជួរដេកបន្ទាប់ ដោយមិនបាច់ធ្វើ Self Join ស្មុគស្មាញឡើយ៖ ១) LAG(col, offset) ទាញយកតម្លៃពីជួរដេកខាងលើ N ជួរ; ២) LEAD(col, offset) ទាញយកតម្លៃពីជួរដេកខាងក្រោម N ជួរ។ គេប្រើប្រាស់ LAG/LEAD សម្រាប់ការវិភាគហិរញ្ញវត្ថុ គណនាអត្រាកំណើនប្រាក់ចំណូលធៀបនឹងខែមុន (Month-over-Month Growth) ឬគណនារយៈពេលចន្លោះការចុចរបស់ User។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'LAG (Previous Row Lookback) vs LEAD (Next Row Lookahead)',
            km: 'ការប្រៀបធៀប LAG (មើលទិន្នន័យជួរដេកមុន) និង LEAD (មើលទិន្នន័យជួរដេកបន្ទាប់)',
          },
          svgData: {
            nodes: [
              { id: 'lag', label: 'LAG(revenue, 1)', subtext: 'Fetches Previous Month Revenue ($100k)', x: 80, y: 100, type: 'primary' },
              { id: 'curr', label: 'Current Month ($120k)', subtext: 'MoM Growth Calculation = +20%', x: 280, y: 100, type: 'accent' },
              { id: 'lead', label: 'LEAD(revenue, 1)', subtext: 'Fetches Next Month Revenue ($150k)', x: 480, y: 100, type: 'secondary' },
            ],
            links: [
              { from: 'lag', to: 'curr' },
              { from: 'curr', to: 'lead' }
            ]
          }
        },
        tutorial: {
          en: `### LAG Growth Calculation Syntax:
\`\`\`sql
SELECT 
  month,
  revenue,
  LAG(revenue, 1) OVER(ORDER BY month) AS prev_month_revenue,
  revenue - LAG(revenue, 1) OVER(ORDER BY month) AS growth_diff
FROM monthly_sales;
\`\`\`

Let's test computing Month-over-Month (MoM) revenue growth:`,
          km: `### ទម្រង់ LAG Growth Calculation Syntax៖
\`\`\`sql
SELECT 
  month,
  revenue,
  LAG(revenue, 1) OVER(ORDER BY month) AS prev_month_revenue,
  revenue - LAG(revenue, 1) OVER(ORDER BY month) AS growth_diff
FROM monthly_sales;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Calculating Month-over-Month Sales Growth Percentage',
            km: 'ការគណនាភាគរយកំណើនការលក់ធៀបនឹងខែមុន (MoM)',
          },
          description: {
            en: 'Comparing monthly revenue against preceding month via LAG().',
            km: 'ការប្រៀបធៀបចំណូលប្រចាំខែ ធៀបនឹងខែមុនដោយប្រើ LAG()។',
          },
          code: `SELECT 
  sale_month,
  total_revenue,
  LAG(total_revenue, 1) OVER(ORDER BY sale_month) AS prev_month_rev,
  ROUND(
    (total_revenue - LAG(total_revenue, 1) OVER(ORDER BY sale_month)) / 
    NULLIF(LAG(total_revenue, 1) OVER(ORDER BY sale_month), 0) * 100, 2
  ) AS mom_growth_pct
FROM monthly_financials;`,
        },
        outputPreview: {
          columns: ['sale_month', 'total_revenue', 'prev_month_rev', 'mom_growth_pct'],
          rows: [
            ['2026-01', 10000.00, null, null],
            ['2026-02', 12500.00, 10000.00, 25.00],
            ['2026-03', 15000.00, 12500.00, 20.00]
          ],
          explanation: {
            en: 'LAG(1) accurately brought forward January revenue into February to compute a +25.00% growth jump.',
            km: 'LAG(1) បានទាញយកចំណូលខែមករា មកប្រៀបធៀបក្នុងខែកុម្ភៈ បង្ហាញពីកំណើន +២៥%។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE t (m INT, val INT);
INSERT INTO t VALUES (1, 10), (2, 15), (3, 20);

SELECT m, val, LAG(val, 1) OVER(ORDER BY m) FROM t;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Month 1 LAG is NULL; Month 2 LAG is 10; Month 3 LAG is 15.', km: 'ខែទី ១ LAG ស្មើ NULL; ខែទី ២ LAG ស្មើ ១០; ខែទី ៣ LAG ស្មើ ១៥។' }
          ]
        },
        quiz: [
          {
            id: 'm8-l3-q1',
            question: {
              en: 'What value does LAG() output for the very first row in an ordered result set?',
              km: 'តើ LAG() បង្វិលតម្លៃអ្វីសម្រាប់ជួរដេកដំបូងគេបង្អស់នៃសំណុំទិន្នន័យ?',
            },
            options: [
              { id: 'opt1', text: { en: 'NULL (unless a default fallback argument is supplied)', km: 'NULL (លើកលែងតែយើងបានដាក់តម្លៃ Default)' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Zero (0)', km: 'លេខសូន្យ (0)' }, isCorrect: false }
            ],
            explanation: {
              en: 'Because there is no preceding row before position 1, LAG() defaults to returning NULL.',
              km: 'ដោយសារគ្មានជួរដេកមុនជួរដេកទី ១ LAG() បង្វិលមកវិញនូវតម្លៃ NULL ជា Default។',
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-9',
    moduleNumber: 9,
    title: {
      en: 'Module 9: Database Indexing & Query Optimization',
      km: 'មូឌុលទី ៩៖ ការបង្កើត Index និងការបង្កើនល្បឿន Query (Optimization)',
    },
    description: {
      en: 'Mastering B-Tree indexes, composite indexes, partial indexes, expression indexes, and interpreting EXPLAIN / EXPLAIN ANALYZE execution plans.',
      km: 'ស្ទាត់ជំនាញលើ B-Tree Indexes, Composite Indexes, Partial Indexes, Expression Indexes និងការអាន EXPLAIN / EXPLAIN ANALYZE Execution Plans។',
    },
    lessons: [
      {
        id: 'm9-l1',
        moduleId: 'module-9',
        moduleNumber: 9,
        lessonNumber: 1,
        title: {
          en: 'How B-Tree Indexes Work',
          km: 'គោលការណ៍ដំណើការនៃ B-Tree Indexes',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Understanding balanced B-Tree structures, replacing full table sequential scans with log(N) index lookups.',
          km: 'ការយល់ដឹងពីរចនាសម្ព័ន្ធ B-Tree ការជំនួស Sequential Full Table Scan ដោយ Index Lookup ល្បឿន Log(N)។',
        },
        explanation: {
          en: 'A Database Index is a auxiliary data structure (most commonly a self-balancing B-Tree) that speeds up data retrieval operations at the cost of additional write overhead and storage space. Without an index, evaluating a WHERE predicate requires a Sequential Scan—reading every single page block on disk from start to finish ($O(N)$ time complexity). A B-Tree index maintains keys in sorted order inside tree nodes, enabling the query planner to perform binary logarithmic search ($O(\\log N)$ time complexity), jumping directly to matching tuples in milliseconds across millions of rows.',
          km: 'Database Index គឺជា រចនាសម្ព័ន្ធទិន្នន័យជំនួយ (ភាគច្រើនជា B-Tree) ដែលជួយបង្កើនល្បឿននៃការស្វែងរកទិន្នន័យ ដោយដោះដូរជាមួយការចំណាយ Storage និងធ្វើឱ្យការ INSERT/UPDATE យឺតជាងមុនបន្តិច។ បើគ្មាន Index ទេ ការស្វែងរកទិន្នន័យតម្រូវឱ្យធ្វើ Sequential Scan (អានទិន្នន័យគ្រប់ជួរដេកទាំងអស់លើ Disk - $O(N)$)។ B-Tree Index រក្សាទុក Key តាមលំដាប់ក្នុងដើមឈើ ដែលអនុញ្ញាតឱ្យស្វែងរកក្នុងល្បឿន $O(\\log N)$ ស្វែងរកទិន្នន័យរាប់លានក្នុងរយៈពេលប៉ុន្មានមីលីវិនាទីប៉ុណ្ណោះ។',
        },
        diagram: {
          type: 'btree',
          caption: {
            en: 'B-Tree Index Search Path jumping from Root Node -> Internal Node -> Leaf Tuple Pointer',
            km: 'ផ្លូវស្វែងរក B-Tree Index៖ Root Node -> Internal Node -> Leaf Tuple Pointer',
          },
          svgData: {
            nodes: [
              { id: 'root', label: 'Root Node [50]', subtext: 'Logarithmic Traversal Start', x: 260, y: 50, type: 'primary' },
              { id: 'left', label: 'Left Leaf [< 50]', subtext: 'Keys: 10, 20, 30', x: 100, y: 150, type: 'secondary' },
              { id: 'right', label: 'Right Leaf [>= 50]', subtext: 'Keys: 50, 75, 90', x: 420, y: 150, type: 'accent' },
            ],
            links: [
              { from: 'root', to: 'left' },
              { from: 'root', to: 'right' }
            ]
          }
        },
        tutorial: {
          en: `### Creating a B-Tree Index:
\`\`\`sql
CREATE INDEX idx_customers_email ON customers(email_address);
\`\`\`

Let's test creating an index and verifying its creation:`,
          km: `### ការបង្កើត B-Tree Index Syntax៖
\`\`\`sql
CREATE INDEX idx_customers_email ON customers(email_address);
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Creating Index on Frequently Queried Foreign Keys',
            km: 'ការបង្កើត Index លើ Foreign Keys ដែលត្រូវគេ Query ញឹកញាប់',
          },
          description: {
            en: 'Speeding up customer order lookup queries with B-Tree index.',
            km: 'ការបង្កើនល្បឿន Query ស្វែងរក Order តាមរយៈ customer_id។',
          },
          code: `-- Create B-Tree index on foreign key column
CREATE INDEX idx_orders_customer_id ON orders(customer_id);

-- Query using indexed column (Executes via Index Scan)
SELECT id, total_amount, order_date
FROM orders
WHERE customer_id = 8802;`,
        },
        outputPreview: {
          columns: ['execution_type', 'query_cost', 'time_ms'],
          rows: [
            ['Index Scan using idx_orders_customer_id', 'cost=0.28..8.30', '0.045 ms']
          ],
          explanation: {
            en: 'Index Scan reduced execution time from 120ms (Seq Scan) down to 0.045ms.',
            km: 'Index Scan បានកាត់បន្ថយរយៈពេលរត់ពី ១២០ms (Seq Scan) មកសល់ត្រឹម ០.០៤៥ms ប៉ុណ្ណោះ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE users (id SERIAL PRIMARY KEY, email TEXT);
CREATE INDEX idx_users_email ON users(email);

SELECT * FROM users WHERE email = 'test@gmail.com';`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'The query utilizes idx_users_email for fast index lookup.', km: 'Query ប្រើប្រាស់ idx_users_email សម្រាប់ស្វែងរកក្នុងល្បឿនលឿន។' }
          ]
        },
        quiz: [
          {
            id: 'm9-l1-q1',
            question: {
              en: 'What is the algorithmic time complexity of searching a record using a B-Tree index versus a Sequential Scan?',
              km: 'តើ Algorithmic Time Complexity នៃការស្វែងរកទិន្នន័យដោយប្រើ B-Tree Index ស្មើប៉ុន្មាន ប្រៀបធៀបនឹង Sequential Scan?',
            },
            options: [
              { id: 'opt1', text: { en: 'B-Tree is O(log N) versus Sequential Scan O(N)', km: 'B-Tree Index គឺ O(log N) ឯ Sequential Scan គឺ O(N)' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Both are O(1) constant time', km: 'ទាំងពីរគឺ O(1)' }, isCorrect: false }
            ],
            explanation: {
              en: 'B-Tree binary node traversal operates in O(log N) time, eliminating O(N) full table scans.',
              km: 'B-Tree ដើរតាម Node ក្នុងល្បឿន O(log N) លុបបំបាត់ការអានទិន្នន័យទាំងអស់ O(N)។',
            }
          }
        ]
      },
      {
        id: 'm9-l2',
        moduleId: 'module-9',
        moduleNumber: 9,
        lessonNumber: 2,
        title: {
          en: 'Composite Indexes & Leftmost Prefix Rule',
          km: 'Composite Indexes និងវិធាន Leftmost Prefix Rule',
        },
        durationMinutes: 25,
        difficulty: 'Advanced',
        description: {
          en: 'Designing multi-column indexes, understanding column order significance, and adhering to the Leftmost Prefix Rule.',
          km: 'ការរចនា Index ដែលមានច្រើនជួរឈរ (Multi-column) ភាពសំខាន់នៃលំដាប់ជួរឈរ និងវិធាន Leftmost Prefix Rule។',
        },
        explanation: {
          en: 'A Composite Index (or multi-column index) is an index built across two or more columns simultaneously (e.g., ON users(last_name, first_name)). Crucially, the order of columns in a composite index definition dictates its usability according to the Leftmost Prefix Rule: a composite index on (A, B, C) can accelerate queries filtering on (A), (A, B), or (A, B, C), but CANNOT accelerate queries filtering solely on (B) or (C) without (A). Developers should order composite index columns placing equality columns first, followed by range/sorting columns.',
          km: 'Composite Index គឺជា Index ដែលបង្កើតលើជួរឈរចាប់ពីពីរឡើងទៅក្នុងពេលតែមួយ (ឧ. ON users(last_name, first_name))។ ចំនុចសំខាន់បំផុតគឺ លំដាប់នៃជួរឈរក្នុង Composite Index ត្រូវដើរតាមវិធាន **Leftmost Prefix Rule**៖ Composite Index លើ (A, B, C) អាចជួយបង្កើនល្បឿន Query ដែលមានលក្ខខណ្ឌចម្រោះលើ (A), (A, B) ឬ (A, B, C) ប៉ុន្តែ **មិនអាចជួយ** Query ដែលចម្រោះតែលើ (B) ឬ (C) ដោយគ្មាន (A) ឡើយ។ ក្នុងការរចនា យើងត្រូវដាក់ជួរឈរដែលប្រើស្មើ (=) មុនគេ ហើយជួរឈរ Range/ORDER BY នៅខាងក្រោយ។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Leftmost Prefix Rule: Index on (A, B) supports WHERE A=1 AND B=2 or WHERE A=1, but NOT WHERE B=2 alone',
            km: 'Leftmost Prefix Rule៖ Index (A, B) ជួយ WHERE A=1 AND B=2 ឬ WHERE A=1 ប៉ុន្តែមិនជួយ WHERE B=2 ឡើយ',
          },
          svgData: {
            nodes: [
              { id: 'idx', label: 'Composite Index (last_name, first_name)', subtext: 'Sorted primarily by last_name, secondarily by first_name', x: 80, y: 100, type: 'primary' },
              { id: 'pass', label: 'WHERE last_name = "Sok"', subtext: '✅ Uses Index (Leftmost match)', x: 380, y: 60, type: 'accent' },
              { id: 'fail', label: 'WHERE first_name = "Dara"', subtext: '❌ Seq Scan (Leftmost column missing)', x: 380, y: 140, type: 'warning' },
            ]
          }
        },
        tutorial: {
          en: `### Composite Index Syntax:
\`\`\`sql
CREATE INDEX idx_users_status_created ON users(account_status, created_at);
\`\`\`

Let's test queries utilizing composite indexes:`,
          km: `### ទម្រង់ Composite Index Syntax៖
\`\`\`sql
CREATE INDEX idx_users_status_created ON users(account_status, created_at);
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Designing Optimal Composite Index for Order Search',
            km: 'ការរចនា Composite Index ដ៏មានប្រសិទ្ធភាពសម្រាប់ការស្វែងរក Order',
          },
          description: {
            en: 'Combining status filter and date range ordering into a single index.',
            km: 'ការបូកបញ្ចូលលក្ខខណ្ឌចម្រោះ Status និងការរៀបលំដាប់កាលបរិច្ឆេទក្នុង Index តែមួយ។',
          },
          code: `-- High-performance composite index matching API query parameters
CREATE INDEX idx_orders_status_date ON orders(order_status, order_date DESC);

-- API Query executing via Index Scan
SELECT id, total_usd, order_date
FROM orders
WHERE order_status = 'COMPLETED'
ORDER BY order_date DESC
LIMIT 20;`,
        },
        outputPreview: {
          columns: ['id', 'total_usd', 'order_date'],
          rows: [
            [10890, 450.00, '2026-08-03 12:00:00'],
            [10889, 120.00, '2026-08-03 11:30:00']
          ],
          explanation: {
            en: 'The composite index served both the WHERE equality filter AND the ORDER BY sort in 1 pass without explicit sorting.',
            km: 'Composite index បានជួយទាំងលក្ខខណ្ឌ WHERE និង ORDER BY ក្នុងពេលតែមួយ ដោយមិនបាច់ចំណាយពេល Sort ឡើងវិញឡើយ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE logs (level TEXT, created_at TIMESTAMP);
CREATE INDEX idx_logs_lvl_dt ON logs(level, created_at);

SELECT * FROM logs WHERE level = 'ERROR' ORDER BY created_at DESC;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Matches leftmost prefix (level) and uses ordered created_at column.', km: 'ត្រូវតាម leftmost prefix (level) និងប្រើប្រាស់ជួរឈរ created_at ដែលបានរៀបរួច។' }
          ]
        },
        quiz: [
          {
            id: 'm9-l2-q1',
            question: {
              en: 'According to the Leftmost Prefix Rule, can a composite index on (A, B, C) be used by a query with WHERE B = 10 AND C = 20?',
              km: 'តាមវិធាន Leftmost Prefix Rule តើ Composite Index លើ (A, B, C) អាចជួយ Query ដែលមានលក្ខខណ្ឌ WHERE B = 10 AND C = 20 បានដែរឬទេ?',
            },
            options: [
              { id: 'opt1', text: { en: 'NO — because the leftmost leading column (A) is missing from the filter', km: 'មិនបានទេ — ព្រោះខ្វះជួរឈរខាងឆ្វេងបង្អស់ (A)' }, isCorrect: true },
              { id: 'opt2', text: { en: 'YES — composite indexes work for any column combination regardless of position', km: 'បាន — composite index ដើរគ្រប់ករណី' }, isCorrect: false }
            ],
            explanation: {
              en: 'Without the leading leftmost column (A), the index tree cannot be navigated efficiently.',
              km: 'បើគ្មានជួរឈរដើមដំបូងគេ (A) ទេ Tree នៃ index មិនអាចរត់ស្វែងរកបានឡើយ។',
            }
          }
        ]
      },
      {
        id: 'm9-l3',
        moduleId: 'module-9',
        moduleNumber: 9,
        lessonNumber: 3,
        title: {
          en: 'Reading EXPLAIN & EXPLAIN ANALYZE Execution Plans',
          km: 'ការអាន និងវិភាគ EXPLAIN & EXPLAIN ANALYZE Execution Plans',
        },
        durationMinutes: 30,
        difficulty: 'Master',
        description: {
          en: 'Interpreting cost estimates, actual execution time, node types (Seq Scan, Index Scan, Bitmap Heap Scan), and identifying bottlenecks.',
          km: 'ការអានតម្លៃ Cost ប៉ាន់ស្មាន រយៈពេលរត់ពិតប្រាកដ ប្រភេទ Node (Seq Scan, Index Scan, Bitmap Heap Scan) និងការរក Bottleneck។',
        },
        explanation: {
          en: 'EXPLAIN is the primary diagnostic tool used by database engineers to inspect the query optimizer’s execution plan. Prepending EXPLAIN ANALYZE to a SQL statement causes the database to actually execute the query while recording real-world execution metrics: actual startup/total time in milliseconds, loop counts, memory usage, and row count estimates vs actuals. Common plan node types include: Sequential Scan (full table scan), Index Scan (single key B-Tree traversal), Index Only Scan (fetching attributes directly from index without reading table heap), and Bitmap Heap Scan (combining multiple index entries before fetching heap blocks).',
          km: 'EXPLAIN គឺជាឧបករណ៍វិនិច្ឆ័យដ៏សំខាន់បំផុតរបស់វិស្វករដាតាបេស សម្រាប់ពិនិត្យមើលប្លង់ដំណើការ (Execution Plan) នៃ Query។ ការសរសេរ EXPLAIN ANALYZE នៅពីមុខ SQL ធ្វើឱ្យដាតាបេសរត់ Query នោះពិតប្រាកដ ព្រមទាំងកត់ត្រាស្ថិតិជាក់ស្តែង៖ រយៈពេលរត់ពិតប្រាកដ (ms), ចំនួន Loop, ការប្រើប្រាស់ Memory និងការប្រៀបធៀបចំនួនជួរដេកប៉ាន់ស្មាន ធៀបនឹងជួរដេកពិតប្រាកដ។ ប្រភេទ Node ធំៗរួមមាន៖ Sequential Scan (អានតារាងទាំងមូល), Index Scan (ស្វែងរកតាម Index), Index Only Scan (ទាញយកពី Index ដោយមិនបាច់អាន Table Heap) និង Bitmap Heap Scan។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'EXPLAIN ANALYZE Execution Hierarchy Node Tree with Cost Metrics',
            km: 'រចនាសម្ព័ន្ធមែកធាង EXPLAIN ANALYZE Execution Plan ជាមួយតម្លៃ Cost',
          },
          svgData: {
            nodes: [
              { id: 'top', label: 'Limit (cost=0.28..8.30 rows=10)', subtext: 'Actual Time: 0.052 ms', x: 260, y: 50, type: 'primary' },
              { id: 'scan', label: 'Index Scan using idx_orders_customer_id', subtext: 'Filter: order_status = "PENDING"', x: 260, y: 150, type: 'accent' },
            ],
            links: [
              { from: 'top', to: 'scan' }
            ]
          }
        },
        tutorial: {
          en: `### EXPLAIN ANALYZE Syntax:
\`\`\`sql
EXPLAIN ANALYZE
SELECT customer_name, email_address
FROM customers
WHERE email_address = 'dara@gmail.com';
\`\`\`

Let's test executing EXPLAIN ANALYZE to inspect node scans:`,
          km: `### ទម្រង់ EXPLAIN ANALYZE Syntax៖
\`\`\`sql
EXPLAIN ANALYZE
SELECT customer_name, email_address
FROM customers
WHERE email_address = 'dara@gmail.com';
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Analyzing Query Bottlenecks with EXPLAIN ANALYZE',
            km: 'ការវិភាគរកចំនុចសខ្សោយ (Bottleneck) ជាមួយ EXPLAIN ANALYZE',
          },
          description: {
            en: 'Comparing sequential scan baseline against index scan optimization.',
            km: 'ការប្រៀបធៀបរយៈពេលរត់មុន និងក្រោយពេលបង្កើត Index។',
          },
          code: `EXPLAIN ANALYZE 
SELECT o.id, o.total_amount, c.customer_name
FROM orders AS o
JOIN customers AS c ON o.customer_id = c.id
WHERE o.order_date >= '2026-08-01';`,
        },
        outputPreview: {
          columns: ['plan_node', 'cost_estimate', 'actual_time_ms', 'rows_returned'],
          rows: [
            ['Nested Loop Join', 'cost=0.42..24.80', '0.120 ms', 15],
            [' -> Index Scan on orders', 'cost=0.28..12.40', '0.040 ms', 15],
            [' -> Index Scan on customers', 'cost=0.14..0.80', '0.005 ms', 1]
          ],
          explanation: {
            en: 'EXPLAIN ANALYZE reveals both tables utilized Index Scans, completing the join in 0.120 ms.',
            km: 'EXPLAIN ANALYZE បង្ហាញថា តារាងទាំងពីរប្រើប្រាស់ Index Scan ដោយបញ្ចប់ការ JOIN ក្នុងរយៈពេល ០.១២០ ms។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE test (id INT, val TEXT);
INSERT INTO test SELECT g, 'val' || g FROM generate_series(1, 100) g;

EXPLAIN ANALYZE SELECT * FROM test WHERE id = 50;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Displays query execution metrics including actual time in ms.', km: 'បង្ហាញស្ថិតិនៃការរត់ query រួមទាំងរយៈពេលពិតប្រាកដជា ms។' }
          ]
        },
        quiz: [
          {
            id: 'm9-l3-q1',
            question: {
              en: 'What is the crucial operational difference between running EXPLAIN vs EXPLAIN ANALYZE?',
              km: 'តើអ្វីជាភាពខុសគ្នាធំបំផុតរវាងការរត់ EXPLAIN និង EXPLAIN ANALYZE?',
            },
            options: [
              { id: 'opt1', text: { en: 'EXPLAIN only estimates costs without running the query, while EXPLAIN ANALYZE actually executes the query to record real metrics', km: 'EXPLAIN មានតែការប៉ាន់ស្មាន cost ដោយមិនរត់ query ឡើយ ឯ EXPLAIN ANALYZE រត់ query ពិតប្រាកដដើម្បីកត់ត្រាស្ថិតិ' }, isCorrect: true },
              { id: 'opt2', text: { en: 'EXPLAIN ANALYZE deletes table data', km: 'EXPLAIN ANALYZE លុបទិន្នន័យតារាងចោល' }, isCorrect: false }
            ],
            explanation: {
              en: 'EXPLAIN ANALYZE actually runs the query statement, gathering real-world execution times and row counts.',
              km: 'EXPLAIN ANALYZE រត់ query ពិតប្រាកដ ដើម្បីប្រមូលស្ថិតិរយៈពេលរត់ និងចំនួនជួរដេកជាក់ស្តែង។',
            }
          }
        ]
      }
    ]
  }
];
