import { FrontendLesson } from '../types/frontendClass';

export const SVELTE_LESSONS_PART1: FrontendLesson[] = [
  // Module 1: Introduction & Setup
  {
    id: 'svelte-l1',
    slug: 'svelte-1-1-intro-compiler',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: {
      en: '1.1 What Makes Svelte Different (Compiler vs Virtual DOM)',
      km: '១.១ អ្វីដែលធ្វើឱ្យ Svelte ខុសប្លែក (Compiler vs Virtual DOM)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser using a Virtual DOM, Svelte shifts that work into a compile step that happens when you build your app. Svelte compiles your code into precise Vanilla JavaScript that updates the DOM directly with zero framework overhead.',
      km: 'Svelte គឺជា Framework ជំនាន់ថ្មីដែលមានទស្សនវិជ្ជាប្លែកពីគេ។ ខុសពី React និង Vue ដែលរត់ Virtual DOM នៅក្នុង Browser របស់ប្រវើប្រាស់, Svelte ធ្វើការរៀបចំ Compile កូដទាំងអស់នៅពេល Build Time ទៅជា Vanilla JavaScript សុទ្ធ ដែលទៅ Update DOM ដោយផ្ទាល់ ធ្វើឱ្យ App មានល្បឿនលឿនបំផុត និង Bundle Size តូចបំផុត។'
    },
    tutorial: {
      en: 'Understand how Svelte eliminates the Virtual DOM overhead by turning declarative component templates into surgical Vanilla JavaScript DOM updates during compilation.',
      km: 'យល់ដឹងពីរបៀបដែល Svelte លុបបំបាត់ Virtual DOM ដោយបម្លែង Template ទៅជា Vanilla JavaScript DOM instructions នៅពេល Compile។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { background: #1e293b; border: 1px solid #ff3e00; border-radius: 12px; padding: 16px; max-width: 450px; }
    .badge { background: #ff3e00; color: white; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: bold; }
    .highlight { color: #ff3e00; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">Svelte 5 Compiler Architecture</span>
    <h2>🔥 Welcome to Svelte!</h2>
    <p>Zero Virtual DOM Overhead • Compiled directly to surgical Vanilla JS DOM updates.</p>
    <p> Bundle Size: <span class="highlight">&lt; 3 KB minified</span></p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'High-Performance Embedded & IoT Dashboard Applications',
        km: 'ការប្រើប្រាស់លើឧបករណ៍ IoT និង Embedded Dashboards'
      },
      description: {
        en: 'Companies use Svelte for Smart TVs, automotive dashboards, and mobile devices where CPU and RAM are constrained, because Svelte apps require no runtime Virtual DOM engine.',
        km: 'ក្រុមហ៊ុនបច្ចេកវិទ្យាប្រើប្រាស់ Svelte លើ Smart TVs, ឧបករណ៍ឡាន និងទូរស័ព្ទដៃ ព្រោះវាប្រើប្រាស់ RAM/CPU តិចតួចបំផុត ដោយសារគ្មាន Virtual DOM Runtime Engine។'
      }
    },
    practiceExercise: {
      question: {
        en: 'When does Svelte perform component conversion and reactivity linking?',
        km: 'តើ Svelte ធ្វើការបម្លែង Component ទៅជា Vanilla JavaScript នៅពេលណា?'
      },
      hints: [
        { en: 'It happens before code runs in the browser.', km: 'វាកើតឡើងនៅពេល Build Time មុនពេលរត់លើ Browser។' }
      ],
      solution: 'At Build Time (Compilation phase) when bundling with Vite.'
    },
    quizQuestions: [
      {
        id: 'q-sv-1-1',
        question: {
          en: 'How does Svelte update the browser DOM when component state changes?',
          km: 'តើ Svelte ធ្វើបច្ចុប្បន្នភាព DOM តាមរបៀបណានៅពេល State ផ្លាស់ប្តូរ?'
        },
        options: [
          { id: '1', text: { en: 'Surgically updates the exact DOM node directly via compiled code', km: 'Update ដោយផ្ទាល់ទៅកាន់ exact DOM node តាមកូដដែល Compile រួច' }, isCorrect: true },
          { id: '2', text: { en: 'Diffs two Virtual DOM trees in browser memory', km: 'ធ្វើការប្រៀបធៀប Virtual DOM ២ ក្នុង Memory' }, isCorrect: false },
          { id: '3', text: { en: 'Re-renders the entire HTML document', km: 'Re-render HTML ទាំងអស់ឡើងវិញ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Svelte compiles code into surgical DOM manipulations, eliminating Virtual DOM diffing completely.',
          km: 'Svelte Compile កូដទៅជា DOM manipulators ដោយตรง ដោយមិនបាច់ប្រើ Virtual DOM ឡើយ។'
        }
      }
    ]
  },

  {
    id: 'svelte-l2',
    slug: 'svelte-1-2-project-setup',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: {
      en: '1.2 Setting Up a Svelte Project with Vite',
      km: '១.២ ការបង្កើត និងដំឡើង Svelte Project ជាមួយ Vite'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'The fastest way to scaffold a modern Svelte application is using Vite. Running `npm create vite@latest my-app -- --template svelte` provisions an optimized Svelte development server with Hot Module Replacement and instant build times.',
      km: 'វិធីសាស្ត្រលឿនបំផុតក្នុងការបង្កើត Svelte App គឺប្រើប្រាស់ Vite CLI តាមរយៈបញ្ជា `npm create vite@latest my-app -- --template svelte`។ វាផ្តល់ជូន Dev Server មានល្បឿនលឿនបំផុត និងការ Compile ភ្លាមៗ។'
    },
    tutorial: {
      en: 'Run `npm create vite@latest my-app -- --template svelte` then `cd my-app && npm install && npm run dev`.',
      km: 'រត់ពាក្យបញ្ជា `npm create vite@latest my-app -- --template svelte` រួច `cd my-app && npm install && npm run dev` ដើម្បីចាប់ផ្តើម។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #38bdf8; padding: 20px; }
    .cmd { background: #0f172a; border-left: 4px solid #ff3e00; padding: 12px; border-radius: 6px; margin: 10px 0; }
  </style>
</head>
<body>
  <h3>🚀 Quickstart Commands</h3>
  <div class="cmd">$ npm create vite@latest my-svelte-app -- --template svelte</div>
  <div class="cmd">$ cd my-svelte-app && npm install</div>
  <div class="cmd">$ npm run dev</div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Production Build Pipeline',
        km: 'ដំណើរការ Build កម្មវិធីសម្រាប់ Production'
      },
      description: {
        en: 'Vite uses the Svelte compiler (`@sveltejs/vite-plugin-svelte`) during `npm run build` to output optimized static HTML/JS assets ready for Cloudflare Pages or Vercel.',
        km: 'Vite ប្រើប្រាស់ Svelte plugin នៅពេលរត់ `npm run build` ដើម្បីបង្កើត Static Assets ដែលមានទំហំតូចបំផុតសម្រាប់ Deploy។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which CLI flag specifies the Svelte template during Vite creation?',
        km: 'តើ Flag មួយណាប្រើប្រាស់សម្រាប់កំណត់ Template Svelte ក្នុង Vite?'
      },
      solution: '--template svelte'
    },
    quizQuestions: [
      {
        id: 'q-sv-1-2',
        question: {
          en: 'Which command starts the Vite development server for Svelte?',
          km: 'តើពាក្យបញ្ជាណាសម្រាប់ដំណើការ Dev Server របស់ Svelte?'
        },
        options: [
          { id: '1', text: { en: 'npm run dev', km: 'npm run dev' }, isCorrect: true },
          { id: '2', text: { en: 'svelte start', km: 'svelte start' }, isCorrect: false },
          { id: '3', text: { en: 'npm start-svelte', km: 'npm start-svelte' }, isCorrect: false }
        ],
        explanation: {
          en: '`npm run dev` boots the Vite development server configured with `@sveltejs/vite-plugin-svelte`.',
          km: '`npm run dev` បើកដំណើការ Vite Dev Server ជាមួយ Svelte plugin។'
        }
      }
    ]
  },

  {
    id: 'svelte-l3',
    slug: 'svelte-1-3-file-anatomy',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: {
      en: '1.3 Anatomy of a .svelte Single File Component',
      km: '១.៣ រចនាសម្ព័ន្ធនៃ File .svelte (Script, Markup, & Scoped CSS)'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'A Svelte component is written in a single `.svelte` file containing three optional top-level blocks: `<script>` for logic, plain HTML markup for template structure, and `<style>` for component-scoped CSS styles. CSS inside `<style>` is automatically scoped to that component only by default!',
      km: 'Svelte Component ត្រូវបានសរសេរក្នុង File `.svelte` តែមួយដែលមាន ៣ ផ្នែកចម្បង៖ `<script>` សម្រាប់ Logic, HTML markup សម្រាប់ទម្រង់ UI, និង `<style>` សម្រាប់ CSS។ អ្វីដែលពិសេសគឺ CSS ទាំងអស់ក្នុង `<style>` គឺ Scoped ដោយស្វ័យប្រវត្តិ មិនឆ្លងទៅ Component ផ្សេងឡើយ!'
    },
    tutorial: {
      en: 'Learn how Svelte automatically scopes styles and pairs JavaScript variables directly inside HTML template curly braces `{name}`.',
      km: 'រៀនពីរបៀបដែល Svelte Scoped CSS និងភ្ជាប់ Variable JavaScript ដោយផ្ទាល់ក្នុង HTML Template សញ្ញាវង់ក្រចករកិច `{name}`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .preview { background: #1e293b; border: 1px solid #334155; padding: 20px; border-radius: 12px; }
    h1 { color: #ff3e00; margin-top: 0; }
    .badge { background: #0284c7; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="preview">
    <!-- Component Logic: <script> let name = "Svelte Learner"; </script> -->
    <h1>សួស្តី {name}! 👋</h1>
    <p>នេះជាឧទាហរណ៍ Svelte Component មាន Scoped CSS ស្វ័យប្រវត្តិ។</p>
    <span class="badge">Scoped Style Protected</span>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Encapsulated UI Component Libraries',
        km: 'ការបង្កើត UI Library ដែលមាន CSS ការពារសុវត្ថិភាព'
      },
      description: {
        en: 'Scoped CSS prevents class name collisions, so `.button` inside a Card component will never break `.button` inside the Header component.',
        km: 'CSS Scoped ការពារមិនឱ្យឈ្មោះ class ប៉ះទង្គិចគ្នា រវាង Card Component និង Header Component ឡើយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'By default, are styles written inside a `.svelte` `<style>` tag scoped or global?',
        km: 'តើ CSS ដែលសរសេរក្នុង `<style>` នៃ `.svelte` ជា Scoped ឬ Global ដោយស្វ័យប្រវត្តិ?'
      },
      solution: 'Scoped to that component only'
    },
    quizQuestions: [
      {
        id: 'q-sv-1-3',
        question: {
          en: 'How do you inject a JavaScript variable into Svelte HTML template markup?',
          km: 'តើអ្នកបង្ហាញ JavaScript variable ទៅក្នុង HTML markup របស់ Svelte ដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'Using single curly braces: {variable}', km: 'ប្រើប្រាស់វង់ក្រចករកិចទោល៖ {variable}' }, isCorrect: true },
          { id: '2', text: { en: 'Using double curly braces: {{variable}}', km: 'ប្រើប្រាស់វង់ក្រចករកិចឌុប៖ {{variable}}' }, isCorrect: false },
          { id: '3', text: { en: 'Using <%= variable %>', km: 'ប្រើប្រាស់ <%= variable %>' }, isCorrect: false }
        ],
        explanation: {
          en: 'Svelte uses clean single curly braces `{variable}` for expressions in template markup.',
          km: 'Svelte ប្រើប្រាស់សញ្ញាវង់ក្រចករកិចទោល `{variable}` សម្រាប់បង្ហាញតម្លៃ Expression។'
        }
      }
    ]
  },

  // Module 2: Reactive Declarations
  {
    id: 'svelte-l4',
    slug: 'svelte-2-1-reactive-variables',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: {
      en: '2.1 Regular Variables & Re-rendering on Assignment',
      km: '២.១ State ធម្មតា និងការ Re-render តាមរយៈ Assignment (`=`) '
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'In Svelte, reactivity is triggered by assignment (`=`). Unlike React which requires `useState()` or Vue which requires `ref()`, Svelte components update automatically whenever a top-level local variable is reassigned with an equal sign.',
      km: 'ក្នុង Svelte, Reactivity ត្រូវបានដាស់ឱ្យធ្វើការដោយសញ្ញាស្មើ (`=`)។ មិនបាច់ប្រើ `useState()` ឬ `ref()` ស្មុគស្មាញទេ! ឱ្យតែអ្នក Re-assign តម្លៃ Variable ដោយប្រើ `=` Svelte នឹង Update UI លើអេក្រង់ភ្លាមៗ។'
    },
    tutorial: {
      en: 'Declare `let count = 0;` and mutate it with `count += 1` inside an event handler function.',
      km: 'ប្រកាស `let count = 0;` រួចបន្ថែមតម្លៃ `count += 1` ក្នុង Click Event Handler។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { background: #1e293b; border: 1px solid #334155; padding: 20px; border-radius: 12px; max-width: 400px; text-align: center; }
    .count { font-size: 48px; font-weight: 800; color: #ff3e00; margin: 10px 0; }
    button { background: #ff3e00; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; }
    button:hover { background: #e03600; }
  </style>
</head>
<body>
  <div class="card">
    <h3>Svelte Simple Counter</h3>
    <div class="count" id="cval">1</div>
    <button onclick="document.getElementById('cval').innerText = parseInt(document.getElementById('cval').innerText) + 1">
      បន្ថែមចំនួន +១ (count += 1)
    </button>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Interactive Form State & Counters',
        km: 'ការគ្រប់គ្រង Form State និង Counters ក្នុង App'
      },
      description: {
        en: 'Simple state assignments make counters, toggles, and UI modal visibilities extremely readable and bug-free.',
        km: 'ការ Re-assign ដោយប្រើ `=` ធ្វើឱ្យការសរសេរ Modal toggles និង Forms មានភាពច្បាស់លាស់ និងមិនងាយមាន Bug។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What JavaScript operator triggers DOM reactivity in Svelte?',
        km: 'តើ Operator មួយណាដែលដាស់ Reactivity ឱ្យ Update DOM ក្នុង Svelte?'
      },
      solution: '= (Assignment operator)'
    },
    quizQuestions: [
      {
        id: 'q-sv-2-1',
        question: {
          en: 'Why does Svelte re-render the UI when `count += 1` runs?',
          km: 'ហេតុអ្វីបានជា Svelte ធ្វើការ Re-render UI ពេល `count += 1` ដំណើការ?'
        },
        options: [
          { id: '1', text: { en: 'Svelte instrumented the assignment = at compile time', km: 'Svelte បានប្រកាសភ្ជាប់ Reactivity លើសញ្ញា = តាំងពីពេល Compile' }, isCorrect: true },
          { id: '2', text: { en: 'It polls all variables every 10 milliseconds', km: 'វាធ្វើការ Poll ពិនិត្យ Variable រាល់ 10ms' }, isCorrect: false },
          { id: '3', text: { en: 'It uses Proxy objects like Vue', km: 'វាប្រើប្រាស់ Proxy objects ដូច Vue' }, isCorrect: false }
        ],
        explanation: {
          en: 'Svelte compiler looks for variable assignments `=` and generates update code around them.',
          km: 'Svelte Compiler ស្វែងរកសញ្ញា `=` រួចបង្កើតកូដ Update DOM ដោយស្វ័យប្រវត្តិ។'
        }
      }
    ]
  },

  {
    id: 'svelte-l5',
    slug: 'svelte-2-2-dollar-statement',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: {
      en: '2.2 The Reactive Declarations ($:) Syntax',
      km: '២.២ ការប្រើប្រាស់ Reactive Declarations ជាមួយសញ្ញា `$:`'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Svelte uses JavaScript label syntax `$:` to declare reactive statements. Whenever any referenced dependency variable changes, Svelte automatically re-executes the `$:` statement or recalculates derived state!',
      km: 'Svelte ប្រើប្រាស់សញ្ញា `$:` (Reactive Declaration) ដើម្បីគណនាតម្លៃ Derived State ឬរត់ Side-Effect ស្វ័យប្រវត្តិ។ រាល់ពេលដែល Variable នៅក្នុង `$:` ផ្លាស់ប្តូរ Svelte នឹងគណនាកូដនោះឡើងវិញភ្លាមៗ។'
    },
    tutorial: {
      en: 'Write `$: doubled = count * 2;` or `$: console.log("Count is now", count);`.',
      km: 'សរសេរ `$: doubled = count * 2;` ឬ `$: console.log("តម្លៃ count ថ្មីគឺ", count);`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .box { background: #1e293b; border: 1px solid #38bdf8; padding: 20px; border-radius: 12px; max-width: 420px; }
    .val { color: #38bdf8; font-weight: bold; }
    .double { color: #f43f5e; font-weight: bold; }
  </style>
</head>
<body>
  <div class="box">
    <h3>Reactive $: Declaration Demo</h3>
    <p>តម្លៃដើម Count: <span class="val">3</span></p>
    <p>តម្លៃគុណនឹង២ ($: doubled = count * 2): <span class="double">6</span></p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Dynamic Shopping Cart Total Calculations',
        km: 'ការគណនាផលបូកតម្លៃក្នុង Cart ដោយស្វ័យប្រវត្តិ'
      },
      description: {
        en: 'Calculate total cart price and sales tax automatically whenever items or quantities change: `$: total = items.reduce((acc, i) => acc + i.price, 0);`.',
        km: 'គណនាតម្លៃសរុបក្នុង Cart និងពន្ធស្វ័យប្រវត្តិរាល់ពេលអតិថិជនកែប្រែចំនួនទំនិញតាមរយៈ `$: total = items.reduce(...)`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What prefix character tells Svelte a statement should re-run reactively when dependencies change?',
        km: 'តើ Prefix មួយណាប្រាប់ Svelte ឱ្យរត់បន្ទាត់កូដឡើងវិញរាល់ពេល Dependency ផ្លាស់ប្តូរ?'
      },
      solution: '$:'
    },
    quizQuestions: [
      {
        id: 'q-sv-2-2',
        question: {
          en: 'What happens when you write `$: doubled = count * 2;` in Svelte?',
          km: 'តើមានអ្វីកើតឡើងនៅពេលសរសេរ `$: doubled = count * 2;` ក្នុង Svelte?'
        },
        options: [
          { id: '1', text: { en: 'doubled automatically updates whenever count changes', km: 'doubled ធ្វើបច្ចុប្បន្នភាពស្វ័យប្រវត្តរាល់ពេល count ផ្លាស់ប្តូរ' }, isCorrect: true },
          { id: '2', text: { en: 'It creates a global window variable named doubled', km: 'វាបង្កើត global window variable' }, isCorrect: false },
          { id: '3', text: { en: 'It only runs once when the component mounts', km: 'វារត់តែម្តងគត់នៅពេល Mount' }, isCorrect: false }
        ],
        explanation: {
          en: 'Svelte tracks dependencies in `$:` blocks and re-runs them reactively when dependencies change.',
          km: 'Svelte តាមដាន Dependencies ក្នុង `$:` រួចរត់វាឡើងវិញពេលតម្លៃប្រែប្រួល។'
        }
      }
    ]
  },

  {
    id: 'svelte-l6',
    slug: 'svelte-2-3-multiple-dependencies',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: {
      en: '2.3 Multi-Variable Reactive Blocks & Side-Effects',
      km: '២.៣ Reactive Blocks និង Side-Effects អាស្រ័យលើ Variable ច្រើន'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'You can combine multiple variables inside a single reactive block `$: { ... }` or function call. Svelte automatically inspects all reactive variables referenced inside the block and re-triggers execution whenever ANY of those variables change.',
      km: 'អ្នកអាចផ្សំ Variable ច្រើនក្នុង Reactive Block តែមួយ `$: { ... }`។ Svelte នឹងពិនិត្យរាល់ Variable ដែលបានប្រើប្រាស់ខាងក្នុង រួចរត់ Block នោះឡើងវិញប្រសិនបើមាន Variable ណាមួយផ្លាស់ប្តូរ។'
    },
    tutorial: {
      en: 'Group complex statements: `$: { console.log(firstName, lastName); fullName = firstName + " " + lastName; }`.',
      km: 'ប្រមូលផ្តុំកូដស្មុគស្មាញ៖ `$: { console.log(firstName, lastName); fullName = firstName + " " + lastName; }`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { background: #1e293b; border: 1px solid #10b981; padding: 20px; border-radius: 12px; max-width: 420px; }
    .name { color: #10b981; font-weight: bold; font-size: 20px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>$: Multi-Variable Reactive Block</h3>
    <p>First Name: <strong>Sok</strong> | Last Name: <strong>Chan</strong></p>
    <p>Full Name ($: fullName): <span class="name">Sok Chan</span></p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Filtering Data Lists Based on Query & Category',
        km: 'ការ Filter បញ្ជីទិន្នន័យតាម Search Query និង Category'
      },
      description: {
        en: 'Dynamic filter blocks `$: filteredProducts = products.filter(p => p.category === activeCategory && p.title.includes(searchQuery));` stay in sync effortlessly.',
        km: 'ការ Filter ផលិតផលស្វ័យប្រវត្តិតាមរយៈ `$: filteredProducts = products.filter(...)` រាល់ពេលទិន្នន័យប្រែប្រួល។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Can a Svelte `$: { ... }` block contain multiple lines of code?',
        km: 'តើ Block `$: { ... }` ក្នុង Svelte អាចមានកូដច្រើនបន្ទាត់បានដែរឬទេ?'
      },
      solution: 'Yes, grouping statements inside curly braces is supported.'
    },
    quizQuestions: [
      {
        id: 'q-sv-2-3',
        question: {
          en: 'When will a block `$: { console.log(a, b); }` execute?',
          km: 'តើនៅពេលណាដែល Block `$: { console.log(a, b); }` នឹងរត់?'
        },
        options: [
          { id: '1', text: { en: 'Whenever either `a` or `b` changes', km: 'រាល់ពេលដែល `a` ឬ `b` ណាមួយផ្លាស់ប្តូរ' }, isCorrect: true },
          { id: '2', text: { en: 'Only when both `a` and `b` change at the exact same instant', km: 'ទាល់តែ `a` និង `b` ផ្លាស់ប្តូរក្នុងពេលតែមួយ' }, isCorrect: false },
          { id: '3', text: { en: 'Only when the user clicks the page', km: 'ទាល់តែអ្នកប្រើប្រាស់បានចុចលើអេក្រង់' }, isCorrect: false }
        ],
        explanation: {
          en: 'Referencing any reactive variable inside a `$:` block registers that variable as a dependency trigger.',
          km: 'ការប្រើ Variable ណាមួយក្នុង `$:` នឹងចុះឈ្មោះ Variable នោះជា Dependency Trigger ស្វ័យប្រវត្តិ។'
        }
      }
    ]
  },

  // Module 3: Props
  {
    id: 'svelte-l7',
    slug: 'svelte-3-1-export-let-props',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: {
      en: '3.1 Declaring Props with export let',
      km: '៣.១ ការប្រកាស Component Props ដោយប្រើប្រាស់ `export let` '
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'To pass data into a child component from a parent, Svelte uses the standard JavaScript `export let` keyword inside the child component `<script>`. This flags the variable as a public property (prop) that parent components can provide!',
      km: 'ដើម្បីបញ្ជូនទិន្នន័យពី Parent Component ទៅកាន់ Child Component, Svelte ប្រើប្រាស់ Keyword `export let` នៅក្នុង `<script>` របស់ Child Component។ វាប្រកាស Variable នោះជា Props សាធារណៈដែលអាចទទួលតម្លៃពីខាងក្រៅបាន។'
    },
    tutorial: {
      en: 'Inside `Avatar.svelte`, write `<script> export let username; </script>`. In parent: `<Avatar username="Sokha" />`.',
      km: 'ក្នុង `Avatar.svelte`, សរសេរ `<script> export let username; </script>`។ ក្នុង Parent: `<Avatar username="Sokha" />`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .badge { background: #0284c7; color: white; padding: 6px 16px; border-radius: 999px; display: inline-block; font-weight: bold; }
  </style>
</head>
<body>
  <!-- Child Component: <script> export let userRole = "Admin"; </script> -->
  <p>User Status Card (Received via Prop):</p>
  <div class="badge">Role: Admin</div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Reusable UI Component Libraries',
        km: 'ការបង្កើត Reusable Cards, Buttons, & Badges'
      },
      description: {
        en: 'Reusable components like `<Button label="Submit" variant="primary" />` rely on `export let` props for customization.',
        km: 'Component ប្រើប្រាស់ឡើងវិញដូចជា `<Button label="Submit" variant="primary" />` អាស្រ័យលើ `export let` props ដើម្បីប្ដូររូបរាង។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What keyword combination declares a prop inside a Svelte component script?',
        km: 'តើ Keyword អ្វីខ្លះប្រើប្រាស់សម្រាប់ប្រកាស Prop ក្នុង Svelte component?'
      },
      solution: 'export let'
    },
    quizQuestions: [
      {
        id: 'q-sv-3-1',
        question: {
          en: 'How do you declare a prop named `title` in Svelte 4 / classic Svelte?',
          km: 'តើអ្នកប្រកាស Prop ឈ្មោះ `title` ក្នុង Svelte 4 / classic តាមរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'export let title;', km: 'export let title;' }, isCorrect: true },
          { id: '2', text: { en: 'import let title;', km: 'import let title;' }, isCorrect: false },
          { id: '3', text: { en: 'props: { title }', km: 'props: { title }' }, isCorrect: false }
        ],
        explanation: {
          en: '`export let title;` tells the Svelte compiler that `title` is an external component prop.',
          km: '`export let title;` ប្រាប់ Svelte Compiler ថា `title` ជា Prop ទទួលពីខាងក្រៅ។'
        }
      }
    ]
  },

  {
    id: 'svelte-l8',
    slug: 'svelte-3-2-default-props',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: {
      en: '3.2 Default Prop Values & Fallbacks',
      km: '៣.២ ការកំណត់តម្លៃ Default សម្រាប់ Props'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'You can easily specify a fallback default value for any prop by assigning an initial value during declaration: `export let color = "blue";`. If the parent component omits passing that prop, Svelte automatically uses the default fallback.',
      km: 'អ្នកអាចកំណត់តម្លៃ Default សម្រាប់ Prop ដោយគ្រាន់តែផ្តល់តម្លៃដំបូងពេលប្រកាស៖ `export let color = "blue";`។ ប្រសិនបើ Parent Component មិនបានបញ្ជូន Prop នោះទេ Svelte នឹងយកតម្លៃ Default មកប្រើដោយស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: 'In `Button.svelte`: `export let variant = "primary"; export let disabled = false;`.',
      km: 'ក្នុង `Button.svelte`: `export let variant = "primary"; export let disabled = false;`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .btn { background: #3b82f6; color: white; padding: 8px 16px; border-radius: 6px; border: none; font-weight: bold; }
  </style>
</head>
<body>
  <!-- Child: export let label = "ចុចទីនេះ (Default)"; -->
  <h3>Default Prop Fallback Demo</h3>
  <button class="btn">ចុចទីនេះ (Default Fallback Value)</button>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Design System Button Variants',
        km: 'ការកំណត់ Default Variant សម្រាប់ Design System'
      },
      description: {
        en: 'A Button component can default to `size = "medium"` and `type = "button"`, reducing boilerplate when consuming the component.',
        km: 'Button Component អាចកំណត់ Default `size = "medium"` ដើម្បីកាត់បន្ថយការសរសេរកូដជាន់ដដែលៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What happens if a parent passes `undefined` to a prop with a default assignment?',
        km: 'តើមានអ្វីកើតឡើងប្រសិនបើ Parent បញ្ជូន `undefined` ទៅកាន់ Prop ដែលមាន Default Value?'
      },
      solution: 'Svelte falls back to using the default initial value.'
    },
    quizQuestions: [
      {
        id: 'q-sv-3-2',
        question: {
          en: 'How do you assign a default value of `"Guest"` to a prop named `user`?',
          km: 'តើអ្នកកំណត់តម្លៃ Default `"Guest"` ទៅកាន់ Prop ឈ្មោះ `user` ដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'export let user = "Guest";', km: 'export let user = "Guest";' }, isCorrect: true },
          { id: '2', text: { en: 'export default user = "Guest";', km: 'export default user = "Guest";' }, isCorrect: false },
          { id: '3', text: { en: 'let user = "Guest" || export;', km: 'let user = "Guest" || export;' }, isCorrect: false }
        ],
        explanation: {
          en: 'Assigning a value to `export let variable = "default";` sets its fallback initial value.',
          km: 'ការផ្តល់តម្លៃ `export let variable = "default";` កំណត់តម្លៃ Fallbacks ពេល Parent មិនបានបញ្ជូនតម្លៃ។'
        }
      }
    ]
  },

  {
    id: 'svelte-l9',
    slug: 'svelte-3-3-passing-props',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: {
      en: '3.3 Passing Props & Spread Props Shorthand',
      km: '៣.៣ ការបញ្ជូន Props និង Shorthand ({...pkg})'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'When passing variables as props, if the attribute name matches the variable name, Svelte provides a clean shorthand syntax: `<Card {title} {description} />` instead of `<Card title={title} description={description} />`. You can also spread an object of props using `<Card {...cardProps} />`!',
      km: 'នៅពេលបញ្ជូន Prop ដែលមានឈ្មោះដូច Variable, Svelte ផ្តល់ជូន Shorthand សាមញ្ញ៖ `<Card {title} {description} />` ជំនួសឱ្យ `<Card title={title} description={description} />`។ លើសពីនេះ អ្នកក៏អាចប្រើ Spreading Object `<Card {...cardProps} />` បានផងដែរ!'
    },
    tutorial: {
      en: 'Use shorthand `{name}` when variable name equals prop name, and `{...object}` to spread multiple properties at once.',
      km: 'ប្រើប្រាស់ Shorthand `{name}` ពេលឈ្មោះ Variable ដូចឈ្មោះ Prop និង `{...object}` សម្រាប់ Spread Props ច្រើនក្នុងពេលតែមួយ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { background: #1e293b; border: 1px solid #818cf8; padding: 16px; border-radius: 12px; max-width: 380px; }
    .title { color: #818cf8; font-weight: bold; font-size: 18px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="title">Svelte Shorthand Props</div>
    <p>&lt;UserCard {name} {role} /&gt;</p>
    <p>ស្មើនឹង &lt;UserCard name={name} role={role} /&gt;</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Dynamic API Object Rendering',
        km: 'ការបញ្ជូន Object ទិន្នន័យពី API ទៅកាន់ Component'
      },
      description: {
        en: 'Spread properties directly from fetched database records: `const user = { id: 1, name: "Dara", avatar: "/img.jpg" };` -> `<UserProfile {...user} />`.',
        km: 'បញ្ជូនទិន្នន័យ Object ទាំងមូលពី API ដោយប្រើ Spread Operator ងាយស្រួល៖ `<UserProfile {...user} />`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What is the Svelte shorthand for `title={title}` when passing a prop?',
        km: 'តើ Svelte Shorthand សម្រាប់ `title={title}` គឺអ្វី?'
      },
      solution: '{title}'
    },
    quizQuestions: [
      {
        id: 'q-sv-3-3',
        question: {
          en: 'How do you spread all key-value pairs of `const info = { name: "A", age: 20 };` into a component as props?',
          km: 'តើអ្នកSpread រាល់តម្លៃក្នុង `info` ទៅកាន់ Component ជា Props តាមរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: '<Child {...info} />', km: '<Child {...info} />' }, isCorrect: true },
          { id: '2', text: { en: '<Child info={*info} />', km: '<Child info={*info} />' }, isCorrect: false },
          { id: '3', text: { en: '<Child props={info} />', km: '<Child props={info} />' }, isCorrect: false }
        ],
        explanation: {
          en: '`<Child {...info} />` spreads each object property as an individual prop on the component.',
          km: '`<Child {...info} />` ពង្រាយតម្លៃ Property នីមួយៗក្នុង Object ជា Prop ទៅកាន់ Component។'
        }
      }
    ]
  },

  // Module 4: Conditional & List Rendering
  {
    id: 'svelte-l10',
    slug: 'svelte-4-1-conditional-rendering',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: {
      en: '4.1 Conditional Blocks ({#if} / {:else if} / {:else})',
      km: '៤.១ ការប្រើប្រាស់ Conditional Blocks ({#if} / {:else if} / {:else})'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Svelte uses explicit template block tags for conditional rendering. Blocks start with a hash `{#if condition}`, continue with optional colons `{:else if condition}` or `{:else}`, and ALWAYS close with a slash `{/if}`!',
      km: 'Svelte ប្រើប្រាស់ Explicit Template Block Tags សម្រាប់លក្ខខណ្ឌ Conditional Rendering។ Block ចាប់ផ្តើមដោយសញ្ញាជ្រុង `{#if condition}`, បន្តដោយសញ្ញាចុចពីរ `{:else}`, និងត្រូវបិទបញ្ចប់ដោយសញ្ញាស្លាស `{/if}` ជានិច្ច!'
    },
    tutorial: {
      en: 'Syntax: `{#if isLoggedIn} <p>Welcome!</p> {:else} <button>Log In</button> {/if}`.',
      km: 'ទម្រង់សរសេរ៖ `{#if isLoggedIn} <p>សូមស្វាគមន៍!</p> {:else} <button>ចូលប្រើ</button> {/if}`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .status { background: #10b981; color: white; padding: 12px 20px; border-radius: 8px; font-weight: bold; display: inline-block; }
  </style>
</head>
<body>
  <h3>{#if isLoggedIn} Block Output</h3>
  <div class="status">✅ អ្នកបាន Login រួចរាល់! (User Session Active)</div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Authentication Status & Role Access Controls',
        km: 'ការគ្រប់គ្រងការមើលឃើញ UI តាម Role'
      },
      description: {
        en: 'Render different navigation menus based on user role: `{#if role === "admin"} <AdminPanel /> {:else if role === "editor"} <EditorPanel /> {:else} <UserPanel /> {/if}`.',
        km: 'បង្ហាញ Dashboard ផ្សេងៗគ្នាតាម Role របស់អ្នកប្រើប្រាស់ដោយប្រើប្រាស់ `{#if}` blocks។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What character opens a closing tag in Svelte template blocks like `{/if}`?',
        km: 'តើសញ្ញាអ្វីដែលប្រើសម្រាប់បិទ Tag ក្នុង Svelte template block ដូចជា `{/if}`?'
      },
      solution: '/ (Forward slash)'
    },
    quizQuestions: [
      {
        id: 'q-sv-4-1',
        question: {
          en: 'Which character prefix starts a new block tag in Svelte (e.g. if, each, await)?',
          km: 'តើសញ្ញា Prefix មួយណាសម្រាប់ចាប់ផ្តើម Block Tag ថ្មីក្នុង Svelte?'
        },
        options: [
          { id: '1', text: { en: '# (Hash)', km: '# (Hash symbol)' }, isCorrect: true },
          { id: '2', text: { en: ': (Colon)', km: ': (Colon symbol)' }, isCorrect: false },
          { id: '3', text: { en: '@ (At symbol)', km: '@ (At symbol)' }, isCorrect: false }
        ],
        explanation: {
          en: 'Block openings start with `#` (`{#if}`), inner branch continuations use `:` (`{:else}`), and block closings use `/` (`{/if}`).',
          km: 'ចាប់ផ្តើមប្រើ `#`, បន្តប្រើ `:`, និងបិទបញ្ចប់ប្រើ `/`។'
        }
      }
    ]
  },

  {
    id: 'svelte-l11',
    slug: 'svelte-4-2-each-blocks-keys',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: {
      en: '4.2 List Rendering ({#each}) & Key Expressions',
      km: '៤.២ ការបង្ហាញបញ្ជី ({#each}) និងការប្រើប្រាស់ (key)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'To loop over arrays in Svelte templates, use `{#each items as item, index (item.id)}`. Specifying a unique key expression like `(item.id)` is critical when items can be reordered, prepended, or removed, allowing Svelte to track individual DOM nodes surgically.',
      km: 'ដើម្បី Loop បង្ហាញ Array ក្នុង Svelte, ប្រើប្រាស់ `{#each items as item, index (item.id)}`។ ការដាក់ Key Expression ដូចជា `(item.id)` គឺសំខាន់បំផុតពេលបញ្ជីមានការលុប បន្ថែម ឬផ្លាស់ប្តូរលំដាប់ ដើម្បីឱ្យ Svelte ធ្វើបច្ចុប្បន្នភាព DOM Node បានត្រឹមត្រូវ។'
    },
    tutorial: {
      en: 'Syntax: `{#each todoList as todo (todo.id)} <li>{todo.text}</li> {/each}`.',
      km: 'ទម្រង់សរសេរ៖ `{#each todoList as todo (todo.id)} <li>{todo.text}</li> {/each}`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    ul { list-style: none; padding: 0; }
    li { background: #1e293b; border-left: 4px solid #ff3e00; padding: 10px 16px; margin: 8px 0; border-radius: 6px; }
  </style>
</head>
<body>
  <h3>{#each courses as course (course.id)} Output</h3>
  <ul>
    <li>1. Svelte 5 Fundamentals (ID: 101)</li>
    <li>2. Reactive Declarations (ID: 102)</li>
    <li>3. Svelte Stores & State (ID: 103)</li>
  </ul>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Dynamic Shopping Cart Item Feeds',
        km: 'ការបង្ហាញទំនិញក្នុង Cart និង Feed ព័ត៌មាន'
      },
      description: {
        en: 'Keyed `{#each}` loops ensure animations and input focus remain attached to the correct list item when removing products from a shopping cart.',
        km: 'Keyed `{#each}` ការពារមិនឱ្យមានទិន្នន័យច្រឡំគ្នាពេលអតិថិជនចុចលុបទំនិញក្នុង Cart។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Where do you place the key expression in a Svelte `{#each}` block tag?',
        km: 'តើអ្នកដាក់ Key Expression ត្រង់ណា درون Tag `{#each}` របស់ Svelte?'
      },
      solution: 'In parentheses at the end of the item alias: (item.id)'
    },
    quizQuestions: [
      {
        id: 'q-sv-4-2',
        question: {
          en: 'Why is it important to provide a key like `(item.id)` in `{#each items as item (item.id)}`?',
          km: 'ហេតុអ្វីបានជាការដាក់ Key `(item.id)` ក្នុង `{#each}` មានសារៈសំខាន់?'
        },
        options: [
          { id: '1', text: { en: 'It allows Svelte to accurately track DOM elements during reorders and deletions', km: 'វាជួយឱ្យ Svelte តាមដាន DOM Node បានត្រឹមត្រូវពេលលុប ឬដូរលំដាប់' }, isCorrect: true },
          { id: '2', text: { en: 'It automatically sorts the array alphabetically', km: 'វាធ្វើការ តម្រៀប Array តាមអក្សរស្វ័យប្រវត្តិ' }, isCorrect: false },
          { id: '3', text: { en: 'It converts the array into a Map object', km: 'វាបម្លែង Array ទៅជា Map object' }, isCorrect: false }
        ],
        explanation: {
          en: 'Keys tell Svelte which DOM node corresponds to which array object when array items mutate.',
          km: 'Keys ប្រាប់ Svelte ថា DOM Node ណាជាស់ Object ណាពេល Array មានការផ្លាស់ប្តូរ។'
        }
      }
    ]
  },

  {
    id: 'svelte-l12',
    slug: 'svelte-4-3-each-else-fallback',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: {
      en: '4.3 Handling Empty Lists with {#each ... {:else}}',
      km: '៤.៣ ការបង្ហាញ Fallback UI ពេលបញ្ជីទទេរ (`{:else}`)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Svelte provides built-in fallback rendering for empty lists directly inside the `{#each}` block using `{:else}`. If the array length is 0 or empty, Svelte automatically renders the `{:else}` fallback markup!',
      km: 'Svelte មាន Feature ពិសេសសម្រាប់បង្ហាញ Fallback UI ពេល Array ទទេរ ដោយសរសេរ `{:else}` ផ្ទាល់ក្នុង Block `{#each}`។ ប្រសិនបើ Array មានប្រវែង 0, Svelte នឹងបង្ហាញកូដក្នុង `{:else}` ដោយស្វ័យប្រវត្តិ!'
    },
    tutorial: {
      en: 'Syntax: `{#each items as item} <p>{item}</p> {:else} <p>មិនមានទិន្នន័យឡើយ! (No items found)</p> {/each}`.',
      km: 'ទម្រង់សរសេរ៖ `{#each items as item} <p>{item}</p> {:else} <p>មិនមានទិន្នន័យឡើយ! (No items found)</p> {/each}`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .empty { background: #1e293b; border: 2px dashed #64748b; padding: 20px; border-radius: 12px; text-align: center; color: #94a3b8; }
  </style>
</head>
<body>
  <h3>{#each products as item ... {:else}} Empty Fallback</h3>
  <div class="empty">
    📦 មិនមានទិន្នន័យផលិតផលក្នុងបញ្ជីឡើយ! (Empty Product List)
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Search Result Empty States',
        km: 'ការបង្ហាញ Empty Search State ពេលរកទិន្នន័យមិនឃើញ'
      },
      description: {
        en: 'Show a clean empty icon and reset search button automatically when query filters return 0 results.',
        km: 'បង្ហាញសារ "រកមិនឃើញទិន្នន័យ" ដោយស្វ័យប្រវត្តិពេលការលទ្ធផលស្វែងរកស្មើ ០។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What tag clause provides a fallback when an array passed to `{#each}` is empty?',
        km: 'តើ Tag Clause មួយណាផ្តល់ Fallback ពេល Array ក្នុង `{#each}` គ្មានធាតុសោះ?'
      },
      solution: '{:else}'
    },
    quizQuestions: [
      {
        id: 'q-sv-4-3',
        question: {
          en: 'When does the `{:else}` block inside an `{#each}` structure render?',
          km: 'តើនៅពេលណាដែល Block `{:else}` ក្នុង `{#each}` បង្ហាញខ្លួនលើអេក្រង់?'
        },
        options: [
          { id: '1', text: { en: 'When the iterated array length is zero or empty', km: 'នៅពេលប្រវែង Array ស្មើ ០ ឬទទេរ' }, isCorrect: true },
          { id: '2', text: { en: 'When an error occurs during API fetch', km: 'នៅពេលកើតមាន Error ពេល Fetch ទិន្នន័យ' }, isCorrect: false },
          { id: '3', text: { en: 'Only when the array contains more than 100 items', km: 'ទាល់តែ Array មានធាតុលើសពី ១០០' }, isCorrect: false }
        ],
        explanation: {
          en: 'If the target array has no elements, execution immediately falls through to the `{:else}` template branch.',
          km: 'ប្រសិនបើ Array គ្មានធាតុទេ នោះ Svelte នឹងបង្ហាញកូដក្នុងសាខា `{:else}` ភ្លាមៗ។'
        }
      }
    ]
  }
];
