import { FrontendCourse, FrontendQuizQuestion } from '../types/frontendClass';
import { JQUERY_LESSONS_PART1 } from './jqueryLessonsHubPart1';
import { JQUERY_LESSONS_PART2 } from './jqueryLessonsHubPart2';

const JQUERY_CHEAT_SHEET = [
  {
    concept: 'Common Selectors ($)',
    code: `$("#header")         // ID Selector
$(".btn-primary")    // Class Selector
$("p")               // Tag Selector
$("input[name='email']") // Attribute Selector
$("li:first")        // Pseudo-class Selector`,
    explanation: {
      en: 'jQuery uses standard CSS selector syntax inside `$()` to target elements in the DOM tree cleanly.',
      km: 'jQuery ប្រើប្រាស់ Syntax របស់ CSS Selector នៅក្នុង `$()` ដើម្បីចាប់ Element ក្នុង DOM Tree។'
    }
  },
  {
    concept: 'Event Listeners (.on / .click)',
    code: `// Modern delegated event listener (works for dynamic elements)
$("#parent").on("click", ".child-btn", function() {
  $(this).toggleClass("active");
});

// Form change event listener
$("#langSelect").change(function() {
  console.log($(this).val());
});`,
    explanation: {
      en: 'Use `.on("event", "selector", fn)` for event delegation on dynamic elements added after page load.',
      km: 'ប្រើប្រាស់ `.on("event", "selector", fn)` សម្រាប់ Event Delegation លើ Elements ដែលបង្កើតបន្ថែមតាមក្រោយ។'
    }
  },
  {
    concept: 'Effects & Animations',
    code: `$("#box").hide(300);          // Hide with shrink
$("#box").fadeIn(500);        // Fade in opacity
$("#box").slideToggle(400);   // Expand/collapse height
$("#box").animate({ width: "300px", left: "50px" }, 600); // Custom animation`,
    explanation: {
      en: 'Built-in animation functions automatically handle cross-browser timing and CSS style changes.',
      km: 'Method Animations បង្កប់ស្រាប់ក្នុង jQuery គ្រប់គ្រងចលនា និង Timing ដោយស្វ័យប្រវត្តិ។'
    }
  },
  {
    concept: 'DOM Getters & Setters',
    code: `let val = $("#email").val();          // Read input value
$("#email").val("user@example.com");  // Set input value
let html = $("#card").html();         // Read inner HTML
$("#card").html("<b>Updated</b>");    // Set inner HTML
$("#card").addClass("active");        // Add CSS class`,
    explanation: {
      en: 'Passing no arguments to `.html()`, `.text()`, or `.val()` reads content; passing an argument writes content.',
      km: 'ការមិនដាក់ Argument ក្នុង Method គឺសម្រាប់អាន (Get) ហើយបើដាក់ Argument គឺសម្រាប់សរសេរ (Set)។'
    }
  },
  {
    concept: 'AJAX Requests',
    code: `// Shorthand GET Request
$.get("https://api.example.com/data", function(data) {
  $("#result").html(data.title);
});

// Full $.ajax Request
$.ajax({
  url: "https://api.example.com/users",
  type: "POST",
  data: { name: "Sok" },
  success: function(res) { console.log(res); }
});`,
    explanation: {
      en: '`$.get()` and `$.post()` provide shorthand syntax over the full configurable `$.ajax()` API.',
      km: '`$.get()` និង `$.post()` គឺជា Shorthand Syntax សម្រាប់ផ្ញើ AJAX Request យ៉ាងរហ័ស។'
    }
  },
  {
    concept: 'Common Mistakes & Best Practices',
    code: `// ❌ Common Mistake 1: Running jQuery before DOM is ready!
$("#btn").click(fn); // Fails if #btn isn't rendered yet!

// ✅ Correct Way: Wrap in $(function() { ... })
$(function() {
  $("#btn").click(fn);
});

// ❌ Common Mistake 2: Direct click on dynamic items
$(".item").click(fn); // Ignores items added later!

// ✅ Correct Way: Use Event Delegation on static parent
$("#list").on("click", ".item", fn);`,
    explanation: {
      en: 'Always wrap code in `$(function(){})` and use delegated `.on()` listeners for dynamically inserted items.',
      km: 'ត្រូវសរសេរកូដក្នុង `$(function(){})` ជានិច្ច និងប្រើប្រាស់ Event Delegation សម្រាប់ Element បង្កើតថ្មី។'
    }
  }
];

const JQUERY_QUIZ_QUESTIONS: FrontendQuizQuestion[] = [
  {
    id: 'quiz-jq-1',
    question: {
      en: 'What symbol is used as a shortcut for the jQuery object?',
      km: 'តើសញ្ញាអ្វីដែលត្រូវបានប្រើជាសញ្ញាកាត់ (Shortcut) សម្រាប់ jQuery Object?'
    },
    options: [
      { id: '1', text: { en: '$', km: '$' }, isCorrect: true },
      { id: '2', text: { en: '#', km: '#' }, isCorrect: false },
      { id: '3', text: { en: '@', km: '@' }, isCorrect: false }
    ],
    explanation: {
      en: 'The dollar sign `$` is the standard shortcut alias for the global `jQuery` object.',
      km: 'សញ្ញាដុល្លារ `$` គឺជា Shortcut Alias ផ្លូវការសម្រាប់ `jQuery` Object។'
    }
  },
  {
    id: 'quiz-jq-2',
    question: {
      en: 'What will the code `$("p.intro").hide();` do on a webpage?',
      km: 'តើកូដ `$("p.intro").hide();` នឹងធ្វើអ្វីខ្លះនៅលើ Webpage?'
    },
    options: [
      { id: '1', text: { en: 'Hide all <p> elements that have class "intro"', km: 'លាក់ <p> elements ទាំងអស់ដែលមាន Class "intro"' }, isCorrect: true },
      { id: '2', text: { en: 'Delete all <p> tags on the entire page', km: 'លាក់ <p> tags ទាំងអស់លើទំព័រ' }, isCorrect: false },
      { id: '3', text: { en: 'Hide element with ID "intro"', km: 'លាក់ Element មាន ID "intro"' }, isCorrect: false }
    ],
    explanation: {
      en: '`p.intro` selects `<p>` elements specifically possessing the class `.intro`.',
      km: '`p.intro` ចាប់យកតែ `<p>` Tag ណាដែលមាន Class ឈ្មោះ `intro` ប៉ុណ្ណោះ។'
    }
  },
  {
    id: 'quiz-jq-3',
    question: {
      en: 'Which method sets or gets the HTML content of a selected element?',
      km: 'តើ Method មួយណាសម្រាប់កំណត់ ឬអានអត្ថបទ HTML ខាងក្នុង Element?'
    },
    options: [
      { id: '1', text: { en: '.html()', km: '.html()' }, isCorrect: true },
      { id: '2', text: { en: '.getContent()', km: '.getContent()' }, isCorrect: false },
      { id: '3', text: { en: '.inner()', km: '.inner()' }, isCorrect: false }
    ],
    explanation: {
      en: '`.html()` gets the inner HTML string when empty, or replaces it when passed an HTML string parameter.',
      km: '`.html()` អាន HTML ពេលទទេ។ ហើយកំណត់ HTML ថ្មីពេលដាក់ Argument។'
    }
  },
  {
    id: 'quiz-jq-4',
    question: {
      en: 'Which jQuery method slides down an element smoothly into view?',
      km: 'តើ jQuery Method មួយណាសម្រាប់ទាញ Element រុញចុះមកក្រោមយ៉ាងរលូន?'
    },
    options: [
      { id: '1', text: { en: '.slideDown()', km: '.slideDown()' }, isCorrect: true },
      { id: '2', text: { en: '.slideIn()', km: '.slideIn()' }, isCorrect: false },
      { id: '3', text: { en: '.expand()', km: '.expand()' }, isCorrect: false }
    ],
    explanation: {
      en: '`.slideDown()` animates element height to smoothly reveal hidden content downwards.',
      km: '`.slideDown()` ធ្វើចលនាពង្រីកកម្ពស់ Element ចុះក្រោមយ៉ាងរលូន។'
    }
  },
  {
    id: 'quiz-jq-5',
    question: {
      en: 'How do you prevent a form from performing a full page reload when submitted in jQuery?',
      km: 'តើអ្នកអាចទប់ស្កាត់ Form មិនឱ្យ Reload Page ពេល Submit តាមរបៀបណា?'
    },
    options: [
      { id: '1', text: { en: 'Call e.preventDefault() inside the .submit() handler', km: 'ហៅ e.preventDefault() ក្នុង .submit() handler' }, isCorrect: true },
      { id: '2', text: { en: 'Set form action="none"', km: 'កំណត់ action="none"' }, isCorrect: false },
      { id: '3', text: { en: 'Return true from click listener', km: 'Return true ចេញពី Click listener' }, isCorrect: false }
    ],
    explanation: {
      en: '`e.preventDefault()` cancels default browser actions like form HTTP POST submission reloads.',
      km: '`e.preventDefault()` បោះបង់ Default Action របស់ Browser ដូចជាការ Refresh Page ពេល Submit Form។'
    }
  },
  {
    id: 'quiz-jq-6',
    question: {
      en: 'Which method is used for event delegation in jQuery so newly created items respond to clicks?',
      km: 'តើ Method មួយណាប្រើប្រាស់សម្រាប់ Event Delegation ដើម្បីឱ្យ Element បង្កើតថ្មីដើរជាមួយ Click?'
    },
    options: [
      { id: '1', text: { en: '$("#parent").on("click", ".child", function(){})', km: '$("#parent").on("click", ".child", function(){})' }, isCorrect: true },
      { id: '2', text: { en: '$(".child").click(function(){})', km: '$(".child").click(function(){})' }, isCorrect: false },
      { id: '3', text: { en: '$.delegateClick(".child")', km: '$.delegateClick(".child")' }, isCorrect: false }
    ],
    explanation: {
      en: 'Event delegation via `$(parent).on(event, childSelector, handler)` routes events through static container parents.',
      km: 'Event delegation តាមរយៈ `$(parent).on(event, childSelector, handler)` ចាប់ Event តាមរយៈ Parent។'
    }
  },
  {
    id: 'quiz-jq-7',
    question: {
      en: 'Which shorthand AJAX method performs a GET request in jQuery?',
      km: 'តើ Shorthand AJAX Method មួយណាសម្រាប់ផ្ញើ GET Request ក្នុង jQuery?'
    },
    options: [
      { id: '1', text: { en: '$.get()', km: '$.get()' }, isCorrect: true },
      { id: '2', text: { en: '$.fetch()', km: '$.fetch()' }, isCorrect: false },
      { id: '3', text: { en: '$.request()', km: '$.request()' }, isCorrect: false }
    ],
    explanation: {
      en: '`$.get(url, callback)` is the official shorthand function for simple GET requests.',
      km: '`$.get()` គឺជា Shorthand Method ផ្លូវការសម្រាប់ផ្ញើ GET Request។'
    }
  },
  {
    id: 'quiz-jq-8',
    question: {
      en: 'Where does jQuery still see primary usage in web development today?',
      km: 'តើកន្លែងណាដែល jQuery នៅតែមានការប្រើប្រាស់ច្រើនជាងគេនាពេលបច្ចុប្បន្ន?'
    },
    options: [
      { id: '1', text: { en: 'WordPress themes, WooCommerce plugins, and legacy enterprise web portals', km: 'WordPress themes, WooCommerce plugins, និងប្រព័ន្ធគេហទំព័រចាស់ៗ' }, isCorrect: true },
      { id: '2', text: { en: 'New React 19 server component builds', km: 'React 19 Server Components ថ្មីៗ' }, isCorrect: false },
      { id: '3', text: { en: 'Native iOS Swift app backends', km: 'Native iOS Swift apps' }, isCorrect: false }
    ],
    explanation: {
      en: 'WordPress powers over 40% of web servers, where jQuery remains the default JavaScript DOM utility library.',
      km: 'WordPress ដើរលើ Web ជាង 40% លើពិភពលោក ដែលប្រើប្រាស់ jQuery ជាប្រព័ន្ធ Default។'
    }
  }
];

const ALL_JQUERY_HUB_LESSONS = [
  ...JQUERY_LESSONS_PART1,
  ...JQUERY_LESSONS_PART2
];

export const JQUERY_COURSE_DATA: FrontendCourse = {
  id: 'jquery',
  title: {
    en: 'jQuery Course',
    km: 'វគ្គសិក្សា jQuery'
  },
  iconName: 'jquery',
  categoryId: 'frameworks',
  difficulty: 'Beginner',
  shortDescription: {
    en: 'Master jQuery DOM selectors, event handling, effects, AJAX requests, and form validation for maintaining legacy web applications and WordPress themes.',
    km: 'jQuery គឺជា JavaScript Library ចាស់ ប៉ុន្តែពេញនិយម ដែលធ្វើឲ្យការ Select, Manipulate DOM, និង ធ្វើ Animation កាន់តែងាយស្រួល ជាងការសរសេរ JavaScript ធម្មតា។'
  },
  summary: {
    en: 'Complete 4-hour course covering jQuery selectors, event handling, animations, DOM manipulation, AJAX, and form validation.\n\nNote: Website ថ្មីៗច្រើនប្រើ React/Vue ជំនួស jQuery ហើយ ប៉ុន្តែគេហទំព័រចាស់ៗនិង Project ជាច្រើននៅតែប្រើ jQuery រហូតមកដល់សព្វថ្ងៃ។ ចេះ jQuery នៅតែមានប្រយោជន៍សម្រាប់ការងារថែទាំ Code ចាស់។\n\nតម្រូវការជាមុន៖ JavaScript Course (ណែនាំ) / Prerequisite: JavaScript Course (recommended)',
    km: 'jQuery គឺជា JavaScript Library ដ៏ពេញនិយមបំផុតមួយក្នុងប្រវត្តិសាស្ត្រ Web Development។\n\nកំណត់ចំណាំ៖ Website ថ្មីៗច្រើនប្រើ React/Vue ជំនួស jQuery ហើយ ប៉ុន្តែគេហទំព័រចាស់ៗនិង Project ជាច្រើននៅតែប្រើ jQuery រហូតមកដល់សព្វថ្ងៃ។ ចេះ jQuery នៅតែមានប្រយោជន៍សម្រាប់ការងារថែទាំ Code ចាស់។\n\nតម្រូវការជាមុន៖ JavaScript Course (ណែនាំ) / Prerequisite: JavaScript Course (recommended)'
  },
  estimatedHours: 4,
  lessonCount: ALL_JQUERY_HUB_LESSONS.length,
  cheatSheet: JQUERY_CHEAT_SHEET,
  quiz: JQUERY_QUIZ_QUESTIONS,
  capstoneProject: {
    title: {
      en: 'Guided Capstone: Interactive jQuery Image Gallery',
      km: 'គម្រោង Capstone៖ Gallery រូបភាពអន្តរកម្មជាមួយ jQuery'
    },
    description: {
      en: 'Build a full interactive image gallery widget using jQuery selectors, click event listeners, `.fadeIn()` / `.slideDown()` animations, next/prev navigation cycling, and a live search/filter input that dynamically hides non-matching image thumbnails in real-time.',
      km: 'បង្កើត Interactive Image Gallery Widget ពេញលេញដោយប្រើប្រាស់ jQuery selectors, Click Event Listeners, ចលនា `.fadeIn()` / `.slideDown()`, ប៊ូតុង Next/Prev ប្តូររូបភាព និងប្រអប់ Search/Filter ដែលលាក់រូបភាពមិនត្រូវតាមពាក្យគន្លឹះដោយស្វ័យប្រវត្តិ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: white; padding: 20px; }
    .gallery-container { max-width: 600px; margin: 0 auto; background: #0f172a; border: 1px solid #334155; padding: 20px; border-radius: 12px; }
    .search-box { margin-bottom: 15px; }
    input[type="text"] { width: 100%; padding: 10px; background: #1e293b; border: 1px solid #475569; color: white; border-radius: 6px; box-sizing: border-box; }
    
    .main-stage { position: relative; width: 100%; height: 260px; background: #1e293b; border-radius: 8px; overflow: hidden; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; }
    .main-img { max-width: 100%; max-height: 100%; object-fit: cover; border-radius: 6px; }
    .caption { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.7); padding: 8px 12px; font-size: 13px; color: #38bdf8; text-align: center; }
    
    .controls { display: flex; justify-content: space-between; margin-bottom: 15px; }
    button { background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; }
    
    .thumbs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
    .thumb-item { height: 70px; border-radius: 6px; cursor: pointer; overflow: hidden; border: 2px solid transparent; opacity: 0.7; transition: 0.2s; }
    .thumb-item.active { border-color: #38bdf8; opacity: 1; }
    .thumb-item img { width: 100%; height: 100%; object-fit: cover; }
  </style>
</head>
<body>
  <div class="gallery-container">
    <h3 style="margin-top:0; color:#38bdf8;">🖼️ jQuery Interactive Image Gallery</h3>

    <!-- Filter Search Input -->
    <div class="search-box">
      <input type="text" id="filterInput" placeholder="🔍 ស្វែងរករូបភាព (ឧ. Nature, Tech, City)..." />
    </div>

    <!-- Main Image Display Stage -->
    <div class="main-stage">
      <img id="mainDisplay" class="main-img" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Nature" />
      <div class="caption" id="mainCaption">🌄 Nature — រូបភាពធម្មជាតិ</div>
    </div>

    <!-- Navigation Next/Prev Controls -->
    <div class="controls">
      <button id="btnPrev">◄ មុន (Prev)</button>
      <button id="btnNext">បន្ទាប់ (Next) ►</button>
    </div>

    <!-- Thumbnail Strip -->
    <div class="thumbs" id="thumbStrip">
      <div class="thumb-item active" data-title="🌄 Nature — រូបភាពធម្មជាតិ" data-tag="nature" data-src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80" alt="Nature" />
      </div>

      <div class="thumb-item" data-title="💻 Tech Code — បច្ចេកវិទ្យា" data-tag="tech" data-src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=200&q=80" alt="Tech" />
      </div>

      <div class="thumb-item" data-title="🏙️ City Lights — ក្រុងរាត្រី" data-tag="city" data-src="https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?auto=format&fit=crop&w=600&q=80">
        <img src="https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?auto=format&fit=crop&w=200&q=80" alt="City" />
      </div>

      <div class="thumb-item" data-title="🌊 Ocean Waves — រលកសមុទ្រ" data-tag="ocean" data-src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=80" alt="Ocean" />
      </div>
    </div>
  </div>

  <script>
    $(function() {
      // Function to change main display image smoothly
      function updateStage($thumb) {
        $('.thumb-item').removeClass('active');
        $thumb.addClass('active');

        const src = $thumb.data('src');
        const title = $thumb.data('title');

        // Smooth fade out and fade in animation
        $('#mainDisplay').fadeOut(200, function() {
          $(this).attr('src', src).fadeIn(200);
        });
        $('#mainCaption').text(title);
      }

      // 1. Click Thumbnail to Change Main Image
      $('#thumbStrip').on('click', '.thumb-item', function() {
        updateStage($(this));
      });

      // 2. Next Button Cycle
      $('#btnNext').click(function() {
        let $next = $('.thumb-item.active').next('.thumb-item:visible');
        if ($next.length === 0) {
          $next = $('.thumb-item:visible').first();
        }
        if ($next.length > 0) updateStage($next);
      });

      // 3. Prev Button Cycle
      $('#btnPrev').click(function() {
        let $prev = $('.thumb-item.active').prev('.thumb-item:visible');
        if ($prev.length === 0) {
          $prev = $('.thumb-item:visible').last();
        }
        if ($prev.length > 0) updateStage($prev);
      });

      // 4. Live Filter / Search Input
      $('#filterInput').on('keyup', function() {
        const query = $(this).val().toLowerCase().trim();

        $('.thumb-item').each(function() {
          const tag = $(this).data('tag').toLowerCase();
          const title = $(this).data('title').toLowerCase();

          if (tag.includes(query) || title.includes(query)) {
            $(this).fadeIn(200);
          } else {
            $(this).fadeOut(200);
          }
        });
      });
    });
  </script>
</body>
</html>`
    }
  },
  lessons: ALL_JQUERY_HUB_LESSONS
};
