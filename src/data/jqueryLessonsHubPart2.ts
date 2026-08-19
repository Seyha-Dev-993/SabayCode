import { FrontendLesson } from '../types/frontendClass';

export const JQUERY_LESSONS_PART2: FrontendLesson[] = [
  // ==========================================
  // MODULE 5: DOM Manipulation with jQuery
  // ==========================================
  {
    id: 'jq-l14',
    slug: 'jquery-getting-setting-content',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: {
      en: '5.1 Getting & Setting Content (.html(), .text(), .val())',
      km: '5.1 ការអាន និងកែប្រែទិន្នន័យ (.html(), .text(), .val())'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'jQuery provides dual-purpose methods to read or write element contents: `.text()` handles plain text, `.html()` handles HTML tags, and `.val()` reads/sets form input values.',
      km: 'jQuery ផ្តល់ Method មានមុខងារពីរក្នុងការអាន (Get) ឬសរសេរ (Set) ទិន្នន័យ៖ `.text()` សម្រាប់ អត្ថបទសុទ្ធ, `.html()` សម្រាប់ HTML Tags និង `.val()` សម្រាប់អាន/កែប្រែតម្លៃក្នុង Form Inputs។'
    },
    tutorial: {
      en: '- Read plain text: `let txt = $("#heading").text();` \n- Write HTML tags: `$("#container").html("<b>New</b>");` \n- Read input field: `let email = $("#emailInput").val();` \n- Clear input field: `$("#emailInput").val("");`',
      km: '- អាន Text៖ `let txt = $("#heading").text();` \n- សរសេរ HTML Tags៖ `$("#container").html("<b>New</b>");` \n- អានតម្លៃ Input៖ `let email = $("#emailInput").val();` \n- លុបតម្លៃក្នុង Input៖ `$("#emailInput").val("");` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 20px; }
    .card { background: #1e293b; border: 1px solid #334155; padding: 16px; border-radius: 8px; max-width: 450px; }
    input[type="text"] { background: #020617; border: 1px solid #475569; color: white; padding: 8px; border-radius: 6px; width: 80%; margin-bottom: 10px; }
    button { background: #0284c7; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: bold; }
    .preview-box { margin-top: 12px; padding: 10px; background: #090d16; border-radius: 6px; border-left: 4px solid #38bdf8; }
  </style>
</head>
<body>
  <div class="card">
    <h3>📝 DOM Getter / Setter Demo</h3>
    
    <label>បញ្ចូលឈ្មោះរបស់អ្នក៖</label><br/>
    <input type="text" id="nameInput" value="សុខ ចាន់" /><br/>
    
    <button id="btnRead">Read .val() & Set .html()</button>

    <div class="preview-box" id="resultArea">
      លទ្ធផលនឹងបង្ហាញនៅទីនេះ...
    </div>
  </div>

  <script>
    $(function() {
      $('#btnRead').click(function() {
        // Read input value using .val()
        const userVal = $('#nameInput').val();

        // Set rich HTML content using .html()
        $('#resultArea').html('🎉 ស្វាគមន៍លោក <strong>' + userVal + '</strong>! កូដ HTML ត្រូវបាន Update!');
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Form Data Extraction',
        km: 'ការស្រង់ទិន្នន័យពី Form'
      },
      description: {
        en: 'Using `.val()` to read text inputs, select dropdowns, and textareas is standard across legacy web forms before sending payload via AJAX.',
        km: 'ការប្រើប្រាស់ `.val()` ដើម្បីអាន Text inputs, Select dropdowns និង Textareas គឺជាវិធីសាស្ត្រទូទៅក្នុង Form មុនពេលផ្ញើទៅកាន់ Server។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write jQuery code to clear the input field with ID `#username`.',
        km: 'សរសេរកូដ jQuery ដើម្បីលុបទិន្នន័យចេញពី Input ដែលមាន ID `#username`។'
      },
      solution: '$("#username").val("");'
    },
    quizQuestions: [
      {
        id: 'jq-q14',
        question: {
          en: 'Which jQuery method should be used to read the current text typed inside an `<input>` field?',
          km: 'តើ jQuery Method មួយណាដែលត្រូវប្រើដើម្បីអាន Text នៅក្នុង `<input>` Field?'
        },
        options: [
          { id: '1', text: { en: '.val()', km: '.val()' }, isCorrect: true },
          { id: '2', text: { en: '.text()', km: '.text()' }, isCorrect: false },
          { id: '3', text: { en: '.html()', km: '.html()' }, isCorrect: false }
        ],
        explanation: {
          en: '`.val()` is designed specifically for form elements (inputs, selects, textareas). `.text()` is for standard HTML container tags.',
          km: '`.val()` ត្រូវបានបង្កើតឡើងជាពិសេសសម្រាប់ Form elements (inputs, selects, textareas)។'
        }
      }
    ]
  },

  {
    id: 'jq-l15',
    slug: 'jquery-add-remove-elements',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: {
      en: '5.2 Adding & Removing Elements (.append(), .prepend(), .remove(), .empty())',
      km: '5.2 ការបន្ថែម និងលុប Elements (.append(), .prepend(), .remove(), .empty())'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'jQuery makes DOM insertion and deletion straightforward: `.append()` inserts at the end of a parent, `.prepend()` inserts at the beginning, `.remove()` destroys the element, and `.empty()` clears all child nodes.',
      km: 'jQuery ធ្វើឱ្យការបន្ថែម និងលុប DOM Elements មានភាពងាយស្រួល៖ `.append()` បញ្ចូលខាងចុង, `.prepend()` បញ្ចូលខាងដើម, `.remove()` លុប Element ចោលទាំងស្រុង និង `.empty()` លុបតែ Element កូនៗខាងក្នុង។'
    },
    tutorial: {
      en: '- Add at end: `$("#list").append("<li>End</li>");` \n- Add at start: `$("#list").prepend("<li>Start</li>");` \n- Delete element: `$("#card").remove();` \n- Clear child elements: `$("#container").empty();`',
      km: '- បន្ថែមខាងចុង៖ `$("#list").append("<li>End</li>");` \n- បន្ថែមខាងដើម៖ `$("#list").prepend("<li>Start</li>");` \n- លុប Element៖ `$("#card").remove();` \n- លុបកូនៗខាងក្នុង៖ `$("#container").empty();` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: white; padding: 20px; }
    ul { list-style: none; padding: 0; }
    li { background: #1e293b; border: 1px solid #334155; padding: 8px 12px; margin-bottom: 6px; border-radius: 6px; }
    button { padding: 8px 12px; border-radius: 6px; border: none; font-weight: bold; cursor: pointer; color: white; margin-right: 6px; }
    .btn-app { background: #16a34a; }
    .btn-pre { background: #2563eb; }
    .btn-emp { background: #dc2626; }
  </style>
</head>
<body>
  <h3>📋 Dynamic List Insertion</h3>

  <div style="margin-bottom: 12px;">
    <button id="btnAppend" class="btn-app">+ Append (ខាងចុង)</button>
    <button id="btnPrepend" class="btn-pre">+ Prepend (ខាងដើម)</button>
    <button id="btnEmpty" class="btn-emp">🗑️ Empty All</button>
  </div>

  <ul id="myList">
    <li>📌 Item ដើមទី ១</li>
    <li>📌 Item ដើមទី ២</li>
  </ul>

  <script>
    $(function() {
      let count = 0;

      $('#btnAppend').click(function() {
        count++;
        $('#myList').append('<li>🟢 Item បន្ថែមខាងចុង #' + count + '</li>');
      });

      $('#btnPrepend').click(function() {
        count++;
        $('#myList').prepend('<li>🔵 Item បន្ថែមខាងដើម #' + count + '</li>');
      });

      $('#btnEmpty').click(function() {
        $('#myList').empty();
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Dynamic Comment Streams',
        km: 'ការបន្ថែម Comment ថ្មីលើ Page'
      },
      description: {
        en: 'Social feeds use `.prepend()` so newly posted user comments immediately appear at the top of the comment feed.',
        km: 'Social Feeds ប្រើប្រាស់ `.prepend()` ដើម្បីឱ្យ Comment ថ្មីដែល User ទើបនឹង Post បង្ហាញនៅខាងលើគេបង្អស់ភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What is the difference between `.remove()` and `.empty()` in jQuery?',
        km: 'តើអ្វីជាភាពខុសគ្នារវាង `.remove()` និង `.empty()` ក្នុង jQuery?'
      },
      solution: '.remove() deletes the selected element itself and its children, while .empty() deletes only the inner child nodes.'
    },
    quizQuestions: [
      {
        id: 'jq-q15',
        question: {
          en: 'Which method removes only the inner content/children of an element, keeping the outer element container intact?',
          km: 'តើ Method មួយណាដែលលុបតែមាតិកាកូនៗខាងក្នុង ដោយរក្សាទុកប្រអប់ Element ខាងក្រៅដដែល?'
        },
        options: [
          { id: '1', text: { en: '.empty()', km: '.empty()' }, isCorrect: true },
          { id: '2', text: { en: '.remove()', km: '.remove()' }, isCorrect: false },
          { id: '3', text: { en: '.delete()', km: '.delete()' }, isCorrect: false }
        ],
        explanation: {
          en: '`.empty()` strips out all child elements and text nodes inside the container without deleting the container itself.',
          km: '`.empty()` លុបសម្អាតតែ Element កូនៗខាងក្នុងដោយមិនប៉ះពាល់ប្រអប់ Container ខាងក្រៅឡើយ។'
        }
      }
    ]
  },

  {
    id: 'jq-l16',
    slug: 'jquery-css-classes-manipulation',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: {
      en: '5.3 Manipulating CSS & Classes (.css(), .addClass(), .toggleClass())',
      km: '5.3 ការកែប្រែ CSS & Classes (.css(), .addClass(), .toggleClass())'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Instead of writing verbose inline styles with `.css()`, standard jQuery practice is toggling CSS classes via `.addClass()`, `.removeClass()`, `.toggleClass()`, and checking `.hasClass()`.',
      km: 'ជំនួសឱ្យការសរសេរ Inline Styles ច្រើនជាមួយ `.css()` ក្បួនសរសេរដ៏ល្អក្នុង jQuery គឺការបន្ថែម/ដក Class តាមរយៈ `.addClass()`, `.removeClass()`, `.toggleClass()`, និង `.hasClass()`។'
    },
    tutorial: {
      en: '- Add class: `$("#box").addClass("active");` \n- Remove class: `$("#box").removeClass("active");` \n- Toggle class: `$("#box").toggleClass("active");` \n- Set inline CSS: `$("#box").css({ color: "red", fontSize: "20px" });`',
      km: '- បន្ថែម Class៖ `$("#box").addClass("active");` \n- ដក Class៖ `$("#box").removeClass("active");` \n- ប្តូរ Class៖ `$("#box").toggleClass("active");` \n- កំណត់ Inline CSS៖ `$("#box").css({ color: "red", fontSize: "20px" });` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 20px; transition: 0.3s; }
    .card { background: #1e293b; border: 2px solid #334155; padding: 20px; border-radius: 12px; max-width: 400px; transition: 0.3s; }
    
    /* Dynamic active class styling */
    .card.active-theme {
      background: #064e3b;
      border-color: #10b981;
      box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.4);
    }

    button { background: #10b981; color: white; border: none; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card" id="themeCard">
    <h3>🎨 Dark / Emerald Theme Switcher</h3>
    <p id="descText">ប្រអប់នេះកំពុងស្ថិតក្នុង Standard Dark Mode។</p>
    <button id="btnToggleClass">Toggle .active-theme</button>
  </div>

  <script>
    $(function() {
      $('#btnToggleClass').click(function() {
        // Toggle CSS class active-theme
        $('#themeCard').toggleClass('active-theme');

        // Check if class exists using .hasClass()
        if ($('#themeCard').hasClass('active-theme')) {
          $('#descText').text('✨ បានប្តូរទៅជា Emerald Theme ដោយជោគជ័យ!');
        } else {
          $('#descText').text('ប្រអប់នេះកំពុងស្ថិតក្នុង Standard Dark Mode។');
        }
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Dark Mode Toggles',
        km: 'ការបង្កើត Dark Mode Switcher'
      },
      description: {
        en: 'Applying `$("body").toggleClass("dark-theme")` is the cleanest way to switch whole-page design themes without polluting HTML elements with inline CSS properties.',
        km: 'ការប្រើប្រាស់ `$("body").toggleClass("dark-theme")` គឺជាវិធីស្អាតបំផុតក្នុងការប្តូរ Theme Website ទាំងមូលដោយមិនបាច់សរសេរ Inline Styles។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write jQuery code to check if #modal has class `.open`.',
        km: 'សរសេរកូដ jQuery ដើម្បីពិនិត្យមើលថា តើ #modal មាន Class `.open` ឬទេ?'
      },
      solution: '$("#modal").hasClass("open")'
    },
    quizQuestions: [
      {
        id: 'jq-q16',
        question: {
          en: 'Which method toggles the presence of a CSS class on an element automatically based on whether it currently exists?',
          km: 'តើ Method មួយណាដែលបន្ថែម Class បើមិនទាន់មាន និងដក Class ចេញវិញបើមានរួចហើយ?'
        },
        options: [
          { id: '1', text: { en: '.toggleClass()', km: '.toggleClass()' }, isCorrect: true },
          { id: '2', text: { en: '.switchClass()', km: '.switchClass()' }, isCorrect: false },
          { id: '3', text: { en: '.changeClass()', km: '.changeClass()' }, isCorrect: false }
        ],
        explanation: {
          en: '`.toggleClass("className")` adds the class if missing, or removes it if present.',
          km: '`.toggleClass("className")` បន្ថែម Class បើគ្មាន និងដក Class ចេញបើមានរួច។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 6: AJAX with jQuery
  // ==========================================
  {
    id: 'jq-l17',
    slug: 'jquery-ajax-basics',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: {
      en: '6.1 The Fundamental $.ajax() Structure',
      km: '6.1 រចនាសម្ព័ន្ធមូលដ្ឋាននៃ $.ajax()'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: '`$.ajax()` is jQuery\'s underlying core method for making asynchronous HTTP requests without refreshing the browser page. It accepts a configuration object defining `url`, `type`, `dataType`, `success`, and `error` callbacks.',
      km: '`$.ajax()` គឺជា Method ស្នូលរបស់ jQuery សម្រាប់ធ្វើ HTTP Request ទៅកាន់ API ដោយមិនបាច់ Refresh Page ឡើយ។ វាទទួល Object កំណត់ `url`, `type` (GET/POST), `dataType`, `success` និង `error` callbacks។'
    },
    tutorial: {
      en: 'Basic Structure:\n`$.ajax({` \n`  url: "https://api.example.com/data",` \n`  type: "GET",` \n`  dataType: "json",` \n`  success: function(response) { console.log(response); },` \n`  error: function(xhr, status, err) { console.error(err); }` \n`});`',
      km: 'រចនាសម្ព័ន្ធកូដ៖\n`$.ajax({` \n`  url: "https://api.example.com/data",` \n`  type: "GET",` \n`  dataType: "json",` \n`  success: function(response) { console.log(response); },` \n`  error: function(xhr, status, err) { console.error(err); }` \n`});`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: white; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #334155; padding: 20px; border-radius: 12px; max-width: 480px; }
    button { background: #2563eb; color: white; border: none; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; }
    .quote-box { margin-top: 15px; padding: 12px; background: #1e293b; border-left: 4px solid #3b82f6; border-radius: 4px; font-style: italic; }
  </style>
</head>
<body>
  <div class="card">
    <h3>🌐 jQuery $.ajax() Live Fetch</h3>
    <button id="btnFetch">Fetch Random User Quote</button>
    
    <div class="quote-box" id="quoteResult">
      ចុចប៊ូតុងខាងលើដើម្បីទាញយកទិន្នន័យពី API...
    </div>
  </div>

  <script>
    $(function() {
      $('#btnFetch').click(function() {
        $('#quoteResult').text('⏳ កំពុងទាញយកទិន្នន័យពី API...');

        // Execute $.ajax HTTP request
        $.ajax({
          url: 'https://dummyjson.com/quotes/random',
          type: 'GET',
          dataType: 'json',
          success: function(data) {
            $('#quoteResult').html('"' + data.quote + '" <br/><br/><strong>— ' + data.author + '</strong>');
          },
          error: function(xhr, status, error) {
            $('#quoteResult').html('❌ មានបញ្ហាក្នុងការទាញទិន្នន័យ៖ ' + error);
          }
        });
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Dynamic Content Loading',
        km: 'ការទាញទិន្នន័យ Asynchronous'
      },
      description: {
        en: 'Before modern `fetch()` existed, `$.ajax()` was the industry gold standard for updating dashboard widgets, live charts, and search autocomplete suggestions in real-time.',
        km: 'មុនពេលមាន `fetch()`, `$.ajax()` គឺជាស្តង់ដារឧស្សាហកម្មសម្រាប់ទាញយកទិន្នន័យមក Update លើ Dashboard ឬ Search Autocomplete ដោយមិនបាច់ Reload ទំព័រ។'
      }
    }, practiceExercise: {
      question: {
        en: 'Which property in $.ajax() specifies the HTTP method (e.g. GET, POST)?',
        km: 'តើ Property មួយណា ក្នុង $.ajax() សម្រាប់កំណត់ HTTP Method (ឧ. GET, POST)?'
      },
      solution: 'type or method'
    },
    quizQuestions: [
      {
        id: 'jq-q17',
        question: {
          en: 'In jQuery `$.ajax()`, which callback function executes when the server successfully returns requested data?',
          km: 'ក្នុង jQuery `$.ajax()`, តើ Callback function មួយណារត់នៅពេល Server បញ្ជូនទិន្នន័យត្រឡប់មកវិញដោយជោគជ័យ?'
        },
        options: [
          { id: '1', text: { en: 'success', km: 'success' }, isCorrect: true },
          { id: '2', text: { en: 'complete', km: 'complete' }, isCorrect: false },
          { id: '3', text: { en: 'then', km: 'then' }, isCorrect: false }
        ],
        explanation: {
          en: 'The `success` callback receives the response payload returned from the backend endpoint.',
          km: 'Callback `success` ទទួលទិន្នន័យ Response ទាំងអស់ដែលបានផ្ញើមកពី Backend។'
        }
      }
    ]
  },

  {
    id: 'jq-l18',
    slug: 'jquery-get-post-shorthand',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: {
      en: '6.2 Shorthand Methods: $.get() and $.post()',
      km: '6.2 Methods កាត់៖ $.get() និង $.post()'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'jQuery provides clean shorthand helper functions `$.get()` and `$.post()` for simple HTTP requests without needing the full verbose configuration object of `$.ajax()`.',
      km: 'jQuery ផ្តល់ Method កាត់យ៉ាងងាយស្រួលគឺ `$.get()` និង `$.post()` សម្រាប់ផ្ញើ HTTP GET/POST Request ធម្មតាៗដោយមិនបាច់សរសេរ Configuration Object វែងក្នុង `$.ajax()` ឡើយ។'
    },
    tutorial: {
      en: '- Shorthand GET:\n`$.get("api/users", function(data) { ... });` \n- Shorthand POST:\n`$.post("api/login", { user: "john", pass: "123" }, function(res) { ... });`',
      km: '- Shorthand GET៖\n`$.get("api/users", function(data) { ... });` \n- Shorthand POST៖\n`$.post("api/login", { user: "john" }, function(res) { ... });` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 20px; }
    .card { background: #1e293b; border: 1px solid #334155; padding: 20px; border-radius: 8px; max-width: 450px; }
    button { background: #10b981; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: bold; }
    .res-list { margin-top: 12px; font-size: 14px; color: #6ee7b7; }
  </style>
</head>
<body>
  <div class="card">
    <h3>⚡ $.get() Shorthand Method</h3>
    <button id="btnGet">Load Users with $.get()</button>
    <div class="res-list" id="userList"></div>
  </div>

  <script>
    $(function() {
      $('#btnGet').click(function() {
        $('#userList').text('⏳ Loading users...');

        // Simple shorthand $.get request
        $.get('https://dummyjson.com/users?limit=3', function(data) {
          let html = '<ul>';
          $.each(data.users, function(index, user) {
            html += '<li>👤 ' + user.firstName + ' ' + user.lastName + ' (' + user.email + ')</li>';
          });
          html += '</ul>';
          $('#userList').html(html);
        });
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Quick Data Fetching',
        km: 'ការទាញយកទិន្នន័យរហ័ស'
      },
      description: {
        en: '`$.get()` is widely used in legacy admin panels to populate quick dropdowns or modal details without boilerplate overhead.',
        km: '`$.get()` ត្រូវគេប្រើប្រាស់ច្រើនក្នុង Admin Panels បុរាណៗដើម្បីទាញយកទិន្នន័យដាក់ក្នុង Dropdown ឬ Modal ដោយមិនបាច់សរសេរកូដច្រើន។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write a $.get() call to endpoint "/api/stats" and log the response.',
        km: 'សរសេរកូដ $.get() ទៅកាន់ Endpoint "/api/stats" ហើយ console.log ទិន្នន័យ'
      },
      solution: '$.get("/api/stats", function(data) { console.log(data); });'
    },
    quizQuestions: [
      {
        id: 'jq-q18',
        question: {
          en: 'What is the main advantage of using `$.get()` over `$.ajax()` for simple GET operations?',
          km: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការប្រើប្រាស់ `$.get()` ជំនួសឱ្យ `$.ajax()` សម្រាប់ប្រតិបត្តិការ GET ធម្មតា?'
        },
        options: [
          { id: '1', text: { en: 'It requires much less boilerplate syntax and configuration options', km: 'វាត្រូវការកូដខ្លី និងមិនបាច់កំណត់ Configuration ច្រើន' }, isCorrect: true },
          { id: '2', text: { en: 'It bypasses browser security policy restrictions', km: 'វាជួយរំលង Browser Security' }, isCorrect: false },
          { id: '3', text: { en: 'It runs synchronously blocking browser UI thread', km: 'វាដំណើរការ Synchronous Block UI' }, isCorrect: false }
        ],
        explanation: {
          en: '`$.get()` is a shorthand wrapper around `$.ajax()` specifically tailored for simple GET requests.',
          km: '`$.get()` គឺជា Shorthand Wrapper ជុំវិញ `$.ajax()` សម្រាប់ GET Requests ធម្មតាៗ។'
        }
      }
    ]
  },

  {
    id: 'jq-l19',
    slug: 'jquery-ajax-callbacks',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: {
      en: '6.3 Handling Callbacks (.done(), .fail(), .always()) & Promises',
      km: '6.3 ការប្រើប្រាស់ Callbacks (.done(), .fail(), .always())'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Modern jQuery returned objects support Promise-like deferred methods: `.done()` (success), `.fail()` (error handler), and `.always()` (runs regardless of outcome).',
      km: 'jQuery ទំនើប គាំទ្រ Deferred Promise Methods៖ `.done()` (រត់ពេលជោគជ័យ), `.fail()` (រត់ពេលមាន Error) និង `.always()` (រត់ជានិច្ច ទោះបីជាជោគជ័យ ឬបរាជ័យក៏ដោយ)។'
    },
    tutorial: {
      en: 'Promise Chaining Syntax:\n`$.get("https://api.com/data")` \n`  .done(function(data) { ... })` \n`  .fail(function(err) { ... })` \n`  .always(function() { $("#spinner").hide(); });`',
      km: 'ទម្រង់ Promise Chaining៖\n`$.get("https://api.com/data")` \n`  .done(function(data) { ... })` \n`  .fail(function(err) { ... })` \n`  .always(function() { $("#spinner").hide(); });`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: white; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #334155; padding: 20px; border-radius: 8px; max-width: 450px; }
    button { background: #8b5cf6; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: bold; }
    .status { margin-top: 10px; padding: 8px; background: #1e293b; border-radius: 4px; font-size: 13px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>🔗 Deferred Promise Callbacks</h3>
    <button id="btnDeferred">Test .done() .fail() .always()</button>
    <div class="status" id="statusLog">កំពុងរង់ចាំ...</div>
  </div>

  <script>
    $(function() {
      $('#btnDeferred').click(function() {
        $('#statusLog').text('⏳ ផ្ញើ Request...');

        $.get('https://dummyjson.com/products/1')
          .done(function(res) {
            $('#statusLog').append('<br/>✅ .done(): ទទួលបាន ' + res.title);
          })
          .fail(function() {
            $('#statusLog').append('<br/>❌ .fail(): ជួបប្រទះ Error!');
          })
          .always(function() {
            $('#statusLog').append('<br/>🏁 .always(): បញ្ចប់ Request ជាស្ថាពរ!');
          });
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Loading Spinner Cleanup',
        km: 'ការបិទ Loading Spinner ស្វ័យប្រវត្តិ'
      },
      description: {
        en: 'Using `.always(function() { $("#spinner").hide(); })` guarantees that loading indicators are hidden whether the network request succeeds or throws a 500 server error.',
        km: 'ការប្រើប្រាស់ `.always()` ធានាថា Loading Icon នឹងត្រូវលាក់បាត់ជានិច្ច ទោះបីជាការទាញទិន្នន័យជោគជ័យ ឬជួប Error 500 ក៏ដោយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which callback method in jQuery AJAX always runs regardless of HTTP request success or failure?',
        km: 'តើ Callback method មួយណាដែលរត់ជានិច្ច ទោះបីជា HTTP request ជោគជ័យ ឬបរាជ័យ?'
      },
      solution: '.always()'
    },
    quizQuestions: [
      {
        id: 'jq-q19',
        question: {
          en: 'What is the modern Promise-like equivalent to `success` callback in jQuery Deferred objects?',
          km: 'តើមួយណាជា Deferred Method សមមូលនឹង Callback `success` ក្នុង jQuery?'
        },
        options: [
          { id: '1', text: { en: '.done()', km: '.done()' }, isCorrect: true },
          { id: '2', text: { en: '.thenOk()', km: '.thenOk()' }, isCorrect: false },
          { id: '3', text: { en: '.passed()', km: '.passed()' }, isCorrect: false }
        ],
        explanation: {
          en: '`.done()` is the Deferred Promise method that handles success responses.',
          km: '`.done()` គឺជា Deferred Promise Method ដែលទទួលខុសត្រូវលើ Success Response។'
        }
      }
    ]
  },

  {
    id: 'jq-l20',
    slug: 'jquery-ajax-vs-fetch',
    moduleNumber: 6,
    lessonNumberInModule: 4,
    title: {
      en: '6.4 Comparing jQuery AJAX vs. Modern Native fetch()',
      km: '6.4 ការប្រៀបធៀប jQuery AJAX ជាមួយ Modern Native fetch()'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Modern JavaScript includes native `window.fetch()` and `async/await`, eliminating the necessity for jQuery solely for AJAX requests in new web applications.',
      km: 'JavaScript ទំនើបមាន `window.fetch()` និង `async/await` មកជាមួយស្រាប់ (Native) ដូច្នេះប្រព័ន្ធ Web ថ្មីៗមិនបាច់ដំឡើង jQuery គ្រាន់តែដើម្បីប្រើ AJAX ដូចមុនទៀតឡើយ។'
    },
    tutorial: {
      en: 'jQuery AJAX:\n`$.get(url, data => console.log(data));` \n\nModern Native Fetch:\n`const res = await fetch(url);` \n`const data = await res.json();`',
      km: 'jQuery AJAX:\n`$.get(url, data => console.log(data));` \n\nModern Native Fetch:\n`const res = await fetch(url);` \n`const data = await res.json();` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 20px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 15px; }
    .box { background: #1e293b; border: 1px solid #334155; padding: 12px; border-radius: 8px; font-size: 13px; }
    button { background: #0284c7; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-weight: bold; width: 100%; margin-bottom: 8px; }
  </style>
</head>
<body>
  <h3>⚖️ jQuery AJAX vs Native Fetch()</h3>

  <div class="grid">
    <div class="box">
      <button id="btnJquery">1. Run $.ajax()</button>
      <div id="resJquery">រង់ចាំ...</div>
    </div>
    <div class="box">
      <button id="btnFetch">2. Run native fetch()</button>
      <div id="resFetch">រង់ចាំ...</div>
    </div>
  </div>

  <script>
    $(function() {
      // 1. jQuery AJAX
      $('#btnJquery').click(function() {
        $.get('https://dummyjson.com/quotes/1', function(data) {
          $('#resJquery').text('jQuery Result: "' + data.quote + '"');
        });
      });

      // 2. Native ES6 Fetch API
      $('#btnFetch').click(async function() {
        const response = await fetch('https://dummyjson.com/quotes/2');
        const data = await response.json();
        document.getElementById('resFetch').innerText = 'Fetch Result: "' + data.quote + '"';
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Refactoring Legacy Code',
        km: 'ការធ្វើ Refactor កូដចាស់ៗ'
      },
      description: {
        en: 'Modernization projects gradually replace `$.ajax()` calls with native `fetch()` or `axios` when stripping jQuery out of legacy web applications.',
        km: 'ក្នុងការកែសម្រួល Codebase ចាស់ៗ គេច្រើនជំនួស `$.ajax()` ដោយ Native `fetch()` ឬ `axios` ដើម្បីដក jQuery Library ចេញសម្រាលទំហំ Web។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Does native window.fetch() automatically parse JSON responses like jQuery $.ajax()?',
        km: 'តើ native fetch() បំប្លែងទិន្នន័យ JSON ដោយស្វ័យប្រវត្តិដូច jQuery $.ajax() ឬទេ?'
      },
      solution: 'No, native fetch requires explicitly calling `await response.json()`, whereas jQuery $.ajax automatically parses JSON.'
    },
    quizQuestions: [
      {
        id: 'jq-q20',
        question: {
          en: 'Why do modern web projects often use native `fetch()` instead of jQuery AJAX?',
          km: 'ហេតុអ្វីបានជា Web Project ទំនើបៗនិយមប្រើប្រាស់ Native `fetch()` ជំនួសឱ្យ jQuery AJAX?'
        },
        options: [
          { id: '1', text: { en: 'Native fetch() is built into browsers, requiring 0kb extra external library dependency', km: 'Native fetch() មានក្នុង Browser ស្រាប់ ដោយមិនបាច់ Load Library បន្ថែម (0kb)' }, isCorrect: true },
          { id: '2', text: { en: 'jQuery $.ajax() cannot connect to HTTPS endpoints', km: 'jQuery $.ajax() មិនអាចភ្ជាប់ទៅ HTTPS បាន' }, isCorrect: false },
          { id: '3', text: { en: 'fetch() only works on backend Node.js servers', km: 'fetch() រត់បានតែលើ Node.js backend' }, isCorrect: false }
        ],
        explanation: {
          en: 'Native `fetch()` is built into all modern web browsers natively, eliminating the need to import external libraries.',
          km: 'Native `fetch()` មានស្រាប់ក្នុង Browser ទំនើបៗទាំងអស់ មិនបាច់ Import Library ខាងក្រៅឡើយ។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 7: Working with Forms
  // ==========================================
  {
    id: 'jq-l21',
    slug: 'jquery-form-values',
    moduleNumber: 7,
    lessonNumberInModule: 1,
    title: {
      en: '7.1 Reading and Setting Form Values',
      km: '7.1 ការអាន និងកំណត់តម្លៃក្នុង Form Controls'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Manipulating form elements in jQuery is streamlined with `.val()` for text inputs, textareas, and select boxes, and `.prop("checked", boolean)` for checkboxes and radio buttons.',
      km: 'ការគ្រប់គ្រង Form elements ក្នុង jQuery មានភាពងាយស្រួលដោយប្រើប្រាស់ `.val()` សម្រាប់ Text inputs, Textareas, និង Select boxes ព្រមទាំង `.prop("checked", true/false)` សម្រាប់ Checkboxes និង Radio buttons។'
    },
    tutorial: {
      en: '- Read select dropdown: `let role = $("#roleSelect").val();` \n- Check checkbox: `$("#agreeBox").prop("checked", true);` \n- Read radio choice: `let gender = $("input[name=\'gender\']:checked").val();`',
      km: '- អានតម្លៃ Select dropdown៖ `let role = $("#roleSelect").val();` \n- ធិក Checkbox៖ `$("#agreeBox").prop("checked", true);` \n- អានតម្លៃ Radio option៖ `let gender = $("input[name=\'gender\']:checked").val();` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: white; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #334155; padding: 20px; border-radius: 12px; max-width: 450px; }
    .form-group { margin-bottom: 12px; }
    label { display: block; margin-bottom: 4px; font-size: 13px; color: #94a3b8; }
    input[type="text"], select { width: 100%; padding: 8px; background: #1e293b; border: 1px solid #475569; color: white; border-radius: 6px; }
    button { background: #0284c7; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: bold; width: 100%; }
    .summary { margin-top: 15px; padding: 10px; background: #1e293b; border-radius: 6px; border-left: 4px solid #38bdf8; font-size: 13px; }
  </style>
</head>
<body>
  <div class="card">
    <h3>📋 Form Value Reader</h3>
    
    <div class="form-group">
      <label>ឈ្មោះគណនី៖</label>
      <input type="text" id="username" value="Sok_Dev" />
    </div>

    <div class="form-group">
      <label>តួនាទី (Role)៖</label>
      <select id="userRole">
        <option value="Developer">Frontend Developer</option>
        <option value="Designer">UI/UX Designer</option>
        <option value="Manager">Project Manager</option>
      </select>
    </div>

    <div class="form-group">
      <label><input type="checkbox" id="subscribeBox" checked /> ទទួលព័ត៌មាន Newsletter</label>
    </div>

    <button id="btnReadForm">Read Form Values</button>

    <div class="summary" id="formSummary">
      ចុចប៊ូតុងដើម្បីអានតម្លៃ...
    </div>
  </div>

  <script>
    $(function() {
      $('#btnReadForm').click(function() {
        const name = $('#username').val();
        const role = $('#userRole').val();
        const isSubscribed = $('#subscribeBox').prop('checked');

        $('#formSummary').html(
          '👤 ឈ្មោះ៖ <strong>' + name + '</strong><br/>' +
          '💼 តួនាទី៖ <strong>' + role + '</strong><br/>' +
          '🔔 Newsletter៖ <strong>' + (isSubscribed ? 'យល់ព្រម' : 'បដិសេធ') + '</strong>'
        );
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Setting Form Defaults',
        km: 'ការបំពេញ Form ស្វ័យប្រវត្តិ (Auto-fill)'
      },
      description: {
        en: 'When opening an "Edit Profile" modal, `.val(data.name)` and `.prop("checked", data.isActive)` populate existing values into form controls.',
        km: 'ពេលបើកប្រអប់ Modal "កែប្រែប្រូហ្វាល", កូដ `.val(data.name)` នឹងចាក់បំពេញទិន្នន័យចាស់ចូលក្នុង Form ដោយស្វ័យប្រវត្តិ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'How do you check a checkbox with ID #termsCheckbox in jQuery?',
        km: 'តើអ្នកអាចធិក Checkbox មាន ID #termsCheckbox ដោយប្រើប្រាស់ jQuery តាមរបៀបណា?'
      },
      solution: '$("#termsCheckbox").prop("checked", true);'
    },
    quizQuestions: [
      {
        id: 'jq-q21',
        question: {
          en: 'Which jQuery method is recommended for modifying boolean element properties like `checked` or `disabled`?',
          km: 'តើ jQuery Method មួយណាដែលត្រូវបានណែនាំសម្រាប់កែប្រែ Boolean Properties ដូចជា `checked` ឬ `disabled`?'
        },
        options: [
          { id: '1', text: { en: '.prop()', km: '.prop()' }, isCorrect: true },
          { id: '2', text: { en: '.attr()', km: '.attr()' }, isCorrect: false },
          { id: '3', text: { en: '.setBool()', km: '.setBool()' }, isCorrect: false }
        ],
        explanation: {
          en: '`.prop("checked", true)` operates directly on live JavaScript DOM object properties rather than HTML attribute strings.',
          km: '`.prop()` ដំណើរការដោយផ្ទាល់លើ JavaScript DOM Object Property (Boolean)។'
        }
      }
    ]
  },

  {
    id: 'jq-l22',
    slug: 'jquery-form-submit-prevent-default',
    moduleNumber: 7,
    lessonNumberInModule: 2,
    title: {
      en: '7.2 Form Submission & preventDefault()',
      km: '7.2 ការចាប់ Form Submission និង e.preventDefault()'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'When a user submits a form, the browser by default reloads the webpage. In jQuery, calling `e.preventDefault()` inside a `.submit()` handler stops the page reload, enabling seamless AJAX submissions.',
      km: 'ពេល User ចុច Submit Form ជាធម្មតា Browser នឹងធ្វើការ Reload Page។ ក្នុង jQuery ការហៅប្រើ `e.preventDefault()` នៅក្នុង `.submit()` Handler នឹងទប់ស្កាត់ការ Reload ទំព័រ ដើម្បីឱ្យយើងអាចផ្ញើទិន្នន័យតាម AJAX យ៉ាងរលូន។'
    },
    tutorial: {
      en: 'Standard Submit Handler:\n`$("#myForm").submit(function(e) {` \n`  e.preventDefault(); // Stop page reload!` \n`  // Submit data via AJAX here` \n`});`',
      km: 'ទម្រង់កូដ៖\n`$("#myForm").submit(function(e) {` \n`  e.preventDefault(); // បញ្ឈប់ការ Reload Page!` \n`  // ផ្ញើទិន្នន័យតាម AJAX ទីនេះ` \n`});` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 20px; }
    .card { background: #1e293b; border: 1px solid #334155; padding: 20px; border-radius: 12px; max-width: 420px; }
    input { width: 100%; padding: 8px; background: #020617; border: 1px solid #475569; color: white; border-radius: 6px; margin-bottom: 12px; }
    button { background: #16a34a; color: white; border: none; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; width: 100%; }
    .alert { margin-top: 15px; padding: 10px; background: #064e3b; border: 1px solid #10b981; border-radius: 6px; display: none; }
  </style>
</head>
<body>
  <div class="card">
    <h3>🔒 AJAX Form Submission</h3>
    
    <form id="loginForm">
      <label>Email:</label>
      <input type="text" id="email" value="user@example.com" required />
      
      <label>Password:</label>
      <input type="password" id="password" value="secret123" required />

      <button type="submit">ចូលប្រើប្រាស់ (Submit)</button>
    </form>

    <div class="alert" id="successMsg">
      ✅ e.preventDefault() បានទប់ស្កាត់ការ Refresh ទំព័រ! ទិន្នន័យបានផ្ញើដោយរលូន។
    </div>
  </div>

  <script>
    $(function() {
      $('#loginForm').submit(function(e) {
        // Prevent default browser form refresh!
        e.preventDefault();

        // Show success alert cleanly without reloading page
        $('#successMsg').slideDown();
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Single Page Application Forms',
        km: 'Form ក្នុង កម្មវិធី SPA'
      },
      description: {
        en: 'Every modern Single Page Application relies on `e.preventDefault()` so submitting forms sends background API requests while preserving client-side component state.',
        km: 'រាល់ Web Applications ទំនើបៗទាំងអស់ពឹងផ្អែកលើ `e.preventDefault()` ដើម្បីផ្ញើ API ទៅ Backend ដោយមិនបាត់បង់ State លើទំព័រឡើយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What happens if you omit e.preventDefault() in a form submit event handler?',
        km: 'តើមានអ្វីកើតឡើងបើអ្នកភ្លេចសរសេរ e.preventDefault() ក្នុង Form submit handler?'
      },
      solution: 'The browser will perform a traditional synchronous HTTP GET/POST request and reload the entire webpage.'
    },
    quizQuestions: [
      {
        id: 'jq-q22',
        question: {
          en: 'What function call prevents the default browser action of reloading the page upon form submission?',
          km: 'តើ Function Call មួយណាដែលទប់ស្កាត់ Browser មិនឱ្យ Refresh Page ពេល Submit Form?'
        },
        options: [
          { id: '1', text: { en: 'e.preventDefault()', km: 'e.preventDefault()' }, isCorrect: true },
          { id: '2', text: { en: 'e.stopReload()', km: 'e.stopReload()' }, isCorrect: false },
          { id: '3', text: { en: 'e.haltSubmit()', km: 'e.haltSubmit()' }, isCorrect: false }
        ],
        explanation: {
          en: '`e.preventDefault()` cancels the default event action (such as form HTTP submission reload).',
          km: '`e.preventDefault()` បោះបង់ Default Action របស់ Event (ដូចជាការ Refresh Page ពេល Submit Form)។'
        }
      }
    ]
  },

  {
    id: 'jq-l23',
    slug: 'jquery-form-validation',
    moduleNumber: 7,
    lessonNumberInModule: 3,
    title: {
      en: '7.3 Simple Client-Side Form Validation',
      km: '7.3 ការបង្កើត Client-Side Form Validation'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Client-side validation gives immediate feedback to users before submitting data to a backend. Using jQuery, you can inspect input values, test empty fields or email regex patterns, and display error highlights.',
      km: 'Client-side validation ផ្តល់ព័ត៌មានត្រឡប់ (Feedback) ភ្លាមៗទៅកាន់ User មុនពេលផ្ញើ Form។ តាមរយៈ jQuery យើងអាចត្រួតពិនិត្យតម្លៃ Input, ឆែកមើលប្រអប់ទទេ ឬពិនិត្យ Email Regex រួចបង្ហាញសារ Error យ៉ាងរហ័ស។'
    },
    tutorial: {
      en: 'Validation Pattern:\n`if ($("#email").val().trim() === "") {` \n`  $("#emailError").text("សូមបញ្ចូល Email!");` \n`  isValid = false;` \n`}`',
      km: 'លំនាំកូដ Validation៖\n`if ($("#email").val().trim() === "") {` \n`  $("#emailError").text("សូមបញ្ចូល Email!");` \n`  isValid = false;` \n`}`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: white; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #334155; padding: 20px; border-radius: 12px; max-width: 420px; }
    .form-group { margin-bottom: 12px; }
    input { width: 100%; padding: 8px; background: #1e293b; border: 1px solid #475569; color: white; border-radius: 6px; }
    input.error-border { border-color: #ef4444; background: #450a0a; }
    .error-msg { color: #f87171; font-size: 12px; margin-top: 4px; display: none; }
    button { background: #2563eb; color: white; border: none; padding: 10px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; width: 100%; margin-top: 10px; }
    .success-alert { background: #064e3b; border: 1px solid #10b981; padding: 10px; border-radius: 6px; margin-top: 15px; display: none; }
  </style>
</head>
<body>
  <div class="card">
    <h3>🛡️ jQuery Form Validation</h3>
    
    <form id="valForm" novalidate>
      <div class="form-group">
        <label>ឈ្មោះពេញ៖</label>
        <input type="text" id="fullName" placeholder="បញ្ចូលឈ្មោះ..." />
        <div class="error-msg" id="nameError">សូមបញ្ចូលឈ្មោះពេញរបស់អ្នក!</div>
      </div>

      <div class="form-group">
        <label>លេខទូរស័ព្ទ៖</label>
        <input type="text" id="phone" placeholder="012345678" />
        <div class="error-msg" id="phoneError">សូមបញ្ចូលលេខទូរស័ព្ទយ៉ាងហោចណាស់ ៩ ខ្ទង់!</div>
      </div>

      <button type="submit">ចុះឈ្មោះ</button>
    </form>

    <div class="success-alert" id="successBox">
      🎉 Form Validation ត្រឹមត្រូវ 100%! បានផ្ញើទិន្នន័យ។
    </div>
  </div>

  <script>
    $(function() {
      $('#valForm').submit(function(e) {
        e.preventDefault();
        let isValid = true;

        // Reset previous errors
        $('.error-msg').hide();
        $('input').removeClass('error-border');
        $('#successBox').hide();

        // 1. Validate Full Name
        const nameVal = $('#fullName').val().trim();
        if (nameVal === '') {
          $('#fullName').addClass('error-border');
          $('#nameError').fadeIn();
          isValid = false;
        }

        // 2. Validate Phone Length
        const phoneVal = $('#phone').val().trim();
        if (phoneVal.length < 9) {
          $('#phone').addClass('error-border');
          $('#phoneError').fadeIn();
          isValid = false;
        }

        if (isValid) {
          $('#successBox').slideDown();
        }
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Enhancing User Experience',
        km: 'ការបង្កើន បទពិសោធន៍ UX'
      },
      description: {
        en: 'Highlighting invalid fields immediately in red with clear Khmer error prompts prevents user frustration before network payload roundtrips.',
        km: 'ការបង្ហាញប្រអប់ Error ពណ៌ក្រហមភ្លាមៗពេល User បំពេញខុស ជួយសន្សំសំចៃពេល និងធ្វើឱ្យប្រព័ន្ធមានភាពច្បាស់លាស់។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write jQuery code to check if an input field value string is empty after removing whitespace.',
        km: 'សរសេរកូដ jQuery ដើម្បីពិនិត្យមើលថា តើ Input ទទេ ឬទេ បន្ទាប់ពីលុប Whitespace? '
      },
      solution: '$("#input").val().trim() === ""'
    },
    quizQuestions: [
      {
        id: 'jq-q23',
        question: {
          en: 'Why is client-side form validation using jQuery recommended alongside backend validation?',
          km: 'ហេតុអ្វីបានជាការធ្វើ Client-side Validation ត្រូវបានណែនាំឱ្យប្រើប្រាស់ទន្ទឹមនឹង Backend Validation?'
        },
        options: [
          { id: '1', text: { en: 'It gives instant UI feedback to users, reducing unnecessary server requests', km: 'វាផ្តល់ព័ត៌មាន Feedback ភ្លាមៗទៅ User និងកាត់បន្ថយ Request មិនចាំបាច់ទៅ Server' }, isCorrect: true },
          { id: '2', text: { en: 'It guarantees 100% protection against hacker SQL injections', km: 'វាធានាសុវត្ថិភាព 100% ទប់ស្កាត់ SQL Injections' }, isCorrect: false },
          { id: '3', text: { en: 'It replaces the need for database tables', km: 'វាជំនួសការប្រើប្រាស់ Database' }, isCorrect: false }
        ],
        explanation: {
          en: 'Client-side validation provides immediate user feedback. However, backend validation is still mandatory for security.',
          km: 'Client-side Validation ផ្តល់ UI Feedback ភ្លាមៗ។ ប៉ុន្តែ Backend Validation នៅតែជាតម្រូវការចាំបាច់សម្រាប់ សុវត្ថិភាព។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 8: When (Not) to Use jQuery Today
  // ==========================================
  {
    id: 'jq-l24',
    slug: 'jquery-vs-vanilla-modern-js',
    moduleNumber: 8,
    lessonNumberInModule: 1,
    title: {
      en: '8.1 Modern Native JavaScript DOM APIs vs. jQuery',
      km: '8.1 ការប្តូរពី jQuery ទៅជា Vanilla JavaScript ទំនើប'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Modern browsers now natively support query selection (`querySelector`), class list toggling (`classList.toggle`), AJAX (`fetch`), and smooth CSS animations natively, replacing most core features jQuery originally solved.',
      km: 'Browsers ទំនើបៗឥឡូវនេះគាំទ្រ Native Features ដូចជា `querySelector`, `classList.toggle()`, `fetch()` និង CSS Transitions ស្រាប់ ដូច្នេះមុខងារភាគច្រើនដែល jQuery ធ្លាប់ដោះស្រាយ ឥឡូវមានក្នុង Vanilla JS រួចរាល់ហើយ។'
    },
    tutorial: {
      en: '- jQuery: `$("#box").addClass("active");` \n  Vanilla JS: `document.querySelector("#box").classList.add("active");` \n\n- jQuery: `$.get(url, fn);` \n  Vanilla JS: `fetch(url).then(res => res.json()).then(fn);`',
      km: '- jQuery: `$("#box").addClass("active");` \n  Vanilla JS: `document.querySelector("#box").classList.add("active");` \n\n- jQuery: `$.get(url, fn);` \n  Vanilla JS: `fetch(url).then(res => res.json()).then(fn);` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 20px; }
    .box { padding: 16px; background: #1e293b; border: 1px solid #334155; border-radius: 8px; margin-top: 10px; }
    .highlight { background: #064e3b; border-color: #10b981; }
    button { background: #3b82f6; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: bold; }
  </style>
</head>
<body>
  <h3>⚡ Pure Vanilla JS Modern Alternatives</h3>

  <button id="vanillaBtn">Toggle Class via Pure Vanilla JS</button>
  <div class="box" id="targetBox">ប្រអប់នេះប្រើប្រាស់ Vanilla JS (0kb Library)</div>

  <script>
    // 100% Pure Vanilla JS (No jQuery loaded!)
    document.addEventListener('DOMContentLoaded', () => {
      const btn = document.querySelector('#vanillaBtn');
      const box = document.querySelector('#targetBox');

      btn.addEventListener('click', () => {
        box.classList.toggle('highlight');
      });
    });
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'You Might Not Need jQuery',
        km: 'អ្នកប្រហែលជាមិនចាំបាច់ប្រើ jQuery ទៀតទេ'
      },
      description: {
        en: 'The website "You Might Not Need jQuery" documents clean modern Vanilla JS equivalents for every single jQuery selector and utility function.',
        km: 'គេហទំព័រ "You Might Not Need jQuery" បង្ហាញពីកូដ Vanilla JS ទំនើបៗសម្រាប់ជំនួសគ្រប់ Method របស់ jQuery។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What is the modern native Vanilla JS equivalent for $("p").hide()?',
        km: 'តើកូដ Vanilla JS ទំនើបសមមូលនឹង $("p").hide() គឺជាអ្វី?'
      },
      solution: 'document.querySelectorAll("p").forEach(el => el.style.display = "none");'
    },
    quizQuestions: [
      {
        id: 'jq-q24',
        question: {
          en: 'What is the native JavaScript DOM API equivalent for `$(".btn")` selector in modern browsers?',
          km: 'តើ Native JavaScript DOM API មួយណាដែលស្មើនឹង Selector `$(".btn")` របស់ jQuery?'
        },
        options: [
          { id: '1', text: { en: 'document.querySelectorAll(".btn")', km: 'document.querySelectorAll(".btn")' }, isCorrect: true },
          { id: '2', text: { en: 'document.getElement(".btn")', km: 'document.getElement(".btn")' }, isCorrect: false },
          { id: '3', text: { en: 'window.find(".btn")', km: 'window.find(".btn")' }, isCorrect: false }
        ],
        explanation: {
          en: '`querySelectorAll` accepts standard CSS selector strings just like jQuery `$()`.',
          km: '`querySelectorAll` ទទួល CSS selector strings ដូចគ្នាទៅនឹង jQuery `$()`។'
        }
      }
    ]
  },

  {
    id: 'jq-l25',
    slug: 'jquery-in-legacy-wordpress-jobs',
    moduleNumber: 8,
    lessonNumberInModule: 2,
    title: {
      en: '8.2 Where jQuery Still Matters: Legacy Codebases & WordPress',
      km: '8.2 កន្លែងដែល jQuery នៅតែមានសារៈសំខាន់៖ Legacy Code & WordPress'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Despite component frameworks dominating new builds, jQuery remains heavily used across existing WordPress plugins, WooCommerce themes, legacy enterprise portals, and jQuery UI widgets globally.',
      km: 'ទោះបីជា Component Frameworks (React, Vue) កំពុងមានប្រជាប្រិយភាពខ្លាំងក៏ដោយ ប៉ុន្តែ jQuery នៅតែត្រូវបានប្រើប្រាស់យ៉ាងច្រើនលើ WordPress Plugins, WooCommerce themes, និង Legacy Enterprise Systems រាប់លានជុំវិញពិភពលោក។'
    },
    tutorial: {
      en: 'WordPress jQuery Conflict Avoidance:\nWordPress loads jQuery in `noConflict()` mode by default. Inside WP scripts, wrap code in an IIFE passing `$`:\n`(function($) {` \n`  $("#myWpWidget").hide();` \n`})(jQuery);`',
      km: 'ការសរសេរ jQuery ក្នុង WordPress (noConflict Mode)៖\nWordPress បើក jQuery ក្នុង `noConflict()` mode។ ដើម្បីប្រើប្រាស់សញ្ញា `$` អ្នកត្រូវសរសេរក្នុង IIFE៖\n`(function($) {` \n`  $("#myWpWidget").hide();` \n`})(jQuery);` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: white; padding: 20px; }
    .wp-card { background: #0f172a; border: 1px solid #0284c7; padding: 20px; border-radius: 12px; max-width: 450px; }
    .badge { background: #0284c7; color: white; font-size: 11px; padding: 2px 8px; border-radius: 99px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="wp-card">
    <h3>🌐 WordPress noConflict() Safety Wrapper <span class="badge">WORDPRESS</span></h3>
    <p id="wpText">កំពុងរង់ចាំកូដ IIFE ដំណើរការ...</p>
  </div>

  <script>
    // Simulate WordPress jQuery noConflict mode
    jQuery.noConflict();

    // Standard WordPress jQuery closure IIFE wrapper
    (function($) {
      $(function() {
        $('#wpText').html('✅ <strong>jQuery is safe inside WordPress!</strong> សញ្ញា $ ដំណើរការដោយសុវត្ថិភាពដោយមិនជាន់ឈ្មោះជាមួយ Library ផ្សេងៗឡើយ។');
      });
    })(jQuery);
  </script>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'WordPress Plugin Ecosystem',
        km: 'ប្រព័ន្ធ WordPress Plugin'
      },
      description: {
        en: 'Over 40% of all websites run on WordPress. Knowing jQuery enables frontend developers to immediately take on lucrative freelance WordPress maintenance and custom plugin customization contracts.',
        km: 'ជាង 40% នៃ Website លើពិភពលោកដើរលើ WordPress។ ការចេះ jQuery ជួយឱ្យអ្នកអាចទទួលការងារ Freelance តឡើងវិញនូវ WordPress Plugins និង Themes បានយ៉ាងងាយស្រួល។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why do developers wrap jQuery code in an IIFE (function($){})(jQuery) in WordPress?',
        km: 'ហេតុអ្វីបានជា Developer សរសេរកូដ jQuery ក្នុង IIFE (function($){})(jQuery) ក្នុង WordPress?'
      },
      solution: 'To safely alias jQuery to the $ symbol without conflicting with other libraries like Prototype JS.'
    },
    quizQuestions: [
      {
        id: 'jq-q25',
        question: {
          en: 'In WordPress development, why is `jQuery.noConflict()` enabled by default?',
          km: 'ក្នុងការអភិវឌ្ឍ WordPress, ហេតុអ្វីបានជា `jQuery.noConflict()` ត្រូវគេបើកដំណើរការជា Default?'
        },
        options: [
          { id: '1', text: { en: 'To prevent global variable name collision over the $ symbol with other scripts like Prototype', km: 'ដើម្បីការពារកុំឱ្យសញ្ញា $ ជាន់គ្នាជាមួយ JavaScript Libraries ផ្សេងទៀត' }, isCorrect: true },
          { id: '2', text: { en: 'To disable AJAX requests on mobile devices', km: 'ដើម្បីបិទ AJAX លើ Mobile' }, isCorrect: false },
          { id: '3', text: { en: 'To enforce TypeScript strict mode', km: 'ដើម្បីបង្ខំប្រើ TypeScript' }, isCorrect: false }
        ],
        explanation: {
          en: '`noConflict()` releases jQuery\'s control over the `$` global variable so other JavaScript libraries can use it safely.',
          km: '`noConflict()` ដោះលែងសញ្ញា `$` ឱ្យ Library ផ្សេងទៀតអាចប្រើប្រាស់បានដោយមិនទាស់គ្នាក្នុង WordPress។'
        }
      }
    ]
  },

  {
    id: 'jq-l26',
    slug: 'jquery-choosing-stack-decision',
    moduleNumber: 8,
    lessonNumberInModule: 3,
    title: {
      en: '8.3 Honest Guidance: Choosing jQuery vs. Vanilla JS vs. Modern Frameworks',
      km: '8.3 ការជ្រើសរើស៖ ពេលណាគួរប្រើ jQuery, Vanilla JS ឬ Frameworks?'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Choose the right tool for the job: Use jQuery when maintaining legacy CMS sites or adding quick scripts to simple HTML. Use Vanilla JS for lightweight modern pages. Use React/Vue/Svelte for complex stateful web applications.',
      km: 'ការជ្រើសរើសឧបករណ៍ត្រឹមត្រូវតាមការងារ៖ ប្រើប្រាស់ jQuery ពេលថែទាំ Legacy Code ឬកែប្រែ WordPress។ ប្រើ Vanilla JS សម្រាប់ Page តូចៗដែលចង់បាន ល្បឿនលឿន (0kb library)។ ប្រើ React/Vue/Svelte សម្រាប់ Web Application ធំៗដែលមាន State ស៊ុគស្មាញ។'
    },
    tutorial: {
      en: 'Decision Matrix:\n- Legacy site/WordPress Theme: ✅ jQuery\n- Simple landing page/widget: ✅ Vanilla JS\n- Large interactive Web App/Dashboard: ✅ React / Vue / Next.js',
      km: 'តារាងសម្រេចចិត្ត៖\n- គេហទំព័រចាស់ / WordPress Theme: ✅ jQuery\n- Landing Page តូចៗ / Widget: ✅ Vanilla JS\n- Web Application ធំៗ / Dashboard: ✅ React / Vue / Next.js'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; padding: 20px; }
    .matrix { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-top: 15px; }
    .col { background: #1e293b; border: 1px solid #334155; padding: 16px; border-radius: 8px; }
    .col-title { font-weight: bold; font-size: 16px; color: #38bdf8; margin-bottom: 8px; }
    ul { padding-left: 18px; margin: 0; font-size: 13px; line-height: 1.6; }
  </style>
</head>
<body>
  <h3>🎯 Frontend Tech Stack Decision Guide</h3>

  <div class="matrix">
    <div class="col">
      <div class="col-title">1. jQuery</div>
      <ul>
        <li>WordPress Themes & Plugins</li>
        <li> Legacy Codebases </li>
        <li> Quick DOM Enhancements</li>
      </ul>
    </div>

    <div class="col">
      <div class="col-title">2. Vanilla JS</div>
      <ul>
        <li>Modern Static Pages</li>
        <li>High-performance 0kb builds</li>
        <li>Micro-widgets & Custom Web Components</li>
      </ul>
    </div>

    <div class="col">
      <div class="col-title">3. React / Vue</div>
      <ul>
        <li>Complex Single Page Apps</li>
        <li>Rich Data Dashboards</li>
        <li>Large Team Collaboration</li>
      </ul>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Architectural Pragmatism',
        km: 'ការសម្រេចចិត្តប្រកបដោយភាពប្រាកដនិយម'
      },
      description: {
        en: 'Senior developers choose technologies based on project constraints and team context, not internet hype.',
        km: 'Senior Developers ជ្រើសរើសបច្ចេកវិទ្យាផ្អែកលើតម្រូវការជាក់ស្តែង និងកញ្ចប់ថវិការបស់គម្រោង ជាជាងការរត់តាម Hype។'
      }
    },
    practiceExercise: {
      question: {
        en: 'When starting a brand new highly reactive dashboard app today, should you default to jQuery or React/Vue?',
        km: 'ពេលចាប់ផ្តើមបង្កើត Dashboard App ថ្មីស្រឡាង គួរជ្រើសរើស jQuery ឬ React/Vue?'
      },
      solution: 'React/Vue, because component state management and virtual DOM are better suited for large reactive dashboards.'
    },
    quizQuestions: [
      {
        id: 'jq-q26',
        question: {
          en: 'Which scenario is the most appropriate use case for using jQuery in modern development?',
          km: 'តើសេណារីយ៉ូមួយណាដែលសមស្របបំផុតសម្រាប់ការប្រើប្រាស់ jQuery ក្នុងការងារបច្ចុប្បន្ន?'
        },
        options: [
          { id: '1', text: { en: 'Maintaining existing WordPress themes or legacy enterprise portals', km: 'ការថែទាំ និងកែប្រែប្រព័ន្ធគេហទំព័រចាស់ៗ ឬ WordPress Themes' }, isCorrect: true },
          { id: '2', text: { en: 'Building a new high-frequency real-time stock trading system', km: 'ការបង្កើត Stock Trading System ថ្មី' }, isCorrect: false },
          { id: '3', text: { en: 'Mobile iOS/Android native app compilation', km: 'ការ Compile Mobile Native Apps' }, isCorrect: false }
        ],
        explanation: {
          en: 'jQuery shines when maintaining and updating millions of existing legacy web platforms efficiently.',
          km: 'jQuery មានប្រយោជន៍បំផុតក្នុងការថែទាំប្រព័ន្ធគេហទំព័រចាស់ៗ និង WordPress រាប់លាន។'
        }
      }
    ]
  }
];
