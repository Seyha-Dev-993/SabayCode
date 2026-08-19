import { Lesson } from '../types';

export const vueLessonsPart3: Lesson[] = [
  {
    id: "vue-teleport",
    title: { en: "31. Vue Teleport", km: "៣១. Vue Teleport" },
    content: {
      en: `# Escaping DOM Boundaries with Teleport
Sometimes, we want to mount an element outside of its parent component. Common examples are full-screen overlays, toasts, or modals that should visually render directly under the \`<body>\` to avoid CSS hierarchy conflicts (e.g. \`overflow: hidden\` on parents).

Vue resolves this using the **\`<Teleport>\`** component:
\`<Teleport to="body"> <MyModal /> </Teleport>\`

The modal's markup is physically moved to the bottom of the \`<body>\` in the browser DOM, but its state remains fully controlled inside the component!`,
      km: `# ការចាកចេញពីដែនកំណត់ DOM ជាមួយ Teleport
ពេលខ្លះយើងចង់ឱ្យ element មួយត្រូវបានបង្កប់នៅខាងក្រៅ Component របស់វា។ ឧទាហរណ៍ទូទៅគឺផ្ទាំងបង្ហាញពេញអេក្រង់ (Overlays), Toasts, ឬ Modals ដែលគួរតែបង្ហាញផ្ទាល់នៅក្រោម \`<body>\` ដើម្បីជៀសវាងបញ្ហាទាក់ទងនឹងឋានានុក្រម CSS (ដូចជា \`overflow: hidden\` លើ component មេ)។

Vue ដោះស្រាយបញ្ហានេះដោយប្រើប្រាស់ component **\`<Teleport>\`**៖
\`<Teleport to="body"> <MyModal /> </Teleport>\`

រចនាសម្ព័ន្ធរបស់ modal នឹងត្រូវផ្លាស់ទីទៅកាន់ផ្នែកខាងក្រោមនៃ \`<body>\` នៅក្នុង DOM របស់ browser ប៉ុន្តែរាល់សភាពរបស់វាគឺនៅតែស្ថិតនៅក្រោមការគ្រប់គ្រងរបស់ Component ដដែល!`
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm text-center">
    <h3 class="font-bold text-slate-950">Teleport Sandbox</h3>
    <p class="text-xs text-slate-500 mt-1">This panel demonstrates how elements are telepathically projected.</p>

    <button @click="showToast = true" class="mt-4 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-xl">
      Trigger Project Toast
    </button>

    <!-- Teleporting representation -->
    <div v-if="showToast" class="mt-4 p-4 bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg flex justify-between items-center animate-bounce">
      <span>Projected successfully!</span>
      <button @click="showToast = false" class="underline font-normal">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const showToast = ref(false);
</script>`
  },
  {
    id: "vue-http-request",
    title: { en: "32. HTTP Request", km: "៣២. ការស្នើសុំ HTTP Request" },
    content: {
      en: `# Fetching Remote Data
Most modern frontend apps rely on pulling dynamic data from remote database servers. In Vue, you handle this inside lifecycle hooks or setup scripts using the standard standard \`fetch()\` API or packages like \`axios\`.

To prevent breaking classroom sandboxes, always use safe, mocked endpoints or simulated async methods to populate states cleanly.`,
      km: `# ការទាញយកទិន្នន័យពីខាងក្រៅ
កម្មវិធីគេហទំព័រទំនើបភាគច្រើនពឹងផ្អែកលើការទាញយកទិន្នន័យពីម៉ាស៊ីនបម្រើខាងក្រៅ។ នៅក្នុង Vue អ្នកអាចដោះស្រាយកិច្ចការនេះនៅក្នុង lifecycle hooks ឬ setup scripts ដោយប្រើប្រាស់ standard \`fetch()\` API ឬកញ្ចប់បណ្ណាល័យដូចជា \`axios\`។

ដើម្បីកុំឱ្យប៉ះពាល់ដល់ផ្ទាំងសាកល្បង សូមប្រើប្រាស់ endpoints ក្លែងក្លាយ ឬការបង្កើតឡូហ្សិកពន្យារពេល (Simulated async) ដើម្បីបង្ហាញទិន្នន័យ។`
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm">
    <h3 class="font-bold text-slate-900 text-sm mb-3">Remote Users List</h3>
    
    <div v-if="loading" class="text-xs text-slate-400 italic">Fetching users list...</div>
    
    <div v-else class="space-y-2">
      <div v-for="user in users" :key="user.id" class="p-2.5 bg-slate-50 rounded-lg text-xs font-semibold text-slate-700">
        {{ user.name }} ({{ user.role }})
      </div>
    </div>

    <button @click="fetchData" class="w-full mt-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl">
      Reload Simulated Fetch API
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const users = ref([]);
const loading = ref(true);

const fetchData = () => {
  loading.value = true;
  // Simulating a fast 800ms network fetch latency
  setTimeout(() => {
    users.value = [
      { id: 1, name: "Alice Dev", role: "Software Architect" },
      { id: 2, name: "Bob Front", role: "UI Designer" },
      { id: 3, name: "Charlie Vue", role: "Fullstack Eng" }
    ];
    loading.value = false;
  }, 800);
};

onMounted(() => {
  fetchData();
});
</script>`
  },
  {
    id: "vue-template-refs",
    title: { en: "33. Template Refs", km: "៣៣. Template Refs" },
    content: {
      en: `# Accessing DOM Nodes with Template Refs
While Vue's declarative rendering system means you rarely need to modify the DOM manually, sometimes direct access to a DOM node is required (e.g. focusing an input, playing media, or measuring element sizes).

To achieve this, declare a ref in your script with the **exact same name** as the \`ref\` attribute in the HTML markup:
\`<input ref="myInput">\`

Inside the setup script, access it via \`myInput.value\`.

> **Crucial Pitfall**: The ref value is only populated **after** the component is fully mounted in the DOM. Accessing it before yields \`null\`!`,
      km: `# ការគ្រប់គ្រង DOM តាមរយៈ Template Refs
ទោះបីជាប្រព័ន្ធរបស់ Vue ជួយឱ្យយើងមិនចាំបាច់កែប្រែ DOM ដោយដៃផ្ទាល់ក៏ដោយ ពេលខ្លះយើងនៅតែត្រូវការចូលទៅកាន់ DOM node ដោយផ្ទាល់ (ឧទាហរណ៍ ផ្ដោត focus លើប្រអប់បញ្ចូល, ចាក់សារធាតុផ្សំសំឡេង ឬវាស់ទំហំ element)។

ដើម្បីធ្វើដូចនេះ ត្រូវប្រកាស ref មួយនៅក្នុង script ដែលមានឈ្មោះ **ដូចគ្នាបេះបិទ** ទៅនឹង attribute \`ref\` នៅក្នុង HTML ៖
\`<input ref="myInput">\`

នៅក្នុង setup script អ្នកអាចហៅប្រើប្រាស់វាបានតាមរយៈ \`myInput.value\`។

> **ចំណុចប្រុងប្រយ័ត្ន**: តម្លៃរបស់ ref គឺត្រូវបានបង្កើតឡើង **បន្ទាប់ពី** component ត្រូវបានបង្កប់ចូលក្នុង DOM ទាំងស្រុង។ ការហៅប្រើប្រាស់មុនពេលនោះនឹងផ្តល់តម្លៃ \`null\`!`
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm text-center">
    <h3 class="font-bold text-slate-900 mb-3">Template Refs</h3>
    
    <input ref="inputNode" type="text" placeholder="I will autofocus!" class="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-emerald-500">
    
    <button @click="focusInput" class="px-4 py-2 bg-emerald-500 text-white text-xs font-semibold rounded-xl">
      Click to Focus Input Box
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Must match the HTML ref attribute name exactly
const inputNode = ref(null);

function focusInput() {
  if (inputNode.value) {
    inputNode.value.focus();
  }
}

onMounted(() => {
  focusInput();
});
</script>`
  },
  {
    id: "vue-lifecycle-hooks",
    title: { en: "34. Lifecycle Hooks", km: "៣៤. Lifecycle Hooks" },
    content: {
      en: `# Hooking into Component Lifecycle Hooks
Every Vue component goes through a series of stages: creation, mounting, updating, and unmounting. You can run custom code at these specific stages using **Lifecycle Hooks**.

### Common Core Hooks:
* **\`onMounted()\`**: Component has been inserted into the DOM. Great for API calls or DOM measurements.
* **\`onUpdated()\`**: Component state has changed and DOM was updated.
* **\`onUnmounted()\`**: Component was destroyed and removed. Ideal for cleaning up active listeners or timers to prevent memory leaks.`,
      km: `# ដំណើរការកូដតាមពេលវេលា Lifecycle Hooks
រាល់ component របស់ Vue តែងតែឆ្លងកាត់ដំណាក់កាលជាបន្តបន្ទាប់៖ ការបង្កើត ការបង្កប់ក្នុង DOM ការធ្វើបច្ចុប្បន្នភាព និងការលុបចោល។ អ្នកអាចដំណើរការកូដផ្ទាល់ខ្លួននៅក្នុងដំណាក់កាលទាំងនោះតាមរយៈ **Lifecycle Hooks**។

### Hooks ស្នូលពេញនិយម៖
* **\`onMounted()\`**: Component ត្រូវបានបង្កប់ចូលក្នុង DOM រួចរាល់។ ល្អសម្រាប់ទាញយកទិន្នន័យ ឬវាស់ទំហំ element។
* **\`onUpdated()\`**: សភាពប្រែប្រួលបានផ្លាស់ប្តូរ ហើយ DOM ត្រូវបានបង្ហាញជាថ្មី។
* **\`onUnmounted()\`**: Component ត្រូវបានលុបចោល។ ល្អសម្រាប់លុបចោល timers ឬ listeners ដើម្បីកុំឱ្យស្ទះម៉ាស៊ីន (Memory leaks)។`
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm text-center">
    <h3 class="font-bold text-slate-900">Lifecycle Monitor</h3>
    <p class="text-xs text-slate-500 mt-1">Check the active state and hooks logs below.</p>

    <div class="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-xl text-left font-mono text-[10px] text-slate-600">
      {{ activeLog }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activeLog = ref("Registering hooks...");

onMounted(() => {
  activeLog.value = "Component successfully mounted! onMounted() hook executed.";
});

onUnmounted(() => {
  // Cleans up when the tab or component changes
  console.log("Component unmounted!");
});
</script>`
  },
  {
    id: "vue-provide-inject",
    title: { en: "35. Provide & Inject", km: "៣៥. Provide & Inject" },
    content: {
      en: `# Avoiding Prop-Drilling with Provide/Inject
In deeply nested component hierarchies, passing props down through multiple layers of children that don't need them (known as "Prop-Drilling") becomes messy and error-prone.

Vue provides an elegant solution: **Provide / Inject**.
* A grandparent component **provides** data.
* Any deeply nested grandchild can **inject** and use that data directly, completely bypassing intermediate parents!`,
      km: `# ជៀសវាងការធ្លាយ Props ជាមួយ Provide/Inject
នៅក្នុងឋានានុក្រម Component ច្រើនជាន់ ការបញ្ជូន props ចុះកាត់តាម Component កូនចៅជាច្រើនជាន់ដែលមិនត្រូវការពួកវា (ហៅថា "Prop-Drilling") ធ្វើឱ្យកូដច្របូកច្របល់ និងងាយខុស។

Vue ផ្តល់នូវដំណោះស្រាយយ៉ាងទំនើប៖ **Provide / Inject**។
* Component មេកម្រិតខ្ពស់បំផុត **Provide** ផ្តល់ទិន្នន័យ។
* រាល់ Component កូនចៅកម្រិតទាបៗអាច **Inject** យកទិន្នន័យនោះទៅប្រើប្រាស់បានភ្លាមៗ ដោយមិនបាច់កាត់តាម Component កណ្តាលឡើយ!`
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm">
    <h3 class="font-bold text-slate-900 mb-2">Grandparent Component</h3>
    
    <!-- We provide global context here -->
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
      <span class="text-slate-500">Provided Theme State: </span>
      <strong class="text-indigo-600">{{ currentTheme }}</strong>
    </div>

    <button @click="currentTheme = currentTheme === 'Light' ? 'Dark' : 'Light'" class="w-full mt-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl">
      Toggle Provided Theme
    </button>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';

const currentTheme = ref("Light");

// Any grandchild can now call: const theme = inject('global-theme');
provide('global-theme', currentTheme);
</script>`
  },
  {
    id: "vue-routing",
    title: { en: "36. Vue Routing", km: "៣៦. ប្រព័ន្ធរៀបចំផ្លូវកូដ" },
    content: {
      en: `# Managing Views with Vue Router
In Single Page Applications (SPAs), we do not refresh the browser to change pages. Instead, we use a client-side router to switch components based on URL path updates.

### Core Concepts:
* **\`<RouterView />\`**: Tells the router exactly where to render active route components.
* **\`<RouterLink to="/path">\`**: Custom anchor tag wrapper that transitions routes asynchronously without trigger hard page reloads.`,
      km: `# ការគ្រប់គ្រងទំព័រជាមួយ Vue Router
នៅក្នុងកម្មវិធី Single Page Applications (SPAs) យើងមិនធ្វើឱ្យកម្មវិធីរុករកទំព័រ Refresh ឡើយនៅពេលប្តូរទំព័រ។ ផ្ទុយទៅវិញ យើងប្រើប្រព័ន្ធរៀបចំផ្លូវពីខាងកូដ (Client-side router) ដើម្បីផ្លាស់ប្តូរ Component ផ្អែកលើការប្រែប្រួល URL។

### គោលគំនិតចម្បង៖
* **\`<RouterView />\`**: ប្រាប់ Router ឱ្យដឹងច្បាស់ថាត្រូវបង្ហាញ Component សកម្មនៅទីតាំងណា។
* **\`<RouterLink to="/path">\`**: តំណភ្ជាប់ពិសេសដែលជួយប្តូរទំព័រយ៉ាងរលូន ដោយមិនបាច់ផ្ទុកគេហទំព័រទាំងមូលឡើងវិញឡើយ។`
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm">
    <h3 class="font-bold text-slate-900 mb-3">Vue Router Sandbox</h3>
    
    <!-- Navlinks representation -->
    <div class="flex gap-2 mb-4 text-xs font-semibold">
      <button @click="route = 'home'" :class="route === 'home' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'" class="px-3 py-1.5 rounded-lg">Home Route</button>
      <button @click="route = 'profile'" :class="route === 'profile' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'" class="px-3 py-1.5 rounded-lg">Profile Route</button>
    </div>

    <!-- Active view container representation -->
    <div class="p-4 bg-slate-50 rounded-xl text-xs font-medium text-slate-600 text-center">
      <div v-if="route === 'home'">
        🏠 Home component view is currently rendered inside RouterView.
      </div>
      <div v-else>
        👤 Profile component view is currently rendered inside RouterView.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const route = ref("home");
</script>`
  },
  {
    id: "vue-form-inputs",
    title: { en: "37. Form Inputs", km: "៣៧. ការបញ្ចូលទិន្នន័យ Form" },
    content: {
      en: `# Advanced Bindings on Inputs
\`v-model\` handles more than just simple text inputs. It dynamically manages diverse HTML input controls:

### Usage Patterns:
1. **Checkboxes (Boolean)**: Binds to a boolean variable.
2. **Checkboxes (Multi-select)**: Binds multiple values to a single shared array variable.
3. **Radio Buttons**: Binds selected option value cleanly.
4. **Textareas**: Captures multiline string values.`,
      km: `# ការចងភ្ជាប់កម្រិតខ្ពស់លើ Form Inputs
\`v-model\` អាចធ្វើការងារបានច្រើនជាងប្រអប់សរសេរអក្សរសាមញ្ញ។ វាអាចចាត់ចែងគ្រប់គ្រងឧបករណ៍បំពេញព័ត៌មាន HTML ផ្សេងៗគ្នាជាច្រើន៖

### ទម្រង់ប្រើប្រាស់៖
1. **Checkboxes (Boolean)**: ចងភ្ជាប់ទៅនឹងអថេរលក្ខខណ្ឌ ពិត/មិនពិត។
2. **Checkboxes (ជ្រើសរើសច្រើន)**: ចងភ្ជាប់រាល់តម្លៃដែលបានរើសជាច្រើនបញ្ចូលទៅក្នុង Array តែមួយ។
3. **Radio Buttons**: ចងភ្ជាប់តម្លៃដែលបានជ្រើសរើសយ៉ាងច្បាស់លាស់។
4. **Textareas**: ចាប់យកតម្លៃអត្ថបទវែងៗជាច្រើនជួរ។`
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm">
    <h3 class="font-bold text-slate-900 mb-4">Multi-input Sandbox</h3>
    
    <div class="space-y-3 text-sm">
      <label class="flex items-center gap-2 font-medium text-slate-700">
        <input type="checkbox" v-model="agree" class="rounded border-slate-300 text-indigo-600">
        I agree to the student guidelines
      </label>

      <div class="pt-3 border-t border-slate-100 text-xs text-slate-500">
        <strong>Binding State:</strong> {{ agree ? "Accepted ✅" : "Declined 🔒" }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const agree = ref(false);
</script>`
  },
  {
    id: "vue-animations",
    title: { en: "38. Vue Animations", km: "៣៨. ចលនាគំនូរជីវចល Vue" },
    content: {
      en: `# Smooth Page Transitions with \`<Transition>\`
Vue provides a built-in **\`<Transition>\`** helper component that simplifies animating elements when they enter or leave the DOM (e.g., via \`v-if\` or \`v-show\`).

### Transition CSS Class Hooks:
Vue applies specialized CSS classes automatically at active stages:
* **\`v-enter-from\`**: Initial starting state.
* **\`v-enter-active\`**: Transition active stage (define transition durations here).
* **\`v-enter-to\`**: Final finished entry state.
* Similarly for leaving stages: \`v-leave-from\`, \`v-leave-active\`, \`v-leave-to\`.`,
      km: `# ចលនាប្តូរទំព័ររលូនជាមួយ \`<Transition>\`
Vue ផ្តល់ជូននូវ Component ជំនួយមកស្រាប់គឺ **\`<Transition>\`** ដែលជួយសម្រួលការបង្កើតចលនា (Animation) នៅពេល elements ចូល ឬចាកចេញពី DOM (ឧទាហរណ៍ តាមរយៈ \`v-if\` ឬ \`v-show\`)។

### ថ្នាក់រចនា CSS Transitions៖
Vue នឹងបន្ថែមថ្នាក់រចនា CSS ពិសេសៗដោយស្វ័យប្រវត្តិតាមដំណាក់កាលនីមួយៗ៖
* **\`v-enter-from\`**: សភាពចាប់ផ្តើមដំបូងបង្អស់។
* **\`v-enter-active\`**: ដំណាក់កាលកំពុងផ្លាស់ប្តូរ (កំណត់រយៈពេលចលនានៅទីនេះ)។
* **\`v-enter-to\`**: សភាពបញ្ចប់ការចូលសកម្ម។
* ដូចគ្នាដែរសម្រាប់ដំណាក់កាលចាកចេញ៖ \`v-leave-from\`, \`v-leave-active\`, \`v-leave-to\`។`
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm text-center">
    <h3 class="font-bold text-slate-900 mb-4">Vue Transition</h3>
    
    <button @click="show = !show" class="px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-xl mb-4">
      Animate Alert Box
    </button>

    <div v-if="show" class="p-4 bg-indigo-50 border border-indigo-200 text-indigo-800 rounded-xl text-xs font-medium animate-fade">
      ✨ Smooth CSS Transition representation active!
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(true);
</script>

<style scoped>
/* Simplified CSS transitions */
.animate-fade {
  transition: opacity 0.5s ease;
}
</style>`
  },
  {
    id: "vue-animations-with-v-for",
    title: { en: "39. Vue Animations with v-for", km: "៣៩. ចលនាវិលជុំ v-for" },
    content: {
      en: `# Animating Lists with \`<TransitionGroup>\`
While \`<Transition>\` is designed for single elements, **\`<TransitionGroup>\`** is built to animate multiple elements rendered in a \`v-for\` list.

### Key differences:
1. It renders an actual wrapper element in the DOM (defaults to \`<span>\`, customizable via the \`tag\` attribute).
2. Every item in the list **must** have a unique, explicit \`:key\` attribute.`,
      km: `# បង្កើតចលនាលើបញ្ជីជាមួយ \`<TransitionGroup>\`
ខណៈពេលដែល \`<Transition>\` ត្រូវបានប្រើប្រាស់សម្រាប់តែ element មួយគត់ **\`<TransitionGroup>\`** ត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ចលនាលើបញ្ជី elements ច្រើនដែលបង្ហាញដោយ \`v-for\`។

### ចំណុចខុសគ្នាធំៗ៖
1. វាបង្កើត element រុំព័ទ្ធពិតប្រាកដមួយក្នុង DOM (តាមលំនាំដើមគឺ \`<span>\` ប៉ុន្តែអាចកែប្រែបានតាមរយៈ attribute \`tag\`)។
2. រាល់គ្រប់ធាតុទាំងអស់នៅក្នុងបញ្ជី **ត្រូវតែ** មាន attribute \`:key\` ឯកវចនៈច្បាស់លាស់។`
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm">
    <h3 class="font-bold text-slate-900 mb-3">TransitionGroup Simulator</h3>
    
    <div class="flex gap-2 mb-4">
      <button @click="addItem" class="flex-1 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl">Add Element</button>
      <button @click="clearItems" class="px-3 py-2 bg-slate-100 text-slate-500 text-xs font-semibold rounded-xl">Clear All</button>
    </div>

    <!-- Simulating list transitions -->
    <div class="space-y-2">
      <div v-for="item in items" :key="item" class="p-2.5 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-100">
        Element ID: #{{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([101, 102]);
let nextId = 103;

function addItem() {
  items.value.push(nextId++);
}

function clearItems() {
  items.value = [];
}
</script>`
  },
  {
    id: "vue-build",
    title: { en: "40. Vue Build", km: "៤០. ការចងក្រងកូដផលិតកម្ម" },
    content: {
      en: `# Bundling for Production
After completing development, you compile your code into highly optimized, minified assets suitable for production servers.

With Vite, this is achieved by running the command:
\`npm run build\`

Vite processes files, combines components, transpiles code into browser-safe ES5/ES6 Javascript, and compiles clean assets inside the \`/dist\` directory.`,
      km: `# ការចងក្រងកូដសម្រាប់ផលិតកម្ម
បន្ទាប់ពីបញ្ចប់ការសរសេរកូដអភិវឌ្ឍន៍ អ្នកត្រូវចងក្រងកូដរបស់អ្នកទៅជាឯកសារដែលមានទំហំតូច និងមានប្រសិទ្ធភាពខ្ពស់ ងាយស្រួលដាក់នៅលើម៉ាស៊ីនបម្រើផលិតកម្ម (Production servers)។

ជាមួយ Vite កិច្ចការនេះធ្វើឡើងដោយរត់កូដបញ្ជា៖
\`npm run build\`

Vite នឹងដំណើរការឯកសារ រួមបញ្ចូល components បំប្លែងកូដទៅជាកូដដែលដំណើរការបានលើគ្រប់ browser (Browser-safe Javascript) និងបង្កើតឯកសារចុងក្រោយនៅក្នុងថត \`/dist\`។`
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm text-center">
    <h3 class="font-bold text-slate-900">Production Bundle Simulated</h3>
    <p class="text-xs text-slate-500 mt-2 font-mono">/dist/index.html - 1.2KB</p>
    <p class="text-xs text-emerald-600 mt-1 font-mono">/dist/assets/index.js - 48KB (Minified)</p>
  </div>
</template>

<script setup>
// Build optimizations are managed behind the scenes by bundlers like Vite!
</script>`
  },
  {
    id: "vue-composition-api",
    title: { en: "41. Vue Composition API", km: "៤១. Vue Composition API" },
    content: {
      en: `# The Paradigm Shift: Composition API
Vue 3 introduced the **Composition API** as an alternative to the legacy Options API.

### Why Composition API is preferred:
* **Options API** splits code strictly by options fields (\`data\`, \`methods\`, \`computed\`). For large components, a single feature's logic is scattered across different parts of the file.
* **Composition API** enables organizing code by **logical concern** (grouping variables, methods, and lifecycle hooks belonging to a single feature together), facilitating clean encapsulation and reuse!`,
      km: `# របត់ថ្មីនៃការសរសេរកូដ៖ Composition API
Vue 3 បានណែនាំ **Composition API** ដែលជាជម្រើសដ៏ទំនើបជំនួសឱ្យ Options API កាលពីជំនាន់ចាស់។

### ហេតុអ្វីបានជាគេចូលចិត្តប្រើ Composition API៖
* **Options API** បំបែកកូដដាច់ៗពីគ្នាតាមប្រភេទ (ដូចជា \`data\`, \`methods\`, \`computed\`)។ សម្រាប់សមាសភាគធំៗ ឡូហ្សិករបស់មុខងារតែមួយត្រូវបានរាយប៉ាយពេញឯកសារ។
* **Composition API** អនុញ្ញាតឱ្យយើងរៀបចំកូដចងកម្រងតាម **តួនាទីឡូហ្សិក (Logical concerns)** ដោយដាក់អថេរ វិធីសាស្ត្រ និង lifecycle hooks របស់មុខងារតែមួយនៅជិតគ្នា ងាយស្រួលយល់ និងយកទៅប្រើឡើងវិញ!`
    },
    starterCode: `<template>
  <div class="p-6 bg-white border border-slate-200 rounded-2xl max-w-sm text-center">
    <h3 class="font-bold text-slate-900">Composition API State</h3>
    
    <div class="mt-4 flex justify-around">
      <div>
        <p class="text-[10px] text-slate-400 font-bold uppercase">X coordinate</p>
        <span class="text-lg font-mono font-bold text-indigo-600">{{ x }}</span>
      </div>
      <div>
        <p class="text-[10px] text-slate-400 font-bold uppercase">Y coordinate</p>
        <span class="text-lg font-mono font-bold text-indigo-600">{{ y }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Encapsulated Feature Logic
const x = ref(0);
const y = ref(0);

const updateMouse = (e) => {
  x.value = e.clientX;
  y.value = e.clientY;
};

onMounted(() => {
  window.addEventListener('mousemove', updateMouse);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMouse);
});
</script>`
  }
];
