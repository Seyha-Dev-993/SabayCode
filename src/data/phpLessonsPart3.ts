import { Lesson } from '../types';

export const phpLessonsPart3: Lesson[] = [
  {
    id: "php-oop-intro",
    title: {
      en: "PHP What is OOP",
      km: "តើ OOP គឺជាអ្វី?"
    },
    content: {
      en: `### Introduction to Object-Oriented Programming (OOP)
Object-Oriented Programming is a programming paradigm that structures application code around **Objects** rather than functions or logical procedures.

### Key Terms:
- **Class:** A template blueprint for creating objects. It defines fields and behaviors.
- **Object:** An individual, active instance of a class.
- **DRY (Don't Repeat Yourself):** OOP prevents code repetition, making maintenance simple and debugging swift.

### The Four Pillars of OOP:
1. **Encapsulation:** Hiding internal properties inside classes, accessing them safely via getters/setters.
2. **Inheritance:** Creating child classes that inherit variables and actions of parent classes automatically.
3. **Polymorphism:** Authorizing children classes to override method actions for distinct outcomes.
4. **Abstraction:** Declaring templates that mandate specific structures without defining internal lines of code.`,
      km: `### សេចក្តីផ្តើមអំពី Object-Oriented Programming (OOP)
Object-Oriented Programming (OOP) គឺជាគំរូសរសេរកម្មវិធីដែលរៀបចំរចនាសម្ព័ន្ធកូដជុំវិញ **វត្ថុ (Objects)** ជាជាងការផ្តោតលើមុខងារ ឬក្បួនឡូជីខលសាមញ្ញ។

### ពាក្យគន្លឹះសំខាន់ៗ៖
- **ថ្នាក់ (Class):** គឺជាប្លង់គំរូ (Blueprint) សម្រាប់បង្កើតវត្ថុ។ វាផ្ទុកអថេរ និងសកម្មភាពផ្សេងៗ។
- **វត្ថុ (Object):** គឺជាធាតុពិតដែលបង្កើតឡើងចេញពី Class។
- **DRY (Don't Repeat Yourself):** OOP ជួយទប់ស្កាត់ការសរសេរកូដជាន់គ្នា ធ្វើឱ្យការថែទាំកូដមានភាពងាយស្រួល។

### សសរទ្រូងទាំង ៤ នៃ OOP៖
១. **ការវេចខ្ចប់ (Encapsulation):** ការលាក់បាំងតម្លៃអថេរក្នុង Class និងអនុញ្ញាតការអានសរសេរតាមវិធីសាស្ត្រសុវត្ថិភាព។
២. **បន្តពូជ (Inheritance):** ការបង្កើត Class កូនដែលទទួលបានលក្ខណៈ និងសកម្មភាពពី Class ឪពុកស្វ័យប្រវត្ត។
៣. **ពហុរូបភាព (Polymorphism):** អនុញ្ញាតឱ្យ Class កូនៗសរសើរកូដជំនួស (Override) Method ឪពុកសម្រាប់លទ្ធផលផ្សេងគ្នា។
៤. **អរូបី (Abstraction):** ការបង្កើតប្លង់កូដគំរូដែលតម្រូវឱ្យកូនៗអនុវត្តតាម ដោយមិនចាំបាច់សរសេរកូដលម្អិតក្នុង Class ដើមឡើយ។`
    },
    starterCode: `<?php
echo "=== Object-Oriented Programming in PHP ===\\n";
echo "OOP helps structure complex systems cleanly. Proceed to the next page to build your first class!\\n";
?>`
  },
  {
    id: "php-classes-objects",
    title: {
      en: "PHP Classes/Objects",
      km: "ថ្នាក់ និងវត្ថុ Classes/Objects"
    },
    content: {
      en: `### Defining Classes and Creating Objects
In PHP, a class is defined using the \`class\` keyword, followed by the name and curly braces.

### Key Concepts:
- **Properties:** Class variables inside.
- **Methods:** Class functions inside.
- **\$this:** A special keyword pointing to the current object instance inside methods.
- **new:** The keyword used to instantiate a class object.

\`\`\`php
class Fruit {
    public $name; // Property
    function set_name($name) { $this->name = $name; } // Method
}
$apple = new Fruit();
\`\`\``,
      km: `### ការបង្កើត Class និងវត្ថុ Object ក្នុង PHP
នៅក្នុង PHP ថ្នាក់ (Class) ត្រូវបានបង្កើតឡើងដោយប្រើពាក្យគន្លឹះ \`class\` រួចបន្តដោយឈ្មោះថ្នាក់ និងវង់ក្រចករួញ \`{}\`។

### គំនិតសំខាន់ៗ៖
- **លក្ខណៈសម្បត្តិ (Properties):** ជាអថេរដែលប្រកាសនៅក្នុង Class។
- **វិធីសាស្ត្រ (Methods):** ជាមុខងារ (Functions) ដែលប្រកាសនៅក្នុង Class។
- **\$this:** ពាក្យគន្លឹះពិសេសដែលតំណាងឱ្យធាតុវត្ថុបច្ចុប្បន្នដែលកំពុងត្រូវបានហៅប្រើប្រាស់។
- **new:** ពាក្យគន្លឹះដែលប្រើសម្រាប់បង្កើត Object ចេញពី Class។

\`\`\`php
class Fruit {
    public $name; // លក្ខណៈសម្បត្តិ
    function set_name($name) { $this->name = $name; } // វិធីសាស្ត្រ
}
$apple = new Fruit();
\`\`\``
    },
    starterCode: `<?php
class Car {
    // Properties
    public $color;
    public $brand;

    // Methods
    public function setDetails($brand, $color) {
        $this->brand = $brand;
        $this->color = $color;
    }

    public function getDetails() {
        return "Car Details: " . $this->brand . " | Color: " . $this->color;
    }
}

// Instantiate objects
$car1 = new Car();
$car1->setDetails("Toyota Prius", "White");

$car2 = new Car();
$car2->setDetails("Ford Ranger", "Black");

echo $car1->getDetails() . "\\n";
echo $car2->getDetails() . "\\n";
?>`
  },
  {
    id: "php-constructor",
    title: {
      en: "PHP Constructor",
      km: "ស្ថាបនិក Constructor"
    },
    content: {
      en: `### The __construct Method
A constructor allows you to initialize an object's properties automatically upon creation.

### How it Works:
PHP features a special magic method named \`__construct()\` (two underscores followed by "construct") that runs automatically whenever you create an object using the \`new\` keyword.

\`\`\`php
class Fruit {
    public $name;
    function __construct($name) {
        $this->name = $name;
    }
}
$apple = new Fruit("Apple");
\`\`\`

> **Note:** Constructors save lines of code because you do not need to call multiple setter methods immediately after object creation.`,
      km: `### វិធីសាស្ត្រស្ថាបនិក __construct
ស្ថាបនិក (Constructor) អនុញ្ញាតឱ្យអ្នកកំណត់តម្លៃលក្ខណៈសម្បត្តិនៃ Object ដោយស្វ័យប្រវត្តិនៅពេលវាត្រូវបានបង្កើតឡើង។

### របៀបដំណើរការ៖
PHP មានមុខងារមន្តអាគមពិសេសមួយឈ្មោះថា \`__construct()\` (សញ្ញាខណ្ឌកណ្តាលពីររួចបន្តដោយពាក្យ "construct") ដែលវានឹងរត់ដោយស្វ័យប្រវត្តិរាល់ពេលដែលអ្នកបង្កើត Object ថ្មីដោយប្រើពាក្យ \`new\`។

\`\`\`php
class Fruit {
    public $name;
    function __construct($name) {
        $this->name = $name;
    }
}
$apple = new Fruit("Apple");
\`\`\`

> **សម្គាល់:** Constructors ជួយសម្រួលការសរសេរកូដបានច្រើន ព្រោះអ្នកមិនបាច់ហៅ Method បំពេញតម្លៃម្តងមួយៗភ្លាមៗក្រោយបង្កើត Object ឡើយ។`
    },
    starterCode: `<?php
class Book {
    public $title;
    public $author;
    public $price;

    // Constructor declaration
    public function __construct($title, $author, $price) {
        $this->title = $title;
        $this->author = $author;
        $this->price = $price;
    }

    public function getSummary() {
        return "'{$this->title}' by {$this->author} | Price: \${$this->price}";
    }
}

// Pass parameters directly to constructor
$myBook = new Book("Angkor Legends", "Kosal", 14.99);

echo $myBook->getSummary() . "\\n";
?>`
  },
  {
    id: "php-destructor",
    title: {
      en: "PHP Destructor",
      km: "កម្ទេចករ Destructor"
    },
    content: {
      en: `### The __destruct Method
A destructor is a special method called automatically when an object is destroyed or the script stops running.

### Key Aspects:
- Named \`__destruct()\` (two underscores followed by "destruct").
- Does not take any parameters.
- Primarily used to release resources: closing database connections, unlocking files, or clearing memory buffers.

> **Tip:** Destructors run in reverse order of object creation or whenever an object goes out of scope.`,
      km: `### វិធីសាស្ត្រកម្ទេចករ __destruct
កម្ទេចករ (Destructor) គឺជាវិធីសាស្ត្រពិសេសមួយដែលត្រូវបានហៅដំណើរការដោយស្វ័យប្រវត្តិតែម្តង នៅពេលដែល Object ត្រូវបានលុបចោល ឬកម្មវិធី PHP រត់ដល់ទីបញ្ចប់។

### លក្ខណៈសម្គាល់៖
- ហៅឈ្មោះថា \`__destruct()\` (សញ្ញាខណ្ឌកណ្តាលពីរ រួចពាក្យ "destruct")។
- មិនទទួល Parameter ឡើយ។
- ប្រើសម្រាប់ដោះលែងធនធានរបស់ Server ដូចជា៖ បិទការភ្ជាប់ Database, បិទឯកសារ ឬសម្អាតមេម៉ូរី។

> **គន្លឹះ:** Destructors ដំណើរការបញ្ច្រាសលំដាប់នៃការបង្កើត Object ឬនៅពេលដែល Object គ្មានអ្នកប្រើប្រាស់បន្ត។`
    },
    starterCode: `<?php
class FileSimulator {
    private $filename;

    public function __construct($name) {
        $this->filename = $name;
        echo "1. File '{$this->filename}' opened successfully!\\n";
    }

    public function writeData($data) {
        echo "2. Writing data to server: '$data'\\n";
    }

    // Runs automatically at script end or object destruction
    public function __destruct() {
        echo "3. File '{$this->filename}' closed automatically by destructor!\\n";
    }
}

// Let's instantiate and write
$file = new FileSimulator("user_log.txt");
$file->writeData("User Dara logged in from Phnom Penh.");
?>`
  },
  {
    id: "php-access-modifiers",
    title: {
      en: "PHP Access Modifiers",
      km: "កម្រិតសិទ្ធិចូលប្រើ Access Modifiers"
    },
    content: {
      en: `### Visibility Controls
Access modifiers define the scope of visibility for properties and methods.

### Three Modifiers in PHP:
1. **\`public\`**: Accessible from anywhere (inside the class, inherited classes, and outer scripts). This is the default.
2. **\`protected\`**: Accessible ONLY inside the declaring class and its inherited child classes.
3. **\`private\`**: Accessible strictly ONLY inside the declaring class itself. Child classes cannot read or modify private fields.

> **Security Note:** Keeping properties \`private\` or \`protected\` protects objects from direct, unauthorized modification of values, enforcing standard API usage.`,
      km: `### កម្រិតសិទ្ធិចូលប្រើ (Visibility Controls) ក្នុង PHP
Access Modifiers កំណត់ដែនសមត្ថកិច្ច និងសិទ្ធិមើលឃើញរបស់អថេរ និងវិធីសាស្ត្រផ្សេងៗ។

### ប្រភេទកម្រិតសិទ្ធិទាំង ៣ ក្នុង PHP៖
១. **\`public\`**: អាចហៅប្រើពីទីណាក៏បាន (ក្នុង Class, ក្នុង Class កូន ឬខាងក្រៅ Class)។ នេះជាតម្លៃលំនាំដើម។
២. **\`protected\`**: អាចហៅប្រើបានតែក្នុង Class ផ្ទាល់ខ្លួន និង Class កូនដែលបន្តពូជពីវាប៉ុណ្ណោះ។
៣. **\`private\`**: អាចហៅប្រើបានតែក្នុង Class ផ្ទាល់ខ្លួនតែមួយគត់។ Class កូនមិនអាចមើលឃើញ ឬកែបានឡើយ។

> **ចំណាំសុវត្ថិភាព:** ការរក្សាទុកអថេរជា \`private\` ឬ \`protected\` ការពារ Object ពីការកែប្រែតម្លៃផ្តេសផ្តាសពីខាងក្រៅ និងជួយឱ្យការសរសេរកូដមានរបៀបរៀបរយ។`
    },
    starterCode: `<?php
class BankVault {
    public $owner;
    protected $goldWeight; // child classes can access
    private $securityCode;  // only this class can access

    public function __construct($owner, $gold, $code) {
        $this->owner = $owner;
        $this->goldWeight = $gold;
        $this->securityCode = $code;
    }

    public function getVaultStatus() {
        // Can access all inside
        return "Owner: {$this->owner} | Secure PIN code: {$this->securityCode}";
    }
}

$vault = new BankVault("Dara Sok", 150.5, "PIN_9876");
echo "Public Owner: " . $vault->owner . "\n";
echo "Vault Status: " . $vault->getVaultStatus() . "\n";
?>`
  },
  {
    id: "php-inheritance",
    title: {
      en: "PHP Inheritance",
      km: "ការបន្តពូជ Inheritance"
    },
    content: {
      en: `### Code Reusability: Class Inheritance
Inheritance enables a class to acquire properties and methods of another class. We use the \`extends\` keyword.

### Key Elements:
- **Base/Parent Class:** The class being inherited from.
- **Derived/Child Class:** The class that inherits.
- **Overriding:** Redefining a parent's method in the child class to implement custom actions.
- **\`final\` Keyword:** Prefixing a parent class or method with \`final\` prevents inheritance or overriding entirely.

\`\`\`php
class DerivedClass extends ParentClass {
    // inherits all public/protected parent features
}
\`\`\``,
      km: `### ការបន្តពូជ (Inheritance) ក្នុង PHP
ការបន្តពូជអនុញ្ញាតឱ្យ Class មួយទទួលបានអថេរ និងវិធីសាស្ត្រពី Class មួយផ្សេងទៀត។ យើងប្រើពាក្យគន្លឹះ \`extends\`។

### ធាតុផ្សំសំខាន់ៗ៖
- **Class ឪពុក (Parent Class):** ថ្នាក់ចម្បងដែលផ្តល់សិទ្ធិបន្តពូជ។
- **Class កូន (Child Class):** ថ្នាក់ថ្មីដែលទទួលការបន្តពូជ។
- **ការសរសេរជំនួស (Overriding):** ការសរសើរកូដលើ Method ដដែលរបស់ឪពុកនៅក្នុងថ្នាក់កូន ដើម្បីទទួលបានសកម្មភាពផ្សេង។
- **ពាក្យគន្លឹះ \`final\`:** ការប្រើប្រាស់ \`final\` ពីមុខ Class ឬ Method ការពារមិនឱ្យគេយកវាទៅបន្តពូជ ឬ Override ឡើយ។`
    },
    starterCode: `<?php
class Vehicle {
    public $brand;

    public function __construct($brand) {
        $this->brand = $brand;
    }

    public function engineSound() {
        return "Generic Vroom!";
    }
}

// Child class extends Parent class
class ElectricCar extends Vehicle {
    public $batteryLife;

    public function __construct($brand, $battery) {
        parent::__construct($brand); // Call parent constructor
        $this->batteryLife = $battery;
    }

    // Method Overriding
    public function engineSound() {
        return "Silent Hum...";
    }
}

$myTesla = new ElectricCar("Tesla Model Y", "100kWh");
echo "Brand: " . $myTesla->brand . "\\n";
echo "Sound: " . $myTesla->engineSound() . "\\n";
?>`
  },
  {
    id: "php-class-constants",
    title: {
      en: "PHP Class Constants",
      km: "ថេរថ្នាក់ Class Constants"
    },
    content: {
      en: `### Class Constants
Unlike global constants declared via \`define()\`, class constants are defined inside a class scope using the \`const\` keyword. They cannot be modified once declared.

### Key Aspects:
- Declared inside classes using \`const\` without any access prefix (though in modern PHP, visibility modifiers like \`public\`, \`protected\`, or \`private\` can be prefixed).
- Are case-sensitive. Recommended practice is to use all UPPERCASE characters.
- Accessed using the Scope Resolution Operator \`::\` without instantiating an object!
- Accessed inside the class using \`self::CONSTANT_NAME\`.
- Accessed outside the class using \`ClassName::CONSTANT_NAME\`.`,
      km: `### ថេរនៅក្នុងថ្នាក់ (Class Constants)
ខុសពីថេរសកល (Global Constants) ដែលប្រកាសតាម \`define()\` ថេរថ្នាក់ត្រូវបានកំណត់នៅក្នុងដែនសមត្ថកិច្ចរបស់ Class ដោយប្រើពាក្យគន្លឹះ \`const\`។ ពួកវាមិនអាចកែប្រែតម្លៃបានឡើយ។

### ច្បាប់សំខាន់ៗ៖
- ប្រកាសក្នុង Class ដោយប្រើ \`const\` (អាចប្រើ \`public\`, \`protected\`, ឬ \`private\` ពីមុខដើម្បីកំណត់សិទ្ធិមើលឃើញ)។
- ប្រកាន់អក្សរតូចធំ និងត្រូវបានណែនាំឱ្យសរសេរជា អក្សរធំ ទាំងអស់។
- ហៅប្រើតាមរយៈ Scope Resolution Operator \`::\` ដោយមិនបាច់បង្កើត Object ឡើយ!
- ហៅប្រើពីក្នុង Class ដោយប្រើពាក្យ \`self::CONSTANT_NAME\`។
- ហៅប្រើពីខាងក្រៅ Class ដោយប្រើ \`ClassName::CONSTANT_NAME\`។`
    },
    starterCode: `<?php
class ServerConfig {
    // Class Constants
    public const MAX_CONNECTIONS = 500;
    private const SECRET_SALT = "cambodia_secure_salt_99";

    public function printSecret() {
        // Accessing constant inside class via self::
        return "Salt: " . self::SECRET_SALT;
    }
}

// Accessing constant outside class via ClassName::
echo "Max Server Connections Allowed: " . ServerConfig::MAX_CONNECTIONS . "\\n";

$config = new ServerConfig();
echo "Internal Config info: " . $config->printSecret() . "\\n";
?>`
  },
  {
    id: "php-abstract-classes",
    title: {
      en: "PHP Abstract Classes",
      km: "ថ្នាក់អរូបី Abstract Classes"
    },
    content: {
      en: `### Abstract Classes & Methods
An abstract class is a template parent class that cannot be instantiated on its own. It is designed purely to define structure for inherited classes.

### Specifications:
- Created using the \`abstract\` keyword.
- If a class contains at least one abstract method, the class itself **must** be declared abstract.
- An abstract method has only a signature definition and **cannot** contain executable lines of code inside.
- Inherited child classes **must** override and implement all abstract methods with the same (or less restrictive) access visibility scope.`,
      km: `### ថ្នាក់ និងវិធីសាស្ត្រអរូបី (Abstract Classes & Methods)
Abstract Class គឺជា Class គំរូឪពុកដែលមិនអាចយកទៅបង្កើតជា Object ផ្ទាល់ខ្លួនបានឡើយ។ វាត្រូវបានបង្កើតឡើងដើម្បីកំណត់រចនាសម្ព័ន្ធសម្រាប់ Class កូនៗយកទៅពង្រីក។

### លក្ខខណ្ឌបច្ចេកទេស៖
- បង្កើតឡើងដោយប្រើពាក្យគន្លឹះ \`abstract\`។
- ប្រសិនបើ Class មួយមាន Method អរូបីយ៉ាងហោចណាស់មួយ នោះ Class ទាំងមូល**ត្រូវតែ**ប្រកាសជា abstract។
- Abstract Method មានត្រឹមតែការប្រកាសឈ្មោះ និងប៉ារ៉ាម៉ែត្រប៉ុណ្ណោះ **មិនអាច**សរសេរកូដលម្អិតក្នុងវង់ក្រចកបានឡើយ។
- Class កូនដែលបន្តពូជ**ត្រូវតែ**បង្កើត និងសរសេរកូដបំពេញរាល់ abstract methods ទាំងអស់ដោយគ្មានការលើកលែង។`
    },
    starterCode: `<?php
abstract class PaymentProcessor {
    // Abstract method: mandates implementation in children
    abstract protected function processCharge(float $amount): string;
}

class WingPay extends PaymentProcessor {
    // Implementing abstract method is MANDATORY
    public function processCharge(float $amount): string {
        return "WingPay Approved: \${$amount} debited safely.";
    }
}

class AbaPay extends PaymentProcessor {
    public function processCharge(float $amount): string {
        return "ABA Pay Merchant: Transacted \${$amount} successfully.";
    }
}

$userPayment1 = new WingPay();
echo $userPayment1->processCharge(150.00) . "\\n";

$userPayment2 = new AbaPay();
echo $userPayment2->processCharge(50.00) . "\\n";
?>`
  },
  {
    id: "php-interfaces",
    title: {
      en: "PHP Interfaces",
      km: "ចំណុចប្រទាក់ Interfaces"
    },
    content: {
      en: `### Defining Contracts with Interfaces
Interfaces allow you to specify which methods a class must implement without defining how these methods are handled. We use the \`interface\` keyword and implement them using the \`implements\` keyword.

### Key differences between Abstract Classes and Interfaces:
1. **No Properties:** Interfaces cannot contain class properties/variables (only methods and constants).
2. **All Public:** All methods inside interfaces **must** be public.
3. **Multiple Inheritance:** A class can implement multiple interfaces at the same time, overcoming PHP's single-inheritance limitation.`,
      km: `### ការកំណត់កិច្ចសន្យាកូដជាមួយ Interfaces
Interfaces អនុញ្ញាតឱ្យអ្នកកំណត់កិច្ចសន្យាថាតើ Class មួយត្រូវតែមានវិធីសាស្ត្រអ្វីខ្លះ ដោយមិនបាច់កំណត់ពីរបៀបដែលវិធីសាស្ត្រទាំងនោះរត់ឡើយ។ យើងប្រើពាក្យគន្លឹះ \`interface\` និងយកមកប្រើជាមួយពាក្យ \`implements\`។

### ភាពខុសគ្នារវាង Abstract Class និង Interface៖
១. **គ្មានអថេរ (No Properties):** Interfaces មិនអាចមានអថេរលក្ខណៈសម្បត្តិឡើយ (មានតែ Method និង Constants)។
២. **ត្រូវតែជា Public:** រាល់ Method ក្នុង Interface **ត្រូវតែ**កំណត់ជា public ជានិច្ច។
៣. **ការទទួលកិច្ចសន្យាច្រើន (Multiple Inheritance):** Class មួយអាចអនុវត្តតាម Interfaces ច្រើនក្នុងពេលតែមួយបាន (ដោះស្រាយបញ្ហាដែល PHP មិនឱ្យ extends class ឪពុកលើសពីមួយ)។`
    },
    starterCode: `<?php
interface Flyable {
    public function fly();
}

interface SoundMaker {
    public function makeSound();
}

// Class implements multiple interfaces
class Eagle implements Flyable, SoundMaker {
    public function fly() {
        echo "The eagle flies high above the Cardamom Mountains!\\n";
    }

    public function makeSound() {
        echo "Screeech!\\n";
    }
}

$bird = new Eagle();
$bird->fly();
$bird->makeSound();
?>`
  },
  {
    id: "php-traits",
    title: {
      en: "PHP Traits",
      km: "លក្ខណៈពិសេស Traits"
    },
    content: {
      en: `### Horizontal Reusability: Traits
Traits are a mechanism for code reuse in single-inheritance languages like PHP. A trait is intended to group functionality in a fine-grained and consistent way.

### Rules of Traits:
- Declared using the \`trait\` keyword.
- Cannot be instantiated on their own.
- Included inside classes using the \`use\` keyword.
- Overcomes class hierarchy restrictions by allowing multiple traits insertion.`,
      km: `### ការប្រើប្រាស់កូដរួមគ្នាបែបផ្តេក (Traits) ក្នុង PHP
Traits គឺជាយន្តការមួយសម្រាប់ប្រើប្រាស់កូដរួមគ្នាឡើងវិញ នៅក្នុងភាសាបន្តពូជទោល (Single-inheritance) ដូចជា PHP។ វាជួយប្រមូលផ្តុំមុខងារមួយចំនួនចូលគ្នាជាក្រុមៗ។

### ច្បាប់ប្រើប្រាស់៖
- បង្កើតឡើងដោយប្រើពាក្យគន្លឹះ \`trait\`។
- មិនអាចយកទៅបង្កើតជា Object ផ្ទាល់ខ្លួនបានឡើយ។
- យកមកប្រើប្រាស់ក្នុង Class នានាដោយសរសេរពាក្យគន្លឹះ \`use\`។
- ជួយជៀសវាងភាពស្មុគស្មាញនៃលំដាប់ថ្នាក់ ដោយសារ Class មួយអាច use traits ច្រើនក្នុងពេលតែមួយបាន។`
    },
    starterCode: `<?php
trait DebuggerHelper {
    public function dumpVar($var) {
        echo "[DEBUG INFO]: ";
        var_dump($var);
    }
}

trait SecurityAuditor {
    public function hashValue(string $val): string {
        return hash("sha256", $val);
    }
}

class AdminController {
    // Inject both traits
    use DebuggerHelper, SecurityAuditor;
}

$admin = new AdminController();
$admin->dumpVar(["Role" => "Root Admin"]);
echo "Hashed password: " . $admin->hashValue("mypass123") . "\\n";
?>`
  },
  {
    id: "php-static-methods",
    title: {
      en: "PHP Static Methods",
      km: "វិធីសាស្ត្រស្តាទិច Static Methods"
    },
    content: {
      en: `### Static Methods in PHP
Static methods can be called directly without creating an instance of the class first.

### Key Elements:
- Declared with the \`static\` keyword.
- Accessed using the Scope Resolution Operator \`::\` (e.g., \`ClassName::methodName()\`).
- Inside static methods, you **cannot** use the \`$this\` keyword because no object instance exists! Access static properties instead using \`self::\`.`,
      km: `### វិធីសាស្ត្រស្តាទិច (Static Methods) ក្នុង PHP
Static Methods គឺជាវិធីសាស្ត្រដែលអាចហៅមកដំណើរការបានភ្លាមៗ ដោយមិនបាច់បង្កើត Object ចេញពី Class នោះជាមុនឡើយ។

### ចរិតលក្ខណៈ៖
- ប្រកាសដោយប្រើពាក្យគន្លឹះ \`static\`។
- ហៅប្រើដោយប្រើប្រាស់សញ្ញាចុចពីរពីរដង \`::\` (ឧទាហរណ៍៖ \`ClassName::methodName()\`)។
- នៅក្នុង Static Method អ្នក**មិនអាច**ប្រើប្រាស់ពាក្យគន្លឹះ \`$this\` ឡើយ ព្រោះគ្មាន Object ឡើយ! បើចង់ហៅលក្ខណៈស្តាទិចផ្សេងទៀត ត្រូវប្រើ \`self::\`។`
    },
    starterCode: `<?php
class MathUtility {
    // Static method
    public static function convertCelsiusToFahrenheit(float $celsius): float {
        return ($celsius * 9 / 5) + 32;
    }
}

// Call directly without instantiating class
$tempF = MathUtility::convertCelsiusToFahrenheit(37.5);
echo "37.5°C is equal to " . $tempF . "°F\\n";
?>`
  },
  {
    id: "php-static-properties",
    title: {
      en: "PHP Static Properties",
      km: "លក្ខណៈសម្បត្តិស្តាទិច Static Properties"
    },
    content: {
      en: `### Shared Class Properties
Static properties belong to the class itself, rather than to any specific instance object. Their value is shared across all instances of the class.

### Key Aspects:
- Declared with the \`static\` keyword.
- Accessed via \`ClassName::$propertyName\` (note that the \`$\` is kept!).
- Inside instance methods, accessed using \`self::$propertyName\`.`,
      km: `### លក្ខណៈសម្បត្តិរួមរបស់ថ្នាក់ (Static Properties)
Static Properties គឺជាអថេររបស់ Class ផ្ទាល់តែម្តង មិនមែនជារបស់ Object ណាមួយឡើយ។ តម្លៃរបស់វាត្រូវបានប្រើប្រាស់រួមគ្នាដោយរាល់ Object ទាំងអស់ដែលបង្កើតចេញពី Class នោះ។

### លក្ខណៈសម្គាល់៖
- ប្រកាសដោយប្រើពាក្យគន្លឹះ \`static\`។
- ហៅប្រើពីខាងក្រៅតាមរយៈ \`ClassName::$propertyName\` (ចំណាំ៖ ត្រូវរក្សាទុកសញ្ញា \`$\` នៅមុខឈ្មោះអថេរ)។
- ហៅប្រើពីក្នុង Method ធម្មតារបស់ Class តាមរយៈ \`self::$propertyName\`។`
    },
    starterCode: `<?php
class VisitorCounter {
    // Static property to track counter globally
    public static $totalVisitors = 0;

    public function __construct() {
        // Increment static variable on every instantiation
        self::$totalVisitors++;
    }
}

// Create visitors
$v1 = new VisitorCounter();
$v2 = new VisitorCounter();
$v3 = new VisitorCounter();

echo "Total Visitors tracked: " . VisitorCounter::$totalVisitors . "\\n";
?>`
  },
  {
    id: "php-namespaces",
    title: {
      en: "PHP Namespaces",
      km: "កន្លែងដាក់ឈ្មោះ Namespaces"
    },
    content: {
      en: `### Avoiding Name Collisions
Namespaces are designed to solve name collisions of classes or functions inside large libraries, acting like virtual folder directories for your code structures.

### Key Syntax Rules:
- Must be declared at the **very top** of the file before any other code (except for the \`declare\` directive).
- Declared using the \`namespace\` keyword.
- Classes in a namespace are imported using the \`use\` keyword.

\`\`\`php
namespace App\\Database;
class Connector {}
\`\`\``,
      km: `### ការពារការជាន់ឈ្មោះគ្នា (Namespaces) ក្នុង PHP
Namespaces ត្រូវបានរចនាឡើងដើម្បីដោះស្រាយបញ្ហានៃការជាន់ឈ្មោះគ្នាខ្លាំងនៃ Classes ឬ Functions នៅក្នុងកម្មវិធីធំៗ ឬបណ្ណាល័យកូដ។ វាប្រៀបដូចជាការបែងចែកថតឯកសារ (Folders) សម្ងាត់សម្រាប់កូដ។

### ច្បាប់កំណត់៖
- ត្រូវតែប្រកាសនៅ**ផ្នែកខាងលើបង្អស់**នៃឯកសារកូដ មុនកូដផ្សេងៗទាំងអស់ (លើកលែងតែ \`declare\`)។
- ប្រកាសដោយប្រើពាក្យគន្លឹះ \`namespace\`។
- ដើម្បីនាំយក Class ចេញពី namespace មកប្រើ យើងប្រើពាក្យគន្លឹះ \`use\`។

\`\`\`php
namespace App\\Database;
class Connector {}
\`\`\``
    },
    starterCode: `<?php
namespace Cambodia\\Aviation;

class Plane {
    public function fly() {
        return "Cambodia Angkor Air flight taking off!\\n";
    }
}

// In the same file, we can refer to the namespaced class
$flight = new \\Cambodia\\Aviation\\Plane();
echo $flight->fly();
?>`
  },
  {
    id: "php-iterables",
    title: {
      en: "PHP Iterables",
      km: "រង្វិលដែលអាចវិល Iterables"
    },
    content: {
      en: `### The iterable Pseudo-Type
Introduced in **PHP 7.1**, \`iterable\` is a pseudo-type that accepts any array or object that implements the \`Iterator\` or \`IteratorAggregate\` interface, allowing them to be looped via \`foreach\`.

### Usage Benefits:
- Used as a parameter type to declare that a function requires loopable elements.
- Used as a return type to indicate that the output can be securely traversed with \`foreach\`.`,
      km: `### ប្រភេទទិន្នន័យដេរីវេ (iterable Pseudo-Type) ក្នុង PHP
ត្រូវបានណែនាំក្នុង **PHP 7.1** \`iterable\` គឺជាប្រភេទទិន្នន័យជំនួយដែលទទួលយកទាំង អារេ (Array) ឬវត្ថុ (Object) ណាដែលអនុវត្តតាម Interface \`Iterator\` ដែលអនុញ្ញាតឱ្យគេយកវាទៅវិលជុំក្នុង \`foreach\` បាន។

### អត្ថប្រយោជន៍៖
- ប្រើជា Parameter type ដើម្បីប្រាប់ថាកូដត្រូវការធាតុដែលអាចវិលជុំបាន។
- ប្រើជា Return type ដើម្បីបង្ហាញថាលទ្ធផលដែលបញ្ជូនមកវិញ អាចយកទៅរត់ក្នុង \`foreach\` បានយ៉ាងសុវត្ថិភាព។`
    },
    starterCode: `<?php
// Declare function that takes iterable as input
function renderList(iterable $items) {
    foreach ($items as $item) {
        echo "- " . $item . "\\n";
    }
}

$languages = ["PHP", "JavaScript", "C#", "C++"];
echo "Looping through iterable array:\\n";
renderList($languages);
?>`
  }
];
