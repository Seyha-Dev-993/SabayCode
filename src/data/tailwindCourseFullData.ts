import { FrontendCourse, FrontendQuizQuestion } from '../types/frontendClass';
import { TAILWIND_LESSONS_PART1 } from './tailwindLessonsPart1';
import { TAILWIND_LESSONS_PART2 } from './tailwindLessonsPart2';

const TAILWIND_CHEAT_SHEET = [
  {
    concept: 'Tailwind Spacing Scale (4 = 1rem / 16px)',
    code: `<div class="m-4 p-6 gap-3 min-h-12 w-64"></div>`,
    explanation: {
      en: 'In Tailwind, 1 unit equals 0.25rem (4px). Thus p-4 is 1rem (16px), p-2 is 0.5rem (8px), and p-8 is 2rem (32px).',
      km: 'ក្នុង Tailwind 1 unit ស្មើនឹង 0.25rem (4px)។ ដូចនេះ p-4 ស្មើ 1rem (16px), p-2 ស្មើ 0.5rem (8px) និង p-8 ស្មើ 2rem (32px)។'
    }
  },
  {
    concept: 'Flexbox Layout & Centering',
    code: `<div class="flex items-center justify-between gap-4 p-4 bg-slate-900 rounded-2xl">
  <div class="flex items-center space-x-3">
    <div class="size-10 bg-teal-500 rounded-full shrink-0"></div>
    <span class="font-bold text-white">Flex Row</span>
  </div>
  <button class="px-3 py-1.5 bg-teal-600 text-xs font-bold rounded-xl">Action</button>
</div>`,
    explanation: {
      en: 'Combine `flex items-center justify-between` for standard headers, toolbars, and cards with automatic gap spacing.',
      km: 'រួមបញ្ចូល `flex items-center justify-between` សម្រាប់ Header និង Cards ដែលមានតម្រឹមស្វ័យប្រវត្តិ។'
    }
  },
  {
    concept: 'Responsive CSS Grid',
    code: `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="col-span-1 lg:col-span-2 bg-slate-900 p-4 rounded-xl">Main</div>
  <div class="bg-slate-900 p-4 rounded-xl">Sidebar 1</div>
  <div class="bg-slate-900 p-4 rounded-xl">Sidebar 2</div>
</div>`,
    explanation: {
      en: 'Define responsive column grids (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`) and span elements across columns (`col-span-2`).',
      km: 'កំណត់ Responsive Grid Columns (`grid-cols-1 md:grid-cols-3`) និងពង្រីកប្រអប់ក្តោបយកច្រើនជួរឈរ (`col-span-2`)។'
    }
  },
  {
    concept: 'Mobile-First Breakpoint Prefixes',
    code: `<div class="w-full md:w-1/2 lg:w-1/3 text-sm md:text-base lg:text-xl p-4 md:p-8">
  Responsive Element
</div>`,
    explanation: {
      en: 'Tailwind is mobile-first: unprefixed classes apply to mobile, while `sm:` (>=640px), `md:` (>=768px), and `lg:` (>=1024px) trigger on larger viewports.',
      km: 'Tailwind គិតពី Mobile មុនគេ៖ Class គ្មាន Prefix អនុវត្តលើ Mobile, ហើយ `sm:` (640px), `md:` (768px) និង `lg:` (1024px) អនុវត្តលើអក្រង់ធំ។'
    }
  },
  {
    concept: 'Interactive State Variants',
    code: `<button class="bg-indigo-600 hover:bg-indigo-500 active:scale-95 focus:ring-2 focus:ring-indigo-400 disabled:opacity-50 transition shadow-lg">
  Click Me
</button>`,
    explanation: {
      en: 'Chain state variants like `hover:`, `focus:`, `active:`, `disabled:`, and `group-hover:` for smooth micro-interactions.',
      km: 'ភ្ជាប់ State variants ដូចជា `hover:`, `focus:`, `active:`, `disabled:` ដើមបីបង្កើត Micro-interactions ដ៏រលូន។'
    }
  },
  {
    concept: 'Class-Based Dark Mode',
    code: `<div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-800">
  Dark Mode Component
</div>`,
    explanation: {
      en: 'When `darkMode: "class"` is set in configuration, appending `.dark` to `<html>` instantly activates all `dark:` utility variants.',
      km: 'ពេលបើក `darkMode: "class"` ក្នុង Config, គ្រាន់តែបន្ថែម Class `.dark` លើ `<html>` វានឹងបើកដំណើការគ្រប់ `dark:` variants ទាំងអស់។'
    }
  }
];

const TAILWIND_QUIZ: FrontendQuizQuestion[] = [
  {
    id: 'q-tw-full-1',
    question: {
      en: 'In Tailwind CSS default scale, what exact pixel value does `p-6` correspond to?',
      km: 'ក្នុង Tailwind CSS scale ធម្មតា តើ `p-6` មានតម្លៃស្មើនឹងប៉ុន្មាន Pixel?'
    },
    options: [
      { id: '1', text: { en: '24px (1.5rem)', km: '24px (1.5rem)' }, isCorrect: true },
      { id: '2', text: { en: '6px', km: '6px' }, isCorrect: false },
      { id: '3', text: { en: '16px (1rem)', km: '16px (1rem)' }, isCorrect: false },
      { id: '4', text: { en: '36px (2.25rem)', km: '36px (2.25rem)' }, isCorrect: false }
    ],
    explanation: {
      en: 'Each Tailwind numeric spacing step is 0.25rem (4px). 6 * 4px = 24px (1.5rem).',
      km: '1 step ក្នុង Tailwind ស្មើ 0.25rem (4px)។ ដូចនេះ 6 * 4px = 24px (1.5rem)។'
    }
  },
  {
    id: 'q-tw-full-2',
    question: {
      en: 'Which class combines horizontal flex alignment and pushes children to extreme opposite ends?',
      km: 'តើ Class មួយណាដែលតម្រឹម Flex items ឲ្យនៅចុងសងខាងរុញច្រានចេញពីគ្នា?'
    },
    options: [
      { id: '1', text: { en: 'justify-between', km: 'justify-between' }, isCorrect: true },
      { id: '2', text: { en: 'justify-center', km: 'justify-center' }, isCorrect: false },
      { id: '3', text: { en: 'items-between', km: 'items-between' }, isCorrect: false },
      { id: '4', text: { en: 'content-around', km: 'content-around' }, isCorrect: false }
    ],
    explanation: {
      en: '`justify-between` sets `justify-content: space-between`.',
      km: '`justify-between` កំណត់ `justify-content: space-between` ក្នុង Flexbox។'
    }
  },
  {
    id: 'q-tw-full-3',
    question: {
      en: 'How does Tailwind apply responsive breakpoint prefixes like `lg:` by default?',
      km: 'តើ Tailwind អនុវត្ត Responsive breakpoint prefixes ដូចជា `lg:` តាមរបៀបណា?'
    },
    options: [
      { id: '1', text: { en: 'Mobile-first (min-width: 1024px and above)', km: 'Mobile-first (min-width: 1024px ឡើងទៅ)' }, isCorrect: true },
      { id: '2', text: { en: 'Desktop-first (max-width: 1024px and below)', km: 'Desktop-first (max-width: 1024px ចុះក្រោម)' }, isCorrect: false },
      { id: '3', text: { en: 'Only applies on tablet screens', km: 'អនុវត្តតែលើ Tablet ប៉ុណ្ណោះ' }, isCorrect: false },
      { id: '4', text: { en: 'Only applies in print media', km: 'អនុវត្តតែពេល Print ឯកសារ' }, isCorrect: false }
    ],
    explanation: {
      en: 'Tailwind breakpoints use min-width media queries (mobile-first). Unprefixed applies to mobile, `lg:` applies at 1024px and above.',
      km: 'Tailwind ប្រើប្រាស់ទស្សនវិជ្ជា Mobile-first ជាមួយ min-width media queries។'
    }
  },
  {
    id: 'q-tw-full-4',
    question: {
      en: 'Which class prevents a flex item (e.g. avatar or icon) from shrinking when flex container space is tight?',
      km: 'តើ Class មួយណាការពារ Flex item (ដូចជា Avatar/Icon) មិនឲ្យរួញតូចពេលតंगលំហ?'
    },
    options: [
      { id: '1', text: { en: 'shrink-0', km: 'shrink-0' }, isCorrect: true },
      { id: '2', text: { en: 'grow-0', km: 'grow-0' }, isCorrect: false },
      { id: '3', text: { en: 'flex-none-shrink', km: 'flex-none-shrink' }, isCorrect: false },
      { id: '4', text: { en: 'no-shrink', km: 'no-shrink' }, isCorrect: false }
    ],
    explanation: {
      en: '`shrink-0` applies `flex-shrink: 0`, preventing items from compressing.',
      km: '`shrink-0` កំណត់ `flex-shrink: 0` ការពារកុំឲ្យ Element រួញតូច។'
    }
  },
  {
    id: 'q-tw-full-5',
    question: {
      en: 'What class allows you to target child elements when hovering over their parent container marked with `group`?',
      km: 'តើ Class មួយណាដែលអនុញ្ញាតឲ្យកំណត់ Style លើកូនៗ ពេល Hover លើ Parent ដែលមាន Class `group`?'
    },
    options: [
      { id: '1', text: { en: 'group-hover:', km: 'group-hover:' }, isCorrect: true },
      { id: '2', text: { en: 'parent-hover:', km: 'parent-hover:' }, isCorrect: false },
      { id: '3', text: { en: 'hover-group:', km: 'hover-group:' }, isCorrect: false },
      { id: '4', text: { en: 'peer-hover:', km: 'peer-hover:' }, isCorrect: false }
    ],
    explanation: {
      en: 'Adding `group` to parent and `group-hover:` to child links their hover state.',
      km: '`group-hover:` ប្រើប្រាស់ជាមួយ Parent ដែលមាន Class `group`។'
    }
  },
  {
    id: 'q-tw-full-6',
    question: {
      en: 'Where inside `tailwind.config.js` should you declare custom colors or font families so you do NOT erase Tailwind default utilities?',
      km: 'តើត្រូវប្រកាស Custom color ក្នុងផ្នែកណា ដើមបីកុំឲ្យបាត់បង់ Default color scale របស់ Tailwind?'
    },
    options: [
      { id: '1', text: { en: 'theme.extend', km: 'theme.extend' }, isCorrect: true },
      { id: '2', text: { en: 'theme.override', km: 'theme.override' }, isCorrect: false },
      { id: '3', text: { en: 'plugins.extend', km: 'plugins.extend' }, isCorrect: false },
      { id: '4', text: { en: 'content.extend', km: 'content.extend' }, isCorrect: false }
    ],
    explanation: {
      en: 'Properties added under `theme.extend` preserve all default Tailwind values.',
      km: '`theme.extend` រក្សាទុកតម្លៃដើម និងបន្ថែមតម្លៃថ្មី។'
    }
  },
  {
    id: 'q-tw-full-7',
    question: {
      en: 'Which CSS directive allows you to bundle multiple Tailwind utility classes into a reusable component rule?',
      km: 'តើ CSS Directive មួយណាដែលអនុញ្ញាតឲ្យបង្រួម Utility classes ច្រើនចូលទៅជា Custom class មួយ?'
    },
    options: [
      { id: '1', text: { en: '@apply', km: '@apply' }, isCorrect: true },
      { id: '2', text: { en: '@include', km: '@include' }, isCorrect: false },
      { id: '3', text: { en: '@extend', km: '@extend' }, isCorrect: false },
      { id: '4', text: { en: '@use', km: '@use' }, isCorrect: false }
    ],
    explanation: {
      en: 'The `@apply` directive inline-expands Tailwind utility classes in custom CSS files.',
      km: '@apply ប្រើប្រាស់សម្រាប់ទាញយក Utility classes ក្នុង CSS file។'
    }
  },
  {
    id: 'q-tw-full-8',
    question: {
      en: 'What snippet toggles dark mode dynamically when using the `darkMode: "class"` configuration?',
      km: 'តើកូដ JavaScript មួយណាដែល Toggle dark mode ពេលប្រើប្រាស់ `darkMode: "class"`?'
    },
    options: [
      { id: '1', text: { en: 'document.documentElement.classList.toggle("dark")', km: 'document.documentElement.classList.toggle("dark")' }, isCorrect: true },
      { id: '2', text: { en: 'document.body.style.darkMode = true', km: 'document.body.style.darkMode = true' }, isCorrect: false },
      { id: '3', text: { en: 'window.setTheme("dark")', km: 'window.setTheme("dark")' }, isCorrect: false },
      { id: '4', text: { en: 'document.querySelector("header").classList.add("dark")', km: 'document.querySelector("header").classList.add("dark")' }, isCorrect: false }
    ],
    explanation: {
      en: 'Toggling `.dark` on `document.documentElement` (`<html>`) enables dark mode across the document.',
      km: 'ការបន្ថែម/លុប Class `.dark` លើ `document.documentElement` (`<html>`) ជាកូដស្តង់ដារ។'
    }
  }
];

export const TAILWIND_COURSE_DATA: FrontendCourse = {
  id: 'tailwind',
  title: { en: 'Tailwind CSS Course', km: 'វគ្គសិក្សា Tailwind CSS' },
  iconName: 'tailwind',
  categoryId: 'styling',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Build rapid production UIs using utility-first classes, flex/grid, responsive breakpoints, state variants, theme customization, and dark mode.',
    km: 'បង្កើត UI លឿនរហ័សដោយប្រើប្រាស់ utility-first classes, flex/grid, responsive design, state variants និង dark mode។'
  },
  summary: {
    en: 'Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center, and bg-indigo-600 to build custom designs directly in HTML markup without writing custom CSS rules.',
    km: 'Tailwind CSS ផ្តល់ Utility classes ដូចជា flex, px-4, text-center, bg-indigo-600 ដើមឌីហ្សាញ UI បានលឿនបំផុតដោយមិនបាច់សរសេរ CSS។'
  },
  estimatedHours: 12,
  lessonCount: 25,
  cheatSheet: TAILWIND_CHEAT_SHEET,
  quiz: TAILWIND_QUIZ,
  capstoneProject: {
    title: { en: 'Rebuilding Personal Bio Page with Tailwind CSS', km: 'គម្រោង Capstone៖ ទំព័រប្រវត្តិរូបផ្ទាល់ខ្លួនជាមួយ Tailwind CSS' },
    description: {
      en: 'Rebuild a full responsive Personal Bio Profile using Tailwind CSS utilities! Incorporate a Flexbox header with avatar, responsive grid skill cards, interactive hover states, micro-interactions, custom brand colors via tailwind.config, and a working dark mode toggle.',
      km: 'បង្កើតទំព័រប្រវត្តិរូប Personal Bio Page ឲ្យមានភាពស្អាតបាត ទំនើប ពណ៌ឆ្លើយតប និងទាក់ទាញលើគ្រប់ទំហំអេក្រង់ដោយប្រើ Tailwind CSS utilities, responsive grid, hover states, និង dark mode toggle!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: '#0d9488',
          }
        }
      }
    }
  </script>
</head>
<body class="bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen p-4 md:p-8 font-sans transition-colors duration-300">
  
  <div class="max-w-2xl mx-auto space-y-6">
    <!-- Header with Dark Mode Toggle -->
    <header class="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
      <div class="flex items-center space-x-3">
        <div class="size-10 bg-brand text-white font-bold rounded-xl flex items-center justify-center">
          SK
        </div>
        <div>
          <h2 class="text-sm font-bold text-slate-900 dark:text-white">សុខ ជា (Sok Chea)</h2>
          <p class="text-xs text-brand font-medium">Frontend UI Specialist</p>
        </div>
      </div>
      <button 
        onclick="document.documentElement.classList.toggle('dark')"
        class="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold rounded-xl transition"
      >
        ☀️ / 🌙 Theme
      </button>
    </header>

    <!-- Bio Card -->
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl space-y-3 shadow-xl">
      <span class="px-3 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 text-xs font-bold rounded-full">
        Tailwind CSS Capstone
      </span>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white">
        អ្នកអភិវឌ្ឍន៍គេហទំព័រ (Frontend Web Developer)
      </h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        សូមស្វាគមន៍មកកាន់ទំព័រប្រវត្តិរូបដែលបង្កើតឡើងដោយប្រើប្រាស់ Tailwind CSS utilities សុទ្ធសាធ! មានលក្ខណៈ Responsive លើគ្រប់ទំហំអេក្រង់ និងមាន Dark mode។
      </p>
    </div>

    <!-- Skills Responsive Grid -->
    <div class="space-y-3">
      <h4 class="text-sm font-bold text-slate-700 dark:text-slate-300">ជំនាញបច្ចេកវិទ្យា (Technical Skills)</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        <div class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand p-4 rounded-2xl transition-all duration-300 shadow-md">
          <div class="size-8 bg-teal-500/10 text-brand font-bold rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            TW
          </div>
          <h5 class="text-xs font-bold text-slate-900 dark:text-white">Tailwind CSS v3</h5>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Utility-first, Flex, Grid & Dark Mode</p>
        </div>

        <div class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 p-4 rounded-2xl transition-all duration-300 shadow-md">
          <div class="size-8 bg-indigo-500/10 text-indigo-500 font-bold rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            JS
          </div>
          <h5 class="text-xs font-bold text-slate-900 dark:text-white">JavaScript ES6+</h5>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">DOM, Events, Async & LocalStorage</p>
        </div>

        <div class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 p-4 rounded-2xl transition-all duration-300 shadow-md sm:col-span-2 md:col-span-1">
          <div class="size-8 bg-amber-500/10 text-amber-500 font-bold rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            UI
          </div>
          <h5 class="text-xs font-bold text-slate-900 dark:text-white">Responsive Design</h5>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Mobile-First UI & Micro-interactions</p>
        </div>

      </div>
    </div>

  </div>

</body>
</html>`
    }
  },
  lessons: [...TAILWIND_LESSONS_PART1, ...TAILWIND_LESSONS_PART2]
};
