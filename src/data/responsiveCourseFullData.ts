import { FrontendCourse } from '../types/frontendClass';

export const RESPONSIVE_COURSE_DATA: FrontendCourse = {
  id: 'responsive',
  title: {
    en: 'Responsive Web Design Course',
    km: 'វគ្គសិក្សា Responsive Web Design'
  },
  iconName: 'responsive',
  categoryId: 'quality',
  difficulty: 'Beginner',
  shortDescription: {
    en: 'Master fluid grids, relative units, mobile-first media queries, responsive typography with clamp(), srcset/picture element, and multi-device debugging.',
    km: 'ស្ទាត់ជំនាញ Fluid Grids, Relative Units, Mobile-First Media Queries, Responsive Typography clamp(), srcset/picture, និងការ Debug លើទូរស័ព្ទ/កុំព្យូទ័រ។'
  },
  summary: {
    en: 'Responsive Web Design គឺជាបច្ចេកទេសរចនា Website ដើម្បីឲ្យ Layout អាច Adapt ខ្លួនទៅតាមទំហំអេក្រង់ផ្សេងៗ ចាប់ពី Mobile Phone រហូតដល់ Desktop ធំៗ ដោយប្រើប្រាស់ Media Queries, Flexible Grid, និង Responsive Images ។\n\n📌 តម្រូវការជាមុន៖ HTML5 Course និង CSS/Sass Course (ណែនាំ) — ជំនាញនេះជាគ្រឹះស្ពានអាកាសដែលត្រូវអនុវត្តបន្ថែមលើគ្រប់វគ្គសិក្សាទាំងអស់ មិនថា Plain CSS, Tailwind, Bootstrap, ឬ Framework ផ្សេងៗ។',
    km: 'Responsive Web Design គឺជាបច្ចេកទេសរចនា Website ដើម្បីឲ្យ Layout អាច Adapt ខ្លួនទៅតាមទំហំអេក្រង់ផ្សេងៗ ចាប់ពី Mobile Phone រហូតដល់ Desktop ធំៗ ដោយប្រើប្រាស់ Media Queries, Flexible Grid, និង Responsive Images ។\n\n📌 តម្រូវការជាមុន៖ HTML5 Course និង CSS/Sass Course (ណែនាំ) — ជំនាញនេះជាគ្រឹះស្ពានអាកាសដែលត្រូវអនុវត្តបន្ថែមលើគ្រប់វគ្គសិក្សាទាំងអស់ មិនថា Plain CSS, Tailwind, Bootstrap, ឬ Framework ផ្សេងៗ។'
  },
  estimatedHours: 5,
  lessonCount: 19,
  cheatSheet: [
    {
      concept: 'Viewport Meta Tag (Required)',
      code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      explanation: {
        en: 'Essential one-line html tag inside <head> that forces mobile browsers to render at actual screen device width without zooming out.',
        km: 'Tag សំខាន់បំផុតក្នុង <head> ដែលបង្ខំឱ្យ Mobile Browser បង្ហាញទំហំ Layout ស្មើនឹងអេក្រង់ទូរស័ព្ទពិតប្រាកដ ដោយមិន Zoom out តូចស្ទើរមើលមិនឃើញឡើយ។'
      }
    },
    {
      concept: 'CSS Units Decision Matrix',
      code: 'px: Fixed borders, fine shadows, offset limits\nrem: Font sizes, padding/margin based on root font (16px default)\nem: Padding relative to current element font-size (buttons, badges)\n%: Flexible layout widths and container columns\nvw/vh: Viewport width and full-screen hero section heights',
      explanation: {
        en: 'Guidelines on choosing between absolute (px) vs relative (rem, em, %, vw, vh) units.',
        km: 'គោលការណ៍ណែនាំក្នុងការជ្រើសរើស Unit អាប់សូលុត (px) ឬ Relative (rem, em, %, vw, vh) តាមស្ថានភាពប្រើប្រាស់។'
      }
    },
    {
      concept: 'Mobile-First vs Desktop-First Media Queries',
      code: '/* ✅ Mobile-First (Recommended) */\n.card { width: 100%; }\n@media (min-width: 768px) { .card { width: 50%; } }\n\n/* ❌ Desktop-First (Legacy) */\n.card { width: 50%; }\n@media (max-width: 767px) { .card { width: 100%; } }',
      explanation: {
        en: 'Mobile-First uses min-width to build base styles for small screens then adds rules as screen grows wider.',
        km: 'Mobile-First ប្រើ min-width ដើម្បីសរសេរ Style មូលដ្ឋានសម្រាប់ Mobile ជាមុន រួចបន្ថែម Style សម្រាប់ Tablet/Desktop តាមក្រោយ។'
      }
    },
    {
      concept: 'Fluid Typography with clamp()',
      code: 'h1 {\n  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);\n}',
      explanation: {
        en: 'clamp(min, preferred, max) scales typography smoothly across viewports without extra media queries.',
        km: 'clamp(min, preferred, max) ធ្វើឱ្យអក្សររីករួញតាមទំហំអេក្រង់ដោយស្វ័យប្រវត្តិ ដោយមិនបាច់សរសេរ Media Query ច្រើនឡើយ។'
      }
    },
    {
      concept: 'CSS Grid Auto-Fit Reflow',
      code: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n}',
      explanation: {
        en: 'Creates a dynamic column layout that wraps cards automatically depending on container width.',
        km: 'បង្កើត Grid Column ដែលផ្លាស់ប្តូរចំនួនជួរឈរដោយស្វ័យប្រវត្តិទៅតាមទំហំអេក្រង់ដែលមាន។'
      }
    },
    {
      concept: 'Responsive Image & Art Direction',
      code: '/* Baseline */ img { max-width: 100%; height: auto; }\n\n/* Resolution switching */\n<img src="small.jpg" srcset="small.jpg 400w, large.jpg 1200w" sizes="(max-width: 768px) 100vw, 50vw" alt="Banner">\n\n/* Art Direction */\n<picture>\n  <source media="(min-width: 1024px)" srcset="desktop-banner.jpg">\n  <source media="(min-width: 640px)" srcset="tablet-banner.jpg">\n  <img src="mobile-banner.jpg" alt="Hero">\n</picture>',
      explanation: {
        en: 'srcset switches resolution for retina/bandwidth efficiency; <picture> allows cropping or format changes.',
        km: 'srcset ប្តូរ Resolution តាមអេក្រង់; <picture> ប្រើសម្រាប់ Art Direction ប្តូរទម្រង់/Crop រូបភាពខុសគ្នាស្រឡះលើ Mobile/Desktop។'
      }
    },
    {
      concept: '❌ Common Mistake 1: Fixed Pixel Container Widths',
      code: '/* ❌ BAD */  .wrapper { width: 1200px; }\n/* ✅ GOOD */ .wrapper { width: 100%; max-width: 1200px; margin: 0 auto; }',
      explanation: {
        en: 'Fixed width hardcoding causes horizontal scrolling and breaks layouts on mobile phones.',
        km: 'ការដាក់ width ជា pixel ថេរ ធ្វើឱ្យអេក្រង់ទូរស័ព្ទលេចលៀនចេញក្រៅ (Horizontal Scrollbar) និងខូច Layout។'
      }
    },
    {
      concept: '❌ Common Mistake 2: Missing max-width on Images',
      code: '/* ❌ BAD */  img { width: 800px; }\n/* ✅ GOOD */ img { max-width: 100%; height: auto; }',
      explanation: {
        en: 'Unconstrained images overflow their cards or containers on small screens.',
        km: 'រូបភាពគ្មាន max-width: 100% នឹងលៀនចេញក្រៅ Card ឬ Container ពេលបើកលើអេក្រង់តូច។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-resp-1',
      question: {
        en: 'Which HTML meta tag is strictly required in <head> for responsive layout scaling on mobile devices?',
        km: 'តើ Meta tag មួយណាដែលតម្រូវឱ្យមានជាចាំបាច់ក្នុង <head> ដើម្បីឱ្យ Layout ឆ្លើយតបត្រូវទំហំលើ Mobile?'
      },
      options: [
        { id: '1', text: { en: '<meta name="viewport" content="width=device-width, initial-scale=1.0">', km: '<meta name="viewport" content="width=device-width, initial-scale=1.0">' }, isCorrect: true },
        { id: '2', text: { en: '<meta name="responsive" content="true">', km: '<meta name="responsive" content="true">' }, isCorrect: false },
        { id: '3', text: { en: '<meta name="screen-size" content="auto">', km: '<meta name="screen-size" content="auto">' }, isCorrect: false },
        { id: '4', text: { en: '<meta name="mobile-optimized" content="desktop">', km: '<meta name="mobile-optimized" content="desktop">' }, isCorrect: false }
      ],
      explanation: {
        en: 'The viewport meta tag tells mobile browsers to scale the CSS layout canvas width to match the physical device width instead of defaulting to a 980px simulated desktop view.',
        km: 'Viewport meta tag ប្រាប់ Browser លើ Mobile ឱ្យកំណត់ Canvas Width ស្មើនឹងទំហំអេក្រង់ឧបករណ៍ពិតប្រាកដ។'
      }
    },
    {
      id: 'q-resp-2',
      question: {
        en: 'Why is a Mobile-First approach with min-width media queries preferred over Desktop-First?',
        km: 'ហេតុអ្វីបានជាគេនិយមប្រើវិធីសាស្ត្រ Mobile-First (min-width) ជាង Desktop-First (max-width)?'
      },
      options: [
        { id: '1', text: { en: 'Mobile devices are slower, so keeping base styles lightweight speeds up initial page load on phones', km: 'ទូរស័ព្ទមាន Internet/Performance ខ្សោយជាង ដូច្នេះការសរសេរ Base Style ស្រាលសម្រាប់ Mobile ជួយឱ្យ Load លឿន' }, isCorrect: true },
        { id: '2', text: { en: 'Desktop screens cannot process CSS media queries with min-width', km: 'អេក្រង់ Desktop មិនអាចរត់ Media Query min-width បានទេ' }, isCorrect: false },
        { id: '3', text: { en: 'Mobile-First replaces the need for CSS Grid and Flexbox', km: 'Mobile-First ជំនួសការប្រើប្រាស់ CSS Grid និង Flexbox' }, isCorrect: false },
        { id: '4', text: { en: 'Desktop-First was deprecated in CSS3 specifications', km: 'Desktop-First ត្រូវបានលុបចេញពី CSS3' }, isCorrect: false }
      ],
      explanation: {
        en: 'Mobile-First loads essential base styles first for performance-constrained mobile clients, then progressively enhances layout as viewport width increases.',
        km: 'Mobile-First ជួយឱ្យទូរស័ព្ទ Load តែ Style ចាំបាច់ដំបូង ហើយបន្ថែម Style ស្មុគស្មាញពេលបើកលើ Desktop។'
      }
    },
    {
      id: 'q-resp-3',
      question: {
        en: 'Which CSS unit scales relative to the root html element font size (usually 16px)?',
        km: 'តើ CSS unit មួយណាដែលគិតសក្ដានុពលធៀបនឹង Root html element font-size (ជាទូទៅ 16px)?'
      },
      options: [
        { id: '1', text: { en: 'rem', km: 'rem' }, isCorrect: true },
        { id: '2', text: { en: 'em', km: 'em' }, isCorrect: false },
        { id: '3', text: { en: 'vh', km: 'vh' }, isCorrect: false },
        { id: '4', text: { en: 'px', km: 'px' }, isCorrect: false }
      ],
      explanation: {
        en: '1rem equals the font size of the root element (<html>). Changing the root font size scales all rem values proportionally across the whole app.',
        km: '1rem ស្មើនឹង font-size នៃ root <html> element (ជាទូទៅ 16px)។'
      }
    },
    {
      id: 'q-resp-4',
      question: {
        en: 'Given this CSS: `@media (min-width: 768px) { .nav { flex-direction: row; } }` with `.nav { flex-direction: column; }` base style. What is the nav layout at 375px vs 1024px?',
        km: 'ពិនិត្យកូដ CSS ខាងលើ៖ តើ Layout របស់ .nav នៅទំហំ 375px និង 1024px មានទម្រង់ដូចម្តេច?'
      },
      options: [
        { id: '1', text: { en: 'At 375px: vertical column stack; At 1024px: horizontal row layout', km: 'នៅ 375px៖ រៀបតម្រៀបចុះក្រោម (Column); នៅ 1024px៖ រៀបផ្តេកជួរដេក (Row)' }, isCorrect: true },
        { id: '2', text: { en: 'At 375px: horizontal row layout; At 1024px: vertical column stack', km: 'នៅ 375px៖ រៀបផ្តេកជួរដេក; នៅ 1024px៖ រៀបតម្រៀបចុះក្រោម' }, isCorrect: false },
        { id: '3', text: { en: 'Both viewports show horizontal row layout', km: 'បង្ហាញជាជួរដេកទាំងអស់' }, isCorrect: false },
        { id: '4', text: { en: 'At 375px the navigation element is hidden entirely', km: 'នៅ 375px nav ត្រូវបាត់ខ្លួនទាំងស្រុង' }, isCorrect: false }
      ],
      explanation: {
        en: 'Since min-width: 768px is not triggered at 375px, it retains the column base style. At 1024px (which is ≥ 768px), it switches to row layout.',
        km: 'នៅ 375px (< 768px) វាប្រើ Base Style ជា column។ នៅ 1024px (≥ 768px) វាប្តូរទៅជា row។'
      }
    },
    {
      id: 'q-resp-5',
      question: {
        en: 'What does CSS Grid `repeat(auto-fit, minmax(250px, 1fr))` do when container width changes?',
        km: 'តើ CSS Grid `repeat(auto-fit, minmax(250px, 1fr))` ធ្វើការដូចម្តេចពេលទំហំ Container ប្រែប្រួល?'
      },
      options: [
        { id: '1', text: { en: 'Automatically reflows column count based on available space without needing @media queries', km: 'រៀបចំនួនជួរឈរ (Columns) ឡើងវិញដោយស្វ័យប្រវត្តិ តាមទំហំដេរ ដែលមិនបាច់ប្រើ @media queries' }, isCorrect: true },
        { id: '2', text: { en: 'Forces exactly 3 fixed columns on all screen sizes', km: 'បង្ខំឱ្យមាន ៣ ជួរឈរថេរលើគ្រប់ទំហំអេក្រង់' }, isCorrect: false },
        { id: '3', text: { en: 'Stretches all grid cards to 250vh height', km: 'ពង្រីកកម្ពស់កាតទាំងអស់ទៅ 250vh' }, isCorrect: false },
        { id: '4', text: { en: 'Converts grid items into a sliding carousel animation', km: 'បំប្លែង Grid Items ទៅជា Carousel Animation' }, isCorrect: false }
      ],
      explanation: {
        en: 'auto-fit creates as many 250px minimum columns as fit in the row, expanding remaining space with 1fr.',
        km: 'auto-fit បង្កើត Column ទំហំយ៉ាងតិច 250px តាមតែអាចល្មម រួចពង្រីកលំហទំនេរដែលសល់ស្មើៗគ្នា។'
      }
    },
    {
      id: 'q-resp-6',
      question: {
        en: 'What is the primary difference between `srcset/sizes` vs the `<picture>` HTML element for images?',
        km: 'តើអ្វីជាផលខុសគ្នាចម្បងរវាង `srcset/sizes` និង `<picture>` HTML element?'
      },
      options: [
        { id: '1', text: { en: 'srcset provides resolution switching for bandwidth/retina, while <picture> is for Art Direction (cropping/format changes per breakpoint)', km: 'srcset សម្រាប់ Resolution switching (ច្បាស់/ស្រាល); ចំណែក <picture> សម្រាប់ Art Direction (Crop រូបភាព ឬប្តូរ Format តាម Breakpoint)' }, isCorrect: true },
        { id: '2', text: { en: '<picture> works only in desktop browsers while srcset is mobile-only', km: '<picture> ដើរតែលើ Desktop ហើយ srcset ដើរតែលើ Mobile' }, isCorrect: false },
        { id: '3', text: { en: 'srcset replaces CSS background-image whereas <picture> is for SVGs', km: 'srcset ជំនួស CSS background-image ឯ <picture> សម្រាប់តែ SVG' }, isCorrect: false },
        { id: '4', text: { en: 'There is no difference; they are exact aliases in HTML5', km: 'គ្មានអ្វីខុសគ្នាទេ គឺដូចគ្នាទាំងស្រុង' }, isCorrect: false }
      ],
      explanation: {
        en: 'srcset lets the browser decide which image resolution to download based on DPR and width. <picture> gives the developer full control to specify different image crops/source files for art direction.',
        km: 'srcset ទុកឱ្យ Browser ជ្រើសរើស Resolution ដោនឡូត; <picture> ផ្តល់សិទ្ធិឱ្យ Developer កំណត់ Crop ឬរូបភាពខុសគ្នាសម្រាប់ Mobile/Desktop។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'Transform a Broken Fixed-Width Site into a Fully Responsive App',
      km: 'បំប្លែង Website ដែលមាន Fixed-Width ខូច Layout ឱ្យទៅជា Responsive 100%'
    },
    description: {
      en: 'Take a legacy fixed-pixel website (nav bar with 1000px fixed width, 3-column fixed card grid, overflowing hero image, rigid buttons) and refactor it into a mobile-first, fluidly responsive layout across mobile (~375px), tablet (~768px), and desktop (~1280px).',
      km: 'យក Website បុរាណដែលប្រើ Pixel Width ថេរ (ខូចលើ Mobile) មក Refactor សារជាថ្មីឱ្យទៅជា Mobile-First Fluid Responsive 100% លើ Mobile, Tablet និង Desktop។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Refactoring Capstone</title>
  <style>
    /* BASE FLUID STYLES */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 1rem; }

    /* FLUID CONTAINER */
    .container {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
    }

    /* RESPONSIVE HEADER */
    header {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem 0;
      border-b: 1px solid #334155;
    }
    .logo { font-size: 1.5rem; font-weight: bold; color: #38bdf8; }
    nav ul { display: flex; flex-wrap: wrap; gap: 1rem; list-style: none; }
    nav a { color: #94a3b8; text-decoration: none; font-size: 0.9rem; }

    /* FLUID HERO SECTION */
    .hero {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 2.5rem 0;
    }
    .hero-content h1 {
      font-size: clamp(1.75rem, 4vw + 1rem, 3rem);
      color: #f8fafc;
      line-height: 1.2;
    }
    .hero-content p { color: #94a3b8; margin: 1rem 0; font-size: 1rem; }
    .hero-img {
      width: 100%;
      max-width: 100%;
      height: auto;
      border-radius: 12px;
    }

    /* AUTO-FIT RESPONSIVE GRID */
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
    .card {
      background: #1e293b;
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid #334155;
    }
    .card h3 { color: #38bdf8; margin-bottom: 0.5rem; }
    .card p { color: #cbd5e1; font-size: 0.875rem; line-height: 1.5; }

    /* MEDIA QUERY BREAKPOINT (TABLET/DESKTOP) */
    @media (min-width: 768px) {
      header { flex-direction: row; justify-content: space-between; align-items: center; }
      .hero { flex-direction: row; align-items: center; }
      .hero-content { flex: 1; }
      .hero-media { flex: 1; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="logo">⚡ SabayCode App</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Account</a></li>
        </ul>
      </nav>
    </header>

    <section class="hero">
      <div class="hero-content">
        <h1>Mobile-First Responsive Layout Design</h1>
        <p>Built with fluid CSS units, auto-fit grid cards, clamp typography, and adaptive media queries.</p>
      </div>
      <div class="hero-media">
        <div style="background:#0284c7; height:200px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-weight:bold;">
          [Responsive Media Container]
        </div>
      </div>
    </section>

    <div class="cards-grid">
      <div class="card">
        <h3>1. Fluid Containers</h3>
        <p>Replaced rigid fixed pixel widths with width: 100% and max-width boundaries.</p>
      </div>
      <div class="card">
        <h3>2. Mobile-First Base</h3>
        <p>Base CSS serves mobile phones first, adding layout enhancements via min-width media queries.</p>
      </div>
      <div class="card">
        <h3>3. Dynamic Reflow</h3>
        <p>CSS Grid auto-fit minmax columns adapt card count automatically across viewports.</p>
      </div>
    </div>
  </div>
</body>
</html>`
    }
  },
  lessons: [
    // Module 1: Why Responsive Design Matters
    {
      id: 'resp-l1',
      slug: 'responsive-problem-one-codebase',
      moduleNumber: 1,
      lessonNumberInModule: 1,
      title: {
        en: 'The Problem Responsive Design Solves: One Codebase for All Screens',
        km: 'បញ្ហាដែល Responsive Design ដោះស្រាយ៖ កូដតែមួយដើរលើគ្រប់អេក្រង់'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'In early web development, companies built separate desktop sites (example.com) and dedicated mobile sites (m.example.com). Responsive Web Design (RWD) uses flexible fluid grids and media queries to serve a single codebase that smoothly adapts layout for phones, tablets, and desktops.',
        km: 'កាលពីមុន គេត្រូវបង្កើត Website ២ ដាច់ដោយឡែកពីគ្នា (Desktop site និង Mobile m.site)។ Responsive Web Design (RWD) ជួយឱ្យយើងសរសេរកូដតែមួយឈុត (One Codebase) ប៉ុន្តែអាចសម្របខ្លួនបានគ្រប់ទំហំអេក្រង់ទូរស័ព្ទ Tablet និង កុំព្យូទ័រ។'
      },
      tutorial: {
        en: 'Build flexible container layouts using max-width and percentage units instead of fixed pixel widths.',
        km: 'បង្កើត Fluid layout ដោយប្រើ max-width និង percentage % ជំនួសឱ្យការប្រើ pixel width ថេរ។'
      },
      starterCode: {
        html: `<div class="card-demo">
  <h2>Adaptive Multi-Device Card</h2>
  <p>Resize browser window width to see this layout adjust naturally.</p>
</div>`,
        css: `.card-demo {
  width: 100%;
  max-width: 600px;
  background: #1e293b;
  color: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #334155;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Card takes 100% of the mobile viewport width minus container padding, avoiding horizontal scrolling.',
            km: 'កាតពង្រីកពេញ 100% នៃអេក្រង់ទូរស័ព្ទ មិនមាន Horizontal Scrollbar លៀនចេញឡើយ។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Card expands comfortably until hitting the max-width boundary of 600px.',
            km: 'កាតពង្រីកទំហំយ៉ាងរលូនរហូតដល់ទំហំអតិបរមា 600px។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Card remains centered at exactly 600px max-width, maintaining high readability.',
            km: 'កាតត្រូវបានរក្សាទំហំនៅត្រឹម 600px max-width នៅចំកណ្តាលអេក្រង់ ងាយស្រួលអាន។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Cost Efficiency in Commercial Web Production',
          km: 'ប្រសិទ្ធភាពចំណាយក្នុងការអភិវឌ្ឍ Web'
        },
        description: {
          en: 'Serving one responsive site cuts maintenance cost in half, eliminates duplicate API integrations, and unifies SEO rankings under a single canonical domain URL.',
          km: 'ការប្រើ Responsive Website តែមួយ ជួយកាត់បន្ថយការចំណាយថែទាំកូដពាក់កណ្តាល និងបង្កើន SEO Ranking លើ Domain តែមួយ។'
        }
      },
      practiceExercise: {
        question: {
          en: 'Which CSS property combination allows a box to take full mobile width while capping its desktop size at 800px?',
          km: 'តើ CSS properties មួយណាដែលធ្វើឱ្យ Box ពង្រីកពេញ Mobile ប៉ុន្តែលាតត្រឹម 800px លើ Desktop?'
        },
        solution: 'width: 100%; max-width: 800px;'
      },
      quizQuestions: [
        {
          id: 'q-l1-1',
          question: {
            en: 'What primary problem does Responsive Web Design eliminate?',
            km: 'តើ Responsive Web Design លុបបំបាត់បញ្ហាចម្បងអ្វី?'
          },
          options: [
            { id: '1', text: { en: 'Maintaining two separate codebases for mobile and desktop sites', km: 'ការគ្រប់គ្រងកូដ ២ ផ្សេងគ្នារវាង Mobile និង Desktop' }, isCorrect: true },
            { id: '2', text: { en: 'The need to use HTML elements in web applications', km: 'តម្រូវការប្រើប្រាស់ HTML elements' }, isCorrect: false }
          ],
          explanation: {
            en: 'Responsive Web Design uses one single codebase for all device viewports.',
            km: 'RWD ប្រើប្រាស់កូដតែមួយសម្រាប់គ្រប់អេក្រង់ទាំងអស់។'
          }
        }
      ]
    },

    {
      id: 'resp-l2',
      slug: 'mobile-first-vs-desktop-first',
      moduleNumber: 1,
      lessonNumberInModule: 2,
      title: {
        en: 'Mobile-First vs Desktop-First Architectural Approaches',
        km: 'វិធីសាស្ត្រ Mobile-First និង Desktop-First'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Mobile-First writes base CSS styles for small screen phones first, then progressively enhances layout using min-width media queries as screen size grows. Desktop-First writes desktop layout first and retrofits small screens with max-width overrides. Mobile-First is the industry standard because mobile devices have strict memory, CPU, and network limits.',
        km: 'Mobile-First សរសេរ Base CSS សម្រាប់ទូរស័ព្ទមុនគេ រួចបន្ថែម Feature លើអេក្រង់ធំតាម min-width media queries។ វិធីសាស្ត្រនេះជាស្តង់ដារឧស្សាហកម្ម ព្រោះទូរស័ព្ទមានប្រព័ន្ធដំណើរការ និង Internet ត្រូវការចំណាយ Resources តិចបំផុត។'
      },
      tutorial: {
        en: 'Structure your stylesheet starting with mobile default styles, then layer `@media (min-width: 768px)` rules.',
        km: 'រៀបចំ Style ដោយចាប់ផ្តើមពី Mobile ជាដំបូង រួចសរសេរ `@media (min-width: 768px)` សម្រាប់ Tablet/Desktop។'
      },
      starterCode: {
        html: `<div class="nav-stack">
  <a href="#">Dashboard</a>
  <a href="#">Projects</a>
  <a href="#">Settings</a>
</div>`,
        css: `/* Mobile default (Stacked) */
.nav-stack {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: #0f172a;
  padding: 1rem;
}
.nav-stack a {
  color: #38bdf8;
  text-decoration: none;
  padding: 0.5rem;
}

/* Progressive enhancement for Tablet/Desktop */
@media (min-width: 640px) {
  .nav-stack {
    flex-direction: row;
    justify-content: space-around;
  }
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Base styles render a clean single-column vertical button stack easy for thumb taps.',
            km: 'បង្ហាញជា Button ជួរឈរចុះក្រោម ងាយស្រួលចុចដោយមេដៃលើទូរស័ព្ទ។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Media query min-width: 640px kicks in, transforming stack into a clean horizontal navigation bar.',
            km: 'Media query min-width: 640px ដំណើរការ និងបំប្លែងទៅជា Navigation Bar ជួរដេក។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Horizontal navbar expands evenly across header with generous line height.',
            km: 'Navigation Bar ជួរដេកពង្រីកស្មើគ្នាយ៉ាងស្អាតបាតលើ Desktop។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Mobile Performance Optimization',
          km: 'ការបង្កើនល្បឿននៅលើ Mobile'
        },
        description: {
          en: 'By making small-screen CSS the unconditioned default, smartphones download smaller initial payloads and skip parsing unused desktop background image rules.',
          km: 'ការធ្វើ Mobile-First ជួយឱ្យទូរស័ព្ទរំលងការដោនឡូតរូបភាព និង Style ស្មុគស្មាញរបស់ Desktop។'
        }
      },
      practiceExercise: {
        question: {
          en: 'Which media query breakpoint property is used when writing Mobile-First responsive CSS?',
          km: 'តើ Media Query Property មួយណាដែលត្រូវប្រើប្រាស់ក្នុង Mobile-First CSS?'
        },
        solution: '@media (min-width: ...)'
      },
      quizQuestions: [
        {
          id: 'q-l2-1',
          question: {
            en: 'Which media query type is used in Mobile-First responsive CSS?',
            km: 'តើប្រភេទ Media Query មួយណាដែលប្រើក្នុង Mobile-First?'
          },
          options: [
            { id: '1', text: { en: 'min-width', km: 'min-width' }, isCorrect: true },
            { id: '2', text: { en: 'max-width', km: 'max-width' }, isCorrect: false }
          ],
          explanation: {
            en: 'Mobile-First utilizes min-width media queries to progressively enhance styles.',
            km: 'Mobile-First ប្រើ min-width media queries ដើម្បីបន្ថែម Style លើអេក្រង់ធំ។'
          }
        }
      ]
    },

    {
      id: 'resp-l3',
      slug: 'viewport-meta-tag-necessity',
      moduleNumber: 1,
      lessonNumberInModule: 3,
      title: {
        en: 'The Viewport Meta Tag: Essential HTML Baseline for Mobile Rendering',
        km: 'Viewport Meta Tag៖ គ្រឹះ HTML ចាំបាច់បំផុតលើ Mobile'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Mobile web browsers historically render desktop websites by assuming a virtual canvas width of 980px and scaling it down, resulting in tiny illegible text. Adding `<meta name="viewport" content="width=device-width, initial-scale=1">` instructs the device to match page layout width to physical screen width.',
        km: 'តាមធម្មជាតិ Browser លើ Mobile សន្មតទំហំអេក្រង់ 980px ធ្វើឱ្យអក្សររួមតូចស្ទើរមើលមិនឃើញ។ ការដាក់ `<meta name="viewport" content="width=device-width, initial-scale=1">` បង្ខំឱ្យ Browser កំណត់ទំហំ Layout ស្មើនឹងទំហំអេក្រង់ឧបករណ៍ពិតប្រាកដ។'
      },
      tutorial: {
        en: 'Always include the viewport tag inside the HTML `<head>` element of every web project.',
        km: 'ត្រូវដាក់ Viewport Meta Tag ក្នុង `<head>` នៃគ្រប់គម្រោង HTML ជានិច្ច។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Viewport Test</title>
</head>
<body>
  <div style="background:#0284c7; color:white; padding:1rem; border-radius:8px;">
    Viewport meta tag is active! Layout matches 100% device width.
  </div>
</body>
</html>`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'With viewport tag: Text renders at readable 16px font size, fitting 375px display perfectly.',
            km: 'មាន Viewport tag៖ អក្សរបង្ហាញទំហំ 16px ច្បាស់ៗ ត្រូវនឹងទំហំ 375px នៃទូរស័ព្ទ។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Layout renders crisp 1:1 pixel mapping across tablet devices.',
            km: 'Layout បង្ហាញ Pixel រលូនស្អាត 1:1 លើ Tablet។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Desktop browser ignores mobile zoom and renders full workspace layout.',
            km: 'Desktop browser បង្ហាញទំហំអេក្រង់ពេញទំហំយ៉ាងត្រឹមត្រូវ។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Google Mobile-Friendly Indexing',
          km: 'ការឆែក Mobile-Friendly ដោយ Google'
        },
        description: {
          en: 'Google Search crawlers immediately mark pages lacking a viewport meta tag as non-mobile-friendly, heavily demoting their search result ranking.',
          km: 'Google Search នឹងដកចំណាត់ថ្នាក់ SEO ភ្លាមៗ ប្រសិនបើគេហទំព័រខ្វះ Viewport Meta Tag។'
        }
      },
      practiceExercise: {
        question: {
          en: 'Write the exact HTML snippet required in <head> for proper viewport mobile scaling.',
          km: 'សរសេរកូដ Viewport Meta Tag ឱ្យបានត្រឹមត្រូវសម្រាប់ដាក់ក្នុង <head>។'
        },
        solution: '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
      },
      quizQuestions: [
        {
          id: 'q-l3-1',
          question: {
            en: 'Where must the viewport meta tag be placed in an HTML document?',
            km: 'តើ Viewport Meta Tag ត្រូវដាក់នៅផ្នែកណានៃឯកសារ HTML?'
          },
          options: [
            { id: '1', text: { en: 'Inside the <head> element', km: 'ក្នុង <head> element' }, isCorrect: true },
            { id: '2', text: { en: 'Inside the <footer> element', km: 'ក្នុង <footer> element' }, isCorrect: false }
          ],
          explanation: {
            en: 'The viewport meta tag must reside within the <head> section.',
            km: 'Viewport Meta Tag ត្រូវតែស្ថិតនៅក្នុងផ្នែក <head>។'
          }
        }
      ]
    },

    // Module 2: Fluid Layouts & Flexible Units
    {
      id: 'resp-l4',
      slug: 'absolute-vs-relative-units',
      moduleNumber: 2,
      lessonNumberInModule: 1,
      title: {
        en: 'Absolute vs Relative Units: px vs %, em, rem, vw, and vh',
        km: 'ការប្រៀបធៀប Absolute និង Relative Units (px, %, em, rem, vw, vh)'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Absolute units like `px` have a fixed static length that cannot adapt to user accessibility font settings or screen sizes. Relative units adapt dynamically: `rem` scales with root font size (16px), `em` with parent font size, `%` with container width, and `vw`/`vh` with viewport dimensions.',
        km: 'Absolute unit ដូចជា `px` មានទំហំថេរ មិនអាចបត់បែនបានឡើយ។ Relative unit (rem, em, %, vw, vh) អាចសម្របខ្លួនតាមការកំណត់ font ឬទំហំអេក្រង់ទូរស័ព្ទបានយ៉ាងងាយស្រួល។'
      },
      tutorial: {
        en: 'Use `rem` for font sizes and margins, `%` for container widths, and `px` only for borders or subtle shadows.',
        km: 'ប្រើ `rem` សម្រាប់ font-size/padding, `%` សម្រាប់ width និង `px` សម្រាប់តែ border ឬ shadow តូចៗ។'
      },
      starterCode: {
        html: `<div class="box-rem">
  <h3>Rem & % Scalable Container</h3>
  <p>Padding is 1.5rem and width is 90% of parent container.</p>
</div>`,
        css: `.box-rem {
  width: 90%;
  max-width: 500px;
  padding: 1.5rem;
  font-size: 1rem;
  background: #0284c7;
  color: white;
  border-radius: 0.75rem;
  border: 2px solid #38bdf8;
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Width takes 90% (~337px), fitting inside mobile screen effortlessly.',
            km: 'Width យក 90% (~337px) រីករួញក្នុងអេក្រង់ Mobile យ៉ាងសមស្រប។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Reaches max-width limit of 500px, keeping padding balanced in rem.',
            km: 'រីកដល់កំណត់ 500px ដោយរក្សា Padding មានតុល្យភាព។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Layout remains bounded at 500px while font scales smoothly if user zooms root.',
            km: 'រក្សាទំហំ 500px ហើយ Font រីករួញតាមការកំណត់របស់ User។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Accessibility Compliance (WCAG 1.4.4)',
          km: 'ស្តង់ដារ Accessibility (WCAG 1.4.4)'
        },
        description: {
          en: 'Using `rem` guarantees that visually impaired users who increase browser base font size to 200% will see text scale proportionally without breaking page containers.',
          km: 'ការប្រើ `rem` ជួយឱ្យអ្នកមានបញ្ហាភ្នែក ដែលដំឡើងទំហំ Font ក្នុង Browser អាចអានបានដោយមិនបែក Layout។'
        }
      },
      practiceExercise: {
        question: {
          en: 'If root font size is 16px, how many pixels is 2.5rem equal to?',
          km: 'ប្រសិនបើ root font-size ស្មើ 16px តើ 2.5rem ស្មើប៉ុន្មាន pixel?'
        },
        solution: '40px (2.5 * 16)'
      },
      quizQuestions: [
        {
          id: 'q-l4-1',
          question: {
            en: 'Which CSS unit scales relative to the browser root html font size?',
            km: 'តើ Unit មួយណាដែលគិតធៀបនឹង root html font-size?'
          },
          options: [
            { id: '1', text: { en: 'rem', km: 'rem' }, isCorrect: true },
            { id: '2', text: { en: 'px', km: 'px' }, isCorrect: false }
          ],
          explanation: {
            en: 'rem (root em) scales relative to <html> element font size.',
            km: 'rem គិតធៀបទៅនឹងទំហំ Font នៃ root <html> element។'
          }
        }
      ]
    },

    {
      id: 'resp-l5',
      slug: 'fluid-containers-max-width-pattern',
      moduleNumber: 2,
      lessonNumberInModule: 2,
      title: {
        en: 'The Fluid Container Pattern: Combining max-width with width: 100%',
        km: 'រូបមន្ត Fluid Container៖ ការប្រើប្រាស់ max-width ជាមួយ width: 100%'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Hardcoding fixed pixel widths like `width: 1200px` breaks mobile devices, causing horizontal scrollbars. The classic fluid container pattern sets `width: 100%` so the element fills narrow mobile screens, combined with `max-width: 1200px` and `margin: 0 auto` to cap and center the container on wide desktop monitors.',
        km: 'ការកំណត់ `width: 1200px` ធ្វើឱ្យលេចចេញ Horizontal Scrollbar លើ Mobile។ រូបមន្ត Fluid Container ប្រើ `width: 100%` គួបផ្សំ `max-width: 1200px` និង `margin: 0 auto` ដើម្បីឱ្យវាបត់បែនលើ Mobile និងនៅចំកណ្តាលលើ Desktop។'
      },
      tutorial: {
        en: 'Wrap primary section layouts in a `.container` CSS class with width 100%, max-width, and side padding.',
        km: 'សរសេរ Class `.container` ជាមួយ width: 100%, max-width: 1200px, margin: 0 auto និង padding សងខាង។'
      },
      starterCode: {
        html: `<div class="site-wrapper">
  <h2>Fluid Hero Header</h2>
  <p>I stretch 100% on phones and cap at 900px on desktop screens.</p>
</div>`,
        css: `.site-wrapper {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem;
  background: #1e293b;
  color: #f8fafc;
  border-radius: 12px;
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Width scales smoothly to 375px with 1.5rem padding, avoiding horizontal scrollbars.',
            km: 'Width បត់បែនតាម 375px របស់ Mobile ដោយគ្មាន Horizontal Scrollbar ឡើយ។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Fills 768px screen width with clean side margins.',
            km: 'ពង្រីកពេញ 768px ដោយមានចន្លោះ Margin សងខាងស្អាតបាត។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Caps precisely at 900px and centers automatically in the middle of screen.',
            km: 'រីកដល់កំណត់ត្រឹម 900px និងស្ថិតនៅចំកណ្តាលអេក្រង់ Desktop។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Standard Web Application Main Shell',
          km: 'រចនាសម្ព័ន្ធទូទៅនៃ Web App'
        },
        description: {
          en: 'Top tech SaaS platforms wrap their navigation, hero sections, and main content feeds inside `.container` wrapper classes to maintain layout alignment across widescreen monitors.',
          km: 'SaaS Platforms ល្បីៗប្រើប្រាស់ Class Wrapper នេះដើម្បីតម្រឹម Layout ឱ្យនៅចំកណ្តាលអេក្រង់កុំព្យូទ័រ។'
        }
      },
      practiceExercise: {
        question: {
          en: 'Write the CSS snippet to center a fluid container capped at 1200px width.',
          km: 'សរសេរ CSS snippet សម្រាប់កំណត់ Fluid container នៅចំកណ្តាល ដែលមាន max-width 1200px។'
        },
        solution: 'width: 100%; max-width: 1200px; margin: 0 auto;'
      },
      quizQuestions: [
        {
          id: 'q-l5-1',
          question: {
            en: 'What happens if you set width: 1200px without max-width on a mobile screen?',
            km: 'តើមានអ្វីកើតឡើងប្រសិនបើអ្នកដាក់ width: 1200px ដោយគ្មាន max-width លើ Mobile?'
          },
          options: [
            { id: '1', text: { en: 'It causes horizontal scrolling overflow', km: 'វាធ្វើឱ្យលេចចេញ Horizontal Scrollbar លៀនចេញក្រៅ' }, isCorrect: true },
            { id: '2', text: { en: 'It automatically shrinks to fit 375px', km: 'វារួញតូចមកត្រឹម 375px ដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
          ],
          explanation: {
            en: 'Fixed pixel width forces horizontal scrollbars on smaller viewports.',
            km: 'ការដាក់ Pixel ថេរ បង្ខំឱ្យមាន Horizontal Scrollbar លើអេក្រង់តូច។'
          }
        }
      ]
    },

    {
      id: 'resp-l6',
      slug: 'fluid-typography-clamp-function',
      moduleNumber: 2,
      lessonNumberInModule: 3,
      title: {
        en: 'Fluid Typography: Dynamic Font Scaling with CSS clamp()',
        km: 'Fluid Typography៖ ការកំណត់ទំហំ Font រីករួញដោយស្វ័យប្រវត្តិជាមួយ clamp()'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'CSS `clamp(MIN, PREFERRED, MAX)` allows headings to smoothly scale font size based on viewport width without requiring multiple media query breakpoints. The font stays at MIN size on small phones, scales fluidly in the middle, and stops at MAX size on large desktop screens.',
        km: 'CSS `clamp(MIN, PREFERRED, MAX)` អនុញ្ញាតឱ្យ Font រីករួញតាមទំហំអេក្រង់ដោយស្វ័យប្រវត្តិ។ អក្សរនឹងមិនតូចជាង MIN និងមិនធំជាង MAX ឡើយ ដោយមិនបាច់សរសេរ Media Query ច្រើនឡើយ។'
      },
      tutorial: {
        en: 'Set heading font sizes using `font-size: clamp(1.5rem, 4vw + 1rem, 3rem);`.',
        km: 'កំណត់ font-size នៃ H1/H2 ដោយប្រើរូបមន្ត `clamp(1.5rem, 4vw + 1rem, 3rem)`។'
      },
      starterCode: {
        html: `<h1 class="fluid-title">Fluid Responsive Headline</h1>`,
        css: `.fluid-title {
  font-size: clamp(1.5rem, 5vw + 0.5rem, 3.25rem);
  font-weight: 800;
  color: #38bdf8;
  line-height: 1.2;
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Font stays safely clamped at minimum size of ~1.65rem (~26px), preventing heading text overflow.',
            km: 'Font រក្សានៅទំហំអប្បបរមា ~26px មិនបែកបន្ទាត់ច្រើនជួរពេកឡើយ។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Font scales smoothly at ~2.5rem (~40px) proportional to current tablet viewport width.',
            km: 'Font រីកធំឡើងល្មមអាស្រ័យលើទំហំអេក្រង់ ~40px លើ Tablet។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Font caps gracefully at maximum limit of 3.25rem (52px), creating a striking hero title.',
            km: 'Font រីកដល់កំណត់ត្រឹម 52px បង្កើតបានជាចំណងជើង Hero ស្អាតបាតលើ Desktop។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Modern Design Systems & Editorial Platforms',
          km: ' Design Systems និង គេហទំព័រសារព័ត៌មាន'
        },
        description: {
          en: 'Leading news outlets and design systems use fluid typography clamp() to keep hero titles visually striking across thousands of android device aspect ratios.',
          km: 'គេហទំព័រសារព័ត៌មានធំៗប្រើប្រាស់ clamp() ដើម្បីឱ្យចំណងជើងសមស្របតាមគ្រប់ទូរស័ព្ទ Android/iOS។'
        }
      },
      practiceExercise: {
        question: {
          en: 'In CSS clamp(1.5rem, 3vw, 2.5rem), what does 1.5rem represent?',
          km: 'ក្នុង CSS clamp(1.5rem, 3vw, 2.5rem) តើ 1.5rem តំណាងឱ្យអ្វី?'
        },
        solution: 'The absolute minimum font size limit.'
      },
      quizQuestions: [
        {
          id: 'q-l6-1',
          question: {
            en: 'How many arguments does CSS clamp() accept?',
            km: 'តើ CSS clamp() ទទួល Argument ប៉ុន្មាន?'
          },
          options: [
            { id: '1', text: { en: '3 (MIN, PREFERRED, MAX)', km: '៣ (MIN, PREFERRED, MAX)' }, isCorrect: true },
            { id: '2', text: { en: '2 (MIN, MAX)', km: '២ (MIN, MAX)' }, isCorrect: false }
          ],
          explanation: {
            en: 'clamp() requires 3 parameters: Minimum value, Preferred value, and Maximum value.',
            km: 'clamp() ត្រូវការ Parameter ៣៖ MIN, PREFERRED, និង MAX។'
          }
        }
      ]
    },

    // Module 3: Media Queries
    {
      id: 'resp-l7',
      slug: 'media-query-syntax-and-conditions',
      moduleNumber: 3,
      lessonNumberInModule: 1,
      title: {
        en: 'CSS Media Query Syntax: min-width, max-width, and Logical Operators',
        km: 'របៀបសរសេរ CSS Media Queries (min-width, max-width និង Logical Operators)'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Media queries use the `@media` rule to apply conditional CSS blocks only when specific viewport conditions match. You can check screen width, orientation (`landscape`/`portrait`), hover capabilities (`hover: hover`), or combine logic using `and`, `not`, and comma (OR) operators.',
        km: 'Media Queries ប្រើប្រាស់ `@media` ដើម្បីកំណត់ Condition CSS ពេលអេក្រង់ត្រូវនឹងលក្ខខណ្ឌ។ យើងអាចភ្ជាប់ Condition ច្រើនបានដោយប្រើ `and`, `not` ឬសញ្ញាក្បៀស (OR)។'
      },
      tutorial: {
        en: 'Write conditional media blocks: `@media (min-width: 768px) and (orientation: landscape) { ... }`.',
        km: 'សរសេរ Media block៖ `@media (min-width: 768px) and (orientation: landscape) { ... }`។'
      },
      starterCode: {
        html: `<div class="responsive-banner">
  <h3>Conditional Display Banner</h3>
  <p>Check my background color across screen sizes.</p>
</div>`,
        css: `/* Mobile default */
.responsive-banner {
  background: #0284c7;
  color: white;
  padding: 1rem;
  border-radius: 8px;
}

/* Tablet & Desktop override */
@media (min-width: 768px) {
  .responsive-banner {
    background: #0d9488;
    padding: 2rem;
  }
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Displays sky-blue background with 1rem padding (under 768px).',
            km: 'បង្ហាញព័ណ៌ខៀវ (Sky-Blue) ជាមួយ Padding 1rem (ក្រោម 768px)។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Triggers media query condition, switching background instantly to teal with 2rem padding.',
            km: 'លក្ខខណ្ឌគ្រប់ 768px ដំណើរការភ្លាមៗ ប្តូរទៅពណ៌បៃតងត្បូង (Teal) និង Padding 2rem។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Maintains teal media query style across all wide desktop screens.',
            km: 'រក្សា Style ពណ៌បៃតងត្បូង (Teal) លើគ្រប់អេក្រង់ធំៗ។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Dark Mode & Hover Capability Checks',
          km: 'ការឆែក Dark Mode និង Touch Screen'
        },
        description: {
          en: 'Modern applications use media queries like `@media (prefers-color-scheme: dark)` and `@media (hover: hover)` to customize UI for touch screens versus mouse inputs.',
          km: 'Web App ទំនើបប្រើ Media Query ឆែកមើល Dark Mode និង ឆែកមើលថាឧបករណ៍មាន Mouse ឬជា Touch Screen។'
        }
      },
      practiceExercise: {
        question: {
          en: 'Write a media query that applies styles only when viewport is at least 1024px wide.',
          km: 'សរសេរ Media Query ដែលអនុវត្តកូដ CSS តែពេលអេក្រង់មានទំហំយ៉ាងតិច 1024px។'
        },
        solution: '@media (min-width: 1024px) { ... }'
      },
      quizQuestions: [
        {
          id: 'q-l7-1',
          question: {
            en: 'Which operator combines multiple conditions in a CSS media query?',
            km: 'តើ Operator មួយណាដែលភ្ចាប់លក្ខខណ្ឌច្រើនក្នុង Media Query?'
          },
          options: [
            { id: '1', text: { en: 'and', km: 'and' }, isCorrect: true },
            { id: '2', text: { en: 'with', km: 'with' }, isCorrect: false }
          ],
          explanation: {
            en: 'The "and" keyword combines multiple media conditions.',
            km: 'ពាក្យ "and" ប្រើសម្រាប់ភ្ចាប់លក្ខខណ្ឌច្រើនក្នុង Media Query។'
          }
        }
      ]
    },

    {
      id: 'resp-l8',
      slug: 'content-driven-breakpoints',
      moduleNumber: 3,
      lessonNumberInModule: 2,
      title: {
        en: 'Choosing Breakpoints from Content, Not Specific Device Names',
        km: 'ការជ្រើសរើស Breakpoint តាមទិន្នន័យ (Content-Driven) មិនមែនតាមឈ្មោះទូរស័ព្ទ'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Do not choose media query breakpoints targeting specific device models (like iPhone 14 or iPad Pro). Mobile devices change dimensions every year. Instead, choose breakpoints when the content itself looks cramped, breaks text wrapping, or leaves unnatural whitespace as you widen the browser window.',
        km: 'កុំកំណត់ Breakpoints តាមឈ្មោះម៉ូឌែលទូរស័ព្ទ (ដូចជា iPhone 14 ឬ iPad Pro) ព្រោះទូរស័ព្ទចេញថ្មីរៀងរាល់ឆ្នាំ។ ត្រូវកំណត់ Breakpoints ពេលដែលអត្ថបទ/Layout ចាប់ផ្តើមចង្អៀត ឬបែករូបរាងពេលអ្នកពង្រីក Browser។'
      },
      tutorial: {
        en: 'Resize your browser manually and add `@media (min-width: ...)` exactly at the pixel width where the design starts to break.',
        km: 'ពង្រីករួញ Browser ដោយដៃ រួចបន្ថែម Media Query ចំ Pixel ណាដែល Layout ចាប់ផ្តើមមើលទៅមិនស្អាត។'
      },
      starterCode: {
        html: `<div class="content-box">
  <div class="sidebar">Sidebar Navigation</div>
  <div class="main">Main Article Body Content</div>
</div>`,
        css: `.content-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #1e293b;
  padding: 1rem;
  color: white;
}

/* Breakpoint chosen when main text line length exceeds 60 characters */
@media (min-width: 720px) {
  .content-box {
    flex-direction: row;
  }
  .sidebar { width: 220px; }
  .main { flex: 1; }
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Single column stack keeps reading flow natural on narrow screens.',
            km: 'រៀបជាជួរឈរទោល ជួយឱ្យការអានលើអេក្រង់ចង្អៀតមានភាពរលូន។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'At 720px breakpoint, layout splits cleanly into sidebar and main reading area.',
            km: 'នៅ Breakpoint 720px កូដបំបែកទៅជា Sidebar និង Main Content យ៉ាងស្អាត។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Sidebar remains fixed at 220px while main content expands smoothly.',
            km: 'Sidebar រក្សាទំហំ 220px ឯ Main Content ពង្រីកតាមលំហទំនេរ។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Future-Proof Responsive Architecture',
          km: 'ការការពារកូដសម្រាប់ឧបករណ៍នាអនាគត'
        },
        description: {
          en: 'Content-driven breakpoints ensure that when foldable phones or new screen aspect ratios launch, your app layout remains unbreakable without needing code updates.',
          km: 'ការធ្វើ Content-driven breakpoints ជួយឱ្យគេហទំព័រដើរស្អាតលើទូរស័ព្ទបត់បាននាពេលអនាគតដោយមិនបាច់កែកូដបន្ថែម។'
        }
      },
      practiceExercise: {
        question: {
          en: 'Why is targeting specific device resolution pixels (e.g. 390px for iPhone 13) considered a anti-pattern?',
          km: 'ហេតុអ្វីបានជាការកំណត់ Breakpoint តាម Pixel ទូរស័ព្ទជាក់លាក់ (ដូចជា 390px) ត្រូវបានចាត់ទុកជាកំហុស?'
        },
        solution: 'Because device dimensions change constantly; content-driven design future-proofs layouts.'
      },
      quizQuestions: [
        {
          id: 'q-l8-1',
          question: {
            en: 'How should responsive breakpoints be chosen in modern web design?',
            km: 'តើគេគួរជ្រើសរើស Responsive Breakpoints យ៉ាងដូចម្តេច?'
          },
          options: [
            { id: '1', text: { en: 'Based on where the page content naturally breaks or feels cramped', km: 'ផ្អែកលើចំណុចដែល Content ចាប់ផ្តើមចង្អៀត ឬបែករូបរាង' }, isCorrect: true },
            { id: '2', text: { en: 'Hardcoded strictly to official iPhone screen sizes', km: 'កំណត់តាមទំហំអេក្រង់ iPhone ផ្លូវការ' }, isCorrect: false }
          ],
          explanation: {
            en: 'Breakpoints must be driven by content needs rather than specific device models.',
            km: 'Breakpoints ត្រូវកំណត់តាមតម្រូវការ Content មិនមែនតាមឈ្មោះទូរស័ព្ទឡើយ។'
          }
        }
      ]
    },

    {
      id: 'resp-l9',
      slug: 'standard-industry-breakpoints',
      moduleNumber: 3,
      lessonNumberInModule: 3,
      title: {
        en: 'Common Industry Breakpoint Tiers (sm, md, lg, xl, 2xl)',
        km: 'ស្តង់ដារ Breakpoint Tiers ក្នុងឧស្សាហកម្ម (sm, md, lg, xl, 2xl)'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'While content guides specific breakpoints, major industry CSS frameworks (Tailwind CSS, Bootstrap) standardize 5 key tier conventions: `sm` (640px / Mobile landscape), `md` (768px / Tablets), `lg` (1024px / Laptops), `xl` (1280px / Desktops), and `2xl` (1536px / Ultra-wide monitors).',
        km: 'CSS Frameworks ធំៗក្នុងឧស្សាហកម្ម (Tailwind, Bootstrap) បានកំណត់ស្តង់ដារ Tier ៥ គឺ៖ `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px) និង `2xl` (1536px)។'
      },
      tutorial: {
        en: 'Memorize the core tier ranges: 640px (sm), 768px (md), and 1024px (lg).',
        km: 'ចងចាំទំហំ Tier សំខាន់ៗ៖ 640px (sm), 768px (md) និង 1024px (lg)។'
      },
      starterCode: {
        html: `<div class="tier-card">
  <h3>Breakpoint Tier Indicator</h3>
  <p class="tier-label">Current Viewport Status</p>
</div>`,
        css: `/* Mobile Base (< 640px) */
.tier-card { background: #0284c7; color: white; padding: 1rem; border-radius: 8px; }
.tier-label::after { content: " 📱 Mobile Viewport (<640px)"; }

/* sm (≥ 640px) */
@media (min-width: 640px) {
  .tier-card { background: #0d9488; }
  .tier-label::after { content: " 📱 Small / Mobile Landscape (≥640px)"; }
}

/* md (≥ 768px) */
@media (min-width: 768px) {
  .tier-card { background: #7c3aed; }
  .tier-label::after { content: " 🟦 Tablet Viewport (≥768px)"; }
}

/* lg (≥ 1024px) */
@media (min-width: 1024px) {
  .tier-card { background: #059669; }
  .tier-label::after { content: " 💻 Laptop / Desktop (≥1024px)"; }
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Under 640px: Displays Mobile Base style with sky-blue background.',
            km: 'ក្រោម 640px៖ បង្ហាញ Style Mobile ពណ៌ខៀវ (Sky-Blue)។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Matches md (768px) tier: Switches to purple background with tablet badge label.',
            km: 'ត្រូវនឹង md (768px) Tier៖ ប្តូរទៅពណ៌ស្វាយ (Purple) ជាមួយ Label Tablet។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Matches lg/xl tier (≥ 1024px): Switches to emerald green background with desktop badge label.',
            km: 'ត្រូវនឹង lg/xl Tier (≥ 1024px)៖ ប្តូរទៅពណ៌បៃតង (Emerald) ជាមួយ Label Desktop។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Tailwind CSS Utility Prefix Matching',
          km: 'ការប្រើប្រាស់ Prefix ក្នុង Tailwind CSS'
        },
        description: {
          en: 'Understanding these 5 pixel tiers directly unlocks writing utility classes in Tailwind CSS like `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`.',
          km: 'ការយល់ដឹងពី 5 Tier នេះ ជួយឱ្យអ្នកសរសេរ Utility classes ក្នុង Tailwind ដូចជា `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` បានយ៉ាងលឿន។'
        }
      },
      practiceExercise: {
        question: {
          en: 'What pixel width corresponds to the standard "md" (tablet) breakpoint in CSS frameworks?',
          km: 'តើ Pixel Width ប៉ុន្មានដែលត្រូវនឹង "md" (Tablet) Breakpoint ក្នុង CSS frameworks?'
        },
        solution: '768px'
      },
      quizQuestions: [
        {
          id: 'q-l9-1',
          question: {
            en: 'Which pixel value represents the standard tablet breakpoint (md)?',
            km: 'តើ Pixel មួយណាដែលតំណាងឱ្យ Tablet breakpoint (md)?'
          },
          options: [
            { id: '1', text: { en: '768px', km: '768px' }, isCorrect: true },
            { id: '2', text: { en: '320px', km: '320px' }, isCorrect: false }
          ],
          explanation: {
            en: '768px is the universal standard for tablet (md) viewports.',
            km: '768px គឺជាស្តង់ដារទូទៅសម្រាប់ Tablet (md) viewports។'
          }
        }
      ]
    },

    // Module 4: Responsive Layout with Flexbox & Grid
    {
      id: 'resp-l10',
      slug: 'responsive-flexbox-wrap-and-direction',
      moduleNumber: 4,
      lessonNumberInModule: 1,
      title: {
        en: 'Responsive Flexbox: flex-wrap and Direction Switches Across Breakpoints',
        km: 'Responsive Flexbox៖ ការផ្លាស់ប្តូរ flex-wrap និង flex-direction'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Flexbox becomes responsive by toggling `flex-direction: column` on small mobile screens to stack items vertically, then switching to `flex-direction: row` inside a media query on wider screens. Setting `flex-wrap: wrap` prevents items from shrinking or squeezing horizontally.',
        km: 'Flexbox ក្លាយជា Responsive ដោយសរសេរ `flex-direction: column` លើ Mobile ដើម្បីតម្រៀបចុះក្រោម រួចប្តូរទៅ `flex-direction: row` ក្នុង Media Query លើអេក្រង់ធំ។ `flex-wrap: wrap` ការពារកុំឱ្យ Item កៀបគ្នា។'
      },
      tutorial: {
        en: 'Combine `display: flex; flex-direction: column;` base styles with `@media (min-width: 768px) { flex-direction: row; }`.',
        km: 'ផ្សំ `display: flex; flex-direction: column;` ដំបូង ជាមួយ `@media (min-width: 768px) { flex-direction: row; }`។'
      },
      starterCode: {
        html: `<div class="flex-responsive">
  <div class="f-item">Item One</div>
  <div class="f-item">Item Two</div>
  <div class="f-item">Item Three</div>
</div>`,
        css: `/* Mobile Base */
.flex-responsive {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.f-item {
  background: #1e293b;
  color: #38bdf8;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #334155;
}

/* Tablet & Desktop Horizontal Row */
@media (min-width: 640px) {
  .flex-responsive {
    flex-direction: row;
  }
  .f-item {
    flex: 1;
  }
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Items stack vertically in a clean single column easy to scroll on phone displays.',
            km: 'Item ទាំងឡាយតម្រៀបចុះក្រោមជាជួរឈរ ងាយស្រួលរមូរលើទូរស័ព្ទ។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Switches to horizontal row layout with all 3 items sharing equal 1fr width.',
            km: 'ប្តូរទៅជាជួរដេក ដោយ Item ទាំង ៣ ចែករំលែកទំហំស្មើៗគ្នា។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Items stretch smoothly across screen while retaining consistent gaps.',
            km: 'Item លាតសន្ធឹងស្អាតបាតពេញអេក្រង់ Desktop ដោយរក្សា Gap ស្មើគ្នា។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Responsive Pricing Tables & Features Rows',
          km: 'តារាងតម្លៃ Pricing Tables និង Feature List'
        },
        description: {
          en: 'Pricing tier cards stack vertically on smartphones for focused purchasing and align horizontally into comparison columns on desktop screens.',
          km: 'កាតតម្លៃ Pricing Cards តម្រៀបចុះក្រោមលើ Mobile និងបង្ហាញជា ៣ ជួរឈរប្រៀបធៀបលើ Desktop។'
        }
      },
      practiceExercise: {
        question: {
          en: 'Which flex property allows child flex items to wrap onto a new line instead of squeezing?',
          km: 'តើ Flex property មួយណាដែលអនុញ្ញាតឱ្យ Child flex items ចុះបន្ទាត់ថ្មី មិនកៀបគ្នា?'
        },
        solution: 'flex-wrap: wrap;'
      },
      quizQuestions: [
        {
          id: 'q-l10-1',
          question: {
            en: 'What flex-direction property is recommended as the mobile default style?',
            km: 'តើ flex-direction មួយណាដែលគេណែនាំឱ្យប្រើជា Style ដំបូងលើ Mobile?'
          },
          options: [
            { id: '1', text: { en: 'column', km: 'column' }, isCorrect: true },
            { id: '2', text: { en: 'row-reverse', km: 'row-reverse' }, isCorrect: false }
          ],
          explanation: {
            en: 'flex-direction: column stacks elements vertically for small phone screens.',
            km: 'flex-direction: column តម្រៀប Elements ចុះក្រោមសម្រាប់អេក្រង់ទូរស័ព្ទ។'
          }
        }
      ]
    },

    {
      id: 'resp-l11',
      slug: 'css-grid-auto-fit-minmax-reflow',
      moduleNumber: 4,
      lessonNumberInModule: 2,
      title: {
        en: 'CSS Grid repeat(auto-fit, minmax()): Automatic Multi-Column Reflow Without Media Queries',
        km: 'CSS Grid auto-fit និង minmax()៖ ការរៀប Column ស្វ័យប្រវត្តិដោយមិនបាច់ប្រើ Media Query'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'CSS Grid provides a powerful line of layout code: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`. This instructs the browser to create as many columns of at least 280px width as can fit in the container. When screen size shrinks below 280px, items reflow into fewer columns automatically without writing a single media query!',
        km: 'CSS Grid ផ្តល់នូវកូដពិសេស៖ `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`។ វាបង្ខំឱ្យ Browser បង្កើត Column ទំហំយ៉ាងតិច 280px តាមដែលអាចល្មម។ ពេលអេក្រង់តូច វានឹងរៀបចំនួនជួរឈរឡើងវិញដោយស្វ័យប្រវត្តិ ដោយមិនបាច់ប្រើ Media Query ឡើយ!'
      },
      tutorial: {
        en: 'Create responsive card grids using `display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;`.',
        km: 'បង្កើត Grid Cards ឆ្លើយតបស្វ័យប្រវត្តិដោយប្រើ `repeat(auto-fit, minmax(250px, 1fr))` និង `gap: 1rem`។'
      },
      starterCode: {
        html: `<div class="auto-grid">
  <div class="g-card">Card 1</div>
  <div class="g-card">Card 2</div>
  <div class="g-card">Card 3</div>
  <div class="g-card">Card 4</div>
</div>`,
        css: `.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.g-card {
  background: #0284c7;
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Fits exactly 1 column stack as container width is under 440px.',
            km: 'បង្ហាញជា 1 Column ចុះក្រោម ព្រោះទំហំអេក្រង់តូចជាង 440px (220px * 2)។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Fits exactly 3 columns side-by-side naturally.',
            km: 'រៀបជា 3 Columns  جنبគ្នាដោយស្វ័យប្រវត្តិលើ Tablet។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Fits all 4 cards horizontally into 4 equal columns across screen.',
            km: 'រៀបជា 4 Columns ស្មើៗគ្នាពេញទំហំអេក្រង់ Desktop។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'E-Commerce Product Catalogs & Image Galleries',
          km: 'កាតាឡុកទំនិញ E-Commerce និង Image Galleries'
        },
        description: {
          en: 'Online shopping storefronts like Amazon use auto-fit grids to reflow product cards seamlessly across thousands of tablet, fold, and monitor screen dimensions.',
          km: 'ហាងលក់ទំនិញអនឡាញប្រើប្រាស់ auto-fit grids ដើម្បីរៀបកាតផលិតផលឡើងវិញដោយស្វ័យប្រវត្តិ។'
        }
      },
      practiceExercise: {
        question: {
          en: 'What does minmax(250px, 1fr) specify for a grid item width?',
          km: 'តើ minmax(250px, 1fr) បញ្ជាក់ពីអ្វីសម្រាប់ទំហំ Grid Item?'
        },
        solution: 'Minimum width is 250px, maximum width stretches to fill 1 fraction of available space.'
      },
      quizQuestions: [
        {
          id: 'q-l11-1',
          question: {
            en: 'Which CSS Grid property keyword automatically reflows columns without media queries?',
            km: 'តើ Keyword មួយណាក្នុង CSS Grid ដែលរៀប Column ឡើងវិញដោយស្វ័យប្រវត្តិ?'
          },
          options: [
            { id: '1', text: { en: 'auto-fit (with minmax)', km: 'auto-fit (ជាមួយ minmax)' }, isCorrect: true },
            { id: '2', text: { en: 'flex-direction', km: 'flex-direction' }, isCorrect: false }
          ],
          explanation: {
            en: 'repeat(auto-fit, minmax(...)) dynamically reflows columns.',
            km: 'repeat(auto-fit, minmax(...)) រៀបចំនួន Columns ឡើងវិញតាមលំហទំនេរ។'
          }
        }
      ]
    },

    {
      id: 'resp-l12',
      slug: 'combining-grid-and-flexbox',
      moduleNumber: 4,
      lessonNumberInModule: 3,
      title: {
        en: 'Combining CSS Grid for Page Layout with Flexbox for Component Alignment',
        km: 'ការផ្សំ CSS Grid សម្រាប់ Page Layout ជាមួយ Flexbox សម្រាប់ Component'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Professional frontend engineers do not choose between Grid OR Flexbox. They combine both: CSS Grid handles 2D page-level macro structure (header, sidebar, main content area, footer), while Flexbox handles 1D micro component layout inside components (aligning icon + button text, tag pills, avatar headers).',
        km: 'Senior Frontend Developers មិនជ្រើសរើសរវាង Grid ឬ Flexbox មួយណានោះឡើយ។ គេប្រើទាំងពីររួមគ្នា៖ CSS Grid សម្រាប់រៀបដំបូលទំព័រធំៗ (Macro Layout) ឯ Flexbox សម្រាប់រៀប Component តូចៗខាងក្នុង (Micro Layout) ដូចជា Icon + Text ឬ Button។'
      },
      tutorial: {
        en: 'Use Grid for top-level page areas and Flexbox inside `.card-header` or `.button-group`.',
        km: 'ប្រើ Grid សម្រាប់រៀបទំព័ររួម រួចប្រើ Flexbox ក្នុង `.card-header` ឬ `.button-group`។'
      },
      starterCode: {
        html: `<div class="macro-grid">
  <div class="card-box">
    <div class="micro-flex">
      <span class="badge font-mono">NEW</span>
      <span class="time">5 mins ago</span>
    </div>
    <h3>Grid & Flex Combo Card</h3>
  </div>
</div>`,
        css: `.macro-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}
.card-box {
  background: #1e293b;
  padding: 1.25rem;
  border-radius: 10px;
  border: 1px solid #334155;
}
/* Micro Flexbox inside Card */
.micro-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.badge { background: #38bdf8; color: #0f172a; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 0.75rem; }
.time { color: #94a3b8; font-size: 0.75rem; }`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Macro grid arranges cards vertically while inner micro flex keeps badge and time aligned horizontally.',
            km: 'Macro grid រៀបកាតចុះក្រោម ឯ Micro flex រៀប Badge និង Time ជួរដេកស្មើគ្នាយ៉ាងស្អាត។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Macro grid expands into multi-column layout while micro flex maintains pixel-perfect element spacing.',
            km: 'Macro grid បំបែកជាច្រើន Columns ឯ Micro flex រក្សាចន្លោះស្មើគ្នាឥតខ្ចោះ។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Full 2D grid structure spans across screen with crisp 1D flexbox header alignments.',
            km: 'ទម្រង់ 2D Grid រៀបពេញអេក្រង់ និង 1D Flexbox រៀបចំ Component ខាងក្នុងស្អាតបាត។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'SaaS Dashboard Application Shells',
          km: 'រចនាសម្ព័ន្ធ SaaS Dashboard'
        },
        description: {
          en: 'Enterprise dashboards use Grid for sidebar + main content panel arrangement and Flexbox inside header toolbar icons, user profile dropdowns, and status badges.',
          km: 'SaaS Dashboards ប្រើ Grid សម្រាប់រៀប Panel ធំៗ និងប្រើ Flexbox សម្រាប់រៀប Icon / Profile Dropdown។'
        }
      },
      practiceExercise: {
        question: {
          en: 'Which CSS layout module is best suited for 2D page layouts vs 1D component item alignment?',
          km: 'តើ Layout Module មួយណាដែលសមស្របបំផុតសម្រាប់ 2D Page Layout និង 1D Component Alignment?'
        },
        solution: 'CSS Grid for 2D page layout; Flexbox for 1D component item alignment.'
      },
      quizQuestions: [
        {
          id: 'q-l12-1',
          question: {
            en: 'When should CSS Grid be paired alongside Flexbox?',
            km: 'តើពេលណាដែលគួរប្រើប្រាស់ CSS Grid တွဲគ្នាជាមួយ Flexbox?'
          },
          options: [
            { id: '1', text: { en: 'Grid for 2D macro page structure; Flexbox for 1D micro component layout', km: 'Grid សម្រាប់ដំបូលទំព័រ 2D; Flexbox សម្រាប់ Component 1D' }, isCorrect: true },
            { id: '2', text: { en: 'Grid replaces Flexbox entirely; they should never be combined', km: 'Grid ជំនួស Flexbox ទាំងស្រុង មិនគួរប្រើរួមគ្នាទេ' }, isCorrect: false }
          ],
          explanation: {
            en: 'Combining Grid for macro layout and Flexbox for micro alignment is best practice.',
            km: 'ការផ្សំ Grid សម្រាប់ Macro structure និង Flexbox សម្រាប់ Micro alignment ជាស្តង់ដារល្អបំផុត។'
          }
        }
      ]
    },

    // Module 5: Responsive Images & Media
    {
      id: 'resp-l13',
      slug: 'responsive-images-max-width-100-baseline',
      moduleNumber: 5,
      lessonNumberInModule: 1,
      title: {
        en: 'Fluid Images Baseline: max-width: 100% and height: auto',
        km: 'Fluid Images មូលដ្ឋាន៖ max-width: 100% និង height: auto'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'By default, images in HTML display at their inherent physical pixel dimensions. If an image is 1920px wide, it will overflow a mobile screen and break the entire page layout. The golden baseline CSS rule for responsive media is `img, video { max-width: 100%; height: auto; }`. This prevents overflowing while preserving original aspect ratios.',
        km: 'តាមធម្មជាតិ រូបភាពក្នុង HTML បង្ហាញតាម Pixel ពិតរបស់វា។ ប្រសិនបើរូបភាពមានទំហំ 1920px វានឹងលៀនចេញក្រៅអេក្រង់ទូរស័ព្ទ។ CSS Rule មាសសម្រាប់ Responsive Media គឺ `img, video { max-width: 100%; height: auto; }` ដែលការពារមិនឱ្យរូបភាពលៀនចេញ និងរក្សាសមាមាត្រ Aspect Ratio ដើម។'
      },
      tutorial: {
        en: 'Add `img, svg, video { max-width: 100%; height: auto; }` to your global CSS reset stylesheet.',
        km: 'បន្ថែម `img, svg, video { max-width: 100%; height: auto; }` ក្នុង Global CSS Reset របស់អ្នក។'
      },
      starterCode: {
        html: `<div class="img-card">
  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop" alt="Code Editor">
  <p>Fluid responsive image scaling naturally within card bounds.</p>
</div>`,
        css: `.img-card {
  width: 100%;
  max-width: 500px;
  background: #1e293b;
  padding: 1rem;
  border-radius: 12px;
  color: white;
}
/* Responsive Baseline */
.img-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: '1000px high-res image automatically scales down to fit 343px mobile card width without distortion.',
            km: 'រូបភាពទំហំ 1000px រួញទំហំមកត្រឹម 343px ស្វ័យប្រវត្តិដោយមិនបែកសមាមាត្រ។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Image scales smoothly up to max-width boundary of 500px.',
            km: 'រូបភាពរីកតាមទំហំកាតយ៉ាងរលូនរហូតដល់កំណត់ 500px។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Image stops scaling at 500px, remaining crisp without blurring.',
            km: 'រូបភាពឈប់រីកនៅត្រឹម 500px រក្សាភាពច្បាស់មិនបែក Blurred ឡើយ។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Universal CSS Resets (Tailwind Preflight & Modern Resets)',
          km: 'CSS Reset ស្តង់ដារពិភពលោក'
        },
        description: {
          en: 'Modern frameworks like Tailwind CSS incorporate `img { max-width: 100%; height: auto; }` into their base reset styles automatically so developers never worry about overflowing media.',
          km: 'Frameworks ដូចជា Tailwind បញ្ចូល rule នេះក្នុង Reset CSS ដោយស្វ័យប្រវត្តិ។'
        }
      },
      practiceExercise: {
        question: {
          en: 'Which CSS property combination ensures images scale down on small screens without stretching aspect ratio?',
          km: 'តើ CSS Property មួយណាដែលធានាថារូបភាពរួមតូចលើ Mobile ដោយមិនខូច Aspect Ratio?'
        },
        solution: 'max-width: 100%; height: auto;'
      },
      quizQuestions: [
        {
          id: 'q-l13-1',
          question: {
            en: 'Why is height: auto required alongside max-width: 100% for images?',
            km: 'ហេតុអ្វីបានជាគេត្រូវការ height: auto គួបផ្សំជាមួយ max-width: 100% សម្រាប់រូបភាព?'
          },
          options: [
            { id: '1', text: { en: 'To preserve the image intrinsic aspect ratio and avoid vertical stretching distortion', km: 'ដើម្បីរក្សាសមាមាត្រ (Aspect Ratio) ដើម ការពារកុំឱ្យរូបភាពពយ/ខូចទ្រង់ទ្រាយ' }, isCorrect: true },
            { id: '2', text: { en: 'To convert JPG images into modern WEBP formats', km: 'ដើម្បីបំប្លែង JPG ទៅជា WEBP' }, isCorrect: false }
          ],
          explanation: {
            en: 'height: auto recalculates image height proportionally when width shrinks.',
            km: 'height: auto គណនាកម្ពស់រូបភាពឡើងវិញតាមសមាមាត្រ ពេលទំហំទទឹងរួមតូច។'
          }
        }
      ]
    },

    {
      id: 'resp-l14',
      slug: 'responsive-images-srcset-and-sizes',
      moduleNumber: 5,
      lessonNumberInModule: 2,
      title: {
        en: 'Resolution Switching with HTML srcset and sizes Attributes',
        km: 'ការប្តូរ Resolution រូបភាពតាមអេក្រង់ជាមួយ srcset និង sizes'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Downloading a 3MB 4K image on a small smartphone wastes user mobile data and slows down page load speed. HTML `srcset` defines a candidate list of image files with width descriptors (`400w`, `800w`, `1200w`). Combined with the `sizes` attribute, the browser intelligently downloads the smallest appropriate image file based on screen resolution and device pixel ratio (DPR).',
        km: 'ការដោនឡូតរូបភាព 3MB លើទូរស័ព្ទធ្វើឱ្យខាតបង់ Data និងធ្វើឱ្យ Web Load យឺត។ HTML `srcset` អនុញ្ញាតឱ្យយើងផ្តល់បញ្ជីរូបភាពច្រើនទំហំ (`400w`, `800w`, `1200w`)។ Browser នឹងជ្រើសរើសដោនឡូតយករូបភាពទំហំតូចល្មមដែលច្បាស់លើអេក្រង់ទូរស័ព្ទដោយស្វ័យប្រវត្តិ។'
      },
      tutorial: {
        en: 'Write `srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"` and `sizes="(max-width: 600px) 100vw, 50vw"`.',
        km: 'សរសេរ `srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"` និង `sizes="(max-width: 600px) 100vw, 50vw"`។'
      },
      starterCode: {
        html: `<img
  src="hero-800.jpg"
  srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1200.jpg 1200w"
  sizes="(max-width: 640px) 100vw, 800px"
  alt="Responsive Tech Hero"
  style="max-width: 100%; height: auto; border-radius: 8px;"
/>`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Browser downloads small 400w image file (~45KB), saving mobile bandwidth.',
            km: 'Browser ជ្រើសរើសដោនឡូតរូបភាពតូច 400w (~45KB) សន្សំ Data ទូរស័ព្ទ។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Browser switches to medium 800w image file (~120KB) matching 2x retina display density.',
            km: 'Browser ដោនឡូតរូបភាពមធ្យម 800w (~120KB) ត្រូវនឹង Retina Display។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Browser downloads crisp high-res 1200w image file for ultra-sharp display.',
            km: 'Browser ដោនឡូតរូបភាពច្បាស់ 1200w សម្រាប់បង្ហាញលើអេក្រង់ Desktop។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Google Lighthouse Core Web Vitals Optimization',
          km: 'ការប្រឡងជាប់ Google Lighthouse Core Web Vitals'
        },
        description: {
          en: 'Implementing `srcset` directly boosts Largest Contentful Paint (LCP) performance scores on Google Lighthouse audits from red to green.',
          km: 'ការប្រើ `srcset` ជួយបង្កើនពិន្ទុ LCP (Largest Contentful Paint) ក្នុង Google Lighthouse ទៅជាពណ៌បៃតង។'
        }
      },
      practiceExercise: {
        question: {
          en: 'What unit suffix is used in srcset to denote image width descriptors (e.g. 800px width)?',
          km: 'តើ Unit Suffix មួយណាដែលប្រើក្នុង srcset សម្រាប់បញ្ជាក់ពី Image width descriptor?'
        },
        solution: 'w (e.g., 800w)'
      },
      quizQuestions: [
        {
          id: 'q-l14-1',
          question: {
            en: 'What is the primary benefit of using HTML srcset with width descriptors?',
            km: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការប្រើប្រាស់ HTML srcset?'
          },
          options: [
            { id: '1', text: { en: 'It lets the browser download smaller image file sizes on low-resolution mobile devices', km: 'អនុញ្ញាតឱ្យ Browser ដោនឡូតរូបភាពទំហំតូចលើ Mobile ដើម្បីសន្សំ Data' }, isCorrect: true },
            { id: '2', text: { en: 'It converts static JPG images into animated GIF files', km: 'វាបំប្លែង JPG ទៅជា GIF Animation' }, isCorrect: false }
          ],
          explanation: {
            en: 'srcset enables resolution switching based on screen width and DPR.',
            km: 'srcset ជួយប្តូរ Resolution រូបភាពតាមអេក្រង់ និង Pixel Density។'
          }
        }
      ]
    },

    {
      id: 'resp-l15',
      slug: 'picture-element-art-direction',
      moduleNumber: 5,
      lessonNumberInModule: 3,
      title: {
        en: 'Art Direction with the HTML <picture> Element',
        km: 'Art Direction ជាមួយ HTML <picture> Element'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'While `srcset` switches image resolution, Art Direction requires changing the actual visual content, cropping, or format (e.g., a wide horizontal panorama banner on desktop versus a tight vertical square portrait crop on mobile). The `<picture>` element uses nested `<source media="...">` tags to give developers strict control over image switching.',
        km: 'ខណៈពេលដែល `srcset` ប្តូរតែ Resolution, Art Direction ត្រូវការ Crop រូបភាព ឬប្តូរទម្រង់រូបភាពតែម្តង (ឧទាហរណ៍៖ រូបភាពជួរដេកវែងលើ Desktop ប៉ុន្តែប្តូរជារូបភាពការ៉េចំកណ្តាលលើ Mobile)។ `<picture>` element អនុញ្ញាតឱ្យយើងសរសេរ `<source media="...">` ដើម្បីបញ្ជាការប្តូររូបភាពបាន 100%។'
      },
      tutorial: {
        en: 'Wrap multiple `<source media="(min-width: ...)" srcset="...">` tags inside a `<picture>` element ending with a fallback `<img>`.',
        km: 'សរសេរ `<source media="(min-width: ...)" srcset="...">` ក្នុង `<picture>` ដោយមាន `<img>` នៅខាងចុង។'
      },
      starterCode: {
        html: `<picture>
  <!-- Desktop Horizontal Crop -->
  <source media="(min-width: 768px)" srcset="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&auto=format&fit=crop">
  <!-- Mobile Square Crop Fallback -->
  <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop" alt="Coding Banner" style="max-width: 100%; height: auto; border-radius: 8px;">
</picture>`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Mobile displays square focused code matrix portrait crop optimized for vertical viewing.',
            km: 'Mobile បង្ហាញរូបភាពការ៉េផ្តោតលើ Code Matrix ដែលងាយស្រួលមើលលើអេក្រង់ឈរ។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Triggers media query (≥ 768px): Switches immediately to widescreen laptop workspace banner.',
            km: 'លក្ខខណ្ឌ (≥ 768px) ដំណើរការ៖ ប្តូរភ្លាមៗទៅជារូបភាពជួរដេក Widescreen Laptop Workspace។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Displays full high-resolution widescreen desktop banner.',
            km: 'បង្ហាញរូបភាព Widescreen ពេញទំហំច្បាស់លាស់លើ Desktop។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Next-Gen Image Format Serving (WEBP & AVIF)',
          km: 'ការផ្តល់រូបភាព Format ជំនាន់ថ្មី (WEBP/AVIF)'
        },
        description: {
          en: 'Developers use `<picture>` to serve ultra-lightweight AVIF/WEBP formats to modern browsers while falling back to standard JPG images for older legacy clients.',
          km: 'អ្នកអភិវឌ្ឍន៍ប្រើ `<picture>` ដើម្បីផ្តល់រូបភាព AVIF/WEBP ស្រាលៗលើ Browser ទំនើប និង fallback ទៅ JPG លើ Browser បុរាណ។'
        }
      },
      practiceExercise: {
        question: {
          en: 'What HTML tag must always be included inside a <picture> element as the final fallback?',
          km: 'តើ HTML Tag មួយណាដែលត្រូវតែមានជាចាំបាច់ក្នុង <picture> ជា Fallback ចុងក្រោយ?'
        },
        solution: 'An <img> tag (e.g. <img src="..." alt="...">)'
      },
      quizQuestions: [
        {
          id: 'q-l15-1',
          question: {
            en: 'When should the HTML <picture> element be used over srcset alone?',
            km: 'តើពេលណាដែលគួរប្រើប្រាស់ HTML <picture> ជំនួសឱ្យ srcset តែមួយមុខ?'
          },
          options: [
            { id: '1', text: { en: 'When Art Direction requires displaying different image crops or formats across breakpoints', km: 'នៅពេល Art Direction ត្រូវការ Crop រូបភាព ឬប្តូរ Format ខុសគ្នាស្រឡះលើ Mobile/Desktop' }, isCorrect: true },
            { id: '2', text: { en: 'To display video files inside HTML canvas', km: 'ដើម្បីបង្ហាញវីដេអូក្នុង HTML canvas' }, isCorrect: false }
          ],
          explanation: {
            en: '<picture> is designed specifically for Art Direction and image format selection.',
            km: '<picture> ត្រូវបង្កើតឡើងសម្រាប់តែ Art Direction និងការជ្រើសរើស Image Format។'
          }
        }
      ]
    },

    // Module 6: Testing & Debugging Responsive Layouts
    {
      id: 'resp-l16',
      slug: 'devtools-device-mode-testing',
      moduleNumber: 6,
      lessonNumberInModule: 1,
      title: {
        en: 'Using Browser DevTools Device Toolbar & Responsive Mode',
        km: 'ការប្រើប្រាស់ Browser DevTools Device Toolbar និង Responsive Mode'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'You do not need 50 physical smartphones to test responsive websites. Browser DevTools (Chrome/Firefox/Edge) features a dedicated Device Toolbar (`Ctrl+Shift+M` or `Cmd+Option+M`). It simulates popular mobile device viewports, touch events, screen DPR, throttling network speeds (3G/4G), and freeform viewport drag-resizing.',
        km: 'អ្នកមិនបាច់មានទូរស័ព្ទពិតប្រាកដ ៥០ គ្រឿងដើម្បីតេស្ត Website ឡើយ។ Chrome DevTools មាន Device Toolbar (`Ctrl+Shift+M`) ដែលអាច Simulaton ទំហំអេក្រង់ទូរស័ព្ទ ល្បឿនអុិនធឺណិត 3G/4G និងអាចអូសទាញទំហំអេក្រង់តេស្តបានភ្លាមៗ។'
      },
      tutorial: {
        en: 'Press `F12` -> Click the Mobile/Tablet Icon (Ctrl+Shift+M) -> Drag side handles to test viewport width transitions live.',
        km: 'ចុច `F12` -> ចុច Icon Mobile (Ctrl+Shift+M) -> អូសទាញគែមអេក្រង់ដើម្បីតេស្ត Breakpoints ផ្ទាល់។'
      },
      starterCode: {
        html: `<div class="debug-box">
  <h3>DevTools Viewport Simulator</h3>
  <p>Open Browser DevTools (F12) and toggle Device Toolbar (Ctrl+Shift+M) to test!</p>
</div>`,
        css: `.debug-box {
  background: #0f172a;
  color: #38bdf8;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px dashed #0284c7;
  text-align: center;
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'DevTools simulates iPhone 12 viewport (390px), showing exact mobile rendering.',
            km: 'DevTools Simulation ទំហំ iPhone 12 (390px) បង្ហាញទម្រង់ Mobile ជាក់ស្តែង។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'DevTools simulates iPad Mini viewport (768px), testing breakpoint transitions.',
            km: 'DevTools Simulation ទំហំ iPad Mini (768px) តេស្តមើលការផ្លាស់ប្តូរ Breakpoint។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'DevTools responsive handles drag out to 1280px widescreen layout mode.',
            km: 'DevTools អូសពង្រីកទៅទំហំ 1280px Widescreen Desktop Mode។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Simulating Slow Mobile 3G Networks',
          km: 'ការតេស្តល្បឿន អុិនធឺណិត 3G ខ្សោយ'
        },
        description: {
          en: 'Frontend QA engineers use DevTools Throttling to test how responsive web applications load under real-world rural 3G mobile network connections.',
          km: 'Frontend QA Engineers ប្រើប្រាស់ DevTools Throttling ដើម្បីតេស្តមើលការ Load លើអុិនធឺណិត 3G ខ្សោយ។'
        }
      },
      practiceExercise: {
        question: {
          en: 'What is the keyboard shortcut to toggle Device Toolbar in Chrome DevTools on Windows/Linux vs Mac?',
          km: 'តើ Shortcut Key អ្វីសម្រាប់បើក/បិទ Device Toolbar ក្នុង Chrome DevTools?'
        },
        solution: 'Ctrl + Shift + M (Windows/Linux) or Cmd + Option + M (Mac)'
      },
      quizQuestions: [
        {
          id: 'q-l16-1',
          question: {
            en: 'What does the DevTools Device Toolbar allow developers to simulate?',
            km: 'តើ DevTools Device Toolbar អនុញ្ញាតឱ្យ Developer Simulation អ្វីខ្លះ?'
          },
          options: [
            { id: '1', text: { en: 'Mobile screen viewports, touch emulation, and network speed throttling', km: 'ទំហំអេក្រង់ទូរស័ព្ទ, Touch Screen, និងល្បឿនអុិនធឺណិត' }, isCorrect: true },
            { id: '2', text: { en: 'Compiling C++ backend code into WebAssembly', km: 'បំប្លែង C++ ទៅជា WebAssembly' }, isCorrect: false }
          ],
          explanation: {
            en: 'Device Toolbar simulates screen viewports, touch interactions, and network speeds.',
            km: 'Device Toolbar ប្រើសម្រាប់ Simulate អេក្រង់, Touch, និងល្បឿន Network។'
          }
        }
      ]
    },

    {
      id: 'resp-l17',
      slug: 'common-responsive-bugs-horizontal-scroll',
      moduleNumber: 6,
      lessonNumberInModule: 2,
      title: {
        en: 'Common Responsive Bugs: Diagnosing and Fixing Horizontal Scroll Overflow',
        km: 'Bugs ញឹកញាប់ក្នុង Responsive៖ ការរកនិងដោះស្រាយ Horizontal Scroll Overflow'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'The most infamous responsive bug is unexpected horizontal scrolling on mobile phones. This occurs when an element has a fixed pixel width (`width: 500px`), unconstrained images without `max-width: 100%`, negative outer margins, or preformatted text code blocks without `overflow-x: auto`. Using `* { box-sizing: border-box; }` and inspecting overflowing elements in DevTools fixes this instantly.',
        km: 'Bug ដ៏គួរឱ្យធុញទ្រាន់បំផុតគឺការលេចចេញ Horizontal Scrollbar លើ Mobile។ វាបង្កឡើងដោយសារធាតុដែលមាន pixel width ថេរ (`width: 500px`), រូបភាពគ្មាន `max-width: 100%` ឬ Margin លៀនចេញក្រៅ។ ការប្រើប្រាស់ `box-sizing: border-box` និងការត្រួតពិនិត្យក្នុង DevTools អាចដោះស្រាយបញ្ហានេះបានភ្លាមៗ។'
      },
      tutorial: {
        en: 'Diagnose overflow bugs by running `document.querySelectorAll("*")` in console or adding a temporary debug border `* { outline: 1px solid red; }`.',
        km: 'ស្វែងរក Element ដែលលៀនចេញក្រៅដោយប្រើប្រាស់ `* { outline: 1px solid red; }` ក្នុង CSS។'
      },
      starterCode: {
        html: `<div class="fixed-bug-card">
  <h3>Overflow Bug Prevention</h3>
  <pre class="code-block"><code>const fixedWidthString = "SuperLongStringWithoutBreaksThatMightCauseOverflowIfUnconstrained";</code></pre>
</div>`,
        css: `.fixed-bug-card {
  width: 100%;
  background: #1e293b;
  padding: 1rem;
  border-radius: 8px;
  color: white;
}
/* Fix code block overflow bug */
.code-block {
  background: #0f172a;
  padding: 0.75rem;
  border-radius: 6px;
  overflow-x: auto;
  white-space: pre;
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Long code string stays safely contained inside scrollable code box without causing whole page horizontal scroll.',
            km: 'កូដវែងស្ថិតនៅក្នុង Box រមូរខាងក្នុង មិនធ្វើឱ្យប៉ះពាល់ដល់ ទំព័ររួមឡើយ។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Code block displays clean inline text with no internal scrollbars needed.',
            km: 'Code block បង្ហាញអត្ថបទវែង ស្អាតបាតលើ Tablet។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Full desktop width contains all code strings seamlessly.',
            km: 'បង្ហាញកូដពេញលេញស្អាតបាតលើ Desktop។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Global Universal CSS Box Sizing Reset',
          km: 'ការកំណត់ Universal Box Sizing Reset'
        },
        description: {
          en: 'Every commercial web application starts with `*, *::before, *::after { box-sizing: border-box; }` to include padding and border inside total element width calculations.',
          km: 'គ្រប់ Web App ស្តង់ដារទាំងអស់ត្រូវតែមាន `box-sizing: border-box` ដើម្បីរាប់បញ្ចូល padding/border ក្នុងទទឹងរួម។'
        }
      },
      practiceExercise: {
        question: {
          en: 'What CSS outline snippet can be added temporarily to all elements to visually spot which element is causing horizontal scroll overflow?',
          km: 'តើ CSS outline snippet មួយណាដែលគេប្រើជាបណ្តោះអាសន្នដើម្បីស្វែងរក Element ដែលលៀនចេញក្រៅ?'
        },
        solution: '* { outline: 1px solid red; }'
      },
      quizQuestions: [
        {
          id: 'q-l17-1',
          question: {
            en: 'What is the root cause of horizontal scrolling bugs on mobile devices?',
            km: 'តើអ្វីជាមូលហេតុចម្បងនៃ Bug Horizontal Scrollbar លើ Mobile?'
          },
          options: [
            { id: '1', text: { en: 'Child elements having fixed pixel widths or unconstrained images wider than screen viewport', km: 'Child elements មាន fixed pixel width ឬរូបភាពធំជាងទំហំអេក្រង់' }, isCorrect: true },
            { id: '2', text: { en: 'Using modern HTML5 semantic elements like <main> and <article>', km: 'ការប្រើប្រាស់ HTML5 semantic elements' }, isCorrect: false }
          ],
          explanation: {
            en: 'Fixed pixel widths wider than the mobile viewport cause page overflow.',
            km: 'ការដាក់ Pixel Width ថេរធំជាងទំហំអេក្រង់ទូរស័ព្ទ បណ្តាលឱ្យលៀនចេញក្រៅ។'
          }
        }
      ]
    },

    {
      id: 'resp-l18',
      slug: 'reading-computed-styles-media-queries-dev-tools',
      moduleNumber: 6,
      lessonNumberInModule: 3,
      title: {
        en: 'Inspecting Computed Styles & Active Media Queries in DevTools',
        km: 'ការពិនិត្យ Computed Styles និង Active Media Queries ក្នុង DevTools'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'When a layout does not behave as expected, open the DevTools Elements panel and check the "Styles" and "Computed" tabs. DevTools shows every active media query block matching the current screen width, crossing out overridden CSS rules and highlighting active breakpoint declarations in real time.',
        km: 'នៅពេលដែល Layout បង្ហាញមិនត្រូវតាមការរំពឹងទុក សូមបើក DevTools Elements panel រួចពិនិត្យមើល "Styles" និង "Computed" tabs។ DevTools នឹងបង្ហាញ Media Query ណាដែលកំពុងដំណើរការ និងគូសឆូតរំលង CSS Rules ដែលត្រូវបាន Overridden។'
      },
      tutorial: {
        en: 'Right-click any element -> Inspect -> Look at the Styles pane to see active `@media (min-width: ...)` rules.',
        km: 'Right-click លើ Element -> Inspect -> មើលក្នុង Styles pane ដើម្បីមើល `@media` rules ដែលសកម្ម។'
      },
      starterCode: {
        html: `<div class="inspect-target">
  <h3>Inspecting CSS Specificity & Media Rules</h3>
  <p>Inspect me in DevTools to see active media rules!</p>
</div>`,
        css: `.inspect-target {
  background: #0f172a;
  color: white;
  padding: 1rem;
  border-radius: 8px;
}

@media (min-width: 640px) {
  .inspect-target {
    border: 2px solid #38bdf8;
  }
}

@media (min-width: 1024px) {
  .inspect-target {
    background: #1e293b;
    border-color: #34d399;
  }
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: 'Styles pane shows base styles active; both 640px and 1024px media query blocks remain grayed out/inactive.',
            km: 'Styles pane បង្ហាញ Base style; ឯ Media Query 640px និង 1024px មិនទាន់ដំណើរការ (Inactive) ឡើយ។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Styles pane highlights `@media (min-width: 640px)` as active with sky-blue border.',
            km: 'Styles pane បង្ហាញ `@media (min-width: 640px)` កំពុងដំណើរការជាមួយ Border ពណ៌ខៀវ។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Styles pane highlights `@media (min-width: 1024px)` as active, overriding border color to emerald green.',
            km: 'Styles pane បង្ហាញ `@media (min-width: 1024px)` សកម្ម និង override border ទៅពណ៌បៃតង។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Debugging CSS Cascade & Specificity Conflicts',
          km: 'ការដោះស្រាយជម្លោះ CSS Specificity'
        },
        description: {
          en: 'Professional developers rely on DevTools Styles inspection to catch specificity issues where a desktop-first max-width rule unintentionally overrides a mobile-first min-width declaration.',
          km: 'អ្នកជំនាញប្រើ DevTools Inspect ដើម្បីស្វែងរកកន្លែងដែល CSS Rule ជាន់គ្នា (Specificity Conflict)។'
        }
      },
      practiceExercise: {
        question: {
          en: 'In Chrome DevTools, what does a crossed-out CSS property line indicate in the Styles pane?',
          km: 'ក្នុង Chrome DevTools តើអត្ថបទ CSS ដែលមានខ្សែបន្ទាត់គូសឆូតពីលើ (Crossed-out) មានន័យដូចម្តេច?'
        },
        solution: 'It indicates that the CSS rule was overridden by another rule with higher specificity or later cascade order.'
      },
      quizQuestions: [
        {
          id: 'q-l18-1',
          question: {
            en: 'Where in DevTools can you confirm which media query is currently active for an element?',
            km: 'តើនៅកន្លែងណាក្នុង DevTools ដែលអ្នកអាចពិនិត្យមើលថា Media Query មួយណាដែលកំពុងដំណើរការ?'
          },
          options: [
            { id: '1', text: { en: 'The Styles pane in the Elements panel', km: 'ក្នុង Styles pane នៃ Elements panel' }, isCorrect: true },
            { id: '2', text: { en: 'The Network waterfall tab', km: 'ក្នុង Network waterfall tab' }, isCorrect: false }
          ],
          explanation: {
            en: 'The Elements panel Styles pane shows all active CSS rules and media queries.',
            km: 'Elements panel Styles pane បង្ហាញ CSS rules និង media queries ដែលកំពុងសកម្ម។'
          }
        }
      ]
    },

    // Capstone Module
    {
      id: 'resp-l19',
      slug: 'capstone-refactor-fixed-to-responsive',
      moduleNumber: 7,
      lessonNumberInModule: 1,
      title: {
        en: 'Capstone Project: Refactor a Broken Fixed-Width Site into a Fluid Responsive App',
        km: 'គម្រោង Capstone៖ Refactor គេហទំព័រដែលខូច Layout ឱ្យទៅជា Responsive 100%'
      },
      durationMinutes: 30,
      difficulty: 'Intermediate',
      explanation: {
        en: 'In this final Capstone project, you apply all responsive design principles learned throughout Modules 1 to 6. You will diagnose a legacy fixed-pixel website with 1000px rigid containers, non-responsive images, and broken card columns, then refactor it step-by-step into a fluid, mobile-first responsive web application.',
        km: 'ក្នុងគម្រោងបញ្ចប់ចុងក្រោយនេះ អ្នកនឹងត្រូវអនុវត្តរាល់ចំណេះដឹងទាំងអស់ចាប់ពី Module 1 ដល់ 6។ អ្នកនឹងស្វែងរក bug លើគេហទំព័របុរាណដែលប្រើ Pixel ថេរ 1000px រួចកែប្រែ (Refactor) ឱ្យទៅជា Fluid Mobile-First Responsive App 100%។'
      },
      tutorial: {
        en: 'Inspect the capstone code, replace rigid pixel widths with `width: 100%` and `max-width`, set `img { max-width: 100%; height: auto; }`, and apply CSS Grid `repeat(auto-fit, minmax(260px, 1fr))` for card reflow.',
        km: 'ជំនួស pixel widths ដោយ `width: 100%` និង `max-width`, ដាក់ `img { max-width: 100%; height: auto; }` និងប្រើ CSS Grid auto-fit។'
      },
      starterCode: {
        html: `<div class="capstone-shell">
  <header class="cap-header">
    <div class="brand">⚡ SabayCode App</div>
    <nav class="cap-nav">
      <a href="#">Home</a>
      <a href="#">Courses</a>
      <a href="#">Community</a>
    </nav>
  </header>

  <section class="cap-hero">
    <div class="cap-hero-text">
      <h2>Mobile-First Fluid Layout</h2>
      <p>Refactored using relative CSS units, clamp typography, auto-fit grid cards, and mobile-first media queries.</p>
    </div>
  </section>

  <div class="cap-grid">
    <div class="cap-card">
      <h4>1. Fluid Containers</h4>
      <p>Replaced fixed width: 1000px with width: 100% and max-width: 1100px.</p>
    </div>
    <div class="cap-card">
      <h4>2. Mobile First</h4>
      <p>Base styles target mobile devices first, adding enhancements with min-width media queries.</p>
    </div>
    <div class="cap-card">
      <h4>3. Auto Reflow</h4>
      <p>CSS Grid auto-fit reflows card columns automatically across viewports.</p>
    </div>
  </div>
</div>`,
        css: `/* CAPSTONE REFACTORED FLUID STYLES */
.capstone-shell {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem;
  background: #0f172a;
  color: white;
}
.cap-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #334155;
}
.brand { font-size: 1.25rem; font-weight: bold; color: #38bdf8; }
.cap-nav { display: flex; gap: 1rem; }
.cap-nav a { color: #94a3b8; text-decoration: none; }

.cap-hero { margin: 1.5rem 0; }
.cap-hero h2 { font-size: clamp(1.5rem, 3vw + 1rem, 2.5rem); color: #f8fafc; }
.cap-hero p { color: #94a3b8; margin-top: 0.5rem; }

.cap-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}
.cap-card {
  background: #1e293b;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #334155;
}
.cap-card h4 { color: #38bdf8; margin-bottom: 0.5rem; }
.cap-card p { color: #cbd5e1; font-size: 0.875rem; }

@media (min-width: 640px) {
  .cap-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}`
      },
      viewportComparison: {
        mobile: {
          width: '~375px',
          description: {
            en: '100% fluid mobile container with stacked navigation header and single-column grid cards.',
            km: 'Fluid mobile container 100% ជាមួយ Header និង Grid Cards តម្រៀបជា 1 Column ចុះក្រោម។'
          }
        },
        tablet: {
          width: '~768px',
          description: {
            en: 'Header switches to horizontal row while grid cards reflow into 2 or 3 dynamic columns.',
            km: 'Header ប្តូរទៅជាជួរដេក ឯ Grid cards រៀបជា 2 ឬ 3 Columns ស្វ័យប្រវត្តិ។'
          }
        },
        desktop: {
          width: '~1280px',
          description: {
            en: 'Layout caps gracefully at 1100px max-width centered on widescreen displays.',
            km: 'Layout រីកដល់កំណត់ 1100px រក្សាទម្រង់ស្អាតបាតនៅចំកណ្តាលអេក្រង់ Desktop។'
          }
        }
      },
      realWorldExample: {
        title: {
          en: 'Production Frontend Refactoring Workflow',
          km: 'ដំណើរការ Refactoring ក្នុងក្រុមហ៊ុន'
        },
        description: {
          en: 'Frontend developers frequently refactor older legacy codebases into responsive mobile-first architectures to boost mobile conversion rates and user retention.',
          km: 'អ្នកអភិវឌ្ឍន៍តែងតែ Refactor កូដចាស់ៗឱ្យទៅជា Responsive Mobile-First ដើម្បីបង្កើនចំនួនអ្នកប្រើប្រាស់លើ Mobile។'
        }
      },
      practiceExercise: {
        question: {
          en: 'What are the 4 core pillars applied in this Capstone project to make fixed sites responsive?',
          km: 'តើ ៤ ចំណុចសំខាន់អ្វីខ្លះដែលត្រូវបានអនុវត្តក្នុង Capstone នេះដើម្បីធ្វើឱ្យ Site Responsive?'
        },
        solution: '1. Viewport Meta Tag & Fluid Containers (width: 100%, max-width)\n2. Mobile-First min-width media queries\n3. CSS Grid auto-fit minmax reflow\n4. Fluid media (max-width: 100%) & clamp() typography'
      },
      quizQuestions: [
        {
          id: 'q-l19-1',
          question: {
            en: 'What is the final result of applying mobile-first responsive refactoring to a website?',
            km: 'តើអ្វីជាលទ្ធផលចុងក្រោយនៃការធ្វើ Mobile-First Responsive Refactoring លើ Website?'
          },
          options: [
            { id: '1', text: { en: 'A unified single-codebase application that adapts fluidly across mobile, tablet, and widescreen desktop displays', km: 'ប្រព័ន្ធកូដតែមួយដែលសម្របខ្លួនបានយ៉ាងរលូនលើ Mobile, Tablet និង Desktop' }, isCorrect: true },
            { id: '2', text: { en: 'It limits page access exclusively to desktop computers', km: 'វាវាយតម្លៃកម្រិតការចូលមើលឱ្យមើលបានតែលើ Desktop' }, isCorrect: false }
          ],
          explanation: {
            en: 'Responsive refactoring yields a single unified codebase that runs smoothly on all devices.',
            km: 'Responsive Refactoring បង្កើតបានជាកូដតែមួយដែលរត់រលូនលើគ្រប់ឧបករណ៍។'
          }
        }
      ]
    }
  ]
};
