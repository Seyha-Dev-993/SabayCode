import { Lesson } from '../types';

export const csharpLessonsPart3: Lesson[] = [
  {
    id: "cs-methods",
    title: {
      en: "C# Methods",
      km: "វិធីសាស្ត្រ C# Methods"
    },
    content: {
      en: `### Code Reusability and Organization
A **method** (sometimes called a function) is a structured block of code that only runs when it is called. You can pass data (parameters) into a method, and it can return data as a result.

### 1. Declaring a Method:
In C#, methods are declared inside a class using PascalCase naming conventions:
\`\`\`csharp
class Program {
    static void SayHello() {
        Console.WriteLine("Hello World!");
    }
}
\`\`\`

### 2. Method Breakdown:
- **\`static\`:** Means the method belongs to the Program class itself and not an instance of the class.
- **\`void\`:** The return type. \`void\` means the method does not return any value back to the caller.
- **\`SayHello()\`:** The unique name of the method.

### 3. Calling a Method:
To execute the code, write the method's name followed by parentheses and a semicolon:
\`\`\`csharp
SayHello();
\`\`\`

> **Tip:** Write small, single-purpose methods. A method should ideally do one thing well. This makes debugging and unit testing significantly easier.`,
      km: `### ការប្រើប្រាស់កូដឡើងវិញ និងសណ្តាប់ធ្នាប់កូដ
**វិធីសាស្ត្រ (Method)** ឬអនុគមន៍ គឺជាប្លុកកូដដែលមានរចនាសម្ព័ន្ធ ដែលដំណើរការតែនៅពេលត្រូវបានហៅប៉ុណ្ណោះ។ អ្នកអាចបញ្ជូនទិន្នន័យ (Parameters) ទៅកាន់វា និងទទួលបានលទ្ធផលត្រឡប់មកវិញ។

### ១. ការប្រកាសបង្កើត Method៖
នៅក្នុង C# អនុគមន៍/វិធីសាស្ត្រត្រូវតែបង្កើតឡើងនៅក្នុង Class ដោយប្រើទម្រង់អក្សរ PascalCase (អក្សរធំដើមពាក្យនីមួយៗ)៖
\`\`\`csharp
class Program {
    static void SayHello() {
        Console.WriteLine("Hello World!");
    }
}
\`\`\`

### ២. ស្រាយបំភ្លឺកូដ៖
- **\`static\`:** មានន័យថា Method នេះជារបស់ Program class ផ្ទាល់ ដោយមិនចាំបាច់បង្កើត Object ឡើយ។
- **\`void\`:** ប្រភេទទិន្នន័យត្រឡប់។ \`void\` មានន័យថា Method នេះមិនបញ្ជូនតម្លៃអ្វីត្រឡប់ទៅអ្នកហៅឡើយ។
- **\`SayHello()\`:** ឈ្មោះរបស់ Method។

### ៣. ការហៅ Method មកប្រើ៖
ដើម្បីឱ្យកូដខាងក្នុងដំណើរការ ត្រូវសរសេរឈ្មោះ Method តាមដោយគ្នាបបើកបិទ និងសញ្ញា \`;\`៖
\`\`\`csharp
SayHello();
\`\`\`

> **គន្លឹះ:** គួរតែសរសេរ Method ណាដែលមានតួនាទីតែមួយច្បាស់លាស់។ ការធ្វើបែបនេះជួយឱ្យកូដងាយស្រួលយល់ និងងាយស្រួលធ្វើតេស្តរកកំហុស។`
    },
    starterCode: `using System;

class Program {
    // 1. Declare method
    static void DisplayBanner() {
        Console.WriteLine("========================================");
        Console.WriteLine("        CAMBODIA ACADEMY PORTAL        ");
        Console.WriteLine("========================================");
    }

    static void Main() {
        // 2. Call method
        DisplayBanner();
        Console.WriteLine("Welcome Sok! Learning modular code organization.");
        DisplayBanner(); // Reused!
    }
}`
  },
  {
    id: "cs-method-parameters",
    title: {
      en: "C# Method Parameters",
      km: "ធាតុចូល និងការត្រឡប់តម្លៃ"
    },
    content: {
      en: `### Passing Information Into Methods
Information can be passed to methods as parameters. Parameters act as variables inside the method.

### 1. Basic Parameters & Return Values:
\`\`\`csharp
// Returns an integer
static int Add(int x, int y) {
    return x + y;
}
\`\`\`

### 2. Default (Optional) Parameters:
You can specify a default value using the equals sign (\`=\`). If you call the method without an argument, it uses the default:
\`\`\`csharp
static void PrintCountry(string country = "Cambodia") {
    Console.WriteLine(country);
}
\`\`\`

### 3. C#-Specific: The \`ref\` Keyword
By default, arguments are passed **by value** (copies are made). To pass an argument **by reference**, allowing the method to modify the caller's original variable, use the \`ref\` keyword:
\`\`\`csharp
static void DoubleValue(ref int val) {
    val = val * 2;
}
\`\`\`

### 4. C#-Specific: The \`out\` Keyword
Similar to \`ref\`, but the variable doesn't need to be initialized before being passed. The method *must* assign a value to the \`out\` variable before returning:
\`\`\`csharp
static void GetCoordinates(out int lat, out int lon) {
    lat = 11;
    lon = 104;
}
\`\`\`

> **Note:** When calling a method with \`ref\` or \`out\` parameters, you must write the \`ref\` or \`out\` keyword explicitly in the call signature!`,
      km: `### ការបញ្ជូនព័ត៌មាន និងការទទួលតម្លៃមកវិញ
ទិន្នន័យអាចត្រូវបានបញ្ជូនទៅកាន់ Method តាមរយៈធាតុចូល (Parameters)។ Parameters ដើរតួជាអថេរក្នុងប្លុកកូដនោះ។

### ១. ធាតុចូលមូលដ្ឋាន និងតម្លៃត្រឡប់ (Return Values)៖
\`\`\`csharp
// ត្រឡប់តម្លៃជាចំនួនគត់
static int Add(int x, int y) {
    return x + y;
}
\`\`\`

### ២. ធាតុចូលលំនាំដើម (Optional Parameters)៖
អ្នកអាចកំណត់តម្លៃលំនាំដើមដោយប្រើសញ្ញាស្មើ (\`=\`)។ បើហៅមកប្រើដោយមិនបញ្ជូនតម្លៃ វានឹងយកតម្លៃលំនាំដើម៖
\`\`\`csharp
static void PrintCountry(string country = "Cambodia") {
    Console.WriteLine(country);
}
\`\`\`

### ៣. ពាក្យគន្លឹះ \`ref\` (C#-Specific):
ជាធម្មតា អថេរត្រូវបានបញ្ជូនជា **តម្លៃចម្លង (By Value)**។ ដើម្បីបញ្ជូនជា **សេចក្តីយោងអាសយដ្ឋាន (By Reference)** ដែលអនុញ្ញាតឱ្យ Method កែប្រែតម្លៃអថេរដើមរបស់អ្នកហៅបាន ត្រូវប្រើពាក្យគន្លឹះ \`ref\`៖
\`\`\`csharp
static void DoubleValue(ref int val) {
    val = val * 2;
}
\`\`\`

### ៤. ពាក្យគន្លឹះ \`out\` (C#-Specific):
ស្រដៀងនឹង \`ref\` ដែរ ប៉ុន្តែអថេរដើមមិនចាំបាច់មានតម្លៃជាមុនឡើយ។ ប៉ុន្តែ Method នោះ *ត្រូវតែ* ផ្តល់តម្លៃឱ្យអថេរ \`out\` នោះមុននឹងរត់ចប់៖
\`\`\`csharp
static void GetCoordinates(out int lat, out int lon) {
    lat = 11;
    lon = 104;
}
\`\`\`

> **ចំណាំ:** នៅពេលហៅ Method ដែលប្រើ \`ref\` ឬ \`out\` អ្នកត្រូវតែសរសេរពាក្យ \`ref\` ឬ \`out\` នៅពីមុខអថេរធាតុចូលនោះដែរ!`
    },
    starterCode: `using System;

class Program {
    // 1. Optional param demo
    static void RegisterCourse(string student, string course = "C# .NET") {
        Console.WriteLine($"Student: {student} | Enrolled in: {course}");
    }
    
    // 2. Ref demo
    static void AddBonus(ref int currentSalary) {
        currentSalary += 500; // Modifies original variable in Main
    }
    
    // 3. Out demo
    static void CalculateAreaAndPerimeter(int width, int height, out int area, out int perimeter) {
        area = width * height;
        perimeter = 2 * (width + height);
    }

    static void Main() {
        // Test optional parameters
        RegisterCourse("Chan");
        RegisterCourse("Rath", "Advanced Unity");
        
        // Test ref parameter
        int mySalary = 1500;
        Console.WriteLine($"\\nSalary before: \${mySalary}");
        AddBonus(ref mySalary); // Must use 'ref'
        Console.WriteLine($"Salary after bonus: \${mySalary}");
        
        // Test out parameter
        int totalArea, totalPerim;
        CalculateAreaAndPerimeter(10, 20, out totalArea, out totalPerim); // Must use 'out'
        Console.WriteLine($"\\nResults -> Area: {totalArea}, Perimeter: {totalPerim}");
    }
}`
  },
  {
    id: "cs-method-overloading",
    title: {
      en: "C# Method Overloading",
      km: "ការប្រើឈ្មោះជាន់គ្នា Overloading"
    },
    content: {
      en: `### Multiple Methods, Same Name
With **method overloading**, multiple methods can have the exact same name as long as their parameter signatures (number, type, or position of parameters) are different.

### Example:
\`\`\`csharp
static int PlusMethod(int x, int y) {
    return x + y;
}

static double PlusMethod(double x, double y) {
    return x + y;
}
\`\`\`

### Why Use Overloading?
Instead of defining confusing names like \`PlusMethodInt()\` and \`PlusMethodDouble()\`, you use a single clean name \`PlusMethod()\` for similar conceptual operations across different data structures.

> **Tip:** Method overloading is evaluated at **compile-time** (Static Polymorphism). The .NET compiler inspects the arguments passed and automatically links the call to the correct method signature!`,
      km: `### វិធីសាស្ត្រច្រើនដែលមានឈ្មោះតែមួយ (Method Overloading)
**Method Overloading** អនុញ្ញាតឱ្យយើងបង្កើត Method ជាច្រើនដែលមានឈ្មោះដូចគ្នាទាំងស្រុង លុះត្រាតែហត្ថលេខាធាតុចូល (ចំនួន ប្រភេទ ឬលំដាប់លំដោយនៃ Parameters) ខុសគ្នា។

### ឧទាហរណ៍៖
\`\`\`csharp
static int PlusMethod(int x, int y) {
    return x + y;
}

static double PlusMethod(double x, double y) {
    return x + y;
}
\`\`\`

### ហេតុអ្វីត្រូវប្រើ Overloading?
ជំនួសឱ្យការបង្កើតឈ្មោះស្មុគស្មាញដូចជា \`PlusMethodInt()\` និង \`PlusMethodDouble()\` យើងប្រើតែឈ្មោះរួមដ៏ស្អាតមួយគឺ \`PlusMethod()\` សម្រាប់គ្រប់គ្រងកិច្ចការស្រដៀងគ្នាលើប្រភេទទិន្នន័យខុសៗគ្នា។

> **គន្លឹះ:** Method Overloading ត្រូវបានវាយតម្លៃដោយ Compiler តាំងពីពេលបកប្រែកូដ (Static Polymorphism)។ .NET Compiler ពិនិត្យមើលធាតុចូលដែលបានហៅ រួចភ្ជាប់វាទៅកាន់ Method ដែលត្រូវគ្នាយ៉ាងត្រឹមត្រូវដោយស្វ័យប្រវត្ត!`
    },
    starterCode: `using System;

class Program {
    // 1. Overloaded method for integers
    static int Multiply(int a, int b) {
        Console.WriteLine("Integer Multiply called...");
        return a * b;
    }
    
    // 2. Overloaded method for doubles
    static double Multiply(double a, double b) {
        Console.WriteLine("Double Multiply called...");
        return a * b;
    }
    
    // 3. Overloaded method with 3 integers
    static int Multiply(int a, int b, int c) {
        Console.WriteLine("Three-parameter Multiply called...");
        return a * b * c;
    }

    static void Main() {
        int r1 = Multiply(5, 10);
        Console.WriteLine($"Result 1: {r1}\\n");
        
        double r2 = Multiply(4.5, 2.0);
        Console.WriteLine($"Result 2: {r2}\\n");
        
        int r3 = Multiply(2, 3, 4);
        Console.WriteLine($"Result 3: {r3}");
    }
}`
  }
];
