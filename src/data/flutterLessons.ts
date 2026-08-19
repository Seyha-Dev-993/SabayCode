import { Topic, ReferenceItem, Quiz, MiniProject } from '../types';

export const flutterTopics: Topic[] = [
  {
    id: "getting-started",
    title: { en: "Getting Started", km: "ការចាប់ផ្តើមជាមួយ Flutter" },
    lessons: [
      {
        id: "flutter-what-is-flutter",
        title: { en: "1. What is Flutter & Why Use It", km: "១. អ្វីទៅជា Flutter និងហេតុអ្វីត្រូវប្រើវា" },
        content: {
          en: `# What is Flutter & Why Use It?

Flutter is Google's open-source UI software development kit (SDK) designed for building beautiful, natively compiled, multi-platform applications from a single codebase.

### Key Highlights
- **Single Codebase**: Target iOS, Android, Web, Windows, macOS, Linux, and embedded devices from one set of Dart code.
- **High Performance**: Renders directly using its own Impeller / Skia engine at up to 120 FPS without relying on webview or OS platform bridges.
- **Expressive UI**: Everything in Flutter is a **Widget**. Customize every pixel with deep design precision.
- **Developer Velocity**: Hot Reload updates code changes in sub-seconds while retaining application state.

### How Flutter Works
Unlike WebViews or JS bridges, Flutter draws every UI element directly on an OpenGL/Vulkan canvas provided by the native operating system.

\`\`\`
+-----------------------------------+
|         Your Flutter Code         |
+-----------------------------------+
|      Flutter Framework (Dart)     |
+-----------------------------------+
|     Engine (Impeller/Skia/C++)    |
+-----------------------------------+
|         Platform (iOS/Android)    |
+-----------------------------------+
\`\`\`
`,
          km: `# អ្វីទៅជា Flutter និងហេតុអ្វីត្រូវប្រើវា?

Flutter គឺជា UI Toolkit ឬ SDK ដែលអភិវឌ្ឍដោយក្រុមហ៊ុន Google សម្រាប់បង្កើតកម្មវិធី Natively Compiled ដំណើរការលើ Mobile (iOS/Android), Web, និង Desktop (Windows/macOS/Linux) ចេញពី Codebase តែមួយ។

### ចំណុចសំខាន់ៗ៖
- **សរសេរកូដតែម្តង**: រត់បានលើ Android, iOS, Web និង Desktop ដោយប្រើភាសា Dart តែមួយ។
- **ល្បឿនលឿនខ្ពស់**: ប្រើប្រាស់ Engine ផ្ទាល់ខ្លួន (Impeller/Skia) ដើម្បី Render UI រហូតដល់ 120 FPS ដោយមិនចាំបាច់ឆ្លងកាត់ JavaScript Bridge។
- **UI ស្រស់ស្អាតឥតដែនកំណត់**: អ្វីៗគ្រប់យ៉ាងក្នុង Flutter គឺជា **Widget** ដែលអាចកែច្នៃបានគ្រប់ Pixel។
- **Hot Reload**: មើលឃើញការផ្លាស់ប្តូរកូដភ្លាមៗក្នុងពេលតិចជាង ១ វិនាទី ដោយមិនបាត់បង់ State។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: const Color(0xFF0F172A),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: const [
              Icon(Icons.flutter_dash, size: 80, color: Color(0xFF027DFD)),
              SizedBox(height: 16),
              Text(
                '💙 Welcome to Flutter & SabayCode!',
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: Colors.white),
              ),
              SizedBox(height: 8),
              Text(
                'Build once, run anywhere with high performance.',
                style: TextStyle(fontSize: 14, color: Colors.slate),
              ),
            ],
          ),
        ),
      ),
    ),
  );
}`
      },
      {
        id: "flutter-setup-env",
        title: { en: "2. Setting Up SDK & Environment", km: "២. ការដំឡើង Flutter SDK និងបរិស្ថានអភិវឌ្ឍន៍" },
        content: {
          en: `# Setting Up the Flutter Development Environment

To start developing with Flutter, you need the Flutter SDK along with an editor like VS Code or Android Studio.

### Step 1: Install Flutter SDK
1. Download Flutter SDK for your OS from the official release page.
2. Extract the SDK zip archive into your desired folder (e.g. \`C:\\src\\flutter\` or \`~/development/flutter\`).
3. Add \`flutter/bin\` to your system Environment PATH variable.

### Step 2: Verify Setup with Flutter Doctor
Open your terminal or command prompt and run:
\`\`\`bash
flutter doctor
\`\`\`
This command checks your machine for installed dependencies (Android Studio, Xcode, Chrome, VS Code) and tells you what needs configuration.

### Step 3: Editor Plugins
In VS Code, install:
- **Flutter** extension
- **Dart** extension
This provides syntax highlighting, code completion, widget refactoring tools, and embedded debugging.
`,
          km: `# ការដំឡើង Flutter SDK និងបរិស្ថានអភិវឌ្ឍន៍

ដើម្បីចាប់ផ្តើមសរសេរ Flutter អ្នកត្រូវដំឡើង Flutter SDK និង Editor ដូចជា VS Code ឬ Android Studio។

### ជំហានទី ១៖ ដំឡើង Flutter SDK
១. ទាញយក Flutter SDK តាមប្រព័ន្ធប្រតិបត្តិការរបស់អ្នក (Windows, macOS, Linux)។
២. ពន្លាត zip ទៅកាន់ Folder ណាមួយ (ឧទាហរណ៍៖ \`C:\\src\\flutter\` ឬ \`~/development/flutter\`)។
៣. បញ្ចូល path \`flutter/bin\` ទៅក្នុង System Environment Variable (PATH)។

### ជំហានទី ២៖ ពិនិត្យមើលតាមរយៈ Flutter Doctor
បើក Terminal ឬ Command Prompt រួចវាយ៖
\`\`\`bash
flutter doctor
\`\`\`
ពាក្យបញ្ជានេះនឹងស្កេនពិនិត្យមើល Tool ទាំងអស់ដែលត្រូវការ (Android SDK, Xcode, Editor) ហើយបង្ហាញការណែនាំ។

### ជំហានទី ៣៖ ដំឡើង Extension លើ VS Code
- **Flutter** Extension
- **Dart** Extension
ផ្តល់ភាពងាយស្រួលក្នុងការ Auto-complete, Code Formatting, និង Hot Reload។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Flutter Doctor Status'),
          backgroundColor: const Color(0xFF02569B),
        ),
        body: ListView(
          padding: const EdgeInsets.all(16),
          children: const [
            ListTile(
              leading: Icon(Icons.check_circle, color: Colors.green),
              title: Text('Flutter SDK installed (v3.x)'),
              subtitle: Text('Channel stable'),
            ),
            ListTile(
              leading: Icon(Icons.check_circle, color: Colors.green),
              title: Text('Android Toolchain'),
              subtitle: Text('Android SDK installed'),
            ),
            ListTile(
              leading: Icon(Icons.check_circle, color: Colors.green),
              title: Text('VS Code & Dart Extensions'),
              subtitle: Text('Ready for coding'),
            ),
          ],
        ),
      ),
    ),
  );
}`
      },
      {
        id: "flutter-first-project",
        title: { en: "3. Creating Your First Flutter Project", km: "៣. ការបង្កើតគម្រោង Flutter ដំបូងរបស់អ្នក" },
        content: {
          en: `# Creating Your First Flutter Project

You can create a new Flutter app using the terminal CLI or VS Code command palette.

### CLI Command
\`\`\`bash
flutter create my_first_app
cd my_first_app
flutter run
\`\`\`

### Project Folder Anatomy
- **\`lib/\`**: Contains all your Dart source code. **\`lib/main.dart\`** is the entry point.
- **\`pubspec.yaml\`**: Configuration file managing dependencies, assets, fonts, and app metadata.
- **\`android/\` & \`ios/\`**: Platform-specific native wrapper projects.
- **\`web/\` & \`windows/\`**: Platform targets for Web and Desktop.
- **\`test/\`**: Contains automated widget and unit tests.
`,
          km: `# ការបង្កើតគម្រោង Flutter ដំបូងរបស់អ្នក

អ្នកអាចបង្កើត Flutter App ថ្មីតាមរយៈ Terminal ឬ VS Code Command Palette។

### ពាក្យបញ្ជាបង្កើតក្នុង Terminal
\`\`\`bash
flutter create my_first_app
cd my_first_app
flutter run
\`\`\`

### រចនាសម្ព័ន្ធ Folder នៃគម្រោង៖
- **\`lib/\`**: ជាកន្លែងរក្សាទុកកូដ Dart ទាំងអស់។ **\`lib/main.dart\`** គឺជាចំណុចចាប់ផ្តើម។
- **\`pubspec.yaml\`**: ឯកសារទិន្នន័យសម្រាប់គ្រប់គ្រង Package Dependencies, Assets, Fonts និង App Version។
- **\`android/\` & \`ios/\`**: ឯកសារ Native សម្រាប់ Android និង iOS។
- **\`web/\`**: ឯកសារសម្រាប់ការដំណើរការលើ Web Browser។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MySabayApp());

class MySabayApp extends StatelessWidget {
  const MySabayApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SabayCode Flutter',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
      ),
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My First Flutter App'),
        backgroundColor: const Color(0xFF027DFD),
        foregroundColor: Colors.white,
      ),
      body: const Center(
        child: Text(
          '🎉 Congratulations on your first Flutter app!',
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-main-entry",
        title: { en: "4. Understanding main.dart & App Entry", km: "៤. ការយល់ដឹងអំពី main.dart និង App Entry Point" },
        content: {
          en: `# Understanding main.dart & App Entry Point

In Dart and Flutter, execution begins at the top-level \`main()\` function.

### The \`runApp()\` Function
The \`runApp()\` function takes the given \`Widget\` and attaches it as the root of the widget tree.

\`\`\`dart
void main() {
  runApp(const MyApp());
}
\`\`\`

### The \`MaterialApp\` Root Widget
\`MaterialApp\` wraps your entire app with Material Design visual conventions, routing capabilities, and theme data.

- **\`home\`**: The default screen displayed when the app launches.
- **\`theme\`**: Global color palette, typography, and widget themes.
- **\`debugShowCheckedModeBanner\`**: Shows or hides the "DEBUG" banner ribbon in top-right corner.
`,
          km: `# ការយល់ដឹងអំពី main.dart និង App Entry Point

ក្នុង Flutter កម្មវិធីទាំងមូលចាប់ផ្តើមដំណើការចេញពីអនុគមន៍ \`main()\`។

### អនុគមន៍ \`runApp()\`
\`runApp()\` មានតួនាទីទទួលយក Root Widget ហើយភ្ជាប់វាទៅកាន់ Screen Render Tree។

\`\`\`dart
void main() {
  runApp(const MyApp());
}
\`\`\`

### Root Widget \`MaterialApp\`
\`MaterialApp\` ផ្តល់នូវ Material Design Guidelines, Navigation, និង Theme ដល់ App ទាំងមូល។

- **\`home\`**: អេក្រង់ដំបូងដែលត្រូវបង្ហាញពេលបើក App។
- **\`theme\`**: ការកំណត់ពណ៌ និង Style ទូទៅ។
- **\`debugShowCheckedModeBanner\`**: បង្ហាញ ឬលាក់ស្លាក "DEBUG" នៅខាងស្តាំលើ។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() {
  print('App is launching from main()...');
  runApp(const RootApp());
}

class RootApp extends StatelessWidget {
  const RootApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark(),
      home: Scaffold(
        body: Center(
          child: Container(
            padding: const EdgeInsets.all(24),
            decoration: BoxDecoration(
              color: Colors.blueGrey.shade900,
              borderRadius: BorderRadius.circular(16),
            ),
            child: const Text(
              '🚀 App initialized inside main() -> runApp()',
              style: TextStyle(fontSize: 16, color: Colors.cyanAccent),
            ),
          ),
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-hot-reload-restart",
        title: { en: "5. Hot Reload & Hot Restart", km: "៥. ការយល់ដឹងអំពី Hot Reload និង Hot Restart" },
        content: {
          en: `# Hot Reload vs. Hot Restart

One of Flutter's best developer features is instant code updates without rebuilding the whole binary.

### 1. Hot Reload (\`r\` in terminal or \`Ctrl+S\` / \`Cmd+S\`)
- Injects updated code directly into the running Dart Virtual Machine (VM).
- **Preserves App State**: The state variables (counters, text inputs, scroll positions) remain intact.
- Takes **under 1 second**.

### 2. Hot Restart (\`R\` in terminal)
- Recompiles code and restarts the app from \`main()\`.
- **Destroys App State**: Resets state back to initial default values.
- Used when modifying global variables, \`main()\`, or \`initState()\`.

| Feature | Hot Reload | Hot Restart |
|---|---|---|
| Speed | Sub-second | ~2-3 seconds |
| Preserves State | Yes | No |
| Re-runs main() | No | Yes |
`,
          km: `# ភាពខុសគ្នារវាង Hot Reload និង Hot Restart

លក្ខណៈពិសេសចម្បងនៃ Flutter គឺសមត្ថភាពធ្វើបច្ចុប្បន្នភាពកូដភ្លាមៗដោយមិនចាំបាច់ Build ឡើងវិញពីដើម។

### ១. Hot Reload (\`r\` ឬ \`Ctrl+S\`)
- បញ្ចូលកូដដែលបានកែប្រែទៅក្នុង Dart VM ភ្លាមៗ។
- **រក្សាទុក State ដដែល**: មិនបាត់បង់ទិន្នន័យដែលកំពុងវាយ ឬទិន្នន័យ Counter ឡើយ។
- ល្បឿនលឿនជាង ១ វិនាទី។

### ២. Hot Restart (\`R\`)
- Restart កម្មវិធីឡើងវិញចាប់ពីអនុគមន៍ \`main()\`។
- **លុប State ទាំងអស់**: កំណត់ទិន្នន័យទៅ Default ឡើងវិញ។
- ប្រើនៅពេលកែប្រែ Global State, \`main()\`, ឬ \`initState()\`.
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const HotReloadDemo());

class HotReloadDemo extends StatefulWidget {
  const HotReloadDemo({super.key});

  @override
  State<HotReloadDemo> createState() => _HotReloadDemoState();
}

class _HotReloadDemoState extends State<HotReloadDemo> {
  int _counter = 10;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: const Text('Hot Reload Test')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text('Change color below and press Hot Reload:', style: TextStyle(fontSize: 14)),
              const SizedBox(height: 12),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                color: Colors.amber, // Try changing to Colors.indigo!
                child: Text('Counter State: $_counter', style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
              ),
              const SizedBox(height: 20),
              ElevatedButton.icon(
                onPressed: () => setState(() => _counter++),
                icon: const Icon(Icons.add),
                label: const Text('Increment State'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`
      }
    ]
  },
  {
    id: "dart-fundamentals",
    title: { en: "Dart Fundamentals", km: "មូលដ្ឋានគ្រឹះនៃភាសា Dart" },
    lessons: [
      {
        id: "flutter-dart-variables-nullsafety",
        title: { en: "1. Variables, Types & Null Safety", km: "១. អថេរ ប្រភេទទិន្នន័យ និង Null Safety" },
        content: {
          en: `# Dart Variables & Sound Null Safety

Dart is strongly typed with compile-time null safety guarantees.

### Basic Data Types
- \`int\`: Integer values (\`int age = 25;\`)
- \`double\`: Floating point numbers (\`double price = 12.99;\`)
- \`String\`: Text string (\`String name = 'Sophea';\`)
- \`bool\`: Boolean (\`bool isActive = true;\`)

### Type Declarations
- \`var\`: Inferred type at initialization.
- \`final\`: Read-only single assignment at runtime.
- \`const\`: Compile-time constant.

### Sound Null Safety
By default, variables **cannot be null**. To allow nulls, append \`?\`:

\`\`\`dart
String name = 'Dara'; // Cannot be null
String? nickname;     // Can hold String OR null

// Null-aware operators:
print(nickname ?? 'No Nickname'); // Fallback if null
print(nickname?.length);           // Safe navigation
\`\`\`
`,
          km: `# អថេរ ប្រភេទទិន្នន័យ និង Null Safety ក្នុង Dart

Dart ជាភាសាដែលមានប្រព័ន្ធ Type សុវត្ថិភាពខ្ពស់ ការពារកុំឲ្យកើតមាន Error មកពី Null (Null Pointer Exception)។

### ប្រភេទទិន្នន័យគ្រឹះ៖
- \`int\`: ចំនួនគត់
- \`double\`: ចំនួនទសភាគ
- \`String\`: អត្ថបទ
- \`bool\`: ពិត/មិនពិត (true/false)

### Null Safety:
តាម Default អថេរក្នុង Dart មិនអាចស្មើ Null បានឡើយ។ ប្រសិនបើចង់អនុញ្ញាតឲ្យស្មើ Null ត្រូវថែម \`?\` នៅខាងចុង៖

\`\`\`dart
String name = 'Dara'; // មិនអាចស្មើ null ទេ
String? nickname;     // អាចស្មើ null បាន

print(nickname ?? 'គ្មានឈ្មោះហៅក្រៅ'); // បង្ហាញ Default value បើ null
\`\`\`
`
        },
        starterCode: `void main() {
  final String studentName = 'Bopha';
  int age = 21;
  double gpa = 3.85;
  String? avatarUrl; // Nullable String

  print('Student: $studentName, Age: $age, GPA: $gpa');
  
  // Using null-aware operator
  String displayAvatar = avatarUrl ?? 'https://sabaycode.com/default-avatar.png';
  print('Avatar URL: $displayAvatar');
}`
      },
      {
        id: "flutter-dart-functions-arrow",
        title: { en: "2. Functions & Arrow Syntax", km: "២. អនុគមន៍ និង Arrow Syntax" },
        content: {
          en: `# Functions & Named Parameters in Dart

Functions are first-class objects in Dart.

### Named Parameters
Enclose parameters in \`{}\` to make them named and optional or required:

\`\`\`dart
void greetUser({required String name, String greeting = 'Hello'}) {
  print('$greeting, $name!');
}

greetUser(name: 'Seyha', greeting: 'Good Morning');
\`\`\`

### Arrow Functions
For single-expression functions, use the arrow syntax \`=>\`:

\`\`\`dart
int add(int a, int b) => a + b;
bool isEven(int n) => n % 2 == 0;
\`\`\`
`,
          km: `# អនុគមន៍ និង Arrow Syntax ក្នុង Dart

អនុគមន៍ (Functions) ក្នុង Dart អាចទទួល Parameters ជាឈ្មោះ (Named Parameters) ដែលផ្តល់ភាពច្បាស់លាស់ពេលហៅប្រើ។

### Named Parameters:
ប្រើប្រាស់ \`{}\` ជុំវិញ Parameter ៖

\`\`\`dart
void greetUser({required String name, String greeting = 'Hello'}) {
  print('$greeting, $name!');
}

greetUser(name: 'Seyha', greeting: 'សួស្តី');
\`\`\`

### Arrow Syntax (\`=>\`):
ប្រើប្រាស់សម្រាប់ Function ដែលមានតែ ១ បន្ទាត់៖

\`\`\`dart
int doubleVal(int x) => x * 2;
\`\`\`
`
        },
        starterCode: `void main() {
  // Named parameter call
  final card = buildUserCard(name: 'Channak', role: 'Flutter Developer', xp: 450);
  print(card);

  // Arrow function call
  print('Is 10 even? \${isEvenNumber(10)}');
}

String buildUserCard({required String name, required String role, int xp = 0}) =>
    '👤 Name: $name | 💼 Role: $role | ⭐️ XP: $xp';

bool isEvenNumber(int n) => n % 2 == 0;`
      },
      {
        id: "flutter-dart-classes-objects",
        title: { en: "3. Classes & Objects", km: "៣. Class និង Object ក្នុង Dart" },
        content: {
          en: `# Object-Oriented Programming in Dart

Dart is a full OOP language with classes, single inheritance, mixins, and interfaces.

### Constructor Syntactic Sugar
Dart provides shorthand constructor initializing parameters:

\`\`\`dart
class User {
  final String id;
  final String name;
  final int level;

  // Generative constructor with initializing formal parameters
  const User({
    required this.id,
    required this.name,
    this.level = 1,
  });

  void promote() {
    print('$name reached higher level!');
  }
}
\`\`\`
`,
          km: `# ការសរសេរកម្មវិធីបែប Object-Oriented ក្នុង Dart

Dart ប្រើប្រាស់ Class និង Object យ៉ាងជិតស្និទ្ធជាមួយ Flutter Widgets។

### Constructor សម្រួលកូដ (Syntactic Sugar)៖
Dart ផ្តល់ភាពងាយស្រួលក្នុងការ assign តម្លៃក្នុង Constructor ៖

\`\`\`dart
class Course {
  final String title;
  final int lessonsCount;

  const Course({required this.title, required this.lessonsCount});
}
\`\`\`
`
        },
        starterCode: `class FlutterStudent {
  final String name;
  final String track;
  int completedLessons;

  FlutterStudent({
    required this.name,
    this.track = 'Flutter Track',
    this.completedLessons = 0,
  });

  void completeNextLesson() {
    completedLessons++;
    print('🎯 $name completed a lesson! Total: $completedLessons');
  }
}

void main() {
  final student = FlutterStudent(name: 'Sokha');
  student.completeNextLesson();
  student.completeNextLesson();
}`
      },
      {
        id: "flutter-dart-async-futures",
        title: { en: "4. Async/Await & Futures", km: "៤. Async, Await និង Future" },
        content: {
          en: `# Asynchronous Programming in Dart

Asynchronous operations return a **\`Future<T>\`** object representing a value that will be available later.

### \`async\` and \`await\`
Mark functions as \`async\` and use \`await\` to pause execution until the Future resolves:

\`\`\`dart
Future<String> fetchUserData() async {
  // Simulate network delay of 2 seconds
  await Future.delayed(const Duration(seconds: 2));
  return 'User: Sokha (ID: #882)';
}

void main() async {
  print('Loading user profile...');
  String result = await fetchUserData();
  print(result);
}
\`\`\`
`,
          km: `# ការសរសេរកូដ Asynchronous ក្នុង Dart

កិច្ចការដែលត្រូវការពេលវេលាយូរ (ដូចជាទាញយកទិន្នន័យពី Internet) ត្រលប់មកវិញជាប្រភេទ **\`Future<T>\`**។

### ការប្រើប្រាស់ \`async\` និង \`await\`៖

\`\`\`dart
Future<String> fetchWeather() async {
  await Future.delayed(const Duration(seconds: 1));
  return 'Phnom Penh: 32°C ☀️';
}

void main() async {
  print('Fetching weather...');
  final data = await fetchWeather();
  print(data);
}
\`\`\`
`
        },
        starterCode: `Future<Map<String, dynamic>> fetchCourseStats() async {
  await Future.delayed(const Duration(milliseconds: 800));
  return {
    'course': 'Flutter Development',
    'enrolledStudents': 1240,
    'rating': 4.9,
  };
}

void main() async {
  print('🔄 Requesting stats from SabayCode API...');
  final stats = await fetchCourseStats();
  print('✅ Stats Received: \${stats['course']} - \${stats['enrolledStudents']} students (⭐️ \${stats['rating']})');
}`
      },
      {
        id: "flutter-dart-collections",
        title: { en: "5. Collections (List, Map, Set)", km: "៥. Collections (List, Map, Set)" },
        content: {
          en: `# Collections in Dart

Dart collections are fundamental for building UI lists, state stores, and data transformations.

### 1. \`List<T>\` (Ordered indexable array)
\`\`\`dart
List<String> frameworks = ['Flutter', 'React', 'Vue'];
frameworks.add('Angular');
\`\`\`

### 2. \`Map<K, V>\` (Key-value pairs)
\`\`\`dart
Map<String, int> scores = {'Sokha': 95, 'Bopha': 98};
print(scores['Sokha']); // 95
\`\`\`

### 3. \`Set<T>\` (Unique unordered elements)
\`\`\`dart
Set<int> uniqueIds = {101, 102, 101}; // Contains {101, 102}
\`\`\`

### Collection Operators (Spread \`...\`, Collection \`if\`/\`for\`)
\`\`\`dart
bool isPremium = true;
List<String> menu = [
  'Home',
  'Courses',
  if (isPremium) 'VIP Lounge',
];
\`\`\`
`,
          km: `# Collections ក្នុង Dart

Collections ត្រូវបានប្រើប្រាស់យ៉ាងច្រើនក្នុង Flutter សម្រាប់បង្កើត ListView, Map ទិន្នន័យ API និង Filtering។

### 1. \`List<T>\` (បញ្ជីមានលំដាប់)
### 2. \`Map<K, V>\` (គូ Key-Value)
### 3. \`Set<T>\` (ធាតុមិនជាន់គ្នា)

### Collection \`if\` & Spread Operator \`...\`
\`\`\`dart
bool showBonus = true;
List<String> topics = [
  'Getting Started',
  'Widgets',
  if (showBonus) 'Animations',
];
\`\`\`
`
        },
        starterCode: `void main() {
  final List<String> flutterWidgets = ['Text', 'Container', 'Row', 'Column', 'Stack'];
  
  // Transform items with map()
  final upperList = flutterWidgets.map((w) => 'Widget: $w').toList();
  print(upperList);

  // Map collection
  final Map<String, dynamic> appConfig = {
    'appName': 'SabayCode Mobile',
    'version': '2.4.0',
    'supportedLangs': ['en', 'km'],
  };
  print('App Name: \${appConfig['appName']} (v\${appConfig['version']})');
}`
      }
    ]
  },
  {
    id: "widgets-ui-basics",
    title: { en: "Widgets & UI Basics", km: "Widgets និងមូលដ្ឋានគ្រឹះ UI" },
    lessons: [
      {
        id: "flutter-widgets-stateless-stateful",
        title: { en: "1. StatelessWidget vs StatefulWidget", km: "១. StatelessWidget ប្រៀបធៀបនឹង StatefulWidget" },
        content: {
          en: `# StatelessWidget vs. StatefulWidget

In Flutter, **Everything is a Widget**. Widgets are divided into two main categories:

### 1. \`StatelessWidget\`
- **Immutable**: Properties cannot change after build.
- Used for static UI elements like titles, icons, logos, or read-only text.

\`\`\`dart
class HeaderTitle extends StatelessWidget {
  final String title;
  const HeaderTitle({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    return Text(title, style: const TextStyle(fontSize: 20));
  }
}
\`\`\`

### 2. \`StatefulWidget\`
- **Mutable**: Holds state that can change dynamically during the widget lifecycle.
- Triggers UI rebuild when **\`setState()\`** is called.

\`\`\`dart
class LikeButton extends StatefulWidget {
  const LikeButton({super.key});

  @override
  State<LikeButton> createState() => _LikeButtonState();
}

class _LikeButtonState extends State<LikeButton> {
  bool isLiked = false;

  @override
  Widget build(BuildContext context) {
    return IconButton(
      icon: Icon(isLiked ? Icons.favorite : Icons.favorite_border, color: Colors.red),
      onPressed: () => setState(() => isLiked = !isLiked),
    );
  }
}
\`\`\`
`,
          km: `# ការប្រៀបធៀប StatelessWidget និង StatefulWidget

ក្នុង Flutter **អ្វីៗគ្រប់យ៉ាងគឺជា Widget**។

### ១. \`StatelessWidget\`
- មិនអាចផ្លាស់ប្តូរទិន្នន័យ (Immutable) បន្ទាប់ពី Render ហើយ។
- ប្រើសម្រាប់ UI ថេរ ដូចជា Text, Logo, Card ដែលគ្មានការចុចប្រែប្រួលទិន្នន័យ។

### ២. \`StatefulWidget\`
- អាចផ្លាស់ប្តូរទិន្នន័យ (Mutable State) តាមទង្វើរបស់អ្នកប្រើប្រាស់។
- ហៅប្រើ **\`setState()\`** ដើម្បី Rebuild UI ឡើងវិញពេលទិន្នន័យកែប្រែ។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: CounterScreen()));

class CounterScreen extends StatefulWidget {
  const CounterScreen({super.key});

  @override
  State<CounterScreen> createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  int _count = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Stateful Counter')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Count Value: $_count', style: const TextStyle(fontSize: 28, fontWeight: FontWeight.bold)),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () => setState(() => _count++),
              child: const Text('Tap to Increment (+1)'),
            ),
          ],
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-widgets-basic-containers",
        title: { en: "2. Basic Widgets: Text, Container, Row, Column, Stack", km: "២. Widgets គ្រឹះ៖ Text, Container, Row, Column, Stack" },
        content: {
          en: `# Core Building Block Widgets

### 1. \`Container\`
Combines painting, positioning, and sizing (padding, margin, decoration, color, borders, gradients).

### 2. \`Row\` & \`Column\`
- **\`Row\`**: Arranges children horizontally in a single row.
- **\`Column\`**: Arranges children vertically in a single column.
- Use \`mainAxisAlignment\` and \`crossAxisAlignment\` for alignment.

### 3. \`Stack\`
Overlays children on top of each other in 3D Z-axis space. Combine with \`Positioned\` to place elements anywhere.
`,
          km: `# Widgets គ្រឹះសម្រាប់ស្ថាបនា UI

### ១. \`Container\`
បន្សំរវាង Padding, Margin, Color, Border, ព្រមទាំង Border Radius។

### ២. \`Row\` និង \`Column\`
- **\`Row\`**: រៀបចំ Widgets កូនៗតាមជួរដេក (Horizontal)។
- **\`Column\`**: រៀបចំ Widgets កូនៗតាមជួរឈរ (Vertical)។

### ៣. \`Stack\`
រៀបចំ Widgets ជាន់លើគ្នា (Z-axis) ដូចជាដាក់ Badge ឬ Text ពីលើរូបភាព។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: LayoutDemoScreen()));

class LayoutDemoScreen extends StatelessWidget {
  const LayoutDemoScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Core Layout Widgets')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            // Container Example
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.blue.shade800,
                borderRadius: BorderRadius.circular(12),
              ),
              child: const Text('Container with Rounded Corners', style: TextStyle(color: Colors.white)),
            ),
            const SizedBox(height: 20),
            // Row Example
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: const [
                Chip(avatar: Icon(Icons.star), label: Text('Rating 4.9')),
                Chip(avatar: Icon(Icons.timer), label: Text('12 Hours')),
              ],
            ),
            const SizedBox(height: 20),
            // Stack Example
            Stack(
              children: [
                Container(width: double.infinity, height: 120, color: Colors.purple.shade300),
                Positioned(
                  right: 12,
                  top: 12,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    color: Colors.red,
                    child: const Text('HOT', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-widgets-material-cupertino",
        title: { en: "3. Material vs Cupertino Widgets", km: "៣. Material Widgets ប្រៀបធៀបនឹង Cupertino Widgets" },
        content: {
          en: `# Material Design vs. Cupertino (iOS Style)

Flutter provides two primary widget sets matching native platform visual design systems:

### 1. Material Widgets (\`import 'package:flutter/material.dart';\`)
- Google's Material Design system.
- Includes \`Scaffold\`, \`AppBar\`, \`ElevatedButton\`, \`FloatingActionButton\`, \`Drawer\`.

### 2. Cupertino Widgets (\`import 'package:flutter/cupertino.dart';\`)
- Apple's iOS Human Interface Guidelines.
- Includes \`CupertinoPageScaffold\`, \`CupertinoNavigationBar\`, \`CupertinoButton\`, \`CupertinoSwitch\`.

You can adapt UI conditionally depending on platform:
\`\`\`dart
import 'dart:io';

Widget buildSwitch() {
  return Platform.isIOS
    ? CupertinoSwitch(value: true, onChanged: (v) {})
    : Switch(value: true, onChanged: (v) {});
}
\`\`\`
`,
          km: `# Material Design និង Cupertino (iOS Style)

Flutter មាន Widget ២ ប្រព័ន្ធសម្រាប់ការរចនា UI ៖

### ១. Material Widgets (\`material.dart\`)
- ការរចនាបែប Google Material Design។
- មាន \`Scaffold\`, \`AppBar\`, \`ElevatedButton\`, \`FloatingActionButton\`។

### ២. Cupertino Widgets (\`cupertino.dart\`)
- ការរចនាបែប Apple iOS Style។
- មាន \`CupertinoPageScaffold\`, \`CupertinoButton\`, \`CupertinoSwitch\`។
`
        },
        starterCode: `import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

void main() => runApp(const MaterialApp(home: DesignSystemDemo()));

class DesignSystemDemo extends StatelessWidget {
  const DesignSystemDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Material vs Cupertino')),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Material Button (Android/Web):', style: TextStyle(fontWeight: FontWeight.bold)),
            const SizedBox(height: 8),
            ElevatedButton.icon(
              onPressed: () {},
              icon: const Icon(Icons.android),
              label: const Text('Material ElevatedButton'),
            ),
            const Divider(height: 40),
            const Text('Cupertino Button (iOS Style):', style: TextStyle(fontWeight: FontWeight.bold)),
            const SizedBox(height: 8),
            CupertinoButton.filled(
              onPressed: () {},
              child: const Text('CupertinoButton.filled'),
            ),
          ],
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-widgets-buttons-inputs",
        title: { en: "4. Buttons & Input Widgets", km: "៤. Buttons និង Input Widgets" },
        content: {
          en: `# Interactive Buttons & Form Input Fields

### Buttons in Flutter
- **\`ElevatedButton\`**: Raised button with shadow and background fill.
- **\`OutlinedButton\`**: Border-only button.
- **\`TextButton\`**: Flat text button without borders or elevated background.
- **\`IconButton\`**: Icon-only tap target.

### User Inputs: \`TextField\` & \`TextEditingController\`
Use a \`TextEditingController\` to read and clear input values.

\`\`\`dart
final nameController = TextEditingController();

TextField(
  controller: nameController,
  decoration: const InputDecoration(
    labelText: 'Full Name',
    border: OutlineInputBorder(),
    prefixIcon: Icon(Icons.person),
  ),
)
\`\`\`
`,
          km: `# Buttons និង Input Form Fields

### ប្រភេទ Buttons ក្នុង Flutter៖
- **\`ElevatedButton\`**: ប៊ូតុងមានពណ៌ផ្ទៃ និងមួកស្រមោល។
- **\`OutlinedButton\`**: ប៊ូតុងមានតែខ្សែបន្ទាត់ជុំវិញ។
- **\`TextButton\`**: ប៊ូតុងមានតែអត្ថបទ។

### ការទទួលទិន្នន័យពីអ្នកប្រើ៖ \`TextField\` & \`TextEditingController\`
\`TextEditingController\` ប្រើសម្រាប់ទាញយកអត្ថបទដែលបានវាយបញ្ចូល៖

\`\`\`dart
final emailController = TextEditingController();

TextField(
  controller: emailController,
  decoration: const InputDecoration(
    labelText: 'អាសយដ្ឋានអ៊ីមែល',
    border: OutlineInputBorder(),
  ),
)
\`\`\`
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: InputFormDemo()));

class InputFormDemo extends StatefulWidget {
  const InputFormDemo({super.key});

  @override
  State<InputFormDemo> createState() => _InputFormDemoState();
}

class _InputFormDemoState extends State<InputFormDemo> {
  final _textController = TextEditingController();
  String _submittedText = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Buttons & Inputs')),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            TextField(
              controller: _textController,
              decoration: const InputDecoration(
                labelText: 'Enter your note',
                hintText: 'e.g. Learn Flutter Layouts',
                border: OutlineInputBorder(),
                prefixIcon: Icon(Icons.edit_note),
              ),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  _submittedText = _textController.text;
                });
              },
              child: const Text('Save Note'),
            ),
            const SizedBox(height: 24),
            if (_submittedText.isNotEmpty)
              Card(
                color: Colors.blue.shade50,
                child: ListTile(
                  leading: const Icon(Icons.check_circle, color: Colors.blue),
                  title: Text(_submittedText),
                ),
              ),
          ],
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-widgets-images-assets",
        title: { en: "5. Images & Assets", km: "៥. រូបភាព និង Assets ក្នុង Flutter" },
        content: {
          en: `# Displaying Images & Loading Assets

Flutter supports network images, local assets, memory images, and SVG icons.

### 1. Network Image
\`\`\`dart
Image.network(
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  width: 200,
  height: 200,
  fit: BoxFit.cover,
)
\`\`\`

### 2. Local Asset Images (\`pubspec.yaml\`)
To display local images, declare assets in \`pubspec.yaml\`:

\`\`\`yaml
flutter:
  assets:
    - assets/images/logo.png
\`\`\`

Then load in code:
\`\`\`dart
Image.asset('assets/images/logo.png')
\`\`\`
`,
          km: `# ការបង្ហាញរូបភាព និង Assets ក្នុង Flutter

### ១. រូបភាពតាមអ៊ិនធឺណិត (Network Image)
\`\`\`dart
Image.network(
  'https://example.com/photo.jpg',
  fit: BoxFit.cover,
)
\`\`\`

### ២. រូបភាពក្នុងគម្រោង (Local Assets)
ត្រូវប្រកាស Path ក្នុងឯកសារ \`pubspec.yaml\` ៖

\`\`\`yaml
flutter:
  assets:
    - assets/images/logo.png
\`\`\`

រួចហៅប្រើ៖
\`\`\`dart
Image.asset('assets/images/logo.png')
\`\`\`
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: ImageDemoScreen()));

class ImageDemoScreen extends StatelessWidget {
  const ImageDemoScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Network Images & BoxFit')),
      body: Center(
        child: ClipRRect(
          borderRadius: BorderRadius.circular(16),
          child: Image.network(
            'https://picsum.photos/400/300',
            width: 320,
            height: 220,
            fit: BoxFit.cover,
            loadingBuilder: (context, child, loadingProgress) {
              if (loadingProgress == null) return child;
              return const CircularProgressIndicator();
            },
          ),
        ),
      ),
    );
  }
}`
      }
    ]
  },
  {
    id: "layout-system",
    title: { en: "Layout System", km: "ប្រព័ន្ធ Layout និងការរៀបចំអេក្រង់" },
    lessons: [
      {
        id: "flutter-layout-widget-tree",
        title: { en: "1. Understanding the Widget Tree", km: "១. ការយល់ដឹងអំពី Widget Tree" },
        content: {
          en: `# The Flutter Widget Tree

Every UI screen in Flutter is structured as a **hierarchical tree of widgets**.

### Three Trees in Flutter Architecture
1. **Widget Tree**: Lightweight immutable configuration description written by you.
2. **Element Tree**: Manages component lifecycles and references to render objects.
3. **RenderObject Tree**: Performs layout sizing, positioning, and pixel painting on the screen.

\`\`\`
MaterialApp
  └── Scaffold
        ├── AppBar
        └── Center
              └── Column
                    ├── Text
                    └── ElevatedButton
\`\`\`
`,
          km: `# ដើមឈើ Widget (Widget Tree) ក្នុង Flutter

អេក្រង់ UI នីមួយៗត្រូវបានស្ថាបនាឡើងជា **ដើមឈើទិន្នន័យ (Hierarchy Tree)**។

### Trees ទាំង ៣ ក្នុង Flutter៖
១. **Widget Tree**: កូដ Configuration ដែលយើងសរសេរ។
២. **Element Tree**: អ្នកគ្រប់គ្រង Lifecycle និងតំណភ្ជាប់។
៣. **RenderObject Tree**: អ្នកគណនាទំហំ ប្លង់ និង Render Pixel ពិតប្រាកដលើ Screen។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: WidgetTreeDemo()));

class WidgetTreeDemo extends StatelessWidget {
  const WidgetTreeDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Widget Tree Hierarchy')),
      body: Card(
        margin: const EdgeInsets.all(16),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: const [
              ListTile(
                leading: Icon(Icons.account_tree, color: Colors.blue),
                title: Text('Root Widget: MaterialApp'),
                subtitle: Text('Child: Scaffold -> Body: Column'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-layout-constraints",
        title: { en: "2. Layout Constraints (Constraints Go Down...)", km: "២. Layout Constraints (Constraints ចុះក្រោម...)" },
        content: {
          en: `# The Golden Rule of Flutter Layouts

> **Constraints go down. Sizes go up. Parent sets position.**

1. A widget gets its **constraints** from its parent (min/max width and height).
2. The widget determines its own **size** based on those constraints.
3. The parent positions the child widget.

### Unbounded Layout Errors
Errors like \`RenderFlex overflowed by X pixels\` occur when widgets like \`Row\` or \`Column\` don't constrain their children's sizes. Use **\`Expanded\`** or **\`Flexible\`** to resolve unbounded constraints.
`,
          km: `# ច្បាប់មាសនៃ Layout ក្នុង Flutter

> **Constraints ចុះក្រោម. Sizes ឡើងលើ. Parent កំណត់ទីតាំង។**

១. Widget កូនទទួលយកប្រវែងអតិបរមា/អប្បបរមា (Constraints) ពី Parent។
២. Widget កូនកំណត់ទំហំ (Size) ផ្ទាល់ខ្លួនក្នុងដែនកំណត់នោះ។
៣. Parent ដាក់ទីតាំង Widget កូនលើអេក្រង់។

### ការដោះស្រាយកំហុស Overflow (\`RenderFlex overflowed\`):
ប្រើប្រាស់ **\`Expanded\`** ឬ **\`Flexible\`** ដើម្បីពង្រីក/បង្រួម Widget កូនឲ្យល្មមអេក្រង់។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: ExpandedDemo()));

class ExpandedDemo extends StatelessWidget {
  const ExpandedDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Expanded & Constraints')),
      body: Row(
        children: [
          Container(width: 80, height: 80, color: Colors.red),
          Expanded(
            child: Container(
              height: 80,
              color: Colors.blue,
              center: const Text('Expanded takes remaining space!', style: TextStyle(color: Colors.white)),
            ),
          ),
          Container(width: 80, height: 80, color: Colors.green),
        ],
      ),
    );
  }
}`
      },
      {
        id: "flutter-layout-responsive",
        title: { en: "3. Building Responsive Layouts", km: "៣. ការបង្កើត Responsive Layouts" },
        content: {
          en: `# Responsive & Adaptive Layouts

Flutter apps run across screens ranging from watch faces to 4K desktop displays.

### Tools for Responsiveness
1. **\`MediaQuery.of(context)\`**: Queries device screen dimensions, orientation, and pixel density.
2. **\`LayoutBuilder\`**: Provides parent constraint dimensions (\`maxWidth\`, \`maxHeight\`) to build conditional layouts dynamically.

\`\`\`dart
LayoutBuilder(
  builder: (context, constraints) {
    if (constraints.maxWidth > 600) {
      return const WideScreenLayout();
    } else {
      return const MobileLayout();
    }
  },
)
\`\`\`
`,
          km: `# ការបង្កើត Responsive និង Adaptive Layouts

Flutter App រត់បានលើ Screen ទំហំផ្សេងៗគ្នា ចាប់ពីទូរស័ព្ទដៃ រហូតដល់អេក្រង់កុំព្យូទ័រធំៗ។

### ឧបករណ៍សំខាន់ៗ៖
១. **\`MediaQuery.of(context)\`**: ស្ទង់មើលទំហំ និង Orientation នៃអេក្រង់ឧបករណ៍។
២. **\`LayoutBuilder\`**: ទទួលបានទំហំពិភពលោកនៃ Parent Container ដើម្បីប្តូរ Layout តាមទំហំអេក្រង់។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: ResponsiveDemo()));

class ResponsiveDemo extends StatelessWidget {
  const ResponsiveDemo({super.key});

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;

    return Scaffold(
      appBar: AppBar(title: Text('Responsive Width: \${screenWidth.toInt()}px')),
      body: LayoutBuilder(
        builder: (context, constraints) {
          if (constraints.maxWidth > 500) {
            return Row(
              children: [
                Expanded(child: Container(color: Colors.blue.shade100, child: const Center(child: Text('Sidebar')))),
                Expanded(flex: 2, child: Container(color: Colors.white, child: const Center(child: Text('Main Content')))),
              ],
            );
          }
          return Column(
            children: [
              Expanded(child: Container(color: Colors.blue.shade100, child: const Center(child: Text('Mobile Top View')))),
              Expanded(child: Container(color: Colors.white, child: const Center(child: Text('Mobile Bottom Content')))),
            ],
          );
        },
      ),
    );
  }
}`
      },
      {
        id: "flutter-layout-lists-grids",
        title: { en: "4. Lists & Grids (ListView & GridView)", km: "៤. បញ្ជី និង Grid (ListView & GridView)" },
        content: {
          en: `# Efficient Scrolling Lists & Grids

When building long or infinite lists, use lazy builders to render only visible items.

### 1. \`ListView.builder\`
Lazy-loads children as they scroll into viewport.

\`\`\`dart
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    return ListTile(title: Text('Item $index'));
  },
)
\`\`\`

### 2. \`GridView.builder\`
Arranges items in a 2D grid layout with specified columns or max tile extent.

\`\`\`dart
GridView.builder(
  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2,
    crossAxisSpacing: 10,
    mainAxisSpacing: 10,
  ),
  itemCount: 20,
  itemBuilder: (context, index) => Card(child: Center(child: Text('Item $index'))),
)
\`\`\`
`,
          km: `# ការបង្កើត ListView និង GridView ដែលមានប្រសិទ្ធភាពខ្ពស់

សម្រាប់បញ្ជីទិន្នន័យច្រើន ត្រូវប្រើប្រាស់ \`.builder\` ដើម្បីបង្កើតកូដ Render តែផ្នែកដែលមើលឃើញលើ Screen ៖

### ១. \`ListView.builder\`
រៀបចំបញ្ជីរមូរ (Scrollable List) ប្រកបដោយល្បឿនលឿន។

### ២. \`GridView.builder\`
រៀបចំបញ្ជីជាក្រឡាចត្រង្គ (Grid columns)។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: GridListDemo()));

class GridListDemo extends StatelessWidget {
  const GridListDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('GridView Builder')),
      body: GridView.builder(
        padding: const EdgeInsets.all(12),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          crossAxisSpacing: 10,
          mainAxisSpacing: 10,
        ),
        itemCount: 8,
        itemBuilder: (context, index) {
          return Container(
            decoration: BoxDecoration(
              color: Colors.indigo.shade400,
              borderRadius: BorderRadius.circular(12),
            ),
            child: Center(
              child: Text('Card #\${index + 1}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
            ),
          );
        },
      ),
    );
  }
}`
      },
      {
        id: "flutter-layout-scrolling-slivers",
        title: { en: "5. Scrolling & Slivers", km: "៥. ការរមូរ និង Slivers" },
        content: {
          en: `# Advanced Custom Scrolling with Slivers

A **Sliver** is a portion of a scrollable area that behaves dynamically as you scroll.

### Key Sliver Widgets
- **\`CustomScrollView\`**: The container for all slivers.
- **\`SliverAppBar\`**: Expandable/collapsing app bar header with parallax effects.
- **\`SliverList\`** & **\`SliverGrid\`**: Slivers equivalent to ListView and GridView.

\`\`\`dart
CustomScrollView(
  slivers: [
    SliverAppBar(
      expandedHeight: 200,
      flexibleSpace: FlexibleSpaceBar(
        title: Text('Collapsing Header'),
      ),
    ),
    SliverList(delegate: SliverChildBuilderDelegate(...)),
  ],
)
\`\`\`
`,
          km: `# ការប្រើប្រាស់ Custom Scroll ជាមួយ Slivers

**Sliver** គឺជាផ្នែកមួយនៃទីតាំង Scroll ដែលអាចពង្រីក/បង្រួម ឬកម្រើក dynamic ពេលរមូរអេក្រង់។

### Slivers សំខាន់ៗ៖
- **\`CustomScrollView\`**: Root Container សម្រាប់គ្រប់គ្រង Slivers។
- **\`SliverAppBar\`**: App Bar ដែលអាចបង្រួម/ពង្រីក (Collapsing Header) ពេល Scroll។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: SliverDemoScreen()));

class SliverDemoScreen extends StatelessWidget {
  const SliverDemoScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          const SliverAppBar(
            expandedHeight: 180,
            floating: false,
            pinned: true,
            flexibleSpace: FlexibleSpaceBar(
              title: Text('Parallax Sliver Header'),
            ),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) => ListTile(
                leading: CircleAvatar(child: Text('\${index + 1}')),
                title: Text('Sliver List Item #\${index + 1}'),
              ),
              childCount: 15,
            ),
          ),
        ],
      ),
    );
  }
}`
      }
    ]
  },
  {
    id: "state-management",
    title: { en: "State Management", km: "ការគ្រប់គ្រង State (State Management)" },
    lessons: [
      {
        id: "flutter-state-ephemeral-vs-app",
        title: { en: "1. Ephemeral vs App State", km: "១. Ephemeral State ប្រៀបធៀបនឹង App State" },
        content: {
          en: `# Ephemeral State vs. App State

State is any data required to rebuild your UI at any given point in time.

### 1. Ephemeral (Local / UI) State
- Confined to a single widget component (e.g. current tab index, text animation state, toggle switch state).
- Managed using simple **setState()**.

### 2. App State (Global / Shared) State
- Shared across multiple screens or the entire application (e.g. user authentication token, shopping cart contents, theme preferences).
- Managed using architecture libraries like **Provider**, **Riverpod**, **Bloc**, or **Signals**.
`,
          km: `# ការយល់ដឹងអំពី Ephemeral State និង App State

### ១. Ephemeral State (Local State)
- ទិន្នន័យដែលមានក្នុង Widget តែមួយ (ដូចជា Tab ដែលបានជ្រើស, ការចុចលាក់/បង្ហាញ)។
- គ្រប់គ្រងដោយងាយស្រួលតាមរយៈ **setState()**។

### ២. App State (Global State)
- ទិន្នន័យដែលចែករំលែកប្រើប្រាស់ឆ្លងអេក្រង់ច្រើន (ដូចជា Login Status, Shopping Cart, Theme)។
- គ្រប់គ្រងតាមរយៈ Library ដូចជា **Provider**, **Riverpod**, **Bloc**។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: StateTypeDemo()));

class StateTypeDemo extends StatefulWidget {
  const StateTypeDemo({super.key});

  @override
  State<StateTypeDemo> createState() => _StateTypeDemoState();
}

class _StateTypeDemoState extends State<StateTypeDemo> {
  bool _isDarkTheme = false; // Local Ephemeral State

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _isDarkTheme ? Colors.grey.shade900 : Colors.white,
      appBar: AppBar(title: const Text('Ephemeral State Switch')),
      body: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Dark Mode:', style: TextStyle(color: _isDarkTheme ? Colors.white : Colors.black)),
            Switch(
              value: _isDarkTheme,
              onChanged: (val) => setState(() => _isDarkTheme = val),
            ),
          ],
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-state-setstate-basics",
        title: { en: "2. setState Basics & Lifecycle", km: "២. មូលដ្ឋានគ្រឹះ setState និង Lifecycle" },
        content: {
          en: `# Understanding State Lifecycle & setState()

In a \`StatefulWidget\`, calling \`setState()\` notifies the framework that the state object has changed and schedules a \`build()\` method invocation.

### State Lifecycle Stages
1. **\`initState()\`**: Called exactly once when the State object is created. Initialize subscriptions or controllers here.
2. **\`build()\`**: Returns the widget tree layout representation.
3. **\`dispose()\`**: Called when the widget is permanently removed. Clean up controllers, streams, and listeners here.

\`\`\`dart
@override
void initState() {
  super.initState();
  // Setup logic
}

@override
void dispose() {
  controller.dispose(); // Prevent memory leaks
  super.dispose();
}
\`\`\`
`,
          km: `# មូលដ្ឋានគ្រឹះ setState និង Lifecycle

ក្នុង \`StatefulWidget\` ការហៅ \`setState()\` ប្រាប់ទៅកាន់ Flutter ឲ្យ Re-render អេក្រង់ឡើងវិញ។

### វដ្តជីវិតនៃ State (Lifecycle):
១. **\`initState()\`**: ដំណើការតែ ១ ដងគត់នៅពេលបង្កើត Widget។ ប្រើសម្រាប់រៀបចំ Initial Data។
២. **\`build()\`**: បង្កើត និង Render ដើមឈើ Widget។
៣. **\`dispose()\`**: ដំណើការពេល Widget ត្រូវលុបចោល។ ប្រើសម្រាប់បិទ Controllers ការពារ Memory Leak។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: LifecycleDemo()));

class LifecycleDemo extends StatefulWidget {
  const LifecycleDemo({super.key});

  @override
  State<LifecycleDemo> createState() => _LifecycleDemoState();
}

class _LifecycleDemoState extends State<LifecycleDemo> {
  late DateTime _loadedTime;

  @override
  void initState() {
    super.initState();
    _loadedTime = DateTime.now();
    print('1. initState() triggered');
  }

  @override
  void dispose() {
    print('3. dispose() cleanup triggered');
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('State Lifecycle')),
      body: Center(
        child: Text('Screen Loaded At: \${_loadedTime.second}s'),
      ),
    );
  }
}`
      },
      {
        id: "flutter-state-provider-riverpod",
        title: { en: "3. Intro to Provider & Riverpod", km: "៣. សេចក្តីផ្តើមអំពី Provider និង Riverpod" },
        content: {
          en: `# Intro to Provider & Riverpod

For scalable Flutter applications, lifting state to global state managers avoids passing parameters deep down the widget tree.

### Provider Pattern (\`ChangeNotifier\`)
\`\`\`dart
class CartModel extends ChangeNotifier {
  final List<String> _items = [];
  List<String> get items => _items;

  void addItem(String item) {
    _items.add(item);
    notifyListeners(); // Rebuilds listening widgets
  }
}
\`\`\`

### Riverpod
Riverpod is a modern compile-safe rewrite of Provider without context dependency restrictions.
`,
          km: `# សេចក្តីផ្តើមអំពី Provider និង Riverpod

សម្រាប់ App ធំៗ ការលើក State ទៅដាក់លើ State Manager ការពារកុំឲ្យបាញ់ Parameter ចុះក្រោមច្រើនជាន់ (Prop Drilling)។

### \`ChangeNotifier\` ក្នុង Provider៖
\`\`\`dart
class CartModel extends ChangeNotifier {
  final List<String> _items = [];
  
  void add(String item) {
    _items.add(item);
    notifyListeners(); // ជូនដំណឹងដល់ Widget ដែលស្ដាប់
  }
}
\`\`\`
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: StateManagerOverview()));

class StateManagerOverview extends StatelessWidget {
  const StateManagerOverview({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('State Management Overview')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: const [
          Card(
            child: ListTile(
              leading: Icon(Icons.bolt, color: Colors.amber),
              title: Text('setState()'),
              subtitle: Text('Best for local ephemeral UI state.'),
            ),
          ),
          Card(
            child: ListTile(
              leading: Icon(Icons.inventory, color: Colors.blue),
              title: Text('Provider'),
              subtitle: Text('Official recommended starting point for app state.'),
            ),
          ),
          Card(
            child: ListTile(
              leading: Icon(Icons.water, color: Colors.cyan),
              title: Text('Riverpod'),
              subtitle: Text('Compile-safe, context-free state management solution.'),
            ),
          ),
        ],
      ),
    );
  }
}`
      }
    ]
  },
  {
    id: "navigation-routing",
    title: { en: "Navigation & Routing", km: "ការផ្លាស់ប្តូរអេក្រង់ និង Routing" },
    lessons: [
      {
        id: "flutter-nav-basics-push-pop",
        title: { en: "1. Navigator Basics (Push & Pop)", km: "១. មូលដ្ឋានគ្រឹះ Navigator (Push និង Pop)" },
        content: {
          en: `# Screen Navigation with Navigator Stack

Flutter manages screen transitions using a stack data structure via **\`Navigator\`**.

### 1. Push New Screen
Pushes a new route onto top of the stack.
\`\`\`dart
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => const DetailScreen()),
);
\`\`\`

### 2. Pop Back
Removes the current route from top of the stack.
\`\`\`dart
Navigator.pop(context);
\`\`\`
`,
          km: `# ការផ្លាស់ប្តូរអេក្រង់តាមរយៈ Navigator Stack

Flutter គ្រប់គ្រងអេក្រង់តាមទម្រង់ Stack (ជាន់លើគ្នា)។

### ១. ទៅកាន់អេក្រង់ថ្មី (Push)
\`\`\`dart
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => const DetailScreen()),
);
\`\`\`

### ២. ត្រឡប់មកវិញ (Pop)
\`\`\`dart
Navigator.pop(context);
\`\`\`
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: FirstScreen()));

class FirstScreen extends StatelessWidget {
  const FirstScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('First Screen')),
      body: Center(
        child: ElevatedButton(
          child: const Text('Go to Second Screen ->'),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const SecondScreen()),
            );
          },
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  const SecondScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Second Screen')),
      body: Center(
        child: ElevatedButton(
          child: const Text('<- Back to First Screen'),
          onPressed: () => Navigator.pop(context),
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-nav-named-routes",
        title: { en: "2. Named Routes", km: "២. ការប្រើប្រាស់ Named Routes" },
        content: {
          en: `# Organizing Navigation with Named Routes

For larger apps, define route paths centrally in \`MaterialApp\`.

\`\`\`dart
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => const HomeScreen(),
    '/details': (context) => const DetailScreen(),
    '/settings': (context) => const SettingsScreen(),
  },
)
\`\`\`

Navigate using String route keys:
\`\`\`dart
Navigator.pushNamed(context, '/details');
\`\`\`
`,
          km: `# ការរៀបចំ Routing តាមរយៈ Named Routes

រៀបចំឈ្មោះ Path អេក្រង់ក្នុង \`MaterialApp\` ៖

\`\`\`dart
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => const HomeScreen(),
    '/details': (context) => const DetailScreen(),
  },
)
\`\`\`

ហៅផ្លាស់ប្តូរអេក្រង់៖
\`\`\`dart
Navigator.pushNamed(context, '/details');
\`\`\`
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      initialRoute: '/',
      routes: {
        '/': (context) => const HomeRoute(),
        '/profile': (context) => const ProfileRoute(),
      },
    ),
  );
}

class HomeRoute extends StatelessWidget {
  const HomeRoute({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Home Route')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Navigator.pushNamed(context, '/profile'),
          child: const Text('Open Profile Route'),
        ),
      ),
    );
  }
}

class ProfileRoute extends StatelessWidget {
  const ProfileRoute({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Profile Route')),
      body: Center(
        child: ElevatedButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('Return Home'),
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-nav-passing-data",
        title: { en: "3. Passing Data Between Screens", km: "៣. ការបញ្ជូនទិន្នន័យឆ្លងអេក្រង់" },
        content: {
          en: `# Passing Data and Returning Results

### 1. Pass Data Forward via Constructor
\`\`\`dart
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => DetailScreen(title: 'Flutter Course'),
  ),
);
\`\`\`

### 2. Return Data Back with \`pop()\`
\`\`\`dart
// On Screen 2:
Navigator.pop(context, 'User Selection Saved');

// On Screen 1:
final result = await Navigator.push(...);
\`\`\`
`,
          km: `# ការបញ្ជូនទិន្នន័យទៅមុខ និងបញ្ជូនទិន្នន័យត្រលប់មកវិញ

### ១. បញ្ជូនទិន្នន័យទៅមុខតាម Constructor៖
\`\`\`dart
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => DetailScreen(courseName: 'Flutter'),
  ),
);
\`\`\`

### ២. ទទួលទិន្នន័យត្រឡប់មកវិញតាម \`pop()\`:
\`\`\`dart
final result = await Navigator.push(...);
\`\`\`
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: PassDataDemo()));

class PassDataDemo extends StatelessWidget {
  const PassDataDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Pass Data Forward')),
      body: Center(
        child: ElevatedButton(
          child: const Text('Send Student "Bopha" ->'),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => StudentDetailScreen(studentName: 'Bopha'),
              ),
            );
          },
        ),
      ),
    );
  }
}

class StudentDetailScreen extends StatelessWidget {
  final String studentName;
  const StudentDetailScreen({super.key, required this.studentName});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Student: $studentName')),
      body: Center(
        child: Text('Viewing profile for $studentName', style: const TextStyle(fontSize: 18)),
      ),
    );
  }
}`
      }
    ]
  },
  {
    id: "working-with-data",
    title: { en: "Working with Data", km: "ការធ្វើការជាមួយទិន្នន័យ និង API" },
    lessons: [
      {
        id: "flutter-data-http-fetching",
        title: { en: "1. Fetching Data via HTTP", km: "១. ការទាញយកទិន្នន័យតាមរយៈ HTTP" },
        content: {
          en: `# Making Network Requests with http Package

Install package in \`pubspec.yaml\`:
\`\`\`yaml
dependencies:
  http: ^1.2.0
\`\`\`

### Fetching Data
\`\`\`dart
import 'package:http/http.dart' as http;

Future<void> fetchPosts() async {
  final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts/1'));
  if (response.statusCode == 200) {
    print(response.body);
  }
}
\`\`\`
`,
          km: `# ការទាញយកទិន្នន័យតាម HTTP Package

ដំឡើង package ក្នុង \`pubspec.yaml\` ៖
\`\`\`yaml
dependencies:
  http: ^1.2.0
\`\`\`

### កូដសម្រាប់ Fetch Data៖
\`\`\`dart
import 'package:http/http.dart' as http;

Future<void> getData() async {
  final res = await http.get(Uri.parse('https://api.example.com/data'));
  if (res.statusCode == 200) {
    print(res.body);
  }
}
\`\`\`
`
        },
        starterCode: `import 'package:flutter/material.dart';
import 'dart:convert';

void main() => runApp(const MaterialApp(home: HttpDemoScreen()));

class HttpDemoScreen extends StatefulWidget {
  const HttpDemoScreen({super.key});

  @override
  State<HttpDemoScreen> createState() => _HttpDemoScreenState();
}

class _HttpDemoScreenState extends State<HttpDemoScreen> {
  bool _isLoading = false;
  String _data = 'Tap button to load network data';

  Future<void> _mockFetch() async {
    setState(() => _isLoading = true);
    await Future.delayed(const Duration(seconds: 1));
    setState(() {
      _isLoading = false;
      _data = jsonEncode({'title': 'Flutter Network Success', 'status': 200});
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('HTTP Fetch Demo')),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            ElevatedButton(onPressed: _mockFetch, child: const Text('Fetch Data')),
            const SizedBox(height: 20),
            _isLoading
                ? const CircularProgressIndicator()
                : Text(_data, style: const TextStyle(fontFamily: 'monospace')),
          ],
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-data-json-serialization",
        title: { en: "2. JSON Serialization", km: "២. JSON Serialization និង Data Models" },
        content: {
          en: `# JSON Parsing & Factory Constructors

Convert raw JSON strings into strongly-typed Dart objects using factory constructors.

\`\`\`dart
class Article {
  final int id;
  final String title;

  Article({required this.id, required this.title});

  factory Article.fromJson(Map<String, dynamic> json) {
    return Article(
      id: json['id'] as int,
      title: json['title'] as String,
    );
  }

  Map<String, dynamic> toJson() => {
    'id': id,
    'title': title,
  };
}
\`\`\`
`,
          km: `# ការផ្លាស់ប្តូរ JSON ទៅជា Dart Object

បំប្លែងអត្ថបទ JSON ទៅជា Object តាមរយៈ Factory Constructor ៖

\`\`\`dart
class Student {
  final String name;
  final int age;

  Student({required this.name, required this.age});

  factory Student.fromJson(Map<String, dynamic> json) {
    return Student(
      name: json['name'],
      age: json['age'],
    );
  }
}
\`\`\`
`
        },
        starterCode: `import 'dart:convert';

class CourseModel {
  final String id;
  final String title;

  CourseModel({required this.id, required this.title});

  factory CourseModel.fromJson(Map<String, dynamic> json) {
    return CourseModel(
      id: json['id'] as String,
      title: json['title'] as String,
    );
  }
}

void main() {
  const String rawJson = '{"id": "flutter-101", "title": "Flutter Basics"}';
  final Map<String, dynamic> decodedMap = jsonDecode(rawJson);
  final course = CourseModel.fromJson(decodedMap);

  print('Decoded Model: \${course.title} (ID: \${course.id})');
}`
      },
      {
        id: "flutter-data-local-storage",
        title: { en: "3. Local Storage Basics", km: "៣. មូលដ្ឋានគ្រឹះ Local Storage" },
        content: {
          en: `# Storing Data Locally

Save key-value pairs or structured records locally on device storage.

### 1. \`shared_preferences\`
Best for small settings, tokens, or dark mode flags.

\`\`\`dart
final prefs = await SharedPreferences.getInstance();
await prefs.setBool('isDarkMode', true);
bool? isDark = prefs.getBool('isDarkMode');
\`\`\`

### 2. \`sqflite\` & \`Isar\` / \`Hive\`
For local embedded databases storing complex records offline.
`,
          km: `# ការរក្សាទុកទិន្នន័យលើឧបករណ៍ទូរស័ព្ទ

### ១. \`shared_preferences\`
ប្រើប្រាស់សម្រាប់រក្សាទុក Setting តូចៗ ដូចជា Theme ឬ Login Token។

\`\`\`dart
final prefs = await SharedPreferences.getInstance();
await prefs.setBool('isDarkMode', true);
\`\`\`

### ២. \`Hive\` / \`sqflite\`
សម្រាប់រក្សាទុក Database ដែលមានរចនាសម្ព័ន្ធច្រើន Offline។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: LocalStorageOverview()));

class LocalStorageOverview extends StatelessWidget {
  const LocalStorageOverview({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Local Persistence Options')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: const [
          ListTile(
            leading: Icon(Icons.key),
            title: Text('shared_preferences'),
            subtitle: Text('Key-value store for preferences.'),
          ),
          ListTile(
            leading: Icon(Icons.storage),
            title: Text('Hive / Isar'),
            subtitle: Text('Fast NoSQL document database.'),
          ),
        ],
      ),
    );
  }
}`
      }
    ]
  },
  {
    id: "animations-system",
    title: { en: "Animations System", km: "ប្រព័ន្ធអានីមេសិន (Animations)" },
    lessons: [
      {
        id: "flutter-anim-implicit",
        title: { en: "1. Implicit Animations", km: "១. Implicit Animations (AnimatedContainer, AnimatedOpacity)" },
        content: {
          en: `# Smooth UI Transitions with Implicit Animations

Flutter provides drop-in animated widgets that manage their own animation controllers automatically.

### Key Implicit Animations
- **\`AnimatedContainer\`**: Animates size, color, border radius, and padding automatically when properties change.
- **\`AnimatedOpacity\`**: Smoothly fades opacity between 0.0 and 1.0.
- **\`AnimatedAlign\`**: Smoothly moves children to new alignments.

\`\`\`dart
AnimatedContainer(
  duration: const Duration(milliseconds: 300),
  curve: Curves.easeInOut,
  width: isExpanded ? 200 : 100,
  color: isExpanded ? Colors.blue : Colors.grey,
)
\`\`\`
`,
          km: `# ការបង្កើតអានីមេសិនងាយៗតាមរយៈ Implicit Animations

Flutter មាន Animated Widgets ស្រាប់ៗដែលគ្រប់គ្រងអានីមេសិនដោយស្វ័យប្រវត្តិ ៖

### ឧទាហរណ៍ Implicit Widgets៖
- **\`AnimatedContainer\`**: ធ្វើអានីមេសិនលើទំហំ, ពណ៌, និង Border Radius ដោយរលូន។
- **\`AnimatedOpacity\`**: ធ្វើអានីមេសិន បង្ហាញ/លាក់ ដោយរលូន។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: ImplicitAnimDemo()));

class ImplicitAnimDemo extends StatefulWidget {
  const ImplicitAnimDemo({super.key});

  @override
  State<ImplicitAnimDemo> createState() => _ImplicitAnimDemoState();
}

class _ImplicitAnimDemoState extends State<ImplicitAnimDemo> {
  bool _selected = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('AnimatedContainer')),
      body: Center(
        child: GestureDetector(
          onTap: () => setState(() => _selected = !_selected),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 500),
            curve: Curves.fastOutSlowIn,
            width: _selected ? 220.0 : 100.0,
            height: _selected ? 100.0 : 100.0,
            color: _selected ? Colors.red : Colors.blue,
            alignment: _selected ? Alignment.center : Alignment.topCenter,
            child: const Text('Tap Me!', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
          ),
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-anim-controllers",
        title: { en: "2. AnimationControllers & Tweens", km: "២. AnimationControllers និង Tweens" },
        content: {
          en: `# Explicit Animations with AnimationController

For complete control over duration, repetition, and custom timelines, use an **\`AnimationController\`**.

### Components of Explicit Animation
1. **\`AnimationController\`**: Drives the animation timeline (0.0 to 1.0).
2. **\`Tween<T>\`**: Maps the 0.0-1.0 controller range to target value types (e.g., \`Tween<double>(begin: 0, end: 2 * pi)\`).
3. **\`SingleTickerProviderStateMixin\`**: Provides vertical refresh tick signals.

\`\`\`dart
late AnimationController _controller;

@override
void initState() {
  super.initState();
  _controller = AnimationController(
    duration: const Duration(seconds: 2),
    vsync: this,
  )..repeat();
}
\`\`\`
`,
          km: `# ការគ្រប់គ្រងអានីមេសិនកម្រិតខ្ពស់ជាមួយ AnimationController

សម្រាប់អានីមេសិនដែលត្រូវវិលជុំវិញ ឬគ្រប់គ្រងពេលវេលាច្បាស់លាស់ ត្រូវប្រើប្រាស់ **\`AnimationController\`** ៖

### រចនាសម្ព័ន្ធ៖
១. **\`AnimationController\`**: អ្នកបញ្ជាពេលវេលា។
២. **\`Tween<T>\`**: អ្នកកំណត់ចន្លោះតម្លៃពីដើមដល់ចុង។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: RotationAnimDemo()));

class RotationAnimDemo extends StatefulWidget {
  const RotationAnimDemo({super.key});

  @override
  State<RotationAnimDemo> createState() => _RotationAnimDemoState();
}

class _RotationAnimDemoState extends State<RotationAnimDemo> with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(seconds: 3),
      vsync: this,
    )..repeat();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Explicit Rotation Animation')),
      body: Center(
        child: RotationTransition(
          turns: _controller,
          child: const Icon(Icons.sync, size: 80, color: Color(0xFF027DFD)),
        ),
      ),
    );
  }
}`
      }
    ]
  },
  {
    id: "testing-debugging",
    title: { en: "Testing & Debugging", km: "ការធ្វើតេស្ត និងដោះស្រាយកំហុស" },
    lessons: [
      {
        id: "flutter-testing-widget-tests",
        title: { en: "1. Widget Testing Basics", km: "១. មូលដ្ឋានគ្រឹះនៃ Widget Testing" },
        content: {
          en: `# Automated Widget Testing in Flutter

Flutter includes robust automated testing utilities to verify UI behavior without running full emulator instances.

### \`testWidgets\` Function
Use \`WidgetTester\` to pump widgets and simulate user gestures.

\`\`\`dart
testWidgets('Counter increments smoke test', (WidgetTester tester) async {
  await tester.pumpWidget(const MyCounterApp());

  expect(find.text('0'), findsOneWidget);
  expect(find.text('1'), findsNothing);

  await tester.tap(find.byIcon(Icons.add));
  await tester.pump(); // Re-render widget

  expect(find.text('1'), findsOneWidget);
});
\`\`\`
`,
          km: `# ការសរសេរ Widget Testing ក្នុង Flutter

Flutter មាន Tool សម្រាប់ធ្វើតេស្ត UI ដោយស្វ័យប្រវត្តិ ៖

\`\`\`dart
testWidgets('ពិនិត្យមើលការចុច Increment', (WidgetTester tester) async {
  await tester.pumpWidget(const MyCounterApp());
  expect(find.text('0'), findsOneWidget);

  await tester.tap(find.byIcon(Icons.add));
  await tester.pump();

  expect(find.text('1'), findsOneWidget);
});
\`\`\`
`
        },
        starterCode: `void main() {
  print('🧪 Flutter Test Runner initialized...');
  print('✅ Test 1: find.text("0") -> PASSED');
  print('✅ Test 2: tester.tap(addIcon) -> PASSED');
  print('✅ Test 3: expect(find.text("1")) -> PASSED');
}`
      },
      {
        id: "flutter-testing-debugging-errors",
        title: { en: "2. Reading Common Flutter Errors", km: "២. ការអាន និងដោះស្រាយកំហុសទូទៅក្នុង Flutter" },
        content: {
          en: `# Common Flutter Errors & Solutions

### 1. \`RenderFlex overflowed by X pixels\`
- **Cause**: Row or Column children exceeded screen boundaries.
- **Solution**: Wrap children inside \`Expanded\` or wrap Column inside \`SingleChildScrollView\`.

### 2. \`A RenderFlex overflowed...\` / \`Vertical viewport was given unbounded height\`
- **Cause**: Placing a \`ListView\` inside a \`Column\` without setting \`shrinkWrap: true\` or \`Expanded\`.

### 3. \`setState() called after dispose()\`
- **Cause**: Async operation completed after screen was dismissed.
- **Solution**: Check \`if (mounted)\` before calling \`setState()\`.

\`\`\`dart
if (mounted) {
  setState(() { ... });
}
\`\`\`
`,
          km: `# កំហុសទូទៅក្នុង Flutter និងវិធីដោះស្រាយ

### ១. \`RenderFlex overflowed by X pixels\`
- **មូលហេតុ**: រៀបចំ Row ឬ Column លើសប្រវែងអេក្រង់។
- **វិធីដោះស្រាយ**: ប្រើប្រាស់ \`Expanded\` ឬ \`SingleChildScrollView\`។

### ២. \`setState() called after dispose()\`
- **មូលហេតុ**: ហៅ \`setState()\` បន្ទាប់ពីចាកចេញពីអេក្រង់។
- **វិធីដោះស្រាយ**: ឆែកពិនិត្យ \`if (mounted)\` មុនហៅ \`setState()\`។
`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: SafeStateDemo()));

class SafeStateDemo extends StatefulWidget {
  const SafeStateDemo({super.key});

  @override
  State<SafeStateDemo> createState() => _SafeStateDemoState();
}

class _SafeStateDemoState extends State<SafeStateDemo> {
  String _status = 'Ready';

  Future<void> _loadDataSafely() async {
    await Future.delayed(const Duration(seconds: 2));
    // Check if widget is still mounted in element tree!
    if (mounted) {
      setState(() {
        _status = 'Data loaded safely with mounted check!';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Mounted Check Pattern')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(_status),
            const SizedBox(height: 16),
            ElevatedButton(onPressed: _loadDataSafely, child: const Text('Start Async Operation')),
          ],
        ),
      ),
    );
  }
}`
      }
    ]
  }
];

export const flutterReferences: ReferenceItem[] = [
  {
    id: "ref-stateless",
    syntax: "class MyWidget extends StatelessWidget",
    desc: {
      en: "Creates an immutable UI widget that builds based on initial properties.",
      km: "បង្កើត Widget UI ថេរដែលមិនកែប្រែទិន្នន័យបន្ទាប់ពី Render។"
    },
    example: "class Header extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) => const Text('Header');\n}"
  },
  {
    id: "ref-stateful",
    syntax: "class MyWidget extends StatefulWidget",
    desc: {
      en: "Creates a dynamic widget maintaining mutable state across rebuilds.",
      km: "បង្កើត Widget UI ដែលអាចផ្លាស់ប្តូរទិន្នន័យបាន។"
    },
    example: "class Counter extends StatefulWidget {\n  @override\n  State<Counter> createState() => _CounterState();\n}"
  },
  {
    id: "ref-setstate",
    syntax: "setState(() { ... })",
    desc: {
      en: "Notifies Flutter framework to rebuild the widget tree with updated state.",
      km: "ជូនដំណឹងទៅ Flutter ឲ្យ Re-render អេក្រង់ឡើងវិញតាមទិន្នន័យថ្មី។"
    },
    example: "setState(() {\n  _count++;\n});"
  },
  {
    id: "ref-expanded",
    syntax: "Expanded(child: Widget)",
    desc: {
      en: "Expands a child of a Row, Column, or Flex to fill available space.",
      km: "ពង្រីក Widget កូនឲ្យពេញប្រវែងដែលសល់ក្នុង Row ឬ Column។"
    },
    example: "Row(children: [Expanded(child: Container(color: Colors.blue))]);"
  }
];

export const flutterQuizzes: Quiz[] = [
  {
    id: "flutter-q1",
    question: {
      en: "What language is Flutter built on and used for writing Flutter apps?",
      km: "តើ Flutter ប្រើប្រាស់ភាសាសរសេរកម្មវិធីអ្វី?"
    },
    options: {
      en: ["JavaScript", "Dart", "Swift", "Kotlin"],
      km: ["JavaScript", "Dart", "Swift", "Kotlin"]
    },
    correctIndex: 1,
    explanation: {
      en: "Flutter uses Dart, Google's client-optimized language with sound null safety and AOT/JIT compilation.",
      km: "Flutter ត្រូវសរសេរឡើងដោយប្រើភាសា Dart របស់ Google។"
    }
  },
  {
    id: "flutter-q2",
    question: {
      en: "Which method is called to trigger a rebuild in a StatefulWidget?",
      km: "តើអនុគមន៍ណាត្រូវបានហៅដើម្បី Rebuild អេក្រង់ក្នុង StatefulWidget?"
    },
    options: {
      en: ["reload()", "setState()", "update()", "rebuild()"],
      km: ["reload()", "setState()", "update()", "rebuild()"]
    },
    correctIndex: 1,
    explanation: {
      en: "setState() schedules a rebuild of the State object's widget tree.",
      km: "setState() មានតួនាទីជូនដំណឹងដល់ Flutter ឲ្យ Rebuild អេក្រង់ឡើងវិញ។"
    }
  },
  {
    id: "flutter-q3",
    question: {
      en: "What is the key difference between Hot Reload and Hot Restart?",
      km: "តើអ្វីជាភាពខុសគ្នារវាង Hot Reload និង Hot Restart?"
    },
    options: {
      en: [
        "Hot Reload resets app state; Hot Restart keeps state",
        "Hot Reload preserves app state; Hot Restart resets state and re-runs main()",
        "Hot Reload only works on iOS",
        "There is no difference"
      ],
      km: [
        "Hot Reload លុប State; Hot Restart រក្សា State",
        "Hot Reload រក្សាទុក State; Hot Restart លុប State រួចរត់ main() ឡើងវិញ",
        "Hot Reload រត់តែលើ iOS",
        "គ្មានភាពខុសគ្នាទេ"
      ]
    },
    correctIndex: 1,
    explanation: {
      en: "Hot Reload preserves current app state while injecting code updates. Hot Restart restarts the app from main() and resets state.",
      km: "Hot Reload រក្សាទុក State ដែលកំពុងមាន ចំណែក Hot Restart រត់ចេញពី main() ឡើងវិញ។"
    }
  }
];

export const flutterMiniProjects: MiniProject[] = [
  {
    id: "flutter-mp-counter",
    title: { en: "1. Build a Counter App", km: "១. បង្កើតកម្មវិធីរាប់លេខ (Counter App)" },
    desc: {
      en: "Create an interactive mobile counter app with increment, decrement, and reset controls using Flutter StatefulWidget.",
      km: "បង្កើតកម្មវិធីរាប់លេខដែលមានប៊ូតុង បូក ដក និង Reset ដោយប្រើប្រាស់ StatefulWidget។"
    },
    starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const CounterApp());

class CounterApp extends StatefulWidget {
  const CounterApp({super.key});

  @override
  State<CounterApp> createState() => _CounterAppState();
}

class _CounterAppState extends State<CounterApp> {
  int _counter = 0;

  // TODO: Implement _increment, _decrement, and _reset methods

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: const Text('Flutter Counter App')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text('$_counter', style: const TextStyle(fontSize: 48, fontWeight: FontWeight.bold)),
            ],
          ),
        ),
      ),
    );
  }
}`,
    solutionCode: `import 'package:flutter/material.dart';

void main() => runApp(const CounterApp());

class CounterApp extends StatefulWidget {
  const CounterApp({super.key});

  @override
  State<CounterApp> createState() => _CounterAppState();
}

class _CounterAppState extends State<CounterApp> {
  int _counter = 0;

  void _increment() => setState(() => _counter++);
  void _decrement() => setState(() => _counter > 0 ? _counter-- : 0);
  void _reset() => setState(() => _counter = 0);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(useMaterial3: true, colorSchemeSeed: const Color(0xFF027DFD)),
      home: Scaffold(
        appBar: AppBar(title: const Text('Flutter Counter App'), centerTitle: true),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text('Current Counter Value:', style: TextStyle(fontSize: 16, color: Colors.grey)),
              const SizedBox(height: 12),
              Text('$_counter', style: const TextStyle(fontSize: 64, fontWeight: FontWeight.bold, color: Color(0xFF02569B))),
              const SizedBox(height: 32),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  FloatingActionButton(onPressed: _decrement, tooltip: 'Decrement', child: const Icon(Icons.remove)),
                  const SizedBox(width: 16),
                  FloatingActionButton(onPressed: _reset, tooltip: 'Reset', child: const Icon(Icons.refresh)),
                  const SizedBox(width: 16),
                  FloatingActionButton(onPressed: _increment, tooltip: 'Increment', child: const Icon(Icons.add)),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}`
  },
  {
    id: "flutter-mp-todo",
    title: { en: "2. Build a To-Do List App", km: "២. បង្កើតកម្មវិធីបញ្ជីការងាររត្រូវធ្វើ (To-Do List)" },
    desc: {
      en: "Build a responsive task management app allowing users to add, toggle completion, and delete tasks.",
      km: "បង្កើតកម្មវិធីគ្រប់គ្រង Task ដែលអាចបន្ថែម បើក/បិទ ការងាររួចរាល់ និងលុប Task ចោល។"
    },
    starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const TodoApp());

class TodoApp extends StatefulWidget {
  const TodoApp({super.key});

  @override
  State<TodoApp> createState() => _TodoAppState();
}

class _TodoAppState extends State<TodoApp> {
  // TODO: Store todo item objects and text controller

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(body: Center(child: Text('Build Todo List Here'))),
    );
  }
}`,
    solutionCode: `import 'package:flutter/material.dart';

void main() => runApp(const TodoApp());

class TodoItem {
  final String id;
  final String title;
  bool isDone;

  TodoItem({required this.id, required this.title, this.isDone = false});
}

class TodoApp extends StatefulWidget {
  const TodoApp({super.key});

  @override
  State<TodoApp> createState() => _TodoAppState();
}

class _TodoAppState extends State<TodoApp> {
  final List<TodoItem> _todos = [
    TodoItem(id: '1', title: 'Learn Flutter Widgets', isDone: true),
    TodoItem(id: '2', title: 'Master State Management'),
  ];
  final _inputController = TextEditingController();

  void _addTodo() {
    if (_inputController.text.trim().isEmpty) return;
    setState(() {
      _todos.add(TodoItem(
        id: DateTime.now().toString(),
        title: _inputController.text.trim(),
      ));
      _inputController.clear();
    });
  }

  void _toggleTodo(int index) {
    setState(() {
      _todos[index].isDone = !_todos[index].isDone;
    });
  }

  void _deleteTodo(int index) {
    setState(() {
      _todos.removeAt(index);
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(useMaterial3: true, colorSchemeSeed: const Color(0xFF027DFD)),
      home: Scaffold(
        appBar: AppBar(title: const Text('📋 SabayTask To-Do Manager')),
        body: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: _inputController,
                      decoration: const InputDecoration(
                        hintText: 'Enter new task...',
                        border: OutlineInputBorder(),
                      ),
                    ),
                  ),
                  const SizedBox(width: 12),
                  ElevatedButton(
                    onPressed: _addTodo,
                    style: ElevatedButton.styleFrom(padding: const EdgeInsets.all(16)),
                    child: const Icon(Icons.add),
                  ),
                ],
              ),
            ),
            Expanded(
              child: _todos.isEmpty
                  ? const Center(child: Text('No tasks remaining! 🎉'))
                  : ListView.builder(
                      itemCount: _todos.length,
                      itemBuilder: (context, index) {
                        final item = _todos[index];
                        return ListTile(
                          leading: Checkbox(
                            value: item.isDone,
                            onChanged: (_) => _toggleTodo(index),
                          ),
                          title: Text(
                            item.title,
                            style: TextStyle(
                              decoration: item.isDone ? TextDecoration.lineThrough : null,
                            ),
                          ),
                          trailing: IconButton(
                            icon: const Icon(Icons.delete, color: Colors.redAccent),
                            onPressed: () => _deleteTodo(index),
                          ),
                        );
                      },
                    ),
            ),
          ],
        ),
      ),
    );
  }
}`
  },
  {
    id: "flutter-mp-weather",
    title: { en: "3. Build a Weather App", km: "៣. បង្កើតកម្មវិធីព្យាករណ៍អាកាសធាតុ (Weather App)" },
    desc: {
      en: "Build a clean weather dashboard screen showing Cambodian cities weather metrics and forecast cards.",
      km: "បង្កើតអេក្រង់បង្ហាញព័ត៌មានអាកាសធាតុសម្រាប់រាជធានី និងខេត្តក្នុងប្រទេសកម្ពុជា។"
    },
    starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const WeatherApp());

class WeatherApp extends StatelessWidget {
  const WeatherApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(body: Center(child: Text('Weather App Placeholder'))),
    );
  }
}`,
    solutionCode: `import 'package:flutter/material.dart';

void main() => runApp(const WeatherApp());

class WeatherApp extends StatelessWidget {
  const WeatherApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: const Color(0xFF0F172A),
        appBar: AppBar(
          title: const Text('🌤️ Cambodia Weather Forecast'),
          backgroundColor: const Color(0xFF1E293B),
          foregroundColor: Colors.white,
        ),
        body: SingleChildScrollView(
          padding: const EdgeInsets.all(20),
          child: Column(
            children: [
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  gradient: const LinearGradient(
                    colors: [Color(0xFF027DFD), Color(0xFF02569B)],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Column(
                  children: const [
                    Text('Phnom Penh', style: TextStyle(fontSize: 26, fontWeight: FontWeight.bold, color: Colors.white)),
                    SizedBox(height: 8),
                    Icon(Icons.wb_sunny, size: 72, color: Colors.amberAccent),
                    SizedBox(height: 8),
                    Text('33°C', style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold, color: Colors.white)),
                    Text('Sunny & Warm • Humidity 65%', style: TextStyle(color: Colors.white70)),
                  ],
                ),
              ),
              const SizedBox(height: 24),
              const Align(
                alignment: Alignment.centerLeft,
                child: Text('Other Provinces:', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.white)),
              ),
              const SizedBox(height: 12),
              _buildCityCard('Siem Reap', '31°C', 'Partly Cloudy', Icons.cloud_queue),
              _buildCityCard('Sihanoukville', '30°C', 'Light Rain', Icons.grain),
              _buildCityCard('Battambang', '34°C', 'Clear Sky', Icons.wb_sunny),
            ],
          ),
        ),
      ),
    );
  }

  static Widget _buildCityCard(String city, String temp, String status, IconData icon) {
    return Card(
      color: const Color(0xFF1E293B),
      margin: const EdgeInsets.only(bottom: 12),
      child: ListTile(
        leading: Icon(icon, color: Colors.cyanAccent),
        title: Text(city, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
        subtitle: Text(status, style: const TextStyle(color: Colors.grey)),
        trailing: Text(temp, style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold)),
      ),
    );
  }
}`
  },
  {
    id: "flutter-mp-khqr-login",
    title: { en: "4. Cambodian Login & KHQR Checkout UI", km: "៤. អេក្រង់ Login និង KHQR Payment Checkout UI" },
    desc: {
      en: "Create an authentic Cambodian mobile login screen paired with a mock Bakong KHQR payment modal.",
      km: "បង្កើតអេក្រង់ចូលប្រើប្រាស់ (Login) ព្រមទាំងអេក្រង់គំរូទូទាត់ប្រាក់តាម KHQR របស់ធនាគារជាតិ។"
    },
    starterCode: `import 'package:flutter/material.dart';

void main() => runApp(const KhqrApp());

class KhqrApp extends StatelessWidget {
  const KhqrApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(body: Center(child: Text('Build Login & KHQR UI'))),
    );
  }
}`,
    solutionCode: `import 'package:flutter/material.dart';

void main() => runApp(const KhqrApp());

class KhqrApp extends StatelessWidget {
  const KhqrApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(useMaterial3: true),
      home: const LoginKhqrScreen(),
    );
  }
}

class LoginKhqrScreen extends StatefulWidget {
  const LoginKhqrScreen({super.key});

  @override
  State<LoginKhqrScreen> createState() => _LoginKhqrScreenState();
}

class _LoginKhqrScreenState extends State<LoginKhqrScreen> {
  bool _isLoggedIn = false;

  void _showKhqrDialog() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        backgroundColor: const Color(0xFF0F172A),
        title: const Row(
          children: [
            Icon(Icons.qr_code_2, color: Colors.redAccent),
            SizedBox(width: 8),
            Text('Bakong KHQR Payment', style: TextStyle(color: Colors.white, fontSize: 16)),
          ],
        ),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(12)),
              child: const Icon(Icons.qr_code_scanner, size: 160, color: Colors.black),
            ),
            const SizedBox(height: 12),
            const Text('Amount: \$15.00 USD', style: TextStyle(color: Colors.cyanAccent, fontWeight: FontWeight.bold)),
            const Text('Scan with ABA, ACLEDA, or Wing', style: TextStyle(color: Colors.grey, fontSize: 12)),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Close', style: TextStyle(color: Colors.grey)),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0F172A),
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(Icons.flutter_dash, size: 72, color: Color(0xFF027DFD)),
              const SizedBox(height: 12),
              const Text('SabayCode Flutter Portal', style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: Colors.white)),
              const SizedBox(height: 24),
              const TextField(
                style: TextStyle(color: Colors.white),
                decoration: InputDecoration(
                  labelText: 'Phone Number / Email',
                  labelStyle: TextStyle(color: Colors.grey),
                  prefixIcon: Icon(Icons.phone, color: Colors.blue),
                  enabledBorder: OutlineInputBorder(borderSide: BorderSide(color: Colors.slate)),
                  focusedBorder: OutlineInputBorder(borderSide: BorderSide(color: Color(0xFF027DFD))),
                ),
              ),
              const SizedBox(height: 16),
              const TextField(
                obscureText: true,
                style: TextStyle(color: Colors.white),
                decoration: InputDecoration(
                  labelText: 'Password',
                  labelStyle: TextStyle(color: Colors.grey),
                  prefixIcon: Icon(Icons.lock, color: Colors.blue),
                  enabledBorder: OutlineInputBorder(borderSide: BorderSide(color: Colors.slate)),
                  focusedBorder: OutlineInputBorder(borderSide: BorderSide(color: Color(0xFF027DFD))),
                ),
              ),
              const SizedBox(height: 24),
              SizedBox(
                width: double.infinity,
                height: 48,
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF027DFD)),
                  onPressed: () {
                    setState(() => _isLoggedIn = true);
                  },
                  child: const Text('Sign In', style: TextStyle(fontSize: 16, color: Colors.white)),
                ),
              ),
              if (_isLoggedIn) ...[
                const SizedBox(height: 24),
                OutlinedButton.icon(
                  style: OutlinedButton.styleFrom(foregroundColor: Colors.redAccent, side: const BorderSide(color: Colors.redAccent)),
                  onPressed: _showKhqrDialog,
                  icon: const Icon(Icons.qr_code),
                  label: const Text('Unlock VIP Course via KHQR (\$15)'),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}`
  }
];
