import { Lesson } from '../types';

export const jqueryLessonsPart1: Lesson[] = [
  {
    id: "jq-home",
    title: { en: "jQuery Home", km: "ទំព័រដើម jQuery" },
    content: {
      en: `# jQuery Tutorial
Welcome to the jQuery tutorial! jQuery is a fast, lightweight, and extremely feature-rich JavaScript library.

Its core philosophy is simple: **"Write Less, Do More"**. 

In this course, you will learn how to:
- Select and manipulate HTML elements easily.
- Create smooth animations and visual effects.
- Handle browser events (clicks, hovers, keyboard inputs).
- Perform asynchronous AJAX requests without page reloads.

> **Tip:** jQuery makes front-end web development simple by handling cross-browser compatibility issues automatically under the hood!`,
      km: `# មេរៀន jQuery
សូមស្វាគមន៍មកកាន់វគ្គសិក្សា jQuery! jQuery គឺជាបណ្ណាល័យ JavaScript (Library) ដ៏រហ័ស ស្រាល និងសម្បូរបែប។

ទស្សនវិជ្ជាស្នូលរបស់វាគឺសាមញ្ញ៖ **"សរសេរកូដតិច ធ្វើបានច្រើន" (Write Less, Do More)**។

នៅក្នុងវគ្គសិក្សានេះ អ្នកនឹងរៀនពីរបៀប៖
- ជ្រើសរើស និងផ្លាស់ប្តូរធាតុ HTML យ៉ាងងាយស្រួល។
- បង្កើតចលនា និងផលប៉ះពាល់ដែលទាក់ទាញ (Animations & Effects)។
- គ្រប់គ្រងព្រឹត្តិការណ៍ផ្សេងៗ (ដូចជាការចុច, Hover ឬការវាយអក្សរ)។
- ទាញយកទិន្នន័យពី Server តាមរយៈ AJAX ដោយមិនចាំបាច់ Reload ទំព័រ។

> **គន្លឹះ៖** jQuery ជួយសម្រួលដល់ការអភិវឌ្ឍគេហទំព័រ ដោយដោះស្រាយបញ្ហាដំណើរការខុសគ្នារវាង Browser ផ្សេងៗដោយស្វ័យប្រវត្ត!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    body { font-family: 'Segoe UI', sans-serif; text-align: center; padding: 20px; background: #f0fdf4; }
    .card { background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); display: inline-block; }
    h1 { color: #0284c7; }
    button { background: #0284c7; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: bold; transition: 0.2s; }
    button:hover { background: #0369a1; }
  </style>
</head>
<body>
  <div class="card">
    <h1 id="welcomeText">Hello, SabayCode Student!</h1>
    <p>jQuery is fully loaded and ready to simplify your scripts.</p>
    <button id="actionBtn">Click to Animate Text</button>
  </div>

  <script>
    $(document).ready(function(){
      $("#actionBtn").click(function(){
        $("#welcomeText").css("color", "#ec4899").slideUp(300).slideDown(500);
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-intro",
    title: { en: "jQuery Intro", km: "សេចក្តីផ្តើមអំពី jQuery" },
    content: {
      en: `# jQuery Introduction
Before jQuery, raw JavaScript required long, complex lines of code to do simple things like fetching an element, registering an event, or animating a div. 

### Why Use jQuery?
- **Saves Time:** Operations that take 10 lines in Vanilla JS can be written in 1 line of jQuery.
- **Cross-Browser Compatibility:** It works identically in Chrome, Safari, Firefox, and Edge.
- **DOM Manipulation:** Extremely intuitive API for reading and writing HTML elements.
- **Great for Legacy Projects:** Millions of websites use jQuery; knowing it is vital for web development roles.

> **Note:** jQuery operates entirely on top of JavaScript. It does not replace JavaScript, but rather extends it!`,
      km: `# សេចក្តីផ្តើមអំពី jQuery
មុនពេលមាន jQuery ការសរសេរកូដ JavaScript សុទ្ធតម្រូវឱ្យសរសេរកូដវែងៗ និងស្មុគស្មាញសម្រាប់ការងារសាមញ្ញៗ ដូចជាការចាប់យកធាតុ HTML ការចុះឈ្មោះព្រឹត្តិការណ៍ ឬការបង្កើតចលនា។

### ហេតុអ្វីត្រូវប្រើ jQuery?
- **សន្សំសំចៃពេលវេលា៖** ការងារដែលប្រើប្រាស់កូដ JS សុទ្ធចំនួន ១០បន្ទាត់ អាចជំនួសដោយកូដ jQuery តែ ១បន្ទាត់ប៉ុណ្ណោះ។
- **ភាពត្រូវគ្នានៃ Browser ទាំងអស់៖** វាដំណើរការដូចគ្នាបេះបិទនៅលើ Chrome, Safari, Firefox, និង Edge។
- **ការកែប្រែធាតុ DOM៖** មានភាពងាយស្រួលបំផុតក្នុងការអាន និងសរសេរកែប្រែធាតុ HTML។
- **ល្អសម្រាប់គម្រោងបច្ចុប្បន្ន៖** គេហទំព័ររាប់លាននៅតែប្រើប្រាស់ jQuery ដូច្នេះការយល់ដឹងពីវាគឺសំខាន់សម្រាប់អ្នកសរសេរគេហទំព័រ។

> **ចំណាំ៖** jQuery ដំណើរការនៅលើ JavaScript។ វាមិនជំនួស JavaScript ទេ ប៉ុន្តែវាជួយសម្រួលការងារឱ្យកាន់តែលឿន!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h3>Vanilla JS vs jQuery Example</h3>
  <div id="target" style="padding: 15px; background: #e0f2fe; margin-bottom: 10px; font-weight: bold;">
    Original Text
  </div>
  <button id="jsBtn" style="padding: 6px 12px;">Change with vanilla JS</button>
  <button id="jqBtn" style="padding: 6px 12px; background: #38bdf8; border: none; border-radius: 4px; color: white;">Change with jQuery</button>

  <script>
    // Vanilla JS method:
    document.getElementById("jsBtn").addEventListener("click", function() {
      document.getElementById("target").innerText = "Changed by Vanilla JS (Long syntax)";
    });

    // jQuery method:
    $(document).ready(function() {
      $("#jqBtn").click(function() {
        $("#target").text("Changed by jQuery (Short, clean code!)");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-get-started",
    title: { en: "jQuery Get Started", km: "ការចាប់ផ្តើមដំបូង" },
    content: {
      en: `# jQuery Get Started
There are two primary ways to start using jQuery in your web application:
1. **Load via CDN (Recommended):** Fetch the library directly from Google, Microsoft, or official jQuery servers.
2. **Download locally:** Download the jQuery library file from jquery.com and include it in your folder structure.

### Loading jQuery from a CDN
Simply include the following script tag inside the \`<head>\` or at the bottom of the \`<body>\` of your HTML page:
\`\`\`html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
\`\`\`

> **Note:** We use the compressed "minified" version (\`.min.js\`) because it is smaller in size and loads faster!`,
      km: `# ការចាប់ផ្តើមជាមួយ jQuery
មានវិធីចម្បងពីរដើម្បីចាប់ផ្តើមប្រើប្រាស់ jQuery នៅក្នុងគេហទំព័ររបស់អ្នក៖
1. **ទាញយកតាមរយៈ CDN (ណែនាំ)៖** ភ្ជាប់ទៅកាន់បណ្ណាល័យដោយផ្ទាល់ពីម៉ាស៊ីនមេ CDN របស់ Google ឬ jQuery។
2. **ទាញយកមករក្សាទុកផ្ទាល់ខ្លួន៖** ទាញយកឯកសារ jQuery ពីគេហទំព័រ jquery.com មករក្សាទុកក្នុងថតការងាររបស់អ្នក។

### ការកំណត់ភ្ជាប់តាម CDN
គ្រាន់តែបន្ថែមបន្ទាត់ខាងក្រោមទៅក្នុងថេក \`<head>\` ឬនៅចុងបញ្ចប់នៃថេក \`<body>\` នៃទំព័រ HTML របស់អ្នក៖
\`\`\`html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
\`\`\`

> **ចំណាំ៖** យើងប្រើប្រាស់កំណែបង្រួមតូច (Minified - \`.min.js\`) ព្រោះវាមានទំហំស្រាល និងផ្ទុកបានលឿនជាងមុន!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <!-- Including jQuery library via official jQuery CDN -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 25px;">
  <h2>Testing CDN Connection</h2>
  <p id="status">Checking library status...</p>

  <script>
    $(document).ready(function() {
      if (typeof jQuery != 'undefined') {
        $("#status")
          .text("Success! jQuery version " + $.fn.jquery + " is loaded correctly.")
          .css({"color": "green", "font-weight": "bold"});
      } else {
        $("#status").text("Failed to load jQuery library.").css("color", "red");
      }
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-syntax",
    title: { en: "jQuery Syntax", km: "រចនាសម្ព័ន្ធ Syntax" },
    content: {
      en: `# jQuery Syntax
The jQuery syntax is tailormade for **selecting** HTML elements and performing some **action** on them.

### Basic Syntax
\`\`\`javascript
$(selector).action()
\`\`\`
- A \`$\` sign to define/access jQuery.
- A \`(selector)\` to find (or query) HTML elements.
- A jQuery \`action()\` to be performed on the selected elements.

### The Document Ready Event
To prevent any jQuery code from running before the document is fully finished loading, we wrap our code inside:
\`\`\`javascript
$(document).ready(function(){
   // jQuery methods go here...
});
\`\`\`
Or the modern shorthand version:
\`\`\`javascript
$(function(){
   // jQuery methods go here...
});
\`\`\`

> **Tip:** Running jQuery code before the DOM is fully constructed can result in bugs because elements might not exist yet when selected!`,
      km: `# ទម្រង់សរសេរកូដ jQuery Syntax
ទម្រង់សរសេរកូដរបស់ jQuery ត្រូវបានបង្កើតឡើងជាពិសេសសម្រាប់ **ជ្រើសរើស (Selecting)** ធាតុ HTML និងធ្វើ **សកម្មភាព (Action)** ទៅលើធាតុទាំងនោះ។

### ទម្រង់មូលដ្ឋាន
\`\`\`javascript
$(selector).action()
\`\`\`
- សញ្ញា \`$\` តំណាងឱ្យការចូលប្រើប្រាស់មុខងាររបស់ jQuery។
- ផ្នែក \`(selector)\` ប្រើដើម្បីស្វែងរក ឬចង្អុលបង្ហាញធាតុ HTML។
- ផ្នែក \`action()\` គឺជាម៉ាស៊ីនសកម្មភាពដែលត្រូវអនុវត្តទៅលើធាតុទាំងនោះ។

### ព្រឹត្តិការណ៍ Document Ready
ដើម្បីការពារកុំឱ្យកូដ jQuery ដំណើរការមុនពេល Browser បង្កើតប្លង់គេហទំព័រទាំងមូលចប់ យើងត្រូវសរសេរវានៅក្នុង៖
\`\`\`javascript
$(document).ready(function(){
   // កូដ jQuery ត្រូវសរសេរនៅទីនេះ...
});
\`\`\`
ឬទម្រង់សរសេរកាត់៖
\`\`\`javascript
$(function(){
   // កូដ jQuery ត្រូវសរសេរនៅទីនេះ...
});
\`\`\`

> **គន្លឹះ៖** ការរត់កូដ jQuery មុនពេលទំព័រ HTML ផ្ទុកចប់ អាចបណ្តាលឱ្យកើតកំហុសឆ្គង ព្រោះធាតុទាំងនោះមិនទាន់មាននៅឡើយពេលដែលកូដដំណើរការ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>jQuery Syntax Play</h2>
  <p class="test">This is paragraph 1</p>
  <p class="test">This is paragraph 2</p>
  <button id="btn hide">Hide paragraphs</button>

  <script>
    // Traditional full syntax
    $(document).ready(function(){
      $("button").click(function(){
        $(".test").hide(); // selectors inside $() matching action()
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-selectors",
    title: { en: "jQuery Selectors", km: "ការជ្រើសរើស Selectors" },
    content: {
      en: `# jQuery Selectors
jQuery selectors allow you to select and manipulate HTML elements based on their Name, ID, Class, Type, Attribute, values and much more.

All selectors in jQuery start with the dollar sign and parentheses: \`$()\`.

### 1. Element Selector
Selects elements based on element tag name:
\`\`\`javascript
$("p") // Selects all <p> elements
\`\`\`

### 2. ID Selector
Selects a unique element using the \`#\` symbol:
\`\`\`javascript
$("#my-id") // Selects the element with id="my-id"
\`\`\`

### 3. Class Selector
Selects elements with a specific class using the \`.\` symbol:
\`\`\`javascript
$(".my-class") // Selects all elements with class="my-class"
\`\`\`

> **Tip:** jQuery uses standard CSS selectors, meaning if you already know CSS styling rules, you already know jQuery selectors!`,
      km: `# របៀបជ្រើសរើស Selectors ក្នុង jQuery
Selectors របស់ jQuery អនុញ្ញាតឱ្យអ្នកស្វែងរក និងគ្រប់គ្រងធាតុ HTML ដោយផ្អែកលើ ឈ្មោះ (TagName), អាយឌី (ID), ថ្នាក់ (Class), ប្រភេទ (Type), លក្ខណៈ (Attribute) និងលក្ខណៈជាច្រើនទៀត។

រាល់ Selectors ទាំងអស់នៅក្នុង jQuery ចាប់ផ្តើមដោយសញ្ញាដុល្លារ និងវង់ក្រចក៖ \`$()\`។

### ១. Element Selector
ជ្រើសរើសធាតុផ្អែកលើឈ្មោះថេក HTML៖
\`\`\`javascript
$("p") // ជ្រើសរើសរាល់ធាតុ <p> ទាំងអស់
\`\`\`

### ២. ID Selector
ជ្រើសរើសធាតុតែមួយគត់ដោយប្រើប្រាស់សញ្ញា \`#\`៖
\`\`\`javascript
$("#my-id") // ជ្រើសរើសធាតុដែលមាន id="my-id"
\`\`\`

### ៣. Class Selector
ជ្រើសរើសធាតុដែលមានឈ្មោះថ្នាក់ដូចគ្នា ដោយប្រើប្រាស់សញ្ញា \`.\`៖
\`\`\`javascript
$(".my-class") // ជ្រើសរើសរាល់ធាតុដែលមាន class="my-class"
\`\`\`

> **គន្លឹះ៖** jQuery ប្រើប្រាស់ស្តង់ដារ Selectors របស់ CSS ដូច្នេះប្រសិនបើអ្នកចេះសរសេររចនា CSS អ្នកប្រាកដជាចេះប្រើ Selectors របស់ jQuery!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2 id="main-header">jQuery Selectors Demo</h2>
  <p class="intro">This paragraph has class "intro".</p>
  <p class="info">This paragraph has class "info".</p>
  <p class="info">Another paragraph with class "info".</p>

  <button id="btnHeader" style="padding: 6px; margin: 4px;">Highlight Header (#id)</button>
  <button id="btnInfo" style="padding: 6px; margin: 4px;">Highlight Info (.class)</button>
  <button id="btnAllP" style="padding: 6px; margin: 4px;">Border all P (tag)</button>

  <script>
    $(document).ready(function(){
      // ID Selector
      $("#btnHeader").click(function(){
        $("#main-header").css("color", "blue");
      });

      // Class Selector
      $("#btnInfo").click(function(){
        $(".info").css("background-color", "yellow");
      });

      // Element Selector
      $("#btnAllP").click(function(){
        $("p").css("border", "1px solid red");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-events",
    title: { en: "jQuery Events", km: "ព្រឹត្តិការណ៍ Events" },
    content: {
      en: `# jQuery Events
An event represents the precise moment when something happens on your website (such as clicking a button, moving a mouse cursor, or submitting a form).

### Common DOM Events in jQuery:
- **Mouse Events:** \`click()\`, \`dblclick()\`, \`mouseenter()\`, \`mouseleave()\`
- **Keyboard Events:** \`keypress()\`, \`keydown()\`, \`keyup()\`
- **Form Events:** \`submit()\`, \`change()\`, \`focus()\`, \`blur()\`
- **Document Events:** \`load()\`, \`resize()\`, \`scroll()\`

### Syntax Example for Click Event:
\`\`\`javascript
$("p").click(function(){
  // Action to perform when clicked!
});
\`\`\`

> **Note:** The \`focus()\` event triggers when an input element gets focus (clicked on), and \`blur()\` triggers when it loses focus (clicked away)!`,
      km: `# ព្រឹត្តិការណ៍ផ្សេងៗ (Events) ក្នុង jQuery
ព្រឹត្តិការណ៍ (Event) គឺជាខណៈពេលជាក់លាក់មួយដែលសកម្មភាពណាមួយកើតឡើងនៅលើគេហទំព័ររបស់អ្នក (ដូចជាការចុចប៊ូតុង ការផ្លាស់ទីកណ្តុរ ឬការបញ្ជូនទិន្នន័យពី Form)។

### ព្រឹត្តិការណ៍ DOM ទូទៅក្នុង jQuery៖
- **ព្រឹត្តិការណ៍កណ្តុរ (Mouse)៖** \`click()\`, \`dblclick()\` (ចុចពីរដង), \`mouseenter()\` (កណ្តុរចូល), \`mouseleave()\` (កណ្តុរចេញ)
- **ព្រឹត្តិការណ៍ក្តារចុច (Keyboard)៖** \`keypress()\`, \`keydown()\`, \`keyup()\`
- **ព្រឹត្តិការណ៍ Form៖** \`submit()\`, \`change()\`, \`focus()\` (ផ្តោតលើ), \`blur()\` (លែងផ្តោតលើ)
- **ព្រឹត្តិការណ៍ទំព័រ៖** \`load()\`, \`resize()\`, \`scroll()\`

### គំរូកូដសម្រាប់ព្រឹត្តិការណ៍ Click៖
\`\`\`javascript
$("p").click(function(){
  // កូដសកម្មភាពដែលត្រូវធ្វើនៅពេលចុច!
});
\`\`\`

> **ចំណាំ៖** ព្រឹត្តិការណ៍ \`focus()\` កើតឡើងនៅពេលដែលប្រអប់បញ្ចូលអត្ថបទត្រូវបានចុចលើ (Focus) ហើយ \`blur()\` កើតឡើងនៅពេលដែលយើងចុចចេញក្រៅ!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    .box { width: 150px; height: 100px; background: lightblue; text-align: center; line-height: 100px; cursor: pointer; border-radius: 8px; margin: 10px 0; }
    input { padding: 8px; font-size: 14px; border: 1px solid #ccc; border-radius: 4px; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Interactive jQuery Events</h2>

  <div class="box" id="eventBox">Hover/Click Me</div>
  
  <p>Focus Test:</p>
  <input type="text" id="username" placeholder="Click inside me...">

  <script>
    $(document).ready(function(){
      // Mouse Click Event
      $("#eventBox").click(function(){
        $(this).css("background-color", "lightcoral").text("Clicked!");
      });

      // Mouse Hover Events
      $("#eventBox").mouseenter(function(){
        $(this).text("Mouse Entered");
      });
      $("#eventBox").mouseleave(function(){
        $(this).css("background-color", "lightblue").text("Mouse Left");
      });

      // Form Focus & Blur
      $("#username").focus(function(){
        $(this).css("border", "2px solid #00c6ff");
      });
      $("#username").blur(function(){
        $(this).css("border", "1px solid #ccc");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-hide-show",
    title: { en: "jQuery Hide/Show", km: "ការលាក់ និងបង្ហាញ (Hide/Show)" },
    content: {
      en: `# jQuery Hide/Show
With jQuery, you can easily hide and show HTML elements using the \`hide()\` and \`show()\` methods.

### Basic Syntax:
\`\`\`javascript
$(selector).hide(speed, callback);
$(selector).show(speed, callback);
\`\`\`
- The optional **speed** parameter specifies the speed of the effect (can be "slow", "fast", or milliseconds like 400, 1000).
- The optional **callback** parameter is a function to execute after the effect finishes.

### The Toggle Method
You can also alternate between hiding and showing elements using the \`toggle()\` method:
\`\`\`javascript
$(selector).toggle(speed, callback);
\`\`\`

> **Tip:** Under the hood, \`hide()\` simply sets the CSS style \`display: none;\`, and \`show()\` restores the original display style!`,
      km: `# ការលាក់ និងបង្ហាញ (Hide/Show) ក្នុង jQuery
ជាមួយ jQuery អ្នកអាចលាក់ និងបង្ហាញធាតុ HTML ផ្សេងៗបានយ៉ាងងាយស្រួលបំផុតដោយប្រើប្រាស់វិធីសាស្ត្រ \`hide()\` និង \`show()\`។

### ទម្រង់ Syntax៖
\`\`\`javascript
$(selector).hide(speed, callback);
$(selector).show(speed, callback);
\`\`\`
- ជម្រើស **speed** (ល្បឿន) អាចកំណត់ជា "slow", "fast" ឬជាចំនួនមីលីវិនាទី (ដូចជា 400, 1000)។
- ជម្រើស **callback** គឺជាអនុគមន៍ដែលត្រូវដំណើរការបន្ទាប់ពីការលាក់/បង្ហាញបានបញ្ចប់សព្វគ្រប់។

### វិធីសាស្ត្រ Toggle
អ្នកក៏អាចប្តូរលាក់ និងបង្ហាញឆ្លាស់គ្នាបានយ៉ាងលឿនដោយប្រើ \`toggle()\`៖
\`\`\`javascript
$(selector).toggle(speed, callback);
\`\`\`

> **គន្លឹះ៖** នៅពីក្រោយការងារនេះ វិធីសាស្ត្រ \`hide()\` គ្រាន់តែកំណត់រចនាបថ CSS \`display: none;\` ហើយ \`show()\` នឹងផ្លាស់ប្តូរមកជាលក្ខណៈដើមវិញប៉ុណ្ណោះ!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px; text-align: center;">
  <h2>jQuery Hide, Show & Toggle</h2>

  <div id="contentBlock" style="padding: 20px; background: #fef08a; border-radius: 8px; margin-bottom: 15px;">
    <strong>Hello!</strong> I am an alert box block that you can toggle.
  </div>

  <button id="hideBtn">Hide</button>
  <button id="showBtn">Show</button>
  <button id="toggleBtn" style="background: #3b82f6; color: white; border: none; padding: 5px 10px; border-radius: 4px;">Toggle Block</button>

  <script>
    $(document).ready(function(){
      $("#hideBtn").click(function(){
        $("#contentBlock").hide(1000); // 1 second slow hide
      });

      $("#showBtn").click(function(){
        $("#contentBlock").show("fast"); // fast show
      });

      $("#toggleBtn").click(function(){
        $("#contentBlock").toggle(400); // toggling
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-fade",
    title: { en: "jQuery Fade", km: "ការធ្វើឱ្យព្រាល (Fade)" },
    content: {
      en: `# jQuery Fade Methods
jQuery provides four distinct methods to control the fading/opacity of HTML elements.

### 1. \`fadeIn()\`
Fades in a hidden element to full opacity.
\`\`\`javascript
$(selector).fadeIn(speed, callback);
\`\`\`

### 2. \`fadeOut()\`
Fades out a visible element to complete transparency.
\`\`\`javascript
$(selector).fadeOut(speed, callback);
\`\`\`

### 3. \`fadeToggle()\`
Toggles between fading in and out.
\`\`\`javascript
$(selector).fadeToggle(speed, callback);
\`\`\`

### 4. \`fadeTo()\`
Allows fading to a specific opacity value (between 0.0 and 1.0).
\`\`\`javascript
$(selector).fadeTo(speed, opacity, callback);
\`\`\`

> **Note:** Unlike other fade methods, \`fadeTo()\` requires the **speed** and **opacity** parameters to be explicitly set!`,
      km: `# វិធីសាស្ត្រធ្វើឱ្យព្រាល (Fade) ក្នុង jQuery
jQuery ផ្តល់នូវវិធីសាស្ត្រចំនួន ៤ ផ្សេងគ្នាដើម្បីគ្រប់គ្រងភាពច្បាស់ ឬព្រាល (Opacity) នៃធាតុ HTML។

### ១. \`fadeIn()\`
ធ្វើឱ្យធាតុដែលលាក់ លេចឡើងបន្តិចម្តងៗរហូតដល់ច្បាស់ពេញលេញ។
\`\`\`javascript
$(selector).fadeIn(speed, callback);
\`\`\`

### ២. \`fadeOut()\`
ធ្វើឱ្យធាតុដែលមើលឃើញ ព្រាលបាត់ទៅវិញរហូតដល់បាត់ទាំងស្រុង។
\`\`\`javascript
$(selector).fadeOut(speed, callback);
\`\`\`

### ៣. \`fadeToggle()\`
ប្តូរលក្ខណៈលេចឡើង និងព្រាលបាត់ទៅវិញឆ្លាស់គ្នា។
\`\`\`javascript
$(selector).fadeToggle(speed, callback);
\`\`\`

### ៤. \`fadeTo()\`
អនុញ្ញាតឱ្យកំណត់កម្រិតភាពច្បាស់ (Opacity) ទៅជាតម្លៃជាក់លាក់ណាមួយ (ចន្លោះពី 0.0 ទៅ 1.0)។
\`\`\`javascript
$(selector).fadeTo(speed, opacity, callback);
\`\`\`

> **ចំណាំ៖** ខុសពីវិធីសាស្ត្រមុនៗ វិធីសាស្ត្រ \`fadeTo()\` តម្រូវឱ្យអ្នកបញ្ជាក់ពីតម្លៃ **speed** (ល្បឿន) និង **opacity** (ភាពច្បាស់) ជាដាច់ខាត!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    .box1 { width:80px; height:80px; background-color:red; display:inline-block; margin:5px; }
    .box2 { width:80px; height:80px; background-color:green; display:inline-block; margin:5px; }
    .box3 { width:80px; height:80px; background-color:blue; display:inline-block; margin:5px; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Fading Box Playground</h2>
  
  <button id="fadeBtn" style="padding: 10px; font-weight: bold;">Trigger Fade Toggle</button>
  <button id="fadeToBtn" style="padding: 10px;">Fade to 30% Opacity</button>
  
  <div style="margin-top:15px;">
    <div class="box1" id="b1"></div>
    <div class="box2" id="b2"></div>
    <div class="box3" id="b3"></div>
  </div>

  <script>
    $(document).ready(function(){
      $("#fadeBtn").click(function(){
        $("#b1").fadeToggle("slow");
        $("#b2").fadeToggle(1000);
        $("#b3").fadeToggle(1500);
      });

      $("#fadeToBtn").click(function(){
        $("#b1").fadeTo("slow", 0.3);
        $("#b2").fadeTo("slow", 0.3);
        $("#b3").fadeTo("slow", 0.3);
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-slide",
    title: { en: "jQuery Slide", km: "ការ سلាយ (Slide)" },
    content: {
      en: `# jQuery Slide Effects
Slide methods are perfect for creating dropdown menus, collapsible sections, or FAQ accordion boxes.

### 1. \`slideDown()\`
Slides an element downwards to reveal it.
\`\`\`javascript
$(selector).slideDown(speed, callback);
\`\`\`

### 2. \`slideUp()\`
Slides an element upwards to hide it.
\`\`\`javascript
$(selector).slideUp(speed, callback);
\`\`\`

### 3. \`slideToggle()\`
Toggles between sliding up and down.
\`\`\`javascript
$(selector).slideToggle(speed, callback);
\`\`\`

> **Tip:** Sliding effects adjust the **height** of an element continuously until it reaches the target height!`,
      km: `# ចលនាអូសលេចឡើង (Slide) ក្នុង jQuery
វិធីសាស្ត្រ Slide គឺល្អបំផុតសម្រាប់ការបង្កើតបញ្ជីម៉ឺនុយទម្លាក់ចុះ (Dropdown) ផ្នែកបង្រួមព័ត៌មាន ឬប្រអប់ FAQ។

### ១. \`slideDown()\`
អូសទាញធាតុចុះក្រោមដើម្បីបង្ហាញវា។
\`\`\`javascript
$(selector).slideDown(speed, callback);
\`\`\`

### ២. \`slideUp()\`
អូសរុញធាតុឡើងលើដើម្បីលាក់វា។
\`\`\`javascript
$(selector).slideUp(speed, callback);
\`\`\`

### ៣. \`slideToggle()\`
ប្តូររវាងការអូសឡើងលើ និងចុះក្រោមឆ្លាស់គ្នា។
\`\`\`javascript
$(selector).slideToggle(speed, callback);
\`\`\`

> **គន្លឹះ៖** ចលនា Slide គឺធ្វើការផ្លាស់ប្តូរ **កម្ពស់ (Height)** នៃធាតុ HTML ជាបន្តបន្ទាប់រហូតដល់កម្រិតដែលបានកំណត់!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    .panel { display: none; padding: 20px; background: #e0f2fe; text-align: center; border: 1px solid #7dd3fc; border-radius: 0 0 8px 8px; }
    .flip { padding: 10px; background: #0284c7; color: white; text-align: center; cursor: pointer; border-radius: 8px 8px 0 0; font-weight: bold; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Accordion Slide Example</h2>
  
  <div class="flip" id="trigger">Click here to Slide Panel</div>
  <div class="panel" id="targetPanel">
    <p>This panel slides smoothly with slideToggle()!</p>
    <p>Highly useful for mobile hamburger menus or FAQ sheets.</p>
  </div>

  <script>
    $(document).ready(function(){
      $("#trigger").click(function(){
        $("#targetPanel").slideToggle("slow");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-animate",
    title: { en: "jQuery Animate", km: "ការបង្កើតចលនា (Animate)" },
    content: {
      en: `# jQuery Animate
The \`animate()\` method is used to create custom visual animations by modifying CSS properties.

### Syntax:
\`\`\`javascript
$(selector).animate({properties}, speed, callback);
\`\`\`
- The **properties** parameter must be a JSON object of CSS properties to be animated (such as \`left\`, \`opacity\`, \`height\`, \`width\`, etc.).

### Important Rules:
1. **camelCase names:** You must write CSS properties using camelCase in jQuery (use \`backgroundColor\` instead of \`background-color\`, \`paddingLeft\` instead of \`padding-left\`).
2. **Relative Values:** You can define values relative to the current value using \`+=\` or \`-=\` prefixes.
3. **Queue System:** If you write multiple \`animate()\` calls in a row, jQuery creates an internal queue and plays them one after another.

> **Note:** By default, HTML elements have static positions and cannot be moved. To animate positioning (such as \`left\` or \`top\`), make sure to set the CSS position to \`relative\`, \`absolute\`, or \`fixed\` first!`,
      km: `# ការបង្កើតចលនា (Animate) ក្នុង jQuery
វិធីសាស្ត្រ \`animate()\` ត្រូវបានប្រើប្រាស់ដើម្បីបង្កើតចលនាប្លែកៗតាមតម្រូវការ ដោយការកែប្រែតម្លៃលក្ខណៈសម្បត្តិ CSS។

### ទម្រង់ Syntax៖
\`\`\`javascript
$(selector).animate({properties}, speed, callback);
\`\`\`
- ផ្នែក **properties** គឺជាវត្ថុ (Object) CSS ដែលត្រូវកែប្រែ (ដូចជា \`left\`, \`opacity\`, \`height\`, \`width\`)។

### វិធានសំខាន់ៗ៖
១. **សរសេរជា camelCase៖** រាល់លក្ខណៈសម្បត្តិ CSS ត្រូវសរសេរជាទម្រង់អក្សរជាប់គ្នា (ដូចជា \`paddingLeft\` ជំនួសឱ្យ \`padding-left\` ឬ \`fontSize\` ជំនួសឱ្យ \`font-size\`)។
២. **តម្លៃធៀប (Relative Values)៖** អ្នកអាចបន្ថែម ឬបន្ថយតម្លៃធៀបនឹងតម្លៃចាស់ដោយប្រើ \`+=\` ឬ \`-=\`។
៣. **ប្រព័ន្ធជួរ (Queue System)៖** ប្រសិនបើអ្នកសរសេរកូដ \`animate()\` ជាច្រើនបន្តបន្ទាប់គ្នា jQuery នឹងបញ្ចូលវាក្នុងជួរដើម្បីដំណើរការម្តងមួយៗ។

> **ចំណាំ៖** ជាធម្មតា ធាតុ HTML មានទីតាំងនឹងថ្កល់ (Static) មិនអាចផ្លាស់ទីបានទេ។ ដើម្បីធ្វើចលនាទីតាំង (ដូចជា \`left\` ឬ \`top\`) ត្រូវប្រាកដថាបានកំណត់ CSS position ទៅជា \`relative\`, \`absolute\` ឬ \`fixed\` ជាមុនសិន!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Custom jQuery Animations</h2>

  <button id="startBtn" style="padding: 8px 15px; margin-bottom: 10px;">Start Animation Sequence</button>
  <button id="growBtn" style="padding: 8px 15px; margin-bottom: 10px;">Grow Relative</button>

  <div id="box" style="background:#3b82f6; height:100px; width:100px; position:relative; border-radius: 8px; margin-top: 15px;"></div>

  <script>
    $(document).ready(function(){
      // Animation queue sequence
      $("#startBtn").click(function(){
        var box = $("#box");
        box.animate({left: '250px', opacity: '0.5'}, "slow");
        box.animate({height: '150px', width: '150px'}, "slow");
        box.animate({left: '0px', opacity: '1.0'}, "slow");
        box.animate({height: '100px', width: '100px'}, "slow");
      });

      // Relative value animation
      $("#growBtn").click(function(){
        $("#box").animate({
          width: '+=30px',
          height: '+=30px'
        }, 300);
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-stop",
    title: { en: "jQuery stop()", km: "ការបញ្ឈប់ stop()" },
    content: {
      en: `# jQuery stop()
The jQuery \`stop()\` method is used to stop an active animation or effect before it finishes playing.

It works for all jQuery effect functions, including sliding, fading, and custom animations.

### Syntax:
\`\`\`javascript
$(selector).stop(stopAll, goToEnd);
\`\`\`
- **stopAll (optional):** A boolean value specifying whether to clear the animation queue. Default is \`false\` (stops only the current active animation, letting queued ones play next).
- **goToEnd (optional):** A boolean value specifying whether to immediately complete the active animation. Default is \`false\`.

> **Tip:** \`stop()\` is highly useful for responsive drop-down hovers; stopping previous build-up animations prevents menus from flickering or playing endlessly after a user moves their mouse quickly!`,
      km: `# វិធីសាស្ត្រ stop() ក្នុង jQuery
វិធីសាស្ត្រ \`stop()\` របស់ jQuery ត្រូវបានប្រើប្រាស់ដើម្បីបញ្ឈប់ចលនា (Animation) ឬផលរំញ័រដែលកំពុងតែដើរ មុនពេលវាបញ្ចប់។

វាដំណើរការជាមួយរាល់មុខងារផលរំញ័រទាំងអស់របស់ jQuery រួមទាំង sliding, fading, និង custom animations។

### ទម្រង់ Syntax៖
\`\`\`javascript
$(selector).stop(stopAll, goToEnd);
\`\`\`
- **stopAll (ជម្រើស)៖** តម្លៃ Boolean កំណត់ថាតើត្រូវសម្អាតជួរចលនាទាំងអស់ដែរឬទេ។ តម្លៃលំនាំដើមគឺ \`false\` (បញ្ឈប់តែចលនាបច្ចុប្បន្ន រួចបន្តទៅចលនាបន្ទាប់នៅក្នុងជួរ)។
- **goToEnd (ជម្រើស)៖** តម្លៃ Boolean កំណត់ថាតើត្រូវរំលងទៅបញ្ចប់ចលនាបច្ចុប្បន្នភ្លាមៗដែរឬទេ។ តម្លៃលំនាំដើមគឺ \`false\`។

> **គន្លឹះ៖** \`stop()\` គឺមានប្រយោជន៍ខ្លាំងណាស់សម្រាប់ការទម្លាក់ចុះម៉ឺនុយ (Dropdown)។ ការបញ្ឈប់ចលនាចាស់ជួយកុំឱ្យម៉ឺនុយញ័រ ឬដំណើរការទៅមុខចុះឡើងឥតឈប់នៅពេលអ្នកប្រើប្រាស់រំកិលកណ្តុរលឿនពេក!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    #panel { padding: 40px; background: #fed7aa; display: none; text-align: center; border-radius: 8px; border: 1px solid #f97316; margin-top: 10px;}
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Stop Active Animation</h2>

  <button id="start" style="padding: 5px 12px; background: green; color: white; border: none; border-radius: 4px;">Slide Down (Slow)</button>
  <button id="stop" style="padding: 5px 12px; background: red; color: white; border: none; border-radius: 4px;">Stop Immediately!</button>

  <div id="panel">This is a slow sliding alert panel block. Press stop to freeze me!</div>

  <script>
    $(document).ready(function(){
      $("#start").click(function(){
        $("#panel").slideDown(5000); // 5 seconds slow slide
      });
      
      $("#stop").click(function(){
        $("#panel").stop();
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-callback",
    title: { en: "jQuery Callback", km: "មុខងារ Callback" },
    content: {
      en: `# jQuery Callback Functions
JavaScript statements are executed line-by-line. However, since animations take time to finish, the next line of code can execute while the animation is still running. This can lead to bugs.

To solve this, jQuery offers **Callback Functions** which are executed only *after* the current effect is 100% complete.

### Syntax:
\`\`\`javascript
$(selector).hide(speed, function() {
    // This code runs ONLY after hiding is finished!
});
\`\`\`

Compare this to a non-callback structure where an alert pops up immediately, before the fade is finished!

> **Tip:** Always use a callback if you want an action to wait for a visual animation to finish first!`,
      km: `# អនុគមន៍ Callback ក្នុង jQuery
ជាធម្មតា កូដ JavaScript ដំណើរការម្តងមួយបន្ទាត់។ ទោះជាយ៉ាងណា ដោយសារតែចលនា (Animation) ត្រូវការពេលវេលាដើម្បីបញ្ចប់ បន្ទាត់បន្ទាប់អាចនឹងរត់មុនពេលចលនាបញ្ចប់សព្វគ្រប់ ដែលបង្កជាបញ្ហាខុសឆ្គងផ្សេងៗ។

ដើម្បីដោះស្រាយបញ្ហានេះ jQuery ផ្តល់នូវ **អនុគមន៍ Callback (Callback Functions)** ដែលនឹងរត់លុះត្រាតែចលនាបច្ចុប្បន្នត្រូវបានបញ្ចប់ ១០០%។

### ទម្រង់ Syntax៖
\`\`\`javascript
$(selector).hide(speed, function() {
    // កូដត្រង់នេះរត់ លុះត្រាតែការលាក់ត្រូវបានបញ្ចប់សព្វគ្រប់!
});
\`\`\`

ប្រៀបធៀបវាទៅនឹងការមិនប្រើ Callback ដែលសារ Alert នឹងលោតឡើងភ្លាមៗ មុនពេលចលនាបាត់ទៅវិញចប់!

> **គន្លឹះ៖** ត្រូវប្រើប្រាស់ Callback ជានិច្ច ប្រសិនបើអ្នកចង់ឱ្យសកម្មភាពបន្ទាប់ រង់ចាំរហូតដល់ចលនាចាស់បញ្ចប់សិន!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>jQuery Callback Comparison</h2>

  <div id="box1" style="background: lightgreen; padding: 15px; margin: 10px 0; border-radius: 4px;">
    <strong>Box A:</strong> Uses Callback
  </div>
  <button id="btn1">Hide Box A</button>

  <div id="box2" style="background: lightcoral; padding: 15px; margin: 10px 0; border-radius: 4px;">
    <strong>Box B:</strong> No Callback (Buggy)
  </div>
  <button id="btn2">Hide Box B</button>

  <p id="msg" style="font-weight: bold; color: blue;"></p>

  <script>
    $(document).ready(function(){
      // With Callback: wait for animation
      $("#btn1").click(function(){
        $("#box1").hide(1500, function(){
          $("#msg").text("Box A is now fully hidden! (Callback executed)");
        });
      });

      // Without Callback: alerts immediately
      $("#btn2").click(function(){
        $("#box2").hide(1500);
        $("#msg").text("Warning: Box B started hiding, but this message shows immediately! (No callback)");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-chaining",
    title: { en: "jQuery Chaining", km: "ការតភ្ជាប់កូដ Chaining" },
    content: {
      en: `# jQuery Chaining
With jQuery, you can chain together multiple actions or methods in a single line of code.

This prevents the browser from having to query or look up the same element multiple times, greatly improving execution performance!

### How to Chain:
Simply append the actions one after another separated by a dot:
\`\`\`javascript
$("#my-box").css("color", "red").slideUp(1000).slideDown(1000);
\`\`\`

You can also format it with line breaks and indentations to make it readable:
\`\`\`javascript
$("#my-box")
  .css("color", "red")
  .slideUp(1000)
  .slideDown(1000);
\`\`\`

> **Tip:** When chaining, the actions are executed sequentially in order from left to right!`,
      km: `# ការតភ្ជាប់សកម្មភាព (Chaining) ក្នុង jQuery
ជាមួយ jQuery អ្នកអាចភ្ជាប់សកម្មភាព ឬវិធីសាស្ត្រជាច្រើនជាមួយគ្នា នៅក្នុងបន្ទាត់កូដតែមួយ។

ការធ្វើបែបនេះជួយការពារកុំឱ្យ Browser ត្រូវស្វែងរកធាតុដដែលៗច្រើនដង ដែលជួយបង្កើនល្បឿនដំណើរការកូដឱ្យកាន់តែលឿន!

### របៀបសរសេរ Chaining៖
គ្រាន់តែសរសេរបន្ថែមសកម្មភាពម្តងមួយៗដោយខណ្ឌដោយសញ្ញាចុច (Dot)៖
\`\`\`javascript
$("#my-box").css("color", "red").slideUp(1000).slideDown(1000);
\`\`\`

អ្នកក៏អាចចុះបន្ទាត់ដើម្បីឱ្យវាងាយស្រួលអាន៖
\`\`\`javascript
$("#my-box")
  .css("color", "red")
  .slideUp(1000)
  .slideDown(1000);
\`\`\`

> **គន្លឹះ៖** នៅពេលប្រើ Chaining សកម្មភាពទាំងអស់នឹងត្រូវដំណើរការតាមលំដាប់លំដោយពីឆ្វេងទៅស្តាំ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Method Chaining in Action</h2>

  <div id="subject" style="background:#a855f7; color:white; padding: 20px; border-radius: 8px; width: 250px; text-align:center;">
    Chaining Subject
  </div>
  <br>
  <button id="chainBtn" style="padding: 8px 15px; font-weight: bold;">Run Chained Methods</button>

  <script>
    $(document).ready(function(){
      $("#chainBtn").click(function(){
        // Chains: change CSS background -> slide up -> slide down -> fade to 50%
        $("#subject")
          .css("background-color", "#ec4899")
          .slideUp(800)
          .slideDown(800)
          .fadeTo(500, 0.5);
      });
    });
  </script>
</body>
</html>`
  }
];
