import { BackendModule } from '../types/backendClass';

export const backendModulesData: BackendModule[] = [
  {
    id: 'm1',
    moduleNumber: 1,
    title: {
      en: 'Module 1: Backend Foundations',
      km: 'មេរៀនទី ១៖ មូលដ្ឋានគ្រឹះ Backend',
    },
    description: {
      en: 'Understand how servers work, client-server communications, HTTP protocols, headers, status codes, and terminal CLI setups.',
      km: 'យល់ដឹងពីដំណើរការនៃ Server, ការទំនាក់ទំនងរវាង Client-Server, ពិធីការ HTTP, Status codes និងបញ្ជា Terminal CLI។',
    },
    lessons: [
      {
        id: 'm1-l1',
        slug: 'client-server-model',
        moduleNumber: 1,
        lessonNumberInModule: 1,
        title: {
          en: '1. What Backend Development Actually Does',
          km: '១. តើការអភិវឌ្ឍ Backend ធ្វើអ្វីពិតប្រាកដ?',
        },
        durationMinutes: 25,
        difficulty: 'Beginner',
        explanation: {
          en: `Backend development powers the hidden engine behind modern web applications. While frontend handles user interfaces, the backend manages business logic, data persistence, security, and third-party integrations.

In a Client-Server Architecture:
- Client (Frontend): Mobile apps, Web browsers (React, Vue, HTML/CSS).
- Server (Backend): Listens for network requests, processes business rules, talks to database servers, and returns structured data (usually JSON or HTML).
- Database: Stores persistent information like accounts, posts, transactions, and settings.`,
          km: `ការអភិវឌ្ឍ Backend គឺជាម៉ាស៊ីនលាក់ខ្លួនដែលដំណើរការកម្មវិធី Web ទំនើបៗ។ ខណៈដែល Frontend គ្រប់គ្រងលើផ្ទៃ UI, Backend គ្រប់គ្រងលើ Business Logic, ការរក្សាទុកទិន្នន័យ, សុវត្ថិភាព និងការភ្ជាប់ជាមួយសេវាកម្មខាងក្រៅ។

នៅក្នុងស្ថាបត្យកម្ម Client-Server:
- Client (Frontend): កម្មវិធីទូរស័ព្ទ, កម្មវិធីរុករក Web (React, Vue, HTML/CSS)
- Server (Backend): រង់ចាំទទួល Request តាមបណ្តាញ, ចាត់ចែងវិធានអាជីវកម្ម, ទាក់ទង Database និងឆ្លើយតបទិន្នន័យ JSON/HTML មកវិញ
- Database: រក្សាទុកព័ត៌មានអចិន្ត្រៃយ៍ដូចជា គណនី, អត្ថបទ, ប្រតិបត្តិការ និង ការកំណត់ផ្សេងៗ។`,
        },
        tutorial: {
          en: `Let's visualize a simple backend flow in Node.js where a request arrives for user data and the server generates a JSON response.

Key components in any backend request handling:
1. Entry Listener: Opening a network socket on a port (e.g. 3000).
2. Request Parser: Inspecting HTTP Method (GET, POST) and URL path (/api/users).
3. Logic Execution: Fetching database records or executing mathematical computations.
4. Response Writer: Setting Content-Type header to application/json and returning HTTP Status 200 OK.`,
          km: `តោះពិនិត្យមើលលំហូរដំណើរការ backend សាមញ្ញក្នុង Node.js ដែលមាន request មកសុំទិន្នន័យអ្នកប្រើប្រាស់ ហើយ server បង្កើត response ជា JSON។

សមាសភាគសំខាន់ៗក្នុងការទទួល request:
១. Entry Listener: បើក Socket បណ្តាញនៅលើ Port (ឧទាហរណ៍ 3000)
២. Request Parser: ពិនិត្យមើល HTTP Method (GET, POST) និង Path (/api/users)
៣. Logic Execution: ទាញយកទិន្នន័យពី Database ឬគណនា
៤. Response Writer: កំណត់ Header Content-Type ជា application/json និងបញ្ជូន Status 200 OK ត្រឡប់ទៅវិញ`,
        },
        starterCode: {
          js: `// Simulating a native backend HTTP request dispatcher
function handleIncomingRequest(req) {
  console.log(\`[SERVER RECEIVED] \${req.method} \${req.url}\`);
  
  if (req.method === 'GET' && req.url === '/api/health') {
    return {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'online', uptimeSeconds: 1420 })
    };
  }

  if (req.method === 'GET' && req.url === '/api/users') {
    return {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([
        { id: 1, name: 'Sophea Veng', role: 'Backend Engineer' },
        { id: 2, name: 'Dara Kim', role: 'DevOps Lead' }
      ])
    };
  }

  return {
    status: 404,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ error: 'Route Not Found' })
  };
}

// Simulate client requests
console.log(handleIncomingRequest({ method: 'GET', url: '/api/users' }));
console.log(handleIncomingRequest({ method: 'GET', url: '/api/unknown' }));`,
        },
        simulatedOutput: `[SERVER RECEIVED] GET /api/users
{
  status: 200,
  headers: { 'Content-Type': 'application/json' },
  body: '[{"id":1,"name":"Sophea Veng","role":"Backend Engineer"},{"id":2,"name":"Dara Kim","role":"DevOps Lead"}]'
}
[SERVER RECEIVED] GET /api/unknown
{
  status: 404,
  headers: { 'Content-Type': 'application/json' },
  body: '{"error":"Route Not Found"}'
}`,
        realWorldExample: {
          title: {
            en: 'SabayCode E-Commerce Checkout Engine',
            km: 'ប្រព័ន្ធទូទាត់ប្រាក់ E-Commerce របស់ SabayCode',
          },
          description: {
            en: 'When a user clicks "Buy Now" on mobile, the frontend sends a POST request with order items. The backend verifies inventory, charges payment via ABA Pay API, updates database stock, and sends a notification email in the background.',
            km: 'ពេលអ្នកប្រើប្រាស់ចុច "ទិញឥឡូវនេះ" លើទូរស័ព្ទ, Frontend ផ្ញើ POST request ជាមួយមុខទំនិញ។ Backend នឹងផ្ទៀងផ្ទាត់ទំនិញក្នុងស្តុក, ធ្វើការកាត់ប្រាក់តាម ABA Pay, អាប់ដេតស្តុកក្នុង Database និងផ្ញើ Email បញ្ជាក់។',
          },
        },
        practiceExercise: {
          question: {
            en: 'Modify the request handler above to support a GET /api/products endpoint that returns an array of 2 products (e.g. laptop & keyboard) with id, title, and price.',
            km: 'កែប្រែប្រព័ន្ធ Request Handler ខាងលើដើម្បីទ្រទ្រង់ GET /api/products ដែលបញ្ជូនអក្សរ array មានទំនិញ ២ (ដូចជា laptop និង keyboard) ជាមួយ id, title, និង price។',
          },
          hints: [
            { en: 'Add an else-if checking req.method === "GET" && req.url === "/api/products"', km: 'បន្ថែម else-if ពិនិត្យមើល req.method === "GET" && req.url === "/api/products"' }
          ],
          solution: `if (req.method === 'GET' && req.url === '/api/products') {
  return {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([
      { id: 101, title: 'Mechanical Keyboard', price: 49.99 },
      { id: 102, title: 'Developer Laptop 16GB', price: 899.00 }
    ])
  };
}`,
        },
        quizQuestions: [
          {
            id: 'q1-1',
            question: {
              en: 'Which part of a modern web architecture is primarily responsible for business logic, database queries, and security checks?',
              km: 'តើផ្នែកណានៃស្ថាបត្យកម្ម Web ទទួលខុសត្រូវលើ Business Logic, ការសួរទិន្នន័យ Database និង សុវត្ថិភាព?',
            },
            options: [
              { id: 'opt1', text: { en: 'Client Web Browser', km: 'Client Web Browser' }, isCorrect: false },
              { id: 'opt2', text: { en: 'Backend Application Server', km: 'Backend Application Server' }, isCorrect: true },
              { id: 'opt3', text: { en: 'CSS Styling Engine', km: 'CSS Styling Engine' }, isCorrect: false },
              { id: 'opt4', text: { en: 'DNS Name Server', km: 'DNS Name Server' }, isCorrect: false },
            ],
            explanation: {
              en: 'The backend application server handles authentication, business calculations, and database reads/writes safely away from client modification.',
              km: 'Backend Application Server ទទួលខុសត្រូវលើការផ្ទៀងផ្ទាត់សិទ្ធិ, ការគណនា និងការអាន/សរសេរទិន្នន័យ Database ដោយសុវត្ថិភាព។',
            },
          },
          {
            id: 'q1-2',
            question: {
              en: 'Why shouldn’t database password connections or payment secret keys be stored in frontend client code?',
              km: 'ហេតុអ្វីបានជាមិនត្រូវរក្សាទុកពាក្យសម្ងាត់ Database ឬ Secret Key ទូទាត់ប្រាក់នៅក្នុង Code Frontend?',
            },
            options: [
              { id: 'opt1', text: { en: 'Frontend code runs in the user browser and can be inspected by anyone', km: 'Code Frontend ដំណើរការលើ Browser របស់អ្នកប្រើប្រាស់ ហើយនរណាក៏អាចមើលឃើញបាន' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Browsers do not support strings', km: 'Browser មិនគាំទ្រ String' }, isCorrect: false },
              { id: 'opt3', text: { en: 'JavaScript cannot execute network requests', km: 'JavaScript មិនអាចផ្ញើ request តាម network បាន' }, isCorrect: false },
              { id: 'opt4', text: { en: 'It makes CSS load slower', km: 'វាធ្វើឱ្យ CSS load យឺត' }, isCorrect: false },
            ],
            explanation: {
              en: 'Frontend assets are delivered directly to browsers where users can view sources in Developer Tools, exposing any embedded keys.',
              km: 'Code Frontend ត្រូវផ្ញើទៅកាន់ Browser របស់អ្នកប្រើ ដែលពួកគេអាចបើក Developer Tools មើលឃើញ Secret Key ទាំងអស់នោះបាន។',
            },
          },
          {
            id: 'q1-3',
            question: {
              en: 'What data format is most universally used for RESTful API responses today?',
              km: 'តើទម្រង់ទិន្នន័យណាដែលត្រូវបានប្រើប្រាស់ទូលំទូលាយបំផុតសម្រាប់ RESTful API responses នៅពេលបច្ចុប្បន្ន?',
            },
            options: [
              { id: 'opt1', text: { en: 'XML', km: 'XML' }, isCorrect: false },
              { id: 'opt2', text: { en: 'JSON (JavaScript Object Notation)', km: 'JSON (JavaScript Object Notation)' }, isCorrect: true },
              { id: 'opt3', text: { en: 'CSV', km: 'CSV' }, isCorrect: false },
              { id: 'opt4', text: { en: 'Binary Assembly', km: 'Binary Assembly' }, isCorrect: false },
            ],
            explanation: {
              en: 'JSON is lightweight, human-readable, and natively supported across almost all modern backend and frontend programming languages.',
              km: 'JSON មានទំហំស្រាល ងាយស្រួលអាន និងត្រូវបានគាំទ្រដោយភាសា Programming ទំនើបៗទាំងអស់។',
            },
          },
        ],
      },
      {
        id: 'm1-l2',
        slug: 'http-methods-headers-status-codes',
        moduleNumber: 1,
        lessonNumberInModule: 2,
        title: {
          en: '2. How the Internet Works: HTTP Protocols & Status Codes',
          km: '២. របៀបដែលអុីនធឺណិតដំណើរការ៖ ពិធីការ HTTP និង Status Codes',
        },
        durationMinutes: 30,
        difficulty: 'Beginner',
        explanation: {
          en: `HTTP (Hypertext Transfer Protocol) is the request-response protocol used for communication on the Web.

HTTP Methods:
- GET: Retrieve resource(s) (Idempotent - should not alter state)
- POST: Create a new resource
- PUT: Replace an existing resource completely
- PATCH: Update part of an existing resource
- DELETE: Remove a resource

HTTP Status Code Ranges:
- 1xx Informational (100 Continue)
- 2xx Success (200 OK, 201 Created, 204 No Content)
- 3xx Redirection (301 Moved Permanently, 304 Not Modified)
- 4xx Client Error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
- 5xx Server Error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)`,
          km: `HTTP គឺជាពិធីការ (Protocol) សម្រាប់ផ្ញើ និងទទួលទិន្នន័យនៅលើបណ្តាញ Web។

HTTP Methods សំខាន់ៗ៖
- GET: ទាញយកទិន្នន័យ (មិនគួរកែប្រែទិន្នន័យក្នុង Server ទេ)
- POST: បង្កើតទិន្នន័យថ្មី
- PUT: ជំនួសទិន្នន័យដែលមានស្រាប់ទាំងស្រុង
- PATCH: កែប្រែទិន្នន័យមួយផ្នែក
- DELETE: លុបទិន្នន័យ

HTTP Status Code ប្រភេទសំខាន់ៗ៖
- 1xx ព័ត៌មាន (100 Continue)
- 2xx ជោគជ័យ (200 OK, 201 Created, 204 No Content)
- 3xx ការបង្វែររ៉ូត (301 Moved Permanently, 304 Not Modified)
- 4xx កំហុសពី Client (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
- 5xx កំហុសពី Server (500 Internal Server Error, 502 Bad Gateway)`,
        },
        tutorial: {
          en: `HTTP Headers pass metadata between client and server.
Common Request Headers:
- Authorization: Bearer <JWT_TOKEN>
- Content-Type: application/json
- User-Agent: Mozilla/5.0 ...

Common Response Headers:
- Access-Control-Allow-Origin: * (CORS control)
- Cache-Control: max-age=3600
- Set-Cookie: session_id=xyz; HttpOnly; Secure`,
          km: `HTTP Headers ប្រើសម្រាប់ផ្ញើព័ត៌មានបន្ថែម (Metadata) រវាង client និង server។
Headers ខាង Request ញឹកញាប់៖
- Authorization: Bearer <JWT_TOKEN>
- Content-Type: application/json

Headers ខាង Response ញឹកញាប់៖
- Access-Control-Allow-Origin: *
- Cache-Control: max-age=3600
- Set-Cookie: session_id=xyz; HttpOnly`,
        },
        starterCode: {
          js: `// Interactive HTTP response validator simulator
function simulateServerResponse(method, payload, hasAuthToken) {
  if (!hasAuthToken) {
    return { statusCode: 401, message: 'Unauthorized: Missing Auth Token' };
  }

  if (method === 'POST') {
    if (!payload || !payload.title) {
      return { statusCode: 400, message: 'Bad Request: "title" field is required' };
    }
    return { statusCode: 201, message: 'Created', id: Math.floor(Math.random() * 1000), item: payload };
  }

  if (method === 'GET') {
    return { statusCode: 200, message: 'OK', data: ['Article 1', 'Article 2'] };
  }

  return { statusCode: 405, message: 'Method Not Allowed' };
}

console.log('Unauthenticated Test:', simulateServerResponse('GET', null, false));
console.log('Valid POST Test:', simulateServerResponse('POST', { title: 'Mastering Node.js' }, true));
console.log('Invalid POST Test:', simulateServerResponse('POST', {}, true));`,
        },
        simulatedOutput: `Unauthenticated Test: { statusCode: 401, message: 'Unauthorized: Missing Auth Token' }
Valid POST Test: { statusCode: 201, message: 'Created', id: 482, item: { title: 'Mastering Node.js' } }
Invalid POST Test: { statusCode: 400, message: 'Bad Request: "title" field is required' }`,
        realWorldExample: {
          title: { en: 'Stripe Payment Gateway Status Codes', km: 'Status Codes របស់ Stripe Payment Gateway' },
          description: {
            en: 'When Stripe successfully processes a credit card, it returns 200 OK. If the card was declined, it returns 402 Payment Required with an error code.',
            km: 'ពេល Stripe កាត់ប្រាក់ពីកាតជោគជ័យ វាបញ្ជូន status 200 OK។ បើសិនជាកាតត្រូវបានបដិសេធ វានឹងបញ្ជូន status 402 Payment Required។',
          },
        },
        practiceExercise: {
          question: {
            en: 'What HTTP status code should be returned when a resource is successfully created via a POST request?',
            km: 'តើ HTTP Status Code មួយណាដែលគួរត្រូវបានបញ្ជូនត្រឡប់មកវិញ ពេលបង្កើតទិន្នន័យថ្មីបានជោគជ័យតាម POST Request?',
          },
          solution: '201 Created',
        },
        quizQuestions: [
          {
            id: 'q1-2-1',
            question: { en: 'Which HTTP status code signifies "Forbidden" (you are authenticated, but lack permissions)?', km: 'តើ Status code ណាបង្ហាញថា "Forbidden" (មានគណនីតែគ្មានសិទ្ធិចូលមើល)?' },
            options: [
              { id: 'a', text: { en: '401', km: '401' }, isCorrect: false },
              { id: 'b', text: { en: '403', km: '403' }, isCorrect: true },
              { id: 'c', text: { en: '404', km: '404' }, isCorrect: false },
              { id: 'd', text: { en: '500', km: '500' }, isCorrect: false },
            ],
            explanation: { en: '401 is Unauthorized (unauthenticated), while 403 is Forbidden (authenticated but restricted).', km: '401 គឺមិនទាន់ Login (Unauthorized) ចំអែក 403 គឺ Login រួចហើយតែគ្មានសិទ្ធិ (Forbidden)។' },
          },
          {
            id: 'q1-2-2',
            question: { en: 'Which HTTP method should be used when creating a new record in a database?', km: 'តើគួរប្រើ HTTP Method មួយណាពេលបង្កើត Record ថ្មីក្នុង Database?' },
            options: [
              { id: 'a', text: { en: 'GET', km: 'GET' }, isCorrect: false },
              { id: 'b', text: { en: 'POST', km: 'POST' }, isCorrect: true },
              { id: 'c', text: { en: 'DELETE', km: 'DELETE' }, isCorrect: false },
              { id: 'd', text: { en: 'OPTIONS', km: 'OPTIONS' }, isCorrect: false },
            ],
            explanation: { en: 'POST requests send data payloads in the HTTP request body to create new resources.', km: 'POST Request ផ្ញើ Body Payload ដើម្បីបង្កើត Resource ថ្មី។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm2',
    moduleNumber: 2,
    title: {
      en: 'Module 2: Node.js Fundamentals',
      km: 'មេរៀនទី ២៖ មូលដ្ឋានគ្រឹះ Node.js',
    },
    description: {
      en: 'Master asynchronous I/O, the V8 JavaScript event loop, CommonJS vs ES Modules, file system (fs) manipulation, and native http module.',
      km: 'ស្វែងយល់ពី Asynchronous I/O, Event Loop, CommonJS/ES Modules, File System (fs) និងការប្រើប្រាស់ Native HTTP Module។',
    },
    lessons: [
      {
        id: 'm2-l1',
        slug: 'node-event-loop-modules',
        moduleNumber: 2,
        lessonNumberInModule: 1,
        title: {
          en: '1. What Node.js is & The Event Loop',
          km: '១. តើអ្វីជា Node.js និង Event Loop?',
        },
        durationMinutes: 30,
        difficulty: 'Beginner',
        explanation: {
          en: `Node.js is an open-source, cross-platform JavaScript runtime environment built on Google Chrome V8 engine.

Key characteristics:
1. Non-blocking I/O: Operations like reading a database or file do not freeze the single main thread.
2. Event Loop: Handles asynchronous callbacks efficiently via libuv thread pool.
3. CommonJS (\`require\`) vs ES Modules (\`import/export\`):
   - CommonJS: \`const fs = require('fs');\`
   - ES Modules: \`import fs from 'node:fs';\` (Requires "type": "module" in package.json)`,
          km: `Node.js គឺជា JavaScript Runtime Environment ដែលដំណើរការលើ Chrome V8 Engine។

លក្ខណៈពិសេស៖
១. Non-blocking I/O: ការអាន File ឬ Database មិនធ្វើឱ្យកម្មវិធីគាំង (Block thread) ឡើយ។
២. Event Loop: គ្រប់គ្រង Asynchronous callbacks យ៉ាងមានប្រសិទ្ធភាពតាម libuv។
៣. CommonJS (\`require\`) និង ES Modules (\`import/export\`):
   - CommonJS: \`const fs = require('fs');\`
   - ES Modules: \`import fs from 'node:fs';\``,
        },
        tutorial: {
          en: `Understanding non-blocking execution order:
Synchronous code runs first -> Microtasks (Promises / process.nextTick) -> Macrotasks (setTimeouts / I/O callbacks).`,
          km: `ការយល់ដឹងពីលំដាប់ Asynchronous Execution:
Code Synchronous ដំណើរការមុនគេ -> Microtasks (Promises) -> Macrotasks (setTimeouts / I/O)។`,
        },
        starterCode: {
          js: `console.log('1. Synchronous Start');

setTimeout(() => {
  console.log('4. Timer Macrotask Callback');
}, 0);

Promise.resolve().then(() => {
  console.log('3. Promise Microtask Callback');
});

console.log('2. Synchronous End');`,
        },
        simulatedOutput: `1. Synchronous Start
2. Synchronous End
3. Promise Microtask Callback
4. Timer Macrotask Callback`,
        realWorldExample: {
          title: { en: 'High Concurrency Notification Push Engine', km: 'ប្រព័ន្ធ Push Notification ដែលមានអ្នកប្រើប្រាស់ច្រើន' },
          description: {
            en: 'Because Node.js is non-blocking, a single server instance can easily maintain 50,000 active WebSocket connections for push notifications without needing 50,000 heavy system threads.',
            km: 'ដោយសារ Node.js ជា Non-blocking, Server តែមួយអាចទប់ទល់ WebSocket connection រហូតដល់ 50,000 ដោយមិនចាំបាច់បង្កើត Thread ធ្ងន់ៗឡើយ។',
          },
        },
        practiceExercise: {
          question: { en: 'In what order will logs print if you call setTimeout(fn, 100) vs Promise.resolve()?', km: 'តើ Log នឹងចេញតាមលំដាប់ណា ប្រសិនបើអ្នកហៅ setTimeout(fn, 100) និង Promise.resolve()?' },
          solution: 'Promise microtask runs before setTimeout callback once synchronous execution completes.',
        },
        quizQuestions: [
          {
            id: 'q2-1',
            question: { en: 'Which underlying C++ library handles asynchronous I/O and thread pooling in Node.js?', km: 'តើ C++ Library មួយណាដែលគ្រប់គ្រង Async I/O ក្នុង Node.js?' },
            options: [
              { id: 'a', text: { en: 'libuv', km: 'libuv' }, isCorrect: true },
              { id: 'b', text: { en: 'React Native', km: 'React Native' }, isCorrect: false },
              { id: 'c', text: { en: 'Babel', km: 'Babel' }, isCorrect: false },
              { id: 'd', text: { en: 'Webpack', km: 'Webpack' }, isCorrect: false },
            ],
            explanation: { en: 'libuv is the high-performance cross-platform C library that powers Node.js Event Loop and thread pool.', km: 'libuv គឺជា C Library ដែលដំណើរការ Event Loop របស់ Node.js។' },
          },
        ],
      },
      {
        id: 'm2-l2',
        slug: 'native-http-server',
        moduleNumber: 2,
        lessonNumberInModule: 2,
        title: {
          en: '2. Building an HTTP Server with Node’s `http` Module',
          km: '២. បង្កើត HTTP Server ជាមួយ `http` Module របស់ Node',
        },
        durationMinutes: 35,
        difficulty: 'Beginner',
        explanation: {
          en: `Before frameworks like Express, Node developers used the built-in \`http\` core module to listen on socket ports and read incoming streams.

Key APIs:
- \`http.createServer((req, res) => { ... })\`
- \`req.method\`, \`req.url\`
- \`res.writeHead(statusCode, headers)\`
- \`res.end(bodyString)\``,
          km: `មុនពេលមាន Framework ដូចជា Express, អ្នកអភិវឌ្ឍន៍ Node ប្រើប្រាស់ Native Module \`http\` ដើម្បីបង្កើត Server។

APIs សំខាន់ៗ៖
- \`http.createServer((req, res) => { ... })\`
- \`req.method\`, \`req.url\`
- \`res.writeHead(statusCode, headers)\`
- \`res.end(bodyString)\``,
        },
        starterCode: {
          js: `// Native HTTP Server pattern simulation
const httpSimulator = {
  listen(port, callback) {
    console.log(\`Server listening on http://localhost:\${port}\`);
    if (callback) callback();
  },
  handleRequest(req, res) {
    const { method, url } = req;
    if (url === '/' && method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to SabayCode Native HTTP Server!');
    } else if (url === '/api/ping') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'pong' }));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not Found' }));
    }
  }
};

httpSimulator.listen(3000);
httpSimulator.handleRequest({ method: 'GET', url: '/api/ping' }, {
  writeHead: (status, headers) => console.log('HEADER:', status, headers),
  end: (data) => console.log('BODY:', data)
});`,
        },
        simulatedOutput: `Server listening on http://localhost:3000
HEADER: 200 { 'Content-Type': 'application/json' }
BODY: {"message":"pong"}`,
        realWorldExample: {
          title: { en: 'Microservices Healthcheck Probe', km: 'ប្រព័ន្ធពិនិត្យសុខភាព Server Microservices' },
          description: {
            en: 'Lightweight Kubernetes health check probes often use simple native http servers without heavy external frameworks to return quick 200 OK statuses.',
            km: 'Kubernetes Health Check Probes ភាគច្រើនប្រើ native http server ស្រាលៗដើម្បីឆ្លើយតប 200 OK យ៉ាងរហ័ស។',
          },
        },
        practiceExercise: {
          question: { en: 'How do you send a JSON response header using res.writeHead in Node native http module?', km: 'តើធ្វើដូចម្តេចដើម្បីផ្ញើ Header JSON តាមរយៈ res.writeHead ក្នុង Node HTTP module?' },
          solution: "res.writeHead(200, { 'Content-Type': 'application/json' });",
        },
        quizQuestions: [
          {
            id: 'q2-2-1',
            question: { en: 'Which function ends the response stream and sends the payload back to the HTTP client in Node’s http module?', km: 'តើ Function មួយណាដែលបញ្ឈប់ Response Stream និងផ្ញើ Data ទៅកាន់ Client?' },
            options: [
              { id: 'a', text: { en: 'res.end()', km: 'res.end()' }, isCorrect: true },
              { id: 'b', text: { en: 'res.stop()', km: 'res.stop()' }, isCorrect: false },
              { id: 'c', text: { en: 'req.close()', km: 'req.close()' }, isCorrect: false },
              { id: 'd', text: { en: 'http.terminate()', km: 'http.terminate()' }, isCorrect: false },
            ],
            explanation: { en: 'res.end() signals to the network socket that headers and body payload are finished.', km: 'res.end() ផ្ញើសញ្ញាទៅ Socket ថាការបញ្ជូន Header និង Body បានបញ្ចប់។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm3',
    moduleNumber: 3,
    title: {
      en: 'Module 3: Express.js Framework',
      km: 'មេរៀនទី ៣៖ Express.js Framework',
    },
    description: {
      en: 'Build robust REST APIs with Express.js routing, custom middleware chains, error handlers, and JSON request body parsers.',
      km: 'បង្កើត REST APIs ដ៏រឹងមាំជាមួយ Express.js Routing, Middleware, Error Handlers និងការប្រើប្រាស់ Body Parsers។',
    },
    lessons: [
      {
        id: 'm3-l1',
        slug: 'express-routing-middleware',
        moduleNumber: 3,
        lessonNumberInModule: 1,
        title: {
          en: '1. Express Setup, Routing & Middleware Chain',
          km: '១. ការកំណត់ Express, Routing និង Middleware Chain',
        },
        durationMinutes: 35,
        difficulty: 'Intermediate',
        explanation: {
          en: `Express is the unopinionated, flexible web framework for Node.js.

Core Middleware Concept:
A middleware function receives \`(req, res, next)\`. It can inspect or modify request properties, end the request early, or call \`next()\` to pass control to the next handler.

Common Middleware:
- \`express.json()\`: Parses JSON body
- Logger middleware: Logs execution duration & IPs
- Auth Guard: Validates request tokens before routes`,
          km: `Express គឺជា Web Framework ដ៏ពេញនិយមបំផុតសម្រាប់ Node.js។

សញ្ញាណ Middleware៖
Middleware ទទួលបាន \`(req, res, next)\`។ វាអាចពិនិត្យកែប្រែ request, បញ្ចប់ request ភ្លាមៗ ឬហៅ \`next()\` ដើម្បីបញ្ជូនទៅ Handler បន្ទាប់។

Middleware ញឹកញាប់៖
- \`express.json()\`: បកប្រែ JSON request body
- Logger middleware: កត់ត្រាពេលវេលានៃការទាមទារ
- Auth Guard: ផ្ទៀងផ្ទាត់ Token មុនពេលឱ្យចូលរ៉ូត`,
        },
        tutorial: {
          en: `Building an Express API structure:
1. Initialize express app: \`const app = express();\`
2. Mount global middleware: \`app.use(express.json());\`
3. Register routes: \`app.get('/api/v1/courses', (req, res) => ...)\`
4. Register error handler: \`app.use((err, req, res, next) => ...)\`
5. Start server: \`app.listen(3000);---------\``,
          km: `ការរៀបចំរចនាសម្ព័ន្ធ Express API:
១. បង្កើត Express App: \`const app = express();\`
២. ដាក់ Global middleware: \`app.use(express.json());\`
៣. បង្កើត Routes: \`app.get('/api/v1/courses', (req, res) => ...)\`
៤. បង្កើត Error Handler
៥. បើក Server: \`app.listen(3000);---------\``,
        },
        starterCode: {
          js: `// Simulated Express app pipeline
class ExpressSimulator {
  constructor() {
    this.middlewares = [];
    this.routes = {};
  }

  use(fn) {
    this.middlewares.push(fn);
  }

  get(path, handler) {
    this.routes['GET:' + path] = handler;
  }

  post(path, handler) {
    this.routes['POST:' + path] = handler;
  }

  handle(req, res) {
    let index = 0;
    const next = () => {
      if (index < this.middlewares.length) {
        const mw = this.middlewares[index++];
        mw(req, res, next);
      } else {
        const key = req.method + ':' + req.url;
        const routeHandler = this.routes[key];
        if (routeHandler) {
          routeHandler(req, res);
        } else {
          res.json(404, { error: 'Route not found' });
        }
      }
    };
    next();
  }
}

const app = new ExpressSimulator();

// Logger Middleware
app.use((req, res, next) => {
  console.log(\`[LOG] \${req.method} \${req.url}\`);
  next();
});

app.get('/api/books', (req, res) => {
  res.json(200, [{ title: 'Clean Architecture' }, { title: 'Designing Data-Intensive Applications' }]);
});

// Run request test
app.handle({ method: 'GET', url: '/api/books' }, {
  json: (code, data) => console.log(\`RESPONSE [\${code}]:\`, data)
});`,
        },
        simulatedOutput: `[LOG] GET /api/books
RESPONSE [200]: [
  { title: 'Clean Architecture' },
  { title: 'Designing Data-Intensive Applications' }
]`,
        realWorldExample: {
          title: { en: 'Rate-Limiting Middleware for Banking API', km: 'Rate-Limiting Middleware សម្រាប់ API ធនាគារ' },
          description: {
            en: 'Before reaching the sensitive bank transfer endpoint, an express middleware checks Redis for IP count. If exceeded 100 reqs/min, it immediately responds HTTP 429 Too Many Requests.',
            km: 'មុនពេលផ្ញើ Request ទៅកាន់ Endpoint វេរប្រាក់, Express Middleware ពិនិត្យមើល IP។ ប្រសិនបើលើស ១០០ ដងក្នុងមួយនាទី វាបញ្ជូន 429 Too Many Requests ភ្លាមៗ។',
          },
        },
        practiceExercise: {
          question: { en: 'What parameter must be called in Express middleware to pass execution to the next middleware in line?', km: 'តើត្រូវហៅ Parameter ណាខ្លះក្នុង Express Middleware ដើម្បីបញ្ជូនការដំណើរការទៅ Middleware បន្ទាប់?' },
          solution: 'Call next();',
        },
        quizQuestions: [
          {
            id: 'q3-1-1',
            question: { en: 'What happens if a non-error middleware does NOT call next() nor sends a response via res.json()/res.send()?', km: 'តើមានអ្វីកើតឡើងបើ Middleware មិនបានហៅ next() ហើយក៏មិនបានផ្ញើ Response?' },
            options: [
              { id: 'a', text: { en: 'The client request hangs indefinitely until timeout', km: 'Request របស់ Client នឹងព្យួរគាំងរហូតទាល់តែ Timeout' }, isCorrect: true },
              { id: 'b', text: { en: 'Node.js crashes instantly', km: 'Node.js រលត់ភ្លាមៗ' }, isCorrect: false },
              { id: 'c', text: { en: 'It automatically redirects to home page', km: 'វាបង្វែររ៉ូតទៅទំព័រដើមដោយស្វ័យប្រវត្តិ' }, isCorrect: false },
            ],
            explanation: { en: 'Express handlers are stream controllers; without next() or response end, the connection socket stays waiting.', km: 'Express ត្រូវការការហៅ next() ឬបញ្ចប់ response, បើមិនដូច្នោះទេ Connection នឹងរង់ចាំរហូត Timeout។' },
          },
        ],
      },
      {
        id: 'm3-l2',
        slug: 'express-crud-capstone',
        moduleNumber: 3,
        lessonNumberInModule: 2,
        title: {
          en: '2. Building a Complete Express CRUD API',
          km: '២. បង្កើត Express CRUD API ពេញលេញមួយ',
        },
        durationMinutes: 40,
        difficulty: 'Intermediate',
        explanation: {
          en: `CRUD stands for Create, Read, Update, Delete.

REST Endpoint Conventions:
- \`GET /api/v1/todos\`: List all items
- \`POST /api/v1/todos\`: Create new item
- \`GET /api/v1/todos/:id\`: Fetch single item by route parameter
- \`PUT /api/v1/todos/:id\`: Update existing item
- \`DELETE /api/v1/todos/:id\`: Remove item`,
          km: `CRUD តំណាងឱ្យ Create, Read, Update, Delete។

អនុសញ្ញា REST Endpoints៖
- \`GET /api/v1/todos\`: បង្ហាញបញ្ជីទិន្នន័យទាំងអស់
- \`POST /api/v1/todos\`: បង្កើតទិន្នន័យថ្មី
- \`GET /api/v1/todos/:id\`: ទាញយកទិន្នន័យតាម ID
- \`PUT /api/v1/todos/:id\`: កែប្រែទិន្នន័យ
- \`DELETE /api/v1/todos/:id\`: លុបទិន្នន័យ`,
        },
        starterCode: {
          js: `// In-memory CRUD controller implementation
let database = [
  { id: 1, title: 'Learn Node.js', completed: true },
  { id: 2, title: 'Master Express.js', completed: false }
];

function handleRoute(method, url, body) {
  // GET /todos
  if (method === 'GET' && url === '/todos') {
    return { status: 200, data: database };
  }

  // POST /todos
  if (method === 'POST' && url === '/todos') {
    const newItem = { id: database.length + 1, title: body.title, completed: false };
    database.push(newItem);
    return { status: 201, data: newItem };
  }

  // DELETE /todos/1
  if (method === 'DELETE' && url.startsWith('/todos/')) {
    const id = parseInt(url.split('/')[2]);
    database = database.filter(item => item.id !== id);
    return { status: 200, message: \`Item \${id} deleted\` };
  }

  return { status: 404, error: 'Endpoint missing' };
}

console.log('GET ALL:', handleRoute('GET', '/todos'));
console.log('ADD NEW:', handleRoute('POST', '/todos', { title: 'Build PostgreSQL Database' }));
console.log('DELETE ID 1:', handleRoute('DELETE', '/todos/1'));
console.log('GET ALL AFTER DELETE:', handleRoute('GET', '/todos'));`,
        },
        simulatedOutput: `GET ALL: { status: 200, data: [ { id: 1, title: 'Learn Node.js', completed: true }, { id: 2, title: 'Master Express.js', completed: false } ] }
ADD NEW: { status: 201, data: { id: 3, title: 'Build PostgreSQL Database', completed: false } }
DELETE ID 1: { status: 200, message: 'Item 1 deleted' }
GET ALL AFTER DELETE: { status: 200, data: [ { id: 2, title: 'Master Express.js', completed: false }, { id: 3, title: 'Build PostgreSQL Database', completed: false } ] }`,
        realWorldExample: {
          title: { en: 'Task Management Backend Microservice', km: 'Backend Microservice សម្រាប់គ្រប់គ្រងការងារ' },
          description: {
            en: 'Applications like Trello use Express CRUD routes for creating boards, updating cards, reordering lists, and archiving completed tickets.',
            km: 'កម្មវិធីដូចជា Trello ប្រើប្រាស់ Express CRUD routes សម្រាប់បង្កើត Board, កែប្រែ Card និងលុបទិន្នន័យ។',
          },
        },
        practiceExercise: {
          question: { en: 'Which HTTP status code should be returned when a client requests GET /api/todos/999 but ID 999 does not exist?', km: 'តើគួរប្រគល់ HTTP status code មួយណាពេល client ស្វែងរក ID 999 ដែលគ្មានក្នុង database?' },
          solution: '404 Not Found',
        },
        quizQuestions: [
          {
            id: 'q3-2-1',
            question: { en: 'In Express, how do you extract URL parameter "123" from route pattern "/users/:userId"?', km: 'តើទាញយក Parameter "123" ពី Route "/users/:userId" ដោយរបៀបណា?' },
            options: [
              { id: 'a', text: { en: 'req.params.userId', km: 'req.params.userId' }, isCorrect: true },
              { id: 'b', text: { en: 'req.query.userId', km: 'req.query.userId' }, isCorrect: false },
              { id: 'c', text: { en: 'req.body.userId', km: 'req.body.userId' }, isCorrect: false },
            ],
            explanation: { en: 'Route parameters specified with colon syntax are mapped to the req.params object.', km: 'Route Parameters ដែលមានសញ្ញាស نقطពីរ (:) ត្រូវប្រមូលក្នុង req.params។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm4',
    moduleNumber: 4,
    title: {
      en: 'Module 4: Databases — SQL (PostgreSQL)',
      km: 'មេរៀនទី ៤៖ Databases — SQL (PostgreSQL)',
    },
    description: {
      en: 'Relational database schema modeling, SQL query fundamentals (SELECT, INSERT, JOINs), foreign keys, index optimization, and Node ORM connections.',
      km: 'ការរៀបចំ Schema ក្នុង Relational Database, SQL Queries (SELECT, INSERT, JOINs), Foreign Keys, Indexes និងការភ្ជាប់ Node ORM។',
    },
    lessons: [
      {
        id: 'm4-l1',
        slug: 'sql-basics-joins-postgres',
        moduleNumber: 4,
        lessonNumberInModule: 1,
        title: {
          en: '1. Relational Database Concepts & SQL Queries',
          km: '១. សញ្ញាណ Relational Database & ការសរសេរ SQL Queries',
        },
        durationMinutes: 40,
        difficulty: 'Intermediate',
        explanation: {
          en: `Relational Database Management Systems (RDBMS) organize data into structured tables with fixed columns and typed rows. Primary keys uniquely identify rows, while Foreign keys establish relationships between tables.

Core SQL Operations:
- \`SELECT * FROM users WHERE status = 'active';\`
- \`INSERT INTO products (title, price) VALUES ('Desk Lamp', 29.99);\`
- \`UPDATE accounts SET balance = balance - 50 WHERE id = 10;\`
- \`DELETE FROM sessions WHERE expired_at < NOW();\`

Table Relationships:
- One-to-Many (e.g. 1 Author -> Many Articles)
- Many-to-Many (e.g. Many Students -> Many Classes via a Join/Junction Table)`,
          km: `RDBMS រៀបចំទិន្នន័យជាតារាង (Tables) ដែលមាន Columns និង Rows ច្បាស់លាស់។ Primary Key សម្គាល់ Row នីមួយៗ ចំណែក Foreign Key បង្កើតទំនាក់ទំនងរវាង តារាង និង តារាង។

SQL មូលដ្ឋាន៖
- \`SELECT * FROM users WHERE status = 'active';\`
- \`INSERT INTO products (title, price) VALUES ('Desk Lamp', 29.99);\`
- \`UPDATE accounts SET balance = balance - 50 WHERE id = 10;\`
- \`DELETE FROM sessions WHERE expired_at < NOW();\`

ទំនាក់ទំនងតារាង៖
- One-to-Many (ឧទាហរណ៍ អ្នកសរសេរ ១ នាក់ -> អត្ថបទច្រើន)
- Many-to-Many (ឧទាហរណ៍ សិស្សច្រើន -> ថ្នាក់រៀនច្រើន ដោយប្រើ Join Table)`,
        },
        starterCode: {
          sql: `-- Simulating SQL query execution engine
SELECT 
  users.id AS user_id, 
  users.full_name, 
  orders.id AS order_id, 
  orders.total_amount
FROM users
INNER JOIN orders ON users.id = orders.user_id
WHERE orders.total_amount > 100.00
ORDER BY orders.total_amount DESC;`,
        },
        simulatedOutput: `+---------+-----------------+----------+--------------+
| user_id | full_name       | order_id | total_amount |
+---------+-----------------+----------+--------------+
| 1042    | Chanmony K.     | ORD-8812 | 450.00       |
| 1008    | Borith Seng     | ORD-8790 | 189.50       |
+---------+-----------------+----------+--------------+
(2 rows returned in 12ms)`,
        realWorldExample: {
          title: { en: 'Banking Core System Ledger', km: 'ប្រព័ន្ធបញ្ជីគណនេយ្យធនាគារ' },
          description: {
            en: 'PostgreSQL provides ACID (Atomicity, Consistency, Isolation, Durability) guarantees, ensuring that money transfers between two account rows never lose funds if a power crash happens mid-query.',
            km: 'PostgreSQL មានលក្ខណៈសម្បត្តិ ACID ធានាថាកាតវេរប្រាក់រវាងគណនីពីរបើមានបញ្ហាម៉ាស៊ីន វានឹងមិនបាត់ប្រាក់ឡើយ។',
          },
        },
        practiceExercise: {
          question: { en: 'Write a SQL query to select all students from a table "students" where their grade is "A" sorted alphabetically by "name".', km: 'សរសេរ SQL query ដើម្បីជ្រើសរើសសិស្សទាំងអស់ពីតារាង "students" ដែលមាន grade = "A" រៀបតាមអក្សរក្រម "name"។' },
          solution: "SELECT * FROM students WHERE grade = 'A' ORDER BY name ASC;",
        },
        quizQuestions: [
          {
            id: 'q4-1-1',
            question: { en: 'Which SQL JOIN returns only records that have matching values in both tables?', km: 'តើ JOIN មួយណាដែលទាញយកតែកំណត់ត្រាដែលមានតម្លៃត្រូវគ្នាក្នុងតារាងទាំងពីរ?' },
            options: [
              { id: 'a', text: { en: 'INNER JOIN', km: 'INNER JOIN' }, isCorrect: true },
              { id: 'b', text: { en: 'FULL OUTER JOIN', km: 'FULL OUTER JOIN' }, isCorrect: false },
              { id: 'c', text: { en: 'CROSS JOIN', km: 'CROSS JOIN' }, isCorrect: false },
            ],
            explanation: { en: 'INNER JOIN filters out rows that do not have corresponding foreign key matches.', km: 'INNER JOIN ចោះយកតែ Rows ណាដែលមានការត្រូវគ្នារវាង Primary និង Foreign Keys។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm5',
    moduleNumber: 5,
    title: {
      en: 'Module 5: Databases — NoSQL (MongoDB)',
      km: 'មេរៀនទី ៥៖ Databases — NoSQL (MongoDB)',
    },
    description: {
      en: 'Document-oriented databases, JSON/BSON schemas, Mongoose ORM models, dynamic queries, indexes, and aggregation pipelines.',
      km: 'Document-oriented database, JSON/BSON schemas, Mongoose ODM models, aggregation pipelines និងការប្រៀបធៀបជាមួយ SQL។',
    },
    lessons: [
      {
        id: 'm5-l1',
        slug: 'mongodb-mongoose-documents',
        moduleNumber: 5,
        lessonNumberInModule: 1,
        title: {
          en: '1. Document Databases vs SQL & Mongoose Setup',
          km: '១. ការប្រៀបធៀប Document Database ជាមួយ SQL & ការប្រើ Mongoose',
        },
        durationMinutes: 35,
        difficulty: 'Intermediate',
        explanation: {
          en: `MongoDB stores data as flexible, schema-less BSON (Binary JSON) documents inside Collections instead of SQL Tables.

When to use NoSQL / MongoDB:
- Rapid prototyping or rapidly changing fields
- Hierarchical nested sub-documents (e.g. comments array inside a blog post document)
- High horizontal scaling needs across clusters

Using Mongoose in Node.js:
\`\`\`js
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  roles: [String],
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);
\`\`\``,
          km: `MongoDB រក្សាទុកទិន្នន័យជា BSON (Binary JSON) Document នៅក្នុង Collections។

ពេលណាគួរប្រើ NoSQL / MongoDB:
- ការអភិវឌ្ឍរហ័ស ឬទិន្នន័យផ្លាស់ប្តូរទម្រង់ញឹកញាប់
- មានទិន្នន័យបង្កប់ក្នុ [Nested Array / Object] (ដូចជា មតិយោបល់ក្នុងអត្ថបទ)
- ត្រូវការ Scaling horizontal លើ Cluster ច្រើន

ការប្រើ Mongoose ក្នុង Node.js:
\`\`\`js
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  roles: [String],
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);
\`\`\``,
        },
        starterCode: {
          js: `// Mongoose document query simulation
class MongoCollection {
  constructor() {
    this.docs = [];
  }
  async insertOne(doc) {
    const _id = 'doc_' + Math.random().toString(36).substring(2, 9);
    const newDoc = { _id, ...doc, createdAt: new Date() };
    this.docs.push(newDoc);
    return newDoc;
  }
  async find(filter) {
    return this.docs.filter(d => {
      return Object.keys(filter).every(k => d[k] === filter[k]);
    });
  }
}

async function testMongo() {
  const users = new MongoCollection();
  await users.insertOne({ username: 'visal_dev', role: 'student', skills: ['Node', 'React'] });
  await users.insertOne({ username: 'kimsor_pm', role: 'admin', skills: ['Agile'] });

  const admins = await users.find({ role: 'admin' });
  console.log('FOUND ADMINS:', admins);
}

testMongo();`,
        },
        simulatedOutput: `FOUND ADMINS: [
  {
    _id: 'doc_k81m92z',
    username: 'kimsor_pm',
    role: 'admin',
    skills: [ 'Agile' ],
    createdAt: 2026-07-28T20:27:00.000Z
  }
]`,
        realWorldExample: {
          title: { en: 'Real-time Chat Message Logging', km: 'ការរក្សាទុកសារក្នុងប្រព័ន្ធ Chat' },
          description: {
            en: 'Messaging apps like Slack store chat messages as flexible documents with nested attachments, reactions array, and rich text payload without requiring complex SQL migration scripts.',
            km: 'កម្មវិធី Chat រក្សាទុកសារជា Document ដែលមានអក្សរ បតិកម្ម (Reactions) និងឯកសារភ្ជាប់ក្នុង Object តែមួយ។',
          },
        },
        practiceExercise: {
          question: { en: 'What is the format MongoDB uses under the hood to serialize documents on disk?', km: 'តើ MongoDB ប្រើប្រាស់ទម្រង់អ្វីដើម្បីរក្សាទុក Document លើ Disk?' },
          solution: 'BSON (Binary JSON)',
        },
        quizQuestions: [
          {
            id: 'q5-1-1',
            question: { en: 'In MongoDB terminology, what corresponds to a SQL Table?', km: 'នៅក្នុង MongoDB តើអ្វីដែលត្រូវគ្នានឹង Table របស់ SQL?' },
            options: [
              { id: 'a', text: { en: 'Collection', km: 'Collection' }, isCorrect: true },
              { id: 'b', text: { en: 'Row', km: 'Row' }, isCorrect: false },
              { id: 'c', text: { en: 'Column', km: 'Column' }, isCorrect: false },
            ],
            explanation: { en: 'Tables in relational SQL are equivalent to Collections in MongoDB document store.', km: 'Table ក្នុង SQL ត្រូវគ្នានឹង Collection ក្នុង MongoDB។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm6',
    moduleNumber: 6,
    title: {
      en: 'Module 6: RESTful API Design',
      km: 'មេរៀនទី ៦៖ ការរចនា RESTful API',
    },
    description: {
      en: 'REST principles, resource naming conventions, pagination, query filtering, versioning strategies, and OpenAPI/Swagger documentation.',
      km: 'គោលការណ៍ REST, ការដាក់ឈ្មោះ Resource, Pagination, Filtering, Versioning, និងការបង្កើត Swagger Documentation។',
    },
    lessons: [
      {
        id: 'm6-l1',
        slug: 'rest-design-principles',
        moduleNumber: 6,
        lessonNumberInModule: 1,
        title: {
          en: '1. REST Best Practices & Naming Conventions',
          km: '១. វិធានល្អៗ និងការដាក់ឈ្មោះក្នុង RESTful API',
        },
        durationMinutes: 30,
        difficulty: 'Intermediate',
        explanation: {
          en: `REST (Representational State Transfer) is an architectural style for network APIs.

Key Design Rules:
1. Nouns over Verbs: Use plural nouns for endpoints.
   - Good: \`GET /api/v1/orders\`
   - Bad: \`GET /api/v1/getAllOrders\`
2. Hierarchy for nested resources:
   - \`GET /api/v1/users/42/posts\` (Fetch posts by user 42)
3. Pagination for list endpoints:
   - \`GET /api/v1/products?page=2&limit=20&sort=-createdAt\`
4. Consistent JSON response structure:
\`\`\`json
{
  "success": true,
  "data": [...],
  "meta": { "page": 2, "limit": 20, "total": 140 }
}
\`\`\``,
          km: `REST គឺជាស្ថាបត្យកម្មសម្រាប់រចនា Network APIs។

វិធានសំខាន់ៗ៖
១. ប្រើប្រាស់ នាម ពហុវចនៈ (Nouns):
   - ល្អ: \`GET /api/v1/orders\`
   - មិនល្អ: \`GET /api/v1/getAllOrders\`
២. រៀបចំតាមលំដាប់ថ្នាក់ Resource:
   - \`GET /api/v1/users/42/posts\`
៣. ប្រើប្រាស់ Pagination លើ បញ្ជីទិន្នន័យ៖
   - \`GET /api/v1/products?page=2&limit=20\`
៤. រៀបចំ Response JSON ឱ្យមានស្តង់ដាររួមមួយ។`,
        },
        starterCode: {
          js: `// Standard RESTful API pagination envelope helper
function createPaginatedEnvelope(data, page, limit, totalRecords) {
  const totalPages = Math.ceil(totalRecords / limit);
  return {
    success: true,
    data,
    meta: {
      currentPage: page,
      perPage: limit,
      totalCount: totalRecords,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    }
  };
}

const mockProducts = [
  { id: 21, name: 'USB-C Docking Hub', price: 65.00 },
  { id: 22, name: 'Wireless Ergonomic Mouse', price: 35.00 }
];

console.log(JSON.stringify(createPaginatedEnvelope(mockProducts, 2, 10, 45), null, 2));`,
        },
        simulatedOutput: `{
  "success": true,
  "data": [
    {
      "id": 21,
      "name": "USB-C Docking Hub",
      "price": 65
    },
    {
      "id": 22,
      "name": "Wireless Ergonomic Mouse",
      "price": 35
    }
  ],
  "meta": {
    "currentPage": 2,
    "perPage": 10,
    "totalCount": 45,
    "totalPages": 5,
    "hasNextPage": true,
    "hasPrevPage": true
  }
}`,
        realWorldExample: {
          title: { en: 'GitHub REST API Standards', km: 'ស្តង់ដារ REST API របស់ GitHub' },
          description: {
            en: 'GitHub’s API is widely praised for consistency: GET /users/{username}/repos, GET /repos/{owner}/{repo}/issues with standard headers and rate limit meta blocks.',
            km: 'API របស់ GitHub ប្រើប្រាស់រចនាសម្ព័ន្ធ REST ល្អឥតខ្ចោះ៖ GET /users/{username}/repos និង GET /repos/{owner}/{repo}/issues។',
          },
        },
        practiceExercise: {
          question: { en: 'Is "POST /api/v1/deleteUser/5" a good RESTful endpoint design? Explain why or why not.', km: 'តើ "POST /api/v1/deleteUser/5" ជាការរចនា REST API ល្អដែរឬទេ? ហេតុអ្វី?' },
          solution: 'No. It uses a verb "deleteUser" and incorrect method. The RESTful standard is "DELETE /api/v1/users/5".',
        },
        quizQuestions: [
          {
            id: 'q6-1-1',
            question: { en: 'What is the correct HTTP method and URL path to delete a comment with ID 88 on post ID 12?', km: 'តើ HTTP method និង URL path ណាដែលត្រឹមត្រូវសម្រាប់លុប comment ID 88 លើ post ID 12?' },
            options: [
              { id: 'a', text: { en: 'DELETE /api/v1/posts/12/comments/88', km: 'DELETE /api/v1/posts/12/comments/88' }, isCorrect: true },
              { id: 'b', text: { en: 'POST /api/v1/removeComment?post=12&id=88', km: 'POST /api/v1/removeComment?post=12&id=88' }, isCorrect: false },
              { id: 'c', text: { en: 'GET /api/v1/comments/delete/88', km: 'GET /api/v1/comments/delete/88' }, isCorrect: false },
            ],
            explanation: { en: 'Nested resources follow hierarchical noun paths with the appropriate HTTP verb (DELETE).', km: 'Resource បង្កប់ត្រូវប្រើប្រាស់ Noun Path តាមលំដាប់ថ្នាក់ ជាមួយ HTTP verb (DELETE)។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm7',
    moduleNumber: 7,
    title: {
      en: 'Module 7: Authentication & Authorization',
      km: 'មេរៀនទី ៧៖ Authentication & Authorization',
    },
    description: {
      en: 'Bcrypt password hashing, JWT (JSON Web Tokens) creation and verification, refresh token rotation, and Role-Based Access Control (RBAC).',
      km: 'ការប្រើ Bcrypt Hash Password, ការបង្កើត និងផ្ទៀងផ្ទាត់ JWT (JSON Web Tokens), Refresh Tokens, និង Role-Based Access Control (RBAC)។',
    },
    lessons: [
      {
        id: 'm7-l1',
        slug: 'jwt-auth-bcrypt',
        moduleNumber: 7,
        lessonNumberInModule: 1,
        title: {
          en: '1. Password Hashing (Bcrypt) & JWT Implementation',
          km: '១. Password Hashing (Bcrypt) និងការប្រកាសប្រើ JWT',
        },
        durationMinutes: 45,
        difficulty: 'Advanced',
        explanation: {
          en: `Authentication verifies WHO a user is. Authorization verifies WHAT they can do.

Security Golden Rules:
1. NEVER store plain-text passwords! Use salted hash algorithms like \`bcrypt\` or \`argon2\`.
2. JSON Web Tokens (JWT) contain 3 parts separated by dots:
   - Header (Algorithm & Token Type)
   - Payload (User Claims: id, email, role, exp)
   - Signature (HMAC-SHA256 hash using secret key)

JWT Workflow:
Client submits email/pass -> Backend verifies hash -> Returns JWT string -> Client sends Authorization header \`Bearer <TOKEN>\` on subsequent requests.`,
          km: `Authentication ផ្ទៀងផ្ទាត់ថា "អ្នកជានរណា"។ Authorization ផ្ទៀងផ្ទាត់ថា "អ្នកមានសិទ្ធិធ្វើអ្វីខ្លះ"។

វិធានសុវត្ថិភាពសំខាន់ៗ៖
១. ហាមដាច់ខាតរក្សាទុក ពាក្យសម្ងាត់ជា Plain-text! ត្រូវប្រើ Salted hash ដូចជា \`bcrypt\`។
២. JSON Web Tokens (JWT) មាន ៣ ផ្នែកចែកដោយចុច (.)៖
   - Header (Algorithm & Type)
   - Payload (ព័ត៌មានអ្នកប្រើ: id, role, exp)
   - Signature (បំផ្លែងជាមួយ Secret Key)

លំហូរ JWT:
Client ផ្ញើ Email/Password -> Backend ផ្ទៀងផ្ទាត់ Hash -> ប្រគល់ JWT String -> Client ផ្ញើ Header \`Authorization: Bearer <TOKEN>\` សម្រាប់ Request បន្ទាប់ៗ។`,
        },
        starterCode: {
          js: `// Basic JWT Signature Generator & Decoder Simulation
function base64UrlEncode(str) {
  return btoa(str).replace(/=/g, '').replace(/\\+/g, '-').replace(/\\//g, '_');
}

function generateSimulatedJWT(userPayload, secretKey) {
  const header = JSON.stringify({ alg: 'HS256', typ: 'JWT' });
  const payload = JSON.stringify({ ...userPayload, exp: Math.floor(Date.now() / 1000) + 3600 });
  
  const encodedHeader = base64UrlEncode(header);
  const encodedPayload = base64UrlEncode(payload);
  
  // Simulated signature algorithm
  const signature = base64UrlEncode(secretKey + '.' + encodedHeader + '.' + encodedPayload);
  
  return \`\${encodedHeader}.\${encodedPayload}.\${signature}\`;
}

const token = generateSimulatedJWT({ userId: 902, role: 'admin' }, 'MY_SUPER_SECRET');
console.log('GENERATED TOKEN:', token);

const parts = token.split('.');
console.log('DECODED PAYLOAD:', JSON.parse(atob(parts[1])));`,
        },
        simulatedOutput: `GENERATED TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjkwMiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzcxMDgwODAwfQ.TVlfU1VQRVJfU0VDUkVULmV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZXVk5VSX0uZXlKMWMyVnlTV1FpT2prd01pd2ljbTlzWlNJNkltRmtiV2x1SWl3aVpYaHdJam94TnpjeE1EZ3dPREF3ZlE
DECODED PAYLOAD: { userId: 902, role: 'admin', exp: 1771080800 }`,
        realWorldExample: {
          title: { en: 'OAuth SSO Login Engine', km: 'ប្រព័ន្ធ Login SSO ជាមួយ OAuth' },
          description: {
            en: 'When logging in with Google or Facebook on SabayCode, the OAuth provider issues a signed JWT containing your verified email and user ID.',
            km: 'ពេល Login ជាមួយ Google លើ SabayCode, Google បញ្ជូន Signed JWT ដែលមានព័ត៌មាន Email និង User ID។',
          },
        },
        practiceExercise: {
          question: { en: 'Why shouldn’t super sensitive data like credit card numbers be put inside a standard JWT payload?', km: 'ហេតុអ្វីមិនគួរដាក់ទិន្នន័យសម្ងាត់ដូចជាលេខកាតធនាគារក្នុង JWT payload?' },
          solution: 'JWT payloads are only Base64 encoded, not encrypted. Anyone who intercepts the token can easily decode and read the payload contents.',
        },
        quizQuestions: [
          {
            id: 'q7-1-1',
            question: { en: 'What standard HTTP Header prefix is used when presenting a JWT token to a protected backend route?', km: 'តើ Header Prefix ស្តង់ដារណាដែលត្រូវប្រើពេលផ្ញើ JWT token ទៅកាន់ Protected Route?' },
            options: [
              { id: 'a', text: { en: 'Authorization: Bearer <TOKEN>', km: 'Authorization: Bearer <TOKEN>' }, isCorrect: true },
              { id: 'b', text: { en: 'Authentication: Key <TOKEN>', km: 'Authentication: Key <TOKEN>' }, isCorrect: false },
              { id: 'c', text: { en: 'X-Token-Value: <TOKEN>', km: 'X-Token-Value: <TOKEN>' }, isCorrect: false },
            ],
            explanation: { en: 'The standard format is "Authorization: Bearer " followed by the JWT string.', km: 'ទម្រង់ស្តង់ដារគឺ "Authorization: Bearer " បន្ទាប់មក JWT string។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm8',
    moduleNumber: 8,
    title: {
      en: 'Module 8: Caching with Redis',
      km: 'មេរៀនទី ៨៖ Caching ជាមួយ Redis',
    },
    description: {
      en: 'In-memory key-value data store, cache invalidation patterns (TTL), session management, and API response caching.',
      km: 'In-memory Key-Value store, Cache invalidation (TTL), ការគ្រប់គ្រង Session និងការធ្វើ Caching លើ API Responses។',
    },
    lessons: [
      {
        id: 'm8-l1',
        slug: 'redis-caching-performance',
        moduleNumber: 8,
        lessonNumberInModule: 1,
        title: {
          en: '1. Why Caching Matters & Redis Data Structures',
          km: '១. សារៈសំខាន់នៃ Caching និង រចនាសម្ព័ន្ធទិន្នន័យ Redis',
        },
        durationMinutes: 30,
        difficulty: 'Intermediate',
        explanation: {
          en: `Redis (Remote Dictionary Server) is an extremely fast, in-memory data structure store used as a database, cache, and message broker.

Why Cache API responses in Redis?
Database queries can take 50ms - 500ms. Reading cached responses directly from RAM takes under 1ms!

Core Caching Pattern (Cache-Aside / Lazy Loading):
1. Client requests data.
2. Server checks Redis key.
3. If Cache HIT -> Return cached data immediately.
4. If Cache MISS -> Query database, store result in Redis with a Time-To-Live (TTL), then return data.`,
          km: `Redis គឺជា In-Memory Key-Value store ដែលលឿនបំផុត ប្រើប្រាស់សម្រាប់ធ្វើជា Cache, Database ឬ Message Broker។

ហេតុអ្វីគួរធ្វើ Caching?
Database Queries អាចចំណាយពេល 50ms - 500ms។ ការអានពី Redis RAM ចំណាយពេលតិចជាង 1ms!

លំហូរ Cache-Aside Pattern:
១. Client ស្វែងរកទិន្នន័យ
២. Server ពិនិត្យ Redis Key
៣. បើមាន (Cache HIT) -> ប្រគល់ទិន្នន័យភ្លាម
៤. បើគ្មាន (Cache MISS) -> ទាញពី Database, រក្សាទុកក្នុង Redis ជាមួយ TTL រួចបញ្ជូនទៅ Client។`,
        },
        starterCode: {
          js: `// Cache-Aside Pattern Simulator
const redisRAM = new Map();
const mockDatabase = {
  getTopCourses: () => {
    console.log('[DB EXECUTING SLOW SQL QUERY...]');
    return ['Node.js Mastery', 'PostgreSQL Expert', 'Docker Essentials'];
  }
};

function getCoursesWithCache() {
  const cacheKey = 'api:courses:top';
  
  if (redisRAM.has(cacheKey)) {
    console.log('[CACHE HIT - RETURNED FROM RAM IN 0.2ms]');
    return redisRAM.get(cacheKey);
  }

  console.log('[CACHE MISS - FALLBACK TO DATABASE]');
  const dbResult = mockDatabase.getTopCourses();
  redisRAM.set(cacheKey, dbResult); // Store in cache
  return dbResult;
}

console.log('REQUEST 1:', getCoursesWithCache());
console.log('---');
console.log('REQUEST 2:', getCoursesWithCache());`,
        },
        simulatedOutput: `[CACHE MISS - FALLBACK TO DATABASE]
[DB EXECUTING SLOW SQL QUERY...]
REQUEST 1: [ 'Node.js Mastery', 'PostgreSQL Expert', 'Docker Essentials' ]
---
[CACHE HIT - RETURNED FROM RAM IN 0.2ms]
REQUEST 2: [ 'Node.js Mastery', 'PostgreSQL Expert', 'Docker Essentials' ]`,
        realWorldExample: {
          title: { en: 'E-Commerce Homepage Product Feed Caching', km: 'Caching ទំព័រដើម E-Commerce' },
          description: {
            en: 'Black Friday flash sales handle 100,000 requests/sec by serving the trending items list directly from Redis RAM without hitting primary SQL databases.',
            km: 'ក្នុងថ្ងៃ Flash Sale, Request រាប់សែនអាចដំណើរការបានដោយសារការអានទិន្នន័យទំនិញពេញនិយមពី Redis RAM។',
          },
        },
        practiceExercise: {
          question: { en: 'What does TTL stand for in caching engines like Redis and what is its purpose?', km: 'តើ TTL មានន័យថាម៉េចក្នុង Redis ហើយវាមានប្រយោជន៍អ្វី?' },
          solution: 'Time-To-Live. It automatically expires and removes stale cache keys after a configured duration (e.g., 3600 seconds).',
        },
        quizQuestions: [
          {
            id: 'q8-1-1',
            question: { en: 'Where does Redis primarily store its dataset for ultra-fast operation?', km: 'តើ Redis រក្សាទុកទិន្នន័យនៅឯណាដើម្បីទទួលបានល្បឿនលឿនបំផុត?' },
            options: [
              { id: 'a', text: { en: 'In System RAM (Memory)', km: 'នៅក្នុង RAM (Memory)' }, isCorrect: true },
              { id: 'b', text: { en: 'On HDD Magnetic Disks', km: 'លើ HDD Magnetic Disks' }, isCorrect: false },
              { id: 'c', text: { en: 'In Browser Cookies', km: 'ក្នុង Browser Cookies' }, isCorrect: false },
            ],
            explanation: { en: 'Redis keeps data entirely in RAM, enabling sub-millisecond data read/write performance.', km: 'Redis រក្សាទុកទិន្នន័យក្នុង RAM ធ្វើឱ្យការអាននិងសរសេរលឿនជាងមិល្លីវិនាទី។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm9',
    moduleNumber: 9,
    title: {
      en: 'Module 9: Python for Backend (Alternative Track)',
      km: 'មេរៀនទី ៩៖ Python សម្រាប់ Backend (វគ្គជំនួស)',
    },
    description: {
      en: 'Python web ecosystem, Flask microframework routing, Django MVC architecture, ORM models, and ASGI/WSGI servers.',
      km: 'ប្រព័ន្ធ Web Python, Flask microframework, Django MVC architecture, ORM models និង WSGI/ASGI Servers។',
    },
    lessons: [
      {
        id: 'm9-l1',
        slug: 'python-flask-django-backend',
        moduleNumber: 9,
        lessonNumberInModule: 1,
        title: {
          en: '1. Flask vs Django & Building Python Web APIs',
          km: '១. ការប្រៀបធៀប Flask និង Django & បង្កើត Python Web APIs',
        },
        durationMinutes: 35,
        difficulty: 'Intermediate',
        explanation: {
          en: `Python is a primary backend language for AI/ML integration, data engineering, and web APIs.

Framework Comparison:
- **Flask**: Micro-framework. Minimalist, explicit routing, ideal for small microservices and AI endpoints.
- **Django**: "Batteries Included" framework. Includes built-in admin panel, ORM, auth system, and migrations.

Flask API Syntax Example:
\`\`\`python
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    return jsonify({"prediction": "cat", "confidence": 0.98})
\`\`\``,
          km: `Python គឺជាភាសា Backend ដ៏ពេញនិយមសម្រាប់ប្រព័ន្ធ AI/ML, Data Engineering និង Web APIs។

ការប្រៀបធៀប Framework:
- **Flask**: Micro-framework ស្រាល ងាយស្រួលបង្កើត Microservices ឬ AI Endpoints។
- **Django**: Framework ធំដែលមានប្រព័ន្ធ Admin, ORM, Auth រួចជាស្រេច។

ឧទាហរណ៍ Flask API:
\`\`\`python
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    return jsonify({"prediction": "cat", "confidence": 0.98})
\`\`\``,
        },
        starterCode: {
          python: `# Python Flask Route Decorator Simulator
def simulate_flask_app():
    routes = {}

    def route(path, methods=['GET']):
        def decorator(func):
            for m in methods:
                routes[f"{m}:{path}"] = func
            return func
        return decorator

    @route('/health')
    def health_check():
        return {"status": "healthy", "service": "python-ai-backend"}

    @route('/items', methods=['POST'])
    def create_item():
        return {"message": "Item created successfully"}

    print("REGISTERED ROUTES:", list(routes.keys()))
    print("GET /health OUTPUT:", routes['GET:/health']())

simulate_flask_app()`,
        },
        simulatedOutput: `REGISTERED ROUTES: ['GET:/health', 'POST:/items']
GET /health OUTPUT: {'status': 'healthy', 'service': 'python-ai-backend'}`,
        realWorldExample: {
          title: { en: 'Instagram & Pinterest Backend Services', km: 'Backend របស់ Instagram & Pinterest' },
          description: {
            en: 'Instagram operates one of the world’s largest Django Python deployments serving billions of image requests daily.',
            km: 'Instagram ដំណើរការប្រព័ន្ធព័ត៌មានដែលធំបំផុតមួយលើលោកដោយប្រើប្រាស់ Python Django Framework។',
          },
        },
        practiceExercise: {
          question: { en: 'What decorator syntax is used in Flask to define an HTTP route handler?', km: 'តើ Syntax Decorator ណាដែលប្រើក្នុង Flask ដើម្បីបង្កើត HTTP Route?' },
          solution: '@app.route("/path", methods=["GET"])',
        },
        quizQuestions: [
          {
            id: 'q9-1-1',
            question: { en: 'Which Python web framework philosophy is described as "batteries included"?', km: 'តើ Python Web Framework មួយណាដែលត្រូវបានគេហៅថា "Batteries Included"?' },
            options: [
              { id: 'a', text: { en: 'Django', km: 'Django' }, isCorrect: true },
              { id: 'b', text: { en: 'Flask', km: 'Flask' }, isCorrect: false },
              { id: 'c', text: { en: 'Bottle', km: 'Bottle' }, isCorrect: false },
            ],
            explanation: { en: 'Django includes built-in ORM, admin dashboard, auth system, and form handlers right out of the box.', km: 'Django មានភ្ជាប់មកជាមួយនូវ ORM, Admin Panel និង Auth System រួចជាស្រេច។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm10',
    moduleNumber: 10,
    title: {
      en: 'Module 10: PHP for Backend (Alternative Track)',
      km: 'មេរៀនទី ១០៖ PHP សម្រាប់ Backend (វគ្គជំនួស)',
    },
    description: {
      en: 'PHP web request processing, PDO database bindings, Laravel framework MVC pattern, Artisan CLI, and Composer package manager.',
      km: 'ដំណើរការ PHP Web Request, PDO Database Bindings, Laravel MVC pattern, Artisan CLI និង Composer Package Manager។',
    },
    lessons: [
      {
        id: 'm10-l1',
        slug: 'php-laravel-backend-fundamentals',
        moduleNumber: 10,
        lessonNumberInModule: 1,
        title: {
          en: '1. PHP Modern Web Engine & Laravel Framework',
          km: '១. ម៉ាស៊ីន Web PHP ទំនើប និង Laravel Framework',
        },
        durationMinutes: 35,
        difficulty: 'Intermediate',
        explanation: {
          en: `PHP powers over 75% of the active Web today (WordPress, Wikipedia, Laravel ecosystem).

Modern PHP 8+ Features:
- JIT (Just-In-Time) compilation
- Strongly typed properties & return types
- PDO (PHP Data Objects) for SQL injection prevention

Laravel Framework:
Laravel is the premier PHP framework featuring Eloquent ORM, Blade templating, queues, and elegant expressive syntax.

Example Laravel Route:
\`\`\`php
Route::get('/api/v1/users', function () {
    return User::where('active', true)->paginate(15);
});
\`\`\``,
          km: `PHP ដំណើរការលើសពី ៧៥% នៃគេហទំព័រលើពិភពលោក (WordPress, Wikipedia, Laravel)។

លក្ខណៈពិសេស PHP 8+ ទំនើប៖
- JIT (Just-In-Time) Compiler
- Strongly typed variables
- PDO ការពារ SQL Injection

Laravel Framework:
Laravel គឺជា PHP Framework ដ៏ពេញនិយមបំផុតដែលមាន Eloquent ORM, Expressive Syntax និងប្រព័ន្ធ Queue។`,
        },
        starterCode: {
          php: `<?php
// PHP Request Processing Simulation
class UserStore {
    private $users = [
        ['id' => 1, 'name' => 'Srey Leap', 'email' => 'sreyleap@sabaycode.com'],
        ['id' => 2, 'name' => 'Vannak Nguon', 'email' => 'vannak@sabaycode.com']
    ];

    public function jsonResponse($data, $status = 200) {
        return json_encode([
            'status' => $status,
            'data' => $data
        ], JSON_PRETTY_PRINT);
    }

    public function getUsers() {
        return $this->jsonResponse($this->users);
    }
}

$store = new UserStore();
echo $store->getUsers();
?>`,
        },
        simulatedOutput: `{
    "status": 200,
    "data": [
        {
            "id": 1,
            "name": "Srey Leap",
            "email": "sreyleap@sabaycode.com"
        },
        {
            "id": 2,
            "name": "Vannak Nguon",
            "email": "vannak@sabaycode.com"
        }
    ]
}`,
        realWorldExample: {
          title: { en: 'WordPress & E-Commerce WooCommerce', km: 'WordPress & ប្រព័ន្ធ WooCommerce' },
          description: {
            en: 'WooCommerce powers millions of online stores globally using PHP, MySQL, and custom hook extensions.',
            km: 'WooCommerce ដំណើរការហាងអនឡាញរាប់លានជុំវិញពិភពលោកដោយប្រើប្រាស់ PHP និង MySQL។',
          },
        },
        practiceExercise: {
          question: { en: 'What is the package manager tool used in the PHP ecosystem to install dependencies?', km: 'តើកម្មវិធី Package Manager ណាដែលត្រូវប្រើក្នុង PHP ដើម្បី Install Dependencies?' },
          solution: 'Composer',
        },
        quizQuestions: [
          {
            id: 'q10-1-1',
            question: { en: 'What ORM database engine comes built into Laravel framework?', km: 'តើ ORM Database Engine មួយណាដែលមានស្រាប់ក្នុង Laravel Framework?' },
            options: [
              { id: 'a', text: { en: 'Eloquent ORM', km: 'Eloquent ORM' }, isCorrect: true },
              { id: 'b', text: { en: 'Hibernate', km: 'Hibernate' }, isCorrect: false },
              { id: 'c', text: { en: 'TypeORM', km: 'TypeORM' }, isCorrect: false },
            ],
            explanation: { en: 'Eloquent ORM provides an ActiveRecord implementation for working with databases in Laravel.', km: 'Eloquent ORM ផ្តល់នូវ ActiveRecord pattern សម្រាប់ការគ្រប់គ្រង Database ក្នុង Laravel។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm11',
    moduleNumber: 11,
    title: {
      en: 'Module 11: API Security & Best Practices',
      km: 'មេរៀនទី ១១៖ សុវត្ថិភាព API និង វិធានល្អៗ',
    },
    description: {
      en: 'Preventing SQL Injection, XSS, CSRF, configuring CORS policies, environment secrets management, and rate limiting.',
      km: 'ការទប់ស្កាត់ SQL Injection, XSS, CSRF, ការកំណត់ CORS Policies, Secrets Management និង Rate Limiting។',
    },
    lessons: [
      {
        id: 'm11-l1',
        slug: 'api-security-cors-sql-injection',
        moduleNumber: 11,
        lessonNumberInModule: 1,
        title: {
          en: '1. Preventing SQL Injection, CORS & Secrets Leakage',
          km: '១. ការទប់ស្កាត់ SQL Injection, CORS & ការពារការជ្រាប Secrets',
        },
        durationMinutes: 35,
        difficulty: 'Advanced',
        explanation: {
          en: `API Security is non-negotiable for professional backend developers.

Critical Vulnerabilities & Defenses:
1. **SQL Injection**: Never concatenate user strings directly into raw SQL! Always use Prepared Statements / Parameterized Queries.
   - Danger: SELECT * FROM users WHERE email = ' + req.body.email
   - Safe: SELECT * FROM users WHERE email = $1, [req.body.email]

2. **CORS (Cross-Origin Resource Sharing)**:
   Restricts which domains can make browser AJAX requests to your backend API. Never leave Access-Control-Allow-Origin: * on sensitive user data endpoints!

3. **Secrets Management**:
   Never commit .env files or API keys into GitHub repos. Use process.env and secret vaults.`,
          km: `សុវត្ថិភាព API គឺជាផ្នែកដ៏សំខាន់បំផុតសម្រាប់អ្នកអភិវឌ្ឍន៍ Backend។

ហានិភ័យសំខាន់ៗ & ការការពារ៖
១. **SQL Injection**: ហាមផ្ភ្ជាប់ String ដោយផ្ទាល់ក្នុង SQL Query! ត្រូវប្រើ Prepared Statements / Parameters ជានិច្ច។
   - គ្រោះថ្នាក់: SELECT * FROM users WHERE email = ' + req.body.email
   - សុវត្ថិភាព: SELECT * FROM users WHERE email = $1, [req.body.email]

២. **CORS**:
   កម្រិត Domain ណាខ្លះដែលអាឆប្រមូលទិន្នន័យពី Backend។ មិនត្រូវកំណត់ Access-Control-Allow-Origin: * លើទិន្នន័យសម្ងាត់ឡើយ!

៣. **Secrets Management**:
   ហាមដាច់ខាត Commit ឯកសារ .env ចូល GitHub! ត្រូវប្រើប្រាស់ Environment Variables។`,
        },
        starterCode: {
          js: `// Demonstrating Prepared Statement Sanitizer
function unsafeSqlExecute(userInputEmail) {
  // Vulnerable to ' OR '1'='1 SQL Injection attack
  const rawQuery = \`SELECT * FROM accounts WHERE email = '\${userInputEmail}'\`;
  return \`[EXECUTIVE DANGEROUS SQL]: \${rawQuery}\`;
}

function safeSqlExecute(userInputEmail) {
  const preparedQuery = 'SELECT * FROM accounts WHERE email = $1';
  return \`[EXCUTE PARAMETERIZED SQL]: \${preparedQuery} WITH PARAMS: [\${userInputEmail}]\`;
}

const maliciousPayload = "' OR '1'='1";
console.log('UNSAFE:', unsafeSqlExecute(maliciousPayload));
console.log('SAFE:', safeSqlExecute(maliciousPayload));`,
        },
        simulatedOutput: `UNSAFE: [EXECUTIVE DANGEROUS SQL]: SELECT * FROM accounts WHERE email = '' OR '1'='1'
SAFE: [EXCUTE PARAMETERIZED SQL]: SELECT * FROM accounts WHERE email = $1 WITH PARAMS: [' OR '1'='1]`,
        realWorldExample: {
          title: { en: 'FinTech API Security Breach Prevention', km: 'ការទប់ស្កាត់ការវាយប្រហារលើប្រព័ន្ធ FinTech' },
          description: {
            en: 'Major banks use web application firewalls (WAF), Helmet headers, and strict parameterized queries to block malicious payload injections.',
            km: 'ធនាគារធំៗប្រើប្រាស់ Web Application Firewalls (WAF) និង Parameterized Queries ដើម្បីទប់ស្កាត់ការវាយប្រហារ Injection។',
          },
        },
        practiceExercise: {
          question: { en: 'Which HTTP header prevents a browser from trusting MIME types that do not match Content-Type header?', km: 'តើ HTTP Header ណាដែលការពារ Browser ពីការ Mismatched MIME types?' },
          solution: 'X-Content-Type-Options: nosniff (set automatically by Helmet middleware)',
        },
        quizQuestions: [
          {
            id: 'q11-1-1',
            question: { en: 'Why are parameterized SQL queries safe against SQL injection attacks?', km: 'ហេតុអ្វីបានជា Parameterized SQL Queries មានសុវត្ថិភាពប្រឆាំងនឹង SQL Injection?' },
            options: [
              { id: 'a', text: { en: 'The database treats input values strictly as data parameters, never as executable SQL code', km: 'Database ចាត់ទុក Input ជា Parameter ទិន្នន័យសុទ្ធសាធ ដោយមិនប្រកាសវាជា SQL Code ឡើយ' }, isCorrect: true },
              { id: 'b', text: { en: 'They encrypt the SQL database disk', km: 'វាធ្វើការ Encrypt Database Disk' }, isCorrect: false },
            ],
            explanation: { en: 'Parameterized queries separate the query execution plan from user input data.', km: 'Parameterized queries បែងចែករវាង Query Execution Plan និង Input Data។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm12',
    moduleNumber: 12,
    title: {
      en: 'Module 12: Testing & Debugging Backend Code',
      km: 'មេរៀនទី ១២៖ ការ Test និង Debugging Backend Code',
    },
    description: {
      en: 'Unit testing with Jest/Supertest, integration testing API endpoints, mock databases, and structured logging (Winston/Pino).',
      km: 'Unit testing ជាមួយ Jest/Supertest, Integration testing លើ API endpoints, Mock databases និង Structured logging។',
    },
    lessons: [
      {
        id: 'm12-l1',
        slug: 'backend-unit-integration-testing',
        moduleNumber: 12,
        lessonNumberInModule: 1,
        title: {
          en: '1. Unit Testing & API Endpoint Tests with Jest',
          km: '១. Unit Testing & ការ Test API Endpoints ជាមួយ Jest',
        },
        durationMinutes: 35,
        difficulty: 'Intermediate',
        explanation: {
          en: `Automated testing gives developers confidence that code changes won't break existing API endpoints.

Types of Backend Tests:
- **Unit Tests**: Test isolated pure functions without external DB or network dependencies.
- **Integration Tests**: Test API routes together with HTTP requests using tools like \`supertest\`.

Example Jest Unit Test:
\`\`\`js
test('calculateTax returns correct 10% VAT', () => {
  expect(calculateTax(100)).toBe(10);
});
\`\`\``,
          km: `Automated Testing ផ្តល់ទំនុកចិត្តដល់អ្នកអភិវឌ្ឍន៍ថាការកែប្រែ Code មិនធ្វើឱ្យប៉ះពាល់ដល់ប្រព័ន្ធដែលមានស្រាប់។

ប្រភេទនៃការ Test៖
- **Unit Tests**: Test លើ Function តូចៗដាច់ដោយឡែក
- **Integration Tests**: Test ដំណើរការ API ទាំងមូលរួមជាមួយ HTTP requests ដោយប្រើ \`supertest\`

ឧទាហរណ៍ Jest Unit Test:
\`\`\`js
test('calculateTax returns correct 10% VAT', () => {
  expect(calculateTax(100)).toBe(10);
});
\`\`\``,
        },
        starterCode: {
          js: `// Simple Test Runner Simulator
function describe(suiteName, fn) {
  console.log(\`\\nSUITE: \${suiteName}\`);
  fn();
}

function test(testName, fn) {
  try {
    fn();
    console.log(\`  ✓ PASSED: \${testName}\`);
  } catch (err) {
    console.error(\`  ✕ FAILED: \${testName} -> \${err.message}\`);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(\`Expected \${expected} but received \${actual}\`);
      }
    }
  };
}

// Running backend logic tests
describe('Authentication Token Expiry Helper', () => {
  const isExpired = (expTimestamp, now) => now >= expTimestamp;

  test('Should flag expired token when current time is past expiry', () => {
    expect(isExpired(1000, 1005)).toBe(true);
  });

  test('Should pass valid token when current time is before expiry', () => {
    expect(isExpired(1000, 950)).toBe(false);
  });
});`,
        },
        simulatedOutput: `
SUITE: Authentication Token Expiry Helper
  ✓ PASSED: Should flag expired token when current time is past expiry
  ✓ PASSED: Should pass valid token when current time is before expiry`,
        realWorldExample: {
          title: { en: 'CI/CD Automated Testing Pipeline', km: 'ប្រព័ន្ធ CI/CD Automated Testing' },
          description: {
            en: 'Before merging pull requests into production at SabayCode, GitHub Actions runs 500+ unit and integration tests automatically.',
            km: 'មុនពេល Merge Code ចូល Production, GitHub Actions ដំណើរការប្រព័ន្ធ Test ជាង ៥០០ ដងដោយស្វ័យប្រវត្តិ។',
          },
        },
        practiceExercise: {
          question: { en: 'What npm library is commonly paired with Jest to make simulated HTTP requests against Express apps during integration testing?', km: 'តើ Library ណាដែលគេប្រើជាមួយ Jest ដើម្បីធ្វើ HTTP Request Test លើ Express App?' },
          solution: 'Supertest',
        },
        quizQuestions: [
          {
            id: 'q12-1-1',
            question: { en: 'What is the primary difference between a Unit Test and an Integration Test?', km: 'តើអ្វីជាភាពខុសគ្នាសំខាន់រវាង Unit Test និង Integration Test?' },
            options: [
              { id: 'a', text: { en: 'Unit tests isolate single components; integration tests check interactions between multiple modules/services', km: 'Unit test ពិនិត្យ Component មួយដាច់ដោយឡែក; Integration test ពិនិត្យការធ្វើការរួមគ្នារវាង Module ច្រើន' }, isCorrect: true },
              { id: 'b', text: { en: 'Unit tests run in CSS; integration tests run in HTML', km: 'Unit test ដំណើរការក្នុង CSS' }, isCorrect: false },
            ],
            explanation: { en: 'Unit tests verify individual functions, whereas integration tests verify end-to-end database or network flows.', km: 'Unit tests ផ្ទៀងផ្ទាត់ Function នីមួយៗ ចំណែក Integration test ផ្ទៀងផ្ទាត់លំហូរប្រព័ន្ធទាំងមូល។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm13',
    moduleNumber: 13,
    title: {
      en: 'Module 13: Docker & Containerization',
      km: 'មេរៀនទី ១៣៖ Docker & Containerization',
    },
    description: {
      en: 'Container concepts, Dockerfile multi-stage builds, Docker Compose for multi-container web apps + databases, and container networking.',
      km: 'សញ្ញាណ Container, Dockerfile Multi-stage builds, Docker Compose និងការភ្ជាប់ បណ្តាញរវាង App និង Database។',
    },
    lessons: [
      {
        id: 'm13-l1',
        slug: 'docker-containers-dockerfile-compose',
        moduleNumber: 13,
        lessonNumberInModule: 1,
        title: {
          en: '1. What Docker is, Writing Dockerfiles & Docker Compose',
          km: '១. អ្វីជា Docker, ការសរសេរ Dockerfile & Docker Compose',
        },
        durationMinutes: 40,
        difficulty: 'Advanced',
        explanation: {
          en: `Docker packages an application and all its runtime dependencies (Node version, libraries, OS configs) into an isolated lightweight Container that runs identically on Mac, Windows, or Cloud servers.

Key Concepts:
- **Image**: Immutable blueprint template.
- **Container**: Running instance of an Image.
- **Dockerfile**: Step-by-step instructions to build an Image.
- **Docker Compose**: Tool for defining multi-container environments (e.g. Node API + PostgreSQL DB + Redis Cache).`,
          km: `Docker ច្របាច់បញ្ចូលគ្នានូវ Application និង Dependencies ទាំងអស់ (Node version, Libraries, OS Configs) ទៅជា Container ដែលដំណើរការដូចគ្នាទាំងស្រុងលើ Mac, Windows ឬ Cloud Server។

សញ្ញាណសំខាន់ៗ៖
- **Image**: គំរូប្លង់ Blueprint
- **Container**: កម្មវិធីដែលកំពុងដំណើរការចេញពី Image
- **Dockerfile**: សេចក្តីណែនាំក្នុងការបង្កើត Image
- **Docker Compose**: ឧបករណ៍សម្រាប់គ្រប់គ្រង Container ច្រើនក្នុងពេលតែមួយ (ឧទាហរណ៍ Node API + PostgreSQL + Redis)។`,
        },
        starterCode: {
          bash: `# Production Node.js Dockerfile Example
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]`,
        },
        simulatedOutput: `[BUILD LOGS]
Step 1/6 : FROM node:20-alpine
Step 2/6 : WORKDIR /app
Step 3/6 : COPY package*.json ./
Step 4/6 : RUN npm ci --only=production
Step 5/6 : EXPOSE 3000
Step 6/6 : CMD ["node", "server.js"]
Successfully built image sha256:d82k91fa8120
Successfully tagged my-backend-api:latest`,
        realWorldExample: {
          title: { en: 'Unified Local Development Environment', km: 'បរិស្ថានអភិវឌ្ឍន៍រួមមួយ' },
          description: {
            en: 'New developers joining a team run single command \`docker compose up\` to instantly start Node API, Postgres, Redis, and Adminer locally without manual installations.',
            km: 'អ្នកអភិវឌ្ឍន៍ថ្មីគ្រាន់តែវាយ \`docker compose up\` នោះប្រព័ន្ធទាំងមូល (Node, Postgres, Redis) នឹងដំណើរការភ្លាមៗ។',
          },
        },
        practiceExercise: {
          question: { en: 'What Docker command lists all currently running containers on your machine?', km: 'តើប្រើប្រាស់ Docker Command ណាដើម្បីមើលបញ្ជី Containers ដែលកំពុងដំណើរការ?' },
          solution: 'docker ps',
        },
        quizQuestions: [
          {
            id: 'q13-1-1',
            question: { en: 'What file name is standard for orchestrating multiple Docker containers like an API server and PostgreSQL database together?', km: 'តើឯកសារឈ្មោះអ្វីដែលជាស្តង់ដារសម្រាប់គ្រប់គ្រង Docker Container ច្រើនរួមគ្នា?' },
            options: [
              { id: 'a', text: { en: 'docker-compose.yml', km: 'docker-compose.yml' }, isCorrect: true },
              { id: 'b', text: { en: 'package.json', km: 'package.json' }, isCorrect: false },
            ],
            explanation: { en: 'docker-compose.yml defines services, networks, and volumes for multi-container deployments.', km: 'docker-compose.yml កំណត់សេវាកម្ម, បណ្តាញ networks និងទំហំទិន្នន័យ volumes សម្រាប់ containers ច្រើន។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm14',
    moduleNumber: 14,
    title: {
      en: 'Module 14: Microservices Fundamentals',
      km: 'មេរៀនទី ១៤៖ មូលដ្ឋានគ្រឹះ Microservices',
    },
    description: {
      en: 'Monolithic vs Microservice architectures, inter-service communication (REST, gRPC, Message Queues), API Gateways, and eventual consistency.',
      km: 'ការប្រៀបធៀប Monolithic និង Microservices, ការទាក់ទងរវាង Service និង Service, API Gateways និង Eventual Consistency។',
    },
    lessons: [
      {
        id: 'm14-l1',
        slug: 'monolith-vs-microservices-gateways',
        moduleNumber: 14,
        lessonNumberInModule: 1,
        title: {
          en: '1. Monolith vs Microservices & API Gateways',
          km: '១. ការប្រៀបធៀប Monolith និង Microservices & API Gateways',
        },
        durationMinutes: 35,
        difficulty: 'Advanced',
        explanation: {
          en: `Architecture Types:
- **Monolith**: Single codebase and deployment unit for all features. Simple to build, test, and deploy initially.
- **Microservices**: Application split into domain-bounded independent services (e.g., Auth Service, Payment Service, Notification Service).

Communication Patterns:
- Synchronous: REST HTTP / gRPC
- Asynchronous: Message Brokers (RabbitMQ, Apache Kafka, NATS)

API Gateway Role:
Acts as the single entry point for clients, routing requests to internal microservices, handling rate limiting, TLS termination, and authentication.`,
          km: `ប្រភេទស្ថាបត្យកម្ម៖
- **Monolith**: Codebase តែមួយដែលផ្ទុក Feature ទាំងអស់។ ងាយស្រួលបង្កើត និង Test ក្នុងដំណាក់កាលដំបូង។
- **Microservices**: បែងចែកកម្មវិធីជាសេវាកម្មតូចៗដាច់ដោយឡែក (ឧទាហរណ៍ Auth Service, Payment Service, Notification Service)។

ទម្រង់នៃការទំនាក់ទំនង៖
- Synchronous: REST HTTP / gRPC
- Asynchronous: Message Brokers (RabbitMQ, Apache Kafka)

តួនាទី API Gateway:
ធ្វើជាច្រកចេញចូលតែមួយសម្រាប់ Client ដោយរ៉ូត Request ទៅកាន់ Microservice ដែលត្រូវគ្នា។`,
        },
        starterCode: {
          js: `// Simulated Microservice API Gateway Router
class ApiGateway {
  constructor() {
    this.services = {
      auth: 'http://auth-service.internal:4001',
      orders: 'http://orders-service.internal:4002',
      notifications: 'http://notify-service.internal:4003'
    };
  }

  routeRequest(path) {
    if (path.startsWith('/api/v1/auth')) {
      return \`[GATEWAY ROUTING TO AUTH SERVICE]: \${this.services.auth}\${path}\`;
    }
    if (path.startsWith('/api/v1/orders')) {
      return \`[GATEWAY ROUTING TO ORDERS SERVICE]: \${this.services.orders}\${path}\`;
    }
    return '[GATEWAY ERROR 404]: Unknown Service';
  }
}

const gateway = new ApiGateway();
console.log(gateway.routeRequest('/api/v1/auth/login'));
console.log(gateway.routeRequest('/api/v1/orders/checkout'));`,
        },
        simulatedOutput: `[GATEWAY ROUTING TO AUTH SERVICE]: http://auth-service.internal:4001/api/v1/auth/login
[GATEWAY ROUTING TO ORDERS SERVICE]: http://orders-service.internal:4002/api/v1/orders/checkout`,
        realWorldExample: {
          title: { en: 'Netflix Microservice Mesh', km: 'ស្ថាបត្យកម្ម Microservice របស់ Netflix' },
          description: {
            en: 'Netflix runs over 500 microservices communicating across internal networks to deliver seamless video streaming to millions.',
            km: 'Netflix ដំណើរការ Microservices ជាង ៥០០ សេវាកម្មផ្សេងៗគ្នាដើម្បីផ្តល់នូវការទស្សនាវីដេអូរលូន។',
          },
        },
        practiceExercise: {
          question: { en: 'What component sits between external client applications and internal microservices to manage routing and auth?', km: 'តើសមាសភាគណាដែលនៅចន្លោះ Client ខាងក្រៅ និង Microservices ខាងក្នុង?' },
          solution: 'API Gateway',
        },
        quizQuestions: [
          {
            id: 'q14-1-1',
            question: { en: 'When should a startup team generally prefer starting with a Monolith instead of Microservices?', km: 'តើពេលណាដែលក្រុមការងារគួរតែចាប់ផ្តើមជាមួយ Monolith ជាជាង Microservices?' },
            options: [
              { id: 'a', text: { en: 'Early stage with small team and evolving domain boundaries', km: 'ដំណាក់កាលដំបូងដែលមានក្រុមតូច និងមុខងារមិនទាន់ទៀងទាត់' }, isCorrect: true },
              { id: 'b', text: { en: 'When they want maximum complex infrastructure', km: 'ពេលចង់បាន Infrastructure សមុគ្រស្មាញ' }, isCorrect: false },
            ],
            explanation: { en: 'Monoliths have significantly lower DevOps complexity and faster feature iteration for small teams.', km: 'Monolith មានភាពស្មុគស្មាញតិចជាងលើ DevOps ធ្វើឱ្យអភិវឌ្ឍបានលឿនសម្រាប់ក្រុមតូច។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm15',
    moduleNumber: 15,
    title: {
      en: 'Module 15: Deployment',
      km: 'មេរៀនទី ១៥៖ ការ Deploy និង គ្រប់គ្រង Production',
    },
    description: {
      en: 'Preparing backend applications for production, environment configurations, PM2 process management, Cloud Run/VPS hosting, and log monitoring.',
      km: 'ការរៀបចំ Backend សម្រាប់ Production, PM2 Process Manager, Cloud Run/VPS Hosting, និងប្រព័ន្ធ Monitoring/Logging។',
    },
    lessons: [
      {
        id: 'm15-l1',
        slug: 'production-deployment-pm2-cloudrun',
        moduleNumber: 15,
        lessonNumberInModule: 1,
        title: {
          en: '1. Production Prep, PM2 Process Manager & Cloud Hosting',
          km: '១. ការរៀបចំ Production, PM2 Process Manager & Cloud Hosting',
        },
        durationMinutes: 35,
        difficulty: 'Intermediate',
        explanation: {
          en: `Deploying a Node.js API to production requires process resiliency, automatic restarts on uncaught exceptions, and zero-downtime reloads.

PM2 (Production Process Manager):
- Keeps Node apps alive forever (\`pm2 start server.js --name "api"\`)
- Cluster mode: Leverages all CPU cores (\`pm2 start server.js -i max\`)
- Auto-restart on server reboot

Cloud Deployment Options:
1. Container Platforms (Google Cloud Run, AWS App Runner): Serverless scaling from 0 to thousands of container instances automatically.
2. Virtual Private Servers (VPS - DigitalOcean, Linode): Full SSH access, running Nginx reverse proxy in front of Node.js.`,
          km: `ការ Deploy Node.js API ទៅកាន់ Production ទាមទារឱ្យមានប្រព័ន្ធការពារមិនឱ្យ Server រលត់ និងអាចបើកឡើងវិញដោយស្វ័យប្រវត្តិ។

PM2 (Process Manager):
- រក្សា Node App ឱ្យដំណើរការជានិច្ច
- Cluster Mode: ប្រើប្រាស់ CPU Cores ទាំងអស់របស់ម៉ាស៊ីន
- Auto-restart ពេល Server រីប៊ូត

ជម្រើស Cloud Deployment៖
១. Container Platforms (Google Cloud Run, AWS App Runner)
២. Virtual Private Server (VPS - DigitalOcean, AWS EC2) ជាមួយ Nginx Reverse Proxy។`,
        },
        starterCode: {
          js: `// PM2 Cluster Mode Workload Distribution Simulator
function simulateClusterMode(cpuCoreCount) {
  const workers = [];
  for (let i = 0; i < cpuCoreCount; i++) {
    workers.push({
      processId: 1000 + i,
      coreIndex: i,
      status: 'ONLINE',
      requestsHandled: 0
    });
  }

  // Round robin request distributor
  let currentWorker = 0;
  return function dispatchRequest(reqId) {
    const worker = workers[currentWorker];
    worker.requestsHandled++;
    currentWorker = (currentWorker + 1) % workers.length;
    return \`[REQ #\${reqId}] Handled by Worker PID \${worker.processId} on CPU Core #\${worker.coreIndex}\`;
  };
}

const dispatch = simulateClusterMode(4); // 4 CPU cores
console.log(dispatch(101));
console.log(dispatch(102));
console.log(dispatch(103));
console.log(dispatch(104));
console.log(dispatch(105));`,
        },
        simulatedOutput: `[REQ #101] Handled by Worker PID 1000 on CPU Core #0
[REQ #102] Handled by Worker PID 1001 on CPU Core #1
[REQ #103] Handled by Worker PID 1002 on CPU Core #2
[REQ #104] Handled by Worker PID 1003 on CPU Core #3
[REQ #105] Handled by Worker PID 1000 on CPU Core #0`,
        realWorldExample: {
          title: { en: 'SabayCode Cloud Run Production Environment', km: 'បរិស្ថាន Cloud Run របស់ SabayCode' },
          description: {
            en: 'This applet itself runs inside a managed Cloud Run container on Google Cloud, handling traffic automatically scaling up and down.',
            km: 'Applet នេះដំណើរការនៅក្នុង Cloud Run Container លើ Google Cloud ដោយមានការ Scale ដោយស្វ័យប្រវត្តិ។',
          },
        },
        practiceExercise: {
          question: { en: 'What command starts a Node.js app using PM2 in cluster mode utilizing all available CPU cores?', km: 'តើ Command PM2 ណាដែលបើក Node App ក្នុង Cluster Mode ប្រើ CPU Cores ទាំងអស់?' },
          solution: 'pm2 start server.js -i max',
        },
        quizQuestions: [
          {
            id: 'q15-1-1',
            question: { en: 'Why is it recommended to put Nginx or Cloud Load Balancer in front of Node.js in production?', km: 'ហេតុអ្វីបានជាគេអនុវត្តដាក់ Nginx ឬ Load Balancer ពីមុខ Node.js ក្នុង Production?' },
            options: [
              { id: 'a', text: { en: 'For TLS termination, static file serving, gzip compression, and rate limiting', km: 'សម្រាប់សម្រួល SSL/TLS, Serving Static Files, Compression និង Rate Limiting' }, isCorrect: true },
              { id: 'b', text: { en: 'Because Node.js cannot read ports', km: 'ព្រោះ Node មិនអាចអាន Ports បាន' }, isCorrect: false },
            ],
            explanation: { en: 'Nginx handles low-level C-speed network tasks freeing Node.js to focus purely on application business logic.', km: 'Nginx ធ្វើការលើបណ្តាញកម្រិតទាបយ៉ាងរហ័ស ទុកឱ្យ Node.js ផ្ោតលើ Business Logic។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm16',
    moduleNumber: 16,
    title: {
      en: 'Module 16: Capstone Project',
      km: 'មេរៀនទី ១៦៖ គម្រោងបញ្ចប់ការសិក្សា (Capstone)',
    },
    description: {
      en: 'Design, build, test, and containerize a complete production-grade REST API combining Express, Database (Postgres/Mongo), JWT Authentication, Redis Caching, Docker Compose, and Swagger documentation.',
      km: 'រចនា, បង្កើត, Test និង Containerize REST API ពេញលេញមួយ រួមមាន Express, Database, JWT Auth, Redis, Docker Compose និង Swagger Documentation។',
    },
    lessons: [
      {
        id: 'm16-l1',
        slug: 'full-backend-rest-api-capstone',
        moduleNumber: 16,
        lessonNumberInModule: 1,
        title: {
          en: '1. Final Capstone Project: Enterprise REST API Service',
          km: '១. គម្រោងបញ្ចប់ការសិក្សា៖ Enterprise REST API Service',
        },
        durationMinutes: 60,
        difficulty: 'Advanced',
        explanation: {
          en: `Congratulations on reaching Module 16! It is time to synthesize everything you have learned across the 15 modules into a production-grade backend service.

Capstone Requirements Checklist:
1. Architecture & Setup:
   - Clean folder structure (\`/src/controllers\`, \`/src/models\`, \`/src/middleware\`, \`/src/routes\`, \`/src/services\`).
   - Environment variables loaded via \`.env\` file.
2. Authentication & Authorization:
   - Registration & Login with Bcrypt password hashing.
   - Protected routes using JWT bearer tokens.
   - Role-Based Access Control (\`admin\` vs \`user\`).
3. Database & Caching:
   - Relational (PostgreSQL) or Document (MongoDB) store with proper schema models.
   - Redis cache-aside caching layer for GET endpoints with TTL.
4. Security & Validation:
   - Parameterized SQL / Mongoose validation.
   - CORS, Helmet security headers, rate limiting middleware.
5. Containerization & Testing:
   - Multi-stage \`Dockerfile\` + \`docker-compose.yml\` binding API service, database, and Redis.
   - Automated unit & integration tests written with Jest.`,
          km: `អបអរសាទរដែលបានឈានមកដល់មេរៀនទី ១៦! ដល់ពេលត្រូវបូកសរុបចំណេះដឹងទាំងអស់ពី ១៥ មេរៀនមុន ដើម្បីបង្កើតនូវ Backend Service ដ៏ពេញលេញមួយ។

បញ្ជីតម្រូវការគម្រោង Capstone៖
១. រចនាសម្ព័ន្ធ & ការរៀបចំ៖
   - រៀបចំ Folder ឱ្យមានរបៀប (\`/src/controllers\`, \`/src/models\`, \`/src/middleware\`, \`/src/routes\`)
   - ប្រើប្រាស់ Environment variables តាម \`.env\`
២. Authentication & Authorization:
   - ប្រព័ន្ធ ចុះឈ្មោះ & ចូលប្រើ ជាមួយ Bcrypt
   - ការពារ Routes ជាមួយ JWT Tokens
   - កំណត់សិទ្ធិ Role-Based (\`admin\` vs \`user\`)
៣. Database & Caching:
   - PostgreSQL ឬ MongoDB ជាមួយ Schema ច្បាស់លាស់
   - Redis Caching លើ GET Endpoints ជាមួយ TTL
៤. សុវត្ថិភាព & Validation:
   - Parameterized SQL / Mongoose Validation
   - CORS, Helmet headers, Rate limiting
៥. Containerization & Testing:
   - \`Dockerfile\` + \`docker-compose.yml\` រួមបញ្ចូលគ្នា
   - Automated tests ជាមួយ Jest។`,
        },
        tutorial: {
          en: `Below is a complete executable architectural mock of your capstone backend pipeline. Submit your final capstone verification checklist below to complete the Backend Engineering & RESTful APIs class!`,
          km: `ខាងក្រោមនេះជា Architectural Mock នៃប្រព័ន្ធ Backend Capstone របស់អ្នក។ បំពេញការបញ្ជាក់ Capstone ខាងក្រោមដើម្បីបញ្ចប់វគ្គសិក្សា Backend Engineering 100%!`,
        },
        starterCode: {
          js: `// Complete Backend Capstone Architecture Verification Test
class BackendCapstonePipeline {
  constructor() {
    this.status = {
      expressServer: 'READY',
      databaseConnection: 'CONNECTED (PostgreSQL / MongoDB)',
      redisCache: 'ACTIVE (TTL 3600s)',
      jwtAuthConfig: 'CONFIGURED (Bcrypt + JWT)',
      dockerContainer: 'CONTAINERIZED (Docker Compose)',
      unitTestsPassed: 18
    };
  }

  verifyAllSystems() {
    console.log('=== SABAYCODE BACKEND CAPSTONE AUDIT ===');
    Object.entries(this.status).forEach(([key, val]) => {
      console.log(\`  ✓ \${key.padEnd(22)}: \${val}\`);
    });
    return 'CAPSTONE READY FOR PRODUCTION DEPLOYMENT!';
  }
}

const audit = new BackendCapstonePipeline();
console.log(audit.verifyAllSystems());`,
        },
        simulatedOutput: `=== SABAYCODE BACKEND CAPSTONE AUDIT ===
  ✓ expressServer         : READY
  ✓ databaseConnection    : CONNECTED (PostgreSQL / MongoDB)
  ✓ redisCache            : ACTIVE (TTL 3600s)
  ✓ jwtAuthConfig         : CONFIGURED (Bcrypt + JWT)
  ✓ dockerContainer       : CONTAINERIZED (Docker Compose)
  ✓ unitTestsPassed       : 18
CAPSTONE READY FOR PRODUCTION DEPLOYMENT!`,
        realWorldExample: {
          title: { en: 'Enterprise Microservice Core API', km: 'ប្រព័ន្ធ Enterprise Microservice Core API' },
          description: {
            en: 'This architectural blueprint represents standard production services operating in Fortune 500 tech companies and high-growth technology startups worldwide.',
            km: 'ប្លង់ស្ថាបត្យកម្មនេះជាស្តង់ដារដែលត្រូវបានប្រើប្រាស់ក្នុងក្រុមហ៊ុនបច្ចេកវិទ្យាឈានមុខជុំវិញពិភពលោក។',
          },
        },
        practiceExercise: {
          question: { en: 'Confirm all 16 modules are reviewed and press "Submit Capstone Project" to complete the class.', km: 'ពិនិត្យមើលថាមេរៀនទាំង ១៦ ត្រូវបានសិក្សារួចរាល់ រួចចុច "Submit Capstone Project" ដើម្បីបញ្ចប់ថ្នាក់រៀន។' },
          solution: 'Submit Capstone Project verification completed!',
        },
        quizQuestions: [
          {
            id: 'q16-1-1',
            question: { en: 'What key benefit does Docker Compose provide when testing a Capstone project with Express, PostgreSQL, and Redis?', km: 'តើ Docker Compose ផ្តល់ប្រយោជន៍អ្វីខ្លះពេលរៀបចំ Capstone ជាមួយ Express, PostgreSQL និង Redis?' },
            options: [
              { id: 'a', text: { en: 'It spins up and networks all 3 isolated services with a single terminal command', km: 'វាបើក និងតភ្ជាប់សេវាកម្មទាំង៣ ជាមួយគ្នាតាមតែមួយ Command' }, isCorrect: true },
              { id: 'b', text: { en: 'It writes the JavaScript code automatically', km: 'វាសរសេរ Code ដោយស្វ័យប្រវត្តិ' }, isCorrect: false },
            ],
            explanation: { en: 'Docker Compose orchestrates multi-container applications so database and caching servers run seamlessly beside your Node backend.', km: 'Docker Compose គ្រប់គ្រង Container ច្រើន ធ្វើឱ្យ Database និង Cache Server ដំណើរការយ៉ាងរលូនជាមួយ Node Backend។' },
          },
        ],
      },
    ],
  },
];

export function getAllBackendLessons() {
  const lessons = [];
  for (const mod of backendModulesData) {
    for (const les of mod.lessons) {
      lessons.push(les);
    }
  }
  return lessons;
}

export function getBackendLessonById(id: string) {
  const all = getAllBackendLessons();
  return all.find((l) => l.id === id) || all[0];
}
