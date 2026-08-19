import { FrontendLesson } from '../types/frontendClass';

export const ANGULAR_LESSONS_PART2: FrontendLesson[] = [
  // Module 4: Templates & Data Binding
  {
    id: 'ang-m4-l1',
    slug: 'interpolation-displaying-data',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: { en: '4.1 Interpolation ({{ expression }})', km: '៤.១ Interpolation ({{ expression }})' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Interpolation uses double curly braces `{{ expression }}` to embed dynamic TypeScript values, calculations, or method returns directly into HTML templates.',
      km: 'Interpolation ប្រើសញ្ញាវង់ក្រចកពីរជាន់ `{{ expression }}` សម្រាប់បង្ហាញតម្លៃអថេរ ការគណនា ឬលទ្ធផលពី Method ក្នុង TypeScript ចូលទៅ HTML Template។'
    },
    tutorial: {
      en: 'In component TS: `userName = "Sophea";`. In HTML: `<h1>Welcome, {{ userName }}!</h1>`. Automatically re-renders whenever `userName` updates.',
      km: 'ក្នុង Component TS: `userName = "Sophea";`។ ក្នុង HTML: `<h1>Welcome, {{ userName }}!</h1>`។ ទំព័រនឹង Render ស្វ័យប្រវត្តិនៅពេល `userName` ផ្លាស់ប្តូរ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 p-3 rounded-xl">
        <span class="text-pink-400 font-bold block mb-2">TypeScript Class State</span>
        <pre class="text-slate-300"><code>export class UserComponent {
  title = 'Student Dashboard';
  score = 95;
  getGreeting() {
    return 'Welcome Back!';
  }
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 p-3 rounded-xl">
        <span class="text-sky-400 font-bold block mb-2">HTML Interpolation</span>
        <pre class="text-slate-300"><code>&lt;h2&gt;{{ title }}&lt;/h2&gt;
&lt;p&gt;Score: {{ score }}%&lt;/p&gt;
&lt;span&gt;{{ getGreeting() }}&lt;/span&gt;</code></pre>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Dynamic User Dashboards', km: 'Dashboard បង្ហាញព័ត៌មានអ្នកប្រើប្រាស់' },
      description: {
        en: 'Interpolation displays dynamic user profile names, account balances, and status messages live on web pages.',
        km: 'Interpolation ប្រើសម្រាប់បង្ហាញឈ្មោះអ្នកប្រើប្រាស់ សល់ប្រាក់ក្នុងគណនី និងសារផ្សេងៗយ៉ាងរហ័ស។'
      }
    },
    practiceExercise: {
      question: { en: 'What syntax performs string interpolation in Angular HTML templates?', km: 'តើ Syntax អ្វីប្រើសម្រាប់ Interpolation ក្នុង Angular HTML Template?' },
      solution: '{{ expression }}'
    },
    quizQuestions: [
      {
        id: 'q-ang-m4-1',
        question: { en: 'Which brackets are used for Angular template interpolation?', km: 'តើសញ្ញាវង់ក្រចកណាប្រើសម្រាប់ Interpolation ក្នុង Angular?' },
        options: [
          { id: '1', text: { en: '{{ }} double curly braces', km: '{{ }} សញ្ញាវង់ក្រចកពីរជាន់' }, isCorrect: true },
          { id: '2', text: { en: '[[ ]] double square brackets', km: '[[ ]] សញ្ញាវង់ក្រចកជ្រុង' }, isCorrect: false }
        ],
        explanation: {
          en: 'Double curly braces `{{ }}` denote interpolation expressions.',
          km: 'សញ្ញាវង់ក្រចក `{{ }}` សម្រាប់បង្ហាញ Interpolation Expression។'
        }
      }
    ]
  },
  {
    id: 'ang-m4-l2',
    slug: 'property-binding',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: { en: '4.2 Property Binding ([property]="value")', km: '៤.២ Property Binding ([property]="value")' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Property Binding passes dynamic component data to element properties or child components using square brackets `[target]="source"`. Common examples include `[src]="imageUrl"` or `[disabled]="isDisabled"`.',
      km: 'Property Binding បញ្ជូនទិន្នន័យពី Component ទៅកាន់ Property របស់ HTML Element តាមរយៈសញ្ញាវង់ក្រចកជ្រុង `[target]="source"`។ ឧទាហរណ៍៖ `[src]="imageUrl"` ឬ `[disabled]="isDisabled"`។'
    },
    tutorial: {
      en: 'Syntax: `<button [disabled]="isSubmitting">Submit</button>`. When `isSubmitting` is true, Angular binds the DOM disabled state instantly.',
      km: 'ទម្រង់សរសេរ៖ `<button [disabled]="isSubmitting">Submit</button>`។ ពេល `isSubmitting` ស្មើ true Angular នឹងកំណត់ Disabled លើ Button ភ្លាមៗ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 p-3 rounded-xl">
        <span class="text-pink-400 font-bold block mb-2">TypeScript State</span>
        <pre class="text-slate-300"><code>export class FormComponent {
  avatarUrl = 'https://picsum.photos/80';
  isDisabled = true;
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 p-3 rounded-xl">
        <span class="text-sky-400 font-bold block mb-2">HTML Property Binding</span>
        <pre class="text-slate-300"><code>&lt;img [src]="avatarUrl" alt="Avatar" /&gt;

&lt;button [disabled]="isDisabled"&gt;
  Submit Form
&lt;/button&gt;</code></pre>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Disabling Buttons & Binding Images', km: 'ការកំណត់ Disabled និងរូបភាព' },
      description: {
        en: 'Property binding prevents double form submission by disabling submit buttons while async API calls are pending.',
        km: 'Property binding ការពារកុំឱ្យ User ចុច Submit ពីរដង ដោយកំណត់ Disabled ពេលកំពុងផ្ញើ API។'
      }
    },
    practiceExercise: {
      question: { en: 'Write a property binding that binds class variable "userPhoto" to image src attribute.', km: 'សរសេរ Property Binding ដែលភ្ជាប់ "userPhoto" ទៅកាន់ Image src attribute។' },
      solution: '[src]="userPhoto"'
    },
    quizQuestions: [
      {
        id: 'q-ang-m4-2',
        question: { en: 'What brackets denote Property Binding in Angular?', km: 'តើសញ្ញាអ្វីសម្គាល់ Property Binding ក្នុង Angular?' },
        options: [
          { id: '1', text: { en: '[ ] square brackets', km: '[ ] សញ្ញាវង់ក្រចកជ្រុង' }, isCorrect: true },
          { id: '2', text: { en: '( ) parenthesis', km: '( ) សញ្ញាវង់ក្រចកទោល' }, isCorrect: false }
        ],
        explanation: {
          en: 'Square brackets `[property]="expression"` denote property binding.',
          km: 'សញ្ញាវង់ក្រចកជ្រុង `[property]="expression"` សម្គាល់ Property Binding។'
        }
      }
    ]
  },
  {
    id: 'ang-m4-l3',
    slug: 'event-binding',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: { en: '4.3 Event Binding ((event)="handler()")', km: '៤.៣ Event Binding ((event)="handler()")' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Event Binding listens for DOM events like clicks, keystrokes, or mouse hovers using parentheses `(event)="method()"`. It routes user actions to TypeScript class handler methods.',
      km: 'Event Binding ចាប់យក Event ពី DOM ដូចជា Clicks, Keyboard ឬ Mouse Hover ដោយប្រើប្រាស់សញ្ញាវង់ក្រចក `(event)="method()"` ដើម្បីហៅ Method ក្នុង TypeScript Class។'
    },
    tutorial: {
      en: 'Syntax: `<button (click)="onSave()">Save</button>`. Pass event payload using `$event`: `<input (keyup)="onKeyUp($event)" />`.',
      km: 'ទម្រង់សរសេរ៖ `<button (click)="onSave()">Save</button>`។ បញ្ជូន Payload តាម `$event`៖ `<input (keyup)="onKeyUp($event)" />`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3 font-mono text-xs">
      <div class="text-emerald-400 font-bold">Counter Component Example</div>
      <pre class="text-slate-300 overflow-x-auto"><code>// TS Class
export class CounterComponent {
  count = 0;
  increment() {
    this.count++;
  }
}

<!-- HTML Template -->
&lt;div class="counter-box"&gt;
  &lt;p&gt;Count: {{ count }}&lt;/p&gt;
  &lt;button (click)="increment()"&gt;+ Increase&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Interactive User Actions', km: 'អន្តរកម្មលើ User Actions' },
      description: {
        en: 'Event binding powers button clicks, modal toggles, dropdowns, and keyboard shortcuts across Angular applications.',
        km: 'Event binding គ្រប់គ្រងការចុចប៊ូតុង បើក Modal បើក Dropdown ក្នុង Angular App។'
      }
    },
    practiceExercise: {
      question: { en: 'Write an event binding syntax to handle click event by calling method "deleteItem()".', km: 'សរសេរ Event Binding សម្រាប់ចាប់ Click event ដោយហៅ "deleteItem()"។' },
      solution: '(click)="deleteItem()"'
    },
    quizQuestions: [
      {
        id: 'q-ang-m4-3',
        question: { en: 'What symbol surrounds the event name in Angular Event Binding?', km: 'តើសញ្ញាអ្វីព័ទ្ធជុំវិញឈ្មោះ Event ក្នុង Event Binding?' },
        options: [
          { id: '1', text: { en: '( ) parenthesis', km: '( ) សញ្ញាវង់ក្រចក' }, isCorrect: true },
          { id: '2', text: { en: '{{ }} double curly braces', km: '{{ }} សញ្ញាវង់ក្រចកពីរជាន់' }, isCorrect: false }
        ],
        explanation: {
          en: 'Parentheses `(event)="handler()"` denote event binding.',
          km: 'សញ្ញាវង់ក្រចក `(event)="handler()"` សម្គាល់ Event Binding។'
        }
      }
    ]
  },
  {
    id: 'ang-m4-l4',
    slug: 'two-way-data-binding-ngmodel',
    moduleNumber: 4,
    lessonNumberInModule: 4,
    title: { en: '4.4 Two-Way Data Binding ([(ngModel)])', km: '៤.៤ Two-Way Data Binding ([(ngModel)])' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Two-Way Data Binding syncs component state and input controls simultaneously using "banana-in-a-box" syntax `[(ngModel)]="property"`. Typing in the input updates the variable instantly, and updating the variable updates the input.',
      km: 'Two-Way Data Binding ធ្វើសមតុល្យទិន្នន័យ (Sync) រវាង Component State និង Input Control ក្នុងពេលតែមួយ ដោយប្រើ Syntax "Banana-in-a-box" `[(ngModel)]="property"`។ ការវាយអក្សរក្នុង Input នឹងអាប់ដេតអថេរភ្លាមៗ ហើយបើអថេរដូរក៏ Input ដូរតាមដែរ។'
    },
    tutorial: {
      en: 'Requires importing `FormsModule` from `@angular/forms`. Usage: `<input [(ngModel)]="username" placeholder="Enter name" /> <p>Hello {{ username }}!</p>`.',
      km: 'ទាមទារឱ្យ Import `FormsModule` ពី `@angular/forms`។ របៀបប្រើ៖ `<input [(ngModel)]="username" /> <p>Hello {{ username }}!</p>`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3 font-mono text-xs">
      <div class="text-amber-400 font-bold">Two-Way Binding Syntax</div>
      <pre class="text-slate-300 overflow-x-auto"><code>import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  template: \`
    &lt;input [(ngModel)]="searchQuery" placeholder="Search..." /&gt;
    &lt;p&gt;Searching for: {{ searchQuery }}&lt;/p&gt;
  \`
})
export class SearchComponent {
  searchQuery = 'Angular';
}</code></pre>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Real-time Live Inputs', km: 'ការវាយអក្សរផ្លាស់ប្តូរភ្លាមៗ' },
      description: {
        en: 'Ideal for search filters, live settings previews, and quick user input forms where immediate feedback is needed.',
        km: 'ល្អបំផុតសម្រាប់ Search Filters, Live Preview និងទម្រង់រើស Settings ផ្សេងៗ។'
      }
    },
    practiceExercise: {
      question: { en: 'What module must be imported in Angular to enable [(ngModel)]?', km: 'តើ Module មួយណាត្រូវ Import ដើម្បីប្រើ [(ngModel)]?' },
      solution: 'FormsModule'
    },
    quizQuestions: [
      {
        id: 'q-ang-m4-4',
        question: { en: 'Why is [(ngModel)] syntax colloquially called "banana in a box"?', km: 'ហេតុអ្វីបានជា [(ngModel)] ត្រូវគេហៅថារូបរាង "Banana in a Box"?' },
        options: [
          { id: '1', text: { en: 'Because parentheses () look like a banana inside square brackets []', km: 'ព្រោះ សញ្ញាវង់ក្រចក () មើលទៅដូចផ្លែចេក នៅក្នុងប្រអប់ []' }, isCorrect: true },
          { id: '2', text: { en: 'Because it was invented in a banana plantation', km: 'ព្រោះ វាត្រូវបានបង្កើតឡើងក្នុងចំការចេក' }, isCorrect: false }
        ],
        explanation: {
          en: 'The combination `[()]` places parentheses inside square brackets.',
          km: 'សញ្ញា `[()]` មានសញ្ញាវង់ក្រចកទោល `()` នៅក្នុងសញ្ញាវង់ក្រចកជ្រុង `[]`។'
        }
      }
    ]
  },

  // Module 5: Directives
  {
    id: 'ang-m5-l1',
    slug: 'structural-directive-ngif',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: { en: '5.1 Structural Directive: *ngIf', km: '៥.១ Structural Directive: *ngIf' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Structural directives alter DOM layout by adding or removing elements. The `*ngIf` directive conditionally renders HTML DOM nodes based on a boolean condition evaluation.',
      km: 'Structural directives កែប្រែទម្រង់ DOM Layout ដោយបន្ថែម ឬលុប Element ចេញពី DOM។ Directive `*ngIf` បង្ហាញ ឬលាក់ HTML Element អាស្រ័យលើលក្ខខណ្ឌ Boolean។'
    },
    tutorial: {
      en: 'Syntax: `<p *ngIf="isLoggedIn">Welcome Back, User!</p>`. You can also use else templates: `<p *ngIf="isLoggedIn; else guestTpl"></p>`.',
      km: 'ទម្រង់សរសេរ៖ `<p *ngIf="isLoggedIn">Welcome Back, User!</p>`។ អាចប្រើជាមួយ else template ផងដែរ៖ `<p *ngIf="isLoggedIn; else guestTpl"></p>`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl font-mono text-xs space-y-3">
      <div class="text-pink-400 font-bold">*ngIf Conditional Template</div>
      <pre class="text-slate-300 overflow-x-auto"><code>&lt;div *ngIf="isLoading; else content"&gt;
  &lt;p class="text-amber-400"&gt;⏳ Loading data...&lt;/p&gt;
&lt;/div&gt;

&lt;ng-template #content&gt;
  &lt;div class="bg-slate-800 p-3 rounded"&gt;
    &lt;h4 class="font-bold text-emerald-400"&gt;Data Loaded Successfully!&lt;/h4&gt;
  &lt;/div&gt;
&lt;/ng-template&gt;</code></pre>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Loading Spinners & Permission Checks', km: 'ការបង្ហាញ Loading និងពិនិត្យសិទ្ធិ' },
      description: {
        en: 'Use `*ngIf` to hide administrative action buttons if the logged-in user lacks administrator credentials.',
        km: 'ប្រើ `*ngIf` ដើម្បីលាក់ប៊ូតុងគ្រប់គ្រង ប្រសិនបើ User គ្មានសិទ្ធិជា Administrator។'
      }
    },
    practiceExercise: {
      question: { en: 'What asterisk symbol prefix denotes a structural directive in Angular templates?', km: 'តើសញ្ញាអ្វីដែលត្រូវដាក់នៅខាងមុខ Structural directive ក្នុង Angular?' },
      solution: '* (Asterisk)'
    },
    quizQuestions: [
      {
        id: 'q-ang-m5-1',
        question: { en: 'What happens to an HTML element when *ngIf evaluates to false?', km: 'តើមានអ្វីកើតឡើងចំពោះ HTML element នៅពេល *ngIf ស្មើ false?' },
        options: [
          { id: '1', text: { en: 'It is completely removed from the DOM tree', km: 'វាត្រូវបានលុបចេញពី DOM Tree ទាំងស្រុង' }, isCorrect: true },
          { id: '2', text: { en: 'It is hidden with CSS display:none', km: 'វាត្រូវបានលាក់ត្រឹម CSS display:none' }, isCorrect: false }
        ],
        explanation: {
          en: '`*ngIf` detaches and destroys elements from the DOM, saving memory.',
          km: '`*ngIf` លុប Element ចេញពី DOM ទាំងស្រុង ជួយសំចៃ Memory។'
        }
      }
    ]
  },
  {
    id: 'ang-m5-l2',
    slug: 'structural-directive-ngfor',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: { en: '5.2 Structural Directive: *ngFor', km: '៥.២ Structural Directive: *ngFor' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: '`*ngFor` loops over an array of items and renders a repeated DOM block for each item. It provides helper variables like `index`, `first`, and `last`.',
      km: '`*ngFor` រត់ Loop លើ Array នៃធាតុ ហើយបង្ហាញ HTML Block ឡើងវិញសម្រាប់ធាតុនីមួយៗ។ វាផ្តល់អថេរជំនួយដូចជា `index`, `first`, និង `last`។'
    },
    tutorial: {
      en: 'Syntax: `<li *ngFor="let item of items; let i = index">{{ i + 1 }}. {{ item.name }}</li>`. Use `trackBy` function for performance optimization in large lists.',
      km: 'ទម្រង់សរសេរ៖ `<li *ngFor="let item of items; let i = index">{{ i + 1 }}. {{ item.name }}</li>`។ ប្រើ `trackBy` function ដើម្បីបង្កើន ល្បឿន ក្នុង បញ្ជី ធំៗ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl font-mono text-xs space-y-3">
      <div class="text-sky-400 font-bold">*ngFor Repeater Loop</div>
      <pre class="text-slate-300 overflow-x-auto"><code>tasks = [
  { id: 1, title: 'Learn Angular Basics' },
  { id: 2, title: 'Master Directives' },
  { id: 3, title: 'Build Capstone App' }
];

<!-- HTML Template -->
&lt;ul class="space-y-2"&gt;
  &lt;li *ngFor="let task of tasks; let i = index" class="p-2 bg-slate-800 rounded"&gt;
    #{{ i + 1 }} - {{ task.title }}
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Rendering Dynamic Lists & Cards', km: 'ការបង្ហាញបញ្ជី ឬ Card ឌីណាមិក' },
      description: {
        en: 'Rendering arrays fetched from database APIs (e.g., e-commerce products, social media feeds, or notification lists).',
        km: 'បង្ហាញបញ្ជីទិន្នន័យដែលទាញបានពី Database API ដូចជា ទំនិញ, Social feeds ឬ Notifications។'
      }
    },
    practiceExercise: {
      question: { en: 'Write the *ngFor directive string to iterate through array "users" assigning item to "u".', km: 'សរសេរ *ngFor directive សម្រាប់រត់លើ array "users" ដោយដាក់អថេរ "u"។' },
      solution: '*ngFor="let u of users"'
    },
    quizQuestions: [
      {
        id: 'q-ang-m5-2',
        question: { en: 'Which local variable index export is available inside *ngFor loop expressions?', km: 'តើអថេរជំនួយ Index មួយណាដែលមានក្នុង *ngFor loop?' },
        options: [
          { id: '1', text: { en: 'let i = index', km: 'let i = index' }, isCorrect: true },
          { id: '2', text: { en: 'let i = count', km: 'let i = count' }, isCorrect: false }
        ],
        explanation: {
          en: '`let i = index` exports zero-based position index.',
          km: '`let i = index` បញ្ជូនតម្លៃ Index ចាប់ផ្តើមពី 0។'
        }
      }
    ]
  },
  {
    id: 'ang-m5-l3',
    slug: 'attribute-directives-ngclass-ngstyle',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: { en: '5.3 Attribute Directives: ngClass & ngStyle', km: '៥.៣ Attribute Directives: ngClass & ngStyle' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Attribute directives modify element appearance or behavior without changing DOM structure. `[ngClass]` toggles CSS classes dynamically, and `[ngStyle]` applies dynamic inline CSS styles.',
      km: 'Attribute directives កែប្រែរៀបរយ ឬឥរិយាបថរបស់ Element ដោយមិនលុប DOM Structure ឡើយ។ `[ngClass]` បិទ/បើក CSS Classes ហើយ `[ngStyle]` កំណត់ Inline CSS Styles ឌីណាមិក។'
    },
    tutorial: {
      en: 'Examples: `<div [ngClass]="{ \'active-card\': isActive, \'error-card\': hasError }"></div>`. `<div [ngStyle]="{ \'background-color\': isThemeDark ? \'#0f172a\' : \'#ffffff\' }"></div>`.',
      km: 'ឧទាហរណ៍៖ `<div [ngClass]="{ \'active-card\': isActive, \'error-card\': hasError }"></div>`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl font-mono text-xs space-y-3">
      <div class="text-emerald-400 font-bold">Dynamic Styling with [ngClass]</div>
      <pre class="text-slate-300 overflow-x-auto"><code>isSuccess = true;
statusColor = '#10b981';

<!-- Template Usage -->
&lt;div [ngClass]="{ 'bg-emerald-950 border-emerald-500': isSuccess }"
     [ngStyle]="{ 'color': statusColor }"
     class="p-3 border rounded-lg"&gt;
  Status: Active & Verified
&lt;/div&gt;</code></pre>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Conditional Status Badges', km: 'ការបង្ហាញ Badge តាមស្ថានភាព' },
      description: {
        en: 'Dynamic classes apply green background badges for "Approved" orders and red badges for "Cancelled" orders automatically.',
        km: 'កំណត់ Badge ពណ៌បៃតងសម្រាប់ Order "Approved" និងពណ៌ក្រហមសម្រាប់ Order "Cancelled" ដោយស្វ័យប្រវត្តិ។'
      }
    },
    practiceExercise: {
      question: { en: 'Write ngClass syntax to apply CSS class "active" when boolean variable isActive is true.', km: 'សរសេរ ngClass syntax សម្រាប់បិទបើក class "active" តាមអថេរ boolean isActive។' },
      solution: '[ngClass]="{ \'active\': isActive }"'
    },
    quizQuestions: [
      {
        id: 'q-ang-m5-3',
        question: { en: 'What is the main difference between structural (*ngIf) and attribute ([ngClass]) directives?', km: 'តើអ្វីជាផលខុសគ្នាចម្បងរវាង Structural (*ngIf) និង Attribute ([ngClass]) directives?' },
        options: [
          { id: '1', text: { en: 'Structural directives modify DOM tree structure; Attribute directives modify appearance', km: 'Structural កែប្រែ DOM Tree; Attribute កែប្រែរូបរាង Styling' }, isCorrect: true },
          { id: '2', text: { en: 'They are identical', km: 'វា ដូចគ្នា ទាំងស្រុង' }, isCorrect: false }
        ],
        explanation: {
          en: 'Structural directives add/remove nodes; attribute directives alter existing node styles/attributes.',
          km: 'Structural បន្ថែម/លុប Node; ឯ Attribute កែប្រែ Style ឬ Attribute លើ Node ដែលមានស្រាប់។'
        }
      }
    ]
  },
  {
    id: 'ang-m5-l4',
    slug: 'writing-custom-directives-intro',
    moduleNumber: 5,
    lessonNumberInModule: 4,
    title: { en: '5.4 Introduction to Custom Directives', km: '៥.៤ ការណែនាំអំពី Custom Directives' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Custom attribute directives allow you to create reusable DOM behaviors (e.g., auto-focusing inputs, hover highlight effects, or custom tooltips) using `@Directive()` decorator and `ElementRef`.',
      km: 'Custom attribute directives អនុញ្ញាតឲ្យបង្កើត Reusable DOM Behavior (ដូចជា Auto-focus, Hover Highlight ឬ Tooltip) ដោយប្រើ `@Directive()` decorator និង `ElementRef`។'
    },
    tutorial: {
      en: 'Generate with CLI: `ng g d directives/highlight`. Use `@HostListener(\'mouseenter\')` to respond to mouse hover events on host elements.',
      km: 'បង្កើតតាម CLI: `ng g d directives/highlight`។ ប្រើ `@HostListener(\'mouseenter\')` ដើម្បីចាប់ Mouse Hover លើ Element។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl font-mono text-xs space-y-3">
      <div class="text-pink-400 font-bold">Custom Directive Snippet</div>
      <pre class="text-slate-300 overflow-x-auto"><code>@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = '#ec4899';
  }
}

<!-- Template Usage -->
&lt;p appHighlight class="p-2 border"&gt;Hover over me!&lt;/p&gt;</code></pre>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Reusability across inputs', km: 'ការយក Behavior ទៅប្រើឡើងវិញ' },
      description: {
        en: 'A custom `[appAutoFocus]` directive focuses login form input elements automatically across mobile modal dialogs.',
        km: 'Directive `[appAutoFocus]` ធ្វើឲ្យ Cursor រត់ចូល Input ដោយស្វ័យប្រវត្តិគ្រប់កន្លែង។'
      }
    },
    practiceExercise: {
      question: { en: 'What decorator defines a custom directive class in Angular?', km: 'តើ Decorator មួយណាប្រកាស Custom Directive Class ក្នុង Angular?' },
      solution: '@Directive()'
    },
    quizQuestions: [
      {
        id: 'q-ang-m5-4',
        question: { en: 'Which Angular service provides direct access to the underlying DOM node inside a custom directive?', km: 'តើ Angular Service មួយណាដែលផ្តល់ Access ទៅកាន់ DOM Node ក្នុង Custom Directive?' },
        options: [
          { id: '1', text: { en: 'ElementRef', km: 'ElementRef' }, isCorrect: true },
          { id: '2', text: { en: 'HttpHandler', km: 'HttpHandler' }, isCorrect: false }
        ],
        explanation: {
          en: '`ElementRef` grants access to `nativeElement` DOM node.',
          km: '`ElementRef` ផ្តល់សិទ្ធិ Access ទៅ `nativeElement` នៃ DOM Node។'
        }
      }
    ]
  },

  // Module 6: Component Communication
  {
    id: 'ang-m6-l1',
    slug: 'passing-data-down-with-input',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: { en: '6.1 Passing Data Down with @Input()', km: '៦.១ ការបញ្ជូនទិន្នន័យពីលើចុះក្រោមជាមួយ @Input()' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The `@Input()` decorator allows parent components to pass data downwards into child components. The child declares `@Input() user!: User;` and the parent binds `<app-child [user]="currentUser"></app-child>`.',
      km: 'Decorator `@Input()` អនុញ្ញាតឲ្យ Parent component បញ្ជូនទិន្នន័យចុះមកក្រោមទៅកាន់ Child component។ Child ប្រកាស `@Input() user!: User;` ហើយ Parent ភ្ជាប់ `<app-child [user]="currentUser"></app-child>`។'
    },
    tutorial: {
      en: 'Child TS: `@Input() cardTitle: string = "Default Title";`. Parent HTML: `<app-card [cardTitle]="\'Angular Pro\'"></app-card>`.',
      km: 'Child TS: `@Input() cardTitle: string = "Default Title";`។ Parent HTML: `<app-card [cardTitle]="\'Angular Pro\'"></app-card>`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
      <div class="bg-slate-900 border border-slate-800 p-3 rounded-xl">
        <span class="text-pink-400 font-bold block mb-2">Child Component TS</span>
        <pre class="text-slate-300"><code>export class UserCardComponent {
  @Input() name: string = '';
  @Input() role: string = '';
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 p-3 rounded-xl">
        <span class="text-sky-400 font-bold block mb-2">Parent Component HTML</span>
        <pre class="text-slate-300"><code>&lt;app-user-card
  [name]="'Borey'"
  [role]="'Designer'"&gt;
&lt;/app-user-card&gt;</code></pre>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Reusability of Card Components', km: 'ការបង្កើត Component ទទួល Data ផ្សេងៗ' },
      description: {
        en: 'A reusable Product Card component receives product price, title, and image inputs from a parent product list component.',
        km: 'Component Product Card ទទួលទិន្នន័យ តម្លៃ ឈ្មោះ និងរូបភាពពី Parent Product List។'
      }
    },
    practiceExercise: {
      question: { en: 'Which decorator receives data passed down from a parent component?', km: 'តើ Decorator មួយណាសម្រាប់ទទួលទិន្នន័យដែលផ្ញើពី Parent component?' },
      solution: '@Input()'
    },
    quizQuestions: [
      {
        id: 'q-ang-m6-1',
        question: { en: 'What direction does data flow when using @Input() decorator?', km: 'តើទិន្នន័យហូរតាមទិសដៅណាពេលប្រើ @Input() decorator?' },
        options: [
          { id: '1', text: { en: 'Parent component down to Child component', km: 'ពី Parent component ចុះមក Child component' }, isCorrect: true },
          { id: '2', text: { en: 'Child component up to Parent component', km: 'ពី Child component ឡើងទៅ Parent component' }, isCorrect: false }
        ],
        explanation: {
          en: 'Inputs pass data downwards from parent to child.',
          km: 'Inputs បញ្ជូនទិន្នន័យពីលើចុះក្រោម (Parent ទៅ Child)។'
        }
      }
    ]
  },
  {
    id: 'ang-m6-l2',
    slug: 'sending-events-up-with-output',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: { en: '6.2 Sending Events Up with @Output() & EventEmitter', km: '៦.២ ការផ្ញើ Event ឡើងទៅលើជាមួយ @Output() & EventEmitter' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Child components send notifications or payload data upwards to parent components using `@Output()` paired with an `EventEmitter`. The child calls `this.deleteEvent.emit(taskId);` and parent listens with `(deleteEvent)="handleDelete($event)"`.',
      km: 'Child components ផ្ញើសារ ឬទិន្នន័យឡើងទៅលើ Parent components ដោយប្រើ `@Output()` គួបផ្សំជាមួយ `EventEmitter`។ Child ហៅ `this.deleteEvent.emit(taskId);` ហើយ Parent ចាប់ស្តាប់តាម `(deleteEvent)="handleDelete($event)"`។'
    },
    tutorial: {
      en: 'Child TS: `@Output() itemSelected = new EventEmitter<number>(); select(id: number) { this.itemSelected.emit(id); }`. Parent HTML: `<app-item (itemSelected)="onItemChosen($event)"></app-item>`.',
      km: 'Child TS: `@Output() itemSelected = new EventEmitter<number>();`។ Child ហៅ `.emit(id)` ពេល User ចុច។ Parent ចាប់ស្តាប់តាម `(itemSelected)="onItemChosen($event)"`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl font-mono text-xs space-y-3">
      <div class="text-emerald-400 font-bold">Child EventEmitter Pattern</div>
      <pre class="text-slate-300 overflow-x-auto"><code>// Child Component
export class ItemCardComponent {
  @Input() taskId!: number;
  @Output() removeTask = new EventEmitter<number>();

  onDeleteClick() {
    this.removeTask.emit(this.taskId);
  }
}

<!-- Parent Component HTML -->
&lt;app-item-card
  [taskId]="10"
  (removeTask)="deleteTaskFromList($event)"&gt;
&lt;/app-item-card&gt;</code></pre>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Child Action Handlers', km: 'ការចាប់ Action ពី Child' },
      description: {
        en: 'When a user clicks "Remove" inside a nested list item component, an `@Output()` event notifies the parent list to remove the record.',
        km: 'ពេល User ចុច "Remove" ក្នុង Child component នោះ `@Output()` ផ្ញើសារទៅ Parent ឲ្យលុបទិន្នន័យពី List។'
      }
    },
    practiceExercise: {
      question: { en: 'Which Angular class creates custom event emitters for @Output() properties?', km: 'តើ Class អ្វីសម្រាប់បង្កើត Custom event emitter ជាមួយ @Output()?' },
      solution: 'EventEmitter'
    },
    quizQuestions: [
      {
        id: 'q-ang-m6-2',
        question: { en: 'How does a parent component receive data sent by a child EventEmitter?', km: 'តើ Parent component ទទួលទិន្នន័យដែលផ្ញើដោយ Child EventEmitter តាមរបៀបណា?' },
        options: [
          { id: '1', text: { en: 'By listening with event binding syntax (customEvent)="handler($event)"', km: 'ដោយ ចាប់ ស្តាប់ តាម (customEvent)="handler($event)"' }, isCorrect: true },
          { id: '2', text: { en: 'By reading a global window variable', km: 'ដោយ អាន Global window variable' }, isCorrect: false }
        ],
        explanation: {
          en: 'Parent listens using `(eventName)="method($event)"` where `$event` holds the emitted payload.',
          km: 'Parent ចាប់ស្តាប់តាម `(eventName)="method($event)"` ដែល `$event` ផ្ទុក Payload។'
        }
      }
    ]
  },
  {
    id: 'ang-m6-l3',
    slug: 'template-reference-vars-viewchild',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: { en: '6.3 Local Template Variables (#var) & @ViewChild', km: '៦.៣ Local Template Variables (#var) & @ViewChild' },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Template reference variables starting with `#` allow HTML templates to access DOM elements or child components directly (e.g., `<input #nameInput />`). `@ViewChild()` lets TypeScript class code query those template element references.',
      km: 'Template reference variables ដែលចាប់ផ្តើមដោយ `#` អនុញ្ញាតឲ្យ HTML Template ចូលទៅកាន់ DOM Element ផ្លូវកាត់ (ដូចជា `<input #nameInput />`)។ ឯ `@ViewChild()` អនុញ្ញាតឲ្យ TypeScript Class អាន Element Reference នោះពី HTML។'
    },
    tutorial: {
      en: 'In HTML: `<input #userEmail type="email" /> <button (click)="logValue(userEmail.value)">Log</button>`. Zero TS property boilerplate needed!',
      km: 'ក្នុង HTML: `<input #userEmail type="email" /> <button (click)="logValue(userEmail.value)">Log</button>`។ មិនបាច់ប្រកាសអថេរ TS ឡើយ!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl font-mono text-xs space-y-3">
      <div class="text-sky-400 font-bold">Template Variable #myInput</div>
      <pre class="text-slate-300 overflow-x-auto"><code><!-- HTML Template -->
&lt;div class="flex gap-2"&gt;
  &lt;input #taskInput type="text" placeholder="Add task..." class="p-2 bg-slate-800 rounded" /&gt;
  &lt;button (click)="addQuickTask(taskInput.value); taskInput.value = ''" class="px-3 bg-red-600 rounded"&gt;
    Add
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Direct DOM & Modal Interactions', km: 'អន្តរកម្មលើ Modal ឬ Form' },
      description: {
        en: 'Use `@ViewChild(\'myModal\')` to trigger modal dialog `.show()` methods or focus input fields programmatically.',
        km: 'ប្រើ `@ViewChild(\'myModal\')` ដើម្បីបើក Modal ឬ Focus លើ Input field តាមកូដ TS។'
      }
    },
    practiceExercise: {
      question: { en: 'What symbol declares a local template reference variable on an HTML element?', km: 'តើសញ្ញាអ្វីសម្រាប់ប្រកាស Local Template Variable លើ HTML Element?' },
      solution: '# (Hashtag)'
    },
    quizQuestions: [
      {
        id: 'q-ang-m6-3',
        question: { en: 'What does a template reference variable like #phoneInput refer to?', km: 'តើ Template reference variable ដូចជា #phoneInput តំណាងឲ្យអ្វី?' },
        options: [
          { id: '1', text: { en: 'The DOM element node or directive/component instance it is placed on', km: 'DOM Element Node ឬ Component Instance ដែលវាស្ថិតនៅ' }, isCorrect: true },
          { id: '2', text: { en: 'A database table column', km: 'Column ក្នុង Database' }, isCorrect: false }
        ],
        explanation: {
          en: '`#var` points to the underlying DOM node or child component.',
          km: '`#var` ចង្អុលទៅកាន់ DOM Node ឬ Child Component។'
        }
      }
    ]
  }
];
