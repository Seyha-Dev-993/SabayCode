import { Lesson } from '../types';

export const javaLessonsPart1: Lesson[] = [
  {
    id: "java-home",
    title: {
      en: "Java Home",
      km: "ទំព័រដើម Java"
    },
    content: {
      en: `### Welcome to Java Programming!
Java is one of the most popular, robust, and versatile object-oriented programming languages in the world. Originally developed by Sun Microsystems (now Oracle) in 1995, it runs on billions of devices worldwide.

### Why Learn Java?
- **Write Once, Run Anywhere (WORA):** Compiled Java bytecode can run on any platform containing a Java Virtual Machine (JVM).
- **Enterprise Demand:** Powerhouse backend engine for major banks, services, and Android apps.
- **Strictly Typed & Safe:** Helps catch programming errors early during the compile-time phase.

> **Tip:** In our interactive console, you can modify any program inside the editor and run it to instantly see the compiled bytecode execution output.`,
      km: `### សូមស្វាគមន៍មកកាន់ការរៀន Java!
Java គឺជាភាសាសរសេរកម្មវិធីតម្រង់វត្ថុ (OOP) ដែលពេញនិយមបំផុត រឹងមាំ និងមានសមត្ថភាពខ្ពស់នៅលើពិភពលោក។ បង្កើតឡើងដំបូងដោយក្រុមហ៊ុន Sun Microsystems (បច្ចុប្បន្នជា Oracle) ក្នុងឆ្នាំ ១៩៩៥ វាត្រូវបានប្រើប្រាស់លើឧបករណ៍រាប់ពាន់លាននៅទូទាំងពិភពលោក។

### ហេតុអ្វីរៀន Java?
- **សរសេរម្តង រត់បានគ្រប់ទីកន្លែង (WORA):** កូដ Java ដែលចងក្រង (Compiled) រួចអាចដំណើរការលើគ្រប់ប្រព័ន្ធទាំងអស់ដែលមាន Java Virtual Machine (JVM)។
- **តម្រូវការទីផ្សារខ្ពស់:** ជាម៉ាស៊ីន Backend ដ៏រឹងមាំសម្រាប់ធនាគារធំៗ សេវាកម្មពពក និងកម្មវិធីទូរស័ព្ទ Android។
- **ការកំណត់ប្រភេទតឹងរ៉ឹង:** ជួយស្វែងរកកំហុសឆ្គងកូដបានលឿនតាំងពីដំណាក់កាល Compile។

> **គន្លឹះ:** នៅក្នុងប្រអប់សរសេរកូដរបស់យើង អ្នកអាចកែសម្រួលកូដ និងដំណើរការវាដើម្បីមើលលទ្ធផលនៃការចងក្រង និងរត់កូដភ្លាមៗ។`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to the Interactive Java Course!");
        System.out.println("សូមស្វាគមន៍មកកាន់វគ្គសិក្សា Java!");
    }
}`
  },
  {
    id: "java-intro",
    title: {
      en: "Java Intro",
      km: "សេចក្តីផ្តើម Java"
    },
    content: {
      en: `### What is Java?
Java is an object-oriented language designed to have as few implementation dependencies as possible. It is secure, fast, and highly structured.

### Key Concepts:
1. **JVM (Java Virtual Machine):** The engine that executes Java bytecode.
2. **JRE (Java Runtime Environment):** Provides libraries and JVM to run Java applications.
3. **JDK (Java Development Kit):** Full software development environment containing compiler (\`javac\`), JRE, and tools.

> **Note:** Java classes should follow the CamelCase naming convention. The class name must match the filename exactly (e.g., \`Main\` class inside \`Main.java\`).`,
      km: `### តើ Java ជាអ្វី?
Java គឺជាភាសាសរសេរកម្មវិធីតម្រង់វត្ថុ (OOP) ដែលត្រូវបានរចនាឡើងដើម្បីឱ្យមានការពឹងផ្អែកលើការដំឡើងតិចបំផុត។ វាមានសុវត្ថិភាពខ្ពស់ ល្បឿនលឿន និងមានរចនាសម្ព័ន្ធរៀបរយ។

### គោលគំនិតចម្បង៖
1. **JVM (Java Virtual Machine):** ម៉ាស៊ីនដែលដំណើរការកូដ Java Bytecode។
2. **JRE (Java Runtime Environment):** ផ្តល់ជូននូវបណ្ណាល័យ (Libraries) និង JVM ដើម្បីដំណើរការកម្មវិធី Java។
3. **JDK (Java Development Kit):** កញ្ចប់ឧបករណ៍អភិវឌ្ឍន៍ដែលមាន Compiler (\`javac\`), JRE និងឧបករណ៍ផ្សេងៗ។

> **ចំណាំ:** ថ្នាក់ (Classes) នៅក្នុង Java ត្រូវសរសេរតាមទម្រង់ CamelCase។ ឈ្មោះថ្នាក់ត្រូវតែដូចគ្នាទៅនឹងឈ្មោះឯកសារ (ឧទាហរណ៍៖ ថ្នាក់ \`Main\` នៅក្នុងឯកសារ \`Main.java\`)។`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        String version = System.getProperty("java.version");
        System.out.println("Java Environment Version: " + version);
    }
}`
  },
  {
    id: "java-get-started",
    title: {
      en: "Java Get Started",
      km: "ការចាប់ផ្តើមជាមួយ Java"
    },
    content: {
      en: `### Writing Your First Program
To start writing Java, you create a text file with a \`.java\` extension, define a public class, and write the main method:

\`\`\`java
public class Main {
    public static void main(String[] args) {
        // Code goes here
    }
}
\`\`\`

### Execution Flow:
1. Write code in \`Main.java\`.
2. Compile code using \`javac Main.java\`, producing \`Main.class\` containing bytecode.
3. Run the bytecode with \`java Main\`.`,
      km: `### ការសរសេរកម្មវិធីដំបូងរបស់អ្នក
ដើម្បីចាប់ផ្តើមសរសេរ Java អ្នកត្រូវបង្កើតឯកសារដែលមានកន្ទុយ \`.java\` រួចកំណត់ថ្នាក់សាធារណៈ (public class) និងសរសេរអនុគមន៍ \`main\`៖

\`\`\`java
public class Main {
    public static void main(String[] args) {
        // កូដសរសេរនៅទីនេះ
    }
}
\`\`\`

### ដំណើរការនៃការរត់កូដ៖
1. សរសេរកូដនៅក្នុងឯកសារ \`Main.java\`។
2. បកប្រែកូដដោយប្រើ \`javac Main.java\` ដែលបង្កើតបានជាឯកសារ \`Main.class\` (Bytecode)។
3. ដំណើរការ Bytecode ជាមួយបញ្ជា \`java Main\`។`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Java is successfully initialized!");
    }
}`
  },
  {
    id: "java-syntax",
    title: {
      en: "Java Syntax",
      km: "វេយ្យាករណ៍ Java"
    },
    content: {
      en: `### Java Basic Syntax
Let's dissect every line of a standard Java file:

- **\`public class Main\`:** Every line of code that runs in Java must be inside a class. In our system, the class is named \`Main\`.
- **\`public static void main(String[] args)\`:** This is the entry point of any Java application. Any code inside its curly braces \`{}\` will be executed.
- **\`System.out.println()\`:** Inside the main method, we use this to print a line of text to the screen.

> **Note:** Every Java statement must end with a semicolon (\`;\`). Java is case-sensitive!`,
      km: `### វេយ្យាករណ៍មូលដ្ឋាន Java
សូមស្វែងយល់លម្អិតអំពីបន្ទាត់កូដនីមួយៗក្នុងឯកសារ Java ស្តង់ដារ៖

- **\`public class Main\`:** រាល់បន្ទាត់កូដដែលដំណើរការក្នុង Java ត្រូវតែស្ថិតនៅក្នុងថ្នាក់ (Class)។ ក្នុងប្រព័ន្ធរបស់យើង ថ្នាក់នេះមានឈ្មោះថា \`Main\`។
- **\`public static void main(String[] args)\`:** នេះជាចំណុចចាប់ផ្តើម (Entry point) នៃកម្មវិធី Java។ រាល់កូដនៅក្នុងសញ្ញាគ្នាប \`{}\` នឹងត្រូវបានរត់។
- **\`System.out.println()\`:** ប្រើសម្រាប់បោះពុម្ពអត្ថបទបង្ហាញនៅលើអេក្រង់។

> **ចំណាំ:** រាល់ការបញ្ជារបស់ Java ត្រូវតែបញ្ចប់ដោយសញ្ញាចុចក្បៀស (\`;\`)។ ភាសា Java បែងចែកអក្សរតូចនិងធំ (Case-sensitive)!`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        System.out.print("This prints ");
        System.out.println("on the same line.");
        System.out.println("This is a separate line!");
    }
}`
  },
  {
    id: "java-output",
    title: {
      en: "Java Output",
      km: "លទ្ធផលបង្ហាញ (Output)"
    },
    content: {
      en: `### Printing Outputs in Java
In Java, there are two primary methods used to print statements to the standard output console:

1. **\`System.out.println(value)\`:** Prints the value and adds a new line at the end.
2. **\`System.out.print(value)\`:** Prints the value without adding a new line. Subsequent prints will continue on the same line.

### Printing Numbers and Math:
You can perform mathematical equations directly inside the print parameters.`,
      km: `### ការបង្ហាញលទ្ធផលក្នុង Java
នៅក្នុង Java មានវិធីសាស្ត្រចម្បងពីរសម្រាប់បោះពុម្ពសារទៅកាន់អេក្រង់ Console៖

1. **\`System.out.println(value)\`:** បោះពុម្ពតម្លៃ រួចចុះបន្ទាត់ថ្មីនៅចុងបញ្ចប់។
2. **\`System.out.print(value)\`:** បោះពុម្ពតម្លៃដោយមិនចុះបន្ទាត់។ ការបោះពុម្ពបន្ទាប់នឹងបន្តនៅលើបន្ទាត់ដដែល។

### ការបោះពុម្ពលេខ និងគណិតវិទ្យា៖
អ្នកអាចគណនាប្រមាណវិធីគណិតវិទ្យាដោយផ្ទាល់នៅក្នុងប៉ារ៉ាម៉ែត្របោះពុម្ព។`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Output A");
        System.out.print("Output B ");
        System.out.print("Output C\\n");
        System.out.println(100 + 250);
    }
}`
  },
  {
    id: "java-comments",
    title: {
      en: "Java Comments",
      km: "មតិយោបល់ (Comments)"
    },
    content: {
      en: `### Adding Comments to Code
Comments are used to explain Java code and make it more readable. They are ignored by the compiler.

### Types of Comments:
1. **Single-line Comments:** Start with two forward slashes (\`//\`). Any text between \`//\` and the end of the line is ignored.
2. **Multi-line Comments:** Start with \`/*\` and end with \`*/\`. Any text between these is ignored.

\`\`\`java
// This is a single line comment
/* This is a multi-line
   comment in Java */
\`\`\``,
      km: `### ការសរសេរមតិយោបល់ក្នុងកូដ
មតិយោបល់ (Comments) ត្រូវបានប្រើប្រាស់ដើម្បីពន្យល់កូដ និងធ្វើឱ្យកូដងាយស្រួលអាន។ ពួកវាត្រូវបានមិនអើពើដោយ Compiler។

### ប្រភេទនៃមតិយោបល់៖
1. **មតិយោបល់មួយបន្ទាត់:** ចាប់ផ្តើមដោយសញ្ញាខ្វែងពីរ (\`//\`)។ អត្ថបទទាំងអស់ចាប់ពី \`//\` រហូតដល់ចុងបន្ទាត់នឹងត្រូវមិនអើពើ។
2. **មតិយោបល់ច្រើនបន្ទាត់:** ចាប់ផ្តើមដោយ \`/*\` និងបញ្ចប់ដោយ \`*/\`។

\`\`\`java
// នេះជាមតិយោបល់មួយបន្ទាត់
/* នេះជាមតិយោបល់
   ច្រើនបន្ទាត់ក្នុង Java */
\`\`\``
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        // This line is a comment and won't execute
        System.out.println("Execution works!"); // inline comment
        /* System.out.println("This is commented out too!"); */
    }
}`
  },
  {
    id: "java-variables",
    title: {
      en: "Java Variables",
      km: "អថេរ (Variables)"
    },
    content: {
      en: `### Storing Data in Variables
Variables are containers for storing data values. In Java, all variables must be declared with a specific data type before use.

### Syntax:
\`\`\`java
type variableName = value;
\`\`\`

### Examples:
- \`String name = "Sok";\` (stores text)
- \`int age = 25;\` (stores integers)
- \`float price = 5.99f;\` (stores decimal numbers, requires \`f\` suffix)
- \`char grade = 'A';\` (stores a single character, inside single quotes)
- \`boolean isPass = true;\` (stores true/false)

> **Tip:** You can use the \`final\` keyword if you want to make a variable unchangeable (constant).`,
      km: `### ការរក្សាទុកទិន្នន័យក្នុងអថេរ
អថេរគឺជាធុងសម្រាប់ផ្ទុកតម្លៃទិន្នន័យ។ នៅក្នុង Java រាល់អថេរទាំងអស់ត្រូវតែប្រកាសជាមួយប្រភេទទិន្នន័យជាក់លាក់មុនពេលប្រើប្រាស់។

### ទម្រង់សរសេរ៖
\`\`\`java
type variableName = value;
\`\`\`

### ឧទាហរណ៍៖
- \`String name = "Sok";\` (ផ្ទុកអត្ថបទ)
- \`int age = 25;\` (ផ្ទុកចំនួនគត់)
- \`float price = 5.99f;\` (ផ្ទុកចំនួនទសភាគ ត្រូវការអក្សរ \`f\` នៅចុងបញ្ចប់)
- \`char grade = 'A';\` (ផ្ទុកតួអក្សរតែមួយ នៅក្នុងសញ្ញាសម្រង់ទោល)
- \`boolean isPass = true;\` (ផ្ទុកតម្លៃពិត/មិនពិត)

> **គន្លឹះ:** អ្នកអាចប្រើពាក្យគន្លឹះ \`final\` ប្រសិនបើចង់ឱ្យអថេរនោះមិនអាចផ្លាស់ប្តូរតម្លៃបាន (Constant)។`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        String student = "Dara";
        int score = 85;
        final double PI = 3.14159; // constant
        
        System.out.println("Student Name: " + student);
        System.out.println("Score: " + score);
        System.out.println("PI: " + PI);
    }
}`
  },
  {
    id: "java-data-types",
    title: {
      en: "Java Data Types",
      km: "ប្រភេទទិន្នន័យ (Data Types)"
    },
    content: {
      en: `### Data Types Overview
Java data types are divided into two main categories:

1. **Primitive Data Types:** Include \`byte\`, \`short\`, \`int\`, \`long\`, \`float\`, \`double\`, \`boolean\`, and \`char\`. These represent basic values directly in memory.
2. **Non-Primitive Data Types:** Include \`String\`, \`Arrays\`, and \`Classes\`. These refer to objects and contain methods.

### Primitive Types Reference Table:
- \`int\`: 4 bytes, stores whole numbers from -2B to 2B.
- \`double\`: 8 bytes, stores fractional numbers up to 15 decimal digits.
- \`boolean\`: 1 bit, stores \`true\` or \`false\`.
- \`char\`: 2 bytes, stores single characters.`,
      km: `### ទិដ្ឋភាពទូទៅនៃប្រភេទទិន្នន័យ
ប្រភេទទិន្នន័យរបស់ Java ត្រូវបានបែងចែកជាពីរក្រុមធំៗ៖

1. **Primitive Data Types (ប្រភេទទិន្នន័យមូលដ្ឋាន):** រួមមាន \`byte\`, \`short\`, \`int\`, \`long\`, \`float\`, \`double\`, \`boolean\`, និង \`char\`។ វាផ្ទុកតម្លៃសាមញ្ញដោយផ្ទាល់ក្នុងមេម៉ូរី។
2. **Non-Primitive Data Types (ប្រភេទទិន្នន័យមិនមែនមូលដ្ឋាន):** រួមមាន \`String\`, \`Arrays\`, និង \`Classes\`។ វាសំដៅលើវត្ថុ (Objects) និងមានរូបមន្តភ្ជាប់មកជាមួយ។

### តារាងយោងប្រភេទមូលដ្ឋាន៖
- \`int\`: ៤ បៃ ផ្ទុកចំនួនគត់ពី -២លានលាន ទៅ ២លានលាន។
- \`double\`: ៨ បៃ ផ្ទុកចំនួនទសភាគរហូតដល់ ១៥ខ្ទង់។
- \`boolean\`: ១ ប៊ីត ផ្ទុកតម្លៃ \`true\` ឬ \`false\`។
- \`char\`: ២ បៃ ផ្ទុកតួអក្សរតែមួយ។`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        byte smallNumber = 120;
        long largeNumber = 9999999999L; // Needs 'L'
        float decimalFloat = 5.75f; // Needs 'f'
        double decimalDouble = 19.99;
        
        System.out.println("Byte: " + smallNumber);
        System.out.println("Long: " + largeNumber);
        System.out.println("Float: " + decimalFloat);
        System.out.println("Double: " + decimalDouble);
    }
}`
  },
  {
    id: "java-type-casting",
    title: {
      en: "Java Type Casting",
      km: "ការប្តូរប្រភេទ (Type Casting)"
    },
    content: {
      en: `### Type Conversion in Java
Type casting is when you assign a value of one primitive data type to another type.

### Two Types of Casting:
1. **Widening Casting (automatically):** Converting a smaller type to a larger type size.
   \`byte\` -> \`short\` -> \`char\` -> \`int\` -> \`long\` -> \`float\` -> \`double\`
2. **Narrowing Casting (manually):** Converting a larger type to a smaller type size. You must put the target type in parentheses in front of the value.
   \`double\` -> \`float\` -> \`long\` -> \`int\` -> \`char\` -> \`short\` -> \`byte\`

\`\`\`java
double price = 9.78;
int roundedPrice = (int) price; // roundedPrice becomes 9
\`\`\``,
      km: `### ការបំលែងប្រភេទក្នុង Java
Type casting គឺជាការផ្ទេរតម្លៃពីប្រភេទទិន្នន័យមួយ ទៅកាន់ប្រភេទទិន្នន័យមួយទៀត។

### ការបំលែងពីរប្រភេទ៖
1. **Widening Casting (ដោយស្វ័យប្រវត្ត):** ការប្តូរពីប្រភេទតូចទៅធំ។
   \`byte\` -> \`short\` -> \`char\` -> \`int\` -> \`long\` -> \`float\` -> \`double\`
2. **Narrowing Casting (ដោយដៃ):** ការប្តូរពីប្រភេទធំទៅតូច។ អ្នកត្រូវដាក់ប្រភេទគោលដៅក្នុងវង់ក្រចកនៅខាងមុខតម្លៃ។

\`\`\`java
double price = 9.78;
int roundedPrice = (int) price; // roundedPrice ក្លាយជា 9
\`\`\``
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        int originalInt = 9;
        double autoDouble = originalInt; // Widening
        
        double originalDouble = 9.78;
        int manualInt = (int) originalDouble; // Narrowing (fraction lost)
        
        System.out.println("Widening cast (int to double): " + autoDouble);
        System.out.println("Narrowing cast (double to int): " + manualInt);
    }
}`
  },
  {
    id: "java-operators",
    title: {
      en: "Java Operators",
      km: "ប្រមាណវិធី (Operators)"
    },
    content: {
      en: `### Performing Operations in Java
Operators are used to perform operations on variables and values.

### Categories of Operators:
1. **Arithmetic:** \`+\`, \`-\`, \`*\`, \`/\`, \`%\` (Modulus), \`++\` (Increment), \`--\` (Decrement).
2. **Assignment:** \`=\`, \`+=\`, \`-=\`, \`*=\`, \`/=\`.
3. **Comparison:** \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`.
4. **Logical:** \`&&\` (Logical AND), \`||\` (Logical OR), \`!\` (Logical NOT).

> **Note:** The division of integers (e.g. \`5 / 2\`) will yield an integer (\`2\`). To get a decimal output, at least one operand must be a decimal type (e.g. \`5.0 / 2\`).`,
      km: `### ការគណនាប្រមាណវិធីក្នុង Java
ប្រមាណវិធី (Operators) ត្រូវបានប្រើដើម្បីអនុវត្តសកម្មភាពលើអថេរ និងតម្លៃនានា។

### ក្រុមនៃប្រមាណវិធី៖
1. **គណិតវិទ្យា:** \`+\`, \`-\`, \`*\`, \`/\`, \`%\` (សំណល់), \`++\` (បន្ថែមមួយ), \`--\` (បន្ថយមួយ)។
2. **ការផ្តល់តម្លៃ:** \`=\`, \`+=\`, \`-=\`, \`*=\`, \`/=\`។
3. **ការប្រៀបធៀប:** \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`។
4. **តក្កវិទ្យា:** \`&&\` (និង), \`||\` (ឬ), \`!\` (បដិសេធ)។

> **ចំណាំ:** ការចែកចំនួនគត់ (ឧទាហរណ៍៖ \`5 / 2\`) នឹងផ្តល់លទ្ធផលជាចំនួនគត់ (\`2\`)។ ដើម្បីទទួលបានចំនួនទសភាគ យ៉ាងហោចណាស់ធាតុមួយត្រូវតែជាទសភាគ (ឧទាហរណ៍៖ \`5.0 / 2\`)។`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        int sum1 = 100 + 50;
        int diff = sum1 - 30;
        int remainder = 10 % 3;
        
        System.out.println("Sum: " + sum1);
        System.out.println("Diff: " + diff);
        System.out.println("10 % 3 = " + remainder);
        System.out.println("5 / 2 = " + (5 / 2));
        System.out.println("5.0 / 2 = " + (5.0 / 2));
    }
}`
  },
  {
    id: "java-strings",
    title: {
      en: "Java Strings",
      km: "ខ្សែអក្សរ (Strings)"
    },
    content: {
      en: `### Manipulating Strings
Strings are objects in Java that store a sequence of characters. They are defined inside double quotes.

### Common String Methods:
- \`length()\`: Returns the number of characters in the string.
- \`toUpperCase()\`: Converts all characters to uppercase.
- \`toLowerCase()\`: Converts all characters to lowercase.
- \`indexOf("text")\`: Returns the index of the first occurrence of a specified substring.

> **Pitfall Warning:** Never compare Strings using \`==\`. The \`==\` operator checks if both variables refer to the exact same object in memory. Always use \`.equals()\` to compare string text contents!`,
      km: `### ការប្រើប្រាស់ខ្សែអក្សរ (Strings)
String គឺជាវត្ថុ (Object) នៅក្នុង Java ដែលផ្ទុកនូវតួអក្សរតម្រៀបគ្នា។ វាត្រូវបានកំណត់នៅក្នុងសញ្ញាសម្រង់ពីរ។

### វិធីសាស្ត្រខ្សែអក្សរទូទៅ៖
- \`length()\`: ផ្តល់នូវចំនួនតួអក្សរសរុប។
- \`toUpperCase()\`: ប្តូរតួអក្សរទាំងអស់ទៅជាអក្សរធំ។
- \`toLowerCase()\`: ប្តូរតួអក្សរទាំងអស់ទៅជាអក្សរតូច។
- \`indexOf("text")\`: ស្វែងរកទីតាំង (Index) ដំបូងបង្អស់នៃអត្ថបទដែលចង់រក។

> **ការព្រមាន:** កុំប្រៀបធៀប Strings ដោយប្រើ \`==\`។ ប្រមាណវិធី \`==\` ពិនិត្យមើលថាតើអថេរទាំងពីរចង្អុលទៅកាន់ទីតាំងមេម៉ូរីដូចគ្នាឬទេ។ ត្រូវប្រើ \`.equals()\` ជានិច្ចដើម្បីប្រៀបធៀបខ្លឹមសារអត្ថបទពិតប្រាកដ!`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        String greeting = "Hello Cambodia!";
        System.out.println("Length: " + greeting.length());
        System.out.println("Uppercase: " + greeting.toUpperCase());
        System.out.println("Index of 'Cambodia': " + greeting.indexOf("Cambodia"));
        
        String s1 = new String("test");
        String s2 = new String("test");
        System.out.println("s1 == s2? " + (s1 == s2)); // false!
        System.out.println("s1.equals(s2)? " + s1.equals(s2)); // true!
    }
}`
  },
  {
    id: "java-math",
    title: {
      en: "Java Math",
      km: "គណិតវិទ្យា (Math)"
    },
    content: {
      en: `### The Math Class
The Java \`Math\` class contains various static methods that allow you to perform mathematical calculations on numbers.

### Common Math Methods:
- \`Math.max(x, y)\`: Finds the highest value of x and y.
- \`Math.min(x, y)\`: Finds the lowest value of x and y.
- \`Math.sqrt(x)\`: Returns the square root of x.
- \`Math.abs(x)\`: Returns the absolute (positive) value of x.
- \`Math.random()\`: Returns a random number between 0.0 (inclusive) and 1.0 (exclusive).`,
      km: `### ថ្នាក់ Math
ថ្នាក់ \`Math\` របស់ Java មានផ្ទុកនូវរូបមន្ត جامد (Static methods) ជាច្រើនដែលអនុញ្ញាតឱ្យអ្នកគណនាគណិតវិទ្យាលើតួលេខយ៉ាងងាយស្រួល។

### វិធីសាស្ត្រ Math ទូទៅ៖
- \`Math.max(x, y)\`: ស្វែងរកតម្លៃធំបំផុតរវាង x និង y។
- \`Math.min(x, y)\`: ស្វែងរកតម្លៃតូចបំផុតរវាង x និង y។
- \`Math.sqrt(x)\`: រកឫសការ៉េនៃ x។
- \`Math.abs(x)\`: រកតម្លៃដាច់ខាត (វិជ្ជមាន) នៃ x។
- \`Math.random()\`: ផ្តល់លេខចៃដន្យចន្លោះពី 0.0 (រួមបញ្ចូល) ទៅ 1.0 (មិនរួមបញ្ចូល)។`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Max of 10, 20: " + Math.max(10, 20));
        System.out.println("Square Root of 64: " + Math.sqrt(64));
        System.out.println("Absolute of -4.7: " + Math.abs(-4.7));
        
        // Random number between 1 and 100
        int randomNum = (int)(Math.random() * 100) + 1;
        System.out.println("Random Number (1-100): " + randomNum);
    }
}`
  },
  {
    id: "java-booleans",
    title: {
      en: "Java Booleans",
      km: "តម្លៃប៊ូលីន (Booleans)"
    },
    content: {
      en: `### Working with Truth Values
A boolean type can only accept one of two values: \`true\` or \`false\`.

### Boolean Expressions:
You can build boolean expressions by using comparison operators. These are highly useful for controlling application flow and logic.

\`\`\`java
int x = 10;
int y = 9;
System.out.println(x > y); // prints true
\`\`\``,
      km: `### ការប្រើប្រាស់តម្លៃពិត/មិនពិត (Booleans)
ប្រភេទទិន្នន័យ Booleans អាចទទួលយកបានតែតម្លៃមួយក្នុងចំណោមពីរ៖ \`true\` (ពិត) ឬ \`false\` (មិនពិត)។

### កន្សោមប៊ូលីន (Boolean Expressions)៖
អ្នកអាចបង្កើតកន្សោមប៊ូលីនដោយប្រើប្រាស់ប្រមាណវិធីប្រៀបធៀប។ ពួកវាមានប្រយោជន៍ខ្លាំងណាស់សម្រាប់គ្រប់គ្រងដំណើរការលក្ខខណ្ឌកម្មវិធី។

\`\`\`java
int x = 10;
int y = 9;
System.out.println(x > y); // បោះពុម្ព true
\`\`\``
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        boolean isJavaFun = true;
        boolean isFishFlying = false;
        
        System.out.println("Is Java fun? " + isJavaFun);
        System.out.println("Is fish flying? " + isFishFlying);
        
        int age = 20;
        int votingAge = 18;
        System.out.println("Can vote? " + (age >= votingAge));
    }
}`
  },
  {
    id: "java-ifelse",
    title: {
      en: "Java If...Else",
      km: "លក្ខខណ្ឌ If...Else"
    },
    content: {
      en: `### Conditional Statements
Java supports standard conditional statements to execute different blocks of code based on logical states.

### Types of Statements:
- \`if\`: Executes code if a specified condition is true.
- \`else if\`: Specifies a new condition to test if the first condition is false.
- \`else\`: Executes code if all conditions are false.
- **Ternary Operator:** Sorthand for if-else: \`variable = (condition) ? expressionTrue : expressionFalse;\``,
      km: `### របាយការណ៍លក្ខខណ្ឌ
Java គាំទ្រការគ្រប់គ្រងលក្ខខណ្ឌធម្មតាដើម្បីដំណើរការប្លុកកូដផ្សេងៗគ្នាផ្អែកលើស្ថានភាពតក្កវិទ្យា។

### ប្រភេទនៃលក្ខខណ្ឌ៖
- \`if\`: ដំណើរការកូដប្រសិនបើលក្ខខណ្ឌពិត។
- \`else if\`: បន្ថែមលក្ខខណ្ឌថ្មីដើម្បីឆែក ប្រសិនបើលក្ខខណ្ឌមុនមិនពិត។
- \`else\`: ដំណើរការកូដប្រសិនបើគ្រប់លក្ខខណ្ឌទាំងអស់មិនពិត។
- **Ternary Operator (លក្ខខណ្ឌកាត់):** \`variable = (condition) ? expressionTrue : expressionFalse;\``
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        int score = 75;
        
        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 70) {
            System.out.println("Grade: B");
        } else {
            System.out.println("Grade: C");
        }
        
        // Ternary operator example
        String result = (score >= 50) ? "Passed" : "Failed";
        System.out.println("Exam Status: " + result);
    }
}`
  },
  {
    id: "java-switch",
    title: {
      en: "Java Switch",
      km: "លក្ខខណ្ឌ Switch"
    },
    content: {
      en: `### The Switch Statement
Instead of writing many \`if else\` statements, you can use a \`switch\` statement. It selects one of many code blocks to be executed based on the evaluation of an expression.

### Core Keywords:
- **\`case\`:** Compares the switch value.
- **\`break\`:** Breaks out of the switch block once a match is found. If omitted, execution falls through to subsequent cases!
- **\`default\`:** Specifies code to run if there is no case match.`,
      km: `### លក្ខខណ្ឌ Switch
ជំនួសឱ្យការសរសេរ \`if else\` ច្រើនជាន់ អ្នកអាចប្រើលក្ខខណ្ឌ \`switch\`។ វាជ្រើសរើសយកប្លុកកូដណាមួយក្នុងចំណោមករណី (Cases) ជាច្រើនដើម្បីដំណើរការ។

### ពាក្យគន្លឹះសំខាន់ៗ៖
- **\`case\`:** បញ្ជាក់ករណីនីមួយៗសម្រាប់ប្រៀបធៀប។
- **\`break\`:** ចាកចេញពីប្លុក switch ភ្លាមៗនៅពេលរកឃើញករណីត្រូវគ្នា។ ប្រសិនបើខកខានមិនដាក់ វាំនឹងដំណើរការករណីបន្តបន្ទាប់ដោយស្វ័យប្រវត្ត (Fall through)!
- **\`default\`:** កំណត់កូដរត់ប្រសិនបើគ្មានករណីណាមួយត្រូវគ្នា។`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        int day = 4;
        
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("Invalid day!");
                break;
        }
    }
}`
  },
  {
    id: "java-while-loop",
    title: {
      en: "Java While Loop",
      km: "រង្វិលជុំ While Loop"
    },
    content: {
      en: `### While and Do-While Loops
Loops are used to execute a block of code repeatedly as long as a specified condition is reached.

### 1. While Loop:
Checks the condition *before* executing the loop body:
\`\`\`java
while (condition) {
    // code
}
\`\`\`

### 2. Do-While Loop:
Executes the loop body *once* before checking the condition, guaranteeing that the code block runs at least once:
\`\`\`java
do {
    // code
} while (condition);
\`\`\``,
      km: `### រង្វិលជុំ While និង Do-While
រង្វិលជុំ (Loops) ត្រូវបានប្រើប្រាស់ដើម្បីដំណើរការប្លុកកូដដដែលៗ ដរាបណាលក្ខខណ្ឌជាក់លាក់មួយនៅតែត្រូវបានបំពេញ។

### 1. While Loop:
ពិនិត្យលក្ខខណ្ឌ *មុនពេល* ដំណើរការកូដក្នុងរង្វិលជុំ៖
\`\`\`java
while (condition) {
    // កូដ
}
\`\`\`

### 2. Do-While Loop:
ដំណើរការកូដក្នុងរង្វិលជុំយ៉ាងហោចណាស់ *ម្តង* រួចទើបពិនិត្យលក្ខខណ្ឌតាមក្រោយ៖
\`\`\`java
do {
    // កូដ
} while (condition);
\`\`\``
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        int count = 1;
        System.out.println("While loop starting:");
        while (count <= 3) {
            System.out.println("Count: " + count);
            count++;
        }
        
        int x = 10;
        System.out.println("Do-While loop starting:");
        do {
            System.out.println("Executed even though condition (x < 5) is false!");
        } while (x < 5);
    }
}`
  },
  {
    id: "java-for-loop",
    title: {
      en: "Java For Loop",
      km: "រង្វិលជុំ For Loop"
    },
    content: {
      en: `### Standard For and For-Each Loops
When you know exactly how many times you want to loop through a block of code, use the \`for\` loop.

### 1. Standard For Loop:
\`\`\`java
for (initialization; condition; increment/decrement) {
    // code
}
\`\`\`

### 2. For-Each Loop (Enhanced For):
Used exclusively to loop through elements in an **array** or a collection:
\`\`\`java
for (type variable : arrayName) {
    // code
}
\`\`\``,
      km: `### រង្វិលជុំ Standard For និង For-Each
នៅពេលអ្នកដឹងច្បាស់ពីចំនួនដងដែលអ្នកចង់ដំណើរការកូដដដែលៗ សូមប្រើប្រាស់រង្វិលជុំ \`for\`។

### 1. Standard For Loop:
\`\`\`java
for (initialization; condition; increment/decrement) {
    // កូដ
}
\`\`\`

### 2. For-Each Loop (រង្វិលជុំកែលម្អ)៖
ប្រើសម្រាប់រត់កាត់ធាតុទាំងអស់នៅក្នុង **Array** ឬ Collection ផ្សេងៗ៖
\`\`\`java
for (type variable : arrayName) {
    // កូដ
}
\`\`\``
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Standard Loop:");
        for (int i = 0; i < 3; i++) {
            System.out.println("Index: " + i);
        }
        
        System.out.println("Enhanced Loop (For-Each):");
        String[] provinces = {"Phnom Penh", "Siem Reap", "Kampot"};
        for (String p : provinces) {
            System.out.println("Province: " + p);
        }
    }
}`
  },
  {
    id: "java-break-continue",
    title: {
      en: "Java Break/Continue",
      km: "ការប្រើ Break/Continue"
    },
    content: {
      en: `### Loop Interruption Commands
Java provides statements to control loop iterations on-the-fly:

- **\`break\`:** Immediately terminates the loop entire execution, jumping to the statement right after the loop block.
- **\`continue\`:** Breaks the current iteration and jumps immediately to the next loop evaluation step.

These are essential for optimizing performance and implementing complex flow conditions.`,
      km: `### បញ្ជាកាត់ផ្តាច់រង្វិលជុំ
Java ផ្តល់នូវសេចក្តីថ្លែងការណ៍ដើម្បីគ្រប់គ្រងរង្វិលជុំភ្លាមៗ៖

- **\`break\`:** បញ្ឈប់ និងចាកចេញពីរង្វិលជុំទាំងស្រុងភ្លាមៗ រួចបន្តទៅកូដបន្ទាប់ពីរង្វិលជុំ។
- **\`continue\`:** រំលងការរត់កូដដែលនៅសល់ក្នុងជុំនេះ រួចលោតទៅចាប់ផ្តើមជុំបន្ទាប់ភ្លាមៗ។

ទាំងនេះមានសារៈសំខាន់សម្រាប់ការបង្កើនល្បឿន និងគ្រប់គ្រងលក្ខខណ្ឌកូដស្មុគស្មាញ។`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Loop with break (stops at 4):");
        for (int i = 1; i <= 8; i++) {
            if (i == 4) {
                break;
            }
            System.out.println(i);
        }
        
        System.out.println("Loop with continue (skips 3):");
        for (int j = 1; j <= 5; j++) {
            if (j == 3) {
                continue;
            }
            System.out.println(j);
        }
    }
}`
  },
  {
    id: "java-arrays",
    title: {
      en: "Java Arrays",
      km: "អារេ (Arrays)"
    },
    content: {
      en: `### Storing Lists of Data
Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

### Declaring Arrays:
In Java, arrays have a **fixed length** which is defined when they are created.

\`\`\`java
String[] cars = {"Volvo", "BMW", "Ford"};
int[] scores = new int[5]; // Creates an empty array of size 5
\`\`\`

### Accessing Elements:
Array indexes start at \`0\`. You can access elements using bracket \`[]\` notations, and find total size via the \`.length\` attribute.`,
      km: `### ការរក្សាទុកបញ្ជីទិន្នន័យ (Arrays)
Arrays ត្រូវបានប្រើដើម្បីផ្ទុកតម្លៃច្រើននៅក្នុងអថេរតែមួយ ជំនួសឱ្យការប្រកាសអថេរដាច់ដោយឡែកពីគ្នា។

### ការប្រកាស Arrays៖
នៅក្នុង Java អារេមាន **ទំហំថេរ (Fixed length)** ដែលត្រូវបានកំណត់នៅពេលបង្កើតឡើងដំបូង។

\`\`\`java
String[] cars = {"Volvo", "BMW", "Ford"};
int[] scores = new int[5]; // បង្កើតអារេទទេដែលមានទំហំ ៥
\`\`\`

### ការទាញយកធាតុ៖
លិបិក្រម (Index) របស់អារេចាប់ផ្តើមពី \`0\`។ អ្នកអាចទាញយកធាតុដោយប្រើសញ្ញាគ្នាប \`[]\` និងស្វែងរកទំហំសរុបតាមរយៈ \`.length\`។`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        String[] subjects = {"Java", "Python", "HTML", "CSS"};
        
        System.out.println("First element: " + subjects[0]);
        System.out.println("Array size: " + subjects.length);
        
        // Modifying value
        subjects[2] = "JavaScript";
        
        System.out.println("Iterating over items:");
        for (int i = 0; i < subjects.length; i++) {
            System.out.println("Subject at " + i + ": " + subjects[i]);
        }
    }
}`
  }
];
