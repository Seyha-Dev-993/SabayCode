import { FrontendLesson } from '../types/frontendClass';

export const VITE_LESSONS_PART1: FrontendLesson[] = [
  // ==========================================
  // MODULE 1: What Build Tools Do & Why We Need Them
  // ==========================================
  {
    id: 'vite-l1',
    slug: 'problem-bundling-transpiling',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: {
      en: '1.1 The Problem: Why Raw Browsers Need Bundlers & Transpilers',
      km: '1.1 បញ្ហានៃ Browser ផ្ទាល់ និងតម្រូវការ Bundlers & Transpilers'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Raw web browsers cannot directly understand TypeScript, JSX syntax, CSS preprocessors (Sass/Tailwind directives), or hundreds of separate npm module import files efficiently. Build tools take raw source code files, transpile modern/typed syntax into plain JS/CSS, and bundle them into optimized assets.',
      km: 'Web Browsers មិនអាចយល់កូដ TypeScript, JSX syntax (React), CSS Directives ឬ File Import រាប់រយពី npm ជារៀងរាល់ថ្ងៃដោយផ្ទាល់បានឡើយ។ Build Tools ដើរតួជាអ្នកបំលែង (Transpile) កូដទំនើបឱ្យទៅជា JavaScript/CSS សាមញ្ញ និងចងបាច់ (Bundle) ឯកសារឱ្យមានទំហំតូចលឿន សម្រាប់ Browser ដំណើរការ។'
    },
    tutorial: {
      en: '- Bundling: Combining hundreds of small JS modules into fewer optimized files to reduce HTTP requests.\n- Transpiling: Converting TypeScript/JSX code into standard ES5/ES6 JavaScript readable by all browsers.\n- Asset Processing: Minifying CSS/JS and optimizing image files for lightning-fast web loading.',
      km: '- Bundling: ការចងបង្រួម file JS តូចៗរាប់រយចូលគ្នាជា file ធំសមស្រប ដើម្បីកាត់បន្ថយ HTTP Requests។\n- Transpiling: ការបំលែងកូដ TypeScript/JSX ទៅជា JavaScript ស្តង់ដារដែលគ្រប់ Browser អាចរត់បាន។\n- Asset Optimization: ការបង្រួមទំហំកូដ CSS/JS (Minification) និងរូបភាពដើម្បីឱ្យ Web Load ឡើងលឿន។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5); }
    .title { color: #bd34fe; font-weight: bold; border-bottom: 1px solid #1e293b; padding-bottom: 8px; margin-bottom: 12px; }
    .cmd { color: #facc15; }
    .output { color: #94a3b8; margin-top: 6px; }
    .highlight { color: #38bdf8; }
    .success { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">⚡ Build Process — Transpilation & Bundling</div>
    <div class="cmd">Source Input: App.tsx (TypeScript + JSX)</div>
    <div class="output">
  ↓ [Transpiler: TypeScript -> Standard JS]
  ↓ [Bundler: Combine 45 module files]
  ↓ [Minifier: Remove whitespace & shorten variable names]
    </div>
    <br/>
    <div class="success">✅ Output Bundle Generated: dist/assets/index-a8b2c.js (24.5 kB)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Why Production Apps Need Bundling',
        km: 'ហេតុអ្វីបានជា Production Apps ចាំបាច់ត្រូវមាន Bundling'
      },
      description: {
        en: 'Without a bundler, a modern React app might require fetching 200+ individual JavaScript files over HTTP, leading to huge latency. Bundling packs them efficiently into 1 or 2 cached chunks.',
        km: 'ប្រសិនបើគ្មាន Bundler ទេ React App ទំនើបអាចនឹងត្រូវទាញយក JS files ជាង ២០០ ផ្សេងៗគ្នាតាម HTTP ដែលធ្វើឱ្យ Web យឺតខ្លាំង។ Bundler ជួយចងបាច់កូដទាំងអស់ឱ្យនៅសល់ត្រឹម 1-2 chunks ដែលអាច Load បានលឿនបំផុត។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What is the primary difference between Transpiling and Bundling?',
        km: 'តើអ្វីជាភាពខុសគ្នាសំខាន់រវាង Transpiling និង Bundling?'
      },
      solution: 'Transpiling converts syntax/language (e.g. TS to JS), while Bundling combines multiple module files into optimized output bundles.'
    },
    quizQuestions: [
      {
        id: 'q-vite-1-1-1',
        question: {
          en: 'What does a JavaScript Transpiler (like Babel or esbuild) do?',
          km: 'តើ JavaScript Transpiler (ដូចជា Babel ឬ esbuild) ធ្វើអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'Converts modern JS/TS/JSX into browser-compatible JavaScript', km: 'បំលែងកូដ JS/TS/JSX ទំនើបឱ្យទៅជា JavaScript ដែលរត់បានលើគ្រប់ Browser' }, isCorrect: true },
          { id: '2', text: { en: 'Downloads open-source packages from npm', km: 'ទាញយក Packages ពី npm' }, isCorrect: false },
          { id: '3', text: { en: 'Creates database tables on a SQL server', km: 'បង្កើត តារាងទិន្នន័យលើ SQL Server' }, isCorrect: false }
        ],
        explanation: {
          en: 'Transpilation takes modern/extended syntax (TS/JSX) and transforms it into plain JavaScript compatible with target browsers.',
          km: 'Transpilation យក syntax ទំនើប (TS/JSX) មកបំលែងជា JavaScript សាមញ្ញ។'
        }
      }
    ]
  },
  {
    id: 'vite-l2',
    slug: 'dev-server-prod-build',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: {
      en: '1.2 The Two Core Jobs: Dev Server vs. Production Build',
      km: '1.2 ភារកិច្ចចម្បងទាំងពីរ៖ Dev Server និង Production Build'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A modern build tool has two separate operational modes: 1) Dev Server (runs locally during development with Hot Module Replacement for fast feedback), and 2) Production Build (compiles minified, hashed static files into `dist/` ready for web deployment).',
      km: 'Build Tool ទំនើបមានភារកិច្ចចម្បង ២ ផ្សេងគ្នា៖ 1) Dev Server (រត់លើកុំព្យូទ័រ local ពេលសរសេរកូដ ដោយមាន HMR ជួយអាប់ដេតកូដភ្លាមៗ) និង 2) Production Build (បំលែងកូដចុងក្រោយឱ្យតូច និងមាន security hash រួចដាក់ក្នុង folder `dist/` សម្រាប់ deploy)។'
    },
    tutorial: {
      en: '- Dev Server Mode: `npm run dev` -> Launches local HTTP server (e.g. http://localhost:5173), watches file changes, updates browser without full reload.\n- Production Build Mode: `npm run build` -> Compiles code, runs tree-shaking (removes unused code), outputs static HTML/JS/CSS inside `dist/`.',
      km: '- Dev Server Mode: `npm run dev` -> បើក HTTP server local (ឧទាហរណ៍ http://localhost:5173), តាមដានការកូដ និង Refresh ភ្លាមៗ។\n- Production Build Mode: `npm run build` -> ប្រមូលផ្តុំកូដ, លុបកូដដែលមិនប្រើ (Tree-shaking), បង្កើត static files ក្នុង `dist/`។'
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
    .cmd { color: #38bdf8; }
    .green { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">🔄 Dev Server vs Production Output</div>
    <div class="cmd">$ npm run dev</div>
    <div>VITE v5.2.0  ready in 185 ms</div>
    <div class="green">➜ Local:   http://localhost:5173/</div>
    <br/>
    <div class="cmd">$ npm run build</div>
    <div>vite build --outDir dist</div>
    <div class="green">dist/index.html                  0.45 kB</div>
    <div class="green">dist/assets/index-b4f7a1.js    142.10 kB │ gzip: 45.20 kB</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Never run dev servers on production environments!',
        km: 'ហាមរត់ Dev Server លើ Production Server!'
      },
      description: {
        en: 'Dev servers include unminified source maps and HMR web sockets meant for local coding. Production builds generate pre-compiled static files served by Nginx or Cloud hosting.',
        km: 'Dev Server មាន Source Maps និង WebSocket សម្រាប់តែពេលសរសេរកូដប៉ុណ្ណោះ។ ពេល Deploy ត្រូវរត់ `npm run build` ដើម្បីទទួលបាន static files សុទ្ធ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which command creates the static files folder ready for hosting deployment?',
        km: 'តើ Command មួយណាដែលបង្កើត folder ផ្ទុក static files សម្រាប់យកទៅ Deploy?'
      },
      solution: 'npm run build (which executes vite build or webpack --mode production)'
    },
    quizQuestions: [
      {
        id: 'q-vite-1-2-1',
        question: {
          en: 'What is the primary role of the Dev Server during development?',
          km: 'តើ Dev Server មានតួនាទីសំខាន់អ្វីខ្លះពេលសរសេរកូដ?'
        },
        options: [
          { id: '1', text: { en: 'Serves files locally with fast live updates (HMR) while coding', km: 'ផ្តល់ Server local ដើម្បីមើលការកែប្រែកូដភ្លាមៗតាម HMR' }, isCorrect: true },
          { id: '2', text: { en: 'Deletes old source code files automatically', km: 'លុប source code ចាស់ៗចោល' }, isCorrect: false },
          { id: '3', text: { en: 'Uploads code directly to Git repositories', km: 'Upload កូដទៅ Git រ៉េប៉ូ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Dev servers host the web app locally and instantly apply code updates without requiring a full manual manual build.',
          km: 'Dev Server បើក local server និងអាប់ដេតកូដភ្លាមៗពេល save file។'
        }
      }
    ]
  },
  {
    id: 'vite-l3',
    slug: 'vite-webpack-npm-relationship',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: {
      en: '1.3 Where Vite & Webpack Fit vs. npm',
      km: '1.3 ទំនាក់ទំនងរវាង Vite, Webpack និង npm'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'npm is the Package Manager (installs libraries & executes script commands), whereas Vite and Webpack are the Build Tools/Bundlers installed AS npm devDependencies. When you run `npm run dev`, npm executes the `vite` or `webpack` CLI binary declared in `package.json`.',
      km: 'npm គឺជា Package Manager (អ្នកដំឡើង libraries និងរត់ command scripts) ចំណែក Vite និង Webpack គឺជា Build Tools ដែលត្រូវដំឡើងជា `devDependencies` តាមរយៈ npm។ នៅពេលអ្នកវាយ `npm run dev` npm នឹងទៅហៅ tool Vite ឬ Webpack ឱ្យដំណើរការ។'
    },
    tutorial: {
      en: '- npm role: Downloads `vite` or `webpack` into `node_modules/`, manages `package.json` scripts.\n- Bundler role (Vite/Webpack): Reads entry point files (e.g. `src/main.tsx`), compiles TS/CSS, launches dev server or builds output bundles.\n- Workflow: `package.json` -> `"scripts": { "dev": "vite", "build": "vite build" }`.',
      km: '- តួនាទី npm: ទាញយក `vite` ឬ `webpack` ដាក់ក្នុង `node_modules/` និងកត់ត្រាក្នុង `package.json`។\n- តួនាទី Bundler: អាន File ដើម (`src/main.tsx`), បំលែង TS/CSS, បើក Dev Server ឬ Build ឯកសារចុងក្រោយ។\n- របៀបតភ្ជាប់: តាមរយៈ `"scripts"` ក្នុង `package.json`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .title { color: #bd34fe; font-weight: bold; margin-bottom: 8px; }
    .json { color: #38bdf8; }
    .cmd { color: #facc15; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">🔗 Relationship Diagram: npm + vite/webpack</div>
    <div class="json">
// package.json
{
  "scripts": {
    "dev": "vite",        <-- npm invokes Vite binary!
    "build": "vite build"  <-- npm invokes Vite build mode!
  },
  "devDependencies": {
    "vite": "^5.2.0"       <-- Bundler installed via npm!
  }
}
    </div>
    <div class="cmd">$ npm run dev  ==> executes ./node_modules/.bin/vite</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'npm and Vite Working Together',
        km: 'ការធ្វើការរួមគ្នា រវាង npm និង Vite'
      },
      description: {
        en: 'When you install React via npm (`npm i react`), Vite detects it, processes the React JSX syntax, and bundles React into your browser bundle.',
        km: 'នៅពេលអ្នកដំឡើង React តាម npm Vite នឹងដឹងភ្លាម ហើយជួយបំលែង JSX syntax និងចងបាច់ React ចូលក្នុង Web App។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Is Vite/Webpack installed as a production dependency or a devDependency?',
        km: 'តើ Vite/Webpack ត្រូវដំឡើងជា dependency ឬ devDependency?'
      },
      solution: 'devDependency (-D or --save-dev) because build tools are only needed during development and build time, not in browser runtime.'
    },
    quizQuestions: [
      {
        id: 'q-vite-1-3-1',
        question: {
          en: 'What happens under the hood when you run `npm run dev` in a Vite project?',
          km: 'តើមានអ្វីកើតឡើងនៅខាងក្រោយឆាកពេលអ្នកវាយ `npm run dev` ក្នុង Vite project?'
        },
        options: [
          { id: '1', text: { en: 'npm executes the `vite` executable file stored inside `node_modules/.bin/`', km: 'npm រត់ឯកសារ `vite` ដែលមានស្រាប់ក្នុង `node_modules/.bin/`' }, isCorrect: true },
          { id: '2', text: { en: 'npm downloads Git software from internet', km: 'npm ទាញយក Git software' }, isCorrect: false },
          { id: '3', text: { en: 'npm deletes the package.json file', km: 'npm លុប package.json' }, isCorrect: false }
        ],
        explanation: {
          en: 'npm script runners lookup binaries inside `node_modules/.bin/` and launch the installed Vite dev server CLI.',
          km: 'npm script រត់ CLI binary របស់ Vite មកបើក Dev Server។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 2: Getting Started with Vite
  // ==========================================
  {
    id: 'vite-l4',
    slug: 'scaffolding-create-vite',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: {
      en: '2.1 Scaffolding a Vite Project (`npm create vite@latest`)',
      km: '2.1 ការបង្កើត Vite Project ថ្មីដោយប្រើ `npm create vite@latest`'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Vite provides a fast scaffolding CLI initializer (`create-vite`). Running `npm create vite@latest` lets you pick project names and framework templates (Vanilla, React, Vue, Svelte, Preact) in seconds with pre-configured build scripts.',
      km: 'Vite ផ្តល់នូវ Tool សម្រាប់បង្កើត Project រហ័ស (`create-vite`)។ ការវាយ `npm create vite@latest` អនុញ្ញាតឱ្យអ្នកជ្រើសរើសឈ្មោះ Project និង Framework Templates (React, Vue, Vanilla, Svelte) យ៉ាងរហ័ស ជាមួយ Config ដែលរៀបចំរួចស្រេច។'
    },
    tutorial: {
      en: 'Command Sequence:\n1. `npm create vite@latest my-app -- --template react-ts`\n2. `cd my-app`\n3. `npm install` (Installs dependencies listed in package.json)\n4. `npm run dev` (Starts dev server)',
      km: 'ជំហានអនុវត្ត៖\n1. `npm create vite@latest my-app -- --template react-ts`\n2. `cd my-app`\n3. `npm install` (ដំឡើង dependencies ក្នុង package.json)\n4. `npm run dev` (បើករត់ dev server)'
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
    .prompt { color: #bd34fe; font-weight: bold; }
    .tree { color: #38bdf8; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ npm create vite@latest my-vite-app</div>
    <div class="prompt">? Select a framework: › React</div>
    <div class="prompt">? Select a variant: › TypeScript</div>
    <br/>
    <div class="tree">
📂 my-vite-app/
├── 📂 node_modules/
├── 📂 public/
│   └── vite.svg
├── 📂 src/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'The Index.html at Project Root',
        km: 'វត្តមាន index.html ក្នុង Root Folder'
      },
      description: {
        en: 'Unlike Webpack where index.html is often buried in public/ or src/, Vite considers index.html as the primary entry point of your application root directory.',
        km: 'ខុសពី Webpack ដែលលាក់ index.html ក្នុង src/ Vite កំណត់យក index.html ក្នុង Root Folder ជាច្រកចូលចម្បងតែម្តង។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What command scaffolds a new Vite React project non-interactively?',
        km: 'តើ Command មួយណាសម្រាប់បង្កើត Vite React project ភ្លាមៗដោយមិនបាច់ឆ្លងកាត់ការសួរដេញដោល?'
      },
      solution: 'npm create vite@latest my-app -- --template react-ts'
    },
    quizQuestions: [
      {
        id: 'q-vite-2-1-1',
        question: {
          en: 'Where does Vite expect `index.html` to be located in a project?',
          km: 'តើ Vite តម្រូវឱ្យដាក់ `index.html` នៅទីតាំងណា?'
        },
        options: [
          { id: '1', text: { en: 'Directly in the project root directory', km: 'នៅចំ Root Folder នៃ Project ដោយផ្ទាល់' }, isCorrect: true },
          { id: '2', text: { en: 'Deeply nested inside node_modules/', km: 'ក្នុង node_modules/' }, isCorrect: false },
          { id: '3', text: { en: 'Inside a hidden .git folder', km: 'ក្នុង folder .git' }, isCorrect: false }
        ],
        explanation: {
          en: 'Vite treats `index.html` as the source code entry point located at the project root directory.',
          km: 'Vite ចាត់ទុក `index.html` នៅ Root Folder ជាច្រកចូលដើមនៃកម្មវិធី។'
        }
      }
    ]
  },
  {
    id: 'vite-l5',
    slug: 'dev-server-npm-run-dev',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: {
      en: '2.2 Running the Vite Dev Server (`npm run dev`)',
      km: '2.2 ការបើកដំណើរការ Vite Dev Server (`npm run dev`)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Executing `npm run dev` boots Vite native ES-module dev server. Because Vite does not bundle code before starting, startup times are near-instantaneous (often under 200ms) regardless of project size.',
      km: 'ការរត់ `npm run dev` នឹងបើក Dev Server របស់ Vite ភ្លាមៗ។ ដើរដោយសារ Vite មិនបាច់ប្រមូលផ្តុំ bundling កូដទាំងអស់មុនបើក server ឡើយ ដូច្នេះវាបើកដំណើរការលឿនបំផុត (ក្រោម 200ms) ទោះជា Project មានទំហំធំយ៉ាងណាក៏ដោយ។'
    },
    tutorial: {
      en: 'Terminal Startup Logs:\n- VITE v5.2.0 ready in 174 ms\n- Local network address (e.g. http://localhost:5173/)\n- Interactive keyboard shortcuts (press `h` for help, `r` to restart server, `u` to show server url, `o` to open browser).',
      km: 'Terminal Startup Logs៖\n- VITE v5.2.0 ready in 174 ms\n- អាសយដ្ឋាន Local (ឧទាហរណ៍ http://localhost:5173/)\n- ប៊ូតុងចុចបញ្ជា (ចុច `h` មើលជំនួយ, `r` បើក server ឡើងវិញ, `o` បើកក្នុង browser)។'
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
    .ready { color: #bd34fe; font-weight: bold; }
    .url { color: #4ade80; }
    .keys { color: #94a3b8; margin-top: 10px; font-size: 13px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ npm run dev</div>
    <br/>
    <div class="ready">  VITE v5.2.0  ready in 142 ms</div>
    <br/>
    <div class="url">  ➜  Local:   http://localhost:5173/</div>
    <div class="url">  ➜  Network: use --host to expose</div>
    <div class="url">  ➜  press h + enter to show help</div>
    <div class="keys">
  shortcuts:
  r + enter: restart server
  u + enter: show server url
  o + enter: open in browser
  c + enter: clear console
  q + enter: quit
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Default Vite Port 5173',
        km: 'Port លំនាំដើមរបស់ Vite គឺ 5173'
      },
      description: {
        en: 'While Create-React-App used port 3000 by default, Vite uses port 5173 (which spells VITE on telephone keypads!). You can easily change this inside `vite.config.ts`.',
        km: 'Vite ប្រើ Port 5173 ជា default (តំណាងឱ្យពាក្យ VITE លើប៊ូតុងទូរស័ព្ទ!)។ អ្នកអាចប្តូរ port នេះបានក្នុង file `vite.config.ts`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What key shortcut inside Vite terminal restarts the server without exiting?',
        km: 'តើ Key shortcut មួយណា ក្នុង Vite terminal សម្រាប់ Restart dev server ឡើងវិញ?'
      },
      solution: 'Press `r` and hit Enter.'
    },
    quizQuestions: [
      {
        id: 'q-vite-2-2-1',
        question: {
          en: 'Why does Vite boot its dev server almost instantly compared to Webpack?',
          km: 'ហេតុអ្វីបានជា Vite បើក Dev Server លឿនខ្លាំងខុសពី Webpack?'
        },
        options: [
          { id: '1', text: { en: 'It serves native ES modules directly to the browser without pre-bundling', km: 'វាផ្ញើ Native ES Modules ទៅ Browser ដោយមិនបាច់ធ្វើ Pre-bundling' }, isCorrect: true },
          { id: '2', text: { en: 'It converts JS files into JPEG images', km: 'វាបំលែង JS ទៅជារូបភាព' }, isCorrect: false },
          { id: '3', text: { en: 'It disables JavaScript execution', km: 'វាបិទការរត់កូដ JavaScript' }, isCorrect: false }
        ],
        explanation: {
          en: 'Vite relies on modern browser support for ESM `<script type="module">`, compiling code on demand per request.',
          km: 'Vite ពឹងផ្អែកលើ ESM របស់ Browser ទំនើប ហើយ Compile តែឯកសារណាដែលទាមទារ។'
        }
      }
    ]
  },
  {
    id: 'vite-l6',
    slug: 'vite-config-js-basics',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: {
      en: '2.3 `vite.config.js` Basics (`plugins`, `server.port`, `build.outDir`)',
      km: '2.3 កម្រិតមូលដ្ឋាននៃ `vite.config.js` (`plugins`, `server.port`, `build.outDir`)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The `vite.config.ts` (or `.js`) file in your project root customizes how Vite builds and serves your app. Common settings include adding framework plugins (React/Vue), changing the dev server port, setting up path aliases, and specifying output directories.',
      km: 'ឯកសារ `vite.config.ts` នៅ Root Folder កំណត់ពីរបៀបដែល Vite ដំណើរការ App។ ការកំណត់ទូទៅមានដូចជា ៖ ការដាក់ Plugins (React/Vue), ការប្តូរ Dev Server Port, ការកំណត់ Path Aliases (`@/`), និងការកំណត់ Folder សម្រាប់ Build Output។'
    },
    tutorial: {
      en: 'Basic Vite Config Structure:\n```ts\nimport { defineConfig } from "vite";\nimport react from "@vitejs/plugin-react";\n\nexport default defineConfig({\n  plugins: [react()],\n  server: {\n    port: 3000,\n    open: true\n  },\n  build: {\n    outDir: "dist"\n  }\n});\n```',
      km: 'រចនាសម្ព័ន្ធ Vite Config មូលដ្ឋាន៖\n```ts\nimport { defineConfig } from "vite";\nimport react from "@vitejs/plugin-react";\n\nexport default defineConfig({\n  plugins: [react()],\n  server: {\n    port: 3000,\n    open: true\n  },\n  build: {\n    outDir: "dist"\n  }\n});\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .title { color: #bd34fe; font-weight: bold; margin-bottom: 8px; }
    .code { color: #38bdf8; }
    .keyword { color: #f43f5e; }
    .string { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">📄 vite.config.ts Example</div>
    <div class="code">
<span class="keyword">import</span> { defineConfig } <span class="keyword">from</span> <span class="string">'vite'</span>;
<span class="keyword">import</span> react <span class="keyword">from</span> <span class="string">'@vitejs/plugin-react'</span>;

<span class="keyword">export default</span> defineConfig({
  plugins: [react()],
  server: {
    port: <span class="string">3000</span>, <span class="keyword">// Change default 5173 to 3000</span>
    open: <span class="keyword">true</span>   <span class="keyword">// Auto-open browser on launch</span>
  },
  build: {
    outDir: <span class="string">'build'</span> <span class="keyword">// Custom output directory</span>
  }
});
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'defineConfig Helper Function',
        km: 'មុខងារជំនួយ defineConfig'
      },
      description: {
        en: 'Using `defineConfig` provides IntelliSense auto-completion in VS Code without needing complex TypeScript annotations.',
        km: 'ការប្រើប្រាស់ `defineConfig` ជួយឱ្យ VS Code ផ្តល់ Auto-completion (IntelliSense) យ៉ាងរលូន។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Inside `vite.config.js`, which configuration key changes the local server port number?',
        km: 'ក្នុង `vite.config.js` តើ Key មួយណាសម្រាប់កែប្រែលេខ Port របស់ Local Dev Server?'
      },
      solution: 'server.port (e.g. server: { port: 3000 })'
    },
    quizQuestions: [
      {
        id: 'q-vite-2-3-1',
        question: {
          en: 'What is the purpose of the `plugins` array in `vite.config.js`?',
          km: 'តើ array `plugins` ក្នុង `vite.config.js` មានប្រយោជន៍អ្វី?'
        },
        options: [
          { id: '1', text: { en: 'Integrates framework support (like React Fast Refresh or Vue SFC compiler)', km: 'ភ្ជាប់ការគាំទ្រដល់ Frameworks (ដូចជា React Fast Refresh ឬ Vue Compiler)' }, isCorrect: true },
          { id: '2', text: { en: 'Configures database passwords', km: 'កំណត់ លេខសម្ងាត់ Database' }, isCorrect: false },
          { id: '3', text: { en: 'Installs operating system updates', km: 'ដំឡើង System update' }, isCorrect: false }
        ],
        explanation: {
          en: 'Plugins extend Vite to handle specific file types, framework transforms, or asset optimizations.',
          km: 'Plugins បន្ថែមសមត្ថភាពដល់ Vite ក្នុងការបំលែងកូដ React/Vue ផ្សេងៗ។'
        }
      }
    ]
  },
  {
    id: 'vite-l7',
    slug: 'building-production-dist',
    moduleNumber: 2,
    lessonNumberInModule: 4,
    title: {
      en: '2.4 Building for Production (`npm run build`) & Inspecting `dist/`',
      km: '2.4 ការ Build សម្រាប់ Production (`npm run build`) និងការពិនិត្យ Folder `dist/`'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'When ready for production deployment, running `npm run build` triggers Rollup (Vite pre-configured bundler engine). It transpiles TypeScript/JSX, minifies HTML/CSS/JS, hashes file names for cache invalidation, and outputs production assets into the `dist/` folder.',
      km: 'ពេលត្រៀម Deploy ទៅកាន់ Production ការរត់ `npm run build` នឹងហៅ Rollup Engine ដែលមានស្រាប់ក្នុង Vite។ វាបំលែង TS/JSX, បង្រួមទំហំ (Minify) HTML/CSS/JS, ដាក់ Hash លើឈ្មោះ file ដើម្បីការពារ Cache និងបញ្ចេញ static files ទាំងអស់ទៅក្នុង folder `dist/`។'
    },
    tutorial: {
      en: '- Production command: `npm run build`\n- Preview production build locally: `npm run preview` (launches static server serving the generated `dist/` folder to test before deploying!)\n- Structure of `dist/`:\n  `dist/index.html`\n  `dist/assets/index-[hash].js`\n  `dist/assets/index-[hash].css`',
      km: '- Command សម្រាប់ Build: `npm run build`\n- ពិនិត្យលទ្ធផល Build លើ local: `npm run preview` (បើក static server រត់ test លើ folder `dist/` មុនពេល deploy ផ្លូវការ!)\n- រចនាសម្ព័ន្ធ folder `dist/`៖\n  `dist/index.html`\n  `dist/assets/index-[hash].js`\n  `dist/assets/index-[hash].css`'
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
    .log { color: #94a3b8; margin-top: 6px; }
    .file { color: #4ade80; }
    .size { color: #38bdf8; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ npm run build</div>
    <div class="log">
> vite build

vite v5.2.0 building for production...
transforming (34) modules...
    </div>
    <br/>
    <div class="file">dist/index.html                  <span class="size">0.46 kB │ gzip: 0.30 kB</span></div>
    <div class="file">dist/assets/index-D7a9bf1c.css   <span class="size">1.24 kB │ gzip: 0.65 kB</span></div>
    <div class="file">dist/assets/index-C8a12e8b.js   <span class="size">143.82 kB │ gzip: 46.12 kB</span></div>
    <br/>
    <div class="cmd">✓ built in 1.45s</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Testing Build Locally with `npm run preview`',
        km: 'ការធ្វើតេស្ត Build លើ Local ដោយប្រើ `npm run preview` '
      },
      description: {
        en: 'Always run `npm run preview` after a production build to verify that your bundle loads smoothly without runtime asset path bugs before uploading to Vercel/Netlify/Cloud Run.',
        km: 'ត្រូវរត់ `npm run preview` ជានិច្ច ក្រោយពេល build ដើម្បីតេស្តថា static bundle រត់គ្មាន bug មុនពេល upload ទៅកាន់ Hosting។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What command lets you test and preview the production build files locally?',
        km: 'តើ Command មួយណាសម្រាប់ Preview មើល production build static files លើ Local?'
      },
      solution: 'npm run preview (or vite preview)'
    },
    quizQuestions: [
      {
        id: 'q-vite-2-4-1',
        question: {
          en: 'What bundler engine does Vite use under the hood for production builds?',
          km: 'តើ Vite ប្រើប្រាស់ Bundler Engine មួយណា សម្រាប់ការ Build នៅលើ Production?'
        },
        options: [
          { id: '1', text: { en: 'Rollup', km: 'Rollup' }, isCorrect: true },
          { id: '2', text: { en: 'jQuery', km: 'jQuery' }, isCorrect: false },
          { id: '3', text: { en: 'Gulp 3', km: 'Gulp 3' }, isCorrect: false }
        ],
        explanation: {
          en: 'Vite uses esbuild for fast dev transpilation and Rollup for generating flexible production bundles.',
          km: 'Vite ប្រើប្រាស់ Rollup ក្នុងការចងបាច់កូដ និងរៀបចំ static build សម្រាប់ production។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 3: Getting Started with Webpack
  // ==========================================
  {
    id: 'vite-l8',
    slug: 'webpack-installation-setup',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: {
      en: '3.1 Installing Webpack in Existing Projects (`webpack`, `webpack-cli`)',
      km: '3.1 ការដំឡើង Webpack ក្នុង Project (`webpack`, `webpack-cli`)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Unlike Vite which provides instant project starters (`create-vite`), Webpack is typically added to existing node projects manually. You install `webpack` (the core bundler logic) and `webpack-cli` (the command-line interface) as development dependencies.',
      km: 'ខុសពី Vite ដែលមានប្រព័ន្ធទាញរៀបចំស្រាប់ (`create-vite`) Webpack ជាទូទៅត្រូវដំឡើងដោយដៃចូលក្នុង Node project ដែលមានស្រាប់។ អ្នកត្រូវដំឡើង `webpack` (core bundler) និង `webpack-cli` (command-line tool) ជា development dependencies (`-D`)។'
    },
    tutorial: {
      en: 'Manual Setup Steps:\n1. `npm init -y` (Initialize package.json)\n2. `npm install -D webpack webpack-cli`\n3. Create source directory: `mkdir src` & `touch src/index.js`\n4. Run Webpack: `npx webpack`',
      km: 'ជំហានរៀបចំដោយដៃ៖\n1. `npm init -y` (បង្កើត package.json)\n2. `npm install -D webpack webpack-cli`\n3. បង្កើត folder កូដ៖ `mkdir src` និង `touch src/index.js`\n4. ដំណើរការ Webpack: `npx webpack`'
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
    .log { color: #94a3b8; margin-top: 6px; }
    .ok { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ npm install -D webpack webpack-cli</div>
    <div class="log">
added 118 packages, and audited 119 packages in 3s

devDependencies:
+ webpack ^5.91.0
+ webpack-cli ^5.1.4
    </div>
    <br/>
    <div class="cmd">$ npx webpack</div>
    <div class="ok">asset main.js 960 bytes [emitted] [minified] (name: main)</div>
    <div class="log">webpack 5.91.0 compiled successfully in 280 ms</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Why Webpack Needs `webpack-cli`',
        km: 'ហេតុអ្វី Webpack ចាំបាច់ត្រូវមាន `webpack-cli` '
      },
      description: {
        en: '`webpack` contains the core compiler API, while `webpack-cli` provides the terminal command line tool (like `npx webpack` or `webpack serve`) to interact with the compiler.',
        km: '`webpack` ផ្ទុកកូដ compiler ដើម រីឯ `webpack-cli` ផ្តល់នូវ Command Terminal (ដូចជា `npx webpack`) សម្រាប់រត់បញ្ជា។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What two packages are required to run Webpack commands from the terminal?',
        km: 'តើ Packages ២ ណាខ្លះដែលចាំបាច់ដើម្បីរត់ Webpack command ចេញពី Terminal?'
      },
      solution: 'webpack and webpack-cli'
    },
    quizQuestions: [
      {
        id: 'q-vite-3-1-1',
        question: {
          en: 'Why is `webpack-cli` installed alongside `webpack`?',
          km: 'ហេតុអ្វីបានជាត្រូវដំឡើង `webpack-cli` អមជាមួយ `webpack`?'
        },
        options: [
          { id: '1', text: { en: 'It allows executing Webpack commands directly from the command line interface', km: 'វាអនុញ្ញាតឱ្យរត់ Webpack command ពីផ្ទាំង Command Line បាន' }, isCorrect: true },
          { id: '2', text: { en: 'It connects to internet radio', km: 'វាភ្ជាប់ទៅ វិទ្យុ Internet' }, isCorrect: false },
          { id: '3', text: { en: 'It installs Google Chrome', km: 'វាដំឡើង Chrome' }, isCorrect: false }
        ],
        explanation: {
          en: '`webpack-cli` parses CLI flags and invokes the Webpack compiler engine from terminal commands.',
          km: '`webpack-cli` អាន CLI commands ដើម្បទៅបញ្ជា Webpack compiler engine។'
        }
      }
    ]
  },
  {
    id: 'vite-l9',
    slug: 'webpack-config-entry-output',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: {
      en: '3.2 `webpack.config.js` Basics (`entry`, `output`)',
      km: '3.2 កម្រិតមូលដ្ឋាននៃ `webpack.config.js` (`entry`, `output`)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'While Webpack defaults to bundling `./src/index.js` into `./dist/main.js`, real-world applications use `webpack.config.js` to define explicit entry points, output bundle paths, filenames, and absolute directory targets using Node `path.resolve()`.',
      km: 'ទោះបីជា Webpack មានតម្លៃ Default ចងបាច់ពី `./src/index.js` ទៅ `./dist/main.js` ក៏ដោយ ក្នុង Project ពិតប្រាកដ យើងត្រូវសរសេរ `webpack.config.js` ដើម្បីកំណត់ Entry file, ឈ្មោះ Output Bundle file និង Path Directory ឱ្យបានច្បាស់លាស់ ដោយប្រើប្រាស់ `path.resolve()`។'
    },
    tutorial: {
      en: 'Basic `webpack.config.js`:\n```js\nconst path = require("path");\n\nmodule.exports = {\n  entry: "./src/index.js",\n  output: {\n    filename: "bundle.js",\n    path: path.resolve(__dirname, "dist"),\n    clean: true // cleans old output before each build\n  }\n};\n```',
      km: 'កូដ `webpack.config.js` មូលដ្ឋាន៖\n```js\nconst path = require("path");\n\nmodule.exports = {\n  entry: "./src/index.js",\n  output: {\n    filename: "bundle.js",\n    path: path.resolve(__dirname, "dist"),\n    clean: true // លុប file ចាស់ចោលមុន build ថ្មី\n  }\n};\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .title { color: #38bdf8; font-weight: bold; margin-bottom: 8px; }
    .code { color: #facc15; }
    .key { color: #f43f5e; }
    .str { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">📄 webpack.config.js</div>
    <div class="code">
<span class="key">const</span> path = require(<span class="str">'path'</span>);

module.exports = {
  entry: <span class="str">'./src/main.js'</span>,
  output: {
    filename: <span class="str">'app.bundle.js'</span>,
    path: path.resolve(__dirname, <span class="str">'dist'</span>),
    clean: <span class="key">true</span>
  }
};
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Why Absolute Paths with path.resolve()?',
        km: 'ហេតុអ្វី Webpack ត្រូវការ Absolute Path តាមរយៈ path.resolve()?'
      },
      description: {
        en: 'Webpack requires output.path to be an absolute path on the operating system disk (e.g., `/Users/dev/project/dist`). Node`s `path.resolve(__dirname, "dist")` guarantees cross-platform compatibility.',
        km: 'Webpack ទាមទារឱ្យ `output.path` ជា Absolute Path ពិតប្រាកដលើ OS (ឧទាហរណ៍ `/Users/dev/project/dist`)។ មុខងារ `path.resolve()` ជួយការពារ Bug លើ Windows និង Mac/Linux។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What setting inside `output` automatically deletes the old `dist/` contents before creating a new build?',
        km: 'តើការកំណត់មួយណា ក្នុង `output` ដែលជួយលុប file ចាស់ៗក្នុង `dist/` ចោលស្វ័យប្រវត្តិមុនពេល build ថ្មី?'
      },
      solution: 'clean: true'
    },
    quizQuestions: [
      {
        id: 'q-vite-3-2-1',
        question: {
          en: 'In `webpack.config.js`, what does the `entry` property specify?',
          km: 'ក្នុង `webpack.config.js` តើទ្រព្យសម្បត្តិ `entry` បញ្ជាក់អំពីអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'The starting JavaScript file where Webpack begins building its dependency graph', km: 'ឯកសារ JavaScript ដើមដំបូងដែល Webpack ផ្ដើមអានដើម្បីសង់ dependency graph' }, isCorrect: true },
          { id: '2', text: { en: 'The user login username', km: 'ឈ្មោះ Username សម្រាប់ Login' }, isCorrect: false },
          { id: '3', text: { en: 'The database server IP', km: 'IP របស់ Database server' }, isCorrect: false }
        ],
        explanation: {
          en: 'The `entry` point indicates which module Webpack should use to begin building its internal dependency tree.',
          km: '`entry` ជាច្រកចូលដើមដំបូងបង្អស់ដែល Webpack ផ្ដើមអានកូដ។'
        }
      }
    ]
  },
  {
    id: 'vite-l10',
    slug: 'webpack-modes-dev-prod',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: {
      en: '3.3 Development vs. Production Mode in Webpack',
      km: '3.3 ការប្រៀបធៀប Development Mode និង Production Mode ក្នុង Webpack'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Webpack operates under three mode options: `development`, `production`, and `none`. In `development` mode, it prioritizes fast build times and readable source maps. In `production` mode, it automatically enables Terser JS minification, scope hoisting, and tree-shaking for maximum performance.',
      km: 'Webpack មាន Mode ប្រតិបត្តិការចំនួន ៣ ៖ `development`, `production`, និង `none`។ ក្នុង `development` mode វាផ្ដោតលើល្បឿន build ពេលសរសេរកូដ និងបញ្ចេញ Source Maps ងាយស្រួល Debug។ រីឯ `production` mode វាបង្រួមទំហំកូដ (Minify) ដោយស្វ័យប្រវត្តិ និងលុបកូដមិនប្រើ (Tree-shaking) ដើម្បីឱ្យ Web App រត់លឿនបំផុត។'
    },
    tutorial: {
      en: '- CLI Flag: `npx webpack --mode development` vs `npx webpack --mode production`\n- Config file setting: `module.exports = { mode: "production" };`\n- Warning: If `mode` is omitted, Webpack outputs a warning and defaults to `production`.',
      km: '- តាមរយៈ CLI Flag: `npx webpack --mode development` ឬ `npx webpack --mode production`\n- តាមរយៈ Config file: `module.exports = { mode: "production" };`\n- ការព្រមាន៖ ប្រសិនបើមិនបានដាក់ `mode` Webpack នឹងចេញអាសន្នសញ្ញា និងយកតម្លៃ `production` ជា default។'
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
    .dev { color: #38bdf8; }
    .prod { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ npx webpack --mode development</div>
    <div class="dev">asset main.js 14.2 KiB [emitted] (name: main) (unminified, source map enabled)</div>
    <br/>
    <div class="cmd">$ npx webpack --mode production</div>
    <div class="prod">asset main.js 1.12 KiB [emitted] [minified] (name: main) (tree-shaken & compressed)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Tree-Shaking Dead Code Elimination',
        km: 'Tree-Shaking ការលុបកូដដែលមិនប្រើប្រាស់'
      },
      description: {
        en: 'In `production` mode, if you import 1 function from a library of 100 functions, Webpack drops the unused 99 functions from the final output bundle.',
        km: 'ក្នុង `production` mode ប្រសិនបើអ្នក import តែមុខងារ ១ ចេញពី library ដែលមាន 100 មុខងារ Webpack នឹងលុប 99 មុខងារដែលមិនបានប្រើចោលទាំងអស់។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What flag tells Webpack to produce a minified, tree-shaken build?',
        km: 'តើ Flag មួយណាប្រាប់ Webpack ឱ្យបង្កើត build ដែល Minified និង Tree-shaken?'
      },
      solution: '--mode production (or mode: "production" in webpack.config.js)'
    },
    quizQuestions: [
      {
        id: 'q-vite-3-3-1',
        question: {
          en: 'What optimizations are automatically performed when Webpack runs in `production` mode?',
          km: 'តើការបង្កើនប្រសិទ្ធភាព (Optimization) អ្វីខ្លះដែលកើតឡើងស្វ័យប្រវត្តិ ពេល Webpack រត់ `production` mode?'
        },
        options: [
          { id: '1', text: { en: 'Code minification, dead code elimination (tree-shaking), and variable mangling', km: 'ការបង្រួមទំហំកូដ (Minification), ការលុបកូដដែលមិនប្រើ (Tree-shaking) និងការបង្រួមឈ្មោះ Variables' }, isCorrect: true },
          { id: '2', text: { en: 'Auto-formatting JS code with Prettier', km: 'ការរៀបចំប្លង់កូដ' }, isCorrect: false },
          { id: '3', text: { en: 'Uploading code to cloud storage', km: 'Upload កូដទៅ Cloud' }, isCorrect: false }
        ],
        explanation: {
          en: 'Production mode triggers minification (Terser), dead code removal, and performance optimizations out of the box.',
          km: 'Production mode ផ្ដើមធ្វើ minification និង tree-shaking ដោយស្វ័យប្រវត្តិ។'
        }
      }
    ]
  },
  {
    id: 'vite-l11',
    slug: 'webpack-build-script-summary',
    moduleNumber: 3,
    lessonNumberInModule: 4,
    title: {
      en: '3.4 Webpack Build Scripts & Reading Build Summaries',
      km: '3.4 ការបង្កើត Webpack Build Script និងការអាន Summary Output'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'To avoid typing long `npx webpack` CLI commands repeatedly, developers configure NPM shortcut scripts inside `package.json`. Understanding Webpack CLI output logs helps identify bundle sizes, asset names, compilation warnings, and build execution durations.',
      km: 'ដើម្បីកុំឱ្យពិបាកវាយ command វែងៗ `npx webpack` ជាញឹកញាប់ អ្នកអភិវឌ្ឍន៍តែងកំណត់ Script ក្នុង `package.json`។ ការយល់ដឹងពី Webpack Summary Output ជួយឱ្យយើងដឹងពីទំហំ Bundle, ឈ្មោះ Assets, ការព្រមាន និងរយះពេល Compile។'
    },
    tutorial: {
      en: 'Configuring scripts in `package.json`:\n```json\n{\n  "scripts": {\n    "build": "webpack --mode production",\n    "dev": "webpack --mode development --watch"\n  }\n}\n```\nRun command: `npm run build`.',
      km: 'ការកំណត់ scripts ក្នុង `package.json`៖\n```json\n{\n  "scripts": {\n    "build": "webpack --mode production",\n    "dev": "webpack --mode development --watch"\n  }\n}\n```\nរត់ command: `npm run build`។'
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
    .summary { color: #38bdf8; margin-top: 6px; }
    .ok { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ npm run build</div>
    <div class="summary">
Hash: 8f9b2c3d1e
Version: webpack 5.91.0
Time: 412ms
Built at: 2026-07-30 10:15:22

       Asset      Size  Chunks             Chunk Names
app.bundle.js  18.4 KiB       0  [emitted]  main
    </div>
    <br/>
    <div class="ok">webpack 5.91.0 compiled successfully in 412 ms</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'The `--watch` Flag for Webpack',
        km: 'ការប្រើប្រាស់ Flag `--watch` ក្នុង Webpack'
      },
      description: {
        en: 'Adding `--watch` flag to `webpack --mode development` forces Webpack to stay alive in terminal, watching source files and re-compiling automatically on save.',
        km: 'ការបន្ថែម `--watch` ធ្វើឱ្យ Webpack តាមដានរាល់ការ Save File របស់អ្នក ហើយ re-compile ដោយស្វ័យប្រវត្តិ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What NPM script entry point is standard for running production Webpack build?',
        km: 'តើ NPM script មួយណាជាស្តង់ដារសម្រាប់រត់ Webpack Production build?'
      },
      solution: '"build": "webpack --mode production"'
    },
    quizQuestions: [
      {
        id: 'q-vite-3-4-1',
        question: {
          en: 'What information is displayed in the Webpack build summary CLI output?',
          km: 'តើព័ត៌មានអ្វីខ្លះដែលបង្ហាញលើ Webpack build summary CLI output?'
        },
        options: [
          { id: '1', text: { en: 'Output asset file names, bundle sizes, build hash, and compilation time', km: 'ឈ្មោះ Output Assets, ទំហំ Bundle, Build Hash និងរយៈពេល Compile' }, isCorrect: true },
          { id: '2', text: { en: 'Your credit card balance', km: 'សមតុល្យ កាតធនាគារ' }, isCorrect: false },
          { id: '3', text: { en: 'Weather updates', km: 'ព័ត៌មានអាកាសធាតុ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Webpack outputs detailed metric stats including asset file names, sizes, chunk IDs, and build warnings.',
          km: 'Webpack បង្ហាញពីទំហំ file ឈ្មោះ asset និងរយៈពេល build។'
        }
      }
    ]
  }
];
