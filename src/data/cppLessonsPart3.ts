import { Lesson } from '../types';

export const cppLessonsPart3: Lesson[] = [
  {
    id: "cpp-functions",
    title: {
      en: "C++ Functions",
      km: "អនុគមន៍ C++"
    },
    content: {
      en: `### Declaring and Calling Functions
A function is a reusable block of code that only runs when it is called. You can pass data (parameters) into a function and return results.

### 1. Declaring vs Defining:
- **Declaration:** Specifies the function's name, return type, and parameters (also called a prototype). Placed above \`main()\`.
- **Definition:** The actual body of the function. Can be written below \`main()\`.

\`\`\`cpp
// Declaration (Prototype)
void greetUser();

int main() {
    greetUser(); // Calling function
    return 0;
}

// Definition
void greetUser() {
    cout << "Hello Cambodian Learner!";
}
\`\`\`

> **Note:** If you define a function below \`main()\` without declaring its prototype above \`main()\`, the compiler will fail, complaining that the function identifier is unknown!`,
      km: `### ការបង្កើត និងការហៅប្រើប្រាស់អនុគមន៍
អនុគមន៍ (Function) គឺជាប្លុកកូដដែលអាចយកមកប្រើឡើងវិញបាន ដែលរត់តែនៅពេលវាត្រូវបានហៅប៉ុណ្ណោះ។ អ្នកអាចបញ្ជូនទិន្នន័យ (ម៉ែត្រ/Parameters) ទៅក្នុងអនុគមន៍ និងទទួលបានលទ្ធផលត្រឡប់មកវិញ។

### ១. ការប្រកាស (Declaration) និងការកំណត់ខ្លឹមសារ (Definition)៖
- **ការប្រកាស (Declaration):** ប្រាប់ឈ្មោះ ប្រភេទលទ្ធផល និងប៉ារ៉ាម៉ែត្ររបស់អនុគមន៍ (ហៅថា Prototype)។ ត្រូវដាក់នៅពីលើ \`main()\`។
- **ការកំណត់ខ្លឹមសារ (Definition):** ជាខ្លឹមសារកូដពិតប្រាកដរបស់អនុគមន៍។ អាចសរសេរនៅខាងក្រោម \`main()\`។

\`\`\`cpp
// ការប្រកាស (Prototype)
void greetUser();

int main() {
    greetUser(); // ការហៅដំណើរការ
    return 0;
}

// ការកំណត់ខ្លឹមសារពិត
void greetUser() {
    cout << "សួស្តីសិស្សខ្មែរ!";
}
\`\`\`

> **ចំណាំ:** ប្រសិនបើអ្នកសរសេរអនុគមន៍នៅខាងក្រោម \`main()\` ដោយគ្មានការប្រកាស (Prototype) នៅពីលើទេ នោះ Compiler នឹងបដិសេធចងក្រងកូដ ដោយសារមិនស្គាល់អនុគមន៍នោះឡើយ!`
    },
    starterCode: `#include <iostream>
using namespace std;

// Function Declaration (Prototype)
void printHeader();
double getDiscountedPrice(double original, double discountPercent);

int main() {
    printHeader(); // Call function 1
    
    double finalPrice = getDiscountedPrice(150.0, 15.0); // Call function 2
    cout << "Final calculated price: $" << finalPrice << "\\n";
    return 0;
}

// Function Definition 1
void printHeader() {
    cout << "=== CAMBODIA ELECTRONICS SHOP ===\\n";
    cout << "Initializing billing module...\\n";
}

// Function Definition 2
double getDiscountedPrice(double original, double discountPercent) {
    return original - (original * (discountPercent / 100.0));
}`
  },
  {
    id: "cpp-parameters",
    title: {
      en: "C++ Function Parameters",
      km: "ប៉ារ៉ាម៉ែត្រអនុគមន៍ C++"
    },
    content: {
      en: `### Passing Arguments to Functions
Information is passed to functions as parameters. In C++, you can pass parameters in two distinct ways:

### 1. Pass by Value (Default):
A copy of the argument is made in memory. Modifying the parameter inside the function does **NOT** alter the original variable.

### 2. Pass by Reference:
We pass a reference to the original variable using the address operator \`&\`. Modifying the parameter inside the function **DOES** alter the original variable! This is highly memory-efficient for large strings or vectors.

\`\`\`cpp
void modifyByValue(int x) { x = 100; }
void modifyByRef(int &x)  { x = 100; }
\`\`\`

### 3. Default Parameter Values:
You can specify default values. If you call the function without arguments, it uses the default:
\`\`\`cpp
void printCountry(string country = "Cambodia") { cout << country; }
\`\`\`

> **Tip:** Use \`const\` alongside pass-by-reference (e.g., \`const string &name\`) to gain reference efficiency while preventing the function from accidentally altering the original value.`,
      km: `### ការបញ្ជូនធាតុចូលទៅក្នុងអនុគមន៍
ព័ត៌មានត្រូវបានបញ្ជូនទៅក្នុងអនុគមន៍តាមរយៈប៉ារ៉ាម៉ែត្រ (Parameters)។ នៅក្នុង C++ មានវិធីសាស្ត្រចម្បងពីរក្នុងការបញ្ជូនប៉ារ៉ាម៉ែត្រ៖

### ១. ការបញ្ជូនតាមតម្លៃ (Pass by Value - លំនាំដើម)៖
តម្លៃរបស់អថេរត្រូវបានថតចម្លង (Copy) ថ្មីទៅកាន់មេម៉ូរី។ ការកែប្រែប៉ារ៉ាម៉ែត្រនៅក្នុងអនុគមន៍ **មិនប៉ះពាល់** ដល់តម្លៃអថេរដើមឡើយ។

### ២. ការបញ្ជូនតាមសេចក្តីយោង (Pass by Reference)៖
យើងបញ្ជូនអាសយដ្ឋាន ឬសេចក្តីយោងនៃអថេរដើមដោយផ្ទាល់ ដោយប្រើប្រាស់សញ្ញា \`&\`។ ការកែប្រែតម្លៃប៉ារ៉ាម៉ែត្រនៅក្នុងអនុគមន៍ **នឹងកែប្រែ** អថេរដើមដោយផ្ទាល់! វិធីនេះសន្សំសំចៃមេម៉ូរីបានល្អបំផុតសម្រាប់ទិន្នន័យធំៗ។

\`\`\`cpp
void modifyByValue(int x) { x = 100; }
void modifyByRef(int &x)  { x = 100; }
\`\`\`

### ៣. តម្លៃប៉ារ៉ាម៉ែត្រលំនាំដើម (Default parameters)៖
អ្នកអាចកំណត់តម្លៃស្រាប់។ បើហៅអនុគមន៍ដោយមិនដាក់តម្លៃ វានឹងយកតម្លៃលំនាំដើម៖
\`\`\`cpp
void printCountry(string country = "Cambodia") { cout << country; }
\`\`\`

> **គន្លឹះ:** ប្រើប្រាស់ពាក្យគន្លឹះ \`const\` ជាមួយសេចក្តីយោង (ដូចជា \`const string &name\`) ដើម្បីទទួលបានល្បឿនលឿន និងធានាសុវត្ថិភាពថាអនុគមន៍នឹងមិនអាចកែប្រែតម្លៃដើមបាន។`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

// Prototypes
void incrementVal(int x);
void incrementRef(int &x);
void showGreeting(string name, string prefix = "Hello");

int main() {
    int gold = 50;
    
    cout << "Original gold: " << gold << "\\n";
    
    incrementVal(gold); // Pass by value
    cout << "After pass-by-value call: " << gold << "\\n";
    
    incrementRef(gold); // Pass by reference
    cout << "After pass-by-reference call: " << gold << "\\n";
    
    cout << "\\nGreetings testing:\\n";
    showGreeting("Dara"); // Uses default prefix "Hello"
    showGreeting("Sophy", "Suasdey"); // Overrides prefix
    
    return 0;
}

void incrementVal(int x) {
    x = x + 10;
}

void incrementRef(int &x) {
    x = x + 10; // Modifies original variable in main() directly!
}

void showGreeting(string name, string prefix) {
    cout << prefix << ", " << name << "!\\n";
}`
  },
  {
    id: "cpp-overloading",
    title: {
      en: "C++ Function Overloading",
      km: "បន្ទុកអនុគមន៍ Overloading"
    },
    content: {
      en: `### Defining Multiple Functions with Same Name
Function Overloading lets you define multiple functions with the **exact same name**, as long as they have **different parameter list signatures** (different types or number of parameters).

### Why use Overloading?
Instead of creating distinct functions like \`addInts(int x, int y)\` and \`addDoubles(double x, double y)\`, you simply define \`add(int, int)\` and \`add(double, double)\`. The compiler matches the correct function at compile-time automatically.

\`\`\`cpp
int add(int x, int y);
double add(double x, double y);
string add(string x, string y);
\`\`\`

> **Note:** Functions cannot be overloaded based solely on a different return type! They *must* differ in their parameter list signatures.`,
      km: `### ការកំណត់អនុគមន៍ច្រើនដែលមានឈ្មោះដូចគ្នា (Overloading)
បន្ទុកអនុគមន៍ (Function Overloading) អនុញ្ញាតឱ្យអ្នកបង្កើតអនុគមន៍ច្រើនដែលមាន **ឈ្មោះដូចគ្នា** ឱ្យតែមាន **ហត្ថលេខាប៉ារ៉ាម៉ែត្រខុសគ្នា** (ប្រភេទ ឬចំនួនប៉ារ៉ាម៉ែត្រខុសគ្នា)។

### ហេតុអ្វីត្រូវប្រើប្រាស់ Overloading?
ជំនួសឱ្យការបង្កើតអនុគមន៍ផ្សេងៗគ្នាដូចជា \`addInts(int x, int y)\` និង \`addDoubles(double x, double y)\` អ្នកគ្រាន់តែបង្កើត \`add(int, int)\` និង \`add(double, double)\`។ Compiler នឹងជ្រើសរើសយកអនុគមន៍ដែលត្រូវមកដំណើរការដោយស្វ័យប្រវត្ត។

\`\`\`cpp
int add(int x, int y);
double add(double x, double y);
string add(string x, string y);
\`\`\`

> **ចំណាំ:** អនុគមន៍មិនអាច Overload គ្នាដោយគ្រាន់តែមានប្រភេទលទ្ធផលត្រឡប់ (Return type) ខុសគ្នានោះទេ! ពួកវា *ដាច់ខាត* ត្រូវតែមានប៉ារ៉ាម៉ែត្រខុសគ្នា។`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

// Overloaded prototypes
int multiply(int x, int y);
double multiply(double x, double y);
string multiply(string text, int times);

int main() {
    cout << "Int product: " << multiply(5, 4) << "\\n";
    cout << "Double product: " << multiply(5.5, 4.0) << "\\n";
    cout << "String replication: " << multiply("Apsara ", 3) << "\\n";
    return 0;
}

int multiply(int x, int y) {
    return x * y;
}

double multiply(double x, double y) {
    return x * y;
}

string multiply(string text, int times) {
    string result = "";
    for (int i = 0; i < times; i++) {
        result += text;
    }
    return result;
}`
  },
  {
    id: "cpp-scope",
    title: {
      en: "C++ Scope",
      km: "ដែនដំណើរការអថេរ Scope"
    },
    content: {
      en: `### Variable Accessibility & Lifetime
Scope determines the accessibility and visibility of variables across different blocks of your program.

### 1. Local Scope:
Variables declared inside a function or a block \`{}\` belong exclusively to that block. They are created when block execution starts and destroyed when it ends.

### 2. Global Scope:
Variables declared outside of any function are global. They are accessible from anywhere in your file and exist for the entire lifetime of your application.

\`\`\`cpp
int globalVar = 10; // Global

int main() {
    int localVar = 5; // Local to main
    {
        int blockVar = 20; // Local to this inner braces block
    }
    // blockVar is not accessible here!
}
\`\`\`

> **Warning:** Avoid excessive use of global variables. They can be modified from anywhere, which makes debugging incredibly difficult and leads to unintended state corruption!`,
      km: `### ដែនដំណើរការ និងជីវិតអថេរ (Scope)
Scope កំណត់ពីលទ្ធភាពចូលប្រើប្រាស់ និងមើលឃើញរបស់អថេរនានានៅក្នុងផ្នែកផ្សេងៗនៃកម្មវិធីរបស់អ្នក។

### ១. ដែនក្នុងស្រុក (Local Scope)៖
អថេរដែលបង្កើតឡើងនៅក្នុងអនុគមន៍ ឬក្នុងសញ្ញាគ្នាប \`{}\` គឺអាចប្រើបានតែក្នុងប្លុកនោះប៉ុណ្ណោះ។ ពួកវាត្រូវបានបង្កើតពេលប្លុកនោះចាប់ផ្តើមរត់ និងបំផ្លាញចោលវិញពេលរត់ចប់។

### ២. ដែនសកល (Global Scope)៖
អថេរដែលប្រកាសនៅខាងក្រៅអនុគមន៍ទាំងអស់ គឺជាអថេរសកល (Global)។ វាអាចចូលប្រើបានពីគ្រប់ទីកន្លែងក្នុងឯកសារកូដ និងមានជីវិតរហូតដល់កម្មវិធីត្រូវបានបិទទាំងស្រុង។

\`\`\`cpp
int globalVar = 10; // សកល

int main() {
    int localVar = 5; // ក្នុងស្រុករបស់ main
    {
        int blockVar = 20; // ក្នុងស្រុករបស់ប្លុកកូដខាងក្នុងនេះ
    }
    // មិនអាចប្រើ blockVar នៅទីនេះបានទេ!
}
\`\`\`

> **ការព្រមាន:** ជៀសវាងការប្រើប្រាស់អថេរសកលច្រើនហួសហេតុ។ ពួកវាអាចត្រូវបានកែសម្រួលពីគ្រប់ទីកន្លែង ដែលធ្វើឱ្យពិបាកខ្លាំងក្នុងការស្វែងរកកំហុសកូដ (Debugging)!`
    },
    starterCode: `#include <iostream>
using namespace std;

// Global variable
int score = 100;

void increaseScore() {
    score += 50; // Modifying global variable
}

int main() {
    cout << "Initial Global Score: " << score << "\\n";
    
    int score = 5; // Local variable shadowing the global variable!
    cout << "Shadowed Local Score: " << score << "\\n";
    
    // Access global score using the scope resolution operator ::
    cout << "Access Global score explicitly: " << ::score << "\\n";
    
    increaseScore();
    cout << "Global Score after function modification: " << ::score << "\\n";
    return 0;
}`
  },
  {
    id: "cpp-recursion",
    title: {
      en: "C++ Recursion",
      km: "ស្វ័យហៅអនុគមន៍ Recursion"
    },
    content: {
      en: `### Functions That Call Themselves
Recursion is a programming technique where a function calls itself to solve smaller sub-problems.

### Two Crucial Components:
1. **Base Case:** The halting condition that prevents the function from calling itself infinitely.
2. **Recursive Step:** The code section where the function calls itself with a simplified argument, working towards the base case.

### Mathematical Representation of Factorial ($N!$):
$N! = N \times (N-1)!$ with Base Case: $0! = 1$.

\`\`\`cpp
int factorial(int n) {
    if (n <= 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive step
}
\`\`\`

> **Warning:** If a recursive function lacks a correct base case or depth goes too deep, it triggers a **Stack Overflow**, immediately crashing your program with a segmentation fault!`,
      km: `### អនុគមន៍ដែលហៅខ្លួនឯង (Recursion)
Recursion គឺជាបច្ចេកទេសសរសេរកម្មវិធីដែលអនុគមន៍មួយហៅខ្លួនឯងឡើងវិញ ដើម្បីដោះស្រាយបញ្ហាតូចៗដែលត្រួតគ្នា។

### ធាតុផ្សំសំខាន់ពីរ៖
១. **លក្ខខណ្ឌបញ្ឈប់ (Base Case):** លក្ខខណ្ឌកាត់ផ្តាច់ដើម្បីកុំឱ្យអនុគមន៍ហៅខ្លួនឯងគ្មានទីបញ្ចប់។
២. **ជំហានស្វ័យហៅ (Recursive Step):** ផ្នែកកូដដែលអនុគមន៍ហៅខ្លួនឯងម្តងទៀតជាមួយតម្លៃប៉ារ៉ាម៉ែត្រកាន់តែតូចទៅៗ សំដៅទៅរកលក្ខខណ្ឌបញ្ឈប់។

### តំណាងគណិតវិទ្យានៃហ្វាក់តូរីយ៉ែល ($N!$)៖
$N! = N \times (N-1)!$ ជាមួយលក្ខខណ្ឌបញ្ឈប់៖ $0! = 1$។

\`\`\`cpp
int factorial(int n) {
    if (n <= 1) return 1; // លក្ខខណ្ឌបញ្ឈប់
    return n * factorial(n - 1); // ជំហានស្វ័យហៅ
}
\`\`\`

> **ការព្រមាន:** ប្រសិនបើអនុគមន៍ Recursion គ្មានលក្ខខណ្ឌបញ្ឈប់ត្រឹមត្រូវ ឬជម្រៅនៃការហៅជ្រៅពេក វានឹងបង្កឱ្យមានការលេចធ្លាយ Stack (Stack Overflow) ដែលធ្វើឱ្យកម្មវិធីគាំងភ្លាមៗ!`
    },
    starterCode: `#include <iostream>
using namespace std;

// Prototype
int sumOfRange(int n);

int main() {
    int target = 5;
    int result = sumOfRange(target);
    cout << "Sum of numbers from 1 to " << target << " is: " << result << "\\n";
    return 0;
}

// Calculates: n + (n-1) + (n-2) + ... + 1
int sumOfRange(int n) {
    if (n <= 1) {
        return 1; // Base Case
    }
    return n + sumOfRange(n - 1); // Recursive Step
}`
  },
  {
    id: "cpp-lambda",
    title: {
      en: "C++ Lambda Expressions",
      km: "កន្សោមឡាំដា Lambda"
    },
    content: {
      en: `### Anonymous Inline Functions
Introduced in C++11, Lambda expressions let you write clean, anonymous inline functions directly inside code blocks.

### Syntax:
\`\`\`cpp
[capture_clause](parameters) -> return_type {
    // body of lambda
};
\`\`\`

### Parts Explained:
1. **Capture Clause \`[]\`:** Allows the lambda to access local variables from its enclosing scope:
   - \`[=]\`: Capture all variables by value.
   - \`[&]\`: Capture all variables by reference.
   - \`[x, &y]\`: Capture variable \`x\` by value and \`y\` by reference.
2. **Parameters \`()\`:** Standard arguments list.
3. **Trailing return type \`-> type\` (Optional):** Specifies the return type, usually inferred automatically by the compiler.

> **Tip:** Lambdas are incredibly useful alongside algorithms like \`std::sort()\` or \`std::for_each()\` to declare inline custom sorting structures.`,
      km: `### អនុគមន៍គ្មានឈ្មោះក្នុងបន្ទាត់ (Lambda Expressions)
ត្រូវបានដាក់បញ្ចូលក្នុង C++11 កន្សោមឡាំដា (Lambda) ជួយឱ្យអ្នកសរសេរអនុគមន៍គ្មានឈ្មោះ (Anonymous functions) ក្នុងបន្ទាត់បានយ៉ាងស្អាត និងរហ័ស។

### រូបមន្ត៖
\`\`\`cpp
[ផ្នែកចាប់អថេរ](ប៉ារ៉ាម៉ែត្រ) -> ប្រភេទលទ្ធផល {
    // កូដរបស់ Lambda
};
\`\`\`

### ពន្យល់ផ្នែកសំខាន់ៗ៖
១. **ផ្នែកចាប់អថេរ \`[]\` (Capture Clause):** អនុញ្ញាតឱ្យ Lambda ប្រើប្រាស់អថេរដែលនៅខាងក្រៅវា៖
   - \`[=]\`: ចាប់យកអថេរខាងក្រៅទាំងអស់តាមតម្លៃ (Value - មិនអាចកែប្រែបាន)។
   - \`[&]\`: ចាប់យកអថេរខាងក្រៅទាំងអស់តាមសេចក្តីយោង (Reference - អាចកែប្រែបាន)។
   - \`[x, &y]\`: ចាប់យកអថេរ \`x\` តាមតម្លៃ និង \`y\` តាមសេចក្តីយោង។
២. **ប៉ារ៉ាម៉ែត្រ \`()\`:** បញ្ជីប៉ារ៉ាម៉ែត្រធម្មតា។
៣. **ប្រភេទលទ្ធផល \`-> type\`:** ប្រភេទលទ្ធផលដែលចង់បាន (អាចលុបចេញបាន ព្រោះ Compiler នឹងស្វែងរកដោយស្វ័យប្រវត្ត)។

> **គន្លឹះ:** ឡាំដា (Lambdas) មានប្រយោជន៍ខ្លាំងណាស់នៅពេលប្រើជាមួយក្បួនដោះស្រាយដូចជា \`std::sort()\` ឬ \`std::for_each()\` ដើម្បីកំណត់លក្ខខណ្ឌតម្រៀបកូដភ្លាមៗ។`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Basic lambda expression assigned to a variable
    auto printSum = [](int x, int y) {
        cout << "Sum calculated inside lambda: " << (x + y) << "\\n";
    };
    
    printSum(25, 45); // Calling lambda
    
    // Lambda capturing outer scope variables
    int baseSalary = 500;
    int bonus = 150;
    
    // Capturing all variables by value using [=]
    auto calculateTotal = [=]() -> int {
        return baseSalary + bonus;
    };
    
    cout << "Calculated total salary: $" << calculateTotal() << "\\n";
    
    // Capturing by reference using [&] to modify outer variable
    auto addBonus = [&bonus](int extra) {
        bonus += extra; // Modifies original bonus variable directly
    };
    
    addBonus(50);
    cout << "Updated outer 'bonus' value: " << bonus << "\\n";
    return 0;
}`
  }
];
