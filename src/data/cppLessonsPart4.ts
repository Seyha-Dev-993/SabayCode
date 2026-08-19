import { Lesson } from '../types';

export const cppLessonsPart4: Lesson[] = [
  {
    id: "cpp-oop",
    title: {
      en: "C++ OOP",
      km: "គោលការណ៍ OOP"
    },
    content: {
      en: `### Procedural vs Object-Oriented Programming
Object-Oriented Programming (OOP) is a paradigm that models software design around real-world data and entities (objects) rather than functions and logic.

### Four Core Pillars of OOP:
1. **Encapsulation:** Wrapping variables and methods into a single unit (class), hiding internal details to protect data.
2. **Inheritance:** Creating new classes (subclasses) from existing ones to share fields and reduce code duplication.
3. **Polymorphism:** Allowing different classes to respond to the same method call in their own custom way.
4. **Abstraction:** Hiding complex back-end operations and displaying only essential details to the user.

> **Tip:** Throughout the OOP section, we will construct and evolve a single cohesive example of a **BankAccount** to show how these concepts build upon each other in professional applications.`,
      km: `### វិធីសាស្ត្រ Procedural ប្រៀបធៀបជាមួយ OOP
ការសរសេរកូដតម្រង់វត្ថុ (Object-Oriented Programming - OOP) គឺជាទម្រង់រចនាសម្ព័ន្ធកម្មវិធីដែលផ្តោតលើការបង្កើត "វត្ថុ" (Objects) តំណាងឱ្យធាតុពិតៗលើលោក ជំនួសឱ្យការផ្តោតលើលំហូរអនុគមន៍ និងលក្ខខណ្ឌសាមញ្ញ។

### សសរទ្រូងទាំងបួនរបស់ OOP៖
១. **Encapsulation (ការវេចខ្ចប់):** ការចងអថេរ និងវិធីសាស្ត្ររួមគ្នាក្នុងថ្នាក់ (Class) និងលាក់បាំងទិន្នន័យខាងក្នុងដើម្បីការពារសុវត្ថិភាព។
២. **Inheritance (ការបន្តមរតក):** ការបង្កើតថ្នាក់ថ្មី (Subclass) ចេញពីថ្នាក់ដែលមានស្រាប់ ដើម្បីចែករំលែកកូដ និងកាត់បន្ថយការសរសេរជាន់គ្នា។
៣. **Polymorphism (ពហុភាព):** អនុញ្ញាតឱ្យថ្នាក់ផ្សេងគ្នាអនុវត្តវិធីសាស្ត្រដែលមានឈ្មោះដូចគ្នាតាមរបៀបរៀងៗខ្លួន។
៤. **Abstraction (អរូបភាព):** ការលាក់បាំងដំណើរការខាងក្រោយដែលស្មុគស្មាញ និងបង្ហាញតែចំណុចសំខាន់ៗដែលអ្នកប្រើត្រូវការ។

> **គន្លឹះ:** នៅក្នុងផ្នែកសិក្សា OOP នេះ យើងនឹងរួមគ្នាបង្កើត និងអភិវឌ្ឍគំរូនៃថ្នាក់ **BankAccount (គណនីធនាគារ)** តែមួយគត់ ដើម្បីស្វែងយល់ពីរបៀបដែលគំនិតទាំងនេះបន្ថែមសមត្ថភាពឱ្យគ្នាទៅវិញទៅមកក្នុងកូដជាក់ស្តែង។`
    },
    starterCode: `#include <iostream>
using namespace std;

// Quick conceptual showcase of a BankAccount struct/object blueprint
struct ConceptAccount {
    string owner;
    double balance;
};

int main() {
    ConceptAccount acc1 = {"Sophal", 2500.50};
    cout << "OOP concepts map real-world entities like a Bank Account!" << endl;
    cout << "Owner: " << acc1.owner << " | Balance: $" << acc1.balance << endl;
    return 0;
}`
  },
  {
    id: "cpp-classes-objects",
    title: {
      en: "C++ Classes/Objects",
      km: "ថ្នាក់ និងវត្ថុ C++"
    },
    content: {
      en: `### Classes: Blueprints for Objects
A **Class** is a user-defined template or blueprint, and an **Object** is an active, memory-allocated instance of that class.

### Declaring a Class:
We declare member variables inside curly braces. Use the \`public\` keyword so that the members are accessible outside the class definition block.

\`\`\`cpp
class BankAccount {
public:
    string owner;
    double balance;
};
\`\`\`

### Creating Objects:
\`\`\`cpp
BankAccount acc1;
acc1.owner = "Dara";
acc1.balance = 500.0;
\`\`\`

> **Note:** Do not forget to place a semicolon (\`;\`) immediately after the closing brace of a class declaration, as omitting this is a very common compilation syntax mistake!`,
      km: `### ថ្នាក់ (Classes) និងវត្ថុ (Objects)
**ថ្នាក់ (Class)** គឺជាគំរូ ឬប្លង់មេដែលបង្កើតឡើងដោយអ្នកសរសេរកូដ ហើយ **វត្ថុ (Object)** គឺជាគំរូជាក់ស្តែងដែលទាញចេញពីប្លង់មេនោះ និងមានការបម្រុងទុកមេម៉ូរីពិតប្រាកដ។

### ការបង្កើត Class៖
យើងកំណត់អថេរសមាជិកនៅក្នុងសញ្ញាគ្នាប។ ប្រើប្រាស់ពាក្យគន្លឹះ \`public\` ដើម្បីឱ្យសមាជិកទាំងនោះអាចចូលប្រើប្រាស់បានពីខាងក្រៅថ្នាក់។

\`\`\`cpp
class BankAccount {
public:
    string owner;
    double balance;
};
\`\`\`

### ការបង្កើតវត្ថុ (Objects)៖
\`\`\`cpp
BankAccount acc1;
acc1.owner = "Dara";
acc1.balance = 500.0;
\`\`\`

> **ចំណាំ:** កុំភ្លេចដាក់សញ្ញាក្បៀសចំនុច (\`;\`) នៅពីក្រោយគ្នាបបិទរបស់ Class ឱ្យសោះ ព្រោះវាជាកំហុសរចនាសម្ព័ន្ធកូដដ៏ពេញនិយមបំផុតមួយរបស់សិស្សថ្មីថ្មោង!`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

// Defining class blueprint
class BankAccount {
public:
    string ownerName;
    double balance;
};

int main() {
    // Instantiating first object
    BankAccount account1;
    account1.ownerName = "Dara Sok";
    account1.balance = 1200.50;
    
    // Instantiating second object
    BankAccount account2;
    account2.ownerName = "Sophy Chea";
    account2.balance = 5000.00;
    
    cout << "=== Active Bank Accounts Summary ===\\n";
    cout << "Account 1 | Owner: " << account1.ownerName << " | Balance: $" << account1.balance << "\\n";
    cout << "Account 2 | Owner: " << account2.ownerName << " | Balance: $" << account2.balance << "\\n";
    return 0;
}`
  },
  {
    id: "cpp-class-methods",
    title: {
      en: "C++ Class Methods",
      km: "វិធីសាស្ត្រថ្នាក់ C++"
    },
    content: {
      en: `### Declaring Functions Inside Classes
Methods are functions that belong inside a class. They represent actions the object can perform.

### Two Ways to Define Methods:
1. **Inside class definition:** Defined directly within the class body.
2. **Outside class definition:** Declared inside the class, but defined outside using the **scope resolution operator (\`::\`)** prefixed with the class name.

\`\`\`cpp
class BankAccount {
public:
    void deposit(double amount); // Declared
};

// Defined outside class
void BankAccount::deposit(double amount) {
    balance += amount;
}
\`\`\`

> **Tip:** Defining large methods outside the class keeps the class declaration extremely clean, serving as a clean API list of your object's capabilities.`,
      km: `### វិធីសាស្ត្រថ្នាក់ (Class Methods)
Methods គឺជាអនុគមន៍ដែលស្ថិតនៅខាងក្នុង Class។ ពួកវាតំណាងឱ្យសកម្មភាពដែលវត្ថុ (Object) អាចធ្វើបាន។

### របៀបកំណត់វិធីសាស្ត្រទាំងពីរ៖
១. **នៅក្នុង Class (Inside class):** សរសេរកូដអនុគមន៍ក្នុងប្លុក Class ផ្ទាល់។
២. **នៅខាងក្រៅ Class (Outside class):** គ្រាន់តែប្រកាសឈ្មោះក្នុង Class រួចកំណត់កូដនៅខាងក្រៅដោយប្រើ **ប្រមាណសញ្ញាដោះស្រាយដែន Scope (\`::\`)** ភ្ជាប់ជាមួយឈ្មោះ Class។

\`\`\`cpp
class BankAccount {
public:
    void deposit(double amount); // ប្រកាស
};

// កំណត់កូដនៅខាងក្រៅ Class
void BankAccount::deposit(double amount) {
    balance += amount;
}
\`\`\`

> **គន្លឹះ:** ការកំណត់វិធីសាស្ត្រធំៗនៅខាងក្រៅ Class ជួយឱ្យរចនាសម្ព័ន្ធ Class របស់អ្នកមានភាពស្អាតស្អំ ងាយស្រួលមើល និងដើរតួជាបញ្ជីមុខងារ (API list) យ៉ាងច្បាស់លាស់។`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

class BankAccount {
public:
    string ownerName;
    double balance;
    
    // Method 1: Defined inside class
    void displayBalance() {
        cout << "Account Owner: " << ownerName << " | Balance: $" << balance << "\\n";
    }
    
    // Method 2: Declared here, to be defined outside
    void deposit(double amount);
};

// Definition outside the class using Scope Resolution Operator ::
void BankAccount::deposit(double amount) {
    balance += amount;
    cout << "Successfully deposited $" << amount << " into " << ownerName << "'s account.\\n";
}

int main() {
    BankAccount myAccount;
    myAccount.ownerName = "Arun";
    myAccount.balance = 1000.0;
    
    myAccount.displayBalance();
    
    // Action: Deposit
    myAccount.deposit(500.50);
    
    myAccount.displayBalance();
    return 0;
}`
  },
  {
    id: "cpp-constructors",
    title: {
      en: "C++ Constructors",
      km: "អនុគមន៍ស្ថាបនា Constructors"
    },
    content: {
      en: `### Initializing Objects Automatically
A **Constructor** is a special member method that is automatically called when an object of a class is created.

### Key Rules of Constructors:
- It shares the **exact same name** as the class.
- It has **no return type** (not even \`void\`).
- Can be overloaded to support default parameters.

### Constructor Member Initializer List:
A highly efficient and preferred C++ syntax to initialize class members before the constructor body executes:
\`\`\`cpp
class BankAccount {
public:
    string owner;
    double balance;
    
    // Constructor using Member Initializer List
    BankAccount(string o, double b) : owner(o), balance(b) {}
};
\`\`\`

> **Tip:** Always define a default constructor (with no arguments) if you plan on creating uninitialized arrays of objects later on!`,
      km: `### ការផ្តល់តម្លៃចាប់ផ្តើមវត្ថុដោយស្វ័យប្រវត្ត
**Constructor** គឺជាវិធីសាស្ត្រពិសេស (Special method) មួយដែលត្រូវបានហៅដំណើរការដោយស្វ័យប្រវត្តិ នៅពេលដែលវត្ថុ (Object) របស់ Class ត្រូវបានបង្កើតឡើង។

### ច្បាប់សំខាន់ៗរបស់ Constructor៖
- វាមាន **ឈ្មោះដូចគ្នាបេះបិទ** ទៅនឹងឈ្មោះ Class។
- វា **គ្មានប្រភេទលទ្ធផលត្រឡប់** ឡើយ (ទោះជា \`void\` ក៏គ្មានដែរ)។
- អាច Overloaded ដើម្បីគាំទ្ររបៀបបង្កើតវត្ថុផ្សេងៗគ្នា។

### បញ្ជីផ្តល់តម្លៃសមាជិក (Member Initializer List)៖
ជារូបមន្ត C++ ដែលមានប្រសិទ្ធភាពខ្ពស់ និងពេញនិយមបំផុតសម្រាប់ការផ្តល់តម្លៃសមាជិក មុនពេលប្លុក Constructor ចាប់ផ្តើមរត់៖
\`\`\`cpp
class BankAccount {
public:
    string owner;
    double balance;
    
    // Constructor ប្រើប្រាស់ Member Initializer List
    BankAccount(string o, double b) : owner(o), balance(b) {}
};
\`\`\`

> **គន្លឹះ:** គួរតែបង្កើត Default Constructor (ដែលគ្មានប៉ារ៉ាម៉ែត្រ) មួយជានិច្ច ប្រសិនបើអ្នកចង់បង្កើតអារេនៃវត្ថុ (Array of objects) នៅពេលក្រោយ!`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

class BankAccount {
public:
    string ownerName;
    double balance;
    
    // Constructor 1: Parameterized with Member Initializer List
    BankAccount(string owner, double initialBalance) 
        : ownerName(owner), balance(initialBalance) {
        cout << "Constructor called: Account created for " << ownerName << "\\n";
    }
    
    // Constructor 2: Default (Overloaded)
    BankAccount() : ownerName("Unknown Owner"), balance(0.0) {
        cout << "Default constructor called: Blank account created.\\n";
    }
    
    void display() {
        cout << "Owner: " << ownerName << " | Balance: $" << balance << "\\n\\n";
    }
};

int main() {
    cout << "Creating account 1:\\n";
    BankAccount acc1("Visal", 2500.75); // Calls constructor 1
    acc1.display();
    
    cout << "Creating account 2:\\n";
    BankAccount acc2; // Calls constructor 2
    acc2.display();
    
    return 0;
}`
  },
  {
    id: "cpp-access-specifiers",
    title: {
      en: "C++ Access Specifiers",
      km: "កម្រិតកំណត់សិទ្ធិចូលប្រើប្រាស់"
    },
    content: {
      en: `### Controlling Member Accessibility
Access specifiers define how the members (attributes and methods) of a class can be accessed from outside the class.

### Three C++ Access Specifiers:
1. **\`public\`:** Members are accessible from anywhere outside the class.
2. **\`private\` (Default):** Members can **only** be accessed or modified within the class itself.
3. **\`protected\`:** Members cannot be accessed from outside, but can be accessed in inherited child classes.

Let's evolve our **BankAccount** class to make the \`balance\` private, protecting it from illegal external modifications:
\`\`\`cpp
class BankAccount {
private:
    double balance; // Locked from external access!
public:
    string ownerName;
    BankAccount(string o, double b) : ownerName(o), balance(b) {}
};
\`\`\`

> **Warning:** If you try to directly read or modify private data from \`main()\` (e.g., \`acc.balance = 999;\`), the compiler will halt compilation instantly, reporting a compilation protection error!`,
      km: `### ការគ្រប់គ្រងសិទ្ធិចូលប្រើប្រាស់សមាជិក
Access specifiers កំណត់ពីរបៀបដែលសមាជិក (អថេរ និងវិធីសាស្ត្រ) របស់ Class អាចចូលប្រើប្រាស់បានពីខាងក្រៅ។

### កម្រិតសិទ្ធិចូលប្រើប្រាស់ទាំងបីក្នុង C++៖
១. **\`public\`:** សមាជិកអាចចូលប្រើប្រាស់បានពីគ្រប់ទិសទីខាងក្រៅ Class។
២. **\`private\` (លំនាំដើម):** សមាជិកអាចចូលប្រើ ឬកែប្រែបាន **តែនៅក្នុង** Class ខ្លួនឯងប៉ុណ្ណោះ។
៣. **\`protected\`:** សមាជិកមិនអាចប្រើពីខាងក្រៅបានទេ តែអាចប្រើបាននៅក្នុង Class កូនដែលបន្តមរតក (Child classes)។

ចូរអភិវឌ្ឍថ្នាក់ **BankAccount** របស់យើងដោយប្តូរអថេរ \`balance\` ទៅជា private ដើម្បីការពារសុវត្ថិភាពទិន្នន័យ៖
\`\`\`cpp
class BankAccount {
private:
    double balance; // ត្រូវបានចាក់សោរពីការចូលប្រើខាងក្រៅ!
public:
    string ownerName;
    BankAccount(string o, double b) : ownerName(o), balance(b) {}
};
\`\`\`

> **ការព្រមាន:** ប្រសិនបើអ្នកព្យាយាមអាន ឬកែប្រែទិន្នន័យ private ដោយផ្ទាល់ពី \`main()\` (ឧ. \`acc.balance = 999;\`) Compiler នឹងបញ្ឈប់ការចងក្រងកូដភ្លាមៗ ព្រោះរំលោភច្បាប់ការពារសុវត្ថិភាព!`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    double balance; // Private: secure from manual hacking!

public:
    string ownerName; // Public: anyone can read/write

    BankAccount(string owner, double initialBalance) 
        : ownerName(owner), balance(initialBalance) {}

    void showAccountDetails() {
        // Private members are fully accessible inside the class itself
        cout << "Account Owner: " << ownerName << " | Secure Balance: $" << balance << "\\n";
    }
};

int main() {
    BankAccount secureAcc("Sokha", 1500.00);
    
    secureAcc.showAccountDetails();
    
    // Let's check what happens if we uncomment the line below:
    // secureAcc.balance = 500000.0; // ERROR! balance is private.
    
    return 0;
}`
  },
  {
    id: "cpp-encapsulation",
    title: {
      en: "C++ Encapsulation",
      km: "ការវេចខ្ចប់ទិន្នន័យ Encapsulation"
    },
    content: {
      en: `### Data Hiding with Getters & Setters
**Encapsulation** is the practice of hiding sensitive member variables (by making them \`private\`) and providing access only through public **Getter** and **Setter** methods.

### Why Encapsulate?
- **Control:** You can write validation rules inside Setter methods. For example, you can reject negative values when deposing money.
- **Security:** Read-only data can be achieved by only writing Getters without corresponding Setters.

Let's expand **BankAccount** to add validation checks inside our public deposit and withdrawal actions:
\`\`\`cpp
class BankAccount {
private:
    double balance;
public:
    double getBalance() { return balance; } // Getter
    void deposit(double amount) {           // Setter
        if (amount > 0) balance += amount;
    }
};
\`\`\`

> **Tip:** Encapsulation ensures your object's internal data remains consistent, preventing external scripts from corrupting variables with invalid inputs.`,
      km: `### ការលាក់បាំងទិន្នន័យតាមរយៈ Getters & Setters
**Encapsulation (ការវេចខ្ចប់)** គឺជាការលាក់បាំងអថេរសមាជិកសំខាន់ៗ (ដោយកំណត់ជា \`private\`) រួចផ្តល់សិទ្ធិប្រើប្រាស់តាមរយៈវិធីសាស្ត្រសាធារណៈដែលហៅថា **Getters** (សម្រាប់ទាញយកតម្លៃ) និង **Setters** (សម្រាប់កំណត់តម្លៃ)។

### ហេតុអ្វីត្រូវសរសេរកូដបែប Encapsulate?
- **ការគ្រប់គ្រងទិន្នន័យ:** អ្នកអាចដាក់លក្ខខណ្ឌត្រួតពិនិត្យភាពត្រឹមត្រូវនៅក្នុង Setter។ ឧទាហរណ៍ មិនអនុញ្ញាតឱ្យបញ្ចូលចំនួនអវិជ្ជមានពេលដាក់ប្រាក់។
- **សុវត្ថិភាព:** អ្នកអាចបង្កើតទិន្នន័យសម្រាប់តែអាន (Read-only) ដោយសរសេរត្រឹម Getter និងមិនបាច់សរសេរ Setter ឡើយ។

ចូរពង្រីកសមត្ថភាព **BankAccount** ដោយបន្ថែមលក្ខខណ្ឌការពារនៅក្នុងសកម្មភាពដាក់ និងដកប្រាក់៖
\`\`\`cpp
class BankAccount {
private:
    double balance;
public:
    double getBalance() { return balance; } // Getter
    void deposit(double amount) {           // Setter
        if (amount > 0) balance += amount;
    }
};
\`\`\`

> **គន្លឹះ:** Encapsulation ធានាថាកម្រងទិន្នន័យខាងក្នុងវត្ថុរបស់អ្នកមានភាពត្រឹមត្រូវ និងទប់ស្កាត់កូដខាងក្រៅមិនឱ្យបំផ្លាញតម្លៃអថេរដោយការបញ្ចូលទិន្នន័យខុសឆ្គង។`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    double balance; // Restricted!

public:
    string ownerName;

    BankAccount(string owner, double initialBalance) : ownerName(owner) {
        if (initialBalance >= 0) {
            balance = initialBalance;
        } else {
            balance = 0; // Default safe value
        }
    }

    // Getter Method
    double getBalance() const {
        return balance;
    }

    // Setter Method with strict business validation logic
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposit of $" << amount << " approved.\\n";
        } else {
            cout << "Error: Deposit amount must be positive!\\n";
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrawal of $" << amount << " approved.\\n";
        } else {
            cout << "Error: Insufficient funds or invalid amount for withdraw!\\n";
        }
    }
};

int main() {
    BankAccount myAcc("Sophat", 1000.0);
    
    cout << "Initial Balance: $" << myAcc.getBalance() << "\\n\\n";
    
    // Try to deposit negative value
    myAcc.deposit(-500); 
    
    // Try to withdraw more than active balance
    myAcc.withdraw(1500);
    
    // Correct actions
    myAcc.deposit(500);
    myAcc.withdraw(300);
    
    cout << "\\nFinal Secure Balance: $" << myAcc.getBalance() << "\\n";
    return 0;
}`
  },
  {
    id: "cpp-friend",
    title: {
      en: "C++ Friend Functions",
      km: "អនុគមន៍មិត្តភក្តិ Friend"
    },
    content: {
      en: `### Bypassing Private Access Restrictions Safely
A **Friend Function** is a non-member function that is granted special permission to access the **private** and **protected** members of a class.

### Syntax:
Use the \`friend\` keyword inside the class declaration block:
\`\`\`cpp
class BankAccount {
private:
    double balance;
public:
    friend void auditAccount(const BankAccount &acc); // Declared as friend
};
\`\`\`

### Key Properties:
- The friend function is defined *outside* the class like a normal global function.
- It is not in the class scope, so it does not use the dot accessor or class prefix during its definition.

> **Note:** Use friend functions sparingly. Overusing them compromises encapsulation, violating the core principle of OOP data hiding!`,
      km: `### ការបើកសិទ្ធិចូលប្រើប្រាស់ទិន្នន័យឯកជនដោយសុវត្ថិភាព
**អនុគមន៍មិត្តភក្តិ (Friend Function)** គឺជាអនុគមន៍ខាងក្រៅ (មិនមែនជាសមាជិករបស់ Class) ប៉ុន្តែត្រូវបានផ្តល់សិទ្ធិពិសេសដើម្បីចូលប្រើប្រាស់សមាជិកប្រភេទ **private** និង **protected** របស់ Class នោះបាន។

### របៀបកំណត់៖
ប្រើប្រាស់ពាក្យគន្លឹះ \`friend\` នៅខាងក្នុងប្លុកប្រកាស Class ៖
\`\`\`cpp
class BankAccount {
private:
    double balance;
public:
    friend void auditAccount(const BankAccount &acc); // ប្រកាសជាមិត្ត
};
\`\`\`

### លក្ខណៈពិសេស៖
- អនុគមន៍ Friend ត្រូវបានសរសេរកូដពិត *នៅខាងក្រៅ* Class ដូចជាអនុគមន៍សកលធម្មតា។
- វាមិនស្ថិតក្នុង Scope របស់ Class ទេ ដូច្នេះមិនបាច់ប្រើបុព្វបទ Class ពេលសរសេរកូដឡើយ។

> **ចំណាំ:** គួរប្រើប្រាស់ Friend functions ក្នុងករណីចាំបាច់ខ្លាំងប៉ុណ្ណោះ។ ការប្រើប្រាស់វាច្រើនហួសហេតុ នឹងធ្វើឱ្យបាត់បង់អត្ថប្រយោជន៍នៃ Encapsulation ដែលជារំលោភគោលការណ៍លាក់ទិន្នន័យរបស់ OOP!`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    double balance;
    string accountNumber;

public:
    BankAccount(string owner, double bal, string accNum) 
        : ownerName(owner), balance(bal), accountNumber(accNum) {}
        
    string ownerName;

    // Declaring a global function as a FRIEND of this class
    friend void governmentAuditor(const BankAccount &acc);
};

// Definition of Friend Function (Notice: No BankAccount:: prefix needed!)
void governmentAuditor(const BankAccount &acc) {
    // Can access private balance and private accountNumber directly!
    cout << "--- GOVERNMENT AUDITING MODULE ACTIVE ---\\n";
    cout << "Auditing Account: " << acc.accountNumber << "\\n";
    cout << "Owner Name: " << acc.ownerName << "\\n";
    cout << "Internal Balance verified: $" << acc.balance << "\\n";
    cout << "Status: VERIFIED SAFE & ACCURATE\\n";
}

int main() {
    BankAccount secureAcc("Dararith", 50000.0, "KH-9988-77");
    
    // Call the global friend function
    governmentAuditor(secureAcc);
    return 0;
}`
  },
  {
    id: "cpp-inheritance",
    title: {
      en: "C++ Inheritance",
      km: "ការបន្តមរតកថ្នាក់ Inheritance"
    },
    content: {
      en: `### Creating Child Classes
**Inheritance** allows a class (Derived/Child class) to inherit attributes and methods from another class (Base/Parent class).

### Syntax:
Use the colon operator \`:\` followed by the access mode:
\`\`\`cpp
class ChildClass : public ParentClass {
    // child specific members
};
\`\`\`

Let's evolve our **BankAccount** blueprint to support a specialized **SavingsAccount** child class. It inherits general bank traits but adds a custom \`interestRate\` attribute:
\`\`\`cpp
class SavingsAccount : public BankAccount {
public:
    double interestRate;
    SavingsAccount(string o, double b, double r) : BankAccount(o, b), interestRate(r) {}
};
\`\`\`

> **Note:** Using \`public\` inheritance mode means public members of the Base class remain public in the Derived class, allowing external scripts to access them directly.`,
      km: `### ការបង្កើតថ្នាក់កូនបន្តមរតក
**Inheritance (ការបន្តមរតក)** អនុញ្ញាតឱ្យថ្នាក់ថ្មីមួយ (Derived/Child class) ទទួលយកលក្ខណៈសម្បត្តិ និងវិធីសាស្ត្រពីថ្នាក់ដើមមួយទៀត (Base/Parent class)។

### របៀបកំណត់៖
ប្រើប្រាស់សញ្ញាចុចពីរ \`:\` បន្តដោយទម្រង់អនុញ្ញាត៖
\`\`\`cpp
class ChildClass : public ParentClass {
    // សមាជិកបន្ថែមរបស់ថ្នាក់កូន
};
\`\`\`

ចូរពង្រីកគំរូ **BankAccount** របស់យើងទៅជាថ្នាក់កូនថ្មីឈ្មោះ **SavingsAccount (គណនីសន្សំ)**។ វាទទួលបានលក្ខណៈទូទៅពីគណនីធនាគារ និងបន្ថែមអថេរពិសេស \`interestRate\` (អត្រាការប្រាក់)៖
\`\`\`cpp
class SavingsAccount : public BankAccount {
public:
    double interestRate;
    SavingsAccount(string o, double b, double r) : BankAccount(o, b), interestRate(r) {}
};
\`\`\`

> **ចំណាំ:** ការប្រើប្រាស់របៀបបន្តមរតក \`public\` ធានាថារាល់សមាជិកប្រភេទ public របស់ថ្នាក់ឪពុក នៅតែរក្សាភាពជា public នៅក្នុងថ្នាក់កូន ដែលអនុញ្ញាតឱ្យកូដខាងក្រៅចូលប្រើប្រាស់បានធម្មតា។`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

// Base Parent Class
class BankAccount {
protected:
    double balance; // Protected so children can access directly, but private to main()

public:
    string ownerName;

    BankAccount(string owner, double initialBalance) 
        : ownerName(owner), balance(initialBalance) {}

    double getBalance() const { return balance; }
};

// Derived Child Class inheriting public from BankAccount
class SavingsAccount : public BankAccount {
public:
    double interestRate; // Child specific field

    // Constructor chain passing values to Base Parent Constructor
    SavingsAccount(string owner, double initialBalance, double rate) 
        : BankAccount(owner, initialBalance), interestRate(rate) {}

    void applyInterest() {
        double interest = balance * (interestRate / 100.0);
        balance += interest; // Modifies protected balance inherited from parent
        cout << "Applied " << interestRate << "% interest. Earned: $" << interest << "\\n";
    }
};

int main() {
    cout << "Instantiating SavingsAccount object:\\n";
    SavingsAccount mySavings("Nara Sok", 2000.0, 4.5); // 4.5% annual interest
    
    cout << "Owner: " << mySavings.ownerName << "\\n";
    cout << "Initial Balance: $" << mySavings.getBalance() << "\\n";
    
    mySavings.applyInterest();
    cout << "New Balance: $" << mySavings.getBalance() << "\\n";
    return 0;
}`
  },
  {
    id: "cpp-polymorphism",
    title: {
      en: "C++ Polymorphism",
      km: "ពហុភាព Polymorphism"
    },
    content: {
      en: `### Dynamic Method Dispatch with Overriding
**Polymorphism** means "many forms". It occurs when multiple classes are related to each other by inheritance, but override parent actions to execute their own unique behaviors.

### Overriding and \`virtual\` functions:
- To allow runtime dynamic dispatch, prefix parent methods with the \`virtual\` keyword.
- In child classes, override parent methods and mark them with \`override\` for safety.

Let's override the withdraw method in our **BankAccount** hierarchy:
- A standard account allows normal withdrawals.
- A **PremiumSavingsAccount** checks minimum balance limits before approving!

\`\`\`cpp
class BankAccount {
public:
    virtual void withdraw(double amount) { balance -= amount; }
};

class PremiumSavingsAccount : public BankAccount {
public:
    void withdraw(double amount) override {
        if (balance - amount >= 100) balance -= amount;
    }
};
\`\`\`

> **Tip:** Polymorphism allows you to write generic functions that process lists of base pointers (\`BankAccount*\`), executing child-specific behaviors automatically!`,
      km: `### ការកែប្រែវិធីសាស្ត្រដំណើរការតាមថ្នាក់នីមួយៗ (Overriding)
**Polymorphism (ពហុភាព)** មានន័យថា "ទម្រង់ច្រើន"។ វាកើតឡើងនៅពេលដែលថ្នាក់ជាច្រើនមានទំនាក់ទំនងបន្តមរតកពីគ្នា ប៉ុន្តែកែប្រែវិធីសាស្ត្ររបស់ថ្នាក់ឪពុក (Overriding) ដើម្បីរត់កូដផ្សេងគ្នាតាមលក្ខណៈរបស់ពួកគេ។

### វិធីសាស្ត្រ Overriding និងអនុគមន៍ \`virtual\`៖
- ដើម្បីអនុញ្ញាតឱ្យកម្មវិធីជ្រើសរើសវិធីសាស្ត្ររត់ពេលកំពុងដំណើរការ (Runtime dispatch) យើងត្រូវថែមពាក្យ \`virtual\` នៅពីមុខវិធីសាស្ត្ររបស់ថ្នាក់ឪពុក។
- នៅក្នុងថ្នាក់កូន យើងសរសេរវិធីសាស្ត្រនោះឡើងវិញ និងបន្ថែមពាក្យ \`override\` ដើម្បីការពារភាពត្រឹមត្រូវនៃកូដ។

ចូរពិនិត្យមើលការកែប្រែវិធីសាស្ត្រដកប្រាក់ (\`withdraw\`) ក្នុងគំរូ **BankAccount** ៖
- គណនីធម្មតា អនុញ្ញាតឱ្យដកប្រាក់សេរីរហូតដល់សូន្យ។
- គណនីពិសេស **PremiumSavingsAccount** តម្រូវឱ្យមានប្រាក់សល់យ៉ាងហោចណាស់ ១០០ដុល្លារ ជានិច្ច!

\`\`\`cpp
class BankAccount {
public:
    virtual void withdraw(double amount) { balance -= amount; }
};

class PremiumSavingsAccount : public BankAccount {
public:
    void withdraw(double amount) override {
        if (balance - amount >= 100) balance -= amount;
    }
};
\`\`\`

> **គន្លឹះ:** Polymorphism ជួយឱ្យអ្នកអាចសរសេរកូដទូទៅសម្រាប់គ្រប់គ្រងអារេនៃ Pointer របស់ថ្នាក់ឪពុក (\`BankAccount*\`) ហើយវានឹងទៅហៅវិធីសាស្ត្ររបស់ថ្នាក់កូនដោយស្វ័យប្រវត្តិ!`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

// Base class
class BankAccount {
protected:
    double balance;

public:
    BankAccount(string owner, double bal) : ownerName(owner), balance(bal) {}
    string ownerName;

    double getBalance() const { return balance; }

    // Declare virtual method
    virtual void displayStatement() const {
        cout << "[Standard Statement] Owner: " << ownerName << " | Balance: $" << balance << "\\n";
    }
};

// Derived child class 1
class SavingsAccount : public BankAccount {
private:
    double interestRate;

public:
    SavingsAccount(string owner, double bal, double rate) 
        : BankAccount(owner, bal), interestRate(rate) {}

    // Override virtual method
    void displayStatement() const override {
        cout << "[Savings Statement] Owner: " << ownerName << " | Balance: $" << balance 
             << " | Annual Rate: " << interestRate << "%\\n";
    }
};

int main() {
    // Create base pointers pointing to different inherited objects
    BankAccount* accounts[2];
    
    accounts[0] = new BankAccount("Sok", 1000.0);
    accounts[1] = new SavingsAccount("Sina", 5000.0, 5.0);
    
    cout << "=== Polymorphism in Action ===\\n";
    for (int i = 0; i < 2; i++) {
        // Automatically calls correct statement based on active object type!
        accounts[i]->displayStatement();
    }
    
    // Free dynamic memory
    delete accounts[0];
    delete accounts[1];
    return 0;
}`
  },
  {
    id: "cpp-templates",
    title: {
      en: "C++ Templates",
      km: "ពុម្ពគំរូកូដ Templates"
    },
    content: {
      en: `### Generic Programming with Templates
Templates let you write generic code that can operate on **any data type** without duplicating the core logic.

### 1. Function Templates:
Generates a function for a type specified as a placeholder parameter \`T\`:
\`\`\`cpp
template <typename T>
T getMaximum(T x, T y) {
    return (x > y) ? x : y;
}
\`\`\`

### 2. Class Templates:
Generates class structures capable of holding variable-type members. This is extremely useful for data structures like stacks, lists, or custom database queues.

\`\`\`cpp
template <typename T>
class TransactionBox {
public:
    T transactionData;
};
\`\`\`

> **Tip:** C++'s Standard Template Library (STL) uses templates to implement efficient collections like vectors, maps, and lists.`,
      km: `### ការសរសេរកូដទូទៅគ្មានកំណត់ប្រភេទទិន្នន័យ (Templates)
ពុម្ពគំរូកូដ (Templates) អនុញ្ញាតឱ្យអ្នកសរសេរកូដដែលអាចដំណើរការបានជាមួយ **គ្រប់ប្រភេទទិន្នន័យទាំងអស់** ដោយមិនបាច់សរសេរកូដដដែលៗឡើងវិញឡើយ។

### ១. អនុគមន៍គំរូ (Function Templates)៖
បង្កើតអនុគមន៍ទូទៅដោយប្រើអថេរជំនួសប្រភេទ \`T\` (Type placeholder) ៖
\`\`\`cpp
template <typename T>
T getMaximum(T x, T y) {
    return (x > y) ? x : y;
}
\`\`\`

### ២. ថ្នាក់គំរូ (Class Templates)៖
បង្កើតរចនាសម្ព័ន្ធ Class ដែលអាចផ្ទុកទិន្នន័យបានច្រើនប្រភេទផ្សេងៗគ្នា។ វាមានប្រយោជន៍ខ្លាំងណាស់សម្រាប់រចនាសម្ព័ន្ធទិន្នន័យ (Data structures) ដូចជា Stacks, Lists ឬប្រអប់រក្សាទុកប្រតិបត្តិការ។

\`\`\`cpp
template <typename T>
class TransactionBox {
public:
    T transactionData;
};
\`\`\`

> **គន្លឹះ:** បណ្ណាល័យប្លង់គំរូស្តង់ដាររបស់ C++ (Standard Template Library - STL) ប្រើប្រាស់ Templates ទាំងស្រុងសម្រាប់ការបង្កើតថ្នាក់ផ្ទុកទិន្នន័យល្បីៗដូចជា vectors, maps, និង lists។`
    },
    starterCode: `#include <iostream>
#include <string>
using namespace std;

// Function Template Showcase
template <typename T>
T findMin(T a, T b) {
    return (a < b) ? a : b;
}

// Class Template representing a transaction package
template <typename DataType>
class Transaction {
private:
    DataType value;
public:
    Transaction(DataType val) : value(val) {}
    
    DataType getValue() const { return value; }
    
    void printDetails() {
        cout << "Transaction Registered | Inside Value: " << value << "\\n";
    }
};

int main() {
    // Testing Function Template
    cout << "Min of 45 and 12 (ints): " << findMin(45, 12) << "\\n";
    cout << "Min of 99.85 and 102.5 (doubles): " << findMin(99.85, 102.5) << "\\n";
    
    cout << "\\nTesting Class Template with double transaction:\\n";
    Transaction<double> floatTrans(250.75); // double type
    floatTrans.printDetails();
    
    cout << "\\nTesting Class Template with string transaction:\\n";
    Transaction<string> stringTrans("DEPOSIT_REJECTED"); // string type
    stringTrans.printDetails();
    
    return 0;
}`
  },
  {
    id: "cpp-files",
    title: {
      en: "C++ Files",
      km: "ការចាត់ចែងឯកសារ Files"
    },
    content: {
      en: `### File I/O with fstream Library
C++ offers robust support for writing to and reading from files using the \`<fstream>\` header.

### Three Crucial Classes:
1. **\`ofstream\`:** Represents the output file stream, used to **create and write** information to files.
2. **\`ifstream\`:** Represents the input file stream, used to **read** information from files.
3. **\`fstream\`:** A combined stream capable of both reading and writing.

### File open modes:
- \`std::ios::app\`: Appends new content to the end of the file instead of overwriting.

\`\`\`cpp
#include <fstream>
using namespace std;

int main() {
    ofstream outFile("data.txt");
    outFile << "Saving C++ lessons...";
    outFile.close();
}
\`\`\`

> **Tip:** Always remember to call \`.close()\` when you are finished writing to release system file-locks and flush buffered content safely to disk!`,
      km: `### ការអាន និងសរសេរឯកសារជាមួយបណ្ណាល័យ fstream
C++ ផ្តល់នូវបណ្ណាល័យដ៏រឹងមាំសម្រាប់គ្រប់គ្រង និងចាត់ចែងឯកសារ (Files) តាមរយៈការនាំចូល Header \`<fstream>\`។

### ថ្នាក់គន្លឹះទាំងបី៖
១. **\`ofstream\`:** តំណាងឱ្យស្ទ្រីមបញ្ចេញទិន្នន័យឯកសារ ប្រើសម្រាប់ **បង្កើត និងសរសេរ** ព័ត៌មានចូលទៅក្នុងឯកសារ។
២. **\`ifstream\`:** តំណាងឱ្យស្ទ្រីមបញ្ចូលទិន្នន័យឯកសារ ប្រើសម្រាប់ **អាន** ព័ត៌មានពីឯកសារមកវិញ។
៣. **\`fstream\`:** ស្ទ្រីមរួមបញ្ចូលគ្នាដែលអាចធ្វើការបានទាំងសរសេរ និងអាន។

### របៀបបើកឯកសារពេញនិយម៖
- \`std::ios::app\`: បន្ថែមទិន្នន័យថ្មីនៅចុងឯកសារ (Append) ជំនួសឱ្យការលុបសរសេរជាន់ពីលើ។

\`\`\`cpp
#include <fstream>
using namespace std;

int main() {
    ofstream outFile("data.txt");
    outFile << "រក្សាទុកមេរៀន C++...";
    outFile.close();
}
\`\`\`

> **គន្លឹះ:** ត្រូវតែចងចាំជានិច្ចក្នុងការហៅប្រើ \`.close()\` នៅពេលដំណើរការឯកសារចប់ ដើម្បីដោះលែងសិទ្ធិឯកសារក្នុងប្រព័ន្ធ និងធានាថាទិន្នន័យទាំងអស់ត្រូវបានរក្សាទុកដោយជោគជ័យទៅក្នុងថាសរឹង!`
    },
    starterCode: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    string fileName = "sandbox_statement.txt";
    
    // 1. Write to File
    ofstream myWriter(fileName);
    if (myWriter.is_open()) {
        myWriter << "VISAL SOK | KH-9988-77\\n";
        myWriter << "Starting Balance: $5000.00\\n";
        myWriter << "Last Action: Deposit $1500.00\\n";
        myWriter.close();
        cout << "Statement written to: " << fileName << " successfully.\\n";
    } else {
        cout << "Failed to open file for writing!\\n";
    }
    
    // 2. Read from File
    ifstream myReader(fileName);
    string line;
    cout << "\\n--- Reading File Contents from Disk ---\\n";
    if (myReader.is_open()) {
        while (getline(myReader, line)) {
            cout << "[FILE LINE]: " << line << "\\n";
        }
        myReader.close();
    } else {
        cout << "Failed to open file for reading!\\n";
    }
    
    return 0;
}`
  },
  {
    id: "cpp-date",
    title: {
      en: "C++ Date",
      km: "កាលបរិច្ឆេទ C++"
    },
    content: {
      en: `### Working with System Time & Dates
C++ inherits its core date and time processing structures from C inside the \`<ctime>\` library.

### Key Types and Concepts:
- \`time_t\`: A data type representing system calendar time as the number of elapsed seconds since the epoch (January 1, 1970).
- \`tm\` struct: An built-in structure that breaks down seconds into readable calendar attributes (hour, minute, second, day, month, year, weekday).

### Core Attributes inside \`tm\` struct:
- \`tm_sec\`: Seconds (0-59)
- \`tm_min\`: Minutes (0-59)
- \`tm_hour\`: Hours (0-23)
- \`tm_mday\`: Day of the month (1-31)
- \`tm_mon\`: Months since January (0-11)
- \`tm_year\`: Years elapsed since 1900 (You must add 1900 to get the correct current year!).

> **Tip:** Use the function \`strftime()\` to format date and time objects into highly customized string patterns easily.`,
      km: `### ការប្រើប្រាស់ពេលវេលា និងកាលបរិច្ឆេទ
C++ ទទួលយកប្រព័ន្ធកាលបរិច្ឆេទ និងពេលវេលាពីភាសា C តាមរយៈការប្រើប្រាស់បណ្ណាល័យ \`<ctime>\`។

### ប្រភេទទិន្នន័យសំខាន់ៗ៖
- \`time_t\`: ប្រភេទទិន្នន័យដែលតំណាងឱ្យពេលវេលាប្រព័ន្ធ គិតជាវិនាទីដែលបានកន្លងផុតទៅចាប់តាំងពីថ្ងៃទី ១ ខែមករា ឆ្នាំ ១៩៧០ (Epoch time)។
- structure \`tm\`: រចនាសម្ព័ន្ធសម្រាប់ពន្លាពេលវេលាពីវិនាទី ទៅជាធាតុថ្ងៃខែឆ្នាំដែលអាចមើលយល់បាន (ម៉ោង នាទី វិនាទី ថ្ងៃ ខែ ឆ្នាំ ថ្ងៃនៃសប្តាហ៍)។

### សមាជិកសំខាន់ៗក្នុង struct \`tm\`៖
- \`tm_sec\`: វិនាទី (០-៥៩)
- \`tm_min\`: នាទី (០-៥៩)
- \`tm_hour\`: ម៉ោង (០-២៣)
- \`tm_mday\`: ថ្ងៃក្នុងខែ (១-៣១)
- \`tm_mon\`: ខែគិតចាប់ពីខែមករា (០-១១ - ត្រូវបូកបន្ថែម ១ ដើម្បីទទួលបានខែពិត)។
- \`tm_year\`: ចំនួនឆ្នាំកន្លងផុតពីឆ្នាំ ១៩០០ (ត្រូវបូកបន្ថែម ១៩០០ ដើម្បីទទួលបានឆ្នាំបច្ចុប្បន្នពិតប្រាកដ!)។

> **គន្លឹះ:** ប្រើប្រាស់អនុគមន៍ \`strftime()\` ដើម្បីកែច្នៃទម្រង់កាលបរិច្ឆេទ និងពេលវេលាទៅជាអត្ថបទតាមទម្រង់ដែលអ្នកចង់បានយ៉ាងងាយស្រួល។`
    },
    starterCode: `#include <iostream>
#include <ctime>
using namespace std;

int main() {
    // 1. Get raw current system time
    time_t rawTime = time(0);
    cout << "Raw epoch seconds since 1970: " << rawTime << "\\n";
    
    // 2. Convert to human-readable local time structure
    tm* timeStruct = localtime(&rawTime);
    
    // Extract properties with adjustments
    int currentDay = timeStruct->tm_mday;
    int currentMonth = timeStruct->tm_mon + 1; // Month range is 0-11, add 1!
    int currentYear = timeStruct->tm_year + 1900; // Years since 1900, add 1900!
    
    cout << "\\n--- Decoded Calendar Date ---\\n";
    cout << "Current Year: " << currentYear << "\\n";
    cout << "Current Month: " << currentMonth << "\\n";
    cout << "Current Day: " << currentDay << "\\n";
    
    cout << "\\nFormatted Local Date: " << currentDay << "/" << currentMonth << "/" << currentYear << "\\n";
    
    // Simple current time string shortcut
    char* timeString = ctime(&rawTime);
    cout << "Date/Time text representation: " << timeString;
    return 0;
}`
  }
];
