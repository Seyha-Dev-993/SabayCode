import { Lesson } from '../types';

export const cssLessonsPart2: Lesson[] = [
  {
    id: "css-text",
    title: { en: "CSS Text", km: "ការតុបតែងអត្ថបទ CSS" },
    content: {
      en: `### CSS Text Styling
CSS provides a large set of properties to style, format, and align text.

### Key Text Properties
- **\`color\`**: Sets the text color.
- **\`text-align\`**: Aligns text horizontally. Values: \`left\`, \`right\`, \`center\`, \`justify\`.
- **\`text-decoration\`**: Adds line accents. Values: \`none\`, \`underline\`, \`line-through\`. (Use \`none\` to remove underlines from hyperlinks!)
- **\`text-transform\`**: Changes case. Values: \`uppercase\`, \`lowercase\`, \`capitalize\`.
- **\`letter-spacing\`** & **\`line-height\`**: Adjusts letter and line spacing.

> **Tip:** Good \`line-height\` (e.g. \`1.6\`) is critical for readable paragraphs!`,
      km: `### ការតុបតែងអត្ថបទ (Text) ក្នុង CSS
CSS ផ្តល់នូវលក្ខណៈសម្បត្តិជាច្រើនសម្រាប់តុបតែង រៀបចំទ្រង់ទ្រាយ និងតម្រឹមអត្ថបទ។

### លក្ខណៈសម្បត្តិអត្ថបទគន្លឹះ
- **\`color\`**៖ កំណត់ពណ៌អត្ថបទ។
- **\`text-align\`**៖ តម្រឹមអត្ថបទផ្ដេក។ តម្លៃ៖ \`left\`, \`right\`, \`center\`, \`justify\`។
- **\`text-decoration\`**៖ បន្ថែមខ្សែបន្ទាត់លម្អ។ តម្លៃ៖ \`none\`, \`underline\` (គូសបន្ទាត់ក្រោម), \`line-through\` (បន្ទាត់ឆូតចំកណ្តាល)។ (ប្រើ \`none\` ដើម្បីលុបបន្ទាត់ក្រោមតំណភ្ជាប់!)
- **\`text-transform\`**៖ ផ្លាស់ប្តូរទម្រង់អក្សរតូច-ធំ។ តម្លៃ៖ \`uppercase\`, \`lowercase\`, \`capitalize\`។
- **\`letter-spacing\`** និង **\`line-height\`**៖ កែតម្រូវគម្លាតអក្សរ និងគម្លាតបន្ទាត់ (កម្ពស់ជួរដេក)។

> **អនុសាសន៍:** កម្ពស់ជួរដេក (\`line-height\`) ដ៏ល្អ (ដូចជា \`1.6\`) គឺសំខាន់ខ្លាំងណាស់ក្នុងការជួយឱ្យកថាខណ្ឌងាយស្រួលអាន!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      text-align: center;
      text-transform: uppercase;
      color: #3b82f6;
      letter-spacing: 2px;
    }
    p {
      text-align: justify;
      line-height: 1.8;
      text-decoration: underline;
      text-decoration-color: #f43f5e;
    }
  </style>
</head>
<body>
  <h1>Styled Heading</h1>
  <p>This paragraph text is styled with a custom line-height of 1.8 to give it nice spacing, aligned using justify, and underlined with a beautiful rose color decoration.</p>
</body>
</html>`
  },
  {
    id: "css-fonts",
    title: { en: "CSS Fonts", km: "ពុម្ពអក្សរនៅក្នុង CSS" },
    content: {
      en: `### CSS Fonts
Selecting the right font is extremely important for a web page's design.

### Core Font Properties
- **\`font-family\`**: Sets the font of the text. Standard practice is to provide fallbacks (e.g. \`font-family: Arial, Helvetica, sans-serif;\`).
- **\`font-size\`**: Sets the size of the text. Common units: \`px\`, \`em\`, \`rem\`.
- **\`font-weight\`**: Sets text thickness. Values: \`normal\`, \`bold\`, or numbers like \`400\`, \`700\`.
- **\`font-style\`**: Sets style (e.g. \`italic\`).

> **Note:** Web Safe Fonts like Arial, Georgia, or Times New Roman are universally installed on almost all devices.`,
      km: `### ពុម្ពអក្សរ (Fonts) នៅក្នុង CSS
ការជ្រើសរើសពុម្ពអក្សរដែលត្រឹមត្រូវ គឺមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ការរចនាគេហទំព័រ។

### លក្ខណៈសម្បត្តិពុម្ពអក្សរគន្លឹះ
- **\`font-family\`**៖ កំណត់ពុម្ពអក្សរ។ ទម្លាប់ល្អគឺត្រូវផ្តល់ពុម្ពអក្សរជំនួស (Fallbacks) ជានិច្ច (ឧទាហរណ៍៖ \`font-family: Arial, Helvetica, sans-serif;\`)។
- **\`font-size\`**៖ កំណត់ទំហំអក្សរ។ ខ្នាតទូទៅ៖ \`px\`, \`em\`, \`rem\`។
- **\`font-weight\`**៖ កំណត់កម្រាស់អក្សរ (ដិត)។ តម្លៃ៖ \`normal\`, \`bold\` ឬជាលេខដូចជា \`400\`, \`700\`។
- **\`font-style\`**៖ កំណត់ទម្រង់អក្សរទ្រេត (ដូចជា \`italic\`)។

> **សម្គាល់:** ពុម្ពអក្សរសុវត្ថិភាពគេហទំព័រ (Web Safe Fonts) ដូចជា Arial, Georgia, ឬ Times New Roman ត្រូវបានដំឡើងជាសកលនៅលើឧបករណ៍ស្ទើរតែទាំងអស់។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .serif-text {
      font-family: Georgia, serif;
      font-size: 20px;
      font-style: italic;
    }
    .sans-text {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 1rem;
      font-weight: 700; /* Bold */
    }
  </style>
</head>
<body>
  <p class="serif-text">This paragraph is rendered with beautiful classic Georgia Serif Font.</p>
  <p class="sans-text">This paragraph is rendered with bold modern Helvetica/Sans-Serif Font.</p>
</body>
</html>`
  },
  {
    id: "css-icons",
    title: { en: "CSS Icons", km: "រូបតំណាងក្នុង CSS" },
    content: {
      en: `### CSS Icons
To add icons to a webpage, you can use icon libraries like Lucide, Font Awesome, Google Icons, or Bootstrap Icons. These library icons are treated like font characters in CSS!

This means you can easily customize them using:
- \`color\`
- \`font-size\`
- \`text-shadow\`

> **Tip:** Scalable Vector Graphics (SVG) are the modern way to render pixel-perfect icons that scale beautifully to any screen resolution without becoming blurry!`,
      km: `### រូបតំណាង (Icons) ក្នុង CSS
ដើម្បីបន្ថែមរូបតំណាង (Icons) ទៅកាន់គេហទំព័រ អ្នកអាចប្រើប្រាស់បណ្ណាល័យរូបតំណាងល្បីៗដូចជា Lucide, Font Awesome, Google Icons ឬ Bootstrap Icons។ រូបតំណាងទាំងនេះត្រូវបានចាត់ទុកដូចជាតួអក្សរនៅក្នុង CSS!

នេះមានន័យថាអ្នកអាចកំណត់រូបរាងរបស់ពួកវាបានយ៉ាងងាយស្រួលដោយប្រើ៖
- \`color\` (ពណ៌)
- \`font-size\` (ទំហំ)
- \`text-shadow\` (ស្រមោលអត្ថបទ)

> **អនុសាសន៍:** រូបភាពវ៉ិចទ័រ SVG (Scalable Vector Graphics) គឺជាវិធីសាស្ត្រទំនើបបំផុតក្នុងការបង្ហាញរូបតំណាងដែលច្បាស់ល្អឥតខ្ចោះនៅលើគ្រប់ទំហំអេក្រង់ដោយមិនបែករូបភាពឡើយ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <!-- Load font-awesome via CDN for icon display -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <style>
    .icon-list {
      font-size: 40px;
      display: flex;
      gap: 20px;
    }
    .heart-icon { color: #f43f5e; }
    .star-icon { color: #eab308; }
    .cloud-icon { color: #3b82f6; }
  </style>
</head>
<body>
  <h2>Interactive Font Icons</h2>
  <div class="icon-list">
    <i class="fa-solid fa-heart heart-icon"></i>
    <i class="fa-solid fa-star star-icon"></i>
    <i class="fa-solid fa-cloud cloud-icon"></i>
  </div>
</body>
</html>`
  },
  {
    id: "css-links",
    title: { en: "CSS Links", km: "តំណភ្ជាប់នៅក្នុង CSS" },
    content: {
      en: `### CSS Styling Links
Links can be styled with any CSS property (e.g. color, font-family, background). In addition, links can be styled differently depending on what state they are in.

### The Four States of a Link
1. **\`a:link\`**: A normal, unvisited link.
2. **\`a:visited\`**: A link the user has visited.
3. **\`a:hover\`**: A link when the user mouses over it.
4. **\`a:active\`**: A link the moment it is clicked.

### Priority Ordering Rule
When styling link states, you **must** follow this strict ordering rule:
- \`a:hover\` MUST come after \`a:link\` and \`a:visited\`
- \`a:active\` MUST come after \`a:hover\`

> **Note:** Common design patterns remove underlines using \`text-decoration: none\` and restore it only on \`:hover\` to keep the interface clean!`,
      km: `### ការតុបតែងតំណភ្ជាប់ (Links) ក្នុង CSS
តំណភ្ជាប់ (Links) អាចត្រូវបានតុបតែងដោយប្រើលក្ខណៈសម្បត្តិ CSS ណាមួយក៏បាន (ដូចជា ពណ៌ ហ្វុន ឬផ្ទៃខាងក្រោយ)។ លើសពីនេះទៅទៀត តំណភ្ជាប់អាចត្រូវបានរចនាប្លែកៗគ្នាទៅតាមស្ថានភាព (States) របស់វា។

### ស្ថានភាពទាំង ៤ នៃតំណភ្ជាប់
១. **\`a:link\`**៖ តំណភ្ជាប់ធម្មតាដែលមិនទាន់ត្រូវបានចុច។
២. **\`a:visited\`**៖ តំណភ្ជាប់ដែលអ្នកប្រើប្រាស់ធ្លាប់បានចុចរួចហើយ។
៣. **\`a:hover\`**៖ តំណភ្ជាប់នៅពេលអ្នកប្រើប្រាស់ដាក់ម៉ៅស៍ពីលើ (Hover)។
៤. **\`a:active\`**៖ តំណភ្ជាប់នៅខណៈពេលដែលកំពុងចុចចុះក្រោម។

### ច្បាប់លំដាប់អាទិភាពគន្លឹះ
នៅពេលសរសេរស្ទីលស្ថានភាពតំណភ្ជាប់ អ្នក**ត្រូវតែ**អនុវត្តតាមលំដាប់លំដោយយ៉ាងម៉ត់ចត់៖
- \`a:hover\` ត្រូវតែសរសេរនៅបន្ទាប់ពី \`a:link\` និង \`a:visited\`
- \`a:active\` ត្រូវតែសរសេរនៅបន្ទាប់ពី \`a:hover\`

> **សម្គាល់:** ការរចនាទូទៅចូលចិត្តលុបបន្ទាត់ក្រោមដោយប្រើ \`text-decoration: none\` និងបង្ហាញបន្ទាត់ក្រោមវិញតែនៅពេលដាក់ម៉ៅស៍ពីលើ (\`:hover\`) ដើម្បីរក្សាគេហទំព័រឱ្យស្អាតនិងមានរបៀបរៀបរយ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    a:link {
      color: #4f46e5;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;
    }
    a:visited {
      color: #7c3aed;
    }
    a:hover {
      color: #2563eb;
      text-decoration: underline;
    }
    a:active {
      color: #ef4444;
    }
  </style>
</head>
<body>
  <p>Learn more about coding at <a href="https://example.com" target="_blank">My Website Link</a>.</p>
</body>
</html>`
  },
  {
    id: "css-lists",
    title: { en: "CSS Lists", km: "បញ្ជីរាយនាមក្នុង CSS" },
    content: {
      en: `### CSS Lists
In HTML, there are two main types of lists: unordered lists (\`<ul>\`) and ordered lists (\`<ol>\`). CSS list properties allow you to style and position these markers.

### Main List Properties
- **\`list-style-type\`**: Specifies the type of list-item marker. Values: \`circle\`, \`square\`, \`decimal\`, \`roman\`, or \`none\` (to remove bullets completely).
- **\`list-style-position\`**: Specifies where markers are drawn. Values: \`inside\`, \`outside\`.
- **\`list-style-image\`**: Replaces the list item marker with a custom image!

> **Tip:** Removing markers with \`list-style: none\` is standard when building horizontal navigation headers using lists!`,
      km: `### បញ្ជីរាយនាម (Lists) ក្នុង CSS
នៅក្នុង HTML មានបញ្ជីពីរប្រភេទគឺ៖ គ្មានលំដាប់ (\`<ul>\`) និងមានលំដាប់ (\`<ol>\`)។ លក្ខណៈសម្បត្តិបញ្ជីរបស់ CSS អនុញ្ញាតឱ្យអ្នករចនា និងរៀបចំទីតាំងនៃសញ្ញាសម្គាល់បញ្ជីទាំងនេះ។

### លក្ខណៈសម្បត្តិបញ្ជីសំខាន់ៗ
- **\`list-style-type\`**៖ កំណត់ប្រភេទសញ្ញាសម្គាល់បញ្ជី។ តម្លៃ៖ \`circle\` (រង្វង់), \`square\` (ការ៉េ), \`decimal\` (លេខរៀង), \`roman\` (លេខរ៉ូម៉ាំង) ឬ \`none\` (លុបសញ្ញាសម្គាល់ចេញទាំងស្រុង)។
- **\`list-style-position\`**៖ កំណត់ទីតាំងបញ្ជី។ តម្លៃ៖ \`inside\` (ខាងក្នុង), \`outside\` (ខាងក្រៅ)។
- **\`list-style-image\`**៖ ជំនួសសញ្ញាសម្គាល់បញ្ជីដោយប្រើរូបភាពផ្ទាល់ខ្លួន!

> **អនុសាសន៍:** ការលុបសញ្ញាសម្គាល់បញ្ជីដោយប្រើ \`list-style: none\` គឺជាស្តង់ដារនៅពេលបង្កើតរបារម៉ឺនុយផ្ដេក (Navigation Bars) ដោយប្រើប្រាស់បញ្ជី!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .square-list {
      list-style-type: square;
    }
    .custom-navigation-list {
      list-style-type: none; /* No bullets */
      padding: 0;
      margin: 0;
      display: flex;
      gap: 15px;
      background: #e2e8f0;
      padding: 10px;
    }
  </style>
</head>
<body>
  <h3>Shopping List:</h3>
  <ul class="square-list">
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
  </ul>
  
  <h3>Nav Menu mockup:</h3>
  <ul class="custom-navigation-list">
    <li>Home</li>
    <li>Lessons</li>
    <li>Sandbox</li>
  </ul>
</body>
</html>`
  },
  {
    id: "css-tables",
    title: { en: "CSS Tables", km: "តារាងនៅក្នុង CSS" },
    content: {
      en: `### CSS Tables
By default, standard HTML tables have no visible borders and look very plain. CSS table properties help style clean and professional data tables.

### Crucial Table Properties
- **\`border-collapse\`**: Collapses cell borders into a single border. Standard is \`border-collapse: collapse;\` (highly recommended!).
- **\`padding\`**: Adds spacing inside cells (\`<th>\`, \`<td>\`) for readability.
- **\`text-align\`** & **\`vertical-align\`**: Aligns text within cells.
- **Zebra Striping**: Use pseudo-class \`:nth-child(even)\` to apply background color to alternate rows.

> **Tip:** Adding hover effects to rows makes reading tabular data incredibly intuitive for the eyes!`,
      km: `### តារាង (Tables) នៅក្នុង CSS
តាមលំនាំដើម តារាង HTML មិនមានស៊ុម និងមើលទៅសាមញ្ញពេកឡើយ។ លក្ខណៈសម្បត្តិរបស់ CSS ជួយបង្កើតតារាងបង្ហាញទិន្នន័យបានស្អាត និងមានរបៀបរៀបរយជាអាជីព។

### លក្ខណៈសម្បត្តិតារាងសំខាន់ៗ
- **\`border-collapse\`**៖ បង្រួមស៊ុមនៃប្រអប់ក្រឡានីមួយៗឱ្យមកជាស៊ុមរួមតែមួយ។ ស្ដង់ដារគឺ \`border-collapse: collapse;\` (ណែនាំយ៉ាងខ្លាំង!)។
- **\`padding\`**៖ បន្ថែមគម្លាតខាងក្នុងក្រឡា (\`<th>\`, \`<td>\`) ដើម្បីឱ្យងាយអាន។
- **\`text-align\`** និង **\`vertical-align\`**៖ តម្រឹមអត្ថបទក្នុងក្រឡា។
- **Zebra Striping (ឆ្នូតសេះបង្កង់)**៖ ប្រើប្រាស់ \`:nth-child(even)\` ដើម្បីដាក់ពណ៌ផ្ទៃឆ្លាស់គ្នាលើជួរដេក។

> **អនុសាសន៍:** ការបន្ថែមចលនាឆ្លើយតប (Hover) លើជួរដេកជួយឱ្យភ្នែកអានទិន្នន័យតារាងកាន់តែងាយស្រួល និងរហ័ស!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    table {
      width: 100%;
      border-collapse: collapse; /* Merges adjacent borders */
      font-family: sans-serif;
    }
    th, td {
      border: 1px solid #cbd5e1;
      padding: 12px;
      text-align: left;
    }
    th {
      background-color: #4f46e5;
      color: white;
    }
    tr:nth-child(even) {
      background-color: #f8fafc; /* Zebra striping */
    }
    tr:hover {
      background-color: #eff6ff; /* Hover effect */
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <th>Course Name</th>
      <th>Duration</th>
    </tr>
    <tr>
      <td>HTML5 Basics</td>
      <td>4 Hours</td>
    </tr>
    <tr>
      <td>CSS3 Advanced</td>
      <td>5 Hours</td>
    </tr>
    <tr>
      <td>JavaScript Pro</td>
      <td>6 Hours</td>
    </tr>
  </table>
</body>
</html>`
  },
  {
    id: "css-display",
    title: { en: "CSS Display", km: "ការបង្ហាញធាតុ CSS (Display)" },
    content: {
      en: `### The CSS Display Property
The \`display\` property is the most important CSS property for controlling layout. It specifies if/how an element is displayed on the screen.

### Common Display Values
- **\`block\`**: Takes up the full width available and starts on a new line (e.g. \`<div>\`, \`<p>\`, \`<h1>\`).
- **\`inline\`**: Takes up only as much width as necessary, and does not start on a new line (e.g. \`<span>\`, \`<a>\`). Width and height cannot be set!
- **\`inline-block\`**: Behaves like an inline element, but allows you to set width and height!
- **\`none\`**: Completely hides the element from the page (it will not take up any space).

> **Tip:** To hide an element but keep its physical space layout on the page, use \`visibility: hidden;\` instead of \`display: none;\`!`,
      km: `### លក្ខណៈសម្បត្តិ CSS Display
លក្ខណៈសម្បត្តិ \`display\` គឺជាផ្នែកសំខាន់បំផុតរបស់ CSS ក្នុងការគ្រប់គ្រងប្លង់។ វាបញ្ជាក់អំពីរបៀបបង្ហាញធាតុនៅលើអេក្រង់។

### តម្លៃ Display ទូទៅ
- **\`block\`**៖ យកទទឹងអេក្រង់ពេញលេញ និងចាប់ផ្តើមនៅលើបន្ទាត់ថ្មីជានិច្ច (ដូចជា \`<div>\`, \`<p>\`, \`<h1>\`)។
- **\`inline\`**៖ យកទទឹងទៅតាមតម្រូវការជាក់ស្តែង និងមិនចាប់ផ្តើមបន្ទាត់ថ្មីទេ (ដូចជា \`<span>\`, \`<a>\`)។ មិនអាចកំណត់កម្ពស់ និងទទឹងបានឡើយ!
- **\`inline-block\`**៖ បង្ហាញជាជួរដូច inline ប៉ុន្តែអនុញ្ញាតឱ្យអ្នកកំណត់ទទឹង និងកម្ពស់បាន!
- **\`none\`**៖ លាក់ធាតុទាំងស្រុងពីគេហទំព័រ (វានឹងមិនយកកន្លែង ឬផ្ទៃលើអេក្រង់ទាល់តែសោះ)។

> **អនុសាសន៍:** ដើម្បីលាក់ធាតុ ប៉ុន្តែរក្សាកន្លែងលំហរបស់វានៅដដែលលើអេក្រង់ ត្រូវប្រើប្រាស់ \`visibility: hidden;\` ជំនួសឱ្យ \`display: none;\`!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .inline-span {
      display: inline;
      background-color: #fbcfe8;
      padding: 10px; /* Width and height ignored in inline */
      width: 200px;
    }
    .inline-block-span {
      display: inline-block;
      background-color: #86efac;
      padding: 10px;
      width: 200px; /* Width respected! */
    }
  </style>
</head>
<body>
  <span class="inline-span">Inline span (width ignored)</span>
  <span class="inline-block-span">Inline-Block span (width respected!)</span>
</body>
</html>`
  },
  {
    id: "css-max-width",
    title: { en: "CSS Max-width", km: "ទទឹងអតិបរមា CSS" },
    content: {
      en: `### CSS Max-width
Setting \`width\` as a fixed size (like \`500px\`) causes elements to break horizontal scrollbars on smaller smartphone screens.

### Using \`max-width\`
The \`max-width\` property is used to set the maximum width of an element. It improves the browser's handling of small windows:
- If the viewport is larger than \`500px\`, the width will be exactly \`500px\`.
- If the viewport is smaller than \`500px\`, the element width automatically adapts to fit the screen.

> **Tip:** Combining \`width: 100%\` with a \`max-width\` property ensures beautiful, fully responsive elements on any device!`,
      km: `### ទទឹងអតិបរមា (Max-width) ក្នុង CSS
ការកំណត់ \`width\` ជាទំហំថេរ (ដូចជា \`500px\`) ធ្វើឱ្យធាតុធ្លាយចេញពីអេក្រង់ទូរស័ព្ទតូចៗ និងបង្កើតឱ្យមានរបាររំកិលផ្ដេកដែលមើលទៅមិនស្អាតឡើយ។

### ការប្រើប្រាស់ \`max-width\`
លក្ខណៈសម្បត្តិ \`max-width\` ត្រូវបានប្រើដើម្បីកំណត់ទទឹងអតិបរមារបស់ធាតុ។ វាធ្វើឱ្យការបង្ហាញលើអេក្រង់តូចៗមានភាពល្អប្រសើរ៖
- ប្រសិនបើអេក្រង់ធំជាង \`500px\` ទទឹងរបស់ធាតុនឹងមានទំហំគត់ \`500px\`។
- ប្រសិនបើអេក្រង់តូចជាង \`500px\` ទទឹងរបស់ធាតុនឹងរួមតូចដោយស្វ័យប្រវត្តិតាមទំហំអេក្រង់។

> **អនុសាសន៍:** ការប្រើប្រាស់រួមគ្នារវាង \`width: 100%\` និង \`max-width\` ធានាបាននូវការបង្ហាញប្លង់ឆ្លើយតបដ៏ស្រស់ស្អាត (Responsive) នៅលើគ្រប់ឧបករណ៍ទាំងអស់!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .fixed-box {
      width: 600px;
      background-color: #fca5a5;
      padding: 15px;
      margin-bottom: 20px;
    }
    
    .responsive-box {
      max-width: 600px;
      width: 100%;
      background-color: #86efac;
      padding: 15px;
    }
  </style>
</head>
<body>
  <div class="fixed-box">I have a fixed width of 600px. If you shrink your preview panel below 600px, I will overflow!</div>
  <div class="responsive-box">I have a max-width of 600px and width of 100%. If you shrink your preview panel, I adapt beautifully!</div>
</body>
</html>`
  },
  {
    id: "css-position",
    title: { en: "CSS Position", km: "ទីតាំងរបស់ធាតុ CSS (Position)" },
    content: {
      en: `### CSS Positioning
The \`position\` property specifies the type of positioning method used for an element.

### Five Positioning Methods
1. **\`static\`** (Default): Elements render in order according to the normal document flow. Offset properties (top, bottom, left, right) have NO effect.
2. **\`relative\`**: Element is positioned relative to its normal static position.
3. **\`fixed\`**: Element is positioned relative to the browser viewport. It stays in the exact same place even when scrolling!
4. **\`absolute\`**: Element is positioned relative to its nearest positioned ancestor (instead of viewport).
5. **\`sticky\`**: Element alternates between relative and fixed depending on the scroll position.

> **Note:** An element is "positioned" if its position is anything other than \`static\`.`,
      km: `### ការកំណត់ទីតាំង (Position) ក្នុង CSS
លក្ខណៈសម្បត្តិ \`position\` កំណត់វិធីសាស្ត្រក្នុងការរៀបចំទីតាំងរបស់ធាតុនៅលើគេហទំព័រ។

### វិធីសាស្ត្រកំណត់ទីតាំងទាំង ៥
១. **\`static\`** (លំនាំដើម)៖ ធាតុលេចឡើងតាមលំដាប់លំដោយធម្មតា។ លក្ខណៈសម្បត្តិគម្លាត (top, bottom, left, right) គ្មានឥទ្ធិពលឡើយ។
២. **\`relative\`**៖ ធាតុត្រូវបានកំណត់ទីតាំងប្រៀបធៀបទៅនឹងទីតាំងលំនាំដើមរបស់វា។
៣. **\`fixed\`**៖ ធាតុត្រូវបានកំណត់ទីតាំងប្រៀបធៀបទៅនឹងអេក្រង់របស់ Browser។ វានៅដដែលជានិច្ច ទោះបីជារំកិលអេក្រង់ចុះក្រោមក៏ដោយ!
៤. **\`absolute\`**៖ ធាតុត្រូវបានកំណត់ទីតាំងប្រៀបធៀបទៅនឹងធាតុផ្ទុកជិតបំផុតរបស់វាដែលមានកំណត់ position (មិនមែនធៀបនឹងអេក្រង់ឡើយ)។
៥. **\`sticky\`**៖ ធាតុប្តូររវាង relative និង fixed ដោយផ្អែកលើការរំកិលទំព័រ (Scroll)។

> **សម្គាល់:** ធាតុមួយត្រូវបានចាត់ទុកជា "positioned" កាលណាវាត្រូវបានកំណត់លក្ខណៈសម្បត្តិ position ខុសពី \`static\`។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .parent-box {
      position: relative; /* Anchor for absolute children */
      height: 200px;
      background-color: #f1f5f9;
      border: 2px solid #cbd5e1;
    }
    .absolute-box {
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: #ef4444;
      color: white;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="parent-box">
    This is a Relative Parent box.
    <div class="absolute-box">I am Absolute (top: 20px, right: 20px)</div>
  </div>
</body>
</html>`
  },
  {
    id: "css-position-offsets",
    title: { en: "CSS Position Offsets", km: "គម្លាតទីតាំង CSS (Offsets)" },
    content: {
      en: `### CSS Positioning Offsets
To move elements that are "positioned" (relative, absolute, fixed, sticky), you use the following offset properties:

- **\`top\`**: Moves the element down from the top boundary.
- **\`bottom\`**: Moves the element up from the bottom boundary.
- **\`left\`**: Moves the element right from the left boundary.
- **\`right\`**: Moves the element left from the right boundary.

### Values Allowed
- Pixels (\`10px\`), percentage (\`50%\`), or \`auto\`.

> **Note:** These properties will NOT work on statically positioned elements (default HTML elements with \`position: static\`)!`,
      km: `### គម្លាតទីតាំង (Position Offsets) ក្នុង CSS
ដើម្បីផ្លាស់ទីធាតុដែលត្រូវបានកំណត់ទីតាំង (relative, absolute, fixed, sticky) អ្នកត្រូវប្រើលក្ខណៈសម្បត្តិគម្លាតទីតាំងដូចខាងក្រោម៖

- **\`top\`**៖ រំកិលធាតុចុះក្រោមពីព្រំដែនខាងលើ។
- **\`bottom\`**៖ រំកិលធាតុឡើងលើពីព្រំដែនខាងក្រោម។
- **\`left\`**៖ រំកិលធាតុទៅស្តាំពីព្រំដែនខាងឆ្វេង។
- **\`right\`**៖ រំកិលធាតុទៅឆ្វេងពីព្រំដែនខាងស្តាំ។

### តម្លៃដែលអាចប្រើប្រាស់បាន
- ភីកសែល (\`10px\`), ភាគរយ (\`50%\`), ឬ \`auto\`។

> **សម្គាល់:** លក្ខណៈសម្បត្តិគម្លាតទាំងនេះនឹងគ្មានឥទ្ធិពលទាល់តែសោះទៅលើធាតុដែលស្ថិតក្នុងស្ថានភាពលំនាំដើម (\`position: static\`)!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .normal-box {
      background-color: #cbd5e1;
      padding: 10px;
      margin-bottom: 10px;
    }
    .moved-box {
      position: relative;
      left: 50px;
      top: 15px;
      background-color: #3b82f6;
      color: white;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="normal-box">This is a normal box.</div>
  <div class="moved-box">This relative box is shifted 50px left and 15px top!</div>
</body>
</html>`
  },
  {
    id: "css-z-index",
    title: { en: "CSS Z-index", km: "ជម្រៅស្រទាប់ CSS (Z-index)" },
    content: {
      en: `### CSS Z-index (Layering)
When elements are positioned, they can overlap each other. The \`z-index\` property specifies the stack order of an element (which element should be placed in front of, or behind, others).

### Z-index Rules
- An element can have a positive or negative stack order.
- The element with the **larger** z-index number is always rendered in front of elements with smaller numbers.
- **Crucial Rule**: \`z-index\` ONLY works on elements that have a defined position value other than \`static\`!

> **Tip:** If two positioned elements overlap without a z-index specified, the element defined last in the HTML document is shown on top.`,
      km: `### ជម្រៅស្រទាប់ (Z-index) ក្នុង CSS
នៅពេលកំណត់ទីតាំង ធាតុផ្សេងៗអាចត្រួតស៊ីគ្នាបាន។ លក្ខណៈសម្បត្តិ \`z-index\` កំណត់លំដាប់ជម្រៅស្រទាប់នៃធាតុទាំងនោះ (ធាតុណាគួរលេចឡើងនៅពីមុខ ឬនៅពីក្រោយធាតុផ្សេងទៀត)។

### ច្បាប់ Z-index
- ធាតុអាចមានតម្លៃលំដាប់ជម្រៅស្រទាប់ជាវិជ្ជមាន (+) ឬអវិជ្ជមាន (-)។
- ធាតុដែលមានលេខ z-index **ធំជាង** នឹងបង្ហាញនៅខាងមុខគេបង្អស់ជានិច្ច។
- **ច្បាប់ដាច់ខាត**៖ \`z-index\` ដំណើរការបានតែលើធាតុណាដែលត្រូវបានកំណត់ position ខុសពី \`static\` ប៉ុណ្ណោះ!

> **អនុសាសន៍:** ប្រសិនបើធាតុពីរត្រួតស៊ីគ្នាដោយមិនបានកំណត់ z-index ទេ ធាតុណាដែលត្រូវបានសរសេរក្រោយគេនៅក្នុងកូដ HTML នឹងបង្ហាញនៅខាងលើគេជានិច្ច។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      position: absolute;
      padding: 10px;
      color: white;
    }
    .red-box {
      background-color: #ef4444;
      top: 20px;
      left: 20px;
      z-index: 1; /* Sits behind */
    }
    .blue-box {
      background-color: #3b82f6;
      top: 50px;
      left: 50px;
      z-index: 2; /* Sits on top because 2 > 1 */
    }
  </style>
</head>
<body>
  <div class="box red-box">Red (z-index: 1)</div>
  <div class="box blue-box">Blue (z-index: 2)</div>
</body>
</html>`
  },
  {
    id: "css-overflow",
    title: { en: "CSS Overflow", km: "ការគ្រប់គ្រងការធ្លាយមាតិកា CSS" },
    content: {
      en: `### CSS Overflow
The CSS \`overflow\` property controls what happens to content that is too big to fit into an element's specified width/height box area.

### Four Main Overflow Values
1. **\`visible\`** (Default): The overflow content is not clipped. It renders outside the element's box boundary.
2. **\`hidden\`**: The overflow content is clipped and made invisible.
3. **\`scroll\`**: The overflow content is clipped, and the browser adds vertical/horizontal scrollbars to let users read it.
4. **\`auto\`**: Similar to scroll, but adds scrollbars ONLY if the content overflows! (Highly recommended over \`scroll\`).

> **Tip:** You can control overflow horizontally and vertically separately using \`overflow-x\` and \`overflow-y\`!`,
      km: `### ការគ្រប់គ្រងការធ្លាយមាតិកា (Overflow) ក្នុង CSS
លក្ខណៈសម្បត្តិ \`overflow\` គ្រប់គ្រងអ្វីដែលត្រូវកើតឡើងនៅពេលមាតិកាមានទំហំធំពេក មិនអាចផ្ទុកល្មមក្នុងកម្ពស់ ឬទទឹងដែលបានកំណត់របស់ប្រអប់ធាតុ។

### តម្លៃ Overflow ចម្បងទាំង ៤
១. **\`visible\`** (លំនាំដើម)៖ មាតិកាដែលធ្លាយចេញ មិនត្រូវបានកាត់ផ្តាច់ឡើយ គឺវានៅតែបង្ហាញនៅខាងក្រៅព្រំដែនប្រអប់។
២. **\`hidden\`**៖ មាតិកាដែលធ្លាយចេញ នឹងត្រូវកាត់ផ្តាច់ និងលាក់បាត់មិនឱ្យមើលឃើញឡើយ។
៣. **\`scroll\`**៖ មាតិកាដែលធ្លាយចេញ នឹងត្រូវកាត់ផ្តាច់ ប៉ុន្តែ Browser បន្ថែមរបាររំកិល (Scrollbars) ទាំងផ្ដេក និងបញ្ឈរដើម្បីឱ្យរំកិលអានបាន។
៤. **\`auto\`**៖ ប្រហាក់ប្រហែលនឹង scroll ដែរ ប៉ុន្តែវាបន្ថែមរបាររំកិលលុះត្រាតែមាតិកានោះពិតជាធ្លាយចេញប៉ុណ្ណោះ! (ណែនាំឱ្យប្រើប្រាស់ជាង \`scroll\`)។

> **អនុសាសន៍:** អ្នកអាចគ្រប់គ្រងការធ្លាយផ្ដេក និងបញ្ឈរដាច់ដោយឡែកពីគ្នាបានដោយប្រើប្រាស់ \`overflow-x\` និង \`overflow-y\`!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .scroll-box {
      width: 250px;
      height: 120px;
      background-color: #f1f5f9;
      border: 2px solid #cbd5e1;
      overflow: auto; /* Adds scrollbar only if content spills over */
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="scroll-box">
    <h3>Overflow Scroll Box Demo</h3>
    This is some extra long text content that will spill out of this 120px height box. Since the overflow property is set to "auto", you can see a vertical scrollbar appearing on the right, allowing you to scroll this content cleanly without breaking other page designs!
  </div>
</body>
</html>`
  },
  {
    id: "css-float",
    title: { en: "CSS Float", km: "ការបណ្តែតធាតុ CSS (Float)" },
    content: {
      en: `### CSS Float
The \`float\` property is used for positioning and formatting content, for example letting an image float left or right next to an text paragraph block.

### Float Values
- **\`left\`**: The element floats to the left of its container.
- **\`right\`**: The element floats to the right.
- **\`none\`** (Default): The element does not float.

### Clearing Floats (\`clear\`)
When you float elements, subsequent elements will wrap around them. To stop this behavior and start on a fresh new line, use the \`clear\` property!
- Usage: \`clear: both;\`

> **Note:** Float was historically used for full-page website layouts, but modern CSS uses Flexbox and Grid for layout building. Float should now only be used for wrapping text around images!`,
      km: `### ការបណ្តែតធាតុ (Float) ក្នុង CSS
លក្ខណៈសម្បត្តិ \`float\` ត្រូវបានប្រើសម្រាប់កំណត់ទីតាំង និងតម្រឹមទម្រង់មាតិកា ឧទាហរណ៍៖ អនុញ្ញាតឱ្យរូបភាពបណ្ដែតនៅខាងឆ្វេង ឬខាងស្តាំជាប់អត្ថបទកថាខណ្ឌ។

### តម្លៃ Float គន្លឹះ
- **\`left\`**៖ ធាតុបណ្ដែតទៅខាងឆ្វេងនៃប្រអប់ផ្ទុករបស់វា។
- **\`right\`**៖ ធាតុបណ្ដែតទៅខាងស្តាំ។
- **\`none\`** (លំនាំដើម)៖ ធាតុមិនបណ្ដែតឡើយ។

### ការជម្រះការបណ្តែត (Clear)
នៅពេលអ្នកបណ្ដែតធាតុ ធាតុផ្សេងៗបន្ទាប់ពីនោះនឹងហូរមកព័ទ្ធជុំវិញវា។ ដើម្បីបញ្ឈប់សកម្មភាពនេះ និងបន្តចូលបន្ទាត់ថ្មីស្អាត ត្រូវប្រើលក្ខណៈសម្បត្តិ \`clear\`!
- របៀបប្រើ៖ \`clear: both;\`

> **សម្គាល់:** Float ធ្លាប់ត្រូវបានគេប្រើប្រាស់ពីមុនដើម្បីរៀបចំប្លង់គេហទំព័រទាំងមូល ប៉ុន្តែបច្ចុប្បន្ន CSS ប្រើ Flexbox និង Grid ជំនួសវិញ។ float គួរប្រើតែសម្រាប់បណ្ដែតរូបភាពឱ្យអក្សរព័ទ្ធជុំវិញប៉ុណ្ណោះ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .float-img {
      float: left;
      margin-right: 15px;
      border-radius: 8px;
    }
    .clear-box {
      clear: both; /* Clear the float above! */
      background: #cbd5e1;
      padding: 10px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h3>Floating Images</h3>
  <img class="float-img" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=100" alt="laptop" width="100">
  <p>This paragraph wraps around the floated image. The image is floated left, so text starts immediately on the right side of the image, utilizing screen space beautifully.</p>
  
  <div class="clear-box">This box starts on a new line because it cleared the float!</div>
</body>
</html>`
  },
  {
    id: "css-inline-block",
    title: { en: "CSS Inline-block", km: "ការបង្ហាញជួរប្រអប់ CSS" },
    content: {
      en: `### CSS Inline-block
Compared to \`display: inline\`, the major benefit of \`display: inline-block\` is that it allows us to set custom \`width\` and \`height\` on the element!

Also, with \`inline-block\`, the top and bottom margins and paddings are fully respected.

### Compared to \`display: block\`
Compared to \`display: block\`, the major difference is that \`inline-block\` does not force a line break after the element, so multiple elements can sit next to each other on the same line!

> **Tip:** \`inline-block\` is ideal for creating responsive grid lists of buttons, product badges, or photo previews.`,
      km: `### Inline-block ក្នុង CSS
បើប្រៀបធៀបទៅនឹង \`display: inline\` អត្ថប្រយោជន៍ចម្បងរបស់ \`display: inline-block\` គឺវាអនុញ្ញាតឱ្យយើងកំណត់ទទឹង (\`width\`) និងកម្ពស់ (\`height\`) បានតាមចិត្តលើធាតុនោះ!

លើសពីនេះ គម្លាត margin និង padding ទាំងខាងលើ និងខាងក្រោម ត្រូវបានបង្ហាញនិងគណនាយ៉ាងត្រឹមត្រូវ។

### បើធៀបទៅនឹង \`display: block\`
ចំណុចខុសគ្នាធំធៀបនឹង \`display: block\` គឺ \`inline-block\` មិនបង្ខំឱ្យចុះបន្ទាត់ថ្មីបន្ទាប់ពីវាបង្ហាញឡើយ ដូច្នេះធាតុជាច្រើនអាចបង្ហាញតម្រៀបគ្នាក្នុងជួរដេកតែមួយបានយ៉ាងស្អាត!

> **អនុសាសន៍:** \`inline-block\` គឺស័ក្តិសមបំផុតសម្រាប់បង្កើតប៊ូតុងតម្រៀបគ្នា ស្លាកសញ្ញាផលិតផល (Badges) ឬប្រអប់បង្ហាញរូបថតតូចៗ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .grid-item {
      display: inline-block;
      width: 120px;
      height: 80px;
      margin: 10px;
      background-color: #4f46e5;
      color: white;
      text-align: center;
      line-height: 80px; /* Vertically center single line text */
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h3>Display Inline-Block Grid items:</h3>
  <div class="grid-item">Box 1</div>
  <div class="grid-item">Box 2</div>
  <div class="grid-item">Box 3</div>
</body>
</html>`
  },
  {
    id: "css-align",
    title: { en: "CSS Align", km: "ការតម្រឹមធាតុ CSS (Align)" },
    content: {
      en: `### CSS Aligning Elements
Aligning elements is key to creating elegant, balanced page interfaces.

### Centering Elements Horizontally
- **Text Centering**: Set \`text-align: center;\` on the **parent** block container.
- **Block Element Centering**: Set \`margin-left: auto; margin-right: auto;\` and a defined \`width\` on the block element.

### Centering Vertically
- One quick modern way to center text vertically is by setting \`line-height\` equal to the parent container's \`height\`!

> **Tip:** Modern layouts use Flexbox for quick alignment. We will study Flexbox rules in detail later!`,
      km: `### ការតម្រឹមធាតុ (Align) ក្នុង CSS
ការតម្រឹមធាតុឱ្យមានរបៀបរៀបរយ គឺស្គន្លឹះគន្លឹះដើម្បីបង្កើតគេហទំព័រដែលស្អាត និងមានតុល្យភាព។

### ការតម្រឹមធាតុឱ្យមកចំកណ្តាលផ្ដេក
- **តម្រឹមអត្ថបទ**៖ កំណត់ \`text-align: center;\` នៅលើប្រអប់**ឪពុកម្តាយ (Parent)**។
- **តម្រឹមប្រអប់ Block**៖ កំណត់ \`margin-left: auto; margin-right: auto;\` និងទទឹង \`width\` ជាក់លាក់នៅលើធាតុនោះ។

### ការតម្រឹមឱ្យចំកណ្តាលបញ្ឈរ
- វិធីសាស្ត្ររហ័សមួយដើម្បីរំកិលអត្ថបទមួយបន្ទាត់ឱ្យចំកណ្តាលបញ្ឈរ គឺការកំណត់កម្ពស់ជួរដេក \`line-height\` ឱ្យស្មើនឹងកម្ពស់ \`height\` របស់ប្រអប់ផ្ទុកទាំងមូល!

> **អនុសាសន៍:** ប្លង់ទំនើបៗចូលចិត្តប្រើប្រាស់ Flexbox សម្រាប់ការតម្រឹមយ៉ាងរហ័ស។ យើងនឹងសិក្សាលម្អិតអំពី Flexbox នៅមេរៀនបន្តបន្ទាប់!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .center-text-parent {
      text-align: center;
      background-color: #eff6ff;
      padding: 15px;
    }
    
    .center-block-div {
      width: 200px;
      margin: 20px auto; /* 0 top/bottom, auto left/right */
      background-color: #3b82f6;
      color: white;
      padding: 10px;
      text-align: center;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <div class="center-text-parent">
    <h2>I am Centered Heading</h2>
    <p>Both this heading and paragraph are aligned center.</p>
  </div>
  
  <div class="center-block-div">I am a Centered Block Div!</div>
</body>
</html>`
  }
];
