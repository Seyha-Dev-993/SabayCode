import { Lesson } from '../types';

export const vueLessonsPart2: Lesson[] = [
  {
    id: "vue-why-how-setup",
    title: { en: "18. Why, How & Setup", km: "១៨. ហេតុអ្វី របៀបណា និងការដំឡើង" },
    content: {
      en: `# Scaling Up: Why we use Single File Components (SFC)
Up until now, we have used Vue via a CDN script loaded in standard HTML files. This is excellent for simple integrations but has severe drawbacks for professional teams:
1. Templates must be written as raw strings or embedded directly in index.html.
2. Styling is global and prone to naming conflicts across different sections of your app.
3. No build step means you cannot use modern utilities like TypeScript, Sass, or pre-processing optimizations.

### The Solution: Single File Components (SFC)
Single File Components (\`.vue\` files) combine templates, scripts, and scoped styles in a single clean layout. In this section, our playground transitions to executing professional SFC code natively!`,
      km: `# បង្កើនកម្រិត៖ ហេតុអ្វីយើងប្រើ Single File Components (SFC)
រហូតមកដល់ពេលនេះ យើងបានប្រើប្រាស់ Vue តាមរយៈ Script CDN នៅក្នុងឯកសារ HTML ធម្មតា។ របៀបនេះល្អសម្រាប់ការបញ្ចូលគ្នាសាមញ្ញ ប៉ុន្តែវាមានចំណុចខ្វះខាតសម្រាប់ក្រុមការងារអាជីព៖
1. Templates ត្រូវសរសេរជាអក្សរធម្មតា ឬបង្កប់ផ្ទាល់ក្នុង index.html។
2. Styling មានឥទ្ធិពលទូទាំងទំព័រ (Global) ងាយនឹងប៉ះទង្គិចឈ្មោះគ្នាទៅវិញទៅមក។
3. គ្មានដំណើរការចងក្រង (Build step) មានន័យថាអ្នកមិនអាចប្រើ TypeScript, Sass, ឬប្រព័ន្ធជំនួយទំនើបៗបានទេ។

### ដំណោះស្រាយ៖ Single File Components (SFC)
Single File Components (ឯកសារ \`.vue\`) រួមបញ្ចូលគ្នានូវ templates, scripts, និង scoped styles នៅក្នុងឯកសារតែមួយយ៉ាងមានរបៀបរៀបរយ។ ចាប់ពីមេរៀននេះទៅ ផ្ទាំងសាកល្បងកូដរបស់យើងនឹងដំណើរការកូដ SFC អាជីពដោយស្វ័យប្រវត្តិ!`
    },
    starterCode: `<template>
  <div class="p-6 max-w-sm bg-white rounded-2xl border border-slate-200 text-center">
    <h3 class="text-lg font-bold text-slate-900 mb-2">Welcome to SFC Mode!</h3>
    <p class="text-sm text-slate-600 mb-4">{{ message }}</p>
    <button @click="changeMessage" class="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-semibold">
      Modify SFC State
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const message = ref("You are now compiling professional SFC layouts natively in the browser playground!");

function changeMessage() {
  message.value = "See? It updates instantly! You have entered modern modular web development.";
}
</script>

<style scoped>
p {
  line-height: 1.6;
}
</style>`
  },
  {
    id: "vue-first-sfc-page",
    title: { en: "19. First SFC Page", km: "១៩. ទំព័រ SFC ដំបូង" },
    content: {
      en: `# Your First Single File Component
Let's analyze the exact structure of a modern \`.vue\` component. It contains exactly three main blocks:

1. **\`<template>\`**: HTML structure of your page. Uses standard Vue directives.
2. **\`<script setup>\`**: This is where you import reactive helpers and declare state variables. By adding **\`setup\`** to the script tag, Vue automatically exposes all top-level variables to the template.
3. **\`<style scoped>\`**: CSS rules defined inside this block only apply to elements **within this component**, keeping your styling completely isolated.`,
      km: `# ទំព័រ Single File Component ដំបូងរបស់អ្នក
តោះមកពិនិត្យមើលរចនាសម្ព័ន្ធពិតប្រាកដរបស់សមាសភាគ Component នៅក្នុងឯកសារ \`.vue\`។ វាមានប្លុកធំៗចំនួន៣៖

1. **\`<template>\`**: រចនាសម្ព័ន្ធ HTML របស់ទំព័រ។ ប្រើប្រាស់ directives របស់ Vue ធម្មតា។
2. **\`<script setup>\`**: ជាកន្លែងដែលអ្នកនាំចូលប្រព័ន្ធប្រែប្រួល និងប្រកាសអថេរ។ ដោយបន្ថែមពាក្យ **\`setup\`** លើ script tag នោះ Vue នឹងអនុញ្ញាតឱ្យ template ហៅប្រើអថេរទាំងអស់បានភ្លាមៗ។
3. **\`<style scoped>\`**: កូដរចនា CSS នៅក្នុងប្លុកនេះ នឹងជះឥទ្ធិពលតែលើ element **នៅក្នុង component នេះតែប៉ុណ្ណោះ** ធានាបាននូវភាពឯកោនៃរចនាបថ។`
    },
    starterCode: `<template>
  <div class="text-center p-6 bg-slate-900 text-white rounded-2xl shadow-xl">
    <div class="logo-box">V</div>
    <h2 class="text-xl font-bold tracking-tight mb-2">My Pristine SFC Layout</h2>
    <p class="text-xs text-slate-400">Perfect encapsulation of views, scripts, and styles.</p>
  </div>
</template>

<script setup>
// Script setup is fully active here
</script>

<style scoped>
.logo-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #42b883;
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 12px;
}
</style>`
  },
  {
    id: "vue-components",
    title: { en: "20. Vue Components", km: "២០. Vue Components" },
    content: {
      en: `# Component-Driven Architecture
Modern frontend engineering is built around **reusable components**. Instead of writing a massive HTML file, break your application down into small, isolated, testable visual components (e.g. Header, Sidebar, Card, Button).

In Vue, any SFC file is a component! You import them in standard Javascript style and declare them inside templates:
\`import UserCard from './UserCard.vue'\``,
      km: `# និទស្សនៈតម្រង់ទិសដោយ Component
វិស្វកម្មគេហទំព័រទំនើបគឺត្រូវបានបង្កើតឡើងជុំវិញ **សមាសភាគដែលអាចប្រើឡើងវិញបាន (Reusable components)**។ ជំនួសឱ្យការសរសេរឯកសារ HTML ដ៏ធំមួយ យើងបំបែកកម្មវិធីរបស់យើងទៅជាបំណែកតូចៗ ឯកោ និងងាយស្រួលធ្វើតេស្ត (ដូចជា Header, Sidebar, Card, Button)។

នៅក្នុង Vue រាល់ឯកសារ SFC គឺជា Component! អ្នកអាចនាំវាចូលតាមរបៀប Javascript ធម្មតា និងហៅវាប្រើក្នុង template ៖
\`import UserCard from './UserCard.vue'\``
    },
    starterCode: `<template>
  <div class="space-y-4">
    <h3 class="text-sm font-bold uppercase text-slate-400 tracking-wider">Dashboard View</h3>
    
    <!-- Render reusable visual cards -->
    <div class="p-4 bg-white border border-slate-200 rounded-xl">
      <h4 class="font-bold text-slate-800">Widget Container</h4>
      <p class="text-xs text-slate-500">I am a separate component rendering dynamic reports.</p>
    </div>
  </div>
</template>

<script setup>
// Import sub-components inside real applications here
</script>`
  },
  {
    id: "vue-props",
    title: { en: "21. Vue Props", km: "២១. Vue Props" },
    content: {
      en: `# Passing Data with Props
Components need to communicate. To pass data down from a parent component to a child component, use **Props**.

### Defining Props with \`defineProps()\`:
In Vue 3 \`<script setup>\`, props are declared using the \`defineProps()\` macro, which is globally available without any manual import:

\`\`\`javascript
const props = defineProps({
  title: String,
  likes: Number
});
\`\`\``,
      km: `# ការបញ្ជូនទិន្នន័យជាមួយ Props
Components ត្រូវការប្រាស្រ័យទាក់ទងគ្នា។ ដើម្បីបញ្ជូនទិន្នន័យពី Component មេ (Parent) ចុះទៅកាន់ Component កូន (Child) គឺត្រូវប្រើប្រាស់ **Props**។

### ការប្រកាស Props ជាមួយ \`defineProps()\`៖
នៅក្នុង Vue 3 \`<script setup>\` props ត្រូវបានប្រកាសដោយប្រើប្រាស់ម៉ាក្រូ \`defineProps()\` ដែលមានស្រាប់ជាសកល ដោយមិនចាំបាច់នាំចូលដោយដៃឡើយ៖

\`\`\`javascript
const props = defineProps({
  title: String,
  likes: Number
});
\`\`\``
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm">
    <!-- Demonstrating Props representation -->
    <h3 class="text-lg font-bold text-slate-900">{{ currentTitle }}</h3>
    <p class="text-sm text-slate-500 mt-1">Course Author: {{ authorName }}</p>

    <div class="mt-4 flex gap-2">
      <button @click="currentTitle = 'Advanced Vue Masterclass'" class="px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-semibold rounded-lg transition-colors">
        Change Title Prop value
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Inside a child component this would be defined as:
// const props = defineProps({ title: String, author: String });

const currentTitle = ref("Introduction to Props");
const authorName = "Dr. Vue Developer";
</script>`
  },
  {
    id: "vue-v-for-components",
    title: { en: "22. Vue v-for Components", km: "២២. Vue v-for Components" },
    content: {
      en: `# Dynamic Component Iterations
You can combine \`v-for\` lists with components. This allows you to pass unique prop values to each generated component instance in a list.

### Implementation Pattern:
\`<UserCard v-for="user in users" :key="user.id" :username="user.name" />\`

This keeps your parent component lightweight, delegating card layouts and isolated event listeners to individual components.`,
      km: `# ការលីបបង្ហាញ Component យ៉ាងរស់រវើក
អ្នកអាចប្រើប្រាស់បញ្ជី \`v-for\` រួមគ្នាជាមួយ Components។ វាអនុញ្ញាតឱ្យអ្នកបញ្ជូនតម្លៃ Prop ផ្សេងៗគ្នាទៅកាន់ Component នីមួយៗដែលត្រូវបានបង្កើតក្នុងបញ្ជី។

### គំរូនៃការប្រើប្រាស់៖
\`<UserCard v-for="user in users" :key="user.id" :username="user.name" />\`

វិធីនេះជួយឱ្យ Component មេមានទម្ងន់ស្រាល ដោយបង្វែរការរចនាប្លង់កាត និងព្រឹត្តិការណ៍នានាទៅឱ្យ Component កូននីមួយៗចាត់ចែងដោយឯករាជ្យ។`
    },
    starterCode: `<template>
  <div class="space-y-3">
    <h3 class="text-sm font-extrabold text-slate-400 uppercase tracking-wider">Dynamic Component Listing</h3>
    
    <!-- Iterating with component representation -->
    <div v-for="lesson in dynamicLessons" :key="lesson.id" class="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center">
      <div>
        <h4 class="font-bold text-slate-900 text-sm">{{ lesson.title }}</h4>
        <p class="text-xs text-slate-500">Duration: {{ lesson.duration }}</p>
      </div>
      <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">
        SFC Ready
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const dynamicLessons = ref([
  { id: 1, title: "Unveiling Single File Components", duration: "10 mins" },
  { id: 2, title: "Props Deep Dive", duration: "15 mins" },
  { id: 3, title: "State Emission Pipelines", duration: "20 mins" }
]);
</script>`
  },
  {
    id: "vue-emit",
    title: { en: "23. Vue $emit()", km: "២៣. មុខងារបញ្ជូន $emit()" },
    content: {
      en: `# Child-to-Parent Communication with \`$emit()\`
Props only allow data to flow downward from parent to child. To send notifications or data back **upward** to the parent, use **Emissions**.

### Defining Emits with \`defineEmits()\`:
Declare the events your child component can emit:

\`\`\`javascript
const emit = defineEmits(['status-changed', 'delete-item']);

function triggerEvent() {
  emit('status-changed', 'Completed!');
}
\`\`\``,
      km: `# ការទាក់ទងពីកូនទៅមេជាមួយ \`$emit()\`
Props អនុញ្ញាតឱ្យទិន្នន័យហូរចុះពីមេទៅកូនតែម្ខាងប៉ុណ្ណោះ។ ដើម្បីផ្ញើដំណឹង ឬបញ្ជូនទិន្នន័យត្រឡប់ **ទៅលើ** ទៅកាន់ Component មេវិញ គឺត្រូវប្រើប្រាស់ **Emissions**។

### ការប្រកាស Emits ជាមួយ \`defineEmits()\`៖
កំណត់ព្រឹត្តិការណ៍ផ្សេងៗដែល Component កូនអាចបញ្ចេញបាន៖

\`\`\`javascript
const emit = defineEmits(['status-changed', 'delete-item']);

function triggerEvent() {
  emit('status-changed', 'Completed!');
}
\`\`\``
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm text-center">
    <h3 class="font-bold text-slate-900">Child Component Sandbox</h3>
    <p class="text-xs text-slate-500 mt-1">Status on Parent: <strong class="text-indigo-600">{{ parentStatus }}</strong></p>

    <!-- Simulating emitting events to Parent -->
    <div class="mt-4 space-y-2">
      <button @click="emitStatus('Success')" class="w-full py-2 bg-emerald-500 text-white font-semibold text-xs rounded-xl">
        Emit "Success" status upward
      </button>
      <button @click="emitStatus('Error')" class="w-full py-2 bg-rose-500 text-white font-semibold text-xs rounded-xl">
        Emit "Error" status upward
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const parentStatus = ref("Pending");

const emitStatus = (value) => {
  // Simulating parent receiving the event
  parentStatus.value = value;
};
</script>`
  },
  {
    id: "vue-fallthrough-attributes",
    title: { en: "24. Fallthrough Attributes", km: "២៤. Fallthrough Attributes" },
    content: {
      en: `# Fallthrough Attributes
A "fallthrough attribute" is an attribute or event listener passed to a component, but is not explicitly declared in its props or emits (e.g. \`class\`, \`style\`, or \`id\`).

### Automated DOM Inheritance:
When a component renders a single root element, these fallthrough attributes are automatically added to the root element's attributes! This keeps component usage clean and matches standard HTML syntax.`,
      km: `# Fallthrough Attributes
"Fallthrough attribute" គឺជា attribute ឬប្រព័ន្ធតាមដានព្រឹត្តិការណ៍ដែលបញ្ជូនទៅកាន់ component ប៉ុន្តែមិនត្រូវបានប្រកាសក្នុង props ឬ emits ឡើយ (ឧទាហរណ៍ \`class\`, \`style\`, ឬ \`id\`)។

### ការទទួលមរតក DOM ដោយស្វ័យប្រវត្ត៖
នៅពេល component បង្ហាញ element ឫសតែមួយ (Single root) រាល់ fallthrough attributes ទាំងនោះនឹងត្រូវបានបន្ថែមទៅកាន់ root element នោះដោយស្វ័យប្រវត្តិ! វារក្សាការប្រើប្រាស់ component ឱ្យស្អាត និងស្របនឹង HTML ធម្មតា។`
    },
    starterCode: `<template>
  <div class="p-6 text-center">
    <!-- The classes below would normally fallthrough to custom buttons -->
    <button class="px-5 py-2.5 bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-500/10">
      Button Component with Inherited styles
    </button>
  </div>
</template>

<script setup>
// Fallthrough occurs automatically on single-root components!
</script>`
  },
  {
    id: "vue-scoped-styling",
    title: { en: "25. Scoped Styling", km: "២៥. Scoped Styling" },
    content: {
      en: `# CSS Isolation with Scoped Styles
CSS class names are globally scoped by default in standard web programming. Vue resolves this issue elegantly by introducing the \`scoped\` attribute.

### How does \`<style scoped>\` work?
Vue automatically injects a unique custom dataset attribute (like \`data-v-3a20bf10\`) to all elements inside your component, and compiles CSS rules targeting that dataset identifier.

This means you can declare plain selectors (like \`h1\`, \`p\`, \`.card\`) without fearing style pollution or breaking headers in other components.`,
      km: `# ការដាក់ឱ្យរចនាបថនៅដាច់ដោយឡែក (Scoped Styles)
ជាទូទៅ ឈ្មោះថ្នាក់រចនា CSS ជះឥទ្ធិពលទូទាំងគេហទំព័រទាំងមូល។ Vue ដោះស្រាយបញ្ហានេះយ៉ាងវៃឆ្លាតតាមរយៈការណែនាំ attribute \`scoped\`។

### តើ \`<style scoped>\` ដំណើរការដូចម្តេច?
Vue នឹងបន្ថែម attribute សម្គាល់ពិសេសមួយ (ដូចជា \`data-v-3a20bf10\`) ទៅកាន់រាល់ elements ទាំងអស់ក្នុង component នោះដោយស្វ័យប្រវត្តិ រួចចងក្រងកូដ CSS ឱ្យរត់ទៅរកអត្តសញ្ញាណនោះតែម្តង។

វាមានន័យថាអ្នកអាចកំណត់រចនាបថទូទៅ (ដូចជា \`h1\`, \`p\`, \`.card\`) ដោយមិនបារម្ភពីការលេចជ្រាប ឬធ្វើឱ្យប៉ះពាល់ដល់ Component ផ្សេងៗឡើយ។`
    },
    starterCode: `<template>
  <div class="card">
    <h3 class="title">I am Scoped!</h3>
    <p class="desc">My CSS properties will never leak outside of this component layout.</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Scoped selector isolation */
.card {
  padding: 24px;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 16px;
  text-align: center;
}
.title {
  color: #15803d;
  font-weight: 800;
  margin: 0 0 6px 0;
}
.desc {
  color: #166534;
  font-size: 13px;
  margin: 0;
}
</style>`
  },
  {
    id: "vue-local-components",
    title: { en: "26. Local Components", km: "២៦. Local Components" },
    content: {
      en: `# Local Component Declarations
In full build systems, you declare sub-components locally inside their parents. This ensures you only load necessary components, keeping your web bundles lightweight.

Using SFC with \`<script setup>\`, any imported component is **automatically registered locally** and can be used directly inside your templates! No manual configuration required.`,
      km: `# ការប្រកាស Component ក្នុងស្រុក (Local)
នៅក្នុងប្រព័ន្ធចងក្រងពេញលេញ អ្នកត្រូវប្រកាស component រងនៅក្នុង component មេ។ វាកាត់បន្ថយទំហំផ្ទុករបស់គេហទំព័រព្រោះតែងតែនាំចូលតែរបស់ណាដែលចាំបាច់ប៉ុណ្ណោះ។

ការប្រើប្រាស់ SFC ជាមួយ \`<script setup>\` រាល់ Component ទាំងអស់ដែលត្រូវបាននាំចូលគឺ **ត្រូវបានចុះឈ្មោះក្នុងស្រុកដោយស្វ័យប្រវត្តិ** និងអាចហៅប្រើប្រាស់បានភ្លាមៗ! មិនបាច់កំណត់ការរៀបចំច្រើនឡើយ។`
    },
    starterCode: `<template>
  <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-sm">
    <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Parent Viewport</h3>
    
    <!-- Render sub-component representation -->
    <div class="p-3 bg-white border border-slate-200 rounded-xl text-center">
      <span class="text-xs text-slate-600 font-semibold">Local Widget Rendered</span>
    </div>
  </div>
</template>

<script setup>
// In script setup: import LocalWidget from './LocalWidget.vue';
</script>`
  },
  {
    id: "vue-slots",
    title: { en: "27. Vue Slots", km: "២៧. Slots ក្នុង Vue" },
    content: {
      en: `# Flexible Templating with Slots
Props allow passing structured data like strings, numbers, or arrays. But what if you want to pass **HTML markup or other components**?

This is where **Slots** shine. A Slot acts as a placeholder inside a component that the parent can populate with custom HTML content.

### Child component (\`Card.vue\`):
\`\`\`html
<div class="card">
  <slot></slot> <!-- Content goes here -->
</div>
\`\`\``,
      km: `# ការរៀបចំប្លង់បត់បែនជាមួយ Slots
Props អនុញ្ញាតឱ្យយើងបញ្ជូនទិន្នន័យមានរចនាសម្ព័ន្ធដូចជា អក្សរ លេខ ឬ array។ ចុះបើអ្នកចង់បញ្ជូន **ប្លង់កូដ HTML ឬ Component ផ្សេងទៀត** ទៅឱ្យគ្នាវិញ?

នេះជាកន្លែងដែល **Slots** បញ្ចេញពន្លឺ។ Slot ដើរតួជាកន្លែងទំនេរនៅក្នុង Component ដែលរង់ចាំ Component មេបំពេញវាដោយកូដ HTML ផ្សេងៗតាមតម្រូវការ។

### នៅក្នុង Component កូន (\`Card.vue\`)៖
\`\`\`html
<div class="card">
  <slot></slot> <!-- កូដបំពេញនឹងបង្ហាញនៅទីនេះ -->
</div>
\`\`\``
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm">
    <!-- Slot Placeholder demonstration -->
    <div class="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-indigo-900 mb-4">
      <slot>
        <!-- Fallback/default content if parent sends nothing -->
        <p class="text-xs text-center font-medium">Default slot content is active because parent didn't provide any markup.</p>
      </slot>
    </div>

    <button @click="hasCustomContent = !hasCustomContent" class="w-full py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl uppercase tracking-wider">
      {{ hasCustomContent ? 'Clear custom slots' : 'Populate custom slots' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const hasCustomContent = ref(false);
</script>`
  },
  {
    id: "vue-v-slot",
    title: { en: "28. Vue v-slot", km: "២៨. Vue v-slot" },
    content: {
      en: `# Named Slots with \`v-slot\`
Sometimes components require multiple slot placeholders (e.g. a Modal component needs a Header slot, a Body slot, and a Footer slot).

To achieve this, declare **Named Slots** inside your child component:
\`<slot name="header"></slot>\`

In the parent, reference these slots using the \`v-slot:\` directive or its shorthand **\`#\`**:
\`<template #header><h1>My Modal Title</h1></template>\``,
      km: `# ស្លតមានឈ្មោះ (Named Slots) ជាមួយ \`v-slot\`
گاهی اوقات component នីមួយៗទាមទារទីតាំង slots ច្រើនកន្លែងផ្សេងគ្នា (ឧទាហរណ៍ Component Modal ត្រូវការស្លតសម្រាប់ Header, ស្លតសម្រាប់ Body និងស្លតសម្រាប់ Footer ផ្សេងគ្នា)។

ដើម្បីធ្វើដូចនេះ យើងត្រូវប្រកាស **Named Slots** នៅក្នុង Component កូន៖
\`<slot name="header"></slot>\`

នៅក្នុង Component មេ ហៅប្រើស្លតទាំងនោះដោយប្រើប្រាស់ \`v-slot:\` ឬសញ្ញាកាត់ **\`#\`**៖
\`<template #header><h1>My Modal Title</h1></template>\``
    },
    starterCode: `<template>
  <div class="max-w-sm bg-white border border-slate-200 rounded-2xl overflow-hidden">
    <!-- Reusable Card layout with named slots representing header/footer -->
    <div class="p-4 bg-slate-50 border-b border-slate-100 font-bold text-slate-800 text-sm">
      <slot name="header">Default Card Header</slot>
    </div>
    
    <div class="p-4 text-xs text-slate-600 leading-relaxed">
      <slot name="body">Default Card Body Content</slot>
    </div>

    <div class="p-3 bg-slate-50 border-t border-slate-100 flex justify-end gap-2">
      <slot name="footer">
        <button class="px-3 py-1 bg-slate-200 text-slate-700 text-[10px] font-bold rounded-lg">Dismiss</button>
      </slot>
    </div>
  </div>
</template>

<script setup>
// Named Slots allow granular content distribution!
</script>`
  },
  {
    id: "vue-scoped-slots",
    title: { en: "29. Scoped Slots", km: "២៩. Scoped Slots" },
    content: {
      en: `# Data Sharing with Scoped Slots
In standard slots, variables inside the slot content are scoped strictly to the parent component. But what if you want to access variables **from inside the child component** inside your slot template?

This is where **Scoped Slots** come in! You can pass properties up from the child's slot element, making them available to the parent.

### Child:
\`<slot :item="user"></slot>\`

### Parent:
\`<template #default="slotProps"> {{ slotProps.item.name }} </template>\``,
      km: `# ការចែករំលែកទិន្នន័យជាមួយ Scoped Slots
នៅក្នុង slots ធម្មតា អថេរនៅក្នុងប្លុកកូដស្លត គឺត្រូវស្ថិតនៅក្រោមដែនកំណត់របស់ Component មេ។ ប៉ុន្តែចុះបើអ្នកចង់ហៅប្រើអថេរ **ពីខាងក្នុង Component កូន** មកក្នុងស្លតនោះវិញ?

នេះជាការងាររបស់ **Scoped Slots**! អ្នកអាចបញ្ជូនលក្ខណៈសម្បត្តិពីស្លតរបស់កូនឡើងលើ ដែលអនុញ្ញាតឱ្យមេអាចយកទៅប្រើប្រាស់បាន។

### នៅក្នុង Component កូន៖
\`<slot :item="user"></slot>\`

### នៅក្នុង Component មេ៖
\`<template #default="slotProps"> {{ slotProps.item.name }} </template>\``
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm">
    <h3 class="text-sm font-bold text-slate-800 mb-3">Scoped Slots Sandbox</h3>
    
    <!-- Child component passes variable states up to slots -->
    <div class="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-semibold">
      <slot :internalCount="count">
        Child count is currently: {{ count }}
      </slot>
    </div>

    <button @click="count++" class="w-full mt-3 py-2 bg-emerald-500 text-white text-xs font-semibold rounded-xl">
      Increment Child Count
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(100);
</script>`
  },
  {
    id: "vue-dynamic-components",
    title: { en: "30. Dynamic Components", km: "៣០. Dynamic Components" },
    content: {
      en: `# Toggling Views with Dynamic Components
Sometimes we need to dynamically switch between multiple components on the exact same spot in a page (like tabbed views, wizard flows, or dashboards).

Instead of massive blocks of \`v-if\` / \`v-else\`, Vue provides the special **\`<component :is="activeComponent">\`** element!

### Performance optimization with \`keep-alive\`:
Wrap your component inside \`<keep-alive>\` to cache inactive components, preserving their state when switched out!`,
      km: `# ការផ្លាស់ប្តូរទិដ្ឋភាពជាមួយ Dynamic Components
ពេលខ្លះយើងត្រូវការផ្លាស់ប្តូរការបង្ហាញរវាង Components ច្រើននៅលើកន្លែងតែមួយ (ដូចជាផ្ទាំងប្តូរ Tabs, ជំហានបំពេញព័ត៌មាន ឬផ្ទាំងគ្រប់គ្រង Dashboard)។

ជំនួសឱ្យការសរសើរប្លុកកូដ \`v-if\` / \`v-else\` វែងអន្លាយ Vue ផ្តល់នូវ element ពិសេសគឺ **\`<component :is="activeComponent">\`**!

### ការបង្កើនល្បឿនជាមួយ \`keep-alive\`៖
រុំព័ទ្ធ component របស់អ្នកជាមួយ \`<keep-alive>\` ដើម្បីរក្សាសភាពចងចាំ component ទាំងឡាយដែលមិនសកម្ម ការពារកុំឱ្យបាត់បង់ទិន្នន័យពេលប្តូរចេញ!`
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm">
    <div class="flex gap-2 mb-4">
      <button @click="activeTab = 'tabA'" 
              :class="activeTab === 'tabA' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'" 
              class="flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all">
        Render Tab A
      </button>
      <button @click="activeTab = 'tabB'" 
              :class="activeTab === 'tabB' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'" 
              class="flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all">
        Render Tab B
      </button>
    </div>

    <!-- Simulating Dynamic Components -->
    <div class="p-4 bg-slate-50 border border-slate-200/60 rounded-xl text-center">
      <div v-if="activeTab === 'tabA'">
        <h4 class="font-bold text-slate-800 text-sm">Component Tab A</h4>
        <p class="text-xs text-slate-500 mt-1">Status and logs of Component A are active.</p>
      </div>
      <div v-else>
        <h4 class="font-bold text-slate-800 text-sm">Component Tab B</h4>
        <p class="text-xs text-slate-500 mt-1">Status and logs of Component B are active.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref("tabA");
</script>`
  }
];
