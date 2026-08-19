import { Lesson } from '../types';

export const cssLessonsPart1: Lesson[] = [
  {
    id: "css-home",
    title: { en: "CSS Home", km: "ទំព័រដើម CSS" },
    content: {
      en: `### CSS Tutorial Overview
Welcome to the CSS Course! CSS (Cascading Style Sheets) is the language used to design and layout web pages. While HTML defines the content and structure, CSS is what makes it look stunning.

In this comprehensive course, you will learn CSS from basic syntax, colors, and margins, all the way to layout architectures and advanced typography.

> **Tip:** Use the live editor on the right to experiment with colors and layout properties. Click **Run Code** to instantly see your modifications in the browser window!`,
      km: `### ទិដ្ឋភាពទូទៅនៃវគ្គសិក្សា CSS
ស្វាគមន៍មកកាន់វគ្គសិក្សា CSS! CSS (Cascading Style Sheets) គឺជាភាសាដែលប្រើសម្រាប់រចនា និងរៀបចំប្លង់គេហទំព័រ។ ខណៈពេលដែល HTML កំណត់មាតិកានិងរចនាសម្ព័ន្ធ CSS គឺជាអ្វីដែលធ្វើឱ្យវាមានសោភ័ណភាពស្រស់ស្អាត។

នៅក្នុងវគ្គសិក្សាពេញលេញនេះ អ្នកនឹងរៀនអំពី CSS ចាប់ពីទម្រង់ Syntax មូលដ្ឋាន ពណ៌ និងគម្លាត រហូតដល់ស្ថាបត្យកម្មរៀបចំប្លង់ និងការតុបតែងអក្សរកម្រិតខ្ពស់។

> **អនុសាសន៍:** ប្រើប្រាស់ប្រអប់សរសេរកូដផ្ទាល់នៅខាងស្តាំ ដើម្បីសាកល្បងលេងជាមួយពណ៌ និងលក្ខណៈប្លង់ផ្សេងៗ។ ចុច **ដំណើរការកូដ** ដើម្បីមើលការផ្លាស់ប្តូរភ្លាមៗ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Inter', sans-serif;
      text-align: center;
      background-color: #f8fafc;
      padding: 40px;
    }
    h1 {
      color: #4f46e5;
      font-size: 2.5rem;
    }
    p {
      color: #64748b;
      font-size: 1.1rem;
    }
  </style>
</head>
<body>
  <h1>ស្វាគមន៍មកកាន់ការរៀន CSS!</h1>
  <p>Modify this code and run to see CSS magic in action.</p>
</body>
</html>`
  },
  {
    id: "css-intro",
    title: { en: "CSS Introduction", km: "សេចក្តីផ្តើមអំពី CSS" },
    content: {
      en: `### What is CSS?
CSS stands for **Cascading Style Sheets**. It solves a big problem in HTML: styling.
HTML was never intended to contain tags for formatting a web page (like font, colors, etc.). CSS was created to take style out of the HTML page!

- **C**ascading: Styles can fall or cascade down from parent elements to child elements.
- **S**tyle: Colors, fonts, spacing, layouts, and animations.
- **S**heets: Templates or files containing these definitions.

> **Note:** CSS saves a lot of work! It can control the layout of multiple web pages all at once.`,
      km: `### តើ CSS ជាអ្វី?
CSS មកពីពាក្យថា **Cascading Style Sheets**។ វាដោះស្រាយបញ្ហាធំមួយនៅក្នុង HTML គឺ៖ ការតុបតែង។
HTML មិនត្រូវបានបង្កើតឡើងដើម្បីផ្ទុកថេកសម្រាប់រចនាគេហទំព័រ (ដូចជាហ្វុន ឬពណ៌) ឡើយ។ CSS ត្រូវបានបង្កើតឡើងដើម្បីបំបែកការរចនាចេញពីឯកសារ HTML!

- **C**ascading៖ ស្ទីលអាចហូរធ្លាក់ពីធាតុឪពុកម្តាយ (Parent) ទៅកាន់ធាតុផ្ទុកខាងក្នុង (Child)។
- **S**tyle៖ ពណ៌ ហ្វុនអក្សរ គម្លាត ប្លង់ និងចលនាផ្សេងៗ។
- **S**heets៖ ទំព័រគំរូ ឬឯកសារដែលផ្ទុកនូវនិយមន័យទាំងនេះ។

> **សម្គាល់:** CSS ជួយសម្រាលការងារបានច្រើន! វាអាចគ្រប់គ្រងការរចនានៃទំព័រគេហទំព័រជាច្រើនក្នុងពេលតែមួយ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: #eff6ff;
    }
    h2 {
      color: #1e3a8a;
      font-family: sans-serif;
    }
  </style>
</head>
<body>
  <h2>This is an Introduced CSS Page</h2>
  <p>The background color is styled with soft blue, and the header is dark blue.</p>
</body>
</html>`
  },
  {
    id: "css-syntax",
    title: { en: "CSS Syntax", km: "ទម្រង់សរសេរ CSS" },
    content: {
      en: `### CSS Syntax Rules
A CSS rule-set consists of a **selector** and a **declaration block**:

\`\`\`css
h1 {
  color: blue;
  font-size: 12px;
}
\`\`\`

- The **selector** points to the HTML element you want to style (\`h1\`).
- The **declaration block** contains one or more declarations separated by semicolons.
- Each declaration includes a CSS **property** name and a **value**, separated by a colon.

> **Note:** A CSS declaration always ends with a semicolon, and declaration blocks are surrounded by curly braces.`,
      km: `### ច្បាប់ទម្រង់សរសេរ CSS
សំណុំច្បាប់ CSS រួមមាន **Selector** និង **Declaration block**៖

\`\`\`css
h1 {
  color: blue;
  font-size: 12px;
}
\`\`\`

- **Selector** ចង្អុលទៅធាតុ HTML ដែលអ្នកចង់រចនា (\`h1\`)។
- **Declaration block** រួមមានសេចក្តីប្រកាសមួយ ឬច្រើនដែលបំបែកដោយសញ្ញាក្បៀសចំនុច (\`;\`)។
- សេចក្តីប្រកាសនីមួយៗរួមបញ្ចូលឈ្មោះលក្ខណៈសម្បត្តិ CSS (**property**) និងតម្លៃ (**value**) បំបែកដោយសញ្ញាចុចពីរ (\`:\`)។

> **សម្គាល់:** សេចក្តីប្រកាស CSS តែងតែបញ្ចប់ដោយសញ្ញាក្បៀសចំនុច ហើយប្រអប់ប្រកាសត្រូវបានព័ទ្ធជុំវិញដោយវង់ក្រចករកត (\`{\` \`}\`)។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: #e11d48; /* Property: color, Value: hex rose-600 */
      font-size: 20px; /* Property: font-size, Value: 20px */
      font-weight: bold;
    }
  </style>
</head>
<body>
  <p>This text is styled using basic CSS syntax rules!</p>
</body>
</html>`
  },
  {
    id: "css-selectors",
    title: { en: "CSS Selectors", km: "វិធីជ្រើសរើសធាតុ CSS" },
    content: {
      en: `### CSS Selectors
CSS selectors are used to "find" (or select) the HTML elements you want to style. We can divide CSS selectors into five categories:

1. **Simple Selectors** (select elements based on name, id, class)
   - Element Selector: \`p { color: red; }\`
   - Id Selector: \`#firstname { color: blue; }\` (uses \`#\`, selects unique element)
   - Class Selector: \`.highlight { background: yellow; }\` (uses \`.\`, selects multiple elements)
2. **Combinator Selectors** (based on a specific relationship between them)
3. **Pseudo-class Selectors** (based on a certain state, like \`:hover\`)
4. **Pseudo-elements Selectors** (style a part of an element)
5. **Attribute Selectors** (select elements based on an attribute)

> **Tip:** Class names cannot start with a number!`,
      km: `### CSS Selectors (វិធីជ្រើសរើសធាតុ)
CSS Selectors ត្រូវបានប្រើប្រាស់ដើម្បីស្វែងរក (ឬជ្រើសរើស) ធាតុ HTML ដែលអ្នកចង់តុបតែង។ យើងអាចបែងចែក Selectors ជា ៥ ប្រភេទ៖

១. **Simple Selectors** (ជ្រើសរើសតាមឈ្មោះ ថ្នាក់ (Class) ឬលេខសម្គាល់ (ID))
   - តាមឈ្មោះថេក៖ \`p { color: red; }\`
   - តាម ID៖ \`#firstname { color: blue; }\` (ប្រើ \`#\` ជ្រើសរើសធាតុដែលមាន ID ជាក់លាក់តែមួយគត់)
   - តាម Class៖ \`.highlight { background: yellow; }\` (ប្រើ \`.\` ជ្រើសរើសគ្រប់ធាតុដែលមាន Class ដូចគ្នា)
២. **Combinator Selectors** (ផ្អែកលើទំនាក់ទំនងរវាងធាតុ)
៣. **Pseudo-class Selectors** (ផ្អែកលើស្ថានភាពធាតុ ដូចជា \`:hover\`)
៤. **Pseudo-elements Selectors** (តុបតែងចំណែកណាមួយនៃធាតុ)
៥. **Attribute Selectors** (ជ្រើសរើសធាតុផ្អែកលើលក្ខណៈសម្បត្តិ)

> **អនុសាសន៍:** ឈ្មោះ Class មិនអាចចាប់ផ្តើមដោយលេខឡើយ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* 1. Element Selector */
    h3 { color: #4f46e5; }
    
    /* 2. ID Selector */
    #special-p { font-style: italic; color: #059669; }
    
    /* 3. Class Selector */
    .btn {
      background-color: #3b82f6;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <h3>Simple Selectors Test</h3>
  <p id="special-p">This paragraph has a unique ID selector style.</p>
  <p>This is a standard paragraph.</p>
  <button class="btn">Class styled Button</button>
</body>
</html>`
  },
  {
    id: "css-how-to",
    title: { en: "CSS How To", km: "វិធីបញ្ចូល CSS" },
    content: {
      en: `### Three Ways to Insert CSS
There are three ways of inserting a style sheet into an HTML document:

1. **External Style Sheet**: With this, you can change the look of an entire website by changing just one file. It is linked inside the \`<head>\` element:
   \`\`\`html
   <link rel="stylesheet" href="mystyle.css">
   \`\`\`
2. **Internal Style Sheet**: Used if one single HTML page has a unique style. Defined inside the \`<style>\` element inside the \`<head>\` section:
   \`\`\`html
   <style>body { background: white; }</style>
   \`\`\`
3. **Inline Styles**: Used to apply a unique style for a single HTML element. Uses the \`style\` attribute directly inside the tag:
   \`\`\`html
   <p style="color:red;">Inline Styled Text</p>
   \`\`\`

> **Note:** Inline style has the highest priority and will override external or internal styles!`,
      km: `### វិធីទាំង ៣ ក្នុងការបញ្ចូល CSS
មានវិធីចំនួន ៣ ដើម្បីបញ្ចូលសន្លឹករចនា (CSS) ទៅក្នុងឯកសារ HTML៖

១. **External Style Sheet (ឯកសារក្រៅ)**៖ អ្នកអាចផ្លាស់ប្តូររូបរាងគេហទំព័រទាំងមូលដោយកែប្រែតែឯកសារមួយប៉ុណ្ណោះ។ ភ្ជាប់វានៅក្នុងផ្នែក \`<head>\`៖
   \`\`\`html
   <link rel="stylesheet" href="mystyle.css">
   \`\`\`
២. **Internal Style Sheet (សន្លឹកផ្ទៃក្នុង)**៖ ប្រើប្រាស់ប្រសិនបើទំព័រ HTML តែមួយនោះមានរចនាប័ទ្មប្លែកពីគេ។ កំណត់នៅក្នុងផ្នែក \`<style>\` ក្នុង \`<head>\`៖
   \`\`\`html
   <style>body { background: white; }</style>
   \`\`\`
៣. **Inline Styles (សរសេរផ្ទាល់លើថេក)**៖ ប្រើសម្រាប់តុបតែងធាតុមួយជាក់លាក់តែម្តង ដោយសរសេរលក្ខណៈសម្បត្តិ \`style\` ផ្ទាល់លើថេក HTML៖
   \`\`\`html
   <p style="color:red;">អត្ថបទដែលសរសេរផ្ទាល់</p>
   \`\`\`

> **សម្គាល់:** Inline styles មានអាទិភាពខ្ពស់បំផុត និងអាចជំនួស (Override) ស្ទីលរបស់ Internal ឬ External បាន!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Internal CSS Styles */
    span {
      color: blue;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <p>This is <span>Internal Styled Text</span>.</p>
  
  <!-- Inline Style overriding normal colors -->
  <p style="color: green; font-size: 18px;">This text uses an inline style to override everything to green!</p>
</body>
</html>`
  },
  {
    id: "css-comments",
    title: { en: "CSS Comments", km: "ការសរសេរមតិយោបល់ CSS" },
    content: {
      en: `### CSS Comments
Comments are used to explain the code, and may help you when you edit the source code at a later date. Comments are ignored by browsers.

A CSS comment starts with \`/*\` and ends with \`*/\`. Comments can also span multiple lines:

\`\`\`css
/* This is a single-line comment */
p {
  color: black;
}

/* This is a
multi-line comment */
\`\`\`

> **Tip:** You can also use comments to temporarily disable lines of CSS code during debugging!`,
      km: `### ការសរសេរមតិយោបល់ (Comments) ក្នុង CSS
មតិយោបល់ (Comments) ត្រូវបានប្រើដើម្បីពន្យល់កូដ និងជួយអ្នកនៅពេលអ្នកកែប្រែកូដប្រភពនៅថ្ងៃក្រោយ។ Browser នឹងមិនបង្ហាញមតិយោបល់ទាំងនេះឡើយ។

មតិយោបល់ CSS ចាប់ផ្តើមដោយ \`/*\` និងបញ្ចប់ដោយ \`*/\`។ វាក៏អាចសរសេរច្រើនបន្ទាត់បានផងដែរ៖

\`\`\`css
/* នេះជាមតិយោបល់មួយបន្ទាត់ */
p {
  color: black;
}

/* នេះជាមតិយោបល់
ច្រើនបន្ទាត់ */
\`\`\`

> **អនុសាសន៍:** អ្នកក៏អាចប្រើប្រាស់ Comment ដើម្បីបិទការដំណើរការកូដ CSS ណាមួយជាបណ្តោះអាសន្នពេលកំពុងស្វែងរកបញ្ហាកូដ (Debugging) ផងដែរ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* This comment is hidden from the rendered page */
    p {
      color: #4f46e5;
      /* text-decoration: underline; */ /* This style is disabled */
    }
  </style>
</head>
<body>
  <p>Notice that the underline is not shown because it was commented out in the style block.</p>
</body>
</html>`
  },
  {
    id: "css-errors",
    title: { en: "CSS Errors", km: "កំហុសក្នុងកូដ CSS" },
    content: {
      en: `### Handling CSS Errors
Unlike programming languages like JavaScript, CSS does not crash or throw hard errors if you make a mistake. If the browser encounters a syntax error, it simply **ignores** that invalid line and moves to the next declaration.

### Common CSS Mistakes
1. **Missing Semicolons**: Forgetting \`;\` at the end of a declaration causes the next rule to be broken.
2. **Missing Curly Braces**: Missing \`}\` can break all subsequent style rules on the page.
3. **Typo in Property names**: \`colr: red;\` instead of \`color: red;\` will be ignored.
4. **Invalid values**: Setting \`font-size: large-pixels;\` is incorrect and won't render.

> **Tip:** Always use your browser's "Inspect Element" developer tools to debug why your styles are not appearing as expected!`,
      km: `### ការដោះស្រាយកំហុស (CSS Errors)
ខុសពីភាសាសរសេរកម្មវិធីដូចជា JavaScript ភាសា CSS មិនគាំង ឬបង្ហាញកំហុសកូដធ្ងន់ធ្ងរ (Throw hard errors) ឡើយ ប្រសិនបើអ្នកសរសេរខុស។ ប្រសិនបើ Browser ជួបកំហុសទម្រង់កូដ វាគ្រាន់តែ **រំលង** បន្ទាត់ខុសនោះ ហើយបន្តទៅដំណើរការបន្ទាត់បន្ទាប់ប៉ុណ្ណោះ។

### កំហុសទូទៅក្នុង CSS
១. **បាត់សញ្ញាក្បៀសចំនុច (\`;\`)**៖ ការភ្លេចដាក់ \`;\` នៅចុងបញ្ចប់សេចក្តីប្រកាសធ្វើឱ្យច្បាប់បន្ទាប់លែងដំណើរការ។
២. **បាត់វង់ក្រចករកត (\`}\`)**៖ ការបាត់ \`}\` អាចធ្វើឱ្យខូចស្ទីលទាំងអស់នៅបន្ទាប់ពីនោះ។
៣. **វាយខុសឈ្មោះលក្ខណៈសម្បត្តិ**៖ សរសេរ \`colr: red;\` ជំនួសឱ្យ \`color: red;\` នឹងត្រូវរំលងចោល។
៤. **តម្លៃមិនត្រឹមត្រូវ**៖ ការកំណត់ \`font-size: large-pixels;\` គឺខុស និងមិនបង្ហាញផលឡើយ។

> **អនុសាសន៍:** ប្រើប្រាស់ "Inspect Element" របស់ Browser ជានិច្ច ដើម្បីពិនិត្យមើលថាតើហេតុអ្វីបានជាស្ទីលរបស់អ្នកមិនបង្ហាញផលដូចការរំពឹងទុក!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      background-color: #fef08a;
      padding: 20px;
      colr: red; /* Error! Typo in property, will be ignored */
      font-size: 18px; /* Semicolon correct, will render! */
    }
  </style>
</head>
<body>
  <div>
    This box background and padding works, but the text is not red because of a CSS property typo error!
  </div>
</body>
</html>`
  },
  {
    id: "css-colors",
    title: { en: "CSS Colors", km: "ពណ៌នៅក្នុង CSS" },
    content: {
      en: `### CSS Colors (Fundamentals)
CSS supports multiple formats for defining solid colors on the web. The three most common ways are:

1. **Color Names**: Using standard pre-defined names like \`red\`, \`tomato\`, \`dodgerblue\`, or \`lightgray\`.
2. **HEX values**: Specified with a hexadecimal value starting with \`#\`, e.g. \`#ff0000\` (red), \`#4f46e5\` (indigo). Formatted as \`#RRGGBB\`.
3. **RGB values**: Specified with Red, Green, Blue levels from 0 to 255. Formatted as \`rgb(red, green, blue)\`.
   - You can add opacity using **RGBA**: \`rgba(red, green, blue, alpha)\` where alpha is 0.0 (transparent) to 1.0 (opaque).

> **Tip:** HEX and RGBA are the industry standard for modern web application design because they offer millions of combinations!`,
      km: `### ពណ៌នៅក្នុង CSS (មូលដ្ឋាន)
CSS គាំទ្រទម្រង់ជាច្រើនសម្រាប់កំណត់ពណ៌នៅលើគេហទំព័រ។ វិធីទូទៅបំផុតទាំង ៣ គឺ៖

១. **ឈ្មោះពណ៌**៖ ប្រើប្រាស់ឈ្មោះពណ៌ស្ដង់ដារដែលកំណត់ស្រាប់ដូចជា \`red\`, \`tomato\`, \`dodgerblue\`, ឬ \`lightgray\`។
២. **តម្លៃ HEX**៖ បញ្ជាក់ដោយប្រព័ន្ធលេខគោល១៦ ចាប់ផ្តើមដោយ \`#\` ដូចជា \`#ff0000\` (ក្រហម), \`#4f46e5\` (ស្វាយចាស់)។ ទម្រង់គឺ \`#RRGGBB\`។
៣. **តម្លៃ RGB**៖ បញ្ជាក់កម្រិតពណ៌ ក្រហម បៃតង ខៀវ ពី ០ ដល់ ២៥៥។ ទម្រង់គឺ \`rgb(R, G, B)\`។
   - អ្នកអាចបន្ថែមភាពថ្លាដោយប្រើ **RGBA**៖ \`rgba(R, G, B, alpha)\` ដែល alpha ចាប់ពី ០.០ (ថ្លា) ដល់ ១.០ (ដិតពេញ)។

> **អនុសាសន៍:** តម្លៃ HEX និង RGBA គឺជាស្តង់ដារឧស្សាហកម្មសម្រាប់ការរចនាគេហទំព័រទំនើបព្រោះវាផ្ដល់នូវការរួមបញ្ចូលពណ៌រាប់លានជម្រើស!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .color-name { color: dodgerblue; }
    .color-hex { color: #059669; }
    .color-rgba {
      background-color: rgba(79, 70, 229, 0.1);
      color: rgba(79, 70, 229, 1);
      padding: 10px;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <h2 class="color-name">Styled by Color Name (dodgerblue)</h2>
  <h2 class="color-hex">Styled by HEX code (#059669)</h2>
  <div class="color-rgba">Styled by RGBA with transparency level!</div>
</body>
</html>`
  },
  {
    id: "css-backgrounds",
    title: { en: "CSS Backgrounds", km: "ផ្ទៃខាងក្រោយ CSS" },
    content: {
      en: `### CSS Backgrounds (Core)
The CSS background properties are used to define the background effects for elements. Let's learn the basic properties:

- **\`background-color\`**: Sets a solid color background.
- **\`background-image\`**: Specifies an image to use as the background.
  - Usage: \`background-image: url('image.jpg');\`
- **\`background-repeat\`**: Sets if/how the background image repeats. Values: \`repeat\`, \`no-repeat\`, \`repeat-x\`, \`repeat-y\`.
- **\`background-position\`**: Defines the starting position. E.g. \`center\`, \`top left\`, \`bottom right\`.

> **Note:** By default, a background image repeats both horizontally and vertically to cover the entire element space.`,
      km: `### ផ្ទៃខាងក្រោយ (Backgrounds) ក្នុង CSS (មូលដ្ឋាន)
លក្ខណៈសម្បត្តិផ្ទៃខាងក្រោយ CSS ត្រូវបានប្រើដើម្បីកំណត់ឥទ្ធិពលផ្ទៃខាងក្រោយសម្រាប់ធាតុនានា។ ចូរស្វែងយល់ពីលក្ខណៈសម្បត្តិគ្រឹះ៖

- **\`background-color\`**៖ កំណត់ពណ៌ផ្ទៃខាងក្រោយរឹង។
- **\`background-image\`**៖ កំណត់រូបភាពដើម្បីប្រើជាផ្ទៃខាងក្រោយ។
  - របៀបប្រើ៖ \`background-image: url('image.jpg');\`
- **\`background-repeat\`**៖ កំណត់ថាតើរូបភាពផ្ទៃខាងក្រោយគួរលេចឡើងម្តងទៀត (Repeat) ឬអត់។ តម្លៃ៖ \`repeat\`, \`no-repeat\`, \`repeat-x\`, \`repeat-y\`។
- **\`background-position\`**៖ កំណត់ទីតាំងចាប់ផ្តើមរូបភាព។ ឧទាហរណ៍៖ \`center\`, \`top left\`, \`bottom right\`។

> **សម្គាល់:** តាមលំនាំដើម រូបភាពផ្ទៃខាងក្រោយនឹងបង្ហាញលេចឡើងឡើងវិញទាំងផ្ដេក និងបញ្ឈរដើម្បីបំពេញផ្ទៃរបស់ធាតុទាំងមូល។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: #f1f5f9;
    }
    .hero-box {
      background-image: url('https://images.unsplash.com/photo-1557683316-973673baf926?w=600');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover; /* Resize image to cover container */
      color: white;
      padding: 50px;
      text-align: center;
      border-radius: 12px;
    }
  </style>
</head>
<body>
  <div class="hero-box">
    <h1>Hello Beautiful Background!</h1>
    <p>This panel uses a background image styled with no-repeat, center, and cover size.</p>
  </div>
</body>
</html>`
  },
  {
    id: "css-borders",
    title: { en: "CSS Borders", km: "ស៊ុមនៅក្នុង CSS" },
    content: {
      en: `### CSS Borders
The CSS \`border\` properties allow you to specify the style, width, and color of an element's border.

### Core Border Properties
- **\`border-style\`**: Specifies what kind of border to display.
  - Supported values: \`solid\`, \`dashed\`, \`dotted\`, \`double\`, \`none\`.
- **\`border-width\`**: Sets the thickness of the border (e.g. \`2px\`, \`medium\`).
- **\`border-color\`**: Sets the color of the border.
- **Shorthand property**: Combine them in one single line!
  \`\`\`css
  border: 2px solid red;
  \`\`\`

> **Tip:** You can specify individual borders with \`border-top\`, \`border-right\`, \`border-bottom\`, and \`border-left\`!`,
      km: `### ស៊ុម (Borders) នៅក្នុង CSS
លក្ខណៈសម្បត្តិ \`border\` នៅក្នុង CSS អនុញ្ញាតឱ្យអ្នកកំណត់ទម្រង់ (Style) កម្រាស់ (Width) និងពណ៌ (Color) នៃស៊ុមរបស់ធាតុ។

### លក្ខណៈសម្បត្តិស៊ុមគន្លឹះ
- **\`border-style\`**៖ កំណត់ប្រភេទស៊ុមដែលត្រូវបង្ហាញ។
  - តម្លៃគាំទ្រ៖ \`solid\` (បន្ទាត់រឹង), \`dashed\` (បន្ទាត់ដាច់ៗ), \`dotted\` (បន្ទាត់ចំនុចៗ), \`double\` (បន្ទាត់ពីរជាន់), \`none\` (គ្មានស៊ុម)។
- **\`border-width\`**៖ កំណត់កម្រាស់របស់ស៊ុម (ឧទាហរណ៍៖ \`2px\`, \`medium\`)។
- **\`border-color\`**៖ កំណត់ពណ៌របស់ស៊ុម។
- **លក្ខណៈកាត់ (Shorthand)**៖ បញ្ចូលគ្នាក្នុងបន្ទាត់តែមួយ!
  \`\`\`css
  border: 2px solid red;
  \`\`\`

> **អនុសាសន៍:** អ្នកអាចកំណត់ស៊ុមសម្រាប់ផ្នែកនីមួយៗបានដោយប្រើ \`border-top\`, \`border-right\`, \`border-bottom\`, និង \`border-left\`!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .dashed-box {
      border-style: dashed;
      border-width: 3px;
      border-color: #3b82f6;
      padding: 15px;
      margin-bottom: 15px;
    }
    .shorthand-box {
      border-bottom: 4px solid #10b981; /* Only bottom border */
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="dashed-box">This box has a blue dashed border.</div>
  <div class="shorthand-box">This box only has an emerald bottom border!</div>
</body>
</html>`
  },
  {
    id: "css-margins",
    title: { en: "CSS Margins", km: "គម្លាតខាងក្រៅ CSS" },
    content: {
      en: `### CSS Margins
Margins are used to create space **around** elements, outside of any defined borders. 

### Margin Properties
- \`margin-top\`, \`margin-right\`, \`margin-bottom\`, \`margin-left\`
- **Shorthand notation**:
  - \`margin: 20px;\` (All four sides)
  - \`margin: 10px 20px;\` (Top/Bottom, Left/Right)
  - \`margin: 10px 20px 30px 40px;\` (Top, Right, Bottom, Left - Clockwise)

### The Auto Value
You can set the margin property to \`auto\` to horizontally center the element within its container!

> **Note:** Margin collapse happens when top and bottom margins of elements sometimes collapse into a single margin that is equal to the largest of the two margins.`,
      km: `### គម្លាតខាងក្រៅ (Margins) ក្នុង CSS
Margins ត្រូវបានប្រើដើម្បីបង្កើតលំហរ ឬគម្លាត **ជុំវិញខាងក្រៅ** ធាតុ គឺនៅក្រៅស៊ុម (Borders) ទាំងអស់។

### លក្ខណៈសម្បត្តិ Margin
- \`margin-top\`, \`margin-right\`, \`margin-bottom\`, \`margin-left\`
- **ការសរសេរកាត់ (Shorthand)**៖
  - \`margin: 20px;\` (គ្រប់ទាំង ៤ ទិស)
  - \`margin: 10px 20px;\` (លើ/ក្រោម, ឆ្វេង/ស្តាំ)
  - \`margin: 10px 20px 30px 40px;\` (លើ, ស្តាំ, ក្រោម, ឆ្វេង - តាមទ្រនិចនាឡិកា)

### តម្លៃ Auto
អ្នកអាចកំណត់លក្ខណៈសម្បត្តិ margin ទៅជា \`auto\` ដើម្បីរំកិលធាតុឱ្យមកចំកណ្តាលផ្ដេកនៅក្នុងប្រអប់ផ្ទុករបស់វា!

> **សម្គាល់:** Margin collapse កើតឡើងនៅពេល margin លើ និងក្រោមនៃធាតុពីរប៉ះគ្នា ដោយវានឹងច្របាច់ចូលគ្នាបង្កើតជា margin តែមួយដែលយកទំហំធំជាងគេក្នុងចំណោមពីរនោះ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .outer-container {
      background-color: #e2e8f0;
      padding: 10px;
    }
    .centered-box {
      background-color: white;
      width: 200px;
      margin: 20px auto; /* Centered horizontally with auto, 20px top/bottom */
      padding: 15px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="outer-container">
    <div class="centered-box">I am horizontally centered!</div>
  </div>
</body>
</html>`
  },
  {
    id: "css-padding",
    title: { en: "CSS Padding", km: "គម្លាតខាងក្នុង CSS" },
    content: {
      en: `### CSS Padding
Padding is used to create space **inside** elements, between the element content and its border.

### Padding Properties
Like margin, padding has individual side properties and a shorthand property:
- \`padding-top\`, \`padding-right\`, \`padding-bottom\`, \`padding-left\`
- **Shorthand notation**:
  - \`padding: 20px;\` (All four sides)
  - \`padding: 10px 20px;\` (Top/Bottom, Left/Right)
  - \`padding: 10px 20px 30px 40px;\` (Top, Right, Bottom, Left - Clockwise)

> **Tip:** Adding padding increases the total width/height of the element unless you change the box sizing! We will learn about the Box Model next.`,
      km: `### គម្លាតខាងក្នុង (Padding) ក្នុង CSS
Padding ត្រូវបានប្រើដើម្បីបង្កើតលំហរ ឬគម្លាត **ខាងក្នុង** ធាតុ គឺនៅចន្លោះរវាងមាតិកា (Content) និងស៊ុម (Border)។

### លក្ខណៈសម្បត្តិ Padding
ដូចគ្នាទៅនឹង margin ដែរ padding មានលក្ខណៈសម្បត្តិតាមទិសនីមួយៗ និងការសរសេរកាត់៖
- \`padding-top\`, \`padding-right\`, \`padding-bottom\`, \`padding-left\`
- **ការសរសេរកាត់ (Shorthand)**៖
  - \`padding: 20px;\` (គ្រប់ទាំង ៤ ទិស)
  - \`padding: 10px 20px;\` (លើ/ក្រោម, ឆ្វេង/ស្តាំ)
  - \`padding: 10px 20px 30px 40px;\` (លើ, ស្តាំ, ក្រោម, ឆ្វេង - តាមទ្រនិចនាឡិកា)

> **អនុសាសន៍:** ការបន្ថែម padding នឹងបង្កើនទំហំទទឹង/កម្ពស់សរុបរបស់ធាតុ លុះត្រាតែអ្នកប្តូររបៀបគណនាប្រអប់ (Box Sizing)! យើងនឹងរៀនអំពី Box Model នៅបន្ទាប់។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .no-padding {
      background-color: #fca5a5;
      border: 2px solid #b91c1c;
      margin-bottom: 10px;
    }
    .with-padding {
      background-color: #86efac;
      border: 2px solid #15803d;
      padding: 20px 40px; /* 20px top/bottom, 40px left/right */
    }
  </style>
</head>
<body>
  <div class="no-padding">No padding - text touches the border.</div>
  <div class="with-padding">With padding - beautiful breathing space!</div>
</body>
</html>`
  },
  {
    id: "css-height-width",
    title: { en: "CSS Height/Width", km: "កម្ពស់ និងទទឹង CSS" },
    content: {
      en: `### CSS Height and Width
The \`height\` and \`width\` properties are used to set the height and width of an HTML element.

### Height/Width Units
- **Pixels (px)**: Sets absolute size (e.g., \`width: 300px;\`).
- **Percentage (%)**: Sets size relative to parent element (e.g., \`width: 50%;\`).
- **Auto (default)**: The browser calculates the height and width automatically.

### Max-width and Min-height
- \`max-width\`: Prevents an element from becoming wider than a specified limit. Extremely important for responsive design!
- \`min-height\`: Guarantees an element is at least a certain height, but lets it grow if content increases.

> **Note:** The height and width properties do not include padding, borders, or margins!`,
      km: `### កម្ពស់ និងទទឹង (Height & Width) ក្នុង CSS
លក្ខណៈសម្បត្តិ \`height\` និង \`width\` ត្រូវបានប្រើដើម្បីកំណត់កម្ពស់ និងទទឹងរបស់ធាតុ HTML។

### ខ្នាតទទឹង និងកម្ពស់
- **ភីកសែល (px)**៖ កំណត់ទំហំជាក់លាក់ដាច់ខាត (ឧទាហរណ៍៖ \`width: 300px;\`)។
- **ភាគរយ (%)**៖ កំណត់ទំហំធៀបទៅនឹងធាតុឪពុកម្តាយ (ឧទាហរណ៍៖ \`width: 50%;\`)។
- **Auto (លំនាំដើម)**៖ កម្មវិធីរុករក (Browser) គណនាកម្ពស់ និងទទឹងដោយស្វ័យប្រវត្តិ។

### Max-width និង Min-height
- \`max-width\`៖ ការពារកុំឱ្យធាតុមានទទឹងធំជាងដែនកំណត់ដែលបានបញ្ជាក់។ សំខាន់ខ្លាំងណាស់សម្រាប់ការរចនាអេក្រង់ឆ្លើយតប (Responsive design)!
- \`min-height\`៖ ធានាថាធាតុមានកម្ពស់យ៉ាងហោចណាស់ត្រឹមកម្រិតកំណត់ ប៉ុន្តែអនុញ្ញាតឱ្យវារីកធំជាងនេះបានបើមានមាតិកាច្រើន។

> **សម្គាល់:** លក្ខណៈសម្បត្តិទទឹង និងកម្ពស់មិនរាប់បញ្ចូល padding, borders, ឬ margins ឡើយ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .fixed-box {
      width: 250px;
      height: 100px;
      background-color: #cbd5e1;
      margin-bottom: 10px;
    }
    .percent-box {
      width: 80%; /* 80% of screen width */
      max-width: 500px; /* But don't exceed 500px */
      background-color: #3b82f6;
      color: white;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="fixed-box">Fixed: 250px x 100px</div>
  <div class="percent-box">80% width with max-width limit of 500px. Resize window to see it scale!</div>
</body>
</html>`
  },
  {
    id: "css-box-model",
    title: { en: "CSS Box Model", km: "គំរូប្រអប់ CSS" },
    content: {
      en: `### The CSS Box Model
Every HTML element is considered a box by the browser. In CSS, the term "Box Model" is used when talking about design and layout.

The Box Model consists of four distinct layers wrapped around the content:
1. **Content**: The core text/images inside the element.
2. **Padding**: Transparent area around the content (inside the border).
3. **Border**: A border that goes around the padding and content.
4. **Margin**: Transparent area outside the border, separating it from neighbors.

### Crucial Box Sizing Rule
By default, the actual visible width of an element is calculated as:
\`\`\`
Total Width = width + left padding + right padding + left border + right border
\`\`\`
To prevent padding and border from increasing element sizes, always declare:
\`\`\`css
box-sizing: border-box;
\`\`\`

> **Note:** With \`box-sizing: border-box\`, the padding and border are included in the defined width and height.`,
      km: `### គំរូប្រអប់ (Box Model) ក្នុង CSS
រាល់ធាតុ HTML ទាំងអស់ត្រូវបាន Browser ចាត់ទុកជាប្រអប់មួយ។ នៅក្នុង CSS ពាក្យថា "Box Model" ត្រូវបានប្រើប្រាស់នៅពេលនិយាយអំពីការរចនា និងប្លង់រៀបចំ។

Box Model មានបួនស្រទាប់ព័ទ្ធជុំវិញមាតិកា៖
១. **Content (មាតិកា)**៖ ជាអត្ថបទ ឬរូបភាពស្នូលក្នុងធាតុ។
២. **Padding (គម្លាតក្នុង)**៖ ផ្ទៃថ្លាព័ទ្ធជុំវិញមាតិកា (នៅក្នុងស៊ុម)។
៣. **Border (ស៊ុម)**៖ ស៊ុមដែលព័ទ្ធជុំវិញ padding និងមាតិកា។
៤. **Margin (គម្លាតក្រៅ)**៖ ផ្ទៃថ្លានៅខាងក្រៅស៊ុម ជួយបំបែកវាពីប្រអប់ជិតខាង។

### ច្បាប់គណនាទំហំប្រអប់ដ៏សំខាន់
តាមលំនាំដើម ទទឹងជាក់ស្តែងដែលបង្ហាញលើអេក្រង់ត្រូវគណនាដោយ៖
\`\`\`
ទទឹងសរុប = width + padding ឆ្វេងស្តាំ + border ឆ្វេងស្តាំ
\`\`\`
ដើម្បីការពារកុំឱ្យ padding និង border ធ្វើឱ្យធាតុរីកធំជាងទទឹងដែលអ្នកចង់បាន ត្រូវប្រើប្រាស់៖
\`\`\`css
box-sizing: border-box;
\`\`\`

> **សម្គាល់:** នៅពេលប្រើ \`box-sizing: border-box\` នោះ padding និង border នឹងត្រូវបានរួមបញ្ចូលក្នុងកម្ពស់ និងទទឹងដែលបានកំណត់ស្រាប់ជាស្រេច។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .standard-box {
      width: 300px;
      padding: 30px;
      border: 10px solid #ef4444;
      margin: 20px;
      background-color: #fee2e2;
      /* Actual rendered width: 300 + 30*2 + 10*2 = 380px! */
    }
    
    .border-box {
      box-sizing: border-box;
      width: 300px;
      padding: 30px;
      border: 10px solid #10b981;
      margin: 20px;
      background-color: #d1fae5;
      /* Actual rendered width is exactly 300px! */
    }
  </style>
</head>
<body>
  <div class="standard-box">Default: Content-box. Rendered bigger than 300px!</div>
  <div class="border-box">Modern: Border-box. Rendered exactly 300px wide!</div>
</body>
</html>`
  },
  {
    id: "css-outline",
    title: { en: "CSS Outline", km: "បន្ទាត់ក្រៅ CSS" },
    content: {
      en: `### CSS Outline
An outline is a line drawn **outside** the border of elements. It is used to make the element "stand out".

### Differences Between Outline and Border
1. Outline does **not** take up space in the Box Model. It does not affect the layout or size of other elements.
2. Outline is drawn outside the element's border.
3. Outlines can't be set on individual sides (e.g. no outline-left; it's always on all sides).

### Outline Properties
- \`outline-style\`: \`solid\`, \`dashed\`, \`dotted\`, \`double\`.
- \`outline-width\`: thickness (e.g., \`3px\`).
- \`outline-color\`: outline color.
- \`outline-offset\`: Adds space between an outline and the edge/border of an element.

> **Tip:** Outline is extremely useful for accessibility, helping keyboard users see which interactive element currently has focus!`,
      km: `### បន្ទាត់ក្រៅ (Outline) ក្នុង CSS
Outline គឺជាខ្សែបន្ទាត់ដែលគូស **នៅខាងក្រៅ** ស៊ុម (Border) នៃធាតុ។ វាត្រូវបានប្រើដើម្បីធ្វើឱ្យធាតុ "លេចធ្លោ"។

### ភាពខុសគ្នារវាង Outline និង Border
១. Outline **មិន** យកកន្លែង ឬផ្ទៃនៅក្នុង Box Model ឡើយ។ វាមិនប៉ះពាល់ដល់ការរៀបចំប្លង់ ឬទំហំនៃធាតុផ្សេងទៀតទេ។
២. Outline ត្រូវបានគូសនៅខាងក្រៅស៊ុមរបស់ធាតុជានិច្ច។
៣. Outline មិនអាចកំណត់តាមទិសដាច់ដោយឡែកបានទេ (គ្មានលក្ខណៈសម្បត្តិ outline-left ឡើយ គឺវាបង្ហាញគ្រប់ជ្រុងជានិច្ច)។

### លក្ខណៈសម្បត្តិ Outline
- \`outline-style\`៖ \`solid\`, \`dashed\`, \`dotted\`, \`double\`។
- \`outline-width\`៖ កម្រាស់ (ឧទាហរណ៍៖ \`3px\`)។
- \`outline-color\`៖ ពណ៌របស់បន្ទាត់។
- \`outline-offset\`៖ បន្ថែមគម្លាតរវាង outline និងស៊ុមរបស់ធាតុ។

> **អនុសាសន៍:** Outline គឺមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ភាពងាយស្រួលប្រើប្រាស់ (Accessibility) ដោយជួយឱ្យអ្នកប្រើប្រាស់ក្តារចុចមើលឃើញថាធាតុណាដែលកំពុងត្រូវបានជ្រើសរើស (Focus)!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .outline-demo {
      border: 2px solid #000;
      padding: 20px;
      margin: 30px;
      background-color: #f8fafc;
      outline-style: solid;
      outline-color: #ef4444;
      outline-width: 4px;
      outline-offset: 10px; /* Creates 10px gap between border and outline */
    }
  </style>
</head>
<body>
  <div class="outline-demo">
    This box has a black border, a red outline, and an offset spacing of 10px in between!
  </div>
</body>
</html>`
  }
];
