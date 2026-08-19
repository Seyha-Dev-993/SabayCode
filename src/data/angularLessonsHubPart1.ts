import { FrontendLesson } from '../types/frontendClass';

export const ANGULAR_HUB_LESSONS_PART1: FrontendLesson[] = [
  // Module 1 — Introduction & Setup
  {
    id: 'ng-hub-1-1',
    slug: 'what-is-angular-spa',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: {
      en: '1.1 What Angular is & SPA Concepts',
      km: '1.1 អ្វីទៅជា Angular & គំនិត Single Page Application (SPA)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Angular is a full-fledged TypeScript-based web framework maintained by Google for building scalable Single Page Applications (SPAs). Unlike traditional multi-page websites that reload the page on every link click, a SPA loads HTML/JS once and dynamically re-renders components without page refreshes.',
      km: 'Angular គឺជា Framework របស់ JavaScript/TypeScript ដែលអភិវឌ្ឍដោយ Google សម្រាប់សាងសង់ Single Page Applications (SPA)។ ខុសពីគេហទំព័របុរាណដែលត្រូវ Reload ទំព័ររាល់ពេលចុច Link, SPA ធ្វើការ Load HTML/JS តែម្តងដំបូង ហើយធ្វើការ Re-render Component តាមស្វ័យប្រវត្តិដោយមិនបាច់ Refresh Browser ឡើយ។\n\nតម្រូវការជាមុន៖ HTML, CSS, JavaScript, TypeScript ជាមូលដ្ឋាន'
    },
    tutorial: {
      en: 'Anatomy of an Angular SPA render cycle:\n1. Index.html contains <app-root></app-root>\n2. Angular bootstraps the Root Component\n3. State changes update DOM bindings instantly without browser refresh.',
      km: 'ដំណើរការ Render របស់ Angular SPA៖\n១. index.html មាន Tag <app-root></app-root>\n២. Angular បើក Bootstraps Root Component\n៣. ពេល State ផ្លាស់ប្តូរ វា Update DOM ភ្លាមៗដោយមិនបាច់ Refresh Page'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .badge { background: #dd0031; color: white; padding: 4px 10px; border-radius: 6px; font-weight: bold; font-size: 12px; }
    .card { background: #1e293b; border: 1px solid #334155; padding: 16px; border-radius: 12px; margin-top: 12px; }
  </style>
</head>
<body>
  <span class="badge">ANGULAR SPA DEMO</span>
  <div class="card">
    <h2><app-root>Welcome to Angular SPA</app-root></h2>
    <p>Dynamic Component rendering without page reload!</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Enterprise Grade Web Portals', km: 'ប្រព័ន្ធ Web Portals សម្រាប់ក្រុមហ៊ុនធំៗ' },
      description: {
        en: 'Used by Google, Forbes, and enterprise banking dashboards that require rigid architecture, type safety, and seamless single-page user navigation.',
        km: 'ប្រើប្រាស់ដោយ Google, Forbes និងធនាគារធំៗដែលត្រូវការស្ថាបត្យកម្មរឹងមាំ សុវត្ថិភាព Type Safety និងការផ្លាស់ប្តូរទំព័រលឿនរហ័ស។'
      }
    },
    practiceExercise: {
      question: { en: 'What HTML selector is used in index.html to render the root component?', km: 'តើ HTML tag Selector មួយណាដែលប្រើក្នុង index.html សម្រាប់បង្ហាញ Root Component?' },
      solution: '<app-root></app-root>'
    },
    quizQuestions: [
      {
        id: 'q-ng-1-1',
        question: { en: 'What does SPA stand for in modern web development?', km: 'តើពាក្យថា SPA មានន័យពេញដូចម្តេច?' },
        options: [
          { id: 'a', text: { en: 'Single Page Application', km: 'Single Page Application' }, isCorrect: true },
          { id: 'b', text: { en: 'Server Processing Architecture', km: 'Server Processing Architecture' }, isCorrect: false }
        ],
        explanation: { en: 'SPA stands for Single Page Application.', km: 'SPA មកពីពាក្យ Single Page Application។' }
      }
    ]
  },
  {
    id: 'ng-hub-1-2',
    slug: 'angular-vs-other-frameworks',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: {
      en: '1.2 Angular vs. Other Frameworks',
      km: '1.2 ការប្រៀបធៀប Angular ជាមួយ Frameworks ផ្សេងទៀត'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Angular is a full "batteries-included" framework providing routing, forms, HTTP client, and state mechanisms out of the box. Libraries like React or Vue focus purely on the View layer and require third-party libraries for routing and HTTP.',
      km: 'Angular គឺជា "Batteries-Included" Framework ដែលមាន Routing, Forms, HTTP Client និង State Management មកជាមួយស្រាប់ទាំងអស់។ ខុសពី React ឬ Vue ដែលជា View Library ហើយត្រូវការ Install Library ខាងក្រៅបន្ថែមសម្រាប់ Routing ឬ HTTP API calls។'
    },
    tutorial: {
      en: 'Framework Comparison:\n- Angular: All-in-one suite, strict conventions, built-in TypeScript, Dependency Injection.\n- React/Vue: Lightweight core, flexible ecosystem, third-party packages for router & forms.',
      km: 'ការប្រៀបធៀប៖\n- Angular៖ មានឧបករណ៍គ្រប់គ្រាន់ស្រាប់ ស្ដង់ដារតឹងរ៉ឹង Built-in TypeScript & Dependency Injection\n- React/Vue៖ Core ស្រាល អាចជ្រើសរើស Library ខាងក្រៅតាមចិត្ត'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    th, td { border: 1px solid #334155; padding: 10px; text-align: left; font-size: 13px; }
    th { background: #1e293b; color: #38bdf8; }
  </style>
</head>
<body>
  <h3>Angular vs React Comparison</h3>
  <table>
    <tr><th>Feature</th><th>Angular</th><th>React</th></tr>
    <tr><td>Architecture</td><td>Full Framework</td><td>UI Library</td></tr>
    <tr><td>Language</td><td>TypeScript Natively</td><td>JavaScript / JSX / TS</td></tr>
    <tr><td>HTTP Client</td><td>Built-in HttpClient</td><td>Axios / Fetch API</td></tr>
  </table>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Team Standardization', km: 'ស្តង់ដារការងាររួមសម្រាប់ក្រុមការងារ' },
      description: {
        en: 'Large teams benefit from Angular because every Angular project follows the exact same file organization and architectural patterns worldwide.',
        km: 'ក្រុមការងារធំៗចូលចិត្ត Angular ដោយសារគ្រប់គម្រោង Angular ទាំងអស់នៅលើពិភពលោកមានរចនាសម្ព័ន្ធ និងស្ដង់ដារសរសេរដូចគ្នាបេះបិទ។'
      }
    },
    practiceExercise: {
      question: { en: 'Does Angular require installing third-party packages for routing?', km: 'តើ Angular ត្រូវការ Install Library ខាងក្រៅសម្រាប់ធ្វើ Routing ដែរឬទេ?' },
      solution: 'No, Angular includes @angular/router out of the box.'
    },
    quizQuestions: [
      {
        id: 'q-ng-1-2',
        question: { en: 'Why is Angular referred to as a "batteries-included" framework?', km: 'ហេតុអ្វីបានជា Angular ត្រូវគេហៅថាជា "batteries-included" framework?' },
        options: [
          { id: 'a', text: { en: 'It comes built-in with Router, Forms, and HttpClient modules', km: 'វាមាន Router, Forms, និង HttpClient Module មកជាមួយស្រាប់' }, isCorrect: true },
          { id: 'b', text: { en: 'It runs on mobile hardware batteries', km: 'វាដំណើរការលើថ្មទូរស័ព្ទ' }, isCorrect: false }
        ],
        explanation: { en: 'Angular includes built-in solutions for Routing, Forms, and HTTP.', km: 'Angular មាន Router, Forms, និង HTTP មកជាមួយស្រាប់។' }
      }
    ]
  },
  {
    id: 'ng-hub-1-3',
    slug: 'angular-cli-and-project-structure',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: {
      en: '1.3 Setting up Angular CLI & Project Structure',
      km: '1.3 ការដំឡើង Angular CLI & រចនាសម្ព័ន្ធ Project'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The Angular CLI (`@angular/cli`) is the official command-line tool used to create, scaffold, build, and serve Angular applications. Standard CLI commands include `ng new app-name`, `ng serve`, and `ng generate component name`.',
      km: 'Angular CLI (`@angular/cli`) គឺជាឧបករណ៍ Command-Line ផ្លូវការសម្រាប់បង្កើត Scaffold, Build និងរត់ Angular App។ កូដបញ្ជាសំខាន់ៗរួមមាន `ng new my-app`, `ng serve --open` និង `ng generate component header`។'
    },
    tutorial: {
      en: 'CLI Commands Walkthrough:\n1. Install CLI globally: npm install -g @angular/cli\n2. Create project: ng new my-angular-app\n3. Serve local server: ng serve -o (runs on http://localhost:4200)\n4. Generate component: ng g c components/navbar',
      km: 'របៀបប្រើប្រាស់ Angular CLI៖\n១. ដំឡើង CLI: npm install -g @angular/cli\n២. បង្កើត Project: ng new my-angular-app\n៣. រត់ Server: ng serve -o (រត់លើ http://localhost:4200)\n៤. បង្កើត Component: ng g c components/navbar'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #0f172a; color: #38bdf8; padding: 20px; }
    .cmd { background: #020617; border-left: 4px solid #dd0031; padding: 12px; border-radius: 6px; color: #f8fafc; margin-bottom: 10px; }
    .green { color: #4ade80; }
  </style>
</head>
<body>
  <h3>Terminal Commands</h3>
  <div class="cmd">$ npm install -g @angular/cli</div>
  <div class="cmd">$ ng new my-app --standalone</div>
  <div class="cmd">$ cd my-app && ng serve</div>
  <p className="green">✔ Local server listening on http://localhost:4200</p>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Standardized CLI Generators', km: 'ការបង្កើត Code ដោយស្វ័យប្រវត្តិជាមួយ CLI' },
      description: {
        en: 'Angular CLI generators automatically create component TS, HTML, CSS, and unit test spec files with boilerplates set up correctly.',
        km: 'Angular CLI បង្កើត ឯកសារ TS, HTML, CSS និង Test spec file ស្វ័យប្រវត្តតាមស្តង់ដារត្រឹមត្រូវ។'
      }
    },
    practiceExercise: {
      question: { en: 'What CLI command compiles and serves an Angular app with live reload?', km: 'តើ Command មួយណាសម្រាប់ Compile និងរត់ Angular App?' },
      solution: 'ng serve'
    },
    quizQuestions: [
      {
        id: 'q-ng-1-3',
        question: { en: 'Which CLI command generates a new component in Angular?', km: 'តើ CLI Command មួយណាសម្រាប់បង្កើត Component ថ្មី?' },
        options: [
          { id: 'a', text: { en: 'ng generate component my-component', km: 'ng generate component my-component' }, isCorrect: true },
          { id: 'b', text: { en: 'ng make component my-component', km: 'ng make component my-component' }, isCorrect: false }
        ],
        explanation: { en: '`ng generate component` (or `ng g c`) creates new component files.', km: '`ng generate component` ប្រើសម្រាប់បង្កើត Component ថ្មី។' }
      }
    ]
  },

  // Module 2 — TypeScript Essentials for Angular
  {
    id: 'ng-hub-2-1',
    slug: 'typescript-for-angular-overview',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: {
      en: '2.1 Why Angular Uses TypeScript',
      km: '2.1 ហេតុអ្វីបានជា Angular ប្រើប្រាស់ TypeScript'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'TypeScript adds static type definitions to JavaScript. Angular requires TypeScript because strong types allow early bug detection during compile time, superior IDE autocomplete, and clean class-based object orientation.',
      km: 'TypeScript បន្ថែម Static Type Safety ទៅលើ JavaScript។ Angular តម្រូវឲ្យប្រើ TypeScript ព្រោះប្រភេទ Data (Types) ច្បាស់លាស់ជួយទប់ស្កាត់ Bug មុនពេល Compile, ផ្តល់ Autocomplete ល្អក្នុង Editor និងជួយរៀបចំ Class-based OOP បានយ៉ាងស្អាត។'
    },
    tutorial: {
      en: 'TypeScript Type Annotations Example:\n```ts\nlet studentName: string = "Seyha";\nlet courseAge: number = 24;\nlet isEnrolled: boolean = true;\n```',
      km: 'ឧទាហរណ៍ការកំណត់ Type ក្នុង TypeScript៖\n```ts\nlet studentName: string = "Seyha";\nlet courseAge: number = 24;\nlet isEnrolled: boolean = true;\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .ts-box { background: #1e293b; border-left: 4px solid #3178c6; padding: 14px; border-radius: 8px; font-family: monospace; }
  </style>
</head>
<body>
  <h3>TypeScript Type Enforcement</h3>
  <div class="ts-box">
    const userId: number = 101;<br>
    const userName: string = "Sokha";<br>
    <span style="color:#ef4444">// Error: Type 'string' is not assignable to type 'number'</span>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Compile-time Safety in Production', km: 'សុវត្ថិភាពទិន្នន័យពេល Compile' },
      description: {
        en: 'Catches typos in property names or invalid data structures instantly while editing in VS Code before code reaches production servers.',
        km: 'ជួយស្វែងរក Typo លើ Variable ឬ Mismatched Data Structures ភ្លាមៗក្នុង Editor មុនពេល Deploy ទៅកាន់ Production Server។'
      }
    },
    practiceExercise: {
      question: { en: 'Write a TypeScript variable declaration for `userAge` with type `number`.', km: 'សរសេរការប្រកាស Variable `userAge` ដែលមាន Type ជា `number` ក្នុង TypeScript។' },
      solution: 'let userAge: number = 25;'
    },
    quizQuestions: [
      {
        id: 'q-ng-2-1',
        question: { en: 'When does TypeScript detect type mismatch errors?', km: 'តើ TypeScript ស្វែងរក Error ប្រភេទ Type mismatch នៅពេលណា?' },
        options: [
          { id: 'a', text: { en: 'At compile-time during development', km: 'ពេល Compile / អំឡុងពេលអភិវឌ្ឍ' }, isCorrect: true },
          { id: 'b', text: { en: 'Only when end-users load the webpage in production', km: 'ទាល់តែ User បើក Page ក្នុង Browser' }, isCorrect: false }
        ],
        explanation: { en: 'TypeScript detects type errors at compile time.', km: 'TypeScript ចាប់ Error ពេល Compile។' }
      }
    ]
  },
  {
    id: 'ng-hub-2-2',
    slug: 'decorators-explained-simply',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: {
      en: '2.2 Decorators Explained Simply',
      km: '2.2 ការយល់ដឹងអំពី Decorators (@Component, @Injectable)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Decorators are special syntax in TypeScript prefixed with `@` (e.g., `@Component`, `@Injectable`). They act as "metadata tags" that attach metadata configuration to TypeScript classes so Angular knows how to render or inject them.',
      km: 'Decorators គឺជា Special Syntax ក្នុង TypeScript ដែលចាប់ផ្តើមដោយសញ្ញា `@` (ដូចជា `@Component`, `@Injectable`)។ វាប្រៀបដូចជា "Tag Metadata" ដែលផ្តល់ព័ត៌មានបន្ថែមទៅកាន់ TypeScript Class ដើម្បីឲ្យ Angular ដឹងពីរបៀប Render ឬ Inject Class នោះ។'
    },
    tutorial: {
      en: 'Anatomy of @Component Decorator:\n```ts\n@Component({\n  selector: "app-user-card",\n  templateUrl: "./user-card.component.html",\n  styleUrls: ["./user-card.component.css"]\n})\nexport class UserCardComponent {}\n```',
      km: 'រចនាសម្ព័ន្ធ @Component Decorator៖\n```ts\n@Component({\n  selector: "app-user-card",\n  templateUrl: "./user-card.component.html",\n  styleUrls: ["./user-card.component.css"]\n})\nexport class UserCardComponent {}\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .dec { color: #f43f5e; font-weight: bold; }
    .prop { color: #38bdf8; }
    .card { background: #1e293b; border: 1px solid #334155; padding: 16px; border-radius: 10px; margin-top: 10px; }
  </style>
</head>
<body>
  <h3>Angular Decorator Metadata</h3>
  <div class="card">
    <span class="dec">@Component</span>({<br>
    &nbsp;&nbsp;<span class="prop">selector</span>: 'app-header',<br>
    &nbsp;&nbsp;<span class="prop">template</span>: '&lt;h1&gt;SabayCode&lt;/h1&gt;'<br>
    })<br>
    <span style="color:#a855f7">export class</span> HeaderComponent {}
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Class Annotation Metadata', km: 'ការកំណត់ Metadata លើ Class' },
      description: {
        en: 'Without decorators, Angular wouldn\'t know whether a TypeScript class is a UI component, a data service, or a route guard.',
        km: 'បើគ្មាន Decorators ទេ Angular មិនអាចដឹងថា TypeScript Class មួយជា UI Component, Data Service ឬ Route Guard ឡើយ។'
      }
    },
    practiceExercise: {
      question: { en: 'Which decorator marks a class as an Angular service suitable for Dependency Injection?', km: 'តើ Decorator មួយណាដែលប្រកាស Class ឱ្យទៅជា Angular Service?' },
      solution: '@Injectable()'
    },
    quizQuestions: [
      {
        id: 'q-ng-2-2',
        question: { en: 'What symbol precedes decorators in TypeScript?', km: 'តើសញ្ញាអ្វីដែលនៅពីមុខ Decorator ក្នុង TypeScript?' },
        options: [
          { id: 'a', text: { en: 'The @ symbol', km: 'សញ្ញា @' }, isCorrect: true },
          { id: 'b', text: { en: 'The # symbol', km: 'សញ្ញា #' }, isCorrect: false }
        ],
        explanation: { en: 'Decorators are prefixed with `@`.', km: 'Decorators ប្រើប្រាស់សញ្ញា `@`។' }
      }
    ]
  },
  {
    id: 'ng-hub-2-3',
    slug: 'typescript-interfaces-and-classes',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: {
      en: '2.3 Basic Types, Interfaces & Class Syntax',
      km: '2.3 Interfaces, Classes & Types ក្នុង Angular'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Interfaces define contracts for objects in Angular, ensuring all models (like User or Task) have consistent property types. Classes provide blueprints for creating object instances with methods and constructor parameters.',
      km: 'Interface ប្រើសម្រាប់កំណត់ទម្រង់ Schema Contract នៃ Object (ដូចជា User ឬ Task Model)។ ឯ Class ផ្តល់ជា Blueprint សម្រាប់បង្កើត Object Instance ជាមួយ Methods និង Constructor Parameters។'
    },
    tutorial: {
      en: 'Interface Definition vs Class usage:\n```ts\nexport interface Student {\n  id: number;\n  name: string;\n  email: string;\n  isActive: boolean;\n}\n```',
      km: 'ឧទាហរណ៍ការសរសេរ Interface ៖\n```ts\nexport interface Student {\n  id: number;\n  name: string;\n  email: string;\n  isActive: boolean;\n}\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .keyword { color: #c084fc; font-weight: bold; }
    .type { color: #4ade80; }
  </style>
</head>
<body>
  <h3>Angular Data Model Interface</h3>
  <pre style="background:#0f172a; padding:16px; border-radius:8px; border:1px solid #1e293b;">
<span class="keyword">export interface</span> Course {
  id: <span class="type">string</span>;
  title: <span class="type">string</span>;
  lessonsCount: <span class="type">number</span>;
  isPublished: <span class="type">boolean</span>;
}
  </pre>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'API Response Typing', km: 'ការកំណត់ Type លើ API Response' },
      description: {
        en: 'Type-checking HTTP JSON response payloads using Angular HttpClient ensures components never render undefined fields.',
        km: 'ការកំណត់ Interface លើ HTTP JSON Response ជួយការពារ Component ពីការទាញយក Field មិនត្រឹមត្រូវមក Render។'
      }
    },
    practiceExercise: {
      question: { en: 'Define an interface named `Product` with properties `id` (number) and `price` (number).', km: 'ប្រកាស Interface `Product` ដែលមាន `id` (number) និង `price` (number)។' },
      solution: 'export interface Product { id: number; price: number; }'
    },
    quizQuestions: [
      {
        id: 'q-ng-2-3',
        question: { en: 'Does TypeScript compiled code include interfaces at runtime in JavaScript?', km: 'តើ Interface ត្រូវ Compile ទៅជាកូដ JavaScript ពេលរត់នៅលើ Browser ដែរឬទេ?' },
        options: [
          { id: 'a', text: { en: 'No, interfaces are erased during TypeScript compilation', km: 'ទេ, Interface ត្រូវបានលុបចេញពេល Compile ទៅ JS' }, isCorrect: true },
          { id: 'b', text: { en: 'Yes, interfaces exist as JavaScript functions', km: 'បាទ/ចាស, មានក្នុង JS' }, isCorrect: false }
        ],
        explanation: { en: 'Interfaces exist only at compile time for type-checking and are removed in output JS.', km: 'Interface មានតែពេល Compile សម្រាប់ Type-checking ប៉ុណ្ណោះ។' }
      }
    ]
  },

  // Module 3 — Components
  {
    id: 'ng-hub-3-1',
    slug: 'anatomy-of-a-component',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: {
      en: '3.1 Anatomy of a Component (.ts + .html + .css)',
      km: '3.1 រចនាសម្ព័ន្ធ Component (.ts + .html + .css)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'An Angular Component consists of three core building blocks: 1) TypeScript Class (`.ts`) for logic and state, 2) HTML Template (`.html`) for UI structure, and 3) CSS Stylesheet (`.css`) for encapsulated component styles.',
      km: 'Angular Component ផ្សំឡើងពី ៣ ផ្នែកចម្បង៖ ១) TypeScript Class (`.ts`) សម្រាប់ Logic & State, ២) HTML Template (`.html`) សម្រាប់ UI Structure, និង ៣) CSS Stylesheet (`.css`) សម្រាប់ដេគ័រម៉ូដស្អាត។'
    },
    tutorial: {
      en: 'Source files for app-user-profile:\n- `user-profile.component.ts`: Logic class\n- `user-profile.component.html`: Template markup\n- `user-profile.component.css`: Encapsulated styles',
      km: 'ឯកសារប្រភពរបស់ Component ៖\n- `user-profile.component.ts`៖ គ្រប់គ្រង Data & Methods\n- `user-profile.component.html`៖ បង្ហាញរចនាសម្ព័ន្ធ HTML\n- `user-profile.component.css`៖ ម៉ូដ CSS ដាច់ដោយឡែក'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .file-tab { display: inline-block; padding: 6px 12px; background: #1e293b; color: #38bdf8; font-family: monospace; border-radius: 6px 6px 0 0; font-size: 12px; }
    .code-box { background: #0f172a; border: 1px solid #1e293b; padding: 14px; font-family: monospace; font-size: 13px; border-radius: 0 8px 8px 8px; }
  </style>
</head>
<body>
  <div class="file-tab">app.component.ts</div>
  <div class="code-box">
    @Component({<br>
    &nbsp;&nbsp;selector: 'app-root',<br>
    &nbsp;&nbsp;templateUrl: './app.component.html',<br>
    &nbsp;&nbsp;styleUrls: ['./app.component.css']<br>
    })<br>
    export class AppComponent { title = 'SabayCode App'; }
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Encapsulated Component Architecture', km: 'ការបំបែក Component តាមមុខងារ' },
      description: {
        en: 'Modular architecture allows multiple developers to build isolated components simultaneously without CSS namespace collisions.',
        km: 'ជួយឲ្យ Developers ជាច្រើននាក់អាចធ្វើការបំបែក Component អភិវឌ្ឍព្រមៗគ្នាដោយមិនបារម្ភរឿងជាន់ឈ្មោះ CSS Class ឡើយ។'
      }
    },
    practiceExercise: {
      question: { en: 'Which property inside `@Component` metadata specifies the HTML template path?', km: 'តើ Property មួយណា ក្នុង Metadata ដែលកំណត់ Path ទៅកាន់ HTML file?' },
      solution: 'templateUrl'
    },
    quizQuestions: [
      {
        id: 'q-ng-3-1',
        question: { en: 'Are CSS styles inside an Angular component scoped exclusively to that component by default?', km: 'តើ CSS Styles ក្នុង Angular Component មានឥទ្ធិពលតែលើ Component នោះដាច់ដោយឡែក (Scoped) ដែរឬទេ?' },
        options: [
          { id: 'a', text: { en: 'Yes, Angular uses View Encapsulation by default', km: 'បាទ/ចាស, Angular ប្រើប្រាស់ View Encapsulation' }, isCorrect: true },
          { id: 'b', text: { en: 'No, all styles bleed into global window', km: 'ទេ, ប៉ះពាល់ទូទាំង Global' }, isCorrect: false }
        ],
        explanation: { en: 'Angular uses View Encapsulation to scope component styles.', km: 'Angular Encapsulation ការពារមិនឲ្យ CSS ប៉ះពាល់ខាងក្រៅឡើយ។' }
      }
    ]
  },
  {
    id: 'ng-hub-3-2',
    slug: 'creating-components-with-cli',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: {
      en: '3.2 Creating Components with Angular CLI',
      km: '3.2 ការបង្កើត Component ដោយប្រើ CLI (ng generate component)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Using `ng generate component component-name` (or shortcut `ng g c component-name`), the Angular CLI automatically creates the `.ts`, `.html`, `.css`, and `.spec.ts` files, and registers the component in standalone imports or module definitions.',
      km: 'ការប្រើប្រាស់ `ng generate component component-name` (ឬពាក្យកាត់ `ng g c component-name`), Angular CLI នឹងបង្កើត ឯកសារ `.ts`, `.html`, `.css`, និង `.spec.ts` ព្រមទាំងប្រកាស Component នោះចូលក្នុង System ដោយស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: 'Command execution output:\n```bash\n$ ng g c components/hero-banner\nCREATE src/app/components/hero-banner/hero-banner.component.css\nCREATE src/app/components/hero-banner/hero-banner.component.html\nCREATE src/app/components/hero-banner/hero-banner.component.ts\nCREATE src/app/components/hero-banner/hero-banner.component.spec.ts\n```',
      km: 'លទ្ធផលបង្កើត ឯកសារតាម CLI ៖\n```bash\n$ ng g c components/hero-banner\nCREATE src/app/components/hero-banner/hero-banner.component.css\nCREATE src/app/components/hero-banner/hero-banner.component.html\nCREATE src/app/components/hero-banner/hero-banner.component.ts\nCREATE src/app/components/hero-banner/hero-banner.component.spec.ts\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #0f172a; color: #4ade80; padding: 20px; }
    .log { background: #020617; padding: 12px; border-radius: 6px; border: 1px solid #1e293b; color: #cbd5e1; }
  </style>
</head>
<body>
  <h3>Angular CLI Generator Console</h3>
  <div class="log">
    <span style="color:#38bdf8">$ ng g c components/user-card</span><br><br>
    CREATE src/app/user-card/user-card.component.css (0 bytes)<br>
    CREATE src/app/user-card/user-card.component.html (23 bytes)<br>
    CREATE src/app/user-card/user-card.component.ts (270 bytes)
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Rapid Component Scaffolding', km: 'ការបង្កើត Components លឿនរហ័ស' },
      description: {
        en: 'Saves developers from manually creating 4 files and writing repetitive boilerplate code for every UI widget.',
        km: 'ជួយ Dev សន្សំសំចៃពេល ដោយមិនបាច់បង្កើត ឯកសារ ៤ ដោយដៃ និងសរសេរ Boilerplate ដែលដដែលៗឡើយ។'
      }
    },
    practiceExercise: {
      question: { en: 'What is the shorthand CLI command to generate a component named `navbar`?', km: 'តើកូដកាត់ CLI មួយណាសម្រាប់បង្កើត Component ឈ្មោះ `navbar`?' },
      solution: 'ng g c navbar'
    },
    quizQuestions: [
      {
        id: 'q-ng-3-2',
        question: { en: 'What does `ng g c` stand for in Angular CLI?', km: 'តើ `ng g c` តំណាងឲ្យពាក្យពេញអ្វី?' },
        options: [
          { id: 'a', text: { en: 'ng generate component', km: 'ng generate component' }, isCorrect: true },
          { id: 'b', text: { en: 'ng get config', km: 'ng get config' }, isCorrect: false }
        ],
        explanation: { en: '`ng g c` is the standard shortcut for `ng generate component`.', km: '`ng g c` ជាពាក្យកាត់សម្រាប់ `ng generate component`។' }
      }
    ]
  },
  {
    id: 'ng-hub-3-3',
    slug: 'component-selectors-and-nesting',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: {
      en: '3.3 Component Selectors & Nesting Components',
      km: '3.3 Component Selectors & ការដាក់ Component បញ្ចូលគ្នា'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The `selector` property in a component decorator defines its custom HTML element name (e.g., `<app-navbar></app-navbar>`). You can nest child components inside parent templates by inserting their custom selector HTML tags.',
      km: '`selector` ក្នុង Component Decorator ជាអ្នកកំណត់ឈ្មោះ Custom HTML Tag (ដូចជា `<app-navbar></app-navbar>`)។ អ្នកអាចយក Child Component ទៅដាក់ក្នុង Parent Template ដោយគ្រាន់តែសរសេរ Custom Tag នោះចូល។'
    },
    tutorial: {
      en: 'Nesting Example:\nParent (`app.component.html`):\n```html\n<app-header></app-header>\n<main>\n  <app-user-list></app-user-list>\n</main>\n<app-footer></app-footer>\n```',
      km: 'ឧទាហរណ៍ការដាក់បញ្ជូលគ្នា ៖\nParent (`app.component.html`)៖\n```html\n<app-header></app-header>\n<main>\n  <app-user-list></app-user-list>\n</main>\n<app-footer></app-footer>\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .box { border: 2px dashed #38bdf8; padding: 12px; border-radius: 8px; margin-bottom: 8px; }
    .child { border: 2px solid #4ade80; padding: 8px; border-radius: 6px; background: #0f172a; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="box">
    <strong>&lt;app-root&gt; (Parent Container)</strong>
    <div class="child">&lt;app-header&gt; (Child 1)&lt;/app-header&gt;</div>
    <div class="child">&lt;app-task-list&gt; (Child 2)&lt;/app-task-list&gt;</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Reusable UI Design Systems', km: 'ការបង្កើត UI Design System ដែលប្រើឡើងវិញបាន' },
      description: {
        en: 'Build atomic UI widgets like buttons, modal dialogs, and avatar badges once, and reuse them across hundreds of page views.',
        km: 'បង្កើត Button, Modal Dialog, និង Avatar Badge តែម្តង ហើយយកទៅប្រើឡើងវិញលើគ្រប់ទំព័រក្នុង Web App។'
      }
    },
    practiceExercise: {
      question: { en: 'If a component selector is `app-status-badge`, what HTML tag renders it?', km: 'បើ Component selector ឈ្មោះ `app-status-badge` តើគេសរសេរ Tag HTML ដូចម្តេច?' },
      solution: '<app-status-badge></app-status-badge>'
    },
    quizQuestions: [
      {
        id: 'q-ng-3-3',
        question: { en: 'How do parent components render child components in Angular?', km: 'តើ Parent Component បង្ហាញ Child Component តាមរបៀបណា?' },
        options: [
          { id: 'a', text: { en: 'By inserting the child component custom selector HTML tag', km: 'ដោយសរសេរ Custom Selector Tag របស់ Child Component' }, isCorrect: true },
          { id: 'b', text: { en: 'By calling document.appendChild() in JavaScript', km: 'ដោយហៅ document.appendChild()' }, isCorrect: false }
        ],
        explanation: { en: 'Child components are rendered via their selector HTML tag.', km: 'Child Component បង្ហាញតាមរយៈ Selector HTML Tag។' }
      }
    ]
  },

  // Module 4 — Templates & Data Binding
  {
    id: 'ng-hub-4-1',
    slug: 'interpolation-displaying-data',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: {
      en: '4.1 Interpolation ({{ }}) for Displaying Data',
      km: '4.1 Interpolation ({{ }}) សម្រាប់បង្ហាញទិន្នន័យ'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Interpolation uses double curly braces `{{ expression }}` to embed TypeScript class properties directly into HTML templates. Angular evaluates expressions inside `{{ }}` and renders the output as string content in DOM.',
      km: 'Interpolation ប្រើសញ្ញាវង់ក្រចកឌុប `{{ expression }}` ដើម្បីបង្ហាញតម្លៃ Variable ឬ Expression ពី TypeScript Class ដោយផ្ទាល់ទៅលើ HTML Template។'
    },
    tutorial: {
      en: 'Class `.ts`:\n`export class UserComponent { username = "Dara"; points = 150; }`\n\nTemplate `.html`:\n`<h1>Hello, {{ username }}! You have {{ points * 2 }} bonus points.</h1>`',
      km: 'Class `.ts`៖\n`export class UserComponent { username = "Dara"; points = 150; }`\n\nTemplate `.html`៖\n`<h1>Hello, {{ username }}! You have {{ points * 2 }} bonus points.</h1>`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { background: #1e293b; border: 1px solid #38bdf8; padding: 16px; border-radius: 10px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>Interpolation Output:</h3>
    <p>Student Name: <strong>{{ studentName }}</strong></p>
    <p>Status: <strong>{{ isPassed ? 'PASSED' : 'FAILED' }}</strong></p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Dynamic Text Rendering', km: 'ការបង្ហាញ អក្សរ ផ្លាស់ប្តូរតាម Data' },
      description: {
        en: 'Renders dynamic dynamic user names, account balances, and notification counts instantly without DOM manipulation code.',
        km: 'បង្ហាញឈ្មោះអ្នកប្រើប្រាស់ ជញ្ជីងប្រាក់ និងចំនួនដំណឹងភ្លាមៗដោយមិនបាច់សរសេរ JavaScript DOM manipulation វែងឆ្ងាយ។'
      }
    },
    practiceExercise: {
      question: { en: 'Write the Angular interpolation expression to display class property `totalAmount`.', km: 'សរសេរ Angular Interpolation Expression ដើម្បីបង្ហាញ Variable `totalAmount`។' },
      solution: '{{ totalAmount }}'
    },
    quizQuestions: [
      {
        id: 'q-ng-4-1',
        question: { en: 'Which syntax is used for Interpolation in Angular templates?', km: 'តើ Syntax មួយណាដែលប្រើសម្រាប់ Interpolation ក្នុង Angular?' },
        options: [
          { id: 'a', text: { en: 'Double curly braces {{ value }}', km: 'វង់ក្រចកឌុប {{ value }}' }, isCorrect: true },
          { id: 'b', text: { en: 'Dollar sign braces ${ value }', km: 'សញ្ញាដុល្លារ ${ value }' }, isCorrect: false }
        ],
        explanation: { en: 'Angular uses `{{ expression }}` for string interpolation.', km: 'Angular ប្រើប្រាស់ `{{ expression }}` សម្រាប់ Interpolation។' }
      }
    ]
  },
  {
    id: 'ng-hub-4-2',
    slug: 'property-binding',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: {
      en: '4.2 Property Binding ([property]="value")',
      km: '4.2 Property Binding ([property]="value")'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Property binding uses square brackets `[property]="expression"` to pass data from a component class to a DOM element property or child component input (e.g., binding `[src]`, `[disabled]`, or `[href]`).',
      km: 'Property binding ប្រើប្រាស់វង់ក្រចកការ៉េ `[property]="expression"` ដើម្បីបញ្ជូន Data ពី TypeScript Class ទៅកាន់ DOM Element Property ឬ Child Component Input (ដូចជា binding `[src]`, `[disabled]`, ឬ `[href]`)។'
    },
    tutorial: {
      en: 'Syntax examples:\n`<img [src]="imageUrl" [alt]="imageCaption">`\n`<button [disabled]="isSubmitting">Submit</button>`',
      km: 'ឧទាហរណ៍ Syntax ៖\n`<img [src]="imageUrl" [alt]="imageCaption">`\n`<button [disabled]="isSubmitting">Submit</button>`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .btn { background: #334155; color: #94a3b8; padding: 10px 16px; border-radius: 8px; border: none; cursor: not-allowed; }
  </style>
</head>
<body>
  <h3>Property Binding Demo</h3>
  <p>Binding dynamic property values:</p>
  <button class="btn" [disabled]="isDisabled">
    Button Disabled (isDisabled = true)
  </button>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Dynamic Form State', km: 'គ្រប់គ្រង Form State តាមលក្ខខណ្ឌ' },
      description: {
        en: 'Disables submit buttons dynamically while form validation is pending or background HTTP requests are active.',
        km: 'Disable Button Submit ស្វ័យប្រវត្តពេល Form មិនទាន់បំពាក់គ្រប់ ឬកំពុងរង់ចាំ HTTP Response ពី Server។'
      }
    },
    practiceExercise: {
      question: { en: 'Bind HTML `src` property to TypeScript class variable `avatarUrl`.', km: 'សរសេរ Property Binding ភ្ជាប់ HTML `src` ទៅកាន់ Variable `avatarUrl`។' },
      solution: '<img [src]="avatarUrl">'
    },
    quizQuestions: [
      {
        id: 'q-ng-4-2',
        question: { en: 'What bracket notation denotes Property Binding in Angular?', km: 'តើសញ្ញា Bracket មួយណាដែលតំណាងឲ្យ Property Binding ក្នុង Angular?' },
        options: [
          { id: 'a', text: { en: 'Square brackets [property]="value"', km: 'វង់ក្រចកការ៉េ [property]="value"' }, isCorrect: true },
          { id: 'b', text: { en: 'Parentheses (property)="value"', km: 'វង់ក្រចកចំហ (property)="value"' }, isCorrect: false }
        ],
        explanation: { en: 'Square brackets `[]` are used for property binding.', km: 'វង់ក្រចកការ៉េ `[]` ប្រើសម្រាប់ Property binding។' }
      }
    ]
  },
  {
    id: 'ng-hub-4-3',
    slug: 'event-binding',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: {
      en: '4.3 Event Binding ((event)="handler()")',
      km: '4.3 Event Binding ((event)="handler()")'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Event binding uses parentheses `(event)="method()"` to listen for DOM user events like clicks, key presses, and mouse movements, and triggers corresponding methods inside the TypeScript component class.',
      km: 'Event binding ប្រើប្រាស់វង់ក្រចក `(event)="method()"` ដើម្បីស្តាប់ការចុច (Click, Keypress, Mouseover) របស់ User លើ DOM ហើយហៅ Method ក្នុង TypeScript Class ឲ្យដំណើរការ។'
    },
    tutorial: {
      en: 'Event binding syntax:\n`<button (click)="onSave()">Save Changes</button>`\n`<input (keyup.enter)="onEnterPressed($event)">`',
      km: 'ឧទាហរណ៍ Event binding syntax ៖\n`<button (click)="onSave()">Save Changes</button>`\n`<input (keyup.enter)="onEnterPressed($event)">`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .btn { background: #2563eb; color: white; border: none; padding: 10px 18px; border-radius: 8px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <h3>Event Binding Interactive Counter</h3>
  <button class="btn" (click)="incrementCounter()">
    Click Me! (Clicked {{ count }} times)
  </button>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'User Interaction Handlers', km: 'ការចាប់គ្រប់សកម្មភាពចុចរបស់ User' },
      description: {
        en: 'Triggers form submissions, search filters, modal popups, and tab switches effortlessly on user gestures.',
        km: 'ចាប់រាល់សកម្មភាព Submit form, Search filter, បើក Popups, និងដូរ Tabs ភ្លាមៗពេល User អន្តរកម្ម។'
      }
    },
    practiceExercise: {
      question: { en: 'Write event binding syntax to call method `deleteItem()` on button click.', km: 'សរសេរ Event Binding ហៅ Method `deleteItem()` ពេលចុច Button។' },
      solution: '<button (click)="deleteItem()"></button>'
    },
    quizQuestions: [
      {
        id: 'q-ng-4-3',
        question: { en: 'Which bracket symbol indicates Event Binding in Angular?', km: 'តើសញ្ញាវង់ក្រចកមួយណាដែលតំណាងឲ្យ Event Binding ក្នុង Angular?' },
        options: [
          { id: 'a', text: { en: 'Parentheses (event)="handler()"', km: 'វង់ក្រចកកោង (event)="handler()"' }, isCorrect: true },
          { id: 'b', text: { en: 'Curly braces {{ event }}', km: 'វង់ក្រចកឌុប {{ event }}' }, isCorrect: false }
        ],
        explanation: { en: 'Parentheses `()` denote event binding.', km: 'វង់ក្រចកកោង `()` ប្រើសម្រាប់ Event binding។' }
      }
    ]
  },
  {
    id: 'ng-hub-4-4',
    slug: 'two-way-binding-ngmodel',
    moduleNumber: 4,
    lessonNumberInModule: 4,
    title: {
      en: '4.4 Two-Way Binding with [(ngModel)]',
      km: '4.4 Two-Way Binding ជាមួយ [(ngModel)]'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Two-way binding combines property binding and event binding using the "banana-in-a-box" syntax `[(ngModel)]="property"`. It synchronizes data changes between input fields in template and class properties simultaneously.',
      km: 'Two-way binding រួមបញ្ចូល Property binding និង Event binding ចូលគ្នាដោយប្រើ Syntax "Banana-in-a-box" `[(ngModel)]="property"`។ វាធ្វើសមកាលកម្ម (Sync) ទិន្នន័យរវាង Input Field ក្នុង HTML និង Variable ក្នុង Class ស្វ័យប្រវត្តក្នុងពេលតែមួយ។'
    },
    tutorial: {
      en: 'Requirement: Import `FormsModule` in module/standalone component:\n`<input [(ngModel)]="username" placeholder="Enter username">`\n`<p>Live Preview: {{ username }}</p>`',
      km: 'លក្ខខណ្ឌ៖ ត្រូវ Import `FormsModule` ជាមុនសិន៖\n`<input [(ngModel)]="username" placeholder="Enter username">`\n`<p>Live Preview: {{ username }}</p>`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    input { background: #0f172a; border: 1px solid #38bdf8; color: white; padding: 10px; border-radius: 8px; width: 100%; max-width: 300px; }
    .box { background: #1e293b; padding: 12px; border-radius: 8px; margin-top: 10px; border: 1px solid #334155; }
  </style>
</head>
<body>
  <h3>Two-Way Data Sync</h3>
  <input [(ngModel)]="searchQuery" placeholder="Type something here...">
  <div class="box">
    Live Output: <strong>{{ searchQuery }}</strong>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Interactive Form Input Binding', km: 'ការធ្វើ Sync Data លើ Form ភ្លាមៗ' },
      description: {
        en: 'Ideal for search boxes, form inputs, and dynamic filter controls where UI and model must mirror each other instantly.',
        km: 'ល្អបំផុតសម្រាប់ Search Input, Form, និង Filter ដែលត្រូវការអាប់ដេត UI តាម Data ភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: { en: 'What module must be imported in Angular to enable `[(ngModel)]`?', km: 'តើ Module មួយណាដែលត្រូវ Import ជាដាច់ខាតដើម្បីប្រើប្រាស់ `[(ngModel)]`?' },
      solution: 'FormsModule'
    },
    quizQuestions: [
      {
        id: 'q-ng-4-4',
        question: { en: 'What is the nick-name for the `[(ngModel)]` syntax?', km: 'តើសញ្ញា `[(ngModel)]` ត្រូវគេប្រសិទ្ធនាមហៅក្រៅថាដូចម្តេច?' },
        options: [
          { id: 'a', text: { en: 'Banana in a box', km: 'Banana in a box' }, isCorrect: true },
          { id: 'b', text: { en: 'Apple in a basket', km: 'Apple in a basket' }, isCorrect: false }
        ],
        explanation: { en: '`[( )]` is popularly called "banana in a box".', km: '`[( )]` មានឈ្មោះហៅក្រៅថា "Banana in a box"។' }
      }
    ]
  }
];
