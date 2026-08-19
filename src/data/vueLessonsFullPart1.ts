import { FrontendLesson } from '../types/frontendClass';

export const VUE_LESSONS_PART1: FrontendLesson[] = [
  // Module 1: Introduction & Setup
  {
    id: 'vue-m1-l1',
    slug: 'what-is-vue-progressive-framework',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: { en: '1.1 What Vue is and Progressive Framework Idea', km: '១.១ អ្វីទៅជា Vue.js និងគំនិត Progressive Framework' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Vue.js is an approachable, performant JavaScript framework for building user interfaces. "Progressive" means you can adopt Vue as a simple script tag in HTML or scale up to a full Single File Component (SFC) build tool.',
      km: 'Vue.js គឺជា JavaScript Framework ដ៏ទាក់ទាញសម្រាប់សាងសង់ UI។ ពាក្យ "Progressive" មានន័យថាអ្នកអាចប្រើ Vue ត្រឹម Script tag ក្នុង HTML ធម្មតាក៏បាន ឬដំឡើងជា Full Build Tool ជាមួយ Single File Components តាមលទ្ធភាព។'
    },
    tutorial: {
      en: 'Vue can be loaded via CDN script `https://unpkg.com/vue@3/dist/vue.global.js` or managed via Vite.',
      km: 'Vue អាចដកស្រង់មកប្រើប្រាស់តាម CDN script ឬគ្រប់គ្រងតាមរយៈ Vite សម្រាប់ Project ធំៗ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white p-6 flex justify-center">
  <div id="app" class="max-w-sm w-full bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-3">
    <div class="inline-block p-3 bg-emerald-500/10 text-emerald-400 rounded-xl font-bold">🟢 Vue 3 App</div>
    <h2 class="text-xl font-bold">{{ message }}</h2>
  </div>
  <script>
    Vue.createApp({
      setup() {
        return { message: 'Hello from Vue.js Progressive Framework!' };
      }
    }).mount('#app');
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Progressive Integration in Production', km: 'ការបញ្ចូល Vue បន្តិចម្តងៗក្នុងគម្រោងពិត' },
      description: {
        en: 'Companies often add Vue to existing legacy server-rendered HTML pages without rewriting the backend.',
        km: 'ក្រុមហ៊ុនជាច្រើនបន្ថែម Vue ទៅលើ HTML ទំព័រចាស់ៗ ដោយមិនចាំបាច់សរសេរ Backend ឡើងវិញទាំងស្រុងឡើយ។'
      }
    },
    practiceExercise: {
      question: { en: 'Change message to "Welcome to Vue 3 Composition API!"', km: 'ប្តូរសារសារជា "Welcome to Vue 3 Composition API!"' },
      solution: "message: 'Welcome to Vue 3 Composition API!'"
    },
    quizQuestions: [
      {
        id: 'q-vue-m1-1',
        question: { en: 'What does "Progressive Framework" mean in Vue?', km: 'តើ "Progressive Framework" ក្នុង Vue មានន័យដូចម្តេច?' },
        options: [
          { id: '1', text: { en: 'It can be incrementally adopted from a simple script tag to a full build framework', km: 'វាអាចត្រូវប្រើប្រាស់បន្តិចម្តងៗចាប់ពី Script tag រហូតដល់ Full build system' }, isCorrect: true },
          { id: '2', text: { en: 'It requires Java to execute', km: 'វាត្រូវការ Java ដើម្បី Run' }, isCorrect: false }
        ],
        explanation: { en: 'Vue scales between a lightweight library and a full-featured framework.', km: 'Vue អាចពង្រីកពី Library ស្រាល ទៅជា Framework ពេញលេញ។' }
      }
    ]
  },
  {
    id: 'vue-m1-l2',
    slug: 'setting-up-project-with-vite',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: { en: '1.2 Setting Up a Vue Project with Vite', km: '១.២ ការបង្កើតគម្រោង Vue ជាមួយ Vite' },
    durationMinutes: 25,
    difficulty: 'Beginner',
    explanation: {
      en: 'Vite is the modern, ultra-fast build tool recommended for Vue development. Run `npm create vue@latest` to generate a lightweight boilerplate.',
      km: 'Vite គឺជា Build tool ទំនើប និងលឿនរហ័សដែលត្រូវបានណែនាំសម្រាប់អភិវឌ្ឍន៍ Vue។ ប្រើបញ្ជា `npm create vue@latest` ដើម្បីបង្កើត Project ថ្មី។'
    },
    tutorial: {
      en: 'Command breakdown: `npm create vue@latest` -> enter app name -> choose TypeScript/Router options -> `npm install` -> `npm run dev`.',
      km: 'ជំហាន៖ `npm create vue@latest` -> ដាក់ឈ្មោះ App -> ជ្រើសរើស Option -> `npm install` -> `npm run dev`។'
    },
    starterCode: {
      html: `<div className="bg-slate-900 p-4 border border-slate-800 rounded-xl font-mono text-xs text-emerald-400">
# Run terminal command to initialize Vue 3 project:
$ npm create vue@latest my-vue-app
$ cd my-vue-app
$ npm install
$ npm run dev
</div>`
    },
    realWorldExample: {
      title: { en: 'Vite Instant Server Start', km: 'ការចាប់ផ្តើម Dev Server ភ្លាមៗជាមួយ Vite' },
      description: { en: 'Vite leverages native ES modules to start the development server in milliseconds regardless of app size.', km: 'Vite ប្រើប្រាស់ Native ES Modules ដើម្បីរัน Dev Server ក្នុងរយៈពេលត្រឹមប៉ុន្មាន មីលីវិនាទី។' }
    },
    practiceExercise: {
      question: { en: 'Which official CLI tool initializes a modern Vue 3 app?', km: 'តើ CLI tool ផ្លូវការមួយណាសម្រាប់បង្កើត Vue 3 App?' },
      solution: 'npm create vue@latest'
    },
    quizQuestions: [
      {
        id: 'q-vue-m1-2',
        question: { en: 'What command creates a standard Vue 3 Vite project?', km: 'តើបញ្ជាអ្វីបង្កើត Vue 3 Vite project?' },
        options: [
          { id: '1', text: { en: 'npm create vue@latest', km: 'npm create vue@latest' }, isCorrect: true },
          { id: '2', text: { en: 'ng new vue-app', km: 'ng new vue-app' }, isCorrect: false }
        ],
        explanation: { en: '`npm create vue@latest` installs create-vue, the official project generator.', km: '`npm create vue@latest` គឺជា Generator ផ្លូវការរបស់ Vue។' }
      }
    ]
  },
  {
    id: 'vue-m1-l3',
    slug: 'project-structure-overview',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: { en: '1.3 Project Structure Overview (src, App.vue, main.js)', km: '១.៣ រចនាសម្ព័ន្ធ Project (src, App.vue, main.js)' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'A standard Vue project contains `main.js` which bootstraps Vue with `createApp(App).mount("#app")` and `App.vue` as the root Single File Component.',
      km: 'Vue project មាន `main.js` សម្រាប់កំណត់ និងផ្ដើម `createApp(App).mount("#app")` និង `App.vue` ជា Root Component។'
    },
    tutorial: {
      en: 'In `.vue` Single File Components, code is split into `<script setup>`, `<template>`, and `<style scoped>`.',
      km: 'ក្នុងឯកសារ `.vue` (SFC), កូដត្រូវបានបែងចែកជា `<script setup>`, `<template>`, និង `<style scoped>`។'
    },
    starterCode: {
      html: `<template>
  <div class="card">
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const title = ref('Root Component App.vue');
</script>`
    },
    realWorldExample: {
      title: { en: 'Scoped CSS isolation', km: 'ការបំបែក CSS តាម Component ជាមួយ Scoped' },
      description: { en: '`<style scoped>` ensures CSS rules only affect elements within that specific `.vue` component file.', km: '`<style scoped>` ធានាថា CSS មានឥទ្ធិពលតែលើ Element ក្នុង `.vue` Component នោះប៉ុណ្ណោះ។' }
    },
    practiceExercise: {
      question: { en: 'Where is the root Vue app mounted in HTML?', km: 'តើ Root Vue app ត្រូវបាន Mount នៅត្រង់ណា?' },
      solution: 'mount("#app")'
    },
    quizQuestions: [
      {
        id: 'q-vue-m1-3',
        question: { en: 'Which file serves as the main entry point that boots up a Vue application?', km: 'តើឯកសារមួយណាជា Entry point សម្រាប់ Boot Vue app?' },
        options: [
          { id: '1', text: { en: 'src/main.js (or main.ts)', km: 'src/main.js (ឬ main.ts)' }, isCorrect: true },
          { id: '2', text: { en: 'src/index.css', km: 'src/index.css' }, isCorrect: false }
        ],
        explanation: { en: '`main.js` imports createApp and mounts the root App.vue component.', km: '`main.js` Import createApp ហើយ Mount ទៅកាន់ DOM។' }
      }
    ]
  },

  // Module 2: Template Syntax
  {
    id: 'vue-m2-l1',
    slug: 'text-interpolation-mustache',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: { en: '2.1 Text Interpolation with Mustache {{ }}', km: '២.១ Text Interpolation ជាមួយ Mustache {{ }}' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Text interpolation uses double curly braces `{{ expression }}` to render JavaScript data inside HTML templates dynamically.',
      km: 'Text interpolation ប្រើប្រាស់សញ្ញាអក្កវិធី `{{ expression }}` ដើម្បីបង្ហាញទិន្នន័យ JavaScript ក្នុងទំព័រ HTML ឌីណាមិក។'
    },
    tutorial: {
      en: 'Inside `{{ }}`, you can evaluate reactive variables, math operations, and string methods.',
      km: 'ក្នុង `{{ }}`, អ្នកអាចគណនា អថេរ Reactive, ប្រមាណវិធីគណិតវិទ្យា និង String methods។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white p-6 flex justify-center">
  <div id="app" class="max-w-xs w-full bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2 text-xs">
    <p class="text-slate-400">User Name: <strong class="text-emerald-400">{{ userName }}</strong></p>
    <p class="text-slate-400">Uppercase: <strong class="text-sky-400">{{ userName.toUpperCase() }}</strong></p>
    <p class="text-slate-400">Calculation: <strong class="text-amber-400">{{ 10 * 5 }}</strong></p>
  </div>
  <script>
    Vue.createApp({
      setup() {
        return { userName: 'Sokha' };
      }
    }).mount('#app');
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Dynamic User Profiles', km: 'ការបង្ហាញព័ត៌មានអ្នកប្រើប្រាស់' },
      description: { en: 'Mustache syntax dynamically inserts user names, badges, and calculated points in user dashboards.', km: 'Mustache syntax បង្ហាញឈ្មោះ ពិន្ទុ និងព័ត៌មានអ្នកប្រើប្រាស់ភ្លាមៗ។' }
    },
    practiceExercise: {
      question: { en: 'Display count doubled inside {{ count * 2 }}', km: 'បង្ហាញតម្លៃ count x 2 ក្នុង {{ count * 2 }}' },
      solution: '{{ count * 2 }}'
    },
    quizQuestions: [
      {
        id: 'q-vue-m2-1',
        question: { en: 'Which syntax is used for text interpolation in Vue templates?', km: 'តើ Syntax មួយណាប្រើសម្រាប់ Text Interpolation ក្នុង Vue?' },
        options: [
          { id: '1', text: { en: '{{ variable }}', km: '{{ variable }}' }, isCorrect: true },
          { id: '2', text: { en: '${variable}', km: '${variable}' }, isCorrect: false }
        ],
        explanation: { en: 'Mustache tags {{ }} bind text nodes dynamically in Vue templates.', km: '{{ }} ភ្ជាប់តម្លៃ អត្ថបទឌីណាមិក ក្នុង Template Vue។' }
      }
    ]
  },
  {
    id: 'vue-m2-l2',
    slug: 'binding-attributes-v-bind',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: { en: '2.2 Binding Attributes with v-bind and : Shorthand', km: '២.២ ការ Binding Attributes ជាមួយ v-bind និងសញ្ញាកាត់ :' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Mustache tags cannot be used inside HTML attributes. Use `v-bind:id="dynamicId"` or its concise shorthand `:id="dynamicId"`.',
      km: 'សញ្ញា {{ }} មិនអាចប្រើក្នុង HTML attributes ໄດ້ទេ។ ត្រូវប្រើ directive `v-bind:id="id"` ឬសញ្ញាកាត់ `:id="id"`។'
    },
    tutorial: {
      en: 'Shorthand equivalence: `v-bind:src="image"` is identical to `:src="image"`.',
      km: 'សញ្ញាកាត់៖ `v-bind:src="image"` ស្មើនឹង `:src="image"`។'
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
    <button :disabled="isDisabled" :class="buttonClass">
      {{ isDisabled ? 'Disabled State' : 'Active Button' }}
    </button>
  </div>
  <script>
    Vue.createApp({
      setup() {
        return {
          isDisabled: false,
          buttonClass: 'w-full py-2 bg-emerald-600 font-bold rounded-xl text-xs'
        };
      }
    }).mount('#app');
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Dynamic Image Sources & Disabled Buttons', km: 'ការដោះដូរប្រភពរូបភាព និងប៊ូតុង Disable' },
      description: { en: 'Forms use `:disabled="isSubmitting"` to prevent double form submission during API network calls.', km: 'Form ប្រើ `:disabled="isSubmitting"` ដើម្បីការពារការ Submit ច្រើនដងពេលកំពុងផ្ញើ API។' }
    },
    practiceExercise: {
      question: { en: 'Bind an image src attribute using Vue shorthand', km: 'Bind attribute src នៃរូបភាពដោយប្រើសញ្ញាកាត់ Vue' },
      solution: '<img :src="imageUrl" alt="Profile" />'
    },
    quizQuestions: [
      {
        id: 'q-vue-m2-2',
        question: { en: 'What is the short syntax for v-bind:href="link"?', km: 'តើអ្វីជា Syntax កាត់នៃ v-bind:href="link"?' },
        options: [
          { id: '1', text: { en: ':href="link"', km: ':href="link"' }, isCorrect: true },
          { id: '2', text: { en: '@href="link"', km: '@href="link"' }, isCorrect: false }
        ],
        explanation: { en: 'The colon `:` is the official shorthand for `v-bind`.', km: 'សញ្ញា `:` គឺជាសញ្ញាកាត់ផ្លូវការរបស់ `v-bind`។' }
      }
    ]
  },
  {
    id: 'vue-m2-l3',
    slug: 'basic-template-expressions',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: { en: '2.3 Basic JavaScript Template Expressions', km: '២.៣ ប្រមាណវិធី JavaScript ក្នុង Template Expressions' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Vue supports full JavaScript expression power inside data bindings, provided they are single evaluation statements (ternaries, array methods, string concatenation).',
      km: 'Vue គាំទ្រប្រមាណវិធី JavaScript ពេញលេញក្នុង Data bindings ឱ្យតែជា Expression តែមួយ (Ternary, Array methods, String concatenation)។'
    },
    tutorial: {
      en: 'Valid expression: `{{ ok ? "YES" : "NO" }}`. Invalid: `{{ var a = 1 }}` (flow control statements).',
      km: 'កូដត្រឹមត្រូវ៖ `{{ ok ? "YES" : "NO" }}`។ កូដមិនត្រឹមត្រូវ៖ `{{ var a = 1 }}` (ព្រោះជា Statement)។'
    },
    starterCode: {
      html: `<div id="app">
  <p>{{ items.length > 0 ? \`Items count: \${items.length}\` : 'No items found' }}</p>
</div>`
    },
    realWorldExample: {
      title: { en: 'Inline Status Badges', km: 'ការបង្ហាញ Badge ស្ថានភាព' },
      description: { en: 'Ternary expressions inside templates quickly toggle badge background color based on status strings.', km: 'Ternary expression ជួយប្តូរពណ៌ Badge តាម Status យ៉ាងរហ័ស។' }
    },
    practiceExercise: {
      question: { en: 'Write a ternary expression that renders "In Stock" if quantity > 0', km: 'សរសេរ ternary expression បង្ហាញ "In Stock" ប្រសិនបើ quantity > 0' },
      solution: '{{ quantity > 0 ? "In Stock" : "Out of Stock" }}'
    },
    quizQuestions: [
      {
        id: 'q-vue-m2-3',
        question: { en: 'Which JavaScript syntax is allowed inside Vue template bindings?', km: 'តើ Syntax JS មួយណាអនុញ្ញាតឱ្យប្រើក្នុង Vue Template Binding?' },
        options: [
          { id: '1', text: { en: 'Single JavaScript expressions (e.g. ternary operator)', km: 'Single JS Expression (ឧ. Ternary Operator)' }, isCorrect: true },
          { id: '2', text: { en: 'Multi-line if/else statements', km: 'If/else Statement ច្រើនបន្ទាត់' }, isCorrect: false }
        ],
        explanation: { en: 'Only single expressions that evaluate to a value are allowed inside templates.', km: 'មានតែ Single expression ដែល Return តម្លៃប៉ុណ្ណោះត្រូវអនុញ្ញាត។' }
      }
    ]
  },

  // Module 3: Reactive Data (ref & reactive)
  {
    id: 'vue-m3-l1',
    slug: 'script-setup-composition-api',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: { en: '3.1 Composition API script setup Style', km: '៣.១ Composition API ជាមួយរបៀប script setup' },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: '`<script setup>` is the ergonomic compile-time syntactic sugar for using the Composition API inside Single File Components. Variables defined top-level are automatically exposed to the template.',
      km: '`<script setup>` គឺជា Syntactic sugar ដ៏មានប្រជាប្រិយភាពសម្រាប់ Composition API ក្នុង Vue 3 SFC។ រាល់អថេរដែលប្រកាសនៅ Top-level ត្រូវបាន Expose ទៅ Template ដោយស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: 'In `<script setup>`, you do not need to manually write `export default {}` or return variables in a `setup()` function.',
      km: 'ក្នុង `<script setup>`, អ្នកមិនចាំបាច់សរសេរ `export default {}` ឬ Return អថេរក្នុង `setup()` ឡើយ។'
    },
    starterCode: {
      html: `<script setup>
import { ref } from 'vue';
const appName = ref('Vue 3 Composition Workspace');
</script>

<template>
  <h1>{{ appName }}</h1>
</template>`
    },
    realWorldExample: {
      title: { en: 'Cleaner Codebase in Vue 3', km: 'កូដស្អាត និងខ្លីជាងមុនក្នុង Vue 3' },
      description: { en: '`<script setup>` reduces boilerplate by 60% compared to standard Options API declarations.', km: '`<script setup>` កាត់បន្ថយកូដស្មុគស្មាញរហូតដល់ 60% ប្រៀបធៀបនឹង Options API។' }
    },
    practiceExercise: {
      question: { en: 'Declare a reactive string using script setup', km: 'ប្រកាសអថេរ string reactive ដោយប្រើ script setup' },
      solution: "const title = ref('Hello Vue!');"
    },
    quizQuestions: [
      {
        id: 'q-vue-m3-1',
        question: { en: 'What benefit does <script setup> provide in Vue 3 SFCs?', km: 'តើ <script setup> ផ្តល់អត្ថប្រយោជន៍អ្វីខ្លះក្នុង Vue 3 SFC?' },
        options: [
          { id: '1', text: { en: 'Top-level bindings are automatically exposed to template with less boilerplate code', km: 'Top-level bindings ត្រូវបានបញ្ជូនទៅ Template ដោយស្វ័យប្រវត្តិជាមួយកូដខ្លី' }, isCorrect: true },
          { id: '2', text: { en: 'It disables JavaScript execution', km: 'វា បិទ ការរ៉ាន់ JavaScript' }, isCorrect: false }
        ],
        explanation: { en: '<script setup> compiles down to setup() with automatic template return bindings.', km: '<script setup> ចងក្រងកូដរហ័ស និងមិនបាច់ Return  دستی។' }
      }
    ]
  },
  {
    id: 'vue-m3-l2',
    slug: 'ref-primitive-reactive-values',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: { en: '3.2 ref() for Primitive Reactive Values', km: '៣.២ ref() សម្រាប់អថេរ Reactive Primitives' },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: '`ref()` takes an inner value and returns a reactive reference object with a `.value` property. Inside templates, Vue automatically unwraps `.value` for you!',
      km: '`ref()` ទទួលតម្លៃដើម ហើយត្រឡប់ Reactive Object មាន Property `.value`។ ប៉ុន្តែក្នុង Template, Vue នឹង Unwrap `.value` ស្វ័យប្រវត្តិ!'
    },
    tutorial: {
      en: 'In JS: `count.value++`. In Template: `<button @click="count++">{{ count }}</button>`. Notice no `.value` in HTML!',
      km: 'ក្នុង JS: `count.value++`។ ក្នុង Template: `<button @click="count++">{{ count }}</button>` (មិនបាច់ដាក់ `.value`)។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white p-6 flex justify-center">
  <div id="app" class="max-w-xs w-full bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-4">
    <h3 class="text-xs font-bold text-slate-400">Reactive Counter Ref</h3>
    <div class="text-4xl font-black text-emerald-400">{{ count }}</div>
    <div class="flex gap-2">
      <button @click="decrement" class="flex-1 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold">-1</button>
      <button @click="increment" class="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs font-bold">+1</button>
    </div>
  </div>
  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const count = ref(0);
        const increment = () => count.value++;
        const decrement = () => count.value--;
        return { count, increment, decrement };
      }
    }).mount('#app');
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Toggle Dialog Open/Closed State', km: 'ការបើក/បិទ ផ្ទាំង Modal' },
      description: { en: '`const isOpen = ref(false)` controls modal window visibility reactively.', km: '`const isOpen = ref(false)` គ្រប់គ្រងការបង្ហាញ/លាក់ Modal។' }
    },
    practiceExercise: {
      question: { en: 'Access and mutate a ref named age in JS script context', km: 'ទាញយក និងប្តូរតម្លៃ ref អថេរ age ក្នុង JS' },
      solution: 'age.value = 25;'
    },
    quizQuestions: [
      {
        id: 'q-vue-m3-2',
        question: { en: 'How do you update the value of a ref variable inside a JavaScript function?', km: 'តើអ្នកត្រូវ Update តម្លៃ ref ក្នុង JS Function យ៉ាងដូចម្តេច?' },
        options: [
          { id: '1', text: { en: 'myRef.value = newValue', km: 'myRef.value = newValue' }, isCorrect: true },
          { id: '2', text: { en: 'myRef = newValue', km: 'myRef = newValue' }, isCorrect: false }
        ],
        explanation: { en: 'In JavaScript code, you must append `.value` to mutate or read a ref.', km: 'ក្នុង JS code, អ្នកត្រូវតែប្រើ `.value` ដើម្បីកែប្រែតម្លៃ ref។' }
      }
    ]
  },
  {
    id: 'vue-m3-l3',
    slug: 'reactive-for-objects',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: { en: '3.3 reactive() for Complex Objects', km: '៣.៣ reactive() សម្រាប់ Object ស្មុគស្មាញ' },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: '`reactive()` creates a reactive Proxy object. Unlike `ref()`, it only accepts objects/arrays and does NOT use `.value` property access.',
      km: '`reactive()` បង្កើត Reactive Proxy Object។ ខុសពី `ref()`, វាទទួលយកតែ Object/Array ហើយមិនប្រើ `.value` ឡើយ។'
    },
    tutorial: {
      en: '`const user = reactive({ name: "Anna", score: 100 })`. Access directly: `user.score++`.',
      km: '`const user = reactive({ name: "Anna", score: 100 })`។ ប្រើផ្ទាល់៖ `user.score++`។'
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
    <h3 class="text-xs font-bold text-sky-400">Reactive Object State</h3>
    <p class="text-xs text-slate-300">Name: {{ profile.name }}</p>
    <p class="text-xs text-slate-300">Level: {{ profile.level }}</p>
    <button @click="profile.level++" class="w-full py-2 bg-sky-600 font-bold rounded-xl text-xs">Level Up</button>
  </div>
  <script>
    const { createApp, reactive } = Vue;
    createApp({
      setup() {
        const profile = reactive({ name: 'Dara', level: 1 });
        return { profile };
      }
    }).mount('#app');
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Complex Form Input State Objects', km: 'ការគ្រប់គ្រង Form State Complex' },
      description: { en: '`reactive()` groups form fields (username, email, password) into a single unified reactive state.', km: '`reactive()` ប្រមូលផ្តុំ Field ក្នុង Form ច្រើនបញ្ចូលគ្នាក្នុង Object តែមួយ។' }
    },
    practiceExercise: {
      question: { en: 'Update user age in reactive object state', km: 'អាប់ដេតអាយុអ្នកប្រើប្រាស់ក្នុង reactive object' },
      solution: 'user.age = 30;'
    },
    quizQuestions: [
      {
        id: 'q-vue-m3-3',
        question: { en: 'Which rule applies when accessing properties on a reactive() object in JavaScript?', km: 'តើច្បាប់មួយណាត្រូវអនុវត្តពេលចូលប្រើ Property លើ reactive() object?' },
        options: [
          { id: '1', text: { en: 'Access properties directly without .value (e.g. state.count++)', km: 'ចូលប្រើ Property ផ្ទាល់ដោយមិនបាច់ .value (ឧ. state.count++)' }, isCorrect: true },
          { id: '2', text: { en: 'Must call state.value.count++', km: 'ត្រូវតែហៅ state.value.count++' }, isCorrect: false }
        ],
        explanation: { en: '`reactive()` returns a JavaScript Proxy where property mutations are intercepted directly.', km: '`reactive()` ជា JS Proxy ដូច្នេះមិនបាច់ប្រើ `.value` ឡើយ។' }
      }
    ]
  },

  // Module 4: Directives
  {
    id: 'vue-m4-l1',
    slug: 'conditional-rendering-v-if-v-else-v-show',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: { en: '4.1 Conditional Rendering with v-if, v-else, and v-show', km: '៤.១ Conditional Rendering ជាមួយ v-if, v-else, និង v-show' },
    durationMinutes: 25,
    difficulty: 'Beginner',
    explanation: {
      en: '`v-if` conditionally renders elements by adding/removing them from DOM tree. `v-show` toggles element display CSS property (`display: none`).',
      km: '`v-if` បង្កើត/លុប Element ចេញពី DOM Tree។ ចំណែក `v-show` កែប្រែតែ Style CSS `display: none` ប៉ុណ្ណោះ។'
    },
    tutorial: {
      en: 'Use `v-if` when condition rarely changes. Use `v-show` for frequent toggles (like dropdowns).',
      km: 'ប្រើ `v-if` បើលក្ខខណ្ឌកម្រប្រែប្រួល។ ប្រើ `v-show` សម្រាប់ការ បើក/បិទ ញឹកញាប់ (ដូចជា Dropdown)។'
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
    <button @click="isLoggedIn = !isLoggedIn" class="w-full py-2 bg-slate-800 text-xs font-bold rounded-xl">
      Toggle Auth
    </button>
    <div v-if="isLoggedIn" class="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl text-xs">
      Welcome back, Authenticated User!
    </div>
    <div v-else class="p-3 bg-rose-500/20 text-rose-400 rounded-xl text-xs">
      Please log in to continue.
    </div>
  </div>
  <script>
    Vue.createApp({
      setup() {
        const isLoggedIn = Vue.ref(false);
        return { isLoggedIn };
      }
    }).mount('#app');
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Auth State & Loading Spinners', km: 'ការបង្ហាញ Spinner ពេលកំពុងបាញ់ API' },
      description: { en: '`v-if="isLoading"` displays loading skeletons until network request finishes.', km: '`v-if="isLoading"` បង្ហាញ Loading Skeleton រហូតទាល់តែ ទាញទិន្នន័យចាំបាច់រួចរាល់។' }
    },
    practiceExercise: {
      question: { en: 'Toggle element visibility using v-show directive', km: 'បើក/បិទការបង្ហាញ Element ដោយប្រើ directive v-show' },
      solution: '<div v-show="isVisible">Content</div>'
    },
    quizQuestions: [
      {
        id: 'q-vue-m4-1',
        question: { en: 'What is the primary difference between v-if and v-show?', km: 'តើអ្វីជាផលខុសគ្នាចម្បងរវាង v-if និង v-show?' },
        options: [
          { id: '1', text: { en: 'v-if toggles DOM node creation, v-show toggles CSS display style', km: 'v-if បង្កើត/លុប DOM node ផ្ទាល់ ឯ v-show កែប្រែតែ CSS display' }, isCorrect: true },
          { id: '2', text: { en: 'v-show deletes element from HTML forever', km: 'v-show លុប Element ចោលរហូត' }, isCorrect: false }
        ],
        explanation: { en: 'v-if has higher toggle cost; v-show has higher initial render cost.', km: 'v-if ត្រូវបង្កើត DOM ឡើងវិញ, ឯ v-show កែប្រែ CSS display: none។' }
      }
    ]
  },
  {
    id: 'vue-m4-l2',
    slug: 'list-rendering-v-for-key',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: { en: '4.2 List Rendering with v-for and Importance of :key', km: '៤.២ List Rendering ជាមួយ v-for និងសារៈសំខាន់នៃ :key' },
    durationMinutes: 25,
    difficulty: 'Beginner',
    explanation: {
      en: '`v-for="item in items" :key="item.id"` renders a list of elements based on an Array. The unique `:key` attribute gives Vue a hint to track elements efficiently during diffing.',
      km: '`v-for="item in items" :key="item.id"` បង្ហាញ បញ្ជី Elements ចេញពី Array។ Attribute `:key` ជួយឱ្យ Vue ស្គាល់អត្តសញ្ញាណ item ដើម្បីអាប់ដេត DOM លឿន។'
    },
    tutorial: {
      en: 'Syntax variants: `v-for="(item, index) in items" :key="item.id"`. Always provide a unique primitive key!',
      km: 'Syntax: `v-for="(item, index) in items" :key="item.id"`។ ត្រូវតែផ្តល់ Unique Key រៀងរាល់ពេលប្រើ v-for!'
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
    <h3 class="text-xs font-bold text-sky-400 mb-2">Framework List</h3>
    <ul class="space-y-1 text-xs">
      <li v-for="fw in frameworks" :key="fw.id" class="p-2 bg-slate-800 rounded-lg flex justify-between">
        <span>{{ fw.name }}</span>
        <span class="text-slate-400 font-mono">{{ fw.type }}</span>
      </li>
    </ul>
  </div>
  <script>
    Vue.createApp({
      setup() {
        const frameworks = [
          { id: 1, name: 'Vue 3', type: 'Progressive' },
          { id: 2, name: 'React', type: 'Library' },
          { id: 3, name: 'Angular', type: 'Full' }
        ];
        return { frameworks };
      }
    }).mount('#app');
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Product Catalogs & Feeds', km: 'ការបង្ហាញបញ្ជីទំនិញ និងព័ត៌មាន' },
      description: { en: 'E-commerce web apps iterate over thousands of API product objects using `v-for`.', km: 'E-commerce web apps ប្រើ `v-for` បង្ហាញបញ្ជីទំនិញរាប់ពាន់មុខចេញពី API។' }
    },
    practiceExercise: {
      question: { en: 'Render a list of tags with index index key', km: 'បង្ហាញបញ្ជី Tag ដោយប្រើ Index ជា Key' },
      solution: '<span v-for="(tag, i) in tags" :key="i">{{ tag }}</span>'
    },
    quizQuestions: [
      {
        id: 'q-vue-m4-2',
        question: { en: 'Why is :key required when using v-for directive in Vue?', km: 'ហេតុអ្វីបានជាត្រូវប្រើ :key រាល់ពេលប្រើ directive v-for ក្នុង Vue?' },
        options: [
          { id: '1', text: { en: 'It provides a unique identifier so Vue Virtual DOM can track element reordering efficiently', km: 'វាផ្តល់ អត្តសញ្ញាណ ដល់ Element នីមួយៗដើម្បីឱ្យ Virtual DOM តាមដានបានត្រឹមត្រូវ' }, isCorrect: true },
          { id: '2', text: { en: 'It forces browser page refresh', km: 'វា បង្ខំ ឱ្យ Browser Refresh' }, isCorrect: false }
        ],
        explanation: { en: '`:key` helps Vue optimize element reordering and reuse existing DOM nodes.', km: '`:key` ជួយ Vue តាមដាន និងតម្រៀប DOM ឡើងវិញបានលឿន។' }
      }
    ]
  },
  {
    id: 'vue-m4-l3',
    slug: 'two-way-binding-v-model',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: { en: '4.3 Two-Way Form Binding with v-model', km: '៤.៣ Two-Way Form Binding ជាមួយ v-model' },
    durationMinutes: 25,
    difficulty: 'Beginner',
    explanation: {
      en: '`v-model` creates two-way data binding on form inputs, textareas, checkboxes, radios, and selects. It automatically synchronizes DOM input state with Vue reactive refs.',
      km: '`v-model` បង្កើត Two-Way Data Binding លើ Form inputs, textareas, checkboxes, និង selects។ វាភ្ជាប់តម្លៃរវាង DOM ជាមួយ Reactive State ស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: '`v-model` combines `:value="text"` event binding and `@input="text = $event.target.value"` under one clean directive!',
      km: '`v-model` គឺជាការបូកបញ្ចូលរវាង `:value="text"` និង `@input="text = $event.target.value"`។'
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
    <label class="block text-xs font-bold text-slate-400">Your Name:</label>
    <input v-model="name" type="text" placeholder="Type here..." class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500" />
    <p class="text-xs text-emerald-400">Real-time Output: <strong>{{ name }}</strong></p>
  </div>
  <script>
    Vue.createApp({
      setup() {
        const name = Vue.ref('');
        return { name };
      }
    }).mount('#app');
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Live Search Input Filtering', km: 'ការ Filter បញ្ជីទិន្នន័យពេលកំពុង វាយអត្ថបទ' },
      description: { en: '`v-model="searchQuery"` filters table records live as user types in input box.', km: '`v-model="searchQuery"` ជួយ Filter ទិន្នន័យភ្លាមៗពេលអ្នកប្រកួតវាយអត្ថបទ។' }
    },
    practiceExercise: {
      question: { en: 'Bind checkbox checked state to a ref using v-model', km: 'Bind តម្លៃ Checkbox ទៅកាន់ ref ដោយប្រើ v-model' },
      solution: '<input type="checkbox" v-model="agreeTerms" />'
    },
    quizQuestions: [
      {
        id: 'q-vue-m4-3',
        question: { en: 'Which Vue directive simplifies two-way data binding on form inputs?', km: 'តើ Directive មួយណាសម្រួល Two-way data binding លើ Form input?' },
        options: [
          { id: '1', text: { en: 'v-model', km: 'v-model' }, isCorrect: true },
          { id: '2', text: { en: 'v-bind', km: 'v-bind' }, isCorrect: false }
        ],
        explanation: { en: 'v-model synchronizes user input changes with reactive state bi-directionally.', km: 'v-model ភ្ជាប់ និង អាប់ដេត ទិន្នន័យទៅវិញទៅមកស្វ័យប្រវត្តិ។' }
      }
    ]
  },

  // Module 5: Methods & Computed Properties
  {
    id: 'vue-m5-l1',
    slug: 'defining-methods-event-handling',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: { en: '5.1 Defining Methods & Event Handling with @', km: '៥.១ ការបង្កើត Methods និងគ្រប់គ្រង Event ជាមួយ @' },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'In `<script setup>`, any declared function is a method. Listen to DOM events using `v-on:click="doSomething"` or shorthand `@click="doSomething"`.',
      km: 'ក្នុង `<script setup>`, Function ដែលបានប្រកាសជា Method។ ចាប់ Event ដោយប្រើ `v-on:click` ឬសញ្ញាកាត់ `@click`។'
    },
    tutorial: {
      en: 'Event modifiers: `@click.prevent` stops page refresh, `@keyup.enter` listens for Enter key press.',
      km: 'Event Modifiers: `@click.prevent` ការពារ Page reload, `@keyup.enter` ចាប់ការចុច Key Enter។'
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
    <button @click.prevent="notify('Button clicked!')" class="w-full py-2 bg-emerald-600 font-bold rounded-xl text-xs">
      Click Me
    </button>
  </div>
  <script>
    Vue.createApp({
      setup() {
        const notify = (msg) => alert(msg);
        return { notify };
      }
    }).mount('#app');
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Form Submit Handlers with .prevent', km: 'ការគ្រប់គ្រង Form Submission' },
      description: { en: '`<form @submit.prevent="handleSubmit">` prevents full HTTP browser reload.', km: '`<form @submit.prevent="handleSubmit">` ការពារមិនឱ្យ Browser Reload ទំព័រ។' }
    },
    practiceExercise: {
      question: { en: 'Listen for Enter key release on an input element in Vue', km: 'ចាប់ Event ពេលលែង key Enter លើ Input element' },
      solution: '<input @keyup.enter="search" />'
    },
    quizQuestions: [
      {
        id: 'q-vue-m5-1',
        question: { en: 'What shorthand syntax listens for click events in Vue templates?', km: 'តើ Syntax កាត់មួយណាសម្រាប់ចាប់ Click event ក្នុង Vue?' },
        options: [
          { id: '1', text: { en: '@click="handler"', km: '@click="handler"' }, isCorrect: true },
          { id: '2', text: { en: ':click="handler"', km: ':click="handler"' }, isCorrect: false }
        ],
        explanation: { en: 'The `@` symbol is shorthand for the `v-on` directive.', km: 'សញ្ញា `@` គឺជាសញ្ញាកាត់ផ្លូវការនៃ `v-on`។' }
      }
    ]
  },
  {
    id: 'vue-m5-l2',
    slug: 'computed-derived-reactive-values',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: { en: '5.2 computed() for Derived Reactive Values', km: '៥.២ computed() សម្រាប់តម្លៃ Reactive ដែលបានមកពីការគណនា' },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: '`computed()` returns a cached reactive getter ref based on reactive dependencies. It ONLY re-evaluates when its reactive dependencies change!',
      km: '`computed()` ត្រឡប់តម្លៃ ដែលបានមកពីការគណនា ដោយមាន Caching។ វា នឹង គណនា ឡើងវិញ តែពេល Dependency របស់វាប្រែប្រួលប៉ុណ្ណោះ!'
    },
    tutorial: {
      en: '`const fullName = computed(() => `${firstName.value} ${lastName.value}`)`.',
      km: '`const fullName = computed(() => `${firstName.value} ${lastName.value}`)`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white p-6 flex justify-center">
  <div id="app" class="max-w-xs w-full bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2 text-xs">
    <p>Subtotal: $100</p>
    <p>Tax (10%): $10</p>
    <p class="text-emerald-400 font-bold text-sm">Total: \${{ total }}</p>
  </div>
  <script>
    const { createApp, ref, computed } = Vue;
    createApp({
      setup() {
        const subtotal = ref(100);
        const taxRate = ref(0.1);
        const total = computed(() => subtotal.value + (subtotal.value * taxRate.value));
        return { total };
      }
    }).mount('#app');
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Filtered Search Lists & Shopping Carts', km: 'ការគណនាផលបូកកន្ត្រកទំនិញ' },
      description: { en: 'Shopping cart grand total uses `computed()` so recalculations happen efficiently.', km: 'តម្លៃសរុបកន្ត្រកទំនិញប្រើ `computed()` ដើម្បីគណនាដោយស្វ័យប្រវត្តិនឹងមាន Caching។' }
    },
    practiceExercise: {
      question: { en: 'Create a computed property remainingCount that filters incomplete items length', km: 'បង្កើត computed property ឈ្មោះ remainingCount ដើម្បីរាប់ចំនួន Item ដែលមិនទាន់ done' },
      solution: 'const remainingCount = computed(() => items.value.filter(i => !i.done).length);'
    },
    quizQuestions: [
      {
        id: 'q-vue-m5-2',
        question: { en: 'What key performance advantage do computed properties have over method calls?', km: 'តើ computed property មានផលប្រយោជន៍ Performance អ្វីខ្លះលើសពី Method?' },
        options: [
          { id: '1', text: { en: 'Computed properties are cached based on reactive dependencies', km: 'Computed properties ត្រូវបានរៀបចំ Cache ផ្អែកលើ Reactive dependencies' }, isCorrect: true },
          { id: '2', text: { en: 'Methods execute faster in older browsers', km: 'Methods រ៉ាន់លឿនជាងក្នុង Browser ចាស់' }, isCorrect: false }
        ],
        explanation: { en: 'Computed properties re-evaluate only when underlying reactive state dependencies mutate.', km: 'Computed properties គណនាឡើងវិញតែពេល Dependency ប្រែប្រួលប៉ុណ្ណោះ។' }
      }
    ]
  },
  {
    id: 'vue-m5-l3',
    slug: 'methods-vs-computed-when-to-use',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: { en: '5.3 Methods vs. Computed — When to Use Which', km: '៥.៣ ប្រៀបធៀប Methods vs. Computed — ពេលណាត្រូវប្រើមួយណា' },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Use **Computed** when deriving data that requires caching and dependent reactivity. Use **Methods** when triggering side effects, event listeners, or actions that require parameters.',
      km: 'ប្រើ **Computed** ពេលទាញយកតម្លៃថ្មីចេញពី State ជាមួយ Caching។ ប្រើ **Methods** ពេលចង់បង្កើតសកម្មភាព (Event handlers/Side effects) ឬ Function ត្រូវការ Parameter។'
    },
    tutorial: {
      en: 'Rule of thumb: No side-effects inside computed functions! Pure getters only.',
      km: 'ច្បាប់ចម្បង៖ ហាមធ្វើ Side-effects (ដូចជា Fetching API ឬ Mutating State) ក្នុង Computed Function!'
    },
    starterCode: {
      html: `<div id="app">
  <!-- Computed (cached property) -->
  <p>{{ formattedPrice }}</p>
  <!-- Method (called on every re-render or event) -->
  <button @click="calculateDiscount(0.2)">Apply 20% Off</button>
</div>`
    },
    realWorldExample: {
      title: { en: 'Sorting Tables vs Button Actions', km: 'ការតម្រៀបទិន្នន័យ vs សកម្មភាពប៊ូតុង' },
      description: { en: 'Table column sorting uses `computed()`, while "Export PDF" button click invokes a `method()`.', km: 'ការតម្រៀប Column ប្រើ `computed()`, ឯការចុច "Export PDF" ប្រើ `method()`។' }
    },
    practiceExercise: {
      question: { en: 'Which concept should be used for filtering a array of products reactively?', km: 'តើគួរប្រើអ្វីសម្រាប់ Filter បញ្ជីទំនិញឌីណាមិក?' },
      solution: 'computed()'
    },
    quizQuestions: [
      {
        id: 'q-vue-m5-3',
        question: { en: 'When should you choose a Method over a Computed Property?', km: 'តើពេលណាគួរជ្រើសរើស Method ជាជាង Computed Property?' },
        options: [
          { id: '1', text: { en: 'When handling button clicks, async API calls, or functions needing parameters', km: 'ពេលដោះស្រាយ Event Button Click, Async API, ឬត្រូវការ Parameter' }, isCorrect: true },
          { id: '2', text: { en: 'Whenever you want to render static HTML', km: 'ពេលចង់បង្ហាញ HTML ថេរ' }, isCorrect: false }
        ],
        explanation: { en: 'Methods do not perform caching and accept custom parameter arguments.', km: 'Methods អាចទទួល Parameter និងដំណើរការ Action រាល់ពេលត្រូវបានហៅ។' }
      }
    ]
  }
];
