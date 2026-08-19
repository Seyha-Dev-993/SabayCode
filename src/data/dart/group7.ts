import { Topic } from '../../types';

export const group7Topics: Topic = {
  id: "dart-null-safety-type-system",
  title: {
    en: "Group 7: Sound Null Safety & Modern Type System",
    km: "ក្រុមទី ៧៖ Sound Null Safety និងប្រព័ន្ធ Type System ទំនើប"
  },
  lessons: [
    {
      id: "dart-7-1-principles-sound-null-safety",
      title: {
        en: "7.1 Principles of Sound Null Safety in Dart 3",
        km: "៧.១ គោលការណ៍គ្រឹះនៃ Sound Null Safety ក្នុង Dart 3"
      },
      content: {
        en: `# 7.1 Principles of Sound Null Safety

Sound null safety means null reference errors are eliminated at **compile-time**. If a variable is non-nullable, Dart guarantees it can never be null at runtime.`,
        km: `# ៧.១ គោលការណ៍គ្រឹះនៃ Sound Null Safety

Sound null safety ធានាថាកំហុស Null Reference Errors ត្រូវលុបបំបាត់ចោលតាំងពី **Compile-time**។ ប្រសិនបើអថេរជា Non-nullable, Dart ធានាថាវាមិនអាចស្មើ null ឡើយពេលរត់កូដ។`
      },
      starterCode: `void main() {
  String developerName = 'Rithy Sok'; // Non-nullable
  // developerName = null; // Compile error! Guaranteed safe.

  print('Developer Name: $developerName');
  print('Name Length: \${developerName.length}');
}`
    },
    {
      id: "dart-7-2-nullable-types-declaration",
      title: {
        en: "7.2 Non-Nullable by Default vs Nullable Types (Type?)",
        km: "៧.២ Non-Nullable តាមធម្មតា និង Nullable Types (Type?)"
      },
      content: {
        en: `# 7.2 Non-Nullable vs Nullable Types

To allow a variable to store \`null\`, append a question mark (\`?\`) after the type declaration (\`String?\`, \`int?\`, \`Map<String, dynamic>?\`).`,
        km: `# ៧.២ Non-Nullable vs Nullable Types

ដើម្បីអនុញ្ញាតឱ្យអថេរអាច រក្សាទុកតម្លៃ \`null\` បាន អ្នកត្រូវសរសេរសញ្ញាសួរ (\`?\`) នៅខាងចុង Type (\`String?\`, \`int?\`)។`
      },
      starterCode: `void main() {
  String? middleName; // Can be null
  middleName = 'Chann';

  String? couponCode; // Explicitly null initially

  print('Middle Name: $middleName');
  print('Coupon Code: $couponCode (Null safely handled)');
}`
    },
    {
      id: "dart-7-3-null-assertion-operator",
      title: {
        en: "7.3 Null Assertion Operator (!) & Safety Guidelines",
        km: "៧.៣ Null Assertion Operator (!) និងគោលការណ៍សុវត្ថិភាព"
      },
      content: {
        en: `# 7.3 Null Assertion Operator (!)

The \`!\` operator tells the Dart compiler: *"I guarantee this nullable expression is not null at runtime. Cast it to non-nullable."*

⚠️ Warning: If the expression evaluates to null at runtime, an uncaught \`TypeError\` runtime exception will be thrown. Use sparingly!`,
        km: `# ៧.៣ Null Assertion Operator (!)

Operator \`!\` ប្រាប់ Compiler ថា៖ *"ខ្ញុំធានា ១០០% ថាអថេរនេះមិនស្មើ null ឡើយ saat runtime"*។

⚠️ ការព្រមាន៖ ប្រសិនបើវាស្មើ null ពេលរត់កូដ វានឹងបោះ \`TypeError\` crash ភ្លាម។ គួរប្រើប្រាស់ដោយប្រុងប្រយ័ត្ន!`
      },
      starterCode: `void main() {
  String? verifiedToken = 'SECURE-AUTH-TOKEN-998';

  // Explicitly asserting non-null with !
  String activeToken = verifiedToken!;

  print('Active Token Length: \${activeToken.length}');
}`
    },
    {
      id: "dart-7-4-null-coalescing-operators",
      title: {
        en: "7.4 Null-Coalescing Operator (??) & Assignment (??=)",
        km: "៧.៤ Null-Coalescing Operator (??) និង Assignment (??=)"
      },
      content: {
        en: `# 7.4 Null-Coalescing Operators

- **\`a ?? b\`**: Returns \`a\` if it is not null; otherwise returns fallback default \`b\`.
- **\`a ??= b\`**: Assigns \`b\` to \`a\` ONLY if \`a\` is currently null.`,
        km: `# ៧.៤ Null-Coalescing Operators

- **\`a ?? b\`**: ប្រគល់តម្លៃ \`a\` បើមិនស្មើ null; ប្រសិនបើស្មើ null នឹងប្រគល់តម្លៃជំនួស \`b\`។
- **\`a ??= b\`**: បញ្ចូលតម្លៃ \`b\` ទៅឱ្យ \`a\` តែក្នុងករណី \`a\` កំពុងស្មើ null ប៉ុណ្ណោះ។`
      },
      starterCode: `void main() {
  String? apiUserNickname;
  
  // Provide fallback default using ??
  String displayName = apiUserNickname ?? 'Anonymous Khmer Member';

  // Assign value only if null using ??=
  String? sessionLocale;
  sessionLocale ??= 'km_KH'; // Assigned because sessionLocale was null

  print('Display Name: $displayName');
  print('Session Locale: $sessionLocale');
}`
    },
    {
      id: "dart-7-5-null-aware-access-cascades",
      title: {
        en: "7.5 Null-Aware Access (?.) & Method Cascades (?..)",
        km: "៧.៥ Null-Aware Access (?.) និង Method Cascades (?..)"
      },
      content: {
        en: `# 7.5 Null-Aware Access & Method Cascades

- **Null-Aware Property Access (\`?.\`)**: Evaluates property or method calls only if target receiver is not null. Returns \`null\` safely otherwise.
- **Null-Aware Cascade (\`?.. \`)**: Starts a cascade chain only if receiver object is non-null.`,
        km: `# ៧.៥ Null-Aware Access & Method Cascades

- **Null-Aware Property Access (\`?.\`)**: ហៅ method/property លុះត្រាតែ target មិនស្មើ null។ ប្រសិនបើស្មើ null វានឹងប្រគល់ \`null\` ដោយសុវត្ថិភាព។
- **Null-Aware Cascade (\`?.. \`)**: អនុវត្តខ្សែសង្វាក់ cascade តែពេល receiver មិនស្មើ null។`
      },
      starterCode: `class UserProfile {
  String? address;
  void logActivity() => print('User activity logged');
}

void main() {
  UserProfile? user; // Null user instance

  // Safe navigation property access
  int? addressLength = user?.address?.length;
  print('Safe Address Length: $addressLength'); // Prints null safely without crash!

  user?.logActivity(); // Safely ignored when user is null
}`
    },
    {
      id: "dart-7-6-late-initialization",
      title: {
        en: "7.6 Late Initialization (late) & Late Final Variables",
        km: "៧.៦ Late Initialization (late) និង Late Final Variables"
      },
      content: {
        en: `# 7.6 Late Initialization (late)

Use \`late\` for:
1. Non-nullable variables that are initialized **after** declaration (before first access).
2. Lazy initialization of expensive computations.`,
        km: `# ៧.៦ Late Initialization (late)

ប្រើប្រាស់ \`late\` សម្រាប់៖
១. អថេរ Non-nullable ដែលត្រូវកំណត់តម្លៃ **បន្ទាប់ពី** ការប្រកាស (មុនពេលទាញប្រើលើកដំបូង)។
២. Lazy initialization សម្រាប់កូដគណនាស្មុគស្មាញ (មិនទាន់រត់រហូតដល់ទាញប្រើ)។`
      },
      starterCode: `class HeavyDataLoader {
  late final String _cachedData = _fetchHeavyDataset();

  String _fetchHeavyDataset() {
    print('🔄 Fetching heavy dataset from server (Expensive Operation)...');
    return 'DATASET-2026-COMPLETE';
  }
}

void main() {
  var loader = HeavyDataLoader();
  print('Loader initialized.');
  // Dataset fetch is triggered LAZILY on first field access!
  print('Accessing cached data: \${loader._cachedData}');
}`
    },
    {
      id: "dart-7-7-type-promotion-control-flow",
      title: {
        en: "7.7 Type Promotion, Control Flow Analysis & Type Casting (as)",
        km: "៧.៧ Type Promotion, Control Flow Analysis និង Type Casting (as)"
      },
      content: {
        en: `# 7.7 Type Promotion

Dart's analyzer automatically promotes a nullable variable to non-nullable if control flow guarantees it cannot be null (e.g., inside an \`if (variable != null)\` block).`,
        km: `# ៧.៧ Type Promotion

ប្រព័ន្ធ Analyzer របស់ Dart នឹងបំប្លែងរំកិលអថេរពី Nullable ទៅជា Non-nullable ដោយស្វ័យប្រវត្តិ ប្រសិនបើលំហូរបញ្ជា (Control Flow) ធានាថាមិនស្មើ null (ឧទាហរណ៍៖ ក្នុងប្លុក \`if (variable != null)\`)។`
      },
      starterCode: `void printLength(String? text) {
  if (text == null) {
    print('Text is null');
    return;
  }
  // Control flow analysis promotes 'text' to non-nullable String automatically here!
  print('Promoted Text Length: \${text.length}');
}

void main() {
  printLength('Hello SabayCode');
  printLength(null);
}`
    },
    {
      id: "dart-7-8-type-hierarchy-never-object",
      title: {
        en: "7.8 The Type Hierarchy: Object, Object? and Never Bottom Type",
        km: "៧.៨ រចនាសម្ព័ន្ធ Type Hierarchy (Object, Object? និង Never)"
      },
      content: {
        en: `# 7.8 The Type Hierarchy

- **\`Object?\`**: Root of the entire Dart type hierarchy. Contains all non-null and null values.
- **\`Object\`**: Root of all non-nullable types.
- **\`Never\`**: Bottom type representing computations that **never return** (e.g., functions throwing an exception or infinitely looping).`,
        km: `# ៧.៨ រចនាសម្ព័ន្ធ Type Hierarchy

- **\`Object?\`**: កំពូលនៃរចនាសម្ព័ន្ធ Type ទាំងអស់ រាប់បញ្ចូលទាំងតម្លៃធម្មតា និង null។
- **\`Object\`**: កំពូលនៃរចនាសម្ព័ន្ធ Non-nullable types ទាំងអស់។
- **\`Never\`**: Bottom type តំណាងឱ្យប្រតិបត្តិការដែល **មិនប្រគល់តម្លៃមកវិញរហូត** (ឧទាហរណ៍៖ function ដែលបោះ Exception ឬរត់ Loop រហូត)។`
      },
      starterCode: `Never crashWithFatalError(String message) {
  throw Exception('FATAL SYSTEM ERROR: $message');
}

void main() {
  Object? payload = 'KHQR Data Payload';
  print('Runtime Type: \${payload.runtimeType}');

  // crashWithFatalError('System malfunction'); // Unreachable code beyond this call
}`
    },
    {
      id: "dart-7-9-lab-null-safe-auth-engine",
      title: {
        en: "7.9 Practical Lab: Null-Safe User Authentication Engine",
        km: "៧.៩ អនុវត្តជាក់ស្តែង៖ ប្រព័ន្ធផ្ទៀងផ្ទាត់សិទ្ធិ Null-Safe User Auth"
      },
      content: {
        en: `# 7.9 Practical Lab: Null-Safe User Auth Engine

Construct a production null-safe user authentication and session token parser leveraging late variables, type promotion, null-coalescing, and defensive bounds checks.`,
        km: `# ៧.៩ អនុវត្តជាក់ស្តែង៖ ប្រព័ន្ធផ្ទៀងផ្ទាត់សិទ្ធិ Null-Safe User Auth

សាងសង់ប្រព័ន្ធផ្ទៀងផ្ទាត់សិទ្ធិអ្នកប្រើប្រាស់ Null-safe ដោយប្រើប្រាស់ late variables, type promotion, null-coalescing, និងការការពារសុវត្ថិភាព។`
      },
      starterCode: `class AuthUser {
  final String uid;
  final String email;
  final String? phoneNumber;

  AuthUser(this.uid, this.email, [this.phoneNumber]);
}

class AuthSession {
  AuthUser? currentUser;

  String getContactInfo() {
    final user = currentUser;
    if (user == null) {
      return 'Guest User (Not Authenticated)';
    }
    // Promoted!
    String phone = user.phoneNumber ?? 'No Phone Registered';
    return 'User [\${user.email}] - Phone: $phone';
  }
}

void main() {
  var session = AuthSession();
  print(session.getContactInfo());

  session.currentUser = AuthUser('USR-991', 'sokha@sabaycode.com', '+85512345678');
  print(session.getContactInfo());
}`
    }
  ]
};
