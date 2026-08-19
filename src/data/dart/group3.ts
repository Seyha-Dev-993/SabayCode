import { Topic } from '../../types';

export const group3Topics: Topic = {
  id: "dart-functions-closures",
  title: {
    en: "Group 3: Functions & Closures",
    km: "ក្រុមទី ៣៖ អនុគមន៍ និង Closures (Functions & Closures)"
  },
  lessons: [
    {
      id: "dart-3-1-function-declarations-returns",
      title: {
        en: "3.1 Function Declarations, Return Types & 'void'",
        km: "៣.១ ការប្រកាស អនុគមន៍, Return Types និងពាក្យ 'void'"
      },
      content: {
        en: `# 3.1 Function Declarations & Return Types

Functions encapsulate reusable logic into modular blocks.

### Key Rules:
- Always declare explicit return types (e.g., \`String\`, \`int\`, \`double\`, \`bool\`).
- Use \`void\` when a function performs side effects and returns no value.`,
        km: `# ៣.១ ការប្រកាស អនុគមន៍, Return Types និងពាក្យ 'void'

Functions ច្របាច់បញ្ចូលកូដ reusable ទៅជាប្លុកម៉ូឌុល។

### ច្បាប់សំខាន់៖
- បញ្ជាក់ Return Type ឱ្យបានច្បាស់លាស់เสมอ (ឧទាហរណ៍៖ \`String\`, \`int\`, \`double\`, \`bool\`)។
- ប្រើ \`void\` នៅពេល function អនុវត្តតែសកម្មភាព side effect ដោយមិនប្រគល់តម្លៃមកវិញឡើយ។`
      },
      starterCode: `String generateInvoiceId(String clientPrefix, int sequenceNumber) {
  return '$clientPrefix-2026-\${sequenceNumber.toString().padStart(4, "0")}';
}

void printHeader() {
  print('=== SABAYCODE INVOICE GENERATOR ===');
}

void main() {
  printHeader();
  String invoice = generateInvoiceId('ABA', 42);
  print('Generated Invoice ID: $invoice');
}`
    },
    {
      id: "dart-3-2-positional-parameters",
      title: {
        en: "3.2 Positional Parameters & Required Arguments",
        km: "៣.២ Positional Parameters និង Required Arguments"
      },
      content: {
        en: `# 3.2 Positional Parameters

Positional parameters must be passed in the exact sequence in which they are declared in the function signature.`,
        km: `# ៣.២ Positional Parameters

Positional parameters ទាមទារឱ្យបញ្ចូល Argument តាមលំដាប់លំដោយច្បាស់លាស់ ដូចប្រកាសក្នុង function signature។`
      },
      starterCode: `double calculateTotalWithTax(double basePrice, double taxRatePercentage) {
  return basePrice + (basePrice * (taxRatePercentage / 100));
}

void main() {
  // Arguments matched by exact position: 1st basePrice, 2nd taxRate
  double total = calculateTotalWithTax(100.0, 10.0);
  print('Calculated Total: \$$total USD');
}`
    },
    {
      id: "dart-3-3-optional-positional-parameters",
      title: {
        en: "3.3 Optional Positional Parameters ([]) & Default Values",
        km: "៣.៣ Optional Positional Parameters ([]) និង Default Values"
      },
      content: {
        en: `# 3.3 Optional Positional Parameters

Wrap optional positional parameters inside square brackets \`[Type paramName = defaultValue]\`.`,
        km: `# ៣.៣ Optional Positional Parameters

ប្រើប្រាស់សញ្ញាដង្កៀបជ្រុង \`[Type paramName = defaultValue]\` សម្រាប់ប្រកាស Optional Positional parameters។`
      },
      starterCode: `String formatUserAddress(String city, [String street = 'Main Street', String building = 'N/A']) {
  return 'Address: $building, $street, $city';
}

void main() {
  print(formatUserAddress('Phnom Penh'));
  print(formatUserAddress('Phnom Penh', 'Norodom Blvd', 'Building 101'));
}`
    },
    {
      id: "dart-3-4-named-parameters-required",
      title: {
        en: "3.4 Named Parameters ({}) & 'required' Modifier",
        km: "៣.៤ Named Parameters ({}) និងពាក្យគន្លឹះ 'required'"
      },
      content: {
        en: `# 3.4 Named Parameters & 'required'

Wrap parameters inside curly braces \`{Type? name, required Type name2}\`. Flutter widgets rely heavily on named parameters for explicit component configuration.`,
        km: `# ៣.៤ Named Parameters & 'required'

ប្រើប្រាស់សញ្ញាដង្កៀបរោម \`{Type? name, required Type name2}\` សម្រាប់ Named Parameters។ Flutter Widgets ប្រើប្រាស់ Named parameters យ៉ាងច្រើនសន្ធឹកសន្ធាប់។`
      },
      starterCode: `void sendKHQRPayment({
  required String recipientName,
  required double amountUSD,
  String currency = 'USD',
  String? note,
}) {
  print('=== KHQR PAYMENT DISPATCH ===');
  print('Recipient: $recipientName');
  print('Amount   : $amountUSD $currency');
  print('Note     : \${note ?? "No note provided"}');
}

void main() {
  sendKHQRPayment(
    recipientName: 'Sokheng Tech Store',
    amountUSD: 29.99,
    note: 'Payment for Wireless Mouse',
  );
}`
    },
    {
      id: "dart-3-5-arrow-syntax-anonymous-functions",
      title: {
        en: "3.5 Arrow Function Syntax (=>) & Anonymous Functions",
        km: "៣.៥ Arrow Function Syntax (=>) និង Anonymous Functions"
      },
      content: {
        en: `# 3.5 Arrow Functions & Lambdas

- **Arrow Syntax (\`=> expression\`)**: Concise one-line function definition.
- **Anonymous Functions (Lambdas)**: Functions without a name passed inline as parameters.`,
        km: `# ៣.៥ Arrow Functions & Lambdas

- **Arrow Syntax (\`=> expression\`)**: ផ្តល់នូវទម្រង់ខ្លីសម្រាប់ function មួយបន្ទាត់។
- **Anonymous Functions (Lambdas)**: Function គ្មានឈ្មោះដែលបញ្ជូនជា parameter inline។`
      },
      starterCode: `// Concise arrow function
double convertUsdToKhr(double usd) => usd * 4050.0;

void main() {
  print('100 USD in KHR: \${convertUsdToKhr(100)} KHR');

  List<int> pricesUSD = [10, 25, 50, 100];
  
  // Anonymous function passed to forEach
  pricesUSD.forEach((price) {
    print('Price \$$price USD = \${convertUsdToKhr(price.toDouble())} KHR');
  });
}`
    },
    {
      id: "dart-3-6-first-class-functions-callbacks",
      title: {
        en: "3.6 First-Class Functions, Function Types & Callbacks",
        km: "៣.៦ First-Class Functions, Function Types និង Callbacks"
      },
      content: {
        en: `# 3.6 First-Class Functions & Callbacks

In Dart, functions are first-class objects. They can be assigned to variables, passed as arguments, or returned from other functions.`,
        km: `# ៣.៦ First-Class Functions & Callbacks

ក្នុង Dart, Functions គឺជា First-class Objects។ ពួកវាអាចប្រកាសដាក់ចូល Variable, បញ្ជូនជា Argument, ឬ Return ចេញពី Function ផ្សេងទៀតបាន។`
      },
      starterCode: `// Higher-order function receiving a callback parameter
void executeTransaction(double amount, void Function(bool success, String txnId) onComplete) {
  print('Processing payment of \$$amount USD via Wing...');
  // Simulate successful payment processing
  String generatedTxn = 'TXN-WING-88941';
  onComplete(true, generatedTxn);
}

void main() {
  executeTransaction(75.50, (success, txnId) {
    if (success) {
      print('✅ Callback Triggered: Payment Completed! Reference: $txnId');
    }
  });
}`
    },
    {
      id: "dart-3-7-lexical-scope-closures",
      title: {
        en: "3.7 Lexical Scope, Closures & Environment Capturing",
        km: "៣.៧ Lexical Scope, Closures និងការចងចាំ Environment Variables"
      },
      content: {
        en: `# 3.7 Lexical Scope & Closures

A closure is a function object that has access to variables in its lexical scope, even when the function is executed outside its original scope.`,
        km: `# ៣.៧ Lexical Scope & Closures

Closure គឺជា Function Object ដែលអាចចូលប្រើប្រាស់អថេរដែលស្ថិតក្នុង Lexical Scope របស់វាបាន ទោះបីជា Function នោះរត់នៅក្រៅ Scope ដើមក៏ដោយ។`
      },
      starterCode: `// Function returning a closure with captured scope variable
int Function(int price) createDiscountCalculator(double discountPercentage) {
  return (int originalPrice) {
    double discounted = originalPrice - (originalPrice * (discountPercentage / 100));
    return discounted.round();
  };
}

void main() {
  // Creates a 20% discount calculator closure
  var apply20PercentDiscount = createDiscountCalculator(20.0);
  
  print('Original $100 -> Discounted: \$\${apply20PercentDiscount(100)}');
  print('Original $250 -> Discounted: \$\${apply20PercentDiscount(250)}');
}`
    },
    {
      id: "dart-3-8-lab-discount-engine",
      title: {
        en: "3.8 Practical Lab: E-Commerce Order Discount & Point Processor",
        km: "៣.៨ អនុវត្តជាក់ស្តែង៖ កម្មវិធីគណនាបញ្ចុះតម្លៃ និងពិន្ទុសន្សំ E-Commerce"
      },
      content: {
        en: `# 3.8 Practical Lab: E-Commerce Order Discount Processor

In this lab, combine function declarations, named parameters, arrow syntax, higher-order functions, and closures to build a production checkout engine.`,
        km: `# ៣.៨ អនុវត្តជាក់ស្តែង៖ កម្មវិធីគណនាបញ្ចុះតម្លៃ និងពិន្ទុសន្សំ E-Commerce

នៅក្នុងលំហាត់អនុវត្តនេះ អ្នកនឹងបូកបញ្ចូនចំណេះដឹង Functions, Named Parameters, Arrow Functions, និង Closures ដើម្បីបង្កើត Engine គណនាការបញ្ចុះតម្លៃពេលទូទាត់ប្រាក់។`
      },
      starterCode: `typedef PricingCalculator = double Function(double subtotal);

PricingCalculator getVipPricingEngine(String membershipTier) {
  return switch (membershipTier) {
    'GOLD' => (subtotal) => subtotal * 0.85,   // 15% discount
    'SILVER' => (subtotal) => subtotal * 0.90, // 10% discount
    _ => (subtotal) => subtotal                // No discount
  };
}

void main() {
  double cartSubtotal = 200.00;
  var goldTierEngine = getVipPricingEngine('GOLD');

  double finalAmountUSD = goldTierEngine(cartSubtotal);

  print('=== SABAYCODE SHOPPING CHECKOUT ===');
  print('Cart Subtotal : \$\${cartSubtotal.toStringAsFixed(2)}');
  print('Membership    : GOLD VIP (15% OFF)');
  print('Final Payable : \$\${finalAmountUSD.toStringAsFixed(2)} USD');
}`
    }
  ]
};
