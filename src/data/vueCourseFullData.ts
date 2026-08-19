import { FrontendCourse, FrontendQuizQuestion } from '../types/frontendClass';
import { VUE_LESSONS_PART1 } from './vueLessonsFullPart1';
import { VUE_LESSONS_PART2 } from './vueLessonsFullPart2';

const VUE_CHEAT_SHEET = [
  {
    concept: 'ref() & reactive() State',
    code: `import { ref, reactive } from 'vue';

// Primitive reactive state (uses .value in JS)
const count = ref(0);
count.value++;

// Complex object reactive proxy (no .value needed)
const user = reactive({ name: 'Sokha', points: 100 });
user.points += 10;`,
    explanation: {
      en: 'Use `ref()` for primitives (numbers, strings, booleans). Use `reactive()` for objects. In templates, `ref` unwraps `.value` automatically.',
      km: 'ប្រើ `ref()` សម្រាប់អថេរទូទៅ (អាន `.value` ក្នុង JS)។ ប្រើ `reactive()` សម្រាប់ Object។ ក្នុង Template, `ref` នឹង Unwrap `.value` ដោយស្វ័យប្រវត្តិ។'
    }
  },
  {
    concept: 'Directives & Shorthands (:, @, v-model)',
    code: `<!-- Attribute Binding (v-bind:) -->
<img :src="imageUrl" :alt="title" />

<!-- Event Listener (v-on:) -->
<button @click="handleClick" @keyup.enter="submitForm">Save</button>

<!-- Two-Way Form Binding -->
<input v-model="username" placeholder="Type name..." />`,
    explanation: {
      en: '`:` is shorthand for `v-bind`. `@` is shorthand for `v-on`. `v-model` provides bi-directional form input synchronization.',
      km: 'សញ្ញា `:` ជំនួសឱ្យ `v-bind`។ សញ្ញា `@` ជំនួសឱ្យ `v-on`។ `v-model` ភ្ជាប់ទិន្នន័យ Two-Way លើ Form Input។'
    }
  },
  {
    concept: 'props & emits Declaration',
    code: `<script setup>
// Receive props from parent
const props = defineProps({
  title: { type: String, required: true },
  active: { type: Boolean, default: false }
});

// Declare custom events to emit
const emit = defineEmits(['update-status', 'delete']);

const notifyParent = () => {
  emit('update-status', 'completed');
};
</script>`,
    explanation: {
      en: '`defineProps()` receives data from parent. `defineEmits()` sends events and payloads back up to parent.',
      km: '`defineProps()` ទទួលទិន្នន័យពី Parent។ `defineEmits()` ផ្ញើ Event និង Payload ត្រឡប់ទៅ Parent វិញ។'
    }
  },
  {
    concept: 'Computed Properties & Lifecycle',
    code: `import { computed, onMounted } from 'vue';

const remainingTasks = computed(() => {
  return tasks.value.filter(t => !t.completed).length;
});

onMounted(async () => {
  // Executed after component is attached to DOM
  const res = await fetch('/api/tasks');
  tasks.value = await res.json();
});`,
    explanation: {
      en: '`computed()` returns cached reactive values based on reactive dependencies. `onMounted()` handles post-DOM attachment side-effects.',
      km: '`computed()` គណនាតម្លៃ Reactive ដែលមាន Caching។ `onMounted()` ដំណើរការក្រោយពេល Component បង្ហាញលើ DOM។'
    }
  },
  {
    concept: 'Vue Router Navigation',
    code: `import { useRoute, useRouter } from 'vue-router';

const route = useRoute();   // Access current URL & params
const router = useRouter(); // Trigger navigation

console.log(route.params.id); // Reads dynamic route parameter
router.push('/dashboard');    // Redirects programmatically`,
    explanation: {
      en: '`useRoute()` inspects active path params/queries. `useRouter()` triggers programmatic navigation.',
      km: '`useRoute()` អានព័ត៌មាន URL និង Params។ `useRouter()` ផ្លាស់ប្តូរទំព័រតាមរយៈកូដ។'
    }
  },
  {
    concept: 'Common Pitfalls & Mistakes',
    code: `// ❌ DON'T: Forgetting .value when mutating ref in JS
count = 5; // Error! Break reactivity

// ✅ DO:
count.value = 5;

// ❌ DON'T: Mutating props directly inside child
props.title = "New"; // Warning! Violates one-way data flow

// ✅ DO: Emit event to parent instead
emit('update:title', 'New');`,
    explanation: {
      en: 'Never forget `.value` when reading/writing a ref in JS context. Never mutate props directly inside child components.',
      km: 'កុំភ្លេចប្រើ `.value` ពេលអាន/សរសេរ ref ក្នុង JS។ ហាមកែប្រែតម្លៃ Props ផ្ទាល់ក្នុង Child component។'
    }
  }
];

const VUE_QUIZ: FrontendQuizQuestion[] = [
  {
    id: 'q-vue-full-1',
    question: {
      en: 'What makes Vue.js a "Progressive Framework"?',
      km: 'តើអ្វីធ្វើឱ្យ Vue.js ត្រូវបានគេហៅថាជា "Progressive Framework"?'
    },
    options: [
      { id: '1', text: { en: 'It can be adopted incrementally, from a lightweight script tag in HTML to a full Single File Component build framework', km: 'វាអាចត្រូវយកមកប្រើប្រាស់បន្តិចម្តងៗ ចាប់ពី Script tag ស្រាល រហូតដល់ Full SFC build system' }, isCorrect: true },
      { id: '2', text: { en: 'It only works inside mobile phones', km: 'វា ដំណើរការ តែលើ ទូរស័ព្ទដៃ' }, isCorrect: false }
    ],
    explanation: {
      en: 'Vue scales between a simple library added to existing server pages and a full-featured SPA framework.',
      km: 'Vue អាចប្រើប្រាស់បានទាំងជា Script ស្រាល និងជា SPA Framework ពេញលេញ។'
    }
  },
  {
    id: 'q-vue-full-2',
    question: {
      en: 'What is the correct way to access or mutate a ref variable inside a JavaScript function?',
      km: 'តើអ្វីជាវិធីត្រឹមត្រូវក្នុងការចូលប្រើ ឬកែប្រែអថេរ ref ក្នុង JavaScript Function?'
    },
    options: [
      { id: '1', text: { en: 'Append .value to the variable name (e.g. myRef.value = 10)', km: 'ថែម .value នៅខាងចុងឈ្មោះអថេរ (ឧ. myRef.value = 10)' }, isCorrect: true },
      { id: '2', text: { en: 'Call myRef() as a function', km: 'ហៅ myRef() ជា Function' }, isCorrect: false }
    ],
    explanation: {
      en: 'In JS context, `ref()` returns a reactive wrapper object whose value is stored under `.value`.',
      km: 'ក្នុង JS context, `ref()` ត្រឡប់ Wrapper Object ដែលមានតម្លៃក្នុង `.value`។'
    }
  },
  {
    id: 'q-vue-full-3',
    question: {
      en: 'Which directive directive shorthand binds HTML attributes dynamically in Vue?',
      km: 'តើ directive កាត់មួយណាសម្រាប់ Bind HTML attributes ឌីណាមិកក្នុង Vue?'
    },
    options: [
      { id: '1', text: { en: 'The colon `:` shorthand (e.g. :src="imageUrl")', km: 'សញ្ញា `:` (ឧ. :src="imageUrl")' }, isCorrect: true },
      { id: '2', text: { en: 'The dollar `$` shorthand', km: 'សញ្ញា `$`' }, isCorrect: false }
    ],
    explanation: {
      en: 'The colon `:` is shorthand for `v-bind:`.',
      km: 'សញ្ញា `:` គឺជាសញ្ញាកាត់ផ្លូវការនៃ `v-bind:`។'
    }
  },
  {
    id: 'q-vue-full-4',
    question: {
      en: 'What is the difference between v-if and v-show directives in Vue?',
      km: 'តើអ្វីជាផលខុសគ្នារវាង v-if និង v-show directives ក្នុង Vue?'
    },
    options: [
      { id: '1', text: { en: 'v-if conditionally inserts/removes elements from DOM, while v-show toggles CSS display style', km: 'v-if បង្កើត/លុប Element ចេញពី DOM, ឯ v-show កែប្រែតែ CSS display style' }, isCorrect: true },
      { id: '2', text: { en: 'v-show requires jQuery', km: 'v-show ត្រូវការ jQuery' }, isCorrect: false }
    ],
    explanation: {
      en: '`v-if` has higher toggle cost; `v-show` has higher initial render cost but toggles quickly.',
      km: '`v-if` បង្កើត/លុប DOM node ផ្ទាល់, ឯ `v-show` កែប្រែតែ `display: none`។'
    }
  },
  {
    id: 'q-vue-full-5',
    question: {
      en: 'Why is providing a unique :key mandatory when using v-for directive?',
      km: 'ហេតុអ្វីបានជាត្រូវតែផ្តល់ Unique :key រាល់ពេលប្រើប្រាស់ directive v-for?'
    },
    options: [
      { id: '1', text: { en: 'It gives Vue Virtual DOM an explicit node identity for efficient diffing and reordering', km: 'វាផ្តល់ អត្តសញ្ញាណ ដល់ Node ដើម្បីឱ្យ Virtual DOM តម្រៀប និងអាប់ដេតបានលឿន' }, isCorrect: true },
      { id: '2', text: { en: 'It changes font family to monospace', km: 'វា ប្តូរ Font ទៅជា Monospace' }, isCorrect: false }
    ],
    explanation: {
      en: '`:key` hints to Vue which DOM nodes to reuse or reorder during state changes.',
      km: '`:key` ជួយឱ្យ Vue ស្គាល់អត្តសញ្ញាណ DOM Node ដើម្បីអាប់ដេតបានត្រឹមត្រូវ។'
    }
  },
  {
    id: 'q-vue-full-6',
    question: {
      en: 'Which macro function declares custom event emitters in Vue 3 <script setup>?',
      km: 'តើ Macro function មួយណាសម្រាប់ប្រកាស Event Emitters ក្នុង Vue 3 <script setup>?'
    },
    options: [
      { id: '1', text: { en: 'defineEmits()', km: 'defineEmits()' }, isCorrect: true },
      { id: '2', text: { en: 'useEmits()', km: 'useEmits()' }, isCorrect: false }
    ],
    explanation: {
      en: '`defineEmits(["event-name"])` specifies custom events that a component can emit to its parent.',
      km: '`defineEmits()` គឺជា Macro ផ្លូវការរបស់ Vue 3 សម្រាប់ប្រកាស Event។'
    }
  },
  {
    id: 'q-vue-full-7',
    question: {
      en: 'What advantage do computed() properties offer over standard method calls in templates?',
      km: 'តើ computed() ផ្តល់អត្ថប្រយោជន៍អ្វីខ្លះលើសពី Method ធម្មតាពេលប្រើក្នុង Template?'
    },
    options: [
      { id: '1', text: { en: 'Computed properties cache their result based on reactive dependencies', km: 'Computed properties មាន Caching ផ្អែកលើ Reactive dependencies' }, isCorrect: true },
      { id: '2', text: { en: 'Computed properties run before HTML is loaded', km: 'Computed properties ដំណើរការមុន HTML' }, isCorrect: false }
    ],
    explanation: {
      en: 'Computed properties re-calculate ONLY when their underlying reactive dependencies mutate.',
      km: 'Computed properties គណនាឡើងវិញតែពេល Reactive dependency ប្រែប្រួលប៉ុណ្ណោះ។'
    }
  },
  {
    id: 'q-vue-full-8',
    question: {
      en: 'In Vue Router 4, which composable hook extracts dynamic route parameters like :id?',
      km: 'ក្នុង Vue Router 4, តើ Hook មួយណាសម្រាប់ទាញយក Dynamic Route Parameter ដូចជា :id?'
    },
    options: [
      { id: '1', text: { en: 'useRoute()', km: 'useRoute()' }, isCorrect: true },
      { id: '2', text: { en: 'useRouter()', km: 'useRouter()' }, isCorrect: false }
    ],
    explanation: {
      en: '`useRoute().params` contains key-value pairs of dynamic path parameters.',
      km: '`useRoute().params` ផ្ទុកតម្លៃ Parameter ឌីណាមិកនៃ URL។'
    }
  }
];

export const VUE_COURSE_DATA: FrontendCourse = {
  id: 'vue',
  title: {
    en: 'Vue.js Course',
    km: 'វគ្គសិក្សា Vue.js'
  },
  iconName: 'vue',
  categoryId: 'frameworks',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Vue.js គឺជា JavaScript Framework ដ៏ពេញនិយម សម្រាប់ សាងសង់ User Interface ដែលងាយស្រួលរៀន និងអាចបញ្ចូលបានបន្តិចម្តងៗ (Progressive Framework)។ សិក្សាពី Template Syntax, Reactivity, Components និង Vue Router។\n\nតម្រូវការជាមុន៖ JavaScript Course (ចាំបាច់) / Prerequisite: JavaScript Course (required)\n\nដូច React, Vue ក៏ជា Component-Based ដែរ ប៉ុន្តែប្រើ Template Syntax ដែលស្រដៀង HTML ជាងវិញ។',
    km: 'Vue.js គឺជា JavaScript Framework ដ៏ពេញនិយម សម្រាប់ សាងសង់ User Interface ដែលងាយស្រួលរៀន និងអាចបញ្ចូលបានបន្តិចម្តងៗ (Progressive Framework)។ សិក្សាពី Template Syntax, Reactivity, Components និង Vue Router។\n\nតម្រូវការជាមុន៖ JavaScript Course (ចាំបាច់)\n\nដូច React, Vue ក៏ជា Component-Based ដែរ ប៉ុន្តែប្រើ Template Syntax ដែលស្រដៀង HTML ជាងវិញ។'
  },
  summary: {
    en: 'Vue.js is an approachable, performant, and versatile progressive JavaScript framework. Master template directives, ref & reactive Composition API state, components, props/emits, lifecycle hooks, and single-page routing.',
    km: 'Vue.js គឺជា Progressive Framework ដែលមានភាពងាយស្រួលរៀន និងមាន Composition API ដ៏រហ័ស។ សិក្សាស្ទាត់ជំនាញលើ Directives, Ref & Reactive, Components, Props/Emits, Lifecycle Hooks, និង Vue Router។'
  },
  estimatedHours: 9,
  lessonCount: 30, // 10 modules * 3 lessons = 30 lessons
  cheatSheet: VUE_CHEAT_SHEET,
  quiz: VUE_QUIZ,
  capstoneProject: {
    title: {
      en: 'Capstone Project: Vue 3 Composition To-Do Workspace App',
      km: 'គម្រោង Capstone: កម្មវិធី Vue 3 Composition To-Do Workspace'
    },
    description: {
      en: 'Build a production-ready Vue 3 To-Do App using Composition API (<script setup>), reactive ref arrays, v-model form inputs, computed remaining count, custom task item components with props/emits, and localStorage persistence!',
      km: 'បង្កើត Vue 3 To-Do App ពេញលេញដោយប្រើ Composition API (<script setup>), Reactive Ref, v-model, Computed Remaining Count, Components ជាមួយ Props/Emits, និង persistence តាម LocalStorage!'
    },
    starterCode: {
      html: `<div id="app"></div>`,
      js: `// Vue 3 Composition API To-Do Capstone App
const { createApp, ref, computed, watch, onMounted } = Vue;

const TaskItem = {
  props: ['task'],
  emits: ['toggle', 'delete'],
  template: \`
    <li class="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
      <div class="flex items-center gap-2">
        <input 
          type="checkbox" 
          :checked="task.completed" 
          @change="$emit('toggle', task.id)"
          class="accent-emerald-500 cursor-pointer"
        />
        <span :class="task.completed ? 'line-through text-slate-500 font-mono' : 'text-slate-200 font-medium'">
          {{ task.text }}
        </span>
      </div>
      <button @click="$emit('delete', task.id)" class="text-[10px] text-rose-400 hover:text-rose-300 font-bold">
        Delete
      </button>
    </li>
  \`
};

const VueCapstoneApp = {
  components: { TaskItem },
  setup() {
    const newTaskText = ref('');
    const filter = ref('ALL');
    const tasks = ref([]);

    onMounted(() => {
      try {
        const saved = localStorage.getItem('vue_capstone_tasks');
        tasks.value = saved ? JSON.parse(saved) : [
          { id: '1', text: 'Master Vue 3 Composition API', completed: true },
          { id: '2', text: 'Understand ref & computed properties', completed: true },
          { id: '3', text: 'Complete Vue Capstone Project', completed: false }
        ];
      } catch (e) {
        tasks.value = [];
      }
    });

    watch(tasks, (newVal) => {
      try {
        localStorage.setItem('vue_capstone_tasks', JSON.stringify(newVal));
      } catch (e) {}
    }, { deep: true });

    const addTask = () => {
      if (!newTaskText.value.trim()) return;
      tasks.value.push({
        id: Date.now().toString(),
        text: newTaskText.value.trim(),
        completed: false
      });
      newTaskText.value = '';
    };

    const toggleTask = (id) => {
      const t = tasks.value.find(item => item.id === id);
      if (t) t.completed = !t.completed;
    };

    const deleteTask = (id) => {
      tasks.value = tasks.value.filter(item => item.id !== id);
    };

    const filteredTasks = computed(() => {
      if (filter.value === 'ACTIVE') return tasks.value.filter(t => !t.completed);
      if (filter.value === 'DONE') return tasks.value.filter(t => t.completed);
      return tasks.value;
    });

    const remainingCount = computed(() => {
      return tasks.value.filter(t => !t.completed).length;
    });

    return {
      newTaskText,
      filter,
      tasks,
      addTask,
      toggleTask,
      deleteTask,
      filteredTasks,
      remainingCount
    };
  },
  template: \`
    <div class="min-h-screen bg-slate-950 text-slate-100 p-6 flex justify-center font-sans">
      <div class="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        
        <!-- Header -->
        <div class="flex items-center justify-between border-b border-slate-800 pb-4">
          <div class="flex items-center gap-2">
            <div class="size-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-black text-sm">
              💚
            </div>
            <div>
              <h1 class="text-sm font-bold text-white">Vue 3 Task Workspace</h1>
              <p class="text-[10px] text-slate-400 font-mono">Composition API + LocalStorage</p>
            </div>
          </div>
          <span class="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold rounded-lg font-mono">
            {{ remainingCount }} Pending
          </span>
        </div>

        <!-- Add Task Form -->
        <form @submit.prevent="addTask" class="flex gap-2">
          <input 
            v-model="newTaskText"
            type="text" 
            placeholder="New Vue 3 task..."
            class="flex-1 px-3 py-2 bg-slate-950 border border-slate-800 text-xs text-white rounded-xl focus:outline-none focus:border-emerald-500"
          />
          <button type="submit" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white rounded-xl transition">
            Add
          </button>
        </form>

        <!-- Filter Pills -->
        <div class="flex gap-2 text-[11px]">
          <button 
            v-for="f in ['ALL', 'ACTIVE', 'DONE']" 
            :key="f"
            @click="filter = f"
            :class="filter === f ? 'bg-slate-800 border-emerald-500 text-emerald-400 font-bold' : 'border-slate-800 text-slate-500'"
            class="px-3 py-1 rounded-lg border font-mono transition"
          >
            {{ f }}
          </button>
        </div>

        <!-- Task List -->
        <div v-if="filteredTasks.length === 0" class="p-8 text-center bg-slate-950 border border-dashed border-slate-800 rounded-2xl text-xs text-slate-500 space-y-1">
          <div class="text-xl">📭</div>
          <p>No tasks matching filter "{{ filter }}"</p>
        </div>

        <ul v-else class="space-y-2">
          <TaskItem 
            v-for="task in filteredTasks" 
            :key="task.id" 
            :task="task" 
            @toggle="toggleTask" 
            @delete="deleteTask" 
          />
        </ul>

      </div>
    </div>
  \`
};

createApp(VueCapstoneApp).mount('#app');`
    }
  },
  lessons: [
    ...VUE_LESSONS_PART1,
    ...VUE_LESSONS_PART2
  ]
};
