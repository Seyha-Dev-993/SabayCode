import { FrontendLesson } from '../types/frontendClass';

export const TESTING_LESSONS_PART2: FrontendLesson[] = [
  // -------------------------------------------------------------
  // MODULE 4 — Testing Library Philosophy
  // -------------------------------------------------------------
  {
    id: 'test-4-1',
    slug: 'testing-library-philosophy-user-centric',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: {
      en: 'Testing Library Guiding Principle: "Test UI as Users Experience It"',
      km: 'គោលការណ៍ណែនាំ Testing Library៖ "តេស្ត UI ឱ្យដូចទៅនឹងអ្វីដែលអ្នកប្រើប្រាស់ជួបប្រទះ"'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The core guiding principle of Testing Library is: "The more your tests resemble the way your software is used, the more confidence they can give you." Instead of testing implementation details like component state or class names, query elements by their accessible text, labels, and roles.',
      km: 'គោលការណ៍ចម្បងនៃ Testing Library គឺ៖ "កាលណាការតេស្តរបស់អ្នកកាន់តែដូចទៅនឹងរបៀបដែលអ្នកប្រើប្រាស់ពិតប្រាកដប្រាស្រ័យទាក់ទងជាមួយ App នោះវា និងផ្តល់ទំនុកចិត្តកាន់តែខ្ពស់។" ជំនួសឱ្យការតេស្តលើ Implementation details ដូចជា Component state ឬ CSS class names យើងត្រូវ Query រក Element តាមរយៈ Text, Label, និង Accessible Role ដែលអ្នកប្រើប្រាស់មើលឃើញ។'
    },
    tutorial: {
      en: `1. Avoid Implementation Details:
   ❌ Bad: wrapper.find('button.btn-primary').prop('disabled')
   // Breaks if CSS class changes from .btn-primary to .btn-indigo!

2. Embrace User-Centric Queries:
   ✅ Good: expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled();
   // Tests what the user actually sees and interacts with on screen.`,
      km: `១. ចៀសវាងការតេស្តលើ Implementation Details៖
   ❌ មិនល្អ៖ wrapper.find('button.btn-primary').prop('disabled')
   // នឹង Fail ភ្លាមបើកែឈ្មោះ CSS class ពី .btn-primary ទៅជា .btn-indigo!

២. ប្រើប្រាស់ User-Centric Queries៖
   ✅ ល្អ៖ expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled();
   // តេស្តលើអ្វីដែលអ្នកប្រើប្រាស់ពិតជាមើលឃើញ និងចុចលើអេក្រង់។`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .code { background: #1e293b; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; color: #38bdf8; }
    .term { background: #020617; border: 1px solid #22c55e; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; margin-top: 10px; }
    .pass { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <h3>React Testing Library Component Test</h3>
  <pre class="code">
import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

test('renders submit button with accessible name', () => {
  render(<LoginForm />);
  const submitBtn = screen.getByRole('button', { name: /log in/i });
  expect(submitBtn).toBeInTheDocument();
});
  </pre>

  <div class="term">
    <div><span class="pass">PASS</span> src/components/LoginForm.test.jsx</div>
    <div>  LoginForm Component</div>
    <div>    ✓ renders submit button with accessible name (14 ms)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Refactoring CSS Frameworks Without Breaking Tests',
        km: 'ការប្តូរ CSS Framework ដោយមិនធ្វើឱ្យ Test បែកបាក់'
      },
      description: {
        en: 'When switching from Bootstrap to Tailwind, tests written with Testing Library continue passing because button text and roles remain identical.',
        km: 'ពេលប្តូរ CSS ពី Bootstrap ទៅ Tailwind កូដ Test ដែលសរសេរដោយ Testing Library នៅតែដើរប្រក្រតី ព្រោះ Button Text និង Role មិនបានប្រែប្រួលឡើយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why is querying by class name `.submit-btn` considered fragile in automated UI tests?',
        km: 'ហេតុអ្វីបានជាការ Query រក Element តាមរយឈ្មោះ class `.submit-btn` ត្រូវបានចាត់ទុកថាងាយស្រួលបែកបាក់ (Fragile)?'
      },
      solution: 'Because class names are internal styling details that frequently change during design refactoring, causing tests to fail even though the component still works perfectly for the user.'
    },
    quizQuestions: [
      {
        id: 'q-4-1-1',
        question: {
          en: 'What is the core philosophy of Testing Library?',
          km: 'តើអ្វីជាទស្សនវិជ្ជាចម្បងរបស់ Testing Library?'
        },
        options: [
          { id: '1', text: { en: 'Test components in the way users interact with them, avoiding implementation details', km: 'តេស្ត Components ឱ្យដូចទៅនឹងរបៀបដែលអ្នកប្រើប្រាស់ប្រាស្រ័យទាក់ទង ចៀសវាង implementation details' }, isCorrect: true },
          { id: '2', text: { en: 'Test internal state values and private methods directly', km: 'តេស្ត internal state និង private methods ដោយផ្ទាល់' }, isCorrect: false }
        ],
        explanation: {
          en: 'Testing Library focuses on user accessibility and visible DOM output.',
          km: 'Testing Library ផ្តោតលើ Accessibility និង DOM ដែលអ្នកប្រើប្រាស់មើលឃើញ។'
        }
      }
    ]
  },

  {
    id: 'test-4-2',
    slug: 'query-priority-guide',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: {
      en: 'The Query Priority Hierarchy: getByRole -> getByLabelText -> getByTestId',
      km: 'ឋានានុក្រមអាទិភាព Query៖ getByRole -> getByLabelText -> getByTestId'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Testing Library recommends a strict query priority order: 1) Queries Accessible to Everyone (getByRole, getByLabelText, getByPlaceholderText, getByText), 2) Semantic Queries (getByAltText, getByTitle), 3) Test IDs (getByTestId) as a last resort when elements cannot be queried by role or text.',
      km: 'Testing Library ផ្តល់អនុសាសន៍ឱ្យជ្រើសរើស Query តាមលំដាប់អាទិភាព៖ ១) Queries Accessible សម្រាប់គ្រប់គ្នា (getByRole, getByLabelText, getByText), ២) Semantic Queries (getByAltText, getByTitle), ៣) Test IDs (getByTestId) ជាជម្រើសចុងក្រោយបង្អស់ នៅពេលដែល Element មិនអាច Query តាម Role ឬ Text បាន។'
    },
    tutorial: {
      en: `1. Priority 1 (Top Recommendation - Accessibility & Visible Text):
   // Buttons, headings, links, checkboxes
   screen.getByRole('button', { name: /save/i });
   screen.getByRole('heading', { level: 1, name: /welcome/i });

   // Form inputs linked with <label>
   screen.getByLabelText(/email address/i);

   // Non-interactive body text
   screen.getByText(/terms of service/i);

2. Priority 3 (Last Resort - Untestable dynamic elements):
   screen.getByTestId('custom-canvas-chart');`,
      km: `១. អាទិភាពទី ១ (ណែនាំខ្ពស់បំផុត - Accessible to Everyone)៖
   // Buttons, headings, links, checkboxes
   screen.getByRole('button', { name: /save/i });
   screen.getByRole('heading', { level: 1, name: /welcome/i });

   // Form inputs Linked ជាមួយ <label>
   screen.getByLabelText(/email address/i);

   // Non-interactive body text
   screen.getByText(/terms of service/i);

២. អាទិភាពចុងក្រោយ (Last Resort)៖
   screen.getByTestId('custom-canvas-chart');`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .box { background: #1e293b; border-left: 4px solid #38bdf8; padding: 12px; margin-bottom: 10px; font-size: 13px; }
    .p1 { border-color: #22c55e; }
    .p2 { border-color: #f59e0b; }
    .p3 { border-color: #ef4444; }
  </style>
</head>
<body>
  <h3>Testing Library Query Priority Priority Guide</h3>
  <div class="box p1"><strong>1st Priority (Everyone):</strong> getByRole, getByLabelText, getByText</div>
  <div class="box p2"><strong>2nd Priority (Semantic):</strong> getByAltText, getByTitle</div>
  <div class="box p3"><strong>3rd Priority (Last Resort):</strong> getByTestId (data-testid)</div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Enforcing Accessible Web Forms',
        km: 'ការជួយពង្រឹង Accessibility លើ Form'
      },
      description: {
        en: 'If `getByLabelText` fails during a test, it alerts developers that an `<input>` is missing a `<label htmlFor="...">`, fixing accessibility for screen readers.',
        km: 'ប្រសិនបើ `getByLabelText` ដើរ Fail វាព្រមានឱ្យ Developer ដឹងថា `<input>` ខ្វះ `<label htmlFor="...">` ដែលជួយកែសម្រួល A11y សម្រាប់ Screen reader។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which query should you prefer for finding a heading element `<h1>Dashboard</h1>`?',
        km: 'តើ Query មួយណាដែលអ្នកគួរជ្រើសរើសជាចម្បងដើម្បីស្វែងរក Heading `<h1>Dashboard</h1>`?'
      },
      solution: 'screen.getByRole("heading", { level: 1, name: /dashboard/i });'
    },
    quizQuestions: [
      {
        id: 'q-4-2-1',
        question: {
          en: 'Why is `getByTestId` placed as a last resort in Testing Library\'s query hierarchy?',
          km: 'ហេតុអ្វីបានជា `getByTestId` ស្ថិតនៅជម្រើសចុងក្រោយគេក្នុង Query Hierarchy របស់ Testing Library?'
        },
        options: [
          { id: '1', text: { en: 'Because data-testid is invisible to real users and screen readers, whereas getByRole tests true accessibility', km: 'ព្រោះ data-testid មិនអាចមើលឃើញដោយអ្នកប្រើប្រាស់ ឬ Screen readers ឡើយ ខណៈ getByRole តេស្ត Accessibility ពិតប្រាកដ' }, isCorrect: true },
          { id: '2', text: { en: 'Because getByTestId is deprecated in Jest', km: 'ព្រោះ getByTestId ត្រូវគេលុបចោល' }, isCorrect: false }
        ],
        explanation: {
          en: 'getByRole and getByLabelText force developers to write accessible markup.',
          km: 'getByRole និង getByLabelText ជំរុញឱ្យ Developer សរសេរ HTML ដែលមាន A11y។'
        }
      }
    ]
  },

  {
    id: 'test-4-3',
    slug: 'getby-vs-queryby-vs-findby',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: {
      en: 'Query Variants: getBy vs queryBy vs findBy',
      km: 'ភាពខុសគ្នានៃ Query Variants៖ getBy vs queryBy vs findBy'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Testing Library provides three query variants: `getBy` (synchronous, throws error if element is NOT found immediately), `queryBy` (synchronous, returns `null` if NOT found—ideal for asserting element absence), and `findBy` (async, returns a Promise that waits up to 1000ms for element to appear).',
      km: 'Testing Library មាន Query Variants ចំនួន ៣៖ `getBy` (Synchronous, បោះ Error ភ្លាមបើស្វែងរក Element មិនឃើញ - សម្រាប់ Assert ថាមាន), `queryBy` (Synchronous, Return `null` បើស្វែងរកមិនឃើញ - សម្រាប់ Assert ថា Element មិនមានក្នុង DOM), និង `findBy` (Async, Return Promise ដែលរង់ចាំរហូតដល់ ១០០០ms ឱ្យ Element បង្ហាញ - សម្រាប់ Async Operations)។'
    },
    tutorial: {
      en: `1. Asserting Presence (getBy):
   expect(screen.getByRole('button')).toBeInTheDocument();

2. Asserting Absence (queryBy):
   // getBy would throw error and fail test if element is missing!
   expect(screen.queryByText(/error message/i)).toBeNull();
   expect(screen.queryByText(/error message/i)).not.toBeInTheDocument();

3. Asserting Async Appearance (findBy):
   const successMsg = await screen.findByText(/profile updated/i);
   expect(successMsg).toBeInTheDocument();`,
      km: `១. ផ្ទៀងផ្ទាត់ថាមាន Element (getBy)៖
   expect(screen.getByRole('button')).toBeInTheDocument();

២. ផ្ទៀងផ្ទាត់ថាគ្មាន Element ក្នុង DOM (queryBy)៖
   // បើប្រើ getBy វាបោះ Error ធ្វើឱ្យ Test Fail ភ្លាមបើគ្មាន Element!
   expect(screen.queryByText(/error message/i)).toBeNull();
   expect(screen.queryByText(/error message/i)).not.toBeInTheDocument();

៣. ផ្ទៀងផ្ទាត់ Async Element ដែលបង្ហាញតាមក្រោយ (findBy)៖
   const successMsg = await screen.findByText(/profile updated/i);
   expect(successMsg).toBeInTheDocument();`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; }
    .pass { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Query Variants Cheat Table & Output</h3>
  <div class="term">
    <div><strong>getBy:</strong> Sync • Found = Element • Not Found = ❌ Throw Error</div>
    <div><strong>queryBy:</strong> Sync • Found = Element • Not Found = 🟢 null</div>
    <div><strong>findBy:</strong> Async • Found = Promise(Element) • Timeout = ❌ Rejects</div>
    <br/>
    <div><span class="pass">PASS</span> src/components/Notification.test.jsx</div>
    <div>  ✓ asserts element is absent initially with queryBy (2 ms)</div>
    <div>  ✓ awaits notification banner appearance with findBy (120 ms)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Testing Modal Close Animations & Absence',
        km: 'ការតេស្តបិទ Modal និងផ្ទៀងផ្ទាត់ថាវាលែងមានក្នុង DOM'
      },
      description: {
        en: 'When clicking a close button, use `queryByRole("dialog")` to assert that the modal overlay was completely unmounted from the DOM.',
        km: 'ពេលចុច Button បិទ Modal ត្រូវប្រើ `queryByRole("dialog")` ដើម្បីផ្ទៀងផ្ទាត់ថា Modal Overlay ត្រូវ បាន Unmount ដកចេញពី DOM ពិតប្រាកដ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which query variant MUST you use if you want to verify an error modal is NOT currently rendered on screen?',
        km: 'តើ Query variant មួយណាដែលអ្នកត្រូវតែប្រើដើម្បីផ្ទៀងផ្ទាត់ថា Error modal មិនបាន Render លើអេក្រង់?'
      },
      solution: 'Use `queryBy` (e.g. `expect(screen.queryByRole("dialog")).not.toBeInTheDocument()`). Using `getBy` would throw an error and crash the test.'
    },
    quizQuestions: [
      {
        id: 'q-4-3-1',
        question: {
          en: 'What happens when `getByText("Hello")` fails to find a matching element in the DOM?',
          km: 'តើមានអ្វីកើតឡើងនៅពេល `getByText("Hello")` ស្វែងរក Element មិនឃើញក្នុង DOM?'
        },
        options: [
          { id: '1', text: { en: 'It throws an immediate error and causes the test to fail', km: 'វាបោះ Error ភ្លាមៗ និងធ្វើឱ្យ Test Fail' }, isCorrect: true },
          { id: '2', text: { en: 'It returns null silently', km: 'វា Return null ស្ងាត់ៗ' }, isCorrect: false },
          { id: '3', text: { en: 'It waits 5 seconds for element to appear', km: 'វារង់ចាំ ៥ វិនាទី' }, isCorrect: false }
        ],
        explanation: {
          en: 'getBy throws an exception when elements are missing. Use queryBy if you expect elements to be absent.',
          km: 'getBy បោះ Error ភ្លាមពេលរកមិនឃើញ។ ប្រើ queryBy បើចង់ផ្ទៀងផ្ទាត់ថាគ្មាន Element។'
        }
      }
    ]
  },

  // -------------------------------------------------------------
  // MODULE 5 — Testing Rendered Components
  // -------------------------------------------------------------
  {
    id: 'test-5-1',
    slug: 'rendering-components-with-render',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: {
      en: 'Rendering Components with render() & DOM Assertions',
      km: 'ការ Render Component ជាមួយ render() និងការសរសេរ DOM Assertions'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The `render()` function from `@testing-library/react` mounts JSX into a virtual DOM container. You can then use `screen` and `@testing-library/jest-dom` custom matchers like `toBeInTheDocument()`, `toHaveTextContent()`, and `toBeDisabled()` to assert on component markup.',
      km: 'Function `render()` ដែលបានមកពី `@testing-library/react` Mount JSX ចូលទៅក្នុង Virtual DOM Container បណ្តោះអាសន្ន។ បន្ទាប់មកយើងអាចប្រើប្រាស់ `screen` និង Custom matchers ពី `@testing-library/jest-dom` ដូចជា `toBeInTheDocument()`, `toHaveTextContent()`, និង `toBeDisabled()` ដើម្បីផ្ទៀងផ្ទាត់លើ UI។'
    },
    tutorial: {
      en: `1. Import and render component:
   import { render, screen } from '@testing-library/react';
   import UserCard from './UserCard';

   test('renders user name and active badge', () => {
     render(<UserCard name="Bopha" isActive={true} />);

     expect(screen.getByRole('heading', { name: 'Bopha' })).toBeInTheDocument();
     expect(screen.getByText(/active/i)).toHaveClass('bg-green-500');
   });`,
      km: `១. Import និង Render Component៖
   import { render, screen } from '@testing-library/react';
   import UserCard from './UserCard';

   test('renders user name and active badge', () => {
     render(<UserCard name="Bopha" isActive={true} />);

     expect(screen.getByRole('heading', { name: 'Bopha' })).toBeInTheDocument();
     expect(screen.getByText(/active/i)).toHaveClass('bg-green-500');
   });`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #22c55e; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; }
    .pass { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Jest Terminal Output — Component Render Assertion</h3>
  <div class="term">
    <div><span class="pass">PASS</span> src/components/UserCard.test.jsx</div>
    <div>  UserCard Component</div>
    <div>    ✓ renders user name and active badge correctly (18 ms)</div>
    <div>    ✓ applies disabled styling when user is offline (8 ms)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Testing Props Changes in Reusable UI Components',
        km: 'ការតេស្តការផ្លាស់ប្តូរ Props លើ Component ដែលប្រើឡើងវិញ'
      },
      description: {
        en: 'Verifying that passing `variant="danger"` to a `<Button />` renders the expected text and accessibility attributes guarantees design system compliance.',
        km: 'ការផ្ទៀងផ្ទាត់ថាការបញ្ជូន `variant="danger"` ទៅកាន់ `<Button />` បង្ហាញ Text និង A11y ត្រឹមត្រូវ ជួយរក្សាស្តង់ដារ Design System។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which custom jest-dom matcher checks if a form button element contains disabled attribute?',
        km: 'តើ Custom jest-dom matcher មួយណាដែលប្រើសម្រាប់ពិនិត្យមើលថាតើ Form button មាន Attribute disabled?'
      },
      solution: 'expect(buttonElement).toBeDisabled();'
    },
    quizQuestions: [
      {
        id: 'q-5-1-1',
        question: {
          en: 'Where does `screen.getByRole()` look for elements after `render(<App />)` is executed?',
          km: 'តើ `screen.getByRole()` ស្វែងរក Element នៅកន្លែងណា បន្ទាប់ពីរត់ `render(<App />)`?'
        },
        options: [
          { id: '1', text: { en: 'In the container DOM rendered by React Testing Library', km: 'ក្នុង DOM Container ដែលបង្កើតដោយ React Testing Library' }, isCorrect: true },
          { id: '2', text: { en: 'On a live production server', km: 'លើ Live production server' }, isCorrect: false }
        ],
        explanation: {
          en: 'render() mounts the component into jsdom, making it queryable via screen.',
          km: 'render() បញ្ចូល Component ទៅក្នុង jsdom ដែលធ្វើឱ្យយើងអាច Query តាមរយៈ screen។'
        }
      }
    ]
  },

  {
    id: 'test-5-2',
    slug: 'simulating-user-events-userevent',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: {
      en: 'Simulating User Interactions with userEvent (click, type, select)',
      km: 'ការធ្វើសិប្បនិម្មិតការចុច និងវាយបញ្ចូលជាមួយ userEvent (click, type, select)'
    },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: 'While `fireEvent` triggers low-level DOM events artificially, `@testing-library/user-event` simulates full realistic browser interactions—including hover states, focus management, keypress sequences, and text selection.',
      km: 'ខណៈពេលដែល `fireEvent` បាញ់ Event កម្រិតទាប, `@testing-library/user-event` បង្កើតការប្រាស្រ័យទាក់ទងបែបធម្មជាតិពិតៗរបស់អ្នកប្រើប្រាស់ — រាប់បញ្ចូលទាំង Hover, Focus, ការវាយបញ្ចូលអក្សរតាមលំដាប់ Key, និងការជ្រើសរើស Text។'
    },
    tutorial: {
      en: `1. Setup userEvent and test counter increment:
   import { render, screen } from '@testing-library/react';
   import userEvent from '@testing-library/user-event';
   import Counter from './Counter';

   test('increments counter on button click', async () => {
     const user = userEvent.setup();
     render(<Counter />);

     const incrementBtn = screen.getByRole('button', { name: /\+/i });
     const countBadge = screen.getByTestId('count-value');

     expect(countBadge).toHaveTextContent('0');

     await user.click(incrementBtn);
     expect(countBadge).toHaveTextContent('1');
   });`,
      km: `១. កំណត់ userEvent និងតេស្តការចុចដំឡើងលេខ៖
   import { render, screen } from '@testing-library/react';
   import userEvent from '@testing-library/user-event';
   import Counter from './Counter';

   test('increments counter on button click', async () => {
     const user = userEvent.setup();
     render(<Counter />);

     const incrementBtn = screen.getByRole('button', { name: /\+/i });
     const countBadge = screen.getByTestId('count-value');

     expect(countBadge).toHaveTextContent('0');

     await user.click(incrementBtn);
     expect(countBadge).toHaveTextContent('1');
   });`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #22c55e; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; }
    .pass { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Jest Terminal Output — userEvent Interaction Test</h3>
  <div class="term">
    <div><span class="pass">PASS</span> src/components/Counter.test.jsx</div>
    <div>  Counter Component</div>
    <div>    ✓ increments counter on button click (24 ms)</div>
    <div>    ✓ types text into input field and submits form (32 ms)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Testing Interactive Todo List Addition',
        km: 'ការតេស្តការបញ្ចូលធាតុថ្មីក្នុង Todo List'
      },
      description: {
        en: 'Using `await user.type(input, "Buy Milk")` followed by `await user.click(addBtn)` simulates a real user adding tasks to their list.',
        km: 'ការប្រើប្រាស់ `await user.type(input, "Buy Milk")` និង `await user.click(addBtn)` ធ្វើតេស្តសិប្បនិម្មិតការបន្ថែម Todo Item ដូចអ្នកប្រើប្រាស់ពិតប្រាកដ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why must userEvent methods like `user.click()` or `user.type()` be prepended with `await`?',
        km: 'ហេតុអ្វីបានជា userEvent methods ដូចជា `user.click()` ឬ `user.type()` ត្រូវតែមាន `await` នៅខាងមុខ?'
      },
      solution: 'Because userEvent v14 methods return Promises that handle asynchronous event propagation, focus changes, and micro-delays between keystrokes.'
    },
    quizQuestions: [
      {
        id: 'q-5-2-1',
        question: {
          en: 'Why is `userEvent` preferred over `fireEvent` for user interaction testing?',
          km: 'ហេតុអ្វីបានជាគេនិយមប្រើ `userEvent` ជាង `fireEvent` សម្រាប់តេស្តការប្រាស្រ័យទាក់ទងរបស់អ្នកប្រើប្រាស់?'
        },
        options: [
          { id: '1', text: { en: 'userEvent simulates realistic full interaction sequences like focus and keypress events', km: 'userEvent បង្កើត Event ពេញលេញដូចមនុស្សចុចពិតប្រាកដ មានទាំង focus, keypress' }, isCorrect: true },
          { id: '2', text: { en: 'fireEvent is deprecated in React 18', km: 'fireEvent ត្រូវគេលុបចោល' }, isCorrect: false }
        ],
        explanation: {
          en: 'userEvent triggers all underlying browser events associated with an action.',
          km: 'userEvent បាញ់រាល់ Browser events ដែលទាក់ទងនឹងសកម្មភាពនោះ។'
        }
      }
    ]
  },

  {
    id: 'test-5-3',
    slug: 'testing-async-ui-flows-findby-and-waitfor',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: {
      en: 'Testing Async UI Flows with findBy Queries & waitFor',
      km: 'ការតេស្ត Async UI Flows ជាមួយ findBy Queries និង waitFor'
    },
    durationMinutes: 25,
    difficulty: 'Advanced',
    explanation: {
      en: 'Components fetching data asynchronously render loading indicators first before populating items. Use `findByRole` or `findByText` to await elements entering the DOM, or `waitFor()` to re-run assertions until they pass.',
      km: 'Component ដែលទាញយក Data តាម Async តែងតែបង្ហាញ Loading indicator ជាមុន មុនពេលបង្ហាញ Data ពិត។ យើងត្រូវប្រើ `findByRole` ឬ `findByText` ដើម្បីរង់ចាំ Element លេចឡើងក្នុង DOM ឬប្រើ `waitFor()` ដើម្បីរត់ Assertion ឡើងវិញរហូតដល់វាដើរដោយជោគជ័យ។'
    },
    tutorial: {
      en: `1. Testing Async Data Fetching Component:
   import { render, screen, waitFor } from '@testing-library/react';
   import UserList from './UserList';

   test('displays loading spinner then user list', async () => {
     render(<UserList />);

     // Initial sync check for loading spinner
     expect(screen.getByText(/loading/i)).toBeInTheDocument();

     // Async wait for user item to appear
     const userItem = await screen.findByText('Dara Sok');
     expect(userItem).toBeInTheDocument();

     // Assert loading indicator is gone
     expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
   });`,
      km: `១. ការតេស្ត Component ដែលទាញយក Data Async៖
   import { render, screen, waitFor } from '@testing-library/react';
   import UserList from './UserList';

   test('displays loading spinner then user list', async () => {
     render(<UserList />);

     // ពិនិត្យមើល Sync ថាមាន Loading spinner ជាមុន
     expect(screen.getByText(/loading/i)).toBeInTheDocument();

     // Async រង់ចាំរហូតដល់ User item បង្ហាញ
     const userItem = await screen.findByText('Dara Sok');
     expect(userItem).toBeInTheDocument();

     // ផ្ទៀងផ្ទាត់ថា Loading indicator បាត់ពី DOM
     expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
   });`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #22c55e; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; }
    .pass { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Jest Async Test Suite Output</h3>
  <div class="term">
    <div><span class="pass">PASS</span> src/components/UserList.test.jsx</div>
    <div>  UserList Async Component</div>
    <div>    ✓ displays loading spinner then user list (142 ms)</div>
    <div>    ✓ shows error alert when API fetch rejects (88 ms)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Testing Search Auto-Complete Debounce',
        km: 'ការតេស្តប្រព័ន្ធ Search Auto-Complete'
      },
      description: {
        en: 'Using `await screen.findByText("Result 1")` seamlessly handles API response delays without resorting to arbitrary `setTimeout` sleeps.',
        km: 'ការប្រើប្រាស់ `await screen.findByText("Result 1")` ជួយរង់ចាំ API response ដោយមិនបាច់ប្រើ `setTimeout` នាំឱ្យរអាក់រអួលឡើយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why should you NEVER use arbitrary `setTimeout()` or `sleep()` in automated UI tests?',
        km: 'ហេតុអ្វីបានជាអ្នកមិនគួរប្រើ `setTimeout()` ឬ `sleep()` កំណត់ពេលថេរក្នុង Automated UI tests?'
      },
      solution: 'Because fixed sleeps make test suites slow and flaky. Use `findBy` or `waitFor` which automatically retry assertions as soon as condition passes.'
    },
    quizQuestions: [
      {
        id: 'q-5-3-1',
        question: {
          en: 'What is the default timeout for `findBy` queries in Testing Library before rejecting?',
          km: 'តើអ្វីជាប្រវែងកំណត់ពេល default របស់ `findBy` queries ក្នុង Testing Library មុនពេល Reject?'
        },
        options: [
          { id: '1', text: { en: '1000 ms (1 second)', km: '១០០០ ms (១ វិនាទី)' }, isCorrect: true },
          { id: '2', text: { en: '5000 ms', km: '៥០០០ ms' }, isCorrect: false }
        ],
        explanation: {
          en: 'findBy retries queries periodically for up to 1000ms by default.',
          km: 'findBy រត់តេស្តឡើងវិញជាសមរម្យក្នុងរយៈពេល ១០០០ms ជាលំនាំដើម។'
        }
      }
    ]
  },

  // -------------------------------------------------------------
  // MODULE 6 — Running & Reading Test Results
  // -------------------------------------------------------------
  {
    id: 'test-6-1',
    slug: 'reading-jest-terminal-runs-and-diffs',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: {
      en: 'Reading a Full Jest Terminal Run & Assertion Failure Diffs',
      km: 'របៀបអានលទ្ធផល Terminal របស់ Jest និងការមើល Assertion Failure Diffs'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Understanding Jest CLI output helps you debug failures fast. Jest prints color-coded PASS/FAIL badges, suite summaries, execution time, and detailed visual diff diagrams highlighting expected vs received values.',
      km: 'ការយល់ដឹងពី Output CLI របស់ Jest ជួយឱ្យអ្នកដោះស្រាយបញ្ហា Fail បានរហ័ស។ Jest បង្ហាញ Badge PASS/FAIL មានពណ៌ច្បាស់ៗ, សេចក្តីសង្ខេប Suite, រយៈពេលរត់, និងបន្ទាត់ Diff ដែលបង្ហាញការប្រៀបធៀបរវាង Expected vs Received values។'
    },
    tutorial: {
      en: `1. Key parts of Jest terminal report:
   - PASS / FAIL badge
   - File path and suite name
   - Individual test results with checkmark (✓) or cross (✕)
   - Colorized diff diagram (- Expected, + Received)
   - Code snippet indicating exact line number of failure
   - Summary count: Test Suites, Tests, Snapshots, Time`,
      km: `១. ផ្នែកសំខាន់ៗនៃ Jest terminal report៖
   - Badge ពណ៌ PASS / FAIL
   - ផ្លូវប្រព័ន្ធឯកសារ File path និង ឈ្មោះ Suite
   - លទ្ធផលតេស្តនីមួយៗ មានសញ្ញាគ្រីស (✓) ឬ សញ្ញាខ្វែង (✕)
   - បន្ទាត់ប្រៀបធៀប Diff (- Expected, + Received)
   - កូដ snippet ដែលបង្ហាញចំហៀងបន្ទាត់កូដដែល Fail
   - សេចក្តីសង្ខេប៖ Test Suites, Tests, Time`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #ef4444; border-radius: 12px; padding: 16px; font-family: monospace; font-size: 12px; }
    .fail { color: #f87171; font-weight: bold; }
    .diff-rem { color: #f87171; background: #450a0a; }
    .diff-add { color: #4ade80; background: #052e16; }
  </style>
</head>
<body>
  <h3>Detailed Assertion Failure Diff Output</h3>
  <div class="term">
    <div><span class="fail">FAIL</span> src/components/Badge.test.jsx</div>
    <div>  ● Badge Component › displays active count correctly</div>
    <br/>
    <div>    expect(<span class="diff-rem">received</span>).toBe(<span class="diff-add">expected</span>)</div>
    <br/>
    <div>    - Expected: <span class="diff-add">"Status: Active"</span></div>
    <div>    + Received: <span class="diff-rem">"Status: Pending"</span></div>
    <br/>
    <div>      18 | test('badge text', () => {</div>
    <div>    > 19 |   expect(screen.getByTestId('badge')).toHaveTextContent('Status: Active');</div>
    <div>         |                                       ^</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Debugging Typos from Jest Diffs',
        km: 'ការមើលឃើញ Typo កូដភ្លាមៗតាមរយៈ Jest Diff'
      },
      description: {
        en: 'When a test expected `"Submit Order"` but received `"Submit order"`, the diff highlights the lowercase "o" instantly.',
        km: 'ពេល Test រំពឹងទុកអក្សរ `"Submit Order"` ប៉ុន្តែ Received អក្សរតូច `"Submit order"` បន្ទាត់ Diff បង្ហាញអក្សរខុសគ្នានោះភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'In Jest diff output, what do `- Expected` and `+ Received` represent?',
        km: 'ក្នុង Jest diff output តើ `- Expected` និង `+ Received` តំណាងឱ្យអ្វី?'
      },
      solution: '`- Expected` represents the value defined inside your assertion matcher, while `+ Received` represents the actual value produced by your code.'
    },
    quizQuestions: [
      {
        id: 'q-6-1-1',
        question: {
          en: 'What color does Jest use in terminal output to highlight passing test suites?',
          km: 'តើ Jest ប្រើប្រាស់ពណ៌អ្វីក្នុង Terminal ដើម្បីបង្ហាញ Test Suite ដែលបានរត់ជោគជ័យ (Pass)?'
        },
        options: [
          { id: '1', text: { en: 'Green (PASS)', km: 'ពណ៌បៃតង (PASS)' }, isCorrect: true },
          { id: '2', text: { en: 'Red (FAIL)', km: 'ពណ៌ក្រហម (FAIL)' }, isCorrect: false }
        ],
        explanation: {
          en: 'Jest highlights successful suites with a green PASS badge.',
          km: 'Jest បង្ហាញ Badge ពណ៌បៃតង PASS សម្រាប់ Test ដែលដើរជោគជ័យ។'
        }
      }
    ]
  },

  {
    id: 'test-6-2',
    slug: 'code-coverage-basics',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: {
      en: 'Code Coverage Essentials: Statements, Branches, Functions & Lines',
      km: 'មូលដ្ឋានគ្រឹះនៃ Code Coverage៖ Statements, Branches, Functions & Lines'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Running `jest --coverage` generates a detailed report showing what percentage of your source code was executed during tests. Coverage measures four metrics: Statements, Branches (if/else conditionals), Functions, and Lines.',
      km: 'ការរត់ `jest --coverage` បង្កើតរបាយការណ៍លម្អិតបង្ហាញពីភាគរយនៃកូដដែលត្រូវបានប្រឡងតេស្ត។ Coverage វាស់វែងលើ ៤ ផ្នែក៖ Statements, Branches (លក្ខខណ្ឌ if/else), Functions, និង Lines។'
    },
    tutorial: {
      en: `1. Run Coverage in Terminal:
   npx jest --coverage

2. Coverage Report Metrics:
   - % Stmts: Percentage of code statements executed.
   - % Branch: Percentage of conditional branches (if/else/switch) tested.
   - % Funcs: Percentage of declared functions called.
   - % Lines: Percentage of executable code lines covered.

3. Note: 100% code coverage does NOT mean 100% bug-free software! Quality of assertions matters most.`,
      km: `១. រត់ Coverage ក្នុង Terminal៖
   npx jest --coverage

២. សូចនាករក្នុង Coverage Report៖
   - % Stmts៖ ភាគរយនៃ Code statements ដែលបានរត់
   - % Branch៖ ភាគរយនៃលក្ខខណ្ឌ (if/else/switch) ដែលបានតេស្ត
   - % Funcs៖ ភាគរយនៃ Functions ដែលបានហៅ
   - % Lines៖ ភាគរយនៃ បន្ទាត់កូដ ដែលបានគ្របដណ្តប់

៣. ចំណាំ៖ ភាគរយ 100% Code Coverage មិនមែនមានន័យថា App គ្មាន Bug 100% ឡើយ! គុណភាពនៃ Assertions គឺជាកត្តាសំខាន់បំផុត។`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 11px; line-height: 1.5; }
    .high { color: #4ade80; }
    .mid { color: #fbbf24; }
  </style>
</head>
<body>
  <h3>Jest Coverage Report Table Output</h3>
  <div class="term">
    <div>--------------------|---------|----------|---------|---------|-------------------</div>
    <div>File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s </div>
    <div>--------------------|---------|----------|---------|---------|-------------------</div>
    <div><span class="high">All files            |   92.59 |    85.71 |   100.0 |   92.31 |                   </span></div>
    <div><span class="high"> utils/format.js     |   100.0 |    100.0 |   100.0 |   100.0 |                   </span></div>
    <div><span class="mid"> utils/calculator.js |   85.71 |    71.43 |   100.0 |   84.62 | 24-26             </span></div>
    <div>--------------------|---------|----------|---------|---------|-------------------</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Enforcing Minimum 80% Coverage Thresholds in CI',
        km: 'ការកំណត់ Threshold Coverage អប្បបរមា ៨០% ក្នុង CI'
      },
      description: {
        en: 'Jest can fail builds if coverage drops below set limits using `coverageThreshold` configuration in `jest.config.js`.',
        km: 'Jest អាច Block CI Build ប្រសិនបើ Coverage ធ្លាក់ចុះក្រោម ៨០% តាមរយៈការកំណត់ `coverageThreshold` ក្នុង `jest.config.js`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why might a file with 100% code coverage still contain critical bugs?',
        km: 'ហេតុអ្វីបានជាឯកសារដែលមាន Code coverage 100% នៅតែអាចមាន Bug ធ្ងន់ធ្ងរ?'
      },
      solution: 'Because coverage only tracks whether lines were executed—not whether the test assertions were meaningful, tested edge cases, or checked correct business logic.'
    },
    quizQuestions: [
      {
        id: 'q-6-2-1',
        question: {
          en: 'Which CLI flag generates a code coverage report when running Jest?',
          km: 'តើ CLI flag មួយណាដែលប្រើសម្រាប់បង្កើត Code coverage report ពេលរត់ Jest?'
        },
        options: [
          { id: '1', text: { en: '--coverage', km: '--coverage' }, isCorrect: true },
          { id: '2', text: { en: '--report-all', km: '--report-all' }, isCorrect: false }
        ],
        explanation: {
          en: 'jest --coverage collects and formats statement, branch, function, and line coverage.',
          km: 'jest --coverage ប្រមូលទិន្នន័យ Coverage លើ Statements, Branches, Functions, និង Lines។'
        }
      }
    ]
  },

  {
    id: 'test-6-3',
    slug: 'common-testing-mistakes-and-anti-patterns',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: {
      en: 'Common Testing Pitfalls: Implementation Details, Missing Awaits & Broad Snapshots',
      km: 'កំហុសឆ្គងទូទៅក្នុងការសរសេរ Test៖ Implementation Details, ការភ្លេច Await, និង Oversized Snapshots'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Avoid common testing pitfalls: 1) Testing CSS class names instead of user accessible roles, 2) Forgetting `await` before asynchronous userEvent or findBy queries, 3) Using `toBe()` instead of `toEqual()` for objects, and 4) Creating massive snapshot tests that fail on irrelevant changes.',
      km: 'ចៀសវាងកំហុសឆ្គងទូទៅក្នុង Testing៖ ១) ការតេស្តលើ CSS class names ជំនួសឱ្យ Accessible roles, ២) ការភ្លេចដាក់ `await` នៅខាងមុខ userEvent ឬ findBy queries, ៣) ការប្រើ `toBe()` លើ Object ជំនួសឱ្យ `toEqual()`, និង ៤) ការសរសេរ Snapshot tests ធំៗដែលទាមទារ Update គ្រប់ពេលប្រែប្រួលកូដបន្តិចបន្តួច។'
    },
    tutorial: {
      en: `1. Pitfall 1 — Missing await on userEvent:
   ❌ Bad: userEvent.click(button); // Returns Promise, test finishes before click!
   ✅ Good: await userEvent.click(button);

2. Pitfall 2 — Testing implementation details:
   ❌ Bad: expect(container.querySelector('.btn-primary')).not.toBeNull();
   ✅ Good: expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();`,
      km: `១. កំហុសទី ១ — ភ្លេច await លើ userEvent៖
   ❌ មិនល្អ៖ userEvent.click(button); // Return Promise ប៉ុន្តែ Test រត់ចប់មុនពេលចុច!
   ✅ ល្អ៖ await userEvent.click(button);

២. កំហុសទី ២ — តេស្តលើ Implementation details៖
   ❌ មិនល្អ៖ expect(container.querySelector('.btn-primary')).not.toBeNull();
   ✅ ល្អ៖ expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #ef4444; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; }
    .warn { color: #fbbf24; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Common Testing Warning Output</h3>
  <div class="term">
    <div class="warn">⚠️ Warning: An update to Counter inside a test was not wrapped in act(...).</div>
    <br/>
    <div>This warning occurs when you trigger state changes without <code>await userEvent.click()</code> or <code>findBy</code> queries!</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Fixing Flaky Async Tests in CI',
        km: 'ការដោះស្រាយ Flaky Async Tests ក្នុង CI'
      },
      description: {
        en: 'Fixing missing `await` keywords on `findBy` queries eliminates random test failures on slower CI server instances.',
        km: 'ការបន្ថែម `await` លើ `findBy` queries បំបាត់ចោលបញ្ហា Test រត់ Fail ដោយចៃដន្យនៅលើ Cloud CI Servers។'
      }
    },
    practiceExercise: {
      question: {
        en: 'How do you fix the warning "An update to Component inside a test was not wrapped in act(...)"?',
        km: 'តើធ្វើដូចម្តេចដើម្បីបាត់ Warning "An update to Component inside a test was not wrapped in act(...)"?'
      },
      solution: 'Ensure all asynchronous interactions use proper `await userEvent` calls or `await screen.findBy*` queries so React state updates flush completely before assertions run.'
    },
    quizQuestions: [
      {
        id: 'q-6-3-1',
        question: {
          en: 'What happens if you forget `await` before `screen.findByText("Done")` in a test?',
          km: 'តើមានអ្វីកើតឡើងប្រសិនបើអ្នកភ្លេចដាក់ `await` នៅខាងមុខ `screen.findByText("Done")`?'
        },
        options: [
          { id: '1', text: { en: 'The assertion checks a Promise object instead of waiting for the element, causing unexpected test behavior', km: 'Assertion ពិនិត្យលើ Promise object ជំនួសឱ្យការរង់ចាំ Element ធ្វើឱ្យ Test មានបញ្ហា' }, isCorrect: true },
          { id: '2', text: { en: 'Jest automatically inserts await for you', km: 'Jest បន្ថែម await ដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
        ],
        explanation: {
          en: 'findBy functions return Promises. Omitting await means the test proceeds without waiting.',
          km: 'findBy functions ផ្តល់មកវិញនូវ Promise។ ការភ្លេច await ធ្វើឱ្យ Test បន្តទៅមុខដោយមិនបានរង់ចាំ។'
        }
      }
    ]
  },

  // -------------------------------------------------------------
  // CAPSTONE MODULE — Add a Test Suite to an Untested Component
  // -------------------------------------------------------------
  {
    id: 'test-capstone-lesson',
    slug: 'capstone-task-manager-test-suite',
    moduleNumber: 7,
    lessonNumberInModule: 1,
    title: {
      en: 'Capstone Project: Complete Test Suite for Task Manager Component',
      km: 'គម្រោង Capstone៖ ការសរសេរ Test Suite ពេញលេញសម្រាប់ Task Manager Component'
    },
    durationMinutes: 40,
    difficulty: 'Advanced',
    explanation: {
      en: 'In this capstone project, you will write a comprehensive test suite for an untested Task Manager component. You will write unit tests for pure helper functions, component render tests using Testing Library queries, user interaction tests with userEvent (add task, toggle complete, delete task), async mock tests, and check final test coverage.',
      km: 'ក្នុងគម្រោង Capstone នេះ អ្នកនឹងសរសេរ Test Suite ពេញលេញសម្រាប់ Task Manager Component។ អ្នកនឹងសរសេរ Unit tests លើ Helper functions, Render tests តាមរយៈ Testing Library queries, User interaction tests ជាមួយ userEvent (បន្ថែម Task, ប្តូរ trạng thái, លុប Task), និង Async mock tests ព្រមទាំងពិនិត្យមើល Final code coverage។'
    },
    tutorial: {
      en: `1. Component Specifications to Test:
   - Pure logic: calculateRemainingTasks(tasks) returns number of active items.
   - Initial Render: Renders title "Task Manager" and input field.
   - User Add Task: Typing task title and clicking "Add Task" appends task item to DOM.
   - Toggle Complete: Clicking checkbox toggles strike-through class.
   - Delete Task: Clicking delete icon removes task item from list.

2. Run tests with coverage:
   npm test -- --coverage`,
      km: `១. លក្ខខណ្ឌបច្ចេកទេស Component ដែលត្រូវតេស្ត៖
   - Pure logic: calculateRemainingTasks(tasks) ផ្តល់ចំនួន Task ដែលមិនទាន់ចប់។
   - Initial Render: Render ចំណងជើង "Task Manager" និង Input field។
   - Add Task: វាយបញ្ចូលចំណងជើង និងចុច "Add Task" បន្ថែមធាតុថ្មីក្នុង DOM។
   - Toggle Complete: ចុចលើ Checkbox ប្តូរផ្លាស់ប្តូរទ្រង់ទ្រាយ Task។
   - Delete Task: ចុចលើ Delete Icon លុបធាតុចេញពីបញ្ជី។

២. រត់ Tests ជាមួយ Coverage៖
   npm test -- --coverage`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #22c55e; padding: 16px; border-radius: 12px; font-family: monospace; font-size: 12px; }
    .pass { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Capstone Project — Final Test Suite Passing Output</h3>
  <div class="terminal">
    <div><span class="pass">PASS</span> src/components/TaskManager.test.jsx</div>
    <div>  TaskManager Test Suite</div>
    <div>    ✓ calculateRemainingTasks() returns correct count (2 ms)</div>
    <div>    ✓ renders initial header and input form (18 ms)</div>
    <div>    ✓ adds new task item upon user submission (34 ms)</div>
    <div>    ✓ toggles task completion state when checkbox clicked (22 ms)</div>
    <div>    ✓ removes task item from list when delete button clicked (19 ms)</div>
    <br/>
    <div>Test Suites: <span class="pass">1 passed</span>, 1 total</div>
    <div>Tests:       <span class="pass">5 passed</span>, 5 total</div>
    <div>Snapshots:   0 total</div>
    <div>Time:        1.12 s</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: '100% Verified Production Task Manager',
        km: 'ប្រព័ន្ធ Task Manager ដែលមានការផ្ទៀងផ្ទាត់កូដ ១០០%'
      },
      description: {
        en: 'Having a complete test suite gives team members confidence to upgrade React versions or add features without breaking existing user tasks.',
        km: 'ការមាន Test Suite ពេញលេញផ្តល់ទំនុកចិត្តដល់សមាជិកក្រុមក្នុងការ Upgrade React Version ឬបន្ថែម Feature ថ្មីដោយមិនធ្វើឱ្យប៉ះពាល់ដល់ Task ចាស់ៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write a full Jest + Testing Library test case that renders `<TaskManager />`, types "Learn Testing" into the textbox, clicks "Add Task", and asserts that "Learn Testing" appears in the document.',
        km: 'សរសេរ Jest + Testing Library test case ពេញលេញដែល Render `<TaskManager />`, វាយ "Learn Testing" ចូលក្នុង Textbox, ចុច "Add Task", និង ផ្ទៀងផ្ទាត់ថា "Learn Testing" បង្ហាញក្នុង DOM។'
      },
      solution: `test('adds new task to list', async () => {
  const user = userEvent.setup();
  render(<TaskManager />);

  const input = screen.getByRole('textbox', { name: /new task/i });
  const addBtn = screen.getByRole('button', { name: /add task/i });

  await user.type(input, 'Learn Testing');
  await user.click(addBtn);

  expect(screen.getByText('Learn Testing')).toBeInTheDocument();
});`
    },
    quizQuestions: [
      {
        id: 'q-capstone-1',
        question: {
          en: 'What sequence of testing tools and queries is used to test a form submission in React Testing Library?',
          km: 'តើលំដាប់លំដោយ Testing tools និង Queries មួយណាដែលត្រូវប្រើសម្រាប់តេស្ត Form submission ក្នុង React Testing Library?'
        },
        options: [
          { id: '1', text: { en: 'render() -> getByRole / getByLabelText -> await user.type() -> await user.click() -> expect(...).toBeInTheDocument()', km: 'render() -> getByRole / getByLabelText -> await user.type() -> await user.click() -> expect(...).toBeInTheDocument()' }, isCorrect: true },
          { id: '2', text: { en: 'fireEvent -> queryBy -> expect(state).toBe()', km: 'fireEvent -> queryBy -> expect(state).toBe()' }, isCorrect: false }
        ],
        explanation: {
          en: 'Render the UI, query accessible inputs, simulate user typing and clicking with await userEvent, and assert DOM results.',
          km: 'Render UI, Query រក Input, ធ្វើសិប្បនិម្មិតការវាយអក្សរ និងចុចជាមួយ await userEvent និងផ្ទៀងផ្ទាត់ DOM។'
        }
      }
    ]
  }
];
