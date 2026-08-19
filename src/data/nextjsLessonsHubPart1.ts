import { FrontendLesson } from '../types/frontendClass';

export const NEXTJS_HUB_LESSONS_PART1: FrontendLesson[] = [
  // Module 1 — Introduction & Setup
  {
    id: 'next-hub-1-1',
    slug: 'what-is-nextjs',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: {
      en: '1.1 What Next.js is & Why Build on Top of React',
      km: '1.1 អ្វីទៅជា Next.js & ហេតុអ្វីត្រូវប្រើប្រាស់លើ React'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'Next.js is a full-stack React framework built by Vercel that brings "batteries-included" features to web development: Server-Side Rendering (SSR), Static Site Generation (SSG), automatic file-system routing, built-in image & font optimizations, and zero-config TypeScript support.\n\nWhile standard React is a client-side library requiring separate tools for routing and SSR, Next.js handles both client and server code seamlessly out of the box.\n\nPrerequisite: HTML, CSS, JavaScript, React',
      km: 'Next.js គឺជា Full-Stack React Framework ដែលបង្កើតឡើងដោយ Vercel ដោយមានបញ្ចូលនូវ Feature សំខាន់ៗជាស្រាប់៖ Server-Side Rendering (SSR), Static Site Generation (SSG), File-system Routing, Image & Font Optimization, និង TypeScript Support។\n\nខុសពី React ធម្មតាដែលជា Client-side Library និងត្រូវការ Tool ផ្សេងៗទៀតសម្រាប់ Routing ឬ SSR, Next.js គ្រប់គ្រងទាំង Client និង Server Code ដោយស្វ័យប្រវត្តិ។\n\nតម្រូវការជាមុន៖ HTML, CSS, JavaScript, React'
    },
    tutorial: {
      en: 'Key Features of Next.js over Vanilla React:\n1. Server-Side Rendering (SSR) for instant SEO & fast initial load.\n2. Automatic File-Based Routing (No React Router needed).\n3. Built-in API Route Handlers for backend endpoints.\n4. Automatic Image & Font Optimization.',
      km: 'លក្ខណៈពិសេសរបស់ Next.js ធៀបនឹង React ធម្មតា៖\n១. Server-Side Rendering (SSR) ជួយ SEO និងចំណាយពេលរង់ចាំតិច\n២. Automatic File-Based Routing មិនបាច់ដំឡើង React Router ទេ\n៣. បង្កើត API Endpoints ខាងក្នុង App បានតែម្តង\n៤. មាន Image & Font Optimization ស្រាប់'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: #f8fafc; padding: 24px; }
    .badge { background: #000; color: #fff; border: 1px solid #334155; padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: bold; }
    .card { background: #0f172a; border: 1px solid #1e293b; padding: 20px; border-radius: 16px; margin-top: 16px; }
    .code { background: #020617; color: #38bdf8; font-family: monospace; padding: 8px 12px; border-radius: 8px; font-size: 13px; }
  </style>
</head>
<body>
  <span class="badge">NEXT.JS FRAMEWORK OVERVIEW</span>
  <div class="card">
    <h2>React Framework for the Web</h2>
    <p>File Location: <span class="code">app/page.tsx</span> [Server Component]</p>
    <p>Rendered Output: HTML generated on server with zero client-side React bundle for static text!</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'E-commerce platforms like Target and Notion use Next.js so Google search crawlers can instantly index product titles and blog pages via SSR, boosting organic search traffic by over 300%.',
        km: 'ក្រុមហ៊ុនធំៗដូចជា Target និង Notion ប្រើប្រាស់ Next.js ដើម្បីឲ្យ Google Crawlers អាច Index ទិន្នន័យទំនិញ ឬ អត្ថបទបានភ្លាមៗតាម SSR ជួយបង្កើន Traffic ចូលទស្សនា වෙបសាយយ៉ាងច្រើន។'
      },
      code: `// File Path: app/page.tsx (Server Component)
export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to SabayCode Tech Portal</h1>
      <p>Rendered on the server at request time!</p>
    </main>
  );
}

// Rendered HTML Output sent to browser:
// <main style="..."><h1>Welcome to SabayCode Tech Portal</h1><p>Rendered on the server at request time!</p></main>`
    },
    practiceExercise: {
      question: {
        en: 'What is the main advantage of Next.js over standard React client-side rendering for a news blog?',
        km: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងរបស់ Next.js ធៀបនឹង React ធម្មតាសម្រាប់ Web Blog សារព័ត៌មាន?'
      },
      solution: 'Server-Side Rendering (SSR) delivers fully rendered HTML to search engine bots immediately, vastly improving SEO indexing and performance.'
    },
    quizQuestions: [
      {
        id: 'q-next-1-1',
        question: {
          en: 'Which company created and maintains the Next.js framework?',
          km: 'តើក្រុមហ៊ុនមួយណាជាអ្នកបង្កើត និងថែទាំ Next.js Framework?'
        },
        options: [
          { id: '1', text: { en: 'Vercel', km: 'Vercel' }, isCorrect: true },
          { id: '2', text: { en: 'Meta', km: 'Meta' }, isCorrect: false },
          { id: '3', text: { en: 'Google', km: 'Google' }, isCorrect: false }
        ],
        explanation: {
          en: 'Next.js is open-sourced and maintained by Vercel in collaboration with the React community.',
          km: 'Next.js ត្រូវបានបង្កើតឡើង និងថែទាំដោយក្រុមហ៊ុន Vercel។'
        }
      }
    ]
  },
  {
    id: 'next-hub-1-2',
    slug: 'app-router-vs-pages-router',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: {
      en: '1.2 App Router vs. Pages Router',
      km: '1.2 ការប្រៀបធៀប App Router និង Pages Router'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'Next.js introduced the **App Router** in version 13, built on React Server Components (RSC). It replaces the legacy **Pages Router** (`pages/` directory).\n\nKey Differences:\n- Pages Router (`pages/index.tsx`): Uses `getServerSideProps` / `getStaticProps`.\n- App Router (`app/page.tsx`): Uses native React Server Components, layout nesting (`layout.tsx`), Server Actions, and direct `async`/`await` fetching.',
      km: 'Next.js បានប្រកាស **App Router** ចាប់ពីកំណែ 13 ដោយផ្អែកលើ React Server Components (RSC)។ វាជំនួសឱ្យ **Pages Router** ចាស់ (`pages/` directory)។\n\nចំណុចខុសគ្នា៖\n- Pages Router (`pages/index.tsx`)៖ ប្រើ `getServerSideProps` ឬ `getStaticProps`\n- App Router (`app/page.tsx`)៖ ប្រើ React Server Components ផ្ទាល់, nested layouts (`layout.tsx`), និង `async`/`await` data fetching'
    },
    tutorial: {
      en: 'App Router Conventions vs Pages Router:\n1. App Router directory is located at root `app/` or `src/app/`.\n2. Routes are defined by folders containing `page.tsx`.\n3. Shared UI layouts use `layout.tsx` instead of `_app.tsx`.',
      km: 'ក្បួនបង្កើត App Router ធៀបនឹង Pages Router៖\n១. Directory របស់ App Router គឺ `app/` ឬ `src/app/`\n២. Route នីមួយៗកំណត់ដោយ Folder ដែលមាន file `page.tsx` នៅខាងក្នុង\n៣. ប្រើប្រាស់ `layout.tsx` សម្រាប់ Shared UI ជំនួសឲ្យ `_app.tsx`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #38bdf8; padding: 20px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .box { background: #0f172a; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="grid">
    <div class="box">
      <h4 style="color:#ef4444">Legacy: Pages Router</h4>
      <p>pages/blog/index.tsx<br>getStaticProps()</p>
    </div>
    <div class="box">
      <h4 style="color:#22c55e">Modern: App Router</h4>
      <p>app/blog/page.tsx<br>async Server Component</p>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'All modern Next.js projects and enterprise codebases use the App Router. Knowing that the Pages Router exists helps when migrating legacy projects, but new builds strictly use `app/`.',
        km: 'គម្រោង Next.js ទំនើបៗទាំងអស់ប្រើប្រាស់ App Router។ ការយល់ដឹងពី Pages Router ជួយពេល Migration កូដចាស់ ប៉ុន្តែគម្រោងថ្មីត្រូវប្រើ `app/` ទាំងអស់។'
      },
      code: `// File Path: app/dashboard/page.tsx (App Router - Modern)
// Server Component by default - Fetch directly inside component
export default async function DashboardPage() {
  const stats = await fetch('https://api.example.com/stats').then(res => res.json());
  return <div>Active Users: {stats.users}</div>;
}

// URL Route mapped: http://localhost:3000/dashboard`
    },
    practiceExercise: {
      question: {
        en: 'In the Next.js App Router, what is the required file name to make a folder publicly accessible as a route?',
        km: 'ក្នុង Next.js App Router តើ File ឈ្មោះអ្វីដែលចាំបាច់ត្រូវមានក្នុង Folder ដើម្បីឱ្យក្លាយជា URL Route?'
      },
      solution: 'page.tsx (or page.jsx / page.js)'
    },
    quizQuestions: [
      {
        id: 'q-next-1-2',
        question: {
          en: 'Which file inside an `app/` route directory defines the primary page UI in Next.js App Router?',
          km: 'តើ File មួយណាខាងក្នុង `app/` folder ដែលជាអ្នកបង្ហាញ UI ទំព័រដើមនៃ Route នោះ?'
        },
        options: [
          { id: '1', text: { en: 'page.tsx', km: 'page.tsx' }, isCorrect: true },
          { id: '2', text: { en: 'index.tsx', km: 'index.tsx' }, isCorrect: false },
          { id: '3', text: { en: 'route.tsx', km: 'route.tsx' }, isCorrect: false }
        ],
        explanation: {
          en: 'In the App Router, `page.tsx` renders the visual UI for that specific route path.',
          km: 'ក្នុង App Router, `page.tsx` គឺជា File ដែលបង្កើតទំព័រ UI សម្រាប់ Route នោះ។'
        }
      }
    ]
  },
  {
    id: 'next-hub-1-3',
    slug: 'create-next-app-folder-structure',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: {
      en: '1.3 Creating a Project & Folder Structure',
      km: '1.3 ការបង្កើត Project ជាមួយ create-next-app & ទម្រង់ Folder'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'To start a new Next.js project, run `npx create-next-app@latest my-app` in your terminal.\n\nKey Generated Structure:\n- `app/`: Contains routes, components, and layouts.\n- `public/`: Static assets like SVGs, icons, and images.\n- `next.config.js` (or `.mjs`): Next.js configuration settings (e.g. image domains, redirects).\n- `package.json`: Dependencies (`next`, `react`, `react-dom`).',
      km: 'ដើម្បីចាប់ផ្តើមបង្កើត Project ថ្មី ត្រូវវាយបញ្ជា `npx create-next-app@latest my-app` លើ Terminal។\n\nរចនាសម្ព័ន្ធ Folder សំខាន់ៗ៖\n- `app/`៖ ផ្ទុក Routes, Components, និង Layouts\n- `public/`៖ ផ្ទុក Static Assets ដូចជា SVGs និង រូបភាព\n- `next.config.js`៖ កំណត់ Config ផ្សេងៗរបស់ Next.js\n- `package.json`៖ ផ្ទុក Packages ដូចជា Next, React'
    },
    tutorial: {
      en: 'Steps to initialize a Next.js App:\n1. Terminal command: `npx create-next-app@latest my-next-app`\n2. Prompts: Select TypeScript (Yes), ESLint (Yes), Tailwind CSS (Yes), `src/` directory (Yes/No), App Router (Yes).\n3. Start dev server: `cd my-next-app && npm run dev`\n4. Open browser at `http://localhost:3000`.',
      km: 'ជំហានបង្កើត Next.js App៖\n១. វាយបញ្ជា terminal: `npx create-next-app@latest my-next-app`\n២. ជ្រើសរើស TypeScript (Yes), Tailwind CSS (Yes), App Router (Yes)\n៣. ដំណើរការ Server: `cd my-next-app && npm run dev`\n៤. បើក Browser ត្រង់ `http://localhost:3000`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .tree { line-height: 1.8; color: #a855f7; }
    .file { color: #38bdf8; }
    .desc { color: #64748b; font-size: 12px; }
  </style>
</head>
<body>
  <h3>Next.js Project Directory Tree</h3>
  <div class="tree">
    📁 my-app/<br>
    ├── 📁 app/<br>
    │   ├── 📄 layout.tsx <span class="desc">(Root Layout wrapper)</span><br>
    │   └── 📄 page.tsx <span class="desc">(Home Route /)</span><br>
    ├── 📁 public/<br>
    │   └── 📄 favicon.ico<br>
    ├── 📄 next.config.mjs<br>
    └── 📄 package.json
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'A standard directory layout ensures every developer on a team immediately knows where to find page routes (`app/`), static icons (`public/`), or build flags (`next.config.mjs`).',
        km: 'រចនាសម្ព័ន្ធស្តង់ដារជួយឱ្យក្រុមការងារទាំងមូលងាយស្រួលស្វែងរក File កូដ ឬ Configuration ផ្សេងៗដោយមិនបាត់បង់ពេល។'
      },
      code: `// File Path: next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;`
    },
    practiceExercise: {
      question: {
        en: 'Which directory in a Next.js project is served directly at the root URL for static files (e.g. `/favicon.ico`)?',
        km: 'តើ Directory មួយណាដែលផ្លាស់ប្តូរ File Static ទៅជា URL ដើមដោយផ្ទាល់ (ដូចជា `/favicon.ico`)?'
      },
      solution: 'public/'
    },
    quizQuestions: [
      {
        id: 'q-next-1-3',
        question: {
          en: 'What command creates a new Next.js application with interactive CLI flags?',
          km: 'តើ Command មួយណាសម្រាប់បង្កើត Next.js App ថ្មី?'
        },
        options: [
          { id: '1', text: { en: 'npx create-next-app@latest', km: 'npx create-next-app@latest' }, isCorrect: true },
          { id: '2', text: { en: 'npm init react-app', km: 'npm init react-app' }, isCorrect: false },
          { id: '3', text: { en: 'ng new next-project', km: 'ng new next-project' }, isCorrect: false }
        ],
        explanation: {
          en: '`npx create-next-app@latest` is the official CLI bootstrapper for Next.js projects.',
          km: '`npx create-next-app@latest` ជា Command ផ្លូវការសម្រាប់បង្កើត Next.js Project។'
        }
      }
    ]
  },

  // Module 2 — File-Based Routing
  {
    id: 'next-hub-2-1',
    slug: 'folders-and-page-routes',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: {
      en: '2.1 Folders & page.tsx Mapping to URL Routes',
      km: '2.1 ការភ្ជាប់ Folders និង page.tsx ទៅជា URL Routes'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Next.js uses a **file-system based router** where folders define routes.\n\nRouting Rules:\n- `app/page.tsx` maps to `/` (Home page)\n- `app/about/page.tsx` maps to `/about`\n- `app/contact/page.tsx` maps to `/contact`\n- `app/dashboard/settings/page.tsx` maps to `/dashboard/settings`\n\nOnly folders containing a `page.tsx` file are publicly accessible URL routes.',
      km: 'Next.js ប្រើ **File-system based router** ដែលបង្កើត Route តាម Folder។\n\nវិធាន Routing៖\n- `app/page.tsx` ស្មើនឹង Route `/` (ទំព័រដើម)\n- `app/about/page.tsx` ស្មើនឹង Route `/about`\n- `app/contact/page.tsx` ស្មើនឹង Route `/contact`\n- `app/dashboard/settings/page.tsx` ស្មើនឹង Route `/dashboard/settings`\n\nលុះត្រាតែ Folder មាន File `page.tsx` ទើបអាចចូលមើលតាម URL ក្នុង Browser បាន។'
    },
    tutorial: {
      en: 'Creating a new route `/courses`:\n1. Create a folder inside `app/` named `courses`.\n2. Inside `app/courses/`, create `page.tsx`.\n3. Export a default React Component from `page.tsx`.\n4. Navigate to `http://localhost:3000/courses`.',
      km: 'របៀបបង្កើត Route ថ្មី `/courses`៖\n១. បង្កើត Folder ឈ្មោះ `courses` ខាងក្នុង `app/`\n២. បង្កើត File `page.tsx` ក្នុង `app/courses/`\n៣. Export Default React Component ពី `page.tsx`\n៤. បើកមើលតាម Browser៖ `http://localhost:3000/courses`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .route-card { background: #0f172a; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; margin-bottom: 8px; }
    .url { color: #22c55e; font-family: monospace; font-weight: bold; }
    .file { color: #38bdf8; font-family: monospace; }
  </style>
</head>
<body>
  <h3>Next.js Route Mapping Table</h3>
  <div class="route-card">
    <span class="file">app/page.tsx</span> ➔ <span class="url">/</span>
  </div>
  <div class="route-card">
    <span class="file">app/about/page.tsx</span> ➔ <span class="url">/about</span>
  </div>
  <div class="route-card">
    <span class="file">app/blog/page.tsx</span> ➔ <span class="url">/blog</span>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'You can organize internal subcomponents (e.g. `Card.tsx`) directly inside a route folder without exposing them as URLs, as long as they are NOT named `page.tsx`.',
        km: 'អ្នកអាចដាក់ Component បន្ថែម (ដូចជា `Card.tsx`) ក្នុង Route Folder បានដោយមិនបារម្ភថាវាបែកជា URL ឡើយ ប្រសិនបើវាមិនមែនឈ្មោះ `page.tsx`។'
      },
      code: `// File Path: app/about/page.tsx (Server Component)
export default function AboutPage() {
  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h1>About SabayCode Academy</h1>
      <p>Empowering Cambodian developers with real tech skills.</p>
    </div>
  );
}

// URL Route: http://localhost:3000/about
// Resulting UI: Rendered <h1> & <p> tags`
    },
    practiceExercise: {
      question: {
        en: 'Given the file path `app/products/featured/page.tsx`, what URL path does this route serve?',
        km: 'បើមាន File Path ត្រង់ `app/products/featured/page.tsx` តើវាត្រូវនឹង URL Path មួយណា?'
      },
      solution: '/products/featured'
    },
    quizQuestions: [
      {
        id: 'q-next-2-1',
        question: {
          en: 'Given folder structure `app/services/web/page.tsx`, what URL corresponds to this file?',
          km: 'តើ File `app/services/web/page.tsx` ត្រូវនឹង URL មួយណា?'
        },
        options: [
          { id: '1', text: { en: '/services/web', km: '/services/web' }, isCorrect: true },
          { id: '2', text: { en: '/services/web/page', km: '/services/web/page' }, isCorrect: false },
          { id: '3', text: { en: '/app/services/web', km: '/app/services/web' }, isCorrect: false }
        ],
        explanation: {
          en: 'The `app` prefix and `page.tsx` file suffix are stripped to form the clean URL path `/services/web`.',
          km: '`app/` និង `page.tsx` ត្រូវលុបចេញ ដោយទុកតែ URL Path ស្អាតគឺ `/services/web`។'
        }
      }
    ]
  },
  {
    id: 'next-hub-2-2',
    slug: 'nested-routes-and-layouts',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: {
      en: '2.2 Nested Routes & Shared layout.tsx',
      km: '2.2 Nested Routes & ការប្រើប្រាស់ Shared layout.tsx'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'A **layout** (`layout.tsx`) is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not re-render.\n\nRoot Layout (`app/layout.tsx`):\n- Required at top level. Defines `<html>` and `<body>` tags.\n- Wraps all pages in the app.\n\nNested Layout (`app/dashboard/layout.tsx`):\n- Shared specifically for pages under `/dashboard/...`. Received page via `{children}` prop.',
      km: '**Layout** (`layout.tsx`) គឺជា UI ដែលត្រូវបានចែករំលែកប្រើប្រាស់រវាងទំព័រច្រើន។ ពេលប្តូរ Route, Layout មិន Re-render ឡើយ ដោយរក្សា State និង Performance។\n\nRoot Layout (`app/layout.tsx`)៖\n- ចាំបាច់ត្រូវតែមាន ដើម្បីផ្ទុក `<html>` និង `<body>`\n\nNested Layout (`app/dashboard/layout.tsx`)៖\n- ចែករំលែក UI (ដូចជា Sidebar) សម្រាប់តែទំព័រខាងក្នុង `/dashboard/...` ដោយទទួលទំព័រកូនតាមរយៈ `{children}` prop'
    },
    tutorial: {
      en: 'Creating a Dashboard Nested Layout:\n1. Create `app/dashboard/layout.tsx`.\n2. Receive `{ children }: { children: React.ReactNode }` as props.\n3. Render a Sidebar navigation alongside `{children}`.\n4. All sub-pages (`app/dashboard/analytics/page.tsx`) automatically render inside the layout.',
      km: 'របៀបបង្កើត Dashboard Nested Layout៖\n១. បង្កើត File `app/dashboard/layout.tsx`\n២. ទទួល `{ children }` ជា props\n៣. បង្ហាញ Sidebar អមជាមួយ `{children}`\n៤. ទំព័រកូនៗទាំងអស់ក្នុង dashboard នឹងបង្ហាញក្នុង Layout នោះដោយស្វ័យប្រវត្តិ'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .layout { display: flex; gap: 16px; border: 1px solid #3b82f6; p: 12px; border-radius: 12px; }
    .sidebar { width: 120px; background: #1e293b; padding: 12px; border-radius: 8px; font-size: 12px; }
    .content { flex: 1; background: #0f172a; padding: 12px; border-radius: 8px; border: 1px dashed #38bdf8; }
  </style>
</head>
<body>
  <h3>Dashboard Nested Layout Pattern</h3>
  <div class="layout">
    <div class="sidebar">📌 Sidebar Nav<br>(Persists on route change)</div>
    <div class="content">📄 {children}<br>(Replaces page component)</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Nested layouts eliminate duplicated Header/Sidebar components across 50+ admin pages and prevent distracting full-page re-renders during navigation.',
        km: 'Nested Layout ជួយកាត់បន្ថយការសរសេរ Header/Sidebar ដដែលៗរាប់សិបទំព័រ និងជួយឱ្យការរមូរឬប្តូរទំព័រមានភាពរលូនបំផុត។'
      },
      code: `// File Path: app/dashboard/layout.tsx (Server Component)
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '240px', background: '#0f172a', color: 'white', padding: '1rem' }}>
        <h3>Dashboard Sidebar</h3>
      </aside>
      <main style={{ flex: 1, padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'What required React prop must every Next.js `layout.tsx` accept to render child pages?',
        km: 'តើ React Prop ចាំបាច់មួយណាដែល `layout.tsx` ត្រូវតែទទួលដើម្បីបង្ហាញទំព័រកូនៗ?'
      },
      solution: 'children (React.ReactNode)'
    },
    quizQuestions: [
      {
        id: 'q-next-2-2',
        question: {
          en: 'Does a Next.js `layout.tsx` component re-render when a user navigates between sibling child pages?',
          km: 'តើ `layout.tsx` ត្រូវ Re-render ឡើងវិញឬទេ នៅពេលអ្នកប្រើប្រាស់ប្តូរទំព័រកូនៗក្នុង Route ជាមួយគ្នា?'
        },
        options: [
          { id: '1', text: { en: 'No, layouts preserve state and do not re-render', km: 'ទេ, Layout រក្សា State និងមិន Re-render ឡើយ' }, isCorrect: true },
          { id: '2', text: { en: 'Yes, layouts completely unmount and remount', km: 'បាទ/ចាស, Layout ត្រូវ Unmount ឡើងវិញ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Layouts preserve their state and interactive DOM tree across route changes.',
          km: 'Layouts រក្សា State និង DOM ដោយមិន Re-render ឡើងវិញឡើយ។'
        }
      }
    ]
  },
  {
    id: 'next-hub-2-3',
    slug: 'dynamic-routes-bracket-syntax',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: {
      en: '2.3 Dynamic Routes ([slug], [id])',
      km: '2.3 Dynamic Routes ជាមួយ Bracket Syntax ([slug], [id])'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'When route paths are not static (e.g. blog post slugs or product IDs), use dynamic segment brackets `[param]`.\n\nFolder Syntax:\n- `app/blog/[slug]/page.tsx` matches `/blog/hello-world`, `/blog/react-guide`\n- `app/shop/[id]/page.tsx` matches `/shop/101`, `/shop/202`\n\nThe route parameters are passed as a `params` object prop to your `page.tsx` component as a Promise in Next.js 15 (`await params`).',
      km: 'នៅពេល Path មិនមែនជា Static Text (ដូចជា Blog Slugs ឬ Product IDs), យើងត្រូវប្រើ Bracket Syntax `[param]`។\n\nទម្រង់ Folder Syntax៖\n- `app/blog/[slug]/page.tsx` ត្រូវនឹង `/blog/hello-world`, `/blog/react-guide`\n- `app/shop/[id]/page.tsx` ត្រូវនឹង `/shop/101`, `/shop/202`\n\nParameters ត្រូវបាញ់មកកាន់ `page.tsx` តាមរយៈ `params` object prop។'
    },
    tutorial: {
      en: 'Building a dynamic blog route:\n1. Create folder `app/blog/[slug]/`.\n2. Inside `app/blog/[slug]/`, create `page.tsx`.\n3. Type props: `{ params }: { params: Promise<{ slug: string }> }`.\n4. Access parameter: `const { slug } = await params;`.',
      km: 'របៀបបង្កើត Dynamic Blog Route៖\n១. បង្កើត Folder `app/blog/[slug]/`\n២. បង្កើត `page.tsx` ខាងក្នុង `app/blog/[slug]/`\n៣. កំណត់ Type៖ `{ params }: { params: Promise<{ slug: string }> }`\n៤. ទាញយក Parameter៖ `const { slug } = await params;`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #38bdf8; padding: 20px; }
    .param { color: #f59e0b; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Dynamic Route URL Resolution</h3>
  <p>URL Request: <code>/blog/<span class="param">nextjs-complete-guide</span></code></p>
  <p>Mapped File: <code>app/blog/<span class="param">[slug]</span>/page.tsx</code></p>
  <p>Extracted params object: <code>{ slug: "<span class="param">nextjs-complete-guide</span>" }</code></p>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Dynamic routes allow a single `page.tsx` file to dynamically render millions of product pages or articles based on database IDs/slugs.',
        km: 'Dynamic Routes អនុញ្ញាតឱ្យ File `page.tsx` តែមួយ អាចបង្ហាញទំព័រប្លុក ឬ ទំនិញរាប់ពាន់បានយ៉ាងងាយស្រួលតាម Database IDs។'
      },
      code: `// File Path: app/blog/[slug]/page.tsx (Server Component)
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <article style={{ padding: '2rem', color: 'white' }}>
      <h1>Post Title: {slug}</h1>
      <p>Reading dynamic blog article for slug: {slug}</p>
    </article>
  );
}

// URL Route requested: http://localhost:3000/blog/mastering-nextjs
// Rendered output: <h1>Post Title: mastering-nextjs</h1>`
    },
    practiceExercise: {
      question: {
        en: 'If you create a file at `app/users/[userId]/profile/page.tsx`, what URL corresponds to user ID 42?',
        km: 'បើបង្កើត File ត្រង់ `app/users/[userId]/profile/page.tsx` តើ URL មួយណាសម្រាប់ User ID 42?'
      },
      solution: '/users/42/profile'
    },
    quizQuestions: [
      {
        id: 'q-next-2-3',
        question: {
          en: 'How are dynamic route parameters defined in Next.js App Router folder names?',
          km: 'តើការកំណត់ Dynamic Route Parameter ក្នុង Folder Name ត្រូវប្រើប្រាស់សញ្ញាអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'Square brackets, e.g. [slug]', km: 'សញ្ញាវង់ក្រចកជ្រុង [slug]' }, isCorrect: true },
          { id: '2', text: { en: 'Colon prefix, e.g. :slug', km: 'សញ្ញាចុចពីរ :slug' }, isCorrect: false },
          { id: '3', text: { en: 'Dollar prefix, e.g. $slug', km: 'សញ្ញាហ្វ្រង់ $slug' }, isCorrect: false }
        ],
        explanation: {
          en: 'Next.js folder naming convention uses square brackets `[slug]` for dynamic segments.',
          km: 'ក្បួនបង្កើត Folder របស់ Next.js គឺប្រើប្រាស់វង់ក្រចកជ្រុង `[slug]`។'
        }
      }
    ]
  },
  {
    id: 'next-hub-2-4',
    slug: 'link-component-and-navigation',
    moduleNumber: 2,
    lessonNumberInModule: 4,
    title: {
      en: '2.4 The <Link> Component & Client Navigation',
      km: '2.4 ការប្រើប្រាស់ <Link> Component & Client Navigation'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'In Next.js, always use `<Link href="...">` from `next/link` instead of raw HTML `<a>` tags for internal navigation.\n\nWhy `<Link>` is essential:\n1. Prefetches page code in the background when links enter the viewport.\n2. Performs client-side navigation without full browser page reloads.\n3. Preserves client application state and React component tree.',
      km: 'ក្នុង Next.js ត្រូវប្រើ `<Link href="...">` ពី `next/link` ជាដាច់ខាត ជំនួសឲ្យ HTML Tag `<a>` សម្រាប់ Link ផ្ទៃក្នុង App។\n\nហេតុអ្វីត្រូវប្រើ `<Link>`៖\n១. Prefetch កូដទំព័របន្ទាប់ទុកជាមុន ពេល Link បង្ហាញលើ Screen\n២. ធ្វើការផ្លាស់ប្តូរទំព័រលើ Client ដោយមិនបាច់ Reload Browser ឡើយ\n៣. រក្សា State និង React Component Tree'
    },
    tutorial: {
      en: 'Using `<Link>` in Next.js:\n1. Import: `import Link from "next/link";`\n2. Usage: `<Link href="/dashboard">Go to Dashboard</Link>`\n3. Programmatic Navigation in Client Components: `import { useRouter } from "next/navigation"; const router = useRouter(); router.push("/about");`.',
      km: 'របៀបប្រើប្រាស់ `<Link>` ក្នុង Next.js៖\n១. Import៖ `import Link from "next/link";`\n២. ការប្រើប្រាស់៖ `<Link href="/dashboard">ទៅកាន់ Dashboard</Link>`\n៣. ប្រើប្រាស់ Programmatic Navigation ក្នុង Client Component៖ `import { useRouter } from "next/navigation"; const router = useRouter(); router.push("/about");`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .nav { display: flex; gap: 12px; background: #0f172a; padding: 12px; border-radius: 8px; border: 1px solid #1e293b; }
    .link { color: #38bdf8; text-decoration: none; font-weight: bold; }
    .badge { background: #059669; font-size: 10px; padding: 2px 6px; border-radius: 4px; color: white; }
  </style>
</head>
<body>
  <h3>Next.js Navigation Header</h3>
  <div class="nav">
    <a class="link" href="#">Home</a>
    <a class="link" href="#">About <span class="badge">Prefetched</span></a>
    <a class="link" href="#">Contact</a>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Using regular `<a>` tags causes full page refreshes, discarding audio/video playback or active form inputs. `<Link>` ensures instant, seamless single-page transition.',
        km: 'ការប្រើប្រាស់ `<a>` Tag ធម្មតា បណ្តាលឱ្យទំព័រ Reload ទាំងមូល បាត់បង់ State។ `<Link>` ជួយឱ្យការប្តូរទំព័ររហ័សទាន់ចិត្ត។'
      },
      code: `// File Path: app/components/Navbar.tsx (Server Component)
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#0f172a' }}>
      <Link href="/" style={{ color: '#38bdf8' }}>Home</Link>
      <Link href="/courses" style={{ color: '#38bdf8' }}>Courses</Link>
      <Link href="/dashboard" style={{ color: '#38bdf8' }}>Dashboard</Link>
    </nav>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'Which package export should you import `useRouter` from in the Next.js App Router?',
        km: 'តើត្រូវ Import `useRouter` ពី Package មួយណា ក្នុង Next.js App Router?'
      },
      solution: 'next/navigation (NOT next/router)'
    },
    quizQuestions: [
      {
        id: 'q-next-2-4',
        question: {
          en: 'Why is `<Link>` preferred over standard HTML `<a>` tags for internal routing in Next.js?',
          km: 'ហេតុអ្វីបានជាគេនិយមប្រើ `<Link>` ជាង `<a>` Tag ធម្មតាសម្រាប់ការរុករកទំព័រក្នុង Next.js?'
        },
        options: [
          { id: '1', text: { en: 'It performs client-side navigation & route prefetching', km: 'វាធ្វើការផ្លាស់ប្តូរទំព័រលើ Client & Prefetch Route ទុកជាមុន' }, isCorrect: true },
          { id: '2', text: { en: 'It opens external URLs faster', km: 'វាបើក URL ខាងក្រៅបានលឿនជាង' }, isCorrect: false }
        ],
        explanation: {
          en: '`<Link>` enables single-page client transitions and automatically prefetches linked routes.',
          km: '`<Link>` អនុញ្ញាតឱ្យផ្លាស់ប្តូរទំព័រលើ Client ដោយមិន Reload ឡើយ។'
        }
      }
    ]
  },

  // Module 3 — Server Components & Client Components
  {
    id: 'next-hub-3-1',
    slug: 'what-are-server-components',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: {
      en: '3.1 React Server Components (RSC) Default',
      km: '3.1 ស្វែងយល់ពី React Server Components (RSC) ជា Default'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'In the Next.js App Router, all components inside `app/` are **React Server Components (RSC) by default**.\n\nKey Benefits:\n1. Zero Client JS Bundle: Server Components execute strictly on the server; their code/dependencies are never sent to the browser.\n2. Direct Access to Backend: Can query databases, read server file systems, or call internal APIs securely without secret keys leaking to the client.\n3. Automatic Code Splitting.',
      km: 'ក្នុង Next.js App Router, Components ទាំងអស់ក្នុង `app/` គឺអភិវឌ្ឍជា **React Server Components (RSC) ដោយស្វ័យប្រវត្តិ**។\n\nអត្ថប្រយោជន៍ចម្បង៖\n១. Zero Client JS Bundle: Server Components រត់លើ Server តែមួយមុខ កូដ/Libraries មិនត្រូវផ្ញើទៅ Browser ឡើយ\n២. ភ្ជាប់ទៅកាន់ Backend ដោយផ្ទាល់៖ អាច Query Database, Read Files, ប្រើ API Keys ដោយសុវត្ថិភាព\n៣. មាន Automatic Code Splitting ស្រាប់'
    },
    tutorial: {
      en: 'How Server Components work:\n1. Component function runs on Node.js server.\n2. Generates HTML & UI description trees.\n3. Sends streamable HTML to browser.\n4. Limitations: Cannot use React hooks (`useState`, `useEffect`) or browser DOM APIs (`window`, `localStorage`).',
      km: 'របៀបធ្វើការរបស់ Server Components៖\n១. Function រត់លើ Node.js Server\n២. បង្កើត HTML & UI Trees\n៣. ផ្ញើ HTML Stream ទៅ Browser\n៤. ការកម្រិត៖ មិនអាចប្រើប្រាស់ React Hooks (`useState`, `useEffect`) ឬ Browser APIs (`window`, `localStorage`) ឡើយ'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .box { background: #0f172a; border: 1px solid #10b981; padding: 16px; border-radius: 12px; }
    .tag { background: #059669; color: white; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="box">
    <span class="tag">SERVER COMPONENT (DEFAULT)</span>
    <h3>Direct DB & Secret Key Access</h3>
    <p>Executes 100% on Server • 0kb Client Bundle Cost</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'If you import a 100KB markdown parsing library inside a Server Component, 0KB of that library gets sent to the user browser, dramatically speeding up mobile page load.',
        km: 'ប្រសិនបើអ្នក Import Library ធំក្នុង Server Component, កូដ Library នោះ 0KB នឹងត្រូវផ្ញើទៅកាន់ Browser របស់ទូរស័ព្ទដៃ ធ្វើឱ្យ App រត់លឿនបំផុត។'
      },
      code: `// File Path: app/users/page.tsx (Server Component - Default)
// No "use client" directive here!

export default async function UsersPage() {
  // Directly read secret or fetch server data safely
  const apiKey = process.env.DATABASE_SECRET_KEY;
  const users = [ { id: 1, name: 'Sopheak' }, { id: 2, name: 'Bopha' } ];

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h2>Registered Platform Users</h2>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'Can you use `useEffect` inside a default Next.js App Router Server Component?',
        km: 'តើអ្នកអាចប្រើប្រាស់ `useEffect` ខាងក្នុង Server Component បានឬទេ?'
      },
      solution: 'No. React Hooks like `useEffect` and `useState` require Client Component boundary ("use client").'
    },
    quizQuestions: [
      {
        id: 'q-next-3-1',
        question: {
          en: 'What is the client bundle size cost for dependencies imported strictly inside a React Server Component?',
          km: 'តើទំហំ Client Bundle Cost នៃ Library ដែល Import ក្នុង React Server Component ស្មើនឹងប៉ុន្មាន?'
        },
        options: [
          { id: '1', text: { en: 'Zero (0 KB sent to client)', km: 'សូន្យ (0 KB ផ្ញើទៅ Client)' }, isCorrect: true },
          { id: '2', text: { en: 'Full library size in main bundle', km: 'ទំហំ Library ទាំងមូល' }, isCorrect: false }
        ],
        explanation: {
          en: 'Server Component code and dependencies execute on the server and are stripped from the client JavaScript bundle.',
          km: 'Server Components រត់លើ Server ដូច្នេះវាមិនចំណាយទំហំ Client JavaScript Bundle ឡើយ។'
        }
      }
    ]
  },
  {
    id: 'next-hub-3-2',
    slug: 'client-components-use-client',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: {
      en: '3.2 Client Components with "use client"',
      km: '3.2 ការបង្កើត Client Components ដោយប្រើ "use client"'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'When your component requires interactivity, browser APIs, or state management, you must explicitly declare it as a **Client Component** using the `"use client";` directive at the very top of the file.\n\nWhen to use Client Components:\n- Interactivity: Event listeners (`onClick`, `onChange`, `onSubmit`).\n- React Hooks: `useState`, `useReducer`, `useEffect`, `useContext`.\n- Browser APIs: `localStorage`, `navigator`, `window`, geolocation.',
      km: 'នៅពេល Component របស់អ្នកត្រូវការ Interactivity, Browser APIs, ឬ State Management, អ្នកត្រូវតែប្រកាសជា **Client Component** ដោយដាក់ Directive `"use client";` នៅជួរលើគេបង្អស់នៃ File។\n\nពេលណាត្រូវប្រើ Client Components៖\n- Interactivity៖ Event listeners (`onClick`, `onChange`)\n- React Hooks៖ `useState`, `useEffect`, `useContext`\n- Browser APIs៖ `localStorage`, `window`'
    },
    tutorial: {
      en: 'Creating an Interactive Counter Client Component:\n1. Top line of file MUST be `"use client";`.\n2. Import React hooks normally: `import { useState } from "react";`.\n3. Implement state and click event handlers.\n4. Embed the Client Component inside any Server Component page.',
      km: 'របៀបបង្កើត Interactive Counter Client Component៖\n១. ជួរទី ១ នៃ File ត្រូវតែជា `"use client";`\n២. Import React hooks៖ `import { useState } from "react";`\n៣. បង្កើត State និង Click handlers\n៤. យក Client Component ទៅប្រើប្រាស់ក្នុង Server Component ទំព័រណាក៏បាន'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .box { background: #0f172a; border: 1px solid #38bdf8; padding: 16px; border-radius: 12px; }
    .btn { background: #2563eb; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <div class="box">
    <p style="color:#38bdf8; font-family:monospace;">"use client";</p>
    <h3>Interactive Like Button</h3>
    <button class="btn">❤️ Likes: 12</button>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Keep Client Components as small as possible at the leaves of your component tree to maximize server rendering benefits and minimize JS bundle size.',
        km: 'ព្យាយាមបង្កើត Client Components ឱ្យមានទំហំតូចបំផុតនៅចុងបំផុតនៃ Component Tree ដើម្បីទទួលបានប្រយោជន៍ពី Server Rendering ឱ្យបានច្រើនបំផុត។'
      },
      code: `// File Path: app/components/LikeButton.tsx (Client Component)
"use client";

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button 
      onClick={() => setLikes(likes + 1)}
      style={{ background: '#ec4899', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
    >
      ❤️ {likes} Likes
    </button>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'Where exactly must the `"use client"` directive be placed in a file?',
        km: 'តើ Directive `"use client"` ត្រូវស្ថិតនៅទីតាំងណាពិតប្រាកដក្នុង File?'
      },
      solution: 'At the very top of the file, before any import statements.'
    },
    quizQuestions: [
      {
        id: 'q-next-3-2',
        question: {
          en: 'Which directive statement transforms a Next.js component into an interactive Client Component?',
          km: 'តើ Directive Statement មួយណាដែលផ្លាស់ប្តូរ Next.js Component ទៅជា Client Component?'
        },
        options: [
          { id: '1', text: { en: '"use client";', km: '"use client";' }, isCorrect: true },
          { id: '2', text: { en: '"use browser";', km: '"use browser";' }, isCorrect: false },
          { id: '3', text: { en: '"use client-side";', km: '"use client-side";' }, isCorrect: false }
        ],
        explanation: {
          en: '`"use client";` is the official React directive used to mark the server-client boundary.',
          km: '`"use client";` គឺជា Directive ផ្លូវការសម្រាប់កំណត់ព្រំដែន Client Component។'
        }
      }
    ]
  },
  {
    id: 'next-hub-3-3',
    slug: 'mixing-server-and-client-components',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: {
      en: '3.3 Mixing Server & Client Components (Composition)',
      km: '3.3 ការប្រើប្រាស់ចម្រុះរវាង Server និង Client Components'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Next.js allows seamless composition of Server and Client Components.\n\nComposition Rules:\n1. Server Components can import and render Client Components directly.\n2. Client Components CANNOT import Server Components directly (doing so turns the Server Component into a Client Component).\n3. To pass a Server Component inside a Client Component, pass it as a `{children}` prop!',
      km: 'Next.js អនុញ្ញាតឱ្យប្រើប្រាស់ផ្គុំគ្នារវាង Server និង Client Components។\n\nវិធានផ្គុំ Component (Composition Rules)៖\n១. Server Component អាច Import និង Render Client Component បានដោយផ្ទាល់\n២. Client Component មិនអាច Import Server Component បានដោយផ្ទាល់ឡើយ\n៣. ដើម្បីបញ្ជូន Server Component ទៅក្នុង Client Component ត្រូវបញ្ជូនតាមរយៈ `{children}` prop'
    },
    tutorial: {
      en: 'Passing Server Component as children to a Client Component:\n1. Create Client Wrapper: `app/components/Modal.tsx` (`"use client"`).\n2. Accept `{ children }: { children: React.ReactNode }`.\n3. Server Page (`app/page.tsx`) imports `<Modal>` and nests `<ServerFetchedList />` inside it as children.',
      km: 'របៀបបញ្ជូន Server Component ជា children ទៅឱ្យ Client Component៖\n១. បង្កើត Client Wrapper៖ `app/components/Modal.tsx` (`"use client"`)\n២. ទទួល `{ children }`\n៣. ទំព័រ Server Page (`app/page.tsx`) Import `<Modal>` ហើយដាក់ `<ServerFetchedList />` ជា children ខាងក្នុង'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .client-card { border: 2px solid #38bdf8; padding: 12px; border-radius: 12px; background: #0f172a; }
    .server-card { border: 2px dashed #10b981; padding: 12px; margin-top: 8px; border-radius: 8px; background: #020617; }
  </style>
</head>
<body>
  <h3>Component Composition Diagram</h3>
  <div class="client-card">
    <strong style="color:#38bdf8;">Client Component Container ("use client")</strong>
    <div class="server-card">
      <strong style="color:#10b981;">Server Component (Passed via {children} prop)</strong>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'This pattern allows complex interactive elements (like a sliding modal or theme provider) to wrap heavy server-rendered content without making the entire subtree a Client Component.',
        km: 'លំនាំនេះអនុញ្ញាតឱ្យ Interactive UI (ដូចជា Modal ឬ Theme Provider) អាចរុំពីលើ កូដ Server Content ដោយមិនចាំបាច់ប្តូរកូដទាំងមូលទៅជា Client Component ឡើយ។'
      },
      code: `// File Path: app/components/CardContainer.tsx (Client Component)
"use client";
import { useState } from 'react';

export default function CardContainer({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div style={{ border: '1px solid #334155', borderRadius: '12px', padding: '1rem' }}>
      <button onClick={() => setCollapsed(!collapsed)}>Toggle View</button>
      {!collapsed && <div>{children}</div>}
    </div>
  );
}

// File Path: app/page.tsx (Server Component)
import CardContainer from './components/CardContainer';
import ServerArticle from './components/ServerArticle';

export default function HomePage() {
  return (
    <CardContainer>
      <ServerArticle /> {/* Passed as children prop safely! */}
    </CardContainer>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'How can a Client Component contain and render a React Server Component without forcing it to become a Client Component?',
        km: 'តើ Client Component អាចផ្ទុក និង Render Server Component ដោយរបៀបណា ដោយមិនធ្វើឱ្យវាប្រែជា Client Component?'
      },
      solution: 'Pass the Server Component as a `{children}` prop to the Client Component.'
    },
    quizQuestions: [
      {
        id: 'q-next-3-3',
        question: {
          en: 'Can a Client Component directly import a Server Component file at the top of its module?',
          km: 'តើ Client Component អាច Import File របស់ Server Component ដោយផ្ទាល់នៅជួរខាងលើបានឬទេ?'
        },
        options: [
          { id: '1', text: { en: 'No, it must be passed via props/children', km: 'ទេ, វាត្រូវតែបញ្ជូនតាមរយៈ props/children' }, isCorrect: true },
          { id: '2', text: { en: 'Yes, without any restrictions', km: 'បាទ/ចាស, អាចធ្វើបានដោយគ្មានការកម្រិត' }, isCorrect: false }
        ],
        explanation: {
          en: 'Directly importing a Server Component inside a Client Component converts the imported component into a Client Component.',
          km: 'ការ Import ដោយផ្ទាល់នឹងធ្វើឱ្យ Server Component នោះប្រែទៅជា Client Component។'
        }
      }
    ]
  },

  // Module 4 — Data Fetching
  {
    id: 'next-hub-4-1',
    slug: 'fetching-data-in-server-components',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: {
      en: '4.1 Data Fetching inside Server Components',
      km: '4.1 ការទាញយកទិន្នន័យ Data Fetching ក្នុង Server Components'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Next.js extends the native Web `fetch()` API directly inside async Server Components.\n\nKey Advantages:\n- Use standard `async`/`await` syntax directly in your component function.\n- No need for `useEffect`, `useState`, or third-party libraries (`axios`, `react-query`) for basic GET requests.\n- Executes on the server close to database resources, eliminating client-side roundtrip waterfalls.',
      km: 'Next.js ពង្រីកសមត្ថភាពលើ `fetch()` API ដោយផ្ទាល់ខាងក្នុង async Server Components។\n\nអត្ថប្រយោជន៍សំខាន់ៗ៖\n- ប្រើប្រាស់ `async`/`await` ដោយផ្ទាល់ក្នុង Component Function\n- មិនបាច់ប្រើ `useEffect`, `useState` ឬ Third-party libraries (`axios`) សម្រាប់ទាញយក Data ឡើយ\n- រត់លើ Server ក្បែរ Database ជួយកាត់បន្ថយពេលវេលារង់ចាំ'
    },
    tutorial: {
      en: 'Data Fetching Pattern in Server Components:\n1. Make component `async`: `export default async function ProductPage() {}`.\n2. Fetch data: `const res = await fetch("https://api.example.com/products");`.\n3. Parse JSON: `const products = await res.json();`.\n4. Render data in JSX immediately.',
      km: 'របៀប Data Fetching ក្នុង Server Components៖\n១. ប្រកាស Component ជា `async`៖ `export default async function ProductPage() {}`\n២. Fetch ទិន្នន័យ៖ `const res = await fetch("https://api.example.com/products");`\n៣. បំប្លែងទៅជា JSON៖ `const products = await res.json();`\n៤. បង្ហាញ Data លើ JSX ភ្លាមៗ'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; margin-top: 8px; }
    .code { color: #38bdf8; }
  </style>
</head>
<body>
  <h3>Async Server Component Fetch</h3>
  <div class="card">
    <p class="code">export default async function PostsPage() {</p>
    <p style="padding-left:16px;">const posts = await fetch("...").then(r => r.json());</p>
    <p class="code">}</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'By fetching on the server, sensitive credentials or direct database connections remain hidden, and the client receives ready-to-render HTML.',
        km: 'ការ Fetch លើ Server ជួយលាក់បាំង Credentials ឬ Database Connections ដោយសុវត្ថិភាពខ្ពស់។'
      },
      code: `// File Path: app/posts/page.tsx (Server Component)
interface Post {
  id: number;
  title: string;
}

export default async function PostsPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const posts: Post[] = await response.json();

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h1>Latest Articles</h1>
      {posts.map(post => (
        <div key={post.id} style={{ background: '#0f172a', padding: '1rem', marginBottom: '8px', borderRadius: '8px' }}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'Do you need to use React `useEffect` to fetch data in a Next.js App Router Server Component?',
        km: 'តើអ្នកត្រូវប្រើ React `useEffect` ដើម្បី Fetch ទិន្នន័យ ក្នុង Next.js App Router Server Component ឬទេ?'
      },
      solution: 'No. Server Components are async functions that use await fetch() directly.'
    },
    quizQuestions: [
      {
        id: 'q-next-4-1',
        question: {
          en: 'How do you fetch data inside a Next.js Server Component?',
          km: 'តើអ្នកទាញយកទិន្នន័យក្នុង Next.js Server Component ដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'Directly using async/await and native fetch()', km: 'ប្រើប្រាស់ async/await និង native fetch() ដោយផ្ទាល់' }, isCorrect: true },
          { id: '2', text: { en: 'Inside useEffect hook only', km: 'ប្រើក្នុង useEffect hook តែមួយមុខ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Server Components can be declared as `async` functions to `await fetch()` directly.',
          km: 'Server Components អាចប្រកាសជា `async` ដើមី្ប `await fetch()` ដោយផ្ទាល់។'
        }
      }
    ]
  },
  {
    id: 'next-hub-4-2',
    slug: 'caching-and-revalidation',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: {
      en: '4.2 Caching & Revalidation Model of fetch()',
      km: '4.2 ស្វែងយល់ពី Caching & Revalidation ក្នុង fetch()'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Next.js extends `fetch()` with caching options to optimize performance and server load.\n\nCaching Strategies:\n1. Force Cache (Default / Static): `fetch(url, { cache: "force-cache" })` - Caches request indefinitely.\n2. No Store (Dynamic): `fetch(url, { cache: "no-store" })` - Fetches fresh data on every request.\n3. Time-based Revalidation (ISR): `fetch(url, { next: { revalidate: 60 } })` - Revalidates cache every 60 seconds.',
      km: 'Next.js បន្ថែម Caching Options លើ `fetch()` ដើម្បីបង្កើនល្បឿន និងកាត់បន្ថយទម្ងន់ Server។\n\nយុទ្ធសាស្ត្រ Caching៖\n១. Force Cache (Default)៖ `fetch(url, { cache: "force-cache" })` - រក្សា Cache ជានិច្ច\n២. No Store (Dynamic)៖ `fetch(url, { cache: "no-store" })` - ទាញ Data ថ្មីរាល់ពេលមាន Request\n៣. Time-based Revalidation (ISR)៖ `fetch(url, { next: { revalidate: 60 } })` - អាប់ដេត Cache រៀងរាល់ ៦០ វិនាទី'
    },
    tutorial: {
      en: 'Setting Revalidation Options:\n1. Static fetch: `fetch("/api/data")` (cached).\n2. Dynamic fetch (real-time stock/prices): `fetch("/api/price", { cache: "no-store" })`.\n3. ISR fetch (blogs/news): `fetch("/api/news", { next: { revalidate: 3600 } })` (cached for 1 hour).',
      km: 'របៀបកំណត់ Revalidation Options៖\n១. Static fetch៖ `fetch("/api/data")` (រក្សាទុក Cache)\n២. Dynamic fetch (តម្លៃភាគហ៊ុន)៖ `fetch("/api/price", { cache: "no-store" })`\n៣. ISR fetch (ព័ត៌មាន/ប្លុក)៖ `fetch("/api/news", { next: { revalidate: 3600 } })` (អាប់ដេត दर ១ ម៉ោងម្តង)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .box { background: #0f172a; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; margin-bottom: 8px; }
    .opt { color: #f59e0b; }
  </style>
</head>
<body>
  <h3>Fetch Caching Options</h3>
  <div class="box">
    <code>fetch(url, { <span class="opt">next: { revalidate: 60 }</span> })</code><br>
    <small>Incremental Static Revalidation (Every 60s)</small>
  </div>
  <div class="box">
    <code>fetch(url, { <span class="opt">cache: 'no-store'</span> })</code><br>
    <small>Dynamic Request-time Fetch</small>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Incremental Static Revalidation (ISR) allows static blog pages to serve instantly from CDN cache while automatically updating background data every 60 seconds.',
        km: 'ISR អនុញ្ញាតឱ្យទំព័រប្លុកបង្ហាញលឿនបំផុតពី CDN Cache និងអាប់ដេតទិន្នន័យស្វ័យប្រវត្តិជារៀងរាល់ ៦០ វិនាទី។'
      },
      code: `// File Path: app/stock/page.tsx (Server Component - Dynamic)
export default async function StockPricePage() {
  // Always fetch live data on every request
  const res = await fetch('https://api.example.com/stock-price', {
    cache: 'no-store',
  });
  const data = await res.json();

  return (
    <div style={{ color: 'white', padding: '2rem' }}>
      <h2>Live Crypto Price</h2>
      <p>BTC/USD: \${data.price}</p>
    </div>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'What `fetch` option in Next.js configures Incremental Static Revalidation (ISR) to cache data for 120 seconds?',
        km: 'តើ Option មួយណា ក្នុង `fetch` ដែលកំណត់ ISR ឱ្យអាប់ដេត Cache រៀងរាល់ ១២០ វិនាទីម្ដង?'
      },
      solution: '{ next: { revalidate: 120 } }'
    },
    quizQuestions: [
      {
        id: 'q-next-4-2',
        question: {
          en: 'Which `fetch` option bypasses caching and fetches fresh data on every request in Next.js?',
          km: 'តើ `fetch` Option មួយណាដែលរំលង Cache ហើយទាញយក Data ថ្មីរាល់ពេលមាន Request?'
        },
        options: [
          { id: '1', text: { en: "cache: 'no-store'", km: "cache: 'no-store'" }, isCorrect: true },
          { id: '2', text: { en: "cache: 'force-cache'", km: "cache: 'force-cache'" }, isCorrect: false }
        ],
        explanation: {
          en: "`cache: 'no-store'` tells Next.js to fetch fresh data dynamically on every single request.",
          km: "`cache: 'no-store'` បញ្ជាឱ្យ Next.js ទាញយកទិន្នន័យថ្មីរាល់ពេលមាន Request។"
        }
      }
    ]
  },
  {
    id: 'next-hub-4-3',
    slug: 'passing-data-to-client-components',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: {
      en: '4.3 Passing Fetched Data to Client Components',
      km: '4.3 ការបញ្ជូនទិន្នន័យដែល Fetch រួចទៅកាន់ Client Components'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'A recommended pattern in Next.js is to **fetch data in a Server Component** and pass the result down as props to an interactive **Client Component**.\n\nWhy this pattern works best:\n1. Server Component handles secure fetching & database queries.\n2. Client Component receives serializable props (arrays, objects, strings, numbers) and manages UI interactivity (`onClick`, search filter state).',
      km: 'លំនាំដែលណែនាំបំផុតក្នុង Next.js គឺ **Fetch ទិន្នន័យក្នុង Server Component** រួចបញ្ជូនផលផ្លែដែលទទួលបាន ទៅកាន់ **Client Component** តាមរយៈ Props។\n\nហេតុអ្វីលំនាំនេះល្អបំផុត៖\n១. Server Component ទទួលខុសត្រូវ Fetch ទិន្នន័យប្រកបដោយសុវត្ថិភាព\n២. Client Component ទទួល Props (Objects, Arrays) ដើមី្បគ្រប់គ្រង Interactivity (`onClick`, filter state)'
    },
    tutorial: {
      en: 'Server-to-Client Prop Passing Flow:\n1. Server Page (`app/products/page.tsx`): `const products = await getProducts();`.\n2. Pass prop: `<ProductFilterList initialProducts={products} />`.\n3. Client Component (`app/products/ProductFilterList.tsx`): Declares `"use client"`, accepts `initialProducts` prop, and filters items using React state.',
      km: 'លំហូរនៃការបញ្ជូន Props ពី Server ទៅ Client៖\n១. Server Page (`app/products/page.tsx`)៖ `const products = await getProducts();`\n២. បញ្ជូន Props៖ `<ProductFilterList initialProducts={products} />`\n៣. Client Component (`ProductFilterList.tsx`)៖ ប្រកាស `"use client"`, ទទួល `initialProducts` prop ហើយ Filter តាម State'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .server { border: 1px solid #10b981; padding: 12px; border-radius: 8px; background: #0f172a; }
    .arrow { color: #f59e0b; font-weight: bold; text-align: center; margin: 8px 0; }
    .client { border: 1px solid #38bdf8; padding: 12px; border-radius: 8px; background: #0f172a; }
  </style>
</head>
<body>
  <div class="server">
    <strong style="color:#10b981;">1. Server Component</strong>
    <p>await fetchProducts();</p>
  </div>
  <div class="arrow">↓ Serialized Props</div>
  <div class="client">
    <strong style="color:#38bdf8;">2. Client Component ("use client")</strong>
    <p>&lt;ProductList products={products} /&gt;</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Props passed from Server to Client Components must be serializable (e.g. JSON strings, numbers, objects). You cannot pass functions or Class instances across the server-client boundary.',
        km: 'Props ដែលបញ្ជូនពី Server ទៅ Client ត្រូវតែជា Serializable Data (JSON)។ អ្នកមិនអាចបញ្ជូន Function ឬ Class instances ឆ្លងកាត់បានឡើយ។'
      },
      code: `// File Path: app/components/SearchableList.tsx (Client Component)
"use client";
import { useState } from 'react';

export default function SearchableList({ items }: { items: string[] }) {
  const [query, setQuery] = useState('');
  const filtered = items.filter(i => i.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input 
        type="text" 
        placeholder="Filter items..." 
        value={query} 
        onChange={e => setQuery(e.target.value)}
        style={{ padding: '8px', borderRadius: '4px', marginBottom: '12px' }}
      />
      <ul>{filtered.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
    </div>
  );
}

// File Path: app/items/page.tsx (Server Component)
import SearchableList from '../components/SearchableList';

export default async function ItemsPage() {
  const items = ['Next.js App Router', 'React Server Components', 'Tailwind CSS'];
  return <SearchableList items={items} />;
}`
    },
    practiceExercise: {
      question: {
        en: 'Can you pass a JavaScript function (e.g. `onClick` handler) as a prop from a Server Component to a Client Component?',
        km: 'តើអ្នកអាចបញ្ជូន JavaScript Function (ដូចជា `onClick` handler) ជា prop ពី Server Component ទៅកាន់ Client Component បានឬទេ?'
      },
      solution: 'No. Props passed across the server-client boundary must be JSON serializable.'
    },
    quizQuestions: [
      {
        id: 'q-next-4-3',
        question: {
          en: 'What type of data can be passed as props from a Server Component to a Client Component?',
          km: 'តើប្រភេទទិន្នន័យបែបណាដែល អាចបញ្ជូនជា props ពី Server Component ទៅ Client Component?'
        },
        options: [
          { id: '1', text: { en: 'JSON serializable data (objects, arrays, primitives)', km: 'ទិន្នន័យ JSON serializable (objects, arrays, numbers)' }, isCorrect: true },
          { id: '2', text: { en: 'Functions and DOM element references', km: 'Functions និង DOM element references' }, isCorrect: false }
        ],
        explanation: {
          en: 'Only serializable data can cross the network boundary between server rendering and client hydration.',
          km: 'មានតែទិន្នន័យប្រភេទ Serializable (JSON) ប៉ុណ្ណោះដែលអាចបញ្ជូនឆ្លងកាត់រវាង Server និង Client។'
        }
      }
    ]
  }
];
