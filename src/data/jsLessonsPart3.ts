import { FrontendLesson } from '../types/frontendClass';

export const JS_LESSONS_PART3: FrontendLesson[] = [
  // MODULE 10 — ES6+ MODERN FEATURES
  {
    id: 'js-m10-l1',
    slug: 'template-literals',
    moduleNumber: 10,
    lessonNumberInModule: 1,
    title: {
      en: '10.1 ES6 Template Literals (`${expr}`)',
      km: '១០.១ Template Literals (`${expr}`)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Template literals use backticks (`` ` ``) instead of quotes. They support multi-line strings and dynamic expression interpolation using `${expression}` syntax.',
      km: 'Template Literals ប្រើប្រាស់ Backticks (`` ` ``)។ វាអនុញ្ញាតឲ្យយើងភ្ជាប់អថេរក្នុង String ដោយប្រើទម្រង់ `${expression}` និងសរសេរអត្ថបទបានច្រើនជួរ (Multi-line strings)។'
    },
    tutorial: {
      en: '✨ Comparison:\n// Old String Concat:\nconst msg = "Hello " + name + ", score: " + score;\n// Modern Template Literal:\nconst msg = `Hello ${name}, score: ${score}`;',
      km: '✨ ប្រៀបធៀប៖ ប្រើ `${name}` ជំនួសអោយការតភ្ជាប់អក្សរដោយសញ្ញា + ច្រើនដង។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const user = "Sok";
    const role = "Developer";
    const year = 2026;

    // Multi-line interpolated string
    const cardHtml = \`
      <div className="card">
        <h3>\${user}</h3>
        <p>Role: \${role}</p>
        <p>Year: \${year}</p>
      </div>
    \`;

    console.log(cardHtml);
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Frontend developers use template literals extensively to generate dynamic HTML markup snippets.',
        km: 'Developer ប្រើ Template Literals ជានិច្ចដើម្បីបង្កើត HTML Snippet ឌីណាមិកសម្រាប់បន្ថែមលើ DOM។'
      }
    },
    practiceExercise: {
      question: { en: 'Create string "Item cost: $50" using template literal with variable `price = 50`.', km: 'បង្កើត String "Item cost: $50" ដោយប្រើ Template literal ជាមួយ `price = 50`។' },
      solution: 'const str = `Item cost: $${price}`;'
    },
    quizQuestions: [
      {
        id: 'q-js-10-1',
        question: { en: 'Which character encloses a Template Literal in JavaScript?', km: 'តើ Symbol មួយណាដែលប្រៀបដូចប្រអប់ព័ទ្ធជុំវិញ Template Literal?' },
        options: [
          { id: 'a', text: { en: 'Backticks (`` ` ``)', km: 'Backticks (`` ` ``)' }, isCorrect: true },
          { id: 'b', text: { en: 'Single Quotes (\' \')', km: 'Single Quotes (\' \')' }, isCorrect: false }
        ],
        explanation: { en: 'Template literals are enclosed by backticks.', km: 'Template literals ប្រើប្រាស់ Backticks (`` ` ``)។' }
      }
    ]
  },
  {
    id: 'js-m10-l2',
    slug: 'destructuring-arrays-objects',
    moduleNumber: 10,
    lessonNumberInModule: 2,
    title: {
      en: '10.2 Destructuring Assignment (Objects & Arrays)',
      km: '១០.២ Destructuring Assignment (Objects & Arrays)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Destructuring unpacks values from arrays or properties from objects into distinct variables in a clean single statement.',
      km: 'Destructuring គឺជាបច្ចេកទេសទាញយកតម្លៃចេញពី Object ឬ Array មកដាក់ក្នុង Variable ដាច់ដោយឡែកយ៉ាងលឿនត្រឹមមួយបន្ទាត់។'
    },
    tutorial: {
      en: '✨ Object Destructuring:\nconst { name, age } = user;\n\n✨ Array Destructuring:\nconst [first, second] = items;',
      km: '✨ ទម្រង់៖ Object ប្រើ `{ key }`, Array ប្រើ `[ index0, index1 ]`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    // 1. Object Destructuring
    const person = { name: "Dara", age: 22, city: "Phnom Penh" };
    const { name, city } = person;
    console.log(name, "lives in", city);

    // 2. Array Destructuring
    const colors = ["Red", "Green", "Blue"];
    const [primaryColor, secondaryColor] = colors;
    console.log("Primary:", primaryColor); // Red
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'React props (`function Profile({ name, avatar })`) and hooks (`const [state, setState] = useState()`) use destructuring universally.',
        km: 'React Props និង `useState` Hook ប្រើ Destructuring គ្រប់កន្លែងក្នុង React Codebase។'
      }
    },
    practiceExercise: {
      question: { en: 'Destructure property `id` and `price` from object `product`.', km: 'ទាញយក property `id` និង `price` ពី object `product` ដោយប្រើ Destructuring។' },
      solution: 'const { id, price } = product;'
    },
    quizQuestions: [
      {
        id: 'q-js-10-2',
        question: { en: 'Which syntax unpacks properties from an object into variables?', km: 'តើ Syntax មួយណាដែលទាញយក Property ពី Object មកដាក់ក្នុង Variable?' },
        options: [
          { id: 'a', text: { en: 'const { prop1, prop2 } = object;', km: 'const { prop1, prop2 } = object;' }, isCorrect: true },
          { id: 'b', text: { en: 'const [ prop1, prop2 ] = object;', km: 'const [ prop1, prop2 ] = object;' }, isCorrect: false }
        ],
        explanation: { en: 'Curly braces unpack properties from objects.', km: 'ប្រើ {} សម្រាប់ Destructure Object properties។' }
      }
    ]
  },
  {
    id: 'js-m10-l3',
    slug: 'spread-and-rest-operators',
    moduleNumber: 10,
    lessonNumberInModule: 3,
    title: {
      en: '10.3 Spread & Rest Operators (`...`)',
      km: '១០.៣ Spread & Rest Operators (`...`)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The three dots `...` serve two roles:\n- Spread Operator: Expands array/object elements into a new shallow clone or merge\n- Rest Operator: Gathers remaining function arguments into an array.',
      km: 'សញ្ញាចុចបី `...` មានតួនាទី ២ យ៉ាង៖\n- Spread Operator: ពន្លាតធាតុ Array/Object ចូលទៅក្នុង Object/Array ថ្មី (Clone/Merge)\n- Rest Parameter: ប្រមូលផ្តុំ Argument ដែលសល់ចូលជា Array ក្នុង Function'
    },
    tutorial: {
      en: '✨ Spread Example:\nconst newArr = [...arr1, ...arr2];\nconst newObj = { ...user, role: "admin" };',
      km: '✨ ការប្រើ Spread៖ បង្កើតចម្លង Clone ឬ Merge Object/Array ពីរចូលគ្នា។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    // 1. Spread Operator (Array clone & merge)
    const frontend = ["HTML", "CSS"];
    const backend = ["Node", "SQL"];
    const fullStack = [...frontend, "JS", ...backend];
    console.log("Full Stack:", fullStack);

    // 2. Spread Object (Immutability pattern)
    const baseUser = { name: "Sok", active: true };
    const updatedUser = { ...baseUser, role: "Editor" };
    console.log("Updated User:", updatedUser);
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Redux and React immutable state updates use the spread operator (`{ ...state, count: state.count + 1 }`).',
        km: 'ការ Update State ក្នុង React/Redux ប្រើប្រាស់ Spread Operator ដើម្បីកុំឲ្យប៉ះពាល់តម្លៃដើម (Immutable State)។'
      }
    },
    practiceExercise: {
      question: { en: 'Clone array `nums` using spread operator into `numsCopy`.', km: 'ចម្លងបង្កើត array ថ្មីពី `nums` ដោយប្រើ spread operator ដាក់ក្នុង `numsCopy`។' },
      solution: 'const numsCopy = [...nums];'
    },
    quizQuestions: [
      {
        id: 'q-js-10-3',
        question: { en: 'What does the spread operator `...` do when copying an object?', km: 'តើ Spread operator ធ្វើអ្វីខ្លះពេល Copy Object?' },
        options: [
          { id: 'a', text: { en: 'Performs a shallow copy of own enumerable properties', km: 'បង្កើត Shallow Copy នៃ Properties របស់ Object នោះ' }, isCorrect: true },
          { id: 'b', text: { en: 'Performs a deep recursive clone of nested memory', km: 'បង្កើត Deep Recursive Clone គ្រប់ជាន់' }, isCorrect: false }
        ],
        explanation: { en: 'Spread performs a shallow copy of object top-level properties.', km: 'Spread បង្កើត Shallow Copy លើ Property ថ្នាក់លើ។' }
      }
    ]
  },
  {
    id: 'js-m10-l4',
    slug: 'default-parameters',
    moduleNumber: 10,
    lessonNumberInModule: 4,
    title: {
      en: '10.4 Default Function Parameters',
      km: '១០.៤ Default Function Parameters'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Default parameters allow formal parameters to be initialized with default values if no value or `undefined` is passed.',
      km: 'Default Parameters អនុញ្ញាតឲ្យកំណត់តម្លៃបម្រុងទុកជាមុន សម្រាប់ Parameter ករណីដែលគ្មានការបញ្ជូន Argument ចូល ឬ បញ្ជូន `undefined`។'
    },
    tutorial: {
      en: '✨ Default Parameter Syntax:\nfunction greet(name = "Guest") {\n  return `Hello ${name}`;\n}',
      km: '✨ ទម្រង់៖ function greet(name = "Guest") { ... }'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    function createUser(name = "Anonymous", role = "Viewer") {
      return { name, role, createdAt: new Date().toLocaleDateString() };
    }

    console.log("With arguments:", createUser("Sok", "Admin"));
    console.log("Without arguments (Defaults):", createUser());
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'API wrapper functions use default parameters for pagination fallback limits (`limit = 10, page = 1`).',
        km: 'API Helper Functions ប្រើ Default Parameters សម្រាប់កំណត់ទំហំព័ត៌មានទាញយក (`limit = 10, page = 1`)។'
      }
    },
    practiceExercise: {
      question: { en: 'Write function `multiply(a, b = 1)` returning a * b.', km: 'សរសេរ function `multiply(a, b = 1)` ដែលបង្វិលតម្លៃ a * b។' },
      solution: 'function multiply(a, b = 1) {\n  return a * b;\n}'
    },
    quizQuestions: [
      {
        id: 'q-js-10-4',
        question: { en: 'When does a default parameter trigger its default value assignment?', km: 'តើពេលណាដែល Default Parameter យកតម្លៃ Default មកប្រើ?' },
        options: [
          { id: 'a', text: { en: 'When passed argument is missing or explicitly undefined', km: 'ពេល Argument មិនបានបញ្ជូនមក ឬបញ្ជូនតម្លៃ undefined' }, isCorrect: true },
          { id: 'b', text: { en: 'When passed argument is null or 0', km: 'ពេល Argument បញ្ជូនតម្លៃ null ឬ 0' }, isCorrect: false }
        ],
        explanation: { en: 'Default parameters trigger ONLY for missing values or undefined.', km: 'Default Parameter ដំណើការតែពេលតម្លៃអវត្តមាន ឬ undefined ប៉ុណ្ណោះ។' }
      }
    ]
  },

  // MODULE 11 — ASYNCHRONOUS JAVASCRIPT
  {
    id: 'js-m11-l1',
    slug: 'async-blocking-vs-non-blocking',
    moduleNumber: 11,
    lessonNumberInModule: 1,
    title: {
      en: '11.1 Async Concepts: Blocking vs Non-Blocking',
      km: '១១.១ គោលការណ៍ Async (Blocking vs Non-Blocking)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'JavaScript is single-threaded. Synchronous code blocks execution; Asynchronous code delegates long operations (network requests, timers) to the Event Loop so the UI remains smooth.',
      km: 'JavaScript ដំណើការលើ Single Thread (ជួរតែមួយ)។ \n- Synchronous: ធ្វើការងារតាមជួរ មួយៗរហូតចប់ ទើបទៅមួយទៀត (អាចស្ទះ UI)\n- Asynchronous: ប្រគល់ការងារយូរៗ (ដូចជា Network Request, Timers) ទៅឲ្យ Browser Event Loop ហើយបន្តដំណើការកូដផ្សេងទៀតដោយមិនស្ទះ UI (Non-blocking)។'
    },
    tutorial: {
      en: '✨ Event Loop Visualization:\nCode runs -> Async task sent to Web API -> Event Loop puts callback in Queue -> Executed when call stack is clear.',
      km: '✨ ដំណើរការ៖ កូដដំណើការ -> ប្រគល់ Async ទៅ Web API -> Event Loop រង់ចាំជួរ -> ដំណើការពេល Stack ទំនេរ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    console.log("1. Start script (Synchronous)");

    // Asynchronous Timer
    setTimeout(() => {
      console.log("2. Timer finished after 1s (Asynchronous)");
    }, 1000);

    console.log("3. End script (Synchronous)");
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Without asynchronous non-blocking logic, the entire browser screen would freeze solid while waiting for a server API response.',
        km: 'បើគ្មាន Asynchronous ទេ អេក្រង់ Browser នឹងកក ឬ Freeze ពេលកំពុងរង់ចាំទាញយកទិន្នន័យពី Server។'
      }
    },
    practiceExercise: {
      question: { en: 'Order of logs for setTimeout(fn, 0) versus standard log?', km: 'តើលំដាប់ Log មួយណាដំណើការមុន រវាង setTimeout(fn, 0) និង console.log ធម្មតា?' },
      solution: 'Standard console.log runs first, followed by setTimeout callback from the Event Loop queue.'
    },
    quizQuestions: [
      {
        id: 'q-js-11-1',
        question: { en: 'Is JavaScript a single-threaded or multi-threaded language by default in the browser?', km: 'តើ JavaScript ជាភាសា Single-threaded ឬ Multi-threaded ជាដំបូង?' },
        options: [
          { id: 'a', text: { en: 'Single-threaded with an Asynchronous Event Loop', km: 'Single-threaded ដោយប្រើ Asynchronous Event Loop' }, isCorrect: true },
          { id: 'b', text: { en: 'Multi-threaded with parallel call stacks', km: 'Multi-threaded ដែលដំណើការ Parallel ស្របគ្នា' }, isCorrect: false }
        ],
        explanation: { en: 'JS runs on a single main thread backed by the asynchronous browser event loop.', km: 'JavaScript ដំណើការលើ Main Thread តែមួយជាមួយ Asynchronous Event Loop។' }
      }
    ]
  },
  {
    id: 'js-m11-l2',
    slug: 'callbacks-and-callback-hell',
    moduleNumber: 11,
    lessonNumberInModule: 2,
    title: {
      en: '11.2 Callbacks & The Problem of Callback Hell',
      km: '១១.២ Callbacks និងបញ្ហា Callback Hell'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A callback is a function passed as an argument to another function to run after task completion. Nesting many callbacks creates unmaintainable "Callback Hell".',
      km: 'Callback គឺជា Function ដែលត្រូវបានបញ្ជូនជា Argument ទៅ Function មួយទៀតដើម្បីឲ្យវាហៅប្រើពេលធ្វើការងាររួច។ ការដាក់ Callback តជាន់ៗគ្នាច្រើនពេកបង្កើតជាបញ្ហា "Callback Hell" ដែលពិបាកអាន និងពិបាក Debug។'
    },
    tutorial: {
      en: '✨ Callback Hell Triangle:\ngetData(a => {\n  getMoreData(b => {\n    getEvenMore(c => { ... });\n  });\n});',
      km: '✨ បញ្ហា Callback Hell៖ កូដមានទម្រង់ដូចត្រីកោណទោរទៅស្តាំ ពិបាកអានបំផុត។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    function fetchUserData(userId, callback) {
      setTimeout(() => {
        console.log("Fetched user data for ID:", userId);
        callback({ id: userId, name: "Dara" });
      }, 1000);
    }

    fetchUserData(101, (user) => {
      console.log("User received:", user.name);
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Understanding callbacks provides the historical foundation for why ES6 introduced Promises and Async/Await.',
        km: 'ការយល់ពី Callback ជួយឲ្យយើងយល់ច្បាស់ពីមូលហេតុដែល ES6 ត្រូវបង្កើត Promises និង Async/Await។'
      }
    },
    practiceExercise: {
      question: { en: 'What is Callback Hell in JavaScript?', km: 'តើអ្វីទៅជា Callback Hell?' },
      solution: 'Deeply nested callback functions making code hard to read, maintain, and handle errors.'
    },
    quizQuestions: [
      {
        id: 'q-js-11-2',
        question: { en: 'What feature was introduced in ES6 to solve Callback Hell?', km: 'តើ Feature អ្វីដែល ES6 បង្កើតមកដើម្បីដោះស្រាយបញ្ហា Callback Hell?' },
        options: [
          { id: 'a', text: { en: 'Promises', km: 'Promises' }, isCorrect: true },
          { id: 'b', text: { en: 'For-in loops', km: 'For-in loops' }, isCorrect: false }
        ],
        explanation: { en: 'Promises flatten nested async callback chains.', km: 'Promises បំប្លែង Callback ជាន់ៗគ្នាទៅជា Chain ត្រង់ជួរស្អាតបាត។' }
      }
    ]
  },
  {
    id: 'js-m11-l3',
    slug: 'promises-resolve-reject',
    moduleNumber: 11,
    lessonNumberInModule: 3,
    title: {
      en: '11.3 Promises: Pending, Fulfilled, Rejected (.then/.catch)',
      km: '១១.៣ ES6 Promises (Pending, Fulfilled, Rejected)'
    },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A Promise represents a future asynchronous value. States: `Pending`, `Fulfilled` (resolved), or `Rejected` (failed). Handle with `.then()` and `.catch()`.',
      km: 'Promise គឺជា Object តំណាងឲ្យតម្លៃ Async នាពេលអនាគត។ វាមាន ៣ ស្ថានភាព៖\n1. Pending: កំពុងរង់ចាំ\n2. Fulfilled: ជោគជ័យ (`resolve(data)` -> ចូលទៅ `.then()`)\n3. Rejected: បរាជ័យ (`reject(error)` -> ចូលទៅ `.catch()`)។'
    },
    tutorial: {
      en: '✨ Promise Chain Pattern:\nmyPromise\n  .then(result => console.log(result))\n  .catch(err => console.error(err));',
      km: '✨ ទម្រង់ chain៖ `.then()` ទទួលលទ្ធផលជោគជ័យ `.catch()` ចាប់ Error។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const checkInventory = new Promise((resolve, reject) => {
      const inStock = true;
      setTimeout(() => {
        if (inStock) resolve("📦 Item is available in stock!");
        else reject("❌ Item is out of stock.");
      }, 1000);
    });

    checkInventory
      .then(message => console.log("Success:", message))
      .catch(error => console.error("Error:", error));
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'The native `fetch()` API returns a Promise that resolves when the server responds with network headers.',
        km: '`fetch()` API របស់ Browser បង្វិលតម្លៃជា Promise ជានិច្ចពេលយើងទាញយកទិន្នន័យពី Server។'
      }
    },
    practiceExercise: {
      question: { en: 'Which method handles a rejected Promise error?', km: 'តើ Method មួយណាសម្រាប់ Catch Error នៃ Rejected Promise?' },
      solution: '.catch(error => ...)'
    },
    quizQuestions: [
      {
        id: 'q-js-11-3',
        question: { en: 'What are the three potential states of a JavaScript Promise?', km: 'តើ ៣ ស្ថានភាពនៃ JavaScript Promise មានអ្វីខ្លះ?' },
        options: [
          { id: 'a', text: { en: 'Pending, Fulfilled, Rejected', km: 'Pending, Fulfilled, Rejected' }, isCorrect: true },
          { id: 'b', text: { en: 'Starting, Running, Stopped', km: 'Starting, Running, Stopped' }, isCorrect: false }
        ],
        explanation: { en: 'Promises start Pending, then transition to either Fulfilled or Rejected.', km: 'Promise ចាប់ផ្តើមពី Pending រួចប្តូរទៅ Fulfilled ឬ Rejected។' }
      }
    ]
  },
  {
    id: 'js-m11-l4',
    slug: 'async-await-syntax',
    moduleNumber: 11,
    lessonNumberInModule: 4,
    title: {
      en: '11.4 Modern async / await Syntax',
      km: '១១.៤ ការប្រើប្រាស់ async / await Syntax ទំនើប'
    },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: '`async/await` is syntactic sugar built on Promises. Declare an `async function`, and use `await` before promises to write clean synchronous-looking asynchronous code.',
      km: '`async/await` គឺជា Syntax ទំនើបដែលបង្កើតពីលើ Promise។ វានាំឲ្យកូដ Async មានរូបរាងស្អាត និងអានស្រួលដូចជាកូដ Synchronous ធម្មតា។ សរសេរ `async function` ហើយប្រើ `await` ពីមុខ Promise។'
    },
    tutorial: {
      en: '✨ Async/Await Pattern:\nasync function loadData() {\n  const result = await myPromise;\n  console.log(result);\n}',
      km: '✨ ទម្រង់៖ `async` ដាក់ពីមុខ Function ហើយ `await` ដាក់ពីមុខ Promise ដើម្បីរង់ចាំលទ្ធផល។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function runTasks() {
      console.log("⏳ Task 1 starting...");
      await delay(1000); // Waits 1 second
      console.log("✅ Task 1 completed!");

      console.log("⏳ Task 2 starting...");
      await delay(1000); // Waits 1 second
      console.log("🎉 All tasks done!");
    }

    runTasks();
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Over 95% of professional modern frontend code bases use `async/await` exclusively over old `.then()` chaining.',
        km: 'ជាង ៩៥% នៃកូដ Frontend អាជីពបច្ចុប្បន្នប្រើប្រាស់ `async/await` សម្រាប់ទាញយកទិន្នន័យពី API។'
      }
    },
    practiceExercise: {
      question: { en: 'Can `await` be used outside of an `async` function (excluding top-level await in modules)?', km: 'តើ `await` អាចប្រើក្រៅ `async` function បានទេ?' },
      solution: 'No, `await` requires being inside an `async function` scope (or top-level ES module).'
    },
    quizQuestions: [
      {
        id: 'q-js-11-4',
        question: { en: 'What keyword MUST prefix a function definition to allow using `await` inside it?', km: 'តើ Keyword មួយណាដែលត្រូវតែដាក់ពីមុខ Function ដើម្បីប្រើ `await` ខាងក្នុងវាបាន?' },
        options: [
          { id: 'a', text: { en: 'async', km: 'async' }, isCorrect: true },
          { id: 'b', text: { en: 'defer', km: 'defer' }, isCorrect: false }
        ],
        explanation: { en: 'The function must be declared with async keyword.', km: 'Function ត្រូវតែប្រកាសដោយប្រើ Keyword `async`។' }
      }
    ]
  },

  // MODULE 12 — WORKING WITH APIS
  {
    id: 'js-m12-l1',
    slug: 'apis-and-json-basics',
    moduleNumber: 12,
    lessonNumberInModule: 1,
    title: {
      en: '12.1 Web APIs & JSON Data Format',
      km: '១២.១ ការយល់ដឹងអំពី Web APIs & ទម្រង់ JSON'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'An API (Application Programming Interface) allows frontend apps to fetch server data. JSON (JavaScript Object Notation) is the standard text format for data exchange (`JSON.parse()` & `JSON.stringify()`).',
      km: 'API គឺជាស្ពានភ្ជាប់ទំនាក់ទំនងរវាង Frontend និង Backend Server។ JSON គឺជាទម្រង់ Text Standard សម្រាប់ផ្លាស់ប្តូរទិន្នន័យ៖\n- `JSON.stringify(obj)`: បំប្លែង Obj ទៅជា JSON Text String\n- `JSON.parse(jsonStr)`: បំប្លែង JSON Text មកជា JS Obj វិញ'
    },
    tutorial: {
      en: '✨ JSON Rules:\nProperty keys MUST be enclosed in double quotes `"key": "value"`. No trailing commas!',
      km: '✨ ក្បួន JSON៖ ឈ្មោះ Key ទាំងអស់ត្រូវតែនៅក្នុងសញ្ញាដកស្រង់ពីរ `"key"`! គ្មាន trailing comma ទេ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const userObj = { id: 101, name: "Dara", active: true };

    // 1. Convert Object to JSON String
    const jsonString = JSON.stringify(userObj);
    console.log("JSON String:", jsonString, typeof jsonString);

    // 2. Parse JSON String back to JS Object
    const parsedObj = JSON.parse(jsonString);
    console.log("Parsed Obj Name:", parsedObj.name);
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'All REST and GraphQL web APIs transmit data over the network using JSON string payloads.',
        km: 'រាល់ REST API និង GraphQL API ផ្ញើនិងទទួលទិន្នន័យតាមបណ្តាញ Internet ជាទម្រង់ JSON String។'
      }
    },
    practiceExercise: {
      question: { en: 'Convert JS object `{a: 1}` into a JSON string.', km: 'បំប្លែង JS object `{a: 1}` ទៅជា JSON string។' },
      solution: 'const json = JSON.stringify({a: 1});'
    },
    quizQuestions: [
      {
        id: 'q-js-12-1',
        question: { en: 'Which method converts a JavaScript Object into a valid JSON string?', km: 'តើ Method មួយណាដែលបំប្លែង JS Object ទៅជា JSON String?' },
        options: [
          { id: 'a', text: { en: 'JSON.stringify()', km: 'JSON.stringify()' }, isCorrect: true },
          { id: 'b', text: { en: 'JSON.parse()', km: 'JSON.parse()' }, isCorrect: false }
        ],
        explanation: { en: 'JSON.stringify serializes objects to JSON text.', km: 'JSON.stringify() បំប្លែង Object ទៅជា JSON text string។' }
      }
    ]
  },
  {
    id: 'js-m12-l2',
    slug: 'fetch-api-getting-data',
    moduleNumber: 12,
    lessonNumberInModule: 2,
    title: {
      en: '12.2 Fetching API Data with fetch()',
      km: '១២.២ ការទាញយកទិន្នន័យពី API ដោយប្រើ fetch()'
    },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The native `fetch(url)` API makes network requests over HTTP. It returns a response Promise. Call `.json()` on the response to parse the payload.',
      km: '`fetch(url)` គឺជា API ផ្ទាល់របស់ Browser សម្រាប់ផ្ញើ HTTP Request ទៅទាញយកទិន្នន័យពី Server។ វាបង្វិល Response Promise ដែលយើងត្រូវហៅ `await res.json()` ដើម្បីទទួលបានទិន្នន័យ។'
    },
    tutorial: {
      en: '✨ Standard Fetch Pattern:\nconst res = await fetch("https://api.example.com/data");\nconst data = await res.json();',
      km: '✨ ទម្រង់៖ `const res = await fetch(url); const data = await res.json();`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <h3>Fake Users List (API Fetch Demo)</h3>
  <ul id="userList"></ul>

  <script>
    async function loadUsers() {
      // Mocking fetch response for sandbox demo
      const fakeUsers = [
        { id: 1, name: "Sok Chea" },
        { id: 2, name: "Bopha Chan" }
      ];

      const ul = document.querySelector("#userList");
      fakeUsers.forEach(u => {
        const li = document.createElement("li");
        li.textContent = u.name;
        ul.appendChild(li);
      });
    }

    loadUsers();
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Fetching live API data drives weather widgets, exchange rates, social media feeds, and e-commerce catalogs.',
        km: 'ការទាញយក API គឺជាបេះដូងនៃការបង្ហាញព័ត៌មានអាកាសធាតុ អត្រាប្តូរប្រាក់ និងទំនិញលើ Web។'
      }
    },
    practiceExercise: {
      question: { en: 'What method converts an HTTP fetch response body into a usable JS object?', km: 'តើ Method មួយណាដែលបំប្លែង fetch HTTP response ទៅជា JS object?' },
      solution: 'response.json()'
    },
    quizQuestions: [
      {
        id: 'q-js-12-2',
        question: { en: 'What does `fetch(url)` return initially?', km: 'តើ `fetch(url)` បង្វិលតម្លៃអ្វីជាដំបូង?' },
        options: [
          { id: 'a', text: { en: 'A Promise resolving to a Response object', km: 'Promise ដែលបង្វិលទៅជា Response object' }, isCorrect: true },
          { id: 'b', text: { en: 'The parsed JSON data directly', km: 'ទិន្នន័យ JSON ដោយផ្ទាល់' }, isCorrect: false }
        ],
        explanation: { en: 'fetch returns a Promise resolving to the HTTP Response stream.', km: 'fetch បង្វិល Promise ដែលរង់ចាំ HTTP Response។' }
      }
    ]
  },
  {
    id: 'js-m12-l3',
    slug: 'error-handling-try-catch',
    moduleNumber: 12,
    lessonNumberInModule: 3,
    title: {
      en: '12.3 Error Handling with try...catch',
      km: '១២.៣ ការចាប់ និងដោះស្រាយ Error ដោយ try...catch'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Wrap asynchronous operations inside `try { ... } catch (error) { ... }` blocks to catch network dropouts or invalid JSON errors gracefully.',
      km: 'ប្រើ `try { ... } catch (error) { ... }` ដើម្បីការពារកុំឲ្យ App កក ឬ Crash ពេលមានបញ្ហាបណ្តាញ Internet ឬមាន Error ចេញពី API។'
    },
    tutorial: {
      en: '✨ Safe Fetch Pattern:\ntry {\n  const res = await fetch(url);\n  if(!res.ok) throw new Error("HTTP error!");\n  const data = await res.json();\n} catch(err) {\n  console.error("Network failed:", err.message);\n}',
      km: '✨ ទម្រង់៖ ដាក់កូដ Fetch ក្នុង try block ហើយរៀបចំសារប្រាប់អ្នកប្រើប្រាស់ក្នុង catch block។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    async function safeFetchDemo() {
      try {
        console.log("Attempting network request...");
        // Simulating error
        throw new Error("404 Server Not Found");
      } catch (error) {
        console.error("Caught Error safely:", error.message);
      } finally {
        console.log("Cleanup: Operation finished execution.");
      }
    }

    safeFetchDemo();
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Graceful error handling shows friendly UI alert banners to users instead of leaving a blank white broken screen.',
        km: 'ការ Catch error ជួយបង្ហាញសារ "សូមពិនិត្យអ៊ីនធឺណិត" ទៅកាន់អ្នកប្រើប្រាស់ ជំនួសអោយការទុកអេក្រង់សទទេរ។'
      }
    },
    practiceExercise: {
      question: { en: 'Write a try...catch block capturing a thrown Error("Failed").', km: 'សរសេរ try...catch block សម្រាប់ចាប់ការបោះ Error("Failed")។' },
      solution: 'try {\n  throw new Error("Failed");\n} catch(err) {\n  console.error(err.message);\n}'
    },
    quizQuestions: [
      {
        id: 'q-js-12-3',
        question: { en: 'Which code block executes regardless of whether an error was thrown or caught in try/catch?', km: 'តើ Block មួយណាដែលដំណើការជានិច្ច មិនខ្វល់ថាមាន Error ឬអត់?' },
        options: [
          { id: 'a', text: { en: 'finally', km: 'finally block' }, isCorrect: true },
          { id: 'b', text: { en: 'catch', km: 'catch block' }, isCorrect: false }
        ],
        explanation: { en: 'The finally block runs always after try and catch execution completes.', km: 'finally block ដំណើការជានិច្ចក្រោយបញ្ចប់ try ឬ catch។' }
      }
    ]
  },
  {
    id: 'js-m12-l4',
    slug: 'displaying-fetched-data-dom',
    moduleNumber: 12,
    lessonNumberInModule: 4,
    title: {
      en: '12.4 Rendering API Data into DOM Grids',
      km: '១២.៤ ការបង្ហាញទិន្នន័យ API លើ DOM Grid'
    },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Combine `fetch()`, `.map()`, and DOM insertion to render dynamic data arrays from web APIs into styled UI cards or tables.',
      km: 'បញ្ជូលចំណេះដឹង `fetch()`, `.map()`, និង DOM Creation ដើម្បីបង្ហាញបញ្ជីទិន្នន័យ API ទៅជា Card Grid ឬ Table ស្អាតបាតលើ Web។'
    },
    tutorial: {
      en: '✨ Workflow:\nFetch API data -> Loop through array items -> Construct HTML element string or DOM nodes -> Insert into container innerHTML.',
      km: '✨ លំហូរការងារ៖ Fetch API -> លូកមើល Array ដោយ `.map()` -> បង្កើត HTML -> ដាក់ចូល Container លើ DOM!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; }
    .card { background: #1e293b; padding: 16px; border-radius: 12px; border: 1px solid #334155; }
  </style>
</head>
<body>
  <h2>📦 Product Catalog</h2>
  <div id="grid" className="grid"></div>

  <script>
    const products = [
      { name: "Wireless Mouse", price: 25 },
      { name: "Mechanical Keyboard", price: 75 },
      { name: "HD Monitor", price: 200 }
    ];

    const grid = document.querySelector("#grid");
    grid.innerHTML = products.map(p => \`
      <div className="card">
        <h3>\${p.name}</h3>
        <p style="color:#38bdf8; font-weight:bold;">$\${p.price}</p>
      </div>
    \`).join("");
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'This is the core pattern for building modern dynamic web portals, news feeds, and e-commerce stores.',
        km: 'នេះជាលំអានកូដគ្រឹះចម្បងក្នុងការបង្កើតប្រព័ន្ធព័ត៌មាន និងគេហទំព័រលក់ទំនិញទំនើប។'
      }
    },
    practiceExercise: {
      question: { en: 'Why use `.join("")` when joining array map template literals for innerHTML?', km: 'តើហេតុអ្វីបានជាត្រូវប្រើ `.join("")` លើ map output មុនដាក់ចូល innerHTML?' },
      solution: 'To combine the array of HTML strings into a single contiguous HTML string without commas.'
    },
    quizQuestions: [
      {
        id: 'q-js-12-4',
        question: { en: 'What happens if you omit `.join("")` when setting innerHTML from an array mapped string?', km: 'តើមានអ្វីកើតឡើងប្រសិនបើអ្នកភ្លេចប្រើ `.join("")` ពេលដាក់ Array មករៀប innerHTML?' },
        options: [
          { id: 'a', text: { en: 'Commas will appear rendered between elements', km: 'សញ្ញាក្បៀស (,) នឹងលេចឡើងចន្លោះ Element នីមួយៗ' }, isCorrect: true },
          { id: 'b', text: { en: 'The screen turns completely blank', km: 'អេក្រង់នឹងក្លាយជាសទទេរ' }, isCorrect: false }
        ],
        explanation: { en: 'Converting an array to string implicitly joins with commas, inserting unwanted comma text into the DOM.', km: 'ការបំប្លែង Array ទៅ String ដោយគ្មាន join("") នឹងបន្ថែមសញ្ញាក្បៀសចន្លោះធាតុ។' }
      }
    ]
  },

  // MODULE 13 — BROWSER STORAGE & MODULES
  {
    id: 'js-m13-l1',
    slug: 'localstorage-and-sessionstorage',
    moduleNumber: 13,
    lessonNumberInModule: 1,
    title: {
      en: '13.1 Web Storage: localStorage & sessionStorage',
      km: '១៣.១ ការរក្សាទុកទិន្នន័យលើ Browser (localStorage & sessionStorage)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Web Storage persists key-value string pairs in the browser:\n- `localStorage`: Persists data across browser restarts until cleared\n- `sessionStorage`: Cleared when browser tab closes\nUse `JSON.stringify()` and `JSON.parse()` to store complex objects.',
      km: 'Web Storage អនុញ្ញាតឲ្យយើងរក្សាទុកទិន្នន័យលើ Browser អ្នកប្រើប្រាស់៖\n- `localStorage`: រក្សាទុកទិន្នន័យរហូត (ទោះបិទ/បើក Browser ឡើងវិញក៏មិនបាត់)\n- `sessionStorage`: បាត់ទិន្នន័យភ្លាមពេលបិទ Tab\nប្រើ `localStorage.setItem("key", JSON.stringify(obj))` និង `JSON.parse(localStorage.getItem("key"))`។'
    },
    tutorial: {
      en: '✨ LocalStorage Methods:\nlocalStorage.setItem("theme", "dark");\nconst theme = localStorage.getItem("theme");\nlocalStorage.removeItem("theme");',
      km: '✨ Method សំខាន់ៗ៖ setItem(key, val), getItem(key), removeItem(key)។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <h3>LocalStorage Demo</h3>
  <button id="saveBtn">Save Theme Preference</button>
  <p id="status"></p>

  <script>
    const saveBtn = document.querySelector("#saveBtn");
    const status = document.querySelector("#status");

    // Check saved theme on load
    const savedTheme = localStorage.getItem("userTheme");
    if(savedTheme) {
      status.textContent = "Saved Theme: " + savedTheme;
    }

    saveBtn.addEventListener("click", () => {
      localStorage.setItem("userTheme", "Dark Luxury");
      status.textContent = "Saved Theme: Dark Luxury";
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'To-do apps, shopping cart items, theme toggles, and user authentication tokens are stored in `localStorage`.',
        km: 'កម្មវិធី To-Do List, កន្ត្រកទិញទំនិញ និង Dark/Light Theme ត្រូវបានរក្សាទុកក្នុង `localStorage`។'
      }
    },
    practiceExercise: {
      question: { en: 'Store object `user = { name: "Sok" }` into localStorage under key "user".', km: 'រក្សាទុក object `user = { name: "Sok" }` ក្នុង localStorage ក្រោម key "user"។' },
      solution: 'localStorage.setItem("user", JSON.stringify(user));'
    },
    quizQuestions: [
      {
        id: 'q-js-13-1',
        question: { en: 'What type of data can `localStorage` store natively?', km: 'តើ `localStorage` អាចរក្សាទុក Data Type អ្វីខ្លះជាដំបូង?' },
        options: [
          { id: 'a', text: { en: 'Strings only', km: 'Strings ប៉ុណ្ណោះ' }, isCorrect: true },
          { id: 'b', text: { en: 'Any JavaScript data type including functions', km: 'គ្រប់ប្រភេទទិន្នន័យ រួមទាំង Function' }, isCorrect: false }
        ],
        explanation: { en: 'localStorage stores only key-value string pairs.', km: 'localStorage ផ្ទុកបានតែ String key-value pairs តែប៉ុណ្ណោះ។' }
      }
    ]
  },
  {
    id: 'js-m13-l2',
    slug: 'es6-modules-import-export',
    moduleNumber: 13,
    lessonNumberInModule: 2,
    title: {
      en: '13.2 ES Modules: import & export',
      km: '១៣.២ ES Modules (import & export)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'ES Modules split code into reusable files. Use `export` to expose functions/variables, and `import` to bring them into another file (`<script type="module">`).',
      km: 'ES Modules អនុញ្ញាតឲ្យបំបែកកូដជាច្រើនឯកសារ (Files)៖\n- `export const add = ...` (Named export)\n- `export default function ...` (Default export)\n- `import { add } from "./math.js";` (Import មកប្រើប្រាស់)'
    },
    tutorial: {
      en: '✨ Named vs Default Export:\n// Named:\nexport const pi = 3.14;\nimport { pi } from "./constants.js";\n\n// Default:\nexport default function App() {}\nimport App from "./App.js";',
      km: '✨ ចំណាំ៖ Named Export ប្រើ `{ name }` ពេល import, Default Export មិនបាច់ប្រើ `{}` ទេ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <h3>ES Modules Structure</h3>
  <script type="module">
    // Inline ES module code demo
    const mathUtils = {
      add: (a, b) => a + b,
      sub: (a, b) => a - b
    };

    console.log("Module Add result:", mathUtils.add(5, 10));
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Modern bundlers like Vite, Webpack, and React applications are structured 100% using ES Modules.',
        km: 'គ្រប់គម្រោង React, Vue, និង Vite រៀបចំរចនាសម្ព័ន្ធកូដដោយប្រើប្រាស់ ES Modules ទាំងស្រុង។'
      }
    },
    practiceExercise: {
      question: { en: 'Write a named export statement for a function `calculateTotal`.', km: 'សរសេរ named export statement សម្រាប់ function `calculateTotal`។' },
      solution: 'export function calculateTotal() { ... }'
    },
    quizQuestions: [
      {
        id: 'q-js-13-2',
        question: { en: 'Which HTML attribute is required on script tags to enable ES module `import` statements?', km: 'តើ HTML attribute មួយណាដែលត្រូវតែមានលើ <script> ដើម្បីប្រើ ES Module import?' },
        options: [
          { id: 'a', text: { en: 'type="module"', km: 'type="module"' }, isCorrect: true },
          { id: 'b', text: { en: 'async="true"', km: 'async="true"' }, isCorrect: false }
        ],
        explanation: { en: 'type="module" enables ES6 import/export parsing.', km: 'type="module" អនុញ្ញាតឲ្យប្រើប្រាស់ ES Module Syntax។' }
      }
    ]
  },

  // CAPSTONE MODULE
  {
    id: 'js-m14-l1',
    slug: 'capstone-todo-app',
    moduleNumber: 14,
    lessonNumberInModule: 1,
    title: {
      en: 'Capstone Project: Interactive Persistent To-Do List App',
      km: 'គម្រោង Capstone៖ កម្មវិធី To-Do List មានអន្តរកម្ម រក្សាទុកក្នុង LocalStorage'
    },
    durationMinutes: 60,
    difficulty: 'Advanced',
    explanation: {
      en: 'Combine everything learned in Modules 1–13! Build a full interactive To-Do List application featuring task creation, complete toggles, dynamic task deletion, filter tabs (All, Active, Completed), and persistent data storage in `localStorage`.',
      km: 'រួមបញ្ចូលរាល់ចំណេះដឹងដែលបានរៀនពី Module 1 ដល់ Module 13! បង្កើតកម្មវិធី To-Do List ដែលមានសមត្ថភាព៖\n- បន្ថែម Task ថ្មី\n- ដេញដោល status ថាធ្វើរួច (Complete toggle)\n- លុប Task ដោយប្រើ Event Delegation\n- តម្រៀប Filter (All, Active, Completed)\n- រក្សាទុកទិន្នន័យក្នុង localStorage មិនបាត់បង់ទោះ Reload Page!'
    },
    tutorial: {
      en: '✨ Capstone Checkpoints:\n1. Maintain state array `tasks = []` loaded from localStorage\n2. Render function mapping tasks to HTML elements\n3. Event handlers for add, delete, and toggle operations\n4. Sync state array back to localStorage on every change.',
      km: '✨ ជំហានកសាង៖\n១. កំណត់អថេរ State `tasks` ដោយទាញចេញពី localStorage\n២. បង្កើត Render function\n៣. ភ្ជាប់ Event Listener\n៤. រក្សាទុកទៅ localStorage វិញរាល់ពេលមានការប្រែប្រួល!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JS Capstone To-Do List</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 30px; }
    .todo-card { max-width: 480px; margin: 0 auto; background: #1e293b; border: 1px solid #334155; padding: 24px; border-radius: 20px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); }
    h2 { margin-bottom: 16px; text-align: center; color: #38bdf8; }
    .input-row { display: flex; gap: 8px; margin-bottom: 20px; }
    input[type="text"] { flex: 1; padding: 12px; background: #0f172a; border: 1px solid #334155; border-radius: 10px; color: white; outline: none; }
    button.add-btn { padding: 12px 20px; background: #38bdf8; color: #0f172a; border: none; font-weight: bold; border-radius: 10px; cursor: pointer; }
    ul { list-style: none; display: flex; flex-col; gap: 8px; }
    li.task-item { background: #0f172a; border: 1px solid #334155; padding: 12px 16px; border-radius: 10px; display: flex; align-items: center; justify-content: space-between; }
    li.task-item.completed span { text-decoration: line-through; color: #64748b; }
    .del-btn { background: #ef4444; color: white; border: none; padding: 4px 10px; border-radius: 6px; cursor: pointer; }
  </style>
</head>
<body>
  <div className="todo-card">
    <h2>📝 JS Task Manager</h2>
    <form id="todoForm" className="input-row">
      <input type="text" id="taskInput" placeholder="វាយបញ្ចូលភារកិច្ចថ្មី..." required>
      <button type="submit" className="add-btn">បន្ថែម</button>
    </form>
    <ul id="taskList"></ul>
  </div>

  <script>
    // 1. State array initialized from localStorage
    let tasks = JSON.parse(localStorage.getItem("js_tasks")) || [
      { id: 1, text: "រៀន JavaScript DOM", completed: true },
      { id: 2, text: "ធ្វើ Capstone Project", completed: false }
    ];

    const form = document.querySelector("#todoForm");
    const input = document.querySelector("#taskInput");
    const list = document.querySelector("#taskList");

    // 2. Save state helper
    function saveAndRender() {
      localStorage.setItem("js_tasks", JSON.stringify(tasks));
      render();
    }

    // 3. Render helper
    function render() {
      list.innerHTML = tasks.map(task => \`
        <li className="task-item \${task.completed ? 'completed' : ''}" data-id="\${task.id}">
          <span className="task-text" style="cursor:pointer;">\${task.completed ? '✅' : '⭕'} \${task.text}</span>
          <button className="del-btn">លុប</button>
        </li>
      \`).join("");
    }

    // 4. Form Submit Handler
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!input.value.trim()) return;
      tasks.push({ id: Date.now(), text: input.value.trim(), completed: false });
      input.value = "";
      saveAndRender();
    });

    // 5. Event Delegation for Toggle & Delete
    list.addEventListener("click", (e) => {
      const li = e.target.closest("li");
      if (!li) return;
      const taskId = Number(li.dataset.id);

      if (e.target.classList.contains("del-btn")) {
        tasks = tasks.filter(t => t.id !== taskId);
      } else {
        tasks = tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t);
      }
      saveAndRender();
    });

    // Initial render
    render();
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Completing this Capstone proves you possess real-world JavaScript engineering competencies: State management, Event Handling, DOM Manipulation, and Browser Persistence!',
        km: 'ការបពា្ចប់គម្រោង Capstone នេះបង្ហាញថាលោកអ្នកមានសមត្ថភាពវិស្វកម្ម JavaScript ពិតប្រាកដក្នុងពិភពការងារ!'
      }
    },
    practiceExercise: {
      question: { en: 'How is state persistence achieved in this Capstone project?', km: 'តើការរក្សាទុក狀態 (Persistence) ក្នុង Capstone នេះធ្វើឡើងយ៉ាងដូចម្តេច?' },
      solution: 'By serializing the tasks state array to JSON with localStorage.setItem() on every user mutation.'
    },
    quizQuestions: [
      {
        id: 'q-js-14-1',
        question: { en: 'Which technique is used in the Capstone to handle clicks on dynamically generated task items?', km: 'តើបច្ចេកទេសអ្វីដែលត្រូវបានប្រើក្នុង Capstone ដើម្បី Handle Event លើ Task Items បង្កើតថ្មី?' },
        options: [
          { id: 'a', text: { en: 'Event Delegation on parent <ul> container', km: 'Event Delegation លើ parent <ul> container' }, isCorrect: true },
          { id: 'b', text: { en: 'Re-binding window.onload inline events', km: 'Re-binding window.onload inline events' }, isCorrect: false }
        ],
        explanation: { en: 'Event delegation handles dynamically rendered DOM elements cleanly.', km: 'Event delegation គ្រប់គ្រង Event លើ DOM Element បង្កើតថ្មីឌីណាមិកបានយ៉ាងល្អឥតខ្ចោះ។' }
      }
    ]
  }
];
