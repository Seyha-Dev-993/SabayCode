import { Topic } from '../../types';

export const group5Topics: Topic = {
  id: "dart-oop-foundations",
  title: {
    en: "Group 5: Object-Oriented Programming (OOP)",
    km: "ក្រុមទី ៥៖ វិធីសាស្ត្រតម្រង់ទិសវត្ថុ (Object-Oriented Programming - OOP)"
  },
  lessons: [
    {
      id: "dart-5-1-classes-objects-fields",
      title: {
        en: "5.1 Classes, Objects, Fields & Instance Variables",
        km: "៥.១ ថ្នាក់ (Classes), វត្ថុ (Objects) និង Instance Variables"
      },
      content: {
        en: `# 5.1 Classes & Objects

A \`class\` is a blueprint for creating stateful objects that encapsulate state (fields) and behavior (methods).

### Instantiating Objects:
In modern Dart, the \`new\` keyword is optional and deprecated in favor of clean instantiation \`var bank = BankAccount();\`.`,
        km: `# ៥.១ ថ្នាក់ (Classes) និង វត្ថុ (Objects)

\`class\` គឺជាគំរូប្លង់ (Blueprint) សម្រាប់បង្កើត Objects ដែលផ្ទុកទិន្នន័យ (Fields) និងសកម្មភាព (Methods)។

### ការបង្កើត Object (Instantiating)៖
ក្នុង Dart ទំនើប ពាក្យ \`new\` មិនចាំបាច់សរសេរទៀតឡើយ (ឧទាហរណ៍៖ \`var bank = BankAccount();\`)។`
      },
      starterCode: `class BankCustomer {
  String fullName = 'Unnamed';
  String accountType = 'Savings';
  double balanceUSD = 0.0;

  void deposit(double amount) {
    balanceUSD += amount;
    print('✅ Deposited \$$amount. New Balance: \$$balanceUSD');
  }
}

void main() {
  var customer = BankCustomer();
  customer.fullName = 'Bopha Chan';
  customer.deposit(150.0);
}`
    },
    {
      id: "dart-5-2-generative-constructors",
      title: {
        en: "5.2 Generative & Default Constructors with Syntactic Sugar",
        km: "៥.២ Generative Constructors និងទម្រង់កូដខ្លី (Syntactic Sugar)"
      },
      content: {
        en: `# 5.2 Generative Constructors

Generative constructors initialize instance fields when an object is instantiated.

### Initializing Formal Parameters (\`this.field\`):
Dart provides generative constructor syntactic sugar \`ClassName(this.field1, this.field2);\`.`,
        km: `# ៥.២ Generative Constructors

Generative constructor ផ្តល់តម្លៃដំបូងទៅឱ្យ instance fields ពេល Object ត្រូវបានបង្កើត។

### វាក្យសម្ពន្ធខ្លី (\`this.field\`)៖
Dart ផ្តល់នូវទម្រង់កូដខ្លី \`ClassName(this.field1, this.field2);\` ដោយមិនបាច់សរសេរ \`this.field = field\` ក្នុង constructor body ឡើយ។`
      },
      starterCode: `class CurrencyRate {
  final String code;
  final String currencyName;
  final double rateToUSD;

  // Generative constructor with initializing formal parameters
  CurrencyRate(this.code, this.currencyName, this.rateToUSD);
}

void main() {
  var khr = CurrencyRate('KHR', 'Khmer Riel', 4050.0);
  print('Currency: \${khr.currencyName} (\${khr.code}) - Rate: \${khr.rateToUSD} KHR/USD');
}`
    },
    {
      id: "dart-5-3-named-constructors-redirecting",
      title: {
        en: "5.3 Named Constructors & Constructor Redirecting",
        km: "៥.៣ Named Constructors និង Constructor Redirecting"
      },
      content: {
        en: `# 5.3 Named Constructors

Named constructors allow a class to define multiple constructors with explicit purpose (e.g., \`User.fromJSON(...)\`).`,
        km: `# ៥.៣ Named Constructors

Named constructors អនុញ្ញាតឱ្យ class មួយអាចមាន constructor ច្រើនប្រភេទ ទៅតាមគោលបំណង (ឧទាហរណ៍៖ \`User.fromJSON(...)\`)។`
      },
      starterCode: `class UserAccount {
  final String id;
  final String username;
  final String role;

  // Standard constructor
  UserAccount(this.id, this.username, this.role);

  // Named constructor for guest users
  UserAccount.guest()
      : id = 'GUEST-000',
        username = 'Guest Visitor',
        role = 'READ_ONLY';

  // Named constructor from JSON map
  UserAccount.fromJson(Map<String, dynamic> json)
      : id = json['id'] as String,
        username = json['username'] as String,
        role = json['role'] as String;
}

void main() {
  var guest = UserAccount.guest();
  var admin = UserAccount.fromJson({'id': 'ADM-99', 'username': 'sokha_admin', 'role': 'SUPER_ADMIN'});

  print('Guest User: \${guest.username} [\${guest.role}]');
  print('Admin User: \${admin.username} [\${admin.role}]');
}`
    },
    {
      id: "dart-5-4-const-constructors-canonicalization",
      title: {
        en: "5.4 Constant Constructors (const) & Canonical Instances",
        km: "៥.៤ Constant Constructors (const) និង Canonical Instances"
      },
      content: {
        en: `# 5.4 Constant Constructors

If a class creates immutable objects whose fields never change after construction, declare a \`const\` constructor.

### Rules:
- All fields in the class must be declared \`final\`.
- Instantiating with \`const\` creates canonical instances sharing the same memory location.`,
        km: `# ៥.៤ Constant Constructors

ប្រសិនបើ class បង្កើតនូវ immutable objects ដែលមិនផ្លាស់ប្តូរទិន្នន័យឡើយ អ្នកត្រូវប្រកាស \`const\` constructor។

### ច្បាប់សំខាន់៖
- គ្រប់ fields ទាំងអស់ក្នុង class ត្រូវតែជា \`final\`។
- ការបង្កើត Object ជាមួយ \`const\` នឹងបង្កើត canonical instances ដែលចែករំលែក memory តែមួយកន្លែង។`
      },
      starterCode: `class AppColor {
  final int red;
  final int green;
  final int blue;

  const AppColor(this.red, this.green, this.blue);
}

void main() {
  const primaryBlue = AppColor(1, 117, 194);   // Official Dart Blue #0175C2
  const secondaryBlue = AppColor(1, 117, 194); // Same const parameters

  // identical() checks if both references point to exact same memory object
  print('Are both colors identical in memory? \${identical(primaryBlue, secondaryBlue)}');
}`
    },
    {
      id: "dart-5-5-factory-constructors-singletons",
      title: {
        en: "5.5 Factory Constructors (factory) & Object Caching",
        km: "៥.៥ Factory Constructors (factory) និង Singleton Pattern"
      },
      content: {
        en: `# 5.5 Factory Constructors

Use the \`factory\` keyword when implementing a constructor that does not always create a new instance of its class (e.g., returning cached objects or sub-types).`,
        km: `# ៥.៥ Factory Constructors

ប្រើប្រាស់ពាក្យគន្លឹះ \`factory\` នៅពេលបង្កើត constructor ដែលមិនបង្កើត instance ថ្មីជានិច្ច (ឧទាហរណ៍៖ ប្រគល់cached objects មកវិញ ឬប្រគល់ sub-types)។`
      },
      starterCode: `class DatabaseService {
  final String dbName;
  static DatabaseService? _instance;

  // Private constructor
  DatabaseService._internal(this.dbName);

  // Factory constructor returning existing instance (Singleton)
  factory DatabaseService(String dbName) {
    _instance ??= DatabaseService._internal(dbName);
    return _instance!;
  }
}

void main() {
  var db1 = DatabaseService('SabayCode_Prod_DB');
  var db2 = DatabaseService('SabayCode_Dev_DB'); // Returns cached instance

  print('Are db1 and db2 the same Singleton instance? \${identical(db1, db2)}');
}`
    },
    {
      id: "dart-5-6-encapsulation-private-members",
      title: {
        en: "5.6 Encapsulation: Private Members (_) & Library Privacy",
        km: "៥.៦ Encapsulation៖ Private Members (_) និង Library Privacy"
      },
      content: {
        en: `# 5.6 Private Members (_)

In Dart, privacy is scoped to the **library** (file), not the class. Prefixing an identifier with an underscore (\`_\`) makes it private to its file.`,
        km: `# ៥.៦ Private Members (_)

ក្នុង Dart សិទ្ធិឯកជនភាព (Privacy) ត្រូវបានកំណត់ត្រឹមកម្រិត **Library** (ឯកសារ .dart) មិនមែនកម្រិត class ឡើយ។ ការដាក់សញ្ញាបន្ទាត់ក្រោម (\`_\`) ពីមុខ ធ្វើឱ្យ member នោះទៅជា private ក្នុងឯកសារនោះ។`
      },
      starterCode: `class SecureVault {
  String vaultOwner;
  double _secretBalanceUSD; // Private to library file

  SecureVault(this.vaultOwner, this._secretBalanceUSD);

  void displayPublicInfo() {
    print('Vault Owner: $vaultOwner');
  }
}

void main() {
  var vault = SecureVault('Sophea', 50000.0);
  vault.displayPublicInfo();
  // _secretBalanceUSD is accessible here ONLY because main() is in the same library file
  print('Internal File Balance Access: \$\${vault._secretBalanceUSD}');
}`
    },
    {
      id: "dart-5-7-getters-setters",
      title: {
        en: "5.7 Custom Getters (get) & Setters (set)",
        km: "៥.៧ Custom Getters (get) និង Setters (set)"
      },
      content: {
        en: `# 5.7 Getters & Setters

Getters and setters provide specialized read and write access to object properties with custom computed logic or validation guards.`,
        km: `# ៥.៧ Getters និង Setters

Getters និង Setters ផ្តល់នូវសិទ្ធិអាន និងសរសេរលើ properties របស់ object ជាមួយនឹងការបញ្ជាក់លក្ខខណ្ឌ ឬគណនាតម្លៃឌីណាមិក។`
      },
      starterCode: `class Wallet {
  double _balanceUSD = 0.0;

  // Getter
  double get balanceUSD => _balanceUSD;
  double get balanceKHR => _balanceUSD * 4050.0;

  // Setter with validation guard
  set balanceUSD(double newBalance) {
    if (newBalance < 0) {
      print('❌ Validation Error: Negative balance allocation rejected.');
    } else {
      _balanceUSD = newBalance;
    }
  }
}

void main() {
  var wallet = Wallet();
  wallet.balanceUSD = 120.0; // Invokes setter
  print('Wallet USD: \$\${wallet.balanceUSD}'); // Invokes getter
  print('Wallet KHR: \${wallet.balanceKHR} KHR');
}`
    },
    {
      id: "dart-5-8-inheritance-super-calls",
      title: {
        en: "5.8 Inheritance (extends) & Super Constructor Delegation",
        km: "៥.៨ ការបន្តវេន (extends) និង Super Constructor Delegation"
      },
      content: {
        en: `# 5.8 Inheritance & super

A subclass inherits fields and methods from a superclass using the \`extends\` keyword. Delegate constructor arguments to the superclass using \`super(...)\`.`,
        km: `# ៥.៨ ការបន្តវេន (extends) និង super

Subclass បន្តវេនទទួលយក fields និង methods ពី Superclass ដោយប្រើប្រាស់ពាក្យ \`extends\`។ បញ្ជូន Argument ទៅកាន់ Superclass constructor ដោយប្រើ \`super(...)\`។`
      },
      starterCode: `class PaymentMethod {
  final String providerName;
  PaymentMethod(this.providerName);

  void processPayment(double amountUSD) {
    print('Processing \$$amountUSD via $providerName generic engine...');
  }
}

class KHQRPayment extends PaymentMethod {
  final String qrPayload;

  // Delegating to superclass constructor
  KHQRPayment(String providerName, this.qrPayload) : super(providerName);

  @override
  void processPayment(double amountUSD) {
    print('Processing KHQR Payment (\$$amountUSD) via $providerName - Payload: $qrPayload');
  }
}

void main() {
  var payment = KHQRPayment('ABA Pay', '00020101021229150010A000000770');
  payment.processPayment(50.0);
}`
    },
    {
      id: "dart-5-9-method-overriding-polymorphism",
      title: {
        en: "5.9 Method Overriding, @override Annotation & Polymorphism",
        km: "៥.៩ Method Overriding, @override Annotation និង Polymorphism"
      },
      content: {
        en: `# 5.9 Method Overriding & Polymorphism

Polymorphism allows objects of different subclasses to respond to the same method invocation with custom implementations.`,
        km: `# ៥.៩ Method Overriding និង Polymorphism

Polymorphism អនុញ្ញាតឱ្យ Objects នៃ Subclasses ខុសៗគ្នា ឆ្លើយតបទៅនឹងការហៅ Method ដូចគ្នា ដោយប្រើប្រាស់កូដអនុវត្តផ្ទាល់ខ្លួន។`
      },
      starterCode: `abstract class Account {
  String accountNumber;
  double balanceUSD;

  Account(this.accountNumber, this.balanceUSD);

  void calculateInterest();
}

class SavingsAccount extends Account {
  SavingsAccount(String accNum, double balance) : super(accNum, balance);

  @override
  void calculateInterest() {
    double interest = balanceUSD * 0.05; // 5% annual
    print('Savings Account $accountNumber Annual Interest (5%): \$$interest USD');
  }
}

void main() {
  Account myAcc = SavingsAccount('ABA-001-992', 1000.0);
  myAcc.calculateInterest(); // Polymorphic method call
}`
    },
    {
      id: "dart-5-10-lab-banking-system",
      title: {
        en: "5.10 Practical Lab: ABA/Wing Banking Account Models",
        km: "៥.១០ អនុវត្តជាក់ស្តែង៖ ប្រព័ន្ធគ្រប់គ្រងគណនីធនាគារ (Banking Model)"
      },
      content: {
        en: `# 5.10 Practical Lab: ABA & Wing Banking Model

Build a comprehensive banking class structure leveraging inheritance, getters/setters, encapsulated balances, and transaction history tracking.`,
        km: `# ៥.១០ អនុវត្តជាក់ស្តែង៖ ប្រព័ន្ធគ្រប់គ្រងគណនីធនាគារ (Banking Model)

បង្កើតរចនាសម្ព័ន្ធធនាគារពេញលេញ ដោយប្រើប្រាស់ការបន្តវេន, Getters/Setters, Encapsulation, និងកំណត់ត្រាប្រវត្តិប្រតិបត្តិការ។`
      },
      starterCode: `class AccountTransaction {
  final String txnId;
  final String type;
  final double amount;
  final DateTime timestamp;

  AccountTransaction(this.txnId, this.type, this.amount) : timestamp = DateTime.now();
}

class BankAccountModel {
  final String accountNumber;
  final String holderName;
  double _balanceUSD = 0.0;
  final List<AccountTransaction> _history = [];

  BankAccountModel(this.accountNumber, this.holderName, double initialDeposit) {
    _balanceUSD = initialDeposit;
    _history.add(AccountTransaction('TXN-INIT', 'INITIAL_DEPOSIT', initialDeposit));
  }

  double get balanceUSD => _balanceUSD;
  List<AccountTransaction> get history => List.unmodifiable(_history);

  void deposit(double amount) {
    if (amount <= 0) return;
    _balanceUSD += amount;
    _history.add(AccountTransaction('TXN-\${_history.length + 1}', 'DEPOSIT', amount));
  }
}

void main() {
  var acc = BankAccountModel('000-112-998', 'Sokha Ly', 250.0);
  acc.deposit(100.0);

  print('Account Holder: \${acc.holderName}');
  print('Current Balance: \$\${acc.balanceUSD} USD');
  print('Total Recorded Transactions: \${acc.history.length}');
}`
    }
  ]
};
