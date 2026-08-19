import { FrontendCourse } from '../types/frontendClass';
import { JS_LESSONS_PART1 } from './jsLessonsPart1';
import { JS_LESSONS_PART2 } from './jsLessonsPart2';
import { JS_LESSONS_PART3 } from './jsLessonsPart3';

const ALL_JS_LESSONS = [
  ...JS_LESSONS_PART1,
  ...JS_LESSONS_PART2,
  ...JS_LESSONS_PART3,
];

export const JS_COURSE_DATA: FrontendCourse = {
  id: 'javascript',
  title: {
    en: 'JavaScript ES6+ Course',
    km: 'វគ្គសិក្សា JavaScript ES6+'
  },
  iconName: 'javascript',
  categoryId: 'fundamentals',
  difficulty: 'Beginner',
  shortDescription: {
    en: 'Master variables, data types, control flow, functions, DOM, events, async programming, Promises, and Fetch API.',
    km: 'JavaScript គឺជាភាសាសរសេរកម្មវិធីដែលធ្វើឲ្យគេហទំព័រ Web មានលក្ខណៈ Interactive។ សិក្សាពី Variables, Functions, DOM, Events និង Async Programming។'
  },
  summary: {
    en: 'JavaScript adds dynamic behavioral interactivity, state management, API integration, and DOM manipulation to modern web applications.',
    km: 'JavaScript ផ្តល់អន្តរកម្ម ការទាញយកទិន្នន័យពី API តាមបណ្តាញ ការគ្រប់គ្រង State និងការបញ្ជា DOM រស់រវើកលើគេហទំព័រ។'
  },
  estimatedHours: 12,
  lessonCount: ALL_JS_LESSONS.length,

  cheatSheet: [
    {
      concept: 'Variable Declarations (const vs let)',
      code: 'const API_URL = "https://api.example.com"; // Immutable\nlet userScore = 100; // Reassignable\nuserScore += 50;',
      explanation: {
        en: 'Use const by default for immutable values. Use let only when reassignment is explicitly needed. Avoid legacy var.',
        km: 'ប្រើ const ជាដំបូងជានិច្ចសម្រាប់តម្លៃថេរ។ ប្រើ let តែពេលត្រូវប្តូរតម្លៃឡើងវិញ។ ជៀសវាង var។'
      }
    },
    {
      concept: 'Arrow Function Syntax',
      code: 'const add = (a, b) => a + b;\nconst greet = name => `សួស្តី ${name}!`;',
      explanation: {
        en: 'Concise ES6 function syntax with implicit return for single expressions.',
        km: 'ទម្រង់សរសេរ Function សង្ខេបក្នុង ES6+ ដែលមាន implicit return ពេលមានត្រឹមមួយបន្ទាត់។'
      }
    },
    {
      concept: 'Array Methods (map, filter, reduce)',
      code: 'const nums = [1, 2, 3, 4];\nconst doubled = nums.map(n => n * 2); // [2, 4, 6, 8]\nconst evens = nums.filter(n => n % 2 === 0); // [2, 4]\nconst sum = nums.reduce((acc, curr) => acc + curr, 0); // 10',
      explanation: {
        en: 'Functional array transformations without mutating the original array.',
        km: 'ការបំប្លែងទិន្នន័យ Array ដោយមិនប៉ះពាល់តម្លៃដើម (Non-mutating functional methods)។'
      }
    },
    {
      concept: 'DOM Selection & Manipulation',
      code: 'const btn = document.querySelector("#submitBtn");\nbtn.textContent = "Processing...";\nbtn.classList.add("active");\nbtn.style.backgroundColor = "#38bdf8";',
      explanation: {
        en: 'Query DOM elements using CSS selectors and update text, classes, or styles.',
        km: 'ជ្រើសរើស DOM element តាម CSS selector រួចផ្លាស់ប្តូរអត្ថបទ Class ឬ Style។'
      }
    },
    {
      concept: 'Event Listeners & Form Validation',
      code: 'const form = document.querySelector("#myForm");\nform.addEventListener("submit", (e) => {\n  e.preventDefault(); // Stop page reload\n  console.log("Form submitted safely!");\n});',
      explanation: {
        en: 'Attach event listeners and call e.preventDefault() to handle forms via JavaScript.',
        km: 'ភ្ជាប់ Event listener និងប្រើ e.preventDefault() ដើម្បីឃាត់កុំឲ្យ Reload ទំព័រពេល Submit Form។'
      }
    },
    {
      concept: 'Async / Await Network Requests',
      code: 'async function fetchProducts() {\n  try {\n    const res = await fetch("https://api.example.com/products");\n    if (!res.ok) throw new Error("API Error");\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error("Fetch failed:", err.message);\n  }\n}',
      explanation: {
        en: 'Modern asynchronous fetch pattern with try/catch error handling.',
        km: 'ទម្រង់ទាញយកទិន្នន័យពី API តាមទម្រង់ Async/Await ទំនើប និងមាន try/catch Error Handling។'
      }
    },
    {
      concept: 'Browser LocalStorage Persistence',
      code: '// Save object to localStorage\nlocalStorage.setItem("user", JSON.stringify({ name: "Sok", theme: "dark" }));\n\n// Read object from localStorage\nconst savedUser = JSON.parse(localStorage.getItem("user"));',
      explanation: {
        en: 'Persist key-value string data in browser storage across page reloads.',
        km: 'រក្សាទុកទិន្នន័យលើ Browser ទោះបីជាបិទ ឬ Reload Page ក៏មិនបាត់បង់។'
      }
    },
    {
      concept: 'Common Pitfalls & Mistakes Checklist',
      code: '1. Using = (assignment) instead of === (strict comparison)\n2. Forgetting "return" in standard functions without arrow implicit return\n3. Mutating state arrays directly instead of using spread [...arr]\n4. Accessing uninitialized DOM nodes before DOMContentLoaded\n5. Not handling fetch errors with try/catch or response.ok check',
      explanation: {
        en: 'Frequent mistakes to avoid when writing professional JavaScript code.',
        km: 'បញ្ហាប្រឈមញឹកញាប់ដែលត្រូវប្រយ័ត្នពេលសរសេរកូដ JavaScript អាជីព។'
      }
    }
  ],

  quiz: [
    {
      id: 'q-js-main-1',
      question: {
        en: 'Which keyword declares a variable that CANNOT be reassigned?',
        km: 'តើ Keyword មួយណាដែលប្រកាស Variable ដែលមិនអាចដូរតម្លៃ (Reassign) ឡើងវិញបាន?'
      },
      options: [
        { id: '1', text: { en: 'const', km: 'const' }, isCorrect: true },
        { id: '2', text: { en: 'let', km: 'let' }, isCorrect: false },
        { id: '3', text: { en: 'var', km: 'var' }, isCorrect: false }
      ],
      explanation: {
        en: '`const` creates a read-only constant reference to a value that cannot be reassigned.',
        km: '`const` បង្កើត Variable ថេរដែលមិនអាចប្តូរតម្លៃ ឬ Reassign បានឡើយ។'
      }
    },
    {
      id: 'q-js-main-2',
      question: {
        en: 'Predict the console output of: `console.log(typeof null);`',
        km: 'តើលទ្ធផលនៃ `console.log(typeof null);` នឹងបង្ហាញអ្វី?'
      },
      codeSnippet: 'console.log(typeof null);',
      options: [
        { id: '1', text: { en: '"object"', km: '"object"' }, isCorrect: true },
        { id: '2', text: { en: '"null"', km: '"null"' }, isCorrect: false },
        { id: '3', text: { en: '"undefined"', km: '"undefined"' }, isCorrect: false }
      ],
      explanation: {
        en: 'Due to a historical bug in JavaScript design, `typeof null` evaluates to "object".',
        km: 'ដោយសារកំហុសប្រវត្តិសាស្ត្រក្នុងការឌីហ្សាញ JS ដំបូង `typeof null` ឲ្យតម្លៃមក "object"។'
      }
    },
    {
      id: 'q-js-main-3',
      question: {
        en: 'What is the console output of: `console.log("5" + 3 - 2);`?',
        km: 'តើលទ្ធផលនៃ `console.log("5" + 3 - 2);` គឺស្មើនឹងប៉ុន្មាន?'
      },
      codeSnippet: 'console.log("5" + 3 - 2);',
      options: [
        { id: '1', text: { en: '51', km: '51' }, isCorrect: true },
        { id: '2', text: { en: '6', km: '6' }, isCorrect: false },
        { id: '3', text: { en: 'NaN', km: 'NaN' }, isCorrect: false }
      ],
      explanation: {
        en: '"5" + 3 coerces to string "53". Then "53" - 2 coerces back to numeric subtraction resulting in 51!',
        km: '"5" + 3 បូកអក្សរចេញ "53"។ បន្ទាប់មក "53" - 2 បំប្លែងមកដកលេខវិញចេញ 51!'
      }
    },
    {
      id: 'q-js-main-4',
      question: {
        en: 'Which array method transforms every element and returns a new array of the same length?',
        km: 'តើ Method មួយណាដែលបំប្លែងគ្រប់ធាតុក្នុង Array ហើយបង្វិល Array ថ្មីដែលមានប្រវែងស្មើគ្នា?'
      },
      options: [
        { id: '1', text: { en: 'map()', km: 'map()' }, isCorrect: true },
        { id: '2', text: { en: 'filter()', km: 'filter()' }, isCorrect: false },
        { id: '3', text: { en: 'forEach()', km: 'forEach()' }, isCorrect: false }
      ],
      explanation: {
        en: '`map()` executes a callback on each item and returns a new transformed array.',
        km: '`map()` ដំណើការ Callback លើគ្រប់ធាតុ និងបង្វិល Array ថ្មីដែលបានបំប្លែង។'
      }
    },
    {
      id: 'q-js-main-5',
      question: {
        en: 'What does `document.querySelector(".card")` return?',
        km: 'តើ `document.querySelector(".card")` បង្វិលតម្លៃអ្វីមកវិញ?'
      },
      options: [
        { id: '1', text: { en: 'The FIRST matching element with class "card"', km: 'Element ដំបូងគេបង្អស់ដែលត្រូវ class "card"' }, isCorrect: true },
        { id: '2', text: { en: 'An array of all elements with class "card"', km: 'Array នៃធាតុទាំងអស់' }, isCorrect: false }
      ],
      explanation: {
        en: '`querySelector()` returns only the first matching element. Use `querySelectorAll()` for all matches.',
        km: '`querySelector()` បង្វិលតែ Element ដំបូងគេបង្អស់ប៉ុណ្ណោះ។ ប្រើ `querySelectorAll()` បើចង់បានទាំងអស់។'
      }
    },
    {
      id: 'q-js-main-6',
      question: {
        en: 'Why do we call `e.preventDefault()` inside a form submit event handler?',
        km: 'តើហេតុអ្វីបានជាយើងត្រូវហៅ `e.preventDefault()` ពេល Submit Form តាម JS?'
      },
      options: [
        { id: '1', text: { en: 'To stop the browser from reloading the page automatically', km: 'ដើម្បីឃាត់មិនឲ្យ Browser ធ្វើការ Reload Page ដោយស្វ័យប្រវត្តិ' }, isCorrect: true },
        { id: '2', text: { en: 'To clear input values automatically', km: 'ដើម្បី លុបតម្លៃអត្ថបទក្នុង Input' }, isCorrect: false }
      ],
      explanation: {
        en: '`preventDefault()` suppresses the native form submission page reload behavior.',
        km: '`preventDefault()` ឃាត់ការ Reload Page តាមធម្មជាតិនៃ Browser Form submission។'
      }
    },
    {
      id: 'q-js-main-7',
      question: {
        en: 'What is the keyword `await` used for in JavaScript?',
        km: 'តើ Keyword `await` ប្រើសម្រាប់ធ្វើអ្វីក្នុង JavaScript?'
      },
      options: [
        { id: '1', text: { en: 'Pauses async execution until a Promise resolves or rejects', km: 'រង់ចាំដំណើការ Async រហូតដល់ Promise Resolve ឬ Reject' }, isCorrect: true },
        { id: '2', text: { en: 'Loops over object properties', km: 'លូកមើល Property ក្នុង Object' }, isCorrect: false }
      ],
      explanation: {
        en: '`await` pauses execution inside an async function until the promise settles.',
        km: '`await` រង់ចាំការដំណើការរបស់ Promise ឲ្យរួចរាល់ មុននឹងបន្តទៅកូដបន្ទាប់។'
      }
    },
    {
      id: 'q-js-main-8',
      question: {
        en: 'How do you convert a JS object into a string to store in `localStorage`?',
        km: 'តើធ្វើដូចម្តេចដើម្បីបំប្លែង JS Object ទៅជា String រក្សាទុកក្នុង `localStorage`?'
      },
      codeSnippet: 'const user = { id: 1, name: "Dara" };\n// How to save?',
      options: [
        { id: '1', text: { en: 'localStorage.setItem("user", JSON.stringify(user))', km: 'localStorage.setItem("user", JSON.stringify(user))' }, isCorrect: true },
        { id: '2', text: { en: 'localStorage.setItem("user", user.toString())', km: 'localStorage.setItem("user", user.toString())' }, isCorrect: false }
      ],
      explanation: {
        en: '`JSON.stringify()` converts objects into JSON text strings compatible with localStorage.',
        km: '`JSON.stringify()` បំប្លែង Object ទៅជា JSON text string សម្រាប់ផ្ទុកក្នុង localStorage។'
      }
    }
  ],

  capstoneProject: {
    title: {
      en: 'Interactive Persistent To-Do List Application',
      km: 'គម្រោង Capstone៖ កម្មវិធី To-Do List មានអន្តរកម្ម រក្សាទុកក្នុង LocalStorage'
    },
    description: {
      en: 'Build a full-featured JavaScript To-Do app with task creation, complete toggles, dynamic task deletion, filter options, and persistent localStorage data sync.',
      km: 'បង្កើត កម្មវិធី To-Do List ដែលមានសមត្ថភាព បន្ថែម លុប កែប្រែ រៀបចំ Filter និងរក្សាទុកទិន្នន័យរហូតក្នុង LocalStorage។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>JS Task Manager</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 20px; }
    .box { max-width: 440px; margin: 0 auto; background: #1e293b; padding: 24px; border-radius: 16px; border: 1px solid #334155; }
    h2 { color: #38bdf8; margin-bottom: 16px; }
    form { display: flex; gap: 8px; margin-bottom: 20px; }
    input { flex: 1; padding: 10px; background: #0f172a; border: 1px solid #334155; border-radius: 8px; color: white; }
    button { padding: 10px 16px; background: #38bdf8; color: #0f172a; border: none; font-weight: bold; border-radius: 8px; cursor: pointer; }
    ul { list-style: none; padding: 0; }
    li { padding: 10px; background: #0f172a; border: 1px solid #334155; margin-top: 8px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; }
    .done { text-decoration: line-through; opacity: 0.6; }
    .del { background: #ef4444; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; }
  </style>
</head>
<body>
  <div className="box">
    <h2>📝 JS Task Manager</h2>
    <form id="taskForm">
      <input id="taskInput" placeholder="បន្ថែមភារកិច្ចថ្មី..." required>
      <button type="submit">បន្ថែម</button>
    </form>
    <ul id="taskList"></ul>
  </div>

  <script>
    let tasks = JSON.parse(localStorage.getItem("tasks_data")) || [
      { id: 1, text: "រៀន JavaScript ES6+", completed: false }
    ];

    const form = document.getElementById("taskForm");
    const input = document.getElementById("taskInput");
    const list = document.getElementById("taskList");

    function render() {
      list.innerHTML = tasks.map(t => \`
        <li data-id="\${t.id}">
          <span className="\${t.completed ? 'done' : ''}" style="cursor:pointer;">\${t.text}</span>
          <button className="del">លុប</button>
        </li>
      \`).join("");
      localStorage.setItem("tasks_data", JSON.stringify(tasks));
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!input.value.trim()) return;
      tasks.push({ id: Date.now(), text: input.value.trim(), completed: false });
      input.value = "";
      render();
    });

    list.addEventListener("click", (e) => {
      const li = e.target.closest("li");
      if (!li) return;
      const id = Number(li.dataset.id);
      if (e.target.classList.contains("del")) {
        tasks = tasks.filter(t => t.id !== id);
      } else {
        tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
      }
      render();
    });

    render();
  </script>
</body>
</html>`
    }
  },

  lessons: ALL_JS_LESSONS
};
