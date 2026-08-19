import { FrontendCourse } from '../types/frontendClass';
import { NPM_LESSONS_PART1 } from './npmLessonsHubPart1';
import { NPM_LESSONS_PART2 } from './npmLessonsHubPart2';

const ALL_NPM_LESSONS = [...NPM_LESSONS_PART1, ...NPM_LESSONS_PART2];

export const NPM_COURSE_DATA: FrontendCourse = {
  id: 'npm',
  title: {
    en: 'npm & Package Managers Course',
    km: 'វគ្គសិក្សា npm & Package Managers'
  },
  iconName: 'npm',
  categoryId: 'tooling',
  difficulty: 'Beginner',
  shortDescription: {
    en: 'Master package.json, runtime & dev dependencies, npm scripts, semantic versioning, lockfiles, and yarn/pnpm comparison.',
    km: 'ស្ទាត់ជំនាញ package.json, dependencies, devDependencies, npm scripts, semantic versioning, lockfiles និងការប្រើប្រាស់ yarn/pnpm។'
  },
  summary: {
    en: 'npm (Node Package Manager) is the industry-standard package manager and CLI tool used to install open-source libraries, manage project dependencies, and execute build scripts in modern software development.',
    km: 'npm គឺជា Package Manager សម្រាប់ JavaScript ដែលជួយឱ្យរៀបចំ, ដំឡើង, គ្រប់គ្រង, និង Share កូដ (Packages/Libraries) ដែលអ្នកអភិវឌ្ឍន៍ដទៃទៀតបានសរសេររួច។ ស្ទើរតែគ្រប់ Project (React, Vue, Next.js ។ល។) សុទ្ធតែពឹងផ្អែកលើ npm។'
  },
  estimatedHours: 3,
  lessonCount: ALL_NPM_LESSONS.length,
  cheatSheet: [
    {
      concept: 'npm init -y',
      code: 'npm init -y',
      explanation: {
        en: 'Initialize a new project and generate default package.json instantly.',
        km: 'ចាប់ផ្តើមបង្កើត Project ថ្មី និងបង្កើតឯកសារ package.json លំនាំដើមភ្លាមៗ។'
      }
    },
    {
      concept: 'npm install <pkg>',
      code: 'npm install axios\nnpm i lodash',
      explanation: {
        en: 'Install a runtime dependency and save it under "dependencies" in package.json.',
        km: 'ដំឡើង Runtime Dependency សម្រាប់ប្រើប្រាស់ក្នុង App ពេលរត់ដំណើរការ។'
      }
    },
    {
      concept: 'npm install -D <pkg>',
      code: 'npm install -D vite typescript\nnpm install eslint --save-dev',
      explanation: {
        en: 'Install a development dependency saved under "devDependencies".',
        km: 'ដំឡើង Development Tool សម្រាប់ប្រើប្រាស់តែពេលសរសេរកូដ ឬ Build។'
      }
    },
    {
      concept: 'npm uninstall <pkg>',
      code: 'npm uninstall moment',
      explanation: {
        en: 'Remove package code from node_modules and update package.json.',
        km: 'លុប Package ចេញពី node_modules និងដកឈ្មោះចេញពី package.json។'
      }
    },
    {
      concept: 'npm update',
      code: 'npm update',
      explanation: {
        en: 'Safely update installed packages according to semantic version ranges.',
        km: 'អាប់ដេត Packages ទាំងអស់ឱ្យទៅជា Version ថ្មីតាម Semver rules។'
      }
    },
    {
      concept: 'npm run <script>',
      code: 'npm run dev\nnpm run build\nnpm start',
      explanation: {
        en: 'Execute CLI shortcut scripts defined inside package.json "scripts" object.',
        km: 'រត់ Command Shortcuts ដែលបានកំណត់ក្នុងផ្នែក "scripts" នៃ package.json។'
      }
    },
    {
      concept: 'npm ci',
      code: 'npm ci',
      explanation: {
        en: 'Perform a clean, strict install directly from package-lock.json on CI/servers.',
        km: 'ធ្វើ Clean Install ដោយអានតែពី package-lock.json ដោយផ្ទាល់លើ Cloud/Server។'
      }
    },
    {
      concept: 'Semver Ranges (^ vs ~)',
      code: '"axios": "^1.6.0"  // Caret: Allows Minor & Patch\n"react": "~18.2.0"  // Tilde: Allows Patch only',
      explanation: {
        en: 'Caret (^) allows Minor/Patch upgrades. Tilde (~) restricts to Patch upgrades only.',
        km: 'Caret (^) អនុញ្ញាតអាប់ដេត Minor & Patch។ Tilde (~) អនុញ្ញាតតែ Patch ប៉ុណ្ណោះ។'
      }
    },
    // Common Mistakes Section
    {
      concept: '❌ Common Mistake 1',
      code: 'git add node_modules/',
      explanation: {
        en: 'Committing the huge `node_modules/` folder to Git instead of ignoring it in `.gitignore`.',
        km: 'ការ Commit folder `node_modules/` ចូល Git ជំនួសឱ្យការដាក់វាក្នុង `.gitignore`។'
      }
    },
    {
      concept: '❌ Common Mistake 2',
      code: 'Manually editing package-lock.json',
      explanation: {
        en: 'Manually modifying `package-lock.json` which ruins strict dependency hashes.',
        km: 'ការសរសេរកែប្រែ `package-lock.json` ដោយដៃ ដែលធ្វើឱ្យខូច Lockfile Hashes។'
      }
    },
    {
      concept: '❌ Common Mistake 3',
      code: 'npm install -g (for project deps)',
      explanation: {
        en: 'Installing project-specific libraries globally instead of inside local project `package.json`.',
        km: 'ការដំឡើង Library របស់ Project ចូល Global ជំនួសឱ្យការដំឡើងក្នុង Project ផ្ទាល់។'
      }
    },
    {
      concept: '❌ Common Mistake 4',
      code: 'Mixing npm & yarn lockfiles',
      explanation: {
        en: 'Having both `package-lock.json` and `yarn.lock` in the same project root.',
        km: 'ការមានទាំង `package-lock.json` និង `yarn.lock` ក្នុង Project តែមួយនាំឱ្យកើតមាន Bug។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-npm-quiz-1',
      question: {
        en: 'Which file serves as the single source of truth for project metadata and dependencies?',
        km: 'តើ ឯកសារមួយណាជាប្រភពទិន្នន័យដើមសំខាន់បំផុតសម្រាប់កត់ត្រា Dependencies និង Scripts?'
      },
      options: [
        { id: '1', text: { en: 'package.json', km: 'package.json' }, isCorrect: true },
        { id: '2', text: { en: 'index.html', km: 'index.html' }, isCorrect: false },
        { id: '3', text: { en: 'tsconfig.json', km: 'tsconfig.json' }, isCorrect: false }
      ],
      explanation: {
        en: '`package.json` configures all package dependencies, scripts, and project metadata.',
        km: '`package.json` កត់ត្រាឈ្មោះ Package Dependencies និង Scripts ទាំងអស់។'
      }
    },
    {
      id: 'q-npm-quiz-2',
      question: {
        en: 'What command creates a default package.json without asking interactive setup questions?',
        km: 'តើ Command មួយណាដែលបង្កើត package.json ដោយមិនបាច់សួរសំណួរដេញដោល?'
      },
      options: [
        { id: '1', text: { en: 'npm init -y', km: 'npm init -y' }, isCorrect: true },
        { id: '2', text: { en: 'npm create app', km: 'npm create app' }, isCorrect: false },
        { id: '3', text: { en: 'npm start', km: 'npm start' }, isCorrect: false }
      ],
      explanation: {
        en: 'The `-y` flag auto-accepts all defaults during `npm init`.',
        km: 'Flag `-y` យល់ព្រមយកតម្លៃ Default ទាំងអស់ស្វ័យប្រវត្តិ។'
      }
    },
    {
      id: 'q-npm-quiz-3',
      question: {
        en: 'How do you install TypeScript as a development dependency?',
        km: 'តើអ្នកដំឡើង TypeScript ជា Development Dependency ដោយរបៀបណា?'
      },
      options: [
        { id: '1', text: { en: 'npm install -D typescript', km: 'npm install -D typescript' }, isCorrect: true },
        { id: '2', text: { en: 'npm install --prod typescript', km: 'npm install --prod typescript' }, isCorrect: false },
        { id: '3', text: { en: 'npm add typescript --global', km: 'npm add typescript --global' }, isCorrect: false }
      ],
      explanation: {
        en: 'The `-D` or `--save-dev` flag saves packages under `devDependencies`.',
        km: 'Flag `-D` រក្សាទុក Package ចុះឈ្មោះក្រោម `devDependencies`។'
      }
    },
    {
      id: 'q-npm-quiz-4',
      question: {
        en: 'Why must the node_modules/ folder be listed inside .gitignore?',
        km: 'ហេតុអ្វីបានជាត្រូវដាក់ node_modules/ ចូលក្នុង .gitignore?'
      },
      options: [
        { id: '1', text: { en: 'Because it is extremely heavy and can be regenerated anytime with `npm install`', km: 'ព្រោះវាមានទំហំធំខ្លាំង ហើយអាចដំឡើងឡើងវិញបានគ្រប់ពេលដោយវាយ `npm install`' }, isCorrect: true },
        { id: '2', text: { en: 'Because npm deletes it when you push', km: 'ព្រោះ npm លុបវាពេល Push' }, isCorrect: false },
        { id: '3', text: { en: 'To protect HTML code', km: 'ដើម្បីការពារកូដ HTML' }, isCorrect: false }
      ],
      explanation: {
        en: '`node_modules/` is bloated and easily rebuilt using `package-lock.json`.',
        km: '`node_modules/` ធ្ងន់ខ្លាំង ហើយអាចបង្កើតឡើងវិញបានតាមរយៈ `npm install`។'
      }
    },
    {
      id: 'q-npm-quiz-5',
      question: {
        en: 'Given `"express": "^4.18.2"`, which update will npm allow automatically?',
        km: 'ប្រសិនបើមាន `"express": "^4.18.2"` តើ npm អនុញ្ញាតឱ្យអាប់ដេតដល់ត្រឹមណា?'
      },
      options: [
        { id: '1', text: { en: '4.19.0 (Minor update within major 4)', km: '4.19.0 (Minor update ក្នុងរង្វង់ major 4)' }, isCorrect: true },
        { id: '2', text: { en: '5.0.0 (Major breaking release)', km: '5.0.0 (Major breaking release)' }, isCorrect: false },
        { id: '3', text: { en: '4.18.2 only', km: '4.18.2 តែប៉ុណ្ណោះ' }, isCorrect: false }
      ],
      explanation: {
        en: 'Caret (`^`) permits MINOR and PATCH updates without bumping MAJOR.',
        km: 'សញ្ញា Caret (`^`) អនុញ្ញាតឱ្យអាប់ដេត Minor និង Patch ដោយមិនឡើងដល់ Major ថ្មីឡើយ។'
      }
    },
    {
      id: 'q-npm-quiz-6',
      question: {
        en: 'Which npm command performs a strict clean install directly from package-lock.json on server environments?',
        km: 'តើ npm command មួយណាដែលធ្វើ Clean install ដោយអានតែពី package-lock.json លើ Server?'
      },
      options: [
        { id: '1', text: { en: 'npm ci', km: 'npm ci' }, isCorrect: true },
        { id: '2', text: { en: 'npm update', km: 'npm update' }, isCorrect: false },
        { id: '3', text: { en: 'npm clean', km: 'npm clean' }, isCorrect: false }
      ],
      explanation: {
        en: '`npm ci` bypasses package resolution and installs exact lockfile packages.',
        km: '`npm ci` ដំឡើង packages តាម lockfile ដោយផ្ទាល់សម្រាប់ deployment server។'
      }
    },
    {
      id: 'q-npm-quiz-7',
      question: {
        en: 'How can you identify if a repository uses pnpm as its package manager?',
        km: 'តើអ្នកអាចសម្គាល់ថារ៉េប៉ូមួយប្រើ pnpm ជា package manager ដោយរបៀបណា?'
      },
      options: [
        { id: '1', text: { en: 'The project root contains a `pnpm-lock.yaml` file', km: 'មានវត្តមានឯកសារ `pnpm-lock.yaml` ក្នុង Root folder' }, isCorrect: true },
        { id: '2', text: { en: 'The project contains an image file', km: 'មានរូបភាពក្នុង folder' }, isCorrect: false },
        { id: '3', text: { en: 'The HTML title says "pnpm"', km: 'HTML title ដាក់ពាក្យ pnpm' }, isCorrect: false }
      ],
      explanation: {
        en: '`pnpm-lock.yaml` indicates that pnpm was used to generate lockfile tree.',
        km: 'វត្តមាន `pnpm-lock.yaml` បញ្ជាក់ថាក្រុមការងារប្រើប្រាស់ pnpm។'
      }
    },
    {
      id: 'q-npm-quiz-8',
      question: {
        en: 'What command executes the custom script `"dev": "vite"` defined inside package.json?',
        km: 'តើ Command មួយណាដែលរត់ custom script `"dev": "vite"` ដែលសរសេរក្នុង package.json?'
      },
      options: [
        { id: '1', text: { en: 'npm run dev', km: 'npm run dev' }, isCorrect: true },
        { id: '2', text: { en: 'npm dev', km: 'npm dev' }, isCorrect: false },
        { id: '3', text: { en: 'npm exec vite', km: 'npm exec vite' }, isCorrect: false }
      ],
      explanation: {
        en: 'Custom script aliases in `package.json` require `npm run <script-name>`.',
        km: 'Custom scripts ត្រូវការវាយពាក្យ `npm run <script-name>` ជានិច្ច។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'Frontend Project Setup from Scratch with npm',
      km: 'ការរៀបចំ Frontend Project ថ្មីពីដំបូងដោយប្រើ npm'
    },
    description: {
      en: 'In this hands-on Capstone, create a new project directory, initialize package.json using `npm init -y`, install runtime dependencies (`lodash`) and devDependencies (`vite`), configure custom scripts for `dev` and `build`, create a proper `.gitignore`, and verify a working setup.',
      km: 'ក្នុងគម្រោង Capstone នេះ អ្នកនឹងបង្កើត Project folder, បង្កើត package.json ជាមួយ `npm init -y`, ដំឡើង runtime dependency (`lodash`) និង devDependency (`vite`), កំណត់ custom scripts សម្រាប់ `dev` និង `build`, សរសេរ `.gitignore` ត្រឹមត្រូវ និងត្រួតពិនិត្យដំណើរការ package.json។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .title { color: #f43f5e; font-weight: bold; margin-bottom: 10px; }
    .cmd { color: #facc15; }
    .ok { color: #4ade80; }
    .json { color: #38bdf8; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">🚀 Capstone Command Sequence & Output</div>
    <div class="cmd">$ mkdir my-awesome-app && cd my-awesome-app</div>
    <div class="cmd">$ npm init -y</div>
    <div class="cmd">$ npm install lodash</div>
    <div class="cmd">$ npm install -D vite typescript</div>
    <div class="cmd">$ echo "node_modules/\ndist/\n.env" > .gitignore</div>
    <br/>
    <div class="ok">✅ package.json Configured Successfully:</div>
    <div class="json">
{
  "name": "my-awesome-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "typescript": "^5.4.5",
    "vite": "^5.2.0"
  }
}
    </div>
  </div>
</body>
</html>`
    }
  },
  lessons: ALL_NPM_LESSONS
};
