import { DatabaseSqlModule } from '../../types/databaseSqlMasteryClass';

export const MODULES_13_14: DatabaseSqlModule[] = [
  {
    id: 'module-13',
    moduleNumber: 13,
    title: {
      en: 'Module 13: Distributed Databases, Partitioning & Replication',
      km: 'មូឌុលទី ១៣៖ ប្រព័ន្ធដាតាបេស Distributed, Table Partitioning និង Replication',
    },
    description: {
      en: 'Mastering table range/hash partitioning, primary-standby streaming replication, failover high availability, and database sharding architectures.',
      km: 'ស្ទាត់ជំនាញលើ Table Partitioning (Range, List, Hash), Streaming Replication (Primary/Standby), High Availability Failover និង Sharding។',
    },
    lessons: [
      {
        id: 'm13-l1',
        moduleId: 'module-13',
        moduleNumber: 13,
        lessonNumber: 1,
        title: {
          en: 'Table Partitioning (Range, List, Hash)',
          km: 'បច្ចេកទេស Table Partitioning (Range, List, Hash Partitioning)',
        },
        durationMinutes: 25,
        difficulty: 'Advanced',
        description: {
          en: 'Splitting giant multi-gigabyte tables into manageable physical partitions to enable partition pruning and rapid maintenance.',
          km: 'ការបំបែកតារាងយក្សដែលមានទំហំរាប់រយ Gigabytes ឱ្យទៅជា Partitions តូចៗ ដើម្បីបង្កើនល្បឿន Query និងការថែទាំ។',
        },
        explanation: {
          en: 'Table Partitioning divides a single logical table into smaller, independent physical child tables (partitions) based on key criteria (Range, List, or Hash). When queries include the partitioning key in their WHERE filter, the query planner performs Partition Pruning—skipping entire unneeded child partitions upfront without reading a single disk page. Partitioning also simplifies maintenance, allowing instant removal of historical records via fast DROP TABLE child_partition rather than executing slow DELETE operations.',
          km: 'Table Partitioning បំបែកតារាងយក្សមួយ ឱ្យទៅជាតារាងកូនតូចៗឯករាជ្យលើ Disk ដោយផ្អែកលើលក្ខខណ្ឌ (Range, List, ឬ Hash)។ នៅពេល Query មានលក្ខខណ្ឌចម្រោះលើ Partition Key ប្រព័ន្ធនឹងធ្វើ **Partition Pruning** — រំលងមិនអានតារាងកូនដែលមិនពាក់ព័ន្ធទាំងអស់ ដែលជួយឱ្យ Query រត់លឿនជ្រុល។ Partitioning ក៏ជួយសម្រួលការលុបទិន្នន័យចាស់ៗផងដែរ ដោយគ្រាន់តែប្រើ DROP TABLE កូន ជំនួសឱ្យការរត់ DELETE យឺតយ៉ាវ។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Range Partitioning Architecture Routing Rows by Date to Physical Child Tables',
            km: 'រចនាសម្ព័ន្ធ Range Partitioning បង្វែរទិន្នន័យតាមកាលបរិច្ឆេទទៅតារាងកូនលើ Disk',
          },
          svgData: {
            nodes: [
              { id: 'parent', label: 'Parent Table: orders', subtext: 'PARTITION BY RANGE (order_date)', x: 260, y: 50, type: 'primary' },
              { id: 'p2025', label: 'orders_2025', subtext: 'Range: 2025-01-01 to 2025-12-31', x: 100, y: 150, type: 'secondary' },
              { id: 'p2026', label: 'orders_2026', subtext: 'Range: 2026-01-01 to 2026-12-31', x: 420, y: 150, type: 'accent' },
            ],
            links: [
              { from: 'parent', to: 'p2025' },
              { from: 'parent', to: 'p2026' }
            ]
          }
        },
        tutorial: {
          en: `### Range Partitioning Syntax:
\`\`\`sql
-- Parent Declarative Partition Table
CREATE TABLE metrics_log (
  id BIGSERIAL,
  log_date DATE NOT NULL,
  payload TEXT
) PARTITION BY RANGE (log_date);

-- Child Partition Definition
CREATE TABLE metrics_log_2026_q3 PARTITION OF metrics_log
  FOR VALUES FROM ('2026-07-01') TO ('2026-10-01');
\`\`\`

Let's test declarative partitioning creation:`,
          km: `### Declarative Range Partitioning Syntax៖
\`\`\`sql
-- Parent Partition Table
CREATE TABLE metrics_log (
  id BIGSERIAL,
  log_date DATE NOT NULL,
  payload TEXT
) PARTITION BY RANGE (log_date);

-- Child Partition Definition
CREATE TABLE metrics_log_2026_q3 PARTITION OF metrics_log
  FOR VALUES FROM ('2026-07-01') TO ('2026-10-01');
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Implementing Declarative Monthly Orders Partitioning',
            km: 'ការបង្កើត Declarative Monthly Partitioning សម្រាប់តារាងបញ្ជាទិញ',
          },
          description: {
            en: 'Designing range partitions for high-volume order history.',
            km: 'ការរចនា Range Partitions សម្រាប់ប្រវត្តិនៃការបញ្ជាទិញដែលមានទិន្នន័យច្រើន។',
          },
          code: `CREATE TABLE order_history (
  id BIGINT NOT NULL,
  customer_id INT NOT NULL,
  order_date DATE NOT NULL,
  total_amount NUMERIC(12, 2)
) PARTITION BY RANGE (order_date);

-- Create August 2026 Partition
CREATE TABLE order_history_2026_08 PARTITION OF order_history
  FOR VALUES FROM ('2026-08-01') TO ('2026-09-01');`,
        },
        outputPreview: {
          columns: ['partition_name', 'pruning_status'],
          rows: [
            ['order_history_2026_08', 'PARTITION PRUNING ACTIVE: August queries strictly scan this partition.']
          ],
          explanation: {
            en: 'Queries filtering "order_date = 2026-08-03" prune away all non-August partitions, scanning only 1/12th of data.',
            km: 'Query ដែលចម្រោះ "order_date = 2026-08-03" នឹងអានតែតារាងកូនខែសីហា ដោយរំលង ១១ តារាងផ្សេងទៀត។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE sales_part (id INT, sale_date DATE) PARTITION BY RANGE (sale_date);
CREATE TABLE sales_2026 PARTITION OF sales_part FOR VALUES FROM ('2026-01-01') TO ('2027-01-01');`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Inserts with dates in 2026 route automatically into sales_2026 partition.', km: 'ទិន្នន័យឆ្នាំ ២០២៦ នឹងរត់ចូលក្នុង sales_2026 ដោយស្វ័យប្រវត្តិ។' }
          ]
        },
        quiz: [
          {
            id: 'm13-l1-q1',
            question: {
              en: 'What is Partition Pruning in relational database query execution?',
              km: 'តើអ្វីជា Partition Pruning ក្នុងការដំណើការ Query លើ RDBMS?',
            },
            options: [
              { id: 'opt1', text: { en: 'The optimization mechanism where the query planner automatically bypasses reading child partitions that do not match WHERE clauses', km: 'យន្តការដែល Query Planner រំលងមិនអានតារាងកូនណាដែលមិនត្រូវនឹងលក្ខខណ្ឌ WHERE' }, isCorrect: true },
              { id: 'opt2', text: { en: 'A tool that deletes database tables', km: 'ឧបករណ៍សម្រាប់លុបតារាង' }, isCorrect: false }
            ],
            explanation: {
              en: 'Partition Pruning eliminates unneeded physical child partition scans during query planning.',
              km: 'Partition Pruning លុបបំបាត់ការអានតារាងកូនដែលមិនចាំបាច់ក្នុងអំឡុងពេលរត់ query។',
            }
          }
        ]
      },
      {
        id: 'm13-l2',
        moduleId: 'module-13',
        moduleNumber: 13,
        lessonNumber: 2,
        title: {
          en: 'Database Replication & High Availability',
          km: 'Database Streaming Replication និង High Availability Failover',
        },
        durationMinutes: 25,
        difficulty: 'Master',
        description: {
          en: 'Configuring Primary-Standby Write/Read splitting, Write-Ahead Log (WAL) streaming, and automatic high-availability failover.',
          km: 'ការរៀបចំ Primary-Standby Architecture, WAL Streaming Replication និងប្រព័ន្ធ Failover ស្វ័យប្រវត្តិ។',
        },
        explanation: {
          en: 'Enterprise High Availability (HA) architectures rely on Database Replication—replicating state changes from a Primary write node to one or more Read-Replica Standby nodes. In PostgreSQL Streaming Replication, write transactions committed on the Primary write node generate Write-Ahead Log (WAL) record bytes, which are continuously streamed over TCP network sockets to Standby nodes. Standby nodes apply incoming WAL bytes to stay synchronized, offloading heavy read reporting traffic from the primary master.',
          km: 'ប្រព័ន្ធ Enterprise High Availability (HA) ផ្អែកលើ **Database Replication** — ការចម្លងទិន្នន័យពី Primary Write Node ទៅកាន់ Read-Replica Standby Nodes ច្រើន។ ក្នុង PostgreSQL Streaming Replication រាល់ពេលមាន Transaction COMMIT លើ Primary Node វាបង្កើតទិន្នន័យ Write-Ahead Log (WAL) ហើយបញ្ជូនតាមបណ្តាញ TCP ទៅកាន់ Standby Nodes ភ្លាមៗ។ Standby Nodes ទទួលយក WAL មក Update ទិន្នន័យឱ្យដូច Primary ដែលជួយទទួលការ Read របាយការណ៍ធ្ងន់ៗ មិនឱ្យប៉ះពាល់ Primary ឡើយ។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Primary-Standby Streaming Replication Architecture with Read-Replica Offloading',
            km: 'រចនាសម្ព័ន្ធ Streaming Replication៖ Primary Node (Write) -> WAL Stream -> Standby Nodes (Read)',
          },
          svgData: {
            nodes: [
              { id: 'master', label: 'Primary Master Node (R/W)', subtext: 'Handles INSERT/UPDATE/DELETE', x: 80, y: 100, type: 'primary' },
              { id: 'wal', label: 'WAL Network Stream', subtext: 'Real-time Async / Sync Bytes', x: 280, y: 100, type: 'warning' },
              { id: 'replica', label: 'Standby Read Replica (R/O)', subtext: 'Offloads Heavy Analytics Queries', x: 480, y: 100, type: 'accent' },
            ],
            links: [
              { from: 'master', to: 'wal' },
              { from: 'wal', to: 'replica' }
            ]
          }
        },
        tutorial: {
          en: `### Replication Flow Concept:
1. Application writes (INSERT/UPDATE/DELETE) connect to **Primary Node**.
2. Primary writes to local disk Write-Ahead Log (WAL).
3. WAL Sender process streams bytes to **Standby Node**.
4. Application read traffic (SELECT) targets **Standby Replicas**.

Let's test checking replication lag status:`,
          km: `### ដំណើរការ Replication Concept៖
១. កម្មវិធីសរសេរទិន្នន័យ (INSERT/UPDATE) តភ្ជាប់ទៅ **Primary Node**។
២. Primary សរសេរចូល Write-Ahead Log (WAL)។
៣. WAL Sender បញ្ជូនទិន្នន័យទៅ **Standby Node**។
៤. កម្មវិធីអានទិន្នន័យ (SELECT) តភ្ជាប់ទៅ **Standby Replicas**។`,
        },
        codeExample: {
          title: {
            en: 'Monitoring PostgreSQL Streaming Replication Lag',
            km: 'ការពិនិត្យមើលអត្រាយឺតយ៉ាវ (Replication Lag) នៃ Standby Nodes',
          },
          description: {
            en: 'Querying pg_stat_replication system catalog view.',
            km: 'ការ Query មើលព័ត៌មាន Streaming Replication តាម pg_stat_replication។',
          },
          code: `SELECT 
  client_addr AS replica_ip,
  application_name,
  state,
  sync_state,
  pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) AS replication_lag_bytes
FROM pg_stat_replication;`,
        },
        outputPreview: {
          columns: ['replica_ip', 'application_name', 'state', 'sync_state', 'replication_lag_bytes'],
          rows: [
            ['10.0.1.50', 'standby_node_1', 'streaming', 'async', 0]
          ],
          explanation: {
            en: 'The standby replica is actively streaming with 0 bytes lag, maintaining real-time consistency.',
            km: 'Standby replica កំពុងដំណើការ streaming យ៉ាងរលូន ដោយគ្មាន Lag (0 bytes) ឡើយ។',
          }
        },
        tryItYourself: {
          starterCode: `SELECT pg_is_in_recovery();`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Returns false on Primary write node; returns true on Standby read replica.', km: 'បង្វិល false លើ Primary node; បង្វិល true លើ Standby replica។' }
          ]
        },
        quiz: [
          {
            id: 'm13-l2-q1',
            question: {
              en: 'What is the primary role of Standby Read Replicas in enterprise database architecture?',
              km: 'តើអ្វីជាតួនាទីសំខាន់នៃ Standby Read Replicas ក្នុងស្ថាបត្យកម្មដាតាបេស?',
            },
            options: [
              { id: 'opt1', text: { en: 'Offload heavy SELECT read query traffic and provide instant failover backup redundancy', km: 'ទទួលបន្ទុកការ Query Read ធ្ងន់ៗ និងផ្តល់ការ Backup ទិន្នន័យពេល Primary មានបញ្ហា (Failover)' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Execute primary schema migrations', km: 'រត់ schema migration ដំបូង' }, isCorrect: false }
            ],
            explanation: {
              en: 'Replicas distribute read traffic workload and provide high availability failover targets.',
              km: 'Replicas ជួយបែងចែកបន្ទុកការ Read និងផ្តល់សុវត្ថិភាពទិន្នន័យពេល Primary មានបញ្ហា។',
            }
          }
        ]
      }
    ]
  },
  {
    id: 'module-14',
    moduleNumber: 14,
    title: {
      en: 'Module 14: Capstone Project — Production Relational System',
      km: 'មូឌុលទី ១៤៖ គម្រោងបញ្ចប់ការសិក្សា (Capstone Project — Production Relational System)',
    },
    description: {
      en: 'Designing and building a complete production-grade relational database system with schema DDL, indexing, views, triggers, and analytical queries.',
      km: 'ការរចនា និងសរសេរប្រព័ន្ធដាតាបេស Relational កម្រិត Production ពេញលេញ រួមមាន DDL Schema, Constraints, Indexing, Views, Triggers និង Complex Queries។',
    },
    lessons: [
      {
        id: 'm14-l1',
        moduleId: 'module-14',
        moduleNumber: 14,
        lessonNumber: 1,
        title: {
          en: 'Capstone Architecture Blueprint & Requirements',
          km: 'ប្លង់ស្ថាបត្យកម្មគម្រោង Capstone និងតម្រូវការប្រព័ន្ធ',
        },
        durationMinutes: 30,
        difficulty: 'Master',
        description: {
          en: 'Reviewing functional specifications for designing an enterprise multi-tenant e-commerce & inventory relational database.',
          km: 'ការពិនិត្យមើលលក្ខណៈបច្ចេកទេស និងតម្រូវការប្រព័ន្ធសម្រាប់ការរចនាដាតាបេស E-Commerce & Inventory។',
        },
        explanation: {
          en: 'The Capstone Project evaluates your complete mastery of relational database design and SQL engineering. You are tasked with architecting a robust production database system for an enterprise E-Commerce & Logistics Platform. The system must strictly enforce 3NF normalization, construct foreign key referential integrity constraints, create B-Tree/Composite indexes for query optimization, build security roles, construct an automated audit trail trigger, and write complex window function reporting queries.',
          km: 'គម្រោង Capstone វាយតម្លៃសមត្ថភាព និងភាពស្ទាត់ជំនាញពេញលេញរបស់អ្នកលើការរចនាដាតាបេស Relational និងកូដ SQL។ អ្នកនឹងត្រូវរចនាប្រព័ន្ធដាតាបេស Production សម្រាប់ប្រព័ន្ធ E-Commerce & Logistics។ ប្រព័ន្ធត្រូវតែរៀបចំតាម 3NF Normalization, បង្កើត Foreign Keys ត្រឹមត្រូវ, បង្កើត B-Tree/Composite Indexes ឱ្យ Query រត់លឿន, កំណត់ Security Roles, បង្កើត Automated Audit Trail Trigger និងសរសេរ Window Function Reporting Queries។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Enterprise E-Commerce Relational Database Architecture ER Diagram',
            km: 'ដ្យាក្រាមស្ថាបត្យកម្មដាតាបេស Enterprise E-Commerce (ER Diagram)',
          },
          svgData: {
            nodes: [
              { id: 'u', label: 'users (PK id)', subtext: 'RBAC & Auth', x: 80, y: 50, type: 'primary' },
              { id: 'o', label: 'orders (PK id, FK user_id)', subtext: 'Order Header', x: 280, y: 50, type: 'accent' },
              { id: 'i', label: 'order_items (FK order_id, product_id)', subtext: 'Line Item Detail', x: 480, y: 50, type: 'secondary' },
              { id: 'p', label: 'products (PK id)', subtext: 'Inventory Managed', x: 380, y: 150, type: 'primary' },
            ],
            links: [
              { from: 'u', to: 'o' },
              { from: 'o', to: 'i' },
              { from: 'p', to: 'i' }
            ]
          }
        },
        tutorial: {
          en: `### Capstone Checklist Requirements:
1. **Schema DDL**: 3NF Normalized tables with explicit PKs, FKs, CHECK constraints.
2. **Indexing**: Composite and B-Tree indexes on search & join key columns.
3. **Automated Audit**: Trigger logging modifications into audit table.
4. **Analytics**: Window function reporting query computing customer lifetime rankings.

Let's inspect the complete schema blueprint:`,
          km: `### បញ្ជីផ្ទៀងផ្ទាត់តម្រូវការ Capstone (Checklist)៖
១. **Schema DDL**៖ តារាង 3NF Normalization មាន PKs, FKs, CHECK លម្អិត។
២. **Indexing**៖ Composite និង B-Tree indexes លើជួរឈរ Join & Search។
៣. **Automated Audit**៖ Trigger កត់ត្រាប្រវត្តិស្វ័យប្រវត្តិ។
៤. **Analytics**៖ Window function reporting គណនាអត្រាអតិថិជន។`,
        },
        codeExample: {
          title: {
            en: 'Complete Production Capstone DDL Schema',
            km: 'កូដ DDL Schema ពេញលេញសម្រាប់ Capstone Project',
          },
          description: {
            en: 'Defining production tables with primary keys, foreign keys, and check constraints.',
            km: 'ការបង្កើតតារាង DDL ជាមួយ Primary Keys, Foreign Keys និង CHECK constraints។',
          },
          code: `CREATE TABLE capstone_customers (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE capstone_orders (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES capstone_customers(id) ON DELETE RESTRICT,
  total_amount NUMERIC(10, 2) CHECK (total_amount >= 0.00),
  order_status VARCHAR(20) DEFAULT 'PENDING',
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_cap_orders_cust ON capstone_orders(customer_id, order_date DESC);`,
        },
        outputPreview: {
          columns: ['status', 'tables_created'],
          rows: [
            ['SUCCESS', 'Capstone production schema tables and indexes created successfully.']
          ],
          explanation: {
            en: 'The capstone database schema is fully deployed with strict relational integrity constraints.',
            km: 'Capstone database schema ត្រូវបង្កើតយ៉ាងជោគជ័យជាមួយលក្ខខណ្ឌសុវត្ថិភាពដាតាបេស។',
          }
        },
        tryItYourself: {
          starterCode: `CREATE TABLE cap_test (id INT PRIMARY KEY, name TEXT);
INSERT INTO cap_test VALUES (1, 'Mastery');
SELECT * FROM cap_test;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Capstone schema initializes cleanly.', km: 'Capstone schema ដំណើរការយ៉ាងរលូន។' }
          ]
        },
        quiz: [
          {
            id: 'm14-l1-q1',
            question: {
              en: 'Which foreign key ON DELETE constraint setting prevents accidental deletion of a customer record if active orders exist?',
              km: 'តើការកំណត់ ON DELETE មួយណាដែលទប់ស្កាត់មិនឱ្យលុបអតិថិជន ប្រសិនបើគាត់មាន Order កំពុងដំណើការ?',
            },
            options: [
              { id: 'opt1', text: { en: 'ON DELETE RESTRICT (or NO ACTION)', km: 'ON DELETE RESTRICT (ឬ NO ACTION)' }, isCorrect: true },
              { id: 'opt2', text: { en: 'ON DELETE CASCADE', km: 'ON DELETE CASCADE' }, isCorrect: false }
            ],
            explanation: {
              en: 'ON DELETE RESTRICT rejects parent tuple deletion if referencing child rows exist.',
              km: 'ON DELETE RESTRICT បដិសេធមិនឱ្យលុបតារាងមេឡើយ បើមានតារាងកូនកំពុងភ្ជាប់។',
            }
          }
        ]
      },
      {
        id: 'm14-l2',
        moduleId: 'module-14',
        moduleNumber: 14,
        lessonNumber: 2,
        title: {
          en: 'Capstone Project Submission & Portfolio Audit',
          km: 'ការដាក់ប្រទានគម្រោង Capstone និងការប្រឡងបញ្ចប់វគ្គ (Mastery Evaluation)',
        },
        durationMinutes: 45,
        difficulty: 'Master',
        description: {
          en: 'Executing final analytical queries, auditing schema index performance, and submitting your production database portfolio.',
          km: 'ការរត់ Analytical Queries ចុងក្រោយ ការពិនិត្យមើល Performance នៃ Indexing និងការដាក់ស្នើគម្រោងបញ្ចប់ការសិក្សា។',
        },
        explanation: {
          en: 'Congratulations on reaching the final milestone of Database Design & SQL Mastery! In this final lesson, you execute the full analytical suite against your Capstone production schema, evaluating execution plans using EXPLAIN ANALYZE, verifying trigger automated logs, and submitting your portfolio for completion certification.',
          km: 'សូមអបអរសាទរដែលបានឈានមកដល់ដំណាក់កាលចុងក្រោយនៃថ្នាក់រៀន Database Design & SQL Mastery! ក្នុងមេរៀនបញ្ចប់នេះ អ្នកនឹងរត់ Analytical Query ពេញលេញលើ Capstone Production Schema, ផ្ទៀងផ្ទាត់ Execution Plans ជាមួយ EXPLAIN ANALYZE, ពិនិត្យមើល Trigger Logs និងដាក់ស្នើគម្រោងដើម្បីទទួល Certificate បញ្ចប់ការសិក្សា។',
        },
        diagram: {
          type: 'architecture',
          caption: {
            en: 'Database Mastery Completion Certificate Verification Pipeline',
            km: 'ដំណើរការផ្ទៀងផ្ទាត់ និងប្រគល់វិញ្ញាបនបត្របញ្ចប់ការសិក្សា Database Mastery',
          },
          svgData: {
            nodes: [
              { id: 'ddl', label: 'Schema Audit: 3NF & Foreign Keys', subtext: 'Verified 100%', x: 80, y: 100, type: 'primary' },
              { id: 'idx', label: 'Performance Audit: EXPLAIN ANALYZE', subtext: 'Index Scans Confirmed', x: 280, y: 100, type: 'accent' },
              { id: 'cert', label: 'Mastery Certificate Issued', subtext: 'Certified SQL Engineer', x: 480, y: 100, type: 'secondary' },
            ],
            links: [
              { from: 'ddl', to: 'idx' },
              { from: 'idx', to: 'cert' }
            ]
          }
        },
        tutorial: {
          en: `### Final Master Analytical Query:
\`\`\`sql
WITH customer_metrics AS (
  SELECT 
    c.id AS customer_id,
    c.full_name,
    COUNT(o.id) AS order_count,
    SUM(o.total_amount) AS total_spent,
    DENSE_RANK() OVER(ORDER BY SUM(o.total_amount) DESC) AS customer_rank
  FROM capstone_customers c
  JOIN capstone_orders o ON c.id = o.customer_id
  GROUP BY c.id, c.full_name
)
SELECT * FROM customer_metrics WHERE customer_rank <= 5;
\`\`\`

Let's execute the final capstone analytical query:`,
          km: `### Final Master Analytical Query៖
\`\`\`sql
WITH customer_metrics AS (
  SELECT 
    c.id AS customer_id,
    c.full_name,
    COUNT(o.id) AS order_count,
    SUM(o.total_amount) AS total_spent,
    DENSE_RANK() OVER(ORDER BY SUM(o.total_amount) DESC) AS customer_rank
  FROM capstone_customers c
  JOIN capstone_orders o ON c.id = o.customer_id
  GROUP BY c.id, c.full_name
)
SELECT * FROM customer_metrics WHERE customer_rank <= 5;
\`\`\``,
        },
        codeExample: {
          title: {
            en: 'Master Capstone Portfolio Analytical Reporting Query',
            km: 'កូដ Master Query សម្រាប់ Capstone Reporting',
          },
          description: {
            en: 'Computing customer lifetime rankings with CTEs and DENSE_RANK window functions.',
            km: 'ការគណនាចំណាត់ថ្នាក់តម្លៃអតិថិជនដោយប្រើ CTEs និង DENSE_RANK។',
          },
          code: `WITH customer_revenue AS (
  SELECT 
    c.id AS customer_id,
    c.full_name,
    c.email,
    COUNT(o.id) AS total_orders,
    COALESCE(SUM(o.total_amount), 0.00) AS total_lifetime_spent,
    DENSE_RANK() OVER(ORDER BY COALESCE(SUM(o.total_amount), 0.00) DESC) AS vip_rank
  FROM capstone_customers AS c
  JOIN capstone_orders AS o ON c.id = o.customer_id
  GROUP BY c.id, c.full_name, c.email
)
SELECT 
  vip_rank,
  full_name,
  email,
  total_orders,
  total_lifetime_spent
FROM customer_revenue
WHERE vip_rank <= 10
ORDER BY vip_rank ASC;`,
        },
        outputPreview: {
          columns: ['vip_rank', 'full_name', 'email', 'total_orders', 'total_lifetime_spent'],
          rows: [
            [1, 'Sophea Sok', 'sophea@gmail.com', 24, 15890.00],
            [2, 'Dara Ly', 'dara@gmail.com', 18, 12450.00],
            [3, 'Bopha Vonn', 'bopha@gmail.com', 14, 9800.00]
          ],
          explanation: {
            en: 'The Master Capstone query computed VIP customer rankings across the production schema with full accuracy.',
            km: 'Master Capstone query គណនាចំណាត់ថ្នាក់ VIP Customers លើ Production Schema យ៉ាងត្រឹមត្រូវ ១០០%។',
          }
        },
        tryItYourself: {
          starterCode: `SELECT 'Database Design & SQL Mastery Course Completed!' AS status;`,
          sampleDataSetupSql: ``,
          hints: [
            { en: 'Congratulations! You have completed Database Design & SQL Mastery.', km: 'សូមអបអរសាទរ! អ្នកបានបញ្ចប់ថ្នាក់រៀន Database Design & SQL Mastery។' }
          ]
        },
        quiz: [
          {
            id: 'm14-l2-q1',
            question: {
              en: 'Which SQL features were combined in the master capstone reporting query?',
              km: 'តើសមត្ថភាព SQL ណាខ្លះដែលត្រូវបានរួមបញ្ចូលគ្នាក្នុង Master Capstone Reporting Query?',
            },
            options: [
              { id: 'opt1', text: { en: 'CTEs (WITH clause), Table JOINS, GROUP BY aggregations, and DENSE_RANK() window functions', km: 'CTEs (WITH clause), Table JOINS, GROUP BY aggregations និង DENSE_RANK() window functions' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Only simple SELECT * without joins', km: 'មានតែ SELECT * សាមញ្ញ' }, isCorrect: false }
            ],
            explanation: {
              en: 'The capstone query combined modular CTEs, relational joins, grouping, and window function rankings.',
              km: 'Capstone query បានបូកបញ្ចូលគ្នានូវ CTEs, JOINS, GROUP BY និង DENSE_RANK() window functions។',
            }
          }
        ]
      }
    ]
  }
];
