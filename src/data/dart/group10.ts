import { Topic } from '../../types';

export const group10Topics: Topic = {
  id: "dart-error-handling-defensive",
  title: {
    en: "Group 10: Error Handling & Defensive Programming",
    km: "ក្រុមទី ១០៖ ការគ្រប់គ្រង Error និង Defensive Programming ក្នុង Dart"
  },
  lessons: [
    {
      id: "dart-10-1-exceptions-vs-errors",
      title: {
        en: "10.1 Exceptions (Exception) vs Errors (Error) in Dart",
        km: "១០.១ ភាពខុសគ្នារវាង Exception និង Error ក្នុង Dart"
      },
      content: {
        en: `# 10.1 Exceptions vs Errors

- **\`Exception\`**: Programmatic failures intended to be **caught and handled** at runtime (e.g., Network timeout, Format error).
- **\`Error\`**: Fatal structural or logic defects that should **not be caught** (e.g., \`OutOfMemoryError\`, \`StackOverflowError\`).`,
        km: `# ១០.១ ភាពខុសគ្នារវាង Exception និង Error

- **\`Exception\`**: ករណីបរាជ័យនៃកម្មវិធី ដែលត្រូវបានរចនាឡើងដើម្បី **ចាប់យក និងដោះស្រាយ (catch & handle)** saat runtime (ឧទាហរណ៍ Network timeout, Format error)។
- **\`Error\`**: កំហុសស្ថាបត្យកម្ម ឬតក្កវិទ្យាធ្ងន់ធ្ងរ ដែល **មិនគួរចាប់យកឡើយ** (ឧទាហរណ៍ OutOfMemoryError, StackOverflowError)។`
      },
      starterCode: `void main() {
  print('Exception class base type: \${Exception}');
  print('Error class base type: \${Error}');
}`
    },
    {
      id: "dart-10-2-throwing-rethrowing-exceptions",
      title: {
        en: "10.2 Throwing Exceptions (throw & rethrow)",
        km: "១០.២ ការបោះ និងបោះបន្ត Exception (throw និង rethrow)"
      },
      content: {
        en: `# 10.2 Throwing & Rethrowing

- **\`throw\`**: Raises an exception object.
- **\`rethrow\`**: Preserves the original call stack trace while re-propagating an exception up the call stack.`,
        km: `# ១០.២ ការបោះ និងបោះបន្ត Exception

- **\`throw\`**: បោះ Exception Object ចេញពីកន្លែងកើតហេតុ។
- **\`rethrow\`**: រក្សាទុក Call Stack Trace ដើម ខណៈពេលបោះ Exception នោះបន្តទៅកាន់ Caller ខាងលើ។`
      },
      starterCode: `void validateAge(int age) {
  if (age < 18) {
    throw FormatException('User must be at least 18 years old to open a Wing account.');
  }
}

void processRegistration(int age) {
  try {
    validateAge(age);
  } catch (e) {
    print('[LOG] Exception caught in service layer. Rethrowing...');
    rethrow; // Preserves call stack trace
  }
}

void main() {
  try {
    processRegistration(16);
  } catch (e) {
    print('[UI ALERT]: $e');
  }
}`
    },
    {
      id: "dart-10-3-catching-specific-exceptions",
      title: {
        en: "10.3 Catching Specific Exceptions (on Type catch(e, s))",
        km: "១០.៣ ការចាប់ Exception តាមប្រភេទ (on Type catch(e, s))"
      },
      content: {
        en: `# 10.3 Catching Specific Exceptions

Target specific exception classes using \`on ExceptionType catch(e, stackTrace)\`. The \`stackTrace\` object pinpoints exact line numbers where the exception originated.`,
        km: `# ១០.៣ ការចាប់ Exception តាមប្រភេទ

ចាប់យក Exception តាមប្រភេទជាក់លាក់ដោយប្រើ \`on ExceptionType catch(e, stackTrace)\`។ \`stackTrace\` បង្ហាញលេខបន្ទាត់កូដដែលបង្កកំហុសយ៉ាងច្បាស់។`
      },
      starterCode: `void parseKhqrPayload(String input) {
  try {
    int.parse(input);
  } on FormatException catch (e, stackTrace) {
    print('❌ Caught FormatException: \${e.message}');
    print('Stack Trace Snippet: \${stackTrace.toString().split("\n").first}');
  } catch (e) {
    print('Caught Unknown Exception: $e');
  }
}

void main() {
  parseKhqrPayload('INVALID_QR_NUMERIC_ID');
}`
    },
    {
      id: "dart-10-4-custom-exception-classes-result-pattern",
      title: {
        en: "10.4 Creating Custom Exception Classes & Result Pattern",
        km: "១០.៤ ការបង្កើត Custom Exception Classes និង Result Pattern"
      },
      content: {
        en: `# 10.4 Custom Exceptions & Result Pattern

Implement custom domain exceptions by implementing the \`Exception\` interface (e.g., \`class InsufficientFundsException implements Exception\`).`,
        km: `# ១០.៤ Custom Exceptions & Result Pattern

បង្កើត Custom Exception សម្រាប់ Domain កម្មវិធីរបស់អ្នក ដោយ implement \`Exception\` interface (ឧទាហរណ៍ \`class InsufficientFundsException implements Exception\`)។`
      },
      starterCode: `class InsufficientFundsException implements Exception {
  final double currentBalance;
  final double requestedAmount;

  InsufficientFundsException(this.currentBalance, this.requestedAmount);

  @override
  String toString() =>
      'InsufficientFundsException: Requested \$$requestedAmount USD but balance is only \$$currentBalance USD.';
}

void withdraw(double balance, double amount) {
  if (amount > balance) {
    throw InsufficientFundsException(balance, amount);
  }
}

void main() {
  try {
    withdraw(50.0, 150.0);
  } catch (e) {
    print(e);
  }
}`
    },
    {
      id: "dart-10-5-debug-assertions",
      title: {
        en: "10.5 Debug Assertions (assert) & Production Guards",
        km: "១០.៥ Debug Assertions (assert) និង Production Guards"
      },
      content: {
        en: `# 10.5 Debug Assertions

Use \`assert(condition, "Error message");\` for development checks. Assertion statements are automatically ignored in production AOT releases.`,
        km: `# ១០.៥ Debug Assertions

ប្រើប្រាស់ \`assert(condition, "Message");\` សម្រាប់ពិនិត្យកូដពេល Development។ Assert នឹងត្រូវមើលរំលងដោយស្វ័យប្រវត្តិ ក្នុង Production Release។`
      },
      starterCode: `void createAccount(String email, double initialDeposit) {
  assert(email.contains('@'), 'Email must contain @ symbol');
  assert(initialDeposit >= 5.0, 'Initial deposit must be at least $5');

  print('Account created for $email with \$$initialDeposit deposit.');
}

void main() {
  createAccount('reth@sabaycode.com', 50.0);
}`
    },
    {
      id: "dart-10-6-defensive-data-sanitization",
      title: {
        en: "10.6 Defensive Data Sanitization & Input Validation",
        km: "១០.៦ Defensive Data Sanitization និង Input Validation"
      },
      content: {
        en: `# 10.6 Defensive Data Sanitization

Sanitize and validate untrusted API data payloads before consuming them in application logic.`,
        km: `# ១០.៦ Defensive Data Sanitization

ពិនិត្យ និងសម្អាតទិន្នន័យ (Sanitize & Validate) ដែលទទួលពី 외부 API មុនពេលយកទៅប្រើក្នុង Logic កម្មវិធី។`
      },
      starterCode: `Map<String, dynamic> sanitizeUserPayload(Map<String, dynamic> rawJson) {
  return {
    'name': (rawJson['name'] as String?)?.trim() ?? 'Unknown User',
    'age': (rawJson['age'] is int) ? rawJson['age'] : 0,
    'email': (rawJson['email'] as String?)?.toLowerCase().trim() ?? '',
  };
}

void main() {
  var rawData = {'name': '  Dara Sok  ', 'age': 'invalid_string_age', 'email': ' DARA@GMAIL.COM '};
  var cleanData = sanitizeUserPayload(rawData);

  print('Cleaned Payload: $cleanData');
}`
    },
    {
      id: "dart-10-7-lab-khqr-api-client-resilience",
      title: {
        en: "10.7 Practical Lab: Robust KHQR API Client with Retry & Error Boundaries",
        km: "១០.៧ អនុវត្តជាក់ស្តែង៖ KHQR API Client ជាមួយ Retry & Error Boundaries"
      },
      content: {
        en: `# 10.7 Practical Lab: Robust API Client

Construct an API client with exponential backoff retry logic, custom network exception handling, and error boundary isolation.`,
        km: `# ១០.៧ អនុវត្តជាក់ស្តែង៖ KHQR API Client ជាមួយ Retry & Error Boundaries

សាងសង់ API Client ដែលមាន Retry logic ពេលដាច់ Network និងការគ្រប់គ្រង Error គ្រប់កម្រិត។`
      },
      starterCode: `Future<String> fetchKhqrTransactionStatus(String txnId, {int retryCount = 0}) async {
  try {
    if (retryCount < 2) {
      throw Exception('Network Timeout');
    }
    return 'SUCCESS_PAYMENT_VERIFIED';
  } catch (e) {
    if (retryCount >= 3) rethrow;
    print('⚠️ Connection failed. Retrying... (Attempt #\${retryCount + 1})');
    await Future.delayed(Duration(milliseconds: 300));
    return fetchKhqrTransactionStatus(txnId, retryCount: retryCount + 1);
  }
}

void main() async {
  String status = await fetchKhqrTransactionStatus('TXN-99812');
  print('Final Transaction Status: $status');
}`
    }
  ]
};
