import { Lesson, ReferenceItem, Quiz, MiniProject } from '../types';

export const jqueryLessonsPart4: Lesson[] = [
  {
    id: "jq-ref-overview",
    title: { en: "jQuery Overview", km: "ទំព័រជំនួយរហ័សទូទៅ" },
    content: {
      en: `# jQuery Reference Overview
This section serves as a high-density, scannable quick-lookup cheatsheet. It is designed to help you find syntax patterns rapidly.

### Core Architecture Reference:
- **Main Accessor:** \`$(selector)\` or \`jQuery(selector)\`
- **Ready Hook:** \`$(function(){ ... })\` or \`$(document).ready(function(){ ... })\`
- **Method Chaining:** \`$(el).addClass("x").slideDown().fadeTo(0.5);\`

### API Categories Available:
1. **Selectors Reference:** Matches CSS rules and adds custom pseudo-filters.
2. **Events Reference:** Handles mouse, keyboard, form, and page triggers.
3. **Effects Reference:** Provides fade, slide, and custom animators.
4. **HTML/CSS Reference:** Manages attributes, contents, sizes, and styles.
5. **Traversing Reference:** Travels up, down, and sideways through DOM nodes.
6. **AJAX Reference:** Performs asynchronous requests.`,
      km: `# ទំព័រជំនួយរហ័សទូទៅរបស់ jQuery
ផ្នែកនេះគឺជាកម្រងជំនួយរហ័ស (Cheatsheet) ដែលមានដង់ស៊ីតេព័ត៌មានខ្ពស់ ងាយស្រួលរកមើល។ វាត្រូវបានរចនាឡើងដើម្បីជួយអ្នករកឃើញ Syntax ផ្សេងៗបានភ្លាមៗ។

### ឯកសារយោងរចនាសម្ព័ន្ធស្នូល៖
- **មុខងារចូលប្រើសំខាន់៖** \`$(selector)\` ឬ \`jQuery(selector)\`
- **Ready Hook៖** \`$(function(){ ... })\` ឬ \`$(document).ready(function(){ ... })\`
- **វិធីសាស្ត្រតភ្ជាប់ Chaining៖** \`$(el).addClass("x").slideDown().fadeTo(0.5);\`

### ប្រភេទឯកសារជំនួយរហ័ស៖
១. ** selectors reference៖** ផ្គូផ្គង CSS rules និងបន្ថែមតម្រងចម្រោះ។
២. ** events reference៖** គ្រប់គ្រងព្រឹត្តិការណ៍ចុច, ក្តារចុច, Form និងទំព័រ។
៣. ** effects reference៖** ផ្តល់នូវចលនា fades, slides, និង custom animators។
៤. ** HTML/CSS reference៖** គ្រប់គ្រង Attributes, មាតិកា, ទំហំកម្ពស់ទទឹង និង classes។
៥. ** Traversing reference៖** ធ្វើដំណើរឡើងលើ ចុះក្រោម និងទៅចំហៀងតាម DOM nodes។
៦. ** AJAX reference៖** អនុវត្តការទាញយកទិន្នន័យពី Server ក្នុង background។​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>jQuery Cheatsheet Launcher</h2>
  <p>Verify that your setup handles all standard categories of jQuery methods correctly.</p>
  <div id="statusBox" style="padding:15px; background:#eff6ff; border-radius:6px; font-weight:bold;">Ready for diagnostic test</div>
  <button id="testBtn" style="margin-top:10px; padding:6px 12px; cursor:pointer;">Run Diagnostic Test</button>

  <script>
    $(document).ready(function(){
      $("#testBtn").click(function(){
        // Perform multiple API category checks
        var hasLibrary = typeof jQuery !== "undefined";
        var worksSelector = $("p").length > 0;
        
        if (hasLibrary && worksSelector) {
          $("#statusBox")
            .text("System Diagnostic: PASS. jQuery core library is functional and DOM matching is active.")
            .css({"color": "green", "background": "#f0fdf4"});
        }
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-ref-selectors",
    title: { en: "jQuery Selectors Ref", km: "ជំនួយរហ័ស Selectors" },
    content: {
      en: `# jQuery Selectors Reference
A scannable index of the most frequently used jQuery selector patterns.

| Selector | Matches / Description | Example |
| :--- | :--- | :--- |
| \`*\` | Selects all elements in the DOM | \`$("*")\` |
| \`element\` | Selects all elements with the specified tag name | \`$("p")\` |
| \`.class\` | Selects all elements with the specified class | \`$(".intro")\` |
| \`#id\` | Selects the unique element with the specified ID | \`$("#main")\` |
| \`:first\` | Selects the first matched element | \`$("p:first")\` |
| \`:last\` | Selects the last matched element | \`$("p:last")\` |
| \`:even\` | Selects even matched elements (0, 2, 4...) | \`$("tr:even")\` |
| \`:odd\` | Selects odd matched elements (1, 3, 5...) | \`$("tr:odd")\` |
| \`:eq(index)\` | Selects element at a specific index | \`$("li:eq(3)")\` |
| \`:contains(text)\` | Selects elements containing the exact text | \`$("div:contains('Sok')")\` |
| \`[attribute]\` | Selects elements with the specified attribute | \`$("[href]")\` |
| \`:checked\` | Selects selected checkbox or radio inputs | \`$("input:checked")\` |`,
      km: `# ជំនួយរហ័សស្ដីពី Selectors (Selectors Cheatsheet)
សន្ទស្សន៍ជំនួយរហ័សនៃទម្រង់ Selectors របស់ jQuery ដែលគេឧស្សាហ៍ប្រើប្រាស់បំផុត។

| Selector | អត្ថន័យ / ការស្វែងរកត្រូវគ្នា | គំរូកូដ |
| :--- | :--- | :--- |
| \`*\` | ជ្រើសរើសរាល់ធាតុទាំងអស់នៅក្នុង DOM | \`$("*")\` |
| \`element\` | ជ្រើសរើសរាល់ធាតុដែលមានឈ្មោះថេកដូចគ្នា | \`$("p")\` |
| \`.class\` | ជ្រើសរើសរាល់ធាតុដែលមានឈ្មោះ Class ដូចគ្នា | \`$(".intro")\` |
| \`#id\` | ជ្រើសរើសធាតុតែមួយគត់ដែលមាន ID ដូចគ្នា | \`$("#main")\` |
| \`:first\` | ជ្រើសរើសធាតុទីមួយគេបង្អស់ | \`$("p:first")\` |
| \`:last\` | ជ្រើសរើសធាតុចុងក្រោយគេបង្អស់ | \`$("p:last")\` |
| \`:even\` | ជ្រើសរើសធាតុលំដាប់គូ (សន្ទស្សន៍ 0, 2, 4...) | \`$("tr:even")\` |
| \`:odd\` | ជ្រើសរើសធាតុលំដាប់សេស (សន្ទស្សន៍ 1, 3, 5...) | \`$("tr:odd")\` |
| \`:eq(index)\` | ជ្រើសរើសធាតុដែលមានលេខសន្ទស្សន៍ជាក់លាក់ | \`$("li:eq(3)")\` |
| \`:contains(text)\` | ជ្រើសរើសធាតុណាដែលមានពាក្យអត្ថបទដែលបានបញ្ជាក់ | \`$("div:contains('Sok')")\` |
| \`[attribute]\` | ជ្រើសរើសធាតុណាដែលមាន Attribute ជាក់លាក់ | \`$("[href]")\` |
| \`:checked\` | ជ្រើសរើសធាតុ Checkbox ឬ Radio ដែលត្រូវបានគូសជ្រើស | \`$("input:checked")\` |​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Selector Reference Test</h2>
  <ul>
    <li>Item Index 0</li>
    <li>Item Index 1</li>
    <li>Item Index 2</li>
    <li class="demo">Item Index 3 (class="demo")</li>
  </ul>

  <button id="btnEq">Highlight Index 2</button>
  <button id="btnClass">Highlight .demo</button>

  <script>
    $(document).ready(function(){
      $("#btnEq").click(function(){
        $("li").css("color", "black");
        $("li:eq(2)").css("color", "red");
      });

      $("#btnClass").click(function(){
        $("li").css("color", "black");
        $(".demo").css("color", "blue");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-ref-events",
    title: { en: "jQuery Events Ref", km: "ជំនួយរហ័ស Events" },
    content: {
      en: `# jQuery Events Reference
A high-density cheatsheet index of standard browser event binders.

| Event Method | Trigger Moment | Sample Syntax |
| :--- | :--- | :--- |
| \`click()\` | User clicks on an HTML element | \`$(el).click(fn)\` |
| \`dblclick()\` | User double-clicks on an HTML element | \`$(el).dblclick(fn)\` |
| \`mouseenter()\` | Mouse cursor enters the element boundary | \`$(el).mouseenter(fn)\` |
| \`mouseleave()\` | Mouse cursor leaves the element boundary | \`$(el).mouseleave(fn)\` |
| \`hover()\` | Combo helper of enter and leave actions | \`$(el).hover(enterFn, leaveFn)\` |
| \`focus()\` | An input field receives active focus cursor | \`$(el).focus(fn)\` |
| \`blur()\` | An input field loses active cursor focus | \`$(el).blur(fn)\` |
| \`change()\` | Value of a select, radio or checkbox updates | \`$(el).change(fn)\` |
| \`submit()\` | User submits an HTML form element | \`$(el).submit(fn)\` |
| \`keydown()\` | User presses down a keyboard button | \`$(el).keydown(fn)\` |
| \`keyup()\` | User releases a keyboard button | \`$(el).keyup(fn)\` |`,
      km: `# ជំនួយរហ័សស្ដីពី Events (Events Cheatsheet)
កម្រងជំនួយរហ័សនៃវិធីសាស្ត្រភ្ជាប់ព្រឹត្តិការណ៍ (Events) ផ្សេងៗរបស់ Browser។

| Event Method | ខណៈពេលកើតឡើង | ទម្រង់សរសេរកូដ |
| :--- | :--- | :--- |
| \`click()\` | នៅពេលចុចលើធាតុ HTML | \`$(el).click(fn)\` |
| \`dblclick()\` | នៅពេលចុចពីរដងជាប់គ្នាលើធាតុ HTML | \`$(el).dblclick(fn)\` |
| \`mouseenter()\` | នៅពេលកណ្តុររំកិលចូលក្នុងធាតុ | \`$(el).mouseenter(fn)\` |
| \`mouseleave()\` | នៅពេលកណ្តុររំកិលចេញក្រៅធាតុ | \`$(el).mouseleave(fn)\` |
| \`hover()\` | មុខងាររួមសម្រាប់ការរំកិលចូល និងចេញ | \`$(el).hover(inFn, outFn)\` |
| \`focus()\` | នៅពេលប្រអប់បញ្ចូលទទួលបានការផ្តោត (Focus) | \`$(el).focus(fn)\` |
| \`blur()\` | នៅពេលប្រអប់បញ្ចូលបាត់បង់ការផ្តោត (Blur) | \`$(el).blur(fn)\` |
| \`change()\` | នៅពេលតម្លៃប្រអប់បញ្ជី ឬទម្រង់ត្រូវបានផ្លាស់ប្តូរ | \`$(el).change(fn)\` |
| \`submit()\` | នៅពេលបញ្ជូនទិន្នន័យទម្រង់ Form | \`$(el).submit(fn)\` |
| \`keydown()\` | នៅពេលម្រាមដៃចុចប៊ូតុងក្តារចុចចុះក្រោម | \`$(el).keydown(fn)\` |
| \`keyup()\` | នៅពេលម្រាមដៃលែងប៊ូតុងក្តារចុចឡើងលើ | \`$(el).keyup(fn)\` |​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Event Register Test</h2>
  <div id="box" style="width:120px; height:80px; background:lightblue; line-height:80px; text-align:center; cursor:pointer;">
    Hover Me
  </div>
  <p id="msg"></p>

  <script>
    $(document).ready(function(){
      $("#box").hover(
        function(){
          $(this).css("background", "yellow").text("Entered");
          $("#msg").text("Hover state: Enter");
        },
        function(){
          $(this).css("background", "lightblue").text("Hover Me");
          $("#msg").text("Hover state: Leave");
        }
      );
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-ref-effects",
    title: { en: "jQuery Effects Ref", km: "ជំនួយរហ័ស Effects" },
    content: {
      en: `# jQuery Effects Reference
A high-density cheatsheet index of standard visual transitions and effects.

| Method | Description | Sample Syntax |
| :--- | :--- | :--- |
| \`hide()\` | Hides matching elements immediately or with speed | \`$(el).hide("slow")\` |
| \`show()\` | Displays matching elements immediately or with speed | \`$(el).show(500)\` |
| \`toggle()\` | Alternates between hiding and showing | \`$(el).toggle(300)\` |
| \`fadeIn()\` | Gradual entry of element opacity to 100% | \`$(el).fadeIn("fast")\` |
| \`fadeOut()\` | Gradual transparency decay of element to 0% | \`$(el).fadeOut(1000)\` |
| \`fadeToggle()\` | Alternates opacity fade-in/fade-out transitions | \`$(el).fadeToggle()\` |
| \`fadeTo()\` | Animates opacity directly to a specified level | \`$(el).fadeTo("slow", 0.5)\` |
| \`slideDown()\` | Reveals an element by expanding its height down | \`$(el).slideDown(400)\` |
| \`slideUp()\` | Collapses an element by shrinking height up | \`$(el).slideUp("slow")\` |
| \`slideToggle()\` | Alternates between slide up and down expansions | \`$(el).slideToggle()\` |
| \`animate()\` | Animates numeric CSS style properties | \`$(el).animate({width: "200px"})\` |
| \`stop()\` | Freezes active animations or clears queue | \`$(el).stop(true, false)\` |`,
      km: `# ជំនួយរហ័សស្ដីពី Effects (Effects Cheatsheet)
កម្រងជំនួយរហ័សនៃចលនា (Animations) និងផលប៉ះពាល់ការផ្លាស់ប្តូររូបភាពរបស់ jQuery។

| វិធីសាស្ត្រ | ការពិពណ៌នា និងសកម្មភាព | គំរូកូដ |
| :--- | :--- | :--- |
| \`hide()\` | លាក់ធាតុដែលត្រូវគ្នាភ្លាមៗ ឬតាមល្បឿនកំណត់ | \`$(el).hide("slow")\` |
| \`show()\` | បង្ហាញធាតុដែលត្រូវគ្នាភ្លាមៗ ឬតាមល្បឿនកំណត់ | \`$(el).show(500)\` |
| \`toggle()\` | ប្តូរឆ្លាស់គ្នារវាងការលាក់ និងបង្ហាញ | \`$(el).toggle(300)\` |
| \`fadeIn()\` | បង្ហាញធាតុឱ្យច្បាស់បន្តិចម្ដងៗរហូតដល់ ១០០% | \`$(el).fadeIn("fast")\` |
| \`fadeOut()\` | ធ្វើឱ្យធាតុព្រាលបន្តិចម្ដងៗរហូតដល់បាត់ទាំងស្រុង | \`$(el).fadeOut(1000)\` |
| \`fadeToggle()\` | ប្តូរឆ្លាស់រវាងការ fade-in និង fade-out | \`$(el).fadeToggle()\` |
| \`fadeTo()\` | កំណត់កម្រិតភាពច្បាស់ (Opacity) ទៅជាតម្លៃជាក់លាក់ | \`$(el).fadeTo("slow", 0.5)\` |
| \`slideDown()\` | បង្ហាញធាតុដោយទាញពន្លាតកម្ពស់ចុះក្រោម | \`$(el).slideDown(400)\` |
| \`slideUp()\` | លាក់ធាតុដោយបង្រួមកម្ពស់ឡើងលើ | \`$(el).slideUp("slow")\` |
| \`slideToggle()\` | ប្តូរឆ្លាស់រវាងការអូសឡើងលើ និងចុះក្រោម | \`$(el).slideToggle()\` |
| \`animate()\` | បង្កើតចលនាសម្រាប់លក្ខណៈសម្បត្តិលំដាប់លេខរបស់ CSS | \`$(el).animate({width: "200px"})\` |
| \`stop()\` | បញ្ឈប់ចលនាដែលកំពុងដើរ ឬសម្អាតជួរកូដចលនា | \`$(el).stop(true, false)\` |​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Effects Test Console</h2>
  <div id="target" style="width:100px; height:60px; background:coral; margin-bottom:10px; border-radius:4px;"></div>
  <button id="btnFade">fadeToggle()</button>
  <button id="btnSlide">slideToggle()</button>

  <script>
    $(document).ready(function(){
      $("#btnFade").click(function(){
        $("#target").fadeToggle("fast");
      });

      $("#btnSlide").click(function(){
        $("#target").slideToggle(400);
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-ref-html-css",
    title: { en: "jQuery HTML/CSS Ref", km: "ជំនួយរហ័ស HTML/CSS" },
    content: {
      en: `# jQuery HTML and CSS Reference
A high-density index of methods that modify the Document Object Model (DOM) and styles.

### 1. Content Read/Write Methods:
- \`text()\` - Read/write inner plain text content.
- \`html()\` - Read/write inner markup structure, rendering tags.
- \`val()\` - Read/write values from user inputs in a form.

### 2. Node Insertion / Deletion:
- \`append()\` - Inserts elements at the end *inside* the target.
- \`prepend()\` - Inserts elements at the start *inside* the target.
- \`before()\` - Places elements directly *before* the target (outside).
- \`after()\` - Places elements directly *after* the target (outside).
- \`remove()\` - Deletes elements and its children completely from DOM.
- \`empty()\` - Deletes child elements keeping the parent wrapper.

### 3. Styling & Dimensions:
- \`addClass("cls")\` / \`removeClass("cls")\` - Add/remove class styling.
- \`toggleClass("cls")\` - Alternate classes.
- \`css("prop", "val")\` - Sets raw CSS style property value.
- \`width()\` / \`height()\` - Read/set outer content dimensions.`,
      km: `# ជំនួយរហ័សស្ដីពី HTML និង CSS (HTML/CSS Cheatsheet)
កម្រងជំនួយរហ័សនៃវិធីសាស្ត្រកែប្រែរចនាសម្ព័ន្ធប្លង់ (DOM) និងលក្ខណៈរចនារបស់គេហទំព័រ។

### ១. វិធីសាស្ត្រអាន និងសរសេរមាតិកា៖
- \`text()\` - អាន ឬសរសេរអត្ថបទធម្មតា។
- \`html()\` - អាន ឬសរសេរកូដ HTML ពេញលេញ។
- \`val()\` - អាន ឬសរសេរតម្លៃនៅក្នុងប្រអប់បញ្ចូល Form។

### ២. ការបន្ថែម និងលុបធាតុ៖
- \`append()\` - បន្ថែមធាតុនៅចុងបញ្ចប់ខាងក្នុងធាតុគោលដៅ។
- \`prepend()\` - បន្ថែមធាតុនៅខាងដើមខាងក្នុងធាតុគោលដៅ។
- \`before()\` - ដាក់ធាតុនៅខាងក្រៅមុនធាតុគោលដៅ។
- \`after()\` - ដាក់ធាតុនៅខាងក្រៅបន្ទាប់ពីធាតុគោលដៅ។
- \`remove()\` - លុបធាតុ និងកូនៗទាំងអស់ចេញពី DOM ទាំងស្រុង។
- \`empty()\` - សម្អាតតែកូនៗខាងក្នុង ដោយរក្សាទុកប្រអប់មេ។

### ៣. ការរចនា និងទំហំវិមាត្រ៖
- \`addClass()\` / \`removeClass()\` - បន្ថែម ឬលុបថ្នាក់រចនា Class។
- \`toggleClass()\` - បើក/បិទថ្នាក់រចនាឆ្លាស់គ្នា។
- \`css()\` - កំណត់តម្លៃលក្ខណៈរចនាបថ CSS ផ្ទាល់។
- \`width()\` / \`height()\` - អាន ឬកំណត់ទំហំទទឹងកម្ពស់។​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>DOM Insertion Test</h2>
  <div id="box" style="padding:10px; background:#f1f5f9; border:1px solid #ccc;">Content: </div>
  <br>
  <button id="add">Append Text</button>

  <script>
    $(document).ready(function(){
      $("#add").click(function(){
        $("#box").append(" <strong>[New Node]</strong>");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-ref-traversing",
    title: { en: "jQuery Traversing Ref", km: "ជំនួយរហ័ស Traversing" },
    content: {
      en: `# jQuery Traversing Reference
Cheatsheet index for traveling across node relationships in the DOM tree.

| Traversing API | Search Direction | Select Criteria |
| :--- | :--- | :--- |
| \`parent()\` | Upward (1 step) | Immediate parent |
| \`parents()\` | Upward (Recursive) | All ancestors up to root HTML tag |
| \`parentsUntil(el)\`| Upward (Bounded) | Ancestors up to specified element |
| \`children()\` | Downward (1 step) | Immediate nested children |
| \`find(selector)\` | Downward (Recursive) | Matching descendants at any depth level |
| \`siblings()\` | Sideways | All elements sharing the same parent |
| \`next()\` | Sideways (1 step forward) | Next immediate sibling element |
| \`nextAll()\` | Sideways (Forward) | All subsequent sibling nodes |
| \`prev()\` | Sideways (1 step backward) | Previous sibling node |
| \`prevAll()\` | Sideways (Backward) | All preceding sibling nodes |
| \`first()\` / \`last()\` | Filter | First or last item of matching selector |
| \`eq(index)\` | Filter | Selects element at index (0-based) |`,
      km: `# ជំនួយរហ័សស្ដីពីការរុករក (Traversing Cheatsheet)
កម្រងជំនួយរហ័សនៃវិធីសាស្ត្រធ្វើដំណើរតាមទំនាក់ទំនងថ្នាក់នៅក្នុង DOM tree។

| វិធីសាស្ត្រ API | ទិសដៅស្វែងរក | លក្ខណៈដែលត្រូវជ្រើសរើស |
| :--- | :--- | :--- |
| \`parent()\` | ឡើងលើ (១ កម្រិត) | ធាតុជាមេផ្ទាល់ |
| \`parents()\` | ឡើងលើ (ទូទៅ) | ធាតុដូនតាទាំងអស់រហូតដល់ថេកកំពូល HTML |
| \`parentsUntil(el)\`| ឡើងលើ (មានដែនកំណត់) | ធាតុដូនតារហូតដល់ធាតុដែលបានបញ្ជាក់ |
| \`children()\` | ចុះក្រោម (១ កម្រិត) | ធាតុកូនៗផ្ទាល់ដែលនៅខាងក្នុង |
| \`find(selector)\` | ចុះក្រោម (ទូទៅ) | ធាតុកូនចៅដែលត្រូវគ្នានឹង selector គ្រប់ជម្រៅ |
| \`siblings()\` | ទៅចំហៀង | ធាតុបងប្អូនទាំងអស់ដែលស្ថិតក្នុងប្រអប់មេតែមួយ |
| \`next()\` | ទៅមុខ (១ កម្រិត) | ធាតុបងប្អូនបន្ទាប់ផ្ទាល់ |
| \`nextAll()\` | ទៅមុខ (ទាំងអស់) | រាល់ធាតុបងប្អូនបន្ទាប់ទាំងអស់ |
| \`prev()\` | ថយក្រោយ (១ កម្រិត) | ធាតុបងប្អូនមុនផ្ទាល់ |
| \`prevAll()\` | ថយក្រោយ (ទាំងអស់) | រាល់ធាតុបងប្អូនមុនទាំងអស់ |
| \`first()\` / \`last()\` | តម្រងចម្រោះ | ធាតុដំបូង ឬចុងក្រោយគេបង្អស់ |
| \`eq(index)\` | តម្រងចម្រោះ | ជ្រើសរើសធាតុតាមសន្ទស្សន៍លំដាប់ (ចាប់ពី 0) |​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Traversing API Checker</h2>
  <div id="pDiv" style="padding:15px; border:2px solid black;">
    Parent Wrapper
    <p class="first-p" style="margin:5px; border:1px solid red; padding:5px;">Child Paragraph 1</p>
    <p class="second-p" style="margin:5px; border:1px solid red; padding:5px;">Child Paragraph 2</p>
  </div>
  <br>
  <button id="findBtn">Run siblings() on .first-p</button>

  <script>
    $(document).ready(function(){
      $("#findBtn").click(function(){
        $(".first-p").siblings().css("background", "yellow");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-ref-ajax",
    title: { en: "jQuery AJAX Ref", km: "ជំនួយរហ័ស AJAX" },
    content: {
      en: `# jQuery AJAX Reference
Quick-lookup cheatsheet index of asynchronous HTTP network utilities.

### 1. High-Level Loading:
\`\`\`javascript
$(selector).load(url, data, callback);
\`\`\`
Loads HTML content from the server and inserts it directly inside the matching selector element.

### 2. HTTP Shorthands:
- **GET Request:** Fetches read-only data.
\`\`\`javascript
$.get(url, callback);
\`\`\`
- **POST Request:** Submits data payloads to server.
\`\`\`javascript
$.post(url, data, callback);
\`\`\`

### 3. Low-Level Fully Configured AJAX:
\`\`\`javascript
$.ajax({
  url: "https://api.example.com/data",
  type: "GET",
  dataType: "json",
  success: function(response) {
     console.log("Success:", response);
  },
  error: function(xhr, status, err) {
     console.error("Error:", err);
  }
});
\`\`\``,
      km: `# ជំនួយរហ័សស្ដីពី AJAX (AJAX Cheatsheet)
កម្រងជំនួយរហ័សនៃវិធីសាស្ត្រទាញយកទិន្នន័យពី Server ក្នុង Background (Asynchronous)។

### ១. ការទាញយកកម្រិតខ្ពស់ (High-Level Load)៖
\`\`\`javascript
$(selector).load(url, data, callback);
\`\`\`
ទាញយកកូដ HTML ពី Server ហើយដាក់បញ្ចូលទៅក្នុងធាតុដែលត្រូវគ្នាភ្លាមៗ។

### ២. វិធីសាស្ត្ររហ័ស HTTP Shorthands៖
- **GET Request៖** ទាញយកទិន្នន័យមកអាន។
\`\`\`javascript
$.get(url, callback);
\`\`\`
- **POST Request៖** បញ្ជូនទិន្នន័យទៅកាន់ Server។
\`\`\`javascript
$.post(url, data, callback);
\`\`\`

### ៣. វិធីសាស្ត្រលម្អិត $.ajax()៖
\`\`\`javascript
$.ajax({
  url: "https://api.example.com/data",
  type: "GET",
  dataType: "json",
  success: function(response) {
     console.log("សម្រេច៖", response);
  },
  error: function(xhr, status, err) {
     console.error("បរាជ័យ៖", err);
  }
});
\`\`\`​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>AJAX API Checker</h2>
  <div id="status" style="padding:10px; background:#fee2e2; border-radius:4px; font-weight:bold;">Status: Offline</div>
  <button id="btnFetch">Simulate $.ajax()</button>

  <script>
    $(document).ready(function(){
      $("#btnFetch").click(function(){
        $("#status").text("Connecting...");
        setTimeout(function(){
          $("#status")
            .text("Status: 200 OK (Connection Mock Successful!)")
            .css({"background": "#d1fae5", "color": "green"});
        }, 1000);
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-ref-misc",
    title: { en: "jQuery Misc Ref", km: "ជំនួយរហ័សលក្ខណៈផ្សេងៗ" },
    content: {
      en: `# jQuery Miscellaneous Reference
Cheatsheet index of special utilities and global properties.

### 1. noConflict Helper:
\`\`\`javascript
var customJQ = $.noConflict(); // Relinquishes control of $ variable
customJQ(document).ready(function(){ ... });
\`\`\`

### 2. Global Utilities:
- \`$.trim(str)\` - Removes leading/trailing whitespace.
- \`$.each(obj, fn)\` - Iterates over arrays or key/value objects.
- \`$.inArray(val, array)\` - Returns index of a matched value inside array, or -1 if not found.
- \`$.extend(dest, src)\` - Merges two objects together.

### 3. Check Data Type:
- \`$.isArray(val)\` - Checks if variable is an Array.
- \`$.isFunction(val)\` - Checks if variable is a Function.
- \`$.isNumeric(val)\` - Checks if variable is a Number.`,
      km: `# ជំនួយរហ័សស្ដីពីលក្ខណៈផ្សេងៗ (Misc Cheatsheet)
កម្រងជំនួយរហ័សនៃមុខងារប្រើប្រាស់ពិសេសៗ និងលក្ខណៈសកលរបស់ jQuery។

### ១. ដោះស្រាយទំនាស់ noConflict៖
\`\`\`javascript
var customJQ = $.noConflict(); // បោះបង់ការប្រើប្រាស់សញ្ញា $
customJQ(document).ready(function(){ ... });
\`\`\`

### ២. មុខងារជំនួយសកល (Global Utilities)៖
- \`$.trim(str)\` - លុបចន្លោះទំនេរនៅសងខាងនៃអត្ថបទ។
- \`$.each(obj, fn)\` - រុករកឆ្លងកាត់ធាតុក្នុង Array ឬ Key/Value Object។
- \`$.inArray(val, array)\` - ស្វែងរកទីតាំង index នៃតម្លៃនៅក្នុង Array (ត្រឡប់ -1 បើរកមិនឃើញ)។
- \`$.extend(dest, src)\` - បញ្ចូលគ្នា (Merge) រវាងវត្ថុពីរ។

### ៣. ការផ្ទៀងផ្ទាត់ប្រភេទរក្សាទុក (Data Type)៖
- \`$.isArray(val)\` - ផ្ទៀងផ្ទាត់ថាតើជា Array ដែរឬទេ។
- \`$.isFunction(val)\` - ផ្ទៀងផ្ទាត់ថាតើជាអនុគមន៍ (Function) ដែរឬទេ។
- \`$.isNumeric(val)\` - ផ្ទៀងផ្ទាត់ថាតើជាលេខ (Number) ដែរឬទេ។​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Global Utility Checker</h2>
  <button id="btnTrim">Trim String Whitespace</button>
  <p id="output" style="font-family:monospace; background:lightgray; padding:10px;"></p>

  <script>
    $(document).ready(function(){
      $("#btnTrim").click(function(){
        var rawStr = "    Phnom Penh City    ";
        var cleanStr = $.trim(rawStr);
        $("#output").html(
          "Raw: '" + rawStr + "' (Length: " + rawStr.length + ")<br>" +
          "Trimmed: '" + cleanStr + "' (Length: " + cleanStr.length + ")"
        );
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-ref-properties",
    title: { en: "jQuery Properties", km: "ជំនួយរហ័ស Properties" },
    content: {
      en: `# jQuery Properties Reference
A quick scannable index of properties built into the jQuery object and matching selector results.

| Property | Description | Example Usage |
| :--- | :--- | :--- |
| \`length\` | Returns the number of matched elements in the query selection | \`$("p").length\` |
| \`jquery\` | Returns the active version number of the loaded library | \`$.fn.jquery\` or \`jQuery().jquery\` |
| \`context\` | Returns the original DOM context node passed to selection (Deprecated) | \`$("p").context\` |

### Property Example:
\`\`\`javascript
var paragraphCount = $("p").length; // Gets number of paragraphs
console.log("Using jQuery Version: " + $.fn.jquery);
\`\`\``,
      km: `# ជំនួយរហ័សស្ដីពីលក្ខណៈសម្បត្តិ (Properties Cheatsheet)
កម្រងជំនួយរហ័សនៃលក្ខណៈសម្បត្តិ (Properties) ដែលមានស្រាប់នៅក្នុងវត្ថុរបស់ jQuery និងលទ្ធផលនៃការជ្រើសរើស។

| Property | ការពិពណ៌នា និងសកម្មភាព | របៀបសរសេរកូដ |
| :--- | :--- | :--- |
| \`length\` | ត្រឡប់មកវិញនូវចំនួនធាតុដែលស្វែងរកឃើញក្នុងការជ្រើសរើស | \`$("p").length\` |
| \`jquery\` | ត្រឡប់មកវិញនូវជំនាន់កំណែ (Version) របស់បណ្ណាល័យដែលកំពុងប្រើ | \`$.fn.jquery\` |
| \`context\` | ត្រឡប់មកវិញនូវ context node ដើមនៃ DOM (លែងប្រើ) | \`$("p").context\` |

### គំរូកូដ៖
\`\`\`javascript
var paragraphCount = $("p").length; // ទទួលបានចំនួនថេក Paragraph
console.log("កំពុងប្រើប្រាស់ jQuery Version: " + $.fn.jquery);
\`\`\`​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>jQuery Properties Test</h2>
  <p>Paragraph Node 1</p>
  <p>Paragraph Node 2</p>
  <button id="btnProp">Read length & version</button>
  <p id="results" style="font-weight:bold; color:teal;"></p>

  <script>
    $(document).ready(function(){
      $("#btnProp").click(function(){
        var count = $("p").length;
        var version = $.fn.jquery;
        $("#results").html(
          "Number of matched P tags: " + count + "<br>" +
          "Loaded jQuery Version: " + version
        );
      });
    });
  </script>
</body>
</html>`
  }
];

export const jqueryReferences: ReferenceItem[] = [
  {
    id: "ref-dollar",
    syntax: "$(selector)",
    desc: {
      en: "Query or fetch HTML elements to initialize jQuery operations.",
      km: "ចាប់យក ឬទាញយកធាតុ HTML ដើម្បីចាប់ផ្ដើមប្រតិបត្តិការជាមួយ jQuery។"
    },
    example: "$('p').hide();"
  },
  {
    id: "ref-click",
    syntax: "$(selector).click(function)",
    desc: {
      en: "Binds a handler function to be executed when the user clicks an element.",
      km: "ភ្ជាប់អនុគមន៍សកម្មភាពដើម្បីដំណើរការនៅពេលដែលអ្នកប្រើប្រាស់ចុចលើធាតុ។"
    },
    example: "$('button').click(function() { alert('Clicked!'); });"
  },
  {
    id: "ref-css",
    syntax: "$(selector).css(property, value)",
    desc: {
      en: "Get or set style properties on matching elements.",
      km: "ទាញយក ឬកំណត់លក្ខណៈរចនាបថរចនា CSS ទៅលើធាតុដែលត្រូវគ្នា។"
    },
    example: "$('#box').css('background-color', 'blue');"
  },
  {
    id: "ref-val",
    syntax: "$(selector).val()",
    desc: {
      en: "Get or set values from form input fields.",
      km: "ទាញយក ឬកំណត់តម្លៃអត្ថបទរបស់ប្រអប់បញ្ចូលទម្រង់ Form។"
    },
    example: "var name = $('#username').val();"
  }
];

export const jqueryQuizzes: Quiz[] = [
  {
    id: "jq-q1",
    question: {
      en: "Which character is used to declare or access jQuery?",
      km: "តើតួអក្សរ ឬនិមិត្តសញ្ញាមួយណាដែលត្រូវបានប្រើប្រាស់ដើម្បីប្រកាស ឬចូលប្រើប្រាស់មុខងារ jQuery?"
    },
    options: {
      en: ["& (Ampersand)", "? (Question Mark)", "$ (Dollar Sign)", "# (Hash symbol)"],
      km: ["& (Ampersand)", "? (សញ្ញាសួរ)", "$ (សញ្ញាដុល្លារ)", "# (សញ្ញាទ្រង់ទ្រាយ)"]
    },
    correctIndex: 2,
    explanation: {
      en: "The dollar sign ($) is the standard shortcut helper to access jQuery selectors and methods.",
      km: "សញ្ញាដុល្លារ ($) គឺជាផ្លូវកាត់ស្តង់ដារសម្រាប់ចូលប្រើប្រាស់ Selectors និងវិធីសាស្ត្រផ្សេងៗរបស់ jQuery។"
    }
  },
  {
    id: "jq-q2",
    question: {
      en: "Which jQuery selector selects all elements with class='intro'?",
      km: "តើ Selector មួយណាដែលជ្រើសរើសរាល់ធាតុដែលមាន class='intro'?"
    },
    options: {
      en: ["$('intro')", "$('.intro')", "$('#intro')", "$('*intro')"],
      km: ["$('intro')", "$('.intro')", "$('#intro')", "$('*intro')"]
    },
    correctIndex: 1,
    explanation: {
      en: "Classes are selected using a leading dot, hence $('.intro'). IDs use leading hashes, hence $('#intro').",
      km: "ថ្នាក់ Class ត្រូវបានជ្រើសរើសដោយប្រើសញ្ញាចុច (.) នៅពីមុខ ដូចនេះគឺ $('.intro')។ ចំណែកឯ ID ប្រើសញ្ញា (#) ដូចនេះគឺ $('#intro')។"
    }
  },
  {
    id: "jq-q3",
    question: {
      en: "What is the primary benefit of wrapping jQuery code inside $(document).ready()?",
      km: "តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការសរសេរកូដ jQuery នៅក្នុង $(document).ready()?"
    },
    options: {
      en: [
        "It speeds up file downloads.",
        "It prevents jQuery code from running before the page's HTML is fully loaded and constructed.",
        "It encrypts the JavaScript variables.",
        "It communicates with the back-end database."
      ],
      km: [
        "វាជួយឱ្យឯកសារទាញយកលឿនជាងមុន។",
        "វាការពារកូដ jQuery កុំឱ្យដំណើរការមុនពេលប្លង់ HTML នៃទំព័រត្រូវបានផ្ទុក និងបង្កើតឡើងរួចរាល់។",
        "វាជួយបិទបាំងកូដ JavaScript។",
        "វាជួយទាក់ទងជាមួយមូលដ្ឋានទិន្នន័យ (Database)។"
      ]
    },
    correctIndex: 1,
    explanation: {
      en: "document.ready wraps the triggers to ensure all DOM elements exist in memory before jQuery tries to query or manipulate them.",
      km: "document.ready ធានាថារាល់ធាតុ DOM ទាំងអស់ត្រូវបានបង្កើតឡើងក្នុងអង្គចងចាំរួចជាស្រេច មុនពេល jQuery ព្យាយាមចាប់យក ឬកែប្រែពួកវា។"
    }
  },
  {
    id: "jq-q4",
    question: {
      en: "Which jQuery method is used to perform custom animations using CSS properties?",
      km: "តើវិធីសាស្ត្រមួយណាដែលត្រូវបានប្រើប្រាស់ដើម្បីបង្កើតចលនា (Animations) តាមតម្រូវការដោយកែប្រែ CSS Properties?"
    },
    options: {
      en: ["transition()", "animate()", "move()", "fade()"],
      km: ["transition()", "animate()", "move()", "fade()"]
    },
    correctIndex: 1,
    explanation: {
      en: "The animate() method is dedicated to transitioning CSS styles smoothly with specified durations and easing functions.",
      km: "វិធីសាស្ត្រ animate() ត្រូវបានប្រើប្រាស់សម្រាប់ផ្លាស់ប្តូរតម្លៃលក្ខណៈរចនាបថ CSS ឱ្យមានចលនាទាក់ទាញតាមរយៈពេលកំណត់។"
    }
  },
  {
    id: "jq-q5",
    question: {
      en: "What is the difference between parent() and parents() traversing methods?",
      km: "តើអ្វីជាភាពខុសគ្នារវាងវិធីសាស្ត្ររុករក parent() និង parents()?"
    },
    options: {
      en: [
        "parent() goes down to children, parents() goes up to ancestors.",
        "parent() returns only the immediate direct parent element, while parents() recursively returns all ancestor elements up to the root node.",
        "There is no difference; they are aliases.",
        "parent() works on CSS classes, while parents() works on IDs."
      ],
      km: [
        "parent() ស្វែងរកចុះក្រោមទៅកូនៗ ចំណែកឯ parents() ស្វែងរកឡើងលើទៅកាន់មេៗ។",
        "parent() ត្រឡប់មកវិញនូវធាតុជាមេផ្ទាល់តែ ១កម្រិតប៉ុណ្ណោះ ចំណែកឯ parents() ត្រឡប់មកវិញនូវធាតុដូនតាទាំងអស់ឡើងទៅលើរហូតដល់ root tag។",
        "គ្មានភាពខុសគ្នាឡើយ ពួកវាគឺជាឈ្មោះដូចគ្នា។",
        "parent() ដំណើរការលើ CSS classes ចំណែកឯ parents() ដំណើរការលើ IDs។"
      ]
    },
    correctIndex: 1,
    explanation: {
      en: "parent() goes up exactly one level. parents() is recursive and matches every wrapping container in the tree structure.",
      km: "parent() ដំណើរការឡើងលើតែមួយជាន់ប៉ុណ្ណោះ។ ចំណែក parents() នឹងស្វែងរកឡើងលើជាបន្តបន្ទាប់រហូតដល់ថេកខ្ពស់បំផុត។"
    }
  }
];

export const jqueryMiniProjects: MiniProject[] = [
  {
    id: "jq-proj-todo",
    title: { en: "Dynamic To-Do Planner", km: "កម្មវិធីគ្រប់គ្រងបញ្ជីការងារត្រូវធ្វើ" },
    desc: {
      en: "Build an interactive To-Do application. Users can append tasks dynamically, toggle task statuses (checked/crossed out) on click, filter active tasks, and remove completed list items instantly using jQuery selection, events, and effects.",
      km: "សាងសង់កម្មវិធីគ្រប់គ្រងបញ្ជីការងារត្រូវធ្វើ។ អ្នកប្រើប្រាស់អាចបន្ថែមការងារជាឌីណាមិក ប្តូរស្ថានភាពការងារ (សម្រេច/កំពុងធ្វើ) ដោយការចុច ចម្រោះបញ្ជី និងលុបការងារដែលរួចរាល់ចោលភ្លាមៗដោយប្រើប្រាស់ jQuery Selection, Events, និង Effects។"
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background: #fafafa; padding: 20px; display: flex; justify-content: center; }
    .todo-container { background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); width: 100%; max-width: 400px; }
    h2 { text-align: center; color: #4f46e5; margin-top: 0; }
    .input-row { display: flex; gap: 8px; margin-bottom: 20px; }
    input[type="text"] { flex: 1; padding: 8px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; }
    input[type="text"]:focus { outline: none; border-color: #4f46e5; }
    button.add-btn { background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; }
    ul { list-style: none; padding: 0; margin: 0; }
    li { display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; border-bottom: 1px solid #f3f4f6; cursor: pointer; border-radius: 6px; margin-bottom: 4px; transition: 0.2s; }
    li:hover { background: #f9fafb; }
    li.completed { text-decoration: line-through; color: #a1a1aa; background: #f4f4f5; }
    .delete-btn { color: #ef4444; background: none; border: none; font-weight: bold; cursor: pointer; font-size: 14px; padding: 4px 8px; }
    .delete-btn:hover { background: #fef2f2; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="todo-container">
    <h2>My To-Do Planner</h2>
    
    <div class="input-row">
      <input type="text" id="taskInput" placeholder="Add a new task...">
      <button class="add-btn" id="addBtn">Add</button>
    </div>

    <ul id="taskList">
      <li>Learn jQuery core selectors <button class="delete-btn">×</button></li>
      <li class="completed">Connect jQuery CDN link <button class="delete-btn">×</button></li>
    </ul>
  </div>

  <script>
    $(document).ready(function(){
      // TODO 1: Implement Adding a New Task
      $("#addBtn").click(function(){
        var taskText = $("#taskInput").val().trim();
        if(taskText !== "") {
          // Append new task list item containing a delete button
          // Your code here...
          
          $("#taskInput").val(""); // clear input
        }
      });

      // TODO 2: Handle Task Completion (Toggle click style class)
      // Tip: Use event delegation $(parent).on("click", "child", fn) because tasks are added dynamically
      
      // TODO 3: Handle Deleting a Task
      // Tip: Use event delegation for delete button click
    });
  </script>
</body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background: #fafafa; padding: 20px; display: flex; justify-content: center; }
    .todo-container { background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); width: 100%; max-width: 400px; }
    h2 { text-align: center; color: #4f46e5; margin-top: 0; }
    .input-row { display: flex; gap: 8px; margin-bottom: 20px; }
    input[type="text"] { flex: 1; padding: 8px 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; }
    input[type="text"]:focus { outline: none; border-color: #4f46e5; }
    button.add-btn { background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; }
    ul { list-style: none; padding: 0; margin: 0; }
    li { display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; border-bottom: 1px solid #f3f4f6; cursor: pointer; border-radius: 6px; margin-bottom: 4px; transition: 0.2s; }
    li:hover { background: #f9fafb; }
    li.completed { text-decoration: line-through; color: #a1a1aa; background: #f4f4f5; }
    .delete-btn { color: #ef4444; background: none; border: none; font-weight: bold; cursor: pointer; font-size: 14px; padding: 4px 8px; }
    .delete-btn:hover { background: #fef2f2; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="todo-container">
    <h2>My To-Do Planner</h2>
    
    <div class="input-row">
      <input type="text" id="taskInput" placeholder="Add a new task...">
      <button class="add-btn" id="addBtn">Add</button>
    </div>

    <ul id="taskList">
      <li>Learn jQuery core selectors <button class="delete-btn">×</button></li>
      <li class="completed">Connect jQuery CDN link <button class="delete-btn">×</button></li>
    </ul>
  </div>

  <script>
    $(document).ready(function(){
      // 1. Add Task
      $("#addBtn").click(addTask);
      $("#taskInput").keypress(function(e){
        if(e.which === 13) { addTask(); }
      });

      function addTask() {
        var val = $("#taskInput").val().trim();
        if(val !== "") {
          var li = $("<li></li>").text(val);
          var del = $("<button class='delete-btn'>×</button>");
          li.append(del);
          li.hide();
          $("#taskList").append(li);
          li.fadeIn(300);
          $("#taskInput").val("");
        }
      }

      // 2. Toggle Complete
      $("#taskList").on("click", "li", function(e){
        if(!$(e.target).hasClass("delete-btn")) {
          $(this).toggleClass("completed");
        }
      });

      // 3. Delete Task
      $("#taskList").on("click", ".delete-btn", function(e){
        e.stopPropagation();
        $(this).parent().fadeOut(300, function(){
          $(this).remove();
        });
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-proj-accordion",
    title: { en: "FAQ Accordion Slider", km: "ប្រព័ន្ធសំណួរ FAQ Accordion" },
    desc: {
      en: "Build a polished Frequently Asked Questions (FAQ) block. When an item is clicked, its description slides open smoothly. If another item was open, it slides closed automatically to keep layout clean, utilizing slide effects and sibling traversals.",
      km: "សាងសង់ប្រព័ន្ធសំណួរដែលសួរញឹកញាប់ (FAQ) ដ៏ស្រស់ស្អាត។ នៅពេលចុចលើសំណួរណាមួយ ចម្លើយរបស់វានឹងរុញស្លាយចុះមកយ៉ាងរលូន។ ប្រសិនបើមានសំណួរផ្សេងទៀតកំពុងបើក វានឹងបិទទៅវិញដោយស្វ័យប្រវត្តិដើម្បីរក្សាសណ្ដាប់ធ្នាប់ប្លង់គេហទំព័រ។"
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 25px; }
    .faq-wrapper { max-width: 500px; margin: 0 auto; }
    h2 { text-align: center; color: #0f172a; margin-bottom: 25px; }
    .faq-item { border: 1px solid #e2e8f0; background: white; margin-bottom: 10px; border-radius: 8px; overflow: hidden; }
    .faq-question { padding: 15px 20px; font-weight: bold; color: #1e293b; background: #f1f5f9; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
    .faq-answer { padding: 15px 20px; color: #475569; display: none; background: white; border-top: 1px solid #f1f5f9; line-height: 1.6; }
    .arrow { transition: transform 0.3s; font-size: 12px; }
    .faq-item.active .arrow { transform: rotate(90px); }
  </style>
</head>
<body>
  <div class="faq-wrapper">
    <h2>Frequently Asked Questions</h2>

    <div class="faq-item">
      <div class="faq-question">What is jQuery? <span class="arrow">▶</span></div>
      <div class="faq-answer">jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, and animation much simpler.</div>
    </div>

    <div class="faq-item">
      <div class="faq-question">Do I need to install jQuery locally? <span class="arrow">▶</span></div>
      <div class="faq-answer">No! You can simply link to a CDN (Content Delivery Network) file hosted by Google or official jQuery servers in your HTML header.</div>
    </div>

    <div class="faq-item">
      <div class="faq-question">How does sliding toggle work? <span class="arrow">▶</span></div>
      <div class="faq-answer">The slideToggle() method alternates between slideUp() and slideDown() by animating the CSS height property smoothly.</div>
    </div>
  </div>

  <script>
    $(document).ready(function(){
      // TODO: Implement FAQ Sliding Logic
      // 1. Listen for clicks on .faq-question
      // 2. Open the clicked question's .faq-answer using slideToggle()
      // 3. Automatically close other open answers (siblings) using slideUp()
    });
  </script>
</body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; padding: 25px; }
    .faq-wrapper { max-width: 500px; margin: 0 auto; }
    h2 { text-align: center; color: #0f172a; margin-bottom: 25px; }
    .faq-item { border: 1px solid #e2e8f0; background: white; margin-bottom: 10px; border-radius: 8px; overflow: hidden; }
    .faq-question { padding: 15px 20px; font-weight: bold; color: #1e293b; background: #f1f5f9; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
    .faq-answer { padding: 15px 20px; color: #475569; display: none; background: white; border-top: 1px solid #f1f5f9; line-height: 1.6; }
    .arrow { transition: transform 0.3s; font-size: 12px; display: inline-block; }
    .faq-item.active .arrow { transform: rotate(90deg); }
  </style>
</head>
<body>
  <div class="faq-wrapper">
    <h2>Frequently Asked Questions</h2>

    <div class="faq-item">
      <div class="faq-question">What is jQuery? <span class="arrow">▶</span></div>
      <div class="faq-answer">jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, and animation much simpler.</div>
    </div>

    <div class="faq-item">
      <div class="faq-question">Do I need to install jQuery locally? <span class="arrow">▶</span></div>
      <div class="faq-answer">No! You can simply link to a CDN (Content Delivery Network) file hosted by Google or official jQuery servers in your HTML header.</div>
    </div>

    <div class="faq-item">
      <div class="faq-question">How does sliding toggle work? <span class="arrow">▶</span></div>
      <div class="faq-answer">The slideToggle() method alternates between slideUp() and slideDown() by animating the CSS height property smoothly.</div>
    </div>
  </div>

  <script>
    $(document).ready(function(){
      $(".faq-question").click(function(){
        var currentItem = $(this).parent();
        var currentAnswer = $(this).next(".faq-answer");
        
        // Slide toggle current clicked answer
        currentAnswer.slideToggle(300);
        currentItem.toggleClass("active");
        
        // Slide up all other active sibling answers
        currentItem.siblings().removeClass("active").find(".faq-answer").slideUp(300);
      });
    });
  </script>
</body>
</html>`
  }
];
