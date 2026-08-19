import { Lesson } from '../types';

export const nextjsLessonsPart1: Lesson[] = [
  {
    id: "nextjs-home",
    title: { en: "Next.js - Home", km: "Next.js - ទំព័រដើម" },
    content: {
      en: `# Welcome to Next.js
Next.js is the leading full-stack framework built on top of **React**, developed and maintained by **Vercel**. It provides the tooling, optimization, and structure needed to build production-ready applications with outstanding performance and SEO.

### Why Next.js?
While React is excellent for building client-side views, it is notoriously challenging to configure for optimal search indexing, initial page-load performance, and server-side data fetching. Next.js solves this by introducing pre-rendering, server components, automated route code-splitting, and built-in optimization.

### Course Roadmap:
In this comprehensive 77-page curriculum, you will learn:
* **The App Router System**: Built on React Server Components (RSC) for advanced layouts.
* **Rendering & Fetching**: Static, dynamic, incremental, and server-side capabilities.
* **API Development**: Integrated routes to handle server operations without a separate backend.
* **Testing & Optimizations**: From Jest and Cypress to package bundle pruning.`,
      km: `# ស្វាគមន៍មកកាន់វគ្គសិក្សា Next.js
Next.js គឺជាក្របខ័ណ្ឌអភិវឌ្ឍន៍ Full-stack ឈានមុខគេដែលត្រូវបានបង្កើតឡើងនៅលើ **React** ដោយក្រុមហ៊ុន **Vercel**។ វាផ្តល់នូវឧបករណ៍ ការបង្កើនប្រសិទ្ធភាព (Optimization) និងរចនាសម្ព័ន្ធចាំបាច់សម្រាប់កសាងកម្មវិធីកម្រិតផលិតកម្ម (Production) ជាមួយល្បឿនលឿន និង SEO ល្អបំផុត។

### ហេតុអ្វីជ្រើសរើស Next.js?
ខណៈពេលដែល React ល្អសម្រាប់បង្កើតទិដ្ឋភាពនៅលើ Browser (Client-side), វាមានការពិបាកខ្លាំងក្នុងការកំណត់រចនាសម្ព័ន្ធសម្រាប់ស្វែងរក (SEO), ល្បឿនផ្ទុកដំបូង និងការទាញយកទិន្នន័យពីម៉ាស៊ីនបម្រើ។ Next.js ដោះស្រាយបញ្ហានេះដោយណែនាំការបង្ហាញទំព័រជាមុន (Pre-rendering), សមាសភាគម៉ាស៊ីនបម្រើ (RSC) និងការគ្រប់គ្រងស្វ័យប្រវត្ត។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '500px', margin: 'auto', backgroundColor: '#fafafa', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', color: '#000', margin: '0 0 10px 0' }}>▲ Next.js Learning Hub</h2>
        <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>
          This is your interactive workspace. Explore the tabs, complete quizzes, and execute mock server pipelines inside our custom sandboxes.
        </p>
        <div style={{ padding: '16px', backgroundColor: '#000', color: '#fff', borderRadius: '8px', fontFamily: 'monospace', fontSize: '13px', display: 'inline-block', marginTop: '10px' }}>
          npx create-next-app@latest my-app
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-overview",
    title: { en: "Next.js - Overview", km: "Next.js - ទិដ្ឋភាពទូទៅ" },
    content: {
      en: `# What is Next.js?
At its core, Next.js extends React's core rendering library by shifting much of the layout computation from the user's browser to the server.

### Key Innovations:
* **Server-First Design**: Components are compiled on the server by default to reduce JavaScript delivery.
* **Unified Router**: File-system-based routing maps folders directly to production URLs.
* **Data Hydration**: The server outputs static HTML which the client dynamically brings to life (hydrates) with event listeners.

> **Tip**: Next.js is not an alternative to React; it is a framework that *wraps* React to handle production infrastructure, asset packaging, and rendering modes out-of-the-box.`,
      km: `# តើ Next.js គឺជាអ្វី?
ស្នូលចម្បងរបស់ Next.js គឺការពង្រីកសមត្ថភាពរបស់ React ដោយផ្លាស់ប្តូរការគណនាប្លង់ (Layout computation) ភាគច្រើនពីម៉ាស៊ីនអ្នកប្រើប្រាស់ (Client Browser) ទៅកាន់ម៉ាស៊ីនបម្រើ (Server)។

### មុខងារថ្មីៗដ៏សំខាន់៖
* **Server-First Design**: សមាសភាគទាំងអស់ត្រូវបានដំណើរការលើ Server ជាលំនាំដើម ដើម្បីកាត់បន្ថយទំហំកូដ JS ដែលត្រូវផ្ញើទៅ Client។
* **Unified Router**: ប្រព័ន្ធនាំផ្លូវផ្អែកលើប្រព័ន្ធឯកសារ (File-system) ដែលភ្ជាប់ថតកូដទៅកាន់ URL ដោយផ្ទាល់។
* **Data Hydration**: Server បង្កើតទំព័រ HTML ឋិតិវន្ត ហើយ Client នឹងបន្ថែមមុខងារអន្តរកម្ម (Hydrate) ជាក្រោយ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Next.js Framework Architecture</h3>
        <p style={{ color: '#4b5563' }}>Compare the core rendering pipelines:</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
          <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#4f46e5' }}>React Client-Side</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>Browser downloads empty HTML & huge JS file. Render occurs on client device.</p>
          </div>
          <div style={{ padding: '15px', border: '1px dashed #10b981', borderRadius: '8px', backgroundColor: '#f0fdf4' }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#10b981' }}>Next.js Server-Side</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#374151' }}>Server computes layout and outputs ready-to-display HTML instantly.</p>
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
    id: "nextjs-setup",
    title: { en: "Next.js - Project Setup", km: "Next.js - ការដំឡើងគម្រោង" },
    content: {
      en: `# Project Setup
Setting up a modern Next.js project is fully automated via the official Vercel toolchain.

### Creating an App:
Run the following setup script in your operating system terminal:
\`\`\`bash
npx create-next-app@latest
\`\`\`

### Recommended Options:
When prompted, Vercel suggests configuring:
1. **TypeScript**: Yes (provides compiled type safety)
2. **ESLint**: Yes (keeps code clean and free of syntactical errors)
3. **Tailwind CSS**: Yes (for streamlined styling)
4. **App Router**: Yes (recommended over legacy Page Router)
5. **Customize Import Alias (@/*)**: Yes`,
      km: `# ការដំឡើងគម្រោង Next.js
ការរៀបចំដំឡើងគម្រោង Next.js ត្រូវបានធ្វើឡើងដោយស្វ័យប្រវត្តតាមរយៈឧបករណ៍ផ្លូវការរបស់ Vercel។

### របៀបបង្កើតកម្មវិធី៖
ដំណើរការបញ្ជានៅក្នុង Terminal៖
\`\`\`bash
npx create-next-app@latest
\`\`\`

### ជម្រើសដែលគួរជ្រើសរើស៖
នៅពេលសួរពីការដំឡើង៖
1. **TypeScript**: ជ្រើសរើស Yes (សម្រាប់ការការពារសុវត្ថិភាពប្រភេទកូដ)
2. **ESLint**: ជ្រើសរើស Yes (ដើម្បីឱ្យកូដមានសណ្តាប់ធ្នាប់)
3. **Tailwind CSS**: ជ្រើសរើស Yes (សម្រាប់ការរចនាបថរហ័ស)
4. **App Router**: ជ្រើសរើស Yes (ល្អជាងប្រព័ន្ធ Page Router ចាស់)`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const questions = [
      "Would you like to use TypeScript? (Yes / No)",
      "Would you like to use ESLint? (Yes / No)",
      "Would you like to use Tailwind CSS? (Yes / No)",
      "Would you like to use 'src/' directory? (Yes / No)",
      "Would you like to use App Router? (Yes / No)"
    ];
    return (
      <div style={{ fontFamily: 'monospace', backgroundColor: '#1e293b', color: '#38bdf8', padding: '20px', borderRadius: '10px' }}>
        <p style={{ color: '#4ade80', margin: '0 0 10px 0' }}>$ npx create-next-app@latest my-next-app</p>
        {questions.map((q, idx) => (
          <div key={idx} style={{ marginBottom: '8px', fontSize: '13px' }}>
            <span style={{ color: '#94a3b8' }}>?</span> {q} <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>› Yes</span>
          </div>
        ))}
        <p style={{ color: '#4ade80', marginTop: '15px', marginBottom: 0 }}>✓ Project initialized successfully! Run "npm run dev" to boot server.</p>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-folder",
    title: { en: "Next.js - Folder Structure", km: "Next.js - រចនាសម្ព័ន្ធថតកូដ" },
    content: {
      en: `# Folder Structure Conventions
Next.js strictly enforces physical directory naming to manage its server router.

### App Directory Structure:
Here is a blueprint of a modern Next.js project using the App Router:
* **\`app/\`**: Contains all routing layouts, page templates, and styles.
  * **\`layout.tsx\`**: Root shell containing HTML headers, metadata, and shared sidebars.
  * **\`page.tsx\`**: The landing screen mapped to the route's path.
  * **\`error.tsx\`**: Caught errors boundary layer.
  * **\`loading.tsx\`**: Suspense loading fallback.
* **\`public/\`**: Holds static public files like images and fonts.
* **\`next.config.js\`**: Configuration settings for runtime caching, redirects, and environment paths.`,
      km: `# រចនាសម្ព័ន្ធថតឯកសារ
Next.js ប្រើប្រាស់រចនាសម្ព័ន្ធថតកូដរឹងមាំ ដើម្បីគ្រប់គ្រងប្រព័ន្ធនាំផ្លូវរបស់វា។

### រចនាសម្ព័ន្ធថត App៖
* **\`app/\`**: រក្សាទុកប្លង់ទំព័រ និង Styles ទាំងអស់។
  * **\`layout.tsx\`**: គ្រោងឆ្អឹងមេដែលមាន HTML headers, metadata និង sidebar រួមគ្នា។
  * **\`page.tsx\`**: ទំព័រមាតិកាដែលបង្ហាញនៅលើ URL។
  * **\`error.tsx\`**: ទំព័របង្ហាញកំហុសបច្ចេកទេស។
  * **\`loading.tsx\`**: ទំព័ររង់ចាំ (Loading indicator)។
* **\`public/\`**: រក្សាទុកឯកសារឋិតិវន្តដូចជារូបភាព និង Fonts។
* **\`next.config.js\`**: ឯកសារកំណត់រចនាសម្ព័ន្ធរបស់ Next.js`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const tree = [
      { name: "my-next-project/", type: "root" },
      { name: "  ├── app/", type: "dir" },
      { name: "  │   ├── layout.tsx  (Root structure)", type: "file" },
      { name: "  │   ├── page.tsx    (Home UI page)", type: "file" },
      { name: "  │   ├── loading.tsx (Automated skeleton loader)", type: "file" },
      { name: "  │   └── globals.css (Global Tailwind styles)", type: "file" },
      { name: "  ├── public/", type: "dir" },
      { name: "  │   └── next.svg    (Static SVG assets)", type: "file" },
      { name: "  ├── package.json", type: "file" },
      { name: "  └── next.config.js", type: "file" }
    ];
    return (
      <div style={{ fontFamily: 'monospace', backgroundColor: '#0f172a', color: '#f1f5f9', padding: '20px', borderRadius: '12px' }}>
        <h4 style={{ color: '#38bdf8', marginTop: 0, marginBottom: '12px' }}>📁 Next.js Project File Explorer</h4>
        {tree.map((item, idx) => (
          <div key={idx} style={{ padding: '2px 0', fontSize: '13px' }}>
            {item.name}
          </div>
        ))}
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-app-router",
    title: { en: "Next.js - App Router", km: "Next.js - App Router" },
    content: {
      en: `# The Modern App Router
Starting in Next.js 13.4, the **App Router** is the production-ready standard. It is built entirely on **React Server Components (RSC)**.

### Core Features:
* **Server-First Execution**: Code is processed and rendered on Vercel Node edge instances, minimizing client bundles.
* **Shared Layout System**: Sub-directories nested in \`app/\` can inherit UI templates effortlessly.
* **Streamlined Streaming**: Layout parts render independently as server queries complete, improving user interaction metrics.

> **Tip**: All files created inside the \`app/\` directory are processed as Server Components by default. To convert a page to browser execution, write \`"use client"\` at the very top of the file!`,
      km: `# ប្រព័ន្ធ App Router ទំនើប
ចាប់ពី Next.js 13.4 មក **App Router** គឺជាស្តង់ដារកម្រិតអាជីព។ វាត្រូវបានបង្កើតឡើងទាំងស្រុងនៅលើ **React Server Components (RSC)**។

### លក្ខណៈសំខាន់ៗ៖
* **Server-First Execution**: កូដត្រូវបានគណនា និងដំណើរការនៅលើ Server ជាលំនាំដើម។
* **Shared Layout System**: ថតកូដរងក្នុង \`app/\` អាចចែករំលែកប្លង់រួមគ្នាបានយ៉ាងងាយស្រួល។
* **Streamlined Streaming**: បំណែកនៃប្លង់អាចទាញយក និងបង្ហាញម្តងមួយៗមិនបាច់រង់ចាំគ្នា។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>React Server Component (RSC) Concept</h4>
        <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '10px' }}>
          <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '8px', color: '#64748b', fontSize: '12px' }}>
            📁 app/about/page.tsx (Server Component)
          </div>
          <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '13px' }}>
            {"// Default behavior! Runs on Server.\nexport default async function About() {\n  const data = await fetch('https://api.db/info');\n  return <p>{data.description}</p>;\n}"}
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
    id: "nextjs-page-router",
    title: { en: "Next.js - Page Router", km: "Next.js - Page Router" },
    content: {
      en: `# Legacy Page Router
The **Pages Router** was the original routing architecture used in Next.js prior to version 13. It is still fully supported for backwards compatibility.

### Key Characteristics:
* **Root Folder**: Uses the \`pages/\` directory instead of \`app/\`.
* **Client-First Hydration**: Pages rely heavily on client-side JS and load full components into the browser.
* **Explicit Fetching Hooks**: Uses distinct, pre-defined server hooks like \`getServerSideProps\` and \`getStaticProps\` to pass server data down as properties.

> **Tip**: If you are maintaining older corporate websites, you will run into the Pages Router. However, for new projects, you should always choose the App Router.`,
      km: `# របៀបប្រើប្រាស់ Pages Router ចាស់
**Pages Router** គឺជាប្រព័ន្ធនាំផ្លូវចាស់របស់ Next.js មុនជំនាន់ទី ១៣។ វានៅតែត្រូវបានគាំទ្រដើម្បីភាពស៊ីសង្វាក់គ្នាជាមួយគម្រោងចាស់ៗ។

### លក្ខណៈសំខាន់ៗ៖
* **Root Folder**: ប្រើប្រាស់ថត \`pages/\` ជំនួសឱ្យ \`app/\`។
* **Client-First Hydration**: ពឹងផ្អែកខ្លាំងលើ JavaScript នៅខាង Browser។
* **Explicit Fetching Hooks**: ត្រូវប្រើប្រាស់អនុគមន៍ពិសេសដូចជា \`getServerSideProps\` និង \`getStaticProps\` ដើម្បីទាញយកទិន្នន័យពី Server។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Legacy Pages Router Fetching (getServerSideProps)</h4>
        <div style={{ padding: '16px', backgroundColor: '#fff7ed', border: '1px solid #ffedd5', borderRadius: '10px' }}>
          <div style={{ borderBottom: '1px solid #fed7aa', paddingBottom: '8px', marginBottom: '8px', color: '#c2410c', fontSize: '12px' }}>
            📁 pages/about.tsx (Legacy Pages Router)
          </div>
          <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '12px', color: '#7c2d12' }}>
            {"// Required to fetch on server in Page Router\nexport async function getServerSideProps() {\n  const res = await fetch('https://api.db/info');\n  const data = await res.json();\n  return { props: { data } };\n}\n\nexport default function About({ data }) {\n  return <p>{data.description}</p>;\n}"}
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
    id: "nextjs-pages",
    title: { en: "Next.js - Pages", km: "Next.js - ទំព័រទិដ្ឋភាព" },
    content: {
      en: `# Creating Pages
In Next.js, pages are mapped automatically based on your folder system.

### Route Resolution:
A folder must contain a file explicitly named **\`page.tsx\`** to be treated as a navigable URL:
* **\`app/page.tsx\`** ➔ Mapped to the root homepage (\`/\`)
* **\`app/dashboard/page.tsx\`** ➔ Mapped to the subpath (\`/dashboard\`)
* **\`app/blog/page.tsx\`** ➔ Mapped to (\`/blog\`)

Any custom components or helper utility files (like \`button.tsx\`) residing inside those directories will *not* be exposed as URLs, which keeps your routes clean.`,
      km: `# ការបង្កើតទំព័រទិដ្ឋភាព (Pages)
នៅក្នុង Next.js ទំព័រនានាត្រូវបានបង្កើតឡើងជាស្វ័យប្រវត្តទៅតាមរចនាសម្ព័ន្ធថតកូដរបស់អ្នក។

### របៀបកំណត់ទំព័រ៖
ថតកូដនីមួយៗត្រូវតែមានឯកសារឈ្មោះ **\`page.tsx\`** ទើបអាចបង្កើតជាទំព័រ URL សម្រាប់ចូលមើលបាន៖
* **\`app/page.tsx\`** ➔ ទំព័រដើម (\`/\`)
* **\`app/dashboard/page.tsx\`** ➔ ទំព័រដាស់បត (\`/dashboard\`)
* **\`app/blog/page.tsx\`** ➔ ទំព័រប្លុក (\`/blog\`)`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [path, setPath] = React.useState("/");
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#e2e8f0', padding: '8px', borderRadius: '6px', marginBottom: '15px' }}>
          <span style={{ fontSize: '13px', color: '#64748b', marginRight: '8px' }}>URL Bar:</span>
          <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>http://localhost:3000{path}</span>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <button onClick={() => setPath("/")} style={{ padding: '6px 12px', background: path === '/' ? '#000' : '#e2e8f0', color: path === '/' ? '#fff' : '#000', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Home</button>
          <button onClick={() => setPath("/dashboard")} style={{ padding: '6px 12px', background: path === '/dashboard' ? '#000' : '#e2e8f0', color: path === '/dashboard' ? '#fff' : '#000', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Dashboard</button>
          <button onClick={() => setPath("/blog")} style={{ padding: '6px 12px', background: path === '/blog' ? '#000' : '#e2e8f0', color: path === '/blog' ? '#fff' : '#000', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Blog</button>
        </div>
        <div style={{ padding: '16px', backgroundColor: '#fafafa', borderRadius: '8px', minHeight: '100px', border: '1px solid #f3f4f6' }}>
          {path === "/" && (
            <div>
              <h3>🏠 Home Page</h3>
              <p style={{ fontSize: '13px', color: '#4b5563' }}>File: <code>app/page.tsx</code></p>
            </div>
          )}
          {path === "/dashboard" && (
            <div>
              <h3>📊 Dashboard Analytics</h3>
              <p style={{ fontSize: '13px', color: '#4b5563' }}>File: <code>app/dashboard/page.tsx</code></p>
            </div>
          )}
          {path === "/blog" && (
            <div>
              <h3>📝 Recent Articles</h3>
              <p style={{ fontSize: '13px', color: '#4b5563' }}>File: <code>app/blog/page.tsx</code></p>
            </div>
          )}
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-fetching",
    title: { en: "Next.js - Data Fetching", km: "Next.js - ការទាញយកទិន្នន័យ" },
    content: {
      en: `# Modern Server Fetching
Next.js extends the native JavaScript \`fetch\` API to provide automatic caching, revalidation, and request memoization.

### Fetching inside Server Components:
Since components run on the server, you can mark your functions as \`async\` and write \`await fetch()\` directly in your markup render:

\`\`\`tsx
export default async function Page() {
  const res = await fetch('https://api.db/posts', {
    next: { revalidate: 3600 } // Auto-refresh cache hourly
  });
  const posts = await res.json();
  
  return <div>{/* Render posts... */}</div>;
}
\`\`\`

> **Note**: This pattern completely replaces the legacy \`getStaticProps\` and \`getServerSideProps\` hooks from the Pages Router.`,
      km: `# ការទាញយកទិន្នន័យលើ Server
Next.js ពង្រីកសមត្ថភាពរបស់ JavaScript \`fetch\` ធម្មតា ដើម្បីគាំទ្រការរក្សាទុកទិន្នន័យ (Caching) និងការទាញយកទិន្នន័យឡើងវិញដោយស្វ័យប្រវត្ត។

### ការទាញយកកូដក្នុង Server Component៖
ដោយសារតែវាដំណើរការលើ Server អ្នកអាចសរសេរ \`async\` លើសមាសភាគ រួចប្រើប្រាស់ \`await fetch()\` ដោយផ្ទាល់តែម្តង៖

\`\`\`tsx
export default async function Page() {
  const res = await fetch('https://api.db/posts', {
    next: { revalidate: 3600 } // ធ្វើបច្ចុប្បន្នភាព Cache រាល់ម៉ោង
  });
  const posts = await res.json();
  
  return <div>...</div>;
}
\`\`\``,
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [loading, setLoading] = React.useState(false);
    const [posts, setPosts] = React.useState([]);

    const simulateFetch = () => {
      setLoading(true);
      setTimeout(() => {
        setPosts([
          { id: 1, title: "Unlocking Server Components", views: 1204 },
          { id: 2, title: "Why SSR changes SEO", views: 890 }
        ]);
        setLoading(false);
      }, 1000);
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Simulated server fetch() operation</h3>
        <button onClick={simulateFetch} style={{ padding: '8px 16px', background: '#000', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', marginBottom: '15px' }}>
          {loading ? "Fetching on Server..." : "Execute fetch() Pipeline"}
        </button>
        {posts.length > 0 && (
          <div style={{ padding: '12px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
            <span style={{ fontSize: '11px', color: '#6b7280', display: 'block', marginBottom: '8px' }}>SERVER RESPONSE PAYLOAD:</span>
            {posts.map(p => (
              <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #e5e7eb', fontSize: '13px' }}>
                <strong>{p.title}</strong>
                <span style={{ color: '#10b981' }}>{p.views} views</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-isr",
    title: { en: "Next.js - ISR", km: "Next.js - បច្ចេកវិទ្យា ISR" },
    content: {
      en: `# Incremental Static Regeneration (ISR)
**ISR** allows you to update static pages *after* you have built and deployed your application, without needing to rebuild the entire site.

### How it works:
When a request is made to a page, Vercel will evaluate if the revalidation timeframe has expired:
1. **Under limit**: Serves the cached static HTML page instantly.
2. **Expired**: Generates a new HTML render on the server in the background, updates the cache, and serves the new page to subsequent visitors.

\`\`\`tsx
// Force static caching with automatic rebuild every 10 minutes
export const revalidate = 600; 
\`\`\``,
      km: `# បច្ចេកវិទ្យា ISR (Incremental Static Regeneration)
**ISR** អនុញ្ញាតឱ្យអ្នកធ្វើបច្ចុប្បន្នភាពទំព័រឋិតិវន្ត (Static Pages) បន្ទាប់ពីកម្មវិធីត្រូវបានដាក់ឱ្យដំណើរការរួច ដោយមិនចាំបាច់កសាងគម្រោងទាំងមូលឡើងវិញ (Rebuild) ឡើយ។

### របៀបដំណើរការ៖
នៅពេលមានការស្នើសុំទំព័រ Vercel នឹងពិនិត្យមើលពេលវេលាកំណត់ Revalidate៖
1. **មិនទាន់ហួសកំណត់**: បង្ហាញទំព័រចាស់ដែលបានរក្សាទុក (Cache) ភ្លាមៗ។
2. **ហួសកំណត់**: ដំណើរការបង្កើតទំព័រថ្មីនៅខាងក្រោយ (Background) រួចអាប់ដេត Cache សម្រាប់អ្នកចូលមើលបន្ទាប់។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [seconds, setSeconds] = React.useState(0);
    const [cacheStatus, setCacheStatus] = React.useState("FRESH (Serving cached static HTML)");

    React.useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(prev => {
          const next = prev + 1;
          if (next >= 10) {
            setCacheStatus("STALE (Next request will trigger background regeneration!)");
          }
          return next;
        });
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    const triggerReload = () => {
      setSeconds(0);
      setCacheStatus("FRESH (Serving newly rebuilt static HTML)");
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>ISR Revalidation Simulator (Interval: 10s)</h3>
        <p>Time since last static build: <strong>{seconds}s</strong></p>
        <div style={{ padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: seconds >= 10 ? '#fff7ed' : '#f0fdf4', color: seconds >= 10 ? '#c2410c' : '#15803d', marginBottom: '15px', fontSize: '14px' }}>
          Status: <strong>{cacheStatus}</strong>
        </div>
        {seconds >= 10 && (
          <button onClick={triggerReload} style={{ padding: '8px 12px', background: '#000', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Simulate New User Visit (Trigger Rebuild)
          </button>
        )}
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-static-serving",
    title: { en: "Next.js - Static Assets", km: "Next.js - ឯកសារឋិតិវន្ត" },
    content: {
      en: `# Static Files Serving
Next.js allows you to serve static files, such as images, fonts, or other assets, from a folder called **\`public\`** in the root directory.

### How to Reference Static Assets:
Files inside \`public\` can be referenced from your code starting from the base URL (\`/\`):
* File path: \`/public/logo.png\`
* Reference URL: \`/logo.png\`

\`\`\`tsx
export default function Page() {
  return <img src="/logo.png" alt="Logo" />;
}
\`\`\`

> **Note**: Avoid naming static files in \`public\` the same as folders in \`app/\\, as this can cause routing conflicts.`,
      km: `# ការបម្រើឯកសារឋិតិវន្ត (Static Files)
Next.js អនុញ្ញាតឱ្យអ្នកបម្រើឯកសារឋិតិវន្ត ដូចជារូបភាព ហ្វុន (Fonts) ឬឯកសារផ្សេងៗ ចេញពីថតមួយឈ្មោះថា **\`public\`** ដែលស្ថិតនៅលំដាប់ថ្នាក់រឹស (Root)។

### របៀបហៅប្រើប្រាស់៖
រាល់ឯកសារនៅក្នុង \`public\` អាចត្រូវបានហៅប្រើប្រាស់បានពី URL ដើមដោយផ្ទាល់ ដោយមិនចាំបាច់សរសេរពាក្យ \`public\` ឡើយ៖
* ទីតាំងឯកសារ៖ \`/public/assets/avatar.png\`
* កូដ JSX៖ \`<img src="/assets/avatar.png" alt="User Profile" />\`

> **សម្គាល់**: ចៀសវាងការដាក់ឈ្មោះឯកសារឋិតិវន្តជាន់គ្នាជាមួយឈ្មោះថតកូដនៅក្នុង \`app/\` ដើម្បីការពារការជាន់ផ្លូវនាំទៅកាន់ទំព័រនានា។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Static Assets Mapping</h3>
        <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ padding: '20px', background: '#cbd5e1', borderRadius: '8px', fontWeight: 'bold', fontSize: '13px' }}>
              📁 /public/logo.png
            </div>
            <div style={{ fontSize: '24px' }}>➔</div>
            <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '13px', color: '#4f46e5' }}>
              {\`<img src="/logo.png" />\`}
            </pre>
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
    id: "nextjs-pre-rendering",
    title: { en: "Next.js - Pre-Rendering", km: "Next.js - ការបង្ហាញទំព័រជាមុន" },
    content: {
      en: `# What is Pre-Rendering?
By default, Next.js **pre-renders** every page. This means that the server generates the full HTML skeleton for each page ahead of time, instead of relying on client-side JavaScript to render it in the browser.

### Two Forms of Pre-Rendering:
1. **Static Generation (SSG)**: HTML is built once at build-time (when you run \`npm run build\`) and reused on every user request.
2. **Server-Side Rendering (SSR)**: HTML is generated dynamically on the server for each unique incoming request.

> **Why it matters**: Pre-rendering ensures search engines can fully crawl your site's content instantly, which dramatically improves your SEO.`,
      km: `# តើការបង្ហាញទំព័រជាមុន (Pre-Rendering) គឺជាអ្វី?
តាមលំនាំដើម Next.js ធ្វើការ **Pre-render** រាល់ទំព័រទាំងអស់។ នេះមានន័យថា ម៉ាស៊ីនបម្រើ (Server) បង្កើតគ្រោងឆ្អឹង HTML ពេញលេញសម្រាប់ទំព័រនីមួយៗជាមុនសិន មុននឹងផ្ញើទៅកាន់ Browser។

### ប្រភេទនៃការបង្ហាញទំព័រជាមុន៖
1. **Static Generation (SSG)**: HTML ត្រូវបានបង្កើតតែម្តងគត់នៅពេល Compile កូដ (Build-time) ហើយប្រើប្រាស់ឡើងវិញគ្រប់ការស្នើសុំ។
2. **Server-Side Rendering (SSR)**: HTML ត្រូវបានបង្កើតឡើងភ្លាមៗនៅលើ Server រាល់ពេលមានអ្នកចូលមើលទំព័រ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Pre-Rendering Comparison</h3>
        <div style={{ border: '1px solid #cbd5e1', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ backgroundColor: '#f1f5f9', padding: '10px', fontWeight: 'bold', fontSize: '14px', borderBottom: '1px solid #cbd5e1' }}>
            Static HTML compiled by Server:
          </div>
          <pre style={{ margin: 0, padding: '15px', backgroundColor: '#fff', fontSize: '13px', color: '#1e293b', overflowX: 'auto', fontFamily: 'monospace' }}>
{\`<!DOCTYPE html>
<html>
  <head><title>My NextJS Site</title></head>
  <body>
    <div id="root">
      <h1>Pre-rendered HTML Skeleton</h1>
      <p>This content was generated by the server!</p>
    </div>
  </body>
</html>\`}
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
    id: "nextjs-partial-pre-rendering",
    title: { en: "Next.js - Partial Pre-Rendering", km: "Next.js - ការបង្ហាញទំព័របែបផ្នែកខ្លះ" },
    content: {
      en: `# Partial Pre-Rendering (PPR)
**Partial Pre-Rendering** is an experimental rendering model that combines static and dynamic execution inside the same page.

### How it works:
PPR relies on React's **Suspense** boundaries:
1. The static shell (e.g., page navigation, sidebar layout) is pre-compiled and served instantly.
2. The dynamic parts (e.g., personal user recommendations, real-time prices) are deferred and streamed to the browser as the server queries complete.

\`\`\`tsx
import { Suspense } from 'react';

export default function Page() {
  return (
    <main>
      <StaticShellHeader />
      <Suspense fallback={<CardSkeleton />}>
        <DynamicUserFeed />
      </Suspense>
    </main>
  );
}
\`\`\``,
      km: `# ការបង្ហាញទំព័របែបផ្នែកខ្លះ (Partial Pre-Rendering - PPR)
**Partial Pre-Rendering** គឺជាបច្ចេកវិទ្យាពិសោធន៍ទំនើបបំផុតដែលអនុញ្ញាតឱ្យប្រើប្រាស់ទាំងប្លង់ឋិតិវន្ត (Static) និងប្លង់ឌីណាមិក (Dynamic) នៅលើទំព័រតែមួយរួមគ្នា។

### របៀបដំណើរការ៖
PPR ពឹងផ្អែកលើ **Suspense** របស់ React៖
1. គ្រោងឆ្អឹងឋិតិវន្ត (ដូចជា Navbar, Sidebar) ត្រូវបានទាញមកបង្ហាញភ្លាមៗ។
2. ផ្នែកឌីណាមិក (ដូចជា ទិន្នន័យផ្ទាល់ខ្លួនរបស់អ្នកប្រើប្រាស់) ត្រូវបានពន្យារពេល និងបញ្ចូលជាលំហូរ (Stream) ពី Server មកកាន់ Browser នៅពេលសួរទិន្នន័យរួចរាល់។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [loaded, setLoaded] = React.useState(false);
    
    React.useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 2500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Partial Pre-Rendering (PPR) Simulated Lifecycle</h3>
        <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '10px', backgroundColor: '#fff' }}>
          <div style={{ padding: '12px', backgroundColor: '#e2e8f0', borderRadius: '6px', color: '#1e293b', marginBottom: '10px', fontWeight: 'bold', fontSize: '13px' }}>
            ⚡ Root Static Shell Layout (Instant Load)
          </div>

          {/* Dynamic Component using simulated suspense */}
          {!loaded ? (
            <div style={{ padding: '16px', backgroundColor: '#f1f5f9', borderRadius: '6px', border: '1px dashed #cbd5e1', textAlign: 'center', fontSize: '12px', color: '#64748b' }}>
              ⏳ Loading dynamic profile recommendations (Streaming over network...)
            </div>
          ) : (
            <div style={{ padding: '16px', backgroundColor: '#dbeafe', borderRadius: '6px', border: '1px solid #bfdbfe', color: '#1e40af' }}>
              👤 <strong>Dynamic Feed:</strong> Welcome back Seyha! Your personalized feed has loaded.
            </div>
          )}
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-ssr",
    title: { en: "Next.js - Server Side Rendering", km: "Next.js - ការបង្ហាញកូដពីម៉ាស៊ីនបម្រើ" },
    content: {
      en: `# Server-Side Rendering (SSR)
**Server-Side Rendering (SSR)** forces Next.js to reconstruct the full HTML markup for a page dynamically on the server for every single incoming request.

> 🌐 **Server Sandbox Warning**: Several clusters of pages describe server-only behaviors (like SSR, ISR, API Routes, and Caching) that cannot fully execute in a standard client-side browser iframe sandbox. The examples below utilize a highly polished, interactive simulated request/response cycle to demonstrate what a real Vercel edge node would return!

### Forcing SSR:
In the App Router, a page defaults to SSR if it uses a **dynamic function** (like reading \`cookies()\`, query search params, or calling a dynamic \`fetch()\` with caching disabled):

\`\`\`tsx
// app/dashboard/page.tsx
import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  
  // Re-computed dynamically for each request!
  return <div>Accessing Secured Workspace...</div>;
}
\`\`\``,
      km: `# ការបង្ហាញកូដពីម៉ាស៊ីនបម្រើ (Server-Side Rendering - SSR)
**Server-Side Rendering (SSR)** បង្ខំឱ្យ Next.js បង្កើតទំព័រ HTML ឡើងវិញនៅលើ Server រាល់ពេលមានការស្នើសុំចូលមើលទំព័រម្តងៗ។

> 🌐 **សម្គាល់ពីម៉ាស៊ីនពិសោធន៍**: មុខងារជាច្រើនរបស់ Server (ដូចជា SSR, ISR, Caching) មិនអាចដំណើរការផ្ទាល់ក្នុង Browser (Iframe) បានទេ។ ដូច្នេះ ម៉ាស៊ីនខាងក្រោមត្រូវបានបង្កើតឡើងដើម្បីសាកល្បងលំហូរដំណើរការ និងបញ្ជូន Response ដូចជា Server ពិតប្រាកដ!

### របៀបបង្ខំឱ្យប្រើប្រាស់ SSR៖
នៅក្នុង App Router ទំព័រមួយនឹងក្លាយជា SSR ដោយស្វ័យប្រវត្ត ប្រសិនបើវាប្រើប្រាស់ អនុគមន៍ឌីណាមិក (ដូចជា \`cookies()\`, query search params ឬការទាញយក fetch គ្មាន cache)៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [logs, setLogs] = React.useState([]);
    const [renderedHTML, setRenderedHTML] = React.useState("");
    const [requestCount, setRequestCount] = React.useState(0);

    const handleSendRequest = () => {
      const time = new Date().toLocaleTimeString();
      setRequestCount(prev => prev + 1);
      
      const newLogs = [
        \`[Server] Incoming request #\${requestCount + 1} at \${time}\`,
        \`[Server] Running app/dashboard/page.tsx...\`,
        \`[Server] Reading cookies and generating fresh HTML skeleton...\`,
        \`[Server] HTML delivered to Client. Status 200 OK\`
      ];

      setLogs(prev => [...newLogs, ...prev].slice(0, 8));
      setRenderedHTML(\`<div style="padding: 10px; background: #eff6ff; border: 1px solid #bfdbfe; color: #1e3a8a; border-radius: 6px;">
        <h4>📊 Fresh Dashboard Rendered on Server</h4>
        <p style="margin:0; font-size: 13px;">Request Time: \${time}</p>
        <p style="margin:0; font-size: 12px; color: #1d4ed8;">Session Status: Secure (Verified via server cookies)</p>
      </div>\`);
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '15px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h3>▲ Mock Vercel Node SSR Simulation</h3>
        <button onClick={handleSendRequest} style={{ padding: '8px 16px', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
          Send HTTP GET Request (Reload View)
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
          <div style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '8px', color: '#38bdf8', height: '160px', overflowY: 'auto' }}>
            <span style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '6px', fontFamily: 'sans-serif' }}>▲ MOCK SERVER REAL-TIME LOGS:</span>
            {logs.length === 0 ? (
              <span style={{ fontSize: '12px', color: '#64748b', fontFamily: 'monospace' }}>No request active. Click send request.</span>
            ) : (
              logs.map((log, i) => <div key={i} style={{ fontFamily: 'monospace', fontSize: '12px', padding: '2px 0' }}>{log}</div>)
            )}
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', height: '160px', overflowY: 'auto', backgroundColor: '#fafafa' }}>
            <span style={{ fontSize: '11px', color: '#64748b', display: 'block', marginBottom: '6px' }}>CLIENT BROWSER IFRAME PREVIEW:</span>
            {renderedHTML ? (
              <div dangerouslySetInnerHTML={{ __html: renderedHTML }} />
            ) : (
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Empty viewport. Send request to render HTML.</span>
            )}
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
    id: "nextjs-csr",
    title: { en: "Next.js - Client Side Rendering", km: "Next.js - ការបង្ហាញកូដខាង Browser" },
    content: {
      en: `# Client-Side Rendering (CSR)
**Client-Side Rendering (CSR)** shifts the responsibility of rendering layouts entirely to the client's browser using JavaScript.

### When to use CSR:
You should use CSR when your component requires browser-only features, such as:
* Accessing browser global objects like \`window\` or \`document\`
* Attaching event listeners like \`onClick\`, \`onChange\`, or \`onSubmit\`
* Utilizing React lifecycle hooks like \`useState\`, \`useRef\`, or \`useEffect\`

### Declaring Client Components:
To declare a client component in the App Router, add the **\`"use client"\`** directive at the very top of your file before any imports:

\`\`\`tsx
"use client";

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
\`\`\``,
      km: `# ការបង្ហាញកូដខាង Browser (Client-Side Rendering - CSR)
**Client-Side Rendering (CSR)** ផ្ទេរភារកិច្ចគណនាប្លង់ និងបង្ហាញទិន្នន័យទាំងអស់ទៅកាន់ Browser របស់ឧបករណ៍អ្នកប្រើប្រាស់វិញ។

### ពេលណាត្រូវប្រើប្រាស់ CSR៖
អ្នកត្រូវប្រើប្រាស់ CSR នៅពេលដែលសមាសភាគត្រូវការប្រើប្រាស់មុខងាររបស់ Browser ដូចជា៖
* ការចូលប្រើប្រាស់ Objects របស់ Browser ដូចជា \`window\` ឬ \`document\`
* ការបង្កើតព្រឹត្តិការណ៍ផ្សេងៗដូចជា \`onClick\`, \`onChange\` ឬ \`onSubmit\`
* ការប្រើប្រាស់ React Hooks ដូចជា \`useState\`, \`useRef\` ឬ \`useEffect\`

### របៀបប្រកាស Client Component៖
ដាក់ឃ្លា **\`"use client"\`** នៅលើគេបង្អស់នៃកូដរបស់អ្នក៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Client-side execution sandbox using interactive state
  function ClientCounter() {
    const [count, setCount] = React.useState(0);
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', maxWidth: '300px', margin: 'auto', textAlign: 'center' }}>
        <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>🚀 "use client" ACTIVE WORKSPACE</span>
        <h4 style={{ margin: '0 0 10px 0' }}>Interactive Client State</h4>
        <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '15px', color: '#059669' }}>
          {count}
        </div>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '8px 16px', background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Click to Increment State
        </button>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ClientCounter />);
</script>`
  }
];
