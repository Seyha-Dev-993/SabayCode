import { FrontendLesson } from '../types/frontendClass';

export const NPM_LESSONS_PART1: FrontendLesson[] = [
  // ==========================================
  // MODULE 1: What is npm & package.json
  // ==========================================
  {
    id: 'npm-l1',
    slug: 'what-is-npm-package-manager',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: {
      en: '1.1 What is a Package Manager & The Problem It Solves',
      km: '1.1 អ្វីទៅជា Package Manager និងការដោះស្រាយបញ្ហា'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'A Package Manager is a software tool that automates installing, updating, configuring, and removing code libraries (packages) written by other developers. Instead of manually downloading ZIP files or script tags, npm allows developers to share and import millions of reusable open-source modules with a single command.',
      km: 'Package Manager គឺជាកម្មវិធីសម្រួលដល់ការដំឡើង, Update, គ្រប់គ្រង, និងលុប Code Libraries (Packages) ដែលអ្នកផ្សេងបានសរសេររួច។ ជំនួសឱ្យការទាញយក ZIP file ឬ copy link ដោយដៃ npm អនុញ្ញាតឱ្យអ្នកទាញយក និងចែករំលែក Open-Source Code រាប់លាន modules ដោយគ្រាន់តែប្រើ command មួយប៉ុណ្ណោះ។'
    },
    tutorial: {
      en: '- Old Way (Without Package Manager):\n  Download `jquery.min.js` or `bootstrap.zip`, paste into `/lib` folder, manually track versions in a text note.\n- Modern npm Way:\n  Run `npm install axios` -> npm downloads exact library version, updates `package.json`, and handles sub-dependencies automatically!',
      km: '- របៀបចាស់ (គ្មាន Package Manager)៖\n  ទាញយក file ZIP ដូចជា `bootstrap.zip`, យកមក copy ដាក់ក្នុង folder project, ហើយអង្គុយចំណាំ version ដោយដៃ។\n- របៀបប្រើ npm ទំនើប៖\n  វាយ `npm install axios` -> npm នឹងដំឡើង library, ចុះឈ្មោះក្នុង `package.json`, និងគ្រប់គ្រង sub-dependencies ដោយស្វ័យប្រវត្តិ!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5); }
    .title { color: #f43f5e; font-weight: bold; border-bottom: 1px solid #1e293b; padding-bottom: 8px; margin-bottom: 12px; }
    .cmd { color: #facc15; }
    .output { color: #94a3b8; margin-top: 6px; }
    .highlight { color: #38bdf8; }
    .success { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">📦 Terminal — Understanding npm Ecosystem</div>
    <div class="cmd">$ npm search date-fns</div>
    <div class="output">
NAME       | DESCRIPTION                          | AUTHOR          | DATE
date-fns   | Modern JavaScript date utility library| kyle-mathews    | 2026-05-12
    </div>
    <br/>
    <div class="cmd">$ npm install date-fns</div>
    <div class="output">
<span class="success">added 1 package, and audited 2 packages in 842ms</span>
<span class="highlight">found 0 vulnerabilities</span>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'npm Registry Scale in Production',
        km: 'ទំហំនៃ npm Registry ក្នុងពិភពពិត'
      },
      description: {
        en: 'The npm registry hosts over 2 million open-source JavaScript packages used by millions of web applications worldwide, including React, Vue, Express, and Tailwind CSS.',
        km: 'npm registry មានផ្ទុក open-source packages លើសពី ២ លាន ដែលត្រូវបានប្រើប្រាស់ដោយ Web Application ជុំវិញពិភពលោក រួមមាន React, Vue, Express និង Tailwind CSS។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What is the primary purpose of npm in modern JavaScript development?',
        km: 'តើគោលបំណងចម្បងនៃ npm ក្នុងការអភិវឌ្ឍ JavaScript ទំនើបគឺជាអ្វី?'
      },
      solution: 'To install, manage, update, and share third-party JavaScript libraries and run project build scripts.'
    },
    quizQuestions: [
      {
        id: 'q-npm-1-1',
        question: {
          en: 'What does npm stand for?',
          km: 'តើពាក្យថា npm មកពីពាក្យពេញអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'Node Package Manager', km: 'Node Package Manager' }, isCorrect: true },
          { id: '2', text: { en: 'New Programming Module', km: 'New Programming Module' }, isCorrect: false },
          { id: '3', text: { en: 'Network Performance Monitor', km: 'Network Performance Monitor' }, isCorrect: false }
        ],
        explanation: {
          en: 'npm stands for Node Package Manager, the default package manager for Node.js.',
          km: 'npm តំណាងឱ្យ Node Package Manager ដែលជាប្រព័ន្ធគ្រប់គ្រង Package លំនាំដើមរបស់ Node.js។'
        }
      }
    ]
  },

  {
    id: 'npm-l2',
    slug: 'check-nodejs-and-npm-version',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: {
      en: '1.2 Checking Node.js & npm Installation',
      km: '1.2 ការត្រួតពិនិត្យការដំឡើង Node.js និង npm'
    },
    durationMinutes: 10,
    difficulty: 'Beginner',
    explanation: {
      en: 'npm is automatically bundled and installed when you install Node.js. To verify that Node.js and npm are installed correctly on your system, use the CLI flags `-v` or `--version`.',
      km: 'npm ត្រូវ​បាន​ដំឡើង​មកជាមួយ​ស្រាប់​នៅពេលអ្នកដំឡើង Node.js។ ដើម្បីត្រួតពិនិត្យថា Node.js និង npm ត្រូវ​បានដំឡើង​ត្រឹមត្រូវឬនៅ ត្រូវប្រើប្រាស់ CLI flag `-v` ឬ `--version`។'
    },
    tutorial: {
      en: '1. Open Command Prompt, Terminal, or VS Code Terminal.\n2. Run `node -v` to verify Node runtime.\n3. Run `npm -v` to verify npm package manager.\n4. If commands return version numbers (e.g., `v20.11.0` and `10.2.4`), installation is successful!',
      km: '១. បើក Terminal ឬ VS Code Terminal\n២. វាយ `node -v` ដើម្បីឆែកមើល version របស់ Node runtime\n៣. វាយ `npm -v` ដើម្បីឆែកមើល version របស់ npm\n៤. ប្រសិនបើវាបង្ហាញលេខ Version (ឧទាហរណ៍ `v20.11.0` និង `10.2.4`) មានន័យថាដំឡើងជោគជ័យ!'
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
    .out { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ node -v</div>
    <div class="out">v20.11.0</div>
    <br/>
    <div class="cmd">$ npm -v</div>
    <div class="out">10.2.4</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Node Version Management (nvm)',
        km: 'ការគ្រប់គ្រង Node Version (nvm)'
      },
      description: {
        en: 'Developers use tools like `nvm` (Node Version Manager) to easily switch between different Node.js and npm versions depending on project requirements.',
        km: 'Developer ប្រើប្រាស់ឧបករណ៍ `nvm` ដើម្បីប្តូររវាង Node.js versions ផ្សេងៗគ្នាទៅតាមតម្រូវការរបស់ Project នីមួយៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which command checks the currently installed npm version in your terminal?',
        km: 'តើ Command មួយណាសម្រាប់ត្រួតពិនិត្យ Version របស់ npm ក្នុង Terminal?'
      },
      solution: 'npm -v (or npm --version)'
    },
    quizQuestions: [
      {
        id: 'q-npm-1-2',
        question: {
          en: 'How do you check if npm is installed on your computer?',
          km: 'តើអ្នកត្រួតពិនិត្យថា npm ត្រូវ​បានដំឡើងលើកុំព្យូទ័រដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'npm -v', km: 'npm -v' }, isCorrect: true },
          { id: '2', text: { en: 'npm start', km: 'npm start' }, isCorrect: false },
          { id: '3', text: { en: 'npm check', km: 'npm check' }, isCorrect: false }
        ],
        explanation: {
          en: '`npm -v` or `npm --version` prints the active npm CLI version.',
          km: '`npm -v` ឬ `npm --version` បង្ហាញ Version របស់ npm ក្នុង Terminal។'
        }
      }
    ]
  },

  {
    id: 'npm-l3',
    slug: 'npm-init-and-package-json-anatomy',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: {
      en: '1.3 npm init & package.json Anatomy',
      km: '1.3 npm init និងរចនាសម្ព័ន្ធ package.json'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: '`package.json` is the heart of any Node/JavaScript project. It stores project metadata (name, version), scripts, and lists all external package dependencies required by the application. Running `npm init -y` generates a default `package.json` instantly.',
      km: '`package.json` គឺជាបេះដូងនៃ Project JavaScript/Node.js។ វាផ្ទុកព័ត៌មានទូទៅ (ឈ្មោះ, Version), ប្រព័ន្ធ Scripts, និងបញ្ជីរាយនាម Dependencies ទាំងអស់ដែល Project ត្រូវការ។ ការវាយ `npm init -y` បង្កើត `package.json` លំនាំដើមភ្លាមៗ។'
    },
    tutorial: {
      en: '- `npm init` -> Interactive setup prompt asking for project name, version, description, entry point.\n- `npm init -y` -> Auto-accepts all defaults with yes flag (`-y` / `--yes`), creating a clean `package.json` in 1 second.',
      km: '- `npm init` -> សួរដេញដោលតាមជំហាន (ឈ្មោះ, Version, description, entry point)\n- `npm init -y` -> យល់ព្រមយកតម្លៃ default ទាំងអស់ស្វ័យប្រវត្តិ ដោយមិនបាច់សួរច្រើន បង្កើត file ត្រឹមតែ ១ វិនាទី!'
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
    .json { color: #38bdf8; }
    .key { color: #f43f5e; }
    .val { color: #a5b4fc; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ npm init -y</div>
    <br/>
    <div class="json">
{
  <span class="key">"name"</span>: <span class="val">"my-web-app"</span>,
  <span class="key">"version"</span>: <span class="val">"1.0.0"</span>,
  <span class="key">"description"</span>: <span class="val">""</span>,
  <span class="key">"main"</span>: <span class="val">"index.js"</span>,
  <span class="key">"scripts"</span>: {
    <span class="key">"test"</span>: <span class="val">"echo \"Error: no test specified\" && exit 1"</span>
  },
  <span class="key">"keywords"</span>: [],
  <span class="key">"author"</span>: <span class="val">""</span>,
  <span class="key">"license"</span>: <span class="val">"ISC"</span>
}
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Every Modern Framework Uses package.json',
        km: 'គ្រប់ Modern Framework ទាំងអស់សុទ្ធតែប្រើ package.json'
      },
      description: {
        en: 'Whether you build React, Next.js, Vue, Angular, or Express applications, `package.json` exists in the root directory as the single source of truth for build settings and package dependencies.',
        km: 'ទោះបីជាអ្នកសរសេរ React, Next.js, Vue, Angular ឬ Express ក៏ដោយ `package.json` តែងតែស្ថិតនៅ Root folder ដើម្បីកត់ត្រារាល់ការកំណត់ និង Package Dependencies ទាំងអស់។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which flag allows you to initialize package.json without answering prompts?',
        km: 'តើ Flag មួយណាដែលអនុញ្ញាតឱ្យបង្កើត package.json ដោយរំលងសំណួរដេញដោល?'
      },
      solution: '-y (or --yes)'
    },
    quizQuestions: [
      {
        id: 'q-npm-1-3',
        question: {
          en: 'What command creates a default package.json file instantly?',
          km: 'តើ Command មួយណាដែលបង្កើត package.json លំនាំដើមភ្លាមៗ?'
        },
        options: [
          { id: '1', text: { en: 'npm init -y', km: 'npm init -y' }, isCorrect: true },
          { id: '2', text: { en: 'npm create json', km: 'npm create json' }, isCorrect: false },
          { id: '3', text: { en: 'npm start', km: 'npm start' }, isCorrect: false }
        ],
        explanation: {
          en: '`npm init -y` skips interactive questions and initializes a valid package.json file.',
          km: '`npm init -y` រំលងសំណួរដេញដោល និងបង្កើត file package.json ដោយស្វ័យប្រវត្តិ។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 2: Installing & Managing Dependencies
  // ==========================================
  {
    id: 'npm-l4',
    slug: 'installing-dependencies',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: {
      en: '2.1 Installing Dependencies (npm install)',
      km: '2.1 ការដំឡើង Dependencies (npm install)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'To use external libraries in your project runtime (like `axios` for API calls or `lodash` for helper utilities), use `npm install <package-name>`. npm automatically downloads the code into `node_modules/` and updates the `"dependencies"` section in `package.json`.',
      km: 'ដើម្បីប្រើប្រាស់ External Library ក្នុង project ពេលរត់ដំណើរការ (ដូចជា `axios` សម្រាប់សួរ API ឬ `lodash` សម្រាប់ helper utilities) ត្រូវប្រើ `npm install <package-name>`។ npm នឹងទាញយកកូដមកទុកក្នុង `node_modules/` ហើយចុះឈ្មោះក្នុង `"dependencies"` នៃ `package.json` ដោយស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: '1. Run `npm install axios` (shortcut: `npm i axios`).\n2. npm downloads `axios` into `./node_modules/axios`.\n3. `package.json` updates automatically:\n   `"dependencies": { "axios": "^1.6.8" }`\n4. Now you can import it in JavaScript: `import axios from "axios";`',
      km: '១. វាយ `npm install axios` (ឬវាយកាត់ `npm i axios`)\n២. npm ទាញយក `axios` មកដាក់ក្នុង `./node_modules/axios`\n៣. `package.json` អាប់ដេតស្វ័យប្រវត្តិ៖ `"dependencies": { "axios": "^1.6.8" }`\n៤. ឥឡូវអ្នកអាចសរសេរ `import axios from "axios";` ក្នុង JS បានហើយ!'
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
    .json { color: #38bdf8; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ npm install axios</div>
    <div class="ok">added 6 packages, and audited 7 packages in 1s</div>
    <br/>
    <div class="json">
// package.json updated:
"dependencies": {
  "axios": "^1.6.8"
}
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Runtime Dependencies',
        km: 'Runtime Dependencies'
      },
      description: {
        en: 'Runtime dependencies are packages required when the app runs in production (e.g. React, Express, Axios, Lucide Icons).',
        km: 'Runtime dependencies គឺជា Packages ទាំងឡាយណាដែលត្រូវការចាំបាច់នៅពេល App កំពុងដើរក្នុង Production (ឧទាហរណ៍ React, Express, Axios, Lucide Icons)។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What command installs the `lodash` package into production dependencies?',
        km: 'តើ Command មួយណាសម្រាប់ដំឡើង package `lodash` ចូលក្នុង production dependencies?'
      },
      solution: 'npm install lodash (or npm i lodash)'
    },
    quizQuestions: [
      {
        id: 'q-npm-2-1',
        question: {
          en: 'Where does npm store the downloaded dependency package code?',
          km: 'តើ npm រក្សាទុកកូដ Packages ដែលបានទាញយកនៅទីណា?'
        },
        options: [
          { id: '1', text: { en: 'In the node_modules folder', km: 'ក្នុង folder node_modules' }, isCorrect: true },
          { id: '2', text: { en: 'In system System32 folder', km: 'ក្នុង folder System32' }, isCorrect: false },
          { id: '3', text: { en: 'Directly inside index.html', km: 'ក្នុង file index.html' }, isCorrect: false }
        ],
        explanation: {
          en: 'All downloaded npm package files are placed inside the project `node_modules` directory.',
          km: 'រាល់កូដ Packages ទាំងអស់ដែលទាញយកពី npm ត្រូវ​បានរក្សាទុកក្នុង `node_modules`។'
        }
      }
    ]
  },

  {
    id: 'npm-l5',
    slug: 'dev-dependencies-save-dev',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: {
      en: '2.2 Dev Dependencies (--save-dev / -D)',
      km: '2.2 Dev Dependencies (--save-dev / -D)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'DevDependencies are packages needed only during local development and build time (such as TypeScript, Vite, ESLint, Prettier, or Jest testing frameworks). They are not shipped to end-users in production builds. Use `--save-dev` or `-D` to install them.',
      km: 'DevDependencies គឺជា Packages ដែលត្រូវការត្រឹមតែអំឡុងពេលសរសេរកូដ (Development) ឬ Build តែប៉ុណ្ណោះ (ដូចជា TypeScript, Vite, ESLint, Prettier ឬ Jest)។ វាមិនត្រូវបានបូករួមក្នុង Final Bundle ផ្ញើទៅកាន់ User ចុងក្រោយឡើយ។ ប្រើ `--save-dev` ឬ `-D` ដើម្បីដំឡើង។'
    },
    tutorial: {
      en: '1. Run `npm install -D typescript` (or `npm install typescript --save-dev`).\n2. npm lists it under `"devDependencies"` in `package.json`:\n   `"devDependencies": { "typescript": "^5.4.5" }`\n3. This keeps production builds lean and lightweight by excluding dev tools.',
      km: '១. វាយ `npm install -D typescript` (ឬ `npm install typescript --save-dev`)\n២. npm នឹងចុះឈ្មោះវាក្រោម `"devDependencies"` ក្នុង `package.json`៖\n   `"devDependencies": { "typescript": "^5.4.5" }`\n៣. ការធ្វើបែបនេះជួយឱ្យកូដពេល Deploy ទៅ Production មានទំហំស្រាល និងលឿន!'
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
    .json { color: #f43f5e; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ npm install -D vite typescript</div>
    <div class="ok">added 28 packages in 2s</div>
    <br/>
    <div class="json">
"devDependencies": {
  "typescript": "^5.4.5",
  "vite": "^5.2.0"
}
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Separating Production vs Development Tools',
        km: 'ការបែងចែក Production vs Development Tools'
      },
      description: {
        en: 'Build servers like Vercel or AWS can skip devDependencies when bundling production artifacts with `npm install --omit=dev`, saving time and bandwidth.',
        km: 'Cloud servers ដូចជា Vercel អាចរំលងការដំឡើង devDependencies ដោយប្រើ `npm install --omit=dev` ធ្វើឱ្យការ Deploy លឿននិងចំណេញទំហំ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What shorthand option flag installs a package as a devDependency?',
        km: 'តើ Shorthand flag មួយណាសម្រាប់ដំឡើង package ជា devDependency?'
      },
      solution: '-D (or --save-dev)'
    },
    quizQuestions: [
      {
        id: 'q-npm-2-2',
        question: {
          en: 'Why should tools like ESLint or TypeScript be installed under devDependencies?',
          km: 'ហេតុអ្វីបានជា Tool ដូចជា ESLint ឬ TypeScript គួរដំឡើងក្រោម devDependencies?'
        },
        options: [
          { id: '1', text: { en: 'Because they are only needed during development/build time, not in production runtime', km: 'ព្រោះវាត្រូវការតែពេលអភិវឌ្ឍន៍/Build ប៉ុណ្ណោះ មិនត្រូវការពេល App រត់ឡើយ' }, isCorrect: true },
          { id: '2', text: { en: 'Because npm forbids them in production', km: 'ព្រោះ npm ហាមឃាត់' }, isCorrect: false },
          { id: '3', text: { en: 'To make website background color red', km: 'ដើម្បីប្តូរពណ៌គេហទំព័រ' }, isCorrect: false }
        ],
        explanation: {
          en: 'DevDependencies assist engineers during code authoring and compilation, but are omitted from runtime browser assets.',
          km: 'DevDependencies ជួយរៀបចំកូដពេលសរសេរ ប៉ុន្តែមិនត្រូវបូកបញ្ចូលក្នុង Browser Assets ពេលដំណើរការឡើយ។'
        }
      }
    ]
  },

  {
    id: 'npm-l6',
    slug: 'uninstall-update-and-package-lock-json',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: {
      en: '2.3 Uninstalling, Updating & package-lock.json',
      km: '2.3 ការ Uninstall, Update និងយល់ដឹងពី package-lock.json'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Remove packages with `npm uninstall <package>`. Update packages to latest compatible versions using `npm update`. `package-lock.json` is a lockfile generated automatically by npm to record exact sub-dependency versions installed, ensuring identical builds across all machines.',
      km: 'លុប Packages ចេញវិញដោយប្រើ `npm uninstall <package>`។ អាប់ដេត Packages ទៅកាន់ version ថ្មីដោយប្រើ `npm update`។ ឯ `package-lock.json` គឺជា Lockfile ដែលបង្កើតឡើងស្វ័យប្រវត្តិដោយ npm ដើម្បីកត់ត្រាលម្អិតពី Version ពិតប្រាកដនៃ Sub-dependencies ទាំងអស់ ធានាថាការរត់កូដលើកុំព្យូទ័រគ្រប់គ្នាទទួលបានលទ្ធផលដូចគ្នាបេះបិទ។'
    },
    tutorial: {
      en: '- Uninstall command: `npm uninstall lodash` (removes from `node_modules` & `package.json`).\n- Update command: `npm update` (safely bumps packages according to semver ranges).\n- `package-lock.json`: MUST be committed to Git! Never edit this file manually.',
      km: '- លុប Package៖ `npm uninstall lodash` (ដកចេញពី `node_modules` & `package.json`)\n- អាប់ដេត Package៖ `npm update` (អាប់ដេតសុវត្ថិភាពតាម Semver range)\n- `package-lock.json`៖ ត្រូវតែ Commit ចូល Git ជានិច្ច! ហាមកែប្រែ File នេះដោយដៃដាច់ខាត។'
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
    .warn { color: #f97316; }
    .ok { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ npm uninstall moment</div>
    <div class="warn">removed 1 package in 450ms</div>
    <br/>
    <div class="cmd">$ npm update</div>
    <div class="ok">updated 3 packages in 1.2s</div>
    <br/>
    <div class="cmd">$ git status</div>
    <div class="ok">modified: package.json</div>
    <div class="ok">modified: package-lock.json</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Why package-lock.json is Critical',
        km: 'ហេតុអ្វី package-lock.json សំខាន់ខ្លាំង'
      },
      description: {
        en: 'Without `package-lock.json`, your teammate running `npm install` tomorrow might get a newly published sub-dependency with breaking bugs, breaking the project even if `package.json` looks identical.',
        km: 'បើគ្មាន `package-lock.json` មិត្តរួមក្រុមរបស់អ្នកអាចដំឡើងបាន sub-dependency ថ្មីដែលមាន bug ធ្វើឱ្យ project ដើរលែងកើត ទោះបី `package.json` ដូចគ្នាក៏ដោយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Should you manually edit the `package-lock.json` file?',
        km: 'តើអ្នកគួរសរសេរកែប្រែឯកសារ `package-lock.json` ដោយដៃដែរឬទេ?'
      },
      solution: 'No, package-lock.json is automatically managed by the npm CLI and should never be manually edited.'
    },
    quizQuestions: [
      {
        id: 'q-npm-2-3',
        question: {
          en: 'What is the primary role of package-lock.json?',
          km: 'តើប្រយោជន៍ចម្បងនៃ package-lock.json គឺជាអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'To lock exact versions of all installed packages and sub-dependencies for reproducible builds', km: 'ដើម្បីចាក់សោរ Version ពិតប្រាកដនៃ Packages ទាំងអស់ឱ្យដើរដូចគ្នាបេះបិទគ្រប់កុំព្យូទ័រ' }, isCorrect: true },
          { id: '2', text: { en: 'To lock user passwords', km: 'ដើម្បីចាក់សោរ password' }, isCorrect: false },
          { id: '3', text: { en: 'To run CSS animations', km: 'ដើម្បីរត់ CSS Animation' }, isCorrect: false }
        ],
        explanation: {
          en: '`package-lock.json` guarantees deterministic dependency trees across environments.',
          km: '`package-lock.json` ធានាថាការដំឡើង dependencies ទទួលបាន Version ដូចគ្នា 100% គ្រប់កន្លែង។'
        }
      }
    ]
  },

  {
    id: 'npm-l7',
    slug: 'node-modules-folder-and-gitignore',
    moduleNumber: 2,
    lessonNumberInModule: 4,
    title: {
      en: '2.4 The node_modules Directory & .gitignore',
      km: '2.4 Directory node_modules និងការប្រុងប្រយ័ត្ន .gitignore'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'The `node_modules/` folder contains thousands of nested files for installed packages and their sub-dependencies. Because it easily exceeds hundreds of megabytes, NEVER commit `node_modules/` to Git. Always add `node_modules` to your `.gitignore` file!',
      km: 'Folder `node_modules/` មានផ្ទុក file រាប់ពាន់រាប់ម៉ឺននៃ packages និង sub-dependencies។ ដោយសារវាមានទំហំធ្ងន់ខ្លាំង (រាប់រយ MB) អ្នក **មិនត្រូវ** Commit `node_modules/` ចូល Git ដាច់ខាត! ត្រូវបន្ថែម `node_modules` ក្នុង `.gitignore` ជានិច្ច។'
    },
    tutorial: {
      en: '1. Create a `.gitignore` file in project root.\n2. Add the line: `node_modules/`.\n3. When teammates clone your repository, they run `npm install` to download `node_modules` locally based on `package.json` and `package-lock.json`.',
      km: '១. បង្កើត file ឈ្មោះ `.gitignore` នៅ Root project\n២. សរសេរបន្ទាត់៖ `node_modules/`\n៣. ពេលមិត្តរួមក្រុម Clone repo យកទៅប្រើ ពួកគាត់គ្រាន់តែវាយ `npm install` នោះ npm នឹងទាញយក `node_modules` មកវិញដោយស្វ័យប្រវត្តិ!'
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
    .err { color: #f43f5e; }
    .ok { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ cat .gitignore</div>
    <div class="ok">node_modules/</div>
    <div class="ok">dist/</div>
    <div class="ok">.env</div>
    <br/>
    <div class="cmd">$ git status</div>
    <div class="ok">On branch main</div>
    <div class="ok">nothing to commit, working tree clean (node_modules is safely ignored!)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Git Repository Health',
        km: 'សុខភាពនៃ Git Repository'
      },
      description: {
        en: 'Pushing `node_modules` to GitHub makes your repository take gigabytes of space, slowing down `git clone` and `git push` for the whole team.',
        km: 'ការ Push `node_modules` ឡើង GitHub ធ្វើឱ្យ Repo មានទំហំរាប់ GB យឺតយ៉ាវខ្លាំងពេល Clone ឬ Push។'
      }
    },
    practiceExercise: {
      question: {
        en: 'If a new developer clones a project repository without `node_modules`, what command restores all packages?',
        km: 'ប្រសិនបើ Developer ថ្មី Clone project ដែលគ្មាន folder `node_modules` តើគាត់ត្រូវវាយ Command ណាដើម្បីទាញយក packages មកវិញ?'
      },
      solution: 'npm install (or npm i)'
    },
    quizQuestions: [
      {
        id: 'q-npm-2-4',
        question: {
          en: 'Why should node_modules/ be included in .gitignore?',
          km: 'ហេតុអ្វីបានជាត្រូវដាក់ node_modules/ ក្នុង .gitignore?'
        },
        options: [
          { id: '1', text: { en: 'Because it is extremely large and can be regenerated anytime with `npm install`', km: 'ព្រោះវាធ្ងន់ខ្លាំង ហើយអាចទាញយកមកវិញបានគ្រប់ពេលដោយវាយ `npm install`' }, isCorrect: true },
          { id: '2', text: { en: 'Because Git deletes node_modules automatically', km: 'ព្រោះ Git លុបវាចោល' }, isCorrect: false },
          { id: '3', text: { en: 'To hide React code from Google search', km: 'ដើម្បីលាក់កូដ React' }, isCorrect: false }
        ],
        explanation: {
          en: '`node_modules/` is heavy and build-reproducible using `package.json` and `package-lock.json`.',
          km: '`node_modules/` មានទំហំធំ ហើយអាចបង្កើតឡើងវិញបានយ៉ាងងាយស្រួលតាមរយៈ `npm install`។'
        }
      }
    ]
  }
];
