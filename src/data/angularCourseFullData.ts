import { FrontendCourse, FrontendQuizQuestion } from '../types/frontendClass';
import { ANGULAR_HUB_LESSONS_PART1 } from './angularLessonsHubPart1';
import { ANGULAR_HUB_LESSONS_PART2 } from './angularLessonsHubPart2';
import { ANGULAR_HUB_LESSONS_PART3 } from './angularLessonsHubPart3';

const ANGULAR_CHEAT_SHEET = [
  {
    concept: 'Angular CLI Commands',
    code: `ng new my-app --standalone   # Create new Angular app
ng serve --open             # Start dev server on http://localhost:4200
ng generate component nav   # Create new component (shortcut: ng g c nav)
ng generate service task    # Create new service (shortcut: ng g s task)`,
    explanation: {
      en: 'Core command-line tools for scaffolding, developing, and serving Angular applications.',
      km: 'កូដបញ្ជា CLI សំខាន់ៗសម្រាប់បង្កើត រត់ និងគ្រប់គ្រង ឯកសារ ក្នុង Angular App។'
    }
  },
  {
    concept: 'Data Binding Syntax',
    code: `{{ title }}                  <!-- Interpolation (One-way: TS -> HTML) -->
[disabled]="isDisabled"      <!-- Property Binding (One-way: TS -> Property) -->
(click)="onSave()"           <!-- Event Binding (One-way: Event -> TS) -->
[(ngModel)]="username"       <!-- Two-Way Binding (TS <-> HTML) -->`,
    explanation: {
      en: 'Four core data binding mechanisms connecting component class logic with HTML template views.',
      km: 'វិធីសាស្ត្រ ៤ យ៉ាងក្នុងការតភ្ជាប់ និងទាញ Data រវាង TypeScript Class និង HTML Template។'
    }
  },
  {
    concept: 'Structural Directives (*ngIf & *ngFor)',
    code: `<div *ngIf="isLoggedIn; else loginTpl">Welcome User!</div>
<ng-template #loginTpl><button>Log In</button></ng-template>

<ul *ngFor="let item of items; let i = index; trackBy: trackById">
  <li>{{ i + 1 }}. {{ item.name }}</li>
</ul>`,
    explanation: {
      en: 'Directives that alter DOM structure by adding/removing elements based on condition or looping arrays.',
      km: 'Directives សម្រាប់បន្ថែម/លុប Element តាមលក្ខខណ្ឌ ឬធ្វើការ Loop បង្ហាញ Array ក្នុង DOM។'
    }
  },
  {
    concept: 'Component Communication (@Input & @Output)',
    code: `// Child Component
@Input() title: string = '';
@Output() deleted = new EventEmitter<number>();

deleteItem() { this.deleted.emit(this.itemId); }

<!-- Parent Template -->
<app-child [title]="parentTitle" (deleted)="handleDelete($event)"></app-child>`,
    explanation: {
      en: '`@Input()` passes data down from parent to child; `@Output()` emits custom events up from child to parent.',
      km: '`@Input()` បញ្ជូន Data ពី Parent មក Child; ឯ `@Output()` បាញ់ Custom Event ពី Child ទៅ Parent។'
    }
  },
  {
    concept: 'Service Injection (@Injectable & inject())',
    code: `@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = ['Learn Angular', 'Build Capstone'];
  getTasks() { return this.tasks; }
}

// In Component:
private taskService = inject(TaskService);`,
    explanation: {
      en: 'Injectable singleton service pattern using modern `inject()` function for clean Dependency Injection.',
      km: 'ការបង្កើត Singleton Service និងការ Inject យកមកប្រើប្រាស់ក្នុង Component តាម `inject()`។'
    }
  },
  {
    concept: 'Common Angular Pitfalls & Mistakes',
    code: `// ❌ DON'T: Forget to import FormsModule when using [(ngModel)]
// Fix: Add FormsModule to component imports array!

// ❌ DON'T: Forget to unsubscribe from long-lived Observables
// Fix: Use "async" pipe in HTML or takeUntilDestroyed() in TS!

// ❌ DON'T: Confuse @Input() with plain class properties
// Fix: Always annotate with @Input() if data comes from parent template!`,
    explanation: {
      en: 'Common beginner mistakes and recommended solutions to avoid memory leaks and runtime errors.',
      km: 'កំហុសឆ្គងដែលជួបញឹកញាប់ និងដំណោះស្រាយការពារ Memory Leak និង Runtime Error។'
    }
  }
];

const ANGULAR_COURSE_QUIZ: FrontendQuizQuestion[] = [
  {
    id: 'q-ng-c1',
    question: {
      en: 'What language is Angular natively built with and requires by default?',
      km: 'តើ Angular ត្រូវសរសេរដោយប្រើប្រាស់ ភាសាអ្វីជាដាច់ខាត?'
    },
    options: [
      { id: '1', text: { en: 'TypeScript', km: 'TypeScript' }, isCorrect: true },
      { id: '2', text: { en: 'Python', km: 'Python' }, isCorrect: false },
      { id: '3', text: { en: 'PHP', km: 'PHP' }, isCorrect: false }
    ],
    explanation: {
      en: 'Angular is natively designed and developed with TypeScript.',
      km: 'Angular ត្រូវសាងសង់ឡើងដោយប្រើប្រាស់ TypeScript ដើម។'
    }
  },
  {
    id: 'q-ng-c2',
    question: {
      en: 'Which decorator defines component metadata like selector, template, and styles?',
      km: 'តើ Decorator មួយណាដែលកំណត់ Metadata របស់ Component ដូចជា selector, template និង styles?'
    },
    codeSnippet: `@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})`,
    options: [
      { id: '1', text: { en: '@Component', km: '@Component' }, isCorrect: true },
      { id: '2', text: { en: '@Injectable', km: '@Injectable' }, isCorrect: false },
      { id: '3', text: { en: '@Directive', km: '@Directive' }, isCorrect: false }
    ],
    explanation: {
      en: '`@Component` decorator attaches metadata to a class.',
      km: '`@Component` Decorator ផ្តល់ Metadata ទៅកាន់ Class។'
    }
  },
  {
    id: 'q-ng-c3',
    question: {
      en: 'What syntax represents Two-Way Data Binding in Angular?',
      km: 'តើ Syntax មួយណាដែលតំណាងឲ្យ Two-Way Data Binding ក្នុង Angular?'
    },
    options: [
      { id: '1', text: { en: '[(ngModel)]="property"', km: '[(ngModel)]="property"' }, isCorrect: true },
      { id: '2', text: { en: '[ngModel]="property"', km: '[ngModel]="property"' }, isCorrect: false },
      { id: '3', text: { en: '(ngModel)="property"', km: '(ngModel)="property"' }, isCorrect: false }
    ],
    explanation: {
      en: '`[(ngModel)]` (banana in a box) is used for two-way data binding.',
      km: '`[(ngModel)]` ជា Syntax Two-way data binding។'
    }
  },
  {
    id: 'q-ng-c4',
    question: {
      en: 'Which structural directive iterates over an array of items in HTML?',
      km: 'តើ Structural directive មួយណាដែលធ្វើការ Loop បង្ហាញ Array ក្នុង HTML?'
    },
    options: [
      { id: '1', text: { en: '*ngFor', km: '*ngFor' }, isCorrect: true },
      { id: '2', text: { en: '*ngIf', km: '*ngIf' }, isCorrect: false },
      { id: '3', text: { en: '[ngClass]', km: '[ngClass]' }, isCorrect: false }
    ],
    explanation: {
      en: '`*ngFor` loops over collection elements.',
      km: '`*ngFor` ប្រើប្រាស់សម្រាប់ Loop លើ Array។'
    }
  },
  {
    id: 'q-ng-c5',
    question: {
      en: 'How does a parent component pass data down to a child component?',
      km: 'តើ Parent Component បញ្ជូន Data ចុះមក Child Component តាមរបៀបណា?'
    },
    options: [
      { id: '1', text: { en: 'Using @Input() decorator in the child component', km: 'ប្រើប្រាស់ @Input() decorator ក្នុង child component' }, isCorrect: true },
      { id: '2', text: { en: 'Using @Output() decorator in the child component', km: 'ប្រើប្រាស់ @Output() decorator' }, isCorrect: false }
    ],
    explanation: {
      en: '`@Input()` receives parent data inputs.',
      km: '`@Input()` ទទួល Data ពី Parent។'
    }
  },
  {
    id: 'q-ng-c6',
    question: {
      en: 'What decorator marks an Angular service as injectable throughout the app?',
      km: 'តើ Decorator មួយណាដែលប្រកាស Class ឱ្យទៅជា Injectable Service?'
    },
    options: [
      { id: '1', text: { en: '@Injectable({ providedIn: "root" })', km: '@Injectable({ providedIn: "root" })' }, isCorrect: true },
      { id: '2', text: { en: '@Service({ scope: "global" })', km: '@Service({ scope: "global" })' }, isCorrect: false }
    ],
    explanation: {
      en: '`@Injectable({ providedIn: "root" })` makes a service injectable application-wide.',
      km: '`@Injectable({ providedIn: "root" })` បង្កើត Singleton Service។'
    }
  },
  {
    id: 'q-ng-c7',
    question: {
      en: 'Which method on Angular `HttpClient` sends HTTP GET request to a backend URL?',
      km: 'តើ Method មួយណា លើ `HttpClient` សម្រាប់ផ្ញើ HTTP GET Request?'
    },
    options: [
      { id: '1', text: { en: 'http.get<T>(url)', km: 'http.get<T>(url)' }, isCorrect: true },
      { id: '2', text: { en: 'http.fetch<T>(url)', km: 'http.fetch<T>(url)' }, isCorrect: false }
    ],
    explanation: {
      en: '`http.get<T>(url)` performs HTTP GET requests.',
      km: '`http.get<T>(url)` ធ្វើការ HTTP GET Request។'
    }
  },
  {
    id: 'q-ng-c8',
    question: {
      en: 'What placeholder HTML tag marks where Angular Router renders active route components?',
      km: 'តើ HTML Tag មួយណាជា Placeholder ដែល Router យក Component មកបង្ហាញ?'
    },
    options: [
      { id: '1', text: { en: '<router-outlet></router-outlet>', km: '<router-outlet></router-outlet>' }, isCorrect: true },
      { id: '2', text: { en: '<route-view></route-view>', km: '<route-view></route-view>' }, isCorrect: false }
    ],
    explanation: {
      en: '`<router-outlet>` renders active route components.',
      km: '`<router-outlet>` បង្ហាញ Route Component ដែលកំពុងរត់។'
    }
  },
  {
    id: 'q-ng-c9',
    question: {
      en: 'Which template pipe automatically subscribes and unsubscribes from Observables in HTML?',
      km: 'តើ Template pipe មួយណាដែល Subscribe និង Unsubscribe ពី Observable ស្វ័យប្រវត្តក្នុង HTML?'
    },
    options: [
      { id: '1', text: { en: 'The async pipe ( | async )', km: 'async pipe ( | async )' }, isCorrect: true },
      { id: '2', text: { en: 'The json pipe ( | json )', km: 'json pipe ( | json )' }, isCorrect: false }
    ],
    explanation: {
      en: 'The `async` pipe manages observable subscription lifecycles automatically.',
      km: '`async` pipe គ្រប់គ្រង Observable subscription ស្វ័យប្រវត្តិ។'
    }
  },
  {
    id: 'q-ng-c10',
    question: {
      en: 'Which lifecycle hook runs once immediately after component inputs are initialized?',
      km: 'តើ Lifecycle hook មួយណាដែលរត់ដំបូងគេបន្ទាប់ពី Component បង្កើតឡើង?'
    },
    options: [
      { id: '1', text: { en: 'ngOnInit()', km: 'ngOnInit()' }, isCorrect: true },
      { id: '2', text: { en: 'ngOnDestroy()', km: 'ngOnDestroy()' }, isCorrect: false }
    ],
    explanation: {
      en: '`ngOnInit()` runs after component input initialization.',
      km: '`ngOnInit()` រត់ដំបូងគេបន្ទាប់ពី Component បង្កើតឡើង។'
    }
  }
];

export const ANGULAR_COURSE_DATA: FrontendCourse = {
  id: 'angular',
  title: {
    en: 'Angular Course',
    km: 'វគ្គសិក្សា Angular'
  },
  iconName: 'angular',
  categoryId: 'frameworks',
  difficulty: 'Advanced',
  shortDescription: {
    en: 'Master enterprise Single Page Applications with Google\'s full-fledged TypeScript framework: Components, Directives, Services, RxJS, Routing, and Reactive Forms.',
    km: 'សិក្សាពី Components, Directives, Services, Routing, RxJS និង Forms ក្នុង Angular សម្រាប់សាងសង់ Single Page Applications (SPA) ស្តង់ដារក្រុមហ៊ុន។'
  },
  summary: {
    en: 'Angular គឺជា Framework របស់ JavaScript/TypeScript សម្រាប់សាងសង់ Single Page Applications (SPA) ដែលមានលក្ខណៈរឹងមាំ និងសមស្របសម្រាប់គម្រោងធំៗ។ សិក្សាពី Components, Directives, Services, Routing និង RxJS។\n\nតម្រូវការជាមុន៖ HTML, CSS, JavaScript, TypeScript ជាមូលដ្ឋាន',
    km: 'Angular គឺជា Framework របស់ JavaScript/TypeScript សម្រាប់សាងសង់ Single Page Applications (SPA) ដែលមានលក្ខណៈរឹងមាំ និងសមស្របសម្រាប់គម្រោងធំៗ។ សិក្សាពី Components, Directives, Services, Routing និង RxJS។\n\nតម្រូវការជាមុន៖ HTML, CSS, JavaScript, TypeScript ជាមូលដ្ឋាន'
  },
  estimatedHours: 12,
  lessonCount: 37,
  cheatSheet: ANGULAR_CHEAT_SHEET,
  quiz: ANGULAR_COURSE_QUIZ,
  capstoneProject: {
    title: {
      en: 'Task Manager Mini-App Capstone',
      km: 'គម្រោង Capstone — កម្មវិធីគ្រប់គ្រងភារកិច្ច Task Manager Mini-App'
    },
    description: {
      en: 'Build a multi-component Task Manager Angular app featuring a shared TaskService, Reactive Form creation, *ngFor/*ngIf filtering, @Input/@Output parent-child interactions, Router navigation, and HttpClient API simulation.',
      km: 'សាងសង់កម្មវិធី Task Manager ពេញលេញដោយប្រើប្រាស់ TaskService (RxJS state), Reactive Form (ជាមួយ Validation), *ngFor/*ngIf directives, @Input/@Output communication, Routing, និង HttpClient API simulation។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Angular Task Manager Capstone</title>
  <style>
    :root {
      --bg: #0f172a;
      --card-bg: #1e293b;
      --accent: #dd0031;
      --text: #f8fafc;
      --primary: #38bdf8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: var(--bg); color: var(--text); font-family: system-ui, sans-serif; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: var(--card-bg); border: 1px solid #334155; border-radius: 16px; padding: 24px; shadow: 0 10px 25px rgba(0,0,0,0.5); }
    .header { border-bottom: 1px solid #334155; padding-bottom: 16px; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
    .logo { background: var(--accent); color: white; width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 20px; }
    .form-group { display: flex; gap: 10px; margin-bottom: 20px; }
    input { flex: 1; background: #0f172a; border: 1px solid #38bdf8; color: white; padding: 10px 14px; border-radius: 8px; outline: none; }
    button { background: #2563eb; color: white; border: none; padding: 10px 18px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: background 0.2s; }
    button:hover { background: #1d4ed8; }
    .task-card { background: #0f172a; border: 1px solid #334155; padding: 12px 16px; border-radius: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; }
    .status { font-size: 11px; padding: 4px 8px; border-radius: 4px; background: #059669; color: white; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">A</div>
      <div>
        <h2>Angular Task Manager App</h2>
        <p style="color: #94a3b8; font-size: 13px;">Demonstrating Components, Services, RxJS & Reactive Forms</p>
      </div>
    </div>

    <!-- Task Form -->
    <div class="form-group">
      <input type="text" placeholder="Enter new task name...">
      <button>Add Task</button>
    </div>

    <!-- Task List -->
    <div class="task-card">
      <div>
        <strong>Learn Angular Components & Directives</strong>
        <p style="font-size:12px; color:#94a3b8;">Module 1 – 5 Basics</p>
      </div>
      <span class="status">Completed</span>
    </div>

    <div class="task-card">
      <div>
        <strong>Master Services & RxJS Observables</strong>
        <p style="font-size:12px; color:#94a3b8;">Module 7 & 9 State</p>
      </div>
      <span class="status" style="background: #d97706;">In Progress</span>
    </div>
  </div>
</body>
</html>`
    }
  },
  lessons: [
    ...ANGULAR_HUB_LESSONS_PART1,
    ...ANGULAR_HUB_LESSONS_PART2,
    ...ANGULAR_HUB_LESSONS_PART3
  ]
};
