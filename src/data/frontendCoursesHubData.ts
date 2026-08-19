import { FrontendLesson, FrontendQuizQuestion, FrontendCourse } from '../types/frontendClass';
export type { FrontendCourse };
import { HTML_COURSE_DATA } from './htmlCourseData';
import { JS_COURSE_DATA } from './jsCourseData';
import { TAILWIND_COURSE_DATA } from './tailwindCourseFullData';
import { BOOTSTRAP_COURSE_DATA } from './bootstrapCourseFullData';
import { TYPESCRIPT_COURSE_DATA } from './typescriptCourseFullData';
import { REACT_COURSE_DATA } from './reactCourseFullData';
import { VUE_COURSE_DATA } from './vueCourseFullData';
import { SASS_COURSE_DATA } from './sassCourseFullData';
import { ANGULAR_COURSE_DATA } from './angularCourseFullData';
import { NEXTJS_COURSE_DATA } from './nextjsCourseFullData';
import { SVELTE_COURSE_DATA } from './svelteCourseFullData';
import { JQUERY_COURSE_DATA } from './jqueryCourseFullData';
import { GIT_COURSE_DATA } from './gitCourseFullData';
import { NPM_COURSE_DATA } from './npmCourseFullData';
import { VITE_COURSE_DATA } from './viteCourseFullData';
import { DEVTOOLS_COURSE_DATA } from './devToolsCourseFullData';
import { A11Y_COURSE_DATA } from './a11yCourseFullData';
import { RESPONSIVE_COURSE_DATA } from './responsiveCourseFullData';
import { TESTING_COURSE_DATA } from './testingCourseFullData';

export interface FrontendCourseCategory {
  id: string;
  order: number;
  title: { en: string; km: string };
  badge: { en: string; km: string };
  description: { en: string; km: string };
}

export const FRONTEND_CATEGORIES: FrontendCourseCategory[] = [
  {
    id: 'fundamentals',
    order: 1,
    title: { en: '1. Core Fundamentals (Start Here)', km: '១. មូលដ្ឋានគ្រឹះចម្បង (ចាប់ផ្តើមនៅទីនេះ)' },
    badge: { en: 'Essential Baseline', km: 'មូលដ្ឋានខកខានមិនបាន' },
    description: { en: 'The bedrock technologies of the web. Master structural markup, visual styling, and programming logic.', km: 'បច្ចេកវិទ្យាស្នូលនៃគេហទំព័រ។ ស្ទាត់ជំនាញ HTML, CSS និង JavaScript logic។' }
  },
  {
    id: 'styling',
    order: 2,
    title: { en: '2. Styling & Design Systems', km: '២. ការឌីហ្សាញ & Design Systems' },
    badge: { en: 'Rapid UI & Scaling', km: 'ការបង្កើត UI លឿន និងទំហំធំ' },
    description: { en: 'Modern preprocessors and utility frameworks for crafting beautiful responsive user interfaces fast.', km: 'Frameworks និង Preprocessors សម្រាប់ឌីហ្សាញ UI ស្អាតបាត និងលឿនរហ័ស។' }
  },
  {
    id: 'language',
    order: 3,
    title: { en: '3. Core Language Upgrade', km: '៣. ការអាប់ដេតភាសាស្នូល' },
    badge: { en: 'Type Safety & Scale', km: 'សុវត្ថិភាព Type Safety' },
    description: { en: 'Add static type definitions to JavaScript to catch bugs early and build enterprise-grade frontend apps.', km: 'បន្ថែម static typing លើ JavaScript ដើម្បីការពារ Error និងសរសេរកូដស្តង់ដារក្រុមហ៊ុន។' }
  },
  {
    id: 'frameworks',
    order: 4,
    title: { en: '4. Frontend Frameworks & Libraries', km: '៤. Frontend Frameworks & Libraries' },
    badge: { en: 'High Demand Jobs', km: 'តម្រូវការទីផ្សារការងារខ្ពស់' },
    description: { en: 'Component-based libraries and SSR frameworks used by top tech companies worldwide.', km: 'Libraries និង Frameworks ផ្អែកលើ Components ដែលក្រុមហ៊ុនបច្ចេកវិទ្យាជុំវិញពិភពលោកកំពុងប្រើ។' }
  },
  {
    id: 'legacy',
    order: 5,
    title: { en: '5. Legacy but Still Widely Used', km: '៥. បច្ចេកវិទ្យាបុរាណដែលនៅតែប្រើយ៉ាងទូលំទូលាយ' },
    badge: { en: 'Maintenance & Migration', km: 'ការថែទាំ និង Migration' },
    description: { en: 'Understand classic libraries that still power millions of existing websites and web templates.', km: 'យល់ដឹងពី Library បុរាណដែលកំពុងដំណើការលើគេហទំព័ររាប់លានជុំវិញពិភពលោក។' }
  },
  {
    id: 'tooling',
    order: 6,
    title: { en: '6. Tooling & Real-World Workflow', km: '៦. ឧបករណ៍ & ដំណើរការការងារជាក់ស្តែង' },
    badge: { en: 'Professional Dev Skills', km: 'ជំនាញ Dev អាជីព' },
    description: { en: 'Version control, package managers, modern build tools, and Chrome DevTools debugging techniques.', km: 'Git, GitHub, npm, Vite, Webpack និងការ Debugging តាម Browser DevTools។' }
  },
  {
    id: 'quality',
    order: 7,
    title: { en: '7. Quality & Best Practices', km: '៧. គុណភាព & ស្តង់ដារល្អបំផុត' },
    badge: { en: 'Production Standard', km: 'ស្តង់ដារផលិតកម្ម' },
    description: { en: 'Web accessibility (a11y), responsive breakpoints across devices, and automated unit testing.', km: 'Web Accessibility (a11y), Responsive Design និងការសរសេរ Automated Tests។' }
  }
];

export const FRONTEND_COURSES: FrontendCourse[] = [
  // 1. HTML
  HTML_COURSE_DATA,

  // 2. CSS
  {
    id: 'css',
    title: { en: 'CSS3 Course', km: 'វគ្គសិក្សា CSS3' },
    iconName: 'css',
    categoryId: 'fundamentals',
    difficulty: 'Beginner',
    shortDescription: { en: 'Master selectors, colors, box model, Flexbox, CSS Grid, media queries, custom variables, and animations.', km: 'ស្ទាត់ជំនាញ selectors, colors, box model, Flexbox, CSS Grid, media queries និង animations។' },
    summary: { en: 'CSS (Cascading Style Sheets) styles the HTML structure with colors, typography, layout systems (Flexbox & Grid), and smooth responsive animations.', km: 'CSS ប្រើសម្រាប់តុបតែង និងរៀបចំរូបរាងគេហទំព័រ HTML ឲ្យស្អាត និងមានលក្ខណៈឆ្លើយតប។' },
    estimatedHours: 12,
    lessonCount: 18,
    cheatSheet: [
      { concept: 'Box Model', code: 'div {\n  margin: 16px;\n  border: 1px solid #ccc;\n  padding: 12px;\n  box-sizing: border-box;\n}', explanation: { en: 'Margin (outer space), Border, Padding (inner space), Content.', km: 'Box model មាន Margin, Border, Padding និង Content។' } },
      { concept: 'Flexbox Center', code: '.parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}', explanation: { en: 'Centers child elements along both main and cross axes.', km: 'កំណត់ Child Elements ឱ្យនៅចំកណ្តាល។' } },
      { concept: 'Responsive Grid', code: '.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}', explanation: { en: 'Creates fluid multi-column grid without explicit breakpoints.', km: 'បង្កើត Grid Fluid ដោយមិនបាច់សរសេរ Media Query។' } },
      { concept: 'CSS Variables', code: ':root {\n  --primary: #7c3aed;\n}\n.button {\n  background: var(--primary);\n}', explanation: { en: 'Define globally accessible color tokens and dynamic parameters.', km: 'កំណត់ CSS Variables ក្នុង :root សម្រាប់ប្រើប្រាស់ឡើងវិញ។' } }
    ],
    quiz: [
      {
        id: 'q-css-1',
        question: { en: 'Which property controls the inner spacing inside an element border?', km: 'តើ Property មួយណាដែលគ្រប់គ្រងចន្លោះខាងក្នុងនៃ Element?' },
        options: [
          { id: '1', text: { en: 'padding', km: 'padding' }, isCorrect: true },
          { id: '2', text: { en: 'margin', km: 'margin' }, isCorrect: false }
        ],
        explanation: { en: 'Padding adds space inside the border, while margin adds space outside.', km: 'Padding បន្ថែមចន្លោះខាងក្នុង Border។' }
      },
      {
        id: 'q-css-2',
        question: { en: 'How do you center an element using Flexbox?', km: 'តើធ្វើដូចម្តេចដើម្បីកំណត់ Element ឲ្យនៅចំកណ្តាលដោយប្រើ Flexbox?' },
        options: [
          { id: '1', text: { en: 'justify-content: center; align-items: center;', km: 'justify-content: center; align-items: center;' }, isCorrect: true },
          { id: '2', text: { en: 'text-align: center; margin: auto;', km: 'text-align: center; margin: auto;' }, isCorrect: false }
        ],
        explanation: { en: 'display: flex with justify-content and align-items center sets child elements in the exact center.', km: 'display: flex រួមជាមួយ justify-content និង align-items center កំណត់ឲ្យនៅចំកណ្តាល។' }
      }
    ],
    capstoneProject: {
      title: { en: 'Capstone Project: Responsive Bio Page', km: 'គម្រោង Capstone៖ រចនាទំព័រប្រវត្តិរូបផ្ទាល់ខ្លួន' },
      description: { en: 'Transform the HTML Bio Page into a modern responsive profile with custom color variables, flexbox header, grid cards, hover state transitions, and media query responsiveness.', km: 'ដេគ័រទំព័រប្រវត្តិរូបពី HTML Course ឲ្យទៅជា Profile ស្អាតបាត មានពណ៌សម្របសម្រួល, Flexbox, Grid, និង Responsive Media Queries។' },
      starterCode: {
        html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    :root {
      --primary: #7c3aed;
      --bg: #0f172a;
      --card-bg: #1e293b;
      --text: #f8fafc;
      --accent: #38bdf8;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: system-ui, sans-serif;
      padding: 20px;
      line-height: 1.6;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
    .profile-card {
      background: var(--card-bg);
      border: 1px solid #334155;
      border-radius: 20px;
      padding: 30px;
      text-align: center;
      margin-bottom: 24px;
    }
    .profile-avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      margin-bottom: 16px;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
    }
    .skill-item {
      background: var(--card-bg);
      border: 1px solid #334155;
      padding: 16px;
      border-radius: 12px;
      transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .skill-item:hover {
      transform: translateY(-4px);
      border-color: var(--primary);
    }
    .btn {
      display: inline-block;
      margin-top: 16px;
      padding: 10px 24px;
      background: var(--primary);
      color: white;
      text-decoration: none;
      border-radius: 10px;
      font-weight: bold;
      transition: background 0.2s ease;
    }
    .btn:hover {
      background: #6d28d9;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="profile-card">
      <div class="profile-avatar">👨‍💻</div>
      <h1>សុខ ជា (Sok Chea)</h1>
      <p style="color: var(--accent);">Frontend Developer & UI Specialist</p>
      <a href="#contact" class="btn">ទំនាក់ទំនងខ្ញុំ</a>
    </div>

    <h2 style="margin-bottom: 16px;">ជំនាញបច្ចេកវិទ្យា (Skills)</h2>
    <div class="skills-grid">
      <div class="skill-item">
        <h3>HTML5 & CSS3</h3>
        <p>រចនាសម្ព័ន្ធ និង Layout ឆ្លើយតប</p>
      </div>
      <div class="skill-item">
        <h3>Flexbox & Grid</h3>
        <p>រៀបចំប្លង់ស្មុគស្មាញ និងទំនើប</p>
      </div>
      <div class="skill-item">
        <h3>Responsive Design</h3>
        <p>បង្ហាញស្អាតលើ Mobile & Desktop</p>
      </div>
    </div>
  </div>
</body>
</html>`
      }
    },
    lessons: [
      {
        id: 'css-l1',
        slug: 'css-introduction',
        moduleNumber: 1,
        lessonNumberInModule: 1,
        title: { en: 'CSS Introduction', km: 'ការណែនាំអំពី CSS' },
        durationMinutes: 15,
        difficulty: 'Beginner',
        explanation: {
          en: 'CSS (Cascading Style Sheets) controls the visual representation of HTML elements—defining colors, fonts, margins, positioning, and overall aesthetic response.',
          km: 'CSS (Cascading Style Sheets) ជាភាសាដែលប្រើសម្រាប់កំណត់រូបរាងខាងក្រៅនៃធាតុ HTML — ដូចជាពណ៌ ទំហំអក្សរ គម្លាត និងទីតាំង។ បើគ្មាន CSS ទេ គេហទំព័រនឹងមានតែអត្ថបទធម្មតា គ្មានពណ៌ គ្មានប្លង់ស្អាតទេ។\n\nក្បួនសំខាន់ៗ៖\n- CSS Rule មួយមាន Selector + Declaration Block ({ property: value; })\n- អាចដាក់ CSS បាន ៣ របៀប៖ Inline, Internal, និង External File\n- ការប្រើ External CSS File គឺជាការអនុវត្តល្អបំផុតសម្រាប់គម្រោងពិតប្រាកដ'
        },
        tutorial: {
          en: '✨ Key Takeaway: CSS styles and formats HTML structure with properties and values.\n1. Inline: <h1 style="color: red;">\n2. Internal: <style> h1 { color: red; } </style>\n3. External: <link rel="stylesheet" href="style.css">',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ CSS ប្រើសម្រាប់តុបតែងរូបរាង ពណ៌ និងប្លង់នៃធាតុ HTML លើគេហទំព័រ។\n- របៀបបន្ថែម CSS៖\n  1. Inline: ប្រើ style attribute លើ HTML tag ផ្ទាល់\n  2. Internal: ប្រើ <style> tag ក្នុង <head>\n  3. External: បង្កើតឯកសារ .css ដាច់ដោយឡែក'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    h1 {
      color: #7c3aed;
      font-family: sans-serif;
    }
    p {
      color: #334155;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>សួស្តី CSS!</h1>
  <p>នេះជាកថាខណ្ឌដែលបានតុបតែងដោយ CSS។</p>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: What parts are required in a CSS rule?\nAnswer: Selector and Declaration Block (e.g. h1 { color: purple; })',
            km: 'សំណួរ៖ តើ CSS Rule មួយត្រូវការផ្នែកសំខាន់ៗអ្វីខ្លះ?\n(ចម្លើយ៖ Selector និង Declaration Block)'
          }
        },
        practiceExercise: {
          question: { en: 'Change the heading color to emerald green (#10b981).', km: 'ប្តូរពណ៌ក្បាលបទ h1 ទៅជាពណ៌បៃតង (#10b981)។' },
          solution: 'h1 { color: #10b981; }'
        },
        quizQuestions: [
          {
            id: 'css-q1',
            question: { en: 'What does CSS stand for?', km: 'តើ CSS មកពីពាក្យពេញអ្វី?' },
            options: [
              { id: 'a', text: { en: 'Cascading Style Sheets', km: 'Cascading Style Sheets' }, isCorrect: true },
              { id: 'b', text: { en: 'Creative Style System', km: 'Creative Style System' }, isCorrect: false }
            ],
            explanation: { en: 'CSS stands for Cascading Style Sheets.', km: 'CSS តំណាងឱ្យ Cascading Style Sheets។' }
          }
        ]
      },
      {
        id: 'css-l2',
        slug: 'css-syntax-selectors',
        moduleNumber: 1,
        lessonNumberInModule: 2,
        title: { en: 'CSS Syntax & Selectors', km: 'រចនាសម្ព័ន្ធ Syntax និង Selectors' },
        durationMinutes: 20,
        difficulty: 'Beginner',
        explanation: {
          en: 'Selectors target specific HTML elements to apply styles. Common selectors include Element (p), Class (.btn), ID (#hero), Universal (*), and Grouping (h1, h2).',
          km: 'Selectors ប្រើសម្រាប់ជ្រើសរើសធាតុ HTML ដែលត្រូវដាក់ Style។ Selectors ដែលប្រើយ៉ាងទូលំទូលាយមាន Element, Class, ID, Universal, និង Grouping Selectors។\n\nក្បួនសំខាន់ៗ៖\n- Class selector ផ្តើមដោយចុច (.class-name)\n- ID selector ផ្តើមដោយសញ្ញាទ្រុងជ្រូក (#id-name)\n- ID ត្រូវតែជាតម្លៃតែមួយគត់ (Unique) ក្នុងទំព័រមួយ'
        },
        tutorial: {
          en: '✨ Key Takeaway: Class selectors (.class) are reusable, while ID selectors (#id) should be unique.\nExample syntax:\n.highlight { background: yellow; }\n#main-header { font-size: 24px; }',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ Class Selector (.name) អាចប្រើឡើងវិញបានច្រើនដង ចំណែក ID Selector (#name) ប្រើបានតែ ១ ក្នុងទំព័រមួយ។'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    /* Element Selector */
    h2 { color: #2563eb; }
    /* Class Selector */
    .highlight { background-color: #fef08a; padding: 4px; border-radius: 4px; }
    /* ID Selector */
    #special-box { border: 2px dashed #7c3aed; padding: 12px; }
  </style>
</head>
<body>
  <h2> selectors ក្នុង CSS</h2>
  <p class="highlight">នេះជាអត្ថបទដែលមាន class .highlight</p>
  <div id="special-box">នេះជាប្រអប់ដែលមាន ID #special-box</div>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: Which symbol is used to define a Class Selector?\nAnswer: The dot symbol (.)',
            km: 'សំណួរ៖ តើសញ្ញាអ្វីដែលប្រើសម្រាប់ប្រកាស Class Selector?\n(ចម្លើយ៖ សញ្ញាចុច .)'
          }
        },
        practiceExercise: {
          question: { en: 'Create a class selector named .card with a background color of #f1f5f9.', km: 'បង្កើត Class Selector ឈ្មោះ .card ដែលមាន background-color: #f1f5f9។' },
          solution: '.card { background-color: #f1f5f9; }'
        },
        quizQuestions: [
          {
            id: 'css-q2',
            question: { en: 'Which selector targets elements with id="header"?', km: 'តើ Selector មួយណាសម្រាប់ជ្រើសរើស id="header"?' },
            options: [
              { id: 'a', text: { en: '#header', km: '#header' }, isCorrect: true },
              { id: 'b', text: { en: '.header', km: '.header' }, isCorrect: false }
            ],
            explanation: { en: 'IDs are targeted using the # character.', km: 'ID ត្រូវបានជ្រើសរើសដោយប្រើសញ្ញា #។' }
          }
        ]
      },
      {
        id: 'css-l3',
        slug: 'colors-and-units',
        moduleNumber: 1,
        lessonNumberInModule: 3,
        title: { en: 'Colors & Measurement Units', km: 'ពណ៌ (Colors) និងឯកតារង្វាស់' },
        durationMinutes: 20,
        difficulty: 'Beginner',
        explanation: {
          en: 'CSS supports color formats like HEX (#7c3aed), RGB (rgb(124, 58, 237)), and HSL. Units are divided into Absolute (px) and Relative (%, rem, em, vw, vh).',
          km: 'CSS គាំទ្រការកំណត់ពណ៌តាម HEX, RGB, HSL និងឈ្មោះពណ៌។ ឯកតារង្វាស់ចែកជា ពីរ៖ Absolute (px) និង Relative (%, rem, em, vw, vh)។\n\nក្បួនសំខាន់ៗ៖\n- px ជាឯកតាថេរ (Static)\n- rem គិតធៀបនឹង Root Font Size (16px ជាទូទៅ)\n- % គិតធៀបនឹង Container Parent'
        },
        tutorial: {
          en: '✨ Key Takeaway: Use relative units like rem and % for scalable, responsive accessibility.\n1rem = root font size (usually 16px).',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ rem ផ្អែកលើ Font size នៃ root element (<html>, ជាទូទៅ 16px) ធ្វើឲ្យវាល្អបំផុតសម្រាប់ Responsive typography។'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-size: 16px; font-family: sans-serif; }
    .title-px { font-size: 24px; color: #dc2626; }
    .title-rem { font-size: 1.5rem; color: rgb(37, 99, 235); }
    .box-pct { width: 80%; background-color: #f3e8ff; padding: 1rem; border-radius: 8px; }
  </style>
</head>
<body>
  <h2 class="title-px">អក្សរទំហំ 24px (Absolute)</h2>
  <h2 class="title-rem">អក្សរទំហំ 1.5rem (Relative)</h2>
  <div class="box-pct">ប្រអប់ដែលមានទំហំ width 80% នៃទំព័រ</div>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: How many pixels is 2rem if the root font size is 16px?\nAnswer: 32px (2 * 16px)',
            km: 'សំណួរ៖ បើ Root font-size ស្មើ 16px តើ 2rem ស្មើប៉ុន្មាន px?\n(ចម្លើយ៖ 32px)'
          }
        },
        practiceExercise: {
          question: { en: 'Set a container background color using RGB: rgb(15, 23, 42).', km: 'កំណត់ background-color នៃ container ដោយប្រើ RGB: rgb(15, 23, 42)។' },
          solution: 'background-color: rgb(15, 23, 42);'
        },
        quizQuestions: [
          {
            id: 'css-q3',
            question: { en: 'Which unit is relative to the root element font size?', km: 'តើឯកតាមួយណាដែលគិតធៀបនឹង Root Element?' },
            options: [
              { id: 'a', text: { en: 'rem', km: 'rem' }, isCorrect: true },
              { id: 'b', text: { en: 'px', km: 'px' }, isCorrect: false }
            ],
            explanation: { en: 'rem stands for root em and scales relative to root font size.', km: 'rem គិតធៀបនឹងទំហំ Font នៃ Root Element (<html>)។' }
          }
        ]
      },
      {
        id: 'css-l4',
        slug: 'css-box-model',
        moduleNumber: 2,
        lessonNumberInModule: 1,
        title: { en: 'CSS Box Model', km: 'Box Model (Content, Padding, Border, Margin)' },
        durationMinutes: 25,
        difficulty: 'Beginner',
        explanation: {
          en: 'Every element in CSS is a box consisting of Content, Padding (inner space), Border, and Margin (outer space). Always set box-sizing: border-box.',
          km: 'រាល់ Element ក្នុង CSS សុទ្ធតែជាប្រអប់ (Box) ដែលមាន ៤ ស្រទាប់៖ Content (មាតិកា), Padding (ចន្លោះខាងក្នុង), Border (ព្រំប្រទល់), និង Margin (ចន្លោះខាងក្រៅ)។\n\nក្បួនសំខាន់ៗ៖\n- Padding បន្ថែមចន្លោះរវាងមាតិកា និង Border\n- Margin បន្ថែមចន្លោះរវាង Element ទៅកាន់ Element ផ្សេងទៀត\n- box-sizing: border-box រួមបញ្ចូល padding និង border ក្នុង width/height សរុប'
        },
        tutorial: {
          en: '✨ Key Takeaway: Always declare `box-sizing: border-box` to prevent padding/border from widening elements beyond specified dimensions.',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ ប្រើ `box-sizing: border-box;` ជានិច្ច ដើម្បីការពារ padding និង border មិនឲ្យបន្ថែមលើ width និង height សរុបនៃ element។'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    * { box-sizing: border-box; }
    .box {
      width: 250px;
      padding: 20px;
      border: 4px solid #7c3aed;
      margin: 16px 0;
      background-color: #f8fafc;
      border-radius: 12px;
    }
  </style>
</head>
<body>
  <div class="box">
    <h3>Box Model Example</h3>
    <p>មាន Padding 20px, Border 4px, និង Margin 16px។</p>
  </div>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: Which Box Model layer creates spacing outside the border?\nAnswer: Margin',
            km: 'សំណួរ៖ តើស្រទាប់ Box Model មួយណាដែលបង្កើតចន្លោះខាងក្រៅ Border?\n(ចម្លើយ៖ Margin)'
          }
        },
        practiceExercise: {
          question: { en: 'Add a margin of 24px around a .card component.', km: 'បន្ថែម Margin 24px ជុំវិញ .card component។' },
          solution: '.card { margin: 24px; }'
        },
        quizQuestions: [
          {
            id: 'css-q4',
            question: { en: 'What does box-sizing: border-box do?', km: 'តើ box-sizing: border-box មានតួនាទីអ្វី?' },
            options: [
              { id: 'a', text: { en: 'Includes padding and border in element width/height', km: 'រួមបញ្ចូល padding និង border ក្នុងទំហំ width/height សរុប' }, isCorrect: true },
              { id: 'b', text: { en: 'Adds extra margin automatically', km: 'បន្ថែម margin ដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
            ],
            explanation: { en: 'border-box forces total width to include padding and border.', km: 'border-box ធ្វើឲ្យទំហំសរុបរួមបញ្ចូលទាំង padding និង border។' }
          }
        ]
      },
      {
        id: 'css-l5',
        slug: 'text-and-font-styling',
        moduleNumber: 2,
        lessonNumberInModule: 2,
        title: { en: 'Text & Font Styling', km: 'Text & Font Styling' },
        durationMinutes: 20,
        difficulty: 'Beginner',
        explanation: {
          en: 'Style text using font-family, font-size, font-weight, line-height, text-align, text-transform, and letter-spacing for clean typography.',
          km: 'ការកំណត់ស្ទីលអក្សរជួយឲ្យគេហទំព័រងាយស្រួលអាន និងមានសោភ័ណភាព។ ប្រើប្រាស់ Properties ដូចជា font-family, font-size, font-weight, line-height, និង text-align។\n\nក្បួនសំខាន់ៗ៖\n- line-height គួរតែចន្លោះពី 1.5 ទៅ 1.7 សម្រាប់អត្ថបទធម្មតា\n- ប្រើ System Font Fallbacks ដូចជា system-ui, sans-serif'
        },
        tutorial: {
          en: '✨ Key Takeaway: Clean readable typography relies on adequate line height and contrast.\nExample properties:\nfont-weight: 700; line-height: 1.6; text-align: center;',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ line-height (ឧទាហរណ៍ 1.5 ឬ 1.6) ជួយឲ្យអត្ថបទងាយស្រួលអាន មិនចង្អៀតភ្នែក។'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body {
      font-family: system-ui, sans-serif;
      line-height: 1.6;
      color: #1e293b;
    }
    .heading {
      font-size: 2rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #0284c7;
    }
    .subtext {
      font-style: italic;
      color: #64748b;
    }
  </style>
</head>
<body>
  <h1 class="heading">អក្សររចនាស្អាតបាត</h1>
  <p class="subtext">ការកំណត់ line-height 1.6 ធ្វើឲ្យកថាខណ្ឌអានស្រួល។</p>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: Which property aligns text to the center?\nAnswer: text-align: center;',
            km: 'សំណួរ៖ តើ Property មួយណាសម្រាប់តម្រឹមអក្សរឲ្យនៅចំកណ្តាល?\n(ចម្លើយ៖ text-align: center;)'
          }
        },
        practiceExercise: {
          question: { en: 'Make paragraph text bold and centered.', km: 'កំណត់អត្ថបទកថាខណ្ឌឲ្យដិត (bold) និងនៅចំកណ្តាល។' },
          solution: 'p { font-weight: bold; text-align: center; }'
        },
        quizQuestions: [
          {
            id: 'css-q5',
            question: { en: 'Which property sets line spacing in text?', km: 'តើ Property មួយណាសម្រាប់កំណត់គម្លាតបន្ទាត់អក្សរ?' },
            options: [
              { id: 'a', text: { en: 'line-height', km: 'line-height' }, isCorrect: true },
              { id: 'b', text: { en: 'letter-spacing', km: 'letter-spacing' }, isCorrect: false }
            ],
            explanation: { en: 'line-height controls vertical line height.', km: 'line-height កំណត់គម្លាតជួរដេកនៃអត្ថបទ។' }
          }
        ]
      },
      {
        id: 'css-l6',
        slug: 'backgrounds-and-borders',
        moduleNumber: 2,
        lessonNumberInModule: 3,
        title: { en: 'Backgrounds & Borders', km: 'Backgrounds & Borders' },
        durationMinutes: 20,
        difficulty: 'Beginner',
        explanation: {
          en: 'Backgrounds and borders elevate visual design. Learn background-color, linear gradients, border-radius, and subtle box-shadow effects.',
          km: 'Background និង Border ជួយបង្កើនភាពទាក់ទាញនៃ UI។ អ្នកអាចប្រើ background-color, linear-gradient, border-radius, និង box-shadow។\n\nក្បួនសំខាន់ៗ៖\n- border-radius: 50% បង្កើតរូបភាព ឬប្រអប់មូលក្លំ\n- box-shadow: horizontal vertical blur spread color'
        },
        tutorial: {
          en: '✨ Key Takeaway: Combine border-radius and box-shadow for modern elevated card designs.',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ border-radius ប្រើបង្កើតជ្រុងមូល និងរង្វង់ (border-radius: 50%)។'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    .card {
      background: linear-gradient(135deg, #4f46e5, #06b6d4);
      color: white;
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
    }
    .badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.2);
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">Gradient Card</span>
    <h2>កាតដែលមាន Shadow & Gradient</h2>
  </div>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: How do you make a square div completely round?\nAnswer: Set border-radius: 50%;',
            km: 'សំណួរ៖ តើធ្វើដូចម្តេចដើម្បីធ្វើឲ្យ div រាងចតុកោណកែងស្មើក្លាយជារង្វង់មូល?\n(ចម្លើយ៖ border-radius: 50%;)'
          }
        },
        practiceExercise: {
          question: { en: 'Add a 2px solid blue border to a div element.', km: 'បន្ថែម Border ទំហំ 2px solid ពណ៌ខៀវលើ div។' },
          solution: 'div { border: 2px solid blue; }'
        },
        quizQuestions: [
          {
            id: 'css-q6',
            question: { en: 'Which property adds shadow behind an element?', km: 'តើ Property មួយណាសម្រាប់បន្ថែមស្រមោលលើ Element?' },
            options: [
              { id: 'a', text: { en: 'box-shadow', km: 'box-shadow' }, isCorrect: true },
              { id: 'b', text: { en: 'text-shadow', km: 'text-shadow' }, isCorrect: false }
            ],
            explanation: { en: 'box-shadow creates outer/inner shadows on boxes.', km: 'box-shadow បង្កើតស្រមោលលើប្រអប់ Element។' }
          }
        ]
      },
      {
        id: 'css-l7',
        slug: 'display-property-and-margin',
        moduleNumber: 2,
        lessonNumberInModule: 4,
        title: { en: 'Margin, Padding & Display Property', km: 'Margin, Padding, និង Display Property' },
        durationMinutes: 20,
        difficulty: 'Beginner',
        explanation: {
          en: 'The display property determines how an element behaves in the flow: block (full width), inline (content width), inline-block (inline with block powers), or none.',
          km: 'Display property កំណត់របៀបដែល Element បង្ហាញក្នុងទំព័រ៖ block, inline, inline-block, ឬ none។\n\nក្បួនសំខាន់ៗ៖\n- block: យកទំហំពេញជួរដេក (100% width)\n- inline: យកទំហំល្មមតាមមាតិកា មិនអាចកំណត់ width/height បានឡើយ\n- inline-block: នៅលើជួរដេកតែមួយ ប៉ុន្តែអាចកំណត់ width/height បាន'
        },
        tutorial: {
          en: '✨ Key Takeaway: Use display: inline-block for custom styled buttons that sit side-by-side.',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ display: inline-block អនុញ្ញាតឲ្យធាតុនៅលើជួរតែមួយ (inline) ប៉ុន្តែអាចកំណត់ width, height, margin និង padding បាន។'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    .block-elem { background: #fee2e2; padding: 10px; margin-bottom: 8px; display: block; }
    .inline-elem { background: #dbeafe; padding: 6px; display: inline; }
    .inline-block-btn {
      display: inline-block;
      background: #16a34a;
      color: white;
      padding: 10px 18px;
      border-radius: 8px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="block-elem">Block Element (ពេញ 100% width)</div>
  <span class="inline-elem">Inline 1</span>
  <span class="inline-elem">Inline 2</span>
  <br>
  <a href="#" class="inline-block-btn">Button (Inline-Block)</a>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: What display value hides an element completely from the document flow?\nAnswer: display: none;',
            km: 'សំណួរ៖ តើតម្លៃ display មួយណាដែលលាក់ Element ទាំងស្រុងពីទំព័រ?\n(ចម្លើយ៖ display: none;)'
          }
        },
        practiceExercise: {
          question: { en: 'Convert span tags to display as block elements.', km: 'កែប្រែ span tags ឲ្យបង្ហាញជា block elements។' },
          solution: 'span { display: block; }'
        },
        quizQuestions: [
          {
            id: 'css-q7',
            question: { en: 'Which display value allows setting width/height while staying inline?', km: 'តើតម្លៃ display មួយណាដែលនៅជួរជាមួយគ្នា ប៉ុន្តែអាចកំណត់ width/height បាន?' },
            options: [
              { id: 'a', text: { en: 'inline-block', km: 'inline-block' }, isCorrect: true },
              { id: 'b', text: { en: 'block', km: 'block' }, isCorrect: false }
            ],
            explanation: { en: 'inline-block flows inline while respecting box model width and height.', km: 'inline-block នៅលើជួរតែមួយ ហើយគោរពទំហំ width/height។' }
          }
        ]
      },
      {
        id: 'css-l8',
        slug: 'positioning-elements',
        moduleNumber: 3,
        lessonNumberInModule: 1,
        title: { en: 'Positioning Elements', km: 'Positioning (static, relative, absolute, fixed, sticky)' },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        explanation: {
          en: 'Control layout positions with static (default), relative (offset relative to self), absolute (relative to nearest positioned ancestor), fixed (relative to viewport), and sticky.',
          km: 'Positioning អនុញ្ញាតឲ្យដាក់ Element នៅទីតាំងជាក់លាក់លើអេក្រង់។ តម្លៃសំខាន់ៗមាន static, relative, absolute, fixed, និង sticky។\n\nក្បួនសំខាន់ៗ៖\n- absolute positioning ត្រូវការ parent ដែលមាន position: relative\n- fixed positioning នៅស្ងៀមមួយកន្លែងពេល scroll ទំព័រ\n- z-index កំណត់ស្រទាប់លើ/ក្រោម'
        },
        tutorial: {
          en: '✨ Key Takeaway: Position relative on the parent container provides the coordinate anchor for absolute children.',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ absolute positioning តម្រូវឲ្យ parent element មាន position: relative ដើម្បីកំណត់ទីតាំងធៀបនឹង parent នោះ។'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    .parent {
      position: relative;
      width: 300px;
      height: 160px;
      background-color: #f1f5f9;
      border: 2px solid #94a3b8;
      border-radius: 12px;
      padding: 12px;
    }
    .badge-abs {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #ef4444;
      color: white;
      padding: 4px 10px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="parent">
    <h3>ប្រអប់ Parent (Relative)</h3>
    <span class="badge-abs">New Badge (Absolute)</span>
  </div>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: Which position value keeps a navigation bar fixed at the top during scrolling?\nAnswer: position: fixed; or position: sticky; top: 0;',
            km: 'សំណួរ៖ តើ Position មួយណាដែលធ្វើឲ្យ Navbar នៅជាប់ខាងលើរហូតពេល scroll?\n(ចម្លើយ៖ fixed ឬ sticky; top: 0;)'
          }
        },
        practiceExercise: {
          question: { en: 'Set absolute positioning with top: 0 and right: 0.', km: 'កំណត់ absolute positioning ជាមួយ top: 0 និង right: 0។' },
          solution: 'position: absolute; top: 0; right: 0;'
        },
        quizQuestions: [
          {
            id: 'css-q8',
            question: { en: 'Which position value positions relative to the browser viewport?', km: 'តើ Position មួយណាដែលកំណត់ទីតាំងធៀបនឹង Browser Viewport?' },
            options: [
              { id: 'a', text: { en: 'fixed', km: 'fixed' }, isCorrect: true },
              { id: 'b', text: { en: 'relative', km: 'relative' }, isCorrect: false }
            ],
            explanation: { en: 'fixed elements remain locked relative to viewport during scrolling.', km: 'fixed រក្សាទីតាំងស្ងៀមធៀបនឹង Viewport។' }
          }
        ]
      },
      {
        id: 'css-l9',
        slug: 'flexbox-layout-system',
        moduleNumber: 3,
        lessonNumberInModule: 2,
        title: { en: 'Flexbox Layout System', km: 'Flexbox Layout System' },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        explanation: {
          en: 'Flexbox (Flexible Box) provides a 1D layout model for distributing space and aligning items along main and cross axes cleanly.',
          km: 'Flexbox ជាប្រព័ន្ធ Layout ជួរដេក ឬជួរឈរ (1D) ដែលជួយតម្រឹម Element ឲ្យស្មើ និងបត់បែនតាមទំហំអេក្រង់។\n\nក្បួនសំខាន់ៗ៖\n- display: flex កំណត់ Container ឲ្យជា Flex Container\n- justify-content កំណត់ alignment តាម Main Axis (horizontally)\n- align-items កំណត់ alignment តាម Cross Axis (vertically)\n- flex-direction: row | column'
        },
        tutorial: {
          en: '✨ Key Takeaway: Center any element perfectly using `display: flex; justify-content: center; align-items: center;`.',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ display: flex + justify-content: center + align-items: center គឺជាវិធីងាយបំផុតក្នុងការកំណត់ element ឲ្យនៅចំកណ្តាល។'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    .flex-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #0f172a;
      padding: 16px;
      border-radius: 12px;
      color: white;
    }
    .item {
      background-color: #3b82f6;
      padding: 10px 16px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: Which Flexbox property distributes items evenly with equal space between them?\nAnswer: justify-content: space-between;',
            km: 'សំណួរ៖ តើ Flexbox Property មួយណាសម្រាប់បែងចែកចន្លោះស្មើៗគ្នារវាង Items?\n(ចម្លើយ៖ justify-content: space-between;)'
          }
        },
        practiceExercise: {
          question: { en: 'Set flex container items to stack vertically in a column.', km: 'កំណត់ Flex items ឲ្យតម្រៀបជាជួរឈរ (Column)។' },
          solution: 'flex-direction: column;'
        },
        quizQuestions: [
          {
            id: 'css-q9',
            question: { en: 'Which property aligns Flex items along the main axis?', km: 'តើ Property មួយណាសម្រាប់តម្រឹម Flex items តាម Main Axis?' },
            options: [
              { id: 'a', text: { en: 'justify-content', km: 'justify-content' }, isCorrect: true },
              { id: 'b', text: { en: 'align-items', km: 'align-items' }, isCorrect: false }
            ],
            explanation: { en: 'justify-content aligns items along the main axis.', km: 'justify-content តម្រឹមធាតុតាម Main Axis។' }
          }
        ]
      },
      {
        id: 'css-l10',
        slug: 'css-grid-layout',
        moduleNumber: 3,
        lessonNumberInModule: 3,
        title: { en: 'CSS Grid Layout System', km: 'CSS Grid Layout System' },
        durationMinutes: 25,
        difficulty: 'Intermediate',
        explanation: {
          en: 'CSS Grid is a 2D layout engine for rows and columns. Use grid-template-columns, gap, repeat(), and fr fractional units to create modern layouts.',
          km: 'CSS Grid ជាប្រព័ន្ធរៀបចំប្លង់ ២ ជ្រុង (2D: Rows & Columns) សម្រាប់រៀបចំ Layout ស្មុគស្មាញ។\n\nក្បួនសំខាន់ៗ៖\n- display: grid ប្រកាស Grid Container\n- grid-template-columns: repeat(3, 1fr) បង្កើត ៣ ជួរឈរស្មើគ្នា\n- gap: 16px បង្កើតចន្លោះរវាងប្រអប់ Grid'
        },
        tutorial: {
          en: '✨ Key Takeaway: `repeat(auto-fit, minmax(200px, 1fr))` creates automatic responsive grid layouts without writing media queries.',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ repeat(auto-fit, minmax(200px, 1fr)) បង្កើត Grid ឆ្លើយតបស្វ័យប្រវត្ត ដោយមិនបាច់សរសេរ Media Queries!'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 12px;
    }
    .card {
      background-color: #1e293b;
      color: white;
      padding: 16px;
      border-radius: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
  </div>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: What unit represents a fraction of available space in CSS Grid?\nAnswer: fr (fractional unit)',
            km: 'សំណួរ៖ តើឯកតាអ្វីដែលតំណាងឲ្យភាគរយនៃលំហដែលនៅសល់ក្នុង CSS Grid?\n(ចម្លើយ៖ fr)'
          }
        },
        practiceExercise: {
          question: { en: 'Create a grid with 2 equal-width columns using the fr unit.', km: 'បង្កើត Grid ដែលមាន ២ Columns ស្មើគ្នាដោយប្រើ fr unit។' },
          solution: 'grid-template-columns: 1fr 1fr;'
        },
        quizQuestions: [
          {
            id: 'css-q10',
            question: { en: 'Which property creates gap spacing between grid cells?', km: 'តើ Property មួយណាសម្រាប់បង្កើតចន្លោះរវាង Grid Cells?' },
            options: [
              { id: 'a', text: { en: 'gap', km: 'gap' }, isCorrect: true },
              { id: 'b', text: { en: 'grid-margin', km: 'grid-margin' }, isCorrect: false }
            ],
            explanation: { en: 'gap specifies grid row and column spacing.', km: 'gap កំណត់ចន្លោះរវាងជួរដេក និងជួរឈរ Grid។' }
          }
        ]
      },
      {
        id: 'css-l11',
        slug: 'responsive-design-media-queries',
        moduleNumber: 4,
        lessonNumberInModule: 1,
        title: { en: 'Responsive Design & Media Queries', km: 'Responsive Design & Media Queries' },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        explanation: {
          en: 'Responsive Web Design adapts page layouts across devices (mobiles, tablets, laptops) using @media queries and flexible viewport dimensions.',
          km: 'Responsive Design អនុញ្ញាតឲ្យគេហទំព័របង្ហាញរូបរាងស្អាតលើគ្រប់ឧបករណ៍ទាំងអស់ (ទូរស័ព្ទ, Tablet, Desktop) ដោយប្រើប្រាស់ Media Queries (@media)។\n\nក្បួនសំខាន់ៗ៖\n- ត្រូវតែមាន `<meta name="viewport" content="width=device-width, initial-scale=1.0">`\n- `@media (max-width: 768px) { ... }` សម្រាប់កំណត់ Style លើអេក្រង់តូច'
        },
        tutorial: {
          en: '✨ Key Takeaway: Media queries conditionally trigger styling rules based on screen width thresholds.',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ Media Queries អនុញ្ញាតឲ្យផ្លាស់ប្តូរ Layout និង Style ទៅតាមទំហំអេក្រង់ឧបករណ៍ (Mobile, Tablet, Desktop)។'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .responsive-box {
      background-color: #2563eb;
      color: white;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
    }
    @media (max-width: 600px) {
      .responsive-box {
        background-color: #dc2626;
      }
    }
  </style>
</head>
<body>
  <div class="responsive-box">
    <h2>បង្រួមអេក្រង់ដើម្បីមើលការប្តូរពណ៌!</h2>
    <p>Desktop: ពណ៌ខៀវ | Mobile (<600px): ពណ៌ក្រហម</p>
  </div>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: What meta tag is mandatory for mobile responsive layout scaling?\nAnswer: viewport meta tag',
            km: 'សំណួរ៖ តើ Meta tag មួយណាដែលចាំបាច់បំផុតសម្រាប់ Responsive លើទូរស័ព្ទ?\n(ចម្លើយ៖ <meta name="viewport" content="width=device-width, initial-scale=1.0">)'
          }
        },
        practiceExercise: {
          question: { en: 'Write a media query for screen widths under 768px.', km: 'សរសេរ media query សម្រាប់អេក្រង់ដែលមានទំហំតូចជាង 768px។' },
          solution: '@media (max-width: 768px) { }'
        },
        quizQuestions: [
          {
            id: 'css-q11',
            question: { en: 'What CSS rule applies styles conditionally based on screen size?', km: 'តើ CSS Rule មួយណាសម្រាប់កំណត់ Style តាមទំហំអេក្រង់?' },
            options: [
              { id: 'a', text: { en: '@media', km: '@media' }, isCorrect: true },
              { id: 'b', text: { en: '@responsive', km: '@responsive' }, isCorrect: false }
            ],
            explanation: { en: '@media queries allow styling based on viewport width.', km: '@media ប្រើសម្រាប់ផ្លាស់ប្តូរ Style តាមទំហំ Viewport។' }
          }
        ]
      },
      {
        id: 'css-l12',
        slug: 'mobile-first-design',
        moduleNumber: 4,
        lessonNumberInModule: 2,
        title: { en: 'Mobile-First Design Strategy', km: 'Mobile-First Design Strategy' },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        explanation: {
          en: 'Mobile-First design writes base styles for smaller mobile viewports first, then uses min-width media queries to progressively enhance layouts on larger screens.',
          km: 'Mobile-First គឺជាយុទ្ធសាស្ត្រដែលសរសេរ Style សម្រាប់អេក្រង់ទូរស័ព្ទជាមុន រួចប្រើ `@media (min-width: 768px)` ដើម្បីបន្ថែម Layout សម្រាប់ Tablet និង Desktop។\n\nក្បួនសំខាន់ៗ៖\n- Base CSS គឺសម្រាប់ Mobile (គ្មាន Media Query)\n- ប្រើ `min-width` ជំនួសឲ្យ `max-width`'
        },
        tutorial: {
          en: '✨ Key Takeaway: Build clean single-column layouts by default, expanding to multi-column with min-width media queries.',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ សរសេរ Style សម្រាប់ Mobile ជាដំបូង រួចប្រើ `@media (min-width: 768px)` សម្រាប់ Tablet និង Desktop។'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Base Mobile Styles */
    .layout {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .col { background: #334155; color: white; padding: 16px; border-radius: 8px; }
    
    /* Desktop Enhancement */
    @media (min-width: 768px) {
      .layout {
        flex-direction: row;
      }
    }
  </style>
</head>
<body>
  <div class="layout">
    <div class="col">Column 1 (Column on mobile, Row on desktop)</div>
    <div class="col">Column 2</div>
  </div>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: What media query feature is used in Mobile-First design?\nAnswer: min-width (e.g., @media (min-width: 768px))',
            km: 'សំណួរ៖ តើ Media Query condition មួយណាដែលប្រើក្នុង Mobile-First design?\n(ចម្លើយ៖ min-width)'
          }
        },
        practiceExercise: {
          question: { en: 'Write a Mobile-First media query targeting screens 1024px and wider.', km: 'សរសេរ Mobile-First media query សម្រាប់អេក្រង់ 1024px ឬធំជាង។' },
          solution: '@media (min-width: 1024px) { }'
        },
        quizQuestions: [
          {
            id: 'css-q12',
            question: { en: 'In Mobile-First design, base CSS is written for which device?', km: 'ក្នុងយុទ្ធសាស្ត្រ Mobile-First តើ Base CSS សរសេរសម្រាប់ឧបករណ៍ណា?' },
            options: [
              { id: 'a', text: { en: 'Mobile devices', km: 'ទូរស័ព្ទដៃ (Mobile)' }, isCorrect: true },
              { id: 'b', text: { en: 'Desktop monitors', km: 'កុំព្យូទ័រ Desktop' }, isCorrect: false }
            ],
            explanation: { en: 'Mobile-first starts with mobile base styles first.', km: 'Mobile-first ចាប់ផ្តើមសរសេរ Style ពីទូរស័ព្ទជាមុន។' }
          }
        ]
      },
      {
        id: 'css-l13',
        slug: 'transitions-and-animations',
        moduleNumber: 5,
        lessonNumberInModule: 1,
        title: { en: 'Transitions & Animations', km: 'Transitions & Animations' },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        explanation: {
          en: 'CSS transitions animate property changes smoothly over time. CSS keyframes (@keyframes) create complex multi-step custom animations.',
          km: 'Transitions ជួយបង្កើតចលនារលូនរវាង State ពីរ (ដូចជា Hover លើ Button)។ Keyframes (@keyframes) បង្កើត Animation ស្មុគស្មាញច្រើនដំណាក់កាល។\n\nក្បួនសំខាន់ៗ៖\n- transition: property duration timing-function\n- @keyframes animation-name { 0% {...} 100% {...} }'
        },
        tutorial: {
          en: '✨ Key Takeaway: Transitions bridge state changes, while keyframe animations run keyframe sequences automatically.',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ transition ជួយបង្កើតឥទ្ធិពលរលូនរវាងការប្តូរ state (ដូចជាពេល :hover លើ Button)។'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    .animated-btn {
      background-color: #7c3aed;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s ease, background-color 0.2s ease;
    }
    .animated-btn:hover {
      background-color: #6d28d9;
      transform: translateY(-4px);
    }
  </style>
</head>
<body>
  <button class="animated-btn">Hover លើ Button នេះ</button>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: What property defines custom animation steps in CSS?\nAnswer: @keyframes rule',
            km: 'សំណួរ៖ តើ Rule មួយណាដែលប្រកាសដំណាក់កាលនៃ Animation ក្នុង CSS?\n(ចម្លើយ៖ @keyframes)'
          }
        },
        practiceExercise: {
          question: { en: 'Add a 0.3s ease transition for all properties.', km: 'បន្ថែម transition រយៈពេល 0.3s ease សម្រាប់គ្រប់ property។' },
          solution: 'transition: all 0.3s ease;'
        },
        quizQuestions: [
          {
            id: 'css-q13',
            question: { en: 'Which property creates smooth state change transitions in CSS?', km: 'តើ Property មួយណាសម្រាប់បង្កើតចលនាផ្លាស់ប្តូរ State រលូន?' },
            options: [
              { id: 'a', text: { en: 'transition', km: 'transition' }, isCorrect: true },
              { id: 'b', text: { en: 'transform', km: 'transform' }, isCorrect: false }
            ],
            explanation: { en: 'transition animates changes between states over a specified time.', km: 'transition បង្កើតចលនារលូនរវាង State។' }
          }
        ]
      },
      {
        id: 'css-l14',
        slug: 'pseudo-classes-and-elements',
        moduleNumber: 5,
        lessonNumberInModule: 2,
        title: { en: 'Pseudo-classes & Pseudo-elements', km: 'Pseudo-classes & Pseudo-elements' },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        explanation: {
          en: 'Pseudo-classes (:hover, :focus, :nth-child) style specific states. Pseudo-elements (::before, ::after) style specific sub-parts or insert decorative elements.',
          km: 'Pseudo-classes (:hover, :focus, :nth-child) ប្រើសម្រាប់ដាក់ Style ពេលធាតុស្ថិតក្នុង State ជាក់លាក់។ Pseudo-elements (::before, ::after) ប្រើបន្ថែមមាតិកាតុបតែង។\n\nក្បួនសំខាន់ៗ៖\n- Pseudo-class ប្រើសញ្ញាចុចពីរ (:)\n- Pseudo-element ប្រើសញ្ញាចុចពីរបួន (::)\n- ::before និង ::after ត្រូវការ `content: "";`'
        },
        tutorial: {
          en: '✨ Key Takeaway: ::before and ::after inject styled pseudo-containers without polluting HTML markup.',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ ::before និង ::after អនុញ្ញាតឲ្យបន្ថែមមាតិកាតុបតែងតាម CSS ដោយមិនបាច់បន្ថែម HTML Tag ថ្មីឡើយ។'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    .list-item {
      padding: 8px 12px;
      margin-bottom: 4px;
      border-radius: 6px;
    }
    .list-item:nth-child(odd) {
      background-color: #f1f5f9;
    }
    .badge-wrap::after {
      content: " ★";
      color: #f59e0b;
    }
  </style>
</head>
<body>
  <div class="list-item badge-wrap">Item 1 (Odd)</div>
  <div class="list-item">Item 2 (Even)</div>
  <div class="list-item badge-wrap">Item 3 (Odd)</div>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: Which pseudo-class targets every second child in a container?\nAnswer: :nth-child(even) or :nth-child(2n)',
            km: 'សំណួរ៖ តើ Pseudo-class មួយណាសម្រាប់ជ្រើសរើសធាតុជួរគូ (Even)?\n(ចម្លើយ៖ :nth-child(even))'
          }
        },
        practiceExercise: {
          question: { en: 'Style input elements when focused (:focus).', km: 'ដាក់ Style លើ Input ពេលអ្នកប្រើយក Cursor ចុចលើវា (:focus)។' },
          solution: 'input:focus { border-color: #2563eb; }'
        },
        quizQuestions: [
          {
            id: 'css-q14',
            question: { en: 'Which pseudo-element inserts content before an element?', km: 'តើ Pseudo-element មួយណាសម្រាប់បញ្ចូលមាតិកាមុន Element?' },
            options: [
              { id: 'a', text: { en: '::before', km: '::before' }, isCorrect: true },
              { id: 'b', text: { en: '::first', km: '::first' }, isCorrect: false }
            ],
            explanation: { en: '::before creates a pseudo-element before child content.', km: '::before បង្កើត Pseudo-element ខាងមុខមាតិកា។' }
          }
        ]
      },
      {
        id: 'css-l15',
        slug: 'css-variables-custom-properties',
        moduleNumber: 5,
        lessonNumberInModule: 3,
        title: { en: 'CSS Variables (Custom Properties)', km: 'CSS Variables (Custom Properties)' },
        durationMinutes: 20,
        difficulty: 'Intermediate',
        explanation: {
          en: 'CSS Variables (:root { --main-color: #3b82f6; }) store reusable design tokens like colors, gaps, and font stacks across stylesheets for easy theme switching.',
          km: 'CSS Variables អនុញ្ញាតឲ្យរក្សាទុកតម្លៃ Design Tokens (ពណ៌, Spacing, Fonts) សម្រាប់យកទៅប្រើឡើងវិញគ្រប់ទីតាំង និងងាយស្រួលប្តូរ Dark/Light Theme។\n\nក្បួនសំខាន់ៗ៖\n- ប្រកាស Variables ក្នុង `:root` សម្រាប់ Scope សកល\n- សរសេរផ្តើមដោយសញ្ញាដកពីរ `--var-name`\n- ហៅប្រើដោយមុខងារ `var(--var-name)`'
        },
        tutorial: {
          en: '✨ Key Takeaway: Centralize color palettes in `:root` variables to make site-wide re-theming effortless.',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ CSS Variables ប្រកាសក្នុង `:root` អាចយកទៅប្រើឡើងវិញគ្រប់ទីតាំង និងងាយស្រួលប្តូរ Dark/Light Mode!'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    :root {
      --primary: #0284c7;
      --bg-card: #f0f9ff;
      --text: #0c4a6e;
    }
    .var-card {
      background-color: var(--bg-card);
      color: var(--text);
      border: 2px solid var(--primary);
      padding: 20px;
      border-radius: 12px;
    }
  </style>
</head>
<body>
  <div class="var-card">
    <h2>កាតប្រើប្រាស់ CSS Variables</h2>
    <p>តម្លៃពណ៌ត្រូវបានទាញយកចេញពី :root scope។</p>
  </div>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: What function retrieves the value of a custom CSS variable?\nAnswer: var()',
            km: 'សំណួរ៖ តើ Function អ្វីដែលប្រើសម្រាប់ទាញយកតម្លៃ CSS Variable?\n(ចម្លើយ៖ var())'
          }
        },
        practiceExercise: {
          question: { en: 'Declare a custom variable --accent-color: #f59e0b in :root.', km: 'ប្រកាស Variable --accent-color: #f59e0b ក្នុង :root។' },
          solution: ':root { --accent-color: #f59e0b; }'
        },
        quizQuestions: [
          {
            id: 'css-q15',
            question: { en: 'Where are global CSS variables typically defined?', km: 'តើ CSS Variables សកល (Global) ជាទូទៅត្រូវបានប្រកាសនៅទីណា?' },
            options: [
              { id: 'a', text: { en: ':root selector', km: ':root selector' }, isCorrect: true },
              { id: 'b', text: { en: 'body tag', km: 'body tag' }, isCorrect: false }
            ],
            explanation: { en: ':root matches the document root element for global variables.', km: ':root តំណាងឱ្យ Document Root សម្រាប់ Global Variables។' }
          }
        ]
      },
      {
        id: 'css-l16',
        slug: 'css-specificity-and-cascade',
        moduleNumber: 6,
        lessonNumberInModule: 1,
        title: { en: 'CSS Specificity & Cascade', km: 'CSS Specificity & Cascade' },
        durationMinutes: 20,
        difficulty: 'Advanced',
        explanation: {
          en: 'Specificity calculates precedence when multiple CSS rules target the same element: Inline (1000) > ID (100) > Class (10) > Element (1). Avoid relying on !important.',
          km: 'Specificity គឺជាពិន្ទុអាទិភាពដែល Browser ប្រើប្រៀបធៀបពេលមាន CSS Rules ច្រើនជាន់គ្នាលើ Element តែមួយ។\n\nក្បួនសំខាន់ៗ៖\n- Inline style (1000) > ID (100) > Class/Attribute (10) > Element (1)\n- !important មានអាទិភាពខ្ពស់ដាច់គេ ប៉ុន្តែគួរជៀសវាងការប្រើផ្តេសផ្តាស'
        },
        tutorial: {
          en: '✨ Key Takeaway: Maintain scalable CSS by relying on clean single-class selector patterns rather than high-specificity overrides.',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ Specificity គឺជាពិន្ទុអាទិភាពនៃ Selector។ ជៀសវាងការប្រើ `!important` លុះត្រាតែចាំបាច់បំផុត។'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    p { color: black; } /* Element: 1 pt */
    .text-blue { color: blue; } /* Class: 10 pt */
    #text-red { color: red; } /* ID: 100 pt */
  </style>
</head>
<body>
  <!-- ID #text-red ឈ្នះ Class .text-blue ព្រោះ ID មានពិន្ទុ Specificity ខ្ពស់ជាង -->
  <p id="text-red" class="text-blue">អត្ថបទនេះនឹងមានពណ៌ក្រហម (ID Specificity)</p>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: Which selector type has higher specificity: Class (.box) or ID (#box)?\nAnswer: ID (#box) with 100 points versus Class with 10 points',
            km: 'សំណួរ៖ តើ Selector មួយណាដែលមាន Specificity ខ្ពស់ជាង៖ Class (.box) ឬ ID (#box)?\n(ចម្លើយ៖ ID #box)'
          }
        },
        practiceExercise: {
          question: { en: 'Which rule wins: p.text (11 pts) or #intro (100 pts)?', km: 'តើ Rule មួយណាឈ្នះ៖ p.text (11 ពិន្ទុ) ឬ #intro (100 ពិន្ទុ)?' },
          solution: '#intro'
        },
        quizQuestions: [
          {
            id: 'css-q16',
            question: { en: 'Which styling method has the highest specificity score?', km: 'តើវិធីសាស្រ្តដាក់ Style មួយណាដែលមានពិន្ទុអាទិភាពខ្ពស់ជាងគេ?' },
            options: [
              { id: 'a', text: { en: 'Inline style attribute', km: 'Inline style attribute (1000)' }, isCorrect: true },
              { id: 'b', text: { en: 'ID Selector', km: 'ID Selector (100)' }, isCorrect: false }
            ],
            explanation: { en: 'Inline styles hold a specificity value of 1000.', km: 'Inline style មានពិន្ទុ Specificity ខ្ពស់ដល់ 1000។' }
          }
        ]
      },
      {
        id: 'css-l17',
        slug: 'combinators-and-advanced-selectors',
        moduleNumber: 6,
        lessonNumberInModule: 2,
        title: { en: 'Combinators & Advanced Selectors', km: 'Combinators & Advanced Selectors' },
        durationMinutes: 20,
        difficulty: 'Advanced',
        explanation: {
          en: 'Combinators express relationships between selectors: Descendant (div p), Direct Child (div > p), Adjacent Sibling (h1 + p), General Sibling (h1 ~ p), and Attribute Selectors.',
          km: 'Combinators ប្រើសម្រាប់ជ្រើសរើស Element ដោយផ្អែកលើទំនាក់ទំនងរវាងវា។ រួមមាន៖ Descendant (div p), Direct Child (div > p), Adjacent Sibling (h1 + p), និង Attribute Selectors។\n\nក្បួនសំខាន់ៗ៖\n- `div > p`: ជ្រើសរើសតែ <p> ដែលជាកូនផ្ទាល់នៃ <div>\n- `input[type="text"]`: ជ្រើសរើសតាម Attribute'
        },
        tutorial: {
          en: '✨ Key Takeaway: Direct child combinator (>) scopes styling precisely to first-level child nodes.',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ `div > p` ជ្រើសរើសតែ `<p>` ដែលជាកូនផ្ទាល់ (direct child) នៃ `<div>` ប៉ុណ្ណោះ។'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    /* Direct Child Combinator */
    .parent > p { color: #16a34a; font-weight: bold; }
    /* Attribute Selector */
    input[type="text"] { border: 2px solid #3b82f6; padding: 8px; border-radius: 6px; }
  </style>
</head>
<body>
  <div class="parent">
    <p>កូនផ្ទាល់ (Direct Child) - ពណ៌បៃតង</p>
    <div>
      <p>ចៅ (Nested Child - មិនត្រូវ Selection ឡើយ)</p>
    </div>
  </div>
  <br>
  <input type="text" placeholder="Attribute Selector Text Input">
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: What symbol represents the Direct Child combinator?\nAnswer: Greater than symbol (>)',
            km: 'សំណួរ៖ តើសញ្ញាអ្វីដែលតំណាងឱ្យ Direct Child Combinator?\n(ចម្លើយ៖ សញ្ញា >)'
          }
        },
        practiceExercise: {
          question: { en: 'Target button elements with attribute disabled.', km: 'ជ្រើសរើស button elements ដែលមាន attribute disabled។' },
          solution: 'button[disabled] { opacity: 0.5; }'
        },
        quizQuestions: [
          {
            id: 'css-q17',
            question: { en: 'Which combinator targets only direct children of an element?', km: 'តើ Combinator មួយណាដែលជ្រើសរើសតែ កូនផ្ទាល់ (Direct Child)?' },
            options: [
              { id: 'a', text: { en: 'Child combinator (>)', km: 'Child combinator (>)' }, isCorrect: true },
              { id: 'b', text: { en: 'Descendant combinator (space)', km: 'Descendant combinator (space)' }, isCorrect: false }
            ],
            explanation: { en: 'The > combinator targets direct child elements.', km: 'សញ្ញា > ជ្រើសរើសតែ Direct Child ប៉ុណ្ណោះ។' }
          }
        ]
      },
      {
        id: 'css-l18',
        slug: 'capstone-project-responsive-bio-page',
        moduleNumber: 6,
        lessonNumberInModule: 3,
        title: { en: 'Capstone Project: Responsive Bio Page', km: 'គម្រោង Capstone៖ រចនាទំព័រប្រវត្តិរូបផ្ទាល់ខ្លួន' },
        durationMinutes: 45,
        difficulty: 'Advanced',
        explanation: {
          en: 'Combine everything learned in Modules 1–6 to style a complete, responsive Personal Bio Profile with custom CSS variables, Flexbox headers, Grid card layouts, hover animation states, and mobile media queries.',
          km: 'អនុវត្តរាល់ចំណេះដឹងដែលបានរៀនពី Module 1 ដល់ 6 ដើម្បីដេគ័រទំព័រប្រវត្តិរូប Personal Bio Page ឲ្យមានភាពស្អាតបាត ទំនើប ពណ៌ឆ្លើយតប និងទាក់ទាញលើគ្រប់ទំហំអេក្រង់។\n\nចំណុចសំខាន់ៗដែលត្រូវរួមបញ្ចូល៖\n- CSS Custom Variables ក្នុង :root\n- Flexbox សម្រាប់ Profile Header\n- CSS Grid សម្រាប់ Skill Cards\n- Responsive Media Queries'
        },
        tutorial: {
          en: '✨ Key Takeaway: Real-world frontend mastery comes from combining custom variables, layout engines, and responsive media queries.',
          km: '✨ ការទទួលបានចំណេះដឹងសំខាន់ៗ៖ បញ្ចប់គម្រោង Capstone នេះដោយរួមបញ្ចូលចំណេះដឹងពី Module 1 ដល់ Module 6 ទាំងអស់!'
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    :root {
      --primary: #7c3aed;
      --bg: #0f172a;
      --card-bg: #1e293b;
      --text: #f8fafc;
      --accent: #38bdf8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: system-ui, sans-serif;
      padding: 20px;
    }
    .profile-card {
      background: var(--card-bg);
      border: 1px solid #334155;
      border-radius: 20px;
      padding: 30px;
      text-align: center;
      margin-bottom: 24px;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
    }
    .skill-item {
      background: var(--card-bg);
      border: 1px solid #334155;
      padding: 16px;
      border-radius: 12px;
      transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .skill-item:hover {
      transform: translateY(-4px);
      border-color: var(--primary);
    }
  </style>
</head>
<body>
  <div class="profile-card">
    <h1>សុខ ជា (Sok Chea)</h1>
    <p style="color: var(--accent);">Frontend Developer & UI Specialist</p>
  </div>
  <div class="skills-grid">
    <div class="skill-item">
      <h3>HTML5 & CSS3</h3>
      <p>រចនាសម្ព័ន្ធ និង Layout ឆ្លើយតប</p>
    </div>
    <div class="skill-item">
      <h3>Flexbox & Grid</h3>
      <p>រៀបចំប្លង់ស្មុគស្មាញ និងទំនើប</p>
    </div>
  </div>
</body>
</html>`
        },
        realWorldExample: {
          title: { en: 'Mini Self-Check', km: '🤔 សាកល្បងខ្លួនឯង' },
          description: {
            en: 'Question: What makes a web page fully responsive?\nAnswer: Fluid layouts (Flexbox/Grid), relative units, meta viewport tag, and media queries',
            km: 'សំណួរ៖ តើអ្វីខ្លះដែលធ្វើឲ្យទំព័រ Web បង្ហាញបានឆ្លើយតប (Fully Responsive)?\n(ចម្លើយ៖ Flexbox/Grid, relative units, viewport meta tag, និង media queries)'
          }
        },
        practiceExercise: {
          question: { en: 'Add a hover state transition to the profile button.', km: 'បន្ថែម hover transition លើ Profile Button។' },
          solution: '.btn:hover { background: #6d28d9; transform: scale(1.05); }'
        },
        quizQuestions: [
          {
            id: 'css-q18',
            question: { en: 'Which layout system is best suited for 2-dimensional grid structures?', km: 'តើប្រព័ន្ធ Layout មួយណាដែលល្អបំផុតសម្រាប់រៀបចំរចនាសម្ព័ន្ធ ២D?' },
            options: [
              { id: 'a', text: { en: 'CSS Grid', km: 'CSS Grid' }, isCorrect: true },
              { id: 'b', text: { en: 'CSS Float', km: 'CSS Float' }, isCorrect: false }
            ],
            explanation: { en: 'CSS Grid is purpose-built for 2D layouts.', km: 'CSS Grid ត្រូវរចនាឡើងយ៉ាងពិសេសសម្រាប់ 2D Layouts។' }
          }
        ]
      }
    ]
  },

  // 3. JavaScript
  JS_COURSE_DATA,

  // 4. Sass / SCSS
  SASS_COURSE_DATA,

  // 5. Tailwind CSS
  TAILWIND_COURSE_DATA,

  // 6. Bootstrap 5
  BOOTSTRAP_COURSE_DATA,

  // 7. TypeScript
  TYPESCRIPT_COURSE_DATA,

  // 8. React
  REACT_COURSE_DATA,

  // 9. Vue.js
  VUE_COURSE_DATA,

  // 10. Angular
  ANGULAR_COURSE_DATA,

  // 11. Next.js
  NEXTJS_COURSE_DATA,

  // 12. Svelte
  SVELTE_COURSE_DATA,

  // 13. jQuery
  JQUERY_COURSE_DATA,

  // 14. Git & GitHub
  GIT_COURSE_DATA,

  // 15. npm / Package Managers
  NPM_COURSE_DATA,

  // 16. Vite / Webpack
  VITE_COURSE_DATA,

  // 17. Browser DevTools & Debugging
  DEVTOOLS_COURSE_DATA,

  // 18. Web Accessibility (a11y)
  A11Y_COURSE_DATA,

  // 19. Responsive Web Design
  RESPONSIVE_COURSE_DATA,

  // 20. Testing Basics (Jest / Testing Library)
  TESTING_COURSE_DATA
];
