import { FrontendLesson } from '../types/frontendClass';

export const TAILWIND_LESSONS_PART2: FrontendLesson[] = [
  // Module 6: Flexbox & Grid Utilities
  {
    id: 'tw-l6-1',
    slug: 'flexbox-containers-and-alignment',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: { en: 'Flex Container & Alignment Utilities', km: 'Flexbox Container & Alignment' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Tailwind flexbox utilities make layout positioning intuitive: `flex` sets the container, `flex-row` / `flex-col` controls direction, `justify-` handles main-axis alignment (`justify-between`, `justify-center`), and `items-` handles cross-axis alignment (`items-center`).',
      km: 'Flexbox utilities ក្នុង Tailwind ធ្វើឲ្យការរៀបចំ Layout ងាយស្រួល៖ `flex` (បង្កើត flex container), `flex-row` / `flex-col` (កំណត់ទិសដៅ), `justify-` (តម្រឹមតាមអ័ក្សចម្បង) និង `items-` (តម្រឹមតាមអ័ក្សកាត់)។'
    },
    tutorial: {
      en: '✨ Flexbox Centering Formula:\n`class="flex items-center justify-center"`\n\n✨ Space Between Navigation:\n`class="flex items-center justify-between px-4 py-2"`',
      km: '✨ រូបមន្ត Flexbox Centering ៖\n`class="flex items-center justify-center"` (តម្រឹមធាតុចំកណ្តាលទាំងពីរអ័ក្ស)។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <!-- Flex Header Bar -->
  <div class="max-w-md mx-auto bg-slate-900 p-4 rounded-2xl border border-slate-800 flex items-center justify-between shadow-xl">
    <div class="flex items-center space-x-3">
      <div class="size-9 bg-teal-500 rounded-xl flex items-center justify-center font-bold text-slate-950">
        TW
      </div>
      <div>
        <h4 class="text-sm font-bold text-white">Flex Navigation</h4>
        <p class="text-xs text-slate-400">items-center justify-between</p>
      </div>
    </div>
    <button class="px-3 py-1.5 bg-teal-600 hover:bg-teal-500 text-xs font-bold rounded-xl transition">
      Action
    </button>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Standard Navbar Layout', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Combining `flex items-center justify-between` is used on virtually every modern website header and card header.',
        km: 'ការប្រើប្រាស់ `flex items-center justify-between` ត្រូវបានប្រើស្ទើរតែគ្រប់ Header និង Toolbar នៃ Web App។'
      }
    },
    practiceExercise: {
      question: { en: 'Align flex items to the center on both axes.', km: 'តម្រឹម Flex items ឲ្យនៅចំកណ្តាលទាំងពីរអ័ក្ស។' },
      solution: 'class="flex items-center justify-center"'
    },
    quizQuestions: [
      {
        id: 'tw-q6-1',
        question: { en: 'Which property aligns flex items along the cross-axis?', km: 'តើ Class មួយណាសម្រាប់តម្រឹម Flex items តាមអ័ក្សកាត់ (Vertical axis by default)?' },
        options: [
          { id: 'a', text: { en: 'items-center', km: 'items-center' }, isCorrect: true },
          { id: 'b', text: { en: 'justify-center', km: 'justify-center' }, isCorrect: false }
        ],
        explanation: { en: '`items-` controls align-items (cross-axis alignment).', km: '`items-` គ្រប់គ្រង align-items តាមអ័ក្សកាត់។' }
      }
    ]
  },
  {
    id: 'tw-l6-2',
    slug: 'flex-gap-wrap-grow',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: { en: 'Flex Gap, Wrap, Flex Grow & Shrink', km: 'Flex Gap, Wrap, Flex Grow & Shrink' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Control gaps between flex children with `gap-` (`gap-4`, `gap-x-2`), allow wrapping with `flex-wrap`, and expand or shrink flex children with `flex-1`, `flex-auto`, `grow`, and `shrink-0`.',
      km: 'គ្រប់គ្រងគម្លាតរវាង Flex Children ដោយប្រើ `gap-4`, បត់ជួរពេលអស់លំហដោយប្រើ `flex-wrap`, និងពង្រីកលូតលាស់ទំហំដោយប្រើ `flex-1` ឬ `grow`។'
    },
    tutorial: {
      en: '✨ Essential Flex Sizing:\n- `gap-4` -> gap between items\n- `flex-1` -> flex: 1 1 0% (fill available space)\n- `shrink-0` -> prevent icon/badge from squishing',
      km: '✨ Class គ្រប់គ្រង Flex Sizing ៖\n- `gap-4` បន្ថែមចន្លោះរវាង Element\n- `flex-1` ពង្រីកបំពេញចន្លោះដែលនៅទំនេរ\n- `shrink-0` ការពារ Icon មិនឲ្យរួញតូច'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <div class="max-w-md mx-auto bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-4">
    <div class="text-xs font-mono text-indigo-400">flex-1 + shrink-0 example</div>
    <div class="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
      <!-- Fixed Avatar (shrink-0) -->
      <div class="size-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold shrink-0">
        AV
      </div>
      <!-- Expanding Text Area (flex-1) -->
      <div class="flex-1 min-w-0">
        <h5 class="text-sm font-bold text-white truncate">អត្ថបទពង្រីកបំពេញលំហទំនេរ</h5>
        <p class="text-xs text-slate-400 truncate">flex-1 + min-w-0</p>
      </div>
      <button class="px-2.5 py-1 bg-indigo-600/30 text-indigo-300 text-xs font-bold rounded-lg shrink-0">
        Follow
      </button>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Unsquishable Avatars & Icons', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Adding `shrink-0` to user avatar icons inside flexible search rows prevents them from getting squeezed when text is long.',
        km: 'ការប្រើ `shrink-0` លើ Avatar/Icon ការពារមិនឲ្យវាត្រូវសង្កត់រួញតូចពេលអត្ថបទនៅជិតវាវែងពេក។'
      }
    },
    practiceExercise: {
      question: { en: 'Prevent an icon inside a flex row from shrinking.', km: 'ការពារ Icon ក្នុង Flex row មិនឲ្យរួញតូច។' },
      solution: 'shrink-0'
    },
    quizQuestions: [
      {
        id: 'tw-q6-2',
        question: { en: 'Which class forces a flex child to expand and fill remaining empty space?', km: 'តើ Class មួយណាដែលបង្ខំ Flex child ឲ្យពង្រីកបំពេញចន្លោះទំនេរ?' },
        options: [
          { id: 'a', text: { en: 'flex-1', km: 'flex-1' }, isCorrect: true },
          { id: 'b', text: { en: 'flex-none', km: 'flex-none' }, isCorrect: false }
        ],
        explanation: { en: '`flex-1` sets `flex: 1 1 0%`.', km: '`flex-1` ពង្រីកបំពេញចន្លោះទំនេរទាំងអស់ក្នុង Flexbox។' }
      }
    ]
  },
  {
    id: 'tw-l6-3',
    slug: 'css-grid-utilities',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: { en: 'CSS Grid Utilities (grid-cols, gap, col-span)', km: 'CSS Grid Utilities (grid-cols, gap, col-span)' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Tailwind CSS Grid utilities make multi-column layouts effortless: `grid` initializes the grid, `grid-cols-1` to `grid-cols-12` sets column counts, `gap-4` specifies spacing, and `col-span-2` spans children across multiple columns.',
      km: 'Grid utilities ជួយរៀបចំប្លង់ច្រើនជួរឈរងាយស្រួលបំផុត៖ `grid` (បង្កើត Grid container), `grid-cols-3` (កំណត់ ៣ ជួរឈរ), `gap-4` (គម្លាតរវាងក្រឡា) និង `col-span-2` (ទាញទំហំក្រឡាតែមួយឲ្យក្តោបយក ២ ជួរឈរ)។'
    },
    tutorial: {
      en: '✨ Grid Column Syntax:\n- `grid grid-cols-3 gap-4` -> 3 columns layout\n- `col-span-2` -> grid child spans 2 columns\n- `col-span-full` -> grid child spans all columns',
      km: '✨ គំរូសរសេរ Grid Layout ៖\n- `grid grid-cols-3 gap-4`\n- Child 1: `col-span-2` (យក ២ ភាគ ៣ នៃផ្ទៃដីសរុប)'
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
    <div class="text-xs font-mono text-teal-400">grid grid-cols-3 gap-3</div>
    <div class="grid grid-cols-3 gap-3">
      <!-- Main Card spanning 2 columns -->
      <div class="col-span-2 bg-indigo-600 p-4 rounded-2xl text-xs font-bold text-center flex items-center justify-center">
        col-span-2 Main Content
      </div>
      <!-- Sidebar Card spanning 1 column -->
      <div class="col-span-1 bg-teal-600 p-4 rounded-2xl text-xs font-bold text-center flex items-center justify-center">
        Sidebar
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Dashboard Cards & Bento Grids', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Combining `grid grid-cols-12` with `col-span-8` and `col-span-4` powers dashboard analytics screens and Bento grids.',
        km: 'ការប្រើប្រាស់ `grid-cols-12` ជាមួយ `col-span-8` និង `col-span-4` គឺជាប្លង់ស្តង់ដារសម្រាប់ Dashboard Analytics។'
      }
    },
    practiceExercise: {
      question: { en: 'Create a 4-column grid layout with 1rem gap.', km: 'បង្កើត Grid Layout មាន ៤ ជួរឈរ និងមាន Gap 1rem (gap-4)។' },
      solution: 'class="grid grid-cols-4 gap-4"'
    },
    quizQuestions: [
      {
        id: 'tw-q6-3',
        question: { en: 'Which class causes a grid item to span across 2 columns?', km: 'តើ Class មួយណាដែលធ្វើឲ្យ Grid item ក្តោបយក ២ ជួរឈរ?' },
        options: [
          { id: 'a', text: { en: 'col-span-2', km: 'col-span-2' }, isCorrect: true },
          { id: 'b', text: { en: 'grid-span-2', km: 'grid-span-2' }, isCorrect: false }
        ],
        explanation: { en: '`col-span-2` sets `grid-column: span 2 / span 2`.', km: '`col-span-2` កំណត់ឲ្យ Element ក្តោបយក ២ ជួរឈរ។' }
      }
    ]
  },

  // Module 7: Responsive Design
  {
    id: 'tw-l7-1',
    slug: 'breakpoint-prefixes',
    moduleNumber: 7,
    lessonNumberInModule: 1,
    title: { en: 'Mobile-First Breakpoint Prefixes (sm, md, lg, xl)', km: 'Mobile-First Breakpoints (sm, md, lg, xl, 2xl)' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Tailwind uses a mobile-first responsive design philosophy. Unprefixed utilities apply on all screen sizes, while breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) apply at specified screen widths and above.',
      km: 'Tailwind ប្រើប្រាស់ទស្សនវិជ្ជា Mobile-First ៖ Class ធម្មតាគ្មាន Prefix អនុវត្តលើ Mobile ជា Default, ចំណែក Class មាន Breakpoint Prefixes (`sm:`, `md:`, `lg:`, `xl:`) ចាប់ផ្តើមអនុវត្តចាប់ពីទំហំអក្រង់នោះឡើងទៅ។'
    },
    tutorial: {
      en: '✨ Tailwind Default Breakpoints:\n- `sm:` -> min-width: 640px (large phones)\n- `md:` -> min-width: 768px (tablets)\n- `lg:` -> min-width: 1024px (laptops)\n- `xl:` -> min-width: 1280px (desktops)\n- `2xl:` -> min-width: 1536px (large screens)',
      km: '✨ កម្រិត Breakpoint ក្នុង Tailwind ៖\n- `sm:` (>= 640px)\n- `md:` (>= 768px)\n- `lg:` (>= 1024px)\n- `xl:` (>= 1280px)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <div class="max-w-md mx-auto p-6 rounded-2xl bg-amber-500 sm:bg-teal-600 md:bg-indigo-600 lg:bg-rose-600 text-center transition-colors duration-500 shadow-2xl">
    <div class="text-xs font-mono font-bold uppercase mb-1">Resize browser to test</div>
    <h3 class="text-xl font-bold">
      <span class="block sm:hidden">Mobile (< 640px) 🟡</span>
      <span class="hidden sm:block md:hidden">Small (>= 640px) 🟢</span>
      <span class="hidden md:block lg:hidden">Medium (>= 768px) 🔵</span>
      <span class="hidden lg:block">Large (>= 1024px) 🔴</span>
    </h3>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Mobile-First Philosophy', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Designing mobile-first ensures fast loading speeds and zero horizontal scrolling bugs on smartphones.',
        km: 'ការរចនា Mobile-First ធានាថាកម្មវិធីដំណើការលឿន និងគ្មាន Bug រំកិលផ្ដេកលើទូរស័ព្ទដៃ។'
      }
    },
    practiceExercise: {
      question: { en: 'Set background to red on mobile and green on medium screens (md:).', km: 'កំណត់ Background ជាពណ៌ក្រហមលើ Mobile និងពណ៌បៃតងលើ Medium screens (md:)។' },
      solution: 'class="bg-red-500 md:bg-green-500"'
    },
    quizQuestions: [
      {
        id: 'tw-q7-1',
        question: { en: 'What screen width does the `md:` breakpoint prefix target by default?', km: 'តើ `md:` Breakpoint prefix ចាប់ផ្តើមអនុវត្តពីទំហំអក្រង់ប៉ុន្មានឡើងទៅ?' },
        options: [
          { id: 'a', text: { en: '768px and above', km: '768px ឡើងទៅ' }, isCorrect: true },
          { id: 'b', text: { en: '480px and above', km: '480px ឡើងទៅ' }, isCorrect: false }
        ],
        explanation: { en: '`md:` targets screens 768px wide and above.', km: '`md:` ស្មើនឹង min-width: 768px។' }
      }
    ]
  },
  {
    id: 'tw-l7-2',
    slug: 'responsive-layouts-stacked-prefixes',
    moduleNumber: 7,
    lessonNumberInModule: 2,
    title: { en: 'Building Responsive Layouts with Stacked Utilities', km: 'ការបង្កើត Responsive Layouts' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Chain breakpoint prefixes to continuously reshape layout elements as screen size grows: `w-full md:w-1/2 lg:w-1/3` or `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`.',
      km: 'ភ្ជាប់ Breakpoint Prefixes តៗគ្នា ដើមបីផ្លាស់ប្តូររូបរាង Layout តាមទំហំអក្រង់៖ `w-full md:w-1/2 lg:w-1/3` ឬ `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`។'
    },
    tutorial: {
      en: '✨ Responsive Grid Progression:\n`class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"`\n- Mobile: 1 column\n- Tablet: 2 columns\n- Laptop: 3 columns\n- Desktop: 4 columns',
      km: '✨ គំរូ Responsive Grid ៖\n- Mobile: 1 ជួរឈរ (`grid-cols-1`)\n- Tablet: 2 ជួរឈរ (`sm:grid-cols-2`)\n- Laptop/Desktop: 3 ឬ 4 ជួរឈរ (`lg:grid-cols-4`)።'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <!-- Responsive Card Grid -->
  <div class="max-w-2xl mx-auto space-y-3">
    <div class="text-xs font-mono text-teal-400">grid-cols-1 sm:grid-cols-2 lg:grid-cols-3</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center font-bold text-xs">Card 1</div>
      <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center font-bold text-xs">Card 2</div>
      <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center font-bold text-xs">Card 3</div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Product Grid Responsive Scaling', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Responsive grid scaling is used across e-commerce product catalogs to optimize screen real estate on every device.',
        km: 'ការប្រើ Responsive Grid Scaling ត្រូវប្រើលើគេហទំព័រលក់ទំនិញ ដើមបីបង្ហាញទំនិញបានសមរម្យលើគ្រប់ឧបករណ៍។'
      }
    },
    practiceExercise: {
      question: { en: 'Make a div full-width on mobile and half-width on desktop (lg:).', km: 'កំណត់ឲ្យ Div យក full-width លើ Mobile និង half-width លើ Desktop (lg:)។' },
      solution: 'class="w-full lg:w-1/2"'
    },
    quizQuestions: [
      {
        id: 'tw-q7-2',
        question: { en: 'What will `grid-cols-1 md:grid-cols-3` do on a smartphone screen (<640px)?', km: 'តើ `grid-cols-1 md:grid-cols-3` បង្ហាញប៉ុន្មានជួរឈរលើទូរស័ព្ទដៃ?' },
        options: [
          { id: 'a', text: { en: '1 column', km: '1 ជួរឈរ' }, isCorrect: true },
          { id: 'b', text: { en: '3 columns', km: '3 ជួរឈរ' }, isCorrect: false }
        ],
        explanation: { en: 'On screens smaller than 768px (`md`), `grid-cols-1` applies.', km: 'លើអក្រង់ទូរស័ព្ទដៃ (<768px) វាបង្ហាញត្រឹម 1 ជួរឈរ។' }
      }
    ]
  },
  {
    id: 'tw-l7-3',
    slug: 'common-responsive-patterns',
    moduleNumber: 7,
    lessonNumberInModule: 3,
    title: { en: 'Common Responsive UI Patterns', km: 'លំនាំរចនា Responsive UI ពេញនិយម' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Mastering responsive patterns includes collapsing hamburger navigation bars (`hidden md:flex`), responsive flex directions (`flex-col md:flex-row`), and adaptive font scaling (`text-lg md:text-3xl`).',
      km: 'លំនាំ Responsive UI ពេញនិយមរួមមាន៖ Navbar លាក់ជ្រែកលើ Mobile (`hidden md:flex`), ប្តូរទិសដៅ Flex ពីជួរឈរទៅជួរដេក (`flex-col md:flex-row`), និងអក្សររីកធំតាមអក្រង់ (`text-base md:text-2xl`)។'
    },
    tutorial: {
      en: '✨ Responsive Flex Direction Pattern:\n`class="flex flex-col md:flex-row gap-4 items-center"`\n- Mobile: stacked vertically\n- Desktop: aligned horizontally',
      km: '✨ លំនាំ Flex Direction ៖\n`flex-col md:flex-row` ជួយឲ្យព័ត៌មានតម្រៀបចុះក្រោមលើ Mobile និងតម្រៀបផ្ដេកលើ Desktop។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <!-- Responsive Layout Card -->
  <div class="max-w-lg mx-auto bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col md:flex-row items-center gap-6 shadow-2xl">
    <div class="size-20 bg-gradient-to-tr from-teal-400 to-indigo-600 rounded-2xl flex items-center justify-center font-bold text-xl shrink-0">
      UI
    </div>
    <div class="space-y-2 text-center md:text-left">
      <h3 class="text-xl font-bold text-white">
        Responsive Direction Card
      </h3>
      <p class="text-xs text-slate-400 leading-relaxed">
        កាតនេះមាន 'flex-col md:flex-row'! លើទូរស័ព្ទវាបង្ហាញជាជួរឈរ និងតម្រឹមចំកណ្តាល ប៉ុន្តែលើ Desktop វាបង្ហាញជាជួរដេក។
      </p>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Adaptive Component Layouts', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Combining `flex-col md:flex-row` powers user profile cards, product listings, and blog article teasers across all viewports.',
        km: 'លំនាំ `flex-col md:flex-row` ត្រូវបានប្រើប្រាស់លើ Profile Cards និងអត្ថបទព័ត៌មាន។'
      }
    },
    practiceExercise: {
      question: { en: 'Stack elements vertically on mobile and horizontally on medium screens.', km: 'តម្រៀប Element ជាជួរឈរលើ Mobile និងជួរដេកលើ Medium screens (md:)។' },
      solution: 'class="flex flex-col md:flex-row"'
    },
    quizQuestions: [
      {
        id: 'tw-q7-3',
        question: { en: 'Which combination of classes switches a flex container from vertical stack on mobile to horizontal on desktop?', km: 'តើ Class មួយណាដូរ Flex container ពីជួរឈរលើ Mobile ទៅជួរដេកលើ Desktop?' },
        options: [
          { id: 'a', text: { en: 'flex-col md:flex-row', km: 'flex-col md:flex-row' }, isCorrect: true },
          { id: 'b', text: { en: 'flex-row md:flex-col', km: 'flex-row md:flex-col' }, isCorrect: false }
        ],
        explanation: { en: '`flex-col` stacks vertically by default, `md:flex-row` switches to horizontal at 768px.', km: '`flex-col md:flex-row` ប្តូរពីជួរឈរទៅជួរដេកលើ Desktop។' }
      }
    ]
  },

  // Module 8: State Variants
  {
    id: 'tw-l8-1',
    slug: 'hover-focus-active-states',
    moduleNumber: 8,
    lessonNumberInModule: 1,
    title: { en: 'Hover, Focus & Active Variants', km: ' Hover, Focus & Active States' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Style element interactive states using state prefixes: `hover:` (mouse hover), `focus:` (element focus/tabbing), `active:` (mouse click down), and `focus-visible:` (keyboard navigation focus outline).',
      km: 'បន្ថែមអន្តរកម្មលើ Element ដោយប្រើប្រាស់ State Prefixes ៖ `hover:` (ពេលដាក់ Mouse លើ), `focus:` (ពេលចុច Select ឬ Tab), `active:` (ពេលចុចឃាត់ Mouse) និង `focus:ring-2` (បន្ថែម Outline ជុំវិញ)។'
    },
    tutorial: {
      en: '✨ Interactive State Combination:\n`class="bg-indigo-600 hover:bg-indigo-500 active:scale-95 focus:ring-2 focus:ring-indigo-400 transition"`',
      km: '✨ ឧទាហរណ៍ Button State ៖\n- `hover:bg-indigo-500` (ប្តូរពណ៌ពេលដាក់ Mouse លើ)\n- `active:scale-95` (រួញតូចបន្តិចពេលចុច)\n- `focus:ring-2` (បង្ហាញរង្វង់ព័ទ្ធជុំវិញពេល Focus)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <div class="max-w-xs mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-4">
    <h3 class="text-lg font-bold text-white">Interactive States</h3>
    <button class="w-full py-3 px-4 bg-teal-600 hover:bg-teal-500 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-400 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-teal-600/30">
      ចុចសាកល្បង Hover & Active
    </button>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Tactile Micro-interactions', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Combining `hover:bg-opacity-90` with `active:scale-95` gives web apps tactile, native mobile app responsiveness.',
        km: 'ការបន្ថែម `active:scale-95` លើប៊ូតុងផ្តល់អារម្មណ៍ឆ្លើយតបដូច Native Mobile App។'
      }
    },
    practiceExercise: {
      question: { en: 'Change button background color on hover and shrink scale slightly on click (active:).', km: 'ប្តូរពណ៌ Background ពេល Hover និងរួញទំហំបន្តិចពេល Active ( active:scale-95)។' },
      solution: 'class="hover:bg-indigo-500 active:scale-95"'
    },
    quizQuestions: [
      {
        id: 'tw-q8-1',
        question: { en: 'Which prefix applies styles specifically when an element is hovered with a mouse?', km: 'តើ Prefix មួយណាដែលអនុវត្ត Style ពេល Mouse នៅពីលើ Element?' },
        options: [
          { id: 'a', text: { en: 'hover:', km: 'hover:' }, isCorrect: true },
          { id: 'b', text: { en: 'focus:', km: 'focus:' }, isCorrect: false }
        ],
        explanation: { en: '`hover:` targets mouse hover state.', km: '`hover:` ប្រើសម្រាប់ Mouse hover state។' }
      }
    ]
  },
  {
    id: 'tw-l8-2',
    slug: 'disabled-and-form-states',
    moduleNumber: 8,
    lessonNumberInModule: 2,
    title: { en: 'Disabled & Form State Variants', km: 'Disabled & Form States' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Tailwind provides built-in variants for HTML form states: `disabled:` (inactive inputs/buttons), `required:`, `invalid:`, `checked:`, and `read-only:`.',
      km: 'Tailwind មាន Variants សម្រាប់ទម្រង់ Form៖ `disabled:` (ពេល Input/Button ត្រូវបានបិទ), `required:`, `invalid:` (ពេលបំពេញខុសលក្ខខណ្ឌ validation) និង `checked:` (សម្រាប់ Checkbox)។'
    },
    tutorial: {
      en: '✨ Disabled Button Shorthand:\n`class="disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-700"`\n\n✨ Invalid Input Shorthand:\n`class="invalid:border-rose-500 invalid:text-rose-400"`',
      km: '✨ ឧទាហរណ៍ Disabled Button ៖\n`disabled:opacity-50 disabled:cursor-not-allowed` (ធ្វើឲ្យប៊ូតុងប្រផេះថ្លា និងមិនអាចចុចបាន)។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <div class="max-w-xs mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
    <h3 class="text-sm font-bold text-white">Form States Demo</h3>
    <!-- Email input with invalid state -->
    <input 
      type="email" 
      placeholder="បញ្ចូលអុីម៉ែល..." 
      value="invalid-email"
      class="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500 invalid:border-rose-500 invalid:text-rose-400"
    />
    <!-- Disabled Button -->
    <button disabled class="w-full py-2.5 bg-indigo-600 text-xs font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed">
      Submit (Disabled)
    </button>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Accessible Form Feedback', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Using `disabled:cursor-not-allowed` paired with `disabled:opacity-50` prevents double form submission bugs.',
        km: 'ការប្រើ `disabled:cursor-not-allowed` ការពារអ្នកប្រើប្រាស់មិនឲ្យចុច Submit Form ស្ទួនពីរដង។'
      }
    },
    practiceExercise: {
      question: { en: 'Apply opacity 50% and cursor-not-allowed when a button is disabled.', km: 'កំណត់ Opacity 50% និង cursor-not-allowed ពេល Button ស្ថិតក្នុងស្ថានភាព disabled។' },
      solution: 'class="disabled:opacity-50 disabled:cursor-not-allowed"'
    },
    quizQuestions: [
      {
        id: 'tw-q8-2',
        question: { en: 'Which prefix styles an input element when its value fails HTML form validation?', km: 'តើ Prefix មួយណាដែលកំណត់ Style លើ Input ពេលបញ្ចូលទិន្នន័យខុស លក្ខខណ្ឌ?' },
        options: [
          { id: 'a', text: { en: 'invalid:', km: 'invalid:' }, isCorrect: true },
          { id: 'b', text: { en: 'error:', km: 'error:' }, isCorrect: false }
        ],
        explanation: { en: '`invalid:` targets elements that fail HTML validation rules.', km: '`invalid:` ប្រើពេល Input ខុស Validation។' }
      }
    ]
  },
  {
    id: 'tw-l8-3',
    slug: 'group-and-peer-variants',
    moduleNumber: 8,
    lessonNumberInModule: 3,
    title: { en: 'Group & Peer Variants', km: 'Group & Peer Variants (group-hover, peer-focus)' },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Style target child elements based on parent state using `group` and `group-hover:`, or style a sibling element based on a sibling form input state using `peer` and `peer-focus:`.',
      km: '`group` & `group-hover:` អនុញ្ញាតឲ្យអ្នកប្តូរ Style នៃកូនៗពេលរំកិល Mouse លើប្រអប់ Parent, ចំណែក `peer` & `peer-focus:` ប្តូរ Style នៃ Element ជិតខាង (Sibling) ពេល Input ត្រូវបាន Focus។'
    },
    tutorial: {
      en: '✨ Group Hover Pattern:\nParent: `class="group ..."`\nChild Icon: `class="text-slate-400 group-hover:text-teal-400 transition"`\n\n✨ Peer Focus Pattern:\nInput: `class="peer ..."`\nFloating Label: `class="peer-focus:text-teal-400 ..."`',
      km: '✨ គំរូ Group Hover ៖\n- Parent Container: ដាក់ `group`\n- Child Icon: ដាក់ `group-hover:text-teal-400` (ពេល Hover លើ Parent, Icon នឹងប្តូរពណ៌)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <div class="max-w-xs mx-auto space-y-4">
    <div class="text-xs font-mono text-teal-400">group-hover Card Demo</div>
    <!-- Parent Group Container -->
    <div class="group bg-slate-900 border border-slate-800 hover:border-teal-500/50 p-4 rounded-2xl transition-all duration-300 cursor-pointer shadow-xl">
      <div class="flex items-center space-x-3">
        <div class="size-10 bg-slate-800 group-hover:bg-teal-500 text-slate-400 group-hover:text-slate-950 font-bold rounded-xl flex items-center justify-center transition-colors">
          →
        </div>
        <div>
          <h4 class="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
            Hover លើប្រអប់នេះ
          </h4>
          <p class="text-xs text-slate-400">កូនៗប្តូរពណ៌តាម Parent</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Card Arrow Animations & Floating Labels', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Using `group-hover:translate-x-1` creates smooth arrow sliding effects on feature card hover states.',
        km: 'ការប្រើ `group-hover:translate-x-1` បង្កើតចលនារំកិលព្រួញ ពេលអ្នកប្រើយ៉ក Mouse លើកាត។'
      }
    },
    practiceExercise: {
      question: { en: 'Add `group` to a parent container and make an arrow icon move right on group hover.', km: 'បន្ថែម `group` លើ Parent និងធ្វើឲ្យ Icon ដើរទៅស្តាំពេល group hover (`group-hover:translate-x-1`)។' },
      solution: 'Parent: class="group", Icon: class="group-hover:translate-x-1"'
    },
    quizQuestions: [
      {
        id: 'tw-q8-3',
        question: { en: 'Which class must be placed on the parent container to enable `group-hover:` on child elements?', km: 'តើ Class មួយណាដែលត្រូវដាក់លើ Parent ដើមបីប្រើប្រាស់ `group-hover:` លើកូនៗ?' },
        options: [
          { id: 'a', text: { en: 'group', km: 'group' }, isCorrect: true },
          { id: 'b', text: { en: 'parent', km: 'parent' }, isCorrect: false }
        ],
        explanation: { en: 'The `group` class marks the parent context.', km: 'ត្រូវដាក់ Class `group` លើ Parent ជានិច្ច។' }
      }
    ]
  },

  // Module 9: Customizing Tailwind
  {
    id: 'tw-l9-1',
    slug: 'tailwind-config-structure',
    moduleNumber: 9,
    lessonNumberInModule: 1,
    title: { en: 'The tailwind.config.js File Structure', km: 'រចនាសម្ព័ន្ធឯកសារ tailwind.config.js' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The `tailwind.config.js` file configures theme colors, fonts, screens, spacing, content purge paths, and plugins in production Tailwind projects.',
      km: 'ឯកសារ `tailwind.config.js` ជាមជ្ឈមណ្ឌលកំណត់ Configuration នៃ Tailwind ដូចជា ពណ៌ផ្ទាល់ខ្លួន, Fonts, Breakpoints, និង Content paths សម្រាប់ Purging CSS។'
    },
    tutorial: {
      en: '✨ Typical tailwind.config.js:\n```javascript\nmodule.exports = {\n  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],\n  theme: {\n    extend: {\n      colors: {\n        brand: "#0f766e",\n      },\n    },\n  },\n  plugins: [],\n};\n```',
      km: '✨ រចនាសម្ព័ន្ធ tailwind.config.js ៖\n- `content`: កំណត់ Path នៃ File HTML/React ដើមបីឲ្យ Tailwind ស្វែងរក Class មកបង្កើត CSS File។\n- `theme.extend`: បន្ថែមពណ៌ ឬ Font ផ្ទាល់ខ្លួនដោយមិនលុបប្រព័ន្ធពណ៌ដើមចោល។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Inline Config Script for Play CDN -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            khmergold: '#d97706',
            brandteal: '#0d9488',
          }
        }
      }
    }
  </script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <div class="max-w-xs mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-3">
    <span class="text-xs font-bold uppercase tracking-wider text-khmergold bg-amber-950/40 px-3 py-1 rounded-full border border-amber-800/50">
      Custom Config Color
    </span>
    <h3 class="text-lg font-bold text-white">tailwind.config.js</h3>
    <button class="w-full py-2.5 bg-brandteal hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition">
      .bg-brandteal Button
    </button>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Brand Design Systems', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Configuring brand colors inside `tailwind.config.js` allows company teams to use classes like `bg-brand-primary` everywhere.',
        km: 'ការកំណត់ពណ៌ប្រចាំក្រុមហ៊ុនក្នុង `tailwind.config.js` ជួយឲ្យក្រុមការងារប្រើ Class ដូចជា `bg-brand` គ្រប់កន្លែង។'
      }
    },
    practiceExercise: {
      question: { en: 'Where do you add custom color extensions in `tailwind.config.js`?', km: 'តើត្រូវបន្ថែម Custom color ត្រង់ផ្នែកណា ក្នុង `tailwind.config.js`?' },
      solution: 'theme.extend.colors'
    },
    quizQuestions: [
      {
        id: 'tw-q9-1',
        question: { en: 'Where inside `tailwind.config.js` should you declare custom colors without overwriting Tailwind default palette?', km: 'តើត្រូវប្រកាស Custom color ក្នុងផ្នែកណាដើមបីកុំឲ្យបាត់បង់ពណ៌ដើមរបស់ Tailwind?' },
        options: [
          { id: 'a', text: { en: 'theme.extend.colors', km: 'theme.extend.colors' }, isCorrect: true },
          { id: 'b', text: { en: 'theme.colors', km: 'theme.colors' }, isCorrect: false }
        ],
        explanation: { en: '`theme.extend` preserves default utilities while adding new custom tokens.', km: '`theme.extend` បន្ថែម Token ថ្មីដោយមិនលុប Token ដើមឡើយ។' }
      }
    ]
  },
  {
    id: 'tw-l9-2',
    slug: 'extending-the-theme',
    moduleNumber: 9,
    lessonNumberInModule: 2,
    title: { en: 'Extending Theme (Custom Colors, Fonts, Spacing)', km: 'Extending Theme (Custom Colors & Fonts)' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Extend your Tailwind theme with custom font families, custom pixel/rem spacing, custom shadows, and custom keyframe animation definitions inside `tailwind.config.js`.',
      km: 'ពង្រីកសមត្ថភាព Theme ដោយបន្ថែម Font ខ្មែរ/អង់គ្លេសផ្ទាល់ខ្លួន (`fontFamily`), Custom Spacing, និង Custom Shadows ក្នុង `theme.extend`។'
    },
    tutorial: {
      en: '✨ Custom Font Family Config:\n```javascript\ntheme: {\n  extend: {\n    fontFamily: {\n      serif: ["Playfair Display", "serif"],\n      khmer: ["Kantumruy Pro", "sans-serif"],\n    }\n  }\n}\n```',
      km: '✨ ឧទាហរណ៍ Config Custom Font ៖\n- `fontFamily: { khmer: ["Kantumruy Pro", "sans-serif"] }`\n- ប្រើប្រាស់ក្នុង HTML: `class="font-khmer"`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            khmer: ['"Kantumruy Pro"', 'sans-serif'],
          }
        }
      }
    }
  </script>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <div class="max-w-xs mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-3 font-khmer">
    <span class="text-xs font-bold text-amber-400 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-800">
      Font-Khmer Extended
    </span>
    <h3 class="text-xl font-bold text-white">
      អក្សរពុម្ព Kantumruy Pro
    </h3>
    <p class="text-xs text-slate-300 leading-relaxed">
      អត្ថបទនេះប្រើប្រាស់ Custom Font Family 'font-khmer' ដែលបានបន្ថែមក្នុង Config!
    </p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Typography Design Systems', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Configuring custom Khmer typography inside `tailwind.config.js` ensures consistent text rendering across all app pages.',
        km: 'ការកំណត់ Custom Khmer Font ក្នុង Config ធានាថាគេហទំព័របង្ហាញអក្សរខ្មែរស្អាតបាតលើគ្រប់ Browser។'
      }
    },
    practiceExercise: {
      question: { en: 'How do you apply a custom font family named `khmer` to an element?', km: 'តើត្រូវប្រើ Class មួយណាដើមបីអនុវត្ត Custom font ឈ្មោះ `khmer`?' },
      solution: 'class="font-khmer"'
    },
    quizQuestions: [
      {
        id: 'tw-q9-2',
        question: { en: 'Which configuration property extends default font families in Tailwind?', km: 'តើ Configuration property មួយណាសម្រាប់បន្ថែម Font family ថ្មី?' },
        options: [
          { id: 'a', text: { en: 'theme.extend.fontFamily', km: 'theme.extend.fontFamily' }, isCorrect: true },
          { id: 'b', text: { en: 'theme.extend.fonts', km: 'theme.extend.fonts' }, isCorrect: false }
        ],
        explanation: { en: '`fontFamily` defines custom font stack aliases.', km: '`fontFamily` ប្រើប្រាស់សម្រាប់កំណត់ Font stacks។' }
      }
    ]
  },
  {
    id: 'tw-l9-3',
    slug: 'custom-utility-classes-at-layer',
    moduleNumber: 9,
    lessonNumberInModule: 3,
    title: { en: 'Adding Custom Classes with @layer & @apply', km: 'Adding Custom Classes with @layer & @apply' },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'In CSS stylesheets, use `@layer components` or `@layer utilities` with the `@apply` directive to group repetitive utility classes into reusable custom class abstractions (e.g. `.btn-primary`).',
      km: 'ក្នុង CSS file អ្នកអាចប្រើ `@layer components` និង `@apply` ដើមបីបង្រួម Class ច្រើនៗចូលទៅជា Class ដាច់ដោយឡែកមួយសម្រាប់ប្រើឡើងវិញ (ដូចជា `.btn-primary`)។'
    },
    tutorial: {
      en: '✨ Reusable Component Class with @apply:\n```css\n@layer components {\n  .btn-primary {\n    @apply px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl transition shadow-md;\n  }\n}\n```',
      km: '✨ របៀបសរសេរ @layer និង @apply ៖\n```css\n@layer components {\n  .btn-primary {\n    @apply px-4 py-2 bg-indigo-600 text-white rounded-xl;\n  }\n}\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <style type="text/tailwindcss">
    @layer components {
      .btn-custom {
        @apply w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-500 active:scale-95 text-white font-bold text-xs rounded-xl transition shadow-lg shadow-teal-600/30;
      }
    }
  </style>
</head>
<body class="bg-slate-950 text-white min-h-screen p-6 font-sans">
  <div class="max-w-xs mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-3">
    <div class="text-xs font-mono text-teal-400">@layer components & @apply</div>
    <h3 class="text-lg font-bold text-white">Custom Class Abstraction</h3>
    <!-- Clean HTML using .btn-custom -->
    <button class="btn-custom">
      .btn-custom Reusable Button
    </button>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Clean Reusable UI Components', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Using `@apply` inside component layers keeps HTML templates readable when styling complex forms or buttons with dozens of utilities.',
        km: 'ការប្រើ `@apply` ជួយសម្រួលដល់ការសរសេរ Class វែងៗស្ទួនគ្នាច្រើនដងឲ្យទៅជា Class មួយខ្លី។'
      }
    },
    practiceExercise: {
      question: { en: 'Which directive imports Tailwind utility classes into a custom CSS rule?', km: 'តើ Directive មួយណាដែលនាំចូល Tailwind utility classes ទៅសរសេរក្នុង CSS rule?' },
      solution: '@apply'
    },
    quizQuestions: [
      {
        id: 'tw-q9-3',
        question: { en: 'Which CSS directive allows you to reuse Tailwind utilities inside custom CSS classes?', km: 'តើ Directive មួយណាប្រើសម្រាប់ទាញយក Tailwind utilities មកសរសេរក្នុង Custom class?' },
        options: [
          { id: 'a', text: { en: '@apply', km: '@apply' }, isCorrect: true },
          { id: 'b', text: { en: '@include', km: '@include' }, isCorrect: false }
        ],
        explanation: { en: '`@apply` inline-expands Tailwind utility classes into custom CSS.', km: '`@apply` ប្រើប្រាស់សម្រាប់ទាញយក Utility classes។' }
      }
    ]
  },

  // Module 10: Dark Mode
  {
    id: 'tw-l10-1',
    slug: 'enabling-dark-mode-class-strategy',
    moduleNumber: 10,
    lessonNumberInModule: 1,
    title: { en: 'Enabling Dark Mode (Class Strategy)', km: 'ការកំណត់ Dark Mode (Class Strategy)' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Tailwind dark mode supports two strategies: `media` (system preference default) or `class` (manual toggle by appending `.dark` to `<html>` or `<body>`).',
      km: 'Dark Mode ក្នុង Tailwind មាន ២ វិធីសាស្ត្រ៖ `media` (អាស្រ័យលើ System OS Theme) និង `class` (អនុញ្ញាតឲ្យអ្នកប្រើប្រាស់ចុច Toggle បិទបើកតាមរយៈការបន្ថែម Class `.dark` លើ `<html>`)។'
    },
    tutorial: {
      en: '✨ tailwind.config.js Class Strategy:\n```javascript\nmodule.exports = {\n  darkMode: "class", // Enables class-based dark mode toggle\n}\n```',
      km: '✨ ការប្រកាសក្នុង tailwind.config.js ៖\n`darkMode: "class"` អនុញ្ញាតឲ្យ Toggle Dark Mode តាមរយៈ Class `.dark` លើ `<html>`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km" class="dark">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
    }
  </script>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen p-6 font-sans transition-colors duration-300">
  <div class="max-w-xs mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl text-center space-y-3 shadow-xl">
    <div class="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">darkMode: 'class' strategy</div>
    <h3 class="text-lg font-bold text-slate-900 dark:text-white">Dark Mode Active</h3>
    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
      '<html>' មាន class="dark" ធ្វើឲ្យ Style 'dark:' ដំណើការស្វ័យប្រវត្តិ!
    </p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Manual User Theme Preference', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'The `class` strategy is mandatory when providing users with a theme switch button and persisting choice in localStorage.',
        km: 'វិធីសាស្ត្រ `class` ត្រូវតែប្រើប្រាស់ ពេលបង្កើតប៊ូតុង Toggle Switch Theme និងរក្សាទុកក្នុង LocalStorage។'
      }
    },
    practiceExercise: {
      question: { en: 'Which configuration option enables class-based dark mode?', km: 'តើ Configuration option មួយណាដែលបើកដំណើការ class-based dark mode?' },
      solution: "darkMode: 'class'"
    },
    quizQuestions: [
      {
        id: 'tw-q10-1',
        question: { en: 'Which `darkMode` strategy allows manual toggling via JavaScript class insertion on `<html>`?', km: 'តើ Dark mode strategy មួយណាដែលអនុញ្ញាតឲ្យចុច Toggle បិទបើកតាម Class លើ `<html>`?' },
        options: [
          { id: 'a', text: { en: 'class', km: 'class' }, isCorrect: true },
          { id: 'b', text: { en: 'media', km: 'media' }, isCorrect: false }
        ],
        explanation: { en: '`darkMode: "class"` relies on a `.dark` class on the root element.', km: '`darkMode: "class"` អនុញ្ញាតឲ្យប្តូរ Theme តាមរយៈ Class `.dark`។' }
      }
    ]
  },
  {
    id: 'tw-l10-2',
    slug: 'using-dark-variant-utilities',
    moduleNumber: 10,
    lessonNumberInModule: 2,
    title: { en: 'Using dark: Variant Utilities', km: 'ការប្រើប្រាស់ dark: Variant Utilities' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Prefix any utility with `dark:` to specify custom styles that apply exclusively when dark mode is enabled (e.g. `bg-white dark:bg-slate-900 text-slate-900 dark:text-white`).',
      km: 'ដាក់ `dark:` Prefix ពីមុខ Utility class ណាមួយ ដើមបីឲ្យវាអនុវត្តតែពេល Dark Mode ត្រូវបានបើក (ដូចជា `bg-white dark:bg-slate-900 text-slate-900 dark:text-white`)។'
    },
    tutorial: {
      en: '✨ Dual Light/Dark Styling Pattern:\n`class="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-800"`',
      km: '✨ គំរូសរសេរ Dual Light/Dark Theme ៖\n- Light Mode: `bg-white text-slate-900`\n- Dark Mode: `dark:bg-slate-900 dark:text-white`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km" class="dark">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { darkMode: 'class' }
  </script>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen p-6 font-sans">
  <div class="max-w-xs mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl text-center space-y-3 shadow-xl">
    <div class="size-12 mx-auto rounded-full bg-amber-100 dark:bg-indigo-950 text-amber-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg">
      🌙
    </div>
    <h3 class="text-base font-bold text-slate-900 dark:text-white">
      dark: Variant Utilities
    </h3>
    <p class="text-xs text-slate-600 dark:text-slate-400">
      កំណត់ពណ៌សមស្របទាំង Light Mode និង Dark Mode យ៉ាងងាយស្រួល!
    </p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Seamless Dark Mode Support', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'In modern SaaS applications, specifying `dark:` classes ensures all card, input, and modal borders adapt smoothly without flash bugs.',
        km: 'ការប្រើប្រាស់ `dark:` លើកាត និង Form Inputs ធានាថាប្រព័ន្ធ Theme ដំណើការរលូនលើគ្រប់ Component។'
      }
    },
    practiceExercise: {
      question: { en: 'Set background to white in light mode and dark slate (slate-900) in dark mode.', km: 'កំណត់ Background ជាពណ៌សក្នុង Light mode និង slate-900 ក្នុង Dark mode។' },
      solution: 'class="bg-white dark:bg-slate-900"'
    },
    quizQuestions: [
      {
        id: 'tw-q10-2',
        question: { en: 'Which prefix applies styles only when dark mode is active?', km: 'តើ Prefix មួយណាដែលអនុវត្ត Style តែពេល Dark mode សកម្ម?' },
        options: [
          { id: 'a', text: { en: 'dark:', km: 'dark:' }, isCorrect: true },
          { id: 'b', text: { en: 'night:', km: 'night:' }, isCorrect: false }
        ],
        explanation: { en: '`dark:` targets dark mode state.', km: '`dark:` ប្រើប្រាស់សម្រាប់ Dark mode។' }
      }
    ]
  },
  {
    id: 'tw-l10-3',
    slug: 'toggling-dark-mode-js-snippet',
    moduleNumber: 10,
    lessonNumberInModule: 3,
    title: { en: 'Toggling Dark Mode with JS', km: 'ការបង្កើតប៊ូតុង Toggle Dark Mode ជាមួយ JavaScript' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Toggle dark mode dynamically in JavaScript using `document.documentElement.classList.toggle("dark")`, and persist the user preference using `localStorage.setItem("theme", "dark")`.',
      km: 'ប្តូរ Theme ស្វ័យប្រវត្តតាមរយះ JavaScript ៖ ប្រើ `document.documentElement.classList.toggle("dark")` ដើមបីបន្ថែម/លុប Class `.dark` និងរក្សាទុកជម្រើសក្នុង `localStorage`។'
    },
    tutorial: {
      en: '✨ Dark Mode Toggle Snippet:\n```javascript\nfunction toggleDarkMode() {\n  document.documentElement.classList.toggle("dark");\n}\n```',
      km: '✨ កូដ JavaScript Toggle Theme ៖\n`document.documentElement.classList.toggle("dark");`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km" class="dark">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { darkMode: 'class' }
  </script>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen p-6 font-sans transition-colors duration-300">
  <div class="max-w-xs mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl text-center space-y-4 shadow-xl">
    <h3 class="text-base font-bold text-slate-900 dark:text-white">
      Live Theme Switcher
    </h3>
    <p class="text-xs text-slate-600 dark:text-slate-400">
      ចុចប៊ូតុងខាងក្រោមដើមបីផ្លាស់ប្តូររវាង Light Mode និង Dark Mode!
    </p>
    <button 
      onclick="document.documentElement.classList.toggle('dark')"
      class="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition shadow-lg shadow-indigo-600/30"
    >
      ☀️ / 🌙 Toggle Theme
    </button>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'User Theme Preference Persistence', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Combining JS toggle with LocalStorage prevents "theme flashing" when users refresh or navigate pages.',
        km: 'ការប្រើប្រាស់ JS Toggle ជាមួយ LocalStorage ការពារកុំឲ្យអក្រង់ភ្លឺផ្លាតពេលអ្នកប្រើប្រាស់ Refresh ទំព័រ។'
      }
    },
    practiceExercise: {
      question: { en: 'What JavaScript code toggles the `dark` class on the root `<html>` element?', km: 'តើកូដ JavaScript មួយណាសម្រាប់ Toggle class `dark` លើ `<html>`?' },
      solution: 'document.documentElement.classList.toggle("dark")'
    },
    quizQuestions: [
      {
        id: 'tw-q10-3',
        question: { en: 'Which DOM element should hold the `.dark` class when using `darkMode: "class"` in Tailwind?', km: 'តើ DOM element មួយណាដែលត្រូវផ្ទុក Class `.dark` ពេលប្រើប្រាស់ class strategy?' },
        options: [
          { id: 'a', text: { en: 'document.documentElement (<html> tag)', km: 'document.documentElement (<html> tag)' }, isCorrect: true },
          { id: 'b', text: { en: 'document.body (<body> tag only)', km: 'document.body (<body> tag only)' }, isCorrect: false }
        ],
        explanation: { en: 'The root `<html>` element is standard for class strategy.', km: '`<html>` (root element) ជាទីតាំងស្តង់ដារសម្រាប់ Class `.dark`។' }
      }
    ]
  }
];
