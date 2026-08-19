import { MobileCourse } from './mobileCoursesHubData';

export const SWIFT_COURSE_DATA: MobileCourse = {
  id: 'swift',
  title: {
    en: 'Swift Programming — Language Basics',
    km: 'ភាសា Swift មូលដ្ឋាន'
  },
  iconName: 'swift',
  type: 'language',
  categoryId: 'languages',
  difficulty: 'Beginner',
  shortDescription: {
    en: "Apple's official language for iOS — learn it first, build real apps next.",
    km: 'ភាសាផ្លូវការរបស់ Apple សម្រាប់ iOS — រៀនវាមុន រួចទើបទៅកសាងកម្មវិធីពិតប្រាកដ។'
  },
  summary: {
    en: "Swift is the programming language created by Apple to build apps for iPhone, iPad, Mac, and every Apple platform. Learn variables, control flow, functions, structs/classes, optionals, and async/await before moving to SwiftUI.",
    km: 'Swift ជាភាសាសរសេរកម្មវិធីដែលបង្កើតឡើងដោយ Apple សម្រាប់សាងកម្មវិធីលើ iPhone, iPad, Mac និង Apple Platforms។ រៀន variables, control flow, functions, structs/classes, optionals និង async/await មុននឹងចូលទៅ SwiftUI។'
  },
  estimatedHours: 16,
  lessonCount: 28,
  usedFor: 'iOS Native Apps, SwiftUI, iPadOS, macOS, watchOS, visionOS',
  realWorldApps: ['Instagram', 'Airbnb', 'LinkedIn', 'Lyft', 'Shazam', 'Apple Music'],
  prerequisites: {
    en: 'None — true beginner course. Xcode requires a Mac, but Swift Playgrounds or online swiftfiddle.com work on any device.',
    km: 'មិនទាមទារបទពិសោធន៍សរសេរកូដពីមុនមកទេ។ Xcode ត្រូវការ Mac ប៉ុន្តែ Swift Playgrounds លើ iPad ឬ swiftfiddle.com អាចរៀនបានលើគ្រប់ Device។'
  },
  whatYouWillLearn: {
    en: [
      'Set up Xcode and Swift Playgrounds for writing and running Swift code',
      'Use variables (let/var), data types, and Swift\'s type inference',
      'Write control flow logic with if/else, switch, and loops',
      'Build functions, including parameter labels and default values',
      'Work with Swift\'s core collections: Array, Dictionary, and Set',
      'Apply object-oriented programming: classes, structs, and inheritance',
      'Use protocol-oriented programming, a Swift signature approach',
      'Write safe code using optionals (?, !, guard let, if let)',
      'Use async/await for asynchronous operations',
      'Read and understand real Swift code found in iOS projects'
    ],
    km: [
      'ដំឡើង Xcode និង Swift Playgrounds សម្រាប់ការសរសេរ និងរត់កូដ Swift',
      'ប្រើប្រាស់ variables (let/var), data types, និង Swift type inference',
      'សរសេរលក្ខខណ្ឌ control flow ជាមួយ if/else, switch, និង loops',
      'បង្កើត functions រួមទាំង parameter labels និង default values',
      'ធ្វើការជាមួយប្រភេទទិន្នន័យ Collections: Array, Dictionary, និង Set',
      'អនុវត្តកម្មវិធី Object-Oriented Programming: classes, structs, និង inheritance',
      'ប្រើប្រាស់ Protocol-Oriented Programming ដែលជាស្ទីលពិសេសរបស់ Swift',
      'សរសេរកូដមានសុវត្ថិភាព Null-safe ដោយប្រើប្រាស់ optionals (?, !, guard let, if let)',
      'ប្រើប្រាស់ async/await សម្រាប់ប្រត្តិបត្តិការ Asynchronous',
      'អាន និងយល់ដឹងពីកូដ Swift ពិតប្រាកដក្នុងគម្រោង iOS'
    ]
  },
  toolsAndSetup: {
    en: '1. Quick start: swiftfiddle.com (zero install on any device)\n2. Full local setup (Mac required): install Xcode from Mac App Store\n3. Alternative: Swift Playgrounds app (iPad or Mac)\n4. Verify: open Xcode, create a new Playground file, and run code',
    km: '១. ប្រើប្រាស់រហ័ស: swiftfiddle.com (មិនបាច់ដំឡើងលើគ្រប់ Device)\n២. ដំឡើងពេញលេញ (ត្រូវការ Mac): ដំឡើង Xcode ពី Mac App Store\n៣. ជម្រើសបន្ថែម: កម្មវិធី Swift Playgrounds (លើ iPad ឬ Mac)\n៤. ពិនិត្យការដំឡើង: បើក Xcode បង្កើត Playground file រួចចុច Run'
  },
  cheatSheet: [
    {
      concept: 'Let vs Var & Interpolation',
      code: 'let name = "Seyha" // Immutable constant\nvar streak = 5     // Mutable variable\nprint("Hello, \\(name)! Streak: \\(streak)")',
      explanation: {
        en: '`let` creates read-only constants. String interpolation uses `\\(variable)`.',
        km: '`let` បង្កើតតម្លៃថេរ (Constant)។ String interpolation ប្រើប្រាស់ `\\(variable)`។'
      }
    },
    {
      concept: 'Struct vs Class',
      code: 'struct Habit {\n  var title: String\n  var isDone: Bool\n}\nvar h1 = Habit(title: "Read", isDone: false)\nvar h2 = h1 // Value type - creates a copy!',
      explanation: {
        en: 'Structs are value types (copied on assignment); Classes are reference types.',
        km: 'Structs គឺជា Value types (Copy តម្លៃពេល Assign) ចំណែក Class គឺជា Reference types។'
      }
    },
    {
      concept: 'Guard Let Unwrapping',
      code: 'func process(name: String?) {\n  guard let validName = name else {\n    print("Missing name")\n    return\n  }\n  print("Valid name: \\(validName)")\n}',
      explanation: {
        en: '`guard let` unwraps optionals early or exits the function scope safely.',
        km: '`guard let` អានតម្លៃ Optionals ដោយសុវត្ថិភាព ឬចាកចេញពី Function ជាមុន។'
      }
    },
    {
      concept: 'Async / Await',
      code: 'func fetchHabits() async throws -> [Habit] {\n  try await Task.sleep(nanoseconds: 1_000_000_000)\n  return [Habit(title: "Code", isDone: true)]\n}',
      explanation: {
        en: 'Modern Swift concurrency uses `async` functions and `await` calls.',
        km: 'ប្រព័ន្ធ Concurrency ទំនើបរបស់ Swift ប្រើប្រាស់ `async` functions និង `await` calls។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-sw-1',
      question: {
        en: 'In Swift, what happens when a `struct` instance is assigned to a new variable?',
        km: 'ក្នុង Swift តើមានអ្វីកើតឡើងពេលប្រកាសអថេរថ្មីស្នើនឹង `struct` instance?'
      },
      options: [
        { id: '1', text: { en: 'A copy of the struct is created (Value type)', km: 'វាបង្កើត Copy តម្លៃថ្មីមួយទៀត (Value type)' }, isCorrect: true },
        { id: '2', text: { en: 'Both variables reference the exact same memory address', km: 'អថេរទាំងពីរចង្អុលទៅសាមញ្ញដ្ឋាន Memory តែមួយ' }, isCorrect: false },
        { id: '3', text: { en: 'It throws a compilation error', km: 'វានឹងកើតមាន Compilation error' }, isCorrect: false }
      ],
      explanation: {
        en: 'Structs in Swift are Value Types, meaning assigning them creates an independent copy.',
        km: 'Structs ក្នុង Swift ជា Value Types មានន័យថាការ Assign វាបង្កើតចម្លង (Copy) ដោយឡែកពីគ្នា។'
      }
    },
    {
      id: 'q-sw-2',
      question: {
        en: 'Which keyword is used to declare an unmodifiable constant in Swift?',
        km: 'តើពាក្យគន្លឹះមួយណាប្រើប្រកាសតម្លៃថេរមិនអាចកែប្រែបានក្នុង Swift?'
      },
      options: [
        { id: '1', text: { en: 'let', km: 'let' }, isCorrect: true },
        { id: '2', text: { en: 'var', km: 'var' }, isCorrect: false },
        { id: '3', text: { en: 'const', km: 'const' }, isCorrect: false },
        { id: '4', text: { en: 'final', km: 'final' }, isCorrect: false }
      ],
      explanation: {
        en: '`let` defines immutable constants, while `var` defines mutable variables.',
        km: '`let` ប្រើសម្រាប់ប្រកាសតម្លៃថេរ (Constant) ហើយ `var` សម្រាប់អថែកែប្រែបាន។'
      }
    },
    {
      id: 'q-sw-3',
      question: {
        en: 'What is the primary purpose of `guard let` in Swift?',
        km: 'តើគោលបំណងចម្បងនៃ `guard let` ក្នុង Swift គឺអ្វី?'
      },
      options: [
        { id: '1', text: { en: 'Safely unwrap optionals early and exit if value is nil', km: 'អានតម្លៃ Optionals ដោយសុវត្ថិភាពជាមុន ហើយចេញបើស្មើ nil' }, isCorrect: true },
        { id: '2', text: { en: 'Loop through arrays repeatedly', km: 'រត់ Loop លើ Array ជាច្រើនដង' }, isCorrect: false },
        { id: '3', text: { en: 'Import external iOS libraries', km: 'នាំចូល Library iOS ពីខាងក្រៅ' }, isCorrect: false }
      ],
      explanation: {
        en: '`guard let` provides early exit capability if an optional contains nil, avoiding nested checks.',
        km: '`guard let` ជួយឱ្យចាកចេញពី Function ភ្លាមៗប្រសិនបើ Optional ស្មើ nil ដោយមិនបាច់ nested if ឡើយ។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'CLI Habit Tracker',
      km: 'កម្មវិធី CLI Habit Tracker'
    },
    description: {
      en: 'A command-line app where a user can add habits, mark a habit done for the day (increasing its streak), view all habits with their streak count, and remove a habit — all stored in an array of Habit structs. This is the bridge project before starting SwiftUI.',
      km: 'កម្មវិធី Command-line ដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់បន្ថែមទម្លាប់ (Habits) កត់ត្រាទម្លាប់ជោគជ័យប្រចាំថ្ងៃ (កើនចំណុច Streak) មើលទម្លាប់ទាំងអស់ និងលុបទម្លាប់ចេញ — ដោយរក្សាទុកក្នុង Array នៃ Habit structs។ នេះជាគម្រោងស្ពានមុនចូលរៀន SwiftUI។'
    },
    featureChecklist: {
      en: [
        'Add a new habit by name',
        'List all habits with their current streak',
        'Mark a habit done today (increments streak)',
        'Remove a habit by index',
        'Simple text menu loop using switch that keeps running until Exit'
      ],
      km: [
        'បន្ថែមទម្លាប់ថ្មីតាមឈ្មោះ',
        'បង្ហាញបញ្ជីទម្លាប់ទាំងអស់ និងចំនួនថ្ងៃ Streak បច្ចុប្បន្ន',
        'កត់ត្រាទម្លាប់បានសម្រេចថ្ងៃនេះ (ដំឡើងចំនួន Streak)',
        'លុបទម្លាប់ចេញតាម Index',
        'រង្វង់ Menu អត្ថបទដែលប្រើ switch statement រត់រហូតដល់ជ្រើសរើស ចេញ (Exit)'
      ]
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body style="background:#0b1120; color:#f8fafc; font-family: monospace; padding:20px; line-height:1.6;">
  <h2 style="color:#f97316; margin-top:0;">🔥 CLI Habit Tracker Demo</h2>
  <div style="background:#1e293b; padding:16px; border-radius:12px; border:1px solid #334155;">
    <p style="color:#38bdf8;">=== HABIT TRACKER MENU ===</p>
    <p>1. Add New Habit</p>
    <p>2. View All Habits</p>
    <p>3. Mark Habit Done</p>
    <p>4. Remove Habit</p>
    <p>5. Exit</p>
    <hr style="border-color:#334155; margin:15px 0;">
    <p style="color:#4ade80;">✅ [1] Daily Coding — 🔥 5 Day Streak</p>
    <p style="color:#4ade80;">✅ [2] Read 10 Pages — 🔥 12 Day Streak</p>
    <p style="color:#f97316; font-weight:bold;">🎯 Total Active Habits: 2</p>
  </div>
</body>
</html>`
    },
    finalCode: `struct Habit {
    var name: String
    var streak: Int = 0
}

func main() {
    var habits = [
        Habit(name: "Daily Coding", streak: 5),
        Habit(name: "Read 10 Pages", streak: 12),
        Habit(name: "Morning Run", streak: 3)
    ]

    print("=== SWIFT HABIT TRACKER ===")
    for (index, habit) in habits.enumerated() {
        print("\\(index + 1). \\(habit.name) — 🔥 \\(habit.streak) day streak")
    }

    // Mark habit #1 as done today
    habits[0].streak += 1
    print("----------------------------")
    print("Updated \\(habits[0].name) streak to 🔥 \\(habits[0].streak) days!")
}

main()`
  },
  lessons: [
    // MODULE 1
    {
      id: 'sw-1-1',
      slug: 'what-is-swift-and-why-apple-platforms-use-it',
      moduleNumber: 1,
      lessonNumberInModule: 1,
      title: {
        en: '1.1 What is Swift and why Apple platforms use it',
        km: '១.១ អ្វីទៅជា Swift ហើយហេតុអ្វី Apple Platforms ប្រើប្រាស់វា'
      },
      durationMinutes: 12,
      difficulty: 'Beginner',
      explanation: {
        en: 'Swift was released by Apple in 2014 to replace Objective-C. It is concise, fast, safe, and built specifically for iOS, macOS, watchOS, and tvOS development.',
        km: 'Swift ត្រូវបានបញ្ចេញដោយ Apple ក្នុងឆ្នាំ 2014 ជំនួស Objective-C។ វាមានល្បឿនលឿន ខ្លីខ្លឹម មានសុវត្ថិភាព និងរចនាឡើងជាពិសេសសម្រាប់ iOS, macOS, watchOS, tvOS។'
      },
      tutorial: {
        en: 'print("Hello, Swift!")',
        km: 'print("សួស្តី ភាសា Swift!")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>1.1 Hello Swift!</h3><pre>print("Hello, Swift!")</pre></body></html>`
      }
    },
    {
      id: 'sw-1-2',
      slug: 'installing-xcode-swift-playgrounds-environment',
      moduleNumber: 1,
      lessonNumberInModule: 2,
      title: {
        en: '1.2 Installing Xcode / Swift Playgrounds and setting up environment',
        km: '១.២ ការដំឡើង Xcode / Swift Playgrounds និងរៀបចំ Environment'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Explore zero-setup online playgrounds at swiftfiddle.com, or install Xcode on a Mac / Swift Playgrounds on iPad for full native execution.',
        km: 'ស្វែងយល់ការប្រើប្រាស់ swiftfiddle.com លើ browser ឬដំឡើង Xcode លើ Mac / Swift Playgrounds លើ iPad សម្រាប់ការរត់កូដ Native។'
      },
      tutorial: {
        en: '// Xcode Playground:\nimport Foundation\nprint("Xcode Playground Ready!")',
        km: '// Xcode Playground:\nimport Foundation\nprint("Xcode Playground រួចរាល់!")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>1.2 Swift Environment</h3><p>Open Xcode -> File -> New -> Playground.</p></body></html>`
      }
    },
    {
      id: 'sw-1-3',
      slug: 'your-first-program-hello-swift',
      moduleNumber: 1,
      lessonNumberInModule: 3,
      title: {
        en: '1.3 Your first program — "Hello, Swift!"',
        km: '១.៣ កម្មវិធីដំបូងរបស់អ្នក — "Hello, Swift!"'
      },
      durationMinutes: 13,
      difficulty: 'Beginner',
      explanation: {
        en: 'Swift code runs directly at top-level without boilerplate wrappers. Use string interpolation `\\(variable)` to format outputs.',
        km: 'កូដ Swift រត់ដោយផ្ទាល់ក្នុង Top-level ដោយមិនបាច់សរសេរ Function Wrapper។ ប្រើប្រាស់ String interpolation `\\(variable)` ដើម្បបង្ហាញទិន្នន័យ។'
      },
      tutorial: {
        en: 'let name = "Seyha"\nlet age = 25\nprint("Hello, my name is \\(name) and I am \\(age) years old.")',
        km: 'let name = "សីហា"\nlet age = 25\nprint("សួស្តី ខ្ញុំឈ្មោះ \\(name) ហើយខ្ញុំអាយុ \\(age) ឆ្នាំ។")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>1.3 String Interpolation</h3><p>Hello, my name is Seyha and I am 25 years old.</p></body></html>`
      }
    },

    // MODULE 2
    {
      id: 'sw-2-1',
      slug: 'variables-let-vs-var-type-inference',
      moduleNumber: 2,
      lessonNumberInModule: 1,
      title: {
        en: '2.1 Variables: let vs var, and type inference',
        km: '២.១ អថេរ: let ប៉ះ var និង Type inference'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Use `let` for immutable constants and `var` for mutable state. Swift relies heavily on strict type safety and automatic inference.',
        km: 'ប្រើ `let` សម្រាប់តម្លៃថេរ (Constant) និង `var` សម្រាប់អថែកែប្រែបាន។ Swift យកចិត្តទុកដាក់ខ្ពស់លើ Type safety និង Type inference។'
      },
      tutorial: {
        en: 'let city = "Phnom Penh" // Constant\nvar score = 10\nscore += 5\nprint("\\(city) Score: \\(score)")',
        km: 'let city = "ភ្នំពេញ"\nvar score = 10\nscore += 5\nprint("\\(city) ពិន្ទុ: \\(score)")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>2.1 Let vs Var</h3><p>let: Immutable<br>var: Mutable (score = 15)</p></body></html>`
      }
    },
    {
      id: 'sw-2-2',
      slug: 'data-types-int-double-string-bool',
      moduleNumber: 2,
      lessonNumberInModule: 2,
      title: {
        en: '2.2 Data types (Int, Double, String, Bool)',
        km: '២.២ ប្រភេទទិន្នន័យ (Int, Double, String, Bool)'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Swift standard data types include Int, Double, Float, String, and Bool. Swift does not perform implicit type casting between numbers.',
        km: 'ប្រភេទទិន្នន័យគ្រឹះក្នុង Swift រួមមាន Int, Double, Float, String, និង Bool។ Swift មិនទាក់ទាញតម្លៃកាសលេខដោយស្វ័យប្រវត្តិឡើយ។'
      },
      tutorial: {
        en: 'let count: Int = 10\nlet price: Double = 9.99\nlet total = Double(count) * price\nprint("Total: $\\(total)")',
        km: 'let count: Int = 10\nlet price: Double = 9.99\nlet total = Double(count) * price\nprint("សរុប: $\\(total)")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>2.2 Swift Data Types</h3><p>Total: $99.9</p></body></html>`
      }
    },
    {
      id: 'sw-2-3',
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
        en: 'Learn standard arithmetic (+, -, *, /, %), comparison (==, !=, >, <), logical (&&, ||, !), and range operators (`...` and `..<`).',
        km: 'សិក្សាប្រមាណវិធីគណនា (+, -, *, /, %), ប្រៀបធៀប (==, !=, >, <), តក្កវិទ្យា (&&, ||, !) និង Range operators (`...` និង `..<`)។'
      },
      tutorial: {
        en: 'let a = 15\nlet b = 4\nprint("Quotient: \\(a / b)")\nprint("Remainder: \\(a % b)")',
        km: 'let a = 15\nlet b = 4\nprint("ផលចែក: \\(a / b)")\nprint("សំណល់: \\(a % b)")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>2.3 Swift Operators</h3><p>15 / 4 = 3 | 15 % 4 = 3</p></body></html>`
      }
    },
    {
      id: 'sw-2-4',
      slug: 'string-interpolation-and-formatting',
      moduleNumber: 2,
      lessonNumberInModule: 4,
      title: {
        en: '2.4 String interpolation and formatting',
        km: '២.៤ String interpolation និង Formatting'
      },
      durationMinutes: 14,
      difficulty: 'Beginner',
      explanation: {
        en: 'Format numbers and currency gracefully using String format specifiers `String(format: "%.2f", amount)` and multiline string literals.',
        km: 'Format ចំនួនលេខ និងររូបិយវត្ថុដោយស្អាតបាតដោយប្រើ String specifiers `String(format: "%.2f", amount)` និង multiline string literals។'
      },
      tutorial: {
        en: 'let price = 19.998\nlet formatted = String(format: "%.2f", price)\nprint("Price: $\\(formatted)")',
        km: 'let price = 19.998\nlet formatted = String(format: "%.2f", price)\nprint("តម្លៃ: $\\(formatted)")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>2.4 String Specifier</h3><p>Price: $20.00</p></body></html>`
      }
    },
    {
      id: 'sw-2-5',
      slug: 'practice-mini-calculator-script-swift',
      moduleNumber: 2,
      lessonNumberInModule: 5,
      title: {
        en: '2.5 Practice: mini calculator script in Swift',
        km: '២.៥ អនុវត្ត: កម្មវិធី Mini Calculator ក្នុង Swift'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Combine constants, variables, operators, and formatted string outputs into a complete command-line calculation script.',
        km: 'បូកបញ្ចូលតម្លៃថេរ អថេរ ប្រមាណវិធី និងការបង្ហាញលទ្ធផល Formatted ក្នុង Swift Script។'
      },
      tutorial: {
        en: 'let num1 = 45.0\nlet num2 = 15.0\nprint("Sum: \\(num1 + num2)")\nprint("Product: \\(num1 * num2)")',
        km: 'let num1 = 45.0\nlet num2 = 15.0\nprint("ផលបូក: \\(num1 + num2)")\nprint("ផលគុណ: \\(num1 * num2)")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>2.5 Calculator Output</h3><p>Sum: 60.0 | Product: 675.0</p></body></html>`
      }
    },

    // MODULE 3
    {
      id: 'sw-3-1',
      slug: 'if-else-statements',
      moduleNumber: 3,
      lessonNumberInModule: 1,
      title: {
        en: '3.1 if / else statements',
        km: '៣.១ if / else statements'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Conditional statements in Swift do not require parentheses around boolean expressions, but curly braces `{}` are mandatory.',
        km: 'លក្ខខណ្ឌក្នុង Swift មិនទាមទារវង់ក្រចកជុំវិញ Boolean expressions ឡើយ ប៉ុន្តែរង្វង់សញ្ញា `{}` គឺត្រូវតែមានជាដាច់ខាត។'
      },
      tutorial: {
        en: 'let speed = 75\nif speed > 60 {\n    print("Speed limit exceeded!")\n} else {\n    print("Safe speed.")\n}',
        km: 'let speed = 75\nif speed > 60 {\n    print("លឿនហួសកំណត់!")\n} else {\n    print("ល្បឿនមានសុវត្ថិភាព។")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f43f5e; padding:20px; font-family:monospace;"><h3>3.1 If Statement</h3><p>Speed limit exceeded!</p></body></html>`
      }
    },
    {
      id: 'sw-3-2',
      slug: 'switch-statements',
      moduleNumber: 3,
      lessonNumberInModule: 2,
      title: {
        en: '3.2 switch statements (powerful pattern matching)',
        km: '៣.២ switch statements (Pattern matching ដ៏មានឥទ្ធិពល)'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Swift `switch` statements must be exhaustive, do not require explicit `break` statements, and support pattern matching with ranges and tuples.',
        km: '`switch` ក្នុង Swift ត្រូវតែ Exhaustive (គ្របដណ្តប់គ្រប់ករណី) មិនបាច់សរសេរ `break` និងទ្រទ្រង់ Pattern matching ជាមួយ Ranges/Tuples។'
      },
      tutorial: {
        en: 'let score = 85\nswitch score {\ncase 90...100:\n    print("Grade A")\ncase 80..<90:\n    print("Grade B")\ndefault:\n    print("Grade C or below")\n}',
        km: 'let score = 85\nswitch score {\ncase 90...100:\n    print("Grade A")\ncase 80..<90:\n    print("Grade B")\ndefault:\n    print("Grade C or below")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>3.2 Swift Switch</h3><p>Score 85: Grade B</p></body></html>`
      }
    },
    {
      id: 'sw-3-3',
      slug: 'for-in-loops-while-loops-and-ranges',
      moduleNumber: 3,
      lessonNumberInModule: 3,
      title: {
        en: '3.3 for-in loops, while loops, and ranges (1...10)',
        km: '៣.៣ for-in loops, while loops និង Ranges (1...10)'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Use closed range `1...5` (inclusive) or half-open range `1..<5` (exclusive) inside `for-in` loops to iterate sequences.',
        km: 'ប្រើប្រាស់ Closed range `1...5` (រាប់ដល់ 5) ឬ Half-open range `1..<5` (រាប់ដល់ 4) ក្នុងរង្វង់ `for-in` loop។'
      },
      tutorial: {
        en: 'for index in 1...5 {\n    print("Count: \\(index)")\n}',
        km: 'for index in 1...5 {\n    print("រាប់: \\(index)")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>3.3 Swift Closed Range</h3><p>Count: 1 to 5</p></body></html>`
      }
    },
    {
      id: 'sw-3-4',
      slug: 'practice-fizzbuzz-in-swift-using-switch',
      moduleNumber: 3,
      lessonNumberInModule: 4,
      title: {
        en: '3.4 Practice: FizzBuzz in Swift using switch',
        km: '៣.៤ អនុវត្ត: FizzBuzz ក្នុង Swift ដោយប្រើ switch'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Implement FizzBuzz using tuple pattern matching `(i % 3, i % 5)` inside a Swift `switch` statement for maximum readability.',
        km: 'អនុវត្ត FizzBuzz ដោយប្រើប្រាស់ Tuple pattern matching `(i % 3, i % 5)` ក្នុង Swift `switch` statement។'
      },
      tutorial: {
        en: 'for i in 1...15 {\n    switch (i % 3, i % 5) {\n    case (0, 0): print("FizzBuzz")\n    case (0, _): print("Fizz")\n    case (_, 0): print("Buzz")\n    default: print(i)\n    }\n}',
        km: 'for i in 1...15 {\n    switch (i % 3, i % 5) {\n    case (0, 0): print("FizzBuzz")\n    case (0, _): print("Fizz")\n    case (_, 0): print("Buzz")\n    default: print(i)\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>3.4 Switch FizzBuzz</h3><p>1, 2, Fizz, 4, Buzz, ..., 15: FizzBuzz</p></body></html>`
      }
    },

    // MODULE 4
    {
      id: 'sw-4-1',
      slug: 'declaring-and-calling-functions-swift',
      moduleNumber: 4,
      lessonNumberInModule: 1,
      title: {
        en: '4.1 Declaring and calling functions in Swift',
        km: '៤.១ ការប្រកាស និងហៅប្រើប្រាស់ Functions ក្នុង Swift'
      },
      durationMinutes: 16,
      difficulty: 'Beginner',
      explanation: {
        en: 'Functions are declared with `func`. Argument labels allow expressive function invocation syntax such as `greet(person: "Seyha")`.',
        km: 'Functions ត្រូវប្រកាសដោយប្រើ `func`។ Argument labels អនុញ្ញាតឱ្យសរសេរកូដហៅប្រើប្រាស់បានយ៉ាងស្រស់ស្អាតដូចជា `greet(person: "Seyha")`។'
      },
      tutorial: {
        en: 'func greet(person name: String) -> String {\n    return "Hello, \\(name)!"\n}\nprint(greet(person: "Seyha"))',
        km: 'func greet(person name: String) -> String {\n    return "សួស្តី, \\(name)!"\n}\nprint(greet(person: "សីហា"))'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.1 Argument Labels</h3><p>Hello, Seyha!</p></body></html>`
      }
    },
    {
      id: 'sw-4-2',
      slug: 'parameter-labels-and-default-values',
      moduleNumber: 4,
      lessonNumberInModule: 2,
      title: {
        en: '4.2 Parameter labels and default values',
        km: '៤.២ Parameter labels និង Default values'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Use `_` to omit caller parameter labels, or supply default parameter values directly in the signature: `func log(_ msg: String = "OK")`.',
        km: 'ប្រើប្រាស់ `_` ដើម្បីលុប Parameter label ពេលហៅប្រើ ឬកំណត់ Default parameter values ក្នុង Function signature។'
      },
      tutorial: {
        en: 'func calculateTotal(price: Double, taxRate: Double = 0.10) -> Double {\n    return price * (1 + taxRate)\n}\nprint("Total: $\\(calculateTotal(price: 100.0))")',
        km: 'func calculateTotal(price: Double, taxRate: Double = 0.10) -> Double {\n    return price * (1 + taxRate)\n}\nprint("សរុប: $\\(calculateTotal(price: 100.0))")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>4.2 Default Parameters</h3><p>Total: $110.0</p></body></html>`
      }
    },
    {
      id: 'sw-4-3',
      slug: 'closures-swift-anonymous-functions',
      moduleNumber: 4,
      lessonNumberInModule: 3,
      title: {
        en: '4.3 Closures (Swift\'s version of anonymous functions)',
        km: '៤.៣ Closures (Anonymous functions ក្នុង Swift)'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Closures are self-contained blocks of functionality. Swift provides trailing closure syntax and shorthand arguments `$0`, `$1`.',
        km: 'Closures គឺជា Block នៃ Function។ Swift ផ្តល់ជូន Trailing closure syntax និង Shorthand arguments `$0`, `$1`។'
      },
      tutorial: {
        en: 'let numbers = [5, 2, 8, 1]\nlet sorted = numbers.sorted { $0 < $1 }\nprint("Sorted: \\(sorted)")',
        km: 'let numbers = [5, 2, 8, 1]\nlet sorted = numbers.sorted { $0 < $1 }\nprint("តម្រៀប: \\(sorted)")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>4.3 Swift Closures</h3><p>Sorted: [1, 2, 5, 8]</p></body></html>`
      }
    },
    {
      id: 'sw-4-4',
      slug: 'practice-reusable-utility-functions-swift',
      moduleNumber: 4,
      lessonNumberInModule: 4,
      title: {
        en: '4.4 Practice: build reusable utility functions in Swift',
        km: '៤.៤ អនុវត្ត: បង្កើត Reusable Utility Functions ក្នុង Swift'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Build practical Swift helper methods for date formatting, price string generation, and input validation.',
        km: 'បង្កើត Helper methods ក្នុង Swift សម្រាប់ការ Format កាលបរិច្ឆេទ តម្លៃប្រាក់ និងការពិនិត្យអត្ថបទ។'
      },
      tutorial: {
        en: 'func formatPrice(_ price: Double) -> String {\n    return String(format: "$%.2f", price)\n}\nprint(formatPrice(49.9))',
        km: 'func formatPrice(_ price: Double) -> String {\n    return String(format: "$%.2f", price)\n}\nprint(formatPrice(49.9))'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.4 Utility Function</h3><p>$49.90</p></body></html>`
      }
    },

    // MODULE 5
    {
      id: 'sw-5-1',
      slug: 'array-creating-looping-common-methods',
      moduleNumber: 5,
      lessonNumberInModule: 1,
      title: {
        en: '5.1 Array — creating, looping, common methods (map, filter)',
        km: '៥.១ Array — ការបង្កើត ការទាញប្រើ និង Methods (map, filter)'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Swift Arrays are ordered collections. Leverage functional methods like `.map`, `.filter`, `.reduce`, and `.compactMap`.',
        km: 'Array ក្នុង Swift ជាប្រភេទទិន្នន័យមានលំដាប់។ ទាញយកប្រយោជន៍ពី Functional methods ដូចជា `.map`, `.filter`, `.reduce`។'
      },
      tutorial: {
        en: 'let habits = ["Read", "Code", "Run"]\nlet upper = habits.map { $0.uppercase() }\nprint(upper)',
        km: 'let habits = ["Read", "Code", "Run"]\nlet upper = habits.map { $0.uppercase() }\nprint(upper)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>5.1 Swift Array</h3><p>["READ", "CODE", "RUN"]</p></body></html>`
      }
    },
    {
      id: 'sw-5-2',
      slug: 'dictionary-key-value-data',
      moduleNumber: 5,
      lessonNumberInModule: 2,
      title: {
        en: '5.2 Dictionary — key/value data',
        km: '៥.២ Dictionary — ទិន្នន័យ Key/Value'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Dictionaries store unordered key-value associations. Accessing a key always returns an optional value because the key may not exist.',
        km: 'Dictionary រក្សាទុកទិន្នន័យ Key-Value គ្មានលំដាប់។ ការហៅ Key ប្រគល់តម្លៃជា Optional ជានិច្ច ព្រោះ Key អាចមិនមាន។'
      },
      tutorial: {
        en: 'var scores = ["Seyha": 95, "Dara": 88]\nprint("Seyha score: \\(scores["Seyha"] ?? 0)")',
        km: 'var scores = ["Seyha": 95, "Dara": 88]\nprint("ពិន្ទុសីហា: \\(scores["Seyha"] ?? 0)")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>5.2 Swift Dictionary</h3><p>Seyha score: 95</p></body></html>`
      }
    },
    {
      id: 'sw-5-3',
      slug: 'set-unique-values-swift',
      moduleNumber: 5,
      lessonNumberInModule: 3,
      title: {
        en: '5.3 Set — unique values in Swift',
        km: '៥.៣ Set — ទិន្នន័យមិនជាន់គ្នាក្នុង Swift'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Sets store unordered unique values conforming to the `Hashable` protocol. Useful for fast lookup operations and removing duplicates.',
        km: 'Set រក្សាទុកទិន្នន័យមិនជាន់គ្នាដែលផ្ទៀងផ្ទាត់ `Hashable` protocol។ មានប្រយោជន៍សម្រាប់ការស្វែងរកលឿន និងលុបធាតុស្ទួន។'
      },
      tutorial: {
        en: 'let tags: Set = ["swift", "ios", "swift"]\nprint("Unique count: \\(tags.count)")',
        km: 'let tags: Set = ["swift", "ios", "swift"]\nprint("ចំនួនមិនស្ទួន: \\(tags.count)")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>5.3 Swift Set</h3><p>Unique count: 2</p></body></html>`
      }
    },
    {
      id: 'sw-5-4',
      slug: 'practice-word-frequency-counter-swift',
      moduleNumber: 5,
      lessonNumberInModule: 4,
      title: {
        en: '5.4 Practice: word frequency counter using collection methods',
        km: '៥.៤ អនុវត្ត: កម្មវិធីរាប់ពាក្យស្ទួនដោយប្រើ Collection methods'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Count frequency of occurrences in a sentence by combining `split(separator:)` and Dictionary default mutation subscript `dict[word, default: 0] += 1`.',
        km: 'រាប់ចំនួនពាក្យដែលស្ទួនក្នុងល្បះដោយបូកបញ្ចូន `split(separator:)` និង Dictionary subscript `dict[word, default: 0] += 1`។'
      },
      tutorial: {
        en: 'let sentence = "swift ios swift swiftui ios"\nvar counts: [String: Int] = [:]\nfor word in sentence.split(separator: " ") {\n    counts[String(word), default: 0] += 1\n}\nprint(counts)',
        km: 'let sentence = "swift ios swift swiftui ios"\nvar counts: [String: Int] = [:]\nfor word in sentence.split(separator: " ") {\n    counts[String(word), default: 0] += 1\n}\nprint(counts)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>5.4 Dictionary Default Mutate</h3><p>["swift": 2, "ios": 2, "swiftui": 1]</p></body></html>`
      }
    },

    // MODULE 6
    {
      id: 'sw-6-1',
      slug: 'structs-vs-classes-swift-design-choice',
      moduleNumber: 6,
      lessonNumberInModule: 1,
      title: {
        en: '6.1 Structs vs classes — Swift\'s key design choice',
        km: '៦.១ Structs ប៉ះ classes — ការជ្រើសរើសរចនាសម្ព័ន្ធក្នុង Swift'
      },
      durationMinutes: 22,
      difficulty: 'Beginner',
      explanation: {
        en: 'Structs are Value Types (copied on assignment); Classes are Reference Types (shared memory pointer). Prefer Structs by default in Swift & SwiftUI.',
        km: 'Structs គឺជា Value Types (Copy ពេល Assign); Classes គឺជា Reference Types (ចែករំលែក Memory)។ ជ្រើសរើស Structs ជាដើមក្នុង Swift & SwiftUI។'
      },
      tutorial: {
        en: 'struct User {\n    var name: String\n}\nvar u1 = User(name: "Seyha")\nvar u2 = u1 // Copies u1!\nu2.name = "Dara"\nprint("u1: \\(u1.name) | u2: \\(u2.name)")',
        km: 'struct User {\n    var name: String\n}\nvar u1 = User(name: "សីហា")\nvar u2 = u1 // Copy u1!\nu2.name = "ដារ៉ា"\nprint("u1: \\(u1.name) | u2: \\(u2.name)")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.1 Struct Copy Behavior</h3><p>u1: Seyha | u2: Dara</p></body></html>`
      }
    },
    {
      id: 'sw-6-2',
      slug: 'constructors-initializers-and-properties',
      moduleNumber: 6,
      lessonNumberInModule: 2,
      title: {
        en: '6.2 Constructors (initializers) and properties',
        km: '៦.២ Constructors (initializers) និង Properties'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Structs get an automatic memberwise initializer. Custom initializers are declared using `init(...)`. Computed properties calculate values on demand.',
        km: 'Structs ទទួលបាន Memberwise initializer ដោយស្វ័យប្រវត្តិ។ កំណត់កូដ Initializer ដោយខ្លួនឯងដោយប្រើ `init(...)`។'
      },
      tutorial: {
        en: 'struct Rectangle {\n    var width: Double\n    var height: Double\n    var area: Double { width * height } // Computed property\n}\nlet rect = Rectangle(width: 5.0, height: 4.0)\nprint("Area: \\(rect.area)")',
        km: 'struct Rectangle {\n    var width: Double\n    var height: Double\n    var area: Double { width * height }\n}\nlet rect = Rectangle(width: 5.0, height: 4.0)\nprint("ផ្ទៃក្រឡា: \\(rect.area)")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>6.2 Computed Property</h3><p>Area: 20.0</p></body></html>`
      }
    },
    {
      id: 'sw-6-3',
      slug: 'inheritance-with-classes',
      moduleNumber: 6,
      lessonNumberInModule: 3,
      title: {
        en: '6.3 Inheritance with classes',
        km: '៦.៣ Inheritance ជាមួយ Classes'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Classes support single inheritance, method overriding via `override`, and clean up memory via deinitializers `deinit`.',
        km: 'Classes ទ្រទ្រង់ការស្នងត្រកូល (Single inheritance) ការ Override method ដោយប្រើ `override` និងការសម្អាត Memory ដោយ `deinit`។'
      },
      tutorial: {
        en: 'class Vehicle {\n    func makeNoise() { print("Vroom") }\n}\nclass Car: Vehicle {\n    override func makeNoise() { print("Beep beep!") }\n}\nCar().makeNoise()',
        km: 'class Vehicle {\n    func makeNoise() { print("Vroom") }\n}\nclass Car: Vehicle {\n    override func makeNoise() { print("Beep beep!") }\n}\nCar().makeNoise()'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.3 Class Inheritance</h3><p>Beep beep!</p></body></html>`
      }
    },
    {
      id: 'sw-6-4',
      slug: 'protocols-and-protocol-oriented-programming',
      moduleNumber: 6,
      lessonNumberInModule: 4,
      title: {
        en: '6.4 Protocols and protocol-oriented programming',
        km: '៦.៤ Protocols និង Protocol-oriented programming'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Protocols define contracts of properties and methods. Protocol Extensions provide default implementations, enabling powerful composition over inheritance.',
        km: 'Protocols កំណត់កិច្ចសន្យា Properties/Methods។ Protocol Extensions ផ្តល់ Default implementations បង្កើតជាស្ទីល Composition over inheritance។'
      },
      tutorial: {
        en: 'protocol Describable {\n    var description: String { get }\n}\nstruct Task: Describable {\n    var title: String\n    var description: String { "Task: \\(title)" }\n}\nprint(Task(title: "Learn Swift").description)',
        km: 'protocol Describable {\n    var description: String { get }\n}\nstruct Task: Describable {\n    var title: String\n    var description: String { "Task: \\(title)" }\n}\nprint(Task(title: "រៀន Swift").description)'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>6.4 Protocol Conformance</h3><p>Task: Learn Swift</p></body></html>`
      }
    },
    {
      id: 'sw-6-5',
      slug: 'practice-protocol-driven-model',
      moduleNumber: 6,
      lessonNumberInModule: 5,
      title: {
        en: '6.5 Practice: build a protocol-driven model (Drawable shapes)',
        km: '៦.៥ អនុវត្ត: បង្កើត Protocol-driven model (Drawable shapes)'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Construct a flexible model layer using Protocols and Structs to draw and measure areas of various shapes without class inheritance dependencies.',
        km: 'សាងសង់ Model layer ដោយប្រើប្រាស់ Protocols និង Structs ដើម្បីគណនាផ្ទៃរូបរាងធរណីមាត្រផ្សេងៗ។'
      },
      tutorial: {
        en: 'protocol Shape {\n    func area() -> Double\n}\nstruct Circle: Shape {\n    var radius: Double\n    func area() -> Double { .pi * radius * radius }\n}\nprint("Circle area: \\(String(format: "%.2f", Circle(radius: 5).area()))")',
        km: 'protocol Shape {\n    func area() -> Double\n}\nstruct Circle: Shape {\n    var radius: Double\n    func area() -> Double { .pi * radius * radius }\n}\nprint("ផ្ទៃរង្វង់: \\(String(format: "%.2f", Circle(radius: 5).area()))")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>6.5 Protocol-Driven Shapes</h3><p>Circle area: 78.54</p></body></html>`
      }
    },

    // MODULE 7
    {
      id: 'sw-7-1',
      slug: 'optionals-basics-unwrapping-safely',
      moduleNumber: 7,
      lessonNumberInModule: 1,
      title: {
        en: '7.1 Optionals basics (?, !, unwrapping safely)',
        km: '៧.១ Optionals មូលដ្ឋាន (?, !, unwrapping safely)'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Optionals represent values that may be missing (`nil`). Avoid force unwrapping `!`; use nil-coalescing `??` or optional chaining `?.`.',
        km: 'Optionals តំណាងឱ្យតម្លៃដែលអាចអវត្តមាន (`nil`)។ ចៀសវាងការប្រើ Force unwrapping `!` គួរប្រើប្រាស់ `??` ឬ Optional chaining `?.`។'
      },
      tutorial: {
        en: 'var username: String? = nil\nprint("Greeting: Hello, \\(username ?? "Guest")!")',
        km: 'var username: String? = nil\nprint("ការស្វាគមន៍: សួស្តី, \\(username ?? "Guest")!")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>7.1 Nil-Coalescing</h3><p>Greeting: Hello, Guest!</p></body></html>`
      }
    },
    {
      id: 'sw-7-2',
      slug: 'if-let-and-guard-let-safe-unwrapping',
      moduleNumber: 7,
      lessonNumberInModule: 2,
      title: {
        en: '7.2 if let and guard let for safe unwrapping',
        km: '៧.២ if let និង guard let សម្រាប់ការ unwrapping ដោយសុវត្ថិភាព'
      },
      durationMinutes: 22,
      difficulty: 'Beginner',
      explanation: {
        en: 'Unwrap optionals safely into non-optional variables using `if let value = optional` or `guard let value = optional else { return }`.',
        km: 'អានតម្លៃ Optionals ទៅជាអថេរធម្មតាដោយសុវត្ថិភាពដោយប្រើប្រាស់ `if let value = optional` ឬ `guard let value = optional else { return }`។'
      },
      tutorial: {
        en: 'func printLength(_ text: String?) {\n    guard let validText = text else {\n        print("No text provided.")\n        return\n    }\n    print("Text length: \\(validText.count)")\n}\nprintLength("Swift")',
        km: 'func printLength(_ text: String?) {\n    guard let validText = text else {\n        print("គ្មានអត្ថបទ។")\n        return\n    }\n    print("ប្រវែងអត្ថបទ: \\(validText.count)")\n}\nprintLength("Swift")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>7.2 Guard Let</h3><p>Text length: 5</p></body></html>`
      }
    },
    {
      id: 'sw-7-3',
      slug: 'introduction-to-async-await-swift',
      moduleNumber: 7,
      lessonNumberInModule: 3,
      title: {
        en: '7.3 Introduction to async/await in Swift',
        km: '៧.៣ សេចក្តីផ្តើមនៃ async/await ក្នុង Swift'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Swift structured concurrency introduces `async` functions and suspended calls using `await Task.sleep(...)`.',
        km: 'ប្រព័ន្ធ Concurrency ក្នុង Swift ណែនាំ `async` functions និងការផ្អាកប្រត្តិបត្តិការដោយប្រើប្រាស់ `await Task.sleep(...)`។'
      },
      tutorial: {
        en: 'func fetchData() async -> String {\n    try? await Task.sleep(nanoseconds: 500_000_000)\n    return "Data loaded successfully"\n}\nTask {\n    let result = await fetchData()\n    print(result)\n}',
        km: 'func fetchData() async -> String {\n    try? await Task.sleep(nanoseconds: 500_000_000)\n    return "ទិន្នន័យត្រូវបានទាញយកជោគជ័យ"\n}\nTask {\n    let result = await fetchData()\n    print(result)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>7.3 Swift Async/Await</h3><p>Data loaded successfully</p></body></html>`
      }
    },
    {
      id: 'sw-7-4',
      slug: 'error-handling-with-do-try-catch',
      moduleNumber: 7,
      lessonNumberInModule: 4,
      title: {
        en: '7.4 Error handling with do/try/catch',
        km: '៧.៤ Error handling ជាមួយ do/try/catch'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Functions that throw errors are marked with `throws`. Handle them explicitly using `do { try ... } catch { ... }`.',
        km: 'Functions ដែលអាចកើតមាន Error ត្រូវដាក់សញ្ញា `throws`។ គ្រប់គ្រងវាដោយផ្ទាល់ដោយប្រើប្រាស់ `do { try ... } catch { ... }`។'
      },
      tutorial: {
        en: 'enum NetworkError: Error { case badURL }\nfunc loadPage(url: String) throws {\n    if url.isEmpty { throw NetworkError.badURL }\n    print("Page loaded")\n}\ndo {\n    try loadPage(url: "")\n} catch {\n    print("Error: \\(error)")\n}',
        km: 'enum NetworkError: Error { case badURL }\nfunc loadPage(url: String) throws {\n    if url.isEmpty { throw NetworkError.badURL }\n    print("Page loaded")\n}\ndo {\n    try loadPage(url: "")\n} catch {\n    print("Error: \\(error)")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f43f5e; padding:20px; font-family:monospace;"><h3>7.4 Do-Try-Catch</h3><p>Error: badURL</p></body></html>`
      }
    },
    {
      id: 'sw-7-5',
      slug: 'practice-simulate-network-call-async',
      moduleNumber: 7,
      lessonNumberInModule: 5,
      title: {
        en: '7.5 Practice: simulate a network call with an async function',
        km: '៧.៥ អនុវត្ត: កម្មវិធីក្លែងធ្វើ Network Call ជាមួយ Async Function'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Simulate API network delays, throwing errors, and successful data responses using structured Swift concurrency.',
        km: 'ក្លែងធ្វើការទាញយកទិន្នន័យពី API តាមរយៈពេលវេលារង់ចាំ (Delay), ការបោះ Error និងទិន្នន័យជោគជ័យ។'
      },
      tutorial: {
        en: 'struct HabitResponse {\n    let habits: [String]\n}\nfunc fetchHabitsAPI() async throws -> HabitResponse {\n    try await Task.sleep(nanoseconds: 300_000_000)\n    return HabitResponse(habits: ["Read", "Code"])\n}\nTask {\n    if let response = try? await fetchHabitsAPI() {\n        print("Fetched habits: \\(response.habits)")\n    }\n}',
        km: 'struct HabitResponse {\n    let habits: [String]\n}\nfunc fetchHabitsAPI() async throws -> HabitResponse {\n    try await Task.sleep(nanoseconds: 300_000_000)\n    return HabitResponse(habits: ["Read", "Code"])\n}\nTask {\n    if let response = try? await fetchHabitsAPI() {\n        print("ទិន្នន័យទទួលបាន: \\(response.habits)")\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>7.5 Async API Simulation</h3><p>Fetched habits: ["Read", "Code"]</p></body></html>`
      }
    },

    // MODULE 8
    {
      id: 'sw-8-1',
      slug: 'planning-the-cli-habit-tracker',
      moduleNumber: 8,
      lessonNumberInModule: 1,
      title: {
        en: '8.1 Planning the CLI Habit Tracker (data model, features)',
        km: '៨.១ រៀបចំផែនការ CLI Habit Tracker (Data model, features)'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Architect the Habit data struct, state array storage, menu switch logic, and streak modification methods for the capstone project.',
        km: 'រៀបចំរចនាសម្ព័ន្ធ Habit data struct, array storage, menu switch logic និង methods កែប្រែចំនួន Streak។'
      },
      tutorial: {
        en: 'struct Habit {\n    var id = UUID()\n    var name: String\n    var streak: Int = 0\n}',
        km: 'struct Habit {\n    var id = UUID()\n    var name: String\n    var streak: Int = 0\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#a855f7; padding:20px; font-family:monospace;"><h3>8.1 Capstone Architecture</h3><p>Struct Habit (name, streak)</p></body></html>`
      }
    },
    {
      id: 'sw-8-2',
      slug: 'building-the-cli-habit-tracker',
      moduleNumber: 8,
      lessonNumberInModule: 2,
      title: {
        en: '8.2 Building the CLI Habit Tracker (full guided build)',
        km: '៨.២ ការសាងសង់ CLI Habit Tracker (ការសរសេរកូដណែនាំពេញលេញ)'
      },
      durationMinutes: 30,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Assemble the final Swift CLI application with habit creation, streak increments, list rendering, and safe index deletion.',
        km: 'ប្រមូលផ្តុំកម្មវិធី Swift CLI ចុងក្រោយដែលរួមមានការបង្កើតទម្លាប់ បង្កើន Streak បង្ហាញបញ្ជី និងការលុបទិន្នន័យដោយសុវត្ថិភាព។'
      },
      tutorial: {
        en: 'var habits = [Habit(name: "Morning Run", streak: 3)]\nhabits[0].streak += 1\nprint("Updated streak: \\(habits[0].streak)")',
        km: 'var habits = [Habit(name: "Morning Run", streak: 3)]\nhabits[0].streak += 1\nprint("ចំនួន Streak ថ្មី: \\(habits[0].streak)")'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>8.2 Final Capstone Build</h3><p>Updated streak: 4 days!</p></body></html>`
      }
    }
  ]
};
