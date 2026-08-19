import { BackendCourse } from '../backendCoursesHubData';

export const EXPRESS_COURSE_DATA: BackendCourse = {
  id: 'express',
  slug: 'express',
  title: {
    en: 'Express.js — REST API Engineering',
    km: 'Express.js — សាង REST API ពិតប្រាកដ'
  },
  iconName: 'express',
  type: 'framework',
  parentLanguageId: 'javascript-nodejs',
  categoryId: 'frameworks',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'The standard way to build APIs with Node.js, using the JavaScript skills you already have.',
    km: 'វិធីស្តង់ដារសម្រាប់សាង API ជាមួយ Node.js ដោយប្រើជំនាញ JavaScript ដែលអ្នកមានស្រាប់។'
  },
  summary: {
    en: 'Express.js is the most widely used web framework for Node.js, and it\'s the backbone of the "N" and part of the stack in countless real production systems, from startups to large platforms like Uber and Netflix\'s internal tooling. Unlike full "batteries-included" frameworks such as Laravel or Django, Express is deliberately minimal — it gives you routing and middleware, and lets you choose everything else (database, authentication approach, project structure), which is exactly why it\'s the standard choice for developers who already know JavaScript and want a flexible, unopinionated way to build REST APIs. This course assumes you already know JavaScript fundamentals and focuses entirely on backend API engineering: routing, middleware, request/response handling, authentication with JWTs, input validation, and structuring a real, production-style API from scratch. By the end, you\'ll have built a complete, secured REST API and understand exactly how modern Node.js backends are structured in real teams.',
    km: 'Express.js ជា web framework ដែលប្រើប្រាស់ទូលំទូលាយបំផុតសម្រាប់ Node.js ហើយវាជាឆ្អឹងខ្នងនៃ "N" និងផ្នែកមួយនៃ stack ក្នុងប្រព័ន្ធផលិតកម្មពិតប្រាកដរាប់មិនអស់ ចាប់ពី startup រហូតដល់វេទិកាធំៗដូចជា Uber និងឧបករណ៍ខាងក្នុងរបស់ Netflix។ ខុសពី framework "batteries-included" ពេញលេញដូចជា Laravel ឬ Django, Express មានលក្ខណៈតូចអប្បបរមាដោយចេតនា — វាផ្តល់ឱ្យអ្នកនូវ routing និង middleware ហើយអនុញ្ញាតឱ្យអ្នកជ្រើសរើសអ្វីៗផ្សេងទៀត (database, វិធីសាស្ត្រ authentication, រចនាសម្ព័ន្ធគម្រោង) ដែលនេះជាមូលហេតុពិតប្រាកដដែលវាជាជម្រើសស្តង់ដារសម្រាប់អ្នកអភិវឌ្ឍន៍ដែលចេះ JavaScript រួចហើយ ហើយចង់បានវិធីសាស្ត្រដែលបត់បែនសម្រាប់សាង REST API។ វគ្គសិក្សានេះសន្មតថាអ្នកចេះមូលដ្ឋាន JavaScript រួចហើយ ហើយផ្តោតទាំងស្រុងលើ backend API engineering៖ routing, middleware, ការគ្រប់គ្រង request/response, authentication ជាមួយ JWT, input validation និងការរៀបចំរចនាសម្ព័ន្ធ API ពិតប្រាកដកម្រិតផលិតកម្មពីដើមដល់ចប់។ ចប់វគ្គនេះ អ្នកនឹងបានសាង REST API ពេញលេញ និងមានសុវត្ថិភាព ហើយយល់ច្បាស់ពីរបៀបដែល Node.js backend សម័យទំនើបត្រូវបានរៀបចំរចនាសម្ព័ន្ធនៅក្នុងក្រុមការងារពិតប្រាកដ។'
  },
  estimatedHours: 24,
  lessonCount: 32,
  usedFor: 'Node.js REST APIs, Microservice Gateways, Real-time Backends, BFF (Backend-For-Frontend)',
  realWorldApps: ['Uber API Dispatch', 'Netflix Internal Tools', 'Segment Data Ingestion', 'PayPal Microservices'],
  prerequisites: {
    en: 'Solid JavaScript fundamentals are required (variables, functions, arrays/objects, async/await, promises) — complete the Frontend Web Development course\'s JavaScript module, or the JavaScript/Node.js Runtime Basics course, first if you haven\'t already.',
    km: 'ត្រូវការគ្រឹះ JavaScript រឹងមាំ (variables, functions, arrays/objects, async/await, promises) — គួរតែបានបញ្ចប់វគ្គ JavaScript/Node.js Runtime Basics ឬមេរៀន JavaScript ក្នុងវគ្គ Frontend ជាមុនសិន។'
  },
  whatYouWillLearn: {
    en: [
      'Set up a Node.js + Express project from scratch with npm',
      'Build routes and understand the request/response cycle in Express',
      'Use middleware — Express\'s core building block — including built-in, third-party, and custom middleware',
      'Structure REST endpoints correctly (GET/POST/PUT/DELETE, route params, query strings)',
      'Parse and validate incoming JSON request bodies',
      'Return proper HTTP status codes and consistent JSON responses',
      'Implement authentication with JWTs and password hashing with bcrypt',
      'Protect routes with authentication/authorization middleware',
      'Handle errors centrally with Express error-handling middleware',
      'Write a basic test for an API endpoint',
      'Structure a real, production-style Express project (routes/controllers/middleware separation)',
      'Understand the basics of deploying a Node.js API'
    ],
    km: [
      'បង្កើត និងរៀបចំគម្រោង Node.js + Express ពីដំបូងជាមួយ npm',
      'បង្កើត routes និងយល់ដឹងពី request/response cycle ក្នុង Express',
      'ប្រើប្រាស់ middleware — ផ្នែកសំខាន់បំផុតរបស់ Express — រួមមាន built-in, third-party, និង custom middleware',
      'រៀបចំរចនាសម្ព័ន្ធ REST endpoints ឱ្យបានត្រឹមត្រូវ (GET/POST/PUT/DELETE, route params, query strings)',
      'Parse និងផ្ទៀងផ្ទាត់ទិន្នន័យ JSON request bodies ដែលផ្ញើមក',
      'បញ្ជូន HTTP status codes ត្រឹមត្រូវ និង JSON responses ដែលមានទម្រង់ស្តង់ដារ',
      'អនុវត្តប្រព័ន្ធ authentication ជាមួយ JWTs និង password hashing ជាមួយ bcrypt',
      'ការពារ routes ដោយប្រើ authentication/authorization middleware',
      'គ្រប់គ្រង errors នៅកន្លែងតែមួយ (centralized error-handling middleware)',
      'សរសេរ test មូលដ្ឋានសម្រាប់ API endpoint',
      'រៀបចំរចនាសម្ព័ន្ធគម្រោង Express កម្រិតផលិតកម្ម (បំបែក routes/controllers/middleware)',
      'យល់ដឹងពីមូលដ្ឋានគ្រឹះនៃការដាក់ Express API ឱ្យប្រើប្រាស់ (deployment)'
    ]
  },
  toolsAndSetup: {
    en: '1. Install Node.js (verify with `node -v` and `npm -v`)\n2. Create a project folder, run `npm init -y`, then install Express: `npm install express`\n3. Install nodemon as a dev dependency (`npm install --save-dev nodemon`) for automatic server restarts\n4. Use Postman or Thunder Client (VS Code extension) for testing API requests',
    km: '១. ដំឡើង Node.js (ផ្ទៀងផ្ទាត់តាមរយៈ `node -v` និង `npm -v`)\n២. បង្កើត Folder គម្រោង, រត់ `npm init -y` រួចដំឡើង Express: `npm install express`\n៣. ដំឡើង nodemon ជា dev dependency (`npm install --save-dev nodemon`) ដើម្បី restart server ស្វ័យប្រវត្តិ\n៤. ប្រើប្រាស់ Postman ឬ Thunder Client (VS Code Extension) សម្រាប់ធ្វើតេស្ត API Requests'
  },
  cheatSheet: [
    {
      concept: 'Basic Express Server Setup',
      code: `const express = require('express');\nconst app = express();\n\napp.use(express.json());\n\napp.get('/api/health', (req, res) => {\n  res.json({ status: 'ok' });\n});\n\napp.listen(3000, () => console.log('Server running on port 3000'));`,
      explanation: {
        en: 'Creates an Express app instance, registers JSON body parser, handles a GET endpoint, and listens on port 3000.',
        km: 'បង្កើត Express App, ប្រើប្រាស់ JSON Parser, កំណត់ GET Endpoint, និងដំណើរការ Server លើ Port 3000។'
      }
    },
    {
      concept: 'JWT Authentication Middleware',
      code: `const jwt = require('jsonwebtoken');\n\nfunction requireAuth(req, res, next) {\n  const authHeader = req.headers.authorization;\n  if (!authHeader || !authHeader.startsWith('Bearer ')) {\n    return res.status(401).json({ error: 'No token provided' });\n  }\n  const token = authHeader.split(' ')[1];\n  try {\n    req.user = jwt.verify(token, process.env.JWT_SECRET);\n    next();\n  } catch (err) {\n    return res.status(401).json({ error: 'Invalid or expired token' });\n  }\n}`,
      explanation: {
        en: 'Middleware that verifies JWT Bearer token and attaches user payload to req.user before proceeding.',
        km: 'Middleware សម្រាប់ពិនិត្យមើល Bearer Token និងភ្ជាប់ព័ត៌មាន User ទៅក្នុង req.user មុនពេលបន្ត។'
      }
    },
    {
      concept: 'express.Router() Sub-Application',
      code: `const express = require('express');\nconst router = express.Router();\n\nrouter.get('/', (req, res) => res.json([]));\nrouter.post('/', (req, res) => res.status(201).json(req.body));\n\nmodule.exports = router;`,
      explanation: {
        en: 'Creates a modular mini-application router to keep routes organized in separate files.',
        km: 'បង្កើត Modular Router ដើម្បីបំបែកកូដ Routes ជា Files ផ្សេងៗគ្នាឱ្យមានរបៀបរៀបរយ។'
      }
    },
    {
      concept: 'Centralized Error Handling Middleware',
      code: `app.use((err, req, res, next) => {\n  console.error(err.stack);\n  const statusCode = err.statusCode || 500;\n  res.status(statusCode).json({\n    error: err.message || 'Internal Server Error'\n  });\n});`,
      explanation: {
        en: 'Global 4-parameter error middleware catching unhandled errors across the app.',
        km: 'Middleware ពិសេសមាន Parameter ៤ សម្រាប់ចាប់ Error ទាំងអស់ក្នុង App កុំឱ្យ Server ដួល។'
      }
    }
  ],
  quiz: [
    {
      id: 'exp-q1',
      question: {
        en: 'In Express middleware functions (req, res, next), what must be called to pass execution to the next handler?',
        km: 'ក្នុង Express Middleware Function (req, res, next) តើត្រូវហៅ Function មួយណាដើម្បីបញ្ជូនទៅ Handler បន្ទាប់?'
      },
      options: [
        { id: '1', text: { en: 'next()', km: 'next()' }, isCorrect: true },
        { id: '2', text: { en: 'res.send()', km: 'res.send()' }, isCorrect: false },
        { id: '3', text: { en: 'continue()', km: 'continue()' }, isCorrect: false },
        { id: '4', text: { en: 'req.next()', km: 'req.next()' }, isCorrect: false }
      ],
      explanation: {
        en: 'Calling next() passes control to the next middleware or route handler in the pipeline. If not called, the request hangs.',
        km: 'ការហៅ next() បញ្ជូនដំណើរការទៅកាន់ Middleware ឬ Route Handler បន្ទាប់។ បើមិនហៅវាទេ Request នឹងរង់ចាំរហូត (hang)។'
      }
    },
    {
      id: 'exp-q2',
      question: {
        en: 'Why is express.json() middleware required when accepting JSON POST requests?',
        km: 'ហេតុអ្វីបានជាត្រូវប្រើប្រាស់ express.json() middleware នៅពេលទទួល JSON POST requests?'
      },
      options: [
        { id: '1', text: { en: 'Express does not automatically parse JSON request bodies; express.json() populates req.body', km: 'Express មិនបាន Parse JSON request body ដោយស្វ័យប្រវត្តិទេ; express.json() ជាអ្នកបំប្លែង និងដាក់ចូល req.body' }, isCorrect: true },
        { id: '2', text: { en: 'Without express.json(), Express cannot listen on port 3000', km: 'បើគ្មាន express.json() Express មិនអាច Listen លើ Port 3000 បានទេ' }, isCorrect: false },
        { id: '3', text: { en: 'express.json() encrypts all HTTP headers', km: 'express.json() ធ្វើការ Encrypt HTTP headers ទាំងអស់' }, isCorrect: false },
        { id: '4', text: { en: 'express.json() connects Express directly to a SQL database', km: 'express.json() ភ្ជាប់ Express ដោយផ្ទាល់ទៅកាន់ SQL Database' }, isCorrect: false }
      ],
      explanation: {
        en: 'Express keeps incoming request streams unparsed by default. express.json() parses incoming JSON bodies and populates req.body.',
        km: 'Express មិនបំប្លែង Stream JSON ទិន្នន័យដោយស្វ័យប្រវត្តិឡើយ។ express.json() ជាអ្នក Parse JSON និងបំពេញទិន្នន័យទៅក្នុង req.body។'
      }
    }
  ],
  capstoneProject: {
    id: 'bookmarks-api',
    slug: 'bookmarks-api',
    title: {
      en: 'Bookmarks REST API',
      km: 'Bookmarks REST API ជាមួយ Express & JWT'
    },
    description: {
      en: 'A secured REST API where registered users can save, list, and delete bookmarked links, using Express routing, middleware, JWT authentication, bcrypt password hashing, and file-based JSON storage.',
      km: 'REST API មានសុវត្ថិភាពដែលអនុញ្ញាតឱ្យ User ចុះឈ្មោះ Login រួចរក្សាទុក បង្ហាញ និងលុប Bookmarked Links ដោយប្រើ Express, Middleware, JWT, bcrypt, និង File Storage។'
    },
    featureChecklist: {
      en: [
        'POST /auth/register — create a new user account with a hashed password (bcrypt)',
        'POST /auth/login — verify credentials and return a signed JWT token',
        'GET /bookmarks — list the logged-in user\'s saved bookmarks (protected route)',
        'POST /bookmarks — save a new bookmark URL & title (protected route)',
        'DELETE /bookmarks/:id — remove a bookmark, strictly owned by the logged-in user',
        'Centralized error handling and consistent JSON error responses across all endpoints'
      ],
      km: [
        'POST /auth/register — បង្កើត User Account ថ្មីជាមួយ Password ដែលបាន Hash តាមរយៈ bcrypt',
        'POST /auth/login — ផ្ទៀងផ្ទាត់ Email/Password រួចបញ្ជូនត្រឡប់ Signed JWT Token',
        'GET /bookmarks — បង្ហាញបញ្ជី Bookmarks របស់ User ដែលបាន Login (Protected Route)',
        'POST /bookmarks — រក្សាទុក Bookmark URL & Title ថ្មី (Protected Route)',
        'DELETE /bookmarks/:id — លុប Bookmark ចោល លុះត្រាតែជារបស់ User ដែលកំពុង Login ប៉ុណ្ណោះ',
        'Centralized Error Handling និងទម្រង់ឆ្លើយតប Error ជា JSON ស្តង់ដារ'
      ]
    },
    starterCode: {
      language: 'javascript',
      code: `const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Bookmarks API' });
});

app.listen(3000, () => {
  console.log('Bookmarks API running on port 3000');
});`
    },
    finalCode: `const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-123';
const DATA_FILE = path.join(__dirname, 'data.json');

// Helper functions for file-based database
async function readData() {
  try {
    const content = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    return { users: [], bookmarks: [] };
  }
}

async function writeData(data) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

// Authentication Middleware
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, error: 'Invalid or expired token' });
  }
}

// Auth Routes
app.post('/auth/register', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password are required' });
    }

    const db = await readData();
    const existing = db.users.find(u => u.email === email);
    if (existing) {
      return res.status(400).json({ success: false, error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: Date.now().toString(), email, password: hashedPassword };
    db.users.push(newUser);
    await writeData(db);

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    next(err);
  }
});

app.post('/auth/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const db = await readData();
    const user = db.users.find(u => u.email === email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ success: true, token });
  } catch (err) {
    next(err);
  }
});

// Bookmarks Routes (Protected)
app.get('/bookmarks', requireAuth, async (req, res, next) => {
  try {
    const db = await readData();
    const userBookmarks = db.bookmarks.filter(b => b.userId === req.user.id);
    res.json({ success: true, data: userBookmarks });
  } catch (err) {
    next(err);
  }
});

app.post('/bookmarks', requireAuth, async (req, res, next) => {
  try {
    const { title, url } = req.body;
    if (!title || !url) {
      return res.status(400).json({ success: false, error: 'Title and URL are required' });
    }

    const db = await readData();
    const newBookmark = {
      id: Date.now().toString(),
      userId: req.user.id,
      title,
      url,
      createdAt: new Date().toISOString()
    };
    db.bookmarks.push(newBookmark);
    await writeData(db);

    res.status(201).json({ success: true, data: newBookmark });
  } catch (err) {
    next(err);
  }
});

app.delete('/bookmarks/:id', requireAuth, async (req, res, next) => {
  try {
    const db = await readData();
    const index = db.bookmarks.findIndex(b => b.id === req.params.id && b.userId === req.user.id);

    if (index === -1) {
      return res.status(404).json({ success: false, error: 'Bookmark not found or access denied' });
    }

    db.bookmarks.splice(index, 1);
    await writeData(db);
    res.json({ success: true, message: 'Bookmark deleted successfully' });
  } catch (err) {
    next(err);
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: err.message || 'Server error' });
});

app.listen(3000, () => console.log('Server running on port 3000'));`,
    sampleRequests: [
      {
        title: 'POST /auth/register',
        method: 'POST',
        url: '/auth/register',
        body: JSON.stringify({ email: 'developer@example.com', password: 'mysecurepassword' }, null, 2),
        responseStatus: 201,
        responseBody: JSON.stringify({
          success: true,
          message: 'User registered successfully'
        }, null, 2)
      },
      {
        title: 'POST /auth/login',
        method: 'POST',
        url: '/auth/login',
        body: JSON.stringify({ email: 'developer@example.com', password: 'mysecurepassword' }, null, 2),
        responseStatus: 200,
        responseBody: JSON.stringify({
          success: true,
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3MjIyMDAwMDAwMDAiLCJlbWFpbCI6ImRldmVsb3BlckBleGFtcGxlLmNvbSJ9...'
        }, null, 2)
      },
      {
        title: 'POST /bookmarks',
        method: 'POST',
        url: '/bookmarks',
        headers: {
          'Authorization': 'Bearer <jwt_token_here>',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'Express.js Documentation',
          url: 'https://expressjs.com'
        }, null, 2),
        responseStatus: 201,
        responseBody: JSON.stringify({
          success: true,
          data: {
            id: '1722000005000',
            userId: '1722000000000',
            title: 'Express.js Documentation',
            url: 'https://expressjs.com',
            createdAt: '2026-08-01T04:52:00.000Z'
          }
        }, null, 2)
      }
    ]
  },
  modules: [
    // Module 1 — Introduction & Setup (3 lessons)
    {
      moduleNumber: 1,
      title: {
        en: 'Module 1 — Introduction & Setup',
        km: 'មេរៀនទី ១ — ការណែនាំ និងការរៀបចំ បរិស្ថានកូដ'
      },
      description: {
        en: 'Understand Express\'s role in the Node.js ecosystem, setup a new Express project with npm, and run your first Express HTTP server.',
        km: 'យល់ដឹងពីតួនាទីរបស់ Express ក្នុង Node.js, រៀបចំគម្រោង Express ជាមួយ npm និងរត់ Server ដំបូង។'
      },
      lessons: [
        {
          id: 'exp-1-1',
          slug: 'what-is-express-nodejs-ecosystem',
          moduleNumber: 1,
          lessonNumberInModule: 1,
          title: {
            en: '1.1 What is Express and how it fits into the Node.js ecosystem',
            km: '១.១ អ្វីជា Express និងតួនាទីរបស់វាក្នុង Node.js Ecosystem'
          },
          durationMinutes: 15,
          difficulty: 'Intermediate',
          objective: {
            en: 'Explain what Express provides on top of Node.js raw HTTP module and why it is the standard framework for building APIs.',
            km: 'ពន្យល់ពីអ្វីដែល Express ផ្តល់ជូនបន្ថែមលើ Node.js HTTP module និងហេតុផលដែលវាជាស្តង់ដារសម្រាប់សាង API។'
          },
          explanation: {
            en: 'Node.js itself lets you run JavaScript on a server and includes a low-level built-in http module for handling requests, but using it directly means writing a lot of repetitive routing and parsing code by hand. Express is a thin, unopinionated layer on top of Node\'s http module that handles routing, middleware, and request parsing helpers while staying flexible about database, folder structure, and authentication choice.',
            km: 'Node.js ខ្លួនឯងអនុញ្ញាតឱ្យអ្នករត់ JavaScript លើ server និងមាន http module កម្រិតទាប ប៉ុន្តែការប្រើវាដោយផ្ទាល់ត្រូវសរសេរកូដ routing និង parsing ច្រើនដោយដៃ។ Express ជាស្រទាប់ស្តើងលើ http module របស់ Node ដែលគ្រប់គ្រង routing, middleware និង parsing request ខណៈពេលនៅតែមានភាពបត់បែនខ្ពស់។'
          },
          starterCode: {
            language: 'javascript',
            code: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`
          },
          practiceExercise: {
            question: {
              en: 'Modify the root route to return a JSON greeting { message: "Welcome to Express API!" } instead of plain text.',
              km: 'កែប្រែ Root Route ឱ្យបញ្ជូនត្រឡប់ JSON Greeting { message: "Welcome to Express API!" } ជំនួសឱ្យ Plain Text។'
            },
            solution: `app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Express API!' });
});`
          },
          tips: {
            en: 'Always use res.json() when returning JSON data from API endpoints — it automatically sets the Content-Type: application/json header.',
            km: 'តែងតែប្រើប្រាស់ res.json() នៅពេលបញ្ជូន JSON ទិន្នន័យ — វាដំឡើង Header Content-Type: application/json ដោយស្វ័យប្រវត្តិ។'
          }
        },
        {
          id: 'exp-1-2',
          slug: 'setting-up-new-express-project-npm',
          moduleNumber: 1,
          lessonNumberInModule: 2,
          title: {
            en: '1.2 Setting up a new Express project with npm',
            km: '១.២ ការបង្កើត និងរៀបចំគម្រោង Express ថ្មីជាមួយ npm'
          },
          durationMinutes: 15,
          difficulty: 'Intermediate',
          objective: {
            en: 'Initialize a package.json file, install Express and nodemon, and configure start scripts.',
            km: 'បង្កើត package.json, ដំឡើង express និង nodemon ព្រមទាំងកំណត់ scripts ក្នុង package.json។'
          },
          starterCode: {
            language: 'json',
            code: `{
  "name": "my-express-api",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}`
          }
        },
        {
          id: 'exp-1-3',
          slug: 'first-express-server-explained',
          moduleNumber: 1,
          lessonNumberInModule: 3,
          title: {
            en: '1.3 Your first server — "Hello, Express!" explained line by line',
            km: '១.៣ Server ដំបូងរបស់អ្នក — បកស្រាយ "Hello, Express!" មួយជួរម្តងៗ'
          },
          durationMinutes: 15,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand express() initialization, app.listen(), and how Express registers route callbacks.',
            km: 'យល់ដឹងពីការបង្កើត express() app, app.listen() និងរបៀបដែល Express ចុះឈ្មោះ Route Callbacks។'
          },
          starterCode: {
            language: 'javascript',
            code: `const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/api/info', (req, res) => {
  res.json({
    framework: 'Express',
    version: '4.x',
    environment: process.env.NODE_ENV || 'development'
  });
});

app.listen(PORT, () => {
  console.log(\`Server is listening on port \${PORT}\`);
});`
          }
        }
      ]
    },

    // Module 2 — Routing & Middleware (5 lessons)
    {
      moduleNumber: 2,
      title: {
        en: 'Module 2 — Routing & Middleware',
        km: 'មេរៀនទី ២ — Routing និង Middleware'
      },
      description: {
        en: 'Master HTTP routing verbs, request/response lifecycle pipeline, built-in middleware, and custom middleware functions.',
        km: 'ស្ទាត់ជំនាញ HTTP Verbs, Request/Response Pipeline, Built-in Middleware និង Custom Middleware Functions។'
      },
      lessons: [
        {
          id: 'exp-2-1',
          slug: 'basic-routing-app-get-post-handlers',
          moduleNumber: 2,
          lessonNumberInModule: 1,
          title: {
            en: '2.1 Basic routing: app.get, app.post, and route handlers',
            km: '២.១ Routing មូលដ្ឋាន៖ app.get, app.post និង Route Handlers'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Map HTTP verbs (GET, POST, PUT, DELETE) to route handler functions.',
            km: 'ភ្ជាប់ HTTP Verbs (GET, POST, PUT, DELETE) ទៅកាន់ Route Handler Functions។'
          },
          starterCode: {
            language: 'javascript',
            code: `app.get('/items', (req, res) => res.json([]));
app.post('/items', (req, res) => res.status(201).json({ created: true }));`
          }
        },
        {
          id: 'exp-2-2',
          slug: 'understanding-express-middleware-pipeline',
          moduleNumber: 2,
          lessonNumberInModule: 2,
          title: {
            en: '2.2 What is middleware, and how the request/response pipeline works',
            km: '២.២ អ្វីជា Middleware និងដំណើរការនៃ Request/Response Pipeline'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand how requests pass through a stack of middleware functions via next().',
            km: 'យល់ដឹងពីរបៀបដែល Request ឆ្លងកាត់ Middleware Stack តាមរយៈការហៅ next()។'
          },
          explanation: {
            en: 'A middleware function is simply a function that has access to req, res, and next. Every Express app is fundamentally a pipeline: a request comes in, flows through registered middleware functions, and finally reaches a route handler.',
            km: 'Middleware ជា Function ដែលមានសិទ្ធិចូលប្រើ req, res, និង next។ គ្រប់ Express App គឺជា Pipeline៖ Request ចូលមក ឆ្លងកាត់ Middleware រួចដល់ Route Handler។'
          },
          starterCode: {
            language: 'javascript',
            code: `function logger(req, res, next) {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next(); // proceed to next step
}

app.use(logger);`
          }
        },
        {
          id: 'exp-2-3',
          slug: 'builtin-middleware-express-json-static',
          moduleNumber: 2,
          lessonNumberInModule: 3,
          title: {
            en: '2.3 Built-in middleware: express.json(), express.static()',
            km: '២.៣ Built-in Middleware៖ express.json() និង express.static()'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Configure built-in body parsing middleware and static file serving.',
            km: 'កំណត់រចនាសម្ព័ន្ធ Body Parsing Middleware និងការផ្តល់ Static Files។'
          },
          starterCode: {
            language: 'javascript',
            code: `app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));`
          }
        },
        {
          id: 'exp-2-4',
          slug: 'writing-custom-express-middleware',
          moduleNumber: 2,
          lessonNumberInModule: 4,
          title: {
            en: '2.4 Writing your own custom middleware (e.g. a request logger)',
            km: '២.៤ ការសរសេរ Custom Middleware ដោយខ្លួនឯង (ឧទាហរណ៍ Request Logger)'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Create re-usable custom middleware functions to attach properties or intercept requests.',
            km: 'បង្កើត Custom Middleware ដែលអាចយកមកប្រើឡើងវិញបាន ដើម្បីភ្ជាប់ Properties ឬទប់ស្កាត់ Request។'
          },
          starterCode: {
            language: 'javascript',
            code: `function requireApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== 'secret123') {
    return res.status(403).json({ error: 'Forbidden: Invalid API key' });
  }
  next();
}`
          }
        },
        {
          id: 'exp-2-5',
          slug: 'practice-timestamp-middleware',
          moduleNumber: 2,
          lessonNumberInModule: 5,
          title: {
            en: '2.5 Practice: build a middleware that adds a timestamp to every request',
            km: '២.៥ អនុវត្ត៖ បង្កើត Middleware បន្ថែម Timestamp ទៅគ្រប់ Request'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Attach req.requestTime in custom middleware and consume it in route handlers.',
            km: 'ភ្ជាប់ req.requestTime ក្នុង Custom Middleware រួចយកទៅប្រើក្នុង Route Handler។'
          },
          starterCode: {
            language: 'javascript',
            code: `function addTimestamp(req, res, next) {
  req.requestTime = new Date().toISOString();
  next();
}

app.use(addTimestamp);

app.get('/time', (req, res) => {
  res.json({ requestedAt: req.requestTime });
});`
          }
        }
      ]
    },

    // Module 3 — REST Endpoints & Route Structure (4 lessons)
    {
      moduleNumber: 3,
      title: {
        en: 'Module 3 — REST Endpoints & Route Structure',
        km: 'មេរៀនទី ៣ — REST Endpoints និងរចនាសម្ព័ន្ធ Routes'
      },
      description: {
        en: 'Design clean RESTful routes, parameter extraction, query strings, and router modularization with express.Router().',
        km: 'ឌីសាញ RESTful Routes, ទាញយក Route Parameters, Query Strings និងបំបែកជា Router Modules។'
      },
      lessons: [
        {
          id: 'exp-3-1',
          slug: 'rest-conventions-http-verbs',
          moduleNumber: 3,
          lessonNumberInModule: 1,
          title: {
            en: '3.1 REST conventions: GET/POST/PUT/DELETE and what each should do',
            km: '៣.១ លក្ខណៈស្តង់ដារ REST៖ GET/POST/PUT/DELETE និងតួនាទីរបស់វា'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Design resource-oriented RESTful route patterns using standard HTTP semantics.',
            km: 'ឌីសាញ RESTful Routes តាមស្តង់ដារធនធាន (Resource-oriented) និង HTTP Semantics។'
          },
          starterCode: {
            language: 'text',
            code: `GET    /api/v1/users       -> List all users
POST   /api/v1/users       -> Create a new user
GET    /api/v1/users/:id   -> Get user by ID
PUT    /api/v1/users/:id   -> Replace user completely
DELETE /api/v1/users/:id   -> Delete user`
          }
        },
        {
          id: 'exp-3-2',
          slug: 'route-parameters-and-query-strings',
          moduleNumber: 3,
          lessonNumberInModule: 2,
          title: {
            en: '3.2 Route parameters (/bookmarks/:id) and query strings (?category=work)',
            km: '៣.២ Route parameters (/bookmarks/:id) និង Query strings (?category=work)'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Extract path parameters via req.params and URL query parameters via req.query.',
            km: 'ទាញយក Path Parameters តាមរយៈ req.params និង URL Query Parameters តាមរយៈ req.query។'
          },
          starterCode: {
            language: 'javascript',
            code: `app.get('/bookmarks/:id', (req, res) => {
  const { id } = req.params;
  const { category, page } = req.query;
  res.json({ id, category, page });
});`
          }
        },
        {
          id: 'exp-3-3',
          slug: 'organizing-routes-express-router',
          moduleNumber: 3,
          lessonNumberInModule: 3,
          title: {
            en: '3.3 Organizing routes with express.Router()',
            km: '៣.៣ ការរៀបចំ Routes ជា Module ដោយប្រើ express.Router()'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Decouple large route files into modular sub-routers mounted under prefix paths.',
            km: 'បំបែក Route Files ធំៗទៅជា Router Modules តូចៗ រួច Mount តាម Prefix Path។'
          },
          starterCode: {
            language: 'javascript',
            code: `// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json([]));
router.post('/', (req, res) => res.status(201).json(req.body));

module.exports = router;

// server.js
const usersRouter = require('./routes/users');
app.use('/api/v1/users', usersRouter);`
          }
        },
        {
          id: 'exp-3-4',
          slug: 'practice-full-crud-routes',
          moduleNumber: 3,
          lessonNumberInModule: 4,
          title: {
            en: '3.4 Practice: build full CRUD routes for a simple resource',
            km: '៣.៤ អនុវត្ត៖ បង្កើត Full CRUD Routes សម្រាប់ Resource មួយ'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Implement complete in-memory CRUD routes (index, show, create, update, destroy) using express.Router().',
            km: 'សរសេរ CRUD Routes ពេញលេញលើ In-memory Data (index, show, create, update, destroy) ដោយប្រើ express.Router()។'
          },
          starterCode: {
            language: 'javascript',
            code: `const express = require('express');
const router = express.Router();

let items = [{ id: '1', name: 'Item One' }];

router.get('/', (req, res) => res.json(items));
router.get('/:id', (req, res) => {
  const item = items.find(i => i.id === req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

module.exports = router;`
          }
        }
      ]
    },

    // Module 4 — Request/Response Handling (4 lessons)
    {
      moduleNumber: 4,
      title: {
        en: 'Module 4 — Request/Response Handling',
        km: 'មេរៀនទី ៤ — ការគ្រប់គ្រង Request និង Response'
      },
      description: {
        en: 'JSON body parsing, accurate HTTP status codes, consistent error payload shapes, and input sanitization.',
        km: 'JSON body parsing, ការប្រើ HTTP status codes, ទម្រង់ឆ្លើយតប Error ស្តង់ដារ និងការសម្អាតទិន្នន័យ។'
      },
      lessons: [
        {
          id: 'exp-4-1',
          slug: 'parsing-json-request-bodies',
          moduleNumber: 4,
          lessonNumberInModule: 1,
          title: {
            en: '4.1 Parsing JSON request bodies',
            km: '៤.១ ការ Parse JSON Request Bodies'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Safely parse incoming JSON payloads and handle missing body fields in POST/PUT routes.',
            km: 'Parse JSON Payloads មកកាន់ req.body ឱ្យមានសុវត្ថិភាព និងទប់ស្កាត់ករណីខ្វះ Field។'
          },
          starterCode: {
            language: 'javascript',
            code: `app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || price === undefined) {
    return res.status(400).json({ error: 'Name and price are required' });
  }
  res.status(201).json({ id: Date.now().toString(), name, price });
});`
          }
        },
        {
          id: 'exp-4-2',
          slug: 'sending-proper-http-status-codes',
          moduleNumber: 4,
          lessonNumberInModule: 2,
          title: {
            en: '4.2 Sending proper HTTP status codes (200, 201, 400, 404, 500)',
            km: '៤.២ ការបញ្ជូន HTTP Status Codes ត្រឹមត្រូវ (200, 201, 400, 404, 500)'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Utilize correct HTTP response codes matching REST standards for client success and failure states.',
            km: 'ប្រើប្រាស់ HTTP Response Codes ត្រឹមត្រូវតាម REST Standards សម្រាប់ Success និង Failure States។'
          },
          starterCode: {
            language: 'javascript',
            code: `// 200 OK, 201 Created, 204 No Content
// 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Server Error
res.status(201).json({ message: 'Resource created' });`
          }
        },
        {
          id: 'exp-4-3',
          slug: 'consistent-json-response-shape',
          moduleNumber: 4,
          lessonNumberInModule: 3,
          title: {
            en: '4.3 Consistent JSON response shape (success/error format)',
            km: '៤.៣ ការកំណត់ទម្រង់ Response ជា JSON ឱ្យមានស្តង់ដារដូចគ្នា'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Establish a unified JSON response envelope across all API endpoints ({ success, data, error }).',
            km: 'រៀបចំទម្រង់ Response Envelope ({ success, data, error }) ឱ្យដូចគ្នាគ្រប់ Endpoint។'
          },
          starterCode: {
            language: 'javascript',
            code: `const successResponse = (data, statusCode = 200) => ({
  success: true,
  data
});

const errorResponse = (message, statusCode = 400) => ({
  success: false,
  error: message
});`
          }
        },
        {
          id: 'exp-4-4',
          slug: 'practice-input-parsing-status-codes',
          moduleNumber: 4,
          lessonNumberInModule: 4,
          title: {
            en: '4.4 Practice: build an endpoint with full input parsing and correct status codes',
            km: '៤.៤ អនុវត្ត៖ បង្កើត Endpoint ដែលមាន Input Parsing និង Status Codes ត្រឹមត្រូវ'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build a user registration endpoint validating input fields and returning 201 Created or 400 Bad Request.',
            km: 'សរសេរ User Registration Endpoint មាន Input Validation និងបញ្ជូន Response 201 ឬ 400។'
          },
          starterCode: {
            language: 'javascript',
            code: `app.post('/api/v1/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password || password.length < 6) {
    return res.status(400).json({
      success: false,
      error: 'Valid email and password (min 6 chars) required'
    });
  }
  res.status(201).json({
    success: true,
    data: { id: 'u_123', email }
  });
});`
          }
        }
      ]
    },

    // Module 5 — Working with Data (4 lessons)
    {
      moduleNumber: 5,
      title: {
        en: 'Module 5 — Working with Data',
        km: 'មេរៀនទី ៥ — ការធ្វើការជាមួយទិន្នន័យ'
      },
      description: {
        en: 'File-based persistence with Node fs/promises, data layer abstraction, and async error handling in route handlers.',
        km: 'ការរក្សាទុកទិន្នន័យក្នុង File ដោយប្រើ fs/promises, Data Layer Abstraction និង Async Handler Error Handling។'
      },
      lessons: [
        {
          id: 'exp-5-1',
          slug: 'file-based-storage-node-fs-module',
          moduleNumber: 5,
          lessonNumberInModule: 1,
          title: {
            en: '5.1 File-based storage with Node\'s fs module (async version)',
            km: '៥.១ ការរក្សាទុកទិន្នន័យលើ File ជាមួយ Node fs/promises Module'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Read and write JSON arrays to local disk using fs/promises within Express endpoints.',
            km: 'អាន និងសរសេរ JSON Data ទៅកាន់ Local Disk ដោយប្រើ fs/promises ក្នុង Express Endpoints។'
          },
          starterCode: {
            language: 'javascript',
            code: `const fs = require('fs/promises');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'data.json');

async function getStoredData() {
  const content = await fs.readFile(FILE_PATH, 'utf-8');
  return JSON.parse(content);
}`
          }
        },
        {
          id: 'exp-5-2',
          slug: 'structuring-simple-data-layer',
          moduleNumber: 5,
          lessonNumberInModule: 2,
          title: {
            en: '5.2 Structuring a simple "data layer" separate from routes',
            km: '៥.២ ការរៀបចំ "Data Layer" ដាច់ដោយឡែកចេញពី Routes'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Decouple file persistence logic into model repository functions (getAll, save, findById).',
            km: 'ញែកកូដ File Storage ទៅដាក់ក្នុង Repository Functions (getAll, save, findById)។'
          },
          starterCode: {
            language: 'javascript',
            code: `// models/bookmarkModel.js
const fs = require('fs/promises');

module.exports = {
  async getAll() { /* ... */ },
  async create(data) { /* ... */ }
};`
          }
        },
        {
          id: 'exp-5-3',
          slug: 'async-await-in-express-route-handlers',
          moduleNumber: 5,
          lessonNumberInModule: 3,
          title: {
            en: '5.3 Async/await in Express route handlers, and why you must handle rejected promises',
            km: '៥.៣ ការប្រើប្រាស់ Async/Await ក្នុង Route Handlers និងការទប់ស្កាត់ Error'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Prevent unhandled promise rejections in async route handlers by forwarding errors using try/catch and next(err).',
            km: 'ការពារ Unhandled Promise Rejections ក្នុង Async Handlers ដោយប្រើ try/catch និង next(err)។'
          },
          starterCode: {
            language: 'javascript',
            code: `app.get('/data', async (req, res, next) => {
  try {
    const data = await fetchDataFromDisk();
    res.json(data);
  } catch (err) {
    next(err); // pass error to Express global error handler
  }
});`
          }
        },
        {
          id: 'exp-5-4',
          slug: 'practice-build-data-layer-crud',
          moduleNumber: 5,
          lessonNumberInModule: 4,
          title: {
            en: '5.4 Practice: build a data layer with getAll, getById, create, delete functions',
            km: '៥.៤ អនុវត្ត៖ បង្កើត Data Layer មាន getAll, getById, create, delete'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Implement a file-backed repository module supporting full asynchronous CRUD operations.',
            km: 'សរសេរ File Repository Module ដែលទ្រទ្រង់ប្រតិបត្តិការ Asynchronous CRUD ទាំងស្រុង។'
          },
          starterCode: {
            language: 'javascript',
            code: `const fs = require('fs/promises');
const path = require('path');
const file = path.join(__dirname, 'store.json');

const store = {
  async getAll() {
    const data = await fs.readFile(file, 'utf-8').catch(() => '[]');
    return JSON.parse(data);
  },
  async saveAll(items) {
    await fs.writeFile(file, JSON.stringify(items, null, 2));
  }
};`
          }
        }
      ]
    },

    // Module 6 — Authentication & Security (5 lessons)
    {
      moduleNumber: 6,
      title: {
        en: 'Module 6 — Authentication & Security',
        km: 'មេរៀនទី ៦ — Authentication និង សុវត្ថិភាព'
      },
      description: {
        en: 'Password hashing with bcrypt, JSON Web Token (JWT) issuance, verification middleware, and route protection.',
        km: 'Password hashing ជាមួយ bcrypt, ការបង្កើត និងផ្ទៀងផ្ទាត់ JWT, និងការការពារ Routes។'
      },
      lessons: [
        {
          id: 'exp-6-1',
          slug: 'password-hashing-bcrypt',
          moduleNumber: 6,
          lessonNumberInModule: 1,
          title: {
            en: '6.1 Password hashing with bcrypt — never store plain text passwords',
            km: '៦.១ Password Hashing ជាមួយ bcrypt — ហាមរក្សាទុក Plain Text Password'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Hash passwords securely using bcrypt.hash and verify them during login using bcrypt.compare.',
            km: 'ធ្វើ Hash Password ដោយប្រើ bcrypt.hash និងផ្ទៀងផ្ទាត់ពេល Login តាមរយៈ bcrypt.compare។'
          },
          starterCode: {
            language: 'javascript',
            code: `const bcrypt = require('bcryptjs');

// Hash password before saving
const hash = await bcrypt.hash('user_password_123', 10);

// Verify password on login
const isMatch = await bcrypt.compare('user_password_123', hash);`
          }
        },
        {
          id: 'exp-6-2',
          slug: 'issuing-jwt-on-login',
          moduleNumber: 6,
          lessonNumberInModule: 2,
          title: {
            en: '6.2 Issuing a JWT on login',
            km: '៦.២ ការបង្កើត និងផ្តល់បញ្ជូន JWT នៅពេល Login'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Sign a JSON Web Token containing non-sensitive user payload using jsonwebtoken library.',
            km: 'បង្កើត និងចុះហត្ថលេខាលើ JWT ជាមួយ Payload ដែលគ្មានព័ត៌មាន sensitive តាមរយៈ jsonwebtoken library។'
          },
          starterCode: {
            language: 'javascript',
            code: `const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { id: user.id, email: user.email },
  process.env.JWT_SECRET || 'secretkey',
  { expiresIn: '24h' }
);`
          }
        },
        {
          id: 'exp-6-3',
          slug: 'verifying-jwt-custom-auth-middleware',
          moduleNumber: 6,
          lessonNumberInModule: 3,
          title: {
            en: '6.3 Verifying a JWT with custom authentication middleware',
            km: '៦.៣ ការផ្ទៀងផ្ទាត់ JWT តាមរយៈ Custom Authentication Middleware'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build authentication middleware that verifies JWT Bearer token and attaches req.user.',
            km: 'សរសេរ Authentication Middleware ដើម្បីពិនិត្យ Bearer Token និងភ្ជាប់ req.user។'
          },
          explanation: {
            en: 'Once a user logs in and receives a JWT, that token gets sent back on future requests in the Authorization: Bearer <token> header. Middleware inspects the header, verifies the signature, and either lets the request through or returns 401 Unauthorized.',
            km: 'ពេល User Login ទទួលបាន JWT ពួកវាផ្ញើ Token នោះមកវិញតាម Header Authorization: Bearer <token>។ Middleware ពិនិត្យមើល និងផ្ទៀងផ្ទាត់ មុនអនុញ្ញាតឱ្យបន្ត ឬបញ្ជូន 401 Unauthorized។'
          },
          starterCode: {
            language: 'javascript',
            code: `const jwt = require('jsonwebtoken');

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}`
          },
          practiceExercise: {
            question: {
              en: 'Update requireAuth to explicitly check if Authorization header exists but lacks the Bearer prefix and return a detailed error.',
              km: 'កែប្រែ requireAuth ឱ្យឆែកមើលបើមាន Header ប៉ុន្តែគ្មានពាក្យ Bearer រួចបញ្ជូន Error Message ច្បាស់លាស់។'
            },
            solution: `if (!authHeader.startsWith('Bearer ')) {
  return res.status(401).json({ error: 'Authorization header must use Bearer scheme' });
}`
          }
        },
        {
          id: 'exp-6-4',
          slug: 'protecting-routes-authorization',
          moduleNumber: 6,
          lessonNumberInModule: 4,
          title: {
            en: '6.4 Protecting routes so only logged-in users can access them',
            km: '៦.៤ ការការពារ Routes សម្រាប់តែ Logged-in Users ប៉ុណ្ណោះ'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Apply authentication middleware to protected route groups and enforce user ownership over resource actions.',
            km: 'ដាក់ប្រើប្រាស់ Authentication Middleware លើ Protected Routes និងកំណត់សិទ្ធិកាន់កាប់លើ Resource។'
          },
          starterCode: {
            language: 'javascript',
            code: `app.get('/api/v1/profile', requireAuth, (req, res) => {
  res.json({ message: 'Welcome to your protected profile', user: req.user });
});`
          }
        },
        {
          id: 'exp-6-5',
          slug: 'practice-login-jwt-protected-route',
          moduleNumber: 6,
          lessonNumberInModule: 5,
          title: {
            en: '6.5 Practice: build a login endpoint that returns a JWT, and a protected route that requires it',
            km: '៦.៥ អនុវត្ត៖ បង្កើត Login Endpoint ផ្តល់ JWT និង Protected Route មួយ'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Combine password comparison, JWT token generation, and auth middleware into an end-to-end user session flow.',
            km: 'ផ្សំកូដ ផ្ទៀងផ្ទាត់ Password, បង្កើត JWT Token, និង Auth Middleware ទៅជាដំណើរការ Session ពេញលេញ។'
          },
          starterCode: {
            language: 'javascript',
            code: `app.post('/auth/login', async (req, res) => {
  // Validate credentials & issue token
});

app.get('/dashboard', requireAuth, (req, res) => {
  res.json({ status: 'Authorized access' });
});`
          }
        }
      ]
    },

    // Module 7 — Validation, Error Handling & Testing (5 lessons)
    {
      moduleNumber: 7,
      title: {
        en: 'Module 7 — Validation, Error Handling & Testing',
        km: 'មេរៀនទី ៧ — Validation, Error Handling និង Testing'
      },
      description: {
        en: 'Request payload validation, centralized error handling middleware, 404 fallback handlers, and endpoint integration testing.',
        km: 'ការផ្ទៀងផ្ទាត់ទិន្នន័យ Payload, Centralized Error Handling Middleware, 404 Handlers និងការធ្វើ Integration Tests។'
      },
      lessons: [
        {
          id: 'exp-7-1',
          slug: 'input-validation-express-validator',
          moduleNumber: 7,
          lessonNumberInModule: 1,
          title: {
            en: '7.1 Input validation with a library (or manual checks)',
            km: '៧.១ ការផ្ទៀងផ្ទាត់ទិន្នន័យបញ្ចូលជាមួយ Library ឬ Manual Checks'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Validate request bodies, parameters, and query strings to reject malformed data before reaching business logic.',
            km: 'ផ្ទៀងផ្ទាត់ទិន្នន័យ Body, Params, និង Query ដើម្បីបដិសេធទិន្នន័យមិនត្រឹមត្រូវ មុនដល់ Business Logic។'
          },
          starterCode: {
            language: 'javascript',
            code: `function validateBookmark(req, res, next) {
  const { title, url } = req.body;
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'Valid title string is required' });
  }
  if (!url || !url.startsWith('http')) {
    return res.status(400).json({ error: 'Valid HTTP/HTTPS URL is required' });
  }
  next();
}`
          }
        },
        {
          id: 'exp-7-2',
          slug: 'centralized-error-handling-middleware',
          moduleNumber: 7,
          lessonNumberInModule: 2,
          title: {
            en: '7.2 Centralized error-handling middleware',
            km: '៧.២ Centralized Error-Handling Middleware'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Implement 4-argument global error middleware (err, req, res, next) to catch all thrown or passed errors.',
            km: 'សរសេរ 4-argument Global Error Middleware (err, req, res, next) ដើម្បីចាប់ Error ទាំងអស់ក្នុង App។'
          },
          starterCode: {
            language: 'javascript',
            code: `app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    error: err.message || 'Internal Server Error'
  });
});`
          }
        },
        {
          id: 'exp-7-3',
          slug: 'handling-404s-for-unknown-routes',
          moduleNumber: 7,
          lessonNumberInModule: 3,
          title: {
            en: '7.3 Handling 404s for unknown routes',
            km: '៧.៣ ការគ្រប់គ្រងករណី 404 សម្រាប់ Unknown Routes'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Register a catch-all route handler at the end of the middleware stack for unmapped HTTP requests.',
            km: 'ដាក់ Catch-all Handler នៅចុងបញ្ចប់នៃ Middleware Stack សម្រាប់ Request ដែលគ្មាន Route ត្រូវគ្នា។'
          },
          starterCode: {
            language: 'javascript',
            code: `app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: \`Cannot \${req.method} \${req.originalUrl}\`
  });
});`
          }
        },
        {
          id: 'exp-7-4',
          slug: 'writing-basic-endpoint-test-supertest',
          moduleNumber: 7,
          lessonNumberInModule: 4,
          title: {
            en: '7.4 Writing a basic endpoint test (e.g. with Jest + supertest)',
            km: '៧.៤ ការសរសេរ Endpoint Test មូលដ្ឋាន (ជាមួយ Jest + Supertest)'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Write automated HTTP endpoint tests using Supertest without launching a physical listening port.',
            km: 'សរសេរ Automated HTTP Endpoint Tests ដោយប្រើ Supertest ដោយមិនបាច់បើក Listen Port ជាក់ស្តែងឡើយ។'
          },
          starterCode: {
            language: 'javascript',
            code: `const request = require('supertest');
const app = require('./app');

describe('GET /api/health', () => {
  it('should return 200 OK with status ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('ok');
  });
});`
          }
        },
        {
          id: 'exp-7-5',
          slug: 'practice-validation-error-handling-endpoint',
          moduleNumber: 7,
          lessonNumberInModule: 5,
          title: {
            en: '7.5 Practice: add validation and centralized error handling to an existing endpoint',
            km: '៧.៥ អនុវត្ត៖ បន្ថែម Validation និង Centralized Error Handling លើ Endpoint ដែលមានស្រាប់'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Refactor an unhandled route handler to use validation middleware and delegate unexpected crashes to global error middleware.',
            km: 'កែសម្រួល Route Handler ដោយបន្ថែម Validation Middleware និងបញ្ជូន Crash ផ្សេងៗទៅ Global Error Middleware។'
          },
          starterCode: {
            language: 'javascript',
            code: `app.post('/api/notes', validateNote, async (req, res, next) => {
  try {
    const note = await createNote(req.body);
    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
});`
          }
        }
      ]
    },

    // Module 8 — Capstone Project (2 lessons + project)
    {
      moduleNumber: 8,
      title: {
        en: 'Module 8 — Capstone Project: Bookmarks REST API',
        km: 'មេរៀនទី ៨ — Capstone Project៖ Bookmarks REST API'
      },
      description: {
        en: 'Plan and construct the Bookmarks API — a production Express REST backend with auth, user ownership, and validation.',
        km: 'រៀបចំផែនការ និងសាង Bookmarks API — Express REST Backend មានប្រព័ន្ធ Auth, សិទ្ធិម្ចាស់កម្សាន្ត និង Validation។'
      },
      lessons: [
        {
          id: 'exp-8-1',
          slug: 'planning-bookmarks-api-architecture',
          moduleNumber: 8,
          lessonNumberInModule: 1,
          title: {
            en: '8.1 Planning the Bookmarks API (data model, endpoints, auth flow)',
            km: '៨.១ ការរៀបចំផែនការស្ថាបត្យកម្ម Bookmarks API'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Map out the entity-relationship schema, endpoint routing spec, and JWT security requirements for the capstone project.',
            km: 'រៀបចំ Schema នៃ Entity, Endpoint Specifications និងតម្រូវការ សុវត្ថិភាព JWT សម្រាប់ Capstone Project។'
          },
          starterCode: {
            language: 'text',
            code: `User Entity: { id, email, passwordHash }
Bookmark Entity: { id, userId, title, url, createdAt }

Auth Endpoints:
  POST /auth/register
  POST /auth/login

Bookmark Endpoints (Require Bearer Token):
  GET /bookmarks
  POST /bookmarks
  DELETE /bookmarks/:id`
          }
        },
        {
          id: 'exp-8-2',
          slug: 'building-bookmarks-api-full-guided-build',
          moduleNumber: 8,
          lessonNumberInModule: 2,
          title: {
            en: '8.2 Building the Bookmarks API (full guided build)',
            km: '៨.២ ការសាងសង់ Bookmarks API (ការណែនាំសរសេរកូដពីដើមដល់ចប់)'
          },
          durationMinutes: 45,
          difficulty: 'Intermediate',
          objective: {
            en: 'Assemble all components — Express app, auth routes, JWT middleware, file persistence layer, and global error handling — into the final capstone project.',
            km: 'ផ្គុំគ្រប់សមាសភាគ — Express App, Auth Routes, JWT Middleware, File Storage, និង Global Error Handling ទៅជា Capstone Project ពេញលេញ។'
          },
          starterCode: {
            language: 'javascript',
            code: `// See capstone finalCode for the complete reference implementation
console.log('Building the Bookmarks API Capstone Project...');`
          }
        }
      ]
    }
  ]
};
