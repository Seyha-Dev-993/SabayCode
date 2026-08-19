import { MobileCourse } from './mobileCoursesHubData';

export const KOTLIN_COURSE_DATA: MobileCourse = {
  id: 'kotlin',
  title: {
    en: 'Kotlin Programming — Language Basics',
    km: 'ភាសា Kotlin មូលដ្ឋាន'
  },
  iconName: 'kotlin',
  type: 'language',
  categoryId: 'languages',
  difficulty: 'Beginner',
  shortDescription: {
    en: 'The official language of modern Android — learn it first, build real apps next.',
    km: 'ភាសាផ្លូវការសម្រាប់ Android សម័យទំនើប — រៀនវាមុន រួចទើបទៅកសាងកម្មវិធីពិតប្រាកដ។'
  },
  summary: {
    en: 'Kotlin is the language Google officially recommends for Android development. Learn variables, control flow, functions, OOP, data classes, null safety, and coroutines before moving to Jetpack Compose.',
    km: 'Kotlin ជាភាសាដែល Google ណែនាំជាផ្លូវការសម្រាប់ការសាងកម្មវិធី Android។ រៀន variables, control flow, functions, OOP, data classes, null safety និង coroutines មុននឹងចូលទៅដល់ Jetpack Compose។'
  },
  estimatedHours: 17,
  lessonCount: 32,
  usedFor: 'Native Android Apps, Jetpack Compose, Spring Boot Backends, Multiplatform (KMP), Wear OS',
  realWorldApps: ['Google Pay', 'Trello', 'Pinterest', 'Twitter/X', 'Uber', 'Coursera'],
  prerequisites: {
    en: 'None — true beginner course. No prior programming experience required.',
    km: 'មិនទាមទារបទពិសោធន៍សរសេរកូដពីមុនមកទេ។ គ្មានបទពិសោធន៍សរសេរកូដពីមុនក៏អាចរៀនបាន។'
  },
  whatYouWillLearn: {
    en: [
      'Set up Kotlin locally and in an online playground for quick practice',
      'Use variables (val/var), data types, and Kotlin\'s type inference',
      'Write control flow logic with if/else, when (Kotlin\'s switch), and loops',
      'Build functions, including default/named arguments and single-expression functions',
      'Work with Kotlin\'s core collections: List, Map, and Set',
      'Apply object-oriented programming: classes, data classes, inheritance, and interfaces',
      'Write null-safe code using Kotlin\'s built-in null safety operators',
      'Use coroutines and suspend functions for asynchronous work',
      'Read and understand real Kotlin code found in Android projects',
      'Build small standalone command-line programs as practice projects'
    ],
    km: [
      'ដំឡើង Kotlin លើកុំព្យូទ័រ និងប្រើប្រាស់ Online Playground សម្រាប់ការអនុវត្ត',
      'ប្រើប្រាស់ variables (val/var), data types, និង Kotlin type inference',
      'សរសេរលក្ខខណ្ឌ control flow ជាមួយ if/else, when (switch របស់ Kotlin), និង loops',
      'បង្កើត functions រួមទាំង default/named arguments និង single-expression functions',
      'ធ្វើការជាមួយប្រភេទទិន្នន័យ Collections: List, Map, និង Set',
      'អនុវត្តកម្មវិធី Object-Oriented Programming: classes, data classes, inheritance, និង interfaces',
      'សរសេរកូដមានសុវត្ថិភាព Null-safe ដោយប្រើ Null safety operators របស់ Kotlin',
      'ប្រើប្រាស់ coroutines និង suspend functions សម្រាប់ប្រត្តិបត្តិការ Asynchronous',
      'អាន និងយល់ដឹងពីកូដ Kotlin ពិតប្រាកដក្នុងគម្រោង Android',
      'សាងសង់កម្មវិធី Command-Line Standalone សម្រាប់អនុវត្តជាក់ស្តែង'
    ]
  },
  toolsAndSetup: {
    en: '1. Quick start: Kotlin Playground (play.kotlinlang.org)\n2. Full setup: IntelliJ IDEA Community Edition or Android Studio\n3. Verify: create a Kotlin file and run it\n4. Command line: `kotlinc hello.kt -include-runtime -d hello.jar` and `java -jar hello.jar`',
    km: '១. ប្រើប្រាស់រហ័ស: Kotlin Playground (play.kotlinlang.org)\n២. ដំឡើងពេញលេញ: IntelliJ IDEA Community Edition ឬ Android Studio\n៣. ពិនិត្យការដំឡើង: បង្កើត Kotlin file រួចចុច Run\n៤. តាម Terminal: `kotlinc hello.kt -include-runtime -d hello.jar` និង `java -jar hello.jar`'
  },
  cheatSheet: [
    {
      concept: 'Val vs Var & Null Safety',
      code: 'val name: String = "Seyha" // Immutable\nvar nickname: String? = null // Nullable\nprintln(nickname ?: "Guest") // Elvis operator',
      explanation: {
        en: '`val` is read-only. `?` permits null, `?:` provides a fallback value when null.',
        km: '`val` ជា Read-only។ `?` អនុញ្ញាតឱ្យស្មើ null ហើយ `?:` ផ្តល់តម្លៃជំនួសពេល null។'
      }
    },
    {
      concept: 'Data Class & Copy',
      code: 'data class Expense(val title: String, val amount: Double)\nval e1 = Expense("Coffee", 2.50)\nval e2 = e1.copy(amount = 3.00)',
      explanation: {
        en: 'Data classes automatically provide toString(), equals(), hashCode(), and copy().',
        km: 'Data class បង្កើត toString(), equals(), hashCode(), និង copy() ដោយស្វ័យប្រវត្តិ។'
      }
    },
    {
      concept: 'When Expression',
      code: 'val status = when (score) {\n  in 90..100 -> "Grade A"\n  in 80..89 -> "Grade B"\n  else -> "Keep trying"\n}',
      explanation: {
        en: '`when` replaces traditional switch statements and can return a value directly.',
        km: '`when` ជំនួស switch បុរាណ ហើយអាចប្រគល់តម្លៃ (return) ដោយផ្ទាល់។'
      }
    },
    {
      concept: 'Coroutines & Suspend',
      code: 'suspend fun fetchExpenses(): List<Expense> {\n  delay(1000) // Non-blocking delay\n  return listOf(Expense("Lunch", 5.0))\n}',
      explanation: {
        en: '`suspend` functions can pause and resume without blocking the main UI thread.',
        km: 'អនុគមន៍ `suspend` អាចផ្អាក និងរត់បន្តដោយមិនធ្វើឱ្យកកស្ទះ (Block) UI Thread ឡើយ។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-kt-1',
      question: {
        en: 'What keyword is used in Kotlin to declare a read-only (immutable) variable?',
        km: 'តើពាក្យគន្លឹះមួយណាប្រើសម្រាប់ប្រកាសអថេរមិនអាចផ្លាស់ប្តូរបាន (Read-only) ក្នុង Kotlin?'
      },
      options: [
        { id: '1', text: { en: 'val', km: 'val' }, isCorrect: true },
        { id: '2', text: { en: 'var', km: 'var' }, isCorrect: false },
        { id: '3', text: { en: 'const var', km: 'const var' }, isCorrect: false },
        { id: '4', text: { en: 'let', km: 'let' }, isCorrect: false }
      ],
      explanation: {
        en: '`val` declares read-only variables. Once assigned, their reference cannot be changed.',
        km: '`val` ប្រើប្រកាសអថេរ Read-only។ កាលណាបញ្ចូលតម្លៃរួច មិនអាចប្រែប្រួលបានទេ។'
      }
    },
    {
      id: 'q-kt-2',
      question: {
        en: 'What feature does Kotlin automatically generate for a `data class`?',
        km: 'តើមុខងារអ្វីខ្លះដែល Kotlin បង្កើតឱ្យស្វ័យប្រវត្តិសម្រាប់ `data class`?'
      },
      options: [
        { id: '1', text: { en: 'toString(), equals(), hashCode(), and copy()', km: 'toString(), equals(), hashCode(), និង copy()' }, isCorrect: true },
        { id: '2', text: { en: 'SQL Database tables', km: 'តារាងប្រព័ន្ធទិន្នន័យ SQL' }, isCorrect: false },
        { id: '3', text: { en: 'UI Layout XML files', km: 'ឯកសារ UI Layout XML' }, isCorrect: false }
      ],
      explanation: {
        en: 'Kotlin data classes auto-generate standard data utility methods including copy() and toString().',
        km: 'Data class ក្នុង Kotlin បង្កើត utility methods រួមមាន copy() និង toString() ដោយស្វ័យប្រវត្តិ។'
      }
    },
    {
      id: 'q-kt-3',
      question: {
        en: 'What does the Elvis operator `?:` do in Kotlin?',
        km: 'តើសញ្ញា Elvis operator `?:` មានតួនាទីអ្វីក្នុង Kotlin?'
      },
      options: [
        { id: '1', text: { en: 'Returns the right-hand value if the left-hand expression evaluates to null', km: 'ផ្តល់តម្លៃខាងស្តាំ ប្រសិនបើតម្លៃខាងឆ្វេងស្មើ null' }, isCorrect: true },
        { id: '2', text: { en: 'Forces a null value to throw an exception', km: 'បង្ខំឱ្យបោះ Exception ពេលស្មើ null' }, isCorrect: false },
        { id: '3', text: { en: 'Combines two strings together', km: 'ភ្ជាប់ string ពីរចូលគ្នា' }, isCorrect: false }
      ],
      explanation: {
        en: 'The Elvis operator `a ?: b` returns `a` if it is not null, otherwise it returns fallback `b`.',
        km: 'Elvis operator `a ?: b` ផ្តល់តម្លៃ `a` បើមិន null បើពុំនោះទេវាផ្តល់តម្លៃជំនួស `b`។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'CLI Expense Tracker',
      km: 'កម្មវិធី CLI Expense Tracker'
    },
    description: {
      en: 'A command-line app that lets a user add expenses (title, amount, category), view a running total, filter by category, and remove an entry — using Kotlin data classes, collections, and when expressions. This is the bridge project before starting Jetpack Compose.',
      km: 'កម្មវិធី Command-Line ដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់បន្ថែមចំណាយ (ចំណងជើង ចំនួនទឹកប្រាក់ ប្រភេទចំណាយ) មើលសរុប តម្រងតាមប្រភេទ និងលុបទិន្នន័យ — ដោយប្រើប្រាស់ Kotlin data classes, collections, និង when expressions។ នេះជាគម្រោងស្ពានចម្លងមុនចូលរៀន Jetpack Compose។'
    },
    featureChecklist: {
      en: [
        'Add a new expense (title, amount, category)',
        'List all expenses with clean formatting',
        'Show total spent, and total spent per category',
        'Remove an expense by index',
        'Simple text menu loop using a when expression that keeps running until Exit'
      ],
      km: [
        'បន្ថែមចំណាយថ្មី (ចំណងជើង ចំនួនទឹកប្រាក់ ប្រភេទចំណាយ)',
        'បង្ហាញបញ្ជីចំណាយទាំងអស់ជាមួយទម្រង់ស្អាតបាត',
        'បង្ហាញសរុបថវិកាចំណាយ និងសរុបតាមប្រភេទនីមួយៗ',
        'លុបទិន្នន័យចំណាយតាមរយៈ Index',
        'រង្វង់ Menu អត្ថបទដែលប្រើ when expression រត់រហូតដល់ជ្រើសរើស ចេញ (Exit)'
      ]
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body style="background:#090d16; color:#f8fafc; font-family: monospace; padding:20px; line-height:1.6;">
  <h2 style="color:#a855f7; margin-top:0;">📊 CLI Expense Tracker Demo</h2>
  <div style="background:#0f172a; padding:16px; border-radius:12px; border:1px solid #1e293b;">
    <p style="color:#38bdf8;">=== EXPENSE TRACKER MENU ===</p>
    <p>1. Add Expense</p>
    <p>2. View All Expenses</p>
    <p>3. Summary by Category</p>
    <p>4. Remove Expense</p>
    <p>5. Exit</p>
    <hr style="border-color:#1e293b; margin:15px 0;">
    <p style="color:#4ade80;">💵 [1] Coffee - $3.50 (Food)</p>
    <p style="color:#4ade80;">💵 [2] Bus Ticket - $1.20 (Transport)</p>
    <p style="color:#f43f5e; font-weight:bold;">🎯 Total Spent: $4.70</p>
  </div>
</body>
</html>`
    },
    finalCode: `data class Expense(val title: String, val amount: Double, val category: String)

fun main() {
    val expenses = mutableListOf(
        Expense("Morning Coffee", 3.50, "Food"),
        Expense("Bus Pass", 12.00, "Transport"),
        Expense("Kotlin Book", 25.00, "Education")
    )

    println("=== EXPENSE TRACKER SUMMARY ===")
    expenses.forEachIndexed { index, exp ->
        println("\${index + 1}. \${exp.title} - $\${exp.amount} [\${exp.category}]")
    }

    val total = expenses.sumOf { it.amount }
    println("------------------------------")
    println("Total Spent: $\${"%.2f".format(total)}")
}`
  },
  lessons: [
    // MODULE 1
    {
      id: 'kt-1-1',
      slug: 'what-is-kotlin-and-why-android-uses-it',
      moduleNumber: 1,
      lessonNumberInModule: 1,
      title: {
        en: '1.1 What is Kotlin and why Android uses it',
        km: '១.១ អ្វីទៅជា Kotlin ហើយហេតុអ្វី Android ប្រើប្រាស់វា'
      },
      durationMinutes: 12,
      difficulty: 'Beginner',
      explanation: {
        en: 'Kotlin is a modern programming language developed by JetBrains and officially recommended by Google for Android development. It runs on the JVM, reduces boilerplate code, and integrates null safety directly into the language syntax.',
        km: 'Kotlin ជាភាសាសរសេរកម្មវិធីទំនើប បង្កើតឡើងដោយ JetBrains និងទទួលបានការណែនាំជាផ្លូវការពី Google សម្រាប់ Android។ វារត់លើ JVM កាត់បន្ថយកូដដដែលៗ និងមាន Null Safety ភ្ជាប់ក្នុងភាសាស្រាប់។'
      },
      tutorial: {
        en: 'fun main() {\n    println("Hello, Kotlin!");\n}',
        km: 'fun main() {\n    println("សួស្តី ភាសា Kotlin!");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>1.1 Hello Kotlin!</h3><pre>fun main() {\n    println('Hello, Kotlin!');\n}</pre></body></html>`
      }
    },
    {
      id: 'kt-1-2',
      slug: 'installing-kotlin-and-setting-up-environment',
      moduleNumber: 1,
      lessonNumberInModule: 2,
      title: {
        en: '1.2 Installing Kotlin and setting up your environment',
        km: '១.២ ការដំឡើង Kotlin និងរៀបចំ Environment'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Learn how to use Kotlin Playground in your browser for zero-setup coding, or set up Android Studio / IntelliJ IDEA on your computer.',
        km: 'រៀនប្រើប្រាស់ Kotlin Playground លើ Web Browser ដោយមិនបាច់ដំឡើង ឬដំឡើង Android Studio / IntelliJ IDEA លើកុំព្យូទ័ររបស់អ្នក។'
      },
      tutorial: {
        en: '// In Kotlin Playground or IntelliJ:\n// fun main() { println("Environment ready!") }',
        km: '// ក្នុង Kotlin Playground ឬ IntelliJ:\n// fun main() { println("Environment រួចរាល់!") }'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#4ade80; padding:20px; font-family:monospace;"><h3>1.2 Setup Environment</h3><p>Open play.kotlinlang.org or IntelliJ IDEA.</p></body></html>`
      }
    },
    {
      id: 'kt-1-3',
      slug: 'your-first-program-hello-kotlin',
      moduleNumber: 1,
      lessonNumberInModule: 3,
      title: {
        en: '1.3 Your first program — "Hello, Kotlin!"',
        km: '១.៣ កម្មវិធីដំបូងរបស់អ្នក — "Hello, Kotlin!"'
      },
      durationMinutes: 13,
      difficulty: 'Beginner',
      explanation: {
        en: 'Every Kotlin program starts in fun main(). Use string templates ($variable) to easily output formatting and variable values.',
        km: 'កម្មវិធី Kotlin ទាំងអស់ចាប់ផ្តើមរត់ក្នុង fun main()។ ប្រើ string templates ($variable) ដើម្បីបង្ហាញតម្លៃអថេរយ៉ាងងាយស្រួល។'
      },
      tutorial: {
        en: 'fun main() {\n    val name = "Seyha"\n    val age = 25\n    println("Hello, my name is $name and I am $age years old.")\n}',
        km: 'fun main() {\n    val name = "សីហា"\n    val age = 25\n    println("សួស្តី ខ្ញុំឈ្មោះ $name ហើយខ្ញុំអាយុ $age ឆ្នាំ។")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>1.3 First Program Output</h3><p style="color:#a855f7;">Hello, my name is Seyha and I am 25 years old.</p></body></html>`
      }
    },

    // MODULE 2
    {
      id: 'kt-2-1',
      slug: 'variables-val-vs-var-and-type-inference',
      moduleNumber: 2,
      lessonNumberInModule: 1,
      title: {
        en: '2.1 Variables: val vs var, and type inference',
        km: '២.១ អថេរ: val ប៉ះ var និង Type inference'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Prefer `val` (read-only) by default for immutability and thread safety. Use `var` only when the value must change over time.',
        km: 'ជ្រើសរើស `val` (Read-only) ជាជម្រើសដើមដើម្បីសុវត្ថិភាពទិន្នន័យ។ ប្រើ `var` លុះត្រាតើតម្លៃត្រូវផ្លាស់ប្តូរជាបន្តបន្ទាប់។'
      },
      tutorial: {
        en: 'fun main() {\n    val city = "Phnom Penh" // read-only\n    var score = 100 // mutable\n    score += 50\n    println("$city score: $score")\n}',
        km: 'fun main() {\n    val city = "ភ្នំពេញ"\n    var score = 100\n    score += 50\n    println("$city score: $score")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>2.1 Val vs Var</h3><p>val: Immutable<br>var: Mutable (score = 150)</p></body></html>`
      }
    },
    {
      id: 'kt-2-2',
      slug: 'data-types-int-double-string-boolean',
      moduleNumber: 2,
      lessonNumberInModule: 2,
      title: {
        en: '2.2 Data types (Int, Double, String, Boolean)',
        km: '២.២ ប្រភេទទិន្នន័យ (Int, Double, String, Boolean)'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Kotlin primitive-like types (Int, Double, Float, Long, String, Boolean) are all objects under the hood with helpful conversion methods.',
        km: 'ប្រភេទទិន្នន័យក្នុង Kotlin (Int, Double, Float, Long, String, Boolean) សុទ្ធសឹងជា Objects ដែលមាន Conversion methods ស្រាប់។'
      },
      tutorial: {
        en: 'fun main() {\n    val count: Int = 42\n    val price: Double = 19.99\n    val label: String = "Kotlin Course"\n    val isActive: Boolean = true\n    println("$label: $$price ($count items) - Active: $isActive")\n}',
        km: 'fun main() {\n    val count: Int = 42\n    val price: Double = 19.99\n    val label: String = "Kotlin Course"\n    val isActive: Boolean = true\n    println("$label: $$price ($count items) - Active: $isActive")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>2.2 Data Types</h3><p>Int: 42 | Double: 19.99 | Boolean: true</p></body></html>`
      }
    },
    {
      id: 'kt-2-3',
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
        en: 'Standard operators in Kotlin: arithmetic (+, -, *, /, %), comparison (==, !=, >, <), and logical (&&, ||, !). Structural equality `==` checks content.',
        km: 'ប្រមាណវិធីក្នុង Kotlin: គណនា (+, -, *, /, %), ប្រៀបធៀប (==, !=, >, <) និង តក្កវិទ្យា (&&, ||, !)។ `==` ផ្ទៀងផ្ទាត់ខ្លឹមសារខាងក្នុង។'
      },
      tutorial: {
        en: 'fun main() {\n    val x = 20\n    val y = 6\n    println("Quotient: ${x / y}")\n    println("Remainder: ${x % y}")\n}',
        km: 'fun main() {\n    val x = 20\n    val y = 6\n    println("ផលចែក: ${x / y}")\n    println("សំណល់: ${x % y}")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#eab308; padding:20px; font-family:monospace;"><h3>2.3 Operators</h3><p>20 / 6 = 3 | 20 % 6 = 2</p></body></html>`
      }
    },
    {
      id: 'kt-2-4',
      slug: 'string-templates-and-formatting',
      moduleNumber: 2,
      lessonNumberInModule: 4,
      title: {
        en: '2.4 String templates and formatting',
        km: '២.៤ String Templates និង Formatting'
      },
      durationMinutes: 14,
      difficulty: 'Beginner',
      explanation: {
        en: 'In Kotlin, string templates allow evaluation of expressions directly inside raw strings using `${expression}` and multiline `"""..."""`.',
        km: 'ក្នុង Kotlin, String templates អនុញ្ញាតឱ្យគណនាកន្សោមដោយផ្ទាល់ក្នុងអត្ថបទតាមរយៈ `${expression}` និង multiline `"""..."""`។'
      },
      tutorial: {
        en: 'fun main() {\n    val item = "Laptop"\n    val price = 999.99\n    println("""\n        PRODUCT DETAILS\n        Name: $item\n        Tax (10%): $${"%.2f".format(price * 0.10)}\n    """.trimIndent())\n}',
        km: 'fun main() {\n    val item = "Laptop"\n    val price = 999.99\n    println("""\n        PRODUCT DETAILS\n        Name: $item\n        Tax (10%): $${"%.2f".format(price * 0.10)}\n    """.trimIndent())\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>2.4 String Formatting</h3><p>Tax (10%): $100.00</p></body></html>`
      }
    },
    {
      id: 'kt-2-5',
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
        en: 'Combine variables, operations, and string formatting to create a console calculator script in Kotlin.',
        km: 'បូកបញ្ចូនអថេរ ប្រមាណវិធី និងការ Format ដើម្បីសាងសង់ Script គណនាលេខក្នុង Kotlin Console។'
      },
      tutorial: {
        en: 'fun main() {\n    val num1 = 50.0\n    val num2 = 12.5\n    println("Add: ${num1 + num2}")\n    println("Divide: ${num1 / num2}")\n}',
        km: 'fun main() {\n    val num1 = 50.0\n    val num2 = 12.5\n    println("បូក: ${num1 + num2}")\n    println("ចែក: ${num1 / num2}")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#4ade80; padding:20px; font-family:monospace;"><h3>2.5 Calculator</h3><p>50 + 12.5 = 62.5<br>50 / 12.5 = 4.0</p></body></html>`
      }
    },

    // MODULE 3
    {
      id: 'kt-3-1',
      slug: 'if-else-as-expressions',
      moduleNumber: 3,
      lessonNumberInModule: 1,
      title: {
        en: '3.1 if / else as expressions',
        km: '៣.១ if / else ជា expressions'
      },
      durationMinutes: 16,
      difficulty: 'Beginner',
      explanation: {
        en: 'In Kotlin, `if` is an expression that returns a value directly, replacing the traditional ternary operator (`a ? b : c`).',
        km: 'ក្នុង Kotlin, `if` ជា Expression ដែលប្រគល់តម្លៃមកវិញដោយផ្ទាល់ ជំនួស Ternary operator បុរាណ។'
      },
      tutorial: {
        en: 'fun main() {\n    val age = 20\n    val status = if (age >= 18) "Adult" else "Minor"\n    println("Status: $status")\n}',
        km: 'fun main() {\n    val age = 20\n    val status = if (age >= 18) "មនុស្សពេញវ័យ" else "អនីតិជន"\n    println("ស្ថានភាព: $status")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>3.1 If Expression</h3><p>Status: Adult</p></body></html>`
      }
    },
    {
      id: 'kt-3-2',
      slug: 'when-expressions',
      moduleNumber: 3,
      lessonNumberInModule: 2,
      title: {
        en: '3.2 when expressions (Kotlin\'s powerful switch)',
        km: '៣.២ when expressions (Switch ដ៏មានឥទ្ធិពលក្នុង Kotlin)'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: '`when` replaces switch statements and supports range checks (`in 1..10`), type checks (`is String`), and expression assignments.',
        km: '`when` ជំនួស switch statement និងទ្រទ្រង់ការពិនិត្យចន្លោះលេខ (`in 1..10`), ប្រភេទទិន្នន័យ (`is String`) និងការប្រគល់តម្លៃ។'
      },
      tutorial: {
        en: 'fun main() {\n    val score = 88\n    val grade = when (score) {\n        in 90..100 -> "A"\n        in 80..89 -> "B"\n        in 70..79 -> "C"\n        else -> "F"\n    }\n    println("Grade: $grade")\n}',
        km: 'fun main() {\n    val score = 88\n    val grade = when (score) {\n        in 90..100 -> "A"\n        in 80..89 -> "B"\n        in 70..79 -> "C"\n        else -> "F"\n    }\n    println("និទ្ទេស: $grade")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>3.2 When Expression</h3><p>Score 88: Grade B</p></body></html>`
      }
    },
    {
      id: 'kt-3-3',
      slug: 'for-while-loops-and-ranges',
      moduleNumber: 3,
      lessonNumberInModule: 3,
      title: {
        en: '3.3 for, while loops and ranges (1..10)',
        km: '៣.៣ for, while loops និង Ranges (1..10)'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Kotlin loops iterate seamlessly over range expressions like `1..5`, `1 until 5`, `10 downTo 1 step 2`, and collection iterators.',
        km: 'រង្វង់ Loop ក្នុង Kotlin ដំណើរការយ៉ាងរលូនលើ Range expresiones ដូចជា `1..5`, `1 until 5`, `10 downTo 1 step 2` និង Collections។'
      },
      tutorial: {
        en: 'fun main() {\n    for (i in 1..5) {\n        println("Step $i")\n    }\n}',
        km: 'fun main() {\n    for (i in 1..5) {\n        println("ជំហាន $i")\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>3.3 Kotlin Ranges</h3><p>Step 1<br>Step 2<br>Step 3<br>Step 4<br>Step 5</p></body></html>`
      }
    },
    {
      id: 'kt-3-4',
      slug: 'practice-fizzbuzz-in-kotlin',
      moduleNumber: 3,
      lessonNumberInModule: 4,
      title: {
        en: '3.4 Practice: FizzBuzz in Kotlin using when',
        km: '៣.៤ អនុវត្ត: FizzBuzz ក្នុង Kotlin ដោយប្រើ when'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Implement the classic FizzBuzz challenge utilizing Kotlin range iteration and clean `when` expressions without nested ifs.',
        km: 'អនុវត្តលំហាត់ FizzBuzz ដោយប្រើប្រាស់ Range iteration និង `when` expression ដ៏ស្អាតបាតក្នុង Kotlin។'
      },
      tutorial: {
        en: 'fun main() {\n    for (i in 1..15) {\n        val result = when {\n            i % 15 == 0 -> "FizzBuzz"\n            i % 3 == 0 -> "Fizz"\n            i % 5 == 0 -> "Buzz"\n            else -> "$i"\n        }\n        println(result)\n    }\n}',
        km: 'fun main() {\n    for (i in 1..15) {\n        val result = when {\n            i % 15 == 0 -> "FizzBuzz"\n            i % 3 == 0 -> "Fizz"\n            i % 5 == 0 -> "Buzz"\n            else -> "$i"\n        }\n        println(result)\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#f43f5e; padding:20px; font-family:monospace;"><h3>3.4 FizzBuzz When</h3><p>1, 2, Fizz, 4, Buzz, ..., 15: FizzBuzz</p></body></html>`
      }
    },

    // MODULE 4
    {
      id: 'kt-4-1',
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
        en: 'Functions are declared with `fun`. Return types follow the parameter list, or default to `Unit` (equivalent to void in other languages).',
        km: 'Functions ត្រូវប្រកាសដោយប្រើ `fun`។ Return type ស្ថិតនៅបន្ទាប់ពី parameters ឬស្មើ `Unit` (ស្មើ void ក្នុងភាសាផ្សេង)។'
      },
      tutorial: {
        en: 'fun calculateTotal(price: Double, quantity: Int): Double {\n    return price * quantity\n}\n\nfun main() {\n    println("Total: $${calculateTotal(15.0, 3)}")\n}',
        km: 'fun calculateTotal(price: Double, quantity: Int): Double {\n    return price * quantity\n}\n\nfun main() {\n    println("សរុប: $${calculateTotal(15.0, 3)}")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.1 Kotlin Functions</h3><p>Total: $45.0</p></body></html>`
      }
    },
    {
      id: 'kt-4-2',
      slug: 'default-and-named-arguments',
      moduleNumber: 4,
      lessonNumberInModule: 2,
      title: {
        en: '4.2 Default and named arguments',
        km: '៤.២ Default និង Named arguments'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Default arguments eliminate method overloading bloat. Named arguments improve code readability and allow passing parameters in any order.',
        km: 'Default arguments កាត់បន្ថយការសរសេរ Overloading method។ Named arguments បង្កើនភាពងាយស្រួលអាន និងអនុញ្ញាតឱ្យបញ្ជូនតាមលំដាប់ណាជួរបាន។'
      },
      tutorial: {
        en: 'fun createButton(text: String, isPrimary: Boolean = true, width: Int = 120) {\n    println("Button: $text [Primary: $isPrimary, Width: ${width}px]")\n}\n\nfun main() {\n    createButton("Submit")\n    createButton("Cancel", isPrimary = false, width = 80)\n}',
        km: 'fun createButton(text: String, isPrimary: Boolean = true, width: Int = 120) {\n    println("Button: $text [Primary: $isPrimary, Width: ${width}px]")\n}\n\nfun main() {\n    createButton("Submit")\n    createButton("Cancel", isPrimary = false, width = 80)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>4.2 Named Arguments</h3><p>Button: Submit [Primary: true, Width: 120px]</p></body></html>`
      }
    },
    {
      id: 'kt-4-3',
      slug: 'single-expression-functions-and-lambdas',
      moduleNumber: 4,
      lessonNumberInModule: 3,
      title: {
        en: '4.3 Single-expression functions and lambdas',
        km: '៤.៣ Single-expression functions និង Lambdas'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'When a function returns a single expression, omit curly braces `{}` and specify `= expression`. Lambdas allow passing functions as arguments.',
        km: 'កាលណា function ប្រគល់ត្រឹម expression មួយ លុបសញ្ញា `{}` ហើយប្រើ `= expression`។ Lambdas អនុញ្ញាតឱ្យបញ្ជូន function ជា argument។'
      },
      tutorial: {
        en: 'fun square(x: Int): Int = x * x\n\nfun main() {\n    val nums = listOf(1, 2, 3)\n    val doubled = nums.map { it * 2 }\n    println("Doubled: $doubled | Square of 4: ${square(4)}")\n}',
        km: 'fun square(x: Int): Int = x * x\n\nfun main() {\n    val nums = listOf(1, 2, 3)\n    val doubled = nums.map { it * 2 }\n    println("Doubled: $doubled | Square of 4: ${square(4)}")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#4ade80; padding:20px; font-family:monospace;"><h3>4.3 Single-Expression</h3><p>Doubled: [2, 4, 6] | Square: 16</p></body></html>`
      }
    },
    {
      id: 'kt-4-4',
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
        en: 'Build practical utility helpers such as currency formatters, email validators, and string sanitizers using concise Kotlin function syntax.',
        km: 'បង្កើត Helper utilities ដូចជា currency formatters, email validators, និង string sanitizers ដោយប្រើប្រាស់ Kotlin function syntax។'
      },
      tutorial: {
        en: 'fun formatCurrency(amount: Double, symbol: String = "$"): String =\n    "$symbol${"%.2f".format(amount)}"\n\nfun main() {\n    println(formatCurrency(29.95))\n}',
        km: 'fun formatCurrency(amount: Double, symbol: String = "$"): String =\n    "$symbol${"%.2f".format(amount)}"\n\nfun main() {\n    println(formatCurrency(29.95))\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.4 Utilities</h3><p>$29.95</p></body></html>`
      }
    },

    // MODULE 5
    {
      id: 'kt-5-1',
      slug: 'list-creating-looping-common-functions',
      moduleNumber: 5,
      lessonNumberInModule: 1,
      title: {
        en: '5.1 List — creating, looping, common functions (map, filter)',
        km: '៥.១ List — ការបង្កើត ការទាញប្រើ និង Functions (map, filter)'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Kotlin distinguishes between read-only `listOf()` and mutable `mutableListOf()`. Master functional collection operations like `.map()`, `.filter()`, and `.sumOf()`.',
        km: 'Kotlin បែងចែករវាង `listOf()` (Read-only) និង `mutableListOf()` (កែប្រែបាន)។ រៀនប្រើប្រាស់ `.map()`, `.filter()`, និង `.sumOf()`។'
      },
      tutorial: {
        en: 'fun main() {\n    val items = listOf("Coffee", "Tea", "Water")\n    val filtered = items.filter { it.startsWith("T") }\n    println(filtered)\n}',
        km: 'fun main() {\n    val items = listOf("Coffee", "Tea", "Water")\n    val filtered = items.filter { it.startsWith("T") }\n    println(filtered)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>5.1 Kotlin List</h3><p>[Tea]</p></body></html>`
      }
    },
    {
      id: 'kt-5-2',
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
        en: 'Store associations with `mapOf("key" to value)`. Use `mutableMapOf()` when key/value pairs need to be added or modified at runtime.',
        km: 'រក្សាទុកទិន្នន័យភ្ជាប់គ្នាដោយ `mapOf("key" to value)`។ ប្រើ `mutableMapOf()` ពេលត្រូវការបន្ថែម ឬកែប្រែទិន្នន័យពេល runtime។'
      },
      tutorial: {
        en: 'fun main() {\n    val user = mapOf("name" to "Seyha", "role" to "Developer")\n    println("Name: ${user["name"]}")\n}',
        km: 'fun main() {\n    val user = mapOf("name" to "Seyha", "role" to "Developer")\n    println("ឈ្មោះ: ${user["name"]}")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>5.2 Kotlin Map</h3><p>Name: Seyha</p></body></html>`
      }
    },
    {
      id: 'kt-5-3',
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
        en: '`setOf()` and `mutableSetOf()` store unique items. Adding a duplicate item is ignored without throwing errors.',
        km: '`setOf()` និង `mutableSetOf()` រក្សាទុកទិន្នន័យមិនជាន់គ្នា។ ការបន្ថែមធាតុស្ទួនត្រូវបានរំលងដោយស្វ័យប្រវត្តិ។'
      },
      tutorial: {
        en: 'fun main() {\n    val tags = setOf("android", "kotlin", "android")\n    println(tags) // [android, kotlin]\n}',
        km: 'fun main() {\n    val tags = setOf("android", "kotlin", "android")\n    println(tags) // [android, kotlin]\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#eab308; padding:20px; font-family:monospace;"><h3>5.3 Kotlin Set</h3><p>[android, kotlin]</p></body></html>`
      }
    },
    {
      id: 'kt-5-4',
      slug: 'practice-word-frequency-counter-kotlin',
      moduleNumber: 5,
      lessonNumberInModule: 4,
      title: {
        en: '5.4 Practice: word frequency counter using collection functions',
        km: '៥.៤ អនុវត្ត: កម្មវិធីរាប់ពាក្យស្ទួនដោយប្រើ Collection functions'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Utilize Kotlin functional methods like `.groupingBy { it }.eachCount()` to effortlessly count frequency occurrences in string sequences.',
        km: 'ប្រើប្រាស់ Kotlin functional methods ដូចជា `.groupingBy { it }.eachCount()` ដើម្បីរាប់ចំនួនពាក្យដែលស្ទួនយ៉ាងងាយស្រួល។'
      },
      tutorial: {
        en: 'fun main() {\n    val text = "kotlin android kotlin compose android"\n    val counts = text.split(" ").groupingBy { it }.eachCount()\n    println(counts)\n}',
        km: 'fun main() {\n    val text = "kotlin android kotlin compose android"\n    val counts = text.split(" ").groupingBy { it }.eachCount()\n    println(counts)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#4ade80; padding:20px; font-family:monospace;"><h3>5.4 Collection Grouping</h3><p>{kotlin=2, android=2, compose=1}</p></body></html>`
      }
    },

    // MODULE 6
    {
      id: 'kt-6-1',
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
        en: 'Kotlin primary constructors are defined directly in the class header. Secondary constructors and `init` blocks handle custom initialization.',
        km: 'Primary constructor ក្នុង Kotlin ប្រកាសដោយផ្ទាល់ក្នុង Class header។ Secondary constructors និង `init` block គ្រប់គ្រងការកំណត់ដំបូង។'
      },
      tutorial: {
        en: 'class User(val name: String, var age: Int) {\n    init {\n        println("User $name initialized.")\n    }\n}\n\nfun main() {\n    val u = User("Dara", 22)\n}',
        km: 'class User(val name: String, var age: Int) {\n    init {\n        println("User $name initialized.")\n    }\n}\n\nfun main() {\n    val u = User("ដារ៉ា", 22)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.1 Kotlin Class</h3><p>User Dara initialized.</p></body></html>`
      }
    },
    {
      id: 'kt-6-2',
      slug: 'data-classes',
      moduleNumber: 6,
      lessonNumberInModule: 2,
      title: {
        en: '6.2 Data classes (Kotlin\'s concise data-holder classes)',
        km: '៦.២ Data classes (Class ផ្ទុកទិន្នន័យដ៏ខ្លីខ្លឹមក្នុង Kotlin)'
      },
      durationMinutes: 22,
      difficulty: 'Beginner',
      explanation: {
        en: 'Marking a class as `data class` automatically generates `toString()`, `equals()`, `hashCode()`, `copy()`, and component functions.',
        km: 'ការដាក់សញ្ញា `data class` បង្កើត `toString()`, `equals()`, `hashCode()`, `copy()` ដោយស្វ័យប្រវត្តិ។'
      },
      tutorial: {
        en: 'data class Expense(val title: String, val amount: Double, val category: String)\n\nfun main() {\n    val e1 = Expense("Coffee", 2.50, "Food")\n    val e2 = e1.copy(amount = 3.00)\n    println(e2)\n}',
        km: 'data class Expense(val title: String, val amount: Double, val category: String)\n\nfun main() {\n    val e1 = Expense("Coffee", 2.50, "Food")\n    val e2 = e1.copy(amount = 3.00)\n    println(e2)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>6.2 Data Class</h3><p>Expense(title=Coffee, amount=3.0, category=Food)</p></body></html>`
      }
    },
    {
      id: 'kt-6-3',
      slug: 'inheritance-and-open-override',
      moduleNumber: 6,
      lessonNumberInModule: 3,
      title: {
        en: '6.3 Inheritance and open/override',
        km: '៦.៣ Inheritance និង open/override'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'In Kotlin, classes and methods are `final` by default. Mark classes and functions with `open` to allow inheritance and overrides.',
        km: 'ក្នុង Kotlin, Classes និង Methods ស្មើ `final` ដោយស្វ័យប្រវត្តិ។ ត្រូវដាក់សញ្ញា `open` ប្រសិនបើចង់អនុញ្ញាតឱ្យ Inheritance និង Override។'
      },
      tutorial: {
        en: 'open class Animal(val name: String) {\n    open fun makeSound() = println("Animal sound")\n}\nclass Dog(name: String) : Animal(name) {\n    override fun makeSound() = println("$name barks!")\n}\n\nfun main() {\n    Dog("Buddy").makeSound()\n}',
        km: 'open class Animal(val name: String) {\n    open fun makeSound() = println("Animal sound")\n}\nclass Dog(name: String) : Animal(name) {\n    override fun makeSound() = println("$name barks!")\n}\n\nfun main() {\n    Dog("Buddy").makeSound()\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.3 Inheritance</h3><p>Buddy barks!</p></body></html>`
      }
    },
    {
      id: 'kt-6-4',
      slug: 'interfaces-and-abstract-classes',
      moduleNumber: 6,
      lessonNumberInModule: 4,
      title: {
        en: '6.4 Interfaces and abstract classes',
        km: '៦.៤ Interfaces និង abstract classes'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Kotlin interfaces can contain default method implementations as well as abstract properties that conforming classes must supply.',
        km: 'Kotlin interfaces អាចមាន default method implementation ព្រមទាំង abstract properties ដែល Class អនុវត្តត្រូវតែបំពេញ។'
      },
      tutorial: {
        en: 'interface Printable {\n    fun printInfo()\n}\nclass Ticket(val id: String) : Printable {\n    override fun printInfo() = println("Ticket ID: $id")\n}\n\nfun main() {\n    Ticket("T-101").printInfo()\n}',
        km: 'interface Printable {\n    fun printInfo()\n}\nclass Ticket(val id: String) : Printable {\n    override fun printInfo() = println("Ticket ID: $id")\n}\n\nfun main() {\n    Ticket("T-101").printInfo()\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#eab308; padding:20px; font-family:monospace;"><h3>6.4 Interface</h3><p>Ticket ID: T-101</p></body></html>`
      }
    },
    {
      id: 'kt-6-5',
      slug: 'practice-build-class-hierarchy',
      moduleNumber: 6,
      lessonNumberInModule: 5,
      title: {
        en: '6.5 Practice: build a class hierarchy (Shape → Circle/Square)',
        km: '៦.៥ អនុវត្ត: បង្កើត Class hierarchy (Shape → Circle/Square)'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Design an object hierarchy for geometric shapes using abstract classes, area calculations, and polymorphic collections.',
        km: 'រចនា Class hierarchy សម្រាប់រូបរាងធរណីមាត្រដោយប្រើប្រាស់ Abstract classes, ការគណនាផ្ទៃ និង Polymorphic collections។'
      },
      tutorial: {
        en: 'abstract class Shape {\n    abstract fun area(): Double\n}\nclass Circle(val radius: Double) : Shape() {\n    override fun area() = Math.PI * radius * radius\n}\n\nfun main() {\n    val c = Circle(5.0)\n    println("Area: ${"%.2f".format(c.area())}")\n}',
        km: 'abstract class Shape {\n    abstract fun area(): Double\n}\nclass Circle(val radius: Double) : Shape() {\n    override fun area() = Math.PI * radius * radius\n}\n\nfun main() {\n    val c = Circle(5.0)\n    println("Area: ${"%.2f".format(c.area())}")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#4ade80; padding:20px; font-family:monospace;"><h3>6.5 Shape Hierarchy</h3><p>Circle Area: 78.54</p></body></html>`
      }
    },

    // MODULE 7
    {
      id: 'kt-7-1',
      slug: 'null-safety-basics-kotlin',
      moduleNumber: 7,
      lessonNumberInModule: 1,
      title: {
        en: '7.1 Null safety basics (?, ?:, !!, safe calls ?.)',
        km: '៧.១ មូលដ្ឋានគ្រឹះ Null safety (?, ?:, !!, safe calls ?.)'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Kotlin avoids NullPointerException bugs by distinguishing nullable type `T?` from non-null type `T`. Use safe call `?.`, Elvis operator `?:`, and non-null assertion `!!`.',
        km: 'Kotlin ទប់ស្កាត់ NullPointerException ដោយបែងចែក `T?` និង `T`។ ប្រើ Safe call `?.`, Elvis operator `?:`, និង Non-null assertion `!!`។'
      },
      tutorial: {
        en: 'fun main() {\n    val name: String = "Seyha"\n    var nickname: String? = null\n    println(name)\n    println(nickname ?: "No nickname set")\n    println(nickname?.length ?: 0)\n}',
        km: 'fun main() {\n    val name: String = "Seyha"\n    var nickname: String? = null\n    println(name)\n    println(nickname ?: "មិនទាន់មាន Nickname")\n    println(nickname?.length ?: 0)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>7.1 Null Safety</h3><p>No nickname set<br>Length: 0</p></body></html>`
      }
    },
    {
      id: 'kt-7-2',
      slug: 'handling-nullable-values-safely',
      moduleNumber: 7,
      lessonNumberInModule: 2,
      title: {
        en: '7.2 Handling nullable values safely (let, run, filterNotNull)',
        km: '៧.២ ការគ្រប់គ្រងតម្លៃ Nullable ដោយសុវត្ថិភាព (let, run, filterNotNull)'
      },
      durationMinutes: 18,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Combine nullable variables with scope functions like `nickname?.let { print(it) }` or collection helpers like `.filterNotNull()`.',
        km: 'ប្រើប្រាស់ Nullable variables ជាមួយ Scope functions ដូចជា `nickname?.let { print(it) }` ឬ `.filterNotNull()`។'
      },
      tutorial: {
        en: 'fun main() {\n    val list: List<String?> = listOf("A", null, "B")\n    val valid = list.filterNotNull()\n    println(valid)\n}',
        km: 'fun main() {\n    val list: List<String?> = listOf("A", null, "B")\n    val valid = list.filterNotNull()\n    println(valid)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#38bdf8; padding:20px; font-family:monospace;"><h3>7.2 Scope Functions</h3><p>[A, B]</p></body></html>`
      }
    },
    {
      id: 'kt-7-3',
      slug: 'introduction-to-coroutines-and-suspend',
      moduleNumber: 7,
      lessonNumberInModule: 3,
      title: {
        en: '7.3 Introduction to coroutines and suspend functions',
        km: '៧.៣ សេចក្តីផ្តើមអំពី Coroutines និង suspend functions'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Coroutines provide lightweight, non-blocking asynchronous execution. `suspend` functions can pause execution without freezing the main thread.',
        km: 'Coroutines ផ្តល់ការប្រត្តិបត្តិការ Asynchronous មិនទាក់ទើ (Non-blocking)។ អនុគមន៍ `suspend` អាចផ្អាកដំណើរការដោយមិនកកស្ទះ Main thread។'
      },
      tutorial: {
        en: 'import kotlinx.coroutines.*\n\nsuspend fun fetchData(): String {\n    delay(1000) // simulated network delay\n    return "Data loaded"\n}\n\nfun main() = runBlocking {\n    println("Fetching...")\n    val data = fetchData()\n    println(data)\n}',
        km: 'import kotlinx.coroutines.*\n\nsuspend fun fetchData(): String {\n    delay(1000)\n    return "Data loaded"\n}\n\nfun main() = runBlocking {\n    println("កំពុងទាញយក...")\n    val data = fetchData()\n    println(data)\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#eab308; padding:20px; font-family:monospace;"><h3>7.3 Coroutines Demo</h3><p>Fetching...<br>Data loaded (after 1s delay)</p></body></html>`
      }
    },
    {
      id: 'kt-7-4',
      slug: 'error-handling-with-try-catch',
      moduleNumber: 7,
      lessonNumberInModule: 4,
      title: {
        en: '7.4 Error handling with try/catch',
        km: '៧.៤ ការគ្រប់គ្រង Error ជាមួយ try/catch'
      },
      durationMinutes: 18,
      difficulty: 'Intermediate',
      explanation: {
        en: '`try/catch` in Kotlin is an expression that returns a fallback value upon catching runtime exceptions during execution.',
        km: '`try/catch` ក្នុង Kotlin ជា Expression ដែលប្រគល់តម្លៃជំនួសពេលជួប Exception ពេលរត់កម្មវិធី។'
      },
      tutorial: {
        en: 'fun main() {\n    val result = try {\n        "123a".toInt()\n    } catch (e: NumberFormatException) {\n        0\n    }\n    println("Parsed number: $result")\n}',
        km: 'fun main() {\n    val result = try {\n        "123a".toInt()\n    } catch (e: NumberFormatException) {\n        0\n    }\n    println("Parsed number: $result")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#f43f5e; padding:20px; font-family:monospace;"><h3>7.4 Try Catch Expression</h3><p>Parsed number: 0 (Fallback on error)</p></body></html>`
      }
    },
    {
      id: 'kt-7-5',
      slug: 'practice-simulate-network-call-coroutine',
      moduleNumber: 7,
      lessonNumberInModule: 5,
      title: {
        en: '7.5 Practice: simulate a network call with a delayed coroutine',
        km: '៧.៥ អនុវត្ត: កម្មវិធីក្លែងធ្វើ Network Call ជាមួយ Coroutine'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Simulate API requests returning Kotlin data class responses wrapped in asynchronous coroutine scopes with error handling.',
        km: 'ធ្វើពិសោធន៍ API call ដែលប្រគល់តម្លៃ Kotlin data class ដោយប្រើ Coroutine scopes និងទប់ស្កាត់កំហុស។'
      },
      tutorial: {
        en: 'import kotlinx.coroutines.*\n\ndata class UserProfile(val id: String, val name: String)\n\nsuspend fun getUser(): UserProfile {\n    delay(1500)\n    return UserProfile("U-100", "Sophea")\n}\n\nfun main() = runBlocking {\n    val user = getUser()\n    println("Loaded profile: ${user.name}")\n}',
        km: 'import kotlinx.coroutines.*\n\ndata class UserProfile(val id: String, val name: String)\n\nsuspend fun getUser(): UserProfile {\n    delay(1500)\n    return UserProfile("U-100", "Sophea")\n}\n\nfun main() = runBlocking {\n    val user = getUser()\n    println("Loaded profile: ${user.name}")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#4ade80; padding:20px; font-family:monospace;"><h3>7.5 Async Network Call</h3><p>Loaded profile: Sophea</p></body></html>`
      }
    },

    // MODULE 8
    {
      id: 'kt-8-1',
      slug: 'planning-cli-expense-tracker',
      moduleNumber: 8,
      lessonNumberInModule: 1,
      title: {
        en: '8.1 Planning the CLI Expense Tracker (data model, features)',
        km: '៨.១ ការរៀបចំផែនការ CLI Expense Tracker (Data model, មុខងារ)'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Structure the CLI Expense Tracker application layout: define `Expense` data class fields, in-memory collection state, and menu command options.',
        km: 'រៀបចំរចនាសម្ព័ន្ធកម្មវិធី CLI Expense Tracker: កំណត់អថេរក្នុង `Expense` data class, រក្សាទុកក្នុង Memory list និងរៀបចំ Menu options។'
      },
      tutorial: {
        en: '// Architecture plan:\n// 1. Expense data class\n// 2. MutableList<Expense> state\n// 3. Interactive CLI menu loop',
        km: '// ផែនការរចនាសម្ព័ន្ធ:\n// 1. Expense data class\n// 2. MutableList<Expense> state\n// 3. Interactive CLI menu loop'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#a855f7; padding:20px; font-family:monospace;"><h3>8.1 Capstone Architecture</h3><p>Architecture plan prepared.</p></body></html>`
      }
    },
    {
      id: 'kt-8-2',
      slug: 'building-cli-expense-tracker',
      moduleNumber: 8,
      lessonNumberInModule: 2,
      title: {
        en: '8.2 Building the CLI Expense Tracker (full guided build)',
        km: '៨.២ ការសាងសង់ CLI Expense Tracker (ការសរសេរកូដពេញលេញ)'
      },
      durationMinutes: 30,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Complete step-by-step implementation of the CLI Expense Tracker combining Kotlin data classes, collections, sumOf, filter, and when menu loops.',
        km: 'ការសរសេរកូដពេញលេញនៃកម្មវិធី CLI Expense Tracker ដោយបូកបញ្ចូល Kotlin data classes, collections, sumOf, filter, និង when menu loops។'
      },
      tutorial: {
        en: 'data class Expense(val title: String, val amount: Double, val category: String)\n\nfun main() {\n    val expenses = mutableListOf(\n        Expense("Coffee", 3.50, "Food"),\n        Expense("Taxi", 8.00, "Transport")\n    )\n    val total = expenses.sumOf { it.amount }\n    println("Total: $$total")\n}',
        km: 'data class Expense(val title: String, val amount: Double, val category: String)\n\nfun main() {\n    val expenses = mutableListOf(\n        Expense("Coffee", 3.50, "Food"),\n        Expense("Taxi", 8.00, "Transport")\n    )\n    val total = expenses.sumOf { it.amount }\n    println("សរុប: $$total")\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#090d16; color:#4ade80; padding:20px; font-family:monospace;"><h3>8.2 Final Capstone Code</h3><p>Total Spent: $11.50</p></body></html>`
      }
    }
  ]
};
