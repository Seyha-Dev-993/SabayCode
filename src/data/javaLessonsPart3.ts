import { Lesson } from '../types';

export const javaLessonsPart3: Lesson[] = [
  {
    id: "java-oop",
    title: {
      en: "Java OOP",
      km: "ការសរសេរកូដ OOP"
    },
    content: {
      en: `### Object-Oriented Programming (OOP)
**OOP** is a programming paradigm that centers around **Classes** and **Objects**, rather than functions and logic.

### Core OOP Concepts:
- **Class:** A template or blueprint for creating objects (e.g., a "Car" blueprint).
- **Object:** An instance of a class containing real data (e.g., a "Toyota" car).
- **The Four Pillars:** Encapsulation, Inheritance, Polymorphism, and Abstraction.

### Our Running Story:
In this section, we will build a **Vehicle and Car Fleet Management System** step-by-step. Each lesson will expand our single, cohesive \`Car\` class!`,
      km: `### ការសរសេរកម្មវិធីតម្រង់វត្ថុ (OOP)
**OOP** គឺជាទម្រង់រៀបចំកូដដែលផ្តោតលើ **Classes** (ថ្នាក់) និង **Objects** (វត្ថុ) ជាជាងអនុគមន៍ និងតក្កវិទ្យា។

### គោលគំនិតចម្បងនៃ OOP៖
- **Class:** គំរូ ឬប្លង់មេសម្រាប់បង្កើតវត្ថុ (ឧទាហរណ៍៖ ប្លង់មេ "ឡាន")។
- **Object:** វត្ថុពិតដែលបង្កើតចេញពីថ្នាក់ (ឧទាហរណ៍៖ ឡាន "Toyota" មួយគ្រឿង)។
- **សសរទ្រូងទាំង ៤:** Encapsulation, Inheritance, Polymorphism, និង Abstraction។

### សាច់រឿងបន្តបន្ទាប់របស់យើង៖
នៅក្នុងផ្នែកនេះ យើងនឹងបង្កើត **ប្រព័ន្ធគ្រប់គ្រងយានយន្ត និងឡាន** មួយជំហានម្តងៗ។ មេរៀននីមួយៗនឹងពង្រីកថ្នាក់ \`Car\` តែមួយរបស់យើងឱ្យកាន់តែមានមុខងារច្រើន!`
    },
    starterCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Ready to build our OOP Vehicle Fleet!");
    }
}`
  },
  {
    id: "java-classes-objects",
    title: {
      en: "Java Classes & Objects",
      km: "ថ្នាក់ និងវត្ថុ (Classes & Objects)"
    },
    content: {
      en: `### Defining a Class & Creating an Object
A class is a user-defined blueprint. An object is a real entity created from that blueprint.

### Syntax:
We declare a class with the \`class\` keyword, and create its objects inside our \`main\` method using the \`new\` keyword.

\`\`\`java
class Car {
    // Blueprint attributes go here
}
\`\`\`

Let's declare our first empty \`Car\` class and instantiate an object of it!`,
      km: `### ការកំណត់ថ្នាក់ និងការបង្កើតវត្ថុ
ថ្នាក់ (Class) គឺជាប្លង់មេដែលយើងកំណត់ឡើង។ វត្ថុ (Object) គឺជាគំរូពិតប្រាកដដែលបង្កើតចេញពីប្លង់មេនោះ។

### ទម្រង់សរសេរ៖
យើងប្រកាសថ្នាក់ដោយប្រើពាក្យគន្លឹះ \`class\` ហើយបង្កើតវត្ថុរបស់វានៅក្នុងអនុគមន៍ \`main\` ដោយប្រើពាក្យគន្លឹះ \`new\`។

\`\`\`java
class Car {
    // គុណលក្ខណៈឡានសរសេរនៅទីនេះ
}
\`\`\`

តោះចាប់ផ្តើមប្រកាសថ្នាក់ \`Car\` ដំបូងបង្អស់របស់យើង រួចបង្កើតឡានមួយគ្រឿងចេញពីវា!`
    },
    starterCode: `// 1. Defining the Car blueprint
class Car {
    // Empty class for now
}

public class Main {
    public static void main(String[] args) {
        // 2. Instantiating a Car object
        Car myCar = new Car();
        System.out.println("Car object successfully created in memory: " + myCar);
    }
}`
  },
  {
    id: "java-class-attributes",
    title: {
      en: "Java Class Attributes",
      km: "គុណលក្ខណៈថ្នាក់ (Attributes)"
    },
    content: {
      en: `### Adding Attributes to Classes
Attributes are variables defined inside a class. They are also known as **fields** or **member variables**.

### Expanding Our Car:
Let's add three attributes to represent our vehicles:
- \`String brand\` (e.g., Toyota)
- \`String model\` (e.g., Prius)
- \`int year\` (e.g., 2022)

You can access and modify attributes of an object using the dot (\`.\`) operator.`,
      km: `### ការបន្ថែមគុណលក្ខណៈទៅកាន់ថ្នាក់
Attributes គឺជាអថេរដែលត្រូវបានកំណត់នៅខាងក្នុងថ្នាក់។ ពួកវាត្រូវបានគេហៅថាជា **Fields** ឬ **អថេរសមាជិក**។

### ការពង្រីកថ្នាក់ឡានរបស់យើង៖
តោះបន្ថែមគុណលក្ខណៈបីដើម្បីតំណាងឱ្យឡានរបស់យើង៖
- \`String brand\` (ម៉ាក ឧ. Toyota)
- \`String model\` (ម៉ូដែល ឧ. Prius)
- \`int year\` (ឆ្នាំផលិត ឧ. 2022)

អ្នកអាចចូលទៅកាន់ និងកែប្រែគុណលក្ខណៈរបស់វត្ថុដោយប្រើប្រមាណវិធីសញ្ញាចុច (\`.\`)។`
    },
    starterCode: `class Car {
    // Adding attributes
    String brand;
    String model;
    int year;
}

public class Main {
    public static void main(String[] args) {
        Car fleet1 = new Car();
        
        // Assigning values
        fleet1.brand = "Toyota";
        fleet1.model = "Prius";
        fleet1.year = 2022;
        
        System.out.println("Fleet Car Details:");
        System.out.println("Brand: " + fleet1.brand);
        System.out.println("Model: " + fleet1.model);
        System.out.println("Year: " + fleet1.year);
    }
}`
  },
  {
    id: "java-class-methods",
    title: {
      en: "Java Class Methods",
      km: "វិធីសាស្ត្រថ្នាក់ (Class Methods)"
    },
    content: {
      en: `### Adding Behavior to Classes
Methods are functions defined inside a class that define the actions/behaviors the objects of that class can perform.

### Expanding Our Car:
Let's add a method \`displaySpecs()\` to our \`Car\` class that prints out its details directly.

Inside a class method, we can access the class's own attributes directly!`,
      km: `### ការបន្ថែមសកម្មភាពទៅកាន់ថ្នាក់
Methods (វិធីសាស្ត្រ) គឺជាអនុគមន៍ដែលកំណត់នៅក្នុងថ្នាក់ ដើម្បីបញ្ជាក់ពីសកម្មភាព ឬអាកប្បកិរិយាដែលវត្ថុនោះអាចធ្វើបាន។

### ការពង្រីកថ្នាក់ឡានរបស់យើង៖
តោះបន្ថែមវិធីសាស្ត្រ \`displaySpecs()\` ទៅកាន់ថ្នាក់ \`Car\` របស់យើង ដើម្បីបោះពុម្ពព័ត៌មានលម្អិតរបស់វា។

នៅខាងក្នុងវិធីសាស្ត្រថ្នាក់ យើងអាចហៅប្រើប្រាស់គុណលក្ខណៈរបស់ថ្នាក់ដោយផ្ទាល់បាន!`
    },
    starterCode: `class Car {
    String brand;
    String model;
    int year;

    // Adding behavior
    void displaySpecs() {
        System.out.println("Vehicle: " + year + " " + brand + " " + model);
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.brand = "Ford";
        myCar.model = "Ranger";
        myCar.year = 2023;
        
        // Calling class method
        myCar.displaySpecs();
    }
}`
  },
  {
    id: "java-constructors",
    title: {
      en: "Java Constructors",
      km: "កុងស្ត្រាក់ទ័រ (Constructors)"
    },
    content: {
      en: `### Initializing Objects with Constructors
A **constructor** is a special method used to initialize objects. It is called automatically when an object of a class is created.

### Key Rules:
1. The constructor name must **match the class name exactly**.
2. It **cannot have a return type** (not even \`void\`).
3. We use the \`this\` keyword to refer to the current object's attributes, preventing name shadowing when parameters have the same name.

\`\`\`java
class Car {
    Car(String brand, String model) {
        this.brand = brand;
    }
}
\`\`\``,
      km: `### ការចាប់ផ្តើមវត្ថុជាមួយ Constructors
**Constructor** គឺជាវិធីសាស្ត្រពិសេសមួយដែលត្រូវបានប្រើដើម្បីចាប់ផ្តើមតម្លៃដំបូងរបស់វត្ថុ។ វាត្រូវបានហៅដោយស្វ័យប្រវត្តនៅពេលវត្ថុត្រូវបានបង្កើត។

### គោលការណ៍សំខាន់ៗ៖
1. ឈ្មោះ Constructor ត្រូវតែ **ដូចគ្នាទៅនឹងឈ្មោះថ្នាក់បេះបិទ**។
2. វាមិនមាន **Return type** ឡើយ (សូម្បីតែ \`void\` ក៏គ្មានដែរ)។
3. យើងប្រើពាក្យគន្លឹះ \`this\` សំដៅលើគុណលក្ខណៈរបស់វត្ថុបច្ចុប្បន្ន ដើម្បីកុំឱ្យច្រឡំជាមួយប៉ារ៉ាម៉ែត្រដែលមានឈ្មោះដូចគ្នា។`
    },
    starterCode: `class Car {
    String brand;
    String model;
    int year;

    // 1. Parameterized Constructor
    Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    void displaySpecs() {
        System.out.println("Vehicle: " + year + " " + brand + " " + model);
    }
}

public class Main {
    public static void main(String[] args) {
        // 2. Instantiate with Constructor (Much cleaner!)
        Car myCar = new Car("Honda", "Civic", 2021);
        myCar.displaySpecs();
    }
}`
  },
  {
    id: "java-modifiers",
    title: {
      en: "Java Modifiers",
      km: "ការកែប្រែសិទ្ធិចូល (Modifiers)"
    },
    content: {
      en: `### Controlling Access with Modifiers
Modifiers are keywords used to set the accessibility/visibility of classes, methods, and attributes.

### Access Modifiers:
- **\`public\`:** Accessible everywhere.
- **\`private\`:** Only accessible **inside the declared class** itself.
- **\`protected\`:** Accessible in the same package and subclasses.
- **\`default\` (no modifier):** Only accessible in the same package.

### Non-Access Modifiers:
- **\`final\`:** Variables cannot be changed, classes cannot be inherited.
- **\`static\`:** Belongs to the class itself, not to individual objects.`,
      km: `### ការគ្រប់គ្រងការចូលប្រើប្រាស់ជាមួយ Modifiers
Modifiers គឺជាពាក្យគន្លឹះដែលប្រើដើម្បីកំណត់សិទ្ធិចូលមើល/ប្រើប្រាស់ថ្នាក់ វិធីសាស្ត្រ និងគុណលក្ខណៈនានា។

### Access Modifiers (សិទ្ធិចូលប្រើប្រាស់)៖
- **\`public\`:** អាចចូលប្រើបានពីគ្រប់ទីកន្លែង។
- **\`private\`:** អាចប្រើបានតែ **នៅខាងក្នុងថ្នាក់ដែលបានប្រកាស** ប៉ុណ្ណោះ។
- **\`protected\`:** អាចប្រើបានក្នុងកញ្ចប់កម្មវិធី (Package) ដូចគ្នា និងថ្នាក់កូន (Subclasses)។
- **\`default\` (មិនសរសេរ):** អាចប្រើបានតែក្នុងកញ្ចប់កម្មវិធីដូចគ្នា។

### Non-Access Modifiers៖
- **\`final\`:** អថេរមិនអាចប្តូរតម្លៃបាន ថ្នាក់មិនអាចទទួលមរតកបន្តបាន។
- **\`static\`:** ជារបស់ថ្នាក់ផ្ទាល់ មិនមែនជារបស់វត្ថុនីមួយៗទេ។`
    },
    starterCode: `class Car {
    public String brand; // Public
    private double fuelCapacity = 50.0; // Private (Hidden from outside!)

    Car(String brand) {
        this.brand = brand;
    }

    // Public method can access private properties internally
    public void printFuelStatus() {
        System.out.println(brand + " fuel capacity is " + fuelCapacity + "L");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car("Lexus");
        System.out.println("Brand: " + car.brand);
        // System.out.println(car.fuelCapacity); // ERROR! fuelCapacity is private
        car.printFuelStatus();
    }
}`
  },
  {
    id: "java-encapsulation",
    title: {
      en: "Java Encapsulation",
      km: "ការវេចខ្ចប់ទិន្នន័យ"
    },
    content: {
      en: `### The 1st Pillar: Encapsulation
**Encapsulation** is the practice of keeping sensitive field data hidden from direct external manipulation.

### How to Implement:
1. Declare class attributes as **\`private\`**.
2. Provide public **getter** and **setter** methods to read and write values safely.

### Why Encapsulate?
- Better control of class attributes (validation logic inside setters).
- Fields can be made read-only (by omitting setters) or write-only.
- Flexiblity to modify internal structures without breaking external apps.`,
      km: `### សសរទ្រូងទី ១៖ ការវេចខ្ចប់ទិន្នន័យ (Encapsulation)
**Encapsulation** គឺជាការអនុវត្តដើម្បីលាក់បាំងទិន្នន័យសំខាន់ៗ កុំឱ្យមានការកែប្រែដោយផ្ទាល់ពីខាងក្រៅថ្នាក់។

### របៀបអនុវត្ត៖
1. ប្រកាសគុណលក្ខណៈទាំងអស់ជា **\`private\`**។
2. បង្កើតវិធីសាស្ត្រសាធារណៈ **Getter** (សម្រាប់ទាញយកតម្លៃ) និង **Setter** (សម្រាប់កំណត់តម្លៃ) ដើម្បីគ្រប់គ្រងទិន្នន័យដោយសុវត្ថិភាព។

### ហេតុអ្វីត្រូវធ្វើ Encapsulation?
- គ្រប់គ្រងគុណលក្ខណៈបានល្អ (អាចឆែកភាពត្រឹមត្រូវនៃទិន្នន័យក្នុង Setter)។
- អាចកំណត់ឱ្យអានតែម្យ៉ាង (Read-only ដោយមិនបាច់បង្កើត Setter)។
- ភាពបត់បែនក្នុងការកែប្រែកូដខាងក្នុង ដោយមិនប៉ះពាល់កម្មវិធីខាងក្រៅ។`
    },
    starterCode: `class Car {
    private String brand;
    private int year;

    public Car(String brand, int year) {
        this.brand = brand;
        setYear(year); // Uses setter validation
    }

    // Getter for Brand
    public String getBrand() {
        return brand;
    }

    // Getter for Year
    public int getYear() {
        return year;
    }

    // Setter for Year with Safety Validation!
    public void setYear(int year) {
        if (year >= 1886 && year <= 2026) { // Auto industry started in 1886
            this.year = year;
        } else {
            System.out.println("Warning: Invalid year ignored!");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car("Tesla", 2024);
        System.out.println("Car: " + car.getBrand() + " Year: " + car.getYear());
        
        // Attempting to set an invalid year
        car.setYear(1500); // Triggers validation
        System.out.println("Car Year stays: " + car.getYear());
    }
}`
  },
  {
    id: "java-packages",
    title: {
      en: "Java Packages & API",
      km: "កញ្ចប់កម្មវិធី និង API"
    },
    content: {
      en: `### Organizing Code with Packages
A **package** in Java is used to group related classes. Think of it as a folder directory.

### Types of Packages:
1. **Built-in Packages:** Libraries from the Java API (e.g., \`java.util\`, \`java.time\`).
2. **User-defined Packages:** Created by you to organize complex app source codes.

### Importing Classes:
To use a class from a package, use the \`import\` keyword:
\`\`\`java
import java.util.Scanner; // Import a single class
import java.util.*;       // Import the whole package
\`\`\``,
      km: `### ការរៀបចំកូដជាមួយកញ្ចប់ (Packages)
**Package** នៅក្នុង Java ត្រូវបានប្រើដើម្បីចងក្រងថ្នាក់ (Classes) ដែលពាក់ព័ន្ធគ្នាជាក្រុម។ គិតថាវាដូចជាថតឯកសារ (Folder)។

### ប្រភេទនៃ Packages៖
1. **Built-in Packages:** បណ្ណាល័យស្រាប់ៗរបស់ Java API (ឧ. \`java.util\`, \`java.time\`)។
2. **User-defined Packages:** បង្កើតឡើងដោយខ្លួនអ្នកផ្ទាល់ ដើម្បីរៀបចំរចនាសម្ព័ន្ធកម្មវិធីស្មុគស្មាញ។

### ការនាំចូលថ្នាក់ (Importing)៖
ដើម្បីប្រើប្រាស់ថ្នាក់ណាមួយពីកញ្ចប់កម្មវិធីផ្សេងទៀត សូមប្រើពាក្យគន្លឹះ \`import\`៖
\`\`\`java
import java.util.Scanner; // នាំចូលថ្នាក់តែមួយ
import java.util.*;       // នាំចូលកញ្ចប់ទាំងមូល
\`\`\``
    },
    starterCode: `// Importing date and time utilities
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Main {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        
        System.out.println("System initialized successfully.");
        System.out.println("Formatted Date & Time: " + now.format(formatter));
    }
}`
  },
  {
    id: "java-inheritance",
    title: {
      en: "Java Inheritance",
      km: "ការទទួលមរតក (Inheritance)"
    },
    content: {
      en: `### The 2nd Pillar: Inheritance
**Inheritance** allows a class to inherit attributes and methods from another class. This promotes code reuse and hierarchical relationships.

### Terminology:
- **Subclass (child):** The class that inherits from another class.
- **Superclass (parent):** The class being inherited from.

### Syntax:
To inherit from a class, use the \`extends\` keyword. Let's make \`Vehicle\` the superclass, and \`Car\` inherit from it!`,
      km: `### សសរទ្រូងទី ២៖ ការទទួលមរតក (Inheritance)
**Inheritance** អនុញ្ញាតឱ្យថ្នាក់មួយទទួលបានគុណលក្ខណៈ និងវិធីសាស្ត្រពីថ្នាក់មួយទៀត។ នេះជួយសម្រួលដល់ការប្រើប្រាស់កូដឡើងវិញ និងបង្កើតទំនាក់ទំនងជាលំដាប់ថ្នាក់។

### វាក្យសព្ទ៖
- **Subclass (ថ្នាក់កូន):** ថ្នាក់ដែលទទួលមរតកពីគេ។
- **Superclass (ថ្នាក់ឪពុក):** ថ្នាក់ដែលត្រូវគេយកមរតកទៅប្រើ។

### ទម្រង់សរសេរ៖
ដើម្បីទទួលមរតកពីថ្នាក់ណាមួយ សូមប្រើពាក្យគន្លឹះ \`extends\`។ តោះបង្កើតថ្នាក់ឪពុក \`Vehicle\` ហើយឱ្យថ្នាក់កូន \`Car\` ទទួលមរតកពីវា!`
    },
    starterCode: `// Parent Class (Superclass)
class Vehicle {
    protected String type = "Motorized"; // visible to child classes
    
    public void honk() {
        System.out.println("Beep! Beep!");
    }
}

// Child Class (Subclass) inheriting from Vehicle
class Car extends Vehicle {
    private String brand;

    public Car(String brand) {
        this.brand = brand;
    }

    public void displayType() {
        // Accessing inherited protected field
        System.out.println(brand + " is a " + type + " vehicle.");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota");
        
        myCar.displayType();
        myCar.honk(); // Calling inherited method!
    }
}`
  },
  {
    id: "java-polymorphism",
    title: {
      en: "Java Polymorphism",
      km: "ពហុរូបភាព (Polymorphism)"
    },
    content: {
      en: `### The 3rd Pillar: Polymorphism
**Polymorphism** means "many forms". It occurs when we have classes related to each other by inheritance, and we override inherited methods to perform different tasks.

### Method Overriding (\`@Override\`):
A subclass can provide a specific implementation of a method that is already defined in its superclass.

Let's expand our system. \`Vehicle\` will have \`makeSound()\`. \`Car\` and \`Motorcycle\` will override it to make their own distinct sound!`,
      km: `### សសរទ្រូងទី ៣៖ ពហុរូបភាព (Polymorphism)
**Polymorphism** មានន័យថា "ទម្រង់ច្រើន"។ វាផ្ដល់លទ្ធភាពឱ្យថ្នាក់ផ្សេងៗគ្នាដែលជាប់ខ្សែស្រឡាយមរតក (Inheritance) ជាមួយគ្នា អាចដំណើរការវិធីសាស្ត្រឈ្មោះដូចគ្នា តែផ្តល់លទ្ធផលប្លែកៗគ្នា។

### Method Overriding (\`@Override\`):
ថ្នាក់កូនអាចផ្លាស់ប្តូររូបមន្ត និងសរសេរឡើងវិញនូវវិធីសាស្ត្រដែលទទួលបានពីថ្នាក់ឪពុក ដើម្បីដំណើរការតាមបែបរបស់វា។

តោះពង្រីកប្រព័ន្ធរបស់យើង៖ ថ្នាក់ \`Vehicle\` មានវិធីសាស្ត្រ \`makeSound()\`។ ហើយថ្នាក់ \`Car\` និង \`Motorcycle\` នឹងសរសេរវាឡើងវិញឱ្យបញ្ចេញសំឡេងខុសៗគ្នា!`
    },
    starterCode: `class Vehicle {
    public void makeSound() {
        System.out.println("The vehicle makes a general sound.");
    }
}

class Car extends Vehicle {
    @Override
    public void makeSound() {
        System.out.println("Car sound: Vroom! Vroom!");
    }
}

class Motorcycle extends Vehicle {
    @Override
    public void makeSound() {
        System.out.println("Motorcycle sound: Braap! Braap!");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle generalVehicle = new Vehicle();
        Vehicle myCar = new Car(); // Upcasting
        Vehicle myMoto = new Motorcycle(); // Upcasting
        
        generalVehicle.makeSound();
        myCar.makeSound();  // Polymorphic execution!
        myMoto.makeSound(); // Polymorphic execution!
    }
}`
  },
  {
    id: "java-inner-classes",
    title: {
      en: "Java Inner Classes",
      km: "ថ្នាក់ខាងក្នុង (Inner Classes)"
    },
    content: {
      en: `### Nesting Classes inside Classes
In Java, it is possible to nest classes (define a class within another class). This is useful to logically group classes that are only used in one place.

### Types of Inner Classes:
1. **Non-static Inner Class:** Has access to fields of the outer class. To instantiate it, you must first create the outer class object.
2. **Static Inner Class:** Cannot access outer class fields directly. Can be instantiated without creating outer class objects.

Let's add an inner class \`Engine\` inside our \`Car\` class to model vehicle components!`,
      km: `### ការសរសេរថ្នាក់បញ្ជ្រាបចូលគ្នា
នៅក្នុង Java យើងអាចសរសេរថ្នាក់មួយនៅខាងក្នុងថ្នាក់មួយទៀតបាន (Nested Class)។ វាមានប្រយោជន៍សម្រាប់ចងក្រងថ្នាក់ដែលប្រើតែមួយកន្លែងឱ្យមានរបៀបរៀបរយ។

### ប្រភេទនៃថ្នាក់ខាងក្នុង៖
1. **Non-static Inner Class (ថ្នាក់ខាងក្នុងធម្មតា):** មានសិទ្ធិចូលទៅកាន់អថេររបស់ថ្នាក់ខាងក្រៅ។ ដើម្បីបង្កើតវាបាន ត្រូវបង្កើតវត្ថុថ្នាក់ខាងក្រៅជាមុនសិន។
2. **Static Inner Class (ថ្នាក់ខាងក្នុងស្ងៀម):** មិនអាចចូលទៅកាន់អថេរថ្នាក់ខាងក្រៅផ្ទាល់បានទេ។ អាចបង្កើតបានដោយមិនបាច់បង្កើតវត្ថុថ្នាក់ខាងក្រៅឡើយ។

តោះបន្ថែមថ្នាក់ខាងក្នុង \`Engine\` ទៅកាន់ថ្នាក់ \`Car\` ដើម្បីតំណាងឱ្យម៉ាស៊ីនរបស់ឡាន!`
    },
    starterCode: `class Car {
    private String modelName;

    public Car(String modelName) {
        this.modelName = modelName;
    }

    // Inner class modeling a component
    class Engine {
        private String engineType;

        public Engine(String engineType) {
            this.engineType = engineType;
        }

        public void start() {
            // Can access private field of outer class!
            System.out.println(engineType + " engine of " + modelName + " is starting... Roar!");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // 1. Create Outer class
        Car car = new Car("Mustang GT");
        
        // 2. Create Inner class using outer object syntax
        Car.Engine engine = car.new Engine("V8");
        engine.start();
    }
}`
  },
  {
    id: "java-abstraction",
    title: {
      en: "Java Abstraction",
      km: "អរូបីយកម្ម (Abstraction)"
    },
    content: {
      en: `### The 4th Pillar: Abstraction
**Data Abstraction** is the process of hiding certain details and showing only the essential information to the user.

### Keywords:
- **\`abstract class\`:** A restricted class that cannot be used to create objects directly (must be inherited).
- **\`abstract method\`:** Can only be used in an abstract class. It does not have a body (the implementation is provided by the subclass).

Let's convert our parent \`Vehicle\` to an \`abstract class\` with an abstract method \`fuelType()\`. This forces all child vehicles to specify their fuel source!`,
      km: `### សសរទ្រូងទី ៤៖ អរូបីយកម្ម (Abstraction)
**Abstraction** គឺជាដំណើរការលាក់បាំងនូវព័ត៌មានលម្អិតស្មុគស្មាញ និងបង្ហាញតែមុខងារសំខាន់ៗដែលចាំបាច់ដល់អ្នកប្រើប្រាស់។

### ពាក្យគន្លឹះ៖
- **\`abstract class\` (ថ្នាក់អរូបី):** ថ្នាក់កម្រិតបង្ខំដែលមិនអាចបង្កើតវត្ថុដោយផ្ទាល់បានឡើយ (ត្រូវតែយកទៅឲ្យគេទទួលមរតកបន្ត)។
- **\`abstract method\` (វិធីសាស្ត្រអរូបី):** វិធីសាស្ត្រដែលគ្មានតួកូដ (គ្មាន body)។ វាត្រូវសរសេរបំពេញរូបមន្តដោយថ្នាក់កូនជាកំហិត។

តោះបំលែងថ្នាក់ឪពុក \`Vehicle\` ឱ្យទៅជា \`abstract class\` ដែលមានអនុគមន៍អរូបី \`fuelType()\`។ នេះបង្ខំឱ្យរាល់ឡានកូនទាំងអស់ត្រូវបញ្ជាក់ពីប្រភេទប្រេងផ្ទាល់ខ្លួន!`
    },
    starterCode: `// Abstract parent class
abstract class Vehicle {
    private String brand;

    public Vehicle(String brand) {
        this.brand = brand;
    }

    public String getBrand() { return brand; }

    // Abstract method (no body!)
    public abstract void fuelType();
}

class Car extends Vehicle {
    public Car(String brand) {
        super(brand);
    }

    // Must implement abstract method!
    @Override
    public void fuelType() {
        System.out.println(getBrand() + " uses Gasoline.");
    }
}

public class Main {
    public static void main(String[] args) {
        // Vehicle v = new Vehicle("Toyota"); // ERROR! Can't instantiate abstract classes
        Vehicle myCar = new Car("Camry");
        myCar.fuelType();
    }
}`
  },
  {
    id: "java-interface",
    title: {
      en: "Java Interface",
      km: "ចំណុចប្រទាក់ (Interface)"
    },
    content: {
      en: `### Interfaces: Multiple Inheritances in Java
An **interface** is a completely "abstract class" that is used to group related methods with empty bodies.

### Why Interfaces?
- Java does not support "multiple inheritance" (a class can only extend one parent). However, a class can **implement multiple interfaces**!
- To declare an interface, use the \`interface\` keyword. To implement it, use the \`implements\` keyword.

Let's create an interface \`Electric\` with \`chargeBattery()\`. Let's have a new class \`TeslaCar\` inherit from \`Car\` and implement \`Electric\`.`,
      km: `### Interfaces (ចំណុចប្រទាក់)
**Interface** គឺជាប្រភេទថ្នាក់អរូបីយទាំងស្រុង ដែលមានតែការប្រកាសឈ្មោះវិធីសាស្ត្រ (គ្មានតួកូដ) សម្រាប់ដាក់ជាលក្ខខណ្ឌការងារ។

### ហេតុអ្វីប្រើ Interface?
- Java មិនអនុញ្ញាតឱ្យទទួលមរតកពីថ្នាក់ឪពុកច្រើនក្នុងពេលតែមួយឡើយ (Multiple inheritance)។ ប៉ុន្តែ ថ្នាក់មួយអាច **អនុវត្តសម្រេច (implements) Interfaces ច្រើនក្នុងពេលតែមួយបាន**!
- ប្រកាសដោយប្រើ \`interface\` និងប្រើ \`implements\` ដើម្បីអនុវត្តការងារ។

តោះបង្កើត Interface \`Electric\` ដែលមានវិធីសាស្ត្រ \`chargeBattery()\`។ បន្ទាប់មកបង្កើតថ្នាក់ \`TeslaCar\` ដែលស្នងមរតកពី \`Car\` ផង និងអនុវត្តការងារពី \`Electric\` ផង។`
    },
    starterCode: `interface Electric {
    void chargeBattery(); // implicitly public abstract
}

class Car {
    private String model;
    public Car(String model) { this.model = model; }
    public String getModel() { return model; }
}

// Tesla inherits from Car and implements Electric!
class TeslaCar extends Car implements Electric {
    public TeslaCar(String model) {
        super(model);
    }

    @Override
    public void chargeBattery() {
        System.out.println("Charging the high-voltage battery of " + getModel() + "... Completed!");
    }
}

public class Main {
    public static void main(String[] args) {
        TeslaCar tesla = new TeslaCar("Model S");
        System.out.println("Vehicle: " + tesla.getModel());
        tesla.chargeBattery();
    }
}`
  },
  {
    id: "java-enums",
    title: {
      en: "Java Enums",
      km: "ប្រភេទតម្លៃថេរ (Enums)"
    },
    content: {
      en: `### Grouping Constants with Enums
An **enum** (short for "enumerated") is a special "class" that represents a group of constants (unchangeable variables).

### Syntax:
Use the \`enum\` keyword, and write values in uppercase, separated by commas.

\`\`\`java
enum VehicleType {
    SEDAN, SUV, TRUCK, ELECTRIC
}
\`\`\`

Let's integrate \`VehicleType\` enum into our \`Car\` class!`,
      km: `### ការចងក្រងតម្លៃថេរជាមួយ Enums
**Enum** (កាត់មកពី Enumerated) គឺជាប្រភេទថ្នាក់ពិសេសមួយសម្រាប់តំណាងឱ្យក្រុមនៃតម្លៃថេរដែលមិនអាចផ្លាស់ប្តូរបាន។

### ទម្រង់សរសេរ៖
ប្រើពាក្យគន្លឹះ \`enum\` និងសរសេរតម្លៃជាអក្សរធំ បំបែកគ្នាដោយសញ្ញាក្បៀស។

\`\`\`java
enum VehicleType {
    SEDAN, SUV, TRUCK, ELECTRIC
}
\`\`\`

តោះបញ្ជូលប្រភេទ Enum \`VehicleType\` ទៅកាន់ថ្នាក់ \`Car\` របស់យើង!`
    },
    starterCode: `enum VehicleType {
    SEDAN, 
    SUV, 
    TRUCK, 
    SPORTSCAR
}

class Car {
    private String brand;
    private VehicleType type;

    public Car(String brand, VehicleType type) {
        this.brand = brand;
        this.type = type;
    }

    public void displayTypeDetails() {
        System.out.println(brand + " is registered as a " + type);
        switch (type) {
            case SPORTSCAR:
                System.out.println("Features: Extreme speed & performance.");
                break;
            case SUV:
                System.out.println("Features: High durability & spacious interior.");
                break;
            default:
                System.out.println("Features: Standard city utility.");
                break;
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Car porsche = new Car("Porsche 911", VehicleType.SPORTSCAR);
        porsche.displayTypeDetails();
    }
}`
  },
  {
    id: "java-user-input",
    title: {
      en: "Java User Input",
      km: "ការទទួលទិន្នន័យពីអ្នកប្រើប្រាស់"
    },
    content: {
      en: `### Reading Console Inputs with Scanner
The \`Scanner\` class of the \`java.util\` package is used to get user input.

### Common Scanner Methods:
- \`nextBoolean()\`: Reads a \`boolean\` value.
- \`nextDouble()\`: Reads a \`double\` value.
- \`nextInt()\`: Reads an \`int\` value.
- \`nextLine()\`: Reads a full line of text (\`String\`).

Let's write an interactive program allowing the user to input details to register a new car in our fleet!`,
      km: `### ការអានទិន្នន័យដោយប្រើ Scanner
ថ្នាក់ \`Scanner\` នៅក្នុងកញ្ចប់ \`java.util\` ត្រូវបានប្រើដើម្បីទទួលការវាយបញ្ចូលទិន្នន័យពីអ្នកប្រើប្រាស់។

### វិធីសាស្ត្រ Scanner ពេញនិយម៖
- \`nextBoolean()\`: អានតម្លៃប៊ូលីន (\`boolean\`)។
- \`nextDouble()\`: អានចំនួនទសភាគ (\`double\`)។
- \`nextInt()\`: អានចំនួនគត់ (\`int\`)។
- \`nextLine()\`: អានអត្ថបទមួយបន្ទាត់ពេញ (\`String\`)។

តោះសរសេរកម្មវិធីអន្តរកម្មមួយ ដើម្បីអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់វាយបញ្ចូលឈ្មោះឡានថ្មីចូលទៅក្នុងប្រព័ន្ធរបស់យើង!`
    },
    starterCode: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Mocking user inputs for automated running in sandbox
        String simulatedInput = "Toyota Prius\\n2022\\n";
        Scanner scanner = new Scanner(simulatedInput); // In desktop, use: new Scanner(System.in)
        
        System.out.println("--- Fleet Registration Sandbox ---");
        System.out.print("Enter Car Brand & Model: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter Manufacture Year: ");
        int year = scanner.nextInt();
        
        System.out.println("\\nSuccess! Car Registered:");
        System.out.println("Name: " + name + " | Year: " + year);
        scanner.close();
    }
}`
  },
  {
    id: "java-date",
    title: {
      en: "Java Date & Time",
      km: "កាលបរិច្ឆេទ និងពេលវេលា"
    },
    content: {
      en: `### Handling Calendar Dates
Java does not have a built-in Date class by default, but we can import the \`java.time\` package which contains powerful classes for temporal data:

### Core Classes:
- \`LocalDate\`: Represents a date (YYYY-MM-DD).
- \`LocalTime\`: Represents a time (HH-MM-SS-nanoseconds).
- \`LocalDateTime\`: Represents both date and time.
- \`DateTimeFormatter\`: Used to format and display date/time values.

Let's calculate the age of our vehicles dynamically based on the current calendar year!`,
      km: `### ការគ្រប់គ្រងកាលបរិច្ឆេទ
Java មិនមានប្រភេទទិន្នន័យកាលបរិច្ឆេទស្រាប់ឡើយ ប៉ុន្តែយើងអាចនាំចូលកញ្ចប់ \`java.time\` ដែលមានផ្ទុកថ្នាក់ដ៏មានអំណាចជាច្រើន៖

### ថ្នាក់ចម្បងៗ៖
- \`LocalDate\`: តំណាងឱ្យថ្ងៃខែឆ្នាំ (YYYY-MM-DD)។
- \`LocalTime\`: តំណាងឱ្យម៉ោងនិងនាទី។
- \`LocalDateTime\`: តំណាងឱ្យទាំងថ្ងៃខែឆ្នាំ និងម៉ោង។
- \`DateTimeFormatter\`: ប្រើសម្រាប់កែច្នៃទម្រង់បង្ហាញកាលបរិច្ឆេទ។

តោះគណនាអាយុកាលរបស់ឡានយើងដោយស្វ័យប្រវត្តិ ផ្អែកលើឆ្នាំកាលបរិច្ឆេតបច្ចុប្បន្ន!`
    },
    starterCode: `import java.time.LocalDate;

class Car {
    private String brand;
    private int birthYear;

    public Car(String brand, int birthYear) {
        this.brand = brand;
        this.birthYear = birthYear;
    }

    public int getAge() {
        int currentYear = LocalDate.now().getYear(); // Get current year from system
        return currentYear - birthYear;
    }

    public void displayStatus() {
        System.out.println(brand + " is " + getAge() + " years old.");
    }
}

public class Main {
    public static void main(String[] args) {
        Car oldCar = new Car("Mercedes-Benz Classic", 1995);
        oldCar.displayStatus();
    }
}`
  },
  {
    id: "java-arraylist",
    title: {
      en: "Java ArrayList",
      km: "អារេលំដាប់លម្អិត (ArrayList)"
    },
    content: {
      en: `### Dynamic Arrays in Java
While standard arrays have a fixed size, an **\`ArrayList\`** is a resizable array found in the \`java.util\` package. Elements can be added and removed dynamically.

### Key Methods:
- \`add(item)\`: Inserts an element at the end.
- \`get(index)\`: Accesses an element at a specific index.
- \`set(index, newItem)\`: Modifies an element.
- \`remove(index)\`: Deletes an item.
- \`size()\`: Returns total number of elements.`,
      km: `### អារេដែលអាចពង្រីកទំហំបាន (ArrayList)
ខណៈពេលដែលអារេធម្មតាមានទំហំថេរ ថ្នាក់ **\`ArrayList\`** គឺជាអារេដែលអាចបត់បែនទំហំបានដោយសេរី ស្ថិតនៅក្នុងកញ្ចប់ \`java.util\`។

### វិធីសាស្ត្រសំខាន់ៗ៖
- \`add(item)\`: បន្ថែមធាតុថ្មីទៅខាងចុង។
- \`get(index)\`: ទាញយកធាតុតាមទីតាំង (Index)។
- \`set(index, newItem)\`: កែប្រែធាតុបច្ចុប្បន្ន។
- \`remove(index)\`: លុបធាតុចេញ។
- \`size()\`: ផ្តល់ចំនួនធាតុសរុប។`
    },
    starterCode: `import java.util.ArrayList;

class Car {
    String model;
    Car(String model) { this.model = model; }
}

public class Main {
    public static void main(String[] args) {
        // Create an ArrayList of Car objects
        ArrayList<Car> fleet = new ArrayList<>();
        
        // 1. Adding cars
        fleet.add(new Car("Prius"));
        fleet.add(new Car("Tesla Model Y"));
        fleet.add(new Car("Ford Raptor"));
        
        System.out.println("Initial Fleet Size: " + fleet.size());
        
        // 2. Accessing and reading items
        System.out.println("Primary Car: " + fleet.get(0).model);
        
        // 3. Removing a car
        fleet.remove(0); // Removes Prius
        System.out.println("New Primary Car after removal: " + fleet.get(0).model);
    }
}`
  },
  {
    id: "java-linkedlist",
    title: {
      en: "Java LinkedList",
      km: "បញ្ជីតភ្ជាប់គ្នា (LinkedList)"
    },
    content: {
      en: `### Linked Lists: Structuring Sequential Objects
The \`LinkedList\` class is almost identical to \`ArrayList\`, but it is built differently under the hood.

### Under the Hood Comparison:
- **ArrayList:** Uses a dynamic array. Fast for accessing elements (\`get(index)\`), but slow when inserting/removing items in the middle because all subsequent elements must be shifted.
- **LinkedList:** Stores items in "containers" (nodes). Each node is connected to the next. Fast for inserting and deleting, but slow for random access (must traverse from the beginning).

Let's model a queue of cars arriving at a toll gate!`,
      km: `### បញ្ជីតភ្ជាប់គ្នា (LinkedList)
ថ្នាក់ \`LinkedList\` មានវិធីសាស្ត្រស្ទើរតែដូចគ្នាទៅនឹង \`ArrayList\` ដែរ ប៉ុន្តែវាត្រូវបានបង្កើតឡើងដោយប្រើរចនាសម្ព័ន្ធខុសគ្នាខាងក្នុង។

### ការប្រៀបធៀបខាងក្នុង៖
- **ArrayList:** ប្រើអារេធម្មតា។ លឿនក្នុងការចូលមើលធាតុ (\`get(index)\`) ប៉ុន្តែយឺតពេលបន្ថែម/លុបធាតុនៅចន្លោះកណ្តាលព្រោះវាត្រូវរុញលំដាប់ធាតុផ្សេងទៀត។
- **LinkedList:** ផ្ទុកធាតុក្នុងប្រអប់តភ្ជាប់គ្នា (Nodes)។ Node នីមួយៗភ្ជាប់ទៅ Node បន្ទាប់។ លឿនបំផុតក្នុងការបន្ថែម ឬលុបធាតុចេញ ប៉ុន្តែយឺតក្នុងការស្វែងរកធាតុចៃដន្យ (ព្រោះត្រូវរាប់តាំងពីក្បាលមក)។

តោះរៀបចំគំរូនៃជួរឡានដែលកំពុងតម្រង់ជួរឆ្លងកាត់របាំងបង់ប្រាក់!`
    },
    starterCode: `import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> tollQueue = new LinkedList<>();
        
        // Adding cars to the toll queue
        tollQueue.add("Lexus RX350");
        tollQueue.add("Hyundai Staria");
        tollQueue.add("Rolls Royce");
        
        // LinkedList has fast methods for queue operations
        tollQueue.addFirst("Ambulance (VIP)"); // Insert at head
        tollQueue.addLast("Cargo Truck");      // Insert at tail
        
        System.out.println("Toll Queue line: " + tollQueue);
        
        // Processing first vehicle
        String served = tollQueue.removeFirst();
        System.out.println("Processed vehicle: " + served);
        System.out.println("Remaining queue: " + tollQueue);
    }
}`
  },
  {
    id: "java-hashmap",
    title: {
      en: "Java HashMap",
      km: "ផែនទីគូរទិន្នន័យ (HashMap)"
    },
    content: {
      en: `### Key-Value Pair Mapping
A \`HashMap\` stores items in **"Key/Value"** pairs. You access them by an index of another type (e.g., a String key), unlike arrays where you access them by integers.

### Key Methods:
- \`put(key, value)\`: Adds a key-value pair.
- \`get(key)\`: Retrieves the value associated with the key.
- \`remove(key)\`: Removes the pair.
- \`clear()\`: Clears the whole map.
- \`size()\`: Returns total entries.

Let's map Vehicle License Plate Numbers (\`String\`) to specific vehicle owner names!`,
      km: `### ការផ្គូផ្គងតម្លៃ Key-Value (HashMap)
\`HashMap\` ផ្ទុកទិន្នន័យជាគូ **"កូនសោ/តម្លៃ" (Key/Value)**។ អ្នកអាចទាញយកតម្លៃដោយប្រើឈ្មោះកូនសោ (Key) ជំនួសឱ្យការប្រើលេខលំដាប់លិបិក្រម (Index)។

### វិធីសាស្ត្រសំខាន់ៗ៖
- \`put(key, value)\`: បញ្ចូលគូទិន្នន័យ Key-Value។
- \`get(key)\`: ទាញយកតម្លៃដែលត្រូវគ្នានឹង Key។
- \`remove(key)\`: លុបគូទិន្នន័យចេញ។
- \`clear()\`: សម្អាតទិន្នន័យទាំងអស់។
- \`size()\`: ផ្តល់ចំនួនគូទិន្នន័យសរុប។`
    },
    starterCode: `import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Maps Plate Number (String) -> Owner Name (String)
        HashMap<String, String> plateRegistry = new HashMap<>();
        
        // Registering vehicles
        plateRegistry.put("PP-2A-8888", "Oknha Dara");
        plateRegistry.put("SR-3B-9999", "Sokha");
        plateRegistry.put("KP-5C-1234", "Bory");
        
        // Looking up owner by license plate key
        String searchPlate = "PP-2A-8888";
        if (plateRegistry.containsKey(searchPlate)) {
            System.out.println("Plate " + searchPlate + " belongs to: " + plateRegistry.get(searchPlate));
        }
        
        System.out.println("Total Registered Cars: " + plateRegistry.size());
    }
}`
  },
  {
    id: "java-hashset",
    title: {
      en: "Java HashSet",
      km: "សំណុំធាតុប្លែកគ្នា (HashSet)"
    },
    content: {
      en: `### Storing Unique Elements with HashSet
A \`HashSet\` is a collection of items where **every item is unique**, found in the \`java.util\` package. It does not allow duplicate values!

### How it works:
If you try to add an item that already exists in the set, it will not be added, and the set size will remain unchanged. This is highly useful for checking membership and preventing duplicated records.

### Key Methods:
- \`add(value)\`: Adds an item (if it doesn't exist).
- \`contains(value)\`: Checks if an item is inside the set (runs in constant O(1) time!).
- \`remove(value)\`: Removes the item.`,
      km: `### សំណុំធាតុប្លែកៗគ្នា (HashSet)
\`HashSet\` គឺជាបណ្តុំទិន្នន័យដែល **ធាតុនីមួយៗមិនអាចស្ទួនគ្នាបានឡើយ** ស្ថិតនៅក្នុងកញ្ចប់ \`java.util\`។

### របៀបដំណើរការ៖
ប្រសិនបើអ្នកព្យាយាមបញ្ចូលធាតុដែលមានស្រាប់ វានឹងមិនបញ្ចូលឡើងវិញឡើយ ហើយទំហំរបស់ HashSet នឹងនៅដដែល។ វាមានប្រយោជន៍ខ្លាំងសម្រាប់ការទប់ស្កាត់ការស្ទួនទិន្នន័យ និងឆែកមើលសមាជិកភាព។

### វិធីសាស្ត្រសំខាន់ៗ៖
- \`add(value)\`: បន្ថែមធាតុ (បើមិនទាន់មាន)។
- \`contains(value)\`: ឆែកថាតើមានធាតុនេះក្នុងសំណុំឬទេ (ដំណើរការលឿនបំផុត O(1)!)។
- \`remove(value)\`: លុបធាតុចេញ។`
    },
    starterCode: `import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        HashSet<String> vipPasses = new HashSet<>();
        
        // Adding access cards
        vipPasses.add("CARD-101");
        vipPasses.add("CARD-102");
        vipPasses.add("CARD-101"); // Attempting duplicate! Will be ignored.
        
        System.out.println("Total Unique VIP passes: " + vipPasses.size()); // Prints 2
        System.out.println("Is CARD-101 VIP? " + vipPasses.contains("CARD-101"));
        System.out.println("Is CARD-505 VIP? " + vipPasses.contains("CARD-505"));
    }
}`
  }
];
