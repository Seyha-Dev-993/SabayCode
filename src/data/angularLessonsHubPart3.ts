import { FrontendLesson } from '../types/frontendClass';

export const ANGULAR_HUB_LESSONS_PART3: FrontendLesson[] = [
  // Module 9 — RxJS & Observables
  {
    id: 'ng-hub-9-1',
    slug: 'what-is-an-observable',
    moduleNumber: 9,
    lessonNumberInModule: 1,
    title: {
      en: '9.1 What an Observable Is (Compared to a Promise)',
      km: '9.1 អ្វីទៅជា Observable (ប្រៀបធៀបជាមួយ Promise)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'An Observable in RxJS is a stream that emits multiple data values over time asynchronously. While a Promise resolves only once with a single value, an Observable can emit 0, 1, or many values over time until completion.',
      km: 'Observable ក្នុង RxJS គឺជា Data Stream ដែលអាចបញ្ជូន Data ជាច្រើនលើកតាមពេលវេលាផ្សេងៗគ្នាយ៉ាងទន់ភ្លន់។ ខុសពី Promise ដែលធ្វើការ Resolve បានតែម្តងគត់ ឯ Observable អាចបញ្ជូនតម្លៃ ០, ១ ឬរាប់សិបដងតាមតម្រូវការ។'
    },
    tutorial: {
      en: 'Comparison:\n- Promise: Single async result, non-cancellable.\n- Observable: Multiple values stream over time, lazy (doesn\'t execute until `.subscribe()`), cancellable via `.unsubscribe()`.',
      km: 'ការប្រៀបធៀប ៖\n- Promise ៖ ផ្តល់ផលម្តងគត់ មិនអាច Cancel បានទេ\n- Observable ៖ បញ្ជូន Data ជារឿយៗ មិនរត់ទេលុះត្រាតែមានការ `.subscribe()` និងអាច Cancel បានដោយហៅ `.unsubscribe()`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .stream { background: #020617; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; color: #38bdf8; }
  </style>
</head>
<body>
  <h3>RxJS Observable Data Stream</h3>
  <div class="stream">
    Observable Emission Timeline:<br>
    ──(Value 1)─────(Value 2)─────(Value 3)────(COMPLETE)─>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Continuous Event Streaming', km: 'ការចាប់ Event ដែលកើតឡើងបន្តបន្ទាប់' },
      description: {
        en: 'Ideal for handling live WebSockets, continuous search input keystrokes, button clicks, and location tracking.',
        km: 'ល្អបំផុតសម្រាប់ WebSockets, ការវាយអក្សរ Search, Button Clicks និង GPS Location tracking។'
      }
    },
    practiceExercise: {
      question: { en: 'Can an Observable emit multiple data items over time before completing?', km: 'តើ Observable អាចបញ្ជូន Data ជាច្រើនលើកមុនពេល Complete ដែរឬទេ?' },
      solution: 'Yes'
    },
    quizQuestions: [
      {
        id: 'q-ng-9-1',
        question: { en: 'What key feature differentiates Observables from Promises?', km: 'តើចំណុចពិសេសអ្វីដែលធ្វើឲ្យ Observables ខុសពី Promises?' },
        options: [
          { id: 'a', text: { en: 'Observables can emit multiple values over time and are cancellable', km: 'Observables អាចបញ្ជូន Data ជាច្រើនដង និងអាច Cancel បាន' }, isCorrect: true },
          { id: 'b', text: { en: 'Promises can emit multiple values', km: 'Promises បញ្ជូនបានច្រើនដង' }, isCorrect: false }
        ],
        explanation: { en: 'Observables handle multiple values over time and can be unsubscribed.', km: 'Observables អាចបញ្ជូន Data ច្រើនដង និង Cancel បាន។' }
      }
    ]
  },
  {
    id: 'ng-hub-9-2',
    slug: 'subscribing-and-unsubscribing',
    moduleNumber: 9,
    lessonNumberInModule: 2,
    title: {
      en: '9.2 Subscribing to Observables (& Unsubscribing)',
      km: '9.2 ការ Subscribe និង Unsubscribe លើ Observables'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Observables are lazy and execute only when subscribed to via `.subscribe()`. Long-lived subscriptions must be unsubscribed when a component is destroyed (e.g. using `Subscription.unsubscribe()`, `takeUntilDestroyed()`, or the `async` pipe) to prevent memory leaks.',
      km: 'Observables ជាប្រភេទ Lazy ដែលដំណើរការលុះត្រាតែមានការហៅ `.subscribe()`។ រាល់ Long-lived Subscriptions ត្រូវតែ Unsubscribe វិញពេល Component ត្រូវលុបចោល (ដោយប្រើ `.unsubscribe()`, `takeUntilDestroyed()`, ឬ `async` pipe) ដើម្បីការពារ Memory Leak។'
    },
    tutorial: {
      en: 'Async Pipe Best Practice in HTML:\n`<div *ngFor="let task of tasks$ | async">{{ task.title }}</div>`\n\n(The `async` pipe automatically subscribes and unsubscribes!)',
      km: 'Async Pipe Best Practice ក្នុង HTML ៖\n`<div *ngFor="let task of tasks$ | async">{{ task.title }}</div>`\n\n(`async` pipe ធ្វើការ Subscribe និង Unsubscribe ដោយស្វ័យប្រវត្តិ!)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .pipe { color: #f43f5e; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Automatic Subscription via Async Pipe</h3>
  <p>HTML Template:</p>
  <div style="background:#0f172a; padding:12px; border-radius:8px; border:1px solid #1e293b;">
    &lt;ul *ngFor="let user of users$ <span class="pipe">| async</span>"&gt;<br>
    &nbsp;&nbsp;&lt;li&gt;{{ user.name }}&lt;/li&gt;<br>
    &lt;/ul&gt;
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Preventing Memory Leaks', km: 'ការការពារ Memory Leaks ក្នុង Browser' },
      description: {
        en: 'Unsubscribing prevents background timers or RxJS event listeners from consuming browser CPU and RAM after views close.',
        km: 'ជួយទប់ស្កាត់ Timer ឬ RxJS event listener កុំឲ្យបន្តស៊ី CPU និង RAM របស់ Browser ពេល User បិទ Page។'
      }
    },
    practiceExercise: {
      question: { en: 'Which Angular template pipe automatically manages subscription lifecycle?', km: 'តើ Angular template pipe មួយណាដែលគ្រប់គ្រង Subscription lifecycle ស្វ័យប្រវត្តិ?' },
      solution: 'async pipe (| async)'
    },
    quizQuestions: [
      {
        id: 'q-ng-9-2',
        question: { en: 'Why is it critical to unsubscribe from long-lived Observables?', km: 'ហេតុអ្វីបានជាចាំបាច់ត្រូវ Unsubscribe ពី Long-lived Observables?' },
        options: [
          { id: 'a', text: { en: 'To prevent memory leaks and unexpected background callbacks', km: 'ដើម្បីការពារ Memory Leaks និងរំខានដល់ Background Callbacks' }, isCorrect: true },
          { id: 'b', text: { en: 'To force the browser to restart', km: 'ដើម្បី Restart Browser' }, isCorrect: false }
        ],
        explanation: { en: 'Unsubscribing prevents memory leaks.', km: 'Unsubscribe ការពារ Memory Leak។' }
      }
    ]
  },
  {
    id: 'ng-hub-9-3',
    slug: 'common-rxjs-operators',
    moduleNumber: 9,
    lessonNumberInModule: 3,
    title: {
      en: '9.3 Common RxJS Operators (map, filter, switchMap)',
      km: '9.3 RxJS Operators សំខាន់ៗ (map, filter, switchMap)'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'RxJS operators inside `.pipe()` transform and compose observable streams. `map` transforms emitted items, `filter` suppresses items matching a predicate, and `switchMap` cancels previous pending requests when a new value arrives.',
      km: 'RxJS operators ប្រើក្នុង `.pipe()` សម្រាប់ Transform និងរៀបចំ Data Streams។ `map` ប្រើសម្រាប់បំប្លែង Data, `filter` ប្រើសម្រាប់ចោះយកតែ Data ដែលត្រូវលក្ខខណ្ឌ, និង `switchMap` ប្រើសម្រាប់ Cancel Request ចាស់ដែលមិនទាន់រត់រួចពេលមាន Request ថ្មីមកដល់។'
    },
    tutorial: {
      en: 'RxJS Operators Pipeline:\n```ts\nthis.searchControl.valueChanges.pipe(\n  debounceTime(300),\n  filter(term => term.length > 2),\n  switchMap(term => this.api.search(term))\n).subscribe(results => this.searchResults = results);\n```',
      km: 'RxJS Operators Pipeline ៖\n```ts\nthis.searchControl.valueChanges.pipe(\n  debounceTime(300),\n  filter(term => term.length > 2),\n  switchMap(term => this.api.search(term))\n).subscribe(results => this.searchResults = results);\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .op { color: #a855f7; font-weight: bold; }
  </style>
</head>
<body>
  <h3>RxJS Search Pipeline (.pipe)</h3>
  <pre style="background:#020617; padding:14px; border-radius:8px; border:1px solid #1e293b;">
search$.pipe(
  <span class="op">filter</span>(text => text !== ''),
  <span class="op">switchMap</span>(term => http.get('/search?q=' + term)),
  <span class="op">map</span>(res => res.data)
)
  </pre>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Auto-Complete Search Cancellation', km: 'ការ Cancel Request ចាស់ក្នុង Auto-complete Search' },
      description: {
        en: 'Using `switchMap` in search inputs automatically cancels outdated HTTP requests as the user types new characters.',
        km: '`switchMap` ក្នុង Search Input ធ្វើការ Cancel Request លើកមុនស្វ័យប្រវត្តពេល User វាយអក្សរថ្មីបន្ថែម។'
      }
    },
    practiceExercise: {
      question: { en: 'Which operator cancels previous pending inner HTTP Observables when a new item is emitted?', km: 'តើ operator មួយណាដែល Cancel Request ចាស់ពេលមាន Data ថ្មីចូលមក?' },
      solution: 'switchMap'
    },
    quizQuestions: [
      {
        id: 'q-ng-9-3',
        question: { en: 'Which RxJS operator transforms each value emitted by an observable stream?', km: 'តើ RxJS operator មួយណាដែលបំប្លែង (Transform) តម្លៃក្នុង Stream?' },
        options: [
          { id: 'a', text: { en: 'map()', km: 'map()' }, isCorrect: true },
          { id: 'b', text: { en: 'subscribe()', km: 'subscribe()' }, isCorrect: false }
        ],
        explanation: { en: '`map()` transforms emitted data items.', km: '`map()` ប្រើសម្រាប់បំប្លែងទិន្នន័យ។' }
      }
    ]
  },

  // Module 10 — Routing & Navigation
  {
    id: 'ng-hub-10-1',
    slug: 'setting-up-routermodule-and-routes',
    moduleNumber: 10,
    lessonNumberInModule: 1,
    title: {
      en: '10.1 Setting Up Routes & Routes Array',
      km: '10.1 ការកំណត់ Routes & Routes Array ក្នុង Angular'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Angular Routing connects URL paths to specific page components. You define an array of `Routes` objects specifying `path` and `component` (e.g., `{ path: \'tasks\', component: TaskListComponent }`).',
      km: 'Angular Routing ភ្ជាប់ URL Path ទៅកាន់ Page Component។ អ្នកប្រកាស Array នៃ `Routes` ដោយកំណត់ `path` និង `component` (ដូចជា `{ path: \'tasks\', component: TaskListComponent }`)។'
    },
    tutorial: {
      en: 'Routes Configuration:\n```ts\nexport const routes: Routes = [\n  { path: "", redirectTo: "home", pathMatch: "full" },\n  { path: "home", component: HomeComponent },\n  { path: "tasks", component: TaskListComponent },\n  { path: "**", component: NotFoundComponent }\n];\n```',
      km: 'Routes Configuration ៖\n```ts\nexport const routes: Routes = [\n  { path: "", redirectTo: "home", pathMatch: "full" },\n  { path: "home", component: HomeComponent },\n  { path: "tasks", component: TaskListComponent },\n  { path: "**", component: NotFoundComponent }\n];\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .route { background: #0f172a; border-left: 4px solid #38bdf8; padding: 10px; margin-bottom: 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <h3>Angular Routes Table</h3>
  <div class="route">/home ──> HomeComponent</div>
  <div class="route">/tasks ──> TaskListComponent</div>
  <div class="route">/tasks/:id ──> TaskDetailComponent</div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Multi-page Single Page App Navigation', km: 'ការរៀបចំទំព័រផ្លាស់ប្តូរក្នុង SPA' },
      description: {
        en: 'Enables users to bookmark deep links like `/dashboard` or `/profile` and navigate without reloading the browser.',
        km: 'ជួយឲ្យ User អាចចម្លង ឬ Bookmark Link ដូចជា `/dashboard` ឬ `/profile` ហើយដូរទំព័រដោយមិនបាច់ Reload Page។'
      }
    },
    practiceExercise: {
      question: { en: 'What wildcard path match `**` represents in Angular routes configuration?', km: 'តើ Wildcard path `**` ប្រើសម្រាប់អ្វីក្នុង Angular Routes?' },
      solution: '404 Page Not Found route'
    },
    quizQuestions: [
      {
        id: 'q-ng-10-1',
        question: { en: 'Which property in a Route object specifies the URL path string?', km: 'តើ Property មួយណា ក្នុង Route Object ដែលកំណត់ URL Path String?' },
        options: [
          { id: 'a', text: { en: 'path', km: 'path' }, isCorrect: true },
          { id: 'b', text: { en: 'url', km: 'url' }, isCorrect: false }
        ],
        explanation: { en: 'The `path` property specifies URL path.', km: '`path` ប្រើសម្រាប់កំណត់ URL string។' }
      }
    ]
  },
  {
    id: 'ng-hub-10-2',
    slug: 'routerlink-and-router-outlet',
    moduleNumber: 10,
    lessonNumberInModule: 2,
    title: {
      en: '10.2 routerLink & <router-outlet>',
      km: '10.2 routerLink & <router-outlet>'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The `<router-outlet></router-outlet>` tag acts as a placeholder where Angular dynamically renders the component for the active route. `routerLink="/path"` navigates to routes without causing browser page reloads.',
      km: 'Tag `<router-outlet></router-outlet>` ធ្វើសកម្មភាពជា Placeholder សម្រាប់បង្ហាញ Component នៃ Route ដែលកំពុងសកម្ម។ ឯ `routerLink="/path"` ប្រើសម្រាប់ដូរ Route ដោយមិនបាច់ Refresh Browser ឡើយ។'
    },
    tutorial: {
      en: 'Navigation Header HTML:\n`<nav>`\n`  <a routerLink="/home" routerLinkActive="active">Home</a>`\n`  <a routerLink="/tasks" routerLinkActive="active">Tasks</a>`\n`</nav>`\n`<main>`\n`  <router-outlet></router-outlet>`\n`</main>`',
      km: 'Navigation Header HTML ៖\n`<nav>`\n`  <a routerLink="/home" routerLinkActive="active">Home</a>`\n`  <a routerLink="/tasks" routerLinkActive="active">Tasks</a>`\n`</nav>`\n`<main>`\n`  <router-outlet></router-outlet>`\n`</main>`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    nav a { color: #38bdf8; text-decoration: none; margin-right: 14px; font-weight: bold; }
    .outlet { border: 2px dashed #a855f7; padding: 16px; border-radius: 8px; margin-top: 14px; }
  </style>
</head>
<body>
  <nav>
    <a routerLink="/home">Home</a>
    <a routerLink="/tasks">Tasks</a>
  </nav>
  <div class="outlet">
    &lt;router-outlet&gt; Current Route Component Appears Here &lt;/router-outlet&gt;
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Persistent Main Layout Framework', km: 'ការរក្សា Layout ថេរពេលដូរទំព័រ' },
      description: {
        en: 'Keeps main header and sidebar UI elements loaded continuously while changing only the inner page inside `<router-outlet>`.',
        km: 'រក្សា Header និង Sidebar ឲ្យនៅដដែល ហើយដូរតែខ្លឹមសារទំព័រខាងក្នុង `<router-outlet>` ប៉ុណ្ណោះ។'
      }
    },
    practiceExercise: {
      question: { en: 'What HTML tag marks the location where routed component templates are injected?', km: 'តើ HTML Tag មួយណាជាកន្លែងដែល Routed Component ត្រូវបង្ហាញ?' },
      solution: '<router-outlet></router-outlet>'
    },
    quizQuestions: [
      {
        id: 'q-ng-10-2',
        question: { en: 'Why should you use `routerLink` instead of standard `href` in Angular?', km: 'ហេតុអ្វីគួរប្តូរមកប្រើ `routerLink` ជំនួសឲ្យ `href` ក្នុង Angular?' },
        options: [
          { id: 'a', text: { en: '`routerLink` performs client-side SPA navigation without full page reloads', km: '`routerLink` ធ្វើការដូរ Page លឿនដោយមិនបាច់ Reload Page' }, isCorrect: true },
          { id: 'b', text: { en: '`href` is deprecated in HTML5', km: '`href` លែងប្រើក្នុង HTML5' }, isCorrect: false }
        ],
        explanation: { en: '`routerLink` avoids full page reloads.', km: '`routerLink` ដូរទំព័រដោយមិនបាច់ Reload Browser។' }
      }
    ]
  },
  {
    id: 'ng-hub-10-3',
    slug: 'route-parameters-and-activatedroute',
    moduleNumber: 10,
    lessonNumberInModule: 3,
    title: {
      en: '10.3 Route Parameters & ActivatedRoute',
      km: '10.3 Route Parameters & ActivatedRoute'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Dynamic route parameters (like `/tasks/:id`) pass parameters in the URL. Inside the component, inject `ActivatedRoute` and read params via `route.snapshot.paramMap.get(\'id\')` or `route.paramMap` observable stream.',
      km: 'Dynamic route parameters (ដូចជា `/tasks/:id`) បញ្ជូន Parameters តាមរយៈ URL។ ខាងក្នុង Component អ្នកត្រូវ Inject `ActivatedRoute` រួចអានតម្លៃតាម `route.snapshot.paramMap.get(\'id\')` ឬ `route.paramMap` stream។'
    },
    tutorial: {
      en: 'Reading Route Parameter Example:\n```ts\nexport class TaskDetailComponent implements OnInit {\n  private route = inject(ActivatedRoute);\n  taskId!: string;\n\n  ngOnInit() {\n    this.taskId = this.route.snapshot.paramMap.get("id") || "";\n  }\n}\n```',
      km: 'ឧទាហរណ៍ការទាញយក Parameter ៖\n```ts\nexport class TaskDetailComponent implements OnInit {\n  private route = inject(ActivatedRoute);\n  taskId!: string;\n\n  ngOnInit() {\n    this.taskId = this.route.snapshot.paramMap.get("id") || "";\n  }\n}\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .param { background: #0f172a; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; color: #4ade80; }
  </style>
</head>
<body>
  <h3>ActivatedRoute Snapshot Reader</h3>
  <div class="param">
    URL Path: /tasks/104<br>
    Extracted Param 'id': <strong>104</strong>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Detail View Routing', km: 'ការបង្ហាញទំព័រលម្អិតតាម ID' },
      description: {
        en: 'Allows navigating to specific product details `/product/45` or user profiles `/user/seyha` dynamically.',
        km: 'ជួយឲ្យ User អាចបើកមើលព័ត៌មានលម្អិតនៃទំនិញ `/product/45` ឬ Profile សិស្ស `/user/seyha` តាម ID។'
      }
    },
    practiceExercise: {
      question: { en: 'Which Angular service is injected to access current active URL parameters?', km: 'តើ Service មួយណាដែលត្រូវ Inject សម្រាប់អាន Parameter នៃ URL បច្ចុប្បន្ន?' },
      solution: 'ActivatedRoute'
    },
    quizQuestions: [
      {
        id: 'q-ng-10-3',
        question: { en: 'How do you define a route parameter named `id` in route config path?', km: 'តើគេកំណត់ route parameter ឈ្មោះ `id` ក្នុង path config ដូចម្តេច?' },
        options: [
          { id: 'a', text: { en: 'path: "tasks/:id"', km: 'path: "tasks/:id"' }, isCorrect: true },
          { id: 'b', text: { en: 'path: "tasks/{id}"', km: 'path: "tasks/{id}"' }, isCorrect: false }
        ],
        explanation: { en: 'Route parameters are prefixed with a colon `:id`.', km: 'Route parameter ប្រើប្រាស់សញ្ញាចុចពីរ `:id`។' }
      }
    ]
  },
  {
    id: 'ng-hub-10-4',
    slug: 'route-guards-canactivate',
    moduleNumber: 10,
    lessonNumberInModule: 4,
    title: {
      en: '10.4 Route Guards (Functional canActivate)',
      km: '10.4 Route Guards (Functional canActivate)'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Route Guards protect pages from unauthorized access. A functional `canActivateFn` returns `true` to allow navigation or redirects (e.g., using `Router.createUrlTree([\'/login\'])`) if authentication checks fail.',
      km: 'Route Guards ការពារទំព័រមិនឲ្យ User ដែលគ្មានសិទ្ធិចូលមើលបានឡើយ។ Functional `canActivateFn` ផ្តល់ត្រឡប់មកវិញនូវ `true` ដើម្បីអនុញ្ញាត ឬ Redirect ទៅកាន់ `/login` បើ User មិនទាន់ Login។'
    },
    tutorial: {
      en: 'Functional Guard Example:\n```ts\nexport const authGuard: CanActivateFn = (route, state) => {\n  const authService = inject(AuthService);\n  const router = inject(Router);\n  return authService.isLoggedIn() ? true : router.createUrlTree(["/login"]);\n};\n```',
      km: 'Functional Guard Example ៖\n```ts\nexport const authGuard: CanActivateFn = (route, state) => {\n  const authService = inject(AuthService);\n  const router = inject(Router);\n  return authService.isLoggedIn() ? true : router.createUrlTree(["/login"]);\n};\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .guard { background: #450a0a; border: 1px solid #991b1b; padding: 12px; border-radius: 8px; color: #fca5a5; }
  </style>
</head>
<body>
  <h3>canActivate Auth Guard Security</h3>
  <div class="guard">
    🛑 Access Denied to /admin-dashboard!<br>
    Redirecting guest user to /login...
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Securing Private Dashboards', km: 'ការការពារទំព័រផ្ទាល់ខ្លួន និងទំព័រ Admin' },
      description: {
        en: 'Prevents unauthenticated public users from accessing private payment history or user profile settings pages.',
        km: 'ការពារមិនឲ្យ User ធម្មតាបើកមើលទំព័រទូទាត់ប្រាក់ ឬទំព័រ Admin ឡើយ។'
      }
    },
    practiceExercise: {
      question: { en: 'What guard type protects a route from being activated in Angular?', km: 'តើ Guard type មួយណាដែលការពារ Route មិនឲ្យរត់ចូលបាន?' },
      solution: 'canActivate'
    },
    quizQuestions: [
      {
        id: 'q-ng-10-4',
        question: { en: 'What return type indicates a Route Guard allows navigation?', km: 'តើតម្លៃ Return អ្វីដែលបញ្ជាក់ថា Route Guard អនុញ្ញាតឲ្យរត់ចូលទំព័រ?' },
        options: [
          { id: 'a', text: { en: 'boolean true or UrlTree redirect', km: 'boolean true ឬ UrlTree' }, isCorrect: true },
          { id: 'b', text: { en: 'string "OK"', km: 'string "OK"' }, isCorrect: false }
        ],
        explanation: { en: 'Guards return boolean true or UrlTree.', km: 'Guards ផ្តល់ត្រឡប់មកវិញនូវ boolean true ឬ UrlTree។' }
      }
    ]
  },

  // Module 11 — Forms
  {
    id: 'ng-hub-11-1',
    slug: 'template-driven-forms',
    moduleNumber: 11,
    lessonNumberInModule: 1,
    title: {
      en: '11.1 Template-Driven Forms',
      km: '11.1 Template-Driven Forms'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Template-driven forms rely on HTML directive binding (`[(ngModel)]` and `#f="ngForm"`). Angular manages the form model implicitly behind the scenes. Ideal for simple forms like search bars or contact fields.',
      km: 'Template-driven forms ផ្អែកលើការសរសេរ Directive ក្នុង HTML (`[(ngModel)]` និង `#f="ngForm"`)\n Angular គ្រប់គ្រង Form Model ស្វ័យប្រវត្តិនៅខាងក្រោយ។ ល្អបំផុតសម្រាប់ Form ងាយៗដូចជា Search ឬ Contact inputs។'
    },
    tutorial: {
      en: 'Template-Driven Form HTML:\n```html\n<form #taskForm="ngForm" (ngSubmit)="onSubmit(taskForm)">\n  <input name="title" ngModel required>\n  <button type="submit" [disabled]="!taskForm.valid">Save</button>\n</form>\n```',
      km: 'Template-Driven Form HTML ៖\n```html\n<form #taskForm="ngForm" (ngSubmit)="onSubmit(taskForm)">\n  <input name="title" ngModel required>\n  <button type="submit" [disabled]="!taskForm.valid">Save</button>\n</form>\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    form { background: #0f172a; border: 1px solid #1e293b; padding: 16px; border-radius: 8px; }
    input { background: #1e293b; border: 1px solid #38bdf8; color: white; padding: 8px; border-radius: 6px; width: 100%; margin-bottom: 10px; }
  </style>
</head>
<body>
  <h3>Template-Driven Form (#taskForm)</h3>
  <form>
    <label>Task Name:</label>
    <input name="taskName" ngModel required placeholder="e.g. Finish Angular Course">
    <button style="background:#2563eb; color:white; border:none; padding:8px 14px; border-radius:6px;">Submit</button>
  </form>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Quick Search & Feedback Forms', km: 'Form ស្វែងរក និងមតិរិះគន់' },
      description: {
        en: 'Provides minimal setup for lightweight single-field user inputs where complex validation logic is unnecessary.',
        km: 'សាកសមសម្រាប់ Form តូចៗដែលមានតែ Field តិចតួច និងមិនត្រូវការ Validation ស្មុគស្មាញ។'
      }
    },
    practiceExercise: {
      question: { en: 'What local template reference directive captures the Angular NgForm instance?', km: 'តើ directive អ្វីដែលចាប់យក NgForm instance ក្នុង HTML?' },
      solution: '#myForm="ngForm"'
    },
    quizQuestions: [
      {
        id: 'q-ng-11-1',
        question: { en: 'Which Angular module must be imported for Template-Driven Forms?', km: 'តើ Module មួយណាដែលត្រូវ Import សម្រាប់ Template-Driven Forms?' },
        options: [
          { id: 'a', text: { en: 'FormsModule', km: 'FormsModule' }, isCorrect: true },
          { id: 'b', text: { en: 'ReactiveFormsModule', km: 'ReactiveFormsModule' }, isCorrect: false }
        ],
        explanation: { en: '`FormsModule` is required for template-driven forms.', km: '`FormsModule` ត្រូវប្រើសម្រាប់ Template-Driven Forms។' }
      }
    ]
  },
  {
    id: 'ng-hub-11-2',
    slug: 'reactive-forms-formgroup-formcontrol',
    moduleNumber: 11,
    lessonNumberInModule: 2,
    title: {
      en: '11.2 Reactive Forms (FormGroup & FormControl)',
      km: '11.2 Reactive Forms ជាមួយ FormGroup & FormControl'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Reactive Forms provide an explicit, synchronous, immutable data management approach driven directly from TypeScript class using `FormGroup` and `FormControl` objects bound via `[formGroup]` and `formControlName`.',
      km: 'Reactive Forms ផ្តល់នូវការគ្រប់គ្រង Form Data យ៉ាងច្បាស់លាស់ពី TypeScript Class ដោយផ្ទាល់ ដោយប្រើប្រាស់ `FormGroup` និង `FormControl` Object ភ្ជាប់ទៅ HTML តាមរយៈ `[formGroup]` និង `formControlName`។'
    },
    tutorial: {
      en: 'TypeScript Setup:\n```ts\nthis.taskForm = new FormGroup({\n  title: new FormControl("", [Validators.required, Validators.minLength(3)]),\n  category: new FormControl("Work")\n});\n```\n\nHTML Template:\n`<form [formGroup]="taskForm" (ngSubmit)="onSubmit()">`\n`  <input formControlName="title">`\n`</form>`',
      km: 'TypeScript Setup ៖\n```ts\nthis.taskForm = new FormGroup({\n  title: new FormControl("", [Validators.required, Validators.minLength(3)]),\n  category: new FormControl("Work")\n});\n```\n\nHTML Template ៖\n`<form [formGroup]="taskForm" (ngSubmit)="onSubmit()">`\n`  <input formControlName="title">`\n`</form>`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .fg { background: #020617; border: 1px solid #1e293b; padding: 14px; border-radius: 8px; color: #a855f7; }
  </style>
</head>
<body>
  <h3>Reactive Form Structure</h3>
  <div class="fg">
    const profileForm = new FormGroup({<br>
    &nbsp;&nbsp;username: new FormControl(''),<br>
    &nbsp;&nbsp;email: new FormControl('')<br>
    });
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Enterprise Data Entry & Validation', km: 'Form ធំៗក្នុងប្រព័ន្ធក្រុមហ៊ុន' },
      description: {
        en: 'Essential for complex multi-step checkout forms, dynamic form arrays, and custom asynchronous server validators.',
        km: 'ល្អបំផុតសម្រាប់ Form ចុះឈ្មោះស្មុគស្មាញ Form បង់ប្រាក់ និងការធ្វើ Validation ជាមួយ Server។'
      }
    },
    practiceExercise: {
      question: { en: 'What directive binds an individual input control inside a Reactive Form in HTML template?', km: 'តើ directive អ្វីដែលភ្ជាប់ Input ទៅកាន់ FormControl ក្នុង Reactive Form?' },
      solution: 'formControlName'
    },
    quizQuestions: [
      {
        id: 'q-ng-11-2',
        question: { en: 'Which Angular module must be imported to use Reactive Forms?', km: 'តើ Module មួយណាដែលត្រូវ Import សម្រាប់ Reactive Forms?' },
        options: [
          { id: 'a', text: { en: 'ReactiveFormsModule', km: 'ReactiveFormsModule' }, isCorrect: true },
          { id: 'b', text: { en: 'TemplateFormsModule', km: 'TemplateFormsModule' }, isCorrect: false }
        ],
        explanation: { en: '`ReactiveFormsModule` provides Reactive Forms directives.', km: '`ReactiveFormsModule` ត្រូវប្រើសម្រាប់ Reactive Forms។' }
      }
    ]
  },
  {
    id: 'ng-hub-11-3',
    slug: 'form-validation-and-error-messages',
    moduleNumber: 11,
    lessonNumberInModule: 3,
    title: {
      en: '11.3 Form Validation & Displaying Error Messages',
      km: '11.3 ការធ្វើ Form Validation & បង្ហាញ Error Messages'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Angular provides built-in `Validators` (such as `Validators.required`, `Validators.email`, `Validators.minLength(n)`). Check control status (`control.invalid && control.touched`) to display red validation warning messages.',
      km: 'Angular មាន `Validators` មកជាមួយស្រាប់ (ដូចជា `Validators.required`, `Validators.email`, `Validators.minLength(n)`)។ ពិនិត្យ Control state (`control.invalid && control.touched`) ដើម្បីបង្ហាញសារ Error ពណ៌ក្រហមប្រាប់ User។'
    },
    tutorial: {
      en: 'Error Message Display Template:\n```html\n<div *ngIf="taskForm.get(\'title\')?.invalid && taskForm.get(\'title\')?.touched">\n  <small class="text-danger">Title is required (min 3 characters)</small>\n</div>\n```',
      km: 'Error Message Display Template ៖\n```html\n<div *ngIf="taskForm.get(\'title\')?.invalid && taskForm.get(\'title\')?.touched">\n  <small class="text-danger">Title is required (min 3 characters)</small>\n</div>\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .err { color: #fca5a5; background: #450a0a; padding: 6px 10px; border-radius: 4px; font-size: 12px; margin-top: 4px; display: inline-block; }
  </style>
</head>
<body>
  <h3>Reactive Form Control Validation</h3>
  <input placeholder="Email Address..." style="background:#0f172a; border:1px solid #ef4444; color:white; padding:8px; border-radius:6px; width:100%; max-width:280px;">
  <br>
  <span class="err">⚠ Please enter a valid email address.</span>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'User Input Quality Control', km: 'ការត្រួតពិនិត្យ គុណភាព Data បញ្ចូល' },
      description: {
        en: 'Prevents invalid or malformed data payload submissions to database API endpoints.',
        km: 'ការពារមិនឲ្យ User ផ្ញើ Data ខុសទម្រង់ ឬស្ទើរទិន្នន័យទៅកាន់ Database API។'
      }
    },
    practiceExercise: {
      question: { en: 'What Validator function ensures an input field is not left empty?', km: 'តើ Validator Function មួយណាដែលធានាថា Input មិនអាចទុកទទេបាន?' },
      solution: 'Validators.required'
    },
    quizQuestions: [
      {
        id: 'q-ng-11-3',
        question: { en: 'When should validation error messages ideally be shown to users?', km: 'តើនៅពេលណាដែលសារ Error Validation គួរតែបង្ហាញប្រាប់ User?' },
        options: [
          { id: 'a', text: { en: 'When the input is invalid AND has been touched/interacted with by the user', km: 'ពេល Input នោះខុសទម្រង់ និងបាន Touched រួច' }, isCorrect: true },
          { id: 'b', text: { en: 'Immediately when page loads before typing', km: 'បង្ហាញភ្លាមពេលទើបបើក Page' }, isCorrect: false }
        ],
        explanation: { en: 'Checking `control.touched` prevents premature error messages on fresh forms.', km: 'ការពិនិត្យ `control.touched` ការពារមិនឲ្យលោត Error តាំងពីមិនទាន់វាយអក្សរ។' }
      }
    ]
  },

  // Module 12 — Lifecycle Hooks & Best Practices
  {
    id: 'ng-hub-12-1',
    slug: 'lifecycle-hooks-ngoninit-ngondestroy',
    moduleNumber: 12,
    lessonNumberInModule: 1,
    title: {
      en: '12.1 Component Lifecycle Hooks (ngOnInit, ngOnDestroy)',
      km: '12.1 Component Lifecycle Hooks (ngOnInit, ngOnDestroy)'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Angular manages component lifecycle phases. `ngOnInit()` fires once after component inputs are initialized (ideal for API data fetches). `ngOnDestroy()` fires right before component removal (ideal for cleanup and unsubscribing).',
      km: 'Angular គ្រប់គ្រង Lifecycle នៃ Component។ `ngOnInit()` ដំណើរការតែម្តងគត់បន្ទាប់ពី Component បង្កើតឡើង (ល្អបំផុតសម្រាប់ Fetch Data ពី API)។ ឯ `ngOnDestroy()` ដំណើរការនៅពេល Component ជិតត្រូវលុបចេញ (ល្អបំផុតសម្រាប់ Unsubscribe ករណីផ្សេងៗ)។'
    },
    tutorial: {
      en: 'Lifecycle Implementation:\n```ts\nexport class TaskListComponent implements OnInit, OnDestroy {\n  ngOnInit() {\n    // Load initial API data here\n  }\n  ngOnDestroy() {\n    // Cleanup timers and subscriptions here\n  }\n}\n```',
      km: 'Lifecycle Implementation ៖\n```ts\nexport class TaskListComponent implements OnInit, OnDestroy {\n  ngOnInit() {\n    // Load initial API data here\n  }\n  ngOnDestroy() {\n    // Cleanup timers and subscriptions here\n  }\n}\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .hook { background: #020617; border-left: 4px solid #4ade80; padding: 10px; margin-bottom: 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <h3>Angular Lifecycle Flow</h3>
  <div class="hook">1. constructor() ──> Class Instantiation</div>
  <div class="hook">2. ngOnChanges() ──> @Input changes</div>
  <div class="hook" style="border-left-color: #38bdf8;">3. ngOnInit() ──> Component Init & Data Fetch</div>
  <div class="hook" style="border-left-color: #ef4444;">4. ngOnDestroy() ──> Cleanup & Destruction</div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Fetch and Teardown Lifecycle', km: 'ដំណើរការ Fetch Data និង Teardown' },
      description: {
        en: 'Executes initial HTTP calls inside `ngOnInit` and cancels background WebSockets inside `ngOnDestroy`.',
        km: 'ធ្វើការ Fetch Data ពី HTTP ក្នុង `ngOnInit` និងបិទ WebSockets វិញក្នុង `ngOnDestroy`។'
      }
    },
    practiceExercise: {
      question: { en: 'Which lifecycle hook method is best suited for initial HTTP data loading calls?', km: 'តើ lifecycle hook មួយណាដែលល្អបំផុតសម្រាប់ Fetch HTTP Data ដំបូង?' },
      solution: 'ngOnInit'
    },
    quizQuestions: [
      {
        id: 'q-ng-12-1',
        question: { en: 'Which interface must a class implement to use `ngOnInit()`?', km: 'តើ Interface មួយណាដែល Class ត្រូវ Implement ដើម្បីប្រើ `ngOnInit()`?' },
        options: [
          { id: 'a', text: { en: 'OnInit', km: 'OnInit' }, isCorrect: true },
          { id: 'b', text: { en: 'OnStart', km: 'OnStart' }, isCorrect: false }
        ],
        explanation: { en: 'Components implement `OnInit` for `ngOnInit()`.', km: 'Class ត្រូវ implement `OnInit` សម្រាប់ `ngOnInit()`។' }
      }
    ]
  },
  {
    id: 'ng-hub-12-2',
    slug: 'organizing-a-real-project-standalone-components',
    moduleNumber: 12,
    lessonNumberInModule: 2,
    title: {
      en: '12.2 Organizing Real Projects & Standalone Components',
      km: '12.2 ការរៀបចំ Project ធំៗ & Standalone Components'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Modern Angular emphasizes Standalone Components (`standalone: true`). Standalone components manage their own imports directly inside `@Component({ imports: [CommonModule, RouterLink] })`, eliminating NgModule boilerplate.',
      km: 'Angular ទំនើបផ្តោតលើ Standalone Components (`standalone: true`)។ Standalone component គ្រប់គ្រងការ Import របស់ខ្លួនដោយផ្ទាល់ក្នុង `@Component({ imports: [CommonModule, RouterLink] })` ដោយមិនចាំបាច់សរសេរ NgModule ស្មុគស្មាញឡើយ។'
    },
    tutorial: {
      en: 'Standalone Component Skeleton:\n```ts\n@Component({\n  selector: "app-task-item",\n  standalone: true,\n  imports: [CommonModule, FormsModule, RouterLink],\n  templateUrl: "./task-item.component.html"\n})\nexport class TaskItemComponent {}\n```',
      km: 'Standalone Component Skeleton ៖\n```ts\n@Component({\n  selector: "app-task-item",\n  standalone: true,\n  imports: [CommonModule, FormsModule, RouterLink],\n  templateUrl: "./task-item.component.html"\n})\nexport class TaskItemComponent {}\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .sa { background: #0f172a; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; color: #38bdf8; }
  </style>
</head>
<body>
  <h3>Standalone Component Metadata</h3>
  <div class="sa">
    @Component({<br>
    &nbsp;&nbsp;<span style="color:#4ade80">standalone: true</span>,<br>
    &nbsp;&nbsp;imports: [CommonModule, ReactiveFormsModule]<br>
    })
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Simplified Project Architecture', km: 'ស្ថាបត្យកម្ម Project ងាយស្រួលយល់' },
      description: {
        en: 'Reduces boilerplate and simplifies lazy loading of routes directly via `loadComponent: () => import(...)`.',
        km: 'កាត់បន្ថយកូដស្មុគស្មាញ និងសម្រួលដល់ការធ្វើ Lazy Loading លើ Routes តាម `loadComponent`។'
      }
    },
    practiceExercise: {
      question: { en: 'What flag in `@Component` metadata marks it as a standalone component?', km: 'តើ flag មួយណា ក្នុង metadata ដែលប្រកាស Component ជា Standalone?' },
      solution: 'standalone: true'
    },
    quizQuestions: [
      {
        id: 'q-ng-12-2',
        question: { en: 'Do standalone components require declaration inside an NgModule?', km: 'តើ Standalone components ត្រូវការប្រកាសក្នុង NgModule ទៀតដែរឬទេ?' },
        options: [
          { id: 'a', text: { en: 'No, they manage dependencies directly via their own imports array', km: 'ទេ, ពួកវាគ្រប់គ្រងការ Import ដោយផ្ទាល់' }, isCorrect: true },
          { id: 'b', text: { en: 'Yes, mandatory in NgModule', km: 'បាទ/ចាស' }, isCorrect: false }
        ],
        explanation: { en: 'Standalone components eliminate the need for NgModules.', km: 'Standalone components មិនត្រូវការ NgModule ឡើយ។' }
      }
    ]
  },
  {
    id: 'ng-hub-12-3',
    slug: 'performance-onpush-and-trackby',
    moduleNumber: 12,
    lessonNumberInModule: 3,
    title: {
      en: '12.3 Performance Basics (OnPush & trackBy / @for track)',
      km: '12.3 Performance Basics (OnPush & trackBy)'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Optimize Angular rendering performance by using `ChangeDetectionStrategy.OnPush` (re-renders only when `@Input` reference changes) and `trackBy` function in `*ngFor` (or `track item.id` in `@for`) to avoid re-rendering untouched list items.',
      km: 'បង្កើនល្បឿន Render របស់ Angular ដោយប្រើប្រាស់ `ChangeDetectionStrategy.OnPush` (Re-render លុះត្រាតែមានការប្រែប្រួល `@Input` reference) និង `trackBy` ក្នុង `*ngFor` (ឬ `track item.id` ក្នុង `@for`) ដើម្បីការពារមិនឲ្យ Re-render លើ Item ក្នុង List ដែលមិនមានការកែប្រែ។'
    },
    tutorial: {
      en: 'OnPush & TrackBy Example:\n```ts\n@Component({\n  selector: "app-task-row",\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class TaskRowComponent {\n  trackByTaskId(index: number, task: Task) { return task.id; }\n}\n```',
      km: 'OnPush & TrackBy Example ៖\n```ts\n@Component({\n  selector: "app-task-row",\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class TaskRowComponent {\n  trackByTaskId(index: number, task: Task) { return task.id; }\n}\n```'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .perf { background: #020617; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; color: #4ade80; }
  </style>
</head>
<body>
  <h3>Angular DOM Render Optimization</h3>
  <div class="perf">
    &lt;ul *ngFor="let task of taskList; trackBy: trackByTaskId"&gt;<br>
    &nbsp;&nbsp;&lt;li&gt;{{ task.name }}&lt;/li&gt;<br>
    &lt;/ul&gt;
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'High-Frequency Dashboard Optimization', km: 'ការបង្កើនល្បឿន តារាងទិន្នន័យធំៗ' },
      description: {
        en: 'Prevents browser lag when rendering large lists containing thousands of real-time stock ticker rows or log streams.',
        km: 'ការពារ Browser កុំឲ្យ Lag ពេលត្រូវ Render តារាងទិន្នន័យធំៗរាប់ពាន់ជួរដែលអាប់ដេត Real-time។'
      }
    },
    practiceExercise: {
      question: { en: 'Which property in `*ngFor` prevents recreating unchanged DOM nodes during array updates?', km: 'តើ property មួយណា ក្នុង `*ngFor` ដែលការពារមិនឲ្យ Recreate DOM Nodes ដដែលៗ?' },
      solution: 'trackBy'
    },
    quizQuestions: [
      {
        id: 'q-ng-12-3',
        question: { en: 'What triggers change detection in a component configured with `ChangeDetectionStrategy.OnPush`?', km: 'តើអ្វីដែល Trigger ឲ្យ OnPush Component ធ្វើការ Re-render?' },
        options: [
          { id: 'a', text: { en: 'An immutable change in @Input reference or explicit async pipe emission', km: 'ការប្រែប្រួល @Input reference ថ្មី ឬ async pipe' }, isCorrect: true },
          { id: 'b', text: { en: 'Any global background mousemove event anywhere on screen', km: 'រាល់ពេល Mouse រើលើ screen' }, isCorrect: false }
        ],
        explanation: { en: '`OnPush` checks changes only when input references change or observables emit.', km: '`OnPush` ធ្វើការ Check តែពេល Input Reference ផ្លាស់ប្តូរ ឬ Observable emit។' }
      }
    ]
  },

  // Capstone Module
  {
    id: 'ng-hub-13-1',
    slug: 'capstone-task-manager-app',
    moduleNumber: 13,
    lessonNumberInModule: 1,
    title: {
      en: 'Capstone Module — Task Manager Mini-App',
      km: 'គម្រោង Capstone — កម្មវិធីគ្រប់គ្រងភារកិច្ច Task Manager Mini-App'
    },
    durationMinutes: 45,
    difficulty: 'Advanced',
    explanation: {
      en: 'Guided Capstone Build: Construct a full multi-component Task Manager Angular application incorporating TaskService (RxJS state), Reactive Form (with validation), *ngFor/*ngIf directives, @Input/@Output child components, Routing between list and detail views, and HttpClient API simulation.',
      km: 'ការអនុវត្តគម្រោង Capstone បញ្ចប់វគ្គ៖ សាងសង់កម្មវិធី Task Manager ពេញលេញដោយប្រើប្រាស់ TaskService (RxJS state), Reactive Form (ជាមួយ Validation), *ngFor/*ngIf directives, @Input/@Output communication, Routing, និង HttpClient API simulation។'
    },
    tutorial: {
      en: 'Step-by-Step Architecture Guide:\n1. TaskService: manages task array stream using BehaviorSubject\n2. TaskFormComponent: Reactive Form for creating tasks with validation\n3. TaskListComponent & TaskItemComponent: parent-child list rendering with @Input/@Output\n4. TaskDetailComponent: routed detail view reading ActivatedRoute params.',
      km: 'ជំហាននៃការកសាង ៖\n១. TaskService ៖ គ្រប់គ្រង Task Data ដោយប្រើ BehaviorSubject\n២. TaskFormComponent ៖ Reactive Form សម្រាប់បង្កើត Task ថ្មី\n៣. TaskListComponent & TaskItemComponent ៖ Parent-Child components បង្ហាញបញ្ជី\n៤. TaskDetailComponent ៖ ទំព័រលម្អិតអាន ID ពី ActivatedRoute'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .app-card { background: #1e293b; border: 1px solid #334155; padding: 20px; border-radius: 12px; max-width: 500px; margin: auto; }
    .task-item { background: #0f172a; border: 1px solid #38bdf8; padding: 10px 14px; border-radius: 8px; margin-top: 8px; display: flex; justify-content: space-between; align-items: center; }
    .badge { background: #2563eb; color: white; font-size: 11px; padding: 2px 8px; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="app-card">
    <h2>🚀 Angular Task Manager Capstone</h2>
    <p style="color:#94a3b8; font-size:13px;">Demonstrating Components, Services, RxJS & Forms</p>
    <div class="task-item">
      <span>1. Build Angular TaskService</span>
      <span class="badge">Completed</span>
    </div>
    <div class="task-item">
      <span>2. Implement Reactive Form</span>
      <span class="badge">In Progress</span>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Full-Featured Production Application Pattern', km: 'ទម្រង់កម្មវិធីប្រឡងស្តង់ដារក្រុមហ៊ុន' },
      description: {
        en: 'Combines all core Angular framework primitives into a scalable production architecture.',
        km: 'រួមបញ្ចូលគ្រប់បច្ចេកទេស Angular ទាំងអស់ទៅជាកម្មវិធីមួយដែលមានស្ថាបត្យកម្មរឹងមាំស្តង់ដារ។'
      }
    },
    practiceExercise: {
      question: { en: 'What RxJS subject type is ideal for holding and re-emitting current state in Angular services?', km: 'តើ RxJS subject type មួយណាដែលល្អបំផុតសម្រាប់រក្សា និងបញ្ជូន Current State ក្នុង Service?' },
      solution: 'BehaviorSubject'
    },
    quizQuestions: [
      {
        id: 'q-ng-13-1',
        question: { en: 'Which Angular features are combined in the Capstone Task Manager app?', km: 'តើ Feature របស់ Angular អ្វីខ្លះដែលត្រូវបានរួមបញ្ចូលក្នុងគម្រោង Capstone នេះ?' },
        options: [
          { id: 'a', text: { en: 'Components, Directives, Services, RxJS, Reactive Forms, and Routing', km: 'Components, Directives, Services, RxJS, Reactive Forms, និង Routing' }, isCorrect: true },
          { id: 'b', text: { en: 'Only HTML and CSS', km: 'តែ HTML និង CSS' }, isCorrect: false }
        ],
        explanation: { en: 'The Capstone integrates all core framework primitives.', km: 'គម្រោង Capstone រួមបញ្ចូលគ្រប់ចំណេះដឹង Angular ទាំងអស់។' }
      }
    ]
  }
];
