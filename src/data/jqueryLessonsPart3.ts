import { Lesson } from '../types';

export const jqueryLessonsPart3: Lesson[] = [
  {
    id: "jq-ajax-intro",
    title: { en: "jQuery AJAX Intro", km: "សេចក្តីផ្តើមអំពី AJAX" },
    content: {
      en: `# jQuery AJAX Intro
**AJAX** stands for **A**synchronous **J**avaScript **A**nd **X**ML.

In short, AJAX is about loading data from a server in the background and updating parts of a web page dynamically — **without** reloading the entire page!

### Why Use jQuery for AJAX?
Raw JavaScript makes AJAX requests extremely tedious, requiring different objects for different browsers and lines of boilerplate. jQuery provides a simple, clean, and cross-browser syntax for all AJAX activities.

### Core jQuery AJAX Methods:
- \`$.load()\` - Loads HTML data from a server and injects it into an element.
- \`$.get()\` - Fetches data from a server using an HTTP GET request.
- \`$.post()\` - Sends data to a server using an HTTP POST request.
- \`$.ajax()\` - The low-level, fully customizable AJAX request method.

> **Note:** In our playground, we will mock these network responses so you can see exactly how they handle data and display status results without needing any external server!`,
      km: `# សេចក្តីផ្តើមអំពី jQuery AJAX
**AJAX** មកពីពាក្យពេញថា **Asynchronous JavaScript And XML**។

និយាយឱ្យខ្លី AJAX គឺជាបច្ចេកវិទ្យាទាញយកទិន្នន័យពី Server នៅពីក្រោយគេហទំព័រ និងកែប្រែផ្នែកខ្លះនៃគេហទំព័រឡើងវិញជាឌីណាមិក — **ដោយមិនចាំបាច់** Reload គេហទំព័រទាំងមូលឡើយ!

### ហេតុអ្វីត្រូវប្រើ jQuery សម្រាប់ AJAX?
ការប្រើប្រាស់កូដ JavaScript សុទ្ធសម្រាប់ AJAX គឺមានភាពស្មុគស្មាញ និងទាមទារការសរសេរកូដរៀបចំច្រើនយ៉ាងរញ៉េរញ៉ៃ។ jQuery ជួយសម្រួល syntax ឱ្យនៅខ្លី ស្អាត និងដំណើរការត្រូវគ្នាជាមួយគ្រប់ Browser ទាំងអស់។

### វិធីសាស្ត្រចម្បងៗរបស់ jQuery AJAX៖
- \`$.load()\` - ទាញយកទិន្នន័យជា HTML ពី Server ហើយដាក់បញ្ចូលទៅក្នុងធាតុ HTML ភ្លាមៗ។
- \`$.get()\` - ទាញយកទិន្នន័យពី Server ដោយប្រើប្រាស់វិធីសាស្ត្រ HTTP GET។
- \`$.post()\` - បញ្ជូនទិន្នន័យទៅកាន់ Server ដោយប្រើប្រាស់វិធីសាស្ត្រ HTTP POST។
- \`$.ajax()\` - វិធីសាស្ត្រកម្រិតទាប ដែលអាចកែសម្រួលលក្ខខណ្ឌការងារ AJAX បានពេញលេញបំផុត។

> **ចំណាំ៖** នៅក្នុងកម្មវិធីសាកល្បងរបស់យើង យើងនឹងសរសេរកូដចាំចម្លើយបណ្តោះអាសន្ន (Mock responses) ដើម្បីឱ្យអ្នកឃើញពីរបៀបដំណើរការ និងបង្ហាញលទ្ធផលជាក់ស្ដែងភ្លាមៗ!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Simulated jQuery AJAX Request</h2>

  <div id="resultBlock" style="padding:15px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; margin-bottom:10px;">
    No request made yet.
  </div>

  <button id="fetchBtn" style="padding:8px 16px; background:#16a34a; color:white; border:none; border-radius:4px; font-weight:bold; cursor:pointer;">
    Trigger AJAX Load
  </button>

  <script>
    $(document).ready(function(){
      // We will mock jQuery AJAX settings for offline operation inside this playground
      $("#fetchBtn").click(function(){
        $("#resultBlock").text("Connecting to server...");

        // Simulate server response after 1 second
        setTimeout(function(){
          var responseData = "<strong>Success!</strong> Loaded database record: User #8761 - 'Sok Dara' from Phnom Penh.";
          $("#resultBlock").html(responseData);
        }, 1000);
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-ajax-load",
    title: { en: "jQuery Load", km: "វិធីសាស្ត្រ load()" },
    content: {
      en: `# jQuery load() Method
The jQuery \`load()\` method is a simple but highly effective way to load data from a server and place the returned HTML into the selected element.

### Syntax:
\`\`\`javascript
$(selector).load(URL, data, callback);
\`\`\`
- **URL:** The address of the file or endpoint you want to fetch.
- **data (optional):** Key/value pairs to send along with the request.
- **callback (optional):** A function to run after the load operation completes.

The callback function can receive three parameters:
- \`responseTxt\` - contains the resulting content if the call succeeds.
- \`statusTxt\` - contains the status of the call ("success" or "error").
- \`xhr\` - contains the XMLHttpRequest object.

> **Tip:** You can also append a selector to the URL parameter to load only a *specific part* of the returned page, e.g. \`$("#div1").load("demo.txt #p1");\`!`,
      km: `# វិធីសាស្ត្រ load() ក្នុង jQuery
វិធីសាស្ត្រ \`load()\` របស់ jQuery គឺជាវិធីសាមញ្ញ និងមានប្រសិទ្ធភាពខ្ពស់ក្នុងការទាញយកទិន្នន័យពី Server ហើយដាក់បញ្ចូលមាតិកាដែលទទួលបានទៅក្នុងធាតុ HTML ដែលបានចង្អុលបង្ហាញភ្លាមៗ។

### ទម្រង់ Syntax៖
\`\`\`javascript
$(selector).load(URL, data, callback);
\`\`\`
- **URL៖** អាសយដ្ឋានឯកសារ ឬ Endpoint ដែលអ្នកចង់ទាញយក។
- **data (ជម្រើស)៖** ទិន្នន័យ (Key/Value pairs) បញ្ជូនទៅជាមួយសំណើ។
- **callback (ជម្រើស)៖** អនុគមន៍ដែលត្រូវដំណើរការបន្ទាប់ពីសកម្មភាព load បញ្ចប់សព្វគ្រប់។

អនុគមន៍ Callback អាចទទួលប៉ារ៉ាម៉ែត្រចំនួន ៣៖
- \`responseTxt\` - មាតិកាដែលទទួលបានពី Server។
- \`statusTxt\` - ស្ថានភាពសំណើ ("success" ឬ "error")។
- \`xhr\` - វត្ថុ XMLHttpRequest សម្រាប់ត្រួតពិនិត្យបន្ថែម។

> **គន្លឹះ៖** អ្នកក៏អាចបន្ថែម CSS Selector នៅចុងបញ្ចប់នៃ URL ដើម្បីទាញយកតែ **ផ្នែកជាក់លាក់ណាមួយ** នៃទំព័រដែលបានស្នើសុំ ឧទាហរណ៍៖ \`$("#div1").load("demo.txt #p1");\`!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>AJAX load() Callback Inspector</h2>

  <div id="content" style="padding:15px; border:2px dashed #94a3b8; border-radius: 6px; margin-bottom: 10px;">
    Container is empty. Click button to load.
  </div>

  <button id="loadBtn">Run load()</button>

  <script>
    $(document).ready(function(){
      $("#loadBtn").click(function(){
        // Since we are running offline, we override $.ajax to simulate load()
        $.ajax = function(options) {
          setTimeout(function(){
            options.success("<h3>Loaded Header</h3><p>Content loaded dynamically from mock-server.html.</p>", "success");
          }, 800);
        };

        // Simulating the load call with a callback inspector
        $("#content").text("Loading content via $.ajax simulation...");
        
        $.ajax({
          success: function(response, status) {
            $("#content").html(response);
            alert("Load completed with status: " + status);
          }
        });
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-ajax-get-post",
    title: { en: "jQuery Get/Post", km: "វិធីសាស្ត្រ Get/Post" },
    content: {
      en: `# jQuery $.get() and $.post() Methods
The \`$.get()\` and \`$.post()\` methods are used to request data from the server using standard HTTP GET and POST requests.

### 1. HTTP GET Method
GET is used to request data from a specified resource. It is usually cached and visible in the browser's URL address.
\`\`\`javascript
$.get(URL, callback);
\`\`\`
Example:
\`\`\`javascript
$.get("https://api.example.com/users", function(data, status){
  alert("Data: " + data + "\\nStatus: " + status);
});
\`\`\`

### 2. HTTP POST Method
POST is used to send data to a server to create/update a resource. It is never cached and does not expose variables in the URL.
\`\`\`javascript
$.post(URL, data, callback);
\`\`\`

> **Note:** GET should only be used to retrieve data, not to modify server state. POST is designed for sending user inputs, files, or submitting secure forms!`,
      km: `# វិធីសាស្ត្រ $.get() និង $.post() ក្នុង jQuery
វិធីសាស្ត្រ \`$.get()\` និង \`$.post()\` ត្រូវបានប្រើប្រាស់ដើម្បីទាញយក ឬបញ្ជូនទិន្នន័យពី/ទៅកាន់ Server តាមរយៈស្តង់ដារ HTTP GET និង POST។

### ១. វិធីសាស្ត្រ HTTP GET
GET ត្រូវបានប្រើដើម្បីស្នើសុំទិន្នន័យពីប្រភពដែលបានកំណត់។ ជាទូទៅវាត្រូវបានរក្សាទុកក្នុង Cache និងបង្ហាញនៅលើអាសយដ្ឋាន URL។
\`\`\`javascript
$.get(URL, callback);
\`\`\`
ឧទាហរណ៍៖
\`\`\`javascript
$.get("https://api.example.com/users", function(data, status){
  alert("ទិន្នន័យ៖ " + data + "\\nស្ថានភាព៖ " + status);
});
\`\`\`

### ២. វិធីសាស្ត្រ HTTP POST
POST ត្រូវបានប្រើដើម្បីបញ្ជូនទិន្នន័យទៅកាន់ Server ដើម្បីបង្កើត ឬកែប្រែប្រភពព័ត៌មាន។ វាមិនរក្សាទុកក្នុង Cache និងមិនបង្ហាញទិន្នន័យនៅលើ URL ឡើយ។
\`\`\`javascript
$.post(URL, data, callback);
\`\`\`

> **ចំណាំ៖** GET គួរប្រើសម្រាប់តែការអានទិន្នន័យប៉ុណ្ណោះ មិនគួរប្រើដើម្បីកែប្រែទិន្នន័យលើ Server ឡើយ។ POST ត្រូវបានបង្កើតឡើងជាពិសេសសម្រាប់បញ្ជូនការវាយបញ្ចូលរបស់អ្នកប្រើប្រាស់ ឯកសារ ឬការ Submit ទម្រង់ Form ផ្សេងៗ!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>GET & POST Simulation Console</h2>

  <form id="userForm" style="margin-bottom:15px; border:1px solid #ccc; padding:15px; border-radius:5px;">
    <input type="text" id="fullname" placeholder="Enter Full Name" required style="padding:6px;"><br><br>
    <input type="text" id="city" placeholder="Enter City" required style="padding:6px;"><br><br>
    <button type="submit" style="background:#0284c7; color:white; border:none; padding:8px 12px; cursor:pointer;">Submit via POST</button>
  </form>

  <button id="btnGet" style="padding:8px 12px;">Fetch Users List (GET)</button>

  <div id="console" style="margin-top:15px; background:black; color:lime; padding:15px; font-family:monospace; border-radius:4px; min-height:80px;">
    [Console Output Ready]
  </div>

  <script>
    $(document).ready(function(){
      // Mock GET Request
      $("#btnGet").click(function(){
        $("#console").html("Executing HTTP GET...<br>");
        setTimeout(function(){
          var users = [
            { name: "Sokha", city: "Siem Reap" },
            { name: "Borith", city: "Battambang" }
          ];
          $("#console").append("Status: 200 OK<br>Data: " + JSON.stringify(users, null, 2));
        }, 800);
      });

      // Mock POST Request
      $("#userForm").submit(function(event){
        event.preventDefault(); // Stop page reload
        var nameVal = $("#fullname").val();
        var cityVal = $("#city").val();

        $("#console").html("Executing HTTP POST...<br>Payload: " + JSON.stringify({ name: nameVal, city: cityVal }) + "<br>");

        setTimeout(function(){
          $("#console").append("Status: 201 Created<br>Server Response: { success: true, insertedId: 9982 }");
        }, 1000);
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-noconflict",
    title: { en: "jQuery noConflict()", km: "ដោះស្រាយទាស់ noConflict()" },
    content: {
      en: `# jQuery noConflict() Method
Other JavaScript frameworks (like Prototype, MooTools, or Angular) also use the dollar sign \`$\` as their shorthand prefix.

If you use two frameworks that use the same shortcut on the same page, it causes conflict crashes.

To resolve this, jQuery provides the \`noConflict()\` method.

### How it works:
Calling \`$.noConflict()\` releases jQuery's hold on the \`$\` shortcut, allowing other libraries to use it.

You can still access jQuery by writing the full name:
\`\`\`javascript
$.noConflict();
jQuery(document).ready(function(){
  jQuery("button").click(function(){
    jQuery("p").text("This works using the 'jQuery' prefix!");
  });
});
\`\`\`

### Creating a Custom Alias
You can also assign your own custom variable to replace the dollar sign:
\`\`\`javascript
var jq = $.noConflict();
jq(document).ready(function(){
  jq("p").hide(); // Custom short alias 'jq'
});
\`\`\`

> **Tip:** This is highly important when importing legacy widgets into modern enterprise projects where multiple frameworks run simultaneously!`,
      km: `# វិធីសាស្ត្រ noConflict() ក្នុង jQuery
បណ្ណាល័យ ឬក្របខ័ណ្ឌ JavaScript ផ្សេងទៀត (ដូចជា Prototype, MooTools ឬ Angular) ក៏ប្រើប្រាស់សញ្ញាដុល្លារ \`$\` សម្រាប់សរសេរកាត់ជាបុព្វបទផងដែរ។

ប្រសិនបើអ្នកប្រើប្រាស់ Framework ពីរដែលប្រើសញ្ញាដដែលលើទំព័រតែមួយ វានឹងបង្កជម្លោះកូដ និងគាំងដំណើរការ។

ដើម្បីដោះស្រាយបញ្ហានេះ jQuery ផ្តល់នូវវិធីសាស្ត្រ \`noConflict()\`។

### របៀបដំណើរការ៖
ការហៅប្រើ \`$.noConflict()\` នឹងលះបង់សិទ្ធិប្រើប្រាស់សញ្ញា \`$\` របស់ jQuery ទៅឱ្យបណ្ណាល័យផ្សេងទៀតប្រើប្រាស់វិញ។

អ្នកនៅតែអាចចូលប្រើប្រាស់មុខងាររបស់ jQuery បាន ដោយសរសេរឈ្មោះពេញ៖
\`\`\`javascript
$.noConflict();
jQuery(document).ready(function(){
  jQuery("button").click(function(){
    jQuery("p").text("កូដនេះដំណើរការដោយប្រើបុព្វបទពេញ 'jQuery'!");
  });
});
\`\`\`

### ការបង្កើតឈ្មោះហៅក្រៅផ្ទាល់ខ្លួន (Custom Alias)៖
អ្នកក៏អាចកំណត់ឈ្មោះអថេរផ្ទាល់ខ្លួនណាមួយ ដើម្បីជំនួសសញ្ញាដុល្លារ៖
\`\`\`javascript
var jq = $.noConflict();
jq(document).ready(function(){
  jq("p").hide(); // ប្រើឈ្មោះកាត់ផ្ទាល់ខ្លួន 'jq'
});
\`\`\`

> **គន្លឹះ៖** វិធីសាស្ត្រនេះមានសារៈសំខាន់ខ្លាំងណាស់នៅពេលអ្នកយក Widget ចាស់ៗមកប្រើជាមួយប្រព័ន្ធទំនើបដែលមានការប្រើប្រាស់ Framework ច្រើនក្នុងពេលតែមួយ!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Testing $.noConflict()</h2>

  <p id="target">This paragraph will change using our custom jQuery alias.</p>
  <button id="btnAction">Trigger Action</button>

  <script>
    // Release '$' shortcut
    var customJQuery = $.noConflict();

    // From this point on, using $() would fail or call other library.
    // We use our custom alias 'customJQuery()'
    customJQuery(document).ready(function(){
      customJQuery("#btnAction").click(function(){
        customJQuery("#target")
          .text("Success! Handled safely using customJQuery alias.")
          .css("color", "purple");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-filters",
    title: { en: "jQuery Filters", km: "តម្រងចម្រោះកម្រិតខ្ពស់" },
    content: {
      en: `# jQuery Filters
jQuery filters are additional extensions to selectors that allow you to locate elements based on positional logic, text content, visibility, or state.

They always begin with a colon symbol \`:\`.

### Top jQuery Custom Filters:
- \`:first\` & \`:last\` - Matches first/last matching elements.
- \`:even\` & \`:odd\` - Matches even/odd rows (excellent for zebra-striping tables).
- \`:contains(text)\` - Matches elements containing the specified text string.
- \`:has(selector)\` - Matches elements that contain at least one element matching the inner selector.
- \`:hidden\` & \`:visible\` - Filters based on display state.

### Code Example:
\`\`\`javascript
$("tr:even").css("background-color", "#f2f2f2"); // Zebra striping
$("p:contains('Sabay')").css("color", "red"); // Match text contents
\`\`\`

> **Tip:** Positional filters like \`:even\` and \`:odd\` use **0-based indexing**, meaning row index 0 is even, row index 1 is odd!`,
      km: `# តម្រងចម្រោះកម្រិតខ្ពស់ (jQuery Filters)
តម្រងចម្រោះ (Filters) គឺជាមុខងារបន្ថែមទៅលើ Selectors ដែលអនុញ្ញាតឱ្យអ្នកស្វែងរកធាតុ HTML ផ្អែកលើទីតាំង សារព័ត៌មានអត្ថបទ ភាពលេចឡើង ឬស្ថានភាពរបស់វា។

ពួកវាចាប់ផ្ដើមដោយសញ្ញាចុចពីរ \`:\` ជានិច្ច។

### តម្រងចម្រោះពេញនិយមបំផុត៖
- \`:first\` និង \`:last\` - ស្វែងរកធាតុដំបូង និងចុងក្រោយគេ។
- \`:even\` និង \`:odd\` - ស្វែងរកជួរគូ និងជួរសេស (ល្អបំផុតសម្រាប់រចនាបថតារាង Zebra)។
- \`:contains(text)\` - ស្វែងរកធាតុណាដែលមានពាក្យអត្ថបទដែលបានបញ្ជាក់។
- \`:has(selector)\` - ស្វែងរកធាតុណាដែលមានផ្ទុកធាតុរងត្រូវគ្នានឹង Selector ខាងក្នុង។
- \`:hidden\` និង \`:visible\` - ចម្រោះផ្អែកលើភាពលេចឡើង ឬលាក់បាំង។

### គំរូកូដ៖
\`\`\`javascript
$("tr:even").css("background-color", "#f2f2f2"); // រចនាផ្ទៃតារាងឆ្លាស់ជួរ
$("p:contains('Sabay')").css("color", "red"); // ស្វែងរកអត្ថបទដែលមានពាក្យ 'Sabay'
\`\`\`

> **គន្លឹះ៖** តម្រងផ្អែកលើទីតាំងដូចជា \`:even\` និង \`:odd\` ប្រើ **សន្ទស្សន៍លំដាប់ចាប់ផ្ដើមពី 0** ដូច្នេះជួរទី 0 គឺជាជួរគូ ហើយជួរទី ១ គឺជាជួរសេស!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Advanced jQuery Filtering Selectors</h2>

  <table border="1" cellpadding="8" style="border-collapse:collapse; width:100%; margin-bottom:15px;">
    <tr><td>Row Index 0 (Even)</td></tr>
    <tr><td>Row Index 1 (Odd)</td></tr>
    <tr><td>Row Index 2 (Even)</td></tr>
    <tr><td>Row Index 3 (Odd)</td></tr>
    <tr><td>Special row with SabayCode learning word</td></tr>
  </table>

  <button id="btnZebra">Zebra Stripe Tables (:even)</button>
  <button id="btnText">Highlight 'SabayCode' text (:contains)</button>

  <script>
    $(document).ready(function(){
      $("#btnZebra").click(function(){
        // Apply background to even rows
        $("tr:even").css("background-color", "#e2e8f0");
      });

      $("#btnText").click(function(){
        // Select elements containing exact text
        $("td:contains('SabayCode')").css({"color": "red", "font-weight": "bold"});
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-certificate",
    title: { en: "jQuery Certificate", km: "វិញ្ញាបនបត្រ jQuery" },
    content: {
      en: `# jQuery Certificate of Completion
Congratulations on reaching the final section of this jQuery course! You have covered:
1. DOM selections and event registration.
2. Building rich animations and fluid effects.
3. Advanced HTML content, attribute, and CSS class manipulation.
4. Structuring recursive DOM traversals.
5. Handling background AJAX operations.

### Take the Next Steps
Ready to demonstrate your expertise? 
1. Complete all course quizzes with a score of 80% or higher.
2. Build the interactive mini-projects in this course.
3. Claim your official SabayCode digital developer certificate!

Keep learning, keep practicing, and build great things!`,
      km: `# វិញ្ញាបនបត្របញ្ចប់ការសិក្សា jQuery
សូមអបអរសាទរដែលអ្នកបានឈានមកដល់ផ្នែកចុងក្រោយនៃវគ្គសិក្សា jQuery នេះ! អ្នកបានឆ្លងកាត់ការរៀនសូត្រ៖
១. ការជ្រើសរើស DOM Selectors និងការប្រើប្រាស់ព្រឹត្តិការណ៍ផ្សេងៗ (Events)។
២. ការបង្កើតចលនា (Animations) និងផលរំញ័រអូសលេចឡើង (Effects)។
៣. ការគ្រប់គ្រងមាតិកា លក្ខណៈសម្បត្តិ និងថ្នាក់រចនា (CSS classes)។
៤. ការរុករករៀបចំរចនាសម្ព័ន្ធមេនិងកូន (DOM Traversals)។
៥. ការគ្រប់គ្រងការទាញយកទិន្នន័យពី Server នៅពីក្រោយ (AJAX)។

### ជំហានបន្ទាប់របស់អ្នក
តើអ្នកត្រៀមខ្លួនរួចរាល់ហើយឬនៅដើម្បីបង្ហាញពីសមត្ថភាពរបស់អ្នក?
១. បំពេញរាល់លំហាត់សាកល្បង (Quizzes) ទាំងអស់ឱ្យទទួលបានពិន្ទុចាប់ពី ៨០% ឡើងទៅ។
២. បង្កើតគម្រោងអនុវត្តខ្នាតតូច (Mini-projects) នៅក្នុងវគ្គសិក្សានេះ។
៣. ទទួលយកវិញ្ញាបនបត្រអភិវឌ្ឍន៍គេហទំព័រឌីជីថលផ្លូវការពី SabayCode!

បន្តការសិក្សា បន្តការអនុវត្ត និងសាងសង់អ្វីដែលអស្ចារ្យជានិច្ច!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    body { font-family: 'Segoe UI', sans-serif; text-align: center; padding: 20px; background:#f8fafc; }
    .cert-frame { border: 10px double #c5a880; padding: 30px; background: white; max-width: 500px; margin: 0 auto; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
    h1 { font-family: 'Georgia', serif; color: #1e293b; }
    .badge { width: 80px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="cert-frame">
    <h1>Certificate of Achievement</h1>
    <p>This is proudly awarded to</p>
    <h3 id="studentName" style="border-bottom: 2px solid #ccc; display:inline-block; padding-bottom:5px; width:200px;">[Your Name]</h3>
    <p>for successfully completing the comprehensive course of</p>
    <h2>Advanced jQuery & DOM Manipulation</h2>
    <input type="text" id="nameInput" placeholder="Enter Your Name" style="padding:6px; text-align:center;"><br>
    <button id="signBtn" style="margin-top:10px; padding:6px 12px; background:#b45309; color:white; border:none; cursor:pointer;">Update Certificate</button>
  </div>

  <script>
    $(document).ready(function(){
      $("#signBtn").click(function(){
        var name = $("#nameInput").val();
        if(name.trim() !== "") {
          $("#studentName").text(name).css({"color": "#b45309", "font-weight":"bold"});
        }
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-examples-list",
    title: { en: "jQuery Examples", km: "ឧទាហរណ៍អនុវត្ត jQuery" },
    content: {
      en: `# jQuery Examples Index
In this section, we summarize some of the most common production patterns using jQuery.

### Common Interactive Examples:
1. **Interactive To-Do List:** Append, remove, and cross out items using events.
2. **Tabbed Panel Content:** Using index matching and selectors to swap active views.
3. **Form Validator:** Highlights input fields instantly if validation rules fail.
4. **Smooth Scroll-To-Top Button:** Detects page scroll offset and triggers responsive slide/fades.

Click the "Try it Yourself" editor tab to experiment with a fully functional form helper that verifies passwords and displays inline helper labels dynamically using events!`,
      km: `# សន្ទស្សន៍ឧទាហរណ៍អនុវត្ត jQuery
នៅក្នុងផ្នែកនេះ យើងសង្ខេបពីទម្រង់អនុវត្តទូទៅបំផុតក្នុងផលិតកម្មគេហទំព័រដោយប្រើប្រាស់ jQuery។

### ឧទាហរណ៍អន្តរកម្មទូទៅ៖
១. **បញ្ជីការងារត្រូវធ្វើ (To-Do List)៖** ការបន្ថែម លុប និងគូសឆូតកាត់ការងារដោយប្រើប្រាស់ Events។
២. **ការប្ដូរផ្ទាំងព័ត៌មាន (Tabbed Panels)៖** ការប្រើប្រាស់ Index matching និង selectors ដើម្បីផ្លាស់ប្តូរផ្ទាំងលេចឡើង។
៣. **ការផ្ទៀងផ្ទាត់ទម្រង់ Form (Form Validator)៖** បង្ហាញពណ៌ព្រមានភ្លាមៗលើប្រអប់បញ្ចូលប្រសិនបើសរសេរខុសលក្ខខណ្ឌ។
៤. **ប៊ូតុងរមូរឡើងលើ (Scroll-to-Top Button)៖** ស្វែងរកកម្រិតរមូរទំព័រ រួចបង្ហាញ/លាក់ប៊ូតុងដោយប្រើចលនា slide/fades។

សូមចូលទៅកាន់ផ្ទាំង Editor "Try it Yourself" ដើម្បីសាកល្បងសរសេរកូដផ្ទៀងផ្ទាត់លេខសម្ងាត់ និងបង្ហាញការណែនាំជាឌីណាមិកភ្លាមៗ!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Password Validator Example</h2>

  <div style="max-width:300px; padding:15px; border:1px solid #ccc; border-radius:5px;">
    <label>Choose Password:</label><br>
    <input type="password" id="pw" style="padding:6px; width:100%; box-sizing:border-box;"><br>
    <span id="strength" style="font-size:12px; font-weight:bold;"></span>
  </div>

  <script>
    $(document).ready(function(){
      $("#pw").keyup(function(){
        var val = $(this).val();
        if(val.length === 0) {
          $("#strength").text("");
        } else if(val.length < 6) {
          $("#strength").text("Too short (Min 6 chars)").css("color", "red");
        } else {
          $("#strength").text("Strong Password!").css("color", "green");
        }
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-editor",
    title: { en: "jQuery Editor", km: "កម្មវិធីសរសេរកូដ jQuery Editor" },
    content: {
      en: `# jQuery Live Editor Sandbox
The playground on the right side of your screen is a fully live, high-performance web runtime sandbox.

### Sandbox Core Capabilities:
1. **Interactive Monaco Editor:** Full syntax highlighting, auto-completions, and error diagnostics.
2. **Vite Sandbox Compilation:** Any changes you make in the code editor are automatically hot-compiled and rendered in real-time inside the output frame.
3. **Pre-configured jQuery Engine:** All exercises are pre-loaded with the official jQuery library CDN, so you do not need any installation setups.

> **Tip:** You can write fully-formed HTML documents inside this editor, including custom CSS rules inside \`<style>\` and full jQuery script execution blocks inside \`<script>\`!`,
      km: `# កម្មវិធីសរសេរកូដសាកល្បង (Live Editor Sandbox)
ប្រអប់សាកល្បងកូដនៅខាងស្តាំដៃនៃអេក្រង់របស់អ្នក គឺជាម៉ាស៊ីនដំណើរការគេហទំព័រផ្ទាល់រហ័ស និងមានសុវត្ថិភាព។

### លក្ខណៈសម្បត្តិរបស់ Sandbox៖
១. **Monaco Editor អន្តរកម្ម៖** មានការបង្ហាញពណ៌កូដតាមប្រភេទ មុខងារបំពេញកូដស្វ័យប្រវត្ត និងការស្វែងរកកំហុសឆ្គង។
២. **Vite Sandbox Compilation៖** រាល់ការផ្លាស់ប្តូរដែលអ្នកធ្វើនៅក្នុងកម្មវិធីសរសេរកូដ នឹងត្រូវចងក្រង និងបង្ហាញលទ្ធផលភ្លាមៗនៅក្នុងផ្ទាំងបង្ហាញ។
៣. **ប្រព័ន្ធចងក្រងដែលត្រៀមរួចជាស្រេច៖** រាល់លំហាត់ទាំងអស់ត្រូវបានភ្ជាប់បណ្ណាល័យ jQuery រួចជាស្រេច ដូច្នេះអ្នកមិនចាំបាច់តម្លើងអ្វីឡើយ។

> **គន្លឹះ៖** អ្នកអាចសរសេរឯកសារ HTML ពេញលេញ រួមទាំងរចនាបថ CSS នៅក្នុង \`<style>\` និងកូដបញ្ជា jQuery នៅក្នុង \`<script>\` បានដោយសេរី!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 25px; text-align: center;">
  <h2>Type Something in Input</h2>
  <input type="text" id="liveInput" placeholder="Type here..." style="padding:10px; width:80%; font-size:16px;">
  <h3 id="mirrorText" style="color:#0284c7; margin-top:20px;">Watching...</h3>

  <script>
    $(document).ready(function(){
      $("#liveInput").on("input", function(){
        var val = $(this).val();
        if(val === "") {
          $("#mirrorText").text("Watching...");
        } else {
          $("#mirrorText").text(val);
        }
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-quiz-summary",
    title: { en: "jQuery Quiz", km: "លំហាត់សាកល្បង Quiz" },
    content: {
      en: `# jQuery Quiz Overview
Testing your knowledge regularly is vital to concrete retention and building confidence as an engineer.

### Quiz Setup:
- Select the **Quizzes** tab from the top header panel in this course interface.
- Complete challenging questions focusing on syntax, DOM selections, event tracking, animations, and AJAX details.
- Receive instant grade evaluation and step-by-step detailed explanations for both correct and incorrect answers.

Aim for a perfect score to consolidate your skills!`,
      km: `# ទំព័រសង្ខេបលំហាត់ Quiz ក្នុង jQuery
ការសាកល្បងតេស្តសមត្ថភាពរបស់អ្នកឱ្យបានទៀងទាត់ គឺចាំបាច់ណាស់ដើម្បីពង្រឹងការចងចាំ និងបង្កើតទំនុកចិត្តក្នុងនាមជាអ្នកសរសេរកូដអាជីព។

### ការរៀបចំលំហាត់៖
- ជ្រើសរើសផ្ទាំង **Quizzes** នៅផ្នែកខាងលើនៃរបារម៉ឺនុយក្នុងវគ្គសិក្សានេះ។
- ឆ្លើយសំណួរដែលផ្តោតលើ Syntax, ការជ្រើសរើស Selectors, ការគ្រប់គ្រងព្រឹត្តិការណ៍, ការបង្កើតចលនា និងការងារ AJAX។
- ទទួលបានការវាយតម្លៃពិន្ទុភ្លាមៗ និងការពន្យល់លម្អិតសម្រាប់សំណួរនីមួយៗ។

ព្យាយាមឆ្លើយឱ្យបានត្រឹមត្រូវទាំងអស់ដើម្បីបញ្ជាក់ពីការយល់ដឹងច្បាស់លាស់របស់អ្នក!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h3>Mini Quiz Demonstration</h3>
  <p>Question: Which symbol is used to access jQuery?</p>
  
  <input type="radio" name="symbol" value="1"> & (Ampersand)<br>
  <input type="radio" name="symbol" value="2" id="correct"> $ (Dollar Sign)<br>
  <input type="radio" name="symbol" value="3"> # (Hash)<br><br>
  
  <button id="submitAnswer">Submit Answer</button>
  <p id="feedback" style="font-weight:bold;"></p>

  <script>
    $(document).ready(function(){
      $("#submitAnswer").click(function(){
        if($("#correct").is(":checked")) {
          $("#feedback").text("Correct! $ is the jQuery shortcut.").css("color", "green");
        } else {
          $("#feedback").text("Incorrect. Try again!").css("color", "red");
        }
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-exercises-summary",
    title: { en: "jQuery Exercises", km: "លំហាត់អនុវត្តជាក់ស្តែង" },
    content: {
      en: `# jQuery Exercises
Practice makes perfect. We have compiled high-value exercises to strengthen your mastery of selectors and effects.

### Recommended Exercise Checklist:
1. **Selection Challenge:** Select all paragraph tags with class "alert" and hide them instantly.
2. **Animation Challenge:** Move an absolute-positioned block 150px to the right while fading it to 30% opacity in 1.2 seconds.
3. **Class Master:** Toggle an outline border class when hover inputs are triggered.
4. **Accordion builder:** Construct a collapsible accordion using custom sibling methods.

Try editing the starter playground on the right to complete a mini zebra-striping exercise!`,
      km: `# លំហាត់អនុវត្តផ្សេងៗរបស់ jQuery
ការអនុវត្តច្រើននឹងធ្វើឱ្យអ្នកកាន់តែស្ទាត់ជំនាញ។ យើងបានចងក្រងលំហាត់សំខាន់ៗជាច្រើនដើម្បីជួយបង្កើនសមត្ថភាពរបស់អ្នកក្នុងការគ្រប់គ្រង Selectors និងចលនាផ្សេងៗ។

### បញ្ជីលំហាត់ដែលគួរអនុវត្ត៖
១. **លំហាត់ជ្រើសរើស (Selection Challenge)៖** ជ្រើសរើសរាល់ថេក Paragraph ណាដែលមាន class "alert" រួចលាក់វាភ្លាមៗ។
២. **លំហាត់បង្កើតចលនា (Animation Challenge)៖** ផ្លាស់ទីប្រអប់ Absolute ទៅស្តាំ ១៥០ភីកសែល ព្រមទាំងព្រាលទៅកម្រិត ៣០% ក្នុងពេល ១.២វិនាទី។
៣. **លំហាត់គ្រប់គ្រង Class៖** បើក/បិទថ្នាក់រចនាបន្ទាត់គែម (Toggle border class) នៅពេលដែលកណ្តុររំកិលចូល។
៤. **លំហាត់បង្កើត Accordion៖** សាងសង់ម៉ឺនុយបត់លាតដោយប្រើប្រាស់វិធីសាស្ត្ររុករកបងប្អូន (Sibling methods)។

សាកល្បងកូដនៅក្នុង Sandbox ខាងស្តាំ ដើម្បីបំពេញលំហាត់ Zebra-striping ងាយៗ!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h3>Exercise: Highlight Odd Rows</h3>
  <p>Modify the jQuery code below to highlight <strong>odd</strong> rows with lightpink background when button is clicked.</p>

  <ul id="testList" style="padding:10px; background:#fff; border:1px solid #ccc;">
    <li>Item Index 0</li>
    <li>Item Index 1 (Odd)</li>
    <li>Item Index 2</li>
    <li>Item Index 3 (Odd)</li>
  </ul>

  <button id="btnSolve">Highlight Odd Items</button>

  <script>
    $(document).ready(function(){
      $("#btnSolve").click(function(){
        // EXERCISE TASK: Change ':even' to ':odd' and background to 'lightpink'
        $("#testList li:even").css("background-color", "lightblue");
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-syllabus",
    title: { en: "jQuery Syllabus", km: "កម្មវិធីសិក្សា Syllabus" },
    content: {
      en: `# jQuery Syllabus Structure
This course is structured systematically to guide you from complete beginner to pro.

### Syllabus Chapters:
1. **Getting Started (Lessons 1-6):** Basics, installation CDNs, core syntax, select targets, mouse/input events.
2. **jQuery Effects (Lessons 7-13):** Transitions, sliding dropdown panels, custom multi-queued animators, stops, callback synchronizations, method chaining.
3. **jQuery HTML (Lessons 14-20):** Manipulating contents (text, HTML, input values), attributes, creating elements, removing nodes, direct CSS, sizing dimensions.
4. **jQuery Traversing (Lessons 21-25):** Moving up (Ancestors), down (Descendants), and sideways (Siblings) in the DOM, index filtering.
5. **jQuery AJAX (Lessons 26-28):** Asynchronous load, GET request fetching, and secure POST form submissions.
6. **jQuery Reference Index (Lessons 38-46):** Rapid-lookup guides for selectors, events, CSS, effects, and traversing APIs.`,
      km: `# រចនាសម្ព័ន្ធកម្មវិធីសិក្សា (jQuery Syllabus)
វគ្គសិក្សានេះត្រូវបានរៀបចំឡើងជាប្រព័ន្ធដើម្បីជួយនាំផ្លូវអ្នកតាំងពីមិនទាន់ចេះសោះ រហូតដល់ស្ទាត់ជំនាញ។

### ជំពូកមេរៀននីមួយៗ៖
១. **ការចាប់ផ្តើមដំបូង (មេរៀន ១-៦)៖** មូលដ្ឋានគ្រឹះ, ការភ្ជាប់ CDN, ទម្រង់ Syntax, ការចាប់យកធាតុផ្សេងៗ និងព្រឹត្តិការណ៍ Event។
២. **ចលនា និងផលប៉ះពាល់ (មេរៀន ៧-១៣)៖** ការលាក់បង្ហាញ, ចលនា سلាយ Dropdown, custom animators, ការបញ្ឈប់ stop(), callback synchronizations និងវិធីសាស្ត្រ Chaining។
៣. **ការគ្រប់គ្រង HTML (មេរៀន ១៤-២០)៖** កែប្រែមាតិកា (Text, HTML, value), ការលុប និងបន្ថែមធាតុ, ការគ្រប់គ្រង CSS classes និងការវាស់វែងទំហំ។
៤. **ការរុករករចនាសម្ព័ន្ធ (មេរៀន ២១-២៥)៖** ការរុករកឡើងលើ (Ancestors), ចុះក្រោម (Descendants) និងទៅចំហៀង (Siblings) ក្នុង DOM។
៥. **jQuery AJAX (មេរៀន ២៦-២៨)៖** ការទាញយកទិន្នន័យពី Server ក្នុង background (Load, GET, POST)។
៦. **សន្ទស្សន៍ជំនួយរហ័ស (មេរៀន ៣៨-៤៦)៖** សៀវភៅជំនួយរហ័សសម្រាប់ Selectors, Events, CSS, Effects និង Traversing APIs។​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Course Chapters Inspector</h2>
  <div style="margin-bottom: 10px;">
    <button class="chap" data-desc="Basics, Selectors, and Events.">Chapter 1</button>
    <button class="chap" data-desc="Fading, Sliding, and Custom Queued Animations.">Chapter 2</button>
    <button class="chap" data-desc="DOM Manipulation, CSS classes, and Dimensions.">Chapter 3</button>
    <button class="chap" data-desc="Background Server Connections without Reload.">Chapter 4</button>
  </div>
  <p id="chapDesc" style="font-weight:bold; color:#0284c7;">Click a chapter button to view details.</p>

  <script>
    $(document).ready(function(){
      $(".chap").click(function(){
        var desc = $(this).attr("data-desc");
        $("#chapDesc").text(desc);
      });
    });
  </script>
</body>
</html>`
  },
  {
    id: "jq-study-plan",
    title: { en: "jQuery Study Plan", km: "ផែនការសិក្សា Study Plan" },
    content: {
      en: `# jQuery Developer Study Plan
To achieve complete mastery of jQuery inside 1-2 weeks, we recommend following this efficient study plan:

### Day-by-Day Roadmap:
- **Day 1-2: Setup & Selection Basics:** Master selectors (\`#id\`, \`.class\`, element) and register standard click and hover event handlers.
- **Day 3-4: Fluid Interactive Interfaces:** Master sliding accordions, fading popups, stop controls, and sequence animations using method chaining.
- **Day 5-6: Dynamic Content Manipulation:** Build lists by appending/removing HTML elements, read/write user form inputs, and toggle CSS classes.
- **Day 7-8: Advanced Traversing & AJAX:** Connect lists using sibling traversing and fetch server data via asynchronous \`$.get()\` or \`$.post()\` endpoints.
- **Day 9-10: Capstone Project & Certification:** Complete all quizzes and build an interactive mini-project!`,
      km: `# ផែនការសិក្សាសម្រាប់អ្នកអភិវឌ្ឍន៍ jQuery
ដើម្បីទទួលបានភាពស្ទាត់ជំនាញពេញលេញលើបណ្ណាល័យ jQuery ក្នុងរយៈពេល ១-២ សប្តាហ៍ យើងសូមណែនាំឱ្យអនុវត្តតាមផែនការសិក្សាលម្អិតខាងក្រោម៖

### ផែនទីបង្ហាញផ្លូវតាមថ្ងៃនីមួយៗ៖
- **ថ្ងៃទី ១-២៖ មូលដ្ឋានគ្រឹះ និងការជ្រើសរើស Selectors៖** ស្ទាត់ជំនាញលើ Selectors (\`#id\`, \`.class\`, element) និងចុះឈ្មោះ Events ងាយៗ។
- **ថ្ងៃទី ៣-៤៖ ការសាងសង់ចលនាអន្តរកម្ម៖** យល់ដឹងពីការបង្កើត Accordion បត់លាត, fading popups និងចលនាដោយប្រើ Chaining។
- **ថ្ងៃទី ៥-៦៖ ការគ្រប់គ្រងមាតិកាគេហទំព័រឌីណាមិក៖** បង្កើតប្រអប់ការងារដោយប្រើ append/remove HTML ធាតុ និងការផ្លាស់ប្តូរថ្នាក់ CSS classes។
- **ថ្ងៃទី ៧-៨៖ ជំនាញ Traversing & AJAX៖** ភ្ជាប់ទំនាក់ទំនងបញ្ជីធាតុផ្សេងៗដោយប្រើ Siblings traversing និងទាញយកទិន្នន័យពី Server តាមរយៈ \`$.get()\` ឬ \`$.post()\`។
- **ថ្ងៃទី ៩-១០៖ គម្រោងអនុវត្តធំ និងការទទួលវិញ្ញាបនបត្រ៖** បំពេញរាល់លំហាត់តេស្ត និងបញ្ចប់គម្រោងអនុវត្តខ្នាតតូច!​`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Interactive Progress Tracker</h2>
  <p>Track your learning milestone progression:</p>

  <ul style="list-style-type:none; padding-left:0;">
    <li><input type="checkbox" class="task"> Day 1-2: Selectors & Events Completed</li>
    <li><input type="checkbox" class="task"> Day 3-4: Animations & stop() Completed</li>
    <li><input type="checkbox" class="task"> Day 5-6: DOM Append/Remove & Classes Completed</li>
    <li><input type="checkbox" class="task"> Day 7-8: Traversing & AJAX Server Completed</li>
  </ul>

  <h3 id="progressMsg" style="color:blue;">0 of 4 milestones checked</h3>

  <script>
    $(document).ready(function(){
      $(".task").change(function(){
        var checkedCount = $(".task:checked").length;
        $("#progressMsg").text(checkedCount + " of 4 milestones checked");
        
        if(checkedCount === 4) {
          $("#progressMsg").text("🎉 Fantastic! You are ready for jQuery Certification!").css("color", "green");
        } else {
          $("#progressMsg").css("color", "blue");
        }
      });
    });
  </script>
</body>
</html>`
  }
];
