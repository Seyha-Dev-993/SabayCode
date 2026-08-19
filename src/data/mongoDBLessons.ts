import { Topic, ReferenceItem, Quiz, MiniProject } from '../types';

export const mongoDBTopics: Topic[] = [
  {
    "id": "mongodb-foundations",
    "title": {
      "en": "1. MongoDB Foundations & Architecture",
      "km": "១. គ្រឹះនៃ MongoDB និងស្ថាបត្យកម្ម"
    },
    "lessons": [
      {
        "id": "mongodb-intro-rdbms-vs-doc",
        "title": {
          "en": "What Is MongoDB & Document vs Relational Databases",
          "km": "អ្វីទៅជា MongoDB និងការប្រៀបធៀប រវាង Document ជាមួយ Relational Database"
        },
        "content": {
          "en": "### What Is MongoDB & Document vs Relational Databases\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nMongoDB is a modern, high-performance NoSQL document database designed for high availability, automatic scaling, and rapid schema evolution. Unlike traditional Relational Database Management Systems (RDBMS) that enforce rigid tabular schemas with fixed columns and foreign keys, MongoDB stores records as flexible, self-describing BSON documents. In high-throughput backend applications—such as SabayCode's learning platform, ABA KHQR payment gateways, or real-time e-commerce platforms—document databases eliminate costly table joins for read operations by co-locating nested data in a single document read. This flexible paradigm allows software engineers to iterate rapidly without running lock-heavy DDL migrations.\n\n#### Code Example\n```javascript\ndb.students.insertOne({\n  studentId: \"STU-882910\",\n  fullName: \"Sophea Chan\",\n  email: \"sophea.chan@sabaycode.com\",\n  enrolledCourses: [\"mongodb-master\", \"react-advanced\"],\n  membership: { plan: \"PREMIUM_PRO\", validUntil: ISODate(\"2026-12-31T23:59:59Z\") },\n  createdAt: new Date()\n});\n\ndb.students.find({ studentId: \"STU-882910\" });\n```\n\n#### Expected Output\n```json\n{\n  \"_id\": ObjectId(\"66aba1f2001e2b0000000001\"),\n  \"studentId\": \"STU-882910\",\n  \"fullName\": \"Sophea Chan\",\n  \"email\": \"sophea.chan@sabaycode.com\",\n  \"enrolledCourses\": [ \"mongodb-master\", \"react-advanced\" ],\n  \"membership\": { \"plan\": \"PREMIUM_PRO\", \"validUntil\": ISODate(\"2026-12-31T23:59:59Z\") }\n}\n```",
          "km": "### អ្វីទៅជា MongoDB និងការប្រៀបធៀប រវាង Document ជាមួយ Relational Database\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nMongoDB គឺជាប្រព័ន្ធគ្រប់គ្រងទិន្នន័យ NoSQL Document ទំនើប និងមានល្បឿនលឿនខ្ពស់ ដែលត្រូវបានរចនាឡើងសម្រាប់ប្រព័ន្ធធំៗប្រកបដោយ High Availability និង Scalability។ ខុសពីប្រព័ន្ធ Relational Database (RDBMS) ដែលតម្រូវឱ្យមានរចនាសម្ព័ន្ធតារាង និង Foreign Keys យ៉ាងតឹងរ៉ឹង MongoDB រក្សាទុកទិន្នន័យជាទម្រង់ BSON Documents ដ៏បត់បែន។ នៅក្នុងប្រព័ន្ធសហគ្រាសដូចជា SabayCode, ប្រព័ន្ធទូទាត់ ABA KHQR ឬ E-commerce ប្រព័ន្ធ Document Database ជួយលុបបំបាត់ការធ្វើ Join តារាងច្រើនជាន់ ដែលធ្វើឱ្យការ Read ទិន្នន័យមានល្បឿនលឿនបំផុត។ អ្នកអភិវឌ្ឍន៍សូហ្វវែរអាចបន្ថែម Field ថ្មីៗបានយ៉ាងងាយស្រួលដោយមិនបាច់រត់ DDL Migration ឡើយ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.students.insertOne({\n  studentId: \"STU-882910\",\n  fullName: \"Sophea Chan\",\n  email: \"sophea.chan@sabaycode.com\",\n  enrolledCourses: [\"mongodb-master\", \"react-advanced\"],\n  membership: { plan: \"PREMIUM_PRO\", validUntil: ISODate(\"2026-12-31T23:59:59Z\") },\n  createdAt: new Date()\n});\n\ndb.students.find({ studentId: \"STU-882910\" });\n```\n\n#### Expected Output\n```json\n{\n  \"_id\": ObjectId(\"66aba1f2001e2b0000000001\"),\n  \"studentId\": \"STU-882910\",\n  \"fullName\": \"Sophea Chan\",\n  \"email\": \"sophea.chan@sabaycode.com\",\n  \"enrolledCourses\": [ \"mongodb-master\", \"react-advanced\" ],\n  \"membership\": { \"plan\": \"PREMIUM_PRO\", \"validUntil\": ISODate(\"2026-12-31T23:59:59Z\") }\n}\n```"
        },
        "starterCode": "db.students.insertOne({\n  studentId: \"STU-882910\",\n  fullName: \"Sophea Chan\",\n  email: \"sophea.chan@sabaycode.com\",\n  enrolledCourses: [\"mongodb-master\", \"react-advanced\"],\n  membership: { plan: \"PREMIUM_PRO\", validUntil: ISODate(\"2026-12-31T23:59:59Z\") },\n  createdAt: new Date()\n});\n\ndb.students.find({ studentId: \"STU-882910\" });"
      },
      {
        "id": "mongodb-bson-vs-json",
        "title": {
          "en": "BSON vs JSON — How MongoDB Actually Stores Data",
          "km": "BSON vs JSON — របៀបដែល MongoDB រក្សាទុកទិន្នន័យពិតប្រាកដ"
        },
        "content": {
          "en": "### BSON vs JSON — How MongoDB Actually Stores Data\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nWhile developers interact with MongoDB using JSON strings, MongoDB internally stores and transmits data as BSON (Binary JSON). JSON is text-based, human-readable, and lacks specific scalar data types like explicit 64-bit integers, dates, float precision distinctions, or binary byte arrays. BSON solves these limitations by adding rich data typing, length prefixes for fast traversal, and high-performance binary encoding. In production database management, understanding BSON types like ObjectId, Date, Decimal128, and Long is critical for financial calculations (such as Cambodian KHR/USD currency exchanges) and query indexing efficiency. This ensures zero rounding errors in banking or payment transactions.\n\n#### Code Example\n```javascript\ndb.transactions.insertOne({\n  txnId: \"TXN-PHNOMPENH-99201\",\n  amountUsd: NumberDecimal(\"125.50\"),\n  amountKhr: NumberLong(514550),\n  paymentStatus: \"COMPLETED\",\n  executedAt: new Date(\"2026-08-01T10:00:00Z\"),\n  customerRef: ObjectId(\"66aba1f2001e2b0000000001\")\n});\n\ndb.transactions.find({ txnId: \"TXN-PHNOMPENH-99201\" });\n```\n\n#### Expected Output\n```json\n{\n  \"_id\": ObjectId(\"66aba1f2001e2b00000000a9\"),\n  \"txnId\": \"TXN-PHNOMPENH-99201\",\n  \"amountUsd\": NumberDecimal(\"125.50\"),\n  \"amountKhr\": NumberLong(514550),\n  \"paymentStatus\": \"COMPLETED\",\n  \"executedAt\": ISODate(\"2026-08-01T10:00:00Z\")\n}\n```",
          "km": "### BSON vs JSON — របៀបដែល MongoDB រក្សាទុកទិន្នន័យពិតប្រាកដ\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nទោះបីជាអ្នកអភិវឌ្ឍន៍មើលឃើញទិន្នន័យជាទម្រង់ JSON នៅលើ Screen ក៏ដោយ MongoDB រក្សាទុកទិន្នន័យខាងក្នុងជាទម្រង់ BSON (Binary JSON)។ JSON ធម្មតាជាអត្ថបទ (Text-based) ដែលគ្មាន Type ច្បាស់លាស់សម្រាប់ Date, Binary, 64-bit Integer ឬ Decimal128 ឡើយ។ BSON ដោះស្រាយបញ្ហានេះដោយបន្ថែម Type ផ្លូវការ ល្បឿនអានលឿនជាងមុន និងសមត្ថភាពរក្សាទុកទិន្នន័យហិរញ្ញវត្ថុ (ដូចជាប្រាក់រៀល KHR និងប្រាក់ដុល្លារ USD) យ៉ាងត្រឹមត្រូវ។ ការយល់ដឹងពី BSON ជួយការពារកុំឱ្យមានកំហុស Rounding Error ក្នុងការគណនាប្រាក់ក្នុងប្រព័ន្ធទូទាត់។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.transactions.insertOne({\n  txnId: \"TXN-PHNOMPENH-99201\",\n  amountUsd: NumberDecimal(\"125.50\"),\n  amountKhr: NumberLong(514550),\n  paymentStatus: \"COMPLETED\",\n  executedAt: new Date(\"2026-08-01T10:00:00Z\"),\n  customerRef: ObjectId(\"66aba1f2001e2b0000000001\")\n});\n\ndb.transactions.find({ txnId: \"TXN-PHNOMPENH-99201\" });\n```\n\n#### Expected Output\n```json\n{\n  \"_id\": ObjectId(\"66aba1f2001e2b00000000a9\"),\n  \"txnId\": \"TXN-PHNOMPENH-99201\",\n  \"amountUsd\": NumberDecimal(\"125.50\"),\n  \"amountKhr\": NumberLong(514550),\n  \"paymentStatus\": \"COMPLETED\",\n  \"executedAt\": ISODate(\"2026-08-01T10:00:00Z\")\n}\n```"
        },
        "starterCode": "db.transactions.insertOne({\n  txnId: \"TXN-PHNOMPENH-99201\",\n  amountUsd: NumberDecimal(\"125.50\"),\n  amountKhr: NumberLong(514550),\n  paymentStatus: \"COMPLETED\",\n  executedAt: new Date(\"2026-08-01T10:00:00Z\"),\n  customerRef: ObjectId(\"66aba1f2001e2b0000000001\")\n});\n\ndb.transactions.find({ txnId: \"TXN-PHNOMPENH-99201\" });"
      },
      {
        "id": "mongodb-core-hierarchy",
        "title": {
          "en": "Databases, Collections, and Documents — The Core Hierarchy",
          "km": "Databases, Collections និង Documents — រចនាសម្ព័ន្ធគ្រឹះនៃ MongoDB"
        },
        "content": {
          "en": "### Databases, Collections, and Documents — The Core Hierarchy\n\n**Difficulty:** Intermediate | **Estimated Time:** 8 min read\n\n#### Overview & Why It Matters\nMongoDB organizes data into a clean 3-tier logical hierarchy: Database -> Collection -> Document. A single MongoDB instance running on a server can host multiple isolated databases. Inside a database reside collections, which are logical groupings of related documents (analogous to SQL tables). Inside collections live BSON documents (analogous to SQL rows). Understanding how namespaces (databaseName.collectionName) work internally is vital when setting up role-based access control (RBAC), multi-tenancy, capped log streams, and index namespaces in enterprise backends.\n\n#### Code Example\n```javascript\nuse sabaycode_production;\n\ndb.createCollection(\"system_logs\", {\n  capped: true,\n  size: 52428800,\n  max: 100000\n});\n\ndb.system_logs.insertOne({\n  level: \"INFO\",\n  event: \"USER_LOGIN_SUCCESS\",\n  userId: \"STU-882910\",\n  timestamp: new Date()\n});\n```\n\n#### Expected Output\n```json\n{\n  \"_id\": ObjectId(\"66aba1f2001e2b00000000ba\"),\n  \"level\": \"INFO\",\n  \"event\": \"USER_LOGIN_SUCCESS\",\n  \"userId\": \"STU-882910\",\n  \"timestamp\": ISODate(\"2026-08-01T10:40:00Z\")\n}\n```",
          "km": "### Databases, Collections និង Documents — រចនាសម្ព័ន្ធគ្រឹះនៃ MongoDB\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** 8 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nMongoDB រៀបចំទិន្នន័យជា 3 ថ្នាក់៖ Database -> Collection -> Document។ MongoDB Server មួយអាចផ្ទុក Databases ជាច្រើន។ នៅក្នុង Database នីមួយៗមាន Collections (ប្រៀបដូចជា SQL Tables) ហើយនៅក្នុង Collection មាន Documents (ប្រៀបដូចជា SQL Rows)។ ការយល់ដឹងអំពី Namespace (databaseName.collectionName) មានសារៈសំខាន់ខ្លាំងសម្រាប់ Security, Capped Collections និង Multi-tenancy Systems។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\nuse sabaycode_production;\n\ndb.createCollection(\"system_logs\", {\n  capped: true,\n  size: 52428800,\n  max: 100000\n});\n\ndb.system_logs.insertOne({\n  level: \"INFO\",\n  event: \"USER_LOGIN_SUCCESS\",\n  userId: \"STU-882910\",\n  timestamp: new Date()\n});\n```\n\n#### Expected Output\n```json\n{\n  \"_id\": ObjectId(\"66aba1f2001e2b00000000ba\"),\n  \"level\": \"INFO\",\n  \"event\": \"USER_LOGIN_SUCCESS\",\n  \"userId\": \"STU-882910\",\n  \"timestamp\": ISODate(\"2026-08-01T10:40:00Z\")\n}\n```"
        },
        "starterCode": "use sabaycode_production;\n\ndb.createCollection(\"system_logs\", {\n  capped: true,\n  size: 52428800,\n  max: 100000\n});\n\ndb.system_logs.insertOne({\n  level: \"INFO\",\n  event: \"USER_LOGIN_SUCCESS\",\n  userId: \"STU-882910\",\n  timestamp: new Date()\n});"
      },
      {
        "id": "mongodb-architecture-overview",
        "title": {
          "en": "MongoDB Architecture Overview — mongod, mongos & Config Servers",
          "km": "ទិដ្ឋភាពទូទៅនៃស្ថាបត្យកម្ម MongoDB — mongod, mongos និង Config Servers"
        },
        "content": {
          "en": "### MongoDB Architecture Overview — mongod, mongos & Config Servers\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nProduction enterprise deployments of MongoDB rely on three distinct operational daemon processes: mongod, mongos, and Config Servers. mongod is the primary background daemon process that handles data persistence, disk I/O with WiredTiger, query processing, and replica set synchronization. In a sharded cluster environment, mongos acts as an intelligent query router proxy, directing client queries to the correct database shard without application-level intervention. Config Servers store the authoritative cluster metadata and routing chunk maps. Understanding these three core processes is essential for system architects designing fault-tolerant, high-availability cluster topologies.\n\n#### Code Example\n```javascript\ndb.serverStatus().process;\ndb.isMaster().ismaster;\n```\n\n#### Expected Output\n```json\n{\n  \"process\": \"mongod\",\n  \"ismaster\": true\n}\n```",
          "km": "### ទិដ្ឋភាពទូទៅនៃស្ថាបត្យកម្ម MongoDB — mongod, mongos និង Config Servers\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការរត់ MongoDB នៅក្នុង Production សហគ្រាសធំៗ ពឹងផ្អែកលើ Daemon Processes សំខាន់ចំនួន ៣៖ mongod, mongos, និង Config Servers។ mongod គឺជា Process ដើមដែលគ្រប់គ្រងការ Read/Write លើ Disk (WiredTiger Storage Engine)។ mongos គឺជា Router Proxy ដែលទទួល Query ពី Application ហើយបញ្ជូនទៅកាន់ Shard ត្រឹមត្រូវ។ Config Servers រក្សាទុក Metadata និង Map នៃ Shard Chunks ទាំងអស់។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.serverStatus().process;\ndb.isMaster().ismaster;\n```\n\n#### Expected Output\n```json\n{\n  \"process\": \"mongod\",\n  \"ismaster\": true\n}\n```"
        },
        "starterCode": "db.serverStatus().process;\ndb.isMaster().ismaster;"
      },
      {
        "id": "mongodb-compass-mongosh",
        "title": {
          "en": "Installing MongoDB & Connecting with Compass and mongosh",
          "km": "ការដំឡើង MongoDB និងការភ្ជាប់ជាមួយ MongoDB Compass ព្រមទាំង mongosh Shell"
        },
        "content": {
          "en": "### Installing MongoDB & Connecting with Compass and mongosh\n\n**Difficulty:** Intermediate | **Estimated Time:** 8 min read\n\n#### Overview & Why It Matters\nTo interact with MongoDB databases, developers use two primary developer tools: MongoDB Compass (a rich visual GUI client) and mongosh (the modern Node.js-based interactive REPL command-line interface). Understanding connection string syntax (mongodb:// vs mongodb+srv://) is essential for securing local development, Docker containers, and Cloud Atlas deployments. Proper URI parameter configuration ensures secure TLS encryption and connection pool limits across microservice fleets.\n\n#### Code Example\n```javascript\ndb.adminCommand({ ping: 1 });\ndb.version();\n```\n\n#### Expected Output\n```json\n{ \"ok\" : 1 }\n\"7.0.8\"\n```",
          "km": "### ការដំឡើង MongoDB និងការភ្ជាប់ជាមួយ MongoDB Compass ព្រមទាំង mongosh Shell\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** 8 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nដើម្បីធ្វើការជាមួយ MongoDB អ្នកអភិវឌ្ឍន៍ប្រើប្រាស់ ឧបករណ៍ពីរ៖ MongoDB Compass (GUI ផ្លូវការ) និង mongosh (Interactive Command-line REPL)។ ការយល់ដឹងអំពី Connection String URI (mongodb:// និង mongodb+srv://) គឺជាជំហានដំបូងក្នុងការភ្ជាប់ទៅកាន់ Local Docker ឬ MongoDB Atlas Cloud។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.adminCommand({ ping: 1 });\ndb.version();\n```\n\n#### Expected Output\n```json\n{ \"ok\" : 1 }\n\"7.0.8\"\n```"
        },
        "starterCode": "db.adminCommand({ ping: 1 });\ndb.version();"
      }
    ]
  },
  {
    "id": "mongodb-crud-indepth",
    "title": {
      "en": "2. CRUD Operations In-Depth",
      "km": "២. ប្រតិបត្តិការ CRUD ជម្រៅជ្រៅ"
    },
    "lessons": [
      {
        "id": "mongodb-crud-insert",
        "title": {
          "en": "Inserting Documents — insertOne, insertMany & Ordered Writes",
          "km": "ការបញ្ជូន Document ចូល — insertOne, insertMany និង Ordered/Unordered Writes"
        },
        "content": {
          "en": "### Inserting Documents — insertOne, insertMany & Ordered Writes\n\n**Difficulty:** Intermediate | **Estimated Time:** 9 min read\n\n#### Overview & Why It Matters\nDocument insertion is the foundational write operation in MongoDB. MongoDB provides insertOne for inserting single records and insertMany for batching multiple documents in a single wire-protocol network trip. Crucially, insertMany supports an options document where ordered: true (default) stops execution upon encountering the first document failure, whereas ordered: false attempts to write all valid documents regardless of individual index duplicate key failures. In high-volume log ingestion or e-commerce catalog batch uploads, choosing unordered writes drastically improves throughput and error resilience.\n\n#### Code Example\n```javascript\ndb.products.insertMany([\n  { sku: \"COURSE-REACT\", title: \"React Native Masterclass\", priceUsd: 49.99, stock: 100 },\n  { sku: \"COURSE-SPRING\", title: \"Spring Boot Microservices\", priceUsd: 59.99, stock: 85 },\n  { sku: \"COURSE-MONGO\", title: \"MongoDB Production Architecture\", priceUsd: 69.99, stock: 150 }\n], { ordered: false });\n```\n\n#### Expected Output\n```json\n{\n  \"acknowledged\": true,\n  \"insertedCount\": 3,\n  \"insertedIds\": {\n    \"0\": ObjectId(\"66aba1f2001e2b00000000c1\"),\n    \"1\": ObjectId(\"66aba1f2001e2b00000000c2\"),\n    \"2\": ObjectId(\"66aba1f2001e2b00000000c3\")\n  }\n}\n```",
          "km": "### ការបញ្ជូន Document ចូល — insertOne, insertMany និង Ordered/Unordered Writes\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** 9 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការបញ្ចូល Document ជាប្រតិបត្តិការ Write ដំបូងគេបង្អស់នៅក្នុង MongoDB។ insertOne ប្រើសម្រាប់ Document មួយ ហើយ insertMany ប្រើសម្រាប់ Batch បញ្ចូល Document ជាច្រើនក្នុងពេលតែមួយ។ ចំណុចសំខាន់គឺជម្រើស ordered: false ដែលអនុញ្ញាតឱ្យប្រព័ន្ធបន្តបញ្ចូល Document ដែលត្រឹមត្រូវ បើទោះជាមាន Document ខ្លះមាន Error ជាន់ Key ក៏ដោយ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.products.insertMany([\n  { sku: \"COURSE-REACT\", title: \"React Native Masterclass\", priceUsd: 49.99, stock: 100 },\n  { sku: \"COURSE-SPRING\", title: \"Spring Boot Microservices\", priceUsd: 59.99, stock: 85 },\n  { sku: \"COURSE-MONGO\", title: \"MongoDB Production Architecture\", priceUsd: 69.99, stock: 150 }\n], { ordered: false });\n```\n\n#### Expected Output\n```json\n{\n  \"acknowledged\": true,\n  \"insertedCount\": 3,\n  \"insertedIds\": {\n    \"0\": ObjectId(\"66aba1f2001e2b00000000c1\"),\n    \"1\": ObjectId(\"66aba1f2001e2b00000000c2\"),\n    \"2\": ObjectId(\"66aba1f2001e2b00000000c3\")\n  }\n}\n```"
        },
        "starterCode": "db.products.insertMany([\n  { sku: \"COURSE-REACT\", title: \"React Native Masterclass\", priceUsd: 49.99, stock: 100 },\n  { sku: \"COURSE-SPRING\", title: \"Spring Boot Microservices\", priceUsd: 59.99, stock: 85 },\n  { sku: \"COURSE-MONGO\", title: \"MongoDB Production Architecture\", priceUsd: 69.99, stock: 150 }\n], { ordered: false });"
      },
      {
        "id": "mongodb-crud-query",
        "title": {
          "en": "Advanced Querying — Query Operators ($eq, $gt, $in, $exists)",
          "km": "ការស្វែងរកកម្រិតខ្ពស់ — Query Operators ($eq, $gt, $in, $exists, $elemMatch)"
        },
        "content": {
          "en": "### Advanced Querying — Query Operators ($eq, $gt, $in, $exists)\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nQuerying documents efficiently requires mastering MongoDB's rich expression query operators. Operators like $gt, $gte, $lt, $lte handle numeric ranges, $in checks set inclusion, $exists filters documents based on field presence, and $elemMatch targets exact matches inside array objects. In a production Cambodian banking or e-commerce database, expressive query criteria allow backend microservices to execute complex filtering directly on the database cluster, minimizing network bandwidth and application CPU load.\n\n#### Code Example\n```javascript\ndb.students.find({\n  \"membership.plan\": { $in: [\"PREMIUM_PRO\", \"ENTERPRISE\"] },\n  xpPoints: { $gte: 2500 },\n  enrolledCourses: \"mongodb-master\",\n  phone: { $exists: true }\n});\n```\n\n#### Expected Output\n```json\n[\n  {\n    \"_id\": ObjectId(\"66aba1f2001e2b0000000001\"),\n    \"studentId\": \"STU-882910\",\n    \"fullName\": \"Sophea Chan\",\n    \"xpPoints\": 3400,\n    \"membership\": { \"plan\": \"PREMIUM_PRO\" },\n    \"phone\": \"+85512888999\"\n  }\n]\n```",
          "km": "### ការស្វែងរកកម្រិតខ្ពស់ — Query Operators ($eq, $gt, $in, $exists, $elemMatch)\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការ Filter រក Document ឱ្យបានប្រកដ និងលឿន ទាមទារការចេះប្រើប្រាស់ Query Operators ដូចជា $gt, $gte, $in, $exists, និង $elemMatch។ នៅក្នុងប្រព័ន្ធធំៗ ការប្រើ Operator ត្រូវជួយឱ្យ Database Server ធ្វើការ Search ផ្ទាល់នៅក្នុង Index ដោយមិនបាច់ទាញ Fetch ទិន្នន័យទាំងអស់មកកាន់ Application Server ឡើយ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.students.find({\n  \"membership.plan\": { $in: [\"PREMIUM_PRO\", \"ENTERPRISE\"] },\n  xpPoints: { $gte: 2500 },\n  enrolledCourses: \"mongodb-master\",\n  phone: { $exists: true }\n});\n```\n\n#### Expected Output\n```json\n[\n  {\n    \"_id\": ObjectId(\"66aba1f2001e2b0000000001\"),\n    \"studentId\": \"STU-882910\",\n    \"fullName\": \"Sophea Chan\",\n    \"xpPoints\": 3400,\n    \"membership\": { \"plan\": \"PREMIUM_PRO\" },\n    \"phone\": \"+85512888999\"\n  }\n]\n```"
        },
        "starterCode": "db.students.find({\n  \"membership.plan\": { $in: [\"PREMIUM_PRO\", \"ENTERPRISE\"] },\n  xpPoints: { $gte: 2500 },\n  enrolledCourses: \"mongodb-master\",\n  phone: { $exists: true }\n});"
      },
      {
        "id": "mongodb-crud-update",
        "title": {
          "en": "In-Depth Document Updates — $set, $inc, $push, $pull",
          "km": "ការកែប្រែ Document ជម្រៅជ្រៅ — $set, $inc, $push, $pull, $addToSet"
        },
        "content": {
          "en": "### In-Depth Document Updates — $set, $inc, $push, $pull\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nUpdating documents in MongoDB must always be done using explicit update operators rather than replacing the full document. Operators like $set modify specific field values, $inc performs atomic numeric increments (crucial for inventory counting or student XP rewards), $push appends items to array fields, $pull removes matching array elements, and $addToSet enforces array element uniqueness. Atomic update operators ensure thread-safe concurrent modifications without race conditions or dirty write overrides.\n\n#### Code Example\n```javascript\ndb.students.updateOne(\n  { studentId: \"STU-882910\" },\n  {\n    $inc: { xpPoints: 50 },\n    $addToSet: { enrolledCourses: \"docker-kubernetes\" },\n    $set: { lastActiveAt: new Date() }\n  }\n);\n```\n\n#### Expected Output\n```json\n{\n  \"acknowledged\": true,\n  \"matchedCount\": 1,\n  \"modifiedCount\": 1\n}\n```",
          "km": "### ការកែប្រែ Document ជម្រៅជ្រៅ — $set, $inc, $push, $pull, $addToSet\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការកែប្រែទិន្នន័យនៅក្នុង MongoDB ត្រូវធ្វើឡើងតាមរយៈ Atomic Update Operators ដូចជា $set, $inc, $push, $pull, និង $addToSet។ ការប្រើ $inc ជួយឱ្យការបូកបន្ថែម XP ឬការកាត់ស្តុកទំនិញមានសុវត្ថិភាពខ្ពស់ គ្មានបញ្ហា Race Condition ពេលមាន User ច្រើនរត់កូដក្នុងពេលតែមួយ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.students.updateOne(\n  { studentId: \"STU-882910\" },\n  {\n    $inc: { xpPoints: 50 },\n    $addToSet: { enrolledCourses: \"docker-kubernetes\" },\n    $set: { lastActiveAt: new Date() }\n  }\n);\n```\n\n#### Expected Output\n```json\n{\n  \"acknowledged\": true,\n  \"matchedCount\": 1,\n  \"modifiedCount\": 1\n}\n```"
        },
        "starterCode": "db.students.updateOne(\n  { studentId: \"STU-882910\" },\n  {\n    $inc: { xpPoints: 50 },\n    $addToSet: { enrolledCourses: \"docker-kubernetes\" },\n    $set: { lastActiveAt: new Date() }\n  }\n);"
      },
      {
        "id": "mongodb-crud-delete",
        "title": {
          "en": "Document Deletion — deleteOne, deleteMany & Safety Best Practices",
          "km": "ការលុប Document — deleteOne, deleteMany និង ស្តង់ដារសុវត្ថិភាព"
        },
        "content": {
          "en": "### Document Deletion — deleteOne, deleteMany & Safety Best Practices\n\n**Difficulty:** Intermediate | **Estimated Time:** 8 min read\n\n#### Overview & Why It Matters\nRemoving data from a production database is an irreversible operation. MongoDB provides deleteOne to delete a single document matching criteria and deleteMany to prune batches of documents. In production systems, soft deletions (flagging status: 'DELETED' or archivedAt: Date) are strongly preferred over physical hard deletes to satisfy audit compliance and accidental recovery requirements.\n\n#### Code Example\n```javascript\ndb.otp_codes.deleteMany({\n  expiresAt: { $lt: new Date() }\n});\n```\n\n#### Expected Output\n```json\n{\n  \"acknowledged\": true,\n  \"deletedCount\": 42\n}\n```",
          "km": "### ការលុប Document — deleteOne, deleteMany និង ស្តង់ដារសុវត្ថិភាព\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** 8 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការលុបទិន្នន័យចេញពី Production Database ជាប្រតិបត្តិការគ្រោះថ្នាក់។ deleteOne ប្រើសម្រាប់លុប Document មួយ ហើយ deleteMany ប្រើសម្រាប់លុប Document ជាច្រើន។ នៅក្នុងប្រព័ន្ធធំៗ គេនិយមប្រើ Soft Delete (កំណត់ status: 'DELETED') ជំនួសឱ្យ Hard Delete ដើម។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.otp_codes.deleteMany({\n  expiresAt: { $lt: new Date() }\n});\n```\n\n#### Expected Output\n```json\n{\n  \"acknowledged\": true,\n  \"deletedCount\": 42\n}\n```"
        },
        "starterCode": "db.otp_codes.deleteMany({\n  expiresAt: { $lt: new Date() }\n});"
      },
      {
        "id": "mongodb-crud-upsert-bulk",
        "title": {
          "en": "Upserts & Bulk Write Operations",
          "km": "Upserts និង Bulk Write Operations"
        },
        "content": {
          "en": "### Upserts & Bulk Write Operations\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nWhen synchronizing external data streams (such as syncing daily bank currency exchange rates or e-commerce supplier catalogs), performing individual query-then-insert checks causes massive round-trip latency. Upserts (update with upsert: true) automatically insert a new document if no matching record exists, or update the existing document if it does. Furthermore, bulkWrite() combines insert, update, replace, and delete operations into a single optimized TCP network execution payload.\n\n#### Code Example\n```javascript\ndb.exchange_rates.bulkWrite([\n  {\n    updateOne: {\n      filter: { currencyPair: \"USD_KHR\" },\n      update: { $set: { rate: 4120, updatedAt: new Date() } },\n      upsert: true\n    }\n  },\n  {\n    updateOne: {\n      filter: { currencyPair: \"EUR_USD\" },\n      update: { $set: { rate: 1.085, updatedAt: new Date() } },\n      upsert: true\n    }\n  }\n]);\n```\n\n#### Expected Output\n```json\n{\n  \"acknowledged\": true,\n  \"matchedCount\": 2,\n  \"modifiedCount\": 2\n}\n```",
          "km": "### Upserts និង Bulk Write Operations\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nពេល Sync ទិន្នន័យពីប្រព័ន្ធខាងក្រៅ (ដូចជាអត្រាប្តូរប្រាក់ប្រចាំថ្ងៃ) ការរត់ Query ម្ដងមួយៗធ្វើឱ្យប្រព័ន្ធយឺតយ៉ាវ។ Upserts (upsert: true) បញ្ចូល Document ថ្មីស្វ័យប្រវត្តិបើរកមិនឃើញ ឬកែប្រែទិន្នន័យចាស់បើមានរួច។ bulkWrite() បូកបញ្ជូលប្រតិបត្តិការ Write ច្រើនប្រភេទក្នុង Network Trip តែមួយ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.exchange_rates.bulkWrite([\n  {\n    updateOne: {\n      filter: { currencyPair: \"USD_KHR\" },\n      update: { $set: { rate: 4120, updatedAt: new Date() } },\n      upsert: true\n    }\n  },\n  {\n    updateOne: {\n      filter: { currencyPair: \"EUR_USD\" },\n      update: { $set: { rate: 1.085, updatedAt: new Date() } },\n      upsert: true\n    }\n  }\n]);\n```\n\n#### Expected Output\n```json\n{\n  \"acknowledged\": true,\n  \"matchedCount\": 2,\n  \"modifiedCount\": 2\n}\n```"
        },
        "starterCode": "db.exchange_rates.bulkWrite([\n  {\n    updateOne: {\n      filter: { currencyPair: \"USD_KHR\" },\n      update: { $set: { rate: 4120, updatedAt: new Date() } },\n      upsert: true\n    }\n  },\n  {\n    updateOne: {\n      filter: { currencyPair: \"EUR_USD\" },\n      update: { $set: { rate: 1.085, updatedAt: new Date() } },\n      upsert: true\n    }\n  }\n]);"
      }
    ]
  },
  {
    "id": "mongodb-schema-design",
    "title": {
      "en": "3. Schema Design & Data Modeling",
      "km": "៣. ការរចនា Schema និង Data Modeling"
    },
    "lessons": [
      {
        "id": "mongodb-schema-philosophy",
        "title": {
          "en": "Schema Design Philosophy — Access Patterns & Co-location",
          "km": "ទស្សនវិជ្ជានៃការរចនា Schema — Access Patterns និង Data Co-location"
        },
        "content": {
          "en": "### Schema Design Philosophy — Access Patterns & Co-location\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nIn MongoDB, data modeling is governed by application access patterns: 'data that is accessed together should be stored together'. Unlike relational databases where schema design revolves around normal forms (1NF, 2NF, 3NF), MongoDB schema design prioritizes reducing disk I/O and network round trips for primary application read queries. By embedding child sub-documents or arrays directly inside parent records, backend applications read entire object graphs in a single index lookup.\n\n#### Code Example\n```javascript\ndb.orders.insertOne({\n  orderId: \"ORD-PP-2026-9901\",\n  customer: { id: \"CUST-881\", name: \"Bopha Khem\", phone: \"+85512777888\" },\n  items: [\n    { sku: \"ITEM-A\", name: \"MacBook M3 Pro\", qty: 1, priceUsd: 1999 },\n    { sku: \"ITEM-B\", name: \"USB-C Cable\", qty: 2, priceUsd: 19 }\n  ],\n  shippingAddress: \"Street 271, Khan Sen Sok, Phnom Penh\",\n  totalAmountUsd: 2037,\n  status: \"CONFIRMED\"\n});\n```\n\n#### Expected Output\n```json\n{\n  \"_id\": ObjectId(\"66aba1f2001e2b00000000d5\"),\n  \"orderId\": \"ORD-PP-2026-9901\",\n  \"status\": \"CONFIRMED\"\n}\n```",
          "km": "### ទស្សនវិជ្ជានៃការរចនា Schema — Access Patterns និង Data Co-location\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nនៅក្នុង MongoDB ការរចនា Schema ផ្អែកលើ Application Access Patterns៖ 'ទិន្នន័យដែលត្រូវបានទាញយកមកជាមួយគ្នា គួរតែរក្សាទុកជាមួយគ្នា'។ ខុសពី RDBMS ដែលផ្អែកលើ Normalization (3NF) MongoDB ផ្តល់អាទិភាពលើការកាត់បន្ថយ Disk I/O និង Network Latency។ ការប្រើ Embedding ជួយឱ្យកូដ Read ទិន្នន័យទាំងអស់ក្នុងពេលតែមួយ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.orders.insertOne({\n  orderId: \"ORD-PP-2026-9901\",\n  customer: { id: \"CUST-881\", name: \"Bopha Khem\", phone: \"+85512777888\" },\n  items: [\n    { sku: \"ITEM-A\", name: \"MacBook M3 Pro\", qty: 1, priceUsd: 1999 },\n    { sku: \"ITEM-B\", name: \"USB-C Cable\", qty: 2, priceUsd: 19 }\n  ],\n  shippingAddress: \"Street 271, Khan Sen Sok, Phnom Penh\",\n  totalAmountUsd: 2037,\n  status: \"CONFIRMED\"\n});\n```\n\n#### Expected Output\n```json\n{\n  \"_id\": ObjectId(\"66aba1f2001e2b00000000d5\"),\n  \"orderId\": \"ORD-PP-2026-9901\",\n  \"status\": \"CONFIRMED\"\n}\n```"
        },
        "starterCode": "db.orders.insertOne({\n  orderId: \"ORD-PP-2026-9901\",\n  customer: { id: \"CUST-881\", name: \"Bopha Khem\", phone: \"+85512777888\" },\n  items: [\n    { sku: \"ITEM-A\", name: \"MacBook M3 Pro\", qty: 1, priceUsd: 1999 },\n    { sku: \"ITEM-B\", name: \"USB-C Cable\", qty: 2, priceUsd: 19 }\n  ],\n  shippingAddress: \"Street 271, Khan Sen Sok, Phnom Penh\",\n  totalAmountUsd: 2037,\n  status: \"CONFIRMED\"\n});"
      },
      {
        "id": "mongodb-embed-vs-reference",
        "title": {
          "en": "Embedding vs Referencing — Tradeoffs & Choice Matrix",
          "km": "Embedding vs Referencing — ការត្រួតពិនិត្យ Tradeoffs និង Choice Matrix"
        },
        "content": {
          "en": "### Embedding vs Referencing — Tradeoffs & Choice Matrix\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nThe central architectural decision when modeling MongoDB collections is choosing between embedding sub-documents versus referencing document ObjectIds across separate collections. Embedding yields high-performance reads and single-document write atomicity, but risks hitting the 16MB document size limit if array growth is unbounded. Referencing avoids duplicate data and document size overflow, but introduces the need for $lookup aggregation joins. Software engineers evaluate array cardinality (1:few vs 1:many vs 1:squillions) to determine the optimal pattern.\n\n#### Code Example\n```javascript\ndb.courses.insertOne({\n  courseId: \"MONGO-301\",\n  title: \"MongoDB Production Masterclass\",\n  modules: [\n    { id: 1, title: \"Foundations\", lessonCount: 5 },\n    { id: 2, title: \"Schema Design\", lessonCount: 5 }\n  ]\n});\n```\n\n#### Expected Output\n```json\n{\n  \"_id\": ObjectId(\"66aba1f2001e2b00000000f9\"),\n  \"courseId\": \"MONGO-301\"\n}\n```",
          "km": "### Embedding vs Referencing — ការត្រួតពិនិត្យ Tradeoffs និង Choice Matrix\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការសម្រេចចិត្តដ៏សំខាន់បំផុតក្នុងការរចនា MongoDB គឺការជ្រើសរើសរវាង Embedding (បង្កប់ក្នុង Document) ឬ Referencing (ភ្ជាប់ ObjectId ទៅ Collection ផ្សេង)។ Embedding មានល្បឿន Read លឿនខ្លាំង ប៉ុន្តែអាចជួបបញ្ហាលើស 16MB Document Limit បើសិនជា Array រីកធំគ្មានដែនកំណត់។ Referencing ការពារការជាន់ទិន្នន័យ និងបញ្ហាទំហំ ប៉ុន្តែតម្រូវឱ្យធ្វើ $lookup Join។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.courses.insertOne({\n  courseId: \"MONGO-301\",\n  title: \"MongoDB Production Masterclass\",\n  modules: [\n    { id: 1, title: \"Foundations\", lessonCount: 5 },\n    { id: 2, title: \"Schema Design\", lessonCount: 5 }\n  ]\n});\n```\n\n#### Expected Output\n```json\n{\n  \"_id\": ObjectId(\"66aba1f2001e2b00000000f9\"),\n  \"courseId\": \"MONGO-301\"\n}\n```"
        },
        "starterCode": "db.courses.insertOne({\n  courseId: \"MONGO-301\",\n  title: \"MongoDB Production Masterclass\",\n  modules: [\n    { id: 1, title: \"Foundations\", lessonCount: 5 },\n    { id: 2, title: \"Schema Design\", lessonCount: 5 }\n  ]\n});"
      },
      {
        "id": "mongodb-modeling-relationships",
        "title": {
          "en": "Modeling Relationships — 1:1, 1:N & N:M Patterns",
          "km": "ការរចនាទំនាក់ទំនង — 1:1, 1:N និង N:M Modeling Patterns"
        },
        "content": {
          "en": "### Modeling Relationships — 1:1, 1:N & N:M Patterns\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nRelationships between entities in MongoDB are implemented using structural patterns: 1:1 relationships are almost always embedded as nested sub-documents; 1:N relationships use embedded arrays if N is bounded (e.g. user address list) or array of ObjectIds / parent-referencing if N is large (e.g. sensor logs); N:M relationships utilize two-way referencing or junction collections depending on query cardinality and update frequency.\n\n#### Code Example\n```javascript\ndb.students.updateOne(\n  { studentId: \"STU-882910\" },\n  { $push: { enrolledCourseRefs: ObjectId(\"66aba1f2001e2b00000000d5\") } }\n);\n```\n\n#### Expected Output\n```json\n{ \"acknowledged\": true, \"modifiedCount\": 1 }\n```",
          "km": "### ការរចនាទំនាក់ទំនង — 1:1, 1:N និង N:M Modeling Patterns\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nទំនាក់ទំនងទិន្នន័យនៅក្នុង MongoDB ត្រូវរចនាតាម Patterns៖ ទំនាក់ទំនង 1:1 ភាគច្រើនត្រូវបង្កប់ (Embedded) ជា Nested Sub-documents។ ទំនាក់ទំនង 1:N ប្រើ Embedded Array ប្រសិនបើ N មានចំនួនល្មម ឬប្រើ Parent-Referencing ប្រសិនបើ N មានចំនួនរាប់ម៉ឺន។ ទំនាក់ទំនង N:M ប្រើ Two-way Referencing ឬ Junction Collections។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.students.updateOne(\n  { studentId: \"STU-882910\" },\n  { $push: { enrolledCourseRefs: ObjectId(\"66aba1f2001e2b00000000d5\") } }\n);\n```\n\n#### Expected Output\n```json\n{ \"acknowledged\": true, \"modifiedCount\": 1 }\n```"
        },
        "starterCode": "db.students.updateOne(\n  { studentId: \"STU-882910\" },\n  { $push: { enrolledCourseRefs: ObjectId(\"66aba1f2001e2b00000000d5\") } }\n);"
      },
      {
        "id": "mongodb-realworld-schema-design",
        "title": {
          "en": "Real-World E-Commerce & Course Platform Data Models",
          "km": "ការរចនា Schema ជាក់ស្តែងសម្រាប់ E-Commerce និង ប្រព័ន្ធសិក្សា SabayCode"
        },
        "content": {
          "en": "### Real-World E-Commerce & Course Platform Data Models\n\n**Difficulty:** Advanced | **Estimated Time:** 11 min read\n\n#### Overview & Why It Matters\nIn production enterprise systems, real-world schemas combine embedded snapshots with referenced identifiers. For example, an order document embeds a snapshot of product details (title, unit price) at the exact time of purchase to remain immutable even if the master product catalog changes later. Meanwhile, user account references remain linked via ObjectIds for access control.\n\n#### Code Example\n```javascript\ndb.orders.insertOne({\n  orderNumber: \"SABAY-2026-8801\",\n  studentId: ObjectId(\"66aba1f2001e2b0000000001\"),\n  paymentGateway: \"ABA_PAY_KHQR\",\n  itemsSnapshot: [\n    { courseId: \"MONGO-301\", title: \"MongoDB Masterclass\", priceUsd: 69.99 }\n  ],\n  amountPaidUsd: NumberDecimal(\"69.99\"),\n  status: \"COMPLETED\",\n  paidAt: new Date()\n});\n```\n\n#### Expected Output\n```json\n{\n  \"_id\": ObjectId(\"66aba1f2001e2b0000000101\"),\n  \"orderNumber\": \"SABAY-2026-8801\",\n  \"status\": \"COMPLETED\"\n}\n```",
          "km": "### ការរចនា Schema ជាក់ស្តែងសម្រាប់ E-Commerce និង ប្រព័ន្ធសិក្សា SabayCode\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 11 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nនៅក្នុងប្រព័ន្ធទូទាត់ និង E-Commerce ជាក់ស្តែង Schema តែងតែរួមបញ្ចូលគ្នារវាង Snapshot (ទិន្នន័យដែលបង្កប់ជាប់ពេលទិញ) និង Reference ObjectId។ ឧទាហរណ៍ Document បញ្ជាទិញ (Order) ត្រូវបង្កប់ឈ្មោះ និងតម្លៃទំនិញពេលទិញភ្លាមៗ ដើម្បីការពារកុំឱ្យប្រែប្រួលពេល Master Product ត្រូវបានកែប្រែតម្លៃនាពេលក្រោយ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.orders.insertOne({\n  orderNumber: \"SABAY-2026-8801\",\n  studentId: ObjectId(\"66aba1f2001e2b0000000001\"),\n  paymentGateway: \"ABA_PAY_KHQR\",\n  itemsSnapshot: [\n    { courseId: \"MONGO-301\", title: \"MongoDB Masterclass\", priceUsd: 69.99 }\n  ],\n  amountPaidUsd: NumberDecimal(\"69.99\"),\n  status: \"COMPLETED\",\n  paidAt: new Date()\n});\n```\n\n#### Expected Output\n```json\n{\n  \"_id\": ObjectId(\"66aba1f2001e2b0000000101\"),\n  \"orderNumber\": \"SABAY-2026-8801\",\n  \"status\": \"COMPLETED\"\n}\n```"
        },
        "starterCode": "db.orders.insertOne({\n  orderNumber: \"SABAY-2026-8801\",\n  studentId: ObjectId(\"66aba1f2001e2b0000000001\"),\n  paymentGateway: \"ABA_PAY_KHQR\",\n  itemsSnapshot: [\n    { courseId: \"MONGO-301\", title: \"MongoDB Masterclass\", priceUsd: 69.99 }\n  ],\n  amountPaidUsd: NumberDecimal(\"69.99\"),\n  status: \"COMPLETED\",\n  paidAt: new Date()\n});"
      },
      {
        "id": "mongodb-schema-antipatterns",
        "title": {
          "en": "Schema Anti-Patterns — Unbounded Arrays, Large Docs & Deep Nesting",
          "km": "Schema Anti-Patterns — បញ្ហា Unbounded Arrays, Large Documents និង Deep Nesting"
        },
        "content": {
          "en": "### Schema Anti-Patterns — Unbounded Arrays, Large Docs & Deep Nesting\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nPoor schema design degrades MongoDB database performance severely over time. The primary anti-patterns to avoid include: Unbounded Arrays (pushing unlimited logs or comments into a single document array until it exceeds the 16MB document limit and causes memory allocation churn), Massive Monolithic Documents (storing unnecessary heavy blobs inside frequently accessed records), and Deep Nesting (nesting sub-documents beyond 3-4 levels, causing cumbersome query paths).\n\n#### Code Example\n```javascript\ndb.lesson_comments.insertOne({\n  lessonId: ObjectId(\"66aba1f2001e2b00000000d5\"),\n  authorId: ObjectId(\"66aba1f2001e2b0000000001\"),\n  text: \"Great explanation of indexing strategies!\",\n  createdAt: new Date()\n});\n```\n\n#### Expected Output\n```json\n{\n  \"_id\": ObjectId(\"66aba1f2001e2b0000000115\"),\n  \"lessonId\": ObjectId(\"66aba1f2001e2b00000000d5\")\n}\n```",
          "km": "### Schema Anti-Patterns — បញ្ហា Unbounded Arrays, Large Documents និង Deep Nesting\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការរចនា Schema មិនបានល្អ ធ្វើឱ្យប្រព័ន្ធយឺតយ៉ាវយ៉ាងខ្លាំង។ បញ្ហា Anti-Patterns ដែលត្រូវជៀសវាងមាន៖ Unbounded Arrays (ការ Push ធាតុចូល Array គ្មានដែនកំណត់រហូតលើស 16MB Limit), Massive Monolithic Documents (ការញាត់ទិន្នន័យធំៗពេកក្នុង Document តែមួយ) និង Deep Nesting (ការបង្កប់ Sub-documents ច្រើនជាន់ពេក)។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.lesson_comments.insertOne({\n  lessonId: ObjectId(\"66aba1f2001e2b00000000d5\"),\n  authorId: ObjectId(\"66aba1f2001e2b0000000001\"),\n  text: \"Great explanation of indexing strategies!\",\n  createdAt: new Date()\n});\n```\n\n#### Expected Output\n```json\n{\n  \"_id\": ObjectId(\"66aba1f2001e2b0000000115\"),\n  \"lessonId\": ObjectId(\"66aba1f2001e2b00000000d5\")\n}\n```"
        },
        "starterCode": "db.lesson_comments.insertOne({\n  lessonId: ObjectId(\"66aba1f2001e2b00000000d5\"),\n  authorId: ObjectId(\"66aba1f2001e2b0000000001\"),\n  text: \"Great explanation of indexing strategies!\",\n  createdAt: new Date()\n});"
      }
    ]
  },
  {
    "id": "mongodb-indexing-performance",
    "title": {
      "en": "4. Indexing & Query Performance",
      "km": "៤. Indexing និងប្រសិទ្ធភាពនៃការរត់ Query"
    },
    "lessons": [
      {
        "id": "mongodb-index-btree",
        "title": {
          "en": "Internal Index Architecture — B-Trees in WiredTiger Engine",
          "km": "ស្ថាបត្យកម្ម Index ខាងក្នុង — B-Trees នៅក្នុង WiredTiger Engine"
        },
        "content": {
          "en": "### Internal Index Architecture — B-Trees in WiredTiger Engine\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nWithout indexes, MongoDB must perform a collection scan (COLLSCAN), inspecting every single document in a collection to satisfy a query. Indexes in MongoDB are structured as B-Trees maintained by the WiredTiger storage engine. Indexes store a small portion of the collection's data set in an easily traversable B-Tree structure, holding ordered field values and pointers to disk record locations. In high-volume systems, proper indexing transforms O(N) collection scans into O(log N) index lookups.\n\n#### Code Example\n```javascript\ndb.students.createIndex({ email: 1 }, { unique: true, name: \"idx_unique_email\" });\ndb.students.getIndexes();\n```\n\n#### Expected Output\n```json\n[\n  { \"v\": 2, \"key\": { \"_id\": 1 }, \"name\": \"_id_\" },\n  { \"v\": 2, \"key\": { \"email\": 1 }, \"name\": \"idx_unique_email\", \"unique\": true }\n]\n```",
          "km": "### ស្ថាបត្យកម្ម Index ខាងក្នុង — B-Trees នៅក្នុង WiredTiger Engine\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nបើគ្មាន Index ទេ MongoDB ត្រូវធ្វើ Collection Scan (COLLSCAN) ដោយត្រួតពិនិត្យ Document ទាំងអស់ក្នុង Collection មួយៗ។ Indexes នៅក្នុង MongoDB ត្រូវបានបង្កើតជាទម្រង់ B-Trees ដោយ WiredTiger Storage Engine។ B-Trees រក្សាទុកតម្លៃ Field តាមលំដាប់លំដោយ ព្រមទាំង Pointer ទៅកាន់ Disk Location ធ្វើឱ្យល្បឿន Search ប្រែពី O(N) មក O(log N) វិញ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.students.createIndex({ email: 1 }, { unique: true, name: \"idx_unique_email\" });\ndb.students.getIndexes();\n```\n\n#### Expected Output\n```json\n[\n  { \"v\": 2, \"key\": { \"_id\": 1 }, \"name\": \"_id_\" },\n  { \"v\": 2, \"key\": { \"email\": 1 }, \"name\": \"idx_unique_email\", \"unique\": true }\n]\n```"
        },
        "starterCode": "db.students.createIndex({ email: 1 }, { unique: true, name: \"idx_unique_email\" });\ndb.students.getIndexes();"
      },
      {
        "id": "mongodb-index-compound-multikey",
        "title": {
          "en": "Single-Field, Compound & Multi-Key Indexes",
          "km": "Single-Field, Compound និង Multi-Key Indexes"
        },
        "content": {
          "en": "### Single-Field, Compound & Multi-Key Indexes\n\n**Difficulty:** Advanced | **Estimated Time:** 11 min read\n\n#### Overview & Why It Matters\nMongoDB supports various index types for different query workloads: Single-Field Indexes index one scalar field; Compound Indexes index multiple fields in a specific order following the ESR Rule (Equality, Sort, Range); Multi-Key Indexes index array fields by creating separate index keys for every element in the array. Following the ESR rule guarantees that index keys eliminate in-memory sorting overhead.\n\n#### Code Example\n```javascript\ndb.orders.createIndex({ status: 1, createdAt: -1, amountUsd: 1 });\ndb.orders.find({ status: \"COMPLETED\", amountUsd: { $gte: 50 } }).sort({ createdAt: -1 });\n```\n\n#### Expected Output\n```json\n[ { \"_id\": ObjectId(\"66aba1f2001e2b0000000101\"), \"status\": \"COMPLETED\", \"amountUsd\": 69.99 } ]\n```",
          "km": "### Single-Field, Compound និង Multi-Key Indexes\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 11 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nMongoDB គាំទ្រ Index ច្រើនប្រភេទ៖ Single-Field Index សម្រាប់ Field មួយ, Compound Index សម្រាប់ Field ច្រើនតាមច្បាប់ ESR Rule (Equality, Sort, Range) និង Multi-Key Index សម្រាប់ Array Fields ដែលបង្កើត Key ដោយឡែកសម្រាប់ធាតុនីមួយៗក្នុង Array។ ការរចនា Compound Index តាម ESR Rule ជួយលុបបំបាត់ការធ្វើ Memory Sort។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.orders.createIndex({ status: 1, createdAt: -1, amountUsd: 1 });\ndb.orders.find({ status: \"COMPLETED\", amountUsd: { $gte: 50 } }).sort({ createdAt: -1 });\n```\n\n#### Expected Output\n```json\n[ { \"_id\": ObjectId(\"66aba1f2001e2b0000000101\"), \"status\": \"COMPLETED\", \"amountUsd\": 69.99 } ]\n```"
        },
        "starterCode": "db.orders.createIndex({ status: 1, createdAt: -1, amountUsd: 1 });\ndb.orders.find({ status: \"COMPLETED\", amountUsd: { $gte: 50 } }).sort({ createdAt: -1 });"
      },
      {
        "id": "mongodb-index-text-geospatial",
        "title": {
          "en": "Text Indexes & Geospatial Indexing (2dsphere)",
          "km": "Text Indexes និង Geospatial Indexing (2dsphere)"
        },
        "content": {
          "en": "### Text Indexes & Geospatial Indexing (2dsphere)\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nFor specialized data types, MongoDB offers specialized index structures: Text Indexes tokenize and stem string fields for full-text search across documentation or catalog items; Geospatial Indexes (2dsphere) index GeoJSON spherical geometries (Points, LineStrings, Polygons) to execute location-based proximity queries ($near, $geoWithin) for delivery tracking or store locator applications.\n\n#### Code Example\n```javascript\ndb.drivers.createIndex({ location: \"2dsphere\" });\n\ndb.drivers.find({\n  location: {\n    $near: {\n      $geometry: { type: \"Point\", coordinates: [104.9282, 11.5564] },\n      $maxDistance: 5000\n    }\n  }\n});\n```\n\n#### Expected Output\n```json\n[ { \"_id\": ObjectId(\"66aba1f2001e2b0000000122\"), \"driverName\": \"Dara Sok\", \"status\": \"AVAILABLE\" } ]\n```",
          "km": "### Text Indexes និង Geospatial Indexing (2dsphere)\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nសម្រាប់ទិន្នន័យពិសេស MongoDB ផ្តល់ជូន specialized indexes៖ Text Indexes សម្រាប់ Search អត្ថបទ ឬស្វែងរកមេរៀននៅក្នុងប្រព័ន្ធ និង Geospatial Indexes (2dsphere) សម្រាប់ទិន្នន័យទីតាំងភូមិសាស្ត្រ GeoJSON (Points, Polygons) ដើម្បីរត់ Query ស្វែងរកទីតាំងជិតបំផុត ($near) ក្នុងប្រព័ន្ធដឹកជញ្ជូន ឬហាងទំនិញ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.drivers.createIndex({ location: \"2dsphere\" });\n\ndb.drivers.find({\n  location: {\n    $near: {\n      $geometry: { type: \"Point\", coordinates: [104.9282, 11.5564] },\n      $maxDistance: 5000\n    }\n  }\n});\n```\n\n#### Expected Output\n```json\n[ { \"_id\": ObjectId(\"66aba1f2001e2b0000000122\"), \"driverName\": \"Dara Sok\", \"status\": \"AVAILABLE\" } ]\n```"
        },
        "starterCode": "db.drivers.createIndex({ location: \"2dsphere\" });\n\ndb.drivers.find({\n  location: {\n    $near: {\n      $geometry: { type: \"Point\", coordinates: [104.9282, 11.5564] },\n      $maxDistance: 5000\n    }\n  }\n});"
      },
      {
        "id": "mongodb-explain-execution-stats",
        "title": {
          "en": "Analyzing Query Performance with explain('executionStats')",
          "km": "ការវិភាគប្រសិទ្ធភាព Query ជាមួយ explain('executionStats')"
        },
        "content": {
          "en": "### Analyzing Query Performance with explain('executionStats')\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nTo verify whether a query is utilizing indexes effectively or falling back to costly full collection scans, developers execute .explain('executionStats'). Key metrics to inspect in the explain output include: executionStage (IXSCAN vs COLLSCAN), totalDocsExamined (documents scanned on disk), nReturned (matching documents returned), and totalKeysExamined (index entries checked). An optimal query ratio satisfies totalDocsExamined == nReturned.\n\n#### Code Example\n```javascript\ndb.orders.find({ status: \"COMPLETED\" }).explain(\"executionStats\");\n```\n\n#### Expected Output\n```json\n{\n  \"executionStats\": {\n    \"executionSuccess\": true,\n    \"nReturned\": 150,\n    \"executionTimeMillis\": 2,\n    \"totalKeysExamined\": 150,\n    \"totalDocsExamined\": 150,\n    \"executionStages\": { \"stage\": \"IXSCAN\", \"indexName\": \"status_1_createdAt_-1\" }\n  }\n}\n```",
          "km": "### ការវិភាគប្រសិទ្ធភាព Query ជាមួយ explain('executionStats')\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nដើម្បីត្រួតពិនិត្យថា Query ដើរលើ Index ត្រឹមត្រូវ ឬធ្លាក់ចូល Collection Scan អ្នកអភិវឌ្ឍន៍ប្រើ .explain('executionStats')។ ចំណុចសំខាន់ៗដែលត្រូវមើលរួមមាន៖ executionStage (IXSCAN គឺល្អ, COLLSCAN គឺយឺត), totalDocsExamined, nReturned, និង totalKeysExamined។ Query ដែលមានប្រសិទ្ធភាពខ្ពស់ ត្រូវមាន totalDocsExamined ស្មើនឹង nReturned។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.orders.find({ status: \"COMPLETED\" }).explain(\"executionStats\");\n```\n\n#### Expected Output\n```json\n{\n  \"executionStats\": {\n    \"executionSuccess\": true,\n    \"nReturned\": 150,\n    \"executionTimeMillis\": 2,\n    \"totalKeysExamined\": 150,\n    \"totalDocsExamined\": 150,\n    \"executionStages\": { \"stage\": \"IXSCAN\", \"indexName\": \"status_1_createdAt_-1\" }\n  }\n}\n```"
        },
        "starterCode": "db.orders.find({ status: \"COMPLETED\" }).explain(\"executionStats\");"
      },
      {
        "id": "mongodb-slow-query-profiler",
        "title": {
          "en": "Identifying & Fixing Slow Queries with Database Profiler",
          "km": "ការរកនិងដោះស្រាយ Slow Queries ជាមួយ Database Profiler"
        },
        "content": {
          "en": "### Identifying & Fixing Slow Queries with Database Profiler\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nMongoDB includes a built-in Database Profiler that captures operations exceeding a configurable execution time threshold (e.g. queries taking longer than 100ms). Setting profile level 1 logs slow operations to the system.profile system collection. Database administrators analyze system.profile to pinpoint unindexed queries, blocking sorts, and memory spills in production environments.\n\n#### Code Example\n```javascript\ndb.setProfilingLevel(1, { slowms: 100 });\ndb.system.profile.find({ millis: { $gt: 100 } }).sort({ ts: -1 }).limit(5);\n```\n\n#### Expected Output\n```json\n[ { \"op\": \"query\", \"ns\": \"sabaycode.orders\", \"millis\": 142 } ]\n```",
          "km": "### ការរកនិងដោះស្រាយ Slow Queries ជាមួយ Database Profiler\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nMongoDB មានប្រព័ន្ធ Database Profiler ភ្ជាប់មកជាមួយ ដែលអាចចាប់រាល់ ប្រតិបត្តិការណាដែលរត់យឺតជាងកំណត់ (ដូចជាលើសពី 100ms)។ តាមរយៈការកំណត់ Profile Level 1 ប្រព័ន្ធនឹងកត់ត្រា Slow Queries ចូលទៅក្នុង system.profile collection ដើម្បីឱ្យអ្នកគ្រប់គ្រងអាចដឹង និងដោះស្រាយទាន់ពេលវេលា។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.setProfilingLevel(1, { slowms: 100 });\ndb.system.profile.find({ millis: { $gt: 100 } }).sort({ ts: -1 }).limit(5);\n```\n\n#### Expected Output\n```json\n[ { \"op\": \"query\", \"ns\": \"sabaycode.orders\", \"millis\": 142 } ]\n```"
        },
        "starterCode": "db.setProfilingLevel(1, { slowms: 100 });\ndb.system.profile.find({ millis: { $gt: 100 } }).sort({ ts: -1 }).limit(5);"
      },
      {
        "id": "mongodb-index-workload-strategies",
        "title": {
          "en": "Index Strategy for Read-Heavy vs Write-Heavy Workloads",
          "km": "យុទ្ធសាស្ត្រ Index សម្រាប់ Read-Heavy និង Write-Heavy Workloads"
        },
        "content": {
          "en": "### Index Strategy for Read-Heavy vs Write-Heavy Workloads\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nEvery index created on a collection accelerates read performance at the expense of write throughput, disk storage, and WiredTiger RAM cache capacity. Whenever a document is inserted, updated, or deleted, MongoDB must update every affected BSON index tree on disk. In Read-Heavy workloads (such as catalog searching), aggressive indexing is encouraged. In Write-Heavy workloads (such as IoT telemetry ingestion), index count should be kept minimal and compound indexes carefully consolidated.\n\n#### Code Example\n```javascript\ndb.sensor_logs.stats().indexSizes;\n```\n\n#### Expected Output\n```json\n{ \"_id_\": 20480, \"timestamp_1\": 16384 }\n```",
          "km": "### យុទ្ធសាស្ត្រ Index សម្រាប់ Read-Heavy និង Write-Heavy Workloads\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nរាល់ការបង្កើត Index ជួយបង្កើនល្បឿន Read ប៉ុន្តែវាធ្វើឱ្យល្បឿន Write ថយចុះ ព្រមទាំងស៊ីទំហំ Disk និង RAM Cache។ នៅពេលមានការ Insert ឬ Update ទិន្នន័យ MongoDB ត្រូវធ្វើការ Update រាល់ Index B-Trees ទាំងអស់។ ដូច្នេះ សម្រាប់ Read-Heavy System គេអាចបង្កើត Index ច្រើន ប៉ុន្តែសម្រាប់ Write-Heavy System គេត្រូវក្លាសេ និងបង្កើត Index តែណាដែលចាំបាច់បំផុត។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.sensor_logs.stats().indexSizes;\n```\n\n#### Expected Output\n```json\n{ \"_id_\": 20480, \"timestamp_1\": 16384 }\n```"
        },
        "starterCode": "db.sensor_logs.stats().indexSizes;"
      }
    ]
  },
  {
    "id": "mongodb-aggregation-framework",
    "title": {
      "en": "5. Aggregation Framework (Deep Dive)",
      "km": "៥. Aggregation Framework (ការសិក្សាជម្រៅ)"
    },
    "lessons": [
      {
        "id": "mongodb-agg-pipeline-intro",
        "title": {
          "en": "The Aggregation Pipeline Architecture",
          "km": "ស្ថាបត្យកម្ម Aggregation Pipeline នៅក្នុង MongoDB"
        },
        "content": {
          "en": "### The Aggregation Pipeline Architecture\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nThe Aggregation Pipeline is MongoDB's powerful framework for data transformation, analytics, and reporting. Documents pass through a sequence of multi-stage operators where each stage transforms the stream of documents before piping them to the next stage. Unlike simple find() queries, aggregation pipelines execute complex grouping, reshaping, filtering, calculations, and joins natively inside the database cluster engine.\n\n#### Code Example\n```javascript\ndb.orders.aggregate([\n  { $match: { status: \"COMPLETED\" } },\n  { $group: { _id: \"$paymentGateway\", totalRevenue: { $sum: \"$amountPaidUsd\" } } }\n]);\n```\n\n#### Expected Output\n```json\n[\n  { \"_id\": \"ABA_PAY_KHQR\", \"totalRevenue\": 14250.50 },\n  { \"_id\": \"WING_PAY\", \"totalRevenue\": 8910.00 }\n]\n```",
          "km": "### ស្ថាបត្យកម្ម Aggregation Pipeline នៅក្នុង MongoDB\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nAggregation Pipeline គឺជា Framework ដ៏មានឥទ្ធិពលបំផុតនៅក្នុង MongoDB សម្រាប់ការវិភាគ គណនា និងបំប្លែងទិន្នន័យ (Analytics & Reporting)។ Document ត្រូវរត់ឆ្លងកាត់ Pipeline Stages ជាបន្តបន្ទាប់ ដោយ Stage មួយៗធ្វើការ Transform ទិន្នន័យ រួចបញ្ជូនបន្តទៅ Stage បន្ទាប់ទៀត។ ប្រព័ន្ធធ្វើការគណនាទាំងអស់នៅខាងក្នុង Database Cluster ផ្ទាល់។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.orders.aggregate([\n  { $match: { status: \"COMPLETED\" } },\n  { $group: { _id: \"$paymentGateway\", totalRevenue: { $sum: \"$amountPaidUsd\" } } }\n]);\n```\n\n#### Expected Output\n```json\n[\n  { \"_id\": \"ABA_PAY_KHQR\", \"totalRevenue\": 14250.50 },\n  { \"_id\": \"WING_PAY\", \"totalRevenue\": 8910.00 }\n]\n```"
        },
        "starterCode": "db.orders.aggregate([\n  { $match: { status: \"COMPLETED\" } },\n  { $group: { _id: \"$paymentGateway\", totalRevenue: { $sum: \"$amountPaidUsd\" } } }\n]);"
      },
      {
        "id": "mongodb-agg-core-stages",
        "title": {
          "en": "Core Pipeline Stages — $match, $group, $project, $sort, $limit",
          "km": "Core Pipeline Stages — $match, $group, $project, $sort, $limit, $skip"
        },
        "content": {
          "en": "### Core Pipeline Stages — $match, $group, $project, $sort, $limit\n\n**Difficulty:** Advanced | **Estimated Time:** 11 min read\n\n#### Overview & Why It Matters\nMastering aggregation begins with core pipeline stages: $match filters documents using query criteria; $group aggregates documents by a specified identifier key and applies accumulator operators ($sum, $avg, $min, $max, $push); $project reshapes documents by creating, including, or renaming fields; $sort orders document streams; $limit and $skip manage pagination.\n\n#### Code Example\n```javascript\ndb.students.aggregate([\n  { $match: { xpPoints: { $gte: 1000 } } },\n  { $group: { _id: \"$membership.plan\", avgXp: { $avg: \"$xpPoints\" }, totalStudents: { $sum: 1 } } },\n  { $sort: { avgXp: -1 } },\n  { $project: { _id: 0, plan: \"$_id\", avgXp: { $round: [\"$avgXp\", 2] }, totalStudents: 1 } }\n]);\n```\n\n#### Expected Output\n```json\n[\n  { \"plan\": \"ENTERPRISE\", \"avgXp\": 4520.5, \"totalStudents\": 42 },\n  { \"plan\": \"PREMIUM_PRO\", \"avgXp\": 2840.1, \"totalStudents\": 310 }\n]\n```",
          "km": "### Core Pipeline Stages — $match, $group, $project, $sort, $limit, $skip\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 11 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការរៀន Aggregation ត្រូវចាប់ផ្តើមពី Core Stages៖ $match (Filter រក Document), $group (បូកសរុប និង Aggregate តាម Group Key ជាមួយ $sum, $avg), $project (កែប្រែទម្រង់ Field), $sort (តម្រៀបទិន្នន័យ) និង $limit/$skip (ចែកទំព័រ Page)។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.students.aggregate([\n  { $match: { xpPoints: { $gte: 1000 } } },\n  { $group: { _id: \"$membership.plan\", avgXp: { $avg: \"$xpPoints\" }, totalStudents: { $sum: 1 } } },\n  { $sort: { avgXp: -1 } },\n  { $project: { _id: 0, plan: \"$_id\", avgXp: { $round: [\"$avgXp\", 2] }, totalStudents: 1 } }\n]);\n```\n\n#### Expected Output\n```json\n[\n  { \"plan\": \"ENTERPRISE\", \"avgXp\": 4520.5, \"totalStudents\": 42 },\n  { \"plan\": \"PREMIUM_PRO\", \"avgXp\": 2840.1, \"totalStudents\": 310 }\n]\n```"
        },
        "starterCode": "db.students.aggregate([\n  { $match: { xpPoints: { $gte: 1000 } } },\n  { $group: { _id: \"$membership.plan\", avgXp: { $avg: \"$xpPoints\" }, totalStudents: { $sum: 1 } } },\n  { $sort: { avgXp: -1 } },\n  { $project: { _id: 0, plan: \"$_id\", avgXp: { $round: [\"$avgXp\", 2] }, totalStudents: 1 } }\n]);"
      },
      {
        "id": "mongodb-agg-lookup-unwind",
        "title": {
          "en": "Advanced Pipeline Stages — $lookup Joins, $unwind & Array Manipulation",
          "km": "Advanced Pipeline Stages — $lookup Joins, $unwind និង Array Manipulation"
        },
        "content": {
          "en": "### Advanced Pipeline Stages — $lookup Joins, $unwind & Array Manipulation\n\n**Difficulty:** Advanced | **Estimated Time:** 11 min read\n\n#### Overview & Why It Matters\nWhen data is partitioned across multiple collections, $lookup executes left outer joins to combine documents from a target collection into an array field. $unwind then deconstructs an array field into individual document streams for per-element aggregation. Combining $lookup with $unwind enables relational-style joining with document processing flexibility.\n\n#### Code Example\n```javascript\ndb.orders.aggregate([\n  { $match: { orderNumber: \"SABAY-2026-8801\" } },\n  {\n    $lookup: {\n      from: \"students\",\n      localField: \"studentId\",\n      foreignField: \"_id\",\n      as: \"studentInfo\"\n    }\n  },\n  { $unwind: \"$studentInfo\" },\n  {\n    $project: {\n      orderNumber: 1,\n      amountPaidUsd: 1,\n      studentName: \"$studentInfo.fullName\",\n      email: \"$studentInfo.email\"\n    }\n  }\n]);\n```\n\n#### Expected Output\n```json\n[\n  {\n    \"_id\": ObjectId(\"66aba1f2001e2b0000000101\"),\n    \"orderNumber\": \"SABAY-2026-8801\",\n    \"amountPaidUsd\": 69.99,\n    \"studentName\": \"Sophea Chan\",\n    \"email\": \"sophea.chan@sabaycode.com\"\n  }\n]\n```",
          "km": "### Advanced Pipeline Stages — $lookup Joins, $unwind និង Array Manipulation\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 11 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nនៅពេលទិន្នន័យត្រូវបានចែកចេញជាច្រើន Collections, Stage $lookup អនុវត្ត Left Outer Join ដើម្បីបូកបញ្ចូល Document ពី Collection ផ្សេង។ បន្ទាប់មក Stage $unwind បំបែក Array Field ឱ្យទៅជា Document ដាច់ដោយឡែកៗ ដើម្បីងាយស្រួលធ្វើការ Aggregation លើធាតុនីមួយៗ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.orders.aggregate([\n  { $match: { orderNumber: \"SABAY-2026-8801\" } },\n  {\n    $lookup: {\n      from: \"students\",\n      localField: \"studentId\",\n      foreignField: \"_id\",\n      as: \"studentInfo\"\n    }\n  },\n  { $unwind: \"$studentInfo\" },\n  {\n    $project: {\n      orderNumber: 1,\n      amountPaidUsd: 1,\n      studentName: \"$studentInfo.fullName\",\n      email: \"$studentInfo.email\"\n    }\n  }\n]);\n```\n\n#### Expected Output\n```json\n[\n  {\n    \"_id\": ObjectId(\"66aba1f2001e2b0000000101\"),\n    \"orderNumber\": \"SABAY-2026-8801\",\n    \"amountPaidUsd\": 69.99,\n    \"studentName\": \"Sophea Chan\",\n    \"email\": \"sophea.chan@sabaycode.com\"\n  }\n]\n```"
        },
        "starterCode": "db.orders.aggregate([\n  { $match: { orderNumber: \"SABAY-2026-8801\" } },\n  {\n    $lookup: {\n      from: \"students\",\n      localField: \"studentId\",\n      foreignField: \"_id\",\n      as: \"studentInfo\"\n    }\n  },\n  { $unwind: \"$studentInfo\" },\n  {\n    $project: {\n      orderNumber: 1,\n      amountPaidUsd: 1,\n      studentName: \"$studentInfo.fullName\",\n      email: \"$studentInfo.email\"\n    }\n  }\n]);"
      },
      {
        "id": "mongodb-agg-facet-bucket",
        "title": {
          "en": "Analytics Stages — $facet, $bucket & Multi-Faceted Dashboards",
          "km": "Analytics Stages — $facet, $bucket និង Multi-Faceted Dashboards"
        },
        "content": {
          "en": "### Analytics Stages — $facet, $bucket & Multi-Faceted Dashboards\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nBuilding executive reporting dashboards requires computing multiple analytical perspectives in a single database request. $facet allows executing multiple parallel aggregation pipelines on the same input document stream. $bucket categorizes incoming documents into distinct numeric or date range groups (e.g. grouping students into XP performance tiers).\n\n#### Code Example\n```javascript\ndb.students.aggregate([\n  {\n    $facet: {\n      \"xpBuckets\": [\n        {\n          $bucket: {\n            groupBy: \"$xpPoints\",\n            boundaries: [0, 1000, 2500, 5000, 10000],\n            default: \"Master\",\n            output: { count: { $sum: 1 } }\n          }\n        }\n      ],\n      \"membershipStats\": [\n        { $group: { _id: \"$membership.plan\", count: { $sum: 1 } } }\n      ]\n    }\n  }\n]);\n```\n\n#### Expected Output\n```json\n[\n  {\n    \"xpBuckets\": [ { \"_id\": 0, \"count\": 120 }, { \"_id\": 1000, \"count\": 450 } ],\n    \"membershipStats\": [ { \"_id\": \"PREMIUM_PRO\", \"count\": 350 } ]\n  }\n]\n```",
          "km": "### Analytics Stages — $facet, $bucket និង Multi-Faceted Dashboards\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការបង្កើត Dashboard វិភាគទិន្នន័យសម្រាប់ថ្នាក់ដឹកនាំ ទាមទារការគណនាច្រើនជ្រុងជ្រោយក្នុងពេលតែមួយ។ Stage $facet អនុញ្ញាតឱ្យរត់ Pipeline ច្រើនទន្ទឹមគ្នា (Parallel) លើ Input តែមួយ។ Stage $bucket បែងចែក Document ជាក្រុមៗតាមជួរច្បាស់លាស់ (Ranges) ដូចជាការបែងចែក Tier របស់និស្សិតតាមពិន្ទុ XP។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.students.aggregate([\n  {\n    $facet: {\n      \"xpBuckets\": [\n        {\n          $bucket: {\n            groupBy: \"$xpPoints\",\n            boundaries: [0, 1000, 2500, 5000, 10000],\n            default: \"Master\",\n            output: { count: { $sum: 1 } }\n          }\n        }\n      ],\n      \"membershipStats\": [\n        { $group: { _id: \"$membership.plan\", count: { $sum: 1 } } }\n      ]\n    }\n  }\n]);\n```\n\n#### Expected Output\n```json\n[\n  {\n    \"xpBuckets\": [ { \"_id\": 0, \"count\": 120 }, { \"_id\": 1000, \"count\": 450 } ],\n    \"membershipStats\": [ { \"_id\": \"PREMIUM_PRO\", \"count\": 350 } ]\n  }\n]\n```"
        },
        "starterCode": "db.students.aggregate([\n  {\n    $facet: {\n      \"xpBuckets\": [\n        {\n          $bucket: {\n            groupBy: \"$xpPoints\",\n            boundaries: [0, 1000, 2500, 5000, 10000],\n            default: \"Master\",\n            output: { count: { $sum: 1 } }\n          }\n        }\n      ],\n      \"membershipStats\": [\n        { $group: { _id: \"$membership.plan\", count: { $sum: 1 } } }\n      ]\n    }\n  }\n]);"
      },
      {
        "id": "mongodb-agg-realworld-analytics",
        "title": {
          "en": "Building Multi-Stage Real-World Analytics Pipelines",
          "km": "ការបង្កើត Multi-Stage Analytics Pipelines ជាក់ស្តែង"
        },
        "content": {
          "en": "### Building Multi-Stage Real-World Analytics Pipelines\n\n**Difficulty:** Advanced | **Estimated Time:** 11 min read\n\n#### Overview & Why It Matters\nReal-world analytics pipelines chain 6 to 10 stages to filter, join, group, format, and write calculated summary stats directly to a reporting collection using $merge or $out. This pattern generates performant materialization views for daily business intelligence dashboards.\n\n#### Code Example\n```javascript\ndb.orders.aggregate([\n  { $match: { paidAt: { $gte: ISODate(\"2026-08-01T00:00:00Z\") } } },\n  { $unwind: \"$itemsSnapshot\" },\n  {\n    $group: {\n      _id: \"$itemsSnapshot.courseId\",\n      courseTitle: { $first: \"$itemsSnapshot.title\" },\n      totalSalesVolume: { $sum: 1 },\n      totalGrossRevenueUsd: { $sum: \"$itemsSnapshot.priceUsd\" }\n    }\n  },\n  { $sort: { totalGrossRevenueUsd: -1 } },\n  {\n    $merge: {\n      into: \"daily_course_sales_summary\",\n      whenMatched: \"replace\",\n      whenNotMatched: \"insert\"\n    }\n  }\n]);\n```\n\n#### Expected Output\n```json\n[]\n```",
          "km": "### ការបង្កើត Multi-Stage Analytics Pipelines ជាក់ស្តែង\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 11 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nនៅក្នុងប្រព័ន្ធជាក់ស្តែង Analytics Pipelines អាចមានពី ៦ ទៅ ១០ Stages ដោយធ្វើការ Filter, Join, Group, និង Format យ៉ាងស្មុគស្មាញ រួចសរសេរទិន្នន័យលទ្ធផលចូលទៅក្នុង Reporting Collection ដោយស្វ័យប្រវត្តិ តាមរយៈ Stage $merge ឬ $out។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.orders.aggregate([\n  { $match: { paidAt: { $gte: ISODate(\"2026-08-01T00:00:00Z\") } } },\n  { $unwind: \"$itemsSnapshot\" },\n  {\n    $group: {\n      _id: \"$itemsSnapshot.courseId\",\n      courseTitle: { $first: \"$itemsSnapshot.title\" },\n      totalSalesVolume: { $sum: 1 },\n      totalGrossRevenueUsd: { $sum: \"$itemsSnapshot.priceUsd\" }\n    }\n  },\n  { $sort: { totalGrossRevenueUsd: -1 } },\n  {\n    $merge: {\n      into: \"daily_course_sales_summary\",\n      whenMatched: \"replace\",\n      whenNotMatched: \"insert\"\n    }\n  }\n]);\n```\n\n#### Expected Output\n```json\n[]\n```"
        },
        "starterCode": "db.orders.aggregate([\n  { $match: { paidAt: { $gte: ISODate(\"2026-08-01T00:00:00Z\") } } },\n  { $unwind: \"$itemsSnapshot\" },\n  {\n    $group: {\n      _id: \"$itemsSnapshot.courseId\",\n      courseTitle: { $first: \"$itemsSnapshot.title\" },\n      totalSalesVolume: { $sum: 1 },\n      totalGrossRevenueUsd: { $sum: \"$itemsSnapshot.priceUsd\" }\n    }\n  },\n  { $sort: { totalGrossRevenueUsd: -1 } },\n  {\n    $merge: {\n      into: \"daily_course_sales_summary\",\n      whenMatched: \"replace\",\n      whenNotMatched: \"insert\"\n    }\n  }\n]);"
      },
      {
        "id": "mongodb-agg-performance-memory",
        "title": {
          "en": "Aggregation Pipeline Performance & Memory Optimization",
          "km": "ប្រសិទ្ធភាព Aggregation Pipeline និងការគ្រប់គ្រង Memory Optimization"
        },
        "content": {
          "en": "### Aggregation Pipeline Performance & Memory Optimization\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nEach stage in an aggregation pipeline has a default RAM allocation limit of 100 Megabytes. If a stage (such as $group or $sort) exceeds 100MB of RAM, MongoDB throws an error unless { allowDiskUse: true } is specified to allow spilling temporary buffer files to disk. To optimize performance, always place $match and $sort stages at the very beginning of the pipeline so that WiredTiger can utilize collection indexes.\n\n#### Code Example\n```javascript\ndb.orders.aggregate([\n  { $match: { status: \"COMPLETED\" } },\n  { $sort: { createdAt: -1 } },\n  { $group: { _id: \"$customer.id\", lastOrderAmount: { $first: \"$totalAmountUsd\" } } }\n], { allowDiskUse: true });\n```\n\n#### Expected Output\n```json\n[ { \"_id\": \"CUST-881\", \"lastOrderAmount\": 2037 } ]\n```",
          "km": "### ប្រសិទ្ធភាព Aggregation Pipeline និងការគ្រប់គ្រង Memory Optimization\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nរាល់ Stage ទាំងអស់ក្នុង Aggregation Pipeline មានដែនកំណត់ Memory RAM ត្រឹមតែ 100MB ប៉ុណ្ណោះ។ បើ Stage ណា (ដូចជា $sort ឬ $group) ប្រើ RAM លើស 100MB នោះប្រព័ន្ធនឹងមាន Error លើកលែងតែមានជម្រើស { allowDiskUse: true }។ ដើម្បីបង្កើនល្បឿន ត្រូវដាក់ $match និង $sort នៅដើមដំបូងគេជានិច្ច ដើម្បីឱ្យវាប្រើប្រាស់ Index របស់ Database។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.orders.aggregate([\n  { $match: { status: \"COMPLETED\" } },\n  { $sort: { createdAt: -1 } },\n  { $group: { _id: \"$customer.id\", lastOrderAmount: { $first: \"$totalAmountUsd\" } } }\n], { allowDiskUse: true });\n```\n\n#### Expected Output\n```json\n[ { \"_id\": \"CUST-881\", \"lastOrderAmount\": 2037 } ]\n```"
        },
        "starterCode": "db.orders.aggregate([\n  { $match: { status: \"COMPLETED\" } },\n  { $sort: { createdAt: -1 } },\n  { $group: { _id: \"$customer.id\", lastOrderAmount: { $first: \"$totalAmountUsd\" } } }\n], { allowDiskUse: true });"
      }
    ]
  },
  {
    "id": "mongodb-transactions-integrity",
    "title": {
      "en": "6. Transactions & Data Integrity",
      "km": "៦. Transactions និងសុវត្ថិភាពទិន្នន័យ"
    },
    "lessons": [
      {
        "id": "mongodb-acid-transactions",
        "title": {
          "en": "Multi-Document ACID Transactions in MongoDB",
          "km": "Multi-Document ACID Transactions នៅក្នុង MongoDB"
        },
        "content": {
          "en": "### Multi-Document ACID Transactions in MongoDB\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nMongoDB provides multi-document ACID (Atomicity, Consistency, Isolation, Durability) transactions across replica sets and sharded clusters. Using client sessions (session.startTransaction()), software engineers execute multiple read and write operations across distinct collections where either ALL changes commit successfully (session.commitTransaction()) or ALL changes roll back cleanly (session.abortTransaction()). This guarantees financial consistency when transferring funds between account balances.\n\n#### Code Example\n```javascript\nconst session = db.getMongo().startSession();\nsession.startTransaction();\ntry {\n  const studentsColl = session.getDatabase(\"sabaycode\").getCollection(\"students\");\n  const txnColl = session.getDatabase(\"sabaycode\").getCollection(\"transactions\");\n\n  studentsColl.updateOne({ studentId: \"STU-882910\" }, { $inc: { walletBalanceUsd: -50 } });\n  txnColl.insertOne({ studentId: \"STU-882910\", amountUsd: 50, type: \"COURSE_PURCHASE\", date: new Date() });\n\n  session.commitTransaction();\n} catch (error) {\n  session.abortTransaction();\n} finally {\n  session.endSession();\n}\n```\n\n#### Expected Output\n```json\n{ \"transactionState\": \"TRANSACTION_COMMITTED\" }\n```",
          "km": "### Multi-Document ACID Transactions នៅក្នុង MongoDB\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nMongoDB ផ្តល់ជូននូវ Multi-Document ACID Transactions ពេញលេញតាមរយៈ Replica Sets និង Sharded Clusters។ តាមរយៈ Client Sessions អ្នកអភិវឌ្ឍន៍អាចរត់ប្រតិបត្តិការ Read/Write ច្រើន Collections ដែលធានាថាប្រតិបត្តិការទាំងអស់ត្រូវ Commit ជោគជ័យជាមួយគ្នា ឬ Rollback ត្រឡប់ក្រោយទាំងអស់បើមាន Error។ នេះមានសារៈសំខាន់ខ្លាំងសម្រាប់ការផ្ទេរប្រាក់រវាងគណនីធនាគារ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\nconst session = db.getMongo().startSession();\nsession.startTransaction();\ntry {\n  const studentsColl = session.getDatabase(\"sabaycode\").getCollection(\"students\");\n  const txnColl = session.getDatabase(\"sabaycode\").getCollection(\"transactions\");\n\n  studentsColl.updateOne({ studentId: \"STU-882910\" }, { $inc: { walletBalanceUsd: -50 } });\n  txnColl.insertOne({ studentId: \"STU-882910\", amountUsd: 50, type: \"COURSE_PURCHASE\", date: new Date() });\n\n  session.commitTransaction();\n} catch (error) {\n  session.abortTransaction();\n} finally {\n  session.endSession();\n}\n```\n\n#### Expected Output\n```json\n{ \"transactionState\": \"TRANSACTION_COMMITTED\" }\n```"
        },
        "starterCode": "const session = db.getMongo().startSession();\nsession.startTransaction();\ntry {\n  const studentsColl = session.getDatabase(\"sabaycode\").getCollection(\"students\");\n  const txnColl = session.getDatabase(\"sabaycode\").getCollection(\"transactions\");\n\n  studentsColl.updateOne({ studentId: \"STU-882910\" }, { $inc: { walletBalanceUsd: -50 } });\n  txnColl.insertOne({ studentId: \"STU-882910\", amountUsd: 50, type: \"COURSE_PURCHASE\", date: new Date() });\n\n  session.commitTransaction();\n} catch (error) {\n  session.abortTransaction();\n} finally {\n  session.endSession();\n}"
      },
      {
        "id": "mongodb-transactions-vs-redesign",
        "title": {
          "en": "Transactions vs Schema Redesign Decision Matrix",
          "km": "ការប្រៀបធៀប Transactions ជាមួយ Schema Redesign"
        },
        "content": {
          "en": "### Transactions vs Schema Redesign Decision Matrix\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nWhile multi-document transactions provide strong ACID guarantees, they introduce lock contention and latency overhead. In document databases, over 80% of multi-table transaction requirements in RDBMS can be eliminated by redesigning the schema to embed related child data inside a single document. Single-document operations in MongoDB are natively atomic without requiring explicit transaction locks.\n\n#### Code Example\n```javascript\n// Single-document atomic update replacing multi-table transaction\ndb.orders.updateOne(\n  { _id: ObjectId(\"66aba1f2001e2b0000000101\"), status: \"PENDING\" },\n  {\n    $set: { status: \"PAID\", paidAt: new Date() },\n    $push: { auditHistory: { status: \"PAID\", changedBy: \"SYSTEM_GATEWAY\" } }\n  }\n);\n```\n\n#### Expected Output\n```json\n{ \"acknowledged\": true, \"matchedCount\": 1, \"modifiedCount\": 1 }\n```",
          "km": "### ការប្រៀបធៀប Transactions ជាមួយ Schema Redesign\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nទោះបីជា Multi-Document Transactions មានសុវត្ថិភាពខ្ពស់ក៏ដោយ វាបង្កើត Lock Contention និងធ្វើឱ្យ Latency កើនឡើង។ នៅក្នុង Document Database លើសពី ៨០% នៃតម្រូវការ Transaction អាចត្រូវដោះស្រាយបានដោយគ្រាន់តែ រចនា Schema ឡើងវិញដោយប្រើ Embedding។ ប្រតិបត្តិការលើ Document តែមួយនៅក្នុង MongoDB គឺ Atomic ជាស្រាប់ដោយមិនបាច់ប្រើ Transaction Lock ឡើយ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\n// Single-document atomic update replacing multi-table transaction\ndb.orders.updateOne(\n  { _id: ObjectId(\"66aba1f2001e2b0000000101\"), status: \"PENDING\" },\n  {\n    $set: { status: \"PAID\", paidAt: new Date() },\n    $push: { auditHistory: { status: \"PAID\", changedBy: \"SYSTEM_GATEWAY\" } }\n  }\n);\n```\n\n#### Expected Output\n```json\n{ \"acknowledged\": true, \"matchedCount\": 1, \"modifiedCount\": 1 }\n```"
        },
        "starterCode": "// Single-document atomic update replacing multi-table transaction\ndb.orders.updateOne(\n  { _id: ObjectId(\"66aba1f2001e2b0000000101\"), status: \"PENDING\" },\n  {\n    $set: { status: \"PAID\", paidAt: new Date() },\n    $push: { auditHistory: { status: \"PAID\", changedBy: \"SYSTEM_GATEWAY\" } }\n  }\n);"
      },
      {
        "id": "mongodb-write-read-concerns",
        "title": {
          "en": "Write Concern & Read Concern Guarantee Levels",
          "km": "កម្រិតសុវត្ថិភាព Write Concern និង Read Concern"
        },
        "content": {
          "en": "### Write Concern & Read Concern Guarantee Levels\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nWrite Concern and Read Concern determine the level of data durability and consistency across distributed MongoDB nodes: Write Concern (w: 1, w: 'majority', j: true) specifies the number of replica set members that must acknowledge a write before returning success; Read Concern ('local', 'majority', 'linearizable') controls which version of data is returned to client queries to prevent dirty reads during elections.\n\n#### Code Example\n```javascript\ndb.orders.insertOne(\n  { orderId: \"ORD-9921\", amountUsd: 120, status: \"PAID\" },\n  { writeConcern: { w: \"majority\", wtimeout: 5000, j: true } }\n);\n```\n\n#### Expected Output\n```json\n{ \"acknowledged\": true, \"insertedId\": ObjectId(\"66aba1f2001e2b0000000188\") }\n```",
          "km": "### កម្រិតសុវត្ថិភាព Write Concern និង Read Concern\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nWrite Concern និង Read Concern កំណត់កម្រិតសុវត្ថិភាព និងភាពត្រឹមត្រូវនៃទិន្នន័យឆ្លងកាត់ Distributed Nodes ទាំងអស់៖ Write Concern (w: 'majority', j: true) កំណត់ចំនួន Nodes ដែលត្រូវអះអាងថាបានសរសេរទិន្នន័យរួច រីឯ Read Concern ('majority') ការពារកុំឱ្យ Application អានចំទិន្នន័យដែលមិនទាន់រត់រួចរាល់ (Dirty Reads)។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.orders.insertOne(\n  { orderId: \"ORD-9921\", amountUsd: 120, status: \"PAID\" },\n  { writeConcern: { w: \"majority\", wtimeout: 5000, j: true } }\n);\n```\n\n#### Expected Output\n```json\n{ \"acknowledged\": true, \"insertedId\": ObjectId(\"66aba1f2001e2b0000000188\") }\n```"
        },
        "starterCode": "db.orders.insertOne(\n  { orderId: \"ORD-9921\", amountUsd: 120, status: \"PAID\" },\n  { writeConcern: { w: \"majority\", wtimeout: 5000, j: true } }\n);"
      },
      {
        "id": "mongodb-read-preference",
        "title": {
          "en": "Read Preference Strategies in Distributed Deployments",
          "km": "យុទ្ធសាស្ត្រ Read Preference ក្នុងការរត់ Distributed Deployments"
        },
        "content": {
          "en": "### Read Preference Strategies in Distributed Deployments\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nRead Preference determines how client applications route read queries across nodes in a replica set: 'primary' (default, routes all reads to primary node for strict consistency), 'primaryPreferred' (reads from primary if available, else secondary), 'secondary' (routes reads to secondaries to offload primary CPU), and 'nearest' (routes to node with lowest network latency).\n\n#### Code Example\n```javascript\n// Configuring read preference in client query\ndb.getMongo().setReadPref(\"secondaryPreferred\");\ndb.courses.find({ level: \"Advanced\" });\n```\n\n#### Expected Output\n```json\n[ { \"_id\": ObjectId(\"66aba1f2001e2b00000000f9\"), \"title\": \"MongoDB Masterclass\" } ]\n```",
          "km": "### យុទ្ធសាស្ត្រ Read Preference ក្នុងការរត់ Distributed Deployments\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nRead Preference កំណត់ពីរបៀបដែល Application បញ្ជូន Query ទៅ Read លើ Replica Set Nodes ផ្សេងៗ៖ 'primary' (Read លើ Primary ជានិច្ចដើម្បីបានទិន្នន័យថ្មីបំផុត), 'secondary' (Read លើ Secondary ដើម្បីកាត់បន្ថយ បន្ទុក CPU លើ Primary) និង 'nearest' (Read លើ Node ណាដែលនៅជិត Network ជាងគេ)។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\n// Configuring read preference in client query\ndb.getMongo().setReadPref(\"secondaryPreferred\");\ndb.courses.find({ level: \"Advanced\" });\n```\n\n#### Expected Output\n```json\n[ { \"_id\": ObjectId(\"66aba1f2001e2b00000000f9\"), \"title\": \"MongoDB Masterclass\" } ]\n```"
        },
        "starterCode": "// Configuring read preference in client query\ndb.getMongo().setReadPref(\"secondaryPreferred\");\ndb.courses.find({ level: \"Advanced\" });"
      }
    ]
  },
  {
    "id": "mongodb-replication-ha",
    "title": {
      "en": "7. Replication & High Availability",
      "km": "៧. Replication និង High Availability"
    },
    "lessons": [
      {
        "id": "mongodb-replica-sets-architecture",
        "title": {
          "en": "Replica Sets — Architecture, Members & High Availability",
          "km": "Replica Sets — ស្ថាបត្យកម្ម, សមាជិក និង High Availability"
        },
        "content": {
          "en": "### Replica Sets — Architecture, Members & High Availability\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nA Replica Set in MongoDB is a group of mongod processes that maintain the exact same data set. A standard production replica set consists of one Primary node (which receives all write operations) and multiple Secondary nodes (which replicate the primary's operations log to maintain synchronized data copies). If the primary node fails, an automated election selects a new primary within seconds.\n\n#### Code Example\n```javascript\nrs.status().members.map(m => ({ name: m.name, stateStr: m.stateStr, health: m.health }));\n```\n\n#### Expected Output\n```json\n[\n  { \"name\": \"mongo1.sabaycode.internal:27017\", \"stateStr\": \"PRIMARY\", \"health\": 1 },\n  { \"name\": \"mongo2.sabaycode.internal:27017\", \"stateStr\": \"SECONDARY\", \"health\": 1 },\n  { \"name\": \"mongo3.sabaycode.internal:27017\", \"stateStr\": \"SECONDARY\", \"health\": 1 }\n]\n```",
          "km": "### Replica Sets — ស្ថាបត្យកម្ម, សមាជិក និង High Availability\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nReplica Set នៅក្នុង MongoDB គឺជាក្រុមនៃ mongod processes ដែលរក្សាទុកទិន្នន័យដូចគ្នាទាំងស្រុង។ នៅក្នុង Production Replica Set មាន Primary Node មួយ (ទទួលការ Write ទាំងអស់) និង Secondary Nodes ច្រើន (Sync ទិន្នន័យតាម)។ ប្រសិនបើ Primary Node មានបញ្ហារលត់ ប្រព័ន្ធនឹងធ្វើការរៀបចំការបោះឆ្នោតជ្រើសរើស Primary ថ្មីដោយស្វ័យប្រវត្តិក្នុងរយៈពេលប៉ុន្មានវិនាទី។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\nrs.status().members.map(m => ({ name: m.name, stateStr: m.stateStr, health: m.health }));\n```\n\n#### Expected Output\n```json\n[\n  { \"name\": \"mongo1.sabaycode.internal:27017\", \"stateStr\": \"PRIMARY\", \"health\": 1 },\n  { \"name\": \"mongo2.sabaycode.internal:27017\", \"stateStr\": \"SECONDARY\", \"health\": 1 },\n  { \"name\": \"mongo3.sabaycode.internal:27017\", \"stateStr\": \"SECONDARY\", \"health\": 1 }\n]\n```"
        },
        "starterCode": "rs.status().members.map(m => ({ name: m.name, stateStr: m.stateStr, health: m.health }));"
      },
      {
        "id": "mongodb-replica-oplog-failover",
        "title": {
          "en": "Primary Election, Oplog Sync & Automated Failover",
          "km": "Primary Election, Oplog Sync និង Automated Failover"
        },
        "content": {
          "en": "### Primary Election, Oplog Sync & Automated Failover\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nSecondary nodes replicate data asynchronously by tailing the Primary node's Operations Log (oplog.rs) capped collection. The oplog records all database modifying writes as idempotent operations. When heartbeat pings between nodes timeout, secondary nodes initiate an Raft-like election algorithm. The secondary node with the most up-to-date oplog entry receives votes and becomes the new Primary.\n\n#### Code Example\n```javascript\ndb.getReplicationInfo();\n```\n\n#### Expected Output\n```json\n{\n  \"logSizeMB\": 10240,\n  \"usedMB\": 142.5,\n  \"timeDiffHours\": 72.4\n}\n```",
          "km": "### Primary Election, Oplog Sync និង Automated Failover\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nSecondary Nodes ធ្វើការ Sync ទិន្នន័យពី Primary ដោយស្វ័យប្រវត្តិតាមរយៈការអាន Oplog (oplog.rs) Capped Collection។ Oplog កត់ត្រារាល់ប្រតិបត្តិការ Write ទាំងអស់ជាទម្រង់ Idempotent។ នៅពេល Heartbeat Ping រវាង Nodes មានបញ្ហា ប្រព័ន្ធនឹងដំណើរការ Raft-like Election Algorithm ដើម្បីជ្រើសរើស Secondary ណាដែលមាន Oplog ថ្មីជាងគេឱ្យឡើងធ្វើជា Primary ថ្មី។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.getReplicationInfo();\n```\n\n#### Expected Output\n```json\n{\n  \"logSizeMB\": 10240,\n  \"usedMB\": 142.5,\n  \"timeDiffHours\": 72.4\n}\n```"
        },
        "starterCode": "db.getReplicationInfo();"
      },
      {
        "id": "mongodb-replica-set-setup",
        "title": {
          "en": "Conceptual Walkthrough — Deploying a 3-Node Replica Set",
          "km": "ការកំណត់រចនាសម្ព័ន្ធដំឡើង 3-Node Replica Set ជាក់ស្តែង"
        },
        "content": {
          "en": "### Conceptual Walkthrough — Deploying a 3-Node Replica Set\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nDeploying a production-ready 3-node replica set involves binding mongod daemons to private cluster IP addresses, generating a shared internal keyfile for cluster authentication, and initializing cluster topology using rs.initiate().\n\n#### Code Example\n```javascript\nrs.initiate({\n  _id: \"rs0\",\n  members: [\n    { _id: 0, host: \"mongo1.sabaycode.internal:27017\", priority: 2 },\n    { _id: 1, host: \"mongo2.sabaycode.internal:27017\", priority: 1 },\n    { _id: 2, host: \"mongo3.sabaycode.internal:27017\", priority: 1 }\n  ]\n});\n```\n\n#### Expected Output\n```json\n{ \"ok\": 1, \"operationTime\": Timestamp(1722510000, 1) }\n```",
          "km": "### ការកំណត់រចនាសម្ព័ន្ធដំឡើង 3-Node Replica Set ជាក់ស្តែង\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការដំឡើង Production 3-node Replica Set រួមមានការកំណត់ IP Address សម្រាប់ mongod daemons, ការបង្កើត Shared Keyfile សម្រាប់ Security រវាង Nodes, និងការរត់បញ្ជា rs.initiate() ដើម្បីកំណត់រចនាសម្ព័ន្ធ Cluster ផ្លូវការ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\nrs.initiate({\n  _id: \"rs0\",\n  members: [\n    { _id: 0, host: \"mongo1.sabaycode.internal:27017\", priority: 2 },\n    { _id: 1, host: \"mongo2.sabaycode.internal:27017\", priority: 1 },\n    { _id: 2, host: \"mongo3.sabaycode.internal:27017\", priority: 1 }\n  ]\n});\n```\n\n#### Expected Output\n```json\n{ \"ok\": 1, \"operationTime\": Timestamp(1722510000, 1) }\n```"
        },
        "starterCode": "rs.initiate({\n  _id: \"rs0\",\n  members: [\n    { _id: 0, host: \"mongo1.sabaycode.internal:27017\", priority: 2 },\n    { _id: 1, host: \"mongo2.sabaycode.internal:27017\", priority: 1 },\n    { _id: 2, host: \"mongo3.sabaycode.internal:27017\", priority: 1 }\n  ]\n});"
      },
      {
        "id": "mongodb-replica-read-write-behavior",
        "title": {
          "en": "Read & Write Behavior across Replica Members",
          "km": "ប្រតិបត្តិការ Read និង Write ឆ្លងកាត់ Replica Members ទាំងអស់"
        },
        "content": {
          "en": "### Read & Write Behavior across Replica Members\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nUnderstanding how write concern levels interact with secondary oplog replication is vital for preventing data rollbacks during sudden failovers. Setting writeConcern: { w: 'majority' } forces the primary node to wait until a majority of replica set nodes have written the operation to their disk journal prior to returning success.\n\n#### Code Example\n```javascript\ndb.printSecondaryReplicationInfo();\n```\n\n#### Expected Output\n```json\nsource: mongo2.sabaycode.internal:27017 - synced to: Sat Aug 01 2026 10:40:00 GMT+0700 (0 secs behind primary)\n```",
          "km": "### ប្រតិបត្តិការ Read និង Write ឆ្លងកាត់ Replica Members ទាំងអស់\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការយល់ដឹងពីរបៀបដែល Write Concern និង Oplog Sync ធ្វើការជាមួយគ្នា មានសារៈសំខាន់ខ្លាំងដើម្បីការពារកុំឱ្យបាត់បង់ទិន្នន័យ (Data Rollback) ពេល Primary រលត់ភ្លាមៗ។ ការកំណត់ writeConcern: { w: 'majority' } បង្ខំឱ្យ Primary រង់ចាំរហូតដល់ភាគច្រើននៃ Nodes សរសេរទិន្នន័យចូល Disk រួចរាល់។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.printSecondaryReplicationInfo();\n```\n\n#### Expected Output\n```json\nsource: mongo2.sabaycode.internal:27017 - synced to: Sat Aug 01 2026 10:40:00 GMT+0700 (0 secs behind primary)\n```"
        },
        "starterCode": "db.printSecondaryReplicationInfo();"
      }
    ]
  },
  {
    "id": "mongodb-sharding-scaling",
    "title": {
      "en": "8. Sharding & Horizontal Scaling",
      "km": "៨. Sharding និង Horizontal Scaling"
    },
    "lessons": [
      {
        "id": "mongodb-sharding-architecture",
        "title": {
          "en": "Sharding Architecture — Horizontal Partitioning at Scale",
          "km": "ស្ថាបត្យកម្ម Sharding — ការបែងចែកទិន្នន័យ Horizontal តាមទំហំធំ"
        },
        "content": {
          "en": "### Sharding Architecture — Horizontal Partitioning at Scale\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nSharding is MongoDB's strategy for horizontal scaling across independent commodity hardware servers. When a dataset exceeds the RAM, disk capacity, or write I/O limits of a single replica set, sharding partitions collection documents across multiple independent replica sets called Shards. Client applications connect to mongos query routers, which consult Config Servers to route operations transparently.\n\n#### Code Example\n```javascript\nsh.status();\n```\n\n#### Expected Output\n```json\n{\n  \"shards\": [\n    { \"_id\": \"shard01\", \"host\": \"shard01/mongo-s1:27017\", \"state\": 1 },\n    { \"_id\": \"shard02\", \"host\": \"shard02/mongo-s2:27017\", \"state\": 1 }\n  ],\n  \"autosplit\": { \"enabled\": true }\n}\n```",
          "km": "### ស្ថាបត្យកម្ម Sharding — ការបែងចែកទិន្នន័យ Horizontal តាមទំហំធំ\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nSharding គឺជាយុទ្ធសាស្ត្ររបស់ MongoDB សម្រាប់ធ្វើ Horizontal Scaling ឆ្លងកាត់ Server ជាច្រើន។ នៅពេលទិន្នន័យមានទំហំធំពេករហូតលើសសមត្ថភាព RAM ឬ Disk របស់ Server តែមួយ Sharding នឹងធ្វើការបែងចែក Collection Documents ឱ្យទៅរស់នៅលើ Shards ជាច្រើនដោយស្វ័យប្រវត្តិ។ Application ភ្ជាប់ទៅកាន់ mongos Router ដែលធ្វើការទាក់ទង Config Servers ដើម្បីបញ្ជូន Query ទៅកាន់ Shard ត្រឹមត្រូវ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\nsh.status();\n```\n\n#### Expected Output\n```json\n{\n  \"shards\": [\n    { \"_id\": \"shard01\", \"host\": \"shard01/mongo-s1:27017\", \"state\": 1 },\n    { \"_id\": \"shard02\", \"host\": \"shard02/mongo-s2:27017\", \"state\": 1 }\n  ],\n  \"autosplit\": { \"enabled\": true }\n}\n```"
        },
        "starterCode": "sh.status();"
      },
      {
        "id": "mongodb-shard-key-selection",
        "title": {
          "en": "Shard Key Selection Strategies — Cardinality, Frequency & Monotonicity",
          "km": "យុទ្ធសាស្ត្រជ្រើសរើស Shard Key — Cardinality, Frequency និង Monotonicity"
        },
        "content": {
          "en": "### Shard Key Selection Strategies — Cardinality, Frequency & Monotonicity\n\n**Difficulty:** Advanced | **Estimated Time:** 11 min read\n\n#### Overview & Why It Matters\nChoosing an optimal Shard Key is an immutable decision that dictates cluster performance forever. A bad shard key creates monolithic write hotspots or scatter-gather queries that hit every shard in the cluster. Software engineers evaluate three essential shard key metrics: High Cardinality (ensuring millions of distinct values), Low Frequency (preventing monolithic key clusters), and Non-Monotonicity (avoiding sequential auto-incrementing keys that route all writes to a single target shard).\n\n#### Code Example\n```javascript\n// Enabling sharding on database and collection using hashed shard key pattern\nsh.enableSharding(\"sabaycode\");\nsh.shardCollection(\"sabaycode.transactions\", { customerId: \"hashed\" });\n```\n\n#### Expected Output\n```json\n{ \"collectionsharded\": \"sabaycode.transactions\", \"ok\": 1 }\n```",
          "km": "### យុទ្ធសាស្ត្រជ្រើសរើស Shard Key — Cardinality, Frequency និង Monotonicity\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 11 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការជ្រើសរើស Shard Key គឺជាការសម្រេចចិត្តដ៏សំខាន់បំផុតដែលមិនអាចប្រែប្រួលបានឡើយ។ Shard Key មិនល្អ បង្កើតឱ្យមាន Hotspots (សរសេរចូលតែ Shard មួយ) ឬ Scatter-Gather Queries (រត់ Search គ្រប់ Shard ទាំងអស់)។ ជម្រើស Shard Key ល្អត្រូវមាន៖ High Cardinality (តម្លៃផ្សេងៗគ្នាច្រើន), Low Frequency (គ្មានតម្លៃដដែលៗច្រើនពេក) និង Non-Monotonicity (មិនមែនជាតម្លៃកើនឡើងតាមលំដាប់លំដោយ ដូចជា Auto-increment ID)។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\n// Enabling sharding on database and collection using hashed shard key pattern\nsh.enableSharding(\"sabaycode\");\nsh.shardCollection(\"sabaycode.transactions\", { customerId: \"hashed\" });\n```\n\n#### Expected Output\n```json\n{ \"collectionsharded\": \"sabaycode.transactions\", \"ok\": 1 }\n```"
        },
        "starterCode": "// Enabling sharding on database and collection using hashed shard key pattern\nsh.enableSharding(\"sabaycode\");\nsh.shardCollection(\"sabaycode.transactions\", { customerId: \"hashed\" });"
      },
      {
        "id": "mongodb-chunks-and-balancing",
        "title": {
          "en": "Chunks, Splitting & Automated Cluster Balancing",
          "km": "Chunks, Splitting និង Automated Cluster Balancing"
        },
        "content": {
          "en": "### Chunks, Splitting & Automated Cluster Balancing\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nMongoDB partitions sharded collection data into contiguous ranges called Chunks (default size 64MB). As writes accumulate on a shard and a chunk exceeds 64MB, mongod automatically splits the chunk into two smaller ranges. The automated Balancer background process runs on the Config Server replica set primary, migrating chunks from over-utilized shards to under-utilized shards to equalize storage and I/O distribution.\n\n#### Code Example\n```javascript\nsh.getBalancerState();\nsh.isBalancerRunning();\n```\n\n#### Expected Output\n```json\ntrue\ntrue\n```",
          "km": "### Chunks, Splitting និង Automated Cluster Balancing\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nMongoDB បែងចែកទិន្នន័យនៅលើ Sharded Collection ជាជួរៗដែលហៅថា Chunks (ទំហំដើម 64MB)។ នៅពេលមានការ Write ច្រើនរហូត Chunk មួយលើសពី 64MB នោះ mongod នឹងធ្វើការ Split Chunk នោះជាពីរដោយស្វ័យប្រវត្តិ។ បន្ទាប់មក Balancer Process នឹងធ្វើការរំកិល (Migrate) Chunk ពី Shard ដែលរវល់ខ្លាំង ទៅកាន់ Shard ដែលទំនេរ ដើម្បីឱ្យប្រព័ន្ធមានតុល្យភាព។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\nsh.getBalancerState();\nsh.isBalancerRunning();\n```\n\n#### Expected Output\n```json\ntrue\ntrue\n```"
        },
        "starterCode": "sh.getBalancerState();\nsh.isBalancerRunning();"
      },
      {
        "id": "mongodb-sharding-capacity-planning",
        "title": {
          "en": "Capacity Planning — Replica Set vs Sharded Cluster Decision",
          "km": "ការរៀបចំ Capacity Planning — ការសម្រេចចិត្តរវាង Replica Set និង Sharded Cluster"
        },
        "content": {
          "en": "### Capacity Planning — Replica Set vs Sharded Cluster Decision\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nSharding adds significant operational complexity, network hops, and maintenance overhead. System architects should defer sharding until vertical scaling limits (RAM/CPU) or single replica set disk I/O throughput limits are demonstrably exhausted. As a rule of thumb, if working dataset index sizes fit inside primary RAM, a single Replica Set is vastly simpler and faster.\n\n#### Code Example\n```javascript\ndb.stats(1024 * 1024 * 1024);\n```\n\n#### Expected Output\n```json\n{\n  \"db\": \"sabaycode\",\n  \"collections\": 14,\n  \"dataSize\": 128.4,\n  \"indexSize\": 24.2,\n  \"fileSize\": 180.0\n}\n```",
          "km": "### ការរៀបចំ Capacity Planning — ការសម្រេចចិត្តរវាង Replica Set និង Sharded Cluster\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nSharding បន្ថែមភាពស្មុគស្មាញយ៉ាងខ្លាំងក្នុងការគ្រប់គ្រងប្រព័ន្ធ។ System Architects គួរតែជ្រើសរើសប្រើប្រាស់ Sharding ទាល់តែសមត្ថភាព Hardware របស់ Replica Set តែមួយ (RAM, CPU, Disk I/O) ត្រូវបានប្រើប្រាស់អស់លទ្ធភាពពិតប្រាកដ។ ប្រសិនបើ Working Dataset Index នៅតែអាចដាក់ចុះក្នុង RAM របស់ Server តែមួយបាន Replica Set ជាជម្រើសដែលលឿន និងស្រួលជាង។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.stats(1024 * 1024 * 1024);\n```\n\n#### Expected Output\n```json\n{\n  \"db\": \"sabaycode\",\n  \"collections\": 14,\n  \"dataSize\": 128.4,\n  \"indexSize\": 24.2,\n  \"fileSize\": 180.0\n}\n```"
        },
        "starterCode": "db.stats(1024 * 1024 * 1024);"
      }
    ]
  },
  {
    "id": "mongodb-app-code",
    "title": {
      "en": "9. MongoDB with Application Code",
      "km": "៩. ការប្រើប្រាស់ MongoDB ជាមួយកូដកម្មវិធី"
    },
    "lessons": [
      {
        "id": "mongodb-nodejs-native-driver",
        "title": {
          "en": "Connecting Node.js Applications with Native MongoDB Driver",
          "km": "ការភ្ជាប់ Node.js Applications ជាមួយ Native MongoDB Driver ផ្លូវការ"
        },
        "content": {
          "en": "### Connecting Node.js Applications with Native MongoDB Driver\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nThe official MongoDB Node.js driver (mongodb) provides a lightweight, high-performance async/await interface for executing commands, BSON queries, aggregation pipelines, and transaction sessions directly from Express or Fastify backend servers. Managing a single long-lived MongoClient instance across application lifecycle prevents connection exhaustion.\n\n#### Code Example\n```javascript\nimport { MongoClient } from 'mongodb';\n\nconst uri = process.env.MONGODB_URI || \"mongodb://localhost:27017\";\nconst client = new MongoClient(uri, { maxPoolSize: 50 });\n\nasync function run() {\n  await client.connect();\n  const db = client.db(\"sabaycode\");\n  const student = await db.collection(\"students\").findOne({ studentId: \"STU-882910\" });\n  console.log(\"Student Record:\", student);\n}\nrun();\n```\n\n#### Expected Output\n```json\nStudent Record: { _id: new ObjectId(\"66aba1f2001e2b0000000001\"), studentId: \"STU-882910\", fullName: \"Sophea Chan\" }\n```",
          "km": "### ការភ្ជាប់ Node.js Applications ជាមួយ Native MongoDB Driver ផ្លូវការ\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nMongoDB Node.js Driver ផ្លូវការ (mongodb) ផ្តល់ជូននូវ async/await API ដ៏ស្រាល និងមានល្បឿនលឿនខ្ពស់សម្រាប់ការរត់ BSON Queries, Aggregation Pipelines និង Transactions ដោយផ្ទាល់ចេញពី Express ឬ Fastify Backends។ ការប្រើប្រាស់ Singleton MongoClient Instance មួយសម្រាប់ពេញមួយ App Lifecycle ការពារកុំឱ្យអស់ Connection Pool។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\nimport { MongoClient } from 'mongodb';\n\nconst uri = process.env.MONGODB_URI || \"mongodb://localhost:27017\";\nconst client = new MongoClient(uri, { maxPoolSize: 50 });\n\nasync function run() {\n  await client.connect();\n  const db = client.db(\"sabaycode\");\n  const student = await db.collection(\"students\").findOne({ studentId: \"STU-882910\" });\n  console.log(\"Student Record:\", student);\n}\nrun();\n```\n\n#### Expected Output\n```json\nStudent Record: { _id: new ObjectId(\"66aba1f2001e2b0000000001\"), studentId: \"STU-882910\", fullName: \"Sophea Chan\" }\n```"
        },
        "starterCode": "import { MongoClient } from 'mongodb';\n\nconst uri = process.env.MONGODB_URI || \"mongodb://localhost:27017\";\nconst client = new MongoClient(uri, { maxPoolSize: 50 });\n\nasync function run() {\n  await client.connect();\n  const db = client.db(\"sabaycode\");\n  const student = await db.collection(\"students\").findOne({ studentId: \"STU-882910\" });\n  console.log(\"Student Record:\", student);\n}\nrun();"
      },
      {
        "id": "mongodb-mongoose-odm",
        "title": {
          "en": "Object Data Modeling with Mongoose — Schemas, Models & Validation",
          "km": "ការប្រើប្រាស់ Mongoose ODM — Schemas, Models និង Data Validation"
        },
        "content": {
          "en": "### Object Data Modeling with Mongoose — Schemas, Models & Validation\n\n**Difficulty:** Advanced | **Estimated Time:** 11 min read\n\n#### Overview & Why It Matters\nMongoose is the industry-standard Object Data Modeling (ODM) library for Node.js and MongoDB. Mongoose manages application-side schema definitions, type casting, schema validation rules, middleware hooks (pre/post save), instance methods, and population (query-time join emulation). Using Mongoose schemas ensures data integrity before records hit the MongoDB cluster.\n\n#### Code Example\n```javascript\nimport mongoose, { Schema, model } from 'mongoose';\n\nconst StudentSchema = new Schema({\n  studentId: { type: String, required: true, unique: true },\n  fullName: { type: String, required: true, trim: true },\n  email: { type: String, required: true, lowercase: true },\n  xpPoints: { type: Number, default: 0, min: 0 }\n}, { timestamps: true });\n\nconst Student = model('Student', StudentSchema);\n```\n\n#### Expected Output\n```json\nMongoose Model 'Student' compiled successfully.\n```",
          "km": "### ការប្រើប្រាស់ Mongoose ODM — Schemas, Models និង Data Validation\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 11 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nMongoose គឺជា Object Data Modeling (ODM) Library ស្តង់ដារឧស្សាហកម្មសម្រាប់ Node.js និង MongoDB។ Mongoose គ្រប់គ្រង Schema Definitions នៅខាង Application, Data Type Validation, Middleware Hooks (pre/post save), និង Population។ ការប្រើ Mongoose ធានាថាទិន្នន័យមានភាពត្រឹមត្រូវ មុនពេលវាត្រូវបានសរសេរចូលទៅក្នុង MongoDB Cluster។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\nimport mongoose, { Schema, model } from 'mongoose';\n\nconst StudentSchema = new Schema({\n  studentId: { type: String, required: true, unique: true },\n  fullName: { type: String, required: true, trim: true },\n  email: { type: String, required: true, lowercase: true },\n  xpPoints: { type: Number, default: 0, min: 0 }\n}, { timestamps: true });\n\nconst Student = model('Student', StudentSchema);\n```\n\n#### Expected Output\n```json\nMongoose Model 'Student' compiled successfully.\n```"
        },
        "starterCode": "import mongoose, { Schema, model } from 'mongoose';\n\nconst StudentSchema = new Schema({\n  studentId: { type: String, required: true, unique: true },\n  fullName: { type: String, required: true, trim: true },\n  email: { type: String, required: true, lowercase: true },\n  xpPoints: { type: Number, default: 0, min: 0 }\n}, { timestamps: true });\n\nconst Student = model('Student', StudentSchema);"
      },
      {
        "id": "mongodb-multistack-pymongo-springdata",
        "title": {
          "en": "Multi-Stack Integration — Python (PyMongo) & Java (Spring Data MongoDB)",
          "km": "ការប្រើប្រាស់ MongoDB ជាមួយ Python (PyMongo) និង Java (Spring Data MongoDB)"
        },
        "content": {
          "en": "### Multi-Stack Integration — Python (PyMongo) & Java (Spring Data MongoDB)\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nEnterprise polyglot microservice architectures integrate MongoDB across diverse runtime stacks: Python microservices utilize PyMongo or Motor for async data science pipelines; Java backend services leverage Spring Data MongoDB with MongoRepository interface abstractions for enterprise object mapping.\n\n#### Code Example\n```javascript\n// Java Spring Data MongoDB Repository Example\n@Repository\npublic interface StudentRepository extends MongoRepository<StudentDocument, String> {\n    Optional<StudentDocument> findByStudentId(String studentId);\n    List<StudentDocument> findByXpPointsGreaterThanEqual(Integer minXp);\n}\n```\n\n#### Expected Output\n```json\nSpring Data Repository Beans auto-configured.\n```",
          "km": "### ការប្រើប្រាស់ MongoDB ជាមួយ Python (PyMongo) និង Java (Spring Data MongoDB)\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nនៅក្នុងប្រព័ន្ធ Microservices ធំៗ MongoDB ត្រូវបានប្រើប្រាស់ឆ្លងកាត់ Programming Languages ជាច្រើន៖ Python Microservices ប្រើប្រាស់ PyMongo ឬ Motor សម្រាប់ Data Science Pipelines រីឯ Java Microservices ប្រើប្រាស់ Spring Data MongoDB ជាមួយ MongoRepository អ៊ីនធើហ្វេស។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\n// Java Spring Data MongoDB Repository Example\n@Repository\npublic interface StudentRepository extends MongoRepository<StudentDocument, String> {\n    Optional<StudentDocument> findByStudentId(String studentId);\n    List<StudentDocument> findByXpPointsGreaterThanEqual(Integer minXp);\n}\n```\n\n#### Expected Output\n```json\nSpring Data Repository Beans auto-configured.\n```"
        },
        "starterCode": "// Java Spring Data MongoDB Repository Example\n@Repository\npublic interface StudentRepository extends MongoRepository<StudentDocument, String> {\n    Optional<StudentDocument> findByStudentId(String studentId);\n    List<StudentDocument> findByXpPointsGreaterThanEqual(Integer minXp);\n}"
      },
      {
        "id": "mongodb-connection-pooling-best-practices",
        "title": {
          "en": "Production Connection Pooling & Resilience Patterns",
          "km": "ស្តង់ដារគ្រប់គ្រង Connection Pooling និង Resilience Patterns ក្នុង Production"
        },
        "content": {
          "en": "### Production Connection Pooling & Resilience Patterns\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nIn high-concurrency production deployments, improper connection pool management causes socket starvation and server timeouts. Software engineers configure maxPoolSize, minPoolSize, and maxIdleTimeMS parameters to keep socket connections reused efficiently without overwhelming mongod process threads.\n\n#### Code Example\n```javascript\nconst client = new MongoClient(process.env.MONGODB_URI, {\n  maxPoolSize: 100,\n  minPoolSize: 10,\n  maxIdleTimeMS: 30000,\n  connectTimeoutMS: 5000\n});\n```\n\n#### Expected Output\n```json\nConnection Pool initialized with 10 idle sockets.\n```",
          "km": "### ស្តង់ដារគ្រប់គ្រង Connection Pooling និង Resilience Patterns ក្នុង Production\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nនៅក្នុងប្រព័ន្ធ Production ដែលមាន User រត់ចូលច្រើនដំណាលគ្នា ការមិនបានគ្រប់គ្រង Connection Pool ឱ្យបានល្អ ធ្វើឱ្យអស់ Socket និ​ងកើតមាន Server Timeout។ អ្នកអភិវឌ្ឍន៍ត្រូវកំណត់ maxPoolSize, minPoolSize, និង maxIdleTimeMS ឱ្យសមស្របតាមទំហំ RAM/CPU របស់ Server។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\nconst client = new MongoClient(process.env.MONGODB_URI, {\n  maxPoolSize: 100,\n  minPoolSize: 10,\n  maxIdleTimeMS: 30000,\n  connectTimeoutMS: 5000\n});\n```\n\n#### Expected Output\n```json\nConnection Pool initialized with 10 idle sockets.\n```"
        },
        "starterCode": "const client = new MongoClient(process.env.MONGODB_URI, {\n  maxPoolSize: 100,\n  minPoolSize: 10,\n  maxIdleTimeMS: 30000,\n  connectTimeoutMS: 5000\n});"
      }
    ]
  },
  {
    "id": "mongodb-security-production",
    "title": {
      "en": "10. Security & Production Best Practices",
      "km": "១០. សន្តិសុខ និងស្តង់ដារប្រតិបត្តិការ Production"
    },
    "lessons": [
      {
        "id": "mongodb-security-rbac",
        "title": {
          "en": "Authentication & Role-Based Access Control (RBAC)",
          "km": "ប្រព័ន្ធ Authentication និង Role-Based Access Control (RBAC)"
        },
        "content": {
          "en": "### Authentication & Role-Based Access Control (RBAC)\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nSecuring a MongoDB database deployment begins with enabling mandatory SCRAM-SHA-256 authentication and enforcing Role-Based Access Control (RBAC). MongoDB provides built-in roles (read, readWrite, dbAdmin, userAdmin) and supports custom defined roles with precise privilege actions scoped to specific database collections.\n\n#### Code Example\n```javascript\nuse admin;\ndb.createUser({\n  user: \"sabay_app_user\",\n  pwd: \"StrongSecretPassword2026!\",\n  roles: [\n    { role: \"readWrite\", db: \"sabaycode\" }\n  ]\n});\n```\n\n#### Expected Output\n```json\n{ \"ok\": 1 }\n```",
          "km": "### ប្រព័ន្ធ Authentication និង Role-Based Access Control (RBAC)\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការការពារសុវត្ថិភាព MongoDB ត្រូវចាប់ផ្តើមពីការ បើក SCRAM-SHA-256 Authentication និងការប្រើប្រាស់ Role-Based Access Control (RBAC)។ MongoDB មាន Built-in Roles ដូចជា read, readWrite, dbAdmin, userAdmin និងអនុញ្ញាតឱ្យបង្កើត Custom Roles ដែលមានសិទ្ធិច្បាស់លាស់លើ Collection នីមួយៗ។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\nuse admin;\ndb.createUser({\n  user: \"sabay_app_user\",\n  pwd: \"StrongSecretPassword2026!\",\n  roles: [\n    { role: \"readWrite\", db: \"sabaycode\" }\n  ]\n});\n```\n\n#### Expected Output\n```json\n{ \"ok\": 1 }\n```"
        },
        "starterCode": "use admin;\ndb.createUser({\n  user: \"sabay_app_user\",\n  pwd: \"StrongSecretPassword2026!\",\n  roles: [\n    { role: \"readWrite\", db: \"sabaycode\" }\n  ]\n});"
      },
      {
        "id": "mongodb-security-encryption",
        "title": {
          "en": "Encryption at Rest & In-Transit TLS/SSL",
          "km": "ការធ្វើ Encryption at Rest និង In-Transit TLS/SSL"
        },
        "content": {
          "en": "### Encryption at Rest & In-Transit TLS/SSL\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nEnterprise compliance demands encrypting sensitive data at every lifecycle stage: In-Transit Encryption enforces TLS 1.3 for all client-to-mongod network communications; Encryption at Rest utilizes WiredTiger's native encryption engine (AES-256-CBC) to protect database files on disk.\n\n#### Code Example\n```javascript\ndb.serverStatus().security;\n```\n\n#### Expected Output\n```json\n{ \"SSLServerSubjectName\": \"CN=mongo.sabaycode.com\", \"SSLServerHasCertificate\": true }\n```",
          "km": "### ការធ្វើ Encryption at Rest និង In-Transit TLS/SSL\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nស្តង់ដារសុវត្ថិភាពសហគ្រាស តម្រូវឱ្យធ្វើ Encryption ទិន្នន័យគ្រប់ដំណាក់កាល៖ In-Transit Encryption បង្ខំឱ្យប្រើ TLS 1.3 សម្រាប់ Network Traffic ទាំងអស់ រីឯ Encryption at Rest ប្រើប្រាស់ WiredTiger Native Encryption Engine (AES-256) ដើម្បីការពារ Database Files លើ Disk។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.serverStatus().security;\n```\n\n#### Expected Output\n```json\n{ \"SSLServerSubjectName\": \"CN=mongo.sabaycode.com\", \"SSLServerHasCertificate\": true }\n```"
        },
        "starterCode": "db.serverStatus().security;"
      },
      {
        "id": "mongodb-backup-restore-strategies",
        "title": {
          "en": "Enterprise Backup & Disaster Recovery (mongodump/mongorestore)",
          "km": "យុទ្ធសាស្ត្រ Backup និង Disaster Recovery (mongodump/mongorestore)"
        },
        "content": {
          "en": "### Enterprise Backup & Disaster Recovery (mongodump/mongorestore)\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nProtecting database state against catastrophic failure requires robust backup workflows: mongodump/mongorestore execute logical BSON database exports and imports; Point-in-Time Recovery (PITR) continuously captures oplog streams to restore cluster state to an exact millisecond.\n\n#### Code Example\n```javascript\n// Logical backup command execution via terminal\n// mongodump --uri=\"mongodb://admin:pass@localhost:27017/sabaycode\" --out=/backups/2026-08-01\n// mongorestore --uri=\"mongodb://admin:pass@localhost:27017/sabaycode\" /backups/2026-08-01/sabaycode\n```\n\n#### Expected Output\n```json\nLogical backup executed successfully.\n```",
          "km": "### យុទ្ធសាស្ត្រ Backup និង Disaster Recovery (mongodump/mongorestore)\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការការពារទិន្នន័យពីការខូចខាតធ្ងន់ធ្ងរ ទាមទារយុទ្ធសាស្ត្រ Backup ច្បាស់លាស់៖ mongodump/mongorestore ប្រើសម្រាប់ Export/Import Logical BSON Files រីឯ Point-in-Time Recovery (PITR) ចាប់យក Oplog Stream រាល់មិល្លីវិនាទី ដើម្បីអាច Restore ទៅកាន់ម៉ោងច្បាស់លាស់ណាមួយបាន។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\n// Logical backup command execution via terminal\n// mongodump --uri=\"mongodb://admin:pass@localhost:27017/sabaycode\" --out=/backups/2026-08-01\n// mongorestore --uri=\"mongodb://admin:pass@localhost:27017/sabaycode\" /backups/2026-08-01/sabaycode\n```\n\n#### Expected Output\n```json\nLogical backup executed successfully.\n```"
        },
        "starterCode": "// Logical backup command execution via terminal\n// mongodump --uri=\"mongodb://admin:pass@localhost:27017/sabaycode\" --out=/backups/2026-08-01\n// mongorestore --uri=\"mongodb://admin:pass@localhost:27017/sabaycode\" /backups/2026-08-01/sabaycode"
      },
      {
        "id": "mongodb-production-monitoring",
        "title": {
          "en": "Monitoring MongoDB Production Performance",
          "km": "ការធ្វើ Monitoring ប្រសិទ្ធភាពរត់របស់ MongoDB ក្នុង Production"
        },
        "content": {
          "en": "### Monitoring MongoDB Production Performance\n\n**Difficulty:** Advanced | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nDevOps engineers monitor cluster health using mongostat (live real-time status stream of operations per second, memory usage, and page faults) and mongotop (tracking read/write time spent per collection).\n\n#### Code Example\n```javascript\ndb.serverStatus().mem;\n```\n\n#### Expected Output\n```json\n{ \"bits\": 64, \"resident\": 1420, \"virtual\": 4096, \"supported\": true }\n```",
          "km": "### ការធ្វើ Monitoring ប្រសិទ្ធភាពរត់របស់ MongoDB ក្នុង Production\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 10 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nក្រុម DevOps ធ្វើការត្រួតពិនិត្យ សុខភាពរបស់ Cluster ដោយប្រើប្រាស់ mongostat (បង្ហាញល្បឿន ops/sec, RAM, page faults ជាក់ស្តែង) និង mongotop (បង្ហាញថាតើ Collection ណាប្រើពេល Read/Write ច្រើនជាងគេ)។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.serverStatus().mem;\n```\n\n#### Expected Output\n```json\n{ \"bits\": 64, \"resident\": 1420, \"virtual\": 4096, \"supported\": true }\n```"
        },
        "starterCode": "db.serverStatus().mem;"
      },
      {
        "id": "mongodb-production-pitfalls-checklist",
        "title": {
          "en": "Top 10 Production Pitfalls & How to Avoid Them",
          "km": "បញ្ហាប្រឈមទាំង ១០ ក្នុង Production និងវិធីដោះស្រាយ"
        },
        "content": {
          "en": "### Top 10 Production Pitfalls & How to Avoid Them\n\n**Difficulty:** Advanced | **Estimated Time:** 11 min read\n\n#### Overview & Why It Matters\nProduction MongoDB deployments frequently encounter avoidable defects: 1. Unindexed queries causing memory spills. 2. Leaving bindIp at 0.0.0.0 without authentication. 3. Missing connection pool timeouts. 4. Over-indexing write-heavy collections. 5. Storing files larger than 16MB outside GridFS. 6. Ignoring secondary replication lag. 7. Running single-node mongod in production without a replica set.\n\n#### Code Example\n```javascript\ndb.adminCommand({ getCmdLineOpts: 1 }).parsed.net;\n```\n\n#### Expected Output\n```json\n{ \"bindIp\": \"127.0.0.1,10.0.0.15\", \"port\": 27017 }\n```",
          "km": "### បញ្ហាប្រឈមទាំង ១០ ក្នុង Production និងវិធីដោះស្រាយ\n\n**កម្រិត:** កម្រិតខ្ពស់ | **រយៈពេលអាន:** 11 នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការរត់ MongoDB ក្នុង Production អាចជួបបញ្ហាញឹកញាប់៖ ១. ភ្លេចបង្កើត Index ធ្វើឱ្យរត់យឺត។ ២. បើក IP 0.0.0.0 ដោយគ្មាន Password។ ៣. គ្មាន Connection Pool Limit។ ៤. បង្កើត Index ច្រើនពេកលើ Write-heavy collections។ ៥. ដាក់ File ធំជាង 16MB ដោយមិនប្រើ GridFS។ ៦. មិនតាមមើល Secondary Replication Lag។ ៧. រត់ mongod Node តែមួយក្នុង Production ដោយគ្មាន Replica Set។\n\n#### ឧទាហរណ៍កូដ (mongosh Shell)\n```javascript\ndb.adminCommand({ getCmdLineOpts: 1 }).parsed.net;\n```\n\n#### Expected Output\n```json\n{ \"bindIp\": \"127.0.0.1,10.0.0.15\", \"port\": 27017 }\n```"
        },
        "starterCode": "db.adminCommand({ getCmdLineOpts: 1 }).parsed.net;"
      }
    ]
  }
];

export const mongoDBReferences: ReferenceItem[] = [
  {
    "id": "ref-mongo-crud",
    "syntax": "db.collection.insertOne() / find() / updateOne()",
    "desc": {
      "en": "Essential mongosh shell CRUD methods, comparison, logical, and update operators.",
      "km": "ពាក្យបញ្ជា mongosh CRUD និង Query Operators សំខាន់ៗ។"
    },
    "example": "// Insert & Find\ndb.coll.insertOne({ name: \"A\" });\ndb.coll.find({ price: { $gte: 10, $lte: 100 } });\n\n// Update Operators\ndb.coll.updateOne({ _id: id }, { $set: { status: \"A\" }, $inc: { count: 1 } });"
  },
  {
    "id": "ref-mongo-agg",
    "syntax": "db.collection.aggregate([ { $match }, { $group }, { $sort } ])",
    "desc": {
      "en": "Core pipeline stages ($match, $group, $project, $lookup, $unwind, $facet).",
      "km": "Pipeline Stages សំខាន់ៗសម្រាប់ធ្វើ Analytics។"
    },
    "example": "db.orders.aggregate([\n  { $match: { status: \"COMPLETED\" } },\n  { $group: { _id: \"$customerId\", total: { $sum: \"$amount\" } } },\n  { $sort: { total: -1 } }\n]);"
  },
  {
    "id": "ref-mongo-indexes",
    "syntax": "db.collection.createIndex({ field: 1 }, { unique: true })",
    "desc": {
      "en": "Syntax for Single, Compound, Text, 2dsphere, and Unique indexes.",
      "km": "កូដបង្កើត Indexes គ្រប់ប្រភេទ និងការមើល Explain Plan។"
    },
    "example": "db.coll.createIndex({ email: 1 }, { unique: true });\ndb.coll.createIndex({ status: 1, createdAt: -1 });\ndb.coll.find().explain(\"executionStats\");"
  }
];

export const mongoDBQuizzes: Quiz[] = [
  {
    "id": "mongo-q1",
    "question": {
      "en": "What is the primary internal storage and serialization format used by MongoDB?",
      "km": "តើទម្រង់រក្សាទុកទិន្នន័យខាងក្នុងដើមរបស់ MongoDB គឺជាអ្វី?"
    },
    "options": {
      "en": [
        "Plain JSON Text",
        "BSON (Binary JSON)",
        "XML Document Format",
        "CSV Table Stream"
      ],
      "km": [
        "Plain JSON Text",
        "BSON (Binary JSON)",
        "XML Document Format",
        "CSV Table Stream"
      ]
    },
    "correctIndex": 1,
    "explanation": {
      "en": "MongoDB stores and transmits documents internally as BSON (Binary JSON), which extends JSON with explicit data types (like Date, ObjectId, Decimal128) and length prefixes for fast traversal.",
      "km": "MongoDB រក្សាទុកទិន្នន័យខាងក្នុងជា BSON (Binary JSON) ដែលបន្ថែម Data Types ច្បាស់លាស់ និងល្បឿនអានលឿនជាង JSON ធម្មតា។"
    }
  },
  {
    "id": "mongo-q2",
    "question": {
      "en": "What is the maximum allowed size for a single BSON document in MongoDB?",
      "km": "តើទំហំអតិបរមាដែលអនុញ្ញាតសម្រាប់ Document មួយក្នុង MongoDB គឺប៉ុន្មាន?"
    },
    "options": {
      "en": [
        "2 Megabytes",
        "8 Megabytes",
        "16 Megabytes",
        "64 Megabytes"
      ],
      "km": [
        "2 Megabytes",
        "8 Megabytes",
        "16 Megabytes",
        "64 Megabytes"
      ]
    },
    "correctIndex": 2,
    "explanation": {
      "en": "The maximum BSON document size is 16MB. Storing larger files requires GridFS.",
      "km": "ទំហំអតិបរមារបស់ BSON Document គឺ 16 Megabytes។ ទិន្នន័យធំជាងនេះត្រូវប្រើ GridFS។"
    }
  },
  {
    "id": "mongo-q3",
    "question": {
      "en": "Which Compound Index field ordering rule maximizes query performance and eliminates sorting overhead?",
      "km": "តើច្បាប់រៀបចំលំដាប់ Field ក្នុង Compound Index មួយណាដែលផ្តល់ប្រសិទ្ធភាពខ្ពស់បំផុត?"
    },
    "options": {
      "en": [
        "Range -> Equality -> Sort",
        "ESR Rule (Equality -> Sort -> Range)",
        "Sort -> Range -> Equality",
        "Random Field Order"
      ],
      "km": [
        "Range -> Equality -> Sort",
        "ESR Rule (Equality -> Sort -> Range)",
        "Sort -> Range -> Equality",
        "Random Field Order"
      ]
    },
    "correctIndex": 1,
    "explanation": {
      "en": "The ESR Rule stands for Equality fields first, followed by Sort fields, and finally Range filter fields.",
      "km": "ច្បាប់ ESR Rule គឺរៀប Equality មុន រួចបាន Sort Field និងចុងក្រោយគឺ Range Filter Field។"
    }
  }
];

export const mongoDBMiniProjects: MiniProject[] = [
  {
    "id": "mongo-exercise-schema-agg",
    "title": {
      "en": "E-Commerce Analytics Pipeline & Schema Design",
      "km": "ការរចនា Schema និង Aggregation Pipeline សម្រាប់ E-Commerce"
    },
    "desc": {
      "en": "Design an order collection schema with embedded item snapshots, then construct a multi-stage aggregation pipeline calculating total sales volume and gross revenue per course product.",
      "km": "រចនា Order Collection Schema រួចបង្កើត Multi-stage Aggregation Pipeline ដើម្បីគណនាចំណូលសរុប និងចំនួនលក់តាមមុខវិជ្ជានីមួយៗ។"
    },
    "starterCode": "// Exercise: Create an aggregation pipeline calculating total sales volume and gross revenue\ndb.orders.aggregate([\n  // Step 1: Filter COMPLETED orders\n  // Step 2: Unwind itemsSnapshot array\n  // Step 3: Group by courseId and calculate sum of revenue\n]);",
    "solutionCode": "db.orders.aggregate([\n  { $match: { status: \"COMPLETED\" } },\n  { $unwind: \"$itemsSnapshot\" },\n  {\n    $group: {\n      _id: \"$itemsSnapshot.courseId\",\n      courseTitle: { $first: \"$itemsSnapshot.title\" },\n      totalOrders: { $sum: 1 },\n      grossRevenueUsd: { $sum: \"$itemsSnapshot.priceUsd\" }\n    }\n  },\n  { $sort: { grossRevenueUsd: -1 } }\n]);"
  },
  {
    "id": "mongo-exercise-mongoose-api",
    "title": {
      "en": "Mongoose Student Repository & Validation Suite",
      "km": "Mongoose Student Repository និង Data Validation"
    },
    "desc": {
      "en": "Define a production Mongoose schema with custom regex validations, unique indexes, and pre-save password hashing hooks.",
      "km": "រចនា Mongoose Schema ជាមួយ Regex Validation, Unique Indexes, និង Pre-save Middleware Hooks។"
    },
    "starterCode": "import mongoose, { Schema, model } from 'mongoose';\n\nconst StudentSchema = new Schema({\n  // Add studentId, fullName, email with validation\n});\n\nexport const Student = model('Student', StudentSchema);",
    "solutionCode": "import mongoose, { Schema, model } from 'mongoose';\n\nconst StudentSchema = new Schema({\n  studentId: { type: String, required: true, unique: true },\n  fullName: { type: String, required: true, trim: true },\n  email: { type: String, required: true, unique: true, lowercase: true, match: /^\\S+@\\S+\\.\\S+$/ },\n  xpPoints: { type: Number, default: 0, min: 0 }\n}, { timestamps: true });\n\nexport const Student = model('Student', StudentSchema);"
  }
];

export const mongoDBCourseData = {
  id: "mongodb",
  title: { en: "MongoDB", km: "MongoDB" },
  desc: {
    en: "Master production-grade MongoDB architecture, BSON modeling, aggregation pipelines, indexes, ACID transactions, replica sets, sharding, and Mongoose ODM for enterprise backends.",
    km: "រៀនពីស្ថាបត្យកម្ម MongoDB កម្រិតខ្ពស់, BSON Data Modeling, Aggregation Pipelines, Indexes, ACID Transactions, Replica Sets, Sharding និង Mongoose ODM សម្រាប់ប្រព័ន្ធសហគ្រាស។"
  },
  category: "database",
  difficulty: "advanced",
  estimatedHours: 12,
  iconName: "mongodb",
  topics: mongoDBTopics,
  references: mongoDBReferences,
  quizzes: mongoDBQuizzes,
  miniProjects: mongoDBMiniProjects
};

export default mongoDBCourseData;
