import { Topic } from '../../types';

export const group12Topics: Topic = {
  id: "dart-tooling-packages-production",
  title: {
    en: "Group 12: Tooling, Package Management & Production Engineering",
    km: "ក្រុមទី ១២៖ ឧបករណ៍ Dart CLI, ការគ្រប់គ្រង Packages និង Production Engineering"
  },
  lessons: [
    {
      id: "dart-12-1-dart-sdk-cli-tools",
      title: {
        en: "12.1 Dart SDK CLI: dart run, dart analyze, dart format & dart doc",
        km: "១២.១ ឧបករណ៍ Dart CLI (dart run, analyze, format, doc)"
      },
      content: {
        en: `# 12.1 Dart SDK CLI Tools

The official Dart SDK includes built-in CLI commands:
- **\`dart run\`**: Compiles and executes Dart entry points.
- **\`dart analyze\`**: Performs static analysis against style guide rules.
- **\`dart format .\`**: Automatically formats code according to official standards.
- **\`dart doc\`**: Generates HTML documentation from doc comments (\`///\`).`,
        km: `# ១២.១ ឧបករណ៍ Dart CLI

Dart SDK ផ្លូវការ រួមបញ្ចូលនូវ CLI tools ជាច្រើន៖
- **\`dart run\`**: Compile និងរត់កូដ Dart។
- **\`dart analyze\`**: ពិនិត្យបញ្ហាកូដ static analysis។
- **\`dart format .\`**: រៀបចំទម្រង់កូដស្វ័យប្រវត្តិ តាមស្តង់ដារផ្លូវការ។
- **\`dart doc\`**: បង្កើត HTML Documentation ចេញពី Doc Comments (\`///\`)។`
      },
      starterCode: `/// Document comment for main entry point
void main() {
  print('=== DART SDK WORKFLOW TOOLING ===');
  print('Run "dart analyze" to check project code health.');
  print('Run "dart format ." to format source code cleanly.');
}`
    },
    {
      id: "dart-12-2-pubspec-yaml-specifications",
      title: {
        en: "12.2 Manifest Specifications: pubspec.yaml, Lockfiles & SDK Constraints",
        km: "១២.២ ការរៀបចំ pubspec.yaml, pubspec.lock និង SDK Constraints"
      },
      content: {
        en: `# 12.2 pubspec.yaml

\`pubspec.yaml\` is the project manifest controlling metadata, dependencies, SDK version bounds, and asset declarations.`,
        km: `# ១២.២ pubspec.yaml

\`pubspec.yaml\` គឺជា ឯកសារគ្រឹះ project manifest ដែលគ្រប់គ្រង metadata, dependencies, SDK version bounds, និងការប្រកាសរៀបចំរូបភាព/ឯកសារ (assets)។`
      },
      starterCode: `void main() {
  String pubspecSample = '''
name: sabaycode_khqr_app
description: Production-grade Dart 3 & Flutter KHQR application.
version: 1.0.0+1

environment:
  sdk: '^3.0.0'

dependencies:
  http: ^1.1.0
  meta: ^1.9.0

dev_dependencies:
  test: ^1.24.0
  lints: ^2.1.0
''';

  print(pubspecSample);
}`
    },
    {
      id: "dart-12-3-dependency-resolution-overrides",
      title: {
        en: "12.3 Dependency Resolution: dependencies vs dev_dependencies",
        km: "១២.៣ ការគ្រប់គ្រង Dependencies vs Dev Dependencies"
      },
      content: {
        en: `# 12.3 Dependency Resolution

- **\`dependencies\`**: Packages required at runtime for application functionality.
- **\`dev_dependencies\`**: Tools required strictly during development (linters, test runners, code generators).`,
        km: `# ១២.៣ ការគ្រប់គ្រង Dependencies

- **\`dependencies\`**: Packages ចាំបាច់ពេលកម្មវិធីរត់ (Runtime)។
- **\`dev_dependencies\`**: ឧបករណ៍ដែលប្រើប្រាស់តែពេលអភិវឌ្ឍន៍ (Linters, test runners, code generators)។`
      },
      starterCode: `void main() {
  print('Dependencies: Runtime libraries bundled with release binary.');
  print('Dev Dependencies: Build tools used only during local development.');
}`
    },
    {
      id: "dart-12-4-pub-dev-semantic-versioning",
      title: {
        en: "12.4 Package Ecosystem & Semantic Versioning (^1.0.0 caret syntax)",
        km: "១២.៤ ប្រព័ន្ធ Pub.dev និង Semantic Versioning (Caret ^1.0.0)"
      },
      content: {
        en: `# 12.4 Semantic Versioning in Pub

Pub package versions follow Semantic Versioning (\`MAJOR.MINOR.PATCH\`):
- **Caret syntax (\`^1.2.3\`)**: Allows updates up to, but not including, the next breaking major version (\`>=1.2.3 <2.0.0\`).`,
        km: `# ១២.៤ Semantic Versioning ក្នុង Pub

Pub packages ប្រើប្រាស់ Semantic Versioning (\`MAJOR.MINOR.PATCH\`)៖
- **Caret syntax (\`^1.2.3\`)**: អនុញ្ញាតឱ្យ Update ឡើងលើរហូតដល់ ប៉ុន្តែមិនឡើងទៅដល់ Version ធំ Major បន្ទាប់ឡើយ (\`>=1.2.3 <2.0.0\`)។`
      },
      starterCode: `void main() {
  print('Version ^1.4.2 matches any version >=1.4.2 and <2.0.0');
}`
    },
    {
      id: "dart-12-5-automated-unit-testing",
      title: {
        en: "12.5 Automated Unit Testing: test Package, Matchers & Test Suites",
        km: "១២.៥ ការសរសេរ Automated Unit Testing (package:test និង Matchers)"
      },
      content: {
        en: `# 12.5 Automated Unit Testing

Write automated unit tests using the official \`test\` package with matchers (\`expect(actual, equals(expected))\`).`,
        km: `# ១២.៥ ការសរសេរ Automated Unit Testing

សរសេរ Automated Unit Tests ដោយប្រើប្រាស់ \`test\` package ផ្លូវការ ជាមួយ Matchers (\`expect(actual, equals(expected))\`)។`
      },
      starterCode: `int addUsd(int a, int b) => a + b;

void main() {
  print('=== SIMULATED UNIT TEST SUITE ===');
  
  // Test case 1
  int result = addUsd(50, 25);
  bool testPassed = (result == 75);

  print('Test 1: addUsd(50, 25) == 75 -> \${testPassed ? "PASSED ✅" : "FAILED ❌"}');
}`
    },
    {
      id: "dart-12-6-effective-dart-style-linters",
      title: {
        en: "12.6 Effective Dart Style Guide: Linter Rules & analysis_options.yaml",
        km: "១២.៦ គោលការណ៍ Effective Dart និង static analysis_options.yaml"
      },
      content: {
        en: `# 12.6 Effective Dart & Linters

Enforce consistent code style across teams using \`analysis_options.yaml\` and linting rules.`,
        km: `# ១២.៦ គោលការណ៍ Effective Dart និង Linters

កំណត់ស្តង់ដារសរសេរកូដក្នុងក្រុមការងារ ដោយប្រើប្រាស់ \`analysis_options.yaml\` និង Linter rules។`
      },
      starterCode: `void main() {
  print('Effective Dart Principles:');
  print(' 1. PREFER const constructors for immutable widgets.');
  print(' 2. AVOID print statements in production release code.');
  print(' 3. ALWAYS specify explicit types for public API signatures.');
}`
    },
    {
      id: "dart-12-7-compilation-targets-aot-jit-wasm",
      title: {
        en: "12.7 Compilation Targets: Native Executables (AOT), JIT & Web (Wasm/JS)",
        km: "១២.៧ ការបំប្លែងកូដ (AOT Native, JIT Bytecode និង Web Wasm/JS)"
      },
      content: {
        en: `# 12.7 Compilation Targets

- **Dart Native (AOT)**: Compiles directly to ARM/x86 native machine code binary files (\`dart compile exe main.dart\`).
- **Dart Web (Wasm/JS)**: Compiles Dart to WebAssembly or optimized JavaScript for browser deployment.`,
        km: `# ១២.៧ ការបំប្លែងកូដ

- **Dart Native (AOT)**: បំប្លែងដោយផ្ទាល់ទៅជាឯកសារប្រព័ន្ធប្រតិបត្តិការ ARM/x86 binary (\`dart compile exe main.dart\`)។
- **Dart Web (Wasm/JS)**: បំប្លែងកូដ Dart ទៅជា WebAssembly ឬ JavaScript សម្រាប់បង្ហាញលើ Web Browser។`
      },
      starterCode: `void main() {
  print('Dart Compilation Pipeline:');
  print('  • Development: JIT VM for Instant Hot Reload');
  print('  • Mobile/Desktop Release: AOT Machine Code (.apk, .ipa, .exe)');
  print('  • Web Release: WebAssembly (Wasm) & JS Engine');
}`
    },
    {
      id: "dart-12-8-lab-capstone-task-tracker-cli",
      title: {
        en: "12.8 Practical Lab: Production Command-Line Task Tracker (Capstone CLI App)",
        km: "១២.៨ អនុវត្តជាក់ស្តែង៖ គម្រោង Capstone - កម្មវិធី CLI Task Tracker ពេញលេញ"
      },
      content: {
        en: `# 12.8 Practical Lab: Capstone CLI Task Tracker

Construct a complete production-grade command-line Task Tracker CLI tool leveraging all OOP, null safety, async/await, JSON serialization, and error handling concepts learned across all 12 modules!`,
        km: `# ១២.៨ អនុវត្តជាក់ស្តែង៖ គម្រោង Capstone - កម្មវិធី CLI Task Tracker ពេញលេញ

សាងសង់កម្មវិធី CLI Task Tracker ពេញលេញ ដោយយកចំណេះដឹងទាំងអស់ពី ១២ ក្រុម (OOP, Null Safety, Async/Await, JSON, Error Handling) មកអនុវត្តរួមគ្នា!`
      },
      starterCode: `import 'dart:convert';

class TaskItem {
  final String id;
  final String title;
  bool isCompleted;

  TaskItem(this.id, this.title, [this.isCompleted = false]);

  Map<String, dynamic> toJson() => {
    'id': id,
    'title': title,
    'isCompleted': isCompleted
  };
}

class TaskManager {
  final List<TaskItem> _tasks = [];

  void addTask(String title) {
    var id = 'TASK-\${_tasks.length + 1}';
    _tasks.add(TaskItem(id, title));
    print('✅ Task Added: [$id] $title');
  }

  void displayReport() {
    print('=== SABAYCODE CLI TASK TRACKER REPORT ===');
    for (var task in _tasks) {
      String status = task.isCompleted ? '✓ DONE' : '⏳ PENDING';
      print('\${task.id}. [\$status] \${task.title}');
    }
  }

  String exportJson() => jsonEncode(_tasks.map((t) => t.toJson()).toList());
}

void main() {
  var manager = TaskManager();
  manager.addTask('Studied Dart 3 Syntax & Types');
  manager.addTask('Mastered Modern Pattern Matching & Mixins');
  manager.addTask('Built Production PassApp Stream Pipeline');

  manager.displayReport();

  print('\nExported JSON Snapshot:');
  print(manager.exportJson());
}`
    }
  ]
};
