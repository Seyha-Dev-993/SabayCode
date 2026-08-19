import { FrontendCourse } from '../types/frontendClass';
import { DEVTOOLS_LESSONS_PART1 } from './devToolsLessonsPart1';
import { DEVTOOLS_LESSONS_PART2 } from './devToolsLessonsPart2';

const ALL_DEVTOOLS_LESSONS = [...DEVTOOLS_LESSONS_PART1, ...DEVTOOLS_LESSONS_PART2];

export const DEVTOOLS_COURSE_DATA: FrontendCourse = {
  id: 'devtools',
  title: {
    en: 'Browser DevTools & Debugging Course',
    km: 'វគ្គសិក្សា Browser DevTools & Debugging'
  },
  iconName: 'devtools',
  categoryId: 'tooling',
  difficulty: 'Beginner',
  shortDescription: {
    en: 'Master Chrome DevTools: inspect DOM/CSS, debug JS step-by-step with line breakpoints, monitor API Network waterfalls, manage LocalStorage/Cookies, and run Lighthouse performance audits.',
    km: 'ស្ទាត់ជំនាញ Chrome DevTools៖ Inspect DOM/CSS, Debug JS តាមដាន Breakpoints ម្ដងមួយបន្ទាត់, ពិនិត្យ Network API Requests, គ្រប់គ្រង LocalStorage/Cookies, និងរត់ Lighthouse Audits។'
  },
  summary: {
    en: 'Browser DevTools is a built-in suite of developer tools in every modern web browser (Chrome, Firefox, Edge, Safari). It enables you to inspect HTML/CSS elements live, debug JavaScript execution with breakpoints, monitor Network HTTP requests, inspect storage & cookies, and profile performance.\n\n📌 Prerequisite: HTML5 Course and JavaScript Course (recommended) — DevTools is the essential companion to every other course on the platform!',
    km: 'Browser DevTools គឺជា Built-in Tool ដែលមាននៅក្នុង Browser ទាំងអស់ ជួយឲ្យអ្នកអភិវឌ្ឍន៍ Inspect HTML/CSS, Debug JavaScript, តាមដាន Network Requests, និងស្វែងរក Bug នៅក្នុង Web Page របស់អ្នកដោយផ្ទាល់ក្នុង Browser ដោយមិនចាំបាច់ដំឡើងអ្វីបន្ថែម។\n\n📌 តម្រូវការជាមុន៖ HTML5 Course និង JavaScript Course (ណែនាំ) — DevTools គឺជាឧបករណ៍ចាំបាច់បំផុតអមដំណើរគ្រប់វគ្គសិក្សាទាំងអស់លើ platform នេះ!'
  },
  estimatedHours: 3.5,
  lessonCount: ALL_DEVTOOLS_LESSONS.length,
  cheatSheet: [
    {
      concept: 'Open DevTools Shortcuts',
      code: 'F12  or  Ctrl + Shift + I (Win/Linux)  |  Cmd + Option + I (macOS)',
      explanation: {
        en: 'Universal keyboard shortcuts to toggle DevTools panel overlay instantly.',
        km: 'Shortcut Key ទូទៅសម្រាប់បើក/បិទ DevTools Overlay ភ្លាមៗ។'
      }
    },
    {
      concept: 'Inspect Element Selector',
      code: 'Ctrl + Shift + C (Win/Linux)  |  Cmd + Shift + C (macOS)',
      explanation: {
        en: 'Activates the element inspection picker cursor to hover and select DOM nodes directly on screen.',
        km: 'បើក Inspect Picker Cursor ដើម្បីយកទៅចុចជ្រើសរើស Element លើអេក្រង់។'
      }
    },
    {
      concept: 'Toggle Device Mode',
      code: 'Ctrl + Shift + M (Win/Linux)  |  Cmd + Shift + M (macOS)',
      explanation: {
        en: 'Toggles mobile/tablet responsive viewport viewport simulation frame.',
        km: 'បើក/បិទ ការតេស្តអេក្រង់ទូរស័ព្ទដៃ និងថេប្លេត Responsive Mode។'
      }
    },
    {
      concept: 'Elements Panel',
      code: 'DOM Tree & Styles Pane (Live HTML/CSS Editing & Box Model)',
      explanation: {
        en: 'Inspect and edit HTML markup and CSS rules live on the active page DOM tree.',
        km: 'ពិនិត្យ និងកែប្រែ HTML/CSS ផ្ទាល់លើ DOM Tree នៃទំព័រដែលកំពុងបើក។'
      }
    },
    {
      concept: 'Console Panel API',
      code: 'console.log() | console.warn() | console.error() | console.table() | console.time()',
      explanation: {
        en: 'Interactive JavaScript REPL and structured output logging methods.',
        km: 'ប្រព័ន្ធ REPL រត់កូដ JS និង Methoden Print លទ្ធផលជាតារាង ឬតាមកម្រិតពណ៌។'
      }
    },
    {
      concept: 'Sources Panel Controls',
      code: 'F8 (Resume) | F10 (Step Over) | F11 (Step Into) | Shift+F11 (Step Out)',
      explanation: {
        en: 'Step-by-step JavaScript breakpoint execution navigation keys.',
        km: 'ប៊ូតុងបញ្ជាដើរមើលកូដ Breakpoint ម្ដងមួយបន្ទាត់ក្នុង Sources Panel។'
      }
    },
    {
      concept: 'Network Panel Filters',
      code: 'Fetch/XHR | JS | CSS | Img | Throttling (Slow 3G / Offline)',
      explanation: {
        en: 'Inspect HTTP requests, headers, response JSON payloads, and network speeds.',
        km: 'តាមដាន API Requests, Headers, JSON response payloads, និងល្បឿនអ៊ីនធឺណិត។'
      }
    },
    {
      concept: 'Application Storage',
      code: 'LocalStorage | SessionStorage | Cookies | Clear site data',
      explanation: {
        en: 'Inspect and manage client-side persistent storage and authentication cookies.',
        km: 'ពិនិត្យ និងគ្រប់គ្រង LocalStorage, SessionStorage, និង Session Cookies។'
      }
    },
    // Common Mistakes Section
    {
      concept: '❌ Common Mistake 1',
      code: 'Assuming DevTools edits are saved to source files',
      explanation: {
        en: 'Edits made directly in the Elements or Styles pane are in-memory temporary previews that revert upon page refresh.',
        km: 'ការកែកូដក្នុង DevTools មិនត្រូវកត់ត្រាទុកក្នុង Source Code File លើ Disk ឡើយ វាបាត់វិញពេល Refresh Page។'
      }
    },
    {
      concept: '❌ Common Mistake 2',
      code: 'Leaving Network Throttling ON (e.g. Slow 3G)',
      explanation: {
        en: 'Forgetting that Network Throttling is enabled causes all subsequent browsing testing to feel artificially slow.',
        km: 'ការភ្លេចបិទ Slow 3G ក្នុង Network panel ធ្វើឱ្យការតេស្តក្រោយៗទៀតដើរយឺតខ្លាំងដោយមិនដឹងខ្លួន។'
      }
    },
    {
      concept: '❌ Common Mistake 3',
      code: 'Confusing LocalStorage with SessionStorage persistence',
      explanation: {
        en: 'Expecting SessionStorage to persist across browser tab restarts when it is wiped automatically upon tab closing.',
        km: 'ការច្រឡំថា SessionStorage រក្សាទុកទិន្នន័យរហូត ខណៈដែលវាលុបចោលពេលបិទ Tab។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-dt-quiz-1',
      question: {
        en: 'What is the main advantage of setting Line Breakpoints in Sources panel over writing console.log statements?',
        km: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការដាក់ Line Breakpoints ក្នុង Sources Panel ធៀបនឹងការសរសេរ console.log?'
      },
      options: [
        { id: '1', text: { en: 'It pauses code execution interactively allowing full state & call stack inspection without code edits', km: 'វាផ្អាកការរត់កូដ និងអនុញ្ញាតឱ្យពិនិត្យ Variable & Call Stack ទាំងអស់ដោយមិនបាច់កែកូដ' }, isCorrect: true },
        { id: '2', text: { en: 'It automatically fixes syntax errors', km: 'វាជួយកែប្រែ Syntax Error ដោយស្វ័យប្រវត្តិ' }, isCorrect: false },
        { id: '3', text: { en: 'It speeds up page load time', km: 'វាធ្វើឱ្យ Web Load លឿនជាងមុន' }, isCorrect: false }
      ],
      explanation: {
        en: 'Line breakpoints pause runtime state on the fly without making temporary code edits or console clutter.',
        km: 'Line breakpoints ផ្អាកកូដ និងពិនិត្យតម្លៃ Variables គ្រប់ប្រភេទបានភ្លាមៗដោយមិនបាច់កែកូដឡើយ។'
      }
    },
    {
      id: 'q-dt-quiz-2',
      question: {
        en: 'Given this paused-breakpoint Scope pane state inside a function, what is the value of `itemTotal`?',
        km: 'យោងតាមរូបភាព Scope Pane ដែលកំពុង Paused ខាងក្រោម តើតម្លៃរបស់ `itemTotal` ស្មើនឹងប៉ុន្មាន?'
      },
      codeSnippet: `Local Scope:
  price: 20
  quantity: 3
  itemTotal: 60
  taxRate: 0.1`,
      options: [
        { id: '1', text: { en: '60', km: '60' }, isCorrect: true },
        { id: '2', text: { en: '20', km: '20' }, isCorrect: false },
        { id: '3', text: { en: 'undefined', km: 'undefined' }, isCorrect: false }
      ],
      explanation: {
        en: 'The Local Scope block explicitly lists `itemTotal: 60`.',
        km: 'ក្នុង Local Scope បង្ហាញច្បាស់ៗថា `itemTotal: 60`។'
      }
    },
    {
      id: 'q-dt-quiz-3',
      question: {
        en: 'Which DevTools panel should you inspect first if an API request returns a 404 HTTP Status Code?',
        km: 'តើ Panel មួយណាដែលអ្នកគួរតែពិនិត្យមុនគេ ពេល API Request បាញ់មកវិញនូវ status 404?'
      },
      options: [
        { id: '1', text: { en: 'Network Panel', km: 'Network Panel' }, isCorrect: true },
        { id: '2', text: { en: 'Application Panel', km: 'Application Panel' }, isCorrect: false },
        { id: '3', text: { en: 'Performance Panel', km: 'Performance Panel' }, isCorrect: false }
      ],
      explanation: {
        en: 'The Network panel records all HTTP requests, status codes, and response headers.',
        km: 'Network Tab បង្ហាញរាល់ HTTP Requests, status codes និង headers ទាំងអស់។'
      }
    },
    {
      id: 'q-dt-quiz-4',
      question: {
        en: 'What does the ":hov" toolbar button inside the Elements Styles pane allow developers to do?',
        km: 'តើប៊ូតុង ":hov" ក្នុង Styles Pane ជួយឱ្យ Developers ធ្វើអ្វីបាន?'
      },
      options: [
        { id: '1', text: { en: 'Force pseudo-element states like :hover or :focus to inspect state-based styles continuously', km: 'បង្ខំ Pseudo-state ដូចជា :hover ឬ :focus ឱ្យបង្ហាញជាប់រហូតសម្រាប់កែប្រែ CSS' }, isCorrect: true },
        { id: '2', text: { en: 'Hover over the browser window automatically', km: 'អូស Mouse លើ Window ដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
      ],
      explanation: {
        en: 'The :hov button locks pseudo-states like :hover, :focus, and :active open continuously.',
        km: 'ប៊ូតុង :hov ជួយចាក់សោ state ដូចជា :hover, :focus ឱ្យបង្ហាញជាប់រហូត។'
      }
    },
    {
      id: 'q-dt-quiz-5',
      question: {
        en: 'Which console method formats an array of objects into a sortable tabular grid?',
        km: 'តើ Console Method មួយណាដែលបំលែង Array នៃ Objects ទៅជាតារាង Grid តម្រៀបបាន?'
      },
      options: [
        { id: '1', text: { en: 'console.table()', km: 'console.table()' }, isCorrect: true },
        { id: '2', text: { en: 'console.group()', km: 'console.group()' }, isCorrect: false },
        { id: '3', text: { en: 'console.dir()', km: 'console.dir()' }, isCorrect: false }
      ],
      explanation: {
        en: 'console.table() renders structured table views for arrays or objects in the Console.',
        km: 'console.table() រៀបចំ Array ឬ Object ជាតារាងស្អាតក្នុង Console។'
      }
    },
    {
      id: 'q-dt-quiz-6',
      question: {
        en: 'What stepping control button in Sources panel steps inside the function call on the current paused line?',
        km: 'តើប៊ូតុង Stepping Control មួយណាក្នុង Sources Panel ដែលអនុញ្ញាតឱ្យលោតចូលក្នុង Function Call លើបន្ទាត់ដែលផ្អាក?'
      },
      options: [
        { id: '1', text: { en: 'Step Into (F11)', km: 'Step Into (F11)' }, isCorrect: true },
        { id: '2', text: { en: 'Step Over (F10)', km: 'Step Over (F10)' }, isCorrect: false },
        { id: '3', text: { en: 'Resume (F8)', km: 'Resume (F8)' }, isCorrect: false }
      ],
      explanation: {
        en: 'Step Into (F11) enters the body of the function call on the current line.',
        km: 'Step Into (F11) លោតចូលទៅក្នុងកូដខាងក្នុងនៃ Function Call។'
      }
    },
    {
      id: 'q-dt-quiz-7',
      question: {
        en: 'Where can you inspect and delete LocalStorage key/value pairs in DevTools?',
        km: 'តើកន្លែងណាក្នុង DevTools ដែលអ្នកអាចពិនិត្យ និងលុប LocalStorage key/value pairs?'
      },
      options: [
        { id: '1', text: { en: 'Application Panel > Local Storage', km: 'Application Panel > Local Storage' }, isCorrect: true },
        { id: '2', text: { en: 'Network Panel > Headers', km: 'Network Panel > Headers' }, isCorrect: false }
      ],
      explanation: {
        en: 'The Application panel houses web storage mechanisms including LocalStorage and SessionStorage.',
        km: 'Application Panel មានផ្ទុកប្រព័ន្ធលុប និងពិនិត្យ LocalStorage និង SessionStorage។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'Diagnose & Fix 3 Realistic Bugs on a Broken Web App',
      km: 'ការស្វែងរក និងដោះស្រាយ Bug ទាំង ៣ ប្រភេទលើ Web App'
    },
    description: {
      en: 'In this Capstone exercise, use Chrome DevTools to diagnose and resolve three distinct bugs on a sample e-commerce checkout page: a CSS visibility bug (using Elements panel), an uncaught JavaScript runtime crash (using Console & Sources line breakpoints), and a failed API network endpoint call returning 404 (using Network panel).',
      km: 'ក្នុងគម្រោង Capstone នេះ ប្រើប្រាស់ Chrome DevTools ដើម្បីស្វែងរក និងដោះស្រាយ Bug ចំនួន ៣ ប្រភេទលើ Web App គំរូ៖ បញ្ហា CSS visibility (ប្រើ Elements panel), បញ្ហា JavaScript runtime crash (ប្រើ Console & Sources line breakpoints) និង បញ្ហា API call បរាជ័យ 404 (ប្រើ Network panel)។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .title { color: #38bdf8; font-weight: bold; margin-bottom: 10px; }
    .ok { color: #4ade80; }
    .err { color: #f87171; }
    .code { color: #facc15; margin-top: 6px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">🔍 Capstone — DevTools 3-Panel Diagnostics</div>
    
    <div class="ok">1. Bug 1 Fixed (Elements Panel):</div>
    <div class="code">.btn-checkout { display: inline-block; color: #ffffff; background: #10b981; }</div>
    <br/>
    <div class="ok">2. Bug 2 Fixed (Console + Sources Line Breakpoints):</div>
    <div class="code">let discount = { rate: 0.2 }; // Resolved Uncaught TypeError</div>
    <br/>
    <div class="ok">3. Bug 3 Fixed (Network Panel):</div>
    <div class="code">fetch('https://jsonplaceholder.typicode.com/posts/1') // Fixed 404 endpoint</div>
    <br/>
    <div class="ok">✓ All 3 bugs resolved successfully! Web page fully operational.</div>
  </div>
</body>
</html>`
    }
  },
  lessons: ALL_DEVTOOLS_LESSONS
};
