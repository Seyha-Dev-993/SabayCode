import { Lesson } from '../types';

export const javascriptLessonsPart2: Lesson[] = [
  {
    id: "js-arrays",
    title: { en: "JS Arrays", km: "អារេ Arrays" },
    content: {
      en: `### JavaScript Arrays
JavaScript arrays are used to store multiple values in a single variable.

### Key Array Methods
- **push(item)**: Adds an element to the end of the array.
- **pop()**: Removes the last element from the array.
- **length**: Gets the size of the array.
- **join()**: Combines array elements into a string.

> **Tip:** Array indices are zero-based! The first element is index \`0\`, the second is \`1\`, etc.`,
      km: `### អារេនៅក្នុង JavaScript (Arrays)
អារេ (Array) ត្រូវបានប្រើប្រាស់ដើម្បីផ្ទុកតម្លៃជាច្រើននៅក្នុងអថេរតែមួយគត់។

### វិធីសាស្ត្រសំខាន់ៗរបស់ Array
- **push(item)**៖ បន្ថែមធាតុថ្មីមួយទៅខាងចុងអារេ។
- **pop()**៖ លុបធាតុចុងក្រោយបង្អស់ចេញពីអារេ។
- **length**៖ ទាញយកចំនួនសរុបនៃធាតុក្នុងអារេ។
- **join()**៖ ភ្ជាប់ធាតុទាំងអស់ក្នុងអារេឱ្យទៅជាខ្សែអក្សរតែមួយ។

> **អនុសាសន៍:** លិបិក្រមអារេ (Index) ចាប់ផ្តើមពីសូន្យ! ធាតុដំបូងគេគឺស្ថិតនៅទីតាំង \`0\` ធាតុទីពីរគឺ \`1\` ជាដើម។`
    },
    starterCode: `const provinces = ["Phnom Penh", "Siem Reap", "Battambang"];
provinces.push("Sihanoukville");

console.log("Provinces count:", provinces.length);
console.log("All provinces:", provinces.join(" - "));
console.log("First province in index 0:", provinces[0]);`
  },
  {
    id: "js-sets",
    title: { en: "JS Sets", km: "សំណុំ Sets" },
    content: {
      en: `### JavaScript Sets
A JavaScript Set is a collection of **unique values**. Each value can only occur once in a Set.

### Key Methods of Sets
- \`new Set()\`: Creates a new set.
- \`.add(value)\`: Adds a new value to the set (ignored if already exists).
- \`.has(value)\`: Returns \`true\` if the value exists in the set.
- \`.delete(value)\`: Removes an element from the set.

> **Tip:** Sets are perfect for filtering out duplicates from a list!`,
      km: `### សំណុំនៅក្នុង JavaScript (Sets)
សំណុំ (Set) គឺជាបណ្តុំនៃ **តម្លៃដែលមិនស្ទួនគ្នា (Unique values)**។ រាល់តម្លៃនីមួយៗអាចមានវត្តមានតែម្តងគត់នៅក្នុង Set។

### វិធីសាស្ត្រចម្បងរបស់ Set
- \`new Set()\`៖ បង្កើតសំណុំថ្មីមួយ។
- \`.add(value)\`៖ បន្ថែមតម្លៃថ្មីចូលក្នុង Set (បើតម្លៃមានរួចហើយ វានឹងមិនបន្ថែមទៀតទេ)។
- \`.has(value)\`៖ ផ្ទៀងផ្ទាត់ថាតើតម្លៃនោះមានក្នុង Set ដែរឬទេ (true/false)។
- \`.delete(value)\`៖ លុបធាតុណាមួយចេញពី Set។

> **អនុសាសន៍:** Set គឺជាឧបករណ៍ដ៏ល្អបំផុតក្នុងការលុបបំបាត់រាល់ទិន្នន័យដែលស្ទួនគ្នាចេញពីបញ្ជីរាយនាម!`
    },
    starterCode: `const uniqueIds = new Set();
uniqueIds.add(101);
uniqueIds.add(102);
uniqueIds.add(101); // Duplicate! Will be ignored.

console.log("Set size:", uniqueIds.size); // Should be 2
console.log("Has 101?", uniqueIds.has(101));`
  },
  {
    id: "js-maps",
    title: { en: "JS Maps", km: "វចនានុក្រម Maps" },
    content: {
      en: `### JavaScript Maps
A Map holds **key-value pairs** where the keys can be any datatype.

### Difference Between Maps and Objects
- Objects allow only strings and symbols as keys. Maps allow **any datatype** (including functions, objects, and numbers) as keys.
- Maps maintain the **original insertion order** of the elements.

### Key Methods
- \`set(key, value)\`: Adds a key-value pair.
- \`get(key)\`: Retrieves a value by its key.
- \`has(key)\`: Checks if a key exists.

> **Tip:** Use \`Map.size\` to easily retrieve the number of items inside, unlike regular objects where you have to count manually.`,
      km: `### ផែនទីទិន្នន័យនៅក្នុង JavaScript (Maps)
ផែនទីទិន្នន័យ (Map) រក្សាទុក **គូគន្លឹះ-តម្លៃ (key-value pairs)** ដែលគន្លឹះ (Keys) របស់វាអាចជាប្រភេទទិន្នន័យណាក៏បាន។

### ភាពខុសគ្នារវាង Maps និង Objects
- Object អនុញ្ញាតឱ្យប្រើតែប្រភេទខ្សែអក្សរ (Strings) ឬ Symbols ជា Keys ប៉ុណ្ណោះ។ Map អនុញ្ញាតឱ្យប្រើ **ប្រភេទទិន្នន័យណាក៏បាន** (រួមទាំង functions, objects, និងលេខ)។
- Map រក្សាទុក **លំដាប់លំដោយនៃការបញ្ជូល** ធាតុទាំងអស់។

### វិធីសាស្ត្រចម្បងៗ
- \`set(key, value)\`៖ បន្ថែមគូគន្លឹះ-តម្លៃ។
- \`get(key)\`៖ ទាញយកតម្លៃតាមរយៈគន្លឹះរបស់វា។
- \`has(key)\`៖ ពិនិត្យមើលថាតើមានគន្លឹះនោះដែរឬទេ។

> **អនុសាសន៍:** ប្រើ \`Map.size\` ដើម្បីទាញយកចំនួនធាតុសរុបយ៉ាងងាយស្រួល មិនដូច Object ធម្មតាដែលត្រូវរាប់ដោយដៃឡើយ។`
    },
    starterCode: `const userRoles = new Map();
userRoles.set("admin", "Dara");
userRoles.set("editor", "Sokchea");

console.log("Editor user is:", userRoles.get("editor"));
console.log("Total roles stored:", userRoles.size);`
  },
  {
    id: "js-iterations",
    title: { en: "JS Iterations", km: "ការវិលជុំទិន្នន័យ" },
    content: {
      en: `### JavaScript Iterations
Array iteration methods operate on every array item.

### Essential Iteration Methods
1. **forEach()**: Calls a function once for each array element.
2. **map()**: Creates a **new array** by performing a function on each array element.
3. **filter()**: Creates a **new array** with array elements that pass a test.
4. **reduce()**: Runs a function on each array element to produce (reduce it to) a single value.

> **Note:** Iteration methods like \`map()\` and \`filter()\` do not mutate the original array; they always return a fresh, clean array.`,
      km: `### ដំណើរការវិលជុំទិន្នន័យ (Iterations)
វិធីសាស្ត្រវិលជុំអារេ ដំណើរការលើរាល់ធាតុនីមួយៗនៅក្នុងអារេ។

### វិធីសាស្ត្រវិលជុំសំខាន់ៗ
១. **forEach()**៖ ហៅដំណើរការអនុគមន៍មួយដង សម្រាប់រាល់ធាតុនីមួយៗក្នុងអារេ។
២. **map()**៖ បង្កើត **អារេថ្មីមួយ** ដោយដំណើរការអនុគមន៍លើធាតុនីមួយៗនៃអារេចាស់។
៣. **filter()**៖ បង្កើត **អារេថ្មីមួយ** ដែលផ្ទុកតែធាតុណាដែលឆ្លងកាត់ការវាយតម្លៃត្រឹមត្រូវ។
៤. **reduce()**៖ ដំណើរការអនុគមន៍លើគ្រប់ធាតុទាំងអស់ ដើម្បីបង្រួមទិន្នន័យឱ្យមកសល់តម្លៃតែមួយគត់។

> **សម្គាល់:** វិធីសាស្ត្រវិលជុំដូចជា \`map()\` និង \`filter()\` មិនកែប្រែទិន្នន័យនៃអារេដើមឡើយ ពួកវាតែងតែផ្ដល់មកវិញនូវអារេថ្មីមួយស្អាតជានិច្ច។`
    },
    starterCode: `const scores = [45, 60, 85, 95];

// Multiply all scores by 2
const doubled = scores.map(num => num * 2);
console.log("Doubled scores:", doubled);

// Filter scores greater than 70
const highScores = scores.filter(num => num > 70);
console.log("High scores (>70):", highScores);`
  },
  {
    id: "js-math",
    title: { en: "JS Math", km: "គណិតវិទ្យា Math" },
    content: {
      en: `### The JavaScript Math Object
The JavaScript \`Math\` object allows you to perform mathematical tasks on numbers. Unlike other objects, you do not need to create it with \`new\`.

### Crucial Math Methods
- \`Math.round(x)\`: Rounds to the nearest integer.
- \`Math.floor(x)\`: Rounds down to the nearest integer.
- \`Math.ceil(x)\`: Rounds up to the nearest integer.
- \`Math.random()\`: Returns a random float between 0 (inclusive) and 1 (exclusive).

> **Tip:** To get a random integer between 1 and 10, combine \`Math.random()\` and \`Math.floor()\`:
> \`\`\`javascript
> Math.floor(Math.random() * 10) + 1;
> \`\`\``,
      km: `### វត្ថុគណិតវិទ្យា Math Object
វត្ថុ \`Math\` របស់ JavaScript អនុញ្ញាតឱ្យអ្នកគណនាគណិតវិទ្យាផ្សេងៗលើទិន្នន័យលេខ។ វាជាវត្ថុស្រាប់ (Static Object) មិនបាច់បង្កើតដោយពាក្យ \`new\` ឡើយ។

### វិធីសាស្ត្រគណិតវិទ្យាសំខាន់ៗ
- \`Math.round(x)\`៖ បង្គត់ទៅរកចំនួនគត់ដែលជិតបំផុត។
- \`Math.floor(x)\`៖ បង្គត់ចុះទៅរកចំនួនគត់ដែលតូចជាង ឬស្មើ។
- \`Math.ceil(x)\`៖ បង្គត់ឡើងទៅរកចំនួនគត់ដែលធំជាង ឬស្មើ។
- \`Math.random()\`៖ បញ្ចេញលេខចៃដន្យចន្លោះពី 0 ទៅ 1 (មិនរួមបញ្ចូល 1)។

> **អនុសាសន៍:** ដើម្បីទាញយកលេខចៃដន្យចន្លោះពី ១ ដល់ ១០ ត្រូវប្រើការបញ្ចូលគ្នារវាង \`Math.random()\` និង \`Math.floor()\`៖
> \`\`\`javascript
> Math.floor(Math.random() * 10) + 1;
> \`\`\``
    },
    starterCode: `console.log("Pi Value:", Math.PI);
console.log("Rounded 4.7:", Math.round(4.7));
console.log("Floor 4.7:", Math.floor(4.7));

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random Integer (1-10):", randomNum);`
  },
  {
    id: "js-regexp",
    title: { en: "JS RegExp", km: "RegExp លំនាំស្វែងរក" },
    content: {
      en: `### Regular Expressions (RegExp)
A regular expression is a sequence of characters that forms a search pattern. It is used for text search and text replace operations.

### Basic Modifiers
- \`i\`: Case-insensitive matching.
- \`g\`: Global matching (finds all matches rather than stopping at the first).

### Example Pattern
\`\`\`javascript
const pattern = /cambodia/i;
\`\`\`

> **Tip:** Regular expressions are highly critical for form validation (e.g. validating emails, passwords, and phone numbers).`,
      km: `### កន្សោមបញ្ញត្តិនៅក្នុង JavaScript (RegExp)
Regular Expression (RegExp) គឺជាលំដាប់លំដោយតួអក្សរដែលបង្កើតឡើងជាលំនាំស្វែងរក (Search Pattern)។ វាត្រូវបានប្រើប្រាស់សម្រាប់ការស្វែងរកអត្ថបទ និងជំនួសពាក្យ។

### Modifiers មូលដ្ឋាន
- \`i\`៖ ស្វែងរកដោយមិនប្រកាន់អក្សរតូច-ធំ (Case-insensitive)។
- \`g\`៖ ស្វែងរកទូទាំងអត្ថបទ (មិនបញ្ឈប់ត្រឹមពាក្យដំបូងដែលរកឃើញឡើយ)។

### គំរូលំនាំស្វែងរក
\`\`\`javascript
const pattern = /cambodia/i;
\`\`\`

> **អនុសាសន៍:** Regular expressions មានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ការផ្ទៀងផ្ទាត់ទម្រង់បំពេញព័ត៌មាន (ដូចជា អ៊ីមែល លេខសម្ងាត់ និងលេខទូរស័ព្ទ)។`
    },
    starterCode: `let text = "Learn JavaScript at Angkor Coders!";
let pattern = /javascript/i;

// test() returns true or false
let isMatch = pattern.test(text);
console.log("Does text contain javascript?", isMatch);`
  },
  {
    id: "js-datatypes",
    title: { en: "JS Data Types", km: "ប្រភេទទិន្នន័យ JS" },
    content: {
      en: `### JavaScript Data Types
JavaScript variables can hold different data types.

### Primary Categories
1. **Primitive Datatypes**:
   - \`string\`, \`number\`, \`boolean\`
   - \`undefined\`, \`null\`
   - \`symbol\`, \`bigint\`
2. **Non-Primitive Datatypes (Objects)**:
   - \`object\`, \`array\`, \`date\`

### Finding Types using \`typeof\`
You can use the \`typeof\` operator to find the data type of a variable.

> **Note:** \`typeof null\` return \`"object"\` in JavaScript due to a legacy bug dating back to the first version of JS.`,
      km: `### ប្រភេទទិន្នន័យរបស់ JavaScript (Data Types)
អថេររបស់ JavaScript អាចរក្សាទុកប្រភេទទិន្នន័យប្លែកៗគ្នាជាច្រើន។

### ប្រភេទចម្បងៗ
១. **Primitive Datatypes** (ប្រភេទតម្លៃសាមញ្ញ)៖
   - \`string\` (ខ្សែអក្សរ), \`number\` (លេខ), \`boolean\` (តម្លៃពិត/មិនពិត)
   - \`undefined\` (មិនទាន់កំណត់តម្លៃ), \`null\` (តម្លៃទទេ)
   - \`symbol\`, \`bigint\`
២. **Non-Primitive Datatypes** (ប្រភេទវត្ថុស្មុគស្មាញ)៖
   - \`object\`, \`array\`, \`date\`

### ស្វែងរកប្រភេទដោយប្រើ \`typeof\`
អ្នកអាចប្រើប្រាស់ប្រមាណវិធី \`typeof\` ដើម្បីដឹងពីប្រភេទអថេររបស់ខ្លួន។

> **សម្គាល់:** \`typeof null\` នឹងផ្ដល់លទ្ធផលជា \`"object"\` នៅក្នុង JavaScript ដោយសារតែកំហុសបច្ចេកទេសតាំងពីកំណែដំបូងបង្អស់។`
    },
    starterCode: `console.log(typeof "Dara");      // Returns "string"
console.log(typeof 100);         // Returns "number"
console.log(typeof true);        // Returns "boolean"
console.log(typeof undefined);   // Returns "undefined"
console.log(typeof {name: 'A'}); // Returns "object"
console.log(typeof null);        // Returns "object"`
  },
  {
    id: "js-errors",
    title: { en: "JS Errors", km: "ការដោះស្រាយកំហុសកូដ" },
    content: {
      en: `### Error Handling in JavaScript
The \`try...catch\` statement allows you to test a block of code for errors, and handle them gracefully if they occur.

### Structure of Try-Catch-Finally
- **\`try\`**: Defines a block of code to run and check.
- **\`catch\`**: Defines a block of code to handle any error.
- **\`throw\`**: Creates custom, user-defined errors.
- **\`finally\`**: Executes code after try and catch, regardless of the outcome.

> **Tip:** Never let errors crash your whole script! Always wrap networking and external JSON parsing logic in a \`try...catch\` block.`,
      km: `### ការគ្រប់គ្រង និងដោះស្រាយកំហុសកូដ (Errors)
ប្រយោគបញ្ជា \`try...catch\` អនុញ្ញាតឱ្យអ្នកសាកល្បងដំណើរការកូដ និងចាប់យកកំហុសមកដោះស្រាយដោយជោគជ័យដោយមិនគាំងកម្មវិធីឡើយ។

### រចនាសម្ព័ន្ធ Try-Catch-Finally
- **\`try\`**៖ កំណត់ប្លុកកូដដើម្បីរត់ និងពិនិត្យមើលកំហុស។
- **\`catch\`**៖ កំណត់ប្លុកកូដសម្រាប់ដោះស្រាយនៅពេលមានកំហុសលេចឡើង។
- **\`throw\`**៖ បង្កើតសារកំហុសផ្ទាល់ខ្លួនរបស់អ្នកសរសេរកូដ។
- **\`finally\`**៖ ដំណើរការកូដចុងក្រោយជានិច្ច មិនថាកូដមុនមានកំហុសឬអត់ឡើយ។

> **អនុសាសន៍:** កុំបណ្តោយឱ្យកំហុសធ្វើឱ្យកម្មវិធីទាំងមូលគាំង! គួរតែសរសេរការទាញយកទិន្នន័យពីបណ្តាញ និងការបម្លែង JSON ក្នុងប្លុក \`try...catch\` ជានិច្ច។`
    },
    starterCode: `try {
  let user = "Sok";
  console.log(user);
  // Calling a non-existent function
  runMissingScript();
} catch (err) {
  console.log("Error caught!");
  console.log("Error name:", err.name);
  console.log("Error message:", err.message);
} finally {
  console.log("This always runs!");
}`
  },
  {
    id: "js-debugging",
    title: { en: "JS Debugging", km: "ការស្វែងរកបញ្ហាកូដ" },
    content: {
      en: `### Debugging JavaScript
Searching for errors in code is called debugging.

### Recommended Debugging Tools
1. **Console Logging**: Print values via \`console.log()\` to verify data flow.
2. **Debugger Keyword**: The \`debugger;\` statement stops the execution of JavaScript, and calls the debugging function.
3. **Browser DevTools**: Press **F12** on Chrome or Edge to view console logs, inspect network calls, and set breakpoints.

> **Tip:** Modern browsers have powerful visual debuggers where you can pause execution on any line and inspect variables.`,
      km: `### របៀបស្វែងរក និងកែតម្រូវបញ្ហាកូដ (Debugging)
ការរាវរក និងការដោះស្រាយកំហុសនៅក្នុងកូដត្រូវបានគេហៅថា Debugging។

### ឧបករណ៍ណែនាំសម្រាប់ការស្វែងរកកំហុស
១. **Console Logging**៖ បោះពុម្ពតម្លៃទិន្នន័យដោយប្រើ \`console.log()\` ដើម្បីផ្ទៀងផ្ទាត់លំហូរ។
២. **ពាក្យគន្លឹះ Debugger**៖ ប្រយោគបញ្ជា \`debugger;\` នឹងបញ្ឈប់ការដំណើរការរបស់ JavaScript និងបើកផ្ទាំងដោះស្រាយកំហុសរបស់ browser។
៣. **Browser DevTools**៖ ចុចប៊ូតុង **F12** នៅលើ Chrome ឬ Edge ដើម្បីមើលកូដ ពិនិត្យបណ្តាញ និងកំណត់ចំនុចផ្អាក (Breakpoints)។

> **អនុសាសន៍:** កម្មវិធីរុករកទំនើបៗមានឧបករណ៍ Debugging ដ៏មានអំណាច ដែលអ្នកអាចផ្អាកកូដនៅបន្ទាត់ណាមួយដើម្បីពិនិត្យតម្លៃអថេរបានយ៉ាងលម្អិត។`
    },
    starterCode: `function calculateTotal(price, tax) {
  let total = price + tax;
  // debugger; // Un-comment this in normal browsers to trigger pause!
  return total;
}

let result = calculateTotal(100, 10);
console.log("Total calculation result:", result);`
  },
  {
    id: "js-style-guide",
    title: { en: "JS Style Guide", km: "គោលការណ៍សរសេរកូដ" },
    content: {
      en: `### JavaScript Code Style Guide
Adhering to a style guide guarantees readable, robust, and clean code that is easy for teams to collaborate on.

### Key Rules
- **Variable Names**: Use **camelCase** (e.g. \`firstName\`).
- **Spaces around operators**: Use spaces (e.g. \`x = y + z\` instead of \`x=y+z\`).
- **Indentation**: Use 2 or 4 spaces. Avoid using tabs.
- **Semicolons**: End simple statements with a semicolon.
- **Constants**: Write global immutable config names in UPPERCASE.

> **Tip:** Use code formatters like **Prettier** and linters like **ESLint** to automatically enforce these rules across your team!`,
      km: `### គោលការណ៍ណែនាំក្នុងការសរសេរកូដ (Style Guide)
ការអនុវត្តតាមគោលការណ៍សរសេរកូដស្តង់ដារ ធានាថាកូដរបស់អ្នកងាយស្រួលអាន រឹងមាំ និងងាយស្រួលសម្រាប់ក្រុមការងារសហការគ្នា។

### វិធានសំខាន់ៗ
- **ឈ្មោះអថេរ**៖ ប្រើទម្រង់អក្សរ **camelCase** (ឧទាហរណ៍៖ \`firstName\`)។
- **ចន្លោះទំនេរជុំវិញប្រមាណវិធី**៖ ប្រើប្រាស់ចន្លោះទំនេរ (ឧទាហរណ៍៖ \`x = y + z\` ជំនួសឱ្យ \`x=y+z\`)។
- **ការរំកិលបន្ទាត់ (Indentation)**៖ ប្រើប្រាស់ចន្លោះ ២ ឬ ៤ ដង (Spaces)។ ចៀសវាងការប្រើ tabs។
- **សញ្ញាក្បៀសចំនុច**៖ បញ្ចប់ប្រយោគបញ្ជាដោយប្រើសញ្ញាក្បៀសចំនុចជានិច្ច។
- **អថេរថេរ (Constants)**៖ សរសេរឈ្មោះថេរជាសកលដោយប្រើអក្សរធំ (UPPERCASE)។

> **អនុសាសន៍:** គួរប្រើប្រាស់ឧបករណ៍បំលែងកូដស្វ័យប្រវត្តដូចជា **Prettier** និងលីនធ័រដូចជា **ESLint** ដើម្បីតម្រង់ទិសដៅកូដរបស់ក្រុមការងារអ្នកឱ្យដូចគ្នាស្វ័យប្រវត្ត!`
    },
    starterCode: `// Bad Style:
// let user="Seyha";let age=22;function ADD(a,b){return a+b}

// Good Styled equivalent:
let userName = "Seyha";
let age = 22;

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(10, 20));`
  },
  {
    id: "js-reference-intro",
    title: { en: "JS Reference", km: "ឯកសារយោងមូលដ្ឋាន JS" },
    content: {
      en: `### Basic Built-In Objects Reference
JavaScript provides useful built-in global objects.

### Most-Used Global Objects
1. **String**: Methods like \`.toUpperCase()\`, \`.trim()\`, \`.split()\`.
2. **Array**: Methods like \`.map()\`, \`.filter()\`, \`.find()\`.
3. **JSON**: Functions like \`JSON.stringify()\` and \`JSON.parse()\`.
4. **Number**: Functions like \`Number.parseInt()\` and \`Number.parseFloat()\`.

> **Note:** A solid understanding of these references is essential before building real projects.`,
      km: `### ឯកសារយោងវត្ថុបញ្ជាមូលដ្ឋាន (Built-In References)
JavaScript ផ្ដល់ជូននូវវត្ថុបញ្ជាស្រាប់ (Built-in Objects) ជាច្រើនដែលមានសារៈសំខាន់សម្រាប់ការងារប្រចាំថ្ងៃ។

### វត្ថុចម្បងៗដែលពេញនិយម
១. **String**៖ វិធីសាស្ត្រ \`.toUpperCase()\` (បម្លែងជាអក្សរធំ), \`.trim()\` (លុបចន្លោះទំនេរ), \`.split()\` (បំបែកខ្សែអក្សរ)។
២. **Array**៖ វិធីសាស្ត្រ \`.map()\`, \`.filter()\`, \`.find()\`។
៣. **JSON**៖ អនុគមន៍ \`JSON.stringify()\` និង \`JSON.parse()\`។
៤. **Number**៖ អនុគមន៍ \`Number.parseInt()\` និង \`Number.parseFloat()\`។

> **សម្គាល់:** ការយល់ដឹងច្បាស់លាស់អំពីឯកសារយោងទាំងនេះ គឺជាគ្រឹះមិនអាចខ្វះបានមុននឹងចាប់ផ្តើមបង្កើតគម្រោងពិតប្រាកដ។`
    },
    starterCode: `let rawInput = "  angkor wat  ";
let formatted = rawInput.trim().toUpperCase();
console.log("Formatted text:", formatted);

let dataString = '{"id": 105, "role": "admin"}';
let parsed = JSON.parse(dataString);
console.log("Parsed Role:", parsed.role);`
  },
  {
    id: "js-projects",
    title: { en: "JS Projects", km: "គម្រោងសាកល្បង JS" },
    isNew: true,
    content: {
      en: `### Building Interactive Web Projects
Now that you have learned the basics of loops, functions, variables, and arrays, it's time to merge them together!

### Mini Project Checklist
- Create dynamic calculations (e.g. simple tip calculator).
- Structure logic flows correctly.
- Learn how script tags bind to document flows.

> **Tip:** Write clear variables, structure your calculations, and print outputs cleanly to verify operations.`,
      km: `### ការបង្កើតគម្រោងអន្តរកម្មជាមួយ JS
បន្ទាប់ពីបានសិក្សាអំពីគ្រឹះនៃ លូប អនុគមន៍ អថេរ និងអារេមក ដល់ពេលដែលត្រូវយកវាមកបញ្ចូលគ្នាដើម្បីបង្កើតកម្មវិធីជាក់ស្តែងហើយ!

### គោលការណ៍គម្រោងខ្លី
- បង្កើតកម្មវិធីគណនាឌីណាមិក (ឧទាហរណ៍៖ ម៉ាស៊ីនគណនាប្រាក់ឧបត្ថម្ភ Tip Calculator)។
- រៀបចំលំហូរតក្កវិជ្ជាកូដឱ្យបានត្រឹមត្រូវ។
- ស្វែងយល់ពីរបៀបដែលកូដស្គ្រីបភ្ជាប់ទៅកាន់ទិន្នន័យគេហទំព័រ។

> **អនុសាសន៍:** សរសេរអថេរឱ្យមានន័យច្បាស់លាស់ រៀបចំការគណនា និងបង្ហាញលទ្ធផលឱ្យបានស្អាតដើម្បីផ្ទៀងផ្ទាត់។`
    },
    starterCode: `// Tip Calculator Project
// Write a function to calculate a 15% tip of a bill
function calculateTip(billAmount) {
  const tipPercent = 0.15;
  return billAmount * tipPercent;
}

let bill = 250; // $250
let tip = calculateTip(bill);
console.log("Bill amount:", bill, "$");
console.log("Tip calculation (15%):", tip, "$");
console.log("Total Payment:", bill + tip, "$");`
  },
  {
    id: "js-versions",
    title: { en: "JS Versions", km: "ជំនាន់របស់ JS" },
    content: {
      en: `### Evolution of JavaScript Versions
JavaScript was invented by Brendan Eich in 1995 and became an ECMA standard in 1997.

### Major Milestone Versions
1. **ES5 (2009)**: Added strict mode, JSON support, and basic Array features.
2. **ES6 / ECMAScript 2015**: The biggest upgrade in history! Introduced \`let\`, \`const\`, Arrow Functions, Classes, Promises, and Template Literals.
3. **ES2016 - Present**: Adds incremental upgrades every year (e.g. Async/Await, Array.includes, Nullish Coalescing).

> **Tip:** Always use modern ES6+ standards when writing production code. They are highly performant and secure.`,
      km: `### ការវិវត្តន៍នៃជំនាន់កូដ JavaScript
JavaScript ត្រូវបានបង្កើតឡើងដោយលោក Brendan Eich ក្នុងឆ្នាំ ១៩៩៥ និងបានក្លាយជាស្តង់ដារ ECMA ក្នុងឆ្នាំ ១៩៩៧។

### ជំនាន់សំខាន់ៗដែលជាចំណុចរបត់
១. **ES5 (២០០៩)**៖ បញ្ចូលមុខងារ Strict mode, ការគាំទ្រទិន្នន័យ JSON និងមុខងារអារេមូលដ្ឋាន។
២. **ES6 / ECMAScript 2015**៖ ការកែលម្អធំបំផុតក្នុងប្រវត្តិសាស្ត្រ! ណែនាំឱ្យស្គាល់ \`let\`, \`const\`, Arrow Functions, Classes, Promises និង Template Literals។
៣. **ES2016 ដល់បច្ចុប្បន្ន**៖ បន្ថែមមុខងារកែលម្អជាប្រចាំរៀងរាល់ឆ្នាំ (ដូចជា Async/Await, Array.includes, Nullish Coalescing)។

> **អនុសាសន៍:** គួរប្រើប្រាស់ស្តង់ដារទំនើប ES6+ ជានិច្ចនៅពេលសរសេរកូដសម្រាប់គម្រោងជាក់ស្តែង ព្រោះវាមានសមត្ថភាពខ្ពស់ និងមានសុវត្ថិភាពខ្ពស់។`
    },
    starterCode: `// ES6 Arrow Function and Const variable demo
const multiply = (a, b) => a * b;
console.log("ES6 Arrow Function output:", multiply(8, 9));`
  },
  {
    id: "js-html-dom",
    title: { en: "JS HTML DOM", km: "គ្រប់គ្រង HTML DOM" },
    content: {
      en: `### The HTML DOM (Document Object Model)
When a web page is loaded, the browser creates a **Document Object Model** of the page.

### The DOM Tree
The DOM is structured as a tree of Objects. With JavaScript, we can:
- Change any HTML elements on the page.
- Change any HTML attributes (like \`src\`, \`href\`).
- Change any CSS styles.
- Add or remove HTML elements.

### Selecting Elements
- \`document.getElementById(id)\`
- \`document.querySelector(selector)\` (selects by CSS rules)

> **Tip:** The DOM is the primary API used by frontend scripts to create dynamic, rich web pages.`,
      km: `### HTML DOM (Document Object Model)
នៅពេលដែលគេហទំព័រមួយត្រូវបានដំណើរការ កម្មវិធីរុករក (Browser) នឹងបង្កើតឡើងនូវ **Document Object Model** នៃទំព័រនោះ។

### រចនាសម្ព័ន្ធដើមឈើ DOM Tree
DOM ត្រូវបានរៀបចំឡើងជាដើមឈើនូវវត្ថុ (Objects)។ តាមរយៈ JavaScript យើងអាច៖
- កែប្រែធាតុ HTML ណាមួយនៅលើគេហទំព័រ។
- កែប្រែលក្ខណៈសម្បត្តិ HTML (ដូចជា \`src\`, \`href\`)។
- កែប្រែម៉ូដរចនា CSS Styles ទាំងអស់។
- បន្ថែម ឬលុបធាតុ HTML។

### ការជ្រើសរើសធាតុ
- \`document.getElementById(id)\`
- \`document.querySelector(selector)\` (ជ្រើសរើសតាមរយៈវិធាន CSS)

> **អនុសាសន៍:** DOM គឺជា API ចម្បងបំផុតដែលប្រើប្រាស់ដោយកូដខាងមុខដើម្បីបង្កើតគេហទំព័រឌីណាមិកដ៏សម្បូរបែប។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h1 id="mainHeader">Welcome to the DOM!</h1>
  <button onclick="changeDOM()">Change Title Text</button>

  <script>
    function changeDOM() {
      // Access element and modify its innerHTML and CSS
      const header = document.getElementById("mainHeader");
      header.innerHTML = "DOM Successfully Changed!";
      header.style.color = "#10b981";
    }
  </script>
</body>
</html>`
  },
  {
    id: "js-html-events",
    title: { en: "JS HTML Events", km: "ព្រឹត្តិការណ៍ HTML Events" },
    content: {
      en: `### Handling HTML Events
An HTML event can be something the browser does, or something a user does.

### Common Events
- **onclick**: User clicks an HTML element.
- **onchange**: An HTML element has been changed (e.g. typing inside input).
- **onmouseover**: User moves the mouse over an HTML element.
- **onload**: The browser has finished loading the page.

### Event Listeners
Instead of writing inline events, use \`addEventListener\` for cleaner separation:
\`\`\`javascript
element.addEventListener("click", myFunction);
\`\`\`

> **Tip:** \`addEventListener\` allows you to attach multiple events to a single element without overriding existing event handlers.`,
      km: `### ព្រឹត្តិការណ៍លើគេហទំព័រ (HTML Events)
ព្រឹត្តិការណ៍ (Event) អាចជាសកម្មភាពណាមួយដែលកម្មវិធីរុករកធ្វើ ឬជាអ្វីដែលអ្នកប្រើប្រាស់ធ្វើ។

### ព្រឹត្តិការណ៍ពេញនិយម
- **onclick**៖ អ្នកប្រើប្រាស់ចុចលើធាតុ HTML ណាមួយ។
- **onchange**៖ ធាតុ HTML ត្រូវបានផ្លាស់ប្តូរ (ឧទាហរណ៍៖ វាយអត្ថបទក្នុងប្រអប់បញ្ចូល)។
- **onmouseover**៖ អ្នកប្រើប្រាស់អូសកណ្តុរមកលើធាតុ HTML។
- **onload**៖ កម្មវិធីរុករកបានដំណើរការទំព័រទាំងស្រុងរួចរាល់។

### ការប្រើប្រាស់ Event Listeners
ជំនួសឱ្យការសរសេរកូដព្រឹត្តិការណ៍ផ្ទាល់លើថេក គួរប្រើ \`addEventListener\` ដើម្បីកូដស្អាតជាង៖
\`\`\`javascript
element.addEventListener("click", myFunction);
\`\`\`

> **អនុសាសន៍:** \`addEventListener\` អនុញ្ញាតឱ្យអ្នកភ្ជាប់ព្រឹត្តិការណ៍ជាច្រើនទៅកាន់ធាតុតែមួយបាន ដោយមិនមានការជាន់គ្នាលើកូដចាស់ឡើយ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <div id="box" style="width: 150px; height: 150px; background-color: #ef4444; border-radius: 8px; transition: background 0.3s; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; cursor: pointer;">
    Hover Me!
  </div>

  <script>
    const box = document.getElementById("box");
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "#3b82f6";
      box.innerHTML = "Awesome Hover!";
    });
    box.addEventListener("mouseout", () => {
      box.style.backgroundColor = "#ef4444";
      box.innerHTML = "Hover Me!";
    });
  </script>
</body>
</html>`
  },
  {
    id: "js-html-forms",
    title: { en: "JS HTML Forms", km: "គ្រប់គ្រងទម្រង់ Forms" },
    content: {
      en: `### Form Handling with JavaScript
HTML form validation can be performed automatically by the browser, but advanced checks are done via JavaScript.

### Accessing Form Inputs
Retrieve values from input elements easily using their \`value\` attribute:
\`\`\`javascript
const name = document.getElementById("username").value;
\`\`\`

### Preventing Default Submissions
By default, forms reload the page on submission. Use \`event.preventDefault()\` to stop this, enabling smooth async AJAX submissions.

> **Tip:** Always perform validation on both the client-side (for user experience) and server-side (for actual security).`,
      km: `### ការគ្រប់គ្រងទម្រង់បំពេញព័ត៌មាន (Forms)
ការផ្ទៀងផ្ទាត់ទិន្នន័យក្នុងទម្រង់ (Form validation) អាចធ្វើឡើងដោយស្វ័យប្រវត្តតាមរយៈកម្មវិធីរុករក ប៉ុន្តែការផ្ទៀងផ្ទាត់ស្មុគស្មាញត្រូវធ្វើឡើងតាមរយៈ JavaScript។

### ការទាញយកទិន្នន័យប្រអប់បញ្ចូល
ទាញយកតម្លៃដែលអ្នកប្រើប្រាស់វាយបញ្ចូលយ៉ាងងាយស្រួលដោយប្រើប្រាស់លក្ខណៈសម្បត្តិ \`value\`៖
\`\`\`javascript
const name = document.getElementById("username").value;
\`\`\`

### ការទប់ស្កាត់ការដំណើរការឡើងវិញ (Prevent Default)
ជាធម្មតា ទម្រង់ (Form) នឹងផ្ទុកគេហទំព័រឡើងវិញនៅពេលចុចផ្ញើព័ត៌មាន។ ប្រើ \`event.preventDefault()\` ដើម្បីទប់ស្កាត់បញ្ហានេះ ជួយឱ្យការផ្ញើទិន្នន័យកាន់តែរលូន។

> **អនុសាសន៍:** ត្រូវធ្វើការផ្ទៀងផ្ទាត់ទិន្នន័យទាំងនៅលើផ្នែកអតិថិជន (Client-side សម្រាប់បទពិសោធន៍អ្នកប្រើប្រាស់) និងផ្នែកខាងក្រោយ (Server-side សម្រាប់សុវត្ថិភាពទិន្នន័យពិតប្រាកដ)។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h3>Submit Your Name</h3>
  <form id="userForm">
    <input type="text" id="nameInput" placeholder="Enter name...">
    <button type="submit">Submit</button>
  </form>
  <p id="msg" style="color: #10b981; font-weight: bold;"></p>

  <script>
    const form = document.getElementById("userForm");
    const input = document.getElementById("nameInput");
    const msg = document.getElementById("msg");

    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Stop page reload
      const name = input.value.trim();
      if (!name) {
        alert("Please enter a valid name!");
        return;
      }
      msg.innerHTML = "សួស្តី " + name + "! ទម្រង់របស់អ្នកត្រូវបានបញ្ជូនដោយជោគជ័យ។";
    });
  </script>
</body>
</html>`
  }
];
