import { ReferenceItem, Quiz, MiniProject } from '../types';

export const vueReferences: ReferenceItem[] = [
  {
    id: "ref-vue-reactivity",
    syntax: "const state = ref(initialValue);",
    desc: {
      en: "Declares a reactive reference value. Access and mutate via state.value in script blocks, or simply 'state' in templates.",
      km: "ប្រកាសតម្លៃយោងប្រតិកម្ម (Reactive reference)។ ចូលទៅកាន់ និងកែប្រែតាមរយៈ state.value នៅក្នុងប្លុក script ឬប្រើតែ 'state' នៅក្នុង template។"
    },
    example: "const count = ref(0);\ncount.value++; // updates DOM automatically"
  },
  {
    id: "ref-vue-computed",
    syntax: "const computedVal = computed(() => expression);",
    desc: {
      en: "Creates a cached read-only reactive getter. Only re-computes when its dependent reactive states change.",
      km: "បង្កើតតម្លៃគណនាចងចាំទុក (Cached read-only)។ វានឹងគណនាឡើងវិញតែនៅពេលអថេរប្រែប្រួលដែលពាក់ព័ន្ធផ្លាស់ប្តូរតម្លៃប៉ុណ្ណោះ។"
    },
    example: "const subtotal = computed(() => qty.value * price.value);"
  },
  {
    id: "ref-vue-watch",
    syntax: "watch(source, (newVal, oldVal) => { ... });",
    desc: {
      en: "Watches a reactive state source and runs a callback handler whenever the tracked variable changes. Ideal for side-effects.",
      km: "តាមដានអថេរប្រែប្រួល និងដំណើរការកូដរងរាល់ពេលអថេរនោះផ្លាស់ប្តូរ។ ល្អបំផុតសម្រាប់កិច្ចការក្រៅប្រព័ន្ធ (Side-effects)។"
    },
    example: "watch(userId, (newId) => {\n  fetchUserData(newId);\n});"
  },
  {
    id: "ref-vue-directives",
    syntax: "v-bind, v-if, v-for, v-on, v-model",
    desc: {
      en: "Core markup instructions telling Vue how to render and control HTML nodes dynamically.",
      km: "កូដបញ្ជាស្នូលសម្រាប់ប្រាប់ទៅ Vue ឱ្យដឹងពីរបៀបបង្ហាញ និងគ្រប់គ្រង HTML nodes យ៉ាងរស់រវើក។"
    },
    example: "<div :class='{ active: isActive }' @click='toggle'>\n  <p v-if='show'>{{ text }}</p>\n</div>"
  }
];

export const vueQuizzes: Quiz[] = [
  {
    id: "vue-q1",
    question: {
      en: "What is the correct syntax to access or update the value of a 'ref' variable inside a Vue <script setup> block?",
      km: "តើឃ្លាកូដត្រឹមត្រូវដើម្បីចូលទៅកាន់ ឬកែប្រែតម្លៃរបស់អថេរ 'ref' នៅក្នុងប្លុក Vue <script setup> គឺជាអ្វី?"
    },
    options: {
      en: [
        "state.value",
        "state.getData()",
        "state.val()",
        "Just 'state' directly"
      ],
      km: [
        "state.value",
        "state.getData()",
        "state.val()",
        "ប្រើពាក្យ 'state' ផ្ទាល់តែម្តង"
      ]
    },
    correctIndex: 0,
    explanation: {
      en: "In Vue 3's script, ref variables are reactive wrapper objects, so you must append '.value' to access or mutate their inner state. In templates, Vue automatically unwraps them, so '.value' is not needed.",
      km: "នៅក្នុង script របស់ Vue 3 អថេរ ref គឺជាវត្ថុរុំព័ទ្ធប្រតិកម្ម ដូចនេះអ្នកត្រូវតែបន្ថែម '.value' ដើម្បីចូលទៅកាន់ ឬកែប្រែតម្លៃខាងក្នុងរបស់វា។ នៅក្នុង template, Vue នឹងដោះវត្ថុរុំនោះដោយស្វ័យប្រវត្ត ដូចនេះមិនបាច់ប្រើ '.value' ឡើយ។"
    }
  },
  {
    id: "vue-q2",
    question: {
      en: "Which directive is best suited for frequently toggling an element's visibility to maintain optimal performance?",
      km: "តើ directive មួយណាដែលស័ក្តិសមបំផុតសម្រាប់ប្តូរបង្ហាញ/លាក់ element ញឹកញាប់ ដើម្បីរក្សាប្រសិទ្ធភាពដំណើរការល្អបំផុត?"
    },
    options: {
      en: [
        "v-if",
        "v-show",
        "v-bind",
        "v-model"
      ],
      km: [
        "v-if",
        "v-show",
        "v-bind",
        "v-model"
      ]
    },
    correctIndex: 1,
    explanation: {
      en: "v-show is perfect for frequent toggling because it keeps the element in the DOM and simply toggles its CSS 'display' property, whereas v-if completely destroys and recreates the DOM node, which is computationally expensive.",
      km: "v-show ល្អបំផុតសម្រាប់ការប្តូរបង្ហាញ/លាក់ញឹកញាប់ ព្រោះវារក្សា element ក្នុង DOM ដដែលដោយគ្រាន់តែប្តូរលក្ខណៈ CSS 'display' ប៉ុណ្ណោះ ខណៈពេលដែល v-if ធ្វើការលុបចោល និងបង្កើត DOM node ឡើងវិញទាំងស្រុង ដែលស៊ីកម្លាំងម៉ាស៊ីនច្រើន។"
    }
  },
  {
    id: "vue-q3",
    question: {
      en: "What is the primary difference between methods and computed properties in Vue?",
      km: "តើអ្វីទៅជាភាពខុសគ្នាជាចម្បងរវាង methods និង computed properties នៅក្នុង Vue?"
    },
    options: {
      en: [
        "Computed properties are cached based on reactive dependencies, while methods evaluate on every render",
        "Methods support parameters, whereas computed properties do not support templates",
        "Computed properties require manual DOM selection updates",
        "Methods are only executed on component unmounting stages"
      ],
      km: [
        "Computed properties ត្រូវបានចងចាំទុក (Cached) ផ្អែកលើអថេរប្រតិកម្មធាតុចូល ខណៈពេលដែល methods ដំណើរការឡើងវិញរាល់ពេល render",
        "Methods គាំទ្រការបញ្ជូនប៉ារ៉ាម៉ែត្រ ខណៈពេលដែល computed properties មិនគាំទ្រ template ឡើយ",
        "Computed properties ទាមទារឱ្យធ្វើបច្ចុប្បន្នភាព DOM ដោយដៃផ្ទាល់",
        "Methods ដំណើរការតែនៅពេលដែល component ត្រូវបានលុបចោលប៉ុណ្ណោះ"
      ]
    },
    correctIndex: 0,
    explanation: {
      en: "Computed properties cache their results based on reactive dependencies and only recalculate when those dependencies change. Methods, on the other hand, run their logic on every single render cycle, regardless of whether the state changed.",
      km: "Computed properties រក្សាទុកលទ្ធផលចងចាំ (Cache) និងគណនាឡើងវិញតែនៅពេលអថេរពាក់ព័ន្ធផ្លាស់ប្តូរ។ ចំណែកឯ Methods វិញនឹងរត់រាល់ពេលដែលទំព័របង្ហាញជាថ្មី ទោះបីជាគ្មានទិន្នន័យណាមួយប្រែប្រួលក៏ដោយ។"
    }
  }
];

export const vueMiniProjects: MiniProject[] = [
  {
    id: "vue-project-counter",
    title: { en: "Vue Multiplier Counter", km: "កម្មវិធីរាប់លេខគុណទ្វេ Vue" },
    desc: {
      en: "Create a modular reactive counter app where users can increment/decrement a value, customize the step amount, and render a computed dynamic multiplier.",
      km: "បង្កើតកម្មវិធីរាប់លេខប្រតិកម្មមួយ ដែលអ្នកប្រើប្រាស់អាចបង្កើន/បន្ថយតម្លៃ កំណត់ចំនួនជំហានបន្ថែមបន្ថយ និងបង្ហាញលទ្ធផលគុណទ្វេតាមរយៈ computed property។"
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-xs w-full bg-white rounded-2xl p-6 border border-slate-200 text-center">
    <h3 class="text-lg font-bold text-slate-800 mb-4">Vue Multiplier</h3>
    
    <!-- 1. Display counter value here! -->
    <div class="text-4xl font-extrabold text-slate-900 mb-2">0</div>
    
    <!-- 2. Display computed doubled value here! -->
    <div class="text-xs text-emerald-600 font-semibold mb-4">Double value: 0</div>

    <div class="flex gap-2">
      <!-- 3. Bind click events for actions! -->
      <button class="flex-1 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold">- Decrement</button>
      <button class="flex-1 py-2 bg-emerald-500 text-white rounded-xl text-sm font-bold">+ Increment</button>
    </div>
  </div>

  <script>
    const { createApp, ref, computed } = Vue;
    createApp({
      setup() {
        // Implement reactive variables, computed property, and methods!
        return {};
      }
    }).mount('#app');
  </script>
</body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-xs w-full bg-white rounded-2xl p-6 border border-slate-200 text-center">
    <h3 class="text-lg font-bold text-slate-800 mb-4">Vue Multiplier</h3>
    
    <div class="text-4xl font-extrabold text-slate-900 mb-2">{{ count }}</div>
    <div class="text-xs text-emerald-600 font-semibold mb-4">Double value: {{ doubled }}</div>

    <div class="flex gap-2">
      <button @click="decrement" class="flex-1 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-bold transition-colors">- Decrement</button>
      <button @click="increment" class="flex-1 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-sm font-bold transition-colors">+ Increment</button>
    </div>
  </div>

  <script>
    const { createApp, ref, computed } = Vue;
    createApp({
      setup() {
        const count = ref(10);
        
        const doubled = computed(() => {
          return count.value * 2;
        });

        const increment = () => {
          count.value++;
        };

        const decrement = () => {
          if (count.value > 0) {
            count.value--;
          }
        };

        return { count, doubled, increment, decrement };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-project-todo",
    title: { en: "Dynamic Vue Tasks Board", km: "ក្តារកិច្ចការប្រតិកម្ម Vue Tasks" },
    desc: {
      en: "Build a structured Vue planner application. Implement reactive arrays, form binding using v-model, loops using v-for, conditional visibility toggling, and task completeness states.",
      km: "កសាងកម្មវិធីគ្រោងកិច្ចការជាមួយ Vue។ សរសេរកូដគ្រប់គ្រង Array ប្រតិកម្ម, ការចងភ្ជាប់ Form ជាមួយ v-model, វិលជុំបញ្ជីជាមួយ v-for, ប្តូរបង្ហាញតាមលក្ខខណ្ឌ និងប្តូរសភាពរួចរាល់កិច្ចការ។"
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200">
    <h3 class="text-xl font-bold text-slate-900 mb-4">Vue Planner Board</h3>
    
    <!-- 1. Implement task insertion form! -->
    <div class="flex gap-2 mb-4">
      <input type="text" placeholder="Enter task name..." class="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm">
      <button class="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold">Add</button>
    </div>

    <!-- 2. Display tasks list via v-for -->
    <div class="space-y-2">
      <!-- Item Template -->
      <div class="p-3 bg-slate-50 rounded-xl flex justify-between items-center text-sm">
        <span>Task Item Placeholder</span>
        <button class="text-xs text-indigo-600 font-bold">Toggle</button>
      </div>
    </div>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        // Declare states, methods, and return statements here!
        return {};
      }
    }).mount('#app');
  </script>
</body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200">
    <h3 class="text-xl font-bold text-slate-900 mb-4">Vue Planner Board</h3>
    
    <form @submit.prevent="addTask" class="flex gap-2 mb-4">
      <input v-model="newTask" type="text" placeholder="Enter task name..." class="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
      <button type="submit" class="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold transition-colors">Add</button>
    </form>

    <div v-if="tasks.length === 0" class="text-center p-6 text-slate-400 text-xs italic">
      No tasks planned yet. Add one above!
    </div>

    <div v-else class="space-y-2">
      <div v-for="task in tasks" :key="task.id" 
           :class="task.completed ? 'bg-emerald-50 border border-emerald-100 text-emerald-800 line-through' : 'bg-slate-50 border border-slate-100 text-slate-700'"
           class="p-3 rounded-xl flex justify-between items-center text-sm font-semibold transition-all duration-200">
        <span>{{ task.text }}</span>
        <button @click="toggleTask(task.id)" 
                :class="task.completed ? 'bg-emerald-200 text-emerald-900' : 'bg-slate-200 text-slate-700'"
                class="px-3 py-1 rounded-lg text-xs font-bold transition-colors">
          {{ task.completed ? "Completed" : "Active" }}
        </button>
      </div>
    </div>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const newTask = ref("");
        const tasks = ref([
          { id: 1, text: "Learn core Vue.js directives", completed: true },
          { id: 2, text: "Construct dynamic task lists", completed: false }
        ]);

        const addTask = () => {
          if (!newTask.value.trim()) return;
          tasks.value.push({
            id: Date.now(),
            text: newTask.value.trim(),
            completed: false
          });
          newTask.value = "";
        };

        const toggleTask = (id) => {
          const task = tasks.value.find(t => t.id === id);
          if (task) {
            task.completed = !task.completed;
          }
        };

        return { newTask, tasks, addTask, toggleTask };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  }
];
