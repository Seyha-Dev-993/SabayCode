import { Lesson } from '../types';

export const pythonLessonsPart3: Lesson[] = [
  // --- PYTHON CLASSES SUB-SECTION ---
  {
    id: "py-oop",
    title: { en: "Python OOP", km: "កូដតម្រង់ទិសវត្ថុ (OOP)" },
    content: {
      en: `### Object-Oriented Programming (OOP)
Object-Oriented Programming is a programming paradigm that uses **Classes** and **Objects** to structure software into reusable, modular pieces.

### Five Core Concepts
1. **Class:** The blueprint or template for creating objects.
2. **Object:** An instance of a class containing real data.
3. **Inheritance:** Creating new classes from existing ones to reuse code.
4. **Polymorphism:** Allowing different classes to respond to the same method in their own way.
5. **Encapsulation:** Hiding internal details and protecting data from direct external access.

### Our Running Example: The Vehicle Ecosystem
To understand OOP deeply, we will build a cohesive, evolving **Car** and **Vehicle** ecosystem throughout this section. Let's start by looking at a high-level representation of a class!`,
      km: `### ការសរសេរកម្មវិធីតម្រង់ទិសវត្ថុ (OOP)
Object-Oriented Programming (OOP) គឺជាវិធីសាស្ត្ររៀបចំរចនាសម្ព័ន្ធកម្មវិធីដោយប្រើប្រាស់ **Classes** (គំរូថ្នាក់) និង **Objects** (វត្ថុជាក់ស្តែង) ដើម្បីបង្កើតកូដដែលអាចយកទៅប្រើប្រាស់ឡើងវិញបាន និងងាយស្រួលគ្រប់គ្រង។

### គោលគំនិតស្នូលទាំង៥
១. **Class (ថ្នាក់):** គំរូប្លង់មេសម្រាប់បង្កើតវត្ថុ (Objects)។
២. **Object (វត្ថុ):** វត្ថុជាក់ស្តែងដែលកើតចេញពី Class និងមានផ្ទុកទិន្នន័យពិត។
៣. **Inheritance (ការស្នងមរតក):** ការបង្កើត Class ថ្មីពី Class ចាស់ដើម្បីប្រើប្រាស់កូដឡើងវិញ។
៤. **Polymorphism (ពហុភាព):** អនុញ្ញាតឱ្យ Class ផ្សេងគ្នាឆ្លើយតបនឹងមុខងារដូចគ្នាក្នុងវិធីផ្សេងគ្នា។
៥. **Encapsulation (ការវេចខ្ចប់):** ការលាក់បាំងព័ត៌មានលម្អិតខាងក្នុង និងការពារទិន្នន័យ។

### ឧទាហរណ៍ស្នូល៖ ប្រព័ន្ធអេកូឡូស៊ីរថយន្ត (Car)
ដើម្បីយល់ច្បាស់ពី OOP យើងនឹងបង្កើតប្រព័ន្ធអេកូឡូស៊ី **រថយន្ត (Car)** មួយដែលនឹងវិវឌ្ឍជាបន្តបន្ទាប់ពីមេរៀនមួយទៅមេរៀនមួយនៅក្នុងផ្នែកនេះ។`
    },
    starterCode: `# Introduction to OOP layout
# Let's see how we can design an abstract representation
print("OOP Paradigm Loaded.")
print("In the next lesson, we will declare our very first Car class!")`
  },
  {
    id: "py-classes-objects",
    title: { en: "Python Classes/Objects", km: "Classes និង Objects" },
    content: {
      en: `### Creating a Class & Object
A class is like an object constructor, or a "blueprint" for creating objects. We define a class using the \`class\` keyword.

\`\`\`python
class Car:
    pass # Empty placeholder
\`\`\`

To instantiate (create) an object from a class, we call the class name followed by parentheses:
\`\`\`python
my_car = Car()
\`\`\`

Let's declare our first class and print its memory address to verify its existence!`,
      km: `### ការបង្កើត Class និង Object
Class គឺដូចជាប្លង់មេ ឬជាអ្នកសាងសង់សម្រាប់បង្កើតវត្ថុ (Objects)។ យើងបង្កើត Class ដោយប្រើពាក្យគន្លឹះ \`class\`។

\`\`\`python
class Car:
    pass # ប្លុកកូដទទេសម្រាប់ជាតំណាងសិន
\`\`\`

ដើម្បីបង្កើត Object មួយចេញពី Class យើងហៅឈ្មោះ Class នោះ រួចប្រើសញ្ញាវង់ក្រចក៖
\`\`\`python
my_car = Car()
\`\`\`

តោះសាកល្បងបង្កើត Class ដំបូងរបស់អ្នក និងបោះពុម្ពអាសយដ្ឋានមេម៉ូរីរបស់វាដើម្បីបញ្ជាក់ការបង្កើត!`
    },
    starterCode: `class Car:
    pass  # 'pass' is a placeholder meaning no code is executed yet

# Create two independent instances of Car
car_one = Car()
car_two = Car()

print("Address of car_one:", car_one)
print("Address of car_two:", car_two)`
  },
  {
    id: "py-init-method",
    title: { en: "Python __init__ Method", km: "វិធីសាស្ត្រ __init__" },
    content: {
      en: `### The Constructor (__init__)
All classes have a built-in method called \`__init__()\`, which is executed automatically when the class is being initiated.

We use the \`__init__()\` method to assign values to object properties, or other operations that are necessary to do when the object is being created.

\`\`\`python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
\`\`\`

This is the equivalent of a constructor in Java, C#, or JavaScript!`,
      km: `### វិធីសាស្ត្រស្ថាបនា (Constructor)
រាល់ Class ទាំងអស់នៅក្នុង Python គឺមានវិធីសាស្ត្រពិសេសស្រាប់មួយហៅថា \`__init__()\` ដែលត្រូវបានដំណើរការដោយស្វ័យប្រវត្តនៅពេលដែល Object ត្រូវបានបង្កើតឡើង។

យើងប្រើ \`__init__()\` ដើម្បីផ្តល់តម្លៃដំបូងទៅឱ្យលក្ខណៈ (Properties) របស់ Object។

\`\`\`python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
\`\`\`

វាមានតួនាទីដូចជា Constructor នៅក្នុងភាសា Java, C# ឬ JavaScript ដែរ!`
    },
    starterCode: `class Car:
    def __init__(self, brand, model, year):
        # Setting values to object properties
        self.brand = brand
        self.model = model
        self.year = year

# Initialize our Car object with initial values
my_car = Car("Toyota", "Prius", 2021)

print("Car brand:", my_car.brand)
print("Car model:", my_car.model)
print("Car year:", my_car.year)`
  },
  {
    id: "py-self-parameter",
    title: { en: "Python self Parameter", km: "ប៉ារ៉ាម៉ែត្រ self" },
    content: {
      en: `### Understanding 'self'
The \`self\` parameter is a reference to the current instance of the class, and is used to access variables that belong to the class.

It does **not** have to be named \`self\` (you can call it whatever you like), but it **must be the first parameter** of any method in the class.

Let's evolve our \`Car\` class by adding an instance method that utilizes \`self\` to output its own specifications.`,
      km: `### ការយល់ដឹងអំពី 'self'
ប៉ារ៉ាម៉ែត្រ \`self\` គឺជាការចង្អុលបង្ហាញអំពីគំរូនៃវត្ថុបច្ចុប្បន្ន (Current instance) របស់ Class ហើយត្រូវបានប្រើដើម្បីចូលទៅប្រើប្រាស់អថេរដែលជារបស់ Class នោះ។

វាមិនតម្រូវឱ្យដាក់ឈ្មោះថា \`self\` ជានិច្ចនោះទេ (អ្នកអាចដាក់ឈ្មោះអ្វីក៏បាន) ប៉ុន្តែវា **ត្រូវតែជាប៉ារ៉ាម៉ែត្រដំបូងបង្អស់** នៃរាល់វិធីសាស្ត្រ (Methods) នៅក្នុង Class។

តោះបន្ថែមវិធីសាស្ត្រមួយដែលប្រើ \`self\` ដើម្បីបោះពុម្ពព័ត៌មានរថយន្តចេញមកក្រៅ!`
    },
    starterCode: `class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    # A method displaying our attributes
    def display_info(self):
        print(f"Vehicle specs: {self.year} {self.brand} {self.model}")

# Instantiate and call the method
my_car = Car("Ford", "Ranger", 2023)
my_car.display_info()`
  },
  {
    id: "py-class-properties",
    title: { en: "Python Class Properties", km: "លក្ខណៈ Class Properties" },
    content: {
      en: `### Getters, Setters & Property Decorators
In Python, you can manage class variables cleanly using properties. The \`@property\` decorator allows you to make a class method behave like an attribute (getter).

You can also define a \`.setter\` decorator to validate data before updating properties.

\`\`\`python
@property
def price(self):
    return self._price

@price.setter
def price(self, val):
    if val < 0:
        raise ValueError("Price cannot be negative!")
    self._price = val
\`\`\``,
      km: `### វិធីសាស្ត្រប្រើប្រាស់លក្ខណៈ (Getters & Setters)
នៅក្នុង Python អ្នកអាចគ្រប់គ្រងអថេររបស់ Class ឱ្យមានរបៀបរៀបរយដោយប្រើ Decorator \`@property\` ដែលជួយឱ្យវិធីសាស្ត្រដើរតួជា attribute (Getter) សម្រាប់អាន។

អ្នកក៏អាចបង្កើត \`.setter\` ដើម្បីផ្ទៀងផ្ទាត់ទិន្នន័យមុននឹងកែប្រែតម្លៃបានផងដែរ។

\`\`\`python
@property
def price(self):
    return self._price

@price.setter
def price(self, val):
    if val < 0:
        raise ValueError("តម្លៃមិនអាចអវិជ្ជមានបានទេ!")
    self._price = val
\`\`\``
    },
    starterCode: `class Car:
    def __init__(self, brand, model, initial_price):
        self.brand = brand
        self.model = model
        self._price = initial_price # Single underscore represents protected variable

    @property
    def price(self):
        return self._price

    @price.setter
    def price(self, new_price):
        if new_price < 0:
            print("ERROR: Price cannot be negative!")
        else:
            self._price = new_price

my_car = Car("Honda", "Civic", 25000)
# Modify using setter
my_car.price = -500 # This should trigger error print
my_car.price = 24000 # This updates successfully
print("Final Validated Price:", my_car.price)`
  },
  {
    id: "py-class-methods",
    title: { en: "Python Class Methods", km: "វិធីសាស្ត្រ Class Methods" },
    content: {
      en: `### Three Types of Methods
In Python OOP, a class can have three categories of methods:
1. **Instance Methods:** Access and modify instance states using \`self\`.
2. **Class Methods (@classmethod):** Bound to the class rather than the instance. It receives the class itself as \`cls\` and can act as alternative constructors.
3. **Static Methods (@staticmethod):** Normal functions inside class scope that have no access to \`self\` or \`cls\`. Use them as helper functions.

Let's implement all three in our evolving \`Car\` class!`,
      km: `### ប្រភេទវិធីសាស្ត្រទាំង៣
នៅក្នុង OOP របស់ Python, Class មួយអាចមានវិធីសាស្ត្រ៣ប្រភេទផ្សេងគ្នា៖
១. **Instance Methods:** ប្រើដើម្បីចូលទៅប្រើប្រាស់ និងកែប្រែស្ថានភាព Object នីមួយៗដោយប្រើ \`self\`។
២. **Class Methods (@classmethod):** ភ្ជាប់ទៅនឹង Class ទាំងមូលជាជាង Object នីមួយៗ។ វាទទួល Class ខ្លួនឯងជាប៉ារ៉ាម៉ែត្រ \`cls\` និងអាចប្រើជា Constructor ជំនួសបាន។
៣. **Static Methods (@staticmethod):** មុខងារធម្មតានៅក្នុង Class ដែលមិនប៉ះពាល់ \`self\` ឬ \`cls\` ឡើយ។ ប្រើវាជាជំនួយការទូទៅ។`
    },
    starterCode: `class Car:
    category = "Transport" # Class variable

    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    # 1. Instance method
    def start_engine(self):
        return f"The {self.brand} engine is starting..."

    # 2. Class method
    @classmethod
    def get_category(cls):
        return f"Category of all vehicles is {cls.category}"

    # 3. Static method
    @staticmethod
    def is_speeding(speed):
        return speed > 120 # Boolean check

my_car = Car("Ford", "Mustang")
print(my_car.start_engine())
print(Car.get_category())
print("Is 130km/h speeding?", Car.is_speeding(130))`
  },
  {
    id: "py-inheritance",
    title: { en: "Python Inheritance", km: "ការស្នងមរតក Inheritance" },
    content: {
      en: `### Inheriting Class Properties
Inheritance allows us to define a class that inherits all the methods and properties from another class.

* **Parent Class** (Base class) is the class being inherited from (e.g. \`Car\`).
* **Child Class** (Derived class) is the class that inherits from another class.

### The super() function
Use the \`super()\` function to call the parent's constructor and methods automatically.

\`\`\`python
class ElectricCar(Car):
    def __init__(self, brand, model, battery):
        super().__init__(brand, model)
        self.battery = battery
\`\`\``,
      km: `### ការស្នងមរតកពី Class ផ្សេង (Inheritance)
ការស្នងមរតកអនុញ្ញាតឱ្យយើងបង្កើត Class ថ្មីមួយដែលស្នងយកលក្ខណៈ និងវិធីសាស្ត្រទាំងអស់ពី Class ចាស់។

* **Parent Class (ថ្នាក់មេ):** Class ដែលត្រូវបានគេស្នងយកទៅប្រើ (ឧទាហរណ៍៖ \`Car\`)។
* **Child Class (ថ្នាក់កូន):** Class ថ្មីដែលស្នងមរតកពីគេ។

### អនុគមន៍ super()
ប្រើប្រាស់អនុគមន៍ \`super()\` ដើម្បីហៅវិធីសាស្ត្រស្ថាបនា (Constructor) របស់ថ្នាក់មេដោយស្វ័យប្រវត្ត។

\`\`\`python
class ElectricCar(Car):
    def __init__(self, brand, model, battery):
        super().__init__(brand, model)
        self.battery = battery
\`\`\``
    },
    starterCode: `class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def display_info(self):
        return f"Car: {self.brand} {self.model}"

# ElectricCar inherits from Car
class ElectricCar(Car):
    def __init__(self, brand, model, battery_capacity):
        super().__init__(brand, model) # Initialize parent attributes
        self.battery_capacity = battery_capacity

    def ev_details(self):
        return f"{self.display_info()} with {self.battery_capacity} kWh battery."

tesla = ElectricCar("Tesla", "Model Y", 75)
print(tesla.ev_details())`
  },
  {
    id: "py-polymorphism",
    title: { en: "Python Polymorphism", km: "ពហុភាព Polymorphism" },
    content: {
      en: `### Many Forms (Polymorphism)
Polymorphism is an important OOP concept. It refers to the ability of different classes to have methods with the same name but different implementations.

In our ecosystem, both normal cars and electric cars have a \`start_engine()\` action, but they execute differently (combustion sounds vs electric hums).

Let's observe method overriding in action!`,
      km: `### គោលការណ៍ពហុភាព (Polymorphism)
Polymorphism គឺជាគោលគំនិតសំខាន់ក្នុង OOP។ វាសំដៅលើសមត្ថភាពដែល Class ផ្សេងៗគ្នាអាចមានវិធីសាស្ត្រឈ្មោះដូចគ្នា ប៉ុន្តែដំណើរការខុសៗគ្នា។

នៅក្នុងអេកូឡូស៊ីរថយន្តរបស់យើង ទាំងរថយន្តសាំង និងរថយន្តអគ្គិសនី សុទ្ធតែមានសកម្មភាព \`start_engine()\` ដូចគ្នា ប៉ុន្តែពួកវាដំណើរការខុសគ្នា (សំឡេងម៉ាស៊ីនសាំង ប៉ះនឹង សំឡេងម៉ូទ័រស្ងាត់)។

តោះសាកល្បងសរសេរកូដ Overriding!`
    },
    starterCode: `class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def start_engine(self):
        return "Vroom! Combustion engine started."

class ElectricCar(Car):
    def start_engine(self):
        return "Silent hum... Electric motors powered on."

# List containing diverse vehicle instances
garage = [
    Car("Toyota", "Camry"),
    ElectricCar("Tesla", "Model 3")
]

for vehicle in garage:
    print(vehicle.brand, "->", vehicle.start_engine())`
  },
  {
    id: "py-encapsulation",
    title: { en: "Python Encapsulation", km: "ការវេចខ្ចប់ការពារទិន្នន័យ" },
    content: {
      en: `### Restricting Direct Attribute Access
Encapsulation is used to restrict access to methods and variables. This prevents data from direct modification, which is called **data hiding**.

### Private attributes (__)
In Python, we denote private attributes by placing a double underscore \`__\` prefix before the attribute name.

\`\`\`python
self.__odometer = 0 # Private variable
\`\`\`

If you try to read \`my_car.__odometer\` from outside the class, Python will throw an \`AttributeError\`. You must provide public getter/setter methods to access or alter it safely!`,
      km: `### ការលាក់បាំង និងការពារទិន្នន័យ (Encapsulation)
ការវេចខ្ចប់ការពារទិន្នន័យ ត្រូវបានប្រើដើម្បីរឹតត្បិតកុំឱ្យកូដខាងក្រៅចូលទៅកែប្រែអថេរ និងវិធីសាស្ត្រខាងក្នុងរបស់ Object ដោយផ្ទាល់ ដើម្បីការពារភាពត្រឹមត្រូវនៃទិន្នន័យ។

### លក្ខណៈឯកជន Private (__)
នៅក្នុង Python យើងកំណត់ Private attribute ដោយបន្ថែមសញ្ញាខណ្ឌសង្កត់ពីរដង \`__\` នៅពីមុខឈ្មោះអថេរ។

\`\`\`python
self.__odometer = 0 # អថេរឯកជន Private
\`\`\`

ប្រសិនបើអ្នកព្យាយាមអាន \`my_car.__odometer\` ពីខាងក្រៅ Class វានឹងលោតកំហុស \`AttributeError\`។ អ្នកត្រូវតែផ្តល់វិធីសាស្ត្រសាធារណៈដើម្បីអាន ឬកែប្រែវាដោយសុវត្ថិភាព!`
    },
    starterCode: `class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
        self.__odometer = 1000 # Private variable

    # Public method to read odometer safely (getter)
    def get_odometer(self):
        return self.__odometer

    # Public method to increment odometer (setter with validation)
    def drive(self, miles):
        if miles > 0:
            self.__odometer += miles
        else:
            print("You cannot drive negative miles!")

my_car = Car("Ford", "Raptor")
my_car.drive(150)
print("Odometer read via helper:", my_car.get_odometer())

# This will fail and raise AttributeError if uncommented:
# print(my_car.__odometer)`
  },
  {
    id: "py-inner-classes",
    title: { en: "Python Inner Classes", km: "ថ្នាក់ក្នុងថ្នាក់ Inner Classes" },
    content: {
      en: `### Nested Classes
An Inner Class (or Nested Class) is a class declared inside another class. This is useful when one class is entirely dependent on another, making the code more logical and modular.

\`\`\`python
class Car:
    class Engine:
        def __init__(self):
            self.horsepower = 300
\`\`\`

Let's complete our Car OOP ecosystem by embedding a highly specialized \`Engine\` class inside our \`Car\`!`,
      km: `### ថ្នាក់សំបុក (Inner Classes)
Inner Class (ឬ Nested Class) គឺជា Class ដែលត្រូវបានបង្កើតឡើងនៅក្នុង Class មួយទៀត។ វាមានប្រយោជន៍ខ្លាំងណាស់នៅពេលដែល Class មួយពឹងផ្អែកទាំងស្រុងលើ Class មួយទៀត ដែលធ្វើឱ្យកូដកាន់តែមានឡូហ្សិក និងសណ្តាប់ធ្នាប់។

\`\`\`python
class Car:
    class Engine:
        def __init__(self):
            self.horsepower = 300
\`\`\`

តោះសាកល្បងបញ្ចប់ប្រព័ន្ធអេកូឡូស៊ីរថយន្តរបស់យើងដោយបង្កប់ Class \`Engine\` ពិសេសមួយនៅក្នុង \`Car\`!`
    },
    starterCode: `class Car:
    def __init__(self, brand, model, hp):
        self.brand = brand
        self.model = model
        # Create instance of inner class Engine
        self.engine = self.Engine(hp)

    def display(self):
        return f"{self.brand} {self.model} with {self.engine.get_hp()} HP engine."

    # Defining the Inner Class Engine
    class Engine:
        def __init__(self, horsepower):
            self.horsepower = horsepower

        def get_hp(self):
            return f"{self.horsepower} horsepower"

my_car = Car("Subaru", "WRX", 310)
print(my_car.display())`
  },

  // --- FILE HANDLING SUB-SECTION ---
  {
    id: "py-file-handling",
    title: { en: "Python File Handling", km: "ការគ្រប់គ្រងឯកសារ" },
    content: {
      en: `### Working with Files
File handling is an important part of any application. Python has several functions for creating, reading, updating, and deleting files.

### The open() function
The key function for working with files in Python is the \`open()\` function. It takes two parameters: **Filename** and **Mode**.

### Four Different Modes
1. \`"r"\` — **Read** (default). Opens a file for reading, error if file doesn't exist.
2. \`"w"\` — **Write**. Opens a file for writing, creates the file if it does not exist, overwriting current content.
3. \`"a"\` — **Append**. Opens a file for appending, creates the file if it does not exist.
4. \`"x"\` — **Create**. Creates the specified file, returns an error if the file exists.`,
      km: `### ការធ្វើការជាមួយឯកសារ (File Handling)
ការគ្រប់គ្រងឯកសារគឺជាផ្នែកមួយដ៏សំខាន់នៃកម្មវិធីណាមួយ។ Python មានអនុគមន៍ស្រាប់ជាច្រើនសម្រាប់បង្កើត អាន ធ្វើបច្ចុប្បន្នភាព និងលុបឯកសារ។

### អនុគមន៍ open()
អនុគមន៍គន្លឹះសម្រាប់ធ្វើការជាមួយឯកសារគឺ \`open()\`។ វាទទួលប៉ារ៉ាម៉ែត្រពីរ៖ **Filename (ឈ្មោះឯកសារ)** និង **Mode (ទម្រង់ការងារ)**។

### ទម្រង់ការងារធំៗទាំង៤
១. \`"r"\` — **Read** (អាន, លំនាំដើម)៖ បើកឯកសារដើម្បីអាន បើគ្មានឯកសារនឹងលោតកំហុស។
២. \`"w"\` — **Write** (សរសេរ)៖ បើកឯកសារដើម្បីសរសេរ បើគ្មានវាបង្កើតឱ្យ បើមានវាសរសេរជាន់លើ។
៣. \`"a"\` — **Append** (សរសេរបន្ថែម)៖ បើកឯកសារដើម្បីសរសេរបន្ថែមពីក្រោម បើគ្មានវាបង្កើតឱ្យ។
៤. \`"x"\` — **Create** (បង្កើតថ្មី)៖ បង្កើតឯកសារថ្មីសន្លាង បើមានរួចហើយនឹងលោតកំហុស។`
    },
    starterCode: `# File handling introductory demo
print("File modes ready to explore.")
print("In the next lesson, we will write code to open and read physical files!")`
  },
  {
    id: "py-read-files",
    title: { en: "Python Read Files", km: "ការអានឯកសារ Read Files" },
    content: {
      en: `### Opening and Reading Files
To read the content of a file, we open it with \`"r"\` mode and invoke the \`read()\` function.

\`\`\`python
f = open("demofile.txt", "r")
print(f.read())
f.close() # Always close your files!
\`\`\`

### Reading Parts
* \`read(5)\` reads only first 5 characters.
* \`readline()\` reads one entire line.
* \`readlines()\` returns list of all lines.

> **Tip:** Always use \`close()\` when you are done with a file to free up system resources!`,
      km: `### ការបើក និងការអានឯកសារ
ដើម្បីអានខ្លឹមសាររបស់ឯកសារ យើងបើកវាដោយប្រើ mode \`"r"\` រួចហៅអនុគមន៍ \`read()\`។

\`\`\`python
f = open("demofile.txt", "r")
print(f.read())
f.close() # ត្រូវតែបិទឯកសារវិញជានិច្ច!
\`\`\`

### ការអានជាចំណែក
* \`read(5)\` អានតែតួអក្សរ ៥ ដំបូង។
* \`readline()\` អានតែមួយបន្ទាត់ប៉ុណ្ណោះ។
* \`readlines()\` ផ្ដល់ជា list នៃគ្រប់បន្ទាត់ទាំងអស់។

> **គន្លឹះ៖** ត្រូវហៅ \`close()\` ជានិច្ចនៅពេលបញ្ចប់ការងារជាមួយឯកសារ ដើម្បីរំដោះធនធានប្រព័ន្ធមេម៉ូរី!`
    },
    starterCode: `# We will dynamically write a file first, then practice reading it!
with open("sabaicode_news.txt", "w") as temp:
    temp.write("Line 1: Learning Python\\nLine 2: Sabaicode Sandbox Active\\n")

# Practice: Read the file using standard open
f = open("sabaicode_news.txt", "r")
content = f.read()
print("Entire file content:\\n" + content)
f.close()`
  },
  {
    id: "py-write-files",
    title: { en: "Python Write/Create Files", km: "ការសរសេរ និងបង្កើតឯកសារ" },
    content: {
      en: `### Writing to Existing Files
To write to an existing file, you must add a parameter to the \`open()\` function:
* \`"a"\` — **Append** - will append to the end of the file.
* \`"w"\` — **Write** - will overwrite any existing content.

### Safe Context Manager (with)
It is highly recommended to use the \`with\` statement in Python. It automatically closes the file for you even if exceptions occur!

\`\`\`python
with open("demofile.txt", "w") as f:
    f.write("Hello World!")
# File automatically closed here!
\`\`\``,
      km: `### ការសរសេរបញ្ចូលឯកសារ
ដើម្បីសរសេរទិន្នន័យចូលទៅក្នុងឯកសារដែលមានស្រាប់ អ្នកត្រូវបញ្ជាក់ទម្រង់ក្នុង \`open()\`៖
* \`"a"\` — **Append (បន្ថែមពីក្រោយ):** នឹងបន្ថែមទិន្នន័យថ្មីនៅខាងចុងឯកសារ។
* \`"w"\` — **Write (សរសេរជាន់លើ):** នឹងលុបរបស់ចាស់ចោលទាំងអស់ រួចសរសេរជាន់លើ។

### ប្រើប្រាស់ Context Manager (with) ដែលមានសុវត្ថិភាព
វាជាការប្រសើរខ្លាំងណាស់ក្នុងការប្រើសេចក្តីថ្លែងការណ៍ \`with\`។ វានឹងបិទឯកសារដោយស្វ័យប្រវត្តឱ្យអ្នក ទោះបីជាមានកំហុសកើតឡើងកណ្តាលទីក៏ដោយ!

\`\`\`python
with open("demofile.txt", "w") as f:
    f.write("Hello World!")
# ឯកសារត្រូវបានបិទដោយស្វ័យប្រវត្តនៅត្រង់នេះ!
\`\`\``
    },
    starterCode: `# Practice write operations
file_name = "sandbox_data.txt"

# Append text
with open(file_name, "a") as f:
    f.write("Added new log line.\\n")

# Let's read and see the result
with open(file_name, "r") as f:
    print("Current File Content:\\n" + f.read())`
  },
  {
    id: "py-delete-files",
    title: { en: "Python Delete Files", km: "ការលុបឯកសារ Delete Files" },
    content: {
      en: `### Deleting Files (os module)
To delete a file, you must import the \`os\` module and execute its \`os.remove()\` function.

### Check if File Exists
To avoid getting errors, you might want to check if the file exists before you try to delete it:

\`\`\`python
import os
if os.path.exists("demofile.txt"):
    os.remove("demofile.txt")
else:
    print("The file does not exist")
\`\`\``,
      km: `### ការលុបឯកសារ (os module)
ដើម្បីលុបឯកសារ អ្នកត្រូវតែនាំចូល (import) ម៉ូឌុល \`os\` រួចហៅដំណើរការអនុគមន៍ \`os.remove()\`។

### ពិនិត្យមើលថាតើឯកសារមានស្រាប់ឬទេ
ដើម្បីជៀសវាងការលោតកំហុស គប្បីពិនិត្យមើលថាតើឯកសារនោះពិតជាមានមុននឹងលុបវា៖

\`\`\`python
import os
if os.path.exists("demofile.txt"):
    os.remove("demofile.txt")
else:
    print("The file does not exist")
\`\`\``
    },
    starterCode: `import os

filename = "disposable_record.txt"

# Create a temporary file to delete
with open(filename, "w") as f:
    f.write("Temporary content")

print("Does file exist?", os.path.exists(filename))

# Safely delete it
if os.path.exists(filename):
    os.remove(filename)
    print("Successfully deleted the file:", filename)
else:
    print("File not found.")`
  }
];
