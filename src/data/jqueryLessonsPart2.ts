import { Lesson } from '../types';

export const jqueryLessonsPart2: Lesson[] = [
  {
    id: "jq-get",
    title: { en: "jQuery Get", km: "ការទាញយកតម្លៃ (Get)" },
    content: {
      en: `# jQuery HTML Get Content and Attributes
jQuery contains powerful methods for changing and manipulating HTML elements and attributes.

### Getting Content:
- \`text()\` - Returns or sets the combined text content of the selected elements (ignores HTML markup).
- \`html()\` - Returns or sets the content of selected elements, including HTML tags.
- \`val()\` - Returns or sets the value of form fields (like input inputs, select option, textareas).

### Getting Attributes:
The jQuery \`attr()\` method is used to get attribute values (like \`href\`, \`src\`, \`title\` etc.).
\`\`\`javascript
var link = $("a").attr("href"); // Gets href attribute
\`\`\`

> **Note:** Getting content always returns the value from the *first* matched element if multiple elements exist!`,
      km: `# ការទាញយកមាតិកា និងលក្ខណៈ (Get)
jQuery រួមបញ្ចូលនូវវិធីសាស្ត្រសំខាន់ៗជាច្រើនសម្រាប់ផ្លាស់ប្តូរ និងរៀបចំធាតុ HTML និងលក្ខណៈសម្បត្តិ (Attributes) របស់វា។

### ការទាញយកមាតិកា (Get Content)៖
- \`text()\` - ត្រឡប់មកវិញ ឬកំណត់អត្ថបទធម្មតានៃធាតុដែលបានជ្រើសរើស (មិនគិតថេក HTML ឡើយ)។
- \`html()\` - ត្រឡប់មកវិញ ឬកំណត់មាតិកា រួមបញ្ចូលទាំងថេក HTML ផងដែរ។
- \`val()\` - ត្រឡប់មកវិញ ឬកំណត់តម្លៃរបស់ប្រអប់បញ្ចូលក្នុង Form (ដូចជា Input, Textarea, Select)។

### ការទាញយកលក្ខណៈ (Get Attributes)៖
វិធីសាស្ត្រ \`attr()\` ត្រូវបានប្រើប្រាស់ដើម្បីទាញយកតម្លៃនៃលក្ខណៈរបស់ធាតុ (ដូចជា \`href\`, \`src\`, \`title\` ជាដើម)។
\`\`\`javascript
var link = $("a").attr("href"); // ទទួលបានតម្លៃតំណភ្ជាប់ href
\`\`\`

> **ចំណាំ៖** ការទាញយកតម្លៃមាតិកានឹងផ្តល់មកវិញនូវតម្លៃនៃធាតុ *ដំបូងគេបង្អស់* ដែលវាស្វែងរកឃើញ ក្នុងករណីមានធាតុជាច្រើនត្រូវគ្នានឹង Selector!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Reading DOM Values with jQuery</h2>

  <p id="demoText">Hello, this is a <strong>bold statement</strong> paragraph.</p>
  
  <input type="text" id="demoInput" value="Phnom Penh" style="padding: 5px;">
  <br><br>

  <button id="btnText">Get text()</button>
  <button id="btnHtml">Get html()</button>
  <button id="btnVal">Get val()</button>

  <p style="margin-top:20px; font-weight:bold; color:red;">Output Result: <span id="console" style="color:black; font-weight:normal;"></span></p>

  <script>
    $(document).ready(function(){
      $("#btnText").click(function(){
        var txt = $("#demoText").text();
        $("#console").text(txt);
      });

      $("#btnHtml").click(function(){
        var htmlStr = $("#demoText").html();
        $("#console").text(htmlStr); // Showing HTML string tags
      });

      $("#btnVal").click(function(){
        var inputVal = $("#demoInput").val();
        $("#console").text(inputVal);
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-set",
    title: { en: "jQuery Set", km: "ការកំណត់តម្លៃ (Set)" },
    content: {
      en: `# jQuery HTML Set Content and Attributes
In the previous page we learned how to read values. We use the *same* three methods with arguments to **set** values!

### Setting Content:
- \`text("New content")\` - Overwrites with plain text.
- \`html("<u>New underlined text</u>")\` - Overwrites, rendering HTML elements.
- \`val("New input value")\` - Overwrites form fields value.

### Setting Attributes:
You can also use \`attr()\` to change or set attribute values:
\`\`\`javascript
$("a").attr("href", "https://sabaicode.com"); // Changes href
\`\`\`

### Multiple Attributes
You can set multiple attributes at the same time using a JSON object:
\`\`\`javascript
$("a").attr({
  "href" : "https://sabaicode.com",
  "title" : "SabayCode Learning"
});
\`\`\`

> **Tip:** You can also pass a callback function into \`text()\`, \`html()\`, and \`val()\` to calculate values dynamically!`,
      km: `# ការកំណត់មាតិកា និងលក្ខណៈ (Set)
នៅក្នុងមេរៀនមុន យើងបានរៀនពីរបៀបអានតម្លៃ។ យើងប្រើប្រាស់វិធីសាស្ត្រទាំង ៣ នេះដដែល ដោយគ្រាន់តែបន្ថែមអាគុយម៉ង់ ដើម្បី **កំណត់ (Set)** តម្លៃថ្មី!

### ការកំណត់មាតិកា (Set Content)៖
- \`text("មាតិកាថ្មី")\` - សរសេរជាន់ពីលើជាអត្ថបទធម្មតា។
- \`html("<u>អត្ថបទថ្មីមានគូសបន្ទាត់</u>")\` - សរសេរជាន់ពីលើ និងបង្ហាញជាថេក HTML។
- \`val("តម្លៃបញ្ចូលថ្មី")\` - កំណត់តម្លៃថ្មីឱ្យប្រអប់បញ្ចូលរបស់ Form។

### ការកំណត់លក្ខណៈ (Set Attributes)៖
អ្នកក៏អាចប្រើប្រាស់ \`attr()\` ដើម្បីផ្លាស់ប្តូរ ឬកំណត់តម្លៃរបស់លក្ខណៈផ្សេងៗ៖
\`\`\`javascript
$("a").attr("href", "https://sabaicode.com"); // ផ្លាស់ប្តូរតំណភ្ជាប់ href
\`\`\`

### ការកំណត់លក្ខណៈច្រើនក្នុងពេលតែមួយ
អ្នកអាចកំណត់ Attributes ច្រើនក្នុងពេលតែមួយដោយសរសេរជា JSON Object៖
\`\`\`javascript
$("a").attr({
  "href" : "https://sabaicode.com",
  "title" : "សប្បាយកូដ"
});
\`\`\`

> **គន្លឹះ៖** អ្នកក៏អាចបញ្ជូនអនុគមន៍ Callback ទៅក្នុង \`text()\`, \`html()\` និង \`val()\` ដើម្បីគណនាតម្លៃឌីណាមិកបានផងដែរ!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Writing DOM Values with jQuery</h2>

  <p id="p1">Old paragraph content.</p>
  <p id="p2">Old HTML paragraph content.</p>
  <input type="text" id="i1" value="Old value" style="padding:5px;">
  
  <br><br>
  <button id="setBtn">Set Content and Attributes</button>

  <p style="margin-top:20px;">
    <a href="#" id="link" style="color:blue; font-weight:bold;">Go to Website Link</a>
  </p>

  <script>
    $(document).ready(function(){
      $("#setBtn").click(function(){
        $("#p1").text("Changed successfully to custom text!");
        $("#p2").html("Changed to <em>italicized styled HTML</em>!");
        $("#i1").val("Brand New Input Value!");
        
        // Change link destination attribute
        $("#link").attr({
          "href": "https://sabaicode.com",
          "title": "SabayCode Learning Platform"
        }).text("Go to SabayCode Website!");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-add",
    title: { en: "jQuery Add", km: "ការបន្ថែមធាតុ (Add)" },
    content: {
      en: `# jQuery HTML Add Elements
With jQuery, you can add new HTML elements or content inside, before, or after existing elements.

### Four Core Methods:
- \`append()\` - Inserts content at the **inside end** of the selected elements.
- \`prepend()\` - Inserts content at the **inside beginning** of the selected elements.
- \`after()\` - Inserts content **directly after** the selected elements.
- \`before()\` - Inserts content **directly before** the selected elements.

### Creating Elements
You can create elements using HTML string tags, jQuery, or JavaScript DOM API, and append them instantly:
\`\`\`javascript
var txt1 = "<p>Created with HTML.</p>";
var txt2 = $("<p></p>").text("Created with jQuery.");
$("body").append(txt1, txt2); // Appends multiple elements
\`\`\`

> **Tip:** \`append()\` and \`prepend()\` put elements inside the target container, whereas \`before()\` and \`after()\` place elements outside the container!`,
      km: `# ការបន្ថែមធាតុ HTML (Add)
ជាមួយ jQuery អ្នកអាចបន្ថែមធាតុ HTML ថ្មីៗ ឬមាតិកាទៅក្នុង ទៅមុខ ឬទៅក្រោយធាតុដែលមានស្រាប់។

### វិធីសាស្ត្រស្នូលទាំង ៤៖
- \`append()\` - បន្ថែមមាតិកាថ្មីនៅ **ចុងបញ្ចប់ខាងក្នុង** នៃធាតុដែលបានជ្រើសរើស។
- \`prepend()\` - បន្ថែមមាតិកាថ្មីនៅ **ចំណុចចាប់ផ្តើមខាងក្នុង** នៃធាតុដែលបានជ្រើសរើស។
- \`after()\` - បន្ថែមមាតិកាថ្មីនៅ **ខាងក្រៅបន្ទាប់ពី** ធាតុដែលបានជ្រើសរើស។
- \`before()\` - បន្ថែមមាតិកាថ្មីនៅ **ខាងក្រៅមុន** ធាតុដែលបានជ្រើសរើស។

### របៀបបង្កើតធាតុ HTML ថ្មី
អ្នកអាចបង្កើតធាតុដោយប្រើអក្សរថេក HTML ធម្មតា, jQuery ឬ JavaScript DOM រួចបន្ថែមវាភ្លាមៗ៖
\`\`\`javascript
var txt1 = "<p>បង្កើតដោយ HTML ធម្មតា។</p>";
var txt2 = $("<p></p>").text("បង្កើតដោយ jQuery។");
$("body").append(txt1, txt2); // បន្ថែមធាតុច្រើនក្នុងពេលតែមួយ
\`\`\`

> **គន្លឹះ៖** \`append()\` និង \`prepend()\` គឺដាក់ធាតុចូលទៅ **ខាងក្នុង** ប្រអប់ដៅ ចំណែកឯ \`before()\` និង \`after()\` គឺដាក់ធាតុនៅ **ខាងក្រៅ** ប្រអប់ដៅ!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Inserting Content in DOM</h2>

  <ol id="myList" style="background:#f3f4f6; padding: 20px; border-radius: 6px;">
    <li>List Item A</li>
    <li>List Item B</li>
  </ol>

  <button id="btnAppend">Append List Item</button>
  <button id="btnPrepend">Prepend List Item</button>
  <button id="btnBefore">Before List</button>
  <button id="btnAfter">After List</button>

  <script>
    $(document).ready(function(){
      $("#btnAppend").click(function(){
        $("#myList").append("<li>Appended (End)</li>");
      });

      $("#btnPrepend").click(function(){
        $("#myList").prepend("<li>Prepended (Start)</li>");
      });

      $("#btnBefore").click(function(){
        $("#myList").before("<p style='color:green;'>Paragraph inserted BEFORE container list</p>");
      });

      $("#btnAfter").click(function(){
        $("#myList").after("<p style='color:blue;'>Paragraph inserted AFTER container list</p>");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-remove",
    title: { en: "jQuery Remove", km: "ការលុបធាតុ (Remove)" },
    content: {
      en: `# jQuery HTML Remove Elements
To remove existing HTML elements and content, jQuery provides two essential methods:

### 1. \`remove()\`
Removes the selected element **and** all of its child elements. (Completely deletes the element from the DOM).
\`\`\`javascript
$("#div1").remove();
\`\`\`

### 2. \`empty()\`
Removes only the child elements and contents from the selected elements. (Leaves the main container element empty).
\`\`\`javascript
$("#div1").empty();
\`\`\`

### Filtering Elements to Remove
The \`remove()\` method accepts a selector parameter as an argument to filter which items to remove:
\`\`\`javascript
$("p").remove(".test, .demo"); // Deletes only <p> elements with class="test" or "demo"
\`\`\`

> **Tip:** Use \`remove()\` to delete a container, and \`empty()\` if you want to reuse the container later but clear out previous list items or text!`,
      km: `# ការលុបធាតុ HTML (Remove)
ដើម្បីលុបធាតុ HTML និងមាតិកាដែលមានស្រាប់ចេញពីទំព័រ គេប្រើប្រាស់វិធីសាស្ត្រចម្បងពីរ៖

### ១. \`remove()\`
លុបធាតុដែលបានជ្រើសរើស **រួមទាំង** ធាតុរងខាងក្នុងរបស់វាទាំងអស់។ (លុបចោលទាំងស្រុងពី DOM)។
\`\`\`javascript
$("#div1").remove();
\`\`\`

### ២. \`empty()\`
លុបតែធាតុរង និងមាតិកាខាងក្នុងប៉ុណ្ណោះ។ (ទុកប្រអប់មេឱ្យនៅទំនេរ)។
\`\`\`javascript
$("#div1").empty();
\`\`\`

### ការលុបដោយចម្រោះលក្ខខណ្ឌ
វិធីសាស្ត្រ \`remove()\` អាចទទួលយកតម្រង Selector ជាអាគុយម៉ង់ ដើម្បីកំណត់ថាត្រូវលុបធាតុណាខ្លះ៖
\`\`\`javascript
$("p").remove(".test, .demo"); // លុបតែធាតុ <p> ណាដែលមាន class="test" ឬ "demo" ប៉ុណ្ណោះ
\`\`\`

> **គន្លឹះ៖** ប្រើប្រាស់ \`remove()\` ដើម្បីលុបប្រអប់ទាំងមូលចោល និងប្រើប្រាស់ \`empty()\` ប្រសិនបើចង់ទុកប្រអប់ចាស់ដើម្បីដាក់ទិន្នន័យថ្មីក្រោយៗទៀត!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    .container { padding: 15px; background: #ffe4e6; border: 1px solid #f43f5e; margin-bottom: 10px; border-radius: 6px; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Removing DOM Nodes</h2>

  <div class="container" id="mainBox">
    <h3>Alert Container Box</h3>
    <p class="test">Paragraph 1 (class "test")</p>
    <p class="info">Paragraph 2 (class "info")</p>
  </div>

  <button id="btnEmpty">Empty Content (empty())</button>
  <button id="btnRemove">Remove Box (remove())</button>
  <button id="btnFilter">Remove only .test elements</button>

  <script>
    $(document).ready(function(){
      $("#btnEmpty").click(function(){
        $("#mainBox").empty(); // Clears text inside, keeping container
      });

      $("#btnRemove").click(function(){
        $("#mainBox").remove(); // Deletes entire container
      });

      $("#btnFilter").click(function(){
        $("p").remove(".test"); // Only deletes matched class elements
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-css-classes",
    title: { en: "jQuery CSS Classes", km: "ការគ្រប់គ្រង CSS Classes" },
    content: {
      en: `# jQuery CSS Classes
With jQuery, you can easily add, remove, or toggle CSS classes on HTML elements, which allows you to dynamically alter layout styling.

### Four Crucial CSS Methods:
- \`addClass()\` - Adds one or more classes to the selected elements.
- \`removeClass()\` - Removes one or more classes from selected elements.
- \`toggleClass()\` - Toggles between adding/removing classes from selected elements.
- \`hasClass()\` - Checks if a selected element contains a specific class name (returns \`true\` or \`false\`).

### Example of adding multiple classes:
\`\`\`javascript
$("p").addClass("important blue font-bold");
\`\`\`

> **Note:** Do *not* write a dot symbol \`.\` inside the class name parameters of these methods (e.g., use \`addClass("blue")\`, NOT \`addClass(".blue")\`)!`,
      km: `# ការគ្រប់គ្រងថ្នាក់រចនា CSS Classes ក្នុង jQuery
ជាមួយ jQuery អ្នកអាចបន្ថែម លុប ឬប្តូរថ្នាក់ (CSS classes) នៃធាតុ HTML បានយ៉ាងងាយស្រួល ដែលជួយឱ្យយើងកែប្រែស្ទីលគេហទំព័របានភ្លាមៗ។

### វិធីសាស្ត្រ CSS សំខាន់ៗទាំង ៤៖
- \`addClass()\` - បន្ថែមថ្នាក់រចនាមួយ ឬច្រើនទៅកាន់ធាតុដែលបានជ្រើសរើស។
- \`removeClass()\` - លុបចោលថ្នាក់រចនាមួយ ឬច្រើនចេញពីធាតុដែលបានជ្រើសរើស។
- \`toggleClass()\` - ប្តូរ (Toggle) រវាងការបន្ថែម និងការលុបថ្នាក់រចនាឆ្លាស់គ្នា។
- \`hasClass()\` - ពិនិត្យថាតើធាតុដែលបានជ្រើសរើសមានថ្នាក់រចនាជាក់លាក់ណាមួយដែរឬទេ (ត្រឡប់ជា \`true\` ឬ \`false\`)។

### គំរូកូដបន្ថែមថ្នាក់រចនាច្រើនក្នុងពេលតែមួយ៖
\`\`\`javascript
$("p").addClass("important blue font-bold");
\`\`\`

> **ចំណាំ៖** មិនត្រូវសរសេរសញ្ញាចុច \`.\` នៅពីមុខឈ្មោះថ្នាក់រចនានៅក្នុងម៉ាស៊ីនប៉ារ៉ាម៉ែត្រទាំងនេះឡើយ (ឧទាហរណ៍៖ ប្រើ \`addClass("blue")\` មិនមែន \`addClass(".blue")\` ទេ)!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    .highlight { background-color: #facc15; font-size: 1.2rem; padding: 10px; border-radius: 5px; }
    .borderStyle { border: 3px dashed #d946ef; }
    .text-pink { color: #db2777; }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Dynamic Class Styling</h2>

  <p id="targetPara">This is a paragraph ready to receive dynamic styles.</p>

  <button id="addCls">Add Highlight Class</button>
  <button id="remCls">Remove Highlight Class</button>
  <button id="togCls" style="background:#a21caf; color:white; border:none; padding: 5px 10px;">Toggle Border Style</button>

  <script>
    $(document).ready(function(){
      $("#addCls").click(function(){
        $("#targetPara").addClass("highlight text-pink");
      });

      $("#remCls").click(function(){
        $("#targetPara").removeClass("highlight text-pink");
      });

      $("#togCls").click(function(){
        $("#targetPara").toggleClass("borderStyle");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-css-method",
    title: { en: "jQuery css()", km: "វិធីសាស្ត្រ css()" },
    content: {
      en: `# jQuery css() Method
The \`css()\` method is used to get or set style properties of selected HTML elements.

### 1. Getting a CSS property value:
To get the value of a specific CSS style property, use the following syntax:
\`\`\`javascript
$("p").css("background-color"); // Returns current background color string
\`\`\`

### 2. Setting a single CSS property:
To set a specific CSS property, use this syntax:
\`\`\`javascript
$("p").css("background-color", "yellow"); // Set single style
\`\`\`

### 3. Setting multiple CSS properties:
To set multiple CSS properties at once, pass a JSON style object:
\`\`\`javascript
$("p").css({
  "background-color": "yellow",
  "font-size": "200%",
  "color": "red"
});
\`\`\`

> **Note:** Unlike class methods, property names containing hyphens like \`background-color\` must either be wrapped in quotes \`"background-color"\` or written in camelCase \`backgroundColor\`!`,
      km: `# វិធីសាស្ត្រ css() ក្នុង jQuery
វិធីសាស្ត្រ \`css()\` ត្រូវបានប្រើប្រាស់ដើម្បីទាញយកតម្លៃ ឬកំណត់លក្ខណៈរចនាបថ (Style) ផ្ទាល់ទៅកាន់ធាតុ HTML។

### ១. ការទាញយកតម្លៃ CSS៖
ដើម្បីទទួលបានតម្លៃបច្ចុប្បន្ននៃ CSS property ណាមួយ៖
\`\`\`javascript
$("p").css("background-color"); // ត្រឡប់មកវិញនូវពណ៌ផ្ទៃក្រោយបច្ចុប្បន្ន
\`\`\`

### ២. ការកំណត់តម្លៃ CSS តែមួយ៖
ដើម្បីកំណត់តម្លៃ CSS តែមួយ៖
\`\`\`javascript
$("p").css("background-color", "yellow"); // កំណត់ពណ៌ផ្ទៃក្រោយទៅជាពណ៌លឿង
\`\`\`

### ៣. ការកំណត់តម្លៃ CSS ច្រើនក្នុងពេលតែមួយ៖
ដើម្បីកំណត់លក្ខណៈរចនាបថច្រើនជាមួយគ្នា ត្រូវបញ្ជូនជា JSON Object៖
\`\`\`javascript
$("p").css({
  "background-color": "yellow",
  "font-size": "20px",
  "color": "red"
});
\`\`\`

> **ចំណាំ៖** ផ្ទុយពីវិធីសាស្ត្រគ្រប់គ្រង Class ឈ្មោះលក្ខណៈរចនាបថដែលមានសញ្ញាដក ដូចជា \`background-color\` ត្រូវតែសរសេរនៅក្នុងសញ្ញាសម្រង់ \`"background-color"\` ឬសរសេរជា camelCase \`backgroundColor\`!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Direct CSS Control with css()</h2>

  <div id="paintBox" style="width: 150px; height: 100px; background: #10b981; color: white; display: flex; align-items:center; justify-content: center; font-weight: bold; margin-bottom: 15px; border-radius: 8px;">
    Style Box
  </div>

  <button id="getStyle">Read Background</button>
  <button id="setStyle">Set Multi Styles</button>

  <p id="msg" style="font-weight:bold; color:blue;"></p>

  <script>
    $(document).ready(function(){
      // Get CSS style
      $("#getStyle").click(function(){
        var bg = $("#paintBox").css("background-color");
        $("#msg").text("Current Background color: " + bg);
      });

      // Set Multiple CSS styles
      $("#setStyle").click(function(){
        $("#paintBox").css({
          "background-color": "#f43f5e",
          "font-size": "1.3rem",
          "border": "3px solid black",
          "width": "200px"
        });
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-dimensions",
    title: { en: "jQuery Dimensions", km: "ទំហំវិមាត្រ Dimensions" },
    content: {
      en: `# jQuery Dimensions
jQuery provides several important methods to inspect and manipulate the sizes and physical dimensions of HTML elements.

### Width and Height Methods:
- \`width()\` - Returns/sets width (excluding padding, borders, margins).
- \`height()\` - Returns/sets height (excluding padding, borders, margins).
- \`innerWidth()\` - Returns width (including padding).
- \`innerHeight()\` - Returns height (including padding).
- \`outerWidth()\` - Returns width (including padding & border). Pass \`true\` to include margins.
- \`outerHeight()\` - Returns height (including padding & border). Pass \`true\` to include margins.

### Dimension Reference Diagram:
- Content Width/Height
- Inner Width/Height = Content + Padding
- Outer Width/Height = Content + Padding + Border (+ Margin if argument is \`true\`)

> **Tip:** Measuring dimensions is crucial when arranging dynamically-positioned modal popups or drawing custom canvas elements!`,
      km: `# ទំហំវិមាត្រ (Dimensions) ក្នុង jQuery
jQuery ផ្តល់នូវវិធីសាស្ត្រសំខាន់ៗជាច្រើនដើម្បីវាស់វែង និងកែប្រែទំហំកម្ពស់ទទឹងរបស់ធាតុ HTML។

### វិធីសាស្ត្រគណនាកម្ពស់ទទឹង៖
- \`width()\` - ត្រឡប់/កំណត់ទទឹង (មិនគិត padding, border, margin ឡើយ)។
- \`height()\` - ត្រឡប់/កំណត់កម្ពស់ (មិនគិត padding, border, margin ឡើយ)។
- \`innerWidth()\` - ទទឹងរួមបញ្ចូលទាំង Padding។
- \`innerHeight()\` - កម្ពស់រួមបញ្ចូលទាំង Padding។
- \`outerWidth()\` - ទទឹងរួមបញ្ចូលទាំង Padding និង Border។ (បញ្ជូន \`true\` ដើម្បីបូកបញ្ចូលទាំង margin)។
- \`outerHeight()\` - កម្ពស់រួមបញ្ចូលទាំង Padding និង Border។ (បញ្ជូន \`true\` ដើម្បីបូកបញ្ចូលទាំង margin)។

### ដ្យាក្រាមយល់ដឹងពីទំហំ៖
- Content Width/Height
- Inner Width/Height = Content + Padding
- Outer Width/Height = Content + Padding + Border (+ Margin ប្រសិនបើផ្ដល់តម្លៃ \`true\`)

> **គន្លឹះ៖** ការវាស់វែងទំហំទាំងនេះមានសារៈសំខាន់ខ្លាំងណាស់សម្រាប់ការរៀបចំទីតាំងប្រអប់ Modal លោតឡើង ឬការគូររូបភាពឌីណាមិកផ្សេងៗ!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    #box {
      width: 200px; height: 100px;
      padding: 15px; margin: 20px;
      border: 5px solid #000;
      background: #fdba74;
      border-radius: 4px;
    }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Box Dimension Inspector</h2>

  <div id="box">Inspect Me</div>
  <button id="inspectBtn">Calculate Dimensions</button>

  <p id="stats" style="font-mono text-xs; color:#475569;"></p>

  <script>
    $(document).ready(function(){
      $("#inspectBtn").click(function(){
        var txt = "";
        txt += "Width: " + $("#box").width() + "px<br>";
        txt += "Height: " + $("#box").height() + "px<br>";
        txt += "InnerWidth: " + $("#box").innerWidth() + "px<br>";
        txt += "InnerHeight: " + $("#box").innerHeight() + "px<br>";
        txt += "OuterWidth: " + $("#box").outerWidth() + "px<br>";
        txt += "OuterHeight: " + $("#box").outerHeight() + "px";
        $("#stats").html(txt);
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-traversing",
    title: { en: "jQuery Traversing", km: "ការរុករក Traversing" },
    content: {
      en: `# jQuery DOM Traversing
DOM Traversing is the act of "moving through" the HTML tree structure.

It allows you to find elements relative to other elements, such as moving from a button to its parent list item, or down to find specific sub-elements.

### HTML DOM Tree Structure
In the DOM, elements have relationships with each other:
- **Parent:** The direct wrapper element.
- **Child:** Directly nested inside.
- **Siblings:** Elements sharing the same direct parent.
- **Ancestors:** Parents, grandparents, and up.
- **Descendants:** Children, grandchildren, and down.

In the next lessons, we will explore methods for traversing up, down, and sideways through the DOM!

> **Tip:** Traversing is extremely useful when writing event handlers for dynamic lists (e.g. finding the exact item row that a button was clicked in)!`,
      km: `# ការរុករករចនាសម្ព័ន្ធ (DOM Traversing)
DOM Traversing គឺជាសកម្មភាព "រុករកផ្លាស់ទី" តាមរចនាសម្ព័ន្ធមែកធាង HTML Tree។

វាអនុញ្ញាតឱ្យអ្នកស្វែងរកធាតុដោយធៀបទៅនឹងធាតុផ្សេងទៀត ដូចជាការផ្លាស់ទីពីប៊ូតុងមួយទៅកាន់ប្រអប់មេរបស់វា ឬចុះក្រោមស្វែងរកធាតុរងជាក់លាក់។

### រចនាសម្ព័ន្ធទំនាក់ទំនង HTML DOM Tree
នៅក្នុង DOM ធាតុនីមួយៗមានទំនាក់ទំនងនឹងគ្នា៖
- **Parent (មេ)៖** ធាតុដែលគ្របដណ្តប់ផ្ទាល់។
- **Child (កូន)៖** ធាតុដែលនៅខាងក្នុងផ្ទាល់។
- **Siblings (បងប្អូន)៖** ធាតុដែលស្ថិតក្នុងប្រអប់មេតែមួយជាមួយគ្នា។
- **Ancestors (ដូនតា)៖** មេ, ជីដូនជីតា បន្តឡើងទៅលើ។
- **Descendants (កូនចៅ)៖** កូន, ចៅ បន្តចុះទៅក្រោម។

នៅក្នុងមេរៀនបន្តបន្ទាប់ យើងនឹងស្វែងយល់ពីវិធីសាស្ត្ររុករកឡើងលើ ចុះក្រោម និងទៅចំហៀង!

> **គន្លឹះ៖** Traversing មានប្រយោជន៍ខ្លាំងណាស់ក្នុងការសរសេរបញ្ជីបញ្ជាឌីណាមិក (ឧទាហរណ៍៖ ការស្វែងរកជួរជាក់លាក់ដែលប៊ូតុងលុបត្រូវបានចុច)!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Visualizing HTML Tree Structure</h2>

  <div id="ancestor-box" style="padding: 10px; border:2px solid gray; background:#f8fafc;">
    div (Ancestor)
    <ul style="border:2px solid blue; padding: 15px; margin: 10px;">
      ul (Parent)
      <li id="child-li" style="border:2px solid red; padding: 10px; list-style:none; margin-top: 5px;">
        li (Active Element)
      </li>
    </ul>
  </div>

  <br>
  <button id="btnParent">Highlight Parent (ul)</button>

  <script>
    $(document).ready(function(){
      $("#btnParent").click(function(){
        // Finds direct parent of the li
        $("#child-li").parent().css("background-color", "#dbeafe");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-ancestors",
    title: { en: "jQuery Ancestors", km: "ការរុករកឡើងលើ Ancestors" },
    content: {
      en: `# jQuery Traversing - Ancestors
Ancestors are parents, grandparents, great-grandparents, etc.

To traverse up the DOM tree, jQuery provides three main methods:

### 1. \`parent()\`
Returns the direct parent element of the selected element. (Only goes up one level).
\`\`\`javascript
$("span").parent(); // Selects immediate parent
\`\`\`

### 2. \`parents()\`
Returns all ancestor elements of the selected element, all the way up to the document's root \`<html>\` element.
\`\`\`javascript
$("span").parents(); // Selects all parents
\`\`\`

### 3. \`parentsUntil()\`
Returns all ancestor elements between two given elements.
\`\`\`javascript
$("span").parentsUntil("div"); // Selects all ancestors between span and div
\`\`\`

> **Note:** These methods are extremely helpful when you need to change styling on a whole list item when clicking a nested icon!`,
      km: `# ការរុករកឡើងលើ (Ancestors) ក្នុង jQuery
Ancestors សំដៅទៅលើធាតុជាថ្នាក់មេ ជីដូនជីតា ឬដូនតាឡើងលើជាបន្តបន្ទាប់។

ដើម្បីរុករកឡើងលើមែកធាង DOM គេប្រើប្រាស់វិធីសាស្ត្រចម្បងចំនួន ៣៖

### ១. \`parent()\`
ត្រឡប់មកវិញនូវធាតុជាមេផ្ទាល់របស់ធាតុដែលបានជ្រើសរើស (ឡើងលើតែ ១ កម្រិតប៉ុណ្ណោះ)។
\`\`\`javascript
$("span").parent(); // ជ្រើសរើសមេផ្ទាល់
\`\`\`

### ២. \`parents()\`
ត្រឡប់មកវិញនូវរាល់ធាតុដូនតទាំងអស់ ឡើងទៅលើរហូតដល់ថេកកំពូល \`<html>\`។
\`\`\`javascript
$("span").parents(); // ជ្រើសរើសដូនតាទាំងអស់
\`\`\`

### ៣. \`parentsUntil()\`
ត្រឡប់មកវិញនូវរាល់ធាតុដូនតាដែលស្ថិតនៅចន្លោះធាតុទាំងពីរដែលបានបញ្ជាក់។
\`\`\`javascript
$("span").parentsUntil("div"); // ជ្រើសរើសធាតុដូនតាចន្លោះ span និង div
\`\`\`

> **ចំណាំ៖** វិធីសាស្ត្រទាំងនេះមានសារៈសំខាន់ខ្លាំងនៅពេលអ្នកចង់ផ្លាស់ប្តូរស្ទីលនៃប្រអប់មេទាំងមូល នៅពេលដែលគេចុចលើប៊ូតុងរងខាងក្នុង!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    .ancestors * { 
      display: block;
      border: 2px solid lightgrey;
      color: lightgrey;
      padding: 10px;
      margin: 15px;
    }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Traversing Upwards (Ancestors)</h2>

  <div class="ancestors" style="width:350px;">
    <div style="color:black; border-color:black;">
      div (Great-Grandparent)
      <ul>
        ul (Grandparent)
        <li>
          li (Parent)
          <span id="startNode" style="color:red; border-color:red;">Active Node (span)</span>
        </li>
      </ul>
    </div>
  </div>

  <button id="p1">parent()</button>
  <button id="p2">parents()</button>
  <button id="p3">parentsUntil(div)</button>

  <script>
    $(document).ready(function(){
      // Set everything to default border color
      function reset() {
        $(".ancestors *").css({"color": "lightgrey", "border-color": "lightgrey"});
        $("#startNode").css({"color": "red", "border-color": "red"});
      }

      $("#p1").click(function(){
        reset();
        $("#startNode").parent().css({"color": "blue", "border-color": "blue"});
      });

      $("#p2").click(function(){
        reset();
        $("#startNode").parents().css({"color": "green", "border-color": "green"});
      });

      $("#p3").click(function(){
        reset();
        $("#startNode").parentsUntil("div").css({"color": "purple", "border-color": "purple"});
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-descendants",
    title: { en: "jQuery Descendants", km: "ការរុករកចុះក្រោម Descendants" },
    content: {
      en: `# jQuery Traversing - Descendants
Descendants are children, grandchildren, great-grandchildren, and so on.

To traverse down the DOM tree, jQuery provides two essential methods:

### 1. \`children()\`
Returns all **direct children** elements of the selected element. (Only goes down one level).
\`\`\`javascript
$("div").children(); // Selects only immediate children
\`\`\`
You can also filter the child query by passing a selector:
\`\`\`javascript
$("div").children("p.test"); // Selects only <p> children with class="test"
\`\`\`

### 2. \`find()\`
Returns descendant elements of the selected element, searching all the way down to the last child level.
\`\`\`javascript
$("div").find("span"); // Finds all <span> inside div, no matter how deep!
\`\`\`
To find all descendants inside an element, use the star selector \`*\`:
\`\`\`javascript
$("div").find("*"); // Finds everything inside
\`\`\`

> **Tip:** \`children()\` is fast and strict, while \`find()\` is deep and recursive!`,
      km: `# ការរុករកចុះក្រោម (Descendants) ក្នុង jQuery
Descendants សំដៅទៅលើកូន ចៅ សមាជិកថ្នាក់ក្រោម ឬចៅជំនាន់ក្រោយចុះក្រោមជាបន្តបន្ទាប់។

ដើម្បីរុករកចុះក្រោមតាមមែកធាង DOM គេប្រើប្រាស់វិធីសាស្ត្រចម្បងពីរ៖

### ១. \`children()\`
ត្រឡប់មកវិញនូវរាល់ **កូនផ្ទាល់ (Direct Children)** នៃធាតុដែលបានជ្រើសរើស (ចុះក្រោមតែ ១ កម្រិតប៉ុណ្ណោះ)។
\`\`\`javascript
$("div").children(); // ជ្រើសរើសតែកូនផ្ទាល់
\`\`\`
អ្នកក៏អាចចម្រោះកូដស្វែងរកដោយបញ្ជូន Selector បន្ថែម៖
\`\`\`javascript
$("div").children("p.test"); // ជ្រើសរើសតែកូនជា <p> ណាដែលមាន class="test"
\`\`\`

### ២. \`find()\`
ស្វែងរក និងត្រឡប់មកវិញនូវរាល់ធាតុរង ចុះក្រោមជាបន្តបន្ទាប់រហូតដល់ចុងបញ្ចប់ដោយមិនគិតកម្រិតជម្រៅឡើយ។
\`\`\`javascript
$("div").find("span"); // ស្វែងរក <span> ទាំងអស់នៅក្នុង div មិនថានៅជ្រៅកម្រិតណាឡើយ!
\`\`\`
ដើម្បីស្វែងរកគ្រប់ធាតុទាំងអស់ដែលនៅខាងក្នុង ត្រូវប្រើប្រាស់សញ្ញាផ្កាយ \`*\`៖
\`\`\`javascript
$("div").find("*"); // ស្វែងរកទាំងអស់ខាងក្នុង
\`\`\`

> **គន្លឹះ៖** \`children()\` គឺដំណើរការលឿន និងតឹងរ៉ឹងបំផុត ចំណែកឯ \`find()\` គឺស្វែងរកជ្រៅលម្អិតទូទៅ!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    .descendants * { 
      display: block;
      border: 2px solid lightgrey;
      color: lightgrey;
      padding: 5px;
      margin: 10px;
    }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Traversing Downwards (Descendants)</h2>

  <div class="descendants" id="parentDiv" style="width:300px; color:black; border-color:black;">
    div (Target Element)
    <p class="first" style="color:black; border-color:black;">
      p (Direct Child)
      <span style="color:black; border-color:black;">span (Grandchild)</span>
    </p>
    <p class="second" style="color:black; border-color:black;">
      p (Direct Child)
    </p>
  </div>

  <button id="btnChildren">children()</button>
  <button id="btnFindSpan">find("span")</button>

  <script>
    $(document).ready(function(){
      function reset() {
        $("#parentDiv *").css({"color": "lightgrey", "border-color": "lightgrey"});
      }

      $("#btnChildren").click(function(){
        reset();
        // Highlights only direct <p> nodes
        $("#parentDiv").children().css({"color": "blue", "border-color": "blue"});
      });

      $("#btnFindSpan").click(function(){
        reset();
        // Highlights the deep grandchild span node
        $("#parentDiv").find("span").css({"color": "green", "border-color": "green"});
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-siblings",
    title: { en: "jQuery Siblings", km: "ការរុករកចំហៀង Siblings" },
    content: {
      en: `# jQuery Traversing - Siblings
Siblings share the exact same direct parent element in the HTML DOM tree.

jQuery provides several methods to traverse sideways between sibling elements:

### 1. \`siblings()\`
Returns all sibling elements of the selected element.
\`\`\`javascript
$("h2").siblings(); // Finds all siblings of h2
\`\`\`

### 2. \`next()\`
Returns the **next immediate** sibling element. (Only looks forward 1 step).
\`\`\`javascript
$("h2").next(); // Finds next element
\`\`\`

### 3. \`nextAll()\` & \`nextUntil()\`
- \`nextAll()\` returns all subsequent sibling elements.
- \`nextUntil()\` returns all subsequent sibling elements between two given targets.

### 4. \`prev()\`, \`prevAll()\` & \`prevUntil()\`
Work exactly like \`next()\`, \`nextAll()\` and \`nextUntil()\` but in the opposite direction (looking backwards instead of forwards).

> **Note:** These are extremely useful for accordion styling where clicking an item expands it and contracts all siblings!`,
      km: `# ការរុករកចំហៀង (Siblings) ក្នុង jQuery
Siblings (បងប្អូន) គឺជាធាតុដែលស្ថិតក្នុងប្រអប់មេផ្ទាល់ជាមួយគ្នា នៅក្នុងមែកធាង HTML DOM Tree។

jQuery ផ្តល់នូវវិធីសាស្ត្រជាច្រើនដើម្បីរុករកទៅចំហៀងរវាងធាតុបងប្អូនទាំងនោះ៖

### ១. \`siblings()\`
ត្រឡប់មកវិញនូវរាល់ធាតុបងប្អូនទាំងអស់នៃធាតុដែលបានជ្រើសរើស។
\`\`\`javascript
$("h2").siblings(); // ស្វែងរកបងប្អូនទាំងអស់របស់ h2
\`\`\`

### ២. \`next()\`
ត្រឡប់មកវិញនូវធាតុបងប្អូន **បន្ទាប់ភ្លាមៗ** (ទៅមុខតែ ១ កម្រិតប៉ុណ្ណោះ)។
\`\`\`javascript
$("h2").next(); // ស្វែងរកធាតុបន្ទាប់
\`\`\`

### ៣. \`nextAll()\` និង \`nextUntil()\`
- \`nextAll()\` ត្រឡប់មកវិញនូវរាល់ធាតុបងប្អូនបន្ទាប់ទាំងអស់។
- \`nextUntil()\` ត្រឡប់មកវិញនូវរាល់ធាតុបងប្អូនបន្ទាប់ដែលស្ថិតនៅចន្លោះគោលដៅទាំងពីរ។

### ៤. \`prev()\`, \`prevAll()\` និង \`prevUntil()\`
ដំណើរការដូចគ្នាទៅនឹង \`next()\`, \`nextAll()\` និង \`nextUntil()\` ដែរ ប៉ុន្តែស្វែងរកក្នុងទិសដៅបញ្ច្រាស (ថយក្រោយជំនួសឱ្យទៅមុខ)។

> **ចំណាំ៖** វិធីសាស្ត្រទាំងនេះមានប្រយោជន៍ខ្លាំងសម្រាប់ការបង្កើតបញ្ជី Accordion ដែលចុចលាតធាតុមួយ ហើយលាក់ធាតុបងប្អូនផ្សេងទៀត!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    .siblings * { 
      display: block;
      border: 2px solid lightgrey;
      color: lightgrey;
      padding: 5px;
      margin: 10px;
    }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Traversing Sideways (Siblings)</h2>

  <div class="siblings" style="width:300px;">
    <div>div (Parent)
      <p>p (Older Sibling)</p>
      <span>span (Older Sibling)</span>
      <h3 id="startH3" style="color:red; border-color:red;">h3 (Active Element)</h3>
      <h4>h4 (Younger Sibling)</h4>
      <h5>h5 (Younger Sibling)</h5>
    </div>
  </div>

  <button id="s1">siblings()</button>
  <button id="s2">next()</button>
  <button id="s3">nextAll()</button>

  <script>
    $(document).ready(function(){
      function reset() {
        $(".siblings *").css({"color": "lightgrey", "border-color": "lightgrey"});
        $("#startH3").css({"color": "red", "border-color": "red"});
      }

      $("#s1").click(function(){
        reset();
        $("#startH3").siblings().css({"color": "blue", "border-color": "blue"});
      });

      $("#s2").click(function(){
        reset();
        $("#startH3").next().css({"color": "green", "border-color": "green"});
      });

      $("#s3").click(function(){
        reset();
        $("#startH3").nextAll().css({"color": "purple", "border-color": "purple"});
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-filtering",
    title: { en: "jQuery Filtering", km: "ការចម្រោះ Filtering" },
    content: {
      en: `# jQuery Traversing - Filtering
Filtering allows you to narrow down your selection based on position inside a list or matching specific rules.

### Basic Filtering Methods:
- \`first()\` - Returns the first element of the selected elements.
- \`last()\` - Returns the last element of the selected elements.
- \`eq(index)\` - Returns an element with a specific index number (0-indexed).
- \`filter(selector)\` - Returns elements that match the given criteria.
- \`not(selector)\` - Returns all elements that do *not* match the criteria.

### Index Examples:
\`\`\`javascript
$("p").first(); // Selects only the 1st <p> element
$("p").eq(2); // Selects the 3rd <p> element (index 2)
\`\`\`

> **Tip:** Index values in \`eq()\` are **0-based**, meaning \`eq(0)\` selects the first item, and \`eq(1)\` selects the second!`,
      km: `# ការចម្រោះលក្ខខណ្ឌ (Filtering) ក្នុង jQuery
ការចម្រោះ (Filtering) អនុញ្ញាតឱ្យអ្នករៀបចំសម្រាំងយកធាតុដែលចង់បាន ផ្អែកលើទីតាំងលំដាប់លំដោយ ឬលក្ខខណ្ឌជាក់លាក់។

### វិធីសាស្ត្រចម្រោះមូលដ្ឋាន៖
- \`first()\` - ត្រឡប់មកវិញនូវធាតុដំបូងគេបង្អស់នៃក្រុមធាតុដែលបានជ្រើសរើស។
- \`last()\` - ត្រឡប់មកវិញនូវធាតុចុងក្រោយគេបង្អស់នៃក្រុមធាតុដែលបានជ្រើសរើស។
- \`eq(index)\` - ត្រឡប់មកវិញនូវធាតុដែលមានលេខសន្ទស្សន៍ (Index) ជាក់លាក់ (ចាប់ផ្តើមពីលេខ 0)។
- \`filter(selector)\` - ត្រឡប់មកវិញនូវរាល់ធាតុដែលត្រូវគ្នានឹងលក្ខខណ្ឌចម្រោះ។
- \`not(selector)\` - ត្រឡប់មកវិញនូវរាល់ធាតុដែលមិនត្រូវគ្នានឹងលក្ខខណ្ឌចម្រោះ។

### គំរូកូដ Index៖
\`\`\`javascript
$("p").first(); // ជ្រើសរើសតែធាតុ <p> ទី១ ប៉ុណ្ណោះ
$("p").eq(2); // ជ្រើសរើសធាតុ <p> ទី៣ (លេខសន្ទស្សន៍ ២)
\`\`\`

> **គន្លឹះ៖** តម្លៃលំដាប់ Index នៅក្នុង \`eq()\` គឺ **ចាប់ផ្ដើមពី 0** ដូច្នេះ \`eq(0)\` សំដៅលើធាតុដំបូងគេ ហើយ \`eq(1)\` សំដៅលើធាតុទីពីរ!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>jQuery Selecting by Index and Criteria</h2>

  <div style="padding:10px; background:#f1f5f9; border-radius: 6px;">
    <p class="demo">Paragraph A (index 0, class "demo")</p>
    <p>Paragraph B (index 1)</p>
    <p class="demo">Paragraph C (index 2, class "demo")</p>
    <p>Paragraph D (index 3)</p>
  </div>

  <br>
  <button id="btnFirst">first()</button>
  <button id="btnEq">eq(2)</button>
  <button id="btnFilter">filter(".demo")</button>
  <button id="btnNot">not(".demo")</button>

  <script>
    $(document).ready(function(){
      function clear() {
        $("p").css("background-color", "transparent");
      }

      $("#btnFirst").click(function(){
        clear();
        $("p").first().css("background-color", "#fca5a5");
      });

      $("#btnEq").click(function(){
        clear();
        $("p").eq(2).css("background-color", "#86efac");
      });

      $("#btnFilter").click(function(){
        clear();
        $("p").filter(".demo").css("background-color", "#60a5fa");
      });

      $("#btnNot").click(function(){
        clear();
        $("p").not(".demo").css("background-color", "#fef08a");
      });
    });
  </script>
</body>
</html>`
  }
];
