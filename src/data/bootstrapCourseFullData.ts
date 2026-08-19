import { FrontendCourse } from '../types/frontendClass';
import { BOOTSTRAP_LESSONS_PART1 } from './bootstrapLessonsPart1';
import { BOOTSTRAP_LESSONS_PART2 } from './bootstrapLessonsPart2';

export const BOOTSTRAP_COURSE_DATA: FrontendCourse = {
  id: 'bootstrap',
  title: {
    en: 'Bootstrap 5 Course',
    km: 'វគ្គសិក្សា Bootstrap 5'
  },
  iconName: 'bootstrap',
  categoryId: 'styling',
  difficulty: 'Beginner',
  shortDescription: {
    en: 'Learn Bootstrap 5 pre-built components, 12-column flexbox grid, forms, navbars, modals, cards, and dark theme.',
    km: 'រៀន Bootstrap 5 ស្ទាត់ជំនាញ៖ 12-Column Grid System, Pre-built Components, Navbars, Cards, Modals, និង Dark Mode!'
  },
  summary: {
    en: 'Bootstrap 5 is a mobile-first component-based CSS framework. In this course, you will build fully responsive websites using Bootstrap 12-column grid system, form controls, navbars, modals, cards, alerts, and CSS custom property themes. Prerequisite: HTML & CSS Course. Note: Unlike Tailwind, Bootstrap provides pre-built styled components.',
    km: 'Bootstrap 5 គឺជា Component-Based CSS Framework ដែលមានលក្ខណៈ Responsive រួចស្រេច ជួយឲ្យសាងសង់គេហទំព័របានលឿន ដោយប្រើ Grid System និង Components ដែលបានរៀបចំរួច។ តម្រូវការជាមុន៖ HTML & CSS Course។ ខុសពី Tailwind, Bootstrap ផ្តល់ជូន Components ដែលរួចរាល់ស្រាប់ (Pre-built)។'
  },
  estimatedHours: 15,
  lessonCount: 30,
  
  // Quick Reference Cheat Sheet
  cheatSheet: [
    {
      concept: 'Grid Containers & Layout',
      code: `.container          /* Fixed width responsive container */
.container-fluid    /* 100% full width container */
.row                /* Grid row wrapper */
.col-12 .col-md-6   /* 12 cols on mobile, 6 cols on tablet */
.g-3 / .g-4         /* Grid gutters (gap spacing) */
.row-cols-md-3      /* Force 3 columns per row on tablet */`,
      explanation: {
        en: 'Grid system divides layouts into 12 columns per row with responsive breakpoint prefixes.',
        km: 'ប្រព័ន្ធ Grid ចែកទំព័រជា 12 Columns ក្នុងមួយ Row ជាមួយ Prefix តាមទំហំអេក្រង់។'
      }
    },
    {
      concept: 'Buttons & Variants',
      code: `.btn .btn-primary        /* Primary solid button */
.btn .btn-outline-danger /* Red outline button */
.btn-lg / .btn-sm        /* Button sizing options */
.rounded-pill            /* Capsule rounded button */
disabled                 /* Disabled state attribute */`,
      explanation: {
        en: 'Button styling requires base `.btn` combined with variant and sizing classes.',
        km: 'គ្រប់ Button ទាំងអស់ត្រូវមាន class `.btn` បូកជាមួយ Variant ពណ៌ និងទំហំ។'
      }
    },
    {
      concept: 'Cards & Content Containers',
      code: `<div class="card shadow border-0 h-100">
  <img class="card-img-top" src="...">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
  <div class="card-footer">Footer</div>
</div>`,
      explanation: {
        en: 'Cards encapsulate images, titles, body content, and action footers into unified blocks.',
        km: 'Cards ក្ដោបរូបភាព ចំណងជើង អត្ថបទ និងផ្នែកខាងក្រោមជាប្រអប់តែមួយ។'
      }
    },
    {
      concept: 'Navbar Navigation',
      code: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand">Logo</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">...</div>
  </div>
</nav>`,
      explanation: {
        en: 'Responsive navbars expand on desktop and collapse into hamburger buttons on mobile.',
        km: 'Navbar បង្ហាញជួរដេកលើ Desktop និងបង្រួមក្នុង Hamburger Icon លើទូរស័ព្ទដៃ។'
      }
    },
    {
      concept: 'Modals & Dialog Popups',
      code: `<button data-bs-toggle="modal" data-bs-target="#myModal">Open</button>
<div class="modal fade" id="myModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header"><button class="btn-close" data-bs-dismiss="modal"></button></div>
      <div class="modal-body">...</div>
    </div>
  </div>
</div>`,
      explanation: {
        en: 'Modals overlay dialogs on the page, toggled via data-bs-toggle and data-bs-target.',
        km: 'Modals គឺជាផ្ទាំង Pop-up លើអេក្រង់ដែលបញ្ជាដោយ Attribute data-bs-toggle។'
      }
    },
    {
      concept: 'Forms & Validation States',
      code: `.form-control        /* Input text formatting */
.form-select         /* Dropdown menu formatting */
.form-label          /* Label text styling */
.is-valid            /* Green valid input state */
.is-invalid          /* Red error input state */
.invalid-feedback    /* Error message text container */`,
      explanation: {
        en: 'Form controls handle inputs and visual error validation feedback.',
        km: 'Form controls ផ្តល់ស្ទីលលើ Input និងបង្ហាញសារ Error Validation។'
      }
    },
    {
      concept: 'Flexbox & Visibility Utilities',
      code: `.d-flex .align-items-center .justify-content-between
.d-none .d-md-block   /* Hide on mobile, show on tablet */
.d-none .d-lg-flex    /* Hide on mobile, flex on desktop */
.text-center .fw-bold .text-primary .bg-dark
data-bs-theme="dark"  /* Native Bootstrap 5 Dark Mode */`,
      explanation: {
        en: 'Flexbox, responsive display visibility, and dark mode theme switching utilities.',
        km: 'Flexbox, ការលាក់/បង្ហាញតាមទំហំអេក្រង់ និងការបើក Dark Mode ស្វ័យប្រវត្តិ។'
      }
    },
    {
      concept: 'Common Mistakes to Avoid',
      code: `❌ Forgetting container -> row -> col hierarchy order
❌ Missing bootstrap.bundle.min.js for modals/dropdowns/toggler
❌ Using outdated Bootstrap 4 classes (mr-3, ml-3 instead of me-3, ms-3)
❌ Overriding Bootstrap styles with !important instead of CSS variables
❌ Placing col elements directly inside container without a row wrapper`,
      explanation: {
        en: 'Key pitfalls to watch for when building responsive Bootstrap 5 applications.',
        km: 'កំហុសឆ្គងទូទៅដែលត្រូវប្រយ័ត្នពេលសរសេរ Bootstrap 5។'
      }
    }
  ],

  // Course Quiz Questions
  quiz: [
    {
      id: 'q-bs-course-1',
      question: {
        en: 'What is the primary role of Bootstrap 5 in web development?',
        km: 'តើអ្វីជាតួនាទីចម្បងរបស់ Bootstrap 5 ក្នុងការសរសេរគេហទំព័រ?'
      },
      options: [
        { id: '1', text: { en: 'A mobile-first front-end CSS framework with pre-built responsive components.', km: 'ជា Mobile-First CSS Framework ដែលមាន Pre-built Components ស្រាប់ៗ។' }, isCorrect: true },
        { id: '2', text: { en: 'A database server for storing SQL records.', km: 'ជា Database Server សម្រាប់រក្សាទុកទិន្នន័យ។' }, isCorrect: false },
        { id: '3', text: { en: 'A compiler for Python scripts.', km: 'ជា Compiler សម្រាប់រត់ Python scripts។' }, isCorrect: false }
      ],
      explanation: {
        en: 'Bootstrap provides a responsive grid system and styled pre-built UI components.',
        km: 'Bootstrap ផ្តល់ Grid system និង Pre-built UI components ស្រាប់ៗ។'
      }
    },
    {
      id: 'q-bs-course-2',
      question: {
        en: 'Which HTML element hierarchy MUST be respected when using Bootstrap grid system?',
        km: 'តើលំដាប់លំដោយ Element មួយណាដែលត្រូវអនុវត្តជានិច្ចក្នុង Bootstrap grid system?'
      },
      options: [
        { id: '1', text: { en: 'container -> row -> col', km: 'container -> row -> col' }, isCorrect: true },
        { id: '2', text: { en: 'col -> row -> container', km: 'col -> row -> container' }, isCorrect: false },
        { id: '3', text: { en: 'row -> container -> col', km: 'row -> container -> col' }, isCorrect: false }
      ],
      explanation: {
        en: 'Columns (`col`) must always be inside a `row` inside a `container`.',
        km: '`col` ត្រូវតែស្ថិតក្នុង `row` ខាងក្នុង `container` ជានិច្ច។'
      }
    },
    {
      id: 'q-bs-course-3',
      question: {
        en: 'How many grid columns exist per row in Bootstrap?',
        km: 'តើប្រព័ន្ធ Grid របស់ Bootstrap ចែកទំព័រជាប៉ុន្មាន Columns ក្នុងមួយ Row?'
      },
      options: [
        { id: '1', text: { en: '12 Columns', km: '12 Columns' }, isCorrect: true },
        { id: '2', text: { en: '10 Columns', km: '10 Columns' }, isCorrect: false },
        { id: '3', text: { en: '16 Columns', km: '16 Columns' }, isCorrect: false }
      ],
      explanation: {
        en: 'Bootstrap grid system is based on 12 flexible columns.',
        km: 'Bootstrap grid ផ្អែកលើ 12 Columns។'
      }
    },
    {
      id: 'q-bs-course-4',
      question: {
        en: 'Which class combination creates a red outline button in Bootstrap?',
        km: 'តើ Class មួយណាដែលបង្កើត ប៊ូតុង Outline ពណ៌ក្រហម?'
      },
      options: [
        { id: '1', text: { en: 'btn btn-outline-danger', km: 'btn btn-outline-danger' }, isCorrect: true },
        { id: '2', text: { en: 'button-danger-border', km: 'button-danger-border' }, isCorrect: false },
        { id: '3', text: { en: 'btn-red-outline', km: 'btn-red-outline' }, isCorrect: false }
      ],
      explanation: {
        en: 'Combine `.btn` with `.btn-outline-danger` for red outline buttons.',
        km: 'រួមបញ្ចូល `.btn` និង `.btn-outline-danger`។'
      }
    },
    {
      id: 'q-bs-course-5',
      question: {
        en: 'Which script file is required for interactive modals, dropdowns, and navbar togglers to function?',
        km: 'តើ Script មួយណាដែលចាំបាច់សម្រាប់ឲ្យ Modals, Dropdowns, និង Navbars ដំណើការ?'
      },
      options: [
        { id: '1', text: { en: 'bootstrap.bundle.min.js', km: 'bootstrap.bundle.min.js' }, isCorrect: true },
        { id: '2', text: { en: 'jquery.min.js', km: 'jquery.min.js' }, isCorrect: false },
        { id: '3', text: { en: 'bootstrap.css', km: 'bootstrap.css' }, isCorrect: false }
      ],
      explanation: {
        en: '`bootstrap.bundle.min.js` includes Bootstrap JavaScript logic and Popper.js.',
        km: '`bootstrap.bundle.min.js` រាប់បញ្ចូលទាំង Popper.js សម្រាប់ Interactive elements។'
      }
    },
    {
      id: 'q-bs-course-6',
      question: {
        en: 'How will `<div class="col-12 col-md-6 col-lg-3">` render across viewport sizes?',
        km: 'តើ `<div class="col-12 col-md-6 col-lg-3">` នឹងបង្ហាញរូបរាងដូចម្តេចលើអេក្រង់ផ្សេងៗ?'
      },
      options: [
        { id: '1', text: { en: 'Full width on mobile, 2 columns on tablet, 4 columns on desktop.', km: '100% លើ Mobile, 2 Columns លើ Tablet, 4 Columns លើ Desktop។' }, isCorrect: true },
        { id: '2', text: { en: '4 columns on all screen sizes.', km: '4 columns លើគ្រប់ទំហំអេក្រង់ទាំងអស់។' }, isCorrect: false }
      ],
      explanation: {
        en: '`col-12` is 100% on mobile, `col-md-6` is 50% on tablet, `col-lg-3` is 25% on desktop.',
        km: '`col-12` យកពេញលើ mobile, `col-md-6` យកកន្លះលើ tablet, `col-lg-3` យកមួយភាគបួនលើ desktop។'
      }
    },
    {
      id: 'q-bs-course-7',
      question: {
        en: 'Which HTML attribute enables Bootstrap 5.3 native dark mode document-wide?',
        km: 'តើ HTML Attribute មួយណាដែលបើក Native Dark Mode ក្នុង Bootstrap 5.3+?'
      },
      options: [
        { id: '1', text: { en: 'data-bs-theme="dark"', km: 'data-bs-theme="dark"' }, isCorrect: true },
        { id: '2', text: { en: 'class="dark-mode"', km: 'class="dark-mode"' }, isCorrect: false },
        { id: '3', text: { en: 'theme="black"', km: 'theme="black"' }, isCorrect: false }
      ],
      explanation: {
        en: '`data-bs-theme="dark"` automatically recolors Bootstrap components in dark theme.',
        km: '`data-bs-theme="dark"` កែប្រែពណ៌សមាសភាគទាំងអស់ទៅជា Dark Mode។'
      }
    },
    {
      id: 'q-bs-course-8',
      question: {
        en: 'Which class renders input borders in red to indicate a form error in Bootstrap?',
        km: 'តើ Class មួយណាដែលបង្ហាញ រង្វង់ក្រហមជុំវិញ Input ដើមបីបញ្ជាក់សារ Error?'
      },
      options: [
        { id: '1', text: { en: '.is-invalid', km: '.is-invalid' }, isCorrect: true },
        { id: '2', text: { en: '.is-valid', km: '.is-valid' }, isCorrect: false },
        { id: '3', text: { en: '.has-error', km: '.has-error' }, isCorrect: false }
      ],
      explanation: {
        en: '`.is-invalid` applies red error borders and icons to form controls.',
        km: '`.is-invalid` បង្ហាញ Border ក្រហម និង Icon Error លើ Input។'
      }
    },
    {
      id: 'q-bs-course-9',
      question: {
        en: 'Which class forces cards inside a grid row to match equal 100% heights?',
        km: 'តើ Class មួយណាដែលបង្ខំឲ្យ Card ក្នុង Grid មានកម្ពស់ស្មើគ្នា 100%?'
      },
      options: [
        { id: '1', text: { en: '.h-100', km: '.h-100' }, isCorrect: true },
        { id: '2', text: { en: '.equal-height', km: '.equal-height' }, isCorrect: false },
        { id: '3', text: { en: '.card-stretch', km: '.card-stretch' }, isCorrect: false }
      ],
      explanation: {
        en: 'Adding `.h-100` to `.card` stretches it to fill the grid column container.',
        km: 'ការបន្ថែម `.h-100` លើ Card ជួយឲ្យវាពង្រីកកម្ពស់ពេញ Column។'
      }
    },
    {
      id: 'q-bs-course-10',
      question: {
        en: 'What class creates the mobile hamburger button inside a responsive Bootstrap navbar?',
        km: 'តើ Class មួយណាសម្រាប់បង្កើត ប៊ូតុង Hamburger Icon លើទូរស័ព្ទ?'
      },
      options: [
        { id: '1', text: { en: '.navbar-toggler', km: '.navbar-toggler' }, isCorrect: true },
        { id: '2', text: { en: '.nav-mobile-btn', km: '.nav-mobile-btn' }, isCorrect: false },
        { id: '3', text: { en: '.menu-toggle', km: '.menu-toggle' }, isCorrect: false }
      ],
      explanation: {
        en: '`.navbar-toggler` renders the button framing the `.navbar-toggler-icon`.',
        km: '`.navbar-toggler` បង្កើតប៊ូតុងក្ដោប Hamburger Icon លើ Mobile Navbar។'
      }
    }
  ],

  // Capstone Project
  capstoneProject: {
    title: {
      en: 'Responsive Business Landing Page with Bootstrap 5',
      km: 'គម្រោង Landing Page អាជីវកម្មជាមួយ Bootstrap 5 Components'
    },
    description: {
      en: 'Build a production-ready marketing landing page! Combine a sticky responsive navbar with mobile hamburger toggler, a hero grid section, a 3-column equal-height feature section, a pricing plan comparison, a contact form with input group addons, and a modal sign-up dialog.',
      km: 'សាងសង់គេហទំព័រអាជីវកម្ម (Landing Page) ដោយប្រើប្រាស់ Bootstrap 5៖ រួមបញ្ចូល Responsive Sticky Navbar, Hero Grid Section, 3-Column Feature Cards, Pricing Comparison Table, Contact Form, និង Modal Sign-Up Popup!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km" data-bs-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap 5 Pro Landing Page</title>
  <!-- Bootstrap 5 CSS CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-body-tertiary">

  <!-- 1. Sticky Responsive Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold text-warning fs-4" href="#">⚡ TechHub Pro</a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#landingNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="landingNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item"><a class="nav-link active" href="#hero">ទំព័រដើម</a></li>
          <li class="nav-item"><a class="nav-link" href="#features">លក្ខណៈពិសេស</a></li>
          <li class="nav-item"><a class="nav-link" href="#pricing">តម្លៃសេវា</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">ទំនាក់ទំនង</a></li>
        </ul>
        <button class="btn btn-warning font-bold rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#signupModal">
          Sign Up Free
        </button>
      </div>
    </div>
  </nav>

  <!-- 2. Hero Section with Grid -->
  <section id="hero" class="bg-dark text-white py-5 border-bottom border-secondary">
    <div class="container py-4">
      <div class="row align-items-center g-4">
        <div class="col-lg-7">
          <span class="badge bg-warning text-dark font-bold mb-2 px-3 py-2 rounded-pill">BOOTSTRAP 5 POWERED</span>
          <h1 class="display-4 fw-bold mb-3">សាងសង់គេហទំព័រ Responsive យ៉ាងលឿនរហ័ស</h1>
          <p class="lead text-secondary mb-4">
            រៀននិងអនុវត្តបង្កើតគេហទំព័រអាជីវកម្មទំនើប ដោយប្រើប្រាស់ប្រព័ន្ធ 12-Column Grid និង Pre-built UI Components។
          </p>
          <div class="d-flex flex-wrap gap-3">
            <button class="btn btn-warning btn-lg font-bold px-4 rounded-3 shadow" data-bs-toggle="modal" data-bs-target="#signupModal">
              ចាប់ផ្តើមឥឡូវនេះ
            </button>
            <a href="#pricing" class="btn btn-outline-light btn-lg px-4 rounded-3">
              មើលតម្លៃសេវា
            </a>
          </div>
        </div>
        <div class="col-lg-5 text-center">
          <div class="p-5 bg-secondary bg-gradient text-white rounded-4 shadow-lg border border-light">
            <h2 class="display-1 fw-bold text-warning mb-0">B5</h2>
            <p class="fs-5 fw-bold mb-0">Bootstrap 5 Component Engine</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. Features Section (Equal Height Cards) -->
  <section id="features" class="py-5">
    <div class="container py-4">
      <div class="text-center max-w-xl mx-auto mb-5">
        <h2 class="fw-bold text-dark">លក្ខណៈពិសេសចម្បង (Features)</h2>
        <p class="text-secondary">ហេតុអ្វីបានជាអ្នកអភិវឌ្ឍន៍រាប់លាននាក់ជ្រើសរើស Bootstrap 5?</p>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100 shadow-sm border-0 rounded-4 p-3 bg-white">
            <div class="card-body text-center">
              <div class="fs-1 text-warning mb-2">⚡</div>
              <h5 class="card-title fw-bold">12-Column Grid</h5>
              <p class="card-text text-secondary">
                រៀបចំទំព័រគេហទំព័រឲ្យសមរម្យលើគ្រប់ទំហំអេក្រង់ទូរស័ព្ទ និងកុំព្យូទ័រ។
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 shadow-sm border-0 rounded-4 p-3 bg-white">
            <div class="card-body text-center">
              <div class="fs-1 text-primary mb-2">🎨</div>
              <h5 class="card-title fw-bold">Pre-built UI</h5>
              <p class="card-text text-secondary">
                មានប៊ូតុង, Navbars, Cards, Modals, និង Badges ស្រាប់ៗប្រើប្រាស់ភ្លាមៗ។
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 shadow-sm border-0 rounded-4 p-3 bg-white">
            <div class="card-body text-center">
              <div class="fs-1 text-success mb-2">🌙</div>
              <h5 class="card-title fw-bold">Native Dark Mode</h5>
              <p class="card-text text-secondary">
                ទ្រទ្រង់ Dark Mode ស្វ័យប្រវត្តិដោយប្រើប្រាស់ data-bs-theme="dark"។
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. Pricing Comparison Section -->
  <section id="pricing" class="py-5 bg-light border-top">
    <div class="container py-4">
      <div class="text-center mb-5">
        <h2 class="fw-bold text-dark">កញ្ចប់តម្លៃសេវា (Pricing Plans)</h2>
        <p class="text-secondary">ជ្រើសរើសកញ្ចប់ដែលសាកសមសម្រាប់ក្រុមការងាររបស់អ្នក</p>
      </div>

      <div class="row row-cols-1 row-cols-md-2 g-4 max-w-3xl mx-auto">
        <!-- Starter Plan -->
        <div class="col">
          <div class="card h-100 shadow-sm border-0 rounded-4 text-center">
            <div class="card-header bg-white py-3">
              <h4 class="fw-bold mb-0 text-dark">STARTER</h4>
            </div>
            <div class="card-body p-4">
              <h1 class="display-5 fw-bold text-dark">$0<span class="fs-6 text-muted">/ខែ</span></h1>
              <p class="text-secondary mb-4">សម្រាប់អ្នកចាប់ផ្តើមដំបូង</p>
              <ul class="list-unstyled text-start space-y-2 mb-4">
                <li>✅ មេរៀនគ្រឹះ Bootstrap 5</li>
                <li>✅ សាកល្បងកូដក្នុង Browser</li>
                <li>❌ គ្មាន Capstone Feedback</li>
              </ul>
              <button class="btn btn-outline-dark w-100 font-bold" data-bs-toggle="modal" data-bs-target="#signupModal">
                ចាប់ផ្តើមដោយឥតគិតថ្លៃ
              </button>
            </div>
          </div>
        </div>

        <!-- Pro Plan -->
        <div class="col">
          <div class="card h-100 shadow border-2 border-warning rounded-4 text-center">
            <div class="card-header bg-warning text-dark py-3">
              <span class="badge bg-dark text-white font-bold mb-1">RECOMMENDED</span>
              <h4 class="fw-bold mb-0">PRO DEV</h4>
            </div>
            <div class="card-body p-4">
              <h1 class="display-5 fw-bold text-dark">$19<span class="fs-6 text-muted">/ខែ</span></h1>
              <p class="text-secondary mb-4">សម្រាប់អ្នកអភិវឌ្ឍន៍អាជីព</p>
              <ul class="list-unstyled text-start space-y-2 mb-4">
                <li>✅ ទទួលបានវគ្គសិក្សាទាំងអស់</li>
                <li>✅ គម្រោង Real-World Capstone</li>
                <li>✅ ទទួលបាន Certificate រួចរាល់</li>
              </ul>
              <button class="btn btn-warning w-100 font-bold shadow-sm" data-bs-toggle="modal" data-bs-target="#signupModal">
                ជាវកញ្ចប់ Pro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. Contact Form Section -->
  <section id="contact" class="py-5 bg-white">
    <div class="container py-4 max-w-lg mx-auto">
      <div class="text-center mb-4">
        <h3 class="fw-bold text-dark">ទំនាក់ទំនងមកយើងខ្ញុំ (Contact Us)</h3>
        <p class="text-secondary">មានសំណួរផ្សេងៗ? ផ្ញើសារមកកាន់យើងខ្ញុំឥឡូវនេះ!</p>
      </div>

      <form class="space-y-3">
        <div class="mb-3">
          <label class="form-label fw-bold">ឈ្មោះពេញ</label>
          <input type="text" class="form-control" placeholder="ឧ. សុខ ជា">
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold">អាសយដ្ឋានអ៊ីមែល</label>
          <div class="input-group">
            <span class="input-group-text">@</span>
            <input type="email" class="form-control" placeholder="username">
            <span class="input-group-text">.com</span>
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold">សាររបស់អ្នក</label>
          <textarea class="form-control" rows="4" placeholder="សរសេរសារនៅទីនេះ..."></textarea>
        </div>

        <button type="button" class="btn btn-dark w-100 font-bold py-2 shadow-sm">
          ✉️ ផ្ញើសារ (Send Message)
        </button>
      </form>
    </div>
  </section>

  <!-- 6. Footer -->
  <footer class="bg-dark text-white-50 py-4 border-top border-secondary text-center">
    <div class="container">
      <p class="mb-0 text-xs">© 2026 SabayCode. Built with Bootstrap 5.3 Framework.</p>
    </div>
  </footer>

  <!-- 7. Sign Up Modal Dialog -->
  <div class="modal fade" id="signupModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title fw-bold">🚀 ចុះឈ្មោះគណនីឥតគិតថ្លៃ</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body p-4">
          <form class="space-y-3">
            <div class="mb-3 text-start">
              <label class="form-label fw-bold">អ៊ីមែល</label>
              <input type="email" class="form-control" placeholder="you@example.com">
            </div>
            <div class="mb-3 text-start">
              <label class="form-label fw-bold">ពាក្យសម្ងាត់</label>
              <input type="password" class="form-control" placeholder="••••••••">
            </div>
            <button type="button" class="btn btn-warning w-100 font-bold py-2">
              បង្កើតគណនីភ្លាមៗ
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>

  <!-- Bootstrap 5 JS Bundle -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    }
  },

  // Combine Part 1 and Part 2 Lessons
  lessons: [
    ...BOOTSTRAP_LESSONS_PART1,
    ...BOOTSTRAP_LESSONS_PART2
  ]
};
