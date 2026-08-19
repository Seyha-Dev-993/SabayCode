import { Lesson } from '../types';

export const angularLessonsPart4: Lesson[] = [
  {
    id: "ang-interceptors",
    title: {
      en: "Angular HTTP Interceptors",
      km: "ប្រព័ន្ធស្ទាក់ព័ត៌មាន Interceptors"
    },
    content: {
      en: `### Intercepting Requests and Responses
An **HTTP Interceptor** is a powerful pipeline middleware that intercepts outgoing HTTP requests and incoming responses. It is the perfect place to inject authorization headers, handle global network errors, or show global loading spinners.

### Implementing Interceptors
You declare interceptors as simple functions and register them inside your global bootstrap providers list:
\`\`\`ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'BEARER_TOKEN_SAMPLE';
  const modifiedReq = req.clone({
    headers: req.headers.set('Authorization', \`Bearer \${token}\`)
  });
  return next(modifiedReq);
};
\`\`\`

### Registering Globally
In \`appConfig.ts\`, register the interceptor using the \`withInterceptors\` modifier:
\`\`\`ts
provideHttpClient(withInterceptors([authInterceptor]))
\`\`\`

> **Note:** Always use \`req.clone()\` to modify requests. HTTP requests are immutable in Angular to prevent race conditions and ensure thread safety!`,
      km: `### ការស្ទាក់ចាប់សំណើ និងចម្លើយតប HTTP
**HTTP Interceptor** គឺជា Middleware ដ៏មានឥទ្ធិពលមួយសម្រាប់ស្ទាក់ចាប់រាល់សំណើ HTTP ដែលចេញទៅក្រៅ និងចម្លើយតបដែលត្រឡប់មកវិញ។ វាជាកន្លែងល្អបំផុតសម្រាប់ដាក់បញ្ចូលកូដសុវត្ថិភាព (Authorization headers) ឬគ្រប់គ្រងកំហុសបណ្ដាញសកល។

### ការបង្កើត Interceptor
អ្នកអាចប្រកាស Interceptor ជាអនុគមន៍សាមញ្ញ និងចុះឈ្មោះវានៅក្នុងបញ្ជី Providers សកល៖
\`\`\`ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'BEARER_TOKEN_SAMPLE';
  const modifiedReq = req.clone({
    headers: req.headers.set('Authorization', \`Bearer \${token}\`)
  });
  return next(modifiedReq);
};
\`\`\`

### ការចុះឈ្មោះប្រើប្រាស់ជាសកល
នៅក្នុង \`appConfig.ts\` ចុះឈ្មោះ Interceptor តាមរយៈ \`withInterceptors\`៖
\`\`\`ts
provideHttpClient(withInterceptors([authInterceptor]))
\`\`\`

> **សម្គាល់៖** ត្រូវតែប្រើប្រាស់ \`req.clone()\` ដើម្បីកែប្រែទម្រង់សំណើជានិច្ច។ សំណើ HTTP ក្នុង Angular មិនអាចកែប្រែផ្ទាល់លើវត្ថុដើមបានឡើយ (Immutable) ដើម្បីធានាសុវត្ថិភាពទិន្នន័យ!`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">HTTP Interceptor Sandbox</h2>
      
      <button (click)="sendRequest()" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg transition shadow-sm">
        Simulate Outgoing Request
      </button>

      <!-- Interceptor terminal logs -->
      <div class="p-3 bg-slate-900 text-emerald-400 font-mono text-xs rounded-xl space-y-1">
        <div class="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Interceptor Pipeline Console</div>
        @for (log of networkLogs; track $index) {
          <div class="leading-normal">🛠️ {{ log }}</div>
        }
      </div>
    </div>
  \`
})
export class AppComponent {
  networkLogs: string[] = [];

  sendRequest() {
    this.networkLogs.push('Intercepted outgoing request!');
    this.networkLogs.push('Injected header: Authorization: Bearer TOKEN_101');
    this.networkLogs.push('Sent safely to API endpoint.');
  }
}
`
  },
  {
    id: "ang-forms-adv",
    title: {
      en: "Angular Forms Advanced",
      km: "ទម្រង់បញ្ចូលកម្រិតខ្ពស់ Forms"
    },
    content: {
      en: `### Nested and Dynamic Forms
For complex data validation (such as invoice items lists or dynamic team profiles), Angular Reactive Forms provides deep nesting support using **FormGroup**, **FormArray**, and **FormControl**.

### Crucial Form Models
1. **FormControl:** Manages the values and validation status of a single input field.
2. **FormGroup:** Groups multiple controls or other groups together under a single object.
3. **FormArray:** A dynamic array of form controls or groups. Perfect for adding, removing, and reordering input lines dynamically on screen.

### Custom Async Validators
You can write custom functions that validate fields against backend servers (e.g., verifying if a username is already taken) using asynchronous logic returning Observables.

> **Tip:** FormArrays can be looped directly inside templates using the standard control flow, making dynamic grid layouts easy to manage.`,
      km: `### ទម្រង់បញ្ចូលស្មុគស្មាញ និងឌីណាមិក
សម្រាប់ទិន្នន័យស្មុគស្មាញ (ដូចជា បញ្ជីមុខទំនិញវិក្កយបត្រ ឬប្រវត្តិរូបសមាជិកក្រុមការងារ) Angular Reactive Forms ផ្ដល់ឧបករណ៍ជួយសម្រួលជាច្រើនរួមមាន **FormGroup**, **FormArray**, និង **FormControl**។

### គំរូទម្រង់ចាំបាច់
១. **FormControl:** គ្រប់គ្រងតម្លៃ និងស្ថានភាពផ្ទៀងផ្ទាត់នៃប្រអប់បញ្ចូលនីមួយៗ។
២. **FormGroup:** ប្រមូលផ្ដុំ FormControls ច្រើនរួមគ្នាជាវត្ថុតែមួយ។
៣. **FormArray:** ជាអារេឌីណាមិកនៃគ្រប់គ្រងបញ្ចូល។ ល្អបំផុតសម្រាប់បន្ថែម ឬលុបជួរប្រអប់បញ្ចូលភ្លាមៗនៅលើអេក្រង់។

### ឧបករណ៍ផ្ទៀងផ្ទាត់មិនស៊ីគ្នា (Async Validators)
អ្នកអាចបង្កើតអនុគមន៍ផ្ទៀងផ្ទាត់ពិសេសដែលត្រូវទាក់ទងទៅ Server (ដូចជាការត្រួតពិនិត្យថា តើឈ្មោះគណនីមានគេយកឬនៅ) ដោយប្រើប្រាស់ Async Logic។

> **គន្លឹះ៖** FormArrays អាចរត់ល្បាក់បង្ហាញក្នុងទំព័រគំរូបានយ៉ាងងាយស្រួល សម្រួលដល់ការចរចនាប្លង់តារាងឌីណាមិក។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Dynamic Team Array Builder</h2>
      
      <div class="space-y-2">
        <label class="text-[10px] font-bold text-slate-400 uppercase block">Registered Team Members</label>
        
        @for (member of members; track $index) {
          <div class="flex space-x-1.5 animate-fade-in">
            <input [(ngModel)]="members[$index]" class="flex-1 p-2 border border-slate-200 rounded-lg text-xs font-mono focus:outline-none focus:border-indigo-500" placeholder="Member name...">
            <button (click)="removeMember($index)" class="px-2 py-1.5 text-rose-500 hover:text-rose-700 font-bold transition">✕</button>
          </div>
        }
      </div>

      <div class="flex space-x-2 pt-2 border-t border-slate-100">
        <button (click)="addMember()" class="flex-1 py-1.5 border border-indigo-200 hover:bg-indigo-50 text-indigo-600 font-bold text-xs rounded-lg transition">
          + Add Member
        </button>
        <button (click)="saveTeam()" class="flex-1 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg shadow-sm transition">
          Save Team
        </button>
      </div>
    </div>
  \`
})
export class AppComponent {
  members: string[] = ['Sok Mean', 'Chantha Heng'];

  addMember() {
    this.members.push('');
  }

  removeMember(index: number) {
    if (this.members.length > 1) {
      this.members.splice(index, 1);
    }
  }

  saveTeam() {
    alert(\`រក្សាទុកក្រុមការងារដែលមានសមាជិកចំនួន \${this.members.filter(m => m.trim()).length} នាក់ជោគជ័យ!\`);
  }
}
`
  },
  {
    id: "ang-state-management",
    title: {
      en: "Angular State Management",
      km: "ការគ្រប់គ្រងស្ថានភាពទិន្នន័យសកល"
    },
    content: {
      en: `### Centralizing Global App State
As applications scale, managing prop states across multiple deep children components becomes difficult. A structured state management solution ensures predictable updates and data synchronization.

### Modern Solutions in Angular

#### 1. Service with RxJS Subjects:
A lightweight, classic approach using \`BehaviorSubject\` to push global state streams:
\`\`\`ts
private userSubject = new BehaviorSubject<User | null>(null);
user$ = this.userSubject.asObservable();
\`\`\`

#### 2. Signal Stores:
A modern reactive approach leveraging **Signals** to create reactive state caches directly:
\`\`\`ts
export class CartStore {
  readonly items = signal<Item[]>([]);
  readonly totalPrice = computed(() => this.items().reduce((acc, i) => acc + i.price, 0));
}
\`\`\`

> **Note:** Storing data globally decouples views from business rules, making your UI components highly modular, testable, and reusable.`,
      km: `### ការគ្រប់គ្រងព័ត៌មានស្ថានភាពសកល
នៅពេលកម្មវិធីគេហទំព័ររីកធំឡើង ការបញ្ជូនទិន្នន័យឆ្លងកាត់សមាសភាគជាច្រើនជួរនឹងបង្កភាពស្មុគស្មាញ។ ប្រព័ន្ធគ្រប់គ្រងសកល (State Management) ធានានូវការធ្វើបច្ចុប្បន្នភាពទិន្នន័យបានស្មើគ្នា និងត្រឹមត្រូវ។

### ដំណោះស្រាយពេញនិយមក្នុង Angular

#### ១. សេវាកម្មជាមួយ RxJS Subjects៖
ជាវិធីសាស្ត្របុរាណស្រាលស្រទន់ដោយប្រើប្រាស់ \`BehaviorSubject\` ដើម្បីបញ្ជូនទិន្នន័យ៖
\`\`\`ts
private userSubject = new BehaviorSubject<User | null>(null);
user$ = this.userSubject.asObservable();
\`\`\`

#### ២. ប្រព័ន្ធ Signal Stores៖
ជាវិធីសាស្ត្រទំនើបដោយប្រើប្រាស់ **Signals** ផ្ទាល់ដើម្បីរក្សាទុក និងតាមដានតម្លៃសកល៖
\`\`\`ts
export class CartStore {
  readonly items = signal<Item[]>([]);
  readonly totalPrice = computed(() => this.items().reduce((acc, i) => acc + i.price, 0));
}
\`\`\`

> **សម្គាល់៖** ការរក្សាទុកទិន្នន័យជាសកលជួយផ្តាច់ UI ចេញពីលក្ខខណ្ឌកូដស្មុគស្មាញ ធ្វើឱ្យសមាសភាគនីមួយៗមានភាពងាយស្រួលក្នុងការធ្វើតេស្ត និងយកទៅប្រើប្រាស់ឡើងវិញ។`
    },
    starterCode: `import { Component, signal, computed } from '@angular/core';

// Global Store Simulation
class GlobalCartStore {
  items = signal<{name: string, price: number}[]>([]);
  
  // Computed totals derived surgically
  totalPrice = computed(() => this.items().reduce((sum, item) => sum + item.price, 0));
  
  addItem(name: string, price: number) {
    this.items.update(current => [...current, { name, price }]);
  }

  clear() {
    this.items.set([]);
  }
}

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Global Cart Signal Store</h2>
      
      <div class="p-4 bg-indigo-50/70 border border-indigo-100 rounded-xl flex items-center justify-between text-xs">
        <span class="font-bold text-indigo-900">Total Price:</span>
        <span class="text-xl font-black text-indigo-700 font-mono">{{ store.totalPrice() | currency }}</span>
      </div>

      <div class="flex space-x-2">
        <button (click)="addProduct('Laptop', 850)" class="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold rounded-xl transition shadow-sm">
          + Laptop ($850)
        </button>
        <button (click)="addProduct('Phone', 450)" class="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold rounded-xl transition shadow-sm">
          + Phone ($450)
        </button>
      </div>

      @if (store.items().length > 0) {
        <button (click)="store.clear()" class="w-full py-1.5 border border-rose-200 text-rose-600 hover:bg-rose-50 font-bold text-xs rounded-lg transition">
          Clear Shopping Cart
        </button>
      }
    </div>
  \`
})
export class AppComponent {
  store = new GlobalCartStore();

  addProduct(name: string, price: number) {
    this.store.addItem(name, price);
  }
}
`
  },
  {
    id: "ang-animations",
    title: {
      en: "Angular Animations",
      km: "ចលនានិងការផ្លាស់ប្តូររូបភាព Animations"
    },
    content: {
      en: `### Dynamic User Interface Motion
Providing visual feedback and smooth animations makes your web apps elegant and enjoyable. Angular features a complete, highly optimized DSL animation engine built directly into the framework.

### Declaring Triggers and Transitions
You configure animations using metadata inside the \`@Component\` decorator:
\`\`\`ts
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
\`\`\`

### Hooking up to templates
You attach animation triggers to HTML elements using the at (\`@\`) symbol prefix:
\`\`\`html
<div @fadeIn>Dynamic entering component!</div>
\`\`\`

> **Tip:** By integrating states and transitions together, you can design advanced sequences like stagger, keyframes, and sliding drawer effects effortlessly.`,
      km: `### ការបង្កើតចលនា និងការបង្ហាញបែបទំនើប
ការផ្តល់នូវប្រតិកម្មចលនាស្អាតៗ (Animations) ជួយឱ្យកម្មវិធីគេហទំព័ររបស់អ្នកមើលទៅរលូន និងទាក់ទាញ។ Angular មានភ្ជាប់ជាមួយម៉ាស៊ីនចលនា DSL ដ៏មានឥទ្ធិពលដែលគណនាបានលឿនបំផុត។

### ការប្រកាសកូដទម្រង់ចលនា (Triggers & Transitions)
អ្នកអាចកំណត់ចលនាដោយផ្ទាល់នៅក្នុង Metadata របស់ \`@Component\`៖
\`\`\`ts
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
\`\`\`

### ការភ្ជាប់ទៅកាន់ HTML Template
ភ្ជាប់ចលនាដែលបានបង្កើតទៅកាន់ Tag HTML ដោយប្រើសញ្ញា @៖
\`\`\`html
<div @fadeIn>សមាសភាគលេចឡើងជាមួយចលនា!</div>
\`\`\`

> **គន្លឹះ៖** តាមរយៈការផ្គូផ្គង states និង transitions យើងអាចបង្កើតចលនាស្មុគស្មាញជាច្រើនដូចជា stagger, keyframes, និងការរំកិលប្រអប់ចំហៀងបានយ៉ាងងាយស្រួល។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Animations DSL Sandbox</h2>
      
      <button (click)="toggleVisible()" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg transition">
        Toggle Animation Trigger
      </button>

      <!-- Simulated dynamic sliding and fading element -->
      @if (isOpen) {
        <div class="p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 font-medium rounded-xl text-xs transition-all duration-500 scale-100 opacity-100">
          ✨ Smooth Animation Slide Box! Loaded with ease-out timing curves.
        </div>
      } @else {
        <div class="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center text-xs text-slate-400">
          Animation block is hidden. Click trigger to slide in.
        </div>
      }
    </div>
  \`
})
export class AppComponent {
  isOpen = false;

  toggleVisible() {
    this.isOpen = !this.isOpen;
  }
}
`
  },
  {
    id: "ang-testing",
    title: {
      en: "Angular Testing",
      km: "ការសរសេរកូដសាកល្បង Testing"
    },
    content: {
      en: `### Delivering Bug-free Codebases
Testing is a first-class citizen in Angular. When you generate files using the CLI, Angular automatically generates matching \`.spec.ts\` testing files containing basic test structures.

### Angular TestBed
**TestBed** is Angular's primary utility to mock modules, isolate components, and simulate dependency injections safely during unit and integration tests:
\`\`\`ts
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [AppComponent]
  }).compileComponents();
});
\`\`\`

### Testing Components Behavior
You can access raw component class properties or simulate button clicks dynamically using the testing fixture:
\`\`\`ts
it('should increment count on button click', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.componentInstance.increment();
  expect(fixture.componentInstance.count).toBe(1);
});
\`\`\`

> **Note:** Maintaining high test coverage ensures your application can scale and change without breaking existing business logic or database setups!`,
      km: `### ការធានាគុណភាពកូដគ្មានបញ្ហាឡើយ
ការធ្វើតេស្ត (Testing) គឺជាផ្នែកសំខាន់ចាំបាច់បំផុតក្នុង Angular។ រាល់ពេលបង្កើតឯកសារតាមរយៈ CLI វានឹងបង្កើតឯកសារសាកល្បង \`.spec.ts\` ដោយស្វ័យប្រវត្ត។

### ឧបករណ៍ Angular TestBed
**TestBed** គឺជាឧបករណ៍ចម្បងរបស់ Angular សម្រាប់បង្កើតម៉ូឌុលសាកល្បង និងចាក់បញ្ចូលសេវាក្លែងក្លាយដើម្បីធានាសុវត្ថិភាពពេលសាកល្បងកូដ៖
\`\`\`ts
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [AppComponent]
  }).compileComponents();
});
\`\`\`

### ការធ្វើតេស្តសកម្មភាពសមាសភាគ
យើងអាចចូលអានតម្លៃអថេរ ឬសាកល្បងចុចលើប៊ូតុងនានាដោយស្វ័យប្រវត្តិតាមរយៈ fixture នៃប្រព័ន្ធសាកល្បង៖
\`\`\`ts
it('គួរតែបង្កើនលេខឡើងបន្ទាប់ពីចុចប៊ូតុង', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.componentInstance.increment();
  expect(fixture.componentInstance.count).toBe(1);
});
\`\`\`

> **សម្គាល់៖** ការរក្សាបាននូវកម្រិតតេស្តខ្ពស់ (High test coverage) ជួយឱ្យយើងកែប្រែកូដ ឬបន្ថែមមុខងារទៅថ្ងៃក្រោយបានដោយទំនុកចិត្តខ្ពស់បំផុត!`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Unit Tests Spec Dashboard</h2>
      
      <button (click)="runSpecs()" class="w-full py-2 bg-slate-900 text-white hover:bg-black font-bold text-xs rounded-lg transition shadow-sm">
        Run Mock Spec Tests Suite
      </button>

      <!-- Testing specs logger output -->
      <div class="p-3 bg-slate-950 text-emerald-400 font-mono text-xs rounded-xl space-y-1.5">
        <div class="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Test Runner Console</div>
        @for (spec of specResults; track $index) {
          <div class="flex items-center justify-between text-[11px]">
            <span>✅ {{ spec.name }}</span>
            <span class="text-emerald-500 font-bold">PASS ({{ spec.duration }}ms)</span>
          </div>
        } @empty {
          <div class="text-slate-500 text-center py-2">Click button to execute test coverage.</div>
        }
      </div>
    </div>
  \`
})
export class AppComponent {
  specResults: {name: string, duration: number}[] = [];

  runSpecs() {
    this.specResults = [
      { name: 'AppComponent should create component model', duration: 12 },
      { name: 'AppComponent count should initialize at 0', duration: 4 },
      { name: 'AppComponent button click should trigger increment()', duration: 18 }
    ];
  }
}
`
  },
  {
    id: "ang-security",
    title: {
      en: "Angular Security",
      km: "ប្រព័ន្ធសុវត្ថិភាពនិងការការពារ"
    },
    content: {
      en: `### Securing Frontends Against Attacks
Angular is built with top-tier security standards. By default, Angular treats all inputs as untrusted and automatically encodes HTML values to prevent Cross-Site Scripting (XSS) injections.

### DomSanitizer
If you must inject dynamic HTML, styles, or iFrame URLs, you must explicitly declare the value safe using **DomSanitizer** to bypass Angular's security guards:
\`\`\`ts
import { DomSanitizer } from '@angular/platform-browser';

constructor(private sanitizer: DomSanitizer) {
  this.safeHtml = this.sanitizer.bypassSecurityTrustHtml('<strong>Cool HTML!</strong>');
}
\`\`\`

### Content Security Policy (CSP)
Ensure your production servers configure Content Security Policies correctly. Angular fully supports strict CSP rules to block unauthorized styles or remote script injection.

> **Pitfall:** Never bypass security checks unless you are 100% certain that the input is clean and has been thoroughly sanitized server-side!`,
      km: `### ការការពារសុវត្ថិភាពទប់ទល់ការវាយប្រហារ
Angular ត្រូវបានរចនាឡើងជាមួយស្ដង់ដារសុវត្ថិភាពខ្ពស់បំផុត។ ជាលំនាំដើម វានឹងចាត់ទុកគ្រប់ទិន្នន័យបញ្ចូលទាំងអស់ជាទិន្នន័យមិនមានសុវត្ថិភាព និងធ្វើកូដនីយកម្មតម្លៃ HTML ដោយស្វ័យប្រវត្តិដើម្បីការពារការលួចចាក់បញ្ជូលកូដបំពុល (Cross-Site Scripting - XSS)។

### ឧបករណ៍ DomSanitizer
ប្រសិនបើអ្នកពិតជាត្រូវការចាក់បញ្ចូលកូដ HTML ឌីណាមិក ឬតំណភ្ជាប់ iFrame អ្នកត្រូវតែបញ្ជាក់ប្រាប់ប្រព័ន្ធសុវត្ថិភាពឱ្យច្បាស់ជាមុនសិនដោយប្រើ **DomSanitizer**៖
\`\`\`ts
import { DomSanitizer } from '@angular/platform-browser';

constructor(private sanitizer: DomSanitizer) {
  this.safeHtml = this.sanitizer.bypassSecurityTrustHtml('<strong>កូដមានសុវត្ថិភាព!</strong>');
}
\`\`\`

### គោលការណ៍សុវត្ថិភាពមាតិកា (CSP)
ត្រូវប្រាកដថាម៉ាស៊ីនបម្រើផលិតកម្មរបស់អ្នករៀបចំប្រព័ន្ធ CSP ត្រឹមត្រូវ។ Angular គាំទ្រគោលការណ៍ CSP ពេញលេញដើម្បីទប់ស្កាត់ការចាក់បញ្ចូលកូដពីចម្ងាយដែលគ្មានការអនុញ្ញាត។

> **ចំណុចគួរប្រយ័ត្ន៖** ហាមរំលងការត្រួតពិនិត្យសុវត្ថិភាព លុះត្រាតែអ្នកប្រាកដ ១០០% ថាទិន្នន័យបញ្ចូលនោះស្អាត និងត្រូវបានសម្អាតរួចរាល់ពីខាង Server!`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Security & Sanitization Sandbox</h2>
      
      <!-- Input test -->
      <div class="space-y-1">
        <label class="text-[10px] font-bold text-slate-400 uppercase">Input Malicious Code Simulation</label>
        <input [(ngModel)]="maliciousHtml" class="w-full p-2 border border-slate-200 rounded-lg text-xs font-mono focus:outline-none" placeholder="<script>alert(1)</script>">
      </div>

      <!-- Angular Safe Sanitized Output -->
      <div class="space-y-1 pt-2 border-t border-slate-100 text-xs">
        <label class="text-[10px] font-bold text-rose-500 uppercase block">Angular Encoded View (Safe)</label>
        <div class="p-2.5 bg-slate-50 border border-slate-100 rounded-lg font-mono text-[11px] break-all">
          {{ maliciousHtml }}
        </div>
      </div>
    </div>
  \`
})
export class AppComponent {
  maliciousHtml = '<img src=x onerror=alert("hacked") /> Angkor';
}
`
  },
  {
    id: "ang-ssr-hydration",
    title: {
      en: "Angular SSR & Hydration",
      km: "ប្រព័ន្ធ SSR និងការស្តារទំព័រឡើងវិញ"
    },
    content: {
      en: `### Boosting Speed with Server Rendering
**Server-Side Rendering (SSR)** pre-compiles and builds your HTML pages on the server before sending them to users. This guarantees immediate visual load times, highly optimized SEO, and better social sharing previews.

### What is Client-side Hydration?
In classic SSR, once HTML loaded, the client destroyed and re-created the entire view tree, causing flashing. Modern Angular features **Non-destructive Hydration**:
- The server sends ready-to-view pre-rendered HTML.
- The client reads the existing DOM nodes and attaches event listeners seamlessly without re-rendering!

### Enabling Hydration
In your \`app.config.ts\` file, pass the \`provideClientHydration()\` function inside the providers array:
\`\`\`ts
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig = {
  providers: [
    provideClientHydration()
  ]
};
\`\`\`

> **Note:** By using hydration, you get the best of both worlds: ultra-fast initial server rendering combined with single-page application reactivity!`,
      km: `### ការបង្កើនល្បឿនតាមរយៈការ Render លើ Server
**Server-Side Rendering (SSR)** ជួយចងក្រងទំព័រ HTML រួចរាល់តាំងពីនៅលើ Server មុនពេលបញ្ជូនវាទៅកាន់អ្នកប្រើ។ វាធានាបាននូវការបើកទំព័រលឿនបំផុត បង្កើនពិន្ទុ SEO និងការបង្ហាញរូបភាពគំរូលើបណ្ដាញសង្គមបានត្រឹមត្រូវ។

### តើអ្វីជាការស្ដារទំព័រឡើងវិញ (Hydration)?
នៅក្នុងប្រព័ន្ធ SSR ពីមុន ពេលកូដ HTML មកដល់ ម៉ាស៊ីនភ្ញៀវនឹងកម្ទេចនិងបង្កើត DOM ឡើងវិញទាំងអស់បង្កឱ្យទំព័រហើរភ្លឹបភ្លែត។ Angular ជំនាន់ថ្មីដោះស្រាយបញ្ហានេះតាមរយៈ **Non-destructive Hydration**៖
- Server បញ្ជូនទំព័រ HTML ដែលបង្ហាញទិន្នន័យរួចជាស្រេច។
- ម៉ាស៊ីនភ្ញៀវ (Client) ចូលអាន DOM ដែលមានស្រាប់ និងភ្ជាប់ព្រឹត្តិការណ៍ Event Listeners ភ្លាមៗដោយមិនបាច់គូរឡើងវិញឡើយ!

### ការបើកដំណើរការ Hydration
នៅក្នុងឯកសារ \`app.config.ts\` អ្នកគ្រាន់តែបញ្ជូនអនុគមន៍ \`provideClientHydration()\` ទៅកាន់ប្រព័ន្ធចុះឈ្មោះ Providers៖
\`\`\`ts
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig = {
  providers: [
    provideClientHydration()
  ]
};
\`\`\`

> **សម្គាល់៖** តាមរយៈយន្តការនេះ អ្នកនឹងទទួលបានអត្ថប្រយោជន៍ដ៏អស្ចារ្យទាំងពីរ៖ ការបើកទំព័រដំបូងលឿនបំផុតពី Server រួមផ្សំជាមួយភាពរស់រវើកនិងប្រតិកម្មលឿនរបស់ Single Page App!`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">SSR Hydration Pipeline</h2>
      
      <div class="space-y-2 text-xs">
        <div class="p-3 bg-indigo-50 border border-indigo-100 rounded-xl space-y-1">
          <span class="text-[9px] text-indigo-400 font-bold uppercase block">1. Server Pre-render</span>
          <p class="text-slate-600 leading-normal text-[11px]">
            Server prepares complete HTML layouts: <code class="font-mono bg-indigo-100 px-1 rounded">&lt;h2&gt;SSR Hydration...&lt;/h2&gt;</code>
          </p>
        </div>

        <div class="p-3 bg-emerald-50 border border-emerald-100 rounded-xl space-y-1">
          <span class="text-[9px] text-emerald-400 font-bold uppercase block">2. Client Hydration Active</span>
          <p class="text-slate-600 leading-normal text-[11px]">
            Angular client connects event listeners on pre-rendered DOM instantly without reflickering.
          </p>
        </div>
      </div>
    </div>
  \`
})
export class AppComponent {}
`
  }
];
