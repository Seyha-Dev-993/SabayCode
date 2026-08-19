import { Topic } from '../../types';

export const group9Topics: Topic = {
  id: "dart-generics-type-architecture",
  title: {
    en: "Group 9: Generics & Type Architecture",
    km: "ក្រុមទី ៩៖ Generics និងរចនាសម្ព័ន្ធ Type Architecture"
  },
  lessons: [
    {
      id: "dart-9-1-intro-generics-classes-methods",
      title: {
        en: "9.1 Introduction to Generics: Generic Classes & Methods",
        km: "៩.១ ស្វែងយល់ពី Generics (Generic Classes និង Generic Methods)"
      },
      content: {
        en: `# 9.1 Introduction to Generics

Generics (\`<T>\`) allow writing reusable, type-safe classes and methods that operate over multiple data types without sacrificing compile-time type safety.`,
        km: `# ៩.១ ស្វែងយល់ពី Generics

Generics (\`<T>\`) អនុញ្ញាតឱ្យសរសេរ classes និង methods ដែល reusable និងមានសុវត្ថិភាព Type-safe សម្រាប់ដោះស្រាយប្រភេទទិន្នន័យផ្សេងៗគ្នា។`
      },
      starterCode: `class DataBox<T> {
  final T data;
  DataBox(this.data);

  void printDataInfo() {
    print('Box Payload Type: \${data.runtimeType} -> Value: $data');
  }
}

void main() {
  var stringBox = DataBox<String>('SabayCode Khmer Token');
  var intBox = DataBox<int>(4050);

  stringBox.printDataInfo();
  intBox.printDataInfo();
}`
    },
    {
      id: "dart-9-2-bounded-type-parameters",
      title: {
        en: "9.2 Bounded Type Parameters (<T extends SuperClass>)",
        km: "៩.២ Bounded Type Parameters (<T extends SuperClass>)"
      },
      content: {
        en: `# 9.2 Bounded Type Parameters

Restrict allowed generic type arguments using bounds (\`<T extends num>\` or \`<T extends BaseEntity>\`).`,
        km: `# ៩.២ Bounded Type Parameters

កំណត់ព្រំដែនប្រភេទទិន្នន័យដែល Generics អាចទទួលយកបាន (\`<T extends num>\` ឬ \`<T extends BaseEntity>\`)។`
      },
      starterCode: `class CurrencyCalculator<T extends num> {
  final T baseAmount;
  CurrencyCalculator(this.baseAmount);

  double calculateWithFee(double feePercent) {
    return baseAmount + (baseAmount * (feePercent / 100));
  }
}

void main() {
  var intCalc = CurrencyCalculator<int>(100);
  var doubleCalc = CurrencyCalculator<double>(45.50);

  print('Int Calc Result   : \${intCalc.calculateWithFee(5.0)}');
  print('Double Calc Result: \${doubleCalc.calculateWithFee(5.0)}');
}`
    },
    {
      id: "dart-9-3-generic-typedefs",
      title: {
        en: "9.3 Generic Typedefs & Function Signatures",
        km: "៩.៣ Generic Typedefs និង Function Signatures"
      },
      content: {
        en: `# 9.3 Generic Typedefs

Use \`typedef\` with generics to declare reusable type aliases for function signatures or data contracts.`,
        km: `# ៩.៣ Generic Typedefs

ប្រើប្រាស់ \`typedef\` ជាមួយ generics ដើម្បីបង្កើត Type aliases សម្រាប់ function signatures ឬ ទិន្នន័យផ្សេងៗ។`
      },
      starterCode: `typedef MapperFunction<Input, Output> = Output Function(Input item);

void main() {
  MapperFunction<String, int> stringLengthMapper = (text) => text.length;

  print('Mapped "SabayCode" length: \${stringLengthMapper("SabayCode")}');
}`
    },
    {
      id: "dart-9-4-reified-generics",
      title: {
        en: "9.4 Reified Generics & Runtime Type Inspection (is T)",
        km: "៩.៤ Reified Generics និងការពិនិត្យប្រភេទទិន្នន័យពេល Runtime"
      },
      content: {
        en: `# 9.4 Reified Generics

Unlike Java (where generic types are erased at compile time), Dart generics are **reified**. Generic type information is preserved and fully accessible at runtime (\`is List<String>\`).`,
        km: `# ៩.៤ Reified Generics

ខុសពី Java (ដែលព័ត៌មាន generics ត្រូវលុបចោលពេល compile), Dart Generics គឺ **reified**។ ព័ត៌មានប្រភេទទិន្នន័យ generics ត្រូវរក្សាទុកក្នុង Memory ពេញលេញ saat runtime (\`is List<String>\`)។`
      },
      starterCode: `void inspectCollectionType<T>(List<T> list) {
  print('List holds reified elements of type: $T');
  if (list is List<String>) {
    print('  -> Confirmed: List of Strings');
  }
}

void main() {
  inspectCollectionType(['ABA', 'Wing', 'Acleda']);
  inspectCollectionType([100, 200, 300]);
}`
    },
    {
      id: "dart-9-5-extension-types-zero-cost",
      title: {
        en: "9.5 Extension Types (extension type) & Zero-Cost Abstractions",
        km: "៩.៥ Extension Types (extension type) ក្នុង Dart 3"
      },
      content: {
        en: `# 9.5 Extension Types in Dart 3

Dart 3 introduced \`extension type\` declarations. They provide zero-cost static type wrappers over an underlying type without creating runtime allocation overhead.`,
        km: `# ៩.៥ Extension Types ក្នុង Dart 3

Dart 3 បានណែនាំ \`extension type\`។ វាផ្តល់នូវ Static Type Wrappers ដែលគ្មានការចំណាយបន្ថែមក្នុង Memory ពេល Runtime (Zero-cost abstraction)។`
      },
      starterCode: `extension type const AccountId(String id) implements String {
  bool get isKhmerBank => id.startsWith('KH-');
}

void main() {
  var acc = AccountId('KH-ABA-99881');
  print('Account ID: $acc');
  print('Is Khmer Bank Account? \${acc.isKhmerBank}');
}`
    },
    {
      id: "dart-9-6-covariance-contravariance",
      title: {
        en: "9.6 Covariance & The 'covariant' Keyword",
        km: "៩.៦ Covariance និងការប្រើប្រាស់ពាក្យ 'covariant'"
      },
      content: {
        en: `# 9.6 Covariance in Dart

The \`covariant\` keyword marks a parameter in a subclass method to accept a tighter subtype than declared in its superclass interface.`,
        km: `# ៩.៦ Covariance ក្នុង Dart

ពាក្យ \`covariant\` ប្រើប្រាស់នៅលើ Parameter ក្នុង Subclass Method ដើម្បីទទួលយក Subtype ជាក់លាក់ជាងការប្រកាសក្នុង Superclass Interface។`
      },
      starterCode: `class Animal {
  void eat(Animal food) => print('Animal eating food');
}

class Grass extends Animal {}

class Cow extends Animal {
  @override
  void eat(covariant Grass food) {
    print('🐄 Cow grazing on fresh grass');
  }
}

void main() {
  var cow = Cow();
  cow.eat(Grass());
}`
    },
    {
      id: "dart-9-7-lab-generic-repository",
      title: {
        en: "9.7 Practical Lab: Generic InMemory Cache & Repository Layer",
        km: "៩.៧ អនុវត្តជាក់ស្តែង៖ Generic InMemory Repository សម្រាប់រក្សាទុកទិន្នន័យ"
      },
      content: {
        en: `# 9.7 Practical Lab: Generic Repository Layer

Design a complete generic repository pattern class implementing CRUD operations with bounds checking, caching, and stream-based entity observation.`,
        km: `# ៩.៧ អនុវត្តជាក់ស្តែង៖ Generic Repository Layer

រចនា Class Generic Repository Pattern ពេញលេញ សម្រាប់ប្រតិបត្តិការ CRUD ដែលមាន Caching និង Type Safety។`
      },
      starterCode: `abstract class Entity {
  String get id;
}

class UserEntity implements Entity {
  @override
  final String id;
  final String name;
  UserEntity(this.id, this.name);
}

class InMemoryRepository<T extends Entity> {
  final Map<String, T> _storage = {};

  void save(T entity) {
    _storage[entity.id] = entity;
    print('💾 Saved Entity [\${entity.id}] into \${T} Storage.');
  }

  T? findById(String id) => _storage[id];
  List<T> getAll() => _storage.values.toList();
}

void main() {
  var repo = InMemoryRepository<UserEntity>();
  repo.save(UserEntity('USR-01', 'Sophea Sok'));
  repo.save(UserEntity('USR-02', 'Dara Ly'));

  print('Total Entities in Repo: \${repo.getAll().length}');
}`
    }
  ]
};
