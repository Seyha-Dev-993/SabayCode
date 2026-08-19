import { Lesson } from '../types';

export const cssLessonsPart4: Lesson[] = [
  {
    id: "css-rounded-corners",
    title: { en: "CSS Rounded Corners", km: "ជ្រុងមូលក្នុង CSS" },
    content: {
      en: `### CSS Rounded Corners (border-radius)
The CSS \`border-radius\` property allows you to give elements rounded corners!

### How Border-radius Works
- You can specify values in pixels (e.g. \`border-radius: 12px;\`) or percentages (e.g. \`border-radius: 50%;\` to create perfect circles).
- You can specify individual corner properties as well: \`border-top-left-radius\`, \`border-top-right-radius\`, etc.
- Shorthand syntax for four distinct corners:
  \`\`\`css
  border-radius: 15px 50px 30px 5px;
  \`\`\`

> **Tip:** Adding rounded corners is one of the easiest ways to instantly make a legacy UI feel modern, friendly, and visual!`,
      km: `### ជ្រុងមូល (Rounded Corners) ក្នុង CSS
លក្ខណៈសម្បត្តិ \`border-radius\` នៅក្នុង CSS អនុញ្ញាតឱ្យអ្នកបង្កើតជ្រុងមូលនៅលើប្រអប់ធាតុផ្សេងៗបានយ៉ាងងាយស្រួល!

### របៀបដែល Border-radius ដំណើរការ
- អ្នកអាចកំណត់តម្លៃជាភីកសែល (ដូចជា \`border-radius: 12px;\`) ឬភាគរយ (ដូចជា \`border-radius: 50%;\` ដើម្បីបង្កើតរាងជារង្វង់មូលឥតខ្ចោះ)។
- អ្នកក៏អាចកំណត់ជ្រុងនីមួយៗដាច់ដោយឡែកពីគ្នាបានផងដែរ៖ \`border-top-left-radius\` (ជ្រុងលើឆ្វេង), \`border-top-right-radius\` (ជ្រុងលើស្តាំ)។ល។
- របៀបសរសេរកាត់សម្រាប់ជ្រុងទាំងបួន៖
  \`\`\`css
  border-radius: 15px 50px 30px 5px;
  \`\`\`

> **អនុសាសន៍:** ការបន្ថែមជ្រុងមូលគឺជាវិធីងាយស្រួលបំផុតមួយដើម្បីជួយកែប្រែគេហទំព័របែបបុរាណឱ្យប្រែជាទំនើប ទាក់ទាញ និងស្រស់ស្អាតភ្លាមៗ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .round-box {
      border-radius: 25px;
      background: #4f46e5;
      color: white;
      padding: 20px;
      width: 200px;
      height: 100px;
      text-align: center;
      line-height: 100px; /* Vertically center */
    }
    .circle-box {
      border-radius: 50%; /* Perfect circle */
      background: #10b981;
      color: white;
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
    }
  </style>
</head>
<body>
  <div class="round-box">Rounded: 25px</div>
  <br>
  <div class="circle-box">Circle (50%)</div>
</body>
</html>`
  },
  {
    id: "css-border-images",
    title: { en: "CSS Border Images", km: "រូបភាពស៊ុមក្នុង CSS" },
    content: {
      en: `### CSS Border Images
The \`border-image\` property allows you to specify an image to be used as the border around an element!

The property has three parts:
1. The image source URL (\`border-image-source\`).
2. Where to slice the image (\`border-image-slice\`).
3. Whether to repeat, scale, or stretch the border image (\`border-image-repeat\`).

\`\`\`css
div {
  border: 10px solid transparent;
  border-image: url(border.png) 30 round;
}
\`\`\`

> **Note:** A standard solid fallback border is always recommended in case the image url fails to load!`,
      km: `### រូបភាពស៊ុម (Border Images) ក្នុង CSS
លក្ខណៈសម្បត្តិ \`border-image\` អនុញ្ញាតឱ្យអ្នកកំណត់យករូបភាពមកធ្វើជាស៊ុម (Border) ព័ទ្ធជុំវិញធាតុបាន!

លក្ខណៈសម្បត្តិមានបីផ្នែក៖
១. ប្រភពរូបភាព (\`border-image-source\`)។
២. កន្លែងដែលត្រូវចិត ឬកាត់រូបភាព (\`border-image-slice\`)។
៣. របៀបបង្ហាញរូបភាពស៊ុមដូចជា repeat, scale, ឬ stretch (\`border-image-repeat\`)។

\`\`\`css
div {
  border: 10px solid transparent;
  border-image: url(border.png) 30 round;
}
\`\`\`

> **សម្គាល់:** គួរតែប្រើប្រាស់ស៊ុមធម្មតា (Solid border) ជាជម្រើសជំនួសជានិច្ច ក្រែងលោរូបភាពស៊ុមនោះមិនអាចទាញយកបានពីម៉ាស៊ីនមេ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .border-img-demo {
      border: 15px solid transparent;
      padding: 15px;
      /* Uses standard colorful border slice pattern */
      border-image: url('https://www.w3schools.com/cssref/border.png') 30 round;
    }
  </style>
</head>
<body>
  <div class="border-img-demo">
    This element uses a colorful checkered PNG image as its border framework!
  </div>
</body>
</html>`
  },
  {
    id: "css-backgrounds-advanced",
    title: { en: "CSS Advanced Backgrounds", km: "ផ្ទៃខាងក្រោយកម្រិតខ្ពស់" },
    content: {
      en: `### CSS Advanced Backgrounds
Master multiple overlapping backgrounds and responsive background size properties!

### Multiple Background Images
CSS allows you to add **multiple** background images to an element, layered on top of each other! Separate them with a comma:
\`\`\`css
background-image: url(overlay.png), url(landscape.jpg);
\`\`\`
The first image specified will render on the very top, while subsequent images sit underneath.

### Key Advanced Properties
- **\`background-size\`**: Can be set to \`cover\` (resize to fill element) or \`contain\` (resize to fit entire image completely).
- **\`background-origin\`**: Sets the origin of the background position (\`border-box\`, \`padding-box\`, \`content-box\`).

> **Tip:** Layering semi-transparent gradient overlays on top of background images is a fantastic way to make overlying white text readable!`,
      km: `### ផ្ទៃខាងក្រោយកម្រិតខ្ពស់ (Advanced Backgrounds)
ស្វែងយល់ពីរបៀបរៀបចំរូបភាពផ្ទៃខាងក្រោយច្រើនជាន់ត្រួតគ្នា (Multiple backgrounds) និងគ្រប់គ្រងទំហំឆ្លើយតប!

### រូបភាពផ្ទៃខាងក្រោយច្រើនត្រួតគ្នា
CSS អនុញ្ញាតឱ្យអ្នកបន្ថែមរូបភាពផ្ទៃខាងក្រោយ**ច្រើន**នៅលើធាតុតែមួយ ដោយតម្រៀបត្រួតគ្នាពីលើគ្នា! បំបែកពួកវាដោយប្រើសញ្ញាក្បៀស (Comma)៖
\`\`\`css
background-image: url(overlay.png), url(landscape.jpg);
\`\`\`
រូបភាពដែលបានសរសេរមុនគេនឹងលេចឡើងនៅស្រទាប់ខាងលើគេបង្អស់ ហើយរូបភាពបន្ទាប់នឹងស្ថិតនៅខាងក្រោម។

### លក្ខណៈសម្បត្តិគន្លឹះកម្រិតខ្ពស់
- **\`background-size\`**៖ អាចកំណត់ជា \`cover\` (ពង្រីករូបភាពឱ្យពេញប្រអប់) ឬ \`contain\` (ពង្រីករូបភាពឱ្យឃើញពេញរូបរាងរូបភាព)។
- **\`background-origin\`**៖ កំណត់ចំណុចចាប់ផ្តើមនៃរូបភាពផ្ទៃខាងក្រោយ (\`border-box\`, \`padding-box\`, \`content-box\`)។

> **អនុសាសន៍:** ការដាក់ស្រទាប់ក្រាលពណ៌ជម្រាលថ្លាៗ (Gradient Overlay) ពីលើរូបភាពផ្ទៃខាងក្រោយ គឺជាវិធីដ៏ល្អបំផុតជួយឱ្យអត្ថបទពណ៌សពីលើងាយស្រួលអានជានិច្ច!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .multi-bg {
      /* Layering a gradient overlay and a beautiful laptop background photo */
      background-image: 
        linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
        url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      color: white;
      padding: 80px 20px;
      text-align: center;
      border-radius: 12px;
    }
  </style>
</head>
<body>
  <div class="multi-bg">
    <h1>Readable Overlay Text</h1>
    <p>This text is perfectly readable because of the dark transparent linear-gradient background layer drawn over the image.</p>
  </div>
</body>
</html>`
  },
  {
    id: "css-colors-advanced",
    title: { en: "CSS Advanced Colors", km: "ពណ៌កម្រិតខ្ពស់ក្នុង CSS" },
    content: {
      en: `### CSS Advanced Color Functions
In addition to HEX and RGB, modern CSS introduces powerful color spaces and manipulation functions.

### 1. OKLCH Color Space (\`oklch()\`)
This is the modern developer favorite! It aligns color parameters with human visual perception, preventing sudden saturation and luminance drops.
- Usage: \`color: oklch(luminous chroma hue);\`, e.g. \`oklch(60% 0.15 150);\`.

### 2. Color Mix (\`color-mix()\`)
Blend two colors together inside pure CSS!
- Usage: \`background-color: color-mix(in srgb, blue 30%, red);\`. This creates a color made of 30% blue and 70% red!

> **Tip:** \`color-mix()\` is perfect for building light/dark theme color variations dynamically without duplicating color definitions!`,
      km: `### អនុគមន៍ពណ៌កម្រិតខ្ពស់ (Advanced Colors)
ក្រៅពី HEX និង RGB ភាសា CSS ទំនើបបានណែនាំប្រព័ន្ធពណ៌ថ្មីៗ និងអនុគមន៍គណនាដ៏មានឥទ្ធិពល។

### ១. ប្រព័ន្ធពណ៌ OKLCH (\`oklch()\`)
នេះជាការពេញនិយមបំផុតសម្រាប់អ្នកអភិវឌ្ឍន៍ទំនើប! វាគណនាពណ៌ស្របទៅនឹងការយល់ឃើញភ្នែកមនុស្ស ការពារការធ្លាក់ចុះកម្រិតពន្លឺ និងកម្រិតឆ្អែតពណ៌ដោយចៃដន្យ។
- របៀបប្រើ៖ \`color: oklch(ពន្លឺ កម្រិតពណ៌ ស្រមោលពណ៌);\` ឧទាហរណ៍៖ \`oklch(60% 0.15 150);\`។

### ២. អនុគមន៍លាយពណ៌ (\`color-mix()\`)
លាយពណ៌ពីរចូលគ្នានៅក្នុងកូដ CSS សុទ្ធតែម្តង!
- របៀបប្រើ៖ \`background-color: color-mix(in srgb, blue 30%, red);\`។ វានឹងបង្កើតពណ៌ថ្មីមួយដែលមានផ្ទុកពណ៌ខៀវ ៣០% និងពណ៌ក្រហម ៧០%!

> **អនុសាសន៍:** \`color-mix()\` គឺល្អបំផុតសម្រាប់បង្កើតបំរែបំរួលពណ៌សម្រាប់ Theme ភ្លឺ/ងងឹត (Light/Dark themes) ដោយមិនចាំបាច់សរសេរពណ៌ថ្មីឡើយ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .oklch-card {
      background-color: oklch(62.8% 0.25 29); /* Super vibrant cherry pink */
      color: white;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 15px;
    }
    
    .mix-card {
      /* Mix 40% emerald green with white to get a soft pastel green */
      background-color: color-mix(in srgb, #10b981 40%, white);
      color: #065f46;
      padding: 15px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="oklch-card">Vibrant OKLCH color pink!</div>
  <div class="mix-card">Pastel green mixed on the fly using color-mix()!</div>
</body>
</html>`
  },
  {
    id: "css-gradients",
    title: { en: "CSS Gradients", km: "ពណ៌ជម្រាលក្នុង CSS" },
    content: {
      en: `### CSS Gradients
CSS gradients let you display smooth transitions between two or more specified colors.

There are three types of gradients supported by CSS:
1. **Linear Gradients**: Goes down, up, left, right, or diagonally.
   - Usage: \`background: linear-gradient(direction, color1, color2, ...);\`
2. **Radial Gradients**: Starts at their center point and radiate outward.
   - Usage: \`background: radial-gradient(shape, start-color, ..., end-color);\`
3. **Conic Gradients**: Colors are rotated around a center axis.

> **Tip:** You can specify directions using angles like \`45deg\` or \`180deg\` for beautiful diagonal gradients!`,
      km: `### ពណ៌ជម្រាល (Gradients) ក្នុង CSS
ពណ៌ជម្រាល CSS អនុញ្ញាតឱ្យអ្នកបង្ហាញការផ្លាស់ប្តូរពណ៌ដោយរលូនរវាងពណ៌ពីរ ឬច្រើនដែលបានបញ្ជាក់។

មានបីប្រភេទនៃពណ៌ជម្រាលដែលគាំទ្រដោយ CSS៖
១. **Linear Gradients (ជម្រាលបន្ទាត់ត្រង់)**៖ ផ្លាស់ទីចុះក្រោម, ឡើងលើ, ឆ្វេង, ស្តាំ ឬតាមបន្ទាត់ទ្រេត។
   - របៀបប្រើ៖ \`background: linear-gradient(ទិសដៅ, ពណ៌ទី១, ពណ៌ទី២, ...);\`
២. **Radial Gradients (ជម្រាលរង្វង់មូល)**៖ ចាប់ផ្តើមពីចំណុចកណ្តាលហើយរីកធំទៅខាងក្រៅ។
   - របៀបប្រើ៖ \`background: radial-gradient(រាង, ពណ៌ចាប់ផ្តើម, ..., ពណ៌បញ្ចប់);\`
៣. **Conic Gradients (ជម្រាលរាងកោណ)**៖ ពណ៌វិលជុំវិញចំណុចកណ្តាល។

> **អនុសាសន៍:** អ្នកអាចកំណត់ទិសដៅជម្រាលពណ៌ដោយប្រើមុំជាដឺក្រេដូចជា \`45deg\` ឬ \`180deg\` ដើម្បីបង្កើតពណ៌ជម្រាលទ្រេតដ៏ស្រស់ស្អាត!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .gradient-linear {
      height: 100px;
      background: linear-gradient(135deg, #4f46e5, #06b6d4);
      color: white;
      text-align: center;
      line-height: 100px;
      font-weight: bold;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    
    .gradient-radial {
      height: 100px;
      background: radial-gradient(circle, #fca5a5, #ef4444);
      color: white;
      text-align: center;
      line-height: 100px;
      font-weight: bold;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="gradient-linear">135° Linear Indigo to Cyan Gradient</div>
  <div class="gradient-radial">Radial Circle Gradient</div>
</body>
</html>`
  },
  {
    id: "css-shadows",
    title: { en: "CSS Shadows", km: "ស្រមោលនៅក្នុង CSS" },
    content: {
      en: `### CSS Shadows
Add beautiful, realistic depth to your elements and typography using shadows.

### 1. Box Shadow (\`box-shadow\`)
Applies shadows to HTML container boxes. The syntax is:
\`\`\`css
box-shadow: horizontal-offset vertical-offset blur-radius spread-radius color;
\`\`\`
Example: \`box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1);\`

### 2. Text Shadow (\`text-shadow\`)
Applies shadows directly to text characters:
\`\`\`css
text-shadow: 2px 2px 4px #000000;
\`\`\`

> **Tip:** Multiple overlapping shadows can be defined by separating them with commas. This is the secret to building high-quality realistic modern shadows!`,
      km: `### ស្រមោល (Shadows) នៅក្នុង CSS
បន្ថែមជម្រៅលំហប្រកបដោយភាពប្រាកដនិយម និងស្រស់ស្អាតទៅលើប្រអប់ និងអត្ថបទដោយប្រើប្រាស់ស្រមោល។

### ១. ស្រមោលប្រអប់ (\`box-shadow\`)
ដាក់ស្រមោលទៅលើប្រអប់ផ្ទុកមាតិកា។ ទម្រង់សរសេរគឺ៖
\`\`\`css
box-shadow: គម្លាតផ្ដេក គម្លាតបញ្ឈរ កម្រិតព្រិល កម្រិតរីកពណ៌ ពណ៌;
\`\`\`
ឧទាហរណ៍៖ \`box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1);\`

### ២. ស្រមោលអត្ថបទ (\`text-shadow\`)
ដាក់ស្រមោលដោយផ្ទាល់ទៅលើតួអក្សរ៖
\`\`\`css
text-shadow: 2px 2px 4px #000000;
\`\`\`

> **អនុសាសន៍:** អ្នកអាចកំណត់ស្រមោលច្រើនត្រួតគ្នាបានដោយគ្រាន់តែប្រើសញ្ញាក្បៀសបំបែកពួកវា។ នេះជាអាថ៌កំបាំងក្នុងការរចនាស្រមោលបែបទំនើបឱ្យមើលទៅដូចធម្មជាតិបំផុត!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .card-shadow {
      background: white;
      padding: 30px;
      margin: 20px;
      border-radius: 12px;
      /* Modern layered soft shadow */
      box-shadow: 
        0 4px 6px -1px rgba(0, 0, 0, 0.1), 
        0 2px 4px -2px rgba(0, 0, 0, 0.05);
    }
    .glowing-text {
      font-size: 30px;
      font-weight: bold;
      color: white;
      background: #111827;
      padding: 20px;
      text-align: center;
      text-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6;
    }
  </style>
</head>
<body>
  <div class="card-shadow">
    <h3 style="margin:0;">Modern Soft Shadow Card</h3>
    <p style="color:#64748b; margin-top:8px;">This card uses smooth layered box-shadow lines.</p>
  </div>
  
  <div class="glowing-text">GLOWING TEXT</div>
</body>
</html>`
  },
  {
    id: "css-text-effects",
    title: { en: "CSS Text Effects", km: "ផលប៉ះពាល់អត្ថបទកម្រិតខ្ពស់" },
    content: {
      en: `### CSS Advanced Text Effects
CSS has several advanced text effects properties to handle long overflow strings and multi-line truncations.

### Key Advanced Properties
- **\`text-overflow\`**: Specifies how overflowed content not displayed should be signaled. Common is \`text-overflow: ellipsis;\` (adds \`...\`).
- **\`word-wrap\`** & **\`word-break\`**: Forces unbreakable long words to wrap and break onto the next line to prevent breaking layouts!
- **\`-webkit-line-clamp\`**: Restricts text to a defined number of lines (e.g. clamp paragraph to exactly 3 lines with trailing \`...\`).

> **Tip:** To make \`text-overflow: ellipsis\` work, the element MUST have \`white-space: nowrap;\` and \`overflow: hidden;\` defined!`,
      km: `### ផលប៉ះពាល់អត្ថបទកម្រិតខ្ពស់ (Text Effects)
CSS ផ្ដល់នូវលក្ខណៈសម្បត្តិពិសេសៗដើម្បីគ្រប់គ្រងការបង្ហាញអត្ថបទវែងៗមិនឱ្យធ្លាយ ឬខូចទ្រង់ទ្រាយគេហទំព័រ។

### លក្ខណៈសម្បត្តិពិសេសគន្លឹះ
- **\`text-overflow\`**៖ កំណត់ពីរបៀបបង្ហាញអត្ថបទដែលធ្លាយចេញក្រៅប្រអប់។ តម្លៃទូទៅបំផុតគឺ \`text-overflow: ellipsis;\` (បង្ហាញជាសញ្ញាចំនុចបី \`...\`)។
- **\`word-wrap\`** និង \`word-break\`**៖ បង្ខំពាក្យដែលវែងខ្លាំងឱ្យចុះក្រោមដើម្បីកុំឱ្យខូចប្លង់គេហទំព័រ!
- **\`-webkit-line-clamp\`**៖ កម្រិតកថាខណ្ឌឱ្យបង្ហាញត្រឹមចំនួនជួរដេកជាក់លាក់ (ឧទាហរណ៍៖ បង្ហាញត្រឹម ៣ ជួរ រួចដាក់ \`...\`)។

> **អនុសាសន៍:** ដើម្បីឱ្យ \`text-overflow: ellipsis\` ដំណើរការបាន ធាតុនោះត្រូវតែកំណត់ \`white-space: nowrap;\` និង \`overflow: hidden;\` ជាមួយគ្នាជានិច្ច!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .ellipsis-text {
      width: 200px;
      white-space: nowrap; 
      overflow: hidden;
      text-overflow: ellipsis; /* Appends ... */
      background-color: #f1f5f9;
      padding: 10px;
      border: 1px solid #cbd5e1;
    }
  </style>
</head>
<body>
  <h3>Text Overflow Ellipsis Example:</h3>
  <div class="ellipsis-text">
    This is an extremely long title that cannot fit into a 200px container width!
  </div>
</body>
</html>`
  },
  {
    id: "css-custom-fonts",
    title: { en: "CSS Custom Fonts", km: "ពុម្ពអក្សរផ្ទាល់ខ្លួន CSS (@font-face)" },
    content: {
      en: `### CSS Custom Fonts (@font-face)
With the \`@font-face\` rule, web designers do not have to use only Web Safe Fonts. You can use any custom typography file you want!

### How to Bind Custom Fonts
1. Define the font name and point to its server file URL using \`@font-face\`:
   \`\`\`css
   @font-face {
     font-family: 'MyCustomFont';
     src: url('myfont.woff2') format('woff2');
   }
   \`\`\`
2. Apply it using \`font-family\`:
   \`\`\`css
   body {
     font-family: 'MyCustomFont', sans-serif;
   }
   \`\`\`

> **Note:** Always use modern font file formats like **.woff2** because they are highly compressed and download instantly inside browsers!`,
      km: `### ពុម្ពអក្សរផ្ទាល់ខ្លួន (@font-face) ក្នុង CSS
ជាមួយច្បាប់ \`@font-face\` អ្នករចនាគេហទំព័រលែងបង្ខំចិត្តប្រើតែពុម្ពអក្សរសុវត្ថិភាពទូទៅ (Web Safe Fonts) ទៀតហើយ។ អ្នកអាចប្រើប្រាស់រាល់ពុម្ពអក្សរស្អាតៗណាក៏បានដែលអ្នកចង់បាន!

### របៀបចងភ្ជាប់ពុម្ពអក្សរផ្ទាល់ខ្លួន
១. កំណត់ឈ្មោះ និងផ្លូវទៅកាន់ឯកសារពុម្ពអក្សរដោយប្រើ \`@font-face\`៖
   \`\`\`css
   @font-face {
     font-family: 'MyCustomFont';
     src: url('myfont.woff2') format('woff2');
   }
   \`\`\`
២. យកមកប្រើប្រាស់ជាមួយលក្ខណៈសម្បត្តិ \`font-family\`៖
   \`\`\`css
   body {
     font-family: 'MyCustomFont', sans-serif;
   }
   \`\`\`

> **សម្គាល់:** គួរប្រើប្រាស់ទម្រង់ឯកសារពុម្ពអក្សរទំនើបដូចជា **.woff2** ជានិច្ច ព្រោះវាមានទំហំតូចបំផុត ជួយឱ្យគេហទំព័រទាញយកបានលឿនបំផុត!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Load a beautiful cursive calligraphy font from Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
    
    .serif-title {
      font-family: 'Playfair Display', serif;
      font-size: 32px;
      font-style: italic;
      color: #1e1b4b;
    }
  </style>
</head>
<body>
  <div class="serif-title">Playfair Display Web Font</div>
  <p>This typography is rendered using an imported Google Web Font.</p>
</body>
</html>`
  }
];
