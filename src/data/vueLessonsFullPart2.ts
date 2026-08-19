import { FrontendLesson } from '../types/frontendClass';

export const VUE_LESSONS_PART2: FrontendLesson[] = [
  // Module 6: Components & Props
  {
    id: 'vue-m6-l1',
    slug: 'creating-registering-child-component',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: { en: '6.1 Creating and Registering Child Components', km: '៦.១ ការបង្កើត និងការ Register Child Components' },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Components allow splitting the UI into independent, reusable pieces. In `<script setup>`, imported `.vue` child components are automatically registered and ready in template!',
      km: 'Components អនុញ្ញាតឱ្យបំបែក UI ជាផ្នែកដាច់ៗពីគ្នាដែលអាចប្រើឡើងវិញបាន។ ក្នុង `<script setup>`, ការ Import ឯកសារ `.vue` នឹង Register ដោយស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: 'Simply import component: `import UserBadge from "./UserBadge.vue"`. Then use tag `<UserBadge />`.',
      km: 'គ្រាន់តែ Import: `import UserBadge from "./UserBadge.vue"`។ រួចប្រើប្រាស់ Tag `<UserBadge />`។'
    },
    starterCode: {
      html: `<script setup>
import ProductCard from './ProductCard.vue';
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <ProductCard />
    <ProductCard />
  </div>
</template>`
    },
    realWorldExample: {
      title: { en: 'Reusable Cards & Navigation Bars', km: 'ការប្រើប្រាស់ Component ឡើងវិញ' },
      description: { en: 'Header, Navbar, Footer, and Card components are created once and reused across all pages.', km: 'Header, Navbar, និង Footer ត្រូវបង្កើតតែម្តង តែអាចយកទៅប្រើប្រាស់ឡើងវិញគ្រប់ទំព័រ។' }
    },
    practiceExercise: {
      question: { en: 'Import and use a component named AppHeader', km: 'Import និងប្រើប្រាស់ Component ឈ្មោះ AppHeader' },
      solution: "import AppHeader from './AppHeader.vue';"
    },
    quizQuestions: [
      {
        id: 'q-vue-m6-1',
        question: { en: 'How are child components registered inside <script setup> SFCs?', km: 'តើ Child component ត្រូវ Register យ៉ាងដូចម្តេចក្នុង <script setup> SFC?' },
        options: [
          { id: '1', text: { en: 'Automatically registered by importing them directly in script', km: 'Register ស្វ័យប្រវត្តិដោយគ្រាន់តែ Import ពួកវាផ្ទាល់ក្នុង Script' }, isCorrect: true },
          { id: '2', text: { en: 'Must call Vue.registerComponent() globally', km: 'ត្រូវតែហៅ Vue.registerComponent() Global' }, isCorrect: false }
        ],
        explanation: { en: '`<script setup>` automatically makes imported components available as custom tags.', km: '`<script setup>` អនុញ្ញាតឱ្យប្រើប្រាស់ Component ដែលបាន Import ជា Tag ដោយស្វ័យប្រវត្តិ។' }
      }
    ]
  },
  {
    id: 'vue-m6-l2',
    slug: 'passing-data-down-props',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: { en: '6.2 Passing Data Down with defineProps', km: '៦.២ ការបញ្ជូនទិន្នន័យពី Parent ទៅ Child ជាមួយ defineProps' },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Props are custom attributes registered on a component. Use compiler macro `defineProps(["title", "price"])` inside `<script setup>` to receive parent values.',
      km: 'Props គឺជា Attribute សម្រាប់បញ្ជូនទិន្នន័យពី Parent ទៅ Child។ ប្រើប្រាស់ `defineProps(["title", "price"])` ក្នុង `<script setup>` ដើម្បីទទួលទិន្នន័យ។'
    },
    tutorial: {
      en: 'In parent: `<UserCard :name="userName" :age="24" />`. In child: `const props = defineProps({ name: String, age: Number })`.',
      km: 'ក្នុង Parent: `<UserCard :name="userName" />`។ ក្នុង Child: `const props = defineProps({ name: String })`។'
    },
    starterCode: {
      html: `<script setup>
const props = defineProps({
  username: String,
  status: { type: String, default: 'active' }
});
</script>

<template>
  <div class="p-3 bg-slate-900 border rounded-xl text-xs">
    <p class="font-bold">{{ username }}</p>
    <span class="text-emerald-400 font-mono">{{ status }}</span>
  </div>
</template>`
    },
    realWorldExample: {
      title: { en: 'Generic User Avatars & Badges', km: 'ការបញ្ជូនព័ត៌មាន Profile ទៅ Child Component' },
      description: { en: 'Data fetched from API is mapped and passed down to individual list item components via props.', km: 'ទិន្នន័យពី API ត្រូវបញ្ជូនបន្តទៅកាន់ Component តូចៗតាមរយៈ Props។' }
    },
    practiceExercise: {
      question: { en: 'Define a required string prop title in script setup', km: 'ប្រកាស required string prop ឈ្មោះ title ក្នុង script setup' },
      solution: 'defineProps({ title: { type: String, required: true } });'
    },
    quizQuestions: [
      {
        id: 'q-vue-m6-2',
        question: { en: 'Which function macro declares props in Vue 3 <script setup>?', km: 'តើ Macro function មួយណាសម្រាប់ប្រកាស Props ក្នុង Vue 3 <script setup>?' },
        options: [
          { id: '1', text: { en: 'defineProps()', km: 'defineProps()' }, isCorrect: true },
          { id: '2', text: { en: 'useProps()', km: 'useProps()' }, isCorrect: false }
        ],
        explanation: { en: '`defineProps` is a compile-time macro available inside `<script setup>`.', km: '`defineProps` គឺជា Macro ពិសេសរបស់ Vue 3 `<script setup>`។' }
      }
    ]
  },
  {
    id: 'vue-m6-l3',
    slug: 'prop-validation-types-required-default',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: { en: '6.3 Prop Validation (Types, Required, Default)', km: '៦.៣ ការធ្វើ Prop Validation (ប្រភេទ, Required, និង Default)' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Props can be defined as objects with validation rules specifying `type` (String, Number, Boolean, Array, Object), `required: true`, and `default` fallback values.',
      km: 'Props អាចកំណត់ច្បាប់ផ្ទៀងផ្ទាត់ (Validation) ដូចជា `type` (String, Number, Boolean, Array, Object), `required: true`, និង `default`។'
    },
    tutorial: {
      en: 'Example: `defineProps({ count: { type: Number, default: 0 } })`. Warnings are printed in dev console if mismatched.',
      km: 'ឧទាហរណ៍៖ `defineProps({ count: { type: Number, default: 0 } })`។ វា នឹង ព្រមាន ក្នុង Console ប្រសិនបើបញ្ជូនប្រភេទទិន្នន័យខុស។'
    },
    starterCode: {
      html: `<script setup>
defineProps({
  count: { type: Number, default: 0 },
  tags: { type: Array, default: () => [] }
});
</script>`
    },
    realWorldExample: {
      title: { en: 'Robust Component Design System', km: 'ការកំណត់ច្បាប់បង្កើត Design System រឹងមាំ' },
      description: { en: 'Design system button components validate variant types (`primary`, `secondary`, `danger`) to prevent UI runtime bugs.', km: 'Button Component ក្នុង Design System ពិនិត្យប្រភេទ Variant ដើម្បីការពារ Error UI។' }
    },
    practiceExercise: {
      question: { en: 'Set default value for a boolean prop isActive to false', km: 'កំណត់តម្លៃ default ឱ្យ boolean prop isActive ជា false' },
      solution: 'isActive: { type: Boolean, default: false }'
    },
    quizQuestions: [
      {
        id: 'q-vue-m6-3',
        question: { en: 'What happens if a required prop is omitted when passing props from a parent component?', km: 'តើមានអ្វីកើតឡើងបើ Parent មិនបានបញ្ជូន Required Prop ទៅ Child?' },
        options: [
          { id: '1', text: { en: 'Vue logs a console warning in development mode', km: 'Vue នឹងបង្ហាញ Console warning ក្នុងរៀបរៀង Dev mode' }, isCorrect: true },
          { id: '2', text: { en: 'The entire application crashes permanently', km: 'កម្មវិធី នឹង រលត់ បាត់ ភ្លាមៗ' }, isCorrect: false }
        ],
        explanation: { en: 'Vue validates props in development and logs console warnings if expectations fail.', km: 'Vue បង្ហាញការព្រមានក្នុង Console ដើម្បីឱ្យ Developer ដឹង។' }
      }
    ]
  },

  // Module 7: Emitting Events
  {
    id: 'vue-m7-l1',
    slug: 'child-parent-communication-defineemits',
    moduleNumber: 7,
    lessonNumberInModule: 1,
    title: { en: '7.1 Child-to-Parent Communication with defineEmits', km: '៧.១ ការបញ្ជូនដំណឹងពី Child ទៅ Parent ជាមួយ defineEmits' },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Props flow down, events emit up! Child components notify parent components of actions using compiler macro `const emit = defineEmits(["delete", "update"])`.',
      km: 'Props បញ្ជូនចុះក្រោម, Events ផ្ញើឡើងលើ! Child Component ផ្ញើដំណឹងទៅ Parent ដោយប្រើប្រាស់ macro `const emit = defineEmits(["delete"])`។'
    },
    tutorial: {
      en: 'In child: `emit("delete-item")`. In parent: `<ChildComponent @delete-item="handleDelete" />`.',
      km: 'ក្នុង Child: `emit("delete-item")`។ ក្នុង Parent: `<ChildComponent @delete-item="handleDelete" />`។'
    },
    starterCode: {
      html: `<script setup>
const emit = defineEmits(['item-deleted']);

const removeItem = () => {
  emit('item-deleted');
};
</script>

<template>
  <button @click="removeItem" class="text-rose-400 font-bold">Delete Item</button>
</template>`
    },
    realWorldExample: {
      title: { en: 'Modal Close Buttons & Delete Actions', km: 'ប៊ូតុងលុប និងបិទផ្ទាំង Modal' },
      description: { en: 'When user clicks "Confirm Delete" inside a dialog component, it emits a `confirm` event back to the page view.', km: 'ពេលចុច ប៊ូតុង លុប ក្នុង Dialog, វាផ្ញើ `confirm` event ទៅកាន់ Parent Page។' }
    },
    practiceExercise: {
      question: { en: 'Declare an emitted event custom-click inside script setup', km: 'ប្រកាស emit event ឈ្មោះ custom-click ក្នុង script setup' },
      solution: "const emit = defineEmits(['custom-click']);"
    },
    quizQuestions: [
      {
        id: 'q-vue-m7-1',
        question: { en: 'Which rule describes data flow direction in Vue component architecture?', km: 'តើច្បាប់មួយណាពណ៌នាពីទិសដៅចរន្តទិន្នន័យក្នុង Vue Component?' },
        options: [
          { id: '1', text: { en: 'One-way data flow: Props down, Events up', km: 'One-way data flow: Props ចុះក្រោម, Events ឡើងលើ' }, isCorrect: true },
          { id: '2', text: { en: 'Props up, Events down', km: 'Props ឡើងលើ, Events ចុះក្រោម' }, isCorrect: false }
        ],
        explanation: { en: 'Components accept state via props (down) and trigger callbacks via custom emitted events (up).', km: 'Props ត្រូវបានបញ្ជូនចុះក្រោម ហើយ Events ត្រូវបាន Emitted ឡើងលើ។' }
      }
    ]
  },
  {
    id: 'vue-m7-l2',
    slug: 'passing-data-emitted-event',
    moduleNumber: 7,
    lessonNumberInModule: 2,
    title: { en: '7.2 Passing Payload Data with Emitted Events', km: '៧.២ ការបញ្ជូន Payload Data ជាមួយ Emitted Events' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: '`emit("select", payloadData)` accepts additional arguments as payload parameters passed directly into parent event callback functions.',
      km: '`emit("select", payloadData)` អាចបញ្ជូនតម្លៃ Payload បន្ថែមដើម្បីផ្ញើទៅកាន់ Callback function របស់ Parent។'
    },
    tutorial: {
      en: 'In child: `emit("select-id", 42)`. In parent method: `function handleSelect(id) { console.log(id); }`.',
      km: 'ក្នុង child: `emit("select-id", 42)`។ ក្នុង parent method: `function handleSelect(id) { console.log(id); }`។'
    },
    starterCode: {
      html: `<script setup>
const emit = defineEmits(['select-user']);
const sendUser = (userId) => {
  emit('select-user', { id: userId, name: 'Sophea' });
};
</script>`
    },
    realWorldExample: {
      title: { en: 'Shopping Cart Item Quantity Modifiers', km: 'ការកែប្រែចំនួនទំនិញក្នុងកន្ត្រក' },
      description: { en: 'Quantity selectors emit the updated number `emit("update:qty", newQty)` to recalculate total price in parent.', km: 'ប៊ូតុងកើន/ថយចំនួនទំនិញ ផ្ញើតម្លៃថ្មី `emit("update:qty", newQty)` ទៅ Parent។' }
    },
    practiceExercise: {
      question: { en: 'Emit a change event carrying a new rating score 5', km: 'Emit event change ដោយផ្ញើតម្លៃពិន្ទុ 5' },
      solution: "emit('change', 5);"
    },
    quizQuestions: [
      {
        id: 'q-vue-m7-2',
        question: { en: 'How does a parent component receive payload data emitted by a child event?', km: 'តើ Parent component ទទួលតម្លៃ Payload ដែលផ្ញើដោយ Child តាមរបៀបណា?' },
        options: [
          { id: '1', text: { en: 'As arguments passed to the parent event listener callback function', km: 'ជា Argument ដែលផ្ញើចូលទៅកាន់ Event listener callback function របស់ Parent' }, isCorrect: true },
          { id: '2', text: { en: 'By reading window.localStorage', km: 'ដោយការ អាន window.localStorage' }, isCorrect: false }
        ],
        explanation: { en: 'Arguments passed after the event name in `emit()` arrive as arguments in the listener function.', km: 'តម្លៃ Payload ទាំងអស់នឹងបញ្ជូនជា Argument ទៅកាន់ Handler Function។' }
      }
    ]
  },
  {
    id: 'vue-m7-l3',
    slug: 'parent-child-counter-form-example',
    moduleNumber: 7,
    lessonNumberInModule: 3,
    title: { en: '7.3 Parent/Child Interactive Counter & Form Example', km: '៧.៣ ឧទាហរណ៍អនុវត្ត Parent/Child Counter & Form' },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Combining `props` and `emits` allows building clean modular component architectures where state management resides safely in the parent component.',
      km: 'ការរួមបញ្ចូល `props` និង `emits` អនុញ្ញាតឱ្យសាងសង់ Architecture បំបែកជា Component តូចៗដោយរក្សា State យ៉ាងមានសុវត្ថិភាពក្នុង Parent។'
    },
    tutorial: {
      en: 'Parent controls state `tasks`. Child input component emits `add-task` event when user submits new title.',
      km: 'Parent គ្រប់គ្រង `tasks` state។ Child input component ផ្ញើ `add-task` event ពេលគេ Submit។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white p-6 flex justify-center">
  <div id="app" class="max-w-xs w-full bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
    <h3 class="text-xs font-bold text-emerald-400">Task Manager Parent State</h3>
    <p class="text-xs text-slate-300">Total items: {{ items.length }}</p>
  </div>
  <script>
    Vue.createApp({
      setup() {
        const items = Vue.ref(['Learn Props', 'Learn Emits']);
        return { items };
      }
    }).mount('#app');
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Comment Section Architecture', km: 'រចនាសម្ព័ន្ធប្រព័ន្ធ Comment' },
      description: { en: 'A `CommentList` parent renders multiple `CommentItem` children and handles `like` or `reply` events.', km: 'Parent `CommentList` បង្ហាញ Child `CommentItem` ជាច្រើន ហើយចាត់ចែង Event `like`។' }
    },
    practiceExercise: {
      question: { en: 'How should child request parent to remove itself?', km: 'តើ Child ត្រូវប្រាប់ Parent ឱ្យលុបខ្លួនវាចេញតាមរបៀបណា?' },
      solution: "emit('remove');"
    },
    quizQuestions: [
      {
        id: 'q-vue-m7-3',
        question: { en: 'Why should a child component avoid mutating props directly?', km: 'ហេតុអ្វីបានជា Child component មិនควរកែប្រែតម្លៃ props ដោយផ្ទាល់?' },
        options: [
          { id: '1', text: { en: 'It breaks one-way data flow and triggers Vue runtime warning', km: 'វា បំផ្លាញ One-way data flow និងបង្កើត Console warning ក្នុង Vue' }, isCorrect: true },
          { id: '2', text: { en: 'It deletes the component from memory', km: 'វា លុប Component ចោល' }, isCorrect: false }
        ],
        explanation: { en: 'Props are read-only bindings. Emit an event so the parent mutates its own state instead.', km: 'Props មានសិទ្ធិត្រឹម Read-only។ ត្រូវ Emit Event ឱ្យ Parent ជាអ្នកអាប់ដេត State វិញ។' }
      }
    ]
  },

  // Module 8: Lifecycle Hooks
  {
    id: 'vue-m8-l1',
    slug: 'lifecycle-hooks-overview-onmounted',
    moduleNumber: 8,
    lessonNumberInModule: 1,
    title: { en: '8.1 Lifecycle Hooks Overview (onMounted, onUnmounted)', km: '៨.១ ទិដ្ឋភាពទូទៅនៃ Lifecycle Hooks (onMounted, onUnmounted)' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Vue components undergo creation, mounting, updating, and unmounting phases. Register lifecycle callbacks using functions like `onMounted()` and `onUnmounted()`.',
      km: 'Vue Components មានដំណាក់កាលបង្កើត (Creation), ភ្ជាប់ DOM (Mounting), អាប់ដេត (Updating), និងលុបចេញ (Unmounting)។ Register Lifecycle ដោយប្រើ `onMounted()` និង `onUnmounted()`។'
    },
    tutorial: {
      en: 'Import lifecycle functions directly: `import { onMounted, onUnmounted } from "vue"`.',
      km: 'Import Lifecycle functions ផ្ទាល់៖ `import { onMounted, onUnmounted } from "vue"`។'
    },
    starterCode: {
      html: `<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log('Component is now mounted in DOM!');
});

onUnmounted(() => {
  console.log('Component unmounted and cleaned up.');
});
</script>`
    },
    realWorldExample: {
      title: { en: 'Analytics & Page View Metrics', km: 'ការកត់ត្រា Metric ពេលបើកទំព័រ' },
      description: { en: 'Web metrics track page view events inside `onMounted()` when user navigates to a new view.', km: 'ប្រព័ន្ធ Analytics ផ្ញើ ទិន្នន័យ Page view ក្នុង `onMounted()` ពេលអ្នកប្រើប្រាស់ចូលទំព័រថ្មី។' }
    },
    practiceExercise: {
      question: { en: 'Which hook fires after initial component DOM rendering?', km: 'តើ Hook មួយណាដំណើរការក្រោយពេល Component ត្រូវបាន Render ចូល DOM ដំបូង?' },
      solution: 'onMounted()'
    },
    quizQuestions: [
      {
        id: 'q-vue-m8-1',
        question: { en: 'Which Vue lifecycle hook runs immediately after the component is attached to the DOM?', km: 'តើ Lifecycle hook មួយណាដំណើរការភ្លាមៗក្រោយពេល Component ត្រូវប្រកាសភ្ជាប់ក្នុង DOM?' },
        options: [
          { id: '1', text: { en: 'onMounted()', km: 'onMounted()' }, isCorrect: true },
          { id: '2', text: { en: 'onCreated()', km: 'onCreated()' }, isCorrect: false }
        ],
        explanation: { en: '`onMounted()` guarantees DOM element refs are active and available.', km: '`onMounted()` ធានាថា DOM Element Refs មានវត្តមានពេញលេញ។' }
      }
    ]
  },
  {
    id: 'vue-m8-l2',
    slug: 'common-use-case-fetching-data-onmounted',
    moduleNumber: 8,
    lessonNumberInModule: 2,
    title: { en: '8.2 Fetching API Data inside onMounted', km: '៨.២ ការ Fetch ទិន្នន័យពី API ក្នុង onMounted' },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The most common use-case for `onMounted()` is triggering HTTP network requests to fetch data from backend JSON REST APIs.',
      km: 'ករណីប្រើប្រាស់ `onMounted()` ញឹកញាប់បំផុតគឺការទាញយកទិន្នន័យពី REST API Backend មកបង្ហាញលើ UI។'
    },
    tutorial: {
      en: '`onMounted(async () => { const res = await fetch("/api"); data.value = await res.json(); });`.',
      km: '`onMounted(async () => { const res = await fetch("/api"); data.value = await res.json(); });`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white p-6 flex justify-center">
  <div id="app" class="max-w-xs w-full bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2">
    <p v-if="loading" class="text-xs text-amber-400">Loading data...</p>
    <div v-else class="text-xs text-emerald-400 font-bold">Data Loaded Successfully!</div>
  </div>
  <script>
    const { createApp, ref, onMounted } = Vue;
    createApp({
      setup() {
        const loading = ref(true);
        onMounted(() => {
          setTimeout(() => { loading.value = false; }, 1500);
        });
        return { loading };
      }
    }).mount('#app');
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Dashboard Data Fetching', km: 'ការទាញយកព័ត៌មាន Dashboard' },
      description: { en: 'Dashboards load user profile details, notifications, and balance records inside `onMounted()`.', km: 'Dashboard ទាញយកព័ត៌មាន Profile និងការជូនដំណឹងផ្សេងៗក្នុង `onMounted()`។' }
    },
    practiceExercise: {
      question: { en: 'Where should asynchronous API calls be executed in Vue SFC?', km: 'តើគួរប្រព្រឹត្តការហៅ Async API នៅត្រង់ណា?' },
      solution: 'onMounted()'
    },
    quizQuestions: [
      {
        id: 'q-vue-m8-2',
        question: { en: 'Why is onMounted preferred over top-level script execution for fetching initial page data?', km: 'ហេតុអ្វីបានជាគេនិយមប្រើ onMounted ជាជាងសរសេរ top-level script សម្រាប់ទាញយកទិន្នន័យទំព័រដំបូង?' },
        options: [
          { id: '1', text: { en: 'It guarantees component DOM setup is complete and prevents blocking initial rendering', km: 'វា ធានា ថា DOM setup រួចរាល់ និងមិនបង្កការទាក់ UI ពេល Render ដំបូង' }, isCorrect: true },
          { id: '2', text: { en: 'It encrypts passwords automatically', km: 'វា អ៊ិនគ្រីប ពាក្យសម្ងាត់ ស្វ័យប្រវត្តិ' }, isCorrect: false }
        ],
        explanation: { en: '`onMounted` executes after initial layout setup, ensuring smooth UI initialization.', km: '`onMounted` រ៉ាន់ក្រោយការរៀបចំ Layout រួចរាល់។' }
      }
    ]
  },
  {
    id: 'vue-m8-l3',
    slug: 'cleanup-in-onunmounted',
    moduleNumber: 8,
    lessonNumberInModule: 3,
    title: { en: '8.3 Event Cleanup in onUnmounted', km: '៨.៣ ការ Cleanup ក្នុង onUnmounted' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'To prevent memory leaks, clean up global event listeners (`window.addEventListener`), WebSocket subscriptions, and timers (`clearInterval`) inside `onUnmounted()`.',
      km: 'ដើម្បីការពារ Memory Leaks, ត្រូវលុប Global event listeners (`window.addEventListener`), WebSocket, និង Timers (`clearInterval`) ក្នុង `onUnmounted()`។'
    },
    tutorial: {
      en: 'Pairing setup & teardown: create timer in `onMounted()`, clear timer in `onUnmounted()`.',
      km: 'បង្កើត Timer ក្នុង `onMounted()`, រួចលុប Timer ចោលក្នុង `onUnmounted()`។'
    },
    starterCode: {
      html: `<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

let timerId = null;
const seconds = ref(0);

onMounted(() => {
  timerId = setInterval(() => { seconds.value++; }, 1000);
});

onUnmounted(() => {
  clearInterval(timerId); // Prevents memory leak!
});
</script>`
    },
    realWorldExample: {
      title: { en: 'Live Stock Tickers & Timers', km: 'នាឡិកា និងការបាញ់ផ្សាយទិន្នន័យ' },
      description: { en: 'Real-time chart components destroy their WebSocket connections on unmount when user leaves tab.', km: 'Chart Component បំផ្លាញ ការភ្ជាប់ WebSocket ពេលអ្នកប្រើប្រាស់ចាកចេញពីទំព័រ។' }
    },
    practiceExercise: {
      question: { en: 'What function clears a timer created by setInterval?', km: 'តើ Function អ្វីសម្រាប់លុប Timer ដែលបង្កើតដោយ setInterval?' },
      solution: 'clearInterval(timerId);'
    },
    quizQuestions: [
      {
        id: 'q-vue-m8-3',
        question: { en: 'What danger exists if window event listeners or timers are NOT cleaned up onUnmounted?', km: 'តើមានគ្រោះថ្នាក់អ្វីបើមិនបាន Cleanup event listeners ក្នុង onUnmounted?' },
        options: [
          { id: '1', text: { en: 'Memory leaks and orphaned event callbacks continuing in background', km: 'កើតមាន Memory leaks និងទាញកម្លាំង Background ឥតប្រយោជន៍' }, isCorrect: true },
          { id: '2', text: { en: 'HTML files get deleted permanently', km: 'ឯកសារ HTML ត្រូវលុបចោល' }, isCorrect: false }
        ],
        explanation: { en: 'Orphaned timers or event listeners persist in memory if not explicitly removed.', km: 'Timer ឬ Event listener ដែលគ្មានការលុបនឹងស្ថិតក្នុង Memory បង្កជា Memory leak។' }
      }
    ]
  },

  // Module 9: Vue Router Basics
  {
    id: 'vue-m9-l1',
    slug: 'setting-up-vue-router',
    moduleNumber: 9,
    lessonNumberInModule: 1,
    title: { en: '9.1 Setting Up Vue Router', km: '៩.១ ការដំឡើង និងកំណត់ Vue Router' },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Vue Router is the official Single Page Application (SPA) routing library for Vue.js. It maps URL paths to component views without full page reloads.',
      km: 'Vue Router គឺជា Routing library ផ្លូវការសម្រាប់ Vue.js SPA។ វាភ្ជាប់ URL Paths ទៅកាន់ Component ដោយមិនបាច់ Reload ទំព័រឡើយ។'
    },
    tutorial: {
      en: 'Install via `npm install vue-router@4`. Create router instance with `createRouter({ history: createWebHistory(), routes })`.',
      km: 'ដំឡើងតាម `npm install vue-router@4`។ បង្កើត Router ជាមួយ `createRouter({ history: createWebHistory(), routes })`។'
    },
    starterCode: {
      html: `<div className="bg-slate-900 p-4 border border-slate-800 rounded-xl font-mono text-xs text-sky-400">
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
</div>`
    },
    realWorldExample: {
      title: { en: 'Single Page Web App Navigation', km: 'ការផ្លាស់ប្តូរទំព័រ SPA លឿនរហ័ស' },
      description: { en: 'Modern web portals transition seamlessly between Home, Dashboard, and Settings tabs instantly using Vue Router.', km: 'Web Application ផ្លាស់ប្តូររវាង Home, Dashboard, និង Settings ភ្លាមៗដោយគ្មាន Reload។' }
    },
    practiceExercise: {
      question: { en: 'Which method creates HTML5 web history in Vue Router 4?', km: 'តើ Method អ្វីបង្កើត HTML5 Web History ក្នុង Vue Router 4?' },
      solution: 'createWebHistory()'
    },
    quizQuestions: [
      {
        id: 'q-vue-m9-1',
        question: { en: 'What primary advantage does Vue Router provide in Single Page Apps?', km: 'តើ Vue Router ផ្តល់អត្ថប្រយោជន៍ចម្បងអ្វីខ្លះក្នុង SPA?' },
        options: [
          { id: '1', text: { en: 'Dynamic component rendering mapped to URL without browser page reloads', km: 'ផ្លាស់ប្តូរ Component តាម URL ភ្លាមៗដោយមិនបាច់ Reload ទំព័រ' }, isCorrect: true },
          { id: '2', text: { en: 'It compresses image files automatically', km: 'វា បង្រួម ទំហំ រូបភាព' }, isCorrect: false }
        ],
        explanation: { en: 'Vue Router intercepts browser navigation to swap view components in client-side runtime.', km: 'Vue Router ផ្លាស់ប្តូរ View Component ដោយមិនបាច់ទាញ HTML ថ្មីពី Server។' }
      }
    ]
  },
  {
    id: 'vue-m9-l2',
    slug: 'router-link-router-view',
    moduleNumber: 9,
    lessonNumberInModule: 2,
    title: { en: '9.2 Defining Routes with <router-link> and <router-view>', km: '៩.២ ការកំណត់ Routes ជាមួយ <router-link> និង <router-view>' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: '`<RouterLink to="/about">` creates accessible client-side navigation links. `<RouterView />` acts as the placeholder target slot where matched route components render.',
      km: '`<RouterLink to="/about">` បង្កើត Link សម្រាប់ផ្លាស់ប្តូរទំព័រ។ `<RouterView />` ជាកន្លែងសម្រាប់បង្ហាញ Component ដែលត្រូវនឹង Route។'
    },
    tutorial: {
      en: 'Replace standard `<a href="/about">` with `<RouterLink to="/about">` to avoid unwanted browser HTTP full-page reloads.',
      km: 'ជំនួស `<a href="/about">` ដោយ `<RouterLink to="/about">` ដើម្បីការពារការ Reload ទំព័រ។'
    },
    starterCode: {
      html: `<template>
  <nav class="flex gap-4 p-4 bg-slate-900 border-b border-slate-800 text-xs">
    <RouterLink to="/" class="hover:text-emerald-400">Home</RouterLink>
    <RouterLink to="/tasks" class="hover:text-emerald-400">Tasks</RouterLink>
  </nav>

  <main class="p-6">
    <!-- Matched route component renders right here! -->
    <RouterView />
  </main>
</template>`
    },
    realWorldExample: {
      title: { en: 'Persistent App Navigation Shells', km: 'ការរក្សាទុក Navigation Bar ថេរ' },
      description: { en: 'App headers, sidebars, and user footers stay persistent while `<RouterView />` swaps content area.', km: 'Header, Sidebar និង Footer នៅដដែល ខណៈពេល `<RouterView />` ប្តូរតែ ខ្លឹមសារ កណ្តាល។' }
    },
    practiceExercise: {
      question: { en: 'Where do matched view components display in template?', km: 'តើ Component ដែលត្រូវនឹង Route បង្ហាញនៅត្រង់ណា?' },
      solution: '<RouterView />'
    },
    quizQuestions: [
      {
        id: 'q-vue-m9-2',
        question: { en: 'Which component serves as the target rendering outlet for matched Vue routes?', km: 'តើ Component មួយណាជាកន្លែងបង្ហាញ Route ដែលត្រូវគ្នា?' },
        options: [
          { id: '1', text: { en: '<RouterView />', km: '<RouterView />' }, isCorrect: true },
          { id: '2', text: { en: '<RouteSlot />', km: '<RouteSlot />' }, isCorrect: false }
        ],
        explanation: { en: '`<RouterView />` renders the matched route component for the active path.', km: '`<RouterView />` ជា Component Outlet ផ្លូវការរបស់ Vue Router។' }
      }
    ]
  },
  {
    id: 'vue-m9-l3',
    slug: 'route-parameters-dynamic-routing',
    moduleNumber: 9,
    lessonNumberInModule: 3,
    title: { en: '9.3 Dynamic Route Parameters (useRoute & useRouter)', km: '៩.៣ Route Parameters ឌីណាមិក (useRoute & useRouter)' },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Dynamic routes use colon parameters like `{ path: "/users/:id", component: UserProfile }`. Access parameters in components via `useRoute().params.id`.',
      km: 'Dynamic routes ប្រើប្រាស់ Param ដូចជា `{ path: "/users/:id" }`។ ទាញយកតម្លៃ Param ក្នុង Component តាម `useRoute().params.id`។'
    },
    tutorial: {
      en: 'Use `useRoute()` to inspect current URL state. Use `useRouter()` to navigate programmatically: `router.push("/dashboard")`.',
      km: 'ប្រើ `useRoute()` ដើម្បីអានព័ត៌មាន URL។ ប្រើ `useRouter()` ដើម្បីផ្លាស់ប្តូរទំព័រតាមកូដ៖ `router.push("/dashboard")`។'
    },
    starterCode: {
      html: `<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const userId = route.params.id; // Reads :id parameter!

const goHome = () => {
  router.push('/');
};
</script>`
    },
    realWorldExample: {
      title: { en: 'E-Commerce Product Detail Pages', km: 'ទំព័របង្ហាញព័ត៌មានលម្អិតទំនិញ' },
      description: { en: 'Navigating to `/product/99` loads product item #99 dynamically from API based on route params.', km: 'ការចូលទៅកាន់ `/product/99` នឹងទាញយកព័ត៌មានទំនិញលេខ 99 ពី API តាម Param។' }
    },
    practiceExercise: {
      question: { en: 'How do you programmatically redirect user to /login route in Vue?', km: 'តើធ្វើដូចម្តេចដើម្បីបញ្ជូនអ្នកប្រើប្រាស់ទៅកាន់ទំព័រ /login តាមកូដ?' },
      solution: "router.push('/login');"
    },
    quizQuestions: [
      {
        id: 'q-vue-m9-3',
        question: { en: 'Which composable hook retrieves dynamic route parameters (like :id)?', km: 'តើ Hook មួយណាសម្រាប់ទាញយកតម្លៃ Dynamic route parameters?' },
        options: [
          { id: '1', text: { en: 'useRoute()', km: 'useRoute()' }, isCorrect: true },
          { id: '2', text: { en: 'useParamsHook()', km: 'useParamsHook()' }, isCorrect: false }
        ],
        explanation: { en: '`useRoute()` gives reactive access to active path params, query params, and route metadata.', km: '`useRoute()` ផ្តល់លទ្ធភាពអាន Params, Query, និង Metadata នៃ Route បច្ចុប្បន្ន។' }
      }
    ]
  },

  // Module 10: Composition API vs Options API
  {
    id: 'vue-m10-l1',
    slug: 'options-api-legacy-codebases',
    moduleNumber: 10,
    lessonNumberInModule: 1,
    title: { en: '10.1 Options API in Legacy Codebases', km: '១០.១ Options API ក្នុង Codebase ចាស់ៗ' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Options API structures component logic with an options object containing `data()`, `methods`, `computed`, and `mounted()` properties. It is crucial to recognize when reading existing Vue 2/3 legacy code.',
      km: 'Options API រៀបចំកូដជា Object មាន `data()`, `methods`, `computed`, និង `mounted()`។ ការយល់ដឹងពីវាជួយឱ្យអានកូដ Vue ចាស់ៗបានយ៉ាងងាយស្រួល។'
    },
    tutorial: {
      en: 'Example: `export default { data() { return { count: 0 }; }, methods: { inc() { this.count++; } } }`.',
      km: 'ឧទាហរណ៍៖ `export default { data() { return { count: 0 }; }, methods: { inc() { this.count++; } } }`។'
    },
    starterCode: {
      html: `<script>
export default {
  data() {
    return {
      message: 'Hello Options API!'
    };
  },
  methods: {
    greet() {
      alert(this.message);
    }
  }
};
</script>`
    },
    realWorldExample: {
      title: { en: 'Maintaining Legacy Vue 2 Projects', km: 'ការថែទាំគម្រោង Vue 2 ចាស់ៗ' },
      description: { en: 'Enterprise companies migrating older Vue 2 codebases incrementally encounter Options API daily.', km: 'ក្រុមហ៊ុនធំៗដែលកំពុង Migrate កូដ Vue 2 ចាស់ៗ តែងជួបប្រទះ Options API ជារៀងរាល់ថ្ងៃ។' }
    },
    practiceExercise: {
      question: { en: 'Where are state variables initialized in Options API?', km: 'តើអថេរ State ត្រូវបានប្រកាសនៅត្រង់ណា ក្នុង Options API?' },
      solution: 'data() return object'
    },
    quizQuestions: [
      {
        id: 'q-vue-m10-1',
        question: { en: 'In Vue Options API, where are initial reactive state properties defined?', km: 'ក្នុង Vue Options API, តើទិន្នន័យ Reactive State ដំបូងត្រូវប្រកាសនៅត្រង់ណា?' },
        options: [
          { id: '1', text: { en: 'Inside the data() option function return object', km: 'ក្នុង Return object នៃ data() option function' }, isCorrect: true },
          { id: '2', text: { en: 'Inside CSS file', km: 'ក្នុង ឯកសារ CSS' }, isCorrect: false }
        ],
        explanation: { en: '`data()` returns the reactive state instance properties in Options API.', km: '`data()` គឺជា Option Function ដែល Return តម្លៃ State ដំបូង។' }
      }
    ]
  },
  {
    id: 'vue-m10-l2',
    slug: 'why-composition-api-script-setup',
    moduleNumber: 10,
    lessonNumberInModule: 2,
    title: { en: '10.2 Why Composition API <script setup> Wins', km: '១០.២ ហេតុអ្វី Composition API <script setup> ត្រូវគេនិយមប្រើ' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Composition API groups related logic together by feature rather than splitting code across `data`, `methods`, and `computed`. This delivers far better code reusability (Composables) and full TypeScript type safety.',
      km: 'Composition API ប្រមូលផ្តុំ Logic តាម Feature ជំនួសឱ្យការបំបែករវាង `data`, `methods`, និង `computed`។ វាផ្តល់នូវភាពងាយស្រួល Reusability (Composables) និង Type safety។'
    },
    tutorial: {
      en: 'Refactoring: Extract reusable reactive state & functions into custom `useMouse()`, `useAuth()`, or `useFetch()` composable files.',
      km: 'ការបង្កើត Composables: ទាញយក State និង Function ទៅសរសេរជា `useAuth()` ឬ `useFetch()` ដាច់ដោយឡែក។'
    },
    starterCode: {
      html: `<script setup>
// Composition API allows clean modular composables!
import { ref, onMounted } from 'vue';

const count = ref(0);
const increment = () => count.value++;
</script>`
    },
    realWorldExample: {
      title: { en: 'Custom Composables (useAuth, useCart)', km: 'ការបង្កើត Custom Composables ដូចជា useAuth' },
      description: { en: 'Share authentication logic seamlessly across 20+ pages using a single `useAuth()` composable file.', km: 'ចែករំលែកប្រព័ន្ធ Auth ទៅកាន់ទំព័រជាង ២០ ដោយប្រើប្រាស់ `useAuth()` Composable តែមួយ។' }
    },
    practiceExercise: {
      question: { en: 'What naming convention is required for Vue composable functions?', km: 'តើការដាក់ឈ្មោះ Composable Function ក្នុង Vue ត្រូវចាប់ផ្តើមដោយពាក្យអ្វី?' },
      solution: 'Prefix with "use" (e.g. useUser)'
    },
    quizQuestions: [
      {
        id: 'q-vue-m10-2',
        question: { en: 'What is the primary architectural advantage of Vue 3 Composition API over Options API?', km: 'តើអ្វីជាអត្ថប្រយោជន៍ ចម្បង នៃ Composition API លើ Options API?' },
        options: [
          { id: '1', text: { en: 'Logic is organized cleanly by logical feature and extracted into reusable Composables', km: 'Logic ត្រូវរៀបចំតាម Feature យ៉ាងមានរបៀប និងអាចទាញជា Composable ប្រើឡើងវិញបាន' }, isCorrect: true },
          { id: '2', text: { en: 'It removes the requirement for HTML tags', km: 'វា លុបចោល តម្រូវការ HTML' }, isCorrect: false }
        ],
        explanation: { en: 'Composition API enables organizing code by feature concerns rather than options types.', km: 'Composition API រៀបចំកូដតាម Feature ធ្វើឱ្យងាយស្រួលគ្រប់គ្រង និង Reuse។' }
      }
    ]
  },
  {
    id: 'vue-m10-l3',
    slug: 'recognizing-both-styles-real-world-projects',
    moduleNumber: 10,
    lessonNumberInModule: 3,
    title: { en: '10.3 Recognizing Both Styles in Real-World Projects', km: '១០.៣ ការស្គាល់ និងការប្រើប្រាស់ទាំងពីរស្តាយក្នុងគម្រោងពិត' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Professional Vue developers comfortably read both Options API and Composition API code. Vue 3 fully supports both paradigms side by side!',
      km: 'Developer Vue អាជីពអាចអាន និងសរសេរបានទាំង Options API និង Composition API។ Vue 3 គាំទ្រទាំងពីរស្តាយទន្ទឹមគ្នា!'
    },
    tutorial: {
      en: 'When creating NEW projects or components, default to Composition API `<script setup>`.',
      km: 'ពេលបង្កើត Project ឬ Component ថ្មី, ត្រូវប្រើប្រាស់ Composition API `<script setup>` ជាជម្រើសដំបូង។'
    },
    starterCode: {
      html: `<div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs">
  <div class="text-emerald-400 font-bold">✓ Modern Default: Composition API &lt;script setup&gt;</div>
  <div class="text-slate-400">✓ Legacy Reading: Options API export default { data, methods }</div>
</div>`
    },
    realWorldExample: {
      title: { en: 'Open-Source Library Contributions', km: 'ការរួមចំណែកក្នុង Open-source Libraries' },
      description: { en: 'Popular Vue UI component libraries (Vuetify, PrimeVue, Element Plus) support both API styles.', km: 'UI Library ល្បីៗដូចជា PrimeVue, Element Plus គាំទ្រទាំងពីរស្តាយ។' }
    },
    practiceExercise: {
      question: { en: 'Which style is recommended for all modern Vue 3 applications?', km: 'តើស្តាយមួយណាត្រូវណែនាំសម្រាប់គ្រប់ Vue 3 App ទំនើប?' },
      solution: 'Composition API with <script setup>'
    },
    quizQuestions: [
      {
        id: 'q-vue-m10-3',
        question: { en: 'Which syntax is officially recommended for new Vue 3 production applications?', km: 'តើ Syntax មួយណាត្រូវបានណែនាំផ្លូវការសម្រាប់ Vue 3 Production App ថ្មីៗ?' },
        options: [
          { id: '1', text: { en: 'Composition API with <script setup>', km: 'Composition API ជាមួយ <script setup>' }, isCorrect: true },
          { id: '2', text: { en: 'jQuery script plugins', km: 'jQuery script plugins' }, isCorrect: false }
        ],
        explanation: { en: 'Composition API with `<script setup>` is the official recommended standard for Vue 3.', km: 'Composition API ជាមួយ `<script setup>` គឺជាស្តង់ដារផ្លូវការរបស់ Vue 3។' }
      }
    ]
  }
];
