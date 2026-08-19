import { FrontendLesson } from '../types/frontendClass';

export const DEVTOOLS_LESSONS_PART2: FrontendLesson[] = [
  // ==========================================
  // MODULE 5: Network Panel & API Debugging
  // ==========================================
  {
    id: 'dt-5-1',
    slug: 'recording-network-requests-and-status-codes',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: {
      en: '5.1 Recording Network Requests & Status Codes',
      km: '5.1 ការថតកត់ត្រា Network Requests និងការពិនិត្យ Status Codes'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The Network panel records every network transaction made by the browser page, including HTML, CSS, JavaScript, images, fonts, and backend fetch/XHR API calls. Each request row displays the request Name, HTTP Status Code (e.g. 200 OK, 304 Not Modified, 404 Not Found, 500 Internal Server Error), resource Type, Size/transfer payload, and Time duration.',
      km: 'Network Panel កត់ត្រារាល់ប្រតិបត្តិការ Network ដែលកើតឡើងលើ Browser រួមមាន HTML, CSS, JavaScript, រូបភាព, Fonts, និង API calls (fetch/XHR)។ បន្ទាត់ Requests នីមួយៗបង្ហាញពី ឈ្មោះ Request, HTTP Status Code (ដូចជា 200 OK, 304 Not Modified, 404 Not Found, 500 Internal Error), ប្រភេទ Resource, ទំហំ (Size) និង រយៈពេលរត់ (Time)។'
    },
    tutorial: {
      en: `🌐 Network Requests Table & Filters:

1. Recording Indicator: Red circle icon at top left indicates Network recording is active.
2. Clear Network Log: Click the clear icon (🚫) to wipe previous network request rows.
3. Network Filter Tabs: Filter table by resource category: All, Fetch/XHR (APIs), JS, CSS, Img, Media, Font, Doc.
4. HTTP Status Codes Cheat Sheet:
   - 2xx (200, 201): Success OK
   - 3xx (301, 304): Redirection or cached resource
   - 4xx (400, 401, 403, 404): Client-side error (Bad request, Unauthorized, Not Found)
   - 5xx (500, 502, 503): Backend server crash or gateway timeout error

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Network Fetch Inspection:
---------------------------------------------------
Sample Code:
<button onclick="fetch('https://jsonplaceholder.typicode.com/todos/1')">Fetch Data</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក DevTools -> ចុច Tab "Network" -> ជ្រើស Filter Tab "Fetch/XHR"
2. ចុចប៊ូតុង "Fetch Data" លើ Web Page
3. មើលតារាង Network Requests

លទ្ធផលដែលឃើញ (What you'll see):
- បន្ទាត់ Request ថ្មីលេចឡើង៖
  Name: 1
  Status: 200 OK
  Type: fetch
  Size: ~1.6 kB
  Time: ~120 ms`,
      km: `🌐 តារាង Network Requests និងរបៀប Filter៖

១. ភ្លើងថត (Recording)៖ សញ្ញារង្វង់ពណ៌ក្រហមនៅជ្រុងឆ្វេងលើ បញ្ជាក់ថា Network កំពុងថតតាមដាន។
២. សម្អាត Network Log៖ ចុចលើ Icon (🚫) ដើម្បីលុបសម្អាតបញ្ជី Requests ចាស់ៗ។
៣. របារ Filter Tabs៖ តម្រៀបមើលតាមប្រភេទ៖ All, Fetch/XHR (APIs), JS, CSS, Img, Media, Font, Doc។
៤. ព័ត៌មានសង្ខេប HTTP Status Codes៖
   - 2xx (200, 201): ជោគជ័យ (Success)
   - 3xx (301, 304): បង្វែរទិសដៅ ឬប្រើ Cache
   - 4xx (400, 401, 403, 404): Client-side Error (ខុស URL, អត់មានសិទ្ធិ, រកមិនឃើញ)
   - 5xx (500, 502, 503): Backend Server ខូច ឬ Crashed

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — ការពិនិត្យ Network Fetch៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<button onclick="fetch('https://jsonplaceholder.typicode.com/todos/1')">Fetch Data</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក DevTools -> ចុច Tab "Network" -> ជ្រើស Filter Tab "Fetch/XHR"
2. ចុចប៊ូតុង "Fetch Data" លើ Web Page
3. មើលតារាង Network Requests

លទ្ធផលដែលឃើញ (What you'll see):
- បន្ទាត់ Request ថ្មីលេចឡើង៖
  Name: 1
  Status: 200 OK
  Type: fetch
  Size: ~1.6 kB
  Time: ~120 ms`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
    button { background: #38bdf8; color: #0f172a; border: none; padding: 10px 18px; border-radius: 6px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Network Recording Demo</h2>
  <button onclick="loadUser()">Fetch Dummy User</button>
  <p id="out">Click button with Network tab open!</p>
  <script>
    function loadUser() {
      fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(r => r.json())
        .then(d => document.getElementById('out').innerText = "User: " + d.name);
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Diagnosing Broken API Endpoints (404 / 500)',
        km: '🎯 ការដោះស្រាយបញ្ហា API Endpoints ដែលខូច'
      },
      description: {
        en: 'When a web app displays an infinite loading spinner, engineers open Network tab to see if the API request returned a red 404 Not Found or 500 Server Error status code.',
        km: 'នៅពេល Web App វិល Loading រហូតមិនឈប់ Developers បើក Network Tab ដើម្បីមើលថាតើ API នោះជួប Error 404 រកមិនឃើញ ឬ Error 500 Server ខូច។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which filter sub-tab inside the Network panel isolates API AJAX calls from images and CSS stylesheets?',
        km: 'តើ Filter Sub-tab មួយណាក្នុង Network Panel ដែលបែងចែកតែ API AJAX Requests ចេញពីរូបភាព និង CSS?'
      },
      solution: 'Fetch/XHR tab'
    },
    quizQuestions: [
      {
        id: 'q-dt-5-1',
        question: {
          en: 'What HTTP status code range indicates a client-side error (such as an incorrect URL or missing authentication token)?',
          km: 'តើជួរ HTTP Status Code មួយណាដែលបញ្ជាក់ពី Client-side Error (ដូចជាវាយ URL ខុស ឬអត់មាន Token)?'
        },
        options: [
          { id: '1', text: { en: '4xx status codes (e.g. 404, 401)', km: '4xx status codes (ឧ. 404, 401)' }, isCorrect: true },
          { id: '2', text: { en: '2xx status codes (e.g. 200, 201)', km: '2xx status codes (ឧ. 200, 201)' }, isCorrect: false }
        ],
        explanation: {
          en: '4xx status codes indicate client-side request errors.',
          km: '4xx បញ្ជាក់ពី Error ដែលកើតឡើងពីខាង Client។'
        }
      }
    ]
  },

  {
    id: 'dt-5-2',
    slug: 'inspecting-request-headers-payload-and-response',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: {
      en: '5.2 Inspecting Request Headers, Payload & Response Sub-tabs',
      km: '5.2 ការពិនិត្យមើល Request Headers, Payload និង Response Sub-tabs'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Clicking any individual request row inside the Network panel opens a detailed side/bottom inspector drawer with 4 primary sub-tabs: Headers (HTTP method, Request/Response headers, status code, authorization headers), Payload (POST/PUT body data sent to server), Preview (formatted HTML/JSON trees or rendered image previews), and Response (raw response body string).',
      km: 'ការចុចលើបន្ទាត់ Request ណាមួយក្នុង Network Panel នឹងបើកផ្ទាំងលម្អិតដែលមាន ៤ Sub-tabs ចម្បង៖ Headers (HTTP Method, Request/Response Headers, Status, Auth Token), Payload (ទិន្នន័យ POST/PUT ដែលផ្ញើទៅកាន់ Server), Preview (បង្ហាញទិន្នន័យ JSON/HTML ជារចនាសម្ព័ន្ធស្អាត), និង Response (បង្ហាញទិន្នន័យ Raw String ដែលទទួលបានពី Server)។'
    },
    tutorial: {
      en: `🔍 Detailed Request Drawer Sub-tabs:

1. Headers Sub-tab: View General request URL, Request Method (GET, POST, PUT, DELETE), Status Code, and Request Headers (Authorization: Bearer token, Content-Type: application/json).
2. Payload Sub-tab: Inspect form data or JSON object body sent from client to backend endpoint during POST/PUT operations.
3. Preview Sub-tab: Displays expandable interactive JSON trees or rendered image/HTML thumbnails.
4. Response Sub-tab: Shows exact unformatted raw response body text string returned from server.
5. Timing Sub-tab: Displays breakdown waterfall breakdown (DNS lookup, initial connection, TTFB time-to-first-byte, download duration).

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Inspecting POST Payload:
---------------------------------------------------
Sample Code:
<button onclick="fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'DevTools Mastery', body: '...' })
})">Send POST Request</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ក្នុង Network tab -> ចុចប៊ូតុង "Send POST Request"
2. ចុចលើបន្ទាត់ Request ឈ្មោះ 'posts'
3. ប្តូរទៅកាន់ Tab "Payload" រួចប្តូរទៅ Tab "Response"

លទ្ធផលដែលឃើញ (What you'll see):
- ក្នុង Payload tab បង្ហាញទិន្នន័យ JSON ដែលបានផ្ញើទៅ៖ { title: "DevTools Mastery", body: "..." }
- ក្នុង Response tab បង្ហាញ JSON ចម្លើយតបពី Server មានអមជាមួយ ID ថ្មី៖ { id: 101, title: "DevTools Mastery", ... }!`,
      km: `🔍 ការពិនិត្យ Sub-tabs លម្អិតនៃ Request Drawer៖

១. Headers Sub-tab៖ មើល Request URL, Method (GET, POST, PUT, DELETE), Status, និង Request Headers (Authorization Token, Content-Type)។
២. Payload Sub-tab៖ ពិនិត្យមើលទិន្នន័យ Form ឬ JSON ដែលផ្ញើចេញពី Client ទៅកាន់ Backend ក្នុង POST/PUT requests។
៣. Preview Sub-tab៖ បង្ហាញទិន្នន័យ JSON ជា Tree អាចចុចពង្រីក/បង្រួមបានស្អាតបាត។
៤. Response Sub-tab៖ បង្ហាញអត្ថបទ Raw Text ទាំងអស់ដែល Server ឆ្លើយតបមកវិញ។
៥. Timing Sub-tab៖ បង្ហាញពីពេលវេលារត់ (DNS, Connection, TTFB - Time to First Byte)។

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — ការពិនិត្យ POST Payload៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<button onclick="fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'DevTools Mastery', body: '...' })
})">Send POST Request</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ក្នុង Network tab -> ចុចប៊ូតុង "Send POST Request"
2. ចុចលើបន្ទាត់ Request ឈ្មោះ 'posts'
3. ប្តូរទៅកាន់ Tab "Payload" រួចប្តូរទៅ Tab "Response"

លទ្ធផលដែលឃើញ (What you'll see):
- ក្នុង Payload tab បង្ហាញទិន្នន័យ JSON ដែលបានផ្ញើទៅ៖ { title: "DevTools Mastery", body: "..." }
- ក្នុង Response tab បង្ហាញ JSON ចម្លើយតបពី Server មានអមជាមួយ ID ថ្មី៖ { id: 101, title: "DevTools Mastery", ... }!`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #020617; color: white; padding: 24px; }
    button { background: #10b981; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Network Payload Inspector</h2>
  <button onclick="sendData()">Post Data to Server</button>
  <script>
    function sendData() {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: "Sokha", email: "sokha@dev.com" })
      });
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Verifying Authorization Tokens in Request Headers',
        km: '🎯 ការផ្ទៀងផ្ទាត់ Authorization Tokens ក្នុង Request Headers'
      },
      description: {
        en: 'When debugging 401 Unauthorized errors, backend and frontend developers open the Headers sub-tab to ensure the Authorization Bearer token header is properly attached to outgoing API requests.',
        km: 'ពេលមាន Error 401 Unauthorized Developers តែងបើក Headers sub-tab ដើម្បីពិនិត្យមើលថា តើ Authorization Bearer token បានផ្ញើទៅកាន់ Server ត្រឹមត្រូវដែរឬទេ'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which sub-tab inside a Network request detail drawer displays the POST/PUT request body data sent to the backend?',
        km: 'តើ Sub-tab មួយណាក្នុង Network Request Detail Drawer ដែលបង្ហាញទិន្នន័យ POST/PUT Body ដែលផ្ញើទៅកាន់ Backend?'
      },
      solution: 'Payload sub-tab'
    },
    quizQuestions: [
      {
        id: 'q-dt-5-2',
        question: {
          en: 'Where in DevTools can you view formatted JSON trees returned from a REST API endpoint?',
          km: 'តើក្នុង DevTools ផ្នែកណាដែលអ្នកអាចមើលឃើញរចនាសម្ព័ន្ធ JSON ស្អាតបាតដែលទទួលបានពី REST API?'
        },
        options: [
          { id: '1', text: { en: 'Preview sub-tab inside Network request details drawer', km: 'Preview sub-tab ក្នុង Network Request Detail Drawer' }, isCorrect: true },
          { id: '2', text: { en: 'Elements panel DOM tree', km: 'Elements panel DOM Tree' }, isCorrect: false }
        ],
        explanation: {
          en: 'Preview tab formats JSON responses into interactive expandable tree view nodes.',
          km: 'Preview tab បង្ហាញ JSON ជារចនាសម្ព័ន្ធស្អាត ងាយស្រួលចុចមើល។'
        }
      }
    ]
  },

  {
    id: 'dt-5-3',
    slug: 'network-throttling-and-offline-mode',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: {
      en: '5.3 Network Throttling (Fast 3G, Slow 3G, Offline)',
      km: '5.3 ការកំណត់ល្បឿន Network Throttling (Fast 3G, Slow 3G, Offline)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Not all users browse on high-speed fiber internet. The Network panel toolbar includes a Throttling dropdown menu allowing developers to simulate slow network conditions: Fast 3G, Slow 3G, or complete Offline mode. This lets engineers evaluate loading spinners, test offline fallback UI states, and measure performance under poor cellular connectivity.',
      km: 'មិនមែនអ្នកប្រើប្រាស់ទាំងអស់សុទ្ធតែមាន អ៊ីនធឺណិតល្បឿនលឿន Fiber នោះទេ។ Network Panel ផ្តល់ប្រអប់ Throttling Dropdown អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍តេស្តល្បឿនអ៊ីនធឺណិតយឺតៗ៖ Fast 3G, Slow 3G ឬ បិទសេវា Offline ទាំងស្រុង។ ឧបករណ៍នេះជួយតេស្ត Loading Spinners, UI ពេលដាច់សេវា និងល្បឿនលើ Mobile Data។'
    },
    tutorial: {
      en: `📡 Network Throttling & Offline Testing Steps:

1. Throttling Dropdown: Click "No throttling" dropdown in Network header toolbar.
2. Select Slow 3G: Simulates ~400ms RTT latency and 400 kbps download speed.
3. Select Fast 3G: Simulates ~56ms RTT latency and 1.6 Mbps download speed.
4. Select Offline: Disables all network traffic completely!
5. Custom Profiles: Click "Add custom profile" to define precise download/upload bandwidth limits in kbps.

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Offline Mode Test:
---------------------------------------------------
Sample Code:
<button onclick="fetch('https://jsonplaceholder.typicode.com/posts/1').catch(err => alert('Network Error!'))">Fetch Post</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ក្នុង Network Tab -> ប្តូរប្រអប់ "No throttling" ទៅជា "Offline"
2. ចុចប៊ូតុង "Fetch Post" លើ Web Page

លទ្ធផលដែលឃើញ (What you'll see):
- ប្រព័ន្ធនឹង Catch Error ភ្លាមៗ ហើយបង្ហាញ Alert Network Error!
- ក្នុង Network tab បង្ហាញ Request ពណ៌ក្រហមមាន Status (failed) net::ERR_INTERNET_DISCONNECTED!`,
      km: `📡 ជំហានតេស្ត Network Throttling និង Offline Mode៖

១. ប្រអប់ Throttling Dropdown៖ ចុចលើពាក្យ "No throttling" ក្នុង Network Header Toolbar។
២. ជ្រើសយក Slow 3G៖ បង្កើតលក្ខខណ្ឌអ៊ីនធឺណិតយឺត (~400ms latency, 400 kbps download)។
៣. ជ្រើសយក Fast 3G៖ បង្កើតលក្ខខណ្ឌអ៊ីនធឺណិតទូរស័ព្ទមធ្យម (~56ms latency, 1.6 Mbps download)។
៤. ជ្រើសយក Offline៖ បិទសេវាអ៊ីនធឺណិតលើ Browser ទាំងស្រុង!
៥. Custom Profiles៖ ចុច "Add custom profile" ដើម្បីកំណត់ល្បឿន Download/Upload ដោយខ្លួនឯង។

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — ការតេស្ត Offline Mode៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<button onclick="fetch('https://jsonplaceholder.typicode.com/posts/1').catch(err => alert('Network Error!'))">Fetch Post</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ក្នុង Network Tab -> ប្តូរប្រអប់ "No throttling" ទៅជា "Offline"
2. ចុចប៊ូតុង "Fetch Post" លើ Web Page

លទ្ធផលដែលឃើញ (What you'll see):
- ប្រព័ន្ធនឹង Catch Error ភ្លាមៗ ហើយបង្ហាញ Alert Network Error!
- ក្នុង Network tab បង្ហាញ Request ពណ៌ក្រហមមាន Status (failed) net::ERR_INTERNET_DISCONNECTED!`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
    button { background: #f59e0b; color: black; border: none; padding: 10px 18px; border-radius: 6px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Network Throttling Demo</h2>
  <button onclick="testFetch()">Test Slow Fetch</button>
  <p id="msg">Set Network Throttling to 'Slow 3G' and click button!</p>
  <script>
    function testFetch() {
      document.getElementById('msg').innerText = "Loading data over network...";
      fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then(r => r.json())
        .then(d => document.getElementById('msg').innerText = "Loaded " + d.length + " comments!");
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Verifying Progressive Web App (PWA) Offline Capability',
        km: '🎯 ការតេស្ត Progressive Web App (PWA) ពេលដាច់សេវា'
      },
      description: {
        en: 'When building PWAs or Service Workers, engineers switch Network throttling to "Offline" to ensure the app continues to display cached content instead of a broken browser dinosaur screen.',
        km: 'ពេលបង្កើត PWA ឬ Service Worker Developers ប្តូរ Network ទៅជា "Offline" ដើម្បីធានាថា Web នៅតែបង្ហាញ ទិន្នន័យចាស់បាន ទោះជាអត់មានសេវាក៏ដោយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What feature in DevTools Network tab allows testing web applications under 3G cellular network latency without leaving your desk?',
        km: 'តើ Feature មួយណាក្នុង Network Tab ដែលអនុញ្ញាតឱ្យតេស្ត Web ក្រោមសេវា 3G ដោយមិនបាច់ដើរចេញពីតុធ្វើការ?'
      },
      solution: 'Network Throttling dropdown (Fast 3G / Slow 3G)'
    },
    quizQuestions: [
      {
        id: 'q-dt-5-3',
        question: {
          en: 'What status message appears in Network tab when a fetch request is attempted while Network Throttling is set to Offline?',
          km: 'តើ Status អ្វីដែលបង្ហាញក្នុង Network Tab ពេល Fetch ទិន្នន័យខណៈពេលដែល Throttling ត្រូវសេតទៅ Offline?'
        },
        options: [
          { id: '1', text: { en: '(failed) net::ERR_INTERNET_DISCONNECTED', km: '(failed) net::ERR_INTERNET_DISCONNECTED' }, isCorrect: true },
          { id: '2', text: { en: '200 OK', km: '200 OK' }, isCorrect: false }
        ],
        explanation: {
          en: 'Offline mode blocks all network sockets, resulting in instant client net disconnect errors.',
          km: 'Offline mode បិទសេវាទាំងអស់ បណ្តាលឱ្យមាន Error net::ERR_INTERNET_DISCONNECTED។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 6: Application Panel & Browser Storage
  // ==========================================
  {
    id: 'dt-6-1',
    slug: 'localstorage-sessionstorage-and-cookie-management',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: {
      en: '6.1 LocalStorage, SessionStorage & Cookie Management',
      km: '6.1 គ្រប់គ្រង LocalStorage, SessionStorage និង Cookies'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The Application panel is dedicated to client-side data storage and web assets. Inside the Storage tree section on the left sidebar, developers can inspect, add, edit, or delete key-value pairs stored inside LocalStorage (persistent storage), SessionStorage (cleared when browser tab closes), and Cookies (HTTP session tokens and tracking cookies).',
      km: 'Application Panel ផ្តោតសំខាន់លើការគ្រប់គ្រង Client-side Data Storage និង Web Assets។ នៅក្នុង Storage Tree នៅ Sidebar ខាងឆ្វេង អ្នកអភិវឌ្ឍន៍អាច ពិនិត្យមើល, បន្ថែម, កែប្រែ ឬលុប Key-Value Pairs ក្នុង LocalStorage (រក្សាទុកជារហូត), SessionStorage (បាត់វិញពេលបិទ Tab) និង Cookies (Session Tokens)។'
    },
    tutorial: {
      en: `🗄️ Managing Storage Key-Value Pairs:

1. Expand Storage Tree: In Application panel sidebar -> expand Local Storage -> click domain origin (e.g. http://localhost:3000).
2. View Key-Value Table: Displays 2 primary columns: Key and Value.
3. Add New Entry: Double-click empty bottom row -> type Key name (e.g. theme) -> type Value (e.g. dark).
4. Edit Value: Double-click any existing cell value -> modify text -> press Enter.
5. Delete Entry: Click a key-value row -> press Delete key (or click "X" delete icon at top toolbar).
6. Clear All Storage: Click the clear icon (🚫) to wipe all key-value entries in that storage scope instantly.

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — LocalStorage Edit:
---------------------------------------------------
Sample Code:
<button onclick="localStorage.setItem('user_role', 'admin')">Set Role</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក DevTools -> ចុច Tab "Application"
2. នៅ Sidebar ខាងឆ្វេង -> ពង្រីក "Local Storage" -> ចុចលើ domain name
3. ចុចប៊ូតុង "Set Role" លើ Web Page

លទ្ធផលដែលឃើញ (What you'll see):
- បន្ទាត់ថ្មីលេចឡើងក្នុងតារាង LocalStorage៖
  Key: user_role
  Value: admin
- អាច Double-click លើពាក្យ "admin" ដើម្បីប្តូរទៅជា "editor" ផ្ទាល់បាន!`,
      km: `🗄️ ការគ្រប់គ្រង Storage Key-Value Pairs៖

១. ពង្រីក Storage Tree៖ ក្នុង Application panel sidebar -> ពង្រីក Local Storage -> ចុចលើ domain origin (ឧ. http://localhost:3000)។
២. មើលតារាង Key-Value៖ បង្ហាញជា ២ ជួរចម្បង៖ Key និង Value។
៣. បន្ថែម Key-Value ថ្មី៖ Double-click លើបន្ទាត់ទទេខាងក្រោម -> វាយ Key (ឧ. theme) -> វាយ Value (ឧ. dark)។
៤. កែប្រែ Value៖ Double-click លើប្រអប់ Value ណាមួយ -> កែប្រែ -> ចុច Enter។
៥. លុប Key-Value៖ ចុចលើ Key-Value row -> ចុចប៊ូតុង Delete (ឬ Icon "X" ខាងលើ)។
៦. សម្អាត Storage ទាំងមូល៖ ចុច Icon (🚫) ដើម្បីលុបសម្អាត Key-Value ទាំងអស់ភ្លាមៗ។

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — LocalStorage Edit៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<button onclick="localStorage.setItem('user_role', 'admin')">Set Role</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក DevTools -> ចុច Tab "Application"
2. នៅ Sidebar ខាងឆ្វេង -> ពង្រីក "Local Storage" -> ចុចលើ domain name
3. ចុចប៊ូតុង "Set Role" លើ Web Page

លទ្ធផលដែលឃើញ (What you'll see):
- បន្ទាត់ថ្មីលេចឡើងក្នុងតារាង LocalStorage៖
  Key: user_role
  Value: admin
- អាច Double-click លើពាក្យ "admin" ដើម្បីប្តូរទៅជា "editor" ផ្ទាល់បាន!`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
    button { background: #8b5cf6; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; margin-right: 8px; }
  </style>
</head>
<body>
  <h2>LocalStorage Application Demo</h2>
  <button onclick="saveToken()">Save Auth Token</button>
  <button onclick="readToken()">Read Auth Token</button>
  <p id="out">Open Application tab -> Local Storage!</p>
  <script>
    function saveToken() {
      localStorage.setItem('auth_token', 'xyz_123_secret_token');
      document.getElementById('out').innerText = "Saved to LocalStorage!";
    }
    function readToken() {
      const tok = localStorage.getItem('auth_token');
      document.getElementById('out').innerText = "Token: " + (tok || "None");
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Testing Auth Session Expiration with Storage Clearance',
        km: '🎯 ការតេស្ត Log Out ឬបាត់ Token ដោយការលុប Storage'
      },
      description: {
        en: 'Frontend engineers frequently delete the auth_token key inside Application LocalStorage to test how gracefully the application redirects unauthenticated users back to the login screen.',
        km: 'Developers តែងតែលុប auth_token ចេញពី Application LocalStorage ដើម្បីតេស្តមើលថាតើ Web App នឹងលោតបង្វែរ User ទៅ Login Page ដោយរលូនដែរឬទេ'
      }
    },
    practiceExercise: {
      question: {
        en: 'What key-value storage in Application panel automatically clears all its data as soon as the browser tab is closed?',
        km: 'តើ Storage មួយណាក្នុង Application Panel ដែលនឹងលុបទិន្នន័យចោលដោយស្វ័យប្រវត្តិ ភ្លាមៗនៅពេលបិទ Tab Browser?'
      },
      solution: 'SessionStorage'
    },
    quizQuestions: [
      {
        id: 'q-dt-6-1',
        question: {
          en: 'What is the main difference between LocalStorage and SessionStorage in web browsers?',
          km: 'តើអ្វីជាផលខុសគ្នាចម្បងរវាង LocalStorage និង SessionStorage ក្នុង Browser?'
        },
        options: [
          { id: '1', text: { en: 'LocalStorage persists across browser restarts; SessionStorage clears when the tab is closed', km: 'LocalStorage រក្សាទុកជារហូត; SessionStorage លុបចោលពេលបិទ Tab' }, isCorrect: true },
          { id: '2', text: { en: 'SessionStorage is stored on backend servers', km: 'SessionStorage រក្សាទុកលើ Server' }, isCorrect: false }
        ],
        explanation: {
          en: 'LocalStorage has no expiration time; SessionStorage expires when session tab ends.',
          km: 'LocalStorage មិនមានថ្ងៃផុតកំណត់ទេ រីឯ SessionStorage បាត់បង់ពេលបិទ Tab។'
        }
      }
    ]
  },

  {
    id: 'dt-6-2',
    slug: 'clear-site-data-and-cache-storage',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: {
      en: '6.2 Clear Site Data & Cache Storage Clearance',
      km: '6.2 ការប្រើប្រាស់ Clear Site Data និង Cache Clearance'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'During active development, stale client caches, old service workers, and outdated cookies can cause confusing bugs where newly deployed code fails to show up. The "Storage" menu option inside the Application panel provides a one-click "Clear site data" button that purges LocalStorage, SessionStorage, IndexedDB, Web SQL, Service Workers, and Cache Storage simultaneously.',
      km: 'ក្នុងអំឡុងពេលសរសេរកូដ Cache ចាស់ៗ, Service Workers និង Cookies ចាស់ៗ អាចបង្កជា Bug រំខានធ្វើឱ្យកូដថ្មីមិនព្រមបង្ហាញ។ ផ្ទាំង "Storage" ក្នុង Application Panel ផ្តល់នូវប៊ូតុង "Clear site data" តែមួយឃ្លីក ដែលជួយលុបសម្អាត LocalStorage, SessionStorage, IndexedDB, Service Workers និង Cache Storage ទាំងអស់ក្នុងពេលតែមួយ។'
    },
    tutorial: {
      en: `🧹 One-Click Storage Wipe (Clear Site Data):

1. Navigate to Application Panel: Click "Application" tab in DevTools.
2. Select Storage Menu: On left sidebar -> click top "Storage" parent item under Application section.
3. Check Storage Categories: Checkboxes for Unregister service workers, Local and session storage, IndexedDB, Web SQL, Cookies, and Cache storage.
4. Click "Clear site data": Click the large "Clear site data" button at top.
5. Storage Usage Pie Chart: Observe the storage pie chart usage meter instantly drop to 0 B!

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Clear Site Data:
---------------------------------------------------
Sample Code:
<p>Debugging stale cache bugs with Clear Site Data</p>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក DevTools -> Tab "Application" -> ចុចលើពាក្យ "Storage" នៅ Sidebar ឆ្វេង
2. ពិនិត្យមើលរង្វង់ Pie Chart បង្ហាញទំហំ Storage (ឧ. 2.4 MB)
3. ចុចប៊ូតុង "Clear site data"

លទ្ធផលដែលឃើញ (What you'll see):
- ទំហំ Storage ធ្លាក់ចុះមកត្រឹម 0 B ភ្លាមៗ!
- រាល់ LocalStorage, Cookies, និង Cached files ទាំងអស់ត្រូវបានលុបសម្អាតស្អាតបាត!`,
      km: `🧹 ជំហានលុបសម្អាត Storage ទាំងមូល (Clear Site Data)៖

១. ចូលទៅកាន់ Application Panel៖ ចុច Tab "Application" ក្នុង DevTools។
២. ជ្រើសរើស Storage Menu៖ នៅ Sidebar ខាងឆ្វេង -> ចុចលើពាក្យ "Storage" នៅខាងលើគេ។
៣. ជ្រើសរើសប្រភេទ Storage៖ គូស Tick លើប្រភេទដែលចង់លុប (Service workers, Local/session storage, IndexedDB, Cookies, Cache)។
៤. ចុច "Clear site data"៖ ចុចលើប៊ូតុងធំ "Clear site data" នៅខាងលើ។
៥. មើលរង្វង់ Pie Chart៖ រង្វង់បង្ហាញទំហំប្រើប្រាស់ Storage ធ្លាក់ចុះមកត្រឹម 0 B ភ្លាមៗ!

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Clear Site Data៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<p>Debugging stale cache bugs with Clear Site Data</p>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក DevTools -> Tab "Application" -> ចុចលើពាក្យ "Storage" នៅ Sidebar ឆ្វេង
2. ពិនិត្យមើលរង្វង់ Pie Chart បង្ហាញទំហំ Storage (ឧ. 2.4 MB)
3. ចុចប៊ូតុង "Clear site data"

លទ្ធផលដែលឃើញ (What you'll see):
- ទំហំ Storage ធ្លាក់ចុះមកត្រឹម 0 B ភ្លាមៗ!
- រាល់ LocalStorage, Cookies, និង Cached files ទាំងអស់ត្រូវបានលុបសម្អាតស្អាតបាត!`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
  </style>
</head>
<body>
  <h2>Clear Site Data Practice</h2>
  <p>Open Application tab -> Storage menu -> Click <strong>Clear site data</strong> button!</p>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Fixing Stale Deployment Caches in Seconds',
        km: '🎯 ការដោះស្រាយបញ្ហា Cache ចាស់មិនព្រមអាប់ដេតកូដថ្មី'
      },
      description: {
        en: 'When a production deployment updates CSS styles or API endpoints but your browser keeps rendering old cached bundles, clicking "Clear site data" purges all local state so you see fresh deployed changes.',
        km: 'នៅពេល Deploy កូដថ្មីទៅ Production ប៉ុន្តែ Browser នៅតែបង្ហាញ UI ចាស់ ការចុច "Clear site data" លុប Cache ចាស់ចោល ធ្វើឱ្យឃើញកូដថ្មីភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which button inside the Application -> Storage panel purges all cookies, local storage, indexedDB, and cache storage simultaneously?',
        km: 'តើប៊ូតុងមួយណាក្នុង Application -> Storage panel ដែលលុប Cookies, LocalStorage និង Cache ទាំងអស់ក្នុងពេលតែមួយ?'
      },
      solution: 'Clear site data button'
    },
    quizQuestions: [
      {
        id: 'q-dt-6-2',
        question: {
          en: 'Why should developers use "Clear site data" when testing fresh application login states?',
          km: 'ហេតុអ្វីបានជា Developers គួរប្រើ "Clear site data" ពេលតេស្តប្តូរ Login State ថ្មី?'
        },
        options: [
          { id: '1', text: { en: 'It ensures all previous authentication tokens, cookies, and cached data are completely removed', km: 'វាធានាថា រាល់ Token, Cookies និង Cache ចាស់ៗទាំងអស់ត្រូវបានលុបសម្អាត 100%' }, isCorrect: true },
          { id: '2', text: { en: 'It reinstalls the operating system', km: 'វា Reinstall ប្រព័ន្ធប្រតិបត្តិការ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Clear site data guarantees a pristine 100% clean slate state.',
          km: 'Clear site data ជួយលុបសម្អាតទិន្នន័យចាស់ៗចោល 100%។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 7: Performance & Lighthouse Audits
  // ==========================================
  {
    id: 'dt-7-1',
    slug: 'lighthouse-performance-and-accessibility-audits',
    moduleNumber: 7,
    lessonNumberInModule: 1,
    title: {
      en: '7.1 Lighthouse Performance, Accessibility & SEO Automated Audits',
      km: '7.1 ការប្រើប្រាស់ Lighthouse វាស់ស្ទង់ Performance, Accessibility & SEO'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Lighthouse is Google automated open-source auditing engine integrated directly into DevTools. With a single click, Lighthouse analyzes your web page across 5 core categories: Performance, Accessibility (a11y), Best Practices, SEO, and Progressive Web App (PWA). It outputs individual score badges out of 100 alongside actionable optimization recommendations.',
      km: 'Lighthouse គឺជាឧបករណ៍វិភាគ ស្វ័យប្រវត្តិនៃ Google ដែលមានស្រាប់ក្នុង DevTools។ ដោយគ្រាន់តែចុចមួយឃ្លីក Lighthouse នឹងវិភាគគេហទំព័រលើ ៥ ផ្នែកចម្បង៖ Performance, Accessibility, Best Practices, SEO, និង PWA។ វាផ្តល់ពិន្ទុពិន្ទុពី ០ ដល់ ១០០ អមជាមួយអនុសាសន៍ណែនាំកែកូដឱ្យលឿន។'
    },
    tutorial: {
      en: `📊 Running Lighthouse Automated Audits:

1. Open Lighthouse Tab: Click "Lighthouse" panel in DevTools top navigation.
2. Select Categories: Check Performance, Accessibility, Best Practices, and SEO.
3. Select Mode & Device: Choose Mode ("Navigation"), Device ("Mobile" or "Desktop").
4. Click "Analyze page load": The browser reloads and executes automated audit scripts.
5. Score Report Interpretation:
   - Green (90-100): Excellent performance
   - Orange (50-89): Needs improvement
   - Red (0-49): Poor performance requiring immediate optimization!

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Lighthouse Report:
---------------------------------------------------
Sample Code:
<p>Lighthouse Audit Demonstration Page</p>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក DevTools -> Tab "Lighthouse"
2. ជ្រើសរើស Device "Mobile" -> គូស Tick លើ Categories ទាំងអស់
3. ចុចប៊ូតុង "Analyze page load"

លទ្ធផលដែលឃើញ (What you'll see):
- បន្ទាប់ពី 10-15 វិនាទី របាយការណ៍នឹងលេចឡើង៖
  [95] Performance
  [100] Accessibility
  [100] Best Practices
  [92] SEO
- មានបញ្ជី "Opportunities" ប្រាប់ឱ្យរួមបង្រួមរូបភាព (Compress images) ឬលុប Unused CSS!`,
      km: `📊 ជំហានរត់ Lighthouse Automated Audit៖

១. បើក Lighthouse Tab៖ ចុចលើ Tab "Lighthouse" ក្នុង DevTools។
២. ជ្រើសរើស Categories៖ គូស Tick លើ Performance, Accessibility, Best Practices, SEO។
៣. ជ្រើសរើស Mode & Device៖ ជ្រើសរើស Mode ("Navigation") និង Device ("Mobile" ឬ "Desktop")។
៤. ចុច "Analyze page load"៖ Browser នឹង Refresh ហើយរត់ Scripts វិភាគស្វ័យប្រវត្តិ។
៥. ការមើលពិន្ទុរបាយការណ៍៖
   - ពណ៌បៃតង (90-100): ល្អឥតខ្ចោះ (Excellent)
   - ពណ៌ទឹកក្រូច (50-89): ត្រូវកែលម្អបន្ថែម (Needs Improvement)
   - ពណ៌ក្រហម (0-49): យឺតខ្លាំង ត្រូវដោះស្រាយបន្ទាន់ (Poor)`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lighthouse Audit Starter</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
  </style>
</head>
<body>
  <h1>Lighthouse Practice Page</h1>
  <p>Run a Lighthouse audit on this page to test Accessibility and Performance!</p>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Boosting E-commerce Conversions with Lighthouse',
        km: '🎯 ការបង្កើនការលក់ដោយប្រើ Lighthouse ពង្រឹងល្បឿន Web'
      },
      description: {
        en: 'Google ranks fast websites higher in search results. E-commerce platforms target 90+ Lighthouse performance scores to reduce bounce rates and improve mobile checkout conversions.',
        km: 'Google ផ្តល់ចំណាត់ថ្នាក់ SEO ខ្ពស់ដល់ Web ដែលលឿន។ ក្រុមហ៊ុន e-Commerce តែងតែរញ៉េរញ៉ៃដំឡើងពិន្ទុ Lighthouse ឱ្យលើសពី ៩០ ដើម្បីបង្កើនការលក់លើ Mobile។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What score range in Lighthouse reports is represented by a green circular badge?',
        km: 'តើជួរពិន្ទុប៉ុន្មានក្នុង Lighthouse Report ដែលត្រូវបានតំណាងដោយ Badge រង្វង់ពណ៌បៃតង?'
      },
      solution: '90 to 100 score range'
    },
    quizQuestions: [
      {
        id: 'q-dt-7-1',
        question: {
          en: 'Which automated DevTools tool audits web pages for SEO, Accessibility, and Core Web Vitals?',
          km: 'តើឧបករណ៍ស្វ័យប្រវត្តិនៃ DevTools មួយណាដែលវាយតម្លៃ SEO, Accessibility និង Core Web Vitals?'
        },
        options: [
          { id: '1', text: { en: 'Lighthouse panel', km: 'Lighthouse panel' }, isCorrect: true },
          { id: '2', text: { en: 'Application panel', km: 'Application panel' }, isCorrect: false }
        ],
        explanation: {
          en: 'Lighthouse generates comprehensive automated performance and SEO audit scores.',
          km: 'Lighthouse បង្កើតរបាយការណ៍វាស់ល្បឿន និង SEO ស្វ័យប្រវត្តិ។'
        }
      }
    ]
  },

  {
    id: 'dt-7-2',
    slug: 'core-web-vitals-lcp-cls-inp',
    moduleNumber: 7,
    lessonNumberInModule: 2,
    title: {
      en: '7.2 Understanding Core Web Vitals (LCP, CLS, INP)',
      km: '7.2 ការយល់ដឹងអំពី Core Web Vitals (LCP, CLS, INP)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Core Web Vitals are standardized user-centric metrics defined by Google to quantify real-world user experience: Largest Contentful Paint (LCP - measures loading speed of main hero element, target < 2.5s), Cumulative Layout Shift (CLS - measures visual stability and accidental page shifts, target < 0.1), and Interaction to Next Paint (INP - measures page responsiveness to clicks, target < 200ms).',
      km: 'Core Web Vitals គឺជាស្តង់ដារវាស់ស្ទង់បទពិសោធន៍អ្នកប្រើប្រាស់ដែលកំណត់ដោយ Google៖ LCP (Largest Contentful Paint - ល្បឿន Load ធាតុធំជាងគេលើអេក្រង់ គួរតិចជាង 2.5s), CLS (Cumulative Layout Shift - ភាពរញ្ជួយផ្លាស់ប្តូរ Layout ដោយអចេតនា គួរតិចជាង 0.1) និង INP (Interaction to Next Paint - ល្បឿនឆ្លើយតបពេល User ចុច គួរតិចជាង 200ms)។'
    },
    tutorial: {
      en: `⚡ Core Web Vitals Benchmarks:

1. LCP (Largest Contentful Paint):
   - Good: <= 2.5 seconds
   - Needs Improvement: 2.5s - 4.0s
   - Poor: > 4.0 seconds
2. CLS (Cumulative Layout Shift):
   - Good: <= 0.1
   - Needs Improvement: 0.1 - 0.25
   - Poor: > 0.25
3. INP (Interaction to Next Paint):
   - Good: <= 200 milliseconds
   - Needs Improvement: 200ms - 500ms
   - Poor: > 500 milliseconds

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Performance Profile:
---------------------------------------------------
Sample Code:
<img src="large-banner.jpg" width="1200" height="600" alt="Hero">

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក DevTools -> Tab "Performance"
2. ចុច Record (រូបរង្វង់) -> Refresh Page -> ចុច Stop
3. មើលរបារ "Timings" -> រកមើល Marker អក្សរ LCP

លទ្ធផលដែលឃើញ (What you'll see):
- DevTools បង្ហាញរូបភាព Thumbnail ត្រង់ចំណុចពេលដែលអក្សរ/រូបភាព Hero បង្ហាញពេញលេញលើអេក្រង់!
- បង្ហាញពេលវេលា LCP Exact Milliseconds (ឧ. LCP: 1.8s - Good)!`,
      km: `⚡ កម្រិតស្តង់ដារនៃ Core Web Vitals៖

១. LCP (Largest Contentful Paint)៖
   - ល្អ (Good): <= 2.5 វិនាទី
   - ត្រូវកែលម្អ (Needs Improvement): 2.5s - 4.0s
   - យឺត (Poor): > 4.0 វិនាទី
២. CLS (Cumulative Layout Shift)៖
   - ល្អ (Good): <= 0.1
   - ត្រូវកែលម្អ: 0.1 - 0.25
   - យឺត (Poor): > 0.25
៣. INP (Interaction to Next Paint)៖
   - ល្អ (Good): <= 200 មីលីវិនាទី
   - ត្រូវកែលម្អ: 200ms - 500ms
   - យឺត (Poor): > 500 មីលីវិនាទី`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #020617; color: white; padding: 24px; }
    .hero { background: #3b82f6; padding: 40px; border-radius: 12px; font-size: 28px; text-align: center; }
  </style>
</head>
<body>
  <div class="hero">
    Main Hero Banner (LCP Candidate)
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Preventing Layout Shifts (CLS) by Setting Image Dimensions',
        km: '🎯 ការពារ Layout Shift (CLS) ដោយកំណត់ទំហំរូបភាព Width/Height'
      },
      description: {
        en: 'When images load without explicit width/height attributes, text below suddenly jumps downward, causing high CLS scores. Setting explicit aspect-ratio or width/height attributes solves CLS instantly.',
        km: 'ពេលរូបភាពគ្មាន width/height ច្បាស់លាស់ អត្ថបទខាងក្រោមនឹងលោតចុះក្រោមភ្លាមៗ ធ្វើឱ្យ CLS ពិន្ទុអាក្រក់។ ការដាក់ width/height ច្បាស់លាស់ដោះស្រាយបញ្ហានេះ 100%។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What is the target "Good" threshold for Largest Contentful Paint (LCP) in seconds?',
        km: 'តើកម្រិតពិន្ទុ "Good" ល្អឥតខ្ចោះនៃ LCP គិតជាវិនាទីត្រូវតិចជាងប៉ុន្មាន?'
      },
      solution: 'Less than or equal to 2.5 seconds (<= 2.5s)'
    },
    quizQuestions: [
      {
        id: 'q-dt-7-2',
        question: {
          en: 'Which Core Web Vital metric quantifies unexpected visual movement of elements on a page?',
          km: 'តើ Core Web Vital Metric មួយណាដែលវាស់វែងពីការលោតរញ្ជួយ Layout ដោយអចេតនា?'
        },
        options: [
          { id: '1', text: { en: 'CLS (Cumulative Layout Shift)', km: 'CLS (Cumulative Layout Shift)' }, isCorrect: true },
          { id: '2', text: { en: 'LCP (Largest Contentful Paint)', km: 'LCP (Largest Contentful Paint)' }, isCorrect: false }
        ],
        explanation: {
          en: 'CLS measures unexpected layout movement and visual stability during page load.',
          km: 'CLS វាស់ស្ទង់ការរញ្ជួយ ឬលោតផ្លាស់ទីនៃ Layout លើអេក្រង់។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 8: Capstone Project
  // ==========================================
  {
    id: 'dt-8-capstone',
    slug: 'capstone-audit-and-fix-broken-web-app',
    moduleNumber: 8,
    lessonNumberInModule: 1,
    title: {
      en: '8.1 Capstone Project: Audit & Fix a Broken Web Application',
      km: '8.1 Capstone Project: ការត្រួតពិនិត្យ និងដោះស្រាយ Error លើ Web App'
    },
    durationMinutes: 45,
    difficulty: 'Advanced',
    explanation: {
      en: 'In this comprehensive Capstone project, you will step into the shoes of a lead frontend debugging engineer. You are provided with a sample web application containing 4 intentional bugs: a layout misaligned flexbox error (Elements panel fix), a JavaScript syntax crash error (Console/Sources fix), a broken API endpoint URL (Network panel fix), and an invalid localStorage key format (Application panel fix). Your goal is to utilize all DevTools panels mastered in this course to identify and resolve every bug!',
      km: 'នៅក្នុង Capstone Project ដ៏ទូលំទូលាយនេះ អ្នកនឹងដើរតួជា Lead Frontend Debugging Engineer។ កម្មវិធីគំរូមួយត្រូវបានផ្តល់ជូនដែលមាន ៤ Bugs៖ បញ្ហា Layout Flexbox វៀច (ដោះស្រាយតាម Elements), បញ្ហា កូដ JS Crashed (ដោះស្រាយតាម Console/Sources), បញ្ហា API URL ខុស (ដោះស្រាយតាម Network) និងបញ្ហា LocalStorage Key ខុស (ដោះស្រាយតាម Application)។ គោលដៅរបស់អ្នកគឺប្រើប្រាស់ DevTools Panels ដើម្បីរករោគសញ្ញា និងដោះស្រាយ Bug ទាំងអស់!'
    },
    tutorial: {
      en: `🏆 Capstone Bug Hunting Walkthrough Checklist:

Bug 1: Elements Panel Layout Repair
- Task: Inspect the top navbar .nav-container using Elements panel. Notice the buttons are squished vertically.
- Fix: Add display: flex; justify-content: space-between; align-items: center; to .nav-container.

Bug 2: Console & Sources Script Repair
- Task: Click the "Calculate Discount" button. Notice a red Uncaught TypeError in Console.
- Fix: Open Sources panel (Ctrl+P -> app.js), locate the function, and fix the missing parameter argument!

Bug 3: Network API Fetch Repair
- Task: Click "Load Product Catalog". Notice a red 404 Not Found request in Network tab.
- Fix: Open Network tab -> inspect Request URL produts-invalid-url -> correct URL spelling to products.

Bug 4: Application Storage Token Repair
- Task: Open Application tab -> Local Storage. Notice the theme key is saved as thm instead of theme.
- Fix: Double click the key name in Application tab table and update key name to theme.

---------------------------------------------------
🖥️ DevTools Capstone Result Verification:
---------------------------------------------------
When all 4 fixes are completed:
1. Navbar aligns cleanly across desktop and mobile viewports!
2. Discount button computes $90 without console syntax crashes!
3. Product catalog loads 10 items with 200 OK network status!
4. Application storage preserves theme: dark across refreshes!`,
      km: `🏆 Capstone Bug Hunting Walkthrough Checklist៖

Bug 1: ការកែប្រែ Layout តាម Elements Panel
- ភារកិច្ច៖ Inspect លើ .nav-container ក្នុង Elements Panel។ ឃើញប៊ូតុងត្រូវរួមជើងលើគ្នា។
- ដំណោះស្រាយ៖ បន្ថែម display: flex; justify-content: space-between; align-items: center; ទៅលើ .nav-container។

Bug 2: ការកែកូដ Script តាម Console & Sources
- ភារកិច្ច៖ ចុចប៊ូតុង "Calculate Discount"។ ឃើញចេញ Error ពណ៌ក្រហម TypeError ក្នុង Console។
- ដំណោះស្រាយ៖ បើក Sources panel (Ctrl+P -> app.js) -> ស្វែងរក Function រួចថែម Parameter ដែលបាត់!

Bug 3: ការកែ API តាម Network Panel
- ភារកិច្ច៖ ចុច "Load Product Catalog"។ ឃើញចេញ Error 404 Not Found ក្នុង Network tab។
- ដំណោះស្រាយ៖ បើក Network tab -> Inspect មើល URL ឃើញវាយប្រកបខុស produts-invalid-url -> កែមក products។

Bug 4: ការកែ Storage តាម Application Panel
- ភារកិច្ច៖ បើក Application tab -> Local Storage។ ឃើញ Key សរសេរ thm ជំនួសឱ្យ theme។
- ដំណោះស្រាយ៖ Double-click លើ Key ក្នុង Application tab រួចអាប់ដេតទៅជា theme។`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DevTools Capstone Debugging App</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; margin: 0; padding: 20px; }
    /* Bug 1: Needs display: flex */
    .nav-container { background: #1e293b; padding: 16px; border-radius: 8px; margin-bottom: 20px; }
    .brand { font-size: 20px; font-weight: bold; color: #38bdf8; }
    .btn { background: #3b82f6; color: white; border: none; padding: 10px 16px; border-radius: 6px; cursor: pointer; margin-right: 8px; }
    .card { background: #1e293b; padding: 20px; border-radius: 8px; margin-bottom: 16px; }
  </style>
</head>
<body>
  <!-- Bug 1: Navbar Layout -->
  <div class="nav-container">
    <span class="brand">DevTools Hub</span>
    <button class="btn" onclick="calcPrice(100)">Bug 2: Calc Price</button>
    <button class="btn" onclick="loadData()">Bug 3: Fetch API</button>
  </div>

  <div class="card">
    <h3>Capstone Debugging Sandbox</h3>
    <p id="out-status">Status: Ready to debug. Open DevTools (F12)!</p>
  </div>

  <script>
    // Save broken key initially for Bug 4
    localStorage.setItem('thm', 'dark');

    // Bug 2: Missing argument handling
    function calcPrice(price) {
      // Intentional error: tax is undefined
      let total = price + tax; 
      document.getElementById('out-status').innerText = "Total: $" + total;
    }

    // Bug 3: Invalid API URL
    function loadData() {
      document.getElementById('out-status').innerText = "Fetching data...";
      fetch('https://jsonplaceholder.typicode.com/invalid-products-404-url')
        .then(res => {
          if(!res.ok) throw new Error("HTTP " + res.status);
          return res.json();
        })
        .then(data => {
          document.getElementById('out-status').innerText = "Loaded successfully!";
        })
        .catch(err => {
          document.getElementById('out-status').innerText = "Error: " + err.message;
        });
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Real-world Debugging Workflow of Senior Developers',
        km: '🎯 របៀបធ្វើការ Debug ជាក់ស្តែងរបស់ Senior Developers'
      },
      description: {
        en: 'Senior engineers methodically isolate bugs by panel: layout issues in Elements, JS runtime crashes in Console/Sources, broken network payloads in Network, and missing state in Application.',
        km: 'Senior Engineers តែងតែបែងចែកការ Debug តាម Panel ៖ បញ្ហា Layout ពិនិត្យតាម Elements, បញ្ហា JS Crash មើល Console/Sources, បញ្ហា API មើល Network, និងបញ្ហា State មើល Application។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What is the primary objective of this Capstone project?',
        km: 'តើគោលដៅចម្បងនៃ Capstone Project មួយនេះគឺអ្វី?'
      },
      solution: 'Identify and fix 4 intentional bugs across Elements, Console, Network, and Application DevTools panels.'
    },
    quizQuestions: [
      {
        id: 'q-dt-8-1',
        question: {
          en: 'Which DevTools panel should you inspect first if clicking a button triggers a red "Uncaught TypeError" message?',
          km: 'តើ Panel មួយណាដែលអ្នកគួរពិនិត្យមុនគេ បើចុចប៊ូតុងហើយលេចចេញសារ "Uncaught TypeError" ពណ៌ក្រហម?'
        },
        options: [
          { id: '1', text: { en: 'Console panel', km: 'Console panel' }, isCorrect: true },
          { id: '2', text: { en: 'Performance panel', km: 'Performance panel' }, isCorrect: false }
        ],
        explanation: {
          en: 'The Console panel catches and logs all unhandled JavaScript runtime exceptions.',
          km: 'Console panel ចាប់រាល់ JavaScript Exception Error ទាំងអស់។'
        }
      }
    ]
  }
];
