import { Lesson } from '../types';

export const javascriptLessonsPart1: Lesson[] = [
  {
    id: "js-home",
    title: { en: "JS Home", km: "ទំព័រដើម JS" },
    content: {
      en: `### JavaScript Course Overview
Welcome to the comprehensive JavaScript course! JavaScript is the programming language of the Web. It powers the behavior, interactivity, and logic behind almost every modern website and application.

In this course, you will learn JavaScript step-by-step from beginner variables to advanced prototypes, async engines, and web APIs.

> **Tip:** Our platform includes a fully interactive live compiler. Edit the code in the editor on the right and click **Run Code** to see the results instantly in the output console or preview pane!`,
      km: `### ទិដ្ឋភាពទូទៅនៃវគ្គសិក្សាកូដ JavaScript
ស្វាគមន៍មកកាន់វគ្គសិក្សា JavaScript ពេញលេញ! JavaScript គឺជាភាសាសរសេរកម្មវិធីនៃបណ្តាញអ៊ីនធឺណិត (Web)។ វាជំរុញសកម្មភាព ភាពរស់រវើក និងតក្កវិជ្ជានៅពីក្រោយរាល់គេហទំព័រ និងកម្មវិធីទំនើបៗទាំងអស់។

ក្នុងវគ្គសិក្សានេះ អ្នកនឹងរៀន JavaScript មួយជំហានម្តងៗ ចាប់ពីកម្រិតដំបូង (Variables) រហូតដល់កម្រិតខ្ពស់ (Prototypes, Async, Web APIs)។

> **អនុសាសន៍:** វេទិការបស់យើងមានបង្កប់ឧបករណ៍ដំណើរការកូដផ្ទាល់។ កែប្រែកូដនៅក្នុងប្រអប់ខាងស្តាំ រួចចុច **ដំណើរការកូដ** ដើម្បីឃើញលទ្ធផលភ្លាមៗនៅលើអេក្រង់!`
    },
    starterCode: `// Welcome to JavaScript!
console.log("សួស្តីកម្ពុជា! Hello Cambodia!");
let courseName = "Full-Stack JavaScript Course";
console.log("Current course: " + courseName);`
  },
  {
    id: "js-intro",
    title: { en: "JS Introduction", km: "សេចក្តីផ្តើម JS" },
    content: {
      en: `### What is JavaScript?
JavaScript (JS) is a dynamic, lightweight, and single-threaded programming language. It is most famous for client-side web browser execution, but today it also runs on servers via Node.js.

### Why Study JavaScript?
1. **HTML** structures web pages.
2. **CSS** styles the appearance.
3. **JavaScript** commands the actions and behaviors.

> **Note:** JavaScript is completely different from the Java programming language. They have different syntaxes, architectures, and philosophies.`,
      km: `### តើ JavaScript ជាអ្វី?
JavaScript (JS) គឺជាភាសាសរសេរកម្មវិធីឌីណាមិក ស្រាល និងជាប្រភេទ Single-threaded។ វាល្បីល្បាញបំផុតសម្រាប់ការសរសេរកូដបញ្ជាដំណើរការលើកម្មវិធីរុករក (Web Browser) ប៉ុន្តែបច្ចុប្បន្នវាក៏រត់លើម៉ាស៊ីនបម្រើ (Server) តាមរយៈ Node.js ផងដែរ។

### ហេតុអ្វីត្រូវរៀន JavaScript?
១. **HTML** កំណត់រចនាសម្ព័ន្ធគេហទំព័រ។
២. **CSS** តុបតែងលម្អសោភ័ណភាព។
៣. **JavaScript** បញ្ជាសកម្មភាព និងអន្តរកម្មផ្សេងៗ។

> **សម្គាល់:** ភាសា JavaScript គឺខុសគ្នាស្រឡះពីភាសា Java។ ពួកវាមានទម្រង់សរសេរ រចនាសម្ព័ន្ធ និងទស្សនវិជ្ជាខុសគ្នាទាំងស្រុង។`
    },
    starterCode: `// JavaScript can change web content on the fly
console.log("Starting Web Page...");
let greeting = "Hello, World!";
console.log(greeting);`
  },
  {
    id: "js-whereto",
    title: { en: "JS Where To", km: "ទីតាំងសរសេរ JS" },
    content: {
      en: `### Where to Add JavaScript?
In HTML, JavaScript code is inserted between \`<script>\` and \`</script>\` tags. You can place your scripts:
1. **Inside \`<head>\`**: Executed before body renders.
2. **Inside \`<body>\`**: Usually placed right before the closing \`</body>\` tag for faster loading.
3. **External File**: In a separate \`.js\` file linked via \`<script src="script.js"></script>\`.

> **Tip:** Placing scripts at the bottom of the \`<body>\` element improves page display speed because script compilation won't block HTML parsing.`,
      km: `### តើត្រូវសរសេរកូដ JavaScript នៅកន្លែងណា?
នៅក្នុង HTML កូដ JavaScript ត្រូវបានសរសេរនៅចន្លោះថេក \`<script>\` និង \`</script>\`។ អ្នកអាចដាក់កូដទាំងនោះបាននៅ៖
១. **ក្នុងផ្នែក \`<head>\`**៖ ដំណើរការមុនពេលតួគេហទំព័រលេចចេញ។
២. **ក្នុងផ្នែក \`<body>\`**៖ ជាធម្មតាត្រូវបានដាក់នៅចុងបញ្ចប់នៃផ្នែក \`<body>\` ដើម្បីឱ្យគេហទំព័រដំណើរការលឿន។
៣. **ឯកសារខាងក្រៅ (External)**៖ សរសេរក្នុងឯកសារ \`.js\` ដាច់ដោយឡែក រួចភ្ជាប់តាមរយៈ \`<script src="script.js"></script>\`។

> **អនុសាសន៍:** ការដាក់ស្គ្រីបនៅផ្នែកខាងក្រោមនៃធាតុ \`<body>\` ជួយបង្កើនល្បឿនបង្ហាញគេហទំព័រ ព្រោះការចងក្រងស្គ្រីបនឹងមិនរារាំងការបង្ហាញរចនាសម្ព័ន្ធ HTML ឡើយ។`
    },
    starterCode: `// Try embedding interactive JS. Click Run Code!
console.log("This is executing inside the script tags.");`
  },
  {
    id: "js-output",
    title: { en: "JS Output", km: "ការបង្ហាញលទ្ធផល JS" },
    content: {
      en: `### Displaying JavaScript Outputs
JavaScript can display data in four different ways:
1. **Writing into an HTML element**, using \`innerHTML\`.
2. **Writing into the HTML output** directly, using \`document.write()\` (mostly for testing).
3. **Writing into an alert box**, using \`window.alert()\`.
4. **Writing into the browser console**, using \`console.log()\`.

> **Note:** \`console.log()\` is the most secure and professional way to output variables for debugging because it does not affect the end-user layout.`,
      km: `### របៀបបង្ហាញលទ្ធផលពី JavaScript
JavaScript អាចបង្ហាញទិន្នន័យបានតាម ៤ របៀបផ្សេងគ្នា៖
១. **សរសេរទៅកាន់ធាតុ HTML** ដោយប្រើប្រាស់លក្ខណៈសម្បត្តិ \`innerHTML\`។
២. **សរសេរដោយផ្ទាល់ទៅលើទំព័រ HTML** ដោយប្រើប្រាស់ \`document.write()\` (ជាទូទៅសម្រាប់ការសាកល្បង)។
៣. **សរសេរទៅកាន់ប្រអប់សារព្រមាន** ដោយប្រើប្រាស់ \`window.alert()\`។
៤. **សរសេរទៅកាន់ផ្ទាំងបញ្ជារបស់កម្មវិធីរុករក (Console)** ដោយប្រើប្រាស់ \`console.log()\`។

> **សម្គាល់:** ការប្រើ \`console.log()\` គឺជាវិធីដែលមានសុវត្ថិភាព និងវិជ្ជាជីវៈបំផុតក្នុងការស្វែងរកកំហុសកូដ (Debugging) ព្រោះវាមិនប៉ះពាល់ដល់ការបង្ហាញប្លង់គេហទំព័រឡើយ។`
    },
    starterCode: `// Try output techniques
console.log("Hello to Console!");
// document.write("Written direct to page");`
  },
  {
    id: "js-syntax",
    title: { en: "JS Syntax", km: "ទម្រង់សរសេរ JS" },
    content: {
      en: `### JavaScript Syntax Rules
JavaScript syntax is the set of rules defining how programs are constructed.

- **Values**: Can be fixed values called **literals** (like \`10\` or \`"John"\`) or variable values called **variables**.
- **Variables**: Declared using \`let\`, \`const\`, or \`var\`.
- **Case Sensitive**: JavaScript is highly case-sensitive. \`lastName\` and \`lastname\` are two completely distinct variables.
- **Semicolons**: Separate statements. While optional in some conditions, always use semicolons for explicit safety.

> **Tip:** Always use camelCase (e.g. \`myAwesomeVariable\`) for variable names in JavaScript. It is the community standard.`,
      km: `### វិធាននៃទម្រង់សរសេរ JavaScript (Syntax)
ទម្រង់សរសេររបស់ JavaScript គឺជាសំណុំវិធានដែលកំណត់ពីរបៀបសរសេរ និងរៀបចំកម្មវិធី។

- **តម្លៃ (Values)**៖ អាចជាតម្លៃថេរហៅថា **Literals** (ដូចជា \`10\` ឬ \`"John"\`) ឬតម្លៃប្រែប្រួលហៅថា **Variables**។
- **អថេរ (Variables)**៖ ប្រកាសឡើងដោយប្រើពាក្យគន្លឹះ \`let\`, \`const\`, ឬ \`var\`។
- **Case Sensitive**៖ JavaScript គឺប្រកាន់អក្សរតូច-ធំខ្លាំងណាស់។ \`lastName\` និង \`lastname\` គឺជាអថេរពីរផ្សេងគ្នាទាំងស្រុង។
- **សញ្ញាក្បៀសចំនុច (Semicolons)**៖ ប្រើសម្រាប់បញ្ចប់ប្រយោគបញ្ជា។ ទោះបីជាពេលខ្លះមិនចាំបាច់ ប៉ុន្តែគួរតែសរសេរវាដើម្បីសុវត្ថិភាពកូដ។

> **អនុសាសន៍:** គួរតែប្រើប្រាស់របៀបសរសេរអក្សរបែប camelCase (ឧទាហរណ៍៖ \`myAwesomeVariable\`) សម្រាប់ដាក់ឈ្មោះអថេរក្នុង JavaScript ដែលជាស្តង់ដាររួម។`
    },
    starterCode: `// JavaScript is case-sensitive!
const price = 400;
const Price = 600;

console.log("price:", price);
console.log("Price:", Price);`
  },
  {
    id: "js-operators",
    title: { en: "JS Operators", km: "ប្រមាណវិធី JS" },
    content: {
      en: `### JavaScript Operators
Operators are used to assign values, compare values, and perform arithmetic operations.

### Arithmetic Operators
- \`+\` (Addition), \`-\` (Subtraction), \`*\` (Multiplication), \`/\` (Division)
- \`%\` (Modulus/Remainder), \`**\` (Exponentiation)

### Comparison Operators
- \`==\` (Equal to value), \`===\` (Equal value and type)
- \`!=\` (Not equal value), \`!==\` (Not equal value or type)
- \`>\`, \`<\`, \`>=\`, \`<=\`

> **Note:** Always prefer the strict equality operator \`===\` over \`==\`. It guarantees that type mismatches (like string \`"5"\` vs number \`5\`) are caught.`,
      km: `### ប្រមាណវិធីរបស់ JavaScript (Operators)
ប្រមាណវិធីត្រូវបានប្រើប្រាស់សម្រាប់កំណត់តម្លៃ ប្រៀបធៀបតម្លៃ និងគណនាគណិតវិទ្យា។

### ប្រមាណវិធីគណិតវិទ្យា
- \`+\` (បូក), \`-\` (ដក), \`*\` (គុណ), \`/\` (ចែក)
- \`%\` (ការចែករកសំណល់), \`**\` (ស្វ័យគុណ)

### ប្រមាណវិធីប្រៀបធៀប
- \`==\` (ស្មើទំហំតម្លៃ), \`===\` (ស្មើទាំងតម្លៃ និងប្រភេទប្រភេទ)
- \`!=\` (មិនស្មើ), \`!==\` (មិនស្មើទាំងតម្លៃ ឬប្រភេទ)
- \`>\`, \`<\`, \`>=\`, \`<=\`

> **សម្គាល់:** គួរតែជ្រើសរើសការប្រើ \`===\` ជាជាង \`==\` ជានិច្ច ព្រោះវាធានាការប្រៀបធៀបត្រឹមត្រូវទាំងប្រភេទ (ដូចជាការទប់ស្កាត់ការស្មើគ្នារវាង \`"5"\` និង \`5\`)។`
    },
    starterCode: `let num1 = 5;
let num2 = "5";

console.log("num1 == num2 :", num1 == num2); // true
console.log("num1 === num2 :", num1 === num2); // false`
  },
  {
    id: "js-if-conditions",
    title: { en: "JS If Conditions", km: "លក្ខខណ្ឌ If JS" },
    content: {
      en: `### Conditional Statements
Conditional statements are used to perform different actions based on different conditions.

### Syntax Structure
\`\`\`javascript
if (condition1) {
  // block to be executed if condition1 is true
} else if (condition2) {
  // block to be executed if condition1 is false and condition2 is true
} else {
  // block to be executed if condition1 and condition2 are false
}
\`\`\`

> **Tip:** For multiple exact matches, consider using the \`switch\` statement instead of writing long \`else if\` chains.`,
      km: `### ប្រយោគលក្ខខណ្ឌ (If...Else)
ប្រយោគលក្ខខណ្ឌត្រូវបានប្រើប្រាស់ដើម្បីអនុវត្តសកម្មភាពផ្សេងៗគ្នាផ្អែកលើលក្ខខណ្ឌដែលបានកំណត់។

### រចនាសម្ព័ន្ធលក្ខខណ្ឌ
\`\`\`javascript
if (លក្ខខណ្ឌទី១) {
  // កូដដំណើរការបើលក្ខខណ្ឌទី១ ត្រឹមត្រូវ (true)
} else if (លក្ខខណ្ឌទី២) {
  // កូដដំណើរការបើលក្ខខណ្ឌទី១ ខុស តែលក្ខខណ្ឌទី២ ត្រូវ
} else {
  // កូដដំណើរការបើរាល់លក្ខខណ្ឌខាងលើខុសទាំងអស់
}
\`\`\`

> **អនុសាសន៍:** សម្រាប់ការប្រៀបធៀបតម្លៃច្បាស់លាស់ជាច្រើន គួរពិចារណាប្រើប្រាស់ \`switch\` ជំនួសឱ្យខ្សែសង្វាក់ \`else if\` វែងអន្លាយ។`
    },
    starterCode: `let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}`
  },
  {
    id: "js-loops",
    title: { en: "JS Loops", km: "លូបវិល Loops" },
    content: {
      en: `### Loops in JavaScript
Loops are used to run the same block of code repeatedly as long as a specified condition is met.

### Major Loops
1. **\`for\`**: Loops through a block of code a specified number of times.
2. **\`while\`**: Loops through a block of code while a specified condition is true.
3. **\`do...while\`**: Loops once, and then repeats the loop as long as the condition is true.

> **Note:** Be careful to write an incremental step (like \`i++\`) inside loops, otherwise you will trigger an **infinite loop** that crashes the browser.`,
      km: `### លូបវិលវិលជុំនៅក្នុង JavaScript (Loops)
លូបត្រូវបានប្រើដើម្បីដំណើរការប្លុកកូដដដែលៗ ច្រើនដងដរាបណាលក្ខខណ្ឌដែលបានកំណត់នៅតែត្រឹមត្រូវ។

### ប្រភេទលូបចម្បងៗ
១. **\`for\`**៖ វិលជុំកូដចំនួនដងជាក់លាក់ដែលបានកំណត់ទុកជាមុន។
២. **\`while\`**៖ វិលជុំកូដដរាបណាលក្ខខណ្ឌប្រកាសនៅតែពិត (true)។
៣. **\`do...while\`**៖ ដំណើរការកូដជាមុនម្តងសិន រួចទើបពិនិត្យលក្ខខណ្ឌដើម្បីវិលជុំជាបន្តបន្ទាប់។

> **សម្គាល់:** ត្រូវប្រុងប្រយ័ត្នសរសេរបន្ថែមតម្លៃជំហាន (ដូចជា \`i++\`) នៅក្នុងលូប បើមិនដូច្នោះទេវានឹងបង្កើត **លូបមិនចេះចប់ (Infinite Loop)** ដែលធ្វើឱ្យកម្មវិធីគាំងជាមិនខាន។`
    },
    starterCode: `console.log("Counting with For Loop:");
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

console.log("Counting with While Loop:");
let x = 1;
while (x <= 3) {
  console.log("While Count: " + x);
  x++;
}`
  },
  {
    id: "js-strings",
    title: { en: "JS Strings", km: "ខ្សែអក្សរ Strings" },
    content: {
      en: `### JavaScript Strings
A JavaScript string is zero or more characters written inside quotes.

### Methods and Operations
- **Length**: \`string.length\` gets character count.
- **Escape Characters**: Use \`\\"\` or \`\\'\` to type nested quotes.
- **Template Literals**: Use backticks (\` \` \`) to merge expressions easily:
  \`\`\`javascript
  let name = "Dara";
  let msg = \`Hello, \${name}!\`;
  \`\`\`

> **Tip:** Template literals allow multi-line strings without using newline escape characters (\`\\n\`).`,
      km: `### ខ្សែអក្សរនៅក្នុង JavaScript (Strings)
ខ្សែអក្សរ JavaScript គឺជាសំណុំតួអក្សរដែលសរសេរនៅក្នុងសញ្ញាសម្រង់ ឬសញ្ញាធ្មេញកណ្តុរ។

### វិធីសាស្ត្រ និងមុខងារសំខាន់ៗ
- **ប្រវែង (Length)**៖ \`string.length\` ទាញយកចំនួនតួអក្សរទាំងអស់។
- **Escape Characters**៖ ប្រើប្រាស់ \`\\"\` ឬ \`\\'\` ដើម្បីសរសេរសញ្ញាសម្រង់ក្នុងខ្សែអក្សរ។
- **Template Literals**៖ ប្រើប្រាស់សញ្ញា Backticks (\` \` \`) ដើម្បីភ្ជាប់ជាមួយតម្លៃអថេរយ៉ាងងាយស្រួល៖
  \`\`\`javascript
  let name = "Dara";
  let msg = \`Hello, \${name}!\`;
  \`\`\`

> **អនុសាសន៍:** Template literals អនុញ្ញាតឱ្យយើងសរសេរខ្សែអក្សរចុះបន្ទាត់ច្រើនជួរបានដោយមិនបាច់ប្រើតួអក្សរបញ្ជាចុះបន្ទាត់ (\`\\n\`) ឡើយ។`
    },
    starterCode: `let text = "Cambodian Coders";
console.log("Length:", text.length);

let province = "Siem Reap";
let greeting = \`Welcome to Angkor Wat in \${province}!\`;
console.log(greeting);`
  },
  {
    id: "js-numbers",
    title: { en: "JS Numbers", km: "លេខក្នុង JS" },
    content: {
      en: `### Numbers in JavaScript
JavaScript has only one type of number. Numbers can be written with or without decimals.

### Nan and Safe Ranges
- **NaN**: Stand for **Not-a-Number**. It is a JavaScript reserved word indicating that a number is not a legal number.
- **Integer Precision**: Integers are accurate up to 15 digits.
- **Operations**: Converting values to numbers can be done via \`Number("123")\`, \`parseInt()\`, or \`parseFloat()\`.

> **Note:** Watch out for floating-point arithmetic! For example, \`0.1 + 0.2\` returns \`0.30000000000000004\` due to binary fraction limitations.`,
      km: `### លេខនៅក្នុង JavaScript (Numbers)
JavaScript មានប្រភេទលេខតែមួយគត់ (មិនបំបែករវាង Integer និង Float ឡើយ)។ លេខអាចសរសេរដោយមានក្បៀស ឬគ្មានក្បៀស។

### NaN និងដែនកំណត់សុវត្ថិភាព
- **NaN**៖ តំណាងឱ្យ **Not-a-Number**។ វាជាពាក្យគន្លឹះដែលបញ្ជាក់ថាតម្លៃនោះមិនមែនជាលេខត្រឹមត្រូវតាមច្បាប់គណិតវិទ្យាឡើយ។
- **កម្រិតជាក់លាក់ (Precision)**៖ ចំនួនគត់មានភាពត្រឹមត្រូវរហូតដល់ ១៥ ខ្ទង់។
- **ការបំលែង**៖ អាចបំលែងអត្ថបទទៅជាលេខបានតាមរយៈ \`Number("123")\`, \`parseInt()\`, ឬ \`parseFloat()\`។

> **សម្គាល់:** ត្រូវប្រុងប្រយ័ត្នលើប្រមាណវិធីលេខមានក្បៀស (Floating-point)! ឧទាហរណ៍៖ \`0.1 + 0.2\` នឹងផ្តល់លទ្ធផល \`0.30000000000000004\` ដោយសារដែនកំណត់ប្រព័ន្ធទ្វេភាគ (Binary)។`
    },
    starterCode: `let x = 0.1;
let y = 0.2;
let z = x + y;
console.log("0.1 + 0.2 = ", z);

let invalidNum = "Hello" / 5;
console.log("invalidNum value is NaN:", isNaN(invalidNum));`
  },
  {
    id: "js-functions-intro",
    title: { en: "JS Functions", km: "អនុគមន៍ JS" },
    content: {
      en: `### JavaScript Functions Introduction
A JavaScript function is a block of code designed to perform a particular task. It is executed when "something" invokes (calls) it.

### Basic Syntax
\`\`\`javascript
function name(parameter1, parameter2) {
  // code to be executed
  return parameter1 + parameter2;
}
\`\`\`

- **Parameters** are listed inside the parentheses \`()\` in the function definition.
- **Arguments** are the real values received by the function when it is invoked.

> **Tip:** Functions prevent repeating code. Write the logic once and reuse it as many times as you need.`,
      km: `### អនុគមន៍នៅក្នុង JavaScript (Functions)
អនុគមន៍ JavaScript គឺជាប្លុកកូដដែលបង្កើតឡើងដើម្បីអនុវត្តភារកិច្ចជាក់លាក់ណាមួយ។ វាដំណើរការនៅពេលដែលមាន "កូដផ្សេងទៀត" ហៅ (Invoke) វាមកប្រើ។

### ទម្រង់សរសេរជាមូលដ្ឋាន
\`\`\`javascript
function name(parameter1, parameter2) {
  // កូដដំណើរការ
  return parameter1 + parameter2;
}
\`\`\`

- **Parameters** គឺជាបញ្ជីឈ្មោះអថេរប្រកាសនៅក្នុងវង់ក្រចក \`()\` នៃអនុគមន៍។
- **Arguments** គឺជាតម្លៃពិតប្រាកដដែលបញ្ជូនទៅកាន់អនុគមន៍ពេលវាត្រូវបានហៅដំណើរការ។

> **អនុសាសន៍:** អនុគមន៍ជួយការពារកុំឱ្យយើងសរសេរកូដជាន់គ្នា។ សរសេរតក្កវិជ្ជាតែម្តង រួចយកទៅប្រើប្រាស់ឡើងវិញបានច្រើនដងតាមតម្រូវការ។`
    },
    starterCode: `function greetUser(username) {
  return "សួស្តី " + username + "! ស្វាគមន៍មកកាន់ការរៀន JavaScript។";
}

let message = greetUser("សុកជា");
console.log(message);`
  },
  {
    id: "js-objects-intro",
    title: { en: "JS Objects", km: "វត្ថុ Object JS" },
    content: {
      en: `### JavaScript Objects Introduction
Objects are variables too. But objects can contain many values, written as **key:value** pairs (properties).

### Syntax Structure
\`\`\`javascript
const car = {
  brand: "Toyota",
  model: "Prius",
  year: 2022
};
\`\`\`
Access properties using dot notation (\`car.brand\`) or bracket notation (\`car["brand"]\`).

> **Tip:** Objects can also contain functions as properties. These functions are called **methods** of the object.`,
      km: `### វត្ថុនៅក្នុង JavaScript (Objects)
វត្ថុ (Object) ក៏ជាអថេរមួយប្រភេទដែរ។ ប៉ុន្តែវាអាចផ្ទុកតម្លៃជាច្រើនក្នុងពេលតែមួយ ដែលសរសេរជាគូ **គន្លឹះ:តម្លៃ (key:value)**។

### រចនាសម្ព័ន្ធវត្ថុ
\`\`\`javascript
const car = {
  brand: "Toyota",
  model: "Prius",
  year: 2022
};
\`\`\`
ទាញយកតម្លៃដោយប្រើប្រាស់សញ្ញាចុច (\`car.brand\`) ឬសញ្ញាគ្នាប (\`car["brand"]\`)។

> **អនុសាសន៍:** វត្ថុក៏អាចផ្ទុកអនុគមន៍ជាតម្លៃរបស់វាផងដែរ។ អនុគមន៍ទាំងនោះត្រូវបានគេហៅថា **វិធីសាស្ត្រ (Methods)** របស់វត្ថុ។`
    },
    starterCode: `const student = {
  firstName: "រក្សា",
  lastName: "ស៊ន",
  age: 20,
  getFullName: function() {
    return this.lastName + " " + this.firstName;
  }
};

console.log("Student Name:", student.getFullName());
console.log("Student Age:", student.age);`
  },
  {
    id: "js-scope",
    title: { en: "JS Scope", km: "វិសាលភាព Scope" },
    content: {
      en: `### Understanding JavaScript Scope
Scope determines the accessibility (visibility) of variables.

### Three Types of Scope
1. **Block Scope**: Variables declared inside a block \`{}\` using \`let\` or \`const\` cannot be accessed outside.
2. **Function Scope**: Variables declared inside a function cannot be accessed outside.
3. **Global Scope**: Variables declared outside any function or block are accessible from anywhere.

> **Note:** Variables declared with \`var\` do NOT have block scope. They leak outside blocks, which is why \`let\` and \`const\` are preferred!`,
      km: `### ស្វែងយល់អំពីវិសាលភាពកូដ (Scope)
Scope កំណត់អំពីលទ្ធភាពដែលអថេរអាចត្រូវបានចូលទៅប្រើប្រាស់ ឬមើលឃើញនៅក្នុងកូដ។

### វិសាលភាពកូដ ៣ ប្រភេទចម្បង៖
១. **Block Scope**៖ អថេរដែលប្រកាសក្នុងវង់ក្រចកគ្នាប \`{}\` ដោយប្រើ \`let\` ឬ \`const\` មិនអាចចូលប្រើពីខាងក្រៅបានទេ។
២. **Function Scope**៖ អថេរដែលប្រកាសក្នុងអនុគមន៍ មិនអាចចូលប្រើពីខាងក្រៅអនុគមន៍នោះបានទេ។
៣. **Global Scope**៖ អថេរដែលប្រកាសនៅខាងក្រៅរាល់ប្លុកកូដ ឬអនុគមន៍ អាចត្រូវបានចូលប្រើពីគ្រប់ទីកន្លែង។

> **សម្គាល់:** អថេរដែលប្រកាសដោយប្រើ \`var\` គ្មាន Block Scope ឡើយ។ វាអាចលេចធ្លាយទៅខាងក្រៅប្រអប់គ្នាប ហេតុនេះហើយបានជាគេនិយមប្រើ \`let\` និង \`const\` ជាង!`
    },
    starterCode: `{
  let blockVar = "Secure inside block";
  var varOutside = "Leaked outside block";
}
console.log(varOutside); // Prints successfully!
try {
  console.log(blockVar); // Throws ReferenceError!
} catch(e) {
  console.log("Error caught:", e.message);
}`
  },
  {
    id: "js-dates",
    title: { en: "JS Dates", km: "កាលបរិច្ឆេទ Dates" },
    content: {
      en: `### JavaScript Date Objects
JavaScript Date objects represent a single moment in time. They are created with the \`new Date()\` constructor.

### Displaying Dates
- **Local Date**: \`new Date().toString()\`
- **UTC format**: \`new Date().toUTCString()\`
- **ISO Standard**: \`new Date().toISOString()\` (perfect for databases)

> **Tip:** Date indices are zero-based! January is \`0\`, February is \`1\`, etc., up to December which is \`11\`.`,
      km: `### វត្ថុកាលបរិច្ឆេទនៅក្នុង JavaScript (Dates)
វត្ថុកាលបរិច្ឆេទ (Date objects) តំណាងឱ្យពេលវេលាមួយជាក់លាក់។ ពួកវាត្រូវបានបង្កើតឡើងតាមរយៈ constructor \`new Date()\`។

### របៀបបង្ហាញពេលវេលា
- **ពេលវេលាក្នុងស្រុក**៖ \`new Date().toString()\`
- **ទម្រង់ UTC**៖ \`new Date().toUTCString()\`
- **ទម្រង់ ISO Standard**៖ \`new Date().toISOString()\` (ល្អបំផុតសម្រាប់មូលដ្ឋានទិន្នន័យ)

> **អនុសាសន៍:** លិបិក្រម (Index) នៃខែគឺចាប់ផ្តើមពីសូន្យ! ខែមករាគឺ \`0\` ខែកុម្ភៈគឺ \`1\` រហូតដល់ខែធ្នូគឺ \`11\`។`
    },
    starterCode: `const currentDate = new Date();
console.log("Full Date:", currentDate.toString());
console.log("Year:", currentDate.getFullYear());
console.log("Month index (0-11):", currentDate.getMonth());`
  },
  {
    id: "js-temporal",
    title: { en: "JS Temporal", km: "Temporal ទំនើប" },
    isNew: true,
    content: {
      en: `### Modern JS Temporal API
The **Temporal API** is a modern, high-precision standard that solves the legacy issues of the legacy \`Date\` object (such as zero-based months, timezone bugs, and mutation issues).

### Key Features of Temporal
- **Immutable**: Temporal objects do not change unexpectedly.
- **Explicit Types**: Separate objects for dates (\`PlainDate\`), times (\`PlainTime\`), and zoned time (\`ZonedDateTime\`).
- **Better Arithmetic**: Simplifies adding/subtracting days, hours, or matching timezones easily.

> **Note:** Temporal is in active stage-3 proposal. In older runtimes, a polyfill is used to run it.`,
      km: `### ប្រព័ន្ធគ្រប់គ្រងពេលវេលាទំនើប Temporal API
**Temporal API** គឺជាស្តង់ដារទំនើបដែលមានកម្រិតជាក់លាក់ខ្ពស់ ដែលត្រូវបានបង្កើតឡើងដើម្បីដោះស្រាយរាល់បញ្ហាចាស់ៗនៃវត្ថុ \`Date\` (ដូចជា ខែចាប់ផ្តើមពីសូន្យ ភាពលំអៀងតំបន់ម៉ោង និងការផ្លាស់ប្តូរតម្លៃដោយមិនដឹងខ្លួន)។

### លក្ខណៈពិសេសៗរបស់ Temporal
- **Immutable**៖ វត្ថុ Temporal មិនផ្លាស់ប្តូរតម្លៃដោយចៃដន្យឡើយ (សុវត្ថិភាពខ្ពស់)។
- **Explicit Types**៖ បំបែកវត្ថុដាច់ដោយឡែកសម្រាប់ថ្ងៃ (\`PlainDate\`) ម៉ោង (\`PlainTime\`) និងតំបន់ម៉ោង (\`ZonedDateTime\`)។
- **ប្រមាណវិធីងាយស្រួល**៖ ងាយស្រួលក្នុងការបូក ដក ថ្ងៃ ម៉ោង ឬកំណត់តំបន់ម៉ោង។

> **សម្គាល់:** Temporal ស្ថិតក្នុងសំណើដំណាក់កាលទី ៣ (Stage 3)។ នៅក្នុងឧបករណ៍ចាស់ៗ គេប្រើប្រាស់ Polyfill ដើម្បីដំណើរការវា។`
    },
    starterCode: `// Temporal API conceptual demo using a mockup class representing the draft spec
const today = {
  getPlainDate: () => "2026-07-15",
  getZone: () => "Asia/Phnom_Penh"
};

console.log("Temporal Plain Date:", today.getPlainDate());
console.log("Time Zone:", today.getZone());`
  }
];
