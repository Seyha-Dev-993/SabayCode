import { FrontendLesson } from '../types/frontendClass';

export const BOOTSTRAP_LESSONS_PART2: FrontendLesson[] = [
  // MODULE 6 — Cards
  {
    id: 'bs-m6-l1',
    slug: 'bootstrap-basic-card-structure',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: {
      en: '6.1 Basic Card Component (`card`, `card-body`, `card-title`)',
      km: '៦.១ ទម្រង់គ្រឹះនៃសមាសភាគ Card (`card`, `card-body`, `card-title`)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Cards are flexible content containers in Bootstrap. A standard card uses `.card`, containing an image (`.card-img-top`), body padding (`.card-body`), title (`.card-title`), and text (`.card-text`).',
      km: 'Cards គឺជាប្រអប់ក្ដោបខ្លឹមសារដ៏បត់បែនក្នុង Bootstrap។ Card ស្តង់ដារមាន Class `.card` ខាងក្នុងមានរូបភាព (`.card-img-top`), `.card-body`, `.card-title`, និង `.card-text`។'
    },
    tutorial: {
      en: 'Combine `.card` with shadow utilities like `.shadow-sm` or `.shadow-lg` and border modifiers like `.border-0` to craft modern elevated card surfaces.',
      km: 'បញ្ចូល `.card` ជាមួយ Shadow utilities ដូចជា `.shadow-sm` ឬ `.shadow-lg` និង `.border-0` ដើមបីទទួលបានប្រអប់សម័យថ្មីដែលមានជម្រៅស្រស់ស្អាត។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4 font-sans">
  <div class="container max-w-sm mx-auto">
    
    <!-- Bootstrap Standard Card -->
    <div class="card shadow border-0 rounded-4 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600" class="card-img-top" alt="Code Preview">
      <div class="card-body p-4">
        <span class="badge bg-primary-subtle text-primary fw-bold mb-2">Frontend Course</span>
        <h5 class="card-title fw-bold text-dark">Bootstrap 5 Fundamentals</h5>
        <p class="card-text text-secondary fs-6 mb-4">
          រៀនពីរបៀបប្រើប្រាស់ Bootstrap Components ដើមបីសាងសង់គេហទំព័រលឿនរហ័ស។
        </p>
        <button class="btn btn-primary w-100 font-bold rounded-3">ចូលរៀនឥឡូវនេះ</button>
      </div>
    </div>

  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Product & Course Catalogs', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'E-learning platforms, online stores, and news media portals rely heavily on Card structures to display uniform content blocks.',
        km: 'គេហទំព័ររៀនអនឡាញ និងហាងទំនិញ e-Commerce ប្រើប្រាស់ Cards សម្រាប់រៀបចំប្លុកព័ត៌មានទំនិញ និងមេរៀន។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which class formats card headings with standardized size and font weight?',
        km: 'តើ Class មួយណាសម្រាប់កំណត់ស្ទីលលើចំណងជើង Card ឲ្យមានទំហំ និងកម្រាស់ស្ដង់ដារ?'
      },
      hints: [
        { en: 'Class format: card-title', km: 'ទម្រង់ class៖ card-title' }
      ],
      solution: 'card-title'
    },
    quizQuestions: [
      {
        id: 'q-bs-6-1',
        question: {
          en: 'Which class wraps inner text content with padding inside a Bootstrap card?',
          km: 'តើ Class មួយណាសម្រាប់ក្ដោបខ្លឹមសារអត្ថបទដែលមាន Padding ខាងក្នុង Card?'
        },
        options: [
          { id: '1', text: { en: '.card-body', km: '.card-body' }, isCorrect: true },
          { id: '2', text: { en: '.card-content', km: '.card-content' }, isCorrect: false },
          { id: '3', text: { en: '.card-inner', km: '.card-inner' }, isCorrect: false }
        ],
        explanation: {
          en: '`.card-body` applies standard inner padding (1rem) inside card containers.',
          km: '`.card-body` ផ្តល់ Padding ស្តង់ដារខាងក្នុងប្រអប់ Card។'
        }
      }
    ]
  },
  {
    id: 'bs-m6-l2',
    slug: 'bootstrap-card-grids',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: {
      en: '6.2 Card Grids & Groups (`row-cols-*`, `card-group`)',
      km: '៦.២ ការរៀបចំ Card Grids និង Card Groups (`row-cols-*`)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Bootstrap provides shortcuts for card grids using `row-cols-*` utility classes on parent `.row` containers (e.g. `.row-cols-1 .row-cols-md-3`), or `.card-group` for connected cards.',
      km: 'អ្នកអាចរៀបចំ Card Grids បានយ៉ាងលឿនដោយប្រើ `row-cols-*` លើ `.row` (ដូចជា `.row-cols-1 .row-cols-md-3`) ឬប្រើ `.card-group` សម្រាប់កាតជាប់ៗគ្នា។'
    },
    tutorial: {
      en: 'Combine `.row .row-cols-1 .row-cols-md-2 .row-cols-lg-3 .g-4` with `.col` elements. Each `.col` automatically holds a `.card` that stretches to equal height (`.h-100`).',
      km: 'ប្រើ `.h-100` លើ `.card` ដើមបីឲ្យគ្រប់ Card ទាំងអស់ក្នុង Row មានកម្ពស់ស្មើគ្នាស្វ័យប្រវត្តិ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4 font-sans">
  <div class="container py-3">
    <h3 class="fw-bold text-dark mb-4 text-center">Equal Height Card Grid</h3>

    <!-- Card Grid: 1 col on Mobile, 3 cols on Desktop -->
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100 shadow-sm border-0 rounded-4 p-3 bg-white">
          <div class="card-body">
            <h5 class="card-title fw-bold text-primary">01. Utility First</h5>
            <p class="card-text text-secondary">រៀបចំស្ទីលលឿនដោយមិនបាច់សរសេរ CSS បន្ថែម។</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm border-0 rounded-4 p-3 bg-white">
          <div class="card-body">
            <h5 class="card-title fw-bold text-success">02. Responsive Grid</h5>
            <p class="card-text text-secondary">ឆ្លើយតបយ៉ាងសមរម្យលើគ្រប់ទំហំអេក្រង់ទូរស័ព្ទ និងកុំព្យូទ័រ។</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100 shadow-sm border-0 rounded-4 p-3 bg-white">
          <div class="card-body">
            <h5 class="card-title fw-bold text-warning">03. Pre-built UI</h5>
            <p class="card-text text-secondary">មានសមាសភាគរចនាស្រាប់ៗសម្រាប់ប្រើប្រាស់ភ្លាមៗ។</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Feature Cards & Service Offerings', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Equal-height card grids (`h-100`) prevent awkward layout misalignments when card titles or text descriptions vary in length.',
        km: 'ការប្រើប្រាស់ `h-100` ការពារកុំឲ្យ Card ខ្លះខ្លី ខ្លះវែង ខុសប្រវែងគ្នានៅពេលខ្លឹមសារអត្ថបទមិនស្មើគ្នា។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which class forces cards inside a grid column to match the full 100% height of sibling columns?',
        km: 'តើ Class មួយណាបង្ខំឲ្យ Card ក្នុង Column មានកម្ពស់ពេញ 100% ស្មើគ្នា?'
      },
      hints: [
        { en: 'Use h-100 on the card container', km: 'ប្រើ h-100 លើ card container' }
      ],
      solution: 'h-100'
    },
    quizQuestions: [
      {
        id: 'q-bs-6-2',
        question: {
          en: 'Which utility class placed on a `.row` sets the number of equal-width columns for child elements?',
          km: 'តើ Class មួយណាដែលដាក់លើ `.row` ដើមបីកំណត់ចំនួន Columns ស្មើៗគ្នាសំរាប់កូនៗ?'
        },
        options: [
          { id: '1', text: { en: '.row-cols-*', km: '.row-cols-*' }, isCorrect: true },
          { id: '2', text: { en: '.grid-cols-*', km: '.grid-cols-*' }, isCorrect: false },
          { id: '3', text: { en: '.cols-count-*', km: '.cols-count-*' }, isCorrect: false }
        ],
        explanation: {
          en: '`.row-cols-*` sets column counts directly on the row wrapper.',
          km: '`.row-cols-*` កំណត់ចំនួនជួរឈរនៅលើ Row ដោយផ្ទាល់។'
        }
      }
    ]
  },
  {
    id: 'bs-m6-l3',
    slug: 'bootstrap-pricing-and-product-cards',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: {
      en: '6.3 Real-World Pricing & Product Cards (`card-header`, `card-footer`)',
      km: '៦.៣ ការបង្កើត Pricing & Product Cards ក្នុងការងារពិត'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Cards support explicit headers (`.card-header`) and footers (`.card-footer`). Combining headers, pricing figures, feature lists, and action buttons forms production-grade pricing cards.',
      km: 'Cards អាចបន្ថែម Header (`.card-header`) និង Footer (`.card-footer`)។ ការបូកបញ្ចូលគ្នាបង្កើតបានជា Pricing Cards អាជីវកម្មយ៉ាងស្រស់ស្អាត។'
    },
    tutorial: {
      en: 'Use `.card-header` for plan names, bold typography for dollar amounts, `<ul class="list-unstyled">` for feature checklists, and `.card-footer` or bottom buttons for call-to-actions.',
      km: 'ប្រើ `.card-header` សម្រាប់ឈ្មោះ Plan, បង្ហាញតម្លៃលេខធំៗ ប្រើប្រាស់ `<ul class="list-unstyled">` សម្រាប់ Feature List និងប៊ូតុងចុះឈ្មោះ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4 font-sans">
  <div class="container py-3 max-w-lg mx-auto">
    <h3 class="fw-bold text-center mb-4">Pricing Plan Card</h3>

    <!-- Featured Pricing Card -->
    <div class="card shadow-lg border-2 border-primary rounded-4 text-center overflow-hidden">
      <div class="card-header bg-primary text-white py-3">
        <span class="badge bg-warning text-dark font-bold uppercase mb-1">Most Popular</span>
        <h4 class="fw-bold mb-0">PRO Developer</h4>
      </div>
      <div class="card-body p-4">
        <h1 class="display-5 fw-bold text-dark">$29<span class="fs-6 text-muted">/ខែ</span></h1>
        <p class="text-secondary mb-4">សាកសមបំផុតសម្រាប់អ្នកអភិវឌ្ឍន៍គេហទំព័រអាជីព</p>

        <ul class="list-unstyled text-start space-y-2 mb-4 fs-6">
          <li class="mb-2">✅ ទទួលបានវគ្គសិក្សាទាំងអស់ (Full Access)</li>
          <li class="mb-2">✅ គម្រោង Capstone Real-World Projects</li>
          <li class="mb-2">✅ វិញ្ញាបនបត្របញ្ជាក់ការសិក្សា (Certificate)</li>
        </ul>

        <button class="btn btn-primary btn-lg w-100 font-bold rounded-3 shadow-sm">
          ជាវកញ្ចប់នេះឥឡូវនេះ
        </button>
      </div>
      <div class="card-footer bg-light text-muted py-2 fs-7">
        🔒 លុបចោលបានគ្រប់ពេល (Cancel Anytime)
      </div>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'SaaS Subscription Pricing Pages', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'SaaS marketing pages use card headers and footers to compare Free, Pro, and Enterprise tiers side-by-side.',
        km: 'គេហទំព័រ SaaS ប្រើប្រាស់ Pricing Cards ដើមបីប្រៀបធៀបកញ្ចប់សេវាកម្ម Free, Pro និង Enterprise ឲ្យអ្នកប្រើប្រាស់មើលយល់ងាយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which class provides styled header styling at the top of a Bootstrap card container?',
        km: 'តើ Class មួយណាសម្រាប់បង្កើតផ្នែក Header ខាងលើនៃ Bootstrap card?'
      },
      hints: [
        { en: 'Class format: card-header', km: 'ទម្រង់ class៖ card-header' }
      ],
      solution: 'card-header'
    },
    quizQuestions: [
      {
        id: 'q-bs-6-3',
        question: {
          en: 'Which class creates a bottom footer section inside a Bootstrap card?',
          km: 'តើ Class មួយណាសម្រាប់បង្កើតផ្នែក Footer ខាងក្រោមនៃ Card?'
        },
        options: [
          { id: '1', text: { en: '.card-footer', km: '.card-footer' }, isCorrect: true },
          { id: '2', text: { en: '.card-bottom', km: '.card-bottom' }, isCorrect: false },
          { id: '3', text: { en: '.card-base', km: '.card-base' }, isCorrect: false }
        ],
        explanation: {
          en: '`.card-footer` separates bottom meta info or actions with subtle border styling.',
          km: '`.card-footer` បំបែកផ្នែកខាងក្រោមនៃ Card យ៉ាងសមរម្យ។'
        }
      }
    ]
  },

  // MODULE 7 — Modals
  {
    id: 'bs-m7-l1',
    slug: 'bootstrap-modal-structure',
    moduleNumber: 7,
    lessonNumberInModule: 1,
    title: {
      en: '7.1 Modal Dialogs (`modal`, `modal-dialog`, `modal-content`)',
      km: '៧.១ រចនាសម្ព័ន្ធ Modals (`modal`, `modal-dialog`, `modal-content`)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Modals are pop-up dialog boxes overlaid on the webpage. They require a trigger button with `data-bs-toggle="modal"` and `data-bs-target="#myModal"`.',
      km: 'Modals គឺជាផ្ទាំង Dialog Box ដែលលេចឡើងលើគេហទំព័រ។ វាត្រូវការប៊ូតុងចុះបើកដែលមាន `data-bs-toggle="modal"` និង `data-bs-target="#modalId"`។'
    },
    tutorial: {
      en: 'Inner structure: `.modal` > `.modal-dialog` > `.modal-content` > (`.modal-header` + `.modal-body` + `.modal-footer`). Include `<button class="btn-close" data-bs-dismiss="modal">` inside header for close functionality.',
      km: 'រចនាសម្ព័ន្ធខាងក្នុង៖ `.modal` > `.modal-dialog` > `.modal-content` > (`.modal-header`, `.modal-body`, `.modal-footer`)។ ប្រើ `.btn-close` ដើមបីបិទ Modal។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-5 text-center font-sans">
  
  <h3 class="fw-bold mb-3">Bootstrap Modal Popup Demo</h3>
  
  <!-- Trigger Button -->
  <button type="button" class="btn btn-primary btn-lg shadow" data-bs-toggle="modal" data-bs-target="#demoModal">
    🚀 បើកផ្ទាំងព័ត៌មាន (Open Modal)
  </button>

  <!-- Modal Component -->
  <div class="modal fade" id="demoModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-4 shadow-lg border-0">
        
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title fw-bold">ស្វាគមន៍មកកាន់ Modal</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body p-4 text-start">
          <p class="text-secondary mb-0">
            នេះគឺជាផ្ទាំង Pop-up Modal របស់ Bootstrap 5! វាដំណើរការដោយរលូនជាមួយ Bootstrap JavaScript Bundle។
          </p>
        </div>

        <div class="modal-footer bg-light">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">បិទ</button>
          <button type="button" class="btn btn-primary fw-bold">យល់ព្រម</button>
        </div>

      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'User Notifications & Terms Agreemets', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Modals are universally used for cookie consents, user profile settings, terms of service dialogs, and video previews.',
        km: 'Modals ត្រូវបានប្រើប្រាស់យ៉ាងច្រើនសម្រាប់ការបញ្ជាក់ពាក្យសម្ងាត់, ការយល់ព្រមលើលក្ខខណ្ឌប្រើប្រាស់, និងការមើលវីដេអូ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What HTML attribute dismisses/closes an active Bootstrap modal when clicked?',
        km: 'តើ HTML Attribute មួយណាដែលបិទ Modal ពេលអ្នកប្រើប្រាស់ចុចលើប៊ូតុង?'
      },
      hints: [
        { en: 'Attribute format: data-bs-dismiss="modal"', km: 'ទម្រង់ attribute៖ data-bs-dismiss="modal"' }
      ],
      solution: 'data-bs-dismiss="modal"'
    },
    quizQuestions: [
      {
        id: 'q-bs-7-1',
        question: {
          en: 'Which class renders a stylized "X" close button inside a Bootstrap modal header?',
          km: 'តើ Class មួយណាសម្រាប់បង្កើតប៊ូតុង "X" សម្រាប់បិទ Modal?'
        },
        options: [
          { id: '1', text: { en: '.btn-close', km: '.btn-close' }, isCorrect: true },
          { id: '2', text: { en: '.close-x', km: '.close-x' }, isCorrect: false },
          { id: '3', text: { en: '.modal-dismiss', km: '.modal-dismiss' }, isCorrect: false }
        ],
        explanation: {
          en: '`.btn-close` uses an inline CSS background image SVG icon for universal close buttons.',
          km: '`.btn-close` ផ្តល់រូបរាងសញ្ញា "X" ស្ដង់ដារស្វ័យប្រវត្តិ។'
        }
      }
    ]
  },
  {
    id: 'bs-m7-l2',
    slug: 'bootstrap-modal-sizes-and-scrolls',
    moduleNumber: 7,
    lessonNumberInModule: 2,
    title: {
      en: '7.2 Modal Sizes & Vertical Centering (`modal-lg`, `modal-dialog-centered`)',
      km: '៧.២ ការកំណត់ទំហំ និងតម្រឹមចំកណ្តាល Modals (`modal-lg`, `modal-dialog-centered`)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Bootstrap modals support custom dimensions (`.modal-sm`, `.modal-lg`, `.modal-xl`), vertical viewport centering (`.modal-dialog-centered`), and scrollable bodies (`.modal-dialog-scrollable`).',
      km: 'Modals អាចកំណត់ទំហំផ្សេងៗ (`.modal-sm`, `.modal-lg`, `.modal-xl`), កំណត់ឲ្យនៅចំកណ្តាលអេក្រង់ស្វ័យប្រវត្តិ (`.modal-dialog-centered`) និង scrollable body (`.modal-dialog-scrollable`)។'
    },
    tutorial: {
      en: 'Place sizing or positioning classes directly on the `.modal-dialog` container. For example: `<div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">`.',
      km: 'ដាក់ Class ទំហំ និងការតម្រឹមលើ `.modal-dialog` ដោយផ្ទាល់ ដូចជា `<div class="modal-dialog modal-lg modal-dialog-centered">`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-5 text-center font-sans">

  <h3 class="fw-bold mb-3">Large & Centered Modal</h3>

  <button class="btn btn-dark btn-lg shadow" data-bs-toggle="modal" data-bs-target="#lgModal">
    Open Large Centered Modal (.modal-lg)
  </button>

  <!-- Large Centered Modal -->
  <div class="modal fade" id="lgModal" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content rounded-4 p-2">
        <div class="modal-header">
          <h5 class="modal-title fw-bold"> Large Centered Modal Dialog</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body text-start">
          <p class="text-secondary">
            Modal នេះមានទំហំធំ (.modal-lg) និងស្ថិតនៅចំកណ្តាលអេក្រង់ទាំងជួរឈរ និងជួរដេក (.modal-dialog-centered)។
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline-secondary" data-bs-dismiss="modal">បិទ</button>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Data Editors & Complex Forms', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Large modals (`modal-lg` or `modal-xl`) are used for database entry forms, image editing tools, and code snippet inspect dialogs.',
        km: ' Modals ទំហំធំ `modal-lg` ត្រូវប្រើប្រាស់សម្រាប់ទម្រង់បញ្ចូលទិន្នន័យស្មុគស្មាញ និងឧបករណ៍កែប្រែទិន្នន័យ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which class aligns a Bootstrap modal vertically in the absolute center of the browser viewport?',
        km: 'តើ Class មួយណាដែលតម្រឹម Modal ឲ្យស្ថិតនៅចំកណ្តាលអេក្រង់ខាងលើ និងខាងក្រោម?'
      },
      hints: [
        { en: 'Class format: modal-dialog-centered', km: 'ទម្រង់ class៖ modal-dialog-centered' }
      ],
      solution: 'modal-dialog-centered'
    },
    quizQuestions: [
      {
        id: 'q-bs-7-2',
        question: {
          en: 'Which class makes a long modal body scrollable while keeping header and footer pinned in view?',
          km: 'តើ Class មួយណាដែលអនុញ្ញាតឲ្យ Scroll តែខ្លឹមសារក្នុង Modal body ប៉ុណ្ណោះ?'
        },
        options: [
          { id: '1', text: { en: '.modal-dialog-scrollable', km: '.modal-dialog-scrollable' }, isCorrect: true },
          { id: '2', text: { en: '.modal-scroll-body', km: '.modal-scroll-body' }, isCorrect: false },
          { id: '3', text: { en: '.modal-overflow', km: '.modal-overflow' }, isCorrect: false }
        ],
        explanation: {
          en: '`.modal-dialog-scrollable` restricts scrolling overflow strictly inside the modal body.',
          km: '`.modal-dialog-scrollable` បង្កើត Scrollbar ខាងក្នុង Modal body ដោយរក្សា Header/Footer ថេរ។'
        }
      }
    ]
  },
  {
    id: 'bs-m7-l3',
    slug: 'bootstrap-modal-action-confirmations',
    moduleNumber: 7,
    lessonNumberInModule: 3,
    title: {
      en: '7.3 Confirmation Modals & Action Dialogs Pattern',
      km: '៧.៣ គំរូការប្រើប្រាស់ Modal សម្រាប់ការបញ្ជាក់ការលុប (Action Confirmation)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Confirmation modals prevent accidental destructive user actions (e.g. deleting accounts, canceling subscriptions) by requiring explicit button confirmations.',
      km: 'Confirmation Modals ត្រូវបានប្រើប្រាស់ជាស្តង់ដារ ដើមបីសួរអ្នកប្រើប្រាស់បញ្ជាក់ឡើងវិញ មុនពេលលុបទិន្នន័យសំខាន់ៗ។'
    },
    tutorial: {
      en: 'Design confirmation modals with warning or danger color accents (e.g. `.btn-danger`, warning icons) to make the weight of destructive actions clear to users.',
      km: 'ប្រើប្រាស់ពណ៌អាសន្ន ឬពណ៌ក្រហម (`.btn-danger`) ដើមបីបញ្ជាក់ប្រាប់អ្នកប្រើប្រាស់អំពីភាពធ្ងន់ធ្ងរនៃសកម្មភាពលុបទិន្នន័យ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-5 text-center font-sans">

  <!-- Danger Action Trigger -->
  <button class="btn btn-outline-danger font-bold" data-bs-toggle="modal" data-bs-target="#confirmDelete">
    🗑️ លុបគណនី (Delete Account)
  </button>

  <!-- Delete Confirmation Modal -->
  <div class="modal fade" id="confirmDelete" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title fw-bold">⚠️ បញ្ជាក់ការលុបទិន្នន័យ</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body p-4 text-start">
          <p class="fw-bold text-dark mb-1">តើអ្នកពិតជាចង់លុបគណនីនេះមែនទេ?</p>
          <p class="text-secondary text-xs mb-0">
            ទិន្នន័យទាំងអស់របស់អ្នកនឹងត្រូវលុបចេញពីប្រព័ន្ធរហូត ហើយមិនអាចស្ដារឡើងវិញបានឡើយ។
          </p>
        </div>

        <div class="modal-footer bg-light">
          <button class="btn btn-secondary" data-bs-dismiss="modal">បោះបង់</button>
          <button class="btn btn-danger font-bold">យល់ព្រមលុប</button>
        </div>

      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Destructive UX Safeguards', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Adding confirmation modals before executing destructive REST API requests (DELETE) is a core requirement for secure production Web Applications.',
        km: 'ការបន្ថែម Confirmation Modal មុនពេលលុបទិន្នន័យ គឺជាតម្រូវការចម្បងនៃប្រព័ន្ធសុវត្ថិភាព UI/UX។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What Bootstrap color variant should be used for destructive delete confirmation buttons?',
        km: 'តើ Variant ពណ៌មួយណាដែលគួរប្រើប្រាស់លើប៊ូតុងបញ្ជាក់ការលុបទិន្នន័យ?'
      },
      hints: [
        { en: 'Use btn-danger for destructive actions', km: 'ប្រើ btn-danger សម្រាប់សកម្មភាពអាសន្ន ឬលុបទិន្នន័យ' }
      ],
      solution: 'btn-danger'
    },
    quizQuestions: [
      {
        id: 'q-bs-7-3',
        question: {
          en: 'Why are confirmation modals essential in web UI design?',
          km: 'ហេតុអ្វីបានជា Confirmation Modals មានសារៈសំខាន់ក្នុង UI Design?'
        },
        options: [
          { id: '1', text: { en: 'To prevent accidental data loss from mistaken button clicks.', km: 'ដើម្បីការពារការជ្រោះជ្រុលលុបទិន្នន័យដោយអចេតនា។' }, isCorrect: true },
          { id: '2', text: { en: 'They improve page SEO rankings.', km: 'វាជួយបង្កើន SEO របស់គេហទំព័រ។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Confirmation modals act as safety buffers before performing permanent data alterations.',
          km: 'Confirmation Modals ដើរតួជាទប់ស្កាត់ការបាត់បង់ទិន្នន័យអចេតនា។'
        }
      }
    ]
  },

  // MODULE 8 — Alerts & Badges
  {
    id: 'bs-m8-l1',
    slug: 'bootstrap-alerts-and-dismissible',
    moduleNumber: 8,
    lessonNumberInModule: 1,
    title: {
      en: '8.1 Alerts & Dismissible Banners (`alert`, `alert-dismissible`)',
      km: '៨.១ ផ្ទាំងជូនដំណឹង Alerts និង Dismissible Alerts (`alert-dismissible`)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Alerts provide contextual feedback messages for user actions. Adding `.alert-dismissible` allows users to close the alert banner with a close button.',
      km: 'Alerts ផ្តល់សារជូនដំណឹងប្រាប់អ្នកប្រើប្រាស់។ ការបន្ថែម `.alert-dismissible` អនុញ្ញាតឲ្យអ្នកប្រើប្រាស់ចុចបិទផ្ទាំងសារនោះបាន។'
    },
    tutorial: {
      en: 'Format: `<div class="alert alert-success alert-dismissible fade show" role="alert">`. Include `<button class="btn-close" data-bs-dismiss="alert">` inside the alert.',
      km: 'ទម្រង់៖ `<div class="alert alert-success alert-dismissible fade show">` រួចបន្ថែម `<button class="btn-close" data-bs-dismiss="alert">` ខាងក្នុង។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4 font-sans">
  <div class="container max-w-md mx-auto space-y-3">
    
    <!-- Success Dismissible Alert -->
    <div class="alert alert-success alert-dismissible fade show shadow-sm" role="alert">
      <strong>🎉 ជោគជ័យ!</strong> គណនីរបស់អ្នកត្រូវបានបង្កើតដោយជោគជ័យ។
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>

    <!-- Warning Alert -->
    <div class="alert alert-warning alert-dismissible fade show shadow-sm" role="alert">
      <strong>⚠️ ព្រមាន!</strong> ពាក្យសម្ងាត់របស់អ្នកជិតហួសកំណត់ហើយ។
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>

  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'System Notification Banners', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'System-wide status banners (e.g. scheduled maintenance, password reset links) use dismissible alerts at the top of application dashboards.',
        km: 'ផ្ទាំងសារជូនដំណឹងប្រព័ន្ធ (ដូចជាការជួសជុល Server ឬសារបញ្ជាក់ Password) តែងតែប្រើប្រាស់ Dismissible Alerts លើ Admin Dashboard។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which HTML attribute closes a Bootstrap alert when clicking its close button?',
        km: 'តើ Attribute មួយណាសម្រាប់បិទ Alert ពេលអ្នកប្រើប្រាស់ចុចលើប៊ូតុង X?'
      },
      hints: [
        { en: 'Attribute format: data-bs-dismiss="alert"', km: 'ទម្រង់ attribute៖ data-bs-dismiss="alert"' }
      ],
      solution: 'data-bs-dismiss="alert"'
    },
    quizQuestions: [
      {
        id: 'q-bs-8-1',
        question: {
          en: 'Which class provides smooth fade out animation when an alert is closed?',
          km: 'តើ Class ពីរណាខ្លះផ្តល់ Animation រលូនពេលបិទផ្ទាំង Alert?'
        },
        options: [
          { id: '1', text: { en: '.fade .show', km: '.fade .show' }, isCorrect: true },
          { id: '2', text: { en: '.animate-out', km: '.animate-out' }, isCorrect: false },
          { id: '3', text: { en: '.transition-close', km: '.transition-close' }, isCorrect: false }
        ],
        explanation: {
          en: '`.fade .show` triggers CSS transitions during alert dismissal.',
          km: '`.fade .show` ផ្តល់ Animation បាត់បន្តិចម្តងៗពេល Alert ត្រូវបិទ។'
        }
      }
    ]
  },
  {
    id: 'bs-m8-l2',
    slug: 'bootstrap-badges-and-notification-counters',
    moduleNumber: 8,
    lessonNumberInModule: 2,
    title: {
      en: '8.2 Badges & Positioned Notification Counters (`badge`, `rounded-pill`)',
      km: '៨.២ ការប្រើប្រាស់ Badges និងប្រអប់រាប់ចំនួនសេចក្តីជូនដំណឹង (Notification Counters)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Badges are small count and labeling indicators. `.badge` scales automatically to parent element font sizes.',
      km: 'Badges គឺជាស្លាក ឬប្រអប់លេខរាប់តូចៗ។ Class `.badge` ប្រែប្រួលទំហំទៅតាមទំហំអក្សររបស់ Parent Element ស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: 'Combine `.badge` with background colors (e.g. `bg-primary`, `bg-danger`) and `.rounded-pill` for capsule labels. Use absolute positioning utilities (`position-absolute top-0 start-100 translate-middle`) to position counters on icons or buttons.',
      km: 'ប្រើប្រាស់ `.rounded-pill` សម្រាប់ Badge មូលវែង ឬប្រើ Position utilities ដើមបីដាក់ Badge លើជ្រុងប៊ូតុង ឬ Icon។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-5 font-sans">
  <div class="container max-w-sm mx-auto text-center space-y-4">
    
    <h4 class="fw-bold text-dark">Badges & Notification Counters</h4>

    <!-- Inline Badges -->
    <div class="mb-4">
      <span class="badge bg-primary me-1">New</span>
      <span class="badge bg-success rounded-pill me-1">Active</span>
      <span class="badge bg-danger rounded-pill">99+</span>
    </div>

    <!-- Positioned Notification Badge on Button -->
    <div>
      <button type="button" class="btn btn-dark position-relative px-4 py-2 font-bold shadow">
        🔔 សារជូនដំណឹង
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          5
        </span>
      </button>
    </div>

  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Inbox & Shopping Cart Counters', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Positioned badges are essential for chat inbox unread message counts and e-commerce shopping cart item badges.',
        km: 'Positioned badges ត្រូវប្រើប្រាស់ជាចាំបាច់សម្រាប់បង្ហាញចំនួនសារមិនទាន់អានក្នុង Chat និងចំនួនទំនិញក្នុង Shopping Cart។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which class gives a Bootstrap badge rounded capsule pill corners?',
        km: 'តើ Class មួយណាដែលធ្វើឲ្យជ្រុងនៃ Badge ក្លាយជាជ្រុងមូលវែង (Pill shape)?'
      },
      hints: [
        { en: 'Class format: rounded-pill', km: 'ទម្រង់ class៖ rounded-pill' }
      ],
      solution: 'rounded-pill'
    },
    quizQuestions: [
      {
        id: 'q-bs-8-2',
        question: {
          en: 'Which positioning utility classes center a notification badge exactly on the top-right corner of a button?',
          km: 'តើ Utility classes ណាខ្លះដែលតម្រឹម Badge ឲ្យស្ថិតនៅជ្រុងលើខាងស្តាំនៃប៊ូតុង?'
        },
        options: [
          { id: '1', text: { en: 'position-absolute top-0 start-100 translate-middle', km: 'position-absolute top-0 start-100 translate-middle' }, isCorrect: true },
          { id: '2', text: { en: 'float-end top-right', km: 'float-end top-right' }, isCorrect: false }
        ],
        explanation: {
          en: 'Combine `position-absolute`, `top-0`, `start-100`, and `translate-middle` for perfect icon overlays.',
          km: 'ការរួមបញ្ចូល Utilities ទាំងនេះជួយតម្រឹម Badge នៅជ្រុងស្អាតឥតខ្ចោះ។'
        }
      }
    ]
  },
  {
    id: 'bs-m8-l3',
    slug: 'bootstrap-real-world-feedback-patterns',
    moduleNumber: 8,
    lessonNumberInModule: 3,
    title: {
      en: '8.3 Real-World UI Feedback Banner Patterns',
      km: '៨.៣ គំរូផ្ទាំងរាយការណ៍ព័ត៌មាន (UI Feedback Patterns) ក្នុងការងារពិត'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Combining alerts, badges, and icons creates production-grade notification banners for online forms, API connection errors, and system status updates.',
      km: 'ការបូកបញ្ចូលគ្នា រវាង Alerts, Badges, និង Icons បង្កើតបានជាផ្ទាំងរាយការណ៍ព័ត៌មានយ៉ាងមានរបៀបសម្រាប់ប្រព័ន្ធ API Error ឬ Form Submissions។'
    },
    tutorial: {
      en: 'Structure feedback banners with flexbox (`d-flex align-items-center gap-3`) inside an alert wrapper to align status icons cleanly alongside descriptive text.',
      km: 'ប្រើប្រាស់ `d-flex align-items-center gap-3` ខាងក្នុង Alert ដើមបីតម្រឹម Icon ជិតអត្ថបទព័ត៌មានយ៉ាងមានរបៀប។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4 font-sans">
  <div class="container max-w-md mx-auto">
    
    <!-- Complex Feedback Banner -->
    <div class="alert alert-primary d-flex align-items-center gap-3 p-3 rounded-4 border-0 shadow-sm" role="alert">
      <div class="fs-2">⚡</div>
      <div>
        <div class="d-flex align-items-center gap-2">
          <h6 class="fw-bold mb-0 text-dark">ទិន្នន័យបានធ្វើបច្ចុប្បន្នភាព</h6>
          <span class="badge bg-primary rounded-pill">LIVE</span>
        </div>
        <small class="text-secondary">ប្រព័ន្ធបានរក្សាទុកការផ្លាស់ប្តូរចុងក្រោយរបស់អ្នក។</small>
      </div>
    </div>

  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'SaaS Live Status Banners', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Live status feedback banners reassure users that asynchronous background tasks (like video rendering or cloud backups) have completed.',
        km: 'ផ្ទាំងសារនេះជួយបញ្ជាក់ប្រាប់អ្នកប្រើប្រាស់ថា ការ Upload ឬ Backup ទិន្នន័យត្រូវបានបញ្ចប់ដោយជោគជ័យ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What flexbox utility classes vertically align an icon and heading text inside a Bootstrap alert container?',
        km: 'តើ Flexbox utility class មួយណាដែលតម្រឹម Icon និង Text ឲ្យស្មើជួរឈរក្នុង Alert?'
      },
      hints: [
        { en: 'Use align-items-center on flex container', km: 'ប្រើ align-items-center លើ flex container' }
      ],
      solution: 'align-items-center'
    },
    quizQuestions: [
      {
        id: 'q-bs-8-3',
        question: {
          en: 'How should status icons and feedback text be aligned in modern Bootstrap alerts?',
          km: 'តើគួរតម្រឹម Status Icon និង Text ក្នុង Bootstrap Alert តាមរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'Using `.d-flex .align-items-center` for flexbox alignment', km: 'ប្រើ `.d-flex .align-items-center` សម្រាប់រៀបចំ Flexbox' }, isCorrect: true },
          { id: '2', text: { en: 'Using absolute float positioning', km: 'ប្រើ absolute float' }, isCorrect: false }
        ],
        explanation: {
          en: 'Flexbox alignment guarantees smooth vertical alignment regardless of font or icon size.',
          km: 'Flexbox ផ្តល់ការតម្រឹមស្មើគ្នាយ៉ាងរលូន។'
        }
      }
    ]
  },

  // MODULE 9 — Utilities & Responsive Breakpoints
  {
    id: 'bs-m9-l1',
    slug: 'bootstrap-display-and-flex-utilities',
    moduleNumber: 9,
    lessonNumberInModule: 1,
    title: {
      en: '9.1 Display & Flex Utilities (`d-none`, `d-flex`, `justify-content-between`)',
      km: '៩.១ ឧបករណ៍ Display និង Flex Utilities (`d-none`, `d-flex`)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Bootstrap provides flexbox utilities: `.d-flex`, `.flex-row`, `.flex-column`, `.justify-content-between`, `.justify-content-center`, and `.align-items-center`.',
      km: 'Bootstrap ផ្តល់ Flexbox utilities ដូចជា៖ `.d-flex`, `.flex-column`, `.justify-content-between`, និង `.align-items-center` សម្រាប់រៀបចំ Layout គ្រប់ប្រភេទ។'
    },
    tutorial: {
      en: 'Use `.d-flex .justify-content-between .align-items-center` on parent wrappers to push child elements (like logo vs nav or title vs button) to opposite ends.',
      km: 'ប្រើប្រាស់ `.d-flex .justify-content-between .align-items-center` ដើមបីរុញ Element កូនៗទៅចុងសងខាង និងតម្រឹមចំកណ្តាលជួរឈរ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4 font-sans">
  <div class="container max-w-md bg-white p-4 rounded-4 shadow-sm">
    
    <!-- Header Toolbar with Flex utilities -->
    <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
      <div>
        <h5 class="fw-bold mb-0 text-dark">បញ្ជីមេរៀន (Lesson List)</h5>
        <small class="text-secondary">Bootstrap 5 Utilities</small>
      </div>
      <button class="btn btn-sm btn-primary font-bold">+ បន្ថែម</button>
    </div>

    <!-- Centered Flex items -->
    <div class="d-flex align-items-center gap-3 p-3 bg-light rounded-3">
      <div class="bg-primary text-white p-2 rounded-3 fw-bold">01</div>
      <div>
        <div class="fw-bold text-dark fs-6">Flex Alignment</div>
        <div class="text-secondary text-xs">d-flex align-items-center gap-3</div>
      </div>
    </div>

  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Application Toolbars & Headers', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Application toolbars, card header action rows, and item list items depend continuously on Bootstrap flexbox classes.',
        km: 'របារ Toolbars និង Card headers អាស្រ័យលើ Flexbox classes ដើមបីតម្រឹមប៊ូតុង និងចំណងជើង។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which Bootstrap class sets an element to display: flex?',
        km: 'តើ Class មួយណាដែលកំណត់ Element ឲ្យមាន display: flex?'
      },
      hints: [
        { en: 'Class format: d-flex', km: 'ទម្រង់ class៖ d-flex' }
      ],
      solution: 'd-flex'
    },
    quizQuestions: [
      {
        id: 'q-bs-9-1',
        question: {
          en: 'Which flexbox class pushes child elements to opposite extreme ends of a row in Bootstrap?',
          km: 'តើ Class មួយណាដែលរុញច្រាន Elements កូនៗឲ្យទៅនៅចុងសងខាងដាច់ពីគ្នា?'
        },
        options: [
          { id: '1', text: { en: '.justify-content-between', km: '.justify-content-between' }, isCorrect: true },
          { id: '2', text: { en: '.align-content-around', km: '.align-content-around' }, isCorrect: false },
          { id: '3', text: { en: '.flex-space-out', km: '.flex-space-out' }, isCorrect: false }
        ],
        explanation: {
          en: '`.justify-content-between` sets justify-content: space-between in flexbox.',
          km: '`.justify-content-between` កំណត់ space-between ក្នុង Flexbox។'
        }
      }
    ]
  },
  {
    id: 'bs-m9-l2',
    slug: 'bootstrap-responsive-visibility-patterns',
    moduleNumber: 9,
    lessonNumberInModule: 2,
    title: {
      en: '9.2 Responsive Visibility (`d-none`, `d-md-block`, `d-lg-flex`)',
      km: '៩.២ ការលាក់/បង្ហាញទិន្នន័យតាម Responsive Breakpoints (`d-none`, `d-md-block`)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Control element visibility across device screens using responsive display classes like `d-none d-md-block` (hide on mobile, show block on tablet and up).',
      km: 'គ្រប់គ្រងការ លាក់ ឬ បង្ហាញ Element តាមទំហំអេក្រង់ផ្សេងៗ ដោយប្រើ `d-none d-md-block` (លាក់លើ Mobile បង្ហាញលើ Tablet ឡើងទៅ)។'
    },
    tutorial: {
      en: 'Format: `d-{breakpoint}-{value}`. Example: `d-none d-lg-flex` hides the element on mobile/tablet viewports and renders it as flexbox starting at large (>=992px) screens.',
      km: 'ទម្រង់៖ `d-{breakpoint}-{value}`។ ឧទាហរណ៍៖ `d-none d-lg-flex` លាក់លើទូរស័ព្ទ និងបង្ហាញជា Flexbox លើ Desktop។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark text-white p-4 font-sans text-center">
  <div class="container py-4">
    
    <h3 class="fw-bold text-warning mb-3">Responsive Display Visibility Demo</h3>
    <p class="text-secondary mb-4">ប្តូរទំហំ Preview ដើមបីមើលការ លាក់/បង្ហាញ Element!</p>

    <!-- Visible ONLY on Mobile (< 768px) -->
    <div class="d-block d-md-none alert alert-info font-bold">
      📱 អ្នកកំពុងមើលលើអេក្រង់ទូរស័ព្ទ (Mobile View < 768px)
    </div>

    <!-- Visible ONLY on Desktop (>= 768px) -->
    <div class="d-none d-md-block alert alert-success font-bold">
      💻 អ្នកកំពុងមើលលើអេក្រង់ធំ (Desktop View >= 768px)
    </div>

  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Mobile vs Desktop Sidebar Navigation', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Dashboard sidebars use `d-none d-lg-block` to hide heavy navigation sidebars on mobile phones while displaying them permanently on desktop monitors.',
        km: 'ទំព័រ Dashboard ប្រើ `d-none d-lg-block` ដើមបីលាក់ Sidebar លើទូរស័ព្ទដៃ និងបង្ហាញថេរលើអេក្រង់កុំព្យូទ័រ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What class combination hides an element on mobile and displays it as flex starting at medium (768px) screens?',
        km: 'តើការបូកបញ្ចូល class មួយណាដែលលាក់ Element លើ Mobile និងបង្ហាញជា Flex ចាប់ពីអេក្រង់ Medium (768px)?'
      },
      hints: [
        { en: 'Combine d-none and d-md-flex', km: 'រួមបញ្ចូល d-none និង d-md-flex' }
      ],
      solution: 'd-none d-md-flex'
    },
    quizQuestions: [
      {
        id: 'q-bs-9-2',
        question: {
          en: 'What does the class combination `d-none d-lg-block` do?',
          km: 'តើការរួមបញ្ចូល class `d-none d-lg-block` មានន័យដូចម្តេច?'
        },
        options: [
          { id: '1', text: { en: 'Hides the element on mobile/tablet, displays it on large (>=992px) screens.', km: 'លាក់លើ Mobile/Tablet ហើយបង្ហាញលើអេក្រង់ Large (>=992px) ឡើងទៅ។' }, isCorrect: true },
          { id: '2', text: { en: 'Displays element on mobile only.', km: 'បង្ហាញតែលើ Mobile ប៉ុណ្ណោះ។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Unprefixed `d-none` hides the element everywhere until `d-lg-block` overrides it at >=992px.',
          km: '`d-none` លាក់លើអេក្រង់តូច ហើយ `d-lg-block` បង្ហាញលើអេក្រង់ធំ។'
        }
      }
    ]
  },
  {
    id: 'bs-m9-l3',
    slug: 'bootstrap-utilities-vs-custom-css',
    moduleNumber: 9,
    lessonNumberInModule: 3,
    title: {
      en: '9.3 Bootstrap Utilities vs. Custom CSS — Best Practices',
      km: '៩.៣ ការប្រៀបធៀបរវាង Bootstrap Utilities និង Custom CSS'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Utilities accelerate layout, spacing, and colors. However, custom CSS should be written for unique domain-specific brand animations, specialized shadows, or complex layout requirements.',
      km: 'Utilities ជួយបង្កើត Layout, Spacing, និង ពណ៌បានលឿន ប៉ុន្តែគួរតែសរសេរ Custom CSS សម្រាប់ Animation ពិសេសៗ ឬស្ទីល Brand ផ្ទាល់ខ្លួន។'
    },
    tutorial: {
      en: 'Rule of thumb: Use Bootstrap utilities for 80% of layout, grid, flexbox, margins, and standard components. Add a lightweight custom stylesheet for custom brand animations or complex clip-paths.',
      km: 'វិធានមាស៖ ប្រើ Bootstrap Utilities 80% សម្រាប់រៀបចំ Layout និង Spacing រួចបន្ថែម Custom CSS 20% សម្រាប់ Animation ប្លែកៗ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    /* Custom CSS for brand glassmorphism & pulse animation */
    .glass-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .pulse-badge {
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.08); }
      100% { transform: scale(1); }
    }
  </style>
</head>
<body class="bg-dark text-white p-4 font-sans text-center">
  <div class="container max-w-md mx-auto py-4">
    
    <!-- Hybrid Bootstrap + Custom CSS Card -->
    <div class="glass-card p-4 rounded-4 shadow-lg">
      <span class="badge bg-warning text-dark font-bold pulse-badge mb-3 px-3 py-2">
        Custom Animation + Bootstrap Grid
      </span>
      <h4 class="fw-bold mb-2">Hybrid Design Approach</h4>
      <p class="text-white-50 text-xs">
        ប្រើប្រាស់ Bootstrap Utilities សម្រាប់ Layout ជួរឈរ និងប្រើ Custom CSS សម្រាប់ Glassmorphic Backdrop។
      </p>
    </div>

  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Maintainable Scalable Codebases', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Combining framework utilities with targeted custom CSS keeps project codebases lean, organized, and easy for development teams to maintain.',
        km: 'ការបូកបញ្ចូល Utilities ជាមួយ Custom CSS បង្កើតបានជា Codebase ស្អាតបាត និងងាយស្រួលគ្រប់គ្រងជាក្រុម។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Should you write custom CSS rules to override standard Bootstrap margin or padding utilities?',
        km: 'តើអ្នកគួរសរសេរ Custom CSS ដើមបី Override លើ Spacing Utility របស់ Bootstrap ដែរឬទេ?'
      },
      hints: [
        { en: 'Prefer using Bootstrap spacing utilities (m-1 to m-5) first.', km: 'គួរប្រើ Bootstrap spacing scale មុនគេ' }
      ],
      solution: 'No, prefer using Bootstrap spacing utility classes (m-*, p-*).'
    },
    quizQuestions: [
      {
        id: 'q-bs-9-3',
        question: {
          en: 'When is it recommended to write custom CSS alongside Bootstrap?',
          km: 'តើពេលណាដែលគួរតែសរសេរ Custom CSS បន្ថែមលើ Bootstrap?'
        },
        options: [
          { id: '1', text: { en: 'For unique brand animations, complex clip-paths, or non-standard styling.', km: 'សម្រាប់ Animation ផ្ទាល់ខ្លួន ស្ទីល Brand ឬលក្ខណៈស្មុគស្មាញពិសេស។' }, isCorrect: true },
          { id: '2', text: { en: 'To create basic buttons or margins.', km: 'ដើមបីបង្កើតប៊ូតុងធម្មតា ឬរំលង Spacing' }, isCorrect: false }
        ],
        explanation: {
          en: 'Use Bootstrap utilities for standard layout/spacing, and custom CSS for unique brand interactions.',
          km: 'ប្រើ Utilities សម្រាប់រៀបចំធម្មតា និង Custom CSS សម្រាប់អាលឡេកអាឡកពិសេសៗ។'
        }
      }
    ]
  },

  // MODULE 10 — Customizing Bootstrap Themes
  {
    id: 'bs-m10-l1',
    slug: 'bootstrap-sass-variable-overrides',
    moduleNumber: 10,
    lessonNumberInModule: 1,
    title: {
      en: '10.1 Overriding Variables with Sass (`$primary`, `$theme-colors`)',
      km: '១០.១ ការកែច្នៃអថេរ Bootstrap តាមរយៈ Sass (`$primary`, `$theme-colors`)'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Bootstrap is compiled from Sass source files. By defining custom Sass variables before importing Bootstrap (e.g. `$primary: #8b5cf6;`), you re-theme the entire framework automatically.',
      km: 'Bootstrap ត្រូវបានបង្កើតឡើងដោយប្រើប្រាស់ Sass។ ដោយគ្រាន់តែប្រកាស អថេរ Sass ផ្ទាល់ខ្លួន មុនពេល `@import "bootstrap"` អ្នកនឹងអាចប្តូរពណ៌ Theme របស់ Bootstrap ទាំងមូលបានស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: 'In custom Sass files: 1. Define `$primary: #6366f1;` 2. Define `$body-bg: #0f172a;` 3. Import Bootstrap `@import "bootstrap/scss/bootstrap";`. All buttons, badges, and alerts automatically recompile with your brand colors!',
      km: 'ក្នុង Sass file៖ 1. ប្រកាស `$primary: #6366f1;` 2. ប្រកាស `$body-bg: #0f172a;` 3. `@import "bootstrap/scss/bootstrap";`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    /* Conceptual Sass compilation result simulation */
    :root {
      --bs-primary: #8b5cf6;
      --bs-primary-rgb: 139, 92, 246;
    }
    .btn-primary {
      background-color: var(--bs-primary) !important;
      border-color: var(--bs-primary) !important;
    }
  </style>
</head>
<body class="bg-light p-4 font-sans text-center">
  <div class="container max-w-md mx-auto bg-white p-4 rounded-4 shadow-sm">
    
    <span class="badge bg-purple text-white mb-2" style="background-color: #8b5cf6;">Sass Customized Theme</span>
    <h4 class="fw-bold text-dark">Brand Theme Override</h4>
    <p class="text-secondary text-xs mb-3">
      ការប្តូរអថេរ Sass \`$primary: #8b5cf6\` ធ្វើឲ្យគ្រប់ \`.btn-primary\` និង \`.text-primary\` ប្រែប្រួលតាមពណ៌ Brand។
    </p>

    <button class="btn btn-primary w-100 font-bold py-2">
      Sass Primary Button (#8b5cf6)
    </button>

  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Enterprise Brand Design System', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Companies customize Bootstrap with Sass variables to enforce exact brand guidelines across company Web products.',
        km: 'ក្រុមហ៊ុនធំៗប្រើប្រាស់ Sass ដើមបីកំណត់ពណ៌ Theme របស់ Bootstrap ឲ្យត្រូវគ្នានឹង Identity របស់ Brand ក្រុមហ៊ុន។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Where must custom Sass variables be declared relative to the @import "bootstrap" statement?',
        km: 'តើត្រូវប្រកាស អថេរ Sass ផ្ទាល់ខ្លួន នៅត្រង់ណា ធៀបនឹង @import "bootstrap"?'
      },
      hints: [
        { en: 'Declare custom Sass variables BEFORE importing bootstrap.scss', km: 'ប្រកាសអថេរមុនពេល @import bootstrap' }
      ],
      solution: 'BEFORE the @import "bootstrap" statement.'
    },
    quizQuestions: [
      {
        id: 'q-bs-10-1',
        question: {
          en: 'Why is defining Sass variables before importing Bootstrap effective?',
          km: 'ហេតុអ្វីបានជាការប្រកាសអថេរ Sass មុនពេល Import Bootstrap មានប្រសិទ្ធភាព?'
        },
        options: [
          { id: '1', text: { en: 'Bootstrap uses !default flags on its Sass variables, allowing your custom values to take precedence.', km: 'ដោយសារ Bootstrap ប្រើ `!default` លើអថេររបស់វា ធ្វើឲ្យតម្លៃផ្ទាល់ខ្លួនរបស់អ្នកឈ្នះស្វ័យប្រវត្តិ។' }, isCorrect: true },
          { id: '2', text: { en: 'It deletes all standard HTML tags.', km: 'វាលុប HTML tags ទាំងអស់ចោល។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Sass `!default` flag allows prior variable definitions to override default values.',
          km: 'ទង់ `!default` ក្នុង Sass អនុញ្ញាតឲ្យអថេរដែលប្រកាសមុនឈ្នះតម្លៃដើម។'
        }
      }
    ]
  },
  {
    id: 'bs-m10-l2',
    slug: 'bootstrap-css-custom-properties',
    moduleNumber: 10,
    lessonNumberInModule: 2,
    title: {
      en: '10.2 CSS Custom Properties in BS5 (`--bs-primary`, `--bs-body-bg`)',
      km: '១០.២ ការប្រើប្រាស់ CSS Custom Properties ក្នុង BS5 (`--bs-primary`)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Bootstrap 5 exposes real CSS Custom Properties (variables) on the `:root` scope and individual components (e.g. `--bs-primary`, `--bs-border-radius`, `--bs-body-bg`).',
      km: 'Bootstrap 5 ផ្តល់ជូន CSS Variables (Custom Properties) ស្រាប់ៗលើ `:root` ដូចជា `--bs-primary`, `--bs-border-radius`, និង `--bs-body-bg` ដើមបីងាយស្រួលកែប្រែក្នុង CSS។'
    },
    tutorial: {
      en: 'You can modify CSS variables dynamically in JavaScript or runtime CSS: `:root { --bs-primary: #0d9488; }` immediately changes all primary elements on the page without recompiling Sass!',
      km: 'អ្នកអាចកែប្រែ CSS variables បានភ្លាមៗក្នុង CSS ឬ JavaScript: `:root { --bs-primary: #0d9488; }` នោះពណ៌ primary លើទំព័រទាំងមូលនឹងដូរភ្លាមៗ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    /* Override Bootstrap 5 CSS Variables at runtime */
    .custom-teal-theme {
      --bs-primary: #0d9488;
      --bs-primary-rgb: 13, 148, 136;
      --bs-border-radius: 1.25rem;
    }
  </style>
</head>
<body class="bg-light p-4 font-sans text-center">
  <div class="container max-w-md mx-auto">
    
    <div class="custom-teal-theme bg-white p-4 rounded-4 shadow-sm border">
      <h4 class="fw-bold text-primary mb-2">CSS Variables Runtime Theme</h4>
      <p class="text-secondary text-xs mb-3">
        ប្រអប់នេះប្រើប្រាស់ \`--bs-primary: #0d9488\` និង \`--bs-border-radius: 1.25rem\`!
      </p>

      <button class="btn btn-primary w-100 font-bold py-2">
        Teal CSS Variable Button
      </button>
    </div>

  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Runtime Theme Switching', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'CSS custom properties enable real-time user customisation (like user accent color selection in dashboard settings) without page reloads.',
        km: 'CSS Variables អនុញ្ញាតឲ្យអ្នកប្រើប្រាស់អាចជ្រើសរើសពណ៌ប្រព័ន្ធ (Accent Color) តាមចំណង់ចំណូលចិត្តក្នុង Setting។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What prefix do all official Bootstrap 5 CSS custom properties use?',
        km: 'តើ Prefix មួយណាដែលគ្រប់ CSS Custom Properties របស់ Bootstrap 5 ប្រើប្រាស់?'
      },
      hints: [
        { en: 'Prefix format: --bs-*', km: 'ទម្រង់ prefix៖ --bs-*' }
      ],
      solution: '--bs-'
    },
    quizQuestions: [
      {
        id: 'q-bs-10-2',
        question: {
          en: 'What is the primary advantage of CSS custom properties over Sass variables?',
          km: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃ CSS Custom Properties ធៀបនឹង Sass variables?'
        },
        options: [
          { id: '1', text: { en: 'They can be modified at runtime in the browser without build compilation steps.', km: 'អាចកែប្រែបានភ្លាមៗក្នុង Browser ដោយមិនបាច់ Compile ឡើយ។' }, isCorrect: true },
          { id: '2', text: { en: 'They only work in Internet Explorer 11.', km: 'ដើរតែលើ IE11 ប៉ុណ្ណោះ។' }, isCorrect: false }
        ],
        explanation: {
          en: 'CSS variables exist live in the browser DOM and can be updated instantly via CSS or JavaScript.',
          km: 'CSS variables រស់នៅក្នុង Browser DOM អាចកែប្រែបានភ្លាមៗ។'
        }
      }
    ]
  },
  {
    id: 'bs-m10-l3',
    slug: 'bootstrap-dark-mode-theme-customization',
    moduleNumber: 10,
    lessonNumberInModule: 3,
    title: {
      en: '10.3 Color Modes & Dark Theme in Bootstrap 5 (`data-bs-theme="dark"`)',
      km: '១០.៣ ការប្រើប្រាស់ Dark Mode ក្នុង Bootstrap 5 (`data-bs-theme="dark"`)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Bootstrap 5.3 introduced native color modes! Toggling dark mode across an entire page or individual component is as simple as adding `data-bs-theme="dark"`.',
      km: 'Bootstrap 5.3 បន្ថែមសមត្ថភាព Dark Mode! ដោយគ្រាន់តែបន្ថែម `data-bs-theme="dark"` លើ `<html>` ឬ Component ណាមួយ នោះស្ទីលនឹងប្តូរទៅជា Dark Mode ស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: 'Toggle dark mode globally by placing `data-bs-theme="dark"` on `<html>` or `<body>`. Bootstrap automatically recolors cards, navbars, dropdowns, forms, and typography text colors!',
      km: 'ដាក់ `data-bs-theme="dark"` លើ `<html>` នោះ Bootstrap នឹងកែប្រែពណ៌ Cards, Navbars, Dropdowns, និង Forms ទៅជា Dark Mode ភ្លាមៗ។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km" data-bs-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 font-sans">
  <div class="container max-w-md mx-auto">
    
    <!-- Native BS5 Dark Mode Component -->
    <div class="card p-4 shadow-lg border rounded-4">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h5 class="fw-bold mb-0">🌙 Dark Mode Active</h5>
        <button 
          onclick="const h=document.documentElement; h.setAttribute('data-bs-theme', h.getAttribute('data-bs-theme')==='dark'?'light':'dark')" 
          class="btn btn-sm btn-outline-warning font-bold">
          ☀️ / 🌙 Toggle Theme
        </button>
      </div>

      <p class="text-body-secondary fs-6 mb-3">
        ទំព័រនេះប្រើប្រាស់ \`data-bs-theme="dark"\` លើ \`<html>\` ធ្វើឲ្យគ្រប់សមាសភាគប្តូរពណ៌ងងឹតស្វ័យប្រវត្តិ!
      </p>

      <input type="text" class="form-control mb-3" placeholder="Dark Mode Form Control">

      <button class="btn btn-primary font-bold">
        Bootstrap 5.3 Native Dark Mode
      </button>
    </div>

  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: 'Seamless Dark Mode Toggles', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Adding dark theme support improves battery longevity on mobile OLED screens and reduces eye strain during late-night usage.',
        km: 'Dark mode ជួយកាត់បន្ថយការចាំងភ្នែកពេលយប់ និងជួយសន្សំសំចៃថ្មទូរស័ព្ទ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What HTML attribute and value enables Bootstrap 5 native dark mode across the document?',
        km: 'តើ HTML attribute និងតម្លៃមួយណាដែលបើកដំណើការ Native Dark Mode ក្នុង Bootstrap 5?'
      },
      hints: [
        { en: 'Attribute format: data-bs-theme="dark"', km: 'ទម្រង់ attribute៖ data-bs-theme="dark"' }
      ],
      solution: 'data-bs-theme="dark"'
    },
    quizQuestions: [
      {
        id: 'q-bs-10-3',
        question: {
          en: 'Where can `data-bs-theme="dark"` be applied in Bootstrap 5.3+?',
          km: 'តើ `data-bs-theme="dark"` អាចយកទៅដាក់លើទីតាំងណាខ្លះក្នុង Bootstrap 5.3+?'
        },
        options: [
          { id: '1', text: { en: 'Globally on <html>, or scoped locally on specific cards, navbars, and containers.', km: 'លើ <html> សម្រាប់ទំព័រទាំងមូល ឬលើ Card/Navbar ជាក់លាក់។' }, isCorrect: true },
          { id: '2', text: { en: 'Only inside <script> tags.', km: 'បានតែខាងក្នុង <script> ប៉ុណ្ណោះ។' }, isCorrect: false }
        ],
        explanation: {
          en: 'Bootstrap color modes support both global scoping (`html`) and component-level scoping.',
          km: 'Color modes អាចកំណត់លើទំព័រទាំងមូល ឬលើ Component ជាក់លាក់បាន។'
        }
      }
    ]
  }
];
