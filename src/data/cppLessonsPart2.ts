import { Lesson } from '../types';

export const cppLessonsPart2: Lesson[] = [
  {
    id: "cpp-booleans",
    title: {
      en: "C++ Booleans",
      km: "ប៊ូលីន C++"
    },
    content: {
      en: `### Boolean Values & Logic
Booleans represent one of two logic states: \`true\` (evaluated as \`1\`) or \`false\` (evaluated as \`0\`).

### Declaring Booleans:
Use the \`bool\` keyword to declare variables:
\`\`\`cpp
bool isRaining = false;
bool isSunny = true;
\`\`\`

### Boolean Expressions:
When printed, \`true\` outputs as \`1\` and \`false\` outputs as \`0\`. You can use comparison operators to evaluate complex logical expressions:
\`\`\`cpp
int x = 10;
int y = 9;
cout << (x > y); // outputs 1 (true)
\`\`\`

> **Tip:** You can use \`std::boolalpha\` to force \`cout\` to output literal words \`true\` and \`false\` instead of numbers \`1\` and \`0\`.`,
      km: `### តម្លៃប៊ូលីន និងតក្កវិទ្យា
ប៊ូលីន (Booleans) តំណាងឱ្យស្ថានភាពតក្កវិទ្យាមួយក្នុងចំណោមពីរ៖ \`true\` (ស្មើនឹងតម្លៃ \`1\`) ឬ \`false\` (ស្មើនឹងតម្លៃ \`0\`)។

### ការប្រកាសអថេរ Booleans៖
ប្រើប្រាស់ពាក្យគន្លឹះ \`bool\` ដើម្បីបង្កើតអថេរ៖
\`\`\`cpp
bool isRaining = false;
bool isSunny = true;
\`\`\`

### កន្សោមប៊ូលីន (Boolean Expressions)៖
នៅពេលបង្ហាញលទ្ធផល តម្លៃ \`true\` នឹងចេញជាលេខ \`1\` ហើយ \`false\` ចេញជាលេខ \`0\`។ អ្នកអាចប្រើប្រាស់ប្រមាណសញ្ញាប្រៀបធៀបដើម្បីវាយតម្លៃកន្សោមតក្កវិទ្យាស្មុគស្មាញ៖
\`\`\`cpp
int x = 10;
int y = 9;
cout << (x > y); // បង្ហាញជា ១ (ពិត)
\`\`\`

> **គន្លឹះ:** អ្នកអាចប្រើប្រាស់ \`std::boolalpha\` ដើម្បីបង្ខំឱ្យ \`cout\` បង្ហាញជាពាក្យអក្សរ \`true\` និង \`false\` ផ្ទាល់ ជំនួសឱ្យលេខ \`1\` និង \`0\`។`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    bool isCppFun = true;
    bool isFishTasty = false;
    
    // Default outputs (1 and 0)
    cout << "isCppFun: " << isCppFun << "\\n";
    cout << "isFishTasty: " << isFishTasty << "\\n";
    
    // Using boolalpha for literal word output
    cout << boolalpha;
    cout << "--- With boolalpha active ---\\n";
    cout << "isCppFun: " << isCppFun << "\\n";
    cout << "isFishTasty: " << isFishTasty << "\\n";
    
    int age = 17;
    cout << "Is age >= 18? " << (age >= 18) << "\\n";
    return 0;
}`
  },
  {
    id: "cpp-if-else",
    title: {
      en: "C++ If...Else",
      km: "លក្ខខណ្ឌ If...Else"
    },
    content: {
      en: `### Conditional Statements
Use conditional statements to execute different blocks of code based on varying decisions:

1. **\`if\`:** Executes a block of code if the specified condition is true.
2. **\`else if\`:** Specifies a new condition to test if the first condition is false.
3. **\`else\`:** Specifies a block of code to run if all previous conditions evaluate to false.

### Ternary Operator (Short Hand If...Else):
An elegant way to write short conditions:
\`\`\`cpp
variable = (condition) ? expressionTrue : expressionFalse;
\`\`\`

> **Tip:** Always use curly braces \`{}\` even for single-line conditional statements to keep your code highly readable and prevent scoping bugs.`,
      km: `### របាយការណ៍លក្ខខណ្ឌ (Conditional Statements)
ប្រើប្រាស់របាយការណ៍លក្ខខណ្ឌដើម្បីដំណើរការប្លុកកូដផ្សេងៗគ្នា ផ្អែកលើការសម្រេចចិត្តខុសៗគ្នា៖

១. **\`if\`:** ដំណើរការកូដ ប្រសិនបើលក្ខខណ្ឌដែលបានបញ្ជាក់គឺពិត (true)។
២. **\`else if\`:** បន្ថែមលក្ខខណ្ឌថ្មីដើម្បីពិនិត្យ ប្រសិនបើលក្ខខណ្ឌមុនៗមិនពិត (false)។
៣. **\`else\`:** ដំណើរការកូដ ប្រសិនបើគ្មានលក្ខខណ្ឌណាមួយខាងលើពិតឡើយ។

### ប្រមាណសញ្ញា Ternary (លក្ខខណ្ឌសង្ខេប)៖
ជាវិធីសរសេរលក្ខខណ្ឌ \`if...else\` ខ្លីក្នុងបន្ទាត់តែមួយដ៏ស្រស់ស្អាត៖
\`\`\`cpp
អថេរ = (លក្ខខណ្ឌ) ? តម្លៃបើពិត : តម្លៃបើមិនពិត;
\`\`\`

> **គន្លឹះ:** គួរប្រើសញ្ញាគ្នាប \`{}\` ជានិច្ច ទោះបីជាលក្ខខណ្ឌនោះមានកូដតែមួយបន្ទាត់ក៏ដោយ ដើម្បីរក្សាភាពងាយស្រួលអាន និងជៀសវាងកំហុសរត់កូដ។`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    int score = 85;
    
    if (score >= 90) {
        cout << "Grade: A\\n";
    } else if (score >= 80) {
        cout << "Grade: B\\n";
    } else if (score >= 70) {
        cout << "Grade: C\\n";
    } else {
        cout << "Grade: F\\n";
    }
    
    // Ternary shorthand
    int age = 20;
    string status = (age >= 18) ? "Adult" : "Minor";
    cout << "Status: " << status << "\\n";
    return 0;
}`
  },
  {
    id: "cpp-switch",
    title: {
      en: "C++ Switch",
      km: "លក្ខខណ្ឌប្តូរ Switch"
    },
    content: {
      en: `### Multi-way Selection with Switch
Use the \`switch\` statement to select one of many code blocks to be executed.

### How it works:
- The \`switch\` expression is evaluated once.
- The value of the expression is compared with the values of each \`case\`.
- If there is a match, the associated block of code is executed.
- The \`break\` keyword breaks out of the switch block, halting further comparison and execution.
- The \`default\` keyword specifies some code to run if there is no case match.

> **Warning:** If you forget to write a \`break\` statement, execution will "fall through" to the next case, executing its block even if the case does not match!`,
      km: `### ការជ្រើសរើសច្រើនជម្រើសជាមួយ Switch
ប្រើប្រាស់របាយការណ៍ \`switch\` ដើម្បីជ្រើសរើសដំណើរការប្លុកកូដណាមួយ ក្នុងចំណោមករណីជាច្រើន។

### របៀបដែលវាដំណើរការ៖
- កន្សោម \`switch\` ត្រូវបានគណនាតែម្តងគត់។
- តម្លៃនៃកន្សោមត្រូវបានយកទៅប្រៀបធៀបជាមួយករណី \`case\` នីមួយៗ។
- បើមានការត្រូវគ្នា កូដពាក់ព័ន្ធក្នុងករណីនោះនឹងដំណើរការ។
- ពាក្យគន្លឹះ \`break\` ប្រើសម្រាប់ចាកចេញពីប្លុក switch បញ្ឈប់ការប្រៀបធៀបបន្ទាប់។
- ពាក្យគន្លឹះ \`default\` កំណត់ប្លុកកូដត្រូវរត់ ប្រសិនបើគ្មានករណីណាមួយត្រូវគ្នាឡើយ។

> **ការព្រមាន:** ប្រសិនបើអ្នកភ្លេចសរសេរ \`break\` នោះការដំណើរការនឹង "ធ្លាក់ចុះ" ទៅរត់កូដក្នុងករណី (\`case\`) បន្ទាប់ទៀត ទោះបីជាករណីបន្ទាប់នោះមិនត្រូវគ្នាក៏ដោយ!`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    int day = 4; // Day 4
    
    switch (day) {
        case 1:
            cout << "Monday\\n";
            break;
        case 2:
            cout << "Tuesday\\n";
            break;
        case 3:
            cout << "Wednesday\\n";
            break;
        case 4:
            cout << "Thursday\\n";
            break;
        case 5:
            cout << "Friday\\n";
            break;
        default:
            cout << "Weekend\\n";
            break;
    }
    return 0;
}`
  },
  {
    id: "cpp-while-loop",
    title: {
      en: "C++ While Loop",
      km: "រង្វិលជុំ While"
    },
    content: {
      en: `### Loops: while and do-while
Loops execute a block of code as long as a specified condition is met.

### 1. \`while\` Loop (Pre-test loop):
Checks the condition *before* executing the loop body. If the condition is false initially, the body is never executed.
\`\`\`cpp
while (condition) {
    // code block
}
\`\`\`

### 2. \`do-while\` Loop (Post-test loop):
Executes the loop body *first*, and then checks the condition. This guarantees that the loop body will run **at least once**!
\`\`\`cpp
do {
    // code block
} while (condition);
\`\`\`

> **Note:** Make sure to increment or update variables used in the loop condition, otherwise you will trigger an **infinite loop**, locking up program execution!`,
      km: `### រង្វិលជុំ៖ while និង do-while
រង្វិលជុំ (Loops) ដំណើរការប្លុកកូដម្តងហើយម្តងទៀត ដរាបណាលក្ខខណ្ឌជាក់លាក់មួយនៅតែត្រឹមត្រូវ។

### ១. រង្វិលជុំ \`while\` (ពិនិត្យមុនរត់)៖
ពិនិត្យលក្ខខណ្ឌ *មុន* ពេលរត់កូដក្នុងរង្វិលជុំ។ បើលក្ខខណ្ឌខុសតាំងពីដំបូង កូដនឹងមិនដំណើរការទាល់តែសោះ។
\`\`\`cpp
while (លក្ខខណ្ឌ) {
    // ប្លុកកូដ
}
\`\`\`

### ២. រង្វិលជុំ \`do-while\` (រត់មុនពិនិត្យ)៖
ដំណើរការកូដក្នុងរង្វិលជុំ *មុន* រួចទើបពិនិត្យលក្ខខណ្ឌជាក្រោយ។ នេះធានាថាកូដក្នុងរង្វិលជុំនឹងរត់បាន **យ៉ាងហោចណាស់ម្តង** ជានិច្ច!
\`\`\`cpp
do {
    // ប្លុកកូដ
} while (លក្ខខណ្ឌ);
\`\`\`

> **ចំណាំ:** ត្រូវប្រាកដថាបានបង្កើនតម្លៃ ឬផ្លាស់ប្តូរអថេរលក្ខខណ្ឌនៅក្នុងរង្វិលជុំ បើមិនដូច្នោះទេ វានឹងបង្កើត **រង្វិលជុំគ្មានទីបញ្ចប់ (Infinite loop)** ដែលនាំឱ្យកម្មវិធីគាំងមិនខាន!`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    int i = 1;
    cout << "=== while loop output ===\\n";
    while (i <= 5) {
        cout << "Count is: " << i << "\\n";
        i++; // Increment variable to prevent infinite loop
    }
    
    int j = 10;
    cout << "=== do-while loop output ===\\n";
    do {
        cout << "This runs once even if condition (j < 5) is false! j = " << j << "\\n";
        j++;
    } while (j < 5);
    
    return 0;
}`
  },
  {
    id: "cpp-for-loop",
    title: {
      en: "C++ For Loop",
      km: "រង្វិលជុំ For"
    },
    content: {
      en: `### Definite Loops using For
When you know exactly how many times you want to loop through a block of code, use the \`for\` loop.

### 1. Standard \`for\` Loop:
\`\`\`cpp
for (initialization; condition; increment/decrement) {
    // code block
}
\`\`\`

### 2. Range-based \`for\` Loop (Introduced in C++11):
Used exclusively to loop through elements in an array or collection:
\`\`\`cpp
for (type variableName : arrayName) {
    // code block
}
\`\`\`

> **Tip:** Declare loop variables (like \`int i\`) directly inside the initialization statement. This confines their scope to the loop block, optimizing memory space.`,
      km: `### រង្វិលជុំកំណត់ច្បាស់លាស់ជាមួយ For
នៅពេលអ្នកដឹងច្បាស់ពីចំនួនដងដែលត្រូវដំណើរការប្លុកកូដឡើងវិញ ចូរប្រើប្រាស់រង្វិលជុំ \`for\`។

### ១. រង្វិលជុំ \`for\` ស្តង់ដារ៖
\`\`\`cpp
for (ការប្រកាសតម្លៃដើម; លក្ខខណ្ឌ; ការបង្កើន/បន្ថយតម្លៃ) {
    // ប្លុកកូដ
}
\`\`\`

### ២. រង្វិលជុំ \`for\` តាមដែនកំណត់ (លេចឡើងក្នុង C++11)៖
ប្រើជាពិសេសសម្រាប់រត់កាត់តាមធាតុទាំងអស់នៅក្នុង Array ឬសំណុំទិន្នន័យ៖
\`\`\`cpp
for (ប្រភេទអថេរ ឈ្មោះអថេរ : ឈ្មោះArray) {
    // ប្លុកកូដ
}
\`\`\`

> **គន្លឹះ:** គួរប្រកាសអថេររង្វិលជុំ (ដូចជា \`int i\`) នៅក្នុងផ្នែកប្រកាសតម្លៃដើមតែម្តង។ វានឹងកំណត់ដែនដែនដំណើរការ (Scope) របស់អថេរនោះត្រឹមតែក្នុងរង្វិលជុំប៉ុណ្ណោះ ដែលជួយសន្សំសំចៃមេម៉ូរី។`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    cout << "Standard for loop:\\n";
    for (int i = 0; i < 5; i++) {
        cout << "Index: " << i << "\\n";
    }
    
    cout << "\\nRange-based for loop (C++11):\\n";
    int scores[] = {80, 95, 78, 92, 88};
    
    // Looping through array elements easily
    for (int score : scores) {
        cout << "Score element: " << score << "\\n";
    }
    return 0;
}`
  },
  {
    id: "cpp-break-continue",
    title: {
      en: "C++ Break/Continue",
      km: "ការបញ្ជា Break/Continue"
    },
    content: {
      en: `### Loop Control Statements
C++ provides control flow statements to alter the execution sequence inside loops:

- **\`break\`:** Instantly terminates the loop and jumps to the statement immediately following the loop block.
- **\`continue\`:** Skips the remaining statements in the current iteration and jumps directly to the loop's next iteration check.

\`\`\`cpp
for (int i = 0; i < 10; i++) {
    if (i == 4) continue; // skips printing 4
    if (i == 8) break;    // halts entire loop at 8
    cout << i << " ";
}
\`\`\`

> **Tip:** Avoid excessive use of \`break\` and \`continue\` because they make flow control harder to trace. Use them intentionally to optimize searches.`,
      km: `### របាយការណ៍គ្រប់គ្រងរង្វិលជុំ
C++ ផ្តល់នូវរបាយការណ៍បញ្ជាដើម្បីកែប្រែដំណើរការធម្មតានៅក្នុងរង្វិលជុំ៖

- **\`break\`:** បញ្ឈប់រង្វិលជុំភ្លាមៗ និងរំលងទៅរត់កូដបន្ទាប់ពីប្លុករង្វិលជុំនោះ។
- **\`continue\`:** រំលងរាល់កូដដែលនៅសល់ក្នុងជុំបច្ចុប្បន្ន រួចលោតទៅពិនិត្យលក្ខខណ្ឌដើម្បីចាប់ផ្តើមជុំថ្មីបន្ទាប់ភ្លាមៗ។

\`\`\`cpp
for (int i = 0; i < 10; i++) {
    if (i == 4) continue; // មិនបង្ហាញលេខ ៤ ទេ (រំលង)
    if (i == 8) break;    // បញ្ឈប់រង្វិលជុំទាំងមូលត្រឹមលេខ ៨
    cout << i << " ";
}
\`\`\`

> **គន្លឹះ:** ជៀសវាងការប្រើប្រាស់ \`break\` និង \`continue\` ច្រើនហួសហេតុ ព្រោះវាធ្វើឱ្យពិបាកតាមដានលំហូរការងាររបស់កូដ។ គួរប្រើពួកវាក្នុងគោលបំណងច្បាស់លាស់ ដូចជាការស្វែងរកទិន្នន័យដើម្បីបង្កើនល្បឿនជាដើម។`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    cout << "Printing 1 to 10 but skipping 5 and stopping before 8:\\n";
    for (int i = 1; i <= 10; i++) {
        if (i == 5) {
            cout << "[Skipped 5] ";
            continue; // Skip rest of loop for i=5
        }
        if (i == 8) {
            cout << "\\n[Broken at 8]\\n";
            break; // Exit loop completely
        }
        cout << i << " ";
    }
    return 0;
}`
  },
  {
    id: "cpp-arrays",
    title: {
      en: "C++ Arrays",
      km: "អារេ C++"
    },
    content: {
      en: `### Storing Collections in Arrays
An array is a fixed-size contiguous memory block used to store multiple elements of the **same data type**.

### Declaring Arrays:
\`\`\`cpp
string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
int numbers[5]; // Declares array of size 5 (uninitialized)
\`\`\`

### Key Properties:
- **0-Indexed:** The first element is at \`cars[0]\`, second is \`cars[1]\`, etc.
- **Fixed Size:** Once declared, the size of a raw C++ array **cannot** be changed!
- **Multidimensional Arrays:** You can create arrays of arrays, useful for grid coordinates:
  \`\`\`cpp
  int matrix[2][3] = { {1, 2, 3}, {4, 5, 6} }; // Row 2, Col 3
  \`\`\`

> **Warning:** C++ does not perform boundary checks on raw arrays. Accessing index out of bounds (e.g., \`cars[10]\` on array of size 4) will access raw memory, causing undefined behavior or segmentation crashes!`,
      km: `### ការរក្សាទុកសំណុំទិន្នន័យក្នុងអារេ (Arrays)
អារេគឺជាប្លុកមេម៉ូរីបន្តបន្ទាប់គ្នាដែលមានទំហំថេរ ប្រើសម្រាប់រក្សាទុកធាតុជាច្រើនដែលមាន **ប្រភេទទិន្នន័យដូចគ្នា**។

### ការបង្កើតអារេ៖
\`\`\`cpp
string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
int numbers[5]; // បង្កើតអារេទំហំ ៥ (មិនទាន់ផ្តល់តម្លៃ)
\`\`\`

### លក្ខណៈពិសេសសំខាន់ៗ៖
- **ចាប់ផ្តើមពីសន្ទស្សន៍ 0:** ធាតុទីមួយគឺ \`cars[0]\` ធាតុទីពីរគឺ \`cars[1]\` ។ល។
- **ទំហំថេរ:** នៅពេលប្រកាសរួច ទំហំរបស់អារេមូលដ្ឋានក្នុង C++ **មិនអាច** ផ្លាស់ប្តូរបានទេ!
- **អារេច្រើនវិមាត្រ (Multidimensional):** អ្នកអាចបង្កើតអារេត្រួតគ្នាបាន ដែលល្អសម្រាប់តំណាងក្រឡាកូអរដោនេ៖
  \`\`\`cpp
  int matrix[2][3] = { {1, 2, 3}, {4, 5, 6} }; // ២ជួរដេក ៣ជួរឈរ
  \`\`\`

> **ការព្រមាន:** C++ មិនត្រួតពិនិត្យព្រំដែនសន្ទស្សន៍របស់អារេឡើយ។ ការហៅចូលទៅកាន់សន្ទស្សន៍លើសកំណត់ (ឧ. \`cars[10]\` លើអារេទំហំ ៤) នឹងទាញយកទិន្នន័យមេម៉ូរីដែលមិនមែនជារបស់វា បង្កឱ្យមានកំហុសមិនច្បាស់លាស់ ឬកម្មវិធីគាំង (Segmentation fault)!`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string fruits[4] = {"Mango", "Banana", "Durian", "Jackfruit"};
    
    cout << "Original first element: " << fruits[0] << "\\n";
    fruits[0] = "Coconut"; // Modify array element
    cout << "Modified first element: " << fruits[0] << "\\n";
    
    cout << "\\nLooping through fruits array:\\n";
    for (int i = 0; i < 4; i++) {
        cout << "Index " << i << ": " << fruits[i] << "\\n";
    }
    
    // Matrix test
    int grid[2][3] = { {1, 2, 3}, {4, 5, 6} };
    cout << "\\nMatrix element at Row 1, Col 2: " << grid[1][2] << "\\n";
    return 0;
}`
  },
  {
    id: "cpp-structs",
    title: {
      en: "C++ Structures",
      km: "រចនាសម្ព័ន្ធទិន្នន័យ Structs"
    },
    content: {
      en: `### Grouping Data with Structures
Structures (structs) allow you to group multiple variables of **different types** under a single user-defined type.

### Declaring a Struct:
Use the \`struct\` keyword. Members are accessed using the dot operator (\`.\`):
\`\`\`cpp
struct Person {
    string name;
    int age;
    double height;
};
\`\`\`

### Instantiating Structs:
\`\`\`cpp
Person p1;
p1.name = "Sok";
p1.age = 22;
p1.height = 1.75;
\`\`\`

> **Note:** Structs in C++ are very similar to classes. The only technical difference is that struct members are public by default, while class members are private by default.`,
      km: `### ការចងក្រងទិន្នន័យជាមួយ Structures (Structs)
Structures (structs) អនុញ្ញាតឱ្យអ្នកចងក្រងអថេរច្រើនដែលមាន **ប្រភេទទិន្នន័យខុសៗគ្នា** បញ្ចូលគ្នាក្រោមឈ្មោះតែមួយដែលអ្នកបង្កើតដោយខ្លួនឯង។

### ការបង្កើតរចនាសម្ព័ន្ធ Struct៖
ប្រើប្រាស់ពាក្យគន្លឹះ \`struct\`។ ធាតុជាសមាជិកត្រូវបានចូលប្រើប្រាស់ដោយប្រើប្រាស់សញ្ញាចុច (\`.\`)៖
\`\`\`cpp
struct Person {
    string name;
    int age;
    double height;
};
\`\`\`

### ការប្រើប្រាស់៖
\`\`\`cpp
Person p1;
p1.name = "Sok";
p1.age = 22;
p1.height = 1.75;
\`\`\`

> **ចំណាំ:** នៅក្នុង C++ ធាតុ Struct គឺស្រដៀងគ្នាខ្លាំងទៅនឹងថ្នាក់ (Classes)។ ភាពខុសគ្នាតែមួយគត់តាមបច្ចេកទេសគឺ សមាជិករបស់ Struct ត្រូវបានកំណត់ជា សាធារណៈ (public) ជាលំនាំដើម ខណៈដែលសមាជិករបស់ Class ត្រូវបានកំណត់ជា ឯកជន (private) ជាលំនាំដើម។`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

// Define structure
struct Car {
    string brand;
    string model;
    int year;
    double price;
};

int main() {
    Car myCar1;
    myCar1.brand = "Toyota";
    myCar1.model = "Prius";
    myCar1.year = 2022;
    myCar1.price = 28000.50;
    
    cout << "=== Car 1 Information ===\\n";
    cout << "Brand: " << myCar1.brand << "\\n";
    cout << "Model: " << myCar1.model << "\\n";
    cout << "Year: " << myCar1.year << "\\n";
    cout << "Price: $" << myCar1.price << "\\n";
    return 0;
}`
  },
  {
    id: "cpp-enums",
    title: {
      en: "C++ Enums",
      km: "ប្រភេទតម្លៃ Enums"
    },
    content: {
      en: `### Enumerated Types
An \`enum\` is a special user-defined type used to represent a set of named integer constants, making your code highly self-documenting.

### Syntax:
\`\`\`cpp
enum Level {
    LOW,    // evaluates to 0
    MEDIUM, // evaluates to 1
    HIGH    // evaluates to 2
};
\`\`\`

### C++11 Strongly Typed Enums (Enum Class):
Classic enums can cause name collisions. C++11 solved this by introducing \`enum class\`, which encapsulates names:
\`\`\`cpp
enum class Status { Pending, Active, Suspended };
Status s = Status::Active;
\`\`\`

> **Tip:** By default, enum values start at 0 and increment by 1. However, you can explicitly override values: \`enum Level { LOW = 10, MEDIUM = 20, HIGH = 30 };\`.`,
      km: `### ប្រភេទអថេរកំណត់តម្លៃ Enums
\`enum\` គឺជាប្រភេទអថេរពិសេសបង្កើតឡើងដោយអ្នកប្រើប្រាស់ សម្រាប់តំណាងឱ្យសំណុំនៃចំនួនគត់ដែលមានឈ្មោះសម្គាល់ច្បាស់លាស់ ជួយឱ្យកូដមានភាពងាយស្រួលយល់។

### រូបមន្ត៖
\`\`\`cpp
enum Level {
    LOW,    // មានតម្លៃស្មើ 0
    MEDIUM, // មានតម្លៃស្មើ 1
    HIGH    // មានតម្លៃស្មើ 2
};
\`\`\`

### Enum បែបតឹងរ៉ឹងក្នុង C++11 (Enum Class)៖
Enum បុរាណអាចបង្កការជាន់គ្នាឈ្មោះអថេរ។ C++11 បានដោះស្រាយបញ្ហានេះដោយបញ្ចេញ \`enum class\` ដែលគ្រប់គ្រងឈ្មោះសមាជិកបានល្អបំផុត៖
\`\`\`cpp
enum class Status { Pending, Active, Suspended };
Status s = Status::Active;
\`\`\`

> **គន្លឹះ:** ជាលំនាំដើម តម្លៃសមាជិក Enum ចាប់ផ្តើមពី ០ ហើយកើនឡើងម្តង ១។ ប៉ុន្តែអ្នកអាចកំណត់តម្លៃជាក់លាក់បាន៖ \`enum Level { LOW = 10, MEDIUM = 20, HIGH = 30 };\`។`
    },
    starterCode: `#include <iostream>
using namespace std;

enum SpeedLimit {
    CITY_ZONE = 40,
    HIGHWAY_ZONE = 80,
    EXPRESS_ZONE = 120
};

int main() {
    SpeedLimit currentLimit = HIGHWAY_ZONE;
    
    cout << "Current speed limit constant value: " << currentLimit << " km/h\\n";
    
    if (currentLimit == 80) {
        cout << "Warning: You are driving in a Highway Zone! Limit is strict.\\n";
    }
    return 0;
}`
  },
  {
    id: "cpp-references",
    title: {
      en: "C++ References",
      km: "សេចក្តីយោង References"
    },
    content: {
      en: `### References: Aliases for Variables
A reference is an alternative name (alias) for an existing variable. It is created using the address-of operator \`&\` during declaration.

### Key Rules:
- A reference must be initialized when created.
- Once bound to a variable, a reference **cannot** be rebound to refer to another variable.
- Any modification to the reference modifies the original variable directly!

\`\`\`cpp
string food = "Pizza";
string &meal = food; // meal is a reference to food

meal = "Hamburger"; 
cout << food; // outputs "Hamburger"
\`\`\`

> **Tip:** Passing arguments to functions by reference (\`void update(int &x)\`) is incredibly powerful, because it avoids duplicating large data in memory while allowing direct modification!`,
      km: `### សេចក្តីយោង (References) - ឈ្មោះហៅក្រៅនៃអថេរ
សេចក្តីយោង (Reference) គឺជាឈ្មោះជំនួស ឬឈ្មោះហៅក្រៅសម្រាប់អថេរដែលមានស្រាប់។ វាត្រូវបានបង្កើតឡើងដោយប្រើប្រាស់និមិត្តសញ្ញា \`&\` នៅពេលប្រកាសបង្កើត។

### ច្បាប់សំខាន់ៗ៖
- សេចក្តីយោងត្រូវតែផ្តល់តម្លៃចាប់ផ្តើមជានិច្ចនៅពេលបង្កើត។
- នៅពេលភ្ជាប់ជាមួយអថេរណាមួយរួចហើយ សេចក្តីយោង **មិនអាច** ប្តូរទៅភ្ជាប់ជាមួយអថេរផ្សេងទៀតឡើយ។
- រាល់ការផ្លាស់ប្តូរតម្លៃលើអថេរសេចក្តីយោង នឹងទៅកែប្រែអថេរដើមដោយផ្ទាល់!

\`\`\`cpp
string food = "Pizza";
string &meal = food; // meal គឺជាសេចក្តីយោងទៅកាន់ food

meal = "Hamburger"; 
cout << food; // បង្ហាញ "Hamburger"
\`\`\`

> **គន្លឹះ:** ការបញ្ជូនតម្លៃទៅក្នុងអនុគមន៍តាមរយៈសេចក្តីយោង (\`void update(int &x)\`) មានអត្ថប្រយោជន៍ខ្ពស់បំផុត ព្រោះវាជៀសវាងការចម្លងទិន្នន័យធំៗក្នុងមេម៉ូរី និងអនុញ្ញាតឱ្យកែប្រែតម្លៃដើមដោយផ្ទាល់!`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string originalSubject = "Computer Science";
    string &refSubject = originalSubject; // refSubject is a reference
    
    cout << "Original Subject: " << originalSubject << "\\n";
    cout << "Reference Subject: " << refSubject << "\\n";
    
    // Change value via reference
    refSubject = "C++ Systems Engineering";
    
    cout << "\\n--- After change via reference ---\\n";
    cout << "Original Subject: " << originalSubject << "\\n";
    cout << "Reference Subject: " << refSubject << "\\n";
    
    // Memory address confirmation
    cout << "\\nMemory Address of original: " << &originalSubject << "\\n";
    cout << "Memory Address of reference: " << &refSubject << "\\n";
    return 0;
}`
  },
  {
    id: "cpp-pointers",
    title: {
      en: "C++ Pointers",
      km: "ទ្រឹស្តីចង្អុល Pointers"
    },
    content: {
      en: `### Pointers & Memory Addresses
A pointer is a variable that stores the **memory address** of another variable as its value.

### Syntax:
Use the asterisk symbol \`*\` during declaration:
\`\`\`cpp
int age = 25;
int* ptr = &age; // stores memory address of age in ptr
\`\`\`

### Pointers Visual Memory Map:
Below is a text map representing how pointers reference original variables inside system memory:

\`\`\`text
Variable "age"                 Pointer "ptr"
+-------------------------+    +-------------------------+
| Value: 25               |    | Value: 0x7ffd (address) |
| Memory Address: 0x7ffd  |<---| Memory Address: 0x8cca  |
+-------------------------+    +-------------------------+
\`\`\`

### Two Crucial Operators:
1. **Address-of Operator (\`&\`):** Retrieves the hex memory address of a variable.
2. **Dereference Operator (\`*\`):** Accesses the actual value stored at the address pointed to by the pointer.

\`\`\`cpp
cout << ptr;  // Prints memory address (e.g., 0x7ffd)
cout << *ptr; // Prints dereferenced value (25)
\`\`\`

> **Warning:** Never dereference a pointer that has not been initialized (a wild pointer), as this will cause security vulnerabilities or instantaneous segmentation faults!`,
      km: `### ទ្រឹស្តីចង្អុល (Pointers) និងអាសយដ្ឋានមេម៉ូរី
Pointer គឺជាអថេរពិសេសដែលរក្សាទុក **អាសយដ្ឋានមេម៉ូរី** របស់អថេរផ្សេងទៀតជាតម្លៃរបស់វា។

### របៀបបង្កើត៖
ប្រើប្រាស់សញ្ញាផ្កាយ \`*\` នៅពេលប្រកាសបង្កើត៖
\`\`\`cpp
int age = 25;
int* ptr = &age; // រក្សាទុកអាសយដ្ឋានមេម៉ូរីរបស់ age ទៅក្នុង ptr
\`\`\`

### ផែនទីមេម៉ូរីរបស់ Pointers (Visual Memory Map)៖
ខាងក្រោមជាដ្យាក្រាមបង្ហាញពីការចង្អុលបង្ហាញរបស់ Pointer ទៅកាន់អថេរដើមក្នុងមេម៉ូរីប្រព័ន្ធ៖

\`\`\`text
អថេរដើម "age"                 អថេរចង្អុល "ptr"
+-------------------------+    +-------------------------+
| តម្លៃ: 25                |    | តម្លៃ: 0x7ffd (អាសយដ្ឋាន) |
| អាសយដ្ឋាន: 0x7ffd         |<---| អាសយដ្ឋាន: 0x8cca        |
+-------------------------+    +-------------------------+
\`\`\`

### ប្រមាណសញ្ញាគន្លឹះពីរ៖
១. **ប្រមាណសញ្ញាស្វែងរកអាសយដ្ឋាន (\`&\`):** ទាញយកអាសយដ្ឋានមេម៉ូរីក្នុងប្រព័ន្ធ Hex នៃអថេរ។
២. **ប្រមាណសញ្ញាទាញយកតម្លៃ (\`*\`):** ចូលទៅយកតម្លៃពិតប្រាកដដែលស្ថិតនៅអាសយដ្ឋាននោះ (Dereferencing)។

\`\`\`cpp
cout << ptr;  // បង្ហាញអាសយដ្ឋាន (ឧ. 0x7ffd)
cout << *ptr; // បង្ហាញតម្លៃពិតប្រាកដ (25)
\`\`\`

> **ការព្រមាន:** កុំសរសេរកូដទាញតម្លៃពី Pointer ដែលមិនទាន់មានតម្លៃចាប់ផ្តើម (Wild pointer) ឡើយ ព្រោះវានឹងបង្កហានិភ័យសុវត្ថិភាព ឬកម្មវិធីគាំងភ្លាមៗ!`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    int goldCoins = 1500;
    int* coinPointer = &goldCoins; // Pointer stores address of goldCoins
    
    cout << "Value of goldCoins: " << goldCoins << "\\n";
    cout << "Memory Address of goldCoins (&goldCoins): " << &goldCoins << "\\n";
    cout << "Value stored in pointer (coinPointer): " << coinPointer << "\\n";
    
    // Dereference pointer
    cout << "Value pointed by pointer (*coinPointer): " << *coinPointer << "\\n";
    
    // Modify original value via dereferenced pointer
    *coinPointer = 9999;
    
    cout << "\\n--- After change via pointer dereferencing ---\\n";
    cout << "Value of goldCoins: " << goldCoins << "\\n";
    return 0;
}`
  },
  {
    id: "cpp-memory-mgmt",
    title: {
      en: "C++ Memory Mgmt",
      km: "ការគ្រប់គ្រងមេម៉ូរី C++"
    },
    content: {
      en: `### Dynamic Memory Allocation
In C++, memory can be allocated dynamically during runtime in the **Heap memory segment** rather than the stack.

### Key Operators:
- **\`new\`:** Allocates memory on the Heap and returns a pointer to it.
- **\`delete\`:** Frees the allocated Heap memory back to the operating system.

### Text-Based Memory Segment Map:
\`\`\`text
+--------------------------------------------------------+
| STACK Memory (Fast, managed automatically)             |
| -> stores local variables, pointer variables           |
+--------------------------------------------------------+
| HEAP Memory (Large, managed manually with new/delete)  |
| -> stores dynamically allocated objects                |
+--------------------------------------------------------+
\`\`\`

### Example:
\`\`\`cpp
int* ptr = new int; // Allocate integer on Heap
*ptr = 45;
delete ptr;        // Free memory (prevent memory leaks!)
ptr = nullptr;     // Safely set to nullptr (avoid dangling pointer)
\`\`\`

> **Warning:** If you allocate memory using \`new\` but forget to call \`delete\`, you create a **Memory Leak**. Over time, this consumes all system memory, causing the application or system to crash!`,
      km: `### ការបម្រុងទុកមេម៉ូរីដោយឌីណាមិក (Dynamic Memory Allocation)
នៅក្នុង C++ មេម៉ូរីអាចត្រូវបានបម្រុងទុកដោយសេរីនៅពេលរត់កូដ នៅក្នុងផ្នែក **Heap memory** ជំនួសឱ្យផ្នែក Stack។

### ប្រមាណសញ្ញាសំខាន់ៗ៖
- **\`new\`:** បម្រុងទុកមេម៉ូរីនៅលើ Heap និងផ្តល់ត្រឡប់មកវិញនូវ Pointer អាសយដ្ឋាន។
- **\`delete\`:** ដោះលែងមេម៉ូរីដែលបានបម្រុងទុកនៅលើ Heap ត្រឡប់ទៅប្រព័ន្ធប្រតិបត្តិការវិញ។

### ផែនទីលំហមេម៉ូរីប្រព័ន្ធ៖
\`\`\`text
+--------------------------------------------------------+
| STACK Memory (លឿន គ្រប់គ្រងដោយស្វ័យប្រវត្ត)                 |
| -> រក្សាទុកអថេរមូលដ្ឋាន អថេរចង្អុល (Pointers)                 |
+--------------------------------------------------------+
| HEAP Memory (ធំទូលាយ គ្រប់គ្រងដោយផ្ទាល់តាម new/delete)     |
| -> រក្សាទុកទិន្នន័យបម្រុងទុកឌីណាមិក                       |
+--------------------------------------------------------+
\`\`\`

### ឧទាហរណ៍៖
\`\`\`cpp
int* ptr = new int; // បង្កើតចំនួនគត់នៅលើ Heap
*ptr = 45;
delete ptr;        // ដោះលែងមេម៉ូរី (ជៀសវាងការលេចធ្លាយមេម៉ូរី!)
ptr = nullptr;     // កំណត់ទៅ nullptr ដើម្បីសុវត្ថិភាព
\`\`\`

> **ការព្រមាន:** ប្រសិនបើអ្នកបម្រុងទុកមេម៉ូរីដោយប្រើ \`new\` ប៉ុន្តែភ្លេចហៅប្រើ \`delete\` វានឹងបង្កើតឱ្យមាន **ការលេចធ្លាយមេម៉ូរី (Memory Leak)**។ យូរៗទៅ វានឹងស៊ីមេម៉ូរីរបស់ម៉ាស៊ីនអស់ បណ្តាលឱ្យកម្មវិធី ឬប្រព័ន្ធកុំព្យូទ័រគាំងទាំងស្រុង!`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // Dynamically allocate integer
    int* dynamicInt = new int;
    *dynamicInt = 777;
    
    cout << "Dynamic Integer Address on Heap: " << dynamicInt << "\\n";
    cout << "Dynamic Integer Value: " << *dynamicInt << "\\n";
    
    // Free the heap space
    delete dynamicInt;
    dynamicInt = nullptr; // Clear pointer address
    
    // Dynamically allocate array
    int size = 3;
    int* dynamicArray = new int[size];
    dynamicArray[0] = 100;
    dynamicArray[1] = 200;
    dynamicArray[2] = 300;
    
    cout << "\\nDynamic Array Values:\\n";
    for (int i = 0; i < size; i++) {
        cout << "Index " << i << ": " << dynamicArray[i] << "\\n";
    }
    
    // Free dynamic array (note the square brackets!)
    delete[] dynamicArray;
    dynamicArray = nullptr;
    
    cout << "\\nDynamic Heap Memory freed successfully." << endl;
    return 0;
}`
  }
];
