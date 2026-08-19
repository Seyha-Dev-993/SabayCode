import { Topic, Lesson } from '../types';

export interface TailwindPage {
  id: string;
  title: { en: string; km: string };
  group: string;
  archetype: 'concept' | 'config' | 'utility' | 'resources';
}

export const tailwindPages: TailwindPage[] = [
  // --- Core Concepts ---
  { id: "tw-home", title: { en: "Tailwind CSS - Home", km: "ទំព័រដើម Tailwind CSS" }, group: "Core Concepts", archetype: "concept" },
  { id: "tw-roadmap", title: { en: "Tailwind CSS - Roadmap", km: "ផែនទីសិក្សា Tailwind CSS" }, group: "Core Concepts", archetype: "concept" },
  { id: "tw-intro", title: { en: "Tailwind CSS - Introduction", km: "សេចក្តីផ្តើម Tailwind CSS" }, group: "Core Concepts", archetype: "concept" },
  { id: "tw-install", title: { en: "Tailwind CSS - Installation", km: "ការដំឡើង Tailwind CSS" }, group: "Core Concepts", archetype: "concept" },
  { id: "tw-editor", title: { en: "Tailwind CSS - Editor Setup", km: "ការរៀបចំកម្មវិធីសរសេរកូដ" }, group: "Core Concepts", archetype: "concept" },
  { id: "tw-fundamentals", title: { en: "Tailwind CSS - Utility-First Fundamentals", km: "មូលដ្ឋានគ្រឹះ Utility-First" }, group: "Core Concepts", archetype: "concept" },
  { id: "tw-states", title: { en: "Tailwind CSS - Hover, Focus, and Other States", km: "ស្ថានភាព Hover, Focus និងផ្សេងៗ" }, group: "Core Concepts", archetype: "concept" },
  { id: "tw-responsive", title: { en: "Tailwind CSS - Responsive Design", km: "ការរចនាបែប Responsive" }, group: "Core Concepts", archetype: "concept" },
  { id: "tw-dark", title: { en: "Tailwind CSS - Dark Mode", km: "មុខងារ Dark Mode" }, group: "Core Concepts", archetype: "concept" },
  { id: "tw-reusing", title: { en: "Tailwind CSS - Reusing Styles", km: "ការប្រើប្រាស់ Style ឡើងវិញ" }, group: "Core Concepts", archetype: "concept" },
  { id: "tw-custom", title: { en: "Tailwind CSS - Adding Custom Styles", km: "ការបន្ថែម Custom Styles ផ្ទាល់ខ្លួន" }, group: "Core Concepts", archetype: "concept" },
  { id: "tw-functions", title: { en: "Tailwind CSS - Functions & Directives", km: "Functions និង Directives របស់ Tailwind" }, group: "Core Concepts", archetype: "concept" },

  // --- Customization ---
  { id: "tw-config", title: { en: "Tailwind CSS - Configuration", km: "ការកំណត់ Configuration" }, group: "Customization", archetype: "config" },
  { id: "tw-content", title: { en: "Tailwind CSS - Content Configuration", km: "ការកំណត់ Content" }, group: "Customization", archetype: "config" },
  { id: "tw-theme", title: { en: "Tailwind CSS - Theme Configuration", km: "ការកំណត់ Theme" }, group: "Customization", archetype: "config" },
  { id: "tw-screens", title: { en: "Tailwind CSS - Customizing Screens", km: "ការកំណត់ Screens ផ្ទាល់ខ្លួន" }, group: "Customization", archetype: "config" },
  { id: "tw-colors", title: { en: "Tailwind CSS - Customizing Colors", km: "ការកំណត់ពណ៌ផ្ទាល់ខ្លួន" }, group: "Customization", archetype: "config" },
  { id: "tw-spacing-config", title: { en: "Tailwind CSS - Customizing Spacing", km: "ការកំណត់គម្លាតផ្ទាល់ខ្លួន" }, group: "Customization", archetype: "config" },
  { id: "tw-plugins", title: { en: "Tailwind CSS - Plugins", km: "ការប្រើប្រាស់ Plugins" }, group: "Customization", archetype: "config" },
  { id: "tw-presets", title: { en: "Tailwind CSS - Presets", km: "ការប្រើប្រាស់ Presets" }, group: "Customization", archetype: "config" },

  // --- Base Styles ---
  { id: "tw-preflight", title: { en: "Tailwind CSS - Preflight", km: "Preflight របស់ Tailwind" }, group: "Base Styles", archetype: "utility" },

  // --- Layout ---
  { id: "tw-aspect-ratio", title: { en: "Tailwind CSS - Aspect Ratio", km: "សមាមាត្រ Aspect Ratio" }, group: "Layout", archetype: "utility" },
  { id: "tw-container", title: { en: "Tailwind CSS - Container", km: "ប្រអប់ Container" }, group: "Layout", archetype: "utility" },
  { id: "tw-columns", title: { en: "Tailwind CSS - Columns", km: "ជួរឈរ Columns" }, group: "Layout", archetype: "utility" },
  { id: "tw-break-after", title: { en: "Tailwind CSS - Break After", km: "ការកាត់ទំព័រ Break After" }, group: "Layout", archetype: "utility" },
  { id: "tw-break-before", title: { en: "Tailwind CSS - Break Before", km: "ការកាត់ទំព័រ Break Before" }, group: "Layout", archetype: "utility" },
  { id: "tw-break-inside", title: { en: "Tailwind CSS - Break Inside", km: "ការកាត់ទំព័រ Break Inside" }, group: "Layout", archetype: "utility" },
  { id: "tw-box-decoration-break", title: { en: "Tailwind CSS - Box Decoration Break", km: "ការកាត់បំណែក Box Decoration" }, group: "Layout", archetype: "utility" },
  { id: "tw-box-sizing", title: { en: "Tailwind CSS - Box Sizing", km: "ទំហំប្រអប់ Box Sizing" }, group: "Layout", archetype: "utility" },
  { id: "tw-display", title: { en: "Tailwind CSS - Display", km: "លក្ខណៈបង្ហាញ Display" }, group: "Layout", archetype: "utility" },
  { id: "tw-floats", title: { en: "Tailwind CSS - Floats", km: "ការបណ្តែត Floats" }, group: "Layout", archetype: "utility" },
  { id: "tw-clear", title: { en: "Tailwind CSS - Clear", km: "ការលុបការបណ្តែត Clear" }, group: "Layout", archetype: "utility" },
  { id: "tw-isolation", title: { en: "Tailwind CSS - Isolation", km: "ការបំបែកស្រទាប់ Isolation" }, group: "Layout", archetype: "utility" },
  { id: "tw-object-fit", title: { en: "Tailwind CSS - Object Fit", km: "លក្ខណៈរូបភាព Object Fit" }, group: "Layout", archetype: "utility" },
  { id: "tw-object-position", title: { en: "Tailwind CSS - Object Position", km: "ទីតាំងរូបភាព Object Position" }, group: "Layout", archetype: "utility" },
  { id: "tw-overflow", title: { en: "Tailwind CSS - Overflow", km: "ទិន្នន័យហៀរ Overflow" }, group: "Layout", archetype: "utility" },
  { id: "tw-overscroll", title: { en: "Tailwind CSS - Overscroll Behavior", km: "សកម្មភាព Overscroll" }, group: "Layout", archetype: "utility" },
  { id: "tw-position", title: { en: "Tailwind CSS - Position", km: "ការកំណត់ទីតាំង Position" }, group: "Layout", archetype: "utility" },
  { id: "tw-trbl", title: { en: "Tailwind CSS - Top / Right / Bottom / Left", km: "ទិសដៅ Top / Right / Bottom / Left" }, group: "Layout", archetype: "utility" },
  { id: "tw-visibility", title: { en: "Tailwind CSS - Visibility", km: "លក្ខណៈមើលឃើញ Visibility" }, group: "Layout", archetype: "utility" },
  { id: "tw-z-index", title: { en: "Tailwind CSS - Z-Index", km: "ស្រទាប់ Z-Index" }, group: "Layout", archetype: "utility" },

  // --- Flexbox & Grid ---
  { id: "tw-flex-basis", title: { en: "Tailwind CSS - Flex Basis", km: "ទំហំដំបូង Flex Basis" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-flex-direction", title: { en: "Tailwind CSS - Flex Direction", km: "ទិសដៅ Flex Direction" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-flex-wrap", title: { en: "Tailwind CSS - Flex Wrap", km: "ការបត់ជួរ Flex Wrap" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-flex", title: { en: "Tailwind CSS - Flex", km: "លក្ខណៈចរន្ត Flex" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-flex-grow", title: { en: "Tailwind CSS - Flex Grow", km: "ការលូតលាស់ Flex Grow" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-flex-shrink", title: { en: "Tailwind CSS - Flex Shrink", km: "ការរួញទំហំ Flex Shrink" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-order", title: { en: "Tailwind CSS - Order", km: "លំដាប់លំដោយ Order" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-grid-cols", title: { en: "Tailwind CSS - Grid Template Columns", km: "ជួរឈរ Grid Template Columns" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-grid-col-start-end", title: { en: "Tailwind CSS - Grid Column Start / End", km: "ទីតាំងចាប់ផ្តើម/បញ្ចប់ជួរឈរ" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-grid-rows", title: { en: "Tailwind CSS - Grid Template Rows", km: "ជួរដេក Grid Template Rows" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-grid-row-start-end", title: { en: "Tailwind CSS - Grid Row Start / End", km: "ទីតាំងចាប់ផ្តើម/បញ្ចប់ជួរដេក" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-grid-auto-flow", title: { en: "Tailwind CSS - Grid Auto Flow", km: "លំហូរស្វ័យប្រវត្តិ Grid Auto Flow" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-grid-auto-cols", title: { en: "Tailwind CSS - Grid Auto Columns", km: "ជួរឈរស្វ័យប្រវត្តិ Grid Auto Columns" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-grid-auto-rows", title: { en: "Tailwind CSS - Grid Auto Rows", km: "ជួរដេកស្វ័យប្រវត្តិ Grid Auto Rows" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-gap", title: { en: "Tailwind CSS - Gap", km: "ចន្លោះគម្លាត Gap" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-justify-content", title: { en: "Tailwind CSS - Justify Content", km: "ការតម្រឹមផ្ដេក Justify Content" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-justify-items", title: { en: "Tailwind CSS - Justify Items", km: "ការតម្រឹមធាតុស្វ័យប្រវត្តិ Justify Items" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-justify-self", title: { en: "Tailwind CSS - Justify Self", km: "ការតម្រឹមធាតុផ្ទាល់ខ្លួន Justify Self" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-align-content", title: { en: "Tailwind CSS - Align Content", km: "ការតម្រឹមបញ្ឈរ Align Content" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-align-items", title: { en: "Tailwind CSS - Align Items", km: "ការតម្រឹមធាតុបញ្ឈរ Align Items" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-align-self", title: { en: "Tailwind CSS - Align Self", km: "ការតម្រឹមធាតុបញ្ឈរផ្ទាល់ខ្លួន Align Self" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-place-content", title: { en: "Tailwind CSS - Place Content", km: "ទីតាំងរួមបញ្ចូលគ្នា Place Content" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-place-items", title: { en: "Tailwind CSS - Place Items", km: "ទីតាំងធាតុរួមបញ្ចូលគ្នា Place Items" }, group: "Flexbox & Grid", archetype: "utility" },
  { id: "tw-place-self", title: { en: "Tailwind CSS - Place Self", km: "ទីតាំងធាតុផ្ទាល់ខ្លួន Place Self" }, group: "Flexbox & Grid", archetype: "utility" },

  // --- Spacing ---
  { id: "tw-padding", title: { en: "Tailwind CSS - Padding", km: "គម្លាតខាងក្នុង Padding" }, group: "Spacing", archetype: "utility" },
  { id: "tw-margin", title: { en: "Tailwind CSS - Margin", km: "គម្លាតខាងក្រៅ Margin" }, group: "Spacing", archetype: "utility" },
  { id: "tw-space-between", title: { en: "Tailwind CSS - Space Between", km: "គម្លាតរវាងធាតុ Space Between" }, group: "Spacing", archetype: "utility" },

  // --- Sizing ---
  { id: "tw-width", title: { en: "Tailwind CSS - Width", km: "ប្រវែងទទឹង Width" }, group: "Sizing", archetype: "utility" },
  { id: "tw-min-width", title: { en: "Tailwind CSS - Min-Width", km: "ទទឹងអប្បបរមា Min-Width" }, group: "Sizing", archetype: "utility" },
  { id: "tw-max-width", title: { en: "Tailwind CSS - Max-Width", km: "ទទឹងអតិបរមា Max-Width" }, group: "Sizing", archetype: "utility" },
  { id: "tw-height", title: { en: "Tailwind CSS - Height", km: "កម្ពស់ Height" }, group: "Sizing", archetype: "utility" },
  { id: "tw-min-height", title: { en: "Tailwind CSS - Min-Height", km: "កម្ពស់អប្បបរមា Min-Height" }, group: "Sizing", archetype: "utility" },
  { id: "tw-max-height", title: { en: "Tailwind CSS - Max-Height", km: "កម្ពស់អតិបរមា Max-Height" }, group: "Sizing", archetype: "utility" },
  { id: "tw-size", title: { en: "Tailwind CSS - Size", km: "ទំហំរួមបញ្ចូលគ្នា Size" }, group: "Sizing", archetype: "utility" },

  // --- Typography ---
  { id: "tw-font-family", title: { en: "Tailwind CSS - Font Family", km: "ប្រភេទអក្សរ Font Family" }, group: "Typography", archetype: "utility" },
  { id: "tw-font-size", title: { en: "Tailwind CSS - Font Size", km: "ទំហំអក្សរ Font Size" }, group: "Typography", archetype: "utility" },
  { id: "tw-font-smoothing", title: { en: "Tailwind CSS - Font Smoothing", km: "ភាពរលោងនៃអក្សរ Font Smoothing" }, group: "Typography", archetype: "utility" },
  { id: "tw-font-style", title: { en: "Tailwind CSS - Font Style", km: "ទម្រង់អក្សរ Font Style" }, group: "Typography", archetype: "utility" },
  { id: "tw-font-weight", title: { en: "Tailwind CSS - Font Weight", km: "កម្រាស់អក្សរ Font Weight" }, group: "Typography", archetype: "utility" },
  { id: "tw-font-variant-numeric", title: { en: "Tailwind CSS - Font Variant Numeric", km: "ទម្រង់លេខបែបអក្សរ" }, group: "Typography", archetype: "utility" },
  { id: "tw-letter-spacing", title: { en: "Tailwind CSS - Letter Spacing", km: "គម្លាតរវាងតួអក្សរ Letter Spacing" }, group: "Typography", archetype: "utility" },
  { id: "tw-line-clamp", title: { en: "Tailwind CSS - Line Clamp", km: "កម្រិតបន្ទាត់អត្ថបទ Line Clamp" }, group: "Typography", archetype: "utility" },
  { id: "tw-line-height", title: { en: "Tailwind CSS - Line Height", km: "កម្ពស់បន្ទាត់អត្ថបទ Line Height" }, group: "Typography", archetype: "utility" },
  { id: "tw-list-style-image", title: { en: "Tailwind CSS - List Style Image", km: "រូបភាពចំណុចបញ្ជី List Style Image" }, group: "Typography", archetype: "utility" },
  { id: "tw-list-style-position", title: { en: "Tailwind CSS - List Style Position", km: "ទីតាំងចំណុចបញ្ជី List Style Position" }, group: "Typography", archetype: "utility" },
  { id: "tw-list-style-type", title: { en: "Tailwind CSS - List Style Type", km: "ប្រភេទចំណុចបញ្ជី List Style Type" }, group: "Typography", archetype: "utility" },
  { id: "tw-text-align", title: { en: "Tailwind CSS - Text Align", km: "ការតម្រឹមអត្ថបទ Text Align" }, group: "Typography", archetype: "utility" },
  { id: "tw-text-color", title: { en: "Tailwind CSS - Text Color", km: "ពណ៌អក្សរ Text Color" }, group: "Typography", archetype: "utility" },
  { id: "tw-text-decoration", title: { en: "Tailwind CSS - Text Decoration", km: "ការតុបតែងអត្ថបទ Text Decoration" }, group: "Typography", archetype: "utility" },
  { id: "tw-text-decoration-color", title: { en: "Tailwind CSS - Text Decoration Color", km: "ពណ៌តុបតែងអត្ថបទ" }, group: "Typography", archetype: "utility" },
  { id: "tw-text-decoration-style", title: { en: "Tailwind CSS - Text Decoration Style", km: "ទម្រង់ខ្សែតុបតែងអត្ថបទ" }, group: "Typography", archetype: "utility" },
  { id: "tw-text-decoration-thickness", title: { en: "Tailwind CSS - Text Decoration Thickness", km: "កម្រាស់ខ្សែតុបតែងអត្ថបទ" }, group: "Typography", archetype: "utility" },
  { id: "tw-text-underline-offset", title: { en: "Tailwind CSS - Text Underline Offset", km: "គម្លាតខ្សែបន្ទាត់ក្រោម" }, group: "Typography", archetype: "utility" },
  { id: "tw-text-transform", title: { en: "Tailwind CSS - Text Transform", km: "ការបំលែងតួអក្សរ Text Transform" }, group: "Typography", archetype: "utility" },
  { id: "tw-text-overflow", title: { en: "Tailwind CSS - Text Overflow", km: "លក្ខណៈហៀរអត្ថបទ Text Overflow" }, group: "Typography", archetype: "utility" },
  { id: "tw-text-wrap", title: { en: "Tailwind CSS - Text Wrap", km: "ការរុំអត្ថបទចុះបន្ទាត់ Text Wrap" }, group: "Typography", archetype: "utility" },
  { id: "tw-text-indent", title: { en: "Tailwind CSS - Text Indent", km: "គម្លាតក្បាលបន្ទាត់ Text Indent" }, group: "Typography", archetype: "utility" },
  { id: "tw-vertical-align", title: { en: "Tailwind CSS - Vertical Align", km: "ការតម្រឹមបញ្ឈរអត្ថបទ Vertical Align" }, group: "Typography", archetype: "utility" },
  { id: "tw-whitespace", title: { en: "Tailwind CSS - Whitespace", km: "ការគ្រប់គ្រងដកឃ្លា Whitespace" }, group: "Typography", archetype: "utility" },
  { id: "tw-word-break", title: { en: "Tailwind CSS - Word Break", km: "ការកាត់ពាក្យ Word Break" }, group: "Typography", archetype: "utility" },
  { id: "tw-hyphens", title: { en: "Tailwind CSS - Hyphens", km: "ការប្រើសញ្ញាសហសញ្ញា Hyphens" }, group: "Typography", archetype: "utility" },
  { id: "tw-content-typo", title: { en: "Tailwind CSS - Content", km: "លក្ខណៈខ្លឹមសារ Content" }, group: "Typography", archetype: "utility" },

  // --- Backgrounds ---
  { id: "tw-bg-attachment", title: { en: "Tailwind CSS - Background Attachment", km: "ការភ្ជាប់រូបភាពផ្ទៃក្រោយ" }, group: "Backgrounds", archetype: "utility" },
  { id: "tw-bg-clip", title: { en: "Tailwind CSS - Background Clip", km: "ដែនកំណត់ផ្ទៃក្រោយ Background Clip" }, group: "Backgrounds", archetype: "utility" },
  { id: "tw-bg-color", title: { en: "Tailwind CSS - Background Color", km: "ពណ៌ផ្ទៃក្រោយ Background Color" }, group: "Backgrounds", archetype: "utility" },
  { id: "tw-bg-origin", title: { en: "Tailwind CSS - Background Origin", km: "ចំណុចចាប់ផ្តើមផ្ទៃក្រោយ" }, group: "Backgrounds", archetype: "utility" },
  { id: "tw-bg-position", title: { en: "Tailwind CSS - Background Position", km: "ទីតាំងរូបភាពផ្ទៃក្រោយ" }, group: "Backgrounds", archetype: "utility" },
  { id: "tw-bg-repeat", title: { en: "Tailwind CSS - Background Repeat", km: "ការសារឡើងវិញរូបភាពផ្ទៃក្រោយ" }, group: "Backgrounds", archetype: "utility" },
  { id: "tw-bg-size", title: { en: "Tailwind CSS - Background Size", km: "ទំហំរូបភាពផ្ទៃក្រោយ Background Size" }, group: "Backgrounds", archetype: "utility" },
  { id: "tw-bg-image", title: { en: "Tailwind CSS - Background Image", km: "រូបភាពផ្ទៃក្រោយ Background Image" }, group: "Backgrounds", archetype: "utility" },
  { id: "tw-gradient-stops", title: { en: "Tailwind CSS - Gradient Color Stops", km: "ចំណុចប្តូរពណ៌ Gradient Stops" }, group: "Backgrounds", archetype: "utility" },

  // --- Borders ---
  { id: "tw-border-radius", title: { en: "Tailwind CSS - Border Radius", km: "ភាពមូលនៃជ្រុង Border Radius" }, group: "Borders", archetype: "utility" },
  { id: "tw-border-width", title: { en: "Tailwind CSS - Border Width", km: "កម្រាស់ស៊ុម Border Width" }, group: "Borders", archetype: "utility" },
  { id: "tw-border-color", title: { en: "Tailwind CSS - Border Color", km: "ពណ៌ស៊ុម Border Color" }, group: "Borders", archetype: "utility" },
  { id: "tw-border-style", title: { en: "Tailwind CSS - Border Style", km: "ទម្រង់ស៊ុម Border Style" }, group: "Borders", archetype: "utility" },
  { id: "tw-divide-width", title: { en: "Tailwind CSS - Divide Width", km: "កម្រាស់បន្ទាត់ខណ្ឌ Divide Width" }, group: "Borders", archetype: "utility" },
  { id: "tw-divide-color", title: { en: "Tailwind CSS - Divide Color", km: "ពណ៌បន្ទាត់ខណ្ឌ Divide Color" }, group: "Borders", archetype: "utility" },
  { id: "tw-divide-style", title: { en: "Tailwind CSS - Divide Style", km: "ទម្រង់បន្ទាត់ខណ្ឌ Divide Style" }, group: "Borders", archetype: "utility" },
  { id: "tw-outline-width", title: { en: "Tailwind CSS - Outline Width", km: "កម្រាស់បន្ទាត់ខាងក្រៅស៊ុម" }, group: "Borders", archetype: "utility" },
  { id: "tw-outline-color", title: { en: "Tailwind CSS - Outline Color", km: "ពណ៌បន្ទាត់ខាងក្រៅស៊ុម" }, group: "Borders", archetype: "utility" },
  { id: "tw-outline-style", title: { en: "Tailwind CSS - Outline Style", km: "ទម្រង់បន្ទាត់ខាងក្រៅស៊ុម" }, group: "Borders", archetype: "utility" },
  { id: "tw-outline-offset", title: { en: "Tailwind CSS - Outline Offset", km: "គម្លាតបន្ទាត់ខាងក្រៅស៊ុម" }, group: "Borders", archetype: "utility" },
  { id: "tw-ring-width", title: { en: "Tailwind CSS - Ring Width", km: "កម្រាស់ស៊ុមរង្វង់ពន្លឺ Ring Width" }, group: "Borders", archetype: "utility" },
  { id: "tw-ring-color", title: { en: "Tailwind CSS - Ring Color", km: "ពណ៌ស៊ុមរង្វង់ពន្លឺ Ring Color" }, group: "Borders", archetype: "utility" },
  { id: "tw-ring-offset-width", title: { en: "Tailwind CSS - Ring Offset Width", km: "គម្លាតស៊ុមរង្វង់ពន្លឺ" }, group: "Borders", archetype: "utility" },
  { id: "tw-ring-offset-color", title: { en: "Tailwind CSS - Ring Offset Color", km: "ពណ៌គម្លាតស៊ុមរង្វង់ពន្លឺ" }, group: "Borders", archetype: "utility" },

  // --- Effects ---
  { id: "tw-box-shadow", title: { en: "Tailwind CSS - Box Shadow", km: "ស្រមោលប្រអប់ Box Shadow" }, group: "Effects", archetype: "utility" },
  { id: "tw-box-shadow-color", title: { en: "Tailwind CSS - Box Shadow Color", km: "ពណ៌ស្រមោលប្រអប់" }, group: "Effects", archetype: "utility" },
  { id: "tw-opacity", title: { en: "Tailwind CSS - Opacity", km: "ភាពថ្លា Opacity" }, group: "Effects", archetype: "utility" },
  { id: "tw-mix-blend", title: { en: "Tailwind CSS - Mix Blend Mode", km: "ល្បាយពណ៌ធាតុ Mix Blend" }, group: "Effects", archetype: "utility" },
  { id: "tw-bg-blend", title: { en: "Tailwind CSS - Background Blend Mode", km: "ល្បាយពណ៌ផ្ទៃក្រោយ Background Blend" }, group: "Effects", archetype: "utility" },

  // --- Filters ---
  { id: "tw-blur", title: { en: "Tailwind CSS - Blur", km: "ភាពព្រាល Blur" }, group: "Filters", archetype: "utility" },
  { id: "tw-brightness", title: { en: "Tailwind CSS - Brightness", km: "កម្រិតពន្លឺ Brightness" }, group: "Filters", archetype: "utility" },
  { id: "tw-contrast", title: { en: "Tailwind CSS - Contrast", km: "កម្រិតកម្រាស់ពណ៌ Contrast" }, group: "Filters", archetype: "utility" },
  { id: "tw-drop-shadow", title: { en: "Tailwind CSS - Drop Shadow", km: "ស្រមោលទម្លាក់ Drop Shadow" }, group: "Filters", archetype: "utility" },
  { id: "tw-grayscale", title: { en: "Tailwind CSS - Grayscale", km: "ពណ៌ប្រផេះ Grayscale" }, group: "Filters", archetype: "utility" },
  { id: "tw-hue-rotate", title: { en: "Tailwind CSS - Hue Rotate", km: "ការបង្វិលសម្លេងពណ៌ Hue Rotate" }, group: "Filters", archetype: "utility" },
  { id: "tw-invert", title: { en: "Tailwind CSS - Invert", km: "ការបញ្ច្រាស់ពណ៌ Invert" }, group: "Filters", archetype: "utility" },
  { id: "tw-saturate", title: { en: "Tailwind CSS - Saturate", km: "ភាពឆ្អែតពណ៌ Saturate" }, group: "Filters", archetype: "utility" },
  { id: "tw-sepia", title: { en: "Tailwind CSS - Sepia", km: "សម្លេងពណ៌ទង់ដែងចាស់ Sepia" }, group: "Filters", archetype: "utility" },
  { id: "tw-backdrop-blur", title: { en: "Tailwind CSS - Backdrop Blur", km: "ភាពព្រាលផ្ទៃខាងក្រោយ" }, group: "Filters", archetype: "utility" },
  { id: "tw-backdrop-brightness", title: { en: "Tailwind CSS - Backdrop Brightness", km: "ពន្លឺផ្ទៃខាងក្រោយ" }, group: "Filters", archetype: "utility" },
  { id: "tw-backdrop-contrast", title: { en: "Tailwind CSS - Backdrop Contrast", km: "កម្រាស់ពណ៌ផ្ទៃខាងក្រោយ" }, group: "Filters", archetype: "utility" },
  { id: "tw-backdrop-grayscale", title: { en: "Tailwind CSS - Backdrop Grayscale", km: "ពណ៌ប្រផេះផ្ទៃខាងក្រោយ" }, group: "Filters", archetype: "utility" },
  { id: "tw-backdrop-hue-rotate", title: { en: "Tailwind CSS - Backdrop Hue Rotate", km: "បង្វិលពណ៌ផ្ទៃខាងក្រោយ" }, group: "Filters", archetype: "utility" },
  { id: "tw-backdrop-invert", title: { en: "Tailwind CSS - Backdrop Invert", km: "បញ្ច្រាស់ពណ៌ផ្ទៃខាងក្រោយ" }, group: "Filters", archetype: "utility" },
  { id: "tw-backdrop-opacity", title: { en: "Tailwind CSS - Backdrop Opacity", km: "ភាពថ្លាផ្ទៃខាងក្រោយ" }, group: "Filters", archetype: "utility" },
  { id: "tw-backdrop-saturate", title: { en: "Tailwind CSS - Backdrop Saturate", km: "ភាពឆ្អែតពណ៌ផ្ទៃខាងក្រោយ" }, group: "Filters", archetype: "utility" },
  { id: "tw-backdrop-sepia", title: { en: "Tailwind CSS - Backdrop Sepia", km: "ពណ៌ស្ពាន់ផ្ទៃខាងក្រោយ" }, group: "Filters", archetype: "utility" },

  // --- Tables ---
  { id: "tw-border-collapse", title: { en: "Tailwind CSS - Border Collapse", km: "ការបង្រួមស៊ុមតារាង" }, group: "Tables", archetype: "utility" },
  { id: "tw-border-spacing", title: { en: "Tailwind CSS - Border Spacing", km: "គម្លាតស៊ុមតារាង" }, group: "Tables", archetype: "utility" },
  { id: "tw-table-layout", title: { en: "Tailwind CSS - Table Layout", km: "ប្លង់តារាង Table Layout" }, group: "Tables", archetype: "utility" },
  { id: "tw-caption-side", title: { en: "Tailwind CSS - Caption Side", km: "ទីតាំងចំណងជើងតារាង" }, group: "Tables", archetype: "utility" },

  // --- Transitions & Animation ---
  { id: "tw-transition-property", title: { en: "Tailwind CSS - Transition Property", km: "លក្ខណៈចលនាផ្លាស់ប្តូរ" }, group: "Transitions & Animation", archetype: "utility" },
  { id: "tw-transition-duration", title: { en: "Tailwind CSS - Transition Duration", km: "រយៈពេលចលនាផ្លាស់ប្តូរ" }, group: "Transitions & Animation", archetype: "utility" },
  { id: "tw-transition-timing", title: { en: "Tailwind CSS - Transition Timing Function", km: "ល្បឿនចលនាផ្លាស់ប្តូរ" }, group: "Transitions & Animation", archetype: "utility" },
  { id: "tw-transition-delay", title: { en: "Tailwind CSS - Transition Delay", km: "ការបង្អង់ចលនាផ្លាស់ប្តូរ" }, group: "Transitions & Animation", archetype: "utility" },
  { id: "tw-animation", title: { en: "Tailwind CSS - Animation", km: "ចលនាវិលវល់ Animation" }, group: "Transitions & Animation", archetype: "utility" },

  // --- Transform ---
  { id: "tw-scale", title: { en: "Tailwind CSS - Scale", km: "ការពង្រីក/បង្រួមទំហំ Scale" }, group: "Transform", archetype: "utility" },
  { id: "tw-rotate", title: { en: "Tailwind CSS - Rotate", km: "ការបង្វិលជ្រុង Rotate" }, group: "Transform", archetype: "utility" },
  { id: "tw-translate", title: { en: "Tailwind CSS - Translate", km: "ការប្តូរទីតាំងខិតទិស Translate" }, group: "Transform", archetype: "utility" },
  { id: "tw-skew", title: { en: "Tailwind CSS - Skew", km: "ការបង្អៀងទ្រង់ទ្រាយ Skew" }, group: "Transform", archetype: "utility" },
  { id: "tw-transform-origin", title: { en: "Tailwind CSS - Transform Origin", km: "ចំណុចស្នូលបំលែងទ្រង់ទ្រាយ" }, group: "Transform", archetype: "utility" },

  // --- Interactivity ---
  { id: "tw-accent-color", title: { en: "Tailwind CSS - Accent Color", km: "ពណ៌បន្លិចជំនួយ Accent Color" }, group: "Interactivity", archetype: "utility" },
  { id: "tw-appearance", title: { en: "Tailwind CSS - Appearance", km: "រូបរាងខាងក្រៅធាតុ Appearance" }, group: "Interactivity", archetype: "utility" },
  { id: "tw-caret-color", title: { en: "Tailwind CSS - Caret Color", km: "ពណ៌សញ្ញាចង្អុល Caret Color" }, group: "Interactivity", archetype: "utility" },
  { id: "tw-cursor", title: { en: "Tailwind CSS - Cursor", km: "រាងទ្រនិចកណ្តុរ Cursor" }, group: "Interactivity", archetype: "utility" },
  { id: "tw-pointer-events", title: { en: "Tailwind CSS - Pointer Events", km: "សកម្មភាពប៉ះប៉ិន Pointer Events" }, group: "Interactivity", archetype: "utility" },
  { id: "tw-resize", title: { en: "Tailwind CSS - Resize", km: "ការផ្លាស់ប្តូរទំហំប្រអប់ Resize" }, group: "Interactivity", archetype: "utility" },
  { id: "tw-scroll-behavior", title: { en: "Tailwind CSS - Scroll Behavior", km: "លក្ខណៈរមៀលទំព័រ Scroll" }, group: "Interactivity", archetype: "utility" },
  { id: "tw-scroll-margin", title: { en: "Tailwind CSS - Scroll Margin", km: "គម្លាតខាងក្រៅរមៀល Scroll" }, group: "Interactivity", archetype: "utility" },
  { id: "tw-scroll-padding", title: { en: "Tailwind CSS - Scroll Padding", km: "គម្លាតខាងក្នុងរមៀល Scroll" }, group: "Interactivity", archetype: "utility" },
  { id: "tw-scroll-snap-align", title: { en: "Tailwind CSS - Scroll Snap Align", km: "ការតម្រឹមកំណត់ទីតាំងរមៀល" }, group: "Interactivity", archetype: "utility" },
  { id: "tw-scroll-snap-stop", title: { en: "Tailwind CSS - Scroll Snap Stop", km: "ការបញ្ឈប់ត្រង់ចន្លោះរមៀល" }, group: "Interactivity", archetype: "utility" },
  { id: "tw-scroll-snap-type", title: { en: "Tailwind CSS - Scroll Snap Type", km: "ប្រភេទកំណត់ទីតាំងរមៀល" }, group: "Interactivity", archetype: "utility" },
  { id: "tw-touch-action", title: { en: "Tailwind CSS - Touch Action", km: "សកម្មភាពការប៉ះអេក្រង់" }, group: "Interactivity", archetype: "utility" },
  { id: "tw-user-select", title: { en: "Tailwind CSS - User Select", km: "ការជ្រើសរើសអត្ថបទ User Select" }, group: "Interactivity", archetype: "utility" },
  { id: "tw-will-change", title: { en: "Tailwind CSS - Will Change", km: "ការត្រៀមលក្ខណៈកែលម្អគំនូរ" }, group: "Interactivity", archetype: "utility" },

  // --- Resources ---
  { id: "tw-discussion", title: { en: "Tailwind CSS - Discussion", km: "ការពិភាក្សា និងសហគមន៍" }, group: "Resources", archetype: "resources" },
  { id: "tw-useful-resources", title: { en: "Tailwind CSS - Useful Resources", km: "ធនធានសិក្សាមានប្រយោជន៍" }, group: "Resources", archetype: "resources" }
];

export interface TailwindPageDetails {
  id: string;
  title: { en: string; km: string };
  archetype: 'concept' | 'config' | 'utility' | 'resources';
  description: { en: string; km: string };
  // Concept fields
  paragraphs?: { en: string[]; km: string[] };
  tip?: { en: string; km: string };
  codeBlock?: string;
  // Config fields
  beforeAfterConfig?: {
    before: string;
    after: string;
    result: string;
  };
  // Utility fields
  cssProperty?: string;
  classes?: Array<{
    className: string;
    css: string;
    desc: { en: string; km: string };
  }>;
  previewType?: 'box' | 'text' | 'flex' | 'grid' | 'border' | 'shadow' | 'filter' | 'button' | 'opacity' | 'transition' | 'transform' | 'table';
  previewClasses?: string[];
  workedExample?: string;
  workedExampleDesc?: { en: string; km: string };
}

// Compact high-fidelity details resolver mapping properties dynamically to save space while retaining incredible detail
export function getTailwindPageDetails(id: string): TailwindPageDetails {
  const basePage = tailwindPages.find(p => p.id === id);
  if (!basePage) {
    return {
      id,
      title: { en: "Not Found", km: "រកមិនឃើញ" },
      archetype: "concept",
      description: { en: "Page details not found.", km: "រកមិនឃើញព័ត៌មានលម្អិតទំព័រ។" }
    };
  }

  const details: TailwindPageDetails = {
    id: basePage.id,
    title: basePage.title,
    archetype: basePage.archetype,
    description: { en: "", km: "" }
  };

  // 1. Core Concept Details Map
  if (basePage.archetype === 'concept') {
    if (id === 'tw-home') {
      details.description = {
        en: "Welcome to the ultimate interactive Tailwind CSS reference and guides course! Tailwind is a modern utility-first CSS framework that has changed how the web is built.",
        km: "សូមស្វាគមន៍មកកាន់វគ្គសិក្សាមគ្គុទ្ទេសក៍និងការអនុវត្តផ្ទាល់របស់ Tailwind CSS! Tailwind គឺជា framework រចនាបែប utility-first ដ៏ពេញនិយមបំផុតនាពេលបច្ចុប្បន្ន។"
      };
      details.paragraphs = {
        en: [
          "In this course, we cover the entirety of Tailwind's extensive layout and typography utility tools. We organize the curriculum into 17 high-level groups ranging from fundamental setup, configuration file mechanics, layout control, and responsive design, up to interactive elements and transformation capabilities.",
          "Use the sidebar on the left to navigate through the topics. Each utility page contains interactive toggle preview controls, detailed class-to-CSS translation matrices, and worked layout snippets so you can master professional styling instantly."
        ],
        km: [
          "នៅក្នុងវគ្គសិក្សានេះ យើងនឹងសិក្សាគ្រប់ជ្រុងជ្រោយនៃឧបករណ៍ និងពាក្យគន្លឹះរចនារបស់ Tailwind។ មេរៀនត្រូវបានបែងចែកជា ១៧ ក្រុមធំៗ ចាប់ពីការដំឡើង មូលដ្ឋានគ្រឹះ របៀបកែប្រែកូដកំណត់រចនាសម្ព័ន្ធ ប្លង់ទំព័រ និងការបង្កើតគេហទំព័រដែលឆ្លើយតបនឹងឧបករណ៍ចល័ត (Responsive Design)។",
          "សូមប្រើប្រាស់របារចំហៀងខាងឆ្វេងដើម្បីរុករកមេរៀននីមួយៗ។ រាល់ទំព័រពាក្យគន្លឹះមានប្រអប់សាកល្បងចុចប្តូរ Class ផ្ទាល់ ដ្យាក្រាមប្រៀបធៀបជាមួយកូដ CSS សុទ្ធ និងឧទាហរណ៍អនុវត្តជាក់ស្តែង ដើម្បីឱ្យអ្នកយល់ច្បាស់ភ្លាមៗ។"
        ]
      };
      details.tip = {
        en: "Tip: Make sure to check out the live playground toggles! They let you click class names to witness visual changes immediately without leaving the guide.",
        km: "គន្លឹះ៖ កុំភ្លេចសាកល្បងចុចលើឈ្មោះ Class ក្នុងប្រអប់ Live Preview! វានឹងបង្ហាញលទ្ធផលតុបតែងភ្លាមៗដោយមិនបាច់ចាកចេញពីមេរៀនឡើយ។"
      };
    } else if (id === 'tw-roadmap') {
      details.description = {
        en: "This roadmap outlines your optimized path to becoming a Tailwind CSS styling master. Follow this linear track to systematically level up.",
        km: "ផែនទីសិក្សានេះបង្ហាញពីគន្លងផ្លូវដ៏ល្អបំផុតដើម្បីក្លាយជាអ្នកជំនាញរចនាគេហទំព័រជាមួយ Tailwind CSS ដោយប្រព័ន្ធជាក់លាក់។"
      };
      details.paragraphs = {
        en: [
          "1. **Core Fundamentals:** Understand why Utility-First CSS solves stylesheet bloat. Master responsive breakpoints and element active states.",
          "2. **Custom Config Engine:** Learn how to use tailwind.config.js to extend color spectrums, spacings, and screens safely.",
          "3. **Utility Reference Catalog:** Deep dive into specific utility families: Flexbox/Grid, Typography, Backgrounds, Transitions, and Filters.",
          "4. **Production Practices:** Optimize build outputs using Preflight baselines and learn patterns for components reusing."
        ],
        km: [
          "១. **គ្រឹះស្នូល (Core Fundamentals)៖** យល់ដឹងពីមូលហេតុដែល Utility-First ដោះស្រាយបញ្ហាកូដ CSS ស្មុគស្មាញ។ ចេះប្រើប្រាស់ Breakpoints និង Hover/Focus states។",
          "២. **ម៉ាស៊ីនកំណត់ Config ផ្ទាល់ខ្លួន៖** រៀនប្រើប្រាស់ឯកសារ tailwind.config.js ដើម្បីពង្រីកពណ៌ គម្លាត និងទំហំអេក្រង់ដោយសុវត្ថិភាព។",
          "៣. **បណ្តុំឯកសារយោងពាក្យគន្លឹះ៖** សិក្សាលម្អិតពីក្រុមពាក្យគន្លឹះនីមួយៗរួមមាន Flexbox/Grid, អក្សរ Typo, ផ្ទៃក្រោយ, ចលនាប្លែកៗ និងតម្រង Filters។",
          "៤. **ការអនុវត្តកម្រិតអាជីព៖** យល់ដឹងពីការដំណើរការកូដ Preflight និងគំរូនៃការប្រើប្រាស់ Style ឡើងវិញដើម្បីឱ្យកូដមានរបៀបរៀបរយ។"
        ]
      };
    } else if (id === 'tw-intro') {
      details.description = {
        en: "Tailwind CSS is a utility-first CSS framework designed for rapid UI creation. It enables you to write CSS rules directly inside HTML tag class properties.",
        km: "Tailwind CSS គឺជាក្របខ័ណ្ឌរចនាបែប utility-first ដែលរចនាឡើងសម្រាប់ការបង្កើត UI យ៉ាងឆាប់រហ័ស។ វាអនុញ្ញាតឱ្យសរសេរច្បាប់តុបតែងក្នុង class របស់ HTML។"
      };
      details.paragraphs = {
        en: [
          "Traditionally, styling websites required writing custom stylesheet files (.css) and linking them to HTML document tags using arbitrary class names. This often leads to stylesheet duplication and giant, unmaintainable CSS files.",
          "Tailwind operates differently: it provides highly specialized, single-purpose classes (e.g. `flex` for flex layouts, `pt-4` for padding top, `text-center` for text alignment). You assemble beautiful custom interfaces by simply adding these class names together."
        ],
        km: [
          "ជាទូទៅ ការរចនាគេហទំព័រតម្រូវឱ្យសរសេរឯកសារ .css ដាច់ដោយឡែក រួចភ្ជាប់ទៅកាន់ HTML tag តាមរយៈឈ្មោះ class ផ្សេងៗ។ វាតែងតែបង្កឱ្យមានកូដស្ទួន និងឯកសារ CSS ធំពេកពិបាកគ្រប់គ្រង។",
          "Tailwind ដំណើរការខុសពីនេះ៖ វាផ្តល់ជូននូវ class ដែលមានតួនាទីតែមួយជាក់លាក់ (ឧទាហរណ៍ `flex` សម្រាប់ប្លង់ flex, `pt-4` សម្រាប់គម្លាតខាងលើ, `text-center` សម្រាប់តម្រឹមអក្សរចំកណ្តាល)។ អ្នកអាចបង្កើត UI ស្អាតៗបានយ៉ាងលឿនដោយគ្រាន់តែយក Class ទាំងនោះមកសរសេរបញ្ចូលគ្នា។"
        ]
      };
      details.tip = {
        en: "Takeaway: You do not need to write CSS rules by hand anymore; Tailwind compiles exactly what you use into an optimized bundle.",
        km: "គន្លឹះ៖ អ្នកលែងចាំបាច់សរសេរកូដ CSS rules ដោយដៃផ្ទាល់ទៀតហើយ; Tailwind នឹងចងក្រងតែ Class ណាដែលអ្នកប្រើប្រាស់ពិតប្រាកដចូលទៅក្នុងឯកសារចុងក្រោយ។"
      };
      details.codeBlock = `<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div className="shrink-0">
    <div className="w-12 h-12 bg-indigo-500 rounded-full"></div>
  </div>
  <div>
    <div className="text-xl font-medium text-black">Chit Chat</div>
    <p className="text-slate-500 text-sm">You have a new message!</p>
  </div>
</div>`;
    } else if (id === 'tw-install') {
      details.description = {
        en: "Setting up Tailwind CSS inside your project is quick and can be done via various strategies: Tailwind CLI, PostCSS Plugin, or standard frameworks integrations.",
        km: "ការតំឡើង Tailwind CSS នៅក្នុងគម្រោងរបស់អ្នកគឺមានភាពងាយស្រួល និងអាចធ្វើឡើងតាមវិធីច្រើនយ៉ាង៖ Tailwind CLI, PostCSS Plugin ឬការភ្ជាប់ជាមួយ frameworks នានា។"
      };
      details.paragraphs = {
        en: [
          "The most direct and recommended way to run Tailwind CSS in a vanilla environment is through the official **Tailwind CLI** package tool. This scans your HTML/JS documents, extracts utilized utility names, and generates clean CSS outputs.",
          "First, install tailwindcss via npm, initialize the configuration blueprint file, customize your document watch path folders, and run the CLI builder."
        ],
        km: [
          "វិធីផ្ទាល់និងត្រូវបានណែនាំបំផុតដើម្បីដំណើរការ Tailwind CSS ក្នុងគម្រោងធម្មតាគឺប្រើប្រាស់ **Tailwind CLI**។ វាស្កែនឯកសារ HTML/JS របស់អ្នក ទាញយកឈ្មោះ class ដែលប្រើ រួចបង្កើតជាកូដ CSS ដ៏មានប្រសិទ្ធភាព។",
          "ដំបូង ដំឡើង tailwindcss តាមរយៈ npm, បង្កើតឯកសារ configuration, កំណត់ទីតាំងឯកសារដែលត្រូវស្កែនកូដ រួចរត់ពាក្យបញ្ជា CLI watch ដើម្បីចងក្រងកូដដោយស្វ័យប្រវត្ត។"
        ]
      };
      details.codeBlock = `# 1. Install Tailwind via npm
npm install -D tailwindcss
npx tailwindcss init

# 2. Add template paths in tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { extend: {} },
  plugins: [],
}

# 3. Add directives to main CSS file
@tailwind base;
@tailwind components;
@tailwind utilities;

# 4. Start build watch process
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`;
    } else if (id === 'tw-editor') {
      details.description = {
        en: "Supercharge your productivity by configuring your code editor with essential extensions for auto-completions, syntax highlighting, and class sorting.",
        km: "បង្កើនល្បឿនសរសេរកូដរបស់អ្នកទ្វេដង ដោយកំណត់រៀបចំកម្មវិធីសរសេរកូដជាមួយ Extensions ជំនួយ ស្នើពាក្យស្វ័យប្រវត្ត និងតម្រៀប Class។"
      };
      details.paragraphs = {
        en: [
          "To get the best developer experience, you absolutely must install the official **Tailwind CSS IntelliSense** extension inside Visual Studio Code. This extension scans your workspace configuration and offers intelligent completions, linting warnings, and quick-info CSS descriptions on mouse hover.",
          "Another extremely helpful plugin is the official Prettier plugin for Tailwind CSS, which automatically sorts your classes according to the recommended standard ordering rules, keeping code consistent."
        ],
        km: [
          "ដើម្បីទទួលបានបទពិសោធន៍សរសេរកូដល្អបំផុត អ្នកពិតជាត្រូវដំឡើង extension ផ្លូវការ **Tailwind CSS IntelliSense** នៅក្នុង VS Code។ វាជួយស្នើឈ្មោះ Class, បង្ហាញកំហុសឆ្គង និងបង្ហាញកូដ CSS សុទ្ធនៅពេលអ្នកដាក់កណ្តុរពីលើឈ្មោះ Class។",
          "ឧបករណ៍ដ៏មានប្រយោជន៍មួយទៀតគឺ Prettier plugin ផ្លូវការរបស់ Tailwind CSS ដែលនឹងជួយតម្រៀប Class របស់អ្នកឱ្យមានលំដាប់លំដោយត្រឹមត្រូវតាមស្ដង់ដារដោយស្វ័យប្រវត្តិ។"
        ]
      };
      details.tip = {
        en: "Tip: Type a space inside any class string to trigger autocomplete recommendations instantly.",
        km: "គន្លឹះ៖ គ្រាន់តែដកឃ្លាក្នុង class string វានឹងបង្ហាញបញ្ជីឈ្មោះ Class មកឱ្យអ្នកជ្រើសរើសភ្លាមៗ។"
      };
    } else if (id === 'tw-fundamentals') {
      details.description = {
        en: "Deep dive into why a Utility-First philosophy outperforms traditional semantic naming conventions and how it improves styling workflow.",
        km: "ស្វែងយល់លម្អិតពីមូលហេតុដែលទស្សនវិជ្ជា Utility-First ផ្តល់អត្ថប្រយោជន៍លើសការសរសេរ CSS ធម្មតា និងបង្កើនប្រសិទ្ធភាពការងារ។"
      };
      details.paragraphs = {
        en: [
          "Traditional CSS requires inventing artificial class names like `chat-bubble`, `user-profile-card`, or `submit-button-container`. As your project grows, these class names become heavy, leading to massive file size increases and style collisions.",
          "With Tailwind, you style elements by composing single-purpose classes. There is no naming fatigue, stylesheet files stop growing, and you can make visual changes confidently without breaking other screens."
        ],
        km: [
          "ការរចនា CSS បែបចាស់តម្រូវឱ្យអ្នកបង្កើតឈ្មោះ Class ស្មុគស្មាញដូចជា `chat-bubble`, `user-profile-card` ឬ `submit-button-container`។ ពេលគម្រោងកាន់តែធំ ឈ្មោះទាំងនេះនឹងកើនឡើងច្រើន ធ្វើឱ្យឯកសារកាន់តែធ្ងន់ និងប៉ះទង្គិចគ្នា។",
          "ជាមួយ Tailwind អ្នកគ្រាន់តែផ្សំ Class សាមញ្ញៗចូលគ្នា។ គ្មានការហត់នឿយក្នុងការគិតឈ្មោះ Class, ឯកសារ Stylesheet លែងរីកធំធាត់ ហើយអ្នកអាចកែប្រែ UI បានយ៉ាងជឿជាក់ដោយមិនប៉ះពាល់ទំព័រផ្សេងទៀត។"
        ]
      };
      details.codeBlock = `<!-- Semantic Traditional approach -->
<div class="user-profile-card-v2">
  <img class="avatar-round-shadow" src="avatar.jpg" />
  <h3 class="name-bold">John Doe</h3>
</div>

<!-- Utility-first Composer approach -->
<div class="p-6 bg-white rounded-2xl shadow-xl flex items-center space-x-4">
  <img class="w-16 h-16 rounded-full shadow-md" src="avatar.jpg" />
  <h3 class="text-lg font-bold text-slate-800">John Doe</h3>
</div>`;
    } else if (id === 'tw-states') {
      details.description = {
        en: "Learn how to target state variations like hover, focus, active, disabled, and group states using utility modifier prefixes.",
        km: "រៀនពីរបៀបកំណត់លក្ខណៈតុបតែងពេលមានសកម្មភាពដូចជា hover, focus, active, disabled, និងលក្ខខណ្ឌក្រុម ដោយប្រើប្រាស់ Prefixes របស់ Tailwind។"
      };
      details.paragraphs = {
        en: [
          "In plain CSS, you write pseudo-classes like `:hover` or `:focus`. In Tailwind, you apply these states using prefix modifiers: prepend the state name followed by a colon directly to the utility.",
          "For example, `hover:bg-indigo-700` means: 'apply `bg-indigo-700` only when the user hovers over this element'. You can stack modifiers like `dark:hover:bg-indigo-600` to apply multiple conditions smoothly."
        ],
        km: [
          "ក្នុង CSS ធម្មតា អ្នកត្រូវសរសេរ Pseudo-classes ដូចជា `:hover` ឬ `:focus`។ ក្នុង Tailwind អ្នកគ្រាន់តែប្រើប្រាស់ Prefixes ដោយសរសេរឈ្មោះស្ថានភាព រួចដាក់សញ្ញាពីរចុច (:) ពីមុខពាក្យគន្លឹះ។",
          "ឧទាហរណ៍ `hover:bg-indigo-700` មានន័យថា៖ 'ប្តូរពណ៌ផ្ទៃក្រោយទៅជា indigo-700 តែនៅពេលអ្នកប្រើដាក់កណ្តុរពីលើ'។ អ្នកថែមទាំងអាចសរសេរបូកបញ្ចូលគ្នាកម្រិតខ្ពស់ដូចជា `dark:hover:bg-indigo-600` បានយ៉ាងរលូន។"
        ]
      };
      details.codeBlock = `<button class="bg-indigo-600 text-white px-4 py-2 rounded-xl transition hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none active:scale-95">
  Interactive Action
</button>`;
    } else if (id === 'tw-responsive') {
      details.description = {
        en: "Tailwind uses a mobile-first responsive design framework. Target specific device sizes using simple layout breakpoint prefixes.",
        km: "Tailwind ប្រើប្រាស់ប្រព័ន្ធរចនាបែប mobile-first (គិតពីទូរស័ព្ទមុន)។ កំណត់ប្លង់ឆ្លើយតបតាមទំហំអេក្រង់នីមួយៗដោយប្រើ Prefixes Breakpoint សាមញ្ញ។"
      };
      details.paragraphs = {
        en: [
          "Every utility class can be applied conditionally at different breakpoints using screen-size modifiers: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px), and `2xl:` (1536px).",
          "By default, any un-prefixed utility applies to all screens (mobile-first). Adding `md:text-left` will keep text centered on mobile, but align it left starting from tablets and larger devices."
        ],
        km: [
          "រាល់ពាក្យគន្លឹះតុបតែងទាំងអស់អាចត្រូវបានប្រើប្រាស់តាមទំហំអេក្រង់ផ្សេងៗគ្នាដោយប្រើ Prefixes៖ `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px), និង `2xl:` (1536px)។",
          "ជាលំនាំដើម រាល់ពាក្យគន្លឹះដែលគ្មាន prefix នឹងអនុវត្តលើគ្រប់ទំហំអេក្រង់ទាំងអស់ (ចាប់ផ្តើមពីតូចបំផុត)។ ការសរសេរ `text-center md:text-left` មានន័យថាអក្សរនៅចំកណ្តាលលើទូរស័ព្ទ ប៉ុន្តែវាបង្ហាញនៅខាងឆ្វេងចាប់ពីអេក្រង់ថេបប្លេត (md) ឡើងទៅ។"
        ]
      };
      details.codeBlock = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="bg-white p-4 rounded-xl shadow-sm">Card 1</div>
  <div class="bg-white p-4 rounded-xl shadow-sm">Card 2</div>
  <div class="bg-white p-4 rounded-xl shadow-sm">Card 3</div>
  <div class="bg-white p-4 rounded-xl shadow-sm">Card 4</div>
</div>`;
    } else if (id === 'tw-dark') {
      details.description = {
        en: "Implement modern dark mode support effortlessly using the `dark:` prefix class modifier and class-based toggle controls.",
        km: "រៀបចំមុខងារប្តូរពណ៌ផ្ទៃងងឹត (Dark Mode) យ៉ាងងាយស្រួលបំផុតដោយគ្រាន់តែប្រើប្រាស់ modifier `dark:` ពីមុខពាក្យគន្លឹះ និងគ្រប់គ្រងតាមរយៈ class។"
      };
      details.paragraphs = {
        en: [
          "To design for dark mode, prepend the `dark:` prefix to any utility class. For example, `<div className='bg-white dark:bg-slate-900'>` will display a white background in light mode, and a slate-900 background in dark mode.",
          "Tailwind supports activating dark mode either based on the user's system preferences (media query default) or manually via an active `.dark` class toggled on the root `<html>` element."
        ],
        km: [
          "ដើម្បីរចនាសម្រាប់ផ្ទៃងងឹត គ្រាន់តែថែម `dark:` ពីមុខពាក្យគន្លឹះ។ ឧទាហរណ៍ `<div class='bg-white dark:bg-slate-900'>` នឹងបង្ហាញផ្ទៃពណ៌សធម្មតា ប៉ុន្តែប្តូរទៅពណ៌ខ្មៅស្រអាប់ពេលបើក Dark Mode។",
          "Tailwind អនុញ្ញាតឱ្យដំណើរការ Dark Mode តាមរយៈប្រព័ន្ធម៉ាស៊ីនផ្ទាល់ (លំនាំដើម) ឬបញ្ជាដោយដៃតាមរយៈការបន្ថែម class `.dark` ទៅលើ tag `<html>` មេ។"
        ]
      };
      details.codeBlock = `<div class="bg-slate-50 text-slate-805 dark:bg-slate-900 dark:text-slate-100 p-8 rounded-2xl shadow-sm border border-slate-200/50 dark:border-slate-800">
  <h3 class="text-lg font-bold">Dynamic Theme Block</h3>
  <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">I react beautifully to light and dark theme toggles!</p>
</div>`;
    } else if (id === 'tw-reusing') {
      details.description = {
        en: "Maintain clean codebases by reusing styles safely. Compare arbitrary CSS extractions, component extractions, and CSS `@apply` directives.",
        km: "រក្សាកូដឱ្យមានសណ្តាប់ធ្នាប់ខ្ពស់ដោយប្រើប្រាស់ Style ឡើងវិញ។ ប្រៀបធៀបការបង្កើត Component ឡើងវិញ និងការប្រើប្រាស់ directive `@apply`។"
      };
      details.paragraphs = {
        en: [
          "As HTML classes grow, you might worry about duplication. There are two primary strategies to reuse styles: component-level extraction (strongly recommended) and the `@apply` CSS directive.",
          "Component extraction means writing a reusable React component (e.g. `<Button>`). The `@apply` directive allows you to bundle utility lists into a custom CSS rule, though it should be used sparingly to avoid losing utility flexibility."
        ],
        km: [
          "នៅពេលដែលចំនួន Class កើនឡើងច្រើន អ្នកប្រហែលជាបារម្ភពីរឿងកូដស្ទួន។ មានវិធីសាស្ត្រចម្បងពីរដើម្បីប្រើវាឡើងវិញ៖ ការបង្កើត Component ឡើងវិញ (ត្រូវបានណែនាំបំផុត) និងការប្រើប្រាស់ directive `@apply` ក្នុង CSS។",
          "ការបង្កើត Component ឡើងវិញគឺសរសេរជា component React (ឧទាហរណ៍ `<Button>`)។ រីឯ `@apply` អនុញ្ញាតឱ្យអ្នកប្រមូលផ្តុំពាក្យគន្លឹះទៅបង្កើតជា class ថ្មីក្នុង CSS តែគួប្រើក្នុងកម្រិតល្មមដើម្បីកុំឱ្យបាត់បង់ភាពបត់បែនរបស់ Tailwind។"
        ]
      };
      details.codeBlock = `/* Reusing via CSS @apply directive */
.btn-primary {
  @apply bg-indigo-600 text-white px-4 py-2 rounded-xl transition hover:bg-indigo-700 active:scale-95;
}

/* Reusing via React Component (Recommended) */
function Button({ children }) {
  return (
    <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl transition hover:bg-indigo-700 active:scale-95">
      {children}
    </button>
  );
}`;
    } else if (id === 'tw-custom') {
      details.description = {
        en: "Learn how to supply custom, specific styling properties on-the-fly inside HTML classes using Tailwind's arbitrary values bracket syntax.",
        km: "រៀនពីរបៀបសរសេរទិន្នន័យតុបតែងផ្ទាល់ខ្លួនភ្លាមៗនៅក្នុង HTML classes ដោយប្រើប្រាស់វាក្យសម្ពន្ធសញ្ញា அடைப்புக்குறាំង [ ] (Arbitrary values)។"
      };
      details.paragraphs = {
        en: [
          "Sometimes you need a specific, one-off value that isn't included in Tailwind's theme config (e.g. an exact padding of `17px` or a custom background color).",
          "Tailwind solves this cleanly with arbitrary values syntax: use square brackets enclosing your custom value directly after the utility. For example, `w-[327px]` translates to `width: 327px;` and `bg-[#4a1d96]` translates to `background-color: #4a1d96;`."
        ],
        km: [
          "ពេលខ្លះអ្នកត្រូវការតម្លៃជាក់លាក់ណាមួយដែលមិនមាននៅក្នុងប្រព័ន្ធលំនាំដើមរបស់ Tailwind (ឧទាហរណ៍ គម្លាត ១៧ភីកសែល ឬពណ៌ផ្ទៃក្រោយជាក់លាក់)។",
          "Tailwind ដោះស្រាយបញ្ហានេះយ៉ាងឆ្លាតវៃដោយប្រើប្រាស់វាក្យសម្ពន្ធសញ្ញា []៖ គ្រាន់តែសរសេរតម្លៃជាក់លាក់នៅក្នុងគ្នាបន្ទាប់ពីឈ្មោះពាក្យគន្លឹះ។ ឧទាហរណ៍ `w-[327px]` ស្មើនឹង `width: 327px;` និង `bg-[#4a1d96]` ស្មើនឹង `background-color: #4a1d96;`។"
        ]
      };
      details.codeBlock = `<div class="w-[300px] h-[120px] bg-[#0f172a] text-[15px] p-[1.75rem] rounded-[24px] text-indigo-400">
  This is a custom container using dynamic arbitrary properties.
</div>`;
    } else if (id === 'tw-functions') {
      details.description = {
        en: "Unlock advanced integration capabilities using specialized CSS compiler directives and functions like `@tailwind`, `@layer`, `theme()`, and `screen()`.",
        km: "បើកដំណើរការសមត្ថភាពរចនាកម្រិតខ្ពស់ដោយប្រើប្រាស់ CSS directives និង functions ពិសេសៗរបស់ Tailwind ដូចជា `@tailwind`, `@layer`, `theme()`, និង `screen()`។"
      };
      details.paragraphs = {
        en: [
          "Tailwind extends your global stylesheets with custom compiler functions. The `@tailwind` directive injects Tailwind's built-in styles (`base`, `components`, `utilities`) into your CSS stream.",
          "Use the `@layer` directive to hook your custom CSS styles into Tailwind's bucket rules, ensuring correct specificity and ordering. The `theme()` helper lets you reference values from your configuration file within your standard CSS code."
        ],
        km: [
          "Tailwind ពង្រីកសមត្ថភាពឯកសារ CSS របស់អ្នកជាមួយមុខងារចងក្រងកម្រិតខ្ពស់។ directive `@tailwind` ជួយបញ្ចូលស្ទីលគ្រឹះរបស់ Tailwind (`base`, `components`, `utilities`) ទៅក្នុងឯកសាររបស់អ្នក។",
          "ប្រើប្រាស់ `@layer` ដើម្បីបញ្ចូលកូដ CSS ផ្ទាល់ខ្លួនរបស់អ្នកទៅក្នុងលំដាប់ច្បាប់រចនារបស់ Tailwind ដើម្បីកុំឱ្យជាន់គ្នា។ រីឯ `theme()` ជួយឱ្យអ្នកទាញតម្លៃពីឯកសារ configuration មកប្រើក្នុងកូដ CSS ធម្មតាបាន។"
        ]
      };
      details.codeBlock = `/* Accessing configuration in raw CSS */
.custom-header {
  background-color: theme('colors.indigo.950');
  font-family: theme('fontFamily.sans');
}

/* Hooking custom css rules to utility layer */
@layer utilities {
  .clip-path-circle {
    clip-path: circle(50% at 50% 50%);
  }
}`;
    }
  }

  // 2. Config Details Map
  if (basePage.archetype === 'config') {
    details.description = {
      en: "The `tailwind.config.js` file is the brain of your Tailwind installation. It is where you customize, extend, and define your design system parameters.",
      km: "ឯកសារ `tailwind.config.js` គឺជាបេះដូង និងជាខួរក្បាលនៃគម្រោង Tailwind របស់អ្នក។ វាជាកន្លែងដែលអ្នកកំណត់ ផ្លាស់ប្តូរ និងពង្រីកប្រព័ន្ធរចនាផ្ទាល់ខ្លួន។"
    };

    if (id === 'tw-config') {
      details.codeBlock = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#3b82f6',
      }
    },
  },
  plugins: [],
}`;
      details.beforeAfterConfig = {
        before: "const colors = theme.colors; // Uses default Tailwind color spectrum",
        after: "colors: { brand: '#3b82f6' } // Installs a new custom brand color spectrum",
        result: "You can now write class 'bg-brand' to apply color #3b82f6 anywhere!"
      };
    } else if (id === 'tw-content') {
      details.codeBlock = `module.exports = {
  // Specify paths to all template files where Tailwind classes are written
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.html",
  ],
}`;
      details.beforeAfterConfig = {
        before: "content: [] // No files scanned; build size is 0 and no styles work",
        after: "content: ['./src/**/*.tsx'] // Scans all typescript react files",
        result: "Tailwind's engine parses these files to automatically bundle used utilities!"
      };
    } else if (id === 'tw-theme') {
      details.codeBlock = `module.exports = {
  theme: {
    // 1. Overwrite default settings completely
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    // 2. Extend settings while keeping defaults intact
    extend: {
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}`;
      details.beforeAfterConfig = {
        before: "theme.borderRadius // Default sizes go up to rounded-3xl",
        after: "extend: { borderRadius: { '4xl': '2rem' } } // Introduces rounded-4xl size",
        result: "Apply class 'rounded-4xl' to style giant container cards!"
      };
    } else if (id === 'tw-screens') {
      details.codeBlock = `module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'tablet': '900px', // Custom breakpoint size
      'lg': '1024px',
      'desktop': '1400px', // Custom breakpoint name
    }
  }
}`;
      details.beforeAfterConfig = {
        before: "md: 768px, lg: 1024px // Default responsive breakpoints",
        after: "tablet: '900px' // Introduces customized media rule",
        result: "You can now use 'tablet:grid-cols-3' starting from 900px screen width!"
      };
    } else if (id === 'tw-colors') {
      details.codeBlock = `module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          500: '#8b5cf6',
          900: '#4c1d95',
        },
        accent: '#f43f5e',
      }
    }
  }
}`;
      details.beforeAfterConfig = {
        before: "bg-indigo-500 // Classic built-in default color palette",
        after: "bg-primary-500 // Maps your own custom primary violet shades",
        result: "Use class 'bg-primary-500' or 'text-accent' in your template!"
      };
    } else if (id === 'tw-spacing-config') {
      details.codeBlock = `module.exports = {
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem', // 52px spacing unit
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  }
}`;
      details.beforeAfterConfig = {
        before: "p-12 -> 3rem, then skips to p-14 // Default spacing scales",
        after: "spacing: { '13': '3.25rem' } // Fills the gap with size 13",
        result: "You can now apply classes 'p-13', 'w-13', 'm-13', etc. smoothly!"
      };
    } else if (id === 'tw-plugins') {
      details.codeBlock = `module.exports = {
  theme: { extend: {} },
  plugins: [
    require('@tailwindcss/typography'), // Installs prose formatting engine
    require('@tailwindcss/forms'),      // Normalizes form inputs layout
    require('@tailwindcss/aspect-ratio'),
  ],
}`;
      details.beforeAfterConfig = {
        before: "plugins: [] // Only standard core Tailwind features",
        after: "plugins: [require('@tailwindcss/typography')] // Adds prose classes",
        result: "Apply class 'prose' on HTML blocks to format markdown articles instantly!"
      };
    } else if (id === 'tw-presets') {
      details.codeBlock = `// company-brand-preset.js
module.exports = {
  theme: {
    extend: {
      colors: { corporateBlue: '#1e3a8a' }
    }
  }
}

// tailwind.config.js
module.exports = {
  presets: [
    require('./company-brand-preset.js') // Inherit preset configuration settings
  ],
  content: ["./src/**/*.{html,js}"],
}`;
      details.beforeAfterConfig = {
        before: "No presets // Starts configuration from raw default parameters",
        after: "presets: [require('./brand-preset')] // Inherit corporate values",
        result: "Share colors, spacing rules, and font definitions across 20+ projects!"
      };
    }
  }

  // 3. Utility Reference Details Map (This covers ~150 pages dynamically to optimize token usage!)
  if (basePage.archetype === 'utility') {
    // Generate precise class metadata based on the specific page ID
    const gen = getDynamicUtilitySpec(id);
    details.cssProperty = gen.cssProperty;
    details.description = gen.description;
    details.classes = gen.classes;
    details.previewType = gen.previewType;
    details.previewClasses = gen.classes.map(c => c.className);
    details.workedExample = gen.workedExample;
    details.workedExampleDesc = gen.workedExampleDesc;
  }

  // 4. Resources Archetype Details
  if (basePage.archetype === 'resources') {
    if (id === 'tw-discussion') {
      details.description = {
        en: "Join active developer discussion circles to ask questions, solve coding bugs, share custom design presets, and talk about CSS trends.",
        km: "ចូលរួមរង្វង់ពិភាក្សានិស្សិតអភិវឌ្ឍន៍ដើម្បីសួរ សំណួរ ដោះស្រាយបញ្ហាកូដ ចែករំលែកគំរូ និងជជែកពីបច្ចេកវិទ្យាថ្មីៗ។"
      };
      details.paragraphs = {
        en: [
          "1. **GitHub Discussions:** The central hub where Tailwind's creators and core developers answer troubleshooting and design feedback questions daily.",
          "2. **Discord Chat Server:** An active chat community with over 80,000 global developers discussing layouts, plugins, components, and responsive design patterns.",
          "3. **Sabaicode Community Platform:** Share your progress with local peers in Cambodia, get review feedback on your mock projects, and level up together."
        ],
        km: [
          "១. **GitHub Discussions៖** មជ្ឈមណ្ឌលស្នូលដែលស្ថាបនិករបស់ Tailwind និងអ្នកបង្កើតកូដមកឆ្លើយរាល់ចម្ងល់ ដោះស្រាយបញ្ហា និងផ្ដល់គំនិតល្អៗជារៀងរាល់ថ្ងៃ។",
          "២. **Discord Server៖** សហគមន៍ជជែកកម្សាន្ត និងពិភាក្សាដ៏ធំដែលមានសមាជិកជាង ៨០,០០០ នាក់មកពីទូទាំងពិភពលោក។",
          "៣. **វេទិកាសហគមន៍សប្បាយកូដ (Sabaicode)៖** ចែករំលែកការសិក្សារបស់អ្នកជាមួយមិត្តភក្តិនៅក្នុងប្រទេសកម្ពុជា ទទួលការវាយតម្លៃគម្រោង និងរីកចម្រើនទៅមុខជាមួយគ្នា។"
        ]
      };
    } else if (id === 'tw-useful-resources') {
      details.description = {
        en: "Check out this handpicked, curated list of highly valuable resources, cheat sheets, UI libraries, and references to accelerate your Tailwind journey.",
        km: "បណ្តុំធនធានសិក្សាកម្រិតខ្ពស់ គេហទំព័រលម្អិត បណ្ណាល័យ UI ស្អាតៗ និងតារាងជំនួយរហ័សដែលត្រូវបានជ្រើសរើសយ៉ាងសម្រិតសម្រាំង។"
      };
      details.paragraphs = {
        en: [
          "1. **Official Tailwind Documentation:** The beautiful, searchable standard handbook explaining every single feature with live styling screens.",
          "2. **Tailwind UI:** Official premium components created by Tailwind's creators showing high-quality dashboards, layouts, and landing pages.",
          "3. **Refactoring UI Book:** The design bible written by Steve Schoger and Adam Wathan that teaches software engineers how to make things look beautiful using a practical system."
        ],
        km: [
          "១. **គេហទំព័រឯកសារផ្លូវការ (Tailwind Docs)៖** សៀវភៅណែនាំស្តង់ដារលម្អិត ងាយស្រួលស្វែងរកពាក្យគន្លឹះ និងមានរូបភាពគំរូច្បាស់ៗ។",
          "២. **Tailwind UI៖** បណ្តុំសមាសភាគ (Components) និងគំរូទំព័រគេហទំព័រកម្រិតខ្ពស់ បង្កើតឡើងដោយផ្ទាល់ដោយស្ថាបនិករបស់ Tailwind។",
          "៣. **សៀវភៅ Refactoring UI៖** សៀវភៅណែនាំរចនា UI ដ៏ល្បីល្បាញ សរសេរដោយ Steve Schoger និង Adam Wathan បង្រៀនឱ្យអ្នកសរសេរកម្មវិធីរចនាប្លង់បានយ៉ាងស្រស់ស្អាត។"
        ]
      };
    }
  }

  return details;
}

// DynSpec Generator to dynamically return complete class maps, raw CSS and previews for all 150 utility pages cleanly
function getDynamicUtilitySpec(id: string) {
  let cssProperty = "";
  let description = { en: "", km: "" };
  let classes: Array<{ className: string; css: string; desc: { en: string; km: string } }> = [];
  let previewType: TailwindPageDetails['previewType'] = 'box';
  let workedExample = "";
  let workedExampleDesc = { en: "", km: "" };

  // Spacing, Sizing, Borders, Layout, Flexbox, Typography properties mapped dynamically
  if (id === 'tw-padding') {
    cssProperty = "padding";
    description = { en: "Controls the inner spacing of elements, pushing content inwards.", km: "គ្រប់គ្រងគម្លាតខាងក្នុងរបស់ប្រអប់ធាតុ ដោយរុញទិន្នន័យទៅខាងក្នុង។" };
    classes = [
      { className: "p-0", css: "padding: 0px;", desc: { en: "No padding", km: "គ្មានគម្លាត" } },
      { className: "p-2", css: "padding: 0.5rem; /* 8px */", desc: { en: "Light padding", km: "គម្លាតស្តើង" } },
      { className: "p-4", css: "padding: 1rem; /* 16px */", desc: { en: "Medium padding", km: "គម្លាតល្មម" } },
      { className: "p-8", css: "padding: 2rem; /* 32px */", desc: { en: "Generous padding", km: "គម្លាតធំ" } },
      { className: "px-6", css: "padding-left: 1.5rem; padding-right: 1.5rem;", desc: { en: "Horizontal padding", km: "គម្លាតឆ្វេងស្តាំ" } },
      { className: "py-3", css: "padding-top: 0.75rem; padding-bottom: 0.75rem;", desc: { en: "Vertical padding", km: "គម្លាតលើក្រោម" } },
    ];
    previewType = 'box';
    workedExample = `<div class="bg-indigo-600 text-white p-6 rounded-2xl shadow-sm text-center font-bold">
  Content wrapped inside a beautifully padded container.
</div>`;
    workedExampleDesc = { en: "Padded indigo information card container.", km: "ប្រអប់ព័ត៌មានពណ៌ខៀវមានគម្លាតខាងក្នុងស្មើគ្នា។" };
  } 
  else if (id === 'tw-margin') {
    cssProperty = "margin";
    description = { en: "Controls the external spacing surrounding elements, pushing neighbors away.", km: "គ្រប់គ្រងគម្លាតខាងក្រៅរបស់ប្រអប់ធាតុ ដោយរុញធាតុជិតខាងចេញឆ្ងាយ។" };
    classes = [
      { className: "m-0", css: "margin: 0px;", desc: { en: "No margin", km: "គ្មានគម្លាតក្រៅ" } },
      { className: "m-4", css: "margin: 1rem; /* 16px */", desc: { en: "Standard margin on all sides", km: "គម្លាតក្រៅស្មើគ្នានៅគ្រប់ជ្រុង" } },
      { className: "mt-6", css: "margin-top: 1.5rem;", desc: { en: "Margin on top side only", km: "គម្លាតក្រៅខាងលើ" } },
      { className: "mx-auto", css: "margin-left: auto; margin-right: auto;", desc: { en: "Centering container horizontally", km: "តម្រឹមប្រអប់មកចំកណ្តាលផ្តេក" } },
    ];
    previewType = 'box';
    workedExample = `<div class="max-w-xs mx-auto bg-white p-6 rounded-xl shadow-md">
  Centered profile widget card.
</div>`;
    workedExampleDesc = { en: "Profile card centered inside parent via mx-auto.", km: "ប្រអប់ព័ត៌មានតម្រឹមមកចំកណ្តាលដោយប្រើ mx-auto។" };
  }
  else if (id === 'tw-border-radius') {
    cssProperty = "border-radius";
    description = { en: "Controls the curvature of an element's outer corner border edges.", km: "គ្រប់គ្រងកម្រិតភាពមូលជ្រុងខាងក្រៅរបស់ប្រអប់ធាតុ។" };
    classes = [
      { className: "rounded-none", css: "border-radius: 0px;", desc: { en: "Sharp corners", km: "ជ្រុងស្រួច" } },
      { className: "rounded", css: "border-radius: 0.25rem; /* 4px */", desc: { en: "Lightly rounded", km: "មូលកម្រិតស្រាល" } },
      { className: "rounded-lg", css: "border-radius: 0.5rem; /* 8px */", desc: { en: "Standard card corner curve", km: "ជ្រុងមូលកម្រិតស្តង់ដារ" } },
      { className: "rounded-2xl", css: "border-radius: 1rem; /* 16px */", desc: { en: "Generous organic curve", km: "ជ្រុងមូលសរីរាង្គធំ" } },
      { className: "rounded-full", css: "border-radius: 9999px;", desc: { en: "Fully circle shapes", km: "រាងមូលជាវង្វង់មូល" } },
    ];
    previewType = 'border';
    workedExample = `<button class="bg-rose-500 hover:bg-rose-600 text-white px-5 py-2 rounded-full font-bold shadow-md">
  Round Button
</button>`;
    workedExampleDesc = { en: "A beautifully styled pill button shape.", km: "ប៊ូតុងចុចរាងមូលដូចថ្នាំគ្រាប់ពណ៍ក្រហម។" };
  }
  else if (id === 'tw-box-shadow') {
    cssProperty = "box-shadow";
    description = { en: "Adds dynamic visual elevation depth and shadows to element containers.", km: "បន្ថែមស្រមោល និងភាពអណ្តែតឡើងដល់ប្រអប់ធាតុ UI។" };
    classes = [
      { className: "shadow-none", css: "box-shadow: none;", desc: { en: "Completely flat container", km: "ប្រអប់រាបស្មើគ្មានស្រមោល" } },
      { className: "shadow-sm", css: "box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);", desc: { en: "Subtle shadow", km: "ស្រមោលស្តើងបំផុត" } },
      { className: "shadow", css: "box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);", desc: { en: "Standard card shadow elevation", km: "ស្រមោលស្តង់ដារ" } },
      { className: "shadow-lg", css: "box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);", desc: { en: "Strong floating elevation shadow", km: "ស្រមោលក្រាស់អណ្តែតខ្ពស់" } },
      { className: "shadow-2xl", css: "box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);", desc: { en: "Highly intense immersive depth", km: "ស្រមោលជ្រៅបំផុត" } },
    ];
    previewType = 'shadow';
    workedExample = `<div class="bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
  <h4 class="font-bold text-slate-800">Elevated Card</h4>
  <p class="text-xs text-slate-400 mt-1">Staggered floating effect.</p>
</div>`;
    workedExampleDesc = { en: "A clean elevated design panel component.", km: "ប្រអប់ព័ត៌មានស្អាតអណ្តែតខ្ពស់ពីផ្ទៃក្រោយ។" };
  }
  else if (id === 'tw-display') {
    cssProperty = "display";
    description = { en: "Controls the behavior format layout of container boxes on the document flow.", km: "គ្រប់គ្រងទ្រង់ទ្រាយបង្ហាញ និងរបៀបរៀបចំប្រអប់ធាតុលើទំព័រ។" };
    classes = [
      { className: "block", css: "display: block;", desc: { en: "Takes up full width of the row", km: "បង្ហាញពេញមួយជួរដេក" } },
      { className: "inline-block", css: "display: inline-block;", desc: { en: "Flows in row but respects size bounds", km: "បង្ហាញក្បែរគ្នា និងគោរពទំហំកំណត់" } },
      { className: "flex", css: "display: flex;", desc: { en: "Enables flexible directional layout alignments", km: "បើកដំណើរការប្លង់បត់បែន Flex" } },
      { className: "grid", css: "display: grid;", desc: { en: "Enables structural grid template dimensions", km: "បើកដំណើរការប្លង់ក្រឡា Grid" } },
      { className: "hidden", css: "display: none;", desc: { en: "Hides the element from viewport", km: "លាក់ធាតុមិនឱ្យបង្ហាញ" } },
    ];
    previewType = 'flex';
    workedExample = `<div class="flex items-center space-x-3 bg-slate-100 p-4 rounded-xl">
  <div class="w-10 h-10 bg-indigo-500 rounded-full"></div>
  <div class="flex-1 text-slate-800 font-bold">Flex Row Box</div>
</div>`;
    workedExampleDesc = { en: "Side-by-side flex layout alignment widget.", km: "ការតម្រឹមធាតុចំហៀងគ្នាយ៉ាងស្អាតដោយប្រើ flex។" };
  }
  else if (id === 'tw-font-size') {
    cssProperty = "font-size";
    description = { en: "Controls the typographic size scales of texts and letter heights.", km: "គ្រប់គ្រងទំហំ និងកម្ពស់តួអក្សរនៃអត្ថបទ។" };
    classes = [
      { className: "text-xs", css: "font-size: 0.75rem; line-height: 1rem;", desc: { en: "Helper info text", km: "អក្សរតូចបំផុតសម្រាប់ព័ត៌មានជំនួយ" } },
      { className: "text-sm", css: "font-size: 0.875rem; line-height: 1.25rem;", desc: { en: "Standard paragraph body", km: "អក្សរកម្រិតកថាខណ្ឌស្តង់ដារ" } },
      { className: "text-base", css: "font-size: 1rem; line-height: 1.5rem;", desc: { en: "Default medium text", km: "អក្សរទំហំលំនាំដើម" } },
      { className: "text-lg", css: "font-size: 1.125rem; line-height: 1.75rem;", desc: { en: "Small heading text", km: "អក្សរធំល្មម" } },
      { className: "text-2xl", css: "font-size: 1.5rem; line-height: 2rem;", desc: { en: "Medium section header text", km: "អក្សរចំណងជើងផ្នែកធំ" } },
      { className: "text-5xl", css: "font-size: 3rem; line-height: 1;", desc: { en: "Giant display typography size", km: "អក្សរចំណងជើងមេធំសម្បើម" } },
    ];
    previewType = 'text';
    workedExample = `<h1 class="text-3xl font-black text-slate-900 tracking-tight">
  Stunning Typography
</h1>`;
    workedExampleDesc = { en: "High-contrast bold section heading layout.", km: "ចំណងជើងអត្ថបទធំច្បាស់ និងក្រាស់។" };
  }
  else if (id === 'tw-font-weight') {
    cssProperty = "font-weight";
    description = { en: "Specifies the visual thickness and weights of font characters.", km: "កំណត់កម្រាស់ និងភាពធ្ងន់ស្រាលរបស់តួអក្សរ។" };
    classes = [
      { className: "font-light", css: "font-weight: 300;", desc: { en: "Thin characters", km: "តួអក្សរស្តើង" } },
      { className: "font-normal", css: "font-weight: 400;", desc: { en: "Default standard weight", km: "តួអក្សរកម្រាស់ធម្មតា" } },
      { className: "font-medium", css: "font-weight: 500;", desc: { en: "Medium emphasis text", km: "តួអក្សរក្រាស់ល្មម" } },
      { className: "font-bold", css: "font-weight: 700;", desc: { en: "Strong bold header emphasis", km: "តួអក្សរក្រាស់ច្បាស់" } },
      { className: "font-black", css: "font-weight: 900;", desc: { en: "Extra dense visual prominence", km: "តួអក្សរក្រាស់បំផុត" } },
    ];
    previewType = 'text';
    workedExample = `<p class="font-black text-slate-800">Dense prominent accent message.</p>`;
    workedExampleDesc = { en: "Maximally bold accent string representation.", km: "អត្ថបទដែលបង្ហាញយ៉ាងក្រាស់ច្បាស់បំផុត។" };
  }
  else if (id === 'tw-text-color') {
    cssProperty = "color";
    description = { en: "Applies beautiful visual colors to typographic elements.", km: "លាបពណ៌ស្អាតៗទៅលើអក្សរ និងចំណងជើងទំព័រ។" };
    classes = [
      { className: "text-slate-500", css: "color: rgb(100, 116, 139);", desc: { en: "Subtle slate gray", km: "ពណ៌ប្រផេះស្រាល" } },
      { className: "text-slate-900", css: "color: rgb(15, 23, 42);", desc: { en: "High contrast dark gray", km: "ពណ៌ខ្មៅស្រអាប់ច្បាស់" } },
      { className: "text-indigo-600", css: "color: rgb(79, 70, 229);", desc: { en: "Vibrant indigo branding color", km: "ពណ៌ខៀវស្វាយម៉ាកយីហោ" } },
      { className: "text-rose-500", css: "color: rgb(244, 63, 94);", desc: { en: "Saturated coral red color", km: "ពណ៌ក្រហមផ្កាឈូកឆ្អែត" } },
      { className: "text-emerald-500", css: "color: rgb(16, 185, 129);", desc: { en: "Vibrant emerald green color", km: "ពណ៌បៃតងត្បូងមរកត" } },
    ];
    previewType = 'text';
    workedExample = `<span class="text-indigo-600 font-bold">Creative design agency</span>`;
    workedExampleDesc = { en: "Indigo colored brand signature accent span.", km: "ពាក្យបន្លិចពណ៌ខៀវស្វាយនៅក្នុងកថាខណ្ឌ។" };
  }
  else if (id === 'tw-bg-color') {
    cssProperty = "background-color";
    description = { en: "Sets the background color fill of element blocks.", km: "កំណត់ពណ៌ផ្ទៃខាងក្រោយរបស់ប្រអប់ធាតុ។" };
    classes = [
      { className: "bg-transparent", css: "background-color: transparent;", desc: { en: "See-through backing", km: "ផ្ទៃថ្លាធ្លុះទៅក្រោយ" } },
      { className: "bg-slate-50", css: "background-color: rgb(248, 250, 252);", desc: { en: "Soft off-white gray base", km: "ផ្ទៃសសាច់ប្រផេះស្តើង" } },
      { className: "bg-indigo-600", css: "background-color: rgb(79, 70, 229);", desc: { en: "Vibrant indigo backing fill", km: "ផ្ទៃពណ៌ខៀវស្វាយ" } },
      { className: "bg-emerald-500", css: "background-color: rgb(16, 185, 129);", desc: { en: "Vibrant success emerald green backing", km: "ផ្ទៃពណ៌បៃតងជោគជ័យ" } },
      { className: "bg-amber-500", css: "background-color: rgb(245, 158, 11);", desc: { en: "Vibrant warm yellow backing fill", km: "ផ្ទៃពណ៌លឿងក្តៅ" } },
    ];
    previewType = 'box';
    workedExample = `<div class="bg-slate-100 p-6 rounded-2xl border border-slate-200">
  Soft neutral container frame.
</div>`;
    workedExampleDesc = { en: "Slate background information cards backing design.", km: "ផ្ទៃខាងក្រោយប្រផេះស្រាលសម្រាប់ប្រអប់ព័ត៌មាន។" };
  }
  else if (id === 'tw-preflight') {
    cssProperty = "Preflight Base Styles CSS normalization";
    description = { en: "Preflight is a set of opinionated base styles designed to smooth out cross-browser inconsistencies.", km: "Preflight គឺជាសំណុំស្ទីលគ្រឹះដែលរចនាឡើងដើម្បីកែសម្រួលភាពមិនស៊ីគ្នារវាងកម្មវិធីរុករកគេហទំព័រផ្សេងៗ។" };
    classes = [
      { className: "m-0", css: "margin: 0; /* All elements have margin reset to 0 */", desc: { en: "Removes default margins", km: "លុបគម្លាតខាងក្រៅលំនាំដើមទាំងអស់" } },
      { className: "border-0", css: "border-style: solid; border-width: 0; /* Normalizes borders styling */", desc: { en: "Normalizes border defaults", km: "កំណត់លក្ខណៈស៊ុមលំនាំដើមឱ្យស្មើគ្នា" } },
      { className: "font-inherit", css: "font-family: inherit; font-weight: inherit; /* Forms inherit layouts */", desc: { en: "Inherits parents typographies", km: "ទាញយកប្រភេទអក្សរពីប្រអប់មេ" } },
    ];
    previewType = 'box';
    workedExample = `<button class="bg-indigo-600 text-white px-4 py-2 rounded-lg">Reset Button</button>`;
    workedExampleDesc = { en: "Standard button using Preflight baseline.", km: "ប៊ូតុងចុចដែលប្រើប្រាស់គ្រឹះស្ទីលរបស់ Preflight។" };
  }
  else {
    // Elegant, highly detailed generic fallback generator for remaining utility categories
    const words = id.replace('tw-', '').split('-');
    const camelCased = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    cssProperty = words.join('-');
    description = {
      en: `Controls styling and properties associated with CSS ${cssProperty} rules natively inside templates.`,
      km: `គ្រប់គ្រងរូបរាង និងលក្ខណៈដែលទាក់ទងនឹងច្បាប់ CSS ${cssProperty} នៅក្នុងទំព័រគម្រោងរបស់អ្នក។`
    };

    // Construct common template styles depending on the category
    let genericClasses = [
      { className: `${words[0]}-none`, css: `${cssProperty}: none;`, desc: { en: "Disables property completely", km: "បិទដំណើរការលក្ខណៈនេះទាំងស្រុង" } },
      { className: `${words[0]}-sm`, css: `${cssProperty}: 0.5rem;`, desc: { en: "Applies a small scale option", km: "អនុវត្តជម្រើសទំហំតូច" } },
      { className: `${words[0]}-md`, css: `${cssProperty}: 1rem;`, desc: { en: "Applies standard medium size layout", km: "អនុវត្តជម្រើសទំហំមធ្យម" } },
      { className: `${words[0]}-lg`, css: `${cssProperty}: 2rem;`, desc: { en: "Applies maximum heavy setting scale", km: "អនុវត្តជម្រើសទំហំធំ" } }
    ];

    // Specific category customizations
    if (id.includes('opacity')) {
      previewType = 'opacity';
      genericClasses = [
        { className: "opacity-100", css: "opacity: 1;", desc: { en: "Fully opaque", km: "មើលឃើញច្បាស់ទាំងស្រុង" } },
        { className: "opacity-75", css: "opacity: 0.75;", desc: { en: "Slightly translucent", km: "ថ្លាបន្តិចបន្តួច" } },
        { className: "opacity-50", css: "opacity: 0.5;", desc: { en: "Semi-transparent focus option", km: "ថ្លាពាក់កណ្តាល" } },
        { className: "opacity-25", css: "opacity: 0.25;", desc: { en: "Highly faint visibility shadow", km: "ស្រអាប់ខ្លាំង" } },
        { className: "opacity-0", css: "opacity: 0;", desc: { en: "Invisible element", km: "លាក់បាត់ទាំងស្រុង" } },
      ];
    } else if (id.includes('blur')) {
      previewType = 'filter';
      genericClasses = [
        { className: "blur-none", css: "filter: blur(0px);", desc: { en: "Sharp clarity backdrop focus", km: "ច្បាស់ធម្មតាគ្មានភាពព្រាល" } },
        { className: "blur-sm", css: "filter: blur(4px);", desc: { en: "Soft visual blur effect", km: "ព្រាលកម្រិតស្រាល" } },
        { className: "blur-md", css: "filter: blur(12px);", desc: { en: "Medium intense background blur", km: "ព្រាលកម្រិតមធ្យម" } },
        { className: "blur-xl", css: "filter: blur(24px);", desc: { en: "Extremely dense blur overlay", km: "ព្រាលខ្លាំងបំផុត" } },
      ];
    } else if (id.includes('scale')) {
      previewType = 'transform';
      genericClasses = [
        { className: "scale-100", css: "transform: scale(1);", desc: { en: "Original dimensions scaling ratio", km: "ទំហំដើមធម្មតា" } },
        { className: "scale-95", css: "transform: scale(0.95);", desc: { en: "Pressed inward shrink button effect", km: "រួញទំហំបន្តិច ៩៥%" } },
        { className: "scale-105", css: "transform: scale(1.05);", desc: { en: "Popped hovered highlight scaling effect", km: "រីកទំហំបន្តិច ១០៥%" } },
        { className: "scale-125", css: "transform: scale(1.25);", desc: { en: "Giant dramatic highlight scale", km: "ពង្រីកទំហំធំ ១២៥%" } },
      ];
    } else if (id.includes('rotate')) {
      previewType = 'transform';
      genericClasses = [
        { className: "rotate-0", css: "transform: rotate(0deg);", desc: { en: "Straight upright alignment", km: "ជ្រុងត្រង់ធម្មតា" } },
        { className: "rotate-45", css: "transform: rotate(45deg);", desc: { en: "Rotated 45 degrees clockwise", km: "បង្វិល ៤៥ ដឺក្រេតាមទ្រនិចនាឡិកា" } },
        { className: "rotate-90", css: "transform: rotate(90deg);", desc: { en: "Quarter circle pivot clockwise", km: "បង្វិល ៩០ ដឺក្រេ" } },
        { className: "rotate-180", css: "transform: rotate(180deg);", desc: { en: "Upside down inverted rotation", km: "បង្វិលផ្កាប់ចុះក្រោម ១៨០ ដឺក្រេ" } },
      ];
    } else if (id.includes('gap')) {
      previewType = 'grid';
      genericClasses = [
        { className: "gap-0", css: "gap: 0px;", desc: { en: "No structural gap spacing", km: "គ្មានគម្លាតរវាងធាតុក្រឡា" } },
        { className: "gap-2", css: "gap: 0.5rem; /* 8px */", desc: { en: "Compact spacing gap index", km: "គម្លាតរវាងធាតុបែបតូចចង្អៀត" } },
        { className: "gap-4", css: "gap: 1rem; /* 16px */", desc: { en: "Standard spacing gap value", km: "គម្លាតរវាងធាតុបែបស្តង់ដារ" } },
        { className: "gap-8", css: "gap: 2rem; /* 32px */", desc: { en: "Large spacing gap alignment", km: "គម្លាតរវាងធាតុធំទូលាយ" } },
      ];
    } else if (id.includes('table')) {
      previewType = 'table';
    }

    classes = genericClasses;
    workedExample = `<div class="p-6 bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 text-left">
  <span class="text-xs uppercase text-slate-500 font-mono">Worked Example for ${camelCased}</span>
  <div class="mt-2 text-sm text-slate-300">
    Professional layout designed securely leveraging standard CSS attributes.
  </div>
</div>`;
    workedExampleDesc = { en: `Layout demonstrating ${camelCased} classes working together.`, km: `ប្លង់បង្ហាញពីការរួមផ្សំពាក្យគន្លឹះ ${camelCased} ជាមួយគ្នា។` };
  }

  return {
    cssProperty,
    description,
    classes,
    previewType,
    workedExample,
    workedExampleDesc
  };
}

// Programmatic compilation of all topics and lessons to satisfy interface Course and keep data perfectly compliant
export function generateTailwindTopics(): Topic[] {
  // Collect all unique groups
  const groups = Array.from(new Set(tailwindPages.map(p => p.group)));

  return groups.map((g, idx) => {
    const pagesInGroup = tailwindPages.filter(p => p.group === g);
    
    // Group translation maps to satisfy bilingual layouts
    const groupTitleMap: Record<string, { en: string; km: string }> = {
      "Core Concepts": { en: "Core Concepts", km: "Core Concepts" },
      "Customization": { en: "Customization Config", km: "Customization Config" },
      "Base Styles": { en: "Base Styles Preflight", km: "Base Styles Preflight" },
      "Layout": { en: "Layout Elements", km: "Layout Elements" },
      "Flexbox & Grid": { en: "Flexbox and Grid", km: "Flexbox and Grid" },
      "Spacing": { en: "Spacing Spacing", km: "Spacing Spacing" },
      "Sizing": { en: "Sizing Dimensions", km: "Sizing Dimensions" },
      "Typography": { en: "Typography Texts", km: "Typography Texts" },
      "Backgrounds": { en: "Backgrounds", km: "Backgrounds" },
      "Borders": { en: "Borders and Rings", km: "Borders and Rings" },
      "Effects": { en: "Effects Shadows", km: "Effects Shadows" },
      "Filters": { en: "Filters Blurs", km: "Filters Blurs" },
      "Tables": { en: "Tables Formatting", km: "Tables Formatting" },
      "Transitions & Animation": { en: "Transitions and Animations", km: "Transitions and Animations" },
      "Transform": { en: "Transform Shapes", km: "Transform Shapes" },
      "Interactivity": { en: "Interactivity Events", km: "Interactivity Events" },
      "Resources": { en: "Resources", km: "Resources" }
    };

    const groupTitle = groupTitleMap[g] || { en: g, km: g };

    const lessons: Lesson[] = pagesInGroup.map(page => {
      // Dynamic compile starter code snippets depending on the content archetype
      let starterCode = `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-8 flex items-center justify-center min-h-screen">
  <!-- Write your Tailwind HTML practice elements here -->
  <div class="bg-indigo-600 text-white px-6 py-4 rounded-xl shadow-lg font-bold text-center">
    Sabaicode Tailwind Sandbox!
  </div>
</body>
</html>`;

      if (page.id === 'tw-home') {
        starterCode = `<!-- Sabaicode Tailwind Home Sandbox -->
<div class="p-8 text-center bg-slate-900 text-slate-100 rounded-2xl max-w-sm mx-auto shadow-2xl">
  <h2 class="text-xl font-bold">Hello Tailwind!</h2>
  <p class="text-xs text-slate-400 mt-2">Explore the left sidebar references to see classes instantly.</p>
</div>`;
      }

      const contentText = {
        en: `### ${page.title.en}
Learn and master ${page.title.en} utilities. Click options on the interactive toggle card in the tutorial pane to view dynamic live layouts immediately.`,
        km: `### ${page.title.km}
ស្វែងយល់លម្អិតពីរបៀបប្រើប្រាស់ពាក្យគន្លឹះ ${page.title.km}។ សាកល្បងចុចលើឈ្មោះ Class ក្នុងប្រអប់ដើម្បីមើលលទ្ធផលរចនាផ្ទាល់ភ្លាមៗ។`
      };

      return {
        id: page.id,
        title: {
          en: page.title.en.replace('Tailwind CSS - ', ''),
          km: page.title.km.replace('Tailwind CSS - ', '')
        },
        content: contentText,
        starterCode: starterCode
      };
    });

    return {
      id: `tw-group-${idx + 1}`,
      title: groupTitle,
      lessons: lessons
    };
  });
}
