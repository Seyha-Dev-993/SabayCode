import { Lesson } from '../types';

export const kotlinLessonsPart3: Lesson[] = [
  {
    id: "kotlin-break-continue",
    title: {
      en: "Kotlin Break/Continue",
      km: "ពាក្យបញ្ជា Break/Continue"
    },
    content: {
      en: `# Kotlin Break/Continue

Kotlin provides loop control keywords to alter the execution flow of loops: \`break\` and \`continue\`.

> **Tip:** You can use labels (e.g., \`loop@\`) with \`break\` and \`continue\` in Kotlin to control outer loops during nested iterations!

### Loop Control Definitions:
- **\`break\`:** Terminates loop execution immediately, transferring control to the first line of code following the loop block.
- **\`continue\`:** Skips the remaining code inside the loop for the *current iteration* and jumps straight to the next evaluation round.

### Worked Example
\`\`\`kotlin
fun main() {
    println("--- Break Example ---")
    for (i in 1..5) {
        if (i == 3) break // stop loop when i is 3
        println("Value: $i")
    }
    
    println("--- Continue Example ---")
    for (i in 1..5) {
        if (i == 3) continue // skip printing when i is 3
        println("Value: $i")
    }
}
// Output:
// --- Break Example ---
// Value: 1
// Value: 2
// --- Continue Example ---
// Value: 1
// Value: 2
// Value: 4
// Value: 5
\`\`\``,
      km: `# ពាក្យបញ្ជា Break/Continue

Kotlin ផ្តល់នូវពាក្យគន្លឹះគ្រប់គ្រងរង្វិលជុំ ដើម្បីកែប្រែលំហូរនៃការដំណើរការរង្វិលជុំគឺ៖ \`break\` និង \`continue\`។

> **គន្លឹះ៖** អ្នកអាចប្រើប្រាស់ផ្លាកសម្គាល់ (Labels) (ឧទាហរណ៍៖ \`loop@\`) ជាមួយ \`break\` និង \`continue\` នៅក្នុង Kotlin ដើម្បីគ្រប់គ្រងរង្វិលជុំផ្នែកខាងក្រៅអំឡុងពេលធ្វើការងាររង្វិលជុំជាន់គ្នា (Nested loops)!

### និយមន័យការគ្រប់គ្រងរង្វិលជុំ៖
- **\`break\`៖** បញ្ឈប់ការដំណើរការរង្វិលជុំភ្លាមៗ ដោយបញ្ជូនការគ្រប់គ្រងទៅកាន់បន្ទាត់កូដដំបូងបង្អស់បន្ទាប់ពីប្លុករង្វិលជុំនោះ។
- **\`continue\`៖** រំលងកូដដែលនៅសល់ក្នុងរង្វិលជុំសម្រាប់ *ជុំបច្ចុប្បន្ន* រួចលោតទៅកាន់ជុំវាយតម្លៃបន្ទាប់ជាភ្លាមៗ។

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
fun main() {
    println("--- Break Example ---")
    for (i in 1..5) {
        if (i == 3) break // បញ្ឈប់រង្វិលជុំពេល i ស្មើ 3
        println("Value: $i")
    }
    
    println("--- Continue Example ---")
    for (i in 1..5) {
        if (i == 3) continue // រំលងការបោះពុម្ពពេល i ស្មើ 3
        println("Value: $i")
    }
}
// លទ្ធផល៖
// --- Break Example ---
// Value: 1
// Value: 2
// --- Continue Example ---
// Value: 1
// Value: 2
// Value: 4
// Value: 5
\`\`\``
    },
    starterCode: `fun main() {
    for (x in 1..5) {
        if (x == 4) break
        println("Number: $x")
    }
}`
  },
  {
    id: "kotlin-arrays",
    title: {
      en: "Kotlin Arrays",
      km: "អារេ Arrays"
    },
    content: {
      en: `# Kotlin Arrays

Arrays are data structures used to store multiple values of the same type in a single variable. In Kotlin, arrays are represented by the \`Array\` class.

> **Tip:** We initialize an array using the \`arrayOf()\` helper function. Let's declare our single running array of vehicle brands: \`arrayOf("Tesla", "BMW", "Toyota", "Ford")\`. We will reuse this exact array across Arrays, For Loop, and Ranges to show how they interconnect!

### Core Array Operations:
- **Accessing Elements:** Retrieve a value using square brackets with an index starting at 0: \`carBrands[0]\`.
- **Modifying Elements:** Reassign values at specific indices: \`carBrands[0] = "Audi"\`.
- **Array Size:** Find the total number of items using the \`.size\` property.

### Worked Example
\`\`\`kotlin
fun main() {
    // Declare the running carBrands array
    val carBrands = arrayOf("Tesla", "BMW", "Toyota", "Ford")
    
    println("Total brands: \${carBrands.size}")
    println("First brand: \${carBrands[0]}")
    
    // Modify an element
    carBrands[0] = "Audi"
    println("Updated first brand: \${carBrands[0]}")
}
// Output:
// Total brands: 4
// First brand: Tesla
// Updated first brand: Audi
\`\`\``,
      km: `# អារេ Arrays

អារេ (Arrays) គឺជាទម្រង់រចនាសម្ព័ន្ធទិន្នន័យដែលប្រើប្រាស់ដើម្បីរក្សាទុកតម្លៃច្រើនដែលមានប្រភេទដូចគ្នា នៅក្នុងអថេរតែមួយ។ នៅក្នុង Kotlin អារេត្រូវបានតំណាងដោយថ្នាក់ \`Array\`។

> **គន្លឹះ៖** យើងបង្កើតអារេមួយដោយប្រើប្រាស់អនុគមន៍ជំនួយ \`arrayOf()\`។ ចូរយើងប្រកាសអថេរអារេឡានគំរូតែមួយគត់៖ \`arrayOf("Tesla", "BMW", "Toyota", "Ford")\`។ យើងនឹងប្រើប្រាស់អារេដដែលនេះនៅទូទាំងមេរៀន Arrays, For Loop និង Ranges ដើម្បីបង្ហាញពីភាពផ្សារភ្ជាប់គ្នា!

### ប្រតិបត្តិការអារេស្នូល៖
- **ការអានតម្លៃ៖** ទាញយកតម្លៃដោយប្រើសញ្ញា அடைពង់ជ្រុង \`[ ]\` ជាមួយលិបិក្រម (Index) ចាប់ផ្តើមពី 0៖ \`carBrands[0]\`។
- **ការកែប្រែតម្លៃ៖** ផ្លាស់ប្តូរតម្លៃនៅលិបិក្រមជាក់លាក់៖ \`carBrands[0] = "Audi"\`។
- **ទំហំអារេ៖** ស្វែងរកចំនួនធាតុសរុបដោយប្រើលក្ខណៈសម្បត្តិ \`.size\`។

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
fun main() {
    // បង្កើតអារេ carBrands គំរូ
    val carBrands = arrayOf("Tesla", "BMW", "Toyota", "Ford")
    
    println("Total brands: \${carBrands.size}")
    println("First brand: \${carBrands[0]}")
    
    // កែប្រែធាតុអារេ
    carBrands[0] = "Audi"
    println("Updated first brand: \${carBrands[0]}")
}
// លទ្ធផល៖
// Total brands: 4
// First brand: Tesla
// Updated first brand: Audi
\`\`\``
    },
    starterCode: `fun main() {
    val carBrands = arrayOf("Tesla", "BMW", "Toyota", "Ford")
    println("Size of array: " + carBrands.size)
}`
  },
  {
    id: "kotlin-for-loop",
    title: {
      en: "Kotlin For Loop",
      km: "រង្វិលជុំ For Loop"
    },
    content: {
      en: `# Kotlin For Loop

The \`for\` loop is used to iterate over any iterable structure, such as arrays, lists, or ranges.

> **Tip:** Let's reuse our \`carBrands\` array from the previous page! This allows us to see how we can easily walk through and examine every brand inside the array sequentially.

### Simple Iteration Syntax:
To read each item in the array without needing to manage index numbers manually, use the \`in\` operator:
\`\`\`kotlin
for (brand in carBrands) {
    println("Car Brand: $brand")
}
\`\`\`

### Worked Example
\`\`\`kotlin
fun main() {
    // Reusing the carBrands array
    val carBrands = arrayOf("Tesla", "BMW", "Toyota", "Ford")
    
    println("--- Standard For Loop ---")
    for (brand in carBrands) {
        println("Processing brand: $brand")
    }
}
// Output:
// --- Standard For Loop ---
// Processing brand: Tesla
// Processing brand: BMW
// Processing brand: Toyota
// Processing brand: Ford
\`\`\``,
      km: `# រង្វិលជុំ For Loop

រង្វិលជុំ \`for\` ត្រូវបានប្រើប្រាស់ដើម្បីទាញយកធាតុពីទម្រង់ទិន្នន័យដែលអាចរាប់បាន ដូចជា អារេ (Arrays), បញ្ជី (Lists), ឬចន្លោះលំដាប់ (Ranges) មកដំណើរការម្តងមួយៗ។

> **គន្លឹះ៖** ចូរយើងប្រើប្រាស់អារេ \`carBrands\` ដដែលពីមេរៀនមុន! ការធ្វើបែបនេះអនុញ្ញាតឱ្យយើងមើលឃើញពីរបៀបរត់កាត់ និងបង្ហាញរាល់ម៉ាកឡាននីមួយៗនៅក្នុងអារេតាមលំដាប់លំដោយយ៉ាងងាយស្រួល។

### វាក្យសម្ពន្ធរង្វិលជុំសាមញ្ញ៖
ដើម្បីអានរាល់ធាតុនីមួយៗក្នុងអារេដោយមិនបាច់គ្រប់គ្រងលេខលិបិក្រម (Index) ដោយដៃ សូមប្រើប្រាស់ប្រមាណវិធី \`in\`៖
\`\`\`kotlin
for (brand in carBrands) {
    println("Car Brand: $brand")
}
\`\`\`

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
fun main() {
    // ប្រើប្រាស់អារេ carBrands ឡើងវិញ
    val carBrands = arrayOf("Tesla", "BMW", "Toyota", "Ford")
    
    println("--- Standard For Loop ---")
    for (brand in carBrands) {
        println("Processing brand: $brand")
    }
}
// លទ្ធផល៖
// --- Standard For Loop ---
// Processing brand: Tesla
// Processing brand: BMW
// Processing brand: Toyota
// Processing brand: Ford
\`\`\``
    },
    starterCode: `fun main() {
    val carBrands = arrayOf("Tesla", "BMW", "Toyota", "Ford")
    for (brand in carBrands) {
        println("Brand: $brand")
    }
}`
  },
  {
    id: "kotlin-ranges",
    title: {
      en: "Kotlin Ranges",
      km: "ចន្លោះលំដាប់ Ranges"
    },
    content: {
      en: `# Kotlin Ranges

Ranges represent a sequence of values over a defined interval. They are created using double dots \`..\` or specialized utility functions.

> **Tip:** Let's connect Ranges back to our \`carBrands\` array! Instead of looping values directly, we can use a range to generate index numbers from \`0\` to \`carBrands.size - 1\` to access items by index.

### Range Syntax Styles:
1. **Inclusive Range (\`..\`):** \`1..5\` represents numbers 1, 2, 3, 4, 5.
2. **Exclusive Range (\`until\`):** \`1 until 5\` represents numbers 1, 2, 3, 4. (Great for zero-based array sizes!)
3. **Descending Range (\`downTo\`):** \`5 downTo 1\` counts backwards.
4. **Step Size (\`step\`):** \`1..5 step 2\` produces 1, 3, 5.

### Worked Example
\`\`\`kotlin
fun main() {
    val carBrands = arrayOf("Tesla", "BMW", "Toyota", "Ford")
    
    println("--- Array Indexing with Range ---")
    // Iterate from index 0 up to last valid index
    for (i in 0..carBrands.size - 1) {
        println("Car at index \$i is \${carBrands[i]}")
    }
    
    println("--- Standard Numeric Range ---")
    for (num in 1..3) {
        println("Number: $num")
    }
}
// Output:
// --- Array Indexing with Range ---
// Car at index 0 is Tesla
// Car at index 1 is BMW
// Car at index 2 is Toyota
// Car at index 3 is Ford
// --- Standard Numeric Range ---
// Number: 1
// Number: 2
// Number: 3
\`\`\``,
      km: `# ចន្លោះលំដាប់ Ranges

ចន្លោះលំដាប់ (Ranges) តំណាងឱ្យលំដាប់លំដោយនៃតម្លៃនៅក្នុងចន្លោះដែលបានកំណត់។ ពួកវាត្រូវបានបង្កើតឡើងដោយប្រើសញ្ញាចុចពីរ \`..\` ឬអនុគមន៍ជំនួយពិសេស។

> **គន្លឹះ៖** ចូរយើងភ្ជាប់មេរៀន Ranges ត្រឡប់ទៅកាន់អារេ \`carBrands\` វិញ! ជំនួសឱ្យការទាញយកតម្លៃដោយផ្ទាល់ យើងអាចប្រើប្រាស់ Range ដើម្បីបង្កើតលេខលិបិក្រមពី \`0\` ដល់ \`carBrands.size - 1\` ដើម្បីអានធាតុអារេតាមលិបិក្រម។

### ទម្រង់សរសេរ Ranges៖
១. **រាប់បញ្ចូលចុង (Inclusive):** \`1..5\` តំណាងឱ្យលេខ ១, ២, ៣, ៤, ៥។
២. **មិនរាប់បញ្ចូលចុង (Exclusive):** \`1 until 5\` តំណាងឱ្យលេខ ១, ២, ៣, ៤ (ល្អបំផុតសម្រាប់ទំហំអារេចាប់ផ្តើមពីសូន្យ!)។
៣. **រាប់ថយក្រោយ (downTo):** \`5 downTo 1\` រាប់ថយក្រោយពី ៥ មក ១។
៤. **លោតជំហាន (step):** \`1..5 step 2\` បង្កើតតម្លៃ ១, ៣, ៥។

### ឧទាហមណ៍អនុវត្ត
\`\`\`kotlin
fun main() {
    val carBrands = arrayOf("Tesla", "BMW", "Toyota", "Ford")
    
    println("--- Array Indexing with Range ---")
    // រត់ពីលិបិក្រម ០ ដល់ លិបិក្រមចុងក្រោយ
    for (i in 0..carBrands.size - 1) {
        println("Car at index \$i is \${carBrands[i]}")
    }
    
    println("--- Standard Numeric Range ---")
    for (num in 1..3) {
        println("Number: $num")
    }
}
// លទ្ធផល៖
// --- Array Indexing with Range ---
// Car at index 0 is Tesla
// Car at index 1 is BMW
// Car at index 2 is Toyota
// Car at index 3 is Ford
// --- Standard Numeric Range ---
// Number: 1
// Number: 2
// Number: 3
\`\`\``
    },
    starterCode: `fun main() {
    println("--- Range of numbers 1 to 4 ---")
    for (i in 1..4) {
        println(i)
    }
}`
  },
  {
    id: "kotlin-functions",
    title: {
      en: "Kotlin Functions",
      km: "អនុគមន៍ Functions"
    },
    content: {
      en: `# Kotlin Functions

Functions are self-contained blocks of reusable code designed to perform a specific task. We declare them using the \`fun\` keyword.

> **Tip:** Kotlin supports **default arguments**! This allows you to omit arguments when calling a function, falling back to pre-defined default values automatically.

### Function Structure
- **Parameters:** Values passed into functions, defined as \`name: Type\`.
- **Return Type:** Appended after the parentheses, e.g. \`fun add(a: Int): Int\`. If a function doesn't return anything, its return type is \`Unit\` (optional to specify).
- **Named Arguments:** You can specify parameter names during function calls to ignore order!

### Worked Example
\`\`\`kotlin
// Function with return type Int and default parameter values
fun calculatePrice(basePrice: Double, taxRate: Double = 0.1): Double {
    return basePrice + (basePrice * taxRate)
}

fun main() {
    // Calling with both arguments
    val priceWithCustomTax = calculatePrice(100.0, 0.15)
    
    // Calling with default tax rate (0.1)
    val priceWithDefaultTax = calculatePrice(100.0)
    
    println("Custom Tax price: $priceWithCustomTax") // 115.0
    println("Default Tax price: $priceWithDefaultTax") // 110.0
}
\`\`\``,
      km: `# អនុគមន៍ Functions

អនុគមន៍ (Functions) គឺជាប្លុកកូដឯករាជ្យដែលអាចប្រើឡើងវិញបាន ដែលត្រូវបានរចនាឡើងដើម្បីបំពេញការងារជាក់លាក់ណាមួយ។ យើងប្រកាសពួកវាដោយប្រើពាក្យគន្លឹះ \`fun\`។

> **គន្លឹះ៖** Kotlin គាំទ្រ **Default Arguments**! មុខងារនេះអនុញ្ញាតឱ្យអ្នកមិនបាច់បញ្ជូនតម្លៃមកឱ្យប៉ារ៉ាម៉ែត្រក៏បាននៅពេលហៅអនុគមន៍ ដោយវាដំណើរការតាមតម្លៃលំនាំដើមដែលបានកំណត់ជាស្រាប់។

### រចនាសម្ព័ន្ធអនុគមន៍
- **ប៉ារ៉ាម៉ែត្រ (Parameters)៖** តម្លៃបញ្ជូនចូលទៅកាន់អនុគមន៍ សរសេរក្នុងទម្រង់ \`ឈ្មោះ: ប្រភេទ\`។
- **ប្រភេទតម្លៃត្រឡប់ (Return Type)៖** សរសេរនៅចុងបញ្ចប់នៃវង់ក្រចក ឧទាហរណ៍៖ \`fun add(a: Int): Int\`។ ប្រសិនបើគ្មានតម្លៃត្រឡប់ទេ ប្រភេទរបស់វាគឺ \`Unit\` (មិនបាច់សរសេរក៏បាន)។
- **Named Arguments៖** អ្នកអាចបញ្ជាក់ឈ្មោះប៉ារ៉ាម៉ែត្រនៅពេលហៅអនុគមន៍ ដើម្បីចៀសវាងការខុសលំដាប់លំដោយ!

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
// អនុគមន៍គណនាតម្លៃដែលមានប៉ារ៉ាម៉ែត្រលំនាំដើម taxRate
fun calculatePrice(basePrice: Double, taxRate: Double = 0.1): Double {
    return basePrice + (basePrice * taxRate)
}

fun main() {
    // ហៅអនុគមន៍ដោយបញ្ជូនតម្លៃទាំងពីរ
    val priceWithCustomTax = calculatePrice(100.0, 0.15)
    
    // ហៅអនុគមន៍ដោយប្រើប្រាស់ពន្ធលំនាំដើម (0.1)
    val priceWithDefaultTax = calculatePrice(100.0)
    
    println("Custom Tax price: $priceWithCustomTax") // 115.0
    println("Default Tax price: $priceWithDefaultTax") // 110.0
}
\`\`\``
    },
    starterCode: `fun greet(name: String = "Guest") {
    println("Hello, $name!")
}

fun main() {
    greet("Arun")
    greet() // uses default value
}`
  }
];
