import { BackendCourse } from '../backendCoursesHubData';

export const NODEJS_COURSE_DATA: BackendCourse = {
  id: 'javascript-nodejs',
  slug: 'nodejs-runtime-basics',
  title: {
    en: 'Node.js Runtime Basics — Running JavaScript on the Server',
    km: 'មូលដ្ឋាន Node.js Runtime — ដំណើរការ JavaScript នៅលើ Server'
  },
  iconName: 'nodejs',
  type: 'language',
  categoryId: 'languages',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Take the JavaScript you already know and use it to build real backend systems.',
    km: 'យក JavaScript ដែលអ្នកចេះរួចមកហើយ មកប្រើសាងប្រព័ន្ធ backend ពិតប្រាកដ។'
  },
  summary: {
    en: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine that lets you run JavaScript outside the browser — on a server, on your machine, or in the cloud. It\'s the foundation for modern backend web development in JavaScript: web servers, REST APIs, command-line tools, and real-time applications all start here. Learn the event loop, core modules (fs, path, os, events), npm, HTTP servers, and Express REST APIs.',
    km: 'Node.js គឺជា runtime របស់ JavaScript ដែលសាងឡើងលើ V8 engine របស់ Chrome ដែលអនុញ្ញាតឱ្យអ្នករត់ JavaScript នៅខាងក្រៅ browser — នៅលើ server នៅលើម៉ាស៊ីនផ្ទាល់ខ្លួន ឬនៅលើ cloud។ វាជាមូលដ្ឋានគ្រឹះសម្រាប់ web servers, REST APIs, CLI tools និង real-time apps។ រៀន Event loop, Core modules, npm, HTTP servers និង Express APIs។'
  },
  estimatedHours: 24,
  lessonCount: 32,
  usedFor: 'Express.js, NestJS, REST APIs, CLI Tools, Real-time WebSockets, Microservices',
  realWorldApps: ['TaskFlow REST API', 'Netflix API Gateway', 'PayPal Microservices', 'LinkedIn Backend', 'Trello Real-Time Engine'],
  prerequisites: {
    en: 'Completion of JavaScript Fundamentals (or equivalent JavaScript knowledge: functions, objects, Promises) is strongly recommended.',
    km: 'គួរតែចេះកូដ JavaScript គ្រឹះ (Functions, Objects, Promises) រួចរាល់មុននឹងរៀនវគ្គនេះ។'
  },
  whatYouWillLearn: {
    en: [
      'Understand what Node.js is and how it differs from JavaScript in the browser',
      'Install Node.js and run scripts from the command line',
      'Understand the event loop and Node\'s non-blocking, single-threaded model',
      'Work with CommonJS (require) and ES Modules (import/export)',
      'Use core built-in modules: fs, path, os, process, events',
      'Read and write files synchronously and asynchronously with fs/promises',
      'Manage dependencies with npm, package.json, and semantic versioning',
      'Build HTTP servers from scratch using Node\'s built-in http module',
      'Handle asynchronous code cleanly with Promises and async/await',
      'Build a real REST API using Express: routing, middleware, and error handling',
      'Debug and log Node applications, and use environment variables safely',
      'Build the TaskFlow REST API capstone project from scratch'
    ],
    km: [
      'យល់ដឹងពី Node.js និងភាពខុសគ្នារវាង JavaScript ក្នុង Browser និង Server',
      'ដំឡើង Node.js និងដំណើរកូដតាមរយៈ Command Line',
      'យល់ដឹងពី Event Loop និងស្ថាបត្យកម្ម Non-blocking Single-threaded',
      'ប្រើប្រាស់ CommonJS (require) និង ES Modules (import/export)',
      'ប្រើប្រាស់ Core Modules ដើម៖ fs, path, os, process, events',
      'អាន និងសរសេរ File ដោយ Asynchronous តាមរយៈ fs/promises',
      'គ្រប់គ្រង Dependencies តាម npm, package.json និង Semantic Versioning',
      'បង្កើត HTTP Server ដើមដោយប្រើ Module node:http',
      'គ្រប់គ្រង Async តាមរយៈ Promises និង async/await ជាមួយ try/catch',
      'បង្កើត REST API ជាមួយ Express: routing, middleware, error handling',
      'Debug, Log កម្មវិធី Node និងប្រើប្រាស់ Environment Variables',
      'សាងសង់គម្រោង Capstone "TaskFlow REST API" ពេញលេញពីដើម'
    ]
  },
  toolsAndSetup: {
    en: '1. Download & install Node.js (LTS version) from nodejs.org. 2. Verify with node -v and npm -v. 3. Use VS Code or our built-in interactive live sandbox to run Node scripts.',
    km: '១. ទាញយក និងដំឡើង Node.js (LTS) ពី nodejs.org។ ២. ពិនិត្យជាមួយ node -v និង npm -v។ ៣. ប្រើប្រាស់ VS Code ឬ Sandbox ផ្ទាល់នៅលើវេបសាយនេះ។'
  },
  cheatSheet: [
    {
      concept: 'Process Version & Platform',
      code: `console.log(process.version, process.platform, process.argv);`,
      explanation: { en: 'Inspect running Node environment and runtime CLI arguments.', km: 'ពិនិត្យ Version, OS Platform និង Command-line Arguments។' }
    },
    {
      concept: 'ES Modules Import / Export',
      code: `// utils.js\nexport const greet = (name) => \`Hello \${name}\`;\n// app.js\nimport { greet } from './utils.js';`,
      explanation: { en: 'Modern modular code organization in Node.js ("type": "module").', km: 'ការប្រើប្រាស់ ES Modules ទំនើបក្នុង Node.js។' }
    },
    {
      concept: 'fs/promises File Reading',
      code: `import { readFile, writeFile } from 'fs/promises';\nconst data = await readFile('file.txt', 'utf-8');\nawait writeFile('out.txt', data.toUpperCase());`,
      explanation: { en: 'Non-blocking async file I/O with Promises.', km: 'ការអាន និងសរសេរ File ដោយ Asynchronous ដោយមិនឱ្យប្រព័ន្ធគាំង។' }
    },
    {
      concept: 'Express REST Router',
      code: `import express from 'express';\nconst app = express();\napp.use(express.json());\napp.get('/api/tasks', (req, res) => res.json([]));\napp.listen(3000);`,
      explanation: { en: 'Standard Express web framework routing and JSON handling.', km: 'ការបង្កើត Express REST API ជាមួយ JSON Middleware។' }
    }
  ],
  quiz: [
    {
      id: 'node-q1',
      question: { en: 'What core C library handles the event loop and asynchronous I/O thread pool in Node.js?', km: 'តើ C Library មួយណា ដែលគ្រប់គ្រង Event Loop និង Async I/O Thread Pool ក្នុង Node.js?' },
      options: [
        { id: '1', text: { en: 'V8 Engine', km: 'V8 Engine' }, isCorrect: false },
        { id: '2', text: { en: 'libuv', km: 'libuv' }, isCorrect: true },
        { id: '3', text: { en: 'npm', km: 'npm' }, isCorrect: false },
        { id: '4', text: { en: 'Babel', km: 'Babel' }, isCorrect: false }
      ],
      explanation: { en: 'libuv is the multi-platform C library that provides Node.js with its asynchronous event loop and thread pool.', km: 'libuv គឺជា C Library ដែលផ្តល់ Event Loop និង Thread Pool ដល់ Node.js។' }
    }
  ],
  capstoneProject: {
    id: 'taskflow-api-capstone',
    slug: 'taskflow-api-capstone',
    title: {
      en: 'TaskFlow API — Production RESTful Task Manager',
      km: 'TaskFlow API — ប្រព័ន្ធគ្រប់គ្រង Task Manager RESTful API'
    },
    description: {
      en: 'A real, working REST API task manager built with Node.js and Express: create, read, update, and delete tasks with persistent JSON-file storage (fs/promises), input validation, environment variables, and error handling middleware.',
      km: 'បង្កើត REST API គ្រប់គ្រង Task ពេញលេញជាមួយ Node.js & Express៖ CRUD, រក្សាទុកទិន្នន័យក្នុង JSON File (fs/promises), validation, environment variables និង error middleware។'
    },
    starterCode: {
      language: 'javascript',
      code: `import express from 'express';
import { readFile, writeFile } from 'fs/promises';

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = './tasks.json';

app.use(express.json());

// Helper to load tasks from JSON file
async function loadTasks() {
  try {
    const data = await readFile(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [{ id: 1, title: 'Learn Node.js Runtime', done: true }];
  }
}

// TODO: Implement GET /tasks, POST /tasks, PUT /tasks/:id, DELETE /tasks/:id

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(\`TaskFlow API active on http://localhost:\${PORT}\`);
});`
    },
    finalCode: `import express from 'express';
import { readFile, writeFile } from 'fs/promises';

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = './tasks.json';

app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next();
});

async function getTasks() {
  try {
    const data = await readFile(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    const defaultTasks = [{ id: 1, title: 'Complete Node.js Course', done: false }];
    await writeFile(DB_FILE, JSON.stringify(defaultTasks, null, 2));
    return defaultTasks;
  }
}

async function saveTasks(tasks) {
  await writeFile(DB_FILE, JSON.stringify(tasks, null, 2));
}

// GET /tasks
app.get('/tasks', async (req, res, next) => {
  try {
    let tasks = await getTasks();
    if (req.query.done !== undefined) {
      const isDone = req.query.done === 'true';
      tasks = tasks.filter(t => t.done === isDone);
    }
    res.json(tasks);
  } catch (err) { next(err); }
});

// GET /tasks/:id
app.get('/tasks/:id', async (req, res, next) => {
  try {
    const tasks = await getTasks();
    const task = tasks.find(t => t.id === Number(req.params.id));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) { next(err); }
});

// POST /tasks
app.post('/tasks', async (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title || typeof title !== 'string') {
      return res.status(400).json({ error: 'Field "title" is required and must be a string' });
    }
    const tasks = await getTasks();
    const newTask = { id: tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1, title: title.trim(), done: false };
    tasks.push(newTask);
    await saveTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) { next(err); }
});

// PUT /tasks/:id
app.put('/tasks/:id', async (req, res, next) => {
  try {
    const tasks = await getTasks();
    const task = tasks.find(t => t.id === Number(req.params.id));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    if (req.body.title !== undefined) task.title = String(req.body.title);
    if (req.body.done !== undefined) task.done = Boolean(req.body.done);
    await saveTasks(tasks);
    res.json(task);
  } catch (err) { next(err); }
});

// DELETE /tasks/:id
app.delete('/tasks/:id', async (req, res, next) => {
  try {
    let tasks = await getTasks();
    const exists = tasks.some(t => t.id === Number(req.params.id));
    if (!exists) return res.status(404).json({ error: 'Task not found' });
    tasks = tasks.filter(t => t.id !== Number(req.params.id));
    await saveTasks(tasks);
    res.status(204).send();
  } catch (err) { next(err); }
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('API Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

app.listen(PORT, () => console.log(\`TaskFlow API running on port \${PORT}\`));`,
    featureChecklist: {
      en: [
        'GET /tasks — list tasks with optional status filter (?done=true)',
        'GET /tasks/:id — fetch single task by numeric ID',
        'POST /tasks — input validation ensuring title is present',
        'PUT /tasks/:id — update task title or completion status',
        'DELETE /tasks/:id — delete task with 204 response',
        'Persistent JSON file storage using node:fs/promises',
        'Centralized Express error handling middleware'
      ],
      km: [
        'GET /tasks — បង្ហាញបញ្ជី Task និង Filter តាម ?done=true',
        'GET /tasks/:id — ទាញយក Task តែមួយតាម ID',
        'POST /tasks — ពិនិត្យ Validation Input មុននឹងបង្កើត',
        'PUT /tasks/:id — កែប្រែ Title ឬ Status របស់ Task',
        'DELETE /tasks/:id — លុប Task និងឆ្លើយតប Status 204',
        'រក្សាទុកទិន្នន័យក្នុង JSON File ដោយប្រើ fs/promises',
        'គ្រប់គ្រង Error រួមតាមរយៈ Express Error Handler Middleware'
      ]
    },
    sampleRequests: [
      {
        title: 'POST /tasks (Create Task)',
        method: 'POST',
        url: '/tasks',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Build TaskFlow Capstone REST API' }, null, 2),
        responseStatus: 201,
        responseBody: JSON.stringify({ id: 2, title: 'Build TaskFlow Capstone REST API', done: false }, null, 2)
      },
      {
        title: 'GET /tasks (List Tasks)',
        method: 'GET',
        url: '/tasks',
        responseStatus: 200,
        responseBody: JSON.stringify([{ id: 1, title: 'Learn Node.js Runtime', done: true }, { id: 2, title: 'Build TaskFlow Capstone REST API', done: false }], null, 2)
      }
    ]
  },
  modules: [
    /* MODULE 1 */
    {
      moduleNumber: 1,
      title: { en: 'Module 1: Introduction & Setup', km: 'មេរៀនទី ១៖ ការណែនាំ និងការរៀបចំដំបូង' },
      description: { en: 'Understanding Node.js, running scripts, REPL, and CLI arguments.', km: 'យល់ដឹងពី Node.js, ការដំណើរកូដ, REPL និង CLI arguments។' },
      lessons: [
        {
          id: 'node-m1-l1',
          slug: 'node-what-is-nodejs',
          moduleNumber: 1,
          lessonNumberInModule: 1,
          title: {
            en: '1.1 What is Node.js, and why run JavaScript outside the browser',
            km: '១.១ អ្វីទៅជា Node.js ហើយហេតុអ្វីត្រូវរត់ JavaScript នៅក្រៅ Browser'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Explain what Node.js is and how it enables server-side JavaScript execution.',
            km: 'ពន្យល់ពីអ្វីទៅជា Node.js និងរបៀបដែលវាអនុញ្ញាតឱ្យ JavaScript រត់លើ Server។'
          },
          explanation: {
            en: 'In the browser, JavaScript runs inside a sandbox that restricts file system and network access for security. Node.js takes Chrome\'s V8 engine and unlocks OS integration: direct file access, networking, and server process execution.',
            km: 'ក្នុង Browser, JavaScript រត់ក្នុង Sandbox ដែលមិនអនុញ្ញាតឱ្យប៉ះពាល់ File System ឬ OS។ Node.js យក Chrome V8 Engine ហើយបន្ថែម APIs សម្រាប់អាន/សរសេរ File និងបង្កើត Server លើ OS ផ្ទាល់។'
          },
          tutorial: {
            en: 'Check running Node.js runtime information using the global process object:',
            km: 'ពិនិត្យមើលព័ត៌មានប្រព័ន្ធ Node.js ដែលកំពុងរត់តាមរយៈ global process object៖'
          },
          starterCode: {
            language: 'javascript',
            code: `console.log("Hello from Node.js!");
console.log("Node version:", process.version);
console.log("OS Platform:", process.platform);`
          },
          simulatedOutput: `Hello from Node.js!\nNode version: v20.11.0\nOS Platform: linux`,
          quizQuestions: [
            {
              id: 'node-m1-l1-q1',
              question: {
                en: 'What engine powers Node.js JavaScript execution?',
                km: 'តើ Engine មួយណាដែលដំណើរកូដ JavaScript ក្នុង Node.js?'
              },
              options: [
                { id: 'a', text: { en: 'SpiderMonkey', km: 'SpiderMonkey' }, isCorrect: false },
                { id: 'b', text: { en: 'Google Chrome V8 Engine', km: 'Google Chrome V8 Engine' }, isCorrect: true },
                { id: 'c', text: { en: 'JavaScriptCore', km: 'JavaScriptCore' }, isCorrect: false },
                { id: 'd', text: { en: 'Chakra', km: 'Chakra' }, isCorrect: false }
              ],
              explanation: {
                en: 'Node.js is built directly on Chrome\'s V8 open-source JavaScript engine.',
                km: 'Node.js ត្រូវបានសាងសង់ឡើងដោយផ្ទាល់លើ Chrome V8 Engine។'
              }
            }
          ]
        },
        {
          id: 'node-m1-l2',
          slug: 'node-installing-and-first-script',
          moduleNumber: 1,
          lessonNumberInModule: 2,
          title: {
            en: '1.2 Installing Node.js and running your first script',
            km: '១.២ ការដំឡើង Node.js និងការដំណើរកូដដំបូង'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Install Node.js locally and execute JavaScript files via the command line.',
            km: 'ដំឡើង Node.js និងដំណើរកូដ JavaScript តាម Command Line។'
          },
          explanation: {
            en: 'Node scripts are executed using the terminal command `node filename.js`. Never open Node scripts in web browsers.',
            km: 'កូដ Node ត្រូវបានដំណើរកូដតាម Command `node filename.js` ក្នុង Terminal មិនមែនបើកក្នុង Browser ទេ'
          },
          tutorial: {
            en: 'Run a standalone backend JavaScript script file:',
            km: 'ការដំណើរកូដក្នុង Backend Script File ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `const appName = "TaskFlow Backend";
const version = 1.0;

console.log(\`[STARTUP] Launching \${appName} v\${version}\`);
console.log("Memory usage:", process.memoryUsage().heapUsed, "bytes");`
          },
          simulatedOutput: `[STARTUP] Launching TaskFlow Backend v1.0\nMemory usage: 4829104 bytes`
        },
        {
          id: 'node-m1-l3',
          slug: 'node-repl-vs-files',
          moduleNumber: 1,
          lessonNumberInModule: 3,
          title: {
            en: '1.3 The Node.js REPL vs running files',
            km: '១.៣ Node.js REPL និងការដំណើរកូដតាម File'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Use REPL (Read-Eval-Print Loop) for quick prototyping.',
            km: 'ប្រើប្រាស់ REPL (Read-Eval-Print Loop) សម្រាប់ល្បងកូដរហ័ស។'
          },
          explanation: {
            en: 'Running `node` without arguments opens the interactive REPL. It evaluates JavaScript code line-by-line in real time.',
            km: 'ការវាយ `node` ទទេរក្នុង Terminal នឹងបើក REPL សម្រាប់សាកល្បងកូដ JavaScript បន្ទាត់ៗភ្លាមៗ។'
          },
          tutorial: {
            en: 'Simulating REPL line-by-line expression evaluation:',
            km: 'ការធ្វើតេស្តរត់កូដ REPL បន្ទាត់ៗ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `// Simulating REPL interactive commands
const numbers = [10, 20, 30, 40];
const total = numbers.reduce((a, b) => a + b, 0);
console.log("REPL Evaluation Output:", total);`
          }
        },
        {
          id: 'node-m1-l4',
          slug: 'node-process-argv',
          moduleNumber: 1,
          lessonNumberInModule: 4,
          title: {
            en: '1.4 Reading command-line arguments with process.argv',
            km: '១.៤ ការអាន Command-line Arguments ជាមួយ process.argv'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Parse CLI inputs passed to Node.js scripts.',
            km: 'ទាញយក Parameters/Arguments ដែលបញ្ជូនពី Command Line។'
          },
          explanation: {
            en: '`process.argv` is an array containing CLI arguments. Index 0 is the Node executable path, index 1 is the file path, and index 2 onwards are user arguments.',
            km: '`process.argv` គឺជា Array រក្សាទុក CLI Arguments។ ធាតុទី ០ ជា Node binary, ធាតុទី ១ ជា File path និងធាតុទី ២ ឡើងទៅជា Arguments។'
          },
          tutorial: {
            en: 'Accessing CLI arguments via process.argv slice:',
            km: 'ទាញយក Arguments ពី process.argv.slice(2)៖'
          },
          starterCode: {
            language: 'javascript',
            code: `// Example: node app.js dev --port=8080
const args = process.argv.slice(2);
console.log("Received CLI Arguments:", args);

const envArg = args[0] || 'production';
console.log("Target Environment:", envArg);`
          }
        }
      ]
    },

    /* MODULE 2 */
    {
      moduleNumber: 2,
      title: { en: 'Module 2: The Event Loop & Modules', km: 'មេរៀនទី ២៖ Event Loop និងការបែងចែក Modules' },
      description: { en: 'Event loop mechanics, CommonJS vs ES Modules.', km: 'ដំណើរការ Event Loop, CommonJS និង ES Modules។' },
      lessons: [
        {
          id: 'node-m2-l1',
          slug: 'node-single-threaded-non-blocking',
          moduleNumber: 2,
          lessonNumberInModule: 1,
          title: {
            en: '2.1 Node\'s single-threaded, non-blocking model explained',
            km: '២.១ ស្ថាបត្យកម្ម Single-threaded និង Non-blocking I/O'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Explain how Node handles thousands of concurrent operations on a single thread.',
            km: 'ពន្យល់ពីរបៀបដែល Node គ្រប់គ្រង Requests ច្រើនក្នុងពេលតែមួយលើ Single Thread។'
          },
          explanation: {
            en: 'Node runs JavaScript on a single thread. Offloading I/O tasks to system kernel drivers or background thread pools allows it to remain non-blocking.',
            km: 'Node ដំណើរកូដលើ Thread តែមួយ។ វាបញ្ជូនកិច្ចការ I/O ធ្ងន់ៗទៅ Background Thread Pool ឬ OS Kernel ដើម្បីកុំឱ្យស្ទះ Thread ចម្បង។'
          },
          tutorial: {
            en: 'Observing asynchronous non-blocking event loops in action:',
            km: 'សង្កេតមើលដំណើរការ Asynchronous Non-blocking Event Loop ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `console.log("1. Starting async timer...");
setTimeout(() => {
  console.log("3. Timer callback executed from event loop!");
}, 100);
console.log("2. Main thread continues immediately without waiting!");`
          }
        },
        {
          id: 'node-m2-l2',
          slug: 'node-event-loop-deep-dive',
          moduleNumber: 2,
          lessonNumberInModule: 2,
          title: {
            en: '2.2 The event loop: call stack, callback queue, and microtasks',
            km: '២.២ យល់ដឹងជម្រៅពី Event Loop: Call Stack, Callback Queue, និង Microtasks'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Predict execution order between synchronous code, Promises (microtasks), and timers.',
            km: 'ព្យាករណ៍លំដាប់ការរត់កូដរវាង Sync code, Promises (Microtasks) និង Timers។'
          },
          explanation: {
            en: 'Promises and `process.nextTick()` run in the microtask queue, executing BEFORE timer callbacks in the macro task queue.',
            km: 'Promises រត់ក្នុង Microtask Queue ដែលមានអទិភាពខ្ពស់ជាង និងរត់មុន Timers Callbacks ជានិច្ច។'
          },
          tutorial: {
            en: 'Demonstrating execution precedence between Callstack, Microtasks, and Macrotasks:',
            km: 'បង្ហាញពីអទិភាពរវាង Callstack, Microtasks, និង Macrotasks៖'
          },
          starterCode: {
            language: 'javascript',
            code: `console.log("1: Synchronous start");

setTimeout(() => {
  console.log("4: setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise microtask");
});

console.log("2: Synchronous end");`
          },
          simulatedOutput: `1: Synchronous start\n2: Synchronous end\n3: Promise microtask\n4: setTimeout callback (macrotask)`
        },
        {
          id: 'node-m2-l3',
          slug: 'node-commonjs-modules',
          moduleNumber: 2,
          lessonNumberInModule: 3,
          title: {
            en: '2.3 CommonJS modules: require and module.exports',
            km: '២.៣ CommonJS modules: require និង module.exports'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Export and import modular code using CommonJS syntax.',
            km: 'ចែករំលែក និងនាំចូលកូដតាមប្រព័ន្ធ CommonJS ជាមួយ require/module.exports។'
          },
          explanation: {
            en: 'CommonJS is Node\'s legacy module system. File exports are attached to `module.exports` and imported via `require()`.',
            km: 'CommonJS គឺជាប្រព័ន្ធ Module ដើមរបស់ Node.js។ Exports ប្រើ `module.exports` ហើយ Imports ប្រើ `require()`។'
          },
          tutorial: {
            en: 'Using module.exports and require for CommonJS module sharing:',
            km: 'ការប្រើប្រាស់ module.exports និង require ក្នុង CommonJS ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `// Simulating CommonJS module structure
const mathModule = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

console.log("Exported CommonJS Add:", mathModule.add(15, 25));`
          }
        },
        {
          id: 'node-m2-l4',
          slug: 'node-es-modules',
          moduleNumber: 2,
          lessonNumberInModule: 4,
          title: {
            en: '2.4 ES Modules in Node: import/export and "type": "module"',
            km: '២.៤ ES Modules ក្នុង Node: import/export និង "type": "module"'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Use modern standard ES Modules in Node.js apps.',
            km: 'ប្រើប្រាស់ ES Modules ទំនើបជាមួយ import/export ក្នុង Node.js។'
          },
          explanation: {
            en: 'Setting `"type": "module"` in `package.json` activates ES Module syntax natively in Node.js files.',
            km: 'ការកំណត់ `"type": "module"` ក្នុង `package.json` អនុញ្ញាតឱ្យប្រើប្រាស់ `import`/`export` ដើម។'
          },
          tutorial: {
            en: 'Exporting named helpers with ES Modules syntax:',
            km: 'ការ Export Named Helpers តាមទ្រង់ទ្រាយ ES Modules ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `// ES Module Syntax
export const formatCurrency = (amount) => \`$\${amount.toFixed(2)}\`;

console.log("Formatted Price:", formatCurrency(49.9));`
          }
        },
        {
          id: 'node-m2-l5',
          slug: 'node-practice-commonjs-split',
          moduleNumber: 2,
          lessonNumberInModule: 5,
          title: {
            en: '2.5 Practice: split a script into two CommonJS modules',
            km: '២.៥ អនុវត្ត៖ ចែករំលែក Script ទៅជា Module ចំនួនពីរ'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Refactor monolithic code into clean module files.',
            km: 'រៀបចំកូដឡើងវិញដោយបំបែកជា File Modules ដាច់ដោយឡែក។'
          },
          explanation: {
            en: 'Splitting monolithic scripts into reusable modules improves testability and maintainability.',
            km: 'ការបំបែកកូដធំៗទៅជា Module តូចៗជួយឱ្យកូដងាយស្រួលគ្រប់គ្រង និងធ្វើតេស្ត។'
          },
          tutorial: {
            en: 'Refactoring task creation logic into a separate module:',
            km: 'ការរៀបចំកូដ Task Creation ទៅជា Module ដាច់ដោយឡែក៖'
          },
          starterCode: {
            language: 'javascript',
            code: `// Task Manager Helper Module
function createTask(id, title) {
  return { id, title, createdAt: new Date() };
}

const task = createTask(101, "Setup Database Schema");
console.log("Created Task Object:", task);`
          }
        }
      ]
    },

    /* MODULE 3 */
    {
      moduleNumber: 3,
      title: { en: 'Module 3: Core Built-in Modules', km: 'មេរៀនទី ៣៖ Core Built-in Modules ដើម' },
      description: { en: 'path, os, process, and events modules.', km: 'ការប្រើប្រាស់ path, os, process, និង events។' },
      lessons: [
        {
          id: 'node-m3-l1',
          slug: 'node-path-module',
          moduleNumber: 3,
          lessonNumberInModule: 1,
          title: {
            en: '3.1 The path module — working with file paths safely',
            km: '៣.១ The path module — ការរៀបចំ File Paths ឱ្យមានសុវត្ថិភាព'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Join and resolve cross-platform paths using node:path.',
            km: 'តភ្ជាប់ និងរៀបចំ File Paths ឱ្យដើរលើគ្រប់ OS ដោយប្រើ node:path។'
          },
          explanation: {
            en: 'Windows uses backslashes (`\\`) while POSIX uses forward slashes (`/`). `path.join()` handles OS differences automatically.',
            km: 'Windows ប្រើ `\\` ចំណែក Linux/Mac ប្រើ `/`។ `path.join()` រៀបចំសំអាត Path ដោយស្វ័យប្រវត្តិលើគ្រប់ OS។'
          },
          tutorial: {
            en: 'Safely constructing file system paths using path.join and path.extname:',
            km: 'ការបង្កើត File Path ដោយសុវត្ថិភាពតាមរយៈ path.join និង path.extname ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import path from 'path';

const fullPath = path.join('/usr', 'local', 'bin', 'node');
console.log("Joined Path:", fullPath);
console.log("File Extension:", path.extname('config.json'));
console.log("Filename:", path.basename(fullPath));`
          }
        },
        {
          id: 'node-m3-l2',
          slug: 'node-os-module',
          moduleNumber: 3,
          lessonNumberInModule: 2,
          title: {
            en: '3.2 The os module — reading system information',
            km: '៣.២ The os module — ការអានព័ត៌មានប្រព័ន្ធ OS'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Inspect CPU cores, free RAM memory, and uptime using node:os.',
            km: 'ពិនិត្យ CPU, RAM ទទេ និង Uptime ដោយប្រើ node:os។'
          },
          explanation: {
            en: 'The node:os module provides utility methods to query operating system memory, CPU architecture, and user details.',
            km: 'Module node:os ផ្តល់ទិន្នន័យប្រព័ន្ធដូចជា Memory, CPU និងប្រព័ន្ធប្រតិបត្តិការ។'
          },
          tutorial: {
            en: 'Querying host system hardware stats:',
            km: 'ទាញយកព័ត៌មាន Hardware ប្រព័ន្ធ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import os from 'os';

console.log("CPU Architecture:", os.arch());
console.log("Free Memory:", (os.freemem() / 1024 / 1024).toFixed(2), "MB");
console.log("CPU Cores Count:", os.cpus().length);`
          }
        },
        {
          id: 'node-m3-l3',
          slug: 'node-process-module',
          moduleNumber: 3,
          lessonNumberInModule: 3,
          title: {
            en: '3.3 The process module — environment variables and exit codes',
            km: '៣.៣ The process module — Environment Variables និង Exit Codes'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Access process environment variables and manage process exits.',
            km: 'ប្រើប្រាស់ process.env និងគ្រប់គ្រងការបិទ Process។'
          },
          explanation: {
            en: 'The global process object provides information about the current Node execution environment.',
            km: 'Global process object ផ្តល់ព័ត៌មានអំពីសភាពកំពុងរត់របស់ Node process។'
          },
          tutorial: {
            en: 'Reading environment variables and process settings:',
            km: 'ការអាន Environment Variables ក្នុង process.env ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV || 'development';

console.log(\`[SERVER CONFIG] Environment: \${nodeEnv} | Port: \${port}\`);`
          }
        },
        {
          id: 'node-m3-l4',
          slug: 'node-events-emitter',
          moduleNumber: 3,
          lessonNumberInModule: 4,
          title: {
            en: '3.4 The events module — EventEmitter and custom events',
            km: '៣.៤ The events module — EventEmitter និង Custom Events'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Publish and listen to application events using EventEmitter.',
            km: 'បង្កើត និងរង់ចាំស្តាប់ Custom Events ក្នុង Node.js។'
          },
          explanation: {
            en: 'EventEmitter provides event publication and subscription mechanisms core to Node\'s architecture.',
            km: 'EventEmitter ជាគ្រឹះនៃស្ថាបត្យកម្ម Event-driven របស់ Node.js។'
          },
          tutorial: {
            en: 'Emitting and catching order placement events:',
            km: 'ការបង្កើត និងស្តាប់ Event ពេលមានការកុម្ម៉ង់ទំនិញ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import { EventEmitter } from 'events';

const orderEmitter = new EventEmitter();

orderEmitter.on('orderPlaced', (order) => {
  console.log(\`[NOTIFICATION] New order #\${order.id} received for \${order.item}\`);
});

orderEmitter.emit('orderPlaced', { id: 1001, item: 'MacBook Pro' });`
          }
        },
        {
          id: 'node-m3-l5',
          slug: 'node-practice-event-logger',
          moduleNumber: 3,
          lessonNumberInModule: 5,
          title: {
            en: '3.5 Practice: build a small custom event emitter that logs messages',
            km: '៣.៥ អនុវត្ត៖ បង្កើត Custom Event Emitter សម្រាប់កត់ត្រា Log Messages'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build an event-driven system logger.',
            km: 'បង្កើតប្រព័ន្ធ Event-driven Logger។'
          },
          explanation: {
            en: 'Extending EventEmitter allows custom domain objects to emit specialized lifecycle events.',
            km: 'ការ Extend EventEmitter ធ្វើឱ្យ Class អាចបង្កើត Events ដោយខ្លួនឯងបាន។'
          },
          tutorial: {
            en: 'Creating a custom logger class extending EventEmitter:',
            km: 'ការបង្កើត Class Logger ដែល Extend ពី EventEmitter ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import { EventEmitter } from 'events';

class SystemLogger extends EventEmitter {
  log(message) {
    this.emit('messageLogged', { timestamp: new Date(), message });
  }
}

const logger = new SystemLogger();
logger.on('messageLogged', (data) => console.log(\`[\${data.timestamp.toISOString()}] \${data.message}\`));

logger.log("Server initialized successfully");`
          }
        }
      ]
    },

    /* MODULE 4 */
    {
      moduleNumber: 4,
      title: { en: 'Module 4: Files & Streams', km: 'មេរៀនទី ៤៖ ការធ្វើការជាមួយ Files និង Streams' },
      description: { en: 'fs module, fs/promises, streams, and file statistics.', km: 'ការប្រើប្រាស់ fs module, fs/promises, និង streams។' },
      lessons: [
        {
          id: 'node-m4-l1',
          slug: 'node-fs-sync-vs-async',
          moduleNumber: 4,
          lessonNumberInModule: 1,
          title: {
            en: '4.1 Reading and writing files with fs (sync vs async)',
            km: '៤.១ ការអាន/សរសេរ File ជាមួយ fs (Sync vs Async)'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Differentiate blocking synchronous fs methods from non-blocking callback methods.',
            km: 'យល់ដឹងពីភាពខុសគ្នារវាង Synchronous ( Blocking) និង Asynchronous (Non-blocking) File methods'
          },
          explanation: {
            en: 'Avoid `readFileSync` in server request handlers as it freezes the main thread. Always prefer async file operations.',
            km: 'ចៀសវាងការប្រើ `readFileSync` ក្នុង Request handlers ព្រោះវាធ្វើឱ្យ Server គាំងរង់ចាំ។ ត្រូវប្រើ Async ជានិច្ច'
          },
          tutorial: {
            en: 'Writing files asynchronously with callbacks:',
            km: 'ការសរសេរ File ដោយ Asynchronous ជាមួយ Callback ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import fs from 'fs';

// Non-blocking callback approach
fs.writeFile('./demo.txt', 'Node.js Non-Blocking File I/O', (err) => {
  if (err) throw err;
  console.log("File written asynchronously!");
});`
          }
        },
        {
          id: 'node-m4-l2',
          slug: 'node-fs-promises-async-await',
          moduleNumber: 4,
          lessonNumberInModule: 2,
          title: {
            en: '4.2 The fs/promises API with async/await',
            km: '៤.២ ការប្រើប្រាស់ fs/promises API ជាមួយ async/await'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Read, write, and append files using fs/promises and async/await.',
            km: 'អាន សរសេរ និងបន្ថែមទិន្នន័យលើ File ដោយប្រើ fs/promises និង async/await។'
          },
          explanation: {
            en: '`node:fs/promises` provides clean Promise-returning equivalents for all standard filesystem methods.',
            km: '`node:fs/promises` ផ្តល់នូវការអាន/សរសេរ File តាម Promise យ៉ាងស្អាត។'
          },
          tutorial: {
            en: 'Writing and reading JSON configuration files with fs/promises:',
            km: 'ការអាន និងសរសេរ JSON File ជាមួយ fs/promises ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import { readFile, writeFile } from 'fs/promises';

async function processFile() {
  try {
    await writeFile('tasks.json', JSON.stringify([{ id: 1, text: "Learn Promises" }]));
    const content = await readFile('tasks.json', 'utf-8');
    console.log("Read JSON Content:", JSON.parse(content));
  } catch (err) {
    console.error("File error:", err.message);
  }
}

await processFile();`
          }
        },
        {
          id: 'node-m4-l3',
          slug: 'node-streams-intro',
          moduleNumber: 4,
          lessonNumberInModule: 3,
          title: {
            en: '4.3 Introduction to streams — reading large files efficiently',
            km: '៤.៣ ការស្វែងយល់ពី Streams — ការអាន File ធំៗដោយមិនប្រើប្រាស់ Memory ច្រើន'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Stream large data chunks instead of reading entire files into RAM memory.',
            km: 'អានទិន្នន័យជាកញ្ចប់ៗ (Chunks) តាមរយៈ Streams ដោយមិនបាច់ Load ចូល RAM ទាំងអស់។'
          },
          explanation: {
            en: 'Readable streams process input chunk by chunk, keeping memory consumption low even for multi-gigabyte files.',
            km: 'Streams ដំណើរការអានទិន្នន័យជា Chunk បន្តិចម្តងៗ ដោយមិនស៊ី RAM ច្រើន។'
          },
          tutorial: {
            en: 'Consuming readable stream data events:',
            km: 'ការអាន Readable Stream តាមរយៈ Data Event ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import { createReadStream } from 'fs';

// Stream reads chunk by chunk
const readStream = createReadStream('./tasks.json', { encoding: 'utf-8', highWaterMark: 64 });
readStream.on('data', (chunk) => {
  console.log("Received Stream Chunk:", chunk.length, "bytes");
});`
          }
        },
        {
          id: 'node-m4-l4',
          slug: 'node-practice-word-counter',
          moduleNumber: 4,
          lessonNumberInModule: 4,
          title: {
            en: '4.4 Practice: build a script that reads a text file and counts word frequency',
            km: '៤.៤ អនុវត្ត៖ បង្កើត Script អាន File និងរាប់ចំនួនពាក្យ'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build a text word counter utility using fs/promises.',
            km: 'បង្កើត Utility រាប់ចំនួនពាក្យក្នុង File។'
          },
          explanation: {
            en: 'Combining string regex matching with file reading allows parsing document metrics.',
            km: 'ការបូកបញ្ចូល Regex ជាមួយការអាន File អនុញ្ញាតឱ្យគណនាចំនួនពាក្យបាន។'
          },
          tutorial: {
            en: 'Parsing word frequencies in text strings:',
            km: 'គណនាចំនួនពាក្យក្នុងអត្ថបទ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `const sampleText = "Node.js is asynchronous and event driven. Node.js is fast.";
const words = sampleText.toLowerCase().match(/\\w+/g);

const frequency = {};
words.forEach(w => frequency[w] = (frequency[w] || 0) + 1);

console.log("Word Frequency:", frequency);`
          }
        }
      ]
    },

    /* MODULE 5 */
    {
      moduleNumber: 5,
      title: { en: 'Module 5: Asynchronous Node in Depth', km: 'មេរៀនទី ៥៖ ការគ្រប់គ្រង Async កម្រិតខ្ពស់' },
      description: { en: 'Callbacks, Promises, async/await, and error handling.', km: 'Callbacks, Promises, async/await, និង Error handling។' },
      lessons: [
        {
          id: 'node-m5-l1',
          slug: 'node-callbacks-callback-hell',
          moduleNumber: 5,
          lessonNumberInModule: 1,
          title: {
            en: '5.1 Callbacks and the "callback hell" problem',
            km: '៥.១ Callbacks និងបញ្ហា Callback Hell'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Identify callback hell and understand error-first callback conventions.',
            km: 'ស្គាល់ទម្រង់ Callback Hell និង Error-first callback convention'
          },
          explanation: {
            en: 'Node callbacks conventionally follow `(err, data)` signatures. Deeply nested callbacks create unmaintainable callback hell.',
            km: 'Callback ក្នុង Node តែងប្រើទម្រង់ `(err, data)`។ ការប្រើ Callback ជាន់ៗច្រើនបង្កើតជា Callback Hell។'
          },
          tutorial: {
            en: 'Executing error-first callback patterns:',
            km: 'ការសរសេរកូដតាមទម្រង់ Error-first Callback ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `// Error-first callback pattern
function fetchUser(id, callback) {
  setTimeout(() => {
    if (!id) return callback(new Error("Missing ID"));
    callback(null, { id, name: "Bora" });
  }, 100);
}

fetchUser(1, (err, user) => {
  if (err) return console.error(err);
  console.log("Fetched User via Callback:", user.name);
});`
          }
        },
        {
          id: 'node-m5-l2',
          slug: 'node-promises-chaining',
          moduleNumber: 5,
          lessonNumberInModule: 2,
          title: {
            en: '5.2 Promises in Node: creating, chaining, and error handling',
            km: '៥.២ Promises ក្នុង Node: ការបង្កើត, Chaining និង Catching Error'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Create custom Promises and chain .then() / .catch() handlers.',
            km: 'បង្កើត Custom Promises និងប្រើប្រាស់ .then() / .catch()។'
          },
          explanation: {
            en: 'Promises represent eventual completion or failure of asynchronous tasks, preventing nested callback hell.',
            km: 'Promise ជា Object តំណាងឱ្យលទ្ធផលនៃ Async task ដែលជួយដោះស្រាយបញ្ហា Callback Hell។'
          },
          tutorial: {
            en: 'Constructing and chaining asynchronous Promises:',
            km: 'ការបង្កើត និងតភ្ជាប់ .then() លើ Promise ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

delay(100)
  .then(() => "Step 1 Complete")
  .then((msg) => {
    console.log(msg);
    return "Step 2 Complete";
  })
  .then(console.log);`
          }
        },
        {
          id: 'node-m5-l3',
          slug: 'node-async-await-try-catch',
          moduleNumber: 5,
          lessonNumberInModule: 3,
          title: {
            en: '5.3 async/await in real Node code, and try/catch patterns',
            km: '៥.៣ async/await ក្នុងកូដជាក់ស្តែង និងទម្រង់ try/catch'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Implement robust try/catch boundaries around async functions.',
            km: 'ប្រើប្រាស់ try/catch ជុំវិញ async functions ឱ្យមានសុវត្ថិភាព។'
          },
          explanation: {
            en: 'Async/await flattens asynchronous code into readable synchronous-looking syntax. Always catch errors with try/catch.',
            km: 'Async/await ធ្វើឱ្យកូដ Promise អានស្រួលដូចកូដធម្មតា។ ត្រូវប្រើ try/catch ចាប់ Error ជានិច្ច'
          },
          tutorial: {
            en: 'Writing readable async pipelines with try/catch:',
            km: 'ការសរសេរ async pipeline ជាមួយ try/catch ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `async function runPipeline() {
  try {
    const result = await Promise.resolve("Data Processed");
    console.log("Pipeline Success:", result);
  } catch (err) {
    console.error("Pipeline Failure:", err.message);
  }
}

await runPipeline();`
          }
        },
        {
          id: 'node-m5-l4',
          slug: 'node-practice-convert-callback-to-async',
          moduleNumber: 5,
          lessonNumberInModule: 4,
          title: {
            en: '5.4 Practice: convert a callback-based script to async/await',
            km: '៥.៤ អនុវត្ត៖ បម្លែង Callback Script ទៅជា async/await'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Refactor legacy callback APIs to modern async/await syntax.',
            km: 'បម្លែង Legacy Callback APIs មកជា async/await ទំនើប។'
          },
          explanation: {
            en: 'Node\'s `util.promisify` automatically converts standard `(err, data)` callback functions into Promise-returning functions.',
            km: '`util.promisify` បម្លែង Callback function ទៅជា Promise function ដោយស្វ័យប្រវត្តិ។'
          },
          tutorial: {
            en: 'Promisifying legacy callback handlers:',
            km: 'ការបម្លែង Callback Function ទៅជា Promise Function ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import { promisify } from 'util';

const legacyTask = (time, cb) => setTimeout(() => cb(null, "Finished"), time);
const promiseTask = promisify(legacyTask);

const result = await promiseTask(50);
console.log("Promisified Result:", result);`
          }
        }
      ]
    },

    /* MODULE 6 */
    {
      moduleNumber: 6,
      title: { en: 'Module 6: npm & the Package Ecosystem', km: 'មេរៀនទី ៦៖ npm និង Package Ecosystem' },
      description: { en: 'package.json, lockfiles, semantic versioning, dependencies.', km: 'package.json, package-lock.json, semver និង npm modules។' },
      lessons: [
        {
          id: 'node-m6-l1',
          slug: 'node-npm-init-project',
          moduleNumber: 6,
          lessonNumberInModule: 1,
          title: {
            en: '6.1 What npm is, and initializing a project with npm init',
            km: '៦.១ អ្វីទៅជា npm និងការបង្កើត Project ដំបូងជាមួយ npm init'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Initialize Node project manifests using npm init -y.',
            km: 'បង្កើត package.json សម្រាប់ Project ដោយប្រើ npm init -y'
          },
          explanation: {
            en: 'npm (Node Package Manager) maintains the world\'s largest registry of reusable JavaScript libraries and manages dependencies.',
            km: 'npm ជាប្រព័ន្ធគ្រប់គ្រង Package និង Library របស់ JavaScript។'
          },
          tutorial: {
            en: 'Inspecting package.json structure:',
            km: 'ពិនិត្យរចនាសម្ព័ន្ធ package.json ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `const packageManifest = {
  name: "taskflow-backend",
  version: "1.0.0",
  type: "module",
  scripts: { start: "node server.js" }
};

console.log("Generated package.json:\n", JSON.stringify(packageManifest, null, 2));`
          }
        },
        {
          id: 'node-m6-l2',
          slug: 'node-package-json-lockfile',
          moduleNumber: 6,
          lessonNumberInModule: 2,
          title: {
            en: '6.2 package.json and package-lock.json explained',
            km: '៦.២ យល់ដឹងពី package.json និង package-lock.json'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Differentiate exact lockfile version locks from package manifests.',
            km: 'យល់ដឹងពីភាពខុសគ្នារវាង package.json និង package-lock.json'
          },
          explanation: {
            en: '`package.json` specifies allowed version ranges, while `package-lock.json` freezes exact installed version trees across environments.',
            km: '`package.json` កំណត់ Version range, ចំណែក `package-lock.json` កត់ត្រា Version ពិតប្រាកដដែលបានដំឡើង។'
          },
          tutorial: {
            en: 'Understanding dependency resolution roles:',
            km: 'យល់ដឹងពីតួនាទីរបស់ package-lock.json ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `console.log("package.json declares direct dependencies.");
console.log("package-lock.json locks the exact dependency tree version hashes.");`
          }
        },
        {
          id: 'node-m6-l3',
          slug: 'node-npm-semantic-versioning',
          moduleNumber: 6,
          lessonNumberInModule: 3,
          title: {
            en: '6.3 Installing dependencies and semantic versioning (SemVer)',
            km: '៦.៣ ការដំឡើង Package និងយល់ដឹងពី Semantic Versioning (SemVer)'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Understand Major.Minor.Patch versioning rules (e.g., ^1.4.2).',
            km: 'យល់ដឹងពីការកំណត់ Version: Major.Minor.Patch (ឧទាហរណ៍ ^1.4.2)។'
          },
          explanation: {
            en: 'Semantic versioning follows MAJOR.MINOR.PATCH rules. Caret (`^`) allows minor updates, while tilde (`~`) locks patch updates.',
            km: 'SemVer ប្រើស្តង់ដារ MAJOR.MINOR.PATCH។ សញ្ញា `^` អនុញ្ញាត Update Minor, ចំណែក `~` អនុញ្ញាតតែ Patch។'
          },
          tutorial: {
            en: 'Parsing SemVer version segments:',
            km: 'ការបំបែកលេខ Version តាមស្តង់ដារ SemVer ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `const version = "2.4.1";
const [major, minor, patch] = version.split('.').map(Number);

console.log(\`Major: \${major} (Breaking changes)\`);
console.log(\`Minor: \${minor} (New backward-compatible features)\`);
console.log(\`Patch: \${patch} (Bug fixes)\`);`
          }
        },
        {
          id: 'node-m6-l4',
          slug: 'node-practice-third-party-package',
          moduleNumber: 6,
          lessonNumberInModule: 4,
          title: {
            en: '6.4 Practice: add and use a third-party package in a script',
            km: '៦.៤ អនុវត្ត៖ ការប្រើប្រាស់ 3rd Party Package ក្នុង Script'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Import and utilize external npm packages.',
            km: 'នាំចូល និងប្រើប្រាស់ npm packages ខាងក្រៅ។'
          },
          explanation: {
            en: 'External packages extend Node core capabilities with rich community tools.',
            km: 'Packages ខាងក្រៅជួយបន្ថែម Functionality ដល់ Node.js។'
          },
          tutorial: {
            en: 'Simulating nanoid identifier creation:',
            km: 'ការបង្កើត Unique ID ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `// Simulating unique ID generator package (nanoid)
function generateNanoId(size = 10) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 36).toString(36)).join('');
}

console.log("Generated Random ID:", generateNanoId());`
          }
        }
      ]
    },

    /* MODULE 7 */
    {
      moduleNumber: 7,
      title: { en: 'Module 7: Building Servers & APIs', km: 'មេរៀនទី ៧៖ ការសាងសង់ Servers និង REST APIs' },
      description: { en: 'Native http module, Express routing, middleware, error handling.', km: 'Module node:http, Express.js, middleware, និង error handling។' },
      lessons: [
        {
          id: 'node-m7-l1',
          slug: 'node-raw-http-server',
          moduleNumber: 7,
          lessonNumberInModule: 1,
          title: {
            en: '7.1 Building a raw HTTP server with Node\'s built-in http module',
            km: '៧.១ បង្កើត HTTP Server ដើមដោយប្រើ node:http'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Construct a web server using node:http without external frameworks.',
            km: 'បង្កើត Web Server ដោយប្រើប្រាស់តែ Standard Library node:http។'
          },
          explanation: {
            en: '`node:http` exposes request/response streams. Understanding native HTTP servers reveals how frameworks like Express work.',
            km: '`node:http` ជា Module ដើមសម្រាប់បង្កើត Server។ ការយល់ដឹងពីវាជួយឱ្យយល់ពី Express។'
          },
          tutorial: {
            en: 'Creating a native HTTP server callback handler:',
            km: 'ការបង្កើត Native HTTP Server ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: "Native Node.js Server Active" }));
});

console.log("HTTP Server created successfully.");`
          }
        },
        {
          id: 'node-m7-l2',
          slug: 'node-introducing-express',
          moduleNumber: 7,
          lessonNumberInModule: 2,
          title: {
            en: '7.2 Why frameworks exist — introducing Express',
            km: '៧.២ ហេតុអ្វីបានជាត្រូវប្រើ Framework — ការណែនាំ Express.js'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Explain why Express simplifies URL routing, middleware, and request body parsing.',
            km: 'ពន្យល់ពីអត្ថប្រយោជន៍ Express.js ក្នុងការសម្រួល Routing និង Middleware'
          },
          explanation: {
            en: 'Express provides an elegant routing abstraction layer over Node\'s low-level HTTP request events.',
            km: 'Express ផ្តល់នូវ Routing និង Middleware ងាយស្រួលជាងការប្រើ node:http ដើម។'
          },
          tutorial: {
            en: 'Initializing a basic Express server route:',
            km: 'ការបង្កើត Server រហ័សជាមួយ Express.js ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import express from 'express';

const app = express();
app.get('/', (req, res) => res.send("Welcome to Express.js!"));

console.log("Express App initialized.");`
          }
        },
        {
          id: 'node-m7-l3',
          slug: 'node-express-crud-routing',
          moduleNumber: 7,
          lessonNumberInModule: 3,
          title: {
            en: '7.3 Express routing: handling GET, POST, PUT, DELETE requests',
            km: '៧.៣ Express routing: ការធ្វើ CRUD ជាមួយ GET, POST, PUT, DELETE'
          },
          durationMinutes: 30,
          difficulty: 'Intermediate',
          objective: {
            en: 'Implement standard RESTful endpoints in Express.',
            km: 'បង្កើត RESTful API Endpoints ជាមួយ Express។'
          },
          explanation: {
            en: 'In Express, route handlers correspond directly to HTTP verbs: app.get(), app.post(), app.put(), and app.delete().',
            km: 'ក្នុង Express, Route Handlers ត្រូវគ្នានឹង HTTP Methods: app.get(), app.post(), app.put(), និង app.delete()។'
          },
          tutorial: {
            en: 'Building GET and POST endpoints for managing task lists:',
            km: 'ការបង្កើត GET និង POST Endpoints សម្រាប់គ្រប់គ្រង Task List ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import express from 'express';

const app = express();
app.use(express.json());

let tasks = [{ id: 1, title: "Learn Express", done: false }];

app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res) => {
  const newTask = { id: tasks.length + 1, title: req.body.title || 'Untitled', done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

console.log("Express REST Router defined.");`
          }
        },
        {
          id: 'node-m7-l4',
          slug: 'node-express-middleware',
          moduleNumber: 7,
          lessonNumberInModule: 4,
          title: {
            en: '7.4 Express middleware: logging, JSON parsing, and custom middleware',
            km: '៧.៤ Express middleware: Logging, JSON Parsing និង Custom Middleware'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Write custom request interceptor middleware functions with next().',
            km: 'សរសេរ Custom Middleware ដើម្បីស្ទាក់ Request ដោយប្រើ next()។'
          },
          explanation: {
            en: 'Middleware functions have access to `(req, res, next)`. Calling `next()` passes control to the next handler.',
            km: 'Middleware ទទួល `(req, res, next)`។ ការហៅ `next()` បញ្ជូន Request ទៅកាន់ Handler បន្ទាប់'
          },
          tutorial: {
            en: 'Writing custom request logging middleware:',
            km: 'ការសរសេរ Custom Logging Middleware ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import express from 'express';
const app = express();

// Custom Logger Middleware
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next(); // Pass control to next handler
});`
          }
        },
        {
          id: 'node-m7-l5',
          slug: 'node-express-error-handling',
          moduleNumber: 7,
          lessonNumberInModule: 5,
          title: {
            en: '7.5 Centralized error handling in an Express app',
            km: '៧.៥ ការគ្រប់គ្រង Error រួម (Centralized Error Handling) ក្នុង Express'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Catch unexpected exceptions with 4-parameter error handler middleware (err, req, res, next).',
            km: 'ចាប់រាល់ Error ក្នុង Express ដោយប្រើ Error Middleware ៤ parameters (err, req, res, next)។'
          },
          explanation: {
            en: 'Express identifies error handlers by their 4-argument signature `(err, req, res, next)`. Passing errors to `next(err)` triggers it.',
            km: 'Express ស្គាល់ Error Middleware តាមរយៈ Parameter ៤ `(err, req, res, next)`។'
          },
          tutorial: {
            en: 'Registering global error boundary handlers:',
            km: 'ការបង្កើត Global Error Boundary Handler ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import express from 'express';
const app = express();

// Global Express Error Boundary
app.use((err, req, res, next) => {
  console.error("Caught Exception:", err.message);
  res.status(500).json({ error: "Internal Server Error", details: err.message });
});`
          }
        },
        {
          id: 'node-m7-l6',
          slug: 'node-practice-express-two-routes',
          moduleNumber: 7,
          lessonNumberInModule: 6,
          title: {
            en: '7.6 Practice: build a two-route Express API (list + create)',
            km: '៧.៦ អនុវត្ត៖ បង្កើត Express API ដែលមានពីរ Routes (List + Create)'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build a working Express mini-API with GET and POST handlers.',
            km: 'សាងសង់ Express Mini-API ដោយមាន GET និង POST Handlers។'
          },
          explanation: {
            en: 'Combining GET and POST routes forms the core foundation of RESTful web APIs.',
            km: 'ការបូកបញ្ចូល GET និង POST ជាគ្រឹះបង្កើត REST API។'
          },
          tutorial: {
            en: 'Implementing list and create item routes:',
            km: 'ការបង្កើត Route បង្ហាញបញ្ជី និងបង្កើត Item ថ្មី៖'
          },
          starterCode: {
            language: 'javascript',
            code: `import express from 'express';
const app = express();
app.use(express.json());

const items = ['Express', 'Node.js'];

app.get('/items', (req, res) => res.json(items));
app.post('/items', (req, res) => {
  if (req.body.name) items.push(req.body.name);
  res.status(201).json(items);
});

console.log("Two-route Express API defined.");`
          }
        }
      ]
    },

    /* MODULE 8 */
    {
      moduleNumber: 8,
      title: { en: 'Module 8: Debugging, Config & Capstone', km: 'មេរៀនទី ៨៖ Debugging, Config & គម្រោង Capstone' },
      description: { en: 'Debugging, dotenv config, input validation, TaskFlow capstone.', km: 'Debugging, dotenv, input validation, គម្រោង TaskFlow Capstone API' },
      lessons: [
        {
          id: 'node-m8-l1',
          slug: 'node-debugging-and-logging',
          moduleNumber: 8,
          lessonNumberInModule: 1,
          title: {
            en: '8.1 Debugging Node apps: console methods and logging practices',
            km: '៨.១ ការ Debug កូដ Node.js៖ console methods និងការកត់ត្រា Log'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Use console.error, console.table, and Node inspectors to debug apps.',
            km: 'ប្រើប្រាស់ console.error, console.table និង Node debugger'
          },
          explanation: {
            en: 'Utilize `console.time`, `console.table`, and Node inspector flags for execution profiling and debugging.',
            km: 'ប្រើប្រាស់ `console.time` និង `console.table` ដើម្បីពិនិត្យល្បឿន និងទិន្នន័យ។'
          },
          tutorial: {
            en: 'Profiling code execution times with console.time:',
            km: 'ការវាស់ស្ទង់រយៈពេលរត់កូដជាមួយ console.time ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `const users = [
  { id: 1, name: "Sophal", role: "admin" },
  { id: 2, name: "Bora", role: "developer" }
];

console.table(users);
console.time("DB_QUERY");
// Simulating workload
for(let i=0; i<100000; i++) {}
console.timeEnd("DB_QUERY");`
          }
        },
        {
          id: 'node-m8-l2',
          slug: 'node-dotenv-environment-config',
          moduleNumber: 8,
          lessonNumberInModule: 2,
          title: {
            en: '8.2 Environment variables and .env files with dotenv',
            km: '៨.២ Environment variables និងការប្រើប្រាស់ .env ជាមួយ dotenv'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Load secret configuration variables from local .env files into process.env.',
            km: 'អានការកំណត់ និង API Keys ពី .env file ចូលទៅក្នុង process.env'
          },
          explanation: {
            en: 'Keep API keys out of source control by injecting `.env` file variables into `process.env` at startup.',
            km: 'រក្សាទុក API Keys ក្នុង .env file ដើម្បីការពារកុំឱ្យ Leak ចូល Git។'
          },
          tutorial: {
            en: 'Simulating dotenv environment initialization:',
            km: 'ការដំឡើង Environment Variables តាម dotenv ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `// Simulating dotenv config load
process.env.DB_PASS = "supersecret_password_123";

console.log("Database Password Loaded:", process.env.DB_PASS ? "*******" : "Missing");`
          }
        },
        {
          id: 'node-m8-l3',
          slug: 'node-input-validation-defensive',
          moduleNumber: 8,
          lessonNumberInModule: 3,
          title: {
            en: '8.3 Basic input validation and defensive error handling in an API',
            km: '៨.៣ ការធ្វើ Input Validation និងការការពារ Error ក្នុង API'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Sanitize and validate incoming JSON client request payloads.',
            km: 'ពិនិត្យ Validation Payload ពី Client ដើម្បីការពារកំហុសប្រព័ន្ធ។'
          },
          explanation: {
            en: 'Validate input types and presence before executing business logic to prevent runtime exceptions.',
            km: 'ត្រូវពិនិត្យប្រភេទ និងវត្តមានទិន្នន័យពី Client មុននឹងដំណើរកូដ។'
          },
          tutorial: {
            en: 'Validating payload properties defensively:',
            km: 'ការធ្វើ Validation លើ Request Payload ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `function validateTaskInput(body) {
  if (!body.title || typeof body.title !== 'string') {
    return { valid: false, error: 'Title is required and must be a string' };
  }
  return { valid: true };
}

console.log("Validation Check:", validateTaskInput({ title: "Build API" }));`
          }
        },
        {
          id: 'node-m8-l4',
          slug: 'node-planning-taskflow-capstone',
          moduleNumber: 8,
          lessonNumberInModule: 4,
          title: {
            en: '8.4 Planning the TaskFlow capstone (routes, data model, features)',
            km: '៨.៤ ការរៀបចំផែនការបង្កើត TaskFlow Capstone API'
          },
          durationMinutes: 30,
          difficulty: 'Intermediate',
          objective: {
            en: 'Design the TaskFlow API route architecture, JSON schema, and file persistence flow.',
            km: 'រៀបចំស្ថាបត្យកម្ម Endpoints, JSON schema និង File persistence សម្រាប់ TaskFlow API'
          },
          explanation: {
            en: 'Designing endpoint contracts and data persistence schemas prior to coding leads to clean API design.',
            km: 'ការរៀបចំ Schema និង Endpoints ជាមុនជួយឱ្យការសរសេរ API មានរបៀបរៀបរយ'
          },
          tutorial: {
            en: 'Defining TaskFlow REST API route specifications:',
            km: 'កំណត់ Specification រចនាសម្ព័ន្ធ TaskFlow API Routes ៖'
          },
          starterCode: {
            language: 'javascript',
            code: `const taskflowRoutes = [
  "GET /tasks — List all tasks",
  "GET /tasks/:id — Get task by ID",
  "POST /tasks — Create new task",
  "PUT /tasks/:id — Update task title or status",
  "DELETE /tasks/:id — Remove task"
];

console.log("TaskFlow REST API Spec:\n", taskflowRoutes.join('\n'));`
          }
        }
      ]
    }
  ]
};
