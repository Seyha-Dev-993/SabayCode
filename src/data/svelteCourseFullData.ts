import { FrontendCourse, FrontendQuizQuestion } from '../types/frontendClass';
import { SVELTE_LESSONS_PART1 } from './svelteLessonsHubPart1';
import { SVELTE_LESSONS_PART2 } from './svelteLessonsHubPart2';

const SVELTE_CHEAT_SHEET = [
  {
    concept: 'Reactive Declarations ($:)',
    code: `<script>
  let count = 1;
  // Re-calculates automatically whenever count changes
  $: doubled = count * 2;
  $: if (count > 10) console.log("Count exceeded 10!");
</script>`,
    explanation: {
      en: 'The `$:` syntax tells Svelte to execute the statement reactively whenever referenced dependencies change.',
      km: 'សញ្ញា `$:` ប្រាប់ Svelte ឱ្យរត់បន្ទាត់កូដនោះឡើងវិញរាល់ពេលដែល Variable នៅក្នុងនោះប្រែប្រួល។'
    }
  },
  {
    concept: 'Component Props (export let)',
    code: `<script>
  export let title = "Default Title"; // Prop with fallback
  export let count = 0;
</script>

<h1>{title} ({count})</h1>`,
    explanation: {
      en: 'Use `export let` inside a component `<script>` to declare props that can be passed from parent components.',
      km: 'ប្រើប្រាស់ `export let` ដើម្បីប្រកាស Props សម្រាប់ទទួលទិន្នន័យពី Parent Component។'
    }
  },
  {
    concept: 'Conditional & List Blocks ({#if}, {#each})',
    code: `{#if isLoggedIn}
  <p>Welcome back!</p>
{:else}
  <p>Please log in.</p>
{/if}

{#each items as item (item.id)}
  <li>{item.name}</li>
{:else}
  <li>No items found</li>
{/each}`,
    explanation: {
      en: 'Svelte uses explicit block syntax (`{#if}`, `{#each}`) closed with slashes (`{/if}`, `{/each}`).',
      km: 'Svelte ប្រើប្រាស់ Explicit Block tags ចាប់ផ្តើមដោយ `#` និងបិទបញ្ចប់ដោយ `/`។'
    }
  },
  {
    concept: 'Two-Way Form Bindings (bind:value)',
    code: `<script>
  let username = "";
  let isSubscribed = false;
</script>

<input type="text" bind:value={username} />
<input type="checkbox" bind:checked={isSubscribed} />`,
    explanation: {
      en: '`bind:value` and `bind:checked` establish effortless two-way data binding between component state and DOM inputs.',
      km: '`bind:value` និង `bind:checked` បង្កើតការចងភ្ជាប់ទិន្នន័យពីផ្លូវរវាង State និង DOM Inputs។'
    }
  },
  {
    concept: 'Writable Stores & $store Auto-Subscription',
    code: `// store.js
import { writable } from 'svelte/store';
export const count = writable(0);

// App.svelte
<script>
  import { count } from './store.js';
</script>
<!-- $ count automatically subscribes & unsubscribes! -->
<h1>Current count: {$count}</h1>
<button on:click={() => count.update(n => n + 1)}>Increment</button>`,
    explanation: {
      en: 'Prefixing a store name with `$` in Svelte components auto-manages subscription and unsubscription automatically.',
      km: 'ការថែមសញ្ញា `$` នៅមុខឈ្មោះ Store ក្នុង Component នឹងធ្វើ Auto-subscribe និង Unsubscribe ដោយស្វ័យប្រវត្តិ។'
    }
  },
  {
    concept: 'Common Mistakes & Best Practices',
    code: `// ❌ Common Mistake 1: Mutating array in place without reassignment
// Svelte won't detect reactivity!
items.push(newItem); 

// ✅ Correct Way: Reassign or use spread operator
items = [...items, newItem];

// ❌ Common Mistake 2: Forgetting $ prefix when accessing store values
console.log(myStore); // Logs store object, not value!

// ✅ Correct Way: Use $ prefix in components
console.log($myStore);`,
    explanation: {
      en: 'Remember: Reactivity in Svelte is triggered by ASSIGNMENT (`=`). Always reassign arrays/objects, and use `$` for store values inside components.',
      km: 'ចំណាំ៖ Reactivity ក្នុង Svelte ត្រូវបានដាស់ដោយសញ្ញាស្មើ (`=`)។ ត្រូវ Reassign តម្លៃ Array/Object ជានិច្ច និងប្រើ `$` សម្រាប់ đọc តម្លៃ Store ក្នុង Component។'
    }
  }
];

const SVELTE_QUIZ_QUESTIONS: FrontendQuizQuestion[] = [
  {
    id: 'quiz-sv-1',
    question: {
      en: 'What makes Svelte fundamentally different from React and Vue?',
      km: 'តើអ្វីដែលធ្វើឱ្យ Svelte មានភាពខុសប្លែកចម្បងពី React និង Vue?'
    },
    options: [
      { id: '1', text: { en: 'Svelte is a compiler that converts code to Vanilla JS at build time with no Virtual DOM', km: 'Svelte ជា Compiler ដែលបម្លែងកូដទៅជា Vanilla JS នៅពេល Build Time ដោយមិនប្រើ Virtual DOM' }, isCorrect: true },
      { id: '2', text: { en: 'Svelte requires a heavy 500KB runtime library in the browser', km: 'Svelte ត្រូវការ Runtime Library ទំហំ 500KB ក្នុង Browser' }, isCorrect: false },
      { id: '3', text: { en: 'Svelte only runs on backend Node.js servers', km: 'Svelte រត់បានតែលើ Backend Node.js តែប៉ុណ្ណោះ' }, isCorrect: false }
    ],
    explanation: {
      en: 'Svelte is a compiler that compiles component code directly to surgical Vanilla JavaScript DOM manipulations at build time.',
      km: 'Svelte គឺជា Compiler ដែល Compile កូដទៅជា Vanilla JS ដោយមិនបាច់រត់ Virtual DOM ក្នុង Browser ឡើយ។'
    }
  },
  {
    id: 'quiz-sv-2',
    question: {
      en: 'Given `let count = 0; $: doubled = count * 2;`, if `count = 5;` runs, what is the value of `doubled`?',
      km: 'ផ្អែកលើ `let count = 0; $: doubled = count * 2;`, ប្រសិនបើ `count = 5;` រត់ តើតម្លៃ `doubled` ស្មើប៉ុន្មាន?'
    },
    options: [
      { id: '1', text: { en: '10', km: '10' }, isCorrect: true },
      { id: '2', text: { en: '0', km: '0' }, isCorrect: false },
      { id: '3', text: { en: 'undefined', km: 'undefined' }, isCorrect: false }
    ],
    explanation: {
      en: 'The `$:` reactive statement detects that its dependency `count` changed to 5, so it automatically recalculates `doubled = 5 * 2 = 10`.',
      km: 'Reactive statement `$:` ដឹងថា `count` បានប្រែប្រួលទៅជា 5 ដូច្នេះវាគណនា `doubled = 5 * 2 = 10` ដោយស្វ័យប្រវត្តិ។'
    }
  },
  {
    id: 'quiz-sv-3',
    question: {
      en: 'How do you declare a component prop in a Svelte component file?',
      km: 'តើអ្នកប្រកាស Component Prop ក្នុង Svelte Component ដោយរបៀបណា?'
    },
    options: [
      { id: '1', text: { en: 'export let propName;', km: 'export let propName;' }, isCorrect: true },
      { id: '2', text: { en: 'defineProps(["propName"]);', km: 'defineProps(["propName"]);' }, isCorrect: false },
      { id: '3', text: { en: 'props: { propName: String }', km: 'props: { propName: String }' }, isCorrect: false }
    ],
    explanation: {
      en: '`export let propName;` flags a variable inside `<script>` as an external component prop.',
      km: '`export let propName;` ប្រើសម្រាប់ប្រកាស Variable ក្នុង `<script>` ឱ្យទៅជា Prop ទទួលពីខាងក្រៅ។'
    }
  },
  {
    id: 'quiz-sv-4',
    question: {
      en: 'Which Svelte block syntax handles conditional template rendering?',
      km: 'តើ Svelte Block Syntax មួយណាសម្រាប់ត្រួតពិនិត្យលក្ខខណ្ឌ Conditional Rendering?'
    },
    options: [
      { id: '1', text: { en: '{#if condition} ... {:else} ... {/if}', km: '{#if condition} ... {:else} ... {/if}' }, isCorrect: true },
      { id: '2', text: { en: '<v-if condition> ... </v-if>', km: '<v-if condition> ... </v-if>' }, isCorrect: false },
      { id: '3', text: { en: '{@if condition} ... {@endif}', km: '{@if condition} ... {@endif}' }, isCorrect: false }
    ],
    explanation: {
      en: 'Svelte block tags open with `#` (`{#if}`), branch with `:` (`{:else}`), and close with `/` (`{/if}`).',
      km: 'Svelte ប្រើប្រាស់ `{#if}` សម្រាប់បើក, `{:else}` សម្រាប់សាខាបន្ត, និង `{/if}` សម្រាប់បិទបញ្ចប់។'
    }
  },
  {
    id: 'quiz-sv-5',
    question: {
      en: 'Why is `numbers = [...numbers, 5];` preferred over `numbers.push(5);` in Svelte for triggering UI updates?',
      km: 'ហេតុអ្វីបានជា `numbers = [...numbers, 5];` ល្អជាង `numbers.push(5);` ក្នុងការដាស់ UI Update ក្នុង Svelte?'
    },
    options: [
      { id: '1', text: { en: 'Svelte reactivity is triggered by assignment (=), so push() alone does not trigger a DOM update', km: 'Svelte reactivity ដាស់តាមរយៈសញ្ញាស្មើ (=) ដូច្នេះ push() តែឯងមិនដាស់ DOM update ឡើយ' }, isCorrect: true },
      { id: '2', text: { en: 'push() is not a valid JavaScript method', km: 'push() មិនមែនជា JavaScript method ត្រឹមត្រូវ' }, isCorrect: false },
      { id: '3', text: { en: 'Spread operator makes the array immutable permanently', km: 'Spread operator ធ្វើឱ្យ array ក្លាយជា immutable រហូត' }, isCorrect: false }
    ],
    explanation: {
      en: 'Svelte instrumented reactivity on variable assignment `=`. Mutating an array in place with `.push()` without reassigning it won\'t alert Svelte that the state changed.',
      km: 'Svelte តាមដានការប្រែប្រួលតាមរយៈសញ្ញាស្មើ `=`។ ការប្រើប្រាស់ `.push()` ដោយមិនបាន Reassign `=` នឹងមិនធ្វើឱ្យ Svelte ដឹងថាមានការប្រែប្រួលឡើយ។'
    }
  },
  {
    id: 'quiz-sv-6',
    question: {
      en: 'What does the `$` prefix do when reading a Svelte store inside a component (e.g. `{$userStore}`)?',
      km: 'តើសញ្ញា `$` នៅខាងមុខឈ្មោះ Store ក្នុង Component (ឧ. `{$userStore}`) មានតួនាទីអ្វី?'
    },
    options: [
      { id: '1', text: { en: 'It automatically subscribes to the store and manages unsubscription on component unmount', km: 'វាធ្វើ Auto-subscribe លើតម្លៃ Store និងដោះស្រាយ Unsubscription ពេល Component បិទ' }, isCorrect: true },
      { id: '2', text: { en: 'It converts store value to jQuery object', km: 'វាបម្លែងតម្លៃ Store ទៅជា jQuery object' }, isCorrect: false },
      { id: '3', text: { en: 'It encrypts the store data', km: 'វាធ្វើ Encrypt លើទិន្នន័យ Store' }, isCorrect: false }
    ],
    explanation: {
      en: 'The `$` store prefix auto-subscribes to updates and auto-unsubscribes when the component is destroyed, preventing memory leaks.',
      km: 'សញ្ញា `$` គ្រប់គ្រងការ Auto-subscribe និង Unsubscribe ដោយស្វ័យប្រវត្តិដើម្បីការពារ Memory Leaks។'
    }
  },
  {
    id: 'quiz-sv-7',
    question: {
      en: 'Which lifecycle function runs immediately after a component is first inserted into the DOM?',
      km: 'តើ Lifecycle Function មួយណាដែលរត់ភ្លាមៗបន្ទាប់ពី Component ត្រូវបញ្ចូលទៅក្នុង DOM?'
    },
    options: [
      { id: '1', text: { en: 'onMount', km: 'onMount' }, isCorrect: true },
      { id: '2', text: { en: 'created', km: 'created' }, isCorrect: false },
      { id: '3', text: { en: 'useEffectReady', km: 'useEffectReady' }, isCorrect: false }
    ],
    explanation: {
      en: '`onMount` executes once after the component has rendered and mounted to the live DOM tree.',
      km: '`onMount` រត់តែម្តងគត់បន្ទាប់ពី Component ត្រូវបាន Render រួចរាល់លើ DOM Tree។'
    }
  },
  {
    id: 'quiz-sv-8',
    question: {
      en: 'How do you bind a text input value two-ways to a variable named `query` in Svelte?',
      km: 'តើអ្នកចងភ្ជាប់ Two-Way Binding លើ Input ទៅកាន់ Variable ឈ្មោះ `query` តាមរបៀបណា?'
    },
    options: [
      { id: '1', text: { en: '<input bind:value={query} />', km: '<input bind:value={query} />' }, isCorrect: true },
      { id: '2', text: { en: '<input v-model={query} />', km: '<input v-model={query} />' }, isCorrect: false },
      { id: '3', text: { en: '<input two-way={query} />', km: '<input two-way={query} />' }, isCorrect: false }
    ],
    explanation: {
      en: 'Svelte uses the `bind:value={variable}` directive for clean two-way input synchronization.',
      km: 'Svelte ប្រើប្រាស់ Directive `bind:value={variable}` សម្រាប់ការចងភ្ជាប់ទិន្នន័យពីផ្លូវ។'
    }
  }
];

const ALL_SVELTE_HUB_LESSONS = [
  ...SVELTE_LESSONS_PART1,
  ...SVELTE_LESSONS_PART2
];

export const SVELTE_COURSE_DATA: FrontendCourse = {
  id: 'svelte',
  title: {
    en: 'Svelte 5 Fundamentals & Reactive Architecture',
    km: 'វគ្គសិក្សា Svelte (Compiler, Reactive Declarations & Stores)'
  },
  iconName: 'svelte',
  categoryId: 'frameworks',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Master Svelte compiler architecture, Reactive Declarations ($:), props, store state management, and component lifecycles.',
    km: 'រៀន Svelte Compiler Architecture, Reactive Declarations ($:), Props, Stores និង Lifecycles។'
  },
  summary: {
    en: 'Complete 7-hour intermediate course covering Svelte compiler principles, reactive declarations ($:), component props, list rendering, custom events, two-way bindings, writable stores, and lifecycle hooks.',
    km: 'មេរៀនសរុប ៧ ម៉ោង គ្របដណ្តប់លើ Svelte compiler, reactive declarations ($:), component props, list loops, custom events, bindings, writable stores, និង lifecycle hooks។'
  },
  estimatedHours: 7,
  lessonCount: ALL_SVELTE_HUB_LESSONS.length,
  cheatSheet: SVELTE_CHEAT_SHEET,
  quiz: SVELTE_QUIZ_QUESTIONS,
  capstoneProject: {
    title: {
      en: 'Guided Capstone: Reactive Svelte To-Do Task Manager',
      km: 'គម្រោង Capstone៖ កម្មវិធី To-Do Task Manager ជាមួយ Svelte'
    },
    description: {
      en: 'Build a full-featured Svelte To-Do Task Manager application with add/toggle/delete task components, reactive remaining-task counters (`$: remainingCount = todos.filter(...)`), task list state stored in a global writable Svelte store, and `localStorage` synchronization in `onMount`.',
      km: 'បង្កើតកម្មវិធី Svelte To-Do Task Manager ពេញលេញមួយដោយប្រើប្រាស់ Component Props, Custom Events, Reactive Statements គណនាចំនួន Task នៅសល់ (`$: remainingCount = todos.filter(...)`), Writable Store និង `localStorage` Sync ក្នុង `onMount`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #ff3e00; padding: 20px; border-radius: 12px; max-width: 500px; }
    .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; padding-bottom: 12px; }
    .title { color: #ff3e00; font-weight: 800; font-size: 20px; margin: 0; }
    .badge { background: #ff3e00; color: white; padding: 4px 12px; border-radius: 999px; font-weight: bold; font-size: 12px; }
    .input-box { display: flex; gap: 8px; margin: 16px 0; }
    input[type="text"] { flex: 1; background: #1e293b; border: 1px solid #475569; color: white; padding: 10px; border-radius: 6px; }
    .btn-add { background: #ff3e00; color: white; border: none; padding: 10px 16px; border-radius: 6px; font-weight: bold; cursor: pointer; }
    ul { list-style: none; padding: 0; margin: 0; }
    li { background: #1e293b; border: 1px solid #334155; padding: 12px; border-radius: 8px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; }
    .task-title { display: flex; align-items: center; gap: 10px; }
    .completed { text-decoration: line-through; opacity: 0.6; }
    .btn-del { background: #ef4444; color: white; border: none; padding: 4px 10px; border-radius: 4px; cursor: pointer; font-size: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h3 class="title">🔥 Svelte Task Manager</h3>
      <span class="badge"> remaining: 2 tasks</span>
    </div>

    <!-- bind:value={newTaskText} -->
    <div class="input-box">
      <input type="text" placeholder="បន្ថែម Task ថ្មី..." value="រៀន Svelte Reactive Declarations">
      <button class="btn-add">បន្ថែម</button>
    </div>

    <!-- {#each $todos as todo (todo.id)} -->
    <ul>
      <li>
        <div class="task-title">
          <input type="checkbox" checked>
          <span class="completed">រៀន Svelte Compiler Architecture</span>
        </div>
        <button class="btn-del">លុប</button>
      </li>
      <li>
        <div class="task-title">
          <input type="checkbox">
          <span>សរសេរ Writable Store & LocalStorage Sync</span>
        </div>
        <button class="btn-del">លុប</button>
      </li>
      <li>
        <div class="task-title">
          <input type="checkbox">
          <span>បង្កើត Svelte Capstone App</span>
        </div>
        <button class="btn-del">លុប</button>
      </li>
    </ul>
  </div>
</body>
</html>`
    }
  },
  lessons: ALL_SVELTE_HUB_LESSONS
};
