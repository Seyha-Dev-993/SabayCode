import { Lesson } from '../types';

export const csharpLessonsPart4: Lesson[] = [
  {
    id: "cs-oop",
    title: {
      en: "C# OOP Concepts",
      km: "ទស្សនៈវិជ្ជា OOP"
    },
    content: {
      en: `### What is Object-Oriented Programming?
Object-Oriented Programming (OOP) is a programming paradigm that organizes software design around **objects** (data) rather than functions or logic.

### The Four Pillars of OOP:
1. **Encapsulation:** Binding data (fields) and behaviors (methods) into a single unit, shielding internals from external interference.
2. **Inheritance:** Enabling a new class to inherit members (properties, methods) from an existing class, promoting code reuse.
3. **Polymorphism:** Allowing different classes to respond to the same action in their own unique way (e.g., overriding a base class method).
4. **Abstraction:** Hiding complex background execution details and only exposing essential, simple operational interfaces.

> **Tip:** Mastering OOP is the single most important milestone for building scalable enterprise applications in .NET!`,
      km: `### តើអ្វីទៅជាការសរសេរកូដតម្រង់វត្ថុ (OOP)?
Object-Oriented Programming (OOP) គឺជាវិធីសាស្ត្រសរសេរកូដដែលរៀបចំការរចនាទម្រង់កម្មវិធីជុំវិញ **វត្ថុ (Objects)** ឬទិន្នន័យ ជាជាងផ្ដោតលើអនុគមន៍ ឬតក្កវិទ្យា។

### សសរទ្រូងទាំង ៤ នៃ OOP៖
១. **Encapsulation (ការវេចខ្ចប់):** ការចងភ្ជាប់ទិន្នន័យ និងសកម្មភាពបញ្ជារួមគ្នាជាឯកតាតែមួយ ដើម្បីការពារសុវត្ថិភាពទិន្នន័យខាងក្នុង។
២. **Inheritance (ការបន្តពូជ):** ការអនុញ្ញាតឱ្យ Class ថ្មីទទួលបានលក្ខណៈសម្បត្តិ និងសកម្មភាពពី Class ចាស់ ដោយមិនបាច់សរសេរឡើងវិញ។
៣. **Polymorphism (ពហុរូបភាព):** សមត្ថភាពដែលអនុញ្ញាតឱ្យ Class ផ្សេងៗគ្នាឆ្លើយតបនឹងបញ្ជាដូចគ្នាតាមរបៀបរៀងៗខ្លួន។
៤. **Abstraction (អរូបនីយកម្ម):** ការលាក់បាំងព័ត៌មានលម្អិតដ៏ស្មុគស្មាញនៅខាងក្រោយ និងបង្ហាញត្រឹមតែចំណុចបញ្ជាសាមញ្ញដែលចាំបាច់។

> **គន្លឹះ:** ការយល់ដឹងច្បាស់ពី OOP គឺជាជំហានសំខាន់បំផុតដើម្បីក្លាយជាអ្នកអភិវឌ្ឍន៍កម្មវិធីកម្រិតខ្ពស់នៅក្នុងប្រព័ន្ធ .NET!`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        Console.WriteLine("OOP Paradigm Checklist:");
        Console.WriteLine("- Encapsulation [Protected Fields]");
        Console.WriteLine("- Inheritance [Derived Classes]");
        Console.WriteLine("- Polymorphism [Virtual & Override]");
        Console.WriteLine("- Abstraction [Interfaces & Abstract Classes]");
    }
}`
  },
  {
    id: "cs-classes",
    title: {
      en: "C# Classes & Objects",
      km: "ថ្នាក់ និងវត្ថុ Classes/Objects"
    },
    content: {
      en: `### Creating Blueprint and Instances
A **class** is a blueprint or template for creating objects. An **object** is an instance of a class.

### 1. Declaring a Class:
Let's start our running example of a **Car** class. In its simplest form, it contains fields to store status:
\`\`\`csharp
class Car {
    public string model; // Field
    public int year;     // Field
}
\`\`\`

### 2. Creating an Object:
To create an instance of \`Car\`, we use the \`new\` keyword followed by the class name:
\`\`\`csharp
Car myCar = new Car();
myCar.model = "Tesla Model 3";
myCar.year = 2024;
\`\`\`

> **Note:** The \`public\` keyword is an access modifier that makes the fields accessible from other classes like our main execution class. We will cover this in detail soon!`,
      km: `### ការបង្កើតប្លង់គំរូ និងវត្ថុជាក់ស្តែង
**Class (ថ្នាក់)** គឺជាប្លង់មេ ឬគំរូសម្រាប់បង្កើតវត្ថុ។ **Object (វត្ថុ)** គឺជាសមាជិកជាក់ស្តែងមួយដែលកើតចេញពី Class នោះ។

### ១. ការប្រកាសបង្កើត Class៖
ចូរចាប់ផ្តើមឧទាហរណ៍រួមរបស់យើងគឺ Class **Car**។ ក្នុងទម្រង់សាមញ្ញបំផុត វាមានអថេរសមាជិក (Fields) សម្រាប់រក្សាទុកព័ត៌មាន៖
\`\`\`csharp
class Car {
    public string model; // អថេរសមាជិក
    public int year;     // អថេរសមាជិក
}
\`\`\`

### ២. ការបង្កើត Object ជាក់ស្តែង៖
ដើម្បីបង្កើតវត្ថុចេញពី \`Car\` យើងប្រើប្រាស់ពាក្យគន្លឹះ \`new\` តាមដោយឈ្មោះ Class នោះ៖
\`\`\`csharp
Car myCar = new Car();
myCar.model = "Tesla Model 3";
myCar.year = 2024;
\`\`\`

> **ចំណាំ:** ពាក្យ \`public\` គឺជាកម្រិតសិទ្ធិចូលប្រើប្រាស់ ដែលអនុញ្ញាតឱ្យកូដពីក្រៅ Class អាចចូលអាន ឬសរសេរតម្លៃលើវាបាន។ យើងនឹងសិក្សាលម្អិតអំពីវានៅពេលបន្តិចទៀតនេះ!`
    },
    starterCode: `using System;

// 1. Blueprint
class Car {
    public string model;
    public int year;
}

class Program {
    static void Main() {
        // 2. Instantiate objects
        Car car1 = new Car();
        car1.model = "Toyota Prius";
        car1.year = 2018;
        
        Car car2 = new Car();
        car2.model = "Ford Wildtrak";
        car2.year = 2023;
        
        Console.WriteLine($"Car 1: {car1.model} ({car1.year})");
        Console.WriteLine($"Car 2: {car2.model} ({car2.year})");
    }
}`
  },
  {
    id: "cs-members",
    title: {
      en: "C# Class Members",
      km: "សមាជិករបស់ថ្នាក់ Members"
    },
    content: {
      en: `### Fields, Properties, and Methods
Class members represent everything declared inside a class—both fields (storing data) and methods (executing actions).

### Expanding our Car Class:
Let's add a behavior to our \`Car\` class. We will introduce a method called \`Drive()\`:
\`\`\`csharp
class Car {
    public string model;
    public int year;

    public void Drive() {
        Console.WriteLine($"{model} is driving on the Cambodian highway!");
    }
}
\`\`\`

### Calling Member Methods:
Just like variables, we access methods on our instantiated objects using the dot (\`.\`) operator:
\`\`\`csharp
Car myCar = new Car();
myCar.model = "Prius";
myCar.Drive(); // Outputs: Prius is driving on the Cambodian highway!
\`\`\`

> **Tip:** You can declare multiple methods in a class, passing arguments and returning values just like we did with static functions!`,
      km: `### អថេរ និងវិធីសាស្ត្រសមាជិក (Members)
សមាជិករបស់ Class គឺរាល់អ្វីៗទាំងអស់ដែលត្រូវបានប្រកាសនៅក្នុង Class រួមមានអថេរសមាជិក (Fields) សម្រាប់រក្សាទុកទិន្នន័យ និងវិធីសាស្ត្រ (Methods) សម្រាប់សកម្មភាពបញ្ជា។

### ការពង្រីក Class Car៖
ចូរវាយបន្ថែមសកម្មភាពបញ្ជាទៅឱ្យ \`Car\`។ យើងបង្កើត Method ឈ្មោះថា \`Drive()\`៖
\`\`\`csharp
class Car {
    public string model;
    public int year;

    public void Drive() {
        Console.WriteLine($"{model} is driving on the Cambodian highway!");
    }
}
\`\`\`

### ការហៅសកម្មភាពសមាជិកមកប្រើ៖
ដូចគ្នានឹងអថេរដែរ យើងហៅប្រើសកម្មភាពផ្សេងៗរបស់ Object តាមរយៈសញ្ញាចុច (\`.\`)៖
\`\`\`csharp
Car myCar = new Car();
myCar.model = "Prius";
myCar.Drive(); // បង្ហាញ៖ Prius is driving on the Cambodian highway!
\`\`\`

> **គន្លឹះ:** អ្នកអាចប្រកាស Method ច្រើននៅក្នុង Class មួយ ដោយអាចបញ្ជូនធាតុចូល និងទទួលតម្លៃត្រឡប់មកវិញដូចអនុគមន៍ធម្មតាដែរ!`
    },
    starterCode: `using System;

class Car {
    // Member Fields
    public string model;
    public int year;

    // Member Method
    public void Drive() {
        Console.WriteLine($"{model} ({year}) is driving smoothly on the expressway.");
    }
    
    // Member Method with parameter
    public void Honk(string sound) {
        Console.WriteLine($"{model} is honking: {sound}!");
    }
}

class Program {
    static void Main() {
        Car luxuryCar = new Car();
        luxuryCar.model = "Lexus LX570";
        luxuryCar.year = 2021;
        
        luxuryCar.Drive();
        luxuryCar.Honk("BEEP BEEP");
    }
}`
  },
  {
    id: "cs-constructors",
    title: {
      en: "C# Constructors",
      km: "កូដបង្កើតថ្នាក់ Constructors"
    },
    content: {
      en: `### Automating Initialization
A **constructor** is a special method that is automatically called when an object of a class is created. It is primarily used to initialize fields of the class.

### Key Rules of Constructors:
- It must have the **exact same name** as the class itself.
- It **does not have a return type** (not even \`void\`).
- You can overload constructors by defining multiple versions with different parameter types.

### Adding a Constructor to our Car:
\`\`\`csharp
class Car {
    public string model;
    public int year;

    // Constructor with parameters
    public Car(string modelName, int modelYear) {
        model = modelName;
        year = modelYear;
    }
}
\`\`\`

### Instantiating with clean code:
Instead of setting fields line-by-line, we can now pass values directly:
\`\`\`csharp
Car myCar = new Car("Ford Mustang", 2022);
\`\`\`

> **Tip:** If you do not define a constructor, C# automatically provides a default, parameterless constructor that initializes numeric fields to 0 and reference types to null.`,
      km: `### ការកំណត់តម្លៃចាប់ផ្តើមដោយស្វ័យប្រវត្ត
**Constructor** គឺជា Method ពិសេសមួយដែលត្រូវបានហៅដំណើរការដោយស្វ័យប្រវត្តិ នៅពេលដែល Object របស់ Class ត្រូវបានបង្កើតឡើង។ វាត្រូវបានប្រើជាចម្បងដើម្បីផ្តល់តម្លៃដំបូងដល់អថេរសមាជិក។

### លក្ខខណ្ឌចម្បងរបស់ Constructor៖
- វាត្រូវតែមាន **ឈ្មោះដូចគ្នាទាំងស្រុង** ទៅនឹងឈ្មោះរបស់ Class។
- វា **គ្មានប្រភេទទិន្នន័យត្រឡប់ឡើយ** (សូម្បីតែ \`void\` ក៏គ្មានដែរ)។
- អ្នកអាចធ្វើ Overload កូដបង្កើតនេះបានដោយបង្កើត Constructors ច្រើនដែលមានធាតុចូលខុសគ្នា។

### ការបន្ថែម Constructor ទៅឱ្យ Car៖
\`\`\`csharp
class Car {
    public string model;
    public int year;

    // Constructor ទទួលធាតុចូល
    public Car(string modelName, int modelYear) {
        model = modelName;
        year = modelYear;
    }
}
\`\`\`

### ការបង្កើតឡើងយ៉ាងខ្លី៖
ជំនួសឱ្យការសរសេរកូដផ្តល់តម្លៃម្តងមួយបន្ទាត់ យើងអាចបញ្ជូនតម្លៃដំបូងឱ្យវាតែម្តង៖
\`\`\`csharp
Car myCar = new Car("Ford Mustang", 2022);
\`\`\`

> **គន្លឹះ:** ប្រសិនបើអ្នកមិនបានបង្កើត Constructor ទេ C# នឹងផ្តល់ឱ្យនូវ Default Constructor (គ្មានធាតុចូល) ដោយស្វ័យប្រវត្ត ដែលវានឹងកំណត់តម្លៃលេខស្មើ ០ និងអក្សរស្មើ null។`
    },
    starterCode: `using System;

class Car {
    public string model;
    public int year;

    // Default Constructor (no parameters)
    public Car() {
        model = "Unknown Model";
        year = 2020;
    }

    // Parameterized Constructor
    public Car(string modelName, int modelYear) {
        model = modelName;
        year = modelYear;
    }
}

class Program {
    static void Main() {
        // Calls parameterized constructor
        Car mustang = new Car("Ford Mustang", 2022);
        
        // Calls default constructor
        Car basic = new Car();
        
        Console.WriteLine($"Car A: {mustang.model} ({mustang.year})");
        Console.WriteLine($"Car B: {basic.model} ({basic.year})");
    }
}`
  },
  {
    id: "cs-access-modifiers",
    title: {
      en: "C# Access Modifiers",
      km: "កម្រិតសិទ្ធិចូលប្រើប្រាស់"
    },
    content: {
      en: `### Controlling Visibility and Safety
Access modifiers are keywords used to specify the scope and visibility of classes, fields, properties, and methods.

### The Most Common Modifiers:
1. **\`public\`:** The member is fully accessible from any class or project.
2. **\`private\`:** The member is only accessible inside the container class. This is the **default** modifier in C#!
3. **\`protected\`:** The member is accessible within its class and by derived (inherited) classes.
4. **\`internal\`:** Accessible within the same compiled assembly/project, but restricted externally.

### Securing our Car data:
We should restrict access to sensitive fields like \`mileage\`, protecting it from arbitrary external hacks:
\`\`\`csharp
class Car {
    public string model;
    private int mileage; // Hidden from outsiders!
}
\`\`\`

> **Note:** If you try to compile \`myCar.mileage = 5000;\` from the \`Program\` class, the compiler will block the build to secure your data blueprint!`,
      km: `### ការគ្រប់គ្រងសុវត្ថិភាពទិន្នន័យ (Access Modifiers)
Access modifiers គឺជាពាក្យគន្លឹះសម្រាប់កំណត់ដែនសិទ្ធិ និងភាពមើលឃើញរបស់ Classes, Fields, Properties, និង Methods។

### ប្រភេទកម្រិតសិទ្ធិពេញនិយម៖
១. **\`public\`:** អាចចូលប្រើប្រាស់បានដោយសេរីពីគ្រប់ទីកន្លែង។
២. **\`private\`:** អាចប្រើប្រាស់បានតែនៅក្នុង Class ផ្ទាល់របស់វាប៉ុណ្ណោះ។ វាជា **ដែនសិទ្ធិលំនាំដើម** នៅក្នុង C#!
៣. **\`protected\`:** អាចប្រើប្រាស់បានក្នុង Class ផ្ទាល់ និងក្នុង Class កូនដែលបន្តពូជពីវា។
៤. **\`internal\`:** អាចប្រើបានតែនៅក្នុងគម្រោង (Assembly/Project) តែមួយគត់។

### ការការពារទិន្នន័យឡាន Car៖
យើងត្រូវការពារអថេរសំខាន់ៗដូចជា \`mileage\` (ចំនួនគីឡូម៉ែត្រដែលរត់រួច) មិនឱ្យកូដខាងក្រៅចូលមកកែប្រែដោយសេរីឡើយ៖
\`\`\`csharp
class Car {
    public string model;
    private int mileage; // លាក់ពីខាងក្រៅ!
}
\`\`\`

> **ចំណាំ:** ប្រសិនបើអ្នកព្យាយាមសរសេរ \`myCar.mileage = 5000;\` ពីក្រៅ Class នោះប្រព័ន្ធចងក្រងកូដនឹងបដិសេធមិនចងក្រងជាដាច់ខាត ដើម្បីធានាសុវត្ថិភាព!`
    },
    starterCode: `using System;

class Car {
    public string model;     // Public: accessible anywhere
    private double fuelLevel; // Private: only accessible inside Car class

    public Car(string carModel, double initialFuel) {
        model = carModel;
        fuelLevel = initialFuel;
    }

    // Public method to modify private data safely
    public void DriveDistance(double distance) {
        double fuelConsumed = distance * 0.05; // 0.05 liters per km
        if (fuelLevel >= fuelConsumed) {
            fuelLevel -= fuelConsumed;
            Console.WriteLine($"{model} drove {distance}km. Fuel remaining: {fuelLevel:F2}L.");
        } else {
            Console.WriteLine($"{model} has insufficient fuel to drive {distance}km!");
        }
    }
}

class Program {
    static void Main() {
        Car mySUV = new Car("Range Rover", 50.0);
        
        // 1. Safe access via public method
        mySUV.DriveDistance(200);
    }
}`
  },
  {
    id: "cs-properties",
    title: {
      en: "C# Properties",
      km: "លក្ខណៈសម្បត្តិ Properties"
    },
    content: {
      en: `### The Idiomatic Way of Encapsulation
In C#, fields should be kept private. Outsiders access them using **Properties**, which combine a private backing field with \`get\` and \`set\` accessors.

### 1. Contrasting Fields vs. Properties
A plain private field has no validation:
\`\`\`csharp
private int year;
\`\`\`
But a Property can validate values on-the-fly inside the \`set\` block, using the special implicit variable \`value\`:
\`\`\`csharp
class Car {
    private int year; // Backing field

    public int Year {
        get { return year; }
        set {
            if (value > 2026) {
                Console.WriteLine("Invalid Year!");
            } else {
                year = value;
            }
        }
    }
}
\`\`\`

### 2. Auto-Implemented Properties
If you don't need custom validation logic, C# provides a shortcut where the compiler automatically manages the backing field for you:
\`\`\`csharp
public string Model { get; set; } // Auto-property!
\`\`\`

> **Tip:** C# properties look and feel like standard fields to the caller (using the dot operator without parenthesis), but they behave like secure getter/setter methods. This makes C# exceptionally elegant and robust!`,
      km: `### របៀបវេចខ្ចប់ទិន្នន័យបែប C# (Encapsulation)
នៅក្នុង C# អថេរសមាជិកគួរតែរក្សាជា private។ ខាងក្រៅអាចអាន ឬសរសេរតម្លៃតាមរយៈ **Properties** ដែលប្រើប្រាស់នូវប្លុកកូដ \`get\` (ទាញយកតម្លៃ) និង \`set\` (កំណត់តម្លៃ)។

### ១. ការប្រៀបធៀប Fields និង Properties
អថេរ Field ធម្មតាមិនអាចទប់ស្កាត់តម្លៃខុសឆ្គងឡើយ៖
\`\`\`csharp
private int year;
\`\`\`
ប៉ុន្តែ Property អាចធ្វើការផ្ទៀងផ្ទាត់ទិន្នន័យភ្លាមៗនៅក្នុងប្លុក \`set\` ដោយប្រើប្រាស់អថេរតំណាង \`value\`៖
\`\`\`csharp
class Car {
    private int year; // អថេរទ្រនាប់ខាងក្នុង

    public int Year {
        get { return year; }
        set {
            if (value > 2026) {
                Console.WriteLine("ឆ្នាំមិនត្រឹមត្រូវឡើយ!");
            } else {
                year = value;
            }
        }
    }
}
\`\`\`

### ២. Auto-Implemented Properties
ប្រសិនបើគ្មានការផ្ទៀងផ្ទាត់អ្វីពិសេសទេ C# ផ្តល់នូវវិធីសរសេរយ៉ាងខ្លី ដែល Compiler នឹងបង្កើតអថេរទ្រនាប់ខាងក្នុងឱ្យដោយស្វ័យប្រវត្តិ៖
\`\`\`csharp
public string Model { get; set; } // Auto-property!
\`\`\`

> **គន្លឹះ:** សម្រាប់អ្នកហៅពីខាងក្រៅ Property មានទម្រង់សាមញ្ញដូចអថេរធម្មតា (មិនបាច់ប្រើគ្នាបបើកបិទ \`()\` ឡើយ) ប៉ុន្តែវាដំណើរការដូចជាអនុគមន៍សុវត្ថិភាព។ នេះធ្វើឱ្យ C# មានភាពឆើតឆាយ និងរឹងមាំបំផុត!`
    },
    starterCode: `using System;

class Car {
    // 1. Auto-implemented property
    public string Model { get; set; }

    // 2. Full property with backing field and validation
    private int year;
    public int Year {
        get { return year; }
        set {
            if (value < 1886 || value > 2026) { // 1886: First gasoline car
                Console.WriteLine($"[Error]: Year {value} is out of bounds!");
            } else {
                year = value;
            }
        }
    }

    public Car(string model, int year) {
        Model = model;
        Year = year; // Triggers validation setter
    }
}

class Program {
    static void Main() {
        Car validCar = new Car("Tesla Model Y", 2023);
        Console.WriteLine($"Car Name: {validCar.Model} | Built in: {validCar.Year}\\n");
        
        // Attempting to set an invalid year
        Console.WriteLine("Attempting to set invalid year (2035):");
        validCar.Year = 2035; // Output validation error
        Console.WriteLine($"Year remains unchanged: {validCar.Year}");
    }
}`
  },
  {
    id: "cs-inheritance",
    title: {
      en: "C# Inheritance",
      km: "ការបន្តពូជថ្នាក់ Inheritance"
    },
    content: {
      en: `### Creating Subclasses from Base Classes
Inheritance allows you to define a child class that reuses, extends, or modifies the behavior of a parent class.

### Key Concepts & Symbols:
- **Base Class (Parent):** The class whose members are being inherited.
- **Derived Class (Child):** The class that inherits the base members.
- **Colon (\`:\`) Symbol:** Used to denote inheritance.
- **\`base\` Keyword:** Used to call constructors or methods of the parent class directly.

### Implementing ElectricCar:
\`\`\`csharp
class Vehicle { // Parent
    public string brand = "Toyota";
}

class Car : Vehicle { // Child
    public string model = "Prius";
}
\`\`\`

> **Tip:** C# does **not** support multiple inheritance of classes (a class cannot inherit from more than one class directly). This is designed to avoid the "Diamond Problem" of architecture. However, you can implement multiple *interfaces* instead!`,
      km: `### ការបង្កើតថ្នាក់កូនចេញពីថ្នាក់ឪពុក (Inheritance)
ការបន្តពូជ (Inheritance) អនុញ្ញាតឱ្យអ្នកបង្កើត Class កូន ដែលប្រើប្រាស់ឡើងវិញ បន្ថែម ឬកែប្រែសកម្មភាពរបស់ Class ឪពុក។

### ពាក្យគន្លឹះ និងនិមិត្តសញ្ញា៖
- **Base Class (ថ្នាក់ឪពុក):** Class ដែលត្រូវបានគេយកលក្ខណៈសម្បត្តិទៅប្រើបន្ត។
- **Derived Class (ថ្នាក់កូន):** Class ថ្មីដែលទទួលឥទ្ធិពលពីថ្នាក់ឪពុក។
- **សញ្ញាចុចពីរ (\`:\`)៖** ប្រើសម្រាប់បង្ហាញពីការបន្តពូជ។
- **ពាក្យគន្លឹះ \`base\`៖** ប្រើសម្រាប់ហៅទៅកាន់ Constructor ឬ Method របស់ថ្នាក់ឪពុកដោយផ្ទាល់។

### ឧទាហរណ៍បង្កើត ElectricCar៖
\`\`\`csharp
class Vehicle { // ថ្នាក់ឪពុក
    public string brand = "Toyota";
}

class Car : Vehicle { // ថ្នាក់កូន
    public string model = "Prius";
}
\`\`\`

> **គន្លឹះ:** ភាសា C# **មិន** គាំទ្រការបន្តពូជពីថ្នាក់ឪពុកច្រើនក្នុងពេលតែមួយឡើយ (Multiple Inheritance របស់ Class)។ នេះដើម្បីការពារការជាន់គ្នាផ្នែករចនាសម្ព័ន្ធ។ ប៉ុន្តែ អ្នកអាចទទួលបានឥទ្ធិពលច្រើនតាមរយៈ *Interfaces*!`
    },
    starterCode: `using System;

// Base Class (Parent)
class Vehicle {
    public string Brand { get; set; }

    public Vehicle(string brand) {
        Brand = brand;
    }

    public void Honk() {
        Console.WriteLine("Beep! Beep! Parent Vehicle Honked.");
    }
}

// Derived Class (Child)
class ElectricCar : Vehicle {
    public int BatteryCapacity { get; set; }

    // Using 'base' to pass brand up to parent constructor
    public ElectricCar(string brand, int battery) : base(brand) {
        BatteryCapacity = battery;
    }
    
    public void PrintDetails() {
        Console.WriteLine($"Brand: {Brand} | Battery: {BatteryCapacity} kWh");
    }
}

class Program {
    static void Main() {
        ElectricCar myTesla = new ElectricCar("Tesla", 85);
        myTesla.Honk(); // Reuses parent method!
        myTesla.PrintDetails();
    }
}`
  },
  {
    id: "cs-polymorphism",
    title: {
      en: "C# Polymorphism",
      km: "ពហុរូបភាព Polymorphism"
    },
    content: {
      en: `### Dynamic Runtime Method Overriding
Polymorphism means "many forms". It allows derived classes to provide their own custom implementation for methods inherited from the base class.

### Key Keywords to implement Overriding:
1. **\`virtual\`:** Declare this keyword on the method in the **base class** to authorize children to override it.
2. **\`override\`:** Declare this keyword on the method in the **derived class** to replace the parent implementation.

### Example Evolution:
In \`Vehicle\`, we declare the method:
\`\`\`csharp
public virtual void Start() {
    Console.WriteLine("Vehicle is starting.");
}
\`\`\`
In \`ElectricCar\`, we override it to show specific electric silent start behavior:
\`\`\`csharp
public override void Start() {
    Console.WriteLine("Electric vehicle is starting silently... WHISPER!");
}
\`\`\`

> **Note:** If you forget to write \`override\` in the child class, the compiler will assume you are trying to *hide* the parent method, raising warnings. Always write \`override\` for dynamic polymorphism!`,
      km: `### ការកែប្រែសកម្មភាពតាមថ្នាក់នីមួយៗ (Polymorphism)
Polymorphic មានន័យថា "រូបភាពច្រើន"។ វាអនុញ្ញាតឱ្យ Class កូនៗបង្កើតវិធីសាស្ត្រផ្ទាល់ខ្លួន ប្លែកពីសកម្មភាពដែលទទួលបានពី Class ឪពុក។

### ពាក្យគន្លឹះសំខាន់ៗសម្រាប់ធ្វើការ Override៖
១. **\`virtual\`:** ប្រើនៅក្នុង **Class ឪពុក** ដើម្បីបើកសិទ្ធិឱ្យ Class កូនៗកែប្រែបាន។
២. **\`override\`:** ប្រើនៅក្នុង **Class កូន** ដើម្បីប្រកាសសរសេរកូដថ្មីជំនួសកូដចាស់របស់ឪពុក។

### ការកែប្រែកូដជាក់ស្តែង៖
នៅក្នុង Class ឪពុក \`Vehicle\`៖
\`\`\`csharp
public virtual void Start() {
    Console.WriteLine("Vehicle is starting.");
}
\`\`\`
នៅក្នុង Class កូន \`ElectricCar\` ជំនួសវាដោយកូដបញ្ជារថយន្តអគ្គិសនីបញ្ឆេះស្ងាត់៖
\`\`\`csharp
public override void Start() {
    Console.WriteLine("Electric vehicle is starting silently... WHISPER!");
}
\`\`\`

> **ចំណាំ:** បើអ្នកភ្លេចសរសេរពាក្យ \`override\` ក្នុង Class កូន នោះ Compiler នឹងគិតថាអ្នកកំពុងលាក់បាំង Method របស់ឪពុក ដែលបង្កឱ្យមានការព្រមាន (Warnings)។ ត្រូវសរសេរ \`override\` ជានិច្ច!`
    },
    starterCode: `using System;

class Vehicle {
    public string Model { get; set; }
    
    public Vehicle(string model) {
        Model = model;
    }

    // Virtual authorized to be overridden
    public virtual void FuelType() {
        Console.WriteLine($"{Model} uses standard fossil fuel.");
    }
}

class ElectricCar : Vehicle {
    public ElectricCar(string model) : base(model) {}

    // Overriding the virtual method
    public override void FuelType() {
        Console.WriteLine($"{Model} is fully Electric. No gasoline required!");
    }
}

class Program {
    static void Main() {
        Vehicle car1 = new Vehicle("Toyota Camry");
        Vehicle car2 = new ElectricCar("Tesla Model X"); // Dynamic binding
        
        car1.FuelType();
        car2.FuelType(); // Correctly outputs the ElectricCar version!
    }
}`
  },
  {
    id: "cs-abstraction",
    title: {
      en: "C# Abstraction",
      km: "ថ្នាក់អរូបនីយកម្ម Abstraction"
    },
    content: {
      en: `### Restricting Direct Instantiation
Data abstraction is the process of hiding certain details and showing only essential information to the user.

### 1. Abstract Classes (\`abstract\`)
An abstract class cannot be used to create objects directly (you cannot call \`new Vehicle()\` if it is abstract). It can only be inherited from.

### 2. Abstract Methods
An abstract method can only be declared inside an abstract class. It does not have a body (e.g., \`public abstract void Run();\`). The body is supplied by the derived class when overridden.

\`\`\`csharp
abstract class Vehicle {
    public abstract void Honk(); // No body!
}
\`\`\`

> **Tip:** Use abstract classes to establish a strict architectural contract that all child classes are absolutely forced to implement, while still being able to share common helper methods!`,
      km: `### ការទប់ស្កាត់ការបង្កើតវត្ថុដោយផ្ទាល់ (Abstraction)
អរូបនីយកម្ម (Abstraction) គឺជាដំណើរការលាក់បាំងព័ត៌មានលម្អិតខ្លះ និងបង្ហាញតែអ្វីដែលចាំបាច់បំផុតសម្រាប់ដំណើរការ។

### ១. Abstract Class៖
គឺជា Class ពិសេសដែលមិនអាចយកទៅបង្កើតជា Object ផ្ទាល់បានឡើយ (មិនអាចសរសេរ \`new Vehicle()\` ឡើយ បើវាជា abstract)។ វាមានតួនាទីត្រឹមជាគំរូឱ្យថ្នាក់កូនបន្តពូជប៉ុណ្ណោះ។

### ២. Abstract Method៖
ជា Method ដែលគ្មានប្លុកកូដដំណើរការឡើយ (ដូចជា \`public abstract void Run();\`)។ រាល់ Class កូនដែលបន្តពូជពីវា គឺត្រូវតែបំពេញកូដដំណើរការនៅក្នុងនោះដាច់ខាត។

\`\`\`csharp
abstract class Vehicle {
    public abstract void Honk(); // គ្មានប្លុកកូដទេ!
}
\`\`\`

> **គន្លឹះ:** ប្រើប្រាស់ Abstract Class ដើម្បីបង្កើតជាច្បាប់ស្ថាបត្យកម្មកូដដែលបង្ខំឱ្យ Class កូនៗទាំងអស់ត្រូវតែគោរពតាម ខណៈពេលដែលនៅតែអាចចែករំលែកកូដធម្មតាបានមួយចំនួន!`
    },
    starterCode: `using System;

// Abstract Class
abstract class Vehicle {
    public string Model { get; set; }

    public Vehicle(string model) {
        Model = model;
    }

    // Abstract Method: MUST be implemented by children
    public abstract void CalculateMaxRange();

    // Regular non-abstract method
    public void ShowBasicInfo() {
        Console.WriteLine($"Vehicle model name: {Model}");
    }
}

class ElectricCar : Vehicle {
    public int BatteryCapacity { get; set; }

    public ElectricCar(string model, int battery) : base(model) {
        BatteryCapacity = battery;
    }

    // Implementing the abstract method
    public override void CalculateMaxRange() {
        int range = BatteryCapacity * 6; // 6km per kWh
        Console.WriteLine($"{Model} estimated max driving range: {range} km.");
    }
}

class Program {
    static void Main() {
        // Vehicle myVehicle = new Vehicle("Generic"); // ERROR: Cannot instantiate abstract class!
        
        ElectricCar leaf = new ElectricCar("Nissan Leaf", 40);
        leaf.ShowBasicInfo();
        leaf.CalculateMaxRange();
    }
}`
  },
  {
    id: "cs-interface",
    title: {
      en: "C# Interface",
      km: "ចំណុចប្រទាក់ Interfaces"
    },
    content: {
      en: `### Achieving Full Abstraction
An **interface** in C# is a completely "empty class" that can only contain declarations of methods, properties, or events, with no implementation bodies.

### Key Rules of Interfaces:
- Declared using the \`interface\` keyword.
- By convention, all interface names must start with the uppercase letter **\`I\`** (e.g., \`IChargeable\`, \`IDrivable\`).
- Members of an interface are \`public\` by default. You do not need to write access modifiers inside!
- A class can implement **multiple interfaces**, bypassing the single-inheritance limit of C# classes!

\`\`\`csharp
interface IChargeable {
    void Charge(); // No access modifier, no body
}

class ElectricCar : Vehicle, IChargeable {
    public void Charge() {
        Console.WriteLine("Charging...");
    }
}
\`\`\`

> **Note:** Unlike abstract classes, interfaces cannot store instance fields or state variables. They strictly specify *behaviors* that implementing classes must satisfy.`,
      km: `### ការបង្កើតច្បាប់ស្ថាបត្យកម្មកូដពេញលេញ (Interfaces)
**Interface** នៅក្នុង C# គឺជា "Class ទទេស្អាត" ដែលមានតែការប្រកាសឈ្មោះ Methods និង Properties ប៉ុណ្ណោះ ដោយគ្មានការសរសេរកូដដំណើរការសូម្បីតែមួយបន្ទាត់ឡើយ។

### លក្ខខណ្ឌចម្បងរបស់ Interfaces៖
- បង្កើតឡើងដោយប្រើពាក្យគន្លឹះ \`interface\`។
- តាមទម្លាប់ ឈ្មោះ Interface ត្រូវតែចាប់ផ្តើមដោយអក្សរ **\`I\`** ធំជានិច្ច (ដូចជា \`IChargeable\`, \`IDrivable\`)។
- សមាជិកទាំងអស់របស់វាជា \`public\` ដោយស្វ័យប្រវត្ត មិនបាច់សរសេរ Access Modifier ឡើយ!
- Class មួយអាចអនុវត្តតាម **Interfaces ច្រើនក្នុងពេលតែមួយបាន** ដែលជួយដោះស្រាយបញ្ហានៃការមិនអាចបន្តពូជពី Class ច្រើន!

\`\`\`csharp
interface IChargeable {
    void Charge(); // គ្មានកូដ គ្មានកម្រិតសិទ្ធិ
}

class ElectricCar : Vehicle, IChargeable {
    public void Charge() {
        Console.WriteLine("Charging...");
    }
}
\`\`\`

> **ចំណាំ:** ខុសពី Abstract Class គឺ Interface មិនអាចមានអថេរសមាជិក (Fields) សម្រាប់រក្សាទុកស្ថានភាពអ្វីឡើយ។ វាគ្រាន់តែជាកិច្ចសន្យាបញ្ជាសកម្មភាពប៉ុណ្ណោះ។`
    },
    starterCode: `using System;

// Interface A
interface IDrivable {
    void GoFast();
}

// Interface B
interface IChargeable {
    void PlugInCharger();
}

// Class implementing MULTIPLE interfaces
class ElectricCar : IDrivable, IChargeable {
    public string Name { get; set; }

    public ElectricCar(string name) {
        Name = name;
    }

    public void GoFast() {
        Console.WriteLine($"{Name} is accelerating instantly! Zoom!");
    }

    public void PlugInCharger() {
        Console.WriteLine($"{Name} connected to the charging terminal. Battery charging...");
    }
}

class Program {
    static void Main() {
        ElectricCar ionic = new ElectricCar("Hyundai Ioniq 5");
        ionic.GoFast();
        ionic.PlugInCharger();
    }
}`
  },
  {
    id: "cs-enums",
    title: {
      en: "C# Enums",
      km: "ប្រភេទកំណត់ក្រុម Enums"
    },
    content: {
      en: `### Defining Named Constants
An **enum** (short for enumeration) is a special "class" that represents a group of constants (unchangeable, read-only values).

### Declaring an Enum:
To create an enum, use the \`enum\` keyword, and separate the items with a comma:
\`\`\`csharp
enum EngineStatus {
    Off,
    Idle,
    Running,
    Overheating
}
\`\`\`

### Underlying Values:
By default, the first item has the value \`0\`, the second \`1\`, and so on. You can also specify custom integers:
\`\`\`csharp
enum SpeedLimit {
    City = 40,
    Highway = 120
}
\`\`\`

> **Tip:** Enums make your code highly readable and type-safe by replacing confusing magic numbers (e.g. \`status = 3\`) with descriptive words (e.g. \`status = EngineStatus.Running\`).`,
      km: `### ការកំណត់ក្រុមទិន្នន័យថេរ (Enums)
**Enum** គឺជាក្រុមតម្លៃថេរពិសេសដែលតំណាងឱ្យសំណុំតម្លៃថេរដែលមិនអាចកែប្រែបាន។

### ការបង្កើត Enum៖
ប្រើប្រាស់ពាក្យគន្លឹះ \`enum\` និងបំបែកសមាជិកនីមួយៗដោយសញ្ញាក្បៀស៖
\`\`\`csharp
enum EngineStatus {
    Off,
    Idle,
    Running,
    Overheating
}
\`\`\`

### តម្លៃលេខសម្គាល់ខាងក្នុង៖
ជាលំនាំដើម សមាជិកដំបូងមានតម្លៃលេខ \`0\` ទីពីរមានតម្លៃ \`1\` បន្តបន្ទាប់គ្នា។ អ្នកក៏អាចកំណត់លេខដោយខ្លួនឯងបានដែរ៖
\`\`\`csharp
enum SpeedLimit {
    City = 40,
    Highway = 120
}
\`\`\`

> **គន្លឹះ:** Enums ជួយឱ្យកូដរបស់អ្នកងាយស្រួលអាន និងមានសុវត្ថិភាពខ្ពស់ដោយជៀសវាងការប្រើលេខកូដសម្ងាត់ដែលពិបាកយល់ (ឧ. \`status = 3\`) មកជាពាក្យអក្សរច្បាស់ៗវិញ (ឧ. \`status = EngineStatus.Running\`)។`
    },
    starterCode: `using System;

enum EngineState {
    Stopped = 0,
    Starting = 1,
    Active = 2,
    Failure = 9
}

class Program {
    static void Main() {
        EngineState current = EngineState.Active;
        
        Console.WriteLine($"Current State Word: {current}");
        Console.WriteLine($"Current State Int Value: {(int)current}");
        
        // Testing state via Switch
        switch (current) {
            case EngineState.Stopped:
                Console.WriteLine("Engine is fully shut down.");
                break;
            case EngineState.Active:
                Console.WriteLine("System running normal. Happy Driving!");
                break;
            case EngineState.Failure:
                Console.WriteLine("CRITICAL: Engine failure detected!");
                break;
        }
    }
}`
  },
  {
    id: "cs-files",
    title: {
      en: "C# Files & System.IO",
      km: "ការគ្រប់គ្រងឯកសារ Files"
    },
    content: {
      en: `### Working with the File System
C# uses the \`System.IO\` namespace to manage files and directories. 

### Core \`System.IO.File\` Methods:
- **\`File.WriteAllText(path, content)\`:** Creates a new file and writes the string content. Overwrites if the file already exists.
- **\`File.ReadAllText(path)\`:** Reads all text from a file.
- **\`File.Exists(path)\`:** Checks if a file exists at the path, returning true/false.
- **\`File.AppendAllText(path, content)\`:** Appends text to the end of an existing file.

> **Note:** Inside this sandboxed web editor, real disk file I/O operations are simulated securely in-memory. This allows you to write real C# code using \`System.IO\` methods and visualize output logs exactly as if you were running locally!`,
      km: `### ការគ្រប់គ្រង និងអានសរសេរឯកសារ
C# ប្រើប្រាស់ namespace \`System.IO\` សម្រាប់គ្រប់គ្រង និងរៀបចំឯកសារ ឬថតផ្ទុកនានា។

### វិធីសាស្ត្រចម្បងរបស់ \`System.IO.File\`៖
- **\`File.WriteAllText(path, content)\`:** បង្កើតឯកសារថ្មី និងសរសេរអត្ថបទចូល។ បើមានឯកសារចាស់ វានឹងលុបសរសេរជាន់ពីលើ។
- **\`File.ReadAllText(path)\`:** អានយកអត្ថបទទាំងអស់ចេញពីឯកសារ។
- **\`File.Exists(path)\`:** ពិនិត្យមើលថាតើមានឯកសារនោះពិតមែនឬអត់ (លទ្ធផល True/False)។
- **\`File.AppendAllText(path, content)\`:** បន្ថែមអត្ថបទថ្មីទៅខាងចុងឯកសារចាស់។

> **ចំណាំ:** នៅក្នុងកម្មវិធីសាកល្បងវេបសាយនេះ រាល់ការអានសរសេរឯកសារពិតត្រូវបានធ្វើត្រាប់តាម (Simulated in-memory) ដើម្បីធានាសុវត្ថិភាព។ អ្នកអាចសរសេរកូដ \`System.IO\` ពិតប្រាកដ និងមើលលទ្ធផលបានដូចនៅលើម៉ាស៊ីនផ្ទាល់អញ្ចឹង!`
    },
    starterCode: `using System;
using System.IO;

class Program {
    static void Main() {
        string filePath = "angkor_guide.txt";
        
        Console.WriteLine("--- SIMULATED SANDBOX FILESYSTEM ---");
        
        // 1. Write text to file
        Console.WriteLine("Writing travel guide text to file...");
        File.WriteAllText(filePath, "Welcome to Angkor Wat Temple, Siem Reap Province, Cambodia!");
        
        // 2. Check existence
        if (File.Exists(filePath)) {
            Console.WriteLine("Success: File created successfully on sandbox disk.");
        }
        
        // 3. Append extra line
        File.AppendAllText(filePath, "\\nRecommended visit hour: 5:00 AM for sunrise.");
        
        // 4. Read text back
        Console.WriteLine("\\nReading content back from file:");
        string savedContent = File.ReadAllText(filePath);
        Console.WriteLine(savedContent);
    }
}`
  },
  {
    id: "cs-exceptions",
    title: {
      en: "C# Exceptions",
      km: "ការគ្រប់គ្រងកំហុស Exceptions"
    },
    content: {
      en: `### Handling Runtime Errors Elegantly
An exception is an error that occurs during the execution of a program, disrupting the normal flow of instructions.

### The \`try...catch\` Block:
- **\`try\`:** Encloses the section of code that might potentially raise an error.
- **\`catch\`:** Captures and handles the exception if one occurs, preventing the program from crashing.
- **\`finally\`:** An optional block that **always** runs, regardless of whether an exception was thrown or caught (used for cleanup tasks like closing files).

### Raising custom exceptions:
You can manually throw a runtime exception using the \`throw\` keyword:
\`\`\`csharp
if (age < 18) {
    throw new ArgumentOutOfRangeException("Must be 18+ to enter!");
}
\`\`\`

> **Note:** Catch specific exception types (e.g. \`DivideByZeroException\`, \`FormatException\`) first before catching the general base \`Exception\` class, keeping your debugging process clean and precise!`,
      km: `### ការគ្រប់គ្រងកំហុសកំពុងដំណើរការ (Exceptions)
Exception គឺជាកំហុសឆ្គងដែលកើតឡើងពេលកម្មវិធីកំពុងរត់ ដែលធ្វើឱ្យរំខាន ឬបញ្ឈប់ដំណើរការកូដជាធម្មតា។

### ការប្រើប្រាស់ប្លុក \`try...catch\`៖
- **\`try\`:** ដាក់កូដទាំងឡាយណាដែលសង្ស័យថាអាចនឹងបង្កឱ្យមានកំហុស។
- **\`catch\`:** ចាប់យក និងគ្រប់គ្រងកំហុសនោះ ប្រសិនបើវាលេចឡើង ដើម្បីការពារកម្មវិធីកុំឱ្យគាំង។
- **\`finally\`:** ប្លុកកូដពិសេសដែល **តែងតែដំណើរការជានិច្ច** មិនថាកំហុសកើតឡើងឬអត់ឡើយ (ល្អសម្រាប់បិទឯកសារ ឬដោះលែងមេម៉ូរី)។

### ការបង្កើតកំហុសដោយខ្លួនឯង៖
អ្នកអាចបង្កើតឱ្យមានកំហុសដោយផ្ទាល់ក្នុងលក្ខខណ្ឌណាមួយដោយប្រើពាក្យ \`throw\`៖
\`\`\`csharp
if (age < 18) {
    throw new ArgumentOutOfRangeException("Must be 18+ to enter!");
}
\`\`\`

> **ចំណាំ:** គួរចាក់សោរចាប់យកប្រភេទកំហុសជាក់លាក់ជាមុន (ដូចជា \`DivideByZeroException\`, \`FormatException\`) មុននឹងចាប់យកកំហុសទូទៅ \`Exception\` ដើម្បីងាយស្រួលរកមូលហេតុជួសជុល!`
    },
    starterCode: `using System;

class Program {
    static void Main() {
        int numerator = 10;
        int denominator = 0;
        
        try {
            Console.WriteLine("Executing dangerous arithmetic operation...");
            int result = numerator / denominator; // Division by zero!
            Console.WriteLine($"Result: {result}");
        }
        catch (DivideByZeroException ex) {
            Console.WriteLine("Arithmetic Error Caught: Cannot divide by zero!");
            Console.WriteLine($"Technical message: {ex.Message}");
        }
        catch (Exception generalEx) {
            Console.WriteLine($"General Error Caught: {generalEx.Message}");
        }
        finally {
            Console.WriteLine("Cleanup Block: This line always executes to secure resources.");
        }
    }
}`
  }
];
