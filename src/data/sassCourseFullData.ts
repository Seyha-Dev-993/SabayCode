import { FrontendCourse, FrontendQuizQuestion } from '../types/frontendClass';
import { SASS_LESSONS_PART1 } from './sassLessonsPart1';
import { SASS_LESSONS_PART2 } from './sassLessonsPart2';

const SASS_CHEAT_SHEET = [
  {
    concept: 'Variables ($name)',
    code: `$primary-color: #ec4899;
$font-stack: 'Inter', sans-serif;
$spacing-md: 1rem;

.card {
  background-color: $primary-color;
  font-family: $font-stack;
  padding: $spacing-md;
}`,
    explanation: {
      en: 'Declare reusable values starting with `$`. Modifying the variable updates all occurrences across stylesheets.',
      km: 'ប្រកាសតម្លៃដែលអាចយកមកប្រើឡើងវិញដោយចាប់ផ្តើមពី `$`។ ការប្តូរ Variable នឹងអាប់ដេតគ្រប់កន្លែងទាំងអស់ក្នុង CSS។'
    }
  },
  {
    concept: 'Nesting & Parent Selector (&)',
    code: `.btn {
  background: #3b82f6;
  color: white;

  &:hover {
    background: #2563eb;
  }

  &__icon {
    margin-right: 0.5rem;
  }
}`,
    explanation: {
      en: 'Nest selectors to match HTML hierarchy. The `&` character references the outer parent selector (great for `:hover` and BEM).',
      km: 'សរសេរ Selectors បញ្ចូលគ្នាតាមជាន់ដូច HTML Tree។ សញ្ញា `&` ជំនួសឲ្យ Parent Selector ខាងក្រៅ (ល្អបំផុតសម្រាប់ `:hover` និង BEM)។'
    }
  },
  {
    concept: 'Mixins (@mixin & @include)',
    code: `@mixin flex-center($gap: 1rem) {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: $gap;
}

.nav-container {
  @include flex-center(1.5rem);
}`,
    explanation: {
      en: '`@mixin` defines reusable blocks of CSS declarations with optional arguments. `@include` injects the mixin into a selector rule.',
      km: '`@mixin` បង្កើត Block CSS ជាមួយ Arguments ជម្រើស។ ឯ `@include` ប្រើសម្រាប់ហៅ Mixin នោះមកប្រើក្នុង Selector rule។'
    }
  },
  {
    concept: 'Inheritance & Placeholders (%placeholder & @extend)',
    code: `%card-base {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #1e293b;
}

.card-primary {
  @extend %card-base;
  border-left: 4px solid #ec4899;
}`,
    explanation: {
      en: '`%placeholder` creates a silent base rule that is not compiled unless `@extend`ed. Groups selectors together in output CSS.',
      km: '`%placeholder` បង្កើត Base rule ស្ងាត់ដែលមិន Compile ចេញឡើយ លុះត្រាតែមានការ `@extend`។ វាប្រមូលផ្តុំ Selector ចូលគ្នា។'
    }
  },
  {
    concept: 'Built-in Modules & Functions (sass:color & sass:math)',
    code: `@use "sass:color";
@use "sass:math";

.button {
  width: math.div(100%, 3);
  background-color: color.adjust(#ec4899, $lightness: -10%);
}`,
    explanation: {
      en: 'Modern Sass uses `@use "sass:color"` and `@use "sass:math"` to safely manipulate colors and perform math division without global pollution.',
      km: 'Sass ទំនើបប្រើ `@use "sass:color"` និង `@use "sass:math"` សម្រាប់កែច្នៃពណ៌ និងគណនាលេខដោយសុវត្ថិភាព។'
    }
  },
  {
    concept: 'Common Pitfalls & Mistakes',
    code: `// ❌ DON'T: Over-nesting selectors deeply (4+ levels)
.page { .section { .card { .title { color: red; } } } }

// ✅ DO: Keep nesting flat with BEM
.card__title { color: red; }

// ❌ DON'T: Use raw / for division
width: 100% / 3;

// ✅ DO: Use math.div()
@use "sass:math";
width: math.div(100%, 3);`,
    explanation: {
      en: 'Avoid over-nesting beyond 3 levels deep to prevent high CSS specificity. Always use `math.div()` instead of `/` for division.',
      km: 'ចៀសវាង Nesting លើសពី ៣ ជាន់ដើម្បីការពារ Specificity ខ្ពស់។ ត្រូវប្រើ `math.div()` ជំនួសសញ្ញា `/` សម្រាប់ប្រមាណវិធីចែក។'
    }
  }
];

const SASS_QUIZ: FrontendQuizQuestion[] = [
  {
    id: 'q-sass-full-1',
    question: {
      en: 'What is Sass/SCSS in web development?',
      km: 'តើអ្វីទៅជា Sass/SCSS ក្នុង Web Development?'
    },
    options: [
      { id: '1', text: { en: 'A CSS Preprocessor that compiles extended syntax (variables, mixins, nesting) into standard CSS', km: 'CSS Preprocessor ដែល Compile Syntax បន្ថែម (variables, mixins, nesting) ទៅជា CSS Standard' }, isCorrect: true },
      { id: '2', text: { en: 'A JavaScript database management tool', km: 'ឧបករណ៍ គ្រប់គ្រង Database ក្នុង JavaScript' }, isCorrect: false }
    ],
    explanation: {
      en: 'Sass is a CSS preprocessor tool that must be compiled into standard CSS before browsers can render it.',
      km: 'Sass គឺជា CSS Preprocessor ដែលត្រូវតែ Compile ទៅជា CSS Standard មុននឹងប្រើលើ Browser។'
    }
  },
  {
    id: 'q-sass-full-2',
    question: {
      en: 'Which symbol is used to declare a variable in SCSS?',
      km: 'តើសញ្ញាអ្វីដែលត្រូវប្រើដើម្បីប្រកាស Variable ក្នុង SCSS?'
    },
    options: [
      { id: '1', text: { en: 'The dollar sign $', km: 'សញ្ញាដុល្លារ $' }, isCorrect: true },
      { id: '2', text: { en: 'The at symbol @', km: 'សញ្ញាអ៊ែត @' }, isCorrect: false }
    ],
    explanation: {
      en: 'SCSS variables always begin with a dollar sign `$`.',
      km: 'SCSS Variable តែងតែចាប់ផ្តើមដោយសញ្ញាដុល្លារ `$`។'
    }
  },
  {
    id: 'q-sass-full-3',
    question: {
      en: 'What does the parent selector ampersand (&) represent in a nested rule?',
      km: 'តើសញ្ញា Parent selector (&) តំណាងឲ្យអ្វីក្នុង Nested rule?'
    },
    options: [
      { id: '1', text: { en: 'It references the outer parent selector string', km: 'វា តំណាង ឲ្យ Parent Selector ខាងក្រៅ' }, isCorrect: true },
      { id: '2', text: { en: 'It creates an HTML AND condition', km: 'វា បង្កើត លក្ខខណ្ឌ AND ក្នុង HTML' }, isCorrect: false }
    ],
    explanation: {
      en: 'The ampersand `&` is replaced by the outer parent selector during compilation.',
      km: 'សញ្ញា Ampersand `&` ត្រូវជំនួសដោយ Parent Selector ខាងក្រៅពេល Compile។'
    }
  },
  {
    id: 'q-sass-full-4',
    question: {
      en: 'What will the following SCSS compile to in standard CSS?\n.card { &__title { color: pink; } }',
      km: 'តើកូដ SCSS ខាងក្រោមនឹង Compile ចេញជា CSS Standard អ្វី?\n.card { &__title { color: pink; } }'
    },
    options: [
      { id: '1', text: { en: '.card__title { color: pink; }', km: '.card__title { color: pink; }' }, isCorrect: true },
      { id: '2', text: { en: '.card .card__title { color: pink; }', km: '.card .card__title { color: pink; }' }, isCorrect: false }
    ],
    explanation: {
      en: '`&` appends `__title` directly to `.card`, producing the single class `.card__title`.',
      km: '`&` ភ្ជាប់ `__title` ដោយផ្ទាល់ទៅចុង `.card` បង្កើតបានជា Class `.card__title`។'
    }
  },
  {
    id: 'q-sass-full-5',
    question: {
      en: 'Why do partial SCSS files start with an underscore (e.g. _buttons.scss)?',
      km: 'ហេតុអ្វីបានជាឯកសារ SCSS Partial ចាប់ផ្តើមដោយសញ្ញា Underscore (ឧ. _buttons.scss)?'
    },
    options: [
      { id: '1', text: { en: 'It tells the compiler NOT to output a standalone compiled CSS file for that partial', km: 'វាប្រាប់ Compiler ថាកុំ Compile ឯកសារនេះជា CSS ឯករាជ្យដាច់ដោយឡែក' }, isCorrect: true },
      { id: '2', text: { en: 'It marks the file as read-only', km: 'វា កំណត់ ឯកសារ ថា Read-only' }, isCorrect: false }
    ],
    explanation: {
      en: 'The leading underscore indicates a partial meant to be imported into an entry file like `main.scss`.',
      km: 'សញ្ញា Underscore សម្គាល់ឯកសារជា Partial សម្រាប់ Import បញ្ចូលក្នុង Entry point ប៉ុណ្ណោះ។'
    }
  },
  {
    id: 'q-sass-full-6',
    question: {
      en: 'Which directive imports a module into modern Sass while preserving scope safety?',
      km: 'តើ Directive មួយណាសម្រាប់ Import ម៉ូឌុលចូលក្នុង Sass ទំនើបដោយមានសុវត្ថិភាព Scope?'
    },
    options: [
      { id: '1', text: { en: '@use', km: '@use' }, isCorrect: true },
      { id: '2', text: { en: '@import', km: '@import' }, isCorrect: false }
    ],
    explanation: {
      en: '`@use` loads partials as scoped modules, preventing variable collisions.',
      km: '`@use` អាន Partials ជា Scoped module ការពារកុំឲ្យជាន់ឈ្មោះ Variable គ្នា។'
    }
  },
  {
    id: 'q-sass-full-7',
    question: {
      en: 'How do you invoke a defined @mixin inside a CSS selector rule?',
      km: 'តើអ្នកហៅ @mixin ដែលបានប្រកាសរួចមកប្រើក្នុង CSS Selector យ៉ាងដូចម្តេច?'
    },
    options: [
      { id: '1', text: { en: '@include mixin-name;', km: '@include mixin-name;' }, isCorrect: true },
      { id: '2', text: { en: '@import mixin-name;', km: '@import mixin-name;' }, isCorrect: false }
    ],
    explanation: {
      en: 'Mixins are invoked using `@include mixin-name`.',
      km: 'Mixins ត្រូវហៅប្រើប្រាស់តាមរយៈ `@include mixin-name`។'
    }
  },
  {
    id: 'q-sass-full-8',
    question: {
      en: 'What is a placeholder selector (%placeholder) used for in Sass?',
      km: 'តើ Placeholder selector (%placeholder) ត្រូវប្រើសម្រាប់ធ្វើអ្វីក្នុង Sass?'
    },
    options: [
      { id: '1', text: { en: 'To define silent base styles that are only rendered when @extended by another selector', km: 'ដើម្បី បង្កើត Base styles ស្ងាត់ ដែល បង្ហាញ តែ ពេល មាន ការ @extend ពី Selector ផ្សេង' }, isCorrect: true },
      { id: '2', text: { en: 'To show loading spinners on input fields', km: 'ដើម្បី បង្ហាញ Loading spinner' }, isCorrect: false }
    ],
    explanation: {
      en: 'Placeholders are silent rules that emit no CSS unless `@extend`ed.',
      km: 'Placeholders គឺជា Rule ស្ងាត់ដែលមិន Output CSS ឡើយ លុះត្រាតែម្នាក់មក Extend វា។'
    }
  }
];

export const SASS_COURSE_DATA: FrontendCourse = {
  id: 'sass',
  title: {
    en: 'Sass / SCSS Course',
    km: 'វគ្គសិក្សា Sass / SCSS'
  },
  iconName: 'sass',
  categoryId: 'styling',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Sass គឺជា CSS Preprocessor ដែលជួយឲ្យការសរសេរ CSS កាន់តែងាយស្រួល និងមានលក្ខណៈជា Reusable។ សិក្សាពី Variables, Nesting, Mixins, Functions, ស្ថាបត្យកម្ម 7-1 Pattern និង Themes។\n\nតម្រូវការជាមុន៖ CSS Course (ចាំបាច់) / Prerequisite: CSS Course (required)',
    km: 'Sass គឺជា CSS Preprocessor ដែលជួយឲ្យការសរសេរ CSS កាន់តែងាយស្រួល និងមានលក្ខណៈជា Reusable។ សិក្សាពី Variables, Nesting, Mixins, Functions, ស្ថាបត្យកម្ម 7-1 Pattern និង Themes។\n\nតម្រូវការជាមុន៖ CSS Course (ចាំបាច់)'
  },
  summary: {
    en: 'Sass (Syntactically Awesome Style Sheets) extends CSS with supercharged features like variable tokens, nested rule blocks, reusable mixins with arguments, custom functions, placeholder inheritance, and scalable modular folder architecture.',
    km: 'Sass គឺជា CSS Preprocessor ដ៏ពេញនិយមដែលពង្រីកសមត្ថភាព CSS ជាមួយ Variable Tokens, Nesting Rules, Reusable Mixins ជាមួយ Arguments, Custom Functions, Placeholder Inheritance, និងស្ថាបត្យកម្មរៀបចំ Folder ខ្នាតធំ។'
  },
  estimatedHours: 6,
  lessonCount: 30, // 10 modules * 3 lessons = 30 lessons
  cheatSheet: SASS_CHEAT_SHEET,
  quiz: SASS_QUIZ,
  capstoneProject: {
    title: {
      en: 'Capstone Project: Themeable SCSS Component Library',
      km: 'គម្រោង Capstone: បង្កើត Themeable SCSS Component Library'
    },
    description: {
      en: 'Build a modular SCSS component library with variables for brand palette, button mixins with hover states, placeholder cards, and a $theme map that toggles between "light" and "dark" mode styling!',
      km: 'បង្កើត SCSS Component Library ពេញលេញដែលមាន Variables, Button Mixins, Placeholder Cards, និង $theme map សម្រាប់ប្តូររវាង Light និង Dark Mode!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sass Capstone: Themeable Component Library</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* 
      ========================================================
      EXACT COMPILED CSS OUTPUT FROM THE CAPSTONE SCSS SYSTEM
      ========================================================
    */

    /* Shared Placeholder Card Rule */
    .theme-card, .theme-alert {
      padding: 1.25rem;
      border-radius: 0.75rem;
      transition: all 0.25s ease;
    }

    /* Light Theme Palette Styles */
    .theme-light {
      background-color: #f8fafc;
      color: #0f172a;

      .theme-card {
        background-color: #ffffff;
        border: 1px solid #e2e8f0;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      }

      .theme-alert {
        background-color: #fef2f2;
        border-left: 4px solid #ef4444;
        color: #991b1b;
      }

      .btn-primary {
        background-color: #0284c7;
        color: #ffffff;
      }
      .btn-primary:hover {
        background-color: #0369a1;
      }
    }

    /* Dark Theme Palette Styles */
    .theme-dark {
      background-color: #020617;
      color: #f8fafc;

      .theme-card {
        background-color: #0f172a;
        border: 1px solid #1e293b;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);
      }

      .theme-alert {
        background-color: #450a0a;
        border-left: 4px solid #f87171;
        color: #fecaca;
      }

      .btn-primary {
        background-color: #ec4899;
        color: #ffffff;
      }
      .btn-primary:hover {
        background-color: #be185d;
      }
    }

    /* Common Button Base */
    .btn-primary {
      padding: 0.6rem 1.25rem;
      border-radius: 0.5rem;
      font-weight: 700;
      font-size: 0.875rem;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
  </style>
</head>
<body id="themeBody" class="theme-dark min-h-screen p-6 font-sans flex justify-center items-center transition-colors duration-300">

  <div class="max-w-md w-full space-y-5">
    
    <!-- Theme Switcher Control Header -->
    <div class="flex items-center justify-between bg-slate-900/50 p-4 rounded-2xl border border-slate-800 backdrop-blur">
      <div class="flex items-center gap-2">
        <div class="size-8 rounded-lg bg-pink-500/20 text-pink-400 border border-pink-500/30 flex items-center justify-center font-black text-sm">
          🎨
        </div>
        <div>
          <h2 class="text-xs font-bold text-white">SCSS Component Library</h2>
          <p class="text-[10px] text-slate-400 font-mono">Variables + Mixins + Maps</p>
        </div>
      </div>

      <!-- Theme Switch Button -->
      <button 
        onclick="toggleTheme()" 
        class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition"
      >
        🌗 Toggle Theme
      </button>
    </div>

    <!-- UI Card Component (Extended Base) -->
    <div class="theme-card space-y-3">
      <div class="flex items-center justify-between border-b border-slate-700/50 pb-2">
        <h3 class="font-bold text-sm">Sass Component Card</h3>
        <span class="text-[10px] px-2 py-0.5 rounded bg-pink-500/20 text-pink-400 font-mono font-bold">SCSS Styled</span>
      </div>
      <p class="text-xs opacity-80 leading-relaxed">
        This card is styled with modular SCSS. Its colors, borders, and shadows adapt dynamically when switching between Light and Dark themes!
      </p>
      
      <!-- Button Component (Mixin Styled) -->
      <button class="btn-primary">
        Primary Action Button
      </button>
    </div>

    <!-- Alert Component (Extended Base) -->
    <div class="theme-alert space-y-1 text-xs">
      <div class="font-bold">⚠️ System Notice</div>
      <p class="opacity-90">All component tokens are derived from SCSS map variables.</p>
    </div>

    <!-- SCSS Source Snippet Card -->
    <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-[11px] font-mono space-y-2">
      <div class="text-pink-400 font-bold">📜 SCSS Source Code Snippet:</div>
      <pre class="text-slate-300 overflow-x-auto"><code>$themes: (
  "light": (
    "bg": #f8fafc,
    "primary": #0284c7
  ),
  "dark": (
    "bg": #020617,
    "primary": #ec4899
  )
);

@mixin button-variant($color) {
  background-color: $color;
  &:hover {
    background-color: color.adjust($color, $lightness: -10%);
  }
}</code></pre>
    </div>

  </div>

  <script>
    function toggleTheme() {
      const body = document.getElementById('themeBody');
      if (body.classList.contains('theme-dark')) {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
      } else {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
      }
    }
  </script>
</body>
</html>`
    }
  },
  lessons: [
    ...SASS_LESSONS_PART1,
    ...SASS_LESSONS_PART2
  ]
};
