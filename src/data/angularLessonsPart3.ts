import { Lesson } from '../types';

export const angularLessonsPart3: Lesson[] = [
  {
    id: "ang-bootstrap",
    title: {
      en: "Angular App Bootstrap",
      km: "ការចាប់ផ្តើមដំណើរការកម្មវិធី Bootstrap"
    },
    content: {
      en: `### Initializing Your Application
Modern Angular applications are initialized using the lightweight **bootstrapApplication** API in \`main.ts\`. This replaces the heavy, old \`platformBrowserDynamic().bootstrapModule(AppModule)\` approach.

### Step 1: Define Your Entry Point
You pass your root Standalone Component directly to the bootstrap function:
\`\`\`ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig);
\`\`\`

### Step 2: Configure Providers Globally
The second parameter (\`appConfig\`) is an object of global provider injectors (like routing configurations and HTTP interceptors):
\`\`\`ts
export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
\`\`\`

> **Note:** By shifting to standalone boot pipelines, Angular loads up to 40% faster and reduces bundles payload size dramatically!`,
      km: `### ការបើកដំណើរការកម្មវិធីដំបូង
កម្មវិធី Angular ទំនើបៗត្រូវបានចាប់ផ្តើមដំណើរការតាមរយៈ API ស្រាលស្រទន់មួយឈ្មោះថា **bootstrapApplication** នៅក្នុងឯកសារ \`main.ts\`។ វាជំនួសវិធីសរសេរចាស់ដ៏ធ្ងន់ \`bootstrapModule(AppModule)\`។

### ជំហានទី ១៖ កំណត់សមាសភាគមេ
អ្នកត្រូវបញ្ជូន Standalone Component មេទៅកាន់មុខងារ bootstrap ផ្ទាល់តែម្ដង៖
\`\`\`ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig);
\`\`\`

### ជំហានទី ២៖ រៀបចំកំណត់រចនាសម្ព័ន្ធសកល
ប៉ារ៉ាម៉ែត្រទីពីរ (\`appConfig\`) ផ្ទុកទៅដោយសេវាកម្មសកល (ដូចជា provideRouter និង provideHttpClient)៖
\`\`\`ts
export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
\`\`\`

> **សម្គាល់៖** តាមរយៈការផ្លាស់ប្តូរមកប្រើ Standalone Boot នេះ កម្មវិធី Angular អាចដំណើរការលឿនជាងមុនរហូតដល់ទៅ ៤០% និងកាត់បន្ថយទំហំកញ្ចប់កូដបានយ៉ាងច្រើន!`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Bootstrap Configurations</h2>
      
      <div class="p-3 bg-slate-900 rounded-xl space-y-1.5 text-xs text-emerald-400 font-mono">
        <div>🚀 bootstrapApplication(AppComponent, {</div>
        <div class="pl-4 text-slate-400">providers: [</div>
        <div class="pl-8 text-indigo-400">provideRouter(routes),</div>
        <div class="pl-8 text-indigo-400">provideHttpClient()</div>
        <div class="pl-4 text-slate-400">]</div>
        <div>});</div>
      </div>

      <div class="text-xs text-slate-500 leading-relaxed font-sans">
        This represents the entry boot logic. No NgModules are required! Your root standalone component is loaded directly.
      </div>
    </div>
  \`
})
export class AppComponent {}
`
  },
  {
    id: "ang-control-flow",
    title: {
      en: "Angular Control Flow",
      km: "លំហូរត្រួតពិនិត្យ Control Flow"
    },
    content: {
      en: `### Built-in Template Directives
Modern Angular introduces optimized built-in control flows (\`@if\`, \`@for\`, and \`@switch\`). These are faster and don't require any module imports to function.

### Syntax Reference

#### 1. Conditional Branching:
\`\`\`html
@if (user.role === 'Admin') {
  <p>System settings unlocked.</p>
} @else if (user.role === 'Editor') {
  <p>Editing options enabled.</p>
} @else {
  <p>Access denied.</p>
}
\`\`\`

#### 2. Case Selection:
\`\`\`html
@switch (tabState) {
  @case ('home') { <home-view /> }
  @case ('info') { <info-view /> }
  @default { <fallback-view /> }
}
\`\`\`

> **Note:** Because this new control flow compiles down to pure javascript conditions under the hood, it eliminates extra DOM tags, improving rendering performance.`,
      km: `### លំហូរគ្រប់គ្រងលក្ខខណ្ឌទំនើប
Angular ជំនាន់ថ្មីនាំយកប្រព័ន្ធគ្រប់គ្រងលំហូរគំរូទំព័រល្បឿនលឿន (\`@if\`, \`@for\`, និង \`@switch\`) មកប្រើប្រាស់។ ពួកវាដំណើរការលឿនខ្លាំង និងមិនបាច់នាំចូលម៉ូឌុលណាមួយឡើយ។

### របៀបសរសេរ

#### ១. ការបែងចែកលក្ខខណ្ឌចម្រុះ៖
\`\`\`html
@if (user.role === 'Admin') {
  <p>បើកដំណើរការមុខងារប្រព័ន្ធគ្រប់គ្រង។</p>
} @else if (user.role === 'Editor') {
  <p>អនុញ្ញាតឱ្យកែសម្រួលព័ត៌មាន។</p>
} @else {
  <p>គ្មានការអនុញ្ញាតឡើយ។</p>
}
\`\`\`

#### ២. ការជ្រើសរើសករណី៖
\`\`\`html
@switch (tabState) {
  @case ('home') { <home-view /> }
  @case ('info') { <info-view /> }
  @default { <fallback-view /> }
}
\`\`\`

> **សម្គាល់៖** ដោយសារតែលំហូរគ្រប់គ្រងថ្មីនេះត្រូវបានបកប្រែទៅជាលក្ខខណ្ឌ JavaScript ធម្មតាផ្ទាល់វានឹងកាត់បន្ថយ Tag ឥតប្រយោជន៍ និងជួយឱ្យការបង្ហាញទំព័រកាន់តែលឿន។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Advanced Control Flow</h2>
      
      <!-- Selector buttons -->
      <div class="flex space-x-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
        <button (click)="changeRole('Guest')" [class.bg-white]="userRole === 'Guest'" class="flex-1 py-1 rounded-lg transition">Guest</button>
        <button (click)="changeRole('Editor')" [class.bg-white]="userRole === 'Editor'" class="flex-1 py-1 rounded-lg transition">Editor</button>
        <button (click)="changeRole('Admin')" [class.bg-white]="userRole === 'Admin'" class="flex-1 py-1 rounded-lg transition">Admin</button>
      </div>

      <!-- Control flow logic block -->
      <div class="p-4 rounded-xl border border-dashed border-indigo-200 bg-indigo-50/40 text-xs">
        @switch (userRole) {
          @case ('Admin') {
            <div class="animate-fade-in font-medium text-indigo-900">
              🛡️ <strong>Admin Role:</strong> Full write permissions and complete database configurations are active.
            </div>
          }
          @case ('Editor') {
            <div class="animate-fade-in font-medium text-emerald-900">
              📝 <strong>Editor Role:</strong> You can edit logs, draft posts, and review pending student projects.
            </div>
          }
          @default {
            <div class="animate-fade-in font-medium text-slate-600">
              👤 <strong>Guest Role:</strong> Read-only access. Sign in to submit code practice.
            </div>
          }
        }
      </div>
    </div>
  \`
})
export class AppComponent {
  userRole = 'Guest';

  changeRole(role: string) {
    this.userRole = role;
  }
}
`
  },
  {
    id: "ang-signals",
    title: {
      en: "Angular Signals",
      km: "ប្រព័ន្ធប្រតិកម្ម Angular Signals"
    },
    content: {
      en: `### The Future of Reactivity
**Angular Signals** provide a modern, fine-grained reactivity model. A Signal is a value wrapper that notifies Angular precisely when its value changes, updating only the affected DOM nodes.

### Three Pillars of Signals

#### 1. Writable Signals:
Declare and write values dynamically:
\`\`\`ts
const count = signal(0);
count.set(5);
count.update(val => val + 1);
\`\`\`

#### 2. Computed Signals:
Read-only declarative derivations of other signals, auto-updated:
\`\`\`ts
const doubleCount = computed(() => count() * 2);
\`\`\`

#### 3. Effects:
Side effects executed automatically whenever their dependent signals change:
\`\`\`ts
effect(() => console.log('Current value:', count()));
\`\`\`

> **Tip:** In HTML templates, you read a signal's value by invoking it like a function (e.g., \`{{ count() }}\`), which registers a tracking dependency!`,
      km: `### អនាគតនៃប្រព័ន្ធប្រតិកម្ម Reactivity
**Angular Signals** ផ្តល់ជូននូវគំរូទិន្នន័យប្រតិកម្មទំនើបបំផុត។ Signal គឺជាប្រអប់វេចខ្ចប់តម្លៃ ដែលនឹងផ្ដល់ដំណឹងទៅកាន់ Angular ឱ្យធ្វើបច្ចុប្បន្នភាពតែផ្នែកណាដែលពាក់ព័ន្ធភ្លាមៗនៅពេលតម្លៃផ្លាស់ប្តូរ។

### សរសរស្ដម្ភទាំងបីរបស់ Signals

#### ១. Writable Signals (សរសេរបាន)៖
បង្កើត និងកែប្រែតម្លៃដោយសេរី៖
\`\`\`ts
const count = signal(0);
count.set(5);
count.update(val => val + 1);
\`\`\`

#### ២. Computed Signals (គណនាលទ្ធផល)៖
អានតម្លៃដោយស្វ័យប្រវត្តិកែប្រែតាមការផ្លាស់ប្តូររបស់ Signal ផ្សេងទៀត៖
\`\`\`ts
const doubleCount = computed(() => count() * 2);
\`\`\`

#### ៣. Effects (ផលប៉ះពាល់ចំហៀង)៖
រត់កូដស្វ័យប្រវត្តរាល់ពេលដែល Signal គោលដៅប្រែប្រួលតម្លៃ៖
\`\`\`ts
effect(() => console.log('តម្លៃបច្ចុប្បន្នគឺ៖', count()));
\`\`\`

> **គន្លឹះ៖** នៅក្នុងគំរូទំព័រ HTML អ្នកអាចអានតម្លៃ Signal ដោយការហៅវាជាអនុគមន៍ (ឧទាហរណ៍៖ \`{{ count() }}\`) ដែលវានឹងចាប់ផ្តើមដំណើរការតាមដានដោយស្វ័យប្រវត្តិ!`
    },
    starterCode: `import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Fine-grained Signals Tracker</h2>
      
      <div class="grid grid-cols-2 gap-2 text-center">
        <div class="p-3 bg-indigo-50/70 border border-indigo-100 rounded-xl">
          <span class="text-[9px] text-indigo-400 font-bold uppercase block">Count Signal</span>
          <span class="text-2xl font-black text-indigo-700 font-mono">{{ count() }}</span>
        </div>
        
        <div class="p-3 bg-teal-50/70 border border-teal-100 rounded-xl">
          <span class="text-[9px] text-teal-400 font-bold uppercase block">Double Computed</span>
          <span class="text-2xl font-black text-teal-700 font-mono">{{ doubleCount() }}</span>
        </div>
      </div>

      <div class="flex space-x-2">
        <button (click)="decrement()" class="flex-1 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold transition">- Decrement</button>
        <button (click)="increment()" class="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition">+ Increment</button>
      </div>

      <div class="text-[10px] text-slate-400 font-medium text-center">
        Updates happen surgically in real-time. No digest loops required.
      </div>
    </div>
  \`
})
export class AppComponent {
  // Declare signal states
  count = signal(1);

  // Computed state
  doubleCount = () => this.count() * 2;

  increment() {
    this.count.update(v => v + 1);
  }

  decrement() {
    if (this.count() > 0) {
      this.count.update(v => v - 1);
    }
  }
}
`
  },
  {
    id: "ang-change-detection",
    title: {
      en: "Angular Change Detection",
      km: "ការតាមដានបច្ចុប្បន្នភាពទិន្នន័យ"
    },
    content: {
      en: `### Optimizing Rendering Performance
Angular determines when component views require updates using **Change Detection**. By default, Angular traverses the entire component tree from top to bottom on any mouse click, network request, or timer trigger.

### OnPush Change Detection
To build ultra-fast applications, change your strategy to \`ChangeDetectionStrategy.OnPush\`:
\`\`\`ts
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
\`\`\`

### How OnPush Works
Under \`OnPush\`, Angular only scans and updates this component when:
1. Input properties (\`@Input\`) receive completely new object references.
2. An event handler inside this component fires.
3. An Observable emits a value combined with the \`async\` pipe.

> **Tip:** Combining modern **Signals** with \`OnPush\` is the ultimate performance pattern, allowing surgical, lightweight DOM modifications only when and where required.`,
      km: `### ការបង្កើនល្បឿននៃការបង្ហាញទំព័រ
Angular តាមដាន និងផ្លាស់ប្តូរការបង្ហាញនៅលើអេក្រង់ តាមរយៈយន្តការ **Change Detection**។ តាមលំនាំដើម វានឹងស្កេនពិនិត្យរាល់សមាសភាគទាំងអស់ តាំងពីលើដល់ក្រោម រាល់ពេលមានការចុចកណ្ដុរ សំណើបណ្ដាញ ឬពេលវេលាកំណត់រត់។

### យុទ្ធសាស្ត្រ OnPush ដ៏ជឿនលឿន
ដើម្បីបង្កើនល្បឿនកម្មវិធីឱ្យលឿនបំផុត យើងអាចប្តូរយុទ្ធសាស្ត្រតាមដានទៅជា \`ChangeDetectionStrategy.OnPush\`៖
\`\`\`ts
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
\`\`\`

### របៀបដំណើរការរបស់ OnPush
នៅពេលកំណត់ OnPush នោះ Angular នឹងពិនិត្យនិងកែប្រែសមាសភាគលុះត្រាតែ៖
1. តម្លៃបញ្ចូល (\`@Input\`) ទទួលបានសេចក្តីយោងវត្ថុថ្មីស្រឡាង (New Reference)។
2. មាន Event Handler រត់ដំណើរការចេញពីសមាសភាគនោះ។
3. ចរន្តទិន្នន័យ Observable បញ្ជូនទិន្នន័យរួមគ្នាជាមួយ \`async\` Pipe។

> **គន្លឹះ៖** ការប្រើប្រាស់ **Signals** រួមគ្នាជាមួយយុទ្ធសាស្ត្រ **OnPush** គឺជាវិធីរៀបចំកូដដែលផ្តល់ល្បឿនលឿនបំផុត ដោយសារវាធ្វើបច្ចុប្បន្នភាព DOM តែចំនុចណាដែលចាំបាច់ប៉ុណ្ណោះ។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">OnPush Strategy Simulator</h2>
      
      <div class="space-y-2.5 text-xs text-slate-600 font-medium">
        <div class="p-3 bg-emerald-50 border border-emerald-100 rounded-xl space-y-1">
          <div class="font-bold text-emerald-800">⚡ OnPush Mode Enabled</div>
          <p class="text-[11px] text-emerald-600 leading-normal">
            Updates only occur on Input reference changes or internal signals updates, saving hundreds of redundant cycles.
          </p>
        </div>

        <div class="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1">
          <div class="font-bold text-slate-500">Default Check Mode</div>
          <p class="text-[11px] text-slate-400 leading-normal">
            Triggers recursive evaluation across all branches, causing performance lag on complex visual dashboards.
          </p>
        </div>
      </div>
    </div>
  \`
})
export class AppComponent {}
`
  },
  {
    id: "ang-dynamic-comp",
    title: {
      en: "Angular Dynamic Comp",
      km: "ការម៉ោនសមាសភាគឌីណាមិក"
    },
    content: {
      en: `### Dynamic Component Injection
Sometimes you need to load components dynamically based on user selection, configurations, or runtime conditions (for example: modals, popovers, or floating widgets).

### NgComponentOutlet
The simplest declarative way to mount components dynamically in templates is using the \`NgComponentOutlet\` directive:
\`\`\`html
<ng-container *ngComponentOutlet="activeWidgetComponent"></ng-container>
\`\`\`

### ViewContainerRef
For complete imperical control (setting inputs, capturing output subscriptions dynamically), you can inject \`ViewContainerRef\` in your TypeScript constructor and call \`createComponent()\`:
\`\`\`ts
const ref = this.viewContainer.createComponent(MyDynamicComponent);
ref.instance.id = 101;
\`\`\`

> **Note:** Dynamic components are fully managed by Angular. Destroying container nodes will clean up memory, child listeners, and DOM configurations automatically.`,
      km: `### ការចាក់បញ្ចូលសមាសភាគឌីណាមិក
ជារឿយៗយើងត្រូវការម៉ោនសមាសភាគ (Components) ដោយផ្អែកលើជម្រើសរបស់អ្នកប្រើ ប្រព័ន្ធកំណត់ ឬស្ថានភាពជាក់ស្តែងនៅពេលកម្មវិធីកំពុងរត់ (ឧទាហរណ៍៖ Modals, Alert box, ឬ Widgets នានា)។

### NgComponentOutlet
វិធីងាយស្រួលបំផុតដើម្បីបង្ហាញ Component ឌីណាមិកនៅក្នុងគំរូទំព័រ HTML គឺប្រើប្រាស់ \`NgComponentOutlet\`៖
\`\`\`html
<ng-container *ngComponentOutlet="activeWidgetComponent"></ng-container>
\`\`\`

### ViewContainerRef
សម្រាប់គ្រប់គ្រងកម្រិតខ្ពស់ (បញ្ជូនទិន្នន័យចូល ចាប់យកលទ្ធផលចេញ) យើងអាចចាក់បញ្ចូល \`ViewContainerRef\` នៅក្នុង Constructor រួចហៅ \`createComponent()\`៖
\`\`\`ts
const ref = this.viewContainer.createComponent(MyDynamicComponent);
ref.instance.id = 101;
\`\`\`

> **សម្គាល់៖** សមាសភាគឌីណាមិកត្រូវបានគ្រប់គ្រងទាំងស្រុងដោយ Angular។ ពេលលុបប្រអប់ផ្ទុកវានឹងសម្អាត អង្គចងចាំ និង Events ទាំងអស់ដោយស្វ័យប្រវត្ត។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Dynamic UI Loader</h2>
      
      <p class="text-xs text-slate-500 leading-normal">
        Switching the type below simulates loading brand new components dynamically using Angular's injection pipelines.
      </p>

      <div class="grid grid-cols-2 gap-2 text-xs font-semibold">
        <button (click)="setComponent('alert')" [class.bg-indigo-600]="activeType === 'alert'" [class.text-white]="activeType === 'alert'" class="py-2 rounded-xl border border-slate-200 transition">
          Alert Component
        </button>
        <button (click)="setComponent('chart')" [class.bg-indigo-600]="activeType === 'chart'" [class.text-white]="activeType === 'chart'" class="py-2 rounded-xl border border-slate-200 transition">
          Chart Component
        </button>
      </div>

      <!-- Container simulation -->
      <div class="p-4 bg-slate-50 border border-slate-100 rounded-xl min-h-[90px] flex items-center justify-center">
        @if (activeType === 'alert') {
          <div class="animate-fade-in text-center text-xs">
            <span class="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 font-bold uppercase font-mono block mb-1">Danger Alert</span>
            <p class="text-slate-500 text-[11px]">System warning: Server resource limit exceeded.</p>
          </div>
        } @else {
          <div class="animate-fade-in text-center text-xs">
            <span class="px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 font-bold uppercase font-mono block mb-1">Analytics Chart</span>
            <p class="text-slate-500 text-[11px]">🚀 Weekly growth is up by 15.4%!</p>
          </div>
        }
      </div>
    </div>
  \`
})
export class AppComponent {
  activeType = 'alert';

  setComponent(type: string) {
    this.activeType = type;
  }
}
`
  },
  {
    id: "ang-adv-di",
    title: {
      en: "Angular Advanced DI",
      km: "ប្រព័ន្ធ DI កម្រិតខ្ពស់"
    },
    content: {
      en: `### High-Level Dependency Injectors
Angular's Dependency Injection system is hierarchical and highly customisable. Beyond simple singleton classes, you can configure injectors with custom behaviors.

### Advanced Provider Formats

#### 1. Use Class Override (\`useClass\`):
Substitute services dynamically (excellent for separating production and mocking behaviors):
\`\`\`ts
providers: [{ provide: UserService, useClass: MockUserService }]
\`\`\`

#### 2. Factory Providers (\`useFactory\`):
Generate and configure service singleton instances dynamically based on current configurations:
\`\`\`ts
providers: [{
  provide: ApiService,
  useFactory: (http: HttpClient) => new ApiService(http, 'https://api.kh')
}]
\`\`\`

#### 3. Injection Tokens (\`InjectionToken\`):
Inject simple values, API URLs, config keys, or constants securely:
\`\`\`ts
const API_URL = new InjectionToken<string>('api.url');
\`\`\`

> **Tip:** You can control where services resolve from using decorators like \`@Optional()\` (doesn't crash if missing) or \`@Self()\` (resolves only within current component scope).`,
      km: `### ប្រព័ន្ធចាក់បញ្ចូលសេវាលម្អិតកម្រិតខ្ពស់
ប្រព័ន្ធចាក់បញ្ចូលសេវា (Dependency Injection) របស់ Angular គឺមានឋានានុក្រមច្បាស់លាស់ និងអាចកែសម្រួលបានខ្ពស់។ ក្រៅពីការបង្កើត Class ធម្មតា យើងអាចកំណត់ដំណើរការចាក់បញ្ចូលតាមតម្រូវការ៖

### ទម្រង់កំណត់ Provider កម្រិតខ្ពស់

#### ១. ការជំនួស Class (\`useClass\`)៖
ជំនួសការចាក់បញ្ចូលសេវាដោយស្វ័យប្រវត្ត (ល្អបំផុតសម្រាប់សរសេរតេស្តសាកល្បង)៖
\`\`\`ts
providers: [{ provide: UserService, useClass: MockUserService }]
\`\`\`

#### ២. ស្ថាបនាសម្រាំង (\`useFactory\`)៖
បង្កើត និងកំណត់លក្ខណៈសេវាកម្មដោយផ្អែកលើស្ថានភាពជាក់ស្តែងរបស់កម្មវិធី៖
\`\`\`ts
providers: [{
  provide: ApiService,
  useFactory: (http: HttpClient) => new ApiService(http, 'https://api.kh')
}]
\`\`\`

#### ៣. Injection Tokens (និមិត្តសញ្ញា DI)៖
ចាក់បញ្ចូលតម្លៃអត្ថបទ អាសយដ្ឋាន URL ឬប្រព័ន្ធកំណត់ផ្សេងៗបានយ៉ាងងាយស្រួល៖
\`\`\`ts
const API_URL = new InjectionToken<string>('api.url');
\`\`\`

> **គន្លឹះ៖** អ្នកអាចកំណត់វិសាលភាពស្វែងរកសេវាកម្មតាមរយៈ Decorator ដូចជា \`@Optional()\` (មិនបង្កឱ្យគាំងកូដបើស្វែងរកមិនឃើញ) ឬ \`@Self()\` (ស្វែងរកតែនៅក្នុង Component ផ្ទាល់ខ្លួនប៉ុណ្ណោះ)។`
    },
    starterCode: `import { Component, Injectable } from '@angular/core';

// Base Service
@Injectable()
export class LoggerService {
  getPrefix() { return 'PRODUCTION LOG'; }
}

// Substituted Custom Service
@Injectable()
export class DevLoggerService extends LoggerService {
  override getPrefix() { return 'DEBUG DEV LOG'; }
}

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Advanced Dependency Injection</h2>
      
      <div class="p-3.5 bg-slate-900 text-emerald-400 font-mono text-xs rounded-xl space-y-1">
        <div>🔍 Active Service Resolver:</div>
        <div class="font-bold text-indigo-400">-> {{ logger.getPrefix() }}</div>
      </div>

      <div class="text-xs text-slate-500 leading-normal font-sans">
        DevLoggerService has overridden LoggerService dynamically! This allows changing implementation globally on the fly.
      </div>
    </div>
  \`,
  // Registering DevLoggerService to override LoggerService
  providers: [
    { provide: LoggerService, useClass: DevLoggerService }
  ]
})
export class AppComponent {
  constructor(public logger: LoggerService) {}
}
`
  },
  {
    id: "ang-router-adv",
    title: {
      en: "Angular Router Advanced",
      km: "ប្រព័ន្ធរ៉ោតទ័រកម្រិតខ្ពស់ Router"
    },
    content: {
      en: `### Advanced SPA Routing
Building production-grade SPAs requires protecting specific views from guest access, loading files dynamically to increase speeds, and fetching records before mounting.

### 1. Route Guards (\`CanActivate\`)
Protects paths from unauthorized access. Useful for locking premium or user-specific profile pages:
\`\`\`ts
const routes = [{
  path: 'admin',
  component: AdminComponent,
  canActivate: [authGuard]
}];
\`\`\`

### 2. Lazy Loading Components
Only loads component resources when a user clicks and navigates to the matching URL path. Keeps initial file sizes minimal:
\`\`\`ts
const routes = [{
  path: 'dashboard',
  loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent)
}];
\`\`\`

> **Tip:** You can use **Resolvers** to download server data *before* the router displays a component. This prevents blank page flickering and provides a highly polished navigation experience.`,
      km: `### ប្រព័ន្ធរុករកទំព័រកម្រិតខ្ពស់
ការបង្កើតកម្មវិធីគេហទំព័រកម្រិតអាជីព តម្រូវឱ្យមានការការពារទំព័រមិនឱ្យអ្នកក្រៅចូលមើល ការទាញយកឯកសារកូដតែផ្នែកណាដែលត្រូវការ (Lazy Loading) និងការទាញយកទិន្នន័យត្រៀមជាមុន។

### ១. ឆ្មាំការពារផ្លូវ (\`CanActivate\`)
ការពារនិងទប់ស្កាត់ការចូលទៅកាន់ទំព័រណាមួយ ប្រសិនបើគ្មានការអនុញ្ញាត ឬមិនទាន់បានចូលគណនី៖
\`\`\`ts
const routes = [{
  path: 'admin',
  component: AdminComponent,
  canActivate: [authGuard]
}];
\`\`\`

### ២. Lazy Loading Components
ដំណើរការទាញយកទិន្នន័យកូដនៃសមាសភាគលុះត្រាតែអ្នកប្រើចុចចូលទៅកាន់ URL នោះ។ វាជួយកាត់បន្ថយទំហំឯកសារកូដដំបូងឱ្យតូចបំផុត៖
\`\`\`ts
const routes = [{
  path: 'dashboard',
  loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent)
}];
\`\`\`

> **គន្លឹះ៖** អ្នកអាចប្រើប្រាស់ **Resolvers** ដើម្បីទាញយកទិន្នន័យពី Server ត្រៀមទុកជាមុន *មុនពេល* ទំព័រថ្មីបង្ហាញឡើង។ វាជួយការពារទំព័រមិនឱ្យហើរភ្លឹបភ្លែត ឬទទេរស្អាតពេលប្តូរទំព័រ។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Route Guards Simulator</h2>
      
      <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
        <span class="text-xs font-semibold text-slate-700">🔒 Auth Session Status</span>
        <button (click)="toggleAuth()" [class.bg-emerald-600]="isLoggedIn" class="px-3 py-1 text-[10px] font-bold rounded-lg text-white bg-rose-600 transition">
          {{ isLoggedIn ? 'Logged In (Authorized)' : 'Logged Out (Unauthorized)' }}
        </button>
      </div>

      <button (click)="tryEnterAdmin()" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg transition">
        Attempt to Enter Admin Path (/admin)
      </button>

      <div class="p-3 bg-slate-900 rounded-xl space-y-1 text-xs text-slate-400 font-mono">
        <div>👉 Route Guard Status:</div>
        <div class="font-bold" [class.text-emerald-400]="isLoggedIn" [class.text-rose-400]="!isLoggedIn">
          {{ isLoggedIn ? 'ACCESS GRANTED: canActivate = TRUE' : 'ACCESS DENIED: Redirecting back' }}
        </div>
      </div>
    </div>
  \`
})
export class AppComponent {
  isLoggedIn = false;

  toggleAuth() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  tryEnterAdmin() {
    if (this.isLoggedIn) {
      alert('🔐 Success: Entered Admin dashboard securely!');
    } else {
      alert('❌ Guard Error: Access denied. Please log in first.');
    }
  }
}
`
  }
];
