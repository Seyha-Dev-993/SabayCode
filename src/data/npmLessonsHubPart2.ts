import { FrontendLesson } from '../types/frontendClass';

export const NPM_LESSONS_PART2: FrontendLesson[] = [
  // ==========================================
  // MODULE 3: Scripts
  // ==========================================
  {
    id: 'npm-l8',
    slug: 'the-scripts-field-in-package-json',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: {
      en: '3.1 The scripts Field in package.json',
      km: '3.1 យល់ដឹងពី scripts Field ក្នុង package.json'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'The `"scripts"` object in `package.json` allows you to define custom key-value CLI commands to automate repetitive tasks like launching development servers, compiling TypeScript, running tests, or building production artifacts.',
      km: '`"scripts"` object ក្នុង `package.json` អនុញ្ញាតឱ្យអ្នកបង្កើត Command កាត់ដើម្បីសម្រួលដល់ការរត់ទাসក៍ផ្សេងៗដូចជា Launch Dev Server, រត់ Compiler, រត់ Test ឬ Build កូដសម្រាប់ Production។'
    },
    tutorial: {
      en: 'Structure of `"scripts"`:\n```json\n"scripts": {\n  "start": "node index.js",\n  "dev": "vite",\n  "build": "tsc && vite build",\n  "lint": "eslint ."\n}\n```\nKeys are script aliases, and values are terminal CLI commands executed when invoked.',
      km: 'រចនាសម្ព័ន្ធនៃ `"scripts"`៖\n```json\n"scripts": {\n  "start": "node index.js",\n  "dev": "vite",\n  "build": "tsc && vite build",\n  "lint": "eslint ."\n}\n```\nឈ្មោះ key គឺជា alias command ហើយ value គឺជា CLI command ដែលត្រូវរត់ក្នុង terminal!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .key { color: #f43f5e; }
    .val { color: #38bdf8; }
    .comment { color: #64748b; }
  </style>
</head>
<body>
  <div class="term">
    <div><span class="key">"scripts"</span>: {</div>
    <div>  <span class="key">"dev"</span>: <span class="val">"vite"</span>, <span class="comment">// Starts Vite local HMR server</span></div>
    <div>  <span class="key">"build"</span>: <span class="val">"vite build"</span>, <span class="comment">// Bundles app into /dist</span></div>
    <div>  <span class="key">"preview"</span>: <span class="val">"vite preview"</span> <span class="comment">// Previews build output locally</span></div>
    <div>}</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Cross-Platform Command Alias',
        km: 'ការប្រើ Command Alias ឆ្លង Platform'
      },
      description: {
        en: '`package.json` scripts abstract complex build tools behind short names. Developers on Windows, macOS, or Linux can all type the same `npm run dev` command regardless of OS.',
        km: 'npm scripts ជួយសម្រួល command ស្មុគស្មាញ។ Developer ប្រើ Windows, macOS ឬ Linux សុទ្ធតែអាចវាយ `npm run dev` ដូចគ្នាទាំងអស់។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Where inside package.json do you define executable terminal command shortcuts?',
        km: 'តើអ្នកកំណត់ Command Shortcuts សម្រាប់រត់ក្នុង Terminal នៅផ្នែកណាខ្លះក្នុង package.json?'
      },
      solution: 'Inside the "scripts" object property.'
    },
    quizQuestions: [
      {
        id: 'q-npm-3-1',
        question: {
          en: 'What is the primary purpose of the scripts section in package.json?',
          km: 'តើប្រយោជន៍ចម្បងនៃផ្នែក scripts ក្នុង package.json គឺជាអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'To create CLI shortcut aliases for running build tools and local dev commands', km: 'ដើម្បីបង្កើត Command Shortcut សម្រាប់រត់ Build Tools និង Dev Commands' }, isCorrect: true },
          { id: '2', text: { en: 'To write CSS styling rules', km: 'ដើម្បីសរសេរ CSS Style' }, isCorrect: false },
          { id: '3', text: { en: 'To configure SQL database tables', km: 'ដើម្បីកំណត់ SQL Database Table' }, isCorrect: false }
        ],
        explanation: {
          en: '`scripts` maps custom command names to underlying shell terminal scripts.',
          km: '`scripts` បំប្លែងឈ្មោះ command ខ្លីៗ ទៅជាកូដរត់ក្នុង Shell Terminal។'
        }
      }
    ]
  },

  {
    id: 'npm-l9',
    slug: 'running-scripts-with-npm-run',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: {
      en: '3.2 Running Custom & Preset Scripts (npm run)',
      km: '3.2 ការរត់ Custom និង Preset Scripts (npm run)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'To execute a custom script from `package.json`, run `npm run <script-name>` in your terminal (e.g., `npm run dev` or `npm run build`). Built-in lifecycle hooks like `start` and `test` can optionally drop the `run` keyword (`npm start` or `npm test`).',
      km: 'ដើម្បីរត់ Custom Script ចេញពី `package.json` ត្រូវវាយ `npm run <script-name>` ក្នុង terminal (ឧទាហរណ៍ `npm run dev` ឬ `npm run build`)។ ចំពោះ Preset/Lifecycle scripts ដូចជា `start` និង `test` អ្នកអាចវាយ `npm start` ឬ `npm test` ដោយមិនបាច់ថែមពាក្យ `run` ក៏បាន។'
    },
    tutorial: {
      en: '- Executing custom script: `npm run dev` -> runs `vite`.\n- Executing preset script: `npm test` -> shortcut for `npm run test`.\n- Passing CLI flags to scripts: `npm run build -- --watch` (the `--` forwards flags to the underlying command).',
      km: '- រត់ Custom script៖ `npm run dev` -> ដំណើរការ `vite`\n- រត់ Preset script៖ `npm test` -> វាយកាត់ពី `npm run test`\n- ការបញ្ជូន flag ៖ `npm run build -- --watch` (សញ្ញា `--` ផ្ញើ flag ទៅឱ្យ command ខាងក្នុង)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .ok { color: #4ade80; }
    .out { color: #94a3b8; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ npm run dev</div>
    <div class="out">> my-app@1.0.0 dev</div>
    <div class="out">> vite</div>
    <br/>
    <div class="ok">  VITE v5.2.0  ready in 240 ms</div>
    <div class="ok">  ➜  Local:   http://localhost:5173/</div>
    <div class="ok">  ➜  Network: use --host to expose</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'CI/CD Automation Pipeline',
        km: 'ដំណើរការ CI/CD Automation'
      },
      description: {
        en: 'Continuous Integration services like GitHub Actions execute `npm run lint`, `npm test`, and `npm run build` on every Pull Request to prevent broken code from being deployed.',
        km: 'ប្រព័ន្ធ CI/CD ដូចជា GitHub Actions រត់ `npm run lint`, `npm test` និង `npm run build` ដោយស្វ័យប្រវត្តិលើគ្រប់ PR ដើម្បីការពារកុំឱ្យកូដមាន error ឡើងចាត់ចែងក្នុង Production។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What command executes the custom script `"build": "vite build"` defined in package.json?',
        km: 'តើ Command មួយណាដែលរត់ custom script `"build": "vite build"` ដែលសរសេរក្នុង package.json?'
      },
      solution: 'npm run build'
    },
    quizQuestions: [
      {
        id: 'q-npm-3-2',
        question: {
          en: 'Which script name allows running without the `run` keyword?',
          km: 'តើឈ្មោះ Script មួយណាដែលអនុញ្ញាតឱ្យរត់ដោយមិនចាំបាច់ថែមពាក្យ `run`?'
        },
        options: [
          { id: '1', text: { en: 'start (and test)', km: 'start (និង test)' }, isCorrect: true },
          { id: '2', text: { en: 'dev', km: 'dev' }, isCorrect: false },
          { id: '3', text: { en: 'build', km: 'build' }, isCorrect: false }
        ],
        explanation: {
          en: '`npm start` and `npm test` are built-in npm shortcuts for `npm run start` and `npm run test`.',
          km: '`npm start` និង `npm test` គឺជា Shortcut ផ្លូវការរបស់ npm។'
        }
      }
    ]
  },

  {
    id: 'npm-l10',
    slug: 'common-real-project-scripts',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: {
      en: '3.3 Industry-Standard Scripts (dev, build, test, lint)',
      km: '3.3 Standard Scripts ក្នុងក្រុមហ៊ុន (dev, build, test, lint)'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Professional software teams follow consistent naming conventions for `package.json` scripts across all frontend and backend projects.',
      km: 'ក្រុមអភិវឌ្ឍន៍ Software អាជីពតែងតែប្រើប្រាស់ឈ្មោះ Standard Scripts ដូចៗគ្នាសម្រាប់គ្រប់ Frontend និង Backend projects។'
    },
    tutorial: {
      en: '- `dev` / `start`: Launches local development server with hot-reloading.\n- `build`: Compiles TypeScript, minifies CSS/JS assets, and outputs production bundle into `/dist` or `/build`.\n- `test`: Executes unit/integration test suite (e.g. Vitest, Jest).\n- `lint`: Scans codebase for syntax and code formatting errors (e.g. ESLint, Biome).',
      km: '- `dev` / `start`៖ បើក Local Dev Server មាន Hot-Reloading ភ្លាមៗ\n- `build`៖ បំប្លែង TypeScript, បង្រួម CSS/JS និងបូកសរុប Output ដាក់ក្នុង `/dist` ឬ `/build`\n- `test`៖ រត់សមយុទ្ធ Test កូដស្វ័យប្រវត្តិ (Vitest, Jest)\n- `lint`៖ ត្រួតពិនិត្យកំហុស Syntax និង Formatting ក្នុង Project ទាំងមូល (ESLint)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .ok { color: #4ade80; }
    .info { color: #38bdf8; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ npm run build</div>
    <div class="info">vite v5.2.0 building for production...</div>
    <div class="info">transforming (24) modules...</div>
    <div class="ok">✓ 24 modules transformed.</div>
    <div class="ok">dist/index.html                  0.46 kB │ gzip:  0.29 kB</div>
    <div class="ok">dist/assets/index-Dk12a9.js     142.12 kB │ gzip: 45.10 kB</div>
    <div class="ok">✓ built in 1.15s</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Deploying Build Outputs',
        km: 'ការទាញយក Build Outputs ទៅ Deploy'
      },
      description: {
        en: 'Hosting platforms like Vercel, Netlify, and Cloudflare Pages look specifically for `npm run build` to generate static production assets automatically.',
        km: 'Hosting platforms ដូចជា Vercel ឬ Netlify រត់ `npm run build` ដោយស្វ័យប្រវត្តិ ដើម្បីបង្កើត static files យកទៅបង្ហាញលើ អ៊ីនធឺណិត។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which script name is traditionally used to build optimized production files into the dist/ directory?',
        km: 'តើឈ្មោះ Script មួយណាដែលគេនិយមប្រើសម្រាប់បង្កើត Production Files បង្រួមក្នុង folder dist/?'
      },
      solution: 'build (npm run build)'
    },
    quizQuestions: [
      {
        id: 'q-npm-3-3',
        question: {
          en: 'What does `npm run build` typically produce?',
          km: 'តើ `npm run build` ជាធម្មតាបង្កើតបានអ្វីខ្លះ?'
        },
        options: [
          { id: '1', text: { en: 'Compiled, minified, production-ready static assets in a build or dist directory', km: 'Static files ដែលបានបង្រួម រួចរាល់សម្រាប់ Deploy ក្នុង dist ឬ build' }, isCorrect: true },
          { id: '2', text: { en: 'A new laptop computer', km: 'កុំព្យូទ័រថ្មីមួយ' }, isCorrect: false },
          { id: '3', text: { en: 'A database SQL file', km: 'SQL file របស់ database' }, isCorrect: false }
        ],
        explanation: {
          en: '`build` scripts aggregate and minify source code into deployment assets.',
          km: '`build` script បង្រួមកូដដើមឱ្យទៅជា Production Assets ដែលអាចបង្ហាញលើ Hosting។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 4: Semantic Versioning
  // ==========================================
  {
    id: 'npm-l11',
    slug: 'semantic-versioning-anatomy',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: {
      en: '4.1 Reading Semantic Versioning (MAJOR.MINOR.PATCH)',
      km: '4.1 ការអាន Semantic Versioning (MAJOR.MINOR.PATCH)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Semantic Versioning (SemVer) is a 3-part versioning standard formatted as `MAJOR.MINOR.PATCH` (e.g. `2.14.3`). Each number increment communicates the level of changes introduced in a release.',
      km: 'Semantic Versioning (SemVer) គឺជាស្តង់ដារកំណត់លេខ Version ជា ៣ ផ្នែក ដែលមានទម្រង់ `MAJOR.MINOR.PATCH` (ឧទាហរណ៍ `2.14.3`)។ ការដំឡើងលេខនីមួយៗប្រាប់ពីកម្រិតនៃការផ្លាស់ប្តូរកូដក្នុង Release នោះ។'
    },
    tutorial: {
      en: '- `MAJOR` (e.g., `1.0.0` -> `2.0.0`): Incompatible Breaking Changes! Code relying on old versions may break.\n- `MINOR` (e.g., `1.2.0` -> `1.3.0`): Backward-compatible new features added safely.\n- `PATCH` (e.g., `1.2.3` -> `1.2.4`): Backward-compatible bug fixes and security patches.',
      km: '- `MAJOR` (ឧទាហរណ៍ `1.0.0` -> `2.0.0`)៖ ការផ្លាស់ប្តូរធំអាចបែកកូដ (Breaking Changes)!\n- `MINOR` (ឧទាហរណ៍ `1.2.0` -> `1.3.0`)៖ បន្ថែម Feature ថ្មីដោយមិនបែកកូដចាស់\n- `PATCH` (ឧទាហរណ៍ `1.2.3` -> `1.2.4`)៖ កែសម្រួល Bug ឬចន្លោះប្រហោងសុវត្ថិភាព'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 20px; text-align: center; }
    .ver { font-size: 24px; font-weight: bold; }
    .maj { color: #f43f5e; }
    .min { color: #facc15; }
    .pat { color: #4ade80; }
    .legend { display: flex; justify-content: space-around; margin-top: 20px; text-align: left; }
  </style>
</head>
<body>
  <div class="term">
    <div class="ver">
      v<span class="maj">2</span>.<span class="min">14</span>.<span class="pat">3</span>
    </div>
    <div class="legend">
      <div><span class="maj">■ MAJOR (2)</span><br/><small>Breaking Changes</small></div>
      <div><span class="min">■ MINOR (14)</span><br/><small>New Features</small></div>
      <div><span class="pat">■ PATCH (3)</span><br/><small>Bug Fixes</small></div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'React Major Upgrades',
        km: 'ការដំឡើង React Major Version'
      },
      description: {
        en: 'Upgrading React from `17.0.0` to `18.0.0` was a MAJOR bump, introducing Concurrent Rendering and requiring minor refactoring of root rendering APIs.',
        km: 'ការដំឡើង React ពី `17.0.0` ទៅ `18.0.0` គឺជា MAJOR bump ដែលតម្រូវឱ្យកែសម្រួលកូដខ្លះត្រង់កន្លែង Render App។'
      }
    },
    practiceExercise: {
      question: {
        en: 'If a library fixes a small security bug without breaking features, which segment of 1.4.2 increases?',
        km: 'ប្រសិនបើ Library កែសម្រួល Security bug តើលេខផ្នែកណានៃ 1.4.2 នឹងកើនឡើង?'
      },
      solution: 'The PATCH segment increases (from 1.4.2 to 1.4.3).'
    },
    quizQuestions: [
      {
        id: 'q-npm-4-1',
        question: {
          en: 'In version number 4.12.7, what does 4 represent?',
          km: 'ក្នុងលេខ Version 4.12.7 តើលេខ 4 តំណាងឱ្យអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'MAJOR version', km: 'MAJOR version' }, isCorrect: true },
          { id: '2', text: { en: 'MINOR version', km: 'MINOR version' }, isCorrect: false },
          { id: '3', text: { en: 'PATCH version', km: 'PATCH version' }, isCorrect: false }
        ],
        explanation: {
          en: 'In `MAJOR.MINOR.PATCH`, the first number represents the MAJOR version.',
          km: 'ក្នុង `MAJOR.MINOR.PATCH` លេខទីមួយគឺជា MAJOR version។'
        }
      }
    ]
  },

  {
    id: 'npm-l12',
    slug: 'caret-and-tilde-version-ranges',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: {
      en: '4.2 Caret (^) vs. Tilde (~) Version Ranges',
      km: '4.2 យល់ដឹងពីសញ្ញា Caret (^) និង Tilde (~)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Symbols in `package.json` define allowed automatic update ranges during `npm install` or `npm update`:\n- Caret (`^1.2.3`): Allows MINOR & PATCH updates (e.g. `>= 1.2.3 < 2.0.0`).\n- Tilde (`~1.2.3`): Allows ONLY PATCH updates (e.g. `>= 1.2.3 < 1.3.0`).\n- Exact (`1.2.3`): Locks strictly to version `1.2.3`.',
      km: 'សញ្ញានៅខាងមុខលេខ Version ក្នុង `package.json` កំណត់ព្រំដែននៃការអាប់ដេតស្វ័យប្រវត្តិ៖\n- Caret (`^1.2.3`)៖ អនុញ្ញាតអាប់ដេត MINOR និង PATCH (ពី `1.2.3` ដល់ `< 2.0.0`)\n- Tilde (`~1.2.3`)៖ អនុញ្ញាតអាប់ដេតតែ PATCH ប៉ុណ្ណោះ (ពី `1.2.3` ដល់ `< 1.3.0`)\n- Exact (`1.2.3`)៖ ចាក់សោរតែលើ Version `1.2.3` ប៉ុណ្ណោះ'
    },
    tutorial: {
      en: '- Example Caret `^4.17.21`: `npm update` will update to `4.18.0` or `4.19.1`, but NEVER `5.0.0`.\n- Example Tilde `~4.17.21`: `npm update` will update to `4.17.22` or `4.17.30`, but NEVER `4.18.0`.',
      km: '- ឧទាហរណ៍ Caret `^4.17.21`៖ ឡើងដល់ `4.18.0` បាន ប៉ុន្តែ **ដាច់ខាតមិនឡើង** ដល់ `5.0.0` ឡើយ\n- ឧទាហរណ៍ Tilde `~4.17.21`៖ ឡើងដល់ `4.17.22` បាន ប៉ុន្តែ **ដាច់ខាតមិនឡើង** ដល់ `4.18.0` ឡើយ'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .caret { color: #38bdf8; font-weight: bold; }
    .tilde { color: #facc15; font-weight: bold; }
    .exact { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <div class="term">
    <div><span class="caret">"^1.4.0"</span> -> Allows 1.4.1, 1.5.0, 1.9.0 (No 2.0.0)</div>
    <br/>
    <div><span class="tilde">"~1.4.0"</span> -> Allows 1.4.1, 1.4.9 (No 1.5.0)</div>
    <br/>
    <div><span class="exact">"1.4.0"</span>  -> Locks to 1.4.0 only</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'npm Default Prefix',
        km: 'Prefix លំនាំដើមរបស់ npm'
      },
      description: {
        en: 'By default, `npm install <package>` prefixes version numbers with a Caret (`^`), striking a balance between receiving feature updates and preventing major breaking changes.',
        km: 'តាមលំនាំដើម `npm install` ប្រើប្រាស់សញ្ញា Caret (`^`) ដើម្បីទទួលបាន Feature ថ្មីៗដោយសុវត្ថិភាព។'
      }
    },
    practiceExercise: {
      question: {
        en: 'If package.json has `"axios": "^1.5.0"`, will `npm update` install version `1.6.2`?',
        km: 'ប្រសិនបើ package.json មាន `"axios": "^1.5.0"` តើ `npm update` អាចដំឡើងដល់ version `1.6.2` បានដែរឬទេ?'
      },
      solution: 'Yes! Caret allows MINOR upgrades within major version 1.'
    },
    quizQuestions: [
      {
        id: 'q-npm-4-2',
        question: {
          en: 'What does `"lodash": "^4.17.21"` allow npm to install automatically?',
          km: 'តើ `"lodash": "^4.17.21"` អនុញ្ញាតឱ្យ npm អាប់ដេតដល់ត្រឹមណា?'
        },
        options: [
          { id: '1', text: { en: 'Any 4.x.x version (Minor & Patch updates), but not 5.0.0', km: 'ត្រឹមគ្រប់ 4.x.x (Minor & Patch) ប៉ុន្តែមិនដំឡើងដល់ 5.0.0 ឡើយ' }, isCorrect: true },
          { id: '2', text: { en: 'Only patch versions like 4.17.22', km: 'ត្រឹមតែ patch ដូចជា 4.17.22' }, isCorrect: false },
          { id: '3', text: { en: 'Major version 5.0.0', km: 'ឡើងដល់ Major 5.0.0' }, isCorrect: false }
        ],
        explanation: {
          en: 'Caret (`^`) allows compatible MINOR and PATCH updates within the same MAJOR version.',
          km: 'Caret (`^`) អនុញ្ញាតអាប់ដេត MINOR និង PATCH ក្នងរង្វង់ MAJOR តែមួយ។'
        }
      }
    ]
  },

  {
    id: 'npm-l13',
    slug: 'version-pinning-and-reproducible-builds',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: {
      en: '4.3 Version Pinning & Reproducible Builds',
      km: '4.3 ការធ្វើ Version Pinning និង Reproducible Builds'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Version Pinning means specifying exact dependency versions in `package.json` (removing `^` and `~`) or using `npm ci` in CI/CD pipelines to bypass version resolution and install strictly from `package-lock.json`.',
      km: 'Version Pinning គឺជាការចាក់សោរលេខ Version ច្បាស់លាស់ក្នុង `package.json` (ដកសញ្ញា `^` និង `~` ចេញ) ឬប្រើប្រាស់ `npm ci` ក្នុង CI/CD pipeline ដើម្បីដំឡើងកូដចេញពី `package-lock.json` ដោយផ្ទាល់ ធានាថាកូដ Build គ្មានការប្រែប្រួលសូម្បីតែ 1%។'
    },
    tutorial: {
      en: '- `npm install` -> Resolves and updates `package-lock.json` if new compatible package versions exist.\n- `npm ci` (Clean Install) -> Deletes `node_modules/`, reads ONLY `package-lock.json`, and throws an error if `package.json` and lockfile mismatch. Used on server deployments!',
      km: '- `npm install` -> អាចអាប់ដេត `package-lock.json` បើមាន package ថ្មី\n- `npm ci` (Clean Install) -> លុប `node_modules/`, អានតែ `package-lock.json` ប៉ុណ្ណោះ! បើ lockfile និង package.json មិនស៊ីគ្នា វានឹង báo error ភ្លាម។ ប្រើប្រាស់លើ Deployment Server!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .ok { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ npm ci</div>
    <div class="ok">added 842 packages in 4.2s from package-lock.json</div>
    <div class="ok">✓ Clean install completed deterministically</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'npm ci on Production Servers',
        km: 'ការប្រើ npm ci លើ Production Servers'
      },
      description: {
        en: 'Automated deployment tools like Docker containers and GitHub Actions always execute `npm ci` instead of `npm install` for speed and strict reproducibility.',
        km: 'Docker និង GitHub Actions តែងតែរត់ `npm ci` ដើម្បីទទួលបានល្បឿនលឿន និងធានាថា packages ទាំងអស់ដូចគ្នា 100%។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which npm command performs a strict clean install directly from package-lock.json on CI servers?',
        km: 'តើ npm command មួយណាដែលធ្វើ clean install ផ្ទាល់ចេញពី package-lock.json លើ CI server?'
      },
      solution: 'npm ci'
    },
    quizQuestions: [
      {
        id: 'q-npm-4-3',
        question: {
          en: 'How does `npm ci` differ from `npm install`?',
          km: 'តើ `npm ci` ខុសពី `npm install` យ៉ាងដូចម្តេច?'
        },
        options: [
          { id: '1', text: { en: '`npm ci` strictly requires package-lock.json and never modifies lockfiles', km: '`npm ci` ដំឡើងផ្ទាល់តាម package-lock.json ហើយមិនកែប្រែ lockfile ឡើយ' }, isCorrect: true },
          { id: '2', text: { en: '`npm ci` deletes all HTML files', km: '`npm ci` លុប HTML file' }, isCorrect: false },
          { id: '3', text: { en: 'There is no difference', km: 'គ្មានអ្វីខុសគ្នាឡើយ' }, isCorrect: false }
        ],
        explanation: {
          en: '`npm ci` bypasses package resolution and enforces exact installation from lockfile.',
          km: '`npm ci` អាន និងដំឡើងតាម lockfile ដោយផ្ទាល់សម្រាប់ server deployment។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 5: npm vs yarn vs pnpm
  // ==========================================
  {
    id: 'npm-l14',
    slug: 'package-managers-overview-npm-yarn-pnpm',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: {
      en: '5.1 Package Managers Ecosystem (npm, yarn, pnpm)',
      km: '5.1 ប្រព័ន្ធអេកូឡូស៊ី Package Managers (npm, yarn, pnpm)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'While `npm` is the official default CLI, developers also use alternative package managers like `Yarn` (created by Meta) and `pnpm` (Performant npm). All three fetch packages from the exact same central npm registry (`registry.npmjs.org`), but handle installation caching and disk space differently.',
      km: 'ថ្វីត្បិតតែ `npm` គឺជា CLI លំនាំដើមផ្លូវការក៏ដោយ Developer ក៏ប្រើប្រាស់ Package Managers ផ្សេងទៀតដូចជា `Yarn` (បង្កើតដោយ Meta) និង `pnpm` (Performant npm)។ ឧបករណ៍ទាំង ៣ នេះសុទ្ធតែទាញយក Packages ពី npm registry តែមួយ (`registry.npmjs.org`) ប៉ុន្តែមានរបៀប Cache និងគ្រប់គ្រងទំហំ Disk ខុសៗគ្នា។'
    },
    tutorial: {
      en: '- Equivalent Commands Comparison:\n  - Install all: `npm install` | `yarn` | `pnpm install`\n  - Add package: `npm i axios` | `yarn add axios` | `pnpm add axios`\n  - Add dev package: `npm i -D vite` | `yarn add -D vite` | `pnpm add -D vite`\n  - Run script: `npm run dev` | `yarn dev` | `pnpm dev`',
      km: '- ប្រៀបធៀប Commands ប្រើប្រាស់៖\n  - ដំឡើងទាំងអស់៖ `npm install` | `yarn` | `pnpm install`\n  - បន្ថែម package៖ `npm i axios` | `yarn add axios` | `pnpm add axios`\n  - បន្ថែម dev package៖ `npm i -D vite` | `yarn add -D vite` | `pnpm add -D vite`\n  - រត់ script៖ `npm run dev` | `yarn dev` | `pnpm dev` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .npm { color: #f43f5e; }
    .yarn { color: #38bdf8; }
    .pnpm { color: #facc15; }
  </style>
</head>
<body>
  <div class="term">
    <div class="npm">🔴 npm:  npm install axios</div>
    <br/>
    <div class="yarn">🔵 Yarn: yarn add axios</div>
    <br/>
    <div class="pnpm">🟡 pnpm: pnpm add axios</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Shared Registry Architecture',
        km: 'រចនាសម្ព័ន្ធ Registry រួមគ្នា'
      },
      description: {
        en: 'You can publish a package using npm and your coworker can download it using yarn or pnpm without any compatibility issues.',
        km: 'អ្នកអាច Publish package ដោយប្រើ npm ហើយមិត្តរួមក្រុមទាញយកដោយប្រើ yarn ឬ pnpm ដោយគ្មានបញ្ហាអីទាំងអស់។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Do npm, yarn, and pnpm download packages from different registries or the same central registry?',
        km: 'តើ npm, yarn, និង pnpm ទាញយក packages ពី registry ខុសគ្នា ឬពី central registry តែមួយ?'
      },
      solution: 'They all download packages from the exact same central npm registry (registry.npmjs.org).'
    },
    quizQuestions: [
      {
        id: 'q-npm-5-1',
        question: {
          en: 'Where do npm, yarn, and pnpm fetch their packages from?',
          km: 'តើ npm, yarn, និង pnpm ទាញយក packages ពីប្រភពណា?'
        },
        options: [
          { id: '1', text: { en: 'The central public npm registry', km: 'ពី npm registry រួមគ្នាតែមួយ' }, isCorrect: true },
          { id: '2', text: { en: 'Three completely disconnected registries', km: 'ពី registry ៣ ផ្សេងគ្នានិងដាច់ដោយឡែក' }, isCorrect: false },
          { id: '3', text: { en: 'Google Drive links', km: 'ពី Google Drive' }, isCorrect: false }
        ],
        explanation: {
          en: 'All major JS package managers use the official npm registry as the standard package host.',
          km: 'ឧបករណ៍ទាំង ៣ ទាញយកកូដចេញពី npm registry រួមគ្នាតែមួយ។'
        }
      }
    ]
  },

  {
    id: 'npm-l15',
    slug: 'key-differences-speed-lockfiles-disk-usage',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: {
      en: '5.2 Key Differences: Speed, Lockfiles & Hard Links',
      km: '5.2 ចំណុចខុសគ្នា៖ ល្បឿន, Lockfiles និង Hard Links'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Different package managers use distinct strategies to optimize disk space and installation speed:\n- npm: Uses `package-lock.json` and copies files into each project\'s `node_modules/`.\n- Yarn: Uses `yarn.lock` with fast parallel downloading.\n- pnpm: Uses `pnpm-lock.yaml` and a global content-addressable store with hard links, saving gigabytes of disk space across multiple projects!',
      km: 'Package managers ផ្សេងគ្នាប្រើប្រាស់យុទ្ធសាស្ត្រខុសៗគ្នាដើម្បីសន្សំសំចៃទំហំ Disk និងល្បឿន៖\n- npm៖ ប្រើ `package-lock.json` និង copy files ចូល `node_modules/` របស់ project នីមួយៗ\n- Yarn៖ ប្រើ `yarn.lock` និងទាញយកកូដស្របគ្នា (Parallel download)\n- pnpm៖ ប្រើ `pnpm-lock.yaml` និង Global Store ដោយប្រើ Hard Links សន្សំសំចៃទំហំ Disk រាប់ GB!'
    },
    tutorial: {
      en: 'Why pnpm is popular for monorepos:\nIf 10 React projects on your computer all use `react-dom` (10MB), npm duplicates it 10 times (100MB). pnpm stores it ONCE in a central global store and links it safely, taking only 10MB total!',
      km: 'ហេតុអ្វី pnpm និយមប្រើក្នុង Monorepos៖\nបើកុំព្យូទ័រអ្នកមាន 10 React projects ហើយប្រើ `react-dom` (10MB) npm នឹង copy ១០ ដង (អស់ 100MB)។ តែ pnpm រក្សាទុកតែ ១ ដងក្នុង Global Store រួច Link មក ធ្វើឱ្យអស់ត្រឹម 10MB ប៉ុណ្ណោះ!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .title { color: #facc15; font-weight: bold; margin-bottom: 10px; }
    .row { display: flex; justify-content: space-between; border-bottom: 1px solid #1e293b; padding: 6px 0; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">📊 Lockfile Comparison Table</div>
    <div class="row"><span>npm</span> <span style="color:#f43f5e">package-lock.json</span></div>
    <div class="row"><span>Yarn</span> <span style="color:#38bdf8">yarn.lock</span></div>
    <div class="row"><span>pnpm</span> <span style="color:#facc15">pnpm-lock.yaml</span></div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Monorepo Efficiency with pnpm',
        km: 'ប្រសិទ្ធភាព Monorepo ជាមួយ pnpm'
      },
      description: {
        en: 'Large organizations managing hundreds of micro-frontends in a single monorepo prefer pnpm for its strict symlink structure and lightning-fast installation benchmarks.',
        km: 'ក្រុមហ៊ុនធំៗដែលមាន Projects ច្រើនក្នុង Monorepo តែងតែជ្រើសរើស pnpm ដោយសារល្បឿនលឿន និងការសន្សំសំចៃទំហំ Storage។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which package manager uses hard links to a central global store to save disk space?',
        km: 'តើ package manager មួយណាដែលប្រើ hard links ទៅកាន់ central global store ដើម្បីសន្សំសំចៃទំហំ disk?'
      },
      solution: 'pnpm'
    },
    quizQuestions: [
      {
        id: 'q-npm-5-2',
        question: {
          en: 'What lockfile name is produced when using Yarn?',
          km: 'តើ lockfile ឈ្មោះអ្វីដែលកើតឡើងនៅពេលប្រើប្រាស់ Yarn?'
        },
        options: [
          { id: '1', text: { en: 'yarn.lock', km: 'yarn.lock' }, isCorrect: true },
          { id: '2', text: { en: 'package-lock.json', km: 'package-lock.json' }, isCorrect: false },
          { id: '3', text: { en: 'pnpm-lock.yaml', km: 'pnpm-lock.yaml' }, isCorrect: false }
        ],
        explanation: {
          en: 'Yarn generates and reads `yarn.lock` to pin dependency graphs.',
          km: 'Yarn បង្កើត និងប្រើប្រាស់ `yarn.lock`។'
        }
      }
    ]
  },

  {
    id: 'npm-l16',
    slug: 'lockfile-detection-and-no-mixing-rule',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: {
      en: '5.3 Lockfile Identification & The No-Mixing Rule',
      km: '5.3 ការសម្គាល់ Lockfile និងច្បាប់ហាមដាច់ខាតកុំបូកឡូក'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'ALWAYS look at the repository root to detect which package manager a project uses:\n- `package-lock.json` -> Use `npm`\n- `yarn.lock` -> Use `yarn`\n- `pnpm-lock.yaml` -> Use `pnpm`\n\nCRITICAL RULE: NEVER mix package managers in the same project! Mixing npm and yarn creates duplicate conflicting lockfiles, out-of-sync dependency trees, and phantom bugs.',
      km: 'ត្រូវពិនិត្យមើល Root folder នៃ Project ជានិច្ចដើម្បីដឹងថាក្រុមគេប្រើ package manager មួយណា៖\n- ឃើញ `package-lock.json` -> ប្រើ `npm`\n- ឃើញ `yarn.lock` -> ប្រើ `yarn`\n- ឃើញ `pnpm-lock.yaml` -> ប្រើ `pnpm`\n\nច្បាប់សំខាន់បំផុត៖ ហាមប្រើ package managers ច្របូកច្របល់គ្នាក្នុង Project តែមួយដាច់ខាត! ការប្រើ npm ផង yarn ផងបង្កើត lockfiles ជាន់គ្នា នាំឱ្យកើតមាន Bug ស្មុគស្មាញ។'
    },
    tutorial: {
      en: 'How to clean up if someone accidentally mixed package managers:\n1. Delete duplicate lockfiles (e.g., keep `package-lock.json`, delete `yarn.lock`).\n2. Delete `node_modules/` folder.\n3. Run the chosen tool clean install command (`npm install`).',
      km: 'របៀបដោះស្រាយបើជ្រុលជាប្រើច្របូកច្របល់គ្នា៖\n១. លុប lockfile ដែលអត់ត្រូវការចោល (ឧទាហរណ៍ ទុកតែ `package-lock.json` លុប `yarn.lock` ចោល)\n២. លុប folder `node_modules/` ចោល\n៣. វាយរត់ command ដំឡើងឡើងវិញ (`npm install`)។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .err { color: #f43f5e; font-weight: bold; }
    .ok { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="err">❌ BAD PRACTICE: Having both files in 1 repo</div>
    <div class="err">- package-lock.json</div>
    <div class="err">- yarn.lock</div>
    <br/>
    <div class="ok">✅ GOOD PRACTICE: Exactly ONE lockfile matching your team tool</div>
    <div class="ok">$ ls -1 *.lock*</div>
    <div class="ok">package-lock.json</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Enforcing Engine Rules with Corepack',
        km: 'ការកំណត់ Engine Rules ជាមួយ Corepack'
      },
      description: {
        en: 'Teams set `"packageManager": "pnpm@9.0.0"` in `package.json` so Node.js automatically blocks developers from accidentally running `npm install` on a pnpm project.',
        km: 'ក្រុមការងារកំណត់ `"packageManager": "pnpm@9.0.0"` ក្នុង `package.json` ដើម្បីហាមមិនឱ្យអ្នកណាជ្រុលដៃវាយ `npm install` លើ project របស់ pnpm។'
      }
    },
    practiceExercise: {
      question: {
        en: 'If you clone a repository that contains `yarn.lock`, which package manager command should you use?',
        km: 'ប្រសិនបើអ្នក Clone គម្រោងមួយដែលមាន `yarn.lock` តើអ្នកគួរប្រើប្រាស់ package manager command មួយណា?'
      },
      solution: 'You should use `yarn` (or `yarn install`).'
    },
    quizQuestions: [
      {
        id: 'q-npm-5-3',
        question: {
          en: 'Why is mixing npm and yarn in the same project discouraged?',
          km: 'ហេតុអ្វីបានជាគេហាមប្រាមមិនឱ្យប្រើ npm និង yarn ច្របូកច្របល់គ្នាក្នុង project តែមួយ?'
        },
        options: [
          { id: '1', text: { en: 'It creates conflicting lockfiles and leads to out-of-sync dependency trees and unpredictable bugs', km: 'វាបង្កើត lockfiles ជាន់គ្នា និងធ្វើឱ្យកំណែកូដក្នុង dependencies មិនស្មើគ្នា បង្កជា Bug' }, isCorrect: true },
          { id: '2', text: { en: 'It turns off wifi connection', km: 'វាបិទ អ៊ីនធឺណិត' }, isCorrect: false },
          { id: '3', text: { en: 'Node.js deletes your source code', km: 'Node.js លុបកូដ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Having multiple lockfiles creates ambiguity about which dependency versions are active.',
          km: 'ការមាន lockfiles ច្រើនធ្វើឱ្យការដំឡើង dependencies មានភាពច្របូកច្របល់។'
        }
      }
    ]
  }
];
