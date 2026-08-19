import { BackendCourse } from '../backendCoursesHubData';

export const SPRING_BOOT_COURSE_DATA: BackendCourse = {
  id: 'spring-boot',
  slug: 'spring-boot',
  title: {
    en: 'Spring Boot — Enterprise APIs with Java',
    km: 'Spring Boot — សាង API សហគ្រាសដោយប្រើ Java'
  },
  iconName: 'spring',
  type: 'framework',
  parentLanguageId: 'java-backend',
  categoryId: 'frameworks',
  difficulty: 'Advanced',
  shortDescription: {
    en: 'The standard framework behind large-scale enterprise backends — banks, logistics, and Fortune 500 systems run on this.',
    km: 'Framework ស្តង់ដារនៅពីក្រោយ backend សហគ្រាសទំហំធំ — ធនាគារ ភស្តុភារ និងប្រព័ន្ធក្រុមហ៊ុនធំៗរត់លើវានេះ។'
  },
  summary: {
    en: 'Spring Boot is the standard framework for building production Java backends, and it\'s especially dominant in enterprise environments — banking systems, logistics platforms, insurance software, and large-scale internal tools at big companies frequently run on Spring Boot. It\'s built on top of the broader Spring Framework and adds auto-configuration and sensible defaults so you can get a real, production-grade API running in minutes instead of hours of manual setup. This course assumes solid Java fundamentals (classes, interfaces, collections, exceptions) and focuses on Spring Boot itself: dependency injection, building a proper layered architecture (Controller → Service → Repository), persisting data with Spring Data JPA, securing endpoints with Spring Security and JWT, and writing tests. By the end, you\'ll understand exactly how large, real-world Java backend systems are structured — a genuinely valuable skill for landing roles at established companies and larger organizations that rely on Java at scale.',
    km: 'Spring Boot ជា framework ស្តង់ដារសម្រាប់សាង backend Java កម្រិតផលិតកម្ម ហើយវាមានឥទ្ធិពលពិសេសនៅក្នុងបរិយាកាសសហគ្រាស — ប្រព័ន្ធធនាគារ វេទិកាភស្តុភារ កម្មវិធីធានារ៉ាប់រង និងឧបករណ៍ខាងក្នុងទំហំធំនៅក្រុមហ៊ុនធំៗ ជាញឹកញាប់រត់លើ Spring Boot។ វាសាងលើ Spring Framework ធំទូលាយ ហើយបន្ថែម auto-configuration និងលំនាំដើមសមហេតុផល ដូច្នេះអ្នកអាចមាន API កម្រិតផលិតកម្មពិតប្រាកដដំណើរការក្នុងរយៈពេលប៉ុន្មាននាទី ជំនួសម៉ោងនៃការរៀបចំដោយដៃ។ វគ្គសិក្សានេះសន្មតថាមានមូលដ្ឋាន Java រឹងមាំ (classes, interfaces, collections, exceptions) ហើយផ្តោតលើ Spring Boot ខ្លួនឯង៖ dependency injection, ការសាងស្ថាបត្យកម្មជាស្រទាប់ត្រឹមត្រូវ (Controller → Service → Repository), ការរក្សាទុកទិន្នន័យជាមួយ Spring Data JPA, ការធានាសុវត្ថិភាព endpoint ជាមួយ Spring Security និង JWT និងការសរសេរតេស្ត។ ចប់វគ្គនេះ អ្នកនឹងយល់ច្បាស់ពីរបៀបដែលប្រព័ន្ធ backend Java ពិតប្រាកដទំហំធំត្រូវបានរៀបចំរចនាសម្ព័ន្ធ — ជាជំនាញដ៏មានតម្លៃពិតប្រាកដសម្រាប់ការទទួលបានតួនាទីនៅក្រុមហ៊ុនដែលបានបង្កើតឡើងរួច និងស្ថាប័នធំៗដែលពឹងផ្អែកលើ Java ក្នុងទំហំធំ។'
  },
  estimatedHours: 28,
  lessonCount: 34,
  usedFor: 'Enterprise Banking Backends, High-Scale Microservices, Mission-Critical Financial APIs, Logistics Platforms',
  realWorldApps: ['ABA Bank API Gateways', 'Netflix Microservice Mesh', 'JPMorgan Chase Core Ledger', 'Target E-Commerce Engine'],
  prerequisites: {
    en: 'Solid Java fundamentals are required — classes, interfaces, inheritance, collections, and exception handling. Completing a Java fundamentals course (such as the "Java for Backend" course in this category or the "Java for Android" course) is strongly recommended before starting.',
    km: 'តម្រូវឱ្យមានមូលដ្ឋានគ្រឹះ Java រឹងមាំ — Classes, Interfaces, Inheritance, Collections និង Exception handling។ ការបញ្ចប់វគ្គសិក្សា Java មូលដ្ឋាន (ដូចជាវគ្គ "Java for Backend" ឬ "Java for Android") ត្រូវ បានអនុសាសន៍យ៉ាងខ្លាំងមុនពេលចាប់ផ្តើម។'
  },
  whatYouWillLearn: {
    en: [
      'Set up a Spring Boot project using Spring Initializr and Maven/Gradle',
      'Understand dependency injection and the Spring IoC (Inversion of Control) container',
      'Build REST controllers with @RestController and request-mapping annotations',
      'Structure a real backend using a layered architecture: Controller → Service → Repository',
      'Persist data with Spring Data JPA, including entities, repositories, and relationships',
      'Configure and use both H2 (in-memory, for development) and PostgreSQL (for production-style setups)',
      'Validate incoming data with Bean Validation annotations (@NotBlank, @Size, @NotNull)',
      'Handle errors consistently with @ExceptionHandler and @ControllerAdvice',
      'Secure endpoints with Spring Security and JWT authentication',
      'Write unit and integration tests for a Spring Boot application',
      'Understand the basics of packaging and deploying a Spring Boot application'
    ],
    km: [
      'បង្កើត និងរៀបចំ Spring Boot Project ដោយប្រើប្រាស់ Spring Initializr និង Maven/Gradle',
      'យល់ដឹងពី Dependency Injection និង Spring IoC (Inversion of Control) Container',
      'សាងសង់ REST Controllers ដោយប្រើ @RestController និង Request Mapping Annotations',
      'រៀបចំរចនាសម្ព័ន្ធ Backend ពិតប្រាកដតាម Layered Architecture៖ Controller → Service → Repository',
      'រក្សាទុកទិន្នន័យជាមួយ Spring Data JPA រួមមាន Entities, Repositories និង Relationships',
      'កំណត់រចនាសម្ព័ន្ធ H2 Database (សម្រាប់ Dev) និង PostgreSQL (សម្រាប់ Production)',
      'ត្រួតពិនិត្យទិន្នន័យ Request ចូលមកដោយប្រើ Bean Validation annotations (@NotBlank, @Size)',
      'គ្រប់គ្រងកំហុស Error ស្របតាមស្តង់ដារទូទាំងប្រព័ន្ធជាមួយ @ExceptionHandler និង @ControllerAdvice',
      'ការពារ និងធានាសុវត្ថិភាព Endpoints ជាមួយ Spring Security និង JWT Authentication',
      'សរសេរ Unit Tests និង Integration Tests សម្រាប់ Spring Boot Application',
      'យល់ដឹងពីមូលដ្ឋានគ្រឹះនៃការចងកញ្ចប់ (JAR) និងការដាក់ Deploy Spring Boot Application'
    ]
  },
  toolsAndSetup: {
    en: '1. Install JDK (version 17 or higher) — confirm via `java -version` in terminal\n2. Install IntelliJ IDEA (Community or Ultimate edition)\n3. Generate starter project at start.spring.io (Spring Initializr): select Maven, Java 17+, Spring Boot 3.x, and dependencies "Spring Web", "Spring Data JPA", "H2 Database", and "Validation"\n4. Unzip project, open in IntelliJ IDEA, and run the main class (`@SpringBootApplication`) to verify embedded Tomcat starts on port 8080.',
    km: '១. ដំឡើង JDK (កំណែ ១៧ ឬខ្ពស់ជាងនេះ) — ផ្ទៀងផ្ទាត់តាម `java -version` ក្នុង Terminal\n២. ដំឡើង IntelliJ IDEA (Community ឬ Ultimate edition)\n៣. បង្កើត Starter Project នៅ start.spring.io (Spring Initializr)៖ ជ្រើសរើស Maven, Java 17+, Spring Boot 3.x, និង Dependencies "Spring Web", "Spring Data JPA", "H2 Database", និង "Validation"\n៤. ពន្លាត Project បើកក្នុង IntelliJ IDEA រួចរត់ Main Class (`@SpringBootApplication`) ដើម្បីផ្ទៀងផ្ទាត់ថា embedded Tomcat ដំណើរការលើ Port 8080។'
  },
  cheatSheet: [
    {
      concept: 'Layered REST Controller with Constructor DI',
      code: `@RestController\n@RequestMapping("/api/v1/tasks")\npublic class TaskController {\n    private final TaskService taskService;\n\n    public TaskController(TaskService taskService) {\n        this.taskService = taskService;\n    }\n\n    @GetMapping\n    public ResponseEntity<List<TaskDto>> getAllTasks() {\n        return ResponseEntity.ok(taskService.findAll());\n    }\n}`,
      explanation: {
        en: 'Defines a Spring REST controller mapping /api/v1/tasks using recommended constructor dependency injection.',
        km: 'កំណត់ Spring REST Controller ភ្ជាប់ទៅកាន់ /api/v1/tasks ដោយប្រើប្រាស់ Constructor Dependency Injection ដែលជាវិធីស្តង់ដារ។'
      }
    },
    {
      concept: 'Spring Data JPA Repository',
      code: `@Repository\npublic interface TaskRepository extends JpaRepository<Task, Long> {\n    List<Task> findByCompleted(boolean completed);\n    List<Task> findByTitleContainingIgnoreCase(String title);\n}`,
      explanation: {
        en: 'Generates complete CRUD operations and custom SQL queries automatically from method signature names.',
        km: 'បង្កើត CRUD operations និង SQL Queries ដោយស្វ័យប្រវត្តិចេញពីឈ្មោះ Method Signature។'
      }
    },
    {
      concept: 'Global Exception Handling with @ControllerAdvice',
      code: `@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {\n        ErrorResponse error = new ErrorResponse("NOT_FOUND", ex.getMessage());\n        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);\n    }\n}`,
      explanation: {
        en: 'Intercepts exceptions across all controllers and formats clean, standardized JSON error responses.',
        km: 'ចាប់រាល់ Exceptions ចេញពី Controllers ទាំងអស់ និងបំប្លែងទៅជា JSON Error Responses ស្របតាមស្តង់ដារ។'
      }
    },
    {
      concept: 'Request Body Validation',
      code: `public record CreateTaskRequest(\n    @NotBlank(message = "Title is required")\n    @Size(max = 100, message = "Title too long")\n    String title,\n    String description\n) {}\n\n@PostMapping\npublic ResponseEntity<TaskDto> create(@Valid @RequestBody CreateTaskRequest req) {\n    return ResponseEntity.status(HttpStatus.CREATED).body(taskService.create(req));\n}`,
      explanation: {
        en: 'Enforces Bean Validation constraints on incoming JSON request payloads automatically before reaching the controller logic.',
        km: 'ត្រួតពិនិត្យភាពត្រឹមត្រូវនៃ Request Payload ដោយស្វ័យប្រវត្តិតាមរយៈ @Valid មុនពេលឈានដល់ Business Logic។'
      }
    }
  ],
  quiz: [
    {
      id: 'sb-q1',
      question: {
        en: 'Why is constructor injection strongly recommended over field injection (@Autowired on fields) in Spring Boot?',
        km: 'ហេតុអ្វីបានជា Constructor Injection ត្រូវបានណែនាំយ៉ាងខ្លាំងលើ Field Injection (@Autowired លើ variables) ក្នុង Spring Boot?'
      },
      options: [
        { id: '1', text: { en: 'It makes dependencies immutable (final), enables easy unit testing without Spring, and prevents null pointer bugs', km: 'វាធ្វើឱ្យ dependencies ជា immutable (final), ងាយស្រួលធ្វើ unit test ដោយមិនបាច់រត់ Spring, និងការពារ NullPointer' }, isCorrect: true },
        { id: '2', text: { en: 'Field injection is deprecated and causes build errors in Spring Boot 3', km: 'Field injection ត្រូវបានគេលុបចោល និងបង្កឱ្យមាន build errors' }, isCorrect: false },
        { id: '3', text: { en: 'Constructor injection speeds up database queries automatically', km: 'Constructor injection ជួយឱ្យ database queries រត់លឿនជាងមុន' }, isCorrect: false },
        { id: '4', text: { en: 'There is no difference between constructor and field injection', km: 'គ្មានភាពខុសគ្នារវាង constructor និង field injection ទេ' }, isCorrect: false }
      ],
      explanation: {
        en: 'Constructor injection allows dependencies to be declared as `final`, ensures all required dependencies are provided at object creation time, and makes unit testing straightforward without needing reflection or Spring Context.',
        km: 'Constructor injection អនុញ្ញាតឱ្យប្រកាស variable ជា `final` ធានាថា dependencies ទាំងអស់ត្រូវតែផ្ផ្តល់ឱ្យពេលបង្កើត object និងធ្វើឱ្យ Unit test ងាយស្រួលដោយមិនបាច់រត់ Spring Context។'
      }
    },
    {
      id: 'sb-q2',
      question: {
        en: 'What does Spring Data JPA\'s `JpaRepository` interface provide out of the box?',
        km: 'តើ `JpaRepository` interface របស់ Spring Data JPA ផ្តល់នូវអ្វីខ្លះដោយមិនបាច់សរសេរកូដបន្ថែម?'
      },
      options: [
        { id: '1', text: { en: 'Full CRUD operations (.findAll(), .findById(), .save(), .deleteById()) and pagination methods without writing implementation code', km: 'ប្រមាណវិធី CRUD ពេញលេញ (.findAll(), .findById(), .save(), .deleteById()) និង Pagination ដោយមិនបាច់សរសេរកូដអភិវឌ្ឍ' }, isCorrect: true },
        { id: '2', text: { en: 'HTML template rendering and CSS styles', km: 'ការបង្ហាញ HTML templates និង CSS styles' }, isCorrect: false },
        { id: '3', text: { en: 'Automatic JWT token generation on every query', km: 'ការបង្កើត JWT token ដោយស្វ័យប្រវត្តិនឹងគ្រប់ Query' }, isCorrect: false },
        { id: '4', text: { en: 'Only custom SQL string query execution', km: 'អាចរត់បានតែ Custom SQL Query ប៉ុណ្ណោះ' }, isCorrect: false }
      ],
      explanation: {
        en: 'Extending JpaRepository<Entity, ID> automatically gives you methods for saving, finding, counting, deleting, and paginating records.',
        km: 'ការរាប់បន្ថែមពី JpaRepository<Entity, ID> ផ្តល់ជូន Methods សម្រាប់រក្សាទុក, ស្វែងរក, រាប់, លុប និង Pagination ដោយស្វ័យប្រវត្តិ។'
      }
    }
  ],
  capstoneProject: {
    id: 'task-management-api-spring-boot',
    slug: 'task-management-api-spring-boot',
    title: {
      en: 'Task Management API (Spring Boot)',
      km: 'Task Management API (Spring Boot) ជាមួយ JPA & JWT Security'
    },
    description: {
      en: 'A layered, production-style REST API for managing tasks and projects, with a real database via Spring Data JPA, JWT-secured endpoints via Spring Security, input validation, and a proper Controller/Service/Repository structure — the kind of project real enterprise teams build every day.',
      km: 'ប្រព័ន្ធ REST API ជាស្រទាប់កម្រិតផលិតកម្មសម្រាប់គ្រប់គ្រង Task និង Project ដោយប្រើ Spring Data JPA, Bean Validation, Spring Security JWT និងស្ថាបត្យកម្ម Controller/Service/Repository។'
    },
    featureChecklist: {
      en: [
        'Task entity (title, description, completed, dueDate) persisted via Spring Data JPA',
        'Full CRUD REST endpoints (GET/POST/PUT/DELETE /api/v1/tasks) built through Controller/Service/Repository structure',
        'Input validation on create/update DTOs (e.g. title required, max length constraints)',
        'Centralized exception handling with @ControllerAdvice returning consistent JSON error responses',
        'JWT authentication: /api/v1/auth/login issues token; write operations require Bearer token',
        'At least one unit test (Service layer) and one integration test (@SpringBootTest for Controller)'
      ],
      km: [
        'Task entity (title, description, completed, dueDate) រក្សាទុកក្នុង DB តាមរយៈ Spring Data JPA',
        'Full CRUD REST endpoints (GET/POST/PUT/DELETE /api/v1/tasks) តាមរចនាសម្ព័ន្ធ Controller/Service/Repository',
        'Input validation លើ DTOs (លក្ខខណ្ឌ title មិនអាចទទេ និងប្រវែងកំណត់)',
        'Centralized exception handling ជាមួយ @ControllerAdvice បញ្ជូន JSON Error Response ស្របតាមស្តង់ដារ',
        'JWT Authentication: /api/v1/auth/login បញ្ចេញ Token; ការ Create/Update/Delete ទាមទារ Bearer Token',
        'សរសេរ Unit test (Service layer) យ៉ាងតិចមួយ និង Integration test (@SpringBootTest លើ Controller) យ៉ាងតិចមួយ'
      ]
    },
    starterCode: {
      language: 'java',
      code: `package com.example.taskmanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class TaskManagerApplication {

    public static void main(String[] args) {
        SpringApplication.run(TaskManagerApplication.class, args);
    }

    @GetMapping("/api/v1/health")
    public String healthCheck() {
        return "Task Management Enterprise API active on Spring Boot 3";
    }
}`
    },
    finalCode: `package com.example.taskmanager.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

public record TaskDto(Long id, String title, String description, boolean completed, LocalDate dueDate) {}
public record CreateTaskRequest(String title, String description, LocalDate dueDate) {}

@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {

    @GetMapping
    public ResponseEntity<List<TaskDto>> getAllTasks() {
        return ResponseEntity.ok(List.of(
            new TaskDto(1L, "Configure Spring Security", "Implement JWT Filter chain", false, LocalDate.now().plusDays(2)),
            new TaskDto(2L, "Set up PostgreSQL", "Configure application.yml datasource", true, LocalDate.now().minusDays(1))
        ));
    }

    @PostMapping
    public ResponseEntity<TaskDto> createTask(@RequestBody CreateTaskRequest req) {
        TaskDto created = new TaskDto(
            System.currentTimeMillis(),
            req.title(),
            req.description(),
            false,
            req.dueDate()
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
}`,
    sampleRequests: [
      {
        title: 'POST /api/v1/auth/login (Get JWT Token)',
        method: 'POST',
        url: '/api/v1/auth/login',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'devlead', password: 'enterprise_secret' }, null, 2),
        responseStatus: 200,
        responseBody: JSON.stringify({
          tokenType: 'Bearer',
          accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZXZsZWFkIiwiaWF0IjoxNjI1MD...',
          expiresInSeconds: 86400
        }, null, 2)
      },
      {
        title: 'GET /api/v1/tasks (List Tasks)',
        method: 'GET',
        url: '/api/v1/tasks',
        responseStatus: 200,
        responseBody: JSON.stringify([
          {
            id: 101,
            title: 'Setup Liquibase Migrations',
            description: 'Create initial database changelog for Task table',
            completed: false,
            dueDate: '2026-08-10'
          }
        ], null, 2)
      },
      {
        title: 'POST /api/v1/tasks (Create Protected Task)',
        method: 'POST',
        url: '/api/v1/tasks',
        headers: {
          'Authorization': 'Bearer <access_token_here>',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'Implement Controller Advice',
          description: 'Handle MethodArgumentNotValidException globally',
          dueDate: '2026-08-12'
        }, null, 2),
        responseStatus: 201,
        responseBody: JSON.stringify({
          id: 102,
          title: 'Implement Controller Advice',
          description: 'Handle MethodArgumentNotValidException globally',
          completed: false,
          dueDate: '2026-08-12'
        }, null, 2)
      }
    ]
  },
  modules: [
    // Module 1 — Introduction & Setup (3 lessons)
    {
      moduleNumber: 1,
      title: {
        en: 'Module 1 — Introduction & Setup',
        km: 'មេរៀនទី ១ — ការណែនាំ និងការរៀបចំ បរិស្ថានកូដ'
      },
      description: {
        en: 'Understand why enterprise teams choose Spring Boot, generate projects with Spring Initializr, and run your first REST endpoint.',
        km: 'យល់ដឹងពីហេតុផលដែលក្រុមសហគ្រាសជ្រើសរើស Spring Boot, បង្កើត Project ជាមួយ Spring Initializr និងរត់ REST endpoint ដំបូង។'
      },
      lessons: [
        {
          id: 'sb-1-1',
          slug: 'what-is-spring-boot-enterprise',
          moduleNumber: 1,
          lessonNumberInModule: 1,
          title: {
            en: '1.1 What is Spring Boot and why enterprise teams rely on it',
            km: '១.១ អ្វីជា Spring Boot និងហេតុអ្វីក្រុមសហគ្រាសពឹងផ្អែកលើវា'
          },
          durationMinutes: 15,
          difficulty: 'Intermediate',
          objective: {
            en: 'Explain what Spring Boot is and why larger, established companies gravitate toward it for backend systems.',
            km: 'ពន្យល់ពីអ្វីជា Spring Boot និងហេតុអ្វីបានជាក្រុមហ៊ុនធំៗជ្រើសរើសវាសម្រាប់ប្រព័ន្ធ Backend។'
          },
          explanation: {
            en: 'Spring Boot is built on top of the Spring Framework, which has been the dominant enterprise Java framework for over two decades. Spring Boot specifically solves the "too much configuration" complaint that older Spring projects were known for — it auto-configures sensible defaults, embeds a web server directly in your application (no separate server install needed), and gets you from zero to a running API extremely fast.',
            km: 'Spring Boot សាងលើ Spring Framework ដែលជា framework Java សហគ្រាសលេចធ្លោអស់រយៈពេលជាងពីរទសវត្សរ៍។ Spring Boot ដោះស្រាយបញ្ហា "ការកំណត់រចនាសម្ព័ន្ធច្រើនពេក" ដោយ auto-configure លំនាំដើមសមហេតុផល និងបង្កប់ web server ដោយផ្ទាល់ក្នុងកម្មវិធីរបស់អ្នក។'
          },
          starterCode: {
            language: 'java',
            code: `@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }
}`
          },
          practiceExercise: {
            question: {
              en: 'Modify HelloController to add a second endpoint GET /api/v1/status returning "Spring Boot 3 Operational".',
              km: 'កែប្រែ HelloController ដោយបន្ថែម endpoint ទីពីរ GET /api/v1/status ដែលបញ្ជូនត្រឡប់ "Spring Boot 3 Operational"។'
            },
            solution: `@GetMapping("/api/v1/status")
public String status() {
    return "Spring Boot 3 Operational";
}`
          },
          tips: {
            en: 'Without @RestController, Spring does not recognize the class as a web handler and methods will not be mapped as API endpoints.',
            km: 'ប្រសិនបើគ្មាន @RestController ទេ Spring មិនសម្គាល់ Class ជា Web handler ឡើយ ហើយ Methods នឹងមិនដំណើរការជា API endpoints បានឡើយ។'
          }
        },
        {
          id: 'sb-1-2',
          slug: 'spring-initializr-project-setup',
          moduleNumber: 1,
          lessonNumberInModule: 2,
          title: {
            en: '1.2 Generating a project with Spring Initializr and running it',
            km: '១.២ ការបង្កើត Project តាមរយៈ Spring Initializr និងការរត់កម្មវិធី'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Generate a Spring Boot project using start.spring.io, configure Maven dependencies, and run embedded Tomcat.',
            km: 'បង្កើត Spring Boot Project តាម start.spring.io, រៀបចំ Maven dependencies និងរត់ embedded Tomcat។'
          },
          starterCode: {
            language: 'xml',
            code: `<!-- pom.xml snippet -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>`
          }
        },
        {
          id: 'sb-1-3',
          slug: 'first-rest-endpoint-explained',
          moduleNumber: 1,
          lessonNumberInModule: 3,
          title: {
            en: '1.3 Your first REST endpoint — explained line by line',
            km: '១.៣ REST Endpoint ដំបូងរបស់អ្នក — បកស្រាយមួយជួរម្តងៗ'
          },
          durationMinutes: 18,
          difficulty: 'Intermediate',
          objective: {
            en: 'Analyze @SpringBootApplication, @RestController, and @GetMapping annotations and HTTP response flow.',
            km: 'វិភាគលើ Annotations @SpringBootApplication, @RestController, @GetMapping និងលំហូរ HTTP response។'
          },
          starterCode: {
            language: 'java',
            code: `package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello, World!";
    }
}`
          }
        }
      ]
    },

    // Module 2 — Spring Fundamentals: IoC & Dependency Injection (5 lessons)
    {
      moduleNumber: 2,
      title: {
        en: 'Module 2 — Spring Fundamentals: IoC & Dependency Injection',
        km: 'មេរៀនទី ២ — មូលដ្ឋានគ្រឹះ Spring៖ IoC & Dependency Injection'
      },
      description: {
        en: 'Master Inversion of Control (IoC), constructor dependency injection, Spring beans, and component stereotypes.',
        km: 'ស្ទាត់ជំនាញ Inversion of Control (IoC), Constructor Dependency Injection, Spring beans, និង Component stereotypes។'
      },
      lessons: [
        {
          id: 'sb-2-1',
          slug: 'dependency-injection-concept-and-ioc',
          moduleNumber: 2,
          lessonNumberInModule: 1,
          title: {
            en: '2.1 What is dependency injection, and why Spring is built around it',
            km: '២.១ អ្វីជា Dependency Injection និងហេតុអ្វី Spring សាងលើវា'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand dependency injection well enough to explain why Spring uses it everywhere, and use it correctly in code.',
            km: 'យល់ដឹងពី Dependency Injection ឱ្យបានច្បាស់លាស់ និងប្រើប្រាស់វាបានត្រឹមត្រូវក្នុងកូដ។'
          },
          explanation: {
            en: 'Dependency injection means a class doesn\'t create the objects it depends on itself — instead, those dependencies are "injected" (provided) from the outside, usually by a framework. Instead of a TaskService creating its own TaskRepository with new TaskRepository(), Spring creates the repository once and hands it to the service automatically.',
            km: 'Dependency injection មានន័យថា Class មិនបង្កើត Object ដែលវាត្រូវការដោយខ្លួនឯងទេ — ផ្ទុយទៅវិញ Dependencies ទាំងនោះត្រូវបាន "Inject" (ផ្តល់ឱ្យ) ពីខាងក្រៅដោយ Framework។'
          },
          starterCode: {
            language: 'java',
            code: `@Service
public class GreetingService {
    public String greet(String name) {
        return "Hello, " + name + "!";
    }
}

@RestController
public class GreetingController {
    private final GreetingService greetingService;

    // Constructor injection
    public GreetingController(GreetingService greetingService) {
        this.greetingService = greetingService;
    }

    @GetMapping("/greet/{name}")
    public String greet(@PathVariable String name) {
        return greetingService.greet(name);
    }
}`
          },
          practiceExercise: {
            question: {
              en: 'Create a second service, LoggingService, with a log(String message) method, and inject it into GreetingController alongside GreetingService.',
              km: 'បង្កើត Service ទីពីរ LoggingService មាន method log(String message) រួច inject ចូលទៅក្នុង GreetingController ជាមួយ GreetingService។'
            },
            solution: `@Service
public class LoggingService {
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
}

@RestController
public class GreetingController {
    private final GreetingService greetingService;
    private final LoggingService loggingService;

    public GreetingController(GreetingService greetingService, LoggingService loggingService) {
        this.greetingService = greetingService;
        this.loggingService = loggingService;
    }

    @GetMapping("/greet/{name}")
    public String greet(@PathVariable String name) {
        loggingService.log("Greeting requested for " + name);
        return greetingService.greet(name);
    }
}`
          }
        },
        {
          id: 'sb-2-2',
          slug: 'component-service-repository-stereotype-annotations',
          moduleNumber: 2,
          lessonNumberInModule: 2,
          title: {
            en: '2.2 @Component, @Service, @Repository — Spring\'s stereotype annotations',
            km: '២.២ @Component, @Service, @Repository — Stereotype Annotations របស់ Spring'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Differentiate between core Spring component annotations and when to apply each in application layers.',
            km: 'ចែកបំរែបំរួលរវាង Core Spring Component Annotations និងពេលវេលាដែលត្រូវប្រើប្រាស់នីមួយៗ។'
          },
          starterCode: {
            language: 'java',
            code: `@Repository // Persistence layer component
public class UserDao { }

@Service // Business logic layer component
public class UserService { }`
          }
        },
        {
          id: 'sb-2-3',
          slug: 'constructor-injection-vs-field-injection',
          moduleNumber: 2,
          lessonNumberInModule: 3,
          title: {
            en: '2.3 Constructor injection (the recommended approach) vs field injection',
            km: '២.៣ Constructor Injection vs Field Injection'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Compare constructor injection with field injection (@Autowired on fields) and understand why constructor injection is best practice.',
            km: 'ប្រៀបធៀប Constructor Injection និង Field Injection ហើយយល់ពីមូលហេតុដែល Constructor Injection ជា Best Practice។'
          },
          starterCode: {
            language: 'java',
            code: `// Preferred Constructor Injection:
@Service
public class OrderService {
    private final PaymentProcessor paymentProcessor;

    public OrderService(PaymentProcessor paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }
}`
          }
        },
        {
          id: 'sb-2-4',
          slug: 'spring-ioc-container-explained',
          moduleNumber: 2,
          lessonNumberInModule: 4,
          title: {
            en: '2.4 The Spring IoC container, explained conceptually',
            km: '២.៤ ការបកស្រាយ Spring IoC Container តាមទស្សនទាន'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand ApplicationContext, bean scopes (Singleton vs Prototype), and component scanning mechanisms.',
            km: 'យល់ដឹងពី ApplicationContext, Bean Scopes (Singleton vs Prototype) និង Component Scanning។'
          },
          starterCode: {
            language: 'java',
            code: `// ApplicationContext holds all bean instances in memory
ApplicationContext context = SpringApplication.run(Application.class, args);
TaskService service = context.getBean(TaskService.class);`
          }
        },
        {
          id: 'sb-2-5',
          slug: 'practice-build-two-injected-services',
          moduleNumber: 2,
          lessonNumberInModule: 5,
          title: {
            en: '2.5 Practice: build two simple injected services and wire them together',
            km: '២.៥ អនុវត្ត៖ បង្កើត Services ពីរដែល Inject ចូលគ្នាទៅវិញទៅមក'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build an EmailService and UserService, wiring EmailService into UserService via constructor injection.',
            km: 'បង្កើត EmailService និង UserService រួចភ្ជាប់ EmailService ចូល UserService តាម Constructor Injection។'
          },
          starterCode: {
            language: 'java',
            code: `@Service
public class EmailService {
    public void sendEmail(String recipient, String message) {
        System.out.println("Email sent to " + recipient + ": " + message);
    }
}`
          }
        }
      ]
    },

    // Module 3 — Building REST Controllers (4 lessons)
    {
      moduleNumber: 3,
      title: {
        en: 'Module 3 — Building REST Controllers',
        km: 'មេរៀនទី ៣ — ការសាងសង់ REST Controllers'
      },
      description: {
        en: 'Map HTTP verbs, handle path variables and query parameters, and parse JSON request bodies into Java DTO objects.',
        km: 'កំណត់ HTTP Verbs, គ្រប់គ្រង Path Variables/Query Parameters, និងបំប្លែង Request Body ទៅជា Java DTOs។'
      },
      lessons: [
        {
          id: 'sb-3-1',
          slug: 'rest-controller-and-mapping-annotations',
          moduleNumber: 3,
          lessonNumberInModule: 1,
          title: {
            en: '3.1 @RestController and mapping annotations (@GetMapping, @PostMapping, etc.)',
            km: '៣.១ @RestController និង Mapping Annotations (@GetMapping, @PostMapping, ជាដើម)'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Map REST endpoints to CRUD HTTP methods using @GetMapping, @PostMapping, @PutMapping, and @DeleteMapping.',
            km: 'ភ្ជាប់ REST Endpoints ទៅនឹង CRUD HTTP Methods ដោយប្រើប្រាស់ @GetMapping, @PostMapping, @PutMapping, @DeleteMapping។'
          },
          starterCode: {
            language: 'java',
            code: `@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @GetMapping
    public List<String> getProducts() {
        return List.of("Laptop", "Keyboard", "Mouse");
    }
}`
          }
        },
        {
          id: 'sb-3-2',
          slug: 'path-variables-and-request-parameters',
          moduleNumber: 3,
          lessonNumberInModule: 2,
          title: {
            en: '3.2 Path variables (@PathVariable) and request parameters (@RequestParam)',
            km: '៣.២ Path Variables (@PathVariable) និង Request Parameters (@RequestParam)'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Extract dynamic URI path segments with @PathVariable and URL query search parameters with @RequestParam.',
            km: 'ទាញយក URI Path segments ដោយប្រើ @PathVariable និង Query parameters ដោយប្រើ @RequestParam។'
          },
          starterCode: {
            language: 'java',
            code: `@GetMapping("/{id}")
public String getById(@PathVariable("id") Long id) {
    return "Fetching item " + id;
}

@GetMapping("/search")
public String search(@RequestParam(name = "query", defaultValue = "") String q) {
    return "Searching for " + q;
}`
          }
        },
        {
          id: 'sb-3-3',
          slug: 'request-bodies-and-dtos',
          moduleNumber: 3,
          lessonNumberInModule: 3,
          title: {
            en: '3.3 Request bodies (@RequestBody) and DTOs (Data Transfer Objects)',
            km: '៣.៣ Request Bodies (@RequestBody) និង DTOs (Data Transfer Objects)'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Parse JSON payloads into strongly-typed Java Records or DTO classes using @RequestBody.',
            km: 'បំប្លែង JSON payload ទៅជា Java Record ឬ DTO class ដោយប្រើប្រាស់ @RequestBody។'
          },
          starterCode: {
            language: 'java',
            code: `public record CreateProductRequest(String name, double price) {}

@PostMapping
public ResponseEntity<String> create(@RequestBody CreateProductRequest request) {
    return ResponseEntity.status(HttpStatus.CREATED).body("Created " + request.name());
}`
          }
        },
        {
          id: 'sb-3-4',
          slug: 'practice-mock-crud-controller',
          moduleNumber: 3,
          lessonNumberInModule: 4,
          title: {
            en: '3.4 Practice: build a controller with full CRUD-style endpoints returning mock data',
            km: '៣.៤ អនុវត្ត៖ បង្កើត Controller មាន Full CRUD Endpoints ដែលបញ្ជូន Mock Data'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Implement GET, POST, PUT, DELETE mappings for an in-memory task collection in a single controller.',
            km: 'សរសេរ GET, POST, PUT, DELETE mappings សម្រាប់គ្រប់គ្រងទិន្នន័យ Task ក្នុង Memory។'
          },
          starterCode: {
            language: 'java',
            code: `@RestController
@RequestMapping("/api/v1/mock-tasks")
public class MockTaskController {
    private final List<String> tasks = new ArrayList<>(List.of("Setup IDE", "Read Spring Docs"));

    @GetMapping
    public List<String> getAll() { return tasks; }
}`
          }
        }
      ]
    },

    // Module 4 — Layered Architecture (4 lessons)
    {
      moduleNumber: 4,
      title: {
        en: 'Module 4 — Layered Architecture',
        km: 'មេរៀនទី ៤ — ស្ថាបត្យកម្មជាស្រទាប់ (Layered Architecture)'
      },
      description: {
        en: 'Separate concerns across Controller, Service, and Repository layers for clean enterprise maintenance.',
        km: 'បែងចែកភារកិច្ចដាច់ដោយឡែករវាង Controller, Service, និង Repository layers។'
      },
      lessons: [
        {
          id: 'sb-4-1',
          slug: 'why-layered-architecture-controller-service-repository',
          moduleNumber: 4,
          lessonNumberInModule: 1,
          title: {
            en: '4.1 Why separate Controller, Service, and Repository layers',
            km: '៤.១ ហេតុអ្វីត្រូវបែងចែក Controller, Service, និង Repository Layers'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Understand the Separation of Concerns principle and why real enterprise teams isolate web handlers from business logic and database code.',
            km: 'យល់ដឹងពីគោលការណ៍ Separation of Concerns និងមូលហេតុដែលសហគ្រាសបែងចែក Web handlers, Business logic និង DB code។'
          },
          starterCode: {
            language: 'text',
            code: `[ HTTP Client ] 
       ↓ (JSON / Request)
[ Controller Layer ] -> Handles HTTP, routing, status codes
       ↓ (DTOs)
[ Service Layer ]    -> Contains core business logic & rules
       ↓ (Entities)
[ Repository Layer ] -> Database persistence & SQL execution`
          }
        },
        {
          id: 'sb-4-2',
          slug: 'moving-business-logic-to-services',
          moduleNumber: 4,
          lessonNumberInModule: 2,
          title: {
            en: '4.2 Moving business logic out of controllers and into services',
            km: '៤.២ ការផ្លាស់ប្តូរ Business Logic ចេញពី Controllers ទៅកាន់ Services'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Refactor controllers to delegate calculation, filtering, and authorization validation to @Service beans.',
            km: 'Refactor Controllers ដោយប្រគល់ភារកិច្ច គណនា Filter និង Validation ទៅកាន់ @Service beans។'
          },
          starterCode: {
            language: 'java',
            code: `@Service
public class TaskService {
    public TaskDto createNote(CreateTaskRequest request) {
        // Business logic, filtering, default assignments
        return new TaskDto(1L, request.title(), false);
    }
}`
          }
        },
        {
          id: 'sb-4-3',
          slug: 'wiring-service-to-repository',
          moduleNumber: 4,
          lessonNumberInModule: 3,
          title: {
            en: '4.3 Wiring a service to a repository',
            km: '៤.៣ ការភ្ជាប់ Service ទៅកាន់ Repository'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Inject a repository interface into a service class and call data access methods inside transactional boundaries.',
            km: 'Inject Repository interface ចូលទៅកាន់ Service class និងហៅទាញយកទិន្នន័យ។'
          },
          starterCode: {
            language: 'java',
            code: `@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }
}`
          }
        },
        {
          id: 'sb-4-4',
          slug: 'practice-refactor-controller-to-three-layers',
          moduleNumber: 4,
          lessonNumberInModule: 4,
          title: {
            en: '4.4 Practice: refactor Module 3\'s controller into a proper three-layer structure',
            km: '៤.៤ អនុវត្ត៖ Refactor Controller ពីមេរៀនទី ៣ ទៅជាស្ថាបត្យកម្ម ៣ ស្រទាប់ត្រឹមត្រូវ'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Take a monolithic controller and split it cleanly into TaskController, TaskService, and TaskRepository components.',
            km: 'បំបែក Monolithic Controller ឱ្យទៅជា TaskController, TaskService, និង TaskRepository។'
          },
          starterCode: {
            language: 'java',
            code: `// Ensure controller contains ZERO direct database or list mutation logic
@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {
    private final TaskService taskService;
    public TaskController(TaskService taskService) { this.taskService = taskService; }
}`
          }
        }
      ]
    },

    // Module 5 — Data Persistence with Spring Data JPA (5 lessons)
    {
      moduleNumber: 5,
      title: {
        en: 'Module 5 — Data Persistence with Spring Data JPA',
        km: 'មេរៀនទី ៥ — ការរក្សាទុកទិន្នន័យជាមួយ Spring Data JPA'
      },
      description: {
        en: 'Map database tables with @Entity, execute automated queries with JpaRepository, and configure H2 or PostgreSQL datasources.',
        km: 'ភ្ជាប់ Database tables ជាមួយ @Entity, ទាញយកទិន្នន័យជាមួយ JpaRepository, និងរៀបចំ H2/PostgreSQL។'
      },
      lessons: [
        {
          id: 'sb-5-1',
          slug: 'defining-entity-jpa-annotations',
          moduleNumber: 5,
          lessonNumberInModule: 1,
          title: {
            en: '5.1 Defining an entity with @Entity and JPA annotations',
            km: '៥.១ ការបង្កើត Entity ជាមួយ @Entity និង JPA Annotations'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Annotate Java classes with @Entity, @Table, @Id, @GeneratedValue, and column constraints.',
            km: 'កំណត់ Java classes ដោយប្រើប្រាស់ @Entity, @Table, @Id, @GeneratedValue, និង Column constraints។'
          },
          starterCode: {
            language: 'java',
            code: `@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String title;

    private String description;
    private boolean completed;

    // Getters and setters omitted for brevity
}`
          }
        },
        {
          id: 'sb-5-2',
          slug: 'spring-data-jpa-repositories-crud-for-free',
          moduleNumber: 5,
          lessonNumberInModule: 2,
          title: {
            en: '5.2 Spring Data JPA repositories — CRUD methods for free',
            km: '៥.២ Spring Data JPA Repositories — ទទួលបាន CRUD Methods ដោយសេរី'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Use a Spring Data JPA repository interface to get full CRUD database operations without writing any SQL or implementation code.',
            km: 'ប្រើប្រាស់ Spring Data JPA repository interface ដើម្បីទទួលបាន CRUD operations ពេញលេញដោយមិនបាច់សរសេរ SQL។'
          },
          explanation: {
            en: 'Once you define an @Entity class, Spring Data JPA lets you create a repository by simply writing an interface that extends JpaRepository — no implementation required. Spring generates the actual database code for you automatically.',
            km: 'នៅពេលបង្កើត @Entity, Spring Data JPA អនុញ្ញាតឱ្យបង្កើត Repository តាមរយៈការសរសេរ Interface Extends JpaRepository ដោយមិនបាច់សរសេរ Implementation កូដឡើយ។'
          },
          starterCode: {
            language: 'java',
            code: `public interface TaskRepository extends JpaRepository<Task, Long> {
    // .findAll(), .findById(), .save(), .deleteById() already provided
}`
          },
          practiceExercise: {
            question: {
              en: 'Add a custom query method to TaskRepository that finds all incomplete tasks using Spring Data method naming rules.',
              km: 'បន្ថែម Custom query method ទៅកាន់ TaskRepository ដើម្បីស្វែងរក Task ដែលមិនទាន់ប្រកាសថាពេញលេញ។'
            },
            solution: `public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByCompletedFalse();
}`
          }
        },
        {
          id: 'sb-5-3',
          slug: 'custom-query-methods-naming-convention',
          moduleNumber: 5,
          lessonNumberInModule: 3,
          title: {
            en: '5.3 Custom query methods by naming convention',
            km: '៥.៣ ការបង្កើត Custom Query Methods តាមការដាក់ឈ្មោះ Signature'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Declare custom lookup methods like findByTitleContainingIgnoreCase or findByDueDateBefore using convention rules.',
            km: 'ប្រកាស Custom lookup methods ដូចជា findByTitleContainingIgnoreCase ឬ findByDueDateBefore។'
          },
          starterCode: {
            language: 'java',
            code: `public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByTitleContainingIgnoreCase(String keyword);
    List<Task> findByDueDateBefore(LocalDate date);
}`
          }
        },
        {
          id: 'sb-5-4',
          slug: 'configuring-h2-and-postgresql',
          moduleNumber: 5,
          lessonNumberInModule: 4,
          title: {
            en: '5.4 Configuring H2 for development and PostgreSQL for production-style setups',
            km: '៥.៤ ការកំណត់រចនាសម្ព័ន្ធ H2 (សម្រាប់ Dev) និង PostgreSQL (សម្រាប់ Production)'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Configure application.yml properties for in-memory H2 database during development and PostgreSQL for production.',
            km: 'កំណត់រចនាសម្ព័ន្ធ application.yml សម្រាប់ H2 database (ពេល Dev) និង PostgreSQL (ពេល Production)។'
          },
          starterCode: {
            language: 'yaml',
            code: `# application.yml
spring:
  datasource:
    url: jdbc:h2:mem:taskdb
    driverClassName: org.h2.Driver
    username: sa
    password: password
  h2:
    console:
      enabled: true`
          }
        },
        {
          id: 'sb-5-5',
          slug: 'practice-task-entity-repository-query',
          moduleNumber: 5,
          lessonNumberInModule: 5,
          title: {
            en: '5.5 Practice: define a Task entity and repository, and query it via a test controller',
            km: '៥.៥ អនុវត្ត៖ បង្កើត Task Entity & Repository រួច Query តាមរយៈ Controller'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build a working database-backed endpoint that inserts and queries real Task entities in H2.',
            km: 'បង្កើត Endpoint មានទិន្នន័យពិតប្រាកដ រក្សាទុក និងទាញយកទិន្នន័យ Task ក្នុង H2។'
          },
          starterCode: {
            language: 'java',
            code: `@RestController
@RequestMapping("/api/v1/db-tasks")
public class DbTaskController {
    private final TaskRepository repo;
    public DbTaskController(TaskRepository repo) { this.repo = repo; }
}`
          }
        }
      ]
    },

    // Module 6 — Validation & Exception Handling (4 lessons)
    {
      moduleNumber: 6,
      title: {
        en: 'Module 6 — Validation & Exception Handling',
        km: 'មេរៀនទី ៦ — ការធ្វើ Validation និង Exception Handling'
      },
      description: {
        en: 'Enforce Bean Validation constraints on request payloads and centralize API exception responses with @ControllerAdvice.',
        km: 'ត្រួតពិនិត្យ Request Payloads តាម Bean Validation និងគ្រប់គ្រង Error ទូទាំងប្រព័ន្ធជាមួយ @ControllerAdvice។'
      },
      lessons: [
        {
          id: 'sb-6-1',
          slug: 'bean-validation-annotations-on-dtos',
          moduleNumber: 6,
          lessonNumberInModule: 1,
          title: {
            en: '6.1 Bean Validation annotations (@NotBlank, @Size, etc.) on DTOs',
            km: '៦.១ Bean Validation Annotations (@NotBlank, @Size) លើ DTOs'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Annotate payload DTO fields with @NotBlank, @NotNull, @Size, and @Min constraints.',
            km: 'កំណត់ Constraints លើ DTO fields ដោយប្រើប្រាស់ @NotBlank, @NotNull, @Size, @Min។'
          },
          starterCode: {
            language: 'java',
            code: `public record CreateTaskRequest(
    @NotBlank(message = "Title must not be blank")
    @Size(min = 3, max = 100, message = "Title must be between 3 and 100 chars")
    String title,

    String description
) {}`
          }
        },
        {
          id: 'sb-6-2',
          slug: 'triggering-and-catching-validation-errors',
          moduleNumber: 6,
          lessonNumberInModule: 2,
          title: {
            en: '6.2 Triggering and catching validation errors',
            km: '៦.២ ការបំផ្ទុះ និងចាប់ Validation Errors'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Use @Valid on @RequestBody parameters in controller handlers to trigger validation failure exceptions automatically.',
            km: 'ប្រើប្រាស់ @Valid លើ @RequestBody ក្នុង Controller ដើម្បីបំផ្ទុះ Validation Exception ដោយស្វ័យប្រវត្តិ។'
          },
          starterCode: {
            language: 'java',
            code: `@PostMapping
public ResponseEntity<TaskDto> create(@Valid @RequestBody CreateTaskRequest req) {
    return ResponseEntity.status(HttpStatus.CREATED).body(service.create(req));
}`
          }
        },
        {
          id: 'sb-6-3',
          slug: 'centralized-exception-handling-controller-advice',
          moduleNumber: 6,
          lessonNumberInModule: 3,
          title: {
            en: '6.3 Centralized exception handling with @ExceptionHandler and @ControllerAdvice',
            km: '៦.៣ ការគ្រប់គ្រង Exception ប្រមូលផ្តុំដោយប្រើ @ExceptionHandler និង @ControllerAdvice'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Catch MethodArgumentNotValidException and custom ResourceNotFoundException instances globally to format JSON errors.',
            km: 'ចាប់ MethodArgumentNotValidException និង ResourceNotFoundException ជាលក្ខណៈសកល រួចបញ្ជូន JSON Errors។'
          },
          starterCode: {
            language: 'java',
            code: `@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleNotFound(ResourceNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body(Map.of("error", ex.getMessage()));
    }
}`
          }
        },
        {
          id: 'sb-6-4',
          slug: 'practice-validation-and-error-responses',
          moduleNumber: 6,
          lessonNumberInModule: 4,
          title: {
            en: '6.4 Practice: add validation to the Task DTO and return consistent error responses',
            km: '៦.៤ អនុវត្ត៖ បន្ថែម Validation លើ Task DTO និងបញ្ជូន Error Response ស្របតាមស្តង់ដារ'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Add validation rules to Task requests and write an exception handler that returns clean field error messages.',
            km: 'បន្ថែម Validation Rules លើ Task requests និងសរសេរ Exception Handler បញ្ជូន Field Errors។'
          },
          starterCode: {
            language: 'java',
            code: `@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {
    Map<String, String> errors = new HashMap<>();
    ex.getBindingResult().getFieldErrors().forEach(e -> errors.put(e.getField(), e.getDefaultMessage()));
    return ResponseEntity.badRequest().body(errors);
}`
          }
        }
      ]
    },

    // Module 7 — Security & Authentication (5 lessons)
    {
      moduleNumber: 7,
      title: {
        en: 'Module 7 — Security & Authentication',
        km: 'មេរៀនទី ៧ — សុវត្ថិភាព និងការផ្ទៀងផ្ទាត់សិទ្ធិ (Spring Security)'
      },
      description: {
        en: 'Configure Spring Security filter chains, build stateless JWT authentication flows, and restrict access based on roles.',
        km: 'រៀបចំ Spring Security filter chains, បង្កើត Stateless JWT authentication និងកំណត់សិទ្ធិតាម Roles។'
      },
      lessons: [
        {
          id: 'sb-7-1',
          slug: 'spring-security-basics-filter-chain',
          moduleNumber: 7,
          lessonNumberInModule: 1,
          title: {
            en: '7.1 Spring Security basics and the security filter chain, conceptually',
            km: '៧.១ មូលដ្ឋានគ្រឹះ Spring Security និង Security Filter Chain តាមទស្សនទាន'
          },
          durationMinutes: 22,
          difficulty: 'Advanced',
          objective: {
            en: 'Understand how Spring Security intercepts HTTP requests using a chain of servlet filters before hitting controllers.',
            km: 'យល់ដឹងពីរបៀបដែល Spring Security ចាប់ត្រួតពិនិត្យ HTTP requests តាមរយៈ Servlet filters chain។'
          },
          starterCode: {
            language: 'text',
            code: `[ HTTP Request ] 
  ↓
[ Security Filter 1: CORS ] 
  ↓
[ Security Filter 2: CSRF ] 
  ↓
[ Security Filter 3: Bearer JWT Filter ] 
  ↓
[ Controller Action ]`
          }
        },
        {
          id: 'sb-7-2',
          slug: 'configuring-stateless-security-filter-chain',
          moduleNumber: 7,
          lessonNumberInModule: 2,
          title: {
            en: '7.2 Configuring a security filter chain for a stateless API',
            km: '៧.២ ការរៀបចំ Security Filter Chain សម្រាប់ Stateless API'
          },
          durationMinutes: 25,
          difficulty: 'Advanced',
          objective: {
            en: 'Declare a SecurityFilterChain bean that disables session state and configures public vs protected URL patterns.',
            km: 'បង្កើត SecurityFilterChain Bean ដែលបិទ Session state និងកំណត់ URL patterns សាធារណៈ vs ការពារ។'
          },
          starterCode: {
            language: 'java',
            code: `@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**").permitAll()
                .anyRequest().authenticated()
            )
            .build();
    }
}`
          }
        },
        {
          id: 'sb-7-3',
          slug: 'jwt-authentication-login-token-issuance',
          moduleNumber: 7,
          lessonNumberInModule: 3,
          title: {
            en: '7.3 JWT authentication: issuing a token on login',
            km: '៧.៣ JWT Authentication៖ ការបញ្ចេញ Token ពេល Login'
          },
          durationMinutes: 25,
          difficulty: 'Advanced',
          objective: {
            en: 'Build an authentication controller that verifies credentials and issues signed JWT bearer tokens using jjwt library.',
            km: 'បង្កើត Authentication Controller ដែលផ្ទៀងផ្ទាត់ពាក្យសម្ងាត់ និងបញ្ចេញ Signed JWT tokens។'
          },
          starterCode: {
            language: 'java',
            code: `@PostMapping("/api/v1/auth/login")
public ResponseEntity<TokenResponse> login(@RequestBody LoginRequest req) {
    // Validate credentials, generate JWT
    String token = jwtService.generateToken(req.username());
    return ResponseEntity.ok(new TokenResponse(token));
}`
          }
        },
        {
          id: 'sb-7-4',
          slug: 'securing-endpoints-with-jwt-and-roles',
          moduleNumber: 7,
          lessonNumberInModule: 4,
          title: {
            en: '7.4 Securing endpoints based on the JWT and user roles',
            km: '៧.៤ ការការពារ Endpoints ដោយផ្អែកលើ JWT និង User Roles'
          },
          durationMinutes: 25,
          difficulty: 'Advanced',
          objective: {
            en: 'Create a custom OncePerRequestFilter that extracts Bearer tokens, populates SecurityContext, and checks roles.',
            km: 'បង្កើត Custom OncePerRequestFilter ដើម្បីទាញយក Bearer token និងបញ្ចូលទៅក្នុង SecurityContext។'
          },
          starterCode: {
            language: 'java',
            code: `@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws ServletException, IOException {
        // Extract Authorization header, validate token, set SecurityContext
        chain.doFilter(req, res);
    }
}`
          }
        },
        {
          id: 'sb-7-5',
          slug: 'practice-require-auth-for-task-creation',
          moduleNumber: 7,
          lessonNumberInModule: 5,
          title: {
            en: '7.5 Practice: require authentication for creating/deleting tasks, allow public read access',
            km: '៧.៥ អនុវត្ត៖ តម្រូវឱ្យ Auth សម្រាប់ Create/Delete Tasks, បើកមើលជាសាធារណៈ'
          },
          durationMinutes: 25,
          difficulty: 'Advanced',
          objective: {
            en: 'Configure HttpMethod.GET on /api/v1/tasks to be permitAll() while restricting POST and DELETE to authenticated users.',
            km: 'កំណត់ HttpMethod.GET លើ /api/v1/tasks ជា permitAll() ខណៈ POST និង DELETE ត្រូវការ Authenticated Users។'
          },
          starterCode: {
            language: 'java',
            code: `.authorizeHttpRequests(auth -> auth
    .requestMatchers(HttpMethod.GET, "/api/v1/tasks/**").permitAll()
    .requestMatchers(HttpMethod.POST, "/api/v1/tasks/**").authenticated()
    .requestMatchers(HttpMethod.DELETE, "/api/v1/tasks/**").authenticated()
)`
          }
        }
      ]
    },

    // Module 8 — Testing & Capstone (4 lessons + project)
    {
      moduleNumber: 8,
      title: {
        en: 'Module 8 — Testing & Capstone',
        km: 'មេរៀនទី ៨ — ការធ្វើ Testing និងគម្រោងបញ្ចប់ Capstone'
      },
      description: {
        en: 'Write unit tests with JUnit and Mockito, integration test controllers with @SpringBootTest, package JAR artifacts, and ship the Capstone API.',
        km: 'សរសេរ Unit tests ជាមួយ JUnit/Mockito, Integration tests ជាមួយ @SpringBootTest, និងបញ្ចប់ Capstone API។'
      },
      lessons: [
        {
          id: 'sb-8-1',
          slug: 'unit-testing-service-layer-junit-mockito',
          moduleNumber: 8,
          lessonNumberInModule: 1,
          title: {
            en: '8.1 Unit testing a service layer in isolation with JUnit and Mockito',
            km: '៨.១ ការធ្វើ Unit Test លើ Service Layer ដោយប្រើ JUnit និង Mockito'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Test TaskService business logic in fast isolated unit tests by mocking TaskRepository dependencies using Mockito.',
            km: 'ធ្វើ Test លើ TaskService Business Logic ដោយ Mock TaskRepository តាមរយៈ Mockito។'
          },
          starterCode: {
            language: 'java',
            code: `@ExtendWith(MockitoExtension.class)
class TaskServiceTest {
    @Mock
    private TaskRepository taskRepository;

    @InjectMocks
    private TaskService taskService;

    @Test
    void shouldReturnAllTasks() {
        when(taskRepository.findAll()).thenReturn(List.of(new Task()));
        List<TaskDto> result = taskService.findAll();
        assertEquals(1, result.size());
    }
}`
          }
        },
        {
          id: 'sb-8-2',
          slug: 'integration-testing-controller-spring-boot-test',
          moduleNumber: 8,
          lessonNumberInModule: 2,
          title: {
            en: '8.2 Integration testing a controller with @SpringBootTest and MockMvc',
            km: '៨.២ Integration Testing លើ Controller ជាមួយ @SpringBootTest និង MockMvc'
          },
          durationMinutes: 25,
          difficulty: 'Advanced',
          objective: {
            en: 'Boot a slice of the Spring context and send mock HTTP requests using MockMvc to test status codes and response JSON.',
            km: 'ដំឡើងប្រព័ន្ធរត់ Spring Context និងផ្ញើ Mock HTTP requests តាម MockMvc ដើម្បីតេស្ត Status Codes និង JSON។'
          },
          starterCode: {
            language: 'java',
            code: `@SpringBootTest
@AutoConfigureMockMvc
class TaskControllerIntegrationTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    void shouldReturn200ForTaskList() throws Exception {
        mockMvc.perform(get("/api/v1/tasks"))
            .andExpect(status().isOk());
    }
}`
          }
        },
        {
          id: 'sb-8-3',
          slug: 'planning-task-management-api-capstone',
          moduleNumber: 8,
          lessonNumberInModule: 3,
          title: {
            en: '8.3 Planning the Task Management API capstone (entities, endpoints, auth flow)',
            km: '៨.៣ រៀបចំផែនការបង្កើត Task Management API Capstone'
          },
          durationMinutes: 20,
          difficulty: 'Advanced',
          objective: {
            en: 'Design the database entities, controller routes, validation rules, and security policies for the complete capstone build.',
            km: 'ឌីសាញ Database Entities, Controller routes, Validation rules, និង Security policies សម្រាប់ Capstone។'
          },
          starterCode: {
            language: 'text',
            code: `Capstone Blueprint:
- Entity: Task (id, title, description, completed, dueDate)
- Controller: TaskController (GET/POST/PUT/DELETE /api/v1/tasks)
- DTOs: CreateTaskRequest, TaskDto with Bean Validation
- Security: JWT Authentication (/api/v1/auth/login)
- Exception Handler: GlobalExceptionHandler (@ControllerAdvice)`
          }
        },
        {
          id: 'sb-8-4',
          slug: 'packaging-and-deployment-basics-jar',
          moduleNumber: 8,
          lessonNumberInModule: 4,
          title: {
            en: '8.4 Packaging and deployment basics (building a runnable JAR)',
            km: '៨.៤ ការចងកញ្ចប់ (JAR) និងមូលដ្ឋានគ្រឹះនៃការដាក់ឱ្យប្រើប្រាស់ (Deployment)'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Package a Spring Boot app into a self-contained executable JAR via `./mvnw clean package` and run it with `java -jar`.',
            km: 'ចងកញ្ចប់ Spring Boot App ទៅជា Executable JAR តាមរយៈ `./mvnw clean package` និងរត់តាម `java -jar`។'
          },
          starterCode: {
            language: 'bash',
            code: `# Build executable JAR:
./mvnw clean package -DskipTests

# Run standalone embedded server jar:
java -jar target/taskmanager-0.0.1-SNAPSHOT.jar`
          }
        }
      ]
    }
  ]
};
