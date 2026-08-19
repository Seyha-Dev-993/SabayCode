import { FrontendLesson } from '../types/frontendClass';

export const DEVTOOLS_LESSONS_PART1: FrontendLesson[] = [
  // ==========================================
  // MODULE 1: Introduction to DevTools & Inspecting
  // ==========================================
  {
    id: 'dt-1-1',
    slug: 'what-are-browser-devtools',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: {
      en: '1.1 What are Browser DevTools & Opening Methods',
      km: '1.1 អ្វីទៅជា Browser DevTools និងរបៀបបើកប្រើប្រាស់'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Browser Developer Tools (DevTools) is a powerful suite of web authoring, diagnostic, and debugging tools built directly into modern web browsers (Chrome, Firefox, Safari, Edge). It allows developers to inspect rendered HTML markup, tweak CSS styles live, debug JavaScript with breakpoints, analyze network requests, examine storage, and audit performance.',
      km: 'Browser Developer Tools (DevTools) គឺជាកញ្ចប់ឧបករណ៍ឌីហ្សាញ វិភាគ និងដោះស្រាយកូដ (Debugging) ដែលមានស្រាប់នៅក្នុង Browser ទំនើបៗ (Chrome, Firefox, Safari, Edge)។ វាអនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍ពិនិត្យមើល HTML, កែប្រែ CSS ផ្ទាល់លើអេក្រង់, ផ្អាកកូដ JavaScript តាមដាន Breakpoint, ពិនិត្យ Network API Requests, និងវាស់ល្បឿន Web Page។'
    },
    tutorial: {
      en: `🛠️ Universal Opening Shortcuts across Operating Systems:

1. Right-Click Inspection: Right-click any element on the page -> select "Inspect" (or "Inspect Element").
2. Primary Keyboard Shortcuts:
   - Windows/Linux: F12  or  Ctrl + Shift + I
   - macOS: Cmd + Option + I
3. Inspect Element Shortcut:
   - Windows/Linux: Ctrl + Shift + C
   - macOS: Cmd + Option + C
4. Docking Position: Click the 3-dots menu icon at top right of DevTools to dock to Bottom, Right, Left, or Undock into a separate window.

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Opening & Docking:
---------------------------------------------------
Sample Code:
<h1>Welcome to DevTools Mastery</h1>
<button id="demo-btn">Click Me</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ចុច F12 (ឬ Right-click លើប៊ូតុង -> ជ្រើស "Inspect")
2. ចុចលើ Icon ចុច ៣ គ្រាប់ (3-dots menu) នៅជ្រុងខាងស្តាំលើនៃ DevTools
3. ជ្រើសរើស Dock side: "Dock to right" (ប្តូរផ្ទាំងទៅខាងស្តាំ) ឬ "Dock to bottom" (ខាងក្រោម)

លទ្ធផលដែលឃើញ (What you'll see):
- ផ្ទាំង DevTools នឹងលេចឡើងអមជាមួយ Web Page
- ឃើញ Tab មួយចំនួននៅខាងលើ៖ Elements, Console, Sources, Network, Application, Performance, Lighthouse`,
      km: `🛠️ វិធីសាស្ត្រ និង Shortcut Key សម្រាប់បើក DevTools៖

១. ការ Right-Click៖ Right-click លើ Element ណាមួយលើទំព័រ -> ជ្រើសយក "Inspect" (ឬ "Inspect Element")។
២. Shortcut Keys ចម្បង៖
   - Windows/Linux: F12  ឬ  Ctrl + Shift + I
   - macOS: Cmd + Option + I
៣. Shortcut សម្រាប់ Inspect Element ភ្លាមៗ៖
   - Windows/Linux: Ctrl + Shift + C
   - macOS: Cmd + Option + C
៤. ការកំណត់ទីតាំង (Docking)៖ ចុចលើ Icon ចុច ៣ គ្រាប់នៅជ្រុងស្ដាំលើ DevTools ដើម្បីប្ដូរផ្ទាំងទៅ ខាងក្រោម, ខាងស្ដាំ, ខាងឆ្វេង ឬ បំបែកជា Window ផ្សេង។

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — ការបើក និងកំណត់ទីតាំង៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<h1>Welcome to DevTools Mastery</h1>
<button id="demo-btn">Click Me</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ចុច F12 (ឬ Right-click លើប៊ូតុង -> ជ្រើស "Inspect")
2. ចុចលើ Icon ចុច ៣ គ្រាប់ (3-dots menu) នៅជ្រុងខាងស្តាំលើនៃ DevTools
3. ជ្រើសរើស Dock side: "Dock to right" (ប្តូរផ្ទាំងទៅខាងស្តាំ) ឬ "Dock to bottom" (ខាងក្រោម)

លទ្ធផលដែលឃើញ (What you'll see):
- ផ្ទាំង DevTools នឹងលេចឡើងអមជាមួយ Web Page
- ឃើញ Tab មួយចំនួននៅខាងលើ៖ Elements, Console, Sources, Network, Application, Performance, Lighthouse`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>DevTools Demo</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
    .card { background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155; }
    button { background: #38bdf8; color: #0f172a; border: none; padding: 10px 18px; border-radius: 6px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <div class="card">
    <h2>DevTools Inspection Starter</h2>
    <p>Right click anywhere on this card and select <strong>Inspect</strong>!</p>
    <button onclick="alert('DevTools is Open!')">Test Button</button>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Why Senior Engineers Keep DevTools Open 100% of the Time',
        km: '🎯 ហេតុអ្វីបានជា Senior Engineers បើក DevTools រហូតពេលសរសេរកូដ'
      },
      description: {
        en: 'Professional frontend engineers keep DevTools docked side-by-side with their browser at all times to immediately catch JavaScript syntax crashes, test mobile screen layouts, and inspect API responses in real-time.',
        km: 'Frontend Developers អាជីពតែងតែបើក DevTools អមជាមួយ Browser ជានិច្ច ដើម្បីទាន់ការ Catch JavaScript Error, តេស្តអេក្រង់ Mobile និងមើល API Responses ភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What keyboard key toggles DevTools instantly on Windows/Linux?',
        km: 'តើប៊ូតុង Keyboard មួយណាដែលបើក/បិទ DevTools ភ្លាមៗលើ Windows/Linux?'
      },
      solution: 'F12 (or Ctrl+Shift+I)'
    },
    quizQuestions: [
      {
        id: 'q-dt-1-1',
        question: {
          en: 'Which shortcut opens DevTools directly into inspect element mode on Chrome?',
          km: 'តើ Shortcut មួយណាដែលបើក DevTools ចូលទៅកាន់ Inspect Element Mode ផ្ទាល់?'
        },
        options: [
          { id: '1', text: { en: 'Ctrl + Shift + C (Cmd + Option + C on Mac)', km: 'Ctrl + Shift + C (Cmd + Option + C លើ Mac)' }, isCorrect: true },
          { id: '2', text: { en: 'Alt + F4', km: 'Alt + F4' }, isCorrect: false }
        ],
        explanation: {
          en: 'Ctrl+Shift+C activates the Inspect Element element picker tool immediately.',
          km: 'Ctrl+Shift+C បើក Inspect Picker សម្រាប់ចុចជ្រើសរើស Element លើអេក្រង់។'
        }
      }
    ]
  },

  {
    id: 'dt-1-2',
    slug: 'overview-of-the-6-core-panels',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: {
      en: '1.2 Overview of the 6 Core Panels',
      km: '1.2 ទិដ្ឋភាពទូទៅនៃ 6 Core Panels ក្នុង DevTools'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'DevTools is divided into dedicated panels, each tailored for a specific area of frontend web engineering: Elements (DOM/CSS), Console (JS logging & REPL execution), Sources (JS debugging & breakpoints), Network (HTTP requests & APIs), Application (LocalStorage, Cookies, Service Workers), and Performance/Lighthouse (speed profiling & optimization).',
      km: 'DevTools ត្រូវបានបែងចែកជា ៦ Panels ចម្បងៗ៖ Elements (ពិនិត្យ និងកែប្រែ DOM/CSS), Console (មើល Log និងរត់កូដ JS), Sources (Debug កូដតាមដាន Breakpoints), Network (តាមដាន API Calls), Application (គ្រប់គ្រង LocalStorage & Cookies), និង Performance/Lighthouse (វាស់ល្បឿន និងស្វែងរកចំណុចខ្សោយ)។'
    },
    tutorial: {
      en: `🧭 Core Panels Quick Cheat Sheet:

1. Elements: Inspect rendered HTML DOM tree, live-edit CSS styles, inspect Box Model dimensions.
2. Console: View error warnings, run live one-liner JavaScript snippets, test functions.
3. Sources: View raw JS/CSS source files, pause execution with line breakpoints, step through code execution.
4. Network: Monitor all HTTP GET/POST API calls, status codes (200, 404, 500), load timing, and payload JSON.
5. Application: Inspect LocalStorage, SessionStorage, Cookies, IndexedDB, and PWA Service Workers.
6. Performance & Lighthouse: Profile CPU usage, frame rate (FPS), and generate automated accessibility/SEO audit reports.

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Switching Panels:
---------------------------------------------------
Sample Code:
<p>Navigation demo between DevTools panels</p>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក DevTools (F12)
2. ចុចលើ Tab "Elements" -> មើលរចនាសម្ព័ន្ធ HTML
3. ចុចលើ Tab "Console" -> ឃើញសារ Log
4. ចុចលើ Tab "Network" -> មើល Requests ពេល Refresh Page (Ctrl+R)

លទ្ធផលដែលឃើញ (What you'll see):
- ផ្ទាំងនីមួយៗផ្លាស់ប្តូរទិន្នន័យទៅតាមតួនាទីរៀងៗខ្លួន (HTML structure, Console outputs, Network logs)`,
      km: `🧭 ព័ត៌មានសង្ខេបនៃ Core Panels ទាំង ៦៖

១. Elements: ពិនិត្យ HTML DOM tree, កែ CSS ផ្ទាល់, និងមើល Box Model (Margin, Border, Padding)។
២. Console: មើល Error Messages, រត់កូដ JavaScript តេស្ត និង Print លទ្ធផល។
៣. Sources: មើល File កូដដើម, ដាក់ Line Breakpoints ដើម្បីផ្អាកកូដ និងដើរមើលកូដម្ដងមួយបន្ទាត់។
៤. Network: តាមដាន API Request/Response (200, 404, 500), រយៈពេល Download, និង JSON Payload។
៥. Application: ពិនិត្យ និងកែប្រែ LocalStorage, SessionStorage, និង Cookies។
៦. Performance & Lighthouse: Record វាស់ស្ទង់ CPU, FPS, និងរត់ Report វាយតម្លៃ SEO/Accessibility។

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — ការផ្លាស់ប្តូរ Panels៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<p>Navigation demo between DevTools panels</p>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក DevTools (F12)
2. ចុចលើ Tab "Elements" -> មើលរចនាសម្ព័ន្ធ HTML
3. ចុចលើ Tab "Console" -> ឃើញសារ Log
4. ចុចលើ Tab "Network" -> មើល Requests ពេល Refresh Page (Ctrl+R)

លទ្ធផលដែលឃើញ (What you'll see):
- ផ្ទាំងនីមួយៗផ្លាស់ប្តូរទិន្នន័យទៅតាមតួនាទីរៀងៗខ្លួន (HTML structure, Console outputs, Network logs)`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #020617; color: white; padding: 24px; }
  </style>
</head>
<body>
  <h2>6 Core Panels Navigation</h2>
  <p>Click through Elements, Console, Sources, Network, Application, and Performance tabs!</p>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Choosing the Right Panel for the Right Bug',
        km: '🎯 ការជ្រើសរើស Panel ឱ្យត្រូវតាមប្រភេទ Bug'
      },
      description: {
        en: 'If a button is misaligned, open Elements. If a button click triggers a JS error, check Console & Sources. If data fails to load from backend, check Network.',
        km: 'បើប៊ូតុងវៀចមិនស្អាត បើក Elements។ បើចុចប៊ូតុងហើយស្ងាត់ជ្រៀប ឬចេញ Error បើក Console & Sources។ បើទិន្នន័យមិនព្រមទាញមកពី Server បើក Network។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which DevTools panel is specifically designed for inspecting LocalStorage and Cookies?',
        km: 'តើ DevTools Panel មួយណាដែលត្រូវបានរចនាឡើងសម្រាប់ពិនិត្យ LocalStorage និង Cookies?'
      },
      solution: 'Application Panel'
    },
    quizQuestions: [
      {
        id: 'q-dt-1-2',
        question: {
          en: 'Where should you look first if a web page fails to load images or API data from a server?',
          km: 'តើអ្នកគួរតែពិនិត្យមើលកន្លែងណាជានិមិត្តរូប បើ Web Page មិនព្រម Load រូបភាព ឬ API?'
        },
        options: [
          { id: '1', text: { en: 'Network Panel', km: 'Network Panel' }, isCorrect: true },
          { id: '2', text: { en: 'Performance Panel', km: 'Performance Panel' }, isCorrect: false }
        ],
        explanation: {
          en: 'The Network panel records all outgoing and incoming HTTP file and API requests.',
          km: 'Network Panel កត់ត្រារាល់ការផ្ញើ និងទទួលទិន្នន័យ HTTP Request/Response ទាំងអស់។'
        }
      }
    ]
  },

  {
    id: 'dt-1-3',
    slug: 'inspecting-elements-and-dom-tree-navigation',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: {
      en: '1.3 Inspecting Elements & DOM Tree Navigation',
      km: '1.3 ការ Inspect Elements និងការរុករក DOM Tree'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'The Elements panel displays the live HTML Document Object Model (DOM) tree. Using the Element Inspect Picker tool (upper-left cursor icon), you can click any visible UI element on the web page to automatically expand and select its corresponding HTML node in the DOM tree inspector.',
      km: 'Elements Panel បង្ហាញរចនាសម្ព័ន្ធ DOM Tree នៃ HTML លើគេហទំព័រ។ ដោយប្រើប្រាស់ Element Inspect Picker Tool (Icon រូប Cursor នៅជ្រុងឆ្វេងលើ) អ្នកអាចចុចលើផ្នែកណាមួយនៃ UI លើអេក្រង់ ដើម្បីឱ្យ DevTools Highlight រំលេច Element HTML នោះក្នុង DOM Tree ដោយស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: `🔍 Step-by-Step DOM Tree Navigation:

1. Activate Inspect Cursor: Click the inspect arrow icon in the top-left corner of DevTools (or press Ctrl+Shift+C / Cmd+Shift+C).
2. Hover and Select: Move your mouse across the web page UI. Notice blue hover overlays showing dimensions, padding, and margins. Click any element.
3. DOM Tree Expansion: The selected HTML element highlights in gray/blue inside the DOM tree view.
4. Keyboard Navigation: Use Up/Down Arrow keys to navigate sibling nodes, Left Arrow to collapse parent tags, and Right Arrow to expand children tags.

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Inspect Picker:
---------------------------------------------------
Sample Code:
<div class="user-card">
  <h3 class="user-name">Sokha Dev</h3>
  <p class="user-role">Frontend Engineer</p>
</div>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ចុច Ctrl+Shift+C ដើម្បីបើក Inspect Cursor Mode
2. យក Mouse ទៅចុចលើពាក្យ "Sokha Dev" លើ Web Page
3. មើលក្នុង Elements Panel DOM Tree

លទ្ធផលដែលឃើញ (What you'll see):
- បន្ទាត់កូដ '<h3 class="user-name">Sokha Dev</h3>' ត្រូវរំលេចពណ៌ខៀវក្នុង DOM Tree!
- ឃើញប្រអប់ Hover Overlay លើអេក្រង់បង្ហាញទំហំ Font, Margin, និង Colors`,
      km: `🔍 ជំហានស្វែងរករចនាសម្ព័ន្ធ DOM Tree៖

១. បើក Inspect Cursor៖ ចុចលើ Icon រូបព្រួញ Inspect នៅជ្រុងឆ្វេងលើនៃ DevTools (ឬចុច Ctrl+Shift+C / Cmd+Shift+C)។
២. Hover និងចុច៖ អូស Mouse លើ Web Page។ អ្នកនឹងឃើញ Overlay ពណ៌ខៀវ/ទឹកក្រូច បង្ហាញទំហំ Padding, Margin។ រួចចុចលើ Element នោះ។
៣. ការរំលេចក្នុង DOM Tree៖ HTML tag ដែលបានជ្រើសរើស នឹងត្រូវរំលេចពណ៌ខៀវក្នុង DOM Tree។
៤. ការប្រើ Keyboard៖ ប្រើប៊ូតុង ព្រួញឡើង/ចុះ លើ Keyboard ដើម្បីប្តូរទៅ Element ជិតខាង, ព្រួញឆ្វេង ដើម្បីបង្រួម Tag, និង ព្រួញស្តាំ ដើម្បីពង្រីក Tag។

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Inspect Picker៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<div class="user-card">
  <h3 class="user-name">Sokha Dev</h3>
  <p class="user-role">Frontend Engineer</p>
</div>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ចុច Ctrl+Shift+C ដើម្បីបើក Inspect Cursor Mode
2. យក Mouse ទៅចុចលើពាក្យ "Sokha Dev" លើ Web Page
3. មើលក្នុង Elements Panel DOM Tree

លទ្ធផលដែលឃើញ (What you'll see):
- បន្ទាត់កូដ '<h3 class="user-name">Sokha Dev</h3>' ត្រូវរំលេចពណ៌ខៀវក្នុង DOM Tree!
- ឃើញប្រអប់ Hover Overlay លើអេក្រង់បង្ហាញទំហំ Font, Margin, និង Colors`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
    .box-a { background: #3b82f6; padding: 16px; margin-bottom: 12px; border-radius: 8px; }
    .box-b { background: #10b981; padding: 16px; border-radius: 8px; }
  </style>
</head>
<body>
  <h2>Inspect Element Test Page</h2>
  <div class="box-a">
    <h3>Container Box A</h3>
    <p>Target paragraph inside Box A</p>
  </div>
  <div class="box-b">
    <h3>Container Box B</h3>
    <p>Target paragraph inside Box B</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Inspecting Unfamiliar Web Pages to Learn UI Tricks',
        km: '🎯 ការ Inspect គេហទំព័រល្បីៗដើម្បីរៀនបច្ចេកទេស UI'
      },
      description: {
        en: 'Developers regularly inspect professional websites (like Stripe or GitHub) to analyze their exact DOM layout structures, CSS flexbox alignment rules, and custom SVG icons.',
        km: 'Developers តែងតែប្រើ Inspect លើ Web ល្បីៗ (ដូចជា Stripe ឬ GitHub) ដើម្បីរៀនពីរបៀបដែលគេរៀបចំ DOM, Flexbox, និង CSS layout ស្អាតៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which keyboard navigation key collapses an expanded HTML container tag inside the DOM tree view?',
        km: 'តើប៊ូតុង Keyboard មួយណាដែលបង្រួម (Collapse) HTML container tag ដែលកំពុងពង្រីកក្នុង DOM Tree?'
      },
      solution: 'Left Arrow key'
    },
    quizQuestions: [
      {
        id: 'q-dt-1-3',
        question: {
          en: 'What visual overlay color indicates element Margin padding box dimensions during hover inspection?',
          km: 'តើពណ៌ Overlay មួយណាដែលតំណាងឱ្យ Margin ពេលយក Mouse ទៅប៉ះលើ Element ពេល Inspect?'
        },
        options: [
          { id: '1', text: { en: 'Orange/Brown highlight overlay', km: 'ពណ៌ទឹកក្រូច/ត្នោត' }, isCorrect: true },
          { id: '2', text: { en: 'Green highlight overlay', km: 'ពណ៌បៃតង' }, isCorrect: false }
        ],
        explanation: {
          en: 'DevTools highlights Content in blue, Padding in green, and Margin in orange.',
          km: 'DevTools រំលេច Content ជាពណ៌ខៀវ, Padding ជាពណ៌បៃតង, និង Margin ជាពណ៌ទឹកក្រូច។'
        }
      }
    ]
  },

  {
    id: 'dt-1-4',
    slug: 'device-mode-and-responsive-viewports',
    moduleNumber: 1,
    lessonNumberInModule: 4,
    title: {
      en: '1.4 Device Mode & Testing Responsive Viewports',
      km: '1.4 Device Mode និងការតេស្តអេក្រង់ Responsive'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Device Mode allows developers to simulate various mobile and tablet viewports directly on a desktop display. It emulates screen resolutions (iPhone, iPad, Pixel, Samsung Galaxy), touch gestures, orientation switching (Portrait vs Landscape), device pixel ratios (DPR), and user-agent strings.',
      km: 'Device Mode អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍តេស្តអេក្រង់ទូរស័ព្ទ និងថេប្លេតផ្សេងៗ (iPhone, iPad, Pixel, Samsung) លើកុំព្យូទ័របានភ្លាមៗ។ វាដកស្រង់ទំហំ Resolution, Touch Screen Dragging, បង្វិលអេក្រង់ (Portrait/Landscape) និង DPI។'
    },
    tutorial: {
      en: `📱 Utilizing Device Toolbar for Responsive Testing:

1. Toggle Device Toolbar: Click the phone/tablet icon in top-left toolbar of DevTools (or press Ctrl+Shift+M / Cmd+Shift+M).
2. Device Preset Dropdown: Choose from popular devices (e.g. iPhone 14 Pro, iPad Air, Samsung Galaxy S20).
3. Dimensions Mode: Select "Responsive" to drag viewport handle boundaries manually to any pixel width/height.
4. Rotate Viewport: Click the orientation toggle icon (🔄) to flip between Portrait and Landscape modes.
5. Media Queries Bar: Click the 3-bars icon top-right of device frame -> "Show Media Queries" to display color-coded media query breakpoint bars above the canvas.

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Device Simulation:
---------------------------------------------------
Sample Code:
<style>
  .nav { display: flex; justify-content: space-between; }
  @media (max-width: 600px) {
    .nav { flex-direction: column; text-align: center; }
  }
</style>
<div class="nav"><span>Logo</span><span>Menu</span></div>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ចុច Ctrl+Shift+M ដើម្បីបើក Device Mode
2. ជ្រើសរើស "Responsive" ក្នុង Dropdown ខាងលើ
3. អូសរបារកំណត់ទំហំពី 800px ចុះមក 400px

លទ្ធផលដែលឃើញ (What you'll see):
- នៅទំហំ 400px កូដ CSS '@media (max-width: 600px)' នឹងរត់!
- របារ Navigation ផ្លាស់ប្តូរពី ជួរដេក (row) ទៅជា ជួរឈរ (column) ភ្លាមៗ`,
      km: `📱 ការប្រើប្រាស់ Device Toolbar សម្រាប់តេស្ត Responsive៖

១. បើក Device Toolbar៖ ចុចលើ Icon ទូរស័ព្ទ/ថេប្លេត នៅជ្រុងឆ្វេងលើនៃ DevTools (ឬចុច Ctrl+Shift+M / Cmd+Shift+M)។
២. ជ្រើសរើសប្រភេទ Device៖ ជ្រើសរើសឈ្មោះទូរស័ព្ទល្បីៗ (ឧ. iPhone 14 Pro, iPad Air, Pixel)។
៣. កំណត់ទំហំដោយដៃ (Responsive)៖ ជ្រើសយក "Responsive" ដើម្បីអូសពង្រីក/បង្រួម Pixel អេក្រង់តាមចិត្ត។
៤. បង្វិលអេក្រង់៖ ចុចលើ Icon 🔄 ដើម្បីប្តូររវាង បញ្ឈរ (Portrait) និង ដេក (Landscape)។
៥. មើល Media Queries Bar៖ ចុចលើ Icon 3-bars ជ្រើស "Show Media Queries" ដើម្បីបង្ហាញរបារ Breakpoints ពណ៌លើអេក្រង់។

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Device Simulation៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<style>
  .nav { display: flex; justify-content: space-between; }
  @media (max-width: 600px) {
    .nav { flex-direction: column; text-align: center; }
  }
</style>
<div class="nav"><span>Logo</span><span>Menu</span></div>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ចុច Ctrl+Shift+M ដើម្បីបើក Device Mode
2. ជ្រើសរើស "Responsive" ក្នុង Dropdown ខាងលើ
3. អូសរបារកំណត់ទំហំពី 800px ចុះមក 400px

លទ្ធផលដែលឃើញ (What you'll see):
- នៅទំហំ 400px កូដ CSS '@media (max-width: 600px)' នឹងរត់!
- របារ Navigation ផ្លាស់ប្តូរពី ជួរដេក (row) ទៅជា ជួរឈរ (column) ភ្លាមៗ`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
    @media (max-width: 768px) {
      .grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 480px) {
      .grid { grid-template-columns: 1fr; }
    }
    .card { background: #3b82f6; padding: 16px; border-radius: 8px; text-align: center; }
  </style>
</head>
<body>
  <h2>Responsive Grid Test Page</h2>
  <div class="grid">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Preventing Layout Overflows on Small Devices',
        km: '🎯 ការពារបញ្ហាធាតុលេចចេញក្រៅអេក្រង់លើ Mobile'
      },
      description: {
        en: 'Testing in Device Mode reveals horizontal scrollbar bugs (caused by fixed-width elements like width: 600px) before users report broken mobile displays.',
        km: 'ការតេស្តក្នុង Device Mode ជួយឱ្យយើងមើលឃើញបញ្ហា Horizontal Scrollbar (ដែលបណ្តាលមកពីការប្រើ width ថេរ) មុនពេល User ប្រើប្រាស់លើទូរស័ព្ទដៃពិតប្រាកដ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What keyboard shortcut toggles Device Mode on/off in Chrome DevTools?',
        km: 'តើ Shortcut Key មួយណាសម្រាប់ បើក/បិទ Device Mode ក្នុង Chrome DevTools?'
      },
      solution: 'Ctrl+Shift+M (or Cmd+Shift+M on Mac)'
    },
    quizQuestions: [
      {
        id: 'q-dt-1-4',
        question: {
          en: 'Why is the `<meta name="viewport">` tag critical when testing Responsive layouts in Device Mode?',
          km: 'ហេតុអ្វីបានជា Tag `<meta name="viewport">` មានសារៈសំខាន់ខ្លាំងពេលតេស្ត Responsive ក្នុង Device Mode?'
        },
        options: [
          { id: '1', text: { en: 'It instructs mobile browsers to render layout dimensions equal to screen width', km: 'វាប្រាប់ឱ្យ Browser លើ Mobile បង្ហាញទំហំ Layout ស្មើនឹងទំហំអេក្រង់ទូរស័ព្ទពិត' }, isCorrect: true },
          { id: '2', text: { en: 'It changes background colors automatically', km: 'វាដូរពណ៌ Background ដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Without the viewport meta tag, mobile devices render desktop layout scaled down.',
          km: 'បើគ្មាន viewport meta tag ទេ ទូរស័ព្ទដៃនឹងបង្ហាញ Layout ដូច Desktop ប៉ុន្តែរួមតូច។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 2: Elements Panel & CSS Manipulation
  // ==========================================
  {
    id: 'dt-2-1',
    slug: 'editing-dom-nodes-and-attributes',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: {
      en: '2.1 Editing Live DOM Nodes & Attributes',
      km: '2.1 ការកែប្រែ HTML DOM Nodes និង Attributes ផ្ទាល់'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'The DOM tree in the Elements panel is interactive. You can double-click text to change copy live, edit HTML attribute values (like class, id, src, href), add new attributes, delete elements (Delete key), reorder elements by dragging, or edit full element markups as raw HTML ("Edit as HTML").',
      km: 'DOM Tree ក្នុង Elements Panel អាចធ្វើការកែប្រែបានភ្លាមៗ។ អ្នកអាច Double-click លើអត្ថបទដើម្បីដូរពាក្យ, កែប្រែតម្លៃ Attribute (ដូចជា class, id, src, href), បន្ថែម Attribute ថ្មី, លុប Element (ប៊ូតុង Delete), អូសតម្រៀបជួរ Element ឬកែប្រែកូដ HTML ទាំងមូល ("Edit as HTML")។'
    },
    tutorial: {
      en: `✏️ Live DOM Manipulation Techniques:

1. Edit Text Node: Double-click text inside an HTML tag -> type new text -> press Enter.
2. Edit Attribute: Double-click attribute name/value (e.g. class="badge") -> change string -> press Enter.
3. Edit as HTML: Right-click any DOM node -> select "Edit as HTML" -> modify full HTML string block.
4. Delete Node: Click a node -> press Delete (or Backspace) key.
5. Reorder Nodes: Click and drag any element up or down to change its DOM sequence.

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Live DOM Edit:
---------------------------------------------------
Sample Code:
<h1 id="title">Original Headline</h1>
<button class="btn-old">Old Button</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. Inspect លើ <h1> -> Double click លើពាក្យ "Original Headline"
2. វាយពាក្យថ្មី "New Live Headline" -> ចុច Enter
3. Double click លើ class="btn-old" -> ប្តូរទៅជា class="btn-new"

លទ្ធផលដែលឃើញ (What you'll see):
- អត្ថបទលើអេក្រង់ប្រែជា "New Live Headline" ភ្លាមៗ!
- Class របស់ប៊ូតុងអាប់ដេតទៅជា 'btn-new' ភ្លាមៗ`,
      km: `✏️ បច្ចេកទេសកែប្រែ DOM ផ្ទាល់លើ អេក្រង់៖

១. កែអត្ថបទ (Text Node)៖ Double-click លើអត្ថបទក្នុង HTML tag -> វាយអត្ថបទថ្មី -> ចុច Enter។
២. កែ Attribute៖ Double-click លើឈ្មោះ ឬតម្លៃ Attribute (ឧ. class="badge") -> ប្តូរ -> ចុច Enter។
៣. Edit as HTML៖ Right-click លើ DOM Node -> ជ្រើស "Edit as HTML" -> កែកូដ HTML ទាំងមូល។
៤. លុប Node៖ ចុចលើ Node -> ចុចប៊ូតុង Delete (ឬ Backspace) លើ Keyboard។
៥. ប្តូរលំដាប់ Node៖ ចុច Drag & Drop Element ឡើងលើ ឬចុះក្រោមដើម្បីប្តូរលំដាប់។

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Live DOM Edit៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<h1 id="title">Original Headline</h1>
<button class="btn-old">Old Button</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. Inspect លើ <h1> -> Double click លើពាក្យ "Original Headline"
2. វាយពាក្យថ្មី "New Live Headline" -> ចុច Enter
3. Double click លើ class="btn-old" -> ប្តូរទៅជា class="btn-new"

លទ្ធផលដែលឃើញ (What you'll see):
- អត្ថបទលើអេក្រង់ប្រែជា "New Live Headline" ភ្លាមៗ!
- Class របស់ប៊ូតុងអាប់ដេតទៅជា 'btn-new' ភ្លាមៗ`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #020617; color: white; padding: 24px; }
    .active-status { color: #4ade80; font-weight: bold; }
    .disabled-status { color: #f87171; font-weight: bold; }
  </style>
</head>
<body>
  <h2>DOM Editing Practice</h2>
  <p>Status: <span id="user-status" class="disabled-status">Offline</span></p>
  <p>Double click 'Offline' in Elements panel and change it to 'Online'!</p>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Rapid Content Prototyping During Client Meetings',
        km: '🎯 ការកែប្រែអត្ថបទតេស្តជូនអតិថិជនមើលភ្លាមៗ'
      },
      description: {
        en: 'Designers and developers double-click text nodes in DevTools during review meetings to test different headline lengths or translations without modifying backend database records.',
        km: 'Developers និង Designers តែងតែប្រើប្រាស់ការកែកូដផ្ទាល់ក្នុង DevTools ពេលប្រជុំ ដើម្បីតេស្តចំណងជើងវែងខ្លី ឬពាក្យបកប្រែថ្មីៗឱ្យអតិថិជនមើលភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Do edits made directly inside the DevTools Elements DOM tree permanently save to your local file system?',
        km: 'តើការកែកូដផ្ទាល់ក្នុង DevTools Elements DOM Tree នឹងត្រូវ Save ចូលក្នុង File លើកុំព្យូទ័ររបស់អ្នករហូតដែរឬទេ?'
      },
      solution: 'No, DevTools edits are temporary in-memory changes that revert when the browser page is refreshed.'
    },
    quizQuestions: [
      {
        id: 'q-dt-2-1',
        question: {
          en: 'How do you completely remove a selected element from the page DOM in Elements panel?',
          km: 'តើធ្វើដូចម្តេចដើម្បីលុប Element មួយចេញពី DOM Tree ទាំងស្រុងក្នុង Elements Panel?'
        },
        options: [
          { id: '1', text: { en: 'Select element in DOM tree and press Delete key', km: 'ចុចលើ Element ក្នុង DOM Tree រួចចុចប៊ូតុង Delete' }, isCorrect: true },
          { id: '2', text: { en: 'Close the browser window', km: 'បិទ Window Browser' }, isCorrect: false }
        ],
        explanation: {
          en: 'Pressing Delete or Backspace key removes the highlighted node from the active DOM.',
          km: 'ការចុច Delete លើ Keyboard លុប Node ដែលបានជ្រើសរើសចេញពី DOM ភ្លាមៗ។'
        }
      }
    ]
  },

  {
    id: 'dt-2-2',
    slug: 'styles-pane-and-cls-state-toggling',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: {
      en: '2.2 Live CSS Editing, Classes (.cls) & State Toggling (:hov)',
      km: '2.2 ការកែ CSS ផ្ទាល់, ការថែម Class (.cls) និង State Toggling (:hov)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'The Styles pane on the right side of Elements panel allows live CSS tweaking. You can toggle checkboxes next to CSS properties, add new CSS declarations, inject utility classes using the .cls toolbar button, or force element pseudo-states (:hover, :focus, :active, :visited) using the :hov state button.',
      km: 'Styles Pane នៅខាងស្តាំនៃ Elements Panel អនុញ្ញាតឱ្យកែប្រែ CSS ផ្ទាល់។ អ្នកអាច ដក/គូស Tick លើ CSS Property, បន្ថែម CSS Rules ថ្មី, បន្ថែម Class តាមរយះប៊ូតុង .cls ឬ បង្ខំ Element ឱ្យបង្ហាញ Pseudo-states (:hover, :focus, :active) ដោយប្រើប៊ូតុង :hov។'
    },
    tutorial: {
      en: `🎨 Master Styles Pane Controls:

1. Toggle Property: Uncheck box next to any CSS rule to temporarily disable it (e.g. disable display: flex).
2. Add Property: Click inside empty space of any CSS selector block -> type property name -> press Tab -> type value.
3. Element Classes Tool (.cls): Click .cls button -> type class name (e.g. bg-red-500) -> press Enter to toggle utility classes live.
4. Pseudo-State Lock (:hov): Click :hov button -> check :hover box -> forces hover styling visible even when mouse is not over element!

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Forcing Hover State:
---------------------------------------------------
Sample Code:
<style>
  .btn { background: #3b82f6; color: white; padding: 10px; }
  .btn:hover { background: #1d4ed8; transform: scale(1.05); }
</style>
<button class="btn">Hover Me</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. Inspect លើប៊ូតុង <button class="btn">
2. នៅផ្ទាំង Styles Pane ខាងស្តាំ -> ចុចលើប៊ូតុង :hov
3. គូស Tick លើប្រអប់ :hover

លទ្ធផលដែលឃើញ (What you'll see):
- ប៊ូតុងលើអេក្រង់ផ្លាស់ប្តូរពណ៌ទៅជា '#1d4ed8' ភ្លាមៗ (ជាប់ Hover State) ដោយមិនបាច់យក Mouse ទៅ ប៉ះ!
- ក្នុង Styles pane បង្ហាញ CSS Rule របស់ .btn:hover ឱ្យយើងកែបានងាយស្រួល`,
      km: `🎨 ការប្រើប្រាស់ Styles Pane Controls៖

១. ដក/គូស Tick Property៖ ដក Tick ប្រអប់មុខ CSS rule ដើម្បីបិទវាមួយគ្រា (ឧ. បិទ display: flex)។
២. បន្ថែម Property៖ ចុចលើន្លែងទំនេរក្នុង CSS selector block -> វាយ property -> ចុច Tab -> វាយ value។
៣. ឧបករណ៍ Element Classes (.cls)៖ ចុចប៊ូតុង .cls -> វាយឈ្មោះ class -> ចុច Enter ដើម្បីបន្ថែម Class។
៤. ចាក់សោ Pseudo-State (:hov)៖ ចុចប៊ូតុង :hov -> គូស Tick លើ :hover -> បង្ខំឱ្យបង្ហាញ Hover Style ជាប់រហូត!

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — ការចាក់សោ Hover State៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<style>
  .btn { background: #3b82f6; color: white; padding: 10px; }
  .btn:hover { background: #1d4ed8; transform: scale(1.05); }
</style>
<button class="btn">Hover Me</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. Inspect លើប៊ូតុង <button class="btn">
2. នៅផ្ទាំង Styles Pane ខាងស្តាំ -> ចុចលើប៊ូតុង :hov
3. គូស Tick លើប្រអប់ :hover

លទ្ធផលដែលឃើញ (What you'll see):
- ប៊ូតុងលើអេក្រង់ផ្លាស់ប្តូរពណ៌ទៅជា '#1d4ed8' ភ្លាមៗ (ជាប់ Hover State) ដោយមិនបាច់យក Mouse ទៅ ប៉ះ!
- ក្នុង Styles pane បង្ហាញ CSS Rule របស់ .btn:hover ឱ្យយើងកែបានងាយស្រួល`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
    .card { background: #1e293b; padding: 20px; border-radius: 12px; transition: all 0.3s; }
    .card:hover { background: #334155; border-left: 4px solid #38bdf8; }
  </style>
</head>
<body>
  <h2>Styles Pane & :hov Test</h2>
  <div class="card">
    <h3>Hoverable Card Component</h3>
    <p>Inspect this card and click :hov -> check :hover to inspect hover styles!</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Debugging Complex Tooltips & Dropdown Menus',
        km: '🎯 ការ Debug លើ Tooltips និង Dropdown Menus'
      },
      description: {
        en: 'Tooltips and submenus often disappear as soon as the cursor moves away. Using :hov or forcing :focus-within keeps submenus visible so you can inspect their exact padding and alignment.',
        km: 'Tooltips និង Submenus តែងតែបាត់ទៅវិញពេលយើងដក Mouse ចេញ។ ការប្រើប្រាស់ :hov ជួយចាក់សោ Submenu ឱ្យបង្ហាញជាប់រហូត ដើម្បីឱ្យយើង inspect កែប្រែ padding បានងាយស្រួល។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which toolbar button in Styles pane allows you to force element state such as :hover or :focus?',
        km: 'តើប៊ូតុង Toolbar មួយណាក្នុង Styles Pane ដែលអនុញ្ញាតឱ្យអ្នកបង្ខំ State ដូចជា :hover ឬ :focus?'
      },
      solution: 'The :hov button'
    },
    quizQuestions: [
      {
        id: 'q-dt-2-2',
        question: {
          en: 'What happens when you uncheck a checkbox next to a CSS property in the Styles pane?',
          km: 'តើមានអ្វីកើតឡើងពេលអ្នកដក Tick ប្រអប់មុខ CSS property ក្នុង Styles Pane?'
        },
        options: [
          { id: '1', text: { en: 'The CSS property is temporarily commented out/disabled in real time', km: 'CSS property នោះត្រូវបានបិទ/មិនឱ្យដើរជាបណ្តោះអាសន្ន' }, isCorrect: true },
          { id: '2', text: { en: 'The HTML element is deleted from the page', km: 'HTML element ត្រូវលុបចេញ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Unchecking a rule temporarily disables the declaration without removing it.',
          km: 'ការដក Tick បិទការប្រើប្រាស់ Rule នោះជាបណ្តោះអាសន្ន។'
        }
      }
    ]
  },

  {
    id: 'dt-2-3',
    slug: 'box-model-computed-tab-and-color-picker',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: {
      en: '2.3 Box Model Diagram, Computed Tab & Color Picker',
      km: '2.3 Box Model Diagram, Computed Tab និង Color Picker'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'At the bottom of the Styles pane (or inside the Computed tab), DevTools renders an interactive Box Model Diagram showing exact computed dimensions in pixels for Content (blue), Padding (green), Border (yellow), and Margin (orange). Double-clicking any number inside the box diagram lets you edit dimensions live. Additionally, clicking any CSS color swatch opens a full Color Picker with contrast ratio guidance.',
      km: 'នៅផ្នែកខាងក្រោមនៃ Styles Pane (ឬក្នុង Computed Tab) DevTools បង្ហាញដ្យាក្រាម Box Model Diagram បញ្ជាក់ពីទំហំ Pixel ពិតប្រាកដនៃ Content (ខៀវ), Padding (បៃតង), Border (លឿង) និង Margin (ទឹកក្រូច)។ ការ Double-click លើលេខក្នុងដ្យាក្រាមអនុញ្ញាតឱ្យកែប្រែទំហំភ្លាមៗ។ លើសពីនេះ ការចុចលើប្រអប់ពណ៌បើក Color Picker ជាមួយកម្រិត Contrast Ratio។'
    },
    tutorial: {
      en: `📐 Box Model Inspection & Color Picker Tools:

1. Box Model Diagram: View numeric dimensions for Margin, Border, Padding, and Content width x height. Double-click any value (e.g. margin top "16") to change it live!
2. Computed Tab: Shows the final resolved CSS values calculated by the browser after resolving specificity and inheritance.
3. Color Picker Swatch: Click any square color swatch in Styles pane to open the Color Picker overlay.
4. Eye Dropper Tool: Inside Color Picker, click the eyedropper icon to sample any color directly from the rendered web page surface!
5. Contrast Ratio Indicator: Color Picker displays WCAG AA/AAA contrast checkmarks against background colors.

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Color Eyedropper:
---------------------------------------------------
Sample Code:
<div style="background: #3b82f6; color: #ffffff; padding: 20px;">
  <p id="target-text">Sample Colored Box</p>
</div>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. Inspect លើ <div>
2. ក្នុង Styles pane -> ចុចលើប្រអប់ពណ៌ខៀវ (#3b82f6)
3. ចុចលើ Icon Eyedropper (រូបបំពង់ជក់ថ្នាំ)
4. យក Eyedropper ទៅចុចលើផ្នែកណាមួយលើអេក្រង់

លទ្ធផលដែលឃើញ (What you'll see):
- ពណ៌របស់ Background នឹងដូរទៅតាមពណ៌ដែល Eyedropper បានចុចជក់ភ្លាមៗ!
- ឃើញកម្រិត Contrast Ratio បញ្ជាក់សញ្ញាគ្រីស 4.5:1 (WCAG AA Pass)`,
      km: `📐 ការពិនិត្យ Box Model និងការប្រើប្រាស់ Color Picker៖

១. Box Model Diagram៖ មើលលេខទំហំ Margin, Border, Padding និង Content។ Double-click លើលេខ (ឧ. margin-top "16") ដើម្បីកែប្រែទំហំភ្លាមៗ!
២. Computed Tab៖ បង្ហាញតម្លៃ CSS ចុងក្រោយបង្អស់ដែលបានគណនារួចរាល់ដោយ Browser។
៣. Color Picker Swatch៖ ចុចលើប្រអប់ពណ៌ក្នុង Styles pane ដើម្បីបើក Color Picker។
៤. Eye Dropper Tool៖ ចុចលើ Icon រូបបំពង់ជក់ថ្នាំក្នុង Color Picker ដើម្បីបឺតយកពណ៌ពីកន្លែងណាមួយលើអេក្រង់!
៥. Contrast Ratio Indicator៖ បង្ហាញកម្រិតសុវត្ថិភាពភ្នែក WCAG AA/AAA ធៀបនឹងពណ៌ Background។

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Color Eyedropper៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<div style="background: #3b82f6; color: #ffffff; padding: 20px;">
  <p id="target-text">Sample Colored Box</p>
</div>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. Inspect លើ <div>
2. ក្នុង Styles pane -> ចុចលើប្រអប់ពណ៌ខៀវ (#3b82f6)
3. ចុចលើ Icon Eyedropper (រូបបំពង់ជក់ថ្នាំ)
4. យក Eyedropper ទៅចុចលើផ្នែកណាមួយលើអេក្រង់

លទ្ធផលដែលឃើញ (What you'll see):
- ពណ៌របស់ Background នឹងដូរទៅតាមពណ៌ដែល Eyedropper បានចុចជក់ភ្លាមៗ!
- ឃើញកម្រិត Contrast Ratio បញ្ជាក់សញ្ញាគ្រីស 4.5:1 (WCAG AA Pass)`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #020617; color: white; padding: 24px; }
    .box { background-color: #8b5cf6; padding: 24px; margin: 16px; border: 4px solid #c084fc; border-radius: 8px; }
  </style>
</head>
<body>
  <h2>Box Model & Computed Demo</h2>
  <div class="box">
    <p>Inspect this box and look at the Box Model diagram in Styles/Computed pane!</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Fixing Color Contrast for Accessibility (a11y)',
        km: '🎯 ការកែប្រែ Contrast ពណ៌អក្សរសម្រាប់ Accessibility'
      },
      description: {
        en: 'When a Lighthouse accessibility audit flags low text contrast, developers open the Color Picker in Styles pane and slide the color hue until the WCAG AA contrast checkmark turns green.',
        km: 'នៅពេល Lighthouse ប្រាប់ថាពណ៌អក្សរពិបាកមើល Developers តែងតែបើក Color Picker ក្នុង Styles Pane រួចសារេពណ៌រហូតដល់សញ្ញាគ្រីស WCAG AA ប្រែជាពណ៌បៃតង។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which tab in Elements inspector displays the final calculated CSS values after stylesheet specificity rules are applied?',
        km: 'តើ Tab មួយណាក្នុង Elements Inspector ដែលបង្ហាញតម្លៃ CSS ចុងក្រោយបង្អស់បន្ទាប់ពីគណនារួចរាល់?'
      },
      solution: 'Computed tab'
    },
    quizQuestions: [
      {
        id: 'q-dt-2-3',
        question: {
          en: 'What tool inside the DevTools Color Picker allows sampling any color directly from the webpage canvas?',
          km: 'តើឧបករណ៍អ្វីក្នុង Color Picker ដែលអនុញ្ញាតឱ្យបឺតយកពណ៌ពីអេក្រង់គេហទំព័រ?'
        },
        options: [
          { id: '1', text: { en: 'Eyedropper tool', km: 'ឧបករណ៍ Eyedropper (បំពង់ជក់ពណ៌)' }, isCorrect: true },
          { id: '2', text: { en: 'Paint bucket tool', km: 'ធុងថ្នាំលាប' }, isCorrect: false }
        ],
        explanation: {
          en: 'The Eyedropper tool samples exact pixel hex colors from the screen surface.',
          km: 'Eyedropper ជួយបឺតយកពណ៌ពី Pixel លើអេក្រង់។'
        }
      }
    ]
  },

  {
    id: 'dt-2-4',
    slug: 'flexbox-and-grid-visual-badge-inspectors',
    moduleNumber: 2,
    lessonNumberInModule: 4,
    title: {
      en: '2.4 Flexbox & CSS Grid Visual Overlay Inspectors',
      km: '2.4 ការប្រើប្រាស់ Flexbox និង CSS Grid Visual Overlay Inspectors'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Modern DevTools includes specialized layout badges (flex and grid) inside the DOM tree. Clicking these badges toggles colorful visual grid lines, track numbers, gap indicators, and flex item alignment boxes directly on the web page canvas. Additionally, clicking the Flexbox alignment icon inside the Styles pane opens an interactive alignment editor GUI.',
      km: 'DevTools ទំនើបមាន Badge ពិសេស (flex និង grid) នៅជាប់ HTML tags ក្នុង DOM Tree។ ការចុចលើ Badges ទាំងនេះ បង្ហាញបន្ទាត់ Grid Lines, លេខ Track, Gap, និង Flex align overlays លើអេក្រង់។ លើសពីនេះ ការចុចលើ Flexbox icon ក្នុង Styles pane បើកផ្ទាំងប៊ូតុងកែប្រែ Alignment ដោយគ្រាន់តែចុច (GUI)។'
    },
    tutorial: {
      en: `🧩 Inspecting Flexbox & Grid Overlays:

1. Layout Badges: Look at DOM tree tags with display: flex or display: grid. Notice small flex or grid badge tags beside them.
2. Toggle Canvas Overlay: Click the flex or grid badge -> turns badge blue and draws layout guide lines on the webpage viewport.
3. Flexbox Layout Editor: In Styles pane, click the small flex grid icon beside display: flex -> opens a visual toolbar with buttons for justify-content (flex-start, center, space-between) and align-items.
4. Layout Pane: Open the "Layout" tab beside Styles -> customize grid line numbers, track sizes, and area overlays.

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Flexbox Alignment Editor:
---------------------------------------------------
Sample Code:
<div style="display: flex; height: 100px; background: #1e293b;">
  <div>Item A</div><div>Item B</div>
</div>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. Inspect លើ <div> ដែលមាន display: flex
2. នៅផ្ទាំង Styles pane ជិតបន្ទាត់ display: flex -> ចុចលើ Icon រូបប្រអប់ Flex
3. ចុចប៊ូតុង "justify-content: space-between" ក្នុង Popover GUI

លទ្ធផលដែលឃើញ (What you'll see):
- កូដ 'justify-content: space-between;' ត្រូវបន្ថែមចូលក្នុង Styles pane ដោយស្វ័យប្រវត្តិ!
- ធាតុ Item A និង Item B រត់ទៅជ្រុងសងខាងនៃប្រអប់លើអេក្រង់!`,
      km: `🧩 ការពិនិត្យ Flexbox និង Grid Overlays៖

១. Layout Badges៖ មើល HTML tags ក្នុង DOM tree ដែលមាន display: flex ឬ display: grid។ ឃើញមាន Badge តូចៗឈ្មោះ flex ឬ grid នៅជិត។
២. បើក Overlay លើអេក្រង់៖ ចុចលើ Badge flex ឬ grid -> Badge ប្រែជាពណ៌ខៀវ ហើយបង្ហាញបន្ទាត់ Grid Lines លើអេក្រង់។
៣. Flexbox Layout Editor៖ ក្នុង Styles pane ចុចលើ Icon រូប Flex ជិត display: flex -> បើកផ្ទាំងប៊ូតុងចក្ខុវិស័យសម្រាប់ justify-content (flex-start, center, space-between) និង align-items។
៤. Layout Pane៖ បើក Tab "Layout" ជិត Styles -> កំណត់បង្ហាញលេខបន្ទាត់ Grid Line, Track Sizes។

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Flexbox Alignment Editor៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<div style="display: flex; height: 100px; background: #1e293b;">
  <div>Item A</div><div>Item B</div>
</div>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. Inspect លើ <div> ដែលមាន display: flex
2. នៅផ្ទាំង Styles pane ជិតបន្ទាត់ display: flex -> ចុចលើ Icon រូបប្រអប់ Flex
3. ចុចប៊ូតុង "justify-content: space-between" ក្នុង Popover GUI

លទ្ធផលដែលឃើញ (What you'll see):
- កូដ 'justify-content: space-between;' ត្រូវបន្ថែមចូលក្នុង Styles pane ដោយស្វ័យប្រវត្តិ!
- ធាតុ Item A និង Item B រត់ទៅជ្រុងសងខាងនៃប្រអប់លើអេក្រង់!`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
    .grid-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; background: #1e293b; padding: 16px; border-radius: 8px; }
    .grid-item { background: #38bdf8; color: #0f172a; padding: 20px; text-align: center; font-weight: bold; border-radius: 4px; }
  </style>
</head>
<body>
  <h2>Flexbox & Grid Inspector Demo</h2>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
  </div>
  <p>Click the <strong>grid</strong> badge in Elements DOM tree to show layout lines!</p>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Mastering Complex CSS Grid Layouts Visually',
        km: '🎯 ការយល់ដឹងពី CSS Grid ស្មុគស្មាញតាមរយៈ Visual Lines'
      },
      description: {
        en: 'CSS Grid layouts can be tricky to debug. Toggling the grid badge displays explicit track line numbers (1, 2, 3, -1) and gap areas directly over your design, eliminating layout guesswork.',
        km: 'CSS Grid Layout ស្មុគស្មាញអាចពិបាក Debug។ ការចុចលើ grid badge បង្ហាញលេខបន្ទាត់ Track (1, 2, 3, -1) និង Gap លើ អេក្រង់យ៉ាងច្បាស់ ងាយស្រួលតម្រឹម។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Where do the flex and grid visual toggle badges appear in DevTools?',
        km: 'តើ Badges សម្រាប់បើក Flex និង Grid Overlays បង្ហាញនៅឯណា ក្នុង DevTools?'
      },
      solution: 'Directly beside HTML container tags inside the Elements panel DOM tree'
    },
    quizQuestions: [
      {
        id: 'q-dt-2-4',
        question: {
          en: 'What visual feature is toggled when you click the "grid" badge in the DOM tree view?',
          km: 'តើមានអ្វីបង្ហាញលើអេក្រង់ ពេលអ្នកចុចលើ Badge "grid" ក្នុង DOM Tree?'
        },
        options: [
          { id: '1', text: { en: 'Overlay grid lines, track numbers, and gap highlight areas', km: 'បន្ទាត់ Grid Lines, លេខ Track និង Highlight ចន្លោះ Gap' }, isCorrect: true },
          { id: '2', text: { en: 'A video player dialog', km: 'ផ្ទាំងវីដេអូ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Clicking grid/flex badges highlights layout boundaries directly on the page viewport.',
          km: 'ការចុចលើ Badge រំលេចបន្ទាត់ ព្រំប្រទល់ Layout លើអេក្រង់។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 3: Console Panel & Runtime JavaScript
  // ==========================================
  {
    id: 'dt-3-1',
    slug: 'rich-console-logging-methods',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: {
      en: '3.1 Rich Console Logging Methods (log, warn, error, table, group, time)',
      km: '3.1 វិធីសាស្ត្រ Print លទ្ធផលក្នុង Console (log, warn, error, table, group, time)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'The Console panel is much more than basic console.log(). Professional developers use console.warn() (yellow warning box), console.error() (red error banner with stack trace), console.table() (formats arrays/objects into a sortable tabular grid), console.group() (collapsible nested logs), and console.time() / console.timeEnd() (tracks code execution speed in milliseconds).',
      km: 'Console Panel មានសមត្ថភាពច្រើនជាងការប្រើប្រាស់ console.log() ធម្មតា។ Developers អាជីពប្រើប្រាស់ console.warn() (ប្រអប់ព្រមានពណ៌លឿង), console.error() (ប្រអប់ Error ពណ៌ក្រហម), console.table() (រៀបចំ Array/Object ជាតារាងស្អាត), console.group() (រៀបជា Folder បង្រួម/ពង្រីក) និង console.time() (វាស់ល្បឿនរត់កូដជា ms)។'
    },
    tutorial: {
      en: `🖨️ Advanced Console Methods Comparison:

1. console.log(val1, val2): Basic informative output logging.
2. console.warn("Warning msg"): Displays yellow caution box with warning icon.
3. console.error("Crash msg"): Displays red error banner with clickable file line stack trace.
4. console.table(arrayOfObjects): Formats array of objects into a clean, sortable grid table!
5. console.group("Group Name"): Indents subsequent logs inside a collapsible tree folder. Close with console.groupEnd().
6. console.time("timer"): Starts high-precision benchmark timer. End with console.timeEnd("timer") to log elapsed milliseconds.

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — console.table():
---------------------------------------------------
Sample Code:
<script>
  const users = [
    { id: 1, name: "Sokha", role: "Dev" },
    { id: 2, name: "Bopha", role: "Designer" }
  ];
  console.table(users);
</script>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក DevTools -> ចុច Tab "Console"
2. មើលលទ្ធផលដែលបាន Print ចេញពី console.table(users)

លទ្ធផលដែលឃើញ (What you'll see):
- បង្ហាញជាតារាង Grid ស្អាតបាត មាន Header Columns: (index), id, name, role
- អាចចុចលើ Header Column នីមួយៗដើម្បី តម្រៀបតាមលំដាប់ (Sort) បាន!`,
      km: `🖨️ ប្រៀបធៀបវិធីសាស្ត្រ Console ជឿនលឿន៖

១. console.log(val1, val2)៖ បង្ហាញព័ត៌មានទូទៅ។
២. console.warn("សារព្រមាន")៖ បង្ហាញប្រអប់ពណ៌លឿង ព្រមាន។
៣. console.error("សារ Error")៖ បង្ហាញប្រអប់ពណ៌ក្រហម Error អមជាមួយ បន្ទាត់កូដដែលខូច។
៤. console.table(arrayOfObjects)៖ បំលែង Array នៃ Objects ទៅជាតារាងស្អាត អាចចុច Sort បាន!
៥. console.group("ឈ្មោះ Group")៖ បង្កើត Folder សម្រាប់រៀបចំសារ Log ឱ្យមានសណ្តាប់ធ្នាប់ (បិទវិញដោយ console.groupEnd())។
៦. console.time("timer")៖ ចាប់ផ្តើមវាស់ល្បឿនកូដ (បិទវិញដោយ console.timeEnd("timer") ដើម្បីបង្ហាញ ms)។

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — console.table()៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<script>
  const users = [
    { id: 1, name: "Sokha", role: "Dev" },
    { id: 2, name: "Bopha", role: "Designer" }
  ];
  console.table(users);
</script>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក DevTools -> ចុច Tab "Console"
2. មើលលទ្ធផលដែលបាន Print ចេញពី console.table(users)

លទ្ធផលដែលឃើញ (What you'll see):
- បង្ហាញជាតារាង Grid ស្អាតបាត មាន Header Columns: (index), id, name, role
- អាចចុចលើ Header Column នីមួយៗដើម្បី តម្រៀបតាមលំដាប់ (Sort) បាន!`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
    button { background: #3b82f6; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; margin-right: 8px; }
  </style>
</head>
<body>
  <h2>Rich Console Logging Demo</h2>
  <button onclick="runTable()">Log Table</button>
  <button onclick="runTimer()">Measure Speed</button>
  <script>
    function runTable() {
      console.table([
        { product: "Keyboard", price: 49 },
        { product: "Mouse", price: 25 }
      ]);
    }
    function runTimer() {
      console.time("LoopSpeed");
      for(let i=0; i<1000000; i++) {}
      console.timeEnd("LoopSpeed");
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Inspecting Large API Responses with console.table',
        km: '🎯 ការពិនិត្យមើល API Response ធំៗដោយប្រើ console.table'
      },
      description: {
        en: 'When fetching an array of 50 products from a backend API, console.log() produces an overwhelming nested object list, whereas console.table() formats all 50 items into a sortable table instantly.',
        km: 'នៅពេលទាញយកទិន្នន័យ Product ចំនួន ៥០ ពី API, console.log() បង្ហាញជា Object ញ៉េរញ៉ៃ តែ console.table() រៀបចំជាតារាងស្អាត ងាយស្រួលមើលបំផុត។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which console method draws a yellow highlight warning box in the Console panel?',
        km: 'តើ Console Method មួយណាដែលបង្ហាញប្រអប់ព្រមាន ពណ៌លឿងក្នុង Console Panel?'
      },
      solution: 'console.warn()'
    },
    quizQuestions: [
      {
        id: 'q-dt-3-1',
        question: {
          en: 'What color background indicates a console.error() message in DevTools?',
          km: 'តើពណ៌អ្វីដែលបញ្ជាក់ពីសារ console.error() នៅក្នុង DevTools?'
        },
        options: [
          { id: '1', text: { en: 'Red highlight banner', km: 'ប្រអប់ពណ៌ក្រហម' }, isCorrect: true },
          { id: '2', text: { en: 'Yellow highlight banner', km: 'ប្រអប់ពណ៌លឿង' }, isCorrect: false }
        ],
        explanation: {
          en: 'Errors render with a red background and error icon in Console.',
          km: 'console.error() បង្ហាញជាប្រអប់ពណ៌ក្រហម និងមានសញ្ញា Error។'
        }
      }
    ]
  },

  {
    id: 'dt-3-2',
    slug: 'running-live-javascript-in-console',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: {
      en: '3.2 Running Live JavaScript Directly in Console (REPL)',
      km: '3.2 ការរត់កូដ JavaScript ផ្ទាល់នៅក្នុង Console (REPL Mode)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'The Console panel acts as an interactive JavaScript REPL (Read-Eval-Print Loop). You can type any JavaScript expression or function call directly into the console command prompt (>) to evaluate live page state, inspect global variables, query DOM elements ($("h1") or document.querySelector), or test code snippets instantly.',
      km: 'Console Panel ដើរតួជា JavaScript REPL (Read-Eval-Print Loop) អន្តរកម្ម។ អ្នកអាចវាយប្រមាណវិធី ឬហៅ Function ណាមួយក្នុង Console Prompt (>) ដើម្បីពិនិត្យ Variable របស់ Page, Query DOM Elements ($("h1") ឬ document.querySelector) ឬតេស្តកូដភ្លាមៗ។'
    },
    tutorial: {
      en: `💡 Console REPL Features & Shortcuts:

1. Instant Evaluation: Type '2 + 2' or 'document.title' -> press Enter to see output returned immediately below prompt.
2. Multi-line Code: Press Shift+Enter to create a new line without executing code early!
3. Recall History: Press Up/Down Arrow keys to cycle through previous console commands.
4. Clear Console: Press Ctrl+L (or Cmd+K), type 'clear()', or click clear icon (🚫) at top left.
5. DOM Selector Shortcuts:
   - '$()': Equivalent to 'document.querySelector()'
   - '$$()': Equivalent to 'document.querySelectorAll()'
   - '$0': Refers to the currently selected DOM element in Elements panel!

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Console $0 Shortcut:
---------------------------------------------------
Sample Code:
<button id="main-btn" class="active">Submit Order</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ក្នុង Elements Panel -> ចុចជ្រើសរើស <button id="main-btn">
2. ប្តូរទៅ Tab "Console"
3. វាយ '$0' រួចចុច Enter
4. វាយ '$0.style.background = "red"' រួចចុច Enter

លទ្ធផលដែលឃើញ (What you'll see):
- '$0' យោងទៅកាន់ ប៊ូតុងដែលយើងបានជ្រើសរើសក្នុង Elements!
- ប៊ូតុងលើអេក្រង់ផ្លាស់ប្តូរពណ៌ទៅជា ពណ៌ក្រហម ភ្លាមៗ!`,
      km: `💡 លក្ខណៈពិសេស និង Shortcuts នៃ Console REPL៖

១. រត់កូដភ្លាមៗ៖ វាយ '2 + 2' ឬ 'document.title' -> ចុច Enter ដើម្បីឃើញលទ្ធផលភ្លាមៗ។
២. សរសេរកូដច្រើនបន្ទាត់៖ ចុច Shift+Enter ដើម្បីចុះបន្ទាត់ថ្មី ដោយមិនទាន់រត់កូដ!
៣. មើលប្រវត្តិកូដចាស់ៗ៖ ចុច ព្រួញឡើង/ចុះ លើ Keyboard ដើម្បីទាញយកកូដដែលបានវាយមុនៗ។
៤. សម្អាត Console៖ ចុច Ctrl+L (ឬ Cmd+K), វាយ 'clear()', ឬចុច Icon (🚫) នៅជ្រុងឆ្វេងលើ។
៥. DOM Selector Shortcuts៖
   - '$()': ស្មើនឹង 'document.querySelector()'
   - '$$()': ស្មើនឹង 'document.querySelectorAll()'
   - '$0': យោងទៅកាន់ Element ដែលកំពុងជ្រើសរើសក្នុង Elements Panel!

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Console $0 Shortcut៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<button id="main-btn" class="active">Submit Order</button>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ក្នុង Elements Panel -> ចុចជ្រើសរើស <button id="main-btn">
2. ប្តូរទៅ Tab "Console"
3. វាយ '$0' រួចចុច Enter
4. វាយ '$0.style.background = "red"' រួចចុច Enter

លទ្ធផលដែលឃើញ (What you'll see):
- '$0' យោងទៅកាន់ ប៊ូតុងដែលយើងបានជ្រើសរើសក្នុង Elements!
- ប៊ូតុងលើអេក្រង់ផ្លាស់ប្តូរពណ៌ទៅជា ពណ៌ក្រហម ភ្លាមៗ!`
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
  <h2>Console REPL Demo Page</h2>
  <p>Open Console panel and type: <code>document.body.style.background = 'purple'</code></p>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 The Power of the $0 Console Shortcut',
        km: '🎯 អានុភាពនៃ $0 Shortcut ក្នុង Console'
      },
      description: {
        en: 'Instead of typing long document.querySelector() selectors, developers inspect an element in the Elements tab and immediately reference it as $0 in the Console to test event listeners or inline style modifications.',
        km: 'ជំនួសឱ្យការវាយ document.querySelector វែងៗ Developers គ្រាន់តែ Inspect លើ Element ក្នុង Elements tab រួចវាយ $0 ក្នុង Console ដើម្បីតេស្ត Style ឬ Event ភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What special console variable shortcut refers to the currently highlighted element in the Elements panel DOM tree?',
        km: 'តើ Variable ពិសេសមួយណាក្នុង Console ដែលយោងទៅកាន់ Element ដែលកំពុងរំលេចក្នុង Elements DOM Tree?'
      },
      solution: '$0'
    },
    quizQuestions: [
      {
        id: 'q-dt-3-2',
        question: {
          en: 'How do you create a new line without executing code in the Console prompt?',
          km: 'តើធ្វើដូចម្តេចដើម្បី ចុះបន្ទាត់ថ្មី ដោយមិនទាន់រត់កូដក្នុង Console Prompt?'
        },
        options: [
          { id: '1', text: { en: 'Shift + Enter', km: 'Shift + Enter' }, isCorrect: true },
          { id: '2', text: { en: 'Ctrl + C', km: 'Ctrl + C' }, isCorrect: false }
        ],
        explanation: {
          en: 'Shift+Enter inserts a line break for multi-line snippet authoring.',
          km: 'Shift+Enter ជួយចុះបន្ទាត់ថ្មី សម្រាប់សរសេរកូដច្រើនបន្ទាត់។'
        }
      }
    ]
  },

  {
    id: 'dt-3-3',
    slug: 'filtering-console-logs-and-preservelog',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: {
      en: '3.3 Console Log Levels Filter & Preserve Log Option',
      km: '3.3 ការ Filter តាម Log Levels និងការប្រើប្រាស់ Preserve Log'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'In complex web applications with hundreds of logged messages, finding a specific warning is challenging. The Console header provides a Log Level filter dropdown (Verbose, Info, Warnings, Errors), a text search filter bar, and a critical checkbox called "Preserve log" which prevents the console from clearing logs when navigating or refreshing pages.',
      km: 'ក្នុង កម្មវិធីធំៗដែលមានសារ Log រាប់រយ ការស្វែងរកសារដែលត្រូវការគឺពិបាកណាស់។ Console ផ្តល់ប្រអប់ Filter តាម Log Levels (Verbose, Info, Warnings, Errors), ប្រអប់ Search Filter និងគ្រាប់ចុចដ៏សំខាន់ "Preserve log" ដែលរក្សារាល់សារ Log មិនឱ្យបាត់ ពេល Refresh Page ឬប្តូរទំព័រ។'
    },
    tutorial: {
      en: `🧹 Console Filtering & Persistence Options:

1. Log Levels Dropdown: Select Default levels, or uncheck "Info" / "Verbose" to isolate only "Errors" and "Warnings".
2. Filter Search Box: Type matching string keywords or regular expressions (e.g. "API" or "auth") into the Filter text input to filter logs live.
3. Preserve Log Checkbox: Check "Preserve log" box in Console settings gear menu -> prevents console logs from wiping automatically upon page refresh (Ctrl+R) or form submissions!
4. Hide Network Errors: Uncheck "User Messages Only" or toggle "Hide network" to suppress noisy CORS/404 fetch logs.

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Preserve Log Demo:
---------------------------------------------------
Sample Code:
<form onsubmit="console.log('Form submitting!');">
  <button type="submit">Submit & Refresh Page</button>
</form>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក Console Panel -> គូស Tick លើប្រអប់ "Preserve log"
2. ចុចប៊ូតុង "Submit & Refresh Page" លើ Web Page

លទ្ធផលដែលឃើញ (What you'll see):
- ទំព័រនឹង Refresh ឡើងវិញ
- សារ 'Form submitting!' នៅតែមានបង្ហាញក្នុង Console ដោយ មិនបាត់បង់ (មិនត្រូវលុបសម្អាត)!`,
      km: `🧹 ការ Filter និងការរក្សាសារ Log (Preserve Log)៖

១. Dropdown Log Levels៖ ជ្រើសរើស Level ឬដក Tick "Info" ដើម្បីបង្ហាញតែ "Errors" និង "Warnings"។
២. ប្រអប់ Search Filter៖ វាយ ពាក្យគន្លឹះ (ឧ. "API" ឬ "auth") ក្នុង Filter text box ដើម្បីបង្ហាញតែសារដែលទាក់ទង។
៣. គូស Tick "Preserve Log"៖ គូស Tick លើប្រអប់ "Preserve log" ក្នុង Console Settings -> ការពារសារ Log មិនឱ្យបាត់ ពេល Refresh Page (Ctrl+R) ឬ Submit Form!
៤. លាក់ Network Errors៖ ដក Tick "User Messages Only" ឬ toggle "Hide network" ដើម្បីបិទសាររំខាននៃ Network។

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Preserve Log Demo៖
---------------------------------------------------
កូដគំរូ (Sample Code):
<form onsubmit="console.log('Form submitting!');">
  <button type="submit">Submit & Refresh Page</button>
</form>

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក Console Panel -> គូស Tick លើប្រអប់ "Preserve log"
2. ចុចប៊ូតុង "Submit & Refresh Page" លើ Web Page

លទ្ធផលដែលឃើញ (What you'll see):
- ទំព័រនឹង Refresh ឡើងវិញ
- សារ 'Form submitting!' នៅតែមានបង្ហាញក្នុង Console ដោយ មិនបាត់បង់ (មិនត្រូវលុបសម្អាត)!`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #020617; color: white; padding: 24px; }
    button { background: #eab308; color: black; font-weight: bold; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Preserve Log Demo</h2>
  <button onclick="location.reload()">Log & Refresh Page</button>
  <script>
    console.log("Important message before page reload!");
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Debugging Form Redirect Crashes with Preserve Log',
        km: '🎯 ការ Debug លើ Form Redirect ដោយប្រើ Preserve Log'
      },
      description: {
        en: 'When a login form submits and immediately redirects to another page, console logs disappear in a split second. Enabling "Preserve Log" preserves pre-redirect console messages so you can inspect error codes.',
        km: 'នៅពេល Form Login ត្រូវ Submit ហើយរត់ផ្លាស់ទៅ Page ផ្សេងភ្លាមៗ សារ Console នឹងបាត់ក្នុងមួយរំពេច។ ការបើក "Preserve Log" រក្សាសារចាស់ៗ ឱ្យយើងពិនិត្យមើល Error បានងាយស្រួល។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What checkbox setting in the Console panel prevents log entries from wiping during page navigation or reloads?',
        km: 'តើការកំណត់ប្រអប់មួយណាក្នុង Console Panel ដែលការពារសារ Log មិនឱ្យបាត់ពេល ប្តូរទំព័រ ឬ Refresh?'
      },
      solution: 'Preserve log checkbox'
    },
    quizQuestions: [
      {
        id: 'q-dt-3-3',
        question: {
          en: 'Why is "Preserve log" essential when debugging HTML form navigation submissions?',
          km: 'ហេតុអ្វីបានជា "Preserve log" មានសារៈសំខាន់ខ្លាំងពេល Debug លើ Form Navigation Submissions?'
        },
        options: [
          { id: '1', text: { en: 'It keeps logs from clearing when the form submission triggers a page reload', km: 'វា រក្សាសារ Log មិនឱ្យបាត់ ពេល Form Submit ធ្វើឱ្យ Page Reload' }, isCorrect: true },
          { id: '2', text: { en: 'It encrypts console messages', km: 'វា Encrypt សារ Console' }, isCorrect: false }
        ],
        explanation: {
          en: 'Preserve log retains console messages across navigation page unloads.',
          km: 'Preserve log រក្សាសារចាស់ៗទាំងអស់ទោះបីជា Page ត្រូវ Reload ក៏ដោយ។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 4: Sources Panel & JavaScript Debugging
  // ==========================================
  {
    id: 'dt-4-1',
    slug: 'setting-line-breakpoints-in-sources',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: {
      en: '4.1 Finding Files & Setting Line Breakpoints in Sources',
      km: '4.1 ការស្វែងរក File និងការដាក់ Line Breakpoint ក្នុង Sources Panel'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The Sources panel is where you inspect client-side source code files and debug execution. Instead of relying solely on console.log, setting a Line Breakpoint by clicking directly on a line number in the code editor causes the browser to pause JavaScript execution right before executing that specific line.',
      km: 'Sources Panel គឺជាកន្លែងដែលអ្នកពិនិត្យមើល File កូដ និង Debug ការរត់របស់ JavaScript។ ជំនួសឱ្យការប្រើតែ console.log, ការដាក់ Line Breakpoint ដោយចុចលើលេខបន្ទាត់កូដក្នុង Editor នឹងបង្ខំឱ្យ Browser ផ្អាកការរត់កូដ (Pause) នៅត្រង់បន្ទាត់នោះភ្លាមៗ។'
    },
    tutorial: {
      en: `🎯 Sources Navigation & Setting Breakpoints:

1. Page Navigator: Look at left sidebar in Sources panel -> expand folder domain -> double click file (e.g. app.js).
2. Quick File Open: Press Ctrl+P (or Cmd+P on macOS) -> type filename -> press Enter.
3. Toggle Line Breakpoint: Click directly on the line number (e.g. line 12) -> a blue chevron/badge appears on that line number.

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Setting Line Breakpoint:
---------------------------------------------------
Sample Code (app.js):
function calculateTotal(price, tax) {
  let subtotal = price * 1;
  let total = subtotal + tax; // Line 3
  return total;
}

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក DevTools -> ចុច Tab "Sources"
2. ចុច Ctrl+P រួចវាយជ្រើសរើស File 'app.js'
3. ចុចលើលេខបន្ទាត់ទី 3 (Line 3) ដើម្បីដាក់ Breakpoint (ឃើញ Badge ពណ៌ខៀវ)
4. ធ្វើសកម្មភាពលើ Web Page ដែលហៅ Function 'calculateTotal(50, 5)'

លទ្ធផលដែលឃើញ (What you'll see):
- ការរត់កូដនឹងផ្អាក (Pause)! មានបដាពណ៌លឿងខាងលើ: "Paused in debugger"
- បន្ទាត់ទី 3 ត្រូវបានរំលេចពណ៌លឿង (Highlight)
- អាចយក Mouse ទៅប៉ះលើ Variable 'subtotal' ដើម្បីមើលតម្លៃលេខ 50 ផ្ទាល់!`,
      km: `🎯 ការរុករក File និងការដាក់ Breakpoint៖

១. ផ្ទាំងរុករក File៖ មើល Sidebar ខាងឆ្វេងក្នុង Sources Panel -> ពង្រីក Folder -> Double click លើ File (ឧ. app.js)។
២. បើក File យ៉ាងរហ័ស (Quick Open)៖ ចុច Ctrl+P (ឬ Cmd+P) -> វាយឈ្មោះ File -> ចុច Enter។
៣. ដាក់/ដោះ Breakpoint៖ ចុចត្រង់លេខបន្ទាត់កូដ (ឧ. បន្ទាត់ទី 3) -> នឹងឃើញ Marker Badge ពណ៌ខៀវលើលេខបន្ទាត់នោះ។

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — ការដាក់ Line Breakpoint៖
---------------------------------------------------
កូដគំរូ (Sample Code app.js):
function calculateTotal(price, tax) {
  let subtotal = price * 1;
  let total = subtotal + tax; // Line 3
  return total;
}

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. បើក DevTools -> ចុច Tab "Sources"
2. ចុច Ctrl+P រួចវាយជ្រើសរើស File 'app.js'
3. ចុចលើលេខបន្ទាត់ទី 3 (Line 3) ដើម្បីដាក់ Breakpoint (ឃើញ Badge ពណ៌ខៀវ)
4. ធ្វើសកម្មភាពលើ Web Page ដែលហៅ Function 'calculateTotal(50, 5)'

លទ្ធផលដែលឃើញ (What you'll see):
- ការរត់កូដនឹងផ្អាក (Pause)! មានបដាពណ៌លឿងខាងលើ: "Paused in debugger"
- បន្ទាត់ទី 3 ត្រូវបានរំលេចពណ៌លឿង (Highlight)
- អាចយក Mouse ទៅប៉ះលើ Variable 'subtotal' ដើម្បីមើលតម្លៃលេខ 50 ផ្ទាល់!`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
    button { background: #8b5cf6; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Sources Breakpoint Demo</h2>
  <button onclick="calculateTotal(100, 10)">Calculate Order Total</button>
  <script>
    function calculateTotal(price, tax) {
      let subtotal = price * 1;
      let total = subtotal + tax;
      alert("Total: $" + total);
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Why Line Breakpoints Beat Console.log',
        km: '🎯 ហេតុអ្វីបានជា Line Breakpoint ល្អជាង console.log'
      },
      description: {
        en: 'With line breakpoints, you do not need to add temporary console.log() statements to your code, re-save, and re-build. You can pause live execution anywhere on demand and inspect every variable state instantly.',
        km: 'ការប្រើ Line Breakpoint មិនតម្រូវឱ្យអ្នកសរសេរ console.log, Save និង Build កូដឡើងវិញឡើយ។ អ្នកអាច ផ្អាកកូដត្រង់ណាក៏បាន ហើយមើលតម្លៃ Variable ទាំងអស់បានភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What keyboard shortcut opens the quick file navigation search popup inside Sources panel?',
        km: 'តើ Shortcut មួយណាសម្រាប់ បើកប្រអប់ស្វែងរក File យ៉ាងរហ័សក្នុង Sources Panel?'
      },
      solution: 'Ctrl+P (or Cmd+P on Mac)'
    },
    quizQuestions: [
      {
        id: 'q-dt-4-1',
        question: {
          en: 'How do you place a Line Breakpoint on line 25 of a JavaScript file in Sources panel?',
          km: 'តើធ្វើដូចម្តេចដើម្បីដាក់ Line Breakpoint លើបន្ទាត់ទី ២៥ នៃ JavaScript File ក្នុង Sources Panel?'
        },
        options: [
          { id: '1', text: { en: 'Click directly on the line number 25 margin in code editor', km: 'ចុចលើលេខបន្ទាត់ទី ២៥ ផ្ទាល់ក្នុង Code Editor' }, isCorrect: true },
          { id: '2', text: { en: 'Double click the browser scrollbar', km: 'Double click លើ Scrollbar' }, isCorrect: false }
        ],
        explanation: {
          en: 'Clicking line numbers toggles breakpoint markers.',
          km: 'ការចុចលើលេខបន្ទាត់ ជួយបើក/បិទ Breakpoint Markers។'
        }
      }
    ]
  },

  {
    id: 'dt-4-2',
    slug: 'paused-execution-and-call-stack',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: {
      en: '4.2 Paused Execution, Line Highlighting & Call Stack Pane',
      km: '4.2 ការផ្អាកកូដ (Paused Execution) និងការមើល Call Stack Pane'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'When execution pauses at a breakpoint, the viewport displays a top overlay banner ("Paused in debugger"), the current line turns blue/yellow, and the Call Stack pane on the right lists the active chain of nested function calls that led to this exact execution moment.',
      km: 'នៅពេលកូដត្រូវផ្អាក (Paused) អេក្រង់នឹងបង្ហាញបដា "Paused in debugger", បន្ទាត់កូដបច្ចុប្បន្នត្រូវបានរំលេចពណ៌ ហើយ Call Stack Pane នៅខាងស្តាំបង្ហាញពីប្រវត្តិជួរ Function នានាដែលបានហៅបន្តគ្នា (Nested calls) រហូតមកដល់ចំណុចនេះ។'
    },
    tutorial: {
      en: `🥞 Understanding the Call Stack Pane:

1. Top Frame: Represents the currently active function where execution is currently paused.
2. Parent Frames: Show the caller functions below it in reverse chronological stack order.
3. Stack Navigation: Click any lower frame in Call Stack to jump back to caller source location and inspect variable scope at that earlier call moment!

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Call Stack Inspection:
---------------------------------------------------
Sample Code:
function initApp() { handleAuth(); }
function handleAuth() { validateUser("sokha"); }
function validateUser(username) {
  let isOk = username === "sokha"; // Breakpoint here
}

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ដាក់ Breakpoint លើបន្ទាត់ 'let isOk = ...' ក្នុង 'validateUser'
2. ហៅ Function 'initApp()'
3. មើលផ្ទាំង "Call Stack" នៅខាងស្តាំដៃ

លទ្ធផលដែលឃើញ (What you'll see):
- Call Stack បង្ហាញជួរថ្នាក់៖
  1) validateUser (app.js:3)   <- Currently paused
  2) handleAuth (app.js:2)     <- Caller
  3) initApp (app.js:1)        <- Root caller`,
      km: `🥞 ការយល់ដឹងអំពី Call Stack Pane៖

១. Top Frame៖ តំណាងឱ្យ Function បច្ចុប្បន្នដែលកំពុងផ្អាកកូដ (Paused)។
២. Parent Frames៖ បង្ហាញពី Function ទាំងឡាយដែលបានហៅបន្តគ្នាមកពីខាងក្រោម។
៣. ការចុចមើល Stack៖ អ្នកអាចចុចលើ Frame ខាងក្រោមក្នុង Call Stack ដើម្បីត្រឡប់ទៅមើលទីតាំង និង Scope របស់ Function ដើមបាន!

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — ការពិនិត្យ Call Stack៖
---------------------------------------------------
កូដគំរូ (Sample Code):
function initApp() { handleAuth(); }
function handleAuth() { validateUser("sokha"); }
function validateUser(username) {
  let isOk = username === "sokha"; // Breakpoint here
}

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ដាក់ Breakpoint លើបន្ទាត់ 'let isOk = ...' ក្នុង 'validateUser'
2. ហៅ Function 'initApp()'
3. មើលផ្ទាំង "Call Stack" នៅខាងស្តាំដៃ

លទ្ធផលដែលឃើញ (What you'll see):
- Call Stack បង្ហាញជួរថ្នាក់៖
  1) validateUser (app.js:3)   <- Currently paused
  2) handleAuth (app.js:2)     <- Caller
  3) initApp (app.js:1)        <- Root caller`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #020617; color: white; padding: 24px; }
    button { background: #06b6d4; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Call Stack Inspection Demo</h2>
  <button onclick="initApp()">Start Call Chain</button>
  <script>
    function initApp() { handleAuth(); }
    function handleAuth() { validateUser("sokha"); }
    function validateUser(username) {
      let isOk = username === "sokha";
      console.log("Validation result:", isOk);
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Unraveling Deeply Nested Function Errors',
        km: '🎯 ការស្វែងរកប្រភពដើមនៃ Function Errors ស្មុគស្មាញ'
      },
      description: {
        en: 'When a utility function throws an error deep inside a helper file, looking at the Call Stack pane immediately reveals which React component triggered the error chain higher up.',
        km: 'នៅពេល Helper Function មួយមាន Error ជម្រៅជ្រៅ ការមើល Call Stack បង្ហាញភ្លាមៗថា តើកើតចេញពី Component មួយណាពីខាងលើ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What information does the top item in the Call Stack pane represent when execution is paused?',
        km: 'តើព័ត៌មាននៅផ្នែកខាងលើគេបង្អស់នៃ Call Stack បង្ហាញពីអ្វី ពេលកូដកំពុងផ្អាក?'
      },
      solution: 'The currently executing function where execution is currently paused'
    },
    quizQuestions: [
      {
        id: 'q-dt-4-2',
        question: {
          en: 'How can you view the variable values of a parent function higher up in the Call Stack while paused?',
          km: 'តើធ្វើដូចម្តេចដើម្បីមើលតម្លៃ Variable របស់ Parent Function ខាងលើ ក្នុង Call Stack ពេលកំពុងផ្អាក?'
        },
        options: [
          { id: '1', text: { en: 'Click on the parent function frame name directly inside the Call Stack pane', km: 'ចុចលើឈ្មោះ Parent Function នោះផ្ទាល់ក្នុង Call Stack Pane' }, isCorrect: true },
          { id: '2', text: { en: 'Restart the computer', km: 'Restart កុំព្យូទ័រ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Clicking stack frames switches the active scope view to that execution context.',
          km: 'ការចុចលើ Stack frame ប្តូរផ្ទាំង Scope ទៅកាន់ Function ដើមនោះ។'
        }
      }
    ]
  },

  {
    id: 'dt-4-3',
    slug: 'stepping-controls-resume-step-over-step-into-step-out',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: {
      en: '4.3 Stepping Controls (Resume, Step Over, Step Into, Step Out)',
      km: '4.3 Stepping Controls (Resume, Step Over, Step Into, Step Out)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Once paused at a breakpoint, Sources panel provides 4 primary stepping buttons: Resume (F8 - play until next breakpoint), Step Over (F10 - execute current line and move to next line without entering functions), Step Into (F11 - step inside a function call on current line), and Step Out (Shift+F11 - finish current function and return to caller).',
      km: 'នៅពេលកូដត្រូវផ្អាក (Paused) ផ្ទាំង Sources មានប៊ូតុងបញ្ជាចំនួន ៤៖ Resume (F8 - រត់បន្តរហូតដល់ជួប Breakpoint បន្ទាប់), Step Over (F10 - រត់រំលងទៅបន្ទាត់បន្ទាប់ដោយមិនចូលក្នុង Function Call), Step Into (F11 - លោតចូលទៅក្នុង Function Call លើបន្ទាត់នោះ), និង Step Out (Shift+F11 - រត់បញ្ចប់ Function បច្ចុប្បន្ន រួចលោតចេញមកក្រៅ)។'
    },
    tutorial: {
      en: `🕹️ Stepping Navigation Controls Cheat Sheet:

1. Resume Execution (F8 / ▶): Continues normal code execution until the next breakpoint is hit (or script ends).
2. Step Over Next Function (F10 / ↷): Executes the current line completely and moves to the very next line in the current file.
3. Step Into Next Function (F11 / ↲): Steps inside the function call on the active line to inspect its internal statements line-by-line.
4. Step Out of Function (Shift+F11 / ↱): Executes the remainder of the current function quickly and pauses at the return line in caller function.

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Step Into vs Step Over:
---------------------------------------------------
Sample Code:
function main() {
  let a = 10;
  let b = addFive(a); // Paused here (Line 3)
  console.log(b);
}
function addFive(n) { return n + 5; }

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ផ្អាកកូដត្រង់បន្ទាត់ទី 3 ('let b = addFive(a)')
2. ចុចប៊ូតុង "Step Into" (F11) -> កូដនឹងលោតចូលទៅក្នុង Function 'addFive' (បន្ទាត់ទី 6)!
3. ប្រសិនបើចុច "Step Over" (F10) ជំនួសវិញ -> កូដនឹងរំលងទៅបន្ទាត់ 'console.log(b)' (បន្ទាត់ទី 4) ភ្លាមៗ!

លទ្ធផលដែលឃើញ (What you'll see):
- Step Into អនុញ្ញាតឱ្យយើងលោតចូលទៅមើលកូដខាងក្នុង Function!
- Step Over រត់រំលង Function ដោយយកតែលទ្ធផលមកប្រើ!`,
      km: `🕹️ ព័ត៌មានសង្ខេបនៃ Stepping Controls៖

១. Resume (F8 / ▶)៖ ឱ្យកូដរត់បន្តតាមធម្មតារហូតជួប Breakpoint បន្ទាប់។
២. Step Over (F10 / ↷)៖ រត់បន្ទាត់បច្ចុប្បន្ន រួចរំលងទៅបន្ទាត់បន្ទាប់ (មិនចូលក្នុង Function)។
៣. Step Into (F11 / ↲)៖ លោតចូលទៅក្នុង Function Call លើបន្ទាត់នោះដើម្បីមើលកូដខាងក្នុង។
៤. Step Out (Shift+F11 / ↱)៖ រត់បញ្ចប់ Function បច្ចុប្បន្ន ៖ រួចលោតចេញមកកាន់ Caller វិញ។

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Step Into ធៀបនឹង Step Over៖
---------------------------------------------------
កូដគំរូ (Sample Code):
function main() {
  let a = 10;
  let b = addFive(a); // Paused here (Line 3)
  console.log(b);
}
function addFive(n) { return n + 5; }

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ផ្អាកកូដត្រង់បន្ទាត់ទី 3 ('let b = addFive(a)')
2. ចុចប៊ូតុង "Step Into" (F11) -> កូដនឹងលោតចូលទៅក្នុង Function 'addFive' (បន្ទាត់ទី 6)!
3. ប្រសិនបើចុច "Step Over" (F10) ជំនួសវិញ -> កូដនឹងរំលងទៅបន្ទាត់ 'console.log(b)' (បន្ទាត់ទី 4) ភ្លាមៗ!

លទ្ធផលដែលឃើញ (What you'll see):
- Step Into អនុញ្ញាតឱ្យយើងលោតចូលទៅមើលកូដខាងក្នុង Function!
- Step Over រត់រំលង Function ដោយយកតែលទ្ធផលមកប្រើ!`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
    button { background: #10b981; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Stepping Controls Practice</h2>
  <button onclick="startCalc()">Run Step Test</button>
  <script>
    function startCalc() {
      let x = 5;
      let y = doubleVal(x);
      console.log("Result:", y);
    }
    function doubleVal(num) {
      return num * 2;
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Knowing When to Step Over vs Step Into',
        km: '🎯 ការដឹងពីពេលដែលត្រូវ Step Over និង Step Into'
      },
      description: {
        en: 'Use Step Over (F10) when passing trusted library functions (like Math.round or lodash) so you do not waste time stepping through external library internals. Use Step Into (F11) when debugging your own custom logic.',
        km: 'ប្រើ Step Over (F10) ពេលជួប Library Function ដូចជា Math.round ឬ lodash ដើម្បីកុំឱ្យខាតពេលចូលមើលកូដគេ។ ប្រើ Step Into (F11) តែពេលចង់តេស្តកូដ Function ផ្ទាល់ខ្លួន។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which keyboard shortcut steps INSIDE a function call on the currently paused line?',
        km: 'តើ Shortcut មួយណាសម្រាប់ លោតចូលទៅក្នុង Function Call លើបន្ទាត់ដែលកំពុងផ្អាក?'
      },
      solution: 'F11 (Step Into)'
    },
    quizQuestions: [
      {
        id: 'q-dt-4-3',
        question: {
          en: 'What control key resumes script execution until the next breakpoint is encountered?',
          km: 'តើប៊ូតុងមួយណាសម្រាប់ ឱ្យកូដរត់បន្ត រហូតដល់ជួប Breakpoint បន្ទាប់?'
        },
        options: [
          { id: '1', text: { en: 'F8 (Resume)', km: 'F8 (Resume)' }, isCorrect: true },
          { id: '2', text: { en: 'F10 (Step Over)', km: 'F10 (Step Over)' }, isCorrect: false }
        ],
        explanation: {
          en: 'F8 resumes script execution playing through uninterrupted until a breakpoint hits.',
          km: 'F8 ឱ្យកូដរត់បន្តតាមធម្មតារហូតដល់ជួប Breakpoint បន្ទាប់។'
        }
      }
    ]
  },

  {
    id: 'dt-4-4',
    slug: 'inspecting-scope-pane-and-watch-expressions',
    moduleNumber: 4,
    lessonNumberInModule: 4,
    title: {
      en: '4.4 Inspecting Scope Pane & Watch Expressions Pane',
      km: '4.4 ការពិនិត្យ Scope Pane និងការប្រើប្រាស់ Watch Expressions Pane'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'When execution is paused, the right sidebar in Sources provides two crucial variable inspection tools: Scope Pane (automatically organizes all accessible Local, Closure, and Global variables with live values) and Watch Pane (allows adding custom JavaScript expressions like user.cart.length that evaluate continuously on every step).',
      km: 'នៅពេលកូដត្រូវផ្អាក (Paused) ផ្ទាំងខាងស្តាំនៃ Sources ផ្តល់ឧបករណ៍ពិនិត្យ Variable ចំនួន ២៖ Scope Pane (រៀបចំរាល់ Local, Closure, និង Global Variables ស្វ័យប្រវត្តិអមជាមួយតម្លៃ) និង Watch Pane (អនុញ្ញាតឱ្យបន្ថែម Expression តាមដានផ្ទាល់ខ្លួន ដូចជា user.cart.length ដែលនឹងរត់រាល់ពេលកូដដើរ)។'
    },
    tutorial: {
      en: `👁️ Scope & Watch Pane Capabilities:

1. Local Scope: Displays arguments and local variables created inside the currently paused function. Double-click any variable value to modify it live!
2. Closure Scope: Displays variables retained from outer enclosing scope chains.
3. Global Scope: Displays browser window variables (e.g. document, location).
4. Watch Expression Pane: Click the "+" icon in Watch pane -> type expression (e.g. 'items.length > 0' or 'total * 1.1') -> evaluates live at every step!

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Scope & Watch Panes:
---------------------------------------------------
Sample Code:
function processCart(items) {
  let discount = 0.1;
  let tax = 0.05; // Breakpoint here
}

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ផ្អាកកូដត្រង់បន្ទាត់ 'let tax = ...'
2. មើលផ្ទាំង "Scope" -> ពង្រីកផ្នែក "Local"
3. ក្នុងផ្ទាំង "Watch" -> ចុច (+) -> វាយ expression 'discount * 100'

លទ្ធផលដែលឃើញ (What you'll see):
- ក្នុង Scope (Local) បង្ហាញ: discount: 0.1, items: Array(2)
- ក្នុង Watch pane បង្ហាញ: discount * 100: 10 (រត់គណនាស្វ័យប្រវត្តិ)`,
      km: `👁️ សមត្ថភាពនៃ Scope និង Watch Pane៖

១. Local Scope៖ បង្ហាញ Arguments និង Local Variables ក្នុង Function បច្ចុប្បន្ន។ Double-click លើតម្លៃ Variable ដើម្បីកែប្រែបាន!
២. Closure Scope៖ បង្ហាញ Variables ដែលរក្សាទុកមកពី Outer Scope។
៣. Global Scope៖ បង្ហាញ Browser Window variables (ឧ. document, location)។
៤. Watch Expression Pane៖ ចុច (+) ក្នុង Watch pane -> វាយ expression (ឧ. 'items.length > 0' ឬ 'total * 1.1') -> វានឹងរត់គណនាស្វ័យប្រវត្តិគ្រប់ជំហាន!

---------------------------------------------------
🖥️ DevTools Panel Walkthrough — Scope និង Watch Panes៖
---------------------------------------------------
កូដគំរូ (Sample Code):
function processCart(items) {
  let discount = 0.1;
  let tax = 0.05; // Breakpoint here
}

ជំហាននៅក្នុង DevTools (Steps in DevTools):
1. ផ្អាកកូដត្រង់បន្ទាត់ 'let tax = ...'
2. មើលផ្ទាំង "Scope" -> ពង្រីកផ្នែក "Local"
3. ក្នុងផ្ទាំង "Watch" -> ចុច (+) -> វាយ expression 'discount * 100'

លទ្ធផលដែលឃើញ (What you'll see):
- ក្នុង Scope (Local) បង្ហាញ: discount: 0.1, items: Array(2)
- ក្នុង Watch pane បង្ហាញ: discount * 100: 10 (រត់គណនាស្វ័យប្រវត្តិ)`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
    button { background: #8b5cf6; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Scope & Watch Pane Demo</h2>
  <button onclick="calcOrder(['Item1', 'Item2'])">Process Order</button>
  <script>
    function calcOrder(cart) {
      let subtotal = 100;
      let shipping = 15;
      let total = subtotal + shipping;
      console.log("Total:", total);
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '🎯 Live Variable Mutation in Scope Pane',
        km: '🎯 ការកែប្រែតម្លៃ Variable ផ្ទាល់ក្នុង Scope Pane'
      },
      description: {
        en: 'While paused on a breakpoint, developers can double-click a variable inside Scope pane (e.g. change isAdmin: false to true) to test conditional branches without modifying source files!',
        km: 'ពេលកំពុងផ្អាកកូដ អ្នកអាច Double-click លើ Variable ក្នុង Scope pane (ឧ. ប្តូរ isAdmin: false ទៅ true) ដើម្បីតេស្តលក្ខខណ្ឌដោយមិនបាច់កែកូដដើមឡើយ!'
      }
    },
    practiceExercise: {
      question: {
        en: 'In which pane can you configure custom JavaScript expressions that re-evaluate automatically on every step during debugging?',
        km: 'តើក្នុង Pane មួយណាដែលអ្នកអាចកំណត់ JavaScript Expression ផ្ទាល់ខ្លួនឱ្យរត់គណនាស្វ័យប្រវត្តិរាល់ពេល Debug?'
      },
      solution: 'Watch Expressions pane'
    },
    quizQuestions: [
      {
        id: 'q-dt-4-4',
        question: {
          en: 'What section of the Scope pane holds variables created inside the currently paused function body?',
          km: 'តើផ្នែកមួយណាក្នុង Scope Pane ដែលផ្ទុក Variables បង្កើតក្នុង Function ដែលកំពុងផ្អាក?'
        },
        options: [
          { id: '1', text: { en: 'Local Scope', km: 'Local Scope' }, isCorrect: true },
          { id: '2', text: { en: 'Global Scope', km: 'Global Scope' }, isCorrect: false }
        ],
        explanation: {
          en: 'Local Scope displays arguments and variables declared inside the local function frame.',
          km: 'Local Scope បង្ហាញ Variables ក្នុង Function ចម្បងនោះ។'
        }
      }
    ]
  }
];
