import { Lesson } from '../types';

export const csharpLessonsPart2: Lesson[] = [
  {
    id: "cs-strings",
    title: {
      en: "C# Strings",
      km: "ខ្សែអក្សរ Strings"
    },
    content: {
      en: `### Manipulating Text in C#
A \`string\` in C# is a reference type that stores a sequence of characters wrapped in double quotes.

### 1. Key String Operations:
- **Length:** Use the property \`text.Length\` to count characters.
- **Case Conversion:** \`text.ToUpper()\` and \`text.ToLower()\`.
- **Concatenation:** Join strings using \`+\` or \`string.Concat(s1, s2)\`.
- **String Interpolation:** The most clean and modern way using the \`$\` character:
  \`\`\`csharp
  string fullName = $"{firstName} {lastName}";
  \`\`\`

### 2. Accessing Characters:
You can access characters by their zero-indexed position inside square brackets:
\`\`\`csharp
string city = "Phnom Penh";
char firstChar = city[0]; // 'P'
\`\`\`

### 3. Substring & IndexOf:
- \`text.IndexOf("P")\`: Finds the starting index position of a substring or character.
- \`text.Substring(startIndex, length)\`: Extracts a specific portion of text from the main string.

> **Tip:** Strings are **immutable** in C#! Once created, their value inside memory cannot be modified. Any manipulation method actually generates and returns a brand-new string behind the scenes. Use \`StringBuilder\` if you are doing extensive text operations!`,
      km: `### ការគ្រប់គ្រង និងកែច្នៃអត្ថបទ (Strings)
នៅក្នុង C# \`string\` គឺជាប្រភេទ Reference Type ដែលរក្សាកម្រងតួអក្សរស្ថិតក្នុងសញ្ញាសម្រង់ (").

### ១. ប្រតិបត្តិការខ្សែអក្សរសំខាន់ៗ៖
- **ប្រវែង:** ប្រើលក្ខណៈ \`text.Length\` ដើម្បីរាប់ចំនួនតួអក្សរ។
- **ប្តូរទម្រង់តួអក្សរ:** \`text.ToUpper()\` (ទៅជាអក្សរធំ) និង \`text.ToLower()\` (ទៅជាអក្សរតូច)។
- **ការភ្ជាប់អក្សរ:** ភ្ជាប់គ្នាដោយប្រើសញ្ញា \`+\` ឬ \`string.Concat(s1, s2)\`។
- **ការបញ្ចូលតម្លៃអថេរ (String Interpolation):** វិធីទំនើប និងស្អាតបំផុតដោយប្រើនិមិត្តសញ្ញា \`$\`៖
  \`\`\`csharp
  string fullName = $"{firstName} {lastName}";
  \`\`\`

### ២. ការទាញយកតួអក្សរតាមទីតាំង៖
អ្នកអាចអានតួអក្សរតាមរយៈលេខលំដាប់លិបិក្រម (Index) ចាប់ពីសូន្យនៅក្នុងសញ្ញាគ្នាប \`[]\`៖
\`\`\`csharp
string city = "Phnom Penh";
char firstChar = city[0]; // 'P'
\`\`\`

### ៣. Substring និង IndexOf៖
- \`text.IndexOf("P")\`: ស្វែងរកទីតាំងចាប់ផ្តើមនៃតួអក្សរ ឬពាក្យ។
- \`text.Substring(startIndex, length)\`: កាត់យកផ្នែកណាមួយនៃអត្ថបទ។

> **គន្លឹះ:** Strings នៅក្នុង C# គឺ **Immutable** (មិនអាចកែប្រែបាន)! រាល់ការកែច្នៃអត្ថបទ គឺប្រព័ន្ធបង្កើត String ថ្មីមួយផ្សេងទៀតនៅលើ Heap មេម៉ូរី។ បើត្រូវការកែសម្រួលអត្ថបទច្រើនដងខ្លាំងក្នុង Loop គួរប្រើ \`StringBuilder\`!`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        string greeting = "Suasdey, Cambodia!";
        
        Console.WriteLine($"Original Text: {greeting}");
        Console.WriteLine($"Total Characters: {greeting.Length}");
        Console.WriteLine($"Uppercase: {greeting.ToUpper()}");
        
        // Character searching and extraction
        int commaIndex = greeting.IndexOf(",");
        Console.WriteLine($"Comma found at index: {commaIndex}");
        
        string firstWord = greeting.Substring(0, commaIndex);
        Console.WriteLine($"Extracted First Word: {firstWord}");
    }
}`
  },
  {
    id: "cs-booleans",
    title: {
      en: "C# Booleans",
      km: "តម្លៃប៊ូលីន Booleans"
    },
    content: {
      en: `### Working with True/False Conditions
A boolean data type (\`bool\`) can only hold two values: \`true\` or \`false\`.

### Boolean Evaluation:
You can evaluate any comparison expression to return a boolean value directly:
\`\`\`csharp
int x = 10;
int y = 9;
bool isGreater = x > y; // evaluates to true
\`\`\`

### Logical Conditional Operators:
- \`==\` (Equals)
- \`!=\` (Does Not Equal)

> **Tip:** Booleans are the structural foundation for decisions, routing logic, loops, and control flow in computer algorithms.`,
      km: `### ការប្រើប្រាស់លក្ខខណ្ឌពិត ឬមិនពិត
ប្រភេទទិន្នន័យប៊ូលីន (\`bool\`) អាចរក្សាទុកតម្លៃបានតែពីរគត់គឺ៖ \`true\` (ពិត) ឬ \`false\` (មិនពិត)។

### ការវាយតម្លៃលក្ខខណ្ឌប៊ូលីន៖
អ្នកអាចផ្ទៀងផ្ទាត់រាល់កន្សោមប្រៀបធៀបដើម្បីទទួលបានតម្លៃប៊ូលីនដោយផ្ទាល់៖
\`\`\`csharp
int x = 10;
int y = 9;
bool isGreater = x > y; // ទទួលបានតម្លៃ true
\`\`\`

### និមិត្តសញ្ញាផ្ទៀងផ្ទាត់៖
- \`==\` (ស្មើគ្នា)
- \`!=\` (មិនស្មើគ្នា)

> **គន្លឹះ:** តម្លៃ Booleans គឺជាគ្រឹះគ្រោងឆ្អឹងសម្រាប់ធ្វើការសម្រេចចិត្ត ការគ្រប់គ្រងលំហូរកូដ និងរង្វិលជុំនៅក្នុងក្បួនដោះស្រាយកុំព្យូទ័រ។`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        bool isCsharpFun = true;
        bool isFishFlying = false;
        
        Console.WriteLine($"Is C# fun? {isCsharpFun}");
        Console.WriteLine($"Can fish fly? {isFishFlying}");
        
        int myAge = 22;
        int votingAge = 18;
        bool canVote = myAge >= votingAge;
        Console.WriteLine($"Can I vote in Cambodia? {canVote}");
    }
}`
  },
  {
    id: "cs-ifelse",
    title: {
      en: "C# If...Else",
      km: "លក្ខខណ្ឌ If...Else"
    },
    content: {
      en: `### Decision Making in Code
Conditional statements execute different actions based on whether a specified condition evaluates to \`true\` or \`false\`.

### 1. The \`if\` Statement:
Runs a block of code if the condition is true.

### 2. The \`else\` Statement:
Runs a block of code if the condition is false.

### 3. The \`else if\` Statement:
Specifies a new condition to test if the first condition is false.

\`\`\`csharp
int hour = 14;
if (hour < 12) {
    Console.WriteLine("Good Morning");
} else if (hour < 18) {
    Console.WriteLine("Good Afternoon");
} else {
    Console.WriteLine("Good Evening");
}
\`\`\`

### 4. Short-Hand ternary operator:
A concise inline alternative to write clean single-line if-else blocks:
\`\`\`csharp
string status = (age >= 18) ? "Adult" : "Minor";
\`\`\`

> **Note:** Curly braces \`{}\` can be omitted only if the block contains a single statement. However, writing braces is highly recommended to keep code readable and prevent bugs during future modifications!`,
      km: `### ការគ្រប់គ្រងលំហូរសម្រេចចិត្តក្នុងកូដ
លក្ខខណ្ឌចាត់ចែងដំណើរការកូដផ្សេងៗគ្នា ផ្អែកលើការវាយតម្លៃលក្ខខណ្ឌថា \`true\` ឬ \`false\`។

### ១. លក្ខខណ្ឌ \`if\`៖
ដំណើរការប្លុកកូដ ប្រសិនបើលក្ខខណ្ឌដែលផ្ដល់ឱ្យពិត (true)។

### ២. លក្ខខណ្ឌ \`else\`៖
ដំណើរការប្លុកកូដ ប្រសិនបើលក្ខខណ្ឌដែលផ្ដល់ឱ្យមិនពិត (false)។

### ៣. លក្ខខណ្ឌ \`else if\`៖
កំណត់លក្ខខណ្ឌថ្មីមួយទៀតដើម្បីតេស្ត ប្រសិនបើលក្ខខណ្ឌមុនមិនត្រូវ។

\`\`\`csharp
int hour = 14;
if (hour < 12) {
    Console.WriteLine("Good Morning");
} else if (hour < 18) {
    Console.WriteLine("Good Afternoon");
} else {
    Console.WriteLine("Good Evening");
}
\`\`\`

### ៤. ប្រមាណសញ្ញា Ternary (Short-Hand if-else)៖
វិធីសរសេរលក្ខខណ្ឌកាត់ក្នុងមួយបន្ទាត់យ៉ាងស្អាត៖
\`\`\`csharp
string status = (age >= 18) ? "Adult" : "Minor";
\`\`\`

> **ចំណាំ:** សញ្ញាគ្នាប \`{}\` អាចលុបចេញបាន លុះត្រាតែកូដមានត្រឹមតែមួយបន្ទាត់។ ប៉ុន្តែ ការសរសេរគ្នាបជាប្រចាំត្រូវបានណែនាំឱ្យធ្វើ ដើម្បីកុំឱ្យមានកំហុសឆ្គងពេលបន្ថែមបន្ទាត់កូដថ្មីៗនៅពេលក្រោយ!`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        int userScore = 82;
        char grade;
        
        if (userScore >= 90) {
            grade = 'A';
        } else if (userScore >= 80) {
            grade = 'B';
        } else if (userScore >= 70) {
            grade = 'C';
        } else {
            grade = 'F';
        }
        
        Console.WriteLine($"Score: {userScore} | Assigned Grade: {grade}");
        
        // Ternary operator check
        string resultMsg = (grade != 'F') ? "Passed" : "Failed";
        Console.WriteLine($"Exam Outcome: {resultMsg}");
    }
}`
  },
  {
    id: "cs-switch",
    title: {
      en: "C# Switch",
      km: "លក្ខខណ្ឌជំនួស Switch"
    },
    content: {
      en: `### Simplifying Multi-Way Branching
Instead of writing dozens of nested \`else if\` statements, you can use the \`switch\` statement to select one of many code blocks to be executed.

### Syntax:
\`\`\`csharp
int day = 4;
switch (day) {
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    default:
        Console.WriteLine("Weekend");
        break;
}
\`\`\`

### Crucial Keywords:
- **\`break\`:** Stops execution inside the block. This exits the switch statement instantly.
- **\`default\`:** Specifies the code block to run if no case match is found. Equivalent to the final \`else\`.

> **Warning:** C# has a strict "no fall-through" rule! Unlike some other languages, you *must* specify a terminal statement like \`break\` (or \`return\`, \`throw\`) at the end of every active case, otherwise the compiler will reject the program with a compilation error.`,
      km: `### ការសម្រួលលក្ខខណ្ឌច្រើនជម្រើស (Switch)
ជំនួសឱ្យការសរសេរលក្ខខណ្ឌ \`else if\` បន្តកន្ទុយគ្នាស្មុគស្មាញ អ្នកអាចប្រើប្រាស់សេចក្តីថ្លែងការណ៍ \`switch\` ដើម្បីជ្រើសរើសដំណើរការប្លុកកូដណាមួយក្នុងចំណោមជម្រើសជាច្រើន។

### រូបមន្ត៖
\`\`\`csharp
int day = 4;
switch (day) {
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    default:
        Console.WriteLine("Weekend");
        break;
}
\`\`\`

### ពាក្យគន្លឹះសំខាន់ៗ៖
- **\`break\`:** បញ្ឈប់ការរត់កូដក្នុងប្លុកនេះ រួចចាកចេញពី switch ភ្លាមៗ។
- **\`default\`:** ប្លុកកូដដែលនឹងរត់ ប្រសិនបើគ្មានជម្រើស (Case) ណាមួយត្រូវឡើយ។ វាដូចជា \`else\` ចុងក្រោយ។

> **ការព្រមាន:** C# មានច្បាប់តឹងរឹងលើការរត់ធ្លាក់ជម្រើស (No fall-through rule)! មិនដូចភាសាខ្លះទេ អ្នក *ដាច់ខាត* ត្រូវតែបញ្ចប់ Case នីមួយៗដែលមានកូដដោយពាក្យ \`break\` (ឬ \`return\`) បើមិនដូច្នោះទេ Compiler នឹងមិនព្រមចងក្រងកូដឡើយ។`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        int monthIndex = 3;
        string monthName;
        
        switch (monthIndex) {
            case 1:
                monthName = "January";
                break;
            case 2:
                monthName = "February";
                break;
            case 3:
                monthName = "March";
                break;
            default:
                monthName = "Other Month";
                break;
        }
        
        Console.WriteLine($"Month index {monthIndex} corresponds to: {monthName}");
    }
}`
  },
  {
    id: "cs-while",
    title: {
      en: "C# While Loop",
      km: "រង្វិលជុំ While"
    },
    content: {
      en: `### Executing Code Repeatedly
Loops repeat a block of code as long as a specified condition remains \`true\`.

### 1. The \`while\` Loop:
Evaluates the condition *before* executing the loop body. If the condition is false initially, the body never runs.
\`\`\`csharp
int i = 0;
while (i < 5) {
    Console.WriteLine(i);
    i++;
}
\`\`\`

### 2. The \`do...while\` Loop:
This loop will execute the code block once *before* checking the condition, and then repeat as long as the condition is true. It guarantees the body runs **at least once**!
\`\`\`csharp
int i = 0;
do {
    Console.WriteLine(i);
    i++;
} while (i < 5);
\`\`\`

> **Warning:** Always make sure the condition is modified inside the loop (e.g. incrementing a counter \`i++\`). Forgetting this creates an **infinite loop**, locking up your CPU resources!`,
      km: `### ការរត់កូដដដែលៗ (Loops)
រង្វិលជុំ (Loops) ជួយដំណើរការកូដដដែលៗជាច្រើនដង ដរាបណាលក្ខខណ្ឌដែលបានកំណត់នៅតែរក្សាតម្លៃ \`true\` (ពិត)។

### ១. រង្វិលជុំ \`while\`៖
វាផ្ទៀងផ្ទាត់លក្ខខណ្ឌ *មុន* ពេលរត់កូដក្នុងប្លុក។ ប្រសិនបើលក្ខខណ្ឌខុសតាំងពីដំបូង កូដក្នុងប្លុកនឹងមិនត្រូវបានរត់សូម្បីតែម្តងឡើយ។
\`\`\`csharp
int i = 0;
while (i < 5) {
    Console.WriteLine(i);
    i++;
}
\`\`\`

### ២. រង្វិលជុំ \`do...while\`៖
រង្វិលជុំនេះនឹងដំណើរការកូដក្នុងប្លុកម្តងជាមុនសិន *មុនពេល* ពិនិត្យលក្ខខណ្ឌ។ វាធានាថាកូដនឹងរត់ **យ៉ាងហោចណាស់ម្តង**!
\`\`\`csharp
int i = 0;
do {
    Console.WriteLine(i);
    i++;
} while (i < 5);
\`\`\`

> **ការព្រមាន:** ត្រូវធានាថាមានការប្រែប្រួលតម្លៃលក្ខខណ្ឌក្នុងរង្វិលជុំ (ដូចជាការបូកបន្ថែម \`i++\`)។ បើមិនដូច្នោះទេ វានឹងបង្កើតឱ្យមានរង្វិលជុំគ្មានទីបញ្ចប់ (Infinite Loop) ដែលធ្វើឱ្យកម្មវិធីគាំង!`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        Console.WriteLine("--- Testing while loop ---");
        int counter = 1;
        while (counter <= 5) {
            Console.WriteLine($"While Counter: {counter}");
            counter++;
        }
        
        Console.WriteLine("\\n--- Testing do-while loop (Runs at least once) ---");
        int testVal = 100;
        do {
            Console.WriteLine($"Do-While executed with testVal = {testVal}");
            testVal++;
        } while (testVal < 5); // Condition is false initially!
    }
}`
  },
  {
    id: "cs-for",
    title: {
      en: "C# For Loop",
      km: "រង្វិលជុំ For Loop"
    },
    content: {
      en: `### Looping with a Fixed Counter
When you know exactly how many times you want to loop through a block of code, use the \`for\` loop instead of a \`while\` loop.

### Syntax:
\`\`\`csharp
for (initialization; condition; increment/decrement) {
    // code block to run
}
\`\`\`

### Three Core Steps inside Header:
1. **Initialization:** Runs once before the loop starts (e.g. \`int i = 0;\`).
2. **Condition:** Tested before every iteration (e.g. \`i < 10;\`).
3. **Increment/Decrement:** Executed after the loop block runs (e.g. \`i++;\`).

> **Tip:** You can nest loops (placing a loop inside another loop). This is extremely useful when working with matrices or coordinate grids!`,
      km: `### រង្វិលជុំដែលមានការកំណត់ចំនួនជាក់លាក់ (For Loop)
នៅពេលអ្នកដឹងច្បាស់ពីចំនួនដងដែលត្រូវរត់កូដឡើងវិញ ការប្រើប្រាស់ \`for\` loop គឺជាជម្រើសដ៏ល្អបំផុត។

### រូបមន្ត៖
\`\`\`csharp
for (initialization; condition; increment/decrement) {
    // កូដដែលត្រូវដំណើរការ
}
\`\`\`

### ជំហានសំខាន់ៗទាំងបីក្នុង For Header៖
១. **Initialization:** កំណត់តម្លៃចាប់ផ្តើម និងរត់តែម្តងគត់មុន loop ចាប់ផ្តើម (ឧ. \`int i = 0;\`)។
២. **Condition:** ពិនិត្យលក្ខខណ្ឌមុនពេលរត់រង្វិលជុំម្តងៗ (ឧ. \`i < 10;\`)។
៣. **Increment/Decrement:** កែប្រែតម្លៃបញ្ជារបន្ទាប់ពីកូដក្នុងប្លុករត់ចប់ (ឧ. \`i++;\`)។

> **គន្លឹះ:** អ្នកអាចប្រើរង្វិលជុំត្រួតគ្នា (Nested loops)។ វាមានសារៈសំខាន់ខ្លាំងណាស់នៅពេលធ្វើការជាមួយទិន្នន័យម៉ាទ្រីស (Matrix) ឬកូអរដោនេ!`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Printing numbers 1 to 5 using For Loop:");
        for (int i = 1; i <= 5; i++) {
            Console.WriteLine($"Number: {i}");
        }
        
        Console.WriteLine("\\nSimple Multiplication Table for 2:");
        for (int j = 1; j <= 5; j++) {
            Console.WriteLine($"2 x {j} = {2 * j}");
        }
    }
}`
  },
  {
    id: "cs-breakcontinue",
    title: {
      en: "C# Break/Continue",
      km: "ពាក្យបញ្ជាចាកចេញ និងរំលង"
    },
    content: {
      en: `### Interrupting Loop Iterations
C# provides keywords to prematurely alter the behavior of active loops:

### 1. The \`break\` Statement:
Used to jump out of the loop immediately, ignoring any remaining code and stopping subsequent iterations.
\`\`\`csharp
for (int i = 0; i < 10; i++) {
    if (i == 5) break; // Exits loop completely when i is 5
    Console.WriteLine(i);
}
\`\`\`

### 2. The \`continue\` Statement:
Skips the current iteration of the loop, skipping subsequent lines of code in the block for this step and jumping straight to the next iteration.
\`\`\`csharp
for (int i = 0; i < 10; i++) {
    if (i == 5) continue; // Skips printing 5, goes to 6
    Console.WriteLine(i);
}
\`\`\`

> **Note:** You can use \`break\` and \`continue\` inside any loops including \`while\` and \`do-while\` structures.`,
      km: `### ការកែប្រែលំហូររង្វិលជុំ (Break និង Continue)
C# ផ្តល់នូវពាក្យគន្លឹះពិសេសដើម្បីផ្លាស់ប្តូរលំហូររបស់រង្វិលជុំមុនពេលវាចប់ជាស្ថាពរ៖

### ១. សេចក្តីថ្លែងការណ៍ \`break\`៖
ប្រើសម្រាប់ចាកចេញពីរង្វិលជុំភ្លាមៗ ដោយមិនបន្តរត់កូដបន្ទាប់ ឬរង្វិលជុំជំហានក្រោយៗទៀតឡើយ។
\`\`\`csharp
for (int i = 0; i < 10; i++) {
    if (i == 5) break; // ចាកចេញពី Loop ទាំងស្រុងនៅពេល i ស្មើ ៥
    Console.WriteLine(i);
}
\`\`\`

### ២. សេចក្តីថ្លែងការណ៍ \`continue\`៖
រំលងជំហានបច្ចុប្បន្ន ដោយមិនដំណើរការកូដផ្នែកខាងក្រោមនៅក្នុងជំហាននេះទេ និងផ្លោះទៅកាន់ជំហានបន្ទាប់ភ្លាមៗ។
\`\`\`csharp
for (int i = 0; i < 10; i++) {
    if (i == 5) continue; // រំលងលេខ ៥ មិនបង្ហាញទេ រួចបន្តទៅលេខ ៦ ភ្លាម
    Console.WriteLine(i);
}
\`\`\`

> **ចំណាំ:** អ្នកអាចប្រើ \`break\` និង \`continue\` នៅក្នុងរង្វិលជុំគ្រប់ប្រភេទ រួមទាំង \`while\` និង \`do-while\` ផងដែរ។`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Demoing break at counter = 4:");
        for (int i = 1; i <= 10; i++) {
            if (i == 4) {
                Console.WriteLine("Break triggered! Exiting loop.");
                break;
            }
            Console.WriteLine($"i = {i}");
        }
        
        Console.WriteLine("\\nDemoing continue skipping counter = 3:");
        for (int j = 1; j <= 5; j++) {
            if (j == 3) {
                Console.WriteLine("Continue triggered! Skipping 3.");
                continue;
            }
            Console.WriteLine($"j = {j}");
        }
    }
}`
  },
  {
    id: "cs-arrays",
    title: {
      en: "C# Arrays",
      km: "អារេ Arrays"
    },
    content: {
      en: `### Storing Collections of Variables
An array is a data structure that stores multiple values of the **exact same type** in a single variable. Arrays in C# are zero-indexed and have a fixed size upon initialization.

### 1. Declaring and Initializing Arrays:
\`\`\`csharp
// Define array with predefined values
string[] cars = {"Volvo", "BMW", "Ford"};

// Define empty array with a specific capacity
int[] scores = new int[5]; // Stores 5 integers, initialized to 0
\`\`\`

### 2. Modifying elements:
\`\`\`csharp
cars[0] = "Toyota"; // Replaces "Volvo"
\`\`\`

### 3. The \`foreach\` Loop (Idiomatic traversal):
Specifically designed to iterate through elements of arrays and collections in a clean, read-only manner:
\`\`\`csharp
foreach (string car in cars) {
    Console.WriteLine(car);
}
\`\`\`

### 4. Linq operations:
By importing \`using System.Linq;\`, you unlock aggregate methods like \`scores.Max()\`, \`scores.Min()\`, and \`scores.Sum()\`.

> **Note:** Array indices start at \`0\`. Trying to access \`cars[3]\` on an array of length 3 will crash the program with an \`IndexOutOfRangeException\`!`,
      km: `### ការរក្សាទុកសំណុំទិន្នន័យ (Arrays)
អារេ (Array) គឺជាទម្រង់ទិន្នន័យសម្រាប់រក្សាទុកតម្លៃច្រើនដែលមាន **ប្រភេទទិន្នន័យដូចគ្នាបេះបិទ** នៅក្នុងអថេរតែមួយ។ អារេក្នុង C# មានទំហំថេរ និងចាប់ផ្តើមសន្ទស្សន៍ (Index) ពីសូន្យ។

### ១. ការបង្កើត និងផ្តល់តម្លៃចាប់ផ្តើមអារេ៖
\`\`\`csharp
// បង្កើតអារេមានតម្លៃស្រាប់
string[] cars = {"Volvo", "BMW", "Ford"};

// បង្កើតអារេទទេមានទំហំកំណត់ជាក់លាក់
int[] scores = new int[5]; // រក្សាទុកចំនួនគត់បាន ៥លេខ ស្មើនឹងសូន្យជាលំនាំដើម
\`\`\`

### ២. ការកែប្រែតម្លៃសមាជិក៖
\`\`\`csharp
cars[0] = "Toyota"; // ប្តូរជំនួស "Volvo"
\`\`\`

### ៣. រង្វិលជុំ \`foreach\` (Traversing):
បង្កើតឡើងជាពិសេសដើម្បីទាញយកសមាជិករបស់អារេម្តងមួយៗមកបង្ហាញយ៉ាងស្អាត៖
\`\`\`csharp
foreach (string car in cars) {
    Console.WriteLine(car);
}
\`\`\`

### ៤. មុខងារ Linq៖
នាំចូល \`using System.Linq;\` ដើម្បីប្រើប្រាស់មុខងារពិសេសៗដូចជា \`scores.Max()\` (រកលេខធំបំផុត), \`scores.Min()\` (តូចបំផុត) និង \`scores.Sum()\` (ផលបូក)។

> **ចំណាំ:** សន្ទស្សន៍អារេចាប់ផ្តើមពី \`0\`។ ការព្យាយាមហៅ \`cars[3]\` លើអារេដែលមានសមាជិកតែ ៣ នឹងធ្វើឱ្យកម្មវិធីគាំងដោយសារ \`IndexOutOfRangeException\`!`
    },
    starterCode: `using System;
using System.Linq; // Required for Max, Min, Sum

class Program {
    static void Main() {
        // Initializing array of Cambodian cities
        string[] provinces = { "Siem Reap", "Phnom Penh", "Battambang", "Kampot" };
        
        Console.WriteLine($"First province: {provinces[0]}");
        Console.WriteLine($"Total Provinces: {provinces.Length}");
        
        Console.WriteLine("\\nIterating provinces via foreach:");
        foreach (string province in provinces) {
            Console.WriteLine($"- {province}");
        }
        
        // Linq demonstration on integers
        int[] scores = { 95, 87, 100, 78, 92 };
        Console.WriteLine($"\\nHighest score: {scores.Max()}");
        Console.WriteLine($"Lowest score: {scores.Min()}");
        Console.WriteLine($"Sum of scores: {scores.Sum()}");
    }
}`
  }
];
