import { FrontendLesson } from '../types/frontendClass';

export const JS_LESSONS_PART1: FrontendLesson[] = [
  // MODULE 1
  {
    id: 'js-m1-l1',
    slug: 'what-is-javascript',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: {
      en: '1.1 What JavaScript Is & Engine Execution',
      km: '១.១ អ្វីទៅជា JavaScript & ដំណើរការលើ Browser Engine'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'JavaScript (JS) is a lightweight, compiled dynamic programming language that powers interactive behavior on 99% of web pages.',
      km: 'JavaScript គឺជាភាសាសរសេរកម្មវិធី (Programming Language) ដែលធ្វើឲ្យគេហទំព័រ Web មានលក្ខណៈរវើក Interactivity។ វាដំណើការដោយផ្ទាល់នៅលើ Browser Engine (ដូចជា V8 ក្នុង Chrome ឬ SpiderMonkey ក្នុង Firefox)។'
    },
    tutorial: {
      en: '✨ Essential Concept:\nHTML = Structure (ឆ្អឹងខ្នង)\nCSS = Styling (សម្លៀកបំពាក់)\nJavaScript = Behavior (ខួរក្បាល និងសកម្មភាព)',
      km: '✨ គោលការណ៍គ្រឹះសំខាន់៖\nHTML បង្កើតរចនាសម្ព័ន្ធ CSS តុបតែងពណ៌សម្បុរ រីឯ JavaScript ផ្តល់ខួរក្បាលបញ្ជាឲ្យចុច button, បង្ហាញ Popup, និងផ្ញើទិន្នន័យ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #0f172a; color: white; text-align: center; }
    button { padding: 10px 20px; background: #38bdf8; border: none; font-weight: bold; border-radius: 8px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>JavaScript Demo</h2>
  <button onclick="document.getElementById('text').innerText = '🎉 ជោគជ័យ! JS បានដំណើការ!'">ចុចទីនេះ (Click Me)</button>
  <p id="text" style="margin-top:20px; color:#f59e0b; font-size:18px;"></p>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Every button click, form validation message, and smooth slide animation on real apps relies on JavaScript executing in the browser.',
        km: 'រាល់ការចុច Button, ការត្រួតពិនិត្យ Form, និងការបង្ហាញ notification លើ Web App ពិតប្រាកដគឺត្រូវបានបញ្ជាដោយ JavaScript។'
      }
    },
    practiceExercise: {
      question: { en: 'What role does JavaScript play compared to HTML and CSS?', km: 'តើ JavaScript មានតួនាទីអ្វីខុសពី HTML និង CSS?' },
      solution: 'JavaScript controls logic and dynamic interactivity, while HTML structures content and CSS styles layout.'
    },
    quizQuestions: [
      {
        id: 'q-js-1-1',
        question: { en: 'Where does browser-side JavaScript execute?', km: 'តើ JavaScript សម្រាប់ Frontend ដំណើការនៅឯណា?' },
        options: [
          { id: 'a', text: { en: 'Directly inside the browser JavaScript engine (e.g. V8)', km: 'ដំណើការផ្ទាល់លើ Browser Engine (ដូចជា V8 Engine)' }, isCorrect: true },
          { id: 'b', text: { en: 'On a database server only', km: 'ដំណើការតែលើ Database Server ប៉ុណ្ណោះ' }, isCorrect: false }
        ],
        explanation: { en: 'Browsers contain embedded JS engines that execute JavaScript code directly.', km: 'Browser មាន JS Engine ផ្ទាល់ខ្លួនសម្រាប់ដំណើការកូដ JavaScript។' }
      }
    ]
  },
  {
    id: 'js-m1-l2',
    slug: 'adding-javascript-to-page',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: {
      en: '1.2 Adding JS to HTML (<script> Inline vs External)',
      km: '១.២ ការភ្ជាប់ JS ទៅកាន់ HTML (Inline vs External <script>)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'You can add JS to an HTML document using <script> tags inline, or by linking an external .js file.',
      km: 'អ្នកអាចភ្ជាប់ JavaScript ទៅកាន់ទំព័រ HTML តាម ២ របៀប៖ ប្រើ <script> tag ផ្ទាល់ក្នុងទំព័រ (Inline Script) ឬភ្ជាប់ទៅកាន់ឯកសារខាងក្រៅ app.js (External Script)។'
    },
    tutorial: {
      en: '✨ Best Practice:\nLink external files before </body> tag or use <script src="app.js" defer></script> in <head> for fast rendering.',
      km: '✨ ស្តង់ដារល្អបំផុត៖ បញ្ចូល <script src="app.js" defer></script> ក្នុង <head> ឬដាក់ <script> នៅខាងចុងនៃ </body> ដើម្បីកុំឲ្យស្ទះ DOM Render។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<body>
  <h1 id="title">សួស្តីលោកអ្នក!</h1>
  <script>
    // Inline script example
    console.log("Script loaded successfully!");
    document.getElementById("title").style.color = "#38bdf8";
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Keeping JS code in separate external files (app.js) makes codebase modular, maintainable, and allows browser caching.',
        km: 'ការបំបែកកូដ JS ទៅជាឯកសារ .js ផ្សេងគ្នានាំឲ្យកូដមានរបៀបរៀបរយ អានស្រួល និងជួយឲ្យ Browser ចាំ cache។'
      }
    },
    practiceExercise: {
      question: { en: 'Write the HTML tag to load an external script named script.js with defer attribute.', km: 'សរសេរ HTML tag សម្រាប់ភ្ជាប់ឯកសារ script.js ដោយប្រើ defer attribute។' },
      solution: '<script src="script.js" defer></script>'
    },
    quizQuestions: [
      {
        id: 'q-js-1-2',
        question: { en: 'Why is defer used in script tags?', km: 'តើ attr defer ប្រើក្នុង <script> មានប្រយោជន៍អ្វី?' },
        options: [
          { id: 'a', text: { en: 'Executes JS after HTML parsing finishes without blocking DOM', km: 'ដំណើការកូដ JS ក្រោយពេល HTML parsing ចប់ដោយមិនស្ទះ DOM' }, isCorrect: true },
          { id: 'b', text: { en: 'Hides JS code from users', km: 'លាក់កូដ JS ពីអ្នកប្រើ' }, isCorrect: false }
        ],
        explanation: { en: 'defer loads the script in parallel and executes it after DOM is fully parsed.', km: 'defer អនុញ្ញាតឲ្យ Browser ទាញយក Script ដោយស្បើយៗ និងដំណើការពេល DOM parsed ចប់។' }
      }
    ]
  },
  {
    id: 'js-m1-l3',
    slug: 'browser-console-and-logging',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: {
      en: '1.3 Browser Console & Debugging with console.log()',
      km: '១.៣ ការប្រើប្រាស់ Browser Console & console.log()'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'The Browser Console (F12 Developer Tools) allows developers to inspect variable values, trace code execution, and catch errors.',
      km: 'Browser Console (ចុច F12 -> Console) គឺជាឧបករណ៍សំខាន់បំផុតសម្រាប់ Developer ពិនិត្យមើលតម្លៃ Variable, តាមដានកូដ និងដោះស្រាយ Bug (Debugging)។'
    },
    tutorial: {
      en: '✨ Useful console methods:\nconsole.log(value) - Output general info\nconsole.warn(msg) - Warning in yellow\nconsole.error(msg) - Error in red',
      km: '✨ ប្រភេទនៃការ Log៖\n- console.log("ព័ត៌មាន")\n- console.warn("ការព្រមាន")\n- console.error("បញ្ហាកូដ")'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <h3>បើក DevTools Console (F12) ដើម្បីមើល Log</h3>
  <script>
    console.log("1. ជម្រាបសួរពី Console!");
    console.warn("2. នេះជាសារព្រមាន!");
    console.error("3. នេះជាសារ Error សាកល្បង!");
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Developers use console.log extensively during development to verify API responses and trace data flow.',
        km: 'Developer ប្រើ console.log រាល់ថ្ងៃដើម្បីពិនិត្យមើលទិន្នន័យទាញចេញពី API និងត្រួតពិនិត្យ Bug ក្នុងកូដ។'
      }
    },
    practiceExercise: {
      question: { en: 'Print "User logged in" to the browser console.', km: 'សរសេរកូដ Log ពាក្យ "User logged in" ទៅកាន់ Console។' },
      solution: 'console.log("User logged in");'
    },
    quizQuestions: [
      {
        id: 'q-js-1-3',
        question: { en: 'Which method prints informational messages to the web console?', km: 'តើ Method មួយណាសម្រាប់បោះពុម្ពព័ត៌មានទៅកាន់ Console?' },
        options: [
          { id: 'a', text: { en: 'console.log()', km: 'console.log()' }, isCorrect: true },
          { id: 'b', text: { en: 'print.text()', km: 'print.text()' }, isCorrect: false }
        ],
        explanation: { en: 'console.log() outputs messages or data structures directly into the DevTools console.', km: 'console.log() បោះពុម្ពព័ត៌មានទៅកាន់ Browser Console។' }
      }
    ]
  },

  // MODULE 2
  {
    id: 'js-m2-l1',
    slug: 'variables-let-const-var',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: {
      en: '2.1 Variables: let, const, and var',
      km: '២.១ អថេរ Variables (let, const និង var)'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Variables hold values in memory. Modern JS uses `const` for immutable references and `let` for reassignable variables. Avoid legacy `var`.',
      km: 'អថេរ (Variable) គឺជាកន្លែងផ្ទុកទិន្នន័យក្នុង Memory។ ក្នុង ES6 Modern JS:\n- `const`: ប្រើសម្រាប់តម្លៃថេរ ដែលមិនដូរឡើងវិញ\n- `let`: ប្រើសម្រាប់អថេរដែលអាចប្តូរតម្លៃបាន\n- `var`: ជៀសវាងការប្រើ ព្រោះវាមាន Function scope បង្កឲ្យមាន Bug ងាយ។'
    },
    tutorial: {
      en: '✨ Golden Rule:\nUse `const` by default. Only switch to `let` if you know you will reassign the variable value later.',
      km: '✨ ក្បួនមាស៖ ប្រើ const ជាជម្រើសដំបូងជានិច្ច! ប្រើ let លុះត្រាតើតម្លៃនោះត្រូវប្តូរឡើងវិញ (ដូចជា Score ឬ Counter)។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <h3>Variables Demo</h3>
  <script>
    const appName = "Frontend Hub"; // Cannot reassign
    let userScore = 100; // Can reassign
    userScore = userScore + 50;

    console.log("App Name:", appName);
    console.log("Updated Score:", userScore);
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Using `const` prevents accidental reassignment of essential configurations, API base URLs, or DOM reference nodes.',
        km: 'ការប្រើ const ការពារកុំឲ្យមានការ Reassign តម្លៃសំខាន់ៗដោយច្រឡំ (ដូចជា API Key ឬ DOM Element)។'
      }
    },
    practiceExercise: {
      question: { en: 'Declare a reassignable counter variable set to 0, then increment it by 1.', km: 'ប្រកាសអថេរ counter មានតម្លៃ 0 ហើយដំឡើង ១ បន្ថែម។' },
      solution: 'let counter = 0;\ncounter += 1;'
    },
    quizQuestions: [
      {
        id: 'q-js-2-1',
        question: { en: 'What happens if you reassign a variable declared with `const`?', km: 'តើមានអ្វីកើតឡើងប្រសិនបើអ្នកប្តូរតម្លៃអថេរ const?' },
        options: [
          { id: 'a', text: { en: 'Throws a TypeError: Assignment to constant variable', km: 'កើតមាន TypeError មិនអនុញ្ញាតឲ្យ reassign តម្លៃ const' }, isCorrect: true },
          { id: 'b', text: { en: 'It silently updates the value', km: 'ប្តូរតម្លៃដោយស្ងាត់ៗ' }, isCorrect: false }
        ],
        explanation: { en: 'Reassigning a const binding triggers a runtime TypeError.', km: 'const មិនអនុញ្ញាតឲ្យប្តូរតម្លៃឡើយ ប្រសិនបើ Reassign នឹងមាន TypeError។' }
      }
    ]
  },
  {
    id: 'js-m2-l2',
    slug: 'primitive-data-types',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: {
      en: '2.2 Primitive Data Types (String, Number, Boolean, Null, Undefined)',
      km: '២.២ ប្រភេទទិន្នន័យ Primitives (String, Number, Boolean, Null, Undefined)'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'JavaScript has 5 main primitive data types: String (text), Number (digits), Boolean (true/false), Undefined (unassigned), and Null (intentional emptiness).',
      km: 'JavaScript មានប្រភេទទិន្នន័យគ្រឹះ (Primitive Data Types) ៥ យ៉ាង៖\n1. String: អក្សរ "Hello"\n2. Number: លេខ 42 ឬ 3.14\n3. Boolean: ពិត ឬ ភូត (true / false)\n4. Undefined: អថេរប្រកាសហើយគ្មានតម្លៃ\n5. Null: អថេរដែលគ្មានតម្លៃដោយចេតនា'
    },
    tutorial: {
      en: '✨ Quick Examples:\nconst name = "Sok"; // String\nconst age = 22; // Number\nconst isStudent = true; // Boolean\nlet x; // undefined\nconst user = null; // null',
      km: '✨ ឧទាហរណ៍៖\nString ប្រើ quote "", Number គ្មាន quote, Boolean មានតែ true/false។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <h3>Primitive Types in Console</h3>
  <script>
    const name = "Dara";
    const age = 25;
    const isLoggedIn = true;
    let address;
    const cart = null;

    console.log("String:", name);
    console.log("Number:", age);
    console.log("Boolean:", isLoggedIn);
    console.log("Undefined:", address);
    console.log("Null:", cart);
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Booleans control feature toggles (isLoggedIn), Numbers compute shopping totals, and Strings render user names in headers.',
        km: 'Boolean ប្រើសម្រាប់ Check ស្ថានភាព (isLoggedIn), Number សម្រាប់គណនាតម្លៃទំនិញ, រីឯ String សម្រាប់បង្ហាញឈ្មោះអ្នកប្រើ។'
      }
    },
    practiceExercise: {
      question: { en: 'Declare a boolean variable `isActive` set to true.', km: 'ប្រកាសអថេរ `isActive` ជា Boolean មានតម្លៃ true។' },
      solution: 'const isActive = true;'
    },
    quizQuestions: [
      {
        id: 'q-js-2-2',
        question: { en: 'What is the type of an uninitialized variable in JavaScript?', km: 'តើអថេរដែលប្រកាសហើយតែមិនទាន់ដាក់តម្លៃមាន Data Type អ្វី?' },
        options: [
          { id: 'a', text: { en: 'undefined', km: 'undefined' }, isCorrect: true },
          { id: 'b', text: { en: 'null', km: 'null' }, isCorrect: false }
        ],
        explanation: { en: 'Variables declared without initialization hold the primitive value `undefined`.', km: 'អថេរប្រកាសហើយមិនដាក់តម្លៃនឹងទទួលបាន `undefined` ជាសវ័យប្រវត្តិ។' }
      }
    ]
  },
  {
    id: 'js-m2-l3',
    slug: 'type-conversion-typeof',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: {
      en: '2.3 Type Conversion & typeof Operator',
      km: '២.៣ ការបំប្លែង Data Type (Type Conversion & typeof)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Use `typeof` to check variable types. Convert strings to numbers with `Number("123")` or `parseInt("123")` and numbers to strings with `String(123)`.',
      km: 'អ្នកអាចប្រើ Operator `typeof` ដើម្បីពិនិត្យមើលប្រភេទ Data Type។ ប្រើ `Number("100")` ដើម្បីបំប្លែងអក្សរទៅជាលេខ និង `String(100)` ដើម្បីបំប្លែងលេខទៅជាអក្សរ។'
    },
    tutorial: {
      en: '✨ Beware Implicit Coercion:\n"5" + 2 = "52" (String concatenation!)\n"5" - 2 = 3 (Numeric subtraction)',
      km: '✨ ប្រយ័ត្ន៖ ពេលបូកអក្សរ "5" + 2 នឹងចេញ "52" (តគ្នាក្នុងនាមជាអក្សរ)! ត្រូវបំប្លែងជាលេខដោយប្រើ Number("5") + 2។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const strNum = "100";
    console.log("Type of strNum:", typeof strNum); // string

    const convertedNum = Number(strNum);
    console.log("Converted:", convertedNum, typeof convertedNum); // number

    const sum = Number("50") + 20;
    console.log("Safe Sum:", sum); // 70
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Form input values in HTML (`<input>`) are ALWAYS strings by default. You must convert them to numbers before performing math calculations.',
        km: 'តម្លៃ input ចេញពី HTML Form គឺជានិច្ចកាលជា String! ត្រូវបំប្លែងជា Number() មុននឹងគណនាលេខក្នុង E-commerce app។'
      }
    },
    practiceExercise: {
      question: { en: 'Convert string "42" to a number and add 8.', km: 'បំប្លែង String "42" ទៅជាលេខ ហើយបូកបន្ថែម 8។' },
      solution: 'const result = Number("42") + 8; // 50'
    },
    quizQuestions: [
      {
        id: 'q-js-2-3',
        question: { en: 'What does `typeof "Hello"` return?', km: 'តើ `typeof "Hello"` បង្វិលតម្លៃអ្វីមកវិញ?' },
        options: [
          { id: 'a', text: { en: '"string"', km: '"string"' }, isCorrect: true },
          { id: 'b', text: { en: '"text"', km: '"text"' }, isCorrect: false }
        ],
        explanation: { en: 'typeof returns string representations of data types in lower-case.', km: 'typeof "Hello" ឲ្យតម្លៃ "string"។' }
      }
    ]
  },

  // MODULE 3
  {
    id: 'js-m3-l1',
    slug: 'operators-arithmetic-logical',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: {
      en: '3.1 Arithmetic, Comparison & Logical Operators',
      km: '៣.១ ប្រមាណវិធី Operators (Arithmetic, Comparison, Logical)'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Operators manipulate variables. Strict equality (`===`) checks both value AND type. Logical operators (`&&`, `||`, `!`) combine conditions.',
      km: 'Operators ប្រើសម្រាប់គណនា និងប្រៀបធៀប៖\n- Arithmetic: `+`, `-`, `*`, `/`, `%` (សំណល់)\n- Strict Comparison: `===` (ស្មើទាំងតម្លៃ និង type), `!==` (មិនស្មើ)\n- Logical: `&&` (AND - ត្រូវទាំងអស់), `||` (OR - ត្រូវមួយណា), `!` (NOT - បញ្ច្រាស)'
    },
    tutorial: {
      en: '✨ Always use Strict Equality `===` instead of loose `==` to prevent hidden coercion bugs.',
      km: '✨ ក្បួនសំខាន់៖ ប្រើ `===` ជានិច្ច (កុំប្រើ `==`) ដើម្បីការពារ Bug ប្រៀបធៀបចៃដន្យ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const age = 20;
    const hasID = true;

    const canEnterClub = age >= 18 && hasID;
    console.log("Can enter club:", canEnterClub); // true

    console.log("5 === '5':", 5 === '5'); // false (strict)
    console.log("5 == '5':", 5 == '5');   // true (loose - avoid!)
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Authentication checks use logical AND (`isLoggedIn && isAdmin`) to restrict access to admin dashboards.',
        km: 'ការផ្ទៀងផ្ទាត់សិទ្ធិប្រើប្រាស់ `isLoggedIn && isAdmin` ដើម្បីអនុញ្ញាតឲ្យតែ Admin ចូលមើលប្រព័ន្ធបាន។'
      }
    },
    practiceExercise: {
      question: { en: 'Write a condition checking if score is greater than 50 and status is "active".', km: 'សរសេរលក្ខខណ្ឌត្រួតពិនិត្យថា score ធំជាង 50 និង status ស្មើ "active"។' },
      solution: 'score > 50 && status === "active"'
    },
    quizQuestions: [
      {
        id: 'q-js-3-1',
        question: { en: 'What does `5 === "5"` evaluate to in JS?', km: 'តើ `5 === "5"` ឲ្យលទ្ធផលអ្វី?' },
        options: [
          { id: 'a', text: { en: 'false', km: 'false' }, isCorrect: true },
          { id: 'b', text: { en: 'true', km: 'true' }, isCorrect: false }
        ],
        explanation: { en: 'Strict equality checks both value and type. Number 5 is not equal to String "5".', km: '=== ត្រួតពិនិត្យទាំងតម្លៃ និង Data Type។ លេខ 5 មិនស្មើនឹងអក្សរ "5" ទេ។' }
      }
    ]
  },
  {
    id: 'js-m3-l2',
    slug: 'if-else-statements',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: {
      en: '3.2 Conditionals: if, else if, and else',
      km: '៣.២ លក្ខខណ្ឌ Conditionals (if, else if, else)'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Conditional statements allow your application to execute different code blocks based on specified boolean evaluation paths.',
      km: 'លក្ខខណ្ឌ `if...else` អនុញ្ញាតឲ្យកូដជ្រើសរើសផ្លូវដំណើការផ្សេងៗគ្នាយោងតាមលក្ខខណ្ឌពិត (true) ឬ មិនពិត (false)។'
    },
    tutorial: {
      en: '✨ Syntax Structure:\nif (condition1) {\n  // code block 1\n} else if (condition2) {\n  // code block 2\n} else {\n  // default fallback\n}',
      km: '✨ ទម្រង់៖ ប្រសិនបើ condition1 ពិត ដំណើការ block 1, បើ condition2 ពិត ដំណើការ block 2, បើខុសទាំងអស់ដំណើការ else។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const score = 85;

    if (score >= 90) {
      console.log("Grade: A (ប្រពៃណាស់!)");
    } else if (score >= 80) {
      console.log("Grade: B (ល្អណាស់!)");
    } else if (score >= 70) {
      console.log("Grade: C (ល្អ!)");
    } else {
      console.log("Grade: F (ត្រូវខំប្រឹងបន្ថែម)");
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Shopping carts use conditionals to apply free shipping when the order total exceeds $50.',
        km: 'ប្រព័ន្ធទិញទំនិញប្រើ if...else ដើម្បីផ្តល់ការដឹកជញ្ជូនឥតគិតថ្លៃ ប្រសិនបើសរុបលើសពី $50។'
      }
    },
    practiceExercise: {
      question: { en: 'Write an if statement that prints "Adult" if age >= 18, else "Minor".', km: 'សរសេរ if...else បោះពុម្ព "Adult" បើ age >= 18 បើមិនច្បាស់បោះ "Minor"។' },
      solution: 'if (age >= 18) {\n  console.log("Adult");\n} else {\n  console.log("Minor");\n}'
    },
    quizQuestions: [
      {
        id: 'q-js-3-2',
        question: { en: 'Which block executes when all preceding if and else-if conditions evaluate to false?', km: 'តើ Block មួយណាដែលដំណើការពេលលក្ខខណ្ឌ if និង else-if ខាងលើខុសទាំងអស់?' },
        options: [
          { id: 'a', text: { en: 'else', km: 'else block' }, isCorrect: true },
          { id: 'b', text: { en: 'then', km: 'then block' }, isCorrect: false }
        ],
        explanation: { en: 'The fallback `else` block executes when no previous condition evaluated to true.', km: 'else block ដំណើការជាជម្រើសចុងក្រោយពេលលក្ខខណ្ឌមុនៗ false ទាំងអស់។' }
      }
    ]
  },
  {
    id: 'js-m3-l3',
    slug: 'switch-statements',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: {
      en: '3.3 Switch Statements',
      km: '៣.៣ ការប្រើប្រាស់ Switch Statements'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'A `switch` statement evaluates an expression against multiple `case` clauses. Always include a `break` to prevent fallthrough, and a `default` case.',
      km: '`switch` ប្រើសម្រាប់ផ្ទៀងផ្ទាត់តម្លៃអថេរមួយ ជាមួយនឹងជម្រើសច្រើន (multiple cases)។ ត្រូវដាក់ `break` ក្នុង case នីមួយៗ និង `default` សម្រាប់ករណីគ្មានអ្វីត្រូវ។'
    },
    tutorial: {
      en: '✨ Structure:\nswitch(day) {\n  case "Mon": console.log("Start"); break;\n  default: console.log("Weekend");\n}',
      km: '✨ ទម្រង់៖ switch(អថេរ) { case តម្លៃ១: ... break; default: ... }'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const userRole = "editor";

    switch(userRole) {
      case "admin":
        console.log("Full Access granted");
        break;
      case "editor":
        console.log("Edit content access granted");
        break;
      default:
        console.log("Read-only guest view");
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'State machines and Redux reducers heavily use `switch` statements to handle discrete action types cleanly.',
        km: 'ប្រព័ន្ធគ្រប់គ្រង Role ឬ Redux state management ប្រើ switch សួរដេញដោលប្រភេទ Action ដោយស្អាតបាត។'
      }
    },
    practiceExercise: {
      question: { en: 'Write a switch for variable `status` handling "pending", "success", and default.', km: 'សរសេរ switch លើ `status` សម្រាប់ "pending", "success", និង default។' },
      solution: 'switch(status) {\n  case "pending": console.log("Loading"); break;\n  case "success": console.log("Done"); break;\n  default: console.log("Unknown");\n}'
    },
    quizQuestions: [
      {
        id: 'q-js-3-3',
        question: { en: 'What happens if you omit the `break` statement inside a switch case?', km: 'តើមានអ្វីកើតឡើងប្រសិនបើអ្នកភ្លេចដាក់ `break` ក្នុង switch case?' },
        options: [
          { id: 'a', text: { en: 'Code falls through to execute subsequent cases', km: 'កូដនឹងបន្តធ្លាក់ដំណើការ case បន្ទាប់ៗទៀត (Fallthrough)' }, isCorrect: true },
          { id: 'b', text: { en: 'Syntax Error is thrown immediately', km: 'កើតមាន Syntax Error ភ្លាមៗ' }, isCorrect: false }
        ],
        explanation: { en: 'Without break, execution falls through into subsequent cases regardless of match.', km: 'បើគ្មាន break កូដនឹងដំណើការរំលងចូល case ខាងក្រោមបន្តទៀត។' }
      }
    ]
  },
  {
    id: 'js-m3-l4',
    slug: 'ternary-operator',
    moduleNumber: 3,
    lessonNumberInModule: 4,
    title: {
      en: '3.4 Ternary Operator (condition ? true : false)',
      km: '៣.៤ Ternary Operator (condition ? true : false)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'The ternary operator is a shorthand for single inline if-else statements: `condition ? valueIfTrue : valueIfFalse`.',
      km: 'Ternary Operator គឺជាទម្រង់សរសេរ `if...else` យ៉ាងខ្លីត្រឹមមួយបន្ទាត់៖ `លក្ខខណ្ឌ ? តម្លៃបើពិត : តម្លៃបើខុស`។'
    },
    tutorial: {
      en: '✨ Quick Comparison:\n// Long:\nlet msg; if(isOnline) msg = "Active"; else msg = "Offline";\n// Shorthand:\nconst msg = isOnline ? "Active" : "Offline";',
      km: '✨ ឧទាហរណ៍៖ const status = isOnline ? "Active" : "Offline";'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const isPremiumUser = true;
    const discount = isPremiumUser ? 20 : 0;

    console.log("Discount Percentage:", discount + "%"); // 20%
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'React conditional JSX rendering heavily uses ternary operators to show loading spinners versus content.',
        km: 'ក្នុង React, Ternary operator ត្រូវបានប្រើប្រាស់គ្រប់កន្លែងសម្រាប់បង្ហាញ UI Spinner ពេល Loading។'
      }
    },
    practiceExercise: {
      question: { en: 'Assign "Allowed" if age >= 18 else "Denied" using a ternary operator.', km: 'កំណត់តម្លៃ "Allowed" បើ age >= 18 បើមិនច្បាស់ "Denied" ដោយប្រើ ternary operator។' },
      solution: 'const access = age >= 18 ? "Allowed" : "Denied";'
    },
    quizQuestions: [
      {
        id: 'q-js-3-4',
        question: { en: 'How many operands does the ternary operator accept?', km: 'តើ Ternary Operator ទទួលតម្លៃចំនួនប៉ុន្មាន?' },
        options: [
          { id: 'a', text: { en: '3 operands (condition, trueExpr, falseExpr)', km: '៣ តម្លៃ (លក្ខខណ្ឌ, តម្លៃបើត្រូវ, តម្លៃបើខុស)' }, isCorrect: true },
          { id: 'b', text: { en: '2 operands', km: '២ តម្លៃ' }, isCorrect: false }
        ],
        explanation: { en: 'It is called ternary because it takes 3 operands.', km: 'វាហៅថា Ternary ព្រោះវាទទួល ៣ ប្រមាណវិធី។' }
      }
    ]
  },

  // MODULE 4
  {
    id: 'js-m4-l1',
    slug: 'for-loops',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: {
      en: '4.1 Standard for Loops',
      km: '៤.១ រង្វិលជុំ Standard for Loops'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Loops repeat code execution. A `for` loop repeats a specific number of times with an initializer, condition, and final expression.',
      km: 'រង្វិលជុំ (Loop) ប្រើសម្រាប់ធ្វើសកម្មភាពដដែលៗ។ `for` loop មានផ្នែកសំខាន់៣៖ initialization (ចាប់ផ្តើម), condition (លក្ខខណ្ឌ), និង increment (ដំឡើងតម្លៃ)។'
    },
    tutorial: {
      en: '✨ Syntax:\nfor (let i = 0; i < 5; i++) {\n  console.log("Iteration:", i);\n}',
      km: '✨ ទម្រង់៖ for (let i = 0; i < លេខកំណត់; i++) { កូដធ្វើឡើងវិញ }'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    console.log("--- គណនាលេខ ១ ដល់ ៥ ---");
    for (let i = 1; i <= 5; i++) {
      console.log("រង្វិលជុំទី " + i);
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Loops iterate through list items to generate HTML markup dynamically for tables or card grids.',
        km: 'Loop ប្រើសម្រាប់បើកមើលទិន្នន័យបញ្ជីទំនិញ ដើម្បីបង្កើត Table ឬ Card Grid បង្ហាញលើ Web។'
      }
    },
    practiceExercise: {
      question: { en: 'Write a for loop logging numbers from 10 down to 1.', km: 'សរសេរ for loop សម្រាប់ Log លេខថយក្រោយពី 10 មកត្រឹម 1។' },
      solution: 'for (let i = 10; i >= 1; i--) {\n  console.log(i);\n}'
    },
    quizQuestions: [
      {
        id: 'q-js-4-1',
        question: { en: 'What causes an infinite loop in a `for` statement?', km: 'តើអ្វីដែលបង្កឲ្យមាន Infinite Loop?' },
        options: [
          { id: 'a', text: { en: 'A condition that never evaluates to false', km: 'លក្ខខណ្ឌដែលគ្មានថ្ងៃក្លាយជា false' }, isCorrect: true },
          { id: 'b', text: { en: 'Using let instead of var', km: 'ការប្រើ let ជំនួស var' }, isCorrect: false }
        ],
        explanation: { en: 'If the exit condition never becomes false, the loop runs infinitely and crashes the browser tab.', km: 'ប្រសិនបើតម្លៃលក្ខខណ្ឌជានិច្ចកាលជា true រង្វិលជុំនឹងរត់គ្មានទីបញ្ចប់។' }
      }
    ]
  },
  {
    id: 'js-m4-l2',
    slug: 'while-and-do-while-loops',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: {
      en: '4.2 while and do...while Loops',
      km: '៤.២ រង្វិលជុំ while និង do...while Loops'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'A `while` loop runs as long as its condition is true. A `do...while` loop executes its body AT LEAST ONCE before checking the condition.',
      km: '`while` loop រត់ដរាបណា លក្ខខណ្ឌនៅជា true។ រីឯ `do...while` ដំណើការកូដក្នុង block យ៉ាងហោចណាស់ ១ដងសិន ទើបមកពិនិត្យលក្ខខណ្ឌជាក្រោយ។'
    },
    tutorial: {
      en: '✨ Difference:\nwhile(cond) { ... } -> Checks first\ndo { ... } while(cond) -> Runs once, then checks',
      km: '✨ ចំណុចខុសគ្នា៖ do...while ដំណើការកូដ ១ដងមុនគេបង្អស់ មិនខ្វល់ថាលក្ខខណ្ឌ true ឬ false ឡើយ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    let count = 1;
    while (count <= 3) {
      console.log("While count:", count);
      count++;
    }

    let x = 10;
    do {
      console.log("Do...while runs once even if x=10 condition false!");
    } while (x < 5);
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Game loops and network retry logic use `while` loops to keep polling until a connection succeeds or times out.',
        km: 'ប្រព័ន្ធ Retry Connection បណ្តាញ ឬ Game Loop ប្រើ while loop សម្រាប់សាកល្បងរហូតដល់ភ្ជាប់បាន។'
      }
    },
    practiceExercise: {
      question: { en: 'Write a while loop printing numbers 1 to 3.', km: 'សរសេរ while loop បោះពុម្ពលេខពី ១ ដល់ ៣។' },
      solution: 'let i = 1;\nwhile(i <= 3) {\n  console.log(i);\n  i++;\n}'
    },
    quizQuestions: [
      {
        id: 'q-js-4-2',
        question: { en: 'How many times will a `do...while` loop execute if its condition is initially false?', km: 'តើ `do...while` ដំណើការប៉ុន្មានដង ប្រសិនបើតាំងពីដំបូងលក្ខខណ្ឌ false ស្រាប់?' },
        options: [
          { id: 'a', text: { en: 'Exactly 1 time', km: 'យ៉ាងប្រាកដ ១ ដង' }, isCorrect: true },
          { id: 'b', text: { en: '0 times', km: '០ ដង' }, isCorrect: false }
        ],
        explanation: { en: 'do...while executes the code block before evaluating the condition.', km: 'do...while ដំណើការកូដ block មុននឹងពិនិត្យលក្ខខណ្ឌ ដូច្នេះវាដំណើការបាន ១ ដងយ៉ាងហោច។' }
      }
    ]
  },
  {
    id: 'js-m4-l3',
    slug: 'break-and-continue',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: {
      en: '4.3 Controlling Loops: break and continue',
      km: '៤.៣ ការគ្រប់គ្រង Loop (break និង continue)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: '`break` terminates the loop immediately. `continue` skips the current iteration step and jumps straight to the next iteration.',
      km: '`break`: ឈប់ដំណើការរង្វិលជុំភ្លាមៗ (Exit loop)\n`continue`: រំលងជុំបច្ចុប្បន្នមួយ ហើយរំលងទៅជុំបន្ទាប់ទៀត (Skip current iteration)'
    },
    tutorial: {
      en: '✨ Usage:\nUse `break` when you found your target search item.\nUse `continue` to skip invalid or null items.',
      km: '✨ ការប្រើយោជន៍៖ ប្រើ `break` ពេលរកឃើញទិន្នន័យដែលត្រូវការរួច ហើយប្រើ `continue` ពេលចង់រំលងទិន្នន័យខូច។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    console.log("--- Skip odd numbers using continue ---");
    for (let i = 1; i <= 6; i++) {
      if (i % 2 !== 0) continue; // Skip odds
      console.log("Even Number:", i);
    }

    console.log("--- Stop at 3 using break ---");
    for (let i = 1; i <= 10; i++) {
      if (i === 3) break; // Stop loop
      console.log("Count:", i);
    }
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'When searching a database array for a specific user ID, calling `break` immediately stops wasted loop iterations.',
        km: 'ពេលឆែករក ID អ្នកប្រើប្រាស់ក្នុងបញ្ជីធំ ប្រើ `break` ជួយកាត់បន្ថយការបន្ត Search ដែលនាំឲ្យខាត CPU Time។'
      }
    },
    practiceExercise: {
      question: { en: 'Use continue to skip printing number 3 in a loop from 1 to 5.', km: 'ប្រើ continue ដើម្បីរំលងការ Log លេខ ៣ ក្នុង loop ពី ១ ដល់ ៥។' },
      solution: 'for(let i=1; i<=5; i++) {\n  if(i === 3) continue;\n  console.log(i);\n}'
    },
    quizQuestions: [
      {
        id: 'q-js-4-3',
        question: { en: 'Which keyword immediately exits the entire enclosing loop?', km: 'តើ Keyword មួយណាដែលបញ្ឈប់រង្វិលជុំទាំងមូលភ្លាមៗ?' },
        options: [
          { id: 'a', text: { en: 'break', km: 'break' }, isCorrect: true },
          { id: 'b', text: { en: 'continue', km: 'continue' }, isCorrect: false }
        ],
        explanation: { en: 'break exits the loop immediately.', km: 'break បញ្ឈប់ និងចាកចេញពីរង្វិលជុំភ្លាមៗ។' }
      }
    ]
  },

  // MODULE 5
  {
    id: 'js-m5-l1',
    slug: 'function-declarations-vs-expressions',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: {
      en: '5.1 Function Declarations vs Expressions',
      km: '៥.១ ការបង្កើត Function (Declarations vs Expressions)'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Functions package reusable logic blocks. Function Declarations are hoisted (callable before definition), whereas Function Expressions are stored in variables.',
      km: 'Function គឺជាកញ្ចប់កូដដែលអាចយកមកប្រើឡើងវិញបាន។\n- Function Declaration: `function greet() {}` (មាន Hoisting - អាចហៅប្រើមុនកន្លែងប្រកាសបាន)\n- Function Expression: `const greet = function() {}` (គ្មាន Hoisting)'
    },
    tutorial: {
      en: '✨ Declaration Example:\nfunction sayHi() { return "Hi!"; }\n\n✨ Expression Example:\nconst sayHi = function() { return "Hi!"; };',
      km: '✨ ឧទាហរណ៍៖ Declaration អាច call មុនកូដបាន ប៉ុន្តែ Expression ត្រូវតែប្រកាសជាមុនសិន។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    // 1. Function Declaration (Hoisted)
    console.log(welcomeUser("Sok"));

    function welcomeUser(name) {
      return "សួស្តី " + name + "! សូមស្វាគមន៍មកកាន់ Frontend Hub";
    }

    // 2. Function Expression
    const addNumbers = function(a, b) {
      return a + b;
    };
    console.log("Sum:", addNumbers(10, 20));
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Functions break complex web applications into clean, testable units like calculateTax() or formatCurrency().',
        km: 'Function ជួយបំបែកកូដស្មុគស្មាញទៅជាផ្នែកតូចៗ ងាយស្រួលសរសេរ Test ដូចជា calculateTax() ឬ formatPrice()។'
      }
    },
    practiceExercise: {
      question: { en: 'Write a function declaration `square(n)` returning n * n.', km: 'សរសេរ function declaration `square(n)` ដែលបង្វិលតម្លៃ n * n។' },
      solution: 'function square(n) {\n  return n * n;\n}'
    },
    quizQuestions: [
      {
        id: 'q-js-5-1',
        question: { en: 'Are Function Declarations hoisted in JavaScript?', km: 'តើ Function Declarations ត្រូវបាន Hoisted ដែរឬទេ?' },
        options: [
          { id: 'a', text: { en: 'Yes, they can be invoked before definition', km: 'បាទ/ចាស អាចហៅប្រើបានមុនកន្លែងកំណត់កូដ' }, isCorrect: true },
          { id: 'b', text: { en: 'No, they trigger a ReferenceError', km: 'ទេ នឹងកើត ReferenceError' }, isCorrect: false }
        ],
        explanation: { en: 'Function declarations are hoisted to the top of their scope during compilation.', km: 'Function declarations ត្រូវបានលើក (Hoisting) ទៅលើគេបង្អស់នៃ Scope។' }
      }
    ]
  },
  {
    id: 'js-m5-l2',
    slug: 'parameters-arguments-return',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: {
      en: '5.2 Parameters, Arguments & Return Values',
      km: '៥.២ ម៉ែត្រការ Parameters, Arguments & Return Values'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Parameters are placeholder variables defined in function signatures. Arguments are actual values passed during invocation. `return` sends data back.',
      km: 'Parameters គឺជាឈ្មោះអថេរតំណាងពេលប្រកាស Function។ Arguments គឺជាតម្លៃពិតប្រាកដដែលបញ្ជូនចូលពេលហៅប្រើ (Call)។ `return` បោះតម្លៃលទ្ធផលចេញមកក្រៅវិញ។'
    },
    tutorial: {
      en: '✨ Note:\nIf a function has no explicit `return` statement, it returns `undefined` by default.',
      km: '✨ កត់សម្គាល់៖ ប្រសិនបើ Function គ្មានពាក្យ `return` ទេ នោះវាបង្វិលតម្លៃ `undefined` ដោយស្វ័យប្រវត្តិ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    // price & discount percentage are parameters
    function calculateDiscount(price, discountPct) {
      const discountAmount = price * (discountPct / 100);
      return price - discountAmount; // Return calculated value
    }

    // $100 and 20 are arguments
    const finalPrice = calculateDiscount(100, 20);
    console.log("Final Price:", "$" + finalPrice); // $80
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Helper functions process input data dynamically (e.g. formatting dates or converting currency) and return clean strings to display.',
        km: 'Helper functions ទទួលកាលបរិច្ឆេទ ឬលេខលុយជា argument រួច return String ស្អាតបាតសម្រាប់បង្ហាញលើ UI។'
      }
    },
    practiceExercise: {
      question: { en: 'Write a function `multiply(a, b)` returning the product of a and b.', km: 'សរសេរ function `multiply(a, b)` ដែល return ផលគុណ a និង b។' },
      solution: 'function multiply(a, b) {\n  return a * b;\n}'
    },
    quizQuestions: [
      {
        id: 'q-js-5-2',
        question: { en: 'What value does a function return if there is no explicit `return` keyword?', km: 'តើ Function បង្វិលតម្លៃអ្វីបើគ្មានពាក្យ `return` ច្បាស់លាស់?' },
        options: [
          { id: 'a', text: { en: 'undefined', km: 'undefined' }, isCorrect: true },
          { id: 'b', text: { en: 'null', km: 'null' }, isCorrect: false }
        ],
        explanation: { en: 'Functions without explicit returns evaluate to undefined upon completion.', km: 'បើគ្មាន return ទេ លទ្ធផលចុងក្រោយនៃ Function គឺ undefined។' }
      }
    ]
  },
  {
    id: 'js-m5-l3',
    slug: 'arrow-functions',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: {
      en: '5.3 Arrow Functions ES6 Shorthand',
      km: '៥.៣ Arrow Functions (ទម្រង់ ES6 Shorthand)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Arrow functions (`() => {}`) provide concise syntax for writing function expressions. Single-expression arrow functions support implicit return.',
      km: 'Arrow Function (`() => {}`) ជាវិធីសរសេរ Function យ៉ាងសង្ខេបក្នុង ES6+។ ប្រសិនបើមានត្រឹមមួយបន្ទាត់ អ្នកអាចលុប `{}` និងលុបពាក្យ `return` បាន (Implicit return)។'
    },
    tutorial: {
      en: '✨ Comparison:\n// Standard:\nconst double = function(x) { return x * 2; };\n\n// Arrow Implicit Return:\nconst double = x => x * 2;',
      km: '✨ ប្រៀបធៀប៖\nconst double = x => x * 2; (ខ្លី និងស្អាត!)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    // Implicit return arrow function
    const double = n => n * 2;
    const greet = name => \`សួស្តី, \${name}!\`;

    console.log("Double 5:", double(5)); // 10
    console.log(greet("Bopha"));
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Arrow functions are used everywhere in modern JS callbacks like `map(x => x * 2)` or event handler callbacks.',
        km: 'Arrow function ត្រូវប្រើប្រាស់ស្ទើរគ្រប់កន្លែងក្នុងប្រព័ន្ធទំនើប ដូចជា Array callbacks ឬ Event handlers។'
      }
    },
    practiceExercise: {
      question: { en: 'Convert `function add(a, b) { return a + b; }` to an arrow function.', km: 'បំប្លែង `function add(a, b) { return a + b; }` ទៅជា Arrow Function។' },
      solution: 'const add = (a, b) => a + b;'
    },
    quizQuestions: [
      {
        id: 'q-js-5-3',
        question: { en: 'Can single-expression arrow functions omit the `return` keyword?', km: 'តើ Arrow Function ដែលមានកូដត្រឹមមួយបន្ទាត់អាចលុបពាក្យ `return` បានដែរឬទេ?' },
        options: [
          { id: 'a', text: { en: 'Yes, it provides implicit return', km: 'បាទ/ចាស ព្រោះវាមាន Implicit Return' }, isCorrect: true },
          { id: 'b', text: { en: 'No, it will throw a syntax error', km: 'ទេ នឹងកើត Syntax Error' }, isCorrect: false }
        ],
        explanation: { en: 'Arrow functions without curly braces automatically return the expression result.', km: 'Arrow function គ្មាន {} នឹង return លទ្ធផលនៃប្រមាណវិធីនោះដោយស្វ័យប្រវត្តិ។' }
      }
    ]
  },
  {
    id: 'js-m5-l4',
    slug: 'scope-and-closures-intro',
    moduleNumber: 5,
    lessonNumberInModule: 4,
    title: {
      en: '5.4 Variable Scope & Intro to Closures',
      km: '៥.៤ Variable Scope & ការណែនាំអំពី Closures'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Scope determines variable accessibility. Global scope is accessible anywhere; Block/Function scope is local. A Closure is a function retaining access to its parent lexical scope.',
      km: 'Scope ជាដែនកំណត់នៃអថេរ៖\n- Global Scope: អាចប្រើបានគ្រប់កន្លែង\n- Function/Block Scope: អាចប្រើបានតែក្នុង `{}` ឬ function ប៉ុណ្ណោះ\n- Closure: គឺជា Function ដែលអាចចងចាំ និងប្រើប្រាស់អថេរនៃ Parent Scope របស់វា ទោះជា Parent នោះបញ្ចប់ការដំណើការហើយក៏ដោយ។'
    },
    tutorial: {
      en: '✨ Closure Concept:\nAn inner function retains access to outer variables even after the outer function finishes execution.',
      km: '✨ គោលការណ៍ Closure៖ Function ខាងក្នុងចងចាំអថេររបស់ Function ខាងក្រៅ។ ប្រើបង្កើត Private Variables!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    function createCounter() {
      let count = 0; // Private variable via Closure
      return function() {
        count++;
        return count;
      };
    }

    const counter = createCounter();
    console.log("Count 1:", counter()); // 1
    console.log("Count 2:", counter()); // 2
    console.log("Count 3:", counter()); // 3
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'React custom hooks (e.g. `useState`) rely directly on closures to preserve state values across component renders.',
        km: 'React Custom Hooks និង State Management ពឹងផ្អែកលើ Closure ដើម្បីរក្សាទុក State រវាងការ Re-render។'
      }
    },
    practiceExercise: {
      question: { en: 'What is a Closure in JavaScript?', km: 'តើ Closure ក្នុង JavaScript ជាអ្វី?' },
      solution: 'A closure is an inner function that retains access to variables from its outer lexical scope.'
    },
    quizQuestions: [
      {
        id: 'q-js-5-4',
        question: { en: 'What defines a closure in JavaScript?', km: 'តើអ្វីជាលក្ខណៈកំណត់នៃ Closure?' },
        options: [
          { id: 'a', text: { en: 'A function remembering variables from its outer scope', km: 'Function ដែលចងចាំអថេរនៃ Scope ខាងក្រៅរបស់វា' }, isCorrect: true },
          { id: 'b', text: { en: 'An anonymous function without parameters', km: 'Function គ្មានឈ្មោះ និងគ្មាន Parameter' }, isCorrect: false }
        ],
        explanation: { en: 'Closures give inner functions access to outer function variables.', km: 'Closures អនុញ្ញាតឲ្យ Function ខាងក្នុងប្រើប្រាស់អថេរនៃ Function ខាងក្រៅ។' }
      }
    ]
  }
];
