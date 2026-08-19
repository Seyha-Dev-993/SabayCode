import { FrontendCourse, FrontendQuizQuestion } from '../types/frontendClass';
import { TYPESCRIPT_LESSONS_PART1 } from './typescriptLessonsPart1';
import { TYPESCRIPT_LESSONS_PART2 } from './typescriptLessonsPart2';

const TYPESCRIPT_CHEAT_SHEET = [
  {
    concept: 'Basic Type Annotations',
    code: `let username: string = "Dara";
let age: number = 25;
let isActive: boolean = true;
let scores: number[] = [90, 85, 100];
let tupleVal: [string, number] = ["ID-1", 500];`,
    explanation: {
      en: 'Type annotations attach explicit primitive or structural constraints to variables and arrays.',
      km: 'Type annotations កំណត់លក្ខខណ្ឌ Type លើអថេរ និង Array យ៉ាងច្បាស់លាស់។'
    }
  },
  {
    concept: 'Interface vs Type Alias',
    code: `// Interface (Extensible Object Contracts)
interface User {
  id: string;
  name: string;
  role?: "admin" | "student"; // Optional union property
}

// Type Alias (Unions, Primitives, Objects)
type ID = string | number;
type Status = "pending" | "approved" | "rejected";`,
    explanation: {
      en: 'Use `interface` for expandable object contracts and `type` for unions or primitive aliases.',
      km: 'ប្រើ `interface` សម្រាប់ Object Contracts និង `type` សម្រាប់ Unions ឬ Primitives។'
    }
  },
  {
    concept: 'Typed Functions & Callbacks',
    code: `function add(a: number, b: number): number {
  return a + b;
}

type ClickHandler = (id: string) => void;
const onSave: ClickHandler = (id) => console.log("Saved", id);`,
    explanation: {
      en: 'Explicit parameter types and return annotations ensure type safety across functions.',
      km: 'ការកំណត់ Type លើ Parameter និង Return annotation ធានាសុវត្ថិភាព Function។'
    }
  },
  {
    concept: 'Generics Syntax',
    code: `function identity<T>(value: T): T {
  return value;
}

interface ApiResponse<T> {
  status: number;
  data: T;
}`,
      explanation: {
        en: 'Generics capture type parameters `<T>` for reusable, type-safe structures.',
        km: 'Generics ប្រើ Type parameter `<T>` សម្រាប់បង្កើត Structure ដែលអាចយកមកប្រើឡើងវិញបាន។'
      }
  },
  {
    concept: 'Common Utility Types',
    code: `interface Task { id: string; title: string; completed: boolean; }

type PartialTask = Partial<Task>;   // All fields optional
type TaskPreview = Pick<Task, "id" | "title">; // Pick specific fields
type UserMap = Record<string, Task>; // Dictionary map key:value`,
    explanation: {
      en: 'Built-in utility types like `Partial<T>`, `Pick<T, K>`, and `Record<K, V>` transform existing types.',
      km: 'Utility types រួមមាន `Partial<T>`, `Pick<T, K>`, និង `Record<K, V>` សម្រាប់កែប្រែ Type មានស្រាប់។'
    }
  },
  {
    concept: 'Common Mistakes Checklist',
    code: `// ❌ Overusing 'any' -> Lose all TS protection!
// ❌ Forgetting 'strict' mode in tsconfig.json!
// ❌ Using 'interface' when defining union string literals (use 'type')!
// ❌ Forgetting optional chaining with nullable objects (user?.email)!`,
    explanation: {
      en: 'Avoid overusing `any`, always keep `"strict": true` enabled, and handle `null/undefined` explicitly.',
      km: 'ជៀសវាងការប្រើ `any`, បើក `"strict": true` ជានិច្ច និងចាត់ចែង `null/undefined` ឲ្យបានត្រឹមត្រូវ។'
    }
  }
];

const TYPESCRIPT_QUIZ: FrontendQuizQuestion[] = [
  {
    id: 'q-ts-full-1',
    question: {
      en: 'Will the following TypeScript code compile without errors?',
      km: 'តើកូដ TypeScript ខាងក្រោមនេះនឹង Compile ដោយគ្មាន Error ដែរឬទេ?'
    },
    codeSnippet: `let count: number = 10;
count = "20";`,
    options: [
      { id: '1', text: { en: 'No, type error: string is not assignable to type number.', km: 'ទេ មាន Type Error: មិនអាចយក string ទៅដាក់ក្នុង number បានឡើយ។' }, isCorrect: true },
      { id: '2', text: { en: 'Yes, because JavaScript converts strings to numbers automatically.', km: 'បាទ/ចាស ព្រោះ JS បំប្លែង string ទៅ number ស្វ័យប្រវត្តិ។' }, isCorrect: false }
    ],
    explanation: {
      en: 'TypeScript locks `count` to the `number` primitive type and rejects string assignment at compile time.',
      km: 'TypeScript កំណត់អថេរ `count` ជា `number` រួចហើយ ដូច្នេះវាមិនអនុញ្ញាតឲ្យបញ្ចូល string ឡើយ។'
    }
  },
  {
    id: 'q-ts-full-2',
    question: {
      en: 'Which interface property modifier prevents changing a property value after creation?',
      km: 'តើ Modifier មួយណាលើ Interface property ដែលរារាំងមិនឲ្យកែប្រែតម្លៃ បន្ទាប់ពីបង្កើតរួច?'
    },
    options: [
      { id: '1', text: { en: 'readonly', km: 'readonly' }, isCorrect: true },
      { id: '2', text: { en: 'static', km: 'static' }, isCorrect: false },
      { id: '3', text: { en: 'const', km: 'const' }, isCorrect: false }
    ],
    explanation: {
      en: '`readonly` properties cannot be reassigned after the object is constructed.',
      km: '`readonly` properties មិនអាចកែប្រែតម្លៃបានឡើយ បន្ទាប់ពីបង្កើត Object រួច។'
    }
  },
  {
    id: 'q-ts-full-3',
    question: {
      en: 'What is the return type of a function that never returns a value (e.g. throws an error or infinite loop)?',
      km: 'តើ Return type របស់ Function ដែលមិនដែល Return តម្លៃសោះ (ឧ. បោះ Error ឬរត់ Infinite loop) ជាអ្វី?'
    },
    options: [
      { id: '1', text: { en: 'never', km: 'never' }, isCorrect: true },
      { id: '2', text: { en: 'void', km: 'void' }, isCorrect: false },
      { id: '3', text: { en: 'null', km: 'null' }, isCorrect: false }
    ],
    explanation: {
      en: '`never` represents values that NEVER occur (e.g. functions that always throw or loop indefinitely).',
      km: '`never` តំណាងឲ្យតម្លៃដែលមិនដែលកើតឡើងសោះ (ដូចជា Function ដែលបោះ Error ជានិច្ច)។'
    }
  },
  {
    id: 'q-ts-full-4',
    question: {
      en: 'Which type narrowing operator safely checks if a property exists on an object union?',
      km: 'តើ Operator មួយណាដែលពិនិត្យថា Property មានក្នុង Object union ដោយសុវត្ថិភាព?'
    },
    options: [
      { id: '1', text: { en: '"prop" in object', km: '"prop" in object' }, isCorrect: true },
      { id: '2', text: { en: 'object.contains("prop")', km: 'object.contains("prop")' }, isCorrect: false }
    ],
    explanation: {
      en: 'The `in` operator checks if a property key exists in an object shape for type narrowing.',
      km: 'Operator `in` ពិនិត្យមើលថាឈ្មោះ Property មានក្នុង Object ឬអត់។'
    }
  },
  {
    id: 'q-ts-full-5',
    question: {
      en: 'What compiler flag in tsconfig.json enforces strict null and undefined checks?',
      km: 'តើ Flag មួយណា ក្នុង tsconfig.json ដែលបង្ខំឲ្យមានការពិនិត្យ null និង undefined ម៉ឺងម៉ាត់?'
    },
    options: [
      { id: '1', text: { en: '"strictNullChecks": true', km: '"strictNullChecks": true' }, isCorrect: true },
      { id: '2', text: { en: '"noNull": true', km: '"noNull": true' }, isCorrect: false }
    ],
    explanation: {
      en: '`strictNullChecks` prevents calling methods on potential null/undefined references.',
      km: '`strictNullChecks` ការពារមិនឲ្យហៅ Method លើ Reference ដែលអាចជា null/undefined។'
    }
  },
  {
    id: 'q-ts-full-6',
    question: {
      en: 'How do you type a tuple containing a string and a boolean in TypeScript?',
      km: 'តើគេសរសេរកំណត់ Type លើ Tuple ដែលមាន string និង boolean យ៉ាងដូចម្តេច?'
    },
    options: [
      { id: '1', text: { en: '[string, boolean]', km: '[string, boolean]' }, isCorrect: true },
      { id: '2', text: { en: '(string, boolean)', km: '(string, boolean)' }, isCorrect: false },
      { id: '3', text: { en: 'Array<string | boolean>', km: 'Array<string | boolean>' }, isCorrect: false }
    ],
    explanation: {
      en: 'Square brackets `[TypeA, TypeB]` specify exact index tuple positions.',
      km: 'វង់ក្រចកកែង `[TypeA, TypeB]` កំណត់ទីតាំង Index របស់ Tuple យ៉ាងច្បាស់លាស់។'
    }
  },
  {
    id: 'q-ts-full-7',
    question: {
      en: 'What is the compiled output of an interface declaration in JavaScript?',
      km: 'តើលទ្ធផល Compiled ចេញពីការប្រកាស Interface ក្នុង JavaScript ជាអ្វី?'
    },
    options: [
      { id: '1', text: { en: 'Nothing (completely erased from the .js file).', km: 'គ្មានអ្វីសោះ (ត្រូវបានលុបចេញទាំងស្រុងពីឯកសារ .js)។' }, isCorrect: true },
      { id: '2', text: { en: 'A JavaScript class.', km: 'JavaScript class' }, isCorrect: false }
    ],
    explanation: {
      en: 'TypeScript interfaces exist only at compile time and leave zero output in generated JS files.',
      km: 'TypeScript interfaces មានតែពេល Compile ប៉ុណ្ណោះ ហើយមិនបន្សល់កូដក្នុង JS ឡើយ។'
    }
  },
  {
    id: 'q-ts-full-8',
    question: {
      en: 'Which generic signature correctly constrains T to types that possess an `.id` string property?',
      km: 'តើ Generic signature មួយណាដែលកំណត់លក្ខខណ្ឌឲ្យ T ត្រូវតែមាន property `.id` ជា string?'
    },
    options: [
      { id: '1', text: { en: '<T extends { id: string }>', km: '<T extends { id: string }>' }, isCorrect: true },
      { id: '2', text: { en: '<T implements { id: string }>', km: '<T implements { id: string }>' }, isCorrect: false }
    ],
    explanation: {
      en: 'Generic constraints use the `extends` keyword.',
      km: 'Generic constraints ប្រើប្រាស់ keyword `extends`។'
    }
  }
];

export const TYPESCRIPT_COURSE_DATA: FrontendCourse = {
  id: 'typescript',
  title: {
    en: 'TypeScript Course',
    km: 'វគ្គសិក្សា TypeScript'
  },
  iconName: 'typescript',
  categoryId: 'language',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Master static types, interfaces, generics, enums, type narrowing, tsconfig, and React integration.',
    km: 'រៀន static types, interfaces, generics, enums, type narrowing, tsconfig, និងការប្រើជាមួយ React។'
  },
  summary: {
    en: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling, early compile-time bug detection, safer refactoring, and enterprise-grade maintainability.',
    km: 'TypeScript គឺជា JavaScript ដែលមាន Type System បន្ថែម ជួយឲ្យរកឃើញកំហុសមុនពេល Run កូដ និងធ្វើឲ្យកូដធំៗកាន់តែមានលក្ខណៈ Maintainable។'
  },
  estimatedHours: 8,
  lessonCount: 36, // 12 modules * 3 lessons = 36 total lessons!
  cheatSheet: TYPESCRIPT_CHEAT_SHEET,
  quiz: TYPESCRIPT_QUIZ,
  capstoneProject: {
    title: {
      en: 'Typed To-Do List Application Capstone',
      km: 'គម្រោង Capstone: កម្មវិធី Typed To-Do List'
    },
    description: {
      en: 'Take an existing JavaScript To-Do List app and refactor it into strict-mode TypeScript! Create a `Task` interface, typed functions for add/remove/toggle, enum filter statuses, and compile with zero type errors.',
      km: 'បំប្លែងកម្មវិធី To-Do List ពី JavaScript ទៅជា TypeScript ដែលមាន Type Safety 100%! បង្កើត `Task` interface, typed functions សម្រាប់ add/remove/toggle, enum filter statuses និង compile ដោយគ្មាន Error។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Typed To-Do List</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 min-h-screen font-sans">
  <div class="max-w-md mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
    <div class="flex items-center gap-2 border-b border-slate-800 pb-3">
      <div class="size-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">TS</div>
      <h2 class="text-xl font-bold">Typed Task Manager</h2>
    </div>

    <!-- Add Task Form -->
    <div class="flex gap-2">
      <input id="taskInput" type="text" placeholder="បញ្ចូលភារកិច្ចថ្មី..." class="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
      <button id="addBtn" class="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl text-sm font-bold transition">បន្ថែម</button>
    </div>

    <!-- Filter Buttons -->
    <div class="flex gap-2 text-xs font-bold pt-2">
      <button class="bg-slate-800 text-blue-400 px-3 py-1 rounded-lg border border-blue-500/30">ទាំងអស់</button>
      <button class="bg-slate-950 text-slate-400 px-3 py-1 rounded-lg">មិនទាន់រួច</button>
      <button class="bg-slate-950 text-slate-400 px-3 py-1 rounded-lg">រួចរាល់</button>
    </div>

    <!-- Task List -->
    <ul id="taskList" class="space-y-2 pt-2">
      <!-- Dynamic Tasks Rendered Here -->
    </ul>
  </div>

  <script>
    // Expected Compiled TypeScript Output Demonstration
    interface Task {
      id: string;
      title: string;
      completed: boolean;
      createdAt: Date;
    }

    enum TaskFilter {
      All = "ALL",
      Active = "ACTIVE",
      Completed = "COMPLETED"
    }

    class TaskManager {
      private tasks = [];

      addTask(title) {
        if (!title.trim()) return;
        const newTask = {
          id: "T-" + Date.now(),
          title: title,
          completed: false,
          createdAt: new Date()
        };
        this.tasks.push(newTask);
        this.render();
      }

      toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
          task.completed = !task.completed;
          this.render();
        }
      }

      removeTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.render();
      }

      render() {
        const listEl = document.getElementById("taskList");
        if (!listEl) return;
        listEl.innerHTML = this.tasks.map(t => \`
          <li class="flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded-xl text-sm">
            <span class="\${t.completed ? 'line-through text-slate-500' : 'text-slate-200'}">\${t.title}</span>
            <div class="flex gap-2">
              <button onclick="app.toggleTask('\${t.id}')" class="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-lg border border-emerald-500/30">
                \${t.completed ? 'Undo' : 'Done'}
              </button>
              <button onclick="app.removeTask('\${t.id}')" class="text-xs bg-rose-500/20 text-rose-300 px-2 py-1 rounded-lg border border-rose-500/30">
                លុប
              </button>
            </div>
          </li>
        \`).join("");
      }
    }

    const app = new TaskManager();
    app.addTask("រៀន TypeScript Interfaces");
    app.addTask("បង្កើត Capstone Project");

    document.getElementById("addBtn").addEventListener("click", () => {
      const input = document.getElementById("taskInput");
      app.addTask(input.value);
      input.value = "";
    });
  </script>
</body>
</html>`
    }
  },
  lessons: [
    ...TYPESCRIPT_LESSONS_PART1,
    ...TYPESCRIPT_LESSONS_PART2
  ]
};
