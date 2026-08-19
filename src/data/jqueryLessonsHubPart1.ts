import { FrontendLesson } from '../types/frontendClass';

export const JQUERY_LESSONS_PART1: FrontendLesson[] = [
  // ==========================================
  // MODULE 1: ការណែនាំអំពី jQuery & ការដំឡើង (Introduction & Setup)
  // ==========================================
  {
    id: 'jq-l1',
    slug: 'jquery-intro-why-popular',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: {
      en: '1.1 What jQuery Is & Why It Became Popular',
      km: '1.1 អ្វីទៅជា jQuery និងមូលហេតុដែលវាល្បីល្បាញ'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'jQuery is a fast, small, and feature-rich JavaScript library created in 2006 by John Resig to simplify HTML DOM traversal, event handling, animation, and AJAX across different web browsers.',
      km: 'jQuery គឺជា JavaScript Library មួយបង្កើតឡើងក្នុងឆ្នាំ ២០០៦ ដោយ John Resig។ វាត្រូវបានបង្កើតឡើងដើម្បីសម្រួលដល់ការ Select DOM, បង្កើត Events, ធ្វើ Animations និងផ្ញើ AJAX Requests ដោយប្រើប្រាស់ប្រយោគកូដខ្លីៗ និងដោះស្រាយបញ្ហា Cross-Browser Incompatibility នាពេលនោះ។'
    },
    tutorial: {
      en: 'Before modern `querySelector` and `fetch` existed, cross-browser DOM manipulation in Vanilla JS required dozens of lines of code. jQuery introduced the clean `$()` syntax, reducing 10 lines of complex JS to just `$("#title").hide();`.',
      km: 'មុនពេលមាន `document.querySelector()` និង `fetch()` ក្នុង JavaScript ទំនើប ការសរសេរកូដបញ្ជា DOM លើ Browsers ផ្សេងៗគ្នាត្រូវប្រើកូដរាប់សិបបន្ទាត់។ jQuery បាននាំយកសញ្ញា `$()` ដែលអាចបង្រួម DOM code ២០ បន្ទាត់មកត្រឹមតែ មួយបន្ទាត់ ដូចជា `$("#title").hide();`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 20px; }
    .box { background: #1e293b; border: 1px solid #38bdf8; border-radius: 8px; padding: 16px; margin-top: 12px; }
    button { background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; }
  </style>
</head>
<body>
  <h2>✨ ស្វាគមន៍មកកាន់ jQuery!</h2>
  <p id="msg">jQuery ធ្វើឱ្យការសរសេរ JavaScript DOM កាន់តែខ្លី និងងាយស្រួល។</p>
  <button id="btnClick">ចុចទីនេះដើម្បីប្តូរអត្ថបទ</button>

  <div class="box">
    <strong>Vanilla JS vs jQuery Comparison:</strong>
    <p>Vanilla JS: <code>document.getElementById("msg").innerText = "..."</code></p>
    <p>jQuery: <code>$("#msg").text("...")</code></p>
  </div>

  <script>
    $(document).ready(function() {
      $("#btnClick").click(function() {
        $("#msg").css("color", "#38bdf8").text("🎉 អបអរសាទរ! អ្នកបានបញ្ជា DOM ដោយប្រើ jQuery រួចរាល់!");
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Why learn jQuery today?',
        km: 'ហេតុអ្វីនៅតែត្រូវរៀន jQuery នៅថ្ងៃនេះ?'
      },
      description: {
        en: 'Millions of live websites, WordPress templates, and enterprise CMS portals still rely heavily on jQuery. Knowing jQuery allows you to immediately fix bugs and update legacy enterprise codebases.',
        km: 'គេហទំព័ររាប់លាន ព្រមទាំង WordPress Themes និង CMS បុរាណៗជាច្រើននៅតែប្រើ jQuery។ ការចេះ jQuery ជួយឱ្យអ្នកអាច Edit ឬលុប Bug លើ Code បុរាណៗនៅក្នុងក្រុមហ៊ុនបានយ៉ាងស្ទាត់ជំនាញ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write the jQuery code to select an element with class `.subtitle` and change its text to "Welcome".',
        km: 'សរសេរកូដ jQuery ដើម្បី Select Element ដែលមាន Class `.subtitle` ហើយប្តូរ Text ទៅជា "Welcome"។'
      },
      solution: '$(".subtitle").text("Welcome");'
    },
    quizQuestions: [
      {
        id: 'jq-q1',
        question: {
          en: 'What primary problem did jQuery solve when it was released in 2006?',
          km: 'តើបញ្ហាចម្បងអ្វីដែល jQuery បានដោះស្រាយនៅពេលវាចេញផ្សាយក្នុងឆ្នាំ ២០០៦?'
        },
        options: [
          { id: '1', text: { en: 'Inconsistent DOM APIs and complex cross-browser compatibility across Internet Explorer, Firefox, etc.', km: 'ភាពមិនស៊ីគ្នានៃ DOM APIs និងភាពស៊ុគស្មាញនៃ Cross-Browser Compatibility រវាង IE, Firefox ជាដើម' }, isCorrect: true },
          { id: '2', text: { en: 'Replacing backend database engines like MySQL', km: 'ជំនួស Database ខាង Backend ដូចជា MySQL' }, isCorrect: false },
          { id: '3', text: { en: 'Compiling JavaScript to WebAssembly bytecode', km: 'Compile JavaScript ទៅជា WebAssembly bytecode' }, isCorrect: false }
        ],
        explanation: {
          en: 'In 2006, different browsers handled DOM events and methods differently. jQuery abstracted away browser quirks into a unified API.',
          km: 'ក្នុងឆ្នាំ ២០០៦ Browsers មាន DOM APIs ខុសៗគ្នា។ jQuery បានបង្រួមភាពស្មុគស្មាញទាំងអស់នោះឱ្យទៅជា Method មួយរួមគ្នាយ៉ាងងាយស្រួល។'
        }
      }
    ]
  },

  {
    id: 'jq-l2',
    slug: 'jquery-cdn-setup',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: {
      en: '1.2 Adding jQuery via CDN & Local Download',
      km: '1.2 ការដំឡើង jQuery តាមរយៈ CDN និង Local Script'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'To use jQuery in your web projects, you simply include the jQuery library file using a standard HTML `<script>` tag pointing to official CDNs (Content Delivery Networks) like code.jquery.com or Google CDN.',
      km: 'ដើម្បីប្រើប្រាស់ jQuery ក្នុង Website របស់អ្នក អ្នកគ្រាន់តែភ្ជាប់ Link CDN របស់ jQuery តាមរយៈ `<script src="..."></script>` នៅក្នុង HTML `<head>` ឬមុនបិទ `</body>` ជាការស្រេច។'
    },
    tutorial: {
      en: 'Official Minified CDN Link: `https://code.jquery.com/jquery-3.7.1.min.js`. The `.min.js` version is compressed for production use to load quickly.',
      km: 'Link CDN ផ្លូវការប្រភេទ Minified: `https://code.jquery.com/jquery-3.7.1.min.js`។ កែប្រែប្រភេទ `.min.js` ត្រូវបានបង្រួមទំហំឯកសារ (Compressed) ដើម្បីឱ្យទំព័រដើរលឿនក្នុង Production។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <!-- 1. Include Official jQuery CDN -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #090d16; color: #f1f5f9; padding: 20px; }
    .status-card { background: #1e293b; border-left: 4px solid #10b981; padding: 16px; border-radius: 8px; }
  </style>
</head>
<body>
  <h3>📡 jQuery CDN Verification Check</h3>
  <div class="status-card" id="cdnStatus">
    កំពុងពិនិត្យមើលវត្តមាន CDN...
  </div>

  <script>
    // Test if jQuery is successfully loaded
    if (typeof jQuery !== 'undefined') {
      $('#cdnStatus').html('✅ <strong>jQuery 3.7.1 Loaded Successfully!</strong> Version: ' + $.fn.jquery);
    } else {
      document.getElementById('cdnStatus').innerHTML = '❌ បរាជ័យក្នុងការ Load jQuery CDN!';
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Using CDNs in Production',
        km: 'ការប្រើប្រាស់ CDN នៅក្នុងការងារពិត'
      },
      description: {
        en: 'CDNs allow browsers to cache jQuery across multiple websites, speeding up load times significantly for end users.',
        km: 'ការប្រើប្រាស់ CDN ធ្វើឱ្យ Browser អាច រក្សាទុក (Cache) ឯកសារ jQuery បាន ដូច្នេះនៅពេល User បើក Web ផ្សេងទៀតដែលប្រើ CDN ដូចគ្នា វាចាត់ទុកថាបាន Load រួចរាល់។'
      }
    },
    practiceExercise: {
      question: {
        en: 'How do you check the current installed version of jQuery in the JavaScript console?',
        km: 'តើអ្នកអាចពិនិត្យមើល Version របស់ jQuery ដែលកំពុងប្រើតាមរបៀបណា?'
      },
      solution: '$.fn.jquery'
    },
    quizQuestions: [
      {
        id: 'jq-q2',
        question: {
          en: 'Which HTML tag is used to import the jQuery library from a CDN?',
          km: 'តើ HTML Tag មួយណាត្រូវបានប្រើដើម្បីនាំចូល (Import) jQuery Library ពី CDN?'
        },
        options: [
          { id: '1', text: { en: '<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>', km: '<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>' }, isCorrect: true },
          { id: '2', text: { en: '<link rel="jquery" href="...">', km: '<link rel="jquery" href="...">' }, isCorrect: false },
          { id: '3', text: { en: '<import jquery from "...">', km: '<import jquery from "...">' }, isCorrect: false }
        ],
        explanation: {
          en: 'jQuery is a JavaScript file, so it must be imported using a `<script>` tag with a `src` attribute.',
          km: 'jQuery គឺជា JavaScript File ដូច្នេះវាត្រូវប្រើប្រាស់ Tag `<script src="...">`។'
        }
      }
    ]
  },

  {
    id: 'jq-l3',
    slug: 'jquery-document-ready',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: {
      en: '1.3 The $(document).ready() Pattern & Shorthand Syntax',
      km: '1.3 លំនាំ $(document).ready() និងទម្រង់កាត់ $(function(){})'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'The `$(document).ready()` function prevents jQuery code from running before the DOM document is fully loaded in the browser, preventing null reference errors.',
      km: '`$(document).ready()` ការពារកុំឱ្យកូដ jQuery ដំណើរការមុនពេល DOM Elements ទាំងអស់ត្រូវបាន Load រួចរាល់ក្នុង Browser។ វាតម្រូវឱ្យ Browser បង្កើត HTML Structure រួចរាល់ជាមុនសិន។'
    },
    tutorial: {
      en: 'Standard Syntax: `$(document).ready(function() { ... });`\nModern Shorthand: `$(function() { ... });` Both guarantee safety when interacting with DOM elements.',
      km: 'ទម្រង់ពេញ៖ `$(document).ready(function() { ... });`\nទម្រង់កាត់ modern៖ `$(function() { ... });` ទាំងពីរនេះធានាថាកូដនឹងមិន Error ដោយសារស្វែងរក Element មិនទាន់ឃើញឡើយ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: white; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #334155; padding: 16px; border-radius: 8px; max-width: 450px; }
    .ready-badge { background: #16a34a; color: white; padding: 4px 10px; border-radius: 99px; font-size: 12px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <h3>DOM Readiness Check</h3>
    <p id="readyText">កំពុងរង់ចាំ DOM Load...</p>
    <span class="ready-badge" id="statusBadge">PENDING</span>
  </div>

  <script>
    // Modern recommended shorthand for $(document).ready()
    $(function() {
      // Executed ONLY after DOM is completely ready!
      $('#readyText').text('🎉 DOM ត្រូវបានរៀបចំរួចរាល់ 100%! កូដ jQuery អាចដំណើរការដោយសុវត្ថិភាព។');
      $('#statusBadge').text('DOM READY').css('background', '#2563eb');
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Preventing Uncaught TypeError',
        km: 'ការការពារកុំឱ្យកើតមាន TypeError: Cannot read property'
      },
      description: {
        en: 'Without $(document).ready(), if your script tag is placed in the `<head>` of the page, attempting to attach event listeners to buttons will fail because the DOM elements do not exist yet.',
        km: 'បើគ្មាន `$(document).ready()` ទេ នៅពេលកូដ Script នៅលើក្បាល `<head>` វានឹងស្វែងរក Button មិនឃើញ ហើយចេញ Error "Cannot read property of null"ភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write the modern shorthand syntax for $(document).ready().',
        km: 'សរសេរទម្រង់កាត់ (Shorthand) សម្រាប់ $(document).ready()។'
      },
      solution: '$(function() { });'
    },
    quizQuestions: [
      {
        id: 'jq-q3',
        question: {
          en: 'What is the modern shorthand syntax equivalent to `$(document).ready(function() { ... });`?',
          km: 'តើមួយណាជាទម្រង់កាត់ modern ស្មើនឹង `$(document).ready(function() { ... });`?'
        },
        options: [
          { id: '1', text: { en: '$(function() { ... });', km: '$(function() { ... });' }, isCorrect: true },
          { id: '2', text: { en: '$.ready(function() { ... });', km: '$.ready(function() { ... });' }, isCorrect: false },
          { id: '3', text: { en: '$(onLoad: function() { ... });', km: '$(onLoad: function() { ... });' }, isCorrect: false }
        ],
        explanation: {
          en: '`$(function() { ... })` is the official modern shorthand syntax recommended by jQuery.',
          km: '`$(function() { ... })` គឺជាទម្រង់កាត់ផ្លូវការដែលត្រូវបានណែនាំឱ្យប្រើប្រាស់ក្នុង jQuery។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 2: Selectors
  // ==========================================
  {
    id: 'jq-l4',
    slug: 'jquery-basic-selectors',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: {
      en: '2.1 Selecting by Tag, Class, and ID',
      km: '2.1 Selectors មូលដ្ឋានតាម Tag, Class, និង ID'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'jQuery uses CSS selector syntax inside `$()` to target elements. You can select by HTML tag name `$("p")`, class name `$(".box")`, or element ID `$("#main")`.',
      km: 'jQuery ប្រើប្រាស់ Syntaxes របស់ CSS Selectors នៅក្នុង `$()` ដើម្បីចាប់ Element។ អ្នកអាច Select តាម Tag Name `$("p")`, តាម Class Name `$(".box")` ឬតាម ID `$("#main")`។'
    },
    tutorial: {
      en: '- Tag Selector: `$("h1")` selects all `<h1>` tags.\n- Class Selector: `$(".btn")` selects all elements with class "btn".\n- ID Selector: `$("#header")` selects the unique element with ID "header".',
      km: '- Tag Selector: `$("h1")` ចាប់ Tag `<h1>` ទាំងអស់\n- Class Selector: `$(".btn")` ចាប់ Element មាន Class "btn" ទាំងអស់\n- ID Selector: `$("#header")` ចាប់ Element ដែលមាន ID "header"'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #0b0f19; color: white; padding: 20px; }
    .highlight { background: #334155; padding: 8px; border-radius: 6px; margin-bottom: 8px; }
    .box { border: 1px solid #475569; padding: 10px; margin-bottom: 8px; border-radius: 6px; }
    button { background: #0284c7; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; margin-right: 6px; }
  </style>
</head>
<body>
  <h3 id="mainHeading">🎯 jQuery Basic Selectors Demo</h3>
  
  <p class="intro">នេះជាកថាខណ្ឌទី ១ (Class: intro)</p>
  <p class="intro">នេះជាកថាខណ្ឌទី ២ (Class: intro)</p>
  <div class="box">នេះជា Element ប្រភេទ DIV (Class: box)</div>

  <div style="margin-top: 15px;">
    <button id="btnTag">Select Tag (p)</button>
    <button id="btnClass">Select Class (.intro)</button>
    <button id="btnId">Select ID (#mainHeading)</button>
  </div>

  <script>
    $(function() {
      // Tag Selector
      $('#btnTag').click(function() {
        $('p').css('color', '#38bdf8');
      });

      // Class Selector
      $('#btnClass').click(function() {
        $('.intro').css('background-color', '#1e293b').css('font-weight', 'bold');
      });

      // ID Selector
      $('#btnId').click(function() {
        $('#mainHeading').css('color', '#f59e0b').text('🔥 ID Selected Successfully!');
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Efficient DOM querying',
        km: 'ការចាប់ Element យ៉ាងរហ័ស'
      },
      description: {
        en: 'Selecting elements using IDs (`$("#id")`) is the fastest selector in jQuery because it directly delegates to native `document.getElementById()`.',
        km: 'ការចាប់ Element តាម ID (`$("#id")`) គឺជាវិធីដែលដើរលឿនបំផុតក្នុង jQuery ព្រោះវាទៅរត់លើ Native Browser Function `document.getElementById()` ដោយផ្ទាល់។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write a jQuery selector to target all buttons with class `.btn-danger`.',
        km: 'សរសេរ jQuery Selector ដើម្បីចាប់ Button ទាំងអស់ដែលមាន Class `.btn-danger`'
      },
      solution: '$(".btn-danger")'
    },
    quizQuestions: [
      {
        id: 'jq-q4',
        question: {
          en: 'Which jQuery selector picks an element with the ID "userCard"?',
          km: 'តើ jQuery Selector មួយណាសម្រាប់ចាប់ Element ដែលមាន ID ឈ្មោះ "userCard"?'
        },
        options: [
          { id: '1', text: { en: '$("#userCard")', km: '$("#userCard")' }, isCorrect: true },
          { id: '2', text: { en: '$(".userCard")', km: '$(".userCard")' }, isCorrect: false },
          { id: '3', text: { en: '$("userCard")', km: '$("userCard")' }, isCorrect: false }
        ],
        explanation: {
          en: 'In CSS and jQuery syntax, the hash `#` symbol specifies an ID selector.',
          km: 'ក្នុង CSS & jQuery សញ្ញា `#` ត្រូវបានប្រើប្រាស់សម្រាប់ ID Selector។'
        }
      }
    ]
  },

  {
    id: 'jq-l5',
    slug: 'jquery-attribute-pseudo-selectors',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: {
      en: '2.2 Attribute & Pseudo-Class Selectors',
      km: '2.2 Selectors តាម Attribute និង Pseudo-Classes'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'jQuery supports advanced CSS attribute selectors (e.g. `$("[type=text]")`) as well as custom jQuery pseudo-selectors like `:first`, `:last`, `:even`, `:odd`, and `:selected`.',
      km: 'jQuery គាំទ្រ Attribute Selectors (ដូចជា `$("[type=text]")`) និង Pseudo-selectors ពិសេសរបស់ jQuery ដូចជា `:first`, `:last`, `:even`, `:odd`, និង `:selected` ដើម្បីចាប់ Element តាមលក្ខខណ្ឌជាក់លាក់។'
    },
    tutorial: {
      en: '- Attribute Selector: `$("[input[name=\'email\']")` targets input with name="email".\n- Pseudo Selector: `$("li:first")` targets the first `<li>`.\n- Filter Selector: `$("tr:even")` targets even rows in a table.',
      km: '- Attribute Selector: `$("[name=\'email\']")` ចាប់ Input ដែលមាន attribute name="email"\n- Pseudo Selector: `$("li:first")` ចាប់យក `<li>` ដំបូងគេបង្អស់\n- Filter Selector: `$("tr:even")` ចាប់យករ៉ូដគូនៅក្នុង Table'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 20px; }
    ul { list-style: none; padding: 0; }
    li { padding: 8px; margin-bottom: 4px; background: #1e293b; border-radius: 4px; }
    input { padding: 8px; border-radius: 4px; border: 1px solid #475569; background: #020617; color: white; }
    button { background: #0d9488; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; margin-top: 10px; }
  </style>
</head>
<body>
  <h3>🎯 Attribute & Pseudo Selectors</h3>

  <div style="margin-bottom: 15px;">
    <input type="text" placeholder="បញ្ចូលឈ្មោះ..." />
    <input type="password" placeholder="បញ្ចូលពាក្យសម្ងាត់..." />
  </div>

  <ul>
    <li>ធាតុទី ១ (Index 0)</li>
    <li>ធាតុទី ២ (Index 1)</li>
    <li>ធាតុទី ៣ (Index 2)</li>
    <li>ធាតុទី ៤ (Index 3)</li>
  </ul>

  <button id="btnHighlight">Highlight First & Even Items</button>

  <script>
    $(function() {
      $('#btnHighlight').click(function() {
        // Select input by attribute type="text"
        $('input[type="text"]').css('border-color', '#14b8a6');

        // Select first list item
        $('li:first').css('border-left', '4px solid #14b8a6');

        // Select even list items (0, 2)
        $('li:even').css('background', '#334155');
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Zebra Striping Data Tables',
        km: 'ការធ្វើ Zebra Striping លើតារាងទិន្នន័យ'
      },
      description: {
        en: 'Using `$("tr:odd").addClass("even-row")` allows quick visual styling of HTML table rows without modifying template loops.',
        km: 'ការប្រើប្រាស់ `$("tr:odd")` ជួយឱ្យយើងអាចប្តូរពណ៌ជួរដេកឆ្លាស់គ្នា (Zebra striping) លើ Table ទិន្នន័យបានយ៉ាងលឿនដោយមិនបាច់កែប្រែ Loop ក្នុង Backend។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write a jQuery selector to find the last `<li>` item inside a list.',
        km: 'សរសេរ jQuery Selector ដើម្បីចាប់យក Element `<li>` ចុងក្រោយគេបង្អស់។'
      },
      solution: '$("li:last")'
    },
    quizQuestions: [
      {
        id: 'jq-q5',
        question: {
          en: 'Which jQuery pseudo-selector targets the very first element in a matched set?',
          km: 'តើ jQuery Pseudo-selector មួយណាសម្រាប់ចាប់យក Element ដំបូងគេបង្អស់?'
        },
        options: [
          { id: '1', text: { en: ':first', km: ':first' }, isCorrect: true },
          { id: '2', text: { en: ':top', km: ':top' }, isCorrect: false },
          { id: '3', text: { en: ':initial', km: ':initial' }, isCorrect: false }
        ],
        explanation: {
          en: '`:first` selects the first element among all matched elements (e.g. `$("p:first")`).',
          km: '`:first` ត្រូវប្រើប្រាស់សម្រាប់ចាប់យក Element ដំបូងគេបង្អស់។'
        }
      }
    ]
  },

  {
    id: 'jq-l6',
    slug: 'jquery-method-chaining',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: {
      en: '2.3 Chaining Selections & Methods',
      km: '2.3 ការតភ្ជាប់ Method Chaining ក្នុង jQuery'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Chaining allows you to run multiple jQuery methods on the exact same element within a single statement, improving code performance and readability.',
      km: 'Method Chaining អនុញ្ញាតឱ្យអ្នកតភ្ជាប់ Method ជាច្រើននៃ jQuery ទៅលើ Element ដដែលក្នុងបន្ទាត់តែកំពូលមួយ ដោយមិនបាច់ Select Element ដដែលៗច្រើនដងឡើយ។'
    },
    tutorial: {
      en: 'Instead of:\n`$("#box").css("color", "red");`\n`$("#box").slideDown();`\n`$("#box").addClass("active");`\n\nUse chaining:\n`$("#box").css("color", "red").slideDown().addClass("active");`',
      km: 'ជំនួសឱ្យការសរសេរ Select ដដែលៗច្រើនបន្ទាត់ អ្នកអាចតភ្ជាប់ Method បន្តបន្ទាប់គ្នា៖\n`$("#box").css("color", "red").slideDown().addClass("active");`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #090d16; color: white; padding: 20px; }
    #banner { background: #1e293b; padding: 20px; border-radius: 8px; font-size: 18px; display: none; }
    button { background: #8b5cf6; color: white; border: none; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; }
  </style>
</head>
<body>
  <h3>🔗 jQuery Method Chaining Demo</h3>
  
  <button id="btnChain">Run Chained Actions</button>
  
  <div id="banner" style="margin-top: 15px;">
    🚀 ព័ត៌មានបដាស្វាគមន៍! (Banner Text)
  </div>

  <script>
    $(function() {
      $('#btnChain').click(function() {
        // Chaining 4 methods together in ONE single line!
        $('#banner')
          .css('color', '#a78bfa')
          .css('border-left', '6px solid #8b5cf6')
          .slideDown(600)
          .animate({ fontSize: '22px' }, 400);
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Performance Optimization',
        km: 'ការបង្កើន ល្បឿន Performance'
      },
      description: {
        en: 'Chaining avoids re-querying the DOM tree multiple times. Re-querying `$("#banner")` 5 times forces 5 browser DOM searches, whereas chaining does it only once.',
        km: 'ការប្រើប្រាស់ Chaining ជួយឱ្យ Browser មិនបាច់ចំណាយពេលឆែកមើល DOM Tree រក `$("#banner")` ច្រើនដងឡើយ ព្រោះវាធ្វើការស្វែងរកតែម្តងគត់ រួចអនុវត្ត Method បន្តបន្ទាប់។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Chain `.css("color", "blue")` and `.fadeIn()` on `$(".msg")`.',
        km: 'សរសេរ Method Chaining ភ្ជាប់ `.css("color", "blue")` និង `.fadeIn()` លើ `$(".msg")`'
      },
      solution: '$(".msg").css("color", "blue").fadeIn();'
    },
    quizQuestions: [
      {
        id: 'jq-q6',
        question: {
          en: 'Why is jQuery method chaining considered a good practice?',
          km: 'ហេតុអ្វីបានជា jQuery Method Chaining ត្រូវគេចាត់ទុកជាក្បួនសរសេរល្អ (Best Practice)?'
        },
        options: [
          { id: '1', text: { en: 'It reduces DOM query lookups and makes code concise and readable', km: 'វាបង្រួមការស្វែងរក DOM Lookups និងធ្វើឱ្យកូដខ្លីងាយអាន' }, isCorrect: true },
          { id: '2', text: { en: 'It automatically encrypts JavaScript files', km: 'វាធ្វើ Encrypt លើ JavaScript File ដោយស្វ័យប្រវត្តិ' }, isCorrect: false },
          { id: '3', text: { en: 'It enables multi-threaded background processing', km: 'វាបើកដំណើរការ Multi-threaded processing' }, isCorrect: false }
        ],
        explanation: {
          en: 'Chaining executes operations on the same jQuery wrapper object sequentially without repetitive DOM lookups.',
          km: 'Chaining ដំណើរកូដលើ jQuery Wrapper Object ដដែលដោយមិនបាច់ចំណាយពេលស្វែងរក DOM ឡើងវិញឡើយ។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 3: Events
  // ==========================================
  {
    id: 'jq-l7',
    slug: 'jquery-click-events',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: {
      en: '3.1 `.on("click", ...)` & Shorthand `.click()`',
      km: '3.1 ព្រឹត្តិការណ៍ `.on("click")` និង `.click()`'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'jQuery simplifies listening to user click interactions on HTML elements using either shorthand `.click(handler)` or the modern flexible `.on("click", handler)` method.',
      km: 'jQuery សម្រួលដល់ការចាប់ Event ចុច (Click) របស់ អ្នកប្រើប្រាស់ លើ Element ដោយប្រើប្រាស់ Method កាត់ `.click(handler)` ឬ Method ទំនើប `.on("click", handler)`។'
    },
    tutorial: {
      en: '- Shorthand syntax: `$("#btn").click(function() { ... });` \n- Flexible `.on()` syntax: `$("#btn").on("click", function() { ... });`\nNote: `.on()` is preferred in modern jQuery because it supports binding multiple events simultaneously.',
      km: '- ទម្រង់កាត់៖ `$("#btn").click(function() { ... });`\n- ទម្រង់ទំនើប `.on()`៖ `$("#btn").on("click", function() { ... });`\nចំណាំ៖ `.on()` ត្រូវបានគេនិយមប្រើប្រាស់ក្នុង jQuery ទំនើបព្រោះវាអាចចាប់ Event ច្រើនប្រភេទក្នុងពេលតែមួយ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 20px; }
    .counter-card { background: #1e293b; border: 1px solid #334155; padding: 20px; border-radius: 12px; max-width: 350px; text-align: center; }
    .number { font-size: 48px; font-weight: 800; color: #38bdf8; margin: 10px 0; }
    .btn-group { display: flex; gap: 8px; justify-content: center; }
    button { padding: 10px 16px; border-radius: 6px; border: none; font-weight: bold; cursor: pointer; color: white; }
    .btn-add { background: #16a34a; }
    .btn-sub { background: #dc2626; }
  </style>
</head>
<body>
  <div class="counter-card">
    <h3>👆 jQuery Click Counter</h3>
    <div class="number" id="countDisplay">0</div>
    <div class="btn-group">
      <button id="btnSub" class="btn-sub">- ដក</button>
      <button id="btnAdd" class="btn-add">+ បន្ថែម</button>
    </div>
  </div>

  <script>
    $(function() {
      let count = 0;

      // Shorthand .click()
      $('#btnAdd').click(function() {
        count++;
        $('#countDisplay').text(count);
      });

      // Flexible .on("click")
      $('#btnSub').on('click', function() {
        count--;
        $('#countDisplay').text(count);
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Interactive Buttons',
        km: 'ប៊ូតុងអន្តរកម្មលើ Website'
      },
      description: {
        en: 'Click handlers drive core UI components such as accordion toggles, modal dialog triggers, and shopping cart item updates.',
        km: 'Click Handlers គឺជាបេះដូងនៃ UI ដូចជាការបើកមើល Accordion, ការបើក Modal Popup ឬការថែមទំនិញចូលក្នុង Shopping Cart។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write a click handler using .on() to hide #alertBox when clicked.',
        km: 'សរសេរ Click Handler ដោយប្រើ .on() ដើម្បីលាក់ #alertBox ពេលគេចុចលើវា។'
      },
      solution: '$("#alertBox").on("click", function() { $(this).hide(); });'
    },
    quizQuestions: [
      {
        id: 'jq-q7',
        question: {
          en: 'Which method is recommended in modern jQuery for binding event listeners?',
          km: 'តើ Method មួយណាដែលត្រូវបានណែនាំក្នុង jQuery ទំនើបសម្រាប់ភ្ជាប់ Event Listeners?'
        },
        options: [
          { id: '1', text: { en: '.on()', km: '.on()' }, isCorrect: true },
          { id: '2', text: { en: '.bind()', km: '.bind()' }, isCorrect: false },
          { id: '3', text: { en: '.attach()', km: '.attach()' }, isCorrect: false }
        ],
        explanation: {
          en: 'Since jQuery 1.7, `.on()` is the official unified method replacing `.bind()`, `.live()`, and `.delegate()`.',
          km: 'ចាប់តាំងពី jQuery 1.7 មក Method `.on()` គឺជា Method ផ្លូវការដែលជំនួស `.bind()`, `.live()` និង `.delegate()`។'
        }
      }
    ]
  },

  {
    id: 'jq-l8',
    slug: 'jquery-hover-submit-change-events',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: {
      en: '3.2 Hover, Submit, and Change Events',
      km: '3.2 ព្រឹត្តិការណ៍ .hover(), .submit(), និង .change()'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'jQuery provides specialized event handlers for mouse interactions (`.hover()`), form submissions (`.submit()`), and form field value modifications (`.change()`).',
      km: 'jQuery ផ្តល់ជូននូវ Event Handlers ពិសេសៗសម្រាប់ចាប់ចលនាម៉ៅស៍ (`.hover()`), ការផ្ញើ Form (`.submit()`) និងការប្តូរតម្លៃក្នុង Input/Select (`.change()`)។'
    },
    tutorial: {
      en: '- `.hover(mouseenterFn, mouseleaveFn)` handles both mouse enter and mouse leave.\n- `.change(fn)` triggers when select boxes or input choices change.\n- `.submit(fn)` catches form submissions before they refresh the page.',
      km: '- `.hover(fnIn, fnOut)` ចាប់ Event ពេលម៉ៅស៍ដាក់លើ និងដកចេញ\n- `.change(fn)` ចាប់ Event ពេលតម្លៃ Dropdown Select ត្រូវបានប្តូរ\n- `.submit(fn)` ចាប់ Event ពេល Form ត្រូវបានផ្ញើ (Submit)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #0b0f19; color: white; padding: 20px; }
    .hover-card { background: #1e293b; border: 2px solid #475569; padding: 16px; border-radius: 8px; margin-bottom: 15px; cursor: pointer; transition: 0.2s; }
    select { padding: 8px; border-radius: 6px; background: #1e293b; color: white; border: 1px solid #475569; }
    .result { margin-top: 10px; color: #38bdf8; font-weight: bold; }
  </style>
</head>
<body>
  <h3>🖱️ Hover & Change Event Demo</h3>

  <div class="hover-card" id="hoverCard">
    👉 ដាក់ Cursor ម៉ៅស៍លើប្រអប់នេះដើម្បីមើល Effect
  </div>

  <label>ជ្រើសរើសភាសា៖ </label>
  <select id="langSelect">
    <option value="Khmer">ភាសាខ្មែរ (Khmer)</option>
    <option value="English">English</option>
    <option value="Japanese">Japanese</option>
  </select>

  <div class="result" id="selectResult">ជ្រើសរើស៖ Khmer</div>

  <script>
    $(function() {
      // Hover event: mouseenter & mouseleave
      $('#hoverCard').hover(
        function() {
          $(this).css('border-color', '#f59e0b').css('background', '#334155');
        },
        function() {
          $(this).css('border-color', '#475569').css('background', '#1e293b');
        }
      );

      // Change event on select dropdown
      $('#langSelect').change(function() {
        const val = $(this).val();
        $('#selectResult').text('ជ្រើសរើស៖ ' + val);
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Dynamic UI updates',
        km: 'ការកែប្រែ UI តាមជម្រើសទិន្នន័យ'
      },
      description: {
        en: 'In e-commerce checkout forms, attaching a `.change()` event listener to a country dropdown dynamically loads state/province options.',
        km: 'ក្នុង Form ទិញទំនិញ e-commerce ការដាក់ Event `.change()` លើ Dropdown ប្រទេស នឹងធ្វើឱ្យ Form ទាញយកខេត្ត/ក្រុងមកបង្ហាញតាមប្រទេសដែលបានជ្រើសរើស។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write a change event handler on `#cityDropdown` that logs the selected value.',
        km: 'សរសេរ Change Event Handler លើ `#cityDropdown` ដើម្បី Log មើលតម្លៃដែលបានជ្រើសរើស។'
      },
      solution: '$("#cityDropdown").change(function() { console.log($(this).val()); });'
    },
    quizQuestions: [
      {
        id: 'jq-q8',
        question: {
          en: 'Which method handles both `mouseenter` and `mouseleave` events in a single line?',
          km: 'តើ Method មួយណាដែលចាប់បានទាំង Event `mouseenter` និង `mouseleave` ក្នុងពេលតែមួយ?'
        },
        options: [
          { id: '1', text: { en: '.hover()', km: '.hover()' }, isCorrect: true },
          { id: '2', text: { en: '.mouseenterleave()', km: '.mouseenterleave()' }, isCorrect: false },
          { id: '3', text: { en: '.cursor()', km: '.cursor()' }, isCorrect: false }
        ],
        explanation: {
          en: '`.hover(fnOver, fnOut)` takes two functions: the first runs when entering, the second runs when leaving.',
          km: '`.hover(fnOver, fnOut)` ទទួល Function ពីរ៖ ទី១ ដំណើរការពេលម៉ៅស៍ចូល និងទី២ ដំណើរការពេលម៉ៅស៍ចេញ។'
        }
      }
    ]
  },

  {
    id: 'jq-l9',
    slug: 'jquery-event-delegation',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: {
      en: '3.3 Event Delegation with `.on()` for Dynamic Elements',
      km: '3.3 Event Delegation សម្រាប់ Elements ដែលបង្កើតថ្មី'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Event delegation allows you to attach a single event handler to a parent element that will work for all existing elements AND any new child elements added to the DOM dynamically in the future.',
      km: 'Event Delegation អនុញ្ញាតឱ្យអ្នកភ្ជាប់ Event Handler លើ Parent Element ដើម្បីឱ្យវាស្គាល់ Element កូនៗដែលមានស្រាប់ ព្រមទាំង Element កូនៗដែលនឹងត្រូវបង្កើតបន្ថែមថ្មីៗតាមក្រោយ (Dynamically generated elements)។'
    },
    tutorial: {
      en: 'Standard binding (Fails for future elements):\n`$(".item").click(fn);` \n\nDelegated binding (Works for all future elements):\n`$("#parentList").on("click", ".item", fn);`',
      km: 'Binding ធម្មតា (មិនស្គាល់ Element បង្កើតថ្មី)៖\n`$(".item").click(fn);` \n\nDelegated Binding (ស្គាល់រាល់ Element បង្កើតថ្មីទាំងអស់)៖\n`$("#parentList").on("click", ".item", fn);`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: white; padding: 20px; }
    ul { list-style: none; padding: 0; }
    li { background: #1e293b; border: 1px solid #334155; padding: 10px; margin-bottom: 6px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; }
    .btn-del { background: #ef4444; color: white; border: none; padding: 4px 10px; border-radius: 4px; cursor: pointer; }
    button#btnAdd { background: #3b82f6; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: bold; margin-bottom: 12px; }
  </style>
</head>
<body>
  <h3>⚡ Dynamic Item Delegation Demo</h3>
  
  <button id="btnAdd">+ បង្កើត Item ថ្មី dynamically</button>

  <ul id="itemList">
    <li><span>Item ដើមទី ១</span> <button class="btn-del">លុប</button></li>
    <li><span>Item ដើមទី ២</span> <button class="btn-del">លុប</button></li>
  </ul>

  <script>
    $(function() {
      let count = 2;

      // 1. Add new items dynamically
      $('#btnAdd').click(function() {
        count++;
        $('#itemList').append('<li><span>Item បង្កើតថ្មីទី ' + count + '</span> <button class="btn-del">លុប</button></li>');
      });

      // 2. EVENT DELEGATION on parent #itemList
      // This click listener will work on ALL .btn-del buttons, even newly created ones!
      $('#itemList').on('click', '.btn-del', function() {
        $(this).closest('li').remove();
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'To-Do Lists & Infinite Scrolling',
        km: 'កម្មវិធី To-Do និង Infinite Scroll'
      },
      description: {
        en: 'When rendering dynamically fetched posts or new to-do list items, event delegation ensures delete and edit buttons remain fully functional without needing to re-attach event listeners.',
        km: 'នៅពេលទាញយក Post ថ្មីៗមកបន្ថែមតាម Infinite Scroll ការប្រើប្រាស់ Event Delegation ធានាថាប៊ូតុង Like ឬ Comment លើ Post ថ្មីៗដំណើរការជានិច្ចដោយមិនបាច់ Bind Event ឡើងវិញ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write an event delegation statement on `#todoList` to listen for clicks on `.todo-check`.',
        km: 'សរសេរ Event Delegation លើ `#todoList` ដើម្បីចាប់ការចុចលើ `.todo-check`'
      },
      solution: '$("#todoList").on("click", ".todo-check", function() { });'
    },
    quizQuestions: [
      {
        id: 'jq-q9',
        question: {
          en: 'Why does `$(".btn").click(...)` fail for buttons created dynamically after page load?',
          km: 'ហេតុអ្វីបានជា `$(".btn").click(...)` មិនដំណើរការលើ Button ដែលបង្កើតបន្ថែមតាមក្រោយ?'
        },
        options: [
          { id: '1', text: { en: 'Because event listeners were only attached to elements existing in the DOM at execution time', km: 'ព្រោះ Event Listeners ត្រូវភ្ជាប់តែលើ Element ណាដែលមានស្រាប់ក្នុង DOM ពេលកូដរត់ដំបូងប៉ុណ្ណោះ' }, isCorrect: true },
          { id: '2', text: { en: 'Because jQuery disables click events on newly added elements', km: 'ព្រោះ jQuery បិទ Click Events លើ Element បង្កើតថ្មី' }, isCorrect: false },
          { id: '3', text: { en: 'Because dynamic elements require CSS permissions', km: 'ព្រោះ Dynamic Elements ត្រូវការ CSS Permissions' }, isCorrect: false }
        ],
        explanation: {
          en: 'Direct event bindings only apply to elements present when the binding code runs. Event delegation delegates handling to a static container parent.',
          km: 'Direct Bindings ចាប់បានតែ Element ណាដែលមានស្រាប់។ Event Delegation បញ្ជូនការងារទៅ Parent ដែលមានស្រាប់ដើម្បីដោះស្រាយ។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 4: Effects & Animations
  // ==========================================
  {
    id: 'jq-l10',
    slug: 'jquery-hide-show-toggle',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: {
      en: '4.1 `.hide()`, `.show()`, and `.toggle()`',
      km: '4.1 .hide(), .show(), និង .toggle()'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'jQuery provides instant visibility controls with `.hide()`, `.show()`, and `.toggle()`. These methods modify the CSS `display` property and optionally accept speed durations (e.g. "slow", "fast", or milliseconds).',
      km: 'jQuery ផ្តល់នូវ Method លាក់និងបង្ហាញ Element ភ្លាមៗគឺ `.hide()`, `.show()`, និង `.toggle()`។ Methods ទាំងនេះកែប្រែ CSS `display` property ហើយអាចទទួលល្បឿនដូចជា ("slow", "fast" ឬរាប់ជា milliseconds)។'
    },
    tutorial: {
      en: '- `$("#box").hide(400);` hides element with a 400ms smooth shrink effect.\n- `$("#box").show("fast");` shows element quickly.\n- `$("#box").toggle();` switches visibility status automatically.',
      km: '- `$("#box").hide(400);` លាក់ Element ក្នុងរយ:ពេល 400ms\n- `$("#box").show("fast");` បង្ហាញ Element យ៉ាងរហ័ស\n- `$("#box").toggle();` ប្តូររវាងលាក់ និងបង្ហាញដោយស្វ័យប្រវត្តិ'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 20px; }
    .content-box { background: #1e293b; border: 1px solid #3b82f6; padding: 20px; border-radius: 8px; margin-top: 15px; max-width: 400px; }
    button { background: #2563eb; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; margin-right: 6px; font-weight: bold; }
  </style>
</head>
<body>
  <h3>🙈 Basic Show / Hide / Toggle</h3>

  <div>
    <button id="btnHide">Hide</button>
    <button id="btnShow">Show</button>
    <button id="btnToggle">Toggle</button>
  </div>

  <div class="content-box" id="myBox">
    <h4>📦 ប្រអប់ទិន្នន័យ (Content Box)</h4>
    <p>កថាខណ្ឌនេះអាចត្រូវលាក់ ឬបង្ហាញតាមរយៈ jQuery Effect Methods។</p>
  </div>

  <script>
    $(function() {
      $('#btnHide').click(function() {
        $('#myBox').hide(300);
      });

      $('#btnShow').click(function() {
        $('#myBox').show(300);
      });

      $('#btnToggle').click(function() {
        $('#myBox').toggle(400);
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Collapsible FAQ Sections',
        km: 'ផ្នែកសំណួរចម្លើយ FAQ Collapsible'
      },
      description: {
        en: '`toggle()` is ideal for building quick collapsible FAQ widgets where clicking a question reveals or hides its corresponding answer.',
        km: '`toggle()` គឺស័ក្តិសមបំផុតសម្រាប់បង្កើត FAQ Widgets ដែលចុចលើសំណួរដើម្បីបង្ហាញ ឬលាក់ចម្លើយភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write jQuery code to toggle visibility of `.sidebar` over 500 milliseconds.',
        km: 'សរសេរកូដ jQuery ដើម្បី Toggle `.sidebar` ក្នុងរយៈពេល 500 milliseconds'
      },
      solution: '$(".sidebar").toggle(500);'
    },
    quizQuestions: [
      {
        id: 'jq-q10',
        question: {
          en: 'What does `$("#panel").toggle()` do if `#panel` is currently visible?',
          km: 'តើ `$("#panel").toggle()` ធ្វើអ្វីបើ `#panel` កំពុងបង្ហាញលើ Screen?'
        },
        options: [
          { id: '1', text: { en: 'It hides the element', km: 'វានឹងលាក់ Element នោះ' }, isCorrect: true },
          { id: '2', text: { en: 'It duplicates the element', km: 'វានឹងបង្កើត Element ស្ទួន' }, isCorrect: false },
          { id: '3', text: { en: 'It reloads the webpage', km: 'វានឹង Refresh ទំព័រ' }, isCorrect: false }
        ],
        explanation: {
          en: '`.toggle()` checks the visibility state: if visible, it hides it; if hidden, it shows it.',
          km: '`.toggle()` ពិនិត្យភាពបង្ហាញ៖ បើកំពុងបង្ហាញ វាធ្វើការលាក់ ហើយបើកំពុងលាក់ វាធ្វើការបង្ហាញ។'
        }
      }
    ]
  },

  {
    id: 'jq-l11',
    slug: 'jquery-fade-effects',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: {
      en: '4.2 `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`, and `.fadeTo()`',
      km: '4.2 .fadeIn(), .fadeOut(), .fadeToggle(), និង .fadeTo()'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Fade methods smoothly transition element opacity from hidden to visible (`.fadeIn()`), visible to hidden (`.fadeOut()`), or adjust opacity to a specific fraction (`.fadeTo(speed, opacity)`).',
      km: 'Fade methods ធ្វើឱ្យការប្រែប្រួល Opacity (ភាពស្រអាប់) មានភាពរលូន៖ `.fadeIn()` (បង្ហាញរលូន), `.fadeOut()` (លាក់ស្រអាប់), `.fadeToggle()` (ប្តូររវាងស្រអាប់/ច្បាស់) និង `.fadeTo(speed, opacity)` (កម្រិត Opacity ជាក់លាក់)។'
    },
    tutorial: {
      en: '- `$("#box").fadeIn(600);` smoothly fades element in.\n- `$("#box").fadeOut("slow");` smoothly fades element out.\n- `$("#box").fadeTo("fast", 0.3);` changes opacity to 30%.',
      km: '- `$("#box").fadeIn(600);` បង្ហាញចេញដោយរលូន 600ms\n- `$("#box").fadeOut("slow");` លាក់ស្រអាប់រលូន\n- `$("#box").fadeTo("fast", 0.3);` បន្ថយ Opacity មកត្រឹម 30%'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #090d16; color: white; padding: 20px; }
    .box-grid { display: flex; gap: 12px; margin-top: 15px; }
    .box { width: 90px; height: 90px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; }
    .b1 { background: #ef4444; }
    .b2 { background: #10b981; }
    .b3 { background: #3b82f6; }
    button { background: #0284c7; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; margin-right: 6px; font-weight: bold; }
  </style>
</head>
<body>
  <h3>✨ Smooth Fade Animations</h3>

  <div>
    <button id="btnFadeOut">Fade Out</button>
    <button id="btnFadeIn">Fade In</button>
    <button id="btnFadeTo">Fade To 30%</button>
  </div>

  <div class="box-grid">
    <div class="box b1" id="box1">Box 1</div>
    <div class="box b2" id="box2">Box 2</div>
    <div class="box b3" id="box3">Box 3</div>
  </div>

  <script>
    $(function() {
      $('#btnFadeOut').click(function() {
        $('#box1').fadeOut(400);
        $('#box2').fadeOut(800);
        $('#box3').fadeOut(1200);
      });

      $('#btnFadeIn').click(function() {
        $('#box1').fadeIn(400);
        $('#box2').fadeIn(800);
        $('#box3').fadeIn(1200);
      });

      $('#btnFadeTo').click(function() {
        $('.box').fadeTo('medium', 0.3);
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Notification Banner Dismissals',
        km: 'ការបិទ Notification Banners'
      },
      description: {
        en: 'When a user clicks the "Close" button on a success alert banner, using `.fadeOut(400, function() { $(this).remove(); })` smoothly removes the alert.',
        km: 'ពេល User ចុចប៊ូតុង "X" លើ Alert Banner ការប្រើ `.fadeOut()` ធ្វើឱ្យប្រអប់នោះរលត់ស្រអាប់បាត់ទៅវិញយ៉ាងមានសោភ័ណភាព។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write jQuery code to fade out `#alert` slowly over 1 second (1000ms).',
        km: 'សរសេរកូដ jQuery ដើម្បី Fade Out `#alert` ក្នុងរយៈពេល ១ វិនាទី (1000ms)។'
      },
      solution: '$("#alert").fadeOut(1000);'
    },
    quizQuestions: [
      {
        id: 'jq-q11',
        question: {
          en: 'Which jQuery method changes the opacity of an element to a specific decimal value without hiding it completely?',
          km: 'តើ Method មួយណាសម្រាប់កំណត់ Opacity ទៅជាតម្លៃ Decimal ជាក់លាក់ដោយមិនបាច់លាក់វាបាត់ស្រមោល?'
        },
        options: [
          { id: '1', text: { en: '.fadeTo()', km: '.fadeTo()' }, isCorrect: true },
          { id: '2', text: { en: '.fadeSet()', km: '.fadeSet()' }, isCorrect: false },
          { id: '3', text: { en: '.opacityTo()', km: '.opacityTo()' }, isCorrect: false }
        ],
        explanation: {
          en: '`.fadeTo(speed, opacity)` adjusts opacity to a target value between 0.0 and 1.0.',
          km: '`.fadeTo(speed, opacity)` កំណត់កម្រិត Opacity ចន្លោះពី 0.0 ទៅ 1.0។'
        }
      }
    ]
  },

  {
    id: 'jq-l12',
    slug: 'jquery-slide-effects',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: {
      en: '4.3 `.slideDown()`, `.slideUp()`, and `.slideToggle()`',
      km: '4.3 .slideDown(), .slideUp(), និង .slideToggle()'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Sliding methods animate the CSS height property of elements to slide content down into view (`.slideDown()`), slide content up into hidden state (`.slideUp()`), or toggle between both states (`.slideToggle()`).',
      km: 'Sliding methods ធ្វើចលនាពង្រីក/បង្រួម កម្ពស់ Height នៃ Elements៖ `.slideDown()` (ទាញចុះបង្ហាញ), `.slideUp()` (រុញឡើងលើលាក់) និង `.slideToggle()` (ប្តូរចលនាឡើងលើ/ចុះក្រោម)។'
    },
    tutorial: {
      en: '- `$("#panel").slideDown(400);` smoothly expands height downwards.\n- `$("#panel").slideUp("slow");` smoothly shrinks height upwards.\n- `$("#panel").slideToggle();` toggles open/close status.',
      km: '- `$("#panel").slideDown(400);` ពង្រីកកម្ពស់ចុះក្រោមរលូន\n- `$("#panel").slideUp("slow");` បង្រួមកម្ពស់ឡើងលើលាក់\n- `$("#panel").slideToggle();` បើក/បិទចលនាស្លាយ'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: white; padding: 20px; }
    .accordion-header { background: #1e293b; border: 1px solid #475569; padding: 12px 16px; border-radius: 8px; cursor: pointer; font-weight: bold; display: flex; justify-content: space-between; max-width: 450px; }
    .accordion-body { background: #0f172a; border: 1px solid #334155; border-top: none; padding: 16px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; max-width: 450px; display: none; }
  </style>
</head>
<body>
  <h3>📂 Accordion Slide Animation Demo</h3>

  <div class="accordion-header" id="accHeader">
    <span>❓ តើអ្វីទៅជា jQuery Sliding Effect?</span>
    <span id="arrow">▼</span>
  </div>
  <div class="accordion-body" id="accBody">
    jQuery Sliding Effects ប្រើប្រាស់សម្រាប់បង្កើត Accordion menus, dropdown menus ឬស្លាយបង្ហាញព័ត៌មានបន្ថែមយ៉ាងរលូន។
  </div>

  <script>
    $(function() {
      $('#accHeader').click(function() {
        $('#accBody').slideToggle(350, function() {
          // Callback after slide finishes
          if ($(this).is(':visible')) {
            $('#arrow').text('▲');
          } else {
            $('#arrow').text('▼');
          }
        });
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Mobile Navigation Menus',
        km: 'Menu លើ Mobile App & Website'
      },
      description: {
        en: 'Sliding effects are widely used for hamburger menu triggers on responsive websites, sliding down navigation links cleanly on smaller screens.',
        km: 'ចលនា Sliding ត្រូវគេប្រើប្រាស់ច្រើនលើ Hamburger Menu លើ Mobile ដែលទាញ Menu រុញចុះមកក្រោមយ៉ាងមានរបៀប។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write a jQuery code statement to slide up `#menuDropdown` smoothly.',
        km: 'សរសេរកូដ jQuery ដើម្បី Slide Up លាក់ `#menuDropdown`'
      },
      solution: '$("#menuDropdown").slideUp();'
    },
    quizQuestions: [
      {
        id: 'jq-q12',
        question: {
          en: 'Which CSS property is animated during `.slideDown()` and `.slideUp()` calls?',
          km: 'តើ CSS Property មួយណាដែលត្រូវធ្វើចលនា Animation ក្នុងអំឡុងពេលរត់ `.slideDown()` និង `.slideUp()`?'
        },
        options: [
          { id: '1', text: { en: 'height', km: 'height' }, isCorrect: true },
          { id: '2', text: { en: 'opacity', km: 'opacity' }, isCorrect: false },
          { id: '3', text: { en: 'margin-left', km: 'margin-left' }, isCorrect: false }
        ],
        explanation: {
          en: 'Sliding effects animate element height and padding-top/padding-bottom to smoothly show or collapse content.',
          km: 'Sliding Effects ធ្វើចលនាលើកម្ពស់ (Height) និង Padding លើ/ក្រោម នៃ Element។'
        }
      }
    ]
  },

  {
    id: 'jq-l13',
    slug: 'jquery-custom-animate',
    moduleNumber: 4,
    lessonNumberInModule: 4,
    title: {
      en: '4.4 Custom `.animate()` Basics',
      km: '4.4 ការបង្កើតចលនា Animation ផ្ទាល់ខ្លួនជាមួយ .animate()'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'The `.animate()` method allows you to create custom CSS animations on numeric properties (like `width`, `height`, `left`, `opacity`, `fontSize`) over a specified duration.',
      km: 'Method `.animate()` អនុញ្ញាតឱ្យអ្នកបង្កើតចលនា Custom Animation ដោយខ្លួនឯងលើ CSS Properties ទាំងឡាយណាដែលមានតម្លៃជាលេខ (ដូចជា `width`, `height`, `left`, `opacity`, `fontSize`)។'
    },
    tutorial: {
      en: 'Syntax:\n`$(selector).animate({ cssProperties }, speed, callback);` \nExample:\n`$("#box").animate({ width: "300px", opacity: 0.5 }, 500);`\nNote: Elements must have relative/absolute positioning to animate `left` or `top`.',
      km: 'ទម្រង់កូដ៖\n`$(selector).animate({ CSS Properties }, ល្បឿន, callback);` \nឧទាហរណ៍៖\n`$("#box").animate({ width: "300px", opacity: 0.5 }, 500);`\nចំណាំ៖ ត្រូវកំណត់ `position: relative/absolute` បើចង់ធ្វើចលនាផ្លាស់ទី `left` ឬ `top`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 20px; }
    .stage { background: #1e293b; border: 1px solid #334155; height: 180px; position: relative; border-radius: 8px; margin-top: 15px; overflow: hidden; }
    .ball { width: 50px; height: 50px; background: #f59e0b; border-radius: 50%; position: absolute; top: 20px; left: 20px; }
    button { background: #d97706; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: bold; }
  </style>
</head>
<body>
  <h3>🚀 Custom .animate() Physics Demo</h3>

  <button id="btnAnimate">Start Animation Sequence</button>

  <div class="stage">
    <div class="ball" id="ball"></div>
  </div>

  <script>
    $(function() {
      $('#btnAnimate').click(function() {
        // Sequenced .animate() calls queue up automatically!
        $('#ball')
          .animate({ left: '280px', width: '80px', height: '80px' }, 600)
          .animate({ top: '100px', backgroundColor: '#ef4444' }, 500)
          .animate({ left: '20px', width: '50px', height: '50px' }, 600)
          .animate({ top: '20px' }, 500);
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Progress Bar Animations',
        km: 'ចលនា Progress Bar ដំណើរការ'
      },
      description: {
        en: 'Custom `.animate()` is frequently used to smoothly fill statistical progress bars (e.g. `$(".progress-fill").animate({ width: "85%" }, 1000)`).',
        km: '`.animate()` ត្រូវគេប្រើប្រាស់ច្រើនដើម្បីរុញ Progress Bar ឱ្យដើររលូនពី 0% ទៅ 100% ពេល Page ដំណើរការ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write a jQuery animate statement to increase #box width to 200px in 400ms.',
        km: 'សរសេរកូដ jQuery animate ដើម្បីបង្កើន Width នៃ #box ទៅ 200px ក្នុងរយៈពេល 400ms។'
      },
      solution: '$("#box").animate({ width: "200px" }, 400);'
    },
    quizQuestions: [
      {
        id: 'jq-q13',
        question: {
          en: 'Which CSS properties CANNOT be animated using standard jQuery `.animate()` without extra plugins?',
          km: 'តើ CSS Properties មួយណាដែលមិនអាចធ្វើចលនាដោយប្រើប្រាស់ Standard jQuery `.animate()` ដោយគ្មាន Extra Plugins?'
        },
        options: [
          { id: '1', text: { en: 'Non-numeric properties like background-color or border-style', km: 'Properties ដែលមិនមែនជាលេខ ដូចជា background-color ឬ border-style' }, isCorrect: true },
          { id: '2', text: { en: 'width and height', km: 'width និង height' }, isCorrect: false },
          { id: '3', text: { en: 'opacity and margin-left', km: 'opacity និង margin-left' }, isCorrect: false }
        ],
        explanation: {
          en: 'Core `.animate()` only supports numeric properties. Colors require jQuery UI or CSS transitions.',
          km: '`.animate()` គាំទ្រតែ Properties ណាដែលមានតម្លៃជាលេខប៉ុណ្ណោះ។'
        }
      }
    ]
  }
];
