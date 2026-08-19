import { FrontendLesson } from '../types/frontendClass';

export const SVELTE_LESSONS_PART2: FrontendLesson[] = [
  // Module 5: Events
  {
    id: 'svelte-l13',
    slug: 'svelte-5-1-dom-events',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: {
      en: '5.1 Handling DOM Events with on: directives',
      km: '៥.១ ការប្រើប្រាស់ DOM Event Directives (`on:click`, `on:input`)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'In Svelte, DOM event listeners are attached using the `on:` directive suffix. For example, to listen for click events on a button element, write `<button on:click={handleClick}>`. Svelte also supports event modifiers like `on:click|preventDefault={handleSubmit}`!',
      km: 'ក្នុង Svelte, DOM Event Listeners ត្រូវបានកំណត់ដោយប្រើប្រាស់ Prefix `on:`។ ឧទាហរណ៍ សម្រាប់ Click Event លើ Button, អ្នកសរសេរ `<button on:click={handleClick}>`។ Svelte ថែមទាំង Support Event Modifiers ដូចជា `on:click|preventDefault={handleSubmit}` ដោយងាយស្រួល!'
    },
    tutorial: {
      en: 'Syntax: `<button on:click={handleClick}>Click Me</button>` or with modifiers `<form on:submit|preventDefault={save}>`.',
      km: 'ទម្រង់សរសេរ៖ `<button on:click={handleClick}>ចុចទីនេះ</button>` ឬរួមជាមួយ Modifiers `<form on:submit|preventDefault={save}>`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .btn { background: #818cf8; color: white; padding: 10px 20px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
    .btn:hover { background: #6366f1; }
  </style>
</head>
<body>
  <h3>DOM Event Handler Directive</h3>
  <button class="btn" onclick="alert('ចុចលើ Button តាមរយៈ on:click Directive!')">
    ចុចទីនេះ (on:click Handler)
  </button>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Form Submission Without Page Reload',
        km: 'ការ Submit Form ដោយមិនបាច់ Reload ទំព័រ'
      },
      description: {
        en: 'Using `on:submit|preventDefault` stops browser page reloads instantly so JavaScript handles the AJAX payload smoothly.',
        km: 'ការប្រើប្រាស់ `on:submit|preventDefault` ទប់ស្កាត់ការ Reload ទំព័រ បន្ទាប់មកបញ្ជូនកញ្ចប់ទិន្នន័យតាម AJAX។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What directive prefix listens for DOM events in Svelte?',
        km: 'តើ Directive Prefix មួយណាសម្រាប់ចាប់ DOM Event ក្នុង Svelte?'
      },
      solution: 'on:'
    },
    quizQuestions: [
      {
        id: 'q-sv-5-1',
        question: {
          en: 'How do you attach a click event listener function `toggle` to a button in Svelte?',
          km: 'តើអ្នកភ្ជាប់ Click Event Function `toggle` ទៅកាន់ Button ក្នុង Svelte ដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: '<button on:click={toggle}>', km: '<button on:click={toggle}>' }, isCorrect: true },
          { id: '2', text: { en: '<button @click={toggle}>', km: '<button @click={toggle}>' }, isCorrect: false },
          { id: '3', text: { en: '<button onClick={toggle}>', km: '<button onClick={toggle}>' }, isCorrect: false }
        ],
        explanation: {
          en: 'Svelte uses the explicit `on:click={handler}` directive syntax.',
          km: 'Svelte ប្រើប្រាស់ទម្រង់ Directive `on:click={handler}`។'
        }
      }
    ]
  },

  {
    id: 'svelte-l14',
    slug: 'svelte-5-2-event-arguments',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: {
      en: '5.2 Inline Handlers & Passing Arguments',
      km: '៥.២ ការប្រើប្រាស់ Inline Handlers និងបញ្ជូន Arguments'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Svelte allows inline arrow functions directly in event listeners without performance penalties because compiler optimization avoids creating new closures at runtime. You can easily pass parameters: `<button on:click={() => deleteItem(item.id)}>Delete</button>`.',
      km: 'Svelte អនុញ្ញាតឱ្យសរសេរ Inline Arrow Functions ដោយផ្ទាល់ក្នុង Event Handler ដោយគ្មានផលប៉ះពាល់ដល់ Performance ឡើយ ព្រោះ Compiler បានទប់ស្កាត់ការបង្កើត Closures ជាន់គ្នា។ អ្នកអាចបញ្ជូន Parameter បានងាយ៖ `<button on:click={() => deleteItem(item.id)}>លុប</button>`។'
    },
    tutorial: {
      en: 'Syntax: `<button on:click={() => removeItem(id)}>Remove</button>`. Inline handlers are fully optimized by Svelte.',
      km: 'ទម្រង់សរសេរ៖ `<button on:click={() => removeItem(id)}>លុបចេញ</button>`។ Inline Handlers ត្រូវបាន Optimize រួចរាល់ដោយ Svelte Compiler។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .del { background: #f43f5e; color: white; padding: 6px 14px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <h3>Inline Handler Parameter Passing</h3>
  <p>Item: Task #101</p>
  <button class="del" onclick="alert('លុប Task ID: 101 រួចរាល់!')">
    🗑️ លុប Task (deleteItem(101))
  </button>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Dynamic Table Row Action Buttons',
        km: 'ការបង្កើត ប៊ូតុង Action តាមជួរនីមួយៗក្នុង តារាង'
      },
      description: {
        en: 'Passing row IDs into inline click handlers makes table row actions (edit, delete, view profile) extremely straightforward.',
        km: 'ការបញ្ជូន Row ID ទៅកាន់ Inline Click Handler ធ្វើឱ្យការបង្កើត ប៊ូតុង កែប្រែ/លុប ក្នុងតារាងមានភាពងាយស្រួល។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Do inline function handlers like `() => select(id)` cause runtime performance issues in Svelte?',
        km: 'តើការសរសេរ Inline Function Handler ក្នុង Svelte បង្កបញ្ហា Performance ឬទេ?'
      },
      solution: 'No, Svelte compiler optimizes inline event handlers automatically.'
    },
    quizQuestions: [
      {
        id: 'q-sv-5-2',
        question: {
          en: 'How do you pass an argument `5` to a function `add` on button click in Svelte?',
          km: 'តើអ្នកបញ្ជូន Argument `5` ទៅកាន់ Function `add` ពេល Click Button ក្នុង Svelte ដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: '<button on:click={() => add(5)}>', km: '<button on:click={() => add(5)}>' }, isCorrect: true },
          { id: '2', text: { en: '<button on:click=add(5)>', km: '<button on:click=add(5)>' }, isCorrect: false },
          { id: '3', text: { en: '<button on:click={add 5}>', km: '<button on:click={add 5}>' }, isCorrect: false }
        ],
        explanation: {
          en: 'Wrap the call in an arrow function `() => add(5)` to prevent immediate execution during render.',
          km: 'ប្រើប្រាស់ Arrow Function `() => add(5)` ដើម្បីទប់ស្កាត់ការរត់ Function ភ្លាមៗពេល Render។'
        }
      }
    ]
  },

  {
    id: 'svelte-l15',
    slug: 'svelte-5-3-event-dispatcher',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: {
      en: '5.3 Custom Component Events (createEventDispatcher)',
      km: '៥.៣ ការផ្ញើ Custom Events ពី Child ទៅ Parent (createEventDispatcher)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'To send custom events from a child component back up to a parent component, import `createEventDispatcher` from `"svelte"`. Initialize `const dispatch = createEventDispatcher();` and call `dispatch("eventName", payload)`!',
      km: 'ដើម្បីផ្ញើ Custom Event ពី Child Component ត្រឡប់ទៅ Parent Component, នាំចូល `createEventDispatcher` ពី `"svelte"`។ បង្កើត `const dispatch = createEventDispatcher();` រួចរត់ `dispatch("eventName", payload)`!'
    },
    tutorial: {
      en: 'In child: `import { createEventDispatcher } from "svelte"; const dispatch = createEventDispatcher(); dispatch("notify", { msg: "Hello" });`. In parent: `<Child on:notify={handleNotify} />`.',
      km: 'ក្នុង Child: `import { createEventDispatcher } from "svelte"; const dispatch = createEventDispatcher(); dispatch("notify", { msg: "សួស្តី" });`។ ក្នុង Parent: `<Child on:notify={handleNotify} />`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { background: #1e293b; border: 1px solid #e11d48; padding: 16px; border-radius: 12px; max-width: 400px; }
    .btn { background: #e11d48; color: white; padding: 8px 16px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <div class="card">
    <h3>createEventDispatcher Pattern</h3>
    <p>Child Component dispatching custom "message" event to Parent.</p>
    <button class="btn">Dispatch Event to Parent</button>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Modal Close & Selection Callbacks',
        km: 'ការបិទ Pop-up Modal តាមរយៈ Custom Event'
      },
      description: {
        en: 'A Modal dialog component dispatches `dispatch("close")` when the user clicks the X button, notifying the parent dashboard to hide the modal.',
        km: 'Modal Component ផ្ញើ `dispatch("close")` ទៅកាន់ Parent បន្ទាប់ពីអតិថិជនបានចុចប៊ូតុង X ដើម្បីបិទផ្ទាំង Pop-up។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What function imported from "svelte" instantiates the event dispatcher?',
        km: 'តើ Function មួយណាដែល Import ពី "svelte" សម្រាប់បង្កើត Event Dispatcher?'
      },
      solution: 'createEventDispatcher'
    },
    quizQuestions: [
      {
        id: 'q-sv-5-3',
        question: {
          en: 'How does a parent component listen to a custom event named `select` dispatched by a child component?',
          km: 'តើ Parent Component ស្តាប់ Custom Event ឈ្មោះ `select` ពី Child តាមរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: '<Child on:select={handleSelect} />', km: '<Child on:select={handleSelect} />' }, isCorrect: true },
          { id: '2', text: { en: '<Child bind:select={handleSelect} />', km: '<Child bind:select={handleSelect} />' }, isCorrect: false },
          { id: '3', text: { en: '<Child listen:select={handleSelect} />', km: '<Child listen:select={handleSelect} />' }, isCorrect: false }
        ],
        explanation: {
          en: 'Custom component events dispatched via `createEventDispatcher` are caught using standard `on:eventName` directives on the component element.',
          km: 'Custom events ដែលផ្ញើតាម `createEventDispatcher` ត្រូវបានចាប់យកដោយប្រើ Directive `on:eventName` លើ Component Element។'
        }
      }
    ]
  },

  // Module 6: Bindings
  {
    id: 'svelte-l16',
    slug: 'svelte-6-1-bind-value',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: {
      en: '6.1 Two-Way Input Binding with bind:value',
      km: '៦.១ ការចងភ្ជាប់ទិន្នន័យពីផ្លូវ (Two-Way Binding) ជាមួយ `bind:value`'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'In traditional frameworks, syncing form input values with component state requires writing both a value prop and an event listener. Svelte provides two-way binding using the `bind:value={name}` directive, synchronizing input changes and state automatically in both directions!',
      km: 'ក្នុង Framework ផ្សេងៗ, ការចងភ្ជាប់ទិន្នន័យរវាង Input និង State ត្រូវការការសរសេរ Value Prop ផង និង Event Listener ផង។ ប៉ុន្តែ Svelte ផ្តល់ជូន Two-Way Binding ដោយសរសេរត្រឹម `bind:value={name}`! រាល់ការវាយអក្សរក្នុង Input នឹង Update State ហើយរាល់ពេល State ផ្លាស់ប្តូរ វានឹង Update Input ស្វ័យប្រវត្តិ!'
    },
    tutorial: {
      en: 'Syntax: `<input bind:value={username} placeholder="Enter name" />`. Value stays 100% in sync with `username`.',
      km: 'ទម្រង់សរសេរ៖ `<input bind:value={username} placeholder="បញ្ចូលឈ្មោះ" />`។ តម្លៃចងភ្ជាប់គ្នាយ៉ាងល្អឥតខ្ចោះជាមួយ `username`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    input { background: #1e293b; border: 1px solid #38bdf8; color: white; padding: 10px; border-radius: 6px; width: 280px; }
    .out { margin-top: 15px; font-weight: bold; color: #38bdf8; }
  </style>
</head>
<body>
  <h3>Two-Way Binding (bind:value)</h3>
  <input type="text" value="Sokha Chea" placeholder="បញ្ចូលឈ្មោះ...">
  <div class="out">ឈ្មោះបច្ចុប្បន្ន៖ Sokha Chea</div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Live Search Filters & Form Inputs',
        km: 'ការបង្កើត ប្រអប់ស្វែងរកបន្តផ្ទាល់ (Live Search Bar)'
      },
      description: {
        en: 'Binding search input value directly to a query string updates filtered search results in real-time as the user types.',
        km: 'ការចងភ្ជាប់ Input Search ទៅកាន់ Query String ធ្វើឱ្យលទ្ធផលនៃការស្វែងរកបង្ហាញបន្តផ្ទាល់រាល់ពេលវាយអក្សរ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What directive enables two-way data binding on HTML text inputs in Svelte?',
        km: 'តើ Directive មួយណាសម្រាប់ចងភ្ជាប់ Two-Way Binding លើ Input ក្នុង Svelte?'
      },
      solution: 'bind:value'
    },
    quizQuestions: [
      {
        id: 'q-sv-6-1',
        question: {
          en: 'What is the main advantage of using `bind:value={text}` instead of `<input value={text} on:input={e => text = e.target.value}>`?',
          km: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការប្រើប្រាស់ `bind:value={text}`?'
        },
        options: [
          { id: '1', text: { en: 'Concise syntax that keeps state and input element synchronized automatically', km: 'សរសេរកូដខ្លី និងធ្វើឱ្យ State ជាមួយ Input Synchronized ស្វ័យប្រវត្តិ' }, isCorrect: true },
          { id: '2', text: { en: 'It makes the input read-only', km: 'វាធ្វើឱ្យ Input Read-only' }, isCorrect: false },
          { id: '3', text: { en: 'It converts the input into a password mask', km: 'វាបម្លែង Input ទៅជា Password' }, isCorrect: false }
        ],
        explanation: {
          en: '`bind:value` provides effortless two-way synchronization between component state and DOM inputs.',
          km: '`bind:value` ផ្តល់ជូនការចងភ្ជាប់ Two-Way ស្វ័យប្រវត្តិរវាង State និង DOM Input។'
        }
      }
    ]
  },

  {
    id: 'svelte-l17',
    slug: 'svelte-6-2-bind-checked',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: {
      en: '6.2 Binding Checkboxes & Radio Buttons',
      km: '៦.២ ការប្រើប្រាស់ `bind:checked` និង Radio Group Binding'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'For boolean checkbox controls, bind to the `checked` attribute using `<input type="checkbox" bind:checked={isAccepted} />`. For radio buttons, Svelte supports `bind:group={selectedOption}` which binds a shared state variable across multiple radio inputs!',
      km: 'សម្រាប់ Checkbox (Boolean), ចងភ្ជាប់ទៅកាន់ `checked` ដោយប្រើ `<input type="checkbox" bind:checked={isAccepted} />`។ សម្រាប់ Radio Buttons, Svelte ផ្តល់ជូន `bind:group={selectedOption}` ដែលចងភ្ជាប់ Variable តែមួយជាមួយ Radio Inputs ជាច្រើន!'
    },
    tutorial: {
      en: 'Checkbox: `<input type="checkbox" bind:checked={accepted} />`. Radio: `<input type="radio" bind:group={theme} value="dark" />`.',
      km: 'Checkbox: `<input type="checkbox" bind:checked={accepted} />`។ Radio: `<input type="radio" bind:group={theme} value="dark" />`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .box { background: #1e293b; border: 1px solid #10b981; padding: 16px; border-radius: 10px; max-width: 380px; }
    label { font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <div class="box">
    <h3>bind:checked & bind:group Demo</h3>
    <label><input type="checkbox" checked> យល់ព្រមតាមលក្ខខណ្ឌប្រើប្រាស់ (Accepted)</label>
    <p>ស្ថានភាព៖ <strong style="color:#10b981;">✅ Accepted = true</strong></p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'To-Do Task Completion & Dark Mode Toggles',
        km: 'ការ Mark បញ្ចប់ Task និងការប្តូរ Dark Mode'
      },
      description: {
        en: 'Binding a checkbox `bind:checked={task.completed}` updates task status in state immediately upon user click.',
        km: 'ការចងភ្ជាប់ Checkbox `bind:checked={task.completed}` ធ្វើបច្ចុប្បន្នភាព Task ភ្លាមៗពេលចុច។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What directive binds a boolean state variable to an HTML checkbox element in Svelte?',
        km: 'តើ Directive មួយណាសម្រាប់ចងភ្ជាប់ Boolean State ទៅកាន់ Checkbox ក្នុង Svelte?'
      },
      solution: 'bind:checked'
    },
    quizQuestions: [
      {
        id: 'q-sv-6-2',
        question: {
          en: 'How do you bind multiple radio buttons to a single variable named `flavor` in Svelte?',
          km: 'តើអ្នកចងភ្ជាប់ Radio Buttons ជាច្រើនទៅកាន់ Variable តែមួយឈ្មោះ `flavor` ដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'Using bind:group={flavor}', km: 'ប្រើប្រាស់ bind:group={flavor}' }, isCorrect: true },
          { id: '2', text: { en: 'Using bind:value={flavor}', km: 'ប្រើប្រាស់ bind:value={flavor}' }, isCorrect: false },
          { id: '3', text: { en: 'Using bind:radio={flavor}', km: 'ប្រើប្រាស់ bind:radio={flavor}' }, isCorrect: false }
        ],
        explanation: {
          en: '`bind:group` binds grouped radio buttons or checkbox groups to a single shared state property.',
          km: '`bind:group` ប្រើសម្រាប់ចងភ្ជាប់ Radio/Checkbox ជាក្រុមទៅកាន់ Variable តែមួយ។'
        }
      }
    ]
  },

  {
    id: 'svelte-l18',
    slug: 'svelte-6-3-component-bindings',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: {
      en: '6.3 Component Prop Bindings (Two-Way Parent/Child)',
      km: '៦.៣ Two-Way Component Prop Binding (`bind:prop`)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'In Svelte, props can also be bound two-ways between a parent and child component! By writing `<CustomInput bind:value={name} />`, any state change inside the child component propagates back up to update the parent component state automatically.',
      km: 'ក្នុង Svelte, Props អាចចងភ្ជាប់ជា Two-Way រវាង Parent និង Child Component! ដោយសរសេរ `<CustomInput bind:value={name} />`, រាល់ការប្រែប្រួល State ក្នុង Child Component នឹងធ្វើបច្ចុប្បន្នភាព State របស់ Parent Component ស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: 'Syntax: `<Modal bind:open={isModalOpen} />`. Modifying `open` inside Modal updates `isModalOpen` in Parent.',
      km: 'ទម្រង់សរសេរ៖ `<Modal bind:open={isModalOpen} />`។ ការកែប្រែ `open` ក្នុង Modal នឹង Update `isModalOpen` ក្នុង Parent។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { background: #1e293b; border: 1px solid #f59e0b; padding: 16px; border-radius: 12px; max-width: 400px; }
    .val { color: #f59e0b; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <h3>Two-Way Component Prop Binding</h3>
    <p>&lt;SearchModal bind:isOpen={showModal} /&gt;</p>
    <p>Parent State (showModal): <span class="val">true</span></p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Custom Form Control Components',
        km: 'ការបង្កើត Custom Date-Picker & Modal Dialogs'
      },
      description: {
        en: 'Custom inputs like DatePickers or Modals bind internal selection state back to the parent form state seamlessly.',
        km: 'Custom DatePickers អាចបញ្ជូនថ្ងៃខែដែលបានជ្រើសរើសត្រឡប់មក Parent Form វិញយ៉ាងរលូន។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What directive prefix binds a component prop two-ways in Svelte?',
        km: 'តើ Directive Prefix មួយណាសម្រាប់ធ្វើ Two-Way Binding លើ Component Prop?'
      },
      solution: 'bind:'
    },
    quizQuestions: [
      {
        id: 'q-sv-6-3',
        question: {
          en: 'What happens when a child component modifies a prop that was bound with `bind:propName` by the parent?',
          km: 'តើមានអ្វីកើតឡើងនៅពេល Child កែប្រែ Prop ដែលត្រូវចងភ្ជាប់ដោយ `bind:propName` ពី Parent?'
        },
        options: [
          { id: '1', text: { en: 'The corresponding state variable in the parent component updates automatically', km: 'Variable ក្នុង Parent Component ធ្វើបច្ចុប្បន្នភាពស្វ័យប្រវត្តិ' }, isCorrect: true },
          { id: '2', text: { en: 'Svelte throws a prop mutation console error', km: 'Svelte នឹងបង្ហាញ Console Error' }, isCorrect: false },
          { id: '3', text: { en: 'The page reloads completely', km: 'ទំព័រ នឹង Reload ទាំងស្រុង' }, isCorrect: false }
        ],
        explanation: {
          en: '`bind:prop` establishes two-way state binding between parent and child components.',
          km: '`bind:prop` បង្កើតការចងភ្ជាប់ State ពីផ្លូវរវាង Parent និង Child។'
        }
      }
    ]
  },

  // Module 7: Stores
  {
    id: 'svelte-l19',
    slug: 'svelte-7-1-stores-intro',
    moduleNumber: 7,
    lessonNumberInModule: 1,
    title: {
      en: '7.1 Introduction to Global Stores (Avoiding Prop Drilling)',
      km: '៧.១ ការយល់ដឹងអំពី Global Stores (ជៀសវាង Prop Drilling)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'When multiple components at different nesting levels need access to shared state (such as authenticated user info, theme settings, or shopping cart items), passing props down manually through intermediate components causes "prop drilling". Svelte Stores solve this by holding global state outside the component tree!',
      km: 'នៅពេល Component ច្រើននៅទីតាំងផ្សេងៗគ្នាត្រូវការទិន្នន័យរួម (ដូចជា User Auth, Theme, Cart Items), ការបញ្ជូន Props កាត់តាម Component ជាច្រើនជាន់បង្កឱ្យមានបញ្ហា "Prop Drilling"។ Svelte Stores ដោះស្រាយបញ្ហានេះដោយរក្សាទុក State ក្នុង Global Store ខាងក្រៅ Component Tree!'
    },
    tutorial: {
      en: 'Stores live in separate JavaScript/TypeScript files (e.g. `stores.js`) and can be imported by any component anywhere in the app.',
      km: 'Stores ស្ថិតក្នុង File JS/TS ដាច់ដោយឡែក (ឧ. `stores.js`) ហើយអាច Import ដោយ Component ណា Mួយក្នុង App។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .box { background: #1e293b; border: 1px solid #a855f7; padding: 16px; border-radius: 12px; max-width: 420px; }
    .store { color: #a855f7; font-weight: bold; }
  </style>
</head>
<body>
  <div class="box">
    <h3>Svelte Centralized Global Store</h3>
    <p> Global State accessed anywhere without Prop Drilling!</p>
    <p>User Profile: <span class="store">Sokha (Logged In)</span></p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Application Theme & User Authentication State',
        km: 'ការរក្សាទុក Theme និង Auth Status ទូទាំង App'
      },
      description: {
        en: 'Centralizing logged-in user tokens and theme preferences inside a global Svelte Store gives all pages instant access.',
        km: 'ការរក្សាទុក User Tokens ក្នុង Svelte Store ផ្តល់សិទ្ធិឱ្យគ្រប់ Page អាចទាញយកព័ត៌មានបានភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What architectural problem do Svelte Stores prevent when passing data across deep component hierarchies?',
        km: 'តើ Svelte Stores ជួយការពារបញ្ហាអ្វីពេលបញ្ជូនទិន្នន័យកាត់តាម Component ច្រើនជាន់?'
      },
      solution: 'Prop Drilling'
    },
    quizQuestions: [
      {
        id: 'q-sv-7-1',
        question: {
          en: 'Where are Svelte stores typically defined?',
          km: 'តើ Svelte Stores ជាធម្មតាត្រូវបានបង្កើតនៅឯណា?'
        },
        options: [
          { id: '1', text: { en: 'In standalone JavaScript/TypeScript module files', km: 'ក្នុង File Module JS/TS ផ្សេងដាច់ដោយឡែក' }, isCorrect: true },
          { id: '2', text: { en: 'Inside the HTML head tag', km: 'ក្នុង HTML head tag' }, isCorrect: false },
          { id: '3', text: { en: 'Only inside the root App.svelte component style block', km: 'ក្នុង style block នៃ App.svelte' }, isCorrect: false }
        ],
        explanation: {
          en: 'Stores are standard JS objects defined in standalone modules (e.g. `stores.js`).',
          km: 'Stores ជា Standard JS Modules ដែលសរសេរក្នុង File ដាច់ដោយឡែក (ឧ. `stores.js`)។'
        }
      }
    ]
  },

  {
    id: 'svelte-l20',
    slug: 'svelte-7-2-writable-stores',
    moduleNumber: 7,
    lessonNumberInModule: 2,
    title: {
      en: '7.2 Writable Stores & $store Auto-Subscription Syntax',
      km: '៧.២ ការប្រើប្រាស់ Writable Stores និង Auto-Subscription (`$store`)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'To create a reactive store that can be read and updated, use `writable(initialValue)` from `"svelte/store"`. Writable stores expose `.set()`, `.update()`, and `.subscribe()`. Best of all, inside `.svelte` components, prefixing the store name with `$` (e.g. `$cartCount`) automatically subscribes and unsubscribes to prevent memory leaks!',
      km: 'ដើម្បីបង្កើត Store ដែលអាច អាន និង កែប្រែ បាន, ប្រើប្រាស់ `writable(initialValue)` ពី `"svelte/store"`។ Writable Store មាន Method `.set()`, `.update()`, និង `.subscribe()`។ អ្វីដែលអស្ចារ្យបំផុត គឺការថែមសញ្ញា `$` នៅខាងមុខឈ្មោះ Store (ឧ. `$cartCount`) ក្នុង Svelte Component នឹងរៀបចំ Auto-Subscription និង Unsubscribe ដោយស្វ័យប្រវត្តិដើម្បីការពារ Memory Leak!'
    },
    tutorial: {
      en: 'In `store.js`: `import { writable } from "svelte/store"; export const count = writable(0);`. In component: `<h1>{$count}</h1> <button on:click={() => count.update(n => n + 1)}>+</button>`.',
      km: 'ក្នុង `store.js`: `import { writable } from "svelte/store"; export const count = writable(0);`។ ក្នុង Component: `<h1>{$count}</h1> <button on:click={() => count.update(n => n + 1)}>+</button>`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .cart { background: #1e293b; border: 1px solid #ec4899; padding: 16px; border-radius: 12px; max-width: 400px; }
    .badge { background: #ec4899; color: white; padding: 4px 12px; border-radius: 999px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="cart">
    <h3>Writable Store Auto-Subscription ($cart)</h3>
    <p>ចំនួនទំនិញក្នុង Cart ($cartItems.length): <span class="badge">3 Items</span></p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Global E-Commerce Shopping Cart Store',
        km: 'ការបង្កើត Shopping Cart Store សម្រាប់ e-Commerce'
      },
      description: {
        en: 'Updating cart items via `$cart = [...$cart, newItem]` re-renders cart count badges across navbar, drawer, and checkout pages instantly.',
        km: 'ការបន្ថែមទំនិញតាម `$cart = [...$cart, newItem]` នឹង Update ចំនួនទំនិញលើ Header, Navbar និង Checkout ភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What prefix character enables automatic subscription and cleanup for Svelte stores inside component templates?',
        km: 'តើសញ្ញា Prefix មួយណាសម្រាប់ Auto-Subscription និង cleanup លើ Svelte Store ក្នុង Component?'
      },
      solution: '$ (Dollar sign prefix)'
    },
    quizQuestions: [
      {
        id: 'q-sv-7-2',
        question: {
          en: 'What does prefixing a store variable with `$` inside a `.svelte` component do?',
          km: 'តើការថែមសញ្ញា `$` នៅមុខ Store Variable ក្នុង `.svelte` Component មានតួនាទីអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'Automatically subscribes to value changes and handles unsubscribing on component destroy', km: 'រៀបចំ Auto-subscribe និង Unsubscribe ស្វ័យប្រវត្តិពេល Component ត្រូវបានបិទ' }, isCorrect: true },
          { id: '2', text: { en: 'Converts the store value into US Dollars currency', km: 'បម្លែងតម្លៃ Store ទៅជាដុល្លារ US' }, isCorrect: false },
          { id: '3', text: { en: 'Makes the store read-only', km: 'ធ្វើឱ្យ Store ទៅជា Read-only' }, isCorrect: false }
        ],
        explanation: {
          en: 'The `$` prefix is a compiler feature that auto-manages store subscriptions safely without boilerplate.',
          km: 'សញ្ញា `$` ជា Compiler Feature ដែលគ្រប់គ្រង Auto-Subscription លើ Store ដោយសុវត្ថិភាព។'
        }
      }
    ]
  },

  {
    id: 'svelte-l21',
    slug: 'svelte-7-3-readable-derived-stores',
    moduleNumber: 7,
    lessonNumberInModule: 3,
    title: {
      en: '7.3 Readable & Derived Stores',
      km: '៧.៣ ការប្រើប្រាស់ Readable & Derived Stores'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Besides `writable`, Svelte offers `readable` stores (for state that cannot be set externally, like mouse position or system clocks) and `derived` stores (which calculate new values derived from one or more other stores, similar to computed properties)!',
      km: 'ក្រៅពី `writable`, Svelte ផ្តល់ជូន `readable` stores (សម្រាប់ State ដែលមិនអាច កែប្រែ ពីខាងក្រៅបាន ដូចជា ម៉ោង ប្រព័ន្ធ ឬ Mouse Position) និង `derived` stores (ដែលគណនាតម្លៃ ថ្មី ផ្អែកលើ Store ផ្សេងទៀត)!'
    },
    tutorial: {
      en: 'Derived store example: `import { derived } from "svelte/store"; export const doubled = derived(count, $count => $count * 2);`.',
      km: 'Derived store ឧទាហរណ៍៖ `import { derived } from "svelte/store"; export const doubled = derived(count, $count => $count * 2);`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .box { background: #1e293b; border: 1px solid #06b6d4; padding: 16px; border-radius: 12px; max-width: 400px; }
    .clock { color: #06b6d4; font-weight: bold; font-family: monospace; font-size: 20px; }
  </style>
</head>
<body>
  <div class="box">
    <h3>Readable Store (Live System Time)</h3>
    <p>បច្ចុប្បន្នភាពម៉ោងប្រព័ន្ធ ($time):</p>
    <div class="clock">⏰ 09:42:15 AM</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Derived Cart Total & Tax Calculations',
        km: 'ការគណនា ផលបូកតម្លៃ Cart និង ពន្ធ តាម Derived Store'
      },
      description: {
        en: 'A `derived` store automatically recalculates subtotal and taxes whenever the underlying `$cart` writable store updates.',
        km: '`derived` store គណនាតម្លៃសរុប និងពន្ធឡើងវិញដោយស្វ័យប្រវត្តិរាល់ពេល `$cart` Writable store មានការកែប្រែ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which Svelte store utility creates a store whose value is computed automatically from other stores?',
        km: 'តើ Svelte store utility មួយណាសម្រាប់បង្កើត Store ដែលគណនាតម្លៃស្វ័យប្រវត្តិចេញពី Store ផ្សេងទៀត?'
      },
      solution: 'derived'
    },
    quizQuestions: [
      {
        id: 'q-sv-7-3',
        question: {
          en: 'What is the primary function of a `derived` store in Svelte?',
          km: 'តើអ្វីជាតួនាទីចម្បងរបស់ `derived` store ក្នុង Svelte?'
        },
        options: [
          { id: '1', text: { en: 'To compute a new reactive store value based on one or more existing stores', km: 'គណនាតម្លៃ Store ថ្មីផ្អែកលើ Store ដែលមានស្រាប់មួយឬច្រើន' }, isCorrect: true },
          { id: '2', text: { en: 'To save store data directly into MySQL database', km: 'រក្សាទុកទិន្នន័យ Store ទៅក្នុង MySQL' }, isCorrect: false },
          { id: '3', text: { en: 'To render CSS styles on the server', km: 'សម្រាប់ Render CSS លើ Server' }, isCorrect: false }
        ],
        explanation: {
          en: '`derived` stores transform values from input stores into new computed reactive store streams.',
          km: '`derived` stores បម្លែងតម្លៃចេញពី Input Store ទៅជា Computed Reactive Stream ថ្មី។'
        }
      }
    ]
  },

  // Module 8: Component Lifecycle
  {
    id: 'svelte-l22',
    slug: 'svelte-8-1-onmount-lifecycle',
    moduleNumber: 8,
    lessonNumberInModule: 1,
    title: {
      en: '8.1 Component Lifecycle: onMount',
      km: '៨.១ Component Lifecycle Hook: `onMount` '
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The `onMount` lifecycle function runs immediately after the component is first rendered and mounted to the DOM. It is the ideal place to perform API fetch calls, set up third-party DOM canvas libraries, or focus input elements!',
      km: '`onMount` គឺជា Lifecycle Function ដែលរត់ភ្លាមៗបន្ទាប់ពី Component ត្រូវបាន Render និងរៀបចំលើ DOM រួចរាល់។ វាជាកន្លែងដ៏ល្អបំផុតសម្រាប់ Fetch ទិន្នន័យពី API, បើកដំណើការ Canvas Libraries, ឬ Focus លើ Input Element!'
    },
    tutorial: {
      en: 'Usage: `import { onMount } from "svelte"; onMount(() => { console.log("Mounted!"); });`.',
      km: 'របៀបប្រើ៖ `import { onMount } from "svelte"; onMount(() => { console.log("Mounted រួចរាល់!"); });`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .box { background: #1e293b; border: 1px solid #10b981; padding: 16px; border-radius: 12px; max-width: 400px; }
    .status { color: #10b981; font-weight: bold; }
  </style>
</head>
<body>
  <div class="box">
    <h3>onMount Lifecycle Hook</h3>
    <p>ស្ថានភាព Component លើ DOM៖ <span class="status"> Mounted & Ready</span></p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Auto-Focusing Inputs & Chart Initialization',
        km: 'ការធ្វើ Auto-Focus លើ Input ពេលបើក Page'
      },
      description: {
        en: 'Using `onMount(() => inputRef.focus())` automatically focuses the search input when the user opens the modal.',
        km: '`onMount(() => inputRef.focus())` ធ្វើការ Focus លើ Input ស្វ័យប្រវត្តិពេល Modal ត្រូវបានបើក។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which lifecycle function in Svelte runs after the component is inserted into the DOM?',
        km: 'តើ Lifecycle function មួយណាដែលរត់បន្ទាប់ពី Component ត្រូវបញ្ចូលទៅក្នុង DOM?'
      },
      solution: 'onMount'
    },
    quizQuestions: [
      {
        id: 'q-sv-8-1',
        question: {
          en: 'When does the callback function passed to `onMount` execute?',
          km: 'តើ Callback function ក្នុង `onMount` រត់នៅពេលណា?'
        },
        options: [
          { id: '1', text: { en: 'After the component is first mounted to the DOM', km: 'បន្ទាប់ពី Component ត្រូវបញ្ចូលទៅក្នុង DOM ដំបូង' }, isCorrect: true },
          { id: '2', text: { en: 'Before the HTML is compiled', km: 'មុនពេល HTML ត្រូវ Compile' }, isCorrect: false },
          { id: '3', text: { en: 'Every time any prop changes', km: 'រាល់ពេលដែល Prop ផ្លាស់ប្តូរ' }, isCorrect: false }
        ],
        explanation: {
          en: '`onMount` triggers once the component is mounted to the live DOM tree.',
          km: '`onMount` រត់តែម្តងគត់នៅពេល Component ត្រូវបានបញ្ឈរលើ DOM Tree។'
        }
      }
    ]
  },

  {
    id: 'svelte-l23',
    slug: 'svelte-8-2-ondestroy-cleanup',
    moduleNumber: 8,
    lessonNumberInModule: 2,
    title: {
      en: '8.2 Component Cleanup: onDestroy & Returning Cleanups from onMount',
      km: '៨.២ ការ Cleanup Memory: `onDestroy` និង Return Cleanup ពី `onMount` '
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'To prevent memory leaks when components unmount, Svelte provides `onDestroy` or allows returning a cleanup function directly from `onMount`. This is where you clear `setInterval` timers, unsubscribe manually, or remove window event listeners!',
      km: 'ដើម្បីការពារ Memory Leak ពេល Component ត្រូវបានលុបចេញពី DOM, Svelte ផ្តល់ជូន `onDestroy` ឬអនុញ្ញាតឱ្យ Return Cleanup Function ដោតត្រង់ពី `onMount`។ វាជាកន្លែងសម្រាប់លុប `setInterval` timers, remove event listeners, និងសំអាត Connections!'
    },
    tutorial: {
      en: 'Pattern 1: `onDestroy(() => clearInterval(timer));`. Pattern 2 inside `onMount`: `return () => clearInterval(timer);`.',
      km: 'ទម្រង់ទី១៖ `onDestroy(() => clearInterval(timer));`។ ទម្រង់ទី២ ក្នុង `onMount`: `return () => clearInterval(timer);`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .box { background: #1e293b; border: 1px solid #f43f5e; padding: 16px; border-radius: 12px; max-width: 400px; }
    .status { color: #f43f5e; font-weight: bold; }
  </style>
</head>
<body>
  <div class="box">
    <h3>onDestroy Cleanup Safeguard</h3>
    <p>Interval Timers & Window Listeners: <span class="status">🧹 Safely Cleaned</span></p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'WebSocket Connections & Timer Cleanups',
        km: 'ការបិទ WebSocket Connection ពេលចាកចេញពី Page'
      },
      description: {
        en: 'Disconnecting real-time WebSocket channels or stopping countdown timers in `onDestroy` prevents memory leaks.',
        km: 'ការបិទ WebSocket Channel ឬបិទ Countdown Timer ក្នុង `onDestroy` ការពារ Memory Leak និងការខាតបង់ Internet Bandwidth។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What function returned from `onMount` or passed to `onDestroy` cleans up resources?',
        km: 'តើ Function ណាដែលត្រូវបាន Return ពី `onMount` សម្រាប់សំអាត Resources?'
      },
      solution: 'Cleanup function (unmount handler)'
    },
    quizQuestions: [
      {
        id: 'q-sv-8-2',
        question: {
          en: 'How can you clean up a `setInterval` timer started in `onMount`?',
          km: 'តើអ្នកអាចសំអាត `setInterval` timer ដែលបានបង្កើតក្នុង `onMount` ដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'Return a function from onMount that calls clearInterval(timer)', km: 'Return function ពី onMount ដែលហៅ clearInterval(timer)' }, isCorrect: true },
          { id: '2', text: { en: 'Set interval to null inside <style>', km: 'កំណត់ interval ទៅ null ក្នុង <style>' }, isCorrect: false },
          { id: '3', text: { en: 'Svelte cleans up setInterval automatically without intervention', km: 'Svelte ធ្វើការសំអាត setInterval ដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Returning a cleanup function from `onMount` executes that cleanup when the component unmounts.',
          km: 'ការ Return Cleanup Function ពី `onMount` នឹងរត់កូដសំអាតនោះនៅពេល Component Unmounts។'
        }
      }
    ]
  },

  {
    id: 'svelte-l24',
    slug: 'svelte-8-3-fetch-on-mount',
    moduleNumber: 8,
    lessonNumberInModule: 3,
    title: {
      en: '8.3 Practical Example: Fetching Data on Mount & {#await} Blocks',
      km: '៨.៣ ការទាញយកទិន្នន័យពី API ក្នុង `onMount` និងការប្រើប្រាស់ `{#await}` Blocks'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'You can fetch external API data inside `onMount` or use Svelte unique `{#await promise}` template block! The `{#await}` block allows rendering separate UI states for Pending (`{:then data}`), Fulfilled, and Error (`{:catch error}`) directly in your template with zero state boilerplate!',
      km: 'អ្នកអាច Fetch ទិន្នន័យពី API ក្នុង `onMount` ឬប្រើប្រាស់ Feature ពិសេសរបស់ Svelte គឺ `{#await promise}` Block! `{#await}` ផ្តល់ជូនការបង្ហាញ UI ផ្សេងៗគ្នាសម្រាប់ Pending Loading State, Successful (`{:then data}`), និង Error (`{:catch error}`) ដោយផ្ទាល់ក្នុង Template!'
    },
    tutorial: {
      en: 'Syntax: `{#await promise} <p>Loading...</p> {:then data} <p>{data.title}</p> {:catch error} <p>{error.message}</p> {/await}`.',
      km: 'ទម្រង់សរសេរ៖ `{#await promise} <p>កំពុងស្វែងរក...</p> {:then data} <p>{data.title}</p> {:catch error} <p>{error.message}</p> {/await}`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .card { background: #1e293b; border: 1px solid #38bdf8; padding: 16px; border-radius: 12px; max-width: 420px; }
    .badge { background: #38bdf8; color: #020617; font-weight: bold; padding: 4px 10px; border-radius: 999px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">{#await apiPromise} Resolved Data</span>
    <h3>Svelte Async {#await} Template</h3>
    <p>✅ API Payload Loaded: "Svelte 5 Released with Runes"</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'REST API Dashboard Cards',
        km: 'ការបង្កើត Dashboard Cards ទាញយកទិន្នន័យពី REST API'
      },
      description: {
        en: '`{#await fetchUsers()}` handles loading spinners, user avatars rendering, and network error banners gracefully.',
        km: '`{#await fetchUsers()}` គ្រប់គ្រង Loading Spinner, ការបង្ហាញព័ត៌មានអ្នកប្រើប្រាស់ និង Error Banner ដោយស្វ័យប្រវត្តិ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What template block tag handles JavaScript Promises directly in Svelte markup?',
        km: 'តើ Template Block Tag មួយណាសម្រាប់ចាត់ចែង JavaScript Promises ដោយផ្ទាល់ក្នុង Svelte markup?'
      },
      solution: '{#await}'
    },
    quizQuestions: [
      {
        id: 'q-sv-8-3',
        question: {
          en: 'What are the three branches of a complete Svelte `{#await}` template block?',
          km: 'តើសាខាទាំង៣ នៃ Svelte `{#await}` Template Block មានអ្វីខ្លះ?'
        },
        options: [
          { id: '1', text: { en: '{#await promise} ... {:then data} ... {:catch error} ... {/await}', km: '{#await promise} ... {:then data} ... {:catch error} ... {/await}' }, isCorrect: true },
          { id: '2', text: { en: '{#await} ... {:else} ... {:finally} ... {/await}', km: '{#await} ... {:else} ... {:finally} ... {/await}' }, isCorrect: false },
          { id: '3', text: { en: '{#async} ... {:resolve} ... {:reject} ... {/async}', km: '{#async} ... {:resolve} ... {:reject} ... {/async}' }, isCorrect: false }
        ],
        explanation: {
          en: 'Svelte `{#await}` block uses `{:then}` for fulfilled promises and `{:catch}` for rejected errors.',
          km: '`{#await}` ប្រើប្រាស់ `{:then}` ពេល Success និង `{:catch}` ពេលមាន Error។'
        }
      }
    ]
  }
];
