import { FrontendLesson } from '../types/frontendClass';

export const TYPESCRIPT_LESSONS_PART2: FrontendLesson[] = [
  // MODULE 7: Union & Intersection Types
  {
    id: 'ts-mod7-l1',
    slug: 'union-types-pipe-operator',
    moduleNumber: 7,
    lessonNumberInModule: 1,
    title: {
      en: 'Union Types with the Pipe (|) Operator',
      km: 'Union Types ជាមួយសញ្ញា Pipe (|)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A Union type describes a value that can be one of several types using the pipe (`|`) character. For instance, `string | number` allows a variable to hold either a string value or a numeric value.',
      km: 'Union type ពណ៌នាអំពីអថេរដែលអាចផ្ទុកតម្លៃបានច្រើនប្រភេទ ដោយប្រើប្រាស់សញ្ញា Pipe (`|`)។ ឧទាហរណ៍ `string | number` អនុញ្ញាតឲ្យអថេរផ្ទុកតម្លៃជា string ក៏បាន ឬលេខ (number) ក៏បាន។'
    },
    tutorial: {
      en: `Union Syntax:

let accountId: string | number;
accountId = "ACC-9921"; // ✅ Valid
accountId = 10098;       // ✅ Valid
// accountId = true;     // ❌ Error: boolean not in union!`,
      km: `Syntax របស់ Union:

let accountId: string | number;
accountId = "ACC-9921"; // ✅ ត្រឹមត្រូវ
accountId = 10098;       // ✅ ត្រឹមត្រូវ
// accountId = true;     // ❌ Error: boolean មិនស្ថិតក្នុង union ឡើយ!`
    },
    starterCode: {
      js: `function printId(id: string | number) {
  console.log("Account Identifier:", id);
}

printId(501);
printId("USR-773");`
    },
    realWorldExample: {
      title: {
        en: 'Flexible API Parameter Types',
        km: 'ការទទួល Parameters ច្រើនទម្រង់'
      },
      description: {
        en: 'Union types accept both database IDs formatted as numeric sequence or UUID strings cleanly.',
        km: 'Union types អនុញ្ញាតឲ្យទទួល ID ជាលេខរៀង ឬជា UUID string បានយ៉ាងរលូន។'
      },
      code: `function findUser(id: number | string) { /* ... */ }`
    },
    practiceExercise: {
      question: {
        en: 'Declare a variable result with a union type that accepts boolean or string.',
        km: 'ប្រកាសអថេរ result ដែលមាន union type ទទួលតម្លៃ boolean ឬ string។'
      },
      solution: `let result: boolean | string;`
    },
    quizQuestions: [
      {
        id: 'q-ts-m7-1',
        question: {
          en: 'Which character is used to separate types in a TypeScript union declaration?',
          km: 'តើសញ្ញាអ្វីដែលប្រើសម្រាប់ខណ្ឌចែក Type ក្នុង Union declaration?'
        },
        options: [
          { id: '1', text: { en: '|', km: '|' }, isCorrect: true },
          { id: '2', text: { en: '&', km: '&' }, isCorrect: false },
          { id: '3', text: { en: ':', km: ':' }, isCorrect: false }
        ],
        explanation: {
          en: 'The pipe character `|` defines union options.',
          km: 'សញ្ញា Pipe `|` កំណត់ជម្រើសរបស់ Union។'
        }
      }
    ]
  },
  {
    id: 'ts-mod7-l2',
    slug: 'narrowing-unions-typeof-if-checks',
    moduleNumber: 7,
    lessonNumberInModule: 2,
    title: {
      en: 'Narrowing Union Types with typeof & if Checks',
      km: 'ការបង្រួមប្រភេទ Union ដោយប្រើ typeof & if Checks'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'When working with union types (e.g. `string | number`), TypeScript restricts you to methods shared by ALL union members until you "narrow" the type using control flow checks like `if (typeof val === "string")`. Inside the `if` block, TypeScript knows the exact type!',
      km: 'ពេលប្រើ Union types, TypeScript អនុញ្ញាតឲ្យប្រើតែ Method ណាដែលមានរួមគ្នាប៉ុណ្ណោះ រហូតដល់អ្នកបង្រួម (Narrow) Type ដោយប្រើ `if (typeof val === "string")`។ ខាងក្នុង `if` block, TypeScript នឹងស្គាល់ប្រភេទច្បាស់លាស់ 100%!'
    },
    tutorial: {
      en: `Type Narrowing Example:

function formatInput(val: string | number): string {
  if (typeof val === "string") {
    // Inside this branch, TS knows val is ONLY a string!
    return val.toUpperCase(); 
  } else {
    // Inside this branch, TS knows val is ONLY a number!
    return "$" + val.toFixed(2);
  }
}`,
      km: `ឧទាហរណ៍ Type Narrowing:

function formatInput(val: string | number): string {
  if (typeof val === "string") {
    // ក្នុង Branch នេះ TS ដឹងថា val ជា string 100%!
    return val.toUpperCase(); 
  } else {
    // ក្នុង Branch នេះ TS ដឹងថា val ជា number 100%!
    return "$" + val.toFixed(2);
  }
}`
    },
    starterCode: {
      js: `function calculateDiscount(codeOrAmount: string | number): number {
  if (typeof codeOrAmount === "number") {
    return codeOrAmount;
  }
  // If string, parse code length as discount percentage
  return codeOrAmount.length * 5;
}

console.log(calculateDiscount(20)); // 20
console.log(calculateDiscount("PROMO")); // 25`
    },
    realWorldExample: {
      title: {
        en: 'Handling Heterogeneous API Payload Values',
        km: 'ការចាត់ចែងតម្លៃទិន្នន័យចម្រុះពី API'
      },
      description: {
        en: 'Safely inspecting string messages vs numeric error codes returned by external microservices.',
        km: 'ការពិនិត្យប្រភេទសារ Error ជាអត្ថបទ ធៀបនឹង Error Code ជាលេខដោយសុវត្ថិភាព។'
      },
      code: `if (typeof err === "string") { alert(err); }`
    },
    practiceExercise: {
      question: {
        en: 'Write an if check using typeof input === "number" to return input * 2.',
        km: 'សរសេរ if check ប្រើ typeof input === "number" ដើម្បី return input * 2។'
      },
      solution: `if (typeof input === "number") {
  return input * 2;
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m7-2',
        question: {
          en: 'What process allows TypeScript to isolate a specific type from a union inside a code block?',
          km: 'តើដំណើរការអ្វីដែលជួយឲ្យ TypeScript ញែកប្រភេទ Type ច្បាស់លាស់ចេញពី Union ក្នុង Code block?'
        },
        options: [
          { id: '1', text: { en: 'Type Narrowing', km: 'Type Narrowing' }, isCorrect: true },
          { id: '2', text: { en: 'Type Casting', km: 'Type Casting' }, isCorrect: false }
        ],
        explanation: {
          en: 'Type Narrowing uses control flow guards like `typeof` to narrow union bounds.',
          km: 'Type Narrowing ប្រើប្រាស់ Guard ដូចជា `typeof` ដើម្បីបង្រួមដែនកំណត់ Union។'
        }
      }
    ]
  },
  {
    id: 'ts-mod7-l3',
    slug: 'intersection-types-ampersand-operator',
    moduleNumber: 7,
    lessonNumberInModule: 3,
    title: {
      en: 'Intersection Types with the Ampersand (&) Operator',
      km: 'Intersection Types ជាមួយសញ្ញា Ampersand (&)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'An Intersection type combines multiple types into ONE unified type using the ampersand (`&`) operator. An object of an intersection type must contain ALL properties from every intersected type.',
      km: 'Intersection type រួមបញ្ចូល Type ច្រើនបញ្ចូលគ្នាទៅជា Type តែមួយ ដោយប្រើប្រាស់សញ្ញា Ampersand (`&`)។ Object ណាដែលប្រើ Intersection type ត្រូវតែមាន Properties ទាំងអស់នៃគ្រប់ Type ដែលបានរួមបញ្ចូលគ្នានោះ។'
    },
    tutorial: {
      en: `Intersection Syntax:

type Person = { name: string };
type Employee = { employeeId: number };

// Staff member MUST have both name AND employeeId!
type StaffMember = Person & Employee;

const staff1: StaffMember = {
  name: "Kosal",
  employeeId: 8092
};`,
      km: `Syntax របស់ Intersection:

type Person = { name: string };
type Employee = { employeeId: number };

// StaffMember ត្រូវតែមានទាំង name និង employeeId!
type StaffMember = Person & Employee;

const staff1: StaffMember = {
  name: "Kosal",
  employeeId: 8092
};`
    },
    starterCode: {
      js: `type Timestamped = { createdAt: Date; updatedAt: Date };
type UserAccount = { id: string; email: string };

type DbUser = UserAccount & Timestamped;

const userRecord: DbUser = {
  id: "U-100",
  email: "user@domain.com",
  createdAt: new Date(),
  updatedAt: new Date()
};`
    },
    realWorldExample: {
      title: {
        en: 'Combining Reusable Interface Mixins',
        km: 'ការរួមបញ្ចូល Reusable Interfaces'
      },
      description: {
        en: 'Merging domain entity properties with metadata audit shapes (`Entity & AuditFields`).',
        km: 'ការបូកបញ្ចូលទម្រង់ Entity ជាមួយ Audit metadata fields ដូចជា createdAt និង updatedAt។'
      },
      code: `type FullProduct = ProductInfo & PricingTier & AuditTrail;`
    },
    practiceExercise: {
      question: {
        en: 'Combine two types HasName = { name: string } and HasAge = { age: number } into HasProfile.',
        km: 'រួមបញ្ចូលពីរ types HasName និង HasAge ទៅជា HasProfile ដោយប្រើសញ្ញា &។'
      },
      solution: `type HasProfile = HasName & HasAge;`
    },
    quizQuestions: [
      {
        id: 'q-ts-m7-3',
        question: {
          en: 'Which operator creates an Intersection type in TypeScript?',
          km: 'តើសញ្ញាប្រតិបត្តិការមួយណាដែលបង្កើត Intersection type ក្នុង TypeScript?'
        },
        options: [
          { id: '1', text: { en: '&', km: '&' }, isCorrect: true },
          { id: '2', text: { en: '|', km: '|' }, isCorrect: false },
          { id: '3', text: { en: '+', km: '+' }, isCorrect: false }
        ],
        explanation: {
          en: 'The ampersand `&` combines multiple type properties into an intersection type.',
          km: 'សញ្ញា `&` រួមបញ្ចូល Properties នៃ Type ច្រើនទៅជា Intersection type។'
        }
      }
    ]
  },

  // MODULE 8: Generics
  {
    id: 'ts-mod8-l1',
    slug: 'why-generics-exist',
    moduleNumber: 8,
    lessonNumberInModule: 1,
    title: {
      en: 'Why Generics Exist — Reusable Type-Safe Code',
      km: 'ហេតុអ្វីបានជាត្រូវប្រើ Generics — កូដដែល Reusable និង Type-Safe'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'Generics allow you to create reusable components and functions that work across a variety of types rather than a single one, while STILL maintaining full type safety (unlike using `any`).',
      km: 'Generics អនុញ្ញាតឲ្យអ្នកបង្កើត Components និង Functions ដែលអាចយកមកប្រើឡើងវិញបានជាមួយប្រភេទទិន្នន័យ (Types) ចម្រុះ ដោយនៅតែរក្សាសុវត្ថិភាព Type Safety 100% (មិនដូចការប្រើ `any` ឡើយ)។'
    },
    tutorial: {
      en: `The Problem without Generics:

// Without Generics (Uses 'any' - unsafe!):
function identityAny(arg: any): any { return arg; }

// With Generics (Type-safe variable placeholder T!):
function identity<T>(arg: T): T { return arg; }

let strResult = identity<string>("Hello"); // Returns string!
let numResult = identity<number>(100);     // Returns number!`,
      km: `បញ្ហាប្រសិនបើគ្មាន Generics:

// គ្មាន Generics (ប្រើ 'any' - គ្មានសុវត្ថិភាព!):
function identityAny(arg: any): any { return arg; }

// មាន Generics (ប្រើ Type Parameter T ជានិមិត្តរូប):
function identity<T>(arg: T): T { return arg; }

let strResult = identity<string>("Hello"); // Return ជា string!
let numResult = identity<number>(100);     // Return ជា number!`
    },
    starterCode: {
      js: `function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNumber = getFirstElement([10, 20, 30]); // Type is number
const firstString = getFirstElement(["A", "B", "C"]); // Type is string`
    },
    realWorldExample: {
      title: {
        en: 'Type-Safe API Fetch Wrapper Functions',
        km: 'Wrapper Function សម្រាប់ Fetch ទិន្នន័យពី API'
      },
      description: {
        en: 'Generic HTTP client functions return `Promise<T>`, allowing callers to get typed JSON bodies for any endpoint.',
        km: 'Generic HTTP functions ផ្តល់ Return value ជា `Promise<T>` ជួយឲ្យទទួលបាន JSON មាន Type ត្រឹមត្រូវតាម Endpoint។'
      },
      code: `async function fetchApi<T>(url: string): Promise<T> { /* ... */ }`
    },
    practiceExercise: {
      question: {
        en: 'Write a generic function wrapInArray<T>(item: T): T[] that returns item inside an array.',
        km: 'សរសេរ generic function wrapInArray<T>(item: T): T[] ដែល return item ខាងក្នុង array។'
      },
      solution: `function wrapInArray<T>(item: T): T[] {
  return [item];
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m8-1',
        question: {
          en: 'What is the primary advantage of Generics over using `any` for reusable functions?',
          km: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃ Generics ធៀបនឹងការប្រើ `any` សម្រាប់ Reusable function?'
        },
        options: [
          { id: '1', text: { en: 'Generics preserve exact input-to-output type relationships.', km: 'Generics រក្សាទំនាក់ទំនងប្រភេទ Input និង Output ត្រឹមត្រូវ 100%។' }, isCorrect: true },
          { id: '2', text: { en: 'Generics make compiled JS files 50% smaller.', km: 'Generics ធ្វើឲ្យឯកសារ JS តូចជាងមុន។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Generics capture type parameter information without casting everything to un-checked `any`.',
          km: 'Generics រក្សាព័ត៌មាន Type នៃ Parameter ដោយមិនចាំបាច់បំប្លែងទៅជា `any` ឡើយ។'
        }
      }
    ]
  },
  {
    id: 'ts-mod8-l2',
    slug: 'writing-generic-functions-interfaces',
    moduleNumber: 8,
    lessonNumberInModule: 2,
    title: {
      en: 'Writing Generic Interfaces & Classes',
      km: 'ការបង្កើត Generic Interfaces & Classes'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Generics are not limited to functions — you can create generic interfaces (`interface ApiResponse<T>`) and generic classes (`class KeyValueStore<K, V>`). This patterns forms the backbone of scalable library design.',
      km: 'Generics មិនមែនប្រើបានតែលើ Function ប៉ុណ្ណោះទេ — អ្នកអាចបង្កើត Generic Interfaces (`interface ApiResponse<T>`) និង Generic Classes (`class KeyValueStore<K, V>`) បានយ៉ាងទូលំទូលាយ។'
    },
    tutorial: {
      en: `Generic Interface Example:

interface ApiResponse<TData> {
  status: number;
  message: string;
  payload: TData; // Type parameter passed dynamically!
}

type UserPayload = { username: string };

const response: ApiResponse<UserPayload> = {
  status: 200,
  message: "Success",
  payload: { username: "vibol" }
};`,
      km: `ឧទាហរណ៍ Generic Interface:

interface ApiResponse<TData> {
  status: number;
  message: string;
  payload: TData; // ទទួល Type Parameter តាមការប្រើប្រាស់!
}

type UserPayload = { username: string };

const response: ApiResponse<UserPayload> = {
  status: 200,
  message: "Success",
  payload: { username: "vibol" }
};`
    },
    starterCode: {
      js: `interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Gold Medal" };
const numberBox: Box<number> = { content: 100 };

console.log(stringBox.content, numberBox.content);`
    },
    realWorldExample: {
      title: {
        en: 'Paginated Database Query Results',
        km: 'ទិន្នន័យពី Database តាមទំព័រ (Pagination)'
      },
      description: {
        en: 'Modeling standard paginated wrappers `PaginatedResponse<T>` containing `items: T[]` array.',
        km: 'ការរៀបចំទម្រង់ Paginated wrapper `PaginatedResponse<T>` ដែលមានអថេរ `items: T[]`។'
      },
      code: `interface Paginated<T> { page: number; total: number; data: T[]; }`
    },
    practiceExercise: {
      question: {
        en: 'Create a generic interface Container<T> with value: T.',
        km: 'បង្កើត generic interface ឈ្មោះ Container<T> ដែលមាន value: T។'
      },
      solution: `interface Container<T> {
  value: T;
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m8-2',
        question: {
          en: 'How do you pass a type argument to a generic interface `interface Box<T>` during variable declaration?',
          km: 'តើគេបញ្ជូន type argument ទៅកាន់ generic interface `Box<T>` យ៉ាងដូចម្តេចពេលប្រកាសអថេរ?'
        },
        options: [
          { id: '1', text: { en: 'const b: Box<number> = { content: 5 };', km: 'const b: Box<number> = { content: 5 };' }, isCorrect: true },
          { id: '2', text: { en: 'const b: Box(number) = { content: 5 };', km: 'const b: Box(number) = { content: 5 };' }, isCorrect: false }
        ],
        explanation: {
          en: 'Type parameters are passed inside angle brackets `<Type>`.',
          km: 'Type parameters ត្រូវបានបញ្ជូនខាងក្នុងសញ្ញា Angle brackets `<Type>`។'
        }
      }
    ]
  },
  {
    id: 'ts-mod8-l3',
    slug: 'generic-constraints-extends-keyword',
    moduleNumber: 8,
    lessonNumberInModule: 3,
    title: {
      en: 'Generic Constraints with the extends Keyword',
      km: 'Generic Constraints ជាមួយ Keyword extends'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Sometimes a generic function should accept ANY type, provided it fulfills certain minimum criteria (e.g. having a `.length` property). You enforce type requirements on generics using the `extends` keyword (`<T extends HasLength>`).',
      km: 'ពេលខ្លះ Generic function គួរតែទទួល Type អ្វីក៏បាន ឲ្យតែ Type នោះបំពេញលក្ខខណ្ឌអប្បបរមាណាមួយ (ឧ. មាន property `.length`)។ អ្នកអាចកំណត់លក្ខខណ្ឌលើ Generic ដោយប្រើ keyword `extends` (`<T extends HasLength>`)។'
    },
    tutorial: {
      en: `Generic Constraint Syntax:

interface Lengthwise {
  length: number;
}

// T MUST be a type that contains a .length property!
function logLength<T extends Lengthwise>(arg: T): T {
  console.log("Length is:", arg.length);
  return arg;
}

logLength("Hello World"); // ✅ String has .length!
logLength([1, 2, 3]);     // ✅ Array has .length!
// logLength(12345);      // ❌ Error: number has NO .length property!`,
      km: `Syntax របស់ Generic Constraint:

interface Lengthwise {
  length: number;
}

// T ត្រូវតែជា Type ណាដែលមាន property .length!
function logLength<T extends Lengthwise>(arg: T): T {
  console.log("Length is:", arg.length);
  return arg;
}

logLength("Hello World"); // ✅ String មាន .length!
logLength([1, 2, 3]);     // ✅ Array មាន .length!
// logLength(12345);      // ❌ Error: number គ្មាន .length ឡើយ!`
    },
    starterCode: {
      js: `interface Entity {
  id: string;
}

function printEntityId<T extends Entity>(item: T) {
  console.log("Entity ID:", item.id);
}

printEntityId({ id: "E-1", name: "Laptop" });`
    },
    realWorldExample: {
      title: {
        en: 'Database Repository Identity Operations',
        km: 'ប្រតិបត្តិការក្នុង Database Repository'
      },
      description: {
        en: 'Ensuring generic database update functions only accept model objects that have a primary `id` property.',
        km: 'ធានាថា Generic database function ទទួលយកតែ Object ដែលមាន primary `id` property។'
      },
      code: `function updateRecord<T extends { id: string }>(record: T) { /* ... */ }`
    },
    practiceExercise: {
      question: {
        en: 'Write a generic constraint where T extends { id: number } in a function getID<T extends { id: number }>(item: T): number.',
        km: 'សរសេរ generic constraint T extends { id: number } ក្នុង function getID។'
      },
      solution: `function getID<T extends { id: number }>(item: T): number {
  return item.id;
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m8-3',
        question: {
          en: 'Which TypeScript keyword restricts a generic type parameter to conform to a specific interface shape?',
          km: 'តើ Keyword មួយណាដែលកំណត់លក្ខខណ្ឌឲ្យ Generic type parameter ត្រូវតែមានទម្រង់តាម Interface ណាមួយ?'
        },
        options: [
          { id: '1', text: { en: 'extends', km: 'extends' }, isCorrect: true },
          { id: '2', text: { en: 'implements', km: 'implements' }, isCorrect: false },
          { id: '3', text: { en: 'super', km: 'super' }, isCorrect: false }
        ],
        explanation: {
          en: 'The `extends` keyword limits allowed type arguments in generics.',
          km: 'Keyword `extends` កំណត់ដែនកំណត់ Type អនុញ្ញាតក្នុង Generics។'
        }
      }
    ]
  },

  // MODULE 9: Classes & Access Modifiers
  {
    id: 'ts-mod9-l1',
    slug: 'classes-typed-properties-constructors',
    moduleNumber: 9,
    lessonNumberInModule: 1,
    title: {
      en: 'Classes with Typed Properties & Constructors',
      km: 'Classes ជាមួយ Typed Properties & Constructors'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'TypeScript extends ES6 class syntax by requiring explicit property type declarations on the class body before referencing them inside `this.prop` in constructors.',
      km: 'TypeScript ពង្រីក Syntax របស់ ES6 Classes ដោយតម្រូវឲ្យប្រកាស Type លើ Class properties ឲ្យបានច្បាស់លាស់ មុនពេលហៅប្រើប្រាស់ `this.prop` ក្នុង Constructor។'
    },
    tutorial: {
      en: `Class Property Declaration:

class BankAccount {
  accountNumber: string; // Explicit property declaration
  balance: number;

  constructor(accNum: string, initialDeposit: number) {
    this.accountNumber = accNum;
    this.balance = initialDeposit;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
}`,
      km: `ការប្រកាស Class Property:

class BankAccount {
  accountNumber: string; // ប្រកាស Type លើ Property
  balance: number;

  constructor(accNum: string, initialDeposit: number) {
    this.accountNumber = accNum;
    this.balance = initialDeposit;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
}`
    },
    starterCode: {
      js: `class Student {
  name: string;
  gpa: number;

  constructor(name: string, gpa: number) {
    this.name = name;
    this.gpa = gpa;
  }

  isHonorRoll(): boolean {
    return this.gpa >= 3.5;
  }
}

const s1 = new Student("Dara", 3.8);
console.log(s1.name, "Honor roll:", s1.isHonorRoll());`
    },
    realWorldExample: {
      title: {
        en: 'Domain Service Object Orientated Design',
        km: 'ការរៀបចំ Domain Service តាមលំនាំ OOP'
      },
      description: {
        en: 'Classes encapsulate state logic (like shopping cart item calculation) with methods and type guarantees.',
        km: 'Classes ក្ដោបបញ្ចូល State និង Logic ឲ្យស្ថិតក្នុងកញ្ចប់តែមួយ ជាមួយការធានាប្រភេទ Type។'
      },
      code: `class ShoppingCart { private items: string[] = []; }`
    },
    practiceExercise: {
      question: {
        en: 'Create a Car class with model: string property initialized in constructor.',
        km: 'បង្កើត Car class មាន property model: string ដែលកំណត់តម្លៃក្នុង constructor។'
      },
      solution: `class Car {
  model: string;
  constructor(model: string) {
    this.model = model;
  }
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m9-1',
        question: {
          en: 'What does TypeScript require on a class body before initializing property values in `this` inside constructor?',
          km: 'តើ TypeScript តម្រូវឲ្យធ្វើអ្វីលើ Class body មុនពេលផ្តល់តម្លៃឲ្យ `this` ក្នុង constructor?'
        },
        options: [
          { id: '1', text: { en: 'Explicit property type declarations.', km: 'ការប្រកាស Property Type លើ Class body ជាមុន។' }, isCorrect: true },
          { id: '2', text: { en: 'Importing the property from external files.', km: 'ការ Import property ចេញពី 외부។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Class field types must be declared on the class body in TypeScript.',
          km: 'Class field types ត្រូវតែប្រកាសលើ Class body ក្នុង TypeScript។'
        }
      }
    ]
  },
  {
    id: 'ts-mod9-l2',
    slug: 'access-modifiers-public-private-protected',
    moduleNumber: 9,
    lessonNumberInModule: 2,
    title: {
      en: 'Access Modifiers: public, private, protected',
      km: 'Access Modifiers៖ public, private, protected'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'TypeScript introduces member access modifiers: `public` (accessible anywhere, default), `private` (accessible ONLY within the declaring class), and `protected` (accessible within declaring class and its subclasses). Shortcut parameter properties simplify constructor assignments!',
      km: 'TypeScript បន្ថែម Access modifiers៖ `public` (ចូលប្រើបានគ្រប់កន្លែង), `private` (ចូលប្រើបានតែខាងក្នុង Class ដើមប៉ុណ្ណោះ), និង `protected` (ចូលប្រើបានក្នុង Class ដើម និង Subclasses)។'
    },
    tutorial: {
      en: `Access Modifier Usage:

class User {
  public name: string;
  private pinCode: number;
  protected role: string;

  constructor(name: string, pin: number, role: string) {
    this.name = name;
    this.pinCode = pin;
    this.role = role;
  }
}

// Shortcut Constructor Assignment:
class ShortUser {
  constructor(public name: string, private pinCode: number) {}
}`,
      km: `ការប្រើប្រាស់ Access Modifier:

class User {
  public name: string;
  private pinCode: number;
  protected role: string;

  constructor(name: string, pin: number, role: string) {
    this.name = name;
    this.pinCode = pin;
    this.role = role;
  }
}

// របៀបកាត់ខ្លី (Shortcut Constructor Assignment):
class ShortUser {
  constructor(public name: string, private pinCode: number) {}
}`
    },
    starterCode: {
      js: `class SecureVault {
  constructor(public owner: string, private secretCode: string) {}

  public unlock(codeAttempt: string): boolean {
    return this.secretCode === codeAttempt;
  }
}

const v = new SecureVault("Sok", "1234");
console.log(v.owner); // ✅ Allowed
// console.log(v.secretCode); // ❌ Error: 'secretCode' is private!`
    },
    realWorldExample: {
      title: {
        en: 'Encapsulating Sensitive Internal State',
        km: 'ការលាក់បាំងទិន្នន័យសម្ងាត់ (Encapsulation)'
      },
      description: {
        en: 'Marking API keys or authorization tokens `private` prevents consumer code from manipulating credentials directly.',
        km: 'ការដាក់ API key ជា `private` ការពារកូដខាងក្រៅមិនឲ្យមកកែប្រែ Credential ផ្តេសផ្តាស។'
      },
      code: `class ApiClient { private apiKey: string = "SECRET"; }`
    },
    practiceExercise: {
      question: {
        en: 'Write a class Product with constructor shorthand private id: number and public title: string.',
        km: 'សរសេរ Class Product តាមរបៀបកាត់ខ្លី មាន private id: number និង public title: string។'
      },
      solution: `class Product {
  constructor(private id: number, public title: string) {}
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m9-2',
        question: {
          en: 'Which access modifier allows class members to be accessed inside subclasses that inherit from the parent class?',
          km: 'តើ Access modifier មួយណាដែលអនុញ្ញាតឲ្យ Subclasses ដែលស្នងមរតក អាចចូលប្រើប្រាស់បាន?'
        },
        options: [
          { id: '1', text: { en: 'protected', km: 'protected' }, isCorrect: true },
          { id: '2', text: { en: 'private', km: 'private' }, isCorrect: false },
          { id: '3', text: { en: 'internal', km: 'internal' }, isCorrect: false }
        ],
        explanation: {
          en: '`protected` members are accessible inside parent and derived child classes.',
          km: '`protected` អាចចូលប្រើបានក្នុង Class មេ និង Class កូនដែលស្នងមរតក។'
        }
      }
    ]
  },
  {
    id: 'ts-mod9-l3',
    slug: 'interfaces-implemented-by-classes',
    moduleNumber: 9,
    lessonNumberInModule: 3,
    title: {
      en: 'Interfaces Implemented by Classes',
      km: 'ការប្រើប្រាស់ Interfaces ជាមួយ Class (implements)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A class can enforce contract compliance using the `implements` keyword. If a class implements an interface, the compiler enforces that all methods and properties defined in the interface exist on the class.',
      km: 'Class អាចអនុវត្តតាមកិច្ចសន្យារបស់ Interface ដោយប្រើ keyword `implements`។ ប្រសិនបើ Class មួយ implements interface ណា នោះ Compiler នឹងបង្ខំឲ្យ Class មានគ្រប់ Methods និង Properties ទាំងអស់នៃ Interface នោះ។'
    },
    tutorial: {
      en: `Class Implements Interface Syntax:

interface Printable {
  print(): void;
}

class Invoice implements Printable {
  constructor(public id: string, public total: number) {}

  // MUST implement print() method defined in Printable!
  print(): void {
    console.log(\`Invoice \${this.id}: $\${this.total}\`);
  }
}`,
      km: `Syntax របស់ Class Implements Interface:

interface Printable {
  print(): void;
}

class Invoice implements Printable {
  constructor(public id: string, public total: number) {}

  // ត្រូវតែមាន method print() តាមកិច្ចសន្យា Printable!
  print(): void {
    console.log(\`Invoice \${this.id}: $\${this.total}\`);
  }
}`
    },
    starterCode: {
      js: `interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(msg: string): void {
    console.log("[LOG]:", msg);
  }
}

const logger: Logger = new ConsoleLogger();
logger.log("Application started successfully");`
    },
    realWorldExample: {
      title: {
        en: 'Dependency Injection & Polarity Interchange',
        km: 'ការប្រើប្រាស់ Interface សម្រាប់ Service Abstraction'
      },
      description: {
        en: 'Swapping real payment processors (`StripePayment implements PaymentProcessor`) with mock processors during automated testing.',
        km: 'ការផ្លាស់ប្តូរ Payment Processor ពិតប្រាកដ និង Mock Processor ពេល Testing ដោយសារប្រើ Interface ដូចគ្នា។'
      },
      code: `interface PaymentService { process(amount: number): boolean; }`
    },
    practiceExercise: {
      question: {
        en: 'Create an interface Describable with describe(): string and implement it in a Product class.',
        km: 'បង្កើត interface Describable មាន method describe(): string ហើយ implements វា ក្នុង Product class។'
      },
      solution: `interface Describable {
  describe(): string;
}

class Product implements Describable {
  describe(): string {
    return "Product description";
  }
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m9-3',
        question: {
          en: 'Which keyword binds a class to fulfill an interface contract in TypeScript?',
          km: 'តើ Keyword មួយណាដែលចងភ្ជាប់ Class ឲ្យអនុវត្តតាមកិច្ចសន្យា Interface ក្នុង TypeScript?'
        },
        options: [
          { id: '1', text: { en: 'implements', km: 'implements' }, isCorrect: true },
          { id: '2', text: { en: 'extends', km: 'extends' }, isCorrect: false },
          { id: '3', text: { en: 'uses', km: 'uses' }, isCorrect: false }
        ],
        explanation: {
          en: 'The `implements` keyword enforces interface contract fulfillment on classes.',
          km: 'Keyword `implements` បង្ខំឲ្យ Class អនុវត្តតាមកិច្ចសន្យារបស់ Interface។'
        }
      }
    ]
  },

  // MODULE 10: Type Inference & Narrowing (Deeper Dive)
  {
    id: 'ts-mod10-l1',
    slug: 'control-flow-based-narrowing',
    moduleNumber: 10,
    lessonNumberInModule: 1,
    title: {
      en: 'Control-Flow Based Type Narrowing',
      km: 'ការបង្រួម Type ផ្អែកលើ Control-Flow'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'TypeScript analyzes control flow structures like `if`, `switch`, equality checks (`===`), and truthiness (`if (!x)`) to continuously refine variable types line by line as code executes.',
      km: 'TypeScript វិភាគរចនាសម្ព័ន្ធ Control flow ដូចជា `if`, `switch`, ការប្រៀបធៀប (`===`), និង Truthiness (`if (!x)`) ដើម្បីបន្តបង្រួមប្រភេទ Type នៃអថេរតាមបន្ទាត់នីមួយៗ។'
    },
    tutorial: {
      en: `Control Flow Analysis:

function processValue(val: string | number | null) {
  if (val === null) {
    return "No value provided"; // val is null here
  }

  // TypeScript knows val is string | number now!
  if (typeof val === "number") {
    return val * 10;
  }

  // TypeScript knows val MUST be string here!
  return val.trim();
}`,
      km: `ការវិភាគ Control Flow:

function processValue(val: string | number | null) {
  if (val === null) {
    return "No value provided"; // val ជា null
  }

  // TS ដឹងថា val នៅសល់តែ string | number!
  if (typeof val === "number") {
    return val * 10;
  }

  // TS ដឹងថា val ច្បាស់ជា string 100%!
  return val.trim();
}`
    },
    starterCode: {
      js: `function handleInput(x?: string | string[]) {
  if (!x) {
    console.log("Empty or undefined input");
    return;
  }
  if (Array.isArray(x)) {
    console.log("Array count:", x.length);
  } else {
    console.log("Single text:", x.toUpperCase());
  }
}`
    },
    realWorldExample: {
      title: {
        en: 'Handling Nullable Form Values',
        km: 'ការចាត់ចែងទិន្នន័យ Form ដែលអាចជា Null'
      },
      description: {
        en: 'Eliminating `null` or `undefined` runtime runtime crashes without explicit type casting.',
        km: 'លុបបំបាត់ Bug Crash ដោយសារ `null` ឬ `undefined` ដោយមិនបាច់ធ្វើ Type Casting។'
      },
      code: `if (user && user.email) { sendEmail(user.email); }`
    },
    practiceExercise: {
      question: {
        en: 'Write an if statement using Array.isArray(val) to narrow string | string[].',
        km: 'សរសេរ if statement ប្រើ Array.isArray(val) ដើម្បីបង្រួម string | string[]។'
      },
      solution: `if (Array.isArray(val)) {
  console.log(val.join(", "));
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m10-1',
        question: {
          en: 'How does TypeScript evaluate variable types following an `if (val === null) return;` guard clause?',
          km: 'តើ TypeScript វាយតម្លៃអថេរ val យ៉ាងដូចម្តេច នៅបន្ទាត់បន្ទាប់ពី `if (val === null) return;`?'
        },
        options: [
          { id: '1', text: { en: 'It excludes `null` from the variable type union automatically.', km: 'វាដកប្រភេទ `null` ចេញពី Union ដោយស្វ័យប្រវត្តិ។' }, isCorrect: true },
          { id: '2', text: { en: 'It keeps null in the type bounds.', km: 'វារក្សាទុក null ដដែល។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Early return guard clauses eliminate impossible type paths in remaining execution flow.',
          km: 'Early return guard clauses លុបបំបាត់ប្រភេទ Type ដែលមិនអាចកើតមានក្នុងកូដខាងក្រោម។'
        }
      }
    ]
  },
  {
    id: 'ts-mod10-l2',
    slug: 'custom-type-predicates-is-keyword',
    moduleNumber: 10,
    lessonNumberInModule: 2,
    title: {
      en: 'Type Guards & Custom Type Predicates (is Keyword)',
      km: 'Custom Type Predicates ជាមួយ Keyword is'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'For complex custom objects, standard `typeof` is insufficient. You can write custom Type Guard functions that return a type predicate in the form `arg is Type`.',
      km: 'សម្រាប់ Object ស្មុគស្មាញ, `typeof` ធម្មតាមិនអាចផ្ទៀងផ្ទាត់បានឡើយ។ អ្នកអាចសរសេរ Custom Type Guard function ដែល return តម្លៃជា type predicate ទម្រង់ `arg is Type`។'
    },
    tutorial: {
      en: `Custom Type Predicate Syntax:

interface Fish { swim(): void; }
interface Bird { fly(): void; }

// Custom Type Guard returning "pet is Fish":
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function movePet(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // TS knows pet is Fish!
  } else {
    pet.fly();  // TS knows pet is Bird!
  }
}`,
      km: `Syntax របស់ Custom Type Predicate:

interface Fish { swim(): void; }
interface Bird { fly(): void; }

// Custom Type Guard return "pet is Fish":
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function movePet(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // TS ដឹងថាសត្វនេះជា Fish!
  } else {
    pet.fly();  // TS ដឹងថាសត្វនេះជា Bird!
  }
}`
    },
    starterCode: {
      js: `interface Admin { role: "admin"; permissions: string[] }
interface Guest { role: "guest" }

type Account = Admin | Guest;

function isAdmin(acc: Account): acc is Admin {
  return acc.role === "admin";
}

function performAction(acc: Account) {
  if (isAdmin(acc)) {
    console.log("Permissions:", acc.permissions);
  }
}`
    },
    realWorldExample: {
      title: {
        en: 'Filtering Mixed Arrays cleanly',
        km: 'ការ Filter ធាតុក្នុង Array ចម្រុះ'
      },
      description: {
        en: 'Using type predicate functions inside Array `.filter()` filters out nulls while informing TS compiler of the narrowed array output.',
        km: 'ការប្រើ type predicate ក្នុង .filter() ជួយជម្រុះ null ចេញ និងប្រាប់ TS ពី Type ថ្មីនៃ Array។'
      },
      code: `function isNotNull<T>(val: T | null): val is T { return val !== null; }`
    },
    practiceExercise: {
      question: {
        en: 'Write a type predicate function isString(val: unknown): val is string returning typeof val === "string".',
        km: 'សរសេរ type predicate function isString(val: unknown): val is string។'
      },
      solution: `function isString(val: unknown): val is string {
  return typeof val === "string";
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m10-2',
        question: {
          en: 'What return type format makes a function act as a custom Type Guard in TypeScript?',
          km: 'តើ Return type ទម្រង់ណាដែលធ្វើឲ្យ Function ក្លាយជា Custom Type Guard?'
        },
        options: [
          { id: '1', text: { en: 'parameterName is TargetType', km: 'parameterName is TargetType' }, isCorrect: true },
          { id: '2', text: { en: 'boolean: TargetType', km: 'boolean: TargetType' }, isCorrect: false }
        ],
        explanation: {
          en: '`arg is Type` informs the compiler that returning true asserts the checked parameter is that specific type.',
          km: '`arg is Type` ប្រាប់ Compiler ថាបើតម្លៃ true នោះ parameter នោះជា Type ជាក់លាក់។'
        }
      }
    ]
  },
  {
    id: 'ts-mod10-l3',
    slug: 'unknown-type-vs-any-safer-code',
    moduleNumber: 10,
    lessonNumberInModule: 3,
    title: {
      en: 'The unknown Type vs any — Writing Safer Code',
      km: 'ប្រភេទ unknown ធៀបនឹង any — ការសរសេរកូដប្រកបដោយសុវត្ថិភាព'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'The `unknown` type is the type-safe counterpart of `any`. Like `any`, any value can be assigned to `unknown`. However, UNLIKE `any`, TypeScript prevents you from performing arbitrary operations on an `unknown` value until you narrow or cast its type first!',
      km: 'ប្រភេទ `unknown` គឺជាដៃគូដែលមានសុវត្ថិភាពខ្ពស់នៃ `any`។ ដូច `any` ដែរ តម្លៃអ្វីក៏អាចចាក់ចូល `unknown` បានដែរ។ ប៉ុន្តែខុសពី `any`, TypeScript ហាមឃាត់មិនឲ្យអ្នកហៅប្រើប្រាស់ Method ឬ Operation លើតម្លៃ `unknown` ឡើយ រហូតទាល់តែអ្នកធ្វើ Type Narrowing សិន!'
    },
    tutorial: {
      en: `any vs unknown:

let valueAny: any = "Hello";
valueAny.nonExistentMethod(); // ❌ Compiles without error, crashes at runtime!

let valueUnknown: unknown = "Hello";
// valueUnknown.trim(); // ❌ Compiler Error: Object is of type 'unknown'.

if (typeof valueUnknown === "string") {
  console.log(valueUnknown.trim()); // ✅ Safe and allowed now!
}`,
      km: `any ធៀបនឹង unknown:

let valueAny: any = "Hello";
valueAny.nonExistentMethod(); // ❌ Compile ដោយគ្មាន Error តែ Crash ពេលរត់!

let valueUnknown: unknown = "Hello";
// valueUnknown.trim(); // ❌ Compiler Error: ប្រកាសអាសន្នភ្លាមៗ!

if (typeof valueUnknown === "string") {
  console.log(valueUnknown.trim()); // ✅ សុវត្ថិភាព និងអនុញ្ញាតឲ្យរត់! `
    },
    starterCode: {
      js: `function parseJsonSafe(jsonString: string): unknown {
  return JSON.parse(jsonString);
}

const rawData = parseJsonSafe('{"name":"Chakra"}');

if (typeof rawData === "object" && rawData !== null && "name" in rawData) {
  console.log("Name:", (rawData as { name: string }).name);
}`
    },
    realWorldExample: {
      title: {
        en: 'Safe Handling of Unknown External API Payloads',
        km: 'ការទទួលទិន្នន័យពីខាងក្រៅដោយសុវត្ថិភាព'
      },
      description: {
        en: 'Using `unknown` when catching errors in `try/catch` blocks (`catch (err: unknown)`).',
        km: 'ការប្រើ `unknown` ពេលចាប់យក Error ក្នុង `try/catch` block (`catch (err: unknown)`)។'
      },
      code: `try { /* ... */ } catch (err: unknown) { if (err instanceof Error) console.log(err.message); }`
    },
    practiceExercise: {
      question: {
        en: 'In a catch (err: unknown) block, write an if check to see if err is an instance of Error.',
        km: 'ក្នុង catch (err: unknown) block, សរសេរ if check ពិនិត្យថាបើ err ជា instanceof Error។'
      },
      solution: `try {
  // code
} catch (err: unknown) {
  if (err instanceof Error) {
    console.log(err.message);
  }
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m10-3',
        question: {
          en: 'Why is `unknown` preferred over `any` for unknown runtime values?',
          km: 'ហេតុអ្វីបានជាគេនិយមប្រើ `unknown` ជាង `any` សម្រាប់តម្លៃដែលមិនទាន់ច្បាស់ពេលរត់?'
        },
        options: [
          { id: '1', text: { en: 'Because TypeScript forces you to narrow or check type before calling methods on unknown.', km: 'ព្រោះ TS បង្ខំឲ្យអ្នកពិនិត្យ Type សិន មុនពេលហៅប្រើប្រាស់ Method លើ unknown។' }, isCorrect: true },
          { id: '2', text: { en: 'Because unknown uses less RAM memory.', km: 'ព្រោះ unknown ស៊ី RAM តិចជាង។' }, isCorrect: false }
        ],
        explanation: {
          en: '`unknown` enforces type checking before usage, guaranteeing runtime safety.',
          km: '`unknown` បង្ខំឲ្យមានការពិនិត្យ Type មុនពេលប្រើប្រាស់ ធានាសុវត្ថិភាព 100%។'
        }
      }
    ]
  },

  // MODULE 11: Working with tsconfig.json
  {
    id: 'ts-mod11-l1',
    slug: 'what-tsconfig-json-controls',
    moduleNumber: 11,
    lessonNumberInModule: 1,
    title: {
      en: 'What tsconfig.json Controls in a Project',
      km: 'អ្វីដែល tsconfig.json គ្រប់គ្រងក្នុង Project'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The `tsconfig.json` file resides at the root of a TypeScript project. It specifies root files and compiler options required to compile the project. You generate a starter configuration file using `tsc --init`.',
      km: 'ឯកសារ `tsconfig.json` ស្ថិតនៅ Root នៃ TypeScript Project។ វាបញ្ជាក់អំពីកំណត់រចនាសម្ព័ន្ធ Compiler និងប្រភពឯកសារដែលត្រូវ Compile។ អ្នកអាចបង្កើតឯកសារនេះដោយរត់ Command `tsc --init`។'
    },
    tutorial: {
      en: `1. Initialize tsconfig.json:
$ tsc --init

2. Basic Structure:
{
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}`,
      km: `១. បង្កើត tsconfig.json ដើម:
$ tsc --init

២. រចនាសម្ព័ន្ធគ្រឹះ:
{
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}`
    },
    starterCode: {
      js: `// Sample tsconfig.json preview
{
  "compilerOptions": {
    "target": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "noImplicitAny": true
  }
}`
    },
    realWorldExample: {
      title: {
        en: 'Project Build Configuration',
        km: 'ការកំណត់កម្រិត Build ក្នុង Project'
      },
      description: {
        en: 'Configuring `outDir: "./dist"` directs compiled JS files into a clean distribution folder separate from TypeScript source files.',
        km: 'ការកំណត់ `outDir: "./dist"` ជួយបំបែកឯកសារ JS ដែល Compile ទៅក្នុង Folder dist ដោយឡែក។'
      },
      code: `{ "compilerOptions": { "outDir": "./dist", "rootDir": "./src" } }`
    },
    practiceExercise: {
      question: {
        en: 'What terminal command creates a default tsconfig.json file in your project directory?',
        km: 'តើ Command Terminal មួយណាដែលបង្កើតឯកសារ default tsconfig.json ក្នុង Directory?'
      },
      solution: `tsc --init`
    },
    quizQuestions: [
      {
        id: 'q-ts-m11-1',
        question: {
          en: 'Which CLI command generates a pre-populated tsconfig.json template file?',
          km: 'តើ CLI command មួយណាសម្រាប់បង្កើត template ឯកសារ tsconfig.json?'
        },
        options: [
          { id: '1', text: { en: 'tsc --init', km: 'tsc --init' }, isCorrect: true },
          { id: '2', text: { en: 'npm init ts', km: 'npm init ts' }, isCorrect: false },
          { id: '3', text: { en: 'typescript create', km: 'typescript create' }, isCorrect: false }
        ],
        explanation: {
          en: '`tsc --init` creates a commented default tsconfig.json file.',
          km: '`tsc --init` បង្កើតឯកសារ tsconfig.json ដែលមាន Comment ពន្យល់ស្រាប់។'
        }
      }
    ]
  },
  {
    id: 'ts-mod11-l2',
    slug: 'key-options-strict-target-module-outdir',
    moduleNumber: 11,
    lessonNumberInModule: 2,
    title: {
      en: 'Key Compiler Options: strict, target, module, outDir',
      km: 'ជម្រើសចម្បងនៃ Compiler Options: strict, target, module, outDir'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Core compiler options shape output and safety: `target` sets JavaScript ES version output (e.g. "ES6"), `module` sets module code generation ("NodeNext", "CommonJS"), `outDir` specifies compilation destination, and `strict` enables all strict type checking behaviors.',
      km: 'Compiler options ចម្បងៗរួមមាន៖ `target` កំណត់ ES Version នៃ JS ជើងចេញ (ឧ. "ES6"), `module` កំណត់ទម្រង់ Module System, `outDir` កំណត់ Folder សម្រាប់រក្សាទុក JS ដែល Compile រួច, និង `strict` បើកដំណើការការពិនិត្យ Type ម៉ឺងម៉ាត់បំផុត។'
    },
    tutorial: {
      en: `Essential Compiler Options Explained:

"target": "es2020"    // Output JS version
"module": "esnext"    // Import/Export syntax format
"outDir": "./build"   // Output folder for compiled files
"rootDir": "./src"    // Input folder containing .ts source
"strict": true        // Enables all strict type-checking options!`,
      km: `ពន្យល់អំពី Compiler Options ចម្បងៗ:

"target": "es2020"    // កំណត់ ES Version របស់ JS
"module": "esnext"    // ទម្រង់ Import/Export syntax
"outDir": "./build"   // Folder សម្រាប់រក្សាទុកឯកសារ Compiled
"rootDir": "./src"    // Folder ដើមដែលមានឯកសារ .ts
"strict": true        // បើកការត្រួតពិនិត្យ Type ម៉ឺងម៉ាត់បំផុត!`
    },
    starterCode: {
      js: `// tsconfig.json snippet
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}`
    },
    realWorldExample: {
      title: {
        en: 'Targeting Modern vs Legacy Browsers',
        km: 'ការកំណត់ Target សម្រាប់ Browser ចាស់ ឬថ្មី'
      },
      description: {
        en: 'Setting `"target": "ES5"` transpiles arrow functions and classes down to ES5 functions for older environment compatibility.',
        km: 'ការកំណត់ `"target": "ES5"` ជួយបំប្លែង Arrow function ឲ្យដំណើការលើ Browser ចាស់ៗបាន។'
      },
      code: `{ "compilerOptions": { "target": "ES5" } }`
    },
    practiceExercise: {
      question: {
        en: 'Which compiler option directs all compiled JavaScript files into a folder named dist?',
        km: 'តើ compiler option មួយណាដែលបញ្ជូនឯកសារ JS ដែល compile រួចទៅកាន់ folder dist?'
      },
      solution: `"outDir": "./dist"`
    },
    quizQuestions: [
      {
        id: 'q-ts-m11-2',
        question: {
          en: 'What does the `"target"` setting in tsconfig.json control?',
          km: 'តើការកំណត់ `"target"` ក្នុង tsconfig.json គ្រប់គ្រងលើអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'The version of JavaScript emitted by the compiler (e.g. ES5, ES6, ES2022).', km: 'កំណែ ES របស់ JavaScript ដែលត្រូវ Emitted ដោយ Compiler។' }, isCorrect: true },
          { id: '2', text: { en: 'The operating system where the app runs.', km: 'ប្រព័ន្ធប្រតិបត្តិការ OS ដែល App ត្រូវរត់។' }, isCorrect: false }
        ],
        explanation: {
          en: '`target` determines which ECMAScript version features are emitted in JS files.',
          km: '`target` កំណត់កំណែ ECMAScript version ដែលត្រូវបង្កើតក្នុងឯកសារ JS។'
        }
      }
    ]
  },
  {
    id: 'ts-mod11-l3',
    slug: 'enabling-strict-mode-benefits',
    moduleNumber: 11,
    lessonNumberInModule: 3,
    title: {
      en: 'Enabling Strict Mode & Enterprise Benefits',
      km: 'ការបើក Strict Mode និងអត្ថប្រយោជន៍ក្នុងក្រុមហ៊ុន'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Setting `"strict": true` in `tsconfig.json` turns on a broad suite of type checking behaviors, including `noImplicitAny` (errors if a variable defaults to `any`) and `strictNullChecks` (prevents calling methods on potentially `null` or `undefined` values). All professional production apps use strict mode!',
      km: 'ការកំណត់ `"strict": true` ក្នុង `tsconfig.json` បើកដំណើការការពិនិត្យ Type ម៉ឺងម៉ាត់ រួមមាន `noImplicitAny` (ព្រមានពេលច្រឡំអថេរជា `any`) និង `strictNullChecks` (ការពារ Bug ហៅ Method លើ `null` ឬ `undefined`)។ គ្រប់ Project ក្រុមហ៊ុនទាំងអស់សុទ្ធតែប្រើ Strict Mode!'
    },
    tutorial: {
      en: `Strict Null Checks in Action:

// Without strictNullChecks:
let title: string = null; // ✅ Allowed (Dangerous!)

// With strictNullChecks enabled ("strict": true):
let title: string = null; 
// ❌ Error: Type 'null' is not assignable to type 'string'.

let safeTitle: string | null = null; // ✅ Safe explicit union required!`,
      km: `Strict Null Checks ក្នុងសកម្មភាពពិត:

// បើគ្មាន strictNullChecks:
let title: string = null; // ✅ អនុញ្ញាត (គ្រោះថ្នាក់!)

// ពេលបើក strictNullChecks ("strict": true):
let title: string = null; 
// ❌ Error: មិនអាចយក 'null' ទៅដាក់ក្នុងប្រភេទ 'string' បានឡើយ!

let safeTitle: string | null = null; // ✅ សុវត្ថិភាព តាមរយៈ Explicit union!`
    },
    starterCode: {
      js: `// With "strict": true
function greetUser(username: string | undefined) {
  if (username) {
    console.log("Hello,", username.toUpperCase());
  } else {
    console.log("Hello, Guest");
  }
}`
    },
    realWorldExample: {
      title: {
        en: 'Eliminating "Cannot read property of undefined" Errors',
        km: 'ការលុបបំបាត់ Error "Cannot read property of undefined"'
      },
      description: {
        en: '`strictNullChecks` completely prevents the most common JavaScript runtime bug from reaching production environments!',
        km: '`strictNullChecks` ការពារមិនឲ្យ Bug ដែលកើតមានញឹកញាប់បំផុតក្នុង JS ធ្លាក់ទៅដល់ Production ឡើយ!'
      },
      code: `function getItemName(item?: { name: string }) { return item?.name ?? "Unknown"; }`
    },
    practiceExercise: {
      question: {
        en: 'Which setting in tsconfig.json automatically enables strictNullChecks and noImplicitAny?',
        km: 'តើការកំណត់មួយណា ក្នុង tsconfig.json ដែលបើក strictNullChecks និង noImplicitAny ដោយស្វ័យប្រវត្តិ?'
      },
      solution: `"strict": true`
    },
    quizQuestions: [
      {
        id: 'q-ts-m11-3',
        question: {
          en: 'Why is `"strict": true` strongly recommended for all professional TypeScript codebases?',
          km: 'ហេតុអ្វីបានជាគេណែនាំឲ្យប្រើ `"strict": true` សម្រាប់គ្រប់ Project អាជីព TypeScript?'
        },
        options: [
          { id: '1', text: { en: 'It prevents null/undefined crashes and implicit any types across the app.', km: 'វាការពារ Bug ធ្លាក់ដោយសារ null/undefined និងអថេរ any ដោយអចេតនា។' }, isCorrect: true },
          { id: '2', text: { en: 'It automatically formats CSS styling code.', km: 'វាជួយរៀបចំ Format កូដ CSS ស្វ័យប្រវត្តិ។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Strict mode catches maximum potential runtime bugs during compile time.',
          km: 'Strict mode ស្វែងរក Bug ដែលអាចកើតមានពេលរត់ ឲ្យឃើញតាំងពីពេល Compile។'
        }
      }
    ]
  },

  // MODULE 12: Using TypeScript with React
  {
    id: 'ts-mod12-l1',
    slug: 'typing-component-props-interfaces',
    moduleNumber: 12,
    lessonNumberInModule: 1,
    title: {
      en: 'Typing Component Props with Interfaces',
      km: 'ការកំណត់ Type លើ React Component Props ជាមួយ Interfaces'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'In React + TypeScript applications, component props are typed using an `interface` or `type` alias. This guarantees parent components pass all required properties with correct types, giving rich editor autocompletion.',
      km: 'ក្នុង React + TypeScript, Props របស់ Component ត្រូវបានកំណត់ Type ដោយប្រើ `interface` ឬ `type` alias។ វាធានាថា Parent component បញ្ជូនទិន្នន័យបានត្រឹមត្រូវ ព្រមទាំងផ្តល់ Autocomplete ស្ទាត់ជំនាញក្នុង Editor។'
    },
    tutorial: {
      en: `React Props Typing Syntax:

import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick: () => void;
}

export const CustomButton: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick }) => {
  return (
    <button className={\`btn btn-\${variant}\`} onClick={onClick}>
      {label}
    </button>
  );
};`,
      km: `Syntax កំណត់ Type លើ React Props:

import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick: () => void;
}

export const CustomButton: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick }) => {
  return (
    <button className={\`btn btn-\${variant}\`} onClick={onClick}>
      {label}
    </button>
  );
};`
    },
    starterCode: {
      js: `// React Component Props Interface Example
interface UserCardProps {
  name: string;
  age: number;
  isAdmin?: boolean;
}

function UserCard({ name, age, isAdmin = false }: UserCardProps) {
  return (
    <div>
      <h3>{name} ({age})</h3>
      {isAdmin && <span>[Admin]</span>}
    </div>
  );
}`
    },
    realWorldExample: {
      title: {
        en: 'Design System Reusable Component Library',
        km: 'ការបង្កើត Component Library ក្នុងក្រុមហ៊ុន'
      },
      description: {
        en: 'Typing props guarantees frontend teams cannot misconfigure shared component libraries.',
        km: 'ការកំណត់ Type លើ Props ធានាថាក្រុមការងារមិនអាចច្រឡំបញ្ជូន Props ខុសទម្រង់ឡើយ។'
      },
      code: `interface BadgeProps { text: string; color: "green" | "red"; }`
    },
    practiceExercise: {
      question: {
        en: 'Write an interface HeaderProps with title: string and optional subtitle?: string.',
        km: 'សរសេរ interface HeaderProps មាន title: string និង subtitle?: string ដែលមិនបង្ខំ។'
      },
      solution: `interface HeaderProps {
  title: string;
  subtitle?: string;
}`
    },
    quizQuestions: [
      {
        id: 'q-ts-m12-1',
        question: {
          en: 'How does typing React component props with Interfaces benefit developers?',
          km: 'តើការកំណត់ Type លើ React Component Props ផ្តល់អត្ថប្រយោជន៍អ្វីខ្លះដល់ អ្នកអភិវឌ្ឍន៍?'
        },
        options: [
          { id: '1', text: { en: 'It enforces correct prop passing from parents and provides instant editor autocomplete.', km: 'វាបង្ខំឲ្យបញ្ជូន Props ត្រូវទម្រង់ និងផ្តល់ Autocomplete ភ្លាមៗក្នុង Editor។' }, isCorrect: true },
          { id: '2', text: { en: 'It renders HTML faster in DOM.', km: 'វា Render HTML លឿនជាង។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Props interfaces prevent passing missing or incorrectly typed props into components.',
          km: 'Props interfaces ការពារការច្រឡំបញ្ជូន Props ខុស ឬខ្វះក្នុង Component។'
        }
      }
    ]
  },
  {
    id: 'ts-mod12-l2',
    slug: 'typing-usestate-event-handlers',
    moduleNumber: 12,
    lessonNumberInModule: 2,
    title: {
      en: 'Typing useState Hooks & Event Handlers',
      km: 'ការកំណត់ Type លើ useState Hooks & Event Handlers'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'React hooks like `useState` infer types from initial values (`useState(0)` -> `number`), or accept explicit generic parameters (`useState<User | null>(null)`). DOM events are typed using React namespaces like `React.ChangeEvent<HTMLInputElement>`.',
      km: 'React hooks ដូចជា `useState` ស្វែងយល់ Type ពីតម្លៃដើម (`useState(0)`) ឬទទួល Generic type (`useState<User | null>(null)`)។ DOM events ត្រូវបានកំណត់ Type ដោយប្រើប្រាស់ React namespace ដូចជា `React.ChangeEvent<HTMLInputElement>`។'
    },
    tutorial: {
      en: `Typing Hooks & Events:

import React, { useState } from 'react';

type User = { id: string; name: string };

export function UserProfile() {
  // Explicit generic type for union with null:
  const [user, setUser] = useState<User | null>(null);

  // Form input event handler:
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input value:", e.target.value);
  };

  return <input type="text" onChange={handleChange} />;
}`,
      km: `ការកំណត់ Type លើ Hooks & Events:

import React, { useState } from 'react';

type User = { id: string; name: string };

export function UserProfile() {
  // ប្រើ Generic type សម្រាប់ Union ជាមួយ null:
  const [user, setUser] = useState<User | null>(null);

  // Form input event handler:
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input value:", e.target.value);
  };

  return <input type="text" onChange={handleChange} />;
}`
    },
    starterCode: {
      js: `// React Event Typing Pattern
import React, { useState } from 'react';

function SimpleForm() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={email} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
      />
    </form>
  );
}`
    },
    realWorldExample: {
      title: {
        en: 'Form Input State Handling',
        km: 'ការគ្រប់គ្រង State ក្នុង Form'
      },
      description: {
        en: 'Typing `React.FormEvent` ensures methods like `e.preventDefault()` are auto-completed without runtime errors.',
        km: 'ការកំណត់ Type `React.FormEvent` ជួយឲ្យហៅ method `e.preventDefault()` បានយ៉ាងរលូន។'
      },
      code: `const onSubmit = (e: React.FormEvent) => { e.preventDefault(); };`
    },
    practiceExercise: {
      question: {
        en: 'Write a useState declaration for an array of strings named tags initialized to empty array [].',
        km: 'សរសេរ useState declaration សម្រាប់ array នៃ strings ឈ្មោះ tags មានតម្លៃដើមជា [].'
      },
      solution: `const [tags, setTags] = useState<string[]>([]);`
    },
    quizQuestions: [
      {
        id: 'q-ts-m12-2',
        question: {
          en: 'How should a React state hook be declared when the initial value is `null` but will later hold a `User` object?',
          km: 'តើគេគួរប្រកាស React state hook យ៉ាងដូចម្តេច នៅពេលតម្លៃដើមជា `null` ប៉ុន្តែបន្ទាប់មកនឹងផ្ទុក `User` object?'
        },
        options: [
          { id: '1', text: { en: 'const [user, setUser] = useState<User | null>(null);', km: 'const [user, setUser] = useState<User | null>(null);' }, isCorrect: true },
          { id: '2', text: { en: 'const [user, setUser] = useState(null);', km: 'const [user, setUser] = useState(null);' }, isCorrect: false }
        ],
        explanation: {
          en: 'Generic parameter `useState<User | null>(null)` informs TS that state can transition from null to User.',
          km: '`useState<User | null>(null)` ប្រាប់ TS ថា State អាចប្តូរពី null ទៅជា User បាន។'
        }
      }
    ]
  },
  {
    id: 'ts-mod12-l3',
    slug: 'react-typescript-industry-standard',
    moduleNumber: 12,
    lessonNumberInModule: 3,
    title: {
      en: 'Why React + TypeScript is the Industry Standard',
      km: 'ហេតុអ្វីបានជា React + TypeScript ជាស្តង់ដារទីផ្សារការងារ'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'React and TypeScript are the dominant combination in web development today. Together, they eliminate entire classes of component rendering bugs, streamline large-scale codebase refactoring, and allow huge frontend engineering teams to collaborate safely.',
      km: 'React និង TypeScript គឺជាការរួមបញ្ចូលគ្នាដ៏មានឥទ្ធិពលបំផុតក្នុង web development នាពេលបច្ចុប្បន្ន។ ពួកវាសហការគ្នាដើម្បីលុបបំបាត់ Bug ក្នុង Component, ជួយសម្រួលការកែសម្រួលកូដធំៗ (Refactoring) និងអនុញ្ញាតឲ្យក្រុមការងារធំៗសហការគ្នាដោយសុវត្ថិភាព។'
    },
    tutorial: {
      en: `Core Industry Benefits:

1. Self-Documenting Code: Props interfaces serve as live documentation.
2. Safe Refactoring: Renaming a prop instantly updates or highlights all usages across hundreds of files.
3. Enhanced Tooling: Instant autocomplete in VSCode for components and hooks.
4. Scale & Maintainability: Reduces regressions when updating shared UI packages.`,
      km: `អត្ថប្រយោជន៍ចម្បងក្នុងទីផ្សារការងារ:

១. កូដមានឯកសារពន្យល់ស្វ័យប្រវត្តិ: Props interfaces ដើរតួជា Document ស្រាប់។
២. ការ Refactor ដោយសុវត្ថិភាព: ការកែឈ្មោះ Prop នឹងអាប់ដេត ឬប្រកាសអាសន្នគ្រប់កន្លែងក្នុង Project ភ្លាមៗ។
៣. ឧបករណ៍សម្រួលការងារ៖ Autocomplete ភ្លាមៗក្នុង VSCode លើ Components និង Hooks។
៤. សមត្ថភាពពង្រីក៖ ការពារមិនឲ្យបែក Bug ពេលអាប់ដេត UI Packages រួមគ្នា។`
    },
    starterCode: {
      js: `// React + TS Clean Architecture
export interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div style={{ border: "1px solid #334155", padding: "16px", borderRadius: "8px" }}>
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
}`
    },
    realWorldExample: {
      title: {
        en: 'Enterprise Design Systems & Next.js Platforms',
        km: 'ប្រព័ន្ធ Platform ធំៗក្នុងក្រុមហ៊ុន Tech'
      },
      description: {
        en: 'Over 90% of modern job listings for React developers require TypeScript mastery.',
        km: 'ជាង ៩០% នៃសមាសភាពការងារ React នាពេលបច្ចុប្បន្ន តម្រូវឲ្យមានជំនាញ TypeScript។'
      },
      code: `type PageProps = { params: { id: string } };`
    },
    practiceExercise: {
      question: {
        en: 'What prop type represents nested JSX elements passed into a component wrapper?',
        km: 'តើ Prop type មួយណាដែលតំណាងឲ្យ nested JSX elements បញ្ជូនចូលទៅក្នុង Component?'
      },
      solution: `React.ReactNode`
    },
    quizQuestions: [
      {
        id: 'q-ts-m12-3',
        question: {
          en: 'Which type from `@types/react` is used to type the `children` prop of a wrapper component?',
          km: 'តើ Type មួយណាពី `@types/react` ដែលប្រើសម្រាប់កំណត់ Type លើ `children` prop?'
        },
        options: [
          { id: '1', text: { en: 'React.ReactNode', km: 'React.ReactNode' }, isCorrect: true },
          { id: '2', text: { en: 'React.ElementList', km: 'React.ElementList' }, isCorrect: false },
          { id: '3', text: { en: 'HTMLElement', km: 'HTMLElement' }, isCorrect: false }
        ],
        explanation: {
          en: '`React.ReactNode` represents any renderable React child element (JSX, strings, numbers, arrays, fragment).',
          km: '`React.ReactNode` តំណាងឲ្យគ្រប់ធាតុ React child ដែលអាច Render បាន (JSX, string, number, fragment)។'
        }
      }
    ]
  }
];
