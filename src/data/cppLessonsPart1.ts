import { Lesson } from '../types';

export const cppLessonsPart1: Lesson[] = [
  {
    id: "cpp-home",
    title: {
      en: "C++ Home",
      km: "ទំព័រដើម C++"
    },
    content: {
      en: `### Welcome to C++ Programming!
C++ is a high-performance, general-purpose, compiled programming language. Developed by Bjarne Stroustrup at Bell Labs in 1979 as an extension of C, it adds object-oriented features while maintaining low-level efficiency.

### Why Learn C++?
- **Speed & Performance:** It is one of the fastest systems languages available, used extensively in game engines, operating systems, and finance.
- **Hardware Control:** Provides direct memory access, low-level manipulation, and highly efficient resource management.
- **Multi-Paradigm:** Supports procedural, functional, and object-oriented programming (OOP).

> **Tip:** Every lesson in this course contains a live, editable playground where you can write and execute C++ code directly in your browser.`,
      km: `### សូមស្វាគមន៍មកកាន់ការរៀន C++!
C++ គឺជាភាសាសរសេរកម្មវិធីកម្រិតខ្ពស់ ទូទៅ និងជាប្រភេទ Compiled Language។ វាត្រូវបានបង្កើតឡើងដោយលោក Bjarne Stroustrup នៅមន្ទីរពិសោធន៍ Bell Labs ក្នុងឆ្នាំ ១៩៧៩ ជាការបន្ថែមលើភាសា C ដោយបញ្ចូលមុខងារតម្រង់វត្ថុ (OOP) ប៉ុន្តែនៅរក្សាប្រសិទ្ធភាពកម្រិតទាបដ៏រឹងមាំដដែល។

### ហេតុអ្វីត្រូវរៀន C++?
- **ល្បឿន និងប្រសិទ្ធភាពខ្ពស់:** វាជាភាសាប្រព័ន្ធ (Systems Language) ដែលលឿនបំផុតមួយ ត្រូវបានប្រើប្រាស់យ៉ាងខ្លាំងក្នុង Game Engines, ប្រព័ន្ធប្រតិបត្តិការ (OS) និងហិរញ្ញវត្ថុ។
- **គ្រប់គ្រងលើ Hardware:** វាផ្តល់សិទ្ធិចូលប្រើប្រាស់មេម៉ូរីដោយផ្ទាល់ ការគ្រប់គ្រងធនធានកម្រិតទាប និងមានប្រសិទ្ធភាពខ្ពស់។
- **ទម្រង់ចម្រុះ (Multi-Paradigm):** គាំទ្រទាំងការសរសេរកូដបែបលំដាប់លំដោយ (Procedural) បែបអនុគមន៍ (Functional) និងបែបតម្រង់វត្ថុ (OOP)។

> **គន្លឹះ:** រាល់មេរៀនទាំងអស់នៅក្នុងវគ្គសិក្សានេះ មានកន្លែងសាកល្បងកូដផ្ទាល់ ដែលអ្នកអាចកែសម្រួល និងដំណើរការកូដ C++ ភ្លាមៗនៅក្នុងកម្មវិធីរុករករបស់អ្នក។`
    },
    starterCode: `#include <iostream>

int main() {
    std::cout << "Hello Cambodian Learners! Welcome to C++!" << std::endl;
    return 0;
}`
  },
  {
    id: "cpp-intro",
    title: {
      en: "C++ Intro",
      km: "សេចក្តីផ្តើម C++"
    },
    content: {
      en: `### What is C++?
C++ is an extension of C. It was designed to add classes and object-oriented programming concepts to the C language without compromising C's raw speed and hardware capabilities.

### Key Characteristics:
- **Compiled Language:** Your C++ source code is translated directly into machine-executable binary files by a compiler (e.g., GCC/Clang), making execution incredibly fast.
- **Case Sensitive:** \`MyVar\` and \`myvar\` are completely different variables.
- **Static Typing:** Type checks are performed at compile-time; you must specify variable types when declaring them.

> **Note:** Because C++ is highly backward-compatible with C, almost any valid C program is also a valid C++ program.`,
      km: `### តើអ្វីទៅជា C++?
C++ គឺជាការវិវត្តបន្ថែមពីលើភាសា C។ វាត្រូវបានរចនាឡើងដើម្បីបន្ថែមប្រព័ន្ធថ្នាក់ (Classes) និងការសរសេរកម្មវិធីតម្រង់វត្ថុ (OOP) ទៅក្នុងភាសា C ដោយមិនប៉ះពាល់ដល់ល្បឿនដ៏លឿន និងសមត្ថភាពគ្រប់គ្រង Hardware របស់ C ឡើយ។

### លក្ខណៈពិសេសសំខាន់ៗ៖
- **ភាសាចងក្រង (Compiled Language):** កូដប្រភព C++ របស់អ្នកត្រូវបានបកប្រែដោយផ្ទាល់ទៅជាកូដម៉ាស៊ីន (Binary files) ដោយ Compiler (ដូចជា GCC/Clang) ធ្វើឱ្យការរត់កម្មវិធីមានល្បឿនលឿនបំផុត។
- **ប្រកាន់តួអក្សរតូចធំ (Case Sensitive):** \`MyVar\` និង \`myvar\` គឺជាអថេរពីរផ្សេងគ្នាដាច់ស្រឡះ។
- **ការកំណត់ប្រភេទថេរ (Static Typing):** ការត្រួតពិនិត្យប្រភេទអថេរត្រូវធ្វើឡើងនៅពេល Compile ដូច្នេះអ្នកត្រូវបញ្ជាក់ប្រភេទអថេរជានិច្ចនៅពេលបង្កើត។

> **ចំណាំ:** ដោយសារ C++ ត្រូវគ្នាថយក្រោយ (Backward-compatible) ជាមួយ C យ៉ាងល្អ ស្ទើរតែរាល់កម្មវិធីសរសេរជាភាសា C ទាំងអស់ គឺអាចដំណើរការជា C++ បានយ៉ាងរលូន។`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    cout << "C++ was created by Bjarne Stroustrup." << endl;
    cout << "It runs at near-hardware speeds!" << endl;
    return 0;
}`
  },
  {
    id: "cpp-get-started",
    title: {
      en: "C++ Get Started",
      km: "ការចាប់ផ្តើមដំបូងជាមួយ C++"
    },
    content: {
      en: `### Writing Your First Program
To start writing C++ programs, you need to understand the fundamental build structure:

- \`#include <iostream>\`: A preprocessor directive that imports the Standard Input/Output Stream library, allowing us to read/write text.
- \`int main()\`: The main entry point function. Every C++ program starts execution from here.
- \`std::cout\`: Stands for "character output", used to send text to the screen.
- \`return 0;\`: Tells the operating system that the program executed successfully.

### Compiling manually:
On your computer, you can compile a C++ file named \`main.cpp\` using a shell command like:
\`\`\`bash
g++ main.cpp -o myapp
./myapp
\`\`\`

> **Note:** Statements in C++ always end with a semicolon (\`;\`). Leaving it out will trigger a compilation error.`,
      km: `### ការសរសេរកម្មវិធីដំបូងរបស់អ្នក
ដើម្បីចាប់ផ្តើមសរសេរកម្មវិធី C++ អ្នកត្រូវយល់ដឹងពីរចនាសម្ព័ន្ធមូលដ្ឋានរបស់វា៖

- \`#include <iostream>\`: គឺជាការណែនាំមុនដំណើរការ (Preprocessor directive) ដែលនាំចូលបណ្ណាល័យស្ទ្រីមបញ្ចេញចូលទិន្នន័យ (Standard Input/Output) ដើម្បីអាចសរសេរ/អានអក្សរបាន។
- \`int main()\`: គឺជាចំណុចចាប់ផ្តើមដំបូងរបស់កម្មវិធី (Main entry point)។ គ្រប់កម្មវិធី C++ ទាំងអស់ចាប់ផ្តើមរត់ពីទីនេះ។
- \`std::cout\`: មកពីពាក្យ "character output" ប្រើសម្រាប់បង្ហាញអត្ថបទលើអេក្រង់។
- \`return 0;\`: ប្រាប់ទៅប្រព័ន្ធប្រតិបត្តិការថា កម្មវិធីត្រូវបានដំណើរការដោយជោគជ័យ និងគ្មានបញ្ហា។

### ការចងក្រងកូដដោយផ្ទាល់ (Manual Compilation)៖
នៅលើកុំព្យូទ័ររបស់អ្នក អ្នកអាចចងក្រងកូដ C++ ឈ្មោះ \`main.cpp\` ដោយប្រើប្រាស់ពាក្យបញ្ជាដូចខាងក្រោម៖
\`\`\`bash
g++ main.cpp -o myapp
./myapp
\`\`\`

> **ចំណាំ:** រាល់ការណែនាំ ឬប្រយោគបញ្ជានៅក្នុង C++ ត្រូវតែបញ្ចប់ដោយសញ្ញាក្បៀសចំនុច (\`;\`) ជានិច្ច។ បើខ្វះវានឹងបង្កកំហុសពេល Compile (Compilation error)។`
    },
    starterCode: `#include <iostream>

int main() {
    std::cout << "Hello, World! This is my first C++ program!" << std::endl;
    return 0;
}`
  },
  {
    id: "cpp-syntax",
    title: {
      en: "C++ Syntax",
      km: "រចនាសម្ព័ន្ធកូដ C++"
    },
    content: {
      en: `### C++ Syntax Elements
Let's analyze the exact parts of standard C++ syntax:

1. **Header Files:** \`#include <iostream>\` lets us use functions like \`std::cout\`.
2. **Namespaces:** \`using namespace std;\` allows us to omit the \`std::\` prefix, simplifying \`std::cout\` to just \`cout\`.
3. **The main() function:** Defined with curly braces \`{}\` which contain the executable blocks.
4. **Statements:** Line instructions like \`cout << "text";\`.

\`\`\`cpp
// This is how to skip std:: prefix
#include <iostream>
using namespace std;

int main() {
    cout << "Shorter syntax!";
    return 0;
}
\`\`\`

> **Tip:** While \`using namespace std;\` makes code shorter, in large projects, developers often prefer \`std::cout\` to avoid name clashes (namespace pollution).`,
      km: `### ធាតុផ្សំរចនាសម្ព័ន្ធកូដ C++
ចូរវិភាគផ្នែកលម្អិតនៃរចនាសម្ព័ន្ធកូដ C++ ៖

១. **Header Files:** \`#include <iostream>\` អនុញ្ញាតឱ្យយើងប្រើប្រាស់អនុគមន៍ដូចជា \`std::cout\`។
២. **Namespaces:** \`using namespace std;\` ជួយឱ្យយើងមិនចាំបាច់សរសេរបុព្វបទ \`std::\` នៅពីមុខ គឺអាចសម្រួលពី \`std::cout\` មកសរសេរត្រឹម \`cout\` តែម្តង។
៣. **អនុគមន៍ main():** កំណត់ដោយសញ្ញាគ្នាប \`{}\` ដែលផ្ទុកប្លុកកូដបញ្ជាត្រូវដំណើរការ។
៤. **Statements:** ជាប្រយោគបញ្ជាដូចជា \`cout << "text";\`។

\`\`\`cpp
// របៀបមិនបាច់សរសេរ std::
#include <iostream>
using namespace std;

int main() {
    cout << "កូដខ្លីជាងមុន!";
    return 0;
}
\`\`\`

> **គន្លឹះ:** ទោះបីជាការប្រើប្រាស់ \`using namespace std;\` ធ្វើឱ្យកូដខ្លីក៏ដោយ នៅក្នុងគម្រោងធំៗ អ្នកសរសេរកូដច្រើនតែប្រើ \`std::cout\` ដើម្បីជៀសវាងការជាន់គ្នាឈ្មោះអថេរ ឬអនុគមន៍ (Namespace pollution)។`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    cout << "We are using the 'std' namespace now!" << endl;
    cout << "So we don't have to write 'std::' anymore." << endl;
    return 0;
}`
  },
  {
    id: "cpp-output",
    title: {
      en: "C++ Output",
      km: "ការបង្ហាញលទ្ធផល C++"
    },
    content: {
      en: `### Printing Output to the Screen
To print text in C++, use the insertion operator \`<<\` alongside \`cout\`:

- You can chain multiple outputs in a single line using multiple \`<<\` operators.
- To insert a new line (carriage return), you can use:
  1. The special escape character \`\\n\`.
  2. The manipulator \`std::endl\`.

### Difference between \`\\n\` and \`endl\`:
- \`\\n\` is faster because it simply inserts a newline character into the stream.
- \`endl\` inserts a newline AND forces the buffer to flush (write output immediately to the destination), which adds a small speed overhead.

> **Tip:** For high-performance rendering or competitive programming, prefer using \`\\n\` instead of \`endl\`.`,
      km: `### ការបង្ហាញលទ្ធផលទៅលើអេក្រង់
ដើម្បីបង្ហាញអត្ថបទនៅក្នុង C++ យើងប្រើប្រាស់ប្រមាណសញ្ញាបញ្ចូល \`<<\` ជាមួយ \`cout\`៖

- អ្នកអាចភ្ជាប់លទ្ធផលបង្ហាញជាច្រើនជាបន្តបន្ទាប់ក្នុងបន្ទាត់តែមួយដោយប្រើ \`<<\` ច្រើនដង។
- ដើម្បីចុះបន្ទាត់ថ្មី អ្នកអាចប្រើប្រាស់៖
  ១. តួអក្សរពិសេស \`\\n\` (Escape character)។
  ២. អថេរបញ្ជាចុះបន្ទាត់ \`std::endl\`។

### ភាពខុសគ្នារវាង \`\\n\` និង \`endl\`៖
- \`\\n\` មានល្បឿនលឿនជាង ព្រោះវាគ្រាន់តែចុះបន្ទាត់ថ្មីក្នុងស្ទ្រីម។
- \`endl\` មិនត្រឹមតែចុះបន្ទាត់ទេ ថែមទាំងបង្ខំឱ្យសម្អាត Buffer (Flush buffer) នាំឱ្យបង្ហាញភ្លាមៗ តែត្រូវចំណាយកម្លាំងម៉ាស៊ីនបន្តិចបន្តួច។

> **គន្លឹះ:** សម្រាប់ការសរសេរកម្មវិធីដែលត្រូវការល្បឿនលឿនបំផុត ឬការប្រកួតប្រជែងសរសេរកូដ សូម ترجیحប្រើប្រាស់ \`\\n\` ល្អជាង \`endl\`។`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    cout << "Line 1 with endl" << endl;
    cout << "Line 2 with escape chart\\n";
    cout << "Age: " << 21 << " | Score: " << 98.5 << "\\n";
    return 0;
}`
  },
  {
    id: "cpp-comments",
    title: {
      en: "C++ Comments",
      km: "កំណត់សម្គាល់ C++"
    },
    content: {
      en: `### Adding Comments to Code
Comments are completely ignored by the C++ compiler. They are used to explain the code, document logic, and prevent code execution during testing.

### Two Types of Comments:
1. **Single-line Comments:** Start with two forward slashes \`//\`. Anything from \`//\` to the end of that line is ignored.
2. **Multi-line Comments:** Start with \`/*\` and end with \`*/\`. Anything inside this block is ignored.

\`\`\`cpp
/* This is a multi-line comment
   explaining the main functionality */
int x = 5; // Single-line comment: x stores initial item count
\`\`\`

> **Note:** Do not nest multi-line comments inside each other, as this will trigger syntax compile errors!`,
      km: `### ការដាក់កំណត់សម្គាល់ក្នុងកូដ (Comments)
Comments ត្រូវបានមើលរំលងទាំងស្រុងដោយ C++ Compiler។ ពួកវាត្រូវបានប្រើប្រាស់ដើម្បីពន្យល់ពីកូដ កត់ត្រាគំនិតតក្កវិទ្យា និងបិទកូដបណ្តោះអាសន្នពេលកំពុងធ្វើតេស្តសាកល្បង។

### ប្រភេទ Comments ទាំងពីរ៖
១. **ចុះបន្ទាត់តែមួយ (Single-line):** ចាប់ផ្តើមដោយសញ្ញាខ្វែងពីរ \`//\`។ រាល់អត្ថបទចាប់ពីសញ្ញានេះដល់ចុងបន្ទាត់នឹងត្រូវរំលង។
២. **ច្រើនបន្ទាត់ (Multi-line):** ចាប់ផ្តើមដោយ \`/*\` និងបញ្ចប់ដោយ \`*/\`។ រាល់ខ្លឹមសារនៅក្នុងប្លុកនេះនឹងត្រូវរំលងទាំងអស់។

\`\`\`cpp
/* នេះជា Comment ច្រើនបន្ទាត់
   សម្រាប់ពន្យល់មុខងារធំៗ */
int x = 5; // នេះជា Comment មួយបន្ទាត់៖ x រក្សាទុកចំនួនដំបូង
\`\`\`

> **ចំណាំ:** កុំសរសេរ Comment ច្រើនបន្ទាត់ត្រួតគ្នានៅខាងក្នុងគ្នា (Nested comments) ព្រោះវានឹងបង្កកំហុសរចនាសម្ព័ន្ធកូដ (Compile errors)!`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // This is a single-line comment
    cout << "Comments help developers read code!" << endl;
    
    /* This is a multi-line comment.
       We can write as many lines as we want here.
       The compiler won't run this. */
    cout << "Execution complete." << endl;
    return 0;
}`
  },
  {
    id: "cpp-variables",
    title: {
      en: "C++ Variables",
      km: "អថេរ C++"
    },
    content: {
      en: `### Declaring Variables
Variables are containers for storing data values. In C++, you must declare the variable type explicitly before assigning value:

### Syntax:
\`\`\`cpp
type variableName = value;
\`\`\`

### Common Primitive Types:
- \`int\`: Stores whole numbers (e.g., \`15\`, \`-40\`).
- \`double\`: Stores floating-point fractional numbers (e.g., \`19.99\`).
- \`char\`: Stores single characters inside single quotes (e.g., \`'A'\`).
- \`string\`: Stores text inside double quotes (e.g., \`"Hello"\`). Requires \`#include <string>\`.
- \`bool\`: Stores truth states (\`true\` or \`false\`).

> **Tip:** Use \`const\` before a declaration if you want to make it read-only (unmodifiable), such as \`const double PI = 3.14159;\`.`,
      km: `### ការប្រកាសបង្កើតអថេរ (Variables)
អថេរគឺជាប្រអប់ ឬកុងតឺន័រសម្រាប់រក្សាទុកទិន្នន័យ។ នៅក្នុង C++ អ្នកត្រូវតែបញ្ជាក់ប្រភេទអថេរឱ្យបានច្បាស់លាស់មុនពេលផ្តល់តម្លៃ៖

### រូបមន្ត៖
\`\`\`cpp
ប្រភេទអថេរ ឈ្មោះអថេរ = តម្លៃ;
\`\`\`

### ប្រភេទមូលដ្ឋានពេញនិយម៖
- \`int\`: រក្សាទុកចំនួនគត់ (ឧ. \`15\`, \`-40\`)។
- \`double\`: រក្សាទុកចំនួនទសភាគ (ឧ. \`19.99\`)។
- \`char\`: រក្សាទុកតួអក្សរតែមួយគត់ នៅក្នុងសញ្ញាសម្រង់តែមួយ \`'A'\`។
- \`string\`: រក្សាទុកអត្ថបទវែង នៅក្នុងសញ្ញាសម្រង់ពីរ \`"Hello"\`។ (ត្រូវប្រើ \`#include <string>\`)។
- \`bool\`: រក្សាទុកស្ថានភាពពិត ឬមិនពិត (\`true\` ឬ \`false\`)។

> **គន្លឹះ:** ប្រើប្រាស់ពាក្យគន្លឹះ \`const\` ពីមុខប្រភេទអថេរ ប្រសិនបើអ្នកចង់ឱ្យអថេរនោះជាតម្លៃអានតែមួយមុខ និងមិនអាចផ្លាស់ប្តូរបាន (ដូចជា \`const double PI = 3.14159;\`)។`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int count = 5;
    double price = 9.99;
    char grade = 'A';
    string message = "Learn C++ Fast";
    bool isCompleted = true;
    
    const double PI = 3.14159;
    // PI = 5.0; // Uncommenting this will trigger a compile error!

    cout << "Message: " << message << "\\n";
    cout << "Total Price: $" << (count * price) << "\\n";
    cout << "Grade: " << grade << " | Pi is: " << PI << "\\n";
    return 0;
}`
  },
  {
    id: "cpp-user-input",
    title: {
      en: "C++ User Input",
      km: "ការបញ្ចូលព័ត៌មានពីអ្នកប្រើប្រាស់"
    },
    content: {
      en: `### Reading Input using cin
In C++, standard input is read from the keyboard using the extraction operator \`>>\` alongside \`cin\` (character input):

### Syntax:
\`\`\`cpp
int x;
cin >> x; // Waits for user to type a number and hit Enter
\`\`\`

### Note on extraction \`>>\`:
- It extracts values based on whitespace. If you type \`John Doe\`, reading a single string with \`cin >> str\` will only extract \`John\` because the space is treated as a separator.
- To read an entire line of text containing spaces, we use the \`getline()\` function instead (which we will learn in the strings lesson!).

> **Tip:** It's good practice to print a prompt message using \`cout\` before calling \`cin\` so the user knows what to type!`,
      km: `### ការអានទិន្នន័យបញ្ចូលជាមួយ cin
នៅក្នុង C++ ទិន្នន័យស្តង់ដារបញ្ចូលពីក្តារចុច ត្រូវបានអានដោយប្រើប្រមាណសញ្ញាទាញយក \`>>\` ជាមួយ \`cin\` (character input)៖

### រូបមន្ត៖
\`\`\`cpp
int x;
cin >> x; // រង់ចាំអ្នកប្រើប្រាស់វាយបញ្ចូលចំនួនគត់ រួចចុច Enter
\`\`\`

### ចំណាំលើការទាញយក \`>>\`៖
- វាបំបែកតម្លៃផ្អែកលើចន្លោះទទេ (Whitespace)។ ប្រសិនបើអ្នកវាយ \`John Doe\` ហើយអានអថេរ string តាមរយៈ \`cin >> str\` វានឹងយកតែពាក្យ \`John\` ប៉ុណ្ណោះ ព្រោះវាចាត់ទុកដកឃ្លាជាចំណុចបញ្ចប់។
- ដើម្បីអានអត្ថបទពេញមួយបន្ទាត់ដែលមានដកឃ្លា យើងប្រើប្រាស់អនុគមន៍ \`getline()\` ជំនួសវិញ (យើងនឹងសិក្សាក្នុងមេរៀន Strings!)។

> **គន្លឹះ:** ជាទម្លាប់ល្អ យើងគួរប្រើ \`cout\` បង្ហាញសារណែនាំដំបូងសិន មុននឹងហៅប្រើប្រាស់ \`cin\` ដើម្បីឱ្យអ្នកប្រើប្រាស់ដឹងថាត្រូវវាយអ្វី!`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    int length, width;
    
    cout << "Enter rectangle length: ";
    length = 10; // In this sandbox environment, we pre-set mock input variables
    cout << length << "\\n";
    
    cout << "Enter rectangle width: ";
    width = 5;
    cout << width << "\\n";
    
    int area = length * width;
    cout << "Calculated Rectangle Area: " << area << endl;
    return 0;
}`
  },
  {
    id: "cpp-data-types",
    title: {
      en: "C++ Data Types",
      km: "ប្រភេទទិន្នន័យ C++"
    },
    content: {
      en: `### Data Type Memory Representation
Each variable type occupies a specific size in memory, which dictates the range of values it can store. You can query sizes in bytes using \`sizeof()\`:

| Type | Size | Range |
|---|---|---|
| \`bool\` | 1 byte | \`true\` or \`false\` |
| \`char\` | 1 byte | -128 to 127 |
| \`int\` | 4 bytes | -2 billion to 2 billion |
| \`float\` | 4 bytes | 7 decimal digits of precision |
| \`double\` | 8 bytes | 15 decimal digits of precision |

### Modifiers:
C++ lets you use prefixes to adjust ranges:
- \`unsigned\`: Only stores positive values (doubles the positive range capacity).
- \`short\`: Limits size to 2 bytes (saves memory).
- \`long\`: Ensures larger size capacity (often 8 bytes for integers on modern systems).

> **Tip:** Using \`sizeof()\` dynamically on different data types is excellent for validating alignment and architectural size changes across machines.`,
      km: `### ទំហំមេម៉ូរីរបស់ប្រភេទទិន្នន័យ
អថេរនីមួយៗប្រើប្រាស់ទំហំមេម៉ូរីខុសៗគ្នា ដែលកំណត់ព្រំដែននៃតម្លៃដែលអាចរក្សាទុកបាន។ អ្នកអាចស្វែងរកទំហំគិតជាបៃ (Bytes) ដោយប្រើប្រាស់ \`sizeof()\`៖

| ប្រភេទ | ទំហំ | ដែនតម្លៃ |
|---|---|---|
| \`bool\` | 1 byte | \`true\` ឬ \`false\` |
| \`char\` | 1 byte | -128 ដល់ 127 |
| \`int\` | 4 bytes | ប្រមាណ -២ពាន់លាន ដល់ ២ពាន់លាន |
| \`float\` | 4 bytes | ភាពត្រឹមត្រូវក្រោយក្បៀស ៧ខ្ទង់ |
| \`double\` | 8 bytes | ភាពត្រឹមត្រូវក្រោយក្បៀស ១៥ខ្ទង់ |

### បុព្វបទកែប្រែ (Modifiers)៖
C++ អនុញ្ញាតឱ្យប្រើប្រាស់ពាក្យបន្ថែមពីមុខដើម្បីសម្រួលដែនទិន្នន័យ៖
- \`unsigned\`: ទុកតែចំនួនវិជ្ជមានប៉ុណ្ណោះ (កើនទំហំពីរដងសម្រាប់ផ្នែកវិជ្ជមាន)។
- \`short\`: បង្រួមទំហំមកត្រឹម ២ បៃ (សន្សំសំចៃមេម៉ូរី)។
- \`long\`: បន្ថែមទំហំផ្ទុកឱ្យធំជាងមុន (ជាទូទៅ ៨ បៃ លើប្រព័ន្ធម៉ាស៊ីនទំនើប)។

> **គន្លឹះ:** ការប្រើប្រាស់ \`sizeof()\` ដើម្បីវាស់ទំហំមេម៉ូរី គឺមានសារៈសំខាន់ខ្លាំងក្នុងការសរសេរកូដកម្រិតប្រព័ន្ធ និងការសម្រួលល្បឿនមេម៉ូរី។`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    cout << "Size of char: " << sizeof(char) << " byte\\n";
    cout << "Size of int: " << sizeof(int) << " bytes\\n";
    cout << "Size of double: " << sizeof(double) << " bytes\\n";
    cout << "Size of short int: " << sizeof(short int) << " bytes\\n";
    cout << "Size of long int: " << sizeof(long int) << " bytes\\n";
    return 0;
}`
  },
  {
    id: "cpp-operators",
    title: {
      en: "C++ Operators",
      km: "ប្រមាណសញ្ញា C++"
    },
    content: {
      en: `### C++ Operators
Operators are symbols used to perform computations on variables and values.

### 1. Arithmetic Operators:
- Addition (\`+\`), Subtraction (\`-\`), Multiplication (\`*\`), Division (\`/\`).
- Modulo (\`%\`): Returns division remainder (only works on integers!).

### 2. Assignment & Compound Operators:
- \`=\`, \`+=\`, \`-=\`, \`*=\`, \`/=\`. E.g., \`x += 5\` is equivalent to \`x = x + 5\`.

### 3. Comparison Operators (Returns boolean):
- Equal to (\`==\`), Not equal (\`!=\`), Greater than (\`>\`), Less than (\`<\`), \`>=\`, \`<=\`.

### 4. Logical Operators:
- Logical AND (\`&&\`), Logical OR (\`||\`), Logical NOT (\`!\`).

> **Warning:** Be careful with integer division! \`5 / 2\` in C++ evaluates to \`2\` because both numbers are integers. To get \`2.5\`, at least one operand must be a double: \`5.0 / 2\`.`,
      km: `### ប្រមាណសញ្ញា C++ (Operators)
ប្រមាណសញ្ញាគឺជានិមិត្តសញ្ញាសម្រាប់គណនា ឬរៀបចំទិន្នន័យលើអថេរ និងតម្លៃនានា។

### ១. ប្រមាណសញ្ញាគណិតវិទ្យា (Arithmetic)៖
- បូក (\`+\`), ដក (\`-\`), គុណ (\`*\`), ចែក (\`/\`)។
- Modulo (\`%\`): ស្វែងរកសំណល់នៃការចែក (ប្រើប្រាស់បានតែលើចំនួនគត់ប៉ុណ្ណោះ!)។

### ២. ប្រមាណសញ្ញាផ្តល់តម្លៃ និងតម្រួត (Assignment)៖
- \`=\`, \`+=\`, \`-=\`, \`*=\`, \`/=\`។ ឧទាហរណ៍ \`x += 5\` ស្មើនឹង \`x = x + 5\`។

### ៣. ប្រមាណសញ្ញាប្រៀបធៀប (Comparison - ផ្តល់លទ្ធផលជា bool)៖
- ស្មើ (\`==\`), មិនស្មើ (\`!=\`), ធំជាង (\`>\`), តូចជាង (\`<\`), \`>=\`, \`<=\`។

### ៤. ប្រមាណសញ្ញាតក្កវិទ្យា (Logical)៖
- និទស្សន្ត AND (\`&&\`), និទស្សន្ត OR (\`||\`), និទស្សន្តបដិសេធ NOT (\`!\`)។

> **ការព្រមាន:** សូមប្រុងប្រយ័ត្នការចែកចំនួនគត់! \`5 / 2\` នៅក្នុង C++ នឹងស្មើ \`2\` ព្រោះធាតុទាំងពីរជាចំនួនគត់។ ដើម្បីទទួលបាន \`2.5\` ធាតុម្ខាងត្រូវតែជាទសភាគ៖ \`5.0 / 2\`។`
    },
    starterCode: `#include <iostream>
using namespace std;

int main() {
    int a = 10;
    int b = 3;
    
    cout << "a + b = " << (a + b) << "\\n";
    cout << "Modulo a % b = " << (a % b) << "\\n";
    
    // Float division demonstration
    double div1 = a / b;
    double div2 = (double)a / b;
    cout << "Integer division: " << div1 << "\\n";
    cout << "Float division: " << div2 << "\\n";
    
    bool test = (a > 5) && (b < 5);
    cout << "Logical test result (1 is true, 0 is false): " << test << "\\n";
    return 0;
}`
  },
  {
    id: "cpp-strings",
    title: {
      en: "C++ Strings",
      km: "ខ្សែអក្សរ C++"
    },
    content: {
      en: `### Working with Text Strings
In C++, strings are represented using the \`std::string\` object class, which belongs to the library header \`<string>\`.

### Fundamental String Operations:
- **Concatenation:** You can use the \`+\` operator to join strings.
- **Length:** Use the \`.length()\` or \`.size()\` method to count characters.
- **Accessing Characters:** Use square brackets with 0-based index. E.g., \`str[0]\` gets the first character.
- **Safe Input Reading:** \`cin >> str\` stops reading at the first space. To read an entire line including spaces, use:
  \`\`\`cpp
  string fullname;
  getline(cin, fullname);
  \`\`\`

> **Tip:** Strings in C++ are mutable, meaning you can modify individual characters directly (e.g., \`str[0] = 'Z';\`), unlike in Python or Java where strings are immutable!`,
      km: `### ការប្រើប្រាស់ខ្សែអក្សរ (Strings)
នៅក្នុង C++ ខ្សែអក្សរត្រូវបានតំណាងដោយថ្នាក់វត្ថុ \`std::string\` ដែលស្ថិតនៅក្នុង Header \`<string>\`។

### ប្រតិបត្តិការមូលដ្ឋានលើ Strings៖
- **ការភ្ជាប់អក្សរ (Concatenation):** អ្នកអាចប្រើប្រាស់ប្រមាណសញ្ញា \`+\` ដើម្បីភ្ជាប់ខ្សែអក្សរចូលគ្នា។
- **ប្រវែងអក្សរ (Length):** ប្រើប្រាស់វិធីសាស្ត្រ \`.length()\` ឬ \`.size()\` ដើម្បីរាប់ចំនួនតួអក្សរ។
- **ការចូលទៅកាន់តួអក្សរ:** ប្រើសញ្ញាគ្នាបចតុកោណ \`[]\` ជាមួយសន្ទស្សន៍ចាប់ផ្តើមពី 0។ ឧទាហរណ៍ \`str[0]\` គឺយកតួអក្សរដំបូង។
- **ការអានអត្ថបទវែងមានដកឃ្លា:** \`cin >> str\` នឹងឈប់អានពេលជួបដកឃ្លាដំបូង។ ដើម្បីអានមួយបន្ទាត់ពេញ សូមប្រើប្រាស់៖
  \`\`\`cpp
  string fullname;
  getline(cin, fullname);
  \`\`\`

> **គន្លឹះ:** ខ្សែអក្សរនៅក្នុង C++ អាចកែប្រែបានដោយផ្ទាល់ (Mutable) មានន័យថាអ្នកអាចប្តូរតួអក្សរនីមួយៗភ្លាមៗ (ឧ. \`str[0] = 'Z';\`) ដែលខុសពីភាសា Python ឬ Java ដែលខ្សែអក្សរមិនអាចផ្លាស់ប្តូរបាន (Immutable)។`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string first = "Angkor";
    string second = "Wat";
    
    // Concatenate
    string full = first + " " + second;
    cout << "Full Name: " << full << "\\n";
    cout << "String Length: " << full.length() << " characters\\n";
    
    // Access and modify
    cout << "First character: " << full[0] << "\\n";
    full[0] = 'a'; // C++ string is mutable!
    cout << "Modified Name: " << full << "\\n";
    return 0;
}`
  },
  {
    id: "cpp-math",
    title: {
      en: "C++ Math",
      km: "គណិតវិទ្យា C++"
    },
    content: {
      en: `### C++ Mathematical Operations
C++ offers a comprehensive mathematical framework inside the standard library.

### 1. Simple Built-in Functions:
- \`max(x, y)\`: Returns the largest value.
- \`min(x, y)\`: Returns the smallest value.

### 2. Standard Mathematical Functions (\`<cmath>\`):
Import \`#include <cmath>\` to unlock advanced trigonometry and power operations:
- \`sqrt(x)\`: Square root.
- \`pow(x, y)\`: Returns $x$ raised to the power of $y$ ($x^y$).
- \`round(x)\`: Rounds floating-point numbers to the nearest whole number.
- \`abs(x)\`: Absolute positive value.

> **Note:** Math functions in \`<cmath>\` usually accept and return \`double\` or \`float\` values to preserve precise decimal positions.`,
      km: `### គណនីគណិតវិទ្យាក្នុង C++
C++ ផ្តល់នូវបណ្តុំអនុគមន៍គណិតវិទ្យាយ៉ាងសំបូរបែបនៅក្នុងបណ្ណាល័យស្តង់ដារ។

### ១. អនុគមន៍សាមញ្ញស្រាប់៖
- \`max(x, y)\`: ស្វែងរកតម្លៃធំបំផុត។
- \`min(x, y)\`: ស្វែងរកតម្លៃតូចបំផុត។

### ២. អនុគមន៍គណិតវិទ្យាជឿនលឿន (\`<cmath>\`)៖
នាំចូល \`#include <cmath>\` ដើម្បីបើកដំណើរការមុខងារបន្ថែម៖
- \`sqrt(x)\`: រកឫសការេ។
- \`pow(x, y)\`: គណនាស្វ័យគុណ ($x$ ស្វ័យគុណ $y$ ឬ $x^y$)។
- \`round(x)\`: បង្គត់ចំនួនទសភាគទៅរកចំនួនគត់ជិតបំផុត។
- \`abs(x)\`: ស្វែងរកតម្លៃដាច់ខាត (ចំនួនវិជ្ជមានជានិច្ច)។

> **ចំណាំ:** អនុគមន៍គណិតវិទ្យាក្នុង \`<cmath>\` ភាគច្រើនទទួលយក និងផ្តល់ត្រឡប់មកវិញនូវប្រភេទ \`double\` ឬ \`float\` ដើម្បីរក្សាភាពច្បាស់លាស់នៃលេខក្បៀស។`
    },
    starterCode: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    cout << "Max of 15 and 45 is: " << max(15, 45) << "\\n";
    cout << "Min of 15 and 45 is: " << min(15, 45) << "\\n";
    
    // <cmath> functions
    cout << "Square root of 64: " << sqrt(64) << "\\n";
    cout << "2 raised to power 5: " << pow(2, 5) << "\\n";
    cout << "Round of 4.6: " << round(4.6) << "\\n";
    cout << "Absolute of -150: " << abs(-150) << "\\n";
    return 0;
}`
  }
];
