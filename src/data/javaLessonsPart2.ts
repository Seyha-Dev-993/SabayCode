import { Lesson } from '../types';

export const javaLessonsPart2: Lesson[] = [
  {
    id: "java-methods-intro",
    title: {
      en: "Java Methods",
      km: "អនុគមន៍ Java"
    },
    content: {
      en: `### Code Reusability with Methods
A **method** is a block of code which only runs when it is called. You can pass data, known as parameters, into a method. Methods are used to perform certain actions, and they are also known as functions.

### Creating a Method:
A method must be declared within a class. It is defined with the name of the method, followed by parentheses \`()\`.

\`\`\`java
public class Main {
    static void myMethod() {
        System.out.println("Method Executed!");
    }
}
\`\`\`

- **\`static\`:** Means that the method belongs to the Main class and not an object of the Main class.
- **\`void\`:** Means that this method does not have a return value.`,
      km: `### ការប្រើប្រាស់អនុគមន៍ (Methods)
**Method** (ឬអនុគមន៍) គឺជាប្លុកកូដដែលដំណើរការតែនៅពេលវាត្រូវបានគេហៅប៉ុណ្ណោះ។ អ្នកអាចបញ្ជូនទិន្នន័យ (ហៅថា ប៉ារ៉ាម៉ែត្រ) ទៅក្នុងអនុគមន៍បាន។ វាជួយឱ្យយើងអាចប្រើប្រាស់កូដដដែលៗឡើងវិញបានយ៉ាងមានប្រសិទ្ធភាព។

### ការបង្កើតអនុគមន៍៖
អនុគមន៍ត្រូវតែប្រកាសនៅក្នុងថ្នាក់ (Class)។ វាត្រូវបានកំណត់ដោយឈ្មោះ រួចតាមដោយវង់ក្រចក \`()\`។

\`\`\`java
public class Main {
    static void myMethod() {
        System.out.println("Method Executed!");
    }
}
\`\`\`

- **\`static\`:** មានន័យថាអនុគមន៍នេះជារបស់ថ្នាក់ Main ដោយផ្ទាល់ (មិនបាច់បង្កើត Object ដើម្បីហៅទេ)។
- **\`void\`:** បញ្ជាក់ថាអនុគមន៍នេះមិនត្រឡប់មកវិញនូវតម្លៃណាមួយឡើយ (No return value)។`
    },
    starterCode: `public class Main {
    // Defining method
    static void sayHello() {
        System.out.println("សួស្តីពីប្រទេសកម្ពុជា! Hello from Cambodia!");
    }

    public static void main(String[] args) {
        System.out.println("Main program starting:");
        // Calling method multiple times
        sayHello();
        sayHello();
    }
}`
  },
  {
    id: "java-method-challenge",
    title: {
      en: "Java Method Challenge",
      km: "ការប្រកួតប្រជែងអនុគមន៍"
    },
    content: {
      en: `### Coding Challenge: Validate Student Grade
Put your method skills to the test! Complete the coding challenge below.

### Task:
Complete the static method \`checkPassStatus\` that takes a score (\`int\`) and returns a boolean (\`true\` if score is 50 or above, \`false\` if score is below 50).

> **Rule:** Do not change the method signature. Fill in the code inside the \`checkPassStatus\` block and test it!`,
      km: `### លំហាត់អនុវត្ត៖ ផ្ទៀងផ្ទាត់ការជាប់/ធ្លាក់
សាកល្បងសមត្ថភាពបង្កើតអនុគមន៍របស់អ្នកជាមួយលំហាត់នេះ!

### ភារកិច្ច៖
បំពេញរូបមន្តនៅក្នុងអនុគមន៍ \`checkPassStatus\` ដែលទទួលពិន្ទុ (\`int\`) រួចបញ្ជូនត្រឡប់តម្លៃជា boolean វិញ (\`true\` ប្រសិនបើពិន្ទុចាប់ពី ៥០ ឡើងទៅ, និង \`false\` ប្រសិនបើពិន្ទុតិចជាង ៥០)។

> **គោលការណ៍:** កុំផ្លាស់ប្តូរការប្រកាសអនុគមន៍ (Method Signature)។ គ្រាន់តែសរសេរកូដនៅក្នុងប្លុក \`checkPassStatus\` រួចដំណើរការវាដើម្បីសាកល្បង!`
    },
    starterCode: `public class Main {
    // Challenge: Complete this method!
    static boolean checkPassStatus(int score) {
        // TODO: Write code here to check if score >= 50
        return false; // Replace this
    }

    public static void main(String[] args) {
        int student1 = 45;
        int student2 = 78;
        
        System.out.println("Student 1 (45) Passed? " + checkPassStatus(student1));
        System.out.println("Student 2 (78) Passed? " + checkPassStatus(student2));
    }
}`
  },
  {
    id: "java-method-parameters",
    title: {
      en: "Java Method Parameters",
      km: "ប៉ារ៉ាម៉ែត្រអនុគមន៍"
    },
    content: {
      en: `### Passing Inputs & Returning Values
Information can be passed to methods as parameters. Parameters act as variables inside the method.

### 1. Multiple Parameters:
You can add as many parameters as you want, separated by commas.
\`\`\`java
static void printUser(String name, int age) { ... }
\`\`\`

### 2. Return Values:
If you want the method to return a value, you can use a primitive type or object instead of \`void\`, and use the \`return\` keyword:
\`\`\`java
static int add(int x, int y) {
    return x + y;
}
\`\`\``,
      km: `### ការបញ្ជូនធាតុចូល និងការត្រឡប់តម្លៃ
ព័ត៌មានអាចត្រូវបានបញ្ជូនទៅក្នុងអនុគមន៍តាមរយៈ ប៉ារ៉ាម៉ែត្រ (Parameters)។ ប៉ារ៉ាម៉ែត្រដើរតួជាអថេរនៅខាងក្នុងអនុគមន៍នោះ។

### 1. ប៉ារ៉ាម៉ែត្រច្រើន៖
អ្នកអាចបន្ថែមប៉ារ៉ាម៉ែត្របានច្រើនតាមចិត្ត ដោយប្រើសញ្ញាក្បៀសដើម្បីបំបែកគ្នា។
\`\`\`java
static void printUser(String name, int age) { ... }
\`\`\`

### 2. ការត្រឡប់តម្លៃ (Return Values)៖
ប្រសិនបើអ្នកចង់ឱ្យអនុគមន៍ត្រឡប់មកវិញនូវតម្លៃណាមួយ អ្នកត្រូវជំនួសពាក្យ \`void\` ទៅជាប្រភេទតម្លៃនោះ រួចប្រើពាក្យគន្លឹះ \`return\`៖
\`\`\`java
static int add(int x, int y) {
    return x + y;
}
\`\`\``
    },
    starterCode: `public class Main {
    // Method with multiple parameters and a return type
    static double calculateDiscount(double price, int discountPercent) {
        double saved = price * (discountPercent / 100.0);
        return price - saved;
    }

    public static void main(String[] args) {
        double originalPrice = 250.0;
        int discount = 20;
        double finalPrice = calculateDiscount(originalPrice, discount);
        
        System.out.println("Original Price: $" + originalPrice);
        System.out.println("After Discount: $" + finalPrice);
    }
}`
  },
  {
    id: "java-method-overloading",
    title: {
      en: "Java Method Overloading",
      km: "ការផ្ទុកលើសអនុគមន៍"
    },
    content: {
      en: `### Method Overloading
With **method overloading**, multiple methods can have the exact same name as long as they have **different parameters** (different number of arguments, or different types of arguments).

### Example:
Instead of defining two separate methods for different data types:
- \`plusMethodInt(int x, int y)\`
- \`plusMethodDouble(double x, double y)\`

We can overload a single \`plusMethod\`:
\`\`\`java
static int plusMethod(int x, int y) { ... }
static double plusMethod(double x, double y) { ... }
\`\`\`

Java will automatically determine which method to call based on the data types of the arguments passed!`,
      km: `### ការផ្ទុកលើសអនុគមន៍ (Method Overloading)
ជាមួយ **Method Overloading** អនុគមន៍ច្រើនអាចមានឈ្មោះដូចគ្នាបាន ដរាបណាពួកវាមាន **ប៉ារ៉ាម៉ែត្រខុសគ្នា** (ចំនួនប៉ារ៉ាម៉ែត្រខុសគ្នា ឬប្រភេទទិន្នន័យប៉ារ៉ាម៉ែត្រខុសគ្នា)។

### ឧទាហរណ៍៖
ជំនួសឱ្យការបង្កើតអនុគមន៍ពីរដាច់ដោយឡែកពីគ្នាសម្រាប់លេខគត់ និងទសភាគ៖
- \`plusMethodInt(int x, int y)\`
- \`plusMethodDouble(double x, double y)\`

យើងអាចបង្កើតឈ្មោះតែមួយគឺ \`plusMethod\`៖
\`\`\`java
static int plusMethod(int x, int y) { ... }
static double plusMethod(double x, double y) { ... }
\`\`\`

Java នឹងជ្រើសរើសអនុគមន៍ដែលត្រឹមត្រូវដោយស្វ័យប្រវត្តិផ្អែកលើប្រភេទធាតុដែលបានបញ្ជូនចូល!`
    },
    starterCode: `public class Main {
    // Overloaded method for integers
    static int add(int x, int y) {
        return x + y;
    }

    // Overloaded method for doubles
    static double add(double x, double y) {
        return x + y;
    }

    public static void main(String[] args) {
        int sumInt = add(5, 10);
        double sumDouble = add(4.3, 6.2);
        
        System.out.println("Integer addition: " + sumInt);
        System.out.println("Double addition: " + sumDouble);
    }
}`
  },
  {
    id: "java-scope",
    title: {
      en: "Java Scope",
      km: "វិសាលភាពកូដ (Scope)"
    },
    content: {
      en: `### Understanding Code Visibility
In Java, variables are only accessible inside the region they are created. This is known as **Scope**.

### 1. Method Scope:
Variables declared directly inside a method are only accessible inside that method (from the line of declaration to the end bracket).

### 2. Block Scope:
Variables declared inside curly braces \`{}\` (such as in an \`if\` statement, \`for\` loop, or \`while\` loop) are only accessible inside those braces.

\`\`\`java
if (true) {
    int temp = 100; // block scope
}
// temp is NOT accessible here!
\`\`\``,
      km: `### ការយល់ដឹងពីវិសាលភាពអថេរ (Scope)
នៅក្នុង Java អថេរអាចប្រើប្រាស់បានតែនៅក្នុងតំបន់ (Region) ដែលពួកវាត្រូវបានបង្កើតឡើងប៉ុណ្ណោះ។ នេះត្រូវបានគេហៅថា **Scope**។

### 1. Method Scope (វិសាលភាពអនុគមន៍)៖
អថេរដែលប្រកាសនៅក្នុងអនុគមន៍ អាចប្រើបានតែក្នុងអនុគមន៍នោះប៉ុណ្ណោះ (ចាប់ពីបន្ទាត់ប្រកាសរហូតដល់គ្នាបបិទ)។

### 2. Block Scope (វិសាលភាពប្លុក)៖
អថេរដែលប្រកាសនៅក្នុងសញ្ញាគ្នាប \`{}\` (ដូចជាក្នុង \`if\` ឬរង្វិលជុំ) អាចប្រើប្រាស់បានតែនៅក្នុងប្លុកនោះប៉ុណ្ណោះ។

\`\`\`java
if (true) {
    int temp = 100; // block scope
}
// មិនអាចហៅអថេរ temp នៅទីនេះបានឡើយ!
\`\`\``
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        int mainVar = 50; // Visible to whole main method
        
        if (mainVar > 30) {
            int blockVar = 100; // Block scope
            System.out.println("Variables inside block: mainVar=" + mainVar + ", blockVar=" + blockVar);
        }
        
        // System.out.println(blockVar); // This would throw a compilation error!
        System.out.println("Variable outside block: mainVar=" + mainVar);
    }
}`
  },
  {
    id: "java-recursion",
    title: {
      en: "Java Recursion",
      km: "អនុគមន៍ហៅខ្លួនឯង"
    },
    content: {
      en: `### Recursion: Functions Calling Themselves
**Recursion** is the technique of making a function call itself. This technique provides a way to break complicated problems down into simple problems which are easier to solve.

### Infinite Loop Danger:
A recursive method must always have a **base case** to stop the recursion. Without it, the method will keep calling itself forever, resulting in a \`StackOverflowError\`!

### Mathematical Example (Factorial):
\`\`\`
factorial(3) = 3 * factorial(2) = 3 * 2 * factorial(1) = 3 * 2 * 1 = 6
\`\`\``,
      km: `### អនុគមន៍ហៅខ្លួនឯង (Recursion)
**Recursion** គឺជាបច្ចេកទេសដែលអនុញ្ញាតឱ្យអនុគមន៍មួយហៅខ្លួនឯងឡើងវិញ។ វិធីសាស្ត្រនេះជួយបំបែកបញ្ហាស្មុគស្មាញឱ្យទៅជាបញ្ហាតូចៗដែលងាយស្រួលដោះស្រាយ។

### គ្រោះថ្នាក់នៃការរត់មិនចេះចប់៖
អនុគមន៍ Recursion ត្រូវតែមាន **លក្ខខណ្ឌបញ្ឈប់ (Base case)** ជានិច្ចដើម្បីកុំឱ្យវាហៅខ្លួនឯងមិនចេះចប់ ដែលបង្កជាកំហុស \`StackOverflowError\` គាំងកម្មវិធី!

### ឧទាហរណ៍គណិតវិទ្យា (ហ្វាក់តូរីយ៉ែល - Factorial):
\`\`\`
factorial(3) = 3 * factorial(2) = 3 * 2 * factorial(1) = 3 * 2 * 1 = 6
\`\`\``
    },
    starterCode: `public class Main {
    // Recursive method to sum numbers from k down to 0
    static int sum(int k) {
        if (k > 0) {
            return k + sum(k - 1); // recursion step
        } else {
            return 0; // base case (halts recursion)
        }
    }

    public static void main(String[] args) {
        int result = sum(10); // sum of numbers 1 to 10
        System.out.println("Sum of numbers (1 to 10): " + result);
    }
}`
  }
];
