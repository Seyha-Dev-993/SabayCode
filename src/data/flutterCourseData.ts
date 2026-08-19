import { MobileCourse } from './mobileCoursesHubData';

export const FLUTTER_COURSE_DATA: MobileCourse = {
  id: 'flutter',
  title: {
    en: 'Flutter — Cross-Platform App Development',
    km: 'Flutter — សាងកម្មវិធីឆ្លងវេទិកា'
  },
  iconName: 'flutter',
  type: 'framework',
  parentLanguageId: 'dart',
  categoryId: 'frameworks',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'One codebase, real apps on iOS and Android — the most in-demand cross-platform framework today.',
    km: 'កូដតែមួយ កម្មវិធីពិតប្រាកដលើ iOS និង Android — framework ឆ្លងវេទិកាដែលត្រូវការខ្លាំងបំផុតសព្វថ្ងៃ។'
  },
  summary: {
    en: "Flutter is Google's UI framework for building natively compiled apps for iOS, Android, web, and desktop from a single Dart codebase. It's the most widely adopted cross-platform mobile framework in the industry, powering apps like Google Pay, Alibaba, BMW's driver app, and thousands of startups across Southeast Asia who need to ship on both iOS and Android fast without maintaining two separate codebases. This course takes everything you learned in the Dart Basics course and applies it to real UI development: widgets, layouts, navigation, state management, working with APIs, and building a complete, real, installable app from scratch. By the end, you'll have built a full Flutter app and understand exactly how to structure, style, and ship a real cross-platform mobile product.",
    km: 'Flutter ជា UI framework របស់ Google សម្រាប់សាងកម្មវិធីដែល compile ដោយផ្ទាល់ (natively compiled) សម្រាប់ iOS, Android, web និង desktop ពីកូដ Dart តែមួយ។ វាជា framework ឆ្លងវេទិកាដែលត្រូវបានប្រើប្រាស់ទូលំទូលាយបំផុតក្នុងឧស្សាហកម្ម ដំណើរការកម្មវិធីដូចជា Google Pay, Alibaba, កម្មវិធីអ្នកបើកបររបស់ BMW និងក្រុមហ៊ុន startup រាប់ពាន់នៅទូទាំងតំបន់អាស៊ីអាគ្នេយ៍ ដែលត្រូវការចេញកម្មវិធីលើទាំង iOS និង Android លឿន ដោយមិនចាំបាច់ថែទាំកូដពីរផ្សេងគ្នា។ វគ្គសិក្សានេះយកអ្វីៗទាំងអស់ដែលអ្នករៀនក្នុងវគ្គ Dart មូលដ្ឋាន ហើយអនុវត្តទៅលើការសាង UI ពិតប្រាកដ៖ widgets, layouts, navigation, state management, ការធ្វើការជាមួយ API និងការសាងកម្មវិធីពេញលេញអាចដំឡើងបានពិតប្រាកដពីដើមដល់ចប់។ ចប់វគ្គនេះ អ្នកនឹងបានសាងកម្មវិធី Flutter ពេញលេញមួយ ហើយយល់ច្បាស់ពីរបៀបរៀបចំរចនាសម្ព័ន្ធ តុបតែង និងចេញផ្សាយផលិតផលទូរស័ព្ទឆ្លងវេទិកាពិតប្រាកដ។'
  },
  estimatedHours: 25,
  lessonCount: 34,
  usedFor: 'Cross-Platform iOS & Android Mobile Apps, Web Applications, Desktop Apps (macOS/Windows/Linux), Embedded Systems',
  realWorldApps: ['Google Pay', 'Alibaba', 'BMW Driver App', 'eBay Motors', 'Reflectly', 'Etsy Seller'],
  prerequisites: {
    en: "Completion of the Dart Basics course (or equivalent Dart knowledge) is strongly recommended — this course assumes you're already comfortable with Dart syntax, classes, null safety, and async/await, and focuses entirely on applying that to UI.",
    km: 'សូមណែនាំឱ្យបញ្ចប់វគ្គ Dart មូលដ្ឋាន (ឬមានចំណេះដឹង Dart ប្រហាក់ប្រហែល) — វគ្គសិក្សានេះសន្មតថាអ្នកស្គាល់ syntax Dart, classes, null safety, និង async/await រួចហើយ ហើយផ្តោតទាំងស្រុងលើការអនុវត្តទៅលើ UI។'
  },
  whatYouWillLearn: {
    en: [
      'Set up Flutter SDK, Android Studio/VS Code, and emulators for iOS and Android',
      'Understand Flutter\'s widget-based architecture — "everything is a widget"',
      'Build layouts using Row, Column, Container, Stack, and other core layout widgets',
      'Navigate between multiple screens using Flutter\'s navigation system',
      'Manage app state using setState and an intro to the Provider pattern',
      'Style apps with themes, custom fonts, and both light/dark mode',
      'Fetch and display real data from a REST API using http and FutureBuilder',
      'Build and validate forms (login screens, input fields, buttons)',
      'Use device features conceptually (local storage, basic permissions)',
      'Debug Flutter apps and write a basic widget test',
      'Build a complete, real, portfolio-ready Flutter app from scratch',
      'Understand the basics of building a release APK for Android'
    ],
    km: [
      'ដំឡើង Flutter SDK, Android Studio/VS Code, និង Emulators សម្រាប់ iOS និង Android',
      'យល់ដឹងពីរចនាសម្ព័ន្ធលើ Widget របស់ Flutter — "អ្វីៗគ្រប់យ៉ាងជា Widget"',
      'សាងសង់ Layouts ដោយប្រើ Row, Column, Container, Stack និង Layout Widgets ផ្សេងទៀត',
      'ធ្វើការផ្លាស់ប្តូររវាងអេក្រង់ច្រើន (Navigation) ដោយប្រើប្រាស់ប្រព័ន្ធ Navigation របស់ Flutter',
      'គ្រប់គ្រង State របស់កម្មវិធីដោយប្រើប្រាស់ setState និង Provider Pattern',
      'តុបតែង App ដោយប្រើ Themes, Custom Fonts និង Light/Dark Mode',
      'ទាញយក និងបង្ហាញទិន្នន័យពិតប្រាកដពី REST API ដោយប្រើ http និង FutureBuilder',
      'សាងសង់ និងពិនិត្យភាពត្រឹមត្រូវនៃ Form (Login screens, Input fields, Buttons)',
      'ប្រើប្រាស់មុខងារឧបករណ៍ទូរស័ព្ទ (Local storage, Basic permissions)',
      'ដោះស្រាយកំហុស Debugging និងសរសេរ Test លើ Widget គ្រឹះ',
      'សាងសង់កម្មវិធី Flutter ពេញលេញមួយពីដើមដល់ចប់សម្រាប់ធ្វើ Portfolio',
      'យល់ដឹងពីមូលដ្ឋាននៃការ Build ឯកសារ Release APK សម្រាប់ Android'
    ]
  },
  toolsAndSetup: {
    en: '1. Install Flutter SDK (flutter.dev/docs/get-started/install) and run `flutter doctor` to verify setup\n2. Install Android Studio (for Android emulator) and, on Mac, Xcode (for iOS Simulator)\n3. Install Flutter and Dart extensions in VS Code or Android Studio\n4. Create project: `flutter create my_first_app`, then `flutter run`',
    km: '១. ដំឡើង Flutter SDK (flutter.dev/docs/get-started/install) រួចរត់ `flutter doctor` ដើម្បីពិនិត្យមើល\n២. ដំឡើង Android Studio (សម្រាប់ Android emulator) និង Xcode លើ Mac (សម្រាប់ iOS Simulator)\n៣. ដំឡើង Extension Flutter និង Dart ក្នុង VS Code ឬ Android Studio\n៤. បង្កើតគម្រោង: `flutter create my_first_app` រួចរត់ `flutter run`'
  },
  cheatSheet: [
    {
      concept: 'Stateless vs StatefulWidget',
      code: 'class MyCard extends StatelessWidget {\n  const MyCard({super.key});\n  @override\n  Widget build(BuildContext context) => const Text("Static");\n}',
      explanation: {
        en: 'StatelessWidget never changes after building. Use StatefulWidget and setState() when UI updates on user action.',
        km: 'StatelessWidget មិនផ្លាស់ប្តូរក្រោយពេល Rebuild ឡើយ។ ប្រើ StatefulWidget និង setState() ពេល UI ត្រូវកែប្រែតាមការចុច។'
      }
    },
    {
      concept: 'Layout Column & Row',
      code: 'Column(\n  mainAxisAlignment: MainAxisAlignment.center,\n  children: [\n    Text("Title"),\n    Row(children: [Icon(Icons.star), Text("4.9")]),\n  ],\n)',
      explanation: {
        en: 'Use Column for vertical stacking and Row for horizontal arrangement of child widgets.',
        km: 'ប្រើ Column សម្រាប់ការរៀបបញ្ឈរ និង Row សម្រាប់ការរៀបផ្តេកនៃ Widget កូនៗ។'
      }
    },
    {
      concept: 'Async Data with FutureBuilder',
      code: 'FutureBuilder<String>(\n  future: fetchData(),\n  builder: (context, snapshot) {\n    if (snapshot.connectionState == ConnectionState.waiting) {\n      return CircularProgressIndicator();\n    }\n    return Text(snapshot.data ?? "No data");\n  },\n)',
      explanation: {
        en: 'FutureBuilder automatically rebuilds as async operations transition from loading to complete or error.',
        km: 'FutureBuilder ធ្វើការ Rebuild UI ដោយស្វ័យប្រវត្តិតាមស្ថានភាពទាញយកទិន្នន័យ (Loading, Error, Complete)។'
      }
    },
    {
      concept: 'State Management with Provider',
      code: 'context.watch<TaskProvider>().tasks;\n// Or trigger updates:\ncontext.read<TaskProvider>().addTask("New Task");',
      explanation: {
        en: 'Provider makes state available anywhere down the widget tree without manual prop drilling.',
        km: 'Provider ផ្តល់លទ្ធភាពចែករំលែក State ទៅកាន់ Widget គ្រប់កម្រិតដោយមិនបាច់បញ្ជូន Parameter ច្រើនថ្នាក់។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-fl-1',
      question: {
        en: 'What happens if you update a state variable in a StatefulWidget without calling `setState()`?',
        km: 'តើមានអ្វីកើតឡើងបើអ្នកកែប្រែអថេរ State ក្នុង StatefulWidget ដោយមិនបានហៅ `setState()`?'
      },
      options: [
        { id: '1', text: { en: 'The variable changes in memory, but Flutter does not redraw the screen to reflect it', km: 'អថេរប្រែប្រួលក្នុង Memory ប៉ុន្តែ Flutter មិន Redraw អេក្រង់ឡើយ' }, isCorrect: true },
        { id: '2', text: { en: 'The app crashes immediately with a compile error', km: 'App Crash ភ្លាមៗជាមួយ Error' }, isCorrect: false },
        { id: '3', text: { en: 'Flutter automatically detects variable edits and redraws', km: 'Flutter ដឹងដោយស្វ័យប្រវត្តិហើយ Rebuild' }, isCorrect: false }
      ],
      explanation: {
        en: 'Calling `setState()` notifies the Flutter framework that the internal state has changed and triggers a `build()` method re-execution.',
        km: 'ការហៅ `setState()` ជូនដំណឹងទៅ Flutter Framework ថា State ត្រូវបានផ្លាស់ប្តូរ ដើម្បីឱ្យវាដាស់ `build()` ឡើងវិញ។'
      }
    },
    {
      id: 'q-fl-2',
      question: {
        en: 'Which widget allows you to stack children on top of each other along the Z-axis?',
        km: 'តើ Widget មួយណាដែលអនុញ្ញាតឱ្យអ្នកតម្រៀប Widget កូនៗជាន់លើគ្នាតាមអ័ក្ស Z (Z-axis)?'
      },
      options: [
        { id: '1', text: { en: 'Stack', km: 'Stack' }, isCorrect: true },
        { id: '2', text: { en: 'Column', km: 'Column' }, isCorrect: false },
        { id: '3', text: { en: 'ListView', km: 'ListView' }, isCorrect: false }
      ],
      explanation: {
        en: '`Stack` positions children on top of one another, which is ideal for overlays, badges, or custom floating UI elements.',
        km: '`Stack` រៀបចំ Widget ជាន់លើគ្នា ស័ក្តិសមបំផុតសម្រាប់ Overlays, Badges ឬ Floating UI Elements។'
      }
    },
    {
      id: 'q-fl-3',
      question: {
        en: 'Why is `FutureBuilder` preferred when rendering network API responses?',
        km: 'ហេតុអ្វីបានជាគេនិយមប្រើ `FutureBuilder` ពេល Render ទិន្នន័យពី Network API?'
      },
      options: [
        { id: '1', text: { en: 'It handles loading, error, and success snapshot states automatically', km: 'វាចាត់ចែងស្ថានភាព Loading, Error, និង Success ដោយស្វ័យប្រវត្តិ' }, isCorrect: true },
        { id: '2', text: { en: 'It compresses HTTP requests to run 10x faster', km: 'វាបង្រួម HTTP Request ឱ្យដើរលឿន ១០ដង' }, isCorrect: false },
        { id: '3', text: { en: 'It prevents the device from losing internet connectivity', km: 'វាការពារទូរស័ព្ទមិនឱ្យបាត់បង់សេវា Internet' }, isCorrect: false }
      ],
      explanation: {
        en: '`FutureBuilder` inspects `snapshot.connectionState` and `snapshot.hasData` to easily display spinners, errors, or real UI content.',
        km: '`FutureBuilder` ពិនិត្យ `connectionState` និង `hasData` ដើម្បីបង្ហាញ Spinner, Error ឬ Content UI យ៉ាងងាយស្រួល។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'TaskFlow — Full Mobile To-Do App',
      km: 'TaskFlow — កម្មវិធី To-Do លើទូរស័ព្ទដៃពេញលេញ'
    },
    description: {
      en: 'Upgrade the Dart CLI task tracker into a real, installable mobile app with a polished UI, task management, local storage persistence, light/dark theme toggle, and smooth screen navigation.',
      km: 'អភិវឌ្ឍ Task Tracker ពី CLI Dart ឱ្យទៅជាកម្មវិធីទូរស័ព្ទដៃពិតប្រាកដ មាន UI ស្រស់ស្អាត អាចបន្ថែម/លុប Task, រក្សាទុកទិន្នន័យ local, Light/Dark theme, និងផ្លាស់ប្តូរអេក្រង់យ៉ាងរលូន។'
    },
    featureChecklist: {
      en: [
        'Task list screen showing all tasks with a checkbox to mark complete',
        'Add-task screen navigated to via a floating action button',
        'Delete a task via swipe-to-dismiss or a delete button',
        'Tasks persist between app restarts using shared_preferences',
        'Light/dark theme toggle',
        'Empty state message when there are no tasks yet'
      ],
      km: [
        'អេក្រង់បញ្ជី Task បង្ហាញ Task ទាំងអស់ជាមួយ Checkbox សម្រាប់ដកសញ្ញាសម្រេចបាន',
        'អេក្រង់បន្ថែម Task ថ្មី ដែលបើកតាមរយៈ Floating Action Button',
        'លុប Task ដោយការអូស (Swipe) ឬចុចប៊ូតុងលុប',
        'រក្សាទុក Task មិនឱ្យបាត់បង់ពេលបិទ App ដោយប្រើ shared_preferences',
        'ប៊ូតុងផ្លាស់ប្តូរ Light/Dark Theme',
        'បង្ហាញអត្ថបទ Empty State នៅពេលមិនទាន់មាន Task'
      ]
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body style="background:#0b1120; color:#f8fafc; font-family: system-ui, sans-serif; padding:20px; line-height:1.6;">
  <div style="max-width:380px; margin:0 auto; background:#1e293b; border-radius:24px; padding:20px; border:2px solid #334155; box-shadow:0 10px 25px rgba(0,0,0,0.5);">
    <div style="display:flex; justify-size:space-between; align-items:center; border-bottom:1px solid #334155; padding-bottom:12px; margin-bottom:16px;">
      <h3 style="color:#0284c7; margin:0; font-size:20px;">📱 TaskFlow App</h3>
      <span style="background:#0284c7; color:white; font-size:11px; padding:3px 8px; border-radius:12px;">Flutter UI</span>
    </div>
    <div style="background:#0f172a; padding:12px; border-radius:12px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <p style="margin:0; font-weight:bold; color:#f8fafc;">Learn Flutter Layouts</p>
        <span style="font-size:12px; color:#94a3b8;">Module 2 Complete</span>
      </div>
      <span style="color:#22c55e; font-size:18px;">✓</span>
    </div>
    <div style="background:#0f172a; padding:12px; border-radius:12px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <p style="margin:0; font-weight:bold; color:#f8fafc;">Build TaskFlow Capstone</p>
        <span style="font-size:12px; color:#eab308;">In Progress</span>
      </div>
      <span style="color:#64748b; font-size:18px;">○</span>
    </div>
    <div style="text-align:center; margin-top:20px;">
      <button style="background:#0284c7; color:white; border:none; padding:10px 20px; border-radius:20px; font-weight:bold; cursor:pointer; width:100%;">+ Add New Task</button>
    </div>
  </div>
</body>
</html>`
    },
    finalCode: `import 'package:flutter/material.dart';

void main() => runApp(const TaskFlowApp());

class Task {
  final String id;
  final String title;
  bool isDone;

  Task({required this.id, required this.title, this.isDone = false});
}

class TaskFlowApp extends StatefulWidget {
  const TaskFlowApp({super.key});

  @override
  State<TaskFlowApp> createState() => _TaskFlowAppState();
}

class _TaskFlowAppState extends State<TaskFlowApp> {
  bool isDarkMode = true;
  List<Task> tasks = [
    Task(id: '1', title: 'Complete Dart Basics Course', isDone: true),
    Task(id: '2', title: 'Build TaskFlow App in Flutter', isDone: false),
  ];

  void addTask(String title) {
    setState(() {
      tasks.add(Task(id: DateTime.now().toString(), title: title));
    });
  }

  void toggleTask(String id) {
    setState(() {
      final task = tasks.firstWhere((t) => t.id == id);
      task.isDone = !task.isDone;
    });
  }

  void deleteTask(String id) {
    setState(() {
      tasks.removeWhere((t) => t.id == id);
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'TaskFlow',
      theme: isDarkMode ? ThemeData.dark() : ThemeData.light(),
      home: TaskListScreen(
        tasks: tasks,
        isDarkMode: isDarkMode,
        onToggleTheme: () => setState(() => isDarkMode = !isDarkMode),
        onToggleTask: toggleTask,
        onDeleteTask: deleteTask,
        onAddTask: addTask,
      ),
    );
  }
}

class TaskListScreen extends StatelessWidget {
  final List<Task> tasks;
  final bool isDarkMode;
  final VoidCallback onToggleTheme;
  final Function(String) onToggleTask;
  final Function(String) onDeleteTask;
  final Function(String) onAddTask;

  const TaskListScreen({
    super.key,
    required this.tasks,
    required this.isDarkMode,
    required this.onToggleTheme,
    required this.onToggleTask,
    required this.onDeleteTask,
    required this.onAddTask,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('TaskFlow 📱'),
        actions: [
          IconButton(
            icon: Icon(isDarkMode ? Icons.light_mode : Icons.dark_mode),
            onPressed: onToggleTheme,
          ),
        ],
      ),
      body: tasks.isEmpty
          ? const Center(child: Text('No tasks yet! Tap + to create one.'))
          : ListView.builder(
              itemCount: tasks.length,
              itemBuilder: (context, index) {
                final task = tasks[index];
                return Dismissible(
                  key: Key(task.id),
                  onDismissed: (_) => onDeleteTask(task.id),
                  background: Container(color: Colors.red, child: const Icon(Icons.delete, color: Colors.white)),
                  child: ListTile(
                    leading: Checkbox(
                      value: task.isDone,
                      onChanged: (_) => onToggleTask(task.id),
                    ),
                    title: Text(
                      task.title,
                      style: TextStyle(
                        decoration: task.isDone ? TextDecoration.lineThrough : null,
                      ),
                    ),
                  ),
                );
              },
            ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          final controller = TextEditingController();
          showDialog(
            context: context,
            builder: (ctx) => AlertDialog(
              title: const Text('New Task'),
              content: TextField(controller: controller, autofocus: true),
              actions: [
                TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
                ElevatedButton(
                  onPressed: () {
                    if (controller.text.trim().isNotEmpty) {
                      onAddTask(controller.text.trim());
                      Navigator.pop(ctx);
                    }
                  },
                  child: const Text('Add'),
                ),
              ],
            ),
          );
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}`
  },
  lessons: [
    // MODULE 1
    {
      id: 'flutter-1-1',
      slug: 'what-is-flutter-and-how-it-fits-with-dart',
      moduleNumber: 1,
      lessonNumberInModule: 1,
      title: {
        en: '1.1 What is Flutter and how it fits with Dart',
        km: '១.១ អ្វីទៅជា Flutter និងរបៀបដែលវាដើរជាមួយ Dart'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Flutter is Google\'s UI toolkit for building natively compiled apps across mobile, web, and desktop from a single Dart codebase. Flutter draws every pixel using its own high-performance rendering engine (Impeller/Skia).',
        km: 'Flutter ជា UI toolkit របស់ Google សម្រាប់សាងកម្មវិធី natively compiled លើ mobile, web, និង desktop ចេញពីកូដ Dart តែមួយ។ Flutter គូររាល់ pixel ដោយប្រើប្រាស់ rendering engine (Impeller/Skia) ផ្ទាល់ខ្លួន។'
      },
      tutorial: {
        en: 'import \'package:flutter/material.dart\';\n\nvoid main() {\n  runApp(\n    const MaterialApp(\n      home: Scaffold(\n        body: Center(\n          child: Text(\'Hello, Flutter!\'),\n        ),\n      ),\n    ),\n  );\n}',
        km: 'import \'package:flutter/material.dart\';\n\nvoid main() {\n  runApp(\n    const MaterialApp(\n      home: Scaffold(\n        body: Center(\n          child: Text(\'សួស្តី Flutter!\'),\n        ),\n      ),\n    ),\n  );\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>1.1 Hello Flutter!</h3><pre>MaterialApp -> Scaffold -> Center -> Text('Hello, Flutter!')</pre></body></html>`
      }
    },
    {
      id: 'flutter-1-2',
      slug: 'installing-flutter-sdk-and-setting-up-editor',
      moduleNumber: 1,
      lessonNumberInModule: 2,
      title: {
        en: '1.2 Installing Flutter SDK and setting up your editor + emulator',
        km: '១.២ ការដំឡើង Flutter SDK និងរៀបចំ Editor + Emulator'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Install the Flutter SDK, configure PATH variables, run `flutter doctor` to verify system dependencies, and set up VS Code or Android Studio with Android/iOS emulators.',
        km: 'ដំឡើង Flutter SDK, រៀបចំ PATH, រត់ `flutter doctor` ដើម្បីពិនិត្យមើល System Dependencies, និងរៀបចំ VS Code ឬ Android Studio ជាមួយ Emulators។'
      },
      tutorial: {
        en: '// Terminal commands:\nflutter doctor\nflutter create my_app\ncd my_app\nflutter run',
        km: '// ពាក្យបញ្ជា Terminal:\nflutter doctor\nflutter create my_app\ncd my_app\nflutter run'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>1.2 Setup Doctor</h3><p>✓ Flutter SDK installed<br>✓ Android toolchain ready<br>✓ VS Code Extension active</p></body></html>`
      }
    },
    {
      id: 'flutter-1-3',
      slug: 'your-first-app-flutter-counter-explained',
      moduleNumber: 1,
      lessonNumberInModule: 3,
      title: {
        en: '1.3 Your first app — the Flutter counter starter, explained line by line',
        km: '១.៣ កម្មវិធីដំបូងរបស់អ្នក — កម្មវិធីរាប់លេខ Counter ពន្យល់មួយបន្ទាត់ម្តងៗ'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Deconstruct Flutter\'s default starter template: `main()`, `MaterialApp`, `Scaffold`, `StatefulWidget`, and `FloatingActionButton`.',
        km: 'វិភាគ Template ដើមដំបូងរបស់ Flutter៖ `main()`, `MaterialApp`, `Scaffold`, `StatefulWidget`, និង `FloatingActionButton`។'
      },
      tutorial: {
        en: 'int count = 0;\nvoid increment() {\n  setState(() {\n    count++;\n  });\n}',
        km: 'int count = 0;\nvoid increment() {\n  setState(() {\n    count++;\n  });\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>1.3 Counter App</h3><p>You have pushed the button 0 times.</p></body></html>`
      }
    },

    // MODULE 2
    {
      id: 'flutter-2-1',
      slug: 'statelesswidget-vs-statefulwidget',
      moduleNumber: 2,
      lessonNumberInModule: 1,
      title: {
        en: '2.1 Everything is a widget — StatelessWidget vs StatefulWidget',
        km: '២.១ អ្វីៗគ្រប់យ៉ាងជា Widget — StatelessWidget ប៉ះ StatefulWidget'
      },
      durationMinutes: 22,
      difficulty: 'Beginner',
      explanation: {
        en: 'StatelessWidget builds immutable UI that depends only on passed configuration. StatefulWidget maintains state over time and rebuilds UI when `setState()` is invoked.',
        km: 'StatelessWidget បង្កើត UI ថេរដែលមិនប្រែប្រួល។ StatefulWidget រក្សាទុក State ដែលអាចកែប្រែបាន និងធ្វើ Rebuild UI ឡើងវិញពេលហៅ `setState()`។'
      },
      tutorial: {
        en: 'class ProfileName extends StatelessWidget {\n  final String name;\n  const ProfileName({super.key, required this.name});\n  @override\n  Widget build(BuildContext context) => Text(name);\n}',
        km: 'class ProfileName extends StatelessWidget {\n  final String name;\n  const ProfileName({super.key, required this.name});\n  @override\n  Widget build(BuildContext context) => Text(name);\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>2.1 Widget Types</h3><p>Stateless: Read-only<br>Stateful: Interactive with setState()</p></body></html>`
      }
    },
    {
      id: 'flutter-2-2',
      slug: 'core-widgets-text-icon-image-container',
      moduleNumber: 2,
      lessonNumberInModule: 2,
      title: {
        en: '2.2 Core widgets: Text, Icon, Image, Container',
        km: '២.២ Core widgets: Text, Icon, Image, Container'
      },
      durationMinutes: 24,
      difficulty: 'Beginner',
      explanation: {
        en: 'Master Flutter\'s foundational building blocks: styling typography with `TextStyle`, loading icons with `Icons`, embedding images, and decorating boxes with `Container`.',
        km: 'សិក្សាពីគ្រឹះនៃ Widgets ស្ថាបនា UI៖ ការដេគ័រ Text ជាមួយ `TextStyle`, ការប្រើប្រាស់ `Icon`, បញ្ចូលរូបភាព និងការរចនាប្រអប់ជាមួយ `Container`។'
      },
      tutorial: {
        en: 'Container(\n  padding: const EdgeInsets.all(16),\n  decoration: BoxDecoration(\n    color: Colors.blue,\n    borderRadius: BorderRadius.circular(12),\n  ),\n  child: const Text("Styled Container", style: TextStyle(color: Colors.white)),\n)',
        km: 'Container(\n  padding: const EdgeInsets.all(16),\n  decoration: BoxDecoration(\n    color: Colors.blue,\n    borderRadius: BorderRadius.circular(12),\n  ),\n  child: const Text("ប្រអប់ដេគ័រ", style: TextStyle(color: Colors.white)),\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>2.2 Core Widgets</h3><p>[Icon] Text inside Container with rounded border</p></body></html>`
      }
    },
    {
      id: 'flutter-2-3',
      slug: 'layout-widgets-row-column-expanded',
      moduleNumber: 2,
      lessonNumberInModule: 3,
      title: {
        en: '2.3 Layout widgets: Row, Column, and Expanded/Flexible',
        km: '២.៣ Layout widgets: Row, Column, និង Expanded/Flexible'
      },
      durationMinutes: 25,
      difficulty: 'Beginner',
      explanation: {
        en: 'Arrange UI horizontally with `Row` and vertically with `Column`. Use `Expanded` or `Flexible` to stretch child widgets smoothly across available screen space.',
        km: 'រៀបចំ UI តាមជួរដេកជាមួយ `Row` និងជួរឈរជាមួយ `Column`។ ប្រើប្រាស់ `Expanded` ឬ `Flexible` ដើម្បីពង្រីក Widget កូនៗឱ្យពេញលំហអេក្រង់។'
      },
      tutorial: {
        en: 'Row(\n  children: [\n    const Icon(Icons.star, color: Colors.amber),\n    const SizedBox(width: 8),\n    Expanded(child: Text("4.9 Rating (120 reviews)", overflow: TextOverflow.ellipsis)),\n  ],\n)',
        km: 'Row(\n  children: [\n    const Icon(Icons.star, color: Colors.amber),\n    const SizedBox(width: 8),\n    Expanded(child: Text("4.9 ពិន្ទុ (១២០ មតិ)", overflow: TextOverflow.ellipsis)),\n  ],\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>2.3 Row & Column</h3><p>[⭐] 4.9 Rating (120 reviews) - Expanded layout</p></body></html>`
      }
    },
    {
      id: 'flutter-2-4',
      slug: 'stack-and-positioning-for-layered-ui',
      moduleNumber: 2,
      lessonNumberInModule: 4,
      title: {
        en: '2.4 Stack and positioning for layered UI',
        km: '២.៤ Stack និង Positioning សម្រាប់ស្ថាបនា UI ជាន់លើគ្នា'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: '`Stack` allows layering widgets over each other on the Z-axis. Combine with `Positioned` to place child widgets at specific coordinates (top, bottom, left, right).',
        km: '`Stack` អនុញ្ញាតឱ្យតម្រៀប Widget ជាន់លើគ្នាតាមអ័ក្ស Z។ ប្រើគួបផ្សំជាមួយ `Positioned` ដើម្បីកំណត់កូអរដោនេ (top, bottom, left, right) ច្បាស់លាស់។'
      },
      tutorial: {
        en: 'Stack(\n  children: [\n    Image.network("https://picsum.photos/300/150"),\n    Positioned(\n      top: 10,\n      right: 10,\n      child: Badge(label: Text("NEW")),\n    ),\n  ],\n)',
        km: 'Stack(\n  children: [\n    Image.network("https://picsum.photos/300/150"),\n    Positioned(\n      top: 10,\n      right: 10,\n      child: Badge(label: Text("ថ្មី")),\n    ),\n  ],\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>2.4 Stack Overlay</h3><p>[Image Banner] + [Positioned Badge Top-Right]</p></body></html>`
      }
    },
    {
      id: 'flutter-2-5',
      slug: 'practice-rebuild-a-profile-card-ui',
      moduleNumber: 2,
      lessonNumberInModule: 5,
      title: {
        en: '2.5 Practice: rebuild a simple profile card UI',
        km: '២.៥ អនុវត្ត: សាងសង់អេក្រង់ Profile Card UI ក្នុង Flutter'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Combine `Container`, `Column`, `Row`, `CircleAvatar`, `Icon`, and `TextStyle` to construct a modern mobile profile card screen.',
        km: 'បូកបញ្ចូល `Container`, `Column`, `Row`, `CircleAvatar`, `Icon`, និង `TextStyle` ដើម្បីបង្កើត Profile Card UI លើទូរស័ព្ទដៃ។'
      },
      tutorial: {
        en: 'Card(\n  elevation: 4,\n  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),\n  child: Padding(\n    padding: const EdgeInsets.all(16),\n    child: Column(\n      children: [\n        CircleAvatar(radius: 40, child: Text("SC")),\n        SizedBox(height: 12),\n        Text("Seyha Nan", style: TextStyle(fontWeight: FontWeight.bold)),\n      ],\n    ),\n  ),\n)',
        km: 'Card(\n  elevation: 4,\n  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),\n  child: Padding(\n    padding: const EdgeInsets.all(16),\n    child: Column(\n      children: [\n        CircleAvatar(radius: 40, child: Text("SC")),\n        SizedBox(height: 12),\n        Text("Seyha Nan", style: TextStyle(fontWeight: FontWeight.bold)),\n      ],\n    ),\n  ),\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>2.5 Profile Card</h3><p>👤 Seyha Nan<br>Mobile Developer @ SabayCode</p></body></html>`
      }
    },

    // MODULE 3
    {
      id: 'flutter-3-1',
      slug: 'multiple-screens-with-navigator-push-pop',
      moduleNumber: 3,
      lessonNumberInModule: 1,
      title: {
        en: '3.1 Multiple screens with Navigator.push/pop',
        km: '៣.១ អេក្រង់ច្រើនជាមួយ Navigator.push និង Navigator.pop'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Flutter uses stack-based navigation. Push new screens onto the route stack with `Navigator.push(context, MaterialPageRoute(...))` and dismiss with `Navigator.pop(context)`.',
        km: 'Flutter ប្រើប្រាស់ Navigation បែប Stack។ បន្ថែមអេក្រង់ថ្មីលើ Stack ដោយ `Navigator.push()` និងត្រឡប់មកវិញដោយ `Navigator.pop()`។'
      },
      tutorial: {
        en: 'Navigator.push(\n  context,\n  MaterialPageRoute(builder: (context) => const DetailScreen()),\n);',
        km: 'Navigator.push(\n  context,\n  MaterialPageRoute(builder: (context) => const DetailScreen()),\n);'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>3.1 Navigator Push</h3><p>Home Screen -> [Tap Button] -> Detail Screen</p></body></html>`
      }
    },
    {
      id: 'flutter-3-2',
      slug: 'passing-data-between-screens',
      moduleNumber: 3,
      lessonNumberInModule: 2,
      title: {
        en: '3.2 Passing data between screens',
        km: '៣.២ ការបញ្ជូនទិន្នន័យរវាងអេក្រង់'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Pass arguments directly into destination widget constructors, or await return values from `Navigator.pop(context, result)`.',
        km: 'បញ្ជូនទិន្នន័យតាមរយៈ Constructor នៃ Widget អេក្រង់គោលដៅ ឬរង់ចាំទទួលតម្លៃត្រឡប់មកវិញពី `Navigator.pop(context, result)`។'
      },
      tutorial: {
        en: '// Screen A -> Screen B\nNavigator.push(\n  context,\n  MaterialPageRoute(\n    builder: (context) => DetailScreen(itemId: "101", title: "Flutter Mastery"),\n  ),\n);',
        km: '// អេក្រង់ A -> អេក្រង់ B\nNavigator.push(\n  context,\n  MaterialPageRoute(\n    builder: (context) => DetailScreen(itemId: "101", title: "Flutter Mastery"),\n  ),\n);'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>3.2 Data Passing</h3><p>Navigating to DetailScreen with itemId: 101</p></body></html>`
      }
    },
    {
      id: 'flutter-3-3',
      slug: 'named-routes-for-larger-apps',
      moduleNumber: 3,
      lessonNumberInModule: 3,
      title: {
        en: '3.3 Named routes for larger apps',
        km: '៣.៣ Named routes សម្រាប់កម្មវិធីទំហំធំ'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Declare routes centrally in `MaterialApp(routes: { ... })` and navigate cleanly using `Navigator.pushNamed(context, \'/details\')`.',
        km: 'ប្រកាស Route ទាំងអស់កណ្តាលក្នុង `MaterialApp(routes: { ... })` ហើយធ្វើការផ្លាស់ប្តូរអេក្រង់ដោយប្រើ `Navigator.pushNamed(context, \'/details\')`។'
      },
      tutorial: {
        en: 'MaterialApp(\n  initialRoute: \'/\',\n  routes: {\n    \'/\': (context) => const HomeScreen(),\n    \'/details\': (context) => const DetailScreen(),\n  },\n)',
        km: 'MaterialApp(\n  initialRoute: \'/\',\n  routes: {\n    \'/\': (context) => const HomeScreen(),\n    \'/details\': (context) => const DetailScreen(),\n  },\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>3.3 Named Routes</h3><p>Navigator.pushNamed(context, '/details');</p></body></html>`
      }
    },
    {
      id: 'flutter-3-4',
      slug: 'practice-two-screen-list-to-detail-app',
      moduleNumber: 3,
      lessonNumberInModule: 4,
      title: {
        en: '3.4 Practice: build a two-screen app (list → detail)',
        km: '៣.៤ អនុវត្ត: សាងសង់កម្មវិធីមាន ២ អេក្រង់ (List → Detail)'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Build a list screen displaying course items with `ListView.builder` that opens a rich detail view on item tap.',
        km: 'សាងសង់អេក្រង់បញ្ជីបង្ហាញវគ្គសិក្សាជាមួយ `ListView.builder` ដែលបើកបង្ហាញព័ត៌មានលម្អិតពេលចុចលើធាតុនីមួយៗ។'
      },
      tutorial: {
        en: 'ListView.builder(\n  itemCount: courses.length,\n  itemBuilder: (context, index) {\n    final item = courses[index];\n    return ListTile(\n      title: Text(item.title),\n      onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => DetailPage(course: item))),\n    );\n  },\n)',
        km: 'ListView.builder(\n  itemCount: courses.length,\n  itemBuilder: (context, index) {\n    final item = courses[index];\n    return ListTile(\n      title: Text(item.title),\n      onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => DetailPage(course: item))),\n    );\n  },\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>3.4 List to Detail</h3><p>List: Flutter Course -> [Tap] -> Detail: 34 Lessons</p></body></html>`
      }
    },

    // MODULE 4
    {
      id: 'flutter-4-1',
      slug: 'understanding-state-what-and-why',
      moduleNumber: 4,
      lessonNumberInModule: 1,
      title: {
        en: '4.1 Understanding state: what it is and why it matters',
        km: '៤.១ ការយល់ដឹងអំពី State៖ អ្វីទៅជា State និងហេតុអ្វីវាសំខាន់'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'State is any data that determines the visual output of your app at a given moment (user input, active tab, network fetch status, dark mode flag).',
        km: 'State គឺជាទិន្នន័យទាំងឡាយណាដែលកំណត់ការបង្ហាញ visual លើអេក្រង់ក្នុងខណៈពេលណាមួយ (ទិន្នន័យបញ្ចូល, អេក្រង់កំពុងបើក, ស្ថានភាពទាញយកទិន្នន័យ)។'
      },
      tutorial: {
        en: '// Ephemeral (local) state vs App (global) state\nbool isExpanded = false; // Local widget state',
        km: '// Ephemeral (local) state vs App (global) state\nbool isExpanded = false; // Local widget state'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.1 State Concepts</h3><p>State = Data that drives UI rendering over time.</p></body></html>`
      }
    },
    {
      id: 'flutter-4-2',
      slug: 'setstate-flutters-simplest-state-tool',
      moduleNumber: 4,
      lessonNumberInModule: 2,
      title: {
        en: '4.2 setState — Flutter\'s simplest state tool',
        km: '៤.២ setState — ឧបករណ៍គ្រប់គ្រង State ងាយស្រួលបំផុតរបស់ Flutter'
      },
      durationMinutes: 22,
      difficulty: 'Beginner',
      explanation: {
        en: '`setState()` tells Flutter that internal widget variables changed, triggering a call to `build()` so the widget tree reflects the new state.',
        km: '`setState()` ជូនដំណឹងទៅ Flutter ថាអថេរខាងក្នុងប្រែប្រួល ដែលជួយដាស់ `build()` ឱ្យធ្វើការ Rebuild UI ឡើងវិញតាម State ថ្មី។'
      },
      tutorial: {
        en: 'void toggleFavorite() {\n  setState(() {\n    isFavorite = !isFavorite;\n  });\n}',
        km: 'void toggleFavorite() {\n  setState(() {\n    isFavorite = !isFavorite;\n  });\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>4.2 setState Usage</h3><p>Favorite: [❤️ Liked]</p></body></html>`
      }
    },
    {
      id: 'flutter-4-3',
      slug: 'lifting-state-up-between-widgets',
      moduleNumber: 4,
      lessonNumberInModule: 3,
      title: {
        en: '4.3 Lifting state up between widgets',
        km: '៤.៣ ការលើក State ឡើងលើ (Lifting State Up) រវាង Widgets'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'When sibling widgets need access to the same state, move (lift) the state variable up to their lowest common parent widget.',
        km: 'នៅពេល Widget បងប្អូនត្រូវការប្រើប្រាស់ State ដូចគ្នា ត្រូវលើក (Lift) អថេរ State នោះឡើងទៅកាន់ Parent Widget រួម។'
      },
      tutorial: {
        en: 'class ParentWidget extends StatefulWidget {\n  // Holds shared state and passes callback functions down to children\n}',
        km: 'class ParentWidget extends StatefulWidget {\n  // រក្សាទុក Shared state និងបញ្ជូន Callback ទៅកាន់ Child Widgets\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>4.3 Lifting State Up</h3><p>Parent holds state -> Children receive values & callbacks</p></body></html>`
      }
    },
    {
      id: 'flutter-4-4',
      slug: 'intro-to-provider-package-for-shared-state',
      moduleNumber: 4,
      lessonNumberInModule: 4,
      title: {
        en: '4.4 Intro to the Provider package for shared app state',
        km: '៤.៤ ណែនាំ Provider Package សម្រាប់ចែករំលែក App State'
      },
      durationMinutes: 26,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Provider uses `ChangeNotifier` and `ChangeNotifierProvider` to share reactive state globally down the widget tree without manual callback passing.',
        km: 'Provider ប្រើប្រាស់ `ChangeNotifier` និង `ChangeNotifierProvider` ដើម្បីចែករំលែក State ទៅកាន់ Widget គ្រប់ជាន់ដោយមិនបាច់បញ្ជូន Callback ដោយដៃ។'
      },
      tutorial: {
        en: 'class CounterModel extends ChangeNotifier {\n  int count = 0;\n  void increment() {\n    count++;\n    notifyListeners();\n  }\n}',
        km: 'class CounterModel extends ChangeNotifier {\n  int count = 0;\n  void increment() {\n    count++;\n    notifyListeners();\n  }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>4.4 Provider Package</h3><p>ChangeNotifier -> notifyListeners() -> Provider Consumer Rebuilds</p></body></html>`
      }
    },
    {
      id: 'flutter-4-5',
      slug: 'practice-counter-with-shared-state',
      moduleNumber: 4,
      lessonNumberInModule: 5,
      title: {
        en: '4.5 Practice: build a counter with shared state across two screens',
        km: '៤.៥ អនុវត្ត: សាងសង់ Counter App មាន Shared State ឆ្លងកាត់ ២ អេក្រង់'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Build a counter state model and display/update the counter value smoothly across two distinct app screens using Provider.',
        km: 'បង្កើត Counter State Model ហើយបង្ហាញ និងធ្វើបច្ចុប្បន្នភាពតម្លៃ Counter ឆ្លងកាត់អេក្រង់ផ្សេងគ្នា ២ ដោយប្រើប្រាស់ Provider។'
      },
      tutorial: {
        en: '// Screen 1: context.read<CounterModel>().increment()\n// Screen 2: Text("${context.watch<CounterModel>().count}")',
        km: '// អេក្រង់ 1: context.read<CounterModel>().increment()\n// អេក្រង់ 2: Text("${context.watch<CounterModel>().count}")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.5 Shared State Practice</h3><p>Screen 1: Count = 5 -> Navigate -> Screen 2: Count = 5</p></body></html>`
      }
    },

    // MODULE 5
    {
      id: 'flutter-5-1',
      slug: 'themedata-app-wide-colors-fonts-styles',
      moduleNumber: 5,
      lessonNumberInModule: 1,
      title: {
        en: '5.1 ThemeData — app-wide colors, fonts, and styles',
        km: '៥.១ ThemeData — ការកំណត់ពណ៌ Fonts និង Style ទូទាំង App'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Configure centralized app colors, button styles, card themes, and typography inside `MaterialApp(theme: ThemeData(...))`.',
        km: 'កំណត់ពណ៌ចម្បង Style ប៊ូតុង និង Typography នៅកន្លែងតែមួយក្នុង `MaterialApp(theme: ThemeData(...))`។'
      },
      tutorial: {
        en: 'MaterialApp(\n  theme: ThemeData(\n    primarySwatch: Colors.blue,\n    scaffoldBackgroundColor: const Color(0xFF0F172A),\n    textTheme: const TextTheme(bodyLarge: TextStyle(color: Colors.white)),\n  ),\n)',
        km: 'MaterialApp(\n  theme: ThemeData(\n    primarySwatch: Colors.blue,\n    scaffoldBackgroundColor: const Color(0xFF0F172A),\n    textTheme: const TextTheme(bodyLarge: TextStyle(color: Colors.white)),\n  ),\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>5.1 ThemeData Setup</h3><p>Global Color Scheme: Slate Dark & Electric Blue</p></body></html>`
      }
    },
    {
      id: 'flutter-5-2',
      slug: 'light-and-dark-mode-support',
      moduleNumber: 5,
      lessonNumberInModule: 2,
      title: {
        en: '5.2 Light and dark mode support',
        km: '៥.២ ការគាំទ្រ Light Mode និង Dark Mode'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Provide both `theme` (light) and `darkTheme` properties in `MaterialApp`, and switch `themeMode` dynamically based on user preference.',
        km: 'ផ្តល់ទាំង `theme` (Light) និង `darkTheme` ក្នុង `MaterialApp` រួចផ្លាស់ប្តូរ `themeMode` តាមការជ្រើសរើសរបស់អ្នកប្រើប្រាស់។'
      },
      tutorial: {
        en: 'MaterialApp(\n  theme: ThemeData.light(),\n  darkTheme: ThemeData.dark(),\n  themeMode: isDark ? ThemeMode.dark : ThemeMode.light,\n)',
        km: 'MaterialApp(\n  theme: ThemeData.light(),\n  darkTheme: ThemeData.dark(),\n  themeMode: isDark ? ThemeMode.dark : ThemeMode.light,\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>5.2 Theme Toggle</h3><p>Current Theme: Dark Mode [☀️ Switch to Light]</p></body></html>`
      }
    },
    {
      id: 'flutter-5-3',
      slug: 'custom-fonts-and-reusable-text-styles',
      moduleNumber: 5,
      lessonNumberInModule: 3,
      title: {
        en: '5.3 Custom fonts and reusable text styles',
        km: '៥.៣ Custom fonts និង Reusable text styles'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Import custom font files (e.g. Google Fonts or local ttf) via `pubspec.yaml` and create reusable typography constants.',
        km: 'នាំចូល Custom Font Files (ដូចជា Google Fonts ឬ ttf) តាមរយៈ `pubspec.yaml` ហើយបង្កើត Reusable Typography Constants។'
      },
      tutorial: {
        en: '// pubspec.yaml:\n// flutter:\n//   fonts:\n//     - family: KantumruuyPro\n//       fonts:\n//         - asset: assets/fonts/KantumruuyPro.ttf',
        km: '// pubspec.yaml:\n// flutter:\n//   fonts:\n//     - family: KantumruuyPro\n//       fonts:\n//         - asset: assets/fonts/KantumruuyPro.ttf'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>5.3 Custom Fonts</h3><p>Khmer Font: Kantumruuy Pro applied globally</p></body></html>`
      }
    },
    {
      id: 'flutter-5-4',
      slug: 'practice-theme-a-sample-screen',
      moduleNumber: 5,
      lessonNumberInModule: 4,
      title: {
        en: '5.4 Practice: theme a sample screen with a custom color palette',
        km: '៥.៤ អនុវត្ត: តុបតែង Theme លើអេក្រង់គំរូជាមួយ Custom Color Palette'
      },
      durationMinutes: 25,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Apply a custom brand color scheme across AppBars, cards, text buttons, and active indicators on a dashboard screen.',
        km: 'អនុវត្ត Custom Brand Color Scheme លើ AppBars, Cards, Buttons, និង Active Indicators លើ Dashboard Screen។'
      },
      tutorial: {
        en: 'ColorScheme brandScheme = ColorScheme.fromSeed(\n  seedColor: const Color(0xFF0284C7),\n  brightness: Brightness.dark,\n);',
        km: 'ColorScheme brandScheme = ColorScheme.fromSeed(\n  seedColor: const Color(0xFF0284C7),\n  brightness: Brightness.dark,\n);'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>5.4 Themed Dashboard</h3><p>Brand Color: Cyan Blue (#0284C7) styled theme</p></body></html>`
      }
    },

    // MODULE 6
    {
      id: 'flutter-6-1',
      slug: 'local-state-vs-persisted-data-shared-preferences',
      moduleNumber: 6,
      lessonNumberInModule: 1,
      title: {
        en: '6.1 Local state vs persisted data — intro to shared_preferences',
        km: '៦.១ Local State ប៉ះ Persisted Data — ណែនាំអំពី shared_preferences'
      },
      durationMinutes: 22,
      difficulty: 'Beginner',
      explanation: {
        en: 'In-memory state resets when an app reboots. Use the `shared_preferences` package to persist primitive key-value pairs (booleans, strings, ints) across app restarts.',
        km: 'In-memory state នឹងលុបបាត់ពេលបិទ App។ ប្រើប្រាស់ package `shared_preferences` ដើម្បីរក្សាទុកទិន្នន័យ key-value (booleans, strings, ints) មិនឱ្យបាត់បង់។'
      },
      tutorial: {
        en: 'final prefs = await SharedPreferences.getInstance();\nawait prefs.setBool(\'isDarkMode\', true);\nbool isDark = prefs.getBool(\'isDarkMode\') ?? false;',
        km: 'final prefs = await SharedPreferences.getInstance();\nawait prefs.setBool(\'isDarkMode\', true);\nbool isDark = prefs.getBool(\'isDarkMode\') ?? false;'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.1 SharedPreferences</h3><p>Saved to device storage: isDarkMode = true</p></body></html>`
      }
    },
    {
      id: 'flutter-6-2',
      slug: 'making-http-requests-with-http-package',
      moduleNumber: 6,
      lessonNumberInModule: 2,
      title: {
        en: '6.2 Making an HTTP request with the http package',
        km: '៦.២ ការធ្វើ HTTP Requests ដោយប្រើប្រាស់ http package'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use `http.get(Uri.parse(url))` to execute asynchronous REST network requests and handle response status codes.',
        km: 'ប្រើប្រាស់ `http.get(Uri.parse(url))` ដើម្បីធ្វើ Asynchronous REST Network Request និងពិនិត្យមើល Response Status Code។'
      },
      tutorial: {
        en: 'import \'package:http/http\' as http;\n\nFuture<void> fetchData() async {\n  final response = await http.get(Uri.parse(\'https://api.example.com/items\'));\n  if (response.statusCode == 200) {\n    print(response.body);\n  }\n}',
        km: 'import \'package:http/http\' as http;\n\nFuture<void> fetchData() async {\n  final response = await http.get(Uri.parse(\'https://api.example.com/items\'));\n  if (response.statusCode == 200) {\n    print(response.body);\n  }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>6.2 HTTP Get Request</h3><p>HTTP 200 OK -> JSON Payload received</p></body></html>`
      }
    },
    {
      id: 'flutter-6-3',
      slug: 'futurebuilder-displaying-async-data-cleanly',
      moduleNumber: 6,
      lessonNumberInModule: 3,
      title: {
        en: '6.3 FutureBuilder — displaying async data cleanly in the UI',
        km: '៦.៣ FutureBuilder — ការបង្ហាញទិន្នន័យ Async យ៉ាងស្អាតលើ UI'
      },
      durationMinutes: 25,
      difficulty: 'Intermediate',
      explanation: {
        en: '`FutureBuilder` inspects async snapshot connection states (`ConnectionState.waiting`, `snapshot.hasError`, `snapshot.hasData`) to display spinners, error alerts, or data views.',
        km: '`FutureBuilder` ពិនិត្យមើល Async snapshot connection state (`waiting`, `hasError`, `hasData`) ដើម្បីបង្ហាញ Progress spinner, Error alert ឬទិន្នន័យ UI។'
      },
      tutorial: {
        en: 'FutureBuilder<List<String>>(\n  future: fetchCourseList(),\n  builder: (context, snapshot) {\n    if (snapshot.connectionState == ConnectionState.waiting) {\n      return const CircularProgressIndicator();\n    }\n    if (snapshot.hasError) return Text("Error: ${snapshot.error}");\n    return ListView(children: snapshot.data!.map((item) => Text(item)).toList());\n  },\n)',
        km: 'FutureBuilder<List<String>>(\n  future: fetchCourseList(),\n  builder: (context, snapshot) {\n    if (snapshot.connectionState == ConnectionState.waiting) {\n      return const CircularProgressIndicator();\n    }\n    if (snapshot.hasError) return Text("Error: ${snapshot.error}");\n    return ListView(children: snapshot.data!.map((item) => Text(item)).toList());\n  },\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>6.3 FutureBuilder</h3><p>Loading... -> [Future Resolves] -> Displays Course List</p></body></html>`
      }
    },
    {
      id: 'flutter-6-4',
      slug: 'parsing-json-into-dart-model-classes',
      moduleNumber: 6,
      lessonNumberInModule: 4,
      title: {
        en: '6.4 Parsing JSON into Dart model classes',
        km: '៦.៤ ការបំប្លែង JSON ទៅជា Dart Model Classes'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Decode raw JSON strings using `jsonDecode()` and map key-value pairs into type-safe Dart model objects with `factory Model.fromJson(Map<String, dynamic> json)`.',
        km: 'បំប្លែង JSON string ជាមួយ `jsonDecode()` ហើយបញ្ចូលទិន្នន័យ key-value ទៅជា Type-safe Dart Model Objects ដោយប្រើ `factory Model.fromJson()`។'
      },
      tutorial: {
        en: 'class CourseModel {\n  final String id;\n  final String title;\n  CourseModel({required this.id, required this.title});\n  factory CourseModel.fromJson(Map<String, dynamic> json) {\n    return CourseModel(id: json[\'id\'], title: json[\'title\']);\n  }\n}',
        km: 'class CourseModel {\n  final String id;\n  final String title;\n  CourseModel({required this.id, required this.title});\n  factory CourseModel.fromJson(Map<String, dynamic> json) {\n    return CourseModel(id: json[\'id\'], title: json[\'title\']);\n  }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>6.4 JSON Parsing</h3><p>{"id":"1", "title":"Flutter"} -> CourseModel instance</p></body></html>`
      }
    },
    {
      id: 'flutter-6-5',
      slug: 'practice-fetch-and-display-api-items',
      moduleNumber: 6,
      lessonNumberInModule: 5,
      title: {
        en: '6.5 Practice: fetch and display a list of items from a public API',
        km: '៦.៥ អនុវត្ត: ទាញយក និងបង្ហាញបញ្ជីទិន្នន័យពី Public API'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Combine `http.get`, JSON model parsing, `FutureBuilder`, and `ListView.builder` to build a live API-powered mobile screen.',
        km: 'បូកបញ្ចូល `http.get`, ការបំប្លែង JSON, `FutureBuilder`, និង `ListView.builder` ដើម្បីសាងសង់អេក្រង់ទាញយកទិន្នន័យ API ពិតប្រាកដ។'
      },
      tutorial: {
        en: '// Full pipeline: API Request -> jsonDecode -> List<PostModel> -> FutureBuilder -> ListView.builder',
        km: '// Full pipeline: API Request -> jsonDecode -> List<PostModel> -> FutureBuilder -> ListView.builder'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.5 Live API Feed</h3><p>Fetching posts from JSONPlaceholder API...</p></body></html>`
      }
    },

    // MODULE 7
    {
      id: 'flutter-7-1',
      slug: 'building-forms-textfield-and-textformfield',
      moduleNumber: 7,
      lessonNumberInModule: 1,
      title: {
        en: '7.1 Building a form with TextField and TextFormField',
        km: '៧.១ ការសាងសង់ Form ជាមួយ TextField និង TextFormField'
      },
      durationMinutes: 22,
      difficulty: 'Beginner',
      explanation: {
        en: 'Wrap input fields inside a `Form` widget using a `GlobalKey<FormState>()` and `TextFormField` to manage form state and validation.',
        km: 'រុំកញ្ចប់ Input fields នៅក្នុង `Form` widget ដោយប្រើប្រាស់ `GlobalKey<FormState>()` និង `TextFormField` សម្រាប់គ្រប់គ្រង Form state។'
      },
      tutorial: {
        en: 'final _formKey = GlobalKey<FormState>();\nForm(\n  key: _formKey,\n  child: TextFormField(\n    decoration: const InputDecoration(labelText: "Email"),\n  ),\n)',
        km: 'final _formKey = GlobalKey<FormState>();\nForm(\n  key: _formKey,\n  child: TextFormField(\n    decoration: const InputDecoration(labelText: "អ៊ីមែល"),\n  ),\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>7.1 Form Widget</h3><p>Form(key: _formKey) -> TextFormField(labelText: "Email")</p></body></html>`
      }
    },
    {
      id: 'flutter-7-2',
      slug: 'form-validation-in-flutter',
      moduleNumber: 7,
      lessonNumberInModule: 2,
      title: {
        en: '7.2 Form validation',
        km: '៧.២ ការពិនិត្យភាពត្រឹមត្រូវនៃ Form (Form Validation)'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Provide `validator: (value) => ...` logic to return error string messages if input rules (length, email format, empty check) fail.',
        km: 'ផ្តល់ logic ក្នុង `validator: (value) => ...` ដើម្បីបង្វិលសង Error string បើសិនមិនគ្រប់លក្ខខណ្ឌ (ប្រវែង, ទម្រង់អ៊ីមែល, មិនបានវាយ)។'
      },
      tutorial: {
        en: 'TextFormField(\n  validator: (val) {\n    if (val == null || val.trim().isEmpty) return "Please enter password";\n    if (val.length < 6) return "Password must be at least 6 characters";\n    return null;\n  },\n)',
        km: 'TextFormField(\n  validator: (val) {\n    if (val == null || val.trim().isEmpty) return "សូមវាយបញ្ចូលពាក្យសម្ងាត់";\n    if (val.length < 6) return "ពាក្យសម្ងាត់ត្រូវមានយ៉ាងតិច ៦ តួ";\n    return null;\n  },\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>7.2 Validation Rules</h3><p>if (_formKey.currentState!.validate()) -> Proceed Login</p></body></html>`
      }
    },
    {
      id: 'flutter-7-3',
      slug: 'buttons-gestures-snackbars-and-dialogs',
      moduleNumber: 7,
      lessonNumberInModule: 3,
      title: {
        en: '7.3 Buttons, gestures, and user feedback (SnackBar, dialogs)',
        km: '៧.៣ Buttons, Gestures, និងការផ្តល់ព័ត៌មានត្រឡប់ (SnackBar, Dialogs)'
      },
      durationMinutes: 24,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Detect custom touch gestures with `GestureDetector` or `InkWell` and display interactive feedback with `ScaffoldMessenger.of(context).showSnackBar()` or `showDialog()`.',
        km: 'ចាប់រាល់ការប៉ះ Touch ចលនាដោយប្រើ `GestureDetector` ឬ `InkWell` ហើយបង្ហាញព័ត៌មានត្រឡប់ដោយ `showSnackBar()` ឬ `showDialog()`។'
      },
      tutorial: {
        en: 'ScaffoldMessenger.of(context).showSnackBar(\n  const SnackBar(content: Text("Task completed successfully!")),\n);',
        km: 'ScaffoldMessenger.of(context).showSnackBar(\n  const SnackBar(content: Text("បានបញ្ចប់ Task ដោយជោគជ័យ!")),\n);'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>7.3 User Feedback</h3><p>Floating SnackBar: "Item saved to favorites"</p></body></html>`
      }
    },
    {
      id: 'flutter-7-4',
      slug: 'basic-app-permissions-and-device-features',
      moduleNumber: 7,
      lessonNumberInModule: 4,
      title: {
        en: '7.4 Basic app permissions and device feature concepts',
        km: '៧.៤ សិទ្ធិប្រើប្រាស់ App Permissions និងមុខងារឧបករណ៍ទូរស័ព្ទ'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Understand how Flutter plugins interact with native Android permissions (`AndroidManifest.xml`) and iOS permissions (`Info.plist`) for camera, location, and storage access.',
        km: 'យល់ដឹងពីរបៀបដែល Flutter Plugins ទាក់ទងជាមួយ Native Permissions ក្នុង `AndroidManifest.xml` និង `Info.plist` សម្រាប់ កាមេរ៉ា, ទីតាំង, និង Storage។'
      },
      tutorial: {
        en: '// AndroidManifest.xml: <uses-permission android:name="android.permission.CAMERA"/>\n// Info.plist: <key>NSCameraUsageDescription</key><string>Need camera for profile</string>',
        km: '// AndroidManifest.xml: <uses-permission android:name="android.permission.CAMERA"/>\n// Info.plist: <key>NSCameraUsageDescription</key><string>Need camera for profile</string>'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>7.4 App Permissions</h3><p>Requesting Camera & Location access via permission_handler</p></body></html>`
      }
    },
    {
      id: 'flutter-7-5',
      slug: 'practice-build-login-form-with-validation',
      moduleNumber: 7,
      lessonNumberInModule: 5,
      title: {
        en: '7.5 Practice: build a login-style form with validation',
        km: '៧.៥ អនុវត្ត: សាងសង់អេក្រង់ Login Form ជាមួយ Form Validation'
      },
      durationMinutes: 28,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Build a production-ready login interface with email validation, password visibility toggle icon, and a submit button displaying a success dialog.',
        km: 'សាងសង់ Login UI ដែលមានការពិនិត្យអត្ថបទអ៊ីមែល, ប៊ូតុងបង្ហាញ/លាក់ពាក្យសម្ងាត់, និងប៊ូតុង Submit បង្ហាញ Success Dialog។'
      },
      tutorial: {
        en: 'ElevatedButton(\n  onPressed: () {\n    if (_formKey.currentState!.validate()) {\n      showDialog(context: context, builder: (_) => const AlertDialog(title: Text("Login Success!")));\n    }\n  },\n  child: const Text("Login"),\n)',
        km: 'ElevatedButton(\n  onPressed: () {\n    if (_formKey.currentState!.validate()) {\n      showDialog(context: context, builder: (_) => const AlertDialog(title: Text("ចូលប្រព័ន្ធជោគជ័យ!")));\n    }\n  },\n  child: const Text("ចូលប្រព័ន្ធ"),\n)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>7.5 Login Form</h3><p>Email: user@example.com | Password: ******** [Login Button]</p></body></html>`
      }
    },

    // MODULE 8
    {
      id: 'flutter-8-1',
      slug: 'debugging-tools-devtools-hot-reload-restart',
      moduleNumber: 8,
      lessonNumberInModule: 1,
      title: {
        en: '8.1 Debugging tools: Flutter DevTools basics, hot reload vs hot restart',
        km: '៨.១ ឧបករណ៍ដោះស្រាយកំហុស៖ Flutter DevTools, Hot Reload ប៉ះ Hot Restart'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use Flutter DevTools to inspect widget layout bounds, detect performance bottlenecks (60/120 FPS drops), memory leaks, and network traffic.',
        km: 'ប្រើប្រាស់ Flutter DevTools ដើម្បីពិនិត្យមើលព្រំដែន Layout នៃ Widget, ពិនិត្យមើល Performance (FPS drop), Memory leaks, និង Network traffic។'
      },
      tutorial: {
        en: '// Run in terminal to launch Flutter DevTools:\nflutter run\n// Press "v" in terminal or click DevTools icon in VS Code toolbar',
        km: '// រត់ក្នុង terminal ដើម្បីបើក Flutter DevTools:\nflutter run\n// ចុច "v" ក្នុង terminal ឬចុច icon DevTools ក្នុង VS Code toolbar'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>8.1 Flutter DevTools</h3><p>Inspector Active -> Widget Bounds Visualizer ON</p></body></html>`
      }
    },
    {
      id: 'flutter-8-2',
      slug: 'writing-a-basic-widget-test',
      moduleNumber: 8,
      lessonNumberInModule: 2,
      title: {
        en: '8.2 Writing a basic widget test',
        km: '៨.២ ការសរសេរ Widget Test គ្រឹះ'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use `testWidgets()` and `WidgetTester` to pump widget trees, simulate user taps with `tester.tap()`, and verify widget presence with `findsOneWidget`.',
        km: 'ប្រើប្រាស់ `testWidgets()` និង `WidgetTester` ដើម្បី Render Widget, ធ្វើ simulation ចុចប៊ូតុងជាមួយ `tester.tap()`, និងផ្ទៀងផ្ទាត់វត្តមាន Widget ជាមួយ `findsOneWidget`។'
      },
      tutorial: {
        en: 'testWidgets("Counter increments smoke test", (WidgetTester tester) async {\n  await tester.pumpWidget(const MyApp());\n  expect(find.text("0"), findsOneWidget);\n  await tester.tap(find.byIcon(Icons.add));\n  await tester.pump();\n  expect(find.text("1"), findsOneWidget);\n});',
        km: 'testWidgets("Counter increments smoke test", (WidgetTester tester) async {\n  await tester.pumpWidget(const MyApp());\n  expect(find.text("0"), findsOneWidget);\n  await tester.tap(find.byIcon(Icons.add));\n  await tester.pump();\n  expect(find.text("1"), findsOneWidget);\n});'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>8.2 Widget Test</h3><p>✓ Counter increment test passed (0 -> 1)</p></body></html>`
      }
    },
    {
      id: 'flutter-8-3',
      slug: 'planning-the-taskflow-capstone',
      moduleNumber: 8,
      lessonNumberInModule: 3,
      title: {
        en: '8.3 Planning the TaskFlow capstone (screens, data model, features)',
        km: '៨.៣ ការរៀបចំផែនការ Capstone Project "TaskFlow" (អេក្រង់, Data Model, និង Features)'
      },
      durationMinutes: 25,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Architect the complete TaskFlow app: define the `Task` model, structure screens (List View & Add Dialog), set up state management with `setState`/`Provider`, and plan persistence with `shared_preferences`.',
        km: 'រៀបចំរចនាសម្ព័ន្ធកម្មវិធី TaskFlow ទាំងមូល៖ កំណត់ `Task` model, រៀបចំអេក្រង់, រៀបចំ State Management និងបន្ថែម Persistent Storage។'
      },
      tutorial: {
        en: '// Architecture Plan:\n// 1. Task Model (id, title, isDone)\n// 2. TaskListScreen (ListView.builder, Checkbox, Dismissible)\n// 3. AddTaskDialog / Screen\n// 4. SharedPreferences storage sync',
        km: '// Architecture Plan:\n// 1. Task Model (id, title, isDone)\n// 2. TaskListScreen (ListView.builder, Checkbox, Dismissible)\n// 3. AddTaskDialog / Screen\n// 4. SharedPreferences storage sync'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>8.3 TaskFlow Blueprint</h3><p>Ready to build the full mobile app capstone!</p></body></html>`
      }
    }
  ]
};
