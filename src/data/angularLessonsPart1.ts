import { FrontendLesson } from '../types/frontendClass';

export const ANGULAR_LESSONS_PART1: FrontendLesson[] = [
  // Module 1: Introduction & Setup
  {
    id: 'ang-m1-l1',
    slug: 'what-is-angular-spa',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: { en: '1.1 What is Angular & Single Page Applications (SPA)', km: '១.១ អ្វីជា Angular & Single Page Applications (SPA)' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Angular is a full-featured, enterprise-grade web application framework created and maintained by Google. It enables developers to build Single Page Applications (SPAs) where pages update dynamically without full browser reloads.',
      km: 'Angular គឺជា Web Framework កម្រិត Enterprise ដ៏ពេញលេញ បង្កើត និងថែទាំដោយ Google។ វាជួយ Developer បង្កើត Single Page Applications (SPA) ដែលទំព័រ Web ផ្លាស់ប្តូរទិន្នន័យដោយមិនបាច់ Reload ទំព័រ Browser ឡើយ។'
    },
    tutorial: {
      en: 'In traditional websites, clicking a link requests a brand new HTML document from the server. In an Angular SPA, JavaScript intercepts navigation, fetches JSON data asynchronously, and updates the view seamlessly.',
      km: 'ក្នុង Web ធម្មតា ការចុច Link ត្រូវទាមទារ HTML ថ្មីពី Server។ ឯ Angular SPA វិញ JavaScript គ្រប់គ្រង Navigation និងប្តូរតែផ្នែក UI ណាដែលត្រូវផ្លាស់ប្តូរដោយរលូន។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="flex items-center gap-3 bg-red-950/40 border border-red-500/30 p-4 rounded-xl">
      <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center font-black text-2xl text-white shadow-lg shadow-red-600/30">
        A
      </div>
      <div>
        <h3 class="text-base font-bold text-white">Angular SPA Architecture</h3>
        <p class="text-xs text-slate-400">Component-based, Client-side Rendering Framework</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900 p-3 rounded-lg border border-slate-800">
        <span class="text-red-400 font-bold block mb-1">Traditional Web</span>
        <p class="text-slate-400">Server renders full HTML for every URL change. Slow transitions & full page reloads.</p>
      </div>
      <div class="bg-slate-900 p-3 rounded-lg border border-slate-800">
        <span class="text-emerald-400 font-bold block mb-1">Angular SPA</span>
        <p class="text-slate-400">Loads single HTML page once. Components swap dynamically using client-side JavaScript.</p>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Google Cloud Console & Enterprise Portals', km: 'Google Cloud Console & ប្រព័ន្ធធំៗ' },
      description: {
        en: 'Huge applications like Google Cloud Console and Gmail rely on Angular for modular team development, strict typing, and reliable performance.',
        km: 'កម្មវិធីខ្នាតធំដូចជា Google Cloud Console ពឹងផ្អែកលើ Angular សម្រាប់រៀបចំក្រុមការងារច្រើន និងមាន Type សុវត្ថិភាព។'
      }
    },
    practiceExercise: {
      question: { en: 'What does SPA stand for in modern web development?', km: 'តើ SPA មកពីពាក្យពេញអ្វីក្នុង Web Development?' },
      solution: 'Single Page Application'
    },
    quizQuestions: [
      {
        id: 'q-ang-m1-1',
        question: { en: 'Who created and actively maintains the Angular framework?', km: 'តើក្រុមហ៊ុនណាបង្កើត និងថែទាំ Angular Framework?' },
        options: [
          { id: '1', text: { en: 'Google', km: 'Google' }, isCorrect: true },
          { id: '2', text: { en: 'Meta / Facebook', km: 'Meta / Facebook' }, isCorrect: false }
        ],
        explanation: {
          en: 'Angular is created and backed by Google.',
          km: 'Angular ត្រូវបានបង្កើតឡើង និងគាំទ្រដោយ Google។'
        }
      }
    ]
  },
  {
    id: 'ang-m1-l2',
    slug: 'angular-vs-other-frameworks',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: { en: '1.2 Angular vs. React & Vue', km: '១.២ ការប្រៀបធៀប Angular ជាមួយ React & Vue' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'While React and Vue are lightweight UI libraries requiring third-party tools for routing and forms, Angular is an "all-in-one" opinionated framework providing built-in routing, HTTP client, forms validation, and dependency injection out of the box.',
      km: 'ខណៈពេល React និង Vue ជា UI Library ដែលត្រូវរើសបណ្ណាល័យខាងក្រៅសម្រាប់ Routing/Forms, Angular ជា Framework ពេញលេញ "All-in-One" ដែលមានភ្ជាប់មកជាមួយ Routing, HTTP Client, Form Validation, និង Dependency Injection។'
    },
    tutorial: {
      en: 'Angular enforces standard conventions across teams. Whether you open an Angular project in Cambodia or Google US, the folder layout, service architecture, and dependency injection patterns remain consistent.',
      km: 'Angular បង្កើតស្តង់ដាររួមមួយសម្រាប់ក្រុមការងារ។ មិនថានៅកម្ពុជា ឬ Google អាមេរិក គម្រោង Angular មានរចនាសម្ព័ន្ធ Folder និង Service ដូចៗគ្នា។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <h3 class="text-sm font-bold text-red-400">Framework Comparison</h3>
    <div class="overflow-x-auto">
      <table class="w-full text-left text-xs border-collapse">
        <thead>
          <tr class="border-b border-slate-800 text-slate-400">
            <th class="p-2">Feature</th>
            <th class="p-2 text-red-400">Angular</th>
            <th class="p-2 text-sky-400">React</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/60 text-slate-300">
          <tr>
            <td class="p-2 font-mono">Type</td>
            <td class="p-2 text-emerald-400 font-bold">Full Framework</td>
            <td class="p-2">UI Library</td>
          </tr>
          <tr>
            <td class="p-2 font-mono">Language</td>
            <td class="p-2">TypeScript Default</td>
            <td class="p-2">JS / TS Optional</td>
          </tr>
          <tr>
            <td class="p-2 font-mono">HTTP & Router</td>
            <td class="p-2 text-emerald-400">Built-in Module</td>
            <td class="p-2">Third-party libs</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Standardized Enterprise Teams', km: 'ការគ្រប់គ្រងក្រុមការងារស្តង់ដារ' },
      description: {
        en: 'Large enterprise companies choose Angular because new developers can immediately understand any existing codebase thanks to strict framework conventions.',
        km: 'ក្រុមហ៊ុនធំៗជ្រើសរើស Angular ព្រោះ Developer ថ្មីអាចយល់ពីកូដចាស់បានភ្លាមៗតាមរយៈស្តង់ដារច្បាស់លាស់។'
      }
    },
    practiceExercise: {
      question: { en: 'Is Angular a UI library or a complete full-featured framework?', km: 'តើ Angular ជា UI Library ឬជា Complete Full-featured Framework?' },
      solution: 'Full-featured Framework'
    },
    quizQuestions: [
      {
        id: 'q-ang-m1-2',
        question: { en: 'Which feature comes built directly into Angular without needing third-party libraries?', km: 'តើ Feature មួយណាមានភ្ជាប់ស្រាប់ក្នុង Angular ដោយមិនបាច់ដំឡើង Library ខាងក្រៅ?' },
        options: [
          { id: '1', text: { en: 'Routing, HTTP Client, and Reactive Forms', km: 'Routing, HTTP Client, និង Reactive Forms' }, isCorrect: true },
          { id: '2', text: { en: 'None, everything requires third-party plugins', km: 'គ្មានទេ, គ្រប់យ៉ាងទាមទារ Plugin ខាងក្រៅ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Angular includes built-in packages for routing, forms, and HTTP requests.',
          km: 'Angular រួមបញ្ចូល Module ផ្លូវការសម្រាប់ Routing, Forms, និង HTTP។'
        }
      }
    ]
  },
  {
    id: 'ang-m1-l3',
    slug: 'angular-cli-and-project-structure',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: { en: '1.3 Setting Up Angular CLI & Project Structure', km: '១.៣ ការដំឡើង Angular CLI & រចនាសម្ព័ន្ធ Project' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'The Angular CLI (`@angular/cli`) is the official command-line tool for scaffolding, developing, testing, and building Angular applications. Key commands include `ng new app-name` and `ng serve`.',
      km: 'Angular CLI (`@angular/cli`) គឺជា Command Line Tool ផ្លូវការសម្រាប់បង្កើត, អភិវឌ្ឍ, តេស្ត, និង Build កម្មវិធី Angular។ Command សំខាន់ៗរួមមាន `ng new app-name` និង `ng serve`។'
    },
    tutorial: {
      en: 'Install CLI: `npm install -g @angular/cli`. Create project: `ng new my-app`. Start dev server: `ng serve --open`. Inspect `src/app/app.component.ts` as the entry component.',
      km: 'ដំឡើង CLI: `npm install -g @angular/cli`។ បង្កើត Project: `ng new my-app`។ ដំនើរការ Server: `ng serve --open`។ ពិនិត្យមើល `src/app/app.component.ts` ជា Entry point។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2 font-mono text-xs">
      <div class="text-pink-400 font-bold">📂 Angular Project Structure</div>
      <pre class="text-slate-300 overflow-x-auto"><code>my-angular-app/
├── src/
│   ├── app/
│   │   ├── app.component.ts      (TypeScript Logic)
│   │   ├── app.component.html    (HTML Template)
│   │   ├── app.component.css     (Component Styles)
│   │   └── app.config.ts         (App Providers/Routes)
│   ├── main.ts                   (App Bootstrapper)
│   └── index.html                (Root HTML Shell)
├── angular.json                  (CLI Config)
└── package.json                  (Dependencies)</code></pre>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'CLI Generator Productivity', km: 'ភាពលឿនរហ័សតាម Angular CLI' },
      description: {
        en: 'Instead of manually creating `.ts`, `.html`, and `.css` files, developers use `ng generate component name` to generate boilerplate instantly.',
        km: 'ជំនួសឲ្យការបង្កើតឯកសារ .ts, .html, .css ដោយដៃ Developer ប្រើ `ng generate component name` បង្កើតកូដគ្រឹះភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: { en: 'Which CLI command builds and serves an Angular app with live reload?', km: 'តើ CLI Command មួយណាសម្រាប់ Build និងរត់ Angular App ជាមួយ Live Reload?' },
      solution: 'ng serve'
    },
    quizQuestions: [
      {
        id: 'q-ang-m1-3',
        question: { en: 'What is the command to create a brand new Angular project via CLI?', km: 'តើ Command អ្វីសម្រាប់បង្កើត Angular Project ថ្មីតាម CLI?' },
        options: [
          { id: '1', text: { en: 'ng new project-name', km: 'ng new project-name' }, isCorrect: true },
          { id: '2', text: { en: 'angular create project-name', km: 'angular create project-name' }, isCorrect: false }
        ],
        explanation: {
          en: '`ng new <name>` is the standard Angular CLI command.',
          km: '`ng new <name>` គឺជា Command ផ្លូវការរបស់ Angular CLI។'
        }
      }
    ]
  },

  // Module 2: TypeScript Essentials for Angular
  {
    id: 'ang-m2-l1',
    slug: 'typescript-why-angular',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: { en: '2.1 Why Angular Requires TypeScript', km: '២.១ ហេតុអ្វី Angular ទាមទារ TypeScript' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Angular is built ground-up with TypeScript. Type annotations catch bugs during development, enable powerful IDE auto-completion, and simplify refactoring across large codebases.',
      km: 'Angular ត្រូវបានបង្កើតឡើងពីឬសគល់ជាមួយ TypeScript។ ការកំណត់ Type ជួយចាប់ Error ពេលកំពុងសរសេរកូដ ផ្តល់ Auto-completion ក្នុង IDE និងងាយស្រួល Refactor កូដ។'
    },
    tutorial: {
      en: 'In Angular classes, state properties and method arguments have explicit types: `userName: string = "Dara"; userAge: number = 24;`.',
      km: 'ក្នុង Class នៃ Angular អថេរ និង Arguments មាន Type ច្បាស់លាស់៖ `userName: string = "Dara"; userAge: number = 24;`។'
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
        <span class="text-red-400 font-bold block mb-2">TypeScript Class Property</span>
        <pre class="text-slate-300"><code>export class UserProfile {
  id: number = 101;
  name: string = "Dara";
  isVerified: boolean = true;

  getBadge(): string {
    return this.isVerified ? "✅ Verified" : "⏳ Pending";
  }
}</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 p-3 rounded-xl">
        <span class="text-emerald-400 font-bold block mb-2">Rendered Output</span>
        <div class="bg-slate-800 p-3 rounded-lg space-y-1">
          <p class="text-white font-bold text-sm">User: Dara (ID: 101)</p>
          <p class="text-emerald-400 text-xs">Badge: ✅ Verified</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Compile-time Safety', km: 'សុវត្ថិភាពទិន្នន័យពេល Compile' },
      description: {
        en: 'If an API returns a string where a number is expected, TypeScript triggers a build warning before code reaches production browsers.',
        km: 'បើ API ផ្ញើ String មកជំនួស លេខ TypeScript នឹងប្រាប់ Warning ភ្លាមៗ មុនពេល Publish ទៅកាន់ User។'
      }
    },
    practiceExercise: {
      question: { en: 'Define a TypeScript class property "title" as a string with value "Dashboard".', km: 'ប្រកាស Class Property "title" ជា string ដែលមានតម្លៃ "Dashboard"។' },
      solution: 'title: string = "Dashboard";'
    },
    quizQuestions: [
      {
        id: 'q-ang-m2-1',
        question: { en: 'At what stage does TypeScript detect type mismatch errors?', km: 'តើ TypeScript រកឃើញកំហុស Type Mismatch នៅដំណាក់កាលណា?' },
        options: [
          { id: '1', text: { en: 'During compile time / development in IDE', km: 'ពេល Compile / កំពុងសរសេរកូដក្នុង IDE' }, isCorrect: true },
          { id: '2', text: { en: 'Only after user clicks a button in production', km: 'លុះត្រាតែ User ចុចប៊ូតុងលើ Production' }, isCorrect: false }
        ],
        explanation: {
          en: 'TypeScript validates types statically at compile time.',
          km: 'TypeScript ពិនិត្យមើល Type ពេល Compile មុនពេលកូដរត់។'
        }
      }
    ]
  },
  {
    id: 'ang-m2-l2',
    slug: 'decorators-explained-simply',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: { en: '2.2 Decorators Explained (@Component, @Injectable)', km: '២.២ ស្វែងយល់ពី Decorators (@Component, @Injectable)' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Decorators are special functions prefixed with `@` that attach metadata to TypeScript classes. `@Component()` tells Angular that a class is a UI component, while `@Injectable()` marks a class as a service.',
      km: 'Decorators គឺជា Function ពិសេសដែលមានសញ្ញា `@` នៅខាងមុខ សម្រាប់បន្ថែម Metadata ទៅកាន់ TypeScript Class។ `@Component()` ប្រាប់ Angular ថា Class នោះជា UI Component ឯ `@Injectable()` សម្គាល់ Class ជា Service។'
    },
    tutorial: {
      en: 'Syntax: `@Component({ selector: "app-header", template: "<h1>Header</h1>" }) export class HeaderComponent {}`.',
      km: 'ទម្រង់សរសេរ៖ `@Component({ selector: "app-header", template: "<h1>Header</h1>" }) export class HeaderComponent {}`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl font-mono text-xs">
      <div class="text-pink-400 font-bold mb-2">@Component Decorator Metadata</div>
      <pre class="text-slate-300 overflow-x-auto"><code>import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  heroTitle = 'Welcome to Angular Decorators';
}</code></pre>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Metadata Configuration', km: 'ការកំណត់ Metadata' },
      description: {
        en: 'Decorators instruct the Angular compiler how to wire HTML templates, styles, and dependencies to a plain TypeScript class automatically.',
        km: 'Decorators ប្រាប់ Angular Compiler ពីរបៀបភ្ជាប់ HTML Template និង Styles ទៅកាន់ Class ដោយស្វ័យប្រវត្តិ។'
      }
    },
    practiceExercise: {
      question: { en: 'Which decorator marks an Angular class as a injectable service?', km: 'តើ Decorator មួយណាដែលកំណត់ Class ឱ្យទៅជា Injectable Service?' },
      solution: '@Injectable()'
    },
    quizQuestions: [
      {
        id: 'q-ang-m2-2',
        question: { en: 'What symbol is used before a decorator name in Angular?', km: 'តើសញ្ញាអ្វីនៅខាងមុខឈ្មោះ Decorator ក្នុង Angular?' },
        options: [
          { id: '1', text: { en: '@', km: '@' }, isCorrect: true },
          { id: '2', text: { en: '#', km: '#' }, isCorrect: false }
        ],
        explanation: {
          en: 'Decorators always start with the `@` symbol in TypeScript.',
          km: 'Decorators តែងតែចាប់ផ្តើមដោយសញ្ញា `@`។'
        }
      }
    ]
  },
  {
    id: 'ang-m2-l3',
    slug: 'interfaces-and-types-for-angular',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: { en: '2.3 Interfaces & Data Models in Angular', km: '២.៣ Interfaces & Data Models ក្នុង Angular' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Interfaces define the blueprint/shape of data objects passed around Angular components and API calls. For example, `export interface Task { id: number; title: string; completed: boolean; }`.',
      km: 'Interfaces កំណត់ទ្រង់ទ្រាយ (Shape) នៃ Data Object សម្រាប់ប្រើប្រាស់ក្នុង Component និង API Calls។ ឧទាហរណ៍៖ `export interface Task { id: number; title: string; completed: boolean; }`។'
    },
    tutorial: {
      en: 'Using interfaces ensures template safety. In your HTML, Angular knows `task.title` exists, preventing runtime undefined property crashes.',
      km: 'ការប្រើ Interface ធានាសុវត្ថិភាពទិន្នន័យក្នុង HTML Template ការពារកុំឱ្យកើត Error Undefined Property ពេលរត់។'
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
        <span class="text-pink-400 font-bold block mb-2">Interface Model</span>
        <pre class="text-slate-300"><code>export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

// In Component
item: Product = {
  id: 1,
  name: "Angular Laptop",
  price: 999,
  inStock: true
};</code></pre>
      </div>

      <div class="bg-slate-900 border border-slate-800 p-3 rounded-xl">
        <span class="text-emerald-400 font-bold block mb-2">Typed Rendered Card</span>
        <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
          <p class="text-white font-bold">Angular Laptop</p>
          <p class="text-slate-400">$999 USD</p>
          <span class="text-xs text-emerald-400">In Stock</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Strong API Contracts', km: 'កិច្ចសន្យាប្រព័ន្ធ API' },
      description: {
        en: 'Frontend and Backend teams agree on TypeScript interfaces so JSON responses map cleanly to component data properties.',
        km: 'ក្រុម Frontend និង Backend ប្រើ Interface ដើម្បីរៀបចំទម្រង់ JSON ឱ្យត្រូវគ្នាយ៉ាងក្រិតក្រម។'
      }
    },
    practiceExercise: {
      question: { en: 'Create a TypeScript interface Student with properties id (number) and name (string).', km: 'បង្កើត TypeScript Interface ឈ្មោះ Student មាន id (number) និង name (string)។' },
      solution: 'export interface Student { id: number; name: string; }'
    },
    quizQuestions: [
      {
        id: 'q-ang-m2-3',
        question: { en: 'Does a TypeScript interface generate compiled JavaScript code in production output?', km: 'តើ TypeScript Interface បង្កើតកូដ JavaScript ក្នុង Output Final ដែរឬទេ?' },
        options: [
          { id: '1', text: { en: 'No, interfaces are completely stripped during compilation', km: 'ទេ, Interface ត្រូវលុបចេញទាំងស្រុងពេល Compile' }, isCorrect: true },
          { id: '2', text: { en: 'Yes, as a JavaScript function', km: 'បាទ, បង្កើតជា JavaScript Function' }, isCorrect: false }
        ],
        explanation: {
          en: 'TypeScript interfaces exist solely at compile time for type checking.',
          km: 'Interface មានប្រយោជន៍តែពេល Compile ដើម្បីពិនិត្យ Type ប៉ុណ្ណោះ។'
        }
      }
    ]
  },

  // Module 3: Components
  {
    id: 'ang-m3-l1',
    slug: 'anatomy-of-a-component',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: { en: '3.1 Anatomy of a Component (.ts, .html, .css)', km: '៣.១ រចនាសម្ព័ន្ធ Component (.ts, .html, .css)' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'An Angular Component consists of three key files: the `.ts` class holding reactive logic, the `.html` template defining layout, and the `.css` file holding scoped component styles.',
      km: 'Angular Component បង្កើតឡើងដោយឯកសារចម្បង ៣៖ ឯកសារ `.ts` ផ្ទុក Logic, ឯកសារ `.html` កំណត់ Layout, និងឯកសារ `.css` កំណត់ Styling ដែលមាន Scope ដាច់ដោយឡែក។'
    },
    tutorial: {
      en: 'In standalone Angular components, you specify metadata inside `@Component({ selector: "app-card", templateUrl: "./card.component.html", styleUrls: ["./card.component.css"] })`.',
      km: 'ក្នុង Standalone Angular Component metadata ត្រូវកំណត់តាម `@Component({ selector: "app-card", templateUrl: "./card.component.html", styleUrls: ["./card.component.css"] })`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3">
      <div class="flex justify-between items-center border-b border-slate-800 pb-2">
        <span class="text-red-400 font-bold font-mono text-xs">user-profile.component.ts</span>
        <span class="bg-red-500/20 text-red-300 text-[10px] px-2 py-0.5 rounded">Component Class</span>
      </div>
      <pre class="text-xs text-slate-300 font-mono overflow-x-auto"><code>@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  username: string = 'Sophea';
  role: string = 'Frontend Engineer';
}</code></pre>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Encapsulated Component Architecture', km: 'ការបែងចែកកូដ Component ជាផ្នែកៗ' },
      description: {
        en: 'Keeping HTML templates and CSS styles in separate files keeps large enterprise UI views organized and easy to maintain.',
        km: 'ការបំបែក HTML និង CSS ជួយឱ្យកូដ UI ធំៗមានរបៀបរៀបរយ និងងាយស្រួលកែប្រែ។'
      }
    },
    practiceExercise: {
      question: { en: 'Which property in @Component decorator specifies the custom HTML element tag name?', km: 'តើ Property មួយណា ក្នុង @Component ដែលកំណត់ ឈ្មោះ HTML Tag ពិសេស?' },
      solution: 'selector'
    },
    quizQuestions: [
      {
        id: 'q-ang-m3-1',
        question: { en: 'What does the selector property in @Component define?', km: 'តើ selector property ក្នុង @Component កំណត់អ្វី?' },
        options: [
          { id: '1', text: { en: 'The custom HTML element tag used to instantiate the component in templates', km: 'ឈ្មោះ HTML Element Tag ដែលត្រូវយកទៅប្រើក្នុង Template' }, isCorrect: true },
          { id: '2', text: { en: 'The database table name', km: 'ឈ្មោះ Table ក្នុង Database' }, isCorrect: false }
        ],
        explanation: {
          en: 'For example, selector "app-header" means `<app-header></app-header>`.',
          km: 'ឧទាហរណ៍ selector "app-header" ត្រូវប្រើប្រាស់ជា `<app-header></app-header>`។'
        }
      }
    ]
  },
  {
    id: 'ang-m3-l2',
    slug: 'creating-components-with-cli',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: { en: '3.2 Generating Components with Angular CLI', km: '៣.២ ការបង្កើត Component ដោយប្រើ Angular CLI' },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Instead of creating `.ts`, `.html`, and `.css` files manually, use `ng generate component component-name` (or shorthand `ng g c component-name`).',
      km: 'ជំនួសឲ្យការបង្កើតឯកសារ `.ts`, `.html`, និង `.css` ដោយដៃ អ្នកអាចប្រើ `ng generate component component-name` (ឬពាក្យកាត់ `ng g c component-name`)។'
    },
    tutorial: {
      en: 'Running `ng g c components/header` automatically creates the folder structure, component class, HTML template, CSS style file, and registers imports.',
      km: 'ការរត់ `ng g c components/header` នឹងបង្កើត Folder, TypeScript Class, HTML Template, និង CSS File ដោយស្វ័យប្រវត្តិ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 p-6 font-sans">
  <div class="max-w-xl mx-auto space-y-4">
    <div class="bg-slate-900 border border-slate-800 p-4 rounded-xl font-mono text-xs space-y-2">
      <div class="text-pink-400 font-bold">Terminal CLI Execution</div>
      <div class="bg-slate-950 p-3 rounded-lg border border-slate-800 text-emerald-400">
        $ ng g c components/user-card
      </div>
      <div class="text-slate-400 text-[11px] space-y-1">
        <p>CREATE src/app/components/user-card/user-card.component.css (0 bytes)</p>
        <p>CREATE src/app/components/user-card/user-card.component.html (23 bytes)</p>
        <p>CREATE src/app/components/user-card/user-card.component.ts (290 bytes)</p>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'CLI Speed & Consistency', km: 'ល្បឿន និងភាពត្រឹមត្រូវតាម CLI' },
      description: {
        en: 'CLI scaffolding prevents typos in filenames, decorators, or class exports across developer environments.',
        km: 'ការប្រើ CLI ការពារកុំឱ្យច្រឡំ ឬសរសេរខុសឈ្មោះ File ឬ Class ក្នុងក្រុមការងារ។'
      }
    },
    practiceExercise: {
      question: { en: 'What is the shorthand CLI command to generate a component named "navbar"?', km: 'តើ Command កាត់ CLI អ្វីសម្រាប់បង្កើត Component ឈ្មោះ "navbar"?' },
      solution: 'ng g c navbar'
    },
    quizQuestions: [
      {
        id: 'q-ang-m3-2',
        question: { en: 'What does the CLI command "ng g c footer" stand for?', km: 'តើ Command "ng g c footer" មកពីពាក្យពេញអ្វី?' },
        options: [
          { id: '1', text: { en: 'ng generate component footer', km: 'ng generate component footer' }, isCorrect: true },
          { id: '2', text: { en: 'ng get class footer', km: 'ng get class footer' }, isCorrect: false }
        ],
        explanation: {
          en: '`g` is short for generate and `c` is short for component.',
          km: '`g` មកពី generate ហើយ `c` មកពី component។'
        }
      }
    ]
  },
  {
    id: 'ang-m3-l3',
    slug: 'component-selectors-and-nesting',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: { en: '3.3 Component Selectors & Nesting Components', km: '៣.៣ Component Selectors & ការដាក់ Component បញ្ចូលគ្នា' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Components are modular UI building blocks. You nest child components inside parent component templates by inserting their custom selector tags (e.g., `<app-navbar></app-navbar>`).',
      km: 'Component គឺជាដុំ UI ដើរតួជាប្លុក។ អ្នកអាចដាក់ Child Component បញ្ចូលក្នុង Parent Component Template តាមរយៈ Custom Selector Tag របស់វា (ដូចជា `<app-navbar></app-navbar>`)។'
    },
    tutorial: {
      en: 'Parent template (`app.component.html`): `<app-header></app-header> <main><app-user-card></app-user-card></main> <app-footer></app-footer>`.',
      km: 'Parent template (`app.component.html`): `<app-header></app-header> <main><app-user-card></app-user-card></main> <app-footer></app-footer>`។'
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
      <div class="text-sky-400 font-bold">Parent Template (app.component.html)</div>
      <pre class="text-slate-300 overflow-x-auto"><code>&lt;div class="dashboard-shell"&gt;
  &lt;!-- Child Component Selector --&gt;
  &lt;app-navbar&gt;&lt;/app-navbar&gt;

  &lt;main class="content-area"&gt;
    &lt;app-task-list&gt;&lt;/app-task-list&gt;
  &lt;/main&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="border border-emerald-500/30 bg-emerald-950/20 p-3 rounded-lg text-xs space-y-1">
      <span class="text-emerald-400 font-bold">Rendered Tree Result</span>
      <p class="text-slate-300">The browser renders navbar UI and task-list UI inside the main shell seamlessly!</p>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Reusability across views', km: 'ការយក Component ទៅប្រើឡើងវិញ' },
      description: {
        en: 'A single `<app-user-avatar>` component can be reused across comments, header navigation, and profile pages.',
        km: 'Component `<app-user-avatar>` តែមួយអាចយកទៅប្រើឡើងវិញក្នុង Comment, Header, និង Profile Page។'
      }
    },
    practiceExercise: {
      question: { en: 'If a child component selector is "app-alert", how do you embed it in HTML?', km: 'បើ Selector របស់ Child component គឺ "app-alert" តើអ្នកដាក់វាក្នុង HTML ដូចម្តេច?' },
      solution: '<app-alert></app-alert>'
    },
    quizQuestions: [
      {
        id: 'q-ang-m3-3',
        question: { en: 'How do parent components embed child components in Angular?', km: 'តើ Parent component ដាក់ Child component បញ្ចូលគ្នាក្នុង Angular ដោយរបៀបណា?' },
        options: [
          { id: '1', text: { en: 'By placing the child custom selector tag in parent template', km: 'ដោយ ដាក់ Child custom selector tag ក្នុង Parent template' }, isCorrect: true },
          { id: '2', text: { en: 'By calling a global JavaScript render function', km: 'ដោយ ហៅ Global JavaScript function' }, isCorrect: false }
        ],
        explanation: {
          en: 'Inserting selector tags `<app-child></app-child>` mounts child components.',
          km: 'ការដាក់ Tag `<app-child></app-child>` នឹង Mount child component លើអេក្រង់។'
        }
      }
    ]
  }
];
