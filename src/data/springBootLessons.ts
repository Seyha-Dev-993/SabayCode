import { Topic, ReferenceItem, Quiz, MiniProject } from '../types';

export const springBootTopics: Topic[] = [
  {
    "id": "sb-java-refresher",
    "title": {
      "en": "1. Java Refresher",
      "km": "១. ការរំលឹកភាសា Java ឡើងវិញ"
    },
    "lessons": [
      {
        "id": "sb-java-syntax",
        "title": {
          "en": "Java Syntax Quick Review — Classes, Objects & Methods",
          "km": "ការរំលឹក Java Syntax — Classes, Objects និង Methods"
        },
        "content": {
          "en": "### Java Syntax Quick Review — Classes, Objects & Methods\n\n**Difficulty:** Intermediate | **Estimated Time:** 8 min read\n\n#### Overview & Why It Matters\nJava is a strongly typed, object-oriented programming language that serves as the core runtime foundation for Spring Boot applications. Understanding class definitions, instance creation, fields, constructors, and encapsulation methods is crucial before writing backend controllers and services. In a production Spring Boot application, every domain model (such as a User, Payment, or Order) is backed by a structured Java class with clean accessors and mutators.\n\n#### Core Concepts & Best Practices\n* **Class Blueprint:** Defines state (private fields) and behavior (public methods).\n* **Constructor Initialization:** Ensures mandatory fields are supplied when an object is instantiated on the Java Virtual Machine (JVM) heap.\n* **Encapsulation:** Protects internal class state from unauthorized direct modifications, providing controlled access via getter and setter methods or business logic wrappers.\n\n#### Cambodian Payment Account Example\n```java\npublic class PaymentAccount {\n    private String accountHolder;\n    private String accountNumber;\n    private double balanceUsd;\n\n    public PaymentAccount(String accountHolder, String accountNumber, double initialBalance) {\n        this.accountHolder = accountHolder;\n        this.accountNumber = accountNumber;\n        this.balanceUsd = initialBalance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            this.balanceUsd += amount;\n            System.out.println(\"[ABA/Wing System] Deposited $\" + amount + \" to account: \" + accountNumber);\n        }\n    }\n\n    public double getBalanceUsd() {\n        return balanceUsd;\n    }\n}\n```\n\n#### Terminal Execution Preview\n```text\n=== SabayCode Java Refresher Execution ===\n[ABA/Wing System] Deposited $100.0 to account: 000-123-890\nAccount Holder: Sophea Chan\nUpdated Balance: $350.0\nStatus: ACTIVE\n```",
          "km": "### ការរំលឹក Java Syntax ឡើងវិញ — Classes, Objects និង Methods\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** ៨ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nJava គឺជាភាសាសរសេរកូដ Object-Oriented និងមាន Type ច្បាស់លាស់ ដែលជាគ្រឹះយ៉ាងរឹងមាំសម្រាប់ដំណើរការ Spring Boot Framework។ ការយល់ដឹងអំពីការកំណត់ Class, ការបង្កើត Object, ជម្រើស Field, Constructor និង Method Encapsulation គឺជាកត្តាចាំបាច់បំផុតមុនពេលសរសេរ Controller និង Service សម្រាប់ប្រព័ន្ធ Backend។ នៅក្នុងប្រព័ន្ធ Spring Boot ជាក់ស្តែង Model នីមួយៗ (ដូចជា User, Payment, ឬ Order) ត្រូវបានបង្កើតឡើងចេញពី Java Class ដែលមានការគ្រប់គ្រងទិន្នន័យត្រឹមត្រូវ។\n\n#### គំនិតសំខាន់ៗ និងស្តង់ដារអនុវត្ត\n* **Class Blueprint:** កំណត់ State (Private Fields) និង Behavior (Public Methods)។\n* **Constructor Initialization:** ធានាថាទិន្នន័យចាំបាច់ត្រូវបានបញ្ចូលត្រឹមត្រូវពេល Object ត្រូវបានបង្កើតឡើង។\n* **Encapsulation:** ការពារ State ខាងក្នុង Class មិនឱ្យមានការកែប្រែដោយផ្ទាល់ ដោយផ្តល់ការផ្លាស់ប្តូរតាមរយៈ Getter/Setter ឬ Method ផ្លូវការ។\n\n#### ឧទាហរណ៍ គណនីទូទាត់ប្រាក់នៅកម្ពុជា\n```java\npublic class PaymentAccount {\n    private String accountHolder;\n    private String accountNumber;\n    private double balanceUsd;\n\n    public PaymentAccount(String accountHolder, String accountNumber, double initialBalance) {\n        this.accountHolder = accountHolder;\n        this.accountNumber = accountNumber;\n        this.balanceUsd = initialBalance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            this.balanceUsd += amount;\n            System.out.println(\"[ប្រព័ន្ធ ABA/Wing] បានដាក់ប្រាក់ $\" + amount + \" ចូលគណនី: \" + accountNumber);\n        }\n    }\n\n    public double getBalanceUsd() {\n        return balanceUsd;\n    }\n}\n```\n\n#### Terminal Execution Preview\n```text\n=== ការសាកល្បងដំណើរការកូដ Java SabayCode ===\n[ប្រព័ន្ធ ABA/Wing] បានដាក់ប្រាក់ $100.0 ចូលគណនី: 000-123-890\nម្ចាស់គណនី: សុភា ចាន់\nតុល្យភាពថ្មី: $350.0\nស្ថានភាព: ដំណើរការធម្មតា\n```"
        },
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"=== SabayCode Java Refresher ===\");\n        PaymentAccount acc = new PaymentAccount(\"Sophea Chan\", \"000-123-890\", 250.0);\n        acc.deposit(100.0);\n        System.out.println(\"Current Balance: $\" + acc.getBalanceUsd());\n    }\n}"
      },
      {
        "id": "sb-oop-basics",
        "title": {
          "en": "OOP Basics — Inheritance, Interfaces & Polymorphism",
          "km": "គ្រឹះ OOP — Inheritance, Interfaces និង Polymorphism"
        },
        "content": {
          "en": "### OOP Basics — Inheritance, Interfaces & Polymorphism\n\n**Difficulty:** Intermediate | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nObject-Oriented Programming (OOP) principles like Inheritance, Interfaces, and Polymorphism form the architectural backbone of Spring Boot applications. Spring achieves loose coupling and testability by relying heavily on interface-driven development. Rather than hardcoding concrete service implementations inside controllers, developers declare interfaces and allow Spring's Inversion of Control (IoC) container to inject the active implementation seamlessly.\n\n#### Core Concepts & Best Practices\n* **Interfaces:** Define clear execution contracts without binding code to specific implementations.\n* **Polymorphism:** Allows treating various child implementations interchangeably through a shared parent interface or class.\n* **Loose Coupling:** Swapping one implementation (e.g., ABA KHQR payment) with another (e.g., Wing Pay) without changing core business controllers.\n\n#### Cambodian Payment Gateway Example\n```java\npublic interface PaymentGateway {\n    boolean processPayment(String merchantId, double amountUsd);\n}\n\npublic class AbaPayGateway implements PaymentGateway {\n    @Override\n    public boolean processPayment(String merchantId, double amountUsd) {\n        System.out.println(\"Processing ABA KHQR payment of $\" + amountUsd + \" for merchant: \" + merchantId);\n        return true;\n    }\n}\n```\n\n#### Terminal Execution Preview\n```text\n=== SabayCode OOP Polymorphism Demo ===\nProcessing ABA KHQR payment of $15.5 for merchant: SABAYCODE_MERCHANT_01\nTransaction Status: SUCCESS (TxID: TXN-882910)\n```",
          "km": "### គ្រឹះ OOP — Inheritance, Interfaces និង Polymorphism\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** ១០ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nគោលការណ៍ Object-Oriented Programming (OOP) ដូចជា Inheritance, Interfaces និង Polymorphism គឺជាឆ្អឹងខ្នងនៃស្ថាបត្យកម្ម Spring Boot Framework។ Spring សម្រេចបាននូវការកាត់បន្ថយការបិទភ្ជប់កូដយ៉ាងតឹងរ៉ឹង (Loose Coupling) និងភាពងាយស្រួលក្នុងការធ្វើតេស្ត ដោយសារការអភិវឌ្ឍផ្អែកលើ Interface។ ជំនួសឱ្យការតភ្ជាប់ Class ផ្ទាល់នៅក្នុង Controller អ្នកអភិវឌ្ឍន៍គ្រាន់តែប្រកាស Interface ហើយទុកឱ្យ Spring Inversion of Control (IoC) Container ចាក់បញ្ចូល (Inject) Implementation ដែលត្រូវការដោយស្វ័យប្រវត្តិ។\n\n#### គំនិតសំខាន់ៗ និងស្តង់ដារអនុវត្ត\n* **Interfaces:** កំណត់កិច្ចសន្យា (Execution Contract) ដោយមិនទាក់ទងនឹងលម្អិតកូដអនុវត្តឡើយ។\n* **Polymorphism:** អនុញ្ញាតឱ្យប្រើប្រាស់ Implementation ច្រើនខុសៗគ្នាដោយឆ្លងកាត់ Interface រួមមួយ។\n* **Loose Coupling:** ផ្លាស់ប្តូរការទូទាត់ប្រាក់ (ឧទាហរណ៍ ABA KHQR ទៅជា Wing Pay) ដោយមិនបាច់កែប្រែកូដនៅក្នុង Business Controller ឡើយ។\n\n#### Terminal Execution Preview\n```text\n=== ការបង្ហាញកូដ OOP Polymorphism ===\nកំពុងដំណើរការទូទាត់ ABA KHQR ចំនួន $15.5 សម្រាប់អាជីវករ: SABAYCODE_MERCHANT_01\nស្ថានភាពប្រតិបត្តិការ: ជោគជ័យ (លេខកូដ: TXN-882910)\n```"
        },
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        PaymentGateway gateway = new AbaPayGateway();\n        gateway.processPayment(\"SABAYCODE_MERCHANT_01\", 15.50);\n    }\n}"
      },
      {
        "id": "sb-collections",
        "title": {
          "en": "Collections Quick Review — List, Map & Set",
          "km": "ការរំលឹក Collections — List, Map និង Set"
        },
        "content": {
          "en": "### Collections Quick Review — List, Map & Set\n\n**Difficulty:** Intermediate | **Estimated Time:** 8 min read\n\n#### Overview & Why It Matters\nThe Java Collections Framework provides standardized data structures for managing groups of objects in memory. In Spring Boot REST APIs, Java Collections directly map to JSON representations: a `List` serializes into a JSON Array `[...]`, a `Map` serializes into a JSON Object `{...}`, and a `Set` enforces uniqueness for items such as user role permissions or tag collections. Mastery of Java Collections is essential for manipulating, filtering, and streaming database query results in service layers.\n\n#### Core Concepts & Best Practices\n* **List (`ArrayList`):** Ordered collection that allows duplicate elements.\n* **Map (`HashMap`):** Key-value dictionary providing fast lookup speed.\n* **Set (`HashSet`):** Unordered collection that strictly prevents duplicate values.\n\n#### Terminal Execution Preview\n```text\n=== SabayCode Collections Review Output ===\nAvailable Provinces: [Phnom Penh, Siem Reap, Battambang]\nStudent STU-101 Enrolled Course: Spring Boot Enterprise\nAssigned User Roles: [ROLE_STUDENT, ROLE_ADMIN]\n```",
          "km": "### ការរំលឹក Collections — List, Map និង Set\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** ៨ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nJava Collections Framework ផ្តល់នូវរចនាសម្ព័ន្ធទិន្នន័យស្តង់ដារសម្រាប់គ្រប់គ្រងក្រុមនៃ Object នៅក្នុង Memory។ នៅក្នុង Spring Boot REST APIs ក្រុម Collections ទាំងនេះបំប្លែងដោយផ្ទាល់ទៅជាទម្រង់ JSON៖ `List` បំប្លែងទៅជា JSON Array `[...]`, `Map` បំប្លែងទៅជា JSON Object `{...}` ហើយ `Set` ការពារមិនឱ្យមានធាតុជាន់គ្នាសម្រាប់កំណត់ Role សិទ្ធិប្រើប្រាស់។\n\n#### Terminal Execution Preview\n```text\n=== លទ្ធផលនៃការបង្ហាញ Collections ===\nខេត្តដែលមានក្នុងប្រព័ន្ធ: [Phnom Penh, Siem Reap]\nវគ្គសិក្សារបស់សិស្ស STU-101: Spring Boot Enterprise\n```"
        },
        "starterCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> topics = Arrays.asList(\"Java Syntax\", \"OOP\", \"Collections\", \"Annotations\");\n        topics.forEach(t -> System.out.println(\"Lesson: \" + t));\n    }\n}"
      },
      {
        "id": "sb-annotations",
        "title": {
          "en": "Java Annotations — What They Are & Why Spring Relies on Them",
          "km": "Java Annotations — អ្វីទៅជា Annotations និងមូលហេតុដែល Spring ពឹងផ្អែកលើវា"
        },
        "content": {
          "en": "### Java Annotations — What They Are & Why Spring Relies on Them\n\n**Difficulty:** Intermediate | **Estimated Time:** 9 min read\n\n#### Overview & Why It Matters\nAnnotations are metadata markers introduced in Java 5 that begin with the `@` symbol. They attach programmatic metadata directly to classes, fields, methods, or parameters. Spring Boot relies extensively on annotations to replace thousands of lines of legacy XML configuration files. Annotations tell Spring's reflection runtime how to auto-detect components, map HTTP REST routes, inject database dependencies, enforce transactional boundaries, and apply security rules automatically.\n\n#### Terminal Execution Preview\n```text\n=== Spring Annotation Scanner Output ===\nScanning package 'com.sabaycode.app'...\n[FOUND BEAN] Registered @RestController: StudentController\n[FOUND BEAN] Registered @Service: StudentService\n[SPRING IOC CONTAINER] Initialized 14 Spring Beans successfully.\n```",
          "km": "### Java Annotations — អ្វីទៅជា Annotations និងមូលហេតុដែល Spring ពឹងផ្អែកលើវា\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** ៩ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nAnnotations គឺជា Metadata markers នៅក្នុង Java ដែលចាប់ផ្តើមដោយសញ្ញា `@`។ វាភ្ជាប់ព័ត៌មានបន្ថែមទៅកាន់ Classes, Fields, Methods, ឬ Parameters ដោយផ្ទាល់។ Spring Boot ពឹងផ្អែកយ៉ាងខ្លាំងលើ Annotations ដើម្បីជំនួសកូដ XML ដែលស្មុគស្មាញរាប់ពាន់បន្ទាត់។ Annotations ប្រាប់ទៅកាន់ Spring Runtime អំពីរបៀបស្វែងរក Component ដោយស្វ័យប្រវត្តិ, ភ្ជាប់ HTTP REST Routes, ចាក់បញ្ចូល Database Dependencies, និងរៀបចំប្រព័ន្ធសុវត្ថិភាព។\n\n#### Terminal Execution Preview\n```text\n=== លទ្ធផលនៃការស្កាន Spring Annotation ===\nកំពុងស្កាន Package 'com.sabaycode.app'...\n[រកឃើញ BEAN] បានចុះឈ្មោះ @RestController: StudentController\n[រកឃើញ BEAN] បានចុះឈ្មោះ @Service: StudentService\n[SPRING IOC CONTAINER] បានដំឡើង 14 Spring Beans ដោយជោគជ័យ។\n```"
        },
        "starterCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Spring Boot uses annotations like @RestController and @Service for auto-configuration!\");\n    }\n}"
      }
    ]
  },
  {
    "id": "sb-fundamentals",
    "title": {
      "en": "2. Spring & Spring Boot Fundamentals",
      "km": "២. មូលដ្ឋានគ្រឹះ Spring & Spring Boot"
    },
    "lessons": [
      {
        "id": "sb-spring-vs-springboot",
        "title": {
          "en": "What Is Spring vs Spring Boot",
          "km": "ប្រៀបធៀបរវាង Spring និង Spring Boot"
        },
        "content": {
          "en": "### What Is Spring vs Spring Boot\n\n**Difficulty:** Beginner | **Estimated Time:** 8 min read\n\n#### Overview & Why It Matters\nUnderstanding the distinction between the **Spring Framework** and **Spring Boot** is fundamental for backend engineers. The classic Spring Framework provides core Dependency Injection and enterprise features, but historically required complex XML configuration files, manual web application server deployment (like Apache Tomcat), and tedious library version management. Spring Boot was created to solve these setup frictions by offering opinonated defaults, embedded web servers, and automatic configuration.\n\n#### Terminal Execution Preview\n```text\n  .   ____          _            __ _ _\n /\\\\\\\\ / ___'_ __ _ _(_)_ __  __ _ \\\\ \\\\ \\\\ \\\\\n( ( )\\\\___ | '_ | '_| | '_ \\\\/ _` | \\\\ \\\\ \\\\ \\\\\n \\\\\\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\\\__, | / / / /\n =========|_|==============|___/=/ / / /\n :: Spring Boot ::                (v3.2.2)\n\n[INFO] Started DemoApplication in 1.842 seconds (process running on port 8080)\n```",
          "km": "### ប្រៀបធៀបរវាង Spring និង Spring Boot\n\n**កម្រិត:** ដំបូង | **រយៈពេលអាន:** ៨ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការយល់ដឹងច្បាស់អំពីភាពខុសគ្នារវាង **Spring Framework** និង **Spring Boot** គឺជាគ្រឹះដំបូងបង្អស់សម្រាប់អ្នកអភិវឌ្ឍន៍ Backend។ Spring Framework ដើមផ្តល់នូវមុខងារ Dependency Injection និងគាំទ្រប្រព័ន្ធសហគ្រាស ប៉ុន្តែទាមទារការកំណត់ XML យ៉ាងស្មុគស្មាញ និងការដំឡើង Web Server ខាងក្រៅដោយដៃ។ Spring Boot ត្រូវបានបង្កើតឡើងដើម្បីដោះស្រាយបញ្ហាទាំងនេះ ដោយផ្តល់នូវស្តង់ដារលំនាំដើម, Embedded Web Servers និងការកំណត់ទិន្នន័យដោយស្វ័យប្រវត្តិ។\n\n#### Terminal Execution Preview\n```text\n  .   ____          _            __ _ _\n /\\\\\\\\ / ___'_ __ _ _(_)_ __  __ _ \\\\ \\\\ \\\\ \\\\\n( ( )\\\\___ | '_ | '_| | '_ \\\\/ _` | \\\\ \\\\ \\\\ \\\\\n \\\\\\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\\\__, | / / / /\n =========|_|==============|___/=/ / / /\n :: Spring Boot ::                (v3.2.2)\n\n[ព័ត៌មាន] បានចាប់ផ្តើម DemoApplication ក្នុងរយៈពេល 1.842 វិនាទី (Port 8080)\n```"
        },
        "starterCode": "package com.sabaycode.demo;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class DemoApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n}"
      },
      {
        "id": "sb-project-setup",
        "title": {
          "en": "Setting Up a Spring Boot Project (Spring Initializr & Structure)",
          "km": "ការបង្កើត និងរៀបចំ Spring Boot Project (Spring Initializr)"
        },
        "content": {
          "en": "### Setting Up a Spring Boot Project (Spring Initializr & Structure)\n\n**Difficulty:** Beginner | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nStarting a new backend service requires a clean, standard directory structure and modern build tool configuration (Maven or Gradle). **Spring Initializr** (`start.spring.io`) is the official initializer web tool provided by the Spring team. It generates ready-to-run project templates pre-configured with JDK versions, metadata, build plugins, and selected starter dependencies like Spring Web, Spring Data JPA, and PostgreSQL drivers.\n\n#### Terminal Execution Preview\n```text\n$ ./mvnw clean install\n[INFO] Scanning for projects...\n[INFO] Building sabaycode-backend 1.0.0-SNAPSHOT\n[INFO] Downloading dependencies from Maven Central...\n[INFO] BUILD SUCCESS\n[INFO] Total time: 12.420 s\n```",
          "km": "### ការបង្កើត និងរៀបចំ Spring Boot Project (Spring Initializr)\n\n**កម្រិត:** ដំបូង | **រយៈពេលអាន:** ១០ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការចាប់ផ្តើមបង្កើតប្រព័ន្ធ Backend ថ្មីទាមទារនូវរចនាសម្ព័ន្ធ Folder ស្តង់ដារ និងការកំណត់ Build Tools ដូចជា Maven ឬ Gradle។ **Spring Initializr** (`start.spring.io`) គឺជាឧបករណ៍ផ្លូវការដែលផ្តល់ដោយក្រុមការងារ Spring។ វាបង្កើតនូវ Project Starter ដោយមានកំណត់ JDK Version, Metadata, និង Dependencies ចាំបាច់ដូចជា Spring Web, Spring Data JPA, និង PostgreSQL Driver ដោយស្វ័យប្រវត្តិ។\n\n#### Terminal Execution Preview\n```text\n$ ./mvnw clean install\n[ព័ត៌មាន] កំពុងស្កានរក Projects...\n[ព័ត៌មាន] កំពុង Build sabaycode-backend 1.0.0-SNAPSHOT\n[ព័ត៌មាន] កំពុងទាញយក Dependencies ពី Maven Central...\n[ព័ត៌មាន] BUILD SUCCESS (ជោគជ័យ)\n[ព័ត៌មាន] រយៈពេលសរុប: 12.420 វិនាទី\n```"
        },
        "starterCode": "<!-- Maven pom.xml excerpt -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>"
      },
      {
        "id": "sb-entry-point",
        "title": {
          "en": "The App Entry Point — @SpringBootApplication",
          "km": "ចំណុចចាប់ផ្តើមនៃកម្មវិធី — @SpringBootApplication"
        },
        "content": {
          "en": "### The App Entry Point — @SpringBootApplication\n\n**Difficulty:** Beginner | **Estimated Time:** 7 min read\n\n#### Overview & Why It Matters\nEvery Spring Boot executable application has a primary class containing a standard Java `public static void main(String[] args)` method annotated with `@SpringBootApplication`. This single annotation is actually a powerful composite annotation that combines three essential Spring configurations: `@SpringBootConfiguration`, `@EnableAutoConfiguration`, and `@ComponentScan`. Executing this class boots the embedded web server, bootstraps the Spring Application Context, scans components, and starts serving incoming API traffic.\n\n#### Terminal Execution Preview\n```text\n[SabayCode Platform] Starting Spring Boot Server...\n2026-08-01 09:15:02.102 [main] INFO com.sabaycode.app.SabayCodeApplication - Starting SabayCodeApplication...\n2026-08-01 09:15:03.882 [main] INFO o.s.b.w.embedded.tomcat.TomcatWebServer - Tomcat initialized with port(s): 8080 (http)\n2026-08-01 09:15:04.101 [main] INFO com.sabaycode.app.SabayCodeApplication - Started SabayCodeApplication in 2.15 seconds\n```",
          "km": "### ចំណុចចាប់ផ្តើមនៃកម្មវិធី — @SpringBootApplication\n\n**កម្រិត:** ដំបូង | **រយៈពេលអាន:** ៧ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nគ្រប់កម្មវិធី Spring Boot ទាំងអស់ត្រូវតែមាន Class មេមួយដែលមាន Method `public static void main(String[] args)` និងមាន Annotation `@SpringBootApplication`។ Annotation តែមួយនេះគឺជាការបូកបញ្ចូននៃ Annotation ធំៗចំនួនបី៖ `@SpringBootConfiguration`, `@EnableAutoConfiguration`, និង `@ComponentScan`។ ការរត់ Class មួយនេះនឹងចាប់ផ្តើមដំណើរការ Embedded Tomcat Server, ស្កានរកមើល Components និងរៀបចំប្រព័ន្ធ API ដោយស្វ័យប្រវត្តិ។\n\n#### Terminal Execution Preview\n```text\n[ប្រព័ន្ធ SabayCode] កំពុងចាប់ផ្តើម Spring Boot Server...\n2026-08-01 09:15:02.102 [main] INFO com.sabaycode.app.SabayCodeApplication - កំពុងរត់ SabayCodeApplication...\n2026-08-01 09:15:03.882 [main] INFO o.s.b.w.embedded.tomcat.TomcatWebServer - Tomcat ត្រូវបានបើកលើ Port: 8080 (http)\n2026-08-01 09:15:04.101 [main] INFO com.sabaycode.app.SabayCodeApplication - បានចាប់ផ្តើមដោយជោគជ័យក្នុងរយៈពេល 2.15 វិនាទី\n```"
        },
        "starterCode": "package com.sabaycode.app;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class Application {\n    public static void main(String[] args) {\n        System.out.println(\"Starting Embedded Tomcat Server on Port 8080...\");\n        SpringApplication.run(Application.class, args);\n    }\n}"
      },
      {
        "id": "sb-di-ioc",
        "title": {
          "en": "Dependency Injection & Inversion of Control (IoC)",
          "km": "Dependency Injection និង Inversion of Control (IoC)"
        },
        "content": {
          "en": "### Dependency Injection & Inversion of Control (IoC)\n\n**Difficulty:** Intermediate | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nInversion of Control (IoC) is a core architectural pattern where the control of object creation, configuration, and lifecycle management is inverted from custom code to the Spring Framework container. Dependency Injection (DI) is the specific technique used to implement IoC. Instead of manually instantiating classes with the `new` keyword (e.g., `new EmailService()`), classes express their dependencies through constructors, and Spring injects managed beans automatically at runtime.\n\n#### Terminal Execution Preview\n```text\n=== Spring IoC Dependency Injection Test ===\n[SPRING CONTAINER] Injected 'NotificationService' instance into 'StudentController'\n[SMS Gateway] Sending message to +85512888999: Welcome to SabayCode Spring Boot!\n```",
          "km": "### Dependency Injection និង Inversion of Control (IoC)\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** ១០ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nInversion of Control (IoC) គឺជាគំរូស្ថាបត្យកម្មដែលគ្រប់គ្រងការបង្កើត Object និង Lifecycle របស់វា ដោយប្រគល់ភារកិច្ចនេះទៅឱ្យ Spring Framework Container ជាអ្នករៀបចំជំនួសវិញ។ Dependency Injection (DI) គឺជាបច្ចេកទេសជាក់ស្តែងដែលប្រើដើម្បីអនុវត្ត IoC។ ជំនួសឱ្យការប្រើពាក្យ `new` ដោយខ្លួនឯង (ឧ. `new EmailService()`) កូដគ្រាន់តែប្រកាសត្រូវការ Dependency តាមរយៈ Constructor ហើយ Spring នឹងចាក់បញ្ចូល (Inject) Bean នោះមកឱ្យដោយស្វ័យប្រវត្តិ។\n\n#### Terminal Execution Preview\n```text\n=== ការសាកល្បង Spring IoC Dependency Injection ===\n[SPRING CONTAINER] បាន Inject 'NotificationService' ចូលទៅក្នុង 'StudentController'\n[SMS Gateway] កំពុងផ្ញើសារទៅកាន់ +85512888999: សូមស្វាគមន៍មកកាន់ SabayCode Spring Boot!\n```"
        },
        "starterCode": "@Service\npublic class NotificationService {\n    public void sendSms(String phoneNumber, String message) {\n        System.out.println(\"Sending SMS via Cellcard/Smart gateway to \" + phoneNumber + \": \" + message);\n    }\n}"
      },
      {
        "id": "sb-beans-context",
        "title": {
          "en": "Spring Beans & Application Context",
          "km": "Spring Beans និង Application Context"
        },
        "content": {
          "en": "### Spring Beans & Application Context\n\n**Difficulty:** Intermediate | **Estimated Time:** 9 min read\n\n#### Overview & Why It Matters\nA **Spring Bean** is any Java object that is instantiated, assembled, and managed by the Spring IoC Container. The **Application Context** (represented by the `ApplicationContext` interface) is the central container environment that holds the bean factory, handles configuration loading, manages object lifecycles, and publishes application events. Developers mark classes as Spring Beans using component stereotyping annotations (`@Component`, `@Service`, `@Repository`, `@RestController`) or explicitly via `@Bean` factory methods inside `@Configuration` classes.\n\n#### Terminal Execution Preview\n```text\n=== Spring Application Context Inspection ===\nActive Profile: default\nTotal Beans Managed: 48\nCustom Bean Registered: restTemplate -> org.springframework.web.client.RestTemplate\nCustom Bean Registered: appVersion -> \"SabayCode Spring Boot v3.2.0 Enterprise\"\n```",
          "km": "### Spring Beans និង Application Context\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** ៩ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\n**Spring Bean** គឺជា Java Object ទាំងឡាយណាដែលត្រូវបានបង្កើត រៀបចំ និងគ្រប់គ្រងដោយ Spring IoC Container។ **Application Context** គឺជាបរិស្ថាន Container មេដែលរក្សាទុក Beans ទាំងអស់ គ្រប់គ្រងការទាញយក Configuration និងមើលថែ Lifecycle របស់ Object។ អ្នកអភិវឌ្ឍន៍កំណត់ Class ជា Spring Bean ដោយប្រើ Stereotype Annotations (`@Component`, `@Service`, `@Repository`, `@RestController`) ឬសរសេរ Method `@Bean` នៅក្នុង `@Configuration` Class។\n\n#### Terminal Execution Preview\n```text\n=== ការពិនិត្យមើល Spring Application Context ===\nActive Profile: default\nចំនួន Beans សរុប: 48\nបានចុះឈ្មោះ Bean ផ្ទាល់ខ្លួន: restTemplate\nបានចុះឈ្មោះ Bean ផ្ទាល់ខ្លួន: appVersion -> \"SabayCode Spring Boot v3.2.0 Enterprise\"\n```"
        },
        "starterCode": "@Configuration\npublic class AppConfig {\n    @Bean\n    public String appVersion() {\n        return \"SabayCode Spring Boot v3.2.0\";\n    }\n}"
      },
      {
        "id": "sb-configuration-basics",
        "title": {
          "en": "Configuration Basics — application.properties / application.yml",
          "km": "ការកំណត់ប្រព័ន្ធ — application.properties / application.yml"
        },
        "content": {
          "en": "### Configuration Basics — application.properties / application.yml\n\n**Difficulty:** Beginner | **Estimated Time:** 8 min read\n\n#### Overview & Why It Matters\nHardcoding configuration settings like database credentials, server ports, and third-party API keys directly into Java source files leads to major security vulnerabilities and deployment issues. Spring Boot enables externalized configuration through key-value `application.properties` or structured YAML `application.yml` files located in `src/main/resources/`. Java classes inject these configuration values easily using the `@Value(\"${property.key}\")` annotation or structured `@ConfigurationProperties` classes.\n\n#### Terminal Execution Preview\n```text\n=== Externalized Configuration Loaded ===\nApplication Name: sabaycode-backend\nServer Port: 8080\nDatabase Target: jdbc:postgresql://localhost:5432/sabaycode_db\nDDL Auto Mode: update\n```",
          "km": "### ការកំណត់ប្រព័ន្ធ — application.properties / application.yml\n\n**កម្រិត:** ដំបូង | **រយៈពេលអាន:** ៨ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការសរសេរ Configuration ដូចជា Database Passwords, Server Ports, និង API Keys ដោយផ្ទាល់ក្នុង Java Source Code គឺជាហានិភ័យសុវត្ថិភាពធ្ងន់ធ្ធរ។ Spring Boot អនុញ្ញាតឱ្យញែក Configuration មកខាងក្រៅតាមរយៈឯកសារ `application.properties` ឬ `application.yml` នៅក្នុង `src/main/resources/`។ Java Classes អាចទាញតម្លៃទាំងនោះមកប្រើប្រាស់បានយ៉ាងងាយស្រួលតាមរយៈ Annotation `@Value(\"${property.key}\")`។\n\n#### Terminal Execution Preview\n```text\n=== ទាញយក Externalized Configuration ជោគជ័យ ===\nឈ្មោះកម្មវិធី: sabaycode-backend\nServer Port: 8080\nDatabase Target: jdbc:postgresql://localhost:5432/sabaycode_db\n```"
        },
        "starterCode": "server.port=8080\nspring.application.name=sabaycode-backend\nsabaycode.institution.location=Phnom Penh, Cambodia"
      }
    ]
  },
  {
    "id": "sb-rest-apis",
    "title": {
      "en": "3. Building REST APIs",
      "km": "៣. ការបង្កើត REST APIs"
    },
    "lessons": [
      {
        "id": "sb-rest-principles",
        "title": {
          "en": "REST Architecture Principles & HTTP Methods",
          "km": "គោលការណ៍ស្ថាបត្យកម្ម REST និង HTTP Methods"
        },
        "content": {
          "en": "### REST Architecture Principles & HTTP Methods\n\n**Difficulty:** Intermediate | **Estimated Time:** 8 min read\n\n#### Overview & Why It Matters\nRepresentational State Transfer (REST) is the standard architectural style used for web services and APIs. In Spring Boot, REST APIs expose endpoints using standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`) to perform CRUD operations on resources identified by URIs. Designing stateless, uniform REST APIs ensures that mobile applications, frontend frameworks (like React or Vue), and third-party integrations can seamlessly communicate with your backend.\n\n#### Terminal Execution Preview\n```text\nHTTP Request: GET /api/v1/students\nResponse Status: 200 OK\nResponse Body:\n[\n  { \"id\": 1, \"fullName\": \"Sophea Chan\", \"province\": \"Phnom Penh\" },\n  { \"id\": 2, \"fullName\": \"Vireak Bun\", \"province\": \"Siem Reap\" }\n]\n```",
          "km": "### គោលការណ៍ស្ថាបត្យកម្ម REST និង HTTP Methods\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** ៨ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nRepresentational State Transfer (REST) គឺជាស្តង់ដារស្ថាបត្យកម្មសម្រាប់ Web Services និង APIs។ នៅក្នុង Spring Boot REST APIs បង្ហាញ Endpoint ដោយប្រើ HTTP Methods ផ្លូវការ (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`) ដើម្បីធ្វើប្រតិបត្តិការ CRUD លើ Resources ដែលកំណត់ដោយ URIs។ ការបង្កើត REST API ដែលមានទម្រង់ច្បាស់លាស់ ធានាថា Mobile App, Frontend (ដូចជា React) និងប្រព័ន្ធខាងក្រៅអាចបាញ់ទិន្នន័យមកកាន់ Backend យ៉ាងរលូន។\n\n#### Terminal Execution Preview\n```text\nHTTP Request: GET /api/v1/students\nResponse Status: 200 OK\nResponse Body:\n[\n  { \"id\": 1, \"fullName\": \"Sophea Chan\", \"province\": \"Phnom Penh\" },\n  { \"id\": 2, \"fullName\": \"Vireak Bun\", \"province\": \"Siem Reap\" }\n]\n```"
        },
        "starterCode": "@RestController\n@RequestMapping(\"/api/v1/students\")\npublic class StudentController {\n    // Controller mapping REST APIs\n}"
      },
      {
        "id": "sb-rest-controller",
        "title": {
          "en": "Creating Controllers with @RestController & @RequestMapping",
          "km": "ការបង្កើត Controller ដោយប្រើ @RestController និង @RequestMapping"
        },
        "content": {
          "en": "### Creating Controllers with @RestController & @RequestMapping\n\n**Difficulty:** Intermediate | **Estimated Time:** 9 min read\n\n#### Overview & Why It Matters\nIn Spring Boot MVC, controllers handle incoming HTTP web requests, invoke business logic inside services, and return data to clients. The `@RestController` annotation combines `@Controller` and `@ResponseBody`, indicating that method return values should be serialized directly into JSON or XML response bodies (via Jackson ObjectMapper) rather than rendering HTML template views. `@RequestMapping` defines base paths for routing HTTP traffic.\n\n#### Terminal Execution Preview\n```text\nHTTP POST /api/v1/students\nPayload: { \"fullName\": \"Vireak Bun\", \"email\": \"vireak@sabaycode.com\" }\nConsole Output: Registering new student: Vireak Bun\nHTTP Response: 201 CREATED -> \"Student Registered Successfully\"\n```",
          "km": "### ការបង្កើត Controller ដោយប្រើ @RestController និង @RequestMapping\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** ៩ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nនៅក្នុង Spring Boot MVC, Controller មានតួនាទីទទួល HTTP Request ពីខាងក្រៅ, ហៅប្រើប្រាស់ Business Logic ក្នុង Service និងបង្វែរទិន្នន័យត្រឡប់ទៅ Client វិញ។ Annotation `@RestController` បូកបញ្ចូលរវាង `@Controller` និង `@ResponseBody` ដែលកំណត់ថាតម្លៃបង្វែរមកវិញ (Return Values) នឹងត្រូវ Serialize ជាទម្រង់ JSON ដោយស្វ័យប្រវត្តិ។ `@RequestMapping` កំណត់ Path ផ្លូវដើមសម្រាប់ Routing។\n\n#### Terminal Execution Preview\n```text\nHTTP POST /api/v1/students\nPayload: { \"fullName\": \"Vireak Bun\", \"email\": \"vireak@sabaycode.com\" }\nConsole Output: កំពុងចុះឈ្មោះសិស្សថ្មី: Vireak Bun\nHTTP Response: 201 CREATED -> \"Student Registered Successfully\"\n```"
        },
        "starterCode": "@RestController\n@RequestMapping(\"/api/v1/students\")\npublic class StudentRestController {\n    @GetMapping\n    public String getStatus() {\n        return \"REST Controller Active\";\n    }\n}"
      },
      {
        "id": "sb-request-params",
        "title": {
          "en": "Request Params, Path Variables & Request Body",
          "km": "ការប្រើប្រាស់ Request Params, Path Variables និង Request Body"
        },
        "content": {
          "en": "### Request Params, Path Variables & Request Body\n\n**Difficulty:** Intermediate | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nREST APIs rely on different request input mechanisms depending on the data being sent. Spring Boot provides dedicated annotations to parse parameters cleanly: `@PathVariable` extracts dynamic placeholders directly from the URL path, `@RequestParam` parses query string parameters (e.g., pagination and search filters), and `@RequestBody` deserializes JSON payloads from the HTTP request body into Java DTO objects.\n\n#### Terminal Execution Preview\n```text\nHTTP GET /api/v1/courses?category=java&page=1\nReceived Query Parameter 'category': java\nReceived Query Parameter 'page': 1\nResponse: 200 OK [ CourseDto(code=\"SB-101\", name=\"Spring Boot Enterprise\") ]\n```",
          "km": "### ការប្រើប្រាស់ Request Params, Path Variables និង Request Body\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** ១០ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nREST APIs ប្រើប្រាស់វិធីសាស្ត្រផ្សេងៗគ្នាក្នុងការទទួលទិន្នន័យពី Client។ Spring Boot ផ្តល់នូវ Annotations ពិសេសៗដើម្បី Extract ទិន្នន័យយ៉ាងងាយស្រួល៖ `@PathVariable` សម្រាប់ទាញយកតម្លៃចេញពី URL Path, `@RequestParam` សម្រាប់ទាញយក Query String (ដូចជាការ Search ឬធ្វើ Pagination), និង `@RequestBody` សម្រាប់បំផ្លែង JSON Payload ចេញពី Request Body មកជា Java Objects។\n\n#### Terminal Execution Preview\n```text\nHTTP GET /api/v1/courses?category=java&page=1\nបានទទួល Query Parameter 'category': java\nបានទទួល Query Parameter 'page': 1\nResponse: 200 OK [ CourseDto(code=\"SB-101\", name=\"Spring Boot Enterprise\") ]\n```"
        },
        "starterCode": "@GetMapping(\"/courses/{id}\")\npublic CourseDto getCourse(@PathVariable(\"id\") Long id) {\n    return new CourseDto(id, \"Spring Boot Mastery\");\n}"
      },
      {
        "id": "sb-response-entity",
        "title": {
          "en": "ResponseEntity & Handling HTTP Status Codes",
          "km": "ការប្រើប្រាស់ ResponseEntity និងការគ្រប់គ្រង HTTP Status Codes"
        },
        "content": {
          "en": "### ResponseEntity & Handling HTTP Status Codes\n\n**Difficulty:** Intermediate | **Estimated Time:** 9 min read\n\n#### Overview & Why It Matters\nReturning raw Java domain objects directly from REST controller methods defaults to an HTTP status code of `200 OK`. However, production-grade REST APIs must communicate exact execution outcomes using appropriate HTTP status codes (such as `201 Created` for new records, `204 No Content` for deletions, `400 Bad Request` for validation failures, and `404 Not Found` for missing resources). Spring's `ResponseEntity<T>` wrapper class allows complete control over response HTTP headers, body content, and status codes.\n\n#### Terminal Execution Preview\n```text\nHTTP GET /api/v1/students/999\nLookup in Database for Student ID 999: NOT FOUND\nResponse: 404 NOT FOUND\nHeaders: { Content-Length: 0 }\n```",
          "km": "### ការប្រើប្រាស់ ResponseEntity និងការគ្រប់គ្រង HTTP Status Codes\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** ៩ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការបង្វែរ Java Objects ដោយផ្ទាល់ចេញពី REST Controller នឹងកំណត់ HTTP Status Code ជា `200 OK` ជាលំនាំដើម។ ប៉ុន្តែ REST API កម្រិតសហគ្រាស ត្រូវតែប្រាប់អំពីស្ថានភាពជាក់ស្តែងតាមរយៈ HTTP Status Codes ស្តង់ដារ (ដូចជា `201 Created` ពេលបង្កើតថ្មីជោគជ័យ, `204 No Content` ពេលលុប, `400 Bad Request` ពេលទិន្នន័យខុសទម្រង់, និង `404 Not Found` ពេលស្វែងរកមិនឃើញ)។ `ResponseEntity<T>` អនុញ្ញាតឱ្យយើងគ្រប់គ្រង HTTP Headers, Body, និង Status Code យ៉ាងពេញលេញ។\n\n#### Terminal Execution Preview\n```text\nHTTP GET /api/v1/students/999\nស្វែងរកក្នុង Database សម្រាប់ Student ID 999: មិនមានទិន្នន័យ\nResponse: 404 NOT FOUND\nHeaders: { Content-Length: 0 }\n```"
        },
        "starterCode": "@PostMapping\npublic ResponseEntity<String> create() {\n    return ResponseEntity.status(HttpStatus.CREATED).body(\"Created Successfully\");\n}"
      },
      {
        "id": "sb-exception-handling",
        "title": {
          "en": "Global Exception Handling with @ControllerAdvice",
          "km": "ការគ្រប់គ្រង Error សកលដោយប្រើ @ControllerAdvice"
        },
        "content": {
          "en": "### Global Exception Handling with @ControllerAdvice\n\n**Difficulty:** Advanced | **Estimated Time:** 11 min read\n\n#### Overview & Why It Matters\nWhen unhandled exceptions occur during REST API request processing (e.g., `EntityNotFoundException`, `NullPointerException`, or validation errors), Spring Boot by default returns a generic internal stack trace or default HTML error page. To prevent sensitive internal code details from leaking and to provide clean, consistent JSON error responses across all endpoints, developers use `@ControllerAdvice` (or `@RestControllerAdvice`) alongside `@ExceptionHandler` methods for centralized global exception handling.\n\n#### Terminal Execution Preview\n```text\nHTTP GET /api/v1/students/500\nException Thrown: ResourceNotFoundException(\"Student with ID 500 not found\")\nGlobalExceptionHandler Intercepted Error!\nResponse Status: 404 NOT FOUND\nResponse JSON:\n{\n  \"timestamp\": \"2026-08-01T09:30:00\",\n  \"status\": 404,\n  \"error\": \"Resource Not Found\",\n  \"message\": \"Student with ID 500 not found\",\n  \"path\": \"/api/v1/students/500\"\n}\n```",
          "km": "### ការគ្រប់គ្រង Error សកលដោយប្រើ @ControllerAdvice\n\n**កម្រិត:** ខ្ពស់ | **រយៈពេលអាន:** ១១ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nនៅពេលមាន Error ឬ Exception កើតឡើងក្នុង REST API (ដូចជា `EntityNotFoundException`, `NullPointerException` ឬទិន្នន័យមិនត្រឹមត្រូវ) Spring Boot នឹងបង្ហាញ Stack Trace ឬ ទំព័រ Error លំនាំដើម។ ដើម្បីការពារកុំឱ្យបែកធ្លាយព័ត៌មានកូដខាងក្នុង និងដើម្បីផ្តល់នូវទម្រង់ JSON Error ស្អាត និងដូចៗគ្នាគ្រប់ Endpoints ទាំងអស់ អ្នកអភិវឌ្ឍន៍ត្រូវប្រើប្រាស់ `@ControllerAdvice` (ឬ `@RestControllerAdvice`) រួមជាមួយ `@ExceptionHandler` សម្រាប់គ្រប់គ្រង Error សកល។\n\n#### Terminal Execution Preview\n```text\nHTTP GET /api/v1/students/500\nException Thrown: ResourceNotFoundException(\"រកមិនឃើញសិស្សដែលមាន ID 500\")\nGlobalExceptionHandler បានចាប់យក Error ដោយជោគជ័យ!\nResponse Status: 404 NOT FOUND\nResponse JSON:\n{\n  \"timestamp\": \"2026-08-01T09:30:00\",\n  \"status\": 404,\n  \"error\": \"Resource Not Found\",\n  \"message\": \"រកមិនឃើញសិស្សដែលមាន ID 500\",\n  \"path\": \"/api/v1/students/500\"\n}\n```"
        },
        "starterCode": "@RestControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(RuntimeException.class)\n    public ResponseEntity<String> handleRuntime(RuntimeException ex) {\n        return ResponseEntity.badRequest().body(\"Error: \" + ex.getMessage());\n    }\n}"
      }
    ]
  },
  {
    "id": "sb-databases-jpa",
    "title": {
      "en": "4. Databases (Spring Data JPA)",
      "km": "៤. ការប្រើប្រាស់ Database (Spring Data JPA)"
    },
    "lessons": [
      {
        "id": "sb-jpa-hibernate-intro",
        "title": {
          "en": "Introduction to ORM, JPA & Hibernate",
          "km": "សេចក្តីផ្តើមអំពី ORM, JPA និង Hibernate"
        },
        "content": {
          "en": "### Introduction to ORM, JPA & Hibernate\n\n**Difficulty:** Intermediate | **Estimated Time:** 9 min read\n\n#### Overview & Why It Matters\nRelational databases store data in tabular rows and columns, while Java applications operate on object graphs in memory. This structural mismatch is known as the Object-Relational Impedance Mismatch. Object-Relational Mapping (ORM) frameworks bridge this gap by converting SQL records directly into Java objects and vice-versa. In the Spring ecosystem, **JPA (Java Persistence API / Jakarta Persistence)** is the standard specification, and **Hibernate** is the default production-ready implementation engine.\n\n#### Terminal Execution Preview\n```text\n=== Hibernate ORM Schema Generation Output ===\nHibernate: create table students (\n    id bigint generated by default as identity,\n    email varchar(255) not null unique,\n    full_name varchar(100) not null,\n    primary key (id)\n)\n```",
          "km": "### សេចក្តីផ្តើមអំពី ORM, JPA និង Hibernate\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** ៩ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nRelational Databases រក្សាទុកទិន្នន័យជាទម្រង់ជួរឈរ និងជួរដេក (Tables, Rows, Columns) ខណៈពេលដែល Java ដំណើរការលើ Objects ក្នុង Memory។ បញ្ហានេះត្រូវបានគេហៅថា Object-Relational Impedance Mismatch។ Object-Relational Mapping (ORM) គឺជាបច្ចេកវិទ្យាភ្ជាប់គម្លាតនេះដោយបំប្លែង SQL Rows ទៅជា Java Objects និងច្រាសមកវិញ។ នៅក្នុង Spring, **JPA (Jakarta Persistence)** គឺជា Specification ស្តង់ដារ ហើយ **Hibernate** គឺជា Engine អនុវត្ត ORM ដោយស្វ័យប្រវត្តិ។\n\n#### Terminal Execution Preview\n```text\n=== លទ្ធផលនៃការបង្កើត Schema ដោយ Hibernate ORM ===\nHibernate: create table students (\n    id bigint generated by default as identity,\n    email varchar(255) not null unique,\n    full_name varchar(100) not null,\n    primary key (id)\n)\n```"
        },
        "starterCode": "@Entity\n@Table(name = \"students\")\npublic class StudentEntity {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String fullName;\n}"
      },
      {
        "id": "sb-jpa-repository",
        "title": {
          "en": "Creating Repositories with JpaRepository",
          "km": "ការបង្កើត Repository ដោយប្រើ JpaRepository"
        },
        "content": {
          "en": "### Creating Repositories with JpaRepository\n\n**Difficulty:** Intermediate | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nWriting repetitive Data Access Object (DAO) boilerplate code with raw JDBC queries, `PreparedStatement`, and manually mapping `ResultSet` columns consumes immense development time and invites errors. **Spring Data JPA** eliminates this boilerplate by providing repository interfaces. By simply extending `JpaRepository<Entity, ID>`, Spring automatically generates full CRUD operations (`save`, `findById`, `findAll`, `deleteById`, `count`) at runtime without writing a single line of SQL!\n\n#### Terminal Execution Preview\n```text\n=== Spring Data JPA Automated Method Execution ===\nExecuting Method: studentRepository.save(entity)\nGenerated SQL: insert into students (email, full_name) values ('sophea@sabaycode.com', 'Sophea Chan')\nSaved Entity Assigned Auto ID: 101\n```",
          "km": "### ការបង្កើត Repository ដោយប្រើ JpaRepository\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** ១០ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការសរសេរកូដទាញយកទិន្នន័យ (DAO) ជាមួយ JDBC ដើម ការរៀបចំ `PreparedStatement` និង `ResultSet` ដោយដៃ ចំណាយពេលយូរ និងងាយនឹងមាន Error។ **Spring Data JPA** បាត់បង់កូដដដែលៗទាំងនេះ ដោយផ្តល់នូវ Repository Interfaces។ គ្រាន់តែ Extend `JpaRepository<Entity, ID>` នោះ Spring នឹងបង្កើតមុខងារ CRUD ទាំងស្រុង (`save`, `findById`, `findAll`, `deleteById`) ដោយស្វ័យប្រវត្តិ ដោយមិនបាច់សរសេរ SQL មួយបន្ទាត់ឡើយ!\n\n#### Terminal Execution Preview\n```text\n=== ដំណើរការកូដ Spring Data JPA ដោយស្វ័យប្រវត្តិ ===\nកំពុងរត់ Method: studentRepository.save(entity)\nSQL ដែលបានបង្កើត: insert into students (email, full_name) values ('sophea@sabaycode.com', 'Sophea Chan')\nSaved Entity បានទទួល Auto ID: 101\n```"
        },
        "starterCode": "@Repository\npublic interface StudentRepository extends JpaRepository<StudentEntity, Long> {\n    Optional<StudentEntity> findByEmail(String email);\n}"
      },
      {
        "id": "sb-custom-queries",
        "title": {
          "en": "Custom Queries — JPQL vs Native SQL & @Query Annotation",
          "km": "ការសរសេរ Custom Queries — JPQL ប្រៀបធៀបនឹង Native SQL"
        },
        "content": {
          "en": "### Custom Queries — JPQL vs Native SQL & @Query Annotation\n\n**Difficulty:** Advanced | **Estimated Time:** 11 min read\n\n#### Overview & Why It Matters\nWhile Spring Data JPA derived method names cover standard queries, complex enterprise features—such as multi-table joins, aggregated statistics, and custom filters—require custom SQL or JPQL queries. The `@Query` annotation enables developers to bind custom query statements directly onto repository methods. Developers can choose between **JPQL (Java Persistence Query Language)**, which queries Java Entity objects portably across databases, and **Native SQL**, which targets database-specific features.\n\n#### Terminal Execution Preview\n```text\n=== JPQL Custom Query Execution ===\nQuery: SELECT s FROM StudentEntity s WHERE s.fullName LIKE '%Sophea%'\nGenerated SQL: select s1_0.id, s1_0.email, s1_0.full_name from students s1_0 where s1_0.full_name like '%Sophea%'\nResults Returned: 1 Student Entity\n```",
          "km": "### ការសរសេរ Custom Queries — JPQL ប្រៀបធៀបនឹង Native SQL\n\n**កម្រិត:** ខ្ពស់ | **រយៈពេលអាន:** ១១ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nទោះបីជា Derived Method Names របស់ Spring Data JPA អាចគ្របដណ្តប់លើ Query ធម្មតាបានក៏ដោយ ការសរសេរមុខងារស្មុគស្មាញ (ដូចជា Multi-table Joins, Aggregated Stats, ឬ Custom Filters) ទាមទារការសរសេរ Custom Query។ Annotation `@Query` អនុញ្ញាតឱ្យយើងសរសេរ Query Statement ភ្ជាប់ទៅកាន់ Repository Methods។ យើងអាចជ្រើសរើសរវាង **JPQL (Java Persistence Query Language)** ដែល Query លើ Java Entity Objects ឬ **Native SQL** ដែល Query លើ Tables ក្នុង Database ដោយផ្ទាល់។\n\n#### Terminal Execution Preview\n```text\n=== ដំណើរការ JPQL Custom Query ===\nQuery: SELECT s FROM StudentEntity s WHERE s.fullName LIKE '%Sophea%'\nGenerated SQL: select s1_0.id, s1_0.email, s1_0.full_name from students s1_0 where s1_0.full_name like '%Sophea%'\nទិន្នន័យដែលទទួលបាន: 1 Student Entity\n```"
        },
        "starterCode": "@Repository\npublic interface StudentRepository extends JpaRepository<StudentEntity, Long> {\n    @Query(\"SELECT s FROM StudentEntity s WHERE s.email = :email\")\n    Optional<StudentEntity> findByEmailCustom(@Param(\"email\") String email);\n}"
      }
    ]
  },
  {
    "id": "sb-security",
    "title": {
      "en": "5. Spring Security",
      "km": "៥. ប្រព័ន្ធសុវត្ថិភាព Spring Security"
    },
    "lessons": [
      {
        "id": "sb-security-basics",
        "title": {
          "en": "Spring Security Architecture — Filters, Authentication & Authorization",
          "km": "ស្ថាបត្យកម្ម Spring Security — Filters, Authentication និង Authorization"
        },
        "content": {
          "en": "### Spring Security Architecture — Filters, Authentication & Authorization\n\n**Difficulty:** Advanced | **Estimated Time:** 11 min read\n\n#### Overview & Why It Matters\nSecuring enterprise backend applications against unauthorized access, data leaks, and attack vectors is mandatory. **Spring Security** is a powerful, highly customizable framework that focuses on providing both Authentication (verifying *who* the user is) and Authorization (verifying *what* the user is allowed to do). It operates by placing a chain of Servlet filters (`SecurityFilterChain`) in front of web controllers to intercept and inspect every incoming HTTP request before it reaches business handlers.\n\n#### Terminal Execution Preview\n```text\n=== Spring Security Filter Chain Evaluation ===\nRequest URI: /api/v1/admin/analytics\nExtracted Security Token: NONE\nFilter Chain Decision: Access Denied! (User Unauthenticated)\nHTTP Response Status: 401 UNAUTHORIZED\n```",
          "km": "### ស្ថាបត្យកម្ម Spring Security — Filters, Authentication និង Authorization\n\n**កម្រិត:** ខ្ពស់ | **រយៈពេលអាន:** ១១ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការពារសុវត្ថិភាពប្រព័ន្ធ Backend ប្រឆាំងនឹងការចូលប្រើប្រាស់ដោយគ្មានការអនុញ្ញាត ការលេចធ្លាយទិន្នន័យ និងការវាយប្រហារផ្សេងៗ គឺជាកាតព្វកិច្ចចម្បង។ **Spring Security** គឺជា Framework ដ៏រឹងមាំដែលផ្តោតលើ Authentication (ការផ្ទៀងផ្ទាត់ *អត្តសញ្ញាណ* អ្នកប្រើប្រាស់) និង Authorization (ការផ្ទៀងផ្ទាត់ *សិទ្ធិ* ប្រើប្រាស់)។ វាដំណើរការដោយដាក់ Filter Chain (`SecurityFilterChain`) ពីមុខ Web Controllers ដើម្បីពិនិត្យមើលរាល់ HTTP Request ទាំងអស់។\n\n#### Terminal Execution Preview\n```text\n=== ការពិនិត្យប្រព័ន្ធសុវត្ថិភាព Spring Security Filter Chain ===\nRequest URI: /api/v1/admin/analytics\nExtracted Security Token: ពុំមាន (NONE)\nលទ្ធផល Filter Chain: បដិសេធការចូលប្រើ! (Access Denied)\nHTTP Response Status: 401 UNAUTHORIZED\n```"
        },
        "starterCode": "@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http.csrf(csrf -> csrf.disable());\n        return http.build();\n    }\n}"
      },
      {
        "id": "sb-jwt-authentication",
        "title": {
          "en": "JWT Authentication & Stateless Token Verification",
          "km": "ការប្រើប្រាស់ JWT Authentication និង Stateless Token Verification"
        },
        "content": {
          "en": "### JWT Authentication & Stateless Token Verification\n\n**Difficulty:** Advanced | **Estimated Time:** 12 min read\n\n#### Overview & Why It Matters\nTraditional session-cookie authentication requires servers to store user session states in memory, making horizontal scaling across multiple container instances difficult. Stateless **JSON Web Token (JWT)** authentication solves this by encoding user identity and granted authorities directly into a digitally signed token. Upon successful login, the server issues a JWT to the client. The client attaches this token to the `Authorization: Bearer <token>` header on subsequent HTTP requests, enabling stateless validation without database queries.\n\n#### Terminal Execution Preview\n```text\n=== Stateless JWT Interceptor Execution ===\nIncoming Header: Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...\nToken Verification: VALID (Subject: sophea@sabaycode.com)\nRoles Extracted: [ROLE_STUDENT, ROLE_DEVELOPER]\nSecurityContext Updated: User 'sophea@sabaycode.com' authenticated.\n```",
          "km": "### ការប្រើប្រាស់ JWT Authentication និង Stateless Token Verification\n\n**កម្រិត:** ខ្ពស់ | **រយៈពេលអាន:** ១២ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nSession-Cookie Authentication ដើម តម្រូវឱ្យ Server រក្សាទុក Session State ក្នុង Memory ដែលធ្វើឱ្យមានការលំបាកក្នុងការ Scaling លើ Server ច្រើន។ Stateless **JSON Web Token (JWT)** Authentication ដោះស្រាយបញ្ហានេះដោយចុះហត្ថលេខាឌីជីថលលើ Identity និង សិទ្ធិ (Roles) របស់អ្នកប្រើប្រាស់បញ្ចូលក្នុង Token តែមួយ។ ពេល Login ជោគជ័យ Server នឹងបញ្ជូន JWT ទៅឱ្យ Client។ Client នឹងផ្ញើ Token នេះតាមរយៈ `Authorization: Bearer <token>` Header សម្រាប់ការស្នើសុំទិន្នន័យលើកក្រោយ។\n\n#### Terminal Execution Preview\n```text\n=== ដំណើរការ JWT Interceptor ===\nIncoming Header: Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...\nការផ្ទៀងផ្ទាត់ Token: ត្រឹមត្រូវ (VALID)\nអ្នកប្រើប្រាស់: sophea@sabaycode.com\nRoles: [ROLE_STUDENT, ROLE_DEVELOPER]\nSecurityContext: បានអនុញ្ញាតឱ្យចូលប្រើប្រាស់ដោយជោគជ័យ។\n```"
        },
        "starterCode": "@Component\npublic class JwtAuthenticationFilter extends OncePerRequestFilter {\n    @Override\n    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)\n            throws ServletException, IOException {\n        chain.doFilter(request, response);\n    }\n}"
      }
    ]
  },
  {
    "id": "sb-advanced",
    "title": {
      "en": "6. Advanced Spring Boot",
      "km": "៦. មុខងារជឿនលឿន Spring Boot"
    },
    "lessons": [
      {
        "id": "sb-spring-actuator",
        "title": {
          "en": "Production Monitoring with Spring Boot Actuator",
          "km": "ការតាមដានប្រព័ន្ធរត់ជាក់ស្តែងជាមួយ Spring Boot Actuator"
        },
        "content": {
          "en": "### Production Monitoring with Spring Boot Actuator\n\n**Difficulty:** Advanced | **Estimated Time:** 9 min read\n\n#### Overview & Why It Matters\nWhen Spring Boot applications are deployed into production cloud environments, system administrators and DevOps engineers need real-time insight into application health, metrics, database connections, environment properties, and thread dumps. **Spring Boot Actuator** adds production-ready monitoring and management features to your application without requiring custom health-check endpoints. It exposes standard REST endpoints like `/actuator/health`, `/actuator/metrics`, and `/actuator/env`.\n\n#### Terminal Execution Preview\n```text\nHTTP GET /actuator/health\nResponse Status: 200 OK\nResponse JSON:\n{\n  \"status\": \"UP\",\n  \"components\": {\n    \"db\": { \"status\": \"UP\", \"details\": { \"database\": \"PostgreSQL\", \"validationQuery\": \"isValid()\" } },\n    \"diskSpace\": { \"status\": \"UP\", \"details\": { \"total\": 499963170816, \"free\": 320101928960 } }\n  }\n}\n```",
          "km": "### ការតាមដានប្រព័ន្ធរត់ជាក់ស្តែងជាមួយ Spring Boot Actuator\n\n**កម្រិត:** ខ្ពស់ | **រយៈពេលអាន:** ៩ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nនៅពេលកម្មវិធី Spring Boot ត្រូវបានដាក់ឱ្យដំណើរការលើ Production Cloud System ក្រុមអ្នកថែទាំប្រព័ន្ធ (DevOps Engineers) ត្រូវការតាមដានពីសុខភាពរបស់ប្រព័ន្ធ (Health Status), ការប្រើប្រាស់ Memory, ការភ្ជាប់ Database, និងប្រព័ន្ធព័ត៌មានផ្សេងៗ។ **Spring Boot Actuator** ផ្តល់នូវមុខងារ Monitoring ដល់ប្រព័ន្ធដោយមិនបាច់សរសេរ កូដ Health Check ដោយដៃឡើយ។ វាបង្ហាញ Endpoints ដូចជា `/actuator/health`, `/actuator/metrics` និង `/actuator/env`។\n\n#### Terminal Execution Preview\n```text\nHTTP GET /actuator/health\nResponse Status: 200 OK\nResponse JSON:\n{\n  \"status\": \"UP\",\n  \"components\": {\n    \"db\": { \"status\": \"UP\", \"details\": { \"database\": \"PostgreSQL\", \"validationQuery\": \"isValid()\" } },\n    \"diskSpace\": { \"status\": \"UP\", \"details\": { \"total\": 499963170816, \"free\": 320101928960 } }\n  }\n}\n```"
        },
        "starterCode": "# application.properties\nmanagement.endpoints.web.exposure.include=health,info,metrics"
      },
      {
        "id": "sb-caching-redis",
        "title": {
          "en": "Caching with @EnableCaching & Redis Integration",
          "km": "ការប្រើប្រាស់ Cache ជាមួយ @EnableCaching និង Redis"
        },
        "content": {
          "en": "### Caching with @EnableCaching & Redis Integration\n\n**Difficulty:** Advanced | **Estimated Time:** 11 min read\n\n#### Overview & Why It Matters\nRepeatedly executing expensive SQL database queries or third-party HTTP requests for data that rarely changes (such as product categories, exchange rates, or country lists) degrades application performance and exhausts database connection pools. Caching stores the results of heavy operations in fast, in-memory data stores like **Redis**. Spring Boot provides seamless declarative caching abstractions using annotations like `@Cacheable`, `@CachePut`, and `@CacheEvict`.\n\n#### Terminal Execution Preview\n```text\n=== First Execution (Cache Miss) ===\nConsole: Executing SQL Database Query for Student ID: 101\nDatabase Query Duration: 185 ms\nRedis Storage: Key 'students::101' cached.\n\n=== Second Execution (Cache Hit) ===\nConsole: (No SQL log generated!)\nRedis Retrieval Duration: 2 ms\nResponse Status: 200 OK (Served directly from Redis In-Memory Cache)\n```",
          "km": "### ការប្រើប្រាស់ Cache ជាមួយ @EnableCaching និង Redis\n\n**កម្រិត:** ខ្ពស់ | **រយៈពេលអាន:** ១១ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការរត់ SQL Query ដែលស្មុគស្មាញដដែលៗ ឬទាញយកទិន្នន័យពី Third-party API ដែលមិនសូវផ្លាស់ប្តូរ (ដូចជាប្រភេទផលិតផល ឬអត្រាប្តូរប្រាក់) ធ្វើឱ្យប្រព័ន្ធយឺត និងខាតបង់ Resource។ បច្ចេកវិទ្យា Caching រក្សាទុកផលលទ្ធផលនៃការ Query ទៅក្នុង In-memory Database ដែលលឿនបំផុតដូចជា **Redis**។ Spring Boot ផ្តល់នូវប្រព័ន្ធ Caching យ៉ាងងាយស្រួលតាមរយៈ Annotations ដូចជា `@Cacheable`, `@CachePut` និង `@CacheEvict`។\n\n#### Terminal Execution Preview\n```text\n=== ការរត់លើកទី ១ (Cache Miss) ===\nConsole: កំពុងរត់ SQL Database Query សម្រាប់ Student ID: 101\nDatabase Query Duration: 185 ms\nRedis Storage: រក្សាទុក Key 'students::101' ក្នុង Cache។\n\n=== ការរត់លើកទី ២ (Cache Hit) ===\nConsole: (មិនមាន SQL Query រត់ទៀតទេ!)\nRedis Retrieval Duration: 2 ms (ទាញយកពី Redis In-Memory លឿនបំផុត!)\n```"
        },
        "starterCode": "@Service\npublic class StudentService {\n    @Cacheable(value = \"students\", key = \"#id\")\n    public StudentDto getStudentById(Long id) {\n        return null; // fetched from DB if cache misses\n    }\n}"
      }
    ]
  },
  {
    "id": "sb-frontend",
    "title": {
      "en": "7. Frontend Integration",
      "km": "៧. ការភ្ជាប់ជាមួយ Frontend (React / Vue)"
    },
    "lessons": [
      {
        "id": "sb-cors-config",
        "title": {
          "en": "Configuring CORS (Cross-Origin Resource Sharing)",
          "km": "ការកំណត់ប្រព័ន្ធ CORS (Cross-Origin Resource Sharing)"
        },
        "content": {
          "en": "### Configuring CORS (Cross-Origin Resource Sharing)\n\n**Difficulty:** Intermediate | **Estimated Time:** 8 min read\n\n#### Overview & Why It Matters\nWhen building decoupled modern fullstack web applications, the frontend single-page app (React running on `http://localhost:5173`) and the backend API service (Spring Boot running on `http://localhost:8080`) reside on different origins (different domain, port, or protocol). Browsers enforce the Same-Origin Policy (SOP) by blocking cross-origin HTTP requests unless the server explicitly sends HTTP CORS headers granting access. Configuring CORS properly in Spring Boot allows trusted frontend clients to make API calls safely.\n\n#### Terminal Execution Preview\n```text\nBrowser Preflight Request: OPTIONS /api/v1/students\nResponse Headers Sent by Spring Boot:\nAccess-Control-Allow-Origin: http://localhost:5173\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS\nAccess-Control-Allow-Credentials: true\nResult: CORS Preflight Approved! Browser allows frontend fetch() call.\n```",
          "km": "### ការកំណត់ប្រព័ន្ធ CORS (Cross-Origin Resource Sharing)\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** ៨ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nនៅពេលអភិវឌ្ឍប្រព័ន្ធ Web ទំនើប ដែលញែកដាច់ពីរវាង Frontend (React រត់លើ `http://localhost:5173`) និង Backend (Spring Boot រត់លើ `http://localhost:8080`) កម្មវិធីទាំងពីរនេះស្ថិតនៅលើ Origin ខុសគ្នា។ Web Browsers អនុវត្តច្បាប់ Same-Origin Policy (SOP) ដោយទប់ស្កាត់មិនឱ្យ Frontend បាញ់ Request ទៅកាន់ Backend ឡើយ លើកលែងតែ Backend អនុញ្ញាត។ ការកំណត់ CORS ក្នុង Spring Boot គឺជួយឱ្យ Frontend ដែលទុកចិត្តអាចហៅប្រើប្រាស់ API បានដោយសុវត្ថិភាព។\n\n#### Terminal Execution Preview\n```text\nBrowser Preflight Request: OPTIONS /api/v1/students\nResponse Headers ផ្ញើដោយ Spring Boot:\nAccess-Control-Allow-Origin: http://localhost:5173\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS\nAccess-Control-Allow-Credentials: true\nលទ្ធផល: CORS ត្រូវបានអនុញ្ញាត! Browser អនុញ្ញាតឱ្យ React fetch() ទិន្នន័យបាន។\n```"
        },
        "starterCode": "@Configuration\npublic class WebMvcConfig implements WebMvcConfigurer {\n    @Override\n    public void addCorsMappings(CorsRegistry registry) {\n        registry.addMapping(\"/api/**\").allowedOrigins(\"*\");\n    }\n}"
      },
      {
        "id": "sb-react-integration",
        "title": {
          "en": "Connecting Spring Boot APIs with React Axios/Fetch",
          "km": "ការភ្ជាប់ Spring Boot APIs ជាមួយ React ដោយប្រើ Axios/Fetch"
        },
        "content": {
          "en": "### Connecting Spring Boot APIs with React Axios/Fetch\n\n**Difficulty:** Intermediate | **Estimated Time:** 10 min read\n\n#### Overview & Why It Matters\nConnecting a client-side React user interface to a backend Spring Boot REST API completes the fullstack development cycle. React components dispatch HTTP asynchronous calls using the browser's native `fetch()` API or the popular `axios` library, parsing the returned JSON payloads into React state. Proper fullstack integration involves managing request loading indicators, displaying user notification toasts on errors, attaching JWT authentication bearer tokens, and handling async promises.\n\n#### Terminal Execution Preview\n```text\n[React Client] Fetching /api/v1/students...\n[Spring Boot Server] Authenticated request for user: sophea@sabaycode.com\n[Spring Boot Server] Returning JSON payload [ { id: 101, fullName: 'Sophea Chan' } ]\n[React Client] State updated with 1 student entity. UI Render Complete.\n```",
          "km": "### ការភ្ជាប់ Spring Boot APIs ជាមួយ React ដោយប្រើ Axios/Fetch\n\n**កម្រិត:** មធ្យម | **រយៈពេលអាន:** ១០ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nការភ្ជាប់ប្រព័ន្ធ Client-side React ទៅកាន់ Backend Spring Boot REST API គឺជាការបំពេញរចនាសម្ព័ន្ធ Fullstack Development។ React Components ធ្វើការបាញ់ HTTP Request ដោយប្រើ `fetch()` ឬ `axios` រួចបំប្លែង JSON Response មកជា React State។ ការភ្ជាប់ Fullstack ត្រឹមត្រូវ ទាមទារការរៀបចំ Loading States, ការបង្ហាញសារ Error និងការភ្ជាប់ JWT Bearer Token ក្នុង Header ដោយស្វ័យប្រវត្តិ។\n\n#### Terminal Execution Preview\n```text\n[React Client] កំពុង Fetch /api/v1/students...\n[Spring Boot Server] ផ្ទៀងផ្ទាត់ Request ជោគជ័យសម្រាប់: sophea@sabaycode.com\n[Spring Boot Server] បង្វែរ JSON payload [ { id: 101, fullName: 'Sophea Chan' } ]\n[React Client] Update React State ជោគជ័យ។ UI Render រួចរាល់។\n```"
        },
        "starterCode": "import axios from 'axios';\nexport const getStudents = () => axios.get('http://localhost:8080/api/v1/students');"
      }
    ]
  },
  {
    "id": "sb-deployment",
    "title": {
      "en": "8. Deployment & Real-World Practices",
      "km": "៨. ការដាក់ឱ្យដំណើរការ (Deployment & Docker)"
    },
    "lessons": [
      {
        "id": "sb-dockerizing",
        "title": {
          "en": "Containerizing Spring Boot Apps with Docker",
          "km": "ការដាក់ Spring Boot App ក្នុង Docker Container"
        },
        "content": {
          "en": "### Containerizing Spring Boot Apps with Docker\n\n**Difficulty:** Advanced | **Estimated Time:** 11 min read\n\n#### Overview & Why It Matters\n\"It works on my machine\" is a famous software engineering dilemma caused by discrepancies between local development operating systems and remote cloud staging or production environments. **Docker** solves this by packaging the application JAR, Java runtime environment (JDK/JRE), OS dependencies, and application properties into an isolated, lightweight container image. This guarantees consistent behavior across AWS, Google Cloud, Azure, and local developer machines.\n\n#### Terminal Execution Preview\n```text\n$ docker build -t sabaycode-backend:v1 .\n[+] Building 12.4s (11/11) FINISHED\n$ docker run -d -p 8080:8080 --name sabay-app sabaycode-backend:v1\nContainer ID: c82a101f89bc\nLog Output: Started SabayCodeApplication in 2.10 seconds (JVM running in Docker Container)\n```",
          "km": "### ការដាក់ Spring Boot App ក្នុង Docker Container\n\n**កម្រិត:** ខ្ពស់ | **រយៈពេលអាន:** ១១ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\n\"វាដើរលើម៉ាស៊ីនខ្ញុំ ប៉ុន្តែមិនដើរលើ Server\" គឺជាបញ្ហាញឹកញាប់ដែលបណ្តាលមកពីភាពខុសគ្នានៃ OS និង បរិស្ថាន Runtime។ **Docker** ដោះស្រាយបញ្ហានេះដោយច្របាច់បញ្ចូលនូវ Executable JAR, Java Runtime (JRE) និង Dependencies ចាំបាច់ទាំងអស់ទៅក្នុង Container Image តែមួយ។ វាធានាថា កម្មវិធីដំណើរការដូចគ្នាទាំងស្រុងនៅលើ AWS, Google Cloud ឬ ម៉ាស៊ីនផ្ទាល់ខ្លួនរបស់អ្នកអភិវឌ្ឍន៍។\n\n#### Terminal Execution Preview\n```text\n$ docker build -t sabaycode-backend:v1 .\n[+] Building 12.4s (11/11) FINISHED\n$ docker run -d -p 8080:8080 --name sabay-app sabaycode-backend:v1\nContainer ID: c82a101f89bc\nLog Output: Started SabayCodeApplication in 2.10 seconds (ដំណើរការក្នុង Docker Container ជោគជ័យ)\n```"
        },
        "starterCode": "FROM eclipse-temurin:21-jre-alpine\nCOPY target/*.jar app.jar\nENTRYPOINT [\"java\", \"-jar\", \"/app.jar\"]"
      }
    ]
  },
  {
    "id": "sb-projects",
    "title": {
      "en": "9. Mini Projects",
      "km": "៩. គម្រោងអនុវត្តជាក់ស្តែង"
    },
    "lessons": [
      {
        "id": "sb-project-student-system",
        "title": {
          "en": "Student Management System API (CRUD + JPA)",
          "km": "ប្រព័ន្ធគ្រប់គ្រងសិស្ស Student Management API (CRUD + JPA)"
        },
        "content": {
          "en": "### Student Management System API (CRUD + JPA)\n\n**Difficulty:** Intermediate | **Estimated Time:** 25 min guided build\n\n#### Overview & Why It Matters\nIn this comprehensive hands-on mini project, you will build a complete, production-ready Student Management System backend REST API using Spring Boot, Spring Data JPA, and PostgreSQL. This project consolidates all foundational skills: defining JPA Entities with constraints, creating custom Repository queries, building clean Service layer business logic, exposing CRUD REST endpoints, and executing global error handling with full Cambodian context data.\n\n#### Terminal Execution Preview\n```text\n=== SabayCode Student Management System API ===\nPOST /api/v1/students -> Created Student: Sophea Chan (ID: 101, Province: Phnom Penh)\nGET /api/v1/students?search=Sophea -> Returned 1 Matching Result\nPUT /api/v1/students/101 -> Updated Province to 'Siem Reap'\nDELETE /api/v1/students/101 -> Status: 204 NO CONTENT\n```",
          "km": "### ប្រព័ន្ធគ្រប់គ្រងសិស្ស Student Management API (CRUD + JPA)\n\n**កម្រិត:** មធ្យម | **រយៈពេលអនុវត្ត:** ២៥ នាទី\n\n#### ទិដ្ឋភាពទូទៅ និងសារៈសំខាន់\nនៅក្នុងគម្រោងអនុវត្តជាក់ស្តែងនេះ អ្នកនឹងសាងសង់ប្រព័ន្ធគ្រប់គ្រងសិស្ស Student Management System Backend REST API ទាំងមូលដោយប្រើប្រាស់ Spring Boot, Spring Data JPA និង PostgreSQL។ គម្រោងនេះប្រមូលផ្តុំរាល់ជំនាញគ្រឹះទាំងអស់៖ ការបង្កើត JPA Entities, ការសរសេរ Repository Queries, ការសរសេរ Business Logic ក្នុង Service Layer, ការបើក REST Endpoints និងការរៀបចំ Error Handling។\n\n#### Terminal Execution Preview\n```text\n=== ប្រព័ន្ធគ្រប់គ្រងសិស្ស SabayCode Student Management System API ===\nPOST /api/v1/students -> បានបង្កើតសិស្ស: សុភា ចាន់ (ID: 101, រាជធានីភ្នំពេញ)\nGET /api/v1/students?search=Sophea -> ទាញយកទិន្នន័យឃើញ 1\nPUT /api/v1/students/101 -> បានផ្លាស់ប្តូរខេត្តទៅ 'សៀមរាប'\nDELETE /api/v1/students/101 -> Status: 204 NO CONTENT (លុបជោគជ័យ)\n```"
        },
        "starterCode": "@RestController\n@RequestMapping(\"/api/v1/students\")\npublic class StudentProjectController {\n    // Student Management System Complete Guided Implementation\n}"
      }
    ]
  }
];
export const springBootReferences: ReferenceItem[] = [
  {
    "id": "ref-sb-1",
    "syntax": "@SpringBootApplication",
    "desc": {
      "en": "Primary configuration annotation combining @Configuration, @EnableAutoConfiguration, and @ComponentScan.",
      "km": "Annotation សម្រាប់ប្រកាស Class មេនៃ Spring Boot App ដោយរួមបញ្ចូល Configuration និង Component Scanning។"
    },
    "example": "@SpringBootApplication\npublic class Application { main() {...} }"
  },
  {
    "id": "ref-sb-2",
    "syntax": "@RestController",
    "desc": {
      "en": "Specialized controller annotation converting handler return values automatically into JSON HTTP response bodies.",
      "km": "Annotation សម្រាប់បង្កើត JSON REST Controller ដោយស្វ័យប្រវត្តិ។"
    },
    "example": "@RestController\n@RequestMapping(\"/api/v1/students\")\npublic class StudentController {...}"
  },
  {
    "id": "ref-sb-3",
    "syntax": "JpaRepository<Entity, ID>",
    "desc": {
      "en": "Spring Data JPA interface granting automated CRUD operations, sorting, and pagination without writing manual SQL.",
      "km": "Interface ផ្តល់នូវមុខងារ CRUD, Sorting និង Pagination ដោយស្វ័យប្រវត្តិ។"
    },
    "example": "public interface StudentRepository extends JpaRepository<StudentEntity, Long> {}"
  }
];
export const springBootQuizzes: Quiz[] = [
  {
    "id": "q-sb-1",
    "question": {
      "en": "Which annotation is used to designate a primary entry point class in Spring Boot?",
      "km": "តើ Annotation មួយណាត្រូវបានប្រើសម្រាប់ប្រកាស Class ចាប់ផ្តើមមេក្នុង Spring Boot?"
    },
    "options": {
      "en": [
        "@EnableSpring",
        "@SpringBootApplication",
        "@ConfigurationMain",
        "@SpringBootServer"
      ],
      "km": [
        "@EnableSpring",
        "@SpringBootApplication",
        "@ConfigurationMain",
        "@SpringBootServer"
      ]
    },
    "correctIndex": 1,
    "explanation": {
      "en": "@SpringBootApplication combines @SpringBootConfiguration, @EnableAutoConfiguration, and @ComponentScan.",
      "km": "@SpringBootApplication ជាការបូកបញ្ជូលនៃ @SpringBootConfiguration, @EnableAutoConfiguration, និង @ComponentScan។"
    }
  },
  {
    "id": "q-sb-2",
    "question": {
      "en": "In Spring Boot REST APIs, which annotation combines @Controller and @ResponseBody to return JSON objects directly?",
      "km": "នៅក្នុង Spring Boot REST APIs តើ Annotation មួយណាដែលបូកបញ្ជូល @Controller និង @ResponseBody ដើម្បីបង្វែរ JSON Objects ដោយផ្ទាល់?"
    },
    "options": {
      "en": [
        "@RestController",
        "@WebController",
        "@JsonController",
        "@ServiceController"
      ],
      "km": [
        "@RestController",
        "@WebController",
        "@JsonController",
        "@ServiceController"
      ]
    },
    "correctIndex": 0,
    "explanation": {
      "en": "@RestController automatically serializes handler method return values into JSON format.",
      "km": "@RestController បំប្លែងតម្លៃបង្វែរមកវិញទៅជាទម្រង់ JSON ដោយស្វ័យប្រវត្តិ។"
    }
  },
  {
    "id": "q-sb-3",
    "question": {
      "en": "Which interface in Spring Data JPA provides built-in CRUD operations and pagination without writing custom SQL?",
      "km": "នៅក្នុង Spring Data JPA តើ Interface មួយណាដែលផ្តល់នូវមុខងារ CRUD និង Pagination ដោយមិនបាច់សរសេរ SQL ដោយដៃ?"
    },
    "options": {
      "en": [
        "CrudHandler",
        "JpaRepository",
        "SqlMapper",
        "EntityStorage"
      ],
      "km": [
        "CrudHandler",
        "JpaRepository",
        "SqlMapper",
        "EntityStorage"
      ]
    },
    "correctIndex": 1,
    "explanation": {
      "en": "Extending JpaRepository<Entity, ID> automatically grants save, findById, findAll, deleteById, and query execution features.",
      "km": "ការ Extend JpaRepository<Entity, ID> ផ្តល់នូវមុខងារ save, findById, findAll, និង deleteById ដោយស្វ័យប្រវត្តិ។"
    }
  }
];
export const springBootMiniProjects: MiniProject[] = [
  {
    "id": "p-sb-1",
    "title": {
      "en": "Student Management System API (CRUD + JPA)",
      "km": "ប្រព័ន្ធគ្រប់គ្រងសិស្ស Student Management API (CRUD + JPA)"
    },
    "desc": {
      "en": "Build a complete backend REST API with Spring Boot, Spring Data JPA, and PostgreSQL for managing student records.",
      "km": "សាងសង់ប្រព័ន្ធគ្រប់គ្រងសិស្ស Backend REST API ដោយប្រើប្រាស់ Spring Boot, Spring Data JPA, និង PostgreSQL។"
    },
    "starterCode": "@RestController\n@RequestMapping(\"/api/v1/students\")\npublic class StudentProjectController {\n    // Write CRUD handlers here\n}",
    "solutionCode": "@RestController\n@RequestMapping(\"/api/v1/students\")\npublic class StudentProjectController {\n    private final StudentService studentService;\n\n    public StudentProjectController(StudentService studentService) {\n        this.studentService = studentService;\n    }\n\n    @GetMapping\n    public List<StudentDto> getAll() {\n        return studentService.findAll();\n    }\n}"
  }
];

export const springBootCourseData = {
  id: "spring-boot",
  title: {
    en: "Spring Boot Mastery",
    km: "វគ្គសិក្សា Spring Boot កម្រិតខ្ពស់"
  },
  desc: {
    en: "Master Java Spring Boot, RESTful APIs, Spring Data JPA, Hibernate, PostgreSQL, Spring Security, JWT, Docker, and Microservices architecture with hands-on Cambodian enterprise examples.",
    km: "រៀនសូត្រស្ទាត់ជំនាញ Java Spring Boot, RESTful APIs, Spring Data JPA, Hibernate, PostgreSQL, Spring Security, JWT, Docker និងរចនាសម្ព័ន្ធ Microservices ជាមួយឧទាហរណ៍ជាក់ស្តែង។"
  },
  category: "framework",
  difficulty: "advanced",
  estimatedHours: 28,
  iconName: "spring",
  topics: springBootTopics,
  references: springBootReferences,
  quizzes: springBootQuizzes,
  miniProjects: springBootMiniProjects
};

export default springBootCourseData;
