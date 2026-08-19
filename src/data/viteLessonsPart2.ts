import { FrontendLesson } from '../types/frontendClass';

export const VITE_LESSONS_PART2: FrontendLesson[] = [
  // ==========================================
  // MODULE 4: Loaders, Plugins & Assets
  // ==========================================
  {
    id: 'vite-l12',
    slug: 'loaders-plugins-assets-intro',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: {
      en: '4.1 Loaders vs Built-in Asset Handling (Webpack vs Vite)',
      km: '4.1 យន្តការ Loaders និង Built-in Asset Handling (Webpack vs Vite)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'JavaScript bundlers naturally only understand JS/JSON files. To import CSS, SVG images, SCSS, or custom fonts inside JS modules, Webpack requires configuring explicit "Loaders" (like `css-loader` and `file-loader`). In contrast, Vite includes native built-in support for CSS imports and asset queries out of the box without extra setup.',
      km: 'តាមធម្មជាតិ JavaScript Bundlers យល់តែឯកសារ JS/JSON តែប៉ុណ្ណោះ។ ដើម្បីទាញយក (Import) CSS, SVGs, រូបភាព ឬ Fonts ចូលក្នុង JS modules Webpack តម្រូវឱ្យមានការកំណត់ "Loaders" (ដូចជា `css-loader` និង `file-loader`)។ ផ្ទុយទៅវិញ Vite មានសមត្ថភាពគាំទ្រ CSS និង Asset import មកជាមួយស្រាប់ (Built-in) ដោយមិនបាច់កំណត់អ្វីស្មុគស្មាញឡើយ។'
    },
    tutorial: {
      en: '- Webpack Philosophy: Everything is explicit. If you import `style.css`, Webpack throws an error unless `module.rules` defines loaders.\n- Vite Philosophy: Sensible defaults. Direct `import "./style.css"` or `import img from "./logo.png"` works out of the box.',
      km: '- គោលការណ៍ Webpack: គ្រប់យ៉ាងត្រូវកំណត់ច្បាស់។ បើ Import `style.css` Webpack នឹងចេញ Error ភ្លាម លុះត្រាតែកំណត់ Loaders ក្នុង `module.rules`។\n- គោលការណ៍ Vite: មានតម្លៃ Default ស្រាប់។ ការ Import `style.css` ឬ `logo.png` ដំណើរការភ្លាមៗដោយស្វ័យប្រវត្តិ។'
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
    .code { color: #38bdf8; }
    .err { color: #f43f5e; }
    .ok { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">🎨 Asset Handling Comparison</div>
    <div class="code">// App.js</div>
    <div class="code">import './style.css';</div>
    <div class="code">import logo from './logo.svg';</div>
    <br/>
    <div class="err">❌ Webpack without Loaders: Module parse failed! You may need an appropriate loader to handle this file type.</div>
    <br/>
    <div class="ok">✅ Vite: Works instantly! Injecting CSS to DOM head & returning resolved asset URL for logo.svg</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Vite Zero-Config Asset Imports',
        km: 'ការ Import Assets ដោយមិនបាច់ Config ក្នុង Vite'
      },
      description: {
        en: 'In Vite, writing `import imgUrl from "./hero.jpg"` returns the relative public URL string during development, and the hashed production asset URL during build.',
        km: 'ក្នុង Vite ការសរសេរ `import imgUrl from "./hero.jpg"` នឹងត្រឡប់មកវិញនូវ URL String នៃរូបភាពដោយស្វ័យប្រវត្តិ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Does Vite require installing extra loaders to import standard .css files into JavaScript?',
        km: 'តើ Vite ត្រូវការដំឡើង Loaders បន្ថែមដើម្បី Import ឯកសារ .css ឬទេ?'
      },
      solution: 'No! Vite supports importing standard CSS files directly out of the box.'
    },
    quizQuestions: [
      {
        id: 'q-vite-4-1-1',
        question: {
          en: 'What happens in Webpack if you import a `.css` file without configuring CSS loaders?',
          km: 'តើមានអ្វីកើតឡើងក្នុង Webpack ប្រសិនបើអ្នក import `.css` file ដោយមិនបានកំណត់ CSS loaders?'
        },
        options: [
          { id: '1', text: { en: 'Webpack throws a "Module parse failed" error', km: 'Webpack បោះចេញ Error "Module parse failed"' }, isCorrect: true },
          { id: '2', text: { en: 'It converts the CSS into a SQL database table', km: 'វាបំលែង CSS ទៅជា SQL Table' }, isCorrect: false },
          { id: '3', text: { en: 'It deletes the CSS file', km: 'វាលុប CSS file ចោល' }, isCorrect: false }
        ],
        explanation: {
          en: 'Webpack only understands JS/JSON natively. Any non-JS asset (CSS, PNG, SCSS) requires an explicit loader rule.',
          km: 'Webpack យល់តែ JS/JSON ដូច្នេះឯកសារផ្សេងទៀតទាមទារឱ្យមាន Loader Rule។'
        }
      }
    ]
  },
  {
    id: 'vite-l13',
    slug: 'css-handling-vite-webpack',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: {
      en: '4.2 Minimal CSS Loading (Vite Direct Import vs Webpack `css-loader`)',
      km: '4.2 ការប្រើប្រាស់ CSS (Vite Direct Import និង Webpack `css-loader`)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'To handle CSS in Webpack, you must install `css-loader` (which interprets `@import` and `url()` like `import/require()`) and `style-loader` (which injects the CSS string into DOM `<style>` tags). In Vite, importing `.css` directly handles HMR style injection automatically.',
      km: 'ដើម្បីប្រើប្រាស់ CSS ក្នុង Webpack អ្នកត្រូវដំឡើង `css-loader` (សម្រាប់អានច្បាប់ `@import` និង `url()`) និង `style-loader` (សម្រាប់បាញ់បញ្ចូលកូដ CSS ទៅក្នុង `<style>` tag លើ DOM)។ រីឯក្នុង Vite ការ import `.css` ដោយផ្ទាល់នឹងចាត់ចែង HMR style injection ឱ្យស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: '- Webpack `module.rules` Configuration:\n```js\nmodule: {\n  rules: [\n    {\n      test: /\\.css$/i,\n      use: ["style-loader", "css-loader"] // Note: Order matters! Right-to-left execution!\n    }\n  ]\n}\n```\n- Vite Usage: Simply write `import "./styles.css";` in your main entry file.',
      km: '- ការកំណត់ Webpack `module.rules` ៖\n```js\nmodule: {\n  rules: [\n    {\n      test: /\\.css$/i,\n      use: ["style-loader", "css-loader"] // សំខាន់៖ រត់ពីស្តាំទៅឆ្វេង (css-loader រួចចុងក្រោយ style-loader)!\n    }\n  ]\n}\n```\n- ការប្រើក្នុង Vite: គ្រាន់តែសរសេរ `import "./styles.css";` ក្នុង entry file ជាការស្រេច។'
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
    <div class="title">⚙️ Webpack CSS Loader Chain Rule</div>
    <div class="code">
module: {
  rules: [
    {
      test: <span class="key">/\\.css$/i</span>,
      use: [
        <span class="str">'style-loader'</span>, <span class="key">// 2. Injects CSS into DOM &lt;style&gt; tag</span>
        <span class="str">'css-loader'</span>    <span class="key">// 1. Resolves @import & url() references</span>
      ]
    }
  ]
}
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Order of Webpack Loaders Matters!',
        km: 'លំដាប់លំដោយនៃ Webpack Loaders ពិតជាសំខាន់!'
      },
      description: {
        en: 'Webpack evaluates loader arrays in reverse order (bottom-to-top / right-to-left). Putting `css-loader` before `style-loader` in the array will cause a build runtime crash!',
        km: 'Webpack អាន Loaders បញ្ច្រាសទិស (ពីស្តាំទៅឆ្វេង)។ ការដាក់ `css-loader` មុន `style-loader` ក្នុង Array នឹងធ្វើឱ្យកើតមាន Build Crash! ត្រូវចាំថា `css-loader` ត្រូវនៅខាងក្រោយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'In Webpack loader array `use: ["style-loader", "css-loader"]`, which loader executes first?',
        km: 'ក្នុង Webpack array `use: ["style-loader", "css-loader"]` តើ loader មួយណាដំណើរការមុនគេ?'
      },
      solution: '`css-loader` executes first (evaluated from right-to-left).'
    },
    quizQuestions: [
      {
        id: 'q-vite-4-2-1',
        question: {
          en: 'Why is the order of loaders in Webpack array `use: ["style-loader", "css-loader"]` significant?',
          km: 'ហេតុអ្វីបានជាលំដាប់ថ្នាក់ Loaders ក្នុង Webpack `use: ["style-loader", "css-loader"]` សំខាន់?'
        },
        options: [
          { id: '1', text: { en: 'Webpack applies loaders in right-to-left order, so css-loader must parse CSS before style-loader injects it', km: 'Webpack អនុវត្តពីស្តាំទៅឆ្វេង ដូច្នេះ css-loader ត្រូវអាន CSS មុនពេល style-loader បាញ់ចូល DOM' }, isCorrect: true },
          { id: '2', text: { en: 'Loaders are evaluated alphabetically', km: 'Loaders រត់តាមអក្ខរក្រម' }, isCorrect: false },
          { id: '3', text: { en: 'The order does not matter', km: 'លំដាប់ថ្នាក់ គ្មានឥទ្ធិពលអ្វីទេ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Webpack resolves loader chains from right-to-left (or bottom-to-top), passing result of `css-loader` into `style-loader`.',
          km: 'Webpack អនុវត្ត loader chain ពីស្តាំទៅឆ្វេង ដោយបញ្ជូនលទ្ធផលពី css-loader ទៅ style-loader។'
        }
      }
    ]
  },
  {
    id: 'vite-l14',
    slug: 'static-assets-cache-busting',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: {
      en: '4.3 Static Assets & Cache-Busting File Hashes',
      km: '4.3 ឯកសារ Static Assets និងការកំណត់ Hash ការពារ Browser Cache'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'When deploying web applications, browsers cache static assets (JS, CSS, images) aggressively. Both Vite and Webpack perform automatic "cache-busting" during production builds by appending content hashes to output filenames (e.g., `main.a8f9c2.js`). When code changes, the hash changes, forcing browsers to fetch fresh files.',
      km: 'នៅពេល Deploy កម្មវិធី Web Browsers តែងចងចាំ (Cache) Static Files (JS, CSS, រូបភាព) យ៉ាងសកម្ម។ ទាំង Vite និង Webpack តែងធ្វើ "Cache-Busting" ស្វ័យប្រវត្តិ ពេល Build ដោយបិទភ្ជាប់ Content Hash លើឈ្មោះ File (ឧទាហរណ៍ `main.a8f9c2.js`)។ ពេលកូដប្តូរ លេខ Hash ប្តូរ ដែលបង្ខំឱ្យ Browser ទាញយក File ថ្មីភ្លាម។'
    },
    tutorial: {
      en: '- Webpack Asset Configuration: `output: { filename: "[name].[contenthash].js" }`\n- Vite Asset Configuration: Built-in default outputs `assets/index-[hash].js`.\n- Result: HTML links update automatically to `<script src="/assets/index-D7a9bf1c.js"></script>`.',
      km: '- Webpack Config: `output: { filename: "[name].[contenthash].js" }`\n- Vite Config: មានស្រាប់ជា default `assets/index-[hash].js`។\n- លទ្ធផល: HTML `<script>` tag នឹងដកស្រង់ឈ្មោះ file ជាមួយ hash ថ្មីស្វ័យប្រវត្តិ។'
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
    .file { color: #4ade80; }
    .hash { color: #facc15; font-weight: bold; }
    .desc { color: #94a3b8; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">🔐 Cache-Busting File Hashes</div>
    <div class="file">Build 1 Output: dist/assets/app-<span class="hash">b8c1d3</span>.js</div>
    <div class="file">Build 2 Output: dist/assets/app-<span class="hash">f9a4e2</span>.js (Code modified!)</div>
    <div class="desc">
➜ Browsers automatically invalidate stale cache because the filename URL changed!
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'The Danger of Fixed Filenames without Hashes',
        km: 'គ្រោះថ្នាក់នៃការប្រើឈ្មោះ File ថេរគ្មាន Hash'
      },
      description: {
        en: 'If your production build outputs `bundle.js` without a hash, returning users might keep seeing stale buggy cached JavaScript for weeks after you deploy a critical hotfix.',
        km: 'ប្រសិនបើកូដ Build ចេញឈ្មោះថេរ `bundle.js` អ្នកប្រើប្រាស់ចាស់ៗនឹងបន្តឃើញកូដចាស់ (Stale Cache) រាប់សប្តាហ៍ បើទោះជាអ្នក Deploy កូដថ្មីដោះស្រាយ Bug រួចក៏ដោយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What Webpack placeholder token appends a unique checksum hash based on file content?',
        km: 'តើ Webpack placeholder token មួយណា សម្រាប់បិទភ្ជាប់ checksum hash អាស្រ័យលើខ្លឹមសារ file?'
      },
      solution: '[contenthash] (e.g. filename: "[name].[contenthash].js")'
    },
    quizQuestions: [
      {
        id: 'q-vite-4-3-1',
        question: {
          en: 'What is the purpose of appending content hashes to filenames during production build?',
          km: 'តើការបិទភ្ជាប់ Content Hashes លើឈ្មោះ File ពេល Build មានគោលបំណងអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'Cache-busting: ensures browsers fetch new files whenever source code changes', km: 'Cache-busting ធានាថា Browser ទាញយក File ថ្មីរាល់ពេលដែលកូដដើមមានការផ្លាស់ប្តូរ' }, isCorrect: true },
          { id: '2', text: { en: 'Encrypts the file so humans cannot read CSS', km: 'ការពារមិនឱ្យ មនុស្សមើល CSS យល់' }, isCorrect: false },
          { id: '3', text: { en: 'Slows down the website loading speed', km: 'ពន្យឺតល្បឿន គេហទំព័រ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Content hashes create unique filename URLs whenever file contents change, preventing stale browser caching.',
          km: 'Content hashes បង្កើត URL ឈ្មោះ file ថ្មី រាល់ពេលកូដប្រែប្រួល ដើម្បីលុប Stale Cache។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 5: Dev Server Features
  // ==========================================
  {
    id: 'vite-l15',
    slug: 'hot-module-replacement-hmr',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: {
      en: '5.1 Hot Module Replacement (HMR) & Fast Refresh',
      km: '5.1 ប្រព័ន្ធ Hot Module Replacement (HMR) និង Fast Refresh'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without requiring a full page reload. This retains local application state (such as form inputs, open modal dialogs, or counter values) while you edit CSS and component code.',
      km: 'Hot Module Replacement (HMR) ផ្លាស់ប្តូរ ឬអាប់ដេត Module កូដខណៈពេល App កំពុងរត់ ដោយមិនចាំបាច់ធ្វើ Full Page Reload ឡើយ។ វាជួយរក្សា State ក្នុងទំព័រ (ដូចជា Form Data, Modal ដែលកំពុងបើក ឬទិន្នន័យស្រាប់) ខណៈពេលដែលអ្នកកែប្រែ CSS ឬ React Components។'
    },
    tutorial: {
      en: '- Traditional Live Reload: Edit CSS/JS -> Browser refreshes entire page -> App state lost!\n- Modern HMR (Vite/Webpack): Edit CSS/JS -> WebSocket pushes changed module -> Browser updates ONLY that component instantly -> App state preserved!',
      km: '- Live Reload បុរាណ: កែប្រែ CSS/JS -> Browser Refresh ពេញមួយទំព័រ -> បាត់បង់ State ទាំងអស់!\n- HMR ទំនើប (Vite/Webpack): កែប្រែ CSS/JS -> WebSocket ផ្ញើតែ Module ដែលកែ -> Browser អាប់ដេតតែ Component នោះភ្លាម -> រក្សា State ដដែល!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .title { color: #facc15; font-weight: bold; margin-bottom: 8px; }
    .hmr { color: #4ade80; }
    .log { color: #94a3b8; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">⚡ Browser Console HMR Output</div>
    <div class="hmr">[vite] hmr update /src/components/Button.tsx</div>
    <div class="log">[vite] hot updated: /src/components/Button.tsx (in 24ms)</div>
    <br/>
    <div class="hmr">[vite] hmr update /src/styles/main.css</div>
    <div class="log">[vite] css hot update: /src/styles/main.css (in 8ms)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Preserving Form State with HMR',
        km: 'ការរក្សាទុក Form State ជាមួយ HMR'
      },
      description: {
        en: 'Imagine filling out a 10-field checkout form and adjusting button CSS. With HMR, the button updates instantly while your typed input fields stay filled!',
        km: 'សាកស្រមៃថាអ្នកបំពេញ Form 10 ប្រឡោះ រួចកែប្រែ CSS ប៊ូតុង។ ជាមួយ HMR ប៊ូតុងផ្លាស់ប្តូរពណ៌ភ្លាមៗ ខណៈអត្ថបទដែលអ្នកបានវាយក្នុង Form នៅតែរក្សាទុកដដែល! '
      }
    },
    practiceExercise: {
      question: {
        en: 'What protocol do Vite and Webpack dev servers use to communicate code changes to the browser instantly?',
        km: 'តើ Protocol អ្វីដែល Dev Server ប្រើប្រាស់ដើម្បីផ្ញើការកែប្រែកូដទៅ Browser ភ្លាមៗ?'
      },
      solution: 'WebSockets (ws:// or wss://)'
    },
    quizQuestions: [
      {
        id: 'q-vite-5-1-1',
        question: {
          en: 'What is the main advantage of Hot Module Replacement (HMR) over a full page refresh?',
          km: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃ HMR ប្រៀបធៀបនឹងការធ្វើ Full Page Refresh?'
        },
        options: [
          { id: '1', text: { en: 'It updates updated component code instantly while preserving current application state', km: 'វាអាប់ដេតកូដ Component ភ្លាមៗដោយរក្សាទុក State បច្ចុប្បន្នរបស់ App' }, isCorrect: true },
          { id: '2', text: { en: 'It formats database tables automatically', km: 'វាកំណត់ រចនាសម្ព័ន្ធ Database' }, isCorrect: false },
          { id: '3', text: { en: 'It reloads the operating system', km: 'វាបើក កុំព្យូទ័រឡើងវិញ' }, isCorrect: false }
        ],
        explanation: {
          en: 'HMR replaces only changed modules in runtime memory without wiping page component state or triggering full document reloads.',
          km: 'HMR ផ្លាស់ប្តូរតែ Module ណាដែលកែប្រែ ដោយមិនបាត់បង់ State ឡើយ។'
        }
      }
    ]
  },
  {
    id: 'vite-l16',
    slug: 'environment-variables-env',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: {
      en: '5.2 Environment Variables (`.env`, `import.meta.env` vs `process.env`)',
      km: '5.2 ការប្រើប្រាស់ Environment Variables (`.env`, `import.meta.env` និង `process.env`)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Modern applications isolate secrets, API URLs, and configuration flags inside `.env` root files. Vite exposes client environment variables via `import.meta.env.VITE_*`. In contrast, Webpack typically requires `process.env.*` combined with `DefinePlugin` or `dotenv-webpack`.',
      km: 'កម្មវិធីទំនើបតែងបំបែក API URLs, Keys, និង Flags ផ្សេងៗក្នុងឯកសារ `.env` នៅ Root Folder។ Vite បញ្ចេញ client variables តាមរយៈ `import.meta.env.VITE_*`។ ផ្ទុយទៅវិញ Webpack ជាទូទៅប្រើប្រាស់ `process.env.*` អមជាមួយ `DefinePlugin` ឬ `dotenv-webpack`។'
    },
    tutorial: {
      en: '- Vite Convention:\n  Create `.env`: `VITE_API_URL=https://api.example.com`\n  Access in JS: `console.log(import.meta.env.VITE_API_URL);` (Prefix `VITE_` is mandatory to prevent leaking server secrets!)\n- Webpack Convention:\n  Requires `dotenv-webpack` plugin or `DefinePlugin` to inject `process.env.REACT_APP_API_URL` during build.',
      km: '- គោលការណ៍ Vite:\n  បង្កើត `.env`: `VITE_API_URL=https://api.example.com`\n  ប្រើក្នុង JS: `console.log(import.meta.env.VITE_API_URL);` (ពាក្យបុព្វបទ `VITE_` គឺចាំបាច់ ដើម្បីការពារការ Leak Secret!)\n- គោលការណ៍ Webpack:\n  ទាមទារ `dotenv-webpack` plugin ឬ `DefinePlugin` ដើម្បីបញ្ជូន `process.env.REACT_APP_API_URL`។'
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
    .env { color: #38bdf8; }
    .code { color: #facc15; }
    .warn { color: #f43f5e; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">🔐 Environment Variable Injection</div>
    <div class="env">
# .env file
VITE_API_URL=https://api.myshop.com
SECRET_DB_PASS=123456  <-- NOT prefixed with VITE_, kept secret on server!
    </div>
    <br/>
    <div class="code">
// src/api.js in Vite
const url = import.meta.env.VITE_API_URL; // "https://api.myshop.com"
const pass = import.meta.env.SECRET_DB_PASS; // undefined (Protected!)
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'The Security Mandatory VITE_ Prefix',
        km: 'បុព្វបទ VITE_ ការពារសុវត្ថិភាព'
      },
      description: {
        en: 'Vite intentionally ignores variables in `.env` that do not start with `VITE_` when bundling browser code. This prevents accidentally leaking private database credentials into public client JavaScript bundles.',
        km: 'Vite មើលរំលង Variables ណាដែលគ្មាន `VITE_` នៅពីមុខដោយចេតនា ដើម្បីការពារកុំឱ្យបែកធ្លាយ Database Password ចូលទៅក្នុង Client JavaScript។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What prefix must client-side environment variables have in a Vite project?',
        km: 'តើ Environment Variables សម្រាប់ Client-side ក្នុង Vite ត្រូវតែមានបុព្វបទ (Prefix) អ្វី?'
      },
      solution: 'VITE_ (e.g. VITE_BACKEND_URL)'
    },
    quizQuestions: [
      {
        id: 'q-vite-5-2-1',
        question: {
          en: 'How do you access client-exposed environment variables in Vite code?',
          km: 'តើអ្នកចូលទៅប្រើប្រាស់ Environment variables ក្នុង Vite តាមរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'import.meta.env.VITE_MY_VARIABLE', km: 'import.meta.env.VITE_MY_VARIABLE' }, isCorrect: true },
          { id: '2', text: { en: 'window.process.env.MY_VARIABLE', km: 'window.process.env.MY_VARIABLE' }, isCorrect: false },
          { id: '3', text: { en: 'document.getEnvironmentVariable()', km: 'document.getEnvironmentVariable()' }, isCorrect: false }
        ],
        explanation: {
          en: 'Vite attaches exposed client variables (`VITE_*`) onto the standard ESM `import.meta.env` object.',
          km: 'Vite បង្ហាញ client variables តាមរយៈ `import.meta.env.VITE_*`។'
        }
      }
    ]
  },
  {
    id: 'vite-l17',
    slug: 'api-proxying-dev-server',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: {
      en: '5.3 Proxying API Requests During Development (`server.proxy`)',
      km: '5.3 ការកំណត់ API Proxy លើ Dev Server ដើម្បីដោះស្រាយ CORS'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'During development, frontend single-page apps run on local dev server ports (e.g., `http://localhost:5173`), while backend APIs run on different ports (e.g., `http://localhost:8080`). Browsers block fetch requests across different ports due to CORS rules. Dev server proxying redirects `/api` requests seamlessly under the hood to bypass CORS locally.',
      km: 'ពេលសរសេរកូដ Frontend App រត់លើ Port (ឧទាហរណ៍ `http://localhost:5173`) រីឯ Backend API រត់លើ Port ផ្សេង (ឧទាហរណ៍ `http://localhost:8080`)។ Browser នឹងបិទ (Block) ការទាញទិន្នន័យឆ្លង Port តាមច្បាប់ CORS។ ការកំណត់ API Proxy លើ Dev Server ជួយបញ្ជូន Request `/api` ទៅកាន់ Backend โดยស្វ័យប្រវត្តិដើម្បីដោះស្រាយ CORS លកល (Locally)។'
    },
    tutorial: {
      en: '- Vite Config Proxy:\n```ts\nexport default defineConfig({\n  server: {\n    proxy: {\n      "/api": {\n        target: "http://localhost:8080",\n        changeOrigin: true\n      }\n    }\n  }\n});\n```\n- In Frontend JS: `fetch("/api/users")` -> Dev server automatically proxies to `http://localhost:8080/api/users` without CORS errors!',
      km: '- កូដ Vite Config Proxy:\n```ts\nexport default defineConfig({\n  server: {\n    proxy: {\n      "/api": {\n        target: "http://localhost:8080",\n        changeOrigin: true\n      }\n    }\n  }\n});\n```\n- ក្នុង Frontend JS: `fetch("/api/users")` -> Dev server បញ្ជូនបន្តទៅ `http://localhost:8080/api/users` ដោយគ្មាន CORS error!'
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
    .proxy { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">🌐 API Proxy Server Workflow</div>
    <div class="code">Browser: fetch('/api/products') [Port 5173]</div>
    <div class="proxy">  ↳ Vite Dev Server intercepts request!</div>
    <div class="proxy">  ↳ Proxies to http://localhost:8080/api/products</div>
    <div class="code">  ↳ Returns backend response without CORS block!</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Bypassing Local Origin Mismatches',
        km: 'ការដោះស្រាយបញ្ហា Origin មិនដូចគ្នាលើ Local'
      },
      description: {
        en: 'Without a proxy, requesting `http://localhost:8080` from `http://localhost:5173` triggers a CORS preflight options error unless the backend adds permissive CORS headers.',
        km: 'បើគ្មាន proxy ទេ ការ fetch ឆ្លង port នឹងជាប់ CORS error។ Dev Server proxy ដើរតួជាកណ្តាលជួយទាញទិន្នន័យមកឱ្យ Frontend។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which configuration block inside `vite.config.ts` handles dev server request proxying?',
        km: 'តើ Configuration block មួយណា ក្នុង `vite.config.ts` សម្រាប់ចាត់ចែង Request proxying?'
      },
      solution: 'server.proxy (e.g. server: { proxy: { "/api": "http://localhost:8080" } })'
    },
    quizQuestions: [
      {
        id: 'q-vite-5-3-1',
        question: {
          en: 'Why do developers configure dev server proxies during local development?',
          km: 'ហេតុអ្វីបានជាអ្នកអភិវឌ្ឍន៍កំណត់ Dev server proxies ពេលសរសេរកូដលើ Local?'
        },
        options: [
          { id: '1', text: { en: 'To avoid browser CORS errors caused by origin/port mismatches between dev server and backend API', km: 'ដើម្បីចៀសវាង CORS errors ដោយសារតែការខុស Port រវាង Dev server និង Backend API' }, isCorrect: true },
          { id: '2', text: { en: 'To speed up Git commits', km: 'ដើម្បី ពន្លឿន Git commits' }, isCorrect: false },
          { id: '3', text: { en: 'To minify HTML code', km: 'ដើម្បី បង្រួមទំហំ HTML' }, isCorrect: false }
        ],
        explanation: {
          en: 'Proxies forward requests server-to-server locally, hiding port differences from the browser origin check.',
          km: 'Proxies ផ្ញើ request ពី server ទៅ server លើ local ដែលជួយរំលង CORS check របស់ Browser។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 6: Vite vs. Webpack: Choosing & Comparing
  // ==========================================
  {
    id: 'vite-l18',
    slug: 'architectural-comparison',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: {
      en: '6.1 High-Level Architectural Similarities',
      km: '6.1 ចំណុចដូចគ្នា និងគោលដៅរួមរវាង Vite និង Webpack'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Despite structural differences, Vite and Webpack share the exact same core responsibility: transforming raw developer source code (TypeScript, JSX, SCSS, SVG) into optimized, minified static bundles (HTML, JS, CSS) suitable for web browsers.',
      km: 'ទោះបីជាមានភាពខុសគ្នាក្នុងរបៀបរត់ក៏ដោយ Vite និង Webpack មានតួនាទី និងគោលដៅរួមដូចគ្នាទាំងស្រុង គឺ៖ ការបំលែងកូដដើមរបស់អ្នកអភិវឌ្ឍន៍ (TypeScript, JSX, SCSS, SVG) ឱ្យទៅជា Static Files (HTML, JS, CSS) ដែលមានទំហំតូច លឿន និងសុវត្ថិភាព សម្រាប់ Browser ដំណើរការ។'
    },
    tutorial: {
      en: 'Both tools support:\n1. Module resolution and import parsing.\n2. Asset hashing for cache busting.\n3. Environment variable injection.\n4. Hot Module Replacement (HMR) during dev.\n5. Minification and tree-shaking for production builds.',
      km: 'ឧបករណ៍ទាំងពីរគាំទ្រ ៖\n1. ការអាន និងតភ្ជាប់ Import Modules។\n2. ការដាក់ Asset Hashes ការពារ Cache។\n3. ការប្រើប្រាស់ Environment variables (`.env`)។\n4. ប្រព័ន្ធ Hot Module Replacement (HMR) ពេល Dev។\n5. ការបង្រួមទំហំ (Minification) និង Tree-shaking ពេល Build Production។'
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
    .row { display: flex; justify-content: space-between; margin-top: 8px; padding: 6px; background: #0f172a; border-radius: 4px; }
    .label { color: #facc15; }
    .val { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">🎯 Core Shared Capabilities</div>
    <div class="row"><span class="label">Input Source:</span> <span class="val">TSX, JSX, SCSS, ESM Modules</span></div>
    <div class="row"><span class="label">Dev Experience:</span> <span class="val">Local HTTP Dev Server + HMR</span></div>
    <div class="row"><span class="label">Prod Output:</span> <span class="val">Minified Static JS/CSS in Output Folder</span></div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'The Output is Standard Web Code',
        km: 'លទ្ធផលចុងក្រោយជា Web Code ស្តង់ដារ'
      },
      description: {
        en: 'Whether a project was compiled with Vite or Webpack, the deployed end product is simply standard HTML, JS, and CSS files served by any web server.',
        km: 'មិនថា Project ប្រើប្រាស់ Vite ឬ Webpack ឡើយ លទ្ធផលចុងក្រោយនៅលើ Web Server គឺនៅតែជាឯកសារ HTML, JS, និង CSS ស្តង់ដារដដែល។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What is the common ultimate goal of both Vite and Webpack for production hosting?',
        km: 'តើអ្វីជាគោលដៅចុងក្រោយរួមគ្នារវាង Vite និង Webpack សម្រាប់ Hosting?'
      },
      solution: 'To produce optimized, minified static HTML, JS, and CSS files ready for browser execution.'
    },
    quizQuestions: [
      {
        id: 'q-vite-6-1-1',
        question: {
          en: 'Which capability is shared by both Vite and Webpack?',
          km: 'តើសមត្ថភាពមួយណាដែលស្រដៀងគ្នា រវាង Vite និង Webpack?'
        },
        options: [
          { id: '1', text: { en: 'Minifying JS assets and performing Hot Module Replacement (HMR) during dev', km: 'ការបង្រួមទំហំ JS Assets និងការផ្តល់ប្រព័ន្ធ Hot Module Replacement (HMR)' }, isCorrect: true },
          { id: '2', text: { en: 'Managing PostgreSQL database connections', km: 'គ្រប់គ្រង PostgreSQL database' }, isCorrect: false },
          { id: '3', text: { en: 'Replacing CSS with Python scripts', km: 'ជំនួស CSS ដោយ Python' }, isCorrect: false }
        ],
        explanation: {
          en: 'Both bundlers implement HMR during development and asset minification/optimization for production builds.',
          km: 'ឧបករណ៍ទាំងពីរមាន HMR ពេល Dev និង minification ពេល Build។'
        }
      }
    ]
  },
  {
    id: 'vite-l19',
    slug: 'native-esm-vs-bundle-first',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: {
      en: '6.2 Native ESM Dev Server vs. Bundle-First Approach',
      km: '6.2 ភាពខុសគ្នារវាង Native ESM Dev Server និង Bundle-First Strategy'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The key architectural difference lies in development server handling. Webpack uses a "Bundle-First" approach (bundling your entire application source before launching dev server). Vite uses a "Native ESM" approach: it serves source files over native browser `<script type="module">` directly, compiling individual files on-demand only when requested by the browser.',
      km: 'ភាពខុសគ្នាផ្នែកស្ថាបត្យកម្មដ៏សំខាន់ ស្ថិតនៅលើរបៀបរត់ Dev Server។ Webpack ប្រើវិធី "Bundle-First" (ចងបាច់កូដក្នុង Project ទាំងអស់ឱ្យរួចជាមុនសិន ទើបបើក dev server)។ រីឯ Vite ប្រើវិធី "Native ESM" (ផ្ញើ file កូដតាម browser `<script type="module">` ដោយផ្ទាល់ ហើយ compile តែ file ណាដែល browser ទាមទារប៉ុណ្ណោះ)។'
    },
    tutorial: {
      en: '- Webpack Dev Server: Entry -> Crawl all imports -> Bundle everything in memory -> Ready! (Slower in huge codebases).\n- Vite Dev Server: Ready instantly! -> Browser requests `App.tsx` -> Vite compiles ONLY `App.tsx` on the fly! (Consistently fast regardless of project size).',
      km: '- Webpack Dev Server: Entry point -> អាន Import ទាំងអស់ -> Bundle គ្រប់យ៉ាងចូល memory -> ទើប Ready! (យឺតពេល Project ធំខ្លាំង)។\n- Vite Dev Server: Ready ភ្លាមៗ! -> Browser ទាមទារ `App.tsx` -> Vite compile តែ `App.tsx` ភ្លាមៗ! (លឿនរហ័សជានិច្ច មិនខ្វល់ពីទំហំ Project)។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .title { color: #f43f5e; font-weight: bold; margin-bottom: 8px; }
    .wp { color: #38bdf8; }
    .vt { color: #bd34fe; font-weight: bold; }
    .ok { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">⚡ Development Startup Strategy</div>
    <div class="wp">Webpack: [Bundle 5,000 modules...] ⏳ Wait 25 seconds -> Dev Server Ready</div>
    <br/>
    <div class="vt">Vite: Dev Server Ready in 150ms! 🚀</div>
    <div class="ok">  ↳ Browser requests /src/App.tsx -> Vite compiles 1 module in 12ms.</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Why Large Enterprise Apps Switch to Vite',
        km: 'ហេតុអ្វី Enterprise Apps ធំៗផ្លាស់ប្តូរមកប្រើ Vite'
      },
      description: {
        en: 'In codebases with thousands of components, Webpack dev server startup can take 30+ seconds to 2 minutes. Vite boots in under 1 second because it offloads module graph tracking to the browser.',
        km: 'ក្នុង Project ធំៗដែលមាន thousands modules, Webpack អាចចំណាយពេល 30s ទៅ 2mn ដើម្បបើក server។ Vite បើកក្រោម 1s ព្រោះវាឱ្យ Browser ជាអ្នកចាត់ចែង module graph។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why does Vite dev server startup time remain fast even as project module count grows?',
        km: 'ហេតុអ្វីបានជាល្បឿនបើក Dev Server របស់ Vite នៅតែលឿន ទោះជាចំនួន Modules ក្នុង Project កើនឡើងខ្លាំង?'
      },
      solution: 'Because Vite serves files as native ES modules on-demand instead of pre-bundling the entire app upfront.'
    },
    quizQuestions: [
      {
        id: 'q-vite-6-2-1',
        question: {
          en: 'How does Vite handle file requests during development?',
          km: 'តើ Vite ចាត់ចែងការទាមទារ File ពេលសរសេរកូដ (Dev) ដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'It leverages native browser ESM to compile and transform files on-demand per HTTP request', km: 'វាប្រើប្រាស់ Native ESM របស់ Browser ដើម្បី Compile តែ File ណាដែលបាន Request ប៉ុណ្ណោះ' }, isCorrect: true },
          { id: '2', text: { en: 'It pre-bundles all dependencies and source files into one gigantic file first', km: 'វាធ្វើការ Pre-bundle គ្រប់យ៉ាងចូលជា File ធំមួយជាមុនសិន' }, isCorrect: false },
          { id: '3', text: { en: 'It converts JS code to WebAssembly', km: 'វាបំលែង JS ទៅជា WebAssembly' }, isCorrect: false }
        ],
        explanation: {
          en: 'Vite transforms source code on-demand as browser requests imported modules, avoiding upfront bundling delay.',
          km: 'Vite បំលែងកូដភ្លាមៗតាម Request របស់ Browser ដោយមិនបាច់រង់ចាំ Bundle កូដទាំងអស់ឡើយ។'
        }
      }
    ]
  },
  {
    id: 'vite-l20',
    slug: 'identifying-choosing-bundler',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: {
      en: '6.3 How to Identify & Choose the Right Bundler in Projects',
      km: '6.3 របៀបសម្គាល់ និងការជ្រើសរើស Bundler ត្រឹមត្រូវសម្រាប់ Project'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'When joining a new codebase, you can easily identify its build tool by inspecting the root directory: presence of `vite.config.ts` or `npm create vite` scripts signals Vite, while `webpack.config.js` or `react-scripts` (Create React App) signals Webpack. Today, Vite is the default recommendation for new SPAs (React, Vue, Svelte), while Webpack remains heavily used in established enterprise systems.',
      km: 'ពេលចូលរួមធ្វើការលើ Project ថ្មី អ្នកអាចសម្គាល់ Tool ដែលគេប្រើបានយ៉ាងងាយស្រួលដោយពិនិត្យមើល Root Folder ៖ វត្តមាន `vite.config.ts` បញ្ជាក់ថាប្រើ Vite រីឯវត្តមាន `webpack.config.js` ឬ `react-scripts` បញ្ជាក់ថាប្រើ Webpack។ បច្ចុប្បន្ន Vite ជម្រើសដំបូងសម្រាប់ SPAs ថ្មីៗ (React, Vue) រីឯ Webpack នៅតែដើរតួសំខាន់លើ Enterprise Projects ចាស់ៗ។'
    },
    tutorial: {
      en: '- Checking Bundler in `package.json`:\n  Look at `"devDependencies"`: `"vite"` vs `"webpack"`.\n  Look at `"scripts"`: `"dev": "vite"` vs `"build": "webpack"`.\n- Modern Ecosystem Trend:\n  Vite powers modern starter templates for React, Vue, Svelte, and SolidJS due to superior developer experience and instant HMR.',
      km: '- ការពិនិត្យមើលក្នុង `package.json` ៖\n  មើលលើ `"devDependencies"`: ឃើញ `"vite"` ឬ `"webpack"`។\n  មើលលើ `"scripts"`: ឃើញ `"dev": "vite"` ឬ `"build": "webpack"`។\n- និន្នាការបច្ចុប្បន្ន ៖\n  Vite ជាជម្រើសចម្បងនៃ Templates ទំនើបសម្រាប់ React, Vue, Svelte និង SolidJS។'
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
    .file { color: #4ade80; }
    .tag { color: #facc15; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">🔍 How to identify project build tool</div>
    <div class="file">📄 vite.config.ts        <span class="tag">=> Uses Vite!</span></div>
    <div class="file">📄 webpack.config.js     <span class="tag">=> Uses Webpack!</span></div>
    <div class="file">📄 next.config.mjs       <span class="tag">=> Uses Next.js (Turbopack/Webpack)!</span></div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Migrating from Webpack to Vite',
        km: 'ការធ្វើ Migration ពី Webpack ទៅ Vite'
      },
      description: {
        en: 'Many engineering teams migrate older React CRA/Webpack codebases to Vite to improve developer productivity, reducing local build waiting times by 90%.',
        km: 'ក្រុមអភិវឌ្ឍន៍ជាច្រើនបានធ្វើដំឡើង Migration កូដចាស់ពី Webpack ទៅ Vite ដើម្បីកាត់បន្ថយរយៈពេលរង់ចាំពេលកូដរហូតដល់ 90%។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What config file name instantly proves a repository is configured with Vite?',
        km: 'តើឈ្មោះ Config file មួយណាដែលបញ្ជាក់ភ្លាមៗថារ៉េប៉ូនោះប្រើប្រាស់ Vite?'
      },
      solution: 'vite.config.js (or vite.config.ts)'
    },
    quizQuestions: [
      {
        id: 'q-vite-6-3-1',
        question: {
          en: 'How can you quickly determine if a project is powered by Vite?',
          km: 'តើអ្នកអាចដឹងបានយ៉ាងឆាប់រហ័សដោយរបៀបណា ថាកម្មវិធីមួយពឹងផ្អែកលើ Vite?'
        },
        options: [
          { id: '1', text: { en: 'Check for `vite.config.ts` or `"vite"` in package.json scripts and devDependencies', km: 'ពិនិត្យមើលវត្តមាន `vite.config.ts` ឬពាក្យ `"vite"` ក្នុង package.json' }, isCorrect: true },
          { id: '2', text: { en: 'Inspect the background image of the website', km: 'ពិនិត្យមើល រូបភាព Background' }, isCorrect: false },
          { id: '3', text: { en: 'Look for MySQL database configuration files', km: 'ស្វែងរក MySQL config' }, isCorrect: false }
        ],
        explanation: {
          en: 'The presence of `vite.config.js/ts` or `vite` CLI commands in `package.json` identifies a Vite project.',
          km: 'វត្តមាន `vite.config.js` ឬ command `vite` ក្នុង `package.json` បញ្ជាក់ពី Vite project។'
        }
      }
    ]
  }
];
