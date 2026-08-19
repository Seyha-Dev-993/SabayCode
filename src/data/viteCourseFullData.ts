import { FrontendCourse } from '../types/frontendClass';
import { VITE_LESSONS_PART1 } from './viteLessonsPart1';
import { VITE_LESSONS_PART2 } from './viteLessonsPart2';

const ALL_VITE_LESSONS = [...VITE_LESSONS_PART1, ...VITE_LESSONS_PART2];

export const VITE_COURSE_DATA: FrontendCourse = {
  id: 'vite',
  title: {
    en: 'Vite & Webpack Course — Build Tools & Bundlers',
    km: 'វគ្គសិក្សា Vite & Webpack — Build Tools & Bundlers'
  },
  iconName: 'vite',
  categoryId: 'tooling',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Master modern build tools, dev servers, Hot Module Replacement (HMR), vite.config.js, webpack.config.js, loaders, and production bundle optimization.',
    km: 'ស្ទាត់ជំនាញ Build Tools ទំនើប, Dev Servers, HMR, vite.config.js, webpack.config.js, Loaders និងការធ្វើ Production Bundle Optimization។'
  },
  summary: {
    en: 'Vite and Webpack are essential frontend build tools that transpile modern source code (TypeScript, JSX, CSS) into browser-executable bundles, powering fast local dev servers with Hot Module Replacement (HMR) and optimized static production builds.\n\n📌 Prerequisite: JavaScript Course and npm & Package Managers Course (recommended).',
    km: 'Vite និង Webpack គឺជា Build Tools ដែលជួយបំលែង Source Code (JavaScript, TypeScript, JSX, CSS) របស់អ្នកទៅជា Bundle ដែល Browser អាចដំណើរការបាន ព្រមទាំងផ្តល់ Dev Server លឿន និង Hot Reload ខណៈពេលអភិវឌ្ឍន៍។ ស្ទើរតែគ្រប់ Framework ទំនើប (React, Vue, Svelte) សុទ្ធតែប្រើ Vite ឬ Webpack នៅពីក្រោយឆាក។\n\n📌 តម្រូវការជាមុន៖ វគ្គសិក្សា JavaScript និងវគ្គសិក្សា npm & Package Managers (ណែនាំ)។'
  },
  estimatedHours: 4,
  lessonCount: ALL_VITE_LESSONS.length,
  cheatSheet: [
    {
      concept: 'npm create vite@latest',
      code: 'npm create vite@latest my-app -- --template react-ts',
      explanation: {
        en: 'Scaffold a new Vite project with pre-configured framework templates instantly.',
        km: 'បង្កើត Vite Project ថ្មីជាមួយ Framework Templates យ៉ាងរហ័ស។'
      }
    },
    {
      concept: 'npm run dev',
      code: 'npm run dev',
      explanation: {
        en: 'Start Vite native ESM development server with instant HMR.',
        km: 'បើកដំណើរការ Vite Dev Server រហ័សជាមួយប្រព័ន្ធ HMR។'
      }
    },
    {
      concept: 'npm run build',
      code: 'npm run build',
      explanation: {
        en: 'Compile minified, hashed static production bundles into dist/ folder.',
        km: 'ប្រមូលផ្តុំកូដឱ្យតូច ដាក់ Hash និងបញ្ចេញ static files ទៅក្នុង dist/ folder។'
      }
    },
    {
      concept: 'npm run preview',
      code: 'npm run preview',
      explanation: {
        en: 'Boot a local static web server to preview and test dist/ build output before deploying.',
        km: 'បើក local static server ដើម្បីតេស្តមើល file ក្នុង dist/ មុនពេល deploy។'
      }
    },
    {
      concept: 'Webpack Build Command',
      code: 'npx webpack --mode production',
      explanation: {
        en: 'Bundle code with Webpack in production mode (enables Terser minification & tree-shaking).',
        km: 'ចងបាច់កូដជាមួយ Webpack ក្នុង production mode (ធ្វើ minification និង tree-shaking)។'
      }
    },
    {
      concept: 'vite.config.ts Core Keys',
      code: 'export default defineConfig({\n  plugins: [react()],\n  server: { port: 3000 },\n  build: { outDir: "dist" }\n});',
      explanation: {
        en: 'Essential Vite config properties for framework plugins, dev port, and output folder.',
        km: 'ការកំណត់សំខាន់ៗក្នុង vite.config.ts សម្រាប់ plugins, port និង output folder។'
      }
    },
    {
      concept: 'webpack.config.js Core Keys',
      code: 'module.exports = {\n  entry: "./src/index.js",\n  output: { filename: "bundle.js", path: path.resolve(__dirname, "dist") },\n  module: { rules: [{ test: /\\.css$/i, use: ["style-loader", "css-loader"] }] }\n};',
      explanation: {
        en: 'Essential Webpack configuration keys defining entry, output bundle path, and CSS loaders.',
        km: 'ការកំណត់ Webpack សម្រាប់ entry point, output bundle path និង CSS loaders។'
      }
    },
    // Common Mistakes Section
    {
      concept: '❌ Common Mistake 1',
      code: 'git add dist/ node_modules/',
      explanation: {
        en: 'Committing build outputs (`dist/`) or `node_modules/` to Git repository instead of ignoring them in `.gitignore`.',
        km: 'ការ Commit folder `dist/` ឬ `node_modules/` ចូល Git ជំនួសឱ្យការដាក់វាក្នុង `.gitignore`។'
      }
    },
    {
      concept: '❌ Common Mistake 2',
      code: 'Forgetting --mode production in Webpack',
      explanation: {
        en: 'Shipping unminified development code to production because Webpack mode was not set.',
        km: 'ការទម្លាក់កូដទៅ Production ដោយភ្លេចដាក់ Webpack Mode ធ្វើឱ្យកូដគ្មាន Minification។'
      }
    },
    {
      concept: '❌ Common Mistake 3',
      code: 'Mismatched Webpack Loader Order',
      explanation: {
        en: 'Putting `css-loader` before `style-loader` in `use: []` array causing runtime build failure.',
        km: 'ការច្រឡំដាក់ `css-loader` មុន `style-loader` ក្នុង Array នាំឱ្យកើតមាន Runtime crash។'
      }
    },
    {
      concept: '❌ Common Mistake 4',
      code: 'Missing VITE_ Prefix in .env',
      explanation: {
        en: 'Attempting to access client environment variables without mandatory `VITE_` prefix.',
        km: 'ការភ្លេចដាក់បុព្វបទ `VITE_` លើ Environment variables ក្នុង .env ធ្វើឱ្យ Vite រំលងចោល។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-vite-quiz-1',
      question: {
        en: 'What is the primary difference between a Transpiler and a Bundler?',
        km: 'តើអ្វីជាភាពខុសគ្នាសំខាន់រវាង Transpiler និង Bundler?'
      },
      options: [
        { id: '1', text: { en: 'Transpilers transform modern syntax (TS/JSX) to plain JS, while Bundlers combine multiple files into optimized output chunks', km: 'Transpilers បំលែង syntax ទំនើប (TS/JSX) ជា JS សាមញ្ញ រីឯ Bundlers ចងបាច់ file ច្រើនចូលគ្នាជា output chunks' }, isCorrect: true },
        { id: '2', text: { en: 'Transpilers host MySQL databases', km: 'Transpilers គ្រប់គ្រង MySQL' }, isCorrect: false },
        { id: '3', text: { en: 'Bundlers send emails', km: 'Bundlers ផ្ញើ Email' }, isCorrect: false }
      ],
      explanation: {
        en: 'Transpiling converts languages/syntax (TS -> JS), whereas bundling resolves dependencies and packs multiple files into bundle outputs.',
        km: 'Transpiling បំលែងភាសា/syntax រីឯ bundling រៀបចំ និងចងបាច់ file បញ្ចូលគ្នា។'
      }
    },
    {
      id: 'q-vite-quiz-2',
      question: {
        en: 'Why does Vite development server start significantly faster than traditional Webpack dev server?',
        km: 'ហេតុអ្វីបានជា Vite Dev Server មានល្បឿនលឿនជាង Webpack បុរាណខ្លាំង?'
      },
      options: [
        { id: '1', text: { en: 'It serves source code via native browser ES modules on-demand without pre-bundling upfront', km: 'វាផ្ញើកូដតាម Native Browser ES Modules ដោយមិនបាច់ Pre-bundle គ្រប់យ៉ាងជាមុនឡើយ' }, isCorrect: true },
        { id: '2', text: { en: 'It disables CSS execution', km: 'វាបិទការរត់ CSS' }, isCorrect: false },
        { id: '3', text: { en: 'It bypasses JavaScript parsing', km: 'វាមិនអានកូដ JavaScript' }, isCorrect: false }
      ],
      explanation: {
        en: 'Vite offloads bundling during dev mode by utilizing modern browser support for ES imports (`<script type="module">`).',
        km: 'Vite ប្រើប្រាស់ Native ESM របស់ Browser ដោយមិនបាច់ធ្វើ pre-bundling ពេល dev ឡើយ។'
      }
    },
    {
      id: 'q-vite-quiz-3',
      question: {
        en: 'Given this `webpack.config.js` snippet, what filename will Webpack produce in the `./dist` folder for a production build?',
        km: 'យោងតាមកូដ `webpack.config.js` ខាងក្រោម តើ Webpack នឹងបង្កើត file ឈ្មោះអ្វីក្នុង folder `./dist`?'
      },
      codeSnippet: `const path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};`,
      options: [
        { id: '1', text: { en: 'dist/main.bundle.js', km: 'dist/main.bundle.js' }, isCorrect: true },
        { id: '2', text: { en: 'dist/index.html', km: 'dist/index.html' }, isCorrect: false },
        { id: '3', text: { en: 'src/app.js', km: 'src/app.js' }, isCorrect: false }
      ],
      explanation: {
        en: 'The `output.filename` specifies `main.bundle.js` target file inside `path.resolve(__dirname, "dist")`.',
        km: 'ទ្រព្យសម្បត្តិ `output.filename` កំណត់ឈ្មោះ `main.bundle.js` ក្នុង folder `dist`។'
      }
    },
    {
      id: 'q-vite-quiz-4',
      question: {
        en: 'How do you access client-side environment variables defined in `.env` inside a Vite application?',
        km: 'តើអ្នកចូលទៅប្រើប្រាស់ Client Environment Variables ដែលកំណត់ក្នុង `.env` ក្នុង Vite ដោយរបៀបណា?'
      },
      options: [
        { id: '1', text: { en: 'import.meta.env.VITE_MY_VAR', km: 'import.meta.env.VITE_MY_VAR' }, isCorrect: true },
        { id: '2', text: { en: 'process.env.VITE_MY_VAR', km: 'process.env.VITE_MY_VAR' }, isCorrect: false },
        { id: '3', text: { en: 'document.env.MY_VAR', km: 'document.env.MY_VAR' }, isCorrect: false }
      ],
      explanation: {
        en: 'Vite attaches environment variables starting with `VITE_` onto the ESM `import.meta.env` object.',
        km: 'Vite ផ្តល់ client variables តាមរយៈ `import.meta.env.VITE_*`។'
      }
    },
    {
      id: 'q-vite-quiz-5',
      question: {
        en: 'What is the purpose of Hot Module Replacement (HMR) during frontend development?',
        km: 'តើ Hot Module Replacement (HMR) មានប្រយោជន៍អ្វីខ្លះពេលសរសេរកូដ Frontend?'
      },
      options: [
        { id: '1', text: { en: 'Replaces updated modules instantly in browser memory while preserving current application state', km: 'អាប់ដេត Module ភ្លាមៗក្នុង Browser memory ដោយរក្សាទុក State បច្ចុប្បន្នរបស់ App' }, isCorrect: true },
        { id: '2', text: { en: 'Uploads code to GitHub automatically', km: 'Upload កូដទៅ GitHub' }, isCorrect: false },
        { id: '3', text: { en: 'Deletes node_modules folder', km: 'លុប folder node_modules' }, isCorrect: false }
      ],
      explanation: {
        en: 'HMR injects modified JS/CSS modules without triggering a full page reload, keeping state intact.',
        km: 'HMR បាញ់បញ្ចូលកូដដែលកែប្រែដោយមិនបាត់បង់ State ក្នុងទំព័រឡើយ។'
      }
    },
    {
      id: 'q-vite-quiz-6',
      question: {
        en: 'Why is loader order in Webpack `use: ["style-loader", "css-loader"]` array strictly evaluated from right-to-left?',
        km: 'ហេតុអ្វីបានជាលំដាប់ថ្នាក់ Loaders ក្នុង Webpack `use: ["style-loader", "css-loader"]` ត្រូវបានអានពីស្តាំទៅឆ្វេង?'
      },
      options: [
        { id: '1', text: { en: 'Because css-loader must parse CSS imports first, passing the result to style-loader to inject into DOM', km: 'ព្រោះ css-loader ត្រូវអាន CSS មុន រួចបញ្ជូនលទ្ធផលទៅ style-loader ដើម្បីបាញ់ចូល DOM' }, isCorrect: true },
        { id: '2', text: { en: 'Because style-loader creates CSS files on disk', km: 'ព្រោះ style-loader បង្កើត CSS file' }, isCorrect: false },
        { id: '3', text: { en: 'It is a random design bug in Webpack', km: 'វាជា Bug របស់ Webpack' }, isCorrect: false }
      ],
      explanation: {
        en: 'Webpack resolves loader array pipelines from right-to-left (or bottom-to-top).',
        km: 'Webpack អនុវត្ត loader pipeline ពីស្តាំទៅឆ្វេងជានិច្ច។'
      }
    },
    {
      id: 'q-vite-quiz-7',
      question: {
        en: 'What is the purpose of Content Hashes in filenames (e.g. `main.a8f9c2.js`) during production builds?',
        km: 'តើការដាក់ Content Hashes លើឈ្មោះ File ពេល Build (ដូចជា `main.a8f9c2.js`) មានប្រយោជន៍អ្វី?'
      },
      options: [
        { id: '1', text: { en: 'Cache-busting: invalidates browser cache whenever file contents change', km: 'Cache-busting ជួយឱ្យ Browser ទាញយក File ថ្មីរាល់ពេលកូដប្រែប្រួល' }, isCorrect: true },
        { id: '2', text: { en: 'To make filenames look longer and complex', km: 'ដើម្បីធ្វើឱ្យ ឈ្មោះ file មើលទៅវែង' }, isCorrect: false },
        { id: '3', text: { en: 'To hide developer usernames', km: 'ដើម្បីលាក់ឈ្មោះ Developer' }, isCorrect: false }
      ],
      explanation: {
        en: 'When file contents change, the generated hash changes, forcing browsers to fetch the updated asset URL.',
        km: 'ពេលកូដប្តូរ Hash ប្តូរ ដែលបង្ខំឱ្យ Browser ទាញយក URL file ថ្មី។'
      }
    },
    {
      id: 'q-vite-quiz-8',
      question: {
        en: 'Which configuration block inside `vite.config.ts` configures local dev server API proxying to bypass CORS?',
        km: 'តើ Configuration block មួយណា ក្នុង `vite.config.ts` សម្រាប់ចាត់ចែង local dev server API proxying ដើម្បីរំលង CORS?'
      },
      options: [
        { id: '1', text: { en: 'server.proxy', km: 'server.proxy' }, isCorrect: true },
        { id: '2', text: { en: 'build.outDir', km: 'build.outDir' }, isCorrect: false },
        { id: '3', text: { en: 'plugins.cors', km: 'plugins.cors' }, isCorrect: false }
      ],
      explanation: {
        en: '`server.proxy` redirects local dev HTTP requests matching path prefixes to backend targets.',
        km: '`server.proxy` ជួយរៀបចំ redirect API request លើ local dev server។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'Scaffold, Configure & Build a Real Frontend Project',
      km: 'ការបង្កើត កំណត់ Config និង Build Frontend Project ជាក់ស្តែង'
    },
    description: {
      en: 'In this hands-on Capstone, scaffold a new React TypeScript app using `npm create vite@latest`, configure custom server port (3000) and build output directory (`build`) in `vite.config.ts`, test HMR updates, and run a production build. Next, write a parallel minimal `webpack.config.js` to experience side-by-side build tool configuration.',
      km: 'ក្នុងគម្រោង Capstone នេះ អ្នកនឹងបង្កើត React TypeScript App ថ្មីជាមួយ `npm create vite@latest`, កំណត់ custom port (3000) និង build output directory (`build`) ក្នុង `vite.config.ts`, តេស្ត HMR updates និងរត់ production build។ បន្ទាប់មក សរសេរកូដ `webpack.config.js` សាមញ្ញមួយទៀត ដើម្បីប្រៀបធៀបរបៀបរៀបចំ Build Tools ទាំងពីរទន្ទឹមគ្នា។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .title { color: #bd34fe; font-weight: bold; margin-bottom: 10px; }
    .cmd { color: #facc15; }
    .ok { color: #4ade80; }
    .json { color: #38bdf8; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">🚀 Capstone — Dual Build Tools Setup</div>
    <div class="cmd">$ npm create vite@latest my-capstone-app -- --template react-ts</div>
    <div class="cmd">$ cd my-capstone-app && npm install</div>
    <br/>
    <div class="ok">1. Configured vite.config.ts:</div>
    <div class="json">
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: { outDir: 'build' }
});
    </div>
    <br/>
    <div class="ok">2. Minimal Webpack Alternative (webpack.config.js):</div>
    <div class="json">
const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/main.tsx',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  }
};
    </div>
    <br/>
    <div class="cmd">$ npm run build</div>
    <div class="ok">✓ Production bundle created successfully inside build/ directory!</div>
  </div>
</body>
</html>`
    }
  },
  lessons: ALL_VITE_LESSONS
};
