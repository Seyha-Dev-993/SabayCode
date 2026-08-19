import { Lesson } from '../types';

export const typescriptLessonsPart3: Lesson[] = [
  {
    id: "ts-5-updates",
    title: {
      en: "TS 5 Updates",
      km: "កំណែទម្រង់ TS 5"
    },
    content: {
      en: `### What's New in TypeScript 5.x?
TypeScript 5 introduced several powerful new features, optimization improvements, and clean syntax updates:

- **Decorators Support:** Standardized ECMAScript Decorators support.
- **const Type Parameters:** Allows you to specify \`const\` on generic type parameters to infer literal types automatically.
- **Multiple Config Inheritance:** \`tsconfig.json\` can now extend multiple files.
- **Speed & Size Optimizations:** Massive performance updates make compilation much faster.

### Const Type Parameter Example
\`\`\`typescript
function getNames<const T extends readonly string[]>(names: T) {
  return names;
}
// Inferred as readonly ["Dara", "Sok"] instead of string[]
const names = getNames(["Dara", "Sok"]); 
\`\`\``,
      km: `### តើមានអ្វីថ្មីនៅក្នុង TypeScript 5.x?
TypeScript 5 បាននាំមកនូវលក្ខណៈពិសេសថ្មីៗ បង្កើនល្បឿនដំណើរការ និងការសម្រួលវេយ្យាករណ៍យ៉ាងច្រើន៖

- **ការគាំទ្រ Decorators:** គាំទ្រស្តង់ដារ Decorators ផ្លូវការរបស់ ECMAScript។
- **const Type Parameters:** អនុញ្ញាតឱ្យប្រើ \`const\` លើប៉ារ៉ាម៉ែត្រប្រភេទ Generic ដើម្បីយល់ដឹងពីប្រភេទ Literal ដោយស្វ័យប្រវត្តិ។
- **ការបន្តវេនពី Config ច្រើន:** ឯកសារ \`tsconfig.json\` អាចទាញយកការកំណត់ (Extend) ពីឯកសារកំណត់រចនាសម្ព័ន្ធច្រើនក្នុងពេលតែមួយ។
- **ការបង្កើនល្បឿន និងទំហំ:** ការកែលម្អយ៉ាងធំធ្វើឱ្យការបកប្រែកូដលឿនជាងមុនឆ្ងាយ។

### ឧទាហរណ៍ Const Type Parameter
\`\`\`typescript
function getNames<const T extends readonly string[]>(names: T) {
  return names;
}
// យល់ដឹងជា readonly ["Dara", "Sok"] ជំនួសឱ្យ string[] ធម្មតា
const names = getNames(["Dara", "Sok"]); 
\`\`\``
    },
    starterCode: `// Example of const generic parameters from TS 5.0
function makeReadOnlyPair<const T extends readonly [any, any]>(pair: T): T {
  return pair;
}

const pair = makeReadOnlyPair(["currency", "KHR"]);
console.log("TS 5.0 Literal Pair:", pair[0], "->", pair[1]);
`
  },
  {
    id: "ts-configuration",
    title: {
      en: "TS Configuration",
      km: "ការកំណត់រចនាសម្ព័ន្ធ TS"
    },
    content: {
      en: `### Configuring TypeScript
The \`tsconfig.json\` file specifies the root files and the compiler options required to compile the project.

### Core Compiler Options
- **target:** Specifies the ECMAScript target version (e.g., \`ES6\`, \`ESNext\`).
- **module:** Specifies the module code generation (e.g., \`CommonJS\`, \`ESNext\`).
- **strict:** Enables a broad range of type checking behaviors that guarantee stronger type safety.
- **outDir:** Specifies the output directory for compiled JS files.

### Example \`tsconfig.json\`
\`\`\`json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "esModuleInterop": true
  }
}
\`\`\``,
      km: `### ការកំណត់រចនាសម្ព័ន្ធ (tsconfig.json)
ឯកសារ \`tsconfig.json\` បញ្ជាក់អំពីឯកសារដើម និងជម្រើស Compiler (Compiler Options) ដែលចាំបាច់ដើម្បីបកប្រែគម្រោង។

### ជម្រើសចម្បងៗរបស់ Compiler
- **target:** បញ្ជាក់ជំនាន់ JavaScript ដែលចង់ទទួលបានក្រោយពេលបកប្រែរួច (ឧទាហរណ៍៖ \`ES6\`, \`ESNext\`)។
- **module:** បញ្ជាក់ប្រព័ន្ធ Module (ឧទាហរណ៍៖ \`CommonJS\`, \`ESNext\`)។
- **strict:** បើកដំណើរការការពិនិត្យប្រភេទដ៏តឹងរ៉ឹងបំផុតដើម្បីធានាសុវត្ថិភាពខ្ពស់។
- **outDir:** បញ្ជាក់ថតដែលផ្ទុកឯកសារ \`.js\` ដែលបកប្រែរួច។

### ឧទាហរណ៍ \`tsconfig.json\`
\`\`\`json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "esModuleInterop": true
  }
}
\`\`\``
    },
    starterCode: `// TSConfig settings are conceptual. 
// In this lesson, we demonstrate the strict mode behavior of typescript compiled on fly.
// Try setting 'strictNullChecks' equivalent programmatically:

let email: string | undefined = undefined;

if (email === undefined) {
  console.log("No email provided. Strict null-checking active!");
} else {
  console.log("Email is:", email);
}
`
  },
  {
    id: "ts-node",
    title: {
      en: "TS with Node.js",
      km: "TS ជាមួយ Node.js"
    },
    content: {
      en: `### Running TypeScript in Node.js
Node.js does not run TypeScript files (\`.ts\`) natively. To develop with TypeScript in a Node.js project, you have a couple of options:

1. **Compile and Run:** Compile with \`tsc\` to JS, then run with Node:
\`\`\`bash
tsc
node dist/index.js
\`\`\`

2. **Direct Execution with TSX / TS-Node:** Use toolkits that compile in-memory for instant execution in dev environments:
\`\`\`bash
npm install -D tsx
npx tsx index.ts
\`\`\`

This enables seamless Node.js backend development using TypeScript!`,
      km: `### ការប្រើប្រាស់ TypeScript ជាមួយ Node.js
Node.js មិនដំណើរការឯកសារ TypeScript (\`.ts\`) ដោយផ្ទាល់នោះទេ។ ដើម្បីអភិវឌ្ឍជាមួយ TypeScript នៅក្នុងគម្រោង Node.js អ្នកមានជម្រើសពីរ៖

1. **Compile រួចរត់:** បកប្រែដោយប្រើ \`tsc\` ទៅជា JS រួចដំណើរការជាមួយ Node៖
\`\`\`bash
tsc
node dist/index.js
\`\`\`

2. **ដំណើរការផ្ទាល់ជាមួយ TSX / TS-Node:** ប្រើប្រាស់ឧបករណ៍ដែលបកប្រែក្នុងម៉ាស៊ីនចងចាំ (In-memory) សម្រាប់ការដំណើរការភ្លាមៗក្នុងដំណាក់កាលអភិវឌ្ឍន៍៖
\`\`\`bash
npm install -D tsx
npx tsx index.ts
\`\`\`

វាអនុញ្ញាតឱ្យការអភិវឌ្ឍប្រព័ន្ធ Backend ដំណើរការទៅដោយរលូន និងមានសុវត្ថិភាព!`
    },
    starterCode: `// Conceptual model of a server-side route handler in Express + TypeScript
interface Request {
  params: { id: string };
  body: any;
}

interface Response {
  json: (data: any) => void;
  status: (code: number) => Response;
}

function getUser(req: Request, res: Response) {
  const userId = req.params.id;
  res.json({ id: userId, username: "Dara Backend Developer" });
}

console.log("NodeJS Mock Controller defined successfully!");
`
  },
  {
    id: "ts-react",
    title: {
      en: "TS with React",
      km: "TS ជាមួយ React"
    },
    content: {
      en: `### Using TypeScript with React
React and TypeScript are a perfect combination. Typing React components ensures you pass the correct props and manage state securely.

### Component Props Type
\`\`\`tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
\`\`\`

### useState Hooks
TypeScript automatically infers state types or you can declare them explicitly:
\`\`\`tsx
const [user, setUser] = useState<User | null>(null);
\`\`\``,
      km: `### ការប្រើប្រាស់ TypeScript ជាមួយ React
React និង TypeScript គឺជាការរួមបញ្ចូលគ្នាដ៏ល្អឥតខ្ចោះ។ ការកំណត់ប្រភេទឱ្យសមាសភាគ React ធានាការបញ្ជូន Props ត្រឹមត្រូវ និងគ្រប់គ្រង State ប្រកបដោយសុវត្ថិភាព។

### ប្រភេទលក្ខណៈ (Props)
\`\`\`tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
\`\`\`

### useState Hooks
TypeScript កំណត់ប្រភេទ State ដោយស្វ័យប្រវត្តិ ឬអ្នកអាចកំណត់វាដោយផ្ទាល់៖
\`\`\`tsx
const [user, setUser] = useState<User | null>(null);
\`\`\``
    },
    starterCode: `// Simulating React component state and updates in TypeScript
interface ComponentProps {
  title: string;
  likesCount: number;
}

function renderMockComponent(props: ComponentProps) {
  console.log(\`Rendering [ \${props.title} ] with Likes: \${props.likesCount}\`);
}

renderMockComponent({ title: "Bilingual TS Tutorial", likesCount: 420 });
`
  },
  {
    id: "ts-tooling",
    title: {
      en: "TS Tooling",
      km: "ឧបករណ៍គាំទ្រ TS"
    },
    content: {
      en: `### Developer Tooling for TypeScript
A huge part of TypeScript's value comes from the advanced tooling ecosystem:

1. **ESLint:** Lints TypeScript code for style and potential anti-patterns.
2. **Prettier:** Automatically formats code files uniformly.
3. **Vite:** High-performance frontend tool that natively parses TypeScript out of the box using esbuild.
4. **VS Code Integration:** Best-in-class support, providing instant inline error squiggles, type signatures, and automated imports.`,
      km: `### ឧបករណ៍អភិវឌ្ឍន៍សម្រាប់ TypeScript
តម្លៃពិតប្រាកដមួយផ្នែកធំរបស់ TypeScript គឺបានមកពីប្រព័ន្ធឧបករណ៍អភិវឌ្ឍន៍កម្រិតខ្ពស់របស់វា៖

1. **ESLint:** ពិនិត្យកូដដើម្បីស្វែងរកបញ្ហារចនាបថ និងកូដមិនល្អ។
2. **Prettier:** រៀបចំទម្រង់កូដឱ្យមានរបៀបរៀបរយដោយស្វ័យប្រវត្តិ។
3. **Vite:** ឧបករណ៍អភិវឌ្ឍន៍ Frontend ល្បឿនលឿនដែលគាំទ្រការវិភាគ TypeScript ភ្លាមៗតាំងពីដំបូងដោយប្រើ esbuild។
4. **VS Code Integration:** ឧបករណ៍សរសេរកូដដែលផ្តល់ការគាំទ្រល្អបំផុត ជួយបង្ហាញបន្ទាត់ក្រហមពេលខុសកូដភ្លាមៗ និងជួយនាំចូលកូដស្វ័យប្រវត្តិ។`
    },
    starterCode: `// Highlighting tooling-enabled features (IntelliSense auto-import checks)
interface Tool {
  name: string;
  category: "Linter" | "Bundler" | "Formatter";
}

const toolingSetup: Tool[] = [
  { name: "ESLint", category: "Linter" },
  { name: "Vite", category: "Bundler" },
  { name: "Prettier", category: "Formatter" }
];

console.log("TypeScript Tooling Inventory:", toolingSetup);
`
  },
  {
    id: "ts-advanced-types",
    title: {
      en: "TS Advanced Types",
      km: "ប្រភេទកម្រិតខ្ពស់ក្នុង TS"
    },
    content: {
      en: `### Advanced Types in TypeScript
TypeScript has powerful type manipulation capabilities:

- **Intersection Types (\`&\`):** Combines multiple types into one:
\`\`\`typescript
type Student = { school: string };
type Scholar = Person & Student;
\`\`\`

- **Type Guards:** Narrowing down types of variables within conditional blocks.
- **Index Signatures:** Used to type objects with dynamic keys.
- **Generics Constraints:** Limiting what types a generic parameter can accept:
\`\`\`typescript
function logLength<T extends { length: number }>(item: T) {
  console.log(item.length);
}
\`\`\``,
      km: `### ប្រភេទកម្រិតខ្ពស់នៅក្នុង TypeScript
TypeScript មានសមត្ថភាពកែច្នៃប្រភេទកូដដ៏មានឥទ្ធិពលបំផុត៖

- **Intersection Types (\`&\`):** ច្របាច់បញ្ចូលគ្នានៃប្រភេទច្រើនចូលគ្នា៖
\`\`\`typescript
type Student = { school: string };
type Scholar = Person & Student;
\`\`\`

- **Type Guards:** ការច្របៀតប្រភេទអថេរនៅក្នុងប្លុកលក្ខខណ្ឌ។
- **Index Signatures:** ប្រើសម្រាប់កំណត់ប្រភេទរបស់ Object ដែលមាន Keys ផ្លាស់ប្តូរឌីណាមិក។
- **Generics Constraints:** កំណត់ដែនកំណត់សម្រាប់ប្រភេទដែលអាចប្រើក្នុង Generic៖
\`\`\`typescript
function logLength<T extends { length: number }>(item: T) {
  console.log(item.length);
}
\`\`\``
    },
    starterCode: `type Host = { host: string; port: number };
type Credentials = { apiKey: string };

// Intersection Type combines both
type ServerConfig = Host & Credentials;

const productionServer: ServerConfig = {
  host: "api.domain.kh",
  port: 443,
  apiKey: "sec_key_example_123"
};

console.log("Production server host:", productionServer.host);
`
  },
  {
    id: "ts-type-guards",
    title: {
      en: "TS Type Guards",
      km: "ការច្របៀតប្រភេទ (Type Guards)"
    },
    content: {
      en: `### Type Guards & Narrowing
A **Type Guard** is an expression that performs a runtime check that guarantees the type of a variable in some scope.

### Custom User-Defined Type Guards
You can write functions that return type predicates like \`pet is Fish\`:
\`\`\`typescript
interface Bird { fly(): void; }
interface Fish { swim(): void; }

function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

if (isFish(myPet)) {
  myPet.swim();
} else {
  myPet.fly();
}
\`\`\`

TypeScript compiles this and understands that inside the \`if\` block, \`myPet\` is 100% a \`Fish\`.`,
      km: `### ការការពារប្រភេទ (Type Guards & Narrowing)
**Type Guard** គឺជាកូដពិនិត្យលក្ខខណ្ឌក្នុងពេលរត់ (Runtime Check) ដើម្បីធានាពីប្រភេទពិតប្រាកដរបស់អថេរនៅក្នុងផ្នែកណាមួយនៃកូដ។

### របៀបបង្កើត Type Guards ផ្ទាល់ខ្លួន
អ្នកអាចសរសេរអនុគមន៍ដែលត្រឡប់មកវិញនូវសេចក្តីបញ្ជាក់ប្រភេទ (Type Predicate) ដូចជា \`pet is Fish\`៖
\`\`\`typescript
interface Bird { fly(): void; }
interface Fish { swim(): void; }

function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

if (isFish(myPet)) {
  myPet.swim(); // TS ដឹងថាជាត្រីពិតប្រាកដ
} else {
  myPet.fly();  // TS ដឹងថាជាបក្សី
}
\`\`\``
    },
    starterCode: `interface Car { drive(): void; }
interface Boat { sail(): void; }

function isBoat(vehicle: Car | Boat): vehicle is Boat {
  return (vehicle as Boat).sail !== undefined;
}

const transport: Car | Boat = {
  sail: () => console.log("Sailing on the Mekong river!")
};

if (isBoat(transport)) {
  transport.sail();
} else {
  transport.drive();
}
`
  },
  {
    id: "ts-conditional-types",
    title: {
      en: "TS Conditional Types",
      km: "ប្រភេទតាមលក្ខខណ្ឌ"
    },
    content: {
      en: `### Conditional Types
**Conditional Types** help express non-uniform type mappings based on a relation test. They look like ternary operators:

\`\`\`typescript
SomeType extends OtherType ? TrueType : FalseType;
\`\`\`

### Practical Use
\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
\`\`\`

This is the foundation for advanced, dynamic type generation in large libraries.`,
      km: `### ប្រភេទតាមលក្ខខណ្ឌ (Conditional Types)
**Conditional Types** ជួយបង្កើតគំរូប្រភេទទិន្នន័យឌីណាមិកដោយផ្អែកលើការផ្ទៀងផ្ទាត់លក្ខខណ្ឌ។ វាមានទម្រង់ដូចជាប្រមាណវិធី Ternary Operator ដែរ៖

\`\`\`typescript
SomeType extends OtherType ? TrueType : FalseType;
\`\`\`

### ឧទាហរណ៍ជាក់ស្តែង
\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
\`\`\`

វាជាគ្រឹះមូលដ្ឋានសម្រាប់ការបង្កើតប្រភេទទិន្នន័យឌីណាមិកកម្រិតខ្ពស់នៅក្នុងបណ្ណាល័យធំៗ។`
    },
    starterCode: `// Define a conditional type that extracts string or fallback type
type CheckType<T> = T extends string ? "It's a String!" : "Not a String!";

type T1 = CheckType<string>;
type T2 = CheckType<number>;

const res1: T1 = "It's a String!";
const res2: T2 = "Not a String!";

console.log("T1 result is:", res1);
console.log("T2 result is:", res2);
`
  },
  {
    id: "ts-mapped-types",
    title: {
      en: "TS Mapped Types",
      km: "ប្រភេទផែនទី (Mapped Types)"
    },
    content: {
      en: `### Mapped Types
When you don't want to repeat yourself, you can use a **Mapped Type** to build a new type based on another type.

### Syntax
Mapped types utilize the \`in\` keyword to iterate over keys of an existing type or union:
\`\`\`typescript
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
\`\`\`

### Practical Application
If you have a type \`Features\`, you can dynamically construct a type with the exact same fields set to booleans:
\`\`\`typescript
type Features = { darkMode: () => void; newUser: () => void };
type FeatureFlags = OptionsFlags<Features>; 
// Result: { darkMode: boolean; newUser: boolean; }
\`\`\``,
      km: `### ប្រភេទផែនទី (Mapped Types)
នៅពេលអ្នកចង់កាត់បន្ថយការសរសេរកូដច្រំដែល អ្នកអាចប្រើប្រាស់ **Mapped Type** ដើម្បីបង្កើតប្រភេទថ្មីមួយដោយផ្អែកលើប្រភេទដែលមានស្រាប់។

### របៀបសរសេរ
Mapped types ប្រើប្រាស់ពាក្យគន្លឹះ \`in\` ដើម្បីរត់ឆ្លងកាត់ Keys ទាំងអស់របស់ប្រភេទដែលមានស្រាប់៖
\`\`\`typescript
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
\`\`\`

### ការប្រើប្រាស់ជាក់ស្តែង
បើអ្នកមានប្រភេទ \`Features\` អ្នកអាចបង្កើតប្រភេទថ្មីមួយដែលមានលក្ខណៈដូចគ្នាទាំងអស់ប៉ុន្តែមានតម្លៃជា boolean៖
\`\`\`typescript
type Features = { darkMode: () => void; newUser: () => void };
type FeatureFlags = OptionsFlags<Features>; 
// លទ្ធផល៖ { darkMode: boolean; newUser: boolean; }
\`\`\``
    },
    starterCode: `interface AppSettings {
  vibration: string;
  soundLevel: number;
}

// Convert all properties of a type to Readonly using mapping
type Lock<T> = {
  readonly [P in keyof T]: T[P];
};

const lockedConfig: Lock<AppSettings> = {
  vibration: "High",
  soundLevel: 80
};

console.log("Locked vibration setting is:", lockedConfig.vibration);
`
  },
  {
    id: "ts-type-inference",
    title: {
      en: "TS Type Inference",
      km: "ស្វែងយល់ប្រភេទស្វ័យប្រវត្តិ"
    },
    content: {
      en: `### Deep Dive into Type Inference
TypeScript's type inference engine is incredibly smart. It doesn't just guess types on declaration, it also tracks assignments and flows:

- **Best Common Type:** When candidate types are shared (e.g. array of different types).
- **Contextual Typing:** The type of an expression is inferred by its location (e.g. callback arguments of events).

\`\`\`typescript
// Contextual type of event parameter is automatically MouseEvent in standard React
window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button); // No error!
};
\`\`\``,
      km: `### ការស្វែងយល់ប្រភេទយ៉ាងស៊ីជម្រៅ (Inference Engine)
ម៉ាស៊ីនស្វែងយល់ប្រភេទស្វ័យប្រវត្តរបស់ TypeScript វៃឆ្លាតណាស់។ វាមិនត្រឹមតែកំណត់ប្រភេទពេលបង្កើតអថេរនោះទេ តែវាក៏តាមដានរាល់ការផ្តល់តម្លៃ និងទិសដៅកូដផងដែរ៖

- **Best Common Type (ប្រភេទរួមល្អបំផុត):** ជ្រើសរើសប្រភេទរួមគ្នាដែលសមស្របបំផុតសម្រាប់ធាតុចម្រុះ។
- **Contextual Typing (ប្រភេទតាមបរិបទ):** ប្រភេទអថេរត្រូវបានយល់ដឹងដោយផ្អែកលើទីតាំងដែលវាស្ថិតនៅ (ដូចជាប៉ារ៉ាម៉ែត្រក្នុង Callback Events)។

\`\`\`typescript
// ប្រភេទនៃ event ត្រូវបានកំណត់ជា MouseEvent ដោយស្វ័យប្រវត្តតាមបរិបទ
window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button); // មិនមានកំហុសទេ!
};
\`\`\``
    },
    starterCode: `// TS infers the array type as (string | number)[]
const mixedArray = [1, "two", 3, "four"];

console.log("Mixed Inferred Array:", mixedArray);

// Let's iterate and see how TS helps with dynamic item types
mixedArray.forEach(item => {
  if (typeof item === "string") {
    console.log("Text item:", item.toUpperCase());
  } else {
    console.log("Number item:", item + 10);
  }
});
`
  }
];
