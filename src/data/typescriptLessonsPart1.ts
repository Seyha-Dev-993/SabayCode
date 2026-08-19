import { FrontendLesson } from '../types/frontendClass';

export const TYPESCRIPT_LESSONS_PART1: FrontendLesson[] = [
  // MODULE 1: Introduction & Setup
  {
    id: 'ts-mod1-l1',
    slug: 'what-is-typescript-superset',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: {
      en: 'What is TypeScript & JavaScript Superset Concept',
      km: 'អ្វីទៅជា TypeScript & គំនិត JavaScript Superset'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'TypeScript is a strongly typed programming language developed by Microsoft that builds on JavaScript (it is a "superset" of JS). Any valid JavaScript code is also valid TypeScript code. TypeScript adds a compile-time static type system, allowing developers to catch errors early during editing rather than at runtime.',
      km: 'TypeScript គឺជាភាសាសរសេរកូដដែលមាន Type ត្រឹមត្រូវច្បាស់លាស់ បង្កើតឡើងដោយ Microsoft ដែលអភិវឌ្ឍបន្ថែមលើ JavaScript (វាជា "Superset" នៃ JS)។ គ្រប់កូដ JavaScript ដែលត្រឹមត្រូវទាំងអស់ គឺសុទ្ធតែជាកូដ TypeScript ដែរ។ TypeScript បន្ថែម Static Type System ជួយឲ្យស្វែងរក Error បានតាំងពីពេលកំពុងសរសេដូកូដ មុនពេលរត់លើ Browser។'
    },
    tutorial: {
      en: `1. JavaScript is dynamically typed: variables can hold any type at runtime without warnings.
2. TypeScript is statically typed: type checking happens during compilation.
3. TypeScript files use the .ts (or .tsx for React) extension.
4. Browsers cannot run .ts files directly — TypeScript code compiles down to standard JavaScript.`,
      km: `១. JavaScript ជា Dynamically Typed: អថេរអាចផ្ទុកតម្លៃប្រភេទអ្វីក៏បានពេលរត់ ដោយគ្មានការព្រមានឡើយ។
២. TypeScript ជា Statically Typed: ការត្រួតពិនិត្យ Type កើតឡើងពេល Compile កូដ។
៣. ឯកសារ TypeScript ប្រើ Extension .ts (ឬ .tsx សម្រាប់ React)។
៤. Browser មិនអាចរត់ឯកសារ .ts ផ្ទាល់បានទេ — កូដ TypeScript ត្រូវតែ Compile ទៅជា JavaScript ធម្មតាសិន។`
    },
    starterCode: {
      js: `// Plain JavaScript vs TypeScript Concept
function calculateTotal(price, tax) {
  return price + tax;
}

// In JS, passing strings concatenates instead of adding!
console.log(calculateTotal(100, "10")); // "10010" in JS!

// In TypeScript:
// function calculateTotal(price: number, tax: number): number
// calculateTotal(100, "10"); // ❌ Type Error: Argument of type 'string' is not assignable to parameter of type 'number'`
    },
    realWorldExample: {
      title: {
        en: 'Preventing Payment Calculation Bugs in E-Commerce',
        km: 'ការការពារ Bug គណនាប្រាក់ក្នុង E-Commerce'
      },
      description: {
        en: 'In plain JS, string values from input fields ("100" + "10") result in "10010" dollars charged! TypeScript forces you to parse inputs into numbers before calculation.',
        km: 'ក្នុង JS ធម្មតា តម្លៃពី Input ("100" + "10") អាចធ្វើឲ្យគណនាចេញ "10010" ដុល្លារ! TypeScript បង្ខំឲ្យអ្នកបំប្លែង Input ទៅជាលេខត្រឹមត្រូវជាមុន។'
      },
      code: `function processPayment(amount: number) {
  console.log("Charging $" + amount.toFixed(2));
}
processPayment(100); // ✅ Works!`
    },
    practiceExercise: {
      question: {
        en: 'Define a function addNumbers that takes two parameters (a and b) and explicitly type them as number.',
        km: 'ប្រកាស Function addNumbers ដែលទទួល Parameter ពីរ (a និង b) ដោយកំណត់ Type ជា number។'
      },
      solution: `function addNumbers(a: number, b: number): number {
  return a + b;
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m1-1',
        question: {
          en: 'What does it mean that TypeScript is a "superset" of JavaScript?',
          km: 'តើពាក្យថា TypeScript ជា "Superset" នៃ JavaScript មានន័យដូចម្តេច?'
        },
        options: [
          { id: '1', text: { en: 'All valid JavaScript code is valid TypeScript code.', km: 'គ្រប់កូដ JavaScript ដែលត្រឹមត្រូវទាំងអស់ គឺជារបស់ TypeScript ដែរ។' }, isCorrect: true },
          { id: '2', text: { en: 'TypeScript replaces JavaScript completely inside web browsers.', km: 'TypeScript ជំនួស JavaScript ទាំងស្រុងក្នុង Browser។' }, isCorrect: false },
          { id: '3', text: { en: 'TypeScript only runs on backend servers.', km: 'TypeScript រត់បានតែលើ Backend Server ប៉ុណ្ណោះ។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Since TypeScript is a superset, JS code runs smoothly in TS files, and TS adds type checking on top.',
          km: 'ដោយសារ TS ជា Superset, កូដ JS អាចដំណើការក្នុង TS ហើយបន្ថែម Type checking លើសពីនេះ។'
        }
      }
    ]
  },
  {
    id: 'ts-mod1-l2',
    slug: 'installing-typescript-tsc-compiler',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: {
      en: 'Installing TypeScript & the tsc Compiler',
      km: 'ការដំឡើង TypeScript & tsc Compiler'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'To compile TypeScript code to plain JavaScript, you need the official TypeScript compiler named `tsc`. You install it globally or inside a Node.js project using npm: `npm install -g typescript` or `npm install -D typescript`.',
      km: 'ដើម្បី Compile កូដ TypeScript ទៅជា JavaScript ធម្មតា អ្នកត្រូវប្រើប្រាស់ TypeScript Compiler ដែលមានឈ្មោះថា `tsc`។ អ្នកអាចដំឡើងវាជា Global ឬក្នុង Node.js Project ដោយប្រើប្រាស់ npm command: `npm install -g typescript`។'
    },
    tutorial: {
      en: `Step 1: Check Node.js installation in terminal: node -v
Step 2: Install TypeScript globally: npm install -g typescript
Step 3: Verify tsc version: tsc -v
Step 4: Execute compiler on a file: tsc app.ts`,
      km: `ជំហានទី ១: ពិនិត្យ Node.js ក្នុង Terminal: node -v
ជំហានទី ២: ដំឡើង TypeScript Global: npm install -g typescript
ជំហានទី ៣: ពិនិត្យ tsc version: tsc -v
ជំហានទី ៤: Compile ឯកសារ: tsc app.ts`
    },
    starterCode: {
      js: `// Terminal Commands Demonstration:
// $ npm install -g typescript
// $ tsc --version
// Version 5.4.2`
    },
    realWorldExample: {
      title: {
        en: 'NPM Package Script Integration',
        km: 'ការដាក់ Command ក្នុង package.json'
      },
      description: {
        en: 'Modern build pipelines use scripts in package.json to trigger type checking before running bundlers like Vite or Webpack.',
        km: 'ក្នុង Project ទំនើប គេច្រើនដាក់ Script ក្នុង package.json ដើមបីឲ្យ `tsc` ពិនិត្យកូដមុនពេល Build គម្រោង។'
      },
      code: `// package.json
{
  "scripts": {
    "build": "tsc && vite build"
  }
}`
    },
    practiceExercise: {
      question: {
        en: 'What npm command installs TypeScript globally on your computer?',
        km: 'តើ Command npm មួយណាសម្រាប់ដំឡើង TypeScript លើកុំព្យូទ័រជា Global?'
      },
      solution: `npm install -g typescript`
    },
    quizQuestions: [
      {
        id: 'q-ts-m1-2',
        question: {
          en: 'Which CLI tool compiles TypeScript files into executable JavaScript?',
          km: 'តើ CLI Tool មួយណាដែល Compile ឯកសារ TypeScript ទៅជា JavaScript?'
        },
        options: [
          { id: '1', text: { en: 'tsc', km: 'tsc' }, isCorrect: true },
          { id: '2', text: { en: 'npm start', km: 'npm start' }, isCorrect: false },
          { id: '3', text: { en: 'node-compiler', km: 'node-compiler' }, isCorrect: false }
        ],
        explanation: {
          en: '`tsc` stands for TypeScript Compiler.',
          km: '`tsc` មកពីពាក្យថា TypeScript Compiler។'
        }
      }
    ]
  },
  {
    id: 'ts-mod1-l3',
    slug: 'compiling-first-ts-file',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: {
      en: 'Compiling Your First .ts File to .js',
      km: 'ការ Compile ឯកសារ .ts ដំបូងបង្អស់ទៅជា .js'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'When you run `tsc main.ts`, the compiler checks for type violations. If no errors exist (or even with errors unless configured otherwise), it emits `main.js` which can be executed directly in Node.js or loaded in HTML via `<script src="main.js">`.',
      km: 'នៅពេលអ្នករត់ `tsc main.ts` កម្មវិធី Compiler នឹងពិនិត្យ Type Error។ ប្រសិនបើគ្មាន Error វាបង្កើតឯកសារ `main.js` ដែលអាចរត់លើ Node.js ឬតភ្ជាប់ក្នុង HTML តាមរយៈ `<script src="main.js">`។'
    },
    tutorial: {
      en: `1. Create main.ts:
   let user: string = "Dara";
   console.log("Hello, " + user);
2. Run command in terminal: tsc main.ts
3. Inspect generated main.js file:
   var user = "Dara";
   console.log("Hello, " + user);`,
      km: `១. បង្កើត main.ts:
   let user: string = "Dara";
   console.log("Hello, " + user);
២. រត់ Command ក្នុង Terminal: tsc main.ts
៣. មើលឯកសារកើតថ្មី main.js:
   var user = "Dara";
   console.log("Hello, " + user);`
    },
    starterCode: {
      js: `// Source: index.ts
let studentName: string = "Sophea";
let studentAge: number = 20;

console.log(\`Student: \${studentName}, Age: \${studentAge}\`);`
    },
    realWorldExample: {
      title: {
        en: 'Compiled JavaScript Output',
        km: 'លទ្ធផល JavaScript ដែលបាន Compile'
      },
      description: {
        en: 'Notice how type annotations like `: string` and `: number` are completely stripped away during compilation because browsers only understand plain JavaScript!',
        km: 'សម្គាល់ឃើញថា Type annotations ដូចជា `: string` ត្រូវបានលុបចេញទាំងស្រុងពេល Compile ព្រោះ Browser យល់តែ JavaScript ធម្មតា!'
      },
      code: `// Compiled index.js output
var studentName = "Sophea";
var studentAge = 20;
console.log("Student: " + studentName + ", Age: " + studentAge);`
    },
    practiceExercise: {
      question: {
        en: 'Write code in .ts that assigns string "Cambodia" to country, then compile mental representation.',
        km: 'សរសេរកូដក្នុង .ts កំណត់ "Cambodia" ទៅកាន់ country ជាមួយ Type string។'
      },
      solution: `let country: string = "Cambodia";`
    },
    quizQuestions: [
      {
        id: 'q-ts-m1-3',
        question: {
          en: 'What happens to TypeScript type annotations during compilation to JavaScript?',
          km: 'តើមានអ្វីកើតឡើងចំពោះ Type annotations ពេល Compile ទៅជា JavaScript?'
        },
        options: [
          { id: '1', text: { en: 'They are completely removed (type stripping).', km: 'ពួកវាត្រូវបានលុបចេញទាំងស្រុង (Type stripping)។' }, isCorrect: true },
          { id: '2', text: { en: 'They become runtime IF statements in JavaScript.', km: 'ពួកវាប្រែទៅជា IF statement ពេលរត់។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Type annotations only exist during development for compile-time safety and disappear in .js files.',
          km: 'Type annotations មានតែពេលសរសេរកូដប៉ុណ្ណោះ ហើយនឹងត្រូវលុបចេញក្នុងឯកសារ .js។'
        }
      }
    ]
  },

  // MODULE 2: Basic Types
  {
    id: 'ts-mod2-l1',
    slug: 'basic-types-string-number-boolean',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: {
      en: 'Primitive Basic Types: string, number, boolean',
      km: 'ប្រភេទទិន្នន័យគ្រឹះ៖ string, number, boolean'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'TypeScript supports all primitive JavaScript types. Annotations use a colon followed by the lower-case type name: `: string` for text, `: number` for integers and floats, and `: boolean` for true/false values.',
      km: 'TypeScript ទ្រទ្រង់ Primitive Types ទាំងអស់របស់ JS។ ការប្រកាសប្រើសញ្ញាស្នែងពីរ និងឈ្មោះប្រភេទជាអក្សរតូច៖ `: string` សម្រាប់អត្ថបទ, `: number` សម្រាប់លេខ និង `: boolean` សម្រាប់តម្លៃ true/false។'
    },
    tutorial: {
      en: `Syntax examples:
let username: string = "Bopha";
let age: number = 22;
let isGraduated: boolean = true;`,
      km: `ឧទាហរណ៍ Syntax:
let username: string = "Bopha";
let age: number = 22;
let isGraduated: boolean = true;`
    },
    starterCode: {
      js: `let itemName: string = "MacBook Pro";
let price: number = 1299.99;
let inStock: boolean = true;

console.log(itemName, price, inStock);`
    },
    realWorldExample: {
      title: {
        en: 'Form Input Data Validation',
        km: 'ការកំណត់ Type លើទិន្នន័យ Form'
      },
      description: {
        en: 'Ensuring values passed to user profile functions strictly conform to expected primitive types.',
        km: 'ធានាថាតម្លៃដែលបញ្ជូនទៅកាន់ Profile Function មានប្រភេទត្រឹមត្រូវជានិច្ច។'
      },
      code: `function createUser(name: string, points: number, active: boolean) {
  return { name, points, active };
}`
    },
    practiceExercise: {
      question: {
        en: 'Declare a variable score typed as number and initialized to 95.',
        km: 'ប្រកាសអថេរ score ដែលមាន Type ជា number និងមានតម្លៃដើម 95។'
      },
      solution: `let score: number = 95;`
    },
    quizQuestions: [
      {
        id: 'q-ts-m2-1',
        question: {
          en: 'Which primitive type annotation represents floating point and integer numbers in TypeScript?',
          km: 'តើ Type annotation មួយណាសម្រាប់តំណាងឲ្យលេខទសភាគ និងលេខគត់ក្នុង TypeScript?'
        },
        options: [
          { id: '1', text: { en: 'number', km: 'number' }, isCorrect: true },
          { id: '2', text: { en: 'float', km: 'float' }, isCorrect: false },
          { id: '3', text: { en: 'Integer', km: 'Integer' }, isCorrect: false }
        ],
        explanation: {
          en: 'TypeScript uses lowercase `number` for all numeric values.',
          km: 'TypeScript ប្រើប្រាស់អក្សរតូច `number` សម្រាប់គ្រប់លេខទាំងអស់។'
        }
      }
    ]
  },
  {
    id: 'ts-mod2-l2',
    slug: 'arrays-and-any-type',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: {
      en: 'Arrays & The danger of any Type',
      km: 'Arrays និង គ្រោះថ្នាក់នៃការប្រើ any Type'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Typed arrays restrict element values to a specific type (e.g., `string[]` or `Array<number>`). The `any` type opts out of type checking completely, effectively disabling TypeScript safety benefits. Avoid using `any` whenever possible!',
      km: 'Typed arrays កំណត់ឲ្យ Element ក្នុង Array មាន Type ច្បាស់លាស់ (ឧ. `string[]`)។ `any` type លុបចោលការពិនិត្យ Type ទាំងអស់ ដែលធ្វើឲ្យបាត់បង់សុវត្ថិភាព TypeScript។ គួរជៀសវាងការប្រើ `any`!'
    },
    tutorial: {
      en: `1. Array Syntax:
   let skills: string[] = ["HTML", "CSS", "JS"];
   let scores: Array<number> = [90, 85, 100];

2. The Dangerous 'any' Type:
   let randomValue: any = "Hello";
   randomValue = 42; // No compiler warning!
   randomValue.nonExistentMethod(); // ❌ Crash at runtime!`,
      km: `១. Syntax របស់ Array:
   let skills: string[] = ["HTML", "CSS", "JS"];
   let scores: Array<number> = [90, 85, 100];

២. គ្រោះថ្នាក់នៃ 'any' Type:
   let randomValue: any = "Hello";
   randomValue = 42; // គ្មានការព្រមានពី Compiler!
   randomValue.nonExistentMethod(); // ❌ Crash ពេលរត់!`
    },
    starterCode: {
      js: `// Correct Typed Array
let frameworkList: string[] = ["React", "Vue", "Angular"];
frameworkList.push("Svelte"); // ✅ Valid
// frameworkList.push(100); // ❌ Error: Argument of type 'number' is not assignable to 'string'`
    },
    realWorldExample: {
      title: {
        en: 'Strict Shopping Cart Item Lists',
        km: 'បញ្ជីទំនិញក្នុង Shopping Cart'
      },
      description: {
        en: 'Using `number[]` ensures array methods like `.reduce()` or `.map()` won\'t crash due to unexpected object string types.',
        km: 'ការប្រើ `number[]` ធានាថា Array methods ដូចជា `.reduce()` មិនមានដួល Bug ដោយសារច្រឡំបញ្ចូល String។'
      },
      code: `const prices: number[] = [19.99, 29.99, 4.99];
const total = prices.reduce((sum, p) => sum + p, 0);`
    },
    practiceExercise: {
      question: {
        en: 'Create an array named tags that holds only string elements.',
        km: 'បង្កើត Array ឈ្មោះ tags ដែលផ្ទុកបានតែធាតុអត្ថបទ (string) ប៉ុណ្ណោះ។'
      },
      solution: `let tags: string[] = ["frontend", "web", "typescript"];`
    },
    quizQuestions: [
      {
        id: 'q-ts-m2-2',
        question: {
          en: 'Why is overusing the `any` type considered bad practice in TypeScript?',
          km: 'ហេតុអ្វីបានជាការប្រើប្រាស់ `any` ច្រើនហួសហេតុ ត្រូវបានចាត់ទុកជាទម្លាប់មិនល្អ?'
        },
        options: [
          { id: '1', text: { en: 'It disables compile-time type safety and autocomplete perks.', km: 'វាលុបចោល Type safety និង Autocomplete របស់ TypeScript។' }, isCorrect: true },
          { id: '2', text: { en: 'It causes web browsers to run 50% slower.', km: 'វាធ្វើឲ្យ Browser រត់យឺតជាងមុន 50%។' }, isCorrect: false }
        ],
        explanation: {
          en: '`any` essentially turns off TypeScript checking for that variable.',
          km: '`any` បិទការពិនិត្យ Error របស់ TypeScript លើអថេរនោះ។'
        }
      }
    ]
  },
  {
    id: 'ts-mod2-l3',
    slug: 'type-inference-when-to-annotate',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: {
      en: 'Type Inference — When Annotations are Optional',
      km: 'Type Inference — ពេលណាដែលមិនបាច់សរសេរ Type'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'TypeScript is smart! When you initialize a variable with an initial value, TypeScript automatically infers its type. You do not need to write explicit `: string` annotations everywhere if initialization makes the type clear.',
      km: 'TypeScript មានភាពឆ្លាតវៃ! នៅពេលអ្នកផ្តល់តម្លៃដើមឲ្យអថេរ, TypeScript នឹងស្វែងយល់ (Infer) ប្រភេទ Type ដោយស្វ័យប្រវត្តិ។ អ្នកមិនចាំបាច់សរសេរ `: string` គ្រប់កន្លែងនោះទេ ប្រសិនបើតម្លៃដើមច្បាស់លាស់រួចហើយ។'
    },
    tutorial: {
      en: `Explicit vs Inferred:

// Redundant annotation:
let name: string = "Chann"; 

// Clean Type Inference (TS knows course is string):
let course = "Frontend Mastery"; 
// course = 100; // ❌ Type Error: Type 'number' is not assignable to 'string'`,
      km: `ការសរសេរច្បាស់លាស់ ធៀបនឹង Inference:

// សរសេរលើសតម្រូវការ:
let name: string = "Chann"; 

// Type Inference ស្អាតបាត (TS ដឹងថា course ជា string):
let course = "Frontend Mastery"; 
// course = 100; // ❌ Error: មិនអាចដាក់លេខចូល string ឡើយ`
    },
    starterCode: {
      js: `let count = 0; // Inferred as number
let message = "Welcome"; // Inferred as string
let isOpen = false; // Inferred as boolean

// TypeScript locks these types automatically!
// count = "zero"; // ❌ Error!`
    },
    realWorldExample: {
      title: {
        en: 'Cleaner Code in Modern Codebases',
        km: 'ការសរសេរកូដស្អាតបាតក្នុង Project ពិត'
      },
      description: {
        en: 'Relying on type inference reduces clutter while keeping 100% type safety benefits intact.',
        km: 'ការទុកឲ្យ TS ធ្វើ Inference ជួយឲ្យកូដខ្លីស្អាត ប៉ុន្តែរក្សាសុវត្ថិភាព Type Safety 100% ដដែល។'
      },
      code: `const numbers = [1, 2, 3]; // Inferred as number[]
const doubled = numbers.map(n => n * 2); // Inferred as number[]`
    },
    practiceExercise: {
      question: {
        en: 'Let city = "Phnom Penh". What type does TypeScript infer for city?',
        km: 'បើសរសេរ let city = "Phnom Penh", តើ TypeScript កំណត់ Type អ្វីឲ្យ city?'
      },
      solution: `string`
    },
    quizQuestions: [
      {
        id: 'q-ts-m2-3',
        question: {
          en: 'What is Type Inference in TypeScript?',
          km: 'តើអ្វីទៅជា Type Inference ក្នុង TypeScript?'
        },
        options: [
          { id: '1', text: { en: 'Automatic determination of variable type based on its assigned value.', km: 'ការកំណត់ Type ដោយស្វ័យប្រវត្តិផ្អែកលើតម្លៃដែលបានផ្តល់ឲ្យអថេរ។' }, isCorrect: true },
          { id: '2', text: { en: 'Converting strings into numbers automatically at runtime.', km: 'ការបំប្លែង string ទៅជា number ស្វ័យប្រវត្តិ។' }, isCorrect: false }
        ],
        explanation: {
          en: 'TypeScript infers types from assignment values so you don\'t have to annotate everything.',
          km: 'TS ស្វែងយល់ Type ពីតម្លៃដើម ធ្វើឲ្យមិនបាច់សរសេរ Type គ្រប់កន្លែង។'
        }
      }
    ]
  },

  // MODULE 3: Interfaces & Type Aliases
  {
    id: 'ts-mod3-l1',
    slug: 'interfaces-object-shapes',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: {
      en: 'Defining Interfaces for Object Shapes',
      km: 'ការកំណត់ Interface សម្រាប់ទម្រង់ Object'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'An `interface` defines a named contract describing the required property names and value types of an object. Objects assigned to the interface must match all specified property keys and types strictly.',
      km: '`interface` ត្រូវបានប្រើដើមបីកំណត់កិច្ចសន្យាទម្រង់ (Contract Shape) របស់ Object ដោយបញ្ជាក់ឈ្មោះ Properties និងប្រភេទទិន្នន័យ។ Object ទាំងឡាយណាដែលប្រើ Interface នេះ ត្រូវតែមាន Properties ត្រឹមត្រូវតាមនោះជានិច្ច។'
    },
    tutorial: {
      en: `Interface Syntax:

interface UserProfile {
  id: number;
  username: string;
  email: string;
}

const user1: UserProfile = {
  id: 1,
  username: "sokha",
  email: "sokha@example.com"
};`,
      km: `Syntax របស់ Interface:

interface UserProfile {
  id: number;
  username: string;
  email: string;
}

const user1: UserProfile = {
  id: 1,
  username: "sokha",
  email: "sokha@example.com"
};`
    },
    starterCode: {
      js: `interface Product {
  id: string;
  title: string;
  price: number;
}

const laptop: Product = {
  id: "P101",
  title: "Dell XPS 15",
  price: 1500
};

console.log(laptop.title);`
    },
    realWorldExample: {
      title: {
        en: 'API Response Data Contracts',
        km: 'ការកំណត់ Type លើទិន្នន័យពី API'
      },
      description: {
        en: 'When fetching data from backend REST endpoints, Interfaces model JSON objects with full IDE autocompletion.',
        km: 'ពេល Fetch ទិន្នន័យពី Backend API, Interface ជួយរៀបចំទម្រង់ JSON និងផ្តល់ Autocomplete ក្នុង Editor។'
      },
      code: `interface ApiResponse {
  status: number;
  message: string;
  data: UserProfile[];
}`
    },
    practiceExercise: {
      question: {
        en: 'Write an interface Student with id (number) and name (string).',
        km: 'សរសេរ interface Student មាន id (number) និង name (string)។'
      },
      solution: `interface Student {
  id: number;
  name: string;
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m3-1',
        question: {
          en: 'Which TypeScript keyword is used to describe the shape of an object?',
          km: 'តើ Keyword មួយណាដែលប្រើសម្រាប់រៀបចំទម្រង់ Shape របស់ Object ក្នុង TypeScript?'
        },
        options: [
          { id: '1', text: { en: 'interface', km: 'interface' }, isCorrect: true },
          { id: '2', text: { en: 'struct', km: 'struct' }, isCorrect: false },
          { id: '3', text: { en: 'shape', km: 'shape' }, isCorrect: false }
        ],
        explanation: {
          en: '`interface` is the primary syntax for describing object contracts in TS.',
          km: '`interface` ជា Syntax ចម្បងសម្រាប់រៀបចំ Object Contract ក្នុង TS។'
        }
      }
    ]
  },
  {
    id: 'ts-mod3-l2',
    slug: 'type-aliases-vs-interfaces',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: {
      en: 'Type Aliases vs Interfaces',
      km: 'ការប្រៀបធៀប Type Aliases និង Interfaces'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Both `type` aliases and `interface` can describe objects. However, `type` can also represent primitives, unions, and tuples (`type ID = string | number`). Interfaces can be reopened and extended (`interface Admin extends User`). Use `interface` for object structures and `type` for unions/primitives!',
      km: 'ទាំង `type` alias និង `interface` សុទ្ធតែអាចកំណត់ទម្រង់ Object បាន។ ប៉ុន្តែ `type` អាចតំណាងឲ្យ primitives, unions, និង tuples បានថែមទៀត (`type ID = string | number`)។ Interfaces អាច 확장/Extend បាន (`interface Admin extends User`)។'
    },
    tutorial: {
      en: `1. Type Alias Syntax:
type UserID = string | number; // Union type alias

type Point = {
  x: number;
  y: number;
};

2. Interface Extending:
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}`,
      km: `១. Syntax របស់ Type Alias:
type UserID = string | number; // Union type alias

type Point = {
  x: number;
  y: number;
};

២. ការ Extend Interface:
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}`
    },
    starterCode: {
      js: `type Status = "pending" | "approved" | "rejected";

interface BaseItem {
  id: string;
}

interface OrderItem extends BaseItem {
  quantity: number;
  status: Status;
}`
    },
    realWorldExample: {
      title: {
        en: 'Extending User Permissions',
        km: 'ការបន្ថែមសិទ្ធិប្រព័ន្ធ (Role Inheritance)'
      },
      description: {
        en: 'Extending interfaces lets admin shapes inherit all standard user fields cleanly without code duplication.',
        km: 'ការ Extend Interface ជួយឲ្យ Admin ទទួលយក Property ពី User ធម្មតា ដោយមិនបាច់សរសេរបន្ថែមជាន់គ្នា។'
      },
      code: `interface User { id: string; name: string; }
interface SuperAdmin extends User { permissions: string[]; }`
    },
    practiceExercise: {
      question: {
        en: 'Create a type alias named ID that allows string or number values.',
        km: 'បង្កើត type alias ឈ្មោះ ID ដែលអនុញ្ញាតឲ្យទទួលតម្លៃជា string ឬ number។'
      },
      solution: `type ID = string | number;`
    },
    quizQuestions: [
      {
        id: 'q-ts-m3-2',
        question: {
          en: 'Which capability belongs uniquely to type aliases compared to interfaces?',
          km: 'តើលក្ខណៈពិសេសមួយណាដែល type alias អាចធ្វើបាន តែ interface មិនអាចធ្វើបាន?'
        },
        options: [
          { id: '1', text: { en: 'Defining union primitive types like `string | number`.', km: 'ការប្រកាស Union primitive types ដូចជា `string | number`។' }, isCorrect: true },
          { id: '2', text: { en: 'Typing object properties.', km: 'ការកំណត់ Type លើ Object Properties។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Interfaces can only represent object shapes, whereas `type` can represent unions and primitives.',
          km: 'Interface កំណត់បានតែ Object, ចំណែក `type` អាចកំណត់ Union និង Primitives បាន។'
        }
      }
    ]
  },
  {
    id: 'ts-mod3-l3',
    slug: 'optional-and-readonly-properties',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: {
      en: 'Optional (?) & Readonly Properties',
      km: 'Properties បន្ថែម (?) និង Readonly Properties'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'In interfaces and types, suffixing a property name with `?` marks it as optional (value can be `undefined`). Prepending a property with the `readonly` keyword prevents re-assignment after object creation.',
      km: 'ក្នុង Interface, ការបន្ថែមសញ្ញាសួរ `?` បញ្ជាក់ថា Property នោះមិនបង្ខំ (Optional) បើគ្មានគឺតម្លៃ `undefined`។ ការប្រើពាក្យ `readonly` ការពារមិនឲ្យកែប្រែតម្លៃ Property នោះបានឡើយ បន្ទាប់ពីបង្កើត Object រួច។'
    },
    tutorial: {
      en: `Syntax:

interface Config {
  readonly apiKey: string; // Cannot be changed!
  theme?: "light" | "dark"; // Optional!
}

const appCfg: Config = {
  apiKey: "SECRET_KEY_123"
  // theme is omitted safely!
};

// appCfg.apiKey = "NEW_KEY"; // ❌ Error: Cannot assign to 'apiKey' because it is a read-only property.`,
      km: `Syntax:

interface Config {
  readonly apiKey: string; // មិនអាចកែបានទេ!
  theme?: "light" | "dark"; // មិនបង្ខំឡើយ!
}

const appCfg: Config = {
  apiKey: "SECRET_KEY_123"
};

// appCfg.apiKey = "NEW_KEY"; // ❌ Error: មិនអាចកែប្រែ read-only property បានទេ`
    },
    starterCode: {
      js: `interface Customer {
  readonly id: number;
  name: string;
  phone?: string; // Optional field
}

const c1: Customer = {
  id: 1001,
  name: "Vannak"
};
console.log(c1.phone); // undefined`
    },
    realWorldExample: {
      title: {
        en: 'Database Primary Keys & Immutable State',
        km: 'Primary Keys ក្នុង Database និង Immutable State'
      },
      description: {
        en: 'Database IDs should be `readonly` so application code accidentally never mutates database record identifiers.',
        km: 'Database ID គួរតែជា `readonly` ដើម្បីការពារក្រែងលោមានការច្រឡំកែប្រែ ID ក្នុង Application។'
      },
      code: `interface DbRecord { readonly _id: string; title: string; }`
    },
    practiceExercise: {
      question: {
        en: 'Add an optional email property to an interface Employee.',
        km: 'បន្ថែម property email ដែលមិនបង្ខំ (optional) ទៅកាន់ interface Employee។'
      },
      solution: `interface Employee {
  name: string;
  email?: string;
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m3-3',
        question: {
          en: 'What symbol marks an interface property as optional in TypeScript?',
          km: 'តើសញ្ញាអ្វីដែលកំណត់ឲ្យ Interface property ក្លាយជា Optional?'
        },
        options: [
          { id: '1', text: { en: '?', km: '?' }, isCorrect: true },
          { id: '2', text: { en: '!', km: '!' }, isCorrect: false },
          { id: '3', text: { en: ':', km: ':' }, isCorrect: false }
        ],
        explanation: {
          en: 'The question mark `?` after property name makes it optional.',
          km: 'សញ្ញាសួរ `?` បន្ទាប់ពីឈ្មោះ Property ធ្វើឲ្យវាក្លាយជា Optional។'
        }
      }
    ]
  },

  // MODULE 4: Functions with Types
  {
    id: 'ts-mod4-l1',
    slug: 'typing-function-parameters-return-values',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: {
      en: 'Typing Function Parameters & Return Values',
      km: 'ការកំណត់ Type លើ Function Parameters & Return Values'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'In TypeScript functions, each parameter should be explicitly typed. The return type is placed after the parameter parenthesis `): ReturnType`. If a function returns nothing, its return type is `void`.',
      km: 'ក្នុង Function របស់ TypeScript, គ្រប់ Parameter ទាំងអស់គួរតែមាន Type ច្បាស់លាស់។ ប្រភេទ Return Type ត្រូវបានដាក់បន្ទាប់ពីវង់ក្រចក `): ReturnType`។ បើ Function មិន Return អ្វីសោះ ប្រភេទរបស់វាគឺ `void`។'
    },
    tutorial: {
      en: `Function Signature Syntax:

function multiply(x: number, y: number): number {
  return x * y;
}

function logMessage(msg: string): void {
  console.log("LOG:", msg);
}`,
      km: `Syntax របស់ Function:

function multiply(x: number, y: number): number {
  return x * y;
}

function logMessage(msg: string): void {
  console.log("LOG:", msg);
}`
    },
    starterCode: {
      js: `function formatCurrency(amount: number, symbol: string): string {
  return symbol + amount.toFixed(2);
}

const result = formatCurrency(49.9, "$");
console.log(result); // "$49.90"`
    },
    realWorldExample: {
      title: {
        en: 'Strict Utility Functions',
        km: 'Utility Functions ក្នុងទីផ្សារការងារ'
      },
      description: {
        en: 'Explicit return types prevent developers from accidentally changing what a helper function returns during refactoring.',
        km: 'ការកំណត់ Return type ជួយការពារកុំឲ្យច្រឡំ Return ខុសប្រភេទពេលកែសម្រួលកូដ (Refactoring)។'
      },
      code: `const isEven = (num: number): boolean => num % 2 === 0;`
    },
    practiceExercise: {
      question: {
        en: 'Write an arrow function greet that takes name: string and returns a greeting string.',
        km: 'សរសេរ arrow function ឈ្មោះ greet ដែលទទួល name: string ហើយ return string សួស្តី។'
      },
      solution: `const greet = (name: string): string => \`Hello, \${name}\`;`
    },
    quizQuestions: [
      {
        id: 'q-ts-m4-1',
        question: {
          en: 'Which return type annotation is used for functions that perform side effects and return no value?',
          km: 'តើ Return type មួយណាប្រើសម្រាប់ Function ដែលមិន Return តម្លៃអ្វីសោះ?'
        },
        options: [
          { id: '1', text: { en: 'void', km: 'void' }, isCorrect: true },
          { id: '2', text: { en: 'null', km: 'null' }, isCorrect: false },
          { id: '3', text: { en: 'undefined', km: 'undefined' }, isCorrect: false }
        ],
        explanation: {
          en: '`void` indicates the complete absence of a returned value.',
          km: '`void` បញ្ជាក់ពីអវត្តមាននៃតម្លៃ Return។'
        }
      }
    ]
  },
  {
    id: 'ts-mod4-l2',
    slug: 'optional-default-function-parameters',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: {
      en: 'Optional & Default Function Parameters',
      km: 'Optional និង Default Function Parameters'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Function parameters can be optional using `?` (must come after required parameters). Alternatively, default parameter values automatically infer the type and make the parameter optional during calls.',
      km: 'Parameter របស់ Function អាចជា Optional តាមរយៈ `?` (ត្រូវតែស្ថិតនៅក្រោយ Parameter បង្ខំ)។ ឬអ្នកអាចប្រើ Default Value ដែលនឹងស្វែងយល់ Type ស្វ័យប្រវត្តិ និងមិនបង្ខំឲ្យញ្ជូនតម្លៃពេលរត់។'
    },
    tutorial: {
      en: `1. Optional Parameter:
function buildName(first: string, last?: string): string {
  return last ? \`\${first} \${last}\` : first;
}

2. Default Parameter:
function applyDiscount(price: number, discountRatio = 0.1): number {
  return price * (1 - discountRatio);
}`,
      km: `១. Optional Parameter:
function buildName(first: string, last?: string): string {
  return last ? \`\${first} \${last}\` : first;
}

២. Default Parameter:
function applyDiscount(price: number, discountRatio = 0.1): number {
  return price * (1 - discountRatio);
}`
    },
    starterCode: {
      js: `function sendNotification(msg: string, priority = "normal") {
  console.log(\`[\${priority.toUpperCase()}] \${msg}\`);
}

sendNotification("Server update complete"); // Uses default "normal"
sendNotification("Database disk full!", "critical");`
    },
    realWorldExample: {
      title: {
        en: 'Configurable Component Handlers',
        km: 'ការបង្កើត Function អាចកែសម្រួលបាន'
      },
      description: {
        en: 'Providing default parameters like pagination limits (`limit = 20`) simplifies call sites while maintaining flexibility.',
        km: 'ការប្រើ Default Parameter ដូចជា Pagination Limit (`limit = 20`) ជួយឲ្យហៅប្រើប្រាស់បានងាយស្រួល។'
      },
      code: `function fetchUsers(page = 1, limit = 10) { /* ... */ }`
    },
    practiceExercise: {
      question: {
        en: 'Write a function power with base: number and exponent defaulted to 2.',
        km: 'សរសេរ function power មាន base: number និង exponent មានតម្លៃដើមស្មើ 2។'
      },
      solution: `function power(base: number, exponent = 2): number {
  return Math.pow(base, exponent);
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m4-2',
        question: {
          en: 'Where must optional parameters (`param?: type`) be placed in a function signature?',
          km: 'តើ Parameter មិនបង្ខំ (`param?: type`) ត្រូវតែស្ថិតនៅកន្លែងណា ក្នុង Function?'
        },
        options: [
          { id: '1', text: { en: 'After all required parameters.', km: 'នៅខាងក្រោយ Parameter បង្ខំទាំងអស់។' }, isCorrect: true },
          { id: '2', text: { en: 'Before required parameters.', km: 'នៅខាងមុខ Parameter បង្ខំ។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Optional parameters must always follow required parameters to avoid call ambiguity.',
          km: 'Optional parameters ត្រូវតែស្ថិតនៅក្រោយ Parameter បង្ខំជានិច្ច។'
        }
      }
    ]
  },
  {
    id: 'ts-mod4-l3',
    slug: 'function-types-typed-callbacks',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: {
      en: 'Function Types & Typed Callbacks',
      km: 'Function Types និង Typed Callbacks'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'You can define custom function signature types using arrow notation: `(arg: Type) => ReturnType`. This is crucial when passing callbacks into asynchronous functions, event listeners, or array utilities.',
      km: 'អ្នកអាចកំណត់ទម្រង់ Function Type ផ្ទាល់ខ្លួន ដោយប្រើសញ្ញា Arrow: `(arg: Type) => ReturnType`។ វាមានសារៈសំខាន់ខ្លាំងណាស់ ពេលបញ្ជូន Callback ទៅកាន់ Async Functions ឬ Event Listeners។'
    },
    tutorial: {
      en: `Function Type Alias:

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

function executeMath(op: MathOperation, v1: number, v2: number) {
  return op(v1, v2);
}`,
      km: `Function Type Alias:

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

function executeMath(op: MathOperation, v1: number, v2: number) {
  return op(v1, v2);
}`
    },
    starterCode: {
      js: `type ClickHandler = (buttonId: string, timestamp: number) => void;

const onClick: ClickHandler = (id, time) => {
  console.log(\`Button \${id} clicked at \${time}\`);
};

onClick("btn-save", Date.now());`
    },
    realWorldExample: {
      title: {
        en: 'React Event Callback Handlers',
        km: 'Callback Handlers ក្នុង React'
      },
      description: {
        en: 'Typing callbacks like `onSelect: (id: string) => void` ensures parent components handle child events with full type safety.',
        km: 'ការកំណត់ Type លើ Callbacks ធានាថាកម្មវិធីមិនមានច្រឡំ Parameter ពេលបញ្ជូន Event ឆ្លងកាត់ Components។'
      },
      code: `interface Props { onSearch: (query: string) => void; }`
    },
    practiceExercise: {
      question: {
        en: 'Define a type alias Predicate that takes a string and returns a boolean.',
        km: 'កំណត់ type alias ឈ្មោះ Predicate ដែលទទួល string ហើយ return boolean។'
      },
      solution: `type Predicate = (val: string) => boolean;`
    },
    quizQuestions: [
      {
        id: 'q-ts-m4-3',
        question: {
          en: 'How is a function signature typed in a TypeScript type alias?',
          km: 'តើគេសរសេរកត់ត្រា Function signature ក្នុង TypeScript type alias យ៉ាងដូចម្តេច?'
        },
        options: [
          { id: '1', text: { en: '(param: Type) => ReturnType', km: '(param: Type) => ReturnType' }, isCorrect: true },
          { id: '2', text: { en: 'function(param: Type): ReturnType', km: 'function(param: Type): ReturnType' }, isCorrect: false }
        ],
        explanation: {
          en: 'Function type signatures use arrow syntax `(args) => ReturnType`.',
          km: 'Function type signatures ប្រើប្រាស់ Syntax Arrow `(args) => ReturnType`។'
        }
      }
    ]
  },

  // MODULE 5: Arrays & Tuples
  {
    id: 'ts-mod5-l1',
    slug: 'typed-arrays-generic-arrays',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: {
      en: 'Typed Arrays: string[] vs Array<T>',
      km: 'Typed Arrays: ទម្រង់ string[] ធៀបនឹង Array<T>'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'TypeScript offers two identical syntaxes for array typing: element-type notation (`string[]`) and generic array notation (`Array<string>`). Both provide identical type checks for array methods like `.push()`, `.filter()`, and `.map()`.',
      km: 'TypeScript ផ្តល់ជូន Syntax ពីរដែលមានសមត្ថភាពដូចគ្នា សម្រាប់ប្រកាស Array៖ Syntax ធម្មតា (`string[]`) និង Syntax Generic (`Array<string>`)។ ទាំងពីរផ្តល់ការត្រួតពិនិត្យលើ Method ដូចជា `.push()`, `.filter()` ស្មើគ្នា។'
    },
    tutorial: {
      en: `Equivalent Syntaxes:

let names: string[] = ["Bora", "Dalin"];
let ages: Array<number> = [18, 25, 30];

// Multidimensional arrays:
let matrix: number[][] = [
  [1, 2],
  [3, 4]
];`,
      km: `Syntax ដែលមានតម្លៃស្មើគ្នា:

let names: string[] = ["Bora", "Dalin"];
let ages: Array<number> = [18, 25, 30];

// Multidimensional arrays:
let matrix: number[][] = [
  [1, 2],
  [3, 4]
];`
    },
    starterCode: {
      js: `let cityList: Array<string> = ["Phnom Penh", "Siem Reap", "Battambang"];
cityList.push("Kampot");

console.log(cityList.length);`
    },
    realWorldExample: {
      title: {
        en: 'Type-Safe Array Transformations',
        km: 'ការកែប្រែ Array ដោយសុវត្ថិភាព'
      },
      description: {
        en: 'Array map operations automatically derive output element types based on function return statements.',
        km: 'ការប្រើ .map() លើ Array នឹងទទួលបាន Output Type ត្រឹមត្រូវស្វ័យប្រវត្តិ។'
      },
      code: `const nums: number[] = [10, 20, 30];
const formatted: string[] = nums.map(n => "$" + n);`
    },
    practiceExercise: {
      question: {
        en: 'Declare an array colors using the generic Array<T> syntax containing "red", "green", "blue".',
        km: 'ប្រកាសអថេរ colors តាម Generic Array<T> syntax ដែលមានតម្លៃ "red", "green", "blue"។'
      },
      solution: `let colors: Array<string> = ["red", "green", "blue"];`
    },
    quizQuestions: [
      {
        id: 'q-ts-m5-1',
        question: {
          en: 'Are `number[]` and `Array<number>` functionally different in TypeScript?',
          km: 'តើ `number[]` និង `Array<number>` មានលក្ខណៈខុសគ្នាក្នុង TypeScript ឬទេ?'
        },
        options: [
          { id: '1', text: { en: 'No, they are completely identical in type checking.', km: 'ទេ ពួកវាដូចគ្នាទាំងស្រុងក្នុងការត្រួតពិនិត្យ Type។' }, isCorrect: true },
          { id: '2', text: { en: 'Yes, Array<number> is slower at runtime.', km: 'បាទ/ចាស Array<number> រត់យឺតជាង។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Both syntaxes represent the exact same array type in the compiler.',
          km: 'Syntax ទាំងពីរតំណាងឲ្យ Array type ដូចគ្នាបេះបិទក្នុង Compiler។'
        }
      }
    ]
  },
  {
    id: 'ts-mod5-l2',
    slug: 'tuples-fixed-length-typed-arrays',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: {
      en: 'Tuples — Fixed-Length & Fixed-Type Arrays',
      km: 'Tuples — Array ដែលមានប្រវែង និងប្រភេទច្បាស់លាស់'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A Tuple is a special array with a fixed number of elements where each position has a specific known type. For example, `[string, number]` represents a tuple where index 0 must be a string and index 1 must be a number.',
      km: 'Tuple គឺជា Array ពិសេសដែលមានប្រវែងកំណត់ច្បាស់លាស់ ហើយធាតុតាមលំដាប់លំដោយ Index នីមួយៗមាន Type រៀងៗខ្លួន។ ឧទាហរណ៍ `[string, number]` កំណត់ថា Index 0 ជា string ហើយ Index 1 ជា number។'
    },
    tutorial: {
      en: `Tuple Syntax:

// Latitude, Longitude pair:
let coordinates: [number, number] = [11.5564, 104.9282];

// HTTP Response tuple [statusCode, statusText]:
let response: [number, string] = [200, "OK"];

// response = ["OK", 200]; // ❌ Error: Index types mismatched!`,
      km: `Syntax របស់ Tuple:

// គូអ័ក្ស Latitude, Longitude:
let coordinates: [number, number] = [11.5564, 104.9282];

// HTTP Response tuple [statusCode, statusText]:
let response: [number, string] = [200, "OK"];

// response = ["OK", 200]; // ❌ Error: ច្រឡំប្រភេទ Index!`
    },
    starterCode: {
      js: `type UserRoleRecord = [userId: number, role: string, isActive: boolean];

const currentSession: UserRoleRecord = [105, "admin", true];
console.log("User ID:", currentSession[0]);
console.log("Role:", currentSession[1]);`
    },
    realWorldExample: {
      title: {
        en: 'React useState Hook Return Value',
        km: 'useState Return Value ក្នុង React'
      },
      description: {
        en: 'React\'s `useState()` hook returns a Tuple `[stateValue, setStateFunction]`!',
        km: 'Hook `useState()` របស់ React រៀបចំ Return Value ជាទម្រង់ Tuple `[value, setValue]`!'
      },
      code: `const [count, setCount]: [number, (val: number) => void] = [0, () => {}];`
    },
    practiceExercise: {
      question: {
        en: 'Define a tuple type KeyValuePair containing a string key and number value.',
        km: 'បង្កើត tuple type ឈ្មោះ KeyValuePair ដែលមាន string key និង number value។'
      },
      solution: `type KeyValuePair = [string, number];`
    },
    quizQuestions: [
      {
        id: 'q-ts-m5-2',
        question: {
          en: 'What defines a Tuple in TypeScript compared to a standard Array?',
          km: 'តើអ្វីជាចំណុចសម្គាល់របស់ Tuple ធៀបនឹង Array ធម្មតា?'
        },
        options: [
          { id: '1', text: { en: 'Fixed length with explicit types assigned to each index position.', km: 'មានប្រវែងច្បាស់លាស់ និងមាន Type ជាក់លាក់តាមលំដាប់ Index នីមួយៗ។' }, isCorrect: true },
          { id: '2', text: { en: 'Can only contain string values.', km: 'អាចផ្ទុកបានតែតម្លៃ string ប៉ុណ្ណោះ។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Tuples enforce strict index-by-index position type ordering.',
          km: 'Tuple បង្ខំឲ្យមាន Type ត្រឹមត្រូវតាមលំដាប់លំដោយ Index។'
        }
      }
    ]
  },
  {
    id: 'ts-mod5-l3',
    slug: 'readonly-arrays-and-tuples',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: {
      en: 'Readonly Arrays & Readonly Tuples',
      km: 'Readonly Arrays និង Readonly Tuples'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'By applying `readonly` before array or tuple declarations (`readonly string[]` or `ReadonlyArray<number>`), you prevent mutation methods like `.push()`, `.pop()`, or element index mutation.',
      km: 'តាមរយៈការដាក់ `readonly` ពីមុខ Array ឬ Tuple (`readonly string[]`), អ្នកនឹងរារាំងមិនឲ្យមានការកែប្រែ ឬបន្ថែមធាតុតាមរយៈ `.push()`, `.pop()` ឬកែប្រែតាម Index បានឡើយ។'
    },
    tutorial: {
      en: `Readonly Syntax:

const immutableList: readonly string[] = ["A", "B", "C"];
// immutableList.push("D"); // ❌ Error: Property 'push' does not exist on type 'readonly string[]'.
// immutableList[0] = "Z";  // ❌ Error: Index signature is read-only.`,
      km: `Syntax របស់ Readonly:

const immutableList: readonly string[] = ["A", "B", "C"];
// immutableList.push("D"); // ❌ Error: គ្មាន method push ឡើយ!
// immutableList[0] = "Z";  // ❌ Error: មិនអាចកែតម្លៃក្នុង Index បានទេ!`
    },
    starterCode: {
      js: `const allowedOrigins: readonly string[] = [
  "https://sabaycode.com",
  "https://api.sabaycode.com"
];

console.log("Allowed count:", allowedOrigins.length);`
    },
    realWorldExample: {
      title: {
        en: 'Redux State Immutability',
        km: 'ការរក្សា State មិនឲ្យកែប្រែផ្ទាល់ (Immutability)'
      },
      description: {
        en: 'Readonly arrays enforce pure functional state mutations in state management stores.',
        km: 'Readonly arrays ជួយបង្ខំឲ្យសរសេរកូដតាមបែប Pure functional មិនកែប្រែ State ដើម។'
      },
      code: `type State = { readonly items: readonly string[]; };`
    },
    practiceExercise: {
      question: {
        en: 'Declare a readonly tuple point with two numbers.',
        km: 'ប្រកាស readonly tuple ឈ្មោះ point ដែលមានលេខពីរ។'
      },
      solution: `const point: readonly [number, number] = [10, 20];`
    },
    quizQuestions: [
      {
        id: 'q-ts-m5-3',
        question: {
          en: 'Which method call will trigger a compiler error on a `readonly string[]`?',
          km: 'តើការហៅ Method មួយណាដែលធ្វើឲ្យមាន Error លើ `readonly string[]`?'
        },
        options: [
          { id: '1', text: { en: '.push("item")', km: '.push("item")' }, isCorrect: true },
          { id: '2', text: { en: '.map(x => x)', km: '.map(x => x)' }, isCorrect: false },
          { id: '3', text: { en: '.length', km: '.length' }, isCorrect: false }
        ],
        explanation: {
          en: '`readonly` arrays disallow modifying methods like `.push()`, `.pop()`, and `.splice()`.',
          km: '`readonly` arrays ហាមឃាត់ Method កែប្រែទិន្នន័យដូចជា `.push()` និង `.pop()`។'
        }
      }
    ]
  },

  // MODULE 6: Enums
  {
    id: 'ts-mod6-l1',
    slug: 'numeric-enums',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: {
      en: 'Numeric Enums & Auto-Incrementing Values',
      km: 'Numeric Enums និងតម្លៃកើនឡើងស្វ័យប្រវត្តិ'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Enums (Enumerations) allow developers to define a set of named constants. By default, numeric enums assign auto-incrementing numbers starting at 0 to each member unless an explicit start value is provided.',
      km: 'Enums អនុញ្ញាតឲ្យអ្នកបង្កើតក្រុមនៃតម្លៃថេរដែលមានឈ្មោះច្បាស់លាស់។ តាមធម្មតា Numeric enums ផ្តល់តម្លៃលេខកើនឡើងស្វ័យប្រវត្តិ ចាប់ផ្តើមពី ០ លុះត្រាតែអ្នកកំណត់តម្លៃដើមដោយខ្លួនឯង។'
    },
    tutorial: {
      en: `Numeric Enum Syntax:

enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let move: Direction = Direction.Up;
console.log(move); // Prints 0`,
      km: `Syntax របស់ Numeric Enum:

enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let move: Direction = Direction.Up;
console.log(move); // បង្ហាញ 0`
    },
    starterCode: {
      js: `enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500
}

function handleResponse(code: HttpStatus) {
  if (code === HttpStatus.OK) {
    console.log("Success!");
  }
}

handleResponse(HttpStatus.OK);`
    },
    realWorldExample: {
      title: {
        en: 'HTTP Status Code Clean Constants',
        km: 'ការប្រើប្រាស់ HTTP Status Codes'
      },
      description: {
        en: 'Using `HttpStatus.NotFound` is far clearer and less error-prone than remembering raw magic numbers like `404`.',
        km: 'ការប្រើ `HttpStatus.NotFound` ងាយយល់ និងមិនងាយច្រឡំលេខ Magic numbers ដូចជា `404`។'
      },
      code: `if (res.status === HttpStatus.Created) { showToast(); }`
    },
    practiceExercise: {
      question: {
        en: 'Create an enum UserRole with Guest, Member, Admin.',
        km: 'បង្កើត enum ឈ្មោះ UserRole ដែលមាន Guest, Member, Admin។'
      },
      solution: `enum UserRole {
  Guest,
  Member,
  Admin
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m6-1',
        question: {
          en: 'What default numeric value is assigned to the first member of an uninitialized numeric enum?',
          km: 'តើតម្លៃដើមស្វ័យប្រវត្តិប៉ុន្មាន ត្រូវបានផ្តល់ឲ្យសមាជិកដំបូងនៃ Numeric Enum?'
        },
        options: [
          { id: '1', text: { en: '0', km: '0' }, isCorrect: true },
          { id: '2', text: { en: '1', km: '1' }, isCorrect: false },
          { id: '3', text: { en: '-1', km: '-1' }, isCorrect: false }
        ],
        explanation: {
          en: 'Uninitialized numeric enums start auto-incrementing from 0.',
          km: 'Numeric enums ដែលមិនបានកំណត់តម្លៃ ចាប់ផ្តើមរាប់ពី ០។'
        }
      }
    ]
  },
  {
    id: 'ts-mod6-l2',
    slug: 'string-enums',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: {
      en: 'String Enums & Readability',
      km: 'String Enums និងភាពងាយស្រួលអាន'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'In String Enums, every member must be initialized with a string literal. String enums do not auto-increment, but they provide meaningful, human-readable values during debugging and log output.',
      km: 'ក្នុង String Enums, សមាជិកនីមួយៗត្រូវតែភ្ជាប់ជាមួយតម្លៃជា String។ String enums មិនមានការរាប់លេខស្វ័យប្រវត្តិទេ ប៉ុន្តែវាផ្តល់នូវតម្លៃអត្ថបទងាយស្រួលអាន ពេលស្វែងរក Bug ក្នុង Log។'
    },
    tutorial: {
      en: `String Enum Syntax:

enum ThemeMode {
  Light = "LIGHT_MODE",
  Dark = "DARK_MODE",
  System = "SYSTEM_MODE"
}

let activeTheme: ThemeMode = ThemeMode.Dark;
console.log(activeTheme); // Prints "DARK_MODE"`,
      km: `Syntax របស់ String Enum:

enum ThemeMode {
  Light = "LIGHT_MODE",
  Dark = "DARK_MODE",
  System = "SYSTEM_MODE"
}

let activeTheme: ThemeMode = ThemeMode.Dark;
console.log(activeTheme); // បង្ហាញ "DARK_MODE"`
    },
    starterCode: {
      js: `enum PaymentStatus {
  Pending = "PENDING",
  Completed = "COMPLETED",
  Failed = "FAILED"
}

function printStatus(status: PaymentStatus) {
  console.log("Current State:", status);
}

printStatus(PaymentStatus.Pending);`
    },
    realWorldExample: {
      title: {
        en: 'Database Action Audit Logging',
        km: 'ការកត់ត្រា Log សកម្មភាពក្នុង System'
      },
      description: {
        en: 'String enum values like "USER_LOGGED_IN" are serialized clearly into database log tables.',
        km: 'តម្លៃ String enum ដូចជា "USER_LOGGED_IN" ត្រូវបានកត់ត្រាទុកក្នុង Database Log យ៉ាងច្បាស់លាស់។'
      },
      code: `enum AuditAction { Login = "AUTH_LOGIN", Logout = "AUTH_LOGOUT" }`
    },
    practiceExercise: {
      question: {
        en: 'Define a string enum OrderStatus with Processing = "PROCESSING" and Shipped = "SHIPPED".',
        km: 'បង្កើត string enum OrderStatus មាន Processing = "PROCESSING" និង Shipped = "SHIPPED"។'
      },
      solution: `enum OrderStatus {
  Processing = "PROCESSING",
  Shipped = "SHIPPED"
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m6-2',
        question: {
          en: 'Unlike numeric enums, do string enum members auto-increment?',
          km: 'ខុសពី numeric enums, តើសមាជិករបស់ string enum មានការកើនឡើងតម្លៃស្វ័យប្រវត្តិដែរឬទេ?'
        },
        options: [
          { id: '1', text: { en: 'No, every string enum member must be explicitly initialized.', km: 'ទេ សមាជិក string enum នីមួយៗត្រូវតែដាក់តម្លៃច្បាស់លាស់។' }, isCorrect: true },
          { id: '2', text: { en: 'Yes, they increment alphabetically.', km: 'បាទ/ចាស វាប្រកបអក្សរកើនឡើង។' }, isCorrect: false }
        ],
        explanation: {
          en: 'String enums do not auto-increment and require explicit string values.',
          km: 'String enums មិនកើនឡើងស្វ័យប្រវត្តិទេ និងតម្រូវឲ្យដាក់តម្លៃ String ច្បាស់លាស់។'
        }
      }
    ]
  },
  {
    id: 'ts-mod6-l3',
    slug: 'enums-vs-union-string-literals',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: {
      en: 'Enums vs Union of String Literals',
      km: 'ការប្រៀបធៀប Enums និង Union of String Literals'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Enums generate extra runtime JavaScript object code. In modern TypeScript development, many teams prefer using a union of string literals (`type ButtonVariant = "primary" | "secondary" | "outline"`), which emits ZERO compiled runtime JavaScript code.',
      km: 'Enums បង្កើតកូដ JavaScript Object បន្ថែមពេល Compile។ ក្នុងអភិវឌ្ឍន៍ modern TS, ក្រុមការងារជាច្រើននិយមប្រើ Union of String Literals (`type ButtonVariant = "primary" | "secondary"`) ព្រោះវាមិនបង្កើតកូដ JS លើសឡើយ (Zero runtime overhead)។'
    },
    tutorial: {
      en: `Enum vs Union String Literals:

// Approach A: Enum (Generates JS Object)
enum StatusEnum { Active = "ACTIVE", Inactive = "INACTIVE" }

// Approach B: Union Literal (Zero JS Output!)
type StatusUnion = "ACTIVE" | "INACTIVE";

let current: StatusUnion = "ACTIVE"; // Clean & zero build overhead!`,
      km: `Enum ធៀបនឹង Union String Literals:

// របៀប A: Enum (បង្កើត JS Object បន្ថែម)
enum StatusEnum { Active = "ACTIVE", Inactive = "INACTIVE" }

// របៀប B: Union Literal (គ្មាន JS Output លើស!)
type StatusUnion = "ACTIVE" | "INACTIVE";

let current: StatusUnion = "ACTIVE"; // ស្អាតបាត និងគ្មានកូដលើសពេល Build!`
    },
    starterCode: {
      js: `type Alignment = "left" | "center" | "right";

function setAlign(align: Alignment) {
  console.log("Aligning:", align);
}

setAlign("center");
// setAlign("top"); // ❌ Error: Argument of type '"top"' is not assignable to Alignment`
    },
    realWorldExample: {
      title: {
        en: 'UI Component Variant Props in React/Tailwind',
        km: 'Component Props ក្នុង React & Tailwind'
      },
      description: {
        en: 'String literal unions like `type Size = "sm" | "md" | "lg"` are the standard for typing component props.',
        km: 'Union string literals ដូចជា `type Size = "sm" | "md" | "lg"` ជាស្តង់ដារសម្រាប់ Component Props។'
      },
      code: `type ButtonVariant = "primary" | "secondary" | "danger";`
    },
    practiceExercise: {
      question: {
        en: 'Write a type alias NetworkState using string literal union of "idle", "loading", "success", "error".',
        km: 'សរសេរ type alias ឈ្មោះ NetworkState ដោយប្រើ union នៃ "idle", "loading", "success", "error"។'
      },
      solution: `type NetworkState = "idle" | "loading" | "success" | "error";`
    },
    quizQuestions: [
      {
        id: 'q-ts-m6-3',
        question: {
          en: 'What is the main compiler efficiency benefit of string literal union types over Enums?',
          km: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃ Union string literals ធៀបនឹង Enums ពេល Compile?'
        },
        options: [
          { id: '1', text: { en: 'Zero emitted JavaScript runtime code (erased completely during compilation).', km: 'គ្មានបង្កើតកូដ JavaScript លើសពេលរត់ (លុបចេញទាំងស្រុងពេល Compile)។' }, isCorrect: true },
          { id: '2', text: { en: 'Unions run faster in SQL databases.', km: 'Unions រត់លឿនជាងក្នុង SQL Database។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Union string literal types exist solely at compile-time and leave no trace in generated .js files.',
          km: 'Union string literal types មានតែពេល Compile ហើយមិនបន្សល់កូដក្នុងឯកសារ .js ឡើយ។'
        }
      }
    ]
  }
];
