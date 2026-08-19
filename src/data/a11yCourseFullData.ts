import { FrontendCourse } from '../types/frontendClass';

export const A11Y_COURSE_DATA: FrontendCourse = {
  id: 'a11y',
  title: {
    en: 'Web Accessibility (a11y) Course',
    km: 'វគ្គសិក្សា Web Accessibility (a11y)'
  },
  iconName: 'a11y',
  categoryId: 'quality',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Master WCAG 2.1 guidelines (POUR), semantic HTML, ARIA roles & rules, keyboard focus management, color contrast, and screen readers.',
    km: 'រៀន Web Accessibility (a11y) តាម WCAG principles (POUR), Semantic HTML, ARIA, Keyboard focus, Color contrast, និង Screen readers។'
  },
  summary: {
    en: 'Web Accessibility (a11y) គឺជាការរចនា Website ដើម្បីឲ្យអ្នកប្រើប្រាស់គ្រប់គ្នា អាចប្រើប្រាស់បាន រួមទាំងអ្នកមាន Disability ដូចជាបញ្ហាភ្នែក ការស្តាប់ ចលនា ឬ Cognitive ដោយប្រើប្រាស់ Semantic HTML, ARIA, និង Keyboard Navigation ត្រឹមត្រូវ។\n\n📌 តម្រូវការជាមុន៖ HTML5 Course, Sass/Tailwind/Bootstrap Course, និង JavaScript Course (ណែនាំ) — ជំនាញនេះត្រូវអនុវត្តបន្ថែមលើគ្រប់វគ្គសិក្សាទាំងអស់មិនថា plain HTML, React, Vue ឬ Svelte។',
    km: 'Web Accessibility (a11y) គឺជាការរចនា Website ដើម្បីឲ្យអ្នកប្រើប្រាស់គ្រប់គ្នា អាចប្រើប្រាស់បាន រួមទាំងអ្នកមាន Disability ដូចជាបញ្ហាភ្នែក ការស្តាប់ ចលនា ឬ Cognitive ដោយប្រើប្រាស់ Semantic HTML, ARIA, និង Keyboard Navigation ត្រឹមត្រូវ។\n\n📌 តម្រូវការជាមុន៖ HTML5 Course, Sass/Tailwind/Bootstrap Course, និង JavaScript Course (ណែនាំ) — ជំនាញនេះត្រូវអនុវត្តបន្ថែមលើគ្រប់វគ្គសិក្សាទាំងអស់មិនថា plain HTML, React, Vue ឬ Svelte។'
  },
  estimatedHours: 4,
  lessonCount: 19,
  cheatSheet: [
    {
      concept: 'POUR Principles (WCAG 2.1)',
      code: 'Perceivable (មើលឃើញ/ដឹង) | Operable (បញ្ជាបាន) | Understandable (យល់បាន) | Robust (រឹងមាំជាមួយ Assistive Tech)',
      explanation: {
        en: 'The 4 fundamental pillars of web accessibility guidelines.',
        km: 'សសរស្ដម្ភទាំង ៤ នៃគោលការណ៍ណែនាំស្តង់ដារ WCAG សម្រាប់ Web Accessibility។'
      }
    },
    {
      concept: 'Semantic Landmarks',
      code: '<header> (banner) | <nav> (navigation) | <main> (main) | <aside> (complementary) | <footer> (contentinfo)',
      explanation: {
        en: 'Landmarks allow screen reader users to jump directly to page sections using shortcuts.',
        km: 'Landmark elements ជួយឱ្យ Screen Reader users អាចលោតផ្លោះទៅកាន់ផ្នែកផ្សេងៗនៃទំព័របានរហ័ស។'
      }
    },
    {
      concept: 'First Rule of ARIA',
      code: 'Do not use ARIA if a native HTML element or attribute already exists!\n<!-- ❌ BAD --> <div role="button" onclick="submit()">Submit</div>\n<!-- ✅ GOOD --> <button type="button" onclick="submit()">Submit</button>',
      explanation: {
        en: 'Always prefer native semantic HTML elements over custom elements patched with ARIA.',
        km: 'តែងតែប្រើប្រាស់ Semantic HTML ដើមជាមុនសិន ចៀសវាងការប្រើ <div> + ARIA patches។'
      }
    },
    {
      concept: 'Accessible Naming (ARIA Attributes)',
      code: 'aria-label="Search"  |  aria-labelledby="heading-id"  |  aria-describedby="help-text-id"',
      explanation: {
        en: 'aria-label sets text directly; aria-labelledby references another element title; aria-describedby references help/error text.',
        km: 'aria-label កំណត់ឈ្មោះផ្ទាល់, aria-labelledby យក ID ចំណងជើងផ្សេង, aria-describedby ភ្ជាប់ទៅ ID ព័ត៌មានបន្ថែម/Error។'
      }
    },
    {
      concept: 'WCAG AA Color Contrast Minimums',
      code: 'Normal Text (<18pt / <14pt bold): 4.5:1 ratio\nLarge Text (≥18pt / ≥14pt bold): 3.0:1 ratio\nUI Controls & Borders: 3.0:1 ratio',
      explanation: {
        en: 'Ensures sufficient visual contrast between foreground text and background colors.',
        km: 'កំណត់កម្រិត Contrast អប្បបរមាដើម្បីឱ្យអ្នកមានបញ្ហាភ្នែកស្រពិចស្រពិលអាចអានអត្ថបទបានច្បាស់។'
      }
    },
    {
      concept: '❌ Common Mistake 1: Focus Outline Removal',
      code: '/* ❌ BAD */  :focus { outline: none; }\n/* ✅ GOOD */ :focus-visible { outline: 2px solid #6366f1; outline-offset: 2px; }',
      explanation: {
        en: 'Removing outline without replacement breaks keyboard navigation for sighted users.',
        km: 'ការលុប focus outline ដោយគ្មានកូដជំនួស ធ្វើឱ្យអ្នកចុច Tab Key លើ Keyboard មើលមិនឃើញ Focus Position ឡើយ។'
      }
    },
    {
      concept: '❌ Common Mistake 2: Missing Form Labels',
      code: '<!-- ❌ BAD --> <input type="email" placeholder="Enter email">\n<!-- ✅ GOOD --> <label for="email">Email</label><input id="email" type="email">',
      explanation: {
        en: 'Placeholder text vanishes upon typing and is not a reliable label for assistive technology.',
        km: 'Placeholder Text មិនអាចជំនួស Label បានទេ ព្រោះវាបាត់ពេលសរសេរ និងមិនត្រូវ Screen Reader ស្គាល់ជា Label ឡើយ។'
      }
    },
    {
      concept: '❌ Common Mistake 3: Relying Only on Color',
      code: '<!-- ❌ BAD --> <span style="color:red">Invalid</span>\n<!-- ✅ GOOD --> <span class="error"><svg>...</svg> Invalid Email (Must contain @)</span>',
      explanation: {
        en: 'Colorblind users cannot distinguish errors if red color is the only visual indicator.',
        km: 'អ្នកមានបញ្ហាពិការពណ៌ (Colorblind) មិនអាចដឹង Error តាមរយៈពណ៌ក្រហមតែមួយមុខបានឡើយ ត្រូវមាន Icon/Text អមបន្ថែម។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-a11y-1',
      question: {
        en: 'What does the "First Rule of ARIA" state?',
        km: 'តើ "First Rule of ARIA" ចែងអំពីអ្វី?'
      },
      options: [
        { id: '1', text: { en: 'Always add ARIA attributes to every HTML element on the page', km: 'ត្រូវបន្ថែម ARIA attributes លើគ្រប់ HTML element ទាំងអស់' }, isCorrect: false },
        { id: '2', text: { en: 'Do not use ARIA if a native HTML element or attribute already exists that provides the semantic behavior', km: 'កុំប្រើ ARIA ប្រសិនបើមាន Native HTML Element ឬ Attribute ដែលមាន Semantic ស្រាប់' }, isCorrect: true },
        { id: '3', text: { en: 'ARIA attributes should only be written in CSS selectors', km: 'ARIA attributes ត្រូវសរសេរតែក្នុង CSS selectors ប៉ុណ្ណោះ' }, isCorrect: false },
        { id: '4', text: { en: 'ARIA overrides all JavaScript event listeners automatically', km: 'ARIA ជំនួស JavaScript event listeners ដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
      ],
      explanation: {
        en: 'The First Rule of ARIA mandates using native HTML semantics (like <button> or <nav>) instead of adding ARIA roles to <div> tags whenever possible.',
        km: 'ច្បាប់ទីមួយនៃ ARIA បង្គាប់ឱ្យប្រើ Semantic HTML ដើម (ដូចជា <button> ឬ <nav>) ជាជាងការយក <div> មកបិទ ARIA roles។'
      }
    },
    {
      id: 'q-a11y-2',
      question: {
        en: 'What will a screen reader (e.g. VoiceOver) announce for `<button aria-label="Close modal"><svg>...</svg></button>`?',
        km: 'តើ Screen Reader (ដូចជា VoiceOver) នឹងអាន snippet `<button aria-label="Close modal"><svg>...</svg></button>` យ៉ាងដូចម្តេច?'
      },
      options: [
        { id: '1', text: { en: '"Unlabeled button"', km: '"Unlabeled button"' }, isCorrect: false },
        { id: '2', text: { en: '"Close modal, button"', km: '"Close modal, button"' }, isCorrect: true },
        { id: '3', text: { en: '"SVG image, button"', km: '"SVG image, button"' }, isCorrect: false },
        { id: '4', text: { en: 'It will remain completely silent', km: 'វានឹងស្ងាត់ស្ងៀមមិនអានអ្វីទាំងអស់' }, isCorrect: false }
      ],
      explanation: {
        en: 'aria-label provides the accessible name "Close modal", which screen readers combine with the native role "button".',
        km: 'aria-label ផ្តល់ Accessible Name "Close modal" ដល់ Screen Reader ដើម្បីអានថា "Close modal, button"។'
      }
    },
    {
      id: 'q-a11y-3',
      question: {
        en: 'Which value of `tabindex` makes an element focusable via JavaScript `.focus()` but keeps it OUT of the natural Tab sequence?',
        km: 'តើតម្លៃ `tabindex` មួយណាដែលធ្វើឱ្យ Element អាចទទួល Focus តាម JS `.focus()` ប៉ុន្តែមិនចូលក្នុងលំដាប់ Tab ធម្មតា?'
      },
      options: [
        { id: '1', text: { en: 'tabindex="0"', km: 'tabindex="0"' }, isCorrect: false },
        { id: '2', text: { en: 'tabindex="-1"', km: 'tabindex="-1"' }, isCorrect: true },
        { id: '3', text: { en: 'tabindex="1"', km: 'tabindex="1"' }, isCorrect: false },
        { id: '4', text: { en: 'tabindex="none"', km: 'tabindex="none"' }, isCorrect: false }
      ],
      explanation: {
        en: 'tabindex="-1" allows programmatic focus (e.g. moving focus into a modal dialog) without placing the element into tab order.',
        km: 'tabindex="-1" ជួយឱ្យកូដ JS បាញ់ Focus ទៅកាន់ Element នោះបាន ប៉ុន្តែចុច Tab key ធម្មតាមិនលោតចូលឡើយ។'
      }
    },
    {
      id: 'q-a11y-4',
      question: {
        en: 'According to WCAG 2.1 AA, what is the minimum contrast ratio required for normal body text?',
        km: 'យោងតាមស្តង់ដារ WCAG 2.1 AA តើកម្រិត Contrast Ratio អប្បបរមាសម្រាប់អត្ថបទធម្មតា (Normal Text) គឺប៉ុន្មាន?'
      },
      options: [
        { id: '1', text: { en: '3.0:1', km: '3.0:1' }, isCorrect: false },
        { id: '2', text: { en: '4.5:1', km: '4.5:1' }, isCorrect: true },
        { id: '3', text: { en: '7.0:1', km: '7.0:1' }, isCorrect: false },
        { id: '4', text: { en: '2.0:1', km: '2.0:1' }, isCorrect: false }
      ],
      explanation: {
        en: 'WCAG 2.1 AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.',
        km: 'ស្តង់ដារ WCAG 2.1 AA តម្រូវឱ្យមាន Contrast Ratio យ៉ាងតិច 4.5:1 សម្រាប់អត្ថបទធម្មតា និង 3:1 សម្រាប់អត្ថបទធំ។'
      }
    },
    {
      id: 'q-a11y-5',
      question: {
        en: 'How should input error messages be associated with an input element for assistive technologies?',
        km: 'តើធ្វើដូចម្តេចដើម្បីភ្ជាប់សារ Error ទៅកាន់ Input Element ឱ្យ Screen Reader ស្គាល់?'
      },
      options: [
        { id: '1', text: { en: 'By placing the error text in placeholder attribute', km: 'ដោយដាក់សារ Error ក្នុង placeholder attribute' }, isCorrect: false },
        { id: '2', text: { en: 'By setting aria-describedby="error-msg-id" on the input', km: 'ដោយកំណត់ aria-describedby="error-msg-id" លើ input' }, isCorrect: true },
        { id: '3', text: { en: 'By giving the error span a class="red"', km: 'ដោយកំណត់ class="red" លើ error span' }, isCorrect: false },
        { id: '4', text: { en: 'By putting the error inside console.error()', km: 'ដោយ print error ចូល console.error()' }, isCorrect: false }
      ],
      explanation: {
        en: 'aria-describedby links an input to the ID of its error or helper element so screen readers announce it when the field gains focus.',
        km: 'aria-describedby ភ្ជាប់ Input ទៅកាន់ ID នៃសារ Error ដើម្បីឱ្យ Screen Reader អានប្រាប់អ្នកប្រើប្រាស់ភ្លាមៗពេល Focus លើ Input នោះ។'
      }
    },
    {
      id: 'q-a11y-6',
      question: {
        en: 'What is the purpose of a "Skip to main content" link at the top of a webpage?',
        km: 'តើ "Skip to main content" link នៅផ្នែកខាងលើនៃគេហទំព័រមានប្រយោជន៍អ្វី?'
      },
      options: [
        { id: '1', text: { en: 'It reloads the page faster', km: 'វាជួយរំលឹក Reload page ឱ្យលឿន' }, isCorrect: false },
        { id: '2', text: { en: 'It allows keyboard users to bypass repetitive navigation header menus and jump straight to main content', km: 'វាជួយឱ្យ Keyboard Users ចុចរំលង Navigation Header ទៅកាន់ផ្នែកមាតិកាចម្បងភ្លាមៗ' }, isCorrect: true },
        { id: '3', text: { en: 'It changes the text language automatically', km: 'វាផ្លាស់ប្តូរភាសាដោយស្វ័យប្រវត្តិ' }, isCorrect: false },
        { id: '4', text: { en: 'It closes all open modal popups', km: 'វាបិទរាល់ modal popups ដែលកំពុងបើក' }, isCorrect: false }
      ],
      explanation: {
        en: 'Skip links enable keyboard users to skip past large header navigation lists without having to tab through dozens of links on every page load.',
        km: 'Skip link ជួយឱ្យអ្នកប្រើ Keyboard មិនបាច់អង្គុយចុច Tab រាប់សិបដងឆ្លងកាត់ Header Menu រាល់ពេលបើកទំព័រថ្មី។'
      }
    },
    {
      id: 'q-a11y-7',
      question: {
        en: 'Why should positive values of `tabindex` (e.g. `tabindex="5"`) be avoided?',
        km: 'ហេតុអ្វីបានជាគួរចៀសវាងការប្រើតម្លៃ `tabindex` វិជ្ជមាន (ដូចជា `tabindex="5"`)?'
      },
      options: [
        { id: '1', text: { en: 'They cause JavaScript errors on execution', km: 'វាបង្កឱ្យមាន JavaScript errors' }, isCorrect: false },
        { id: '2', text: { en: 'They disrupt the natural visual DOM focus order, creating a frustrating experience for keyboard users', km: 'វាធ្វើឱ្យជួរ Focus ដើរខុសពីលំដាប់លំដោយរចនាសម្ព័ន្ធ HTML លើអេក្រង់' }, isCorrect: true },
        { id: '3', text: { en: 'They reduce browser rendering speed', km: 'វាធ្វើឱ្យ Browser Render យឺត' }, isCorrect: false },
        { id: '4', text: { en: 'They prevent CSS styles from applying', km: 'វាជះឥទ្ធិពលមិនឱ្យ CSS ដើរ' }, isCorrect: false }
      ],
      explanation: {
        en: 'Positive tabindex forces elements into an arbitrary tab order that overrides natural DOM tree flow, leading to unexpected focus jumps.',
        km: 'tabindex វិជ្ជមានបង្ខំឱ្យ Focus លោតរំលងខុសពីលំដាប់លំដោយធម្មជាតិនៃ DOM tree ធ្វើឱ្យអ្នកប្រើប្រាស់ច្របូកច្របល់។'
      }
    },
    {
      id: 'q-a11y-8',
      question: {
        en: 'Which automated accessibility testing limitation should developers keep in mind?',
        km: 'តើកម្រិតកំណត់ (Limitation) អ្វីខ្លះនៃ Automated Accessibility Tools (ដូចជា Lighthouse/axe) ដែលអ្នកអភិវឌ្ឍន៍ត្រូវចងចាំ?'
      },
      options: [
        { id: '1', text: { en: 'Automated tools can catch only around 30%–50% of real-world accessibility issues and cannot evaluate human usability', km: 'Automated tools អាចស្វែងរកទិន្នន័យ Error ឃើញត្រឹមតែ 30%–50% ប៉ុណ្ណោះ ហើយមិនអាចតេស្ត Usability ពិតប្រាកដបានឡើយ' }, isCorrect: true },
        { id: '2', text: { en: 'Automated tools work only on mobile devices', km: 'Automated tools ដើរតែលើ Mobile' }, isCorrect: false },
        { id: '3', text: { en: 'Automated tools check only CSS code and ignore HTML markup', km: 'Automated tools ពិនិត្យតែ CSS ប៉ុណ្ណោះ' }, isCorrect: false },
        { id: '4', text: { en: 'A 100% Lighthouse score guarantees complete accessibility for all users', km: 'ពិន្ទុ Lighthouse 100% ធានាថាគេហទំព័រ Accessibility 100% ឥតខ្ចោះ' }, isCorrect: false }
      ],
      explanation: {
        en: 'Automated tools catch basic syntax and color ratio defects but cannot verify if alt texts make logical sense or if screen reader context is meaningful.',
        km: 'Automated tools អាច Catch បានតែ Bug បច្ចេកទេសដំបូងៗប៉ុណ្ណោះ ប៉ុន្តែមិនអាចផ្ទៀងផ្ទាត់ថាតើ alt text មានន័យសមរម្យ ឬ Focus trapping ដើរត្រឹមត្រូវឡើយ។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'Audit & Fix an Inaccessible Sample Page',
      km: 'គម្រោង Capstone៖ ការត្រួតពិនិត្យ និងកែប្រែ Accessibility លើគេហទំព័រ'
    },
    description: {
      en: 'Walkthrough of an inaccessible Web Application containing 5 planted defects: (1) Unlabeled icon-only button, (2) Color-only form validation, (3) Custom <div> dropdown without keyboard controls, (4) Missing landmark structure, and (5) Low-contrast text. Refactor every issue to achieve 100% WCAG AA compliance.',
      km: 'អនុវត្តការត្រួតពិនិត្យគេហទំព័រដែលមាន Bug Accessibility ធំៗចំនួន ៥ ៖ (១) Icon Button គ្មាន Label, (២) សារ Error ប្រើតែពណ៌ក្រហម, (៣) Custom <div> Dropdown គ្មាន Keyboard Support, (៤) ខ្វះ Landmark structure, និង (៥) អត្ថបទមាន Contrast យឺត។ កែប្រែកូដឱ្យត្រឹមត្រូវតាម WCAG AA។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Inaccessible Shopping Cart (Planted Bugs)</title>
  <style>
    body { font-family: sans-serif; background: #ffffff; color: #94a3b8; padding: 20px; } /* BUG 5: Low contrast text (#94a3b8 on #fff) */
    .nav-bar { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #ddd; padding-bottom: 10px; } /* BUG 4: div instead of header/nav */
    .icon-btn { background: #6366f1; border: none; padding: 8px; border-radius: 6px; cursor: pointer; color: white; }
    /* BUG 1: Icon button without aria-label or accessible text */
    .custom-select { border: 1px solid #ccc; padding: 8px; border-radius: 4px; cursor: pointer; width: 200px; display: inline-block; }
    /* BUG 3: div dropdown - non-focusable, no keyboard events */
    .error-field { border: 2px solid red; color: red; } /* BUG 2: Error conveyed by color alone, no text or role */
    button:focus { outline: none; } /* BUG: Removing focus outline without replacement */
  </style>
</head>
<body>
  <!-- BUG 4: Missing semantic header/nav landmark -->
  <div class="nav-bar">
    <h2>TechStore Online</h2>
    <div class="actions">
      <!-- BUG 1: Unlabeled Icon Button -->
      <button class="icon-btn" onclick="alert('Search clicked')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      </button>
    </div>
  </div>

  <!-- BUG 4: Missing main landmark -->
  <div className="main-content">
    <h3>Checkout Order</h3>

    <!-- BUG 2: Form error relying purely on red border/text without role or aria-describedby -->
    <div style="margin-bottom: 15px;">
      <label>Email Address:</label><br>
      <input type="text" value="invalid-email" class="error-field">
      <span style="color: red; font-size: 12px;">Invalid</span>
    </div>

    <!-- BUG 3: Custom div dropdown without keyboard focus or role -->
    <div style="margin-bottom: 15px;">
      <label>Select Shipping Method:</label><br>
      <div class="custom-select" onclick="alert('Opened dropdown')">
        Standard Express ($5.00) ▼
      </div>
    </div>
  </div>
</body>
</html>`,
      css: `/* Fixed CSS for Capstone Solution */
body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #f8fafc;
  color: #0f172a; /* Fixed Contrast Ratio (15:1) */
  max-width: 600px;
  margin: 20px auto;
  padding: 24px;
}
:focus-visible {
  outline: 3px solid #4f46e5 !important;
  outline-offset: 2px !important;
}
.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 12px;
  margin-bottom: 24px;
}
.icon-btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}
.error-message {
  color: #dc2626;
  font-size: 0.85rem;
  font-weight: bold;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
}
select.custom-select {
  width: 100%;
  padding: 10px;
  border: 1 border-slate-300;
  border-radius: 8px;
  font-size: 0.9rem;
}`,
      js: `// Accessibility Refactoring Verified`
    },
    solutionCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Accessible Shopping Cart (100% WCAG AA Fixed)</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #ffffff; color: #0f172a; padding: 24px; max-width: 600px; margin: 0 auto; }
    :focus-visible { outline: 3px solid #4f46e5; outline-offset: 2px; }
    header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 24px; }
    .icon-btn { background: #4f46e5; border: none; padding: 10px 14px; border-radius: 8px; cursor: pointer; color: white; display: flex; align-items: center; gap: 6px; }
    .icon-btn:hover { background: #4338ca; }
    .form-group { margin-bottom: 20px; }
    label { font-weight: bold; display: block; margin-bottom: 6px; }
    input[type="email"], select { width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 14px; box-sizing: border-box; }
    input.invalid { border-color: #dc2626; background: #fef2f2; }
    .error-msg { color: #dc2626; font-size: 13px; font-weight: 600; margin-top: 6px; display: flex; align-items: center; gap: 4px; }
  </style>
</head>
<body>
  <!-- FIX 4: Semantic Landmark <header> & <nav> -->
  <header>
    <h1>TechStore Online</h1>
    <nav aria-label="Quick action menu">
      <!-- FIX 1: Accessible Name added via aria-label -->
      <button class="icon-btn" aria-label="Search items" onclick="alert('Search activated')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <span>Search</span>
      </button>
    </nav>
  </header>

  <!-- FIX 4: Semantic Landmark <main> -->
  <main>
    <h2>Checkout Order</h2>

    <!-- FIX 2: Accessible Form Field with <label for> & aria-describedby for error -->
    <div class="form-group">
      <label for="user-email">Email Address:</label>
      <input 
        id="user-email" 
        type="email" 
        value="invalid-email" 
        class="invalid" 
        aria-invalid="true" 
        aria-describedby="email-error"
      >
      <!-- Error includes role="alert", icon, and explanatory text -->
      <div id="email-error" class="error-msg" role="alert">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
        Please enter a valid email address containing "@"
      </div>
    </div>

    <!-- FIX 3: Native <select> replacing custom <div> dropdown -->
    <div class="form-group">
      <label for="shipping-method">Select Shipping Method:</label>
      <select id="shipping-method">
        <option value="standard">Standard Express ($5.00) — 3-5 Business Days</option>
        <option value="priority">Priority Air ($12.00) — 1-2 Business Days</option>
        <option value="pickup">In-Store Pickup (Free)</option>
      </select>
    </div>
  </main>
</body>
</html>`
    }
  },
  lessons: [
    // MODULE 1 — Why Accessibility Matters
    {
      id: 'a11y-l1-1',
      slug: 'disability-types-a11y-scope',
      moduleNumber: 1,
      lessonNumberInModule: 1,
      title: {
        en: 'What Web Accessibility Means & Disability Types',
        km: 'និយមន័យ Web Accessibility (a11y) និងប្រភេទពិការភាព'
      },
      durationMinutes: 12,
      difficulty: 'Beginner',
      explanation: {
        en: 'Web Accessibility (a11y) គឺជាការអភិវឌ្ឍគេហទំព័រដែលអនុញ្ញាតឱ្យមនុស្សគ្រប់រូប អាចចូលមើល អាន និងបញ្ជាទំព័របាន ដោយរួមបញ្ចូលទាំងអ្នកមានពិការភាព (Disabilities) ដូចជា ភ្នែក (Visual), ត្រចៀក/ការស្តាប់ (Auditory), ចលនាដៃ (Motor), និងខួរក្បាល/ការចងចាំ (Cognitive)។',
        km: 'Web Accessibility (a11y) គឺជាការអភិវឌ្ឍគេហទំព័រដែលអនុញ្ញាតឱ្យមនុស្សគ្រប់រូប អាចចូលមើល អាន និងបញ្ជាទំព័របាន ដោយរួមបញ្ចូលទាំងអ្នកមានពិការភាព (Disabilities) ដូចជា ភ្នែក (Visual), ត្រចៀក/ការស្តាប់ (Auditory), ចលនាដៃ (Motor), និងខួរក្បាល/ការចងចាំ (Cognitive)។'
      },
      tutorial: {
        en: '1. Visual: Screen readers (VoiceOver, NVDA) read page markup out loud for blind or low-vision users.\n2. Auditory: Audio and video streams require captions, transcripts, and subtitles.\n3. Motor: Users with mobility impairments or paralysis navigate using Tab key, switches, or voice control.\n4. Cognitive: Clear typographic hierarchy, simple language, and predictable layout help users with ADHD or dyslexia.',
        km: '១. Visual: Screen readers (VoiceOver, NVDA) អានកូដ Markup ឮៗសម្រាប់អ្នកពិការភ្នែក ឬភ្នែកស្រពិចស្រពិល។\n២. Auditory: វីដេអូ និងសំឡេងត្រូវការ Captions និង Transcripts។\n៣. Motor: អ្នកមានបញ្ហាចលនាដៃប្រើប្រាស់ Keyboard Tab key ឬ Voice control ជំនួស Mouse។\n៤. Cognitive: អក្សរច្បាស់ៗ និងរចនាសម្ព័ន្ធមិនស្មុគស្មាញ ជួយអ្នកមានបញ្ហាអានអក្សរ (Dyslexia) ឬចងចាំ។'
      },
      screenReaderAnnouncement: 'Welcome to TechStore, heading level 1, landmark main',
      accessibilityTree: 'role: heading "Welcome to TechStore" [level=1]\n  role: main',
      starterCode: {
        html: `<header>
  <h1>SabayCode Learning Platform</h1>
</header>
<main>
  <p>Accessibility benefits everyone, including users on mobile devices or slow internet connections.</p>
</main>`
      },
      realWorldExample: {
        title: { en: 'Accessibility serves situational and temporary disabilities too', km: 'a11y បម្រើទាំងពិការភាពបណ្ដោះអាសន្ន និងតាមស្ថានភាព' },
        description: { en: 'A person holding a baby with one arm (situational motor restriction) or someone looking at a screen in bright sunlight benefits from accessible focus targets and high contrast.', km: 'អ្នកកំពុងបីទារកដោយដៃម្ខាង ឬអ្នកឈរមើលអេក្រង់ក្រោមពន្លឺថ្ងៃ ទទួលបានផលប្រយោជន៍ពី a11y ដូចគ្នា!' }
      },
      practiceExercise: {
        question: { en: 'Which assistive technology converts written HTML markup into synthetic spoken speech?', km: 'តើ Assistive Technology មួយណាដែលបំប្លែងកូដ HTML ទៅជាសំឡេងនិយាយ?' },
        solution: 'Screen Reader (ឧទាហរណ៍៖ VoiceOver លើ Mac/iOS, NVDA ឬ JAWS លើ Windows, TalkBack លើ Android)'
      },
      quizQuestions: [
        {
          id: 'qa11y-l1-1',
          question: { en: 'What does the numeracy abbreviation "a11y" stand for?', km: 'តើពាក្យកាត់ "a11y" តំណាងឱ្យពាក្យពេញអ្វី?' },
          options: [
            { id: '1', text: { en: 'Accessibility (11 letters between A and Y)', km: 'Accessibility (មាន 11 អក្សរចន្លោះ A និង Y)' }, isCorrect: true },
            { id: '2', text: { en: 'Algorithm version 11', km: 'Algorithm version 11' }, isCorrect: false }
          ],
          explanation: { en: 'a11y is a numeronym where 11 represents the 11 characters between "a" and "y" in Accessibility.', km: 'a11y ជាពាក្យកាត់លេខដែលតំណាងឱ្យ 11 តួអក្សររវាង a និង y នៃពាក្យ Accessibility។' }
        }
      ]
    },
    {
      id: 'a11y-l1-2',
      slug: 'wcag-pour-principles',
      moduleNumber: 1,
      lessonNumberInModule: 2,
      title: {
        en: 'The Four WCAG Principles (POUR)',
        km: 'គោលការណ៍ WCAG ទាំង ៤ (POUR Framework)'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Web Content Accessibility Guidelines (WCAG) ត្រូវបានបែងចែកជា ៤ សសរស្ដម្ភ (POUR)៖ Perceivable (អាចដឹង/មើលឃើញ), Operable (អាចបញ្ជាបាន), Understandable (ងាយយល់), និង Robust (រឹងមាំជាមួយឧបករណ៍ Assistive Tech)។',
        km: 'Web Content Accessibility Guidelines (WCAG) ត្រូវបានបែងចែកជា ៤ សសរស្ដម្ភ (POUR)៖ Perceivable (អាចដឹង/មើលឃើញ), Operable (អាចបញ្ជាបាន), Understandable (ងាយយល់), និង Robust (រឹងមាំជាមួយឧបករណ៍ Assistive Tech)។'
      },
      tutorial: {
        en: 'P - Perceivable: Content must be available through vision, hearing, or touch (e.g., alt text on images).\nO - Operable: UI controls must be clickable via keyboard and have sufficient touch targets.\nU - Understandable: Language and navigation must be predictable and error messages helpful.\nR - Robust: Code must conform to valid HTML specifications so screen readers parse it accurately.',
        km: 'P - Perceivable: មាតិកាត្រូវតែអាចដឹងបានតាមភ្នែក ការស្តាប់ ឬការប៉ះ (ឧ. alt text លើរូបភាព)\nO - Operable: ប៊ូតុង និង Link ត្រូវតែអាច ចុចបានតាម Keyboard និងមានទំហំល្មមចុច\nU - Understandable: ភាសា និងរបៀបប្រើត្រូវតែងាយយល់ និងមានសារ Error ច្បាស់លាស់\nR - Robust: កូដ HTML ត្រូវតែត្រឹមត្រូវតាមស្តង់ដារ ដើម្បីឱ្យ Screen Reader អានមិនរអាក់រអួល'
      },
      screenReaderAnnouncement: 'Image: Accessible Web Design Infographic',
      accessibilityTree: 'role: img "Accessible Web Design Infographic"',
      starterCode: {
        html: `<img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300" alt="Software engineer analyzing code accessibility on monitor">`
      },
      realWorldExample: {
        title: { en: 'WCAG Conformance Levels: A, AA, AAA', km: 'កម្រិតស្តង់ដារ WCAG: A, AA, AAA' },
        description: { en: 'WCAG 2.1 Level AA is the global legal standard for commercial websites, governmental portals, and modern web apps.', km: 'WCAG 2.1 Level AA គឺជាស្តង់ដារច្បាប់អន្តរជាតិដែលគ្រប់គេហទំព័រក្រុមហ៊ុន និងរដ្ឋាភិបាលត្រូវតែសម្រេចឱ្យបាន។' }
      },
      practiceExercise: {
        question: { en: 'Providing text alternatives (`alt=""`) for non-text image content falls under which POUR principle?', km: 'ការផ្តល់អត្ថបទជំនួស (`alt=""`) លើរូបភាព ស្ថិតក្នុងគោលការណ៍ POUR មួយណា?' },
        solution: 'Perceivable (អាចដឹង/មើលឃើញបាន)'
      },
      quizQuestions: [
        {
          id: 'qa11y-l1-2',
          question: { en: 'Which POUR principle requires all functionality to be accessible using a keyboard alone?', km: 'តើគោលការណ៍ POUR មួយណាដែលតម្រូវឱ្យរាល់ Function ទាំងអស់អាចបញ្ជាបានតាម Keyboard តែមួយមុខ?' },
          options: [
            { id: '1', text: { en: 'Operable', km: 'Operable' }, isCorrect: true },
            { id: '2', text: { en: 'Perceivable', km: 'Perceivable' }, isCorrect: false }
          ],
          explanation: { en: 'Operable requires that all interactive elements can be operated with a keyboard without getting trapped.', km: 'Operable តម្រូវឱ្យប៊ូតុង និង Link ទាំងអស់អាចបញ្ជាបានដោយមិនបាច់ប្រើ Mouse ឡើយ។' }
        }
      ]
    },
    {
      id: 'a11y-l1-3',
      slug: 'business-legal-ux-benefits',
      moduleNumber: 1,
      lessonNumberInModule: 3,
      title: {
        en: 'Why Accessibility Matters in Real Work: Audience & Legal Standard',
        km: 'ហេតុអ្វី a11y សំខាន់ក្នុងការងារពិត៖ អ្នកប្រើប្រាស់ និងច្បាប់'
      },
      durationMinutes: 12,
      difficulty: 'Beginner',
      explanation: {
        en: 'គេហទំព័រដែលមាន Accessibility ល្អ មិនត្រឹមតែជួយមនុស្ស ១៥% លើពិភពលោកដែលមានពិការភាពប៉ុណ្ណោះទេ ប៉ុន្តែថែមទាំងជួយបង្កើន SEO (Search Engine Optimization), ធ្វើឱ្យកូដ Clean មានរចនាសម្ព័ន្ធ, និងការពារក្រុមហ៊ុនពីការប្តឹងផ្តល់តាមផ្លូវច្បាប់។',
        km: 'គេហទំព័រដែលមាន Accessibility ល្អ មិនត្រឹមតែជួយមនុស្ស ១៥% លើពិភពលោកដែលមានពិការភាពប៉ុណ្ណោះទេ ប៉ុន្តែថែមទាំងជួយបង្កើន SEO (Search Engine Optimization), ធ្វើឱ្យកូដ Clean មានរចនាសម្ព័ន្ធ, និងការពារក្រុមហ៊ុនពីការប្តឹងផ្តល់តាមផ្លូវច្បាប់។'
      },
      tutorial: {
        en: '1. Over 1 billion people live with some form of disability globally.\n2. In countries like US, EU, and Japan, ADA (Americans with Disabilities Act) & European Accessibility Act mandate WCAG 2.1 AA compliance.\n3. Search engine crawlers (Googlebot) consume web pages just like screen readers — using heading outlines and alternative text.',
        km: '១. មនុស្សជាង ១ ពាន់លាននាក់រស់នៅជាមួយពិការភាពជុំវិញពិភពលោក។\n២. នៅអាមេរិក និងអឺរ៉ុប មានច្បាប់ ADA & European Accessibility Act បង្ខំឱ្យក្រុមហ៊ុនអនុវត្ត WCAG 2.1 AA។\n៣. Google Search Crawlers អានគេហទំព័រដូចទៅនឹង Screen Readers ដែរ ដូច្នេះ semantic HTML ជួយបង្កើន Rank SEO។'
      },
      screenReaderAnnouncement: 'Link: Learn more about accessibility standards',
      accessibilityTree: 'role: link "Learn more about accessibility standards"',
      starterCode: {
        html: `<a href="https://w3.org/WAI/" target="_blank" rel="noopener">
  Learn more about accessibility standards (opens in new tab)
</a>`
      },
      realWorldExample: {
        title: { en: 'Accessible code is better code for everyone', km: 'កូដដែល a11y ល្អ គឺជាកូដស្តង់ដារសម្រាប់មនុស្សគ្រប់គ្នា' },
        description: { en: 'Proper semantics benefit mobile users, smartwatch displays, screen readers, and automated web scrapers simultaneously.', km: 'កូដ Semantic ច្បាស់លាស់ផ្តល់ផលល្អដល់ Mobile Browsers, Smartwatches, និង AI Web Crawlers។' }
      },
      practiceExercise: {
        question: { en: 'How does semantic HTML and accessibility improve SEO for search engines?', km: 'តើ Semantic HTML និង Accessibility ជួយពង្រឹង SEO យ៉ាងដូចម្តេច?' },
        solution: 'Search engine bots read HTML headings, landmarks, and alt texts identically to screen readers, allowing them to index and rank site topics with precision.'
      },
      quizQuestions: [
        {
          id: 'qa11y-l1-3',
          question: { en: 'Which global legal standard is most commonly enforced for commercial web accessibility compliance?', km: 'តើកម្រិតស្តង់ដារច្បាប់អន្តរជាតិមួយណាដែលត្រូវបានអនុវត្តទូទៅបំផុត?' },
          options: [
            { id: '1', text: { en: 'WCAG 2.1 Level AA', km: 'WCAG 2.1 Level AA' }, isCorrect: true },
            { id: '2', text: { en: 'HTML4 Loose DTD', km: 'HTML4 Loose DTD' }, isCorrect: false }
          ],
          explanation: { en: 'WCAG 2.1 Level AA is the baseline standard referenced in legal legislation and enterprise compliance contracts.', km: 'WCAG 2.1 Level AA គឺជាស្តង់ដារគោលសម្រាប់ច្បាប់ពាណិជ្ជកម្ម និងរដ្ឋាភិបាល។' }
        }
      ]
    },

    // MODULE 2 — Semantic HTML as the Foundation
    {
      id: 'a11y-l2-1',
      slug: 'semantic-html-vs-div',
      moduleNumber: 2,
      lessonNumberInModule: 1,
      title: {
        en: 'Why `<button>` and Semantic HTML Beat `<div>` + CSS',
        km: 'ហេតុអ្វី `<button>` និង Semantic HTML ប្រសើរជាង `<div>` + CSS'
      },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'ធាតុដើម Native HTML ដូចជា `<button>`, `<nav>`, `<header>`, និង `<main>` មានបញ្ចូលនូវ Accessible Role, Keyboard Focus, និង Event Listeners (Enter / Space key) ដោយស្វ័យប្រវត្តិ។ ការប្រើ `<div onclick>` បំផ្លាញរចនាសម្ព័ន្ធទាំងនេះ។',
        km: 'ធាតុដើម Native HTML ដូចជា `<button>`, `<nav>`, `<header>`, និង `<main>` មានបញ្ចូលនូវ Accessible Role, Keyboard Focus, និង Event Listeners (Enter / Space key) ដោយស្វ័យប្រវត្តិ។ ការប្រើ `<div onclick>` បំផ្លាញរចនាសម្ព័ន្ធទាំងនេះ។'
      },
      tutorial: {
        en: '<!-- ❌ BAD: Completely inaccessible via keyboard -->\n<div class="btn" onclick="submitForm()">Submit</div>\n\n<!-- ✅ GOOD: Built-in focus, role, space/enter keyboard trigger -->\n<button type="button" onclick="submitForm()">Submit</button>',
        km: '<!-- ❌ មិនល្អ៖ មិនអាចចុច Tab ទៅដល់ ឬចុច Enter បានឡើយ -->\n<div class="btn" onclick="submitForm()">Submit</div>\n\n<!-- ✅ ល្អ៖ មាន Keyboard Focus, Screen reader role, និង Enter/Space key ស្រាប់ -->\n<button type="button" onclick="submitForm()">Submit</button>'
      },
      screenReaderAnnouncement: 'Submit, button',
      accessibilityTree: 'role: button "Submit"\n  focusable: true',
      starterCode: {
        html: `<button type="button" onclick="alert('Form Submitted!')" style="padding:10px 16px; background:#4f46e5; color:white; border:none; border-radius:6px; cursor:pointer;">
  Submit Order
</button>`
      },
      realWorldExample: {
        title: { en: 'The free features of native <button>', km: 'មុខងារឥតគិតថ្លៃដែល <button> មានស្រាប់' },
        description: { en: 'Native buttons get tabindex="0", role="button", spacebar/Enter activation, and form integration without a single line of JS!', km: 'Native <button> មាន Tab index, Accessible Role, Spacebar/Enter trigger ស្រាប់ដោយមិនបាច់សរសេរ JS!' }
      },
      practiceExercise: {
        question: { en: 'Why does `<div onclick="doSomething()">Click</div>` fail for keyboard-only users?', km: 'ហេតុអ្វី `<div onclick="...">` មិនអាចប្រើបានសម្រាប់អ្នកប្រើ Keyboard?' },
        solution: '<div> tags are not in the natural tab focus sequence and do not trigger click events when the Enter or Space keys are pressed.'
      },
      quizQuestions: [
        {
          id: 'qa11y-l2-1',
          question: { en: 'Which HTML element should always be used for performing an action on the current page?', km: 'តើ HTML Element មួយណាដែលត្រូវតែប្រើសម្រាប់រាល់ការចុច Action លើទំព័រ?' },
          options: [
            { id: '1', text: { en: '<button>', km: '<button>' }, isCorrect: true },
            { id: '2', text: { en: '<div>', km: '<div>' }, isCorrect: false }
          ],
          explanation: { en: 'Use <button> for page actions and <a> (anchors) for navigating to new URLs.', km: 'ប្រើ <button> សម្រាប់សកម្មភាព Action និងប្រើ <a> សម្រាប់តំណភ្ជាប់រត់ទៅ URL ផ្សេង។' }
        }
      ]
    },
    {
      id: 'a11y-l2-2',
      slug: 'heading-hierarchy-landmarks',
      moduleNumber: 2,
      lessonNumberInModule: 2,
      title: {
        en: 'Heading Hierarchy (`<h1>`–`<h6>`) & Landmark Regions',
        km: 'លំដាប់ចំណងជើង (`<h1>`–`<h6>`) និង Landmark Regions'
      },
      durationMinutes: 18,
      difficulty: 'Intermediate',
      explanation: {
        en: 'អ្នកប្រើប្រាស់ Screen Reader តែងតែចុច Shortcut Key (ដូចជា `H` ឬ `D` ក្នុង NVDA/VoiceOver) ដើម្បីលោតផ្លោះមើលប្លង់ទំព័រតាមរយៈ Heading Hierarchy (`<h1>`–`<h6>`) និង Landmark Elements (`<header>`, `<nav>`, `<main>`, `<footer>`)។',
        km: 'អ្នកប្រើប្រាស់ Screen Reader តែងតែចុច Shortcut Key (ដូចជា `H` ឬ `D` ក្នុង NVDA/VoiceOver) ដើម្បីលោតផ្លោះមើលប្លង់ទំព័រតាមរយៈ Heading Hierarchy (`<h1>`–`<h6>`) និង Landmark Elements (`<header>`, `<nav>`, `<main>`, `<footer>`)។'
      },
      tutorial: {
        en: '1. Always have exactly ONE <h1> per page representing the main topic.\n2. Do not skip heading levels (e.g. going directly from <h1> to <h3>).\n3. Wrap primary sections in landmark tags:\n   - <header> -> Banner landmark\n   - <nav> -> Navigation landmark\n   - <main> -> Main content landmark\n   - <footer> -> Contentinfo landmark',
        km: '១. មាន <h1> តែមួយគត់ក្នុងមួយទំព័រ តំណាងឱ្យប្រធានបទធំ\n២. កុំរំលងកម្រិត Heading (ឧ. កុំរំលងពី <h1> ទៅ <h3> ដោយគ្មាន <h2>)\n៣. ប្រើប្រាស់ Landmark tags ជុំវិញផ្នែកធំៗ៖ <header>, <nav>, <main>, <footer>'
      },
      screenReaderAnnouncement: 'Heading level 1: Course Dashboard, Main landmark',
      accessibilityTree: 'role: banner\n  role: navigation "Main Menu"\nrole: main\n  role: heading "Course Dashboard" [level=1]',
      starterCode: {
        html: `<header>
  <nav aria-label="Primary Navigation">
    <a href="#home">Home</a> | <a href="#courses">Courses</a>
  </nav>
</header>
<main>
  <h1>Frontend Development Hub</h1>
  <section aria-labelledby="web-dev-heading">
    <h2 id="web-dev-heading">Web Accessibility Fundamentals</h2>
    <p>Semantic HTML structures the Accessibility Tree.</p>
  </section>
</main>`
      },
      realWorldExample: {
        title: { en: 'Landmark Navigation Rotor in Screen Readers', km: 'ការលោតរំលងតាម Landmark Rotor ក្នុង Screen Reader' },
        description: { en: 'VoiceOver users press Cmd+Option+U to open the Rotor menu, instantly listing all Landmarks and Headings on the page.', km: 'អ្នកប្រើ VoiceOver ចុច Cmd+Option+U ដើម្បីបើក Rotor ហើយជ្រើសរើសផ្នែក Landmark លោតទៅភ្លាមៗ!' }
      },
      practiceExercise: {
        question: { en: 'Why is skipping from an `<h1>` element directly to an `<h4>` element considered an accessibility defect?', km: 'ហេតុអ្វីបានជាការរំលងពី `<h1>` ទៅ `<h4>` ត្រូវបានចាត់ទុកជា Bug Accessibility?' },
        solution: 'Screen reader users rely on headings to build a mental document outline. Skipping heading levels creates confusion and implies missing content.'
      },
      quizQuestions: [
        {
          id: 'qa11y-l2-2',
          question: { en: 'Which HTML element represents the primary landmark for a document main body?', km: 'តើ HTML Element មួយណាដែលតំណាងឱ្យ Landmark ស្នូលនៃមាតិកាទំព័រ?' },
          options: [
            { id: '1', text: { en: '<main>', km: '<main>' }, isCorrect: true },
            { id: '2', text: { en: '<div id="main">', km: '<div id="main">' }, isCorrect: false }
          ],
          explanation: { en: '<main> defines the primary content landmark automatically in the browser Accessibility Tree.', km: '<main> កំណត់ Main Landmark ដោយស្វ័យប្រវត្តិក្នុង browser Accessibility Tree។' }
        }
      ]
    },
    {
      id: 'a11y-l2-3',
      slug: 'accessible-forms-labels-errors',
      moduleNumber: 2,
      lessonNumberInModule: 3,
      title: {
        en: 'Accessible Forms: `<label for="">`, `<fieldset>`, and Error Messaging',
        km: 'ការបង្កើត Form ដែលមាន a11y៖ `<label for="">`, `<fieldset>`, និង Error Links'
      },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'រាល់ Input ទាំងអស់ត្រូវតែមាន `<label for="input-id">` ភ្ជាប់ទៅកាន់ `id` របស់វា។ សម្រាប់ Field ដែលពាក់ព័ន្ធគ្នា (ដូចជា Radio buttons) ត្រូវប្រើ `<fieldset>` និង `<legend>` ហើយសារ Error ត្រូវភ្ជាប់តាមរយៈ `aria-describedby`។',
        km: 'រាល់ Input ទាំងអស់ត្រូវតែមាន `<label for="input-id">` ភ្ជាប់ទៅកាន់ `id` របស់វា។ សម្រាប់ Field ដែលពាក់ព័ន្ធគ្នា (ដូចជា Radio buttons) ត្រូវប្រើ `<fieldset>` និង `<legend>` ហើយសារ Error ត្រូវភ្ជាប់តាមរយៈ `aria-describedby`។'
      },
      tutorial: {
        en: '<!-- 1. Explicit Label Connection -->\n<label for="username">Username:</label>\n<input id="username" type="text" aria-describedby="user-hint">\n<span id="user-hint">Must be 5-15 characters</span>\n\n<!-- 2. Grouping Radio Buttons -->\n<fieldset>\n  <legend>Select Notification Preference:</legend>\n  <label><input type="radio" name="notify" value="email"> Email</label>\n  <label><input type="radio" name="notify" value="sms"> SMS</label>\n</fieldset>',
        km: '<!-- ១. ការភ្ជាប់ Label ទៅ Input ID -->\n<label for="username">ឈ្មោះអ្នកប្រើ៖</label>\n<input id="username" type="text" aria-describedby="user-hint">\n<span id="user-hint">ត្រូវមានពី ៥ ដល់ ១៥ តួអក្សរ</span>\n\n<!-- ២. ការប្រមូលផ្តុំ Radio buttons -->\n<fieldset>\n  <legend>ជ្រើសរើសវិធីជូនដំណឹង៖</legend>\n  <label><input type="radio" name="notify" value="email"> អ៊ីមែល</label>\n  <label><input type="radio" name="notify" value="sms"> SMS</label>\n</fieldset>'
      },
      screenReaderAnnouncement: 'Username, edit text, Must be 5-15 characters',
      accessibilityTree: 'role: label "Username"\nrole: textbox "Username" [description="Must be 5-15 characters"]',
      starterCode: {
        html: `<form>
  <div style="margin-bottom:12px;">
    <label for="full-name" style="font-weight:bold; display:block;">Full Name:</label>
    <input id="full-name" type="text" placeholder="e.g. Sok Dara" style="padding:8px; border:1px solid #ccc; border-radius:4px; width:100%; max-width:300px;">
  </div>
  <fieldset style="border:1px solid #ccc; border-radius:6px; padding:12px; max-width:300px;">
    <legend style="font-weight:bold; padding:0 4px;">Subscription Level:</legend>
    <label><input type="radio" name="plan" value="free" checked> Free Plan</label><br>
    <label><input type="radio" name="plan" value="pro"> Pro Developer Plan</label>
  </fieldset>
</form>`
      },
      realWorldExample: {
        title: { en: 'Clicking label focuses the input', km: 'ការចុចលើ Label ធ្វើឱ្យ Cursor លោតចូល Input' },
        description: { en: 'When <label for="id"> is properly linked, clicking the label text focuses the text input or toggles the checkbox for all users!', km: 'ការភ្ជាប់ <label for> ត្រឹមត្រូវ ធ្វើឱ្យអ្នកចុចលើអត្ថបទ Label អាច Select Checkbox ឬចាក់ Cursor ចូល Input បាន!' }
      },
      practiceExercise: {
        question: { en: 'Why is using `placeholder="Enter Name"` as a substitute for `<label>` considered bad practice?', km: 'ហេតុអ្វីការប្រើ `placeholder` ជំនួស `<label>` មិនត្រឹមត្រូវតាមស្តង់ដារ?' },
        solution: 'Placeholders disappear when typing, have low default contrast, and are not parsed as accessible form names by screen readers.'
      },
      quizQuestions: [
        {
          id: 'qa11y-l2-3',
          question: { en: 'Which ARIA attribute connects an input to its helper text or error message span ID?', km: 'តើ ARIA Attribute មួយណាសម្រាប់ភ្ជាប់ Input ទៅកាន់ ID នៃសារ Error ឬអត្ថបទជំនួយ?' },
          options: [
            { id: '1', text: { en: 'aria-describedby', km: 'aria-describedby' }, isCorrect: true },
            { id: '2', text: { en: 'aria-hidden', km: 'aria-hidden' }, isCorrect: false }
          ],
          explanation: { en: 'aria-describedby references element IDs containing descriptive helper or error text.', km: 'aria-describedby ភ្ជាប់ទៅ ID នៃសារពិពណ៌នា ឬ Error ដើម្បីឱ្យ Screen Reader អានប្រាប់បន្ថែម។' }
        }
      ]
    },

    // MODULE 3 — ARIA: When and How to Use It
    {
      id: 'a11y-l3-1',
      slug: 'first-rule-of-aria',
      moduleNumber: 3,
      lessonNumberInModule: 1,
      title: {
        en: 'What ARIA Is & The First Rule of ARIA',
        km: 'ស្វែងយល់អំពី ARIA និង "First Rule of ARIA"'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'WAI-ARIA (Accessible Rich Internet Applications) គឺជា Attribute សម្រាប់បន្ថែម semantic info ដល់ Screen Reader ពេលដែល HTML ដើមគ្មានធាតុជំនួស។ ប៉ុន្តែ "First Rule of ARIA" ចែងថា៖ កុំប្រើ ARIA ប្រសិនបើមាន Native HTML Element ឬ Attribute ដែលអាចធ្វើការងារនោះបានស្រាប់! (Don\'t use ARIA if a native HTML element will do!)',
        km: 'WAI-ARIA (Accessible Rich Internet Applications) គឺជា Attribute សម្រាប់បន្ថែម semantic info ដល់ Screen Reader ពេលដែល HTML ដើមគ្មានធាតុជំនួស។ ប៉ុន្តែ "First Rule of ARIA" ចែងថា៖ កុំប្រើ ARIA ប្រសិនបើមាន Native HTML Element ឬ Attribute ដែលអាចធ្វើការងារនោះបានស្រាប់! (Don\'t use ARIA if a native HTML element will do!)'
      },
      tutorial: {
        en: '1. ARIA changes the Accessibility Tree ONLY; it does NOT add keyboard interaction or CSS styles!\n2. ❌ Wrong: <div role="button" tabindex="0">Save</div> (Requires manual JS keydown listeners for Enter/Space)\n3. ✅ Correct: <button type="button">Save</button> (Free keyboard handling & proper semantics)',
        km: '១. ARIA កែប្រែតែព័ត៌មានក្នុង Accessibility Tree ប៉ុណ្ណោះ វា មិន បន្ថែម Keyboard focus ឬរចនា CSS ឡើយ!\n២. ❌ ខុស៖ <div role="button" tabindex="0">Save</div> (ត្រូវសរសេរ JS ស្ទាក់ Enter/Space key ដោយខ្លួនឯង)\n៣. ✅ ត្រូវ៖ <button type="button">Save</button> (មានស្រាប់ មិនបាច់សរសេរ JS ឥតប្រយោជន៍)'
      },
      screenReaderAnnouncement: 'Save, button',
      accessibilityTree: 'role: button "Save"',
      starterCode: {
        html: `<!-- Comparison: Native Button vs Bad ARIA Div -->
<div style="display:flex; gap:12px;">
  <!-- ✅ Recommended Native Semantic HTML -->
  <button type="button" style="padding:8px 16px; background:#10b981; color:white; border:none; border-radius:6px; font-weight:bold; cursor:pointer;">
    Native Button
  </button>
</div>`
      },
      realWorldExample: {
        title: { en: 'ARIA does not magically fix non-interactive elements', km: 'ARIA មិនអាចប្រែ <div> ឱ្យក្លាយជា Button ដោយស្វ័យប្រវត្តិឡើយ' },
        description: { en: 'Adding role="button" to a <div> makes screen readers say "button", but pressing Tab will skip right over it unless tabindex="0" and key listeners are added manually.', km: 'ការបន្ថែម role="button" លើ <div> គ្រាន់តែឱ្យ Screen Reader អានពាក្យ "button" ប៉ុណ្ណោះ ប៉ុន្តែចុច Tab key មិនលោតចូលឡើយ!' }
      },
      practiceExercise: {
        question: { en: 'Does adding `role="button"` to a `<div>` make it clickable with the keyboard Spacebar automatically?', km: 'តើការបន្ថែម `role="button"` លើ `<div>` ធ្វើឱ្យវាចុច Spacebar ដើរដោយស្វ័យប្រវត្តិឬទេ?' },
        solution: 'No. ARIA only modifies the accessible role in the Accessibility Tree. Keyboard listeners (keydown Enter/Space) must be manually added via JavaScript.'
      },
      quizQuestions: [
        {
          id: 'qa11y-l3-1',
          question: { en: 'What is the First Rule of ARIA?', km: 'តើច្បាប់ទីមួយនៃ ARIA (First Rule of ARIA) គឺជាអ្វី?' },
          options: [
            { id: '1', text: { en: 'Do not use ARIA if a native HTML element or attribute exists with the required semantics', km: 'កុំប្រើ ARIA ប្រសិនបើមាន Native HTML Element ឬ Attribute ដែលមាន semantics ស្រាប់' }, isCorrect: true },
            { id: '2', text: { en: 'Always wrap all ARIA attributes inside JavaScript functions', km: 'ត្រូវសរសេរ ARIA តែក្នុង JS functions' }, isCorrect: false }
          ],
          explanation: { en: 'Native HTML tags carry natural accessibility features without needing custom ARIA overrides.', km: 'Native HTML tags មានមុខងារ Accessibility ស្រាប់ ដោយមិនបាច់បិទ ARIA នាំតែស្មុគស្មាញ។' }
        }
      ]
    },
    {
      id: 'a11y-l3-2',
      slug: 'common-aria-roles-states',
      moduleNumber: 3,
      lessonNumberInModule: 2,
      title: {
        en: 'Common ARIA Roles & States (`role="dialog"`, `aria-expanded`, `aria-live`)',
        km: 'ARIA Roles & States ទូទៅ (`role="dialog"`, `aria-expanded`, `aria-live`)'
      },
      durationMinutes: 18,
      difficulty: 'Intermediate',
      explanation: {
        en: 'ពេលបង្កើត Dynamic Widgets ដូចជា Accordion, Modal Dialog, ឬ Toast Notification គេត្រូវប្រើ ARIA attributes ដូចជា `aria-expanded="true|false"` (សម្រាប់ Accordion/Dropdown), `role="dialog"` (សម្រាប់ Modal), និង `aria-live="polite|assertive"` (សម្រាប់ Toast)។',
        km: 'ពេលបង្កើត Dynamic Widgets ដូចជា Accordion, Modal Dialog, ឬ Toast Notification គេត្រូវប្រើ ARIA attributes ដូចជា `aria-expanded="true|false"` (សម្រាប់ Accordion/Dropdown), `role="dialog"` (សម្រាប់ Modal), និង `aria-live="polite|assertive"` (សម្រាប់ Toast)។'
      },
      tutorial: {
        en: '1. Accordion / Dropdown: <button aria-expanded="false" aria-controls="panel1">FAQ Question</button>\n2. Dynamic Toast Notification: <div role="status" aria-live="polite">Item added to cart!</div>\n   - "polite": Announces when the user finishes current sentence.\n   - "assertive": Interrupts the screen reader immediately (for critical errors).',
        km: '១. Accordion / Dropdown: <button aria-expanded="false" aria-controls="panel1">សំណួរ FAQ</button>\n២. Toast Notification៖ <div role="status" aria-live="polite">បានបន្ថែមទំនិញចូល Cart!</div>\n   - "polite": អានប្រាប់ពេល Screen reader ទំនេរពីការអាន\n   - "assertive": កាត់ចាក់សំឡេងភ្លាមៗ សម្រាប់ Error បន្ទាន់បំផុត'
      },
      screenReaderAnnouncement: 'FAQ Question, button, collapsed',
      accessibilityTree: 'role: button "FAQ Question" [expanded=false, controls=panel1]',
      starterCode: {
        html: `<div style="max-width:400px; font-family:sans-serif;">
  <button 
    id="acc-btn" 
    aria-expanded="false" 
    aria-controls="acc-content"
    onclick="const el=document.getElementById('acc-content'); const exp=this.getAttribute('aria-expanded')==='true'; this.setAttribute('aria-expanded', !exp); el.style.display=exp?'none':'block';"
    style="width:100%; text-align:left; padding:10px; background:#f1f5f9; border:1px solid #cbd5e1; border-radius:6px; cursor:pointer; font-weight:bold;"
  >
    What is Web Accessibility? (Click to toggle)
  </button>
  <div id="acc-content" style="display:none; padding:10px; border:1px solid #cbd5e1; border-top:none; background:white;">
    Web accessibility ensures that websites and tools are designed so people with disabilities can use them.
  </div>
</div>`
      },
      realWorldExample: {
        title: { en: 'aria-live for E-commerce Shopping Carts', km: 'aria-live សម្រាប់លទ្ធផល Cart ក្នុង E-commerce' },
        description: { en: 'When adding an item to a shopping cart without page refresh, aria-live="polite" informs visually impaired users instantly that the action succeeded.', km: 'ពេលចុច Add to Cart ដោយមិនបាន Reload page, aria-live="polite" ប្រាប់អ្នកពិការភ្នែកភ្លាមៗថាបានបន្ថែមទំនិញរួចរាល់។' }
      },
      practiceExercise: {
        question: { en: 'Which `aria-live` setting interrupts screen reader speech immediately to deliver urgent error messages?', km: 'តើតម្លៃ `aria-live` មួយណាដែលកាត់អត្ថបទអានភ្លាមៗដើម្បីរាយការណ៍ Error បន្ទាន់?' },
        solution: 'aria-live="assertive"'
      },
      quizQuestions: [
        {
          id: 'qa11y-l3-2',
          question: { en: 'What state attribute indicates whether a dropdown menu or collapsible panel is currently open or closed?', km: 'តើ Attribute មួយណាសម្រាប់បញ្ជាក់ថា Dropdown Menu ឬ Panel កំពុងបើក ឬបិទ?' },
          options: [
            { id: '1', text: { en: 'aria-expanded', km: 'aria-expanded' }, isCorrect: true },
            { id: '2', text: { en: 'aria-open', km: 'aria-open' }, isCorrect: false }
          ],
          explanation: { en: 'aria-expanded="true" or aria-expanded="false" dictates the open/collapsed state to assistive technology.', km: 'aria-expanded="true" ឬ "false" បញ្ជាក់ស្ថានភាពបើក/បិទ ទៅកាន់ Screen Reader។' }
        }
      ]
    },
    {
      id: 'a11y-l3-3',
      slug: 'naming-elements-aria-label-labelledby',
      moduleNumber: 3,
      lessonNumberInModule: 3,
      title: {
        en: 'Naming Elements: `aria-label` vs `aria-labelledby` vs `aria-describedby`',
        km: 'ការដាក់ឈ្មោះ Element៖ `aria-label` vs `aria-labelledby` vs `aria-describedby`'
      },
      durationMinutes: 18,
      difficulty: 'Intermediate',
      explanation: {
        en: 'ធាតុទាំង ៣ នេះប្រើក្នុងកាលៈទេសៈខុសគ្នា៖ `aria-label` កំណត់ឈ្មោះផ្ទាល់ពេលគ្មាន visible text (ដូចជា icon button), `aria-labelledby` យកអត្ថបទពី ID នៃ element ផ្សេងមកធ្វើជាឈ្មោះ, ហើយ `aria-describedby` ភ្ជាប់ទៅអត្ថបទពណ៌នាបន្ថែម។',
        km: 'ធាតុទាំង ៣ នេះប្រើក្នុងកាលៈទេសៈខុសគ្នា៖ `aria-label` កំណត់ឈ្មោះផ្ទាល់ពេលគ្មាន visible text (ដូចជា icon button), `aria-labelledby` យកអត្ថបទពី ID នៃ element ផ្សេងមកធ្វើជាឈ្មោះ, ហើយ `aria-describedby` ភ្ជាប់ទៅអត្ថបទពណ៌នាបន្ថែម។'
      },
      tutorial: {
        en: '<!-- 1. Custom string name for icon buttons -->\n<button aria-label="Close modal dialog">✕</button>\n\n<!-- 2. Pointing to existing visible element title -->\n<h2 id="card-title">Product Details</h2>\n<section aria-labelledby="card-title">...</section>\n\n<!-- 3. Providing secondary help description -->\n<input id="pwd" type="password" aria-describedby="pwd-req">\n<p id="pwd-req">Password must contain at least 8 characters</p>',
        km: '<!-- ១. ដាក់ឈ្មោះផ្ទាល់សម្រាប់ Icon Button -->\n<button aria-label="បិទផ្ទាំង Dialog">✕</button>\n\n<!-- ២. ចង្អុលទៅ ID ចំណងជើងដែលមានស្រាប់ -->\n<h2 id="card-title">ព័ត៌មានលម្អិតផលិតផល</h2>\n<section aria-labelledby="card-title">...</section>\n\n<!-- ៣. ភ្ជាប់ទៅអត្ថបទពណ៌នាបន្ថែម -->\n<input id="pwd" type="password" aria-describedby="pwd-req">\n<p id="pwd-req">ពាក្យសម្ងាត់ត្រូវមានយ៉ាងតិច ៨ តួអក្សរ</p>'
      },
      screenReaderAnnouncement: 'Close modal dialog, button',
      accessibilityTree: 'role: button "Close modal dialog"',
      starterCode: {
        html: `<!-- Accessible Naming Examples -->
<div style="display:flex; flex-direction:column; gap:16px; font-family:sans-serif;">
  <div>
    <strong>Icon Button (aria-label):</strong><br>
    <button aria-label="Search items" style="background:#6366f1; color:white; border:none; padding:8px 12px; border-radius:6px; cursor:pointer;">
      🔍
    </button>
  </div>
  <div>
    <h3 id="section-heading">User Settings</h3>
    <section aria-labelledby="section-heading" style="padding:10px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px;">
      Profile & Account Preferences
    </section>
  </div>
</div>`
      },
      realWorldExample: {
        title: { en: 'Accessibility Name Computation Order', km: 'លំដាប់លំដោយនៃការគណនា Accessible Name' },
        description: { en: 'aria-labelledby overrides aria-label, which overrides native visible text content in the Accessibility Tree calculation.', km: 'aria-labelledby មានអានុភាពខ្ពស់ជាង aria-label ហើយ aria-label មានអានុភាពខ្ពស់ជាងអត្ថបទធម្មតា!' }
      },
      practiceExercise: {
        question: { en: 'When should you use `aria-labelledby` instead of `aria-label`?', km: 'តើពេលណាដែលអ្នកគួរប្រើ `aria-labelledby` ជំនួស `aria-label`?' },
        solution: 'Use aria-labelledby when a visible text heading or element already exists on screen that describes the current control or region.'
      },
      quizQuestions: [
        {
          id: 'qa11y-l3-3',
          question: { en: 'Which attribute provides an accessible name for a button containing only an SVG icon and no visible text?', km: 'តើ Attribute មួយណាសម្រាប់ផ្តល់ Accessible Name ដល់ Icon Button គ្មានអត្ថបទ?' },
          options: [
            { id: '1', text: { en: 'aria-label', km: 'aria-label' }, isCorrect: true },
            { id: '2', text: { en: 'title', km: 'title' }, isCorrect: false }
          ],
          explanation: { en: 'aria-label provides a clean accessible name string to screen readers for icon buttons.', km: 'aria-label ផ្តល់ Accessible Name ទៅកាន់ Screen Reader យ៉ាងច្បាស់លាស់បំផុត។' }
        }
      ]
    },

    // MODULE 4 — Keyboard Navigation & Focus Management
    {
      id: 'a11y-l4-1',
      slug: 'tab-order-tabindex',
      moduleNumber: 4,
      lessonNumberInModule: 1,
      title: {
        en: 'Tab Order & `tabindex` (`0`, `-1`, & Positive Values)',
        km: 'លំដាប់ Tab Order និង `tabindex` (`0`, `-1`, និងតម្លៃវិជ្ជមាន)'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: '`tabindex` គ្រប់គ្រងលំដាប់នៃការចុច Tab Key លើ Keyboard៖ `tabindex="0"` បន្ថែម element ចូលក្នុង natural tab order, `tabindex="-1"` អនុញ្ញាតឱ្យ JS ប្រើ `.focus()` បានតែមិនចូលក្នុង Tab sequence ទេ, ហើយតម្លៃវិជ្ជមាន (ដូចជា `tabindex="5"`) មិនគួរប្រើប្រាស់ឡើយ! (Avoid positive tabindex!)',
        km: '`tabindex` គ្រប់គ្រងលំដាប់នៃការចុច Tab Key លើ Keyboard៖ `tabindex="0"` បន្ថែម element ចូលក្នុង natural tab order, `tabindex="-1"` អនុញ្ញាតឱ្យ JS ប្រើ `.focus()` បានតែមិនចូលក្នុង Tab sequence ទេ, ហើយតម្លៃវិជ្ជមាន (ដូចជា `tabindex="5"`) មិនគួរប្រើប្រាស់ឡើយ! (Avoid positive tabindex!)'
      },
      tutorial: {
        en: '1. Natural Order (No tabindex): Native <a href>, <button>, <input> are naturally focusable in DOM order.\n2. tabindex="0": Custom widgets (e.g., custom card) included in normal tabbing sequence.\n3. tabindex="-1": Used for modal containers or alert headings so JavaScript can focus them dynamically.\n4. ❌ Positive tabindex (>0): Overrides natural DOM flow, causing unpredictable jumpy tab navigation.',
        km: '១. Natural Order (គ្មាន tabindex)៖ Native tags ដូចជា <a href>, <button>, <input> ទទួល Focus តាមលំដាប់ DOM ស្រាប់\n២. tabindex="0"៖ ដាក់ Custom widget ចូលក្នុងជួរ Tab Key ធម្មតា\n៣. tabindex="-1"៖ ប្រើសម្រាប់ Modal ឬ Heading ឱ្យ JS បាញ់ Focus ទៅកាន់បាន តែមិនចូល Tab key sequence ទេ\n៤. ❌ Positive tabindex (>0)៖ បំផ្លាញលំដាប់ DOM Flow ធ្វើឱ្យ Focus លោតរញ៉េរញ៉ៃ'
      },
      screenReaderAnnouncement: 'Custom Interactive Card, focusable, group',
      accessibilityTree: 'role: region "Custom Interactive Card"\n  focusable: true [tabindex=0]',
      starterCode: {
        html: `<div style="display:flex; flex-direction:column; gap:12px; font-family:sans-serif;">
  <button type="button">1. First Natural Button</button>
  
  <!-- Custom Card made focusable -->
  <div tabindex="0" style="padding:10px; border:2px solid #6366f1; border-radius:6px; cursor:pointer;" onclick="alert('Card clicked')">
    2. Custom Focusable Card (tabindex="0")
  </div>

  <button type="button">3. Third Natural Button</button>
</div>`
      },
      realWorldExample: {
        title: { en: 'Programmatic focus movement with tabindex="-1"', km: 'ការបាញ់ Focus តាមកូដ JS ដោយប្រើ tabindex="-1"' },
        description: { en: 'When opening a modal, developers call `modalHeading.focus()` after setting `tabindex="-1"` on the heading so screen reader users hear the dialog title immediately.', km: 'ពេលបើក Modal គេកំណត់ `tabindex="-1"` លើ Heading រួចប្រើ `heading.focus()` ឱ្យ Screen reader អានចំណងជើងភ្លាមៗ។' }
      },
      practiceExercise: {
        question: { en: 'Why should positive values like `tabindex="3"` be strictly avoided in web application code?', km: 'ហេតុអ្វីបានជាត្រូវចៀសវាងការប្រើ `tabindex="3"` ដាច់ខាត?' },
        solution: 'Positive tabindex values force focus jumps outside the document DOM structure, creating an unpredictable and broken tab flow for keyboard users.'
      },
      quizQuestions: [
        {
          id: 'qa11y-l4-1',
          question: { en: 'Which `tabindex` value makes an element focusable via JavaScript `.focus()` while excluding it from the Tab key sequence?', km: 'តើតម្លៃ `tabindex` មួយណាដែលធ្វើឱ្យ Element ទទួល Focus តាម JS ប៉ុន្តែមិនចូលក្នុងជួរ Tab key?' },
          options: [
            { id: '1', text: { en: 'tabindex="-1"', km: 'tabindex="-1"' }, isCorrect: true },
            { id: '2', text: { en: 'tabindex="0"', km: 'tabindex="0"' }, isCorrect: false }
          ],
          explanation: { en: 'tabindex="-1" allows programmatic focus without polluting natural document keyboard tabbing.', km: 'tabindex="-1" អនុញ្ញាតឱ្យ JS បាញ់ Focus បាន ដោយមិនរំខានដល់ការចុច Tab key ធម្មតា។' }
        }
      ]
    },
    {
      id: 'a11y-l4-2',
      slug: 'visible-focus-indicators',
      moduleNumber: 4,
      lessonNumberInModule: 2,
      title: {
        en: 'Visible Focus Indicators (`:focus-visible` & Outline Styling)',
        km: 'ការបង្ហាញ Focus Indicators (`:focus-visible` និង Outline)'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'ការសរសេរ CSS `:focus { outline: none; }` ដោយគ្មានកូដ Focus ជំនួស គឺជាការបំផ្លាញ Accessibility ធ្ងន់ធ្ងរ! អ្នកប្រើប្រាស់ Keyboard ត្រូវការ Focus Ring ដែលច្បាស់ (Visible Focus Indicator) ដើម្បីដឹងថា Cursor កំពុងស្ថិតនៅលើ Element មួយណា។ ដំណោះស្រាយទំនើបគឺប្រើ `:focus-visible`។',
        km: 'ការសរសេរ CSS `:focus { outline: none; }` ដោយគ្មានកូដ Focus ជំនួស គឺជាការបំផ្លាញ Accessibility ធ្ងន់ធ្ងរ! អ្នកប្រើប្រាស់ Keyboard ត្រូវការ Focus Ring ដែលច្បាស់ (Visible Focus Indicator) ដើម្បីដឹងថា Cursor កំពុងស្ថិតនៅលើ Element មួយណា។ ដំណោះស្រាយទំនើបគឺប្រើ `:focus-visible`។'
      },
      tutorial: {
        en: '/* ❌ NEVER DO THIS WITHOUT A REPLACEMENT */\nbutton:focus { outline: none; }\n\n/* ✅ MODERN BEST PRACTICE: High-contrast focus ring for keyboard users */\nbutton:focus-visible {\n  outline: 3px solid #6366f1;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);\n}',
        km: '/* ❌ ហាមដាច់ខាត លើកលែងមានកូដជំនួស */\nbutton:focus { outline: none; }\n\n/* ✅ ស្តង់ដារទំនើប៖ បង្ហាញ Focus Ring ច្បាស់ពេលចុច Keyboard Tab */\nbutton:focus-visible {\n  outline: 3px solid #6366f1;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);\n}'
      },
      screenReaderAnnouncement: 'Get Started, button, focused',
      accessibilityTree: 'role: button "Get Started"\n  focused: true',
      starterCode: {
        html: `<style>
  .custom-focus-btn {
    padding: 10px 20px;
    background: #0f172a;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
  .custom-focus-btn:focus-visible {
    outline: 3px solid #4f46e5;
    outline-offset: 3px;
  }
</style>
<div style="font-family:sans-serif; padding:10px;">
  <p>Press the <strong>Tab key</strong> to test the high-contrast focus ring:</p>
  <button class="custom-focus-btn" onclick="alert('Clicked!')">Get Started</button>
</div>`
      },
      realWorldExample: {
        title: { en: 'Why :focus-visible is better than :focus', km: 'ហេតុអ្វី :focus-visible ប្រសើរជាង :focus ធម្មតា' },
        description: { en: ':focus-visible shows the focus ring ONLY when navigating via keyboard (Tab key), hiding it when clicking with a mouse so design remains clean!', km: ':focus-visible បង្ហាញ Focus ring តែពេលចុច Tab keyboard ប៉ុណ្ណោះ ពេលយក Mouse ចុច វាមិនបង្ហាញឡើយ ស្អាតបាត!' }
      },
      practiceExercise: {
        question: { en: 'What visual issue occurs if a developer sets `outline: none;` on all interactive buttons?', km: 'តើមានបញ្ហាអ្វីកើតឡើងប្រសិនបើ Developer កំណត់ `outline: none;` លើគ្រប់ប៊ូតុង?' },
        solution: 'Sighted keyboard users lose track of their position on the page because no visual focus boundary appears when pressing the Tab key.'
      },
      quizQuestions: [
        {
          id: 'qa11y-l4-2',
          question: { en: 'Which CSS pseudo-class displays a focus indicator ONLY when an element gains focus via keyboard navigation?', km: 'តើ CSS pseudo-class មួយណាដែលបង្ហាញ Focus ring តែពេលទទួល focus តាម Keyboard?' },
          options: [
            { id: '1', text: { en: ':focus-visible', km: ':focus-visible' }, isCorrect: true },
            { id: '2', text: { en: ':hover', km: ':hover' }, isCorrect: false }
          ],
          explanation: { en: ':focus-visible applies focus styles specifically for keyboard interactions without triggering on mouse clicks.', km: ':focus-visible អនុវត្ត Focus styles សម្រាប់តែការចុច Keyboard មិនរំខាន Mouse clicks ឡើយ។' }
        }
      ]
    },
    {
      id: 'a11y-l4-3',
      slug: 'focus-trapping-skip-links',
      moduleNumber: 4,
      lessonNumberInModule: 3,
      title: {
        en: 'Focus Management: Modal Focus Trapping & "Skip to Main Content"',
        km: 'ការគ្រប់គ្រង Focus៖ Focus Trapping ក្នុង Modal និង Skip Links'
      },
      durationMinutes: 20,
      difficulty: 'Advanced',
      explanation: {
        en: 'ពេលបើក Modal Popups គេត្រូវតែ "Trap" Focus ឱ្យរត់តែក្នុង Modal នោះប៉ុណ្ណោះ មិនឱ្យ Tab key ជ្រែកចេញទៅចុចកូដខាងក្រោយឡើយ (Focus Trapping)។ ដូចគ្នានេះដែរ "Skip to Main Content" link នៅដើមគេហទំព័រ ជួយឱ្យ Keyboard Users ចុចរំលង Header Menu បានរហ័ស។',
        km: 'ពេលបើក Modal Popups គេត្រូវតែ "Trap" Focus ឱ្យរត់តែក្នុង Modal នោះប៉ុណ្ណោះ មិនឱ្យ Tab key ជ្រែកចេញទៅចុចកូដខាងក្រោយឡើយ (Focus Trapping)។ ដូចគ្នានេះដែរ "Skip to Main Content" link នៅដើមគេហទំព័រ ជួយឱ្យ Keyboard Users ចុចរំលង Header Menu បានរហ័ស។'
      },
      tutorial: {
        en: '1. Skip Link Pattern:\n<a href="#main-content" class="skip-link">Skip to main content</a>\nCSS: .skip-link { position: absolute; top: -100px; } .skip-link:focus { top: 10px; z-index: 999; }\n\n2. Modal Focus Trapping Logic:\n- Store last focused element before opening modal\n- Set focus to modal heading or first input upon open\n- Return focus to the trigger button when modal closes!',
        km: '១. គំរូ Skip Link ៖\n<a href="#main-content" class="skip-link">Skip to main content</a>\nCSS: .skip-link { position: absolute; top: -100px; } .skip-link:focus { top: 10px; z-index: 999; }\n\n២. គំរូ Modal Focus Trapping ៖\n- កត់ត្រា Element ចុងក្រោយមុនបើក Modal\n- បាញ់ Focus ចូល Modal heading ឬ input ដំបូងពេលបើក\n- បាញ់ Focus ត្រឡប់ទៅប៊ូតុងដើមវិញពេលបិទ Modal!'
      },
      screenReaderAnnouncement: 'Skip to main content, link',
      accessibilityTree: 'role: link "Skip to main content"\n  target: #main-content',
      starterCode: {
        html: `<style>
  .skip-to-content {
    position: absolute;
    top: -50px;
    left: 10px;
    background: #4f46e5;
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    z-index: 100;
    transition: top 0.2s;
  }
  .skip-to-content:focus {
    top: 10px;
  }
</style>
<a href="#main-area" class="skip-to-content">Skip to Main Content (Press Tab)</a>

<header style="padding:10px; background:#e2e8f0; margin-bottom:20px;">
  <nav><a href="#">Link 1</a> | <a href="#">Link 2</a> | <a href="#">Link 3</a></nav>
</header>

<main id="main-area" tabindex="-1" style="padding:10px; background:white;">
  <h2>Main Content Area</h2>
  <p>Keyboard focus jumped directly here!</p>
</main>`
      },
      realWorldExample: {
        title: { en: 'Modal backdrop aria-hidden="true"', km: 'ការលាក់មាតិកាខាងក្រោយ Modal ជាមួយ aria-hidden="true"' },
        description: { en: 'When a modal dialog opens, set aria-hidden="true" on the underlying <main> container so screen readers cannot read background elements.', km: 'ពេលបើក Modal ត្រូវដាក់ `aria-hidden="true"` លើ `<main>` ខាងក្រោយ មិនឱ្យ Screen reader អានស្ទះ។' }
      },
      practiceExercise: {
        question: { en: 'What should happen to keyboard focus when a user closes a modal dialog window?', km: 'តើ Keyboard focus គួរលោតទៅណាពេលអ្នកប្រើប្រាស់បិទ Modal Dialog?' },
        solution: 'Focus must be restored back to the trigger button that originally opened the modal dialog.'
      },
      quizQuestions: [
        {
          id: 'qa11y-l4-3',
          question: { en: 'What is the primary function of a "Skip Link" element?', km: 'តើមុខងារចម្បងនៃ "Skip Link" Element គឺជាអ្វី?' },
          options: [
            { id: '1', text: { en: 'Allows keyboard users to bypass header navigation and jump straight to main content', km: 'អនុញ្ញាតឱ្យ Keyboard users ចុចរំលង Header Menu ទៅកាន់ Main Content ភ្លាមៗ' }, isCorrect: true },
            { id: '2', text: { en: 'Deletes browser cookies automatically', km: 'លុប Browser Cookies ដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
          ],
          explanation: { en: 'Skip links save keyboard users from tabbing through dozens of repetitive nav links on every page transition.', km: 'Skip link ជួយសន្សំសំចៃការចុច Tab រាប់សិបដងឆ្លងកាត់ Header Navigation។' }
        }
      ]
    },

    // MODULE 5 — Color, Contrast & Visual Design
    {
      id: 'a11y-l5-1',
      slug: 'wcag-color-contrast-ratios',
      moduleNumber: 5,
      lessonNumberInModule: 1,
      title: {
        en: 'WCAG Color Contrast Requirements (AA vs AAA)',
        km: 'កម្រិត Color Contrast តាមស្តង់ដារ WCAG (AA vs AAA)'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'ស្តង់ដារ WCAG 2.1 AA តម្រូវឱ្យអត្ថបទធម្មតា (Normal Text) មាន Contrast Ratio យ៉ាងតិច **4.5:1** ធៀបនឹង Background ហើយអត្ថបទធំ (Large Text ≥18pt / 14pt bold) មាន Contrast Ratio យ៉ាងតិច **3.0:1**។ កម្រិត AAA តម្រូវ 7:1 (Normal) និង 4.5:1 (Large)។',
        km: 'ស្តង់ដារ WCAG 2.1 AA តម្រូវឱ្យអត្ថបទធម្មតា (Normal Text) មាន Contrast Ratio យ៉ាងតិច **4.5:1** ធៀបនឹង Background ហើយអត្ថបទធំ (Large Text ≥18pt / 14pt bold) មាន Contrast Ratio យ៉ាងតិច **3.0:1**។ កម្រិត AAA តម្រូវ 7:1 (Normal) និង 4.5:1 (Large)។'
      },
      tutorial: {
        en: '1. WCAG 2.1 AA Standards:\n   - Normal Body Text (<18pt): Minimum 4.5:1\n   - Large Bold Text (≥18pt or 14pt bold): Minimum 3.0:1\n   - UI Components (Borders, Icons): Minimum 3.0:1\n\n2. ❌ Inaccessible Low Contrast: #94a3b8 (gray) on #ffffff (white) -> Ratio: 2.6:1 (FAIL)\n3. ✅ Accessible High Contrast: #334155 (dark slate) on #ffffff (white) -> Ratio: 9.6:1 (PASS WCAG AAA)',
        km: '១. ស្តង់ដារ WCAG 2.1 AA ៖\n   - អត្ថបទធម្មតា (<18pt)៖ យ៉ាងតិច 4.5:1\n   - អត្ថបទធំ (≥18pt ឬ 14pt bold)៖ យ៉ាងតិច 3.0:1\n   - UI Icons & Borders៖ យ៉ាងតិច 3.0:1\n\n២. ❌ Low Contrast មិនល្អ៖ #94a3b8 លើផ្ទៃ #ffffff -> Ratio 2.6:1 (ធ្លាក់)\n៣. ✅ High Contrast ត្រឹមត្រូវ៖ #334155 លើផ្ទៃ #ffffff -> Ratio 9.6:1 (ជាប់ WCAG AAA)'
      },
      screenReaderAnnouncement: 'High Contrast Article Text',
      accessibilityTree: 'role: text "High Contrast Article Text" [computed-contrast=9.6:1]',
      starterCode: {
        html: `<div style="display:flex; flex-direction:column; gap:12px; font-family:sans-serif;">
  <!-- ❌ Low Contrast Failure -->
  <div style="background:#ffffff; color:#94a3b8; padding:12px; border-radius:6px; border:1px solid #ddd;">
    ❌ Low Contrast Text (2.6:1 Ratio - Hard to read)
  </div>

  <!-- ✅ High Contrast WCAG AA Pass -->
  <div style="background:#ffffff; color:#0f172a; padding:12px; border-radius:6px; border:1px solid #334155; font-weight:bold;">
    ✅ WCAG AA Compliant Text (15:1 Ratio - Crystal Clear)
  </div>
</div>`
      },
      realWorldExample: {
        title: { en: 'Inspecting Contrast in Chrome DevTools Color Picker', km: 'ការពិនិត្យ Contrast ក្នុង Chrome DevTools Color Picker' },
        description: { en: 'Inspect any text node in Chrome DevTools, click the CSS color swatch, and look for the green checkmarks showing calculated WCAG AA/AAA contrast ratios.', km: 'Inspect Element ក្នុង DevTools រួចចុច Color Box ដើម្បីមើលប្រព័ន្ធគណនា WCAG AA/AAA ដោយស្វ័យប្រវត្តិ!' }
      },
      practiceExercise: {
        question: { en: 'What is the required contrast ratio for a standard 16px paragraph text under WCAG 2.1 AA?', km: 'តើ Contrast ratio អប្បបរមាសម្រាប់ paragraph 16px ធម្មតាក្រោម WCAG 2.1 AA គឺប៉ុន្មាន?' },
        solution: '4.5:1 ratio'
      },
      quizQuestions: [
        {
          id: 'qa11y-l5-1',
          question: { en: 'What is the minimum WCAG 2.1 AA contrast ratio for standard body text?', km: 'តើ Contrast Ratio អប្បបរមាក្រោម WCAG 2.1 AA សម្រាប់អត្ថបទធម្មតាគឺប៉ុន្មាន?' },
          options: [
            { id: '1', text: { en: '4.5:1', km: '4.5:1' }, isCorrect: true },
            { id: '2', text: { en: '2.0:1', km: '2.0:1' }, isCorrect: false }
          ],
          explanation: { en: '4.5:1 is the required ratio for normal body text under WCAG AA guidelines.', km: '4.5:1 គឺជាកម្រិតតម្រូវសម្រាប់អត្ថបទធម្មតាក្រោម WCAG AA។' }
        }
      ]
    },
    {
      id: 'a11y-l5-2',
      slug: 'never-rely-on-color-alone',
      moduleNumber: 5,
      lessonNumberInModule: 2,
      title: {
        en: 'Never Relying on Color Alone to Convey Meaning',
        km: 'ហាមប្រើប្រាស់តែពណ៌មួយមុខដើម្បីបញ្ជាក់ន័យ'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'អ្នកប្រើប្រាស់ដែលពិការពណ៌ (Colorblind: Red-Green or Blue-Yellow) មិនអាចបែងចែក Error ឬ Success តាមរយៈពណ៌ក្រហម ឬបៃតងតែមួយមុខបានឡើយ។ ត្រូវតែមាន Icon, Text, ឬ Pattern អមបន្ថែម (Color + Icon + Text)។',
        km: 'អ្នកប្រើប្រាស់ដែលពិការពណ៌ (Colorblind: Red-Green or Blue-Yellow) មិនអាចបែងចែក Error ឬ Success តាមរយៈពណ៌ក្រហម ឬបៃតងតែមួយមុខបានឡើយ។ ត្រូវតែមាន Icon, Text, ឬ Pattern អមបន្ថែម (Color + Icon + Text)។'
      },
      tutorial: {
        en: '<!-- ❌ BAD: Only red border and text -->\n<input style="border:1px solid red;">\n<span style="color:red">Invalid</span>\n\n<!-- ✅ GOOD: Red border + Warning Icon + Explicit text -->\n<input aria-invalid="true" style="border:2px solid #dc2626;">\n<span class="error-msg" style="color:#dc2626;">\n  ⚠️ Error: Email must contain @ symbol\n</span>',
        km: '<!-- ❌ មិនល្អ៖ មានតែពណ៌ក្រហម -->\n<input style="border:1px solid red;">\n<span style="color:red">Invalid</span>\n\n<!-- ✅ ល្អ៖ ពណ៌ក្រហម + Icon + សារអត្ថបទច្បាស់លាស់ -->\n<input aria-invalid="true" style="border:2px solid #dc2626;">\n<span class="error-msg" style="color:#dc2626;">\n  ⚠️ Error៖ អ៊ីមែលត្រូវតែមានសញ្ញា @\n</span>'
      },
      screenReaderAnnouncement: 'Alert: Error, Email must contain @ symbol',
      accessibilityTree: 'role: alert "Error: Email must contain @ symbol"',
      starterCode: {
        html: `<div style="font-family:sans-serif; max-width:400px;">
  <!-- Accessible Form Error Component -->
  <label for="email-field" style="font-weight:bold; display:block; margin-bottom:4px;">Email Address:</label>
  <input id="email-field" type="email" value="user-at-domain.com" aria-invalid="true" aria-describedby="email-err" style="width:100%; padding:8px; border:2px solid #dc2626; border-radius:6px; box-sizing:border-box;">
  
  <div id="email-err" role="alert" style="color:#dc2626; font-size:13px; font-weight:bold; margin-top:6px; display:flex; items-center; gap:4px;">
    ⚠️ Please enter a valid email address with an "@" symbol.
  </div>
</div>`
      },
      realWorldExample: {
        title: { en: 'Data Visualizations & Charts', km: 'ការបង្ហាញ chart និងក្រាហ្វិក' },
        description: { en: 'In bar charts or line graphs, use dashed lines or distinct bar patterns alongside colors so colorblind users can distinguish data series.', km: 'ក្នុង Line Graphs ត្រូវប្រើបន្ទាត់ចុចៗ (dashed) ឬ Pattern បន្ថែមពីលើពណ៌។' }
      },
      practiceExercise: {
        question: { en: 'How can you make a form input error message accessible to red-green colorblind users?', km: 'តើធ្វើដូចម្តេចដើម្បីឱ្យសារ Error លើ Form អានយល់ដោយអ្នកពិការពណ៌ ក្រហម-បៃតង?' },
        solution: 'Include explicit warning text labels, icons (like ⚠️ or ❌), and role="alert" alongside the red color formatting.'
      },
      quizQuestions: [
        {
          id: 'qa11y-l5-2',
          question: { en: 'Why is conveying information using red/green colors alone considered an accessibility defect?', km: 'ហេតុអ្វីការបញ្ជាក់ព័ត៌មានតាមពណ៌ ក្រហម/បៃតង តែមួយមុខត្រូវបានចាត់ទុកជា Defect?' },
          options: [
            { id: '1', text: { en: 'Colorblind users cannot distinguish red from green visual cues', km: 'អ្នកពិការពណ៌មិនអាចបែងចែកពណ៌ក្រហម និងបៃតងបានឡើយ' }, isCorrect: true },
            { id: '2', text: { en: 'Red color consumes more GPU memory', km: 'ពណ៌ក្រហមស៊ី GPU' }, isCorrect: false }
          ],
          explanation: { en: 'Colorblind individuals need additional visual cues like icons, underlines, or text labels.', km: 'អ្នកពិការពណ៌ត្រូវការ Icon, បន្ទាត់ ឬអត្ថបទបន្ថែមដើម្បីយល់ន័យ។' }
        }
      ]
    },
    {
      id: 'a11y-l5-3',
      slug: 'responsive-text-resizing-zoom',
      moduleNumber: 5,
      lessonNumberInModule: 3,
      title: {
        en: 'Supporting Text Resizing & 200% Browser Zoom',
        km: 'ការគាំទ្រ Text Resizing និង 200% Browser Zoom'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'អ្នកមានបញ្ហាភ្នែកស្រពិចស្រពិល តែងតែ Zoom Browser រហូតដល់ 200% ឬដំឡើង Base Font Size។ គេហទំព័រត្រូវប្រើប្រាស់ `rem` / `em` units (ជំនួស `px` រឹង) ហើយមិនត្រូវឱ្យមាន Horizontal Scrollbar (កាត់អក្សរ) ឡើយ។',
        km: 'អ្នកមានបញ្ហាភ្នែកស្រពិចស្រពិល តែងតែ Zoom Browser រហូតដល់ 200% ឬដំឡើង Base Font Size។ គេហទំព័រត្រូវប្រើប្រាស់ `rem` / `em` units (ជំនួស `px` រឹង) ហើយមិនត្រូវឱ្យមាន Horizontal Scrollbar (កាត់អក្សរ) ឡើយ។'
      },
      tutorial: {
        en: '/* ❌ Rigid fixed height cuts off text on 200% zoom */\n.card { height: 100px; font-size: 14px; overflow: hidden; }\n\n/* ✅ Fluid responsive sizing scales naturally */\n.card {\n  min-height: 6.25rem; /* 100px in rem */\n  font-size: 1rem;     /* Respects user default font size */\n  padding: 1rem;\n}',
        km: '/* ❌ កំណត់ height រឹង ធ្វើឱ្យកាត់អក្សរពេល Zoom 200% */\n.card { height: 100px; font-size: 14px; overflow: hidden; }\n\n/* ✅ កំណត់ min-height និង rem ជួយឱ្យអក្សររីកតាមធម្មជាតិ */\n.card {\n  min-height: 6.25rem;\n  font-size: 1rem;\n  padding: 1rem;\n}'
      },
      screenReaderAnnouncement: 'Responsive Scalable Layout Card',
      accessibilityTree: 'role: region "Scalable Card" [font-size=1rem]',
      starterCode: {
        html: `<div style="font-family:sans-serif; max-width:500px; margin:0 auto;">
  <div style="min-height: 5rem; padding: 1rem; background:#f8fafc; border:1px solid #cbd5e1; border-radius:0.5rem;">
    <h3 style="margin-top:0; font-size:1.25rem;">Flexible Responsive Card</h3>
    <p style="font-size:1rem; line-height:1.5;">
      This container uses <code>rem</code> units so text expands fluidly without breaking layout boundaries when zoomed to 200%.
    </p>
  </div>
</div>`
      },
      realWorldExample: {
        title: { en: 'WCAG 1.4.4 Resize Text Criterion', km: 'លក្ខខណ្ឌ WCAG 1.4.4 Resize Text' },
        description: { en: 'Text can be resized without assistive technology up to 200 percent without loss of content or functionality.', km: 'អត្ថបទអាច Zoom ដល់ 200% ដោយមិនបាត់បង់មាតិកា ឬបែកប្លង់ឡើយ។' }
      },
      practiceExercise: {
        question: { en: 'Why should font sizes be defined using `rem` instead of fixed `px` values?', km: 'ហេតុអ្វីបានជាគួរទំហំអក្សរត្រូវកំណត់តាម `rem` ជំនួស `px`?' },
        solution: 'rem units scale relative to the user browser default font settings, allowing visually impaired users to enlarge text effortlessly.'
      },
      quizQuestions: [
        {
          id: 'qa11y-l5-3',
          question: { en: 'According to WCAG 1.4.4, up to what zoom percentage must a website support without content overlap or horizontal scrollbars?', km: 'តើគេហទំព័រត្រូវតែគាំទ្រការ Zoom ដល់ប៉ុន្មានភាគរយដោយមិនបែកប្លង់?' },
          options: [
            { id: '1', text: { en: '200%', km: '200%' }, isCorrect: true },
            { id: '2', text: { en: '110%', km: '110%' }, isCorrect: false }
          ],
          explanation: { en: 'WCAG requires full layout support for 200% browser text zooming.', km: 'WCAG តម្រូវឱ្យគាំទ្រការ Zoom អត្ថបទដល់ 200% ដោយមិនបែកប្លង់។' }
        }
      ]
    },

    // MODULE 6 — Testing with Screen Readers & Browser Tools
    {
      id: 'a11y-l6-1',
      slug: 'screen-reader-testing-commands',
      moduleNumber: 6,
      lessonNumberInModule: 1,
      title: {
        en: 'Testing with Screen Readers (VoiceOver & NVDA Commands)',
        km: 'ការតេស្តជាមួយ Screen Readers (VoiceOver & NVDA)'
      },
      durationMinutes: 18,
      difficulty: 'Intermediate',
      explanation: {
        en: 'ការតេស្តគេហទំព័រដោយផ្ទាល់ជាមួយ Screen Reader (VoiceOver លើ macOS/iOS, NVDA លើ Windows, ឬ TalkBack លើ Android) គឺជាវិធីសាស្ត្រពិតប្រាកដតែមួយគត់ដើម្បីផ្ទៀងផ្ទាត់ UX របស់អ្នកប្រើប្រាស់ពិការភ្នែក។',
        km: 'ការតេស្តគេហទំព័រដោយផ្ទាល់ជាមួយ Screen Reader (VoiceOver លើ macOS/iOS, NVDA លើ Windows, ឬ TalkBack លើ Android) គឺជាវិធីសាស្ត្រពិតប្រាកដតែមួយគត់ដើម្បីផ្ទៀងផ្ទាត់ UX របស់អ្នកប្រើប្រាស់ពិការភ្នែក។'
      },
      tutorial: {
        en: '1. VoiceOver (macOS Shortcut): Cmd + F5 to turn On/Off.\n   - VO Keys: Ctrl + Option\n   - Next Element: VO + Right Arrow\n   - Open Rotor (List Headings/Landmarks): VO + U\n\n2. NVDA (Windows Free Screen Reader):\n   - Next Heading: Press `H` key\n   - Next Landmark: Press `D` key\n   - Next Link: Press `K` key',
        km: '១. VoiceOver (macOS)៖ ចុច Cmd + F5 ដើម្បី បើក/បិទ\n   - VO Modifier keys: Ctrl + Option\n   - អានទៅមុខ៖ VO + Right Arrow\n   - បើក Rotor (មើលបញ្ជី Headings/Landmarks)៖ VO + U\n\n២. NVDA (Windows)៖\n   - លោតទៅ Heading បន្ទាប់៖ ចុចអក្សរ `H`\n   - លោតទៅ Landmark បន្ទាប់៖ ចុចអក្សរ `D`\n   - លោតទៅ Link បន្ទាប់៖ ចុចអក្សរ `K`'
      },
      screenReaderAnnouncement: 'Heading level 2: Screen Reader Shortcut Guide',
      accessibilityTree: 'role: heading "Screen Reader Shortcut Guide" [level=2]',
      starterCode: {
        html: `<div style="font-family:sans-serif; max-width:450px;">
  <h2>Screen Reader Navigation Test</h2>
  <nav aria-label="Sample Navigation">
    <a href="#section1">Jump to Section 1</a> | 
    <a href="#section2">Jump to Section 2</a>
  </nav>
  <section id="section1" style="margin-top:12px;">
    <h3>Section 1: VoiceOver Commands</h3>
    <p>Press Cmd+F5 on macOS to enable VoiceOver testing.</p>
  </section>
</div>`
      },
      realWorldExample: {
        title: { en: 'Testing with eyes closed!', km: 'ការតេស្តដោយបិទភ្នែក!' },
        description: { en: 'Turn on VoiceOver, turn off your monitor, and try buying a product on your app using only the keyboard and screen reader audio!', km: 'បើក VoiceOver រួចបិទពន្លឺអេក្រង់ ព្យាយាមទិញទំនិញលើ App របស់អ្នកដោយស្តាប់តែសំឡេង!' }
      },
      practiceExercise: {
        question: { en: 'Which key shortcut opens the VoiceOver Rotor menu on macOS?', km: 'តើ Shortcut Key មួយណាសម្រាប់បើក VoiceOver Rotor លើ macOS?' },
        solution: 'VO + U (Control + Option + U)'
      },
      quizQuestions: [
        {
          id: 'qa11y-l6-1',
          question: { en: 'Which key shortcut toggles Apple VoiceOver on macOS?', km: 'តើ Shortcut Key មួយណាសម្រាប់ បើក/បិទ VoiceOver លើ Mac?' },
          options: [
            { id: '1', text: { en: 'Command + F5', km: 'Command + F5' }, isCorrect: true },
            { id: '2', text: { en: 'Ctrl + Shift + Esc', km: 'Ctrl + Shift + Esc' }, isCorrect: false }
          ],
          explanation: { en: 'Cmd + F5 instantly toggles VoiceOver screen reader on macOS.', km: 'Cmd + F5 បើក ឬ បិទ VoiceOver ភ្លាមៗលើ macOS។' }
        }
      ]
    },
    {
      id: 'a11y-l6-2',
      slug: 'automated-accessibility-audits',
      moduleNumber: 6,
      lessonNumberInModule: 2,
      title: {
        en: 'Automated Checks: Lighthouse & axe DevTools Extension',
        km: 'ការត្រួតពិនិត្យស្វ័យប្រវត្តិ៖ Lighthouse & axe DevTools'
      },
      durationMinutes: 15,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Automated Testing Tools ដូចជា **Chrome Lighthouse Accessibility Audit** និង **axe DevTools Extension** ជួយស្វែងរក Bug ដំបូងៗបានលឿន។ ប៉ុន្តែត្រូវចងចាំថា៖ Automated tools ស្វែងរក Bug ឃើញត្រឹមតែ **៣០% ទៅ ៥០%** ប៉ុណ្ណោះ ព្រោះវា មិន អាចតេស្ត Usability ឬន័យអត្ថបទបានឡើយ! (Tools catch ~30-50% of issues)',
        km: 'Automated Testing Tools ដូចជា **Chrome Lighthouse Accessibility Audit** និង **axe DevTools Extension** ជួយស្វែងរក Bug ដំបូងៗបានលឿន។ ប៉ុន្តែត្រូវចងចាំថា៖ Automated tools ស្វែងរក Bug ឃើញត្រឹមតែ **៣០% ទៅ ៥០%** ប៉ុណ្ណោះ ព្រោះវា មិន អាចតេស្ត Usability ឬន័យអត្ថបទបានឡើយ! (Tools catch ~30-50% of issues)'
      },
      tutorial: {
        en: '1. Running Lighthouse Audit:\n   - Open Chrome DevTools -> Click "Lighthouse" tab -> Check "Accessibility" -> Click "Analyze page load".\n2. What Automated Tools Catch:\n   - Missing alt attributes on <img>\n   - Low contrast text ratios\n   - Form fields without linked <label>\n   - Duplicate element ID attributes\n3. What Automated Tools MISS:\n   - Whether alt text accurately describes the image context\n   - Whether keyboard focus order is logical\n   - Whether custom modal dialogs trap focus properly',
        km: '១. ការរត់ Lighthouse Audit ៖\n   - បើក Chrome DevTools -> ចុច Tab "Lighthouse" -> គ្រីស "Accessibility" -> ចុច Analyze\n២. អ្វីដែល Automated Tools រកឃើញ៖\n   - ខ្វះ alt attribute លើ <img>\n   - ស្ទះ Contrast ratio\n   - Input គ្មាន <label>\n   - ជាន់ ID Attribute គ្នា\n៣. អ្វីដែល Automated Tools រក មិន ឃើញ៖\n   - ន័យអត្ថបទ alt text ថាត្រូវ ឬខុស\n   - លំដាប់ Focus order ថា منطقي ឬអត់\n   - Focus trapping ក្នុង Modal'
      },
      screenReaderAnnouncement: 'Lighthouse Score: 100% Accessibility Audit',
      accessibilityTree: 'role: region "Lighthouse Audit Report" [score=100]',
      starterCode: {
        html: `<div style="font-family:sans-serif; padding:10px;">
  <h3>Lighthouse Accessibility Audit Guide</h3>
  <ul style="line-height:1.6;">
    <td>1. Open Chrome DevTools (F12)</td>
    <td>2. Switch to the <strong>Lighthouse</strong> tab</td>
    <td>3. Select <strong>Accessibility</strong> and click Run Audit</td>
  </ul>
</div>`
      },
      realWorldExample: {
        title: { en: 'Lighthouse 100% does NOT mean 100% accessible!', km: 'ពិន្ទុ Lighthouse 100% មិនមែនមានន័យថា a11y 100% ឥតខ្ចោះឡើយ!' },
        description: { en: 'An image with alt="image of stuff" passes automated checks 100%, but is useless for a blind user looking for meaningful information!', km: 'រូបភាពដែលមាន alt="image" ជាប់ពិន្ទុ Lighthouse 100% ប៉ុន្តែគ្មានន័យអ្វីសោះសម្រាប់អ្នកអាន Screen Reader!' }
      },
      practiceExercise: {
        question: { en: 'Approximately what percentage of real-world accessibility defects can automated audit tools detect?', km: 'តើប្រហែលប៉ុន្មានភាគរយនៃ Bug Accessibility ដែល Automated Audit Tools អាចស្វែងរកឃើញ?' },
        solution: 'Automated tools can detect approximately 30% to 50% of defects. Manual screen reader testing is required for full coverage.'
      },
      quizQuestions: [
        {
          id: 'qa11y-l6-2',
          question: { en: 'Can a website with a 100% Lighthouse Accessibility score still contain major usability bugs for screen reader users?', km: 'តើគេហទំព័រដែលមានពិន្ទុ Lighthouse 100% អាចនៅតែមាន Bug Accessibility ធ្ងន់ធ្ងរដែរឬទេ?' },
          options: [
            { id: '1', text: { en: 'Yes, automated tools cannot test keyboard focus flow or logical meaning of text', km: 'បាទ/ចាស, Automated tools មិនអាចតេស្ត Focus Flow ឬន័យអត្ថបទបានឡើយ' }, isCorrect: true },
            { id: '2', text: { en: 'No, 100% guarantees absolute perfection', km: 'ទេ, 100% ធានាថាឥតខ្ចោះ 100%' }, isCorrect: false }
          ],
          explanation: { en: 'Automated tools verify code syntax rules but cannot judge human usability or contextual meaning.', km: 'Automated tools ផ្ទៀងផ្ទាត់តែ Syntax ប៉ុណ្ណោះ មិនអាចជំនួសការតេស្តរបស់មនុស្សបានឡើយ។' }
        }
      ]
    },
    {
      id: 'a11y-l6-3',
      slug: 'browser-accessibility-tree-devtools',
      moduleNumber: 6,
      lessonNumberInModule: 3,
      title: {
        en: 'Inspecting the Browser Accessibility Tree in DevTools',
        km: 'ការពិនិត្យ Browser Accessibility Tree ក្នុង DevTools'
      },
      durationMinutes: 18,
      difficulty: 'Advanced',
      explanation: {
        en: 'Browser បម្លែង DOM Tree ទៅជា **Accessibility Tree** ដែលមានតែ ៤ ព័ត៌មានចម្បង៖ **Name** (ឈ្មោះ), **Role** (តួនាទី), **State** (ស្ថានភាព), និង **Value** (តម្លៃ)។ ព័ត៌មាននេះហើយដែលត្រូវបានផ្ញើទៅកាន់ Screen Readers។',
        km: 'Browser បម្លែង DOM Tree ទៅជា **Accessibility Tree** ដែលមានតែ ៤ ព័ត៌មានចម្បង៖ **Name** (ឈ្មោះ), **Role** (តួនាទី), **State** (ស្ថានភាព), និង **Value** (តម្លៃ)។ ព័ត៌មាននេះហើយដែលត្រូវបានផ្ញើទៅកាន់ Screen Readers។'
      },
      tutorial: {
        en: '1. How to open Accessibility Pane in Chrome DevTools:\n   - Inspect any element -> In the right-hand styles panel, click the "Accessibility" tab.\n2. Computed Properties to verify:\n   - Name: Computed accessible label (e.g., "Submit")\n   - Role: Computed ARIA or HTML role (e.g., "button")\n   - Focusable: true | false\n   - State: expanded=false, invalid=true',
        km: '១. របៀបបើក Accessibility Pane ក្នុង Chrome DevTools ៖\n   - Right-click Inspect Element -> នៅផ្ទាំងខាងស្តាំ ចុចជ្រើសរើស Tab "Accessibility"\n២. ព័ត៌មាន Computed Properties ត្រូវផ្ទៀងផ្ទាត់ ៖\n   - Name: ឈ្មោះគណនារួច (ឧ. "Submit")\n   - Role: តួនាទីដើម (ឧ. "button")\n   - Focusable: true | false\n   - State: expanded=false, invalid=true'
      },
      screenReaderAnnouncement: 'Accessibility Tree: Role=button, Name=Submit, Focusable=true',
      accessibilityTree: 'node: button "Submit"\n  role: button\n  name: "Submit"\n  focusable: true\n  focused: false',
      starterCode: {
        html: `<div style="font-family:sans-serif; padding:12px; background:#f1f5f9; border-radius:8px;">
  <h4>DevTools Accessibility Tree Inspector</h4>
  <p>Right click the button below and select <strong>Inspect</strong> -> <strong>Accessibility Pane</strong>:</p>
  
  <button aria-label="Confirm Purchase" style="padding:10px 18px; background:#4f46e5; color:white; border:none; border-radius:6px; cursor:pointer; font-weight:bold;">
    Pay Now ($49.00)
  </button>
</div>`
      },
      realWorldExample: {
        title: { en: 'Cross-referencing Chrome DevTools & Screen Readers', km: 'ការផ្ទៀងផ្ទាត់រវាង Chrome DevTools និង Screen Readers' },
        description: { en: 'If a screen reader is behaving unexpectedly, inspect the Accessibility Pane in DevTools to see the browser computed accessible name and role.', km: 'បើ Screen reader អានមិនស្រួល ត្រូវចូលមើល Accessibility Pane ក្នុង DevTools ដើម្បីដឹងថា Browser គណនាឈ្មោះ និង Role យ៉ាងណា។' }
      },
      practiceExercise: {
        question: { en: 'What four primary properties are stored in each node of the browser Accessibility Tree?', km: 'តើព័ត៌មានចម្បង ៤ យ៉ាងណាខ្លះដែលត្រូវបាន រក្សាទុកក្នុង Node នីមួយៗនៃ Accessibility Tree?' },
        solution: 'Name, Role, State, and Value.'
      },
      quizQuestions: [
        {
          id: 'qa11y-l6-3',
          question: { en: 'Where can developers inspect the browser computed accessible name and role for any DOM element?', km: 'តើអ្នកអភិវឌ្ឍន៍អាចពិនិត្យមើល computed accessible name និង role របស់ Element នៅឯណា?' },
          options: [
            { id: '1', text: { en: 'In the Chrome DevTools Accessibility Pane', km: 'ក្នុង Chrome DevTools Accessibility Pane' }, isCorrect: true },
            { id: '2', text: { en: 'In the Network waterfall tab', km: 'ក្នុង Network waterfall tab' }, isCorrect: false }
          ],
          explanation: { en: 'The Accessibility Pane in DevTools displays the computed Accessibility Tree properties directly.', km: 'Accessibility Pane ក្នុង DevTools បង្ហាញ Computed Accessibility Tree Properties យ៉ាងលម្អិត។' }
        }
      ]
    },

    // CAPSTONE MODULE — Audit & Fix an Inaccessible Sample Page
    {
      id: 'a11y-l7-1',
      slug: 'capstone-audit-refactor-project',
      moduleNumber: 7,
      lessonNumberInModule: 1,
      title: {
        en: 'Capstone Project: Auditing & Refactoring the 5 Planted Bugs',
        km: 'គម្រោង Capstone៖ ការត្រួតពិនិត្យ និងកែប្រែ Bug ធំៗទាំង ៥'
      },
      durationMinutes: 30,
      difficulty: 'Advanced',
      explanation: {
        en: 'ក្នុងមេរៀន Capstone នេះ អ្នកនឹងធ្វើការ Audit និងកែប្រែកូដ Sample Web App ដែលមាន Bug Accessibility ធំៗចំនួន ៥ ៖ (១) Unlabeled Icon Button, (២) Form Error ប្រើតែពណ៌ក្រហម, (៣) Custom <div> Dropdown គ្មាន Keyboard Support, (៤) ខ្វះ Landmark structure, និង (៥) Low Contrast text។',
        km: 'ក្នុងមេរៀន Capstone នេះ អ្នកនឹងធ្វើការ Audit និងកែប្រែកូដ Sample Web App ដែលមាន Bug Accessibility ធំៗចំនួន ៥ ៖ (១) Unlabeled Icon Button, (២) Form Error ប្រើតែពណ៌ក្រហម, (៣) Custom <div> Dropdown គ្មាន Keyboard Support, (៤) ខ្វះ Landmark structure, និង (៥) Low Contrast text។'
      },
      tutorial: {
        en: 'Step-by-Step Refactoring Plan:\n1. Fix Bug 1 (Icon Button): Add aria-label="Search items" to <button>.\n2. Fix Bug 2 (Color Error): Add role="alert", warning icon, and aria-describedby on <input>.\n3. Fix Bug 3 (Div Dropdown): Replace custom <div> with native <select id="shipping">.\n4. Fix Bug 4 (Landmarks): Wrap top header in <header><nav>, main section in <main>.\n5. Fix Bug 5 (Low Contrast): Update body CSS color from #94a3b8 to #0f172a (15:1 ratio).',
        km: 'ផែនការកែប្រែកូដជាជំហានៗ៖\n១. កែ Bug 1 (Icon Button)៖ បន្ថែម aria-label="Search items" លើ <button>\n២. កែ Bug 2 (Color Error)៖ បន្ថែម role="alert", Warning Icon, និង aria-describedby លើ <input>\n៣. កែ Bug 3 (Div Dropdown)៖ ជំនួស <div> ដោយ Native <select id="shipping">\n៤. កែ Bug 4 (Landmarks)៖ ប្រើប្រាស់ <header><nav> និង <main> tags\n៥. កែ Bug 5 (Low Contrast)៖ កែប្រែពណ៌អត្ថបទពី #94a3b8 ទៅ #0f172a (Contrast 15:1)'
      },
      screenReaderAnnouncement: 'TechStore Online, Heading level 1, Banner landmark. Checkout Order, Heading level 2, Main landmark',
      accessibilityTree: 'role: banner\n  role: heading "TechStore Online" [level=1]\nrole: main\n  role: heading "Checkout Order" [level=2]',
      starterCode: {
        html: `<!-- Inaccessible Starter Code -->
<div class="header">
  <h2>TechStore Online</h2>
  <button onclick="alert('Search')">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  </button>
</div>
<div class="body" style="color:#94a3b8;">
  <h3>Checkout Form</h3>
  <input type="text" style="border:1px solid red;">
  <span style="color:red">Error</span>
</div>`
      },
      realWorldExample: {
        title: { en: 'Complete WCAG AA Conformance Verified', km: 'ការសម្រេចបាន WCAG AA Conformance 100%' },
        description: { en: 'After completing these 5 refactoring steps, the sample app achieves 100% WCAG AA compliance and works flawlessly with VoiceOver and keyboard navigation.', km: 'បន្ទាប់ពីកែសម្រួលទាំង ៥ ជំហានរួច គេហទំព័រដើរយ៉ាងរលូនជាមួយ VoiceOver និង Keyboard!' }
      },
      practiceExercise: {
        question: { en: 'What is the first step when auditing an existing website for accessibility compliance?', km: 'តើអ្វីជាជំហានដំបូងគេបង្អស់ពេលត្រួតពិនិត្យ Accessibility លើគេហទំព័រ?' },
        solution: 'Perform a full keyboard navigation test (unplug the mouse and tab through all interactive controls) alongside an automated Lighthouse/axe scan.'
      },
      quizQuestions: [
        {
          id: 'qa11y-l7-1',
          question: { en: 'Which combination of fixes turns an inaccessible `<div>` dropdown into a fully accessible form control?', km: 'តើដំណោះស្រាយមួយណាដែលបំប្លែង `<div>` dropdown ទៅជា Form control ដែលមាន a11y 100%?' },
          options: [
            { id: '1', text: { en: 'Replacing the custom <div> with a native <select> element linked to a <label for="">', km: 'ជំនួស <div> ដោយ Native <select> element ដែលមានភ្ជាប់ជាមួយ <label for="">' }, isCorrect: true },
            { id: '2', text: { en: 'Adding red CSS color to the div', km: 'បន្ថែមពណ៌ក្រហមលើ div' }, isCorrect: false }
          ],
          explanation: { en: 'Native <select> elements provide keyboard navigation, screen reader options list, and focus handling out of the box.', km: 'Native <select> ផ្តល់នូវ Keyboard navigation និងបញ្ជី Option ទៅ Screen reader ដោយស្វ័យប្រវត្តិ។' }
        }
      ]
    }
  ]
};
