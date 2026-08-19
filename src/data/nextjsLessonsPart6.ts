import { Lesson } from '../types';

export const nextjsLessonsPart6: Lesson[] = [
  {
    id: "nextjs-testing",
    title: { en: "Next.js - Testing", km: "Next.js - ការធ្វើតេស្តសាកល្បង" },
    content: {
      en: `# Testing Overview
Testing is a critical part of building production-ready Next.js applications, ensuring your features work correctly and preventing future changes from breaking your app.

> 🧪 **The Testing Blueprint**: To compare different testing frameworks, pages 67–71 will all test the **same simple component** under test—a reusable Alert banner:
> 
> \`\`\`tsx
> // app/components/AlertMessage.tsx
> export default function AlertMessage({ message }: { message: string }) {
>   return <div className="alert-success">{message}</div>;
> }
> \`\`\`
> 
> By keeping the component under test exactly the same, you can easily compare the syntax and workflows of different testing libraries!`,
      km: `# ទិដ្ឋភាពទូទៅនៃការធ្វើតេស្តកូដ (Testing)
ការធ្វើតេស្តកូដ (Testing) គឺជាផ្នែកមួយដ៏សំខាន់ក្នុងការអភិវឌ្ឍកម្មវិធី Next.js កម្រិតអាជីព ដើម្បីធានាថាមុខងារនានាដំណើរការបានត្រឹមត្រូវ និងការពារកំហុសពេលកែកូដជាក្រោយ។

> 🧪 **គម្រោងតេស្តរួមគ្នា (The Testing Blueprint)**: ដើម្បីធ្វើការប្រៀបធៀបបណ្ណាល័យតេស្តផ្សេងៗ មេរៀនចាប់ពីទំព័រ ៦៧ ដល់ ៧១ នឹងធ្វើការតេស្តនៅលើ **សមាសភាគតែមួយគត់** គឺ ប្រអប់សារដំណឹង AlertMessage៖
> 
> \`\`\`tsx
> // app/components/AlertMessage.tsx
> export default function AlertMessage({ message }: { message: string }) {
>   return <div className="alert-success">{message}</div>;
> }
> \`\`\`
> 
> ការប្រើប្រាស់សមាសភាគដដែលជួយឱ្យអ្នកងាយស្រួលយល់ និងប្រៀបធៀបរបៀបសរសេរកូដរបស់បណ្ណាល័យតេស្តនីមួយៗ!`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Shared testing sandbox component
  function TestingHub() {
    const [framework, setFramework] = React.useState("jest");
    const [running, setRunning] = React.useState(false);
    const [results, setResults] = React.useState(null);

    const testCodes = {
      jest: "import { render, screen } from '@testing-library/react';\\nimport AlertMessage from './AlertMessage';\\n\\ntest('renders alert message', () => {\\n  render(<AlertMessage message=\\"Success!\\" />);\\n  expect(screen.getByText('Success!')).toBeInTheDocument();\\n});",
      cypress: "describe('Alert E2E Test', () => {\\n  it('displays the alert on homepage', () => {\\n    cy.visit('/');\\n    cy.get('.alert-success')\\n      .should('be.visible')\\n      .and('contain', 'Success!');\\n  });\\n});",
      vitest: "import { expect, test } from 'vitest';\\nimport { render } from '@testing-library/react';\\nimport AlertMessage from './AlertMessage';\\n\\ntest('renders message correctly', () => {\\n  const { getByText } = render(<AlertMessage message=\\"Success!\\" />);\\n  expect(getByText('Success!')).toBeDefined();\\n});",
      playwright: "import { test, expect } from '@playwright/test';\\n\\ntest('should show alert on page', async ({ page }) => {\\n  await page.goto('/');\\n  const alert = page.locator('.alert-success');\\n  await expect(alert).toBeVisible();\\n  await expect(alert).toHaveText('Success!');\\n});"
    };

    const runSimulatedTest = () => {
      setRunning(true);
      setResults(null);
      setTimeout(() => {
        setRunning(false);
        setResults({
          status: "PASSED",
          suites: 1,
          tests: 1,
          time: "0.45s",
          logs: "[" + framework.toUpperCase() + " RUNNER] ✓ AlertMessage renders and displays text \"Success!\" correctly."
        });
      }, 1200);
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '15px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h3>🧪 Multi-Framework Testing Sandbox</h3>
        <p style={{ fontSize: '12px', color: '#6b7280' }}>Select a testing framework to view the test code for <code>AlertMessage.tsx</code>:</p>
        
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
          {["jest", "cypress", "vitest", "playwright"].map(f => (
            <button 
              key={f}
              onClick={() => { setFramework(f); setResults(null); }}
              style={{ padding: '6px 12px', border: 'none', background: framework === f ? '#000' : '#e2e8f0', color: framework === f ? '#fff' : '#000', borderRadius: '4px', cursor: 'pointer', textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold' }}
            >
              {f}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '15px' }}>
          <div style={{ padding: '12px', backgroundColor: '#fafafa', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <span style={{ fontSize: '10px', color: '#64748b', display: 'block', marginBottom: '6px' }}>📁 TEST CODE ({framework}.test.tsx):</span>
            <pre style={{ margin: 0, fontSize: '11px', fontFamily: 'monospace', color: '#4f46e5', overflowX: 'auto' }}>
              {testCodes[framework]}
            </pre>
          </div>

          <div>
            <button onClick={runSimulatedTest} style={{ width: '100%', padding: '10px', background: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}>
              {running ? "Running Tests..." : "Run " + framework.toUpperCase() + " Suite"}
            </button>

            <div style={{ marginTop: '12px', backgroundColor: '#0f172a', padding: '12px', borderRadius: '8px', color: '#34d399', fontSize: '12px', minHeight: '110px' }}>
              <span style={{ color: '#94a3b8', display: 'block', marginBottom: '6px' }}>TERMINAL OUTPUT:</span>
              {running && <div style={{ color: '#f59e0b', fontFamily: 'monospace' }}>⚡ executing tests in chromium environment...</div>}
              {results && (
                <div style={{ fontFamily: 'monospace' }}>
                  <div style={{ color: '#10b981', fontWeight: 'bold' }}>● TEST RESULTS: {results.status}</div>
                  <div style={{ margin: '4px 0', fontSize: '11px', color: '#fff' }}>Suites: {results.suites} | Tests: {results.tests} | Time: {results.time}</div>
                  <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>{results.logs}</p>
                </div>
              )}
              {!running && !results && <span style={{ color: '#64748b' }}>Terminal idle. Run suite above...</span>}
            </div>
          </div>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<TestingHub />);
</script>`
  },
  {
    id: "nextjs-testing-jest",
    title: { en: "Next.js - Testing with Jest", km: "Next.js - ការតេស្តជាមួយ Jest" },
    content: {
      en: `# Testing with Jest
**Jest** and **React Testing Library** are the most popular choices for unit testing React components in Next.js.

### The AlertMessage Blueprint Test:
Here is how you write a Jest test for our shared \`AlertMessage\` component. This test renders the component in a virtual DOM and asserts that the message text is displayed correctly.

\`\`\`tsx
// __tests__/AlertMessage.test.tsx
import { render, screen } from '@testing-library/react';
import AlertMessage from '@/components/AlertMessage';

describe('AlertMessage component tests', () => {
  it('should render the alert with correct text', () => {
    render(<AlertMessage message="Account secured!" />);
    
    // Check if the message is in the virtual DOM
    const element = screen.getByText('Account secured!');
    expect(element).toBeInTheDocument();
  });
});
\`\`\``,
      km: `# ការធ្វើតេស្តជាមួយ Jest (Testing with Jest)
**Jest** និង **React Testing Library** គឺជាជម្រើសពេញនិយមបំផុតសម្រាប់ការធ្វើតេស្តសាកល្បងលក្ខណៈឯកត្តា (Unit testing) លើសមាសភាគ React នៅក្នុង Next.js។

### គំរូតេស្តប្រអប់សារដំណឹង៖
សរសេរកូដតេស្តសមាសភាគ \`AlertMessage\` ឋិតិវន្តរបស់យើង ដោយបញ្ជាឱ្យ Render សាកល្បង រួចផ្ទៀងផ្ទាត់អត្ថបទ៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Jest Testing Syntax Outline</h4>
        <div style={{ padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
          <pre style={{ margin: 0, fontSize: '12px', fontFamily: 'monospace' }}>
{\`expect(screen.getByText('Account secured!'))
  .toBeInTheDocument();\`}
          </pre>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-testing-cypress",
    title: { en: "Next.js - Testing with Cypress", km: "Next.js - ការតេស្តជាមួយ Cypress" },
    content: {
      en: `# End-to-End Testing with Cypress
**Cypress** is an End-to-End (E2E) testing framework that launches a real browser to interact with your application just like a real user would.

### The AlertMessage Blueprint Test:
Instead of rendering a single component in isolation, our Cypress test visits the live homepage and verifies that the \`AlertMessage\` element is visible on the screen.

\`\`\`typescript
// cypress/e2e/alert.cy.ts
describe('Homepage Alert E2E Test', () => {
  it('should visit the homepage and locate the alert element', () => {
    // 1. Visit the home page
    cy.visit('http://localhost:3000/');
    
    // 2. Locate the alert and verify its content
    cy.get('.alert-success')
      .should('be.visible')
      .and('contain.text', 'Account secured!');
  });
});
\`\`\``,
      km: `# ការធ្វើតេស្តជាមួយ Cypress (Testing with Cypress)
**Cypress** គឺជាក្របខ័ណ្ឌតេស្តបំពង់បង្ហូរចុងក្រោយ (End-to-End - E2E) ដែលដំណើរការសាកល្បងដោយបើក Browser ពិតប្រាកដ រួចធ្វើត្រាប់តាមសកម្មភាពរបស់មនុស្សដើម្បីចុច និងវាយបញ្ចូលព័ត៌មាន។

### គំរូតេស្តប្រអប់សារដំណឹង៖
ជំនួសឱ្យការតេស្តសមាសភាគមួយដាច់ដោយឡែក Cypress នឹងធ្វើការបញ្ជាឱ្យបើកទំព័រដើម រួចស្វែងរកប្រអប់សារដំណឹង \`AlertMessage\` លើអេក្រង់ពិតប្រាកដ៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Cypress Testing Assertions</h4>
        <div style={{ padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', backgroundColor: '#faf5ff' }}>
          <pre style={{ margin: 0, fontSize: '12px', fontFamily: 'monospace', color: '#6b21a8' }}>
{\`cy.get('.alert-success')
  .should('be.visible')
  .and('contain', 'Account secured!');\`}
          </pre>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-testing-vitest",
    title: { en: "Next.js - Testing with Vitest", km: "Next.js - ការតេស្តជាមួយ Vitest" },
    content: {
      en: `# High-Performance Unit Tests
**Vitest** is a modern unit-testing framework built on top of **Vite**. It is an extremely fast alternative to Jest that integrates seamlessly with Next.js projects.

### The AlertMessage Blueprint Test:
The Vitest test for our shared \`AlertMessage\` component uses a very similar syntax to Jest, but runs significantly faster because of Vitest's optimized compilation engine.

\`\`\`tsx
// app/components/AlertMessage.test.tsx
import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import AlertMessage from './AlertMessage';

test('renders alert component via Vitest engine', () => {
  const { getByText } = render(<AlertMessage message="Account secured!" />);
  
  // Verify the component renders the message
  expect(getByText('Account secured!')).toBeDefined();
});
\`\`\``,
      km: `# ការធ្វើតេស្តល្បឿនលឿនជាមួយ Vitest
**Vitest** គឺជាក្របខ័ណ្ឌតេស្តបែបឯកត្តា (Unit Testing) ជំនាន់ថ្មីដែលត្រូវបានបង្កើតឡើងនៅលើ **Vite**។ វាមានល្បឿនលឿនបំផុត និងមានភាពស៊ីសង្វាក់ខ្ពស់ជាមួយ Next.js។

### គំរូតេស្តប្រអប់សារដំណឹង៖
ការសរសេរកូដតេស្ត Vitest សម្រាប់ \`AlertMessage\` មានទម្រង់ប្រហាក់ប្រហែលនឹង Jest ដែរ ប៉ុន្តែវាដំណើរការតេស្តបានលឿនជាងដោយសារម៉ាស៊ីនចម្រោះកូដ Vite៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Vitest Unit Testing Syntax</h4>
        <div style={{ padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', backgroundColor: '#f0fdf4' }}>
          <pre style={{ margin: 0, fontSize: '12px', fontFamily: 'monospace', color: '#15803d' }}>
{\`import { expect, test } from 'vitest';
expect(getByText('Account secured!')).toBeDefined();\`}
          </pre>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-testing-playwright",
    title: { en: "Next.js - Testing with Playwright", km: "Next.js - ការតេស្តជាមួយ Playwright" },
    content: {
      en: `# Modern E2E Testing with Playwright
**Playwright** is Microsoft's modern framework for end-to-end (E2E) testing. It is designed to be highly reliable, fast, and secure.

### The AlertMessage Blueprint Test:
Our Playwright test launches a headless Chromium browser, navigates to the homepage, locates the alert component, and verifies its content:

\`\`\`typescript
// tests/alert.spec.ts
import { test, expect } from '@playwright/test';

test('verify alert message visibility', async ({ page }) => {
  // 1. Navigate to homepage
  await page.goto('http://localhost:3000/');
  
  // 2. Locate the alert message element
  const alert = page.locator('.alert-success');
  
  // 3. Verify it is visible and has the correct text
  await expect(alert).toBeVisible();
  await expect(alert).toHaveText('Account secured!');
});
\`\`\``,
      km: `# ការតេស្ត E2E ទំនើបជាមួយ Playwright
**Playwright** គឺជាក្របខ័ណ្ឌតេស្តបំពង់បង្ហូរចុងក្រោយ (E2E) ទំនើបដែលអភិវឌ្ឍដោយក្រុមហ៊ុន Microsoft។ វាមានភាពជឿជាក់ខ្ពស់ រហ័ស និងមានសុវត្ថិភាពខ្ពស់។

### គំរូតេស្តប្រអប់សារដំណឹង៖
កូដតេស្ត Playwright នឹងធ្វើការបើក Browser, ចូលទៅកាន់ទំព័រដើម, ស្វែងរកប្រអប់សារដំណឹង រួចផ្ទៀងផ្ទាត់ខ្លឹមសារ៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Playwright E2E Locator Syntax</h4>
        <div style={{ padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', backgroundColor: '#eff6ff' }}>
          <pre style={{ margin: 0, fontSize: '11px', fontFamily: 'monospace', color: '#1d4ed8' }}>
{\`const alert = page.locator('.alert-success');
await expect(alert).toBeVisible();
await expect(alert).toHaveText('Account secured!');\`}
          </pre>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-debugging",
    title: { en: "Next.js - Debugging", km: "Next.js - ការដោះស្រាយកំហុសកូដ" },
    content: {
      en: `# Debugging Next.js Applications
Because Next.js runs code on both the server and in the client's browser, debugging requires different tools depending on where the code executes.

### Debugging server-side code:
To inspect server-side code (like API routes or Server Components), configure VSCode with a debugging configuration or run the development server with Node's inspector flag enabled:

\`\`\`json
{
  "scripts": {
    "dev": "NODE_OPTIONS='--inspect' next dev"
  }
}
\`\`\`

This lets you open Google Chrome DevTools and pause execution at breakpoints directly inside your server-side code!`,
      km: `# ការរាវរក និងកែកំហុសកូដ (Debugging)
ដោយសារតែ Next.js ដំណើរការកូដទាំងនៅលើ Server និងនៅក្នុង Browser, ការរាវរក និងកែកំហុស (Debugging) តម្រូវឱ្យប្រើប្រាស់ឧបករណ៍ផ្សេងគ្នាទៅតាមទីតាំងដែលកូដនោះដំណើរការ។

### របៀបដោះស្រាយកំហុសលើ Server៖
ដើម្បីពិនិត្យមើលកូដដែលដំណើរការលើ Server (ដូចជា API Routes ឬ Server Components) អ្នកអាចបន្ថែមទង់ inspect នៅក្នុងបញ្ជា dev របស់ \`package.json\`៖

\`\`\`json
{
  "scripts": {
    "dev": "NODE_OPTIONS='--inspect' next dev"
  }
}
\`\`\``
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>VSCode Launch Configuration Blueprint</h4>
        <div style={{ padding: '12px', backgroundColor: '#f1f5f9', borderRadius: '8px' }}>
          <pre style={{ margin: 0, fontSize: '11px', fontFamily: 'monospace' }}>
{\`{
  "type": "node-terminal",
  "request": "launch",
  "name": "Debug NextJS Server",
  "command": "npm run dev"
}\`}
          </pre>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-deployment",
    title: { en: "Next.js - Deployment", km: "Next.js - ការដាក់ឱ្យដំណើរការ" },
    content: {
      en: `# Deploying to Production
Because Next.js is developed by Vercel, deploying your application to Vercel's global hosting platform is incredibly simple.

### Quick Deployment Steps:
1. Push your project's code to a Git repository (like GitHub).
2. Log in to Vercel and import your repository.
3. Vercel will automatically detect that you are using Next.js and configure your build and deployment settings with zero configuration!

Every time you push changes to your Git repository, Vercel will automatically trigger a new deployment, keeping your site up-to-date.`,
      km: `# ការដាក់ឱ្យដំណើរការជាសាធារណៈ (Deployment)
ដោយសារតែ Next.js ត្រូវបានបង្កើតឡើងដោយក្រុមហ៊ុន Vercel ការដាក់ឱ្យដំណើរការកម្មវិធីរបស់អ្នកនៅលើប្រព័ន្ធរបស់ Vercel គឺងាយស្រួលបំផុត។

### ជំហាននៃការដាក់ដំណើរការ៖
1. បញ្ជូនកូដគម្រោងរបស់អ្នកទៅកាន់ Git repository (ដូចជា GitHub)។
2. ចូលគណនីនៅលើ Vercel រួចទាញយកគម្រោងមកដាក់បញ្ចូល។
3. Vercel នឹងសម្គាល់ថាអ្នកប្រើ Next.js រួចរៀបចំ build និងដំណើរការកម្មវិធីឱ្យអ្នកដោយស្វ័យប្រវត្ត!

រាល់ពេលដែលអ្នកកែប្រែ និង push កូដថ្មីទៅកាន់ Git, Vercel នឹងធ្វើការ build និងអាប់ដេតគេហទំព័រឱ្យអ្នកដោយស្វ័យប្រវត្ត។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Vercel CI/CD Build pipeline</h4>
        <div style={{ padding: '15px', border: '1px solid #cbd5e1', borderRadius: '10px', backgroundColor: '#f8fafc' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <strong style={{ color: '#4f46e5' }}>GitHub push</strong>
            <span>➔</span>
            <strong style={{ color: '#d97706' }}>Vercel compilation</strong>
            <span>➔</span>
            <strong style={{ color: '#10b981' }}>Live deployment (URL)</strong>
          </div>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-interview",
    title: { en: "Next.js - Interview Questions", km: "Next.js - សំណួរ അഭിភាសន៍" },
    content: {
      en: `# Architectural Interview Questions
Mastering these technical interview questions will help you demonstrate a deep understanding of Next.js architecture during senior developer interviews:

### Q1: What is the main difference between Server Components and Client Components?
* **Answer**: React Server Components (RSC) run exclusively on the server and do not bundle any JavaScript to the client, making your pages load faster. Client Components run in the browser and allow you to use interactive state, lifecycle hooks, and browser APIs.

### Q2: How does Next.js optimize image rendering?
* **Answer**: The \`<Image />\` component automatically compresses image files, serves modern file formats (like WebP or AVIF), prevents layout shifts by requiring width and height dimensions, and lazy-loads images as they enter the viewport.`,
      km: `# សំណួរចម្លើយសម្ភាសន៍ការងារ (Interview Questions)
ការយល់ដឹងពីសំណួរស្នូលទាំងនេះ នឹងជួយបង្ហាញពីសមត្ថភាពបច្ចេកទេសរឹងមាំរបស់អ្នកនៅក្នុងការសម្ភាសន៍ការងារ Next.js៖

### សំណួរ ១៖ តើអ្វីជាភាពខុសគ្នារវាង Server Components និង Client Components?
* **ចម្លើយ**: Server Components ដំណើរការតែនៅលើ Server ប៉ុណ្ណោះ ដោយមិនបញ្ជូនកូដ JavaScript ទៅកាន់ Client ឡើយ ដែលជួយឱ្យទំព័រផ្ទុកលឿន។ ចំណែក Client Components ដំណើរការនៅលើ Browser និងអនុញ្ញាតឱ្យប្រើប្រាស់ State, hooks និង Browser APIs នានា។

### សំណួរ ២៖ តើ Next.js បង្កើនល្បឿនរូបភាពដោយរបៀបណា?
* **ចម្លើយ**: សមាសភាគ \`<Image />\` កាត់បន្ថយទំហំរូបភាពដោយស្វ័យប្រវត្ត ប្រើប្រាស់ទ្រង់ទ្រាយ WebP/AVIF ការពារការរំកិលប្លង់ និងមានមុខងារ Lazy-load នៅពេលរូបភាពជិតអណ្តែតដល់ភ្នែក។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Senior Candidate Screening Panel</h4>
        <div style={{ padding: '10px', backgroundColor: '#faf5ff', borderRadius: '6px', border: '1px solid #d8b4fe' }}>
          <strong>Core Screening Topic:</strong>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px' }}>How do you resolve hydration discrepancy errors between server compilation outputs and active client dom structures?</p>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-quick-guide",
    title: { en: "Next.js - Quick Guide", km: "Next.js - សេចក្តីណែនាំរហ័ស" },
    content: {
      en: `# Cheat Sheet and Reference Guide
This cheat sheet provides a quick reference for common Next.js APIs, file names, and configurations:

### App Router File Names:
* \`page.tsx\`: The main visible page component.
* \`layout.tsx\`: Shared layout structures (headers, footers, sidebars).
* \`loading.tsx\`: Loading fallback skeleton.
* \`error.tsx\`: Caught error boundary UI fallback.

### Next.js Core Hooks:
* \`useRouter()\`: Navigate programmatically from client-side code.
* \`usePathname()\`: Get the current URL path.
* \`useSearchParams()\`: Read query parameters from the URL.`,
      km: `# សេចក្តីណែនាំប្លង់សង្ខេប (Quick Guide)
សន្លឹកសង្ខេបកូដ (Cheat Sheet) ជួយឱ្យអ្នកងាយស្រួលរាវរកប្រភពកូដ និងឈ្មោះឯកសារពិសេសៗរបស់ Next.js៖

### ឈ្មោះឯកសារសំខាន់ៗក្នុង App Router៖
* \`page.tsx\`: ទំព័រមាតិកាចម្បង។
* \`layout.tsx\`: ប្លង់រួម (Navbar, Header, Sidebar)។
* \`loading.tsx\`: ប្លង់រង់ចាំពេលកំពុងផ្ទុក។
* \`error.tsx\`: ទំព័របង្ហាញពេលមានកំហុសកូដ។

### Hooks សំខាន់ៗរបស់ Next.js៖
* \`useRouter()\`: បញ្ជាឱ្យប្តូរទំព័រពី client component។
* \`usePathname()\`: អានឈ្មោះទំព័រ URL បច្ចុប្បន្ន។
* \`useSearchParams()\`: អានព័ត៌មាន query parameters ពី URL។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Core Hooks Quick Reference</h4>
        <ul style={{ paddingLeft: '15px', fontSize: '12px' }}>
          <li><strong>useRouter()</strong> ➔ Navigation transitions API trigger</li>
          <li><strong>usePathname()</strong> ➔ Inspects active URL routes</li>
          <li><strong>useSearchParams()</strong> ➔ Parses dynamic query parameters</li>
        </ul>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-resources",
    title: { en: "Next.js - Useful Resources", km: "Next.js - ធនធានមានប្រយោជន៍" },
    content: {
      en: `# Documentation and Resources
Explore these official resources to help you master Next.js:

### Essential Resources:
* **Official Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs) - The ultimate guide and API reference.
* **Vercel Learn Platform**: [https://nextjs.org/learn](https://nextjs.org/learn) - Interactive tutorials for building Next.js projects.
* **Next.js GitHub Repository**: [https://github.com/vercel/next.js](https://github.com/vercel/next.js) - View source code and join community discussions.`,
      km: `# ធនធាន និងឯកសារយោង (Useful Resources)
សិក្សាបន្ថែមតាមរយៈប្រភព និងធនធានផ្លូវការរបស់ Next.js៖

### ធនធានសំខាន់ៗ៖
* **ឯកសារណែនាំផ្លូវការរបស់ Next.js**: [https://nextjs.org/docs](https://nextjs.org/docs) - ប្រភពពន្យល់ និងឯកសារយោងល្អបំផុត។
* **កម្មវិធីសិក្សា Vercel Learn**: [https://nextjs.org/learn](https://nextjs.org/learn) - មេរៀនអនុវត្តជាក់ស្តែងសម្រាប់សាងសង់គម្រោង។
* **Next.js GitHub Repository**: [https://github.com/vercel/next.js](https://github.com/vercel/next.js) - ចូលរួមពិភាក្សា និងមើលកូដប្រភពរបស់ Next.js។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Official Documentation Hub</h4>
        <p style={{ fontSize: '13px', color: '#4b5563' }}>Visit our core documentation repositories to find blueprints and configuration assistance.</p>
        <a href="https://nextjs.org/docs" target="_blank" style={{ color: '#0066cc', fontWeight: 'bold', fontSize: '14px', textDecoration: 'none' }}>Go to nextjs.org/docs ➔</a>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-discussion",
    title: { en: "Next.js - Discussion", km: "Next.js - កិច្ចពិភាក្សា" },
    content: {
      en: `# Congratulations on Completing Next.js!
You have successfully completed the 77-page Next.js curriculum! You now possess a solid understanding of:

* File-based layouts and routing.
* Optimized rendering modes (SSG, SSR, and ISR).
* Server Actions and Route Handlers.
* Core Web Vitals optimizations.

Keep building, deploying, and exploring what you can create with Next.js!`,
      km: `# អបអរសាទរការបញ្ចប់ការសិក្សា Next.js!
អ្នកបានបញ្ចប់ការសិក្សាវគ្គសិក្សា Next.js ចំនួន ៧៧ ទំព័រទាំងស្រុងដោយជោគជ័យ! បច្ចុប្បន្នអ្នកមានការយល់ដឹងច្បាស់លាស់ពី៖

* ប្រព័ន្ធនាំផ្លូវ File-based layouts and routing។
* ទម្រង់បង្ហាញកូដផ្សេងៗ (SSG, SSR, and ISR)។
* Server Actions និង Route Handlers។
* ការបង្កើនល្បឿនគេហទំព័រឱ្យត្រូវតាមស្តង់ដារ Core Web Vitals។

សូមបន្តអភិវឌ្ឍ សាកល្បង និងបង្កើតគម្រោងកាន់តែអស្ចារ្យជាមួយ Next.js!`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '30px', border: '2px solid #10b981', borderRadius: '16px', textAlign: 'center', backgroundColor: '#f0fdf4' }}>
        <h2 style={{ color: '#10b981', margin: '0 0 10px 0' }}>🎓 Graduation Complete!</h2>
        <p style={{ fontSize: '15px', color: '#14532d', lineHeight: '1.6' }}>
          Congratulations on mastering full-stack developer competencies on the Vercel architecture. Your certificate has been unlocked!
        </p>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  }
];
