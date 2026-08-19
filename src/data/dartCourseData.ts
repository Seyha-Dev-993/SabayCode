import { MobileCourse } from './mobileCoursesHubData';

export const DART_COURSE_DATA: MobileCourse = {
  id: 'dart',
  title: {
    en: 'Dart 3 Masterclass — Advanced Language Track',
    km: 'វគ្គសរសេរកូដ Dart 3 កម្រិតខ្ពស់ (Master Track)'
  },
  iconName: 'dart',
  type: 'language',
  categoryId: 'languages',
  difficulty: 'Advanced',
  shortDescription: {
    en: 'Advanced production-grade Dart 3 development — sound null safety, pattern matching, async streams, mixins, sealed classes, and Flutter bridge.',
    km: 'រៀនភាសា Dart 3 កម្រិតខ្ពស់សម្រាប់ Production — Pattern Matching, Sealed Classes, Async Streams, Sound Null Safety និងការភ្ជាប់ជាមួយ Flutter Runtime Engine។'
  },
  summary: {
    en: 'Dart is the programming language created by Google that powers Flutter. Learn variables, control flow, functions, OOP, null safety, and async programming before jumping into UI work.',
    km: 'Dart ជាភាសាសរសេរកម្មវិធីដែលបង្កើតឡើងដោយ Google ហើយជាភាសាចម្បងសម្រាប់ Flutter។ រៀន variables, control flow, functions, OOP, null safety និង async programming មុននឹងចូលទៅដល់ការសាង UI។'
  },
  estimatedHours: 16,
  lessonCount: 28,
  usedFor: 'Flutter Cross-Platform Apps, Google Pay, BMW In-Car App, CLI Utilities, Backend Microservices',
  realWorldApps: ['Google Pay', 'BMW App', 'eBay Motors', 'Alibaba', 'ByteDance Apps'],
  prerequisites: {
    en: 'None — this is a true beginner course. No prior programming experience required.',
    km: 'មិនទាមទារបទពិសោធន៍សរសេរកូដពីមុនមកទេ។ គ្មានបទពិសោធន៍សរសេរកូដពីមុនក៏អាចរៀនបាន។'
  },
  whatYouWillLearn: {
    en: [
      'Set up the Dart SDK and DartPad/VS Code for writing and running Dart code',
      'Use variables, data types, and operators correctly, including Dart\'s type inference',
      'Write control flow logic with if/else, switch, and loops',
      'Build reusable functions, including named/optional parameters and arrow functions',
      'Work with Dart\'s core collections: List, Map, and Set',
      'Apply object-oriented programming: classes, constructors, inheritance, and interfaces',
      'Write null-safe code using Dart\'s sound null safety system',
      'Use async/await and Future to handle asynchronous operations',
      'Read and understand real Dart code found in Flutter projects',
      'Build small standalone command-line programs as practice projects'
    ],
    km: [
      'ដំឡើង Dart SDK និងរៀបចំ DartPad/VS Code សម្រាប់ការសរសេរ និងដំណើរការកូដ Dart',
      'ប្រើប្រាស់ variables, data types, និង operators ត្រឹមត្រូវ រួមទាំង Dart type inference',
      'សរសេរលក្ខខណ្ឌ control flow ជាមួយ if/else, switch, និង loops',
      'បង្កើត reusable functions រួមទាំង named/optional parameters និង arrow functions',
      'ធ្វើការជាមួយប្រភេទទិន្នន័យ Collections: List, Map, និង Set',
      'អនុវត្តកម្មវិធី Object-Oriented Programming: classes, constructors, inheritance, និង interfaces',
      'សរសេរកូដមានសុវត្ថិភាព Null-safe ដោយប្រើ Sound Null Safety របស់ Dart',
      'ប្រើប្រាស់ async/await និង Future សម្រាប់ដោះស្រាយប្រត្តិបត្តិការ Asynchronous',
      'អាន និងយល់ដឹងពីកូដ Dart ពិតប្រាកដក្នុងគម្រោង Flutter',
      'សាងសង់កម្មវិធី Command-Line Standalone សម្រាប់អនុវត្តជាក់ស្តែង'
    ]
  },
  toolsAndSetup: {
    en: '1. Install Dart SDK (dart.dev/get-dart) or start in DartPad (dartpad.dev)\n2. Recommended: VS Code + official Dart extension\n3. Verify install: `dart --version` in terminal\n4. Create `hello.dart` and run with `dart run hello.dart`',
    km: '១. ដំឡើង Dart SDK (dart.dev/get-dart) ឬប្រើ DartPad (dartpad.dev)\n២. ណែនាំប្រើប្រាស់: VS Code + Dart extension ផ្លូវការ\n៣. ពិនិត្យការដំឡើង: `dart --version` ក្នុង terminal\n៤. បង្កើត `hello.dart` រួចរត់ `dart run hello.dart`'
  },
  cheatSheet: [
    {
      concept: 'Variables & Constants',
      code: 'var name = "Seyha";\nfinal int age = 25; // runtime constant\nconst double pi = 3.14159; // compile-time constant',
      explanation: {
        en: '`var` infers the type. `final` is set once at runtime. `const` is fixed at compile-time.',
        km: '`var` កំណត់ប្រភេទស្វ័យប្រវត្តិ។ `final` កំណត់តម្លៃបានតែម្តង។ `const` ជាតម្លៃថេរតាំងពី Compile.'
      }
    },
    {
      concept: 'Named Parameters & Null Safety',
      code: 'void greet({required String name, String? title}) {\n  print("Hello ${title ?? ""} $name");\n}',
      explanation: {
        en: 'Use `{}` for named parameters. `required` forces argument, `?` allows null, `??` provides fallback.',
        km: 'ប្រើ `{}` សម្រាប់ Named params។ `required` បង្ខំបញ្ចូល, `?` អនុញ្ញាត null, `??` ផ្តល់តម្លៃជំនួស។'
      }
    },
    {
      concept: 'Classes & Constructors',
      code: 'class Task {\n  String title;\n  bool isDone;\n  Task(this.title, {this.isDone = false});\n}',
      explanation: {
        en: 'Shorthand constructor `Task(this.title)` assigns fields directly upon instantiation.',
        km: 'Constructor កាត់ `Task(this.title)` បញ្ចូលតម្លៃទៅកាន់ Field ដោយផ្ទាល់។'
      }
    },
    {
      concept: 'Futures & Async / Await',
      code: 'Future<String> fetchData() async {\n  await Future.delayed(Duration(seconds: 1));\n  return "Data loaded";\n}',
      explanation: {
        en: 'Async functions return a Future. `await` pauses execution until Future completes.',
        km: 'អនុគមន៍ async ប្រគល់តម្លៃ Future។ `await` រង់ចាំប្រត្តិបត្តិការរហូតដល់ចញ្ចប់។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-dart-1',
      question: {
        en: 'What function is the required entry point for every Dart executable program?',
        km: 'តើអនុគមន៍មួយណាជាចំណុចចាប់ផ្តើម (Entry Point) ដែលទាមទារក្នុងកម្មវិធី Dart ទាំងអស់?'
      },
      options: [
        { id: '1', text: { en: 'main()', km: 'main()' }, isCorrect: true },
        { id: '2', text: { en: 'start()', km: 'start()' }, isCorrect: false },
        { id: '3', text: { en: 'runApp()', km: 'runApp()' }, isCorrect: false },
        { id: '4', text: { en: 'init()', km: 'init()' }, isCorrect: false }
      ],
      explanation: {
        en: 'Every standalone Dart program starts running from the top-level main() function.',
        km: 'កម្មវិធី Dart ទាំងអស់ចាប់ផ្តើមដំណើរការចេញពីអនុគមន៍ top-level main()។'
      }
    },
    {
      id: 'q-dart-2',
      question: {
        en: 'What is the main difference between `final` and `const` in Dart?',
        km: 'តើអ្វីជាភាពខុសគ្នាចម្បងរវាង `final` និង `const` ក្នុង Dart?'
      },
      options: [
        { id: '1', text: { en: 'const is compile-time fixed, while final is initialized at runtime.', km: 'const កំណត់តម្លៃពេល compile ចំណែក final ពេល runtime' }, isCorrect: true },
        { id: '2', text: { en: 'final variables can be reassigned multiple times.', km: 'final អាចប្តូរតម្លៃបានច្រើនដង' }, isCorrect: false },
        { id: '3', text: { en: 'const can only be used inside functions.', km: 'const ប្រើបានតែក្នុង function ប៉ុណ្ណោះ' }, isCorrect: false }
      ],
      explanation: {
        en: '`const` values must be known at compile-time. `final` values can be computed at runtime but cannot change once assigned.',
        km: '`const` ត្រូវដឹងតម្លៃតាំងពី compile-time។ `final` កំណត់ពេល runtime បាន តែមិនអាចកែប្រែបានទៀតឡើយ។'
      }
    },
    {
      id: 'q-dart-3',
      question: {
        en: 'How do you mark a variable as nullable in Dart Sound Null Safety?',
        km: 'តើអ្នកប្រកាសអថេរមួយឱ្យអាចស្មើ null យ៉ាងដូចម្តេចក្នុង Dart Sound Null Safety?'
      },
      options: [
        { id: '1', text: { en: 'Add a question mark ? after the data type (e.g., String?)', km: 'ថែមសញ្ញាសួរ ? បន្ទាប់ពីប្រភេទទិន្នន័យ (ឧ. String?)' }, isCorrect: true },
        { id: '2', text: { en: 'Use the nullable keyword', km: 'ប្រើពាក្យ nullable' }, isCorrect: false },
        { id: '3', text: { en: 'Assign null without type', km: 'ដាក់ស្មើ null ដោយមិនបញ្ជាក់ type' }, isCorrect: false }
      ],
      explanation: {
        en: 'Adding `?` after a type (like String?) explicitly permits null values in Dart.',
        km: 'ការបន្ថែមសញ្ញា `?` បន្ទាប់ពី type (ដូចជា String?) អនុញ្ញាតឱ្យអថេរនោះអាចស្មើ null បាន។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'CLI Task Tracker',
      km: 'កម្មវិធី CLI Task Tracker'
    },
    description: {
      en: 'A command-line to-do list app that lets a user add, list, complete, and delete tasks, storing them in memory using Dart collections and classes. This project uses everything from Modules 2–6 and is the bridge project before starting Flutter.',
      km: 'កម្មវិធី Command-Line To-Do List ដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់បន្ថែម មើល បញ្ចប់ និងលុប Tasks ដោយរក្សាទុកក្នុង Memory តាមរយៈ Dart Collections និង Classes។ គម្រោងនេះប្រើប្រាស់ចំណេះដឹងពី Module 2-6 ហើយជាគម្រោងស្ពានចម្លងមុនចូលរៀន Flutter។'
    },
    featureChecklist: {
      en: [
        'Add a new task by title',
        'List all tasks with their complete/incomplete status',
        'Mark a task complete by its index',
        'Delete a task by its index',
        'Simple text menu loop that keeps running until the user chooses Exit'
      ],
      km: [
        'បន្ថែម Task ថ្មីតាមចំណងជើង',
        'បង្ហាញបញ្ជី Task ទាំងអស់ជាមួយស្ថានភាព បញ្ចប់/មិនទាន់បញ្ចប់',
        'កត់ចំណាំ Task ថាបានបញ្ចប់តាមរយៈ Index',
        'លុប Task ចោលតាមរយៈ Index',
        'រង្វង់ Menu អត្ថបទដែលដំណើរការរហូតដល់អ្នកប្រើប្រាស់ជ្រើសរើស ចេញ (Exit)'
      ]
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body style="background:#020617; color:#f8fafc; font-family: monospace; padding:20px; line-height:1.6;">
  <h2 style="color:#38bdf8; margin-top:0;">📋 CLI Task Tracker Demo</h2>
  <div style="background:#0f172a; padding:16px; border-radius:12px; border:1px solid #1e293b;">
    <p style="color:#a855f7;">=== TASK TRACKER MENU ===</p>
    <p>1. Add Task</p>
    <p>2. View All Tasks</p>
    <p>3. Complete Task</p>
    <p>4. Delete Task</p>
    <p>5. Exit</p>
    <hr style="border-color:#1e293b; margin:15px 0;">
    <p style="color:#4ade80;">✅ [1] Learn Dart Null Safety</p>
    <p style="color:#f43f5e;">⬜ [2] Build CLI Task Tracker</p>
  </div>
</body>
</html>`
    },
    finalCode: `class Task {
  String title;
  bool isDone;

  Task(this.title, {this.isDone = false});

  void toggleComplete() {
    isDone = !isDone;
  }

  @override
  String toString() {
    return '\${isDone ? "✅" : "⬜"} $title';
  }
}

void main() {
  List<Task> tasks = [
    Task('Learn Dart fundamentals'),
    Task('Master OOP and Null Safety', isDone: true),
  ];

  print('=== CLI TASK TRACKER ===');
  for (var i = 0; i < tasks.length; i++) {
    print('\${i + 1}. \${tasks[i]}');
  }
}`
  },
  lessons: [
    // MODULE 1
    {
      id: 'dart-1-1',
      slug: 'what-is-dart-and-why-flutter-uses-it',
      moduleNumber: 1,
      lessonNumberInModule: 1,
      title: {
        en: '1.1 What is Dart and why Flutter uses it',
        km: '១.១ អ្វីទៅជា Dart ហើយហេតុអ្វី Flutter ប្រើប្រាស់វា'
      },
      durationMinutes: 12,
      difficulty: 'Beginner',
      explanation: {
        en: 'Dart is a general-purpose programming language created by Google in 2011 and now used primarily to build Flutter apps. It is a compiled language that produces fast native machine code for iOS, Android, web, and desktop.',
        km: 'Dart ជាភាសាសរសេរកម្មវិធីទូទៅមួយ ដែលបង្កើតឡើងដោយ Google នៅឆ្នាំ 2011 ហើយឥឡូវប្រើប្រាស់ជាចម្បងសម្រាប់សាងកម្មវិធី Flutter។ វាជាភាសាប្រភេទ compiled ដែលបំប្លែងទៅជា native machine code លឿនសម្រាប់ iOS, Android, web និង desktop។'
      },
      tutorial: {
        en: 'void main() {\n  print("Hello, Dart!");\n}',
        km: 'void main() {\n  print("សួស្តី ភាសា Dart!");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>1.1 Hello Dart!</h3><pre>void main() {\n  print('Hello, Dart!');\n}</pre></body></html>`
      }
    },
    {
      id: 'dart-1-2',
      slug: 'installing-dart-sdk-and-editor',
      moduleNumber: 1,
      lessonNumberInModule: 2,
      title: {
        en: '1.2 Installing the Dart SDK and setting up your editor',
        km: '១.២ ការដំឡើង Dart SDK និងរៀបចំ Editor'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Learn how to set up DartPad in your browser for zero-install practice, or download the official Dart SDK and VS Code with the Dart extension on your local machine.',
        km: 'រៀនពីរបៀបប្រើប្រាស់ DartPad លើ Web Browser ដោយមិនបាច់ដំឡើង ឬដំឡើង Dart SDK ផ្លូវការ និង VS Code ជាមួយ Dart extension លើកុំព្យូទ័ររបស់អ្នក។'
      },
      tutorial: {
        en: '// In terminal:\n// dart --version\n// dart run hello.dart',
        km: '// ក្នុង terminal:\n// dart --version\n// dart run hello.dart'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#4ade80; padding:20px; font-family:monospace;"><h3>1.2 Setup Commands</h3><p>Run <code>dart --version</code> to verify installation.</p></body></html>`
      }
    },
    {
      id: 'dart-1-3',
      slug: 'your-first-program-hello-dart',
      moduleNumber: 1,
      lessonNumberInModule: 3,
      title: {
        en: '1.3 Your first program — "Hello, Dart!"',
        km: '១.៣ កម្មវិធីដំបូងរបស់អ្នក — "Hello, Dart!"'
      },
      durationMinutes: 13,
      difficulty: 'Beginner',
      explanation: {
        en: 'Every Dart program starts execution from the main() function. String interpolation ($variable) inserts variables directly into strings.',
        km: 'កម្មវិធី Dart ទាំងអស់ចាប់ផ្តើមដំណើរការចេញពីអនុគមន៍ main()។ String interpolation ($variable) អនុញ្ញាតឱ្យបញ្ចូលអថេរទៅក្នុង String ដោយផ្ទាល់។'
      },
      tutorial: {
        en: 'void main() {\n  String name = "Seyha";\n  int age = 25;\n  print("Hello, my name is $name and I am $age years old.");\n}',
        km: 'void main() {\n  String name = "សីហា";\n  int age = 25;\n  print("សួស្តី ខ្ញុំឈ្មោះ $name ហើយខ្ញុំអាយុ $age ឆ្នាំ។");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#f43f5e; padding:20px; font-family:monospace;"><h3>1.3 First Program Output</h3><p style="color:#38bdf8;">Hello, my name is Seyha and I am 25 years old.</p></body></html>`
      }
    },

    // MODULE 2
    {
      id: 'dart-2-1',
      slug: 'variables-and-type-inference',
      moduleNumber: 2,
      lessonNumberInModule: 1,
      title: {
        en: '2.1 Variables and type inference (var, final, const)',
        km: '២.១ អថេរ និង Type Inference (var, final, const)'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Dart is strongly typed, but uses type inference with `var`. Use `final` for runtime immutable values and `const` for compile-time constants.',
        km: 'Dart ជាភាសា Strongly-typed ប៉ុន្តែមាន Type inference ជាមួយ `var`។ ប្រើ `final` សម្រាប់តម្លៃមិនប្រែប្រួលពេល runtime និង `const` សម្រាប់ compile-time constants។'
      },
      tutorial: {
        en: 'void main() {\n  var city = "Phnom Penh"; // inferred as String\n  final now = DateTime.now(); // runtime constant\n  const pi = 3.14159; // compile-time constant\n  print("$city | $now | $pi");\n}',
        km: 'void main() {\n  var city = "ភ្នំពេញ";\n  final now = DateTime.now();\n  const pi = 3.14159;\n  print("$city | $now | $pi");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>2.1 Variables Demo</h3><p>city: Phnom Penh<br>pi: 3.14159</p></body></html>`
      }
    },
    {
      id: 'dart-2-2',
      slug: 'data-types-int-double-string-bool',
      moduleNumber: 2,
      lessonNumberInModule: 2,
      title: {
        en: '2.2 Data types (int, double, String, bool)',
        km: '២.២ ប្រភេទទិន្នន័យ (int, double, String, bool)'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Master Dart core built-in types: int for integers, double for decimals (both inherit from num), String for text, and bool for boolean flags.',
        km: 'ស្វែងយល់ពីប្រភេទទិន្នន័យគ្រឹះរបស់ Dart: int សម្រាប់លេខគត់, double សម្រាប់លេខទសភាគ (ទាំងពីរចំណុះ num), String សម្រាប់អត្ថបទ និង bool សម្រាប់តម្លៃពិត/មិនពិត។'
      },
      tutorial: {
        en: 'void main() {\n  int score = 100;\n  double rating = 4.9;\n  String course = "Dart Mastery";\n  bool isEnrolled = true;\n  print("$course: $score points ($rating/5) - Enrolled: $isEnrolled");\n}',
        km: 'void main() {\n  int score = 100;\n  double rating = 4.9;\n  String course = "Dart Mastery";\n  bool isEnrolled = true;\n  print("$course: $score ពិន្ទុ ($rating/5) - បានចុះឈ្មោះ: $isEnrolled");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>2.2 Data Types</h3><p>int: 100 | double: 4.9 | bool: true</p></body></html>`
      }
    },
    {
      id: 'dart-2-3',
      slug: 'operators-arithmetic-comparison-logical',
      moduleNumber: 2,
      lessonNumberInModule: 3,
      title: {
        en: '2.3 Operators (arithmetic, comparison, logical)',
        km: '២.៣ ប្រមាណវិធី (arithmetic, comparison, logical)'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Dart includes standard arithmetic (+, -, *, /, ~/ for integer division, %), comparison (==, !=, >, <), and logical (&&, ||, !) operators.',
        km: 'Dart រួមបញ្ចូលប្រមាណវិធីគណនា (+, -, *, /, ~/ ចែកយកលេខគត់, %), ប្រៀបធៀប (==, !=, >, <) និង តក្កវិទ្យា (&&, ||, !)។'
      },
      tutorial: {
        en: 'void main() {\n  int a = 10, b = 3;\n  print("Division: ${a / b}"); // 3.3333...\n  print("Integer Division: ${a ~/ b}"); // 3\n  print("Remainder: ${a % b}"); // 1\n}',
        km: 'void main() {\n  int a = 10, b = 3;\n  print("ចែកទូទៅ: ${a / b}"); // 3.3333...\n  print("ចែកយកលេខគត់: ${a ~/ b}"); // 3\n  print("សំណល់: ${a % b}"); // 1\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#eab308; padding:20px; font-family:monospace;"><h3>2.3 Operators</h3><p>10 ~/ 3 = 3 (Integer division)</p></body></html>`
      }
    },
    {
      id: 'dart-2-4',
      slug: 'string-interpolation-and-formatting',
      moduleNumber: 2,
      lessonNumberInModule: 4,
      title: {
        en: '2.4 String interpolation and formatting',
        km: '២.៤ String Interpolation និង Formatting'
      },
      durationMinutes: 14,
      difficulty: 'Beginner',
      explanation: {
        en: 'Use `$variable` or `${expression}` to format strings. Multiline strings use triple quotes (`"""..."""`).',
        km: 'ប្រើ `$variable` ឬ `${expression}` ដើម្បីរៀបចំទម្រង់អត្ថបទ។ អត្ថបទច្រើនបន្ទាត់ប្រើសញ្ញាសម្រង់បី (`"""..."""`)។'
      },
      tutorial: {
        en: 'void main() {\n  double price = 12.50;\n  int qty = 3;\n  print("Total: \\\$\${(price * qty).toStringAsFixed(2)}");\n}',
        km: 'void main() {\n  double price = 12.50;\n  int qty = 3;\n  print("សរុប: \\\$\${(price * qty).toStringAsFixed(2)}");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>2.4 String Formatting</h3><p>Total: $37.50</p></body></html>`
      }
    },
    {
      id: 'dart-2-5',
      slug: 'practice-mini-calculator-script',
      moduleNumber: 2,
      lessonNumberInModule: 5,
      title: {
        en: '2.5 Practice: mini calculator script',
        km: '២.៥ អនុវត្ត: កម្មវិធី Mini Calculator'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Combine variables, types, operators, and formatting to build a standalone calculator script in Dart.',
        km: 'បូកបញ្ចូនអថេរ ប្រភេទទិន្នន័យ ប្រមាណវិធី និងការ Format ដើម្បីសាងសង់ Script គណនាលេខកម្រិតដំបូង។'
      },
      tutorial: {
        en: 'void main() {\n  double num1 = 45.0;\n  double num2 = 15.0;\n  print("Sum: ${num1 + num2}");\n  print("Product: ${num1 * num2}");\n}',
        km: 'void main() {\n  double num1 = 45.0;\n  double num2 = 15.0;\n  print("ផលបូក: ${num1 + num2}");\n  print("ផលគុណ: ${num1 * num2}");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#4ade80; padding:20px; font-family:monospace;"><h3>2.5 Mini Calculator</h3><p>45 + 15 = 60<br>45 * 15 = 675</p></body></html>`
      }
    },

    // MODULE 3
    {
      id: 'dart-3-1',
      slug: 'if-else-else-if',
      moduleNumber: 3,
      lessonNumberInModule: 1,
      title: {
        en: '3.1 if / else / else if',
        km: '៣.១ if / else / else if'
      },
      durationMinutes: 16,
      difficulty: 'Beginner',
      explanation: {
        en: 'Control execution flow based on conditions. Ternary operator `condition ? expr1 : expr2` offers concise conditional checks.',
        km: 'គ្រប់គ្រងលំហូរដំណើរការតាមលក្ខខណ្ឌ។ Ternary operator `condition ? expr1 : expr2` ផ្តល់ការពិនិត្យយ៉ាងខ្លីខ្លឹម។'
      },
      tutorial: {
        en: 'void main() {\n  int age = 18;\n  if (age >= 18) {\n    print("Eligible to vote");\n  } else {\n    print("Underage");\n  }\n}',
        km: 'void main() {\n  int age = 18;\n  if (age >= 18) {\n    print("មានសិទ្ធិបោះឆ្នោត");\n  } else {\n    print("មិនទាន់គ្រប់អាយុ");\n  }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>3.1 Conditionals</h3><p>Age 18: Eligible to vote</p></body></html>`
      }
    },
    {
      id: 'dart-3-2',
      slug: 'switch-statements',
      moduleNumber: 3,
      lessonNumberInModule: 2,
      title: {
        en: '3.2 switch statements and expressions',
        km: '៣.២ switch statements និង expressions'
      },
      durationMinutes: 16,
      difficulty: 'Beginner',
      explanation: {
        en: 'Match values against multiple cases. Modern Dart supports powerful pattern matching in switch expressions.',
        km: 'ផ្ទៀងផ្ទាត់តម្លៃធៀបនឹងករណីជាច្រើន។ Dart ជំនាន់ថ្មីទ្រទ្រង់ Pattern matching យ៉ាងមានប្រសិទ្ធភាពក្នុង switch expression។'
      },
      tutorial: {
        en: 'void main() {\n  String grade = "A";\n  switch (grade) {\n    case "A": print("Excellent!"); break;\n    case "B": print("Good job!"); break;\n    default: print("Keep trying!");\n  }\n}',
        km: 'void main() {\n  String grade = "A";\n  switch (grade) {\n    case "A": print("ល្អប្រសើរខ្លាំង!"); break;\n    case "B": print("ល្អណាស់!"); break;\n    default: print("ព្យាយាមបន្ថែម!");\n  }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>3.2 Switch Cases</h3><p>Grade A: Excellent!</p></body></html>`
      }
    },
    {
      id: 'dart-3-3',
      slug: 'for-while-and-do-while-loops',
      moduleNumber: 3,
      lessonNumberInModule: 3,
      title: {
        en: '3.3 for, while, and do-while loops',
        km: '៣.៣ for, while, និង do-while loops'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Repeat code execution using standard for, for-in, while, and do-while loops. `break` exits early and `continue` skips to the next iteration.',
        km: 'ធ្វើសកម្មភាពដដែលៗដោយប្រើប្រាស់ for, for-in, while, និង do-while loops។ `break` សម្រាប់ចាកចេញ និង `continue` សម្រាប់រំលង។'
      },
      tutorial: {
        en: 'void main() {\n  for (int i = 1; i <= 3; i++) {\n    print("Iteration $i");\n  }\n}',
        km: 'void main() {\n  for (int i = 1; i <= 3; i++) {\n    print("ជុំទី $i");\n  }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>3.3 Loops</h3><p>Iteration 1<br>Iteration 2<br>Iteration 3</p></body></html>`
      }
    },
    {
      id: 'dart-3-4',
      slug: 'practice-fizzbuzz-in-dart',
      moduleNumber: 3,
      lessonNumberInModule: 4,
      title: {
        en: '3.4 Practice: FizzBuzz in Dart',
        km: '៣.៤ អនុវត្ត: កម្មវិធី FizzBuzz ក្នុង Dart'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Classic programming challenge: Print 1-20. Print "Fizz" for multiples of 3, "Buzz" for 5, and "FizzBuzz" for both.',
        km: 'លំហាត់ប្រឡងកូដបុរាណ: បង្ហាញលេខ 1-20។ បង្ហាញ "Fizz" បើសល់ 3, "Buzz" បើសល់ 5, និង "FizzBuzz" បើសល់ទាំងពីរ។'
      },
      tutorial: {
        en: 'void main() {\n  for (int i = 1; i <= 15; i++) {\n    if (i % 15 == 0) print("FizzBuzz");\n    else if (i % 3 == 0) print("Fizz");\n    else if (i % 5 == 0) print("Buzz");\n    else print(i);\n  }\n}',
        km: 'void main() {\n  for (int i = 1; i <= 15; i++) {\n    if (i % 15 == 0) print("FizzBuzz");\n    else if (i % 3 == 0) print("Fizz");\n    else if (i % 5 == 0) print("Buzz");\n    else print(i);\n  }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#f43f5e; padding:20px; font-family:monospace;"><h3>3.4 FizzBuzz</h3><p>1, 2, Fizz, 4, Buzz, Fizz, ..., 15: FizzBuzz</p></body></html>`
      }
    },

    // MODULE 4
    {
      id: 'dart-4-1',
      slug: 'declaring-and-calling-functions',
      moduleNumber: 4,
      lessonNumberInModule: 1,
      title: {
        en: '4.1 Declaring and calling functions',
        km: '៤.១ ការប្រកាស និងហៅប្រើប្រាស់ Functions'
      },
      durationMinutes: 16,
      difficulty: 'Beginner',
      explanation: {
        en: 'Functions structure and encapsulate code logic into reusable blocks. Specify explicit return types or `void` if no value is returned.',
        km: 'Functions រៀបចំកូដជាប្លុកដែលអាចយកមកប្រើឡើងវិញបាន។ បញ្ជាក់ Return type ឬ `void` ប្រសិនបើគ្មានតម្លៃត្រឡប់មកវិញ។'
      },
      tutorial: {
        en: 'int add(int a, int b) {\n  return a + b;\n}\n\nvoid main() {\n  print("Result: ${add(10, 20)}");\n}',
        km: 'int add(int a, int b) {\n  return a + b;\n}\n\nvoid main() {\n  print("លទ្ធផល: ${add(10, 20)}");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.1 Functions</h3><p>add(10, 20) = 30</p></body></html>`
      }
    },
    {
      id: 'dart-4-2',
      slug: 'named-and-optional-parameters',
      moduleNumber: 4,
      lessonNumberInModule: 2,
      title: {
        en: '4.2 Named and optional parameters',
        km: '៤.២ Named និង Optional Parameters'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Dart supports positional parameters, optional positional `[]`, and named parameters `{}`. Flutter widgets rely heavily on named parameters.',
        km: 'Dart ទ្រទ្រង់ Positional, Optional Positional `[]`, និង Named parameters `{}`។ Flutter Widgets ប្រើប្រាស់ Named parameters យ៉ាងច្រើនសន្ធឹកសន្ធាប់។'
      },
      tutorial: {
        en: 'void createUser({required String name, int age = 18, String? city}) {\n  print("$name ($age) - City: ${city ?? "Unknown"}");\n}\n\nvoid main() {\n  createUser(name: "Sophea", city: "Siem Reap");\n}',
        km: 'void createUser({required String name, int age = 18, String? city}) {\n  print("$name ($age) - ទីក្រុង: ${city ?? "មិនស្គាល់"}");\n}\n\nvoid main() {\n  createUser(name: "សុភា", city: "សៀមរាប");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>4.2 Named Parameters</h3><p>Sophea (18) - City: Siem Reap</p></body></html>`
      }
    },
    {
      id: 'dart-4-3',
      slug: 'arrow-functions-and-anonymous-functions',
      moduleNumber: 4,
      lessonNumberInModule: 3,
      title: {
        en: '4.3 Arrow functions and anonymous functions',
        km: '៤.៣ Arrow functions និង Anonymous functions'
      },
      durationMinutes: 16,
      difficulty: 'Beginner',
      explanation: {
        en: 'Arrow syntax `=> expression` simplifies one-line functions. Anonymous functions (lambdas) are passed inline as arguments.',
        km: 'Arrow syntax `=> expression` ជួយសម្រួលអនុគមន៍មួយបន្ទាត់។ Anonymous functions (lambdas) ត្រូវបានបញ្ជូនជា Arguments Inline។'
      },
      tutorial: {
        en: 'int multiply(int a, int b) => a * b;\n\nvoid main() {\n  var numbers = [1, 2, 3];\n  numbers.forEach((n) => print(n * 2));\n}',
        km: 'int multiply(int a, int b) => a * b;\n\nvoid main() {\n  var numbers = [1, 2, 3];\n  numbers.forEach((n) => print(n * 2));\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#4ade80; padding:20px; font-family:monospace;"><h3>4.3 Arrow Functions</h3><p>2<br>4<br>6</p></body></html>`
      }
    },
    {
      id: 'dart-4-4',
      slug: 'practice-reusable-utility-functions',
      moduleNumber: 4,
      lessonNumberInModule: 4,
      title: {
        en: '4.4 Practice: build reusable utility functions',
        km: '៤.៤ អនុវត្ត: បង្កើត Reusable Utility Functions'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Build helper utilities: string formatters, currency converters, and validation helpers using clean Dart functions.',
        km: 'បង្កើត Helper utilities: string formatters, currency converters, និង validation helpers ដោយប្រើប្រាស់ Dart functions។'
      },
      tutorial: {
        en: 'String formatCurrency(double amount, {String symbol = "\$"}) =>\n    "$symbol${amount.toStringAsFixed(2)}";\n\nvoid main() {\n  print(formatCurrency(19.99));\n}',
        km: 'String formatCurrency(double amount, {String symbol = "\$"}) =>\n    "$symbol${amount.toStringAsFixed(2)}";\n\nvoid main() {\n  print(formatCurrency(19.99));\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.4 Utility Functions</h3><p>$19.99</p></body></html>`
      }
    },

    // MODULE 5
    {
      id: 'dart-5-1',
      slug: 'list-creating-looping-common-methods',
      moduleNumber: 5,
      lessonNumberInModule: 1,
      title: {
        en: '5.1 List — creating, looping, common methods',
        km: '៥.១ List — ការបង្កើត ការទាញប្រើ និង Methods ពេញនិយម'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: '`List<T>` is an ordered collection of items. Learn `.add()`, `.map()`, `.where()`, `.fold()`, and spread operator `...`.',
        km: '`List<T>` ជាសំណុំទិន្នន័យមានលំដាប់ថ្នាក់។ រៀនប្រើប្រាស់ `.add()`, `.map()`, `.where()`, `.fold()`, និង Spread operator `...`។'
      },
      tutorial: {
        en: 'void main() {\n  List<String> fruits = ["Apple", "Banana"];\n  fruits.add("Mango");\n  var upper = fruits.map((f) => f.toUpperCase()).toList();\n  print(upper);\n}',
        km: 'void main() {\n  List<String> fruits = ["ផ្លែប៉ោម", "ចេក"];\n  fruits.add("ស្វាយ");\n  var upper = fruits.map((f) => f.toUpperCase()).toList();\n  print(upper);\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>5.1 Dart List</h3><p>[APPLE, BANANA, MANGO]</p></body></html>`
      }
    },
    {
      id: 'dart-5-2',
      slug: 'map-key-value-data',
      moduleNumber: 5,
      lessonNumberInModule: 2,
      title: {
        en: '5.2 Map — key/value data',
        km: '៥.២ Map — ទិន្នន័យ Key/Value'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: '`Map<K, V>` holds key/value pairs (similar to JSON objects or dictionaries). Essential for handling API responses in mobile apps.',
        km: '`Map<K, V>` រក្សាទុកទិន្នន័យជាគូ Key/Value (ស្រដៀង JSON ឬ Dictionary)។ សំខាន់បំផុតសម្រាប់ទទួលទិន្នន័យពី API ក្នុង Mobile Apps។'
      },
      tutorial: {
        en: 'void main() {\n  Map<String, dynamic> user = {"name": "Dara", "score": 95};\n  print("${user[\'name\']} scored ${user[\'score\']}");\n}',
        km: 'void main() {\n  Map<String, dynamic> user = {"name": "ដារ៉ា", "score": 95};\n  print("${user[\'name\']} ទទួលបាន ${user[\'score\']} ពិន្ទុ");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>5.2 Dart Map</h3><p>Dara scored 95</p></body></html>`
      }
    },
    {
      id: 'dart-5-3',
      slug: 'set-unique-values',
      moduleNumber: 5,
      lessonNumberInModule: 3,
      title: {
        en: '5.3 Set — unique values',
        km: '៥.៣ Set — ទិន្នន័យមិនជាន់គ្នា'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: '`Set<T>` is an unordered collection of unique items. Automatically removes duplicate entries.',
        km: '`Set<T>` ជាសំណុំទិន្នន័យមិនជាន់គ្នា។ វាលុបទិន្នន័យស្ទួនដោយស្វ័យប្រវត្តិ។'
      },
      tutorial: {
        en: 'void main() {\n  Set<int> numbers = {1, 2, 2, 3};\n  print(numbers); // {1, 2, 3}\n}',
        km: 'void main() {\n  Set<int> numbers = {1, 2, 2, 3};\n  print(numbers); // {1, 2, 3}\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#eab308; padding:20px; font-family:monospace;"><h3>5.3 Dart Set</h3><p>{1, 2, 3} (Duplicates removed)</p></body></html>`
      }
    },
    {
      id: 'dart-5-4',
      slug: 'practice-word-frequency-counter',
      moduleNumber: 5,
      lessonNumberInModule: 4,
      title: {
        en: '5.4 Practice: word frequency counter',
        km: '៥.៤ អនុវត្ត: កម្មវិធីរាប់ពាក្យស្ទួន'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Process a sentence string into words, count word frequencies using a Map, and display sorted analytics.',
        km: 'បំបែកប្រយោគជាពាក្យ រាប់ចំនួនពាក្យដែលស្ទួនដោយប្រើ Map និងបង្ហាញលទ្ធផលវិភាគ។'
      },
      tutorial: {
        en: 'void main() {\n  String text = "dart flutter dart flutter mobile";\n  Map<String, int> counts = {};\n  for (var word in text.split(" ")) {\n    counts[word] = (counts[word] ?? 0) + 1;\n  }\n  print(counts);\n}',
        km: 'void main() {\n  String text = "dart flutter dart flutter mobile";\n  Map<String, int> counts = {};\n  for (var word in text.split(" ")) {\n    counts[word] = (counts[word] ?? 0) + 1;\n  }\n  print(counts);\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#4ade80; padding:20px; font-family:monospace;"><h3>5.4 Frequency Counter</h3><p>{dart: 2, flutter: 2, mobile: 1}</p></body></html>`
      }
    },

    // MODULE 6
    {
      id: 'dart-6-1',
      slug: 'classes-constructors-and-objects',
      moduleNumber: 6,
      lessonNumberInModule: 1,
      title: {
        en: '6.1 Classes, constructors, and objects',
        km: '៦.១ Classes, constructors, និង objects'
      },
      durationMinutes: 22,
      difficulty: 'Beginner',
      explanation: {
        en: 'A class is a blueprint for creating objects. Shorthand constructors (`Task(this.title)`) automatically bind arguments to instance fields.',
        km: 'Class ជាគំរូសម្រាប់បង្កើត Objects។ Shorthand constructor (`Task(this.title)`) កត់ត្រាតម្លៃបញ្ចូលទៅក្នុង Field ដោយស្វ័យប្រវត្តិ។'
      },
      tutorial: {
        en: 'class Task {\n  String title;\n  bool isDone;\n  Task(this.title, {this.isDone = false});\n  void printStatus() => print("${isDone ? "✅" : "⬜"} $title");\n}\n\nvoid main() {\n  var t = Task("Learn OOP");\n  t.printStatus();\n}',
        km: 'class Task {\n  String title;\n  bool isDone;\n  Task(this.title, {this.isDone = false});\n  void printStatus() => print("${isDone ? "✅" : "⬜"} $title");\n}\n\nvoid main() {\n  var t = Task("រៀន OOP");\n  t.printStatus();\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.1 Dart Class</h3><p>⬜ Learn OOP</p></body></html>`
      }
    },
    {
      id: 'dart-6-2',
      slug: 'inheritance-and-extends',
      moduleNumber: 6,
      lessonNumberInModule: 2,
      title: {
        en: '6.2 Inheritance and extends',
        km: '៦.២ Inheritance និង extends'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Subclasses inherit properties and methods from parent classes using `extends`. Use `super` to invoke parent constructors.',
        km: 'Subclasses ទទួលមរតកពី Parent class ដោយប្រើ `extends`។ ប្រើ `super` ដើម្បីហៅប្រើ Parent constructors។'
      },
      tutorial: {
        en: 'class Vehicle {\n  String brand;\n  Vehicle(this.brand);\n}\nclass Car extends Vehicle {\n  Car(String brand) : super(brand);\n}',
        km: 'class Vehicle {\n  String brand;\n  Vehicle(this.brand);\n}\nclass Car extends Vehicle {\n  Car(String brand) : super(brand);\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>6.2 Inheritance</h3><p>Car inherits brand from Vehicle</p></body></html>`
      }
    },
    {
      id: 'dart-6-3',
      slug: 'abstract-classes-and-interfaces',
      moduleNumber: 6,
      lessonNumberInModule: 3,
      title: {
        en: '6.3 Abstract classes and interfaces (implements)',
        km: '៦.៣ Abstract classes និង interfaces (implements)'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Abstract classes cannot be instantiated directly and define interface contracts that implementing classes must fulfill.',
        km: 'Abstract class មិនអាចបង្កើតជា Object ដោយផ្ទាល់បានទេ និងបានកំណត់ទម្រង់ប្រព័ន្ធដែល Class ផ្សេងត្រូវយកទៅអនុវត្ត។'
      },
      tutorial: {
        en: 'abstract class Repository {\n  void save(String item);\n}\nclass LocalRepo implements Repository {\n  @override\n  void save(String item) => print("Saved $item to SQLite");\n}',
        km: 'abstract class Repository {\n  void save(String item);\n}\nclass LocalRepo implements Repository {\n  @override\n  void save(String item) => print("Saved $item to SQLite");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.3 Abstract Class</h3><p>Saved item to SQLite</p></body></html>`
      }
    },
    {
      id: 'dart-6-4',
      slug: 'getters-setters-and-encapsulation',
      moduleNumber: 6,
      lessonNumberInModule: 4,
      title: {
        en: '6.4 Getters, setters, and encapsulation',
        km: '៦.៤ Getters, setters, និង encapsulation'
      },
      durationMinutes: 18,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Protect internal class state using library-private fields (`_propertyName`). Provide controlled read/write access via `get` and `set`.',
        km: 'ការពារតម្លៃខាងក្នុង Class ដោយប្រើសញ្ញា (`_propertyName`)។ ផ្តល់សិទ្ធិអាន/សរសេរតាមរយៈ `get` និង `set`។'
      },
      tutorial: {
        en: 'class BankAccount {\n  double _balance = 0.0;\n  double get balance => _balance;\n  set deposit(double amount) {\n    if (amount > 0) _balance += amount;\n  }\n}',
        km: 'class BankAccount {\n  double _balance = 0.0;\n  double get balance => _balance;\n  set deposit(double amount) {\n    if (amount > 0) _balance += amount;\n  }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#eab308; padding:20px; font-family:monospace;"><h3>6.4 Encapsulation</h3><p>Balance: $100.00</p></body></html>`
      }
    },
    {
      id: 'dart-6-5',
      slug: 'practice-class-hierarchy',
      moduleNumber: 6,
      lessonNumberInModule: 5,
      title: {
        en: '6.5 Practice: build a class hierarchy',
        km: '៦.៥ អនុវត្ត: បង្កើត Class Hierarchy (Animal → Dog/Cat)'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Build a multi-level object hierarchy with polymorphic methods and shared base behavior.',
        km: 'បង្កើតរចនាសម្ព័ន្ធ Class ច្រើនថ្នាក់ ជាមួយ Polymorphic methods និងចរិតលក្ខណៈរួម។'
      },
      tutorial: {
        en: 'abstract class Animal {\n  String name;\n  Animal(this.name);\n  void makeSound();\n}\nclass Dog extends Animal {\n  Dog(String name) : super(name);\n  @override\n  void makeSound() => print("$name barks!");\n}',
        km: 'abstract class Animal {\n  String name;\n  Animal(this.name);\n  void makeSound();\n}\nclass Dog extends Animal {\n  Dog(String name) : super(name);\n  @override\n  void makeSound() => print("$name barks!");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#4ade80; padding:20px; font-family:monospace;"><h3>6.5 Polymorphism</h3><p>Rex barks!</p></body></html>`
      }
    },

    // MODULE 7
    {
      id: 'dart-7-1',
      slug: 'null-safety-basics',
      moduleNumber: 7,
      lessonNumberInModule: 1,
      title: {
        en: '7.1 Null safety basics (?, !, late)',
        km: '៧.១ មូលដ្ឋានគ្រឹះ Null Safety (?, !, late)'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Dart Sound Null Safety catches null pointer errors at compile-time. Variables are non-nullable by default unless marked with `?`. Use `late` for delayed initialization.',
        km: 'Sound Null Safety របស់ Dart ទប់ស្កាត់កំហុស null ពេល compile-time។ អថេរទាំងអស់មិនអាចស្មើ null ទេ លុះត្រាតែដាក់សញ្ញា `?`។ ប្រើ `late` សម្រាប់កំណត់តម្លៃពេលក្រោយ។'
      },
      tutorial: {
        en: 'void main() {\n  String name = "Seyha"; // non-nullable\n  String? nickname; // nullable\n  late String address;\n  address = "Phnom Penh";\n  print("${nickname ?? "No nickname"} living in $address");\n}',
        km: 'void main() {\n  String name = "សីហា";\n  String? nickname;\n  late String address;\n  address = "ភ្នំពេញ";\n  print("${nickname ?? "គ្មានឈ្មោះហៅក្រៅ"} រស់នៅ $address");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>7.1 Null Safety</h3><p>No nickname living in Phnom Penh</p></body></html>`
      }
    },
    {
      id: 'dart-7-2',
      slug: 'handling-nullable-values-safely',
      moduleNumber: 7,
      lessonNumberInModule: 2,
      title: {
        en: '7.2 Handling nullable values safely',
        km: '៧.២ ការដោះស្រាយតម្លៃ Nullable ដោយសុវត្ថិភាព'
      },
      durationMinutes: 18,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use null-aware operators: `?.` for safe property access, `??=` for null-aware assignment, and `??` for default fallbacks.',
        km: 'ប្រើប្រាស់ Null-aware operators: `?.` សម្រាប់អានតម្លៃ, `??=` សម្រាប់ផ្តល់តម្លៃបើ null, និង `??` សម្រាប់តម្លៃជំនួស។'
      },
      tutorial: {
        en: 'void main() {\n  String? name;\n  print(name?.length); // null instead of crash\n  name ??= "Default User";\n  print(name);\n}',
        km: 'void main() {\n  String? name;\n  print(name?.length); // null ដោយមិនបណ្តាលឱ្យ Crash\n  name ??= "អ្នកប្រើប្រាស់ទូទៅ";\n  print(name);\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>7.2 Null Aware</h3><p>null<br>Default User</p></body></html>`
      }
    },
    {
      id: 'dart-7-3',
      slug: 'introduction-to-future-and-async-await',
      moduleNumber: 7,
      lessonNumberInModule: 3,
      title: {
        en: '7.3 Introduction to Future and async/await',
        km: '៧.៣ សេចក្តីផ្តើមអំពី Future និង async/await'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Handle asynchronous operations (network HTTP requests, database I/O) without blocking the UI thread using Futures and `async/await`.',
        km: 'ដោះស្រាយប្រត្តិបត្តិការ Asynchronous (ការទាញយកទិន្នន័យពី Internet ឬ ដកស្រង់ពី Database) ដោយមិនឱ្យស្ទះ UI Thread ដោយប្រើប្រាស់ Futures និង `async/await`។'
      },
      tutorial: {
        en: 'Future<String> fetchUser() async {\n  await Future.delayed(Duration(seconds: 1));\n  return "UserData loaded";\n}\n\nvoid main() async {\n  print("Fetching...");\n  var data = await fetchUser();\n  print(data);\n}',
        km: 'Future<String> fetchUser() async {\n  await Future.delayed(Duration(seconds: 1));\n  return "ទិន្នន័យត្រូវបានទាញយក";\n}\n\nvoid main() async {\n  print("កំពុងទាញយក...");\n  var data = await fetchUser();\n  print(data);\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#4ade80; padding:20px; font-family:monospace;"><h3>7.3 Async Await</h3><p>Fetching...<br>UserData loaded (after 1s)</p></body></html>`
      }
    },
    {
      id: 'dart-7-4',
      slug: 'error-handling-with-try-catch',
      moduleNumber: 7,
      lessonNumberInModule: 4,
      title: {
        en: '7.4 Error handling with try/catch',
        km: '៧.៤ ការគ្រប់គ្រងកំហុស Error handling ជាមួយ try/catch'
      },
      durationMinutes: 18,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Gracefully catch and handle runtime exceptions using `try`, `catch`, `on Exception`, and `finally` blocks.',
        km: 'ទប់ស្កាត់ និងដោះស្រាយកំហុសកំឡុងពេលរត់កម្មវិធីដោយប្រើ `try`, `catch`, `on Exception`, និង `finally`។'
      },
      tutorial: {
        en: 'void main() {\n  try {\n    int result = 10 ~/ 0;\n  } catch (e) {\n    print("Caught error: $e");\n  } finally {\n    print("Cleanup complete");\n  }\n}',
        km: 'void main() {\n  try {\n    int result = 10 ~/ 0;\n  } catch (e) {\n    print("ប្រទះកំហុស: $e");\n  } finally {\n    print("បញ្ចប់ដំណើរការ");\n  }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#f43f5e; padding:20px; font-family:monospace;"><h3>7.4 Exception Handling</h3><p>Caught error: IntegerDivisionByZeroException</p></body></html>`
      }
    },
    {
      id: 'dart-7-5',
      slug: 'practice-simulate-network-call',
      moduleNumber: 7,
      lessonNumberInModule: 5,
      title: {
        en: '7.5 Practice: simulate a network call with delayed Futures',
        km: '៧.៥ អនុវត្ត: ធ្វើតេស្តទាញយកទិន្នន័យពី Network ជាមួយ Futures'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Simulate API network fetching with loading states, latency simulation, JSON parsing, and exception recovery.',
        km: 'ធ្វើតេស្តទាញយកទិន្នន័យពី API Network ជាមួយ Loading states, Delay, ការបំប្លែង JSON និងទប់ស្កាត់កំហុស Network។'
      },
      tutorial: {
        en: 'Future<Map<String, dynamic>> loadProfile() async {\n  await Future.delayed(Duration(milliseconds: 800));\n  return {"id": 101, "status": "active"};\n}',
        km: 'Future<Map<String, dynamic>> loadProfile() async {\n  await Future.delayed(Duration(milliseconds: 800));\n  return {"id": 101, "status": "active"};\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>7.5 API Network Simulation</h3><p>Status: 200 OK - Profile Loaded</p></body></html>`
      }
    },

    // MODULE 8
    {
      id: 'dart-8-1',
      slug: 'planning-the-cli-task-tracker',
      moduleNumber: 8,
      lessonNumberInModule: 1,
      title: {
        en: '8.1 Planning the CLI Task Tracker (data model, features)',
        km: '៨.១ រៀបចំគម្រោង CLI Task Tracker (Data model, features)'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Design the Task object model, define CRUD state operations, and map out the interactive terminal loop structure.',
        km: 'ឌីសាញ Task object model កំណត់ប្រតិបត្តិការ CRUD state និងរៀបចំរចនាសម្ព័ន្ធរង្វង់ Menu ក្នុង Terminal។'
      },
      tutorial: {
        en: '// Plan:\n// 1. Task Class (title, isDone)\n// 2. TaskManager Class (List<Task>, add, list, complete, delete)\n// 3. Interactive Menu Loop',
        km: '// ផែនការ:\n// ១. Task Class (title, isDone)\n// ២. TaskManager Class (List<Task>, add, list, complete, delete)\n// ៣. Interactive Menu Loop'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>8.1 Architecture Plan</h3><p>Data Model + CLI Loop Design</p></body></html>`
      }
    },
    {
      id: 'dart-8-2',
      slug: 'building-the-cli-task-tracker',
      moduleNumber: 8,
      lessonNumberInModule: 2,
      title: {
        en: '8.2 Building the CLI Task Tracker (full guided build)',
        km: '៨.២ សាងសង់ CLI Task Tracker ពេញលេញ'
      },
      durationMinutes: 30,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Construct the full CLI application combining Classes, Collections, Control Flow, and Null Safety into a complete portfolio project.',
        km: 'សាងសង់កម្មវិធី CLI ពេញលេញដោយបូកបញ្ចូល Classes, Collections, Control Flow, និង Null Safety ទៅជាគម្រោងបញ្ចប់ការសិក្សា។'
      },
      tutorial: {
        en: 'void main() {\n  print("=== CLI TASK TRACKER COMPLETED ===");\n  // Complete source code available in Capstone tab\n}',
        km: 'void main() {\n  print("=== CLI TASK TRACKER បានបញ្ចប់ ===");\n  // កូដពេញលេញមានក្នុង Capstone Tab\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#4ade80; padding:20px; font-family:monospace;"><h3>8.2 Final Build</h3><p>Ready to jump into Flutter development!</p></body></html>`
      }
    }
  ]
};
