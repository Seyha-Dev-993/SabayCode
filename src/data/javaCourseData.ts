import { MobileCourse } from './mobileCoursesHubData';

export const JAVA_COURSE_DATA: MobileCourse = {
  id: 'java-android',
  title: {
    en: 'Java for Android — Language Basics',
    km: 'ភាសា Java សម្រាប់ Android មូលដ្ឋាន'
  },
  iconName: 'java-android',
  type: 'language',
  categoryId: 'languages',
  difficulty: 'Beginner',
  shortDescription: {
    en: 'The original language of Android — still powering millions of apps in production today.',
    km: 'ភាសាដើមរបស់ Android — នៅតែដំណើរការកម្មវិធីរាប់លានក្នុងពិភពពិតសព្វថ្ងៃ។'
  },
  summary: {
    en: "Java was Android's original programming language, and even though Google now recommends Kotlin for new apps, Java still runs a massive share of existing production Android apps and is deeply embedded in enterprise backend systems, banking software, and large-scale codebases across Southeast Asia and beyond. Learning Java gives you the ability to read, maintain, and contribute to real legacy Android codebases — a genuinely valuable and in-demand skill, especially at companies with older apps still in active use. This course teaches Java as a standalone language, covering variables, control flow, functions, object-oriented programming (which Java popularized), collections, and exception handling. By the end, you'll be able to read real Android Java code confidently and understand how it compares to Kotlin.",
    km: 'Java ជាភាសាដើមរបស់ Android ហើយទោះបីជា Google ណែនាំ Kotlin សម្រាប់កម្មវិធីថ្មីៗក៏ដោយ Java នៅតែដំណើរការចំណែកធំនៃកម្មវិធី Android ដែលកំពុងប្រើប្រាស់ពិតប្រាកដ ហើយត្រូវបានប្រើប្រាស់យ៉ាងស៊ីជម្រៅនៅក្នុងប្រព័ន្ធ backend សហគ្រាស កម្មវិធីធនាគារ និងកូដមូលដ្ឋានទំហំធំនៅទូទាំងតំបន់អាស៊ីអាគ្នេយ៍ និងផ្សេងទៀត។ ការរៀន Java ផ្តល់ឱ្យអ្នកនូវសមត្ថភាពអាន ថែទាំ និងចូលរួមក្នុងកូដ Android ចាស់ពិតប្រាកដ — ជាជំនាញដ៏មានតម្លៃ និងត្រូវការខ្លាំង ជាពិសេសនៅក្រុមហ៊ុនដែលមានកម្មវិធីចាស់កំពុងប្រើប្រាស់នៅឡើយ។ វគ្គសិក្សានេះបង្រៀន Java ជាភាសាដោយឡែក រួមមាន variables, control flow, functions, object-oriented programming (ដែល Java ធ្វើឱ្យពេញនិយម), collections និង exception handling។ ចប់វគ្គនេះ អ្នកនឹងអាចអានកូដ Java របស់ Android ពិតប្រាកដដោយទំនុកចិត្ត និងយល់ពីរបៀបប្រៀបធៀបជាមួយ Kotlin។'
  },
  estimatedHours: 17,
  lessonCount: 29,
  usedFor: 'Legacy Android Codebases, Enterprise Android Apps, Mobile Banking SDKs, Backend Services',
  realWorldApps: ['Early Android Apps', 'Banking Apps', 'Enterprise Systems', 'Cash App Core', 'Telecom Apps'],
  prerequisites: {
    en: "None — true beginner course. Any prior programming experience helps but isn't required.",
    km: 'មិនទាមទារបទពិសោធន៍សរសេរកូដពីមុនមកទេ។ បទពិសោធន៍សរសេរកូដពីមុនជួយបានខ្លះប៉ុន្តែមិនទាមទារដាច់ខាត។'
  },
  whatYouWillLearn: {
    en: [
      'Set up the JDK and Android Studio for writing and running Java code',
      "Use variables, data types, and Java's explicit typing system",
      'Write control flow logic with if/else, switch, and loops',
      'Build methods, including overloading and access modifiers',
      "Work with Java's core collections: ArrayList, HashMap, and HashSet",
      'Apply object-oriented programming: classes, constructors, inheritance, interfaces, and abstract classes',
      'Handle errors safely with try/catch/finally and exceptions',
      "Understand Java's approach to null (and why Kotlin was created partly to fix it)",
      'Read and understand real Java code found in legacy Android projects',
      'Compare Java syntax directly against Kotlin syntax for the same concepts'
    ],
    km: [
      'ដំឡើង JDK និង Android Studio សម្រាប់ការសរសេរ និងរត់កូដ Java',
      'ប្រើប្រាស់ variables, data types និងប្រព័ន្ធ explicit typing របស់ Java',
      'សរសេរលក្ខខណ្ឌ control flow ជាមួយ if/else, switch, និង loops',
      'បង្កើត methods រួមទាំង overloading និង access modifiers',
      'ធ្វើការជាមួយ Java collections: ArrayList, HashMap, និង HashSet',
      'អនុវត្តកម្មវិធី Object-Oriented Programming: classes, constructors, inheritance, interfaces, និង abstract classes',
      'ដោះស្រាយកំហុសដោយសុវត្ថិភាពជាមួយ try/catch/finally និង exceptions',
      'យល់ដឹងពីរបៀបដែល Java ចាត់ចែងតម្លៃ null (និងមូលហេតុដែល Kotlin ត្រូវបានបង្កើតឡើង)',
      'អាន និងយល់ពីកូដ Java ពិតប្រាកដក្នុងគម្រោង Android ចាស់ៗ',
      'ប្រៀបធៀប syntax Java ដោយផ្ទាល់ជាមួយ syntax Kotlin សម្រាប់ concept ដូចគ្នា'
    ]
  },
  toolsAndSetup: {
    en: '1. Install the JDK (Java Development Kit) — version 17 or newer recommended\n2. Install Android Studio (bundles a compatible JDK automatically)\n3. Alternative: online Java playground (e.g. replit.com or onlinegdb.com) for zero-install practice\n4. Verify: run `java -version` and `javac -version` in terminal',
    km: '១. ដំឡើង JDK (Java Development Kit) — ជំនាន់ 17 ឬថ្មីជាងនេះ\n២. ដំឡើង Android Studio (មានរៀបចំ JDK ដែលត្រូវគ្នាជាស្រេច)\n៣. ជម្រើសបន្ថែម: ប្រើប្រាស់ Online Java Playground (ដូចជា replit.com ឬ onlinegdb.com)\n៤. ពិនិត្យការដំឡើង: រត់ `java -version` និង `javac -version` ក្នុង Terminal'
  },
  cheatSheet: [
    {
      concept: 'Main Entry Point & Print',
      code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
      explanation: {
        en: 'Every standalone Java program starts execution inside `public static void main(String[] args)`.',
        km: 'កម្មវិធី Java ទាំងអស់ចាប់ផ្តើមរត់ចេញពី `public static void main(String[] args)` នៅក្នុង Class។'
      }
    },
    {
      concept: 'Explicit Typing & Variables',
      code: 'String name = "Seyha";\nint age = 25;\ndouble price = 19.99;\nboolean isActive = true;',
      explanation: {
        en: 'Java requires explicit type declarations for all primitive variables and objects.',
        km: 'Java ទាមទារឱ្យប្រកាស Type ឱ្យច្បាស់លាស់សម្រាប់អថេរទាំងអស់។'
      }
    },
    {
      concept: 'Class & Constructor',
      code: 'public class Book {\n    private String title;\n    public Book(String title) {\n        this.title = title;\n    }\n    public String getTitle() { return title; }\n}',
      explanation: {
        en: 'Encapsulate state with private fields, constructors, and public getter methods.',
        km: 'រក្សាសុវត្ថិភាពទិន្នន័យ (Encapsulation) ជាមួយ private fields, constructor, និង getter methods។'
      }
    },
    {
      concept: 'Null Safety & Try-Catch',
      code: 'try {\n    if (name != null) {\n        System.out.println(name.length());\n    }\n} catch (Exception e) {\n    System.out.println("Error: " + e.getMessage());\n}',
      explanation: {
        en: 'Defensive null checking and try/catch blocks prevent runtime NullPointerExceptions.',
        km: 'ការពិនិត្យ null ជាមុន និងការប្រើ try/catch ការពារការ crash ដោយសារ NullPointerException។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-jv-1',
      question: {
        en: 'Why is `NullPointerException` (NPE) so notorious in traditional Java code?',
        km: 'ហេតុអ្វីបានជា `NullPointerException` (NPE) កើតឡើងញឹកញាប់ក្នុងកូដ Java ប្រពៃណី?'
      },
      options: [
        { id: '1', text: { en: 'Java lacks built-in compile-time null safety for object references', km: 'Java គ្មានប្រព័ន្ធការពារ null-safety នៅ compile-time សម្រាប់ Object references ឡើយ' }, isCorrect: true },
        { id: '2', text: { en: 'Java does not allow null values anywhere', km: 'Java មិនអនុញ្ញាតឱ្យមានតម្លៃ null ឡើយ' }, isCorrect: false },
        { id: '3', text: { en: 'Java automatically deletes variables after 5 minutes', km: 'Java លុបអថេរដោយស្វ័យប្រវត្តិក្រោយ 5 នាទី' }, isCorrect: false }
      ],
      explanation: {
        en: 'Unlike Kotlin, traditional Java allows any object reference to hold null without forcing explicit null checks at compile time.',
        km: 'មិនដូច Kotlin ទេ Java អនុញ្ញាតឱ្យ Object reference អាចស្មើ null ដោយមិនទាមទារការពិនិត្យនៅ Compile time ឡើយ។'
      }
    },
    {
      id: 'q-jv-2',
      question: {
        en: 'What is the signature of a standard Java main method?',
        km: 'តើ Signature ផ្លូវការនៃ Java main method គឺដូចម្តេច?'
      },
      options: [
        { id: '1', text: { en: 'public static void main(String[] args)', km: 'public static void main(String[] args)' }, isCorrect: true },
        { id: '2', text: { en: 'fun main(args: Array<String>)', km: 'fun main(args: Array<String>)' }, isCorrect: false },
        { id: '3', text: { en: 'void main()', km: 'void main()' }, isCorrect: false }
      ],
      explanation: {
        en: 'The JVM looks specifically for `public static void main(String[] args)` as the application entry point.',
        km: 'JVM ស្វែងរក `public static void main(String[] args)` ជាចំណុចចាប់ផ្តើមនៃកម្មវិធី។'
      }
    },
    {
      id: 'q-jv-3',
      question: {
        en: 'Which Java collection class provides dynamic resizable arrays?',
        km: 'តើ Class មួយណាក្នុង Java Collection ដែលផ្តល់ Array មានទំហំប្រែប្រួលតាមតម្រូវការ?'
      },
      options: [
        { id: '1', text: { en: 'ArrayList<T>', km: 'ArrayList<T>' }, isCorrect: true },
        { id: '2', text: { en: 'StaticArray<T>', km: 'StaticArray<T>' }, isCorrect: false },
        { id: '3', text: { en: 'HashMap<K,V>', km: 'HashMap<K,V>' }, isCorrect: false }
      ],
      explanation: {
        en: '`ArrayList` in Java dynamically resizes as elements are added or removed.',
        km: '`ArrayList` ក្នុង Java អាចដំឡើង ឬបន្ថយទំហំដោយស្វ័យប្រវត្តិពេលបន្ថែម ឬលុបទិន្នន័យ។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'CLI Library Manager',
      km: 'កម្មវិធី CLI Library Manager'
    },
    description: {
      en: 'A command-line app where a user can add books, mark a book as borrowed or returned, search for books by title, and list all books — built with Java classes, ArrayList, and exception handling for invalid input.',
      km: 'កម្មវិធី Command-line ដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់បន្ថែមសៀវភៅ ខ្ចី/សងសៀវភៅ ស្វែងរកសៀវភៅតាមចំណងជើង និងបង្ហាញសៀវភៅទាំងអស់ — សាងសង់ឡើងដោយ Java classes, ArrayList, និង Exception handling។'
    },
    featureChecklist: {
      en: [
        'Add a new book (title, author)',
        'List all books with their borrowed/returned status',
        'Mark a book borrowed or returned by title search',
        'Search for a book by title (partial matching)',
        'Simple text menu loop using switch that handles invalid input via try/catch'
      ],
      km: [
        'បន្ថែមសៀវភៅថ្មី (ចំណងជើង, អ្នកនិពន្ធ)',
        'បង្ហាញបញ្ជីសៀវភៅទាំងអស់ រួមជាមួយស្ថានភាពខ្ចី/សង',
        'កត់ត្រាការខ្ចី ឬសងសៀវភៅតាមរយៈការស្វែងរកចំណងជើង',
        'ស្វែងរកសៀវភៅតាមចំណងជើង (Partial match)',
        'រង្វង់ Menu អត្ថបទដែលប្រើ switch statement និង try/catch ការពារ Input មិនត្រឹមត្រូវ'
      ]
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<body style="background:#0b1120; color:#f8fafc; font-family: monospace; padding:20px; line-height:1.6;">
  <h2 style="color:#38bdf8; margin-top:0;">📚 CLI Library Manager (Java Demo)</h2>
  <div style="background:#1e293b; padding:16px; border-radius:12px; border:1px solid #334155;">
    <p style="color:#e2e8f0;">=== LIBRARY SYSTEM ===</p>
    <p>1. Add New Book</p>
    <p>2. View All Books</p>
    <p>3. Borrow / Return Book</p>
    <p>4. Search Book</p>
    <p>5. Exit</p>
    <hr style="border-color:#334155; margin:15px 0;">
    <p style="color:#4ade80;">[Available] "Clean Code" by Robert C. Martin</p>
    <p style="color:#f87171;">[Borrowed] "Design Patterns" by Gang of Four</p>
    <p style="color:#eab308; font-weight:bold;">Total Books: 2</p>
  </div>
</body>
</html>`
    },
    finalCode: `import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Book {
    private String title;
    private String author;
    private boolean isBorrowed;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
    }

    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public boolean isBorrowed() { return isBorrowed; }
    public void setBorrowed(boolean borrowed) { isBorrowed = borrowed; }

    @Override
    public String toString() {
        String status = isBorrowed ? "[Borrowed]" : "[Available]";
        return status + " \"" + title + "\" by " + author;
    }
}

public class Main {
    public static void main(String[] args) {
        List<Book> library = new ArrayList<>();
        library.add(new Book("Clean Code", "Robert C. Martin"));
        library.add(new Book("Design Patterns", "Gang of Four"));

        System.out.println("=== JAVA CLI LIBRARY MANAGER ===");
        for (Book b : library) {
            System.out.println(b);
        }
    }
}`
  },
  lessons: [
    // MODULE 1
    {
      id: 'java-1-1',
      slug: 'what-is-java-and-its-role-in-android-history',
      moduleNumber: 1,
      lessonNumberInModule: 1,
      title: {
        en: "1.1 What is Java and its role in Android's history",
        km: '១.១ អ្វីទៅជា Java ហើយអ្វីជាតួនាទីរបស់វាក្នុងប្រវត្តិសាស្ត្រ Android'
      },
      durationMinutes: 14,
      difficulty: 'Beginner',
      explanation: {
        en: "Java is a general-purpose, object-oriented language created in 1995. When Android launched in 2008, Java was its official language, and even today, millions of enterprise Android apps and banking systems rely on legacy Java codebases.",
        km: 'Java ជាភាសាទូទៅ Object-oriented ដែលបង្កើតនៅឆ្នាំ 1995។ នៅពេល Android ចាប់ផ្តើមឆ្នាំ 2008 Java ជាភាសាផ្លូវការ ហើយសព្វថ្ងៃកម្មវិធីធនាគារ និងសហគ្រាសរាប់លាននៅតែដំណើរការលើកូដ Java ចាស់ៗ។'
      },
      tutorial: {
        en: 'public class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
        km: 'public class Hello {\n    public static void main(String[] args) {\n        System.out.println("សួស្តី ភាសា Java!");\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>1.1 Hello Java!</h3><pre>System.out.println("Hello, Java!");</pre></body></html>`
      }
    },
    {
      id: 'java-1-2',
      slug: 'installing-the-jdk-and-android-studio',
      moduleNumber: 1,
      lessonNumberInModule: 2,
      title: {
        en: '1.2 Installing the JDK and Android Studio',
        km: '១.២ ការដំឡើំង JDK និង Android Studio'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Install the Java Development Kit (JDK 17+) and Android Studio, which bundles a compatible JDK automatically and provides terminal compile tools like `javac`.',
        km: 'ដំឡើំង JDK 17+ និង Android Studio ដែលផ្តល់ជូន JDK ដោយស្វ័យប្រវត្តិ ព្រមទាំងឧបករណ៍ Compile ដូចជា `javac`។'
      },
      tutorial: {
        en: '// Terminal commands:\njavac Hello.java\njava Hello',
        km: '// ពាក្យបញ្ជា Terminal:\njavac Hello.java\njava Hello'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>1.2 JDK Verification</h3><p>javac Hello.java && java Hello</p></body></html>`
      }
    },
    {
      id: 'java-1-3',
      slug: 'your-first-program-hello-java',
      moduleNumber: 1,
      lessonNumberInModule: 3,
      title: {
        en: '1.3 Your first program — "Hello, Java!"',
        km: '១.៣ កម្មវិធីដំបូងរបស់អ្នក — "Hello, Java!"'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Every Java program requires a class matching the filename and a `public static void main(String[] args)` method as the application entry point.',
        km: 'គ្រប់កម្មវិធី Java ទាំងអស់ត្រូវការ Class ដែលមានឈ្មោះដូច Filename និងមាន `public static void main(String[] args)` ជាចំណុចចាប់ផ្តើម។'
      },
      tutorial: {
        en: 'public class Main {\n    public static void main(String[] args) {\n        String name = "Seyha";\n        int age = 25;\n        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");\n    }\n}',
        km: 'public class Main {\n    public static void main(String[] args) {\n        String name = "សីហា";\n        int age = 25;\n        System.out.println("សួស្តី ខ្ញុំឈ្មោះ " + name + " ហើយខ្ញុំអាយុ " + age + " ឆ្នាំ។");\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>1.3 Hello Java Program</h3><p>Hello, my name is Seyha and I am 25 years old.</p></body></html>`
      }
    },

    // MODULE 2
    {
      id: 'java-2-1',
      slug: 'variables-and-java-explicit-type-declarations',
      moduleNumber: 2,
      lessonNumberInModule: 1,
      title: {
        en: "2.1 Variables and Java's explicit type declarations",
        km: '២.១ អថេរ និងការប្រកាស Type ច្បាស់លាស់ក្នុង Java'
      },
      durationMinutes: 16,
      difficulty: 'Beginner',
      explanation: {
        en: 'Java is statically and explicitly typed. Every variable must have its type declared beforehand, such as `String appName = "AndroidApp";`.',
        km: 'Java ជាភាសា Statically & Explicitly typed។ គ្រប់អថេរទាំងអស់ត្រូវតែប្រកាស Type ឱ្យបានច្បាស់លាស់មុនពេលប្រើប្រាស់។'
      },
      tutorial: {
        en: 'String appName = "BankingApp";\nint activeUsers = 5000;\nSystem.out.println(appName + " Users: " + activeUsers);',
        km: 'String appName = "BankingApp";\nint activeUsers = 5000;\nSystem.out.println(appName + " អ្នកប្រើប្រាស់: " + activeUsers);'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>2.1 Explicit Typing</h3><p>BankingApp Users: 5000</p></body></html>`
      }
    },
    {
      id: 'java-2-2',
      slug: 'data-types-primitives-vs-objects',
      moduleNumber: 2,
      lessonNumberInModule: 2,
      title: {
        en: '2.2 Data types (int, double, String, boolean) and primitives vs objects',
        km: '២.២ ប្រភេទទិន្នន័យ (int, double, String, boolean) និង Primitives ប៉ះ Objects'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Java distinguishes between Primitive types (`int`, `double`, `boolean`, `char`) stored on the stack and Reference Objects (`String`, `Integer`) stored on the heap.',
        km: 'Java បែងចែកច្បាស់រវាង Primitive types (`int`, `double`, `boolean`) ដែលរក្សាទុកក្នុង Stack និង Reference Objects (`String`, `Integer`) រក្សាទុកក្នុង Heap។'
      },
      tutorial: {
        en: 'int count = 10; // Primitive\nDouble price = 19.99; // Wrapper Object\nboolean isOpen = true;\nSystem.out.println("Total: $" + (count * price));',
        km: 'int count = 10;\nDouble price = 19.99;\nboolean isOpen = true;\nSystem.out.println("សរុប: $" + (count * price));'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>2.2 Primitive vs Object</h3><p>Total: $199.9</p></body></html>`
      }
    },
    {
      id: 'java-2-3',
      slug: 'operators-arithmetic-comparison-logical',
      moduleNumber: 2,
      lessonNumberInModule: 3,
      title: {
        en: '2.3 Operators (arithmetic, comparison, logical)',
        km: '២.៣ ប្រមាណវិធី (arithmetic, comparison, logical)'
      },
      durationMinutes: 16,
      difficulty: 'Beginner',
      explanation: {
        en: 'Master standard arithmetic (+, -, *, /, %), relational (==, !=, >, <), and logical (&&, ||, !) operators in Java.',
        km: 'សិក្សាប្រមាណវិធីគណនា (+, -, *, /, %), ប្រៀបធៀប (==, !=, >, <) និងតក្កវិទ្យា (&&, ||, !) ក្នុង Java។'
      },
      tutorial: {
        en: 'int score = 85;\nboolean isPassed = score >= 50 && score <= 100;\nSystem.out.println("Passed: " + isPassed);',
        km: 'int score = 85;\nboolean isPassed = score >= 50 && score <= 100;\nSystem.out.println("ជាប់: " + isPassed);'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>2.3 Java Operators</h3><p>Passed: true</p></body></html>`
      }
    },
    {
      id: 'java-2-4',
      slug: 'string-formatting-and-concatenation',
      moduleNumber: 2,
      lessonNumberInModule: 4,
      title: {
        en: '2.4 String formatting and concatenation',
        km: '២.៤ String formatting និង Concatenation'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Java uses string concatenation with `+` or formatted output with `String.format("User: %s, Score: %d", name, score)`.',
        km: 'Java ប្រើប្រាស់ String concatenation ជាមួយសញ្ញា `+` ឬប្រើប្រាស់ `String.format("User: %s, Score: %d", name, score)`។'
      },
      tutorial: {
        en: 'String user = "Dara";\nint score = 92;\nString formatted = String.format("Player %s scored %d points", user, score);\nSystem.out.println(formatted);',
        km: 'String user = "ដារ៉ា";\nint score = 92;\nString formatted = String.format("អ្នកលេង %s ទទួលបាន %d ពិន្ទុ", user, score);\nSystem.out.println(formatted);'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>2.4 String.format</h3><p>Player Dara scored 92 points</p></body></html>`
      }
    },
    {
      id: 'java-2-5',
      slug: 'practice-mini-calculator-script',
      moduleNumber: 2,
      lessonNumberInModule: 5,
      title: {
        en: '2.5 Practice: mini calculator script',
        km: '២.៥ អនុវត្ត: កម្មវិធី Mini Calculator ក្នុង Java'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Combine variables, arithmetic operators, and String formatting into a complete Java calculation script.',
        km: 'បូកបញ្ចូន variables, arithmetic operators, និង String formatting ទៅជា Java Calculator Script ពេញលេញ។'
      },
      tutorial: {
        en: 'double num1 = 120.0;\ndouble num2 = 30.0;\nSystem.out.println("Add: " + (num1 + num2));\nSystem.out.println("Divide: " + (num1 / num2));',
        km: 'double num1 = 120.0;\ndouble num2 = 30.0;\nSystem.out.println("បូក: " + (num1 + num2));\nSystem.out.println("ចែក: " + (num1 / num2));'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>2.5 Java Calculator</h3><p>Add: 150.0 | Divide: 4.0</p></body></html>`
      }
    },

    // MODULE 3
    {
      id: 'java-3-1',
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
        en: 'Conditional statements in Java require parentheses around conditions `if (condition)` and use block braces `{}`.',
        km: 'លក្ខខណ្ឌក្នុង Java ទាមទារឱ្យមានវង់ក្រចកជុំវិញ Condition `if (condition)` និងប្រើប្រាស់រង្វង់សញ្ញា `{}`។'
      },
      tutorial: {
        en: 'int batteryLevel = 15;\nif (batteryLevel < 20) {\n    System.out.println("Battery Low! Plug in charger.");\n} else {\n    System.out.println("Battery Sufficient.");\n}',
        km: 'int batteryLevel = 15;\nif (batteryLevel < 20) {\n    System.out.println("ថ្មខ្សោយ! សូមដោតសាកល្បង។");\n} else {\n    System.out.println("ថ្មគ្រប់គ្រាន់។");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f43f5e; padding:20px; font-family:monospace;"><h3>3.1 Java If Statement</h3><p>Battery Low! Plug in charger.</p></body></html>`
      }
    },
    {
      id: 'java-3-2',
      slug: 'switch-statements',
      moduleNumber: 3,
      lessonNumberInModule: 2,
      title: {
        en: '3.2 switch statements',
        km: '៣.២ switch statements'
      },
      durationMinutes: 16,
      difficulty: 'Beginner',
      explanation: {
        en: 'Traditional Java `switch` checks integral primitives or Strings. Remember to include `break;` statements to avoid fallthrough.',
        km: '`switch` ក្នុង Java ពិនិត្យមើល Primitives ឬ String។ កុំភ្លេចសរសេរ `break;` ដើម្បកុំឱ្យវា Fallthrough ទៅកាន់ Case បន្ទាប់។'
      },
      tutorial: {
        en: 'String day = "MONDAY";\nswitch (day) {\n    case "MONDAY":\n        System.out.println("Start of work week");\n        break;\n    case "FRIDAY":\n        System.out.println("Weekend is near!");\n        break;\n    default:\n        System.out.println("Midweek day");\n}',
        km: 'String day = "MONDAY";\nswitch (day) {\n    case "MONDAY":\n        System.out.println("ចាប់ផ្តើមសប្តាហ៍ធ្វើការ");\n        break;\n    case "FRIDAY":\n        System.out.println("ជិតដល់ចុងសប្តាហ៍!");\n        break;\n    default:\n        System.out.println("ថ្ងៃកណ្តាលសប្តាហ៍");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>3.2 Java Switch</h3><p>Start of work week</p></body></html>`
      }
    },
    {
      id: 'java-3-3',
      slug: 'for-while-do-while-loops',
      moduleNumber: 3,
      lessonNumberInModule: 3,
      title: {
        en: '3.3 for, while, and do-while loops',
        km: '៣.៣ for, while, និង do-while loops'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Java supports traditional index-based `for(int i=0; i<N; i++)`, enhanced `for(Type item : list)`, `while`, and `do-while` loops.',
        km: 'Java ទ្រទ្រង់ `for(int i=0; i<N; i++)` ធម្មតា, enhanced `for(Type item : list)`, `while`, និង `do-while` loops។'
      },
      tutorial: {
        en: 'for (int i = 1; i <= 3; i++) {\n    System.out.println("Iteration: " + i);\n}',
        km: 'for (int i = 1; i <= 3; i++) {\n    System.out.println("ជុំទី: " + i);\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>3.3 Java For Loop</h3><p>Iteration: 1 to 3</p></body></html>`
      }
    },
    {
      id: 'java-3-4',
      slug: 'practice-fizzbuzz-in-java',
      moduleNumber: 3,
      lessonNumberInModule: 4,
      title: {
        en: '3.4 Practice: FizzBuzz in Java',
        km: '៣.៤ អនុវត្ត: FizzBuzz ក្នុង Java'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Write the classic FizzBuzz algorithm using a `for` loop and conditional modulo checks `% 3` and `% 5`.',
        km: 'សរសេរកូដ FizzBuzz ដោយប្រើប្រាស់ `for` loop និងប្រមាណវិធី Modulo `% 3` និង `% 5`។'
      },
      tutorial: {
        en: 'for (int i = 1; i <= 15; i++) {\n    if (i % 3 == 0 && i % 5 == 0) {\n        System.out.println("FizzBuzz");\n    } else if (i % 3 == 0) {\n        System.out.println("Fizz");\n    } else if (i % 5 == 0) {\n        System.out.println("Buzz");\n    } else {\n        System.out.println(i);\n    }\n}',
        km: 'for (int i = 1; i <= 15; i++) {\n    if (i % 3 == 0 && i % 5 == 0) {\n        System.out.println("FizzBuzz");\n    } else if (i % 3 == 0) {\n        System.out.println("Fizz");\n    } else if (i % 5 == 0) {\n        System.out.println("Buzz");\n    } else {\n        System.out.println(i);\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>3.4 Java FizzBuzz</h3><p>1, 2, Fizz, 4, Buzz, ..., 15: FizzBuzz</p></body></html>`
      }
    },

    // MODULE 4
    {
      id: 'java-4-1',
      slug: 'declaring-and-calling-methods',
      moduleNumber: 4,
      lessonNumberInModule: 1,
      title: {
        en: '4.1 Declaring and calling methods',
        km: '៤.១ ការប្រកាស និងហៅប្រើប្រាស់ Methods'
      },
      durationMinutes: 16,
      difficulty: 'Beginner',
      explanation: {
        en: 'Methods in Java specify a return type, method name, and typed parameters: `public static int add(int a, int b)`.',
        km: 'Methods ក្នុង Java ត្រូវតែកំណត់ Return type, ឈ្មោះ និង Parameters: `public static int add(int a, int b)`។'
      },
      tutorial: {
        en: 'public class Calculator {\n    public static int multiply(int a, int b) {\n        return a * b;\n    }\n    public static void main(String[] args) {\n        System.out.println("Result: " + multiply(6, 7));\n    }\n}',
        km: 'public class Calculator {\n    public static int multiply(int a, int b) {\n        return a * b;\n    }\n    public static void main(String[] args) {\n        System.out.println("លទ្ធផល: " + multiply(6, 7));\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.1 Java Methods</h3><p>Result: 42</p></body></html>`
      }
    },
    {
      id: 'java-4-2',
      slug: 'method-overloading',
      moduleNumber: 4,
      lessonNumberInModule: 2,
      title: {
        en: '4.2 Method overloading',
        km: '៤.២ Method overloading'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Java allows multiple methods in the same class to share the same name as long as their parameter signatures differ in count or type.',
        km: 'Java អនុញ្ញាតឱ្យ Method ច្រើនក្នុង Class តែមួយមានឈ្មោះដូចគ្នា ដរាបណា Parameter signatures ខុសគ្នា។'
      },
      tutorial: {
        en: 'public class Logger {\n    public static void log(String msg) {\n        System.out.println("LOG: " + msg);\n    }\n    public static void log(String msg, int code) {\n        System.out.println("LOG [" + code + "]: " + msg);\n    }\n}',
        km: 'public class Logger {\n    public static void log(String msg) {\n        System.out.println("LOG: " + msg);\n    }\n    public static void log(String msg, int code) {\n        System.out.println("LOG [" + code + "]: " + msg);\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>4.2 Overloading</h3><p>LOG [200]: Success</p></body></html>`
      }
    },
    {
      id: 'java-4-3',
      slug: 'access-modifiers-static-vs-instance',
      moduleNumber: 4,
      lessonNumberInModule: 3,
      title: {
        en: '4.3 Access modifiers (public/private/protected) and static vs instance methods',
        km: '៤.៣ Access modifiers (public/private/protected) និង static ប៉ះ instance'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Control visibility using `public`, `private`, `protected`, or package-private. `static` methods belong to the class itself, while instance methods belong to objects.',
        km: 'គ្រប់គ្រងការមើលឃើញដោយប្រើ `public`, `private`, `protected`។ Method ប្រើ `static` ជារបស់ Class ទាំងមូល ហើយ instance method ជារបស់ Object។'
      },
      tutorial: {
        en: 'public class AppConfig {\n    private static String API_URL = "https://api.example.com";\n    public static String getUrl() { return API_URL; }\n}',
        km: 'public class AppConfig {\n    private static String API_URL = "https://api.example.com";\n    public static String getUrl() { return API_URL; }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>4.3 Access Modifiers</h3><p>API URL: https://api.example.com</p></body></html>`
      }
    },
    {
      id: 'java-4-4',
      slug: 'practice-reusable-utility-methods',
      moduleNumber: 4,
      lessonNumberInModule: 4,
      title: {
        en: '4.4 Practice: build a set of reusable utility methods',
        km: '៤.៤ អនុវត្ត: បង្កើត Reusable Utility Methods ក្នុង Java'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Build a `StringUtils` helper class containing reusable static methods for string validation and formatting.',
        km: 'បង្កើត Class Helper `StringUtils` ដែលមាន Static methods សម្រាប់ពិនិត្យ និង Format អត្ថបទ។'
      },
      tutorial: {
        en: 'public class StringUtils {\n    public static boolean isEmpty(String str) {\n        return str == null || str.trim().isEmpty();\n    }\n    public static void main(String[] args) {\n        System.out.println("Is empty: " + isEmpty(" "));\n    }\n}',
        km: 'public class StringUtils {\n    public static boolean isEmpty(String str) {\n        return str == null || str.trim().isEmpty();\n    }\n    public static void main(String[] args) {\n        System.out.println("ទទេឬ: " + isEmpty(" "));\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>4.4 String Utility</h3><p>Is empty: true</p></body></html>`
      }
    },

    // MODULE 5
    {
      id: 'java-5-1',
      slug: 'arraylist-creating-looping-common-methods',
      moduleNumber: 5,
      lessonNumberInModule: 1,
      title: {
        en: '5.1 ArrayList — creating, looping, common methods',
        km: '៥.១ ArrayList — ការបង្កើត ការទាញប្រើ និង Methods សំខាន់ៗ'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: '`ArrayList<T>` is Java\'s standard dynamic resizable array. Use `.add()`, `.get()`, `.remove()`, `.size()`, and enhanced for-loops.',
        km: '`ArrayList<T>` ជា Dynamic resizable array ផ្លូវការរបស់ Java។ ប្រើប្រាស់ `.add()`, `.get()`, `.remove()`, `.size()`។'
      },
      tutorial: {
        en: 'import java.util.ArrayList;\nArrayList<String> books = new ArrayList<>();\nbooks.add("Clean Code");\nbooks.add("Refactoring");\nfor (String book : books) {\n    System.out.println("Book: " + book);\n}',
        km: 'import java.util.ArrayList;\nArrayList<String> books = new ArrayList<>();\nbooks.add("Clean Code");\nbooks.add("Refactoring");\nfor (String book : books) {\n    System.out.println("សៀវភៅ: " + book);\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>5.1 Java ArrayList</h3><p>Book: Clean Code<br>Book: Refactoring</p></body></html>`
      }
    },
    {
      id: 'java-5-2',
      slug: 'hashmap-key-value-data',
      moduleNumber: 5,
      lessonNumberInModule: 2,
      title: {
        en: '5.2 HashMap — key/value data',
        km: '៥.២ HashMap — ទិន្នន័យ Key/Value'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: '`HashMap<K, V>` stores key-value pairs for constant-time lookup `O(1)`. Access values with `.put(key, val)`, `.get(key)`, and `.getOrDefault()`.',
        km: '`HashMap<K, V>` រក្សាទុកទិន្នន័យ Key-Value សម្រាប់ការស្វែងរកលឿនបំផុត `O(1)`។ ប្រើប្រាស់ `.put()`, `.get()`, `.getOrDefault()`។'
      },
      tutorial: {
        en: 'import java.util.HashMap;\nHashMap<String, Integer> userScores = new HashMap<>();\nuserScores.put("Seyha", 95);\nSystem.out.println("Score: " + userScores.getOrDefault("Seyha", 0));',
        km: 'import java.util.HashMap;\nHashMap<String, Integer> userScores = new HashMap<>();\nuserScores.put("Seyha", 95);\nSystem.out.println("ពិន្ទុ: " + userScores.getOrDefault("Seyha", 0));'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>5.2 Java HashMap</h3><p>Score: 95</p></body></html>`
      }
    },
    {
      id: 'java-5-3',
      slug: 'hashset-unique-values',
      moduleNumber: 5,
      lessonNumberInModule: 3,
      title: {
        en: '5.3 HashSet — unique values',
        km: '៥.៣ HashSet — ទិន្នន័យមិនជាន់គ្នា'
      },
      durationMinutes: 16,
      difficulty: 'Beginner',
      explanation: {
        en: '`HashSet<T>` prevents duplicate entries, making it ideal for checking membership (`.contains()`) or maintaining unique collection items.',
        km: '`HashSet<T>` ការពារធាតុជាន់គ្នា ស័ក្តិសមបំផុតសម្រាប់ការពិនិត្យមើលវត្តមានធាតុ (`.contains()`) និងរក្សាទុកទិន្នន័យមិនស្ទួន។'
      },
      tutorial: {
        en: 'import java.util.HashSet;\nHashSet<String> categories = new HashSet<>();\ncategories.add("Mobile");\ncategories.add("Mobile"); // Ignored!\nSystem.out.println("Count: " + categories.size());',
        km: 'import java.util.HashSet;\nHashSet<String> categories = new HashSet<>();\ncategories.add("Mobile");\ncategories.add("Mobile"); // មិនរាប់ស្ទួន!\nSystem.out.println("ចំនួន: " + categories.size());'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>5.3 Java HashSet</h3><p>Count: 1</p></body></html>`
      }
    },
    {
      id: 'java-5-4',
      slug: 'practice-word-frequency-counter',
      moduleNumber: 5,
      lessonNumberInModule: 4,
      title: {
        en: '5.4 Practice: word frequency counter',
        km: '៥.៤ អនុវត្ត: កម្មវិធីរាប់ពាក្យស្ទួនក្នុង Java'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Combine `String.split()` with `HashMap.getOrDefault()` to construct a word frequency counter program.',
        km: 'បូកបញ្ចូល `String.split()` ជាមួយ `HashMap.getOrDefault()` ដើម្បីបង្កើតកម្មវិធីរាប់ចំនួនពាក្យស្ទួន។'
      },
      tutorial: {
        en: 'String text = "android java android kotlin java android";\nHashMap<String, Integer> map = new HashMap<>();\nfor (String word : text.split(" ")) {\n    map.put(word, map.getOrDefault(word, 0) + 1);\n}\nSystem.out.println(map);',
        km: 'String text = "android java android kotlin java android";\nHashMap<String, Integer> map = new HashMap<>();\nfor (String word : text.split(" ")) {\n    map.put(word, map.getOrDefault(word, 0) + 1);\n}\nSystem.out.println(map);'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>5.4 Frequency Map</h3><p>{kotlin=1, java=2, android=3}</p></body></html>`
      }
    },

    // MODULE 6
    {
      id: 'java-6-1',
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
        en: 'Java popularized Object-Oriented Programming. Classes define blueprints, constructors initialize state with `new ClassName()`, and fields store object data.',
        km: 'Java ធ្វើឱ្យ OOP មានប្រជាប្រិយភាព។ Class គឺជា Blueprint, Constructor ប្រើបង្កើត Object ជាមួយ `new ClassName()`។'
      },
      tutorial: {
        en: 'public class Student {\n    String name;\n    int age;\n    public Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\nStudent s1 = new Student("Dara", 22);',
        km: 'public class Student {\n    String name;\n    int age;\n    public Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\nStudent s1 = new Student("ដារ៉ា", 22);'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.1 Java Constructor</h3><p>Student: Dara (Age 22)</p></body></html>`
      }
    },
    {
      id: 'java-6-2',
      slug: 'inheritance-with-extends-and-super',
      moduleNumber: 6,
      lessonNumberInModule: 2,
      title: {
        en: '6.2 Inheritance with extends and super',
        km: '៦.២ Inheritance ជាមួយ extends និង super'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Classes inherit from parent classes using `extends`. Call parent constructors with `super(...)` and override methods with `@Override`.',
        km: 'Class អាចស្នងត្រកូលពី Parent class ដោយប្រើ `extends`។ ហៅ Parent constructor ដោយ `super(...)` និង `@Override` method។'
      },
      tutorial: {
        en: 'class Animal {\n    void speak() { System.out.println("Animal sound"); }\n}\nclass Dog extends Animal {\n    @Override\n    void speak() { System.out.println("Woof woof!"); }\n}',
        km: 'class Animal {\n    void speak() { System.out.println("សំឡេងសត្វ"); }\n}\nclass Dog extends Animal {\n    @Override\n    void speak() { System.out.println("កុង កុង!"); }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>6.2 Class Inheritance</h3><p>Dog: Woof woof!</p></body></html>`
      }
    },
    {
      id: 'java-6-3',
      slug: 'interfaces-and-abstract-classes',
      moduleNumber: 6,
      lessonNumberInModule: 3,
      title: {
        en: '6.3 Interfaces and abstract classes',
        km: '៦.៣ Interfaces និង abstract classes'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: '`interface` defines contracts implemented via `implements`. `abstract class` provides partial implementation and cannot be directly instantiated.',
        km: '`interface` កំណត់កិច្ចសន្យាដោយប្រើ `implements`។ `abstract class` ផ្តល់ការអនុវត្តផ្នែកខ្លះ និងមិនអាចបង្កើត Object ដោយផ្ទាល់ឡើយ។'
      },
      tutorial: {
        en: 'interface Clickable {\n    void onClick();\n}\nclass Button implements Clickable {\n    public void onClick() { System.out.println("Button Clicked!"); }\n}',
        km: 'interface Clickable {\n    void onClick();\n}\nclass Button implements Clickable {\n    public void onClick() { System.out.println("ចុចលើ Button!"); }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>6.3 Java Interface</h3><p>Button Clicked!</p></body></html>`
      }
    },
    {
      id: 'java-6-4',
      slug: 'encapsulation-with-getters-and-setters',
      moduleNumber: 6,
      lessonNumberInModule: 4,
      title: {
        en: '6.4 Encapsulation with getters and setters',
        km: '៦.៤ Encapsulation ជាមួយ getters និង setters'
      },
      durationMinutes: 18,
      difficulty: 'Beginner',
      explanation: {
        en: 'Protect internal object state by marking fields `private` and exposing public getter and setter methods with validation logic.',
        km: 'រក្សាសុវត្ថិភាពទិន្នន័យ Object ដោយកំណត់ `private` លើ fields ហើយផ្តល់ `getters` និង `setters` សម្រាប់កែប្រែ។'
      },
      tutorial: {
        en: 'public class BankAccount {\n    private double balance;\n    public double getBalance() { return balance; }\n    public void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n}',
        km: 'public class BankAccount {\n    private double balance;\n    public double getBalance() { return balance; }\n    public void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>6.4 Encapsulation</h3><p>Balance: $250.00</p></body></html>`
      }
    },
    {
      id: 'java-6-5',
      slug: 'practice-class-hierarchy-vehicle',
      moduleNumber: 6,
      lessonNumberInModule: 5,
      title: {
        en: '6.5 Practice: build a small class hierarchy (Vehicle → Car/Motorbike)',
        km: '៦.៥ អនុវត្ត: បង្កើតរចនាសម្ព័ន្ធ Class Hierarchy (Vehicle → Car/Motorbike)'
      },
      durationMinutes: 22,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Construct a complete Object-Oriented hierarchy with a base `Vehicle` class, child `Car` and `Motorbike` classes, and method polymorphism.',
        km: 'សាងសង់រចនាសម្ព័ន្ធ OOP ពេញលេញជាមួយ `Vehicle` base class, `Car` និង `Motorbike` child classes ព្រមទាំង Polymorphism។'
      },
      tutorial: {
        en: 'abstract class Vehicle {\n    abstract void startEngine();\n}\nclass Car extends Vehicle {\n    void startEngine() { System.out.println("Car engine vroom!"); }\n}',
        km: 'abstract class Vehicle {\n    abstract void startEngine();\n}\nclass Car extends Vehicle {\n    void startEngine() { System.out.println("បញ្ឆេះម៉ាស៊ីនឡាន!"); }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>6.5 Vehicle Hierarchy</h3><p>Car engine vroom!</p></body></html>`
      }
    },

    // MODULE 7
    {
      id: 'java-7-1',
      slug: 'understanding-nullpointerexception',
      moduleNumber: 7,
      lessonNumberInModule: 1,
      title: {
        en: "7.1 Understanding NullPointerException and why it's so common in Java",
        km: '៧.១ ការយល់ដឹងពី NullPointerException និងមូលហេតុដែលវាកើតឡើងច្រើនក្នុង Java'
      },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Java lacks built-in null safety. Calling methods on a `null` reference throws a `NullPointerException` (NPE). Defensive checking is required.',
        km: 'Java គ្មានប្រព័ន្ធការពារ null-safety ក្នុងស្ថាបត្យកម្មភាសាឡើយ។ ការហៅ Method លើ `null` នឹងបង្កជា `NullPointerException` (NPE)។'
      },
      tutorial: {
        en: 'String nickname = null;\nif (nickname != null) {\n    System.out.println(nickname.length());\n} else {\n    System.out.println("No nickname set.");\n}',
        km: 'String nickname = null;\nif (nickname != null) {\n    System.out.println(nickname.length());\n} else {\n    System.out.println("មិនទាន់កំណត់ឈ្មោះហៅក្រៅ។");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f43f5e; padding:20px; font-family:monospace;"><h3>7.1 NullPointerException Check</h3><p>No nickname set.</p></body></html>`
      }
    },
    {
      id: 'java-7-2',
      slug: 'try-catch-finally-custom-exceptions',
      moduleNumber: 7,
      lessonNumberInModule: 2,
      title: {
        en: '7.2 try/catch/finally and custom exceptions',
        km: '៧.២ try/catch/finally និង Custom exceptions'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Catch runtime exceptions using `try { ... } catch (Exception e) { ... } finally { ... }` blocks to ensure application stability.',
        km: 'ចាប់រាល់ Runtime Exceptions ដោយប្រើប្រាស់ `try { ... } catch (Exception e) { ... } finally { ... }` ដើម្បីរក្សាស្ថេរភាពកម្មវិធី។'
      },
      tutorial: {
        en: 'try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println("Cannot divide by zero!");\n} finally {\n    System.out.println("Cleanup completed.");\n}',
        km: 'try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println("មិនអាចចែកនឹងសូន្យបានទេ!");\n} finally {\n    System.out.println("សម្អាតទិន្នន័យរួចរាល់។");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#f97316; padding:20px; font-family:monospace;"><h3>7.2 Try Catch Block</h3><p>Cannot divide by zero!</p></body></html>`
      }
    },
    {
      id: 'java-7-3',
      slug: 'optional-java-partial-null-safety',
      moduleNumber: 7,
      lessonNumberInModule: 3,
      title: {
        en: "7.3 Optional<T> — Java's partial answer to null safety",
        km: '៧.៣ Optional<T> — ដំណោះស្រាយផ្នែកខ្លះរបស់ Java សម្រាប់ Null Safety'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Java 8 introduced `Optional<T>` to encapsulate values that may or may not be present, offering methods like `.orElse()` and `.ifPresent()`.',
        km: 'Java 8 បានណែនាំ `Optional<T>` សម្រាប់រក្សាទុកតម្លៃដែលអាចមានឬគ្មាន ដោយផ្តល់ជូន `.orElse()` និង `.ifPresent()`។'
      },
      tutorial: {
        en: 'import java.util.Optional;\nOptional<String> name = Optional.ofNullable(null);\nSystem.out.println("Hello, " + name.orElse("Guest"));',
        km: 'import java.util.Optional;\nOptional<String> name = Optional.ofNullable(null);\nSystem.out.println("សួស្តី, " + name.orElse("Guest"));'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>7.3 Java Optional</h3><p>Hello, Guest</p></body></html>`
      }
    },
    {
      id: 'java-7-4',
      slug: 'checked-vs-unchecked-exceptions',
      moduleNumber: 7,
      lessonNumberInModule: 4,
      title: {
        en: '7.4 Checked vs unchecked exceptions',
        km: '៧.៤ Checked ប៉ះ Unchecked Exceptions'
      },
      durationMinutes: 18,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Checked exceptions (like `IOException`) must be declared in method signatures (`throws Exception`) or caught. Unchecked exceptions extend `RuntimeException`.',
        km: 'Checked exceptions (`IOException`) ត្រូវតែប្រកាសក្នុង Method signature (`throws`) ឬ Catch។ Unchecked exceptions ជា subclass នៃ `RuntimeException`។'
      },
      tutorial: {
        en: 'public static void readFile() throws java.io.IOException {\n    throw new java.io.IOException("File not found");\n}',
        km: 'public static void readFile() throws java.io.IOException {\n    throw new java.io.IOException("រកមិនឃើញ File");\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#eab308; padding:20px; font-family:monospace;"><h3>7.4 Checked Exception</h3><p>Throws IOException at compile time</p></body></html>`
      }
    },
    {
      id: 'java-7-5',
      slug: 'practice-handle-simulated-missing-data',
      moduleNumber: 7,
      lessonNumberInModule: 5,
      title: {
        en: '7.5 Practice: handle a simulated "missing data" scenario safely',
        km: '៧.៥ អនុវត្ត: ការដោះស្រាយករណីអវត្តមានទិន្នន័យដោយសុវត្ថិភាព'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Simulate network API responses with missing fields, handling potential null values using defensive `if` checks and fallback defaults.',
        km: 'Simulate ទិន្នន័យបានពី API ដែលអាចខ្វះ Field ដោយប្រើការពិនិត្យ null និងផ្តល់តម្លៃជំនួស (Fallback)។'
      },
      tutorial: {
        en: 'public static String parseUserEmail(String jsonInput) {\n    if (jsonInput == null || jsonInput.isEmpty()) {\n        return "no-reply@domain.com";\n    }\n    return jsonInput;\n}',
        km: 'public static String parseUserEmail(String jsonInput) {\n    if (jsonInput == null || jsonInput.isEmpty()) {\n        return "no-reply@domain.com";\n    }\n    return jsonInput;\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>7.5 Defensive Parsing</h3><p>Fallback: no-reply@domain.com</p></body></html>`
      }
    },

    // MODULE 8
    {
      id: 'java-8-1',
      slug: 'planning-cli-library-manager',
      moduleNumber: 8,
      lessonNumberInModule: 1,
      title: {
        en: '8.1 Planning the CLI Library Manager (data model, features)',
        km: '៨.១ រៀបចំផែនការ CLI Library Manager (Data model, មុខងារ)'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Design the `Book` data model class, encapsulate fields, plan the `ArrayList<Book>` collection store, and outline user menu commands.',
        km: 'រចនា `Book` data model class, គ្រប់គ្រង Fields, រៀបចំ `ArrayList<Book>` និងគ្រោងបញ្ជី Menu សម្រាប់អ្នកប្រើប្រាស់។'
      },
      tutorial: {
        en: '// Plan:\n// Book class: title, author, isBorrowed\n// Library ArrayList<Book>\n// Menu switch: 1. Add, 2. View, 3. Borrow/Return, 4. Search, 5. Exit',
        km: '// ផែនការ:\n// Book class: title, author, isBorrowed\n// Library ArrayList<Book>\n// Menu switch: 1. Add, 2. View, 3. Borrow/Return, 4. Search, 5. Exit'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#38bdf8; padding:20px; font-family:monospace;"><h3>8.1 Capstone Design</h3><p>Library Architecture Planned</p></body></html>`
      }
    },
    {
      id: 'java-8-2',
      slug: 'building-cli-library-manager',
      moduleNumber: 8,
      lessonNumberInModule: 2,
      title: {
        en: '8.2 Building the CLI Library Manager (full guided build)',
        km: '៨.២ ការសាងសង់ CLI Library Manager (ការណែនាំបង្កើតពេញលេញ)'
      },
      durationMinutes: 35,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Assemble the entire Java command-line Library Manager application with interactive Scanner input, try/catch handling, and book filtering.',
        km: 'ប្រមូលផ្តុំកម្មវិធី Java CLI Library Manager ទាំងមូលជាមួយ Scanner, try/catch និងការ Filter សៀវភៅ។'
      },
      tutorial: {
        en: 'import java.util.ArrayList;\nimport java.util.List;\n\npublic class LibraryApp {\n    public static void main(String[] args) {\n        List<String> books = new ArrayList<>();\n        books.add("Clean Code");\n        System.out.println("Library initialized with " + books.size() + " book.");\n    }\n}',
        km: 'import java.util.ArrayList;\nimport java.util.List;\n\npublic class LibraryApp {\n    public static void main(String[] args) {\n        List<String> books = new ArrayList<>();\n        books.add("Clean Code");\n        System.out.println("បណ្ណាល័យបង្កើតឡើងជាមួយសៀវភៅ " + books.size() + " ក្បាល។");\n    }\n}'
      },
      starterCode: {
        html: `<!DOCTYPE html><html><body style="background:#0b1120; color:#4ade80; padding:20px; font-family:monospace;"><h3>8.2 Complete CLI Build</h3><p>Library Initialized Successfully!</p></body></html>`
      }
    }
  ]
};
