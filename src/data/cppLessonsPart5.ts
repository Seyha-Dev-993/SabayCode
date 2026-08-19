import { Lesson } from '../types';

export const cppLessonsPart5: Lesson[] = [
  {
    id: "cpp-errors",
    title: {
      en: "C++ Errors",
      km: "កំហុសនៅក្នុង C++"
    },
    content: {
      en: `### Understanding Program Bugs
In C++, bugs and errors typically fall into one of three major classifications:

### 1. Syntax Errors (Compile-Time):
Violations of the language's spelling and structural rules. Caught by the compiler instantly before the program runs.
- *Examples:* Missing semicolons, declaring variables with incompatible types, unmatched curly braces.

### 2. Runtime Errors:
Errors that occur while the program is actively executing. The code compiles successfully, but performs an illegal operation during execution, causing an instantaneous crash.
- *Examples:* Division by zero, dereferencing a null/wild pointer, array index out of bounds.

### 3. Logical Errors:
The program compiles and runs without crashing, but produces incorrect outputs because the math or flow logic is wrong.
- *Examples:* Writing \`a - b\` instead of \`a + b\`, using incorrect loop termination bounds.

> **Tip:** Compile-time errors are your friends! They protect you by blocking bad code from ever reaching production.`,
      km: `### ការស្វែងយល់ពីកំហុសកម្មវិធី (Bugs & Errors)
នៅក្នុង C++ កំហុស ឬបញ្ហាកូដជាទូទៅត្រូវបានចែកចេញជាបីប្រភេទធំៗ៖

### ១. កំហុសវេយ្យាករណ៍ (Syntax Errors / Compile-Time)៖
ការសរសេរខុសច្បាប់រចនាសម្ព័ន្ធ ឬ বানកូដរបស់ភាសា C++។ វាត្រូវបានរកឃើញដោយ Compiler ភ្លាមៗ មុនពេលកម្មវិធីដំណើរការ។
- *ឧទាហរណ៍:* ភ្លេចដាក់សញ្ញាក្បៀសចំនុច (\`;\`), ប្រើប្រាស់អថេរមិនទាន់ប្រកាស, បើកគ្នាបហើយភ្លេចបិទ។

### ២. កំហុសពេលកំពុងរត់ (Runtime Errors)៖
កំហុសដែលកើតឡើងនៅពេលកម្មវិធីកំពុងដំណើរការ។ កូដអាចចងក្រង (Compile) ជោគជ័យ ប៉ុន្តែធ្វើប្រតិបត្តិការខុសច្បាប់នាំឱ្យកម្មវិធីគាំងភ្លាមៗ។
- *ឧទាហរណ៍:* ការចែកនឹងសូន្យ, ការហៅ Pointer គ្មានតម្លៃ, ការហៅសន្ទស្សន៍អារេលើសទំហំ។

### ៣. កំហុសតក្កវិទ្យា (Logical Errors)៖
កម្មវិធីចងក្រង និងរត់បានធម្មតាដោយមិនគាំងទេ ប៉ុន្តែផ្តល់លទ្ធផលមិនត្រឹមត្រូវ ដោយសារតែរូបមន្ត ឬតក្កវិទ្យាសរសេរខុស។
- *ឧទាហរណ៍:* សរសេររូបមន្តដក \`a - b\` ជំនួសឱ្យការបូក \`a + b\` ឬការកំណត់លក្ខខណ្ឌរង្វិលជុំខុសព្រំដែន។

> **គន្លឹះ:** កំហុសពេល Compile-time គឺជាមិត្តល្អរបស់អ្នក! ពួកវាការពារអ្នកដោយរារាំងមិនឱ្យកូដដែលខូចត្រូវបានចែកចាយទៅកាន់អ្នកប្រើប្រាស់ឡើយ។`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    cout << "=== Demonstrating a Logical Error ===\\n";
    int price = 100;
    int tax = 10;
    
    // Developer wanted to add tax: price + tax, but accidentally subtracted!
    int total = price - tax; 
    
    cout << "Item Price: $" << price << " | Tax: $" << tax << "\\n";
    cout << "Calculated Total (Logical Error): $" << total << " (Expected: $110)\\n";
    return 0;
}`
  },
  {
    id: "cpp-debugging",
    title: {
      en: "C++ Debugging",
      km: "ការដោះស្រាយកំហុស Debugging"
    },
    content: {
      en: `### Diagnostic Code Techniques
Debugging is the systematic process of finding and resolving bugs within a computer program.

### Common C++ Debugging Practices:
1. **Print Debugging (\`std::cout\`):** Temporary insertion of print statements to trace variable values and block execution order.
2. **Static Assertions (C++11):** Verifies conditions at compile-time. If the expression evaluates to false, compilation halts immediately with a custom message.
   - *Example:* \`static_assert(sizeof(int) == 4, "Integers must be 4 bytes on this target platform!");\`
3. **Interactive Debuggers (gdb):** Setting breakpoints and inspecting variables in memory line-by-line during runtime.

> **Tip:** When print debugging, always use \`std::cerr\` (standard error stream) instead of \`std::cout\`. \`std::cerr\` is unbuffered, meaning it displays logs instantly even if the program crashes immediately afterwards.`,
      km: `### បច្ចេកទេសស្វែងរក និងវិភាគបញ្ហាកូដ
Debugging គឺជាដំណើរការលំដាប់លំដោយក្នុងការស្វែងរក វិភាគ និងដោះស្រាយបញ្ហាកំហុសនៅក្នុងកម្មវិធីកុំព្យូទ័រ។

### វិធីសាស្ត្រដោះស្រាយកំហុសពេញនិយមក្នុង C++៖
១. **ការបោះពុម្ពលទ្ធផលសាកល្បង (\`std::cout\`):** ការដាក់សារបង្ហាញជាបណ្តោះអាសន្ន ដើម្បីពិនិត្យតម្លៃអថេរ និងតាមដានលំហូរកូដ។
២. **ការអះអាងលក្ខខណ្ឌពេល Compile (Static Assertions - C++11):** ពិនិត្យលក្ខខណ្ឌតាំងពីពេលកំពុង Compile។ បើលក្ខខណ្ឌខុស ការចងក្រងនឹងបញ្ឈប់ភ្លាមៗជាមួយសារប្រាប់កំហុសដែលយើងកំណត់។
   - *ឧទាហរណ៍:* \`static_assert(sizeof(int) == 4, "Integers must be 4 bytes on this target platform!");\`
៣. **កម្មវិធីវិភាគកំហុសអន្តរកម្ម (Interactive Debugger - gdb):** ការកំណត់ចំណុចផ្អាក (Breakpoints) និងការចូលទៅមើលតម្លៃមេម៉ូរីម្តងមួយបន្ទាត់។

> **គន្លឹះ:** នៅពេលធ្វើការ Print សាកល្បងរកកំហុស គួរប្រើប្រាស់ \`std::cerr\` (Standard error stream) ជំនួសឱ្យ \`std::cout\`។ \`std::cerr\` មិនប្រើ Buffer ទេ មានន័យវាបង្ហាញសារភ្លាមៗ ទោះជាកម្មវិធីរៀបនឹងគាំងក៏ដោយ។`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // Assert that the platform matches requirements (will succeed on this platform)
    static_assert(sizeof(char) == 1, "Characters must be exactly 1 byte!");
    
    int items = 12;
    int boxes = 0;
    
    // Print-debugging to trace variables before operations
    cerr << "[DEBUG LOGGER] items value: " << items << "\\n";
    cerr << "[DEBUG LOGGER] boxes value: " << boxes << "\\n";
    
    if (boxes == 0) {
        cerr << "[DEBUG WARNING] Attempting to divide items by zero boxes blocked!\\n";
        boxes = 1; // Safely assign default value
    }
    
    int itemsPerBox = items / boxes;
    cout << "Result: " << itemsPerBox << " items per box.\\n";
    return 0;
}`
  },
  {
    id: "cpp-exceptions",
    title: {
      en: "C++ Exceptions",
      km: "ការគ្រប់គ្រងកំហុសទិន្នន័យ Exceptions"
    },
    content: {
      en: `### Exception Handling: try, throw, catch
Exceptions provide a safe, structured way to hand over control from a point of error to another block of code capable of resolving the issue.

### The Three Exception Keywords:
- **\`try\`:** Wraps a block of code where errors might potentially occur.
- **\`throw\`:** Signals that an error has occurred, transmitting an exception object or variable.
- **\`catch\`:** Captures and processes the thrown exception safely.

### Syntax:
\`\`\`cpp
try {
    if (errorCondition) throw "Error Message";
} catch (const char* msg) {
    cerr << "Handled exception: " << msg << "\\n";
}
\`\`\`

> **Note:** If an exception is thrown but no matching \`catch\` block is found, the C++ runtime environment will terminate the program immediately with an abnormal execution crash!`,
      km: `### ការចាត់ចែងកំហុសពិសេស (Exceptions)
Exceptions ផ្តល់នូវវិធីសាស្ត្រមានសុវត្ថិភាព និងរៀបរយខ្ពស់ ក្នុងការបញ្ជូនការគ្រប់គ្រងពីចំណុចដែលមានបញ្ហាកូដ ទៅកាន់ប្លុកកូដផ្សេងទៀតដែលកែខៃបញ្ហានោះបាន។

### ពាក្យគន្លឹះចម្បងទាំងបី៖
- **\`try\`:** ព័ទ្ធជុំវិញប្លុកកូដដែលអាចមានហានិភ័យកើតកំហុស។
- **\`throw\`:** បញ្ជូនសញ្ញាព្រមានថាមានកំហុសកើតឡើង ដោយបញ្ជូនជាវត្ថុ ឬអថេរ Exception។
- **\`catch\`:** ចាប់យក និងដោះស្រាយរាល់សញ្ញាព្រមាន Exception ទាំងអស់ដោយសុវត្ថិភាព។

### រូបមន្ត៖
\`\`\`cpp
try {
    if (លក្ខខណ្ឌខុស) throw "សារបញ្ជាក់កំហុស";
} catch (const char* msg) {
    cerr << "បានចាប់ និងដោះស្រាយ៖ " << msg << "\\n";
}
\`\`\`

> **ចំណាំ:** ប្រសិនបើ Exception ត្រូវបានបោះចេញ (\`throw\`) ប៉ុន្តែគ្មានប្លុក \`catch\` ណាមួយត្រូវគ្នានឹងប្រភេទរបស់វាទេ នោះប្រព័ន្ធដំណើរការ C++ នឹងបង្ខំបិទកម្មវិធីរបស់អ្នកជាបន្ទាន់ (Abnormal termination)!`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

// Function performing division with exception handling
double divideNumbers(double numerator, double denominator) {
    if (denominator == 0.0) {
        throw string("Math Error: Attempted division by zero!"); // Throw string exception
    }
    return numerator / denominator;
}

int main() {
    double x = 50.0;
    double y = 0.0;
    
    try {
        cout << "Attempting calculations...\\n";
        double result = divideNumbers(x, y);
        cout << "Result: " << result << "\\n";
    } 
    catch (const string& errorMsg) {
        // Catch string exception
        cerr << "EXCEPTION INTERCEPTED!\\n";
        cerr << "Error details: " << errorMsg << "\\n";
    }
    catch (...) {
        // Default catch-all block
        cerr << "An unknown exception occurred!\\n";
    }
    
    cout << "Program execution continues safely here.\\n";
    return 0;
}`
  },
  {
    id: "cpp-input-validation",
    title: {
      en: "C++ Input Validation",
      km: "ការផ្ទៀងផ្ទាត់ទិន្នន័យបញ្ចូល"
    },
    content: {
      en: `### Robust Input Streams Checking
Input validation is crucial to ensure that information submitted by users matches the program's expected types and logical constraints.

### The Problem with \`std::cin\`:
If \`cin\` expects an integer but the user types a character (like \`"abc"\`), \`cin\` goes into a **fail state**, blocking all subsequent inputs and creating an infinite loop if placed inside a loop.

### How to Recover:
1. Check stream failure using \`std::cin.fail()\`.
2. Clear the error state using \`std::cin.clear()\`.
3. Discard the invalid input characters from the buffer using \`std::cin.ignore()\`.

\`\`\`cpp
if (cin.fail()) {
    cin.clear(); // Reset cin status
    cin.ignore(10000, '\\n'); // Ignore 10,000 bad characters
}
\`\`\`

> **Tip:** Always perform validation checks immediately after reading inputs before using variables in math equations!`,
      km: `### ការផ្ទៀងផ្ទាត់ទិន្នន័យបញ្ចូលឱ្យបានត្រឹមត្រូវ (Input Validation)
ការផ្ទៀងផ្ទាត់ទិន្នន័យបញ្ចូលគឺជាកិច្ចការសំខាន់ ដើម្បីធានាថារាល់ព័ត៌មានដែលវាយដោយអ្នកប្រើប្រាស់ គឺត្រូវគ្នានឹងប្រភេទអថេរ និងលក្ខខណ្ឌរបស់កម្មវិធី។

### បញ្ហាជាមួយ \`std::cin\`៖
ប្រសិនបើ \`cin\` រង់ចាំចំនួនគត់ ប៉ុន្តែអ្នកប្រើប្រាស់វាយជាអក្សរ (ដូចជា \`"abc"\`) នោះ \`cin\` នឹងធ្លាក់ទៅក្នុង **ស្ថានភាពបរាជ័យ (Fail state)** ដែលរារាំងការបញ្ចូលព័ត៌មានបន្ទាប់ៗ និងអាចបង្កើតរង្វិលជុំគ្មានទីបញ្ចប់បើស្ថិតក្នុង loop។

### របៀបស្តារស្ថានភាពឡើងវិញ៖
១. ពិនិត្យការបរាជ័យដោយប្រើ \`std::cin.fail()\`។
២. សម្អាតស្ថានភាពកំហុសរបស់ស្ទ្រីមឡើងវិញដោយប្រើ \`std::cin.clear()\`។
៣. បោះបង់តួអក្សរដែលខុសចោលពី Buffer ដោយប្រើ \`std::cin.ignore()\`។

\`\`\`cpp
if (cin.fail()) {
    cin.clear(); // កំណត់ស្ថានភាព cin ឡើងវិញ
    cin.ignore(10000, '\\n'); // រំលងចោលតួអក្សរខុស ១០០០០តួ
}
\`\`\`

> **គន្លឹះ:** ត្រូវត្រួតពិនិត្យភាពត្រឹមត្រូវជានិច្ច ភ្លាមៗបន្ទាប់ពីអានតម្លៃទិន្នន័យរួច មុនពេលយកអថេរនោះទៅគណនាក្នុងរូបមន្តគណិតវិទ្យា!`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    int age = -1;
    bool isValid = false;
    
    // Simulating robust loop input validation in our sandbox environment
    cout << "Enter your current age (must be between 0 and 120):\\n";
    
    // Mock user input value (Simulated bad string then corrected value)
    // On a real terminal, user would type values. Here we simulate validation directly:
    cout << "[User Input Type]: abc (Invalid characters)\\n";
    
    // Simulate cin failure
    bool mockCinFail = true; 
    
    if (mockCinFail) {
        cout << "[System Alert]: Invalid input type! Clearing stream error status...\\n";
        // Recovery steps
        // cin.clear();
        // cin.ignore(10000, '\\n');
        
        cout << "[System Action]: Prompting user to re-enter age again.\\n";
        cout << "[User Input Type]: 22 (Correct Integer Value)\\n";
        
        age = 22; // Safe input recovered!
    }
    
    if (age >= 0 && age <= 120) {
        isValid = true;
        cout << "Age successfully validated: " << age << " years old.\\n";
    } else {
        cout << "Age invalid. Verification failed.\\n";
    }
    
    return 0;
}`
  }
];
