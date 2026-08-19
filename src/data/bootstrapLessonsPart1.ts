import { FrontendLesson } from '../types/frontendClass';

export const BOOTSTRAP_LESSONS_PART1: FrontendLesson[] = [
  // MODULE 1 — Introduction & Setup
  {
    id: 'bs-m1-l1',
    slug: 'what-is-bootstrap-component-framework',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: {
      en: '1.1 What Bootstrap is & Component Framework Philosophy',
      km: '១.១ ការណែនាំអំពី Bootstrap 5 និងទស្សនវិជ្ជា Component Framework'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Bootstrap 5 is a powerful component-based CSS framework equipped with pre-built responsive components (navbars, cards, modals, buttons, forms) and a 12-column flexbox grid system.',
      km: 'Bootstrap 5 គឺជា Component-Based CSS Framework ដ៏ពេញនិយមបំផុត ដែលមានសមាសភាគរចនាស្រាប់ៗ (Navbars, Cards, Modals, Buttons) និងប្រព័ន្ធ 12-Column Grid ជួយបង្កើត UI បានលឿនបំផុត។'
    },
    tutorial: {
      en: 'Unlike Tailwind CSS which relies on utility classes, Bootstrap provides ready-made pre-styled UI components. You simply apply component classes like `btn btn-primary` or `card` to immediately get production-grade UI elements.',
      km: 'ខុសពី Tailwind CSS ដែលប្រើប្រាស់ Utility Classes សម្រាប់រៀបចំស្ទីលពីបាតដៃ Bootstrap ផ្តល់ជូន Pre-built Components ដែលមានស្ទីលស្រាប់។ អ្នកគ្រាន់តែដាក់ Class ដូចជា `btn btn-primary` ឬ `card` នោះស្ទីលនឹងលេចឡើងភ្លាមៗ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4 font-sans">
  <div class="container py-4">
    <div class="p-5 bg-white rounded-4 shadow-sm border text-center">
      <span class="badge bg-primary text-white mb-2 px-3 py-2 rounded-pill">Bootstrap 5</span>
      <h1 class="display-6 fw-bold text-dark mb-3">ស្វាគមន៍មកកាន់ Bootstrap 5</h1>
      <p class="lead text-secondary mb-4">
        បង្កើតគេហទំព័រ Responsive យ៉ាងរហ័សជាមួយ Pre-built Components ស្អាតៗ។
      </p>
      <button class="btn btn-primary btn-lg px-4 rounded-3 shadow-sm">ចាប់ផ្តើមរៀនឥឡូវនេះ</button>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Rapid Client Landing Pages', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Bootstrap is ideal for rapid prototyping, client administration panels, and marketing landing pages where consistent component design and speed of assembly are critical.',
        km: 'Bootstrap ត្រូវបានប្រើប្រាស់យ៉ាងច្រើនក្នុងការបង្កើត Admin Dashboards, Client Prototypes និងគេហទំព័រអាជីវកម្ម ដោយសារវាមាន Component ស្រាប់ៗត្រឹមត្រូវតាមស្តង់ដារ UI/UX។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Add a secondary button with class "btn btn-outline-secondary" next to the primary button.',
        km: 'បន្ថែមប៊ូតុងបន្ទាប់បន្សំដែលមាន class "btn btn-outline-secondary" នៅជិតប៊ូតុង Primary។'
      },
      hints: [
        { en: 'Use <button class="btn btn-outline-secondary">Details</button>', km: 'ប្រើ <button class="btn btn-outline-secondary">ព័ត៌មានលម្អិត</button>' }
      ],
      solution: '<button class="btn btn-outline-secondary btn-lg ms-2">ព័ត៌មានលម្អិត</button>'
    },
    quizQuestions: [
      {
        id: 'q-bs-1-1',
        question: {
          en: 'What is the key structural difference between Bootstrap and Tailwind CSS?',
          km: 'តើអ្វីជាភាពខុសគ្នាសំខាន់រវាង Bootstrap និង Tailwind CSS?'
        },
        options: [
          { id: '1', text: { en: 'Bootstrap provides pre-built styled components, whereas Tailwind provides utility classes.', km: 'Bootstrap ផ្តល់ Pre-built Components ស្រាប់ៗ ខណៈ Tailwind ផ្តល់ Utility classes។' }, isCorrect: true },
          { id: '2', text: { en: 'Bootstrap only works with React and Node.js.', km: 'Bootstrap ដើរតែជាមួយ React និង Node.js ប៉ុណ្ណោះ។' }, isCorrect: false },
          { id: '3', text: { en: 'Tailwind provides pre-built buttons and modals by default.', km: 'Tailwind ផ្តល់ buttons និង modals ស្រាប់ៗតាម Default។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Bootstrap is component-first (pre-styled cards, modals, buttons), while Tailwind is utility-first.',
          km: 'Bootstrap ផ្ោតលើ Component រួចស្រាប់ ចំអែក Tailwind ផ្អែកលើ Utility classes។'
        }
      }
    ]
  },
  {
    id: 'bs-m1-l2',
    slug: 'cdn-vs-npm-installation',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: {
      en: '1.2 CDN Setup vs. NPM Installation',
      km: '១.២ ការភ្ជាប់ Bootstrap តាម CDN និងការដំឡើងតាម NPM'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Bootstrap can be included instantly via a `<link>` stylesheet and `<script>` bundle CDN in HTML, or compiled into modern JavaScript bundlers (Vite, Webpack, React) via NPM.',
      km: 'យើងអាចភ្ជាប់ Bootstrap ចូលទៅក្នុង HTML បានភ្លាមៗតាមរយៈ CDN Links (CSS + JS Bundle) ឬដំឡើងតាមរយៈ NPM Package (`npm i bootstrap`) សម្រាប់ React/Vite/Vue Projects។'
    },
    tutorial: {
      en: 'Always place the Bootstrap CSS `<link>` inside the `<head>` tag, and place the Bootstrap JavaScript bundle `<script>` right before the closing `</body>` tag so interactive components like Modals, Dropdowns, and Navbars function correctly.',
      km: 'ត្រូវដាក់ `<link>` របស់ Bootstrap CSS ក្នុង `<head>` ហើយដាក់ `<script>` bundle របស់ Bootstrap JS នៅខាងចុង `</body>` ដើមបីឲ្យ Modals, Dropdowns, និង Navbars ដំណើការ Interactive។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CDN Bootstrap Setup</title>
  <!-- 1. Bootstrap 5 CSS CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark text-white p-4">
  <div class="container text-center py-5">
    <div class="alert alert-info shadow">
      <strong>CDN Connected!</strong> Bootstrap 5 CSS and JS are loaded successfully.
    </div>
    
    <!-- Dropdown requiring Bootstrap JS Bundle -->
    <div class="dropdown mt-3">
      <button class="btn btn-warning dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown">
        Select Category
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Frontend Web</a></li>
        <li><a class="dropdown-item" href="#">Backend Node.js</a></li>
        <li><a class="dropdown-item" href="#">UI/UX Design</a></li>
      </ul>
    </div>
  </div>

  <!-- 2. Bootstrap 5 JS Bundle CDN (Includes Popper) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Quick Prototyping vs Production Builds', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Use CDN for single-page marketing sites or quick codepens. Use NPM (`npm install bootstrap @popperjs/core`) when building full-stack Web Apps to leverage Sass variables and tree-shaking.',
        km: 'CDN គឺល្អឥតខ្ចោះសម្រាប់ការធ្វើ Testing និងគេហទំព័រទោល ចំណែក NPM គឺល្អសម្រាប់ App ធំៗដែលត្រូវ Compile ជាមួយ React ឬ Vite។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What bundle script is included in Bootstrap 5 that provides position math for tooltips and dropdowns?',
        km: 'តើ Script មួយណាដែលមានក្នុង Bootstrap 5 JS bundle សម្រាប់គណនាទីតាំង Tooltips និង Dropdowns?'
      },
      hints: [
        { en: 'Popper.js is bundled inside bootstrap.bundle.min.js', km: 'Popper.js មានស្រាប់ក្នុង bootstrap.bundle.min.js' }
      ],
      solution: 'bootstrap.bundle.min.js (Popper.js)'
    },
    quizQuestions: [
      {
        id: 'q-bs-1-2',
        question: {
          en: 'Where should the Bootstrap JS bundle script tag be placed in an HTML document?',
          km: 'តើគួរដាក់ `<script>` របស់ Bootstrap JS ត្រង់ណា ក្នុង HTML document?'
        },
        options: [
          { id: '1', text: { en: 'Just before the closing </body> tag', km: 'នៅខាងចុងគេ មុនពេលបិទ </body>' }, isCorrect: true },
          { id: '2', text: { en: 'Inside the <title> tag', km: 'ខាងក្នុង <title>' }, isCorrect: false },
          { id: '3', text: { en: 'Outside the <html> tag', km: 'ខាងក្រៅ <html>' }, isCorrect: false }
        ],
        explanation: {
          en: 'Placing JS scripts at the end of `<body>` ensures DOM content loads before script execution.',
          km: 'ការដាក់ Script នៅចុង Body ជួយឲ្យ HTML elements Load ចប់សិនមុនពេល Script ដើរ។'
        }
      }
    ]
  },
  {
    id: 'bs-m1-l3',
    slug: 'bootstrap-5-vs-bootstrap-4',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: {
      en: '1.3 Bootstrap 5 vs. Bootstrap 4 Changes',
      km: '១.៣ ការផ្លាស់ប្តូរសំខាន់ៗរវាង Bootstrap 5 និង Bootstrap 4'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Bootstrap 5 completely eliminated jQuery dependency in favor of pure Vanilla JavaScript, added RTL support, dropped IE11 support, introduced new utility APIs, and added the `xxl` breakpoint.',
      km: 'Bootstrap 5 បានលុបចោល jQuery ចោលទាំងស្រុង ដោយជំនួសមកវិញនូវ Vanilla JavaScript សុទ្ធ ដែលធ្វើឲ្យដើរលឿន ស្រាល និងបន្ថែម `xxl` breakpoint (>= 1400px)។'
    },
    tutorial: {
      en: 'Key class renames in v5: `left`/`right` properties were updated to RTL-friendly logical properties: `ms-*` (margin-start), `me-*` (margin-end), `ps-*` (padding-start), `pe-*` (padding-end), and `float-start`/`float-end`.',
      km: 'ឈ្មោះ Class ត្រូវបានដូរក្នុង v5៖ លុបលែងប្រើ `ml-*` និង `mr-*` ហើយជំនួសដោយ `ms-*` (margin-start) និង `me-*` (margin-end) ដើមបីទ្រទ្រង់ RTL Layout។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4">
  <div class="container py-3">
    <div class="card shadow-sm border-0 rounded-4 p-4">
      <h3 class="fw-bold text-success mb-3">Bootstrap 5 Features</h3>
      <p class="text-secondary">
        គំរូ Spacing Utilities ថ្មីក្នុង Bootstrap 5៖
      </p>
      
      <!-- Using BS5 ms-* and me-* margin start/end -->
      <div class="p-3 bg-dark text-white rounded-3 d-flex items-center justify-content-between">
        <span class="ms-2">Margin Start (ms-2)</span>
        <span class="badge bg-danger me-2">Margin End (me-2)</span>
      </div>

      <div class="mt-3 text-muted text-xs">
        ✅ គ្មាន dependency លើ jQuery ទៀតទេ (Pure JS) <br>
        ✅ មាន XXL Breakpoint (>= 1400px)
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Upgrading Legacy Apps', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'When refactoring older Bootstrap 4 codebases, updating class names like `mr-3` -> `me-3` and removing `$(...).modal()` jQuery code ensures modern browser compatibility and fast load speeds.',
        km: 'ពេល Update កូដចាស់ពី BS4 ទៅ BS5 ត្រូវប្តូរឈ្មោះ class Spacing ពី `mr-` ទៅ `me-` និងលុប jQuery ចោល។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What class replaced "mr-auto" in Bootstrap 5 to push elements to the right?',
        km: 'តើ Class មួយណាជំនួស "mr-auto" ក្នុង Bootstrap 5 ដើមបីរុញ Element ទៅស្តាំ?'
      },
      hints: [
        { en: 'Use me-auto (margin-end: auto)', km: 'ប្រើ me-auto (margin-end auto)' }
      ],
      solution: 'me-auto'
    },
    quizQuestions: [
      {
        id: 'q-bs-1-3',
        question: {
          en: 'Does Bootstrap 5 require jQuery to function?',
          km: 'តើ Bootstrap 5 តម្រូវឲ្យមាន Library jQuery ទៀតដែរឬទេ?'
        },
        options: [
          { id: '1', text: { en: 'No, Bootstrap 5 relies purely on modern Vanilla JS.', km: 'ទេ, Bootstrap 5 ប្រើប្រាស់ Vanilla JS សុទ្ធ។' }, isCorrect: true },
          { id: '2', text: { en: 'Yes, jQuery is required for all components.', km: 'បាទ/ចាស, ត្រូវតែមាន jQuery ជានិច្ច។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Bootstrap 5 completely dropped jQuery, improving performance and bundling sizes.',
          km: 'Bootstrap 5 បានបោះបង់ jQuery ចោល ធ្វើឲ្យ App ដើរលឿន និងស្រាល។'
        }
      }
    ]
  },

  // MODULE 2 — The Grid System
  {
    id: 'bs-m2-l1',
    slug: 'bootstrap-containers',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: {
      en: '2.1 Containers (`container` vs `container-fluid`)',
      km: '២.១ ការប្រើប្រាស់ Containers (`container` និង `container-fluid`)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Containers are the fundamental building blocks of Bootstrap layouts that pad, center, and align content within given device viewports.',
      km: 'Containers គឺជាគ្រឹះចម្បងក្នុងរៀបចំ Layout របស់ Bootstrap សម្រាប់កៀបខ្លឹមសារឲ្យនៅចំកណ្តាលអេក្រង់ ឬពង្រីកពេញ 100% នៃ Viewport។'
    },
    tutorial: {
      en: 'Use `.container` for a responsive fixed-width layout (adjusting maximum width at each breakpoint) or `.container-fluid` for a full 100% width canvas across all screen sizes.',
      km: 'ប្រើ `.container` ដើមបីទទួលបានប្រអប់ដែលមាន Max-width ស្វ័យប្រវត្តិ centerline ឬ `.container-fluid` ដើមបីទទួលបានទំហំពេញអេក្រង់ 100% ជានិច្ច។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark text-white p-3">

  <!-- Fixed Responsive Container -->
  <div class="container bg-primary text-white p-4 mb-4 rounded-3 text-center shadow">
    <h4 class="fw-bold">Standard .container</h4>
    <p class="mb-0 text-white-50">មាន Max-width ស្វ័យប្រវត្តិ និងនៅចំកណ្តាលអេក្រង់។</p>
  </div>

  <!-- Full-Width Fluid Container -->
  <div class="container-fluid bg-indigo bg-gradient text-white p-4 rounded-3 text-center border border-indigo-400">
    <h4 class="fw-bold">Full-Width .container-fluid</h4>
    <p class="mb-0 text-white-50">ពង្រីកទំហំពេញ 100% នៃអេក្រង់គ្រប់ពេលវេលា។</p>
  </div>

</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Header Navbars and Hero Sections', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Full-width background sections typically use `.container-fluid` for full-bleed colors, while wrapping inner headers in `.container` to keep text aligned with page content.',
        km: 'គេហទំព័រអាជីវកម្មភាគច្រើនប្រើ `.container-fluid` លើ background ដើមបីលាតពណ៌ពេញអេក្រង់ និងប្រើ `.container` ខាងក្នុង ដើមបីតម្រឹមអត្ថបទឲ្យសមរម្យ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which container class keeps 100% width until reaching the medium breakpoint (768px)?',
        km: 'តើ Class Container មួយណាដែលមានទំហំ 100% រហូតដល់អេក្រង់ទំហំ Medium (768px)?'
      },
      hints: [
        { en: 'Breakpoint container format: container-{breakpoint}', km: 'ទម្រង់ breakpoint container៖ container-md' }
      ],
      solution: 'container-md'
    },
    quizQuestions: [
      {
        id: 'q-bs-2-1',
        question: {
          en: 'What width does `.container-fluid` take across viewports?',
          km: 'តើ `.container-fluid` យកប្រវែងទទឹងប៉ុន្មានភាគរយលើអេក្រង់?'
        },
        options: [
          { id: '1', text: { en: '100% width across all viewport sizes', km: '100% ទទឹងពេញលើគ្រប់ទំហំអេក្រង់' }, isCorrect: true },
          { id: '2', text: { en: 'Fixed 960px width on desktop', km: 'ថេរ 960px លើ Desktop' }, isCorrect: false }
        ],
        explanation: {
          en: '`container-fluid` spans 100% width continuously across all screen breakpoints.',
          km: '`container-fluid` ពង្រីកទំហំពេញ 100% ជានិច្ច។'
        }
      }
    ]
  },
  {
    id: 'bs-m2-l2',
    slug: 'bootstrap-rows-and-columns',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: {
      en: '2.2 Rows & 12-Column Layout (`row`, `col`, `col-md-6`)',
      km: '២.២ ប្រព័ន្ធ Rows និង 12-Column (`row`, `col`, `col-md-6`)'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Bootstrap divides page layouts into 12 grid columns per row. Columns must be placed inside `.row` elements inside a container.',
      km: 'Bootstrap ចែករចនាសម្ព័ន្ធទំព័រជា 12 Columns ក្នុងមួយ Row។ គ្រប់ Column ទាំងអស់ត្រូវតែស្ថិតនៅខាងក្នុង Element ដែលមាន Class `.row`។'
    },
    tutorial: {
      en: 'Classes like `.col-6` take half the width (6/12), `.col-4` take one-third (4/12), and `.col-12` span the full row width (12/12). If sum of columns exceeds 12, extra columns wrap automatically.',
      km: '`.col-6` យកកន្លះ Row (6/12) `.col-4` យកមួយភាគបី (4/12) ហើយ `.col-12` យកពេញ Row (12/12)។ ប្រសិនបើសរុបលើស 12 វាផ្លោះទៅជួរថ្មីស្វ័យប្រវត្តិ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4">
  <div class="container">
    <h3 class="fw-bold mb-4 text-center">Bootstrap 12-Column Grid System</h3>
    
    <!-- Row 1: Equal width columns -->
    <div class="row g-3 mb-4">
      <div class="col bg-primary text-white p-3 rounded-3 text-center font-bold">Col 1 (Auto)</div>
      <div class="col bg-primary text-white p-3 rounded-3 text-center font-bold">Col 2 (Auto)</div>
      <div class="col bg-primary text-white p-3 rounded-3 text-center font-bold">Col 3 (Auto)</div>
    </div>

    <!-- Row 2: Specific column spans (4 + 8 = 12) -->
    <div class="row g-3">
      <div class="col-md-4 bg-dark text-white p-3 rounded-3 text-center">
        col-md-4 (4/12 = 33%)
      </div>
      <div class="col-md-8 bg-success text-white p-3 rounded-3 text-center">
        col-md-8 (8/12 = 66%)
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Sidebar & Main Content Layout', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'A standard dashboard layout uses `col-md-3` for the left navigation sidebar and `col-md-9` for the main content area.',
        km: 'ទំព័រ Dashboard ភាគច្រើនប្រើ `col-md-3` សម្រាប់ Sidebar ខាងឆ្វេង និង `col-md-9` សម្រាប់ផ្ទាំងទិន្នន័យចម្បង។'
      }
    },
    practiceExercise: {
      question: {
        en: 'How many equal columns will be created if you place 4 divs with class "col" inside a row?',
        km: 'តើមានប៉ុន្មានជួរឈរស្មើគ្នា ពេលអ្នកដាក់ 4 divs ដែលមាន class "col" ក្នុងមួយ row?'
      },
      hints: [
        { en: 'Class "col" automatically divides 12 columns equally.', km: 'Class "col" ចែកទំហំស្មើគ្នាស្វ័យប្រវត្តិ។' }
      ],
      solution: '4 equal columns (3/12 each)'
    },
    quizQuestions: [
      {
        id: 'q-bs-2-2',
        question: {
          en: 'How many total column units are available per row in Bootstrap grid system?',
          km: 'តើប្រព័ន្ធ Grid របស់ Bootstrap ចែកទំព័រជាប៉ុន្មាន Columns ក្នុងមួយ Row?'
        },
        options: [
          { id: '1', text: { en: '12 Columns', km: '12 Columns' }, isCorrect: true },
          { id: '2', text: { en: '10 Columns', km: '10 Columns' }, isCorrect: false },
          { id: '3', text: { en: '16 Columns', km: '16 Columns' }, isCorrect: false }
        ],
        explanation: {
          en: 'Bootstrap grid system is based on 12 flexible flexbox columns.',
          km: 'ប្រព័ន្ធ Grid របស់ Bootstrap ផ្អែកលើ 12 Columns។'
        }
      }
    ]
  },
  {
    id: 'bs-m2-l3',
    slug: 'bootstrap-responsive-breakpoints',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: {
      en: '2.3 Grid Breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`)',
      km: '២.៣ Responsive Breakpoints ក្នុង Grid (`sm`, `md`, `lg`, `xl`, `xxl`)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Bootstrap uses mobile-first media query breakpoints: `sm` (>=576px), `md` (>=768px), `lg` (>=992px), `xl` (>=1200px), and `xxl` (>=1400px).',
      km: 'Bootstrap គិតពី Mobile ជាចម្បង (Mobile-first) ដោយប្រើ Breakpoints៖ `sm` (576px), `md` (768px), `lg` (992px), `xl` (1200px) និង `xxl` (1400px)។'
    },
    tutorial: {
      en: 'Classes without prefixes (e.g. `col-12`) apply to small mobile viewports. Adding `col-md-6 col-lg-3` transforms the element from full-width on mobile to 2 columns on tablets and 4 columns on large desktop screens.',
      km: 'Class គ្មាន Prefix ដូចជា `col-12` ដើរលើ Mobile។ ពេលបន្ថែម `col-md-6 col-lg-3` វានឹងរៀបចំជា 1 ជួរលើទូរស័ព្ទ 2 ជួរលើ Tablet និង 4 ជួរលើ Desktop។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark text-white p-4">
  <div class="container">
    <h3 class="fw-bold mb-3 text-warning">Responsive Grid Card Layout</h3>
    <p class="text-secondary mb-4">ប្តូរទំហំ Preview ដើមបីមើលការប្រែប្រួលពី 1 ជួរ -> 2 ជួរ -> 4 ជួរ!</p>

    <div class="row g-3">
      <!-- 1 column on Mobile, 2 on Tablet (md), 4 on Desktop (lg) -->
      <div class="col-12 col-md-6 col-lg-3">
        <div class="p-4 bg-secondary bg-gradient rounded-3 text-center border border-light">
          <h5 class="fw-bold">Card 1</h5>
          <span class="badge bg-primary">Responsive</span>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="p-4 bg-secondary bg-gradient rounded-3 text-center border border-light">
          <h5 class="fw-bold">Card 2</h5>
          <span class="badge bg-success">Responsive</span>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="p-4 bg-secondary bg-gradient rounded-3 text-center border border-light">
          <h5 class="fw-bold">Card 3</h5>
          <span class="badge bg-warning text-dark">Responsive</span>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="p-4 bg-secondary bg-gradient rounded-3 text-center border border-light">
          <h5 class="fw-bold">Card 4</h5>
          <span class="badge bg-info text-dark">Responsive</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'E-commerce Product Catalogs', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Product grids use `col-6 col-md-4 col-lg-3` so mobile shoppers see 2 products per row, tablet users see 3, and desktop users see 4.',
        km: 'គេហទំព័រលក់ទំនិញ e-Commerce ប្រើប្រាស់រូបមន្តនេះ ដើមបីបង្ហាញទំនិញ 2 លើទូរស័ព្ទ 3 លើ Tablet និង 4 លើ Desktop។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What minimum screen width triggers the Bootstrap "lg" breakpoint?',
        km: 'តើប្រវែងទទឹងអេក្រង់អប្បបរមាស្មើនឹងប៉ុន្មាន ដែលចាប់ផ្តើមដំណើការ "lg" breakpoint ក្នុង Bootstrap?'
      },
      hints: [
        { en: 'sm >= 576, md >= 768, lg >= 992px', km: 'sm >= 576, md >= 768, lg >= 992px' }
      ],
      solution: '992px'
    },
    quizQuestions: [
      {
        id: 'q-bs-2-3',
        question: {
          en: 'Which breakpoint prefix corresponds to tablet screens 768px and wider?',
          km: 'តើ Prefix មួយណាសម្រាប់តម្រៀប Style លើអេក្រង់ Tablet ចាប់ពី 768px ឡើងទៅ?'
        },
        options: [
          { id: '1', text: { en: 'md:', km: 'md' }, isCorrect: true },
          { id: '2', text: { en: 'sm:', km: 'sm' }, isCorrect: false },
          { id: '3', text: { en: 'lg:', km: 'lg' }, isCorrect: false }
        ],
        explanation: {
          en: '`md` breakpoint targets min-width: 768px (typical tablet layout).',
          km: '`md` ប្រើសម្រាប់ទំហំអេក្រង់ចាប់ពី 768px ឡើងទៅ។'
        }
      }
    ]
  },

  // MODULE 3 — Typography & Colors
  {
    id: 'bs-m3-l1',
    slug: 'bootstrap-typography-headings',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: {
      en: '3.1 Heading & Typography Utilities (`display-*`, `lead`, `text-center`)',
      km: '៣.១ ឧបករណ៍ Heading និង Typography Utilities (`display-*`, `lead`)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Bootstrap provides typography utilities for hero display headings (`.display-1` through `.display-6`), lead paragraphs (`.lead`), text alignment, font weights, and text transforms.',
      km: 'Bootstrap ផ្តល់ Utilities សម្រាប់រៀបចំអក្សរ ដូចជា Display Headings ធំៗ (`.display-1` ដល់ `.display-6`), `.lead` សម្រាប់កថាខណ្ឌសំខាន់ និងការតម្រឹមអក្សរ។'
    },
    tutorial: {
      en: 'Combine `.display-4` for high-impact titles, `.lead` for subheaders, `.fw-bold` for bold font weight, and `.text-center` or `.text-uppercase` to format readable UI typography.',
      km: 'រួមបញ្ចូល `.display-4` សម្រាប់ចំណងជើងធំៗ, `.lead` សម្រាប់អត្ថបទណែនាំ, `.fw-bold` សម្រាប់អក្សរដិត និង `.text-center` ដើមបីតម្រឹមអក្សរចំកណ្តាល។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4">
  <div class="container bg-white p-5 rounded-4 shadow-sm text-center">
    <!-- Hero Display Title -->
    <h1 class="display-3 fw-bold text-primary mb-2">Display Title</h1>
    <p class="lead text-secondary mb-4">
      នេះជាកថាខណ្ឌសំខាន់ (Lead Paragraph) ដែលមានទំហំធំល្មមអានស្រួល។
    </p>

    <hr class="my-4">

    <!-- Formatting Utilities -->
    <div class="row text-start g-3">
      <div class="col-md-6">
        <p class="fw-bold text-dark">.fw-bold: អក្សរដិតច្បាស់</p>
        <p class="fst-italic text-muted">.fst-italic: អក្សរទ្រេត</p>
      </div>
      <div class="col-md-6">
        <p class="text-uppercase text-danger fw-semibold">.text-uppercase</p>
        <p class="text-decoration-underline text-info">.text-decoration-underline</p>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Hero Banner Typography', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Landing page hero section headers combine `display-4 fw-black` with a `lead` paragraph to guide user focus cleanly without custom font-size CSS rules.',
        km: 'ផ្នែកខាងលើនៃ Hero Banner តែងតែប្រើប្រាស់ `display-4` និង `lead` ដើមបីទាក់ទាញទស្សនិកជនដោយមិនបាច់សរសេរ CSS បន្ថែម។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which class transforms text into uppercase style in Bootstrap?',
        km: 'តើ Class មួយណាផ្លាស់ប្តូរអក្សរឲ្យទៅជាអក្សរធំ (Uppercase) ក្នុង Bootstrap?'
      },
      hints: [
        { en: 'Class format: text-uppercase', km: 'ទម្រង់ class៖ text-uppercase' }
      ],
      solution: 'text-uppercase'
    },
    quizQuestions: [
      {
        id: 'q-bs-3-1',
        question: {
          en: 'Which utility class produces the largest hero headline style?',
          km: 'តើ Utility class មួយណាដែលបង្កើត Headline ទំហំធំបំផុត?'
        },
        options: [
          { id: '1', text: { en: '.display-1', km: '.display-1' }, isCorrect: true },
          { id: '2', text: { en: '.display-6', km: '.display-6' }, isCorrect: false },
          { id: '3', text: { en: '.h1-huge', km: '.h1-huge' }, isCorrect: false }
        ],
        explanation: {
          en: '`.display-1` is the largest display heading size in Bootstrap 5 scale.',
          km: '`.display-1` ជាទំហំ Heading ធំបំផុតក្នុង Bootstrap។'
        }
      }
    ]
  },
  {
    id: 'bs-m3-l2',
    slug: 'bootstrap-colors-and-backgrounds',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: {
      en: '3.2 Text Color & Background Utilities (`text-primary`, `bg-dark`)',
      km: '៣.២ ពណ៌អត្ថបទ និងពណ៌ផ្ទៃខាងក្រោយ (`text-primary`, `bg-dark`)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Bootstrap provides a theme palette of contextual colors: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, and `body`.',
      km: 'Bootstrap ផ្តល់កាតាលុកពណ៌ Theme ប្រព័ន្ធដូចជា៖ `primary` (ខៀវ), `success` (បៃតង), `danger` (ក្រហម), `warning` (លឿង), `info` (ខៀវខ្ចី), និង `dark` (ខ្មៅ)។'
    },
    tutorial: {
      en: 'Prefix colors with `text-*` for typography (e.g. `text-success`) or `bg-*` for backgrounds (e.g. `bg-danger`). In BS5, you can also use gradients via `bg-gradient` or opacity modifiers like `bg-opacity-50`.',
      km: 'ប្រើ `text-*` សម្រាប់ពណ៌អក្សរ និង `bg-*` សម្រាប់ពណ៌ Background។ ក្នុង BS5 អ្នកអាចបន្ថែម `bg-gradient` ឬ `bg-opacity-50` ដើមបីទទួលបានស្ទីលស្អាតប្លែក។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark p-4">
  <div class="container">
    <h3 class="text-white fw-bold mb-4">Bootstrap 5 Theme Palette</h3>

    <div class="row g-3">
      <div class="col-md-4">
        <div class="p-3 bg-primary bg-gradient text-white rounded-3 shadow text-center font-bold">
          .bg-primary
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 bg-success bg-gradient text-white rounded-3 shadow text-center font-bold">
          .bg-success
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 bg-danger bg-gradient text-white rounded-3 shadow text-center font-bold">
          .bg-danger
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 bg-warning bg-gradient text-dark rounded-3 shadow text-center font-bold">
          .bg-warning
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 bg-info bg-gradient text-dark rounded-3 shadow text-center font-bold">
          .bg-info
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 bg-secondary bg-opacity-25 border border-secondary text-white rounded-3 text-center">
          .bg-opacity-25
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Contextual Status Alerts & Badges', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'E-commerce and admin tools use `text-success` for paid invoices, `text-danger` for overdue bills, and `text-warning` for pending actions.',
        km: 'ប្រព័ន្ធគ្រប់គ្រងទិន្នន័យ ប្រើ `text-success` សម្រាប់បង់ប្រាក់រួច `text-danger` សម្រាប់ហួសកំណត់ និង `text-warning` សម្រាប់រង់ចាំ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which class sets a dark background with white text on an element?',
        km: 'តើ Class មួយណាដែលកំណត់ Background ពណ៌ខ្មៅ និងអក្សរពណ៌ស?'
      },
      hints: [
        { en: 'Combine bg-dark and text-white', km: 'រួមបញ្ចូល bg-dark និង text-white' }
      ],
      solution: 'bg-dark text-white'
    },
    quizQuestions: [
      {
        id: 'q-bs-3-2',
        question: {
          en: 'Which contextual class represents green brand state for success operations in Bootstrap?',
          km: 'តើ Class ពណ៌មួយណាដែលតំណាងឲ្យស្ថានភាពជោគជ័យ (ពណ៌បៃតង) ក្នុង Bootstrap?'
        },
        options: [
          { id: '1', text: { en: 'success', km: 'success' }, isCorrect: true },
          { id: '2', text: { en: 'primary', km: 'primary' }, isCorrect: false },
          { id: '3', text: { en: 'info', km: 'info' }, isCorrect: false }
        ],
        explanation: {
          en: 'The `success` theme variant maps to green across buttons, alerts, badges, and text.',
          km: '`success` ផ្តល់ពណ៌បៃតងលើ Buttons, Alerts និង Badges។'
        }
      }
    ]
  },
  {
    id: 'bs-m3-l3',
    slug: 'bootstrap-spacing-utilities',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: {
      en: '3.3 Spacing Utilities (`m-*`, `p-*`, `mt-3`, `px-4`)',
      km: '៣.៣ ឧបករណ៍ Spacing Utilities (`m-*`, `p-*`, `mt-3`, `px-4`)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Bootstrap provides shorthand margin and padding utilities from size `0` through `5` (where `3` equals 1rem/16px, `4` equals 1.5rem/24px, and `5` equals 3rem/48px).',
      km: 'Bootstrap ផ្តល់ Shorthand Spacing ពី `0` ដល់ `5` (ដែល `1`=0.25rem, `3`=1rem/16px, `4`=1.5rem/24px, និង `5`=3rem/48px)។'
    },
    tutorial: {
      en: 'Format: `{property}{side}-{size}`. Properties: `m` (margin) or `p` (padding). Sides: `t` (top), `b` (bottom), `s` (start/left), `e` (end/right), `x` (left+right), `y` (top+bottom), or blank for all 4 sides.',
      km: 'ទម្រង់៖ `{property}{side}-{size}`។ Properties៖ `m` (margin), `p` (padding)។ Sides៖ `t` (top), `b` (bottom), `s` (start), `e` (end), `x` (x-axis), `y` (y-axis)។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4 font-sans">
  <div class="container">
    <h3 class="fw-bold text-dark mb-4">Bootstrap Spacing Utilities Scale</h3>

    <!-- Card with px-4 py-3 (padding x and y) -->
    <div class="bg-white border rounded-3 px-4 py-3 mb-4 shadow-sm">
      <h5 class="fw-bold text-primary mb-1">.px-4 .py-3 Card</h5>
      <p class="text-secondary mb-0">Padding X = 1.5rem (24px) | Padding Y = 1rem (16px)</p>
    </div>

    <!-- Card with mt-4 ms-auto gap spacing -->
    <div class="bg-dark text-white p-4 rounded-3 shadow">
      <h5 class="fw-bold mb-2">Flexbox with Gap</h5>
      <div class="d-flex gap-3">
        <button class="btn btn-primary px-4 py-2">Button 1</button>
        <button class="btn btn-outline-light px-4 py-2">Button 2</button>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Consistent Visual Rhythm', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Using standard spacing steps (`p-3`, `mb-4`, `gap-3`) ensures uniform margins and padding across all pages without custom CSS pixel values.',
        km: 'ការប្រើប្រាស់ Scale ស្ដង់ដារ (`p-3`, `mb-4`) ជួយឲ្យចន្លោះឃ្លាតលើគ្រប់ទំព័រមានភាពស្មើគ្នា និងស្រស់ស្អាត។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What exact rem value corresponds to Bootstrap spacing step 4?',
        km: 'តើតម្លៃ rem ប៉ុន្មានដែលត្រូវគ្នានឹង Spacing step 4 ក្នុង Bootstrap?'
      },
      hints: [
        { en: '0=0, 1=0.25rem, 2=0.5rem, 3=1rem, 4=1.5rem, 5=3rem', km: '3=1rem (16px), 4=1.5rem (24px)' }
      ],
      solution: '1.5rem (24px)'
    },
    quizQuestions: [
      {
        id: 'q-bs-3-3',
        question: {
          en: 'Which class applies padding only to the top and bottom of an element?',
          km: 'តើ Class មួយណាដែលបន្ថែម Padding តែលើផ្នែកខាងលើ និងខាងក្រោម (Y-axis)?'
        },
        options: [
          { id: '1', text: { en: '.py-*', km: '.py-*' }, isCorrect: true },
          { id: '2', text: { en: '.px-*', km: '.px-*' }, isCorrect: false },
          { id: '3', text: { en: '.pt-*', km: '.pt-*' }, isCorrect: false }
        ],
        explanation: {
          en: '`py-*` applies padding on top and bottom simultaneously.',
          km: '`py-*` បន្ថែម Padding លើ Y-axis (Top + Bottom)។'
        }
      }
    ]
  },

  // MODULE 4 — Buttons & Forms
  {
    id: 'bs-m4-l1',
    slug: 'bootstrap-buttons-and-variants',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: {
      en: '4.1 Buttons & Button Variants (`btn`, `btn-primary`, `btn-outline-*`)',
      km: '៤.១ ស្ទីលប៊ូតុង និងប្រភេទ Variant ផ្សេងៗ (`btn`, `btn-primary`)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Bootstrap provides customizable button components. All buttons require the base `.btn` class combined with a variant class like `.btn-primary` or `.btn-outline-success`.',
      km: 'គ្រប់ Button ទាំងអស់ក្នុង Bootstrap តម្រូវឲ្យមាន Base class `.btn` រួមបញ្ចូលជាមួយ Variant class ដូចជា `.btn-primary` ឬ `.btn-outline-success`។'
    },
    tutorial: {
      en: 'Size buttons with `.btn-lg` or `.btn-sm`. Create hollow buttons with `.btn-outline-*` or pill buttons with `.rounded-pill`. Disable buttons with the `disabled` attribute or `.disabled` class.',
      km: 'កំណត់ទំហំដោយប្រើ `.btn-lg` ឬ `.btn-sm`។ បង្កើតប៊ូតុងមានជើងព្រំដោយប្រើ `.btn-outline-*` ឬប៊ូតុងមូលវែងដោយប្រើ `.rounded-pill`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4 font-sans">
  <div class="container bg-white p-4 rounded-4 shadow-sm space-y-4">
    <h3 class="fw-bold text-dark mb-3">Bootstrap Button Styles</h3>

    <!-- Solid Buttons -->
    <div class="mb-3">
      <h6 class="text-secondary mb-2">1. Solid Variants</h6>
      <button class="btn btn-primary me-2">Primary</button>
      <button class="btn btn-success me-2">Success</button>
      <button class="btn btn-danger me-2">Danger</button>
      <button class="btn btn-dark">Dark</button>
    </div>

    <!-- Outline Buttons -->
    <div class="mb-3">
      <h6 class="text-secondary mb-2">2. Outline Variants</h6>
      <button class="btn btn-outline-primary me-2">Outline Primary</button>
      <button class="btn btn-outline-success me-2">Outline Success</button>
      <button class="btn btn-outline-danger">Outline Danger</button>
    </div>

    <!-- Sizes & Pill Buttons -->
    <div>
      <h6 class="text-secondary mb-2">3. Sizes & Rounded Pills</h6>
      <button class="btn btn-primary btn-lg rounded-pill me-2">Large Pill</button>
      <button class="btn btn-secondary btn-sm rounded-3">Small Button</button>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Call-To-Action (CTA) Forms', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Primary user actions (e.g. "Submit Order") use solid `btn-primary btn-lg`, while secondary actions (e.g. "Cancel") use `btn-outline-secondary`.',
        km: 'ប៊ូតុងចម្បងក្នុង Form ប្រើ `btn-primary` ចំណែកប៊ូតុងលុបចោលប្រើ `btn-outline-secondary` ដើមបីបង្កើត Visual Hierarchy។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What two classes are required to create a large green outline button in Bootstrap?',
        km: 'តើត្រូវប្រើ Class ពីរណាខ្លះ ដើមបីបង្កើត ប៊ូតុង Outline ពណ៌បៃតងទំហំធំ?'
      },
      hints: [
        { en: 'Combine btn, btn-outline-success, and btn-lg', km: 'រួមបញ្ចូល btn, btn-outline-success, និង btn-lg' }
      ],
      solution: 'btn btn-outline-success btn-lg'
    },
    quizQuestions: [
      {
        id: 'q-bs-4-1',
        question: {
          en: 'What base class MUST be added to every HTML button element in Bootstrap?',
          km: 'តើ Base class មួយណាដែលតម្រូវឲ្យដាក់លើគ្រប់ Button ក្នុង Bootstrap?'
        },
        options: [
          { id: '1', text: { en: '.btn', km: '.btn' }, isCorrect: true },
          { id: '2', text: { en: '.button', km: '.button' }, isCorrect: false },
          { id: '3', text: { en: '.bs-btn', km: '.bs-btn' }, isCorrect: false }
        ],
        explanation: {
          en: 'The `.btn` class sets reset styles, padding, font-weight, and transitions.',
          km: '`.btn` កំណត់ស្ទីលគ្រឹះទាំងអស់សម្រាប់ Button។'
        }
      }
    ]
  },
  {
    id: 'bs-m4-l2',
    slug: 'bootstrap-form-controls',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: {
      en: '4.2 Form Controls (`form-control`, `form-label`, `form-select`)',
      km: '៤.២ ឧបករណ៍បញ្ចូលទិន្នន័យ Forms (`form-control`, `form-label`)'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Bootstrap provides custom styled form controls. Text inputs use `.form-control`, select menus use `.form-select`, checkboxes use `.form-check-input`, and labels use `.form-label`.',
      km: 'គ្រប់ Form inputs ក្នុង Bootstrap មានស្ទីលស្រស់ស្អាតដោយប្រើ `.form-control` លើ `<input>`, `.form-label` លើ `<label>`, និង `.form-select` លើ Dropdown menus។'
    },
    tutorial: {
      en: 'Combine inputs with `.floating-label` for modern animated input labels or `.input-group` to append icons and button add-ons directly to inputs.',
      km: 'អ្នកអាចបង្កើត Floating Labels ឬបន្ថែម Icon នៅជាប់ Input ដោយប្រើប្រាស់ Class `.input-group` និង `.input-group-text`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4 font-sans">
  <div class="container max-w-md bg-white p-4 rounded-4 shadow-sm">
    <h4 class="fw-bold text-dark mb-3">ទម្រង់ចុះឈ្មោះ (Registration Form)</h4>

    <form class="space-y-3">
      <!-- Full Name Input -->
      <div class="mb-3">
        <label for="fullName" class="form-label fw-bold">ឈ្មោះពេញ</label>
        <input type="text" id="fullName" class="form-control" placeholder="ឧ. សុខ ជា">
      </div>

      <!-- Course Select -->
      <div class="mb-3">
        <label for="courseSelect" class="form-label fw-bold">ជ្រើសរើសវគ្គសិក្សា</label>
        <select id="courseSelect" class="form-select">
          <option selected>ជ្រើសរើស...</option>
          <option value="bs5">Bootstrap 5 Course</option>
          <option value="react">React Web App</option>
        </select>
      </div>

      <!-- Input Group with Addon -->
      <div class="mb-3">
        <label class="form-label fw-bold">អាសយដ្ឋានអ៊ីមែល</label>
        <div class="input-group">
          <span class="input-group-text">@</span>
          <input type="email" class="form-control" placeholder="username">
          <span class="input-group-text">.com</span>
        </div>
      </div>

      <button type="button" class="btn btn-primary w-100 font-bold py-2">បាញ់បញ្ជូន</button>
    </form>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'User Login & Registration Forms', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Form control styling guarantees cross-browser uniformity so inputs look identical across Safari, Chrome, Edge, and Android browsers.',
        km: 'ការប្រើប្រាស់ `.form-control` ការពារកុំឲ្យ Input មានរូបរាងប្លែកគ្នាតាមប្រភេទ Browser ឬទូរស័ព្ទផ្សេងៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which class should be applied to an HTML <select> element in Bootstrap?',
        km: 'តើ Class មួយណាដែលត្រូវប្រើប្រាស់លើ HTML `<select>` element ក្នុង Bootstrap?'
      },
      hints: [
        { en: 'Class format: form-select', km: 'ទម្រង់ class៖ form-select' }
      ],
      solution: 'form-select'
    },
    quizQuestions: [
      {
        id: 'q-bs-4-2',
        question: {
          en: 'Which class formats standard text inputs in Bootstrap forms?',
          km: 'តើ Class មួយណាសម្រាប់កំណត់ស្ទីលលើ Text Input ធម្មតា?'
        },
        options: [
          { id: '1', text: { en: '.form-control', km: '.form-control' }, isCorrect: true },
          { id: '2', text: { en: '.input-field', km: '.input-field' }, isCorrect: false },
          { id: '3', text: { en: '.form-input', km: '.form-input' }, isCorrect: false }
        ],
        explanation: {
          en: '`.form-control` provides border radius, focus glows, and padding for inputs.',
          km: '`.form-control` ផ្តល់ Padding, Borders និង Focus Glows លើ Input។'
        }
      }
    ]
  },
  {
    id: 'bs-m4-l3',
    slug: 'bootstrap-form-validation',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: {
      en: '4.3 Form Validation States (`is-valid`, `is-invalid`)',
      km: '៤.៣ ការត្រួតពិនិត្យភាពត្រឹមត្រូវទិន្នន័យ Forms (`is-valid`, `is-invalid`)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Bootstrap provides visual validation state classes (`.is-valid` and `.is-invalid`) along with contextual feedback containers (`.valid-feedback` and `.invalid-feedback`).',
      km: 'Bootstrap ផ្តល់ Class បង្ហាញស្ថានភាព Validation (`.is-valid` បៃតង និង `.is-invalid` ក្រហម) ព្រមទាំង Feedback text (`.valid-feedback` និង `.invalid-feedback`)។'
    },
    tutorial: {
      en: 'Apply `.is-invalid` directly to an input element to trigger red borders and alert icons. Immediately follow the input with a `<div class="invalid-feedback">` to display user error messages.',
      km: 'ដាក់ Class `.is-invalid` លើ Input ដើមបីបង្ហាញរង្វង់ក្រហម និង Error Icon ហើយដាក់ `<div class="invalid-feedback">` ខាងក្រោម Input ដើមបីបង្ហាញសារប្រាប់អ្នកប្រើប្រាស់។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4 font-sans">
  <div class="container max-w-md bg-white p-4 rounded-4 shadow-sm">
    <h4 class="fw-bold text-dark mb-3">Form Validation Live Demo</h4>

    <form class="space-y-3">
      <!-- Validated Correct Input -->
      <div class="mb-3">
        <label class="form-label fw-bold">ឈ្មោះអ្នកប្រើប្រាស់ (Username)</label>
        <input type="text" class="form-control is-valid" value="sok_chea_dev">
        <div class="valid-feedback">
          ✅ ឈ្មោះនេះអាចប្រើប្រាស់បាន!
        </div>
      </div>

      <!-- Invalid Error Input -->
      <div class="mb-3">
        <label class="form-label fw-bold">ពាក្យសម្ងាត់ (Password)</label>
        <input type="password" class="form-control is-invalid" value="123">
        <div class="invalid-feedback">
          ❌ ពាក្យសម្ងាត់ត្រូវតែមានយ៉ាងតិច 8 តួអក្សរ!
        </div>
      </div>

      <button type="button" class="btn btn-danger w-100 font-bold">កែប្រែទិន្នន័យ</button>
    </form>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Client-Side Form Validation UI', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Combining Bootstrap validation classes with HTML5 or JavaScript form logic provides instant visual error feedback before sending HTTP requests.',
        km: 'ការប្រើប្រាស់ Validation classes ជួយផ្តល់ព័ត៌មានត្រឡប់ភ្លាមៗទៅកាន់អ្នកប្រើប្រាស់ មុនពេលផ្ញើទិន្នន័យទៅកាន់ Server API។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which class displays green success checkmarks and borders on form inputs in Bootstrap?',
        km: 'តើ Class មួយណាបង្ហាញសញ្ញាគ្រីសបៃតង និង Border បៃតងលើ Input?'
      },
      hints: [
        { en: 'Class format: is-valid', km: 'ទម្រង់ class៖ is-valid' }
      ],
      solution: 'is-valid'
    },
    quizQuestions: [
      {
        id: 'q-bs-4-3',
        question: {
          en: 'Which feedback class container element renders error messages when `.is-invalid` is present on an input?',
          km: 'តើ Class មួយណាសម្រាប់បង្ហាញអត្ថបទសារ Error ពេល Input មាន class `.is-invalid`?'
        },
        options: [
          { id: '1', text: { en: '.invalid-feedback', km: '.invalid-feedback' }, isCorrect: true },
          { id: '2', text: { en: '.error-text', km: '.error-text' }, isCorrect: false },
          { id: '3', text: { en: '.form-error', km: '.form-error' }, isCorrect: false }
        ],
        explanation: {
          en: '`.invalid-feedback` automatically renders in red text when preceded by `.is-invalid`.',
          km: '`.invalid-feedback` បង្ហាញអត្ថបទសារ Error ពណ៌ក្រហមស្វ័យប្រវត្តិ។'
        }
      }
    ]
  },

  // MODULE 5 — Navbar & Navigation
  {
    id: 'bs-m5-l1',
    slug: 'bootstrap-responsive-navbar',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: {
      en: '5.1 Responsive Navbar (`navbar`, `navbar-expand-lg`)',
      km: '៥.១ ការបង្កើតរបារម៉ឺនុយ Responsive (`navbar`, `navbar-expand-lg`)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The Bootstrap Navbar is a responsive navigation header component. `.navbar-expand-lg` keeps items horizontal on desktop screens and collapses them on smaller devices.',
      km: 'Navbar គឺជាសមាសភាគរបារម៉ឺនុយ Responsive។ Class `.navbar-expand-lg` តម្រៀបម៉ឺនុយជាជួរដេកលើ Desktop និងបង្រួមវាលើទូរស័ព្ទដៃ។'
    },
    tutorial: {
      en: 'Wrap branding in `.navbar-brand`, links in `.navbar-nav`, and link items in `.nav-item` / `.nav-link`. Use `.bg-dark navbar-dark` for dark themes or `.bg-light navbar-light` for bright headers.',
      km: 'ដាក់ Logo/Brand ក្នុង `.navbar-brand`, Links ក្នុង `.navbar-nav` និង `.nav-link`។ ប្រើ `.bg-dark navbar-dark` សម្រាប់ Theme ខ្មៅ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

  <!-- Responsive Dark Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold text-warning" href="#">⚡ Bootstrap 5</a>
      
      <div class="navbar-nav flex-row gap-3">
        <a class="nav-link active" href="#">ទំព័រដើម</a>
        <a class="nav-link" href="#">វគ្គសិក្សា</a>
        <a class="nav-link" href="#">អំពីយើង</a>
      </div>
    </div>
  </nav>

  <div class="container py-5 text-center">
    <h2 class="fw-bold">Navbar Structure Demo</h2>
    <p class="text-secondary">របារម៉ឺនុយដែលមាន Logo និង Navigation Links យ៉ាងមានរបៀប។</p>
  </div>

</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Top Application Header Navigation', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Nearly all SaaS platforms and web applications rely on Bootstrap navbar structures for global branding, search bars, and user profile navigation.',
        km: 'ស្ទើរតែគ្រប់ Web Application ទាំងអស់ប្រើប្រាស់ Navbar សម្រាប់ដាក់ Logo, Search Bar, និង Account Profile Menu។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which class ensures a Bootstrap navbar expands horizontally starting at the large (992px) breakpoint?',
        km: 'តើ Class មួយណាធ្វើឲ្យ Navbar ពង្រីកជាជួរដេកចាប់ពីអេក្រង់ Large (992px)?'
      },
      hints: [
        { en: 'Class format: navbar-expand-lg', km: 'ទម្រង់ class៖ navbar-expand-lg' }
      ],
      solution: 'navbar-expand-lg'
    },
    quizQuestions: [
      {
        id: 'q-bs-5-1',
        question: {
          en: 'Which class styles the main logo or brand title inside a Bootstrap navbar?',
          km: 'តើ Class មួយណាសម្រាប់កំណត់ស្ទីលលើ Logo ឬឈ្មោះ Brand ក្នុង Navbar?'
        },
        options: [
          { id: '1', text: { en: '.navbar-brand', km: '.navbar-brand' }, isCorrect: true },
          { id: '2', text: { en: '.brand-logo', km: '.brand-logo' }, isCorrect: false },
          { id: '3', text: { en: '.nav-header', km: '.nav-header' }, isCorrect: false }
        ],
        explanation: {
          en: '`.navbar-brand` formats logo size, font weight, and padding inside navbars.',
          km: '`.navbar-brand` ផ្តល់ស្ទីលស្តង់ដារសម្រាប់ Logo ក្នុង Navbar។'
        }
      }
    ]
  },
  {
    id: 'bs-m5-l2',
    slug: 'bootstrap-navbar-toggler',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: {
      en: '5.2 Mobile Hamburger Toggle (`navbar-toggler` & `collapse`)',
      km: '៥.២ ប៊ូតុង Hamburger Toggle លើទូរស័ព្ទ (`navbar-toggler` និង `collapse`)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'On mobile viewports, navbars collapse content into a hamburger toggle button using `data-bs-toggle="collapse"` and `data-bs-target="#navContent"`.',
      km: 'លើអេក្រង់ទូរស័ព្ទ ម៉ឺនុយនឹងត្រូវបង្រួមលាក់ទុកខាងក្នុងប៊ូតុង Hamburger ដោយប្រើ Attribute `data-bs-toggle="collapse"` និង Bootstrap JS Bundle។'
    },
    tutorial: {
      en: 'Wrap collapsible links inside `<div class="collapse navbar-collapse" id="navContent">`. The toggle button uses `<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navContent">`.',
      km: 'ក្ដោប Links ដែលត្រូវលាក់ក្នុង `<div class="collapse navbar-collapse" id="navContent">` ហើយភ្ជាប់ទៅកាន់ Button ដែលមាន class `navbar-toggler`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light font-sans">

  <!-- Collapsible Mobile Navbar -->
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand text-primary font-bold" href="#">MobileNav</a>

      <!-- Hamburger Button (Visible on mobile) -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible Nav Content -->
      <div class="collapse navbar-collapse" id="mainMenu">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link active" href="#">ទំព័រដើម</a></li>
          <li class="nav-item"><a class="nav-link" href="#">សេវាកម្ម</a></li>
          <li class="nav-item"><a class="nav-link" href="#">ទំនាក់ទំនង</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container py-4 text-center">
    <p class="text-secondary">បង្រួមទំហំ Preview ដើមបីតេស្តមើលប៊ូតុង Hamburger Icon លើ Mobile Viewport!</p>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Mobile-First Clean Interface', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Collapsing top navigation items on mobile screens prevents cluttered UI viewports while preserving complete menu accessibility.',
        km: 'ការបង្រួមម៉ឺនុយលើទូរស័ព្ទ ការពារកុំឲ្យបាំងអេក្រង់ និងផ្តល់បទពិសោធន៍ប្រើប្រាស់ស្អាតបាត។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What HTML attribute tells Bootstrap JS which element ID to show/hide when clicking the hamburger toggle button?',
        km: 'តើ HTML attribute មួយណាប្រាប់ Bootstrap JS ឲ្យដឹងថាត្រូវ បើក/បិទ Element ID មួយណា ពេលចុច Hamburger toggle?'
      },
      hints: [
        { en: 'Attribute format: data-bs-target="#id"', km: 'ទម្រង់ attribute៖ data-bs-target="#id"' }
      ],
      solution: 'data-bs-target'
    },
    quizQuestions: [
      {
        id: 'q-bs-5-2',
        question: {
          en: 'Which class renders the standard 3-line hamburger icon inside the navbar toggler button?',
          km: 'តើ Class មួយណាសម្រាប់បង្ហាញរូប Icon 3 ឆូត (Hamburger Icon) ខាងក្នុង Toggler Button?'
        },
        options: [
          { id: '1', text: { en: '.navbar-toggler-icon', km: '.navbar-toggler-icon' }, isCorrect: true },
          { id: '2', text: { en: '.hamburger-icon', km: '.hamburger-icon' }, isCorrect: false },
          { id: '3', text: { en: '.bs-menu-icon', km: '.bs-menu-icon' }, isCorrect: false }
        ],
        explanation: {
          en: '`.navbar-toggler-icon` uses an embedded SVG background image to render the hamburger lines.',
          km: '`.navbar-toggler-icon` ផ្តល់រូបភាព SVG ឆូត 3 ស្វ័យប្រវត្តិ។'
        }
      }
    ]
  },
  {
    id: 'bs-m5-l3',
    slug: 'bootstrap-nav-dropdowns-and-active-states',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: {
      en: '5.3 Dropdowns & Nav Active States (`dropdown-menu`, `active`)',
      km: '៥.៣ ការប្រើប្រាស់ Dropdowns និង Active States ក្នុង Nav'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Navbar items support dropdown menus (`.dropdown-menu`) and active link highlights (`.active`) to indicate current user page position.',
      km: 'ម៉ឺនុយ Nav អាចបន្ថែមសមាសភាគ Dropdown Menu (`.dropdown-menu`) និងកំណត់ការ Highlight ទំព័របច្ចុប្បន្នដោយប្រើ Class `.active`។'
    },
    tutorial: {
      en: 'Add `.dropdown` to a `nav-item`, use `data-bs-toggle="dropdown"` on the link, and place `.dropdown-menu` with `.dropdown-item` links inside.',
      km: 'ដាក់ Class `.dropdown` លើ nav-item ហើយប្រើ Attribute `data-bs-toggle="dropdown"` លើ Link ដើមបីបញ្ចេញ Dropdown Menu។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light font-sans">

  <nav class="navbar navbar-expand border-bottom bg-white shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold text-dark" href="#">SabayCode</a>

      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active fw-bold text-primary" href="#">ទំព័រដើម</a>
        </li>
        
        <!-- Nav Dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
            កាតាលុកវគ្គសិក្សា
          </a>
          <ul class="dropdown-menu shadow-lg border-0">
            <li><a class="dropdown-item" href="#">HTML5 & CSS3</a></li>
            <li><a class="dropdown-item" href="#">Tailwind CSS</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item text-primary font-bold" href="#">Bootstrap 5 Pro</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container py-5 text-center">
    <h4 class="fw-bold">Dropdown Interaction Demo</h4>
    <p class="text-secondary">ចុចលើ "កាតាលុកវគ្គសិក្សា" ដើមបីមើល Dropdown Menu!</p>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Hierarchical Navigation Architecture', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Dropdowns organise sub-categories without cluttering top-level menus, which is critical for portals offering multiple courses or products.',
        km: 'Dropdowns ជួយរៀបចំប្រភេទវគ្គសិក្សា ឬសេវាកម្មច្រើនជាក្រុម ដោយមិនធ្វើឲ្យទំព័រដើមញ៉ែកញ៉ៃ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which class creates a horizontal separator line between dropdown items?',
        km: 'តើ Class មួយណាសម្រាប់បង្កើត ខ្សែបន្ទាត់ខណ្ឌចន្លោះ (Separator line) ក្នុង Dropdown Menu?'
      },
      hints: [
        { en: 'Use <hr class="dropdown-divider">', km: 'ប្រើ <hr class="dropdown-divider">' }
      ],
      solution: 'dropdown-divider'
    },
    quizQuestions: [
      {
        id: 'q-bs-5-3',
        question: {
          en: 'Which class highlights the currently selected page link inside a Bootstrap navbar?',
          km: 'តើ Class មួយណាសម្រាប់ Highlight បង្ហាញថា Link នោះជាទំព័របច្ចុប្បន្នដែលអ្នកប្រើកំពុងមើល?'
        },
        options: [
          { id: '1', text: { en: '.active', km: '.active' }, isCorrect: true },
          { id: '2', text: { en: '.current-page', km: '.current-page' }, isCorrect: false },
          { id: '3', text: { en: '.selected', km: '.selected' }, isCorrect: false }
        ],
        explanation: {
          en: '`.active` highlights text color and font weight on active navbar links.',
          km: '`.active` បង្ហាញស្ទីលដិត ឬពណ៌ប្លែកលើ Link បច្ចុប្បន្ន។'
        }
      }
    ]
  }
];
