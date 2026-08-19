import { Topic } from '../../types';

export const group2Topics: Topic = {
  id: "dart-control-flow-logic",
  title: {
    en: "Group 2: Control Flow & Logic",
    km: "ក្រុមទី ២៖ លំហូរបញ្ជា និងតក្កវិទ្យា (Control Flow & Logic)"
  },
  lessons: [
    {
      id: "dart-2-1-if-else-conditionals",
      title: {
        en: "2.1 if, else if, and else Conditional Logic",
        km: "២.១ ការប្រើប្រាស់ លក្ខខណ្ឌ if, else if, និង else"
      },
      content: {
        en: `# 2.1 if, else if, and else Conditional Logic

Conditional statements control code execution based on boolean evaluation (\`true\` or \`false\`).

### Rules:
- Conditions inside \`if (...)\` must evaluate to a strict \`bool\` (Dart does not allow truthy/falsy implicit casting of integers or objects).
- Chain multiple checks using \`else if\` and catch default cases with \`else\`.`,
        km: `# ២.១ ការប្រើប្រាស់ លក្ខខណ្ឌ if, else if, និង else

Conditional statements គ្រប់គ្រងលំហូរដំណើរការកូដ ផ្អែកលើតម្លៃតក្កវិទ្យា (\`true\` ឬ \`false\`)។

### ច្បាប់ប្រើប្រាស់៖
- លក្ខខណ្ឌក្នុង \`if (...)\` ត្រូវតែជាប្រភេទទិន្នន័យ \`bool\` យ៉ាងពិតប្រាកដ (Dart មិនអនុញ្ញាត truthy/falsy integer implicit casting ឡើយ)។
- ភ្ជាប់ការពិនិត្យច្រើនតៗគ្នាដោយប្រើ \`else if\` និងចាប់យកករណីចុងក្រោយដោយប្រើ \`else\`។`
      },
      starterCode: `void main() {
  int accountBalanceKHR = 250000;
  int transferAmountKHR = 180000;

  print('Account Balance: $accountBalanceKHR KHR');
  print('Transfer Request: $transferAmountKHR KHR');

  if (transferAmountKHR <= 0) {
    print('❌ Invalid transfer amount specified.');
  } else if (transferAmountKHR > accountBalanceKHR) {
    print('❌ Transfer Failed: Insufficient funds in account.');
  } else {
    accountBalanceKHR -= transferAmountKHR;
    print('✅ Transfer Successful! Remaining Balance: $accountBalanceKHR KHR');
  }
}`
    },
    {
      id: "dart-2-2-ternary-operator-nested",
      title: {
        en: "2.2 Ternary Operators & Nested Conditionals",
        km: "២.២ Ternary Operators និង Nested Conditionals"
      },
      content: {
        en: `# 2.2 Ternary Operators & Nested Conditionals

The ternary operator \`condition ? exprIfTrue : exprIfFalse\` provides a compact one-line shorthand for simple if-else expressions.

### Usage Best Practices:
- Use ternary operators for inline variable assignments or UI rendering decisions.
- Avoid deeply nesting ternary operators to preserve readability.`,
        km: `# ២.២ Ternary Operators និង Nested Conditionals

Ternary operator \`condition ? exprIfTrue : exprIfFalse\` ផ្តល់ទម្រង់ខ្លីមួយបន្ទាត់សម្រាប់ជំនួស if-else ធម្មតា។

### ស្តង់ដារប្រើប្រាស់៖
- ប្រើ Ternary operator សម្រាប់កំណត់តម្លៃអថេរភ្លាមៗ ឬក្នុងការជ្រើសរើសទិន្នន័យបង្ហាញលើ UI។
- ចៀសវាងការតម្រៀប nested ternary ជាន់ច្រើនពេកដែលធ្វើឱ្យពិបាកអាន។`
      },
      starterCode: `void main() {
  double score = 88.5;
  
  // Concise ternary assignment
  String status = (score >= 50.0) ? 'PASSED' : 'FAILED';
  
  // Multi-branch ternary logic
  String gradeBadge = (score >= 90)
      ? 'A (Excellent)'
      : (score >= 80)
          ? 'B (Very Good)'
          : (score >= 70)
              ? 'C (Good)'
              : 'D/F (Needs Improvement)';

  print('Exam Score: $score');
  print('Status: $status');
  print('Grade Badge: $gradeBadge');
}`
    },
    {
      id: "dart-2-3-switch-statements-classic",
      title: {
        en: "2.3 Classic Switch Statements & Fall-through Behavior",
        km: "២.៣ Switch Statements បុរាណ និង Fall-through Behavior"
      },
      content: {
        en: `# 2.3 Classic Switch Statements

Classic \`switch\` statements match an integer, string, or enum value against distinct \`case\` targets.

### Key Rules:
- Non-empty \`case\` clauses must end with a terminating statement (\`break\`, \`continue\`, \`return\`, or \`throw\`).
- Use \`default:\` to handle unmatched cases.`,
        km: `# ២.៣ Switch Statements បុរាណ

Classic \`switch\` statement ផ្ទៀងផ្ទាត់តម្លៃលេខ ខ្សែអក្សរ ឬ Enum ធៀបនឹង \`case\` នីមួយៗ។

### ច្បាប់សំខាន់៖
- ប្លុក \`case\` ដែលមានកូដ ត្រូវតែបញ្ចប់ដោយ \`break\`, \`continue\`, \`return\`, ឬ \`throw\`។
- ប្រើ \`default:\` សម្រាប់ចាប់តម្លៃដែលមិនត្រួតស៊ីគ្នាជាមួយ case ណាទាំងអស់។`
      },
      starterCode: `void main() {
  String dayOfWeek = 'WEDNESDAY';

  switch (dayOfWeek) {
    case 'MONDAY':
    case 'TUESDAY':
    case 'WEDNESDAY':
    case 'THURSDAY':
    case 'FRIDAY':
      print('$dayOfWeek: Regular Tech Workday at SabayCode Hub 💻');
      break;
    case 'SATURDAY':
    case 'SUNDAY':
      print('$dayOfWeek: Weekend Hackathon & Workshops 🚀');
      break;
    default:
      print('Invalid Day Name Specified');
  }
}`
    },
    {
      id: "dart-2-4-switch-expressions-pattern-matching",
      title: {
        en: "2.4 Modern Dart 3 Switch Expressions & Pattern Guards",
        km: "២.៤ Modern Dart 3 Switch Expressions និង Pattern Guards (when)"
      },
      content: {
        en: `# 2.4 Modern Dart 3 Switch Expressions

Dart 3 introduced switch expressions, returning values directly without explicit \`break\` statements.

### Advantages:
- **Exhaustive Evaluation**: The compiler ensures all possible values are handled or a default \`_\` wildcard is provided.
- **Pattern Guards (\`when\`)**: Add conditional guards directly inside cases.`,
        km: `# ២.៤ Modern Dart 3 Switch Expressions

Dart 3 បានណែនាំ Switch Expressions ដែលអាច Return តម្លៃមកវិញដោយផ្ទាល់ ដោយមិនបាច់សរសេរ \`break\` ឡើយ។

### អត្ថប្រយោជន៍៖
- **Exhaustive Evaluation**: កុំព្យូទ័រធានាថាគ្រប់ករណីទាំងអស់ត្រូវតែដោះស្រាយ ឬមាន \`_\` (wildcard) ចាប់យក។
- **Pattern Guards (\`when\`)**: ថែមលក្ខខណ្ឌបន្ថែម \`when\` ក្នុង case នីមួយៗបានយ៉ាងងាយស្រួល។`
      },
      starterCode: `void main() {
  int statusCode = 200;
  int responseSizeKB = 1500;

  // Modern Dart 3 switch expression with 'when' pattern guard
  String statusMessage = switch (statusCode) {
    200 when responseSizeKB > 1000 => '✅ 200 OK (Large Payload Received)',
    200 => '✅ 200 OK (Standard Payload)',
    401 => '🔒 401 Unauthorized Access',
    404 => '🔍 404 Endpoint Not Found',
    500 => '💥 500 Internal Server Error',
    _ => '⚠️ Unknown Status Code ($statusCode)'
  };

  print(statusMessage);
}`
    },
    {
      id: "dart-2-5-for-loops-indexing",
      title: {
        en: "2.5 'for' Loops, Loop Counters & Index Iteration",
        km: "២.៥ ការប្រើប្រាស់ 'for' Loops និង Index Iteration"
      },
      content: {
        en: `# 2.5 'for' Loops & Index Iteration

Standard \`for\` loops execute code repeatedly while an index counter meets specified condition boundaries.

### Anatomy:
\`for (initialization; condition; increment/decrement) { ... }\``,
        km: `# ២.៥ ការប្រើប្រាស់ 'for' Loops និង Index Iteration

Standard \`for\` loop ប្រតិបត្តិការកូដជាជុំដដែលៗ ដរាបណាលក្ខខណ្ឌ Index ត្រូវបានបំពេញ។

### ទម្រង់កូដ៖
\`for (initialization; condition; increment/decrement) { ... }\``
      },
      starterCode: `void main() {
  print('=== COUNTDOWN TO ROCKET LAUNCH ===');
  
  for (int counter = 5; counter >= 1; counter--) {
    print('T-minus $counter seconds...');
  }
  
  print('🚀 IGNITION & LIFTOFF SUCCESSFUL!');
}`
    },
    {
      id: "dart-2-6-for-in-loops-collections",
      title: {
        en: "2.6 'for-in' Loops & Iteration Over Collections",
        km: "២.៦ ការប្រើប្រាស់ 'for-in' Loops លើប្រភេទទិន្នន័យ Collections"
      },
      content: {
        en: `# 2.6 'for-in' Loops & Iteration Over Collections

The \`for-in\` loop provides a clean, concise syntax for iterating sequentially over lists, sets, or iterable collections.`,
        km: `# ២.៦ ការប្រើប្រាស់ 'for-in' Loops លើប្រភេទទិន្នន័យ Collections

\`for-in\` loop ផ្តល់នូវវាក្យសម្ពន្ធស្អាត និងខ្លី សម្រាប់ការទាញអានធាតុនីមួយៗក្នុង Lists, Sets, ឬ Iterables។`
      },
      starterCode: `void main() {
  List<String> provinces = [
    'Phnom Penh',
    'Siem Reap',
    'Battambang',
    'Kampot',
    'Preah Sihanouk'
  ];

  print('=== CAMBODIAN PROVINCES LIST ===');
  int index = 1;
  for (var province in provinces) {
    print('$index. $province');
    index++;
  }
}`
    },
    {
      id: "dart-2-7-while-do-while-loops",
      title: {
        en: "2.7 'while' and 'do-while' Loops",
        km: "២. ៧ ការប្រើប្រាស់ 'while' និង 'do-while' Loops"
      },
      content: {
        en: `# 2.7 'while' and 'do-while' Loops

- **\`while\`**: Evaluates the condition **before** entering the loop body.
- **\`do-while\`**: Executes the loop body **at least once** before evaluating the condition.`,
        km: `# ២.៧ ការប្រើប្រាស់ 'while' និង 'do-while' Loops

- **\`while\`**: ផ្ទៀងផ្ទាត់លក្ខខណ្ឌ **មុនពេល** ចូលទៅក្នុងរង្វង់ Loop។
- **\`do-while\`**: ដំណើរការរង្វង់ Loop **យ៉ាងហោចណាស់ ១ ដង** មុនពេលផ្ទៀងផ្ទាត់លក្ខខណ្ឌ។`
      },
      starterCode: `void main() {
  int attempts = 0;
  bool isConnected = false;

  print('Connecting to Wing Bank Gateway...');
  
  while (!isConnected && attempts < 3) {
    attempts++;
    print('Connection attempt #$attempts...');
    if (attempts == 3) {
      isConnected = true;
    }
  }

  print('Final Gateway Status: \${isConnected ? "CONNECTED ✅" : "TIMEOUT ❌"}');
}`
    },
    {
      id: "dart-2-8-break-continue-labels",
      title: {
        en: "2.8 'break', 'continue' & Labeled Statements",
        km: "២.៨ ការប្រើប្រាស់ 'break', 'continue' និង Labeled Statements"
      },
      content: {
        en: `# 2.8 'break', 'continue' & Labeled Statements

- **\`break\`**: Immediately terminates loop execution.
- **\`continue\`**: Skips the remaining statement in the current iteration and jumps to the next cycle.
- **Labels**: Name nested loops to break out of outer loops directly (e.g., \`outerLoop: for (...)\`).`,
        km: `# ២.៨ ការប្រើប្រាស់ 'break', 'continue' និង Labeled Statements

- **\`break\`**: បញ្ចប់ការរត់រង្វង់ Loop ភ្លាមៗ។
- **\`continue\`**: រំលងកូដដែលនៅសល់ក្នុងជុំបច្ចុប្បន្ន រួចឈានទៅជុំបន្ទាប់។
- **Labels**: ដាក់ឈ្មោះឱ្យ Nested loops ដើម្បី break ចេញពីរង្វង់ខាងក្រៅដោយផ្ទាល់ (ឧទាហរណ៍៖ \`outerLoop: for (...)\`)។`
      },
      starterCode: `void main() {
  outerLoop:
  for (int row = 1; row <= 3; row++) {
    for (int col = 1; col <= 3; col++) {
      if (row == 2 && col == 2) {
        print('Target Found at [$row, $col]! Exiting all loops.');
        break outerLoop; // Exits outer loop directly
      }
      print('Processing Grid Cell [$row, $col]');
    }
  }
}`
    },
    {
      id: "dart-2-9-lab-tax-calculator-fizzbuzz",
      title: {
        en: "2.9 Practical Lab: Cambodian Salary Tax Calculator & FizzBuzz",
        km: "២.៩ អនុវត្តជាក់ស្តែង៖ កម្មវិធីគណនាពន្ធលើប្រាក់បៀវត្ស និង FizzBuzz"
      },
      content: {
        en: `# 2.9 Practical Lab: Salary Tax Calculator & FizzBuzz

Apply conditionals, switch expressions, and loops to build a salary tax estimator according to Cambodian General Department of Taxation tax bracket thresholds.`,
        km: `# ២.៩ អនុវត្តជាក់ស្តែង៖ កម្មវិធីគណនាពន្ធលើប្រាក់បៀវត្ស និង FizzBuzz

អនុវត្តការប្រើ conditionals, switch expressions, និង loops ដើម្បីគណនាអត្រាពន្ធលើប្រាក់បៀវត្សស្របតាមកម្រិតកំណត់របស់អគ្គនាយកដ្ឋានពន្ធដារកម្ពុជា។`
      },
      starterCode: `void main() {
  double monthlySalaryUSD = 1200.0;
  double khrSalary = monthlySalaryUSD * 4050.0;
  
  // Salary Tax Brackets (KHR)
  double taxRatePercent = switch (khrSalary) {
    <= 1500000 => 0.0,
    <= 2000000 => 5.0,
    <= 8500000 => 10.0,
    <= 12500000 => 15.0,
    _ => 20.0
  };

  double estimatedTaxUSD = monthlySalaryUSD * (taxRatePercent / 100);

  print('=== CAMBODIAN MONTHLY SALARY TAX REPORT ===');
  print('Gross Monthly Salary : \$\${monthlySalaryUSD.toStringAsFixed(2)} USD');
  print('Gross Equivalent KHR : \${khrSalary.toStringAsFixed(0)} KHR');
  print('Tax Bracket Rate     : $taxRatePercent%');
  print('Estimated Tax Payable: \$\${estimatedTaxUSD.toStringAsFixed(2)} USD');
  print('Net Take-Home Salary : \$\${(monthlySalaryUSD - estimatedTaxUSD).toStringAsFixed(2)} USD');
}`
    }
  ]
};
