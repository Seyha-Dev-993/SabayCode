import { Lesson } from '../types';

export const typescriptLessonsPart4: Lesson[] = [
  {
    id: "ts-literal-types",
    title: {
      en: "TS Literal Types",
      km: "ប្រភេទតម្លៃជាក់លាក់"
    },
    content: {
      en: `### Literal Types
A **Literal Type** is a more specific sub-type of a primitive type. It allows you to specify exact values that a variable can accept rather than any string or number.

### Example
\`\`\`typescript
let direction: "left" | "right" | "up" | "down";
direction = "left"; // OK
// direction = "somewhere"; // Compile Error!
\`\`\`

Combining literal types with union types allows you to write highly expressive APIs with precise, constrained inputs.`,
      km: `### ប្រភេទតម្លៃជាក់លាក់ (Literal Types)
**Literal Type** គឺជាប្រភេទកូនថ្នាក់ជាក់លាក់មួយរបស់ប្រភេទទិន្នន័យសាមញ្ញ។ វាអនុញ្ញាតឱ្យអ្នកកំណត់តម្លៃពិតប្រាកដដែលអថេរអាចទទួលយកបាន ជំនួសឱ្យតម្លៃអត្ថបទ ឬលេខទូទៅ។

### ឧទាហរណ៍
\`\`\`typescript
let direction: "left" | "right" | "up" | "down";
direction = "left"; // ត្រឹមត្រូវ
// direction = "somewhere"; // កំហុស Compile!
\`\`\`

ការរួមបញ្ចូលគ្នានៃ Literal Types ជាមួយ Union Types ជួយឱ្យយើងសរសេរ APIs ដែលមានសុវត្ថិភាពខ្ពស់ និងកំណត់ប៉ារ៉ាម៉ែត្រច្បាស់លាស់។`
    },
    starterCode: `// Combine literal and union types for application configurations
type ThemeMode = "light" | "dark" | "system";

function applyTheme(theme: ThemeMode) {
  console.log(\`Applying theme mode: \${theme.toUpperCase()}\`);
}

applyTheme("dark");
// Try changing to "blue" to see how TS triggers compile error!
`
  },
  {
    id: "ts-namespaces",
    title: {
      en: "TS Namespaces",
      km: "Namespaces ក្នុង TS"
    },
    content: {
      en: `### Namespaces
**Namespaces** are a TypeScript-specific way to organize code, group variables, classes, and interfaces under a single scope.

> **Note:** With the standardization of ES6 Modules, Namespaces are less commonly used in modern codebases. However, you will still encounter them in legacy projects or when writing ambient type declarations for libraries.

### Syntax
\`\`\`typescript
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}
\`\`\``,
      km: `### លំហឈ្មោះ (Namespaces)
**Namespaces** គឺជាវិធីសាស្ត្រមួយជាក់លាក់របស់ TypeScript សម្រាប់រៀបចំចងក្រងកូដ គ្រុបអថេរ, Classes, និង Interfaces ឱ្យស្ថិតនៅក្រោមដែនកំណត់ (Scope) តែមួយ។

> **ចំណាំ:** ជាមួយនឹងវត្តមាននៃប្រព័ន្ធ ES6 Modules ទំនើប គេលែងសូវប្រើប្រាស់ Namespaces ទៀតហើយ។ ប៉ុន្តែ អ្នកអាចនឹងជួបពួកវានៅក្នុងគម្រោងចាស់ៗ ឬនៅពេលសរសេរឯកសារប្រភេទ Ambient សម្រាប់បណ្ណាល័យខាងក្រៅ។

### របៀបសរសេរ
\`\`\`typescript
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}
\`\`\``
    },
    starterCode: `namespace Utility {
  export function formatSalary(amount: number): string {
    return amount.toLocaleString() + " រៀល (KHR)";
  }
}

// Accessing functions under namespace scope
const salaryText = Utility.formatSalary(1500000);
console.log(salaryText);
`
  },
  {
    id: "ts-index-signatures",
    title: {
      en: "TS Index Signatures",
      km: "Index Signatures ក្នុង TS"
    },
    content: {
      en: `### Index Signatures
Sometimes you don't know all the names of a type's properties ahead of time, but you do know the type of the values and keys. You can use an **Index Signature** in these scenarios.

### Syntax
\`\`\`typescript
interface Dictionary {
  [key: string]: string;
}
\`\`\`

Here, any key of type \`string\` is allowed, but its corresponding value must always be a \`string\`.`,
      km: `### សញ្ញាសម្គាល់លិបិក្រម (Index Signatures)
ពេលខ្លះ អ្នកមិនបានដឹងពីឈ្មោះ Properties ទាំងអស់របស់ប្រភេទទុកមុននោះទេ ប៉ុន្តែអ្នកដឹងពីប្រភេទនៃ Keys និង Values។ ករណីនេះ អ្នកអាចប្រើប្រាស់ **Index Signature**។

### របៀបសរសេរ
\`\`\`typescript
interface Dictionary {
  [key: string]: string;
}
\`\`\`

នៅទីនេះ រាល់ Key ទាំងអស់ដែលជាប្រភេទ \`string\` គឺត្រូវបានអនុញ្ញាត ហើយតម្លៃរបស់វាក៏ត្រូវតែជាប្រភេទ \`string\` ផងដែរ។`
    },
    starterCode: `interface StudentScores {
  name: string; // Known property
  [subject: string]: string | number; // Index signature for dynamic keys
}

const reportCard: StudentScores = {
  name: "Chan Sophal",
  Math: 95,
  Physics: "Grade A",
  English: 88
};

console.log(\`Report card for \${reportCard.name}:\`);
console.log("Math Score:", reportCard.Math);
console.log("Physics Grade:", reportCard.Physics);
`
  },
  {
    id: "ts-declaration-merging",
    title: {
      en: "TS Declaration Merging",
      km: "ការច្របាច់បញ្ចូលការប្រកាស"
    },
    content: {
      en: `### Declaration Merging
**Declaration Merging** is a feature where the TypeScript compiler merges two or more separate declarations declared with the exact same name into a single definition.

### Interface Merging
If you define an interface with the same name multiple times, their members are automatically merged:
\`\`\`typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

// Resulting interface is: { name: string; age: number; }
\`\`\`

This is extensively used by plugins and packages to extend core library properties dynamically (such as extending the Express request object with custom session variables).`,
      km: `### ការច្របាច់បញ្ចូលការប្រកាស (Declaration Merging)
**Declaration Merging** គឺជាមុខងារដែល Compiler របស់ TypeScript យកការប្រកាសពីរ ឬច្រើនដែលមានឈ្មោះដូចគ្នា ដើម្បីច្របាច់បញ្ចូលគ្នាទៅជានិយមន័យតែមួយ។

### ការច្របាច់បញ្ចូល Interface
ប្រសិនបើអ្នកកំណត់ Interface ដែលមានឈ្មោះដូចគ្នាជាច្រើនដង នោះសមាជិករបស់ពួកវានឹងច្របាច់ចូលគ្នាដោយស្វ័យប្រវត្ត៖
\`\`\`typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

// Interface លទ្ធផលគឺ៖ { name: string; age: number; }
\`\`\`

វាត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយដោយកម្មវិធីជំនួយ (Plugins) ដើម្បីបន្ថែម Properties ទៅលើបណ្ណាល័យចម្បងៗ (ដូចជាការបន្ថែមទិន្នន័យចូលទៅក្នុង Express Request)។`
    },
    starterCode: `interface AppWindow {
  title: string;
}

// Merging second interface declaration
interface AppWindow {
  width: number;
}

const myWindow: AppWindow = {
  title: "Main Cambodian Dashboard",
  width: 1920
};

console.log(\`Window \${myWindow.title} configured with width: \${myWindow.width}px\`);
`
  },
  {
    id: "ts-async",
    title: {
      en: "TS Async Programming",
      km: "កូដអសមកាល (Async)"
    },
    content: {
      en: `### Asynchronous TypeScript
TypeScript fully supports modern asynchronous programming using ES6 Promises and \`async/await\` syntax, adding strong type safety to asynchronous outputs.

### Typing Promises
A Promise is a generic class, so you type it using \`Promise<T>\` where \`T\` is the type of the resolved value:

\`\`\`typescript
async function fetchUserScore(id: number): Promise<number> {
  return 98; // Resolves with a number
}
\`\`\``,
      km: `### កូដអសមកាល (Async Programming)
TypeScript គាំទ្រការសរសេរកូដអសមកាលទំនើបពេញលេញ ដោយប្រើប្រាស់ ES6 Promises និង \`async/await\` ព្រមទាំងបន្ថែមសុវត្ថិភាពប្រភេទទៅលើលទ្ធផលអសមកាលទាំងនោះ។

### ការកំណត់ប្រភេទ Promises
Promise គឺជា Class ប្រភេទ Generic ដូច្នេះអ្នកត្រូវសរសេរវាជា \`Promise<T>\` ដែល \`T\` គឺជាប្រភេទតម្លៃដែលទទួលបានក្រោយការដោះស្រាយ (Resolved value)៖

\`\`\`typescript
async function fetchUserScore(id: number): Promise<number> {
  return 98; // ត្រឡប់មកវិញជាលេខ
}
\`\`\``
    },
    starterCode: `interface Post {
  id: number;
  title: string;
}

// Async function returning a strongly typed Promise
async function getPostById(postId: number): Promise<Post> {
  return {
    id: postId,
    title: "Learning TypeScript in Phnom Penh"
  };
}

getPostById(5).then(post => {
  console.log(\`Loaded Post #\${post.id}: "\${post.title}"\`);
});
`
  },
  {
    id: "ts-decorators",
    title: {
      en: "TS Decorators",
      km: "អ្នកតុបតែង (Decorators)"
    },
    content: {
      en: `### What are Decorators?
**Decorators** are a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the \`@expression\` form.

> **Note:** Decorators are an experimental feature in TypeScript but are standard in ECMAScript now. They are heavily utilized in enterprise frameworks like Angular and NestJS.

### Class Decorator Example
\`\`\`typescript
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
}
\`\`\``,
      km: `### តើអ្វីជា Decorators?
**Decorators** គឺជាប្រភេទនៃការប្រកាសពិសេសមួយដែលអាចភ្ជាប់ទៅនឹង Class, Method, Accessor, Property ឬ Parameter។ Decorators ប្រើប្រាស់និមិត្តសញ្ញា \`@expression\`។

> **ចំណាំ:** Decorators គឺជាមុខងារបន្ថែមសាកល្បងនៅក្នុង TS តែឥឡូវជាស្តង់ដាររបស់ JS (ECMAScript) ហើយ។ វាត្រូវបានប្រើប្រាស់ច្រើនបំផុតនៅក្នុងប្រព័ន្ធ Frameworks លំដាប់ធំៗ ដូចជា Angular និង NestJS។

### ឧទាហរណ៍ Class Decorator
\`\`\`typescript
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
}
\`\`\``
    },
    starterCode: `// Simulating decorator functions in plain typescript environment
function LogClass(target: Function) {
  console.log("Class registered successfully:", target.name);
}

@LogClass
class CourseModule {
  constructor(public title: string) {}
}

const module1 = new CourseModule("TypeScript Deep Dive");
`
  },
  {
    id: "ts-js-projects",
    title: {
      en: "TS in JS Projects",
      km: "TS ក្នុងគម្រោង JS"
    },
    content: {
      en: `### Integrating TypeScript in JS Projects
You don't need to rewrite your entire project to get TypeScript benefits. You can start small:

1. **JSDoc Typing:** Add type safety inside standard \`.js\` files using annotations in comments:
\`\`\`javascript
/**
 * @param {string} name
 * @param {number} age
 * @returns {string}
 */
function greet(name, age) {
  return \`Name: \${name}, Age: \${age}\`;
}
\`\`\`

2. **Allow JavaScript Compilation:** Enable \`allowJs\` inside your \`tsconfig.json\` to compile both files simultaneously.`,
      km: `### ការប្រើប្រាស់ TypeScript ក្នុងគម្រោង JS
អ្នកមិនចាំបាច់សរសេរគម្រោងទាំងមូលរបស់អ្នកឡើងវិញដើម្បីទទួលបានអត្ថប្រយោជន៍របស់ TypeScript នោះទេ។ អ្នកអាចចាប់ផ្តើមពីតូចៗ៖

1. **JSDoc Typing:** បន្ថែមសុវត្ថិភាពប្រភេទនៅក្នុងឯកសារ \`.js\` ធម្មតាដោយប្រើប្រាស់ Comment Annotations៖
\`\`\`javascript
/**
 * @param {string} name
 * @param {number} age
 * @returns {string}
 */
function greet(name, age) {
  return \`Name: \${name}, Age: \${age}\`;
}
\`\`\`

2. **អនុញ្ញាតការបកប្រែ JavaScript:** បើកដំណើរការ \`allowJs\` នៅក្នុង \`tsconfig.json\` ដើម្បីឱ្យ Compiler ដំណើរការឯកសារទាំងពីរជាមួយគ្នាបាន។`
    },
    starterCode: `// JSDoc validation example parsed by typescript compiler engine
/**
 * Calculates discount
 * @param {number} totalAmount
 * @param {number} discountPercent
 * @returns {number}
 */
function getDiscount(totalAmount, discountPercent) {
  return totalAmount * (discountPercent / 100);
}

const totalSaved = getDiscount(500, 10);
console.log("Calculated savings via JSDoc validation:", totalSaved);
`
  },
  {
    id: "ts-migration",
    title: {
      en: "TS Migration",
      km: "ការផ្លាស់ប្តូរទៅកាន់ TS"
    },
    content: {
      en: `### Migrating a JS Project to TypeScript
Migrating an existing codebase to TypeScript can be done incrementally using these steps:

1. **Add \`tsconfig.json\`:** Initialize with \`npx tsc --init\` and set \`allowJs: true\`.
2. **Rename Files:** Change your source files from \`.js\` to \`.ts\` (or \`.jsx\` to \`.tsx\`) one file at a time.
3. **Address Type Errors:** Start adding type declarations, interfaces, or use \`any\` temporary bypasses where necessary.
4. **Enable Strict Modes:** Once your codebase compiles cleanly, set \`strict: true\` to unlock maximum protection.`,
      km: `### ការផ្លាស់ប្តូរគម្រោងពី JS ទៅកាន់ TS (Migration)
ការប្តូរកូដដែលមានស្រាប់ទៅកាន់ TypeScript អាចធ្វើឡើងជាជំហានៗដូចខាងក្រោម៖

1. **បន្ថែម \`tsconfig.json\`:** បង្កើតដោយប្រើ \`npx tsc --init\` និងកំណត់ \`allowJs: true\`។
2. **ប្តូរឈ្មោះឯកសារ:** ប្តូរឈ្មោះឯកសារពី \`.js\` ទៅ \`.ts\` (ឬ \`.jsx\` ទៅ \`.tsx\`) ម្តងមួយឯកសារៗ។
3. **ដោះស្រាយកំហុសប្រភេទ:** ចាប់ផ្តើមបន្ថែមការប្រកាសប្រភេទ, interfaces ឬប្រើប្រាស់ \`any\` បណ្តោះអាសន្នបើចាំបាច់។
4. **បើកដំណើរការ Strict Mode:** ពេលកូដបកប្រែបានរលូនគ្មានកំហុស សូមកំណត់ \`strict: true\` ដើម្បីទទួលបានសុវត្ថិភាពអតិបរមា។`
    },
    starterCode: `// Step-by-step conversion simulation:
// Original JS:
// function renderItem(item) { return item.id + ": " + item.name; }

// Migrated to TypeScript:
interface Displayable {
  id: number;
  name: string;
}

function renderItem(item: Displayable): string {
  return \`#\${item.id} - \${item.name}\`;
}

console.log(renderItem({ id: 99, name: "Smart Device" }));
`
  },
  {
    id: "ts-error-handling",
    title: {
      en: "TS Error Handling",
      km: "ការគ្រប់គ្រងកំហុសក្នុង TS"
    },
    content: {
      en: `### Error Handling in TypeScript
TypeScript supports standard JavaScript \`try/catch\` blocks, but enforces stronger typing for errors.

### Catching \`unknown\` Errors
In recent versions, the caught error object inside a \`catch\` block defaults to type \`unknown\`. This forces you to check its type before reading properties (like \`message\`):

\`\`\`typescript
try {
  throw new Error("Something went wrong!");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message); // Allowed
  } else {
    console.log("Unknown error!");
  }
}
\`\`\``,
      km: `### ការគ្រប់គ្រងកំហុស (Error Handling)
TypeScript គាំទ្រការប្រើប្រាស់ប្លុក \`try/catch\` ធម្មតារបស់ JavaScript ប៉ុន្តែពង្រឹងការកំណត់ប្រភេទទិន្នន័យនៃកំហុស (Error Types) ឱ្យមានសុវត្ថិភាពជាងមុន។

### ការចាប់យកកំហុសប្រភេទ \`unknown\`
នៅក្នុងជំនាន់ថ្មីៗ កំហុសដែលចាប់បាននៅក្នុងប្លុក \`catch\` នឹងមានប្រភេទជា \`unknown\` ជាលំនាំដើម។ វាបង្ខំឱ្យយើងផ្ទៀងផ្ទាត់ប្រភេទរបស់វាជាមុនសិន មុននឹងទាញយកព័ត៌មានកំហុស៖

\`\`\`typescript
try {
  throw new Error("Something went wrong!");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message); // ត្រូវបានអនុញ្ញាត
  } else {
    console.log("Unknown error!");
  }
}
\`\`\``
    },
    starterCode: `try {
  // Simulate an error
  throw new Error("ប្រព័ន្ធគណនាមានបញ្ហា (Calculation Error!)");
} catch (err: unknown) {
  // Safe type narrowing
  if (err instanceof Error) {
    console.error("Caught expected error message:", err.message);
  } else {
    console.error("Caught unspecified error structure");
  }
}
`
  },
  {
    id: "ts-best-practices",
    title: {
      en: "TS Best Practices",
      km: "ការអនុវត្តល្អបំផុតក្នុង TS"
    },
    content: {
      en: `### TypeScript Best Practices
To write clean, enterprise-ready TypeScript, follow these golden rules:

- **Avoid \`any\`:** Overusing \`any\` disables TypeScript's safety features. Prefer \`unknown\` or union types.
- **Enable \`strict\` Mode:** Always set \`strict: true\` in \`tsconfig.json\` for maximum security.
- **Prefer Interfaces over Aliases for Objects:** Interfaces are extendable, perform better, and produce clearer compiler messages.
- **Initialize Variables Correctly:** Minimize nullable fields where possible.
- **Keep Types DRY:** Use utility types (\`Pick\`, \`Omit\`, \`Partial\`) to reuse structures rather than rewriting them.`,
      km: `### របៀបអនុវត្តល្អបំផុតសម្រាប់ TypeScript (Best Practices)
ដើម្បីសរសេរកូដ TypeScript ឱ្យបានស្អាត និងមានប្រសិទ្ធភាពខ្ពស់ សូមអនុវត្តតាមគោលការណ៍មាសខាងក្រោម៖

- **ជៀសវាង \`any\`:** ការប្រើប្រាស់ \`any\` ច្រើនពេកនឹងបិទប្រព័ន្ធសុវត្ថិភាពរបស់ TS។ គួរប្រើ \`unknown\` ឬ Union Types ជំនួសវិញ។
- **បើកដំណើរការ \`strict\` Mode:** កំណត់ \`strict: true\` នៅក្នុង \`tsconfig.json\` ជានិច្ចដើម្បីសុវត្ថិភាពខ្ពស់បំផុត។
- **ប្រើ Interface ល្អជាង Type Alias សម្រាប់ Objects:** Interfaces អាចពង្រីកបាន និងផ្តល់សារកំហុសច្បាស់លាស់ជាងពេល Compile។
- **ប្រកាសអថេរដោយមានតម្លៃត្រឹមត្រូវ:** កាត់បន្ថយការប្រើប្រាស់តម្លៃ Nullable តាមដែលអាចធ្វើបាន។
- **កុំសរសេរកូដដដែលៗ (DRY Types):** ប្រើប្រាស់ Utility Types (\`Pick\`, \`Omit\`, \`Partial\`) ដើម្បីប្រើឡើងវិញនូវរចនាសម្ព័ន្ធកូដដែលមានស្រាប់។`
    },
    starterCode: `// Practical application of Best Practices:
// Using explicit, DRY interface properties instead of loose types
interface Product {
  id: number;
  title: string;
  price: number;
}

// Reuse product properties safely using Partial utility
function updateProduct(productId: number, fieldsToUpdate: Partial<Product>) {
  console.log(\`Updating product #\${productId} with details:\`, fieldsToUpdate);
}

updateProduct(1045, { price: 29.99 });
`
  }
];
