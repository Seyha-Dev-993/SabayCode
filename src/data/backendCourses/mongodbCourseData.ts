import { BackendCourse } from '../backendCoursesHubData';

export const MONGODB_COURSE_DATA: BackendCourse = {
  id: 'mongodb',
  slug: 'mongodb-nosql-document-databases',
  title: {
    en: 'MongoDB & NoSQL Document Databases — Flexible Data at Scale',
    km: 'MongoDB & NoSQL Document Databases — ទិន្នន័យបត់បែនក្នុងទំហំធំ'
  },
  iconName: 'mongodb',
  type: 'database',
  categoryId: 'databases',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Store data as flexible documents instead of rigid tables — and know exactly when that\'s the right call.',
    km: 'រក្សាទុកទិន្នន័យជាឯកសារបត់បែន ជំនួសតារាងតឹងរឹង — ហើយដឹងច្បាស់ពេលណាដែលជាជម្រើសត្រឹមត្រូវ។'
  },
  summary: {
    en: 'Not every application fits neatly into rigid rows and columns — sometimes your data is naturally nested, varies from record to record, or needs to scale horizontally across many servers, and that\'s exactly the problem document databases like MongoDB were built to solve. Instead of tables with a fixed schema, MongoDB stores data as flexible, JSON-like documents grouped into collections, letting related data live together instead of being split across many tables and joined back at query time. This course covers the document data model, CRUD operations, MongoDB\'s expressive query language, real data-modeling decisions (when to embed data versus when to reference it), the aggregation framework for building reports, indexing for performance, and how application code actually connects to a MongoDB database. Just as important, you\'ll come away with a clear sense of when a document database is the right tool and when a relational database (as covered in the SQL Fundamentals course) is still the better choice. By the end, you\'ll be able to model, query, and build against a real MongoDB database with confidence.',
    km: 'មិនមែនកម្មវិធីទាំងអស់សមនឹងជួរដេក និងជួរឈរតឹងរឹងនោះទេ — ពេលខ្លះទិន្នន័យរបស់អ្នកមានលក្ខណៈជាប់ជាន់គ្នាតាមធម្មជាតិ, ប្រែប្រួលពីកំណត់ត្រាមួយទៅកំណត់ត្រាមួយ ឬត្រូវការពង្រីកផ្តេកលើ server ជាច្រើន ហើយនោះហើយជាបញ្ហាដែលមូលដ្ឋានទិន្នន័យឯកសារ (document databases) ដូចជា MongoDB ត្រូវបានសាងឡើងដើម្បីដោះស្រាយ។ ជំនួសឱ្យតារាងដែលមាន schema ថេរ, MongoDB រក្សាទុកទិន្នន័យជាឯកសារបត់បែនស្រដៀង JSON ដែលបានដាក់ជាក្រុមហៅថា collections ដោយអនុញ្ញាតឱ្យទិន្នន័យទាក់ទងគ្នារស់នៅជាមួយគ្នា ជំនួសឱ្យការញែកចេញទៅតារាងជាច្រើន ហើយផ្សំមកវិញនៅពេលសាកសួរ។ វគ្គសិក្សានេះគ្របដណ្តប់លើគំរូទិន្នន័យឯកសារ, ប្រតិបត្តិការ CRUD, ភាសាសាកសួររបស់ MongoDB ដែលមានតម្លៃ, ការសម្រេចចិត្តរចនាទិន្នន័យពិតប្រាកដ (ពេលណាគួរបង្កប់ទិន្នន័យ ធៀបនឹងពេលណាគួរយោង), aggregation framework សម្រាប់សាងរបាយការណ៍, ការធ្វើលិបិក្រម (indexing) សម្រាប់ដំណើរការ, និងរបៀបដែលកូដកម្មវិធីភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ MongoDB ជាក់ស្តែង។ សំខាន់មិនតិចជាងគ្នា អ្នកនឹងចេញមកជាមួយនឹងការយល់ដឹងច្បាស់លាស់ថាពេលណាដែលមូលដ្ឋានទិន្នន័យឯកសារជាឧបករណ៍ត្រឹមត្រូវ ហើយពេលណាដែលមូលដ្ឋានទិន្នន័យទាក់ទង (ដូចបានគ្របដណ្តប់ក្នុងវគ្គ SQL Fundamentals) នៅតែជាជម្រើសល្អជាង។ ចប់វគ្គនេះ អ្នកនឹងអាចរចនា, សាកសួរ, និងសាងលើមូលដ្ឋានទិន្នន័យ MongoDB ពិតប្រាកដដោយទំនុកចិត្ត។'
  },
  estimatedHours: 20,
  lessonCount: 30,
  usedFor: 'Document Schema Design, BSON CRUD Queries, Aggregation Pipelines, Embedding vs Referencing, Performance Indexing',
  realWorldApps: ['SocialFeed Platform Backend', 'E-Commerce Flexible Product Catalog', 'Real-Time Content Management System', 'IoT & Sensor Log Analytics Engine'],
  prerequisites: {
    en: 'No strict prerequisite, but completion of the Database & SQL Fundamentals course is recommended, since much of this course is easiest to understand in contrast to the relational model. Basic comfort reading JSON-like object/array syntax (as in JavaScript) is helpful, since MongoDB\'s shell and query documents use that same shape.',
    km: 'មិនទាមទារលក្ខខណ្ឌតឹងរឹងទេ ប៉ុន្តែការបញ្ចប់វគ្គសិក្សា Database & SQL Fundamentals ត្រូវបានណែនាំ ព្រោះភាគច្រើននៃវគ្គសិក្សានេះងាយស្រួលយល់បំផុតនៅពេលប្រៀបធៀបទៅនឹងគំរូទាក់ទង។ ការយល់ដឹងជាមូលដ្ឋានក្នុងការអាន BSON/JSON object/array syntax គឺមានប្រយោជន៍ ចាប់តាំងពី MongoDB Shell និង Query Document ប្រើប្រាស់ទម្រង់ដូចគ្នានោះ។'
  },
  whatYouWillLearn: {
    en: [
      'Understand the document data model and how it differs from relational tables',
      'Install MongoDB and run commands using the MongoDB Shell (mongosh)',
      'Perform CRUD operations: insertOne/insertMany, find, updateOne/updateMany, deleteOne/deleteMany',
      'Write expressive queries using operators like $gt, $in, $and, and $or',
      'Shape query results with projections and sorting',
      'Make real data-modeling decisions: embedding related data vs referencing it',
      'Build multi-stage reports using the aggregation framework ($match, $group, $sort, $project)',
      'Add indexes and read a query plan with .explain()',
      'Understand how application code (e.g. Node.js with the official driver or Mongoose) connects to MongoDB',
      'Use multi-document transactions when strict consistency across documents is required',
      'Recognize when a document database is the right fit versus a relational one',
      'Model, populate, and query a complete, realistic MongoDB database'
    ],
    km: [
      'យល់ដឹងពីគំរូទិន្នន័យឯកសារ (Document Data Model) និងភាពខុសគ្នារបស់វាពី Relational Tables',
      'ដំឡើង MongoDB និងរត់បញ្ជាដោយប្រើប្រាស់ MongoDB Shell (mongosh)',
      'អនុវត្តប្រតិបត្តិការ CRUD: insertOne/insertMany, find, updateOne/updateMany, deleteOne/deleteMany',
      'សរសេរ query បញ្ជាក់ន័យច្បាស់លាស់ដោយប្រើប្រាស់ operators ដូចជា $gt, $in, $and, និង $or',
      'រៀបចំទម្រង់លទ្ធផល query ដោយប្រើ projections និង sorting',
      'ធ្វើការសម្រេចចិត្តរចនាទិន្នន័យពិតប្រាកដ៖ ការបង្កប់ទិន្នន័យទាក់ទង (Embedding) ធៀបនឹងការយោង (Referencing)',
      'សាងរបាយការណ៍ច្រើនតង់ដោយប្រើ Aggregation Framework ($match, $group, $sort, $project)',
      'បន្ថែម indexes និងពិនិត្យមើលផែនការដំណើរការ query ជាមួយ .explain()',
      'យល់ដឹងពីរបៀបដែលកូដកម្មវិធី (ដូចជា Node.js ជាមួយ Driver ឬ Mongoose) ភ្ជាប់ទៅកាន់ MongoDB',
      'ប្រើប្រាស់ Multi-document Transactions នៅពេលត្រូវការភាពស៊ីសង្វាក់គ្នាយ៉ាងតឹងរឹងឆ្លង document',
      'ស្គាល់ពីពេលណាដែល Mongoose/Document Database ជាជម្រើសត្រឹមត្រូវ ធៀបនឹង Relational Database',
      'រចនា បញ្ជូលទិន្នន័យ និងសាកសួរមូលដ្ឋានទិន្នន័យ MongoDB ពេញលេញពិតប្រាកដ'
    ]
  },
  toolsAndSetup: {
    en: '1. Install MongoDB Community Server (or use a free MongoDB Atlas cloud cluster if you\'d rather not install locally)\n2. Install mongosh, the MongoDB Shell, for running commands directly\n3. Optionally install MongoDB Compass, a free GUI for browsing collections and documents visually\n4. Confirm your setup by connecting with mongosh and running `db.runCommand({ ping: 1 })`',
    km: '១. ដំឡើង MongoDB Community Server (ឬប្រើប្រាស់ MongoDB Atlas Cloud ដោយឥតគិតថ្លៃ)\n២. ដំឡើង mongosh (MongoDB Shell) សម្រាប់រត់ Command ដោយផ្ទាល់\n៣. អាចដំឡើង MongoDB Compass ដែលជា GUI ឥតគិតថ្លៃសម្រាប់មើល Collections និង Documents\n៤. ផ្ទៀងផ្ទាត់ការដំឡើងដោយភ្ជាប់ mongosh ហើយរត់ `db.runCommand({ ping: 1 })`'
  },
  cheatSheet: [
    {
      concept: 'CRUD Querying with Operators',
      code: `db.products.find({\n  category: "Electronics",\n  price: { $gt: 50, $lte: 500 }\n})\n.sort({ price: -1 })\n.limit(10);`,
      explanation: {
        en: 'Finds top 10 electronics priced between $50 and $500 sorted from highest to lowest price.',
        km: 'ស្វែងរកផលិតផលអេឡិចត្រូនិក ១០ ដំបូងដែលតម្លៃចន្លោះពី $50 ដល់ $500 តម្រៀបពីថ្លៃទៅថោក។'
      }
    },
    {
      concept: 'Atomic Field Update ($set, $inc, $push)',
      code: `db.posts.updateOne(\n  { _id: ObjectId("64f200000000000000000101") },\n  {\n    $inc: { viewsCount: 1 },\n    $push: { likes: userId },\n    $set: { updatedAt: new Date() }\n  }\n);`,
      explanation: {
        en: 'Atomically increments a counter, pushes an ID into an array, and sets a timestamp in a single update operation.',
        km: 'កែប្រែទិន្នន័យក្នុងពេលតែមួយ៖ បង្កើនចំនួន views, បញ្ចូល ID ទៅក្នុង likes array និងបច្ចុប្បន្នភាពកាលបរិច្ឆេទ។'
      }
    },
    {
      concept: 'Aggregation Pipeline ($match, $group, $sort)',
      code: `db.orders.aggregate([\n  { $match: { status: "COMPLETED" } },\n  {\n    $group: {\n      _id: "$category",\n      totalRevenue: { $sum: "$amount" },\n      avgOrderValue: { $avg: "$amount" },\n      orderCount: { $sum: 1 }\n    }\n  },\n  { $sort: { totalRevenue: -1 } }\n]);`,
      explanation: {
        en: 'Groups completed orders by category, sums revenue, calculates average order value, and sorts descending.',
        km: 'ប្រមូលផ្តុំការកុម្ម៉ង់ទិញជោគជ័យតាមប្រភេទ គណនាចំណូលសរុប តម្លៃមធ្យម និងតម្រៀបតាមចំណូលខ្ពស់បំផុត។'
      }
    },
    {
      concept: 'Compound Index for Feed Sorting',
      code: `db.posts.createIndex({ authorId: 1, createdAt: -1 });\n\n// Verified with explain:\ndb.posts.find({ authorId: userId }).sort({ createdAt: -1 }).explain("executionStats");`,
      explanation: {
        en: 'Creates a compound index supporting equality filter on authorId and range sort on createdAt.',
        km: 'បង្កើត Compound Index ដើម្បីគាំទ្រការ Filter authorId និងតម្រៀបតាមកាលបរិច្ឆេទ (createdAt) យ៉ាងលឿន។'
      }
    }
  ],
  quiz: [
    {
      id: 'mg-q1',
      question: {
        en: 'What is the primary difference in data storage between MongoDB and a traditional relational SQL database?',
        km: 'តើអ្វីជាភាពខុសគ្នាចម្បងក្នុងការរក្សាទុកទិន្នន័យរវាង MongoDB និង Relational SQL Database 传统?'
      },
      options: [
        { id: '1', text: { en: 'MongoDB stores data in flexible JSON/BSON documents in collections, whereas SQL uses fixed rows and columns in tables', km: 'MongoDB រក្សាទុកទិន្នន័យជា JSON/BSON documents បត់បែនក្នុង collections ឯ SQL ប្រើជួរដេកនិងជួរឈរថេរក្នុង tables' }, isCorrect: true },
        { id: '2', text: { en: 'MongoDB only runs in RAM and cannot save files to persistent disks', km: 'MongoDB ដំណើរការតែលើ RAM ប៉ុណ្ណោះ និងមិនអាចរក្សាទុកក្នុង Disk បានទេ' }, isCorrect: false },
        { id: '3', text: { en: 'Relational databases do not support primary keys or indexes', km: 'Relational databases មិនគាំទ្រ Primary Keys ឬ Indexes ឡើយ' }, isCorrect: false },
        { id: '4', text: { en: 'MongoDB requires every document in a collection to match the exact same schema structure', km: 'MongoDB ទាមទារឱ្យគ្រប់ document ក្នុង collection ត្រូវតែមានរចនាសម្ព័ន្ធដូចគ្នាបេះបិទ' }, isCorrect: false }
      ],
      explanation: {
        en: 'MongoDB uses BSON (Binary JSON) documents grouped into collections. Unlike relational SQL tables with strict column definitions, MongoDB documents in the same collection can contain varying fields or nested arrays/objects.',
        km: 'MongoDB ប្រើ BSON Documents ប្រមូលផ្តុំក្នុង Collections។ ខុសពី SQL Table ដែលមាន Column ថេរ Document ក្នុង MongoDB អាចមាន Field ឬ Array ជាប់ជាន់គ្នាផ្សេងៗគ្នាបាន។'
      }
    },
    {
      id: 'mg-q2',
      question: {
        en: 'When designing a MongoDB schema, when is EMBEDDING related data inside a single document preferred over REFERENCING across collections?',
        km: 'ក្នុងការរចនា MongoDB Schema តើពេលណាដែលការបង្កប់ (EMBEDDING) ទិន្នន័យទាក់ទងក្នុង Document តែមួយ ប្រសើរជាងការយោង (REFERENCING)?'
      },
      options: [
        { id: '1', text: { en: 'When related data is bounded, small, and almost always read together with the parent document', km: 'នៅពេលទិន្នន័យទាក់ទងមានចំនួនកំណត់ ទំហំតូច និងត្រូវតែបានអានជាមួយ parent document ស្ទើរតែគ្រប់ពេល' }, isCorrect: true },
        { id: '2', text: { en: 'When the related data grows unbounded over time (e.g. millions of items)', km: 'នៅពេលទិន្នន័យទាក់ទងកើនឡើងគ្មានទីបញ្ចប់ (ដូចជាទិន្នន័យរាប់លានកំណត់ត្រា)' }, isCorrect: false },
        { id: '3', text: { en: 'When the embedded data exceeds MongoDB\'s 16MB document limit', km: 'នៅពេលទិន្នន័យបង្កប់លើសពីទំហំកំណត់ 16MB របស់ MongoDB' }, isCorrect: false },
        { id: '4', text: { en: 'When you need to join 50 independent collections together on every write', km: 'នៅពេលអ្នកត្រូវការ Join 50 collections ដាច់ដោយឡែកពីគ្នារាល់ពេលសរសេរ' }, isCorrect: false }
      ],
      explanation: {
        en: 'Embedding is ideal for "contains" or 1-to-few bounded relationships where child data is frequently read along with the parent. If data grows unbounded or exceeds 16MB, referencing is required.',
        km: 'Embedding សមស្របសម្រាប់ទំនាក់ទំនង 1-to-few ដែលមានចំនួនកំណត់ និងអានជាមួយ parent ជានិច្ច។ ប្រសិនបើទិន្នន័យកើនឡើងគ្មានទីបញ្ចប់ ឬលើស 16MB ត្រូវតែប្រើ Referencing។'
      }
    }
  ],
  capstoneProject: {
    id: 'socialfeed-db',
    slug: 'socialfeed-db',
    title: {
      en: 'SocialFeed DB',
      km: 'ប្រព័ន្ធទិន្នន័យបណ្តាញសង្គម (SocialFeed DB)'
    },
    description: {
      en: 'Model, populate, and query a realistic social-media-style dataset in MongoDB: users, posts, comments, and likes, with deliberate embedding/referencing decisions, and an aggregation pipeline that builds a "trending posts" report.',
      km: 'រចនា បញ្ជូលទិន្នន័យ និងសាកសួរទិន្នន័យបណ្តាញសង្គមក្នុង MongoDB៖ អ្នកប្រើប្រាស់, ការបង្ហោះ, មតិយោបល់, និងការចូលចិត្ត ដោយធ្វើការសម្រេចចិត្ត Embedding/Referencing ច្បាស់លាស់ និងបង្កើត Aggregation Pipeline សម្រាប់របាយការណ៍ "Trending Posts"។'
    },
    featureChecklist: {
      en: [
        'users collection (name, email, joinedAt)',
        'posts collection, with likes embedded as an array of user IDs',
        'comments collection referencing posts and users by ID (not embedded, due to unbounded growth)',
        'Query: get a single user\'s full feed — their own posts plus posts from users they follow',
        'Query: get all comments for a given post, joined with the commenting user\'s name (using $lookup)',
        'Aggregation pipeline: "trending posts" — posts ranked by a combined score of likes and comment count over the last 7 days',
        'At least one compound index added to speed up the feed query, verified with .explain("executionStats")',
        'A short write-up explaining the embedding vs referencing decision made for each collection'
      ],
      km: [
        'users collection (name, email, joinedAt)',
        'posts collection ជាមួយ likes array បង្កប់ក្នុង document',
        'comments collection យោងទៅ posts និង users តាម ID',
        'Query: ទាញយក Feed របស់អ្នកប្រើប្រាស់ (ការបង្ហោះផ្ទាល់ខ្លួន + អ្នកដែល Follow)',
        'Query: ទាញមតិយោបល់ និងឈ្មោះអ្នកប្រើប្រាស់ដោយប្រើ $lookup',
        'Aggregation pipeline: ស្វែងរក Trending Posts ផ្អែកលើ Likes & Comments ចុងក្រោយ ៧ ថ្ងៃ',
        'បន្ថែម Compound index ដើម្បីពន្លឿន Feed query និងផ្ទៀងផ្ទាត់ជាមួយ explain()',
        'សំណេរពន្យល់ពីហេតុផលជ្រើសរើស Embedding ធៀបនឹង Referencing'
      ]
    },
    starterCode: {
      language: 'javascript',
      code: `// Step 1: Initialize SocialFeed DB Collections in mongosh
// Users collection seed data
db.users.insertMany([
  { _id: ObjectId("64f100000000000000000001"), name: "Sophea Chan", email: "sophea@example.com", joinedAt: new Date("2024-01-15") },
  { _id: ObjectId("64f100000000000000000002"), name: "Dara Sok", email: "dara@example.com", joinedAt: new Date("2024-02-01") },
  { _id: ObjectId("64f100000000000000000003"), name: "Rithy Kim", email: "rithy@example.com", joinedAt: new Date("2024-02-10") }
]);

// Step 2: Posts collection with embedded likes array (user ObjectIds)
db.posts.insertMany([
  {
    _id: ObjectId("64f200000000000000000101"),
    authorId: ObjectId("64f100000000000000000001"),
    content: "Just deployed our new MongoDB cluster! Excited for document flexibility.",
    createdAt: new Date(),
    likes: [ObjectId("64f100000000000000000002"), ObjectId("64f100000000000000000003")]
  }
]);`
    },
    finalCode: `// Full Schema, Indexes, and Aggregation Suite for SocialFeed DB

// 1. Comments collection (referenced model for unbounded growth)
db.comments.insertMany([
  {
    postId: ObjectId("64f200000000000000000101"),
    userId: ObjectId("64f100000000000000000002"),
    text: "Awesome work Sophea! Document databases make rapid schema changes so easy.",
    createdAt: new Date()
  },
  {
    postId: ObjectId("64f200000000000000000101"),
    userId: ObjectId("64f100000000000000000003"),
    text: "What index strategy did you use for feed sorting?",
    createdAt: new Date()
  }
]);

// 2. Feed Query: Fetch recent posts for a user and followed authors
db.posts.find({
  authorId: { $in: [ObjectId("64f100000000000000000001"), ObjectId("64f100000000000000000002")] }
}).sort({ createdAt: -1 }).limit(10);

// 3. Comments Lookup Query: Get comments joined with user details via $lookup
db.comments.aggregate([
  { $match: { postId: ObjectId("64f200000000000000000101") } },
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "authorDetails"
    }
  },
  { $unwind: "$authorDetails" },
  {
    $project: {
      text: 1,
      createdAt: 1,
      "authorDetails.name": 1,
      "authorDetails.email": 1
    }
  }
]);

// 4. Trending Posts Aggregation Pipeline (Ranked by Likes & Comments)
db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "postId",
      as: "postComments"
    }
  },
  {
    $project: {
      content: 1,
      authorId: 1,
      createdAt: 1,
      likeCount: { $size: { $ifNull: ["$likes", []] } },
      commentCount: { $size: "$postComments" },
      engagementScore: {
        $add: [
          { $multiply: [{ $size: { $ifNull: ["$likes", []] } }, 2] }, // 2 points per like
          { $multiply: [{ $size: "$postComments" }, 3] }            // 3 points per comment
        ]
      }
    }
  },
  { $sort: { engagementScore: -1 } },
  { $limit: 5 }
]);

// 5. Indexing for High-Performance Feed Queries
db.posts.createIndex({ authorId: 1, createdAt: -1 });`,
    sampleRequests: [
      {
        title: 'Get User Feed Query',
        method: 'POST',
        url: '/api/v1/feed',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: '64f100000000000000000001',
          following: ['64f100000000000000000002', '64f100000000000000000003']
        }, null, 2),
        responseStatus: 200,
        responseBody: JSON.stringify({
          count: 1,
          posts: [
            {
              _id: '64f200000000000000000101',
              authorId: '64f100000000000000000001',
              content: 'Just deployed our new MongoDB cluster!',
              likeCount: 2,
              createdAt: '2024-08-01T10:00:00.000Z'
            }
          ]
        }, null, 2)
      }
    ]
  },
  modules: [
    // Module 1 — Introduction to NoSQL & Document Databases (3 lessons)
    {
      moduleNumber: 1,
      title: {
        en: 'Module 1 — Introduction to NoSQL & Document Databases',
        km: 'មេរៀនទី ១ — ការណែនាំអំពី NoSQL & Document Databases'
      },
      description: {
        en: 'Understand what NoSQL means, install MongoDB and mongosh, and master core document vocabulary.',
        km: 'យល់ដឹងពីអត្ថន័យ NoSQL, ដំឡើង MongoDB & mongosh, និងស្ទាត់ជំនាញពាក្យបច្ចេកទេស Document គ្រឹះ។'
      },
      lessons: [
        {
          id: 'mg-1-1',
          slug: 'what-nosql-means-where-document-databases-fit',
          moduleNumber: 1,
          lessonNumberInModule: 1,
          title: {
            en: '1.1 What "NoSQL" means, and where document databases fit among the NoSQL family',
            km: '១.១ អត្ថន័យ NoSQL និងទីតាំងរបស់ Document Database ក្នុងអម្បូរ NoSQL'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Explain what a document database is and when it\'s a better fit than a relational database.',
            km: 'ពន្យល់ពីអ្វីជា Document Database និងពេលណាដែលវាជាជម្រើសល្អជាង Relational Database។'
          },
          explanation: {
            en: '"NoSQL" is an umbrella term for databases that don\'t use the rigid, table-based relational model — it covers several different styles, including document databases (MongoDB), key-value stores, and graph databases. A document database stores each record as a document — a JSON-like structure that can contain nested objects and arrays directly, without needing a separate table and a join to represent them. This maps naturally onto data that\'s already nested in your application code (like a blog post with its comments attached), and it also makes it easier to scale a database horizontally across many servers, since related data often lives together in one document instead of being scattered across tables. The trade-off is that MongoDB doesn\'t enforce a rigid schema by default and doesn\'t have the same native support for complex multi-table joins that a relational database does — which is exactly why understanding both models, and choosing the right one for a given problem, is the real skill this course builds.',
            km: '"NoSQL" ជាពាក្យទូទៅសម្រាប់មូលដ្ឋានទិន្នន័យដែលមិនប្រើគំរូទាក់ទងផ្អែកលើតារាងតឹងរឹង — វាគ្របដណ្តប់លើរចនាប័ទ្មផ្សេងៗគ្នាជាច្រើន រួមទាំងមូលដ្ឋានទិន្នន័យឯកសារ (MongoDB), key-value stores, និង graph databases។ មូលដ្ឋានទិន្នន័យឯកសាររក្សាទុកកំណត់ត្រានីមួយៗជា ឯកសារ (document) — រចនាសម្ព័ន្ធស្រដៀង JSON ដែលអាចមាន objects និង arrays ដែលបានដាក់ជាន់គ្នាដោយផ្ទាល់ ដោយមិនចាំបាច់មានតារាងដាច់ដោយឡែក និង join ដើម្បីតំណាងឱ្យវា។ វាតភ្ជាប់ដោយធម្មជាតិទៅនឹងទិន្នន័យដែលបានជាន់គ្នារួចហើយក្នុងកូដកម្មវិធីរបស់អ្នក (ដូចជាការបង្ហោះប្លុកជាមួយមតិយោបល់ភ្ជាប់) ហើយវាក៏ធ្វើឱ្យវាងាយស្រួលក្នុងការពង្រីកមូលដ្ឋានទិន្នន័យផ្តេកលើ server ជាច្រើន ចាប់តាំងពីទិន្នន័យទាក់ទងគ្នាច្រើនតែរស់នៅជាមួយគ្នាក្នុងឯកសារមួយ ជំនួសឱ្យការខ្ចាត់ខ្ចាយពាសពេញតារាង។ ការដោះដូរគឺថា MongoDB មិនបង្ខំ schema តឹងរឹងតាមលំនាំដើមទេ ហើយមិនមានការគាំទ្រដើមកំណើតដូចគ្នាសម្រាប់ joins ច្រើនតារាងស្មុគស្មាញដូចមូលដ្ឋានទិន្នន័យទាក់ទង — នេះហើយជាមូលហេតុពិតប្រាកដដែលការយល់ដឹងគំរូទាំងពីរ និងជ្រើសរើសមួយដែលត្រឹមត្រូវសម្រាប់បញ្ហាជាក់លាក់ គឺជាជំនាញពិតប្រាកដដែលវគ្គសិក្សានេះកសាង។'
          },
          starterCode: {
            language: 'javascript',
            code: `// A single document in a "posts" collection — nested data, no join required
{
  "_id": ObjectId("64f1a2b3c4d5e6f7a8b9c0d1"),
  "title": "Getting started with MongoDB",
  "author": "Sophea",
  "tags": ["databases", "nosql", "backend"],
  "comments": [
    { "user": "Dara", "text": "Great intro!" },
    { "user": "Rithy", "text": "Very clear, thanks." }
  ]
}`
          },
          practiceExercise: {
            question: {
              en: 'Sketch how this same post-with-comments data would need to be split across tables in a relational database, and compare that shape to the single document above.',
              km: 'គូរ/សរសេរពីរបៀបដែលទិន្នន័យ Post ជាមួយ Comments ដូចគ្នានេះ ត្រូវបំបែកតាម Table ក្នុង Relational Database និងប្រៀបធៀបទម្រង់របស់វាទៅកាន់ Document ខាងលើ។'
            },
            solution: `In SQL: Needs 2 tables (posts, comments) linked via posts.id = comments.post_id and an INNER JOIN query to combine.\nIn MongoDB: A single document in the posts collection contains both the post and its embedded comments array.`
          },
          tips: {
            en: 'Assuming NoSQL means "no schema at all, no rules" is a common mistake — MongoDB documents in the same collection should still usually follow a consistent, intentional shape; the flexibility is a design tool, not a license to skip data modeling entirely.',
            km: 'ការគិតថា NoSQL មានន័យថា "គ្មាន Schema សោះ គ្មានច្បាប់ទម្លាប់" គឺជាកំហុសទូទៅ — Documents ក្នុង Collection តែមួយគួរតែអនុវត្តតាមទម្រង់ច្បាស់លាស់ និងមានបំណង។'
          }
        },
        {
          id: 'mg-1-2',
          slug: 'installing-mongodb-connecting-mongosh',
          moduleNumber: 1,
          lessonNumberInModule: 2,
          title: {
            en: '1.2 Installing MongoDB and connecting with mongosh',
            km: '១.២ ការដំឡើង MongoDB និងការភ្ជាប់ជាមួយ mongosh'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Set up MongoDB locally or via cloud cluster, connect with mongosh shell, and run ping diagnostic.',
            km: 'ដំឡើង MongoDB ក្នុងម៉ាស៊ីន ឬ Atlas Cloud, ភ្ជាប់ជាមួយ mongosh shell និងរត់ ping diagnostic។'
          },
          explanation: {
            en: 'mongosh is the modern interactive command-line interface for MongoDB. It allows developers to run diagnostic checks, inspect database statistics, manage security, and execute administrative commands directly on local or cloud-hosted instances.',
            km: 'mongosh គឺជា Command-line Interface អន្តរកម្មទំនើបសម្រាប់ MongoDB។ វាអនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍រត់ការពិនិត្យដេប៉ូ, ពិនិត្យមើលសถិតិ database, គ្រប់គ្រងសុវត្ថិភាព និងរត់ពាក្យបញ្ជា administrative ដោយផ្ទាល់។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Ping MongoDB to test connectivity
db.runCommand({ ping: 1 });`
          }
        },
        {
          id: 'mg-1-3',
          slug: 'documents-collections-databases-basic-vocabulary',
          moduleNumber: 1,
          lessonNumberInModule: 3,
          title: {
            en: '1.3 Documents, collections, and databases — the basic vocabulary',
            km: '១.៣ Documents, Collections, និង Databases — ពាក្យបច្ចេកទេសគ្រឹះ'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Understand BSON documents, collections vs tables, ObjectIds, and database structure in MongoDB.',
            km: 'យល់ដឹងពី BSON Documents, Collections ធៀបនឹង Tables, ObjectIds, និងរចនាសម្ព័ន្ធ Database ក្នុង MongoDB។'
          },
          explanation: {
            en: 'MongoDB organizes data hierarchically: Databases contain Collections, and Collections hold Documents (BSON objects). Each document automatically receives a unique 12-byte _id ObjectId if not provided manually.',
            km: 'MongoDB រៀបចំទិន្នន័យតាមលំដាប់ថ្នាក់៖ Databases ផ្ទុក Collections, ហើយ Collections ផ្ទុក Documents (BSON Objects)។ Document នីមួយៗទទួលបាន 12-byte _id ObjectId ដោយស្វ័យប្រវត្តិ។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Inspect current database and collection stats
db.stats();
show collections;`
          }
        }
      ]
    },

    // Module 2 — Basic CRUD Operations (5 lessons)
    {
      moduleNumber: 2,
      title: {
        en: 'Module 2 — Basic CRUD Operations',
        km: 'មេរៀនទី ២ — ប្រតិបត្តិការ CRUD មូលដ្ឋាន'
      },
      description: {
        en: 'Master inserting, finding, updating, and deleting documents using native mongosh commands.',
        km: 'ស្ទាត់ជំនាញការបញ្ជូល (Insert) ការស្វែងរក (Find) ការកែប្រែ (Update) និងការលុប (Delete) Documents ដោយប្រើ mongosh។'
      },
      lessons: [
        {
          id: 'mg-2-1',
          slug: 'inserting-documents-insertone-insertmany',
          moduleNumber: 2,
          lessonNumberInModule: 1,
          title: {
            en: '2.1 Inserting documents: insertOne and insertMany',
            km: '២.១ ការបញ្ជូល Document៖ insertOne និង insertMany'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Insert single and multiple JSON documents into collections and observe auto-generated _id ObjectIds.',
            km: 'បញ្ជូល JSON Document មួយ ឬច្រើនចូលក្នុង collection និងសង្កេតមើល auto-generated _id ObjectIds។'
          },
          explanation: {
            en: 'insertOne() inserts a single BSON document into a specified collection, while insertMany() inserts an array of documents in a single server network round-trip for high throughput.',
            km: 'insertOne() បញ្ចូល document តែមួយចូលក្នុង collection, ឯ insertMany() បញ្ចូល array នៃ documents ក្នុងពេលតែមួយដើម្បីបង្កើនល្បឿន និងប្រសិទ្ធភាព។'
          },
          starterCode: {
            language: 'javascript',
            code: `db.products.insertOne({
  name: "Wireless Mouse",
  price: 25.99,
  category: "Electronics",
  inStock: true
});`
          }
        },
        {
          id: 'mg-2-2',
          slug: 'reading-documents-find-and-findone',
          moduleNumber: 2,
          lessonNumberInModule: 2,
          title: {
            en: '2.2 Reading documents: find and findOne',
            km: '២.២ ការអាន Document៖ find និង findOne'
          },
          durationMinutes: 22,
          difficulty: 'Beginner',
          objective: {
            en: 'Retrieve documents from a MongoDB collection using find and findOne with basic query filters.',
            km: 'ទាញយក documents ពី MongoDB collection ដោយប្រើ find និង findOne ជាមួយ filter មូលដ្ឋាន។'
          },
          explanation: {
            en: 'db.collection.find(filter) returns every document in a collection that matches the given filter (or every document, if the filter is empty), while findOne(filter) returns just the single first matching document — useful when you expect (or only need) one result, like looking up a user by a unique email. The filter itself is written as a document describing what you\'re looking for, which is why MongoDB\'s query language feels so close to the data it\'s querying.',
            km: 'db.collection.find(filter) បញ្ជូនត្រឡប់គ្រប់ document ក្នុង collection ដែលត្រូវគ្នានឹង filter (ឬគ្រប់ document ប្រសិនបើ filter ទទេ) ចំណែក findOne(filter) បញ្ជូនត្រឡប់តែ document ដំបូងគេបង្អស់ — មានប្រយោជន៍ពេលអ្នករំពឹងទុកលទ្ធផលតែមួយ ដូចជាការស្វែងរក user តាម email។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Insert a few sample documents first
db.products.insertMany([
  { name: "Notebook", price: 3.5, category: "Stationery" },
  { name: "Laptop", price: 899, category: "Electronics" },
  { name: "Desk Lamp", price: 22, category: "Home" }
]);

// Find all products in the "Electronics" category
db.products.find({ category: "Electronics" });

// Find just one product with a given name
db.products.findOne({ name: "Notebook" });`
          },
          practiceExercise: {
            question: {
              en: 'Write a query that finds all products with a price greater than 20.',
              km: 'សរសេរ query ដើម្បីស្វែងរកផលិតផលទាំងអស់ដែលមានតម្លៃ (price) ធំជាង 20។'
            },
            solution: `db.products.find({ price: { $gt: 20 } });`
          },
          tips: {
            en: 'Expecting find() to return a plain array directly in the shell is a common misunderstanding — it actually returns a cursor; in application code (like Node.js), call .toArray() on it to get an actual array.',
            km: 'ការរំពឹងថា find() បញ្ជូន array ផ្ទាល់ក្នុង shell គឺជាការយល់ច្រឡំ — វាបញ្ជូន cursor។ ក្នុង App Code (Node.js) អ្នកត្រូវតែហៅ .toArray() ដើម្បីទទួលបាន Array ពិតប្រាកដ។'
          }
        },
        {
          id: 'mg-2-3',
          slug: 'updating-documents-updateone-updatemany-update-operators',
          moduleNumber: 2,
          lessonNumberInModule: 3,
          title: {
            en: '2.3 Updating documents: updateOne, updateMany, and update operators ($set, $inc)',
            km: '២.៣ ការកែប្រែ Document៖ updateOne, updateMany និង update operators ($set, $inc)'
          },
          durationMinutes: 22,
          difficulty: 'Beginner',
          objective: {
            en: 'Perform atomic updates using update operators $set, $inc, $push, and $unset without overwriting entire documents.',
            km: 'ធ្វើការ កែប្រែទិន្នន័យ atomic ដោយប្រើ operators $set, $inc, $push, និង $unset ដោយមិនបាត់បង់ field ផ្សេងទៀត។'
          },
          starterCode: {
            language: 'javascript',
            code: `db.products.updateOne(
  { name: "Laptop" },
  { 
    $set: { price: 849.99 },
    $inc: { stockCount: -1 }
  }
);`
          }
        },
        {
          id: 'mg-2-4',
          slug: 'deleting-documents-deleteone-deletemany',
          moduleNumber: 2,
          lessonNumberInModule: 4,
          title: {
            en: '2.4 Deleting documents: deleteOne and deleteMany',
            km: '២.៤ ការលុប Document៖ deleteOne និង deleteMany'
          },
          durationMinutes: 18,
          difficulty: 'Beginner',
          objective: {
            en: 'Remove unwanted records safely using deleteOne for single items and deleteMany for conditional batch removal.',
            km: 'លុបកំណត់ត្រាដោយសុវត្ថិភាពដោយប្រើ deleteOne សម្រាប់ឯកសារទោល និង deleteMany សម្រាប់លុបជាក្រុមតាមលក្ខខណ្ឌ។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Delete single item
db.products.deleteOne({ _id: ObjectId("64f123...") });

// Delete items out of stock
db.products.deleteMany({ stockCount: 0 });`
          }
        },
        {
          id: 'mg-2-5',
          slug: 'practice-build-products-collection-crud',
          moduleNumber: 2,
          lessonNumberInModule: 5,
          title: {
            en: '2.5 Practice: build a small products collection and perform all four CRUD operations',
            km: '២.៥ អនុវត្ត៖ បង្កើត products collection និងអនុវត្ត CRUD ទាំង ៤ ដំណាក់កាល'
          },
          durationMinutes: 25,
          difficulty: 'Beginner',
          objective: {
            en: 'Combine insert, find, update, and delete in a practical sequential workflow.',
            km: 'បូកផ្សំ insert, find, update, និង delete ក្នុងលំហាត់អនុវត្តជាក់ស្តែងជាជហាន។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Complete CRUD flow test script
db.products.insertOne({ name: "Desk Chair", price: 120, category: "Furniture" });
db.products.find({ category: "Furniture" });
db.products.updateOne({ name: "Desk Chair" }, { $set: { price: 99 } });
db.products.deleteOne({ name: "Desk Chair" });`
          }
        }
      ]
    },

    // Module 3 — Querying in Depth (5 lessons)
    {
      moduleNumber: 3,
      title: {
        en: 'Module 3 — Querying in Depth',
        km: 'មេរៀនទី ៣ — ការសាកសួរទិន្នន័យស៊ីជម្រៅ (Querying in Depth)'
      },
      description: {
        en: 'Master MongoDB query operators ($gt, $in, $and, $or), array element matching, and field projections.',
        km: 'ស្ទាត់ជំនាញ Query Operators ($gt, $in, $and, $or), ការស្វែងរកក្នុង Array, និង Projections។'
      },
      lessons: [
        {
          id: 'mg-3-1',
          slug: 'comparison-operators-gt-lt-gte-lte-ne',
          moduleNumber: 3,
          lessonNumberInModule: 1,
          title: {
            en: '3.1 Comparison operators: $gt, $lt, $gte, $lte, $ne',
            km: '៣.១ Comparison operators៖ $gt, $lt, $gte, $lte, $ne'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Filter documents based on numeric range comparisons and inequality conditions.',
            km: 'ត្រង documents ផ្អែកលើការប្រៀបធៀបចន្លោះលេខ និងលក្ខខណ្ឌមិនស្មើ។'
          },
          starterCode: {
            language: 'javascript',
            code: `db.products.find({
  price: { $gte: 50, $lte: 200 },
  status: { $ne: "DISCONTINUED" }
});`
          }
        },
        {
          id: 'mg-3-2',
          slug: 'logical-operators-and-or-in-nin',
          moduleNumber: 3,
          lessonNumberInModule: 2,
          title: {
            en: '3.2 Logical operators: $and, $or, $in, $nin',
            km: '៣.២ Logical operators៖ $and, $or, $in, $nin'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Construct multi-condition queries using $or clauses and set inclusion $in / $nin checks.',
            km: 'បង្កើត multi-condition queries ដោយប្រើ $or clauses និងការពិនិត្យសមាជិកភាព $in / $nin។'
          },
          starterCode: {
            language: 'javascript',
            code: `db.products.find({
  $or: [
    { category: { $in: ["Electronics", "Computers"] } },
    { price: { $lt: 15 } }
  ]
});`
          }
        },
        {
          id: 'mg-3-3',
          slug: 'querying-nested-fields-and-arrays',
          moduleNumber: 3,
          lessonNumberInModule: 3,
          title: {
            en: '3.3 Querying nested fields and arrays',
            km: '៣.៣ ការសាកសួរទិន្នន័យលើ Nested Fields និង Arrays'
          },
          durationMinutes: 24,
          difficulty: 'Intermediate',
          objective: {
            en: 'Query embedded sub-documents using dot notation ("address.city") and match array elements with $elemMatch.',
            km: 'Query លើ nested sub-documents ដោយប្រើ dot notation ("address.city") និង $elemMatch លើ arrays។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Query using dot notation and array match
db.users.find({ "address.city": "Phnom Penh" });
db.posts.find({ tags: { $in: ["mongodb", "backend"] } });`
          }
        },
        {
          id: 'mg-3-4',
          slug: 'projections-returning-only-the-fields-you-need',
          moduleNumber: 3,
          lessonNumberInModule: 4,
          title: {
            en: '3.4 Projections — returning only the fields you need',
            km: '៣.៤ Projections — ការជ្រើសរើសតែ Fields ដែលត្រូវការ'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Optimize payload size by explicitly including (1) or excluding (0) specific output fields.',
            km: 'កាត់បន្ថយទំហំទិន្នន័យបញ្ជូនដោយកំណត់បង្ហាញ (1) ឬលាក់ (0) លើ field ជាក់លាក់។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Return only title and price fields, suppressing default _id
db.products.find(
  { category: "Electronics" },
  { title: 1, price: 1, _id: 0 }
);`
          }
        },
        {
          id: 'mg-3-5',
          slug: 'practice-write-five-queries-sample-dataset',
          moduleNumber: 3,
          lessonNumberInModule: 5,
          title: {
            en: '3.5 Practice: write five queries of increasing complexity against a sample dataset',
            km: '៣.៥ អនុវត្ត៖ សរសេរ ៥ Query ដែលមានកម្រិតលំបាកកើនឡើងលើទិន្នន័យគំរូ'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Apply dot-notation, comparison, logical $or, and projections in a multi-part query exercise.',
            km: 'អនុវត្ត dot-notation, comparison, logical $or, និង projections ក្នុងលំហាត់អនុវត្ត។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Challenge: Find items with rating >= 4.5 or tagged "featured" with price < 100
db.products.find({
  $or: [
    { "metrics.rating": { $gte: 4.5 } },
    { tags: "featured" }
  ],
  price: { $lt: 100 }
}, { name: 1, price: 1, "metrics.rating": 1 });`
          }
        }
      ]
    },

    // Module 4 — Data Modeling: Embedding vs Referencing (5 lessons)
    {
      moduleNumber: 4,
      title: {
        en: 'Module 4 — Data Modeling: Embedding vs Referencing',
        km: 'មេរៀនទី ៤ — ការរចនាទិន្នន័យ៖ Embedding ធៀបនឹង Referencing'
      },
      description: {
        en: 'Learn when to embed sub-documents versus referencing ObjectIds across separate collections based on access patterns.',
        km: 'រៀនពីពេលវេលាត្រូវប្រើ Embedding ធៀបនឹង Referencing ផ្អែកលើ Access Patterns នៃកម្មវិធី។'
      },
      lessons: [
        {
          id: 'mg-4-1',
          slug: 'why-mongodb-schema-design-is-a-deliberate-choice',
          moduleNumber: 4,
          lessonNumberInModule: 1,
          title: {
            en: '4.1 Why MongoDB schema design is a deliberate choice, not an afterthought',
            km: '៤.១ ហេតុអ្វីការរចនា Schema ក្នុង MongoDB គឺជាការសម្រេចចិត្តច្បាស់លាស់ មិនមែនធ្វើតាមតែប្រទះ'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand how application query access patterns dictate document schema structure in MongoDB.',
            km: 'យល់ដឹងពីរបៀបដែល App Query Access Patterns ជាអ្នកកំណត់រចនាសម្ព័ន្ធ Document Schema ក្នុង MongoDB។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Rule of thumb: Design for queries, not for tables
// Consider: How frequently are parent and child queried together?`
          }
        },
        {
          id: 'mg-4-2',
          slug: 'embedding-related-data-in-a-single-document',
          moduleNumber: 4,
          lessonNumberInModule: 2,
          title: {
            en: '4.2 Embedding related data in a single document',
            km: '៤.២ ការបង្កប់ (Embedding) ទិន្នន័យទាក់ទងក្នុង Document តែមួយ'
          },
          durationMinutes: 24,
          difficulty: 'Intermediate',
          objective: {
            en: 'Decide when to embed related data directly inside a document and implement bounded array sub-documents.',
            km: 'សម្រេចចិត្តពេលណាត្រូវបង្កប់ទិន្នន័យក្នុង Document តែមួយ និងអនុវត្ត Bounded Array Sub-documents។'
          },
          explanation: {
            en: 'Embedding means storing related data as a nested object or array directly inside the parent document, instead of in a separate collection. It\'s a good fit when the embedded data is almost always read together with its parent, doesn\'t grow unboundedly, and isn\'t independently queried very often — comments on a short blog post, or the line items on an order, are classic examples. The benefit is that a single find() gets you everything you need in one read, with no join required at all.',
            km: 'Embedding មានន័យថារក្សាទុកទិន្នន័យទាក់ទងជា nested object ឬ array ដោយផ្ទាល់ក្នុង parent document ជំនួសឱ្យការបំបែក collection។ វាសមស្របពេលទិន្នន័យត្រូវបានអានជាមួយ parent ជានិច្ច មានចំនួនកំណត់ និងមិនត្រូវគេ query ដាច់ដោយឡែកញឹកញាប់។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Embedding comments directly inside a blog post document
db.posts.insertOne({
  title: "Why we chose MongoDB",
  author: "Sophea",
  comments: [
    { user: "Dara", text: "Interesting decision!", postedAt: new Date() },
    { user: "Rithy", text: "How did performance compare?", postedAt: new Date() }
  ]
});

// Adding a new comment to an existing post
db.posts.updateOne(
  { title: "Why we chose MongoDB" },
  { $push: { comments: { user: "Sokha", text: "Nice writeup!", postedAt: new Date() } } }
);`
          },
          practiceExercise: {
            question: {
              en: 'Write a query that finds all posts containing a comment from the user "Rithy".',
              km: 'សរសេរ query ដើម្បីស្វែងរក posts ទាំងអស់ដែលមានមតិយោបល់ពី user ឈ្មោះ "Rithy"។'
            },
            solution: `db.posts.find({ "comments.user": "Rithy" });`
          },
          tips: {
            en: 'Embedding data that grows unbounded over time (like comments on a viral post that could receive tens of thousands of replies) causes documents to exceed MongoDB\'s 16MB document limit.',
            km: 'ការបង្កប់ទិន្នន័យដែលកើនឡើងគ្មានទីបញ្ចប់អាចធ្វើឱ្យ Document លើសពីទំហំកំណត់ 16MB របស់ MongoDB។'
          }
        },
        {
          id: 'mg-4-3',
          slug: 'referencing-related-data-across-documents',
          moduleNumber: 4,
          lessonNumberInModule: 3,
          title: {
            en: '4.3 Referencing related data across documents (MongoDB\'s version of a foreign key)',
            km: '៤.៣ ការយោង (Referencing) ទិន្នន័យឆ្លង Collections (ទម្រង់ Foreign Key ក្នុង MongoDB)'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Model 1-to-N unbounded relationships by storing ObjectId references in separate collections.',
            km: 'រចនាទំនាក់ទំនង 1-to-N ដែលកើនឡើងធំដោយរក្សាទុក ObjectId references ក្នុង collections ដាច់ដោយឡែក។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Users collection
db.users.insertOne({ _id: ObjectId("64f100000000000000000001"), name: "Sophea" });

// Orders referencing user ID
db.orders.insertOne({
  userId: ObjectId("64f100000000000000000001"),
  totalAmount: 149.50,
  createdAt: new Date()
});`
          }
        },
        {
          id: 'mg-4-4',
          slug: 'choosing-between-embedding-and-referencing-access-patterns',
          moduleNumber: 4,
          lessonNumberInModule: 4,
          title: {
            en: '4.4 Choosing between embedding and referencing based on access patterns',
            km: '៤.៤ ការជ្រើសរើសរវាង Embedding និង Referencing ផ្អែកលើ Access Patterns'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Apply decision rules: 1-to-Few (Embed), 1-to-Many (Reference), 1-to-Squillions (Parent-Reference).',
            km: 'អនុវត្តវិធាន៖ 1-to-Few (Embed), 1-to-Many (Reference), 1-to-Squillions (Parent-Reference)។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Decision matrix check:
// 1. Is data read together 90%+ of time? -> Embed
// 2. Can array grow beyond 1,000 items? -> Reference`
          }
        },
        {
          id: 'mg-4-5',
          slug: 'practice-model-blog-dataset-two-ways-compare',
          moduleNumber: 4,
          lessonNumberInModule: 5,
          title: {
            en: '4.5 Practice: model a blog dataset two ways (embedded comments vs referenced comments) and compare',
            km: '៤.៥ អនុវត្ត៖ រចនាប្រព័ន្ធ Blog ពីររបៀប (Embedded Comments ធៀបនឹង Referenced Comments) និងប្រៀបធៀប'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Compare document size, read complexity, and update performance between embedded and referenced schemas.',
            km: 'ប្រៀបធៀបទំហំ document, ភាពស្មុគស្មាញនៃការអាន និងប្រសិទ្ធភាព update រវាង embedded និង referenced schemas។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Model A (Embedded): single document query
db.posts.find({ _id: postId });

// Model B (Referenced): requires 2 queries or $lookup
db.comments.find({ postId: postId });`
          }
        }
      ]
    },

    // Module 5 — The Aggregation Framework (5 lessons)
    {
      moduleNumber: 5,
      title: {
        en: 'Module 5 — The Aggregation Framework',
        km: 'មេរៀនទី ៥ — Aggregation Framework'
      },
      description: {
        en: 'Build powerful multi-stage analytics pipelines using $match, $group, $sort, $project, and $lookup.',
        km: 'សាងល្បឿន Analytics Pipelines ជាន់ខ្ពស់ដោយប្រើ $match, $group, $sort, $project, និង $lookup។'
      },
      lessons: [
        {
          id: 'mg-5-1',
          slug: 'what-aggregation-pipeline-is-stages-chain',
          moduleNumber: 5,
          lessonNumberInModule: 1,
          title: {
            en: '5.1 What an aggregation pipeline is, and how stages chain together',
            km: '៥.១ អ្វីជា Aggregation Pipeline និងរបៀបដែល Stages តភ្ជាប់គ្នាជាបន្តបន្ទាប់'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand pipeline architecture: passing collection documents through sequential transformation stages.',
            km: 'យល់ដឹងពីស្ថាបត្យកម្ម Pipeline៖ ការបញ្ជូន documents តាមដំណាក់កាលបម្លែងទិន្នន័យជាបន្តបន្ទាប់។'
          },
          starterCode: {
            language: 'javascript',
            code: `db.orders.aggregate([
  { $match: { status: "DELIVERED" } },
  { $project: { amount: 1, customerId: 1 } }
]);`
          }
        },
        {
          id: 'mg-5-2',
          slug: 'match-and-sort-filtering-ordering-in-pipeline',
          moduleNumber: 5,
          lessonNumberInModule: 2,
          title: {
            en: '5.2 $match and $sort — filtering and ordering within a pipeline',
            km: '៥.២ $match និង $sort — ការត្រង និងតម្រៀបទិន្នន័យក្នុង Pipeline'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Filter early with $match to leverage indexes, then order results using $sort inside pipeline streams.',
            km: 'ត្រងទិន្នន័យដំបូងជាមួយ $match ដើម្បីប្រើប្រាស់ index រួចតម្រៀបលទ្ធផលដោយប្រើ $sort។'
          },
          starterCode: {
            language: 'javascript',
            code: `db.posts.aggregate([
  { $match: { isPublished: true, views: { $gt: 100 } } },
  { $sort: { views: -1 } }
]);`
          }
        },
        {
          id: 'mg-5-3',
          slug: 'group-computing-totals-counts-averages-per-group',
          moduleNumber: 5,
          lessonNumberInModule: 3,
          title: {
            en: '5.3 $group — computing totals, counts, and averages per group',
            km: '៥.៣ $group — ការគណនាផលបូក ចំនួន និងតម្លៃមធ្យមតាមក្រុម'
          },
          durationMinutes: 24,
          difficulty: 'Intermediate',
          objective: {
            en: 'Use the $group aggregation stage to compute per-category totals, counts, and averages.',
            km: 'ប្រើប្រាស់ $group stage ដើម្បីគណនាផលបូកសរុប ចំនួន និងតម្លៃមធ្យមតាមប្រភេទនិមួយៗ។'
          },
          explanation: {
            en: 'An aggregation pipeline processes documents through a sequence of stages, each one transforming the data before passing it to the next. $group is the stage that groups documents by a shared field (specified as _id inside the stage) and computes an aggregate value for each group — using accumulator operators like $sum, $avg, $min, and $max — very similar in spirit to GROUP BY with aggregate functions in SQL.',
            km: '$group ជាដំណាក់កាលដែលប្រមូលផ្តុំ documents តាម field រួមគ្នា (កំណត់ជា _id) ហើយគណនាតម្លៃ aggregate ដោយប្រើ $sum, $avg, $min, និង $max — ដូចគ្នាទៅនឹង GROUP BY ក្នុង SQL។'
          },
          starterCode: {
            language: 'javascript',
            code: `db.products.aggregate([
  { $match: { category: { $ne: null } } },
  {
    $group: {
      _id: "$category",
      totalProducts: { $sum: 1 },
      averagePrice: { $avg: "$price" }
    }
  },
  { $sort: { totalProducts: -1 } }
]);`
          },
          practiceExercise: {
            question: {
              en: 'Extend the pipeline above to also include the maxPrice (highest price) within each category.',
              km: 'ពង្រីក pipeline ខាងលើដោយបន្ថែម maxPrice (តម្លៃថ្លៃបំផុត) ក្នុងប្រភេទនីមួយៗ។'
            },
            solution: `db.products.aggregate([\n  { $match: { category: { $ne: null } } },\n  {\n    $group: {\n      _id: "$category",\n      totalProducts: { $sum: 1 },\n      averagePrice: { $avg: "$price" },\n      maxPrice: { $max: "$price" }\n    }\n  },\n  { $sort: { totalProducts: -1 } }\n]);`
          },
          tips: {
            en: 'Forgetting that $group\'s _id field is what you\'re grouping by (not the document\'s original _id) is a common beginner pitfall.',
            km: 'ការភ្លេចថា _id ក្នុង $group គឺជា grouping key (មិនមែន _id ដើមរបស់ document) គឺជាកំហុសទូទៅ។'
          }
        },
        {
          id: 'mg-5-4',
          slug: 'project-reshaping-documents-in-the-pipeline',
          moduleNumber: 5,
          lessonNumberInModule: 4,
          title: {
            en: '5.4 $project — reshaping documents in the pipeline',
            km: '៥.៤ $project — ការរៀបចំទម្រង់ Document ឡើងវិញក្នុង Pipeline'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Add calculated fields, convert field names, and format output documents using $project and expression operators.',
            km: 'បន្ថែម field គណនា ផ្លាស់ប្តូរឈ្មោះ field និងរៀបចំទម្រង់ output documents ដោយប្រើ $project។'
          },
          starterCode: {
            language: 'javascript',
            code: `db.orders.aggregate([
  {
    $project: {
      orderId: "$_id",
      totalWithTax: { $multiply: ["$amount", 1.1] },
      formattedDate: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }
    }
  }
]);`
          }
        },
        {
          id: 'mg-5-5',
          slug: 'practice-pipeline-reports-total-sales-per-category',
          moduleNumber: 5,
          lessonNumberInModule: 5,
          title: {
            en: '5.5 Practice: build a pipeline that reports total sales per category',
            km: '៥.៥ អនុវត្ត៖ សាង Pipeline ដើម្បីបង្កើតរបាយការណ៍លក់សរុបតាមប្រភេទផលិតផល'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Combine $match, $group, $project, and $sort into an analytical sales reporting pipeline.',
            km: 'បូកផ្សំ $match, $group, $project, និង $sort ទៅជារបាយការណ៍វិភាគការលក់ពេញលេញ។'
          },
          starterCode: {
            language: 'javascript',
            code: `db.sales.aggregate([
  { $match: { status: "COMPLETED" } },
  { $group: { _id: "$category", netRevenue: { $sum: "$price" }, itemsSold: { $sum: "$quantity" } } },
  { $sort: { netRevenue: -1 } }
]);`
          }
        }
      ]
    },

    // Module 6 — Indexes & Performance (3 lessons)
    {
      moduleNumber: 6,
      title: {
        en: 'Module 6 — Indexes & Performance',
        km: 'មេរៀនទី ៦ — Indexes & ដំណើរការ (Performance)'
      },
      description: {
        en: 'Speed up query read performance using single-field and compound indexes, and analyze execution plans with .explain().',
        km: 'បង្កើនល្បឿនអានទិន្នន័យដោយប្រើ Single-field និង Compound Indexes ព្រមទាំងពិនិត្យ Execution Plans ជាមួយ .explain()។'
      },
      lessons: [
        {
          id: 'mg-6-1',
          slug: 'what-index-is-mongodb-default-id-index',
          moduleNumber: 6,
          lessonNumberInModule: 1,
          title: {
            en: '6.1 What an index is in MongoDB, and the default _id index',
            km: '៦.១ អ្វីជា Index ក្នុង MongoDB និង default _id index'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand B-tree indexes, default unique _id index, and why full collection scans (COLLSCAN) impair speed.',
            km: 'យល់ដឹងពី B-tree indexes, default unique _id index និងមូលហេតុដែល full collection scan (COLLSCAN) ធ្វើឱ្យយឺត។'
          },
          starterCode: {
            language: 'javascript',
            code: `// View existing indexes on a collection
db.products.getIndexes();`
          }
        },
        {
          id: 'mg-6-2',
          slug: 'creating-single-field-and-compound-indexes',
          moduleNumber: 6,
          lessonNumberInModule: 2,
          title: {
            en: '6.2 Creating single-field and compound indexes',
            km: '៦.២ ការបង្កើត Single-field និង Compound Indexes'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Create compound indexes supporting equality filtering and range sorting following the ESR (Equality, Sort, Range) rule.',
            km: 'បង្កើត Compound Indexes គាំទ្រការ Filter និង Sort តាមវិធាន ESR (Equality, Sort, Range)។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Compound index on category (ascending) and price (descending)
db.products.createIndex({ category: 1, price: -1 });`
          }
        },
        {
          id: 'mg-6-3',
          slug: 'practice-explain-executionstats-compare-query-performance',
          moduleNumber: 6,
          lessonNumberInModule: 3,
          title: {
            en: '6.3 Practice: use .explain("executionStats") to compare a query before and after adding an index',
            km: '៦.៣ អនុវត្ត៖ ប្រើប្រាស់ .explain("executionStats") ដើម្បីប្រៀបធៀបល្បឿន Query មុន និងក្រោយពេលមាន Index'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Compare execution time (executionTimeMillis) and total keys examined versus documents scanned.',
            km: 'ប្រៀបធៀបរយះពេលដំណើរការ (executionTimeMillis) និងចំនួន keys/documents ដែលបានពិនិត្យ។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Compare query plans
db.products.find({ category: "Electronics" }).sort({ price: -1 }).explain("executionStats");`
          }
        }
      ]
    },

    // Module 7 — Connecting from Application Code (2 lessons)
    {
      moduleNumber: 7,
      title: {
        en: 'Module 7 — Connecting from Application Code',
        km: 'មេរៀនទី ៧ — ការភ្ជាប់ពីកូដកម្មវិធី (Application Code)'
      },
      description: {
        en: 'Connect to MongoDB from Node.js using official MongoClient driver and Mongoose ODM models.',
        km: 'ភ្ជាប់ទៅកាន់ MongoDB ពី Node.js ដោយប្រើប្រាស់ផ្លូវការ MongoClient driver និង Mongoose ODM models។'
      },
      lessons: [
        {
          id: 'mg-7-1',
          slug: 'connecting-to-mongodb-nodejs-official-driver',
          moduleNumber: 7,
          lessonNumberInModule: 1,
          title: {
            en: '7.1 Connecting to MongoDB from Node.js using the official driver',
            km: '៧.១ ការភ្ជាប់ទៅកាន់ MongoDB ពី Node.js ដោយប្រើប្រាស់ Native Driver'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Instantiate MongoClient, manage connection pools, and query collection cursors in Node.js backend code.',
            km: 'បង្កើត MongoClient, គ្រប់គ្រង connection pools និង query cursors ក្នុង Node.js Backend Code។'
          },
          starterCode: {
            language: 'javascript',
            code: `import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI || 'mongodb://localhost:27017');
await client.connect();
const db = client.db('my_app');
const products = await db.collection('products').find({ price: { $gt: 50 } }).toArray();`
          }
        },
        {
          id: 'mg-7-2',
          slug: 'higher-level-alternative-schema-modeling-mongoose',
          moduleNumber: 7,
          lessonNumberInModule: 2,
          title: {
            en: '7.2 A higher-level alternative: schema-based modeling with Mongoose',
            km: '៧.២ ជម្រើសកម្រិតខ្ពស់៖ ការប្រើប្រាស់ Schema Modeling ជាមួយ Mongoose'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Define strongly typed Mongoose schemas, document models, instance methods, and query middleware.',
            km: 'កំណត់ strongly typed Mongoose schemas, document models និង query middleware។'
          },
          starterCode: {
            language: 'javascript',
            code: `import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  roles: [String]
});

export const User = mongoose.model('User', userSchema);`
          }
        }
      ]
    },

    // Module 8 — Transactions, Consistency & Capstone (2 lessons + capstone)
    {
      moduleNumber: 8,
      title: {
        en: 'Module 8 — Transactions, Consistency & Capstone',
        km: 'មេរៀនទី ៨ — Transactions, Consistency និង Capstone'
      },
      description: {
        en: 'Master multi-document ACID transactions, replica set consistency, and execute the SocialFeed DB Capstone.',
        km: 'ស្ទាត់ជំនាញ Multi-document ACID transactions, Replica set consistency និងអនុវត្តគម្រោង SocialFeed DB Capstone។'
      },
      lessons: [
        {
          id: 'mg-8-1',
          slug: 'multi-document-transactions-when-needed',
          moduleNumber: 8,
          lessonNumberInModule: 1,
          title: {
            en: '8.1 Multi-document transactions and when you actually need them',
            km: '៨.១ Multi-document Transactions និងកាលៈទេសៈដែលត្រូវប្រើប្រាស់វា'
          },
          durationMinutes: 25,
          difficulty: 'Advanced',
          objective: {
            en: 'Execute multi-collection updates inside client sessions with commit and abort transaction handling.',
            km: 'ធ្វើការ កែប្រែទិន្នន័យឆ្លង collections ក្នុង client session ជាមួយការគ្រប់គ្រង commit និង abort។'
          },
          starterCode: {
            language: 'javascript',
            code: `const session = db.getMongo().startSession();
session.startTransaction();
try {
  // Perform multi-document operations
  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
}`
          }
        },
        {
          id: 'mg-8-2',
          slug: 'planning-socialfeed-capstone-architecture',
          moduleNumber: 8,
          lessonNumberInModule: 2,
          title: {
            en: '8.2 Planning the SocialFeed capstone (collections, modeling decisions, pipeline)',
            km: '៨.២ ការរៀបចំស្ថាបត្យកម្ម SocialFeed Capstone (Collections, Schema Decisions, Pipeline)'
          },
          durationMinutes: 25,
          difficulty: 'Advanced',
          objective: {
            en: 'Plan collection structure, decide embedding vs referencing for feed features, and draft trending pipeline.',
            km: 'រៀបចំរចនាសម្ព័ន្ធ collection, សម្រេចចិត្ត embed vs reference និងរៀបចំ draft trending pipeline។'
          },
          starterCode: {
            language: 'javascript',
            code: `// Capstone Architecture Overview
// collections: users, posts (likes embedded), comments (referenced)`
          }
        }
      ]
    }
  ]
};
