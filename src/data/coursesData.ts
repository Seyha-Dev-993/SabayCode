import { Course } from '../types';
import { htmlTopics } from './htmlLessons';
import { cssTopics } from './cssLessons';
import { javascriptTopics } from './javascriptLessons';
import { pythonTopics } from './pythonLessons';
import { typescriptTopics } from './typescriptLessons';
import { javaTopics } from './javaLessons';
import { cppTopics } from './cppLessons';
import { csharpTopics } from './csharpLessons';
import { phpTopics } from './phpLessons';
import { angularTopics } from './angularLessons';
import { gitTopics } from './gitLessons';
import { kotlinTopics } from './kotlinLessons';
import { generateTailwindTopics } from './tailwindCourseData';
import { bootstrapTopics } from './bootstrapLessons';
import { reactTopics } from './reactLessons';
import { reactReferences, reactQuizzes, reactMiniProjects } from './reactExtras';
import { nextjsTopics } from './nextjsLessons';
import { nextjsReferences, nextjsQuizzes, nextjsMiniProjects } from './nextjsExtras';
import { vueTopics } from './vueLessons';
import { vueReferences, vueQuizzes, vueMiniProjects } from './vueExtras';
import { mysqlTopics } from './mysqlLessons';
import { mysqlReferences, mysqlQuizzes, mysqlMiniProjects } from './mysqlExtras';
import { jqueryTopics, jqueryReferences, jqueryQuizzes, jqueryMiniProjects } from './jqueryLessons';
import { flutterTopics, flutterReferences, flutterQuizzes, flutterMiniProjects } from './flutterLessons';
import { dartTopics, dartReferences, dartQuizzes, dartMiniProjects } from './dartLessons';
import { cTopics } from './cLessons';
import { xmlTopics, xmlReferences, xmlQuizzes, xmlMiniProjects } from './xmlLessons';
import { springBootTopics, springBootReferences, springBootQuizzes, springBootMiniProjects } from './springBootLessons';
import mongoDBCourseData from './mongoDBLessons';
import { SWIFT_COURSE_FULL_DATA } from './swiftCourseFullData';

export const coursesData: Course[] = [
  {
    id: "xml",
    title: { en: "XML", km: "XML" },
    desc: {
      en: "The standard extensible markup language for structuring, storing, and transporting data. Master XML syntax, DOM parsing, DTD, XSD, XPath, and XSLT.",
      km: "ភាសា Markup ស្តង់ដារសម្រាប់ការរៀបចំ រក្សាទុក និងដឹកជញ្ជូនទិន្នន័យ។ រៀន XML syntax, DOM parsing, DTD, XSD, XPath និង XSLT។"
    },
    category: "foundation",
    difficulty: "beginner",
    estimatedHours: 4,
    iconName: "xml",
    topics: xmlTopics,
    references: xmlReferences,
    quizzes: xmlQuizzes,
    miniProjects: xmlMiniProjects
  },
  {
    id: "html",
    title: { en: "HTML5", km: "HTML5" },
    desc: {
      en: "The foundational language of the Web. Learn to structure websites, create links, input forms, and utilize modern semantic layouts.",
      km: "ភាសាគ្រឹះនៃបណ្តាញអ៊ីនធឺណិត (Web)។ រៀនបង្កើតទម្រង់គេហទំព័រ លីង ទម្រង់បំពេញព័ត៌មាន និងប្លង់ទម្រង់កូដទំនើបៗ។"
    },
    category: "foundation",
    difficulty: "beginner",
    estimatedHours: 4,
    iconName: "FileHtml",
    topics: htmlTopics,
    references: [
      { id: "h1", syntax: "<h1> to <h6>", desc: { en: "Defines HTML headings", km: "កំណត់ចំណងជើងពីកម្រិត ១ ដល់ ៦" }, example: "<h1>Heading 1</h1>" },
      { id: "p", syntax: "<p>", desc: { en: "Defines a paragraph", km: "កំណត់កថាខណ្ឌ" }, example: "<p>Paragraph text</p>" },
      { id: "a", syntax: "<a href='URL'>", desc: { en: "Defines a hyperlink", km: "កំណត់តំណភ្ជាប់ទៅកាន់ URL" }, example: "<a href='https://google.com'>Google</a>" },
      { id: "img", syntax: "<img src='url' alt='text'>", desc: { en: "Embeds an image", km: "បញ្ចូលរូបភាពមកបង្ហាញ" }, example: "<img src='logo.png' alt='Logo'>" },
      { id: "div", syntax: "<div>", desc: { en: "A generic container (block-level)", km: "ប្រអប់ផ្ទុកទូទៅ (Block-level)" }, example: "<div>Content</div>" }
    ],
    quizzes: [
      {
        id: "html-q1",
        question: { en: "What does HTML stand for?", km: "តើ HTML តំណាងឱ្យអ្វី?" },
        options: {
          en: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tech Modern Language"],
          km: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tech Modern Language"]
        },
        correctIndex: 0,
        explanation: {
          en: "HTML stands for HyperText Markup Language, the structural standard for websites.",
          km: "HTML មកពីពាក្យថា HyperText Markup Language ដែលជាស្តង់ដាររចនាសម្ព័ន្ធសម្រាប់គេហទំព័រ។"
        }
      },
      {
        id: "html-q2",
        question: { en: "Choose the correct HTML element for the largest heading:", km: "ជ្រើសរើសធាតុ HTML ត្រឹមត្រូវសម្រាប់ចំណងជើងដែលធំបំផុត៖" },
        options: {
          en: ["<heading>", "<h6>", "<h1>", "<head>"],
          km: ["<heading>", "<h6>", "<h1>", "<head>"]
        },
        correctIndex: 2,
        explanation: {
          en: "<h1> is used for the largest and most important heading on a page.",
          km: "<h1> ត្រូវបានប្រើសម្រាប់ចំណងជើងដែលធំបំផុត និងសំខាន់បំផុតនៅលើគេហទំព័រ។"
        }
      }
    ],
    miniProjects: [
      {
        id: "html-project-portfolio",
        title: { en: "Simple Personal Biography", km: "ជីវប្រវត្តិសង្ខេបផ្ទាល់ខ្លួន" },
        desc: {
          en: "Build a single-page HTML document containing your name, profile photo placeholder, description, a list of your coding skills, and a link to your GitHub profile.",
          km: "បង្កើតទំព័រ HTML តែមួយដែលមានឈ្មោះរបស់អ្នក រូបថតតំណាង ការពិពណ៌នា បញ្ជីជំនាញកូដ និងតំណភ្ជាប់ទៅកាន់គណនី GitHub របស់អ្នក។"
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>My Portfolio</title>
</head>
<body>
  <!-- Step 1: Add your Heading 1 with your name -->
  
  <!-- Step 2: Add an image from unsplash (e.g. https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150) -->
  
  <!-- Step 3: Add a paragraph about yourself in Khmer and English -->
  
  <!-- Step 4: Add an Unordered List of your skills -->
  
  <!-- Step 5: Add a link to github -->
</body>
</html>`,
        solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>My Portfolio</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; line-height: 1.6; background: #fafafa; }
    img { border-radius: 50%; }
    h1 { color: #2d3748; }
    a { color: #3182ce; text-decoration: none; font-weight: bold; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>សួស្តី ខ្ញុំបាទ សុខជា!</h1>
  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" alt="Sokchea Profile" width="120" height="120">
  <p>ស្វាគមន៍មកកាន់គេហទំព័រជីវប្រវត្តិសង្ខេបរបស់ខ្ញុំ។ ខ្ញុំជាអ្នករៀនសរសេរកូដកម្រិតដំបូងដែលមានចំណង់ចំណូលចិត្តលើការអភិវឌ្ឍគេហទំព័រ។</p>
  <p>Welcome to my bio! I am a beginner developer passionate about web building.</p>
  
  <h3>ជំនាញរបស់ខ្ញុំ (My Skills):</h3>
  <ul>
    <li>HTML5 Structure & Tags</li>
    <li>CSS3 Layouts (Flexbox)</li>
    <li>Basic JavaScript Logic</li>
  </ul>

  <p>ភ្ជាប់ទំនាក់ទំនងជាមួយខ្ញុំ៖ <a href="https://github.com" target="_blank">GitHub Profile</a></p>
</body>
</html>`
      }
    ]
  },
  {
    id: "css",
    title: { en: "CSS3", km: "CSS3" },
    desc: {
      en: "Style your web pages! Master colors, fonts, margins, layouts (Flexbox, Grid), and add elegant modern transitions.",
      km: "រចនាគេហទំព័ររបស់អ្នក! រៀនគ្រប់គ្រងពណ៌ ហ្វុនអក្សរ គម្លាត ប្លង់ទម្រង់ (Flexbox, Grid) និងបន្ថែមចលនាឆ្លងកាត់យ៉ាងស្រស់ស្អាត។"
    },
    category: "foundation",
    difficulty: "beginner",
    estimatedHours: 5,
    iconName: "FileCode",
    topics: cssTopics,
    references: [
      { id: "color", syntax: "color: value;", desc: { en: "Sets text color", km: "កំណត់ពណ៌អក្សរ" }, example: "color: #3b82f6;" },
      { id: "bg", syntax: "background-color: value;", desc: { en: "Sets element background", km: "កំណត់ពណ៌ផ្ទៃខាងក្រោយ" }, example: "background-color: white;" },
      { id: "margin", syntax: "margin: value;", desc: { en: "Sets outer spacing", km: "កំណត់គម្លាតខាងក្រៅប្រអប់" }, example: "margin: 20px;" },
      { id: "padding", syntax: "padding: value;", desc: { en: "Sets inner spacing", km: "កំណត់គម្លាតខាងក្នុងប្រអប់" }, example: "padding: 15px;" },
      { id: "border", syntax: "border: style width color;", desc: { en: "Sets border around element", km: "កំណត់ស៊ុមជុំវិញប្រអប់" }, example: "border: 1px solid black;" },
      { id: "font-size", syntax: "font-size: value;", desc: { en: "Sets text size", km: "កំណត់ទំហំអក្សរ" }, example: "font-size: 1.2rem;" },
      { id: "font-family", syntax: "font-family: name, fallback;", desc: { en: "Sets text typography", km: "កំណត់ពុម្ពអក្សរ" }, example: "font-family: Arial, sans-serif;" },
      { id: "display", syntax: "display: value;", desc: { en: "Sets element display mode", km: "កំណត់ការបង្ហាញធាតុប្រអប់" }, example: "display: flex;" },
      { id: "position", syntax: "position: value;", desc: { en: "Sets element positioning model", km: "កំណត់របៀបរៀបទីតាំងធាតុ" }, example: "position: relative;" },
      { id: "box-shadow", syntax: "box-shadow: h-offset v-offset blur color;", desc: { en: "Adds shadows to a container", km: "បន្ថែមស្រមោលជុំវិញប្រអប់" }, example: "box-shadow: 0 4px 6px rgba(0,0,0,0.1);" }
    ],
    quizzes: [
      {
        id: "css-q1",
        question: { en: "What does CSS stand for?", km: "តើ CSS តំណាងឱ្យអ្វី?" },
        options: {
          en: ["Cascading Style Sheets", "Creative Style Systems", "Computer Style Sheets", "Colorful Style Sheets"],
          km: ["Cascading Style Sheets", "Creative Style Systems", "Computer Style Sheets", "Colorful Style Sheets"]
        },
        correctIndex: 0,
        explanation: {
          en: "CSS stands for Cascading Style Sheets, used to style HTML documents.",
          km: "CSS តំណាងឱ្យ Cascading Style Sheets ប្រើប្រាស់សម្រាប់តុបតែងគេហទំព័រ HTML។"
        }
      },
      {
        id: "css-q2",
        question: { en: "Which property controls the spacing INSIDE an element's border?", km: "តើលក្ខណៈសម្បត្តិមួយណាដែលគ្រប់គ្រងគម្លាត ខាងក្នុង ស៊ុមរបស់ធាតុ?" },
        options: {
          en: ["margin", "padding", "border-spacing", "inside-width"],
          km: ["margin", "padding", "border-spacing", "inside-width"]
        },
        correctIndex: 1,
        explanation: {
          en: "Padding is the space inside an element, whereas margin is the space outside the border.",
          km: "Padding គឺជាគម្លាតខាងក្នុងធាតុ ចំណែកឯ margin គឺជាគម្លាតខាងក្រៅស៊ុមរបស់ធាតុ។"
        }
      },
      {
        id: "css-q3",
        question: { en: "How can you make a list that doesn't display any bullets?", km: "តើធ្វើដូចម្តេចដើម្បីឱ្យបញ្ជីរាយនាម (List) មិនបង្ហាញសញ្ញាចំនុច?" },
        options: {
          en: ["list-style-type: none", "list-style: no-bullet", "bullet-display: hide", "list-bullet: none"],
          km: ["list-style-type: none", "list-style: no-bullet", "bullet-display: hide", "list-bullet: none"]
        },
        correctIndex: 0,
        explanation: {
          en: "Setting list-style-type: none removes bullets from <ul> and <ol> lists.",
          km: "ការកំណត់ list-style-type: none លុបសញ្ញាចំនុចចេញពីបញ្ជី <ul> និង <ol>។"
        }
      },
      {
        id: "css-q4",
        question: { en: "Which position value is default and flows normally in the document without offsets?", km: "តើលក្ខណៈសម្បត្តិ position មួយណាដែលជាលំនាំដើម និងបង្ហាញតាមលំហូរធម្មតាដោយមិនគណនាគម្លាត?" },
        options: {
          en: ["relative", "absolute", "static", "fixed"],
          km: ["relative", "absolute", "static", "fixed"]
        },
        correctIndex: 2,
        explanation: {
          en: "static is the default positioning. It is not affected by top, bottom, left, or right offsets.",
          km: "static គឺជាទីតាំងលំនាំដើម។ វាមិនរងឥទ្ធិពលពីលក្ខណៈសម្បត្តិ top, bottom, left, ឬ right ឡើយ។"
        }
      }
    ],
    miniProjects: [
      {
        id: "css-product-card",
        title: { en: "Custom Product Card", km: "ប្រអប់ផលិតផលស្រស់ស្អាត" },
        desc: {
          en: "Style a product preview card. Apply custom shadows, hover effects, border radii, and nice typography spacing.",
          km: "រចនាប្រអប់បង្ហាញផលិតផលមួយ។ ប្រើប្រាស់ស្រមោល (Shadows) ចលនាឆ្លងកាត់ពេលដាក់ម៉ៅស៍ពីលើ (Hover) និងគម្លាតអក្សរស្អាតៗ។"
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Style this container to look like a modern shadow card */
    .card {
      background: white;
      max-width: 300px;
      margin: 30px auto;
      font-family: sans-serif;
      /* Add border, padding, border-radius, and box-shadow here */
    }
    
    .price {
      /* Make price stand out (e.g. bold, colored green) */
    }
    
    .button {
      /* Make button fill width, colored blue, rounded, white text, transitions on hover */
    }
  </style>
</head>
<body>
  <div class="card">
    <h3>Wireless Headphones</h3>
    <p class="price">$99.99</p>
    <p>High-quality noise-canceling wireless headphones with 40-hour battery life.</p>
    <button class="button">Add to Cart</button>
  </div>
</body>
</html>`,
        solutionCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { background-color: #f1f5f9; padding: 20px; }
    .card {
      background: white;
      max-width: 300px;
      margin: 30px auto;
      font-family: system-ui, sans-serif;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    }
    h3 { margin-top: 0; color: #1e293b; font-size: 20px; }
    .price {
      font-weight: bold;
      color: #10b981;
      font-size: 22px;
      margin: 8px 0;
    }
    p { color: #64748b; font-size: 14px; line-height: 1.5; }
    .button {
      width: 100%;
      background: #3b82f6;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .button:hover {
      background: #2563eb;
    }
  </style>
</head>
<body>
  <div class="card">
    <h3>Wireless Headphones</h3>
    <p class="price">$99.99</p>
    <p>High-quality noise canceling wireless headphones with 40-hour battery life and fast charging.</p>
    <button class="button">Add to Cart</button>
  </div>
</body>
</html>`
      }
    ]
  },
  {
    id: "javascript",
    title: { en: "JavaScript", km: "JavaScript" },
    desc: {
      en: "The standard scripting language for web browsers. Build dynamic interactive interfaces, complex business logic, asynchronous data operations, and web animations.",
      km: "ភាសាសរសេរកូដស្តង់ដារសម្រាប់កម្មវិធីរុករក។ បង្កើតចំណុចប្រទាក់ឌីណាមិក តក្កវិជ្ជាស្មុគស្មាញ ប្រតិបត្តិការទិន្នន័យមិនស្របគ្នា និងគំនូរមានចលនា។"
    },
    category: "programming",
    difficulty: "intermediate",
    estimatedHours: 8,
    iconName: "Braces",
    topics: javascriptTopics,
    references: [
      { id: "js-ref-const", syntax: "const x = 10;", desc: { en: "Declares a block-scoped constant variable", km: "ប្រកាសអថេរថេរនៅក្នុង Block-scoped" }, example: "const rate = 4100;" },
      { id: "js-ref-map", syntax: "arr.map(callback)", desc: { en: "Creates a new array by mapping elements", km: "បង្កើតអារេថ្មីមួយដោយបំលែងរាល់ធាតុនីមួយៗ" }, example: "const doubled = [1, 2].map(x => x * 2);" },
      { id: "js-ref-fetch", syntax: "fetch(url)", desc: { en: "Performs an asynchronous HTTP network request", km: "ទាញយកទិន្នន័យមិនស្របគ្នាពីប្រព័ន្ធបណ្តាញ" }, example: "fetch('api/user').then(res => res.json());" },
      { id: "js-ref-query", syntax: "document.querySelector(sel)", desc: { en: "Selects the first matching HTML DOM element", km: "ជ្រើសរើសធាតុ HTML DOM ដំបូងគេដែលត្រូវគ្នា" }, example: "const btn = document.querySelector('.btn-primary');" }
    ],
    quizzes: [
      {
        id: "js-q-const",
        question: { en: "Which keyword is used to declare a constant variable whose value cannot be reassigned?", km: "តើពាក្យគន្លឹះមួយណាដែលត្រូវបានប្រើដើម្បីប្រកាសអថេរថេរ ដែលមិនអាចប្តូរតម្លៃឡើងវិញបាន?" },
        options: {
          en: ["let", "var", "const", "def"],
          km: ["let", "var", "const", "def"]
        },
        correctIndex: 2,
        explanation: {
          en: "const is block-scoped and guarantees that the reference cannot be reassigned.",
          km: "const គឺជាអថេរថេរដែលមិនអាចប្រគល់តម្លៃថ្មីជំនួសបានឡើយ ដើម្បីការពារសុវត្ថិភាពទិន្នន័យ។"
        }
      },
      {
        id: "js-q-equality",
        question: { en: "What is the difference between == and === in JavaScript?", km: "តើអ្វីជាភាពខុសគ្នារវាង == និង === នៅក្នុង JavaScript?" },
        options: {
          en: [
            "=== compares both value and datatype, while == only compares values.",
            "== compares both value and datatype, while === only compares values.",
            "=== is only used for strings, and == is only used for numbers.",
            "They are completely identical in every scenario."
          ],
          km: [
            "=== ប្រៀបធៀបទាំងទំហំតម្លៃ និងប្រភេទទិន្នន័យ ចំណែក == ប្រៀបធៀបតែតម្លៃប៉ុណ្ណោះ។",
            "== ប្រៀបធៀបទាំងទំហំតម្លៃ និងប្រភេទទិន្នន័យ ចំណែក === ប្រៀបធៀបតែតម្លៃប៉ុណ្ណោះ។",
            "=== ប្រើសម្រាប់តែអក្សរ និង == ប្រើសម្រាប់តែលេខ។",
            "ពួកវាគឺដូចគ្នាទាំងស្រុងនៅគ្រប់កាលៈទេសៈទាំងអស់។"
          ]
        },
        correctIndex: 0,
        explanation: {
          en: "=== is the strict equality operator. It verifies that both values and types are identical (no implicit coercion).",
          km: "=== គឺជាប្រមាណវិធីប្រៀបធៀបតឹងរ៉ឹង ដែលផ្ទៀងផ្ទាត់ទាំងតម្លៃ និងប្រភេទរបស់វាដោយមិនបន្លំឡើយ។"
        }
      },
      {
        id: "js-q-prevent",
        question: { en: "Which method prevents an HTML form from automatically reloading the page on submission?", km: "តើវិធីសាស្ត្រមួយណាដែលការពារកុំឱ្យទម្រង់ HTML (Form) ផ្ទុកគេហទំព័រឡើងវិញនៅពេលចុចផ្ញើ?" },
        options: {
          en: ["event.preventDefault()", "event.stopPropagation()", "form.stop()", "window.reload(false)"],
          km: ["event.preventDefault()", "event.stopPropagation()", "form.stop()", "window.reload(false)"]
        },
        correctIndex: 0,
        explanation: {
          en: "event.preventDefault() cancels the default behavior of events, which prevents default form submissions from reloading.",
          km: "event.preventDefault() បោះបង់សកម្មភាពលំនាំដើមនៃព្រឹត្តិការណ៍ ដែលជួយទប់ស្កាត់ការផ្ទុកទំព័រឡើងវិញ។"
        }
      },
      {
        id: "js-q-null",
        question: { en: "What does the expression 'typeof null' return in modern JavaScript?", km: "តើកន្សោមបញ្ជា 'typeof null' ផ្ដល់លទ្ធផលជាអ្វីនៅក្នុង JavaScript ទំនើប?" },
        options: {
          en: ["'null'", "'undefined'", "'object'", "'boolean'"],
          km: ["'null'", "'undefined'", "'object'", "'boolean'"]
        },
        correctIndex: 2,
        explanation: {
          en: "Due to a historic bug in the first version of JS, typeof null returns 'object'.",
          km: "ដោយសារតែកំហុសបច្ចេកទេសជាប្រវត្តិសាស្ត្រតាំងពីកំណែដំបូងបង្អស់ typeof null នឹងផ្ដល់លទ្ធផលជា 'object'។"
        }
      }
    ],
    miniProjects: [
      {
        id: "js-proj-counter",
        title: { en: "Dynamic Click Counter with LocalStorage", km: "ម៉ាស៊ីនរាប់ការចុចឌីណាមិកជាមួយ LocalStorage" },
        desc: {
          en: "Build a complete web counter. Create click buttons to increase, decrease, and reset a count value. Persist the count value in the browser's LocalStorage so that reloading the page preserves the score.",
          km: "បង្កើតម៉ាស៊ីនរាប់ការចុច។ បង្កើតប៊ូតុងសម្រាប់បូក ដក និងកំណត់ឡើងវិញនូវចំនួនចុច។ រក្សាទុកតម្លៃក្នុង LocalStorage របស់កម្មវិធីរុករក ដើម្បីកុំឱ្យបាត់បង់ទិន្នន័យពេលផ្ទុកទំព័រឡើងវិញ។"
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-h: 200px; }
    h1 { color: #4f46e5; font-size: 3rem; margin: 10px 0; }
    button { padding: 8px 16px; margin: 5px; border-radius: 8px; border: none; font-weight: bold; cursor: pointer; }
    .btn-inc { bg-color: #10b981; color: white; }
  </style>
</head>
<body>
  <h3>Clicks Counter</h3>
  <h1 id="counterDisplay">0</h1>
  <div>
    <button onclick="decrement()">- Decrease</button>
    <button onclick="resetCount()">Reset</button>
    <button class="btn-inc" onclick="increment()">+ Increase</button>
  </div>

  <script>
    // Step 1: Initialize count from localStorage or set default to 0
    let count = 0;

    // Step 2: Implement counter display function
    function updateDisplay() {
      // code here...
    }

    // Step 3: Implement increment/decrement/reset functions with localStorage persistence
  </script>
</body>
</html>`,
        solutionCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 250px; background: #fafafa; }
    h1 { color: #4f46e5; font-size: 3.5rem; margin: 10px 0; font-family: monospace; }
    button { padding: 10px 20px; margin: 5px; border-radius: 10px; border: 1px solid #ddd; font-weight: bold; cursor: pointer; background: white; transition: all 0.2s; }
    button:hover { background: #f3f4f6; }
    .btn-inc { background: #10b981; color: white; border: none; }
    .btn-inc:hover { background: #059669; }
  </style>
</head>
<body>
  <h3>Dynamic Clicks Counter</h3>
  <h1 id="counterDisplay">0</h1>
  <div>
    <button onclick="decrement()">- Decrease</button>
    <button onclick="resetCount()">Reset</button>
    <button class="btn-inc" onclick="increment()">+ Increase</button>
  </div>

  <script>
    // Load count from localStorage, fallback to 0
    let count = parseInt(localStorage.getItem("user_clicks")) || 0;
    
    // Update display initially
    updateDisplay();

    function updateDisplay() {
      document.getElementById("counterDisplay").innerHTML = count;
    }

    function increment() {
      count++;
      localStorage.setItem("user_clicks", count);
      updateDisplay();
    }

    function decrement() {
      if (count > 0) {
        count--;
        localStorage.setItem("user_clicks", count);
        updateDisplay();
      }
    }

    function resetCount() {
      count = 0;
      localStorage.setItem("user_clicks", count);
      updateDisplay();
    }
  </script>
</body>
</html>`
      }
    ]
  },
  {
    id: "typescript",
    title: { en: "TypeScript", km: "TypeScript" },
    desc: {
      en: "Supercharge your JavaScript with static typing! Learn interfaces, custom types, generic classes, and robust compile-time validation.",
      km: "បង្កើនថាមពលកូដ JavaScript ជាមួយការកំណត់ប្រភេទជាក់លាក់! សិក្សាអំពី Interfaces, ប្រភេទផ្ទាល់ខ្លួន, និងការផ្ទៀងផ្ទាត់បញ្ហាកូដក្នុងពេល Compile។"
    },
    category: "programming",
    difficulty: "intermediate",
    estimatedHours: 8,
    iconName: "FileCode2",
    topics: typescriptTopics,
    references: [
      {
        id: "ts-primitive",
        syntax: "let name: string = 'Sok'; let age: number = 25;",
        desc: { en: "Declares string, number, or boolean variables explicitly.", km: "ប្រកាសអថេរអក្សរ លេខ ឬប៊ូលីនដោយកំណត់ប្រភេទច្បាស់លាស់។" },
        example: "let name: string = 'Sok'; let age: number = 25;"
      },
      {
        id: "ts-union",
        syntax: "let id: string | number;",
        desc: { en: "Defines a variable that can hold values of multiple specified types.", km: "កំណត់អថេរដែលអាចផ្ទុកតម្លៃនៃប្រភេទផ្សេងៗគ្នាជាច្រើន។" },
        example: "let id: string | number = 405;"
      },
      {
        id: "ts-interface",
        syntax: "interface User { id: number; name: string; bio?: string; }",
        desc: { en: "Defines a structural contract for objects, supporting optional properties.", km: "កំណត់រចនាសម្ព័ន្ធកិច្ចសន្យាសម្រាប់វត្ថុ (Object) ដោយគាំទ្រលក្ខណៈជម្រើស។" },
        example: "const u: User = { id: 1, name: 'Dara' };"
      },
      {
        id: "ts-casting",
        syntax: "let len = (value as string).length;",
        desc: { en: "Overrides the compiler's inferred type with a manually specified type.", km: "កំណត់បង្ខំប្រភេទអថេរដោយប្រាប់ឱ្យ Compiler ជឿជាក់លើប្រភេទនោះ។" },
        example: "let len = (someValue as string).length;"
      },
      {
        id: "ts-generics",
        syntax: "function wrap<T>(item: T): T { return item; }",
        desc: { en: "Writes reusable, type-safe functions, classes, or interfaces.", km: "សរសេរអនុគមន៍ ថ្នាក់ ឬ Interface ដែលអាចប្រើឡើងវិញបានជាមួយគ្រប់ប្រភេទតម្លៃ។" },
        example: "const wrappedStr = wrap<string>('Hello');"
      },
      {
        id: "ts-utility-types",
        syntax: "Partial<Type> | Readonly<Type> | Omit<Type, Keys>",
        desc: { en: "Provides built-in type mappings for quick common transformations.", km: "ផ្តល់ជូននូវឧបករណ៍ជំនួយសម្រាប់ការកែប្រែប្រភេទទិន្នន័យទូទៅបានលឿន។" },
        example: "const preview: Partial<User> = { name: 'Vireak' };"
      }
    ],
    quizzes: [
      {
        id: "ts-q1",
        question: {
          en: "What is the primary benefit of TypeScript over vanilla JavaScript?",
          km: "តើអ្វីជាអត្ថប្រយោជន៍ចម្បងរបស់ TypeScript ធៀបនឹង JavaScript ធម្មតា?"
        },
        options: {
          en: [
            "It runs faster in the browser natively",
            "It adds static type checking to catch errors at compile-time",
            "It replaces the need for CSS and HTML",
            "It makes JavaScript a relational database engine"
          ],
          km: [
            "វាដំណើរការលឿនជាងនៅក្នុង browser ដោយផ្ទាល់",
            "វាបន្ថែមការពិនិត្យប្រភេទ (Static Type Checking) ដើម្បីស្វែងរកបញ្ហាពេល compile",
            "វាជំនួសតួនាទីរបស់ CSS និង HTML",
            "វាធ្វើឱ្យ JavaScript ក្លាយជាម៉ាស៊ីនផ្ទុកទិន្នន័យ (Relational Database)"
          ]
        },
        correctIndex: 1,
        explanation: {
          en: "TypeScript adds static types to JavaScript, enabling the compiler to check your code and find errors before running it.",
          km: "TypeScript បន្ថែមប្រភេទរឹងមាំ (Static Types) ទៅលើ JavaScript ដែលអនុញ្ញាតឱ្យ Compiler ផ្ទៀងផ្ទាត់កូដ និងស្វែងរកកំហុសមុនពេលដំណើរការ។"
        }
      },
      {
        id: "ts-q2",
        question: {
          en: "Which symbol makes an object property or function parameter optional in TypeScript?",
          km: "តើនិមិត្តសញ្ញាមួយណាត្រូវបានប្រើដើម្បីកំណត់ឱ្យលក្ខណៈវត្ថុ ឬប៉ារ៉ាម៉ែត្រជាជម្រើសមិនបង្ខំ?"
        },
        options: {
          en: ["*", "?", "!", "&"],
          km: ["*", "?", "!", "&"]
        },
        correctIndex: 1,
        explanation: {
          en: "The question mark (?) denotes that a property or parameter is optional and can be undefined.",
          km: "សញ្ញាសួរ (?) បញ្ជាក់ថាលក្ខណៈ (Property) ឬប៉ារ៉ាម៉ែត្រគឺជាជម្រើសមិនបង្ខំ ហើយអាចមានតម្លៃជា undefined។"
        }
      },
      {
        id: "ts-q3",
        question: {
          en: "How do you cast an 'unknown' variable named 'input' to a 'string'?",
          km: "តើអ្នកប្តូរប្រភេទ (Cast) អថេរ unknown ដែលមានឈ្មោះថា 'input' ទៅជា 'string' ដោយរបៀបណា?"
        },
        options: {
          en: [
            "let s = input as string;",
            "let s = string(input);",
            "let s = input.toString();",
            "let s = string::cast(input);"
          ],
          km: [
            "let s = input as string;",
            "let s = string(input);",
            "let s = input.toString();",
            "let s = string::cast(input);"
          ]
        },
        correctIndex: 0,
        explanation: {
          en: "The standard way to perform type casting in TypeScript is using the 'as' keyword: 'input as string'.",
          km: "វិធីសាស្ត្រស្តង់ដារសម្រាប់ធ្វើ Type Casting នៅក្នុង TypeScript គឺការប្រើប្រាស់ពាក្យគន្លឹះ 'as'៖ 'input as string'។"
        }
      },
      {
        id: "ts-q4",
        question: {
          en: "What does the utility type 'Readonly<Type>' do?",
          km: "តើឧបករណ៍ជំនួយ 'Readonly<Type>' ដើរតួនាទីអ្វី?"
        },
        options: {
          en: [
            "It deletes all properties in the type",
            "It makes all properties of the type unchangeable (read-only)",
            "It turns all properties into string types",
            "It converts the class to an asynchronous promise"
          ],
          km: [
            "វាលុបរាល់លក្ខណៈ (Properties) ទាំងអស់នៅក្នុងប្រភេទនោះចោល",
            "វាធ្វើឱ្យរាល់លក្ខណៈទាំងអស់របស់ប្រភេទនោះមិនអាចកែប្រែបាន (Read-only)",
            "វាប្តូររាល់លក្ខណៈទាំងអស់ទៅជាប្រភេទអក្សរ string",
            "វាប្តូរ Class ទៅជា Promise អសមកាល"
          ]
        },
        correctIndex: 1,
        explanation: {
          en: "Readonly<Type> constructs a type where all properties are set to readonly, preventing re-assignment.",
          km: "Readonly<Type> បង្កើតប្រភេទថ្មីមួយដែលរាល់ Properties ទាំងអស់ត្រូវបានកំណត់ទៅជា readonly ដែលមិនអនុញ្ញាតឱ្យកែប្រែតម្លៃបានឡើយ។"
        }
      },
      {
        id: "ts-q5",
        question: {
          en: "Which operator is used to extract the union of keys of an object type?",
          km: "តើប្រមាណវិធីមួយណាត្រូវបានប្រើដើម្បីទាញយកសំណុំ Keys ទាំងអស់របស់ប្រភេទវត្ថុ?"
        },
        options: {
          en: ["typeof", "instanceof", "keyof", "extof"],
          km: ["typeof", "instanceof", "keyof", "extof"]
        },
        correctIndex: 2,
        explanation: {
          en: "The 'keyof' operator takes an object type and produces a union of its string or numeric keys.",
          km: "ប្រមាណវិធី 'keyof' យកប្រភេទវត្ថុមួយដើម្បីបង្កើតជាក្រុមតម្លៃ (Union) នៃ Keys ទាំងអស់របស់វត្ថុនោះ។"
        }
      }
    ],
    miniProjects: [
      {
        id: "ts-profile-formatter",
        title: { en: "Exercise 1: Strictly Typed User profile", km: "លំហាត់ទី១៖ ការកំណត់ប្រភេទព័ត៌មានអ្នកប្រើប្រាស់" },
        desc: {
          en: "Complete the User interface and formatUserProfile function below. Ensure that you declare proper types for variables and handle the optional property gracefully.",
          km: "បំពេញ Interface ឈ្មោះ User និងអនុគមន៍ formatUserProfile ខាងក្រោម។ ធានាថាអ្នកប្រកាសប្រភេទអថេរបានត្រឹមត្រូវ និងគ្រប់គ្រងលក្ខណៈជម្រើស (Optional Property) ដោយរលូន។"
        },
        starterCode: `// Exercise 1: Build a typed formatter
interface User {
  id: number;
  name: string;
  // TODO: Add optional field 'bio' of type string
}

function formatUserProfile(user: User): string {
  // TODO: format output. If bio exists, include it.
  return "";
}

const userWithoutBio: User = { id: 10, name: "Arun" };
const userWithBio: User = { id: 11, name: "Chenda", bio: "Senior Engineer in Phnom Penh" };

console.log("No Bio:", formatUserProfile(userWithoutBio));
console.log("With Bio:", formatUserProfile(userWithBio));
`,
        solutionCode: `interface User {
  id: number;
  name: string;
  bio?: string;
}

function formatUserProfile(user: User): string {
  let result = \`User #\${user.id}: \${user.name}\`;
  if (user.bio) {
    result += \` - Bio: \${user.bio}\`;
  }
  return result;
}

const userWithoutBio: User = { id: 10, name: "Arun" };
const userWithBio: User = { id: 11, name: "Chenda", bio: "Senior Engineer in Phnom Penh" };

console.log("No Bio:", formatUserProfile(userWithoutBio));
console.log("With Bio:", formatUserProfile(userWithBio));`
      },
      {
        id: "ts-generic-db",
        title: { en: "Exercise 2: Generic Store Database", km: "លំហាត់ទី២៖ ឃ្លាំងផ្ទុកទិន្នន័យ Generic" },
        desc: {
          en: "Create a generic class called DataStore<T> that holds a collection of items of type T. Implement insert() and getAll() methods cleanly.",
          km: "បង្កើត Class ប្រភេទ Generic ឈ្មោះថា DataStore<T> ដែលផ្ទុកនូវបណ្តុំទិន្នន័យនៃប្រភេទ T។ អនុវត្តមុខងារ insert() និង getAll() ឱ្យបានត្រឹមត្រូវ។"
        },
        starterCode: `// Exercise 2: Generic Data Storage
class DataStore<T> {
  private items: T[] = [];

  // TODO: Implement insert method that adds item to array
  // TODO: Implement getAll method that returns the array of items
}

const textStore = new DataStore<string>();
// textStore.insert("TypeScript");
// textStore.insert("React");
// console.log("Items:", textStore.getAll());
`,
        solutionCode: `class DataStore<T> {
  private items: T[] = [];

  public insert(item: T): void {
    this.items.push(item);
  }

  public getAll(): T[] {
    return this.items;
  }
}

const textStore = new DataStore<string>();
textStore.insert("TypeScript");
textStore.insert("React");
console.log("Items in generic store:", textStore.getAll());`
      }
    ]
  },
  {
    id: "python",
    title: { en: "Python", km: "Python" },
    desc: {
      en: "The world's most popular beginner programming language. Learn variables, clean syntax, modules, file I/O, and simple CLI games.",
      km: "ភាសាសរសេរកូដដែលពេញនិយមបំផុតសម្រាប់អ្នករៀនដំបូង។ សិក្សាពីអថេរ រចនាសម្ព័ន្ធកូដស្អាត ម៉ូឌុល និងការបង្កើតហ្គេមបញ្ជាផ្ទាល់ (CLI)។"
    },
    category: "programming",
    difficulty: "beginner",
    estimatedHours: 8,
    iconName: "FileSymlink",
    topics: pythonTopics,
    references: [
      {
        id: "py-print",
        syntax: "print(value, ..., sep=' ', end='\\n')",
        desc: { en: "Outputs messages to the standard output stream.", km: "បោះពុម្ពសារ ឬតម្លៃចេញទៅកាន់អេក្រង់ terminal។" },
        example: "print('Hello', 'World', sep='-')"
      },
      {
        id: "py-len",
        syntax: "len(sequence)",
        desc: { en: "Returns the number of elements in an object.", km: "ផ្ដល់នូវចំនួនធាតុសរុបនៅក្នុងលំដាប់លំដោយ (ខ្សែអក្សរ, list, dict)។" },
        example: "len(['apple', 'banana'])"
      },
      {
        id: "py-type",
        syntax: "type(object)",
        desc: { en: "Returns the type of the specified object.", km: "ផ្ដល់នូវប្រភេទទិន្នន័យពិតប្រាកដរបស់វត្ថុ ឬអថេរ។" },
        example: "type(3.14)"
      },
      {
        id: "py-open",
        syntax: "open(file, mode='r')",
        desc: { en: "Opens a file and returns a corresponding file object.", km: "បើកឯកសារមួយ និងផ្ដល់នូវវត្ថុឯកសារសម្រាប់អាន/សរសេរ។" },
        example: "f = open('data.txt', 'w')"
      }
    ],
    quizzes: [
      {
        id: "py-q1",
        question: { en: "How do you start a single-line comment in Python?", km: "តើអ្នកសរសេរមតិយោបល់មួយបន្ទាត់ (Single-line comment) ក្នុង Python ដោយរបៀបណា?" },
        options: {
          en: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
          km: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"]
        },
        correctIndex: 2,
        explanation: {
          en: "In Python, comments start with a hash symbol (#) and continue to the end of the line.",
          km: "នៅក្នុង Python មតិយោបល់ចាប់ផ្តើមដោយសញ្ញាទ្រុងជ្រូក (#) និងបន្តរហូតដល់ចុងបន្ទាត់។"
        }
      },
      {
        id: "py-q2",
        question: { en: "Which keyword is used to create a function in Python?", km: "តើពាក្យគន្លឹះមួយណាត្រូវបានប្រើដើម្បីបង្កើតអនុគមន៍ (Function) ក្នុង Python?" },
        options: {
          en: ["function", "def", "create", "func"],
          km: ["function", "def", "create", "func"]
        },
        correctIndex: 1,
        explanation: {
          en: "The 'def' keyword is used to define (declare) a function in Python.",
          km: "ពាក្យគន្លឹះ 'def' ត្រូវបានប្រើដើម្បីកំណត់ (ប្រកាស) អនុគមន៍នៅក្នុង Python។"
        }
      },
      {
        id: "py-q3",
        question: { en: "What is the correct way to check if a variable 'x' is Null/None in Python?", km: "តើការផ្ទៀងផ្ទាត់មួយណាត្រឹមត្រូវដើម្បីឆែកថាតើអថេរ 'x' ស្មើ None ក្នុង Python?" },
        options: {
          en: ["if x == null:", "if x is None:", "if x is null:", "if x == NoneType:"],
          km: ["if x == null:", "if x is None:", "if x is null:", "if x == NoneType:"]
        },
        correctIndex: 1,
        explanation: {
          en: "The recommended way to compare a variable to None is using the 'is' identity operator: 'x is None'.",
          km: "វិធីសាស្ត្រដែលត្រូវបានណែនាំសម្រាប់ការប្រៀបធៀបអថេរទៅនឹង None គឺការប្រើប្រាស់ប្រមាណសញ្ញាអត្តសញ្ញាណ 'is'៖ 'x is None'។"
        }
      }
    ],
    miniProjects: [
      {
        id: "py-proj-calc",
        title: {
          en: "Bilingual Operator Calculator",
          km: "ប្រព័ន្ធគណនាប្រមាណសញ្ញាពីរភាសា"
        },
        desc: {
          en: "Build a defensive function that calculates values based on numeric inputs and an operator string, with protection against division by zero.",
          km: "បង្កើតអនុគមន៍ដែលគណនាតម្លៃផ្អែកលើការបញ្ចូលលេខ និងខ្សែអក្សរប្រមាណសញ្ញា ជាមួយនឹងការការពារប្រឆាំងនឹងការចែកនឹងសូន្យ។"
        },
        starterCode: `def calculate(a, b, op):
    # Write a function to calculate a and b using operator: +, -, *, /
    # Handle division by zero defensively
    pass

# Execute sample calculator tests
print("10 + 5 =", calculate(10, 5, "+"))
print("20 / 0 =", calculate(20, 0, "/"))`,
        solutionCode: `def calculate(a, b, op):
    if op == "+":
        return a + b
    elif op == "-":
        return a - b
    elif op == "*":
        return a * b
    elif op == "/":
        if b == 0:
            return "កំហុស៖ មិនអាចចែកនឹងសូន្យបានទេ (Division by Zero)"
        return a / b
    return "កំហុស៖ ប្រមាណសញ្ញាមិនត្រឹមត្រូវ (Invalid Operator)"

# Execute sample calculator tests
print("10 + 5 =", calculate(10, 5, "+"))
print("20 / 0 =", calculate(20, 0, "/"))`
      }
    ]
  },
  {
    id: "java",
    title: { en: "Java", km: "Java" },
    desc: {
      en: "Robust, Object-Oriented, enterprise programming language. Study compile rules, classes, encapsulation, inheritance, and exception handling.",
      km: "ភាសាកូដលំដាប់សហគ្រាសដ៏រឹងមាំ និងតម្រង់វត្ថុ (OOP)។ សិក្សាពីថ្នាក់ (Classes) ការវេចខ្ចប់ បន្តពូជ និងការដោះស្រាយកំហុសកូដ។"
    },
    category: "programming",
    difficulty: "intermediate",
    estimatedHours: 12,
    iconName: "Code",
    topics: javaTopics,
    references: [
      {
        id: "java-ref-print",
        syntax: "System.out.println(value);",
        desc: {
          en: "Prints the specified value to the console with a trailing newline.",
          km: "បោះពុម្ពតម្លៃលទ្ធផលនៅលើអេក្រង់ Console និងចុះបន្ទាត់ថ្មី។"
        },
        example: "System.out.println(\"Hello Cambodia!\");"
      },
      {
        id: "java-ref-main",
        syntax: "public static void main(String[] args)",
        desc: {
          en: "The standard entry point method required in every executable Java program.",
          km: "អនុគមន៍ចំណុចចាប់ផ្តើមដំបូងគេបង្អស់ (Entry Point) ដែលត្រូវតែមាននៅក្នុងរាល់កម្មវិធី Java ដំណើរការបានទាំងអស់។"
        },
        example: "public static void main(String[] args) { ... }"
      },
      {
        id: "java-ref-extends",
        syntax: "class Subclass extends Superclass",
        desc: {
          en: "Declares that a subclass inherits attributes and methods from a parent superclass.",
          km: "ប្រកាសថាថ្នាក់កូន (Subclass) ត្រូវទទួលបានគុណលក្ខណៈ និងវិធីសាស្ត្រស្នងពីថ្នាក់ឪពុក (Superclass)។"
        },
        example: "class Car extends Vehicle { ... }"
      },
      {
        id: "java-ref-equals",
        syntax: "string1.equals(string2)",
        desc: {
          en: "Compares the actual character contents of two String objects for equality.",
          km: "ប្រៀបធៀបខ្លឹមសារអត្ថបទតួអក្សរពិតប្រាកដរវាង String ពីរថាតើដូចគ្នាឬទេ។"
        },
        example: "if (username.equals(\"dara\")) { ... }"
      },
      {
        id: "java-ref-arraylist",
        syntax: "ArrayList<Type> list = new ArrayList<>();",
        desc: {
          en: "Creates a dynamic, resizable list capable of growing on-the-fly.",
          km: "បង្កើតបញ្ជីអារេដែលអាចផ្លាស់ប្តូរ និងបន្ថែមបន្ថយទំហំដោយសេរី។"
        },
        example: "ArrayList<String> fleet = new ArrayList<>();"
      }
    ],
    quizzes: [
      {
        id: "java-q1",
        question: {
          en: "Where are Java reference objects allocated in memory?",
          km: "តើវត្ថុប្រភេទទាក់ទង (Reference objects) ត្រូវបានបម្រុងទុកនៅក្នុងផ្នែកមេម៉ូរីមួយណា?"
        },
        options: {
          en: ["Heap Memory", "Stack Memory", "Registers", "Cache Memory"],
          km: ["Heap Memory (គំនរមេម៉ូរី)", "Stack Memory (គរមេម៉ូរី)", "Registers", "Cache Memory"]
        },
        correctIndex: 0,
        explanation: {
          en: "Reference types and object data are allocated in Heap memory. The references pointing to them are stored in Stack memory.",
          km: "ទិន្នន័យវត្ថុ និងប្រភេទទាក់ទងត្រូវបានដាក់ក្នុងគំនរមេម៉ូរី (Heap)។ ចំណែកឯអថេរអាសយដ្ឋានចង្អុលត្រូវរក្សាទុកក្នុង Stack។"
        }
      },
      {
        id: "java-q2",
        question: {
          en: "What is the correct way to compare the text content of two String variables in Java?",
          km: "តើវិធីសាស្ត្រមួយណាត្រឹមត្រូវសម្រាប់ប្រៀបធៀបខ្លឹមសារអត្ថបទរបស់អថេរ String ពីរនៅក្នុង Java?"
        },
        options: {
          en: ["string1 == string2", "string1 === string2", "string1.equals(string2)", "string1.compare(string2)"],
          km: ["string1 == string2", "string1 === string2", "string1.equals(string2)", "string1.compare(string2)"]
        },
        correctIndex: 2,
        explanation: {
          en: "The '.equals()' method compares the actual text contents of two String objects. The '==' operator only checks if they point to the same memory reference.",
          km: "វិធីសាស្ត្រ '.equals()' ពិនិត្យខ្លឹមសារតួអក្សរពិតប្រាកដ។ ចំណែក '==' គ្រាន់តែពិនិត្យមើលអាសយដ្ឋានមេម៉ូរីរបស់វត្ថុប៉ុណ្ណោះ។"
        }
      },
      {
        id: "java-q3",
        question: {
          en: "Which keyword is used to establish class inheritance in Java?",
          km: "តើពាក្យគន្លឹះមួយណាដែលត្រូវបានប្រើប្រាស់ដើម្បីទាញយកមរតកថ្នាក់ (Inheritance) នៅក្នុង Java?"
        },
        options: {
          en: ["implements", "inherits", "extends", "super"],
          km: ["implements", "inherits", "extends", "super"]
        },
        correctIndex: 2,
        explanation: {
          en: "The 'extends' keyword is used to create a subclass that inherits fields and methods from a parent class.",
          km: "ពាក្យគន្លឹះ 'extends' ត្រូវបានប្រើដើម្បីបង្កើតថ្នាក់កូន (Subclass) ដែលទទួលមរតកពីថ្នាក់ឪពុក (Superclass)។"
        }
      },
      {
        id: "java-q4",
        question: {
          en: "What is the evaluated output of '5 / 2' in Java?",
          km: "តើលទ្ធផលគណនានៃការបែងចែក '5 / 2' នៅក្នុង Java ស្មើនឹងប៉ុន្មាន?"
        },
        options: {
          en: ["2.5", "2", "3", "Error"],
          km: ["2.5", "2", "3", "Error"]
        },
        correctIndex: 1,
        explanation: {
          en: "Since both operands are integers, Java performs integer division, which discards the decimal fractional part, yielding 2.",
          km: "ដោយសារធាតុទាំងពីរជាចំនួនគត់ (Integers) Java នឹងគណនាតាមវិធីចែកចំនួនគត់ដោយបោះបង់ផ្នែកទសភាគចោល នាំឱ្យទទួលបានលទ្ធផលជា ២។"
        }
      }
    ],
    miniProjects: [
      {
        id: "java-fleet-proj",
        title: {
          en: "Bilingual Vehicle Fleet Analyzer",
          km: "ប្រព័ន្ធវិភាគយានយន្តទ្វិភាសា"
        },
        desc: {
          en: "Implement a robust, encapsulated vehicle inventory class hierarchy. Complete the setter validations to guarantee safety limits and display fleet details.",
          km: "បង្កើតរចនាសម្ព័ន្ធថ្នាក់គ្រប់គ្រងយានយន្តដែលការពារដោយ Encapsulation។ បំពេញលក្ខខណ្ឌនៅក្នុង Setter ដើម្បីធានាសុវត្ថិភាពទិន្នន័យ និងបង្ហាញរបាយការណ៍សង្ខេប។"
        },
        starterCode: `import java.util.ArrayList;

class Vehicle {
    private String brand;
    private int year;

    public Vehicle(String brand, int year) {
        this.brand = brand;
        // TODO: Call setYear method to handle validation safely!
    }

    public String getBrand() { return brand; }
    public int getYear() { return year; }

    // Challenge: Complete this Setter to restrict year between 1900 and 2026.
    // If year is invalid, set default year to 2026.
    public void setYear(int year) {
        // Write validation here
    }
}

public class Main {
    public static void main(String[] args) {
        ArrayList<Vehicle> fleet = new ArrayList<>();
        
        // Add vehicles
        fleet.add(new Vehicle("Toyota Prius", 2022));
        fleet.add(new Vehicle("Vintage Ford", 1850)); // Invalid! Must default to 2026.
        
        System.out.println("=== Safe Fleet Inventory Summary ===");
        for (Vehicle v : fleet) {
            System.out.println("Vehicle: " + v.getBrand() + " | Year: " + v.getYear());
        }
    }
}`,
        solutionCode: `import java.util.ArrayList;

class Vehicle {
    private String brand;
    private int year;

    public Vehicle(String brand, int year) {
        this.brand = brand;
        setYear(year); // Set safely with validation!
    }

    public String getBrand() { return brand; }
    public int getYear() { return year; }

    public void setYear(int year) {
        if (year >= 1900 && year <= 2026) {
            this.year = year;
        } else {
            System.out.println("Warning: Invalid year " + year + " restricted to default 2026.");
            this.year = 2026; // Safe default
        }
    }
}

public class Main {
    public static void main(String[] args) {
        ArrayList<Vehicle> fleet = new ArrayList<>();
        
        fleet.add(new Vehicle("Toyota Prius", 2022));
        fleet.add(new Vehicle("Vintage Ford", 1850)); // Trigger validation
        
        System.out.println("\n=== Safe Fleet Inventory Summary ===");
        for (Vehicle v : fleet) {
            System.out.println("Vehicle: " + v.getBrand() + " | Year: " + v.getYear());
        }
    }
}`
      }
    ]
  },
  {
    id: "cpp",
    title: { en: "C++", km: "C++" },
    desc: {
      en: "Highly performance-focused procedural + object-oriented language. Learn classes, the STL library, templates, and pointers.",
      km: "ភាសាកូដដែលផ្តោតខ្លាំងលើល្បឿន និងសមត្ថភាពខ្ពស់។ សិក្សាពីថ្នាក់ (Classes) បណ្ណាល័យ STL និងគំរូកូដ (Templates)។"
    },
    category: "programming",
    difficulty: "advanced",
    estimatedHours: 8,
    iconName: "Code2",
    topics: cppTopics,
    references: [
      {
        id: "cpp-ref-cout",
        syntax: "std::cout << val1 << val2;",
        desc: {
          en: "Prints values to the standard console output stream. Chained with insertion operator (<<).",
          km: "បង្ហាញលទ្ធផលទៅកាន់អេក្រង់កុងសូលស្តង់ដារ។ ភ្ជាប់គ្នាដោយប្រើប្រមាណសញ្ញា (<<)។"
        },
        example: "std::cout << \"Age: \" << 21 << \"\\n\";"
      },
      {
        id: "cpp-ref-cin",
        syntax: "std::cin >> variable;",
        desc: {
          en: "Reads user values from standard keyboard input stream based on whitespace breaks.",
          km: "អានតម្លៃបញ្ចូលពីក្តារចុចស្តង់ដារទៅក្នុងអថេរ ដោយបំបែកតាមដកឃ្លា។"
        },
        example: "int age;\nstd::cin >> age;"
      },
      {
        id: "cpp-ref-pointer",
        syntax: "type* ptr = &variable;",
        desc: {
          en: "Declares a pointer variable that stores the hex memory address of another variable.",
          km: "ប្រកាសអថេរចង្អុល (Pointer) សម្រាប់រក្សាទុកអាសយដ្ឋានមេម៉ូរីរបស់អថេរផ្សេងទៀត។"
        },
        example: "int num = 45;\nint* ptr = &num;"
      },
      {
        id: "cpp-ref-ref",
        syntax: "type& ref = variable;",
        desc: {
          en: "Creates a reference variable that acts as an alternative name (alias) for an existing variable.",
          km: "បង្កើតអថេរសេចក្តីយោង (Reference) ដែលដើរតួជាឈ្មោះហៅក្រៅរបស់អថេរដែលមានស្រាប់។"
        },
        example: "std::string food = \"Pizza\";\nstd::string& meal = food;"
      },
      {
        id: "cpp-ref-class",
        syntax: "class MyClass { ... };",
        desc: {
          en: "Defines an object-oriented class template. Members are private by default unless public/protected are defined.",
          km: "បង្កើតប្លង់ថ្នាក់ (Class Template) បែប OOP។ សមាជិកជា private ជាលំនាំដើម លុះត្រាតែប្រកាស public/protected។"
        },
        example: "class Car {\npublic:\n    std::string brand;\n};"
      },
      {
        id: "cpp-ref-virtual",
        syntax: "virtual void action() override;",
        desc: {
          en: "Declares parent virtual methods for runtime dynamic dispatch overriding in derived classes.",
          km: "ប្រកាសអនុគមន៍ virtual ក្នុងថ្នាក់ឪពុក ដើម្បីអនុញ្ញាតឱ្យថ្នាក់កូនកែប្រែដំណើរការ (Overriding) ពេលកម្មវិធីកំពុងរត់។"
        },
        example: "virtual void display() const override;"
      }
    ],
    quizzes: [
      {
        id: "cpp-q1",
        question: {
          en: "What does the dereference operator (*) do when applied to a pointer in C++?",
          km: "តើប្រមាណសញ្ញាផ្កាយ (*) ធ្វើអ្វីខ្លះនៅពេលប្រើជាមួយ Pointer នៅក្នុង C++?"
        },
        options: {
          en: [
            "Gets the memory address of the pointer",
            "Retrieves the actual value stored at the memory address pointed to",
            "Deletes the pointer from dynamic heap memory",
            "Converts the pointer to a standard reference type"
          ],
          km: [
            "យកអាសយដ្ឋានមេម៉ូរីរបស់ Pointer",
            "ទាញយកតម្លៃពិតប្រាកដដែលរក្សាទុកនៅអាសយដ្ឋានដែលចង្អុលទៅនោះ",
            "លុប Pointer ចេញពីគំនរមេម៉ូរី Heap",
            "បំប្លែង Pointer ទៅជាប្រភេទសេចក្តីយោងស្តង់ដារ"
          ]
        },
        correctIndex: 1,
        explanation: {
          en: "The dereference operator (*) accesses the actual value held at the memory address stored inside the pointer. The address-of operator (&) is used to find a variable's address.",
          km: "ប្រមាណសញ្ញាទាញយកតម្លៃ (*) ចូលទៅយកតម្លៃពិតដែលស្ថិតនៅអាសយដ្ឋានចង្អុល។ ចំណែក (&) គឺប្រើសម្រាប់ទាញយកអាសយដ្ឋានមេម៉ូរីវិញ។"
        }
      },
      {
        id: "cpp-q2",
        question: {
          en: "What is a major technical difference between a class and a struct in C++?",
          km: "តើភាពខុសគ្នាផ្នែកបច្ចេកទេសចម្បងរវាង class និង struct នៅក្នុង C++ គឺជាអ្វី?"
        },
        options: {
          en: [
            "Classes can have methods, but structs cannot have functions",
            "Class members are private by default, while struct members are public by default",
            "Structs cannot be dynamically allocated using the new operator",
            "Classes are allocated on the Heap, while structs are always on the Stack"
          ],
          km: [
            "Class អាចមានវិធីសាស្ត្រ ចំណែក struct មិនអាចមានអនុគមន៍ឡើយ",
            "សមាជិក Class ជា private ជាលំនាំដើម ខណៈដែលសមាជិក struct ជា public ជាលំនាំដើម",
            "Struct មិនអាចបម្រុងទុកដោយឌីណាមិកតាមរយៈ new បានទេ",
            "Class ត្រូវបានបម្រុងទុកនៅលើ Heap ជានិច្ច ខណៈ struct នៅលើ Stack ជានិច្ច"
          ]
        },
        correctIndex: 1,
        explanation: {
          en: "In C++, the only technical difference is default access specifiers: members of a class are private by default, whereas members of a struct are public by default.",
          km: "នៅក្នុង C++ ភាពខុសគ្នាតែមួយគត់គឺសិទ្ធិលំនាំដើម៖ សមាជិករបស់ class គឺ private ជាលំនាំដើម រីឯសមាជិក struct គឺ public ជាលំនាំដើម។"
        }
      },
      {
        id: "cpp-q3",
        question: {
          en: "Which C++ operator must be called to free dynamic memory allocated with 'new int[10]'?",
          km: "តើប្រមាណសញ្ញា C++ មួយណាដែលត្រូវហៅដើម្បីដោះលែងមេម៉ូរីឌីណាមិកដែលបង្កើតដោយ 'new int[10]'?"
        },
        options: {
          en: [
            "delete ptr;",
            "free(ptr);",
            "delete[] ptr;",
            "remove ptr;"
          ],
          km: [
            "delete ptr;",
            "free(ptr);",
            "delete[] ptr;",
            "remove ptr;"
          ]
        },
        correctIndex: 2,
        explanation: {
          en: "When dynamic memory is allocated as an array using 'new[]', it must be released using the square-bracket array version 'delete[]' to prevent memory leaks and trigger destructors properly.",
          km: "នៅពេលដែលមេម៉ូរីឌីណាមិកត្រូវបានបម្រុងទុកជាអារេដោយប្រើ 'new[]' យើងត្រូវតែដោះលែងវាដោយប្រើប្រាស់ 'delete[]' ជានិច្ចដើម្បីកុំឱ្យលេចធ្លាយមេម៉ូរី។"
        }
      }
    ],
    miniProjects: [
      {
        id: "cpp-bank-proj",
        title: {
          en: "Secure OOP Bank Terminal",
          km: "កម្មវិធីធនាគារសុវត្ថិភាព OOP"
        },
        desc: {
          en: "Implement an encapsulated BankAccount class hierarchy. Complete the setters to restrict invalid withdrawals and apply savings interest calculations safely.",
          km: "សរសេរកូដរចនាសម្ព័ន្ធថ្នាក់គ្រប់គ្រងគណនីធនាគារដែលការពារដោយ Encapsulation។ បំពេញកូដការពារនៅក្នុង Setter ដើម្បីទប់ស្កាត់ការដកប្រាក់លើសគណនី និងគណនាអត្រាការប្រាក់។"
        },
        starterCode: `#include <iostream>
#include <string>
using namespace std;

class BankAccount {
protected:
    double balance; // Private/Protected from external hacks

public:
    string ownerName;

    BankAccount(string owner, double initialBalance) : ownerName(owner) {
        // TODO: Validate that initialBalance cannot be negative! If negative, set to 0.
    }

    double getBalance() const { return balance; }

    // Challenge: Complete the deposit rules
    void deposit(double amount) {
        // TODO: Add amount to balance only if amount is positive!
    }

    // Challenge: Complete the withdraw safety checks
    virtual void withdraw(double amount) {
        // TODO: Deduct amount from balance only if amount is positive AND balance >= amount!
    }
};

class SavingsAccount : public BankAccount {
private:
    double interestRate; // e.g. 5.0 for 5%

public:
    SavingsAccount(string owner, double initialBalance, double rate) 
        : BankAccount(owner, initialBalance), interestRate(rate) {}

    // Challenge: Apply annual interest to the balance
    void applyInterest() {
        // TODO: Calculate interest and add directly to balance!
    }
};

int main() {
    cout << "=== OOP Bank Sandbox Terminal ===\\n";
    SavingsAccount myAcc("Visal Sok", 1000.0, 5.0); // 5% interest
    
    // 1. Try illegal actions
    myAcc.deposit(-200); // Invalid!
    myAcc.withdraw(1500); // Invalid! (Overdraft protected)
    
    // 2. Perform correct actions
    myAcc.deposit(500); // New balance: 1500
    myAcc.applyInterest(); // Earns 5% interest
    
    cout << "Final verified balance: $" << myAcc.getBalance() << "\\n";
    return 0;
}`,
        solutionCode: `#include <iostream>
#include <string>
using namespace std;

class BankAccount {
protected:
    double balance;

public:
    string ownerName;

    BankAccount(string owner, double initialBalance) : ownerName(owner) {
        if (initialBalance >= 0) {
            balance = initialBalance;
        } else {
            balance = 0;
            cout << "Warning: Negative initial balance restricted to $0.\\n";
        }
    }

    double getBalance() const { return balance; }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposit approved: +$" << amount << "\\n";
        } else {
            cout << "Deposit rejected: Invalid amount " << amount << "\\n";
        }
    }

    virtual void withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            cout << "Withdrawal approved: -$" << amount << "\\n";
        } else {
            cout << "Withdrawal rejected: Insufficient funds or invalid amount!\\n";
        }
    }
};

class SavingsAccount : public BankAccount {
private:
    double interestRate; // percentage

public:
    SavingsAccount(string owner, double initialBalance, double rate) 
        : BankAccount(owner, initialBalance), interestRate(rate) {}

    void applyInterest() {
        double interest = balance * (interestRate / 100.0);
        balance += interest;
        cout << "Interest applied (" << interestRate << "%): +$" << interest << "\\n";
    }
};

int main() {
    cout << "=== OOP Bank Sandbox Terminal ===\\n";
    SavingsAccount myAcc("Visal Sok", 1000.0, 5.0);
    
    // 1. Try illegal actions
    myAcc.deposit(-200); 
    myAcc.withdraw(1500); 
    
    // 2. Perform correct actions
    myAcc.deposit(500); 
    myAcc.applyInterest(); 
    
    cout << "\\nFinal verified balance: $" << myAcc.getBalance() << "\\n";
    return 0;
}`
      }
    ]
  },
  {
    id: "csharp",
    title: { en: "C#", km: "C#" },
    desc: {
      en: "Microsoft's modern object-oriented language. Build Windows apps, backend services, and Unity 2D/3D games with C#.",
      km: "ភាសាកូដទំនើបរបស់ Microsoft។ រៀនបង្កើតកម្មវិធីសម្រាប់ Windows កូដខាងក្រោយ និងហ្គេម 2D/3D (Unity)។"
    },
    category: "programming",
    difficulty: "intermediate",
    estimatedHours: 6,
    iconName: "Hash",
    topics: csharpTopics,
    references: [
      {
        id: "cs-ref-print",
        syntax: "Console.WriteLine(value);",
        desc: {
          en: "Prints text or variable value to the console window, followed by a line terminator.",
          km: "បង្ហាញអត្ថបទ ឬតម្លៃអថេរនៅលើអេក្រង់ Console រួចចុះបន្ទាត់ថ្មី។"
        },
        example: "Console.WriteLine(\"Hello, Cambodia!\");"
      },
      {
        id: "cs-ref-convert",
        syntax: "Convert.ToInt32(string_value);",
        desc: {
          en: "Converts a string or other data representation into a 32-bit signed integer safely.",
          km: "បំប្លែងតម្លៃអក្សរ (String) ទៅជាចំនួនគត់ ៣២បៃ (Integer) យ៉ាងមានសុវត្ថិភាព។"
        },
        example: "int score = Convert.ToInt32(\"95\");"
      },
      {
        id: "cs-ref-prop",
        syntax: "public string Model { get; set; }",
        desc: {
          en: "Declares an auto-implemented property that abstracts field reading and writing.",
          km: "ប្រកាសលក្ខណៈសម្បត្តិ (Property) ស្វ័យប្រវត្តដែលជួយសម្រួលការអានសរសេរតម្លៃដោយសុវត្ថិភាព។"
        },
        example: "public int Speed { get; set; } = 60;"
      },
      {
        id: "cs-ref-inherit",
        syntax: "class Derived : BaseClass",
        desc: {
          en: "Indicates that the derived class inherits all fields, properties, and methods of the parent base class.",
          km: "បង្ហាញថា Class កូនបន្តពូជទទួលបានរាល់អថេរ លក្ខណៈសម្បត្តិ និងវិធីសាស្ត្រពី Class ឪពុក។"
        },
        example: "class ElectricCar : Vehicle"
      },
      {
        id: "cs-ref-poly",
        syntax: "public override void Action();",
        desc: {
          en: "Overrides a virtual method defined in a base class to implement specific child behavior at runtime.",
          km: "សរសើរកូដថ្មីជំនួស Method របស់ថ្នាក់ឪពុក (Virtual) ដើម្បីដំណើរការសកម្មភាពជាក់លាក់របស់ថ្នាក់កូន។"
        },
        example: "public override void StartEngine() { }"
      }
    ],
    quizzes: [
      {
        id: "cs-q1",
        question: {
          en: "Which keyword is used in C# to allow a base class method to be overridden in a derived class?",
          km: "តើពាក្យគន្លឹះមួយណាដែលប្រើក្នុង C# ដើម្បីអនុញ្ញាតឱ្យ Method របស់ថ្នាក់ឪពុកអាចត្រូវបាន Override នៅក្នុងថ្នាក់កូន?"
        },
        options: {
          en: [
            "new",
            "virtual",
            "override",
            "abstract"
          ],
          km: [
            "new",
            "virtual",
            "override",
            "abstract"
          ]
        },
        correctIndex: 1,
        explanation: {
          en: "The 'virtual' keyword is used in a base class to authorize overriding. The derived class must then use the 'override' keyword to replace it.",
          km: "ពាក្យគន្លឹះ 'virtual' ប្រើក្នុងថ្នាក់ឪពុកដើម្បីបើកសិទ្ធិឱ្យគេ Override។ រីឯថ្នាក់កូនត្រូវប្រើពាក្យ 'override' ដើម្បីសរសេរកូដជំនួស។"
        }
      },
      {
        id: "cs-q2",
        question: {
          en: "What is a major technical benefit of using a C# Property with get/set over a public variable field?",
          km: "តើអត្ថប្រយោជន៍បច្ចេកទេសចម្បងនៃការប្រើប្រាស់ C# Property (get/set) ធៀបនឹងការប្រើប្រាស់អថេរ Public ធម្មតាគឺជាអ្វី?"
        },
        options: {
          en: [
            "Properties bypass standard compilation checks to run faster",
            "Properties enable clean data encapsulation and on-the-fly value validation",
            "Properties are always stored on the Stack whereas fields are on the Heap",
            "Properties do not require an explicit data type declaration"
          ],
          km: [
            "Property រំលងការពិនិត្យកូដរបស់ Compiler ដើម្បីរត់ឱ្យបានលឿនជាងមុន",
            "Property អនុញ្ញាតឱ្យមានការវេចខ្ចប់ទិន្នន័យ (Encapsulation) និងការផ្ទៀងផ្ទាត់តម្លៃភ្លាមៗ",
            "Property តែងតែរក្សាទុកលើ Stack ខណៈដែលអថេរធម្មតានៅលើ Heap",
            "Property មិនទាមទារការកំណត់ប្រភេទទិន្នន័យឡើយ"
          ]
        },
        correctIndex: 1,
        explanation: {
          en: "Properties encapsulate private backing fields. By writing validation checks inside the 'set' block, you prevent corrupted or invalid data from entering your object model.",
          km: "Property ជួយវេចខ្ចប់ទិន្នន័យអថេរទ្រនាប់។ តាមរយៈការសរសេរលក្ខខណ្ឌការពារក្នុងប្លុក 'set' យើងអាចទប់ស្កាត់ការបញ្ជូនទិន្នន័យខុសឆ្គង។"
        }
      },
      {
        id: "cs-q3",
        question: {
          en: "What happens if you omit a terminal keyword like 'break' inside an active switch-case block in C#?",
          km: "តើមានអ្វីកើតឡើង ប្រសិនបើអ្នកបំភ្លេចសរសេរពាក្យបញ្ជាបញ្ចប់ដូចជា 'break' នៅក្នុង switch-case block ដែលសកម្មក្នុង C#?"
        },
        options: {
          en: [
            "The program falls through to the next case automatically at runtime",
            "The compiler raises a compilation error because fall-through is strictly prohibited",
            "The program automatically redirects execution to the default case block",
            "The application crashes at runtime with an IndexOutOfRangeException"
          ],
          km: [
            "កម្មវិធីនឹងរត់ធ្លាក់ទៅ Case បន្ទាប់ដោយស្វ័យប្រវត្តិតែម្តងពេលដំណើរការ",
            "Compiler នឹងផ្តល់កំហុសភ្លាមៗ (Error) ព្រោះ C# ហាមឃាត់ការរត់ធ្លាក់ជម្រើស (Fall-through)",
            "កម្មវិធីនឹងប្តូរការរត់កូដទៅកាន់ប្លុក Default ដោយស្វ័យប្រវត្តិ",
            "កម្មវិធីនឹងគាំងពេលរត់ដោយសារ IndexOutOfRangeException"
          ]
        },
        correctIndex: 1,
        explanation: {
          en: "C# enforces a strict 'no fall-through' rule. If a case has executable code, it must end with a jump statement like 'break' or 'return' or 'throw', otherwise it fails to compile.",
          km: "C# មានច្បាប់តឹងរឹងមិនឱ្យរត់ធ្លាក់ជម្រើសឡើយ (No fall-through)។ បើ Case នីមួយៗមានកូដរត់ វាដាច់ខាតត្រូវតែបញ្ចប់ដោយ 'break' ឬ 'return' បើមិនដូច្នោះទេនឹងមិនអាចចងក្រងកូដបានឡើយ។"
        }
      }
    ],
    miniProjects: [
      {
        id: "cs-bank-proj",
        title: {
          en: "Secure OOP Bank Terminal",
          km: "កម្មវិធីធនាគារសុវត្ថិភាព OOP"
        },
        desc: {
          en: "Implement an encapsulated BankAccount class hierarchy. Complete the properties and safety rules to restrict invalid transactions.",
          km: "សរសេរកូដគ្រប់គ្រងគណនីធនាគារដែលការពារដោយ Encapsulation។ បំពេញកូដការពារនៅក្នុង Property ដើម្បីទប់ស្កាត់ការដកប្រាក់លើសគណនី។"
        },
        starterCode: `using System;

class BankAccount {
    private double balance; // Secure private backing field
    public string OwnerName { get; set; }

    public BankAccount(string owner, double initialBalance) {
        OwnerName = owner;
        // TODO: Initialize balance using the Balance property rules!
    }

    // Property for secure access
    public double Balance {
        get { return balance; }
        set {
            // TODO: Only accept positive or zero values! If negative, output warning and set to 0.
        }
    }

    public virtual void Deposit(double amount) {
        // TODO: Add amount to balance only if amount > 0!
    }

    public virtual void Withdraw(double amount) {
        // TODO: Deduct amount only if amount is positive AND balance >= amount!
    }
}

class SavingsAccount : BankAccount {
    public double InterestRate { get; set; } // e.g. 0.05 for 5%

    public SavingsAccount(string owner, double initialBalance, double rate) 
        : base(owner, initialBalance) {
        InterestRate = rate;
    }

    public void ApplyInterest() {
        // TODO: Calculate interest (Balance * InterestRate) and deposit it!
    }
}

class Program {
    static void Main() {
        Console.WriteLine("=== C# OOP Bank Terminal ===");
        SavingsAccount myAcc = new SavingsAccount("Dara Sok", 1000.0, 0.05);
        
        // 1. Try invalid actions
        myAcc.Deposit(-200); // Should be rejected
        myAcc.Withdraw(1500); // Should be rejected
        
        // 2. Perform correct actions
        myAcc.Deposit(500); // New balance should be 1500
        myAcc.ApplyInterest(); // Earns 5% ($75)
        
        Console.WriteLine($"\\nFinal Balance for {myAcc.OwnerName}: \${myAcc.Balance}");
    }
}`,
        solutionCode: `using System;

class BankAccount {
    private double balance;
    public string OwnerName { get; set; }

    public BankAccount(string owner, double initialBalance) {
        OwnerName = owner;
        Balance = initialBalance; // Uses Property setter for validation
    }

    public double Balance {
        get { return balance; }
        set {
            if (value >= 0) {
                balance = value;
            } else {
                balance = 0;
                Console.WriteLine("Warning: Initial balance cannot be negative. Set to $0.");
            }
        }
    }

    public virtual void Deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            Console.WriteLine($"Deposit Approved: +\${amount}");
        } else {
            Console.WriteLine("Deposit Rejected: Invalid amount!");
        }
    }

    public virtual void Withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            Console.WriteLine($"Withdrawal Approved: -\${amount}");
        } else {
            Console.WriteLine("Withdrawal Rejected: Insufficient funds or invalid amount!");
        }
    }
}

class SavingsAccount : BankAccount {
    public double InterestRate { get; set; }

    public SavingsAccount(string owner, double initialBalance, double rate) 
        : base(owner, initialBalance) {
        InterestRate = rate;
    }

    public void ApplyInterest() {
        double interest = Balance * InterestRate;
        Deposit(interest);
        Console.WriteLine($"Interest Applied ({InterestRate * 100}%): +\${interest}");
    }
}

class Program {
    static void Main() {
        Console.WriteLine("=== C# OOP Bank Terminal ===");
        SavingsAccount myAcc = new SavingsAccount("Dara Sok", 1000.0, 0.05);
        
        // 1. Try invalid actions
        myAcc.Deposit(-200);
        myAcc.Withdraw(1500);
        
        // 2. Perform correct actions
        myAcc.Deposit(500);
        myAcc.ApplyInterest();
        
        Console.WriteLine($"\\nFinal Balance for {myAcc.OwnerName}: \${myAcc.Balance}");
    }
}`
      }
    ]
  },
  {
    id: "sql",
    title: { en: "SQL", km: "SQL" },
    desc: {
      en: "Structured Query Language. Learn to select, filter, insert, update, delete, and join relational tables in modern databases.",
      km: "ភាសាសួរព័ត៌មានរចនាសម្ព័ន្ធ។ រៀនទាញទិន្នន័យ តម្រង បញ្ចូល កែប្រែ លុប និងតភ្ជាប់តារាងទិន្នន័យ (Table Joins)។"
    },
    category: "database",
    difficulty: "beginner",
    estimatedHours: 4,
    iconName: "Database",
    topics: mysqlTopics,
    references: mysqlReferences,
    quizzes: mysqlQuizzes,
    miniProjects: mysqlMiniProjects
  },
  {
    id: "mysql",
    title: { en: "MySQL", km: "MySQL" },
    desc: {
      en: "The world's most widely used open-source relational database engine. Explore user access, indexing, tables, and transactional queries.",
      km: "ម៉ាស៊ីនមូលដ្ឋានទិន្នន័យប្រភពបើកចំហដែលពេញនិយមបំផុត។ ស្វែងយល់ការបង្កើតតារាង សន្ទស្សន៍ (Indexing) និងប្រតិបត្តិការទិន្នន័យ។"
    },
    category: "database",
    difficulty: "intermediate",
    estimatedHours: 6,
    iconName: "DatabaseBackup",
    topics: mysqlTopics,
    references: mysqlReferences,
    quizzes: mysqlQuizzes,
    miniProjects: mysqlMiniProjects
  },
  {
    id: "git",
    title: { en: "Git Version Control", km: "ការគ្រប់គ្រងកំណែកូដ Git" },
    desc: {
      en: "The industry standard tool for code tracking and collaboration. Master commits, branches, pull requests, and merge conflict resolution.",
      km: "ឧបករណ៍ស្ដង់ដារឧស្សាហកម្មសម្រាប់ការតាមដានការផ្លាស់ប្តូរកូដ។ យល់ដឹងពី Commits, Branches, Pull Requests និងការដោះស្រាយវិវាទកូដ។"
    },
    category: "tooling",
    difficulty: "beginner",
    estimatedHours: 5,
    iconName: "GitBranch",
    topics: gitTopics,
    references: [],
    quizzes: [],
    miniProjects: []
  },
  {
    id: "jquery",
    title: { en: "jQuery", km: "jQuery" },
    desc: {
      en: "Write less, do more. Simplify client-side scripts, DOM selections, animations, styles, and AJAX requests with jQuery.",
      km: "សរសេរកូដតិច ធ្វើបានច្រើន។ បង្រួមការសរសេរកូដជ្រើសរើសធាតុ DOM បង្កើតចលនា និងការទាញយកទិន្នន័យ (AJAX) ឱ្យងាយស្រួល។"
    },
    category: "framework",
    difficulty: "beginner",
    estimatedHours: 6,
    iconName: "FileCode",
    topics: jqueryTopics,
    references: jqueryReferences,
    quizzes: jqueryQuizzes,
    miniProjects: jqueryMiniProjects
  },
  {
    id: "react",
    title: { en: "React.js", km: "React.js" },
    desc: {
      en: "The most popular UI library. Master component architecture, dynamic state, props, effect hooks, and modular UI engineering.",
      km: "បណ្ណាល័យ UI ដែលពេញនិយមបំផុត។ សិក្សាពីរចនាសម្ព័ន្ធសមាសភាគ (Components) សភាពឌីណាមិក (State) Props និង Hooks។"
    },
    category: "framework",
    difficulty: "intermediate",
    estimatedHours: 5,
    iconName: "Component",
    topics: reactTopics,
    references: reactReferences,
    quizzes: reactQuizzes,
    miniProjects: reactMiniProjects
  },
  {
    id: "tailwind",
    title: { en: "Tailwind CSS", km: "Tailwind CSS" },
    desc: {
      en: "The revolutionary utility-first CSS framework. Learn to construct fully custom professional templates directly inside HTML classes.",
      km: "ក្របខ័ណ្ឌ CSS បែបប្រើប្រាស់ពាក្យគន្លឹះផ្ទាល់។ រៀនបង្កើតប្លង់គេហទំព័រអាជីពយ៉ាងលឿន ដោយសរសេរថ្នាក់រចនាផ្ទាល់ក្នុងកូដ HTML។"
    },
    category: "framework",
    difficulty: "beginner",
    estimatedHours: 6,
    iconName: "Palette",
    topics: generateTailwindTopics(),
    references: [
      { id: "tw-ref-p", syntax: "p-{size}", desc: { en: "Sets padding on all sides", km: "កំណត់គម្លាតខាងក្នុងគ្រប់ជ្រុង" }, example: "<div class='p-4'>Content</div>" },
      { id: "tw-ref-m", syntax: "m-{size}", desc: { en: "Sets margin on all sides", km: "កំណត់គម្លាតខាងក្រៅគ្រប់ជ្រុង" }, example: "<div class='m-4'>Content</div>" },
      { id: "tw-ref-rounded", syntax: "rounded-{size}", desc: { en: "Sets border radius curvature", km: "កំណត់ភាពមូលជ្រុងរបស់ប្រអប់" }, example: "<div class='rounded-xl'>Rounded</div>" },
      { id: "tw-ref-shadow", syntax: "shadow-{size}", desc: { en: "Sets container box shadow visual elevation", km: "កំណត់ស្រមោលអណ្តែតប្រអប់" }, example: "<div class='shadow-lg'>Elevated</div>" },
      { id: "tw-ref-flex", syntax: "flex", desc: { en: "Applies CSS Flexbox layout alignment", km: "រៀបចំលក្ខណៈប្លង់បត់បែន Flexbox" }, example: "<div class='flex items-center'>Flex</div>" }
    ],
    quizzes: [
      {
        id: "tw-q1",
        question: {
          en: "What is the primary core philosophy of Tailwind CSS?",
          km: "តើអ្វីទៅជាទស្សនវិជ្ជាស្នូលចម្បងរបស់ Tailwind CSS?"
        },
        options: {
          en: [
            "Utility-First: combining small, single-purpose classes directly inside templates",
            "Semantic-First: creating abstract classes like .btn-primary and .card-wrapper",
            "CSS-in-JS: writing style sheets inside JavaScript component bodies",
            "Inline-Styles: generating inline CSS properties on the style attribute directly"
          ],
          km: [
            "Utility-First៖ ផ្សំផ្គុំ Class តូចៗដែលមានតួនាទីតែមួយជាក់លាក់នៅក្នុង Template ផ្ទាល់",
            "Semantic-First៖ បង្កើតឈ្មោះ Class បែបអរូបិយដូចជា .btn-primary និង .card-wrapper",
            "CSS-in-JS៖ សរសេរស្ទីលតុបតែងនៅក្នុងកម្មវិធី JavaScript component",
            "Inline-Styles៖ សរសេរស្ទីលតុបតែងផ្ទាល់លើ attribute style របស់ tag"
          ]
        },
        correctIndex: 0,
        explanation: {
          en: "Tailwind's core philosophy is Utility-First. Instead of building giant stylesheets with custom semantic names, you design layouts by adding ready-to-use utility classes together directly in your HTML templates.",
          km: "ទស្សនវិជ្ជាស្នូលរបស់ Tailwind គឺ Utility-First។ ជំនួសឱ្យការបង្កើតឯកសារស្ទីលធំៗដែលមានឈ្មោះស្មុគស្មាញ អ្នកគ្រាន់តែផ្សំផ្គុំ Class ស្រាប់ៗជាមួយគ្នានៅក្នុងកូដ HTML របស់អ្នក។"
        }
      },
      {
        id: "tw-q2",
        question: {
          en: "Which breakpoint prefix applies starting from tablet-size screens (768px and up)?",
          km: "តើ Prefix Breakpoint មួយណាដែលចាប់ផ្តើមអនុវត្តចាប់ពីអេក្រង់ទំហំថេបប្លេត (768px ឡើងទៅ)?"
        },
        options: {
          en: ["sm:", "md:", "lg:", "xl:"],
          km: ["sm:", "md:", "lg:", "xl:"]
        },
        correctIndex: 1,
        explanation: {
          en: "In Tailwind's default mobile-first system, 'md:' represents the medium breakpoint targeting tablets at 768px and up.",
          km: "នៅក្នុងប្រព័ន្ធ mobile-first របស់ Tailwind, 'md:' តំណាងឱ្យទំហំអេក្រង់មធ្យម (Medium breakpoint) សម្រាប់ថេបប្លេតចាប់ពី 768px ឡើងទៅ។"
        }
      },
      {
        id: "tw-q3",
        question: {
          en: "How do you specify a customized, one-off value on-the-fly (e.g. an exact top margin of 17px)?",
          km: "តើអ្នកសរសេរតម្លៃជាក់លាក់ណាមួយភ្លាមៗដោយរបៀបណា (ឧទាហរណ៍ គម្លាតខាងលើ ១៧ភីកសែល)?"
        },
        options: {
          en: [
            "Using square brackets syntax like mt-[17px]",
            "Adding custom CSS rules inside the tailwind.config.js file",
            "Using parentheses syntax like mt-(17px)",
            "Writing a native inline style='margin-top: 17px' attribute"
          ],
          km: [
            "ប្រើប្រាស់គ្នាក្នុងវាក្យសម្ពន្ធដូចជា mt-[17px]",
            "បន្ថែមច្បាប់រចនាផ្ទាល់ខ្លួននៅក្នុងឯកសារ tailwind.config.js",
            "ប្រើប្រាស់វង់ក្រចកក្នុងវាក្យសម្ពន្ធដូចជា mt-(17px)",
            "សរសេរ attribute ស្ទីលផ្ទាល់នៅលើ tag ដូចជា style='margin-top: 17px'"
          ]
        },
        correctIndex: 0,
        explanation: {
          en: "Tailwind supports arbitrary values using square brackets. Adding classes like mt-[17px] compiles a specific, one-off style property seamlessly.",
          km: "Tailwind គាំទ្រការសរសេរតម្លៃជាក់លាក់ភ្លាមៗដោយប្រើប្រាស់សញ្ញា [ ]។ ការសរសេរដូចជា mt-[17px] នឹងចងក្រងទៅជាស្ទីលជាក់លាក់នោះដោយស្វ័យប្រវត្ត។"
        }
      }
    ],
    miniProjects: [
      {
        id: "tw-proj-card",
        title: {
          en: "Profile Accent Card",
          km: "ប្រអប់ព័ត៌មានបុគ្គលិក"
        },
        desc: {
          en: "Design a responsive profile highlight card using a dark canvas theme. It should have a centered avatar image, rounded borders, soft floating shadows, active state hover effects, and responsive alignment.",
          km: "រចនាប្រអប់ព័ត៌មានបុគ្គលិកឆ្លើយតប (Responsive) ដ៏ស្រស់ស្អាតមួយដោយប្រើប្រាស់ប្រធានបទពណ៌ខ្មៅស្រអាប់។ វាត្រូវមានរូបភាពចំកណ្តាល ជ្រុងមូល មានស្រមោលអណ្តែត ផលប៉ះពាល់ពេល hover និងការតម្រឹមស្អាតបាត។"
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 flex items-center justify-center min-h-screen p-6">
  <!-- Build your Profile Card inside this container -->
  <div class="bg-white text-slate-800 p-8 rounded-xl max-w-sm w-full">
    <h2 class="text-xl font-bold">Replace Me!</h2>
    <p class="text-sm text-slate-500 mt-2">Style this container using Tailwind classes.</p>
  </div>
</body>
</html>`,
        solutionCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 flex items-center justify-center min-h-screen p-6">
  <div class="bg-slate-900 border border-slate-800 text-center p-8 rounded-2xl max-w-sm w-full shadow-2xl hover:border-indigo-500/50 transition-all duration-300">
    <div class="relative w-20 h-20 mx-auto">
      <img class="w-20 h-20 rounded-full border-2 border-indigo-500 shadow-md object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" alt="Avatar">
      <div class="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>
    </div>
    <h3 class="text-lg font-bold text-slate-100 mt-4 tracking-tight">Vannak Som</h3>
    <p class="text-xs text-indigo-400 font-mono tracking-wider uppercase mt-1">Lead Software Engineer</p>
    <p class="text-xs text-slate-400 mt-3 leading-relaxed">
      Passionate developer crafting modern intuitive full-stack web applications at Sabaicode Academy.
    </p>
    <div class="flex gap-2.5 mt-5">
      <button class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition active:scale-95">
        Follow
      </button>
      <button class="flex-1 bg-slate-800 hover:bg-slate-750 text-slate-200 font-bold text-xs py-2.5 px-4 rounded-xl border border-slate-700/60 transition active:scale-95">
        Message
      </button>
    </div>
  </div>
</body>
</html>`
      }
    ]
  },
  {
    id: "bootstrap",
    title: { en: "Bootstrap 5", km: "Bootstrap 5" },
    desc: {
      en: "The world's classic front-end responsive library. Build layouts using standard columns, rows, modals, buttons, and alert modules.",
      km: "បណ្ណាល័យរចនាគេហទំព័រឆ្លើយតប (Responsive) បែបបុរាណ។ បង្កើតប្លង់គេហទំព័រលឿនរហ័សដោយប្រើជួរឈរ ជួរដេក ម៉ូដាល់ និងប៊ូតុងស្អាតៗ។"
    },
    category: "framework",
    difficulty: "beginner",
    estimatedHours: 3,
    iconName: "Grid",
    topics: bootstrapTopics,
    references: [
      { id: "bs-container", syntax: "<div class='container'>", desc: { en: "Fixed width responsive container aligning content center.", km: "ប្រអប់ផ្ទុកទំហំលំនឹងរមូរឆ្លើយតបដែលតម្រឹមមាតិកានៅចំកណ្តាលទំព័រ។" }, example: "<div class='container'>Content</div>" },
      { id: "bs-row", syntax: "<div class='row'>", desc: { en: "Row wrapper for columns aligning items horizontally.", km: "ប្រអប់ជួរដេកសម្រាប់រុំជួរឈរតម្រៀបបញ្ឈរ ឬផ្តេក។" }, example: "<div class='row'><div class='col'>Col</div></div>" },
      { id: "bs-col", syntax: "<div class='col-md-6'>", desc: { en: "Defines a column stretching 6/12 width starting from medium viewports.", km: "កំណត់ជួរឈរដែលលាតសន្ធឹងទំហំ ៦/១២ ចាប់ពីអេក្រង់មធ្យមឡើងទៅ។" }, example: "<div class='col-md-6'>Half Width</div>" },
      { id: "bs-btn", syntax: "<button class='btn btn-primary'>", desc: { en: "Applies standard blue button utility states.", km: "បង្កើតប៊ូតុងស្ទីលពណ៌ខៀវស្តង់ដាររបស់ Bootstrap។" }, example: "<button class='btn btn-primary'>Submit</button>" },
      { id: "bs-modal", syntax: "<div class='modal fade'>", desc: { en: "Bootstrap dialogue popups overlaying viewport.", km: "ប្រអប់ផ្ទាំងអណ្តែតអន្តរកម្មលើកញ្ចក់អេក្រង់របស់ Bootstrap។" }, example: "<div class='modal fade' id='myModal'>...</div>" }
    ],
    quizzes: [
      {
        id: "bs-q1",
        question: { en: "How many columns are there in a standard Bootstrap 5 grid row?", km: "តើមានជួរឈរប៉ុន្មាននៅក្នុងជួរដេក Grid ស្តង់ដាររបស់ Bootstrap 5?" },
        options: {
          en: ["10 Columns", "12 Columns", "16 Columns", "8 Columns"],
          km: ["10 Columns", "12 Columns", "16 Columns", "8 Columns"]
        },
        correctIndex: 1,
        explanation: {
          en: "The Bootstrap 5 grid system consists of up to 12 columns per horizontal row.",
          km: "ប្រព័ន្ធក្រឡា Grid របស់ Bootstrap 5 មានរហូតដល់ទៅ ១២ កូនជួរឈរ (Columns) ក្នុងមួយជួរដេកផ្តេក។"
        }
      },
      {
        id: "bs-q2",
        question: { en: "Which class is used to create a responsive, collapsing navigation bar?", km: "តើ Class មួយណាត្រូវបានប្រើដើម្បីបង្កើតរបារម៉ឺនុយឆ្លើយតប និងអាចបង្រួមពន្លាតបាន?" },
        options: {
          en: [".navbar-expand-lg", ".nav-collapse", ".menu-responsive", ".navbar-fold"],
          km: [".navbar-expand-lg", ".nav-collapse", ".menu-responsive", ".navbar-fold"]
        },
        correctIndex: 0,
        explanation: {
          en: ".navbar-expand-lg controls the exact breakpoint where a navbar expands horizontally instead of collapsing.",
          km: "Class .navbar-expand-lg កំណត់កម្រិតទំហំអេក្រង់ដែលរបារម៉ឺនុយត្រូវលាតសន្ធឹងផ្តេក ជំនួសឱ្យការបង្រួមជា Hamburger។"
        }
      }
    ],
    miniProjects: [
      {
        id: "bs-project-dashboard",
        title: { en: "Responsive Admin Dashboard Workspace", km: "ផ្ទាំងគ្រប់គ្រងរដ្ឋបាលឆ្លើយតប Admin Dashboard" },
        desc: {
          en: "Build a modern Admin Dashboard panel. Use cards, alerts, grids, and flex alignment utilities to show statistics and transaction records.",
          km: "បង្កើតផ្ទាំងគ្រប់គ្រងរដ្ឋបាល (Admin Dashboard) មួយ។ ប្រើប្រាស់ Cards, Alerts, Grids និងថ្នាក់ជំនួយ Flexbox ដើម្បីបង្ហាញស្ថិតិ និងតារាងប្រតិបត្តិការ។"
        },
        starterCode: `<!DOCTYPE html>
<html>
<head>
  <!-- Load Bootstrap 5 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4">
  <div class="container">
    
    <!-- Step 1: Create a top header alert welcoming the admin -->
    
    <!-- Step 2: Create a 3-column stats row using .row and .col-md-4 -->
    
    <!-- Step 3: Inside columns, add .card with custom backgrounds (e.g. .bg-primary, .bg-success) -->
    
  </div>
</body>
</html>`,
        solutionCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    .metric-card { border: none; border-radius: 12px; transition: transform 0.2s; }
    .metric-card:hover { transform: translateY(-3px); }
  </style>
</head>
<body class="bg-light p-4">
  <div class="container" style="max-width: 900px;">
    
    <!-- Welcome Header Alert -->
    <div class="alert alert-primary alert-dismissible fade show border-0 shadow-sm mb-4" role="alert">
      <h5 class="alert-heading fw-bold mb-1">System Status Live</h5>
      <p class="mb-0 text-sm">Welcome back, administrator! All cloud-container pipelines are running successfully on port 3000.</p>
    </div>

    <!-- Quick Stats metrics -->
    <div class="row g-3 mb-4">
      <div class="col-12 col-md-4">
        <div class="card metric-card bg-primary text-white p-3 shadow-sm">
          <small class="text-white-50 uppercase fw-semibold">Active Users</small>
          <h2 class="fw-bold my-1">12,450</h2>
          <span class="text-xs">+12% from yesterday</span>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card metric-card bg-success text-white p-3 shadow-sm">
          <small class="text-white-50 uppercase fw-semibold">Sales Revenue</small>
          <h2 class="fw-bold my-1">$45,200</h2>
          <span class="text-xs">98% of monthly target</span>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card metric-card bg-dark text-white p-3 shadow-sm">
          <small class="text-white-50 uppercase fw-semibold">Errors Logged</small>
          <h2 class="fw-bold my-1">0</h2>
          <span class="text-xs">Healthy connection state</span>
        </div>
      </div>
    </div>

    <!-- Data Table card -->
    <div class="card border-0 shadow-sm p-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="fw-bold mb-0">Recent User Activations</h5>
        <button class="btn btn-sm btn-outline-secondary rounded-pill px-3">Export logs</button>
      </div>
      <div class="table-responsive">
        <table class="table align-middle mb-0 table-hover">
          <thead class="table-light">
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Status</th>
              <th>Registration Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#109</td>
              <td class="fw-semibold">Dara Sok</td>
              <td><span class="badge bg-success">Active</span></td>
              <td>Just now</td>
            </tr>
            <tr>
              <td>#108</td>
              <td class="fw-semibold">Sokchea Phoung</td>
              <td><span class="badge bg-success">Active</span></td>
              <td>12 mins ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</body>
</html>`
      }
    ]
  },
  {
    id: "php",
    title: { en: "PHP Backend", km: "PHP ម៉ាស៊ីនបម្រើ" },
    desc: {
      en: "Learn server-side scripting with PHP. Build dynamic websites, handle forms securely, manage session states, cookies, and master Object-Oriented PHP.",
      km: "រៀនសរសេរកូដម៉ាស៊ីនបម្រើជាមួយ PHP។ បង្កើតគេហទំព័រឌីណាមិក គ្រប់គ្រង Forms សុវត្ថិភាព គ្រប់គ្រង Sessions, Cookies និងប្រើប្រាស់ OOP ក្នុង PHP។"
    },
    category: "programming",
    difficulty: "intermediate",
    estimatedHours: 6,
    iconName: "Server",
    topics: phpTopics,
    references: [
      { id: "echo", syntax: "echo 'Message';", desc: { en: "Outputs strings or variables to the page", km: "បង្ហាញពត៌មានអត្ថបទ ឬអថេរនៅលើទំព័រ" }, example: "echo 'Hello from Cambodia!';" },
      { id: "var_dump", syntax: "var_dump($var);", desc: { en: "Outputs structured information about a variable including its type and value", km: "បង្ហាញពត៌មានលម្អិតរបស់អថេរ រួមទាំងប្រភេទទិន្នន័យ និងតម្លៃ" }, example: "var_dump([1, 2, 'PHP']);" },
      { id: "strlen", syntax: "strlen($string);", desc: { en: "Returns the length of the given string in bytes", km: "ផ្តល់មកវិញនូវប្រវែងរបស់ខ្សែអក្សរជាចំនួនបៃ (bytes)" }, example: "echo strlen('Angkor Wat');" },
      { id: "preg_match", syntax: "preg_match($pattern, $subject);", desc: { en: "Performs a regular expression match", km: "ស្វែងរកលំនាំអត្ថបទជាមួយកន្សោម RegEx" }, example: "preg_match('/php/i', 'I love PHP!');" },
      { id: "__construct", syntax: "public function __construct() { }", desc: { en: "Defines a class constructor called automatically on object creation", km: "ប្រកាសមុខងារស្ថាបនិករបស់ Class ដែលនឹងរត់ដោយស្វ័យប្រវត្តិពេលបង្កើត Object" }, example: "public function __construct($name) { $this->name = $name; }" },
      { id: "filter_var", syntax: "filter_var($value, FILTER_ID);", desc: { en: "Filters a variable with a specified validation or sanitization filter", km: "ចម្រោះ និងផ្ទៀងផ្ទាត់ ឬសម្អាតទិន្នន័យអថេរជាមួយតម្រងកំណត់ជាក់លាក់" }, example: "filter_var('dara@gmail.com', FILTER_VALIDATE_EMAIL);" },
      { id: "json_encode", syntax: "json_encode($value);", desc: { en: "Returns the JSON representation of a value (arrays or objects)", km: "បំប្លែងទិន្នន័យ (អារេ ឬ វត្ថុ) ទៅជាអត្ថបទ JSON String" }, example: "echo json_encode(['status' => 'ok']);" },
      { id: "session_start", syntax: "session_start();", desc: { en: "Starts or resumes a user session on the server", km: "ចាប់ផ្តើម ឬបន្តដំណើរការសេសសិន (Session) របស់អ្នកប្រើប្រាស់លើម៉ាស៊ីនបម្រើ" }, example: "session_start();" }
    ],
    quizzes: [
      {
        id: "php-q1",
        question: { en: "What does PHP stand for?", km: "តើ PHP តំណាងឱ្យអ្វី?" },
        options: {
          en: ["PHP: Hypertext Preprocessor", "Personal Home Page", "Private Hypertext Parser", "Processor Hypertext Protocol"],
          km: ["PHP: Hypertext Preprocessor", "Personal Home Page", "Private Hypertext Parser", "Processor Hypertext Protocol"]
        },
        correctIndex: 0,
        explanation: {
          en: "PHP is a recursive acronym standing for PHP: Hypertext Preprocessor.",
          km: "PHP គឺជាពាក្យកាត់បែបល្បាក់ (Recursive) តំណាងឱ្យ PHP: Hypertext Preprocessor។"
        }
      },
      {
        id: "php-q2",
        question: { en: "Which of the following variables is declared correctly in PHP?", km: "តើអថេរមួយណាខាងក្រោមនេះត្រូវបានប្រកាសត្រឹមត្រូវក្នុង PHP?" },
        options: {
          en: ["$myVar = 10;", "myVar = 10;", "@myVar = 10;", "var myVar = 10;"],
          km: ["$myVar = 10;", "myVar = 10;", "@myVar = 10;", "var myVar = 10;"]
        },
        correctIndex: 0,
        explanation: {
          en: "All variables in PHP must begin with the dollar sign ($) symbol.",
          km: "រាល់អថេរទាំងអស់នៅក្នុង PHP ត្រូវតែចាប់ផ្តើមដោយនិមិត្តសញ្ញាដុល្លារ ($)។"
        }
      },
      {
        id: "php-q3",
        question: { en: "Which keyword is used to establish code inheritance between classes in PHP?", km: "តើពាក្យគន្លឹះមួយណាដែលប្រើសម្រាប់កំណត់ការបន្តពូជ (Inheritance) រវាង Classes ក្នុង PHP?" },
        options: {
          en: ["implements", "extends", "inherits", "parent"],
          km: ["implements", "extends", "inherits", "parent"]
        },
        correctIndex: 1,
        explanation: {
          en: "The 'extends' keyword is used to inherit properties and methods from a parent class.",
          km: "ពាក្យគន្លឹះ 'extends' ត្រូវបានប្រើដើម្បីទទួលបានការបន្តពូជអថេរ និងវិធីសាស្ត្រពី Class ឪពុក។"
        }
      },
      {
        id: "php-q4",
        question: { en: "Which function converts a PHP associative array into a JSON string?", km: "តើមុខងារមួយណាដែលបំប្លែងអារេ Associative របស់ PHP ទៅជាអត្ថបទ JSON String?" },
        options: {
          en: ["json_decode()", "json_encode()", "serialize()", "parse_json()"],
          km: ["json_decode()", "json_encode()", "serialize()", "parse_json()"]
        },
        correctIndex: 1,
        explanation: {
          en: "json_encode() converts PHP values and structures into standard JSON strings.",
          km: "json_encode() ប្រើសម្រាប់បំប្លែងទិន្នន័យរបស់ PHP ទៅជាអត្ថបទ JSON សម្រាប់ប្រើប្រាស់ជាមួយ API។"
        }
      },
      {
        id: "php-q5",
        question: { en: "What is the correct way to start a session in PHP?", km: "តើរបៀបត្រឹមត្រូវមួយណាដើម្បីចាប់ផ្តើមដំណើរការ Session ក្នុង PHP?" },
        options: {
          en: ["start_session()", "session_start()", "$_SESSION['start']()", "session_init()"],
          km: ["start_session()", "session_start()", "$_SESSION['start']()", "session_init()"]
        },
        correctIndex: 1,
        explanation: {
          en: "session_start() starts or resumes a session. It must be called before any output is sent.",
          km: "session_start() ចាប់ផ្តើម ឬបន្តដំណើរការ Session។ វាត្រូវតែហៅប្រើនៅផ្នែកលើបង្អស់មុនការបញ្ជូនកូដ HTML នានា។"
        }
      }
    ],
    miniProjects: [
      {
        id: "php-project-validator",
        title: { en: "Registration Form Validator", km: "ប្រព័ន្ធផ្ទៀងផ្ទាត់ការចុះឈ្មោះ" },
        desc: {
          en: "Build a robust registration processor in PHP. Your code will receive simulated form fields (username, email, website, and age), sanitize the strings to prevent XSS attacks, validate format rules (email format, URL scheme, and age constraint between 18 and 100), and output a secure JSON array showing success or error messages.",
          km: "បង្កើតប្រព័ន្ធផ្ទៀងផ្ទាត់ទិន្នន័យការចុះឈ្មោះដោយប្រើប្រាស់ PHP។ កូដរបស់អ្នកត្រូវទទួលតម្លៃ (username, email, website, និង age) សម្អាតវាដើម្បីការពារការវាយប្រហារ XSS, ផ្ទៀងផ្ទាត់ទម្រង់អ៊ីមែល និងតំណភ្ជាប់ ព្រមទាំងដែនកំណត់អាយុចន្លោះពី ១៨ ដល់ ១០០ ឆ្នាំ រួចបញ្ជូនមកវិញជាអត្ថបទ JSON បញ្ជាក់ពីភាពជោគជ័យ ឬកំហុសឆ្គង។"
        },
        starterCode: `<?php
// 1. Simulated input submission package
$input = [
    "username" => "  kimsour_cambodia <script>alert('XSS')</script> ",
    "email" => "kimsour@example.com",
    "website" => "https://myblog.org",
    "age" => "25"
];

$errors = [];
$validated = [];

// Step 1: Sanitize and validate 'username' (remove spaces, convert tags)


// Step 2: Validate 'email' format using filter_var


// Step 3: Validate 'website' format using filter_var


// Step 4: Validate 'age' using FILTER_VALIDATE_INT between 18 and 100


// Step 5: Output JSON string of response
// If errors exist, output: ["status" => "error", "errors" => $errors]
// Otherwise, output: ["status" => "success", "data" => $validated]

?>`,
        solutionCode: `<?php
// Simulated input submission package
$input = [
    "username" => "  kimsour_cambodia <script>alert('XSS')</script> ",
    "email" => "kimsour@example.com",
    "website" => "https://myblog.org",
    "age" => "25"
];

$errors = [];
$validated = [];

// 1. Sanitize & Validate Username
$username = trim($input["username"]);
$username = stripslashes($username);
$username = htmlspecialchars($username);

if (empty($username)) {
    $errors[] = "Username is required.";
} else {
    $validated["username"] = $username;
}

// 2. Validate Email
$email = trim($input["email"]);
if (empty($email)) {
    $errors[] = "Email is required.";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email format.";
} else {
    $validated["email"] = $email;
}

// 3. Validate Website URL
$website = trim($input["website"]);
if (!empty($website) && !filter_var($website, FILTER_VALIDATE_URL)) {
    $errors[] = "Invalid website URL format.";
} else {
    $validated["website"] = $website;
}

// 4. Validate Age (Integer constraint between 18 and 100)
$age = trim($input["age"]);
if (empty($age)) {
    $errors[] = "Age is required.";
} else {
    $ageInt = filter_var($age, FILTER_VALIDATE_INT, [
        "options" => [
            "min_range" => 18,
            "max_range" => 100
        ]
    ]);
    if ($ageInt === false) {
        $errors[] = "Age must be an integer between 18 and 100.";
    } else {
        $validated["age"] = $ageInt;
    }
}

// 5. Output JSON response
if (count($errors) > 0) {
    echo json_encode([
        "status" => "error",
        "errors" => $errors
    ]);
} else {
    echo json_encode([
        "status" => "success",
        "data" => $validated
    ]);
}
?>`
      }
    ]
  },
  {
    id: "angular",
    title: { en: "Angular SPA", km: "Angular ក្របខ័ណ្ឌ" },
    desc: {
      en: "Develop secure, enterprise-grade Single Page Applications with Google's premier TypeScript framework. Master Signals, Components, modern Control Flow, and SSR.",
      km: "រៀនបង្កើតកម្មវិធីគេហទំព័រលំដាប់ថ្នាក់សហគ្រាស (Single Page Applications) ដោយប្រើប្រាស់ក្របខ័ណ្ឌការងាររបស់ Google។ ស្ទាត់ជំនាញលើ Signals, Components, Control Flow និង SSR។"
    },
    category: "framework",
    difficulty: "intermediate",
    estimatedHours: 6,
    iconName: "Layers",
    topics: angularTopics,
    references: [
      { id: "component", syntax: "@Component({ selector: 'app-item', template: '...' })", desc: { en: "Declares component metadata", km: "កំណត់ទិន្នន័យមេតារបស់សមាសភាគ" }, example: "@Component({ selector: 'app-root', template: '<h1>Hello!</h1>' })" },
      { id: "signal", syntax: "const val = signal(defaultValue);", desc: { en: "Creates a reactive writable signal", km: "បង្កើតអថេរចរន្តប្រតិកម្ម Signals" }, example: "const count = signal(0); count.set(10);" },
      { id: "computed", syntax: "const derived = computed(() => state() * 2);", desc: { en: "Creates a read-only computed reactive signal", km: "បង្កើតអថេរគណនានិស្ស័យតាមចរន្ត Signal ផ្សេងទៀត" }, example: "const double = computed(() => count() * 2);" },
      { id: "prop-bind", syntax: "[property]='value'", desc: { en: "Binds model property value to HTML element property", km: "ភ្ជាប់តម្លៃអថេរទៅនឹងលក្ខណៈរបស់ Tag HTML" }, example: "<button [disabled]='isBlocked'>Action</button>" },
      { id: "event-bind", syntax: "(event)='handler()'", desc: { en: "Listens to DOM events and invokes class methods", km: "ចាប់យកសកម្មភាពរបស់អ្នកប្រើនិងរត់ Method" }, example: "<button (click)='save()'>Save</button>" },
      { id: "two-way", syntax: "[(ngModel)]='value'", desc: { en: "Establishes bidirectional form synchronization", km: "ភ្ជាប់ទិន្នន័យស្របគ្នាពីរទិសដៅសម្រាប់ Form" }, example: "<input [(ngModel)]='username'>" }
    ],
    quizzes: [
      {
        id: "ang-q1",
        question: { en: "What is the modern standard way to bootstrap a standalone Angular application?", km: "តើវិធីសាស្ត្រស្តង់ដារទំនើបមួយណាដែលប្រើសម្រាប់ដំណើរការកម្មវិធី standalone របស់ Angular?" },
        options: {
          en: ["bootstrapApplication(AppComponent)", "platformBrowserDynamic().bootstrapModule(AppModule)", "ngRun(AppComponent)", "bootstrapComponent(AppComponent)"],
          km: ["bootstrapApplication(AppComponent)", "platformBrowserDynamic().bootstrapModule(AppModule)", "ngRun(AppComponent)", "bootstrapComponent(AppComponent)"]
        },
        correctIndex: 0,
        explanation: {
          en: "bootstrapApplication is the modern standalone API used to initialize applications directly from a root component without NgModules.",
          km: "bootstrapApplication គឺជា API standalone ជំនាន់ថ្មីសម្រាប់បើកដំណើរការកម្មវិធីពី Component មេដោយមិនបាច់ប្រើ NgModule។"
        }
      },
      {
        id: "ang-q2",
        question: { en: "How do you read the value of an Angular Signal inside a template expression?", km: "តើអ្នកអានតម្លៃរបស់ Angular Signal នៅក្នុងគំរូទំព័រ (Template Expression) ដោយរបៀបណា?" },
        options: {
          en: ["By invoking it like an empty function: mySignal()", "By using dot value suffix: mySignal.value", "By raw property name: mySignal", "By prepending an asterisk: *mySignal"],
          km: ["By invoking it like an empty function: mySignal()", "By using dot value suffix: mySignal.value", "By raw property name: mySignal", "By prepending an asterisk: *mySignal"]
        },
        correctIndex: 0,
        explanation: {
          en: "Inside templates, a signal is read by calling it like a function (e.g., mySignal()) to register a tracking dependency.",
          km: "នៅក្នុង template យើងត្រូវហៅ Signal ដូចជាការហៅអនុគមន៍ទទេ (ឧទាហរណ៍៖ mySignal()) ដើម្បីទាញយកតម្លៃរបស់វា។"
        }
      },
      {
        id: "ang-q3",
        question: { en: "Which keyword is strictly required inside the modern @for template loop?", km: "តើពាក្យគន្លឹះមួយណាដែលចាំបាច់ត្រូវសរសេរក្នុង @for ជំនាន់ថ្មីរបស់ Angular?" },
        options: {
          en: ["track", "key", "index", "identity"],
          km: ["track", "key", "index", "identity"]
        },
        correctIndex: 0,
        explanation: {
          en: "The 'track' keyword is mandatory in modern @for loops to optimize DOM updates by tracking items uniquely.",
          km: "ពាក្យគន្លឹះ 'track' គឺចាំបាច់ត្រូវតែសរសេរក្នុង @for ជំនាន់ថ្មី ដើម្បីផ្ដល់ល្បឿនលឿនក្នុងប្រព័ន្ធ DOM។"
        }
      }
    ],
    miniProjects: [
      {
        id: "angular-project-todo-signals",
        title: { en: "Dynamic Task Board", km: "ប្រអប់ការងារឌីណាមិក" },
        desc: {
          en: "Build an interactive, modular task board in Angular. Your code must declare writable reactive signals for task collections, implement computed signals to calculate real-time completion statistics (total tasks, completed tasks, and progress percentage), and provide functional methods to add, toggle, and clear tasks dynamically on the screen.",
          km: "បង្កើតប្រអប់គ្រប់គ្រងការងារបែបឌីណាមិកជាមួយ Angular។ កូដរបស់អ្នកត្រូវប្រើប្រាស់ Signals សម្រាប់រក្សាទុកបញ្ជីការងារ, ប្រើប្រាស់ Computed Signals ដើម្បីគណនាស្ថិតិជោគជ័យភ្លាមៗ (ចំនួនសរុប ចំនួនរួចរាល់ និងភាគរយភាគលាភ) និងផ្តល់អនុគមន៍សម្រាប់បន្ថែម ប្តូរស្ថានភាព និងលុបការងារពីលើអេក្រង់។"
        },
        starterCode: `import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-indigo-50 text-left space-y-4">
      <h2 class="text-xl font-black text-slate-800">📋 Signals Task Tracker</h2>
      
      <!-- Statistics panel (Derived from Computed Signals) -->
      <div class="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
        <div class="p-2 bg-slate-50 rounded-xl">
          <span class="text-slate-400 block text-[10px]">TOTAL</span>
          <span class="text-lg font-bold text-slate-700">0</span>
        </div>
        <div class="p-2 bg-emerald-50 rounded-xl">
          <span class="text-emerald-400 block text-[10px]">DONE</span>
          <span class="text-lg font-bold text-emerald-700">0</span>
        </div>
        <div class="p-2 bg-indigo-50 rounded-xl">
          <span class="text-indigo-400 block text-[10px]">PROGRESS</span>
          <span class="text-lg font-bold text-indigo-700">0%</span>
        </div>
      </div>

      <!-- Add Input Control -->
      <div class="flex space-x-2">
        <input class="flex-1 p-2.5 border border-slate-200 rounded-lg text-xs font-mono focus:outline-none" placeholder="Task title...">
        <button class="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold">Add</button>
      </div>

      <!-- Loops Tasks List -->
      <ul class="space-y-1.5">
        <!-- Render your dynamic tasks list items here -->
      </ul>
    </div>
  \`
})
export class AppComponent {
  // Step 1: Declare writable signals for tasks array

  // Step 2: Implement computed signals for count totals and progress percentage

  // Step 3: Implement methods to addTask, toggleTask, and removeTask
}
`,
        solutionCode: `import { Component, signal, computed } from '@angular/core';

interface TaskItem {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-indigo-50 text-left space-y-4">
      <h2 class="text-xl font-black text-slate-800 flex items-center justify-between">
        <span>📋 Signals Task Tracker</span>
        <span class="text-xs bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full font-bold">Angular Signals</span>
      </h2>
      
      <!-- Statistics panel (Derived from Computed Signals) -->
      <div class="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
        <div class="p-2 bg-slate-50 rounded-xl">
          <span class="text-slate-400 block text-[9px] uppercase tracking-wider">Total Tasks</span>
          <span class="text-base font-extrabold text-slate-700">{{ totalCount() }}</span>
        </div>
        <div class="p-2 bg-emerald-50 rounded-xl">
          <span class="text-emerald-400 block text-[9px] uppercase tracking-wider">Completed</span>
          <span class="text-base font-extrabold text-emerald-700">{{ completedCount() }}</span>
        </div>
        <div class="p-2 bg-indigo-50 rounded-xl">
          <span class="text-indigo-400 block text-[9px] uppercase tracking-wider">Progress</span>
          <span class="text-base font-extrabold text-indigo-700">{{ progressPercent() }}%</span>
        </div>
      </div>

      <!-- Add Input Control -->
      <div class="flex space-x-2">
        <input [(ngModel)]="newTaskTitle" class="flex-1 p-2.5 border border-slate-200 rounded-lg text-xs font-mono focus:outline-none focus:border-indigo-500" placeholder="Type new task title...">
        <button (click)="addTask()" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold shadow-sm transition">
          Add Task
        </button>
      </div>

      <!-- Loops Tasks List -->
      <ul class="space-y-1.5 pt-2 border-t border-slate-50">
        @for (task of tasks(); track task.id) {
          <li class="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/70 text-xs">
            <div class="flex items-center space-x-2.5">
              <input type="checkbox" [checked]="task.completed" (change)="toggleTask(task.id)" class="rounded text-indigo-600">
              <span [class.line-through]="task.completed" [class.text-slate-400]="task.completed" class="font-medium text-slate-700">{{ task.name }}</span>
            </div>
            <button (click)="removeTask(task.id)" class="text-rose-500 hover:text-rose-700 text-sm font-bold transition px-2">✕</button>
          </li>
        } @empty {
          <div class="text-center py-6 text-xs text-slate-400 font-medium">
            🎉 All goals reached! Add tasks to start planning.
          </div>
        }
      </ul>
    </div>
  \`
})
export class AppComponent {
  newTaskTitle = '';
  
  // Writable Signal State
  tasks = signal<TaskItem[]>([
    { id: 1, name: 'សិក្សាទ្រឹស្តី Angular Signals', completed: true },
    { id: 2, name: 'អនុវត្តគម្រោង Mini Project', completed: false }
  ]);

  // Computed Derived States
  totalCount = computed(() => this.tasks().length);
  completedCount = computed(() => this.tasks().filter(t => t.completed).length);
  progressPercent = computed(() => {
    const total = this.totalCount();
    if (total === 0) return 0;
    return Math.round((this.completedCount() / total) * 100);
  });

  addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask: TaskItem = {
        id: Date.now(),
        name: this.newTaskTitle.trim(),
        completed: false
      };
      this.tasks.update(current => [...current, newTask]);
      this.newTaskTitle = '';
    }
  }

  toggleTask(id: number) {
    this.tasks.update(current => 
      current.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }

  removeTask(id: number) {
    this.tasks.update(current => current.filter(t => t.id !== id));
  }
}
`
      }
    ]
  },
  {
    id: "kotlin",
    title: { en: "Kotlin", km: "Kotlin" },
    desc: {
      en: "Master Kotlin for modern cross-platform development. Learn key language features, clean syntax, type safety, and object-oriented programming.",
      km: "សិក្សាភាសា Kotlin សម្រាប់ការអភិវឌ្ឍកម្មវិធីទំនើប។ ស្វែងយល់ពីលក្ខណៈពិសេសរបស់ភាសា វាក្យសម្ពន្ធច្បាស់លាស់ សុវត្ថិភាពទិន្នន័យ និងការសរសេរកូដបែប OOP។"
    },
    category: "programming",
    difficulty: "beginner",
    estimatedHours: 6,
    iconName: "Smartphone",
    topics: kotlinTopics,
    references: [
      { id: "kt-ref1", syntax: "val vs var", desc: { en: "val defines read-only variable; var defines read-write variable.", km: "val កំណត់អថេរអានតែមួយមុខ; var កំណត់អថេរដែលអាចអាននិងសរសេរកែប្រែបាន។" }, example: "val count = 10\nvar speed = 75" },
      { id: "kt-ref2", syntax: "String Template", desc: { en: "Insert values or expressions directly into strings using $ or ${}.", km: "បញ្ចូលតម្លៃ ឬកន្សោមកូដដោយផ្ទាល់ទៅក្នុងខ្សែអក្សរដោយប្រើ $ ឬ ${}។" }, example: "println(\"Speed: $speed km/h\")" },
      { id: "kt-ref3", syntax: "when expression", desc: { en: "Kotlin's advanced pattern matcher (alternative to switch/case).", km: "ប្រព័ន្ធប្រៀបធៀបលក្ខណៈពិសេសកម្រិតខ្ពស់របស់ Kotlin (ជំនួសឱ្យ switch/case)។" }, example: "val grade = when(score) {\n    in 90..100 -> 'A'\n    else -> 'F'\n}" },
      { id: "kt-ref4", syntax: "arrayOf()", desc: { en: "Helper function to initialize a static array.", km: "អនុគមន៍ជំនួយសម្រាប់ចាប់ផ្តើមបង្កើតអារេឋេរ។" }, example: "val brands = arrayOf(\"Tesla\", \"BMW\")" },
      { id: "kt-ref5", syntax: "open class", desc: { en: "Kotlin classes are closed by default; use open to allow inheritance.", km: "ថ្នាក់ក្នុង Kotlin ត្រូវបានបិទជាលំនាំដើម; ប្រើ open ដើម្បីអនុញ្ញាតឱ្យបន្តវេន។" }, example: "open class Vehicle\nclass Car : Vehicle()" }
    ],
    quizzes: [
      {
        id: "kt-q1",
        question: { en: "Which keyword is used to declare an immutable (read-only) variable in Kotlin?", km: "តើពាក្យគន្លឹះមួយណាដែលប្រើប្រាស់ដើម្បីប្រកាសអថេរមិនអាចផ្លាស់ប្តូរបាន (អានតែមួយមុខ) ក្នុង Kotlin?" },
        options: {
          en: ["var", "val", "const", "let"],
          km: ["var", "val", "const", "let"]
        },
        correctIndex: 1,
        explanation: {
          en: "In Kotlin, 'val' is used for read-only variables whose values cannot be reassigned once defined, while 'var' is for mutable variables.",
          km: "នៅក្នុង Kotlin 'val' ត្រូវបានប្រើសម្រាប់អថេរអានតែមួយមុខដែលមិនអាចប្តូរតម្លៃបាន បន្ទាប់ពីកំណត់រួច ចំណែក 'var' គឺសម្រាប់អថេរដែលអាចកែប្រែបាន។"
        }
      },
      {
        id: "kt-q2",
        question: { en: "How are Kotlin classes structured regarding inheritance by default?", km: "តើថ្នាក់ក្នុង Kotlin ត្រូវបានកំណត់រចនាសម្ព័ន្ធទាក់ទងនឹងការបន្តវេន (Inheritance) ជាលំនាំដើមយ៉ាងដូចម្តេច?" },
        options: {
          en: ["They are open by default", "They are closed/final by default", "They support multi-inheritance", "They must be abstract"],
          km: ["ពួកវាជា open ជាលំនាំដើម", "ពួកវាជា closed/final ជាលំនាំដើម", "ពួកវាគាំទ្រការបន្តវេនច្រើនជាន់", "ពួកវាត្រូវតែជា abstract"]
        },
        correctIndex: 1,
        explanation: {
          en: "By default, all classes in Kotlin are final (closed) for inheritance. You must explicitly use the 'open' keyword to allow other classes to inherit from them.",
          km: "ជាលំនាំដើម រាល់ថ្នាក់ទាំងអស់ក្នុង Kotlin គឺ final (closed) សម្រាប់ការបន្តវេន។ អ្នកត្រូវតែប្រើប្រាស់ពាក្យគន្លឹះ 'open' ដោយចំហរដើម្បីអនុញ្ញាតឱ្យថ្នាក់ផ្សេងទៀតអាចបន្តវេនពីវាបាន។"
        }
      },
      {
        id: "kt-q3",
        question: { en: "Which range syntax in Kotlin creates a collection that excludes the end value?", km: "តើវាក្យសម្ពន្ធចន្លោះលំដាប់ (Range) មួយណាដែលមិនរាប់បញ្ចូលតម្លៃចុងបញ្ចប់?" },
        options: {
          en: ["1..5", "1 until 5", "1 downTo 5", "1 step 5"],
          km: ["1..5", "1 until 5", "1 downTo 5", "1 step 5"]
        },
        correctIndex: 1,
        explanation: {
          en: "The 'until' keyword creates a range that goes up to but does not include the ending number. For example, '1 until 5' produces 1, 2, 3, 4.",
          km: "ពាក្យគន្លឹះ 'until' បង្កើតចន្លោះលំដាប់ដែលកើនឡើងរហូតដល់ ប៉ុន្តែមិនរាប់បញ្ចូលលេខចុងបញ្ចប់ឡើយ។ ឧទាហរណ៍៖ '1 until 5' បង្កើតលេខ ១, ២, ៣, ៤។"
        }
      }
    ],
    miniProjects: [
      {
        id: "kt-project-speed-tracker",
        title: { en: "Vehicle Speed Penalty Evaluator", km: "កម្មវិធីវាយតម្លៃការផាកពិន័យល្បឿនយានយន្ត" },
        desc: {
          en: "Build a program that tracks vehicle speed records in an array. Loop through the speeds using a range/loop, and utilize standard conditions and a 'when' expression to print whether each vehicle is safe or needs a warning/fine.",
          km: "បង្កើតកម្មវិធីដែលតាមដានកំណត់ត្រាល្បឿនយានយន្តនៅក្នុងអារេ។ រត់កាត់ល្បឿនទាំងនោះដោយប្រើប្រាស់ Range ឬ For Loop និងប្រើប្រាស់លក្ខណៈលក្ខខណ្ឌស្តង់ដារ និងកន្សោម 'when' ដើម្បីបោះពុម្ពបង្ហាញថាតើយានយន្តនីមួយៗបើកបរមានសុវត្ថិភាព ឬត្រូវការទទួលការព្រមាន/ផាកពិន័យ។"
        },
        starterCode: `fun main() {
    val speedLimit = 80
    val speedRecords = arrayOf(75, 95, 110, 60, 85)
    
    // Step 1: Write a loop that iterates over speedRecords using a range of indices (e.g. 0..speedRecords.size - 1)
    // Step 2: In each iteration, retrieve the speed and use a 'when' expression or 'if-else' to evaluate:
    //         - Speed up to speedLimit -> "Safe: [speed] km/h"
    //         - Speed up to 100 -> "Warning ticket: [speed] km/h"
    //         - Else -> "Severe Speeding: [speed] km/h"
}`,
        solutionCode: `fun main() {
    val speedLimit = 80
    val speedRecords = arrayOf(75, 95, 110, 60, 85)
    
    println("--- Speed Record Safety Report ---")
    // Loop over the records by index using a range
    for (i in 0..speedRecords.size - 1) {
        val speed = speedRecords[i]
        
        // Evaluate penalty using when expression
        val report = when {
            speed <= speedLimit -> "Safe driving at \$speed km/h."
            speed <= 100 -> "Warning! Speeding at \$speed km/h. Fine \$15 USD."
            else -> "RECKLESS DRIVING! Speeding at \$speed km/h. Fine \$100 USD + Points Deducted!"
        }
        
        println("Vehicle #\${i + 1}: \$report")
    }
}`
      }
    ]
  },
  {
    id: "nextjs",
    title: { en: "Next.js", km: "Next.js" },
    desc: {
      en: "Master the premier full-stack React framework. Learn Server Components, optimized rendering (SSR, SSG, ISR), custom routing, secure API middlewares, and caching strategies.",
      km: "ស្ទាត់ជំនាញលើក្របខ័ណ្ឌ Full-stack React កម្រិតកំពូល។ រៀនអំពី Server Components, ការបង្ហាញកូដល្បឿនលឿន (SSR, SSG, ISR), ប្រព័ន្ធនាំផ្លូវវៃឆ្លាត, API middlewares សុវត្ថិភាព និងយុទ្ធសាស្ត្រចងចាំ Caching។"
    },
    category: "framework",
    difficulty: "advanced",
    estimatedHours: 10,
    iconName: "Globe",
    topics: nextjsTopics,
    references: nextjsReferences,
    quizzes: nextjsQuizzes,
    miniProjects: nextjsMiniProjects
  },
  {
    id: "vue",
    title: { en: "Vue.js", km: "Vue.js" },
    desc: {
      en: "Learn Vue.js, the progressive JavaScript framework. Master dynamic directives, components, props, emissions, custom slots, and the Composition API.",
      km: "រៀនអំពី Vue.js ក្របខ័ណ្ឌ JavaScript វិវឌ្ឍន៍លឿន។ ស្ទាត់ជំនាញលើ directives, គ្រឿងបង្គុំ components, props, emissions, slots ពិសេសៗ និង Composition API។"
    },
    category: "framework",
    difficulty: "intermediate",
    estimatedHours: 8,
    iconName: "Flame",
    topics: vueTopics,
    references: vueReferences,
    quizzes: vueQuizzes,
    miniProjects: vueMiniProjects
  },
  {
    id: "dart",
    title: { en: "Dart Language Masterclass", km: "វគ្គសរសេរកូដ Dart កម្រិតខ្ពស់ (Master Track)" },
    desc: {
      en: "Advanced production-grade Dart 3 development. Deep dive into sound null safety, pattern matching, async streams, mixins, sealed classes, performance, and Flutter runtime bridge.",
      km: "រៀនភាសា Dart 3 កម្រិតខ្ពស់សម្រាប់ Production។ សិក្សាស៊ីជម្រៅលើ Pattern Matching, Sealed Classes, Async Streams, Sound Null Safety និងការភ្ជាប់ជាមួយ Flutter Runtime Engine។"
    },
    category: "programming",
    difficulty: "advanced",
    estimatedHours: 14,
    iconName: "Dart",
    topics: dartTopics,
    references: dartReferences,
    quizzes: dartQuizzes,
    miniProjects: dartMiniProjects
  },
  {
    id: "flutter",
    title: { en: "Flutter Development", km: "ការអភិវឌ្ឍន៍កម្មវិធីជាមួយ Flutter" },
    desc: {
      en: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Google's Flutter framework and Dart.",
      km: "បង្កើតកម្មវិធីទូរស័ព្ទ វេបសាយ និងកុំព្យូទ័រដ៏ស្រស់ស្អាតចេញពីកូដតែមួយ ដោយប្រើប្រាស់ក្របខ័ណ្ឌ Flutter និង Dart របស់ Google។"
    },
    category: "framework",
    difficulty: "intermediate",
    estimatedHours: 16,
    iconName: "Smartphone",
    topics: flutterTopics,
    references: flutterReferences,
    quizzes: flutterQuizzes,
    miniProjects: flutterMiniProjects
  },
  {
    id: "c",
    title: { en: "C Programming", km: "ភាសាកូដ C" },
    desc: {
      en: "Learn C, the foundation of modern computer science. Master pointers, low-level memory allocation, structure architectures, and raw filesystem I/O.",
      km: "សិក្សាភាសា C ដែលជាគ្រឹះនៃវិទ្យាសាស្ត្រកុំព្យូទ័រទំនើប។ ស្ទាត់ជំនាញលើការប្រើប្រាស់ Pointer ការគ្រប់គ្រង Memory រចនាសម្ព័ន្ធទិន្នន័យ និងប្រព័ន្ធឯកសារ។"
    },
    category: "programming",
    difficulty: "intermediate",
    estimatedHours: 12,
    iconName: "Cpu",
    topics: cTopics,
    references: [
      { id: "c-ref-addr", syntax: "&variable", desc: { en: "Retrieves the memory address of a variable", km: "ទាញយកអាសយដ្ឋានទីតាំងការចងចាំរបស់អថេរ" }, example: "int x = 10; int *p = &x;" },
      { id: "c-ref-ptr", syntax: "*pointer", desc: { en: "Dereferences a pointer to access or modify the value", km: "ទាញយកតម្លៃដែលចង្អុលបង្ហាញដោយ pointer ដើម្បីប្រើ ឬកែប្រែ" }, example: "*p = 20; // x becomes 20" },
      { id: "c-ref-arrow", syntax: "ptr->member", desc: { en: "Accesses a structure member through a pointer", km: "ចូលទៅកាន់សមាជិករបស់ structure តាមរយៈ pointer" }, example: "struct Car *c; c->speed = 100;" },
      { id: "c-ref-malloc", syntax: "malloc(sizeof(type))", desc: { en: "Allocates uninitialized memory dynamically on the heap", km: "បែងចែកការចងចាំឌីណាមិកនៅលើ heap ដោយមិនទាន់កំណត់តម្លៃដើម" }, example: "int *arr = malloc(5 * sizeof(int));" },
      { id: "c-ref-free", syntax: "free(pointer)", desc: { en: "Releases dynamically allocated heap memory back to the system", km: "ដោះលែងការចងចាំដែលបានបែងចែកនៅលើ heap ទៅកាន់ប្រព័ន្ធវិញ" }, example: "free(arr); arr = NULL;" }
    ],
    quizzes: [
      {
        id: "c-q1",
        question: { en: "Which operator is used to access structure members when working with a pointer to a struct?", km: "តើប្រមាណសញ្ញាមួយណាដែលត្រូវបានប្រើដើម្បីចូលទៅកាន់សមាជិក structure នៅពេលធ្វើការជាមួយ pointer ចង្អុលទៅ struct?" },
        options: {
          en: [".", "->", "*", "&"],
          km: [".", "->", "*", "&"]
        },
        correctIndex: 1,
        explanation: {
          en: "The arrow operator (->) is used to access structure members through a pointer, whereas the dot operator (.) is used for normal struct variables.",
          km: "សញ្ញាព្រួញ (->) ត្រូវបានប្រើដើម្បីចូលទៅកាន់សមាជិករបស់ structure តាមរយៈ pointer ចំណែកឯសញ្ញាចុច (.) ប្រើសម្រាប់អថេរ struct ធម្មតា។"
        }
      },
      {
        id: "c-q2",
        question: { en: "What does the malloc() function return if the operating system runs out of heap memory?", km: "តើអនុគមន៍ malloc() នឹងប្រគល់តម្លៃអ្វីមកវិញ បើសិនជាប្រព័ន្ធកុំព្យូទ័រអស់ទំហំចងចាំ Heap?" },
        options: {
          en: ["0", "NULL", "-1", "A random garbage address"],
          km: ["0", "NULL", "-1", "អាសយដ្ឋានសម្រាមចៃដន្យ"]
        },
        correctIndex: 1,
        explanation: {
          en: "If malloc() fails to allocate the requested size, it returns a NULL pointer.",
          km: "បើសិនជា malloc() បរាជ័យក្នុងការបែងចែកទំហំការចងចាំដែលបានស្នើ វានឹងប្រគល់តម្លៃ NULL មកវិញ។"
        }
      },
      {
        id: "c-q3",
        question: { en: "Which of the following is true about calloc() compared to malloc()?", km: "តើចំណុចមួយណាខាងក្រោមដែលត្រឹមត្រូវអំពី calloc() បើប្រៀបធៀបទៅនឹង malloc()?" },
        options: {
          en: ["It is faster than malloc", "It initializes allocated memory to zero", "It allocates memory on the stack", "It does not require free()"],
          km: ["វាមានល្បឿនលឿនជាង malloc", "វាកំណត់តម្លៃដំបូងនៃការចងចាំដែលសុំបានឱ្យទៅជាសូន្យ", "វាបែងចែកការចងចាំនៅលើ stack", "វាមិនទាមទារការហៅ free() ឡើយ"]
        },
        correctIndex: 1,
        explanation: {
          en: "Unlike malloc(), calloc() initializes all allocated memory bytes to zero automatically.",
          km: "ខុសពី malloc() អនុគមន៍ calloc() កំណត់តម្លៃក្នុង Memory ទាំងអស់ឱ្យទៅជាសូន្យដោយស្វ័យប្រវត្ត។"
        }
      }
    ],
    miniProjects: [
      {
        id: "c-project-trip-logger",
        title: { en: "C Fleet Trip Safety Logger", km: "កម្មវិធីកត់ត្រាដំណើររថយន្តសុវត្ថិភាព C" },
        desc: {
          en: "Build a program that models a Car structure. Implement a defensive function that logs trips, checks for NULL pointers and invalid speeds, and calculates whether the average speed crossed safe limits.",
          km: "បង្កើតកម្មវិធីដែលតំណាងឱ្យរចនាសម្ព័ន្ធ Car។ អនុវត្តអនុគមន៍ការពារសុវត្ថិភាពដែលកត់ត្រាដំណើរការរត់ ឆែកការពារ NULL Pointer និងល្បឿនមិនត្រឹមត្រូវ រួចគណនាមើលថាតើល្បឿនមធ្យមហួសដែនកំណត់សុវត្ថិភាពដែរឬទេ។"
        },
        starterCode: `#include <stdio.h>
#include <string.h>

// Step 1: Define a structure named 'Car' with brand, model, year, and speed members.

// Step 2: Write a defensive function 'checkCarSafety' that:
//         - Receives a pointer to a Car.
//         - Validates that the pointer is NOT NULL.
//         - Checks if the speed exceeds 120 km/h (unsafe) and prints a warning.
//         - Prints the car details cleanly.

int main() {
    // Step 3: Initialize a Car, pass its address to checkCarSafety, and verify results!
    return 0;
}`,
        solutionCode: `#include <stdio.h>
#include <string.h>

typedef struct {
    char brand[30];
    char model[30];
    int year;
    int speed;
} Car;

void checkCarSafety(Car *c) {
    // 1. Safety NULL check
    if (c == NULL) {
        printf("Error: Car record pointer is NULL!\\n");
        return;
    }
    
    printf("Evaluating Safety for %s %s (%d):\\n", c->brand, c->model, c->year);
    printf("Current Recorded Speed: %d km/h\\n", c->speed);
    
    // 2. Bound/Logic check
    if (c->speed < 0) {
        printf("Status: WARNING! Invalid negative speed value!\\n");
    } else if (c->speed > 120) {
        printf("Status: DANGER! Vehicle is speeding dangerously!\\n");
    } else {
        printf("Status: SAFE! Speed is within legal highways limits.\\n");
    }
    printf("---------------------------------------\\n");
}

int main() {
    printf("=== Sabaicode C Fleet Safety Trip Logger ===\\n\\n");
    
    // Initialize car records
    Car car1 = {"Toyota", "Supra", 2021, 140};
    Car car2 = {"Honda", "Civic", 2020, 95};
    
    // Evaluate records
    checkCarSafety(&car1);
    checkCarSafety(&car2);
    
    // Defensive test with NULL pointer
    checkCarSafety(NULL);
    
    return 0;
}`
      }
    ]
  },
  {
    id: "spring-boot",
    title: { en: "Spring Boot", km: "Spring Boot" },
    desc: {
      en: "Build enterprise REST APIs and microservices with Java, Spring Data JPA, and Spring Security.",
      km: "សាង REST API សហគ្រាស និង Microservices ដោយប្រើ Java, Spring Data JPA, និង Spring Security។"
    },
    category: "framework",
    difficulty: "advanced",
    estimatedHours: 28,
    iconName: "spring",
    topics: springBootTopics,
    references: springBootReferences,
    quizzes: springBootQuizzes,
    miniProjects: springBootMiniProjects
  },
  mongoDBCourseData as Course,
  SWIFT_COURSE_FULL_DATA
];
