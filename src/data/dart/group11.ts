import { Topic } from '../../types';

export const group11Topics: Topic = {
  id: "dart-standard-library-utilities",
  title: {
    en: "Group 11: Dart Standard Library & Utilities",
    km: "ក្រុមទី ១១៖ បណ្ណាល័យស្តង់ដារ Dart (dart:core, dart:math, dart:convert)"
  },
  lessons: [
    {
      id: "dart-11-1-dart-core-string-number-utilities",
      title: {
        en: "11.1 dart:core: String, Number & DateTime Utilities",
        km: "១១.១ dart:core៖ ឧបករណ៍គ្រប់គ្រង String, Number និង DateTime"
      },
      content: {
        en: `# 11.1 dart:core Utilities

\`dart:core\` is automatically imported into every Dart file without an explicit import statement.

### Key Utilities:
- String helpers: \`.padLeft()\`, \`.padRight()\`, \`.replaceAll()\`, \`.trim()\`.
- Number formatting: \`.toStringAsFixed(2)\`, \`.clamp(min, max)\`.`,
        km: `# ១១.១ dart:core Utilities

\`dart:core\` ត្រូវបាន Import ដោយស្វ័យប្រវត្តិ គ្រប់ឯកសារ Dart ទាំងអស់។

### ឧបករណ៍សំខាន់ៗ៖
- String helpers: \`.padLeft()\`, \`.padRight()\`, \`.replaceAll()\`, \`.trim()\`។
- Number formatting: \`.toStringAsFixed(2)\`, \`.clamp(min, max)\`។`
      },
      starterCode: `void main() {
  String rawCode = '  khqr-pay-8819  ';
  String cleanCode = rawCode.trim().toUpperCase();

  double speed = 145.0;
  double clampedSpeed = speed.clamp(0.0, 120.0); // Clamps to max 120

  print('Cleaned Code: $cleanCode');
  print('Clamped Highway Speed: $clampedSpeed km/h');
}`
    },
    {
      id: "dart-11-2-dart-math-random-trigonometry",
      title: {
        en: "11.2 dart:math: Random Generators, Trigonometry & Min/Max",
        km: "១១.២ dart:math៖ Random Generators, គណិតវិទ្យា និង Min/Max"
      },
      content: {
        en: `# 11.2 dart:math

Import \`import 'dart:math';\` for mathematical constants, trigonometry, min/max utility functions, and random number generation.`,
        km: `# ១១.២ dart:math

Import \`import 'dart:math';\` សម្រាប់ប្រើប្រាស់រូបមន្តគណិតវិទ្យា ត្រីកោណមាត្រ មុខងារ min/max និងបង្កើតលេខចៃដន្យ (Random)។`
      },
      starterCode: `import 'dart:math';

void main() {
  var random = Random();
  int otpCode = 100000 + random.nextInt(900000); // 6-digit OTP

  double highestPrice = max(45.0, 89.9);
  double piValue = pi;

  print('🔑 Generated 6-Digit Wing OTP: $otpCode');
  print('Highest Price: \$$highestPrice');
  print('Math PI Constant: $piValue');
}`
    },
    {
      id: "dart-11-3-dart-convert-json-encoding",
      title: {
        en: "11.3 dart:convert: JSON Encoding (jsonEncode) & Decoding (jsonDecode)",
        km: "១១.៣ dart:convert៖ JSON Encoding និង Decoding"
      },
      content: {
        en: `# 11.3 dart:convert (JSON)

Import \`import 'dart:convert';\` for converting Dart object maps to JSON strings (\`jsonEncode\`) and parsing JSON strings into Dart maps/lists (\`jsonDecode\`).`,
        km: `# ១១.៣ dart:convert (JSON)

Import \`import 'dart:convert';\` សម្រាប់បំប្លែង Dart Map ទៅជា JSON String (\`jsonEncode\`) និង បកស្រាយ JSON String មកជា Dart Map/List (\`jsonDecode\`)។`
      },
      starterCode: `import 'dart:convert';

void main() {
  Map<String, dynamic> userMap = {
    'uid': 'USR-8812',
    'name': 'Bopha Chan',
    'balanceUSD': 120.50,
    'roles': ['USER', 'MERCHANT']
  };

  // Serialize Map to JSON String
  String jsonString = jsonEncode(userMap);
  print('Serialized JSON String:');
  print(jsonString);

  // Deserialize JSON String back to Map
  Map<String, dynamic> parsedMap = jsonDecode(jsonString) as Map<String, dynamic>;
  print('Parsed User UID: \${parsedMap['uid']}');
}`
    },
    {
      id: "dart-11-4-dart-convert-base64-utf8",
      title: {
        en: "11.4 dart:convert: Base64 & UTF-8 Binary Encoding",
        km: "១១.៤ dart:convert៖ Base64 និង UTF-8 Binary Encoding"
      },
      content: {
        en: `# 11.4 Base64 & UTF-8 Encoding

- **\`utf8.encode(string)\`**: Encodes text into UTF-8 binary bytes (\`List<int>\`).
- **\`base64.encode(bytes)\`**: Encodes binary byte lists into Base64 ASCII strings.`,
        km: `# ១១.៤ Base64 & UTF-8 Encoding

- **\`utf8.encode(string)\`**: បំប្លែងអត្ថបទទៅជា UTF-8 binary bytes (\`List<int>\`)។
- **\`base64.encode(bytes)\`**: បំប្លែង binary bytes ទៅជា Base64 ASCII string។`
      },
      starterCode: `import 'dart:convert';

void main() {
  String secretPayload = 'SabayCode-Khmer-Secret-Key-2026';

  List<int> bytes = utf8.encode(secretPayload);
  String base64String = base64.encode(bytes);

  print('Original Payload : $secretPayload');
  print('UTF-8 Byte Array : $bytes');
  print('Base64 Encoded   : $base64String');
}`
    },
    {
      id: "dart-11-5-datetime-duration-calculations",
      title: {
        en: "11.5 DateTime & Duration: Time Calculations & Handling",
        km: "១១.៥ DateTime និង Duration សម្រាប់ការគណនាពេលវេលា"
      },
      content: {
        en: `# 11.5 DateTime & Duration

Perform date math, interval offsets, and ISO-8601 formatting using \`DateTime\` and \`Duration\`.`,
        km: `# ១១.៥ DateTime និង Duration

គណនា បូកដកពេលវេលា និងរៀបចំទម្រង់ ISO-8601 សម្រាប់ថ្ងៃខែឆ្នាំ ដោយប្រើប្រាស់ \`DateTime\` និង \`Duration\`។`
      },
      starterCode: `void main() {
  DateTime now = DateTime.now();
  DateTime expiryDate = now.add(Duration(days: 30));

  Duration difference = expiryDate.difference(now);

  print('Current Date : $now');
  print('Expiry Date  : $expiryDate');
  print('Days Remaining: \${difference.inDays} days (\${difference.inHours} hours)');
}`
    },
    {
      id: "dart-11-6-regexp-pattern-matching",
      title: {
        en: "11.6 RegExp: Pattern Matching, Regex Validation & Search",
        km: "១១.៦ RegExp៖ ការផ្ទៀងផ្ទាត់ និងស្វែងរកអត្ថបទតាម Regular Expressions"
      },
      content: {
        en: `# 11.6 RegExp Utilities

Construct regular expressions (\`RegExp(r'pattern')\`) for input validation and pattern extraction.`,
        km: `# ១១.៦ RegExp Utilities

បង្កើត Regular Expressions (\`RegExp(r'pattern')\`) សម្រាប់ការផ្ទៀងផ្ទាត់សំណេរ និងស្រង់យកព័ត៌មានពីអត្ថបទ។`
      },
      starterCode: `void main() {
  RegExp khmerPhoneRegex = RegExp(r'^(?:\+855|0)\d{8,9}$');

  List<String> testNumbers = ['+85512888999', '092111222', '12345'];

  for (var num in testNumbers) {
    print('Phone $num Valid? \${khmerPhoneRegex.hasMatch(num)}');
  }
}`
    },
    {
      id: "dart-11-7-lab-ecommerce-receipt-audit",
      title: {
        en: "11.7 Practical Lab: E-Commerce Receipt Generator & Audit Logger",
        km: "១១.៧ អនុវត្តជាក់ស្តែង៖ កម្មវិធីចេញវិក្កយបត្រ E-Commerce & Audit Log"
      },
      content: {
        en: `# 11.7 Practical Lab: Receipt Generator

Combine \`jsonEncode\`, \`DateTime\`, \`Random\`, and \`RegExp\` to build an automated receipt generator and security audit trail serializer.`,
        km: `# ១១.៧ អនុវត្តជាក់ស្តែង៖ កម្មវិធីចេញវិក្កយបត្រ E-Commerce & Audit Log

បូកបញ្ចូន \`jsonEncode\`, \`DateTime\`, \`Random\`, និង \`RegExp\` ដើម្បីបង្កើតប្រព័ន្ធចេញវិក្កយបត្រ និងសរសេរ កំណត់ត្រាសុវត្ថិភាព។`
      },
      starterCode: `import 'dart:convert';
import 'dart:math';

void main() {
  var random = Random();
  String receiptId = 'REC-\${DateTime.now().year}-\${10000 + random.nextInt(90000)}';

  Map<String, dynamic> receipt = {
    'receiptId': receiptId,
    'merchant': 'Brown Coffee Monivong',
    'timestamp': DateTime.now().toIso8601String(),
    'items': [
      {'name': 'Iced Latte', 'qty': 2, 'priceUSD': 3.50},
      {'name': 'Croissant', 'qty': 1, 'priceUSD': 2.50}
    ],
    'totalUSD': 9.50,
    'totalKHR': 9.50 * 4050
  };

  print('=== ELECTRONIC RECEIPT JSON ===');
  print(JsonEncoder.withIndent('  ').convert(receipt));
}`
    }
  ]
};
