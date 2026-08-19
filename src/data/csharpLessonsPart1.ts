import { Lesson } from '../types';

export const csharpLessonsPart1: Lesson[] = [
  {
    id: "cs-home",
    title: {
      en: "C# Home",
      km: "ទំព័រដើម C#"
    },
    content: {
      en: `### Welcome to C# Programming!
C# (pronounced **C-Sharp**) is a modern, object-oriented, type-safe programming language developed by Microsoft. It runs on the **.NET Framework** and **.NET Core** ecosystems.

### Why Learn C#?
- **Versatility:** Used for web apps (ASP.NET), desktop apps, mobile development (Xamarin/MAUI), and game development (Unity).
- **Type Safety:** Prevents common runtime issues and memory corruptions.
- **Garbage Collection:** Automatic memory management keeps systems performing smoothly.

> **Note:** Inside our sandbox, C# code is compiled and executed via .NET, allowing you to instantly write, modify, and run code with live console outputs!`,
      km: `### សូមស្វាគមន៍មកកាន់ការសិក្សាភាសា C#!
C# (អានថា **ស៊ី-សាប**) គឺជាភាសាសរសេរកម្មវិធីទំនើប តម្រង់វត្ថុ (Object-oriented) និងមានសុវត្ថិភាពខ្ពស់ ដែលត្រូវបានបង្កើតឡើងដោយក្រុមហ៊ុន Microsoft។ វាដំណើរការនៅលើប្រព័ន្ធ **.NET**។

### ហេតុអ្វីត្រូវរៀន C#?
- **ភាពចម្រុះ:** ប្រើសម្រាប់បង្កើតវិបសាយ (ASP.NET), កម្មវិធីលើកុំព្យូទ័រ និងទូរស័ព្ទ (MAUI) ក៏ដូចជាការបង្កើតហ្គេម (Unity)។
- **សុវត្ថិភាព:** ការពារបញ្ហាមេម៉ូរី និងកំហុសឆ្គងពេលកំពុងដំណើរការ។
- **ការសម្អាតមេម៉ូរី (Garbage Collection):** ការគ្រប់គ្រង និងសម្អាតមេម៉ូរីដោយស្វ័យប្រវត្តជួយឱ្យប្រព័ន្ធដំណើរការបានរលូន។

> **ចំណាំ:** នៅក្នុងប្រអប់សាកល្បងរបស់យើង កូដ C# នឹងត្រូវបានចងក្រង និងដំណើរការដោយផ្ទាល់ ដើម្បីឱ្យអ្នកអាចសរសេរ កែសម្រួល និងសាកល្បងមើលលទ្ធផលបានភ្លាមៗ!`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        Console.WriteLine("=== Welcome to Cambodian C# Learning Center ===");
        Console.WriteLine("Start your journey into Microsoft .NET development!");
    }
}`
  },
  {
    id: "cs-intro",
    title: {
      en: "C# Introduction",
      km: "សេចក្តីផ្តើម C#"
    },
    content: {
      en: `### What is C#?
C# was released in 2002 alongside the .NET Framework and has evolved into one of the world's most popular languages. It is highly influenced by C++ and Java.

### The .NET Ecosystem
- **CLR (Common Language Runtime):** The virtual machine engine that manages running C# code, handling compilation, thread management, and garbage collection.
- **Managed Code:** C# compiles to **IL (Intermediate Language)**, which the CLR compiles to native machine instructions at runtime.

> **Tip:** C# is strongly-typed, meaning every variable must be declared with a strict type, preventing accidental bugs like storing text inside an integer!`,
      km: `### តើអ្វីទៅជា C#?
C# ត្រូវបានចេញផ្សាយក្នុងឆ្នាំ ២០០២ ជាមួយក្របខ័ណ្ឌ .NET ហើយបានវិវត្តទៅជាភាសាកូដដ៏ពេញនិយមបំផុតមួយលើពិភពលោក។ វាទទួលបានឥទ្ធិពលយ៉ាងខ្លាំងពីភាសា C++ និង Java។

### ប្រព័ន្ធ .NET
- **CLR (Common Language Runtime):** ម៉ាស៊ីននិម្មិត (Virtual Machine) ដែលចាត់ចែងការរត់កូដ C# ដូចជាការចងក្រងកូដ ការគ្រប់គ្រង Threads និងការសម្អាតមេម៉ូរី។
- **Managed Code:** កូដ C# ត្រូវបានចងក្រងទៅជា **IL (Intermediate Language)** រួចទើប CLR បំប្លែងវាទៅជាកូដម៉ាស៊ីនពិតៗពេលកម្មវិធីរត់។

> **គន្លឹះ:** C# ជាភាសា Strongly-typed មានន័យថាអថេរនីមួយៗត្រូវកំណត់ប្រភេទទិន្នន័យឱ្យបានច្បាស់លាស់ ដែលជួយការពារកំហុសឆ្គងដោយចៃដន្យ។`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        string language = "C#";
        int releaseYear = 2002;
        Console.WriteLine($"Language: {language}");
        Console.WriteLine($"First released: {releaseYear}");
    }
}`
  },
  {
    id: "cs-get-started",
    title: {
      en: "C# Get Started",
      km: "ការចាប់ផ្តើមដំបូង C#"
    },
    content: {
      en: `### Writing Your First Program
To start writing C# locally, developers use **Visual Studio** or the **.NET SDK** command line tools.

### Visual Studio vs VS Code
- **Visual Studio:** A complete Integrated Development Environment (IDE) built specifically for C# and .NET.
- **VS Code:** A lightweight editor that works beautifully when paired with the **C# Dev Kit** extension.

### Command Line Workflow:
\`\`\`bash
# Create a new Console application
dotnet new console -o MyFirstApp

# Navigate and run the app
cd MyFirstApp
dotnet run
\`\`\`

> **Note:** The entry point of any C# console application is always the \`Main\` method inside a class.`,
      km: `### ការសរសេរកម្មវិធីដំបូងរបស់អ្នក
ដើម្បីចាប់ផ្តើមសរសេរកូដ C# លើកុំព្យូទ័ររបស់អ្នក អ្នកអាចប្រើប្រាស់ **Visual Studio** ឬកម្មវិធីបញ្ជា **.NET SDK**។

### ភាពខុសគ្នារវាង Visual Studio និង VS Code
- **Visual Studio:** ជាកម្មវិធីអភិវឌ្ឍន៍ពេញលេញ (IDE) ដែលរៀបចំឡើងជាពិសេសសម្រាប់ C# និង .NET។
- **VS Code:** ជាកម្មវិធីសរសេរកូដស្រាល ដែលដំណើរការបានល្អឥតខ្ចោះជាមួយ Extension **C# Dev Kit**។

### ជំហានសរសេរកូដលើ Command Line៖
\`\`\`bash
# បង្កើតគម្រោង Console ថ្មី
dotnet new console -o MyFirstApp

# ចូលទៅកាន់តម្រង និងដំណើរការកម្មវិធី
cd MyFirstApp
dotnet run
\`\`\`

> **ចំណាំ:** ចំណុចចាប់ផ្តើមដំបូង (Entry point) នៃកម្មវិធី C# គឺអនុគមន៍ \`Main\` ដែលស្ថិតនៅក្នុង Class។`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        Console.WriteLine("C# is successfully running!");
    }
}`
  },
  {
    id: "cs-syntax",
    title: {
      en: "C# Syntax",
      km: "រចនាសម្ព័ន្ធវេយ្យាករណ៍ C#"
    },
    content: {
      en: `### Understanding the Structure
Let's dissect a standard C# template program to understand what each line means:

\`\`\`csharp
using System;

namespace MyNamespace {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Hello!");
        }
    }
}
\`\`\`

### Key Parts Explained:
1. **\`using System\`:** Tells the compiler we are using classes from the standard \`System\` namespace (like \`Console\`).
2. **\`namespace\`:** Used to organize your code and prevent naming conflicts.
3. **\`class Program\`:** A container for data and methods. Every line of C# code must live inside a class.
4. **\`static void Main\`:** The starting point of the application.
5. **Semicolon (\`;\`):** Every C# statement must end with a semicolon!

> **Warning:** C# is case-sensitive! Writing \`console.writeline\` instead of \`Console.WriteLine\` will raise a compilation error immediately.`,
      km: `### ការយល់ដឹងអំពីរចនាសម្ព័ន្ធកូដ
ចូរវិភាគគំរូកម្មវិធី C# ស្តង់ដារដើម្បីស្វែងយល់ពីអត្ថន័យនៃបន្ទាត់នីមួយៗ៖

\`\`\`csharp
using System;

namespace MyNamespace {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Hello!");
        }
    }
}
\`\`\`

### ពន្យល់ផ្នែកសំខាន់ៗ៖
១. **\`using System\`:** ប្រាប់ Compiler ថាយើងនឹងប្រើប្រាស់ថ្នាក់មកពី namespace \`System\` (ដូចជា \`Console\`)។
២. **\`namespace\`:** ប្រើសម្រាប់រៀបចំកូដឱ្យមានសណ្តាប់ធ្នាប់ និងការពារការជាន់ឈ្មោះគ្នា។
៣. **\`class Program\`:** ជាប្រអប់ផ្ទុកទិន្នន័យ និងវិធីសាស្ត្រ។ រាល់កូដ C# ទាំងអស់ត្រូវតែស្ថិតនៅក្នុង Class។
៤. **\`static void Main\`:** ជាចំណុចចាប់ផ្តើមដំណើរការរបស់កម្មវិធី។
៥. **សញ្ញាក្បៀសចំនុច (\`;\`):** រាល់លក្ខខណ្ឌបញ្ជារបស់ C# ត្រូវតែបញ្ចប់ដោយសញ្ញា \`;\` ជានិច្ច!

> **ការព្រមាន:** C# ប្រកាន់អក្សរតូចធំ (Case-sensitive)! ការសរសេរ \`console.writeline\` ជំនួសឱ្យ \`Console.WriteLine\` នឹងបង្កកំហុសចងក្រងភ្លាមៗ។`
    },
    starterCode: `using System;

namespace HelloCambodia {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Checking namespace syntax... OK!");
        }
    }
}`
  },
  {
    id: "cs-output",
    title: {
      en: "C# Output",
      km: "ការបង្ហាញលទ្ធផល C#"
    },
    content: {
      en: `### Printing Data to the Console
To print text or values to the console window, C# provides two main commands inside the \`System.Console\` class:

### 1. \`Console.WriteLine()\`
Prints the provided value and inserts a new line at the end, so subsequent prints start on the next line.

### 2. \`Console.Write()\`
Prints the value without moving to a new line. Subsequent prints will be appended directly to the end of the text.

\`\`\`csharp
Console.Write("Apsara ");
Console.Write("Dance\\n"); // Moves to next line explicitly via \\n
\`\`\`

> **Tip:** You can print blank lines by calling \`Console.WriteLine()\` without passing any arguments.`,
      km: `### ការបង្ហាញលទ្ធផលទៅកាន់ Console
ដើម្បីបង្ហាញអត្ថបទ ឬតម្លៃនានាទៅលើអេក្រង់ C# ផ្តល់នូវសញ្ញាបញ្ជាចម្បងពីរនៅក្នុងថ្នាក់ \`System.Console\`៖

### ១. \`Console.WriteLine()\`
បង្ហាញតម្លៃដែលបានផ្តល់ឱ្យ រួចចុះបន្ទាត់ថ្មីនៅខាងចុង ដូច្នេះការបង្ហាញបន្ទាប់នឹងចាប់ផ្តើមនៅបន្ទាត់ថ្មី។

### ២. \`Console.Write()\`
បង្ហាញតម្លៃដោយមិនមានការចុះបន្ទាត់ឡើយ។ លទ្ធផលបង្ហាញបន្ទាប់នឹងបន្តភ្ជាប់នៅខាងចុងអត្ថបទនោះផ្ទាល់។

\`\`\`csharp
Console.Write("Apsara ");
Console.Write("Dance\\n"); // ចុះបន្ទាត់ដោយប្រើសញ្ញាពិសេស \\n
\`\`\`

> **គន្លឹះ:** អ្នកអាចចុះបន្ទាត់ទទេបានដោយគ្រាន់តែហៅ \`Console.WriteLine()\` ដោយមិនបាច់ដាក់ធាតុចូលឡើយ។`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        // Line-by-line printing
        Console.WriteLine("Line 1: Angkor Wat");
        Console.WriteLine("Line 2: Bayon");
        
        // Inline printing
        Console.Write("Cambodia ");
        Console.Write("Kingdom of Wonder");
        Console.WriteLine(); // Blank line helper
    }
}`
  },
  {
    id: "cs-comments",
    title: {
      en: "C++ / C# Comments",
      km: "កំណត់សម្គាល់ Comments"
    },
    content: {
      en: `### Documenting Your Code
Comments are ignored by the compiler and are used to explain code, make it more readable, or temporarily disable sections of code during testing.

### 1. Single-Line Comments
Created using two forward slashes (\`//\`). Any text to the right of \`//\` on that line will not be executed.

### 2. Multi-Line Comments
Start with \`/*\` and end with \`*/\`. Useful for explaining complex logic or writing paragraphs.

\`\`\`csharp
// This is a single-line comment
int score = 100;

/* This is a multi-line comment
   explaining the scoring logic in detail */
\`\`\`

> **Tip:** Use comments to explain the *Why* of a piece of complex code, rather than simply explaining the *What*.`,
      km: `### ការសរសេរកំណត់សម្គាល់កូដ
មតិយោបល់ ឬកំណត់សម្គាល់ (Comments) ត្រូវបានមិនអើពើដោយ Compiler។ វាត្រូវបានប្រើដើម្បីពន្យល់កូដ ជំនួយការអាន ឬបិទកូដបណ្តោះអាសន្នពេលកំពុងតេស្ត។

### ១. កំណត់សម្គាល់មួយបន្ទាត់ (Single-Line Comments)
បង្កើតឡើងដោយប្រើសញ្ញា \`//\`។ រាល់អក្សរដែលនៅខាងស្តាំ \`//\` នឹងមិនត្រូវបានដំណើរការឡើយ។

### ២. កំណត់សម្គាល់ច្រើនបន្ទាត់ (Multi-Line Comments)
ចាប់ផ្តើមដោយ \`/*\` និងបញ្ចប់ដោយ \`*/\`។ វាមានប្រយោជន៍សម្រាប់ការពន្យល់រូបមន្តស្មុគស្មាញ ឬអត្ថបទវែងៗ។

\`\`\`csharp
// នេះជាកំណត់សម្គាល់មួយបន្ទាត់
int score = 100;

/* នេះជាកំណត់សម្គាល់ច្រើនបន្ទាត់
   ពន្យល់លម្អិតពីរបៀបគណនាពិន្ទុ */
\`\`\`

> **គន្លឹះ:** គួរប្រើប្រាស់ Comment ដើម្បីពន្យល់ពី *មូលហេតុ (Why)* ដែលអ្នកសរសេរកូដបែបនោះ ជាងគ្រាន់តែប្រាប់ថាវាជាអ្វី។`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        // Console.WriteLine("This line is commented out and won't run!");
        
        Console.WriteLine("Active line!"); /* This is an inline multi-line comment */
        
        /*
          Uncommenting code is a useful debugging trick
          to isolate bugs inside methods.
        */
    }
}`
  },
  {
    id: "cs-variables",
    title: {
      en: "C# Variables",
      km: "អថេរ C#"
    },
    content: {
      en: `### Storing Data in Memory
Variables are containers for storing data values. In C#, you must declare the specific variable type before using it.

### Standard Syntax:
\`\`\`csharp
type variableName = value;
\`\`\`

### Common Types:
- \`int\`: Integers (whole numbers) like \`120\`.
- \`double\`: Double precision floating point numbers like \`3.14159\`.
- \`char\`: Single character inside single quotes like \`'A'\`.
- \`string\`: Text strings wrapped in double quotes like \`"Siem Reap"\`.
- \`bool\`: True/False boolean state.

### Constants:
Add the \`const\` keyword if you want to lock the variable, making it read-only:
\`\`\`csharp
const double TaxRate = 0.10; // Cannot be reassigned later!
\`\`\`

> **Warning:** You cannot reassign a variable to a different data type after declaration (e.g., trying to save text inside an \`int\` variable).`,
      km: `### ការរក្សាទុកទិន្នន័យក្នុងមេម៉ូរី
អថេរ (Variables) គឺជាប្រអប់ផ្ទុកទិន្នន័យ។ នៅក្នុង C# អ្នកត្រូវតែកំណត់ប្រភេទអថេរឱ្យបានច្បាស់លាស់មុននឹងប្រើប្រាស់វា។

### រូបមន្តស្តង់ដារ៖
\`\`\`csharp
type variableName = value;
\`\`\`

### ប្រភេទអថេរពេញនិយម៖
- \`int\`: ចំនួនគត់ (គ្មានក្បៀស) ដូចជា \`120\`។
- \`double\`: ចំនួនមានក្បៀស (Floating point) ដូចជា \`3.14159\`។
- \`char\`: តួអក្សរតែមួយស្ថិតក្នុងសញ្ញា (') ដូចជា \`'A'\`។
- \`string\`: កម្រងអក្សរស្ថិតក្នុងសញ្ញា (") ដូចជា \`"Siem Reap"\`។
- \`bool\`: តម្លៃពិត ឬមិនពិត (True/False)។

### អថេរថេរ (Constants)៖
បន្ថែមពាក្យគន្លឹះ \`const\` ប្រសិនបើអ្នកចង់ចាក់សោរតម្លៃអថេរ មិនឱ្យកែប្រែបានតទៅទៀត៖
\`\`\`csharp
const double TaxRate = 0.10; // មិនអាចផ្លាស់ប្តូរតម្លៃបានទេ!
\`\`\`

> **ការព្រមាន:** អ្នកមិនអាចផ្តល់តម្លៃដែលខុសប្រភេទទៅឱ្យអថេរដែលបានប្រកាសរួចឡើយ (ដូចជាការយកអក្សរទៅដាក់ក្នុងអថេរប្រភេទ \`int\`)។`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        string province = "Siem Reap";
        int templesVisited = 7;
        double entranceFee = 37.50;
        bool isSunny = true;
        
        Console.WriteLine($"Location: {province}");
        Console.WriteLine($"Temples: {templesVisited}");
        Console.WriteLine($"Fee: \${entranceFee}");
        Console.WriteLine($"Sunny Day: {isSunny}");
        
        const double VAT = 0.10;
        // VAT = 0.15; // Uncommenting this will crash compilation!
    }
}`
  },
  {
    id: "cs-data-types",
    title: {
      en: "C# Data Types",
      km: "ប្រភេទទិន្នន័យ C#"
    },
    content: {
      en: `### Value Types vs Reference Types
C# is strongly typed. Understanding how types are managed in memory is critical for advanced optimization.

### 1. Value Types (Stored on the Stack)
Directly contain their data values. Examples include:
- **Integers:** \`int\` (4 bytes), \`long\` (8 bytes), \`short\` (2 bytes)
- **Decimals:** \`float\` (4 bytes), \`double\` (8 bytes), \`decimal\` (16 bytes - recommended for financial calculations)
- **Boolean:** \`bool\` (1 byte)
- **Character:** \`char\` (2 bytes)

### 2. Reference Types (Stored on the Heap)
Store a reference (address) pointing to the actual object data. Examples include:
- **String:** \`string\`
- **Arrays:** e.g., \`int[]\`
- **Classes:** Custom objects

> **Tip:** Use the suffix \`F\` for floats (e.g. \`5.75f\`) and \`M\` for decimals (e.g. \`19.99m\`) when declaring floating-point values in C#.`,
      km: `### Value Types ប្រៀបធៀបជាមួយ Reference Types
C# គឺជាភាសា Strongly-typed។ ការយល់ដឹងពីរបៀបដែលទិន្នន័យរក្សាទុកក្នុងមេម៉ូរីមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ការសរសេរកូដឱ្យលឿន។

### ១. Value Types (រក្សាទុកលើ Stack)
រក្សាទុកតម្លៃទិន្នន័យដោយផ្ទាល់។ ឧទាហរណ៍៖
- **ចំនួនគត់:** \`int\` (៤ បៃ), \`long\` (៨ បៃ)
- **ចំនួនមានក្បៀស:** \`float\` (៤ បៃ), \`double\` (៨ បៃ), \`decimal\` (១៦ បៃ - ល្អបំផុតសម្រាប់គណនីលុយកាក់)
- **Boolean:** \`bool\` (១ បៃ)
- **តួអក្សរ:** \`char\` (២ បៃ)

### ២. Reference Types (រក្សាទុកលើ Heap)
រក្សាទុកអាសយដ្ឋានចង្អុលទៅកាន់ទីតាំងទិន្នន័យពិតប្រាកដ។ ឧទហរណ៍៖
- **String:** \`string\`
- **Arrays:** ដូចជា \`int[]\`
- **Classes:** វត្ថុបង្កើតឡើងដោយអ្នកសរសេរកូដ

> **គន្លឹះ:** ត្រូវបន្ថែមអក្សរ \`F\` ពីក្រោយតម្លៃ float (ដូចជា \`5.75f\`) និង \`M\` ពីក្រោយ decimal (ដូចជា \`19.99m\`) ជានិច្ចនៅពេលប្រកាសអថេរទាំងនេះក្នុង C#។`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        // Floats and Decimals suffixes
        float temperature = 32.5f;
        double preciseCoord = 104.9912456;
        decimal priceOfGold = 2450.75m; 
        
        Console.WriteLine($"Float value: {temperature}");
        Console.WriteLine($"Double value: {preciseCoord}");
        Console.WriteLine($"Decimal value: \${priceOfGold}");
        
        // Value copying testing
        int a = 10;
        int b = a; // Copies value directly
        b = 20;
        Console.WriteLine($"Value check: a={a}, b={b}");
    }
}`
  },
  {
    id: "cs-type-casting",
    title: {
      en: "C# Type Casting",
      km: "ការបំប្លែងប្រភេទទិន្នន័យ"
    },
    content: {
      en: `### Converting Between Data Types
Type casting is when you assign a value of one data type to another.

### 1. Implicit Casting (Automatically)
Converting a smaller type size to a larger type size. It is fully safe and handled automatically by the compiler.
\`\`\`csharp
int myInt = 9;
double myDouble = myInt; // Automatic casting: int to double
\`\`\`

### 2. Explicit Casting (Manually)
Converting a larger type size to a smaller type size. You must perform this manually by placing the target type in parentheses:
\`\`\`csharp
double myDouble = 9.78;
int myInt = (int)myDouble; // Manual casting: double to int (results in 9)
\`\`\`

### 3. Using Built-In Convert Methods
C# provides built-in conversion helper methods like \`Convert.ToInt32()\`, \`Convert.ToDouble()\`, and \`Convert.ToString()\`:
\`\`\`csharp
string text = "100";
int value = Convert.ToInt32(text);
\`\`\`

> **Warning:** Performing explicit casting or unsafe conversion can raise an \`InvalidCastException\` or cause data truncation. Always make sure input strings are in valid numeric format before converting!`,
      km: `### ការបំប្លែងប្រភេទអថេរ (Type Casting)
Type casting គឺជាដំណើរការបញ្ជូនតម្លៃពីអថេរប្រភេទមួយទៅកាន់អថេរប្រភេទមួយទៀត។

### ១. ការបំប្លែងស្វ័យប្រវត្តិ (Implicit Casting)
ការបំប្លែងពីអថេរទំហំតូចទៅកាន់អថេរទំហំធំ។ វាមានសុវត្ថិភាពខ្ពស់ និងធ្វើឡើងដោយស្វ័យប្រវត្តិដោយ Compiler។
\`\`\`csharp
int myInt = 9;
double myDouble = myInt; // បំប្លែងដោយស្វ័យប្រវត្តពី int ទៅ double
\`\`\`

### ២. ការបំប្លែងដោយដៃ (Explicit Casting)
ការបំប្លែងពីអថេរទំហំធំទៅកាន់អថេរទំហំតូច។ អ្នកត្រូវបញ្ជាក់ដោយដាក់ឈ្មោះប្រភេទអថេរគោលដៅក្នុងសញ្ញាកំពក \`()\`៖
\`\`\`csharp
double myDouble = 9.78;
int myInt = (int)myDouble; // បំប្លែងដោយដៃពី double ទៅ int (សល់ត្រឹម ៩)
\`\`\`

### ៣. ការប្រើប្រាស់ថ្នាក់ជំនួយ Convert
C# ផ្តល់នូវវិធីសាស្ត្រជំនួយស្រាប់ដូចជា \`Convert.ToInt32()\`, \`Convert.ToDouble()\`, និង \`Convert.ToString()\`៖
\`\`\`csharp
string text = "100";
int value = Convert.ToInt32(text);
\`\`\`

> **ការព្រមាន:** ការបំប្លែងតម្លៃខុសទម្រង់អាចនឹងបង្កកំហុស \`InvalidCastException\` ឬធ្វើឱ្យបាត់បង់ទិន្នន័យ (Truncation)។ ត្រូវធានាថា string មានទម្រង់ជាលេខពិតប្រាកដមុននឹងធ្វើការបំប្លែង!`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        // 1. Implicit casting
        int charVal = 'A'; // char is implicitly cast to int (ASCII value)
        Console.WriteLine($"Implicit Cast ('A' -> int): {charVal}");
        
        // 2. Explicit casting
        double rawScore = 95.87;
        int gradeScore = (int)rawScore; // Truncates decimal part
        Console.WriteLine($"Explicit Cast (double -> int): {gradeScore}");
        
        // 3. Convert helper catching errors
        string numberInput = "123";
        int parsedNumber = Convert.ToInt32(numberInput);
        Console.WriteLine($"Convert output: {parsedNumber}");
        
        try {
            string badInput = "abc";
            int failedParse = Convert.ToInt32(badInput); // Will throw exception!
        }
        catch (FormatException) {
            Console.WriteLine("Exception Handled: Input was not in a correct format!");
        }
    }
}`
  },
  {
    id: "cs-user-input",
    title: {
      en: "C# User Input",
      km: "ការទទួលធាតុចូល C#"
    },
    content: {
      en: `### Reading Values from keyboard
To capture input typed by users in the console, C# provides \`Console.ReadLine()\`.

### Getting Strings:
\`\`\`csharp
Console.WriteLine("Enter your name:");
string name = Console.ReadLine();
\`\`\`

### Getting Numbers:
\`Console.ReadLine()\` always returns a **string**. If you want numbers, you must parse or convert the returned string value:
\`\`\`csharp
Console.WriteLine("Enter age:");
int age = Convert.ToInt32(Console.ReadLine());
\`\`\`

> **Warning:** If the user submits non-numeric characters when \`Convert.ToInt32()\` is expected, the app will instantly crash with a FormatException. Use \`int.TryParse()\` for production-grade input verification!`,
      km: `### ការអានទិន្នន័យពីក្តារចុច
ដើម្បីចាប់យកទិន្នន័យដែលវាយបញ្ចូលដោយអ្នកប្រើប្រាស់នៅក្នុង Console ភាសា C# ផ្តល់នូវបញ្ជា \`Console.ReadLine()\`។

### ទទួលអត្ថបទ (Strings)៖
\`\`\`csharp
Console.WriteLine("Enter your name:");
string name = Console.ReadLine();
\`\`\`

### ទទួលលេខ (Numbers)៖
\`Console.ReadLine()\` តែងតែផ្តល់លទ្ធផលត្រឡប់ជា **string** ជានិច្ច។ បើចង់បានជាលេខ អ្នកត្រូវបំប្លែងវាជាមុនសិន៖
\`\`\`csharp
Console.WriteLine("Enter age:");
int age = Convert.ToInt32(Console.ReadLine());
\`\`\`

> **ការព្រមាន:** ប្រសិនបើអ្នកប្រើប្រាស់វាយតួអក្សរជំនួសឱ្យលេខ នោះកម្មវិធីនឹងគាំងភ្លាមៗដោយសារ FormatException។ ក្នុងកម្មវិធីពិតប្រាកដ គួរប្រើ \`int.TryParse()\` ដើម្បីផ្ទៀងផ្ទាត់សុវត្ថិភាព!`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        // Simulating interactive inputs
        Console.WriteLine("--- SIMULATING USER ENTRANCE TERMINAL ---");
        
        string name = "Sok"; // Simulated input
        Console.WriteLine($"[User typed name]: {name}");
        
        string ageInput = "25"; // Simulated input
        Console.WriteLine($"[User typed age]: {ageInput}");
        
        int age = Convert.ToInt32(ageInput);
        Console.WriteLine($"Welcome {name}, next year you will be {age + 1} years old!");
    }
}`
  },
  {
    id: "cs-operators",
    title: {
      en: "C# Operators",
      km: "ប្រមាណសញ្ញា C#"
    },
    content: {
      en: `### Mathematical & Logical Logic
Operators are symbols used to perform calculations, comparison, and evaluate logical expressions.

### 1. Arithmetic Operators:
- \`+\` (Addition), \`-\` (Subtraction), \`*\` (Multiplication), \`/\` (Division)
- \`%\` (Modulus/Remainder)
- \`++\` (Increment by 1), \`--\` (Decrement by 1)

### 2. Comparison Operators (Returns true/false):
- \`==\` (Equal to), \`!=\` (Not equal to)
- \`>\`, \`<\`, \`>=\`, \`<=\`

### 3. Logical Operators:
- \`&&\` (Logical AND): Returns true if both expressions are true.
- \`||\` (Logical OR): Returns true if at least one expression is true.
- \`!\` (Logical NOT): Reverses the boolean state.

> **Tip:** In division, if both operands are integers (e.g., \`5 / 2\`), C# performs integer division resulting in \`2\`. Cast at least one side to double (e.g. \`5.0 / 2\`) to get the correct decimal result!`,
      km: `### និមិត្តសញ្ញាគណនា និងតក្កវិទ្យា
ប្រមាណសញ្ញា (Operators) គឺជានិមិត្តសញ្ញាដែលប្រើសម្រាប់ធ្វើការគណនា ផ្ទៀងផ្ទាត់ និងវាយតម្លៃលក្ខខណ្ឌនានា។

### ១. ប្រមាណសញ្ញាគណិតវិទ្យា (Arithmetic)៖
- \`+\` (បូក), \`-\` (ដក), \`*\` (គុណ), \`/\` (ចែក)
- \`%\` (ម៉ូឌុល - រកសំណល់វិធីចែក)
- \`++\` (តម្លើងតម្លៃថែម ១), \`--\` (បន្ថយតម្លៃ ១)

### ២. ប្រមាណសញ្ញាប្រៀបធៀប (លទ្ធផល True/False)៖
- \`==\` (ស្មើគ្នា), \`!=\` (មិនស្មើគ្នា)
- \`>\`, \`<\`, \`>=\`, \`<=\`

### ៣. ប្រមាណសញ្ញាតក្កវិទ្យា (Logical)៖
- \`&&\` (AND): ផ្តល់តម្លៃពិត បើលក្ខខណ្ឌសងខាងសុទ្ធតែត្រូវ។
- \`||\` (OR): ផ្តល់តម្លៃពិត បើលក្ខខណ្ឌម្ខាងណាត្រូវក៏បាន។
- \`!\` (NOT): បញ្ច្រាស់លទ្ធផល Boolean។

> **គន្លឹះ:** ក្នុងវិធីចែក បើតម្លៃទាំងសងខាងជាចំនួនគត់ (ដូចជា \`5 / 2\`) C# នឹងកាត់ក្បៀសចោលសល់ត្រឹម \`2\`។ ត្រូវកំណត់តម្លៃម្ខាងជា double (ដូចជា \`5.0 / 2\`) ដើម្បីទទួលបានលទ្ធផលមានក្បៀសត្រឹមត្រូវ!`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        int a = 15;
        int b = 4;
        
        Console.WriteLine($"Addition: {a} + {b} = {a + b}");
        Console.WriteLine($"Modulus (Remainder): {a} % {b} = {a % b}");
        
        // Integer Division Warning
        double exactDiv = (double)a / b;
        Console.WriteLine($"Correct Floating-point Division: {exactDiv}");
        
        // Logical testing
        bool isStudent = true;
        bool hasDiscount = true;
        Console.WriteLine($"Access Granted: {isStudent && hasDiscount}");
    }
}`
  },
  {
    id: "cs-math",
    title: {
      en: "C# Math",
      km: "ថ្នាក់គណិតវិទ្យា Math"
    },
    content: {
      en: `### Performing Advanced Calculations
The \`System.Math\` static class provides access to highly optimized mathematical functions and constants.

### Core Math Methods:
1. **\`Math.Max(x, y)\`:** Finds the highest value.
2. **\`Math.Min(x, y)\`:** Finds the lowest value.
3. **\`Math.Sqrt(x)\`:** Returns the square root of a double value.
4. **\`Math.Abs(x)\`:** Returns the absolute (positive) value of a number.
5. **\`Math.Round(x)\`:** Rounds a floating-point number to the nearest integer.

\`\`\`csharp
double root = Math.Sqrt(64); // returns 8.0
double absoluteValue = Math.Abs(-15.5); // returns 15.5
\`\`\`

> **Tip:** Use \`Math.PI\` to retrieve the mathematical constant representing the ratio of a circle's circumference to its diameter (approximately \`3.14159\`).`,
      km: `### ការធ្វើការគណនាគណិតវិទ្យាកម្រិតខ្ពស់
ថ្នាក់ \`System.Math\` ផ្តល់នូវអនុគមន៍គណិតវិទ្យា និងតម្លៃថេរដែលត្រូវបានគណនាយ៉ាងមានប្រសិទ្ធភាពខ្ពស់។

### វិធីសាស្ត្រគណិតវិទ្យាសំខាន់ៗ៖
១. **\`Math.Max(x, y)\`:** ស្វែងរកតម្លៃធំបំផុត។
២. **\`Math.Min(x, y)\`:** ស្វែងរកតម្លៃតូចបំផុត។
៣. **\`Math.Sqrt(x)\`:** រកឫសការ៉េនៃតម្លៃ double។
៤. **\`Math.Abs(x)\`:** រកតម្លៃដាច់ខាត (វិជ្ជមានជានិច្ច)។
៥. **\`Math.Round(x)\`:** បង្គត់តម្លៃក្បៀសទៅកាន់ចំនួនគត់ដែលជិតបំផុត។

\`\`\`csharp
double root = Math.Sqrt(64); // ទទួលបាន 8.0
double absoluteValue = Math.Abs(-15.5); // ទទួលបាន 15.5
\`\`\`

> **គន្លឹះ:** ប្រើប្រាស់ \`Math.PI\` ដើម្បីទទួលបានតម្លៃថេរ ផាយ (Pi) ដែលតំណាងឱ្យផលធៀបរវាងរង្វង់ (ប្រហែល \`3.14159\`)។`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        int x = 25;
        int y = 50;
        
        Console.WriteLine($"Maximum: {Math.Max(x, y)}");
        Console.WriteLine($"Minimum: {Math.Min(x, y)}");
        Console.WriteLine($"Square Root of {x}: {Math.Sqrt(x)}");
        Console.WriteLine($"Absolute of -99: {Math.Abs(-99)}");
        
        double radius = 5.0;
        double area = Math.PI * Math.Pow(radius, 2);
        Console.WriteLine($"Circle Area (Radius {radius}): {Math.Round(area, 2)}");
    }
}`
  }
];
