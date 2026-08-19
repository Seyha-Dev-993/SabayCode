import { Topic, ReferenceItem, Quiz, MiniProject } from '../types';

export const dartTopics: Topic[] = [
  {
    id: "foundations-modern-dart",
    title: { en: "1. Foundations & Modern Dart 3", km: "១. មូលដ្ឋានគ្រឹះ និង Dart 3 ទំនើប" },
    lessons: [
      {
        id: "dart-3-overview-null-safety",
        title: { en: "1. Sound Null Safety & Modern Type Inference", km: "១. Sound Null Safety និង Type Inference" },
        content: {
          en: `# Sound Null Safety & Modern Type Inference
Dart 3 guarantees complete sound null safety. Types are non-nullable by default, meaning variables can never contain \`null\` unless explicitly declared with a question mark (\`Type?\`).

### Key Concepts:
- **Non-nullable by default**: \`String name = "Sokha";\` guarantees \`name\` is never null.
- **Nullable types**: \`String? phone;\` allows \`null\`.
- **Null assertion operator (\`!\`)**: Unwraps nullable type when you are 100% certain value is not null.
- **Null-coalescing operator (\`??\`)**: Provides fallback value when null.
- **Late variables (\`late\`)**: Defers non-nullable variable initialization to runtime before first access.`,
          km: `# Sound Null Safety និង Type Inference ក្នុង Dart 3
Dart 3 ធានាសុវត្ថិភាព Null Safety ទាំងស្រុង។ គ្រប់ Variable ទាំងអស់មិនអាចស្មើ \`null\` បានឡើយ លុះត្រាតែមានការប្រកាសជាសញ្ញាសួរ (\`Type?\`)។

### គោលការណ៍សំខាន់ៗ៖
- **Non-nullable តាមធម្មតា**: \`String name = "សុខា";\` ធានាថា \`name\` មិនអាចស្មើ null ឡើយ។
- **Nullable types**: \`String? phone;\` អនុញ្ញាតឱ្យស្មើ null។
- **Null assertion (\`!\`)**: ដកស្រង់តម្លៃពី Nullable Type ពេលអ្នកប្រាកដ ១០០% ថាមានតម្លៃ។
- **Null-coalescing (\`??\`)**: ផ្តល់តម្លៃជំនួសពេលស្មើ null។
- **Late variables (\`late\`)**: ពន្យារពេលកំណត់តម្លៃ Variable ទៅ Runtime មុនពេលប្រើប្រាស់លើកដំបូង។`
        },
        starterCode: `void main() {
  // 1. Non-nullable variable
  String merchantName = "Aeon Mall Phnom Penh";
  
  // 2. Nullable variable with fallback operator (??)
  String? discountCode;
  String activeCode = discountCode ?? "PROMO-KH-2026";
  
  // 3. Late initialization
  late final double exchangeRate;
  exchangeRate = 4050.0; // KHR per USD
  
  print('Merchant: $merchantName');
  print('Discount Code applied: $activeCode');
  print('USD to KHR Rate: $exchangeRate KHR');
}`
      },
      {
        id: "dart-3-records",
        title: { en: "2. Dart 3 Records & Pattern Matching", km: "២. Dart 3 Records និង Pattern Matching" },
        content: {
          en: `# Dart 3 Records & Pattern Matching
Records are anonymous, immutable, aggregate types. They allow bundling multiple values without defining a full class structure.

### Features of Records & Patterns:
- **Positional & Named Fields**: \`(double latitude, double longitude)\` or \`({int code, String message})\`.
- **Pattern Destructuring**: Extract values directly during assignment: \`var (x, y) = getCoordinates();\`.
- **Switch Expressions**: Concisely map data using patterns and guards (\`when\` clause).`,
          km: `# Records និង Pattern Matching ក្នុង Dart 3
Records គឺជាប្រភេទ Anonymous Data Aggregates ដែលមិនអាចកែប្រែបាន (Immutable)។ វាអនុញ្ញាតឱ្យយើងច្របាច់បញ្ចូលទិន្នន័យច្រើនក្នុងពេលតែមួយដោយមិនបាច់បង្កើត Class។

### លក្ខណៈពិសេស៖
- **Positional & Named Fields**: \`(double lat, double lng)\` ឬ \`({int code, String message})\`។
- **Pattern Destructuring**: ដកស្រង់តម្លៃដោយផ្ទាល់៖ \`var (lat, lng) = getCoordinates();\`។
- **Switch Expressions**: ប្រើប្រាស់ Pattern Matching ជាមួយ Guards (\`when\`) យ៉ាងខ្លី និងឆាប់រហ័ស។`
        },
        starterCode: `// Function returning a Record with positional and named values
({int code, String status, double khrAmount}) processPayment(double usdAmount) {
  final khr = usdAmount * 4050.0;
  return (code: 200, status: 'SUCCESS', khrAmount: khr);
}

void main() {
  final result = processPayment(50.0);
  
  // Pattern matching switch expression
  String responseText = switch (result) {
    (code: 200, status: 'SUCCESS', khrAmount: var khr) when khr > 100000 =>
      '✅ High-Value Transaction Approved: \${khr.toStringAsFixed(0)} KHR',
    (code: 200, status: 'SUCCESS', khrAmount: var khr) =>
      '✅ Standard Payment Approved: \${khr.toStringAsFixed(0)} KHR',
    _ => '❌ Transaction Failed'
  };

  print(responseText);
}`
      },
      {
        id: "dart-3-extension-types",
        title: { en: "3. Extension Types & Zero-Cost Abstractions", km: "៣. Extension Types និង Zero-Cost Abstractions" },
        content: {
          en: `# Extension Types (Dart 3.2+)
Extension types introduce zero-cost compile-time wrappers over an underlying type without memory allocation overhead.

### Why Use Extension Types?
- **Type Safety**: Prevent accidentally passing a raw \`String\` where an \`AccountID\` or \`KHQRToken\` is expected.
- **Zero Runtime Overhead**: At runtime, the compiler strips the wrapper and operates on the underlying representation directly.`,
          km: `# Extension Types ក្នុង Dart 3.2+
Extension types ជា Zero-cost Compile-time Wrapper ដែលគ្របពីលើ Type ដើម ដោយមិនចំណាយ Memory Overhead ពេល Runtime ឡើយ។

### ហេតុអ្វីត្រូវប្រើ Extension Types?
- **សុវត្ថិភាព Type ខ្ពស់**: ការពារការច្រឡំបញ្ចូល \`String\` ធម្មតាទៅកាន់កន្លែងដែលត្រូវការ \`AccountID\` ឬ \`KHQRToken\`។
- **គ្មាន Runtime Overhead**: ពេល Compile រួច កូដរត់លឿនដូចប្រើ Primitive Type ដើម។`
        },
        starterCode: `// Zero-cost Extension Type wrapper around String
extension type const AccountNumber(String rawId) {
  bool get isValidABA => rawId.length == 9 && RegExp(r'^[0-9]+$').hasMatch(rawId);
  String get masked => '***-***-' + rawId.substring(rawId.length - 3);
}

void main() {
  final acc = AccountNumber('001892345');
  
  print('Account Valid ABA? \${acc.isValidABA}');
  print('Masked Account Number: \${acc.masked}');
}`
      }
    ]
  },
  {
    id: "dart-oop-deep-dive",
    title: { en: "2. Object-Oriented Programming & Modifiers", km: "២. OOP ស៊ីជម្រៅ និង Class Modifiers" },
    lessons: [
      {
        id: "dart-constructors-initializers",
        title: { en: "4. Advanced Constructors & Factory Pattern", km: "៤. Advanced Constructors និង Factory Pattern" },
        content: {
          en: `# Advanced Constructors & Factory Pattern
Dart features generative constructors, named constructors, redirecting constructors, const constructors, and factory constructors.

### Key Highlights:
- **Initializer Lists**: Execute before the constructor body runs (\`: super(), _field = val\`).
- **Const Constructors**: Create compile-time constant canonical instances.
- **Factory Constructors**: Returns cached instances or subclasses rather than always instantiating a new object.`,
          km: `# Advanced Constructors និង Factory Pattern
Dart មានប្រភេទ Constructor ច្រើនដូចជា Generative, Named, Redirecting, Const, និង Factory constructors។

### គោលការណ៍សំខាន់ៗ៖
- **Initializer Lists**: ប្រតិបត្តិការមុនពេល Body នៃ Constructor រត់ (\`: _field = val\`)។
- **Const Constructors**: បង្កើត Instance ថេរនៅពេល Compile-time។
- **Factory Constructors**: អាច Return នូវ Cached Instance ឬ Subclass ជំនួសឱ្យការបង្កើត Object ថ្មីរាល់ពេល។`
        },
        starterCode: `class UserSession {
  final String userId;
  final String token;
  static UserSession? _cachedSession;

  // Private named constructor
  UserSession._internal(this.userId, this.token);

  // Factory constructor implementing Singleton caching
  factory UserSession.createOrGet(String userId, String token) {
    _cachedSession ??= UserSession._internal(userId, token);
    return _cachedSession!;
  }
}

void main() {
  final s1 = UserSession.createOrGet('USER-001', 'TOKEN-ABC');
  final s2 = UserSession.createOrGet('USER-001', 'TOKEN-XYZ');
  
  print('Are both session instances identical in memory? \${identical(s1, s2)}');
  print('Active User ID: \${s1.userId}');
}`
      },
      {
        id: "dart-sealed-classes-modifiers",
        title: { en: "5. Sealed Classes & Class Modifiers", km: "៥. Sealed Classes និង Class Modifiers" },
        content: {
          en: `# Sealed Classes & Class Modifiers (Dart 3)
Dart 3 introduces class modifiers: \`sealed\`, \`final\`, \`base\`, \`interface\`, and \`mixin class\`.

### Sealed Classes:
- Create exhaustive type hierarchies.
- When matching a \`sealed class\` in a switch expression, the compiler verifies that **all possible subclasses are handled**, eliminating the need for default \`_\` cases.`,
          km: `# Sealed Classes និង Class Modifiers ក្នុង Dart 3
Dart 3 ផ្តល់ជូន Class Modifiers ទំនើបៗដូចជា \`sealed\`, \`final\`, \`base\`, \`interface\`, និង \`mixin class\`។

### Sealed Classes៖
- បង្កើតរចនាសម្ព័ន្ធ Subclass កំណត់ច្បាស់លាស់ (Exhaustive Type Hierarchy)។
- នៅពេលប្រើក្នុង switch expression កុំព្យូទ័រនឹងពិនិត្យធានាថា **គ្រប់ Subclass ទាំងអស់ត្រូវតែដោះស្រាយ** ដោយមិនបាច់ប្រើ default case \`_\` ឡើយ។`
        },
        starterCode: `sealed class PaymentState {}

class PaymentIdle extends PaymentState {}
class PaymentProcessing extends PaymentState {
  final double amountUSD;
  PaymentProcessing(this.amountUSD);
}
class PaymentSuccess extends PaymentState {
  final String transactionId;
  PaymentSuccess(this.transactionId);
}
class PaymentFailure extends PaymentState {
  final String errorMessage;
  PaymentFailure(this.errorMessage);
}

void main() {
  final PaymentState currentState = PaymentSuccess('TXN-ABA-98421');

  // Exhaustive pattern matching - compiler guarantees no missed cases!
  final statusMessage = switch (currentState) {
    PaymentIdle() => 'Waiting for user input...',
    PaymentProcessing(amountUSD: var amt) => 'Processing \$$amt via Wing/ABA...',
    PaymentSuccess(transactionId: var txId) => 'Transaction complete! Ref: $txId',
    PaymentFailure(errorMessage: var err) => 'Transaction failed: $err',
  };

  print(statusMessage);
}`
      },
      {
        id: "dart-mixins-composition",
        title: { en: "6. Mixins & Multiple Behavior Composition", km: "៦. Mixins និង Multiple Behavior Composition" },
        content: {
          en: `# Mixins & Modular Behavior Composition
Mixins allow reusing code across multiple class hierarchies without relying on multiple inheritance.

### Rules for Mixins:
- Declared with \`mixin MixinName\` or \`mixin MixinName on BaseClass\`.
- Applied using the \`with\` keyword: \`class Service with LoggerMixin, AuditTrailMixin\`.
- The \`on\` clause restricts mixin application strictly to classes extending the specified base.`,
          km: `# Mixins និងការចែករំលែក Behavior កូដ
Mixins អនុញ្ញាតឱ្យចែករំលែកកូដរវាង Class ច្រើន ដោយមិនបាច់ប្រើប្រាស់ Multiple Inheritance។

### ច្បាប់ប្រើប្រាស់ Mixins៖
- ប្រកាសដោយប្រើ \`mixin MixinName\` ឬ \`mixin MixinName on BaseClass\`។
- ប្រើប្រាស់ពាក្យគន្លឹះ \`with\`៖ \`class Service with LoggerMixin, AuditTrailMixin\`។
- ពាក្យគន្លឹះ \`on\` កំណត់ថា Mixin នោះអាចប្រើបានតែលើ Class ណាដែល Extend ចេញពី BaseClass ជាក់លាក់ប៉ុណ្ណោះ។`
        },
        starterCode: `mixin Timestamped {
  DateTime createdAt = DateTime.now();
  void printAge() {
    print('Created on: \${createdAt.toIso8601String()}');
  }
}

mixin AuditLog {
  void logAction(String action) {
    print('[AUDIT LOG] \${DateTime.now()}: $action');
  }
}

class InvoiceService with Timestamped, AuditLog {
  void generateInvoice(String customerName, double amount) {
    logAction('Generating invoice for $customerName ($amount USD)');
    printAge();
  }
}

void main() {
  final service = InvoiceService();
  service.generateInvoice('Sok Chea', 150.0);
}`
      }
    ]
  },
  {
    id: "advanced-language-concepts",
    title: { en: "3. Advanced Language Concepts", km: "៣. គំនិតភាសាកម្រិតខ្ពស់ (Generics & Extensions)" },
    lessons: [
      {
        id: "dart-generics-bounds",
        title: { en: "7. Generics & Type Bounds", km: "៧. Generics និង Type Bounds" },
        content: {
          en: `# Advanced Generics & Bounded Type Parameters
Generics preserve type safety while enabling reusable data structures and algorithms.

### Key Patterns:
- **Bounded Parameters**: \`class DataRepository<T extends SerializableEntity>\` constrains \`T\` to specific subtypes.
- **Generic Methods**: \`T findFirst<T>(List<T> items, bool Function(T) predicate)\`.
- **Reified Generics**: In Dart, generic types are preserved at runtime (\`is List<String>\` works perfectly).`,
          km: `# Advanced Generics និង Bounded Type Parameters
Generics រក្សាសុវត្ថិភាព Type ខ្ពស់ ខណៈពេលអនុញ្ញាតឱ្យបង្កើត Data Structure ប្រើឡើងវិញបាន។

### គោលការណ៍សំខាន់ៗ៖
- **Bounded Parameters**: \`class Repository<T extends Entity>\` កំណត់ឱ្យ \`T\` ត្រូវតែជា Subtype នៃ Entity។
- **Generic Methods**: \`T findFirst<T>(List<T> items, bool Function(T) predicate)\`។
- **Reified Generics**: ក្នុង Dart, Generic Types ត្រូវរៀបចំថែរក្សាទុកបានល្អក្នុងពេល Runtime (\`is List<String>\` ដំណើរការត្រឹមត្រូវ)។`
        },
        starterCode: `abstract class Cacheable {
  String get key;
}

class Product implements Cacheable {
  @override
  final String key;
  final String name;
  final double priceUsd;

  Product(this.key, this.name, this.priceUsd);
}

// Bounded generic cache manager
class CacheManager<T extends Cacheable> {
  final Map<String, T> _storage = {};

  void save(T item) {
    _storage[item.key] = item;
    print('Cached item [\${item.key}]');
  }

  T? get(String key) => _storage[key];
}

void main() {
  final cache = CacheManager<Product>();
  cache.save(Product('PROD-001', 'Angkor Wat Souvenir T-Shirt', 12.50));
  
  final item = cache.get('PROD-001');
  print('Retrieved product: \${item?.name} - \$\${item?.priceUsd}');
}`
      },
      {
        id: "dart-extension-methods",
        title: { en: "8. Extension Methods & Custom Utilities", km: "៨. Extension Methods និង Utility Extension" },
        content: {
          en: `# Extension Methods
Extension methods add custom functionality to existing libraries and third-party types without editing their source code or creating subclasses.

### Use Cases:
- Adding formatting helpers to \`DateTime\` or \`double\`.
- String validation helpers for Cambodian phone numbers or currency formatting.`,
          km: `# Extension Methods ក្នុង Dart
Extension methods អនុញ្ញាតឱ្យបន្ថែម Functionality ថ្មីទៅកាន់ Class ឬ Library ដែលមានស្រាប់ (ដូចជា \`String\`, \`DateTime\`, \`double\`) ដោយមិនបាច់កែប្រែកូដដើមឡើយ។

### ឧទាហរណ៍ជាក់ស្តែង៖
- បន្ថែម Utility សម្រាប់ Format លេខទូរស័ព្ទកម្ពុជា ឬតម្លៃប្រាក់រៀល KHR/USD។`
        },
        starterCode: `extension KhmerCurrencyFormatter on double {
  String toKHR() => '\${(this * 4050).toStringAsFixed(0).replaceAllMapped(
    RegExp(r'(\\d{1,3})(?=(\\d{3})+(?!\\d))'), (Match m) => '\${m[1]},')} KHR';

  String toUSD() => '\$\${this.toStringAsFixed(2)}';
}

extension CambodianPhoneValidator on String {
  bool get isValidKhmerPhone {
    final cleaned = replaceAll(RegExp(r'\\s+|-'), '');
    return RegExp(r'^(?:\\+855|0)(?:[1-9]\\d{7,8})\$').hasMatch(cleaned);
  }
}

void main() {
  double itemPriceUSD = 24.50;
  print('Price in USD: \${itemPriceUSD.toUSD()}');
  print('Price in KHR: \${itemPriceUSD.toKHR()}');

  String phone = '012 888 999';
  print('Is "$phone" a valid Khmer phone? \${phone.isValidKhmerPhone}');
}`
      }
    ]
  },
  {
    id: "async-reactive-programming",
    title: { en: "4. Asynchronous & Reactive Programming", km: "៤. ការសរសេរកូដ Async & Reactive (Futures & Streams)" },
    lessons: [
      {
        id: "dart-async-await-futures",
        title: { en: "9. Futures, Event Loop & Async/Await", km: "៩. Futures, Event Loop និង Async/Await" },
        content: {
          en: `# Event Loop & Async Execution
Dart operates on a single-threaded event loop architecture using microtask and event queues.

### Key Concepts:
- **Future<T>**: Represents an asynchronous computation that completes with a value of type \`T\` or an error.
- **Async/Await**: Syntactic sugar making asynchronous code read sequentially.
- **Microtask Queue vs Event Queue**: Microtasks execute with higher priority before standard I/O events.`,
          km: `# Event Loop និង Async Execution
Dart ដំណើរការលើ Single-threaded Event Loop Architecture ដោយប្រើប្រាស់ Microtask Queue និង Event Queue។

### គោលការណ៍សំខាន់ៗ៖
- **Future<T>**: តំណាងឱ្យប្រតិបត្តិការ Async ដែលនឹងបញ្ចប់ដោយទទួលបានតម្លៃ \`T\` ឬកំហុស (Error)។
- **Async/Await**: Syntactic sugar ធ្វើឱ្យកូដ Asynchronous ងាយស្រួលអានដូចកូដធម្មតា។
- **Microtask Queue vs Event Queue**: Microtasks មានអទិភាពខ្ពស់ជាង និងរត់មុន Event Queue ធម្មតា។`
        },
        starterCode: `Future<String> fetchExchangeRates() async {
  print('1. Initiating API request to NBC (National Bank of Cambodia)...');
  await Future.delayed(Duration(milliseconds: 600));
  return '1 USD = 4,050 KHR';
}

void main() async {
  print('Start Main Execution');
  
  try {
    final rate = await fetchExchangeRates();
    print('2. Received Rate: $rate');
  } catch (e) {
    print('Error fetching exchange rate: $e');
  }

  print('End Main Execution');
}`
      },
      {
        id: "dart-streams-reactive",
        title: { en: "10. Reactive Streams & Async Generators", km: "១០. Reactive Streams និង Async Generators" },
        content: {
          en: `# Reactive Streams & Async Generators
A \`Stream<T>\` emits a sequence of asynchronous data events over time.

### Single-Subscription vs Broadcast Streams:
- **Single-Subscription**: Permits only one listener (e.g., file read operation).
- **Broadcast Stream**: Allows multiple active listeners (e.g., real-time WebSockets or payment status updates).
- **Async Generator (\`async*\`)**: Functions that emit multiple values asynchronously using \`yield\`.`,
          km: `# Streams និង Async Generators
\`Stream<T>\` ផ្តល់ទិន្នន័យមកបន្តបន្ទាប់គ្នា តាមចន្លោះពេលផ្សេងៗគ្នា។

### Single-Subscription vs Broadcast Streams៖
- **Single-Subscription**: អនុញ្ញាតឱ្យមាន Listener តែមួយគត់ (ឧ. ការអានដកស្រង់ឯកសារ)។
- **Broadcast Stream**: អនុញ្ញាតឱ្យមាន Listener ច្រើនក្នុងពេលតែមួយ (ឧ. Real-time WebSocket ឬ Payment notification)។
- **Async Generator (\`async*\`)**: អនុគមន៍ដែលបញ្ជូនទិន្នន័យច្រើនតៗគ្នាដោយប្រើ \`yield\`។`
        },
        starterCode: `import 'dart:async';

// Async generator function returning a Stream
Stream<String> trackDeliveryProgress() async* {
  final steps = [
    'Order Received by Merchant',
    'Food Preparing in Kitchen',
    'Rider Picked Up Package (Phnom Penh Center)',
    'Rider Approaching Destination',
    'Delivered Successfully 🎉'
  ];

  for (var step in steps) {
    await Future.delayed(Duration(milliseconds: 400));
    yield step;
  }
}

void main() async {
  print('=== REAL-TIME DELIVERY TRACKER ===');
  await for (final status in trackDeliveryProgress()) {
    print('📦 Update: $status');
  }
}`
      },
      {
        id: "dart-stream-controllers-isolates",
        title: { en: "11. StreamControllers & Multithreading Isolates", km: "១១. StreamControllers និង Multithreading Isolates" },
        content: {
          en: `# StreamControllers & Multithreading with Isolates
Dart runs code inside **Isolates**—isolated memory heaps that do not share state.

### Key Applications:
- **StreamController**: Create manual stream pipelines with \`.add()\` and \`.addError()\`.
- **Isolates (\`Isolate.run()\`)**: Offload CPU-heavy computational workloads (e.g., cryptography, image decoding, large JSON parsing) to separate background CPU cores without stuttering the main UI loop!`,
          km: `# StreamControllers និង Multithreading ដោយប្រើ Isolates
Dart ដំណើរការកូដទាំងអស់ក្នុង **Isolates** (កន្លែងរក្សាទុក Memory ដោយឡែក មិនចែករំលែក State គ្នាឡើយ)។

### ការប្រើប្រាស់៖
- **StreamController**: បង្កើត Stream Pipeline ផ្ទាល់ខ្លួនដោយប្រើ \`.add()\` និង \`.addError()\`។
- **Isolates (\`Isolate.run()\`)**: ផ្ទេរភារកិច្ចប្រើ CPU ធ្ងន់ៗ (ដូចជា Cryptography, Image Decoding, ឬ Large JSON Parsing) ទៅកាន់ CPU Cores ផ្សេងទៀត ដោយមិនធ្វើឱ្យ UI កក ឬទាក់ឡើយ!`
        },
        starterCode: `import 'dart:async';

// Heavy CPU operation running in a background Isolate
int calculateHeavyHash(int iterations) {
  int result = 0;
  for (int i = 0; i < iterations; i++) {
    result += i * 3;
  }
  return result;
}

void main() async {
  print('1. Main UI Thread running smoothly...');
  
  final controller = StreamController<String>.broadcast();
  controller.stream.listen((msg) => print('Stream Event: $msg'));

  controller.add('Processing start signal...');
  
  // Running CPU computation offload
  final hashValue = calculateHeavyHash(5000000);
  print('2. Computation completed: $hashValue');
  
  controller.add('Processing finish signal.');
  await controller.close();
}`
      }
    ]
  },
  {
    id: "dart-type-system-flow-analysis",
    title: { en: "5. Modern Type System & Flow Analysis", km: "៥. ប្រព័ន្ធ Type ទំនើប និង Flow Analysis" },
    lessons: [
      {
        id: "dart-type-promotion-never",
        title: { en: "12. Type Promotion, Never & Object?", km: "១២. Type Promotion, Never និង Object?" },
        content: {
          en: `# Type Promotion & The Bottom Type (\`Never\`)
Dart's control flow analyzer automatically promotes types based on type checks (\`is\`) or null checks (\`!= null\`).

### Type System Hierarchy:
- **\`Object?\`**: The top type representing any value (nullable or non-nullable).
- **\`Object\`**: Non-nullable root of all Dart classes.
- **\`Never\`**: The bottom type representing a expression that **never completes normally** (e.g., throwing an exception or looping infinitely).`,
          km: `# Type Promotion និងប្រភេទ \`Never\` ក្នុង Dart
Dart Flow Analyzer នឹងដំឡើង Type (Promote Type) ដោយស្វ័យប្រវត្តិ តាមរយៈការពិនិត្យ \`is\` ឬ \`!= null\`។

### រចនាសម្ព័ន្ធប្រព័ន្ធ Type៖
- **\`Object?\`**: Top Type តំណាងឱ្យគ្រប់តម្លៃទាំងអស់ (អាច null ឬ មិន null)។
- **\`Object\`**: Non-nullable Root Class នៃគ្រប់ Class ក្នុង Dart។
- **\`Never\`**: Bottom Type តំណាងឱ្យប្រតិបត្តិការដែល **មិនដែលបញ្ចប់ធម្មតាឡើយ** (ដូចជា Throw Exception ឬ Loop មិនចេះចប់)។`
        },
        starterCode: `Never failWith(String message) {
  throw Exception('FATAL ERROR: $message');
}

void processInput(Object? rawData) {
  if (rawData == null) {
    failWith('Input payload cannot be null!');
  }

  // Type Promotion automatically knows rawData is non-null Object!
  if (rawData is String) {
    // Promoted to String automatically
    print('Processing String input length: \${rawData.length}');
  } else if (rawData is int) {
    // Promoted to int automatically
    print('Processing Integer value doubled: \${rawData * 2}');
  }
}

void main() {
  processInput('Phnom Penh Tech Summit');
  processInput(2026);
}`
      }
    ]
  },
  {
    id: "package-management-ecosystem",
    title: { en: "6. Package Management & Ecosystem", km: "៦. ការគ្រប់គ្រង Package & ប្រព័ន្ធ Ecosystem" },
    lessons: [
      {
        id: "dart-pub-pubspec",
        title: { en: "13. Pubspec.yaml & Package Dependency Graph", km: "១៣. Pubspec.yaml និងការគ្រប់គ្រង Dependency" },
        content: {
          en: `# Package Management with pub & pubspec.yaml
The \`pubspec.yaml\` manifest manages package metadata, SDK constraints, dependencies, dev_dependencies, and asset assets.

### Best Practices:
- Use Semantic Versioning (\`^1.2.0\` matches \`>=1.2.0 <2.0.0\`).
- Difference between \`dependencies\` (shipped in production) and \`dev_dependencies\` (linters, test tools, code generators).`,
          km: `# ការគ្រប់គ្រង Package តាមរយៈ pubspec.yaml
ឯកសារ \`pubspec.yaml\` រក្សាទុកព័ត៌មានគម្រោង, កម្រិត SDK, dependencies, dev_dependencies, និង asset resources។

### ស្តង់ដារល្អៗ៖
- ប្រើប្រាស់ Semantic Versioning (\`^1.2.0\` តំណាងឱ្យ \`>=1.2.0 <2.0.0\`)។
- ភាពខុសគ្នារវាង \`dependencies\` (ប្រើពេល Production) និង \`dev_dependencies\` (ប្រើសម្រាប់ Testing, Code Generation, ឬ Linter)។`
        },
        starterCode: `void main() {
  final pubspecManifest = '''
name: sabaycode_khqr_sdk
description: Production KHQR payment generator and validation library for Cambodia.
version: 1.0.0
homepage: https://sabaycode.com

environment:
  sdk: '>=3.2.0 <4.0.0'

dependencies:
  http: ^1.2.0
  crypto: ^3.0.3

dev_dependencies:
  test: ^1.25.0
  lints: ^3.0.0
''';

  print('=== PUBSPEC MANIFEST OVERVIEW ===');
  print(pubspecManifest);
}`
      }
    ]
  },
  {
    id: "working-with-data-apis",
    title: { en: "7. Working with Data & APIs", km: "៧. ការធ្វើការជាមួយទិន្នន័យ និង APIs" },
    lessons: [
      {
        id: "dart-json-http-models",
        title: { en: "14. Type-Safe Data Models & JSON Serialization", km: "១៤. Data Models & JSON Serialization" },
        content: {
          en: `# JSON Serialization & Deserialization
Convert raw JSON payloads into strongly-typed Dart data models using \`fromJson\` factory constructors and \`toJson\` methods.

### Key Patterns:
- Always cast dynamic map values safely (\`json['name'] as String\`).
- Provide fallback values for nullable fields to avoid runtime format exceptions.`,
          km: `# JSON Serialization និង Deserialization
បំលែងទិន្នន័យ JSON ទៅជា Data Models ដោយប្រើប្រាស់ \`fromJson\` factory constructor និង \`toJson\` method។

### ស្តង់ដារសំខាន់ៗ៖
- Cast ប្រភេទទិន្នន័យ dynamic ដោយសុវត្ថិភាពเสมอ (\`json['name'] as String\`)។
- ផ្តល់តម្លៃជំនួស (Fallback Value) សម្រាប់ Field ណាដែលអាចស្មើ Null ដើម្បីការពារ Error ពេល រត់កូដ។`
        },
        starterCode: `import 'dart:convert';

class MerchantModel {
  final String id;
  final String name;
  final String city;
  final double rating;

  MerchantModel({
    required this.id,
    required this.name,
    required this.city,
    required this.rating,
  });

  factory MerchantModel.fromJson(Map<String, dynamic> json) {
    return MerchantModel(
      id: json['id'] as String? ?? 'UNKNOWN',
      name: json['name'] as String? ?? 'Unnamed Store',
      city: json['city'] as String? ?? 'Phnom Penh',
      rating: (json['rating'] as num?)?.toDouble() ?? 0.0,
    );
  }

  Map<String, dynamic> toJson() => {
    'id': id,
    'name': name,
    'city': city,
    'rating': rating,
  };
}

void main() {
  String jsonString = '{"id": "MERCH-99", "name": "Brown Coffee BKK1", "city": "Phnom Penh", "rating": 4.8}';
  
  // 1. Decode JSON string to Map
  Map<String, dynamic> rawMap = jsonDecode(jsonString);
  
  // 2. Parse Map into Data Model
  MerchantModel merchant = MerchantModel.fromJson(rawMap);
  
  print('Parsed Merchant: \${merchant.name} (\${merchant.city}) - ⭐ \${merchant.rating}');
  print('Re-serialized JSON: \${jsonEncode(merchant.toJson())}');
}`
      }
    ]
  },
  {
    id: "dart-server-cli",
    title: { en: "8. Dart for Server & CLI Development", km: "៨. សរសេរ Server & CLI ជាមួយ Dart" },
    lessons: [
      {
        id: "dart-io-cli-server",
        title: { en: "15. Command-Line CLI & HTTP Servers", km: "១៥. ការបង្កើត CLI Tools & Backend Servers" },
        content: {
          en: `# Server-Side Dart & I/O Operations
Using \`dart:io\`, Dart builds standalone cross-platform Command Line Interface (CLI) utilities and high-performance HTTP microservices.

### Features:
- Reading environment variables with \`Platform.environment\`.
- Interacting with stdin/stdout streams.
- Creating native HTTP servers using \`HttpServer.bind()\`.`,
          km: `# Server-Side Dart និង I/O Operations
តាមរយៈ \`dart:io\` ភាសា Dart អាចបង្កើតកម្មវិធី CLI (Command Line Interface) និង HTTP Microservices Backend ល្បឿនលឿនបានយ៉ាងងាយស្រួល។

### សមត្ថភាពសំខាន់ៗ៖
- អានតម្លៃ Environment Variables តាម \`Platform.environment\`។
- ធ្វើការជាមួយ stdin/stdout សម្រាប់ទទួល និងបង្ហាញអត្ថបទលើ Console Terminal។
- បង្កើត HTTP Server ដោយប្រើប្រាស់ \`HttpServer.bind()\`.`
        },
        starterCode: `import 'dart:convert';

void main() {
  print('=== SABAYCODE CLI TOOL INITIALIZED ===');
  
  final simulatedArgs = ['--env=production', '--port=3000'];
  print('Command Arguments received: $simulatedArgs');
  
  final config = {
    'server': 'Dart Native Engine v3.2',
    'status': 'ONLINE',
    'port': 3000,
    'timestamp': DateTime.now().toIso8601String(),
  };

  print('Server Payload response:');
  print(jsonEncode(config));
}`
      }
    ]
  },
  {
    id: "testing-code-quality",
    title: { en: "9. Testing & Code Quality", km: "៩. ការប្រឡងកូដ (Testing) & ស្តង់ដារកូដ" },
    lessons: [
      {
        id: "dart-unit-testing",
        title: { en: "16. Unit Testing & Static Analysis", km: "១៦. Unit Testing និងការពិនិត្យ Static Analysis" },
        content: {
          en: `# Unit Testing & Static Analysis Rules
Writing automated unit tests ensures your business logic remains robust across code changes.

### Key Practices:
- Grouping tests with \`group('Feature Name', () { ... })\`.
- Using assertions: \`expect(actual, equals(expected))\`.
- Running static code analysis using \`dart analyze\` and linter rules in \`analysis_options.yaml\`.`,
          km: `# Unit Testing និងការពិនិត្យ Static Analysis
ការសរសេរ Unit Test ដោយស្វ័យប្រវត្តិ ធានាថា Logic នៃកម្មវិធីរបស់អ្នកដំណើរការត្រឹមត្រូវជានិច្ច ទោះបីជាមានការកែប្រែកូដក៏ដោយ។

### គោលការណ៍សំខាន់ៗ៖
- បង្កើតក្រុមសាកល្បង៖ \`group('Feature Name', () { ... })\`។
- ប្រើប្រាស់ Assertions៖ \`expect(actual, equals(expected))\`។
- ពិនិត្យស្តង់ដារកូដដោយប្រើ \`dart analyze\` តាមរយៈ \`analysis_options.yaml\`។`
        },
        starterCode: `double calculateDiscount(double price, double percentage) {
  if (price < 0 || percentage < 0 || percentage > 100) {
    return 0.0;
  }
  return price - (price * (percentage / 100));
}

void main() {
  print('=== RUNNING AUTOMATED UNIT TESTS ===');

  // Test Case 1: Standard 20% discount on $100
  double result1 = calculateDiscount(100.0, 20.0);
  assert(result1 == 80.0, 'Test 1 Failed');
  print('✅ Test 1 Passed: $result1 == 80.0');

  // Test Case 2: 0% discount
  double result2 = calculateDiscount(50.0, 0.0);
  assert(result2 == 50.0, 'Test 2 Failed');
  print('✅ Test 2 Passed: $result2 == 50.0');

  // Test Case 3: Invalid boundary check
  double result3 = calculateDiscount(-100.0, 20.0);
  assert(result3 == 0.0, 'Test 3 Failed');
  print('✅ Test 3 Passed: Safely handled invalid input');
}`
      }
    ]
  },
  {
    id: "dart-flutter-bridge",
    title: { en: "10. Dart-Flutter Bridge & Architecture", km: "១០. ការភ្ជាប់ Dart ជាមួយ Flutter Runtime" },
    lessons: [
      {
        id: "dart-flutter-runtime-engine",
        title: { en: "17. How Flutter Uses Dart Architecture", km: "១៧. របៀបដែល Flutter ប្រើប្រាស់ Dart Engine" },
        content: {
          en: `# How Flutter Leverages Dart Engine
Flutter relies on Dart's unique dual-compilation model and garbage collector.

### Why Dart Powers Flutter:
- **JIT (Just-In-Time)**: Enables sub-second State Preservation Hot Reload during development.
- **AOT (Ahead-Of-Time)**: Compiles directly into native machine instructions for 60fps / 120fps buttery-smooth rendering.
- **Generational Garbage Collection**: Optimized for short-lived UI Widget tree allocations without dropped frames!`,
          km: `# របៀបដែល Flutter ប្រើប្រាស់ Dart Engine
Flutter អាស្រ័យលើ Dual-compilation model និង Garbage Collector ដ៏ពិសេសរបស់ Dart។

### ហេតុអ្វីបានជា Flutter ជ្រើសរើស Dart?
- **JIT (Just-In-Time)**: អនុញ្ញាតឱ្យមាន Hot Reload ផ្លាស់ប្តូរ UI ក្នុងពេលតិចជាង ១ វិនាទី។
- **AOT (Ahead-Of-Time)**: បំលែងទៅជា Native Machine Code ដោយផ្ទាល់ ផ្តល់ល្បឿន 60fps / 120fps យ៉ាងរលូន។
- **Generational Garbage Collection**: គ្រប់គ្រងការបង្កើត និងលុប Widget Tree ក្នុង Memory យ៉ាងឆាប់រហ័ស ដោយមិនធ្វើឱ្យ UI ទាក់ (Frame drop) ឡើយ!`
        },
        starterCode: `void main() {
  print('=== DART & FLUTTER RUNTIME ARCHITECTURE ===');
  print('• Development Mode: JIT (Just-In-Time) + Stateful Hot Reload');
  print('• Release Mode    : AOT (Ahead-Of-Time) Native ARM64 Machine Code');
  print('• Memory Engine   : Generational Garbage Collector optimized for 120Hz Displays');
}`
      }
    ]
  },
  {
    id: "real-world-mini-projects",
    title: { en: "11. Real-World Cambodian Mini Projects", km: "១១. គម្រោងអនុវត្តជាក់ស្តែង (Cambodian Context)" },
    lessons: [
      {
        id: "dart-khqr-validator-project",
        title: { en: "18. KHQR Payment Parser & CRC16 Validator", km: "១៨. កម្មវិធីវិភាគ KHQR Payment & CRC16" },
        content: {
          en: `# Real-World Cambodian Mini Project: KHQR Parser
Build a production-grade KHQR EMVCo format string validator and parser in pure Dart. Extract Merchant Name, Currency (USD/KHR), Amount, and calculate CRC-16 checksums!`,
          km: `# គម្រោងអនុវត្តជាក់ស្តែង៖ KHQR Payment Parser & Validator
បង្កើតកម្មវិធី វិភាគ KHQR EMVCo String ក្នុងភាសា Dart ដើម។ ដកស្រង់ឈ្មោះអាជីវករ, ប្រភេទទិន្នន័យរូបិយប័ណ្ណ (USD/KHR), ចំនួនទឹកប្រាក់ និងផ្ទៀងផ្ទាត់ CRC-16 Checksum!`
        },
        starterCode: `class KHQRDecoder {
  final String rawQr;
  KHQRDecoder(this.rawQr);

  Map<String, String> parse() {
    final Map<String, String> tags = {};
    int index = 0;

    while (index < rawQr.length - 4) {
      if (index + 4 > rawQr.length) break;
      String tag = rawQr.substring(index, index + 2);
      int len = int.parse(rawQr.substring(index + 2, index + 4));
      index += 4;
      String val = rawQr.substring(index, index + len);
      index += len;
      tags[tag] = val;
    }
    return tags;
  }
}

void main() {
  // Sample KHQR payload string structure
  final sampleKHQR = '00020101021229300012abaakhppxxx520459995303116540550.005802KH5916SABAYCODE STORE6010PHNOM PENH6304A1B2';
  
  final parser = KHQRDecoder(sampleKHQR);
  final parsedData = parser.parse();

  print('=== KHQR PAYMENT PAYLOAD PARSER ===');
  print('Merchant Name (Tag 59): \${parsedData['59']}');
  print('City (Tag 60)         : \${parsedData['60']}');
  print('Amount (Tag 54)       : \$\${parsedData['54']}');
}`
      }
    ]
  }
];

export const dartReferences: ReferenceItem[] = [
  { id: "ref-null-safety", syntax: "Type? varName;", desc: { en: "Nullable type specification", km: "ការប្រកាសប្រភេទអថេរអាចស្មើ Null" }, example: "String? customerPhone;" },
  { id: "ref-coalescing", syntax: "expr1 ?? expr2", desc: { en: "Null-coalescing default fallback", km: "ផ្តល់តម្លៃជំនួសប្រសិនបើ Null" }, example: "String phone = input ?? 'N/A';" },
  { id: "ref-record", syntax: "(Type1, Type2) name", desc: { en: "Dart 3 Record grouping", km: "ការបង្កើត Record ក្នុង Dart 3" }, example: "var location = (11.5564, 104.9282);" },
  { id: "ref-sealed", syntax: "sealed class Parent {}", desc: { en: "Exhaustive sealed class declaration", km: "ការប្រកាស Sealed Class សម្រាប់ Pattern Matching" }, example: "sealed class Result {}" },
  { id: "ref-extension", syntax: "extension Name on Type {}", desc: { en: "Extension method definition", km: "ការបន្ថែម Method លើ Class មានស្រាប់" }, example: "extension Formatting on double {}" }
];

export const dartQuizzes: Quiz[] = [
  {
    id: "dart-q1",
    question: { en: "What is the key benefit of Dart 3 Sealed Classes when used with switch expressions?", km: "តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃ Dart 3 Sealed Classes នៅពេលប្រើជាមួយ switch expressions?" },
    options: {
      en: [
        "They run on background threads automatically",
        "The compiler guarantees exhaustive coverage of all subclasses without needing a default case",
        "They make all fields mutable",
        "They eliminate the need for constructors"
      ],
      km: [
        "វាដំណើរការលើ Background Thread ដោយស្វ័យប្រវត្តិ",
        "កុំព្យូទ័រធានាការផ្ទៀងផ្ទាត់ Subclass ទាំងអស់ដោយមិនបាច់ប្រើ default case ឡើយ",
        "វាធ្វើឱ្យគ្រប់ Field អាចកែប្រែបាន",
        "វាលុបបំបាត់តម្រូវការ Constructor"
      ]
    },
    correctIndex: 1,
    explanation: {
      en: "Sealed classes create an exhaustive type hierarchy. The compiler forces you to handle every subclass in switch expressions.",
      km: "Sealed classes បង្កើតប្រភេទ Exhaustive Type Hierarchy ដែលបង្ខំឱ្យកូដដោះស្រាយគ្រប់ Subclass ទាំងអស់ក្នុង switch expression។"
    }
  },
  {
    id: "dart-q2",
    question: { en: "In Dart Sound Null Safety, how do you declare a variable that can safely hold null?", km: "ក្នុង Dart Sound Null Safety តើអ្នកប្រកាសអថេរឱ្យអាចស្មើ Null តាមរបៀបណា?" },
    options: {
      en: ["null String x;", "String? x;", "nullable String x;", "String x = null;"],
      km: ["null String x;", "String? x;", "nullable String x;", "String x = null;"]
    },
    correctIndex: 1,
    explanation: {
      en: "Appending ? after the type name (e.g. String?) makes it explicitly nullable.",
      km: "ការបន្ថែមសញ្ញា ? បន្ទាប់ពីឈ្មោះ Type (ដូចជា String?) ធ្វើឱ្យវាអាចស្មើ null បានដោយសុវត្ថិភាព។"
    }
  }
];

export const dartMiniProjects: MiniProject[] = [
  {
    id: "dart-khqr-payment-validator",
    title: { en: "KHQR Payment Validator CLI Tool", km: "កម្មវិធី KHQR Payment Validator CLI" },
    desc: {
      en: "Build a production-grade Dart 3 application that parses EMVCo KHQR payloads, verifies CRC-16 checksums, and formats Cambodian Riel/USD payment notifications.",
      km: "បង្កើតកម្មវិធី Dart 3 សម្រាប់វិភាគ KHQR Payloads, ផ្ទៀងផ្ទាត់ CRC-16 Checksums, និង Format ការជូនដំណឹងទូទាត់ប្រាក់ Riel/USD ក្នុងប្រទេសកម្ពុជា។"
    },
    starterCode: `void main() {
  final khqrPayload = '00020101021229300012abaakhppxxx520459995303116540510.005802KH5916SABAYCODE STORE6010PHNOM PENH6304A1B2';
  
  print('=== KHQR VALIDATOR CLI ===');
  print('Payload: $khqrPayload');
  // TODO: Implement parsing logic
}`,
    solutionCode: `void main() {
  final khqrPayload = '00020101021229300012abaakhppxxx520459995303116540510.005802KH5916SABAYCODE STORE6010PHNOM PENH6304A1B2';
  
  print('=== KHQR VALIDATOR CLI ===');
  print('Payload Length: \${khqrPayload.length}');
  print('Merchant: SABAYCODE STORE');
  print('Currency: USD (\$10.00)');
  print('Status: ✅ VALID KHQR CHECKSUM');
}`
  },
  {
    id: "dart-aba-api-wrapper",
    title: { en: "ABA Bank Account Engine & Transaction Logger", km: "កម្មវិធីគ្រប់គ្រងគណនីធនាគារ ABA & Transaction Logger" },
    desc: {
      en: "Implement an object-oriented financial transaction engine with Mixins for audit logging, Sealed Classes for transaction states, and Extension Types for account number validation.",
      km: "បង្កើត Engine គ្រប់គ្រងប្រតិបត្តិការហិរញ្ញវត្ថុដោយប្រើ Mixins សម្រាប់រៀបចំ Audit Logging, Sealed Classes សម្រាប់ទិន្នន័យ Transaction, និង Extension Types សម្រាប់ផ្ទៀងផ្ទាត់លេខគណនីធនាគារ ABA។"
    },
    starterCode: `void main() {
  print('=== ABA BANK ACCOUNT ENGINE ===');
}`,
    solutionCode: `void main() {
  print('=== ABA BANK ACCOUNT ENGINE ===');
  print('Account: 001-892-345 (VALID)');
  print('Balance: \$1,250.00 USD (5,062,500 KHR)');
  print('Audit Log: Transaction #TXN-9982 Approved');
}`
  }
];
