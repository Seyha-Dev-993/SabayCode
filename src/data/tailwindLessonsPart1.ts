import { FrontendLesson } from '../types/frontendClass';

export const TAILWIND_LESSONS_PART1: FrontendLesson[] = [
  // Module 1: Introduction & Setup
  {
    id: 'tw-l1-1',
    slug: 'what-is-utility-first',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: { en: 'What is Utility-First CSS?', km: 'ការណែនាំអំពី Utility-First CSS' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Utility-first CSS means building custom user interfaces by composing single-purpose utility classes (like `flex`, `pt-4`, `text-center`) directly in your HTML markup, rather than writing custom CSS rules in separate stylesheet files.',
      km: 'Utility-First CSS គឺជាវិធីសាស្ត្រសរសេរស្ទីលដោយប្រើប្រាស់ Class តូចៗដែលមានតួនាទីជាក់លាក់មួយៗ (ដូចជា `flex`, `pt-4`, `text-center`) ដោយផ្ទាល់នៅក្នុង HTML Markup។ វាខុសពី Bootstrap ដែលផ្តល់ Component ស្រាប់ៗ (ដូចជា `.btn-primary`) និងខុសពី Plain CSS ដែលតម្រូវឲ្យបង្កើត CSS File ដាច់ដោយឡែក។'
    },
    tutorial: {
      en: '✨ Utility-First Core Concept:\nInstead of writing `.custom-card { padding: 16px; background: white; border-radius: 8px; }`, you write class="p-4 bg-white rounded-lg" directly in HTML.',
      km: '✨ គោលការណ៍គ្រឹះ Utility-First៖\nជំនួសឲ្យការបង្កើត Class ថ្មីក្នុង CSS file ដូចជា `.custom-card { padding: 16px; background: white; }` យើងសរសេរ Class ស្រាប់ៗក្នុង HTML តែម្តង៖ class="p-4 bg-white rounded-lg"។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-100 p-8 flex items-center justify-center min-h-screen font-sans">
  <!-- Comparison Box -->
  <div class="max-w-sm bg-white p-6 rounded-2xl shadow-xl border border-slate-200 text-center space-y-4">
    <span class="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-semibold rounded-full uppercase tracking-wider">
      Utility-First CSS
    </span>
    <h1 class="text-2xl font-bold text-slate-800">
      រចនាគេហទំព័រលឿនរហ័ស
    </h1>
    <p class="text-slate-600 text-sm leading-relaxed">
      Tailwind CSS ជួយឲ្យអ្នករចនា UI ដោយមិនបាច់ចាកចេញពី HTML និងមិនបាច់សរសេរ CSS ច្រើន។
    </p>
    <button class="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-xl transition shadow-md shadow-teal-600/30">
      ចាប់ផ្តើមរៀន
    </button>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why Utility-First Matters', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'In real production projects, utility classes eliminate CSS naming fatigue, prevent style regressions, and keep production CSS bundles extremely small through unused class purging.',
        km: 'ក្នុងគម្រោងការងារពិត Utility-First លុបបំបាត់ការពិបាកគិតឈ្មោះ Class, ការពារការជាន់ Style (CSS Regressions) និងធ្វើឲ្យទំហំ CSS File តូចបំផុតពេល Deploy។'
      }
    },
    practiceExercise: {
      question: { en: 'Add a shadow and centered text to a container using Tailwind utility classes.', km: 'បន្ថែម Class ស្រមោល និងតម្រឹមអក្សរចំកណ្តាលដោយប្រើ Tailwind utilities។' },
      solution: 'class="shadow-lg text-center"'
    },
    quizQuestions: [
      {
        id: 'tw-q1-1',
        question: { en: 'What is the main idea behind Tailwind Utility-First approach?', km: 'តើអ្វីជាគំនិតសំខាន់នៃវិធីសាស្ត្រ Utility-First របស់ Tailwind?' },
        options: [
          { id: 'a', text: { en: 'Applying single-purpose classes directly in HTML attributes', km: 'ការប្រើប្រាស់ Single-purpose classes ដោយផ្ទាល់ក្នុង HTML' }, isCorrect: true },
          { id: 'b', text: { en: 'Writing long custom CSS rules in external stylesheets', km: 'ការសរសេរ CSS rules វែងៗក្នុងឯកសារខាងក្រៅ' }, isCorrect: false }
        ],
        explanation: { en: 'Tailwind provides low-level utility classes to build interfaces directly in markup.', km: 'Tailwind ផ្តល់ Utility classes តូចៗសម្រាប់បង្កើត UI ដោយផ្ទាល់ក្នុង HTML។' }
      }
    ]
  },
  {
    id: 'tw-l1-2',
    slug: 'setting-up-tailwind',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: { en: 'Setting Up Tailwind CSS', km: 'ការដំឡើង Tailwind CSS (Play CDN vs npm)' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Tailwind CSS can be included via Play CDN for prototyping and learning, or installed via npm CLI with tailwind.config.js and PostCSS/Vite for production applications.',
      km: 'ការប្រើប្រាស់ Tailwind CSS មាន ២ របៀប៖ 1. Play CDN (សម្រាប់រៀន និង Prototyping ដោយគ្រាន់តែរ៉ាប់ script tag) និង 2. ដំឡើងតាម npm / Vite (សម្រាប់គម្រោងពិតប្រាកដដែលត្រូវការ Optimization និង Customization)។'
    },
    tutorial: {
      en: '✨ CDN Script Tag (Quick Play Mode):\n`<script src="https://cdn.tailwindcss.com"></script>`\n\n✨ npm CLI Build Mode:\n1. `npm install -D tailwindcss postcss autoprefixer`\n2. `npx tailwindcss init -p`',
      km: '✨ Play CDN សម្រាប់រៀនសូត្រ៖ គ្រាន់តែបន្ថែម `<script src="https://cdn.tailwindcss.com"></script>` ក្នុង `<head>` នៃទំព័រ HTML។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <!-- Tailwind Play CDN for quick learning -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-slate-100 min-h-screen p-8 font-sans">
  <div class="max-w-md mx-auto bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-4">
    <div class="flex items-center space-x-3">
      <div class="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
      <span class="text-xs font-mono text-emerald-400 font-bold uppercase">Play CDN Connected</span>
    </div>
    <h2 class="text-xl font-bold text-white">រៀបចំសាកល្បង Tailwind CSS</h2>
    <p class="text-slate-300 text-sm">
      កូដនេះដំណើការ Tailwind CSS តាមរយៈ Play CDN យ៉ាងងាយស្រួលនៅលើ Browser!
    </p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'CDN vs Build Tool', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Never use Play CDN in production! Use npm build toolchains so Tailwind purges unused CSS and reduces bundle size down to ~10kB.',
        km: 'កុំប្រើ Play CDN លើ Production! ប្រើប្រាស់ npm + Vite ដើមឲ្យ Tailwind លុប Class ដែលមិនបានប្រើចេញ ធ្វើឲ្យ File ទំហំត្រឹមតែ ~10kB ប៉ុណ្ណោះ។'
      }
    },
    practiceExercise: {
      question: { en: 'Which script tag is used to include Tailwind Play CDN?', km: 'តើ Tag មួយណាដែលប្រើសម្រាប់ភ្ជាប់ Tailwind Play CDN?' },
      solution: '<script src="https://cdn.tailwindcss.com"></script>'
    },
    quizQuestions: [
      {
        id: 'tw-q1-2',
        question: { en: 'When should you use Tailwind Play CDN?', km: 'តើពេលណាដែលអ្នកគួរប្រើ Tailwind Play CDN?' },
        options: [
          { id: 'a', text: { en: 'For rapid prototyping, learning, and quick demos', km: 'សម្រាប់រៀនសូត្រ ការសាកល្បង និង Quick Demo' }, isCorrect: true },
          { id: 'b', text: { en: 'For production websites expecting heavy traffic', km: 'សម្រាប់គេហទំព័រ Production ផ្លូវការ' }, isCorrect: false }
        ],
        explanation: { en: 'Play CDN is designed for prototyping and development, not production builds.', km: 'Play CDN ប្រើសម្រាប់សាកល្បង ឬរៀនសូត្រប៉ុណ្ណោះ។' }
      }
    ]
  },
  {
    id: 'tw-l1-3',
    slug: 'reading-class-names',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: { en: 'Reading Tailwind Class Names', km: 'ការយល់ដឹងអំពីឈ្មោះ Class របស់ Tailwind' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Tailwind class names follow a predictable pattern: `[property]-[value]` (e.g. `bg-blue-500`, `text-lg`, `p-4`) or `[modifier]:[property]-[value]` (e.g. `hover:bg-blue-600`, `md:flex`).',
      km: 'ឈ្មោះ Class ក្នុង Tailwind មានទម្រង់ងាយស្រួលចំណាំ៖ `[property]-[value]` (ដូចជា `text-center`, `bg-red-500`, `p-4`) ឬមាន Modifier ខាងមុខ `[modifier]:[class]` (ដូចជា `hover:bg-blue-600`, `md:flex`)។'
    },
    tutorial: {
      en: '✨ Anatomy of a Tailwind Class:\n- `p-4` -> `padding: 1rem`\n- `mt-2` -> `margin-top: 0.5rem`\n- `text-slate-700` -> `color: rgb(51 65 85)`\n- `rounded-xl` -> `border-radius: 0.75rem`',
      km: '✨ រចនាសម្ព័ន្ធឈ្មោះ Class ក្នុង Tailwind៖\n- `p-4` ស្មើនឹង `padding: 1rem`\n- `mt-2` ស្មើនឹង `margin-top: 0.5rem`\n- `text-teal-600` ស្មើនឹង `color` ពណ៌ Teal\n- `rounded-xl` ស្មើនឹង `border-radius: 0.75rem`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 p-6 flex items-center justify-center min-h-screen text-slate-100 font-sans">
  <div class="bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-sm space-y-3">
    <div class="text-teal-400 font-mono text-xs">property-value pattern</div>
    <h3 class="text-xl font-semibold text-white">អានឈ្មោះ Class</h3>
    <ul class="text-xs space-y-1.5 text-slate-300 font-mono">
      <li>• <span class="text-amber-400">bg-slate-900</span> = background-color</li>
      <li>• <span class="text-amber-400">p-6</span> = padding: 1.5rem</li>
      <li>• <span class="text-amber-400">rounded-2xl</span> = border-radius</li>
    </ul>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Shorthand Consistency', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Predictable class syntax allows developer teams to read HTML code and instantly visualize styles without switching back and forth to CSS files.',
        km: 'ទម្រង់ឈ្មោះ Class ដូចៗគ្នាធ្វើឲ្យក្រុម Developer អានកូដ HTML យល់ពី UI ភ្លាមៗដោយមិនបាច់បើកមើល CSS File ឡើយ។'
      }
    },
    practiceExercise: {
      question: { en: 'Which class sets the text color to red shade 500?', km: 'តើ Class មួយណាដែលកំណត់ពណ៌អក្សរទៅជាពណ៌ក្រហម Shade 500?' },
      solution: 'text-red-500'
    },
    quizQuestions: [
      {
        id: 'tw-q1-3',
        question: { en: 'What CSS property does the class `bg-indigo-600` control?', km: 'តើ Class `bg-indigo-600` គ្រប់គ្រង CSS Property មួយណា?' },
        options: [
          { id: 'a', text: { en: 'background-color', km: 'background-color' }, isCorrect: true },
          { id: 'b', text: { en: 'border-color', km: 'border-color' }, isCorrect: false }
        ],
        explanation: { en: '`bg-` controls background color shades.', km: '`bg-` ប្រើសម្រាប់កំណត់ background color។' }
      }
    ]
  },

  // Module 2: Layout Utilities
  {
    id: 'tw-l2-1',
    slug: 'display-utilities',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: { en: 'Display Utilities (block, flex, grid, hidden)', km: 'Display Utilities (block, flex, grid, hidden)' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Tailwind display utilities mirror CSS display values: `block`, `inline-block`, `flex`, `grid`, and `hidden` (which translates to `display: none`).',
      km: 'Display utilities ក្នុង Tailwind តំណាងឱ្យ CSS display values៖ `block`, `inline-block`, `flex`, `grid`, និង `hidden` (ស្មើនឹង `display: none`)។'
    },
    tutorial: {
      en: '✨ Common Display Classes:\n- `block` -> display: block\n- `flex` -> display: flex\n- `grid` -> display: grid\n- `hidden` -> display: none\n- `md:flex hidden` -> hidden on mobile, visible flex on medium screens',
      km: '✨ Class Display ដែលប្រើយ៉ាងទូលំទូលាយ៖\n- `flex` សម្រាប់រៀបចំ Flexbox Layout\n- `grid` សម្រាប់រៀបចំ Grid Layout\n- `hidden` សម្រាប់លាក់ Element'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-white p-6 min-h-screen font-sans space-y-6">
  <!-- Flex Container -->
  <div class="p-4 bg-slate-800 rounded-xl border border-slate-700">
    <div class="text-xs font-mono text-teal-400 mb-2">display: flex</div>
    <div class="flex gap-3">
      <div class="bg-teal-600 p-3 rounded-lg text-sm font-bold flex-1 text-center">Flex Item 1</div>
      <div class="bg-teal-600 p-3 rounded-lg text-sm font-bold flex-1 text-center">Flex Item 2</div>
    </div>
  </div>

  <!-- Grid Container -->
  <div class="p-4 bg-slate-800 rounded-xl border border-slate-700">
    <div class="text-xs font-mono text-indigo-400 mb-2">display: grid</div>
    <div class="grid grid-cols-2 gap-3">
      <div class="bg-indigo-600 p-3 rounded-lg text-sm font-bold text-center">Grid Item 1</div>
      <div class="bg-indigo-600 p-3 rounded-lg text-sm font-bold text-center">Grid Item 2</div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Conditional Rendering & Responsive Menus', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Display utilities like `hidden md:flex` enable building responsive navigation bars that automatically collapse on mobile and expand on desktop.',
        km: 'ការប្រើ `hidden md:flex` ជួយបង្កើត Responsive Navbar ដែលលាក់ប៊ូតុងនៅលើ Mobile និងបង្ហាញ Flex Menu លើ Desktop។'
      }
    },
    practiceExercise: {
      question: { en: 'Which class hides an element from the layout?', km: 'តើ Class មួយណាសម្រាប់លាក់ Element ចេញពី Layout?' },
      solution: 'hidden'
    },
    quizQuestions: [
      {
        id: 'tw-q2-1',
        question: { en: 'Which Tailwind class sets `display: none`?', km: 'តើ Class មួយណាស្មើនឹង `display: none`?' },
        options: [
          { id: 'a', text: { en: 'hidden', km: 'hidden' }, isCorrect: true },
          { id: 'b', text: { en: 'invisible', km: 'invisible' }, isCorrect: false }
        ],
        explanation: { en: '`hidden` sets `display: none` while `invisible` sets `visibility: hidden`.', km: '`hidden` ស្មើនឹង `display: none`។' }
      }
    ]
  },
  {
    id: 'tw-l2-2',
    slug: 'container-and-max-width',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: { en: 'Container & Max-Width Utilities', km: 'ប្រអប់ Container & Max-Width' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'The `container` class fixes the maximum width of an element to match the min-width of the current breakpoint. Combine with `mx-auto` to center content horizontally.',
      km: '`container` និង `max-w-*` ប្រើប្រាស់សម្រាប់កំណត់ទំហំទទឹងអតិបរមានៃទំព័រ ឬផ្នែកណាមួយ ដើមបីកុំឲ្យលូតលាតពេញអក្រង់កុំព្យូទ័រធំៗពេក។ ប្រើរួមជាមួយ `mx-auto` ដើមបីតម្រឹមចំកណ្តាល។'
    },
    tutorial: {
      en: '✨ Max-Width & Center Scale:\n- `max-w-sm` (24rem / 384px)\n- `max-w-md` (28rem / 448px)\n- `max-w-4xl` (56rem / 896px)\n- `max-w-7xl` (80rem / 1280px)\n- `mx-auto` -> `margin-left: auto; margin-right: auto;`',
      km: '✨ គំរូកំណត់ Max-Width & Centering៖\n`class="max-w-4xl mx-auto px-4"` បង្កើតប្រអប់ចំកណ្តាលដែលមានទទឹងអតិបរមា 896px និងមាន Padding ចំហៀង 16px។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-4 font-sans">
  <!-- Centered Content Box -->
  <div class="max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-3 shadow-2xl">
    <div class="text-xs font-mono text-teal-400">max-w-md + mx-auto</div>
    <h2 class="text-xl font-bold text-white">ប្រអប់តម្រឹមចំកណ្តាល</h2>
    <p class="text-slate-400 text-sm">
      ទោះបីជាអក្រង់ធំប៉ុនណាក៏ដោយ កាតនេះនឹងរក្សាទទឹងអតិបរមា 28rem (448px) និងស្ថិតនៅចំកណ្តាលជានិច្ច។
    </p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Responsive Page Layouts', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Wrapping page content in `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` is the industry standard for clean responsive websites.',
        km: 'ការប្រើប្រាស់ `max-w-7xl mx-auto px-4` គឺជាស្តង់ដារឧស្សាហកម្មសម្រាប់បង្កើត Layout ទំព័រ Web ដែលមិនរីកធំពេកលើអក្រង់ Ultrawide។'
      }
    },
    practiceExercise: {
      question: { en: 'Center a box with max-width of 768px (max-w-3xl) horizontally.', km: 'តម្រឹមប្រអប់ max-w-3xl ឲ្យនៅចំកណ្តាលផ្ដេក។' },
      solution: 'class="max-w-3xl mx-auto"'
    },
    quizQuestions: [
      {
        id: 'tw-q2-2',
        question: { en: 'Which class centers a block element horizontally in Tailwind?', km: 'តើ Class មួយណាសម្រាប់តម្រឹម Block Element ឲ្យនៅចំកណ្តាលផ្ដេក?' },
        options: [
          { id: 'a', text: { en: 'mx-auto', km: 'mx-auto' }, isCorrect: true },
          { id: 'b', text: { en: 'my-auto', km: 'my-auto' }, isCorrect: false }
        ],
        explanation: { en: '`mx-auto` sets horizontal margin to auto.', km: '`mx-auto` កំណត់ margin-left និង margin-right ទៅជា auto។' }
      }
    ]
  },
  {
    id: 'tw-l2-3',
    slug: 'position-utilities',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: { en: 'Position Utilities (relative, absolute, fixed, sticky)', km: 'Position Utilities (relative, absolute, fixed, sticky)' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Tailwind position utilities control element positioning: `relative`, `absolute`, `fixed`, and `sticky`, paired with placement classes (`top-0`, `right-0`, `z-10`, `inset-0`).',
      km: 'Position utilities ប្រើសម្រាប់កំណត់ទីតាំង Element ដូចជា `relative`, `absolute`, `fixed`, និង `sticky` អមជាមួយ Class បញ្ជាក់ទិសដៅ `top-0`, `bottom-2`, `right-4`, `inset-0` និង `z-50`។'
    },
    tutorial: {
      en: '✨ Position & Placement Shorthand:\n- `relative` / `absolute` / `fixed` / `sticky`\n- `top-0 right-0` -> top: 0, right: 0\n- `inset-0` -> top:0, right:0, bottom:0, left:0 (full overlap)\n- `z-10`, `z-50` -> z-index layers',
      km: '✨ ឧទាហរណ៍ប្រើប្រាស់ Position ៖\n- Parent: `relative`\n- Child Badge: `absolute top-2 right-2` (ស្ថិតនៅជ្រុងលើខាងស្តាំនៃ Parent)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-8 font-sans">
  <!-- Position Relative Parent -->
  <div class="relative max-w-sm mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
    <!-- Absolute Badge -->
    <span class="absolute -top-3 -right-3 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-slate-900">
      NEW!
    </span>
    <h3 class="text-lg font-bold text-white">Notification Card</h3>
    <p class="text-xs text-slate-400 mt-2">
      Badge '-top-3 -right-3' ស្ថិតនៅជ្រុងលើខាងស្តាំ ដោយសារ Parent មាន 'relative'។
    </p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Sticky Headers & Badges', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Sticky position `sticky top-0 z-50` keeps navigation bars attached to the top of the viewport during page scrolling.',
        km: 'ការប្រើប្រាស់ `sticky top-0 z-50` ជួយឲ្យ Header នៅជាប់ផ្នែកខាងលើនៃ Browser ពេលអ្នកប្រើយ៉កអូសចុះក្រោម (Scroll)។'
      }
    },
    practiceExercise: {
      question: { en: 'Position a close button at the top-right corner inside a relative modal container.', km: 'ដាក់ទីតាំង Close button នៅជ្រុងលើខាងស្តាំនៃ Modal container។' },
      solution: 'class="absolute top-3 right-3"'
    },
    quizQuestions: [
      {
        id: 'tw-q2-3',
        question: { en: 'Which class sets top, right, bottom, and left all to 0 simultaneously?', km: 'តើ Class មួយណាដែលកំណត់ top, right, bottom, left ទៅជា 0 ក្នុងពេលតែមួយ?' },
        options: [
          { id: 'a', text: { en: 'inset-0', km: 'inset-0' }, isCorrect: true },
          { id: 'b', text: { en: 'top-0-all', km: 'top-0-all' }, isCorrect: false }
        ],
        explanation: { en: '`inset-0` applies `top: 0; right: 0; bottom: 0; left: 0;`.', km: '`inset-0` កំណត់ top, right, bottom, left ទាំងអស់ស្មើ 0។' }
      }
    ]
  },

  // Module 3: Spacing & Sizing
  {
    id: 'tw-l3-1',
    slug: 'padding-and-margin',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: { en: 'Padding & Margin Scale', km: 'Padding & Margin Utilities' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Tailwind padding (`p-`, `px-`, `py-`, `pt-`, `pr-`, `pb-`, `pl-`) and margin (`m-`, `mx-`, `my-`, `mt-`, `mr-`, `mb-`, `ml-`) utilities control internal and external spacing.',
      km: 'Padding និង Margin Utilities គ្រប់គ្រងគម្លាតខាងក្នុង និងខាងក្រៅ៖ `p-4` (padding គ្រប់ទិស), `px-4` (ឆ្វេង-ស្តាំ), `py-2` (លើ-ក្រោម), និង `space-y-4` (បន្ថែមគម្លាតរវាងកូនៗជួរឈរ)។'
    },
    tutorial: {
      en: '✨ Spacing Directions:\n- `p-4` -> padding on all 4 sides\n- `px-6` -> padding left & right\n- `py-3` -> padding top & bottom\n- `space-y-3` -> margin-top on all child elements except first child',
      km: '✨ ទិសដៅ Spacing ៖\n- `px-` សម្រាប់អ័ក្ស X (Left/Right)\n- `py-` សម្រាប់អ័ក្ស Y (Top/Bottom)\n- `space-y-` សម្រាប់គម្លាតរវាងកូនៗតាមជួរឈរ'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-white min-h-screen p-6 font-sans">
  <!-- Container with space-y-4 -->
  <div class="max-w-sm mx-auto bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
    <div class="text-xs font-mono text-emerald-400">space-y-3 container</div>
    <div class="bg-slate-700 p-3 rounded-xl text-xs font-bold">Item 1 (Auto Space)</div>
    <div class="bg-slate-700 p-3 rounded-xl text-xs font-bold">Item 2 (Auto Space)</div>
    <div class="bg-slate-700 p-3 rounded-xl text-xs font-bold">Item 3 (Auto Space)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Clean Vertical Rhythm', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Using `space-y-4` on parent form containers replaces manual `mb-4` on every input element, keeping layouts clean and dry.',
        km: 'ការប្រើ `space-y-4` លើ Form Parent លុបបំបាត់ការសរសេរ `mb-4` លើ Input នីមួយៗ ធ្វើឲ្យកូដស្អាតបាត។'
      }
    },
    practiceExercise: {
      question: { en: 'Add horizontal padding of 2rem (px-8) and vertical padding of 1rem (py-4) to a card.', km: 'បន្ថែម Padding ឆ្វេងស្តាំ px-8 និងលើក្រោម py-4។' },
      solution: 'class="px-8 py-4"'
    },
    quizQuestions: [
      {
        id: 'tw-q3-1',
        question: { en: 'What does the class `px-6` control?', km: 'តើ Class `px-6` គ្រប់គ្រងអ្វី?' },
        options: [
          { id: 'a', text: { en: 'padding-left and padding-right', km: 'padding-left និង padding-right' }, isCorrect: true },
          { id: 'b', text: { en: 'padding-top and padding-bottom', km: 'padding-top និង padding-bottom' }, isCorrect: false }
        ],
        explanation: { en: '`px-` applies padding on the X-axis (left and right).', km: '`px-` កំណត់ padding លើអ័ក្ស X (ឆ្វេង និងស្តាំ)។' }
      }
    ]
  },
  {
    id: 'tw-l3-2',
    slug: 'width-and-height',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: { en: 'Width & Height Utilities', km: 'Width & Height Utilities' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Width (`w-`) and height (`h-`) utilities set element dimensions using fixed scale values, percentages (`w-1/2`, `w-full`), viewport units (`w-screen`, `h-screen`), or keyword sizes (`w-auto`, `w-fit`).',
      km: 'Width (`w-`) និង Height (`h-`) កំណត់ទំហំទទឹង និងកម្ពស់៖ តាមលំដាប់លេខ (`w-64`, `h-12`), តាមភាគរយ (`w-1/2`, `w-full`), Viewport (`h-screen`) ឬ Keywords (`w-auto`, `w-fit`)។'
    },
    tutorial: {
      en: '✨ Sizing Shorthands:\n- `w-full` -> width: 100%\n- `w-1/2` -> width: 50%\n- `w-1/3`, `w-2/3` -> fractional widths\n- `h-screen` -> height: 100vh\n- `size-12` -> width & height both 3rem',
      km: '✨ Class Sizing សំខាន់ៗ៖\n- `w-full` (100% នៃ Parent)\n- `w-1/2` (50% នៃ Parent)\n- `h-screen` (កម្ពស់ពេញអក្រង់ 100vh)\n- `size-10` (កំណត់ width និង height ស្មើ 2.5rem ក្នុងពេលតែមួយ)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-white min-h-screen p-6 font-sans space-y-4">
  <div class="max-w-md mx-auto space-y-3">
    <!-- Full Width Bar -->
    <div class="w-full bg-indigo-600 p-2.5 rounded-xl text-xs font-bold text-center">
      w-full (100%)
    </div>
    <!-- Half Width Bar -->
    <div class="w-1/2 bg-teal-600 p-2.5 rounded-xl text-xs font-bold text-center">
      w-1/2 (50%)
    </div>
    <!-- Square Avatar using size-12 -->
    <div class="size-12 bg-rose-500 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
      OK
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Fluid Columns & Avatars', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Fractional classes like `w-1/2` and `w-1/3` enable quick multi-column layouts without writing custom percentage CSS rules.',
        km: 'ការប្រើ `w-1/2` ឬ `w-1/3` ជួយបង្កើតជួរឈរភាគរយបានលឿនបំផុត។'
      }
    },
    practiceExercise: {
      question: { en: 'Make an element take 100% width of its parent container.', km: 'កំណត់ឲ្យ Element យកទំហំទទឹង 100% នៃ Parent។' },
      solution: 'w-full'
    },
    quizQuestions: [
      {
        id: 'tw-q3-2',
        question: { en: 'Which class sets the width of an element to 50%?', km: 'តើ Class មួយណាដែលកំណត់ទទឹង Element ស្មើ 50%?' },
        options: [
          { id: 'a', text: { en: 'w-1/2', km: 'w-1/2' }, isCorrect: true },
          { id: 'b', text: { en: 'w-50', km: 'w-50' }, isCorrect: false }
        ],
        explanation: { en: '`w-1/2` sets `width: 50%`.', km: '`w-1/2` ស្មើនឹង `width: 50%`។' }
      }
    ]
  },
  {
    id: 'tw-l3-3',
    slug: 'spacing-scale-logic',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: { en: 'Tailwind Spacing Scale Logic', km: 'យល់ដឹងពី Spacing Scale Logic (4 = 1rem)' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Tailwind spacing utilities rely on a mathematical 4-based scale where 1 spacing unit = 0.25rem = 4px. Therefore, `p-1` = 4px, `p-2` = 8px, `p-4` = 16px (1rem), and `p-8` = 32px (2rem).',
      km: 'Spacing Scale របស់ Tailwind ផ្អែកលើរូបមន្តគុណនឹង 4px (ឬ 0.25rem)៖ 1 unit = 4px (0.25rem)។ ដូច្នេះ៖ `1` = 4px, `2` = 8px, `4` = 16px (1rem), `6` = 24px, `8` = 32px (2rem)។'
    },
    tutorial: {
      en: '✨ Spacing Scale Quick Formula:\n`[number] * 0.25rem` = rem value (`[number] * 4px` = pixel equivalent)\nExamples:\n- `p-2` = 0.5rem (8px)\n- `p-4` = 1rem (16px)\n- `p-6` = 1.5rem (24px)\n- `p-10` = 2.5rem (40px)',
      km: '✨ រូបមន្ត Spacing Scale៖\nគុណតួលេខនឹង 4px ដើមបីបានតម្លៃ Pixels! ឧទាហរណ៍ `p-4` -> 4 * 4px = 16px (1rem)។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <div class="max-w-md mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 font-mono text-xs">
    <div class="text-teal-400 font-bold mb-2">Spacing Scale Reference</div>
    <div class="p-1 bg-slate-800 rounded text-center">p-1 = 0.25rem (4px)</div>
    <div class="p-2 bg-slate-800 rounded text-center">p-2 = 0.5rem (8px)</div>
    <div class="p-4 bg-indigo-600/40 border border-indigo-500 rounded text-center font-bold">p-4 = 1rem (16px) Standard</div>
    <div class="p-6 bg-slate-800 rounded text-center">p-6 = 1.5rem (24px)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Design System Harmony', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Using a standardized spacing scale guarantees proportional padding and margins across the entire application.',
        km: 'ការប្រើប្រាស់ Spacing Scale ស្តង់ដារធ្វើឲ្យគម្លាតគ្រប់កន្លែងក្នុង App មានសមាមាត្រស្មើគ្នាជានិច្ច។'
      }
    },
    practiceExercise: {
      question: { en: 'What pixel value does the class `mt-8` represent?', km: 'តើ `mt-8` ស្មើនឹងប៉ុន្មាន Pixels?' },
      solution: '32px'
    },
    quizQuestions: [
      {
        id: 'tw-q3-3',
        question: { en: 'How many pixels is `p-4` in Tailwind default settings?', km: 'តើ `p-4` ស្មើនឹងប៉ុន្មាន Pixels ក្នុង Tailwind?' },
        options: [
          { id: 'a', text: { en: '16px (1rem)', km: '16px (1rem)' }, isCorrect: true },
          { id: 'b', text: { en: '4px', km: '4px' }, isCorrect: false }
        ],
        explanation: { en: '4 units * 4px = 16px (1rem).', km: '4 units * 4px = 16px (1rem)។' }
      }
    ]
  },

  // Module 4: Typography Utilities
  {
    id: 'tw-l4-1',
    slug: 'font-size-and-weight',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: { en: 'Font Size, Weight & Family', km: 'Font Size, Weight & Family' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Tailwind typography utilities control text size (`text-xs` to `text-9xl`), font weight (`font-thin` to `font-black`), and font family (`font-sans`, `font-serif`, `font-mono`).',
      km: 'Typography utilities កំណត់ទំហំអក្សរ (`text-xs` ដល់ `text-9xl`), ទំហំកម្រាស់អក្សរ (`font-normal`, `font-semibold`, `font-bold`, `font-black`) និងប្រភេទ Font (`font-sans`, `font-serif`, `font-mono`)។'
    },
    tutorial: {
      en: '✨ Typography Scale:\n- `text-xs` (0.75rem / 12px)\n- `text-sm` (0.875rem / 14px)\n- `text-base` (1rem / 16px)\n- `text-lg` (1.125rem / 18px)\n- `text-2xl` (1.5rem / 24px)\n- `font-bold` (weight 700)',
      km: '✨ ថ្នាក់ទំហំអក្សរ ៖\n- `text-sm` (14px)\n- `text-base` (16px)\n- `text-xl` (20px)\n- `text-3xl` (30px)\n- `font-extrabold` (weight 800)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans space-y-3">
  <div class="max-w-md mx-auto bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
    <h1 class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">
      Heading text-3xl
    </h1>
    <h3 class="text-lg font-bold text-slate-200">
      Subheading text-lg font-bold
    </h3>
    <p class="text-sm font-normal text-slate-400">
      Body text text-sm font-normal សម្រាប់អត្ថបទពិពណ៌នាធម្មតា។
    </p>
    <div class="font-mono text-xs text-emerald-400 bg-slate-950 p-2 rounded">
      font-mono text-xs (Code Snippet)
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Hierarchy & Legibility', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Mixing `text-3xl font-extrabold` for headings with `text-sm text-slate-400` for body text creates instant visual hierarchy.',
        km: 'ការប្រើប្រាស់ `text-3xl font-extrabold` លើចំណងជើង និង `text-sm` លើអត្ថបទ បង្កើត Visual Hierarchy ច្បាស់លាស់។'
      }
    },
    practiceExercise: {
      question: { en: 'Set a heading to extra bold font-weight and text size 2xl.', km: 'កំណត់ចំណងជើងជា font extra bold និងទំហំ text-2xl។' },
      solution: 'class="text-2xl font-extrabold"'
    },
    quizQuestions: [
      {
        id: 'tw-q4-1',
        question: { en: 'Which class sets the font weight to 700?', km: 'តើ Class មួយណាដែលកំណត់ font weight ស្មើ 700?' },
        options: [
          { id: 'a', text: { en: 'font-bold', km: 'font-bold' }, isCorrect: true },
          { id: 'b', text: { en: 'text-bold', km: 'text-bold' }, isCorrect: false }
        ],
        explanation: { en: '`font-bold` sets `font-weight: 700`.', km: '`font-bold` ស្មើនឹង `font-weight: 700`។' }
      }
    ]
  },
  {
    id: 'tw-l4-2',
    slug: 'text-alignment-and-leading',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: { en: 'Text Alignment, Line Height & Letter Spacing', km: 'Text Alignment, Line Height & Letter Spacing' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Control text alignment (`text-left`, `text-center`, `text-right`), line height (`leading-none`, `leading-snug`, `leading-relaxed`), and letter spacing (`tracking-tight`, `tracking-wide`).',
      km: 'គ្រប់គ្រងការតម្រឹមអក្សរ (`text-center`, `text-right`), គម្លាតបន្ទាត់ (`leading-relaxed`, `leading-loose`) និងគម្លាតរវាងតួអក្សរ (`tracking-wide`, `tracking-widest`)។'
    },
    tutorial: {
      en: '✨ Alignment & Leading Shorthand:\n- `text-center` -> text-align: center\n- `leading-relaxed` -> line-height: 1.625\n- `tracking-wider` -> letter-spacing: 0.05em\n- `uppercase` -> text-transform: uppercase',
      km: '✨ Class Alignment & Line-Height ៖\n- `text-center` កំណត់អក្សរឲ្យនៅចំកណ្តាល\n- `leading-relaxed` ធ្វើឲ្យអត្ថបទអានស្រួល\n- `uppercase tracking-wider` សម្រាប់ Label ឬ Badge'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <div class="max-w-md mx-auto bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center space-y-3">
    <span class="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
      UPPERCASE TRACKING
    </span>
    <h2 class="text-xl font-bold text-white leading-snug">
      ចំណងជើងដែលមាន Line Height សម្របសម្រួល
    </h2>
    <p class="text-slate-300 text-sm leading-relaxed text-center">
      កថាខណ្ឌនេះមាន 'leading-relaxed' និង 'text-center' ធ្វើឲ្យការអានអត្ថបទវែងៗមានភាពរលូន និងមិនស្ទះភ្នែក។
    </p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Accessible Paragraph Readability', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Adding `leading-relaxed` to long body copy ensures WCAG line-height guidelines are met automatically.',
        km: 'ការបន្ថែម `leading-relaxed` លើអត្ថបទវែងៗជួយឲ្យស្របតាមស្តង់ដារ WCAG line-height សម្រាប់ការអាន។'
      }
    },
    practiceExercise: {
      question: { en: 'Make text uppercase with wider letter spacing.', km: 'កំណត់អក្សរជា Uppercase និងមានគម្លាតតួអក្សរធំទូលាយ។' },
      solution: 'class="uppercase tracking-wider"'
    },
    quizQuestions: [
      {
        id: 'tw-q4-2',
        question: { en: 'Which class sets `line-height: 1.625` for comfortable reading?', km: 'តើ Class មួយណាដែលកំណត់ line-height ស្មើ 1.625?' },
        options: [
          { id: 'a', text: { en: 'leading-relaxed', km: 'leading-relaxed' }, isCorrect: true },
          { id: 'b', text: { en: 'text-relaxed', km: 'text-relaxed' }, isCorrect: false }
        ],
        explanation: { en: '`leading-relaxed` sets comfortable 1.625 line height.', km: '`leading-` គ្រប់គ្រង line-height ក្នុង Tailwind។' }
      }
    ]
  },
  {
    id: 'tw-l4-3',
    slug: 'text-color-and-truncation',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: { en: 'Text Color & Truncation Utilities', km: 'Text Color, Truncation & Line Clamp' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Apply color palettes to text (`text-slate-800`, `text-teal-400`), control opacity (`text-white/80`), and handle overflow text with truncation (`truncate`, `line-clamp-2`).',
      km: 'កំណត់ពណ៌អក្សរ (`text-indigo-600`), កម្រិតភាពថ្លា (`text-white/80`), និងការកាត់បង្រួមអត្ថបទវែងៗដែលហៀរ (`truncate` សម្រាប់ ១ ជួរ ឬ `line-clamp-2` សម្រាប់ ២ ជួរ)។'
    },
    tutorial: {
      en: '✨ Color & Truncation Utilities:\n- `text-slate-400` -> color shade\n- `text-white/70` -> color with 70% opacity\n- `truncate` -> single line ellipsis (...)\n- `line-clamp-2` -> multi-line ellipsis after 2 lines',
      km: '✨ ឧទាហរណ៍ប្រើប្រាស់ Truncation ៖\n- `truncate` កាត់អត្ថបទលើសជួរដំបូងជំនួសដោយ (...)\n- `line-clamp-2` កាត់អត្ថបទលើសពី ២ ជួរជំនួសដោយ (...)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <div class="max-w-xs mx-auto bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3">
    <div class="text-xs font-mono text-teal-400">truncate example</div>
    <h4 class="text-sm font-bold text-white truncate">
      នេះជាចំណងជើងវែងខ្លាំងណាស់ដែលនឹងត្រូវកាត់ចោលជំនួសដោយសញ្ញាចុចបី
    </h4>
    <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">
      អត្ថបទពិពណ៌នាវែងអន្លាយដែលត្រូវបានកាត់តម្រឹមឲ្យបង្ហាញត្រឹមតែ ២ ជួរដំបូងប៉ុណ្ណោះដើមបីកុំឲ្យខូចប្លង់កាត។
    </p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Preventing Card Layout Breakage', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Using `line-clamp-2` or `truncate` on user-generated headlines prevents overflow from destroying card grid layouts.',
        km: 'ការប្រើ `line-clamp-2` លើចំណងជើងព័ត៌មាន ការពារកុំឲ្យអត្ថបទវែងពេករុញកាតផ្សេងទៀតខូចទ្រង់ទ្រាយ។'
      }
    },
    practiceExercise: {
      question: { en: 'Truncate text to fit on a single line with an ellipsis.', km: 'កាត់បង្រួមអត្ថបទឲ្យនៅត្រឹមតែមួយជួរដោយប្រើសញ្ញាចុចបី (...)។' },
      solution: 'truncate'
    },
    quizQuestions: [
      {
        id: 'tw-q4-3',
        question: { en: 'Which class truncates text after 2 lines in Tailwind?', km: 'តើ Class មួយណាដែលកាត់បង្រួមអត្ថបទត្រឹម ២ ជួរ?' },
        options: [
          { id: 'a', text: { en: 'line-clamp-2', km: 'line-clamp-2' }, isCorrect: true },
          { id: 'b', text: { en: 'max-lines-2', km: 'max-lines-2' }, isCorrect: false }
        ],
        explanation: { en: '`line-clamp-2` limits text display to two lines.', km: '`line-clamp-2` បង្ហាញអត្ថបទត្រឹម ២ ជួរ។' }
      }
    ]
  },

  // Module 5: Colors & Backgrounds
  {
    id: 'tw-l5-1',
    slug: 'tailwind-color-palette',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: { en: "Tailwind Default Color Palette & Shades", km: "ប្រព័ន្ធពណ៌ និង Shade របស់ Tailwind" },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Tailwind comes with an expertly-crafted default color palette including slate, gray, zinc, red, amber, emerald, teal, cyan, sky, blue, indigo, violet, fuchsia, rose, and more—each numbered from 50 (lightest) to 950 (darkest).',
      km: 'Tailwind មានប្រព័ន្ធពណ៌ស្រាប់ៗជាច្រើន (ដូចជា slate, indigo, emerald, amber, rose) ដោយពណ៌នីមួយៗមាន ១១ Shade ចាប់ពី 50 (ភ្លឺបំផុត) ដល់ 950 (ងងឹតបំផុត)។'
    },
    tutorial: {
      en: '✨ Color Shade Progression:\n- 50 / 100 / 200 -> subtle tints & backgrounds\n- 500 / 600 -> primary brand & button colors\n- 800 / 900 / 950 -> dark mode backgrounds & high contrast text',
      km: '✨ លំដាប់ Shade ពណ៌៖\n- `bg-indigo-50` (ភ្លឺស្តើង)\n- `bg-indigo-600` (ពណ៌ដើមចម្បង)\n- `bg-indigo-950` (ងងឹតខ្លាំង)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <div class="max-w-md mx-auto space-y-3">
    <div class="text-xs font-mono text-slate-400">Teal Color Shade Palette</div>
    <div class="grid grid-cols-5 gap-2 text-center text-xs font-bold text-slate-900">
      <div class="bg-teal-100 p-3 rounded-lg">100</div>
      <div class="bg-teal-300 p-3 rounded-lg">300</div>
      <div class="bg-teal-500 p-3 rounded-lg text-white">500</div>
      <div class="bg-teal-700 p-3 rounded-lg text-white">700</div>
      <div class="bg-teal-950 p-3 rounded-lg text-teal-300 border border-teal-800">950</div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Cohesive Palette Design', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Relying on Tailwind curated shades prevents mismatched custom hex codes and maintains visual consistency across light and dark modes.',
        km: 'ការប្រើប្រាស់ Shade ស្រាប់របស់ Tailwind ការពារការច្របូកច្របល់ HEX Code និងរក្សាភាពទាក់ទាញនៃប្រព័ន្ធពណ៌។'
      }
    },
    practiceExercise: {
      question: { en: 'Set a background to emerald shade 600 and text to white.', km: 'កំណត់ Background ជា emerald-600 និងអក្សរពណ៌ស។' },
      solution: 'class="bg-emerald-600 text-white"'
    },
    quizQuestions: [
      {
        id: 'tw-q5-1',
        question: { en: 'Which shade number represents the darkest tone in Tailwind v3 color scale?', km: 'តើលេខ Shade មួយណាដែលតំណាងឱ្យពណ៌ងងឹតបំផុត?' },
        options: [
          { id: 'a', text: { en: '950', km: '950' }, isCorrect: true },
          { id: 'b', text: { en: '50', km: '50' }, isCorrect: false }
        ],
        explanation: { en: '950 is the darkest shade tint in Tailwind default color scale.', km: '950 ជាលេខ Shade ងងឹតបំផុត។' }
      }
    ]
  },
  {
    id: 'tw-l5-2',
    slug: 'background-gradients-and-opacity',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: { en: 'Background Gradients & Opacity', km: 'Background Gradients & Opacity' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Create vibrant background gradients using direction utilities (`bg-gradient-to-r`, `bg-gradient-to-br`) paired with color stops (`from-indigo-500`, `via-purple-500`, `to-pink-500`) and alpha opacity (`bg-black/50`, `bg-white/10`).',
      km: 'បង្កើត Gradient ពណ៌ស្អាតៗដោយប្រើប្រាស់ `bg-gradient-to-r` រួមជាមួយ `from-indigo-500`, `via-purple-500`, `to-pink-500` និងការកំណត់ភាពថ្លា `bg-black/50` ឬ `bg-indigo-600/20`។'
    },
    tutorial: {
      en: '✨ Gradient Syntax:\n`class="bg-gradient-to-r from-teal-400 via-indigo-500 to-purple-600"`\n\n✨ Alpha Opacity Slash Notation:\n- `bg-black/50` -> 50% opacity black background\n- `border-white/20` -> 20% opacity white border',
      km: '✨ រចនាសម្ព័ន្ធ Gradient & Opacity ៖\n- `bg-gradient-to-r from-blue-500 to-teal-400`\n- `bg-indigo-500/20` (ពណ៌ Indigo ជាមួយ Opacity 20%)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <div class="max-w-sm mx-auto p-6 rounded-3xl bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-600 shadow-2xl space-y-3">
    <!-- Glassmorphism Badge -->
    <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/30">
      Gradient + Glass Effect
    </span>
    <h2 class="text-2xl font-black text-white">
      មន្តស្នេហ៍ Gradient ក្នុង Tailwind
    </h2>
    <p class="text-xs text-white/80 leading-relaxed">
      'bg-gradient-to-r' បញ្ចូលគ្នារវាងពណ៌ពីរបីយ៉ាងរលូន ដោយមិនបាច់សរសេរ linear-gradient() ក្នុង CSS។
    </p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Modern Hero Backgrounds', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Combining background gradients with semi-transparent overlays creates high-converting SaaS landing page hero banners.',
        km: 'ការប្រើប្រាស់ Background Gradient ជាមួយ Glassmorphism ត្រូវបាននិយមប្រើលើទំព័រ Landing Page ទំនើបៗ។'
      }
    },
    practiceExercise: {
      question: { en: 'Create a gradient background going from blue-500 to indigo-600 to the right.', km: 'បង្កើត Gradient ពីពណ៌ blue-500 ទៅ indigo-600 ឆ្ពោះទៅស្តាំ។' },
      solution: 'class="bg-gradient-to-r from-blue-500 to-indigo-600"'
    },
    quizQuestions: [
      {
        id: 'tw-q5-2',
        question: { en: 'What does slash notation `bg-black/50` mean in Tailwind CSS?', km: 'តើ Slash Notation `bg-black/50` មានន័យដូចម្តេច?' },
        options: [
          { id: 'a', text: { en: 'Black background with 50% opacity', km: 'Background ពណ៌ខ្មៅដែលមាន Opacity 50%' }, isCorrect: true },
          { id: 'b', text: { en: 'Background width set to 50%', km: 'Background width 50%' }, isCorrect: false }
        ],
        explanation: { en: 'The `/50` suffix specifies alpha opacity (50%).', km: 'សញ្ញា `/50` បញ្ជាក់ពី Alpha opacity 50%។' }
      }
    ]
  },
  {
    id: 'tw-l5-3',
    slug: 'borders-radius-shadows',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: { en: 'Borders, Border Radius & Box Shadows', km: 'Borders, Border Radius & Box Shadows' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Control borders (`border`, `border-2`, `border-indigo-500`), rounded corners (`rounded-md`, `rounded-2xl`, `rounded-full`), and drop shadows (`shadow-sm`, `shadow-lg`, `shadow-indigo-500/20`).',
      km: 'គ្រប់គ្រងខ្សែព្រំប្រទល់ (`border`, `border-slate-700`), ជ្រុងមូល (`rounded-xl`, `rounded-full`) និងស្រមោល (`shadow-md`, `shadow-indigo-500/20`)។'
    },
    tutorial: {
      en: '✨ Border & Shadow Scale:\n- `border` -> 1px solid border\n- `rounded-2xl` -> border-radius: 1rem (16px)\n- `rounded-full` -> pill or circle shape\n- `shadow-xl shadow-teal-500/20` -> colored shadow elevation',
      km: '✨ ថ្នាក់ Border & Shadow ៖\n- `rounded-2xl` បង្កើតជ្រុងមូលស្អាត 16px\n- `shadow-xl shadow-indigo-500/20` បង្កើតស្រមោលពណ៌ឡូយឆាយ'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <div class="max-w-sm mx-auto bg-slate-900 border-2 border-indigo-500/50 p-6 rounded-3xl shadow-2xl shadow-indigo-500/20 space-y-3">
    <div class="flex items-center justify-between">
      <span class="text-xs font-mono text-indigo-400">Rounded & Colored Shadow</span>
      <div class="size-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xs">✓</div>
    </div>
    <h3 class="text-lg font-bold text-white">Elevated Card</h3>
    <p class="text-xs text-slate-400 leading-relaxed">
      កាតនេះមាន 'border-2 border-indigo-500/50' និង 'shadow-2xl shadow-indigo-500/20' បង្កើតជម្រៅមើលទៅយ៉ាងស្អាត។
    </p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Card Elevation Standards', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Combining subtle borders with tinted shadows creates accessible, modern card interfaces in dark and light modes.',
        km: 'ការលាយបញ្ចូលគ្នារវាង Border ស្ដើង និង Colored Shadow បង្កើត UI កាតដែលមានភាពទាក់ទាញ។'
      }
    },
    practiceExercise: {
      question: { en: 'Make a button fully rounded like a pill with a medium shadow.', km: 'បង្កើតប៊ូតុងជ្រុងមូលក្លំដូច Pill ជាមួយស្រមោលកម្រិតមធ្យម។' },
      solution: 'class="rounded-full shadow-md"'
    },
    quizQuestions: [
      {
        id: 'tw-q5-3',
        question: { en: 'Which class makes an element completely circular or pill-shaped?', km: 'តើ Class មួយណាដែលធ្វើឲ្យ Element មានជ្រុងមូលក្លំ ឬរាង Pill?' },
        options: [
          { id: 'a', text: { en: 'rounded-full', km: 'rounded-full' }, isCorrect: true },
          { id: 'b', text: { en: 'rounded-circle', km: 'rounded-circle' }, isCorrect: false }
        ],
        explanation: { en: '`rounded-full` sets `border-radius: 9999px`.', km: '`rounded-full` កំណត់ `border-radius: 9999px`។' }
      }
    ]
  }
];
