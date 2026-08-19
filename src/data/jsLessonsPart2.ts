import { FrontendLesson } from '../types/frontendClass';

export const JS_LESSONS_PART2: FrontendLesson[] = [
  // MODULE 6 — ARRAYS & ARRAY METHODS
  {
    id: 'js-m6-l1',
    slug: 'creating-accessing-arrays',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: {
      en: '6.1 Creating & Accessing Arrays',
      km: '៦.១ ការបង្កើត និងចូលប្រើប្រាស់ Arrays'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Arrays are ordered lists of data items stored using zero-based indexing (`array[0]`). Access array length using `.length`.',
      km: 'Array គឺជាបញ្ជីផ្ទុកទិន្នន័យតាមលំដាប់លំដោយរៀបតាម Index ចាប់ពី 0 ទៅ (`array[0]`)។ អ្នកអាចឆែកប្រវែងបញ្ជីដោយប្រើ `.length`។'
    },
    tutorial: {
      en: '✨ Zero-indexed access:\nconst fruits = ["Apple", "Banana", "Mango"];\nfruits[0] -> "Apple"\nfruits.length -> 3',
      km: '✨ ក្បួន Index៖ ធាតុដំបូងមាន Index = 0! ធាតុចុងក្រោយបង្អស់មាន Index = fruits.length - 1។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const skills = ["HTML5", "CSS3", "JavaScript", "React"];

    console.log("First skill:", skills[0]); // HTML5
    console.log("Third skill:", skills[2]); // JavaScript
    console.log("Total skills:", skills.length); // 4
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Product lists, user notifications, and search results from backend APIs are received as JS Arrays.',
        km: 'បញ្ជីផលិតផល បញ្ជីសារ និងលទ្ធផលស្វែងរកដែលបានមកពី API គឺសុទ្ធតែជា Array។'
      }
    },
    practiceExercise: {
      question: { en: 'Access the last element of array `colors = ["red", "blue", "green"]`.', km: 'ចូលទៅយកធាតុចុងក្រោយនៃ array `colors = ["red", "blue", "green"]`។' },
      solution: 'const lastColor = colors[colors.length - 1];'
    },
    quizQuestions: [
      {
        id: 'q-js-6-1',
        question: { en: 'What index represents the first element of an array?', km: 'តើ Index មួយណាដែលតំណាងឱ្យធាតុដំបូងនៃ Array?' },
        options: [
          { id: 'a', text: { en: '0', km: '0' }, isCorrect: true },
          { id: 'b', text: { en: '1', km: '1' }, isCorrect: false }
        ],
        explanation: { en: 'JavaScript arrays are zero-indexed.', km: 'JavaScript Array ប្រើប្រព័ន្ធ Zero-indexed ចាប់ផ្តើមពី 0។' }
      }
    ]
  },
  {
    id: 'js-m6-l2',
    slug: 'modifying-arrays-push-pop',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: {
      en: '6.2 Array Mutation: push, pop, shift, unshift',
      km: '៦.២ ការបន្ថែម និងលុបធាតុ Array (push, pop, shift, unshift)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Methods to mutate array items:\n- `push()`: Add to end\n- `pop()`: Remove from end\n- `unshift()`: Add to start\n- `shift()`: Remove from start',
      km: 'វិធីសាស្ត្រកែប្រែទិន្នន័យក្នុង Array៖\n- `push(item)`: បន្ថែមទៅខាងចុង\n- `pop()`: លុបធាតុចុងក្រោយ\n- `unshift(item)`: បន្ថែមទៅខាងដើម\n- `shift()`: លុបធាតុខាងដើមគេ'
    },
    tutorial: {
      en: '✨ Quick Memory Trick:\nPush / Pop -> End of array\nUnshift / Shift -> Start of array',
      km: '✨ វិធីចាំ៖ Push/Pop ធ្វើការលើផ្នែកខាងចុង! Unshift/Shift ធ្វើការលើផ្នែកខាងដើម!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const todoList = ["រៀន HTML", "រៀន CSS"];
    todoList.push("រៀន JS"); // Add to end
    console.log("After push:", todoList);

    todoList.shift(); // Remove first
    console.log("After shift:", todoList);
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'To-do apps and shopping carts push newly added items into state arrays dynamically.',
        km: 'កម្មវិធី To-Do List ឬ កន្ត្រកទិញទំនិញ ប្រើ `push()` ដើម្បីបញ្ចូលទំនិញថ្មីដែលអ្នកប្រើបានចុចបន្ថែម។'
      }
    },
    practiceExercise: {
      question: { en: 'Add "Vue" to the end of array `frameworks = ["React"]`.', km: 'បន្ថែម "Vue" ទៅខាងចុងនៃ array `frameworks = ["React"]`។' },
      solution: 'frameworks.push("Vue");'
    },
    quizQuestions: [
      {
        id: 'q-js-6-2',
        question: { en: 'Which array method adds an element to the END of an array?', km: 'តើ Method មួយណាដែលបន្ថែមធាតុទៅខាងចុងនៃ Array?' },
        options: [
          { id: 'a', text: { en: 'push()', km: 'push()' }, isCorrect: true },
          { id: 'b', text: { en: 'unshift()', km: 'unshift()' }, isCorrect: false }
        ],
        explanation: { en: 'push() appends items to the end of an array.', km: 'push() បន្ថែមធាតុទៅខាងចុងនៃ Array។' }
      }
    ]
  },
  {
    id: 'js-m6-l3',
    slug: 'array-iteration-map-filter-reduce',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: {
      en: '6.3 Functional Array Methods: map, filter, reduce',
      km: '៦.៣ Functional Array Iteration (forEach, map, filter, reduce)'
    },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Modern JS relies on non-mutating functional array methods:\n- `forEach()`: Loop over items\n- `map()`: Transform every item into a new array\n- `filter()`: Keep items matching a condition\n- `reduce()`: Accumulate items into a single total value.',
      km: 'វិធីសាស្ត្រ Iteration ទំនើបរបស់ ES6+៖\n- `forEach`: បើកមើលធាតុនីមួយៗ\n- `map`: បំប្លែងធាតុគ្រប់យ៉ាងទៅជា Array ថ្មី\n- `filter`: ចម្រោះយកតែធាតុណាដែលត្រូវតាមលក្ខខណ្ឌ\n- `reduce`: បូកសរុបតម្លៃទាំងអស់ចូលគ្នាជាតម្លៃតែមួយ'
    },
    tutorial: {
      en: '✨ Essential Iteration Patterns:\nconst doubled = nums.map(n => n * 2);\nconst evens = nums.filter(n => n % 2 === 0);',
      km: '✨ ឧទាហរណ៍៖ map បង្កើត Array ថ្មី, filter ចម្រោះយកតែធាតុដែលត្រូវ!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const prices = [10, 20, 30, 40];

    // 1. map (Add $ symbol)
    const formatted = prices.map(p => "$" + p);
    console.log("Formatted:", formatted);

    // 2. filter (Greater than $25)
    const expensive = prices.filter(p => p > 25);
    console.log("Expensive:", expensive);

    // 3. reduce (Total Sum)
    const total = prices.reduce((acc, curr) => acc + curr, 0);
    console.log("Total Price:", "$" + total);
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'React UI components render arrays of objects using `.map()` and search bars filter lists using `.filter()`.',
        km: 'ក្នុង React គេប្រើ `.map()` ជានិច្ចដើម្បីបង្ហាញបញ្ជីទិន្នន័យលើ UI និងប្រើ `.filter()` ពេលអ្នកប្រើស្វែងរក (Search)។'
      }
    },
    practiceExercise: {
      question: { en: 'Filter numbers array `[5, 12, 8, 130, 44]` to keep only numbers > 10.', km: 'ប្រើ filter លើ array `[5, 12, 8, 130, 44]` ដើម្បីយកតែលេខ > 10។' },
      solution: 'const big = nums.filter(n => n > 10);'
    },
    quizQuestions: [
      {
        id: 'q-js-6-3',
        question: { en: 'Which array method transforms items and returns a NEW array of equal length?', km: 'តើ Method មួយណាដែលបំប្លែងទិន្នន័យ និងបង្វិល Array ថ្មីដែលមានប្រវែងស្មើគ្នា?' },
        options: [
          { id: 'a', text: { en: 'map()', km: 'map()' }, isCorrect: true },
          { id: 'b', text: { en: 'filter()', km: 'filter()' }, isCorrect: false }
        ],
        explanation: { en: 'map() constructs and returns a new transformed array.', km: 'map() បង្កើត និងបង្វិល Array ថ្មីដែលបានបំប្លែងតម្លៃគ្រប់ធាតុ។' }
      }
    ]
  },
  {
    id: 'js-m6-l4',
    slug: 'sorting-and-searching-arrays',
    moduleNumber: 6,
    lessonNumberInModule: 4,
    title: {
      en: '6.4 Sorting & Searching Arrays (find, includes, sort)',
      km: '៦.៤ ការតម្រៀប និងស្វែងរកក្នុង Array (find, includes, sort)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Search and sort array data:\n- `includes(val)`: Returns true if item exists\n- `find(fn)`: Returns first matching element\n- `sort((a,b) => a - b)`: Sorts numeric values.',
      km: 'វិធីសាស្ត្រស្វែងរក និងតម្រៀប៖\n- `includes(" text ")`: Check ថាតើមានក្នុងបញ្ជីឬទេ (true/false)\n- `find(item => ...)`: បង្វិលធាតុដំបូងគេដែលត្រូវលក្ខខណ្ឌ\n- `sort((a,b) => a - b)`: តម្រៀបលេខតាមលំដាប់តូចទៅធំ'
    },
    tutorial: {
      en: '✨ Sorting Numbers Correctly:\nnums.sort((a, b) => a - b); // Ascending\nnums.sort((a, b) => b - a); // Descending',
      km: '✨ តម្រៀបលេខ៖ ត្រូវប្រើប្រៀបធៀប `(a, b) => a - b` ព្រោះបើប្រើ `sort()` ទទេ វាប្រៀបធៀបជា String!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const users = [
      { id: 1, name: "Sok" },
      { id: 2, name: "Dara" }
    ];

    const foundUser = users.find(u => u.id === 2);
    console.log("Found User:", foundUser.name); // Dara

    const numbers = [40, 100, 1, 5, 25];
    numbers.sort((a, b) => a - b);
    console.log("Sorted Ascending:", numbers); // [1, 5, 25, 40, 100]
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'E-commerce sites use `.sort()` to order products by price (Low to High) or ratings.',
        km: 'គេហទំព័រលក់ទំនិញប្រើ `.sort()` សម្រាប់តម្រៀបទំនិញតាមតម្លៃ (ថោកទៅថ្លៃ) ឬតាមប្រជាប្រិយភាព។'
      }
    },
    practiceExercise: {
      question: { en: 'Check if array `tags = ["js", "html"]` includes "css".', km: 'ពិនិត្យមើលថាតើ array `tags = ["js", "html"]` មានពាក្យ "css" ដែរឬទេ?' },
      solution: 'const hasCSS = tags.includes("css"); // false'
    },
    quizQuestions: [
      {
        id: 'q-js-6-4',
        question: { en: 'What does `array.find()` return if no element matches the callback condition?', km: 'តើ `array.find()` បង្វិលតម្លៃអ្វីបើគ្មានធាតុណាមួយត្រូវលក្ខខណ្ឌ?' },
        options: [
          { id: 'a', text: { en: 'undefined', km: 'undefined' }, isCorrect: true },
          { id: 'b', text: { en: 'null', km: 'null' }, isCorrect: false }
        ],
        explanation: { en: 'find() returns undefined if no element satisfies the predicate function.', km: 'find() បង្វិល undefined បើគ្មានធាតុណាត្រូវលក្ខខណ្ឌ។' }
      }
    ]
  },

  // MODULE 7 — OBJECTS
  {
    id: 'js-m7-l1',
    slug: 'object-literals-properties-methods',
    moduleNumber: 7,
    lessonNumberInModule: 1,
    title: {
      en: '7.1 Object Literals, Properties & Methods',
      km: '៧.១ Object Literals, Properties និង Methods'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Objects store keyed collections of data as key: value pairs. Values can be primitives, arrays, nested objects, or functions (methods).',
      km: 'Object គឺជាកន្លែងផ្ទុកទិន្នន័យជាគូ `key: value`។ Value អាចជាលេខ អក្សរ Array ឬជា Function (ដែលយើងហៅថា Method)។'
    },
    tutorial: {
      en: '✨ Object Syntax:\nconst user = {\n  name: "Dara",\n  age: 24,\n  greet: function() { return "Hello"; }\n};',
      km: '✨ ទម្រង់៖ const user = { name: "Dara", age: 24 };'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const student = {
      id: "ST-101",
      name: "Sok Chea",
      gpa: 3.8,
      isEnrolled: true
    };

    console.log("Student Name:", student.name);
    console.log("GPA Score:", student.gpa);
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'User profiles, API responses, and database records are structured natively as JS objects.',
        km: 'ព័ត៌មាន Profile អ្នកប្រើប្រាស់ ឬ Record ក្នុង Database ត្រូវរៀបចំជា Object។'
      }
    },
    practiceExercise: {
      question: { en: 'Create a `car` object with `brand: "Toyota"` and `year: 2022`.', km: 'បង្កើត object `car` ដែលមាន `brand: "Toyota"` និង `year: 2022`។' },
      solution: 'const car = { brand: "Toyota", year: 2022 };'
    },
    quizQuestions: [
      {
        id: 'q-js-7-1',
        question: { en: 'What is a function attached inside an object property called?', km: 'តើ Function ដែលនៅក្នុង Object ត្រូវបានគេហៅថាអ្វី?' },
        options: [
          { id: 'a', text: { en: 'Method', km: 'Method' }, isCorrect: true },
          { id: 'b', text: { en: 'Attribute', km: 'Attribute' }, isCorrect: false }
        ],
        explanation: { en: 'Functions defined inside objects are known as methods.', km: 'Function ដែលជារបស់ Object ហៅថា Method។' }
      }
    ]
  },
  {
    id: 'js-m7-l2',
    slug: 'accessing-updating-object-data',
    moduleNumber: 7,
    lessonNumberInModule: 2,
    title: {
      en: '7.2 Dot Notation vs Bracket Notation',
      km: '៧.២ ការទាញយកតម្លៃ (Dot vs Bracket Notation)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Access object properties using dot notation (`obj.prop`) or bracket notation (`obj["prop"]`). Bracket notation allows dynamic key evaluation using variables.',
      km: 'ទាញយក ឬកែប្រែទិន្នន័យ Object៖\n- Dot Notation: `user.name` (ប្រើយ៉ាងទូទៅ)\n- Bracket Notation: `user[variableKey]` (ប្រើពេលឈ្មោះ key ជាអថេរ ឬមានដកឃ្លា)'
    },
    tutorial: {
      en: '✨ Bracket Notation with Variable:\nconst key = "email";\nuser[key] -> Dynamic access to user.email!',
      km: '✨ ប្រយោជន៍ Bracket Notation៖ អនុញ្ញាតឲ្យយើងប្រើប្រាស់តម្លៃអថេរធ្វើជាឈ្មោះ Key បាន។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const user = { name: "Bopha", role: "admin" };

    // Update using Dot Notation
    user.role = "super-admin";

    // Access using Dynamic Bracket Notation
    const propertyToRead = "name";
    console.log("User Name:", user[propertyToRead]); // Bopha
    console.log("Updated Role:", user.role);
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Dynamic form input handling (`e.target.name`) uses bracket notation to update state properties generically.',
        km: 'ពេល Handle Form Inputs ក្នុង JS គេប្រើ `[e.target.name]: e.target.value` តាម Bracket Notation។'
      }
    },
    practiceExercise: {
      question: { en: 'Update property `age` to 26 on object `person`.', km: 'កែប្រែតម្លៃ property `age` ទៅជា 26 លើ object `person`។' },
      solution: 'person.age = 26;'
    },
    quizQuestions: [
      {
        id: 'q-js-7-2',
        question: { en: 'When MUST you use bracket notation over dot notation?', km: 'តើពេលណាដែលអ្នកត្រូវតែប្រើ Bracket Notation?' },
        options: [
          { id: 'a', text: { en: 'When the property name is stored inside a variable', km: 'ពេលឈ្មោះ Property ត្រូវបានផ្ទុកនៅក្នុងអថេរ' }, isCorrect: true },
          { id: 'b', text: { en: 'When accessing primitive numbers', km: 'ពេលចូលប្រើប្រាស់លេខ' }, isCorrect: false }
        ],
        explanation: { en: 'Bracket notation evaluates expressions dynamically.', km: 'Bracket notation អាច Evaluate តម្លៃអថេរឌីណាមិកបាន។' }
      }
    ]
  },
  {
    id: 'js-m7-l3',
    slug: 'this-keyword-in-methods',
    moduleNumber: 7,
    lessonNumberInModule: 3,
    title: {
      en: '7.3 Understanding the `this` Keyword',
      km: '៧.៣ ការយល់ដឹងអំពី Keyword `this` ក្នុង Method'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Inside an object method, `this` refers to the object calling the method. Note: Arrow functions do NOT have their own `this` binding.',
      km: 'ក្នុង Object Method, Keyword `this` សំដៅលើ Object ដែលកំពុងដកស្រង់ Method នោះ។\nសំខាន់៖ Arrow Function គ្មាន `this` ផ្ទាល់ខ្លួនទេ (វាប្រើ Lexical `this`)!'
    },
    tutorial: {
      en: '✨ Correct Method Usage:\nconst obj = {\n  name: "JS",\n  getName() { return this.name; }\n};',
      km: '✨ ក្បួនប្រុងប្រយ័ត្ន៖ កុំប្រើ Arrow function ធ្វើជា Object Method បើអ្នកចង់ប្រើ `this`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const userProfile = {
      firstName: "សុខ",
      lastName: "ជា",
      getFullName() {
        return this.firstName + " " + this.lastName;
      }
    };

    console.log("Full Name:", userProfile.getFullName()); // សុខ ជា
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Class instances and Object Oriented Programming (OOP) rely on `this` to access instance properties.',
        km: 'Class ក្នុង OOP ប្រើប្រាស់ `this` ជានិច្ចដើម្បីទាញយកតម្លៃអថេរក្នុង Class Instance។'
      }
    },
    practiceExercise: {
      question: { en: 'What does `this` refer to inside a standard object method?', km: 'តើ `this` សំដៅលើអ្វីក្នុង Standard Object Method?' },
      solution: 'It refers to the object instance that called the method.'
    },
    quizQuestions: [
      {
        id: 'q-js-7-3',
        question: { en: 'How do arrow functions handle the `this` keyword?', km: 'តើ Arrow Function ចាត់ចែង Keyword `this` យ៉ាងដូចម្តេច?' },
        options: [
          { id: 'a', text: { en: 'They inherit `this` lexically from parent scope', km: 'វាស្នងត្រកូល `this` (Lexical) ពី Parent Scope ខាងក្រៅ' }, isCorrect: true },
          { id: 'b', text: { en: 'They bind `this` to the document body automatically', km: 'វា Bind ទៅកាន់ document body ដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
        ],
        explanation: { en: 'Arrow functions do not bind their own this context.', km: 'Arrow Function គ្មាន this context ផ្ទាល់ខ្លួនទេ វាប្រើ Lexical this។' }
      }
    ]
  },
  {
    id: 'js-m7-l4',
    slug: 'nested-objects-and-arrays',
    moduleNumber: 7,
    lessonNumberInModule: 4,
    title: {
      en: '7.4 Nested Objects & Arrays of Objects',
      km: '៧.៤ Nested Objects និង Arrays នៃ Objects'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Real-world data structures combine nested objects and arrays of objects. Chain dots and brackets (`data.users[0].address.city`) to traverse.',
      km: 'ទិន្នន័យពិភពពិតតែងតែមានលក្ខណៈ nested (Obj ក្នុង Obj ឬ Array នៃ Objs)។ តភាជ្បភ្ជាប់ Dot និង Index (`data.users[0].address.city`) ដើម្បីទាញយកតម្លៃ។'
    },
    tutorial: {
      en: '✨ Traversing Example:\nconst city = order.customer.address.city;',
      km: '✨ ការចូលទៅយក៖ តម្រៀបតាមលំដាប់ `object.arrayIndex.key`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <script>
    const store = {
      name: "Phnom Penh Tech",
      products: [
        { id: 101, title: "Laptop", price: 800 },
        { id: 102, title: "Mouse", price: 25 }
      ]
    };

    console.log("Store Name:", store.name);
    console.log("First Product:", store.products[0].title); // Laptop
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'REST API JSON outputs are complex nested structures containing arrays of user or transaction objects.',
        km: 'JSON ឆ្លើយតបចេញពី REST API គឺជាទម្រង់ Nested Object/Array ដ៏ស្មុគស្មាញ។'
      }
    },
    practiceExercise: {
      question: { en: 'Access price of second item in `cart = { items: [{price:10}, {price:20}] }`.', km: 'ទាញយក price នៃធាតុទី២ ក្នុង `cart = { items: [{price:10}, {price:20}] }`។' },
      solution: 'const price = cart.items[1].price; // 20'
    },
    quizQuestions: [
      {
        id: 'q-js-7-4',
        question: { en: 'How do you access the city property from `user = { details: { city: "PP" } }`?', km: 'តើទាញយក city តាមរបៀបណាពី `user = { details: { city: "PP" } }`?' },
        options: [
          { id: 'a', text: { en: 'user.details.city', km: 'user.details.city' }, isCorrect: true },
          { id: 'b', text: { en: 'user[details][city]', km: 'user[details][city]' }, isCorrect: false }
        ],
        explanation: { en: 'Chain dot notation through nested object properties.', km: 'តភ្ជាប់ Dot notation តាមលំដាប់ Property។' }
      }
    ]
  },

  // MODULE 8 — THE DOM
  {
    id: 'js-m8-l1',
    slug: 'dom-introduction-and-tree',
    moduleNumber: 8,
    lessonNumberInModule: 1,
    title: {
      en: '8.1 What the DOM Is & HTML Connection',
      km: '៨.១ អ្វីទៅជា DOM (Document Object Model)'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'The DOM (Document Object Model) is a tree-like object representation of the HTML document. JavaScript manipulates the DOM to change webpage structure live.',
      km: 'DOM (Document Object Model) គឺជាដើមឈើទិន្នន័យ (Tree Hierarchy) តំណាងឱ្យ HTML ទាំងមូលក្នុង Memory។ JavaScript ប្រើ DOM ដើម្បីប្តូរអត្ថបទ, ពណ៌ និងបំផ្លាស់ទីធាតុលើ Web ភ្លាមៗ។'
    },
    tutorial: {
      en: '✨ `document` Object:\n`document` is the entry point root node to access any element on the page.',
      km: '✨ `document` គឺជាចំណុចចាប់ផ្តើម Root ដើម្បីចូលទៅកាន់ Element ទាំងអស់ក្នុងទំព័រ Web។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <h1 id="heading">Original Title</h1>
  <script>
    // Modify DOM dynamically
    document.getElementById("heading").innerText = "✨ Updated via DOM!";
    console.log("Document Title:", document.title);
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Dynamic live updates (like showing new chat messages or changing dark mode theme) work by modifying the DOM tree.',
        km: 'ការបង្ហាញសារ Chat ថ្មីៗ ឬការដូរ Dark Mode ទាមទារការប្តូរ DOM tree ភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: { en: 'Change document title to "My App" using JavaScript DOM API.', km: 'ប្តូរ Document Title ទៅជា "My App" ដោយប្រើ DOM API។' },
      solution: 'document.title = "My App";'
    },
    quizQuestions: [
      {
        id: 'q-js-8-1',
        question: { en: 'What does DOM stand for in web development?', km: 'តើ DOM មកពីពាក្យពេញអ្វី?' },
        options: [
          { id: 'a', text: { en: 'Document Object Model', km: 'Document Object Model' }, isCorrect: true },
          { id: 'b', text: { en: 'Data Orient Method', km: 'Data Orient Method' }, isCorrect: false }
        ],
        explanation: { en: 'DOM stands for Document Object Model.', km: 'DOM តំណាងឱ្យ Document Object Model។' }
      }
    ]
  },
  {
    id: 'js-m8-l2',
    slug: 'selecting-elements-getelementbyid-queryselector',
    moduleNumber: 8,
    lessonNumberInModule: 2,
    title: {
      en: '8.2 Selecting DOM Elements (getElementById, querySelector)',
      km: '៨.២ ការជ្រើសរើស Element (getElementById, querySelector)'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Select DOM elements using:\n- `getElementById("id")`\n- `querySelector(".class")`: Selects first match\n- `querySelectorAll(".class")`: Selects NodeList array of all matches.',
      km: 'របៀបជ្រើសរើស Element ពី HTML៖\n- `document.getElementById("my-id")`\n- `document.querySelector(".my-class")` (យក Element ដំបូងគេ)\n- `document.querySelectorAll("p")` (យក NodeList នៃធាតុទាំងអស់)'
    },
    tutorial: {
      en: '✨ Modern Standard:\nPrefer `querySelector` and `querySelectorAll` using CSS selector syntax (`#id`, `.class`, `div > p`).',
      km: '✨ ស្តង់ដារទំនើប៖ និយមប្រើ `querySelector` ព្រោះវាប្រើ CSS selector syntax ដូជជា `#id` ឬ `.class`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <div className="card">Card 1</div>
  <div className="card">Card 2</div>

  <script>
    const firstCard = document.querySelector(".card");
    console.log("First card text:", firstCard.textContent);

    const allCards = document.querySelectorAll(".card");
    console.log("Total cards found:", allCards.length); // 2
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Before attaching click handlers or reading form values, you must query and select the element from the DOM.',
        km: 'មុននឹងបញ្ជា Button ឲ្យដើរ អ្នកត្រូវប្រើ `querySelector` ដើម្បីចាប់យក Button នោះពី DOM ជាមុនសិន។'
      }
    },
    practiceExercise: {
      question: { en: 'Select element with id "submit-btn" using querySelector.', km: 'ជ្រើសរើស Element ដែលមាន id "submit-btn" ដោយប្រើ querySelector។' },
      solution: 'const btn = document.querySelector("#submit-btn");'
    },
    quizQuestions: [
      {
        id: 'q-js-8-2',
        question: { en: 'What type of list does `querySelectorAll()` return?', km: 'តើ `querySelectorAll()` បង្វិលប្រភេទ List អ្វី?' },
        options: [
          { id: 'a', text: { en: 'NodeList', km: 'NodeList' }, isCorrect: true },
          { id: 'b', text: { en: 'HTMLCollection', km: 'HTMLCollection' }, isCorrect: false }
        ],
        explanation: { en: 'querySelectorAll returns a static NodeList collection.', km: 'querySelectorAll បង្វិល NodeList នៃ DOM Elements។' }
      }
    ]
  },
  {
    id: 'js-m8-l3',
    slug: 'changing-content-styles-attributes',
    moduleNumber: 8,
    lessonNumberInModule: 3,
    title: {
      en: '8.3 Changing Content, Styles & Attributes',
      km: '៨.៣ ការប្តូរអត្ថបទ, Styles និង Attributes'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Modify DOM nodes:\n- Content: `.textContent` or `.innerHTML`\n- Style: `.style.color = "red"`\n- Classes: `.classList.add("active")` or `.classList.toggle("dark")`\n- Attributes: `.setAttribute("src", "img.jpg")`.',
      km: 'ការកែប្រែ Element៖\n- អត្ថបទ៖ `el.textContent = "ថ្មី"`\n- ពណ៌/Style: `el.style.backgroundColor = "blue"`\n- Class: `el.classList.add("highlight")` ឬ `toggle()`\n- Attribute: `el.setAttribute("disabled", "true")`'
    },
    tutorial: {
      en: '✨ ClassList API is Best for Styling:\nel.classList.add("active");\nel.classList.remove("hidden");\nel.classList.toggle("dark-mode");',
      km: '✨ ស្តង់ដារល្អ៖ ប្រើ classList.add() ឬ toggle() ជំនួសអោយការសរសេរ inline style ច្រើនរញ៉េរញ៉ៃ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <style>
    .active { color: #10b981; font-weight: bold; font-size: 20px; }
  </style>
</head>
<body>
  <p id="msg">Status Message</p>
  <script>
    const msg = document.querySelector("#msg");
    msg.textContent = "✅ Operation Successful!";
    msg.classList.add("active");
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Toggling light/dark themes in web apps works by adding/removing a `.dark` class on the `<body>` element.',
        km: 'ការដូរ Dark Theme លើគេហទំព័រគឺធ្វើឡើងដោយ `document.body.classList.toggle("dark")`។'
      }
    },
    practiceExercise: {
      question: { en: 'Toggle class "hidden" on element `modal`.', km: 'Toggle class "hidden" លើ element `modal`។' },
      solution: 'modal.classList.toggle("hidden");'
    },
    quizQuestions: [
      {
        id: 'q-js-8-3',
        question: { en: 'Which property is safer against XSS attacks for text updating: textContent or innerHTML?', km: 'តើ Property មួយណាដែលមានសុវត្ថិភាពជាងការពារ XSS Attack៖ textContent ឬ innerHTML?' },
        options: [
          { id: 'a', text: { en: 'textContent', km: 'textContent' }, isCorrect: true },
          { id: 'b', text: { en: 'innerHTML', km: 'innerHTML' }, isCorrect: false }
        ],
        explanation: { en: 'textContent treats input purely as plain text, preventing malicious HTML/script execution.', km: 'textContent ចាត់ទុកអត្ថបទជា Plain text ដែលការពារការចាក់បញ្ជូល Script XSS Attack។' }
      }
    ]
  },
  {
    id: 'js-m8-l4',
    slug: 'creating-removing-elements-dynamically',
    moduleNumber: 8,
    lessonNumberInModule: 4,
    title: {
      en: '8.4 Dynamic DOM Creation & Removal',
      km: '៨.៤ ការបង្កើត និងលុប Element ឌីណាមិក (createElement, appendChild)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Create nodes dynamically with `document.createElement("li")`, populate content, and attach using `parent.appendChild(child)` or `parent.append()`. Remove using `el.remove()`.',
      km: 'បង្កើត Element ថ្មីលើទំព័រ៖\n1. `const li = document.createElement("li");` \n2. `li.textContent = "Task 1";` \n3. `ul.appendChild(li);` \nដើម្បីលុប Element ចេញ៖ `el.remove();`'
    },
    tutorial: {
      en: '✨ Workflow:\nCreate element -> Set properties -> Append to parent container in DOM tree.',
      km: '✨ លំដាប់ថ្នាក់៖ បង្កើត Element -> ដាក់អត្ថបទ/Class -> ភ្ជាប់ចូល Parent ក្នុង DOM Tree!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <ul id="list"></ul>
  <script>
    const ul = document.querySelector("#list");

    // Dynamically create li element
    const newLi = document.createElement("li");
    newLi.textContent = "🔥 Dynamic Item Created!";
    newLi.style.color = "#38bdf8";

    // Append to list
    ul.appendChild(newLi);
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'To-Do apps create new list items on the fly when the user submits a task input.',
        km: 'កម្មវិធី To-Do List បង្កើត <li> ថ្មីភ្លាមៗពេលអ្នកប្រើវាយអត្ថបទ ហើយចុច Add Task។'
      }
    },
    practiceExercise: {
      question: { en: 'Create a paragraph element, set text to "Hello", and append to body.', km: 'បង្កើត paragraph element ដាក់អត្ថបទ "Hello" ហើយ append ចូល body។' },
      solution: 'const p = document.createElement("p");\np.textContent = "Hello";\ndocument.body.appendChild(p);'
    },
    quizQuestions: [
      {
        id: 'q-js-8-4',
        question: { en: 'Which method appends a new child node to a parent DOM element?', km: 'តើ Method មួយណាសម្រាប់ភ្ជាប់ Child Node ថ្មីចូលទៅក្នុង Parent DOM Element?' },
        options: [
          { id: 'a', text: { en: 'appendChild()', km: 'appendChild()' }, isCorrect: true },
          { id: 'b', text: { en: 'attachNode()', km: 'attachNode()' }, isCorrect: false }
        ],
        explanation: { en: 'appendChild() adds a node to the end of the specified parent.', km: 'appendChild() បញ្ចូល Node ទៅខាងចុងនៃ Parent Element។' }
      }
    ]
  },

  // MODULE 9 — EVENTS
  {
    id: 'js-m9-l1',
    slug: 'addeventlistener-click-input-submit',
    moduleNumber: 9,
    lessonNumberInModule: 1,
    title: {
      en: '9.1 Event Handling with addEventListener',
      km: '៩.១ ការគ្រប់គ្រង Event ដោយ addEventListener'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Events trigger interactivity. Use `element.addEventListener("click", callback)` to listen for user actions like click, input, submit, mouseover, or keydown.',
      km: 'Event គឺជាសកម្មភាពអ្នកប្រើប្រាស់ (ដូចជា ចុច Mouse, វាយអក្សរ, Submit Form)។ ប្រើ `element.addEventListener("event", callbackFunction)` ដើម្បីស្តាប់ និងឆ្លើយតប។'
    },
    tutorial: {
      en: '✨ Common Event Types:\n"click" - Button clicks\n"input" - Live text field typing\n"submit" - Form submissions',
      km: '✨ Event ដែលប្រើញឹកញាប់៖ "click" (ចុច), "input" (វាយអក្សរ), "submit" (ផ្ញើ Form)។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <button id="btn">ចុចទីនេះ</button>
  <p id="output"></p>

  <script>
    const btn = document.querySelector("#btn");
    const output = document.querySelector("#output");

    btn.addEventListener("click", () => {
      output.textContent = "🎉 Button was clicked!";
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Every interactive UI button, dropdown toggle, or modal trigger relies on event listeners.',
        km: 'រាល់ Button លើគេហទំព័រ Modal Popup និង Dropdown Menu គឺដំណើការតាម Event Listener។'
      }
    },
    practiceExercise: {
      question: { en: 'Add a click event listener to element `btn` logging "Clicked!".', km: 'បន្ថែម click event listener ទៅលើ element `btn` ដើម្បី Log ពាក្យ "Clicked!"។' },
      solution: 'btn.addEventListener("click", () => console.log("Clicked!"));'
    },
    quizQuestions: [
      {
        id: 'q-js-9-1',
        question: { en: 'What is the recommended method to attach event handlers to DOM elements?', km: 'តើវិធីសាស្រ្តដែលបានផ្តល់អនុសាសន៍សម្រាប់ភ្ជាប់ Event Handler គឺអ្វី?' },
        options: [
          { id: 'a', text: { en: 'addEventListener()', km: 'addEventListener()' }, isCorrect: true },
          { id: 'b', text: { en: 'inline onclick attribute', km: 'inline onclick attribute' }, isCorrect: false }
        ],
        explanation: { en: 'addEventListener allows attaching multiple independent listeners cleanly.', km: 'addEventListener អនុញ្ញាតឲ្យភ្ជាប់ Listener ច្រើនដោយស្អាតបាត។' }
      }
    ]
  },
  {
    id: 'js-m9-l2',
    slug: 'the-event-object',
    moduleNumber: 9,
    lessonNumberInModule: 2,
    title: {
      en: '9.2 The Event Object (e.target & e.key)',
      km: '៩.២ ការប្រើប្រាស់ Event Object (e.target & e.key)'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'When an event triggers, JS automatically passes an `event` (or `e`) object to the callback. `e.target` refers to the triggered element, and `e.target.value` reads input text.',
      km: 'ពេល Event កើតឡើង JavaScript បញ្ជូន `event` (ឬ `e`) object ចូលទៅ Callback ដោយស្វ័យប្រវត្តិ។ `e.target` សំដៅលើ Element ដែលបានចុច/វាយ ហើយ `e.target.value` ទាញយកអត្ថបទដែលបានវាយ។'
    },
    tutorial: {
      en: '✨ Useful Event Object Properties:\ne.target -> The DOM element interacted with\ne.target.value -> Text inside input field\ne.key -> Pressed keyboard key name (e.g. "Enter")',
      km: '✨ Property សំខាន់ៗ៖ `e.target` (Element), `e.target.value` (អត្ថបទបញ្ចូល), `e.key` (ប៊ូតុងចុចលើ Keyboard)។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <input id="textInput" placeholder="វាយអត្ថបទទីនេះ...">
  <p>Live Typing: <span id="preview"></span></p>

  <script>
    const input = document.querySelector("#textInput");
    const preview = document.querySelector("#preview");

    input.addEventListener("input", (e) => {
      preview.textContent = e.target.value;
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Live search filters read input in real-time via `e.target.value` to update query results.',
        km: 'ការស្វែងរកទំនិញស្វ័យប្រវត្តិទាញយកអក្សរដែលអ្នកប្រើកំពុងវាយតាម `e.target.value`។'
      }
    },
    practiceExercise: {
      question: { en: 'Listen for keydown on window and log `e.key`.', km: 'ស្តាប់ keydown event លើ window ហើយ log `e.key`។' },
      solution: 'window.addEventListener("keydown", (e) => console.log(e.key));'
    },
    quizQuestions: [
      {
        id: 'q-js-9-2',
        question: { en: 'What property of the event object points to the DOM element that triggered the event?', km: 'តើ Property មួយណា នៃ event object ដែលសំដៅលើ Element ដែលបានបង្កើត Event នោះ?' },
        options: [
          { id: 'a', text: { en: 'e.target', km: 'e.target' }, isCorrect: true },
          { id: 'b', text: { en: 'e.element', km: 'e.element' }, isCorrect: false }
        ],
        explanation: { en: 'e.target references the exact element dispatching the event.', km: 'e.target សំដៅលើ Element ដែលកំពុង dispatch event។' }
      }
    ]
  },
  {
    id: 'js-m9-l3',
    slug: 'event-bubbling-and-delegation',
    moduleNumber: 9,
    lessonNumberInModule: 3,
    title: {
      en: '9.3 Event Bubbling & Event Delegation',
      km: '៩.៣ Event Bubbling & Event Delegation'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Events propagate (bubble) upward from child to parent ancestors. Event Delegation attaches a single listener to a parent container to manage dynamic child events efficiently.',
      km: 'Event Bubbling គឺជាការរាលដាលនៃ Event ពី Element កូនឡើងទៅ Parent ខាងលើ។\nEvent Delegation គឺជាបច្ចេកទេសដាក់ Event Listener តែ ១ លើ Parent ដើម្បីគ្រប់គ្រង Event លើ Element កូនៗដែលបង្កើតថ្មីឌីណាមិក។'
    },
    tutorial: {
      en: '✨ Event Delegation Pattern:\nparentUl.addEventListener("click", e => {\n  if(e.target.tagName === "LI") console.log("Clicked item");\n});',
      km: '✨ បច្ចេកទេស Delegation៖ ដាក់ Listener លើ <ul> តែមួយ ហើយឆែកមើល `e.target` ដើម្បីដឹងថាតើ <li> មួយណាត្រូវចុច។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <ul id="parentList">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>

  <script>
    // Event Delegation on parent <ul>
    const ul = document.querySelector("#parentList");
    ul.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        console.log("Clicked:", e.target.textContent);
      }
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Dynamic lists (like To-Do apps) use Event Delegation so delete buttons on newly added tasks work automatically without re-binding listeners.',
        km: 'កម្មវិធី To-Do List ប្រើ Event Delegation លើ <ul> ដើម្បីឲ្យប៊ូតុងលុបលើ Task ថ្មីៗដើរដោយស្វ័យប្រវត្តិ។'
      }
    },
    practiceExercise: {
      question: { en: 'How do you stop event bubbling in an event callback?', km: 'តើធ្វើដូចម្តេចដើម្បីបញ្ឈប់ Event Bubbling?' },
      solution: 'e.stopPropagation();'
    },
    quizQuestions: [
      {
        id: 'q-js-9-3',
        question: { en: 'Which method stops an event from bubbling up the DOM tree?', km: 'តើ Method មួយណាដែលបញ្ឈប់ Event មិនឲ្យ Bubble ឡើងលើ?' },
        options: [
          { id: 'a', text: { en: 'e.stopPropagation()', km: 'e.stopPropagation()' }, isCorrect: true },
          { id: 'b', text: { en: 'e.cancelBubble()', km: 'e.cancelBubble()' }, isCorrect: false }
        ],
        explanation: { en: 'e.stopPropagation() halts further event bubbling through ancestor elements.', km: 'e.stopPropagation() បញ្ឈប់ការរាលដាលនៃ Event ទៅកាន់ Parent។' }
      }
    ]
  },
  {
    id: 'js-m9-l4',
    slug: 'form-handling-and-validation',
    moduleNumber: 9,
    lessonNumberInModule: 4,
    title: {
      en: '9.4 Form Handling & preventDefault() Validation',
      km: '៩.៤ ការគ្រប់គ្រង Form & preventDefault() Validation'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Forms refresh the page on submit by default. Use `e.preventDefault()` inside submit handlers to stop page reloads and validate form fields in JS.',
      km: 'ជាធម្មតា Form នឹងធ្វើការ Reload Page ពេល Submit។ យើងត្រូវប្រើ `e.preventDefault()` ក្នុង Submit Event Handler ដើម្បីឃាត់ការ Reload និងធ្វើការផ្ទៀងផ្ទាត់ទិន្នន័យ (Validation) តាម JavaScript។'
    },
    tutorial: {
      en: '✨ Form Handler Pattern:\nform.addEventListener("submit", e => {\n  e.preventDefault(); // Stop reload!\n  // validate inputs & send API request\n});',
      km: '✨ ទម្រង់៖ e.preventDefault() ការពារកុំឲ្យ Reload ទំព័រ រួចទាញយកតម្លៃតាម input.value។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body>
  <form id="loginForm">
    <input id="email" type="email" placeholder="Email" required>
    <button type="submit">Login</button>
  </form>
  <p id="msg"></p>

  <script>
    const form = document.querySelector("#loginForm");
    const msg = document.querySelector("#msg");

    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent page reload
      const emailValue = document.querySelector("#email").value;
      msg.textContent = "✅ Submitted Email: " + emailValue;
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Single Page Applications (SPAs) intercept form submissions with `e.preventDefault()` to submit data via AJAX/Fetch API silently.',
        km: 'Web App ទំនើបប្រើ e.preventDefault() ដើម្បី Submit ទិន្នន័យទៅកាន់ Server តាម Fetch API ដោយមិនបាច់ Reload ទំព័រ។'
      }
    },
    practiceExercise: {
      question: { en: 'What does `e.preventDefault()` do in a submit event handler?', km: 'តើ `e.preventDefault()` ធ្វើអ្វីខ្លះក្នុង submit event handler?' },
      solution: 'It stops the browser from reloading the page during form submission.'
    },
    quizQuestions: [
      {
        id: 'q-js-9-4',
        question: { en: 'Why must you call `e.preventDefault()` during form submit events in SPA web apps?', km: 'តើហេតុអ្វីបានជាត្រូវហៅ `e.preventDefault()` ពេល Submit Form ក្នុង SPA Web App?' },
        options: [
          { id: 'a', text: { en: 'To prevent the browser from executing default page refresh', km: 'ដើម្បីការពារ Browser មិនឲ្យ Refresh/Reload ទំព័រតាម Default' }, isCorrect: true },
          { id: 'b', text: { en: 'To automatically encrypt input password text', km: 'ដើម្បី Encrypt ពាក្យសម្ងាត់ដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
        ],
        explanation: { en: 'It suppresses the native browser submission reload behavior.', km: 'វាឃាត់មិនឲ្យ Browser ធ្វើការ Submit & Reload Page តាមធម្មតា។' }
      }
    ]
  }
];
