import { Lesson } from '../types';

export const cssLessonsPart3: Lesson[] = [
  {
    id: "css-combinators",
    title: { en: "CSS Combinators", km: "វិធីផ្សំ Selector ក្នុង CSS" },
    content: {
      en: `### CSS Combinator Selectors
A combinator is something that explains the relationship between selectors.

There are four different combinators in CSS:
1. **Descendant Selector** (space): selects all child elements inside the specified element (e.g. \`div p\`).
2. **Child Selector** (\`>\`): selects elements that are immediate children of the parent (e.g. \`div > p\`).
3. **Adjacent Sibling Selector** (\`+\`): selects an element that is directly after another specific element (e.g. \`div + p\`).
4. **General Sibling Selector** (\`~\`): selects all elements that are siblings after another element (e.g. \`div ~ p\`).

> **Tip:** Understanding combinators is crucial for writing clean styles without adding hundreds of redundant class names!`,
      km: `### CSS Combinators (វិធីផ្សំ Selector)
Combinator គឺជាអ្វីដែលជួយពន្យល់អំពីទំនាក់ទំនងរវាង Selector ពីរឬច្រើន។

មានទំនាក់ទំនងផ្សំ Selector ៤ ប្រភេទនៅក្នុង CSS៖
១. **Descendant Selector** (ដកឃ្លា)៖ ជ្រើសរើសរាល់ធាតុទាំងអស់ដែលស្ថិតនៅក្នុងធាតុដែលបានកំណត់ (ឧទាហរណ៍៖ \`div p\`)។
២. **Child Selector** (\`>\`)៖ ជ្រើសរើសតែធាតុដែលជាកូនបន្ទាប់ផ្ទាល់ (Immediate child) របស់ធាតុឪពុកម្តាយ (ឧទាហរណ៍៖ \`div > p\`)។
៣. **Adjacent Sibling Selector** (\`+\`)៖ ជ្រើសរើសធាតុដែលស្ថិតនៅបន្ទាប់ផ្ទាល់ពីធាតុមួយទៀត (ឧទាហរណ៍៖ \`div + p\`)។
៤. **General Sibling Selector** (\`~\`)៖ ជ្រើសរើសគ្រប់ធាតុទាំងអស់ដែលជាបងប្អូននៅបន្ទាប់ពីធាតុមួយទៀត (ឧទាហរណ៍៖ \`div ~ p\`)។

> **អនុសាសន៍:** ការយល់ដឹងពីវិធីផ្សំ Selector ជួយឱ្យអ្នកសរសេរកូដរចនាបានស្អាតដោយមិនចាំបាច់បន្ថែមឈ្មោះ Class រាប់រយឥតប្រយោជន៍ឡើយ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Select only paragraphs that are DIRECT children of div */
    div > p {
      background-color: #fef08a;
      padding: 5px;
    }
  </style>
</head>
<body>
  <div>
    <p>Paragraph 1 in div (Direct Child - Styled!)</p>
    <span>
      <p>Paragraph 2 inside span inside div (Not styled!)</p>
    </span>
  </div>
</body>
</html>`
  },
  {
    id: "css-pseudo-classes",
    title: { en: "CSS Pseudo-classes", km: "ថ្នាក់និម្មិត CSS (Pseudo-classes)" },
    content: {
      en: `### CSS Pseudo-classes
A pseudo-class is used to define a special state of an element.

### Common Examples
- Style an element when a user mouses over it (\`:hover\`).
- Style an element when it gets focus (\`:focus\`).
- Style visited (\`:visited\`) vs unvisited (\`:link\`) links.
- Style element based on position, like \`:first-child\` or \`:nth-child(n)\`!

> **Note:** Pseudo-class syntax: \`selector:pseudo-class { property: value; }\``,
      km: `### ថ្នាក់និម្មិត (Pseudo-classes) ក្នុង CSS
Pseudo-class ត្រូវបានប្រើដើម្បីកំណត់រចនាប័ទ្មលើស្ថានភាពពិសេស (Special state) នៃធាតុមួយ។

### ឧទាហរណ៍ទូទៅ
- តុបតែងធាតុនៅពេលដាក់ម៉ៅស៍ពីលើ (\`:hover\`)។
- តុបតែងធាតុនៅពេលវាទទួលបាន Focus (\`:focus\`)។
- តុបតែងតំណភ្ជាប់ដែលធ្លាប់ចុច (\`:visited\`) និងមិនទាន់ចុច (\`:link\`)។
- តុបតែងធាតុផ្អែកលើលំដាប់លេចឡើង ដូចជា \`:first-child\` ឬ \`:nth-child(n)\`!

> **សម្គាល់:** ទម្រង់ Pseudo-class គឺ៖ \`selector:pseudo-class { property: value; }\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .hover-btn {
      background-color: #10b981;
      color: white;
      padding: 10px 20px;
      border: none;
      transition: background 0.3s;
    }
    /* Pseudo class for mouse hover */
    .hover-btn:hover {
      background-color: #047857;
      cursor: pointer;
    }
    /* Style the first item in list */
    ul li:first-child {
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <button class="hover-btn">Hover over me!</button>
  <ul>
    <li>Apple (First child - red!)</li>
    <li>Banana</li>
    <li>Orange</li>
  </ul>
</body>
</html>`
  },
  {
    id: "css-pseudo-elements",
    title: { en: "CSS Pseudo-elements", km: "ធាតុនិម្មិត CSS (Pseudo-elements)" },
    content: {
      en: `### CSS Pseudo-elements
A CSS pseudo-element is used to style specified parts of an element.

### Common Pseudo-elements
- **\`::first-line\`**: Styles the first line of text.
- **\`::first-letter\`**: Adds styling to the first character of text (e.g., drop caps).
- **\`::before\`**: Inserts custom visual content *before* the element.
- **\`::after\`**: Inserts custom visual content *after* the element.

> **Note:** Use double colons (\`::\`) instead of a single colon to distinguish pseudo-elements from pseudo-classes!`,
      km: `### ធាតុនិម្មិត (Pseudo-elements) ក្នុង CSS
Pseudo-element ត្រូវបានប្រើដើម្បីតុបតែងផ្នែកជាក់លាក់ណាមួយនៃធាតុ។

### ធាតុនិម្មិតទូទៅ
- **\`::first-line\`**៖ តុបតែងតែបន្ទាត់ដំបូងបង្អស់នៃអត្ថបទ។
- **\`::first-letter\`**៖ តុបតែងតែតួអក្សរដំបូងបង្អស់នៃអត្ថបទ (ដូចជា drop caps)។
- **\`::before\`**៖ បញ្ចូលមាតិកាតុបតែងលម្អនៅ*ពីមុខ* ធាតុ។
- **\`::after\`**៖ បញ្ចូលមាតិកាតុបតែងលម្អនៅ*ពីក្រោយ* ធាតុ។

> **សម្គាល់:** ត្រូវប្រើសញ្ញាចុចពីរពីរដង (\`::\`) ដើម្បីបែងចែកឱ្យដាច់រវាង pseudo-elements និង pseudo-classes!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    p::first-letter {
      font-size: 200%;
      font-weight: bold;
      color: #4f46e5;
    }
    .quote::before {
      content: "“ ";
      color: #e11d48;
      font-size: 24px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <p>This is a standard paragraph with a beautiful drop cap first letter styling.</p>
  <p class="quote">This text is marked as a quote.</p>
</body>
</html>`
  },
  {
    id: "css-opacity",
    title: { en: "CSS Opacity", km: "ភាពថ្លានៅក្នុង CSS (Opacity)" },
    content: {
      en: `### CSS Opacity
The \`opacity\` property specifies the transparency of an element. It takes a value from \`0.0\` (completely transparent) to \`1.0\` (fully opaque).

### Transparent Images and Hover Effects
You can use opacity combined with transitions to create nice hover fade-in effects on photo links.

> **Warning:** Setting opacity on a parent element makes all of its child elements transparent too! To make only the background transparent, use an \`rgba()\` background color instead.`,
      km: `### Opacity ក្នុង CSS (ភាពថ្លា)
លក្ខណៈសម្បត្តិ \`opacity\` កំណត់កម្រិតភាពថ្លារបស់ធាតុ។ វាទទួលតម្លៃចាប់ពី \`0.0\` (ថ្លាទាំងស្រុង) ដល់ \`1.0\` (ដិតពេញលេញ)។

### រូបភាពថ្លា និងបែបផែនពេលដាក់ម៉ៅស៍ពីលើ (Hover)
អ្នកអាចប្រើ opacity រួមជាមួយ transition ដើម្បីបង្កើតឥទ្ធិពលចុះអ័ព្ទ ឬភ្លឺច្បាស់បន្តិចម្តងៗនៅពេលដាក់ម៉ៅស៍ពីលើរូបភាព។

> **ប្រុងប្រយ័ត្ន:** ការកំណត់ opacity នៅលើធាតុឪពុកម្តាយ (Parent) នឹងធ្វើឱ្យធាតុផ្ទុកខាងក្នុង (Child) ទាំងអស់ប្រែជាថ្លាទៅតាមនោះដែរ! ដើម្បីឱ្យថ្លាតែពណ៌ផ្ទៃខាងក្រោយ ត្រូវប្រើប្រាស់ពណ៌ \`rgba()\` ជំនួសវិញ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .trans-box {
      background-color: #4f46e5;
      color: white;
      padding: 20px;
      opacity: 0.6; /* 60% solid, 40% transparent */
    }
    
    img {
      opacity: 0.5;
      transition: opacity 0.3s;
    }
    img:hover {
      opacity: 1.0; /* Fully visible on hover */
    }
  </style>
</head>
<body>
  <div class="trans-box">This box has 60% opacity!</div>
  <p>Hover over the image below to see opacity animation transition:</p>
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=150" alt="Laptop" width="150">
</body>
</html>`
  },
  {
    id: "css-navigation-bars",
    title: { en: "CSS Navigation Bars", km: "របារម៉ឺនុយក្នុង CSS (Navbar)" },
    content: {
      en: `### CSS Navigation Bars
Having a clean navigation bar is key to a good user experience.

In CSS, we create navigation bars using standard HTML unordered list tags (\`<ul>\`):
1. Remove bullets with \`list-style-type: none;\`.
2. Remove standard browser spacing with \`margin: 0; padding: 0;\`.
3. To make a **horizontal navbar**, set list items to \`display: inline;\` or use modern **Flexbox** techniques!

> **Tip:** Set the active link to a different color to help users recognize which page they are currently visiting!`,
      km: `### របារម៉ឺនុយ (Navigation Bars) ក្នុង CSS
ការមានរបារម៉ឺនុយច្បាស់លាស់ គឺជាគន្លឹះដើម្បីផ្ដល់បទពិសោធន៍ប្រើប្រាស់ដ៏ល្អ។

នៅក្នុង CSS យើងបង្កើតរបារម៉ឺនុយដោយប្រើប្រាស់បញ្ជីគ្មានលំដាប់ (\`<ul>\`)៖
១. លុបសញ្ញាចំនុចដោយប្រើ \`list-style-type: none;\`។
២. លុបគម្លាតលំនាំដើមចេញដោយប្រើ \`margin: 0; padding: 0;\`។
៣. ដើម្បីធ្វើឱ្យ **ម៉ឺនុយផ្ដេក** កំណត់ធាតុបញ្ជីទៅជា \`display: inline;\` ឬប្រើប្រាស់បច្ចេកវិទ្យា **Flexbox**!

> **អនុសាសន៍:** កំណត់លីងដែលកំពុងសកម្ម (Active link) ឱ្យមានពណ៌ប្លែកពីគេ ដើម្បីជួយឱ្យអ្នកប្រើប្រាស់ដឹងថាពួកគាត់កំពុងស្ថិតនៅលើទំព័រណា!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .navbar {
      list-style-type: none;
      margin: 0;
      padding: 0;
      background-color: #1e293b;
      display: flex;
      border-radius: 8px;
    }
    .navbar li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-family: sans-serif;
    }
    .navbar li a:hover {
      background-color: #3b82f6;
    }
    .navbar li a.active {
      background-color: #4f46e5;
    }
  </style>
</head>
<body>
  <ul class="navbar">
    <li><a class="active" href="#home">Home</a></li>
    <li><a href="#lessons">Lessons</a></li>
    <li><a href="#sandbox">Sandbox</a></li>
  </ul>
</body>
</html>`
  },
  {
    id: "css-dropdowns",
    title: { en: "CSS Dropdowns", km: "ម៉ឺនុយទម្លាក់ចុះ CSS (Dropdowns)" },
    content: {
      en: `### CSS Dropdowns
Create hoverable dropdown panels using pure CSS!

### Core Dropdown Architecture
1. **Container**: Use \`position: relative;\` on the parent container.
2. **Content Block**: Use \`position: absolute;\` and \`display: none;\` to hide the dropdown options content by default.
3. **Trigger State**: Change display on hover:
   \`\`\`css
   .dropdown:hover .dropdown-content {
     display: block;
   }
   \`\`\`

> **Note:** Dropdown menus built with pure CSS are lightweight and load instantly without requiring JS!`,
      km: `### Dropdowns (ម៉ឺនុយទម្លាក់ចុះ) ក្នុង CSS
បង្កើតប្រអប់ម៉ឺនុយទម្លាក់ចុះដោយប្រើប្រាស់តែភាសា CSS សុទ្ធ!

### រចនាសម្ព័ន្ធ Dropdown គ្រឹះ
១. **Container (ប្រអប់ក្រៅ)**៖ ប្រើ \`position: relative;\` លើប្រអប់ផ្ទុកឪពុកម្តាយ។
២. **Content Block (ប្រអប់ជម្រើស)**៖ ប្រើ \`position: absolute;\` និង \`display: none;\` ដើម្បីលាក់ប្រអប់ជម្រើសតាមលំនាំដើម។
៣. **Trigger State (ស្ថានភាពបើក)**៖ ប្តូរ display ទៅជា block ពេលដាក់ម៉ៅស៍ពីលើ៖
   \`\`\`css
   .dropdown:hover .dropdown-content {
     display: block;
   }
   \`\`\`

> **សម្គាល់:** ម៉ឺនុយទម្លាក់ចុះដែលបង្កើតឡើងដោយ CSS សុទ្ធ គឺមានទម្ងន់ស្រាល និងដំណើរការបានលឿនបំផុតដោយមិនចាំបាច់ប្រើប្រាស់ JS ឡើយ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .dropdown {
      position: relative;
      display: inline-block;
    }
    .dropbtn {
      background-color: #3b82f6;
      color: white;
      padding: 10px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .dropdown-content {
      display: none; /* Hidden by default */
      position: absolute;
      background-color: white;
      min-width: 160px;
      box-shadow: 0px 8px 16px rgba(0,0,0,0.1);
      z-index: 10;
      border-radius: 4px;
    }
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      display: block;
      text-decoration: none;
    }
    .dropdown-content a:hover {
      background-color: #f1f5f9;
    }
    /* Show dropdown on hover */
    .dropdown:hover .dropdown-content {
      display: block;
    }
  </style>
</head>
<body>
  <div class="dropdown">
    <button class="dropbtn">Hover Menu</button>
    <div class="dropdown-content">
      <a href="#html">HTML Course</a>
      <a href="#css">CSS Course</a>
      <a href="#js">JavaScript Course</a>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "css-image-gallery",
    title: { en: "CSS Image Gallery", km: "វិចិត្រសាលរូបភាព CSS" },
    content: {
      en: `### CSS Image Gallery
Creating a beautiful, responsive photo gallery is a common task in web design. 

We can style clean layout frames for each image using standard borders, padding, shadows, and hover transitions.

> **Tip:** Set the image inside the card to \`width: 100%; height: auto;\` to prevent photos from breaking responsive layouts!`,
      km: `### វិចិត្រសាលរូបភាព (Image Gallery) ក្នុង CSS
ការបង្កើតវិចិត្រសាលរូបភាព (Photo Gallery) ដ៏ស្រស់ស្អាត និងឆ្លើយតបទៅនឹងអេក្រង់គឺជាការងារទូទៅបំផុតក្នុងការរចនាគេហទំព័រ។

យើងអាចរចនាប្រអប់ស៊ុមស្អាតៗសម្រាប់រូបភាពនីមួយៗដោយប្រើប្រាស់ border, padding, ស្រមោល (Shadows) និងចលនាឆ្លើយតប (Hover transition)។

> **អនុសាសន៍:** កំណត់រូបភាពខាងក្នុងប្រអប់ទៅជា \`width: 100%; height: auto;\` ដើម្បីការពារកុំឱ្យរូបថតធ្លាយចេញក្រៅប្រអប់របស់វា!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
    .responsive-card {
      background: white;
      border: 1px solid #cbd5e1;
      padding: 10px;
      border-radius: 8px;
      width: 180px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      transition: transform 0.2s;
    }
    .responsive-card:hover {
      transform: translateY(-5px);
    }
    .responsive-card img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <div class="gallery">
    <div class="responsive-card">
      <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200" alt="laptop">
      <p style="text-align:center; font-size: 12px; margin-top:8px;">Workspace</p>
    </div>
    <div class="responsive-card">
      <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200" alt="tech">
      <p style="text-align:center; font-size: 12px; margin-top:8px;">Cybersecurity</p>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "css-image-sprites",
    title: { en: "CSS Image Sprites", km: "រូបភាពរួមគ្នា CSS (Image Sprites)" },
    content: {
      en: `### CSS Image Sprites
An image sprite is a collection of images put into a single image file.

### Why Use Image Sprites?
A web page with many images can take a long time to load and generates multiple server requests. Using image sprites reduces the number of server requests and saves bandwidth!

In CSS, we display specific parts of a sprite sheet using:
- \`background-image: url('sprite.png');\`
- \`background-position: x-axis y-axis;\`

> **Note:** Position offsets are usually defined with negative values (e.g. \`background-position: -46px 0;\`) to shift the sprite file to the correct coordinates.`,
      km: `### រូបភាពរួមគ្នា (Image Sprites) ក្នុង CSS
Image Sprite គឺជាបណ្តុំរូបភាពតូចៗជាច្រើនដែលបញ្ចូលទៅក្នុងឯកសាររូបភាពធំតែមួយគត់។

### ហេតុអ្វីបានជាត្រូវប្រើប្រាស់វា?
គេហទំព័រដែលមានរូបភាពតូចៗច្រើន អាចចំណាយពេលយូរក្នុងការទាញយកពីព្រោះវាត្រូវស្នើសុំ (HTTP Requests) ទៅកាន់ម៉ាស៊ីនមេជាច្រើនដង។ ការប្រើប្រាស់ Image Sprites ជួយកាត់បន្ថយចំនួនការស្នើសុំ និងសន្សំសំចៃទំហំ bandwidth របស់ម៉ាស៊ីនមេ!

នៅក្នុង CSS យើងបង្ហាញចំណែកណាមួយនៃរូបភាពរួមគ្នាដោយកំណត់៖
- \`background-image: url('sprite.png');\`
- \`background-position: អ័ក្សX អ័ក្សY;\`

> **សម្គាល់:** គម្លាតទីតាំងតែងតែកំណត់ជាតម្លៃអវិជ្ជមាន (ដូចជា \`background-position: -46px 0;\`) ដើម្បីរំកិលរូបភាពរួមគ្នានោះទៅរកកូអរដោនេត្រឹមត្រូវ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Demo using a small sprite background sheet */
    .sprite-icon {
      background-image: url('https://www.w3schools.com/css/img_navsprites.gif');
      background-repeat: no-repeat;
      display: inline-block;
      width: 43px;
      height: 44px;
    }
    .home-icon {
      background-position: 0 0; /* Home icon coordinates */
    }
    .next-icon {
      background-position: -91px 0; /* Next arrow icon coordinates */
    }
  </style>
</head>
<body>
  <h3>Displaying icons from a single Sprite Sheet image:</h3>
  <span class="sprite-icon home-icon"></span>
  <span class="sprite-icon next-icon"></span>
</body>
</html>`
  },
  {
    id: "css-attribute-selectors",
    title: { en: "CSS Attribute Selectors", km: "ការជ្រើសរើសតាមលក្ខណៈសម្បត្តិ" },
    content: {
      en: `### CSS Attribute Selectors
Style HTML elements based on their specific attributes or attribute values!

### Common Attribute Selector Patterns
- **\`[attribute]\`**: Selects all elements with the attribute (e.g. \`[target]\`).
- **\`[attribute="value"]\`**: Selects elements with specific attribute value (e.g. \`[target="_blank"]\`).
- **\`[attribute*="value"]\`**: Selects elements whose attribute contains the value string!

> **Tip:** Extremely useful for styling text inputs separately from checkbox or submit button inputs: \`input[type="text"] { ... }\`!`,
      km: `### Attribute Selectors (ការជ្រើសរើសតាមលក្ខណៈសម្បត្តិ)
តុបតែងធាតុ HTML ផ្សេងៗដោយផ្អែកលើលក្ខណៈសម្បត្តិ (Attributes) ឬតម្លៃលក្ខណៈសម្បត្តិជាក់លាក់របស់ពួកវា!

### លំនាំលក្ខណៈសម្បត្តិទូទៅ
- **\`[attribute]\`**៖ ជ្រើសរើសរាល់ធាតុណាដែលមានលក្ខណៈសម្បត្តិនោះ (ឧទាហរណ៍៖ \`[target]\`)។
- **\`[attribute="value"]\`**៖ ជ្រើសរើសធាតុដែលមានតម្លៃជាក់លាក់គត់ (ឧទាហរណ៍៖ \`[target="_blank"]\`)។
- **\`[attribute*="value"]\`**៖ ជ្រើសរើសធាតុណាដែលតម្លៃលក្ខណៈសម្បត្តិរបស់វាមានផ្ទុកនូវពាក្យនោះ!

> **អនុសាសន៍:** មានសារៈសំខាន់ខ្លាំងក្នុងការរចនាប៊ូតុង ឬប្រអប់បញ្ចូលទិន្នន័យ (Input) ដោយឡែកពីគ្នា ដូចជា៖ \`input[type="text"] { ... }\`!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Style only links with target="_blank" */
    a[target="_blank"] {
      background-color: yellow;
      color: black;
      font-weight: bold;
    }
    /* Style text input fields */
    input[type="text"] {
      border: 2px solid #3b82f6;
      padding: 5px;
    }
  </style>
</head>
<body>
  <p><a href="https://example.com">Standard Link (Not styled)</a></p>
  <p><a href="https://example.com" target="_blank">New Tab Link (Styled!)</a></p>
  
  <p>Username: <input type="text" value="Sokchea"></p>
</body>
</html>`
  },
  {
    id: "css-forms",
    title: { en: "CSS Forms", km: "ការរចនាទម្រង់បញ្ចូលទិន្នន័យ" },
    content: {
      en: `### CSS Web Forms Styling
Web forms (inputs, textareas, selects, buttons) look completely different depending on the operating system. CSS allows you to create beautiful, consistent form fields.

### Key Form Styling Properties
- **\`width: 100%\`**: Makes inputs fill their card container.
- **\`padding\`**: Adds elegant inner breathing space inside text fields.
- **\`box-sizing: border-box\`**: Ensures padding doesn't overflow container width.
- **\`border\` & \`border-radius\`**: Customizable smooth input borders.
- **\`outline: none;\`** and **\`:focus\` pseudo-class**: Highlight input box with colored shadows when actively typing!

> **Tip:** Use transitions on \`border-color\` or \`box-shadow\` to make form fields feel alive during focus!`,
      km: `### ការរចនាទម្រង់បញ្ចូលទិន្នន័យ (Forms) ក្នុង CSS
ទម្រង់បញ្ចូលទិន្នន័យ (inputs, textareas, selects, buttons) អាចបង្ហាញទ្រង់ទ្រាយខុសៗគ្នាតាមប្រភេទកុំព្យូទ័រ។ CSS អនុញ្ញាតឱ្យអ្នករចនាប្រអប់ទិន្នន័យបានស្អាត និងស្មើភាពគ្នាលើគ្រប់ឧបករណ៍។

### លក្ខណៈសម្បត្តិរចនា Form សំខាន់ៗ
- **\`width: 100%\`**៖ ធ្វើឱ្យប្រអប់បញ្ចូលទិន្នន័យរីកពេញប្រអប់ផ្ទុករបស់វា។
- **\`padding\`**៖ បន្ថែមគម្លាតខាងក្នុងជួយឱ្យងាយស្រួលវាយអក្សរ។
- **\`box-sizing: border-box\`**៖ ធានាថាកម្រិត padding មិនធ្វើឱ្យធ្លាយប្រអប់។
- **\`border\` និង \`border-radius\`**៖ កំណត់រាងមូល និងស៊ុមស្អាតៗលើប្រអប់។
- **\`outline: none;\`** រួមនឹង \`:focus\` pseudo-class៖ បង្ហាញពន្លឺស្រមោលជុំវិញប្រអប់នៅពេលចុចវាយអក្សរ!

> **អនុសាសន៍:** ប្រើប្រាស់ចលនា (Transition) លើ \`border-color\` ឬ \`box-shadow\` ដើម្បីធ្វើឱ្យប្រអប់ទិន្នន័យមើលទៅស្រស់ស្អាតនិងរស់រវើកពេលចុចជ្រើសរើស!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    input[type=text] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      box-sizing: border-box;
      border: 2px solid #cbd5e1;
      border-radius: 6px;
      outline: none;
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    input[type=text]:focus {
      border-color: #4f46e5;
      box-shadow: 0 0 8px rgba(79, 70, 229, 0.25);
    }
  </style>
</head>
<body>
  <h3>Modern Form Field:</h3>
  <form>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="fname" placeholder="Enter your name..">
  </form>
</body>
</html>`
  },
  {
    id: "css-counters",
    title: { en: "CSS Counters", km: "ការរាប់ចំនួនដោយស្វ័យប្រវត្តិ" },
    content: {
      en: `### CSS Counters
CSS counters are "variables" maintained by CSS whose values can be incremented by CSS rules to track how many times they are used.

This is perfect for numbering headings (like Section 1, Section 1.1) automatically!

### Core Counter Properties
- **\`counter-reset\`**: Creates or resets a counter variable.
- **\`counter-increment\`**: Increments the counter value.
- **\`counter()\`**: Generates and inserts the counter value in elements using pseudo-elements \`::before\` or \`::after\`.

> **Note:** Counters are useful when writing document outlines, books, or automatically numbering lists!`,
      km: `### CSS Counters (ការរាប់ចំនួនដោយស្វ័យប្រវត្តិ)
CSS Counters គឺជា "អថេរ (Variables)" ដែលត្រូវបានគ្រប់គ្រងដោយផ្ទាល់ដោយ CSS ដែលតម្លៃរបស់វាអាចកើនឡើងតាមច្បាប់កំណត់ ដើម្បីតាមដានចំនួនដងនៃការលេចឡើង។

វាគឺល្អឥតខ្ចោះសម្រាប់ការដាក់លេខរៀងចំណងជើង (ដូចជា ផ្នែកទី១, ផ្នែកទី១.១) ដោយស្វ័យប្រវត្តិ!

### លក្ខណៈសម្បត្តិ Counters គន្លឹះ
- **\`counter-reset\`**៖ បង្កើត ឬកំណត់អថេររាប់ចំនួនឱ្យទៅសូន្យឡើងវិញ។
- **\`counter-increment\`**៖ បង្កើនតម្លៃរាប់ (+១)។
- **\`counter()\`**៖ បង្ហាញនិងបញ្ចូលតម្លៃរាប់ទៅក្នុងធាតុដោយប្រើប្រាស់ pseudo-elements \`::before\` ឬ \`::after\`។

> **សម្គាល់:** Counters គឺមានប្រយោជន៍ខ្លាំងណាស់នៅពេលសរសេរប្លង់ឯកសារ សៀវភៅ ឬការដាក់លេខរៀងមេរៀនដោយស្វ័យប្រវត្តិ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      counter-reset: section; /* Reset section counter to 0 */
      font-family: sans-serif;
    }
    h2::before {
      counter-increment: section; /* Add 1 to section counter */
      content: "Section " counter(section) ": "; /* Insert counter value */
      color: #4f46e5;
    }
  </style>
</head>
<body>
  <h2>Getting Started</h2>
  <p>Introduction to counters.</p>
  
  <h2>CSS Basics</h2>
  <p>Learn core syntax rules.</p>
  
  <h2>CSS Advanced</h2>
  <p>Discover gradients and grid.</p>
</body>
</html>`
  },
  {
    id: "css-units",
    title: { en: "CSS Units", km: "ខ្នាតរង្វាស់ក្នុង CSS" },
    content: {
      en: `### CSS Units
CSS has several different units for expressing length and size. 

### 1. Absolute Units
- **\`px\`** (Pixels): Absolute length, matches physical screen dots. Remains constant on any display.

### 2. Relative Units (Highly Recommended!)
- **\`em\`**: Relative to the font-size of the element itself.
- **\`rem\`**: Relative to the root element (\`<html>\`) font-size. Perfect for responsive typography scaling!
- **\`vw\`** & **\`vh\`**: Relative to 1% of the width or height of the viewport (screen browser size).

> **Tip:** Always prefer using \`rem\` for layout spacing and typography to ensure accessibility zoom levels work perfectly!`,
      km: `### ខ្នាតរង្វាស់ (Units) ក្នុង CSS
CSS មានខ្នាតរង្វាស់ជាច្រើនប្រភេទសម្រាប់កំណត់ប្រវែង និងទំហំ។

### ១. Absolute Units (ខ្នាតទំហំជាក់លាក់)
- **\`px\`** (ភីកសែល)៖ ខ្នាតទំហំជាក់លាក់ ស្មើនឹងចំនុចពន្លឺរូបភាពលើអេក្រង់។ វានៅដដែលលើគ្រប់ឧបករណ៍។

### ២. Relative Units (ខ្នាតទំហំធៀប - ណែនាំខ្លាំង!)
- **\`em\`**៖ ធៀបទៅនឹងទំហំអក្សរ (Font size) របស់ធាតុផ្ទាល់ខ្លួន។
- **\`rem\`**៖ ធៀបទៅនឹងទំហំអក្សររបស់ធាតុគល់ (\`<html>\`)។ ល្អឥតខ្ចោះសម្រាប់ការរចនាអក្សរឆ្លើយតប!
- **\`vw\`** និង **\`vh\`**៖ ធៀបទៅនឹង ១% នៃទទឹង ឬកម្ពស់អេក្រង់ Browser។

> **អនុសាសន៍:** គួរប្រើប្រាស់ \`rem\` សម្រាប់គម្លាតប្លង់ និងទំហំអក្សរ ដើម្បីធានាថាការពង្រីកអេក្រង់ (Zoom) របស់ប្រព័ន្ធដំណើរការបានល្អឥតខ្ចោះ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    html {
      font-size: 16px; /* Base size */
    }
    .rem-demo {
      font-size: 2rem; /* 2 x 16px = 32px */
      background-color: #cbd5e1;
    }
    .vh-demo {
      height: 10vh; /* 10% of window screen height */
      background-color: #3b82f6;
      color: white;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="rem-demo">This is 2rem size font.</div>
  <div class="vh-demo">10vh height block container</div>
</body>
</html>`
  },
  {
    id: "css-inheritance",
    title: { en: "CSS Inheritance", km: "ការបន្តវេនក្នុង CSS (Inheritance)" },
    content: {
      en: `### CSS Inheritance
Some CSS properties are inherited automatically from parent elements down to child elements. This saves you from writing repetitive code!

### Inherited Properties
- Typography styles: \`color\`, \`font-family\`, \`font-size\`, \`line-height\`, \`text-align\`.

### Non-Inherited Properties
- Layout and spacing: \`margin\`, \`padding\`, \`border\`, \`width\`, \`height\`, \`background-color\`.

### Overriding Inheritance
You can force inheritance using the \`inherit\` keyword!
\`\`\`css
p { color: inherit; }
\`\`\`

> **Note:** If you style the body font-family, all elements inside the page inherit it instantly!`,
      km: `### ការបន្តវេន (Inheritance) ក្នុង CSS
លក្ខណៈសម្បត្តិ CSS មួយចំនួនត្រូវបានបន្តវេន (Inherit) ដោយស្វ័យប្រវត្តពីធាតុឪពុកម្តាយ (Parent) ទៅកាន់ធាតុផ្ទុកខាងក្នុង (Child)។ វាកាត់បន្ថយការសរសេរកូដដដែលៗបានច្រើន!

### លក្ខណៈសម្បត្តិដែលបន្តវេន
- ស្ទីលអក្សរ៖ \`color\`, \`font-family\`, \`font-size\`, \`line-height\`, \`text-align\`។

### លក្ខណៈសម្បត្តិដែលមិនបន្តវេន
- ប្លង់ប្រអប់ និងគម្លាត៖ \`margin\`, \`padding\`, \`border\`, \`width\`, \`height\`, \`background-color\`។

### ការបង្ខំឱ្យបន្តវេន
អ្នកអាចបង្ខំឱ្យធាតុបន្តវេនលក្ខណៈសម្បត្តិពីឪពុកម្តាយបានដោយប្រើពាក្យគន្លឹះ \`inherit\`!
\`\`\`css
p { color: inherit; }
\`\`\`

> **សម្គាល់:** ប្រសិនបើអ្នកកំណត់ពុម្ពអក្សរលើ body នោះគ្រប់ធាតុទាំងអស់នៅក្នុងគេហទំព័រនឹងបន្តវេនប្រើប្រាស់ពុម្ពអក្សរនោះភ្លាមៗ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Styling parent container */
    .parent-card {
      font-family: Georgia, serif;
      color: #4f46e5;
      border: 2px solid black; /* Not inherited */
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="parent-card">
    This is Georgia text with indigo color inside the parent.
    <p>This paragraph automatically inherited Georgia and Indigo color!</p>
    <button style="border: 1px solid #000;">Button (Inherits font-family?)</button>
  </div>
</body>
</html>`
  },
  {
    id: "css-specificity",
    title: { en: "CSS Specificity", km: "អាទិភាពកូដ CSS (Specificity)" },
    content: {
      en: `### CSS Specificity Rules
If there are two or more conflicting CSS rules pointing to the same element, the browser follows **Specificity** rules to determine which styles win.

### Specificity Hierarchy (from high to low)
1. **Inline Styles** (e.g. \`style="color: red;"\`) - Score: 1000
2. **IDs Selector** (e.g. \`#main-title\`) - Score: 100
3. **Classes & Pseudo-classes** (e.g. \`.highlight\`) - Score: 10
4. **Elements & Pseudo-elements** (e.g. \`h1\`) - Score: 1

### Calculation Example
- \`h1.title\` (Element + Class) has specificity score of 11.
- \`#main-title\` (ID) has score of 100.
- ID wins over Class!

> **Tip:** Keep your specificity low to prevent styles from becoming impossible to override as your CSS grows!`,
      km: `### អាទិភាពកូដ (Specificity) ក្នុង CSS
ប្រសិនបើមានច្បាប់ CSS ពីរឬច្រើនដែលជជែកគ្នា (Conflicting) លើធាតុតែមួយ Browser នឹងផ្អែកលើច្បាប់ **Specificity** ដើម្បីសម្រេចថាតើស្ទីលណាមួយជាអ្នកឈ្នះ។

### លំដាប់ថ្នាក់អាទិភាព (ពីខ្ពស់ទៅទាប)
១. **Inline Styles** (សរសេរផ្ទាល់លើថេក ដូចជា \`style="color: red;"\`) - ពិន្ទុ៖ ១០០០
២. **ID Selectors** (ដូចជា \`#main-title\`) - ពិន្ទុ៖ ១០០
៣. **Classes & Pseudo-classes** (ដូចជា \`.highlight\`) - ពិន្ទុ៖ ១០
៤. **Elements & Pseudo-elements** (ដូចជា \`h1\`) - ពិន្ទុ៖ ១

### ឧទាហរណ៍នៃការគណនា
- \`h1.title\` (Element + Class) មានពិន្ទុអាទិភាព ១១។
- \`#main-title\` (ID Selector) មានពិន្ទុអាទិភាព ១០០។
- ID ឈ្នះ Class ជានិច្ច!

> **អនុសាសន៍:** ព្យាយាមរក្សាពិន្ទុអាទិភាពឱ្យទាប ដើម្បីកុំឱ្យពិបាកកែប្រែ ឬ Override ស្ទីលនៅពេលកូដរបស់អ្នករីកធំឡើង!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Specificity Level 1 (Score: 1) */
    p { color: red; }
    
    /* Specificity Level 2 (Score: 10) */
    .green-text { color: green; }
    
    /* Specificity Level 3 (Score: 100) */
    #blue-p { color: blue; }
  </style>
</head>
<body>
  <!-- Class wins over Element, ID wins over Class! -->
  <p id="blue-p" class="green-text">What color will I be? (Blue, because ID specificity wins!)</p>
</body>
</html>`
  },
  {
    id: "css-important",
    title: { en: "CSS !important", km: "អាទិភាពដាច់ខាត !important" },
    content: {
      en: `### The !important Rule
The \`!important\` rule in CSS is used to add more importance to a property/value than normal specificity scores.

If you use \`!important\`, it will **override** all previous styling declarations for that specific property, regardless of element class, ID or inline styles!

\`\`\`css
p {
  color: red !important; /* Force red! */
}
\`\`\`

> **Warning:** Avoid using \`!important\` unless absolutely necessary (like resetting external library widget styles) because it breaks normal cascading rules and makes CSS debugging extremely difficult!`,
      km: `### ច្បាប់អាទិភាពដាច់ខាត !important
ច្បាប់ \`!important\` នៅក្នុង CSS ត្រូវបានប្រើដើម្បីបង្កើនអាទិភាពដាច់ខាតទៅលើលក្ខណៈសម្បត្តិ/តម្លៃ ដោយរំលងរាល់ពិន្ទុអាទិភាពធម្មតាទាំងអស់។

ប្រសិនបើអ្នកប្រើ \`!important\` វានឹង **ជំនួស (Override)** រាល់សេចក្តីប្រកាសស្ទីលមុនៗទាំងអស់សម្រាប់លក្ខណៈសម្បត្តិនោះ ទោះបីជាមាន Class, ID ឬ Inline style ក៏ដោយ!

\`\`\`css
p {
  color: red !important; /* បង្ខំឱ្យចេញពណ៌ក្រហមដាច់ខាត! */
}
\`\`\`

> **ប្រុងប្រយ័ត្ន:** ជៀសវាងការប្រើប្រាស់ \`!important\` លុះត្រាតែគ្មានជម្រើស (ដូចជាការកែស្ទីលបណ្ណាល័យក្រៅ) ព្រោះវាបំផ្លាញច្បាប់លំដាប់លំហូរធម្មតា និងធ្វើឱ្យការរកកំហុស (Debugging) ពិបាកខ្លាំងណាស់!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    #important-id {
      color: blue;
    }
    p {
      color: red !important; /* Overrides ID selector easily! */
    }
  </style>
</head>
<body>
  <p id="important-id">This text is red because of !important rule, overriding the ID style!</p>
</body>
</html>`
  },
  {
    id: "css-math-functions",
    title: { en: "CSS Math Functions", km: "អនុគមន៍គណិតវិទ្យា CSS" },
    content: {
      en: `### CSS Math Functions
CSS allows you to perform basic math calculations right inside your stylesheet!

### Key Math Functions
- **\`calc()\`**: Performs calculation to express size values (e.g. \`width: calc(100% - 80px);\`).
- **\`min()\`**: Uses the smallest value from a list (e.g. \`width: min(50%, 400px);\`).
- **\`max()\`**: Uses the largest value from a list.
- **\`clamp()\`**: Restricts a value between a minimum and maximum range (perfect for responsive text: \`font-size: clamp(1rem, 2.5vw, 2rem);\`).

> **Tip:** \`calc()\` is extremely helpful when mixing different units like percentages and pixels together!`,
      km: `### អនុគមន៍គណិតវិទ្យា (Math Functions) ក្នុង CSS
CSS អនុញ្ញាតឱ្យអ្នកគណនាគណិតវិទ្យាមូលដ្ឋានបានដោយផ្ទាល់នៅក្នុងសន្លឹករចនា!

### អនុគមន៍សំខាន់ៗ
- **\`calc()\`**៖ គណនាតម្លៃខ្នាតទំហំផ្សេងៗ (ឧទាហរណ៍៖ \`width: calc(100% - 80px);\`)។
- **\`min()\`**៖ ជ្រើសរើសយកតម្លៃដែលតូចជាងគេ (ឧទាហរណ៍៖ \`width: min(50%, 400px);\`)។
- **\`max()\`**៖ ជ្រើសរើសយកតម្លៃដែលធំជាងគេ។
- **\`clamp()\`**៖ កម្រិតតម្លៃចន្លោះពីតូចបំផុតទៅធំបំផុត (ល្អឥតខ្ចោះសម្រាប់ទំហំអក្សរ៖ \`font-size: clamp(1rem, 2.5vw, 2rem);\`)។

> **អនុសាសន៍:** \`calc()\` មានប្រយោជន៍ខ្លាំងណាស់នៅពេលអ្នកចង់បូកឬដកខ្នាតខុសគ្នា ដូចជាភាគរយធៀបនឹងភីកសែល!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .math-card {
      /* Width is 100% minus exactly 60px padding/margins */
      width: calc(100% - 60px);
      margin: 30px auto;
      background-color: #f1f5f9;
      border: 1px solid #cbd5e1;
      padding: 15px;
      /* Font size stays clamped relative to viewport width */
      font-size: clamp(14px, 1.5vw + 10px, 24px);
    }
  </style>
</head>
<body>
  <div class="math-card">
    This card uses calc() for its width and clamp() for responsive typography font sizing!
  </div>
</body>
</html>`
  },
  {
    id: "css-optimization",
    title: { en: "CSS Optimization", km: "ការបង្កើនល្បឿនកូដ CSS" },
    content: {
      en: `### CSS Performance Optimization
For large websites, having large unoptimized stylesheets can cause slow page loads and rendering flickering.

### Best Practices for Fast CSS
1. **Minify CSS**: Remove comments, unnecessary whitespace, and line breaks before production.
2. **Avoid Deep Selectors**: \`body div.main section article p\` is slow. Keep selectors short.
3. **Use CSS Variables**: Re-use values to keep file size small.
4. **Eliminate Dead CSS**: Remove unused styles from your sheets.

> **Tip:** Modern bundlers automatically minify and clean up your CSS styles during production builds!`,
      km: `### ការបង្កើនល្បឿនកូដ CSS (Optimization)
សម្រាប់គេហទំព័រធំៗ ការមានសន្លឹករចនាធំពេកនិងមិនបានបង្កើនប្រសិទ្ធភាពអាចធ្វើឱ្យគេហទំព័រដំណើរការយឺត និងរអាក់រអួល។

### វិធីសាស្ត្រល្អៗដើម្បីឱ្យ CSS ដំណើរការលឿន
១. **Minify CSS (ការបង្រួមកូដ)**៖ លុបមតិយោបល់ ដកឃ្លា និងការចុះបន្ទាត់ដែលមិនចាំបាច់មុនពេលដាក់ដំណើរការផ្លូវការ។
២. **ជៀសវាង Selector ជ្រៅពេក**៖ \`body div.main section article p\` គឺយឺត។ គួរប្រើប្រាស់ Selector ខ្លីៗល្មម។
៣. **ប្រើប្រាស់ CSS Variables**៖ ប្រើប្រាស់តម្លៃឡើងវិញ ដើម្បីកុំឱ្យឯកសារមានទំហំធំ។
៤. **លុបចោលកូដមិនប្រើប្រាស់**៖ ជម្រះស្ទីលណាដែលលែងប្រើប្រាស់ចេញពីឯកសារ។

> **អនុសាសន៍:** កម្មវិធីបង្កើតកូដទំនើបៗ (Modern bundlers) តែងតែបង្រួម (Minify) និងជម្រះកូដ CSS របស់អ្នកដោយស្វ័យប្រវត្តិនៅពេល Build ទាញយកជាផលិតផលផ្លូវការ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Using CSS Variables for optimization and easy maintainability */
    :root {
      --primary-color: #4f46e5;
      --border-radius: 8px;
    }
    .btn {
      background-color: var(--primary-color);
      border-radius: var(--border-radius);
      color: white;
      padding: 10px 15px;
      border: none;
    }
  </style>
</head>
<body>
  <button class="btn">Optimized Button</button>
</body>
</html>`
  },
  {
    id: "css-accessibility",
    title: { en: "CSS Accessibility", km: "ភាពងាយស្រួលប្រើប្រាស់ CSS" },
    content: {
      en: `### CSS for Accessibility (a11y)
As web designers, we must ensure our styles are usable by everyone, including people with vision impairment, learning challenges, or motor disabilities.

### Key Accessibility Rules in CSS
1. **Color Contrast**: Ensure at least 4.5:1 ratio between text color and background color.
2. **Never Hide Focus Outlines**: Don't use \`outline: none\` without providing a visible focus fallback style for keyboard tab-navigation!
3. **Support Text Resizing**: Use \`rem\` units instead of hardcoded \`px\` for typography sizes.

> **Tip:** You can support users who prefer reduced animations using the media query: \`@media (prefers-reduced-motion: reduce)\`!`,
      km: `### ភាពងាយស្រួលប្រើប្រាស់ (Accessibility) ក្នុង CSS
ក្នុងនាមជាអ្នករចនាគេហទំព័រ យើងត្រូវធានាថាការរចនារបស់យើងអាចប្រើប្រាស់បានដោយមនុស្សគ្រប់រូប រួមទាំងអ្នកដែលមានបញ្ហាគំហើញ បញ្ហាក្នុងការរៀនសូត្រ ឬពិការភាពកាយសម្បទា។

### ច្បាប់ងាយស្រួលប្រើប្រាស់គន្លឹះក្នុង CSS
១. **កម្រិតពណ៌ផ្ទុយ (Color Contrast)**៖ ធានាឱ្យមានកម្រិតពណ៌ខុសគ្នាប្រកបដោយតុល្យភាពយ៉ាងហោចណាស់ ៤.៥:១ រវាងអត្ថបទ និងផ្ទៃខាងក្រោយ។
២. **កុំលាក់ Focus Outlines**៖ ហាមប្រើ \`outline: none\` ដោយគ្មានការផ្ដល់ជំនួសនូវស្ទីល focus ផ្សេងឡើយ ព្រោះវាធ្វើឱ្យអ្នកប្រើប្រាស់ក្តារចុច (Tab-navigation) ពិបាកមើល!
៣. **គាំទ្រការ Zoom ទំហំអក្សរ**៖ ប្រើខ្នាត \`rem\` ជំនួសឱ្យ \`px\` សម្រាប់ទំហំអក្សរ។

> **អនុសាសន៍:** អ្នកអាចគាំទ្រអ្នកប្រើប្រាស់ដែលមិនចូលចិត្តចលនាខ្លាំង (ពិបាកភ្នែក) ដោយប្រើ \`@media (prefers-reduced-motion: reduce)\`!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .accessible-btn {
      background-color: #1e1b4b; /* Deep Indigo - high contrast */
      color: #e0e7ff; /* Soft Light Blue text */
      font-size: 1rem;
      padding: 12px 24px;
      border: none;
      cursor: pointer;
    }
    /* Highlight clearly on focus tab! */
    .accessible-btn:focus {
      outline: 4px solid #f59e0b; /* Bright amber outline */
      outline-offset: 4px;
    }
  </style>
</head>
<body>
  <p>Click inside the preview panel below, then press the "Tab" key on your keyboard to test focus style:</p>
  <button class="accessible-btn">Accessible Button</button>
</body>
</html>`
  },
  {
    id: "css-website-layout",
    title: { en: "CSS Website Layout", km: "ការរៀបចំប្លង់គេហទំព័រ CSS" },
    content: {
      en: `### CSS Website Layout
A website layout is a pattern or framework used to organize the visible contents of a website (header, footer, content columns, sidebar).

### Classic Layout Structure
- **Header**: Top banner for branding and titles.
- **Navigation Bar**: Links to navigate pages.
- **Main Content**: The central focal area (often split into columns).
- **Footer**: Bottom information banner (copyrights, credits).

> **Tip:** In modern designs, layouts are fully responsive, stacking columns vertically on mobile screens while showing them side-by-side on wide desktops.`,
      km: `### ការរៀបចំប្លង់គេហទំព័រ (Website Layout) ក្នុង CSS
ប្លង់គេហទំព័រគឺជាក្របខ័ណ្ឌ ឬលំនាំដែលប្រើដើម្បីរៀបចំមាតិកានៃគេហទំព័រឱ្យមានសណ្តាប់ធ្នាប់ (មានក្បាលទំព័រ ផ្នែកចំហៀង មាតិកាកណ្តាល និងជើងទំព័រ)។

### រចនាសម្ព័ន្ធប្លង់បុរាណ
- **Header (ក្បាលទំព័រ)**៖ ផ្ទាំងខាងលើសម្រាប់ដាក់ស្លាកយីហោ និងចំណងជើង។
- **Navigation Bar (របារម៉ឺនុយ)**៖ លីងសម្រាប់បញ្ជូនទៅកាន់ទំព័រនានា។
- **Main Content (មាតិកាស្នូល)**៖ ផ្នែកកណ្តាលបង្ហាញខ្លឹមសារ (ច្រើនតែបែងចែកជាជួរឈរ)។
- **Footer (ជើងទំព័រ)**៖ ផ្ទាំងខាងក្រោមបង្អស់សម្រាប់បង្ហាញព័ត៌មានរក្សាសិទ្ធិ។

> **អនុសាសន៍:** នៅក្នុងការរចនាទំនើប ប្លង់ត្រូវបានរចនាឱ្យឆ្លើយតប (Responsive) ដោយបង្រួមជួរឈរឱ្យធ្លាក់ចុះមកបញ្ឈរលើទូរស័ព្ទដៃ និងបង្ហាញតម្រៀបផ្ដេកលើអេក្រង់កុំព្យូទ័រធំៗ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: sans-serif;
      margin: 0;
      background: #f1f5f9;
    }
    header {
      background: #1e293b;
      color: white;
      text-align: center;
      padding: 20px;
    }
    .layout-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      padding: 15px;
    }
    main {
      flex: 3;
      background: white;
      padding: 15px;
      border-radius: 8px;
    }
    aside {
      flex: 1;
      background: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
    }
    footer {
      background: #334155;
      color: white;
      text-align: center;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>My Website Header</h1>
  </header>
  
  <div class="layout-grid">
    <main>
      <h2>Main Topic</h2>
      <p>This is the main central content zone representing the core webpage data columns.</p>
    </main>
    <aside>
      <h3>Sidebar</h3>
      <p>Useful resource links or announcements.</p>
    </aside>
  </div>
  
  <footer>
    <p>© 2026 My Web Layout. All Rights Reserved.</p>
  </footer>
</body>
</html>`
  }
];
