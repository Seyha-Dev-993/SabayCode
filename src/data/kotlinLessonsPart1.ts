import { Lesson } from '../types';

export const kotlinLessonsPart1: Lesson[] = [
  {
    id: "kotlin-home",
    title: {
      en: "Kotlin HOME",
      km: "ទំព័រដើម Kotlin"
    },
    content: {
      en: `# Kotlin HOME

Welcome to the comprehensive Kotlin Programming course! Kotlin is a modern, statically typed programming language used extensively for Android development, server-side applications, and cross-platform projects. It is designed to be fully interoperable with Java while providing a safer, more concise syntax.

> **Tip:** Kotlin's null safety is one of its most powerful features, helping you eliminate the dreaded NullPointerException from your applications.

### Key Benefits
- **Concise:** Reduces boilerplate code significantly compared to Java.
- **Safe:** Avoids entire classes of errors, especially null pointer exceptions.
- **Interoperable:** Runs on the JVM and is 100% compatible with Java.

### Common Syntax
\`\`\`kotlin
fun main() {
    println("Welcome to Sabaicode!")
}
\`\`\`

### Worked Example
Below is a simple Kotlin entry point using the \`fun main\` function:
\`\`\`kotlin
fun main() {
    println("Hello, Learner!")
}
// Output: Hello, Learner!
\`\`\`

Ready to start your journey? Go to the next lesson or try running the code in the sandbox!`,
      km: `# ទំព័រដើម Kotlin

សូមស្វាគមន៍មកកាន់វគ្គសិក្សាភាសាសរសេរកូដ Kotlin ដ៏ទូលំទូលាយ! Kotlin គឺជាភាសាសរសេរកូដទំនើប ប្រភេទ Statically Typed ដែលត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយសម្រាប់ការអភិវឌ្ឍកម្មវិធី Android កម្មវិធីខាងម៉ាស៊ីនបម្រើ (Server-side) និងគម្រោងចម្រុះប្រព័ន្ធប្រតិបត្តិការ (Cross-platform)។ វាត្រូវបានរចនាឡើងដើម្បីដំណើរការរួមគ្នាជាមួយ Java ១០០% ប៉ុន្តែផ្តល់នូវវាក្យសម្ពន្ធដែលមានសុវត្ថិភាព និងខ្លីជាង។

> **គន្លឹះ៖** សុវត្ថិភាព Null (Null safety) របស់ Kotlin គឺជាមុខងារដ៏មានឥទ្ធិពលបំផុតមួយ ដែលជួយលុបបំបាត់បញ្ហា NullPointerException ចេញពីកម្មវិធីរបស់អ្នក។

### អត្ថប្រយោជន៍ចម្បងៗ
- **ខ្លីខ្លឹម៖** កាត់បន្ថយការសរសេរកូដដដែលៗបានយ៉ាងច្រើនបើធៀបនឹង Java។
- **សុវត្ថិភាព៖** ជៀសវាងកំហុសកូដជាច្រើន ជាពិសេសកំហុស Null Pointer។
- **ដំណើរការរួមគ្នា៖** ដំណើរការលើ JVM និងត្រូវគ្នាជាមួយ Java ១០០%។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`kotlin
fun main() {
    println("Welcome to Sabaicode!")
}
\`\`\`

### ឧទាហរណ៍អនុវត្ត
ខាងក្រោមនេះគឺជាចំណុចចាប់ផ្តើមសាមញ្ញនៃកម្មវិធី Kotlin ដោយប្រើអនុគមន៍ \`fun main\`៖
\`\`\`kotlin
fun main() {
    println("Hello, Learner!")
}
// លទ្ធផល៖ Hello, Learner!
\`\`\`

តើអ្នកត្រៀមខ្លួនចាប់ផ្តើមហើយឬនៅ? សូមបន្តទៅមេរៀនបន្ទាប់ ឬសាកល្បងដំណើរការកូដក្នុងប្រអប់អនុវត្តខាងស្តាំ!`
    },
    starterCode: `fun main() {
    println("Welcome to Sabaicode Kotlin Course!")
}`
  },
  {
    id: "kotlin-intro",
    title: {
      en: "Kotlin Intro",
      km: "សេចក្តីផ្តើម Kotlin"
    },
    content: {
      en: `# Kotlin Intro

Kotlin is a modern, open-source programming language developed by JetBrains and officially backed by Google for Android app development. Since its release in 2016, it has quickly become one of the most beloved languages for modern developers.

> **Tip:** In 2019, Google announced that Kotlin is now its preferred language for Android app developers. Today, over 95% of the top 1000 Android apps use Kotlin!

### Why Kotlin?
1. **Fully Interoperable with Java:** You can call Java code from Kotlin and vice versa without any issues.
2. **Multiplatform Capabilities:** Kotlin is not just for Android; you can use it to build iOS apps (Kotlin Multiplatform), backend services (Ktor/Spring Boot), and frontend web apps.
3. **Great Developer Experience:** JetBrains (the creator of Kotlin) also makes world-class IDEs like IntelliJ IDEA and Android Studio, ensuring unmatched developer support.

No code yet! In the next lesson, we will set up and write our very first runnable Kotlin program.`,
      km: `# សេចក្តីផ្តើម Kotlin

Kotlin គឺជាភាសាសរសេរកូដបើកចំហរ (Open-source) និងទំនើបដែលត្រូវបានបង្កើតឡើងដោយក្រុមហ៊ុន JetBrains ហើយត្រូវបានគាំទ្រជាផ្លូវការដោយ Google សម្រាប់ការអភិវឌ្ឍកម្មវិធីទូរស័ព្ទ Android។ ចាប់តាំងពីការចេញផ្សាយក្នុងឆ្នាំ ២០១៦ វាបានក្លាយជាភាសាមួយដែលទទួលបានការស្រឡាញ់បំផុតពីអ្នកអភិវឌ្ឍកម្មវិធី។

> **គន្លឹះ៖** នៅក្នុងឆ្នាំ ២០១៩ ក្រុមហ៊ុន Google បានប្រកាសថា Kotlin គឺជាភាសាដែលខ្លួនពេញចិត្តបំផុតសម្រាប់អ្នកបង្កើតកម្មវិធី Android។ សព្វថ្ងៃនេះ ជាង ៩៥% នៃកម្មវិធីល្បីៗកំពូលៗទាំង ១០០០ លើ Android ប្រើប្រាស់ Kotlin!

### ហេតុអ្វីជ្រើសរើស Kotlin?
១. **ដំណើរការជាមួយ Java ឥតខ្ចោះ៖** អ្នកអាចហៅកូដ Java មកប្រើក្នុង Kotlin និងផ្ទុយមកវិញដោយគ្មានបញ្ហាអ្វីទាំងអស់។
២. **សមត្ថភាព Multiplatform៖** Kotlin មិនមែនសម្រាប់តែ Android នោះទេ អ្នកអាចប្រើវាដើម្បីបង្កើតកម្មវិធី iOS (Kotlin Multiplatform) ប្រព័ន្ធខាងក្រោយម៉ាស៊ីនបម្រើ និងសូម្បីតែគេហទំព័រ។
៣. **បទពិសោធន៍សរសេរកូដល្អ៖** JetBrains (អ្នកបង្កើត Kotlin) ក៏ជាអ្នកបង្កើតកម្មវិធី IDEs កម្រិតពិភពលោកដូចជា IntelliJ IDEA និង Android Studio ដែលធ្វើឱ្យការគាំទ្រដល់អ្នកសរសេរកូដមានភាពល្អឥតខ្ចោះ។

មិនទាន់មានកូដទេ! នៅក្នុងមេរៀនបន្ទាប់ យើងនឹងរៀនរៀបចំ និងសរសេរកម្មវិធី Kotlin ដំបូងបង្អស់ដែលអាចដំណើរការបាន។`
    },
    starterCode: `// Kotlin is fully backed by JetBrains and Google!`
  },
  {
    id: "kotlin-get-started",
    title: {
      en: "Kotlin Get Started",
      km: "ការចាប់ផ្តើមដំបូង"
    },
    content: {
      en: `# Kotlin Get Started

In Kotlin, execution always starts from a special entry point called the \`main\` function. Let's write the iconic "Hello World" application to see how simple it is.

> **Tip:** Inside the interactive sandbox, whenever you write Kotlin, make sure your code is wrapped inside a \`fun main()\` block so the compiler knows where to begin executing!

### Hello World Explained Line-by-Line:
1. \`fun\` is a keyword used to declare a function in Kotlin (short for "function").
2. \`main\` is the name of the function. This is the entry point that the JVM searches for to run your code.
3. \`()\` contains parameters if any are passed. Since Kotlin 1.3, arguments in \`main\` are completely optional!
4. \`println()\` is a built-in standard function that outputs a line of text to the console, followed by a newline.

### Worked Example
Here is the complete minimal Kotlin file:
\`\`\`kotlin
fun main() {
    println("Hello, World!")
}
\`\`\``,
      km: `# ការចាប់ផ្តើមដំបូង

នៅក្នុង Kotlin ការដំណើរការកូដតែងតែចាប់ផ្តើមចេញពីអនុគមន៍ពិសេសមួយហៅថា \`main\`។ ចូរយើងសរសេរកម្មវិធី "Hello World" ដើម្បីមើលថាតើវាមានភាពងាយស្រួលកម្រិតណា។

> **គន្លឹះ៖** នៅក្នុងប្រអប់អនុវត្តកូដរាល់ពេលសរសេរកូដ Kotlin ត្រូវប្រាកដថាកូដរបស់អ្នកត្រូវបានដាក់នៅក្នុងប្លុក \`fun main()\` ដើម្បីឱ្យម៉ាស៊ីនចងក្រង (Compiler) ដឹងពីកន្លែងចាប់ផ្តើម!

### ការពន្យល់កូដ "Hello World" មួយបន្ទាត់ម្តងៗ៖
១. \`fun\` គឺជាពាក្យគន្លឹះ (Keyword) ប្រើប្រាស់សម្រាប់ប្រកាសអនុគមន៍នៅក្នុង Kotlin (មកពីពាក្យ "function")។
២. \`main\` គឺជាឈ្មោះរបស់អនុគមន៍។ នេះគឺជាច្រកចូលដែល JVM ស្វែងរកដើម្បីដំណើរការកូដរបស់អ្នក។
៣. \`()\` ផ្ទុកប៉ារ៉ាម៉ែត្រប្រសិនបើមានការបញ្ជូនតម្លៃ។ ចាប់តាំងពីកំណែ Kotlin 1.3 អាគុយម៉ង់ក្នុង \`main\` គឺមិនចាំបាច់មានឡើយ!
៤. \`println()\` គឺជាអនុគមន៍ស្តង់ដារដែលមានស្រាប់សម្រាប់បោះពុម្ពអត្ថបទទៅកាន់អេក្រង់ រួចចុះបន្ទាត់ថ្មី។

### ឧទាហរណ៍អនុវត្ត
ខាងក្រោមនេះជាកូដ Kotlin ពេញលេញដ៏សាមញ្ញ៖
\`\`\`kotlin
fun main() {
    println("Hello, World!")
}
\`\`\``
    },
    starterCode: `fun main() {
    println("Hello, World!")
}`
  },
  {
    id: "kotlin-syntax",
    title: {
      en: "Kotlin Syntax",
      km: "វាក្យសម្ពន្ធ Kotlin"
    },
    content: {
      en: `# Kotlin Syntax

Kotlin's syntax is clean and designed to prevent developer mistakes. Let's look at the basic rules that govern Kotlin programs.

> **Tip:** Unlike Java, C++, or C#, semicolons (\`;\`) are completely optional at the end of statements in Kotlin. Most developers prefer to omit them for cleaner code!

### Code Block Structure
- Every statement is placed inside curly braces \`{ }\` of a function or class.
- Statements are executed sequentially from top to bottom.
- Curly braces define scopes, meaning variables defined inside a block are not accessible outside of it.

### Worked Example
Observe how multiple print statements execute without any ending semicolons:
\`\`\`kotlin
fun main() {
    println("First statement")
    println("Second statement")
}
// Output:
// First statement
// Second statement
\`\`\``,
      km: `# វាក្យសម្ពន្ធ Kotlin

វាក្យសម្ពន្ធ (Syntax) របស់ Kotlin គឺមានភាពស្អាត និងត្រូវបានរចនាឡើងដើម្បីការពារកំហុសឆ្គងរបស់អ្នកសរសេរកូដ។ ចូរយើងក្រឡេកមើលច្បាប់ជាមូលដ្ឋានដែលគ្រប់គ្រងកម្មវិធី Kotlin។

> **គន្លឹះ៖** ខុសពី Java, C++ ឬ C# សញ្ញាចុចក្បៀស (\`;\`) គឺមិនចាំបាច់សរសេរទាល់តែសោះនៅចុងបញ្ចប់នៃប្រយោគកូដនីមួយៗក្នុង Kotlin។ អ្នកសរសេរកូដភាគច្រើនជ្រើសរើសមិនសរសេរវាដើម្បីឱ្យកូដស្អាតល្អ!

### រចនាសម្ព័ន្ធប្លុកកូដ
- រាល់ប្រយោគបញ្ជាត្រូវសរសេរនៅក្នុងសញ្ញាធ្នូ \`{ }\` នៃអនុគមន៍ ឬថ្នាក់ (Class)។
- ប្រយោគកូដត្រូវបានដំណើរការតាមលំដាប់លំដោយពីលើចុះក្រោម។
- សញ្ញាធ្នូកំណត់ដែនកំណត់ (Scope) មានន័យថាអថេរដែលបង្កើតក្នុងប្លុកមួយ មិនអាចប្រើប្រាស់ក្រៅប្លុកនោះបានឡើយ។

### ឧទាហរណ៍អនុវត្ត
សង្កេតមើលរបៀបដែលពាក្យបញ្ជាបោះពុម្ពជាច្រើនដំណើរការដោយគ្មានសញ្ញាចុចក្បៀសនៅចុងបញ្ចប់៖
\`\`\`kotlin
fun main() {
    println("First statement")
    println("Second statement")
}
// លទ្ធផល៖
// First statement
// Second statement
\`\`\``
    },
    starterCode: `fun main() {
    println("Line 1")
    println("Line 2")
}`
  },
  {
    id: "kotlin-output",
    title: {
      en: "Kotlin Output",
      km: "ការបង្ហាញលទ្ធផល"
    },
    content: {
      en: `# Kotlin Output

To output values or print text to the console, Kotlin provides two primary built-in functions: \`println()\` and \`print()\`.

> **Tip:** While \`println()\` appends a brand new line after printing, \`print()\` does not. Subsequent outputs from \`print()\` will appear on the exact same line!

### Differences in Action
- \`println("Hello")\` prints "Hello" and moves the cursor to the next line.
- \`print("Hello")\` prints "Hello" and leaves the cursor right there.

### Worked Example
Run this example to see the difference in cursor alignments:
\`\`\`kotlin
fun main() {
    print("Welcome ")
    print("to ")
    println("Kotlin!")
    println("This is printed on a new line.")
}
// Output:
// Welcome to Kotlin!
// This is printed on a new line.
\`\`\``,
      km: `# การបង្ហាញលទ្ធផល (Kotlin Output)

ដើម្បីបង្ហាញតម្លៃ ឬបោះពុម្ពអក្សរទៅកាន់អេក្រង់ (Console) Kotlin ផ្តល់នូវអនុគមន៍ស្នូលចំនួនពីរគឺ៖ \`println()\` និង \`print()\`។

> **គន្លឹះ៖** \`println()\` នឹងបន្ថែមការចុះបន្ទាត់ថ្មីមួយបន្ទាប់ពីបោះពុម្ពរួច ចំណែកឯ \`print()\` គឺមិនចុះបន្ទាត់ឡើយ។ រាល់ការបោះពុម្ពបន្ទាប់ពី \`print()\` នឹងបង្ហាញនៅលើបន្ទាត់ដដែល!

### ភាពខុសគ្នាក្នុងការអនុវត្ត
- \`println("Hello")\` បោះពុម្ព "Hello" រួចផ្លាស់ទីទ្រនិចទៅបន្ទាត់ថ្មី។
- \`print("Hello")\` បោះពុម្ព "Hello" រួចទុកទ្រនិចនៅទីតាំងដដែល។

### ឧទាហរណ៍អនុវត្ត
ដំណើរការឧទាហរណ៍នេះដើម្បីមើលភាពខុសគ្នានៃការតម្រឹមបន្ទាត់៖
\`\`\`kotlin
fun main() {
    print("Welcome ")
    print("to ")
    println("Kotlin!")
    println("This is printed on a new line.")
}
// លទ្ធផល៖
// Welcome to Kotlin!
// This is printed on a new line.
\`\`\``
    },
    starterCode: `fun main() {
    print("A ")
    print("B ")
    println("C")
    println("D")
}`
  },
  {
    id: "kotlin-comments",
    title: {
      en: "Kotlin Comments",
      km: "មតិយោបល់ Comments"
    },
    content: {
      en: `# Kotlin Comments

Comments are non-executable text annotations inside your program. They are used to document the logic of your code for yourself and other developers.

> **Tip:** In Kotlin, you can use single-line comments or multi-line comments. Comments are completely ignored by the compiler during code generation!

### Types of Comments
1. **Single-line Comments:** Start with two forward slashes (\`//\`). Anything on that line after the slashes is ignored.
2. **Multi-line Comments:** Start with \`/*\` and end with \`*/\`. Excellent for longer paragraphs or disabling blocks of code temporarily during testing.

### Worked Example
\`\`\`kotlin
fun main() {
    // This is a single-line comment
    println("Comments are hidden!") 

    /* This is a multi-line comment
       that spans across multiple lines
       to explain complex logic */
    println("Only this line runs!")
}
\`\`\``,
      km: `# មតិយោបល់ Comments

មតិយោបល់ (Comments) គឺជាអត្ថបទពន្យល់នៅក្នុងកូដរបស់អ្នកដែលមិនត្រូវបានដំណើរការឡើយ។ ពួកវាត្រូវបានប្រើប្រាស់ដើម្បីចងក្រងឯកសារពន្យល់ពីតក្កវិជ្ជានៃកូដសម្រាប់ខ្លួនឯង និងអ្នកអភិវឌ្ឍន៍ផ្សេងទៀត។

> **គន្លឹះ៖** នៅក្នុង Kotlin អ្នកអាចប្រើប្រាស់មតិយោបល់មួយបន្ទាត់ ឬមតិយោបល់ច្រើនបន្ទាត់បាន។ Comments ត្រូវបានរំលងចោលទាំងស្រុងដោយម៉ាស៊ីនចងក្រង (Compiler) ពេលដំណើរការ!

### ប្រភេទនៃ Comments
១. **មតិយោបល់មួយបន្ទាត់ (Single-line)៖** ចាប់ផ្តើមដោយសញ្ញាទ្រេតពីរ (\`//\`)។ រាល់អត្ថបទនៅបន្ទាត់នោះពីក្រោយសញ្ញានេះត្រូវបានរំលង។
២. **មតិយោបល់ច្រើនបន្ទាត់ (Multi-line)៖** ចាប់ផ្តើមដោយ \`/*\` និងបញ្ចប់ដោយ \`*/\`។ ល្អបំផុតសម្រាប់ការពន្យល់វែងៗ ឬការបិទប្លុកកូដបណ្តោះអាសន្នពេលធ្វើតេស្ត។

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
fun main() {
    // នេះជាមតិយោបល់មួយបន្ទាត់
    println("Comments are hidden!") 

    /* នេះជាមតិយោបល់ច្រើនបន្ទាត់
       ដែលលាតសន្ធឹងជាច្រើនបន្ទាត់
       ដើម្បីពន្យល់កូដស្មុគស្មាញ */
    println("Only this line runs!")
}
\`\`\``
    },
    starterCode: `fun main() {
    // Try adding a comment below
    println("No comments shown in output")
}`
  },
  {
    id: "kotlin-variables",
    title: {
      en: "Kotlin Variables",
      km: "អថេរ Variables"
    },
    content: {
      en: `# Kotlin Variables

Variables are containers for storing data values. Kotlin provides two main keywords to declare variables: \`val\` and \`var\`.

> **Tip:** Always prefer using \`val\` by default! Only use \`var\` if the variable's value needs to change over time. This makes your programs highly predictable and thread-safe.

### Immutable vs Mutable
- **\`val\` (Value / Read-only):** Declares an **immutable** variable. Once assigned, its value cannot be changed or reassigned.
- **\`var\` (Variable / Read-Write):** Declares a **mutable** variable. Its value can be updated freely throughout execution.

### Type Inference
Kotlin is smart! You do not need to explicitly declare the type of a variable. Kotlin infers it automatically based on the assigned value.

### Worked Example
\`\`\`kotlin
fun main() {
    val birthYear = 2000 // Immutable (cannot change)
    var currentAge = 25  // Mutable (can change)
    
    // Changing value
    currentAge = 26 
    
    // birthYear = 2001 // ERROR! Will not compile
    
    println("Born in: $birthYear")
    println("Current Age: $currentAge")
}
\`\`\``,
      km: `# អថេរ Variables

អថេរ (Variables) គឺជាប្រអប់ផ្ទុកសម្រាប់រក្សាទុកតម្លៃទិន្នន័យ។ Kotlin ផ្តល់នូវពាក្យគន្លឹះចម្បងពីរដើម្បីប្រកាសអថេរគឺ៖ \`val\` និង \`var\`។

> **គន្លឹះ៖** គួរតែជ្រើសរើសប្រើប្រាស់ \`val\` ជាលំនាំដើមជានិច្ច! ប្រើ \`var\` តែក្នុងករណីដែលតម្លៃអថេរនោះត្រូវការផ្លាស់ប្តូរទៅថ្ងៃក្រោយប៉ុណ្ណោះ។ ការធ្វើបែបនេះធ្វើឱ្យកម្មវិធីរបស់អ្នកមានសុវត្ថិភាពខ្ពស់ និងងាយស្រួលទស្សន៍ទាយ។

### អថេរមិនអាចប្តូរតម្លៃបាន (Immutable) និងប្តូរបាន (Mutable)
- **\`val\` (Value / Read-only)៖** ប្រកាសអថេរដែល **មិនអាចកែប្រែបាន**។ នៅពេលប្រគល់តម្លៃឱ្យរួច វាមិនអាចផ្លាស់ប្តូរតម្លៃបានឡើយ។
- **\`var\` (Variable / Read-Write)៖** ប្រកាសអថេរដែល **អាចកែប្រែបាន**។ តម្លៃរបស់វាអាចផ្លាស់ប្តូរបានដោយសេរីអំឡុងពេលដំណើរការ។

### ការស្វែងយល់ប្រភេទដោយស្វ័យប្រវត្តិ (Type Inference)
Kotlin មានភាពឆ្លាតវៃ! អ្នកមិនចាំបាច់សរសេរប្រកាសប្រភេទទិន្នន័យរបស់អថេរឡើយ។ Kotlin នឹងស្វែងយល់ និងកំណត់ប្រភេទវាដោយស្វ័យប្រវត្តិផ្អែកលើតម្លៃដែលបានប្រគល់ឱ្យ។

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
fun main() {
    val birthYear = 2000 // មិនអាចផ្លាស់ប្តូរបាន
    var currentAge = 25  // អាចផ្លាស់ប្តូរបាន
    
    // កែប្រែតម្លៃ
    currentAge = 26 
    
    // birthYear = 2001 // កំហុស! ម៉ាស៊ីននឹងមិនចងក្រងឡើយ
    
    println("Born in: $birthYear")
    println("Current Age: $currentAge")
}
\`\`\``
    },
    starterCode: `fun main() {
    val country = "Cambodia"
    var score = 10
    score = 15
    println("Country: " + country)
    println("Score: " + score)
}`
  },
  {
    id: "kotlin-data-types",
    title: {
      en: "Kotlin Data Types",
      km: "ប្រភេទទិន្នន័យ Data Types"
    },
    content: {
      en: `# Kotlin Data Types

Although Kotlin uses type inference to determine data types automatically, you can also declare variables with explicit types.

> **Tip:** To explicitly declare a variable's type, write a colon (\`:\`) followed by the type name after the variable name!

### Common Basic Data Types:
- **Int:** Whole numbers (e.g., \`12\`, \`-450\`).
- **Double:** Fractional/decimal numbers (e.g., \`19.99\`, \`3.1415\`).
- **Boolean:** Truth values (only \`true\` or \`false\`).
- **Char:** A single character (enclosed in single quotes, e.g., \`'A'\`, \`'🇰🇭'\`).
- **String:** A sequence of characters (enclosed in double quotes, e.g., \`"Hello"\`).

### Worked Example
\`\`\`kotlin
fun main() {
    val score: Int = 100
    val price: Double = 49.99
    val hasPassed: Boolean = true
    val grade: Char = 'A'
    val greeting: String = "Welcome to Sabaicode"
    
    println("Greeting: $greeting")
    println("Score: $score, Grade: $grade")
}
\`\`\``,
      km: `# ប្រភេទទិន្នន័យ Data Types

ទោះបីជា Kotlin ប្រើប្រាស់ Type Inference ដើម្បីកំណត់ប្រភេទទិន្នន័យដោយស្វ័យប្រវត្តិក៏ដោយ អ្នកក៏អាចប្រកាសអថេរដោយបញ្ជាក់ប្រភេទទិន្នន័យច្បាស់លាស់បានដែរ។

> **គន្លឹះ៖** ដើម្បីបញ្ជាក់ប្រភេទអថេរឱ្យបានច្បាស់លាស់ សូមសរសេរសញ្ញាចុចពីរ (\`:\`) ពីក្រោយឈ្មោះអថេរ រួចសរសេរឈ្មោះប្រភេទទិន្នន័យនោះ!

### ប្រភេទទិន្នន័យជាមូលដ្ឋានទូទៅ៖
- **Int៖** ចំនួនគត់ (ឧទាហរណ៍៖ \`12\`, \`-450\`)។
- **Double៖** ចំនួនទសភាគ (ឧទាហរណ៍៖ \`19.99\`, \`3.1415\`)។
- **Boolean៖** តម្លៃពិត ឬមិនពិត (\`true\` ឬ \`false\`)។
- **Char៖** តួអក្សរតែមួយគត់ (ព័ទ្ធដោយសញ្ញាសម្រង់តែមួយ ឧទាហរណ៍៖ \`'A'\`)។
- **String៖** ក្រុមតួអក្សរ (ព័ទ្ធដោយសញ្ញាសម្រង់ពីរ ឧទាហរណ៍៖ \`"Hello"\`)។

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
fun main() {
    val score: Int = 100
    val price: Double = 49.99
    val hasPassed: Boolean = true
    val grade: Char = 'A'
    val greeting: String = "Welcome to Sabaicode"
    
    println("Greeting: $greeting")
    println("Score: $score, Grade: $grade")
}
\`\`\``
    },
    starterCode: `fun main() {
    val age: Int = 21
    val weight: Double = 65.5
    val active: Boolean = true
    println("Age: $age, Active: $active")
}`
  }
];
