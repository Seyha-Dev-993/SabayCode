import { Lesson } from '../types';

export const javascriptLessonsPart3: Lesson[] = [
  {
    id: "js-functions-adv",
    title: { en: "JS Functions (Advanced)", km: "អនុគមន៍កម្រិតខ្ពស់" },
    content: {
      en: `### Advanced JavaScript Functions
Let's dive deeper into functions. JavaScript functions are **first-class citizens**, meaning they can be treated like any other variable.

### Essential Concepts
- **Closures**: A function that retains access to its outer lexical scope even after the outer function has finished executing.
- **Callbacks**: A function passed into another function as an argument to be executed later.
- **Higher-Order Functions**: Functions that take other functions as arguments or return them (like \`map\` or \`filter\`).
- **IIFE (Immediately Invoked Function Expressions)**: Functions that run immediately as soon as they are defined.

> **Tip:** Closures are highly useful for creating private variables inside functions that cannot be accessed or changed from the outside global scope.`,
      km: `### អនុគមន៍កម្រិតខ្ពស់នៅក្នុង JavaScript (Advanced Functions)
ស្វែងយល់លម្អិតអំពីអនុគមន៍។ នៅក្នុង JavaScript អនុគមន៍គឺជា **First-Class Citizens** ដែលមានន័យថាវាអាចត្រូវបានចាត់ទុក និងប្រើប្រាស់ដូចជាអថេរទូទៅដែរ។

### គោលគំនិតសំខាន់ៗ
- **Closures**៖ អនុគមន៍ដែលរក្សាលទ្ធភាពចូលប្រើប្រាស់អថេរនៃ Scope ខាងក្រៅរបស់វា ទោះបីជាអនុគមន៍ខាងក្រៅនោះបានបញ្ចប់ដំណើរការរួចហើយក៏ដោយ។
- **Callbacks**៖ អនុគមន៍ដែលត្រូវបានបញ្ជូនទៅក្នុងអនុគមន៍មួយទៀតក្នុងនាមជា Argument ដើម្បីរង់ចាំដំណើរការនៅពេលក្រោយ។
- **Higher-Order Functions**៖ អនុគមន៍ដែលទទួលយកអនុគមន៍ផ្សេងទៀតជា Parameters ឬបញ្ចេញមកវិញនូវអនុគមន៍ផ្សេងទៀត (ដូចជា \`map\` ឬ \`filter\`)។
- **IIFE**៖ អនុគមន៍ដែលដំណើរការដោយស្វ័យប្រវត្តភ្លាមៗ នៅពេលដែលវាត្រូវបានបង្កើតឡើងរួចរាល់។

> **អនុសាសន៍:** Closures មានប្រយោជន៍ខ្លាំងណាស់ក្នុងការបង្កើតអថេរឯកជន (Private Variables) នៅក្នុងអនុគមន៍ដែលមិនអាចចូលទៅកែប្រែបានពីផ្នែកខាងក្រៅ។`
    },
    starterCode: `// Closure Demo: Private Counter
function createCounter() {
  let count = 0; // Private variable
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  };
}

const myCounter = createCounter();
console.log("Count is:", myCounter.increment()); // 1
console.log("Count is:", myCounter.increment()); // 2
console.log("Count is:", myCounter.decrement()); // 1`
  },
  {
    id: "js-objects-adv",
    title: { en: "JS Objects (Advanced)", km: "វត្ថុកម្រិតខ្ពស់" },
    content: {
      en: `### Advanced JavaScript Objects
In JavaScript, almost everything is an object. Let's master advanced object patterns.

### Key Concepts
- **Prototypes**: Every JavaScript object has an internal property called a prototype. It allows objects to inherit features and methods from other objects.
- **The \`this\` Keyword**: In an object method, \`this\` refers to the object itself. However, in arrow functions, \`this\` retains the lexical scope.
- **Dynamic Binding**: Methods like \`call()\`, \`apply()\`, and \`bind()\` let you explicitly define what object \`this\` should refer to.

> **Tip:** Use \`Object.freeze(obj)\` to make an object completely immutable. Use \`Object.seal(obj)\` to prevent adding new properties but allow editing existing ones.`,
      km: `### វត្ថុកម្រិតខ្ពស់នៅក្នុង JavaScript (Advanced Objects)
នៅក្នុង JavaScript ស្ទើរតែគ្រប់យ៉ាងគឺជា Object។ ដល់ពេលដែលត្រូវសិក្សាពីគំរូរចនាសម្ព័ន្ធវត្ថុកម្រិតខ្ពស់ហើយ។

### គោលគំនិតសំខាន់ៗ
- **Prototypes**៖ រាល់វត្ថុ JavaScript ទាំងអស់សុទ្ធតែមានលក្ខណៈសម្បត្តិផ្ទៃក្នុងហៅថា prototype។ វាអនុញ្ញាតឱ្យវត្ថុបន្តពូជ (Inherit) លក្ខណៈសម្បត្តិ និងវិធីសាស្ត្រពីវត្ថុផ្សេងទៀត។
- **ពាក្យគន្លឹះ \`this\`**៖ នៅក្នុងវិធីសាស្ត្រវត្ថុ (Object method) ពាក្យ \`this\` ចង្អុលទៅកាន់វត្ថុខ្លួនវាផ្ទាល់។ ទោះជាយ៉ាងណា ក្នុង Arrow functions ពាក្យ \`this\` រក្សា Scope នៃកន្លែងដែលវាត្រូវបានបង្កើតឡើង។
- **ការចងភ្ជាប់ឌីណាមិក (Binding)**៖ វិធីសាស្ត្រដូចជា \`call()\`, \`apply()\`, និង \`bind()\` អនុញ្ញាតឱ្យយើងកំណត់យ៉ាងច្បាស់លាស់ថាតើ \`this\` គួរចង្អុលទៅកាន់វត្ថុមួយណា។

> **អនុសាសន៍:** ប្រើប្រាស់ \`Object.freeze(obj)\` ដើម្បីធ្វើឱ្យវត្ថុមួយមិនអាចកែប្រែបានទាំងស្រុង (Immutable)។ ប្រើ \`Object.seal(obj)\` ដើម្បីការពារការបន្ថែមលក្ខណៈថ្មី តែអនុញ្ញាតឱ្យកែតម្លៃចាស់បាន។`
    },
    starterCode: `const person = {
  name: "Dara",
  greet: function() {
    return "Hello, my name is " + this.name;
  }
};

const otherPerson = { name: "Sokchea" };

// Borrow the greet function and bind 'this' to otherPerson
const boundGreet = person.greet.bind(otherPerson);
console.log(boundGreet()); // Hello, my name is Sokchea`
  },
  {
    id: "js-classes",
    title: { en: "JS Classes", km: "ថ្នាក់ Classes" },
    content: {
      en: `### JavaScript Classes (ES6)
Classes are templates for creating Objects. They encapsulate data with code to work on that data.

### Class Syntax & Inheritance
- Use the \`class\` keyword to create a class.
- The \`constructor()\` method is called automatically when a new object is initiated.
- Use the \`extends\` keyword to create a class inheritance.
- Use the \`super()\` method to invoke parent constructor parameters.

> **Note:** JavaScript classes are syntactic sugar over JavaScript's prototype-based inheritance. Under the hood, it's still prototypes!`,
      km: `### ថ្នាក់សរសេរកូដនៅក្នុង JavaScript (Classes)
ថ្នាក់ (Classes) គឺជាគំរូ (Templates) សម្រាប់បង្កើតវត្ថុ (Objects)។ ពួកវាប្រមូលផ្តុំទិន្នន័យ និងកូដដើម្បីគ្រប់គ្រងទិន្នន័យនោះរួមគ្នា។

### ទម្រង់សរសេរ និងការបន្តពូជ (Inheritance)
- ប្រើប្រាស់ពាក្យគន្លឹះ \`class\` ដើម្បីបង្កើតថ្នាក់។
- អនុគមន៍ \`constructor()\` ដំណើរការដោយស្វ័យប្រវត្តនៅពេលដែលវត្ថុថ្មីត្រូវបានបង្កើតឡើង។
- ប្រើប្រាស់ពាក្យគន្លឹះ \`extends\` ដើម្បីបង្កើតការបន្តពូជពីថ្នាក់មួយទៅថ្នាក់មួយទៀត។
- ប្រើប្រាស់ \`super()\` ដើម្បីហៅដំណើរការ constructor របស់ថ្នាក់មេ (Parent class)។

> **សម្គាល់:** Classes នៅក្នុង JavaScript គឺជា Syntactic Sugar (ការតុបតែងកូដឱ្យស្រួលសរសេរ) ផ្អែកលើការបន្តពូជបែប Prototype-based ដ៏ដដែល។`
    },
    starterCode: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a sound.";
  }
}

class Dog extends Animal {
  speak() {
    return this.name + " barks: Woof!";
  }
}

const myDog = new Dog("Kiki");
console.log(myDog.speak());`
  },
  {
    id: "js-async",
    title: { en: "JS Asynchronous", km: "កូដមិនស្របគ្នា Async" },
    content: {
      en: `### Asynchronous JavaScript
By default, JavaScript is single-threaded and synchronous (one line executes after another). Asynchronous mechanisms let JS perform long-running tasks without blocking the main UI thread.

### The Async Roadmap
1. **Callbacks**: The original approach (led to "callback hell").
2. **Promises**: Represent an operation that will eventually complete or fail.
3. **Async / Await**: Modern syntactic wrapper around Promises, making async code read like synchronous code.

### The Event Loop
JavaScript uses an **Event Loop** to coordinate execution, callbacks, and web APIs.

> **Tip:** Always use \`try...catch\` blocks inside \`async\` functions to handle failed Promise rejections gracefully!`,
      km: `### កូដមិនស្របគ្នាក្នុង JavaScript (Asynchronous)
ជាលំនាំដើម JavaScript ដំណើរការលំដាប់លំដោយស្របគ្នា (Synchronous)។ យន្តការមិនស្របគ្នា (Asynchronous) ជួយឱ្យ JS ដំណើរការការងារធំៗ និងយូរបានដោយមិនរារាំងដល់ដំណើរការទំព័រវេបសាយ (UI thread) ឡើយ។

### យន្តការសំខាន់ៗ
១. **Callbacks**៖ ជាវិធីសាស្ត្រដើមបង្អស់ (តែងតែបង្កឱ្យកូដវង្វេងស្មុគស្មាញ)។
២. **Promises**៖ តំណាងឱ្យប្រតិបត្តិការដែលនឹងបញ្ចប់នាពេលអនាគត (Complete) ឬបរាជ័យ (Fail)។
៣. **Async / Await**៖ ជាវិធីសាស្ត្រទំនើបដែលស្រោបពីលើ Promises ជួយឱ្យកូដមិនស្របគ្នាអានស្រួលដូចកូដធម្មតា។

### ប្រព័ន្ធ Event Loop
JavaScript ប្រើប្រាស់ប្រព័ន្ធ **Event Loop** ដើម្បីសម្របសម្រួលដំណើរការកូដ Callbacks និង Web APIs។

> **អនុសាសន៍:** ត្រូវប្រើប្រាស់ប្លុក \`try...catch\` នៅក្នុងអនុគមន៍ \`async\` ជានិច្ច ដើម្បីគ្រប់គ្រង និងដោះស្រាយនៅពេល Promises បរាជ័យ។`
    },
    starterCode: `// Async/Await with simulated fetch delay
const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Dara", role: "Developer" });
    }, 1000); // 1 second delay
  });
};

async function loadProfile() {
  console.log("Loading profile...");
  const user = await fetchUserData();
  console.log("Success! Welcome back, " + user.name);
}

loadProfile();`
  },
  {
    id: "js-modules",
    title: { en: "JS Modules", km: "ម៉ូឌុល JS Modules" },
    content: {
      en: `### JavaScript Modules (ESM)
Modules allow you to break your JavaScript code into separate modular files. This makes it easier to maintain the code-base.

### Export and Import
Modules rely on two major statements:
- **\`export\`**: Used to export variables, functions, or classes so they can be used in other files.
- **\`import\`**: Used to load exported members from other files.

### Types of Exports
1. **Named Exports**: Export multiple items. Import them using curly braces \`{ }\`.
2. **Default Exports**: Export only one fallback item per file. Import without curly braces.

> **Note:** Web pages must use \`<script type="module">\` in order to use imports/exports directly inside browsers.`,
      km: `### ម៉ូឌុលសរសេរកូដនៅក្នុង JavaScript (Modules)
ម៉ូឌុល (Modules) អនុញ្ញាតឱ្យអ្នកបំបែកកូដ JavaScript ទៅជាឯកសារដាច់ដោយឡែកពីគ្នា។ ជួយឱ្យការថែទាំកូដកាន់តែងាយស្រួល។

### ការនាំចេញ និងការនាំចូល
Modules ដំណើរការលើគូប្រយោគបញ្ជាធំៗពីរ៖
- **\`export\`**៖ ប្រើសម្រាប់នាំចេញអថេរ អនុគមន៍ ឬថ្នាក់ដើម្បីឱ្យឯកសារផ្សេងទៀតយកទៅប្រើប្រាស់បាន។
- **\`import\`**៖ ប្រើសម្រាប់នាំចូលសមាសភាគដែលត្រូវបាននាំចេញពីឯកសារផ្សេងទៀត។

### ប្រភេទនៃការនាំចេញ (Exports)
១. **Named Exports**៖ នាំចេញសមាសភាគជាច្រើន។ នាំចូលមកវិញដោយប្រើសញ្ញាគ្នាប \`{ }\`។
២. **Default Exports**៖ នាំចេញសមាសភាគចម្បងតែមួយគត់ក្នុងមួយឯកសារ។ នាំចូលមកវិញដោយមិនបាច់ប្រើសញ្ញាគ្នាបឡើយ។

> **សម្គាល់:** គេហទំព័រត្រូវតែប្រើប្រាស់ថេក \`<script type="module">\` ដើម្បីដំណើរការការនាំចូល និងនាំចេញនៅក្នុងកម្មវិធីរុករកដោយផ្ទាល់។`
    },
    starterCode: `// Modular code representation
const MathUtils = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// Simulated import/export action
console.log("Simulating Module Import:");
console.log("Adding values:", MathUtils.add(15, 25));`
  },
  {
    id: "js-meta-proxy",
    title: { en: "JS Meta & Proxy", km: "Proxy និង Meta JS" },
    content: {
      en: `### Metaprogramming & Proxies
Metaprogramming involves writing programs that can read, inspect, analyze, or modify themselves.

### The Proxy Object
The \`Proxy\` object allows you to create a proxy for another object, which can intercept and redefine fundamental operations for that object (like getting/setting property values).

### Core Components
- **Target**: The original object being proxied.
- **Handler**: An object containing placeholders called **traps** (like \`get\` and \`set\`) to intercept operations.

> **Tip:** Proxies are incredibly powerful for creating reactive data layers, logging operations automatically, or validating form fields before setting.`,
      km: `### ការសរសេរកម្មវិធីកម្រិតខ្ពស់ Proxy និង Meta JS
Metaprogramming គឺជាការសរសេរកម្មវិធីដែលអាចអាន វិភាគ ពិនិត្យ ឬកែសម្រួលរចនាសម្ព័ន្ធរបស់ខ្លួនឯងបាន។

### វត្ថុ Proxy Object
វត្ថុ \`Proxy\` អនុញ្ញាតឱ្យអ្នកបង្កើតតំណាងវត្ថុមួយទៀត ដើម្បីស្ទាក់ចាប់ (Intercept) និងកែប្រែរាល់សកម្មភាពមូលដ្ឋានលើវត្ថុនោះ (ដូចជាការអាន ឬការបញ្ចូលតម្លៃលក្ខណៈសម្បត្តិ)។

### សមាសភាគចម្បងៗ
- **Target**៖ វត្ថុដើមដែលត្រូវបានបង្កើត Proxy។
- **Handler**៖ វត្ថុផ្ទុកនូវអនុគមន៍ស្ទាក់ចាប់ហៅថា **Traps** (ដូចជា \`get\` និង \`set\`)។

> **អនុសាសន៍:** Proxy គឺមានឥទ្ធិពលខ្លាំងណាស់ក្នុងការបង្កើតប្រព័ន្ធទិន្នន័យឌីណាមិក (Reactive states) ការកត់ត្រាសកម្មភាពកូដស្វ័យប្រវត្ត ឬការផ្ទៀងផ្ទាត់តម្លៃមុននឹងរក្សាទុក។`
    },
    starterCode: `const targetUser = { name: "Dara", age: 25 };

const validationHandler = {
  set(target, prop, value) {
    if (prop === "age" && value < 0) {
      throw new Error("Age cannot be negative!");
    }
    target[prop] = value;
    return true;
  }
};

const proxyUser = new Proxy(targetUser, validationHandler);
proxyUser.age = 30; // Works fine!
console.log("Updated Age:", proxyUser.age);

try {
  proxyUser.age = -5; // Throws Error!
} catch (e) {
  console.log("Error caught by Proxy:", e.message);
}`
  },
  {
    id: "js-typed-arrays",
    title: { en: "JS Typed Arrays", km: "អារេកំណត់ប្រភេទ" },
    content: {
      en: `### JavaScript Typed Arrays
Typed Arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory.

### Why Typed Arrays?
Standard JS arrays can store any data types and are dynamically resized, which makes them slower for heavy calculations. Typed arrays allocate a **fixed size block of memory** of a specific numeric type, boosting speed.

### Primary Classes
- \`Int8Array\`, \`Uint8Array\` (8-bit integers)
- \`Float32Array\`, \`Float64Array\` (Floating-point)
- \`ArrayBuffer\`: A generic fixed-length raw binary data buffer.

> **Note:** Typed arrays are heavily used in WebGL graphics, audio processing, canvas filters, and WebSocket binary protocols.`,
      km: `### អារេកំណត់ប្រភេទជាក់លាក់ (Typed Arrays)
Typed Arrays គឺជាវត្ថុស្រដៀងអារេដែលផ្ដល់យន្តការយ៉ាងលឿនក្នុងការអាន និងសរសេរទិន្នន័យទ្វេភាគ (Raw Binary Data) នៅក្នុងមេម៉ូរីដោយផ្ទាល់។

### ហេតុអ្វីត្រូវប្រើប្រាស់ Typed Arrays?
អារេធម្មតារបស់ JS អាចផ្ទុកប្រភេទទិន្នន័យណាក៏បាន និងអាចពង្រីកទំហំស្វ័យប្រវត្ត ដែលធ្វើឱ្យវាដំណើរការយឺតក្នុងការគណនាធំៗ។ ចំណែក Typed Array បម្រុងទុក **ប្លុកមេម៉ូរីទំហំថេរ** សម្រាប់ប្រភេទលេខជាក់លាក់ ជួយបង្កើនល្បឿនលឿនបំផុត។

### ថ្នាក់ចម្បងៗ
- \`Int8Array\`, \`Uint8Array\` (ចំនួនគត់ទំហំ 8-bit)
- \`Float32Array\`, \`Float64Array\` (លេខមានក្បៀស)
- \`ArrayBuffer\`៖ ធុងបម្រុងទុកទិន្នន័យទ្វេភាគដែលមានប្រវែងថេរ។

> **សម្គាល់:** Typed arrays ត្រូវបានប្រើប្រាស់យ៉ាងខ្លាំងនៅក្នុងក្រាហ្វិក WebGL ការកែច្នៃអូឌីយ៉ូ ការត្រងរូបភាព Canvas និងពិធីការបណ្តាញ WebSockets។`
    },
    starterCode: `// Create a buffer of 16 bytes
const buffer = new ArrayBuffer(16);
// View the buffer as 32-bit floating point numbers
const floatView = new Float32Array(buffer);

floatView[0] = 3.14159;
floatView[1] = 42.12;

console.log("Float element 0:", floatView[0]);
console.log("Buffer Byte Length:", buffer.byteLength);`
  },
  {
    id: "js-dom-navigation",
    title: { en: "JS DOM Navigation", km: "ការរុករកទំព័រ DOM" },
    content: {
      en: `### DOM Navigation (Traversal)
You can navigate the DOM tree using the relationships between nodes.

### Node Relationships
- **parentNode**: The parent node of an element.
- **childNodes**: A list of child nodes (includes text/spaces).
- **children**: A list of child HTML elements (ignores text/spaces).
- **nextSibling** & **previousSibling**: Adjacent nodes.

> **Tip:** Always prefer using \`children\` over \`childNodes\` when navigating elements, because \`childNodes\` includes empty text nodes created by code spacing and newlines, which can cause unexpected results.`,
      km: `### ការរុករកនៅក្នុងដើមឈើ DOM (DOM Navigation)
អ្នកអាចរុករក និងបញ្ជាធាតុផ្សេងៗនៅក្នុងដើមឈើ DOM តាមរយៈការប្រៀបធៀបទំនាក់ទំនងរវាងថ្នាំង (Nodes)។

### ទំនាក់ទំនងរវាងថ្នាំង
- **parentNode**៖ ថ្នាំងមេរបស់ធាតុ។
- **childNodes**៖ បញ្ជីថ្នាំងកូនទាំងអស់ (រួមបញ្ចូលទាំងអត្ថបទ និងចន្លោះទំនេរ)។
- **children**៖ បញ្ជីធាតុជាកូន HTML សុទ្ធសាធ (មិនរាប់ចន្លោះទំនេរទេ)។
- **nextSibling** និង **previousSibling**៖ ធាតុដែលស្ថិតនៅក្បែរគ្នាក្នុងកម្រិតស្មើគ្នា។

> **អនុសាសន៍:** គួរតែជ្រើសរើសប្រើ \`children\` ជាជាង \`childNodes\` នៅពេលរុករកធាតុគេហទំព័រ ព្រោះ \`childNodes\` រាប់បញ្ចូលទាំងចន្លោះទំនេរដែលបង្កដោយការចុះបន្ទាត់កូដ ដែលអាចធ្វើឱ្យអ្នកយល់ច្រឡំ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <div id="parent">
    <p>Child Item 1</p>
    <p id="item2">Child Item 2</p>
  </div>
  <button onclick="navigate()">Find Parent</button>

  <script>
    function navigate() {
      const el = document.getElementById("item2");
      const parent = el.parentNode;
      console.log("Parent Tag Name:", parent.tagName);
      console.log("Parent children count:", parent.children.length);
    }
  </script>
</body>
</html>`
  },
  {
    id: "js-windows",
    title: { en: "JS Windows", km: "វត្ថុ Window API" },
    content: {
      en: `### The Browser Window Object
The \`window\` object represents an open window in a browser. It is the global object for client-side JavaScript.

### Key Window Properties & Methods
- \`window.innerWidth\` / \`window.innerHeight\`: Inner size of browser viewport.
- \`window.location\`: Get/set current URL path.
- \`window.history\`: Manage navigation history.
- \`window.localStorage\`: Persistent client-side key-value storage.

> **Note:** Any global variable or function created in browser scripts automatically becomes a property of the \`window\` object!`,
      km: `### វត្ថុបញ្ជាកម្មវិធីរុករក Window Object
វត្ថុ \`window\` តំណាងឱ្យផ្ទាំងបង្អួចដែលកំពុងបើកនៅក្នុងកម្មវិធីរុករក (Browser)។ វាជាវត្ថុសកល (Global Object) សម្រាប់ JavaScript ខាងមុខ។

### លក្ខណៈសម្បត្តិ និងវិធីសាស្ត្រចម្បងៗ
- \`window.innerWidth\` / \`window.innerHeight\`៖ ទំហំទទឹង និងកម្ពស់ផ្នែកខាងក្នុងនៃកម្មវិធីរុករក។
- \`window.location\`៖ ទាញយក ឬផ្លាស់ប្តូរអាសយដ្ឋាន URL បច្ចុប្បន្ន។
- \`window.history\`៖ គ្រប់គ្រងប្រវត្តិធ្វើដំណើររបស់ Browser។
- \`window.localStorage\`៖ ឧបករណ៍រក្សាទុកទិន្នន័យអតិថិជនជាប់រហូត។

> **សម្គាល់:** រាល់អថេរ ឬអនុគមន៍សកល (Global) ទាំងឡាយដែលបង្កើតឡើងនៅក្នុងស្គ្រីប នឹងក្លាយជាលក្ខណៈសម្បត្តិរបស់វត្ថុ \`window\` ដោយស្វ័យប្រវត្ត!`
    },
    starterCode: `console.log("Browser Window Width: " + window.innerWidth);
console.log("Browser Window Height: " + window.innerHeight);
console.log("Current URL is: " + window.location.href);`
  },
  {
    id: "js-web-api",
    title: { en: "JS Web API", km: "បណ្ណាល័យ Web API" },
    content: {
      en: `### Introduction to Web APIs
Web APIs are built-in interfaces provided by web browsers to extend JavaScript with powerful system features.

### Popular Web APIs
1. **Geolocation API**: Retrieve user latitude/longitude location coordinates.
2. **Web Storage API**: Store local data (\`localStorage\`, \`sessionStorage\`).
3. **Fetch API**: Execute network calls and AJAX dynamically.
4. **Notification API**: Display background push notifications to users.

> **Tip:** Web APIs are highly controlled by browser security rules. Most APIs require user consent/approval before they can be used.`,
      km: `### សេចក្តីផ្តើមអំពី Web APIs
Web APIs គឺជាចំណុចប្រទាក់ដែលត្រូវបានបង្កប់មកជាមួយកម្មវិធីរុករក ដើម្បីពង្រីកសមត្ថភាពរបស់ JavaScript ឱ្យធ្វើការជាមួយប្រព័ន្ធបានកាន់តែទូលំទូលាយ។

### Web APIs ពេញនិយម
១. **Geolocation API**៖ ទាញយកកូអរដោនេទីតាំង រយៈទទឹង និងរយៈបណ្តោយរបស់អ្នកប្រើប្រាស់។
២. **Web Storage API**៖ រក្សាទុកទិន្នន័យមូលដ្ឋាន (\`localStorage\`, \`sessionStorage\`)។
៣. **Fetch API**៖ ទាញយកទិន្នន័យពីបណ្តាញ និងរៀបចំ AJAX។
៤. **Notification API**៖ បង្ហាញសារជូនដំណឹងទៅលើអេក្រង់។

> **អនុសាសន៍:** Web APIs ត្រូវបានគ្រប់គ្រងយ៉ាងតឹងរ៉ឹងដោយច្បាប់សុវត្ថិភាព។ ភាគច្រើននៃ APIs ទាំងនេះទាមទារការយល់ព្រម (User consent) ពីអ្នកប្រើប្រាស់មុនពេលដំណើរការ។`
    },
    starterCode: `// LocalStorage Web API Demo
localStorage.setItem("platform", "Angkor Coders");
const platform = localStorage.getItem("platform");
console.log("Retrieved item from Web Storage API:", platform);`
  },
  {
    id: "js-ajax",
    title: { en: "JS AJAX", km: "ទាញទិន្នន័យ AJAX" },
    content: {
      en: `### AJAX with Fetch API
**AJAX** stands for **Asynchronous JavaScript And XML**. It allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes.

### Modern Fetch Syntax
The \`fetch()\` API returns a Promise.
\`\`\`javascript
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data));
\`\`\`

> **Note:** AJAX is the core engine behind modern Single Page Applications (SPAs) like React or Vue, allowing smooth content transitions without reloading.`,
      km: `### ការទាញយកទិន្នន័យឌីណាមិក (AJAX / Fetch API)
**AJAX** មកពីពាក្យថា **Asynchronous JavaScript And XML**។ វាអនុញ្ញាតឱ្យគេហទំព័រធ្វើបច្ចុប្បន្នភាពមាតិកាដោយមិនចាំបាច់ផ្ទុកឡើងវិញ ដោយគ្រាន់តែផ្លាស់ប្តូរទិន្នន័យជាមួយម៉ាស៊ីនបម្រើ (Server) នៅពីក្រោយឆាក។

### ទម្រង់សរសេរ Fetch API ទំនើប
ការប្រើប្រាស់ \`fetch()\` ផ្ដល់មកវិញនូវ Promise៖
\`\`\`javascript
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data));
\`\`\`

> **សម្គាល់:** AJAX គឺជាម៉ាស៊ីនចម្បងនៅពីក្រោយកម្មវិធី Single Page Applications (SPAs) ដូចជា React ឬ Vue ដែលជួយផ្លាស់ប្តូរទំព័របានលឿនដោយមិនបាច់រង់ចាំផ្ទុកគេហទំព័រឡើងវិញឡើយ។`
    },
    starterCode: `// Try calling a public mockup API to fetch placeholder posts
async function fetchPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log("Fetched Title:", data.title);
    console.log("Fetched Body excerpt:", data.body.substring(0, 50) + "...");
  } catch (err) {
    console.log("Network error caught:", err);
  }
}

fetchPosts();`
  },
  {
    id: "js-json",
    title: { en: "JS JSON", km: "ទិន្នន័យ JSON" },
    content: {
      en: `### JSON (JavaScript Object Notation)
JSON is a standard text-based format for storing and transporting structured data. It is highly readable and language-independent.

### Common JSON Functions
- \`JSON.parse(text)\`: Converts a JSON string into a JavaScript object.
- \`JSON.stringify(object)\`: Converts a JavaScript object into a JSON string (essential for network transfer).

> **Tip:** In JSON, keys must always be surrounded by double quotes \`"key"\`, not single quotes \`'key'\`.`,
      km: `### ទម្រង់ទិន្នន័យ JSON (JavaScript Object Notation)
JSON គឺជាទម្រង់អត្ថបទស្តង់ដារសម្រាប់រក្សាទុក និងបញ្ជូនទិន្នន័យដែលមានរចនាសម្ព័ន្ធ។ វាមានភាពងាយស្រួលអាន និងដំណើរការបានគ្រប់ភាសាសរសេរកម្មវិធីទាំងអស់។

### អនុគមន៍ JSON ចម្បងៗ
- \`JSON.parse(text)\`៖ បម្លែងអត្ថបទ JSON ឱ្យទៅជាវត្ថុ JavaScript (Object)។
- \`JSON.stringify(object)\`៖ បម្លែងវត្ថុ JavaScript ទៅជាអត្ថបទ JSON (សំខាន់ខ្លាំងសម្រាប់ការបញ្ជូនតាមបណ្តាញ)។

> **អនុសាសន៍:** នៅក្នុងទម្រង់ JSON រាល់គន្លឹះ (Keys) ទាំងអស់ត្រូវតែព័ទ្ធជុំវិញដោយសញ្ញាសម្រង់ពីរ \`"key"\` ជានិច្ច មិនអាចប្រើសញ្ញាសម្រង់មួយ \`'key'\` ឡើយ។`
    },
    starterCode: `// JavaScript Object
const userObj = { name: "Kanha", active: true };

// Convert to string to send to server
const jsonString = JSON.stringify(userObj);
console.log("JSON String format:", jsonString);

// Parse back to Object
const backToObj = JSON.parse(jsonString);
console.log("Object Name property:", backToObj.name);`
  },
  {
    id: "js-jquery-bridge",
    title: { en: "JS jQuery", km: "ស្ពានតភ្ជាប់ jQuery" },
    content: {
      en: `### JavaScript & jQuery
**jQuery** is a popular JavaScript library created in 2006 to simplify DOM manipulation and AJAX operations, abstracting browser compatibility differences.

### jQuery Syntax Bridge
- Plain JS: \`document.getElementById("title").innerHTML = "Hello";\`
- jQuery: \`$("#title").html("Hello");\`

> **Note:** While jQuery is still highly active across legacy sites, modern development mostly prefers ES6 vanilla JavaScript or component frameworks (React/Vue).`,
      km: `### ស្ពានតភ្ជាប់រវាង JavaScript និង jQuery
**jQuery** គឺជាបណ្ណាល័យ JavaScript ដ៏ពេញនិយមបំផុតដែលបានបង្កើតឡើងក្នុងឆ្នាំ ២០០៦ ដើម្បីកាត់បន្ថយភាពស្មុគស្មាញនៃកូដ DOM និង AJAX ព្រមទាំងសម្របសម្រួលជាមួយ browsers ចាស់ៗ។

### របៀបសរសេរប្រៀបធៀប
- កូដ JS ធម្មតា៖ \`document.getElementById("title").innerHTML = "Hello";\`
- កូដ jQuery៖ \`$("#title").html("Hello");\`

> **សម្គាល់:** ទោះបីជា jQuery នៅតែមានវត្តមានច្រើនលើគេហទំព័របែបបុរាណក៏ដោយ ប៉ុន្តែការអភិវឌ្ឍន៍ទំនើបនាពេលបច្ចុប្បន្ននិយមប្រើ Vanilla JS (ES6+) ឬ Frameworks (React/Vue) ផ្ទាល់តែម្តង។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <div id="status" style="padding: 10px; background: #fef08a;">Status: Plain text</div>
  <button id="updateBtn">Trigger jQuery update</button>

  <script>
    // jQuery bridge simulation
    $(document).ready(function() {
      $("#updateBtn").click(function() {
        $("#status").css("background-color", "#bbf7d0").html("Status: Updated smoothly with jQuery!");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "js-graphics",
    title: { en: "JS Graphics", km: "គំនូរកាត់ក្រាហ្វិក" },
    content: {
      en: `### Web Graphics with JavaScript
JavaScript can draw high-performance graphics directly inside browsers.

### Two Major Methods
1. **HTML5 Canvas**: Code-driven, raster graphics drawer. Uses the \`<canvas>\` tag and pixel manipulation via a JavaScript 2D/3D context.
2. **SVG (Scalable Vector Graphics)**: XML-based vector graphics where every element is represented as a DOM node.

> **Tip:** Canvas is perfect for heavy calculations, fast-paced games, and visual video charts, whereas SVG is best for icons, logos, and high-quality responsive designs.`,
      km: `### ក្រាហ្វិក និងគំនូរលើគេហទំព័រ (JS Graphics)
JavaScript អាចគូរ និងបង្ហាញក្រាហ្វិកដែលមានសមត្ថភាពខ្ពស់ដោយផ្ទាល់នៅលើកម្មវិធីរុករក។

### វិធីសាស្ត្រចម្បងពីរ
១. **HTML5 Canvas**៖ គំនូរបែប Raster ដំណើរការដោយកូដ។ ប្រើប្រាស់ថេក \`<canvas>\` និងបញ្ជាភីកសែលតាមរយៈ JavaScript 2D/3D context។
២. **SVG (Scalable Vector Graphics)**៖ គំនូរបែប Vector ផ្អែកលើ XML ដែលរាល់ធាតុគំនូរទាំងអស់គឺជា DOM Node។

> **អនុសាសន៍:** Canvas គឺល្អបំផុតសម្រាប់គណនាធំៗ ហ្គេម និងគំនូសតាងល្បឿនលឿន ចំណែកឯ SVG គឺល្អបំផុតសម្រាប់ រូបតំណាង (Icons) ឡូហ្គោ និងប្លង់រចនាទំហំឌីណាមិក។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <canvas id="myCanvas" width="200" height="100" style="border:1px solid #ddd; border-radius: 8px;"></canvas>

  <script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    // Draw a blue rectangle
    ctx.fillStyle = "#3b82f6";
    ctx.fillRect(20, 20, 160, 60);
  </script>
</body>
</html>`
  },
  {
    id: "js-examples",
    title: { en: "JS Examples", km: "ឧទាហរណ៍ជាក់ស្តែង" },
    content: {
      en: `### JavaScript Code Playground Examples
Consolidating core concepts is key. Below are common real-world algorithms.

### Key Examples to Study
- **Reverse a String**: Learn split, reverse, and join.
- **Fibonacci Sequence Generator**: Learn array loops and mathematical patterns.
- **Factorial Calculator**: Recursive functions.

> **Tip:** Always run and test corner cases (like empty lists or unexpected types) when writing functions.`,
      km: `### ឧទាហរណ៍កម្មវិធីសរសេរកូដជាក់ស្តែង (JS Examples)
ការអនុវត្តតាមគំរូកូដច្បាស់លាស់ ជួយឱ្យអ្នកឆាប់យល់។ ខាងក្រោមនេះជាក្បួនដោះស្រាយ (Algorithms) ពេញនិយមក្នុងលោក។

### គំរូកូដគួរសិក្សា
- **បម្លែងខ្សែអក្សរត្រឡប់ក្រោយ (Reverse String)**៖ សិក្សាពី split, reverse, and join។
- **បង្កើតលំដាប់ Fibonacci**៖ សិក្សាពី Loop អារេ និងគំរូគណិតវិទ្យា។
- **គណនា Factorial**៖ សិក្សាពីអនុគមន៍ហៅខ្លួនឯង (Recursion)។

> **អនុសាសន៍:** ត្រូវដំណើរការ និងវាយតម្លៃរាល់ករណីពិសេសជានិច្ច (ដូចជា ទិន្នន័យទទេ ឬប្រភេទមិនរំពឹងទុក) នៅពេលសរសេរកូដ។`
    },
    starterCode: `// Example: Reversing a word
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("Original: Angkor");
console.log("Reversed:", reverseString("Angkor"));`
  },
  {
    id: "js-reference-adv",
    title: { en: "JS Reference (Advanced)", km: "ឯកសារយោងកម្រិតខ្ពស់" },
    content: {
      en: `### Advanced Global Objects Reference
Let's review advanced references of the JavaScript Engine.

### Core Advanced Constructors
1. **Promise**: Resolves/rejects asynchronous payloads.
2. **Reflect**: Metaprogramming helper providing operations for interceptable methods.
3. **WeakMap / WeakSet**: Memory-optimized garbage collected collections where keys must be objects.
4. **Symbol**: Unique, immutable primitives used to identify object properties securely.

> **Tip:** \`WeakMap\` is ideal for keeping metadata about private structures without causing memory leaks.`,
      km: `### ឯកសារយោងកម្រិតខ្ពស់ (Advanced Reference)
ពិនិត្យឡើងវិញនូវរាល់វត្ថុបញ្ជាកម្រិតខ្ពស់របស់ម៉ាស៊ីនចងក្រង JavaScript។

### សមាសភាគចម្បងៗ
១. **Promise**៖ ដោះស្រាយទិន្នន័យមិនស្របគ្នា (Resolve/Reject)។
២. **Reflect**៖ ឧបករណ៍ Metaprogramming ជួយសម្របសម្រួលសកម្មភាពស្ទាក់ចាប់កូដ។
៣. **WeakMap / WeakSet**៖ សំណុំទិន្នន័យការពារការលេចធ្លាយមេម៉ូរី (Memory-optimized garbage collected) ដែលគន្លឹះត្រូវតែជាវត្ថុ (Objects)។
៤. **Symbol**៖ តម្លៃថេរពិសេសមិនអាចកែប្រែបាន ប្រើសម្រាប់ដាក់សម្គាល់លក្ខណៈវត្ថុឱ្យមានសុវត្ថិភាព។

> **អនុសាសន៍:** \`WeakMap\` គឺល្អបំផុតសម្រាប់ការរក្សាទុកទិន្នន័យបន្ទាប់បន្សំអំពីសមាសភាគ ដោយមិនបារម្ភពីរឿងលេចធ្លាយមេម៉ូរីឡើយ។`
    },
    starterCode: `// Symbol demo: Unique keys
const uniqueKey = Symbol("id");
const person = {
  [uniqueKey]: 10092,
  name: "Seyha"
};

console.log("Symbol Value Access:", person[uniqueKey]);
console.log("Normal Keys:", Object.keys(person)); // Hides symbol!`
  }
];
