import { Lesson } from '../types';

export const kotlinLessonsPart2: Lesson[] = [
  {
    id: "kotlin-operators",
    title: {
      en: "Kotlin Operators",
      km: "ប្រមាណវិធី Operators"
    },
    content: {
      en: `# Kotlin Operators

Operators are symbols used to perform mathematical or logical operations on variables and values. Kotlin supports standard groups of operators.

> **Tip:** In Kotlin, you can perform standard operations, but Kotlin also translates these operators under the hood to readable method calls (e.g. \`a + b\` becomes \`a.plus(b)\`). This is called Operator Overloading!

### Main Operator Groups:
1. **Arithmetic Operators:** \`+\`, \`-\`, \`*\`, \`/\`, \`%\` (Addition, Subtraction, Multiplication, Division, Modulus).
2. **Assignment Operators:** \`=\`, \`+= \`, \`-=\`, \`*= \`, \`/=\`.
3. **Comparison Operators:** \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`.
4. **Logical Operators:** \`&&\` (Logical AND), \`||\` (Logical OR), \`!\` (Logical NOT).

### Worked Example
\`\`\`kotlin
fun main() {
    val a = 15
    val b = 5
    
    val sum = a + b
    val isGreater = a > b
    
    println("Sum: $sum") // Output: 20
    println("Is A greater than B? $isGreater") // Output: true
}
\`\`\``,
      km: `# ប្រមាណវិធី Operators

ប្រមាណវិធី (Operators) គឺជាសញ្ញានិមិត្តសញ្ញាដែលប្រើប្រាស់ដើម្បីអនុវត្តប្រតិបត្តិការគណិតវិទ្យា ឬតក្កវិទ្យាលើអថេរ និងតម្លៃនានា។ Kotlin គាំទ្ររាល់ក្រុមប្រមាណវិធីស្តង់ដារ។

> **គន្លឹះ៖** នៅក្នុង Kotlin អ្នកអាចប្រើប្រាស់ប្រមាណវិធីធម្មតា ប៉ុន្តែ Kotlin នឹងបកប្រែសញ្ញាទាំងនេះទៅជាការហៅមុខងារខាងក្នុង (ឧទាហរណ៍៖ \`a + b\` ក្លាយជា \`a.plus(b)\`)។ នេះហៅថា Operator Overloading!

### ក្រុមប្រមាណវិធីចម្បងៗ៖
១. **ប្រមាណវិធីគណិតវិទ្យា (Arithmetic)៖** \`+\`, \`-\`, \`*\`, \`/\`, \`%\` (បូក ដក គុណ ចែក សំណល់)។
២. **ប្រមាណវិធីផ្តល់តម្លៃ (Assignment)៖** \`=\`, \`+= \`, \`-=\`, \`*= \`, \`/=\`។
៣. **ប្រមាណវិធីប្រៀបធៀប (Comparison)៖** \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`។
៤. **ប្រមាណវិធីតក្កវិទ្យា (Logical)៖** \`&&\` (និង - AND), \`||\` (ឬ - OR), \`!\` (មិន - NOT)។

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
fun main() {
    val a = 15
    val b = 5
    
    val sum = a + b
    val isGreater = a > b
    
    println("Sum: $sum") // លទ្ធផល៖ 20
    println("Is A greater than B? $isGreater") // លទ្ធផល៖ true
}
\`\`\``
    },
    starterCode: `fun main() {
    var x = 10
    x += 5
    println("X is: $x")
}`
  },
  {
    id: "kotlin-strings",
    title: {
      en: "Kotlin Strings",
      km: "ខ្សែអក្សរ Strings"
    },
    content: {
      en: `# Kotlin Strings

Strings are used for storing text. A String variable contains a collection of characters surrounded by double quotes.

> **Tip:** Kotlin supports **String Templates**! You can insert variable values or expressions directly into a String using the dollar sign (\`$\`). No more messy string concatenations with \`+\`!

### Core Operations
- **Length:** You can find the size of a string with \`.length\`.
- **Case Conversion:** Use \`.uppercase()\` and \`.lowercase()\` to format strings.
- **Concatenation:** Join strings using \`+\` or prefer String Templates.

### Worked Example
\`\`\`kotlin
fun main() {
    val greeting = "Hello"
    val name = "Sabaicode"
    
    // Using string template
    val fullMessage = "$greeting, welcome to $name!"
    
    println(fullMessage)
    println("The name length is: \${name.length}")
    println("Uppercase: \${name.uppercase()}")
}
// Output:
// Hello, welcome to Sabaicode!
// The name length is: 9
// Uppercase: SABAICODE
\`\`\``,
      km: `# ខ្សែអក្សរ Strings

ខ្សែអក្សរ (Strings) ត្រូវបានប្រើប្រាស់សម្រាប់រក្សាទុកអត្ថបទ។ អថេរ String ផ្ទុកនូវបណ្តុំតួអក្សរដែលព័ទ្ធជុំវិញដោយសញ្ញាសម្រង់ពីរ។

> **គន្លឹះ៖** Kotlin គាំទ្រ **String Templates**! អ្នកអាចបញ្ចូលតម្លៃអថេរ ឬកន្សោមកូដដោយផ្ទាល់ទៅក្នុងអត្ថបទដោយប្រើសញ្ញាដុល្លារ (\`$\`)។ មិនបាច់សរសេរបូកភ្ជាប់ខ្សែអក្សរដ៏ស្មុគស្មាញដោយប្រើសញ្ញា \`+\` ទៀតឡើយ!

### ប្រតិបត្តិការស្នូល
- **ប្រវែង៖** អ្នកអាចស្វែងរកចំនួនតួអក្សរដោយប្រើ \`.length\`។
- **ប្តូរទម្រង់អក្សរ៖** ប្រើ \`.uppercase()\` និង \`.lowercase()\` ដើម្បីរៀបចំទ្រង់ទ្រាយអក្សរតូចធំ។
- **ការភ្ជាប់ខ្សែអក្សរ៖** ភ្ជាប់ខ្សែអក្សរដោយប្រើ \`+\` ឬប្រើប្រាស់ String Templates ដែលជាវិធីល្អបំផុត។

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
fun main() {
    val greeting = "Hello"
    val name = "Sabaicode"
    
    // ប្រើប្រាស់ String Template
    val fullMessage = "$greeting, welcome to $name!"
    
    println(fullMessage)
    println("The name length is: \${name.length}")
    println("Uppercase: \${name.uppercase()}")
}
// លទ្ធផល៖
// Hello, welcome to Sabaicode!
// The name length is: 9
// Uppercase: SABAICODE
\`\`\``
    },
    starterCode: `fun main() {
    val firstName = "Sok"
    val lastName = "Dara"
    println("Full Name: $firstName $lastName")
}`
  },
  {
    id: "kotlin-booleans",
    title: {
      en: "Kotlin Booleans",
      km: "ប៊ូលីន Booleans"
    },
    content: {
      en: `# Kotlin Booleans

A boolean data type can only take one of two values: \`true\` or \`false\`. Booleans are commonly used for conditional testing.

> **Tip:** Booleans are generated by comparison operators (like \`>\`, \`<\`, \`==\`). Let's establish a running variable example comparing actual vehicle speed and the legal speed limit to see how comparison yields a boolean.

### Cohesive Speeding Example:
Let's define our core variables:
- \`speedLimit = 80\` (maximum safe speed)
- \`userSpeed = 95\` (current vehicle speed)

We can check if the driver is speeding:
\`\`\`kotlin
val speedLimit = 80
val userSpeed = 95
val isSpeeding: Boolean = userSpeed > speedLimit
\`\`\`

### Worked Example
\`\`\`kotlin
fun main() {
    val speedLimit = 80
    val userSpeed = 95
    
    // Evaluate isSpeeding comparison
    val isSpeeding = userSpeed > speedLimit
    
    println("Speed Limit: $speedLimit km/h")
    println("User Speed: $userSpeed km/h")
    println("Is vehicle speeding? $isSpeeding") 
}
// Output:
// Speed Limit: 80 km/h
// User Speed: 95 km/h
// Is vehicle speeding? true
\`\`\``,
      km: `# ប៊ូលីន Booleans

ប្រភេទទិន្នន័យប៊ូលីន (Boolean) អាចផ្ទុកតម្លៃបានតែមួយក្នុងចំណោមពីរគឺ៖ \`true\` (ពិត) ឬ \`false\` (មិនពិត)។ Booleans ត្រូវបានប្រើប្រាស់ជាទូទៅសម្រាប់ការសាកល្បងលក្ខខណ្ឌ។

> **គន្លឹះ៖** Booleans ត្រូវបានបង្កើតឡើងដោយប្រមាណវិធីប្រៀបធៀប (ដូចជា \`>\`, \`<\`, \`==\`)។ ចូរយើងបង្កើតអថេរគំរូមួយដែលប្រៀបធៀបល្បឿនឡានជាក់ស្តែង និងដែនកំណត់ល្បឿនច្បាប់ ដើម្បីមើលថាតើការប្រៀបធៀបបង្កើតបានជា Boolean យ៉ាងដូចម្តេច។

### ឧទាហរណ៍ល្បឿនឡាន៖
ចូរយើងកំណត់អថេរស្នូល៖
- \`speedLimit = 80\` (ល្បឿនអតិបរមាអនុញ្ញាត)
- \`userSpeed = 95\` (ល្បឿនបើកបរជាក់ស្តែង)

យើងអាចផ្ទៀងផ្ទាត់ថាតើអ្នកបើកបរល្បឿនលឿនហួសកំណត់៖
\`\`\`kotlin
val speedLimit = 80
val userSpeed = 95
val isSpeeding: Boolean = userSpeed > speedLimit
\`\`\`

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
fun main() {
    val speedLimit = 80
    val userSpeed = 95
    
    // គណនាលទ្ធផលប្រៀបធៀប isSpeeding
    val isSpeeding = userSpeed > speedLimit
    
    println("Speed Limit: $speedLimit km/h")
    println("User Speed: $userSpeed km/h")
    println("Is vehicle speeding? $isSpeeding") 
}
// លទ្ធផល៖
// Speed Limit: 80 km/h
// User Speed: 95 km/h
// Is vehicle speeding? true
\`\`\``
    },
    starterCode: `fun main() {
    val speedLimit = 80
    val userSpeed = 95
    val isSpeeding = userSpeed > speedLimit
    println("Is Speeding: $isSpeeding")
}`
  },
  {
    id: "kotlin-if-else",
    title: {
      en: "Kotlin If...Else",
      km: "លក្ខខណ្ឌ If...Else"
    },
    content: {
      en: `# Kotlin If...Else

Kotlin uses \`if\`, \`else if\`, and \`else\` statements to execute different blocks of code based on conditions. 

> **Tip:** In Kotlin, \`if\` is not just a statement — it is also an **expression**! This means it can return a value directly, allowing you to assign the result of an \`if...else\` block directly to a variable.

### Cohesive Example (Building on Speeding Flow):
Let's reuse our speed variables (\`userSpeed = 95\`, \`speedLimit = 80\`) to print warnings.

1. **Standard Statement Pattern:**
\`\`\`kotlin
if (userSpeed > speedLimit) {
    println("SLOW DOWN! You are speeding.")
} else {
    println("Safe speed. Thank you.")
}
\`\`\`

2. **Kotlin Expression Pattern:**
\`\`\`kotlin
val alertMessage = if (userSpeed > speedLimit) "Speeding!" else "Safe Speed."
\`\`\`

### Worked Example
\`\`\`kotlin
fun main() {
    val speedLimit = 80
    val userSpeed = 95
    
    // 1. Conditional block execution
    if (userSpeed > speedLimit) {
        println("Warning: Speeding detected!")
    } else {
        println("Driving within safety guidelines.")
    }
    
    // 2. Using if as an expression
    val status = if (userSpeed > speedLimit) "Danger" else "Normal"
    println("Driver Status: $status")
}
// Output:
// Warning: Speeding detected!
// Driver Status: Danger
\`\`\``,
      km: `# លក្ខខណ្ឌ If...Else

Kotlin ប្រើប្រាស់បញ្ជា \`if\`, \`else if\`, និង \`else\` ដើម្បីដំណើរការប្លុកកូដផ្សេងៗគ្នាផ្ែកលើលក្ខខណ្ឌច្បាស់លាស់។

> **គន្លឹះ៖** នៅក្នុង Kotlin \`if\` មិនមែនគ្រាន់តែជាពាក្យបញ្ជាបញ្ជាក់លក្ខខណ្ឌនោះទេ ប៉ុន្តែវាក៏ជា **Expression** (កន្សោមតម្លៃ) ផងដែរ! នេះមានន័យថាវាអាចផ្តល់តម្លៃត្រឡប់មកវិញដោយផ្ទាល់ ដែលអនុញ្ញាតឱ្យអ្នកយកលទ្ធផលរបស់ប្លុក \`if...else\` ទៅប្រគល់ឱ្យអថេរតែម្តង។

### ឧទាហរណ៍បន្តពីល្បឿនឡាន៖
យើងប្រើប្រាស់អថេរដដែល (\`userSpeed = 95\`, \`speedLimit = 80\`) ដើម្បីបង្ហាញសារព្រមាន។

១. **ទម្រង់លក្ខខណ្ឌធម្មតា (Statement)៖**
\`\`\`kotlin
if (userSpeed > speedLimit) {
    println("SLOW DOWN! You are speeding.")
} else {
    println("Safe speed. Thank you.")
}
\`\`\`

២. **ទម្រង់កន្សោមតម្លៃ (Expression)៖**
\`\`\`kotlin
val alertMessage = if (userSpeed > speedLimit) "Speeding!" else "Safe Speed."
\`\`\`

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
fun main() {
    val speedLimit = 80
    val userSpeed = 95
    
    // ១. ដំណើរការតាមលក្ខខណ្ឌ
    if (userSpeed > speedLimit) {
        println("Warning: Speeding detected!")
    } else {
        println("Driving within safety guidelines.")
    }
    
    // ២. ប្រើប្រាស់ if ជាកន្សោមផ្តល់តម្លៃ
    val status = if (userSpeed > speedLimit) "Danger" else "Normal"
    println("Driver Status: $status")
}
// លទ្ធផល៖
// Warning: Speeding detected!
// Driver Status: Danger
\`\`\``
    },
    starterCode: `fun main() {
    val speedLimit = 80
    val userSpeed = 95
    val message = if (userSpeed > speedLimit) "Slow down!" else "Good speed!"
    println(message)
}`
  },
  {
    id: "kotlin-when",
    title: {
      en: "Kotlin When",
      km: "លក្ខខណ្ឌ When"
    },
    content: {
      en: `# Kotlin When

The \`when\` expression in Kotlin is a highly readable alternative to complex \`switch\` statements or nested \`if...else\` branches. It evaluates a value and executes matching branches.

> **Tip:** Just like \`if\`, \`when\` is also an expression! It can return a value, can match multiple values separated by commas, and can even evaluate values inside ranges (e.g. \`in 0..80\`).

### Cohesive Example (Categorizing Speeds with Ranges):
We can take our \`userSpeed = 95\` and run it through a \`when\` expression to determine fine status and response levels:

\`\`\`kotlin
val userSpeed = 95
val action = when (userSpeed) {
    in 0..80 -> "No penalty. Good job!"
    in 81..100 -> "Warning ticket. $15 Fine."
    else -> "License suspended. Immediate court notice."
}
\`\`\`

### Worked Example
\`\`\`kotlin
fun main() {
    val userSpeed = 95
    
    // Determine penalty based on speed category
    val action = when (userSpeed) {
        in 0..80 -> "Keep it up. Safe speed!"
        in 81..100 -> "Fined: $50 USD."
        else -> "Arrest warning! Speed extremely high."
    }
    
    println("Vehicle speed: $userSpeed km/h")
    println("Officer action: $action")
}
// Output:
// Vehicle speed: 95 km/h
// Officer action: Fined: $50 USD.
\`\`\``,
      km: `# លក្ខខណ្ឌ When

កន្សោម \`when\` នៅក្នុង Kotlin គឺជាជម្រើសដ៏ល្អដែលមានភាពងាយស្រួលអានបំផុត ជំនួសឱ្យការប្រើប្រាស់ \`switch\` ស្មុគស្មាញ ឬលក្ខខណ្ឌ \`if...else\` ច្រើនជាន់។ វាវាយតម្លៃលើតម្លៃមួយ និងដំណើរការប្លុកណាដែលត្រូវគ្នា។

> **គន្លឹះ៖** ដូចគ្នានឹង \`if\` ដែរ \`when\` គឺជា Expression (កន្សោមផ្តល់តម្លៃ)! វាអាចផ្តល់តម្លៃត្រឡប់មកវិញ អាចផ្ទៀងផ្ទាត់តម្លៃច្រើនបំបែកដោយក្បៀស ឬសូម្បីតែវាយតម្លៃនៅក្នុងចន្លោះលំដាប់ (Ranges) (ឧទាហរណ៍៖ \`in 0..80\`)។

### ឧទាហរណ៍ល្បឿនឡាន (ការបែងចែកកម្រិតពិន័យ)៖
យើងយកតម្លៃ \`userSpeed = 95\` មកផ្ទៀងផ្ទាត់តាមរយៈកន្សោម \`when\` ដើម្បីស្វែងរកកម្រិតពិន័យ និងសកម្មភាពច្បាប់៖

\`\`\`kotlin
val userSpeed = 95
val action = when (userSpeed) {
    in 0..80 -> "No penalty. Good job!"
    in 81..100 -> "Warning ticket. $15 Fine."
    else -> "License suspended. Immediate court notice."
}
\`\`\`

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
fun main() {
    val userSpeed = 95
    
    // កំណត់ការផាកពិន័យផ្អែកលើល្បឿនបើកបរ
    val action = when (userSpeed) {
        in 0..80 -> "Keep it up. Safe speed!"
        in 81..100 -> "Fined: $50 USD."
        else -> "Arrest warning! Speed extremely high."
    }
    
    println("Vehicle speed: $userSpeed km/h")
    println("Officer action: $action")
}
// លទ្ធផល៖
// Vehicle speed: 95 km/h
// Officer action: Fined: $50 USD.
\`\`\``
    },
    starterCode: `fun main() {
    val speed = 95
    val status = when (speed) {
        in 0..80 -> "Within Limit"
        in 81..100 -> "Moderate Speeding"
        else -> "Reckless Speeding"
    }
    println("Status: $status")
}`
  },
  {
    id: "kotlin-while-loop",
    title: {
      en: "Kotlin While Loop",
      km: "រង្វិលជុំ While Loop"
    },
    content: {
      en: `# Kotlin While Loop

Loops are used to execute a block of code repeatedly as long as a specified condition remains \`true\`. Kotlin provides standard \`while\` and \`do-while\` loops.

> **Tip:** Ensure the condition in your loop eventually becomes \`false\`; otherwise, you will create an infinite loop that will crash or hang your program!

### Loop Behaviors
- **\`while\` Loop:** Checks the condition *before* executing the code block. If the condition is false initially, the block is never run.
- **\`do-while\` Loop:** Executes the code block *at least once* before checking the condition.

### Worked Example
Below is a simulation tracking speed acceleration incrementally up to the speed limit:
\`\`\`kotlin
fun main() {
    var speed = 75
    val limit = 80
    
    // Accelerate incrementally while speed is under limit
    while (speed < limit) {
        println("Current speed: $speed km/h. Accelerating...")
        speed++ // Increase speed by 1
    }
    println("Speed reached: $speed km/h. Cruise control activated.")
}
// Output:
// Current speed: 75 km/h. Accelerating...
// Current speed: 76 km/h. Accelerating...
// Current speed: 77 km/h. Accelerating...
// Current speed: 78 km/h. Accelerating...
// Current speed: 79 km/h. Accelerating...
// Speed reached: 80 km/h. Cruise control activated.
\`\`\``,
      km: `# រង្វិលជុំ While Loop

រង្វិលជុំ (Loops) ត្រូវបានប្រើប្រាស់ដើម្បីដំណើរការប្លុកកូដដដែលៗ ដរាបណាលក្ខខណ្ឌដែលបានកំណត់នៅតែរក្សាតម្លៃ \`true\`។ Kotlin ផ្តល់ជូនរង្វិលជុំ \`while\` និង \`do-while\` ស្តង់ដារ។

> **គន្លឹះ៖** ត្រូវប្រាកដថាលក្ខខណ្ឌនៅក្នុងរង្វិលជុំរបស់អ្នកនឹងប្រែជា \`false\` នៅចំណុចណាមួយ បើមិនដូច្នោះទេ អ្នកនឹងបង្កើតរង្វិលជុំមិនចេះចប់ (Infinite loop) ដែលធ្វើឱ្យកម្មវិធីគាំង!

### ដំណើរការរង្វិលជុំ
- **រង្វិលជុំ \`while\`៖** ពិនិត្យលក្ខខណ្ឌ *មុនពេល* ដំណើរការប្លុកកូដ។ បើលក្ខខណ្ឌមិនពិតតាំងពីដំបូង ប្លុកកូដនឹងមិនដំណើរការសូម្បីតែម្តង។
- **រង្វិលជុំ \`do-while\`៖** ដំណើរការប្លុកកូដ *យ៉ាងហោចណាស់ម្តង* មុនពេលចាប់ផ្តើមពិនិត្យលក្ខខណ្ឌ។

### ឧទាហរណ៍អនុវត្ត
ខាងក្រោមនេះជាការសាកល្បងបង្កើនល្បឿនឡានរហូតដល់កម្រិតកំណត់៖
\`\`\`kotlin
fun main() {
    var speed = 75
    val limit = 80
    
    // បង្កើនល្បឿនដរាបណាល្បឿននៅក្រោមដែនកំណត់
    while (speed < limit) {
        println("Current speed: $speed km/h. Accelerating...")
        speed++ // បង្កើនល្បឿន ១ ជានិច្ច
    }
    println("Speed reached: $speed km/h. Cruise control activated.")
}
// លទ្ធផល៖
// Current speed: 75 km/h. Accelerating...
// Current speed: 76 km/h. Accelerating...
// Current speed: 77 km/h. Accelerating...
// Current speed: 78 km/h. Accelerating...
// Current speed: 79 km/h. Accelerating...
// Speed reached: 80 km/h. Cruise control activated.
\`\`\``
    },
    starterCode: `fun main() {
    var count = 1
    while (count <= 3) {
        println("Count is: $count")
        count++
    }
}`
  }
];
