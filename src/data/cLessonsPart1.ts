import { Lesson } from '../types';

export const cLessonsPart1: Lesson[] = [
  {
    id: "c-home",
    title: { en: "C HOME", km: "ទំព័រដើម C" },
    content: {
      en: `# C HOME

Welcome to the comprehensive C Programming course! C is a powerful, highly efficient, and foundational general-purpose programming language. Developed in 1972 by Dennis Ritchie at Bell Labs, C has influenced almost every modern language, including C++, Java, C#, and JavaScript.

Learning C gives you a deep, direct understanding of memory management, computer architecture, and the low-level interactions between code and hardware.

> **Tip:** C is the undisputed king of systems programming. It is the core language behind major operating systems (like Linux, Windows, macOS), databases (like PostgreSQL, MySQL), and embedded firmware.

### Common Syntax
\`\`\`c
#include <stdio.h>

int main() {
    printf("Welcome to Sabaicode C Course!\\n");
    return 0;
}
\`\`\`

### Worked Example
Below is a simple starter template representing how a standard C program compiles and executes in our system:
\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello, Programmer!\\n");
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Hello, Programmer!
\`\`\``,
      km: `# ទំព័រដើម C

សូមស្វាគមន៍មកកាន់វគ្គសិក្សាភាសា C ដ៏ទូលំទូលាយ! ភាសា C គឺជាភាសាសរសេរកម្មវិធីដែលមានថាមពល ប្រសិទ្ធភាពខ្ពស់ និងជាគ្រឹះនៃភាសាទំនើបៗជាច្រើន។ បង្កើតឡើងក្នុងឆ្នាំ ១៩៧២ ដោយលោក Dennis Ritchie នៅមន្ទីរពិសោធន៍ Bell Labs ភាសា C បានជះឥទ្ធិពលលើភាសាស្ទើរតែទាំងអស់ដូចជា C++, Java, C# និង JavaScript។

ការសិក្សាភាសា C ជួយឱ្យអ្នកយល់ច្បាស់ពីការគ្រប់គ្រងការចងចាំ (Memory Management) ស្ថាបត្យកម្មកុំព្យូទ័រ និងរបៀបដែលកូដរបស់អ្នកធ្វើការផ្ទាល់ជាមួយ Hardware។

> **គន្លឹះ៖** ភាសា C គឺជាស្តេចនៃការសរសេរប្រព័ន្ធកម្មវិធី (Systems Programming)។ វាជាភាសាស្នូលនៅពីក្រោយប្រព័ន្ធប្រតិបត្តិការធំៗ (ដូចជា Linux, Windows, macOS) និងមូលដ្ឋានទិន្នន័យ (ដូចជា PostgreSQL, MySQL)។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`c
#include <stdio.h>

int main() {
    printf("Welcome to Sabaicode C Course!\\n");
    return 0;
}
\`\`\`

### ឧទាហរណ៍អនុវត្ត
ខាងក្រោមនេះគឺជាគំរូកម្មវិធី C សាមញ្ញមួយបង្ហាញពីរបៀបដំណើរការកូដ៖
\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello, Programmer!\\n");
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Hello, Programmer!
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    printf("Welcome to Sabaicode C Course!\\n");
    return 0;
}`
  },
  {
    id: "c-intro",
    title: { en: "C Intro", km: "សេចក្តីផ្តើម C" },
    content: {
      en: `# C Intro

C is a compiled, low-level language designed for maximum runtime speed and minimal memory footprint. Unlike interpreted languages where code runs via virtual machines, C code compiles directly into machine-specific native instructions.

Understanding C helps developers appreciate the physical costs of operations, such as memory allocation, variables stack lifecycle, and instruction sequences.

> **Tip:** C has zero runtime overhead. There is no automatic garbage collector or virtual machine. You are in total control of memory management, which provides extreme speed but demands higher responsibility.

### Worked Example
A simple program to verify memory word size and integer boundaries on your current architecture:
\`\`\`c
#include <stdio.h>

int main() {
    printf("Size of integer on this machine: %lu bytes\\n", sizeof(int));
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Size of integer on this machine: 4 bytes
\`\`\``,
      km: `# សេចក្តីផ្តើម C

ភាសា C គឺជាភាសាប្រភេទ Compiled, low-level ដែលរចនាឡើងដើម្បីផ្តល់ល្បឿនដំណើរការលឿនបំផុត និងប្រើប្រាស់ការចងចាំតិចតួចបំផុត។ ខុសពីភាសាប្រភេទ Interpreted ដែលកូដត្រូវរត់លើម៉ាស៊ីននិម្មិត (Virtual Machine) កូដភាសា C ត្រូវបានបកប្រែ (Compile) ដោយផ្ទាល់ទៅជាកូដម៉ាស៊ីន (Machine Instructions)។

ការយល់ដឹងពីភាសា C ជួយអ្នកសរសេរកម្មវិធីយល់ដឹងពីរបៀបដំណើរការជាក់ស្តែងរបស់កុំព្យូទ័រ ដូចជាការបែងចែកការចងចាំ វដ្តជីវិតរបស់អថេរ និងលំដាប់លំដោយនៃកូដបញ្ជា។

> **គន្លឹះ៖** ភាសា C មិនមាន Runtime Overhead ឡើយ។ វាមិនមានប្រព័ន្ធសម្អាតការចងចាំដោយស្វ័យប្រវត្ត (Garbage Collector) នោះទេ។ អ្នកមានសិទ្ធិគ្រប់គ្រងការចងចាំទាំងស្រុង ដែលនាំមកនូវល្បឿនលឿនអស្ចារ្យ ប៉ុន្តែទាមទារការទទួលខុសត្រូវខ្ពស់។

### ឧទាហរណ៍អនុវត្ត
កម្មវិធីសាមញ្ញមួយដើម្បីបញ្ជាក់ពីទំហំផ្ទុកប្រភេទ Integer លើកុំព្យូទ័ររបស់អ្នក៖
\`\`\`c
#include <stdio.h>

int main() {
    printf("Size of integer on this machine: %lu bytes\\n", sizeof(int));
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Size of integer on this machine: 4 bytes
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    printf("Size of integer on this machine: %lu bytes\\n", sizeof(int));
    return 0;
}`
  },
  {
    id: "c-get-started",
    title: { en: "C Get Started", km: "ការចាប់ផ្តើម C" },
    content: {
      en: `# C Get Started

To start writing C code locally, you need two essential elements: a text editor and a C compiler. Popular compilers include **GCC** (GNU Compiler Collection) and **Clang**.

In our interactive environment, we host a compiler directly in the cloud so you can run your code instantly without local installation.

> **Tip:** On macOS, you can install the compiler using \`xcode-select --install\`. On Ubuntu/Linux, use \`sudo apt install build-essential\`. On Windows, you can install **MinGW-w64** to get GCC support.

### Compilation Command (Terminal)
To compile a file named \`program.c\` locally, you would run:
\`\`\`bash
gcc program.c -o program
./program
\`\`\`

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    printf("GCC Compiler is ready to run C code!\\n");
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
GCC Compiler is ready to run C code!
\`\`\``,
      km: `# ការចាប់ផ្តើម C

ដើម្បីចាប់ផ្តើមសរសេរកូដ C នៅលើម៉ាស៊ីនផ្ទាល់ខ្លួន អ្នកត្រូវការធាតុផ្សំពីរគឺ៖ កម្មវិធីសរសេរកូដ (Text Editor) និងម៉ាស៊ីនបកប្រែកូដ (C Compiler)។ ម៉ាស៊ីនបកប្រែកូដដែលពេញនិយមរួមមាន **GCC** និង **Clang**។

នៅក្នុងទីលានអនុវត្តកូដរបស់យើង យើងបានរៀបចំ Compiler លើ Cloud រួចជាស្រេច ដើម្បីឱ្យអ្នកអាចដំណើរការកូដបានភ្លាមៗដោយមិនបាច់ដំឡើងអ្វីទាំងអស់។

> **គន្លឹះ៖** លើប្រព័ន្ធ macOS អ្នកអាចដំឡើង compiler ដោយប្រើ \`xcode-select --install\`។ លើ Ubuntu/Linux ប្រើ \`sudo apt install build-essential\`។ លើ Windows អ្នកអាចដំឡើង **MinGW-w64** ដើម្បីទទួលបាន GCC។

### ពាក្យបញ្ជាបកប្រែកូដ (Terminal)
ដើម្បី compile ឯកសារឈ្មោះ \`program.c\` លើម៉ាស៊ីន៖
\`\`\`bash
gcc program.c -o program
./program
\`\`\`

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    printf("GCC Compiler is ready to run C code!\\n");
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
GCC Compiler is ready to run C code!
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    printf("GCC Compiler is ready to run C code!\\n");
    return 0;
}`
  },
  {
    id: "c-syntax",
    title: { en: "C Syntax", km: "វាក្យសម្ពន្ធ C" },
    content: {
      en: `# C Syntax

Let us break down the structure of a standard C program line-by-line so you can understand the syntax grammar rules:

1. \`#include <stdio.h>\`: A header file library that allows us to use input and output functions (like \`printf\`).
2. \`int main()\`: The main starting function of every C program. Execution always starts from this point.
3. \`{ ... }\`: Curly brackets define the beginning and end of a block of code.
4. \`printf(...);\`: A function used to print text to the screen.
5. \`return 0;\`: Ends the \`main()\` function and returns a success status (0) to the operating system.

> **Tip:** Every statement in C must end with a semicolon (\`;\`). Forgetting a semicolon is one of the most common causes of compilation errors!

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    printf("Semicolons are mandatory at the end of statements!\\n");
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Semicolons are mandatory at the end of statements!
\`\`\``,
      km: `# វាក្យសម្ពន្ធ C

ចូរស្វែងយល់ពីរចនាសម្ព័ន្ធនៃកម្មវិធី C ស្ដង់ដារតាមលំដាប់លំដោយ៖

1. \`#include <stdio.h>\`៖ ជាបណ្ណាល័យឯកសារក្បាល (Header) ដែលអនុញ្ញាតឱ្យយើងប្រើប្រាស់មុខងារបញ្ចូល និងបង្ហាញទិន្នន័យ (ដូចជា \`printf\`)។
2. \`int main()\`៖ ជាអនុគមន៍ចម្បងដែលរាល់កម្មវិធី C ទាំងអស់ត្រូវតែមាន។ ការដំណើរការកម្មវិធីចាប់ផ្តើមពីទីនេះជានិច្ច។
3. \`{ ... }\`៖ សញ្ញាធ្មេញកណ្តុរសម្រាប់កំណត់ការចាប់ផ្តើម និងបញ្ចប់នៃប្លុកកូដ។
4. \`printf(...);\`៖ អនុគមន៍សម្រាប់បោះពុម្ពអត្ថបទទៅលើអេក្រង់។
5. \`return 0;\`៖ បញ្ចប់អនុគមន៍ \`main()\` និងប្រគល់តម្លៃជោគជ័យ (0) ទៅកាន់ប្រព័ន្ធប្រតិបត្តិការ។

> **គន្លឹះ៖** រាល់សេចក្តីថ្លែងការណ៍ (Statement) ក្នុង C ត្រូវតែបញ្ចប់ដោយសញ្ញាក្បៀសចំនុច (\`;\`)។ ការភ្លេចដាក់សញ្ញានេះ គឺជាមូលហេតុទូទៅបំផុតនៃកំហុសពេល Compile!

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    printf("Semicolons are mandatory at the end of statements!\\n");
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Semicolons are mandatory at the end of statements!
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    printf("Checking line syntax.\\n");
    return 0;
}`
  },
  {
    id: "c-output",
    title: { en: "C Output", km: "ការបង្ហាញលទ្ធផល C" },
    content: {
      en: `# C Output

In C, we display output using the \`printf()\` function. It can print simple text strings, format numbers, characters, and escape control characters.

To print a new line, we must explicitly insert the escape character sequence \`\\n\`.

> **Tip:** You can write multiple \`printf()\` statements, but they will print on the same line unless you use \`\\n\`. Other escape sequences include \`\\t\` for a horizontal tab, and \`\\\\\` to print a literal backslash.

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    printf("Line One.\\n");
    printf("Line Two.\\tTabbed space here.\\n");
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Line One.
Line Two.	Tabbed space here.
\`\`\``,
      km: `# ការបង្ហាញលទ្ធផល C

នៅក្នុង C យើងបង្ហាញលទ្ធផលដោយប្រើប្រាស់អនុគមន៍ \`printf()\`។ វាអាចបោះពុម្ពអត្ថបទធម្មតា ម៉ូដលេខ តួអក្សរ និងតួអក្សរបញ្ជាពិសេសៗ។

ដើម្បីបោះពុម្ពចុះបន្ទាត់ថ្មី យើងត្រូវបញ្ចូលនិមិត្តសញ្ញា \`\\n\`។

> **គន្លឹះ៖** ទោះបីជាសរសេរ \`printf()\` ច្រើនដងក៏ដោយ វានឹងបង្ហាញជាប់គ្នាក្នុងមួយបន្ទាត់ ដរាបណាអ្នកមិនបានប្រើប្រាស់ \`\\n\`។ និមិត្តសញ្ញាបញ្ជាផ្សេងទៀតមានដូចជា \`\\t\` (សម្រាប់ឃ្លាតមួយថេប Tab) និង \`\\\\\` (សម្រាប់បង្ហាញសញ្ញាខ្វែងថយក្រោយ)។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    printf("Line One.\\n");
    printf("Line Two.\\tTabbed space here.\\n");
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Line One.
Line Two.	Tabbed space here.
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    printf("Hello\\n");
    printf("World!\\n");
    return 0;
}`
  },
  {
    id: "c-comments",
    title: { en: "C Comments", km: "មតិយោបល់កូដ C" },
    content: {
      en: `# C Comments

Comments are non-executable explanatory notes written inside the code to make it readable for human developers. The compiler ignores them completely.

C supports two types of comments:
- **Single-line Comments:** Start with double slashes \`//\`. Everything from the slashes to the end of that line is ignored.
- **Multi-line Comments:** Start with \`/*\` and end with \`*/\`. Everything inside these boundaries is ignored.

> **Tip:** Comments are useful for documenting function parameters, explaining complex mathematical formulas, or temporarily disabling blocks of code during active debugging.

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    // This is a single line comment
    printf("Comments do not affect compilation.\\n");
    /* This is a multi-line comment
       that spans across multiple lines of text. */
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Comments do not affect compilation.
\`\`\``,
      km: `# មតិយោបល់កូដ C

Comments គឺជាការកត់សម្គាល់បន្ថែមពន្យល់ពីដំណើរការរបស់កូដ ដែលម៉ាស៊ីនបកប្រែកូដមិនអាន ឬដំណើរការឡើយ។ វាត្រូវបានសរសេរឡើងដើម្បីឱ្យមនុស្សងាយស្រួលយល់។

C គាំទ្រមតិយោបល់ពីរប្រភេទ៖
- **មតិយោបល់មួយបន្ទាត់ (Single-line)៖** ចាប់ផ្តើមដោយសញ្ញា \`//\`។ រាល់អត្ថបទចាប់ពីសញ្ញានេះដល់ចុងបន្ទាត់នឹងត្រូវរំលងចោល។
- **មតិយោបល់ច្រើនបន្ទាត់ (Multi-line)៖** ចាប់ផ្តើមដោយ \`/*\` និងបញ្ចប់ដោយ \`*/\`។

> **គន្លឹះ៖** Comments មានសារៈសំខាន់ណាស់ក្នុងការចងក្រងឯកសារ ណែនាំពីរបៀបប្រើប៉ារ៉ាម៉ែត្រ ឬបិទកូដមួយផ្នែកបណ្តោះអាសន្នពេលកំពុងស្វែងរកកំហុស (Debugging)។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    // នេះជា comment មួយបន្ទាត់
    printf("Comments do not affect compilation.\\n");
    /* នេះជា comment 
       ច្រើនបន្ទាត់ */
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Comments do not affect compilation.
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    // Print a greeting
    printf("Hello with comments!\\n");
    return 0;
}`
  },
  {
    id: "c-variables",
    title: { en: "C Variables", km: "អថេរ C" },
    content: {
      en: `# C Variables

Variables are named storage containers linked to memory cells. In C, you must declare a variable's data type before allocating or assigning it.

Format specifiers like \`%d\` (integer), \`%f\` (float), and \`%c\` (character) are used inside \`printf()\` to embed variables values into output.

> **Tip:** In C, variable declaration requires a strict type signature. You cannot change a variable's type after declaration.

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    int age = 20;
    float price = 5.99;
    char grade = 'A';

    printf("Age: %d\\n", age);
    printf("Price: %.2f\\n", price);
    printf("Grade: %c\\n", grade);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Age: 20
Price: 5.99
Grade: 'A'
\`\`\``,
      km: `# អថេរ C

អថេរ (Variables) គឺជាឈ្មោះសម្គាល់កន្លែងផ្ទុកទិន្នន័យក្នុង Memory។ នៅក្នុង C អ្នកត្រូវតែប្រកាសប្រភេទរបស់អថេរ (Data Type) មុនពេលប្រគល់តម្លៃឱ្យវា។

និមិត្តសញ្ញាជំនួសទម្រង់ (Format Specifiers) ដូចជា \`%d\` (សម្រាប់ចំនួនគត់ int), \`%f\` (សម្រាប់ចំនួនទសភាគ float), និង \`%c\` (សម្រាប់តួអក្សរ char) ត្រូវបានប្រើប្រាស់ក្នុង \`printf()\` ដើម្បីទាញយកតម្លៃអថេរមកបង្ហាញ។

> **គន្លឹះ៖** នៅក្នុង C ការប្រកាសអថេរទាមទារប្រភេទច្បាស់លាស់។ អ្នកមិនអាចផ្លាស់ប្តូរប្រភេទទិន្នន័យរបស់អថេរបានឡើយ បន្ទាប់ពីវាត្រូវបានប្រកាសរួច។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    int age = 20;
    float price = 5.99;
    char grade = 'A';

    printf("Age: %d\\n", age);
    printf("Price: %.2f\\n", price);
    printf("Grade: %c\\n", grade);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Age: 20
Price: 5.99
Grade: A
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    int x = 10;
    int y = 20;
    int sum = x + y;
    printf("Sum of %d and %d is %d\\n", x, y, sum);
    return 0;
}`
  },
  {
    id: "c-data-types",
    title: { en: "C Data Types", km: "ប្រភេទទិន្នន័យ C" },
    content: {
      en: `# C Data Types

C possesses a basic set of built-in data types. The actual storage size of these types can vary depending on the target processor architecture:

- \`char\`: 1 byte, stores a single character or ASCII integer code.
- \`int\`: Usually 4 bytes, stores standard signed whole numbers.
- \`float\`: 4 bytes, stores floating-point decimal numbers.
- \`double\`: 8 bytes, stores high-precision decimal numbers.

> **Tip:** You can inspect the exact size of any type or variable on your current computer using the compiled unary operator \`sizeof()\`.

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    printf("Size of char: %lu byte\\n", sizeof(char));
    printf("Size of int: %lu bytes\\n", sizeof(int));
    printf("Size of float: %lu bytes\\n", sizeof(float));
    printf("Size of double: %lu bytes\\n", sizeof(double));
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Size of char: 1 byte
Size of int: 4 bytes
Size of float: 4 bytes
Size of double: 8 bytes
\`\`\``,
      km: `# ប្រភេទទិន្នន័យ C

C មានប្រភេទទិន្នន័យដែលភ្ជាប់មកជាមួយស្រាប់។ ទំហំផ្ទុកជាក់ស្តែងរបស់វាអាចប្រែប្រួលអាស្រ័យលើស្ថាបត្យកម្មកុំព្យូទ័រ៖

- \`char\`៖ ទំហំ ១ បៃ (byte) សម្រាប់ផ្ទុកតួអក្សរតែមួយ ឬកូដ ASCII។
- \`int\`៖ ជាទូទៅទំហំ ៤ បៃ សម្រាប់ផ្ទុកចំនួនគត់ទាំងអវិជ្ជមាន និងវិជ្ជមាន។
- \`float\`៖ ទំហំ ៤ បៃ សម្រាប់ផ្ទុកចំនួនទសភាគ។
- \`double\`៖ ទំហំ ៨ បៃ សម្រាប់ផ្ទុកចំនួនទសភាគដែលមានភាពសុក្រិត្យខ្ពស់ (Precision)។

> **គន្លឹះ៖** អ្នកអាចពិនិត្យមើលទំហំផ្ទុកពិតប្រាកដនៃប្រភេទទិន្នន័យណាមួយនៅលើកុំព្យូទ័ររបស់អ្នក ដោយប្រើប្រាស់ប្រមាណវិធី \`sizeof()\`។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    printf("Size of char: %lu byte\\n", sizeof(char));
    printf("Size of int: %lu bytes\\n", sizeof(int));
    printf("Size of float: %lu bytes\\n", sizeof(float));
    printf("Size of double: %lu bytes\\n", sizeof(double));
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Size of char: 1 byte
Size of int: 4 bytes
Size of float: 4 bytes
Size of double: 8 bytes
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    printf("Char size: %lu\\n", sizeof(char));
    return 0;
}`
  },
  {
    id: "c-type-conversion",
    title: { en: "C Type Conversion", km: "ការបម្លែងប្រភេទ C" },
    content: {
      en: `# C Type Conversion

Type conversion changes a value from one data type to another. C handles this in two ways:

- **Implicit Conversion (Automatic):** The compiler automatically promotes smaller types to larger types (e.g., assigning a \`char\` value to an \`int\` or a float).
- **Explicit Conversion (Manual Casting):** The programmer forces conversion by placing the desired type inside parentheses in front of the value, such as \`(float)\`.

> **Tip:** Manual explicit casting is crucial when dividing two integers to get a decimal result. Division of two integers in C always discards the decimal fraction unless at least one operand is cast to float!

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    int num1 = 5;
    int num2 = 2;
    
    // Integer division (discards decimal part)
    int intDiv = num1 / num2; 
    
    // Explicit type casting to capture the decimal float fraction
    float floatDiv = (float)num1 / num2; 

    printf("Integer Division: %d\\n", intDiv);
    printf("Float Division: %.1f\\n", floatDiv);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Integer Division: 2
Float Division: 2.5
\`\`\``,
      km: `# การបម្លែងប្រភេទ C

ការបម្លែងប្រភេទ (Type Conversion) គឺជាការផ្លាស់ប្តូរតម្លៃពីប្រភេទទិន្នន័យមួយទៅប្រភេទទិន្នន័យមួយទៀត។ C ធ្វើការបម្លែងតាមពីររបៀប៖

- **ការបម្លែងដោយប្រយោល (Implicit - ដោយស្វ័យប្រវត្ត)៖** ម៉ាស៊ីនបកប្រែកូដនឹងតម្លើងប្រភេទទិន្នន័យតូចទៅជាធំដោយស្វ័យប្រវត្ត (ឧទាហរណ៍៖ ការបញ្ជូនតម្លៃ \`char\` ទៅឱ្យ \`int\` ឬ float)។
- **ការបម្លែងដោយផ្ទាល់ (Explicit - កំណត់ដោយដៃ)៖** អ្នកសរសេរកូដបង្ខំឱ្យបម្លែងដោយដាក់ប្រភេទដែលចង់បានក្នុងសញ្ញាវង់ក្រចកនៅពីមុខតម្លៃ ដូចជា \`(float)\`។

> **គន្លឹះ៖** ការបម្លែងប្រភេទដោយដៃមានសារៈសំខាន់ណាស់ក្នុងការចែកចំនួនគត់ពីរដើម្បីទទួលបានលទ្ធផលទសភាគ។ ការចែកចំនួនគត់ពីរក្នុង C នឹងបោះបង់ផ្នែកទសភាគចោលជានិច្ច លុះត្រាតែអ្នកបម្លែងអថេរណាមួយជា float ជាមុន!

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    int num1 = 5;
    int num2 = 2;
    
    int intDiv = num1 / num2; 
    float floatDiv = (float)num1 / num2; 

    printf("Integer Division: %d\\n", intDiv);
    printf("Float Division: %.1f\\n", floatDiv);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Integer Division: 2
Float Division: 2.5
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    int total = 10;
    int count = 4;
    float average = (float)total / count;
    printf("Average: %.2f\\n", average);
    return 0;
}`
  },
  {
    id: "c-constants",
    title: { en: "C Constants", km: "តម្លៃថេរ C" },
    content: {
      en: `# C Constants

If you want to prevent a variable's value from being altered during program execution, you can declare it as a **constant**. 

C provides two methods to declare constants:
1. Using the \`const\` keyword prefix before a variable declaration.
2. Using the \`#define\` preprocessor macro directive at the top level of the file.

> **Tip:** Constant identifiers are traditionally written in uppercase characters to clearly distinguish them from standard mutable variables. Constants declared with \`#define\` do not consume actual system memory because they are replaced globally before compilation.

### Worked Example
\`\`\`c
#include <stdio.h>

#define PI 3.14159

int main() {
    const int MAX_USERS = 100;
    
    printf("Constant PI: %.5f\\n", PI);
    printf("Constant Max Users: %d\\n", MAX_USERS);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Constant PI: 3.14159
Constant Max Users: 100
\`\`\``,
      km: `# តម្លៃថេរ C

ប្រសិនបើអ្នកចង់ការពារមិនឱ្យតម្លៃអថេរមួយត្រូវបានកែប្រែក្នុងពេលដំណើរការកម្មវិធី អ្នកអាចប្រកាសវាជា **តម្លៃថេរ (Constant)**។

C ផ្តល់ជម្រើសពីរក្នុងការបង្កើតតម្លៃថេរ៖
1. ប្រើប្រាស់ពាក្យគន្លឹះ \`const\` នៅពីមុខការប្រកាសអថេរ។
2. ប្រើប្រាស់សេចក្តីណែនាំ preprocessor \`#define\` នៅផ្នែកខាងលើនៃឯកសារ។

> **គន្លឹះ៖** ជាទូទៅ អក្សរធំត្រូវបានប្រើប្រាស់សម្រាប់ដាក់ឈ្មោះ Constant ដើម្បីឱ្យងាយស្រួលសម្គាល់ពីអថេរធម្មតា។ Constants ដែលប្រកាសដោយ \`#define\` មិនប្រើប្រាស់ទំហំចងចាំពិតប្រាកដឡើយ ព្រោះវាត្រូវបានជំនួសដោយតម្លៃផ្ទាល់មុនពេល Compile។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

#define PI 3.14159

int main() {
    const int MAX_USERS = 100;
    
    printf("Constant PI: %.5f\\n", PI);
    printf("Constant Max Users: %d\\n", MAX_USERS);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Constant PI: 3.14159
Constant Max Users: 100
\`\`\``
    },
    starterCode: `#include <stdio.h>

#define TAX_RATE 0.10

int main() {
    const int price = 250;
    double tax = price * TAX_RATE;
    printf("Tax is: %.2f\\n", tax);
    return 0;
}`
  },
  {
    id: "c-operators",
    title: { en: "C Operators", km: "ប្រមាណវិធី C" },
    content: {
      en: `# C Operators

Operators are symbols used to perform operations on values and variables. C groups operators into:

- **Arithmetic Operators:** \`+\` (addition), \`-\` (subtraction), \`*\` (multiplication), \`/\` (division), and \`%\` (modulo modulus remainder).
- **Relational Comparison Operators:** \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`.
- **Logical Operators:** \`&&\` (AND), \`||\` (OR), \`!\` (NOT).

> **Tip:** Modulo (\`%\`) can only be used with integer operands. It calculates the remainder of an integer division.

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    int x = 10;
    int y = 3;
    
    printf("Addition: %d\\n", x + y);
    printf("Remainder (Modulo): %d\\n", x % y);
    printf("Logical AND condition: %d\\n", (x > 5 && y < 5));
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Addition: 13
Remainder (Modulo): 1
Logical AND condition: 1
\`\`\``,
      km: `# ប្រមាណវិធី C

ប្រមាណវិធី (Operators) គឺជានិមិត្តសញ្ញាសម្រាប់គណនាលើតម្លៃ ឬអថេរ។ នៅក្នុង C វាត្រូវបានបែងចែកជា៖

- **ប្រមាណវិធីគណនា (Arithmetic)៖** \`+\`, \`-\`, \`*\`, \`/\`, និង \`%\` (សម្រាប់រកសំណល់ដែលហៅថា Modulo)។
- **ប្រមាណវិធីប្រៀបធៀប (Relational)៖** \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`។
- **ប្រមាណវិធីតក្កវិទ្យា (Logical)៖** \`&&\` (AND), \`||\` (OR), \`!\` (NOT)។

> **គន្លឹះ៖** ប្រមាណវិធីរកសំណល់ (\`%\`) អាចប្រើបានតែជាមួយចំនួនគត់ (Integer) ប៉ុណ្ណោះ។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    int x = 10;
    int y = 3;
    
    printf("Addition: %d\\n", x + y);
    printf("Remainder (Modulo): %d\\n", x % y);
    printf("Logical AND condition: %d\\n", (x > 5 && y < 5));
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Addition: 13
Remainder (Modulo): 1
Logical AND condition: 1
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    int a = 15;
    int b = 4;
    printf("a %% b = %d\\n", a % b);
    return 0;
}`
  },
  {
    id: "c-booleans",
    title: { en: "C Booleans", km: "ប៊ូលីន Booleans C" },
    content: {
      en: `# C Booleans

In standard C (prior to C99), there was no built-in boolean type. Instead, integers represent boolean states:
- **0** represents **false**.
- **Any non-zero value** (typically 1) represents **true**.

With modern C (C99 and later), you can import the \`<stdbool.h>\` library to use the native \`bool\` type with \`true\` and \`false\` keyword definitions.

> **Tip:** When printing booleans using \`printf()\`, they are still represented internally as integers. Printing a boolean using \`%d\` outputs \`1\` for true and \`0\` for false.

### Worked Example
\`\`\`c
#include <stdio.h>
#include <stdbool.h>

int main() {
    bool isCodingFun = true;
    bool isFishFlying = false;

    printf("Is coding fun? %d\\n", isCodingFun);
    printf("Can fish fly? %d\\n", isFishFlying);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Is coding fun? 1
Can fish fly? 0
\`\`\``,
      km: `# ប៊ូលីន Booleans C

នៅក្នុងភាសា C ជំនាន់ដើម វាមិនមានប្រភេទទិន្នន័យប៊ូលីនពិតប្រាកដនោះទេ។ C ប្រើប្រាស់ចំនួនគត់ដើម្បីតំណាងឱ្យស្ថានភាព Boolean៖
- លេខ **0** តំណាងឱ្យ **false (ខុស)**។
- **រាល់ចំនួនគត់ខុសពីសូន្យ** (ជាទូទៅលេខ 1) តំណាងឱ្យ **true (ត្រូវ)**។

នៅក្នុងភាសា C ទំនើប (C99 ឡើងទៅ) អ្នកអាចរួមបញ្ចូលបណ្ណាល័យ \`<stdbool.h>\` ដើម្បីអាចប្រើប្រាស់អថេរប្រភេទ \`bool\` ជាមួយតម្លៃ \`true\` និង \`false\`។

> **គន្លឹះ៖** នៅពេលបោះពុម្ពតម្លៃប៊ូលីនដោយប្រើ \`printf()\` វានឹងបង្ហាញជាលេខគត់ដដែល។ ប្រើប្រាស់ \`%d\` វានឹងបង្ហាញ \`1\` សម្រាប់ true និង \`0\` សម្រាប់ false។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>
#include <stdbool.h>

int main() {
    bool isCodingFun = true;
    bool isFishFlying = false;

    printf("Is coding fun? %d\\n", isCodingFun);
    printf("Can fish fly? %d\\n", isFishFlying);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Is coding fun? 1
Can fish fly? 0
\`\`\``
    },
    starterCode: `#include <stdio.h>
#include <stdbool.h>

int main() {
    bool lightOn = true;
    printf("Light status: %d\\n", lightOn);
    return 0;
}`
  },
  {
    id: "c-ifelse",
    title: { en: "C If...Else", km: "លក្ខខណ្ឌ If...Else" },
    content: {
      en: `# C If...Else

Conditionals control execution flow based on boolean logic evaluations. C supports:

- \`if\`: Executes a block if the condition is true.
- \`else if\`: Specifies a new condition to test if the first condition is false.
- \`else\`: Executes a fallback block if all preceding conditions are false.

> **Tip:** You can write a short-hand ternary operator instead of standard if-else statement blocks to evaluate simple conditions: \`variable = (condition) ? expressionTrue : expressionFalse;\`.

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    int testScore = 85;

    if (testScore >= 90) {
        printf("Grade: A\\n");
    } else if (testScore >= 80) {
        printf("Grade: B\\n");
    } else {
        printf("Grade: C\\n");
    }
    
    // Short-hand ternary equivalent
    char passStatus = (testScore >= 50) ? 'P' : 'F';
    printf("Status: %c\\n", passStatus);
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Grade: B
Status: P
\`\`\``,
      km: `# លក្ខខណ្ឌ If...Else

រចនាសម្ព័ន្ធលក្ខខណ្ឌប្រើប្រាស់ដើម្បីគ្រប់គ្រងលំហូរនៃការរត់កូដ ដោយផ្អែកលើការវាយតម្លៃតក្កវិជ្ជា៖

- \`if\`៖ ដំណើរការប្លុកកូដ ប្រសិនបើលក្ខខណ្ឌត្រូវ (true)។
- \`else if\`៖ កំណត់លក្ខខណ្ឌថ្មីដើម្បីឆែកបន្ថែម ប្រសិនបើលក្ខខណ្ឌមុនខុស (false)។
- \`else\`៖ ដំណើរការកូដជាជម្រើសចុងក្រោយ ប្រសិនបើគ្មានលក្ខខណ្ឌណាមួយត្រឹមត្រូវ។

> **គន្លឹះ៖** អ្នកអាចសរសេរប្រមាណវិធីលក្ខខណ្ឌលឿន (Ternary Operator) ជំនួសឱ្យ if-else ធម្មតាសម្រាប់ការវាយតម្លៃខ្លីៗ៖ \`variable = (condition) ? trueValue : falseValue;\`។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    int testScore = 85;

    if (testScore >= 90) {
        printf("Grade: A\\n");
    } else if (testScore >= 80) {
        printf("Grade: B\\n");
    } else {
        printf("Grade: C\\n");
    }
    
    char passStatus = (testScore >= 50) ? 'P' : 'F';
    printf("Status: %c\\n", passStatus);
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Grade: B
Status: P
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    int number = -15;
    if (number > 0) {
        printf("Positive\\n");
    } else if (number < 0) {
        printf("Negative\\n");
    } else {
        printf("Zero\\n");
    }
    return 0;
}`
  },
  {
    id: "c-switch",
    title: { en: "C Switch", km: "លក្ខខណ្ឌ Switch C" },
    content: {
      en: `# C Switch

Instead of nesting multiple \`if-else\` conditions, you can use the \`switch\` block to select one of many code branches to execute based on a single integer or character evaluation.

- \`case\`: Tests a specific value.
- \`break\`: Exits the switch block once a case is matched.
- \`default\`: Standard fallback block if no case matches.

> **Tip:** If you omit a \`break\` statement, execution will continue ("fall through") into subsequent cases even if their labels do not match the value. Always double-check your breaks!

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    char selection = 'B';

    switch (selection) {
        case 'A':
            printf("Excellent choice!\\n");
            break;
        case 'B':
            printf("Good choice!\\n");
            break;
        default:
            printf("Unknown option.\\n");
    }
    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
Good choice!
\`\`\``,
      km: `# លក្ខខណ្ឌ Switch C

ជំនួសឱ្យការសរសេរលក្ខខណ្ឌ \`if-else\` ជាន់ៗគ្នាជាច្រើន អ្នកអាចប្រើប្រាស់ \`switch\` ដើម្បីជ្រើសរើសដំណើរការប្លុកកូដណាមួយ ផ្អែកលើការប្រៀបធៀបតម្លៃលេខ ឬតួអក្សរតែមួយ។

- \`case\`៖ ផ្ទៀងផ្ទាត់តម្លៃជាក់លាក់។
- \`break\`៖ និមិត្តសញ្ញាដើម្បីចាកចេញពី switch ភ្លាមៗ បន្ទាប់ពី case ត្រូវបានដំណើរការរួច។
- \`default\`៖ ប្លុកកូដការពារចុងក្រោយ ប្រសិនបើគ្មានករណី (Case) ណាត្រូវគ្នា។

> **គន្លឹះ៖** ប្រសិនបើអ្នកភ្លេចដាក់ \`break\` នោះកម្មវិធីនឹងបន្តដំណើរការកូដនៅក្នុង Case បន្ទាប់ៗដោយស្វ័យប្រវត្ត (ហៅថា fall-through) ទោះបីជាតម្លៃមិនត្រូវគ្នាក៏ដោយ។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    char selection = 'B';

    switch (selection) {
        case 'A':
            printf("Excellent choice!\\n");
            break;
        case 'B':
            printf("Good choice!\\n");
            break;
        default:
            printf("Unknown option.\\n");
    }
    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
Good choice!
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    int day = 3;
    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        default:
            printf("Other day\\n");
    }
    return 0;
}`
  },
  {
    id: "c-while-loop",
    title: { en: "C While Loop", km: "រង្វិលជុំ While Loop" },
    content: {
      en: `# C While Loop

Loops execute a block of code repeatedly as long as a specified condition remains true. C supports two types of while loops:

- \`while\`: Checks the condition **first**, then runs the block if it's true.
- \`do-while\`: Runs the block **first**, then checks the condition. This guarantees that the loop body executes at least once.

> **Tip:** Make sure to increment or modify the loop control variable inside the loop body. If you forget to update the variable, you will create an **infinite loop**, which freezes or crashes the program.

### Worked Example
\`\`\`c
#include <stdio.h>

int main() {
    int count = 1;

    printf("--- While Loop Counting ---\\n");
    while (count <= 3) {
        printf("Count: %d\\n", count);
        count++;
    }

    printf("--- Do-While Loop (Runs at least once) ---\\n");
    int forceRun = 10;
    do {
        printf("Force run value: %d\\n", forceRun);
        forceRun++;
    } while (forceRun < 5);

    return 0;
}
\`\`\`
**Expected Output:**
\`\`\`text
--- While Loop Counting ---
Count: 1
Count: 2
Count: 3
--- Do-While Loop (Runs at least once) ---
Force run value: 10
\`\`\``,
      km: `# រង្វិលជុំ While Loop

រង្វិលជុំ (Loops) ប្រើសម្រាប់ដំណើរការប្លុកកូដដដែលៗ ដរាបណាលក្ខខណ្ឌដែលបានកំណត់នៅតែត្រឹមត្រូវ។ ភាសា C គាំទ្ររង្វិលជុំ While ពីរប្រភេទ៖

- \`while\`៖ ផ្ទៀងផ្ទាត់លក្ខខណ្ឌ **មុនគេ** បន្ទាប់មកទើបដំណើរការប្លុកកូដ ប្រសិនបើត្រូវ។
- \`do-while\`៖ ដំណើរការប្លុកកូដ **មុនមួយដងសិន** រួចទើបផ្ទៀងផ្ទាត់លក្ខខណ្ឌជាក្រោយ។ នេះធានាថាប្លុកកូដនឹងត្រូវរត់យ៉ាងតិចណាស់ម្តង។

> **គន្លឹះ៖** ត្រូវប្រាកដថាអ្នកបានប្តូរតម្លៃអថេរគ្រប់គ្រងរង្វិលជុំនៅក្នុងប្លុកកូដ។ ប្រសិនបើភ្លេចផ្លាស់ប្តូរតម្លៃនោះ កម្មវិធីនឹងបង្កើតរង្វិលជុំគ្មានទីបញ្ចប់ (Infinite Loop) ដែលធ្វើឱ្យកម្មវិធីគាំង។

### ឧទាហរណ៍អនុវត្ត
\`\`\`c
#include <stdio.h>

int main() {
    int count = 1;

    printf("--- While Loop Counting ---\\n");
    while (count <= 3) {
        printf("Count: %d\\n", count);
        count++;
    }

    printf("--- Do-While Loop (Runs at least once) ---\\n");
    int forceRun = 10;
    do {
        printf("Force run value: %d\\n", forceRun);
        forceRun++;
    } while (forceRun < 5);

    return 0;
}
\`\`\`
**លទ្ធផលរំពឹងទុក៖**
\`\`\`text
--- While Loop Counting ---
Count: 1
Count: 2
Count: 3
--- Do-While Loop (Runs at least once) ---
Force run value: 10
\`\`\``
    },
    starterCode: `#include <stdio.h>

int main() {
    int num = 5;
    while (num > 0) {
        printf("Timer: %d\\n", num);
        num--;
    }
    return 0;
}`
  }
];
