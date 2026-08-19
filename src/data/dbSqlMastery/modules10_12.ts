import { DatabaseSqlModule } from '../../types/databaseSqlMasteryClass';

export const MODULES_10_12: DatabaseSqlModule[] = [
  {
    id: 'module-10',
    moduleNumber: 10,
    title: {
      en: 'Module 10: Transactions, ACID Compliance & Concurrency Control',
      km: 'មូឌុលទី ១០៖ គោលការណ៍ ACID, Isolation Levels និង Concurrency Control',
    },
    description: {
      en: 'Deep diving into ACID properties, isolation levels (Read Committed, Repeatable Read, Serializable), explicit locking (SELECT FOR UPDATE), and deadlock resolution.',
      km: 'សិក្សាលម្អិតលើគោលការណ៍ ACID, Isolation Levels (Read Committed, Repeatable Read, Serializable), ការ Lock ទិន្នន័យ (SELECT FOR UPDATE) និងការដោះស្រាយ Deadlock។',
    },
    lessons: [
      {
        id: 'm10-l1',
        moduleId: 'module-10',
        moduleNumber: 10,
        lessonNumber: 1,
        title: {
          en: 'ACID Guarantees & Transaction Isolation Levels',
          km: 'គោលការណ៍ ACID និង Transaction Isolation Levels',
        },
        durationMinutes: 25,
        difficulty: 'Advanced',
        description: {
          en: 'Understanding Atomicity, Consistency, Isolation, Durability, and concurrent read anomalies (Dirty Read, Non-Repeatable Read, Phantom Read).',
          km: 'ការយល់ដឹងពី Atomicity, Consistency, Isolation, Durability និងបញ្ហាប្រឈមនៃ Concurrent Read (Dirty Read, Non-Repeatable Read, Phantom Read)។',
        },
        explanation: {
          en: 'ACID guarantees represent the core reliability foundation of enterprise relational database management systems: 1) Atomicity (all operations succeed or all roll back); 2) Consistency (database moves from one valid state meeting constraints to another); 3) Isolation (concurrent transactions execute independently without interference); 4) Durability (committed state changes survive power failures via WAL logs). Standard SQL defines four Transaction Isolation Levels balancing throughput against anomaly prevention: Read Uncommitted, Read Committed (PostgreSQL default), Repeatable Read, and Serializable.',
          km: 'គោលការណ៍ ACID គឺជាគ្រឹះនៃភាពជឿជាក់ខ្ពស់របស់ RDBMS៖ ១) Atomicity (ជោគជ័យទាំងអស់ ឬលុបចោលទាំងអស់); ២) Consistency (ដាតាបេសផ្លាស់ប្តូរពីស្ថានភាពត្រឹមត្រូវមួយ ទៅស្ថានភាពត្រឹមត្រូវមួយទៀត); ៣) Isolation (ប្រតិបត្តិការដំណាលគ្នាដើរដោយឯករាជ្យ មិនរំខានគ្នា); ៤) Durability (ទិន្នន័យដែល COMMIT រួច នឹងត្រូវរក្សាទុកជាអចិន្ត្រៃយ៍ទោះជាដាច់ភ្លើងក៏ដោយ)។ SQL បានបែងចែក Isolation Levels ជា ៤ កម្រិត៖ Read Uncommitted, Read Committed, Repeatable Read, និង Serializable។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'ACID Guarantees Matrix & Isolation Anomaly Prevention Hierarchy',
            km: 'ម៉ាទ្រីសគោលការណ៍ ACID និងកម្រិតនៃការការពារ Isolation Anomaly',
          },
          svgData: {
            nodes: [
              { id: 'rc', label: 'Read Committed (Default)', subtext: 'Prevents Dirty Reads', x: 80, y: 100, type: 'primary' },
              { id: 'rr', label: 'Repeatable Read', subtext: 'Prevents Non-Repeatable Reads', x: 280, y: 100, type: 'secondary' },
              { id: 'ser', label: 'Serializable', subtext: 'Full Isolation (Prevents Phantoms)', x: 480, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'rc', to: 'rr' },
              { from: 'rr', to: 'ser' }
            ]
          }
        },
        tutorial: {
          en: `### Setting Isolation Level Syntax:
\`\`\`sql
BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;

SELECT balance FROM accounts WHERE id = 10;
-- Balance guaranteed consistent across entire transaction duration

COMMIT;
\`\`\`

Let's test setting a strict isolation level:`,
          km: `### កំណត់ Isolation Level Syntax៖
\`\`\`sql
BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;

SELECT balance FROM accounts WHERE id = 10;
-- សមតុល្យគណនីរក្សាភាពត្រឹមត្រូវទូទាំង Transaction

COMMIT;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Executing Serializable Transaction for Ticketing System',
            km: 'ការប្រើប្រាស់ Serializable Transaction សម្រាប់ប្រព័ន្ធកក់សំបុត្រ',
          },
          description: {
            en: 'Preventing double-booking race conditions under high concurrent demand.',
            km: 'ការការពារការកក់សំបុត្រស្ទួនក្នុងពេលដំណាលគ្នា (Race Conditions)។',
          },
          code: `BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Check remaining available seat count
SELECT seat_number, status 
FROM concert_seats 
WHERE seat_number = 'A-12' AND status = 'AVAILABLE';

-- Reserve seat atomically
UPDATE concert_seats 
SET status = 'RESERVED', user_id = 801 
WHERE seat_number = 'A-12';

COMMIT;`,
        },
        outputPreview: {
          columns: ['status', 'isolation_state'],
          rows: [
            ['COMMIT', 'Seat A-12 reserved successfully under Serializable isolation.']
          ],
          explanation: {
            en: 'Serializable isolation guaranteed no concurrent transaction could interleave and double-book seat A-12.',
            km: 'Serializable isolation បានធានាថា គ្មាន Transaction ផ្សេងទៀតអាចជ្រៀតជ្រែក ឬកក់សំបុត្រ A-12 ស្ទួនឡើយ។',
          }
        },
        tryItYourself: {
          starterCode: `BEGIN ISOLATION LEVEL REPEATABLE READ;
SELECT 1;
COMMIT;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Transaction executed safely under REPEATABLE READ isolation.', km: 'Transaction បានរត់ដោយសុវត្ថិភាពក្រោម REPEATABLE READ isolation។' }
          ]
        },
        quiz: [
          {
            id: 'm10-l1-q1',
            question: {
              en: 'Which ACID property guarantees that committed changes survive database hardware or power failures?',
              km: 'តើលក្ខណៈសម្បត្តិ ACID មួយណាដែលធានាថា ទិន្នន័យដែល COMMIT រួចនឹងមិនបាត់បង់ឡើយ ទោះជាដាច់ភ្លើង?',
            },
            options: [
              { id: 'opt1', text: { en: 'Durability', km: 'Durability' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Atomicity', km: 'Atomicity' }, isCorrect: false }
            ],
            explanation: {
              en: 'Durability guarantees committed transaction records are written to non-volatile WAL storage.',
              km: 'Durability ធានាថាទិន្នន័យដែល commit រួច ត្រូវសរសេរចូលក្នុង Disk WAL storage ជាអចិន្ត្រៃយ៍។',
            }
          }
        ]
      },
      {
        id: 'm10-l2',
        moduleId: 'module-10',
        moduleNumber: 10,
        lessonNumber: 2,
        title: {
          en: 'Explicit Locking & Deadlocks (SELECT FOR UPDATE)',
          km: 'ការ Lock ទិន្នន័យ និងការដោះស្រាយ Deadlock (SELECT FOR UPDATE)',
        },
        durationMinutes: 25,
        difficulty: 'Master',
        description: {
          en: 'Pessimistic locking with SELECT FOR UPDATE, row-level vs table locks, and resolving deadlock dependency cycles.',
          km: 'ការ Lock ទិន្នន័យដោយប្រើ SELECT FOR UPDATE, Row-level vs Table Locks និងការដោះស្រាយ Deadlock។',
        },
        explanation: {
          en: 'When multiple backend workers read and subsequently update identical database records concurrently, race conditions can cause lost updates. Explicit Row-Level Locking via SELECT FOR UPDATE blocks concurrent sessions from acquiring update locks on matching target rows until the current transaction commits or rolls back. However, acquiring locks on multiple resources in conflicting sequence across parallel transactions creates a Deadlock (e.g., Transaction 1 holds Row A and waits for Row B; Transaction 2 holds Row B and waits for Row A). RDBMSs automatically detect deadlocks and abort one transaction with an error.',
          km: 'នៅពេលប្រព័ន្ធមាន Backend Workers ច្រើនអាន និងកែប្រែទិន្នន័យតែមួយក្នុងពេលដំណាលគ្នា (Concurrent Updates) វាអាចបណ្តាលឱ្យបាត់បង់ទិន្នន័យ (Lost Updates)។ បច្ចេកទេស Row-Level Locking ដោយប្រើ SELECT FOR UPDATE ចាក់សោរទិន្នន័យមិនឱ្យ Transaction ផ្សេងទៀតអាន/កែប្រែបានឡើយ រហូតដល់ Transaction បច្ចុប្បន្ន COMMIT ឬ ROLLBACK។ ប៉ុន្តែការ Lock ច្រើនជួរដេកបញ្ច្រាសទិសគ្នា អាចបង្កជា **Deadlock** (Transaction 1 កាន់ Row A ចាំ Row B; Transaction 2 កាន់ Row B ចាំ Row A)។ ដាតាបេសនឹងបាញ់ Error លុបចោល Transaction មួយដើម្បីដោះស្រាយ។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Deadlock Cycle Dependency: Tx 1 (Holds A, Waits B) <-> Tx 2 (Holds B, Waits A)',
            km: 'បញ្ហា Deadlock Cycle៖ Tx 1 (កាន់ A, ចាំ B) <-> Tx 2 (កាន់ B, ចាំ A)',
          },
          svgData: {
            nodes: [
              { id: 't1', label: 'Transaction 1', subtext: 'Holds Lock on Row A', x: 80, y: 100, type: 'primary' },
              { id: 't2', label: 'Transaction 2', subtext: 'Holds Lock on Row B', x: 380, y: 100, type: 'warning' },
            ],
            links: [
              { from: 't1', to: 't2' },
              { from: 't2', to: 't1' }
            ]
          }
        },
        tutorial: {
          en: `### SELECT FOR UPDATE Syntax:
\`\`\`sql
BEGIN;

SELECT balance FROM accounts WHERE id = 1 FOR UPDATE;
-- Locks row ID 1 exclusively until COMMIT

UPDATE accounts SET balance = balance - 50 WHERE id = 1;

COMMIT;
\`\`\`

Let's test executing SELECT FOR UPDATE:`,
          km: `### ទម្រង់ SELECT FOR UPDATE Syntax៖
\`\`\`sql
BEGIN;

SELECT balance FROM accounts WHERE id = 1 FOR UPDATE;
-- ចាក់សោរជួរដេក ID 1 ជាដាច់ខាត រហូតដល់ COMMIT

UPDATE accounts SET balance = balance - 50 WHERE id = 1;

COMMIT;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Pessimistic Row Locking for Inventory Allocation',
            km: 'ការចាក់សោរទិន្នន័យស្តុកទំនិញ Pessimistic Row Locking',
          },
          description: {
            en: 'Locking product row before updating stock to prevent negative inventory.',
            km: 'ការចាក់សោរជួរដេកទំនិញមុនដកស្តុក ដើម្បីការពារស្តុកអវិជ្ជមាន។',
          },
          code: `BEGIN;

-- Acquire exclusive lock on target product
SELECT id, stock_quantity 
FROM inventory 
WHERE id = 105 
FOR UPDATE;

-- Update stock safely with guaranteed exclusivity
UPDATE inventory 
SET stock_quantity = stock_quantity - 1 
WHERE id = 105 AND stock_quantity >= 1;

COMMIT;`,
        },
        outputPreview: {
          columns: ['lock_type', 'status'],
          rows: [
            ['Exclusive RowLock (XLock)', 'Lock acquired; row updated cleanly without race condition.']
          ],
          explanation: {
            en: 'FOR UPDATE guaranteed no concurrent session could mutate stock_quantity simultaneously.',
            km: 'FOR UPDATE បានធានាថា គ្មាន session ផ្សេងទៀតអាចកែប្រែចំនួនស្តុកក្នុងពេលដំណាលគ្នាឡើយ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE wallet (id INT, bal INT);
INSERT INTO wallet VALUES (1, 100);

BEGIN;
SELECT bal FROM wallet WHERE id = 1 FOR UPDATE;
UPDATE wallet SET bal = bal + 10 WHERE id = 1;
COMMIT;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'The row is locked exclusively during update and committed safely.', km: 'ជួរដេកត្រូវចាក់សោរយ៉ាងមានសុវត្ថិភាពក្នុងអំឡុងពេល update។' }
          ]
        },
        quiz: [
          {
            id: 'm10-l2-q1',
            question: {
              en: 'What does SELECT FOR UPDATE do when executed inside an active transaction?',
              km: 'តើបញ្ជា SELECT FOR UPDATE ធ្វើអ្វីខ្លះនៅពេលរត់ក្នុង Transaction?',
            },
            options: [
              { id: 'opt1', text: { en: 'Acquires exclusive row-level locks on matching rows, blocking concurrent transactions from modifying them', km: 'ចាក់សោរជួរដេក (Exclusive Lock) ឃាត់ Transaction ផ្សេងមិនឱ្យកែប្រែទិន្នន័យទាំងនោះ' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Deletes matching rows instantly', km: 'លុបទិន្នន័យភ្លាមៗ' }, isCorrect: false }
            ],
            explanation: {
              en: 'SELECT FOR UPDATE locks matching rows exclusively until the current transaction completes.',
              km: 'SELECT FOR UPDATE ចាក់សោរជួរដេកជាដាច់ខាត រហូតដល់ transaction ដើរចប់។',
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-11',
    moduleNumber: 11,
    title: {
      en: 'Module 11: Views, Stored Procedures & Triggers',
      km: 'មូឌុលទី ១១៖ Views, Materialized Views, Stored Procedures និង Database Triggers',
    },
    description: {
      en: 'Building database views, materialized views, user-defined functions (PL/pgSQL), stored procedures, and automated trigger workflows.',
      km: 'ការបង្កើត Views, Materialized Views, User Defined Functions (PL/pgSQL), Stored Procedures និងប្រព័ន្ធបង្កើត Trigger ស្វ័យប្រវត្តិ។',
    },
    lessons: [
      {
        id: 'm11-l1',
        moduleId: 'module-11',
        moduleNumber: 11,
        lessonNumber: 1,
        title: {
          en: 'Views & Materialized Views',
          km: 'Views និង Materialized Views (REFRESH MATERIALIZED VIEW)',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Encapsulating reusable query abstractions with standard Views vs caching query results on disk via Materialized Views.',
          km: 'ការរុំប្រជា Query ស្មុគស្មាញទុកប្រើឡើងវិញជាមួយ Views និងការកត់ត្រាផលលទ្ធផលទុកលើ Disk ដោយ Materialized Views។',
        },
        explanation: {
          en: 'A Database View is a virtual table representing the saved result set of a predefined SELECT query. Standard views do not store physical data on disk; when queried, the database dynamically substitutes the view definition inline into the calling query. Conversely, a Materialized View physically writes and caches query results on disk, eliminating expensive multi-table join and aggregation computations on read. Materialized views must be periodically updated using the REFRESH MATERIALIZED VIEW statement.',
          km: 'Database View គឺជាតារាងនិម្មិត (Virtual Table) ដែលរុំទុកនូវបញ្ជា SELECT query ស្មុគស្មាញ។ Standard View មិនរក្សាទុកទិន្នន័យលើ Disk ឡើយ វារត់ Query ដើមឡើងវិញរាល់ពេលត្រូវគេហៅប្រើ។ ផ្ទុយទៅវិញ Materialized View រក្សាទុក និងកត់ត្រាផលលទ្ធផល Query លើ Disk ពិតប្រាកដ ដែលជួយលុបបំបាត់ការរត់ JOIN និង Aggregation ធ្ងន់ៗពេលអានទិន្នន័យ។ Materialized View ត្រូវធ្វើបច្ចុប្បន្នភាពជាប្រចាំដោយ REFRESH MATERIALIZED VIEW។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Standard View (Dynamic Virtual Execution) vs Materialized View (Disk Snapshot Cache)',
            km: 'ការប្រៀបធៀប Standard View (រត់ Query ឡើងវិញ) និង Materialized View (កត់ត្រាទិន្នន័យលើ Disk)',
          },
          svgData: {
            nodes: [
              { id: 'v', label: 'Standard View', subtext: 'Virtual: Re-executes underlying query on read', x: 80, y: 100, type: 'primary' },
              { id: 'mv', label: 'Materialized View', subtext: 'Disk Snapshot: Fast read, updated via REFRESH', x: 380, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### Creating Materialized View Syntax:
\`\`\`sql
CREATE MATERIALIZED VIEW mv_monthly_revenue_summary AS
SELECT 
  DATE_TRUNC('month', order_date) AS month,
  SUM(total_amount) AS revenue
FROM orders
GROUP BY DATE_TRUNC('month', order_date);

-- Periodic update
REFRESH MATERIALIZED VIEW CONCURRENTLY mv_monthly_revenue_summary;
\`\`\`

Let's test creating a view:`,
          km: `### បង្កើត Materialized View Syntax៖
\`\`\`sql
CREATE MATERIALIZED VIEW mv_monthly_revenue_summary AS
SELECT 
  DATE_TRUNC('month', order_date) AS month,
  SUM(total_amount) AS revenue
FROM orders
GROUP BY DATE_TRUNC('month', order_date);

-- ការធ្វើបច្ចុប្បន្នភាព
REFRESH MATERIALIZED VIEW CONCURRENTLY mv_monthly_revenue_summary;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Building Executive Sales Reporting View',
            km: 'ការបង្កើត Executive View សម្រាប់របាយការណ៍លក់',
          },
          description: {
            en: 'Simplifying complex multi-table join behind clean virtual view.',
            km: 'ការសម្រួល Query JOIN ច្រើនតារាងឱ្យទៅជា View ស្អាតងាយស្រួលហៅ។',
          },
          code: `CREATE OR REPLACE VIEW v_customer_order_summary AS
SELECT 
  c.id AS customer_id,
  c.customer_name,
  c.email_address,
  COUNT(o.id) AS total_orders_placed,
  COALESCE(SUM(o.total_amount), 0.00) AS total_lifetime_value
FROM customers AS c
LEFT JOIN orders AS o ON c.id = o.customer_id
GROUP BY c.id, c.customer_name, c.email_address;`,
        },
        outputPreview: {
          columns: ['customer_id', 'customer_name', 'total_orders_placed', 'total_lifetime_value'],
          rows: [
            [8801, 'Dara Sok', 12, 4590.00],
            [8802, 'Bopha Vonn', 5, 1200.00]
          ],
          explanation: {
            en: 'Developers query "SELECT * FROM v_customer_order_summary" cleanly without re-writing joins.',
            km: 'អ្នកអភិវឌ្ឍន៍អាចសរសេរ "SELECT * FROM v_customer_order_summary" ដោយមិនបាច់សរសេរ JOIN ឡើងវិញឡើយ។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE emp (name TEXT, sal INT);
INSERT INTO emp VALUES ('A', 100);

CREATE VIEW v_emp AS SELECT name FROM emp;
SELECT * FROM v_emp;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'The view abstracts employee name column safely.', km: 'View លាក់បាំង និងបង្ហាញតែជួរឈរ name យ៉ាងមានសុវត្ថិភាព។' }
          ]
        },
        quiz: [
          {
            id: 'm11-l1-q1',
            question: {
              en: 'What is the primary operational advantage of a Materialized View over a standard View?',
              km: 'តើអ្វីជាប្រយោជន៍ធំបំផុតនៃ Materialized View ប្រៀបធៀបនឹង Standard View?',
            },
            options: [
              { id: 'opt1', text: { en: 'Materialized Views cache calculated query results physically on disk, drastically speeding up reads', km: 'Materialized Views រក្សាទុកផលលទ្ធផល Query លើ Disk ដែលជួយបង្កើនល្បឿនអានទិន្នន័យខ្លាំង' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Materialized Views do not consume any disk space', km: 'Materialized Views មិនប្រែក្លាយជា Storage ឡើយ' }, isCorrect: false }
            ],
            explanation: {
              en: 'Materialized Views trade storage space to store pre-computed results on disk for rapid read queries.',
              km: 'Materialized Views ប្រើប្រាស់ Storage ដើម្បីរក្សាទុកលទ្ធផល ដែលធ្វើឱ្យការអានលឿនខ្លាំង។',
            }
          }
        ]
      },
      {
        id: 'm11-l2',
        moduleId: 'module-11',
        moduleNumber: 11,
        lessonNumber: 2,
        title: {
          en: 'Automated Database Triggers',
          km: 'ការបង្កើត Automated Database Triggers (BEFORE / AFTER)',
        },
        durationMinutes: 25,
        difficulty: 'Master',
        description: {
          en: 'Attaching automated trigger procedures that execute automatically in response to INSERT, UPDATE, or DELETE events.',
          km: 'ការបង្កប់កូដ Trigger ឱ្យដំណើការស្វ័យប្រវត្តិ នៅពេលមានព្រឹត្តិការណ៍ INSERT, UPDATE, ឬ DELETE កើតឡើង។',
        },
        explanation: {
          en: 'A Database Trigger is a procedural callback function automatically executed by the database engine whenever a specified Data Modification Language (DML) event occurs on a target table (BEFORE/AFTER INSERT, UPDATE, or DELETE). Triggers access pseudotables NEW (representing incoming tuple state) and OLD (representing pre-event tuple state). Triggers are used to automatically populate updated_at timestamps, enforce complex audit trail logging, or maintain denormalized cached aggregate counters.',
          km: 'Database Trigger គឺជា Function ដែលត្រូវប្រព័ន្ធដាតាបេសដាស់ឱ្យដំណើការដោយស្វ័យប្រវត្តិ រាល់ពេលមានព្រឹត្តិការណ៍បន្ថែម កែប្រែ ឬលុបទិន្នន័យ (BEFORE/AFTER INSERT, UPDATE, DELETE)។ Trigger អាចទាញយក Pseudotables NEW (ទិន្នន័យថ្មីដែលកំពុងចូល) និង OLD (ទិន្នន័យចាស់មុនកែប្រែ)។ គេប្រើ Trigger សម្រាប់ប្តូរ Timestamp updated_at ស្វ័យប្រវត្តិ កត់ត្រា Audit Trail ឬធ្វើបច្ចុប្បន្នភាពស្តុក។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Database Trigger Lifecycle Intercepting UPDATE Event to Record Audit Trail Log',
            km: 'វដ្តជីវិត Trigger ចាប់យកព្រឹត្តិការណ៍ UPDATE ដើម្បីកត់ត្រាក្នុង Audit Log',
          },
          svgData: {
            nodes: [
              { id: 'event', label: 'UPDATE account SET balance = 500', subtext: 'DML Action Fired', x: 80, y: 100, type: 'primary' },
              { id: 'trig', label: 'BEFORE/AFTER TRIGGER Fired', subtext: 'Access OLD.balance & NEW.balance', x: 280, y: 100, type: 'warning' },
              { id: 'log', label: 'INSERT INTO audit_logs', subtext: 'Automated Side-Effect Executed', x: 480, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'event', to: 'trig' },
              { from: 'trig', to: 'log' }
            ]
          }
        },
        tutorial: {
          en: `### Creating Trigger in PL/pgSQL:
\`\`\`sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
\`\`\`

Let's test creating an automated updated_at timestamp trigger:`,
          km: `### បង្កើត Trigger ក្នុង PL/pgSQL Syntax៖
\`\`\`sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Automating Inventory Audit Log via AFTER UPDATE Trigger',
            km: 'ការបង្កើត Audit Log ប្រវត្តិស្តុកស្វ័យប្រវត្តិដោយប្រើ AFTER UPDATE Trigger',
          },
          description: {
            en: 'Recording previous and new stock quantities whenever inventory is modified.',
            km: 'ការកត់ត្រាចំនួនស្តុកចាស់ និងស្តុកថ្មីស្វ័យប្រវត្តិនៅពេលស្តុកប្រែប្រួល។',
          },
          code: `CREATE OR REPLACE FUNCTION log_stock_changes()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.stock_quantity <> NEW.stock_quantity THEN
    INSERT INTO stock_audit_logs (product_id, old_stock, new_stock, changed_at)
    VALUES (NEW.id, OLD.stock_quantity, NEW.stock_quantity, CURRENT_TIMESTAMP);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_stock_audit
AFTER UPDATE ON inventory
FOR EACH ROW
EXECUTE FUNCTION log_stock_changes();`,
        },
        outputPreview: {
          columns: ['trigger_status', 'result'],
          rows: [
            ['ACTIVE', 'Trigger trg_stock_audit attached successfully. Future stock updates automatically generate audit rows.']
          ],
          explanation: {
            en: 'The AFTER UPDATE trigger guarantees transparent, tamper-proof inventory auditing inside the database.',
            km: 'AFTER UPDATE trigger ធានាការកត់ត្រា audit ប្រវត្តិស្តុកដោយស្វ័យប្រវត្តិ និងមានសុវត្ថិភាពខ្ពស់។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE items (id INT, qty INT, updated_at TIMESTAMP);
-- Trigger executes automatically on UPDATE.`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Triggers automate side-effect execution inside the database engine.', km: 'Triggers ជួយរត់កូដស្វ័យប្រវត្តិក្នុងដាតាបេស។' }
          ]
        },
        quiz: [
          {
            id: 'm11-l2-q1',
            question: {
              en: 'Inside a PostgreSQL trigger function, what do the pseudotables NEW and OLD represent?',
              km: 'នៅក្នុង Trigger Function នៃ PostgreSQL តើ Pseudotables NEW និង OLD តំណាងឱ្យអ្វី?',
            },
            options: [
              { id: 'opt1', text: { en: 'NEW represents incoming tuple state; OLD represents pre-event tuple state', km: 'NEW តំណាងឱ្យទិន្នន័យថ្មីដែលកំពុងចូល; OLD តំណាងឱ្យទិន្នន័យចាស់មុនពេលប្រែប្រួល' }, isCorrect: true },
              { id: 'opt2', text: { en: 'NEW represents primary keys; OLD represents foreign keys', km: 'NEW ជា primary key; OLD ជា foreign key' }, isCorrect: false }
            ],
            explanation: {
              en: 'NEW holds the record being inserted/updated, while OLD holds the record prior to modification/deletion.',
              km: 'NEW កាន់កាប់ទិន្នន័យដែលទើបចូល/កែប្រែ ឯ OLD កាន់កាប់ទិន្នន័យដើមមុនពេលកែប្រែ។',
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-12',
    moduleNumber: 12,
    title: {
      en: 'Module 12: Database Security, Permissions & Backups',
      km: 'មូឌុលទី ១២៖ សុវត្ថិភាពដាតាបេស, សិទ្ធិប្រើប្រាស់ (RBAC) និងការ Backup',
    },
    description: {
      en: 'Implementing Role-Based Access Control (GRANT, REVOKE, ROLES), preventing SQL Injection with prepared statements, and managing WAL backups & PITR.',
      km: 'ការកំណត់សិទ្ធិ Role-Based Access Control (GRANT, REVOKE, ROLES) ការការពារ SQL Injection ជាមួយ Prepared Statements និងការធ្វើ Backup/PITR។',
    },
    lessons: [
      {
        id: 'm12-l1',
        moduleId: 'module-12',
        moduleNumber: 12,
        lessonNumber: 1,
        title: {
          en: 'Role-Based Access Control (GRANT, REVOKE, ROLES)',
          km: 'ការគ្រប់គ្រងសិទ្ធិ Role-Based Access Control (GRANT, REVOKE, ROLES)',
        },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        description: {
          en: 'Principle of Least Privilege, defining custom database roles, granting granular object privileges, and revoking unauthorized capabilities.',
          km: 'គោលការណ៍ Principle of Least Privilege ការបង្កើត Database Roles ការផ្តល់សិទ្ធិលើតារាង (GRANT) និងការដកសិទ្ធិ (REVOKE)។',
        },
        explanation: {
          en: 'Database Security enforces the Principle of Least Privilege—ensuring users and application microservices possess only the minimum required database permissions necessary to perform their specific duties. Modern RDBMSs implement Role-Based Access Control (RBAC): database administrators create logical roles (e.g., app_read_only, app_read_write), grant specific privileges (SELECT, INSERT, UPDATE, DELETE) on target schemas and tables to those roles, and assign users/services to those roles. Application connections should NEVER connect to production databases using the superuser root account.',
          km: 'សុវត្ថិភាពដាតាបេសដើរតាមគោលការណ៍ **Principle of Least Privilege** — ធានាថា អ្នកប្រើប្រាស់ និងប្រព័ន្ធអភិវឌ្ឍន៍ មានសិទ្ធិតែប៉ុណ្ណោះដែលចាំបាច់បំផុតសម្រាប់ការងាររបស់ពួកគេ។ RDBMS អនុវត្ត Role-Based Access Control (RBAC)៖ ស្ថាបត្យករដាតាបេសបង្កើត Roles (ឧ. app_read_only, app_read_write) រួចផ្តល់សិទ្ធិ (SELECT, INSERT, UPDATE) លើតារាងជាក់លាក់ ហើយចុងក្រោយប្រគល់ Role នោះទៅឱ្យ User/Service។ កម្មវិធីពិត **មិនត្រូវ** តភ្ជាប់ទៅ ដាតាបេសដោយប្រើ Account Superuser (Root) ជាដាច់ខាត។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Role-Based Access Control Architecture: Users -> Roles -> Granular Table Permissions',
            km: 'រចនាសម្ព័ន្ធ Role-Based Access Control៖ Users -> Roles -> សិទ្ធិលើតារាង',
          },
          svgData: {
            nodes: [
              { id: 'user', label: 'App Backend Service Account', subtext: 'Non-superuser connection', x: 80, y: 100, type: 'primary' },
              { id: 'role', label: 'Role: app_writer', subtext: 'Permissions: SELECT, INSERT, UPDATE', x: 280, y: 100, type: 'accent' },
              { id: 'table', label: 'Target Schema & Tables', subtext: 'Strictly Enforced Boundary', x: 480, y: 100, type: 'secondary' },
            ],
            links: [
              { from: 'user', to: 'role' },
              { from: 'role', to: 'table' }
            ]
          }
        },
        tutorial: {
          en: `### RBAC Provisioning Syntax:
\`\`\`sql
-- Create read-only role
CREATE ROLE readonly_analyst WITH LOGIN PASSWORD 'SecurePass123!';

-- Grant connect and table privileges
GRANT CONNECT ON DATABASE production_db TO readonly_analyst;
GRANT USAGE ON SCHEMA public TO readonly_analyst;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly_analyst;
\`\`\`

Let's test provisioning a restricted database role:`,
          km: `### បង្កើត RBAC Syntax៖
\`\`\`sql
-- បង្កើត Role Read-only
CREATE ROLE readonly_analyst WITH LOGIN PASSWORD 'SecurePass123!';

-- ផ្តល់សិទ្ធិ Connect និង SELECT
GRANT CONNECT ON DATABASE production_db TO readonly_analyst;
GRANT USAGE ON SCHEMA public TO readonly_analyst;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly_analyst;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Configuring Least Privilege Production Roles',
            km: 'ការកំណត់ Roles ប្រកបដោយសុវត្ថិភាព Principle of Least Privilege',
          },
          description: {
            en: 'Separating read-only reporting roles from write application roles.',
            km: 'ការបំបែកសិទ្ធិរវាង Role អានរបាយការណ៍ និង Role កែប្រែទិន្នន័យ។',
          },
          code: `-- Create application write role
CREATE ROLE web_app_user WITH LOGIN PASSWORD 'AppSecret99!';

-- Grant explicit DML privileges
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE orders, customers TO web_app_user;

-- Revoke dangerous DDL table drop capabilities
REVOKE ALL ON SCHEMA public FROM PUBLIC;`,
        },
        outputPreview: {
          columns: ['role_name', 'select_perm', 'insert_perm', 'drop_perm'],
          rows: [
            ['web_app_user', 'ALLOWED', 'ALLOWED', 'DENIED (FORBIDDEN)']
          ],
          explanation: {
            en: 'The application user account can safely perform DML but is blocked from executing destructive DROP TABLE commands.',
            km: 'Account កម្មវិធីអាចកែប្រែ DML ទិន្នន័យបាន ប៉ុន្តែត្រូវរារាំងមិនឱ្យលុបតារាងចោលឡើយ (DROP TABLE)។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE ROLE test_role;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO test_role;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Grants SELECT permission safely to test_role.', km: 'ផ្តល់សិទ្ធិ SELECT ដោយសុវត្ថិភាពទៅ test_role។' }
          ]
        },
        quiz: [
          {
            id: 'm12-l1-q1',
            question: {
              en: 'What is the Principle of Least Privilege in database security?',
              km: 'តើអ្វីជា Principle of Least Privilege ក្នុងសុវត្ថិភាពដាតាបេស?',
            },
            options: [
              { id: 'opt1', text: { en: 'Granting users and services only the minimum necessary permissions required to fulfill their duties', km: 'ការផ្តល់សិទ្ធិអប្បបរមាចាំបាច់បំផុតដែលត្រូវប្រើ ដល់អ្នកប្រើប្រាស់ និងប្រព័ន្ធអភិវឌ្ឍន៍' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Giving all developers superuser root admin access', km: 'ការប្រគល់សិទ្ធិ Superuser Root ដល់អ្នកអភិវឌ្ឍន៍ទាំងអស់' }, isCorrect: false }
            ],
            explanation: {
              en: 'Least privilege restricts access boundaries to minimize potential attack surface area.',
              km: 'Least privilege កំណត់ព្រំដែនសិទ្ធិ ដើម្បីកាត់បន្ថយហានិភ័យសុវត្ថិភាព។',
            }
          }
        ]
      },
      {
        id: 'm12-l2',
        moduleId: 'module-12',
        moduleNumber: 12,
        lessonNumber: 2,
        title: {
          en: 'SQL Injection Defense & Parameterized Queries',
          km: 'ការទប់ស្កាត់ SQL Injection ដោយប្រើ Parameterized Prepared Statements',
        },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        description: {
          en: 'Understanding SQL injection attack vectors, raw string concatenation vulnerabilities, and immune parameterized query execution.',
          km: 'ការយល់ដឹងពីការវាយប្រហារ SQL Injection គ្រោះថ្នាក់នៃការតខ្សែអក្សរ String Concatenation និងដំណោះស្រាយ Parameterized Queries។',
        },
        explanation: {
          en: 'SQL Injection is a critical security vulnerability where attacker-supplied input is improperly concatenated into raw SQL command strings, altering the intent of the executed query (e.g., passing \x27 OR 1=1 -- to bypass authentication). The absolute gold-standard defense against SQL Injection is Parameterized Queries (Prepared Statements). Parameterized statements separate query code structure from user data at the driver level: the database engine parses the query AST template first, treating user input purely as bound data literals that can NEVER be interpreted as executable SQL code.',
          km: 'SQL Injection គឺជាហានិភ័យសុវត្ថិភាពដ៏គ្រោះថ្នាក់បំផុត ដែលកើតឡើងនៅពេល input របស់ Attacker ត្រូវយកទៅតភ្ជាប់ជាមួយខ្សែអក្សរ SQL ផ្ទាល់ (String Concatenation) ដែលធ្វើឱ្យរចនាសម្ព័ន្ធ Query ប្រែប្រួល (ឧ. វាយបញ្ចូល \x27 OR 1=1 -- ដើម្បីលួច Login)។ ដំណោះស្រាយ ការពារដ៏មានប្រសិទ្ធភាពបំផុត ១០០% គឺការប្រើប្រាស់ **Parameterized Queries (Prepared Statements)**។ Parameterized queries បំបែកកូដ SQL និង ទិន្នន័យ ឱ្យដាច់ដោយឡែកពីគ្នា ដែលធ្វើឱ្យ Input ត្រូវបកស្រាយជា ទិន្នន័យ ទទេស្អាត និង **មិនអាច** ក្លាយជាកូដ SQL រត់បានឡើយ។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Vulnerable String Concatenation vs Parameterized Prepared Statement Parsing',
            km: 'ការប្រៀបធៀប Vulnerable String Concatenation និង Parameterized Prepared Statement',
          },
          svgData: {
            nodes: [
              { id: 'vuln', label: 'Vulnerable: "SELECT * FROM users WHERE name = \x27" + input', subtext: '❌ Attacker input alters query syntax tree', x: 80, y: 100, type: 'warning' },
              { id: 'prep', label: 'Secure: PREPARE stmt AS SELECT * FROM users WHERE name = $1', subtext: '✅ Input bound strictly as string literal data', x: 420, y: 100, type: 'accent' },
            ]
          }
        },
        tutorial: {
          en: `### Parameterized Prepared Statement Syntax:
\`\`\`sql
-- Prepared Statement Definition
PREPARE find_user (text) AS
SELECT id, full_name, email_address
FROM users
WHERE email_address = $1;

-- Execution with bound parameter
EXECUTE find_user('dara@gmail.com');
\`\`\`

Let's test executing a prepared statement:`,
          km: `### Parameterized Prepared Statement Syntax៖
\`\`\`sql
-- Prepared Statement Definition
PREPARE find_user (text) AS
SELECT id, full_name, email_address
FROM users
WHERE email_address = $1;

-- Execution with bound parameter
EXECUTE find_user('dara@gmail.com');
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Defending Login Endpoint Against SQL Injection',
            km: 'ការការពារ Endpoint Login ពីការវាយប្រហារ SQL Injection',
          },
          description: {
            en: 'Securing database lookup using bound positional parameters.',
            km: 'ការការពារការទាញយកទិន្នន័យដោយប្រើ Positional Parameters ($1, $2)។',
          },
          code: `-- Secure parameterized authentication lookup
PREPARE auth_user (text, text) AS
SELECT id, user_role, password_hash
FROM user_accounts
WHERE username = $1 AND is_active = TRUE;

-- Executed safely regardless of untrusted input content
EXECUTE auth_user('admin_user', 'hash_value');`,
        },
        outputPreview: {
          columns: ['param_binding', 'security_status'],
          rows: [
            ['Bound Data Placeholder ($1)', 'IMMUNE: User input parsed strictly as literal text data stream.']
          ],
          explanation: {
            en: 'Bound parameters completely neutralize SQL injection payloads by preventing AST re-parsing.',
            km: 'Bound parameters បន្សាបការវាយប្រហារ SQL Injection ទាំងស្រុង ដោយមិនអនុញ្ញាតឱ្យកូដត្រូវបកស្រាយឡើងវិញឡើយ។',
          }
        },
        tryItYourself: {
          starterCode: `PREPARE get_item (int) AS SELECT * FROM products WHERE id = $1;
EXECUTE get_item(10);`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Prepared statement binds $1 safely as an integer literal.', km: 'Prepared statement ចង $1 ជាទិន្នន័យលេខដោយសុវត្ថិភាព។' }
          ]
        },
        quiz: [
          {
            id: 'm12-l2-q1',
            question: {
              en: 'Why do Parameterized Queries (Prepared Statements) completely neutralize SQL Injection attacks?',
              km: 'ហេតុអ្វីបានជា Parameterized Queries (Prepared Statements) អាចការពារការវាយប្រហារ SQL Injection បាន ១០០%?',
            },
            options: [
              { id: 'opt1', text: { en: 'They separate query compilation from data binding, forcing the database engine to treat user input strictly as literal data', km: 'ពួកវាបំបែកការ បង្កើតកូដ និង ទិន្នន័យ ដាច់ដោយឡែក បង្ខំឱ្យដាតាបេសទុក input ត្រឹមជាទិន្នន័យអក្សរទទេ' }, isCorrect: true },
              { id: 'opt2', text: { en: 'They encrypt the database password on disk', km: 'ពួកវា encrypt password លើ disk' }, isCorrect: false }
            ],
            explanation: {
              en: 'Data parameters bound to prepared statements can never modify the pre-parsed SQL query AST structure.',
              km: 'ទិន្នន័យដែលចងជាមួយ prepared statements មិនអាចកែប្រែរចនាសម្ព័ន្ធកូដ SQL ដែលបង្កើតរួចឡើយ។',
            }
          }
        ]
      }
    ]
  }
];
