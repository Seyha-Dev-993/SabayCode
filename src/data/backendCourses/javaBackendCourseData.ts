import { BackendCourse } from '../backendCoursesHubData';

export const JAVA_BACKEND_COURSE_DATA: BackendCourse = {
  id: 'java-backend',
  slug: 'java-backend-engineering',
  title: {
    en: 'Java for Backend Engineering — Building Real APIs with Spring Boot',
    km: 'Java សម្រាប់ Backend Engineering — សាង API ពិតប្រាកដដោយប្រើ Spring Boot'
  },
  iconName: 'java',
  type: 'language',
  categoryId: 'languages',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'The language and framework behind most of the world\'s enterprise backend systems.',
    km: 'ភាសា និង framework ដែលនៅពីក្រោយប្រព័ន្ធ backend សហគ្រាសភាគច្រើននៅលើពិភពលោក។'
  },
  summary: {
    en: 'Java has powered backend systems at banks, airlines, e-commerce platforms, and government agencies for over two decades, and it remains one of the most in-demand languages for backend engineering roles today. This course takes core Java — the syntax, OOP, and collections you already know — and applies it to real server-side development: project structure with Maven, the JVM\'s role in running your code, connecting to databases with JDBC, and then the framework that makes modern Java backend work practical, Spring Boot. You\'ll learn dependency injection, building REST controllers, validating input, and persisting data with Spring Data JPA, culminating in a complete, real REST API backed by a database. By the end, you\'ll understand how the huge share of enterprise backend systems running in production today are actually built.',
    km: 'Java បានជំរុញប្រព័ន្ធ backend នៅធនាគារ ក្រុមហ៊ុនអាកាសចរណ៍ វេទិកា e-commerce និងភ្នាក់ងាររដ្ឋាភិបាលអស់រយៈពេលជាងពីរទសវត្សរ៍មកហើយ ហើយវានៅតែជាភាសាមួយក្នុងចំណោមភាសាដែលមានតម្រូវការខ្ពស់បំផុតសម្រាប់តួនាទី backend engineering សព្វថ្ងៃនេះ។ វគ្គសិក្សានេះយក core Java — វាក្យសម្ព័ន្ធ, OOP, និង collections ដែលអ្នកបានចេះរួចមកហើយ — មកអនុវត្តទៅលើការអភិវឌ្ឍ server-side ពិតប្រាកដ៖ រចនាសម្ព័ន្ធគម្រោងជាមួយ Maven, តួនាទីរបស់ JVM ក្នុងការដំណើរការកូដរបស់អ្នក, ការភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យជាមួយ JDBC, ហើយបន្ទាប់មក framework ដែលធ្វើឱ្យការងារ backend Java ទំនើបអាចអនុវត្តបានជាក់ស្តែង គឺ Spring Boot។ អ្នកនឹងរៀន dependency injection, ការសាង REST controllers, ការផ្ទៀងផ្ទាត់ទិន្នន័យបញ្ចូល (input validation), និងការរក្សាទុកទិន្នន័យជាមួយ Spring Data JPA ដែលបញ្ចប់ដោយ REST API ពិតប្រាកដពេញលេញដែលគាំទ្រដោយមូលដ្ឋានទិន្នន័យ។ ចប់វគ្គនេះ អ្នកនឹងយល់ពីរបៀបដែលចំណែកដ៏ធំនៃប្រព័ន្ធ backend សហគ្រាសកំពុងដំណើរការនាពេលបច្ចុប្បន្នត្រូវបានសាងឡើងជាក់ស្តែង។'
  },
  estimatedHours: 30,
  lessonCount: 34,
  usedFor: 'Spring Boot APIs, Enterprise Core Banking, High-Throughput Microservices, Scalable E-commerce Platforms',
  realWorldApps: ['ABA Core Banking Engine', 'Netflix Streaming Backend Services', 'Amazon Web Services Control Plane', 'Uber Dispatching Systems'],
  prerequisites: {
    en: 'Completion of a Java Fundamentals course (or equivalent Java knowledge) is strongly recommended — this course assumes comfort with Java syntax, classes and objects, interfaces, collections (List, Map), and basic exception handling.',
    km: 'គួរតែបានបញ្ចប់វគ្គសិក្សា Java Fundamentals (ឬមានចំណេះដឹង Java ស្មើគ្នា) — វគ្គនេះសន្មតថាលោកអ្នកមានភាពស្ទាត់ជំនាញជាមួយ Java syntax, classes/objects, interfaces, collections (List, Map) និងការគ្រប់គ្រង exception។'
  },
  whatYouWillLearn: {
    en: [
      'Understand the role of the JVM, the JDK, and how Java code is compiled and run',
      'Structure a real Java project using Maven: pom.xml, dependencies, and build lifecycle',
      'Use core Java collections and exception handling in a backend context',
      'Connect to a relational database and run queries using JDBC',
      'Understand dependency injection and inversion of control, and why Spring uses them',
      'Build REST controllers with Spring Boot: routing, request bodies, and response entities',
      'Validate incoming requests using Bean Validation annotations',
      'Model and persist data with Spring Data JPA: entities, repositories, and relationships',
      'Handle errors consistently with @ExceptionHandler and centralized error responses',
      'Read configuration from application.properties and environment-specific profiles',
      'Write basic unit and integration tests for a Spring Boot application',
      'Build a complete, real, database-backed REST API from scratch'
    ],
    km: [
      'យល់ដឹងពីតួនាទីរបស់ JVM, JDK និងរបៀបដែលកូដ Java ត្រូវបានរៀបចំ compile និងរត់',
      'រៀបចំរចនាសម្ព័ន្ធគម្រោង Java ពិតប្រាកដដោយប្រើ Maven: pom.xml, dependencies និង build lifecycle',
      'ប្រើប្រាស់ Java collections និង exception handling ក្នុងបរិបទ backend server',
      'ភ្ជាប់ទៅកាន់ Relational Database និងរត់ query ដោយប្រើ JDBC',
      'យល់ដឹងពី Dependency Injection (DI) និង Inversion of Control (IoC)',
      'សាង REST Controllers ជាមួយ Spring Boot: routing, request bodies និង response entities',
      'ផ្ទៀងផ្ទាត់ទិន្នន័យ Request ដោយប្រើ Bean Validation Annotations',
      'ម៉ូឌែល និងរក្សាទុកទិន្នន័យជាមួយ Spring Data JPA: entities, repositories និង relationships',
      'គ្រប់គ្រង Error តាមស្តង់ដារជាមួយ @ExceptionHandler និង @ControllerAdvice',
      'អានការកំណត់ពី application.properties និង environment profiles',
      'សរសេរ Unit និង Integration tests សម្រាប់ Spring Boot application',
      'សាង REST API ពិតប្រាកដពេញលេញភ្ជាប់ជាមួយ Database ពីដំបូង'
    ]
  },
  toolsAndSetup: {
    en: '1. Install a JDK (Java 17 or later LTS) — verify with java -version and javac -version\n2. Install Maven (or use mvnw wrapper) — verify with mvn -v\n3. Install an IDE with Java support (IntelliJ IDEA Community Edition recommended)\n4. Generate a starter project from start.spring.io (Spring Initializr) with Web, JPA, Validation, and H2/PostgreSQL dependencies\n5. Import project into your IDE and run the Spring Boot application',
    km: '១. ដំឡើង JDK (Java 17 LTS ឬខ្ពស់ជាង) — ផ្ទៀងផ្ទាត់ជាមួយ java -version និង javac -version\n២. ដំឡើង Maven (ឬប្រើ mvnw wrapper) — ផ្ទៀងផ្ទាត់ជាមួយ mvn -v\n៣. ដំឡើង IDE គាំទ្រ Java (អនុសាសន៍៖ IntelliJ IDEA Community Edition)\n៤. បង្កើត Starter Project ពី start.spring.io ជាមួយ Web, JPA, Validation, និង H2/PostgreSQL dependencies\n៥. Import គម្រោងចូលក្នុង IDE ហើយដំណើរការ Spring Boot Application'
  },
  cheatSheet: [
    {
      concept: 'Maven Dependency (pom.xml)',
      code: `<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>`,
      explanation: {
        en: 'Declares external library dependency managed automatically by Maven.',
        km: 'ប្រកាស Library ខាងក្រៅដែលគ្រប់គ្រងដោយស្វ័យប្រវត្តិដោយ Maven។'
      }
    },
    {
      concept: 'Spring RestController Endpoint',
      code: `@RestController\n@RequestMapping("/api/products")\npublic class ProductController {\n    @GetMapping\n    public List<Product> getAll() { return productService.findAll(); }\n}`,
      explanation: {
        en: 'Maps HTTP requests directly to Java methods returning serialized JSON response.',
        km: 'ភ្ជាប់ HTTP Requests ទៅកាន់ Java Methods រួចបំប្លែង Response ជា JSON ស្វ័យប្រវត្តិ។'
      }
    },
    {
      concept: 'Spring Data JPA Repository',
      code: `public interface ProductRepository extends JpaRepository<Product, Long> {\n    List<Product> findByQuantityLessThan(int threshold);\n}`,
      explanation: {
        en: 'Provides free CRUD methods and automatic derived SQL query generation.',
        km: 'ផ្តល់ជូន CRUD Methods និងបង្កើត SQL Query ដោយស្វ័យប្រវត្តិពីឈ្មោះ Method។'
      }
    },
    {
      concept: 'Bean Validation Annotations',
      code: `public class CreateProductRequest {\n    @NotBlank(message = "Name is required")\n    private String name;\n    @Min(value = 0, message = "Quantity must be >= 0")\n    private int quantity;\n}`,
      explanation: {
        en: 'Validates incoming DTO request parameters automatically before controller code executes.',
        km: 'ផ្ទៀងផ្ទាត់ទិន្នន័យ Request ស្វ័យប្រវត្តិតាមរយៈ Annotations មុនពេល Controller ដំណើរការ។'
      }
    }
  ],
  quiz: [
    {
      id: 'java-be-q1',
      question: {
        en: 'What is the primary role of the Java Virtual Machine (JVM)?',
        km: 'តើតួនាទីចម្បងរបស់ Java Virtual Machine (JVM) គឺជាអ្វី?'
      },
      options: [
        { id: '1', text: { en: 'Executes compiled Java bytecode (.class files) on specific OS/hardware architectures', km: 'ដំណើរការកូដ Java bytecode (.class) ដែលបាន compile រួចនៅលើ OS និង Hardware ជាក់ស្តែង' }, isCorrect: true },
        { id: '2', text: { en: 'Converts Java source code directly into HTML and CSS files', km: 'បំប្លែងកូដ Java ទៅជា HTML និង CSS ដោយផ្ទាល់' }, isCorrect: false },
        { id: '3', text: { en: 'Replaces the need for relational database query language', km: 'ជំនួសការប្រើប្រាស់ភាសា SQL ក្នុង Database' }, isCorrect: false },
        { id: '4', text: { en: 'Compiles Java files into raw machine code prior to execution', km: 'ចងក្រងឯកសារ Java ទៅជា Machine code មុនពេលដំណើរការ' }, isCorrect: false }
      ],
      explanation: {
        en: 'javac compiles Java source code to bytecode (.class), which the JVM then executes across operating systems.',
        km: 'javac ចងក្រង Java source code ទៅជា bytecode (.class) ហើយ JVM ជាអ្នកដំណើរការ bytecode នោះ។'
      }
    },
    {
      id: 'java-be-q2',
      question: {
        en: 'How does Spring Boot resolve dependency injection for class components?',
        km: 'តើ Spring Boot ដោះស្រាយ Dependency Injection ដោយរបៀបណា?'
      },
      options: [
        { id: '1', text: { en: 'Via Inversion of Control (IoC) container managing bean lifecycles with annotations like @Service and constructor injection', km: 'តាមរយៈ Inversion of Control (IoC) Container ដែលគ្រប់គ្រង Beans ជាមួយ Annotations ដូចជា @Service និង Constructor Injection' }, isCorrect: true },
        { id: '2', text: { en: 'By forcing manual "new" keyword instantiation in every controller class', km: 'ដោយតម្រូវឱ្យប្រើពាក្យ "new" ដោយដៃក្នុងគ្រប់ Controller Class' }, isCorrect: false },
        { id: '3', text: { en: 'By compiling code into static C shared object libraries', km: 'ដោយ Compile កូដទៅជា Static C Shared Libraries' }, isCorrect: false },
        { id: '4', text: { en: 'Through manual XML parsing on every HTTP web request', km: 'តាមរយៈការអាន XML ដោយដៃរាល់ពេលមាន Web Request' }, isCorrect: false }
      ],
      explanation: {
        en: 'Spring IoC container instantiates beans (@Component/@Service/@Repository) and injects them automatically.',
        km: 'Spring IoC Container បង្កើត Beans ស្វ័យប្រវត្តិ និងធ្វើ Injection ដោយមិនបាច់ instantiate ជាមួយ "new" ឡើយ។'
      }
    }
  ],
  capstoneProject: {
    id: 'inventory-hub-api',
    slug: 'inventory-hub-api',
    title: {
      en: 'InventoryHub API',
      km: 'InventoryHub REST API ជាមួយ Spring Boot & Spring Data JPA'
    },
    description: {
      en: 'A real, database-backed Spring Boot REST API for managing product inventory: create/read/update/delete products, category relationships, stock-level validation, and centralized error handling, backed by a real relational database via Spring Data JPA.',
      km: 'REST API ពិតប្រាកដដែលគាំទ្រដោយ Database សម្រាប់គ្រប់គ្រងស្កុកផលិតផល៖ CRUD ផលិតផល, ទំនាក់ទំនង Category, ការផ្ទៀងផ្ទាត់ចំនួនស្កុក និងការគ្រប់គ្រង Error តាមស្តង់ដារដោយប្រើប្រាស់ Spring Boot និង Spring Data JPA។'
    },
    featureChecklist: {
      en: [
        'GET /products — list all products, with optional filtering by category',
        'GET /products/{id} — get a single product by id',
        'POST /products — create a new product, with validated input (name required, quantity >= 0)',
        'PUT /products/{id} — update a product\'s details or stock quantity',
        'DELETE /products/{id} — delete a product',
        'Category entity with a one-to-many relationship to Product',
        'GET /products/low-stock — list products below a configurable stock threshold',
        'Centralized error handling via @ControllerAdvice returning consistent JSON error responses',
        'Data persisted in a real relational database (H2 for development, PostgreSQL for production)'
      ],
      km: [
        'GET /products — បង្ហាញបញ្ជីផលិតផលទាំងអស់ ឬ Filter តាម Category',
        'GET /products/{id} — បង្ហាញព័ត៌មានលម្អិតនៃផលិតផលតាម ID',
        'POST /products — បង្កើតផលិតផលថ្មីជាមួយការផ្ទៀងផ្ទាត់ (ឈ្មោះទាមទារ ចំនួន >= 0)',
        'PUT /products/{id} — កែប្រែព័ត៌មាន ឬចំនួនស្កុកនៃផលិតផល',
        'DELETE /products/{id} — លុបផលិតផលចេញពីប្រព័ន្ធ',
        'Category Entity ភ្ជាប់ទំនាក់ទំនង One-to-Many ជាមួយ Product Entity',
        'GET /products/low-stock — បង្ហាញផលិតផលដែលមានស្កុកទាបជាងកម្រិតកំណត់',
        'គ្រប់គ្រង Error កណ្តាលតាមរយៈ @ControllerAdvice បង្ហាញ JSON Response តាមស្តង់ដារ',
        'រក្សាទុកទិន្នន័យក្នុង Relational Database (H2 សម្រាប់ Dev, PostgreSQL សម្រាប់ Production)'
      ]
    },
    starterCode: {
      language: 'java',
      code: `// InventoryHubApplication.java
package com.example.inventoryhub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class InventoryHubApplication {
    public static void main(String[] args) {
        SpringApplication.run(InventoryHubApplication.class, args);
        System.out.println("InventoryHub API ready on port 8080!");
    }
}`
    },
    finalCode: `// Complete Spring Boot Product Controller & Service Architecture
package com.example.inventoryhub.controller;

import com.example.inventoryhub.entity.Product;
import com.example.inventoryhub.repository.ProductRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping
    public List<Product> getAllProducts(@RequestParam(required = false) String category) {
        if (category != null && !category.isBlank()) {
            return productRepository.findByCategory(category);
        }
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        return productRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product) {
        Product savedProduct = productRepository.save(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @Valid @RequestBody Product updatedDetails) {
        return productRepository.findById(id)
                .map(product -> {
                    product.setName(updatedDetails.getName());
                    product.setQuantity(updatedDetails.getQuantity());
                    product.setPrice(updatedDetails.getPrice());
                    product.setCategory(updatedDetails.getCategory());
                    return ResponseEntity.ok(productRepository.save(product));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/low-stock")
    public List<Product> getLowStockProducts(@RequestParam(defaultValue = "10") int threshold) {
        return productRepository.findByQuantityLessThan(threshold);
    }
}`,
    sampleRequests: [
      {
        title: 'GET /api/products',
        method: 'GET',
        url: '/api/products',
        responseStatus: 200,
        responseBody: JSON.stringify([
          { id: 1, name: 'Wireless Keyboard', category: 'Electronics', price: 49.99, quantity: 25 },
          { id: 2, name: 'Ergonomic Mouse', category: 'Electronics', price: 29.99, quantity: 5 }
        ], null, 2)
      },
      {
        title: 'POST /api/products',
        method: 'POST',
        url: '/api/products',
        body: JSON.stringify({ name: 'USB-C Cable', category: 'Accessories', price: 12.50, quantity: 100 }, null, 2),
        responseStatus: 201,
        responseBody: JSON.stringify({ id: 3, name: 'USB-C Cable', category: 'Accessories', price: 12.50, quantity: 100 }, null, 2)
      },
      {
        title: 'GET /api/products/low-stock?threshold=10',
        method: 'GET',
        url: '/api/products/low-stock?threshold=10',
        responseStatus: 200,
        responseBody: JSON.stringify([
          { id: 2, name: 'Ergonomic Mouse', category: 'Electronics', price: 29.99, quantity: 5 }
        ], null, 2)
      }
    ]
  },
  modules: [
    // Module 1 — Introduction & Setup (4 lessons)
    {
      moduleNumber: 1,
      title: {
        en: 'Module 1 — Introduction & Setup',
        km: 'មេរៀនទី ១ — ការណែនាំ និងការរៀបចំ បរិស្ថានកូដ'
      },
      description: {
        en: 'Understand how the JVM executes bytecode, install the JDK and Maven, compile code manually, and generate a Spring Boot starter project.',
        km: 'យល់ដឹងពីរបៀបដែល JVM ដំណើរការ Bytecode, ដំឡើង JDK/Maven, Compile កូដដោយដៃ និងបង្កើត Spring Boot Project ដំបូង។'
      },
      lessons: [
        {
          id: 'java-1-1',
          slug: 'java-jvm-backend-architecture',
          moduleNumber: 1,
          lessonNumberInModule: 1,
          title: {
            en: '1.1 Why Java for backend, and how the JVM fits in',
            km: '១.១ ហេតុអ្វីបានជាជ្រើសរើស Java សម្រាប់ Backend និងតួនាទីរបស់ JVM'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Explain what the JVM does, how bytecode is executed across platforms, and why Java dominates enterprise backends.',
            km: 'ពន្យល់ពីតួនាទីរបស់ JVM, របៀបដំណើរការ Bytecode លើគ្រប់ Operating Systems និងហេតុផលដែល Java ពេញនិយមលើ Enterprise Backend។'
          },
          explanation: {
            en: 'When you write Java code, you don\'t compile it directly into machine code the way some other languages do — instead, javac compiles your .java files into an intermediate format called bytecode, stored in .class files. The Java Virtual Machine (JVM) is what actually runs that bytecode, translating it into instructions your specific operating system and CPU understand. This extra layer is exactly why Java became so dominant in backend engineering: the same compiled bytecode runs unmodified on Linux servers, Windows machines, or anywhere else a JVM exists ("write once, run anywhere"), and the JVM handles memory management (garbage collection) for you automatically. This course assumes you already know Java\'s syntax and OOP concepts — everything from here is about applying that language, running on the JVM, to real backend systems.',
            km: 'នៅពេលអ្នកសរសេរកូដ Java, អ្នកមិនបានចងក្រងវាដោយផ្ទាល់ទៅជា machine code ដូចភាសាមួយចំនួនផ្សេងទៀតទេ — ផ្ទុយទៅវិញ javac ចងក្រងឯកសារ .java របស់អ្នកទៅជាទម្រង់កម្រិតកណ្តាលហៅថា bytecode ដែលរក្សាទុកក្នុងឯកសារ .class។ Java Virtual Machine (JVM) គឺជាអ្វីដែលដំណើរការ bytecode នោះជាក់ស្តែង ដោយបកប្រែវាទៅជាការណែនាំដែលប្រព័ន្ធប្រតិបត្តិការ និង CPU ជាក់លាក់របស់អ្នកយល់។ ស្រទាប់បន្ថែមនេះហើយជាមូលហេតុដែល Java ក្លាយជាភាសាឈានមុខគេក្នុងវិស័យ backend engineering៖ bytecode ដដែលដែលបានចងក្រងរត់បានដោយគ្មានការកែប្រែនៅលើ Linux servers, ម៉ាស៊ីន Windows ឬកន្លែងណាមួយផ្សេងទៀតដែលមាន JVM ("សរសេរម្តង រត់គ្រប់ទីកន្លែង"), ហើយ JVM គ្រប់គ្រងការគ្រប់គ្រងអង្គចងចាំ (garbage collection) ជូនអ្នកដោយស្វ័យប្រវត្តិ។'
          },
          tutorial: {
            en: 'Inspect Java version and JVM environment details:',
            km: 'ពិនិត្យមើលព័ត៌មានលម្អិតនៃ Java Version និង JVM Environment៖'
          },
          starterCode: {
            language: 'java',
            code: `public class HelloBackend {
    public static void main(String[] args) {
        System.out.println("Hello from the JVM!");
        System.out.println("Java version: " + System.getProperty("java.version"));
        System.out.println("OS Name: " + System.getProperty("os.name"));
    }
}`
          },
          practiceExercise: {
            question: {
              en: 'Write a command to compile HelloBackend.java into bytecode.',
              km: 'សរសេរ Command សម្រាប់ Compile ឯកសារ HelloBackend.java ទៅជា Bytecode (.class)។'
            },
            solution: `javac HelloBackend.java`
          },
          tips: {
            en: 'Never add the .class extension when invoking java executable (use "java HelloBackend", NOT "java HelloBackend.class").',
            km: 'កុំសរសេរកន្ទុយ .class ពេលដំណើរការ Command java (ប្រើ "java HelloBackend" មិនមែន "java HelloBackend.class" ឡើយ)។'
          },
          realWorldExample: {
            title: {
              en: 'Real-World Scale',
              km: 'ទំហំប្រើប្រាស់ក្នុងពិភពពិត'
            },
            description: {
              en: 'Banks and financial institutions rely on JVM garbage collection and type safety to handle millions of transactions per second reliably.',
              km: 'ស្ថាប័នហិរញ្ញវត្ថុ និងធនាគារពឹងផ្អែកលើ JVM Garbage Collection និង Type Safety ដើម្បីដំណើរការប្រតិបត្តិការរាប់លានក្នុងមួយវិនាទី។'
            }
          }
        },
        {
          id: 'java-1-2',
          slug: 'java-install-jdk-maven-ide',
          moduleNumber: 1,
          lessonNumberInModule: 2,
          title: {
            en: '1.2 Installing the JDK, Maven, and an IDE',
            km: '១.២ ការដំឡើង JDK, Maven និង IDE សម្រាប់ Java'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Set up a complete Java 17+ development environment with Maven and IntelliJ IDEA.',
            km: 'រៀបចំបរិស្ថានអភិវឌ្ឍន៍ Java 17+ រួមមាន Maven និង IntelliJ IDEA។'
          },
          explanation: {
            en: 'Developing Java backend applications requires the Java Development Kit (JDK) which contains compilers and diagnostic tools, Apache Maven for build orchestration, and an IDE with smart autocomplete like IntelliJ IDEA.',
            km: 'ការបង្កើត Java Backend ទាមទារ JDK (រួមមាន Compiler), Apache Maven (សម្រាប់ Build & Dependency) និង IDE ដូចជា IntelliJ IDEA។'
          },
          tutorial: {
            en: 'Verification commands in terminal:',
            km: 'Commands សម្រាប់ផ្ទៀងផ្ទាត់ក្នុង Terminal៖'
          },
          starterCode: {
            language: 'bash',
            code: `# Check Java compiler version
javac -version

# Check Java runtime environment
java -version

# Check Apache Maven version
mvn -v`
          }
        },
        {
          id: 'java-1-3',
          slug: 'java-compiling-running-manually',
          moduleNumber: 1,
          lessonNumberInModule: 3,
          title: {
            en: '1.3 Compiling and running a Java program manually (javac / java)',
            km: '១.៣ ការ Compile និង Run កូដ Java ដោយដៃ (javac / java)'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand the underlying compilation pipeline before introducing build tools like Maven or Gradle.',
            km: 'យល់ដឹងពីដំណើរការ Compilation Pipeline ខាងក្រោម មុនពេលប្រើប្រាស់ Build Tools។'
          },
          explanation: {
            en: 'Running javac source.java emits a .class file containing JVM bytecode. Running java ClassName loads that class and invokes its public static void main method.',
            km: 'Command "javac File.java" បង្កើត .class bytecode។ រីឯ "java ClassName" អាន bytecode នោះហើយដំណើរការ main method។'
          },
          starterCode: {
            language: 'java',
            code: `public class ServerCheck {
    public static void main(String[] args) {
        System.out.println("Status: ONLINE");
    }
}`
          }
        },
        {
          id: 'java-1-4',
          slug: 'java-spring-initializr-starter',
          moduleNumber: 1,
          lessonNumberInModule: 4,
          title: {
            en: '1.4 Generating a starter project with Spring Initializr',
            km: '១.៤ ការបង្កើត Starter Project ដោយប្រើ Spring Initializr'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Bootstrap a production-ready Spring Boot project using start.spring.io with required starter dependencies.',
            km: 'បង្កើតរចនាសម្ព័ន្ធគម្រោង Spring Boot តាមរយៈ start.spring.io ជាមួយ Dependencies ដែលចាំបាច់។'
          },
          explanation: {
            en: 'Spring Initializr configures project metadata, Java version (17/21), build tool (Maven), and automatically wires up starters like spring-boot-starter-web.',
            km: 'Spring Initializr រៀបចំ Metadata, Java Version (17/21), Build tool (Maven) និង Starters ដូចជា spring-boot-starter-web ស្វ័យប្រវត្តិ។'
          },
          starterCode: {
            language: 'java',
            code: `package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}`
          }
        }
      ]
    },

    // Module 2 — Project Structure with Maven (4 lessons)
    {
      moduleNumber: 2,
      title: {
        en: 'Module 2 — Project Structure with Maven',
        km: 'មេរៀនទី ២ — រចនាសម្ព័ន្ធគម្រោងជាមួយ Maven'
      },
      description: {
        en: 'Master Maven project object model (pom.xml), dependency resolution, plugins, and build lifecycles.',
        km: 'យល់ដឹងពី Maven pom.xml, ការទាញយក Dependency ស្វ័យប្រវត្តិ និង Build Lifecycle។'
      },
      lessons: [
        {
          id: 'java-2-1',
          slug: 'java-maven-overview-problem-solved',
          moduleNumber: 2,
          lessonNumberInModule: 1,
          title: {
            en: '2.1 What Maven is and the problem it solves',
            km: '២.១ អ្វីទៅជា Maven និងបញ្ហាដែលវាដោះស្រាយ'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Explain how Maven standardizes project layouts, manages transitive dependencies, and automates compilation builds.',
            km: 'ពន្យល់ពីរបៀបដែល Maven រៀបចំ Folder ស្តង់ដារ និងគ្រប់គ្រង Libraries ខាងក្រៅដោយស្វ័យប្រវត្តិ។'
          },
          explanation: {
            en: 'Before Maven, developers manually downloaded .jar files and managed classpaths. Maven introduced standard directory conventions (src/main/java) and repository dependency resolution.',
            km: 'មុនមាន Maven អ្នកសរសេរកូដត្រូវទាញយក .jar file ដោយដៃ។ Maven បង្កើតរចនាសម្ព័ន្ធស្តង់ដារ (src/main/java) និងទាញយក Libraries ស្វ័យប្រវត្តិ។'
          },
          starterCode: {
            language: 'text',
            code: `my-app/
├── pom.xml
└── src/
    ├── main/
    │   ├── java/
    │   └── resources/
    └── test/
        └── java/`
          }
        },
        {
          id: 'java-2-2',
          slug: 'java-maven-pom-xml-anatomy',
          moduleNumber: 2,
          lessonNumberInModule: 2,
          title: {
            en: '2.2 Anatomy of pom.xml: dependencies, plugins, and properties',
            km: '២.២ ការយល់ដឹងពី pom.xml: Dependencies, Plugins និង Properties'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Read and edit pom.xml to configure groupId, artifactId, dependencies, and compiler target properties.',
            km: 'អាន និងកែប្រែ pom.xml ដើម្បីកំណត់ groupId, artifactId, dependencies និងកំណែ Java។'
          },
          explanation: {
            en: 'Real Java backend projects rely on dozens of external libraries — for web servers, databases, JSON parsing, and more — and manually downloading and wiring up each .jar file yourself would be unmanageable. Maven solves this with pom.xml ("Project Object Model"), a single file that declares which libraries your project depends on, which versions, and how to build the project.',
            km: 'គម្រោង Java Backend ពឹងផ្អែកលើ Libraries ជាច្រើន។ Maven ដោះស្រាយបញ្ហានេះតាមរយៈ pom.xml ដែលជាកន្លែងប្រកាស Libraries, Versions និងរបៀប Build គម្រោង។'
          },
          starterCode: {
            language: 'xml',
            code: `<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>inventoryhub</artifactId>
    <version>1.0.0</version>

    <properties>
        <java.version>17</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>`
          },
          practiceExercise: {
            question: {
              en: 'Add the spring-boot-starter-validation dependency to the pom.xml snippet.',
              km: 'បន្ថែម spring-boot-starter-validation dependency ចូលក្នុង pom.xml។'
            },
            solution: `<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>`
          }
        },
        {
          id: 'java-2-3',
          slug: 'java-maven-build-lifecycle',
          moduleNumber: 2,
          lessonNumberInModule: 3,
          title: {
            en: '2.3 The Maven build lifecycle: compile, test, package',
            km: '២.៣ Maven Build Lifecycle: compile, test, package'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Execute Maven phases to compile code, run tests, and package executable JAR files.',
            km: 'ដំណើរការ Maven commands ដូចជា compile, test និង package សម្រាប់បង្កើត executable JAR file។'
          },
          explanation: {
            en: 'Maven build phases are sequential: mvn compile compiles source files; mvn test executes unit tests; mvn package bundles output into a runnable .jar artifact.',
            km: 'Maven Build Phases ដំណើរការតាមលំដាប់៖ mvn compile, mvn test រួចបង្កើតជា .jar file តាមរយៈ mvn package។'
          },
          starterCode: {
            language: 'bash',
            code: `# Clean target folder and compile
mvn clean compile

# Run tests
mvn test

# Package into executable JAR
mvn package`
          }
        },
        {
          id: 'java-2-4',
          slug: 'java-maven-practice-add-dependency',
          moduleNumber: 2,
          lessonNumberInModule: 4,
          title: {
            en: '2.4 Practice: add a new dependency to a project and confirm it resolves',
            km: '២.៤ អនុវត្ត៖ បន្ថែម Dependency ថ្មីក្នុង គម្រោង និងផ្ទៀងផ្ទាត់'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Add an external utility dependency (Jackson or Lombok) and verify compilation resolves imports cleanly.',
            km: 'បន្ថែម Library ខាងក្រៅក្នុង pom.xml រួចផ្ទៀងផ្ទាត់ការ Compile និង Import។'
          },
          starterCode: {
            language: 'xml',
            code: `<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>`
          }
        }
      ]
    },

    // Module 3 — Core Java for Backend Work (5 lessons)
    {
      moduleNumber: 3,
      title: {
        en: 'Module 3 — Core Java for Backend Work',
        km: 'មេរៀនទី ៣ — គ្រឹះ Java សម្រាប់ការងារ Backend'
      },
      description: {
        en: 'Leverage Collections API, Exception Handling boundaries, Java 17 Records, and Optional patterns.',
        km: 'ប្រើប្រាស់ Collections API, ការគ្រប់គ្រង Exception, Java 17 Records និង Optional សម្រាប់ចៀសវាង Null Pointer Errors។'
      },
      lessons: [
        {
          id: 'java-3-1',
          slug: 'java-collections-backend-context',
          moduleNumber: 3,
          lessonNumberInModule: 1,
          title: {
            en: '3.1 Collections in a backend context: List, Map, and Set recap',
            km: '៣.១ Java Collections ក្នុងបរិបទ Backend: List, Map និង Set'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Choose appropriate collection types (ArrayList, HashMap, HashSet) for API data manipulation.',
            km: 'ជ្រើសរើសប្រភេទ Collection ដែលសមស្រប (ArrayList, HashMap, HashSet) សម្រាប់ចាត់ចែងទិន្នន័យក្នុង API។'
          },
          explanation: {
            en: 'Backend APIs constantly work with dynamic groups of items: List for ordered duplicates, Set for unique lookup, and Map for key-value pair dictionaries.',
            km: 'Backend APIs ប្រើប្រាស់ List សម្រាប់ទិន្នន័យរៀបតាមលំដាប់, Set សម្រាប់ទិន្នន័យមិនជាន់គ្នា, និង Map សម្រាប់ Key-Value។'
          },
          starterCode: {
            language: 'java',
            code: `import java.util.*;

public class CollectionDemo {
    public static void main(String[] args) {
        List<String> categories = List.of("Electronics", "Clothing", "Books");
        Map<String, Double> prices = Map.of("Laptop", 999.99, "Phone", 699.99);

        System.out.println("Categories: " + categories);
        System.out.println("Phone Price: $" + prices.get("Phone"));
    }
}`
          }
        },
        {
          id: 'java-3-2',
          slug: 'java-exception-handling-patterns',
          moduleNumber: 3,
          lessonNumberInModule: 2,
          title: {
            en: '3.2 Exception handling patterns: checked vs unchecked exceptions',
            km: '៣.២ ស្តង់ដារនៃការគ្រប់គ្រង Exception: Checked vs Unchecked Exceptions'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Differentiate between Checked Exceptions (IOException) and Unchecked RuntimeExceptions in enterprise service design.',
            km: 'បែងចែករវាង Checked Exception និង RuntimeException ក្នុងការរចនា Backend Services។'
          },
          explanation: {
            en: 'Spring Boot applications prefer unchecked RuntimeExceptions for business validation errors so they propagate cleanly to central REST exception handlers.',
            km: 'Spring Boot និយមប្រើ RuntimeException សម្រាប់ Validation Errors ដើម្បីឱ្យវាផ្ញើទៅកាន់ Centralized Exception Handler ដោយស្វ័យប្រវត្តិ។'
          },
          starterCode: {
            language: 'java',
            code: `public class ExceptionDemo {
    public static void checkStock(int quantity) {
        if (quantity < 0) {
            throw new IllegalArgumentException("Stock quantity cannot be negative!");
        }
    }

    public static void main(String[] args) {
        try {
            checkStock(-5);
        } catch (IllegalArgumentException e) {
            System.err.println("Caught error: " + e.getMessage());
        }
    }
}`
          }
        },
        {
          id: 'java-3-3',
          slug: 'java-17-records-data-modeling',
          moduleNumber: 3,
          lessonNumberInModule: 3,
          title: {
            en: '3.3 Records for clean data modeling (Java 17+)',
            km: '៣.៣ Java 17 Records សម្រាប់ការបង្កើត Data Model ដោយខ្លី'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Model immutable Data Transfer Objects (DTOs) concisely using Java 17+ Records.',
            km: 'បង្កើត Immutable DTOs ដោយខ្លី និងស្អាតដោយប្រើប្រាស់ Java 17 Records។'
          },
          explanation: {
            en: 'Records automatically generate getters, equals(), hashCode(), and toString() for transparent data holding without verbose boilerplate class declarations.',
            km: 'Records បង្កើត Getters, equals(), hashCode() និង toString() ស្វ័យប្រវត្តិដោយមិនបាច់សរសេរ Boilerplate Code។'
          },
          starterCode: {
            language: 'java',
            code: `public record ProductRecord(Long id, String name, double price, int quantity) {}

public class RecordTest {
    public static void main(String[] args) {
        ProductRecord p = new ProductRecord(1L, "Mechanical Keyboard", 89.99, 15);
        System.out.println("Product: " + p.name() + " | Price: $" + p.price());
    }
}`
          }
        },
        {
          id: 'java-3-4',
          slug: 'java-optional-avoiding-null-bugs',
          moduleNumber: 3,
          lessonNumberInModule: 4,
          title: {
            en: '3.4 Optional — avoiding null-related bugs',
            km: '៣.៤ ការប្រើប្រាស់ Optional ដើម្បីចៀសវាង NullPointerExceptions'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Encapsulate nullable return values cleanly using java.util.Optional methods like orElseThrow and map.',
            km: 'ការពារ Null Values ដោយប្រើប្រាស់ Optional, orElseThrow, និង map។'
          },
          explanation: {
            en: 'Optional<T> forces caller code to handle potential missing values explicitly instead of throwing unexpected NullPointerExceptions at runtime.',
            km: 'Optional<T> តម្រូវឱ្យ Caller គ្រប់គ្រងករណីគ្មានទិន្នន័យដោយច្បាស់លាស់ ការពារការលេចចេញ NullPointerException។'
          },
          starterCode: {
            language: 'java',
            code: `import java.util.Optional;

public class OptionalDemo {
    public static Optional<String> findCategory(Long id) {
        if (id == 1L) return Optional.of("Electronics");
        return Optional.empty();
    }

    public static void main(String[] args) {
        String category = findCategory(1L).orElse("Uncategorized");
        System.out.println("Category found: " + category);
    }
}`
          }
        },
        {
          id: 'java-3-5',
          slug: 'java-practice-model-product-record',
          moduleNumber: 3,
          lessonNumberInModule: 5,
          title: {
            en: '3.5 Practice: model a simple Product record with validation logic',
            km: '៣.៥ អនុវត្ត៖ បង្កើត Product Record ជាមួយ Validation Logic'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Combine Java Records with compact constructor validation checks.',
            km: 'ផ្សំ Java Records ជាមួយ Validation Checks ក្នុង Compact Constructor។'
          },
          starterCode: {
            language: 'java',
            code: `public record ProductDto(Long id, String name, double price) {
    public ProductDto {
        if (price < 0) {
            throw new IllegalArgumentException("Price cannot be negative");
        }
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
    }
}`
          }
        }
      ]
    },

    // Module 4 — Databases & JDBC (4 lessons)
    {
      moduleNumber: 4,
      title: {
        en: 'Module 4 — Databases & JDBC',
        km: 'មេរៀនទី ៤ — المូលដ្ឋានទិន្នន័យ និង JDBC ក្នុង Java'
      },
      description: {
        en: 'Understand relational database concepts, JDBC connections, PreparedStatement security, and ResultSets mapping.',
        km: 'យល់ដឹងពី Relational Databases, ការភ្ជាប់ JDBC, ការប្រើ PreparedStatement ការពារ SQL Injection និង ResultSet Mapping។'
      },
      lessons: [
        {
          id: 'java-4-1',
          slug: 'java-relational-databases-sql-basics',
          moduleNumber: 4,
          lessonNumberInModule: 1,
          title: {
            en: '4.1 Relational databases recap: tables, rows, and SQL basics',
            km: '៤.១ ការរំលឹកសារឡើងវិញពី Relational Databases និង SQL'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Review relational schema design, primary keys, foreign keys, and SQL CRUD queries.',
            km: 'រំលឹកពី Schema, Primary Keys, Foreign Keys និង SQL Queries (SELECT, INSERT, UPDATE, DELETE)។'
          },
          starterCode: {
            language: 'sql',
            code: `CREATE TABLE products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL
);`
          }
        },
        {
          id: 'java-4-2',
          slug: 'java-jdbc-database-connection',
          moduleNumber: 4,
          lessonNumberInModule: 2,
          title: {
            en: '4.2 Connecting to a database with JDBC',
            km: '៤.២ ការភ្ជាប់ទៅកាន់ Database ដោយប្រើប្រាស់ JDBC'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Establish raw database connections using DriverManager and Connection objects.',
            km: 'រៀបចំ Connection ទៅកាន់ Database ដោយប្រើ DriverManager និង Connection object។'
          },
          starterCode: {
            language: 'java',
            code: `import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JdbcConnect {
    public static void main(String[] args) {
        String url = "jdbc:h2:mem:testdb";
        try (Connection conn = DriverManager.getConnection(url, "sa", "")) {
            System.out.println("Database connection established: " + !conn.isClosed());
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`
          }
        },
        {
          id: 'java-4-3',
          slug: 'java-jdbc-prepared-statements-security',
          moduleNumber: 4,
          lessonNumberInModule: 3,
          title: {
            en: '4.3 Running parameterized queries safely (avoiding SQL injection)',
            km: '៤.៣ ការរត់ Query សុវត្ថិភាពដោយប្រើ PreparedStatement (ការពារ SQL Injection)'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Prevent SQL injection security vulnerabilities by using PreparedStatement parameterized placeholders.',
            km: 'ការពារការវាយប្រហារ SQL Injection ដោយប្រើប្រាស់ PreparedStatement ជាមួយ ? Placeholders។'
          },
          starterCode: {
            language: 'java',
            code: `import java.sql.*;

public class SafeQuery {
    public static void insertProduct(Connection conn, String name, double price) throws SQLException {
        String sql = "INSERT INTO products (name, price) VALUES (?, ?)";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, name);
            stmt.setDouble(2, price);
            stmt.executeUpdate();
        }
    }
}`
          }
        },
        {
          id: 'java-4-4',
          slug: 'java-jdbc-practice-mapping-results',
          moduleNumber: 4,
          lessonNumberInModule: 4,
          title: {
            en: '4.4 Practice: query a table and map results into Java objects manually',
            km: '៤.៤ អនុវត្ត៖ Query តុទិន្នន័យ និង Map ResultSet ទៅជា Java Objects ដោយដៃ'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Iterate through ResultSet records and construct Java domain objects manually.',
            km: 'រាប់ជុំទិន្នន័យក្នុង ResultSet ហើយបំប្លែងវាទៅជា Java Objects ដោយដៃ។'
          },
          starterCode: {
            language: 'java',
            code: `// ResultSet mapping loop pattern
while (resultSet.next()) {
    Long id = resultSet.getLong("id");
    String name = resultSet.getString("name");
    double price = resultSet.getDouble("price");
    products.add(new ProductRecord(id, name, price, 0));
}`
          }
        }
      ]
    },

    // Module 5 — Spring Boot Fundamentals (5 lessons)
    {
      moduleNumber: 5,
      title: {
        en: 'Module 5 — Spring Boot Fundamentals',
        km: 'មេរៀនទី ៥ — គ្រឹះនៃ Spring Boot Framework'
      },
      description: {
        en: 'Understand Spring IoC Container, Dependency Injection, component scanning, and application properties.',
        km: 'យល់ដឹងពី Spring IoC Container, Dependency Injection, Component Scanning និង Application Configuration។'
      },
      lessons: [
        {
          id: 'java-5-1',
          slug: 'java-spring-boot-ecosystem-overview',
          moduleNumber: 5,
          lessonNumberInModule: 1,
          title: {
            en: '5.1 What Spring Boot is, and how it relates to the wider Spring ecosystem',
            km: '៥.១ អ្វីទៅជា Spring Boot និងទំនាក់ទំនងជាមួយ Spring Ecosystem'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Explain auto-configuration, starter dependencies, and embedded Tomcat web servers in Spring Boot.',
            km: 'ពន្យល់ពី Auto-configuration, Starter Dependencies និង Embedded Tomcat Web Server ក្នុង Spring Boot។'
          },
          explanation: {
            en: 'Spring Boot simplifies classic Spring configuration by introducing auto-configuration and embedded web containers so applications run as standalone executable JAR files.',
            km: 'Spring Boot សម្រួលការសរសេរ Configuration ក្នុង Spring បុរាណ ដោយផ្តល់ជូន Auto-configuration និង Embedded Server អាចរត់ជា Standalone JAR បាន។'
          },
          starterCode: {
            language: 'java',
            code: `@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`
          }
        },
        {
          id: 'java-5-2',
          slug: 'java-dependency-injection-ioc-explained',
          moduleNumber: 5,
          lessonNumberInModule: 2,
          title: {
            en: '5.2 Dependency injection and inversion of control explained',
            km: '៥.២ ការយល់ដឹងពី Dependency Injection (DI) និង Inversion of Control (IoC)'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand how Spring IoC manages object lifecycle and injects required dependencies at startup.',
            km: 'យល់ដឹងពីរបៀបដែល Spring IoC គ្រប់គ្រង Object Lifecycle និងធ្វើ Injection ស្វ័យប្រវត្តិ។'
          },
          explanation: {
            en: 'Inversion of Control delegates object instantiation to the container rather than manually creating dependencies with new. This decouples classes and simplifies unit testing.',
            km: 'Inversion of Control ប្រគល់ភារកិច្ចបង្កើត Object ឱ្យ Container ជាអ្នកគ្រប់គ្រង ជំនួសឱ្យការប្រើពាក្យ "new" ដោយដៃ។'
          },
          starterCode: {
            language: 'java',
            code: `// Constructor injection pattern (Recommended)
@Service
public class OrderService {
    private final PaymentGateway paymentGateway;

    public OrderService(PaymentGateway paymentGateway) {
        this.paymentGateway = paymentGateway;
    }
}`
          }
        },
        {
          id: 'java-5-3',
          slug: 'java-component-service-autowired-annotations',
          moduleNumber: 5,
          lessonNumberInModule: 3,
          title: {
            en: '5.3 The @Component, @Service, and @Autowired annotations',
            km: '៥.៣ ការប្រើប្រាស់ @Component, @Service និង @Autowired'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Stereotype Spring beans using @Component, @Service, @Repository, and @RestController.',
            km: 'ប្រកាស Spring Beans ដោយប្រើប្រាស់ @Component, @Service, @Repository, និង @RestController។'
          },
          starterCode: {
            language: 'java',
            code: `@Service
public class InventoryService {
    public boolean checkAvailability(Long productId) {
        return true;
    }
}`
          }
        },
        {
          id: 'java-5-4',
          slug: 'java-application-properties-configuration',
          moduleNumber: 5,
          lessonNumberInModule: 4,
          title: {
            en: '5.4 Application configuration with application.properties',
            km: '៥.៤ ការកំណត់ Configuration ក្នុង application.properties'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Configure server port, database connection parameters, and custom app properties.',
            km: 'កំណត់ Server Port, Database Credentials និងព័ត៌មានផ្សេងៗក្នុង application.properties។'
          },
          starterCode: {
            language: 'properties',
            code: `server.port=8080
spring.application.name=inventory-hub
spring.datasource.url=jdbc:h2:mem:inventory
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=`
          }
        },
        {
          id: 'java-5-5',
          slug: 'java-practice-injectable-service',
          moduleNumber: 5,
          lessonNumberInModule: 5,
          title: {
            en: '5.5 Practice: create an injectable service and use it from another class',
            km: '៥.៥ អនុវត្ត៖ បង្កើត Injectable Service និងយកទៅប្រើក្នុង Class ផ្សេង'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Wire a custom @Service class into a component using constructor injection.',
            km: 'ភ្ជាប់ @Service Class ចូលទៅក្នុង Class មួយទៀតតាមរយៈ Constructor Injection។'
          },
          starterCode: {
            language: 'java',
            code: `@Component
public class NotificationManager {
    private final InventoryService inventoryService;

    public NotificationManager(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }
}`
          }
        }
      ]
    },

    // Module 6 — Building REST APIs with Spring (5 lessons)
    {
      moduleNumber: 6,
      title: {
        en: 'Module 6 — Building REST APIs with Spring',
        km: 'មេរៀនទី ៦ — ការសាង REST APIs ជាមួយ Spring Boot'
      },
      description: {
        en: 'Build REST controllers, handle request parameters, manipulate HTTP response entities, and enforce bean validation rules.',
        km: 'បង្កើត REST Controllers, គ្រប់គ្រង Parameters, ប្រើ ResponseEntity និងផ្ទៀងផ្ទាត់ Bean Validation Rules។'
      },
      lessons: [
        {
          id: 'java-6-1',
          slug: 'java-rest-controller-mapping-http-methods',
          moduleNumber: 6,
          lessonNumberInModule: 1,
          title: {
            en: '6.1 @RestController and mapping HTTP methods with @GetMapping/@PostMapping',
            km: '៦.១ @RestController និង mapping HTTP Methods ជាមួយ @GetMapping/@PostMapping'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build a Spring Boot REST controller that responds to GET and POST requests using proper routing annotations.',
            km: 'បង្កើត REST Controller ក្នុង Spring Boot សម្រាប់ឆ្លើយតប GET និង POST Requests។'
          },
          explanation: {
            en: 'In Spring Boot, a class annotated @RestController tells Spring "this class handles incoming HTTP requests and returns data directly as the response body (usually as JSON)."',
            km: 'ក្នុង Spring Boot, Annotation @RestController ប្រាប់ Spring ថា Class នេះទទួល HTTP Requests ហើយត្រឡប់ Response ជា JSON ដោយស្វ័យប្រវត្តិ។'
          },
          starterCode: {
            language: 'java',
            code: `@RestController
@RequestMapping("/products")
public class ProductController {

    private final List<ProductRecord> products = new ArrayList<>();

    @GetMapping
    public List<ProductRecord> getAllProducts() {
        return products;
    }

    @PostMapping
    public ProductRecord createProduct(@RequestBody ProductRecord newProduct) {
        products.add(newProduct);
        return newProduct;
    }
}`
          },
          practiceExercise: {
            question: {
              en: 'Add a @GetMapping("/{id}") method returning a product by path variable ID.',
              km: 'បន្ថែម @GetMapping("/{id}") Method សម្រាប់ទាញយកផលិតផលតាមរយៈ PathVariable ID។'
            },
            solution: `@GetMapping("/{id}")
public ProductRecord getProductById(@PathVariable Long id) {
    return products.stream()
        .filter(p -> p.id().equals(id))
        .findFirst()
        .orElseThrow(() -> new RuntimeException("Product not found"));
}`
          }
        },
        {
          id: 'java-6-2',
          slug: 'java-request-bodies-path-variables-params',
          moduleNumber: 6,
          lessonNumberInModule: 2,
          title: {
            en: '6.2 Request bodies, path variables, and query parameters',
            km: '៦.២ ការប្រើប្រាស់ Request Bodies, Path Variables និង Query Parameters'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Extract input data from URI path segments (@PathVariable), query parameters (@RequestParam), and JSON body (@RequestBody).',
            km: 'ទាញយកទិន្នន័យបញ្ចូលពី URI Path (@PathVariable), Query Parameters (@RequestParam) និង JSON Body (@RequestBody)។'
          },
          starterCode: {
            language: 'java',
            code: `@GetMapping("/search")
public List<ProductRecord> search(
        @RequestParam String query,
        @RequestParam(defaultValue = "0") int page) {
    return List.of();
}`
          }
        },
        {
          id: 'java-6-3',
          slug: 'java-response-entity-http-status-codes',
          moduleNumber: 6,
          lessonNumberInModule: 3,
          title: {
            en: '6.3 ResponseEntity and returning proper HTTP status codes',
            km: '៦.៣ ResponseEntity និងការត្រឡប់ HTTP Status Codes ត្រឹមត្រូវ'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Wrap JSON response payloads with explicit HTTP status codes (200 OK, 201 Created, 404 Not Found) using ResponseEntity.',
            km: 'រៀបចំ Response ជាមួយ HTTP Status Codes (200, 201, 404) ដោយប្រើប្រាស់ ResponseEntity។'
          },
          starterCode: {
            language: 'java',
            code: `@GetMapping("/{id}")
public ResponseEntity<ProductRecord> getOne(@PathVariable Long id) {
    if (id == 1L) {
        return ResponseEntity.ok(new ProductRecord(1L, "Laptop", 999.0, 10));
    }
    return ResponseEntity.notFound().build();
}`
          }
        },
        {
          id: 'java-6-4',
          slug: 'java-validating-requests-bean-validation',
          moduleNumber: 6,
          lessonNumberInModule: 4,
          title: {
            en: '6.4 Validating requests with Bean Validation (@Valid, @NotBlank, etc.)',
            km: '៦.៤ ការផ្ទៀងផ្ទាត់ Request ដោយប្រើ Bean Validation (@Valid, @NotBlank)'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Apply validation constraints like @NotNull, @NotBlank, @Size, and @Min on incoming DTO objects.',
            km: 'កំណត់លក្ខខណ្ឌផ្ទៀងផ្ទាត់ទិន្នន័យ ដូចជា @NotNull, @NotBlank, @Size, និង @Min លើ DTO Objects។'
          },
          starterCode: {
            language: 'java',
            code: `public class CreateProductRequest {
    @NotBlank(message = "Product name is required")
    private String name;

    @Min(value = 0, message = "Quantity must be zero or greater")
    private int quantity;

    // getters and setters omitted
}`
          }
        },
        {
          id: 'java-6-5',
          slug: 'java-practice-two-endpoint-controller',
          moduleNumber: 6,
          lessonNumberInModule: 5,
          title: {
            en: '6.5 Practice: build a two-endpoint controller (list + create) for a resource',
            km: '៦.៥ អនុវត្ត៖ បង្កើត Controller ដែលមាន 2 Endpoints (List + Create)'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Construct a complete resource controller supporting GET list retrieval and POST validation creation.',
            km: 'បង្កើត Resource Controller ពេញលេញដែលគាំទ្រ GET (List) និង POST (Create ជាមួយ Validation)។'
          },
          starterCode: {
            language: 'java',
            code: `@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    private final List<String> categories = new ArrayList<>(List.of("Electronics", "Books"));

    @GetMapping
    public List<String> list() { return categories; }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody String name) {
        categories.add(name);
        return ResponseEntity.status(HttpStatus.CREATED).body(name);
    }
}`
          }
        }
      ]
    },

    // Module 7 — Persistence with Spring Data JPA (5 lessons)
    {
      moduleNumber: 7,
      title: {
        en: 'Module 7 — Persistence with Spring Data JPA',
        km: 'មេរៀនទី ៧ — ការរក្សាទុកទិន្នន័យជាមួយ Spring Data JPA'
      },
      description: {
        en: 'Model relational tables as JPA entities, write derived query methods, establish entity relationships, and configure database drivers.',
        km: 'បង្កើត JPA Entities, សរសេរ Derived Query Methods, ភ្ជាប់ Entity Relationships និងកំណត់ Database Driver។'
      },
      lessons: [
        {
          id: 'java-7-1',
          slug: 'java-jpa-entities-annotations-id-generated',
          moduleNumber: 7,
          lessonNumberInModule: 1,
          title: {
            en: '7.1 Entities and @Entity, @Id, @GeneratedValue',
            km: '៧.១ Entities និងការប្រើប្រាស់ @Entity, @Id, @GeneratedValue'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Map Java classes directly to relational database tables using Jakarta Persistence annotations.',
            km: 'ភ្ជាប់ Java Class ទៅកាន់ Database Table ដោយប្រើប្រាស់ Jakarta Persistence Annotations។'
          },
          starterCode: {
            language: 'java',
            code: `import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private double price;
    private int quantity;

    // Getters and setters
}`
          }
        },
        {
          id: 'java-7-2',
          slug: 'java-jpa-repositories-derived-queries',
          moduleNumber: 7,
          lessonNumberInModule: 2,
          title: {
            en: '7.2 Repositories: JpaRepository and derived query methods',
            km: '៧.២ Repositories: JpaRepository និង Derived Query Methods'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Persist and query entities using Spring Data JPA without writing manual SQL for common operations.',
            km: 'រក្សាទុក និងស្វែងរកទិន្នន័យក្នុង Database ដោយប្រើប្រាស់ JpaRepository និង Derived Query Methods ដោយមិនបាច់សរសេរ SQL។'
          },
          explanation: {
            en: 'Once a class is annotated @Entity, Spring Data JPA can map it directly to a database table. Instead of writing SQL by hand for basic operations, you define a Java interface extending JpaRepository<Product, Long>.',
            km: 'ពេល Class មាន @Entity, Spring Data JPA ភ្ជាប់វាទៅ Table។ អ្នកគ្រាន់តែបង្កើត Interface បន្តពី JpaRepository<Product, Long> ជាការស្រេច។'
          },
          starterCode: {
            language: 'java',
            code: `public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(String category);
    List<Product> findByQuantityLessThan(int threshold);
}`
          },
          practiceExercise: {
            question: {
              en: 'Write a derived query method signature to find products by name containing a string ignoring case.',
              km: 'សរសេរ Derived Query Method Signature សម្រាប់ស្វែងរកផលិតផលតាមឈ្មោះដោយមិនខ្វល់ពីអក្សរធំ/តូច។'
            },
            solution: `List<Product> findByNameContainingIgnoreCase(String keyword);`
          }
        },
        {
          id: 'java-7-3',
          slug: 'java-jpa-relationships-one-to-many',
          moduleNumber: 7,
          lessonNumberInModule: 3,
          title: {
            en: '7.3 Relationships: @OneToMany and @ManyToOne explained',
            km: '៧.៣ ទំនាក់ទំនងរវាង Tables: @OneToMany និង @ManyToOne'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Map foreign key relationships between parent categories and child products using JPA relationship annotations.',
            km: 'កំណត់ទំនាក់ទំនង Foreign Key រវាង Parent Category និង Child Products ដោយប្រើ @OneToMany និង @ManyToOne។'
          },
          starterCode: {
            language: 'java',
            code: `@Entity
public class Category {
    @Id @GeneratedValue
    private Long id;
    private String name;

    @OneToMany(mappedBy = "category")
    private List<Product> products = new ArrayList<>();
}`
          }
        },
        {
          id: 'java-7-4',
          slug: 'java-spring-boot-database-h2-postgresql',
          moduleNumber: 7,
          lessonNumberInModule: 4,
          title: {
            en: '7.4 Connecting Spring Boot to a real database (H2 for dev, PostgreSQL for prod)',
            km: '៧.៤ ការភ្ជាប់ Spring Boot ទៅកាន់ Database ពិតប្រាកដ (H2 សម្រាប់ Dev, PostgreSQL សម្រាប់ Prod)'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Configure in-memory H2 for development and PostgreSQL driver connection parameters for production deployments.',
            km: 'កំណត់ H2 In-Memory Database សម្រាប់ការរៀនសូត្រ និង PostgreSQL សម្រាប់ប្រព័ន្ធពិតប្រាកដ។'
          },
          starterCode: {
            language: 'properties',
            code: `# PostgreSQL Configuration example
spring.datasource.url=jdbc:postgresql://localhost:5432/inventory_db
spring.datasource.username=postgres
spring.datasource.password=secret
spring.jpa.hibernate.ddl-auto=update`
          }
        },
        {
          id: 'java-7-5',
          slug: 'java-practice-persist-query-entity',
          moduleNumber: 7,
          lessonNumberInModule: 5,
          title: {
            en: '7.5 Practice: persist and query a simple entity through a repository',
            km: '៧.៥ អនុវត្ត៖ រក្សាទុក និងស្វែងរក Entity តាមរយៈ Repository'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Wire an entity repository into a test service and perform save() and findById() database operations.',
            km: 'ប្រើប្រាស់ Repository ក្នុង Service ដើម្បីអនុវត្ត save() និង findById() ទៅកាន់ Database។'
          },
          starterCode: {
            language: 'java',
            code: `@Service
public class ProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public Product create(Product p) {
        return repository.save(p);
    }
}`
          }
        }
      ]
    },

    // Module 8 — Errors, Testing & Capstone (4 lessons + capstone)
    {
      moduleNumber: 8,
      title: {
        en: 'Module 8 — Errors, Testing & Capstone',
        km: 'មេរៀនទី ៨ — ការគ្រប់គ្រង Error, Unit Testing និង Capstone Project'
      },
      description: {
        en: 'Implement global controller advice exception handling, unit tests with JUnit/Mockito, integration tests, and build the InventoryHub API capstone.',
        km: 'រៀបចំ Global Exception Handler, សរសេរ Unit Tests ជាមួយ JUnit/Mockito និងបញ្ចប់ Capstone Project InventoryHub API។'
      },
      lessons: [
        {
          id: 'java-8-1',
          slug: 'java-centralized-error-handling-controller-advice',
          moduleNumber: 1,
          lessonNumberInModule: 1,
          title: {
            en: '8.1 Centralized error handling with @ExceptionHandler and @ControllerAdvice',
            km: '៨.១ ការគ្រប់គ្រង Error កណ្តាលដោយប្រើ @ExceptionHandler និង @ControllerAdvice'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Intercept unhandled service exceptions centrally and format uniform JSON error responses across all REST endpoints.',
            km: 'ចាប់យក Exception ទាំងអស់ក្នុងប្រព័ន្ធមកគ្រប់គ្រងនៅកន្លែងតែមួយ ហើយបំប្លែងជា JSON Error Response តាមស្តង់ដារ។'
          },
          starterCode: {
            language: 'java',
            code: `@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(HttpStatus.NOT_FOUND.value(), ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
}`
          }
        },
        {
          id: 'java-8-2',
          slug: 'java-unit-testing-junit-mockito',
          moduleNumber: 8,
          lessonNumberInModule: 2,
          title: {
            en: '8.2 Writing a unit test with JUnit and Mockito',
            km: '៨.២ ការសរសេរ Unit Test ដោយប្រើប្រាស់ JUnit និង Mockito'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Isolate business logic layer tests by mocking repository interactions with Mockito and asserting outcomes with JUnit 5.',
            km: 'សរសេរ Test សម្រាប់ Business Logic ដោយ Mock Repository ជាមួយ Mockito និងផ្ទៀងផ្ទាត់លទ្ធផលជាមួយ JUnit 5។'
          },
          starterCode: {
            language: 'java',
            code: `@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

    @Mock
    private ProductRepository repository;

    @InjectMocks
    private ProductService service;

    @Test
    void testFindById() {
        Product p = new Product();
        p.setName("Keyboard");
        Mockito.when(repository.findById(1L)).thenReturn(Optional.of(p));

        Product result = service.getById(1L);
        Assertions.assertEquals("Keyboard", result.getName());
    }
}`
          }
        },
        {
          id: 'java-8-3',
          slug: 'java-integration-testing-rest-endpoints',
          moduleNumber: 8,
          lessonNumberInModule: 3,
          title: {
            en: '8.3 Writing a basic integration test for a REST endpoint',
            km: '៨.៣ ការសរសេរ Integration Test សម្រាប់ REST Endpoint'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Test full HTTP request-response execution stack using @SpringBootTest and MockMvc.',
            km: 'សាកល្បងដំណើរការ HTTP Request-Response ពេញលេញដោយប្រើប្រាស់ @SpringBootTest និង MockMvc។'
          },
          starterCode: {
            language: 'java',
            code: `@SpringBootTest
@AutoConfigureMockMvc
class ProductControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void shouldReturnProductList() throws Exception {
        mockMvc.perform(get("/api/products"))
               .andExpect(status().isOk());
    }
}`
          }
        },
        {
          id: 'java-8-4',
          slug: 'java-planning-inventory-hub-capstone',
          moduleNumber: 8,
          lessonNumberInModule: 4,
          title: {
            en: '8.4 Planning the InventoryHub capstone (entities, endpoints, features)',
            km: '៨.៤ ការរៀបចំផែនការសម្រាប់ Capstone Project InventoryHub'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Architect the data entities, REST endpoints, DTO validations, and repository relationships for the capstone API.',
            km: 'រៀបចំ Architecture, Entities, REST Endpoints, DTO Validation និង Repository Relationships សម្រាប់ Capstone API។'
          },
          starterCode: {
            language: 'text',
            code: `InventoryHub API Scope:
1. Product & Category Entities (JPA @ManyToOne)
2. ProductRepository with custom low-stock query
3. ProductController with CRUD + low-stock search
4. GlobalExceptionHandler with clean JSON error responses`
          }
        }
      ]
    }
  ]
};
