import { Topic } from '../../types';

export const group6Topics: Topic = {
  id: "dart-advanced-oop-mixins",
  title: {
    en: "Group 6: Advanced OOP, Mixins & Class Modifiers",
    km: "ក្រុមទី ៦៖ Advanced OOP, Mixins និង Class Modifiers ក្នុង Dart 3"
  },
  lessons: [
    {
      id: "dart-6-1-abstract-classes-contracts",
      title: {
        en: "6.1 Abstract Classes (abstract class) & Interface Contracts",
        km: "៦.១ Abstract Classes និងកិច្ចសន្យា Interface"
      },
      content: {
        en: `# 6.1 Abstract Classes

An \`abstract class\` cannot be instantiated directly. It serves as an architectural base that defines abstract method contracts for subclasses.`,
        km: `# ៦.១ Abstract Classes

\`abstract class\` មិនអាចបង្កើតជា Object (Instantiate) ផ្ទាល់បានឡើយ។ វាដើរតួជាគ្រឹះប្លង់ស្ថាបត្យកម្ម ដែលកំណត់កិច្ចសន្យា Abstract Methods សម្រាប់ Subclasses។`
      },
      starterCode: `abstract class NotificationProvider {
  void sendNotification(String userId, String message);
}

class TelegramBotNotifier extends NotificationProvider {
  final String botToken;
  TelegramBotNotifier(this.botToken);

  @override
  void sendNotification(String userId, String message) {
    print('✈️ Telegram Bot Alert to [$userId]: "$message"');
  }
}

void main() {
  NotificationProvider provider = TelegramBotNotifier('BOT-TOKEN-8891');
  provider.sendNotification('USER-99', 'Your KHQR payment of $25 USD was received!');
}`
    },
    {
      id: "dart-6-2-implicit-interfaces-implements",
      title: {
        en: "6.2 Implicit Interfaces & 'implements' Keyword",
        km: "៦.២ Implicit Interfaces និងការប្រើប្រាស់ពាក្យ 'implements'"
      },
      content: {
        en: `# 6.2 Implicit Interfaces

Every class in Dart implicitly defines an interface containing all its instance fields and methods. Any class can implement another class interface using \`implements\`.`,
        km: `# ៦.២ Implicit Interfaces

គ្រប់ class ទាំងអស់ក្នុង Dart បង្កើតនូវ Implicit Interface ដោយស្វ័យប្រវត្តិ។ Class ផ្សេងទៀតអាចអនុវត្តតាម Interface នោះដោយប្រើប្រាស់ពាក្យ \`implements\`។`
      },
      starterCode: `class PrintableReport {
  void printReport() {
    print('Standard Printable Report');
  }
}

class PdfExporter implements PrintableReport {
  @override
  void printReport() {
    print('📄 Exporting document as high-resolution PDF file...');
  }
}

void main() {
  PrintableReport exporter = PdfExporter();
  exporter.printReport();
}`
    },
    {
      id: "dart-6-3-mixins-composition",
      title: {
        en: "6.3 Mixins (mixin) & Behavior Composition with 'with'",
        km: "៦.៣ Mixins (mixin) និងការបូកបញ្ចូល Behavior ដោយប្រើប្រាស់ 'with'"
      },
      content: {
        en: `# 6.3 Mixins & Behavior Composition

Mixins reuse code across multiple class hierarchies without single-inheritance limitations. Use the \`mixin\` keyword and attach with \`with\`.`,
        km: `# ៦.៣ Mixins & Behavior Composition

Mixins អនុញ្ញាតឱ្យចែករំលែកកូដរវាង class hierarchies ដោយមិនរងការកម្រិតនៃ Single-inheritance ឡើយ។ ប្រើប្រាស់ពាក្យ \`mixin\` និងភ្ជាប់ដោយប្រើ \`with\`។`
      },
      starterCode: `mixin Logger {
  void logInfo(String message) {
    print('[INFO \${DateTime.now()}]: $message');
  }
}

mixin AuditTracker {
  void recordAuditTrail(String action, String user) {
    print('[AUDIT]: User $user performed $action');
  }
}

class OrderService with Logger, AuditTracker {
  void placeOrder(String orderId, String username) {
    logInfo('Placing Order #$orderId');
    recordAuditTrail('CREATE_ORDER', username);
  }
}

void main() {
  var service = OrderService();
  service.placeOrder('ORD-9912', 'Dara Sok');
}`
    },
    {
      id: "dart-6-4-restricted-mixins-on-clause",
      title: {
        en: "6.4 Restricted Mixins (mixin ... on BaseClass)",
        km: "៦.៤ Restricted Mixins (mixin ... on BaseClass)"
      },
      content: {
        en: `# 6.4 Restricted Mixins with 'on'

Restrict mixin application to classes extending a specific base class using the \`on\` clause (\`mixin LoggingEngine on ServiceBase\`).`,
        km: `# ៦.៤ Restricted Mixins ជាមួយពាក្យ 'on'

កំណត់សិទ្ធិប្រើប្រាស់ Mixin ឱ្យអនុវត្តបានតែលើ class ណាដែលបន្តវេនពី Base class ជាក់លាក់មួយ (\`mixin LoggingEngine on ServiceBase\`)។`
      },
      starterCode: `abstract class BaseComponent {
  String get componentId;
}

mixin ComponentLifecycle on BaseComponent {
  void initState() {
    print('Lifecycle Init for Component: $componentId');
  }
}

class NavigationBar extends BaseComponent with ComponentLifecycle {
  @override
  String get componentId => 'NAV_BAR_HEADER';
}

void main() {
  var nav = NavigationBar();
  nav.initState();
}`
    },
    {
      id: "dart-6-5-sealed-classes-pattern-matching",
      title: {
        en: "6.5 Sealed Classes (sealed) & Exhaustive Pattern Matching",
        km: "៦.៥ Sealed Classes (sealed) និង Exhaustive Pattern Matching"
      },
      content: {
        en: `# 6.5 Sealed Classes in Dart 3

Sealed classes create a closed hierarchy of subtypes. The compiler guarantees that switch expressions handling a sealed class are **exhaustive**.`,
        km: `# ៦.៥ Sealed Classes ក្នុង Dart 3

Sealed class បង្កើតនូវរចនាសម្ព័ន្ធ subtype បិទជិត។ Compiler ធានាថា switch expressions ដែលដោះស្រាយលើ sealed class គឺគ្រប់ជ្រុងជ្រោយ **exhaustive** ដោយមិនបោះ error រំលងករណីណាឡើយ។`
      },
      starterCode: `sealed class PaymentState {}

class PaymentInitial extends PaymentState {}
class PaymentLoading extends PaymentState {}
class PaymentSuccess extends PaymentState {
  final String txnId;
  PaymentSuccess(this.txnId);
}
class PaymentFailure extends PaymentState {
  final String errorMessage;
  PaymentFailure(this.errorMessage);
}

String renderPaymentUI(PaymentState state) {
  // Compiler enforces matching EVERY subtype of PaymentState!
  return switch (state) {
    PaymentInitial() => 'Render Payment Button',
    PaymentLoading() => 'Render Spinner Loading...',
    PaymentSuccess(txnId: var id) => 'Render Success Dialog (Txn: $id)',
    PaymentFailure(errorMessage: var err) => 'Render Error Alert ($err)'
  };
}

void main() {
  print(renderPaymentUI(PaymentLoading()));
  print(renderPaymentUI(PaymentSuccess('KHQR-9901')));
}`
    },
    {
      id: "dart-6-6-class-modifiers-base-final-interface",
      title: {
        en: "6.6 Class Modifiers: base, final, interface & mixin class",
        km: "៦.៦ Class Modifiers ក្នុង Dart 3 (base, final, interface, mixin class)"
      },
      content: {
        en: `# 6.6 Class Modifiers in Dart 3

Dart 3 provides fine-grained control over library boundaries:
- **\`final class\`**: Cannot be extended or implemented outside its library.
- **\`base class\`**: Can be extended, but NOT implemented.
- **\`interface class\`**: Can be implemented, but NOT extended outside its library.`,
        km: `# ៦.៦ Class Modifiers ក្នុង Dart 3

Dart 3 ផ្តល់នូវការគ្រប់គ្រងសិទ្ធិ class យ៉ាងម៉ត់ចត់៖
- **\`final class\`**: មិនអាចបន្តវេន (extend) ឬ implement នៅក្រៅ library ឡើយ។
- **\`base class\`**: អាច extend បាន ប៉ុន្តែមិនអាច implement ឡើយ។
- **\`interface class\`**: អាច implement បាន ប៉ុន្តែមិនអាច extend នៅក្រៅ library ឡើយ។`
      },
      starterCode: `final class SecurityToken {
  final String token;
  SecurityToken(this.token);
}

void main() {
  var t = SecurityToken('JWT-KEY-SECURE-9988');
  print('Final Security Token: \${t.token}');
}`
    },
    {
      id: "dart-6-7-operator-overloading",
      title: {
        en: "6.7 Operator Overloading (operator +, operator ==, hashCode)",
        km: "៦.៧ Operator Overloading (operator +, operator ==, hashCode)"
      },
      content: {
        en: `# 6.7 Operator Overloading

Customize standard operators (such as \`+\`, \`==\`, \`[]\`) for your custom class objects. Always override \`hashCode\` when overriding \`==\`.`,
        km: `# ៦.៧ Operator Overloading

កែប្រែប្រមាណវិធីស្តង់ដារ (ដូចជា \`+\`, \`==\`, \`[]\`) សម្រាប់ objects នៃ class ផ្ទាល់ខ្លួនរបស់អ្នក។ ត្រូវ override \`hashCode\` ជានិច្ចនៅពេល override \`==\`។`
      },
      starterCode: `class Money {
  final double amount;
  final String currency;

  Money(this.amount, this.currency);

  Money operator +(Money other) {
    if (currency != other.currency) {
      throw ArgumentError('Cannot add money with different currencies ($currency vs \${other.currency})');
    }
    return Money(amount + other.amount, currency);
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Money && runtimeType == other.runtimeType && amount == other.amount && currency == other.currency;

  @override
  int get hashCode => amount.hashCode ^ currency.hashCode;
}

void main() {
  var m1 = Money(50.0, 'USD');
  var m2 = Money(30.0, 'USD');
  var total = m1 + m2;

  print('Combined Money: \${total.amount} \${total.currency}');
  print('Is m1 equal to another Money(50.0, "USD")? \${m1 == Money(50.0, "USD")}');
}`
    },
    {
      id: "dart-6-8-extension-methods-utilities",
      title: {
        en: "6.8 Extension Methods (extension ... on Type) & Utilities",
        km: "៦.៨ Extension Methods (extension ... on Type)"
      },
      content: {
        en: `# 6.8 Extension Methods

Extension methods add new functionality to existing third-party libraries or SDK built-in types without modifying the underlying source code.`,
        km: `# ៦.៨ Extension Methods

Extension methods បន្ថែមមុខងារថ្មីៗទៅលើប្រភេទទិន្នន័យដែលមានស្រាប់ (ដូចជា String, double, DateTime) ដោយមិនបាច់ប៉ះពាល់កូដដើមឡើយ។`
      },
      starterCode: `extension KhmerCurrencyFormatter on double {
  String toUsdFormat() => '\$\${toStringAsFixed(2)} USD';
  String toKhrFormat() => '\${(this * 4050).round()} KHR';
}

extension StringSanitizer on String {
  bool get isValidKhmerPhone => RegExp(r'^\+855\d{8,9}$').hasMatch(this);
}

void main() {
  double itemPrice = 14.50;
  print('Formatted USD: \${itemPrice.toUsdFormat()}');
  print('Formatted KHR: \${itemPrice.toKhrFormat()}');

  String phone = '+85512888999';
  print('Phone $phone Valid: \${phone.isValidKhmerPhone}');
}`
    },
    {
      id: "dart-6-9-lab-khqr-crc16-decoder",
      title: {
        en: "6.9 Practical Lab: KHQR Payment Decoder & EMVCo CRC Engine",
        km: "៦.៩ អនុវត្តជាក់ស្តែង៖ កម្មវិធីបកស្រាយ KHQR Payment & EMVCo Engine"
      },
      content: {
        en: `# 6.9 Practical Lab: KHQR Payment Decoder

Combine abstract classes, sealed classes, mixins, and extensions to construct a production KHQR EMVCo format validator and payload parser.`,
        km: `# ៦.៩ អនុវត្តជាក់ស្តែង៖ កម្មវិធីបកស្រាយ KHQR Payment & EMVCo Engine

បូកបញ្ចូន abstract classes, sealed classes, mixins, និង extensions ដើម្បីសាងសង់ប្រព័ន្ធពិនិត្យ និងបកស្រាយ KHQR EMVCo Standard។`
      },
      starterCode: `sealed class KhqrParseResult {}

class KhqrSuccess extends KhqrParseResult {
  final String merchantName;
  final double amountUSD;
  KhqrSuccess(this.merchantName, this.amountUSD);
}

class KhqrError extends KhqrParseResult {
  final String reason;
  KhqrError(this.reason);
}

class KhqrParser {
  static KhqrParseResult parse(String payload) {
    if (!payload.startsWith('000201')) {
      return KhqrError('Invalid EMVCo Payload Header');
    }
    return KhqrSuccess('Brown Coffee Monivong', 4.50);
  }
}

void main() {
  String sampleQr = '00020101021229150010A000000770';
  var result = KhqrParser.parse(sampleQr);

  String uiOutput = switch (result) {
    KhqrSuccess(merchantName: var m, amountUSD: var a) => '✅ KHQR Validated! Paying \$$a to $m',
    KhqrError(reason: var r) => '❌ QR Parse Error: $r'
  };

  print(uiOutput);
}`
    }
  ]
};
