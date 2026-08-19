import { FrontendLesson } from '../types/frontendClass';

export const SASS_LESSONS_PART2: FrontendLesson[] = [
  // Module 6: Functions
  {
    id: 'sass-m6-l1',
    slug: 'builtin-functions',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: { en: '6.1 Built-in Sass Functions (Color & Math)', km: '៦.១ Built-in Sass Functions (Color & Math)' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Sass includes powerful built-in module functions for manipulating colors, performing calculations, and handling strings. Modules like `sass:color` and `sass:math` provide functions like `color.adjust()`, `color.scale()`, `math.div()`, and `math.percentage()`.',
      km: 'Sass រួមបញ្ចូល Built-in functions ដ៏មានសមត្ថភាពសម្រាប់កែច្នៃ ពណ៌, គណនាលេខ, និង String។ ម៉ូឌុលដូចជា `sass:color` និង `sass:math` មាន function ដូចជា `color.adjust()`, `color.scale()`, និង `math.div()`។'
    },
    tutorial: {
      en: '`@use "sass:color"; .card { background-color: color.adjust(#ec4899, $lightness: -15%); }`. Darkens the base color dynamically!',
      km: '`@use "sass:color"; .card { background-color: color.adjust(#ec4899, $lightness: -15%); }`។ បន្ថយពន្លឺពណ៌ (Darken) ដោយស្វ័យប្រវត្តិ!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .btn-color-fn {
      background-color: #ec4899;
      color: white;
      padding: 0.5rem 1.25rem;
      border-radius: 0.5rem;
      font-weight: 600;
      transition: background-color 0.2s;
    }
    .btn-color-fn:hover {
      background-color: #be185d; /* 15% darker */
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS Built-in Function</div>
        <pre class="text-slate-300 overflow-x-auto"><code>@use "sass:color";

$pink: #ec4899;

.btn-color-fn {
  background-color: $pink;
  
  &:hover {
    // Lightness reduced by 15%
    background-color: color.adjust($pink, $lightness: -15%);
  }
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.btn-color-fn {
  background-color: #ec4899;
}
.btn-color-fn:hover {
  background-color: #be185d;
}</code></pre>
      </div>
    </div>

    <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
      <button class="btn-color-fn">Hover to See color.adjust() Effect</button>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Automated Hover & Focus States', km: 'បង្កើត Hover & Focus State ដោយស្វ័យប្រវត្តិ' },
      description: {
        en: 'Instead of manually picking dark hover colors in Photoshop, Sass functions calculate hover tints automatically.',
        km: 'ជំនួសឲ្យការរើសពណ៌ Dark Hover ដោយដៃ Sass functions គណនា shade ពណ៌ hover ដោយស្វ័យប្រវត្តិ។'
      }
    },
    practiceExercise: {
      question: { en: 'Which Sass module provides math functions like math.round() or math.floor()?', km: 'តើ Sass Module មួយណាដែលផ្តល់ Math functions ដូចជា math.round() ឬ math.floor()?' },
      solution: 'sass:math'
    },
    quizQuestions: [
      {
        id: 'q-sass-m6-1',
        question: { en: 'Which built-in module handles color manipulation in modern Sass?', km: 'តើ Built-in Module មួយណាដែលគ្រប់គ្រងការកែច្នៃពណ៌ក្នុង Sass ទំនើប?' },
        options: [
          { id: '1', text: { en: 'sass:color', km: 'sass:color' }, isCorrect: true },
          { id: '2', text: { en: 'sass:paint', km: 'sass:paint' }, isCorrect: false }
        ],
        explanation: {
          en: '`sass:color` provides functions like adjust(), scale(), and mix().',
          km: '`sass:color` ផ្តល់នូវ Function កែប្រែពណ៌គ្រប់ប្រភេទ។'
        }
      }
    ]
  },
  {
    id: 'sass-m6-l2',
    slug: 'writing-custom-functions',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: { en: '6.2 Writing Custom Functions (@function & @return)', km: '៦.២ ការសរសេរ Custom Functions (@function & @return)' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Unlike Mixins which output CSS declarations, Sass Functions compute and `@return` a single value. You write custom functions using `@function function-name($arg) { @return $computed-value; }`.',
      km: 'ខុសពី Mixins ដែល Output ជា CSS declarations, Sass Functions ធ្វើការគណនា ហើយ `@return` ត្រឡប់មកវិញនូវតម្លៃតែមួយ។ អ្នកសរសេរ Custom Function ដោយប្រើ `@function name($arg) { @return $computed-value; }`។'
    },
    tutorial: {
      en: 'Example: Convert pixels to rem units! `@function rem($px) { @return math.div($px, 16px) * 1rem; }`.',
      km: 'ឧទាហរណ៍៖ បំលែង Pixel ទៅជា rem units! `@function rem($px) { @return math.div($px, 16px) * 1rem; }`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .custom-rem-box {
      font-size: 1.25rem; /* 20px / 16px */
      padding: 1.5rem;    /* 24px / 16px */
      background-color: #0f172a;
      border-radius: 0.5rem;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS Custom Function</div>
        <pre class="text-slate-300 overflow-x-auto"><code>@use "sass:math";

@function rem($pixels) {
  @return math.div($pixels, 16px) * 1rem;
}

.custom-rem-box {
  font-size: rem(20px);
  padding: rem(24px);
  background-color: #0f172a;
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.custom-rem-box {
  font-size: 1.25rem;
  padding: 1.5rem;
  background-color: #0f172a;
}</code></pre>
      </div>
    </div>

    <div class="custom-rem-box border border-slate-800">
      <h4 class="font-bold text-amber-400">rem(20px) Computed Heading</h4>
      <p class="text-xs text-slate-300 mt-1">Calculated fluid spacing using a custom rem() function!</p>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Pixel to REM Helpers', km: 'ការប្រើ REM Helper ក្នុង Project' },
      description: {
        en: 'Design specs from Figma give values in px. Developers use `rem(px)` functions to write scalable, accessible relative REM units seamlessly.',
        km: 'ក្រុម Design ផ្តល់ទំហំជា px ពី Figma។ Developer ប្រើប្រាស់ function `rem(px)` ដើម្បីបំលែងជា REM សម្រាប់ Accessibility បានយ៉ាងរលូន។'
      }
    },
    practiceExercise: {
      question: { en: 'What directive must every @function end with to return its computed result?', km: 'តើ Directive មួយណាដែលគ្រប់ @function ត្រូវតែមាននៅខាងចុងដើម្បីត្រឡប់ផលគណនា?' },
      solution: '@return'
    },
    quizQuestions: [
      {
        id: 'q-sass-m6-2',
        question: { en: 'What is the fundamental difference between a @mixin and a @function in Sass?', km: 'តើអ្វីជាផលខុសគ្នាស្នូលរវាង @mixin និង @function ក្នុង Sass?' },
        options: [
          { id: '1', text: { en: 'Mixins output CSS property blocks; Functions return a single calculated value', km: 'Mixins Output ជា Block CSS; Functions ត្រឡប់មកវិញនូវតម្លៃគណនាទោល' }, isCorrect: true },
          { id: '2', text: { en: 'Functions can only run inside JavaScript', km: 'Function ដំណើរការតែក្នុង JavaScript' }, isCorrect: false }
        ],
        explanation: {
          en: 'Functions return values to be used in property declarations; mixins emit entire CSS rules.',
          km: 'Functions ត្រឡប់តម្លៃមកអានលើ Property; ឯ Mixins បង្កើត Block CSS ទាំងមូល។'
        }
      }
    ]
  },
  {
    id: 'sass-m6-l3',
    slug: 'using-functions-in-property-values',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: { en: '6.3 Using Functions in Property Values', km: '៦.៣ ការប្រើ Functions ក្នុង Property Values' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Functions can be used directly inline anywhere a CSS property accepts a value. You can combine multiple functions together, such as nesting `rem()` inside a `calc()` or `clamp()` expression.',
      km: 'Functions អាចប្រើ Inline ដោយផ្ទាល់នៅគ្រប់ទីកន្លែងដែល CSS Property ទទួលយកតម្លៃ។ អ្នកអាចរួមបញ្ចូល Function ច្រើនចូលគ្នា ដូចជាប្រើ `rem()` ក្នុង `calc()` ឬ `clamp()`។'
    },
    tutorial: {
      en: '`padding: rem(12px) rem(24px); width: calc(100% - #{rem(40px)});`. Interpolation `#{}` allows embedding Sass values into native CSS calc().',
      km: '`padding: rem(12px) rem(24px); width: calc(100% - #{rem(40px)});`។ Interpolation `#{}` អនុញ្ញាតឲ្យបញ្ចូលតម្លៃ Sass ចូលក្នុង CSS calc()។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .fluid-box {
      width: calc(100% - 2rem);
      margin: 0 auto;
      padding: clamp(1rem, 3vw, 2.5rem);
      background-color: #1e293b;
      border-radius: 0.5rem;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS Inline Functions</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.fluid-box {
  width: calc(100% - #{rem(32px)});
  margin: 0 auto;
  padding: clamp(rem(16px), 3vw, rem(40px));
  background-color: #1e293b;
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.fluid-box {
  width: calc(100% - 2rem);
  margin: 0 auto;
  padding: clamp(1rem, 3vw, 2.5rem);
  background-color: #1e293b;
}</code></pre>
      </div>
    </div>

    <div class="fluid-box text-center">
      <span class="text-sky-400 font-bold text-xs">Fluid Responsive Box via Inline Functions</span>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Sass Interpolation #{} in CSS Functions', km: 'ការប្រើ Interpolation #{} ក្នុង CSS Functions' },
      description: {
        en: 'Native CSS `calc()` or `clamp()` functions require Sass variables or functions to be interpolated with `#{}` syntax so Sass passes them cleanly.',
        km: 'CSS `calc()` ឬ `clamp()` ទាមទារឲ្យអថេរ Sass ត្រូវច្រកក្នុងទម្រង់ Interpolation `#{}` ដើម្បីបញ្ជូនតម្លៃបានត្រឹមត្រូវ។'
      }
    },
    practiceExercise: {
      question: { en: 'What SCSS syntax syntax embeds a Sass variable $margin into a native CSS calc() string?', km: 'តើ SCSS syntax មួយណាសម្រាប់បញ្ចូលអថេរ $margin ទៅក្នុង CSS calc()?' },
      solution: 'calc(100% - #{$margin})'
    },
    quizQuestions: [
      {
        id: 'q-sass-m6-3',
        question: { en: 'What is the syntax for Sass interpolation?', km: 'តើអ្វីជា Syntax សម្រាប់ Sass Interpolation?' },
        options: [
          { id: '1', text: { en: '#{$variable}', km: '#{$variable}' }, isCorrect: true },
          { id: '2', text: { en: '${variable}', km: '${variable}' }, isCorrect: false }
        ],
        explanation: {
          en: '`#{}` is the official interpolation operator in Sass.',
          km: '`#{}` គឺជា Interpolation operator ផ្លូវការក្នុង Sass។'
        }
      }
    ]
  },

  // Module 7: Inheritance with @extend
  {
    id: 'sass-m7-l1',
    slug: 'sharing-styles-with-extend',
    moduleNumber: 7,
    lessonNumberInModule: 1,
    title: { en: '7.1 Sharing Styles with @extend', km: '៧.១ ការចែករំលែក Styles ជាមួយ @extend' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The `@extend` directive allows one CSS selector to inherit (reuse) all properties from another selector. Instead of duplicating property declarations, Sass groups the selectors together in the compiled CSS.',
      km: '`@extend` directive អនុញ្ញាតឲ្យ Selector មួយទាញយក (Inherit) Styles ទាំងអស់ពី Selector មួយទៀត។ ជំនួសឲ្យការចម្លងកូដដដែលៗ Sass នឹងប្រមូលផ្តុំ Selector ទាំងនោះចូលគ្នាក្នុង Compiled CSS។'
    },
    tutorial: {
      en: '`.btn-base { padding: 10px; border-radius: 4px; } .btn-danger { @extend .btn-base; background: red; }`.',
      km: '`.btn-base { padding: 10px; border-radius: 4px; } .btn-danger { @extend .btn-base; background: red; }`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .button-base, .button-success {
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      font-weight: 600;
      border: none;
    }
    .button-success {
      background-color: #10b981;
      color: white;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS @extend</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.button-base {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 600;
  border: none;
}

.button-success {
  @extend .button-base;
  background-color: #10b981;
  color: white;
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS Output</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.button-base, .button-success {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 600;
  border: none;
}

.button-success {
  background-color: #10b981;
  color: white;
}</code></pre>
      </div>
    </div>

    <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
      <button class="button-success">Extended Success Button</button>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Grouping Common Component Rules', km: 'ការប្រមូលផ្តុំ Rule នៃ Component' },
      description: {
        en: 'Notice how compiled CSS groups `.button-base, .button-success` with a comma list. This keeps output CSS DRY and compact.',
        km: 'សូមកត់សម្គាល់ថា CSS ចេញមកជាក្រុម `.button-base, .button-success` ដោយប្រើសញ្ញាក្បៀស។ វាធ្វើឲ្យ CSS ខ្លីនិងមិនជាន់គ្នា។'
      }
    },
    practiceExercise: {
      question: { en: 'Write SCSS extending a .card-base class into .card-highlight.', km: 'សរសេរ SCSS ដើម្បី extend .card-base ចូលក្នុង .card-highlight។' },
      solution: '.card-highlight { @extend .card-base; border: 2px solid gold; }'
    },
    quizQuestions: [
      {
        id: 'q-sass-m7-1',
        question: { en: 'How does Sass render extended selectors in compiled CSS?', km: 'តើ Sass បង្ហាញ Extended Selectors ក្នុង Compiled CSS ដោយរបៀបណា?' },
        options: [
          { id: '1', text: { en: 'By comma-separating the inheriting selectors in a single rule block', km: 'ដោយ ប្រមូលផ្តុំ Selectors ទាំងនោះ ចូលគ្នា ដោយ ប្រើ សញ្ញាក្បៀស' }, isCorrect: true },
          { id: '2', text: { en: 'By copying the CSS code 10 times', km: 'ដោយ ចម្លង កូដ CSS 10 ដង' }, isCorrect: false }
        ],
        explanation: {
          en: 'Sass joins extended selectors into a comma-separated list rule.',
          km: 'Sass ភ្ជាប់ Selectors ដែលបាន Extend ចូលគ្នាជាបញ្ជីបំបែកដោយសញ្ញាក្បៀស។'
        }
      }
    ]
  },
  {
    id: 'sass-m7-l2',
    slug: 'placeholder-selectors',
    moduleNumber: 7,
    lessonNumberInModule: 2,
    title: { en: '7.2 Placeholder Selectors (%placeholder)', km: '៧.២ Placeholder Selectors (%placeholder)' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A Placeholder Selector starts with a percent sign `%` (e.g. `%card-base`). Unlike normal classes, placeholder selectors are NOT rendered in the compiled CSS on their own—they only appear when `@extend`ed by another class.',
      km: 'Placeholder Selector ចាប់ផ្តើមដោយសញ្ញាភាគរយ `%` (ដូចជា `%card-base`)។ ខុសពី Class ធម្មតា Placeholder selectors នឹង មិន ត្រូវ បាន Compile ចេញជា CSS ដោយខ្លួនឯងឡើយ លុះត្រាតែមាន Class ផ្សេងមក `@extend` វា។'
    },
    tutorial: {
      en: '`%center-content { text-align: center; justify-content: center; }`. Usage: `.hero-box { @extend %center-content; }`. Prevents unused base class bloat!',
      km: '`%center-content { text-align: center; }`។ ប្រើប្រាស់៖ `.hero-box { @extend %center-content; }`។ ការពារកុំឲ្យកើត Class ឥតប្រយោជន៍ក្នុង CSS!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .alert-danger {
      padding: 1rem;
      border-radius: 0.5rem;
      font-weight: 600;
      background-color: #ef4444;
      color: white;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS %placeholder</div>
        <pre class="text-slate-300 overflow-x-auto"><code>// Silent placeholder - not rendered
%alert-box {
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
}

.alert-danger {
  @extend %alert-box;
  background-color: #ef4444;
  color: white;
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS Output</div>
        <pre class="text-slate-300 overflow-x-auto"><code>/* Notice %alert-box is invisible! */
.alert-danger {
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  background-color: #ef4444;
  color: white;
}</code></pre>
      </div>
    </div>

    <div class="alert-danger text-center">
      ⚠️ Error: %placeholder selector keeps compiled CSS clean!
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Silent Abstractions', km: 'ការបង្កើត Abstraction ស្ងាត់' },
      description: {
        en: 'Placeholders are "silent classes" ideal for building abstract component bases without creating unwanted HTML classes in production CSS.',
        km: 'Placeholders គឺជា "Silent Classes" ដ៏ល្អសម្រាប់បង្កើតកូដគ្រឹះ ដោយមិនបន្សល់ Class លើសក្នុង CSS ឡើយ។'
      }
    },
    practiceExercise: {
      question: { en: 'What symbol marks a Sass placeholder selector?', km: 'តើសញ្ញាអ្វីដែលសម្គាល់ Sass Placeholder Selector?' },
      solution: '% (Percent sign)'
    },
    quizQuestions: [
      {
        id: 'q-sass-m7-2',
        question: { en: 'Will a %placeholder selector be emitted in compiled CSS if it is never extended?', km: 'តើ %placeholder selector នឹងបង្ហាញក្នុង CSS ដែរឬទេ ប្រសិនបើគ្មានអ្នកមក extend វា?' },
        options: [
          { id: '1', text: { en: 'No, unextended placeholders are completely omitted', km: 'ទេ, Placeholder ដែលគ្មានអ្នក extend ត្រូវលុបចោលទាំងស្រុង' }, isCorrect: true },
          { id: '2', text: { en: 'Yes, as an empty CSS block', km: 'បង្ហាញ ជា Block ទទេ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Placeholders are invisible until extended.',
          km: 'Placeholders មើលមិនឃើញក្នុង CSS ឡើយ លុះត្រាតែមានការ Extend។'
        }
      }
    ]
  },
  {
    id: 'sass-m7-l3',
    slug: 'extend-vs-mixin-when-to-use',
    moduleNumber: 7,
    lessonNumberInModule: 3,
    title: { en: '7.3 @extend vs. @mixin — When to Use Which', km: '៧.៣ @extend vs @mixin — ពេលណាគួរប្រើមួយណា' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Use `@extend` when elements share fundamentally identical relationships and base styles (e.g. `%button-base`). Use `@mixin` when styles require dynamic arguments or media queries. Avoid `@extend` across media query boundaries!',
      km: 'ប្រើ `@extend` នៅពេល Elements មានទំនាក់ទំនង និង Styles ដូចគ្នាទាំងស្រុង (ដូចជា `%button-base`)។ ប្រើ `@mixin` នៅពេល Styles ត្រូវការ Arguments ឌីណាមិក ឬ Media queries។ ចៀសវាងការ `@extend` រំលង Media Query boundaries!'
    },
    tutorial: {
      en: 'Golden Rule: Mixins duplicate property blocks for flexibility. Extends group selectors for exact style sharing.',
      km: 'វិធានមាស៖ Mixins ចម្លង Block នៃ properties ដើម្បីភាពបត់បែន។ Extends ប្រមូលផ្តុំ Selectors សម្រាប់ចែករំលែក Styles។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-amber-400 font-bold mb-2">Use @mixin when:</div>
        <ul class="list-disc list-inside space-y-1 text-slate-300">
          <li>You need dynamic arguments</li>
          <li>Generating media queries</li>
          <li>Injecting configurable values</li>
        </ul>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-emerald-400 font-bold mb-2">Use @extend when:</div>
        <ul class="list-disc list-inside space-y-1 text-slate-300">
          <li>Sharing exact identical base rules</li>
          <li>Grouping selector lists</li>
          <li>Reducing duplicate properties</li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Media Query Limitation of @extend', km: 'កម្រិតនៃ @extend លើ Media Queries' },
      description: {
        en: 'Sass cannot `@extend` selectors across different `@media` blocks. In responsive components, always favor `@mixin` for media queries.',
        km: 'Sass មិនអាច `@extend` រំលង `@media` blocks ផ្សេងគ្នាបានឡើយ។ ក្នុង Responsive component ត្រូវតែផ្តល់អាទិភាពលើ `@mixin`។'
      }
    },
    practiceExercise: {
      question: { en: 'If a component rule needs to accept a dynamic $color argument, should you use @mixin or @extend?', km: 'បើ Component rule ត្រូវការទទួល Argument $color ឌីណាមិក តើអ្នកគួរប្រើ @mixin ឬ @extend?' },
      solution: '@mixin'
    },
    quizQuestions: [
      {
        id: 'q-sass-m7-3',
        question: { en: 'Can @extend be used to inherit a selector located inside a different @media query block?', km: 'តើ @extend អាចប្រើប្រាស់ដើម្បីទាញយក Selector ដែលស្ថិតក្នុង @media query block ផ្សេងបានទេ?' },
        options: [
          { id: '1', text: { en: 'No, Sass throws a media query mismatch compile error', km: 'ទេ, Sass នឹងបង្ហាញ Media query mismatch error' }, isCorrect: true },
          { id: '2', text: { en: 'Yes, without any restrictions', km: 'បាន ដោយ គ្មាន ការ កំណត់' }, isCorrect: false }
        ],
        explanation: {
          en: 'Extends cannot bridge separate media scopes.',
          km: 'Extends មិនអាចរំលង Scope នៃ Media query ដែលផ្សេងគ្នាបានឡើយ។'
        }
      }
    ]
  },

  // Module 8: Operators & Control Directives
  {
    id: 'sass-m8-l1',
    slug: 'math-operators-in-sass',
    moduleNumber: 8,
    lessonNumberInModule: 1,
    title: { en: '8.1 Math Operators (+, -, *, math.div)', km: '៨.១ Math Operators (+, -, *, math.div)' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Sass supports standard arithmetic operators: addition `+`, subtraction `-`, multiplication `*`, and division via `math.div()`. Note that division with `/` is deprecated because CSS uses `/` as a separator in font or grid values.',
      km: 'Sass គាំទ្រប្រមាណវិធីគណនាលេខ៖ បូក `+`, ដក `-`, គុណ `*`, និងចែកតាម `math.div()`។ ការប្រើប្រាស់ `/` សម្រាប់ចែកត្រូវបានឈប់ប្រើ ព្រោះ CSS ប្រើ `/` ជាសញ្ញាខណ្ឌចន្លោះតម្លៃ Font ឬ Grid។'
    },
    tutorial: {
      en: '`@use "sass:math"; width: math.div(100%, 3); margin-top: $spacing * 2;`. Calculates precise fluid column dimensions!',
      km: '`@use "sass:math"; width: math.div(100%, 3); margin-top: $spacing * 2;`។ គណនាទំហំ Column បានយ៉ាងក្រិតក្រម!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .col-33 {
      width: 33.3333333333%;
      padding: 0.5rem;
      background-color: #1e293b;
      border-radius: 0.375rem;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS Math Division</div>
        <pre class="text-slate-300 overflow-x-auto"><code>@use "sass:math";

$base-padding: 0.25rem;

.col-33 {
  width: math.div(100%, 3);
  padding: $base-padding * 2;
  background-color: #1e293b;
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS Output</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.col-33 {
  width: 33.3333333333%;
  padding: 0.5rem;
  background-color: #1e293b;
}</code></pre>
      </div>
    </div>

    <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
      <div class="col-33 text-center">
        <span class="text-emerald-400 font-bold text-xs">width: math.div(100%, 3)</span>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Grid Column Calculators', km: 'ការគណនា Grid Column' },
      description: {
        en: 'Before CSS Grid, 12-column layouts relied heavily on Sass math division functions to compute percentage widths.',
        km: 'មុនពេលមាន CSS Grid, Layout ១២ Column ត្រូវពឹងផ្អែកលើការគណនាចែកភាគរយរបស់ Sass math។'
      }
    },
    practiceExercise: {
      question: { en: 'What function in sass:math should be used instead of slash / for division?', km: 'តើ Function អ្វីក្នុង module sass:math ដែលត្រូវប្រើជំនួសឲ្យសញ្ញាចែក slash /?' },
      solution: 'math.div()'
    },
    quizQuestions: [
      {
        id: 'q-sass-m8-1',
        question: { en: 'Why is using raw / for division deprecated in modern Sass?', km: 'ហេតុអ្វីបានជាការប្រើសញ្ញា / សម្រាប់ចែក ត្រូវ បាន ឈប់ ប្រើ ក្នុង Sass ទំនើប?' },
        options: [
          { id: '1', text: { en: 'Because CSS uses / as a shorthand separator in properties like font and grid', km: 'ព្រោះ CSS ប្រើសញ្ញា / ជាសញ្ញាខណ្ឌចន្លោះក្នុង Font និង Grid' }, isCorrect: true },
          { id: '2', text: { en: 'Because math is no longer supported', km: 'ព្រោះ មិន គាំទ្រ ការ គណនា' }, isCorrect: false }
        ],
        explanation: {
          en: 'Sass uses `math.div()` to prevent ambiguity with native CSS slashes.',
          km: 'Sass ប្រើ `math.div()` ដើម្បីកុំឲ្យច្រឡំនឹងសញ្ញា / របស់ CSS ធម្មតា។'
        }
      }
    ]
  },
  {
    id: 'sass-m8-l2',
    slug: 'if-else-conditionals',
    moduleNumber: 8,
    lessonNumberInModule: 2,
    title: { en: '8.2 Conditionals (@if, @else if, @else)', km: '៨.២ លក្ខខណ្ឌ (@if, @else if, @else)' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Sass supports conditional logic directives `@if`, `@else if`, and `@else`. This allows your stylesheets to adapt dynamically depending on theme parameters or contrast calculations.',
      km: 'Sass គាំទ្រលក្ខខណ្ឌ Conditional logic `@if`, `@else if`, និង `@else`។ នេះអនុញ្ញាតឲ្យ Stylesheet របស់អ្នកផ្លាស់ប្តូរឌីណាមិកអាស្រ័យលើតម្លៃ Theme ឬការគណនា Contrast ពណ៌។'
    },
    tutorial: {
      en: '`@mixin theme-text($bg) { @if (color.lightness($bg) > 50%) { color: black; } @else { color: white; } }`. Automatically picks legible contrast colors!',
      km: '`@mixin theme-text($bg) { @if (color.lightness($bg) > 50%) { color: black; } @else { color: white; } }`។ ជ្រើសរើសពណ៌អក្សរដែលងាយមើលដោយស្វ័យប្រវត្តិ!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .card-dark {
      background-color: #0f172a;
      color: #ffffff;
      padding: 1rem;
      border-radius: 0.5rem;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS Conditional @if</div>
        <pre class="text-slate-300 overflow-x-auto"><code>@use "sass:color";

@mixin auto-contrast($bg) {
  background-color: $bg;
  @if (color.lightness($bg) > 50%) {
    color: #000000;
  } @else {
    color: #ffffff;
  }
}

.card-dark {
  @include auto-contrast(#0f172a);
  padding: 1rem;
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS Output</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.card-dark {
  background-color: #0f172a;
  color: #ffffff;
  padding: 1rem;
}</code></pre>
      </div>
    </div>

    <div class="card-dark border border-slate-800">
      <h4 class="font-bold text-sm">Smart Contrast Text Color</h4>
      <p class="text-xs text-slate-300 mt-1">Text color automatically chosen via @if lightness condition!</p>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Accessible Contrast Engines', km: 'ម៉ាស៊ីនគណនា Contrast ពណ៌' },
      description: {
        en: 'Smart UI component kits calculate background lightness via `@if` conditionals to guarantee WCAG accessibility contrast compliance.',
        km: 'UI components គណនាពន្លឺផ្ទៃខាងក្រោយតាម `@if` ដើម្បីធានាថាពណ៌អក្សរស្របតាមស្តង់ដារ WCAG Accessibility។'
      }
    },
    practiceExercise: {
      question: { en: 'Write a conditional @if statement that sets border to 2px solid red if $theme is equal to "danger".', km: 'សរសេរ @if statement កំណត់ border 2px solid red ប្រសិនបើ $theme ស្មើ "danger"។' },
      solution: '@if ($theme == "danger") { border: 2px solid red; }'
    },
    quizQuestions: [
      {
        id: 'q-sass-m8-2',
        question: { en: 'Which Sass directive handles conditional branching logic?', km: 'តើ Sass directive មួយណាដែលគ្រប់គ្រង Conditional branching logic?' },
        options: [
          { id: '1', text: { en: '@if', km: '@if' }, isCorrect: true },
          { id: '2', text: { en: '@when', km: '@when' }, isCorrect: false }
        ],
        explanation: {
          en: '`@if`, `@else if`, and `@else` handle control flow.',
          km: '`@if`, `@else if`, និង `@else` គ្រប់គ្រងលំហូរបញ្ជា។'
        }
      }
    ]
  },
  {
    id: 'sass-m8-l3',
    slug: 'each-and-for-loops',
    moduleNumber: 8,
    lessonNumberInModule: 3,
    title: { en: '8.3 Looping Directives (@each & @for)', km: '៨.៣ Looping Directives (@each & @for)' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Sass provides looping directives to generate repetitive utility classes automatically. `@each` iterates through items in a list/map, while `@for` loops through a range of numbers (e.g. `1 through 5`).',
      km: 'Sass ផ្តល់នូវ Looping directives សម្រាប់បង្កើត Utility classes ដែលជាន់គ្នាដោយស្វ័យប្រវត្តិ។ `@each` រត់លើធាតុក្នុង List/Map, ឯ `@for` រត់លើចន្លោះលេខ (ដូចជា `1 through 5`)។'
    },
    tutorial: {
      en: '`@for $i from 1 through 3 { .m-#{$i} { margin: $i * 0.25rem; } }`. Generates `.m-1`, `.m-2`, and `.m-3` instantly!',
      km: '`@for $i from 1 through 3 { .m-#{$i} { margin: $i * 0.25rem; } }`។ បង្កើត `.m-1`, `.m-2`, និង `.m-3` ដោយស្វ័យប្រវត្តិ!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .p-1 { padding: 0.25rem; }
    .p-2 { padding: 0.5rem; }
    .p-3 { padding: 0.75rem; }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS @for Loop</div>
        <pre class="text-slate-300 overflow-x-auto"><code>@for $i from 1 through 3 {
  .p-#{$i} {
    padding: $i * 0.25rem;
  }
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS Output</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 0.75rem; }</code></pre>
      </div>
    </div>

    <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-2">
      <div class="p-1 bg-slate-800 border border-slate-700 text-[10px]">.p-1 (0.25rem)</div>
      <div class="p-2 bg-slate-800 border border-slate-700 text-[10px]">.p-2 (0.5rem)</div>
      <div class="p-3 bg-slate-800 border border-slate-700 text-[10px]">.p-3 (0.75rem)</div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Generating Spacing Helpers', km: 'ការបង្កើត Spacing Helpers' },
      description: {
        en: 'Utility-first frameworks like Tailwind or Bootstrap use loops internally to output hundreds of margin, padding, and opacity classes.',
        km: 'Utility frameworks ដូចជា Bootstrap ឬ Tailwind ប្រើ Loops ក្នុងកូដដើមដើម្បីបង្កើត Class padding/margin រាប់រយ។'
      }
    },
    practiceExercise: {
      question: { en: 'Write a @for loop generating font size classes .fs-1 to .fs-4.', km: 'សរសេរ @for loop ដើម្បីបង្កើត Class ទំហំអក្សរ .fs-1 ដល់ .fs-4។' },
      solution: '@for $i from 1 through 4 { .fs-#{$i} { font-size: $i * 0.5rem; } }'
    },
    quizQuestions: [
      {
        id: 'q-sass-m8-3',
        question: { en: 'What is the keyword used in @for loops to include both start and end numbers inclusive?', km: 'តើ Keyword អ្វីប្រើក្នុង @for loop ដើម្បីរាប់រាប់បញ្ចូលទាំងលេខដើម និងលេខចុង?' },
        options: [
          { id: '1', text: { en: 'through', km: 'through' }, isCorrect: true },
          { id: '2', text: { en: 'to', km: 'to' }, isCorrect: false }
        ],
        explanation: {
          en: '`from 1 through 5` includes 5, whereas `from 1 to 5` excludes 5.',
          km: '`through` រាប់បញ្ចូលទាំងលេខចុងក្រោយ ឯ `to` មិនរាប់បញ្ចូលឡើយ។'
        }
      }
    ]
  },

  // Module 9: Maps & Data Structures
  {
    id: 'sass-m9-l1',
    slug: 'sass-maps-syntax',
    moduleNumber: 9,
    lessonNumberInModule: 1,
    title: { en: '9.1 Sass Maps Syntax', km: '៩.១ ទម្រង់សរសេរ Sass Maps Syntax' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Sass Maps store key-value pairs inside parentheses, similar to JavaScript objects or JSON. They are defined as `$map-name: (key1: val1, key2: val2);`. Maps are perfect for storing themes and breakpoint scales.',
      km: 'Sass Maps ផ្ទុកទិន្នន័យជា Key-Value ក្នុងសញ្ញាវង់ក្រចក `()` ដូច JavaScript Objects ឬ JSON។ វាត្រូវសរសេរ៖ `$map-name: (key1: val1, key2: val2);`។ Maps ស័ក្តិសមបំផុតសម្រាប់ផ្ទុក Theme និង Breakpoints។'
    },
    tutorial: {
      en: '`$theme-colors: (primary: #3b82f6, success: #10b981, danger: #ef4444);`. Access values using map functions!',
      km: '`$theme-colors: (primary: #3b82f6, success: #10b981, danger: #ef4444);`។ ទាញយកតម្លៃតាមរយ: Map functions!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .theme-demo {
      background-color: #3b82f6;
      color: white;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      font-weight: 600;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS Map Declaration</div>
        <pre class="text-slate-300 overflow-x-auto"><code>@use "sass:map";

$theme-colors: (
  "primary": #3b82f6,
  "success": #10b981,
  "danger": #ef4444
);

.theme-demo {
  background-color: map.get($theme-colors, "primary");
  color: white;
  padding: 0.75rem 1rem;
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS Output</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.theme-demo {
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 1rem;
}</code></pre>
      </div>
    </div>

    <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
      <span class="theme-demo">Sass Map Color Retrieved</span>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Centralized Config Maps', km: 'ការប្រមូលផ្តុំ Config ក្នុង Map' },
      description: {
        en: 'Instead of creating 50 separate color variables, developers organize related design tokens into structured Sass maps.',
        km: 'ជំនួសឲ្យការប្រកាស variable ពណ៌ ៥០ ផ្សេងគ្នា Developer ប្រមូលផ្តុំទិន្នន័យរចនាចូលក្នុង Sass Map រៀបរយ។'
      }
    },
    practiceExercise: {
      question: { en: 'Declare a Sass map named $breakpoints with keys "sm": 576px and "md": 768px.', km: 'ប្រកាស Sass map ឈ្មោះ $breakpoints មាន key "sm": 576px និង "md": 768px។' },
      solution: '$breakpoints: ("sm": 576px, "md": 768px);'
    },
    quizQuestions: [
      {
        id: 'q-sass-m9-1',
        question: { en: 'What data structure in Sass stores key-value pairs?', km: 'តើរចនាសម្ព័ន្ធទិន្នន័យអ្វីក្នុង Sass ដែលផ្ទុកទិន្នន័យជា Key-Value?' },
        options: [
          { id: '1', text: { en: 'Sass Map', km: 'Sass Map' }, isCorrect: true },
          { id: '2', text: { en: 'Sass Tuple', km: 'Sass Tuple' }, isCorrect: false }
        ],
        explanation: {
          en: 'Sass Maps store key-value dictionary mappings.',
          km: 'Sass Maps ផ្ទុកទិន្នន័យគួបផ្សំ Key-Value។'
        }
      }
    ]
  },
  {
    id: 'sass-m9-l2',
    slug: 'map-get-and-functions',
    moduleNumber: 9,
    lessonNumberInModule: 2,
    title: { en: '9.2 Map Functions (map.get, map.has-key)', km: '៩.២ Map Functions (map.get, map.has-key)' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Sass provides the `sass:map` module to interact with maps. Key functions include `map.get($map, $key)` to read values, `map.has-key($map, $key)` to verify existence, and `map.merge($map1, $map2)` to combine maps.',
      km: 'Sass ផ្តល់នូវម៉ូឌុល `sass:map` សម្រាប់គ្រប់គ្រង Maps។ Function សំខាន់ៗរួមមាន `map.get($map, $key)` សម្រាប់អានតម្លៃ, `map.has-key($map, $key)` សម្រាប់ពិនិត្យមើលវត្តមាន, និង `map.merge($map1, $map2)` សម្រាប់រួមបញ្ចូលគ្នា។'
    },
    tutorial: {
      en: '`@use "sass:map"; $color: map.get($theme-colors, "success");`. Safe lookup helper function!',
      km: '`@use "sass:map"; $color: map.get($theme-colors, "success");`។ វិធីអានតម្លៃប្រកបដោយសុវត្ថិភាព!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .card-success {
      background-color: #10b981;
      color: white;
      padding: 1rem;
      border-radius: 0.5rem;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS map.get() Helper</div>
        <pre class="text-slate-300 overflow-x-auto"><code>@use "sass:map";

$palette: (
  "emerald": #10b981,
  "rose": #f43f5e
);

.card-success {
  background-color: map.get($palette, "emerald");
  color: white;
  padding: 1rem;
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS Output</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.card-success {
  background-color: #10b981;
  color: white;
  padding: 1rem;
}</code></pre>
      </div>
    </div>

    <div class="card-success text-center font-bold text-xs">
      map.get($palette, "emerald") Applied!
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Safeguarding Design Tokens', km: 'ការការពារកំហុសក្នុងការអាន Token' },
      description: {
        en: 'Custom helper functions use `map.has-key()` to throw clean warning messages if a requested color token key is missing from the map.',
        km: 'Custom helper function ប្រើ `map.has-key()` ដើម្បីបង្ហាញ Warning បើ Key ពណ៌ដែលទាមទារមិនមានក្នុង Map។'
      }
    },
    practiceExercise: {
      question: { en: 'Which function retrieves a value associated with a key from a Sass map?', km: 'តើ Function មួយណាសម្រាប់ទាញយកតម្លៃដែលត្រូវនឹង Key ពី Sass map?' },
      solution: 'map.get($map, $key)'
    },
    quizQuestions: [
      {
        id: 'q-sass-m9-2',
        question: { en: 'Which function checks whether a key exists inside a Sass map?', km: 'តើ Function មួយណាដែលពិនិត្យមើលថាតើ Key មាននៅក្នុង Sass Map ដែរឬទេ?' },
        options: [
          { id: '1', text: { en: 'map.has-key($map, $key)', km: 'map.has-key($map, $key)' }, isCorrect: true },
          { id: '2', text: { en: 'map.find($map, $key)', km: 'map.find($map, $key)' }, isCorrect: false }
        ],
        explanation: {
          en: '`map.has-key()` returns true or false.',
          km: '`map.has-key()` ត្រឡប់តម្លៃ true ឬ false។'
        }
      }
    ]
  },
  {
    id: 'sass-m9-l3',
    slug: 'looping-maps-generating-utilities',
    moduleNumber: 9,
    lessonNumberInModule: 3,
    title: { en: '9.3 Looping Maps to Generate Utilities', km: '៩.៣ ការ Loop លើ Map ដើម្បីបង្កើត Utilities' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Combining `@each $key, $value in $map` with Sass maps allows you to dynamically generate an entire suite of utility classes (e.g. `.text-primary`, `.text-success`, `.text-danger`) from a single color map.',
      km: 'ការរួមបញ្ចូល `@each $key, $value in $map` ជាមួយ Sass maps អនុញ្ញាតឲ្យអ្នកបង្កើត Utility classes មួយឈុតធំ (ដូចជា `.text-primary`, `.text-success`) ដោយស្វ័យប្រវត្តិចេញពី Map តែមួយ។'
    },
    tutorial: {
      en: '`@each $name, $color in $theme-colors { .text-#{$name} { color: $color; } }`. Generates all color classes in 3 lines!',
      km: '`@each $name, $color in $theme-colors { .text-#{$name} { color: $color; } }`។ បង្កើត Class ពណ៌ទាំងអស់ត្រឹមតែ ៣ ជួរ!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .bg-primary { background-color: #3b82f6; }
    .bg-success { background-color: #10b981; }
    .bg-danger { background-color: #ef4444; }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS Map Generator</div>
        <pre class="text-slate-300 overflow-x-auto"><code>$theme-colors: (
  "primary": #3b82f6,
  "success": #10b981,
  "danger": #ef4444
);

@each $name, $color in $theme-colors {
  .bg-#{$name} {
    background-color: $color;
  }
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS Output</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.bg-primary { background-color: #3b82f6; }
.bg-success { background-color: #10b981; }
.bg-danger { background-color: #ef4444; }</code></pre>
      </div>
    </div>

    <div class="flex gap-2 justify-center">
      <span class="px-3 py-1 bg-primary text-white text-xs rounded font-bold">Primary</span>
      <span class="px-3 py-1 bg-success text-white text-xs rounded font-bold">Success</span>
      <span class="px-3 py-1 bg-danger text-white text-xs rounded font-bold">Danger</span>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Bootstrap & Tailwind Engine Design', km: 'ការរចនា Engine របស់ Bootstrap' },
      description: {
        en: 'This exact `@each $key, $val in $map` pattern is how Bootstrap SCSS generates theme color utilities across buttons, text, and backgrounds.',
        km: 'ទម្រង់ `@each $key, $val in $map` នេះ ត្រូវបាន Bootstrap SCSS ប្រើប្រាស់ដើម្បីបង្កើត Utility Classes សម្រាប់ Button, Text, និង Backgrounds។'
      }
    },
    practiceExercise: {
      question: { en: 'Write an @each loop iterating over a $theme-colors map to generate .border-{key} classes.', km: 'សរសេរ @each loop រត់លើ $theme-colors map ដើម្បីបង្កើត .border-{key} classes។' },
      solution: '@each $key, $color in $theme-colors { .border-#{$key} { border-color: $color; } }'
    },
    quizQuestions: [
      {
        id: 'q-sass-m9-3',
        question: { en: 'How many variables are destructured in the @each directive when looping over a map?', km: 'តើមានអថេរប៉ុន្មានដែលត្រូវបាន Destructure ក្នុង @each directive នៅពេល Loop លើ Map?' },
        options: [
          { id: '1', text: { en: 'Two variables ($key, $value)', km: 'អថេរពីរ ($key, $value)' }, isCorrect: true },
          { id: '2', text: { en: 'One variable', km: 'អថេរ តែ មួយ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Map entries yield both key and value destructured variables.',
          km: 'ការរត់លើ Map ផ្តល់នូវអថេរពីរគឺ Key និង Value។'
        }
      }
    ]
  },

  // Module 10: Real-World Project Organization
  {
    id: 'sass-m10-l1',
    slug: 'seven-one-pattern',
    moduleNumber: 10,
    lessonNumberInModule: 1,
    title: { en: '10.1 The "7-1 Pattern" Architecture', km: '១០.១ ស្ថាបត្យកម្ម "7-1 Pattern"' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The "7-1 Pattern" is the gold standard architecture for structuring large Sass projects. It consists of 7 folders (`abstracts/`, `base/`, `components/`, `layout/`, `pages/`, `themes/`, `vendors/`) and 1 root file (`main.scss`).',
      km: 'ស្ថាបត្យកម្ម "7-1 Pattern" គឺជាស្តង់ដារមាសសម្រាប់ការរៀបចំគម្រោង Sass ទំហំធំ។ វាមាន Folder ចំនួន ៧ (`abstracts/`, `base/`, `components/`, `layout/`, `pages/`, `themes/`, `vendors/`) និង Root File ចំនួន ១ (`main.scss`)។'
    },
    tutorial: {
      en: '`abstracts/` contains zero compiled CSS (only variables & mixins). `components/` contains standalone UI elements (buttons, modals).',
      km: '`abstracts/` មិនមានបង្កើត CSS ដោយផ្ទាល់ឡើយ (មានតែ variables & mixins)។ ឯ `components/` ផ្ទុក UI Elements ឯករាជ្យ (buttons, modals)។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs font-mono space-y-2">
      <div class="text-pink-400 font-bold text-sm">🏗️ The 7-1 Sass Pattern Folders</div>
      <div class="grid grid-cols-2 gap-2 text-slate-300">
        <div class="p-2 bg-slate-950 rounded border border-slate-800">1. abstracts/</div>
        <div class="p-2 bg-slate-950 rounded border border-slate-800">2. base/</div>
        <div class="p-2 bg-slate-950 rounded border border-slate-800">3. components/</div>
        <div class="p-2 bg-slate-950 rounded border border-slate-800">4. layout/</div>
        <div class="p-2 bg-slate-950 rounded border border-slate-800">5. pages/</div>
        <div class="p-2 bg-slate-950 rounded border border-slate-800">6. themes/</div>
        <div class="p-2 bg-slate-950 rounded border border-slate-800">7. vendors/</div>
        <div class="p-2 bg-slate-950 rounded border border-emerald-800 text-emerald-400 font-bold">main.scss (Root)</div>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Maintainability in Enterprise Apps', km: 'ការថែទាំកូដក្នុងកម្មវិធីធំៗ' },
      description: {
        en: 'Large applications with 50+ pages use the 7-1 pattern so new developers instantly know where every style rule belongs.',
        km: 'កម្មវិធីធំៗដែលមានរាប់សិបទំព័រ ប្រើ 7-1 pattern ធ្វើឲ្យ Developer ថ្មីដឹងភ្លាមៗថាកូដ styles ស្ថិតនៅកន្លែងណា។'
      }
    },
    practiceExercise: {
      question: { en: 'Which folder in the 7-1 pattern stores 3rd-party CSS libraries like Bootstrap or Normalize?', km: 'តើ Folder មួយណាស្ថាបត្យកម្ម 7-1 pattern ផ្ទុក 3rd-party CSS libraries?' },
      solution: 'vendors/'
    },
    quizQuestions: [
      {
        id: 'q-sass-m10-1',
        question: { en: 'What does the "1" represent in the "7-1 Pattern" Sass architecture?', km: 'តើលេខ "1" ក្នុងស្ថាបត្យកម្ម "7-1 Pattern" តំណាងឲ្យអ្វី?' },
        options: [
          { id: '1', text: { en: 'The single main.scss entry point file that imports all 7 folders', km: 'ឯកសារ main.scss entry point ដុំតែមួយដែលប្រមូលផ្ដុំ Import រាល់ Folder ទាំង ៧' }, isCorrect: true },
          { id: '2', text: { en: 'One single line of total CSS code', km: 'កូដ CSS តែ មួយ ជួរ' }, isCorrect: false }
        ],
        explanation: {
          en: '7 folders of partials compiled via 1 entry file main.scss.',
          km: 'Folder ទាំង ៧ ត្រូវ Compile តាមរយ: ឯកសារមេ main.scss ចំនួន ១។'
        }
      }
    ]
  },
  {
    id: 'sass-m10-l2',
    slug: 'combining-variables-mixins-partials',
    moduleNumber: 10,
    lessonNumberInModule: 2,
    title: { en: '10.2 Combining Variables, Mixins & Partials', km: '១០.២ ការរួមបញ្ចូល Variables, Mixins & Partials' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The true power of Sass comes when you combine all concepts together: defining design tokens in `_variables.scss`, helper tools in `_mixins.scss`, and assembling them inside component partials like `_card.scss`.',
      km: 'សមត្ថភាពពិតប្រាកដនៃ Sass កើតឡើងនៅពេលអ្នករួមបញ្ចូលគំនិតទាំងអស់ចូលគ្នា៖ កំណត់ Design tokens ក្នុង `_variables.scss`, ឧបករណ៍ Helper ក្នុង `_mixins.scss`, ហើយប្រមូលផ្តុំពួកវាចូលក្នុង Component partials ដូចជា `_card.scss`។'
    },
    tutorial: {
      en: 'Import `abstracts/` inside `_card.scss` using `@use`, then build clean component classes using `$variables` and `@include mixins`.',
      km: 'Import `abstracts/` ចូលក្នុង `_card.scss` ដោយប្រើ `@use`, រួចសាងសង់ Component class ដោយប្រើ `$variables` និង `@include mixins`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .ui-card-combined {
      background-color: #0f172a;
      border: 1px solid #1e293b;
      padding: 1.25rem;
      border-radius: 0.75rem;
      transition: border-color 0.2s;
    }
    .ui-card-combined:hover {
      border-color: #ec4899;
    }
    .ui-card-combined .card-title {
      color: #ec4899;
      font-weight: 700;
      font-size: 1rem;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS Component Assembly</div>
        <pre class="text-slate-300 overflow-x-auto"><code>@use "../abstracts/variables" as v;
@use "../abstracts/mixins" as m;

.ui-card-combined {
  background-color: v.$bg-card;
  border: 1px solid v.$border-color;
  padding: 1.25rem;
  border-radius: v.$radius-lg;

  &:hover {
    border-color: v.$color-accent;
  }

  .card-title {
    color: v.$color-accent;
    font-weight: 700;
  }
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS Output</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.ui-card-combined {
  background-color: #0f172a;
  border: 1px solid #1e293b;
  padding: 1.25rem;
  border-radius: 0.75rem;
}
.ui-card-combined:hover {
  border-color: #ec4899;
}
.ui-card-combined .card-title {
  color: #ec4899;
  font-weight: 700;
}</code></pre>
      </div>
    </div>

    <div class="ui-card-combined">
      <div class="card-title">Combined Design System Card</div>
      <p class="text-xs text-slate-300 mt-1">Hover over this card to trigger hover border transitions!</p>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Design System Component Libraries', km: 'ការបង្កើត Component Library' },
      description: {
        en: 'This combined pattern is how enterprise UI libraries (Bootstrap, Ant Design, Material) construct themeable, maintainable components.',
        km: 'ទម្រង់រួមបញ្ចូលគ្នានេះ ត្រូវបាន UI Libraries ធំៗប្រើប្រាស់ដើម្បីសាងសង់ Components ដែលអាចផ្លាស់ប្តូរ Theme បាន។'
      }
    },
    practiceExercise: {
      question: { en: 'What directive allows loading variables and mixins modules into a component partial?', km: 'តើ Directive មួយណាអនុញ្ញាតឲ្យរំលេច Load ម៉ូឌុល variables និង mixins ចូលក្នុង component partial?' },
      solution: '@use'
    },
    quizQuestions: [
      {
        id: 'q-sass-m10-2',
        question: { en: 'Why should component partials load variables via @use rather than copy-pasting raw values?', km: 'ហេតុអ្វីបានជា Component partials គួររំលេច Load variables តាម @use ជាជាងការ Copy-paste តម្លៃផ្ទាល់?' },
        options: [
          { id: '1', text: { en: 'So changing a single variable updates all components throughout the app automatically', km: 'ដើម្បី ពេល ប្តូរ Variable មួយ គ្រប់ Component ទាំងអស់ នឹង អាប់ដេត ដោយ ស្វ័យប្រវត្តិ' }, isCorrect: true },
          { id: '2', text: { en: 'To increase the file size', km: 'ដើម្បី បង្កើន ទំហំ ឯកសារ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Centralizing design tokens in variables ensures consistency and easy site-wide updates.',
          km: 'ការប្រមូលផ្តុំតម្លៃក្នុង Variable ធានាភាពមិនជាន់គ្នា និងងាយស្រួលប្តូរលើ Project ទាំងមូល។'
        }
      }
    ]
  },
  {
    id: 'sass-m10-l3',
    slug: 'production-build-optimization',
    moduleNumber: 10,
    lessonNumberInModule: 3,
    title: { en: '10.3 Production Optimization & Build Tools', km: '១០.៣ ការអូពទីម៉ៃស៍សម្រាប់ Production & Build Tools' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'In production, SCSS compiled CSS should be optimized with minification (removing whitespace) and sourcemaps (linking compiled CSS back to original `.scss` lines for debugging in Chrome DevTools).',
      km: 'សម្រាប់ Production, CSS ដែល Compile ចេញពី SCSS គួរតែអូពទីម៉ៃស៍ជាមួយ Minification (លុបចន្លោះទំនេរ) និង Sourcemaps (ភ្ជាប់ CSS ត្រឡប់ទៅជូរកូដ `.scss` ដើម សម្រាប់ងាយស្រួល Debugging ក្នុង Chrome DevTools)។'
    },
    tutorial: {
      en: 'CLI: `sass --style=compressed --source-map src/main.scss dist/main.min.css`. Produces compressed, lightning-fast CSS!',
      km: 'CLI៖ `sass --style=compressed --source-map src/main.scss dist/main.min.css`។ បង្កើត CSS ដើរលឿនបំផុត!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs font-mono space-y-3">
      <div class="text-pink-400 font-bold text-sm">⚡ Sass Compressed Production Command</div>
      <div class="bg-slate-950 p-3 rounded-lg border border-slate-800 text-emerald-400">
        $ sass --style=compressed --source-map scss/main.scss dist/main.min.css
      </div>
      <div class="text-slate-400 text-[11px]">
        [OPTIMIZED] Original size: 48 KB ➔ Minified size: 12 KB (75% savings!)<br/>
        [MAP] Generated dist/main.min.css.map for DevTools debugging!
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Fast Page Load Speeds', km: 'ល្បឿននៃការ Load ទំព័រ' },
      description: {
        en: 'Minifying SCSS output reduces CSS payload size, improving Core Web Vitals and SEO rankings.',
        km: 'ការ Minify កូដ CSS ជួយកាត់បន្ថយទំហំឯកសារ ធ្វើឲ្យ Web Load លឿន និងទទួលបាន SEO Ranking ល្អ។'
      }
    },
    practiceExercise: {
      question: { en: 'Which CLI flag produces minified, compressed output in Sass?', km: 'តើ CLI Flag មួយណាដែលបង្កើត Output ដែលបាន Minified/Compressed ក្នុង Sass?' },
      solution: '--style=compressed'
    },
    quizQuestions: [
      {
        id: 'q-sass-m10-3',
        question: { en: 'What is the purpose of generating a .css.map source map file during Sass compilation?', km: 'តើការបង្កើតឯកសារ .css.map source map ពេល Compile Sass មានគោលបំណងអ្វី?' },
        options: [
          { id: '1', text: { en: 'It maps browser CSS back to exact .scss source line numbers for debugging', km: 'វា ភ្ជាប់ កូដ CSS ក្នុង Browser ត្រឡប់ ទៅ ជួរ កូដ .scss ដើម សម្រាប់ Debugging' }, isCorrect: true },
          { id: '2', text: { en: 'It renders Google Maps inside CSS', km: 'វា បង្ហាញ Google Maps' }, isCorrect: false }
        ],
        explanation: {
          en: 'Sourcemaps connect compiled CSS to original Sass source lines in DevTools.',
          km: 'Sourcemaps ភ្ជាប់កូដ CSS ក្នុង DevTools ទៅកាន់ជូរកូដ Sass ដើម។'
        }
      }
    ]
  }
];
