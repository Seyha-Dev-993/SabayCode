import { FrontendLesson } from '../types/frontendClass';

export const ANGULAR_HUB_LESSONS_PART2: FrontendLesson[] = [
  // Module 5 — Directives
  {
    id: 'ng-hub-5-1',
    slug: 'structural-directive-ngif',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: {
      en: '5.1 Structural Directive: *ngIf (or @if in Angular 17+)',
      km: '5.1 Structural Directive: *ngIf (ឬ @if ក្នុង Angular 17+)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Structural directives alter DOM layout by adding or removing elements. `*ngIf="condition"` evaluates a boolean expression: if true, the element is inserted into the DOM; if false, it is completely removed.',
      km: 'Structural directives កែប្រែ រចនាសម្ព័ន្ធ DOM ដោយបន្ថែម ឬលុប Element ចេញ។ `*ngIf="condition"` ពិនិត្យលក្ខខណ្ឌ Boolean ៖ បើ True វាបន្ថែម Element ចូលក្នុង DOM បើ False វាលុប Element នោះចេញស្អាតតែម្តង។'
    },
    tutorial: {
      en: 'Syntax Comparison:\nTraditional: `<div *ngIf="isLoggedIn; else guestTemplate">Welcome User</div>`\nNew Angular Control Flow: `@if (isLoggedIn) { <div>Welcome User</div> } @else { <div>Please Log In</div> }`',
      km: 'Syntax Comparison ៖\nTraditional: `<div *ngIf="isLoggedIn; else guestTemplate">Welcome User</div>`\nNew Control Flow: `@if (isLoggedIn) { <div>Welcome User</div> } @else { <div>Please Log In</div> }`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .box { background: #065f46; color: #a7f3d0; padding: 12px; border-radius: 8px; border: 1px solid #059669; }
  </style>
</head>
<body>
  <h3>Conditional Rendering (*ngIf)</h3>
  <div class="box" *ngIf="isLoggedIn">
    ✔ Welcome back, Premium Subscriber!
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Conditional Feature Flags', km: 'ការបង្ហាញ Feature តាមសិទ្ធិ User' },
      description: {
        en: 'Renders admin control panels only if the authenticated user has administrative role credentials.',
        km: 'បង្ហាញ Admin Dashboard និង Button ពិសេសទាល់តែ User នោះមានសិទ្ធិជា Admin ប៉ុណ្ណោះ។'
      }
    },
    practiceExercise: {
      question: { en: 'Write `*ngIf` directive to render `<p>` only when `hasError` is true.', km: 'សរសេរ `*ngIf` លើ `<p>` ដើម្បីបង្ហាញលុះត្រាតែ `hasError` ជា true។' },
      solution: '<p *ngIf="hasError">Error occurred</p>'
    },
    quizQuestions: [
      {
        id: 'q-ng-5-1',
        question: { en: 'What symbol prefixes structural directives in Angular?', km: 'តើសញ្ញាអ្វីដែលនៅពីមុខ Structural Directives ក្នុង Angular?' },
        options: [
          { id: 'a', text: { en: 'Asterisk (*)', km: 'សញ្ញាផ្កាយ (*)' }, isCorrect: true },
          { id: 'b', text: { en: 'Hash (#)', km: 'សញ្ញាទ្រុងជ្រូក (#)' }, isCorrect: false }
        ],
        explanation: { en: 'Structural directives like `*ngIf` use an asterisk prefix.', km: '`*ngIf` និង `*ngFor` ប្រើប្រាស់សញ្ញាផ្កាយ `*`។' }
      }
    ]
  },
  {
    id: 'ng-hub-5-2',
    slug: 'structural-directive-ngfor',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: {
      en: '5.2 Structural Directive: *ngFor (or @for in Angular 17+)',
      km: '5.2 Structural Directive: *ngFor (ឬ @for ក្នុង Angular 17+)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: '`*ngFor="let item of items"` iterates over an array or iterable collection and instantiates a DOM element template for each item in the list. Index variables (`let i = index`) can track position.',
      km: '`*ngFor="let item of items"` ធ្វើការ Loop លើ Array ឬ Collection នៃទិន្នន័យ ហើយបង្ហាញ Element Template ស្វ័យប្រវត្តតាមចំនួន Item នីមួយៗ។ អាចទាញយក Index ដោយប្រើ `let i = index`។'
    },
    tutorial: {
      en: 'Syntax:\n`<ul *ngFor="let task of taskList; let i = index">`\n`  <li>{{ i + 1 }}. {{ task.title }}</li>`\n`</ul>`',
      km: 'Syntax ៖\n`<ul *ngFor="let task of taskList; let i = index">`\n`  <li>{{ i + 1 }}. {{ task.title }}</li>`\n`</ul>`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    li { background: #1e293b; border: 1px solid #334155; padding: 10px; margin-bottom: 6px; border-radius: 6px; list-style: none; }
  </style>
</head>
<body>
  <h3>Task List Iteration (*ngFor)</h3>
  <ul>
    <li *ngFor="let course of courseList">
      📘 {{ course.name }} - {{ course.duration }}
    </li>
  </ul>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Dynamic List Generation', km: 'ការបង្ហាញបញ្ជីទិន្នន័យស្វ័យប្រវត្តិ' },
      description: {
        en: 'Renders dynamic product catalogs, comment feeds, notifications, and data tables effortlessly.',
        km: 'បង្ហាញបញ្ជីទំនិញ Comment ដំណឹង និងតារាងទិន្នន័យជាច្រើនពី Database ឬ API។'
      }
    },
    practiceExercise: {
      question: { en: 'Write `*ngFor` syntax to loop over array `users` and assign each element to variable `u`.', km: 'សរសេរ `*ngFor` ដើម្បី Loop លើ array `users` និងដាក់ឈ្មោះ variable ថា `u`។' },
      solution: '*ngFor="let u of users"'
    },
    quizQuestions: [
      {
        id: 'q-ng-5-2',
        question: { en: 'Which local variable captures the current loop iteration index in `*ngFor`?', km: 'តើ Variable មួយណាដែលចាប់យកលេខរៀង Index ពេលរត់ Loop `*ngFor`?' },
        options: [
          { id: 'a', text: { en: 'let i = index', km: 'let i = index' }, isCorrect: true },
          { id: 'b', text: { en: 'let i = count', km: 'let i = count' }, isCorrect: false }
        ],
        explanation: { en: '`let i = index` captures the iteration index.', km: '`let i = index` ប្រើសម្រាប់ទាញលេខរៀង index។' }
      }
    ]
  },
  {
    id: 'ng-hub-5-3',
    slug: 'attribute-directives-ngclass-ngstyle',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: {
      en: '5.3 Attribute Directives: ngClass & ngStyle',
      km: '5.3 Attribute Directives: [ngClass] & [ngStyle]'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Attribute directives modify the appearance or behavior of an existing element. `[ngClass]` toggles multiple CSS classes dynamically based on boolean conditions. `[ngStyle]` sets dynamic inline CSS style properties.',
      km: 'Attribute directives កែប្រែ រូបរាង ឬ Behavior នៃ Element ដែលមានស្រាប់។ `[ngClass]` ប្រើសម្រាប់បិទ/បើក CSS Classes ច្រើនតាមលក្ខខណ្ឌ។ `[ngStyle]` ប្រើសម្រាប់កំណត់ Inline CSS Style តាម Variable។'
    },
    tutorial: {
      en: 'Syntax:\n`<div [ngClass]="{ \'active-tab\': isActive, \'text-danger\': hasError }">`\n`<div [ngStyle]="{ \'background-color\': themeColor, \'font-size.px\': fontSize }">`',
      km: 'Syntax ៖\n`<div [ngClass]="{ \'active-tab\': isActive, \'text-danger\': hasError }">`\n`<div [ngStyle]="{ \'background-color\': themeColor, \'font-size.px\': fontSize }">`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .badge { padding: 6px 12px; border-radius: 6px; font-weight: bold; font-size: 12px; display: inline-block; }
    .success { background: #16a34a; color: white; }
    .warning { background: #d97706; color: white; }
  </style>
</head>
<body>
  <h3>Dynamic Styling with [ngClass]</h3>
  <span class="badge" [ngClass]="{ 'success': isCompleted, 'warning': !isCompleted }">
    Status: {{ isCompleted ? 'Completed' : 'Pending' }}
  </span>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Dynamic UI State Highlights', km: 'ការដូរពណ៌ UI តាមស្ថានភាព' },
      description: {
        en: 'Highlights table rows in red when inventory is low, or green when order status is shipped.',
        km: 'ដូរពណ៌ជួរក្នុងតារាងជាពណ៌ក្រហមពេលស្តុកអស់ ឬពណ៌បៃតងពេលទំនិញដឹកជញ្ជូនរួចរាល់។'
      }
    },
    practiceExercise: {
      question: { en: 'Write `[ngClass]` syntax to apply class `active` when boolean `isSelected` is true.', km: 'សរសេរ `[ngClass]` ដើម្បីដាក់ class `active` ពេល `isSelected` ស្មើ true។' },
      solution: '[ngClass]="{ \'active\': isSelected }"'
    },
    quizQuestions: [
      {
        id: 'q-ng-5-3',
        question: { en: 'Does `[ngClass]` add/remove CSS classes or entire DOM elements?', km: 'តើ `[ngClass]` កែប្រែ CSS Class ឬលុប Element ទាំងមូលចេញពី DOM?' },
        options: [
          { id: 'a', text: { en: 'It modifies CSS class names on existing elements', km: 'វាប្រែប្រួលតែ CSS Class លើ Element ប៉ុណ្ណោះ' }, isCorrect: true },
          { id: 'b', text: { en: 'It deletes the element from DOM entirely', km: 'វាលុប Element ចេញពី DOM' }, isCorrect: false }
        ],
        explanation: { en: 'Attribute directives modify element properties or styling without removing the element from the DOM.', km: 'Attribute Directive កែប្រែតែ Style ឬ Class ប៉ុណ្ណោះ។' }
      }
    ]
  },
  {
    id: 'ng-hub-5-4',
    slug: 'writing-a-custom-directive',
    moduleNumber: 5,
    lessonNumberInModule: 4,
    title: {
      en: '5.4 Brief Intro to Writing a Custom Directive',
      km: '5.4 ការណែនាំអំពីការសរសេរ Custom Directive'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Custom Directives (created via `ng g d directive-name`) decorated with `@Directive` attach custom behavior or DOM manipulations directly to elements (e.g. auto-focusing inputs or hover highlight effects).',
      km: 'Custom Directive (បង្កើតតាម `ng g d directive-name`) ដែលប្រើ `@Directive` Decorator ផ្តល់លទ្ធភាពឲ្យសរសេរ Behavior ផ្ទាល់ខ្លួនលើ DOM Element (ដូចជា Auto-focus input ឬ Hover highlight effect)។'
    },
    tutorial: {
      en: 'Directive class skeleton:\n```ts\n@Directive({ selector: "[appHighlight]" })\nexport class HighlightDirective {\n  constructor(private el: ElementRef) {\n    this.el.nativeElement.style.backgroundColor = "yellow";\n  }\n}\n```',
      km: 'រចនាសម្ព័ន្ធ Custom Directive ៖\n```ts\n@Directive({ selector: "[appHighlight]" })\nexport class HighlightDirective {\n  constructor(private el: ElementRef) {\n    this.el.nativeElement.style.backgroundColor = "yellow";\n  }\n}\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .highlight-target { padding: 12px; border-radius: 8px; border: 1px solid #334155; }
  </style>
</head>
<body>
  <h3>Custom Directive Behaviour</h3>
  <div class="highlight-target" appHighlight>
    Hover or inspect element managed by appHighlight directive!
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Custom DOM Utilities', km: 'ការបង្កើត ឧបករណ៍ DOM ផ្ទាល់ខ្លួន' },
      description: {
        en: 'Commonly used to build custom tooltip popups, click-outside modal dismissers, and auto-masking credit card inputs.',
        km: 'ប្រើយ៉ាងទូលំទូលាយសម្រាប់ Tooltips, Click-outside dismisser និង Auto-format input។'
      }
    },
    practiceExercise: {
      question: { en: 'What decorator defines a custom directive class in Angular?', km: 'តើ Decorator មួយណាសម្រាប់ប្រកាស Custom Directive Class?' },
      solution: '@Directive()'
    },
    quizQuestions: [
      {
        id: 'q-ng-5-4',
        question: { en: 'Which Angular service provides direct access to the DOM element in a directive?', km: 'តើ Angular Service មួយណាដែលផ្តល់សិទ្ធិចូលទៅកាន់ DOM Element ផ្ទាល់ក្នុង Directive?' },
        options: [
          { id: 'a', text: { en: 'ElementRef', km: 'ElementRef' }, isCorrect: true },
          { id: 'b', text: { en: 'HttpRef', km: 'HttpRef' }, isCorrect: false }
        ],
        explanation: { en: '`ElementRef` injects a reference to the native DOM element.', km: '`ElementRef` ផ្តល់សិទ្ធិចូលទៅកាន់ DOM Element ផ្ទាល់។' }
      }
    ]
  },

  // Module 6 — Component Communication
  {
    id: 'ng-hub-6-1',
    slug: 'passing-data-down-input',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: {
      en: '6.1 Passing Data Down with @Input()',
      km: '6.1 ការបញ្ជូនទិន្នន័យពីលើចុះក្រោមជាមួយ @Input()'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The `@Input()` decorator allows parent components to pass data down to child components. The parent binds to the property using property binding `[childProp]="parentData"`.',
      km: '`@Input()` Decorator ជួយឲ្យ Parent Component បញ្ជូន Data ចុះមកកាន់ Child Component។ Parent សរសេរ Property binding `[childProp]="parentData"` លើ Child Tag។'
    },
    tutorial: {
      en: 'Child Component (`user-card.component.ts`):\n`@Input() userName: string = "";` \n\nParent Template (`app.component.html`):\n`<app-user-card [userName]="currentUserName"></app-user-card>`',
      km: 'Child Component (`user-card.component.ts`)៖\n`@Input() userName: string = "";` \n\nParent Template (`app.component.html`)៖\n`<app-user-card [userName]="currentUserName"></app-user-card>`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { background: #1e293b; border: 1px solid #38bdf8; padding: 14px; border-radius: 8px; }
  </style>
</head>
<body>
  <h3>Child Component Receiving @Input()</h3>
  <div class="card">
    <p>User Card Child Component</p>
    <p>Name: <strong>{{ userName }}</strong></p>
    <p>Role: <strong>{{ userRole }}</strong></p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Configurable Sub-Components', km: 'ការរៀបចំ Sub-Components ដែលផ្លាស់ប្តូរបាន' },
      description: {
        en: 'Passes task object details down from a main TaskList component to individual TaskItem card widgets.',
        km: 'បញ្ជូនព័ត៌មាន Task នីមួយៗពី TaskList Parent ទៅកាន់ TaskItem Card ខាងក្រោម។'
      }
    },
    practiceExercise: {
      question: { en: 'Decorate a property `productPrice` in a child component to receive data from parent.', km: 'ប្រកាស `@Input()` លើ variable `productPrice` ក្នុង Child Component។' },
      solution: '@Input() productPrice!: number;'
    },
    quizQuestions: [
      {
        id: 'q-ng-6-1',
        question: { en: 'Which direction does data flow when using `@Input()` in Angular?', km: 'តើទិន្នន័យរត់ពីណាទៅណា ពេលប្រើប្រាស់ `@Input()`?' },
        options: [
          { id: 'a', text: { en: 'From Parent component down to Child component', km: 'ពី Parent ចុះមក Child Component' }, isCorrect: true },
          { id: 'b', text: { en: 'From Child component up to Parent component', km: 'ពី Child ឡើងទៅ Parent Component' }, isCorrect: false }
        ],
        explanation: { en: '`@Input()` passes data top-down from parent to child.', km: '`@Input()` បញ្ជូនទិន្នន័យពីលើ (Parent) មកក្រោម (Child)។' }
      }
    ]
  },
  {
    id: 'ng-hub-6-2',
    slug: 'sending-events-up-output-eventemitter',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: {
      en: '6.2 Sending Events Up with @Output() & EventEmitter',
      km: '6.2 ការបញ្ជូន Event ឡើងលើជាមួយ @Output() & EventEmitter'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Child components use `@Output()` paired with `EventEmitter` to dispatch custom events up to parent components. The parent listens using event binding `(customEvent)="onParentHandler($event)"`.',
      km: 'Child Component ប្រើប្រាស់ `@Output()` គួបផ្សំជាមួយ `EventEmitter` ដើម្បីបាញ់ Custom Event ឬទិន្នន័យត្រឡប់ឡើងទៅ Parent Component វិញ។ Parent ធ្វើការស្តាប់តាមរយៈ `(customEvent)="onParentHandler($event)"`។'
    },
    tutorial: {
      en: 'Child Component (`button.component.ts`):\n`@Output() itemDeleted = new EventEmitter<number>();` \n`delete() { this.itemDeleted.emit(this.itemId); }`\n\nParent Template:\n`<app-item (itemDeleted)="handleDelete($event)"></app-item>`',
      km: 'Child Component (`button.component.ts`)៖\n`@Output() itemDeleted = new EventEmitter<number>();` \n`delete() { this.itemDeleted.emit(this.itemId); }`\n\nParent Template ៖\n`<app-item (itemDeleted)="handleDelete($event)"></app-item>`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .btn-del { background: #dc2626; color: white; border: none; padding: 8px 14px; border-radius: 6px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <h3>Child Emitting Custom Event</h3>
  <button class="btn-del" (click)="notifyParentToDelete()">
    🗑 Delete Task (Emits @Output)
  </button>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Child Actions Triggering Parent State Updates', km: 'ការចាប់សកម្មភាព Child ទៅអាប់ដេត Parent State' },
      description: {
        en: 'A task item child component emits an `onDelete` event containing task ID so the parent task list can remove it from array.',
        km: 'Child Component បាញ់ Task ID ឡើងទៅ Parent ដើម្បីឲ្យ Parent លុប Task នោះចេញពី Array ធំ។'
      }
    },
    practiceExercise: {
      question: { en: 'How does a child component trigger the event in an `EventEmitter` instance named `selectEvent`?', km: 'តើ Child ហៅ Method អ្វីលើ `EventEmitter` ឈ្មោះ `selectEvent` ដើម្បីបាញ់ Event ឡើងលើ?' },
      solution: 'this.selectEvent.emit(payload);'
    },
    quizQuestions: [
      {
        id: 'q-ng-6-2',
        question: { en: 'Which Angular class is instantiated to emit custom events in `@Output()`?', km: 'តើ Class មួយណាដែលត្រូវបង្កើតជា Instance សម្រាប់បាញ់ Event ជាមួយ `@Output()`?' },
        options: [
          { id: 'a', text: { en: 'EventEmitter', km: 'EventEmitter' }, isCorrect: true },
          { id: 'b', text: { en: 'EventBroadcaster', km: 'EventBroadcaster' }, isCorrect: false }
        ],
        explanation: { en: '`EventEmitter` emits custom typed events.', km: '`EventEmitter` ប្រើសម្រាប់បាញ់ Event។' }
      }
    ]
  },
  {
    id: 'ng-hub-6-3',
    slug: 'viewchild-and-template-references',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: {
      en: '6.3 Local Template Reference Variables & @ViewChild',
      km: '6.3 Local Template Variables (#var) & @ViewChild'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Template reference variables `#ref` grant direct access to a DOM element or child component instance inside HTML templates. The `@ViewChild(\'ref\')` decorator allows TypeScript component logic to access child elements programmatically.',
      km: 'Template reference variable `#ref` ផ្តល់សិទ្ធិចូលទៅកាន់ DOM Element ឬ Child Component ផ្ទាល់ក្នុង HTML Template។ ឯ `@ViewChild(\'ref\')` ជួយឲ្យ TypeScript Class ទាញយក Child Element នោះមកបញ្ជាតាមកូដ។'
    },
    tutorial: {
      en: 'HTML Template:\n`<input #nameInput type="text">` \n`<button (click)="nameInput.focus()">Focus Input</button>`\n\nTypeScript Class:\n`@ViewChild("nameInput") nameRef!: ElementRef;`',
      km: 'HTML Template ៖\n`<input #nameInput type="text">` \n`<button (click)="nameInput.focus()">Focus Input</button>`\n\nTypeScript Class ៖\n`@ViewChild("nameInput") nameRef!: ElementRef;`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    input { background: #1e293b; border: 1px solid #38bdf8; color: white; padding: 8px; border-radius: 6px; }
    button { background: #2563eb; color: white; border: none; padding: 8px 12px; border-radius: 6px; margin-left: 6px; }
  </style>
</head>
<body>
  <h3>Template Reference Variable (#myInput)</h3>
  <input #myInput placeholder="Type name here...">
  <button (click)="alert(myInput.value)">Show Value</button>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Direct Child Method Invocations', km: 'ការហៅ Method របស់ Child ដោយផ្ទាល់' },
      description: {
        en: 'Allows parent page controllers to trigger open/close methods directly on child modal dialog components.',
        km: 'អនុញ្ញាតឲ្យ Parent Page ហៅ Method `.openModal()` លើ Child Modal Component ដោយផ្ទាល់។'
      }
    },
    practiceExercise: {
      question: { en: 'What character declares a local template reference variable on an HTML element?', km: 'តើសញ្ញាអ្វីដែលប្រកាស Template Reference Variable លើ HTML Element?' },
      solution: '#'
    },
    quizQuestions: [
      {
        id: 'q-ng-6-3',
        question: { en: 'Which decorator grants TypeScript class access to a template reference DOM element?', km: 'តើ Decorator មួយណាដែលផ្តល់សិទ្ធិឲ្យ TS Class ចូលបញ្ជា DOM Element ក្នុង Template?' },
        options: [
          { id: 'a', text: { en: '@ViewChild()', km: '@ViewChild()' }, isCorrect: true },
          { id: 'b', text: { en: '@DomChild()', km: '@DomChild()' }, isCorrect: false }
        ],
        explanation: { en: '`@ViewChild()` retrieves child template references.', km: '`@ViewChild()` ប្រើសម្រាប់ចាប់យក Child Element Reference។' }
      }
    ]
  },

  // Module 7 — Services & Dependency Injection
  {
    id: 'ng-hub-7-1',
    slug: 'what-is-a-service',
    moduleNumber: 7,
    lessonNumberInModule: 1,
    title: {
      en: '7.1 What a Service Is & Separation of Concerns',
      km: '7.1 អ្វីទៅជា Service & ការបំបែក Logic ចេញពី Component'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'An Angular Service is a reusable class designed to hold business logic, data persistence, or HTTP API communication. Keeping logic in services prevents components from becoming bloated and enables sharing state across views.',
      km: 'Angular Service គឺជា Class សម្រាប់ផ្ទុក Business Logic, Data Storage ឬ HTTP API Calls។ ការបំបែក Logic ដាក់ក្នុង Service ការពារ Component មិនឲ្យស្មុគស្មាញ និងអនុញ្ញាតឲ្យចែករំលែក Data ទៅកាន់ទំព័រផ្សេងៗបានងាយស្រួល។'
    },
    tutorial: {
      en: 'Best Practice Architecture:\n- Components: Focus strictly on presentation and user interactions.\n- Services: Manage data calculations, HTTP API fetching, and application state.',
      km: 'ស្ថាបត្យកម្មស្តង់ដារ ៖\n- Components ៖ ផ្តោតលើការបង្ហាញ UI និងទទួលការចុចរបស់ User\n- Services ៖ គ្រប់គ្រង Data Calculation, HTTP Fetching, និង App State'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .svc-box { background: #1e293b; border-left: 4px solid #a855f7; padding: 14px; border-radius: 8px; font-family: monospace; }
  </style>
</head>
<body>
  <h3>Angular Architecture Separation</h3>
  <div class="svc-box">
    [ TaskService ] ── (Shared State) ──> [ TaskListComponent ]<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└───────── (Shared State) ──> [ TaskStatsComponent ]
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Shared Application State', km: 'ការចែករំលែក State រវាង Views' },
      description: {
        en: 'A CartService holds shopping cart items so both the Navigation Bar cart counter and Checkout Page update in real-time.',
        km: 'CartService ផ្ទុកបញ្ជីទំនិញក្នុងកន្ត្រក ធ្វើឲ្យ Navigation Header និង Checkout Page ទទួលបាន Data ដូចគ្នា។'
      }
    },
    practiceExercise: {
      question: { en: 'Should HTTP data fetching code live inside a Component or a Service?', km: 'តើកូដទាញទិន្នន័យពី HTTP API គួរសរសេរក្នុង Component ឬក្នុង Service?' },
      solution: 'Inside a Service'
    },
    quizQuestions: [
      {
        id: 'q-ng-7-1',
        question: { en: 'What is the primary role of an Angular Service?', km: 'តើតួនាទីចម្បងរបស់ Angular Service គឺអ្វី?' },
        options: [
          { id: 'a', text: { en: 'To manage reusable business logic, state, and API communication', km: 'គ្រប់គ្រង Business logic, State, និង API communication' }, isCorrect: true },
          { id: 'b', text: { en: 'To render HTML layouts and CSS styles', km: 'Render HTML និង CSS' }, isCorrect: false }
        ],
        explanation: { en: 'Services handle data logic and state separate from UI components.', km: 'Service គ្រប់គ្រង Business logic ដាច់ដោយឡែកពី UI។' }
      }
    ]
  },
  {
    id: 'ng-hub-7-2',
    slug: 'creating-injectable-service',
    moduleNumber: 7,
    lessonNumberInModule: 2,
    title: {
      en: '7.2 Creating Services with @Injectable()',
      km: '7.2 ការបង្កើត Service ដោយប្រើ @Injectable()'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The `@Injectable({ providedIn: \'root\' })` decorator marks a class as available for Angular Dependency Injection system. The `providedIn: \'root\'` option configures the service as a singleton instance available application-wide.',
      km: '`@Injectable({ providedIn: \'root\' })` Decorator ប្រកាស Class មួយជា Service ក្នុង Angular Dependency Injection។ `providedIn: \'root\'` ធ្វើឲ្យ Service នោះក្លាយជា Singleton (មានតែ Instance មួយទូទាំង App)។'
    },
    tutorial: {
      en: 'CLI Command: `ng generate service services/task`\n\nService Skeleton:\n```ts\n@Injectable({ providedIn: "root" })\nexport class TaskService {\n  private tasks = ["Task 1", "Task 2"];\n  getTasks() { return this.tasks; }\n}\n```',
      km: 'CLI Command: `ng generate service services/task`\n\nService Skeleton ៖\n```ts\n@Injectable({ providedIn: "root" })\nexport class TaskService {\n  private tasks = ["Task 1", "Task 2"];\n  getTasks() { return this.tasks; }\n}\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .dec { color: #f43f5e; font-weight: bold; }
    .code { background: #020617; border: 1px solid #1e293b; padding: 14px; border-radius: 8px; }
  </style>
</head>
<body>
  <h3>Injectable Service Declaration</h3>
  <div class="code">
    <span class="dec">@Injectable</span>({<br>
    &nbsp;&nbsp;providedIn: <span style="color:#38bdf8">'root'</span><br>
    })<br>
    <span style="color:#a855f7">export class</span> AuthService {<br>
    &nbsp;&nbsp;currentUser = { name: <span style="color:#4ade80">'Seyha'</span> };<br>
    }
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Singleton Auth Service', km: 'Auth Service ទូទាំង App' },
      description: {
        en: 'Configuring `providedIn: \'root\'` ensures user login credentials persist seamlessly as users switch pages.',
        km: '`providedIn: \'root\'` ធានាថា Data នៃ User Login រក្សាបានល្អទោះជា User ប្តូរទៅទំព័រណាក៏ដោយ។'
      }
    },
    practiceExercise: {
      question: { en: 'What decorator option makes a service a singleton available everywhere in the app?', km: 'តើ Option មួយណា ក្នុង `@Injectable` ដែលធ្វើឲ្យ Service ក្លាយជា Singleton?' },
      solution: "providedIn: 'root'"
    },
    quizQuestions: [
      {
        id: 'q-ng-7-2',
        question: { en: 'What does `providedIn: \'root\'` do in `@Injectable` metadata?', km: 'តើ `providedIn: \'root\'` មានតួនាទីអ្វី?' },
        options: [
          { id: 'a', text: { en: 'Registers the service as a single shared instance app-wide', km: 'ចុះឈ្មោះ Service ជា Singleton Instance ប្រើទូទាំង App' }, isCorrect: true },
          { id: 'b', text: { en: 'Deletes the service when user logs out', km: 'លុប Service ពេល Logout' }, isCorrect: false }
        ],
        explanation: { en: '`providedIn: \'root\'` creates a root-level singleton service.', km: '`providedIn: \'root\'` បង្កើត Singleton Service។' }
      }
    ]
  },
  {
    id: 'ng-hub-7-3',
    slug: 'injecting-services-into-components',
    moduleNumber: 7,
    lessonNumberInModule: 3,
    title: {
      en: '7.3 Injecting Services via Constructor & inject()',
      km: '7.3 ការ Inject Service តាម Constructor & inject()'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Angular provides two clean mechanisms to inject a service into a component: 1) Constructor Parameter Injection (`constructor(private taskService: TaskService) {}`) or 2) Modern `inject()` function (`private taskService = inject(TaskService)`).',
      km: 'Angular ផ្តល់ ២ វិធីសាស្ត្រក្នុងការ Inject Service ចូល Component ៖ ១) Constructor Injection (`constructor(private taskService: TaskService) {}`) ឬ ២) របៀបថ្មីប្រើ `inject()` (`private taskService = inject(TaskService)`)។'
    },
    tutorial: {
      en: 'Constructor vs inject():\n\n1. Constructor Injection:\n`constructor(private taskSvc: TaskService) {}` \n\n2. Modern inject() function:\n`private taskSvc = inject(TaskService);`',
      km: 'Constructor vs inject() ៖\n\n១. Constructor Injection ៖\n`constructor(private taskSvc: TaskService) {}` \n\n២. របៀបថ្មី inject() ៖\n`private taskSvc = inject(TaskService);`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .highlight { color: #38bdf8; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Service Injection Syntax</h3>
  <pre style="background:#0f172a; padding:14px; border-radius:8px; border:1px solid #1e293b;">
@Component({ selector: 'app-task-list', ... })
export class TaskListComponent {
  <span class="highlight">// Modern inject() API in Angular 14+</span>
  private taskSvc = inject(TaskService);
  tasks = this.taskSvc.getTasks();
}
  </pre>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Automatic Dependency Supply', km: 'ការផ្គត់ផ្គង់ Service ស្វ័យប្រវត្តិ' },
      description: {
        en: 'Angular automatically creates and passes the required service instance into components without manual `new TaskService()` instantiation.',
        km: 'Angular បង្កើត និងបញ្ជូន Service Instance ចូល Component ស្វ័យប្រវត្តិ ដោយមិនបាច់សរសេរ `new Service()` ដោយដៃឡើយ។'
      }
    },
    practiceExercise: {
      question: { en: 'Write modern Angular `inject()` syntax to assign `UserService` to property `userSvc`.', km: 'សរសេរ `inject()` syntax ដើម្បី Inject `UserService` ទៅកាន់ `userSvc`។' },
      solution: 'private userSvc = inject(UserService);'
    },
    quizQuestions: [
      {
        id: 'q-ng-7-3',
        question: { en: 'Do you need to manually call `new MyService()` when using Angular Dependency Injection?', km: 'តើអ្នកត្រូវការសរសេរ `new MyService()` ដោយដៃដែរឬទេ ពេលប្រើ Angular DI?' },
        options: [
          { id: 'a', text: { en: 'No, Angular DI framework handles instantiation automatically', km: 'ទេ, Angular DI បង្កើត Instance ឲ្យស្វ័យប្រវត្តិ' }, isCorrect: true },
          { id: 'b', text: { en: 'Yes, mandatory in every component constructor', km: 'បាទ/ចាស, ត្រូវសរសេរ new រាល់ដង' }, isCorrect: false }
        ],
        explanation: { en: 'Angular DI automatically handles dependency instantiation.', km: 'Angular DI គ្រប់គ្រងការបង្កើត Instance ដោយស្វ័យប្រវត្តិ។' }
      }
    ]
  },
  {
    id: 'ng-hub-7-4',
    slug: 'providers-and-injector-scopes',
    moduleNumber: 7,
    lessonNumberInModule: 4,
    title: {
      en: '7.4 Understanding Providers & Injector Scope',
      km: '7.4 យល់ដឹងអំពី Providers & Scope នៃ Injector'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Services can be scoped globally at Root level, or scoped locally to a specific component hierarchy using the `providers: [MyService]` array in `@Component`. Component-level providers create a fresh service instance per component.',
      km: 'Service អាចកម្រិត Scope ទូទាំង App (Root level) ឬកម្រិត Scope តែក្នុង Component មួយៗតាមរយៈ `providers: [MyService]` ក្នុង `@Component`។ Component-level provider បង្កើត Instance ថ្មីដាច់ដោយឡែកសម្រាប់ Component នោះ។'
    },
    tutorial: {
      en: 'Component Scope Example:\n```ts\n@Component({\n  selector: "app-isolated-editor",\n  providers: [EditorStateService] // Unique instance per editor!\n})\nexport class IsolatedEditorComponent {}\n```',
      km: 'Component Scope Example ៖\n```ts\n@Component({\n  selector: "app-isolated-editor",\n  providers: [EditorStateService] // Instance ថ្មីដាច់ដោយឡែក!\n})\nexport class IsolatedEditorComponent {}\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .box { background: #1e293b; border: 1px dashed #a855f7; padding: 12px; border-radius: 8px; margin-bottom: 8px; }
  </style>
</head>
<body>
  <h3>Hierarchical Injector Scopes</h3>
  <div class="box">🌐 Root Injector (Singleton AuthService)</div>
  <div class="box" style="margin-left: 20px;">📦 Component Injector (Fresh Local FormStateService)</div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Isolated Widget State Instances', km: 'ការបំបែក Instance សម្រាប់ Widget នីមួយៗ' },
      description: {
        en: 'Multiple instances of a complex chart editor widget on the same page each hold their own unpolluted state using component-level providers.',
        km: 'Chart Editor Widget ជាច្រើនលើទំព័រតែមួយ អាចមាន State ដាច់ដោយឡែកពីគ្នាដោយប្រើ Component-level provider។'
      }
    },
    practiceExercise: {
      question: { en: 'Where do you configure component-scoped service providers in `@Component` metadata?', km: 'តើគេកំណត់ Component-scoped service ក្នុង metadata មួយណា?' },
      solution: 'providers: [MyService]'
    },
    quizQuestions: [
      {
        id: 'q-ng-7-4',
        question: { en: 'What happens when a service is registered in `@Component({ providers: [MyService] })`?', km: 'តើមានអ្វីកើតឡើងពេលចុះឈ្មោះ Service ក្នុង `providers` របស់ `@Component`?' },
        options: [
          { id: 'a', text: { en: 'A new separate instance of MyService is created for that component and its children', km: 'បង្កើត Instance ថ្មីដាច់ដោយឡែកសម្រាប់តែ Component នោះ' }, isCorrect: true },
          { id: 'b', text: { en: 'It overwrites the global root singleton for all app users', km: 'វាលុប Root Singleton ចោល' }, isCorrect: false }
        ],
        explanation: { en: 'Component providers create a local scoped service instance.', km: 'Component provider បង្កើត Instance ដាច់ដោយឡែក។' }
      }
    ]
  },

  // Module 8 — HTTP & Working with APIs
  {
    id: 'ng-hub-8-1',
    slug: 'httpclient-setup',
    moduleNumber: 8,
    lessonNumberInModule: 1,
    title: {
      en: '8.1 HttpClient & Setup (provideHttpClient)',
      km: '8.1 ការរៀបចំ HttpClient & (provideHttpClient)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Angular provides `HttpClient` for communicating with REST API backend services over HTTP protocol. In modern standalone Angular, configure HttpClient by adding `provideHttpClient()` to app config providers.',
      km: 'Angular ផ្តល់ប្រព័ន្ធ `HttpClient` សម្រាប់ទំនាក់ទំនង និងទាញយក Data ពី REST API Backend។ ក្នុង Angular Modern Standalone ត្រូវបំពាក់វាដោយបន្ថែម `provideHttpClient()` ក្នុង Application Configuration។'
    },
    tutorial: {
      en: 'Setup in `app.config.ts`:\n```ts\nexport const appConfig: ApplicationConfig = {\n  providers: [provideHttpClient()]\n};\n```',
      km: 'ការរៀបចំក្នុង `app.config.ts` ៖\n```ts\nexport const appConfig: ApplicationConfig = {\n  providers: [provideHttpClient()]\n};\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .cfg { background: #0f172a; border: 1px solid #1e293b; padding: 14px; border-radius: 8px; color: #38bdf8; }
  </style>
</head>
<body>
  <h3>HttpClient Standalone Configuration</h3>
  <div class="cfg">
    bootstrapApplication(AppComponent, {<br>
    &nbsp;&nbsp;providers: [<span style="color:#4ade80">provideHttpClient()</span>]<br>
    });
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Backend REST API Foundation', km: 'គ្រឹះនៃការភ្ជាប់ទៅកាន់ Backend REST API' },
      description: {
        en: 'Enables your Angular frontend application to communicate securely with Node.js, Spring Boot, or Firebase backends.',
        km: 'ជួយឲ្យ Angular Frontend អាចផ្ញើ និងទទួល Data ជាមួយ Node.js, Spring Boot, ឬ Firebase Backend។'
      }
    },
    practiceExercise: {
      question: { en: 'What helper function registers HttpClient in modern Angular standalone app configuration?', km: 'តើ Function មួយណាដែលចុះឈ្មោះ HttpClient ក្នុង Angular Standalone Config?' },
      solution: 'provideHttpClient()'
    },
    quizQuestions: [
      {
        id: 'q-ng-8-1',
        question: { en: 'Which official Angular module/provider handles HTTP requests?', km: 'តើ Module/Provider ផ្លូវការមួយណា របស់ Angular សម្រាប់ធ្វើការ HTTP Requests?' },
        options: [
          { id: 'a', text: { en: 'provideHttpClient() / HttpClient', km: 'provideHttpClient() / HttpClient' }, isCorrect: true },
          { id: 'b', text: { en: 'provideFetchApi()', km: 'provideFetchApi()' }, isCorrect: false }
        ],
        explanation: { en: 'Angular uses `HttpClient` for HTTP requests.', km: 'Angular ប្រើប្រាស់ `HttpClient` សម្រាប់ HTTP Requests។' }
      }
    ]
  },
  {
    id: 'ng-hub-8-2',
    slug: 'making-get-and-post-requests',
    moduleNumber: 8,
    lessonNumberInModule: 2,
    title: {
      en: '8.2 Making GET & POST Requests with HttpClient',
      km: '8.2 ការធ្វើ GET & POST Requests ជាមួយ HttpClient'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: '`HttpClient.get<T>(url)` and `HttpClient.post<T>(url, body)` return RxJS Observables. Subscribing to an HTTP request executes the asynchronous call and emits the API JSON response payload.',
      km: '`HttpClient.get<T>(url)` និង `HttpClient.post<T>(url, body)` ផ្តល់ត្រឡប់មកវិញនូវ RxJS Observable។ ការ Subscribe លើ HTTP Observable នឹងបញ្ជូន Request ទៅ Server និងទទួលយក JSON Payload មកវិញ។'
    },
    tutorial: {
      en: 'Service Methods Example:\n```ts\nfetchTasks(): Observable<Task[]> {\n  return this.http.get<Task[]>("https://api.example.com/tasks");\n}\n\ncreateTask(newTask: Task): Observable<Task> {\n  return this.http.post<Task>("https://api.example.com/tasks", newTask);\n}\n```',
      km: 'ឧទាហរណ៍ Service Methods ៖\n```ts\nfetchTasks(): Observable<Task[]> {\n  return this.http.get<Task[]>("https://api.example.com/tasks");\n}\n\ncreateTask(newTask: Task): Observable<Task> {\n  return this.http.post<Task>("https://api.example.com/tasks", newTask);\n}\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .res { background: #020617; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; color: #4ade80; }
  </style>
</head>
<body>
  <h3>HttpClient GET Request Response</h3>
  <div class="res">
    GET /api/tasks 200 OK<br>
    JSON: [{ "id": 1, "title": "Learn Angular HttpClient" }]
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Fetching Database Records', km: 'ការទាញយក Records ពី Database' },
      description: {
        en: 'Fetches paginated user lists or submits new customer registration forms to backend database endpoints.',
        km: 'ទាញយកបញ្ជីសិស្សតាមទំព័រ (Paginated list) ឬ Submit Form ចុះឈ្មោះសិស្សថ្មីទៅកាន់ Database Backend។'
      }
    },
    practiceExercise: {
      question: { en: 'What method on `HttpClient` sends new data payloads to a server endpoint?', km: 'តើ Method អ្វី លើ `HttpClient` សម្រាប់ផ្ញើ Data Payload ថ្មីទៅកាន់ Server?' },
      solution: 'http.post(url, body)'
    },
    quizQuestions: [
      {
        id: 'q-ng-8-2',
        question: { en: 'What type of object is returned by Angular `HttpClient.get()` method?', km: 'តើ Object ប្រភេទអ្វីដែលបានមកពី `HttpClient.get()`?' },
        options: [
          { id: 'a', text: { en: 'An RxJS Observable', km: 'RxJS Observable' }, isCorrect: true },
          { id: 'b', text: { en: 'A standard synchronous Array', km: 'Array ធម្មតា' }, isCorrect: false }
        ],
        explanation: { en: '`HttpClient` methods return RxJS Observables.', km: '`HttpClient` ផ្តល់ត្រឡប់មកវិញនូវ RxJS Observable។' }
      }
    ]
  },
  {
    id: 'ng-hub-8-3',
    slug: 'handling-responses-and-errors',
    moduleNumber: 8,
    lessonNumberInModule: 3,
    title: {
      en: '8.3 Handling HTTP Responses & Errors (catchError)',
      km: '8.3 ការគ្រប់គ្រង Response & Error ជាមួយ catchError'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Network failures and 4xx/5xx HTTP errors must be caught gracefully using the RxJS `catchError` operator and `HttpErrorResponse` class to prevent app crashes and inform the user cleanly.',
      km: 'បញ្ហាដាច់ Network ឬ HTTP Error 4xx/5xx ត្រូវតែគ្រប់គ្រងឲ្យបានល្អដោយប្រើប្រាស់ RxJS `catchError` operator និង `HttpErrorResponse` class ដើម្បីការពារ App កុំឲ្យ Crash និងបង្ហាញសារប្រាប់ User ឲ្យបានច្បាស់លាស់។'
    },
    tutorial: {
      en: 'Error Handling Pipeline:\n```ts\nthis.http.get<Task[]>(this.apiUrl).pipe(\n  catchError((error: HttpErrorResponse) => {\n    console.error("API Failure:", error.message);\n    return throwError(() => new Error("Failed to load tasks"));\n  })\n);\n```',
      km: 'Error Handling Pipeline ៖\n```ts\nthis.http.get<Task[]>(this.apiUrl).pipe(\n  catchError((error: HttpErrorResponse) => {\n    console.error("API Failure:", error.message);\n    return throwError(() => new Error("Failed to load tasks"));\n  })\n);\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .err-box { background: #450a0a; color: #fca5a5; border: 1px solid #991b1b; padding: 12px; border-radius: 8px; }
  </style>
</head>
<body>
  <h3>Graceful HTTP Error Fallback</h3>
  <div class="err-box">
    ⚠️ Unable to load tasks. Please check your internet connection or try again later.
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Resilient User Interfaces', km: 'UI មានភាពធន់ការពារការ Crash' },
      description: {
        en: 'Displays friendly error banners or retry buttons when server timeouts happen instead of blank white screens.',
        km: 'បង្ហាញ Error Banner ឬ Button Retry ស្អាតបាតពេល Server Timeout ជំនួសឲ្យការបង្ហាញអេក្រង់សស្កឹម។'
      }
    },
    practiceExercise: {
      question: { en: 'Which RxJS operator is used inside `.pipe()` to handle HTTP network errors?', km: 'តើ RxJS operator មួយណាដែលប្រើក្នុង `.pipe()` សម្រាប់ទប់ស្កាត់ HTTP Error?' },
      solution: 'catchError'
    },
    quizQuestions: [
      {
        id: 'q-ng-8-3',
        question: { en: 'Which Angular class represents HTTP error responses in error callbacks?', km: 'តើ Class មួយណាដែលតំណាងឲ្យ HTTP Error Response ក្នុង Angular?' },
        options: [
          { id: 'a', text: { en: 'HttpErrorResponse', km: 'HttpErrorResponse' }, isCorrect: true },
          { id: 'b', text: { en: 'NetworkException', km: 'NetworkException' }, isCorrect: false }
        ],
        explanation: { en: '`HttpErrorResponse` encapsulates HTTP status code and error details.', km: '`HttpErrorResponse` ផ្ទុកព័ត៌មាន Error Status code។' }
      }
    ]
  }
];
