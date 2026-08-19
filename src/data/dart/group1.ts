import { Topic } from '../../types';

export const group1Topics: Topic = {
  id: "dart-syntax-fundamentals",
  title: {
    en: "Group 1: Dart Syntax Fundamentals",
    km: "ក្រុមទី ១៖ វាក្យសម្ពន្ធគ្រឹះនៃភាសា Dart"
  },
  lessons: [
    {
      id: "dart-1-1-intro-architecture",
      title: {
        en: "1.1 Introduction to Dart 3 & Execution Architecture",
        km: "១.១ ស្វែងយល់ពី Dart 3 និងរចនាសម្ព័ន្ធដំណើរការ (Execution Architecture)"
      },
      content: {
        en: `# 1.1 Introduction to Dart 3 & Execution Architecture

Dart is an open-source, client-optimized programming language created by Google. It is engineered for high performance on multiple platforms including iOS, Android, Web, and Desktop.

### Key Architectural Pillars:
- **JIT (Just-In-Time) Compilation**: Used during development to power instant Hot Reload and fast stateful iterations.
- **AOT (Ahead-Of-Time) Compilation**: Compiles code directly into native ARM64 or x86 machine code for production releases.
- **Single-Threaded Event Loop**: Handles asynchronous UI rendering without race conditions or complex lock synchronization.

### Program Entry Point:
Every executable Dart program must begin execution inside a top-level \`main()\` function.`,
        km: `# ១.១ ស្វែងយល់ពី Dart 3 និងរចនាសម្ព័ន្ធដំណើរការ (Execution Architecture)

Dart គឺជាភាសាសរសេរកម្មវិធី Open-source ដែលអភិវឌ្ឍឡើងដោយ Google សម្រាប់បង្កើតកម្មវិធីលឿន និងមានប្រសិទ្ធភាពខ្ពស់លើ iOS, Android, Web, និង Desktop។

### សសរស្តម្ភរចនាសម្ព័ន្ធសំខាន់ៗ៖
- **JIT (Just-In-Time) Compilation**: ប្រើប្រាស់ពេលអភិវឌ្ឍ (Development) ផ្តល់សមត្ថភាព Hot Reload ផ្លាស់ប្តូរកូដភ្លាមៗ។
- **AOT (Ahead-Of-Time) Compilation**: បំប្លែងកូដទៅជា Native Machine Code (ARM64/x86) ដោយផ្ទាល់សម្រាប់ Release Production។
- **Single-Threaded Event Loop**: គ្រប់គ្រងប្រតិបត្តិការ Asynchronous ដោយមិនមានបញ្ហា Race Condition ឡើយ។

### ចំណុចចាប់ផ្តើមកម្មវិធី (Entry Point)៖
កម្មវិធី Dart ទាំងអស់ទាមទារអនុគមន៍ top-level \`main()\` ជាកន្លែងចាប់ផ្តើមរត់កូដ។`
      },
      starterCode: `void main() {
  print('=== WELCOME TO SABAYCODE DART 3 MASTERCLASS ===');
  print('Language Engine: Google Dart 3');
  print('Target Architecture: Native ARM64 / WebAssembly');
  print('Status: Execution Engine Ready 🚀');
}`
    },
    {
      id: "dart-1-2-variables-type-inference",
      title: {
        en: "1.2 Variables, Type Inference & The 'var' Keyword",
        km: "១.២ អថេរ (Variables) និង Type Inference ជាមួយពាក្យគន្លឹះ 'var'"
      },
      content: {
        en: `# 1.2 Variables, Type Inference & The 'var' Keyword

Dart is a strongly typed language. However, it uses sound static type inference so you don't always need to explicitly declare the type when initializing a variable.

### Variable Declaration Strategies:
- **Explicit Typing**: \`String storeName = "Aeon Mall Phnom Penh";\`
- **Type Inference with \`var\`**: \`var storeName = "Aeon Mall Phnom Penh";\` (Dart infers \`String\` automatically at compile-time).
- **Static Safety**: Once inferred as a \`String\`, you cannot reassign an \`int\` to \`storeName\`.`,
        km: `# ១.២ អថេរ (Variables) និង Type Inference ជាមួយពាក្យគន្លឹះ 'var'

Dart ជាភាសា Strongly-typed ប៉ុន្តែវាមានប្រព័ន្ធ Type Inference ដែលអាចស្គាល់ប្រភេទទិន្នន័យដោយស្វ័យប្រវត្តិ។

### វិធីប្រកាសអថេរ៖
- **ប្រកាស Type ច្បាស់លាស់**: \`String storeName = "ផ្សារទំនើប អ៊ីអន ភ្នំពេញ";\`
- **ប្រើ Type Inference ជាមួយ \`var\`**: \`var storeName = "ផ្សារទំនើប អ៊ីអន ភ្នំពេញ";\` (Dart កំណត់ថាជា \`String\` ស្វ័យប្រវត្តិ)។
- **សុវត្ថិភាព Type**: នៅពេលអថេរស្គាល់ជា \`String\` រួចហើយ អ្នកមិនអាចដាក់បញ្ចូលលេខ \`int\` ទៅក្នុងអថេរនោះបានឡើយ។`
      },
      starterCode: `void main() {
  // Explicitly typed variable
  String merchantName = 'ABA Bank Head Office';
  
  // Type inferred variable
  var location = 'Preah Monivong Blvd, Phnom Penh';
  var counterNumber = 12;
  
  print('Merchant: $merchantName');
  print('Location: $location');
  print('Active Counter: #$counterNumber');
}`
    },
    {
      id: "dart-1-3-primitive-data-types",
      title: {
        en: "1.3 Built-in Primitive Data Types (int, double, String, bool, num)",
        km: "១.៣ ប្រភេទទិន្នន័យគ្រឹះ (int, double, String, bool, num)"
      },
      content: {
        en: `# 1.3 Built-in Primitive Data Types

Dart provides a rich set of built-in data types:

- **\`int\`**: 64-bit integer numbers (e.g., \`42\`, \`-100\`).
- **\`double\`**: 64-bit IEEE 754 floating-point numbers (e.g., \`3.14159\`, \`4050.50\`).
- **\`num\`**: Supertype of both \`int\` and \`double\`.
- **\`String\`**: UTF-16 code units sequence for text representation.
- **\`bool\`**: Boolean values (\`true\` or \`false\`).`,
        km: `# ១.៣ ប្រភេទទិន្នន័យគ្រឹះ (int, double, String, bool, num)

Dart រួមបញ្ចូលប្រភេទទិន្នន័យគ្រឹះសំខាន់ៗ៖

- **\`int\`**: លេខគត់ 64-bit (ឧទាហរណ៍៖ \`42\`, \`-100\`)។
- **\`double\`**: លេខទសភាគ (ឧទាហរណ៍៖ \`3.14159\`, \`4050.50\`)។
- **\`num\`**: Parent class នៃទាំង \`int\` និង \`double\`។
- **\`String\`**: ខ្សែអក្សរ UTF-16 សម្រាប់រក្សាទុកអត្ថបទ។
- **\`bool\`**: តម្លៃតក្កវិទ្យា (\`true\` ឬ \`false\`)។`
      },
      starterCode: `void main() {
  int exchangeRateKHR = 4050;
  double itemUSD = 12.50;
  num totalCost = itemUSD * exchangeRateKHR; // num accepts both int and double
  String currencyName = 'Khmer Riel (KHR)';
  bool isPaid = true;

  print('Item Price: \$$itemUSD USD');
  print('Exchange Rate: $exchangeRateKHR KHR');
  print('Total Amount: $totalCost $currencyName');
  print('Payment Status Verified: $isPaid');
}`
    },
    {
      id: "dart-1-4-string-interpolation-formatting",
      title: {
        en: "1.4 String Interpolation, Concatenation & Multiline Formatting",
        km: "១.៤ String Interpolation, Concatenation និង Multiline Formatting"
      },
      content: {
        en: `# 1.4 String Interpolation & Multiline Formatting

Dart simplifies string manipulation with expression evaluation directly inside quotes.

### Features:
- **Simple Variable Evaluation**: \`"$variableName"\`
- **Expression Evaluation**: \`"\${expression}"\`
- **Multiline Strings**: Wrapped with triple quotes (\`"""..."""\` or \`'''...'''\`).
- **Raw Strings**: Prefixed with \`r\` to disable escape sequences (e.g., \`r"C:\\path\\file"\`).`,
        km: `# ១.៤ String Interpolation & Multiline Formatting

Dart ធ្វើឱ្យការបញ្ជូលតម្លៃអថេរទៅក្នុង String មានភាពងាយស្រួល និងឆាប់រហ័ស។

### លក្ខណៈពិសេស៖
- **ការបញ្ចូលតម្លៃអថេរធម្មតា**: \`"$variableName"\`
- **ការគណនាកន្សោមកូដ**: \`"\${expression}"\`
- **Multiline Strings**: ប្រើប្រាស់សញ្ញាសម្រង់បី (\`"""..."""\` ឬ \`'''...'''\`)។
- **Raw Strings**: ដាក់អក្សរ \`r\` ពីមុខដើម្បីកុំឱ្យបកស្រាយ Escape sequence (ឧទាហរណ៍ \`r"C:\\path\\file"\`)។`
      },
      starterCode: `void main() {
  String customer = 'Sophea Sok';
  double priceUSD = 45.00;
  double taxRate = 0.10; // 10% VAT

  String receipt = '''
=== SABAYCODE COFFEE PHNOM PENH ===
Customer: $customer
Subtotal: \$\${priceUSD.toStringAsFixed(2)}
VAT (10%): \$\${(priceUSD * taxRate).toStringAsFixed(2)}
Grand Total: \$\${(priceUSD * (1 + taxRate)).toStringAsFixed(2)}
===================================
''';

  print(receipt);
}`
    },
    {
      id: "dart-1-5-operators-arithmetic-relational",
      title: {
        en: "1.5 Arithmetic, Relational & Bitwise Operators",
        km: "១.៥ ប្រមាណវិធីគណនា ប្រៀបធៀប និង Bitwise Operators"
      },
      content: {
        en: `# 1.5 Arithmetic, Relational & Bitwise Operators

Dart provides standard arithmetic, equality, relational, and type-test operators.

### Key Operators:
- **Integer Division**: \`~/\` (e.g., \`13 ~/ 5\` returns \`2\`).
- **Type Test Operators**: \`is\` and \`is!\` (e.g., \`if (val is String)\`).
- **Bitwise Operators**: \`&\` (AND), \`|\` (OR), \`^\` (XOR), \`~\` (NOT), \`<<\` (Shift Left), \`>>\` (Shift Right).`,
        km: `# ១.៥ ប្រមាណវិធីគណនា ប្រៀបធៀប និង Bitwise Operators

Dart ផ្តល់ជូននូវប្រមាណវិធីគណនា ប្រៀបធៀប និងស្វែងយល់ពី Type យ៉ាងសម្បូរបែប។

### ប្រមាណវិធីសំខាន់ៗ៖
- **ប្រមាណវិធីចែកយកលេខគត់**: \`~/\` (ឧទាហរណ៍៖ \`13 ~/ 5\` ទទួលបាន \`2\`)។
- **ការពិនិត្យ Type**: \`is\` និង \`is!\` (ឧទាហរណ៍៖ \`if (val is String)\`)។
- **Bitwise Operators**: \`&\` (AND), \`|\` (OR), \`^\` (XOR), \`~\` (NOT), \`<<\` (Shift Left), \`>>\` (Shift Right)។`
      },
      starterCode: `void main() {
  int totalItems = 27;
  int itemsPerPage = 5;

  int fullPages = totalItems ~/ itemsPerPage; // Integer division
  int remainingItems = totalItems % itemsPerPage; // Modulo remainder

  print('Total Items: $totalItems');
  print('Full Pages needed: $fullPages');
  print('Items on last page: $remainingItems');

  Object unknownPayload = 'KHQR-2026-PAYLOAD';
  if (unknownPayload is String) {
    print('Payload Verified as String! Length: \${unknownPayload.length}');
  }
}`
    },
    {
      id: "dart-1-6-constants-const-vs-final",
      title: {
        en: "1.6 Immutable Constants: 'const' vs 'final' Deep Dive",
        km: "១.៦ ការប្រើប្រាស់តម្លៃថេរ៖ ការប្រៀបធៀប 'const' និង 'final' ស៊ីជម្រៅ"
      },
      content: {
        en: `# 1.6 Immutable Constants: 'const' vs 'final'

Both \`final\` and \`const\` are used to define variables whose values cannot be reassigned once initialized.

### Essential Differences:
- **\`final\`**: Initialized at **runtime**. Can hold values computed dynamically when the program executes (e.g., \`final now = DateTime.now();\`).
- **\`const\`**: Fixed at **compile-time**. Must be known before code compilation begins (e.g., \`const pi = 3.14159;\`).
- Memory Optimization: \`const\` objects are deeply immutable and canonicalized in memory.`,
        km: `# ១.៦ ការប្រើប្រាស់តម្លៃថេរ៖ ការប្រៀបធៀប 'const' និង 'final' ស៊ីជម្រៅ

ទាំង \`final\` និង \`const\` ត្រូវប្រើប្រាស់ដើម្បីកំណត់អថេរដែលមិនអាចកែប្រែតម្លៃបាន បន្ទាប់ពីកំណត់រួច។

### ភាពខុសគ្នាសំខាន់៖
- **\`final\`**: កំណត់តម្លៃពេល **Runtime** (ពេលកូដកំពុងរត់)។ អាចរក្សាទុកតម្លៃដែលគណនាឌីណាមិក (ឧទាហរណ៍៖ \`final now = DateTime.now();\`)។
- **\`const\`**: កំណត់តម្លៃពេល **Compile-time** (មុនពេលកូដរត់)។ ត្រូវតែដឹងតម្លៃមុនពេល Compile (ឧទាហរណ៍៖ \`const pi = 3.14159;\`)។
- ប្រសិទ្ធភាព Memory៖ \`const\` objects ត្រូវបានរក្សាទុកក្នុង Memory តែមួយកន្លែង canonicalized។`
      },
      starterCode: `void main() {
  // Compile-time constant
  const double vatRate = 0.10;
  const String countryCode = '+855';

  // Runtime constant
  final DateTime currentTimestamp = DateTime.now();
  final String sessionID = 'SESS-\${currentTimestamp.millisecondsSinceEpoch}';

  print('VAT Rate (Compile-time): \${vatRate * 100}%');
  print('Country Code: $countryCode');
  print('Session ID (Runtime final): $sessionID');
  print('Timestamp: $currentTimestamp');
}`
    },
    {
      id: "dart-1-7-explicit-type-conversion",
      title: {
        en: "1.7 Explicit Type Conversion & Parsing Strings",
        km: "១.៧ ការបំប្លែងប្រភេទទិន្នន័យ (Type Conversion) និង Parsing Strings"
      },
      content: {
        en: `# 1.7 Explicit Type Conversion & Parsing Strings

Converting between data types is a fundamental requirement when processing user input, API responses, or database records.

### Conversion Patterns:
- **String to int**: \`int.parse("4050")\` or safe parsing \`int.tryParse("abc")\` (returns \`null\` if invalid).
- **String to double**: \`double.parse("12.99")\` or \`double.tryParse("12.99")\`.
- **Number to String**: \`4050.toString()\` or formatted string \`12.9942.toStringAsFixed(2)\`.`,
        km: `# ១.៧ ការបំប្លែងប្រភេទទិន្នន័យ (Type Conversion) និង Parsing Strings

ការបំប្លែងប្រភេទទិន្នន័យរវាងអត្ថបទ និងលេខ គឺជាជំនាញចាំបាច់ពេលទទួលទិន្នន័យពី User Input, API, ឬ មូលដ្ឋានទិន្នន័យ។

### គំរូការបំប្លែង៖
- **String ទៅ int**: \`int.parse("4050")\` ឬ \`int.tryParse("abc")\` (ប្រគល់ \`null\` ប្រសិនបើសរសេរលេខមិនត្រឹមត្រូវ)។
- **String ទៅ double**: \`double.parse("12.99")\` ឬ \`double.tryParse("12.99")\`។
- **Number ទៅ String**: \`4050.toString()\` ឬ កំណត់ក្បៀសទសភាគ \`12.9942.toStringAsFixed(2)\`។`
      },
      starterCode: `void main() {
  String inputAmount = '150.75';
  String invalidInput = 'abc_99';

  // Safe parsing with tryParse
  double? parsedAmount = double.tryParse(inputAmount);
  double? safeFailed = double.tryParse(invalidInput);

  print('Parsed Valid Input: \$$parsedAmount USD');
  print('Parsed Invalid Input Safely: $safeFailed'); // prints null

  if (parsedAmount != null) {
    int khrEquivalent = (parsedAmount * 4050).round();
    print('KHR Equivalent: $khrEquivalent KHR');
  }
}`
    },
    {
      id: "dart-1-8-lab-exchange-rate-calculator",
      title: {
        en: "1.8 Practical Lab: Cambodian Exchange Rate Calculator",
        km: "១.៨ អនុវត្តជាក់ស្តែង៖ កម្មវិធីគណនារូបិយប័ណ្ណ KHR/USD សម្រាប់កម្ពុជា"
      },
      content: {
        en: `# 1.8 Practical Lab: Cambodian Exchange Rate Calculator

In this practical lab, apply variables, types, formatting, operators, and type conversion to build a currency converter script.

### Lab Objectives:
- Accept USD amount inputs.
- Calculate conversion to KHR at NBC standard rate (4,050 KHR/USD).
- Display formatted output breakdown including conversion fee percentage.`,
        km: `# ១.៨ អនុវត្តជាក់ស្តែង៖ កម្មវិធីគណនារូបិយប័ណ្ណ KHR/USD សម្រាប់កម្ពុជា

នៅក្នុងលំហាត់អនុវត្តនេះ អ្នកនឹងយកចំណេះដឹងអំពី Variables, Types, Formatting, Operators, និង Type Conversion មកសាងសង់ Script បំប្លែងប្រាក់ USD/KHR។

### គោលបំណង៖
- ទទួលទិន្នន័យទឹកប្រាក់ USD។
- គណនាបំប្លែងទៅជាប្រាក់ KHR តាមអត្រាស្តង់ដារធនាគារជាតិ ៤,០៥០ KHR/USD។
- បង្ហាញរបាយការណ៍បំប្លែងរួមទាំងកម្រៃសេវា 0.5%។`
      },
      starterCode: `void main() {
  const double nbcExchangeRate = 4050.0;
  const double serviceFeePercent = 0.5; // 0.5%
  
  double usdPayment = 100.00;
  
  double feeUSD = usdPayment * (serviceFeePercent / 100);
  double netUsdToConvert = usdPayment - feeUSD;
  double totalKHR = netUsdToConvert * nbcExchangeRate;

  print('=== NBC CURRENCY EXCHANGE CONVERTER ===');
  print('Initial USD Input : \$\${usdPayment.toStringAsFixed(2)}');
  print('Service Fee (0.5%): \$\${feeUSD.toStringAsFixed(2)}');
  print('Net USD Converted : \$\${netUsdToConvert.toStringAsFixed(2)}');
  print('Exchange Rate     : 1 USD = $nbcExchangeRate KHR');
  print('Total KHR Output  : \${totalKHR.toStringAsFixed(0)} KHR');
  print('======================================');
}`
    }
  ]
};
