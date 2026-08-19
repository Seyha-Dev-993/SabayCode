import { Topic } from '../../types';

export const group4Topics: Topic = {
  id: "dart-collections-iterables",
  title: {
    en: "Group 4: Collections & Iterable Operations",
    km: "ក្រុមទី ៤៖ សំណុំទិន្នន័យ និងប្រតិបត្តិការលើ Iterables"
  },
  lessons: [
    {
      id: "dart-4-1-lists-creation-indexing",
      title: {
        en: "4.1 List<T>: Creation, Indexing & Common Operations",
        km: "៤.១ List<T>៖ ការបង្កើត Indexing និង Methods ពេញនិយម"
      },
      content: {
        en: `# 4.1 List<T>: Creation & Methods

A \`List<T>\` is an ordered collection of objects indexed by integer positions starting at zero.

### Essential Methods:
- Mutating: \`.add()\`, \`.addAll()\`, \`.insert()\`, \`.remove()\`, \`.removeAt()\`.
- Searching: \`.contains()\`, \`.indexOf()\`, \`.firstWhere()\`.`,
        km: `# ៤.១ List<T>៖ ការបង្កើត Indexing និង Methods ពេញនិយម

\`List<T>\` គឺជាសំណុំទិន្នន័យមានលំដាប់ថ្នាក់ ចាប់ផ្តើម Index ពីលេខសូន្យ។

### Methods សំខាន់ៗ៖
- កែប្រែទិន្នន័យ៖ \`.add()\`, \`.addAll()\`, \`.insert()\`, \`.remove()\`, \`.removeAt()\`។
- ស្វែងរកទិន្នន័យ៖ \`.contains()\`, \`.indexOf()\`, \`.firstWhere()\`។`
      },
      starterCode: `void main() {
  List<String> shoppingList = ['Angkor Beer', 'Phnom Penh Rice', 'Fish Sauce'];

  shoppingList.add('Cambodian Coffee');
  shoppingList.insert(0, 'Organic Mangoes');

  print('Shopping Items (\${shoppingList.length}):');
  print(shoppingList);
  print('First item: \${shoppingList.first}');
  print('Last item: \${shoppingList.last}');
}`
    },
    {
      id: "dart-4-2-sets-unique-collections",
      title: {
        en: "4.2 Set<T>: Unique Collections & Set Operations",
        km: "៤.២ Set<T>៖ ទិន្នន័យមិនជាន់គ្នា និង Set Operations"
      },
      content: {
        en: `# 4.2 Set<T>: Unique Collections

A \`Set<T>\` is an unordered collection of unique items. Duplicate entries are automatically ignored.

### Mathematical Set Operations:
- \`.intersection(otherSet)\`: Elements common to both sets.
- \`.union(otherSet)\`: All combined unique elements.
- \`.difference(otherSet)\`: Elements in set A but not in set B.`,
        km: `# ៤.២ Set<T>៖ ទិន្នន័យមិនជាន់គ្នា និង Set Operations

\`Set<T>\` គឺជាសំណុំទិន្នន័យមិនជាន់គ្នា។ រាល់ធាតុស្ទួន នឹងត្រូវលុបចោលដោយស្វ័យប្រវត្តិ។

### ប្រមាណវិធីលើ Set៖
- \`.intersection(otherSet)\`: ធាតុដែលមានដូចគ្នាក្នុង Set ទាំងពីរ។
- \`.union(otherSet)\`: បូកបញ្ចូលធាតុទាំងអស់ដោយមិនស្ទួន។
- \`.difference(otherSet)\`: ធាតុដែលមានក្នុង Set A តែគ្មានក្នុង Set B។`
      },
      starterCode: `void main() {
  Set<String> abaMerchants = {'Brown Coffee', 'Aeon Mall', 'Kbach Store'};
  Set<String> wingMerchants = {'Brown Coffee', 'Zando', 'Aeon Mall'};

  // Common merchants accepting both ABA and Wing
  Set<String> commonMerchants = abaMerchants.intersection(wingMerchants);
  
  // All unique merchants combined
  Set<String> allMerchants = abaMerchants.union(wingMerchants);

  print('ABA Merchants : $abaMerchants');
  print('Wing Merchants: $wingMerchants');
  print('Accepting Both: $commonMerchants');
  print('Total Unified : $allMerchants');
}`
    },
    {
      id: "dart-4-3-maps-key-value-data",
      title: {
        en: "4.3 Map<K, V>: Key-Value Data Structures",
        km: "៤.៣ Map<K, V>៖ រចនាសម្ព័ន្ធទិន្នន័យ Key-Value"
      },
      content: {
        en: `# 4.3 Map<K, V>: Key-Value Collections

A \`Map<K, V>\` stores data as key/value pairs. Keys must be unique, while values can be duplicated. Maps are vital for handling JSON data models.`,
        km: `# ៤.៣ Map<K, V>៖ រចនាសម្ព័ន្ធទិន្នន័យ Key-Value

\`Map<K, V>\` រក្សាទុកទិន្នន័យជាគូ Key/Value។ Keys មិនអាចស្ទួនគ្នាឡើយ ប៉ុន្តែ Values អាចស្ទួនបាន។ Maps មានសារៈសំខាន់ខ្លាំងសម្រាប់ដោះស្រាយទិន្នន័យ JSON។`
      },
      starterCode: `void main() {
  Map<String, dynamic> userProfile = {
    'id': 'USR-8891',
    'name': 'Dara Sok',
    'phone': '+85512888999',
    'verifiedAccount': true,
    'balanceUSD': 450.00
  };

  // Accessing values
  print('User Name: \${userProfile['name']}');
  
  // Adding new key/value
  userProfile['city'] = 'Phnom Penh';

  print('Updated Profile Map:');
  userProfile.forEach((key, value) {
    print('  - $key: $value');
  });
}`
    },
    {
      id: "dart-4-4-spread-operators-collections",
      title: {
        en: "4.4 Spread Operators (...) & Null-Aware Spread (...?)",
        km: "៤.៤ Spread Operators (...) និង Null-Aware Spread (...?)"
      },
      content: {
        en: `# 4.4 Spread Operators in Collections

- **Spread Operator (\`...\`)**: Unpacks all elements of one collection into another.
- **Null-Aware Spread Operator (\`...?\`)**: Safely unpacks elements only if the source collection is not null.`,
        km: `# ៤.៤ Spread Operators ក្នុង Collections

- **Spread Operator (\`...\`)**: ពង្រាយធាតុទាំងអស់ពីសំណុំមួយ ចូលទៅក្នុងសំណុំមួយទៀត។
- **Null-Aware Spread Operator (\`...?\`)**: ពង្រាយធាតុដោយសុវត្ថិភាព លុះត្រាតែសំណុំដើមមិនស្មើ null។`
      },
      starterCode: `void main() {
  List<String> techCourses = ['Flutter 3', 'Dart Masterclass'];
  List<String> databaseCourses = ['PostgreSQL', 'Firebase Firestore'];
  
  List<String>? optionalDesignCourses;

  // Combining lists with spread operators
  List<String> fullCatalog = [
    'HTML5 & CSS3',
    ...techCourses,
    ...databaseCourses,
    ...?optionalDesignCourses // Safely skipped if null
  ];

  print('Unified Course Catalog (\${fullCatalog.length} courses):');
  print(fullCatalog);
}`
    },
    {
      id: "dart-4-5-collection-if-for-literals",
      title: {
        en: "4.5 Collection 'if' and Collection 'for' Literals",
        km: "៤.៥ Collection 'if' និង Collection 'for' Literals"
      },
      content: {
        en: `# 4.5 Collection 'if' & Collection 'for'

Dart allows embedding \`if\` statements and \`for\` loops directly inside collection literal declarations.`,
        km: `# ៤.៥ Collection 'if' & Collection 'for'

Dart អនុញ្ញាតឱ្យសរសេរលក្ខខណ្ឌ \`if\` និងរង្វង់ \`for\` ដោយផ្ទាល់ នៅក្នុងការប្រកាស Collection Literals។`
      },
      starterCode: `void main() {
  bool isVipUser = true;
  List<String> baseFeatures = ['Dashboard', 'Profile', 'Transactions'];
  List<String> rawAddons = ['export_pdf', 'analytics', 'khqr_generator'];

  List<String> userNavigation = [
    'Home',
    for (var feature in baseFeatures) 'Feature: $feature',
    if (isVipUser) '🌟 VIP Lounge',
    for (var addon in rawAddons) if (addon.startsWith('khqr')) 'Tool: KHQR Engine'
  ];

  print('Computed User Navigation Menu:');
  userNavigation.forEach((item) => print('  • $item'));
}`
    },
    {
      id: "dart-4-6-functional-map-where",
      title: {
        en: "4.6 Iterable Methods: .map(), .where(), .every(), .any()",
        km: "៤.៦ Functional Iterable Methods (map, where, every, any)"
      },
      content: {
        en: `# 4.6 Functional Iterable Methods

- **\`.map()\`**: Transforms each item in a collection.
- **\`.where()\`**: Filters items matching a boolean condition.
- **\`.every()\`**: Checks if ALL items pass a condition.
- **\`.any()\`**: Checks if AT LEAST ONE item passes a condition.`,
        km: `# ៤.៦ Functional Iterable Methods

- **\`.map()\`**: បំប្លែងធាតុនីមួយៗក្នុងសំណុំទិន្នន័យ។
- **\`.where()\`**: ស្រង់យកធាតុណាដែលត្រូវតាមលក្ខខណ្ឌ Boolean។
- **\`.every()\`**: ពិនិត្យថាតើ **គ្រប់ធាតុទាំងអស់** ត្រូវតាមលក្ខខណ្ឌឬទេ។
- **\`.any()\`**: ពិនិត្យថាតើ **យ៉ាងហោចណាស់ធាតុមួយ** ត្រូវតាមលក្ខខណ្ឌឬទេ។`
      },
      starterCode: `void main() {
  List<double> transactionsUSD = [12.50, 45.00, 150.00, 8.99, 210.00];

  // 1. Filter transactions over $40
  var largeTransactions = transactionsUSD.where((t) => t >= 40.00).toList();

  // 2. Convert all transactions to KHR
  var khrAmounts = transactionsUSD.map((usd) => (usd * 4050).round()).toList();

  // 3. Validation checks
  bool allPositive = transactionsUSD.every((t) => t > 0);
  bool hasHighValueTxn = transactionsUSD.any((t) => t >= 200.00);

  print('Original USD Txns  : $transactionsUSD');
  print('Large Txns (>$40)   : $largeTransactions');
  print('Converted KHR      : $khrAmounts');
  print('All Txns Positive? : $allPositive');
  print('Has Txn >= $200?   : $hasHighValueTxn');
}`
    },
    {
      id: "dart-4-7-fold-reduce-accumulation",
      title: {
        en: "4.7 Accumulation Operations: .fold() and .reduce()",
        km: "៤.៧ ការគណនាបូកសរុបទិន្នន័យតាម .fold() និង .reduce()"
      },
      content: {
        en: `# 4.7 Accumulation: .fold() & .reduce()

- **\`.reduce()\`**: Combines collection elements iteratively using the first element as initial seed value.
- **\`.fold(initialValue, (acc, item) => ...)\`**: Combines elements starting with an explicit initial accumulator value. Preferred for safety on empty collections.`,
        km: `# ៤.៧ ការគណនាបូកសរុបទិន្នន័យតាម .fold() និង .reduce()

- **\`.reduce()\`**: បូកបញ្ចូលធាតុក្នុងសំណុំទិន្នន័យ ដោយយកធាតុដំបូងជា Seed Value។
- **\`.fold(initialValue, (acc, item) => ...)\`**: បូកបញ្ចូលធាតុដោយចាប់ផ្តើមពីតម្លៃ Initial Accumulator ច្បាស់លាស់ (មានសុវត្ថិភាពទោះបីជាសំណុំគ្មានធាតុ)។`
      },
      starterCode: `void main() {
  List<double> cartPrices = [15.0, 30.5, 9.99, 44.5];

  // Using reduce
  double totalReduce = cartPrices.reduce((sum, item) => sum + item);

  // Using fold with explicit initial value 0.0
  double totalFold = cartPrices.fold(0.0, (previousSum, price) => previousSum + price);

  print('Cart Total (reduce): \$$totalReduce');
  print('Cart Total (fold)  : \$$totalFold');
}`
    },
    {
      id: "dart-4-8-lab-inventory-analyzer",
      title: {
        en: "4.8 Practical Lab: Supermarket Cart & Inventory Analyzer",
        km: "៤.៨ អនុវត្តជាក់ស្តែង៖ កម្មវិធីវិភាគកន្ត្រកទំនិញ និងស្តុកផ្សារទំនើប"
      },
      content: {
        en: `# 4.8 Practical Lab: Supermarket Inventory Analyzer

Combine Lists, Maps, Collection \`if\`/\`for\`, \`.where()\`, \`.map()\`, and \`.fold()\` to build a full inventory audit tool.`,
        km: `# ៤.៨ អនុវត្តជាក់ស្តែង៖ កម្មវិធីវិភាគកន្ត្រកទំនិញ និងស្តុកផ្សារទំនើប

បូកបញ្ចូន Lists, Maps, Collection \`if\`/\`for\`, \`.where()\`, \`.map()\`, និង \`.fold()\` ដើម្បីបង្កើតឧបករណ៍ត្រួតពិនិត្យស្តុកទំនិញផ្សារទំនើប។`
      },
      starterCode: `void main() {
  List<Map<String, dynamic>> inventory = [
    {'name': 'Angkor Jasmine Rice 5kg', 'price': 8.50, 'stock': 45},
    {'name': 'Kampot Pepper 100g', 'price': 4.20, 'stock': 8},
    {'name': 'Siem Reap Dried Fish', 'price': 12.00, 'stock': 0}, // Out of stock
    {'name': 'Organic Palm Sugar', 'price': 3.50, 'stock': 25},
  ];

  // 1. Filter in-stock items
  var availableItems = inventory.where((item) => (item['stock'] as int) > 0).toList();

  // 2. Calculate total inventory valuation USD
  double totalValuation = inventory.fold(0.0, (sum, item) {
    return sum + ((item['price'] as double) * (item['stock'] as int));
  });

  print('=== SUPERMARKET INVENTORY ANALYTICS ===');
  print('Total Product Types : \${inventory.length}');
  print('Available Products  : \${availableItems.length}');
  print('Total Stock Value   : \$\${totalValuation.toStringAsFixed(2)} USD (\${(totalValuation * 4050).toStringAsFixed(0)} KHR)');
}`
    }
  ]
};
