import { Lesson } from '../types';

export const kotlinLessonsPart4: Lesson[] = [
  {
    id: "kotlin-oop",
    title: {
      en: "Kotlin OOP",
      km: "ទស្សនៈវិជ្ជា OOP"
    },
    content: {
      en: `# Kotlin Object-Oriented Programming

Object-Oriented Programming (OOP) is a programming paradigm centered around "objects" rather than actions, and "data" rather than logic. It allows you to model real-world concepts in your code.

> **Tip:** OOP makes your code cleaner, easier to maintain, and highly reusable (adhering to the DRY - Don't Repeat Yourself principle).

### The Four Pillars of OOP:
1. **Inheritance:** Creating new classes from existing ones to inherit and reuse properties and methods.
2. **Polymorphism:** Allowing different classes to be treated as a parent class type, or having subclasses define their own specific behaviors.
3. **Abstraction:** Hiding complex internal implementation details and showing only essential features.
4. **Encapsulation:** Binding data (properties) and methods together inside a single unit (class), protecting it from direct outer access.

### Our Running Example: The Car Class
Throughout this OOP module, we will build and expand upon **one running example**: a \`Car\` class. 
- A car has properties like \`brand\`, \`model\`, and \`year\`.
- A car has behaviors like \`drive()\` and \`charge()\`.

In the next lesson, we will declare this class and create our very first Car object!`,
      km: `# ទស្សនៈវិជ្ជា OOP ក្នុង Kotlin

ការសរសេរកូដបែបតម្រង់វត្ថុ (Object-Oriented Programming - OOP) គឺជាទ្រឹស្ដីនៃការសរសេរកូដដែលផ្ដោតសំខាន់ទៅលើ "វត្ថុ" (Objects) ជាជាងសកម្មភាព និងផ្ដោតលើ "ទិន្នន័យ" ជាជាងតក្កវិទ្យា។ វាអនុញ្ញាតឱ្យអ្នកបង្កើតគំរូនៃពិភពពិតនៅក្នុងកូដរបស់អ្នក។

> **គន្លឹះ៖** OOP ធ្វើឱ្យកូដរបស់អ្នកមានភាពស្អាតល្អ ងាយស្រួលថែទាំ និងអាចប្រើឡើងវិញបានខ្ពស់ (ស្របតាមគោលការណ៍ DRY - កុំសរសេរកូដដដែលៗ)។

### សសរទ្រូងទាំងបួនរបស់ OOP៖
១. **ការបន្តវេន (Inheritance)៖** ការបង្កើតថ្នាក់ (Classes) ថ្មីចេញពីថ្នាក់ដែលមានស្រាប់ ដើម្បីបន្តវេនប្រើប្រាស់លក្ខណៈសម្បត្តិ និងមុខងាររបស់វា។
២. **ពហុទម្រង់ (Polymorphism)៖** ការអនុញ្ញាតឱ្យថ្នាក់ផ្សេងៗគ្នាអាចប្រើប្រាស់មុខងាររួមមួយ ឬអនុញ្ញាតឱ្យថ្នាក់រងកំណត់សកម្មភាពផ្ទាល់ខ្លួនរបស់ពួកគេ។
៣. **អរូបកម្ម (Abstraction)៖** ការលាក់បាំងព័ត៌មានលម្អិតនៃការដំណើរការដ៏ស្មុគស្មាញ និងបង្ហាញតែលក្ខណៈពិសេសដែលចាំបាច់ប៉ុណ្ណោះ។
៤. **ការវេចខ្ចប់ (Encapsulation)៖** ការចងភ្ជាប់ទិន្នន័យ (លក្ខណៈសម្បត្តិ) និងសកម្មភាពជាមួយគ្នាក្នុងផ្នែកតែមួយ (Class) ដើម្បីការពារការចូលប្រើប្រាស់ដោយផ្ទាល់ពីខាងក្រៅ។

### ឧទាហរណ៍ស្នូល៖ ថ្នាក់ឡាន (Car Class)
នៅទូទាំងម៉ូឌុល OOP នេះ យើងនឹងបង្កើត និងពង្រីក **ឧទាហរណ៍ចម្បងតែមួយគត់** គឺ៖ ថ្នាក់ \`Car\`។
- ឡានមានលក្ខណៈសម្បត្តិដូចជា \`brand\` (ម៉ាក), \`model\` (ម៉ូដែល), និង \`year\` (ឆ្នាំផលិត)។
- ឡានមានសកម្មភាពដូចជា \`drive()\` (បើកបរ) និង \`charge()\` (សាកថ្ម)។

នៅក្នុងមេរៀនបន្ទាប់ យើងនឹងប្រកាសថ្នាក់នេះ និងបង្កើតវត្ថុឡានដំបូងបង្អស់របស់យើង!`
    },
    starterCode: `// OOP simplifies code by grouping properties and behaviors.
// Let's explore Classes in the next lesson!`
  },
  {
    id: "kotlin-classes-objects",
    title: {
      en: "Kotlin Classes/Objects",
      km: "ថ្នាក់ និងវត្ថុ Classes/Objects"
    },
    content: {
      en: `# Kotlin Classes and Objects

A **Class** is a blueprint or template for creating objects, while an **Object** is a specific instance of that class.

> **Tip:** To define a class in Kotlin, use the \`class\` keyword. Once defined, you can instantiate objects of this class using simple functional syntax (no \`new\` keyword needed, unlike Java or C#!).

### 1. Declaring our Basic Car Class
Let's declare our \`Car\` class with three property variables, starting with empty default values:
\`\`\`kotlin
class Car {
    var brand = ""
    var model = ""
    var year = 0
}
\`\`\`

### 2. Creating and Accessing Objects
To create an object of type \`Car\` and edit/read its properties using dot-notation:
\`\`\`kotlin
val myCar = Car()
myCar.brand = "Toyota"
myCar.model = "Prius"
myCar.year = 2020
\`\`\`

### Worked Example
\`\`\`kotlin
class Car {
    var brand = ""
    var model = ""
    var year = 0
}

fun main() {
    // Create an instance of Car
    val myCar = Car()
    
    // Set property values
    myCar.brand = "Toyota"
    myCar.model = "Prius"
    myCar.year = 2020
    
    println("Brand: \${myCar.brand}")
    println("Model: \${myCar.model}")
    println("Year: \${myCar.year}")
}
// Output:
// Brand: Toyota
// Model: Prius
// Year: 2020
\`\`\``,
      km: `# ថ្នាក់ និងវត្ថុ Classes/Objects

**ថ្នាក់ (Class)** គឺជាប្លង់មេ ឬជាគំរូសម្រាប់បង្កើតវត្ថុ ចំណែកឯ **វត្ថុ (Object)** គឺជាគំរូជាក់ស្តែងមួយដែលបានបង្កើតឡើងពីថ្នាក់នោះ។

> **គន្លឹះ៖** ដើម្បីកំណត់ថ្នាក់មួយនៅក្នុង Kotlin សូមប្រើពាក្យគន្លឹះ \`class\`។ នៅពេលកំណត់រួច អ្នកអាចបង្កើតវត្ថុនៃថ្នាក់នេះដោយប្រើប្រាស់វាក្យសម្ពន្ធមុខងារសាមញ្ញ (មិនចាំបាច់ប្រើពាក្យគន្លឹះ \`new\` ដូចនៅក្នុង Java ឬ C# ឡើយ!)។

### ១. ការប្រកាសថ្នាក់ឡានសាមញ្ញ
ចូរយើងប្រកាសថ្នាក់ \`Car\` ជាមួយអថេរលក្ខណៈសម្បត្តិបី ដោយកំណត់តម្លៃលំនាំដើមទទេជាមុនសិន៖
\`\`\`kotlin
class Car {
    var brand = ""
    var model = ""
    var year = 0
}
\`\`\`

### ២. ការបង្កើត និងប្រើប្រាស់វត្ថុ
ដើម្បីបង្កើតវត្ថុប្រភេទ \`Car\` និងកែសម្រួល ឬអានតម្លៃលក្ខណៈសម្បត្តិរបស់វាដោយប្រើសញ្ញាចុច (\`.\`)៖
\`\`\`kotlin
val myCar = Car()
myCar.brand = "Toyota"
myCar.model = "Prius"
myCar.year = 2020
\`\`\`

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
class Car {
    var brand = ""
    var model = ""
    var year = 0
}

fun main() {
    // បង្កើតគំរូឡានមួយចេញពីថ្នាក់
    val myCar = Car()
    
    // កំណត់តម្លៃលក្ខណៈសម្បត្តិ
    myCar.brand = "Toyota"
    myCar.model = "Prius"
    myCar.year = 2020
    
    println("Brand: \${myCar.brand}")
    println("Model: \${myCar.model}")
    println("Year: \${myCar.year}")
}
// លទ្ធផល៖
// Brand: Toyota
// Model: Prius
// Year: 2020
\`\`\``
    },
    starterCode: `class Car {
    var brand = ""
    var model = ""
    var year = 0
}

fun main() {
    val myCar = Car()
    myCar.brand = "Ford"
    myCar.model = "Ranger"
    myCar.year = 2023
    println("Car is \${myCar.brand} \${myCar.model}")
}`
  },
  {
    id: "kotlin-constructors",
    title: {
      en: "Kotlin Constructors",
      km: "កុងស្ត្រាក់ទ័រ Constructors"
    },
    content: {
      en: `# Kotlin Constructors

A **Constructor** is a special function used to initialize properties when an object is instantiated. Kotlin provides a highly concise syntax for declaring **Primary Constructors** right in the class header!

> **Tip:** By declaring \`var\` or \`val\` keywords inside the class parenthesis, Kotlin automatically creates class properties and assigns the constructor parameters to them in one line!

### Carrying our Car Class forward:
Instead of creating empty properties and assigning them individually, let's declare \`Car\` with a primary constructor:
\`\`\`kotlin
class Car(var brand: String, var model: String, var year: Int)
\`\`\`

Now we can instantiate a fully-initialized \`Car\` object in a single line of code!
\`\`\`kotlin
val myCar = Car("Tesla", "Model 3", 2022)
\`\`\`

### Worked Example
\`\`\`kotlin
// Highly concise class definition with constructor!
class Car(var brand: String, var model: String, var year: Int)

fun main() {
    // Instantiate with arguments directly
    val myCar = Car("Tesla", "Model 3", 2022)
    val legacyCar = Car("BMW", "M5", 2018)
    
    println("My Car is a \${myCar.year} \${myCar.brand} \${myCar.model}")
    println("Legacy Car is a \${legacyCar.brand}")
}
// Output:
// My Car is a 2022 Tesla Model 3
// Legacy Car is a BMW
\`\`\``,
      km: `# កុងស្ត្រាក់ទ័រ Constructors

**កុងស្ត្រាក់ទ័រ (Constructor)** គឺជាអនុគមន៍ពិសេសមួយដែលប្រើប្រាស់សម្រាប់ចាប់ផ្តើមតម្លៃឱ្យលក្ខណៈសម្បត្តិនានា នៅពេលដែលវត្ថុ (Object) ត្រូវបានបង្កើតឡើង។ Kotlin ផ្តល់នូវវាក្យសម្ពន្ធដ៏ខ្លីល្អបំផុតសម្រាប់ប្រកាស **Primary Constructors** នៅលើក្បាលរបស់ Class តែម្តង!

> **គន្លឹះ៖** តាមរយៈការសរសេរពាក្យគន្លឹះ \`var\` ឬ \`val\` នៅក្នុងវង់ក្រចកក្បាលថ្នាក់ Kotlin នឹងបង្កើតលក្ខណៈសម្បត្តិរបស់ថ្នាក់ និងប្រគល់តម្លៃកុងស្ត្រាក់ទ័រឱ្យពួកវាដោយស្វ័យប្រវត្តិតែមួយបន្ទាត់!

### ការបន្តអភិវឌ្ឍថ្នាក់ឡាន៖
ជំនួសឱ្យការបង្កើតលក្ខណៈសម្បត្តិទទេ និងដំឡើងតម្លៃម្តងមួយៗ ចូរយើងប្រកាស \`Car\` ជាមួយ Primary Constructor៖
\`\`\`kotlin
class Car(var brand: String, var model: String, var year: Int)
\`\`\`

ឥឡូវនេះយើងអាចបង្កើតវត្ថុ \`Car\` ដែលមានតម្លៃស្រាប់ក្នុងរយៈពេលតែមួយបន្ទាត់ប៉ុណ្ណោះ!
\`\`\`kotlin
val myCar = Car("Tesla", "Model 3", 2022)
\`\`\`

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
// ថ្នាក់ខ្លីបំផុតជាមួយកុងស្ត្រាក់ទ័រ!
class Car(var brand: String, var model: String, var year: Int)

fun main() {
    // បង្កើតវត្ថុដោយបញ្ជូនតម្លៃអាគុយម៉ង់ដោយផ្ទាល់
    val myCar = Car("Tesla", "Model 3", 2022)
    val legacyCar = Car("BMW", "M5", 2018)
    
    println("My Car is a \${myCar.year} \${myCar.brand} \${myCar.model}")
    println("Legacy Car is a \${legacyCar.brand}")
}
// លទ្ធផល៖
// My Car is a 2022 Tesla Model 3
// Legacy Car is a BMW
\`\`\``
    },
    starterCode: `class Car(var brand: String, var model: String, var year: Int)

fun main() {
    val yourCar = Car("Toyota", "Tundra", 2021)
    println("Brand: \${yourCar.brand}, Model: \${yourCar.model}")
}`
  },
  {
    id: "kotlin-class-functions",
    title: {
      en: "Kotlin Class Functions",
      km: "អនុគមន៍ក្នុងថ្នាក់ Class Functions"
    },
    content: {
      en: `# Kotlin Class Functions

Classes can contain functions which define the actions or behaviors that objects can perform. These are called **Class Functions** or member methods.

> **Tip:** Inside a class function, you can directly access the class properties (like \`brand\` or \`model\`) using their names!

### Adding Behavior to our Car Class:
Let's expand our constructor-initialized \`Car\` class by adding a \`drive()\` function:
\`\`\`kotlin
class Car(var brand: String, var model: String, var year: Int) {
    fun drive() {
        println("The $brand $model is driving! Vroom vroom!")
    }
}
\`\`\`

Now, we call this behavior using dot-notation on our object:
\`\`\`kotlin
val myCar = Car("Tesla", "Model Y", 2023)
myCar.drive()
\`\`\`

### Worked Example
\`\`\`kotlin
class Car(var brand: String, var model: String, var year: Int) {
    // Member function representing car action
    fun drive() {
        println("Vroom! The $brand $model ($year) has accelerated!")
    }
}

fun main() {
    val myCar = Car("Tesla", "Model Y", 2023)
    
    // Trigger member function
    myCar.drive()
}
// Output:
// Vroom! The Tesla Model Y (2023) has accelerated!
\`\`\``,
      km: `# អនុគមន៍ក្នុងថ្នាក់ Class Functions

ថ្នាក់ (Classes) អាចផ្ទុកនូវអនុគមន៍នានាដែលកំណត់ពីសកម្មភាព ឬអាកប្បកិរិយាដែលវត្ថុ (Objects) អាចធ្វើបាន។ ទាំងនេះត្រូវបានហៅថា **Class Functions** ឬវិធីសាស្ត្រសមាជិក (Member methods)។

> **គន្លឹះ៖** នៅខាងក្នុងអនុគមន៍របស់ថ្នាក់ អ្នកអាចចូលប្រើប្រាស់លក្ខណៈសម្បត្តិរបស់ថ្នាក់នោះដោយផ្ទាល់ (ដូចជា \`brand\` ឬ \`model\`) តាមរយៈឈ្មោះរបស់ពួកគេ!

### ការបន្ថែមសកម្មភាពទៅឱ្យថ្នាក់ឡាន៖
ចូរយើងពង្រីកថ្នាក់ \`Car\` របស់ឥឡូវនេះ ដោយបន្ថែមអនុគមន៍ \`drive()\` (បើកបរ)៖
\`\`\`kotlin
class Car(var brand: String, var model: String, var year: Int) {
    fun drive() {
        println("The $brand $model is driving! Vroom vroom!")
    }
}
\`\`\`

ឥឡូវនេះ យើងហៅសកម្មភាពនេះមកដំណើរការដោយប្រើប្រាស់សញ្ញាចុចលើវត្ថុរបស់យើង៖
\`\`\`kotlin
val myCar = Car("Tesla", "Model Y", 2023)
myCar.drive()
\`\`\`

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
class Car(var brand: String, var model: String, var year: Int) {
    // អនុគមន៍សមាជិកតំណាងឱ្យសកម្មភាពឡាន
    fun drive() {
        println("Vroom! The $brand $model ($year) has accelerated!")
    }
}

fun main() {
    val myCar = Car("Tesla", "Model Y", 2023)
    
    // ដំណើរការអនុគមន៍សមាជិក
    myCar.drive()
}
// លទ្ធផល៖
// Vroom! The Tesla Model Y (2023) has accelerated!
\`\`\``
    },
    starterCode: `class Car(var brand: String, var model: String, var year: Int) {
    fun drive() {
        println("The $brand is now driving!")
    }
}

fun main() {
    val myCar = Car("BMW", "i7", 2024)
    myCar.drive()
}`
  },
  {
    id: "kotlin-inheritance",
    title: {
      en: "Kotlin Inheritance",
      km: "ការបន្តវេន Inheritance"
    },
    content: {
      en: `# Kotlin Inheritance

Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass). This is a central component of OOP.

> **Tip: CRITICAL KOTLIN MECHANIC!** In Kotlin, **all classes are closed/final by default**. This means they cannot be inherited from unless you explicitly declare them with the \`open\` keyword! Similarly, class functions must be marked \`open\` to be overridden in subclasses.

### Completing our Car Journey with ElectricCar:
Let's mark our parent \`Car\` class as \`open\`, and override the \`drive()\` behavior for an \`ElectricCar\` subclass:

1. **Superclass declaration:**
\`\`\`kotlin
open class Car(var brand: String, var model: String, var year: Int) {
    open fun drive() {
        println("The $brand $model is driving!")
    }
}
\`\`\`

2. **Subclass inheriting using colon (\`:\`) and overriding:**
\`\`\`kotlin
class ElectricCar(brand: String, model: String, year: Int, var batteryCapacity: Int) : Car(brand, model, year) {
    override fun drive() {
        println("The silent electric $brand $model is driving smoothly! Shh!")
    }
    
    fun charge() {
        println("Charging battery to $batteryCapacity kWh.")
    }
}
\`\`\`

### Worked Example
\`\`\`kotlin
// Parent class marked open
open class Car(var brand: String, var model: String, var year: Int) {
    open fun drive() {
        println("Driving standard engine vehicle...")
    }
}

// Subclass inherits and passes arguments to parent constructor
class ElectricCar(brand: String, model: String, year: Int, var batteryCapacity: Int) : Car(brand, model, year) {
    // Override the drive behavior!
    override fun drive() {
        println("Driving silent $brand $model with $batteryCapacity kWh battery!")
    }
}

fun main() {
    val standardCar = Car("Ford", "Mustang", 2020)
    val tesla = ElectricCar("Tesla", "Model S", 2023, 100)
    
    standardCar.drive() // Parent behavior
    tesla.drive()       // Subclass overridden behavior
}
// Output:
// Driving standard engine vehicle...
// Driving silent Tesla Model S with 100 kWh battery!
\`\`\``,
      km: `# ការបន្តវេន Inheritance

ការបន្តវេន (Inheritance) អនុញ្ញាតឱ្យថ្នាក់មួយ (Subclass - ថ្នាក់រង) បន្តវេននូវលក្ខណៈសម្បត្តិ និងអនុគមន៍នានាពីថ្នាក់មួយទៀត (Superclass - ថ្នាក់មេ)។ នេះគឺជាបេះដូងស្នូលរបស់ OOP។

> **គន្លឹះ៖ លក្ខណៈពិសេសរបស់ KOTLIN!** នៅក្នុង Kotlin **រាល់ថ្នាក់ទាំងអស់គឺត្រូវបានបិទ (closed/final) ជាលំនាំដើម**។ នេះមានន័យថាពួកវាមិនអាចត្រូវបានបន្តវេនបានឡើយ លុះត្រាតែអ្នកប្រកាសវាដោយប្រើពាក្យគន្លឹះ \`open\`! ដូចគ្នាដែរ អនុគមន៍ក្នុងថ្នាក់ក៏ត្រូវមានពាក្យគន្លឹះ \`open\` ដែរ ទើបអាចសរសេរជាន់លើ (Override) នៅក្នុងថ្នាក់រងបាន។

### បញ្ចប់ដំណើរកម្សាន្តថ្នាក់ឡានជាមួយ ElectricCar៖
ចូរយើងកំណត់ថ្នាក់មេ \`Car\` ជា \`open\` និងសរសេរជាន់លើសកម្មភាព \`drive()\` សម្រាប់ថ្នាក់រង \`ElectricCar\`៖

១. **ការប្រកាសថ្នាក់មេ Superclass៖**
\`\`\`kotlin
open class Car(var brand: String, var model: String, var year: Int) {
    open fun drive() {
        println("The $brand $model is driving!")
    }
}
\`\`\`

២. **ការបង្កើតថ្នាក់រង Subclass បន្តវេនដោយប្រើសញ្ញាចុចពីរ (\`:\`) និងសរសេរជាន់លើ (Override)៖**
\`\`\`kotlin
class ElectricCar(brand: String, model: String, year: Int, var batteryCapacity: Int) : Car(brand, model, year) {
    override fun drive() {
        println("The silent electric $brand $model is driving smoothly! Shh!")
    }
    
    fun charge() {
        println("Charging battery to $batteryCapacity kWh.")
    }
}
\`\`\`

### ឧទាហរណ៍អនុវត្ត
\`\`\`kotlin
// ថ្នាក់មេត្រូវបានកំណត់ជា open
open class Car(var brand: String, var model: String, var year: Int) {
    open fun drive() {
        println("Driving standard engine vehicle...")
    }
}

// ថ្នាក់រងបន្តវេន និងបញ្ជូនអាគុយម៉ង់ទៅកាន់កុងស្ត្រាក់ទ័រថ្នាក់មេ
class ElectricCar(brand: String, model: String, year: Int, var batteryCapacity: Int) : Car(brand, model, year) {
    // សរសេរជាន់លើសកម្មភាពបើកបរ!
    override fun drive() {
        println("Driving silent $brand $model with $batteryCapacity kWh battery!")
    }
}

fun main() {
    val standardCar = Car("Ford", "Mustang", 2020)
    val tesla = ElectricCar("Tesla", "Model S", 2023, 100)
    
    standardCar.drive() // សកម្មភាពថ្នាក់មេ
    tesla.drive()       // សកម្មភាពថ្នាក់រងដែលបានសរសេរជាន់លើ
}
// លទ្ធផល៖
// Driving standard engine vehicle...
// Driving silent Tesla Model S with 100 kWh battery!
\`\`\``
    },
    starterCode: `open class Car(var brand: String, var model: String, var year: Int) {
    open fun drive() {
        println("Vroom!")
    }
}

class ElectricCar(brand: String, model: String, year: Int, var battery: Int) : Car(brand, model, year) {
    override fun drive() {
        println("Silent Vroom with $battery% battery!")
    }
}

fun main() {
    val ev = ElectricCar("Audi", "e-tron", 2024, 98)
    ev.drive()
}`
  }
];
