import { FrontendLesson } from '../types/frontendClass';

export const TESTING_LESSONS_PART1: FrontendLesson[] = [
  // -------------------------------------------------------------
  // MODULE 1 — Why Automated Testing Matters
  // -------------------------------------------------------------
  {
    id: 'test-1-1',
    slug: 'why-automated-testing-matters',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: {
      en: 'What Automated Testing Solves vs Manual Testing',
      km: 'អត្ថប្រយោជន៍នៃ Automated Testing ប្រៀបធៀបនឹង Manual Testing'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Manual testing involves clicking around the UI repeatedly every time code changes. Automated testing uses code to verify code—running hundreds of assertions in seconds, catching regressions instantly, and giving developers confidence to refactor.',
      km: 'Manual testing តម្រូវឲ្យយើងអង្គុយចុចល្បងលើ Web UI ម្តងហើយម្តងទៀតរាល់ពេលកែប្រែកូដ។ Automated testing គឺជាការសរសេរ Code ដើម្បីល្បង និង Verify លើ Code ផ្សេងទៀត — វាអាចរត់ការតេស្តរាប់រយក្នុងពេលត្រឹមតែប៉ុន្មានវិនាទី ប៉ុណ្ណោះ ជួយស្វែងរក Regressions (កំហុសដែលកើតឡើងលើ Feature ចាស់) ភ្លាមៗ និងផ្តល់ទំនុកចិត្តក្នុងការ Refactor កូដ។'
    },
    tutorial: {
      en: `1. Manual Testing Problems: Slow, prone to human error, easily skips edge cases, and doesn't scale as the app grows.
2. Automated Testing Solution: Repeatable, deterministic, runs in CI/CD pipelines, and acts as living documentation.
3. Example comparison:

// Manual approach: Open browser, fill form, click submit, check database, repeat 50 times.
// Automated approach: Run 'npm test' in terminal -> 50 tests pass in 1.2 seconds.`,
      km: `១. បញ្ហានៃ Manual Testing៖ យឺតយ៉ាវ, ងាយភ្លេចតេស្តលើ Edge cases ផ្សេងៗ, និងពិបាក Scalable ពេល App មានទំហំធំ។
២. ដំណោះស្រាយ Automated Testing៖ អាចរត់សារឡើងវិញបានរហ័ស (Repeatable), ផ្តល់លទ្ធផលច្បាស់លាស់ (Deterministic), រត់ក្នុង CI/CD Pipeline និងដើរតួជាឯកសារយោងកូដ (Living Documentation)។
៣. ឧទាហរណ៍៖
• Manual: បើក Browser → បំពេញ Form → ចុច Submit → ពិនិត្យមើលលទ្ធផល → ធ្វើបែបនេះ ៥០ដង។
• Automated: រត់ 'npm test' ក្នុង Terminal → ៥០ Tests ដើរចប់ដោយជោគជ័យក្នុងរយៈពេល ១.២ វិនាទី។`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; margin: 0; }
    .terminal { background: #020617; border: 1px solid #334155; border-radius: 12px; padding: 16px; font-family: monospace; font-size: 13px; line-height: 1.6; }
    .pass { color: #4ade80; font-weight: bold; }
    .badge { background: #22c55e; color: #020617; padding: 2px 8px; border-radius: 4px; font-weight: bold; }
    .suite { color: #94a3b8; }
  </style>
</head>
<body>
  <h3>Jest Terminal Test Output — Module 1.1</h3>
  <div class="terminal">
    <div><span class="badge">PASS</span> <span class="suite">src/utils/calculator.test.js</span></div>
    <div>  ✓ adds two numbers correctly (3 ms)</div>
    <div>  ✓ subtracts two numbers correctly (1 ms)</div>
    <div>  ✓ handles division by zero safely (2 ms)</div>
    <br/>
    <div style="color: #cbd5e1;">Test Suites: <span class="pass">1 passed</span>, 1 total</div>
    <div style="color: #cbd5e1;">Tests:       <span class="pass">3 passed</span>, 3 total</div>
    <div style="color: #94a3b8;">Time:        0.842 s, estimated 1 s</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Continuous Integration (CI) Quality Gate',
        km: 'ការរត់ Test ស្វ័យប្រវត្តិក្នុង CI/CD Pipeline (GitHub Actions)'
      },
      description: {
        en: 'In modern software teams, GitHub Actions runs `npm test` on every Pull Request. If a single test fails, merging is blocked automatically.',
        km: 'ក្នុងក្រុមអភិវឌ្ឍន៍ជំនាញ GitHub Actions រត់ `npm test` ដោយស្វ័យប្រវត្តិនៅលើគ្រប់ Pull Request។ ប្រសិនបើមាន Test តែមួយបរាជ័យ (Fail) ប្រព័ន្ធនឹង Block មិនឱ្យ Merge កូដឡើយ។'
      },
      code: `name: Run Frontend Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test -- --ci --all`
    },
    practiceExercise: {
      question: {
        en: 'What is a regression in software development?',
        km: 'តើពាក្យថា Regression ក្នុងវិស័យ Software Development មានន័យដូចម្តេច?'
      },
      hints: [
        { en: 'Think about old features breaking when new features are added.', km: 'គិតអំពី Feature ចាស់ដែលដើរប្រក្រតី បែរជាខូចពេលបន្ថែម Feature ថ្មី។' }
      ],
      solution: 'A regression is a bug introduced into an existing working feature after new code changes or refactoring occur. Automated tests prevent regressions by verifying old behavior continually.'
    },
    quizQuestions: [
      {
        id: 'q-1-1-1',
        question: {
          en: 'Which is a primary advantage of automated testing over manual testing?',
          km: 'តើមួយណាជាអត្ថប្រយោជន៍ចម្បងនៃ Automated Testing ប្រៀបធៀបនឹង Manual Testing?'
        },
        options: [
          { id: '1', text: { en: 'Instant feedback on regressions without manual UI clicking', km: 'ដឹងលទ្ធផល Regressions ភ្លាមៗដោយមិនបាច់អង្គុយចុច UI ដោយដៃ' }, isCorrect: true },
          { id: '2', text: { en: 'Eliminates the need to ever write code', km: 'មិនបាច់សរសេរ Code ទៀតឡើយ' }, isCorrect: false },
          { id: '3', text: { en: 'Slower execution time than clicking manually', km: 'រត់យឺតជាងការចុចដោយដៃ' }, isCorrect: false },
          { id: '4', text: { en: 'Replaces the need for a web browser entirely', km: 'ជំនួស Web browser ទាំងស្រុង' }, isCorrect: false }
        ],
        explanation: {
          en: 'Automated tests execute assertions programmatically in seconds, catching regressions instantly.',
          km: 'Automated test រត់ផ្ទៀងផ្ទាត់កូដក្នុងពេលប៉ុន្មានវិនាទី និងស្វែងរក Regressions ភ្លាមៗ។'
        }
      }
    ]
  },

  {
    id: 'test-1-2',
    slug: 'the-testing-pyramid',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: {
      en: 'The Testing Pyramid: Unit, Integration & E2E',
      km: 'រចនាសម្ព័ន្ធ Testing Pyramid៖ Unit, Integration និង End-to-End Tests'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'The Testing Pyramid organizes tests into three levels: Unit tests (fast, cheap, testing isolated functions), Integration tests (testing components working together with Jest + Testing Library), and End-to-End tests (slow, simulating real browser interactions with Playwright or Cypress).',
      km: 'Testing Pyramid បែងចែកប្រភេទ Test ជា ៣ កម្រិត៖ Unit Tests (រត់លឿន សម្រាប់តេស្ត Function តូចៗដាច់ដោយឡែក), Integration Tests (តេស្ត Component និង Module ដំណើរការជាមួយគ្នាដោយប្រើ Jest + Testing Library), និង End-to-End Tests (តេស្តលើ Real Browser ទាំងមូលជាមួយ Playwright ឬ Cypress)។'
    },
    tutorial: {
      en: `1. Unit Tests: Test small functions in isolation (e.g., formatDate(), calculateDiscount()). High volume, fast execution.
2. Integration Tests: Test how UI components render, handle events, and fetch data together. Balanced speed and confidence.
3. End-to-End (E2E) Tests: Test full user workflows across real browser instances (e.g., login -> checkout -> payment). Slowest but highest confidence.`,
      km: `១. Unit Tests៖ តេស្ត Function តូចៗដាច់ដោយឡែក (ដូចជា formatDate(), calculateDiscount())។ រត់លឿនបំផុត។
២. Integration Tests៖ តេស្តរបៀបដែល UI components បង្ហាញរូបរាង, ទទួល Interaction និងទាញយក Data ជាមួយគ្នា។
៣. End-to-End (E2E) Tests៖ តេស្ត Workflow ទាំងមូលរបស់អ្នកប្រើប្រាស់លើ Browser ពិតប្រាកដ (ដូចជា Login → ជ្រើសទំនិញ → ទូទាត់ប្រាក់)។`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .pyramid { display: flex; flex-direction: column; align-items: center; gap: 8px; max-width: 400px; margin: 0 auto; }
    .layer { border-radius: 8px; padding: 12px; text-align: center; font-weight: bold; font-size: 13px; width: 100%; box-sizing: border-box; }
    .e2e { background: #f43f5e; width: 50%; color: white; }
    .integration { background: #3b82f6; width: 75%; color: white; }
    .unit { background: #22c55e; width: 100%; color: #020617; }
  </style>
</head>
<body>
  <div class="pyramid">
    <div class="layer e2e">E2E Tests (Cypress/Playwright)<br/><small style="font-weight:normal">Slow • High Cost • High Confidence</small></div>
    <div class="layer integration">Integration Tests (Jest + Testing Library)<br/><small style="font-weight:normal">Balanced Speed & Scope</small></div>
    <div class="layer unit">Unit Tests (Jest)<br/><small style="font-weight:normal">Fastest • Cheap • Isolated Logic</small></div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Where Jest and Testing Library fit in the stack',
        km: 'ទីតាំងរបស់ Jest និង Testing Library ក្នុង Testing Pyramid'
      },
      description: {
        en: 'Jest handles Unit and Integration testing for your functions, hooks, and components, providing 80%+ of total test coverage efficiently.',
        km: 'Jest និង React Testing Library គ្របដណ្តប់លើ Unit និង Integration tests ដែលត្រូវជា ៨០%+ នៃ Test Suite ទាំងមូលក្នុង Project។'
      },
      code: `// Unit Test (Jest)
test('formatPrice formats 1500 to "$1,500.00"', () => {
  expect(formatPrice(1500)).toBe('$1,500.00');
});

// Integration Test (Jest + Testing Library)
test('clicking Add to Cart increments badge count', async () => {
  render(<CartHeader />);
  await userEvent.click(screen.getByRole('button', { name: /add to cart/i }));
  expect(screen.getByTestId('cart-count')).toHaveTextContent('1');
});`
    },
    practiceExercise: {
      question: {
        en: 'Which layer of the testing pyramid should contain the largest number of tests?',
        km: 'តើជាន់មួយណានៃ Testing Pyramid ដែលគួរតែមានចំនួន Test ច្រើនជាងគេបំផុត?'
      },
      hints: [
        { en: 'It is the base of the pyramid.', km: 'វាជាជាន់បាតក្រោមគេបង្អស់នៃ Pyramid។' }
      ],
      solution: 'Unit tests should form the base of the pyramid because they are the fastest to execute, easiest to maintain, and cheapest to run continuously.'
    },
    quizQuestions: [
      {
        id: 'q-1-2-1',
        question: {
          en: 'Where do Jest and Testing Library primarily reside in the Testing Pyramid?',
          km: 'តើ Jest និង Testing Library ស្ថិតនៅកម្រិតណាជាចម្បងក្នុង Testing Pyramid?'
        },
        options: [
          { id: '1', text: { en: 'Unit and Integration tests', km: 'Unit និង Integration tests' }, isCorrect: true },
          { id: '2', text: { en: 'Only E2E tests', km: 'តែ E2E tests ប៉ុណ្ណោះ' }, isCorrect: false },
          { id: '3', text: { en: 'Manual QA documentation only', km: 'ត្រឹមតែ Manual QA documentation' }, isCorrect: false }
        ],
        explanation: {
          en: 'Jest and Testing Library excel at fast unit tests and component integration tests.',
          km: 'Jest និង Testing Library ស័ក្តិសមបំផុតសម្រាប់រត់ Unit និង Component Integration tests។'
        }
      }
    ]
  },

  {
    id: 'test-1-3',
    slug: 'real-world-roi-ci-vs-production-bugs',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: {
      en: 'Real-World ROI: Catching Bugs in CI vs Production',
      km: 'តម្លៃ និងអត្ថប្រយោជន៍ពិតប្រាកដ៖ ការចាប់ Bug ក្នុង CI ប្រៀបធៀបនឹង Production'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Catching a bug in local development or CI costs minutes. Shipping a bug to production costs customer trust, expensive hotfixes, and potential revenue loss. Automated testing provides instant safety guarantees.',
      km: 'ការរកឃើញ Bug ខណៈពេលសរសេរកូដលើម៉ាស៊ីនផ្ទាល់ ឬលើ CI ត្រូវចំណាយពេលត្រឹមតែប៉ុន្មាននាទីដើម្បីកែប្រែ។ ប៉ុន្តែបើ Bug ជ្រោះទៅដល់ Production វាអាចធ្វើឱ្យបាត់បង់ទំនុកចិត្តពីអតិថិជន, ខាតបង់ប្រាក់ចំណូល, និងចំណាយពេល Hotfix យ៉ាងច្រើន។'
    },
    tutorial: {
      en: `1. Cost of Bug Discovery Timeline:
   - Developer Machine (Unit test fail): Cost = $0, 2 minutes to fix.
   - Pull Request CI Pipeline: Cost = $0, 10 minutes to fix before merge.
   - Production (Reported by user): Cost = High, emergency hotfix deployment, lost revenue.
2. Writing tests reduces technical debt and speeds up long-term development velocity.`,
      km: `១. ការប្រៀបធៀបចំណាយតាមដំណាក់កាលនៃការរកឃើញ Bug៖
• លើម៉ាស៊ីន Developer (Unit test fail): ចំណាយ $0, ប្រើពេល ២នាទីដើម្បីកែ។
• លើ Pull Request CI Pipeline: ចំណាយ $0, ប្រើពេល ១០នាទីដើម្បីកែមុន Merge។
• លើ Production (អ្នកប្រើប្រាស់ជួបប្រទះ): ខាតបង់ប្រាក់ចំណូល, ត្រូវ Deploy Emergency Hotfix។
២. ការសរសេរ Automated tests ជួយកាត់បន្ថយ Technical Debt និងបង្កើនល្បឿននៃការអភិវឌ្ឍន៍រយៈពេលវែង។`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .terminal { background: #020617; border: 1px solid #ef4444; border-radius: 12px; padding: 16px; font-family: monospace; font-size: 13px; }
    .fail { color: #f87171; font-weight: bold; }
    .badge { background: #ef4444; color: white; padding: 2px 8px; border-radius: 4px; font-weight: bold; }
    .diff-remove { color: #f87171; background: #450a0a; }
    .diff-add { color: #4ade80; background: #052e16; }
  </style>
</head>
<body>
  <h3>CI Failure Output — Preventing Production Outage</h3>
  <div class="terminal">
    <div><span class="badge">FAIL</span> src/utils/checkout.test.js</div>
    <div>  ✕ calculates total with 10% tax correctly (12 ms)</div>
    <br/>
    <div class="fail">  ● calculates total with 10% tax correctly</div>
    <br/>
    <div>    expect(<span class="diff-remove">received</span>).toBe(<span class="diff-add">expected</span>)</div>
    <br/>
    <div>    - Expected: <span class="diff-add">110</span></div>
    <div>    + Received: <span class="diff-remove">100</span></div>
    <br/>
    <div>      14 | test('calculates total with tax', () => {</div>
    <div>    > 15 |   expect(calculateTotal(100, 0.1)).toBe(110);</div>
    <div>         |                                    ^</div>
    <br/>
    <div style="color: #cbd5e1;">Test Suites: <span class="fail">1 failed</span>, 1 total</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Refactoring Payment Gateways Safely',
        km: 'ការ Refactor កូដប្រព័ន្ធទូទាត់ប្រាក់ដោយសុវត្ថិភាព'
      },
      description: {
        en: 'When updating payment SDKs, running a full Jest suite guarantees that tax calculations, currency symbols, and error states still function accurately.',
        km: 'ពេលត្រូវការអាប់ដេត SDK ទូទាត់ប្រាក់ ការរត់ Jest Test Suite ផ្តល់ការធានាថាការគណនាពន្ធ, រូបិយប័ណ្ណ, និង Error states នៅតែដំណើរការត្រឹមត្រូវ ១០០%។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why is catching a bug in CI significantly cheaper than finding it in production?',
        km: 'ហេតុអ្វីបានជាការរកឃើញ Bug ក្នុង CI មានតម្លៃទាបជាងការរកឃើញវានៅលើ Production ច្រើនដង?'
      },
      solution: 'Because catching a bug in CI blocks it before users ever see it, preventing customer disruption, loss of business revenue, and costly emergency patch deployments.'
    },
    quizQuestions: [
      {
        id: 'q-1-3-1',
        question: {
          en: 'What happens when a Jest test fails during a Continuous Integration (CI) build?',
          km: 'តើមានអ្វីកើតឡើងនៅពេល Jest test បរាជ័យ (Fail) ក្នុងអំឡុងពេល CI Build?'
        },
        options: [
          { id: '1', text: { en: 'The CI pipeline marks the build as failed and prevents code deployment', km: 'CI Pipeline កំណត់ថា Build បរាជ័យ និងទប់ស្កាត់ការ Deploy កូដ' }, isCorrect: true },
          { id: '2', text: { en: 'The bug is automatically fixed by Jest', km: 'Jest កែ Bug នោះដោយស្វ័យប្រវត្តិ' }, isCorrect: false },
          { id: '3', text: { en: 'The deployment proceeds anyway without warnings', km: 'ការ Deploy បន្តទៅមុខធម្មតាដោយមិនព្រមាន' }, isCorrect: false }
        ],
        explanation: {
          en: 'CI pipelines act as automated quality gates, blocking broken code from merging or deploying.',
          km: 'CI Pipelines ដើរតួជាទ្វារការពារគុណភាពស្វ័យប្រវត្តិ ដោយទប់ស្កាត់មិនឱ្យកូដដែលមាន Bug ត្រូវ Merge ឬ Deploy។'
        }
      }
    ]
  },

  // -------------------------------------------------------------
  // MODULE 2 — Jest Fundamentals
  // -------------------------------------------------------------
  {
    id: 'test-2-1',
    slug: 'jest-setup-test-it-describe-blocks',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: {
      en: 'Jest Setup & Anatomy of a Test Suite: test(), it(), and describe()',
      km: 'ការដំឡើំង Jest និងរចនាសម្ព័ន្ធ Test Suite៖ test(), it(), និង describe()'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Jest is a zero-configuration JavaScript testing framework. `describe()` blocks group related test cases together, while `test()` (or its alias `it()`) defines individual assertions.',
      km: 'Jest គឺជា JavaScript Testing Framework ដែលពេញនិយមបំផុត។ `describe()` block ប្រើសម្រាប់ប្រមូលផ្តុំ Test cases ដែលទាក់ទងគ្នាជាក្រុម ខណៈពេលដែល `test()` (ឬ alias របស់វា `it()`) ប្រើសម្រាប់កំណត់ Test case មួយៗ។'
    },
    tutorial: {
      en: `1. Install Jest:
   npm install --save-dev jest

2. Add test script to package.json:
   "scripts": { "test": "jest" }

3. Create a test file (e.g. math.test.js):
   describe('Math operations', () => {
     test('adds 1 + 2 to equal 3', () => {
       expect(1 + 2).toBe(3);
     });

     it('multiplies 3 * 3 to equal 9', () => {
       expect(3 * 3).toBe(9);
     });
   });`,
      km: `១. ដំឡើង Jest៖
   npm install --save-dev jest

២. បន្ថែម Test script ក្នុង package.json៖
   "scripts": { "test": "jest" }

៣. បង្កើតឯកសារ Test (ឧទាហរណ៍ math.test.js)៖
   describe('Math operations', () => {
     test('adds 1 + 2 to equal 3', () => {
       expect(1 + 2).toBe(3);
     });

     it('multiplies 3 * 3 to equal 9', () => {
       expect(3 * 3).toBe(9);
     });
   });`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .code { background: #1e293b; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; color: #38bdf8; }
    .term { background: #020617; border: 1px solid #334155; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; margin-top: 10px; }
    .pass { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Source Code & Test Block</h3>
  <pre class="code">
describe('String Helpers', () => {
  test('capitalizes first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});
  </pre>

  <div class="term">
    <div><span class="pass">PASS</span> src/utils/string.test.js</div>
    <div>  String Helpers</div>
    <div>    ✓ capitalizes first letter of a string (2 ms)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Naming Test Cases Professionally',
        km: 'ការដាក់ឈ្មោះ Test Cases ឱ្យមានរបៀបរៀបរយ'
      },
      description: {
        en: 'Use clear BDD-style sentence structure like `it("returns user full name when given first and last name")` so failing tests read like natural English bug reports.',
        km: 'សរសេរឈ្មោះ Test Case ឱ្យដូចជារបាយការណ៍ភាសាអង់គ្លេសធម្មតា ដូចជា `it("returns user full name when given first and last name")` ដើម្បីឱ្យងាយស្រួលយល់ពេលវា Fail។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What is the functional difference between `test()` and `it()` in Jest?',
        km: 'តើមានភាពខុសគ្នារវាង `test()` និង `it()` ក្នុង Jest ដែរឬទេ?'
      },
      solution: 'There is no functional difference. `it()` is an alias for `test()`, provided to allow developers to write tests in a behavior-driven specification style (e.g., it should do X).'
    },
    quizQuestions: [
      {
        id: 'q-2-1-1',
        question: {
          en: 'Which function block in Jest is used to group related test cases together?',
          km: 'តើ Function block មួយណាស្រួលប្រើសម្រាប់ប្រមូលផ្តុំ Test cases ដែលទាក់ទងគ្នាជាក្រុមក្នុង Jest?'
        },
        options: [
          { id: '1', text: { en: 'describe()', km: 'describe()' }, isCorrect: true },
          { id: '2', text: { en: 'group()', km: 'group()' }, isCorrect: false },
          { id: '3', text: { en: 'suite()', km: 'suite()' }, isCorrect: false }
        ],
        explanation: {
          en: 'describe(name, fn) creates a block that groups several related tests together.',
          km: 'describe(name, fn) បង្កើត Block សម្រាប់ប្រមូលផ្តុំ Test Cases ជាច្រើនចូលគ្នា។'
        }
      }
    ]
  },

  {
    id: 'test-2-2',
    slug: 'assertions-expect-matchers',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: {
      en: 'Assertions with expect(): toBe, toEqual, toContain & toThrow',
      km: 'ការប្រើប្រាស់ expect() Matchers៖ toBe, toEqual, toContain & toThrow'
    },
    durationMinutes: 25,
    difficulty: 'Beginner',
    explanation: {
      en: 'Matchers let you test values in different ways. Use `toBe()` for primitive values (strict equality `===`). Use `toEqual()` for deep object or array comparisons. Use `toContain()` for array items/substrings, and `toThrow()` for exception handling.',
      km: 'Matchers ប្រើសម្រាប់ផ្ទៀងផ្ទាត់តម្លៃផ្សេងៗគ្នា។ ប្រើ `toBe()` សម្រាប់ Primitive values (Strict equality `===`)។ ប្រើ `toEqual()` សម្រាប់ Compare Object ឬ Array តាមរចនាសម្ព័ន្ធ (Deep equality)។ ប្រើ `toContain()` សម្រាប់ពិនិត្យធាតុក្នុង Array/Substring និង `toThrow()` សម្រាប់ពិនិត្យ Error។'
    },
    tutorial: {
      en: `1. Primitive comparison (toBe):
   expect(2 + 2).toBe(4);

2. Object / Array deep comparison (toEqual):
   expect({ name: 'Sophea' }).toEqual({ name: 'Sophea' }); // toBe would fail!

3. Array / String contains (toContain):
   expect(['apple', 'banana']).toContain('apple');

4. Exception testing (toThrow):
   expect(() => parseJSON('invalid json')).toThrow();`,
      km: `១. ផ្ទៀងផ្ទាត់ Primitive value (toBe)៖
   expect(2 + 2).toBe(4);

២. ផ្ទៀងផ្ទាត់ Object / Array តាម Structure (toEqual)៖
   expect({ name: 'Sophea' }).toEqual({ name: 'Sophea' }); // បើប្រើ toBe នឹង Fail!

៣. ផ្ទៀងផ្ទាត់ធាតុក្នុង Array / String (toContain)៖
   expect(['apple', 'banana']).toContain('apple');

៤. ផ្ទៀងផ្ទាត់ការបោះ Error (toThrow)៖
   expect(() => parseJSON('invalid json')).toThrow();`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .terminal { background: #020617; border: 1px solid #ef4444; border-radius: 12px; padding: 16px; font-family: monospace; font-size: 12px; }
    .fail { color: #f87171; font-weight: bold; }
    .diff-remove { color: #f87171; background: #450a0a; }
    .diff-add { color: #4ade80; background: #052e16; }
  </style>
</head>
<body>
  <h3>Terminal Diff: toBe() vs toEqual() Failure</h3>
  <div class="terminal">
    <div class="fail">● User Profile › returns new user object</div>
    <br/>
    <div>If you use <strong>toBe()</strong> on objects with different memory references:</div>
    <br/>
    <div>expect(<span class="diff-remove">received</span>).toBe(<span class="diff-add">expected</span>) // Object.is equality</div>
    <br/>
    <div>- Expected: <span class="diff-add">{"id": 1}</span></div>
    <div>+ Received: <span class="diff-remove">{"id": 1}</span></div>
    <br/>
    <div style="color: #fbbf24;">💡 Fix: Use <code>toEqual()</code> for deep object structure matching!</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Testing API Payload Structure',
        km: 'ការតេស្តរចនាសម្ព័ន្ធ Response ពី API'
      },
      description: {
        en: 'When verifying data returned from an API parser, `toEqual()` ensures all nested key-value pairs match expected schemas.',
        km: 'ពេលតេស្តផ្ទៀងផ្ទាត់ Data ដែលបានពី API ត្រូវប្រើ `toEqual()` ដើម្បីប្រាកដថាគ្រប់ Key-Value ក្នុង Object ត្រូវគ្នាតាម Structure។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why does `expect({ a: 1 }).toBe({ a: 1 })` fail in Jest?',
        km: 'ហេតុអ្វីបានជា `expect({ a: 1 }).toBe({ a: 1 })` Fail ក្នុង Jest?'
      },
      solution: 'Because `toBe()` uses strict reference equality (`===`). Even though both objects have identical properties, they refer to different memory locations. You must use `toEqual()` for deep structure equality.'
    },
    quizQuestions: [
      {
        id: 'q-2-2-1',
        question: {
          en: 'Which matcher should you use to check that two objects have the same key-value pairs?',
          km: 'តើ Matcher មួយណាដែលអ្នកគួរប្រើដើម្បីពិនិត្យថា Object ពីរមាន Key-Value Pairs ដូចគ្នា?'
        },
        options: [
          { id: '1', text: { en: 'toEqual()', km: 'toEqual()' }, isCorrect: true },
          { id: '2', text: { en: 'toBe()', km: 'toBe()' }, isCorrect: false },
          { id: '3', text: { en: 'assertSame()', km: 'assertSame()' }, isCorrect: false }
        ],
        explanation: {
          en: 'toEqual() recursively checks every field of an object or array (deep equality).',
          km: 'toEqual() ពិនិត្យគ្រប់ Key-Value ទាំងអស់ក្នុង Object ឬ Array (Deep equality)។'
        }
      }
    ]
  },

  {
    id: 'test-2-3',
    slug: 'lifecycle-hooks-beforeeach-aftereach',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: {
      en: 'Lifecycle Hooks: beforeEach, afterEach, beforeAll & afterAll',
      km: 'ការប្រើប្រាស់ Lifecycle Hooks៖ beforeEach, afterEach, beforeAll & afterAll'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Lifecycle hooks run setup or teardown code before or after tests execute. `beforeEach` runs before every test in a describe block, ensuring a fresh initial state. `afterEach` cleans up mocks or database records.',
      km: 'Lifecycle hooks ប្រើសម្រាប់រត់ Setup ឬ Teardown កូដ មុន ឬក្រោយពេល TestCases ដើរ។ `beforeEach` រត់មុន Test នីមួយៗ ជួយរៀបចំ Initial State ថ្មីស្អាត។ `afterEach` ប្រើសម្រាប់ Clean up Mocks ឬដក Data បណ្តោះអាសន្នចេញវិញ។'
    },
    tutorial: {
      en: `1. Hook Execution Order:
   beforeAll(() => console.log('1. Runs once before any tests'));
   beforeEach(() => console.log('2. Runs before EACH test'));
   afterEach(() => console.log('3. Runs after EACH test'));
   afterAll(() => console.log('4. Runs once after ALL tests finish'));

2. Common use cases:
   - Resetting mock data or store state in beforeEach()
   - Clearing timer mocks or DOM containers in afterEach()`,
      km: `១. លំដាប់នៃការរត់ Hooks៖
   beforeAll(() => console.log('១. រត់តែម្តងគត់ មុនគេបង្អស់'));
   beforeEach(() => console.log('២. រត់មុន Test នីមួយៗ'));
   afterEach(() => console.log('៣. រត់ក្រោយ Test នីមួយៗ'));
   afterAll(() => console.log('៤. រត់តែម្តងគត់ បន្ទាប់ពីចប់ Tests ទាំងអស់'));

២. ករណីប្រើប្រាស់ទូទៅ៖
   - Reset State ឬ Data ក្នុង beforeEach()
   - Clear Mocks ឬ Timers ក្នុង afterEach()`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .terminal { background: #020617; border: 1px solid #334155; padding: 16px; border-radius: 12px; font-family: monospace; font-size: 12px; }
    .log { color: #a7f3d0; }
    .pass { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Jest Hook Execution Console Logs</h3>
  <div class="terminal">
    <div class="log">  CONSOLE.LOG</div>
    <div class="log">    beforeAll: Connecting in-memory test database</div>
    <div class="log">    beforeEach: Resetting users array to []</div>
    <div class="log">    afterEach: Cleared active timers</div>
    <div class="log">    afterAll: Closed database connection</div>
    <br/>
    <div><span class="pass">PASS</span> src/services/user.test.js</div>
    <div>  User Database Service</div>
    <div>    ✓ inserts new user successfully (4 ms)</div>
    <div>    ✓ prevents duplicate emails (2 ms)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Resetting LocalStorage between Tests',
        km: 'ការ Reset LocalStorage មុនពេលរត់ Test នីមួយៗ'
      },
      description: {
        en: 'In browser testing, calling `localStorage.clear()` inside `beforeEach()` prevents state leak from one test into the next.',
        km: 'ក្នុង UI testing ការរត់ `localStorage.clear()` ក្នុង `beforeEach()` ការពារកុំឱ្យ Data ចាស់ពីរត់ក្នុង Test មុន មកប៉ះពាល់លើ Test បន្ទាប់។'
      },
      code: `describe('Authentication Store', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('saves auth token on successful login', () => {
    saveToken('secret-123');
    expect(localStorage.getItem('token')).toBe('secret-123');
  });
});`
    },
    practiceExercise: {
      question: {
        en: 'Which hook should you use to reset a mock function state before every individual test run?',
        km: 'តើ Hook មួយណាដែលត្រូវប្រើសម្រាប់ Reset តម្លៃ Mock Function មុនពេលរត់ Test Cases នីមួយៗ?'
      },
      solution: 'Use `beforeEach()` to ensure every test starts with a completely fresh, isolated mock state.'
    },
    quizQuestions: [
      {
        id: 'q-2-3-1',
        question: {
          en: 'How many times will a `beforeEach()` callback execute if a `describe` block contains 4 tests?',
          km: 'តើ `beforeEach()` callback នឹងរត់ប៉ុន្មានដង ប្រសិនបើ `describe` block មាន ៤ Tests?'
        },
        options: [
          { id: '1', text: { en: '4 times (once before each test)', km: '៤ ដង (ម្តងមុនរត់ Test មួយៗ)' }, isCorrect: true },
          { id: '2', text: { en: '1 time total', km: '១ ដងសរុប' }, isCorrect: false },
          { id: '3', text: { en: '0 times unless errors occur', km: '០ ដង លុះត្រាតែមាន Error' }, isCorrect: false }
        ],
        explanation: {
          en: 'beforeEach runs once before every individual test in the current describe block.',
          km: 'beforeEach រត់ម្តង មុនពេលរត់ Test នីមួយៗ។'
        }
      }
    ]
  },

  // -------------------------------------------------------------
  // MODULE 3 — Testing Pure Functions & Logic
  // -------------------------------------------------------------
  {
    id: 'test-3-1',
    slug: 'unit-testing-pure-functions',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: {
      en: 'Unit Testing Pure Functions & Utilities',
      km: 'ការសរសេរ Unit Test លើ Pure Helper Functions'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Pure functions have no side effects and return the exact same output for the same input arguments. They are the easiest, most reliable units to test with Jest.',
      km: 'Pure functions គឺជា Function ដែលគ្មាន Side effects ហើយតែងតែបង្វិល Return Value ដដែលរាល់ពេលទទួល Input Argument ដូចគ្នា។ ពួកវាជាកន្លែងដែលងាយស្រួល និងមានទំនុកចិត្តបំផុតក្នុងការសរសេរ Unit Test។'
    },
    tutorial: {
      en: `1. Source File (src/utils/formatCurrency.js):
   export function formatCurrency(amount, currency = 'USD') {
     if (typeof amount !== 'number') return '$0.00';
     return new Intl.NumberFormat('en-US', {
       style: 'currency',
       currency
     }).format(amount);
   }

2. Test File (src/utils/formatCurrency.test.js):
   import { formatCurrency } from './formatCurrency';

   describe('formatCurrency()', () => {
     test('formats number to USD currency string', () => {
       expect(formatCurrency(1250.5)).toBe('$1,250.50');
     });

     test('defaults to $0.00 if invalid input is passed', () => {
       expect(formatCurrency(null)).toBe('$0.00');
     });
   });`,
      km: `១. ឯកសារ Source (src/utils/formatCurrency.js)៖
   export function formatCurrency(amount, currency = 'USD') {
     if (typeof amount !== 'number') return '$0.00';
     return new Intl.NumberFormat('en-US', {
       style: 'currency',
       currency
     }).format(amount);
   }

២. ឯកសារ Test (src/utils/formatCurrency.test.js)៖
   import { formatCurrency } from './formatCurrency';

   describe('formatCurrency()', () => {
     test('formats number to USD currency string', () => {
       expect(formatCurrency(1250.5)).toBe('$1,250.50');
     });

     test('defaults to $0.00 if invalid input is passed', () => {
       expect(formatCurrency(null)).toBe('$0.00');
     });
   });`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .terminal { background: #020617; border: 1px solid #22c55e; padding: 16px; border-radius: 12px; font-family: monospace; font-size: 13px; }
    .pass { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Jest Terminal Output — Pure Utility Tests</h3>
  <div class="terminal">
    <div><span class="pass">PASS</span> src/utils/formatCurrency.test.js</div>
    <div>  formatCurrency()</div>
    <div>    ✓ formats number to USD currency string (2 ms)</div>
    <div>    ✓ defaults to $0.00 if invalid input is passed (1 ms)</div>
    <br/>
    <div>Test Suites: <span class="pass">1 passed</span>, 1 total</div>
    <div>Tests:       <span class="pass">2 passed</span>, 2 total</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'E-commerce Cart Subtotal Calculations',
        km: 'ការតេស្តគណនាសរុបតម្លៃទំនិញក្នុង Cart'
      },
      description: {
        en: 'Testing helper functions that compute discounts, taxes, and shipping rates ensures zero billing errors for online shoppers.',
        km: 'ការតេស្ត Helper functions ដែលគណនាបញ្ចុះតម្លៃ, ពន្ធ និងថ្លៃដឹកជញ្ជូន ជួយធានាថាប្រព័ន្ធទូទាត់ប្រាក់គ្មានកំហុសទិន្នន័យឡើយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write a Jest test assertion for a function `add(a, b)` verifying `add(-1, 5)` equals `4`.',
        km: 'សរសេរ Jest test assertion សម្រាប់ function `add(a, b)` ដោយផ្ទៀងផ្ទាត់ថា `add(-1, 5)` ស្មើនឹង `4`។'
      },
      solution: 'test("adds negative and positive numbers", () => { expect(add(-1, 5)).toBe(4); });'
    },
    quizQuestions: [
      {
        id: 'q-3-1-1',
        question: {
          en: 'Why are pure functions ideal candidates for unit testing?',
          km: 'ហេតុអ្វីបានជា Pure functions ជាបេក្ខភាពល្អបំផុតសម្រាប់សរសេរ Unit Testing?'
        },
        options: [
          { id: '1', text: { en: 'They have no side effects and always produce deterministic outputs for given inputs', km: 'ពួកវាគ្មាន Side effects និងផ្តល់ទិន្នន័យច្បាស់លាស់រាល់ពេល Input ដូចគ្នា' }, isCorrect: true },
          { id: '2', text: { en: 'They require rendering a full DOM tree', km: 'ពួកវាទាមទារ Render DOM ទាំងមូល' }, isCorrect: false },
          { id: '3', text: { en: 'They can only be run in E2E tests', km: 'ពួកវាអាចរត់បានតែក្នុង E2E tests មួយមុខ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Deterministic inputs and outputs make pure functions fast and straightforward to assert.',
          km: 'ភាពច្បាស់លាស់នៃ Input/Output ធ្វើឱ្យ Pure functions រត់លឿន និងងាយស្រួលសរសេរ Test។'
        }
      }
    ]
  },

  {
    id: 'test-3-2',
    slug: 'testing-edge-cases-deliberately',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: {
      en: 'Testing Edge Cases: Empty Inputs, Boundaries & Invalid Data',
      km: 'ការតេស្តលើ Edge Cases៖ ទិន្នន័យទទេ, តម្លៃព្រំដែន, និងទិន្នន័យមិនត្រឹមត្រូវ'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Don\'t just test the "happy path" (normal valid input). High-quality test suites deliberately push boundary values, null/undefined, empty arrays, zero, negative numbers, and unexpected data types to ensure code gracefully handles errors without crashing.',
      km: 'កុំតេស្តតែលើ "Happy Path" (ស្ថានភាពទិន្នន័យត្រឹមត្រូវសាមញ្ញ)។ Test Suite ដែលមានគុណភាពខ្ពស់ ត្រូវតេស្តបន្ថែមលើ Edge Cases ដូចជា Null/Undefined, Empty Arrays, ចំនួនអវិជ្ជមាន, និង Data Types ខុសការរំពឹងទុក ដើម្បីធានាថា App មិន Crash ឡើយ។'
    },
    tutorial: {
      en: `1. Happy Path vs Edge Cases:
   // Happy path
   expect(calculateGrade(85)).toBe('B');

   // Edge cases (Boundary & Invalid values)
   expect(calculateGrade(100)).toBe('A'); // Upper boundary
   expect(calculateGrade(0)).toBe('F');   // Lower boundary
   expect(calculateGrade(-10)).toBe('INVALID'); // Out of bounds
   expect(calculateGrade(null)).toBe('INVALID'); // Invalid type`,
      km: `១. ភាពខុសគ្នារវាង Happy Path និង Edge Cases៖
   // Happy path
   expect(calculateGrade(85)).toBe('B');

   // Edge cases (តម្លៃព្រំដែន និង ទិន្នន័យមិនត្រឹមត្រូវ)
   expect(calculateGrade(100)).toBe('A'); // ព្រំដែនលើ
   expect(calculateGrade(0)).toBe('F');   // ព្រំដែនក្រោម
   expect(calculateGrade(-10)).toBe('INVALID'); // ហួសដែនកំណត់
   expect(calculateGrade(null)).toBe('INVALID'); // Type ខុស`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .terminal { background: #020617; border: 1px solid #22c55e; padding: 16px; border-radius: 12px; font-family: monospace; font-size: 12px; }
    .pass { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Edge Case Verification Test Suite</h3>
  <div class="terminal">
    <div><span class="pass">PASS</span> src/utils/discount.test.js</div>
    <div>  calculateDiscount()</div>
    <div>    ✓ applies 20% discount on valid total (2 ms)</div>
    <div>    ✓ handles $0 cart total gracefully (1 ms)</div>
    <div>    ✓ caps discount percentage at 100% max (1 ms)</div>
    <div>    ✓ returns 0 when price is negative (1 ms)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Form Validation Edge Cases',
        km: 'ការតេស្ត Edge Cases លើប្រព័ន្ធត្រួតពិនិត្យ Form'
      },
      description: {
        en: 'Testing inputs containing spaces-only strings, extremely long text, or special characters prevents unexpected crashes during user registration.',
        km: 'ការតេស្តបញ្ចូលអក្សរ Space សុទ្ធ, Text វែងជ្រុល, ឬសញ្ញាពិសេស ការពារកុំឱ្យ Form បង្កើត Bug ពេលអ្នកប្រើប្រាស់វាយបញ្ចូល។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Name three edge cases to test for a function that averages an array of numbers `average(numbers)`.',
        km: 'ប្រាប់ឈ្មោះ Edge Cases ចំនួន ៣ ដែលត្រូវតេស្តលើ Function គណនាមធ្យមភាគ Array `average(numbers)`។'
      },
      solution: '1) Empty array `average([])`, 2) Array containing non-number strings `average([10, "abc"])`, 3) Array with a single item `average([42])`.'
    },
    quizQuestions: [
      {
        id: 'q-3-2-1',
        question: {
          en: 'Why is testing edge cases essential for software stability?',
          km: 'ហេតុអ្វីបានជាការតេស្តលើ Edge cases មានសារៈសំខាន់ខ្លាំងចំពោះស្ថិរភាពកូដ?'
        },
        options: [
          { id: '1', text: { en: 'It uncovers uncaught exceptions and crashes caused by unexpected user inputs', km: 'វាជួយស្វែងរក Uncaught Exceptions និងបញ្ហា Crash ដែលបណ្តាលមកពី Input មិននឹកស្មានដល់' }, isCorrect: true },
          { id: '2', text: { en: 'It makes the test files run 10x faster', km: 'វាធ្វើឱ្យ Test files រត់លឿនជាងមុន ១០ដង' }, isCorrect: false }
        ],
        explanation: {
          en: 'Edge cases reveal bugs that occur when inputs fall outside expected standard formats.',
          km: 'Edge cases បង្ហាញ Bug ដែលកើតឡើងពេលទិន្នន័យខុសពីទម្រង់ធម្មតា។'
        }
      }
    ]
  },

  {
    id: 'test-3-3',
    slug: 'mocking-jest-fn-and-jest-mock',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: {
      en: 'Mocking Dependencies with jest.fn() and jest.mock()',
      km: 'ការប្រើប្រាស់ Mocking ជាមួយ jest.fn() និង jest.mock()'
    },
    durationMinutes: 25,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Mocking allows you to replace complex dependencies (like API calls, database queries, or callback props) with controllable fake functions. `jest.fn()` tracks calls and arguments, while `jest.mock()` replaces entire imported modules.',
      km: 'Mocking អនុញ្ញាតឱ្យអ្នកជំនួស Dependencies ស្មុគស្មាញ (ដូចជា API Call, Database Query, ឬ Callback props) ដោយប្រើប្រាស់ Fake Function ដែលយើងអាចគ្រប់គ្រងបាន។ `jest.fn()` ប្រើប្រាស់សម្រាប់តាមដានការហៅ Function និង Arguments ខណៈពេលដែល `jest.mock()` ជំនួស Module ទាំងមូល។'
    },
    tutorial: {
      en: `1. Creating a mock function with jest.fn():
   const handleClick = jest.fn();
   handleClick('hello');

   expect(handleClick).toHaveBeenCalledTimes(1);
   expect(handleClick).toHaveBeenCalledWith('hello');

2. Mocking an API module with jest.mock():
   import axios from 'axios';
   import { fetchUser } from './userService';

   jest.mock('axios');

   test('fetches user data successfully', async () => {
     axios.get.mockResolvedValue({ data: { name: 'Dara' } });

     const user = await fetchUser(1);
     expect(user.name).toBe('Dara');
   });`,
      km: `១. បង្កើត Mock function ជាមួយ jest.fn()៖
   const handleClick = jest.fn();
   handleClick('hello');

   expect(handleClick).toHaveBeenCalledTimes(1);
   expect(handleClick).toHaveBeenCalledWith('hello');

២. Mock លើ API module ជាមួយ jest.mock()៖
   import axios from 'axios';
   import { fetchUser } from './userService';

   jest.mock('axios');

   test('fetches user data successfully', async () => {
     axios.get.mockResolvedValue({ data: { name: 'Dara' } });

     const user = await fetchUser(1);
     expect(user.name).toBe('Dara');
   });`
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
    .terminal { background: #020617; border: 1px solid #22c55e; padding: 16px; border-radius: 12px; font-family: monospace; font-size: 12px; }
    .pass { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Jest Mock Assertion Terminal Output</h3>
  <div class="terminal">
    <div><span class="pass">PASS</span> src/services/userService.test.js</div>
    <div>  UserService</div>
    <div>    ✓ triggers onClick callback when button is clicked (3 ms)</div>
    <div>    ✓ mocks axios.get and returns mock user data (5 ms)</div>
    <br/>
    <div>Test Suites: <span class="pass">1 passed</span>, 1 total</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Mocking Axios / Fetch in Unit Tests',
        km: 'ការ Mock Axios / Fetch ក្នុង Unit Tests'
      },
      description: {
        en: 'Unit tests should never send real HTTP requests over the live network. Mocking network responses makes tests instant, reliable, and runnable offline.',
        km: 'Unit tests មិនគួរផ្ញើ Real HTTP Request ទៅកាន់ Server ពិតប្រាកដឡើយ។ ការ Mock ធ្វើឱ្យ Tests រត់លឿន, គ្មានភាពរអាក់រអួល, និងអាចរត់បានទោះគ្មាន អ៊ីនធឺណិត។'
      }
    },
    practiceExercise: {
      question: {
        en: 'How do you check that a mocked function was called exactly two times in Jest?',
        km: 'តើអ្នកពិនិត្យយ៉ាងដូចម្តេចថា Mock function ត្រូវ បានហៅចំនួន ២ ដងក្នុង Jest?'
      },
      solution: 'expect(mockFn).toHaveBeenCalledTimes(2);'
    },
    quizQuestions: [
      {
        id: 'q-3-3-1',
        question: {
          en: 'Why do we mock external API calls during unit tests?',
          km: 'ហេតុអ្វីបានជាយើងត្រូវ Mock លើ External API Calls ក្នុងអំឡុងពេលរត់ Unit Tests?'
        },
        options: [
          { id: '1', text: { en: 'To keep tests fast, deterministic, and isolated from network failures', km: 'ដើម្បីឱ្យ Test រត់លឿន ច្បាស់លាស់ និងមិនប៉ះពាល់ដោយសារបណ្តាញអ៊ីនធឺណិត' }, isCorrect: true },
          { id: '2', text: { en: 'Because Jest cannot make HTTP requests at all', km: 'ព្រោះ Jest មិនអាចផ្ញើ HTTP requests បាន' }, isCorrect: false }
        ],
        explanation: {
          en: 'Mocking isolates unit tests from external servers, ensuring speed and reliability.',
          km: 'ការ Mock ជួយបំបែក Unit tests ចេញពី External servers ធានាបាននូវល្បឿន និងភាពជឿជាក់។'
        }
      }
    ]
  }
];
