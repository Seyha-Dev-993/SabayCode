import { Lesson } from '../types';

export const vueLessonsPart1: Lesson[] = [
  {
    id: "vue-home",
    title: { en: "1. Vue Home", km: "១. ទំព័រដើម Vue" },
    content: {
      en: `# Welcome to the Vue.js Course!
Vue.js (pronounced /vjuː/, like **view**) is a progressive JavaScript framework for building user interfaces. Unlike monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.

### What is progressive?
It means you can use Vue in two different ways:
1. **As a simple CDN script**: Just like jQuery, drop a script tag into an HTML file and make static pages interactive.
2. **As a powerful Full-SFC Framework**: Scale up with a modern build system using Single File Components (\`.vue\` files) for large-scale enterprise apps.

### Course Roadmap
* **Getting Started (CDN approach)**: Master the core directives (\`v-bind\`, \`v-if\`, \`v-for\`), reactive states, methods, and form bindings.
* **Scaling Up (SFC & Component architecture)**: Deep dive into Components, Props, Custom Events, Slots, Provide/Inject, Routing, and the Composition API.`,
      km: `# ស្វាគមន៍មកកាន់វគ្គសិក្សា Vue.js!
Vue.js (អានថា **View**) គឺជាក្របខ័ណ្ឌ JavaScript វិវឌ្ឍន៍លឿនសម្រាប់ការសាងសង់ចំណុចប្រទាក់អ្នកប្រើប្រាស់ (User Interfaces)។ ខុសពីក្របខ័ណ្ឌយក្សដទៃទៀត Vue ត្រូវបានរចនាឡើងពីបាតគ្រឹះដើម្បីឱ្យងាយស្រួលក្នុងការបញ្ចូលទៅក្នុងគម្រោងណាមួយជាជំហានៗ។

### តើ "Progressive" មានន័យដូចម្តេច?
វាមានន័យថាអ្នកអាចប្រើប្រាស់ Vue បានពីររបៀប៖
1. **ប្រើជា Script CDN ធម្មតា**: ដូចជា jQuery ដែរ គ្រាន់តែដាក់កូដស្គ្រីបចូលទៅក្នុងឯកសារ HTML ដើម្បីធ្វើឱ្យទំព័រ جامទាក់ទាញ និងមានអន្តរកម្ម។
2. **ប្រើជា Full-SFC Framework**: បង្កើនកម្រិតជាមួយប្រព័ន្ធបង្កើតទំនើបដោយប្រើប្រាស់ Single File Components (\`.vue\`) សម្រាប់កម្មវិធីខ្នាតធំ។

### ផែនទីបង្ហាញផ្លូវនៃវគ្គសិក្សា
* **ការចាប់ផ្តើម (របៀប CDN)**: ស្ទាត់ជំនាញលើ Directives ស្នូល (\`v-bind\`, \`v-if\`, \`v-for\`), សភាពប្រែប្រួល, Methods និងការចងទិន្នន័យ Form។
* **ការបង្កើនកម្រិត (រចនាសម្ព័ន្ធ Component)**: សិក្សាស៊ីជម្រៅលើ Components, Props, Custom Events, Slots, Provide/Inject, Routing, និង Composition API។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Vue.js Learning Dashboard</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 text-slate-800 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
    <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 font-extrabold text-2xl mb-4">
      V
    </div>
    <h1 class="text-2xl font-bold text-slate-900 mb-2">{{ title }}</h1>
    <p class="text-sm text-slate-600 mb-4">{{ desc }}</p>
    
    <div class="p-4 bg-emerald-50 text-emerald-800 font-semibold rounded-xl text-xs mb-4">
      Student Level: {{ currentLevel }}
    </div>

    <button @click="levelUp" class="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm rounded-xl shadow-md shadow-emerald-500/10 transition-colors">
      Click to Level Up!
    </button>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const title = ref("My Vue.js Odyssey");
        const desc = ref("Click the button to increase your expertise levels in the progressive framework.");
        const currentLevel = ref(1);

        const levelUp = () => {
          currentLevel.value++;
          if (currentLevel.value === 5) {
            desc.value = "Great job! You've grasped the absolute basics. Let's move to Vue Intro!";
          }
        };

        return { title, desc, currentLevel, levelUp };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-intro",
    title: { en: "2. Vue Intro", km: "២. សេចក្តីផ្តើម Vue" },
    content: {
      en: `# Introduction to Vue Core
At the core of Vue is an **declarative rendering** system that extends HTML. Using simple template expressions, Vue automatically binds state variables to the DOM.

### Reactive State with \`ref()\`
In Vue 3, reactivity is managed through the Composition API using \`ref()\`. 
When a \`ref()\` value changes, Vue automatically tracks it and updates the HTML rendering without manual DOM selections like \`document.getElementById\`.

> **Note**: Always access and edit ref values in scripts via \`.value\`, but omit \`.value\` inside HTML templates!`,
      km: `# សេចក្តីផ្តើមអំពីស្នូលរបស់ Vue
បេះដូងរបស់ Vue គឺប្រព័ន្ធ **Declarative rendering** ដែលពង្រីកសមត្ថភាពរបស់ HTML។ ដោយប្រើប្រាស់កន្សោមកូដគំរូសាមញ្ញ Vue ចងភ្ជាប់សភាពប្រែប្រួល (State variables) ទៅកាន់ DOM ដោយស្វ័យប្រវត្តិ។

### សភាពប្រែប្រួលជាមួយ \`ref()\`
នៅក្នុង Vue 3, ភាពប្រែប្រួលត្រូវបានគ្រប់គ្រងតាមរយៈ Composition API ដោយប្រើប្រាស់ \`ref()\`។
នៅពេលតម្លៃរបស់ \`ref()\` ផ្លាស់ប្តូរ Vue នឹងធ្វើការតាមដាន និងធ្វើបច្ចុប្បន្នភាពការបង្ហាញ HTML ដោយស្វ័យប្រវត្តិ ដោយមិនបាច់សរសេរ \`document.getElementById\` ឡើយ។

> **ចំណាំ**: ត្រូវតែចូលទៅកាន់ និងកែប្រែតម្លៃរបស់ ref នៅក្នុង script តាមរយៈ \`.value\` ប៉ុន្តែមិនបាច់ប្រើ \`.value\` នៅក្នុងគំរូកូដ HTML ឡើយ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200">
    <h2 class="text-xl font-bold text-slate-900 mb-3">Reactivity Sandbox</h2>
    <div class="mb-4">
      <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Your Name</label>
      <input type="text" v-model="name" class="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
    </div>
    <p class="text-slate-700 text-sm">
      Hello, <strong class="text-emerald-600">{{ name }}</strong>! Welcome to Vue core reactivity.
    </p>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const name = ref("Student");
        return { name };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-directives",
    title: { en: "3. Vue Directives", km: "៣. Vue Directives" },
    content: {
      en: `# What are Vue Directives?
Directives are special HTML attributes prefixed with \`v-\` that tell Vue to apply a specific dynamic behavior to the DOM element.

### Common Core Directives:
* **\`v-bind\`**: Dynamically bind attributes (like \`src\`, \`href\`, \`class\`).
* **\`v-if\`**: Conditionally insert or remove DOM nodes.
* **\`v-show\`**: Toggle element visibility via CSS \`display: none\`.
* **\`v-for\`**: Loop over an array to display elements.
* **\`v-on\`** (or \`@\`): Attach event listeners to DOM elements.
* **\`v-model\`**: Establish two-way data bindings on inputs.`,
      km: `# តើអ្វីទៅជា Vue Directives?
Directives គឺជាលក្ខណៈពិសេសរបស់ HTML ដែលមានបុព្វបទ \`v-\` សម្រាប់ប្រាប់ទៅ Vue ឱ្យអនុវត្តឥរិយាបថជាក់លាក់ណាមួយនៅលើ DOM element។

### Directives ស្នូលពេញនិយម៖
* **\`v-bind\`**: ចងភ្ជាប់ attribute យ៉ាងរស់រវើក (ដូចជា \`src\`, \`href\`, \`class\`)។
* **\`v-if\`**: បង្ហាញ ឬលុបចោល DOM element ទៅតាមលក្ខខណ្ឌ។
* **\`v-show\`**: បង្ហាញ ឬលាក់ element តាមរយៈ CSS \`display: none\`។
* **\`v-for\`**: លីបវិលជុំលើ array ដើម្បីបង្ហាញធាតុនានា។
* **\`v-on\`** (ឬ \`@\`): ភ្ជាប់ប្រព័ន្ធតាមដានព្រឹត្តិការណ៍ (Event listeners)។
* **\`v-model\`**: បង្កើតការចងភ្ជាប់ទិន្នន័យពីរទិសដៅ (Two-way bindings) លើប្រអប់បញ្ចូល។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200">
    <h2 class="text-xl font-bold text-slate-900 mb-3">Directives Demonstration</h2>
    
    <div class="p-4 bg-slate-50 rounded-xl mb-4">
      <p v-if="visible" class="text-sm text-slate-700">This sentence uses <code class="bg-emerald-100 text-emerald-800 px-1 rounded">v-if</code>! It can be conditionally rendered.</p>
      <p v-else class="text-sm text-slate-400">The element was hidden!</p>
    </div>

    <button @click="visible = !visible" class="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl transition-colors">
      Toggle Visibility
    </button>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const visible = ref(true);
        return { visible };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-v-bind",
    title: { en: "4. Vue v-bind", km: "៤. Vue v-bind" },
    content: {
      en: `# Dynamic Attribute Binding with \`v-bind\`
By default, plain HTML attributes are static text. To link them to your Vue variables, prefix the attribute with \`v-bind:\` or its shorthand \`:\`.

### Syntax Comparisons:
* Full format: \`<a v-bind:href="linkURL">Website</a>\`
* Shorthand format: \`<a :href="linkURL">Website</a>\`

This works for any attribute, including \`src\`, \`id\`, \`alt\`, \`disabled\`, and inline styles.`,
      km: `# ការភ្ជាប់ Attribute យ៉ាងរស់រវើកជាមួយ \`v-bind\`
តាមធម្មតា លក្ខណៈ attribute របស់ HTML គឺជាអក្សរ جام។ ដើម្បីភ្ជាប់វាទៅនឹងអថេររបស់ Vue ត្រូវដាក់បុព្វបទ \`v-bind:\` ឬអក្សរកាត់ \`:\` ពីមុខ attribute នោះ។

### ការប្រៀបធៀប Syntax៖
* ទម្រង់ពេញលេញ: \`<a v-bind:href="linkURL">Website</a>\`
* ទម្រង់កាត់: \`<a :href="linkURL">Website</a>\`

វាដំណើរការលើគ្រប់ attribute ទាំងអស់ រួមមាន \`src\`, \`id\`, \`alt\`, \`disabled\` និងរចនាបថ styles បង្កប់ជាដើម។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200 text-center">
    <h2 class="text-xl font-bold text-slate-900 mb-4">v-bind Sandbox</h2>
    
    <div class="flex justify-center mb-4">
      <img :src="imgUrl" :alt="imgAlt" class="h-20 w-20 rounded-full border-2 border-emerald-500 shadow-sm">
    </div>

    <div class="space-y-2 mb-4">
      <button :disabled="isDisabled" class="w-full py-2.5 bg-emerald-500 disabled:bg-slate-200 disabled:text-slate-400 text-white font-medium text-sm rounded-xl transition-colors">
        Submit Form (Will disable)
      </button>
    </div>

    <button @click="isDisabled = !isDisabled" class="text-xs text-indigo-600 hover:underline">
      Toggle Button Disabled Status
    </button>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const imgUrl = ref("https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150");
        const imgAlt = ref("Profile Photo");
        const isDisabled = ref(false);
        return { imgUrl, imgAlt, isDisabled };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-v-if",
    title: { en: "5. Vue v-if", km: "៥. Vue v-if" },
    content: {
      en: `# Conditional Rendering with \`v-if\`
The \`v-if\` directive is used to render a block of code conditionally. The block is only rendered if the directive expression returns a truthy value.

### Companion Directives:
* **\`v-else-if\`**: Works like an "else if" block.
* **\`v-else\`**: Handles the fallback if all previous conditions are falsy.

> **Crucial Pitfall**: With \`v-if\`, if the expression is false, Vue completely destroys and removes the element from the DOM tree, rather than just hiding it.`,
      km: `# ការបង្ហាញកូដតាមលក្ខខណ្ឌជាមួយ \`v-if\`
Directive \`v-if\` ត្រូវបានប្រើប្រាស់ដើម្បីបង្ហាញប្លុកកូដណាមួយដោយផ្អែកលើលក្ខខណ្ឌ។ ប្លុកនោះនឹងត្រូវបានបង្ហាញ លុះត្រាតែកន្សោមលក្ខខណ្ឌត្រឡប់មកវិញនូវតម្លៃពិត (Truthy)។

### Directives ជាដៃគូ៖
* **\`v-else-if\`**: ដំណើរការដូចជាលក្ខខណ្ឌ "else if"។
* **\`v-else\`**: ដំណើរការជាជម្រើសចុងក្រោយ ប្រសិនបើលក្ខខណ្ឌមុនៗមិនពិត។

> **ចំណុចប្រុងប្រយ័ត្ន**: ជាមួយ \`v-if\` ប្រសិនបើលក្ខខណ្ឌមិនពិត Vue នឹងលុបបំបាត់ element នោះចេញពី DOM tree ទាំងស្រុង មិនមែនគ្រាន់តែលាក់វានោះឡើយ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200">
    <h2 class="text-xl font-bold text-slate-900 mb-4">Grade Calculator</h2>
    
    <div class="mb-4">
      <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Enter Score (0-100)</label>
      <input type="number" v-model.number="score" min="0" max="100" class="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm">
    </div>

    <div class="p-4 rounded-xl text-center font-bold text-sm">
      <span v-if="score >= 90" class="text-emerald-600">Grade: Excellent (A) 🌟</span>
      <span v-else-if="score >= 70" class="text-indigo-600">Grade: Good (B/C) 👍</span>
      <span v-else-if="score >= 50" class="text-amber-600">Grade: Average (D) ✏️</span>
      <span v-else class="text-rose-600">Grade: Needs Improvement (F) ❌</span>
    </div>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const score = ref(85);
        return { score };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-v-show",
    title: { en: "6. Vue v-show", km: "៦. Vue v-show" },
    content: {
      en: `# Fast Visibility Toggling with \`v-show\`
Like \`v-if\`, \`v-show\` toggles elements conditionally. However, the element is **always** compiled and kept in the DOM tree.

### Under the Hood:
Vue simply applies the inline CSS style \`display: none\` when \`v-show\` evaluates to false.

### \`v-if\` vs \`v-show\` Performance Tradeoffs:
* **\`v-if\`**: High initial render performance, but expensive toggling costs (fully recreates DOM elements). Use for rare/static toggles.
* **\`v-show\`**: Lower initial render performance, but extremely fast toggling speeds. Use for elements that toggle frequently (tabs, modals, alerts).`,
      km: `# ការប្តូរបង្ហាញលឿនជាមួយ \`v-show\`
ស្រដៀងគ្នានឹង \`v-if\` ដែរ \`v-show\` ធ្វើការបង្ហាញ ឬលាក់ element ទៅតាមលក្ខខណ្ឌ។ ទោះជាយ៉ាងណាក៏ដោយ element នោះគឺ **តែងតែ** ស្ថិតនៅក្នុង DOM tree ជានិច្ច។

### យន្តការនៅពីក្រោយ៖
Vue គ្រាន់តែបន្ថែមរចនាបថ CSS \`display: none\` នៅលើ element នោះនៅពេលតម្លៃ \`v-show\` មិនពិត។

### ការប្រៀបធៀបប្រសិទ្ធភាព \`v-if\` vs \`v-show\`៖
* **\`v-if\`**: ល្បឿនផ្ទុកដំបូងលឿន ប៉ុន្តែស៊ីកម្លាំងម៉ាស៊ីនពេលប្តូរបង្ហាញញឹកញាប់ (ព្រោះត្រូវបង្កើត DOM សារជាថ្មី)។ ល្អសម្រាប់លក្ខខណ្ឌ جام។
* **\`v-show\`**: ស៊ីកម្លាំងផ្ទុកដំបូងបន្តិច ប៉ុន្តែប្តូរបង្ហាញលឿនបំផុត។ ល្អសម្រាប់ element ដែលត្រូវប្តូរបង្ហាញញឹកញាប់ (Tabs, Modals, Alerts)។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200">
    <h2 class="text-xl font-bold text-slate-900 mb-4">v-show Toggle Box</h2>
    
    <button @click="isOpen = !isOpen" class="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl transition-colors mb-4">
      {{ isOpen ? 'Hide Panel' : 'Show Panel' }}
    </button>

    <div v-show="isOpen" class="p-4 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-sm leading-relaxed">
      <strong>Pro Tip:</strong> Open your browser devtools to inspect this element. You will notice that when hidden, it stays in the DOM but has <code>style="display: none;"</code>!
    </div>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const isOpen = ref(true);
        return { isOpen };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-v-for",
    title: { en: "7. Vue v-for", km: "៧. Vue v-for" },
    content: {
      en: `# Render Lists with \`v-for\`
The \`v-for\` directive allows you to render lists of elements by looping over an array or an object.

### Syntax Structure:
\`v-for="(item, index) in array" :key="item.id"\`

### The Critical \`:key\` Requirement:
Always bind a unique \`:key\` attribute to every listed element. This helps Vue track component identity across DOM updates, ensuring maximum rendering performance and avoiding input focus bugs.`,
      km: `# បង្ហាញបញ្ជីបញ្ជ្រាស់គ្នាជាមួយ \`v-for\`
Directive \`v-for\` អនុញ្ញាតឱ្យអ្នកបង្កើតបញ្ជីដោយរត់ជុំ (Loop) លើ array ឬ object។

### ទម្រង់ Syntax៖
\`v-for="(item, index) in array" :key="item.id"\`

### លក្ខខណ្ឌតម្រូវដ៏សំខាន់ \`:key\`៖
ត្រូវភ្ជាប់ attribute \`:key\` ដែលមានតម្លៃឯកវចនៈ (Unique) ទៅកាន់ element ជានិច្ច។ វាជួយឱ្យ Vue ស្គាល់អត្តសញ្ញាណរបស់ Component ពេលធ្វើបច្ចុប្បន្នភាព DOM ធានាបាននូវប្រសិទ្ធភាពខ្ពស់ និងជៀសវាងបញ្ហាល្អៀងផ្សេងៗ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200">
    <h2 class="text-xl font-bold text-slate-900 mb-4">Framework Check-list</h2>
    
    <div class="space-y-2 mb-4">
      <div v-for="(item, index) in frameworks" :key="item.id" class="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200/60 transition-colors">
        <span class="text-sm text-slate-800">
          {{ index + 1 }}. <strong>{{ item.name }}</strong>
        </span>
        <span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-100 text-emerald-800">
          {{ item.difficulty }}
        </span>
      </div>
    </div>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const frameworks = ref([
          { id: "v1", name: "Vue.js", difficulty: "Easy" },
          { id: "r1", name: "React.js", difficulty: "Medium" },
          { id: "a1", name: "Angular", difficulty: "Hard" }
        ]);
        return { frameworks };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-events",
    title: { en: "8. Vue Events", km: "៨. ព្រឹត្តិការណ៍ក្នុង Vue" },
    content: {
      en: `# Handling DOM Events
Making webpages interactive requires listening to and responding to events like clicks, input entries, or mouse hovers.

In Vue, you can write inline logic directly inside template events:
\`<button v-on:click="count++">Increment</button>\`

Inline statements are fantastic for super simple states, but anything more complex should be moved into JavaScript methods.`,
      km: `# ការគ្រប់គ្រងព្រឹត្តិការណ៍ DOM
ដើម្បីធ្វើឱ្យគេហទំព័រមានអន្តរកម្ម យើងត្រូវការតាមដាន និងឆ្លើយតបទៅនឹងព្រឹត្តិការណ៍នានា ដូចជាការចុចម៉ៅស៍ ការបញ្ចូលព័ត៌មាន ឬការអូសម៉ៅស៍ពីលើជាដើម។

នៅក្នុង Vue អ្នកអាចសរសេរកូដឡូហ្សិកខ្លីៗនៅទីនោះផ្ទាល់៖
\`<button v-on:click="count++">Increment</button>\`

កន្សោមកូដខ្លីៗល្អសម្រាប់សភាពសាមញ្ញ ប៉ុន្តែរាល់កូដស្មុគស្មាញគួរតែត្រូវបានផ្លាស់ទីទៅក្នុង JavaScript methods វិញ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200 text-center">
    <h2 class="text-xl font-bold text-slate-900 mb-4">Inline Events</h2>
    
    <div class="text-4xl font-extrabold text-indigo-600 mb-4">
      {{ clicks }}
    </div>

    <button v-on:click="clicks = clicks + 1" class="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-md">
      Increment clicks
    </button>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const clicks = ref(0);
        return { clicks };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-v-on",
    title: { en: "9. Vue v-on", km: "៩. Vue v-on" },
    content: {
      en: `# Event Bindings: Shorthand \`@\`
The \`v-on\` directive is used so frequently that Vue provides an elegant shorthand: the \`@\` symbol.

### Comparison:
* Long form: \`<button v-on:click="run">Click</button>\`
* Shorthand form: \`<button @click="run">Click</button>\`

This shorthand applies to all Javascript DOM events (e.g., \`@submit\`, \`@keyup\`, \`@change\`, \`@mouseover\`).`,
      km: `# Shorthand សម្រាប់ព្រឹត្តិការណ៍៖ \`@\`
Directive \`v-on\` ត្រូវបានប្រើប្រាស់ញឹកញាប់រហូតដល់ថ្នាក់ Vue ផ្តល់នូវនិមិត្តសញ្ញាកាត់យ៉ាងខ្លី គឺ \`@\`។

### ការប្រៀបធៀប៖
* ទម្រង់ពេញលេញ: \`<button v-on:click="run">Click</button>\`
* ទម្រង់កាត់: \`<button @click="run">Click</button>\`

ការសរសេរកាត់នេះប្រើប្រាស់បានលើគ្រប់ប្រភេទព្រឹត្តិការណ៍ JavaScript DOM ទាំងអស់ (ឧទាហរណ៍ \`@submit\`, \`@keyup\`, \`@change\`, \`@mouseover\`)។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200 text-center">
    <h2 class="text-xl font-bold text-slate-900 mb-4">v-on Shorthand</h2>
    
    <div class="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl mb-4 text-xs text-slate-500 font-mono"
         @mouseover="status = 'Inside! Mouse Detected'"
         @mouseleave="status = 'Outside. Waiting...'">
      {{ status }}
    </div>

    <p class="text-xs text-slate-400">Hover inside the box to trigger mouseover and mouseleave event listeners.</p>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const status = ref("Outside. Waiting...");
        return { status };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-methods",
    title: { en: "10. Vue Methods", km: "១០. Vue Methods" },
    content: {
      en: `# Executing Methods
To write proper clean code, keep template markup separate from logic. Bind event listeners to methods declared inside your setup script.

### Accessing reactive variables:
Remember that ref variables are objects, so you must use **\`.value\`** when editing or accessing them inside your JavaScript code.`,
      km: `# ការដំណើរការកូដមុខងារ Methods
ដើម្បីសរសេរកូដបានស្អាត និងមានរបៀបរៀបរយ ត្រូវរក្សាកូដប្លង់គំរូ និងកូដដំណើរការឱ្យដាច់ពីគ្នា។ ភ្ជាប់ព្រឹត្តិការណ៍ទៅកាន់កូដមុខងារ Methods ដែលបានប្រកាសក្នុងស្គ្រីប setup។

### ការហៅប្រើប្រាស់ Ref Variables៖
សូមចងចាំថាអថេរ ref គឺជាវត្ថុ Object ដូចនេះអ្នកត្រូវតែប្រើ **\`.value\`** នៅពេលកែប្រែ ឬហៅវាប្រើប្រាស់នៅក្នុង JavaScript។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200 text-center">
    <h2 class="text-xl font-bold text-slate-900 mb-4">Method Invocation</h2>
    
    <div class="text-lg font-bold text-slate-700 mb-4">
      Score: <span class="text-emerald-600">{{ points }} points</span>
    </div>

    <div class="flex gap-2">
      <button @click="addPoint(1)" class="flex-1 py-2 bg-emerald-500 text-white rounded-xl text-sm font-semibold">
        Add 1 Point
      </button>
      <button @click="addPoint(5)" class="flex-1 py-2 bg-indigo-500 text-white rounded-xl text-sm font-semibold">
        Add 5 Points
      </button>
    </div>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const points = ref(10);

        function addPoint(amount) {
          // Editing ref variable via .value
          points.value += amount;
        }

        return { points, addPoint };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-event-modifiers",
    title: { en: "11. Vue Event Modifiers", km: "១១. Event Modifiers" },
    content: {
      en: `# Handling Event Modifiers
Common event operations like calling \`event.preventDefault()\` or \`event.stopPropagation()\` are so frequent that Vue provides modifiers directly inside event declarations.

### Common Modifiers:
* **\`.prevent\`**: Prevents the browser's default behavior (like form refresh).
* **\`.stop\`**: Stops the event propagation (bubbling).
* **\`.once\`**: Triggers the event at most once.
* **\`.enter\`**: Runs the listener only when the "Enter" key is pressed.`,
      km: `# ការប្រើប្រាស់ Event Modifiers
កិច្ចការទូទៅរបស់ព្រឹត្តិការណ៍ដូចជាការហៅប្រើប្រាស់ \`event.preventDefault()\` ឬ \`event.stopPropagation()\` ត្រូវបានជួបប្រទះញឹកញាប់រហូតដល់ Vue ផ្តល់ជា Modifiers ផ្ទាល់នៅក្នុងការប្រកាសព្រឹត្តិការណ៍តែម្តង។

### Modifiers ពេញនិយម៖
* **\`.prevent\`**: បញ្ឈប់ឥរិយាបថដើមរបស់កម្មវិធីរុករក (ដូចជា Form refresh)។
* **\`.stop\`**: បញ្ឈប់ការរីករាលដាលព្រឹត្តិការណ៍ (Bubbling)។
* **\`.once\`**: ដំណើរការព្រឹត្តិការណ៍នេះត្រឹមតែម្តងគត់។
* **\`.enter\`**: ដំណើរការព្រឹត្តិការណ៍នៅពេលចុចគ្រាប់ចុច "Enter"។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200">
    <h2 class="text-xl font-bold text-slate-900 mb-4">Event Modifiers</h2>
    
    <!-- Prevents actual submission and page refresh -->
    <form @submit.prevent="handleSubmit" class="space-y-3">
      <div>
        <label class="block text-xs font-bold text-slate-400 mb-1">Add Task & Press Enter</label>
        <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Type here..." class="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm">
      </div>
      
      <button type="submit" class="w-full py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold">Submit Form</button>
    </form>

    <div v-if="logs.length" class="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
      <div v-for="log in logs" class="text-xs text-slate-600 font-mono">{{ log }}</div>
    </div>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const newTask = ref("");
        const logs = ref([]);

        const addTask = () => {
          if (newTask.value.trim()) {
            logs.value.push("Task Added: " + newTask.value);
            newTask.value = "";
          }
        };

        const handleSubmit = () => {
          logs.value.push("Form submission prevented!");
        };

        return { newTask, logs, addTask, handleSubmit };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-forms",
    title: { en: "12. Vue Forms", km: "១២. ទម្រង់បែបបទ Forms" },
    content: {
      en: `# Form Bindings
Forms are the core vehicle for gathering user input. Vue streamlines state management on forms by mapping variables seamlessly.

With plain Javascript, you must manual hook \`onchange\` triggers and extract value properties. Vue automates this complete architecture.`,
      km: `# ការចងភ្ជាប់ទម្រង់បែបបទ Forms
Forms គឺជាយានដ៏ចម្បងសម្រាប់ប្រមូលព័ត៌មានពីអ្នកប្រើប្រាស់។ Vue ជួយសម្រួលការគ្រប់គ្រងព័ត៌មានទាំងនេះដោយភ្ជាប់អថេរដោយស្វ័យប្រវត្តិ។

ជាមួយ Javascript ធម្មតា អ្នកត្រូវតាមដាន \`onchange\` និងទាញយកតម្លៃដោយដៃ ប៉ុន្តែ Vue ធ្វើការងារទាំងនេះជំនួសអ្នកយ៉ាងល្អឥតខ្ចោះ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200">
    <h2 class="text-xl font-bold text-slate-900 mb-4">Vue Forms</h2>
    
    <div class="space-y-3 text-sm text-slate-700">
      <p>Fill out the forms to witness real-time bindings on the next page!</p>
    </div>
  </div>

  <script>
    const { createApp } = Vue;
    createApp({}).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-v-model",
    title: { en: "13. Vue v-model", km: "១៣. Vue v-model" },
    content: {
      en: `# Two-way Binding with \`v-model\`
The \`v-model\` directive establishes a **two-way data binding** on a form input, textarea, or select element.

### Two-way Binding?
1. If the user types in the input, the Javascript variable updates.
2. If the JavaScript variable is updated programmatically, the input value updates automatically.

### Modifiers:
* **\`.lazy\`**: Listen for \`change\` events instead of \`input\` (updates on blur).
* **\`.number\`**: Automatically cast user inputs to JavaScript numbers.
* **\`.trim\`**: Automatically strip trailing and leading whitespaces.`,
      km: `# ការចងភ្ជាប់ពីរទិសដៅជាមួយ \`v-model\`
Directive \`v-model\` បង្កើត **ការចងភ្ជាប់ទិន្នន័យពីរទិសដៅ (Two-way data binding)** លើប្រអប់បញ្ចូល, Textarea, ឬ Select elements។

### តើការចងភ្ជាប់ពីរទិសដៅគឺជាអ្វី?
1. ប្រសិនបើអ្នកប្រើប្រាស់សរសេរអ្វីមួយ អថេរ JavaScript នឹងទទួលបានតម្លៃនោះភ្លាម។
2. ប្រសិនបើអថេរ JavaScript ត្រូវបានកែប្រែក្នុងកូដ នោះប្រអប់សរសេរក៏នឹងផ្លាស់ប្តូរតាមដោយស្វ័យប្រវត្តិ។

### Modifiers រួមមាន៖
* **\`.lazy\`**: រង់ចាំព្រឹត្តិការណ៍ \`change\` ជំនួសឱ្យ \`input\` (ធ្វើបច្ចុប្បន្នភាពនៅពេលដកការចុចចេញ)។
* **\`.number\`**: បំប្លែងតម្លៃទៅជាលេខ JavaScript ដោយស្វ័យប្រវត្តិ។
* **\`.trim\`**: លុបគម្លាតទំនេរដំបូង និងចុងក្រោយដោយស្វ័យប្រវត្តិ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200">
    <h2 class="text-xl font-bold text-slate-900 mb-4">v-model Explorer</h2>
    
    <div class="space-y-4">
      <div>
        <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Feedback (.trim.lazy)</label>
        <input type="text" v-model.trim.lazy="feedback" placeholder="Type and click away" class="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm">
      </div>

      <div>
        <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Favorite Color</label>
        <select v-model="favColor" class="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm">
          <option value="emerald">Emerald Green</option>
          <option value="indigo">Indigo Blue</option>
          <option value="rose">Rose Red</option>
        </select>
      </div>
    </div>

    <div class="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
      <div><strong>Current Feedback:</strong> "{{ feedback }}"</div>
      <div><strong>Current Color Variable:</strong> {{ favColor }}</div>
    </div>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const feedback = ref("");
        const favColor = ref("emerald");
        return { feedback, favColor };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-css-binding",
    title: { en: "14. Vue CSS Binding", km: "១៤. ការចងភ្ជាប់ថ្នាក់រចនា CSS" },
    content: {
      en: `# Dynamic Styling and CSS Classes
Vue makes binding CSS classes and inline styles incredibly elegant by allowing you to pass **objects** or **arrays** into \`:class\` or \`:style\`.

### Binding Objects to \`:class\`:
\`:class="{ 'bg-emerald-500 text-white': isActive, 'bg-slate-100': !isActive }"\`

In this pattern, the keys are CSS class names, and the values are boolean conditions that toggle those classes.`,
      km: `# ការចងភ្ជាប់រចនាបថ និងថ្នាក់រចនា CSS
Vue ជួយសម្រួលការចងភ្ជាប់ថ្នាក់រចនា CSS យ៉ាងរស់រវើកដោយអនុញ្ញាតឱ្យយើងបញ្ជូន **Objects** ឬ **Arrays** ចូលទៅក្នុង \`:class\` ឬ \`:style\`។

### របៀបចងភ្ជាប់ Objects ទៅកាន់ \`:class\`៖
\`:class="{ 'bg-emerald-500 text-white': isActive, 'bg-slate-100': !isActive }"\`

តាមរបៀបនេះ Key គឺជាឈ្មោះថ្នាក់រចនា CSS និង Value គឺជាលក្ខខណ្ឌពិត/មិនពិតសម្រាប់បញ្ជាបើកបិទវា។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200 text-center">
    <h2 class="text-xl font-bold text-slate-900 mb-4">Class Binding</h2>
    
    <!-- Dynamic class object binding -->
    <div class="h-24 w-24 mx-auto rounded-3xl mb-6 transition-all duration-300"
         :class="{ 'bg-emerald-500 rotate-12 scale-110 shadow-lg shadow-emerald-500/20': isToggled, 'bg-slate-200': !isToggled }">
    </div>

    <button @click="isToggled = !isToggled" class="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase rounded-xl tracking-wider">
      Toggle States
    </button>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const isToggled = ref(false);
        return { isToggled };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-computed-properties",
    title: { en: "15. Vue Computed Properties", km: "១៥. Computed Properties" },
    content: {
      en: `# High-Performance Computed Properties
Computed properties inside Vue are calculated values that are **automatically cached** based on their reactive dependencies.

### Why not just use methods?
If a value is used multiple times in a template:
* **Methods**: Run their inner logic **every single time** the component re-renders.
* **Computed**: Only run **once** when their dependent variable changes, returning the cached outcome for subsequent renders.`,
      km: `# Computed Properties ខ្ពស់ដោយប្រសិទ្ធភាព
Computed Properties គឺជាតម្លៃដែលត្រូវបានគណនាដោយ **ចងចាំទិន្នន័យ (Cached)** យ៉ាងវៃឆ្លាត ផ្អែកលើអថេរប្រែប្រួលដែលជាធាតុចូល។

### ហេតុអ្វីមិនប្រើ Methods ធម្មតា?
ប្រសិនបើតម្លៃមួយត្រូវបង្ហាញច្រើនដងក្នុងទំព័រ៖
* **Methods**: នឹងដំណើរការឡូហ្សិកឡើងវិញ **រាល់ពេល** Component ធ្វើការបង្ហាញឡើងវិញ។
* **Computed**: ដំណើរការតែ **ម្តងគត់** នៅពេលអថេរពាក់ព័ន្ធផ្លាស់ប្តូរ ហើយរក្សាទុកលទ្ធផលចងចាំសម្រាប់បង្ហាញលើកក្រោយៗ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200">
    <h2 class="text-xl font-bold text-slate-900 mb-4">Cart Calculator</h2>
    
    <div class="space-y-2 mb-4">
      <div class="flex justify-between text-sm">
        <span>Product price:</span>
        <span class="font-bold">$120</span>
      </div>
      <div class="flex items-center justify-between text-sm">
        <span>Quantity:</span>
        <div class="flex gap-2">
          <button @click="qty = Math.max(1, qty - 1)" class="w-8 h-8 bg-slate-100 rounded-lg font-bold">-</button>
          <span class="w-8 h-8 flex justify-center items-center font-bold">{{ qty }}</span>
          <button @click="qty++" class="w-8 h-8 bg-slate-100 rounded-lg font-bold">+</button>
        </div>
      </div>
    </div>

    <div class="pt-4 border-t border-slate-200 flex justify-between font-bold text-sm">
      <span>Subtotal (Computed):</span>
      <span class="text-emerald-600">\${{ subtotal }}</span>
    </div>
  </div>

  <script>
    const { createApp, ref, computed } = Vue;
    createApp({
      setup() {
        const qty = ref(1);
        const subtotal = computed(() => {
          return qty.value * 120;
        });
        return { qty, subtotal };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-watchers",
    title: { en: "16. Vue Watchers", km: "១៦. មុខងារតាមដាន Watchers" },
    content: {
      en: `# Reaction Management with Watchers
While computed properties are for calculating synchronous values, **Watchers** are perfect for side-effects triggered by variable updates.

Use watchers when a variable update requires:
1. Fetching new data from a remote database.
2. Saving local state changes to \`localStorage\`.
3. Writing complex analytical logs.`,
      km: `# ការចាត់ចែងផលប៉ះពាល់ជាមួយ Watchers
ខណៈពេលដែល Computed properties ល្អសម្រាប់គណនាតម្លៃស្របគ្នា **Watchers** ល្អបំផុតសម្រាប់គ្រប់គ្រងផលប៉ះពាល់ចំហៀង (Side-effects) ដែលកើតឡើងដោយសារអថេរផ្លាស់ប្តូរ។

ប្រើប្រាស់ watchers នៅពេលអថេរផ្លាស់ប្តូរហើយទាមទារ៖
1. ទាញយកទិន្នន័យថ្មីពី Database មកក្រៅ។
2. រក្សាទុកព័ត៌មានទៅកាន់ \`localStorage\`។
3. សរសេររបាយការណ៍វិភាគផ្សេងៗ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200 text-center">
    <h2 class="text-xl font-bold text-slate-900 mb-4">Counter Saver</h2>
    
    <div class="text-3xl font-extrabold text-slate-800 mb-4">{{ count }}</div>
    <button @click="count++" class="px-5 py-2.5 bg-emerald-500 text-white rounded-xl text-sm font-semibold mb-4">Increment Count</button>
    
    <div class="text-xs text-slate-500 font-mono italic">{{ log }}</div>
  </div>

  <script>
    const { createApp, ref, watch } = Vue;
    createApp({
      setup() {
        const count = ref(0);
        const log = ref("No logs recorded yet.");

        watch(count, (newVal, oldVal) => {
          log.value = \`Value modified from \${oldVal} to \${newVal}. Watcher triggered successfully!\`;
        });

        return { count, log };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  },
  {
    id: "vue-templates",
    title: { en: "17. Vue Templates", km: "១៧. Vue Templates" },
    content: {
      en: `# Mastering Template Expressions
Vue template syntax uses double curly braces \`{{ }}\` (known as the "Mustache" syntax) for raw text interpolations.

### Supported Expressions:
Vue templates support fully featured JavaScript expressions inside Mustache brackets:
* Arithmetic: \`{{ price * taxRate }}\`
* Conditional Ternary: \`{{ count > 0 ? 'Active' : 'Empty' }}\`
* Array manipulations: \`{{ names.join(', ') }}\`

> **Note**: Avoid declaring variables or calling heavy operations inside curly braces. Keep them light!`,
      km: `# ស្ទាត់ជំនាញលើកន្សោមកូដគំរូ
គំរូកូដរបស់ Vue ប្រើប្រាស់សញ្ញាគ្នាបើកបិទពីរជាន់ \`{{ }}\` (ដែលគេស្គាល់ថាជា "Mustache" syntax) សម្រាប់ការបង្ហាញអក្សរយ៉ាងរស់រវើក។

### កន្សោមកូដដែលអាចប្រើប្រាស់បាន៖
អ្នកអាចសរសេរកន្សោម JavaScript ពេញលេញនៅចន្លោះគ្នានេះបាន៖
* គណិតវិទ្យា: \`{{ price * taxRate }}\`
* Ternary លក្ខខណ្ឌ: \`{{ count > 0 ? 'Active' : 'Empty' }}\`
* ការគ្រប់គ្រង Array: \`{{ names.join(', ') }}\`

> **ចំណាំ**: ជៀសវាងការប្រកាសអថេរ ឬហៅមុខងារធ្ងន់ៗក្នុងសញ្ញានេះ។ រក្សាវានូវកន្សោមស្រាលៗ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-6 flex justify-center items-center min-h-screen">
  <div id="app" class="max-w-md w-full bg-white rounded-2xl p-6 border border-slate-200">
    <h2 class="text-xl font-bold text-slate-900 mb-4">Template Evaluator</h2>
    
    <div class="space-y-2 text-sm text-slate-700">
      <div><strong>Reversed Message:</strong> {{ message.split('').reverse().join('') }}</div>
      <div><strong>Math Calculation:</strong> 5 x 100 = {{ 5 * 100 }}</div>
      <div><strong>Ternary Check:</strong> {{ loggedIn ? "Authenticated ✅" : "Anonymous Guest 🔒" }}</div>
    </div>
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const message = ref("ODYSSEY");
        const loggedIn = ref(true);
        return { message, loggedIn };
      }
    }).mount('#app');
  </script>
</body>
</html>`
  }
];
