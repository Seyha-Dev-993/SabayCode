import { FrontendLesson } from '../types/frontendClass';

export const SASS_LESSONS_PART1: FrontendLesson[] = [
  // Module 1: Introduction & Setup
  {
    id: 'sass-m1-l1',
    slug: 'what-is-sass-preprocessor',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: { en: '1.1 What is Sass & CSS Preprocessors', km: '១.១ អ្វីទៅជា Sass & CSS Preprocessor' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor—a tool that extends CSS with features like variables, nesting, mixins, and functions. Browsers cannot read Sass directly, so Sass source code is compiled into standard CSS.',
      km: 'Sass (Syntactically Awesome Style Sheets) គឺជា CSS Preprocessor ដែលជួយបន្ថែមសមត្ថភាពឲ្យ CSS ដូចជា Variables, Nesting, Mixins, និង Functions។ Browser មិនអាចអាន Sass ដោយផ្ទាល់បានទេ ដូច្នេះកូដ Sass ត្រូវតែ Compile ទៅជា CSS Standard មុននឹងប្រើលើ Web។'
    },
    tutorial: {
      en: 'Sass helps developers write cleaner, DRY (Don\'t Repeat Yourself) stylesheets that scale easily for large enterprise applications.',
      km: 'Sass ជួយអ្នកអភិវឌ្ឍន៍សរសេរ CSS កាន់តែមានរបៀប មិនជាន់គ្នា (DRY Principle) និងងាយស្រួលគ្រប់គ្រងលើ Project ធំៗ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Exact Compiled CSS Output from Sass */
    .hero-card {
      background-color: #0f172a;
      border: 1px solid #1e293b;
      padding: 1.5rem;
      border-radius: 1rem;
    }
    .hero-card .title {
      color: #ec4899;
      font-size: 1.25rem;
      font-weight: 700;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2 flex items-center justify-between">
          <span>🎨 SCSS Source Code</span>
          <span class="text-[10px] text-slate-500">style.scss</span>
        </div>
        <pre class="text-slate-300 overflow-x-auto"><code>$primary: #ec4899;

.hero-card {
  background-color: #0f172a;
  border: 1px solid #1e293b;
  padding: 1.5rem;
  border-radius: 1rem;

  .title {
    color: $primary;
    font-size: 1.25rem;
    font-weight: 700;
  }
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2 flex items-center justify-between">
          <span>⚡ Compiled CSS Output</span>
          <span class="text-[10px] text-slate-500">style.css</span>
        </div>
        <pre class="text-slate-300 overflow-x-auto"><code>.hero-card {
  background-color: #0f172a;
  border: 1px solid #1e293b;
  padding: 1.5rem;
  border-radius: 1rem;
}
.hero-card .title {
  color: #ec4899;
  font-size: 1.25rem;
  font-weight: 700;
}</code></pre>
      </div>
    </div>

    <!-- Rendered Result -->
    <div class="hero-card">
      <div class="title">Sass Preprocessor Demo</div>
      <p class="text-xs text-slate-400 mt-2">Sass simplifies CSS styling by adding variables and nested selectors!</p>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why Large Projects Use Preprocessors', km: 'ហេតុអ្វី Project ធំៗប្រើ Preprocessor' },
      description: {
        en: 'Without Sass, modifying a color scheme requires updating dozens of CSS files manually. With Sass variables, changing a single line updates the entire site.',
        km: 'ប្រសិនបើគ្មាន Sass ការផ្លាស់ប្តូរ Theme ពណ៌ត្រូវធ្វើការកែប្រែកូដ CSS រាប់រយជួរ។ ជាមួយ Sass គ្រាន់តែប្តូរ Variable មួយជួរ កូដទាំងមូលនឹងប្តូរតាមភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: { en: 'What tool converts Sass files into standard CSS for browsers?', km: 'តើ Tool អ្វីដែលបំលែងឯកសារ Sass ទៅជា CSS Standard សម្រាប់ Browser?' },
      solution: 'Sass Compiler (such as Dart Sass CLI or Vite Sass plugin)'
    },
    quizQuestions: [
      {
        id: 'q-sass-m1-1',
        question: { en: 'Can web browsers run .scss files directly without compilation?', km: 'តើ Web Browsers អាចរត់ឯកសារ .scss ដោយផ្ទាល់ដោយមិនបាច់ Compile បានទេ?' },
        options: [
          { id: '1', text: { en: 'No, Sass must be compiled into CSS first', km: 'ទេ, Sass ត្រូវតែ Compile ទៅជា CSS សិន' }, isCorrect: true },
          { id: '2', text: { en: 'Yes, modern browsers support SCSS directly', km: 'បាន, Browser ទំនើបគាំទ្រ SCSS ដោយផ្ទាល់' }, isCorrect: false }
        ],
        explanation: {
          en: 'Browsers only parse native CSS. A Sass compiler must build .scss into .css before deployment.',
          km: 'Browser ស្គាល់តែ CSS ប៉ុណ្ណោះ។ Sass compiler ត្រូវ Compile .scss ទៅជា .css ជាមុនសិន។'
        }
      }
    ]
  },
  {
    id: 'sass-m1-l2',
    slug: 'sass-vs-scss-syntax',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: { en: '1.2 Sass vs. SCSS Syntax Differences', km: '១.២ ភាពខុសគ្នារវាង Sass & SCSS Syntax' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Sass offers two syntax formats: Indented Syntax (.sass) which omits curly braces and semicolons relying on indentation, and SCSS (.scss) which uses standard CSS-compatible curly braces and semicolons. SCSS is the industry standard format.',
      km: 'Sass មានទម្រង់ Syntax ពីរ៖ Indented Syntax (.sass) មិនប្រើសញ្ញា {} និង ; ឡើយដោយប្រើ Indentation ជំនួសវិញ, និង SCSS (.scss) ដែលប្រើសញ្ញា {} និង ; ដូច CSS ធម្មតា។ SCSS គឺជាទម្រង់ពេញនិយមបំផុតក្នុងឧស្សាហកម្ម Web។'
    },
    tutorial: {
      en: 'Because SCSS is a strict superset of CSS, any valid CSS file is also a valid SCSS file! This makes migrating from CSS to SCSS seamless.',
      km: 'ដោយសារតែ SCSS គឺជា Superset នៃ CSS ដូច្នេះកូដ CSS ធម្មតាទាំងអស់សុទ្ធតែជាកូដ SCSS ដែលត្រឹមត្រូវ! នេះធ្វើឱ្យការប្តូរពី CSS ទៅ SCSS មានភាពងាយស្រួលបំផុត។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .badge-demo {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: #ec4899;
      color: white;
      border-radius: 9999px;
      font-weight: 600;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-amber-400 font-bold mb-2">.sass (Indented Syntax)</div>
        <pre class="text-slate-300 overflow-x-auto"><code>$primary: #ec4899

.badge-demo
  display: inline-block
  padding: 0.5rem 1rem
  background-color: $primary
  color: white
  border-radius: 9999px</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-emerald-400 font-bold mb-2">.scss (SCSS Syntax - Standard)</div>
        <pre class="text-slate-300 overflow-x-auto"><code>$primary: #ec4899;

.badge-demo {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: $primary;
  color: white;
  border-radius: 9999px;
}</code></pre>
      </div>
    </div>

    <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
      <span class="badge-demo">✨ SCSS Badge Component</span>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Industry Adoption of SCSS', km: 'ការប្រើប្រាស់ SCSS ក្នុងពិភពពិត' },
      description: {
        en: 'Over 95% of Sass projects use .scss because developers can copy-paste native CSS code directly into SCSS files without formatting errors.',
        km: 'ជាង ៩៥% នៃគម្រោងប្រើប្រាស់ .scss ដោយសារតែ Developer អាច Copy-Paste កូដ CSS ធម្មតាចូលក្នុង SCSS បានភ្លាមៗដោយមិនមាន Error។'
      }
    },
    practiceExercise: {
      question: { en: 'Which extension (.sass or .scss) uses curly braces and semicolons?', km: 'តើ File Extension មួយណា (.sass ឬ .scss) ដែលប្រើសញ្ញា {} និង semicolons ;?' },
      solution: '.scss'
    },
    quizQuestions: [
      {
        id: 'q-sass-m1-2',
        question: { en: 'Is valid native CSS code valid inside an SCSS (.scss) file?', km: 'តើកូដ CSS ធម្មតា អាចសរសេរក្នុងឯកសារ SCSS (.scss) បានដែរឬទេ?' },
        options: [
          { id: '1', text: { en: 'Yes, SCSS is a strict superset of CSS', km: 'បាន, SCSS គឺជា Superset នៃ CSS' }, isCorrect: true },
          { id: '2', text: { en: 'No, CSS syntax will cause compile errors', km: 'ទេ, CSS syntax នឹងធ្វើឲ្យមាន Error' }, isCorrect: false }
        ],
        explanation: {
          en: 'SCSS fully supports standard CSS syntax, allowing gradual adoption.',
          km: 'SCSS គាំទ្រ CSS Syntax ទាំងស្រុង ធ្វើឲ្យការរៀន និងប្រើប្រាស់ងាយស្រួល។'
        }
      }
    ]
  },
  {
    id: 'sass-m1-l3',
    slug: 'setting-up-sass-compiler',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: { en: '1.3 Setting Up Sass Compiler (CLI & Vite)', km: '១.៣ ការដំឡើង Sass Compiler (CLI & Vite)' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'To compile Sass into CSS, developers use Dart Sass. You can install it globally via npm `npm install -g sass`, use VS Code extensions like "Live Sass Compiler", or let modern build tools like Vite automatically compile SCSS.',
      km: 'ដើម្បី Compile Sass ទៅជា CSS យើងប្រើប្រាស់ Dart Sass។ អ្នកអាចដំឡើងតាម npm `npm install -g sass`, ប្រើ VS Code extension "Live Sass Compiler", ឬប្រើ Build tool ទំនើបដូចជា Vite ដែល Compile SCSS ដោយស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: 'CLI Command: `sass --watch src/scss/main.scss dist/css/main.css`. The `--watch` flag continuously re-compiles whenever you save `.scss` files.',
      km: 'ពាក្យបញ្ជា CLI៖ `sass --watch src/scss/main.scss dist/css/main.css`។ សញ្ញា `--watch` ជួយ Compile ដោយស្វ័យប្រវត្តិនីមួយៗពេលអ្នក Save ឯកសារ .scss។'
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
      <div class="text-pink-400 font-bold text-sm">💻 Sass CLI Watch Command</div>
      <div class="bg-slate-950 p-3 rounded-lg border border-slate-800 text-emerald-400">
        $ npm install -g sass<br/>
        $ sass --watch scss/style.scss css/style.css
      </div>
      <div class="text-slate-400 text-[11px]">
        [WATCH] Watching scss/style.scss for changes...<br/>
        [BUILD] Compiled scss/style.scss to css/style.css in 14ms!
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Vite & Webpack Auto Integration', km: 'ការប្រើជាមួយ Vite & Webpack' },
      description: {
        en: 'In modern frameworks (React, Vue, Next.js), simply running `npm install -D sass` allows importing `.module.scss` files directly into components.',
        km: 'ក្នុង Framework ទំនើបៗគ្រាន់តែ Run `npm install -D sass` នោះអ្នកអាច import ឯកសារ `.module.scss` ចូលក្នុង Component បានភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: { en: 'Which CLI flag tells the Sass compiler to automatically recompile on file save?', km: 'តើ CLI Flag មួយណាដែលប្រាប់ Sass Compiler ឲ្យ Recompile ដោយស្វ័យប្រវត្តិពេល Save?' },
      solution: '--watch'
    },
    quizQuestions: [
      {
        id: 'q-sass-m1-3',
        question: { en: 'What is the official primary implementation of the Sass language today?', km: 'តើ Implementation ផ្លូវការចម្បងរបស់ Sass នាពេលបច្ចុប្បន្នជាអ្វី?' },
        options: [
          { id: '1', text: { en: 'Dart Sass', km: 'Dart Sass' }, isCorrect: true },
          { id: '2', text: { en: 'Ruby Sass (Deprecated)', km: 'Ruby Sass (ឈប់ប្រើ)' }, isCorrect: false }
        ],
        explanation: {
          en: 'Dart Sass is the active, officially supported reference implementation of Sass.',
          km: 'Dart Sass គឺជា Reference Implementation ផ្លូវការដែលកំពុងត្រូវបានប្រើប្រាស់ និងអភិវឌ្ឍ។'
        }
      }
    ]
  },

  // Module 2: Variables
  {
    id: 'sass-m2-l1',
    slug: 'declaring-variables',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: { en: '2.1 Declaring Sass Variables', km: '២.១ ការប្រកាស Sass Variables ($var)' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Sass variables start with a dollar sign `$`. They store values like colors, font stacks, pixel dimensions, or shadows so you can reuse them throughout your stylesheet.',
      km: 'Sass Variables ចាប់ផ្តើមដោយសញ្ញា `$`។ វាត្រូវបានប្រើដើម្បីផ្ទុកតម្លៃដូចជា ពណ៌, Font, ទំហំ Pixel, ឬ Shadow ដើម្បីអាចយកមកប្រើប្រាស់ឡើងវិញបានគ្រប់កន្លែង។'
    },
    tutorial: {
      en: 'Syntax: `$variable-name: value;`. Example: `$brand-primary: #6366f1;`. Changing `$brand-primary` updates all elements using it.',
      km: 'ទម្រង់សរសេរ៖ `$variable-name: value;`។ ឧទាហរណ៍៖ `$brand-primary: #6366f1;`។ ការប្តូរតម្លៃ variable នេះ នឹងអាប់ដេតគ្រប់ Element ដែលប្រើវា។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .btn-sass {
      background-color: #6366f1;
      color: #ffffff;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 600;
      border: none;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS Input</div>
        <pre class="text-slate-300 overflow-x-auto"><code>$primary-color: #6366f1;
$btn-padding: 0.75rem 1.5rem;
$border-radius: 0.5rem;

.btn-sass {
  background-color: $primary-color;
  color: #ffffff;
  padding: $btn-padding;
  border-radius: $border-radius;
  font-weight: 600;
  border: none;
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.btn-sass {
  background-color: #6366f1;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  border: none;
}</code></pre>
      </div>
    </div>

    <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
      <button class="btn-sass">Sass Variable Button</button>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Design Tokens & Color Schemes', km: 'Design Tokens & ពណ៌រចនា' },
      description: {
        en: 'Design teams define primary, secondary, and accent color tokens in SCSS variables so developers strictly follow brand identity.',
        km: 'ក្រុម Design កំណត់ពណ៌ Primary, Secondary, និង Accent ក្នុង SCSS Variables ដើម្បីឲ្យ Developer អនុវត្តតាម Brand Identity បានត្រឹមត្រូវ។'
      }
    },
    practiceExercise: {
      question: { en: 'Declare an SCSS variable named $font-main set to "Inter, sans-serif".', km: 'ប្រកាស SCSS Variable ឈ្មោះ $font-main មានតម្លៃ "Inter, sans-serif"។' },
      solution: '$font-main: "Inter, sans-serif";'
    },
    quizQuestions: [
      {
        id: 'q-sass-m2-1',
        question: { en: 'Which character must precede every Sass variable declaration?', km: 'តើសញ្ញាអ្វីដែលត្រូវនៅខាងមុខការប្រកាស Sass Variable ជាដាច់ខាត?' },
        options: [
          { id: '1', text: { en: '$ (Dollar sign)', km: '$ (សញ្ញាដុល្លារ)' }, isCorrect: true },
          { id: '2', text: { en: '@ (At symbol)', km: '@ (សញ្ញាអ៊ែត)' }, isCorrect: false }
        ],
        explanation: {
          en: 'Sass variables always begin with `$`, while `@` is reserved for directives like `@mixin` or `@if`.',
          km: 'Sass Variable ចាប់ផ្តើមដោយ `$`, ឯ `@` ប្រើសម្រាប់ Directives ដូចជា `@mixin` ឬ `@if`។'
        }
      }
    ]
  },
  {
    id: 'sass-m2-l2',
    slug: 'using-variables-colors-fonts-spacing',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: { en: '2.2 Using Variables for Colors, Fonts & Spacing', km: '២.២ ការប្រើ Variables លើ Colors, Fonts & Spacing' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Sass variables can store any valid CSS property value, including numbers with units (16px, 1.5rem), lists (`10px 20px`), font stacks, and colors. Using spacing scales ensures visual consistency.',
      km: 'Sass variables អាចផ្ទុកតម្លៃ CSS គ្រប់ប្រភេទ រួមមាន លេខអមឯកតា (16px, 1.5rem), Lists (`10px 20px`), Fonts, និង Colors។ ការប្រើ Spacing scales ជួយឲ្យ UI មានលំនឹងស្អាតបាត។'
    },
    tutorial: {
      en: 'Define a consistent design scale: `$spacer-sm: 8px; $spacer-md: 16px; $spacer-lg: 24px;`. Use them across padding, margins, and gaps.',
      km: 'បង្កើត Design Scale៖ `$spacer-sm: 8px; $spacer-md: 16px; $spacer-lg: 24px;`។ យកទៅប្រើប្រាស់លើ padding, margins, និង gaps។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .card-box {
      background-color: #1e293b;
      padding: 1rem;
      border-radius: 0.75rem;
      border-left: 4px solid #10b981;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS Variables Scale</div>
        <pre class="text-slate-300 overflow-x-auto"><code>$color-success: #10b981;
$bg-card: #1e293b;
$spacing-md: 1rem;
$radius-md: 0.75rem;

.card-box {
  background-color: $bg-card;
  padding: $spacing-md;
  border-radius: $radius-md;
  border-left: 4px solid $color-success;
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.card-box {
  background-color: #1e293b;
  padding: 1rem;
  border-radius: 0.75rem;
  border-left: 4px solid #10b981;
}</code></pre>
      </div>
    </div>

    <div class="card-box">
      <h4 class="font-bold text-emerald-400 text-sm">System Alert</h4>
      <p class="text-xs text-slate-300 mt-1">Spacing and color tokens applied via SCSS variables.</p>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Typography & Spacing System', km: 'ប្រព័ន្ធ Typography & Spacing' },
      description: {
        en: 'By mapping typography sizes to `$text-sm: 0.875rem; $text-lg: 1.125rem;`, developers build layout themes that conform strictly to design system guidelines.',
        km: 'ការកំណត់ទំហំអក្សរតាម `$text-sm: 0.875rem;` ជួយឲ្យ UI ទាំងមូលគោរពតាមស្តង់ដារ Design System យ៉ាងប្រកដ។'
      }
    },
    practiceExercise: {
      question: { en: 'Write SCSS code defining $bg-main: #0f172a; and applying it to body.', km: 'សរសេរ SCSS ប្រកាស $bg-main: #0f172a; ហើយយកទៅអានលើ body។' },
      solution: '$bg-main: #0f172a; body { background-color: $bg-main; }'
    },
    quizQuestions: [
      {
        id: 'q-sass-m2-2',
        question: { en: 'Can Sass variables hold composite values like "10px 20px" or multiple fonts?', km: 'តើ Sass Variable អាចផ្ទុកតម្លៃរួមគ្នាច្រើនដូចជា "10px 20px" ឬ Font ច្រើនបានទេ?' },
        options: [
          { id: '1', text: { en: 'Yes, any valid CSS property value is supported', km: 'បាន, តម្លៃ CSS ត្រឹមត្រូវទាំងអស់សុទ្ធតែប្រើបាន' }, isCorrect: true },
          { id: '2', text: { en: 'No, variables only accept single numbers or hex colors', km: 'ទេ, Variable ទទួលតែលេខទោល ឬពណ៌ Hex ប៉ុណ្ណោះ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Sass variables accept any valid CSS token or list of tokens.',
          km: 'Sass variables អាចផ្ទុកតម្លៃ CSS គ្រប់ប្រភេទដែលត្រឹមត្រូវ។'
        }
      }
    ]
  },
  {
    id: 'sass-m2-l3',
    slug: 'variable-scope-global-vs-local',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: { en: '2.3 Variable Scope (Global vs. Local & !default)', km: '២.៣ Scope នៃ Variable (Global vs Local & !default)' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Variables declared outside a rule are Global (accessible everywhere). Variables declared inside a selector block are Local (accessible only within that selector). You can force a local variable to be global with `!global`, or allow overrides with `!default`.',
      km: 'Variable ប្រកាសនៅខាងក្រៅ Rule ជា Global (ប្រើបានគ្រប់កន្លែង)។ Variable ប្រកាសក្នុង Selector Block ជា Local (ប្រើបានតែក្នុង Block នោះ)។ អ្នកអាចប្រែក្លាយ Local ទៅ Global ដោយប្រើ `!global` ឬបើកឲ្យ Override ដោយ `!default`។'
    },
    tutorial: {
      en: 'The `!default` flag: `$primary: #3b82f6 !default;` sets the value ONLY if `$primary` has not already been assigned. Perfect for theme configuration!',
      km: 'សញ្ញា `!default`៖ `$primary: #3b82f6 !default;` កំណត់តម្លៃបានតែពេលដែល `$primary` មិនទាន់មានតម្លៃប៉ុណ្ណោះ។ ពិសេសសម្រាប់ធ្វើ Theme Library!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .widget-container {
      background-color: #0f172a;
      padding: 1rem;
      border-radius: 0.5rem;
    }
    .widget-container .widget-btn {
      background-color: #f59e0b;
      color: #ffffff;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS Scope Example</div>
        <pre class="text-slate-300 overflow-x-auto"><code>$theme-color: #3b82f6; // Global

.widget-container {
  $local-accent: #f59e0b; // Local scope
  background-color: #0f172a;
  padding: 1rem;

  .widget-btn {
    background-color: $local-accent;
    color: #ffffff;
    padding: 0.5rem 1rem;
  }
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.widget-container {
  background-color: #0f172a;
  padding: 1rem;
}
.widget-container .widget-btn {
  background-color: #f59e0b;
  color: #ffffff;
  padding: 0.5rem 1rem;
}</code></pre>
      </div>
    </div>

    <div class="widget-container">
      <button class="widget-btn">Widget Accent Button</button>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Configurable Theme Libraries', km: 'ការកំណត់រចនាសម្ព័ន្ធ Theme' },
      description: {
        en: 'Frameworks like Bootstrap SCSS use `!default` on all variables so users can customize primary colors before importing the library.',
        km: 'Framework ដូចជា Bootstrap SCSS ប្រើ `!default` លើគ្រប់ Variable ដើម្បីឲ្យ User អាចប្តូរពណ៌តាមចិត្តមុននឹង Import Library។'
      }
    },
    practiceExercise: {
      question: { en: 'What flag allows a Sass variable to be overridden by a previous declaration?', km: 'តើ Flag អ្វីដែលអនុញ្ញាតឲ្យ Sass Variable ត្រូវ Override ដោយការប្រកាសពីមុន?' },
      solution: '!default'
    },
    quizQuestions: [
      {
        id: 'q-sass-m2-3',
        question: { en: 'What happens if you try to use a local SCSS variable outside its selector block?', km: 'តើមានអ្វីកើតឡើងប្រសិនបើអ្នកព្យាយាមប្រើ Local SCSS Variable នៅខាងក្រៅ Selector Block របស់វា?' },
        options: [
          { id: '1', text: { en: 'The Sass compiler throws an "Undefined variable" error', km: 'Sass compiler នឹងបង្ហាញ Error "Undefined variable"' }, isCorrect: true },
          { id: '2', text: { en: 'It automatically defaults to black color', km: 'វា នឹង កំណត់ ទៅ ពណ៌ ខ្មៅ ដោយ ស្វ័យប្រវត្តិ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Local variables are out of scope outside their declaring block.',
          km: 'Local variable មិនអាចមើលឃើញនៅខាងក្រៅ Block ដែលវាប្រកាសឡើយ។'
        }
      }
    ]
  },

  // Module 3: Nesting
  {
    id: 'sass-m3-l1',
    slug: 'nesting-selectors',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: { en: '3.1 Nesting Selectors', km: '៣.១ ការប្រើ Nesting Selectors' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Nesting allows you to place CSS selectors inside one another, mirroring the visual hierarchy of your HTML tree. It eliminates repetitive code like writing `.card .card-title` over and over.',
      km: 'Nesting អនុញ្ញាតឲ្យអ្នកសរសេរ CSS Selectors បញ្ចូលគ្នាតាមជាន់ ដូចជាទម្រង់ដើមឈើនៃ HTML។ វាជួយកាត់បន្ថយការសរសេរឈ្មោះ Class ដដែលៗដូចជា `.card .card-title`។'
    },
    tutorial: {
      en: 'Instead of CSS: `.nav { ... } .nav li { ... } .nav a { ... }`, SCSS lets you write `.nav { li { a { ... } } }`.',
      km: 'ជំនួសឲ្យ CSS៖ `.nav { ... } .nav li { ... }`, SCSS ឲ្យសរសេរ `.nav { li { a { ... } } }` យ៉ាងងាយស្រួល។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .nav-bar {
      background-color: #0f172a;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
    }
    .nav-bar .nav-list {
      display: flex;
      gap: 1rem;
      list-style: none;
    }
    .nav-bar .nav-list .nav-link {
      color: #38bdf8;
      text-decoration: none;
      font-weight: 600;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS Nested Input</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.nav-bar {
  background-color: #0f172a;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;

  .nav-list {
    display: flex;
    gap: 1rem;
    list-style: none;

    .nav-link {
      color: #38bdf8;
      text-decoration: none;
      font-weight: 600;
    }
  }
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.nav-bar {
  background-color: #0f172a;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}
.nav-bar .nav-list {
  display: flex;
  gap: 1rem;
  list-style: none;
}
.nav-bar .nav-list .nav-link {
  color: #38bdf8;
  text-decoration: none;
  font-weight: 600;
}</code></pre>
      </div>
    </div>

    <nav class="nav-bar">
      <ul class="nav-list">
        <li><a href="#" class="nav-link">Home</a></li>
        <li><a href="#" class="nav-link">Courses</a></li>
        <li><a href="#" class="nav-link">Docs</a></li>
      </ul>
    </nav>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Clean HTML Component Matching', km: 'ការរៀបចំកូដដូចរចនាសម្ព័ន្ធ HTML' },
      description: {
        en: 'Nesting makes stylesheets intuitive to navigate because component layout matches the HTML markup structure line for line.',
        km: 'Nesting ធ្វើឲ្យការអាន និងកែកូដ CSS មានភាពវិចារណញាណ ព្រោះវាដើរស្របគ្នានឹងទម្រង់ HTML នៃ Component។'
      }
    },
    practiceExercise: {
      question: { en: 'Nest an h1 selector inside a .hero selector targeting color red.', km: 'សរសេរ Nesting Selector h1 នៅក្នុង .hero ដោយកំណត់ពណ៌ក្រហម។' },
      solution: '.hero { h1 { color: red; } }'
    },
    quizQuestions: [
      {
        id: 'q-sass-m3-1',
        question: { en: 'What visual structure does Sass nesting mirror?', km: 'តើរចនាសម្ព័ន្ធរូបរាងអ្វីដែល Sass Nesting យកតម្រាប់តាម?' },
        options: [
          { id: '1', text: { en: 'The HTML DOM tree hierarchy', km: 'រចនាសម្ព័ន្ធជាន់ថ្នាក់នៃ HTML DOM tree' }, isCorrect: true },
          { id: '2', text: { en: 'Database tables', km: 'តារាង Database' }, isCorrect: false }
        ],
        explanation: {
          en: 'Nesting directly mirrors parent-child HTML element relationships.',
          km: 'Nesting យកតម្រាប់តាមទំនាក់ទំនង Parent-Child របស់ HTML elements។'
        }
      }
    ]
  },
  {
    id: 'sass-m3-l2',
    slug: 'parent-selector-ampersand',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: { en: '3.2 Parent Selector Ampersand (&)', km: '៣.២ ការប្រើ Parent Selector (&)' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The ampersand `&` character references the outer parent selector in Sass. It is used to attach pseudo-classes (`&:hover`, `&:focus`), pseudo-elements (`&::before`), active state modifiers (`&.is-active`), or BEM element suffixes (`&__title`).',
      km: 'សញ្ញា `&` (Ampersand) តំណាងឲ្យ Parent Selector ខាងក្រៅក្នុង Sass។ វាត្រូវបានប្រើដើម្បីភ្ជាប់ Pseudo-classes (`&:hover`), Pseudo-elements (`&::before`), Class status (`&.is-active`), ឬ BEM modifiers (`&__title`)។'
    },
    tutorial: {
      en: '`button { &:hover { background: red; } &.disabled { opacity: 0.5; } }`. Compiles to `button:hover` and `button.disabled`.',
      km: '`button { &:hover { background: red; } &.disabled { opacity: 0.5; } }`។ Compile ចេញជា `button:hover` និង `button.disabled`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .btn-action {
      background-color: #3b82f6;
      color: white;
      padding: 0.5rem 1.25rem;
      border-radius: 0.5rem;
      font-weight: 600;
      transition: all 0.2s;
    }
    .btn-action:hover {
      background-color: #2563eb;
      transform: translateY(-2px);
    }
    .btn-action.is-loading {
      opacity: 0.6;
      cursor: wait;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS with &amp; Selector</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.btn-action {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
  }

  &.is-loading {
    opacity: 0.6;
    cursor: wait;
  }
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.btn-action {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
}
.btn-action:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
}
.btn-action.is-loading {
  opacity: 0.6;
  cursor: wait;
}</code></pre>
      </div>
    </div>

    <div class="flex gap-3 bg-slate-900 border border-slate-800 rounded-xl p-4 justify-center">
      <button class="btn-action">Hover Me</button>
      <button class="btn-action is-loading">Loading...</button>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'BEM Class Generation', km: 'ការបង្កើត BEM Class' },
      description: {
        en: 'In BEM architecture, `.card { &__header { ... } &__body { ... } }` compiles cleanly into `.card__header` and `.card__body`.',
        km: 'ក្នុងស្ថាបត្យកម្ម BEM, `.card { &__header { ... } }` នឹង Compile ចេញជា `.card__header` ដោយស្វ័យប្រវត្តិ។'
      }
    },
    practiceExercise: {
      question: { en: 'Write SCSS targeting an active state on a .tab element using &.', km: 'សរសេរ SCSS ភ្ជាប់ active state លើ .tab ដោយប្រើសញ្ញា &។' },
      solution: '.tab { &.active { border-bottom: 2px solid blue; } }'
    },
    quizQuestions: [
      {
        id: 'q-sass-m3-2',
        question: { en: 'What does the & symbol represent inside a nested SCSS selector?', km: 'តើសញ្ញា & ជំនួសឲ្យអ្វីនៅក្នុង Nested SCSS Selector?' },
        options: [
          { id: '1', text: { en: 'The exact outer parent selector string', km: 'អត្ថបទ Parent Selector ខាងក្រៅបង្អស់' }, isCorrect: true },
          { id: '2', text: { en: 'An HTML wildcard element', km: 'HTML Wildcard Element' }, isCorrect: false }
        ],
        explanation: {
          en: 'The ampersand is replaced by the parent selector during compilation.',
          km: 'សញ្ញា Ampersand ត្រូវជំនួសដោយ Parent Selector ពេល Compile។'
        }
      }
    ]
  },
  {
    id: 'sass-m3-l3',
    slug: 'avoiding-deep-nesting-best-practices',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: { en: '3.3 Avoiding Overly Deep Nesting (Best Practices)', km: '៣.៣ ការចៀសវាង Nesting ជ្រៅពេក (Best Practices)' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A common mistake with Sass is nesting selectors too deeply (e.g. 4+ levels). Over-nesting creates overly specific CSS selectors like `.main .content .article .title a`, making styles hard to override and increasing compiled file size.',
      km: 'កំហុសឆ្គងទូទៅក្នុង Sass គឺការ Nesting ជ្រៅពេក (ចាប់ពី ៤ ជាន់ឡើង)។ ការ Nesting ជ្រៅពេកបង្កើតបានជា Selector Specificity ខ្ពស់ពេកដូចជា `.main .content .article .title a` ដែលពិបាក Override និងធ្វើឲ្យ File CSS ធំខ្លាំង។'
    },
    tutorial: {
      en: 'The "The Inception Rule": Do NOT nest more than 3 levels deep! Prefer flat BEM class names or utility helpers whenever possible.',
      km: 'ច្បាប់ "The Inception Rule"៖ ហាម Nest លើសពី ៣ ជាន់ឲ្យសោះ! គួរប្រើ BEM Class Name ស្មើ ឬ Utility Helpers ជំនួសវិញ។'
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
      <!-- BAD Practice -->
      <div class="bg-slate-900 border border-rose-900/50 rounded-xl p-3">
        <div class="text-rose-400 font-bold mb-2">❌ BAD: Overly Deep (4 Levels)</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.page {
  .section {
    .card {
      .title {
        color: red; // .page .section .card .title
      }
    }
  }
}</code></pre>
      </div>

      <!-- GOOD Practice -->
      <div class="bg-slate-900 border border-emerald-900/50 rounded-xl p-3">
        <div class="text-emerald-400 font-bold mb-2">✅ GOOD: Flat &amp; BEM (1-2 Levels)</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.card {
  background: #1e293b;

  &__title {
    color: #ec4899; // .card__title
  }
}</code></pre>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'CSS Specificity Wars', km: 'បញ្ហា CSS Specificity' },
      description: {
        en: 'Over-nested SCSS forces developers to use `!important` later because simple selectors cannot override 4-level deep parent selectors.',
        km: 'ការ Nest ជ្រៅពេកបង្ខំឲ្យ Developer ប្រើ `!important` នៅពេលក្រោយ ព្រោះ Selector ធម្មតាមិនអាច Override កូដ ៤ ជាន់បានឡើយ។'
      }
    },
    practiceExercise: {
      question: { en: 'According to best practices, what is the maximum recommended nesting depth in SCSS?', km: 'តាមស្តង់ដារល្អបំផុត តើ Nesting ជម្រៅអតិបរមាដែលគួរប្រើក្នុង SCSS មានប៉ុន្មានជាន់?' },
      solution: '3 levels maximum'
    },
    quizQuestions: [
      {
        id: 'q-sass-m3-3',
        question: { en: 'Why is excessive nesting (e.g., 5 levels deep) harmful in Sass?', km: 'ហេតុអ្វីបានជាការ Nesting ជ្រៅពេក (ឧទាហរណ៍ ៥ ជាន់) ផ្តល់ផលអាក្រក់ក្នុង Sass?' },
        options: [
          { id: '1', text: { en: 'It creates high CSS specificity and bloats the compiled CSS bundle', km: 'វា បង្កើត CSS Specificity ខ្ពស់ ពិបាក Override និង ធ្វើឲ្យ Bundle CSS ធំ' }, isCorrect: true },
          { id: '2', text: { en: 'It crashes the web server', km: 'វា ធ្វើឲ្យ Server រលត់' }, isCorrect: false }
        ],
        explanation: {
          en: 'Deep nesting creates unnecessarily long CSS selector chains.',
          km: 'Nesting ជ្រៅ បង្កើត Selector Chain វែងជ្រុលដែលពិបាកគ្រប់គ្រង។'
        }
      }
    ]
  },

  // Module 4: Partials & Organizing Files
  {
    id: 'sass-m4-l1',
    slug: 'what-are-partials',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: { en: '4.1 What are Partials (_filename.scss)', km: '៤.១ អ្វីទៅជា Partials (_filename.scss)' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Partials are SCSS files that contain snippet fragments of CSS. They start with an underscore prefix, like `_buttons.scss`. The underscore tells the Sass compiler NOT to compile that file into a standalone CSS file.',
      km: 'Partials គឺជាឯកសារ SCSS ដែលផ្ទុកកូដ CSS មួយផ្នែកៗ។ វាចាប់ផ្តើមដោយសញ្ញា Underscore នៅខាងមុខ ដូចជា `_buttons.scss`។ សញ្ញា Underscore ប្រាប់ Sass compiler ថាកុំ Compile ឯកសារនេះជា CSS ឯករាជ្យដាច់ដោយឡែកឲ្យសោះ។'
    },
    tutorial: {
      en: 'Instead of generating 20 separate CSS files for 20 component files, partials are combined together into a single compiled CSS file like `main.css`.',
      km: 'ជំនួសឲ្យការបង្កើតឯកសារ CSS ចំនួន ២០ ផ្សេងគ្នានៃ 20 Components ឯកសារ Partials ទាំងអស់ត្រូវរួមបញ្ចូលគ្នាជា CSS ដុំតែមួយដូចជា `main.css`។'
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
      <div class="text-pink-400 font-bold text-sm">📁 SCSS Partials File System</div>
      <div class="grid grid-cols-2 gap-2 text-slate-300">
        <div class="bg-slate-950 p-2 rounded border border-slate-800">
          <span class="text-amber-400">_variables.scss</span> (Partial)
        </div>
        <div class="bg-slate-950 p-2 rounded border border-slate-800">
          <span class="text-amber-400">_buttons.scss</span> (Partial)
        </div>
        <div class="bg-slate-950 p-2 rounded border border-slate-800">
          <span class="text-amber-400">_card.scss</span> (Partial)
        </div>
        <div class="bg-slate-950 p-2 rounded border border-emerald-800 text-emerald-400">
          <span>main.scss</span> (Entry Point)
        </div>
      </div>
      <div class="text-slate-400 text-[11px] border-t border-slate-800 pt-2">
        👉 Only <code class="text-emerald-400">main.scss</code> compiles to <code class="text-sky-400">dist/main.css</code>!
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Modular Code Maintenance', km: 'ការគ្រប់គ្រងកូដតាម Module' },
      description: {
        en: 'If you need to fix a button bug, you open `_buttons.scss` directly rather than searching through a 3,000-line single CSS file.',
        km: 'បើត្រូវការកែសម្រួល Button អ្នកគ្រាន់តែបើក `_buttons.scss` ដោយផ្ទាល់ ជាជាងការស្វែងរកក្នុងឯកសារ CSS ៣០០០ ជួរ។'
      }
    },
    practiceExercise: {
      question: { en: 'How should a Sass partial file named "header" be named on disk?', km: 'តើឯកសារ Sass Partial ឈ្មោះ "header" គួរតែត្រូវដាក់ឈ្មោះយ៉ាងដូចម្តេច?' },
      solution: '_header.scss'
    },
    quizQuestions: [
      {
        id: 'q-sass-m4-1',
        question: { en: 'What does the leading underscore in _card.scss signal to Sass?', km: 'តើសញ្ញា Underscore នៅខាងមុខ _card.scss បញ្ជាក់ប្រាប់ Sass អំពីអ្វី?' },
        options: [
          { id: '1', text: { en: 'Do not compile this file directly into an independent CSS file', km: 'កុំ Compile ឯកសារនេះជា CSS ឯករាជ្យដាច់ដោយឡែក' }, isCorrect: true },
          { id: '2', text: { en: 'It marks the file as encrypted', km: 'វា សម្គាល់ ឯកសារ ថា ជា ឯកសារ Encrypted' }, isCorrect: false }
        ],
        explanation: {
          en: 'Underscores mark files as partials intended only for importing/using in other entry files.',
          km: 'សញ្ញា Underscore សម្គាល់ឯកសារជា Partial សម្រាប់ Import បញ្ចូលក្នុង Entry point ប៉ុណ្ណោះ។'
        }
      }
    ]
  },
  {
    id: 'sass-m4-l2',
    slug: 'use-and-forward-directives',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: { en: '4.2 Modern Module System (@use & @forward)', km: '៤.២ ម៉ូឌុលទំនើប (@use & @forward)' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Modern Sass deprecated `@import` in favor of `@use` and `@forward`. `@use` loads partials as scoped modules (e.g. `variables.$primary`), preventing global namespace pollution. `@forward` re-exports modules for index aggregation.',
      km: 'Sass ទំនើបបានឈប់ប្រើ `@import` ហើយជំនួសដោយ `@use` និង `@forward`។ `@use` អាន Partials ជា Scoped Module (ដូចជា `variables.$primary`) ដោយការពារកុំឲ្យជាន់ឈ្មោះគ្នា។ ឯ `@forward` ប្រើសម្រាប់ Export ម៉ូឌុលបន្ត។'
    },
    tutorial: {
      en: '`@use "variables"; .btn { color: variables.$primary; }`. You can alias modules: `@use "variables" as v; .btn { color: v.$primary; }`.',
      km: '`@use "variables"; .btn { color: variables.$primary; }`។ អ្នកអាចប្រើ Alias៖ `@use "variables" as v; .btn { color: v.$primary; }`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .btn-module {
      background-color: #8b5cf6;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      border: none;
      font-weight: 600;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">main.scss (@use)</div>
        <pre class="text-slate-300 overflow-x-auto"><code>// Load partial module
@use "colors" as c;

.btn-module {
  background-color: c.$purple-500;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.btn-module {
  background-color: #8b5cf6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}</code></pre>
      </div>
    </div>

    <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
      <button class="btn-module">@use Module Styled</button>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why @import was Deprecated', km: 'ហេតុអ្វី `@import` ត្រូវបានលុបចោល' },
      description: {
        en: 'Old `@import` made all variables global, leading to hard-to-track naming collisions in large projects. `@use` keeps modules isolated and safe.',
        km: '`@import` បុរាណធ្វើឲ្យ Variable ទាំងអស់ក្លាយជា Global នាំឲ្យជាន់ឈ្មោះគ្នា។ ឯ `@use` រក្សាម៉ូឌុលនីមួយៗឲ្យដាច់ដោយឡែក និងមានសុវត្ថិភាព។'
      }
    },
    practiceExercise: {
      question: { en: 'Write an @use directive importing "_mixins.scss" as "m".', km: 'សរសេរ @use directive ដើម្បី import ឯកសារ "_mixins.scss" ជា alias "m"។' },
      solution: '@use "mixins" as m;'
    },
    quizQuestions: [
      {
        id: 'q-sass-m4-2',
        question: { en: 'Which directive replaces deprecated @import in modern Sass?', km: 'តើ Directive មួយណាដែលមកជំនួស @import ក្នុង Sass ទំនើប?' },
        options: [
          { id: '1', text: { en: '@use', km: '@use' }, isCorrect: true },
          { id: '2', text: { en: '@require', km: '@require' }, isCorrect: false }
        ],
        explanation: {
          en: '@use provides scoped module namespace protection.',
          km: '@use ផ្តល់នូវការការពារឈ្មោះ Scope Module មិនឲ្យជាន់គ្នា។'
        }
      }
    ]
  },
  {
    id: 'sass-m4-l3',
    slug: 'real-project-folder-structure',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: { en: '4.3 Real Project Architecture & Folder Layout', km: '៤.៣ រចនាសម្ព័ន្ធ Folder ក្នុង Project ជាក់ស្តែង' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A well-structured SCSS project divides code into focused subfolders like `abstracts/` (variables, mixins), `base/` (reset, typography), `components/` (buttons, cards), and `layout/` (navbar, footer).',
      km: 'គម្រោង SCSS ដែលមានរចនាសម្ព័ន្ធល្អ ត្រូវបែងចែកកូដជា Folder តូចៗដូចជា `abstracts/` (variables, mixins), `base/` (reset, typography), `components/` (buttons, cards), និង `layout/` (navbar, footer)។'
    },
    tutorial: {
      en: '`main.scss` acts as the orchestrator entry point that loads all subfolders using `@use` or `@forward`.',
      km: '`main.scss` ដើរតួជា Entry point មេដែលប្រមូលផ្តុំ Import រាល់ Subfolder ទាំងអស់តាមរយៈ `@use` ឬ `@forward`។'
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
      <div class="text-pink-400 font-bold text-sm">📂 Clean Production SCSS Layout</div>
      <pre class="text-slate-300 overflow-x-auto bg-slate-950 p-3 rounded-lg border border-slate-800">
scss/
├── abstracts/
│   ├── _variables.scss
│   └── _mixins.scss
├── base/
│   ├── _reset.scss
│   └── _typography.scss
├── components/
│   ├── _buttons.scss
│   └── _cards.scss
└── main.scss (Aggregator)</pre>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Enterprise Scalability', km: 'ការពង្រីកគម្រោងក្រុមហ៊ុនធំៗ' },
      description: {
        en: 'When 10 developers work on a web app simultaneously, having modular folders prevents merge conflicts in Git.',
        km: 'នៅពេលអ្នកអភិវឌ្ឍន៍ ១០ នាក់ធ្វើការលើ Web App ជាមួយគ្នា ការមាន Folder តាម Module ជួយការពារកុំឲ្យកើតមាន Merge conflicts ក្នុង Git។'
      }
    },
    practiceExercise: {
      question: { en: 'Which folder in a SCSS structure typically stores helper variables and mixins?', km: 'តើ Folder មួយណាដែលជាទូទៅផ្ទុក Helper variables និង mixins?' },
      solution: 'abstracts/ (or utils/)'
    },
    quizQuestions: [
      {
        id: 'q-sass-m4-3',
        question: { en: 'What is the primary role of the main.scss entry point file?', km: 'តើតួនាទីចម្បងនៃឯកសារ main.scss entry point ជាអ្វី?' },
        options: [
          { id: '1', text: { en: 'To import/forward partial modules and output the final single CSS bundle', km: 'ដើម្បី Import/Forward ម៉ូឌុល Partials និង Compile ជា Bundle CSS ចុងក្រោយ' }, isCorrect: true },
          { id: '2', text: { en: 'To store database passwords', km: 'ដើម្បី ផ្ទុក លេខ កូដ ផ្លូវការ' }, isCorrect: false }
        ],
        explanation: {
          en: 'main.scss orchestrates all imports and compiles into the main stylesheet.',
          km: 'main.scss ជាចំណុចកណ្តាលសម្រាប់រៀបចំ Import កូដ និង Compile ជា CSS។'
        }
      }
    ]
  },

  // Module 5: Mixins
  {
    id: 'sass-m5-l1',
    slug: 'creating-mixins',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: { en: '5.1 Creating Mixins (@mixin)', km: '៥.១ ការបង្កើត Mixins (@mixin)' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'A Mixin allows you to define reusable groups of CSS declarations. You create a mixin using the `@mixin` directive followed by a name and a block of CSS properties.',
      km: 'Mixin អនុញ្ញាតឲ្យអ្នកបង្កើតក្រុមនៃ CSS Declarations ដែលអាចយកមកប្រើប្រាស់ឡើងវិញបានច្រើនដង។ អ្នកបង្កើត mixin ដោយប្រើ `@mixin` បន្តដោយឈ្មោះ និង Block នៃ CSS properties។'
    },
    tutorial: {
      en: 'Syntax: `@mixin flex-center { display: flex; justify-content: center; align-items: center; }`.',
      km: 'ទម្រង់សរសេរ៖ `@mixin flex-center { display: flex; justify-content: center; align-items: center; }`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .centered-box {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1e293b;
      min-height: 80px;
      border-radius: 0.5rem;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS Mixin Definition</div>
        <pre class="text-slate-300 overflow-x-auto"><code>@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.centered-box {
  @include flex-center;
  background-color: #1e293b;
  min-height: 80px;
  border-radius: 0.5rem;
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.centered-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e293b;
  min-height: 80px;
  border-radius: 0.5rem;
}</code></pre>
      </div>
    </div>

    <div class="centered-box">
      <span class="text-emerald-400 font-bold text-xs">🎯 Flex Center Mixin Applied</span>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Centering & Layout Snippets', km: 'ការរៀបចំ Layout និង Centering' },
      description: {
        en: 'Common layout patterns (flex centering, absolute centering, text truncation) are perfect candidates for mixins.',
        km: 'ទម្រង់ Layout ទូទៅ (Flex centering, absolute centering, text truncation) គឺស័ក្តិសមបំផុតសម្រាប់ធ្វើជា Mixin។'
      }
    },
    practiceExercise: {
      question: { en: 'Write a mixin named "reset-list" that removes list padding, margin, and list-style.', km: 'សរសេរ Mixin ឈ្មោះ "reset-list" ដែលលុប list padding, margin, និង list-style។' },
      solution: '@mixin reset-list { padding: 0; margin: 0; list-style: none; }'
    },
    quizQuestions: [
      {
        id: 'q-sass-m5-1',
        question: { en: 'Which directive is used to declare a new Sass mixin?', km: 'តើ Directive មួយណាប្រើសម្រាប់ប្រកាស Sass Mixin ថ្មី?' },
        options: [
          { id: '1', text: { en: '@mixin', km: '@mixin' }, isCorrect: true },
          { id: '2', text: { en: '@define', km: '@define' }, isCorrect: false }
        ],
        explanation: {
          en: 'Sass mixins are declared using the `@mixin` directive.',
          km: 'Sass mixins ត្រូវប្រកាសដោយប្រើ `@mixin` directive។'
        }
      }
    ]
  },
  {
    id: 'sass-m5-l2',
    slug: 'including-mixins',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: { en: '5.2 Including Mixins (@include)', km: '៥.២ ការហៅប្រើ Mixins (@include)' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'To use a previously declared mixin inside a CSS selector rule, you use the `@include` directive followed by the mixin name.',
      km: 'ដើម្បីហៅ Mixin ដែលបានប្រកាសរួចមកប្រើក្នុង CSS Selector Rule អ្នកត្រូវប្រើ `@include` directive បន្តដោយឈ្មោះ Mixin នោះ។'
    },
    tutorial: {
      en: 'Syntax: `.my-element { @include flex-center; }`. The compiler replaces `@include flex-center` with the actual properties defined inside the mixin.',
      km: 'ទម្រង់សរសេរ៖ `.my-element { @include flex-center; }`។ Compiler នឹងជំនួស `@include flex-center` ដោយកូដ CSS properties ដើម។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .badge-primary {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 700;
      background-color: #ec4899;
      color: white;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS @include</div>
        <pre class="text-slate-300 overflow-x-auto"><code>@mixin pill-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
}

.badge-primary {
  @include pill-badge;
  background-color: #ec4899;
  color: white;
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.badge-primary {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: #ec4899;
  color: white;
}</code></pre>
      </div>
    </div>

    <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
      <span class="badge-primary">Pill Badge Mixin Included</span>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Vendor Prefix Automation', km: 'ការសរសេរ Vendor Prefix' },
      description: {
        en: 'Before Autoprefixer, mixins were used to output `-webkit-`, `-moz-`, and `-ms-` prefixes automatically.',
        km: 'មុនពេលមាន Autoprefixer, Mixins ត្រូវប្រើប្រាស់ដើម្បីបង្កើត `-webkit-` និង `-moz-` prefixes ដោយស្វ័យប្រវត្តិ។'
      }
    },
    practiceExercise: {
      question: { en: 'How do you invoke a mixin named "box-shadow" inside a .card rule?', km: 'តើអ្នកហៅ Mixin ឈ្មោះ "box-shadow" មកប្រើក្នុង .card rule យ៉ាងដូចម្តេច?' },
      solution: '.card { @include box-shadow; }'
    },
    quizQuestions: [
      {
        id: 'q-sass-m5-2',
        question: { en: 'Which directive injects a defined mixin into a target selector?', km: 'តើ Directive មួយណាសម្រាប់ Inject mixin ចូលទៅកាន់ Target Selector?' },
        options: [
          { id: '1', text: { en: '@include', km: '@include' }, isCorrect: true },
          { id: '2', text: { en: '@import', km: '@import' }, isCorrect: false }
        ],
        explanation: {
          en: '@include injects the mixin style declarations.',
          km: '@include បញ្ចូល declarations នៃ mixin ទៅកាន់ selector។'
        }
      }
    ]
  },
  {
    id: 'sass-m5-l3',
    slug: 'mixins-with-arguments-breakpoints',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: { en: '5.3 Mixins with Arguments & Breakpoints', km: '៥.៣ Mixins ជាមួយ Arguments & Breakpoints' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Mixins become infinitely more powerful when you pass arguments (parameters) and set default fallback values. This is ideal for responsive media query helpers.',
      km: 'Mixins មានសមត្ថភាពកាន់តែខ្លាំងនៅពេលអ្នកបញ្ជូន Arguments (Parameters) និងកំណត់តម្លៃ Fallback។ នេះស័ក្តិសមបំផុតសម្រាប់ធ្វើជា Helper Media Queries។'
    },
    tutorial: {
      en: '`@mixin respond-to($val) { @media (min-width: $val) { @content; } }`. Pass content inside using `@content` blocks!',
      km: '`@mixin respond-to($val) { @media (min-width: $val) { @content; } }`។ ប្រើ `@content` សម្រាប់បញ្ជូន Block កូដចូលក្នុង Media Query!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .responsive-card {
      background-color: #0f172a;
      padding: 1rem;
      border-radius: 0.5rem;
    }
    @media (min-width: 768px) {
      .responsive-card {
        padding: 2rem;
        background-color: #1e1b4b;
      }
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 p-4 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-pink-400 font-bold mb-2">SCSS Mixin with Argument</div>
        <pre class="text-slate-300 overflow-x-auto"><code>@mixin tablet-up($breakpoint: 768px) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

.responsive-card {
  background-color: #0f172a;
  padding: 1rem;

  @include tablet-up(768px) {
    padding: 2rem;
    background-color: #1e1b4b;
  }
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div class="text-sky-400 font-bold mb-2">Compiled CSS</div>
        <pre class="text-slate-300 overflow-x-auto"><code>.responsive-card {
  background-color: #0f172a;
  padding: 1rem;
}
@media (min-width: 768px) {
  .responsive-card {
    padding: 2rem;
    background-color: #1e1b4b;
  }
}</code></pre>
      </div>
    </div>

    <div class="responsive-card border border-slate-800">
      <h4 class="font-bold text-indigo-400 text-sm">Responsive Breakpoint Mixin</h4>
      <p class="text-xs text-slate-300 mt-1">Resize your screen width to test responsive media query mixin behavior!</p>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Responsive Grid Helpers', km: 'Helper សម្រាប់ Responsive Grid' },
      description: {
        en: 'Instead of writing raw `@media (min-width: 1024px)` everywhere, teams use `@include respond-to(desktop)` for standard readability.',
        km: 'ជំនួសឲ្យការសរសេរ `@media (min-width: 1024px)` គ្រប់កន្លែង ក្រុមអភិវឌ្ឍន៍ប្រើ `@include respond-to(desktop)` ងាយស្រួលយល់។'
      }
    },
    practiceExercise: {
      question: { en: 'Define a mixin named "square" accepting a $size argument that sets both width and height.', km: 'ប្រកាស Mixin ឈ្មោះ "square" ទទួល Argument $size សម្រាប់កំណត់ width និង height។' },
      solution: '@mixin square($size) { width: $size; height: $size; }'
    },
    quizQuestions: [
      {
        id: 'q-sass-m5-3',
        question: { en: 'What directive allows passing nested CSS blocks into a mixin?', km: 'តើ Directive មួយណាអនុញ្ញាតឲ្យបញ្ជូន Nested CSS Block ចូលទៅក្នុង Mixin?' },
        options: [
          { id: '1', text: { en: '@content', km: '@content' }, isCorrect: true },
          { id: '2', text: { en: '@slot', km: '@slot' }, isCorrect: false }
        ],
        explanation: {
          en: 'The `@content` directive acts as a placeholder for code passed into a mixin block.',
          km: '`@content` ដើរតួជាកន្លែងទទួលកូដ CSS ដែលបញ្ជូនចូលក្នុង Mixin block។'
        }
      }
    ]
  }
];
