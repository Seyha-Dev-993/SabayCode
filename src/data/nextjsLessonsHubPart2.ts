import { FrontendLesson } from '../types/frontendClass';

export const NEXTJS_HUB_LESSONS_PART2: FrontendLesson[] = [
  // Module 5 — Layouts, Templates & Metadata
  {
    id: 'next-hub-5-1',
    slug: 'root-vs-nested-layouts',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: {
      en: '5.1 Root Layout vs. Nested Layouts',
      km: '5.1 Root Layout និង Nested Layouts'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Layouts structure shared UI across routes in Next.js App Router.\n\nRoot Layout (`app/layout.tsx`):\n- Mandatory for every Next.js app.\n- Defines `<html>` and `<body>` tags and global providers.\n\nNested Layouts (`app/blog/layout.tsx`):\n- Applies exclusively to routes inside `app/blog/`.\n- Wraps child page components without modifying top-level HTML tags.',
      km: 'Layouts រៀបចំ UI រួមគ្នាឆ្លងកាត់ Routes ក្នុង Next.js App Router។\n\nRoot Layout (`app/layout.tsx`)៖\n- ចាំបាច់ដាច់ខាតសម្រាប់គ្រប់ Next.js App\n- កំណត់ `<html>`, `<body>` និង Global Providers\n\nNested Layouts (`app/blog/layout.tsx`)៖\n- អនុវត្តតែលើ Routes ខាងក្នុង `app/blog/` ប៉ុណ្ណោះ\n- រុំព័ទ្ធទំព័រកូនៗដោយមិនប្តូរ HTML Tag ជាន់លើឡើយ'
    },
    tutorial: {
      en: 'Root Layout vs Nested Layout Structure:\n1. `app/layout.tsx`: Returns `<html><body>{children}</body></html>`.\n2. `app/blog/layout.tsx`: Returns `<div className="blog-wrapper"><Header />{children}</div>`.\n3. Both nest together cleanly when viewing `/blog/first-post`.',
      km: 'រចនាសម្ព័ន្ធ Root Layout និង Nested Layout៖\n១. `app/layout.tsx`៖ បញ្ជូន `<html><body>{children}</body></html>`\n២. `app/blog/layout.tsx`៖ បញ្ជូន `<div className="blog-wrapper"><Header />{children}</div>`\n៣. បញ្ចូលគ្នាស្វ័យប្រវត្តិពេលចូលមើល `/blog/first-post`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .root { border: 2px solid #a855f7; padding: 12px; border-radius: 12px; }
    .nested { border: 2px dashed #38bdf8; padding: 12px; margin-top: 8px; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="root">
    <strong style="color:#a855f7;">Root Layout (&lt;html&gt; &lt;body&gt;)</strong>
    <div class="nested">
      <strong style="color:#38bdf8;">Nested Layout (Blog Header)</strong>
      <p>page.tsx ({children})</p>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Nested layouts allow individual sections of your app (e.g. `/admin`, `/docs`, `/shop`) to have custom headers or sidebars while inheriting main fonts and themes from the Root Layout.',
        km: 'Nested Layouts អនុញ្ញាតឱ្យផ្នែកផ្សេងៗនៃ App (ដូចជា `/admin` ឬ `/docs`) មាន Sidebar រៀងៗខ្លួន ដោយរក្សា Theme រួមពី Root Layout។'
      },
      code: `// File Path: app/blog/layout.tsx (Server Component)
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', color: 'white' }}>
      <header style={{ borderBottom: '1px solid #334155', paddingBottom: '1rem' }}>
        <h2> SabayCode Developer Blog</h2>
      </header>
      <main style={{ paddingTop: '1rem' }}>{children}</main>
    </div>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'Should a nested layout (`app/dashboard/layout.tsx`) include `<html>` and `<body>` tags?',
        km: 'តើ Nested Layout (`app/dashboard/layout.tsx`) ត្រូវមាន Tag `<html>` និង `<body>` ដែរឬទេ?'
      },
      solution: 'No. Only the Root Layout (`app/layout.tsx`) defines <html> and <body> tags.'
    },
    quizQuestions: [
      {
        id: 'q-next-5-1',
        question: {
          en: 'Where must `<html>` and `<body>` tags be defined in a Next.js App Router project?',
          km: 'តើ Tag `<html>` និង `<body>` ត្រូវកំណត់នៅទីណា ក្នុង Next.js App Router?'
        },
        options: [
          { id: '1', text: { en: 'In the Root Layout (app/layout.tsx) only', km: 'ក្នុង Root Layout (app/layout.tsx) តែមួយគត់' }, isCorrect: true },
          { id: '2', text: { en: 'Inside every single page.tsx file', km: 'ក្នុងគ្រប់ file page.tsx ទាំងអស់' }, isCorrect: false }
        ],
        explanation: {
          en: 'Only the top-level Root Layout renders the document `<html>` and `<body>` tags.',
          km: 'មានតែ Root Layout ប៉ុណ្ណោះដែលត្រូវកំណត់ `<html>` និង `<body>`។'
        }
      }
    ]
  },
  {
    id: 'next-hub-5-2',
    slug: 'loading-and-error-ui',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: {
      en: '5.2 Loading & Error UI Boundaries (loading.tsx, error.tsx)',
      km: '5.2 ការបង្កើត Loading & Error UI (loading.tsx, error.tsx)'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Next.js App Router provides special file conventions to handle async states automatically:\n\n1. `loading.tsx`: Creates an instant loading skeleton powered by React Suspense while page data is fetching.\n2. `error.tsx`: Creates an Error Boundary wrapper to catch runtime exceptions without crashing the entire application.',
      km: 'Next.js App Router មាន Special File Conventions សម្រាប់គ្រប់គ្រង Async States ដោយស្វ័យប្រវត្តិ៖\n\n១. `loading.tsx`៖ បង្កើត Loading Skeleton អមដោយ React Suspense អំឡុងពេលកំពុងទាញយក Data\n២. `error.tsx`៖ បង្កើត Error Boundary សម្រាប់ចាប់ Error ពេលមានបញ្ហា ដោយមិនឱ្យបែក App ទាំងមូលឡើយ'
    },
    tutorial: {
      en: 'Special File Boundaries:\n1. `app/dashboard/loading.tsx`: Default export returning spinner/skeleton.\n2. `app/dashboard/error.tsx`: MUST be a Client Component (`"use client"`). Accepts `{ error, reset }` props to allow retrying failed requests.',
      km: 'របៀបបង្កើត Special Files ៖\n១. `app/dashboard/loading.tsx`៖ Export Default UI Loading Spinner/Skeleton\n២. `app/dashboard/error.tsx`៖ ត្រូវតែជា Client Component (`"use client"`) ដោយទទួល `{ error, reset }` ដើមី្ប Retry'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .box { background: #0f172a; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; margin-bottom: 8px; }
    .spinner { color: #f59e0b; font-weight: bold; }
    .err { color: #ef4444; font-weight: bold; }
  </style>
</head>
<body>
  <h3>Special UI Files in App Router</h3>
  <div class="box">
    <span class="spinner">📄 loading.tsx</span> ➔ React Suspense Skeleton
  </div>
  <div class="box">
    <span class="err">📄 error.tsx</span> ➔ React Error Boundary ("use client")
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Instead of manually tracking `const [loading, setLoading] = useState(true)` on every route, Next.js instantly displays `loading.tsx` as soon as the user clicks a link.',
        km: 'ជំនួសឱ្យការសរសេរ State `loading` ដោយដៃគ្រប់ទំព័រ, Next.js នឹងបង្ហាញ `loading.tsx` ភ្លាមៗរាល់ពេលអ្នកប្រើប្រាស់ចុច Link។'
      },
      code: `// File Path: app/dashboard/error.tsx (Client Component - Required!)
"use client";

import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Captured App Error:', error);
  }, [error]);

  return (
    <div style={{ padding: '2rem', color: '#ef4444', textAlign: 'center' }}>
      <h2> Something went wrong!</h2>
      <button 
        onClick={() => reset()}
        style={{ background: '#2563eb', color: 'white', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
      >
        Try Again
      </button>
    </div>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'Why MUST `error.tsx` be declared as a Client Component with `"use client"`?',
        km: 'ហេតុអ្វីបានជា `error.tsx` ត្រូវតែប្រកាសជា Client Component ជាមួយ `"use client"`?'
      },
      solution: 'Because React Error Boundaries require client-side lifecycle catching and interactivity (like reset retries).'
    },
    quizQuestions: [
      {
        id: 'q-next-5-2',
        question: {
          en: 'Which file convention in Next.js App Router provides an instant fallback skeleton UI while page data is fetching?',
          km: 'តើ File Convention មួយណាដែលបង្ហាញ Loading Skeleton ភ្លាមៗអំឡុងពេល Fetching Data?'
        },
        options: [
          { id: '1', text: { en: 'loading.tsx', km: 'loading.tsx' }, isCorrect: true },
          { id: '2', text: { en: 'spinner.tsx', km: 'spinner.tsx' }, isCorrect: false },
          { id: '3', text: { en: 'fallback.tsx', km: 'fallback.tsx' }, isCorrect: false }
        ],
        explanation: {
          en: '`loading.tsx` automatically wraps the page in a React Suspense Boundary.',
          km: '`loading.tsx` រុំព័ទ្ធទំព័រក្នុង React Suspense Boundary ដោយស្វ័យប្រវត្តិ។'
        }
      }
    ]
  },
  {
    id: 'next-hub-5-3',
    slug: 'page-metadata-and-seo',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: {
      en: '5.3 Page Metadata for SEO (metadata & generateMetadata)',
      km: '5.3 ការកំណត់ Metadata សម្រាប់ SEO (metadata & generateMetadata)'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Next.js provides a built-in Metadata API to customize HTML `<head>` tags (`<title>`, `<meta description>`, OpenGraph cards for social sharing).\n\nTwo Ways to Define Metadata:\n1. Static Metadata: Export a `metadata` object from `layout.tsx` or `page.tsx`.\n2. Dynamic Metadata: Export an `async function generateMetadata({ params })` for dynamic routes.',
      km: 'Next.js មាន Metadata API ស្រាប់សម្រាប់កំណត់ HTML `<head>` tags (ដូចជា `<title>`, `<meta description>`, និង OpenGraph រូបភាព Share លើ Facebook/Telegram)។\n\nរបៀបកំណត់ Metadata ២ យ៉ាង៖\n១. Static Metadata៖ Export `metadata` object ពី `layout.tsx` ឬ `page.tsx`\n២. Dynamic Metadata៖ Export `async function generateMetadata({ params })` សម្រាប់ Dynamic Routes'
    },
    tutorial: {
      en: 'Configuring Metadata:\n1. Static: `export const metadata: Metadata = { title: "SabayCode Blog", description: "Learn Web Dev" };`.\n2. Dynamic: `export async function generateMetadata({ params }): Promise<Metadata> { const { slug } = await params; return { title: \`Post: \${slug}\` }; }`.',
      km: 'របៀបសរសេរ Metadata៖\n១. Static៖ `export const metadata: Metadata = { title: "SabayCode Blog" };`\n២. Dynamic៖ `export async function generateMetadata({ params }) { const { slug } = await params; return { title: slug }; }`'
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
  <h3>SEO Metadata API Export</h3>
  <div class="card">
    <p class="code">export const metadata: Metadata = {</p>
    <p style="padding-left:16px;">title: "SabayCode Academy",</p>
    <p style="padding-left:16px;">description: "Khmer Tech Education"</p>
    <p class="code">};</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Dynamic OpenGraph metadata guarantees that when a link is shared on Telegram or Facebook, the correct post title, description, and preview image appear in the share card.',
        km: 'Dynamic Metadata ធានាថាពេល Share Link លើ Telegram ឬ Facebook, រូបភាព និងចំណងជើងត្រឹមត្រូវនឹងត្រូវបង្ហាញក្នុង Share Card។'
      },
      code: `// File Path: app/blog/[slug]/page.tsx (Server Component)
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: \`Article: \${slug} | SabayCode\`,
    description: \`Read the full guide on \${slug} written by expert developers.\`,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  return <article style={{ color: 'white' }}><h1>{slug}</h1></article>;
}`
    },
    practiceExercise: {
      question: {
        en: 'In which type of components (Server or Client) can you export `metadata` or `generateMetadata`?',
        km: 'តើ Component ប្រភេទណា (Server ឬ Client) ដែលអាច Export `metadata` ឬ `generateMetadata` បាន?'
      },
      solution: 'Server Components only. Metadata exports are not supported in Client Components.'
    },
    quizQuestions: [
      {
        id: 'q-next-5-3',
        question: {
          en: 'How do you define dynamic SEO metadata based on route parameters in Next.js App Router?',
          km: 'តើអ្នកកំណត់ Dynamic SEO Metadata តាម Route parameters ដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'Export async function generateMetadata({ params })', km: 'Export async function generateMetadata({ params })' }, isCorrect: true },
          { id: '2', text: { en: 'Use document.title inside useEffect', km: 'ប្រើ document.title ក្នុង useEffect' }, isCorrect: false }
        ],
        explanation: {
          en: '`generateMetadata` function is called on the server to compute dynamic head meta tags before rendering HTML.',
          km: '`generateMetadata` ត្រូវបានហៅលើ Server ដើមី្បបង្កើត Meta Tags មុនពេល Render HTML។'
        }
      }
    ]
  },

  // Module 6 — Rendering Strategies
  {
    id: 'next-hub-6-1',
    slug: 'static-rendering-ssg',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: {
      en: '6.1 Static Rendering (SSG) at Build-Time',
      km: '6.1 ស្វែងយល់ពី Static Rendering (SSG) ពេល Build'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'In Next.js, **Static Rendering** is the default behavior for routes where data is fetched once at build time (`npm run build`).\n\nHow it works:\n1. HTML is pre-rendered at build time on the server.\n2. The generated HTML & assets are cached on a global CDN.\n3. Requests are served in milliseconds with minimal server computing overhead.',
      km: 'ក្នុង Next.js, **Static Rendering** គឺជា Default Behavior សម្រាប់ Routes ទាំងឡាយណាដែល Fetch ទិន្នន័យត្រឹមតែម្តងគត់នៅពេល Build (`npm run build`)។\n\nរបៀបដំណើរការ៖\n១. HTML ត្រូវ Pre-render ទុកជាស្រេចពេល Build\n២. HTML និង Assets ដែលបង្កើតរួច ត្រូវរក្សាទុកលើ Global CDN\n៣. ការទស្សនាមានល្បឿនលឿនបំផុត'
    },
    tutorial: {
      en: 'Static Rendering Characteristics:\n1. Suitable for static content: About pages, Privacy policies, landing pages, static blogs.\n2. Triggered automatically when no dynamic functions (`cookies()`, `headers()`, `useSearchParams()`) or `{ cache: "no-store" }` are used.',
      km: 'លក្ខណៈ Static Rendering៖\n១. ស័ក្តិសមសម្រាប់ Static content៖ ទំព័រ About, Privacy Policy, ឬ Static blogs\n២. ដំណើរការស្វ័យប្រវត្តិ នៅពេលមិនមានប្រើប្រាស់ Dynamic Functions (`cookies()`, `headers()`) ឬ `{ cache: "no-store" }`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #10b981; padding: 12px; border-radius: 8px; }
    .badge { background: #059669; font-size: 11px; padding: 2px 6px; border-radius: 4px; color: white; }
  </style>
</head>
<body>
  <h3>Static Rendering (SSG)</h3>
  <div class="card">
    <span class="badge">BUILD TIME HTML</span>
    <p>Pre-rendered static HTML cached globally on Edge CDN network.</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Serving pre-built HTML from Edge CDN locations ensures near-zero latency worldwide, reducing hosting bill server costs by up to 90%.',
        km: 'ការបង្ហាញ HTML ដែល Pre-build រួចពី Edge CDN ជួយកាត់បន្ថយពេលវេលារង់ចាំ និងសន្សំសំចៃថ្លៃសេវា Server យ៉ាងច្រើន។'
      },
      code: `// File Path: app/privacy/page.tsx (Static Rendered Page)
export default function PrivacyPage() {
  return (
    <div style={{ color: 'white', padding: '2rem' }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: January 2026. SabayCode respects user data.</p>
    </div>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'When is HTML generated for a statically rendered route in Next.js?',
        km: 'តើ HTML សម្រាប់ Static Rendered Route ក្នុង Next.js ត្រូវបង្កើតឡើងនៅពេលណា?'
      },
      solution: 'At build time (when running npm run build).'
    },
    quizQuestions: [
      {
        id: 'q-next-6-1',
        question: {
          en: 'What is the default rendering strategy in Next.js App Router for routes with static data?',
          km: 'តើ Rendering Strategy ជា Default ក្នុង Next.js App Router សម្រាប់ Static Data គឺអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'Static Rendering (Build-time generation)', km: 'Static Rendering (បង្កើតពេល Build)' }, isCorrect: true },
          { id: '2', text: { en: 'Client-side SPA rendering only', km: 'Client-side SPA rendering តែមួយមុខ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Next.js statically renders routes at build time whenever possible to maximize performance.',
          km: 'Next.js ធ្វើ Static Render ដោយស្វ័យប្រវត្តិដើម្បីទទួលបានល្បឿនលឿនបំផុត។'
        }
      }
    ]
  },
  {
    id: 'next-hub-6-2',
    slug: 'dynamic-rendering-ssr',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: {
      en: '6.2 Dynamic Rendering (SSR) at Request-Time',
      km: '6.2 ស្វែងយល់ពី Dynamic Rendering (SSR) ពេលមាន Request'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'In **Dynamic Rendering**, HTML is generated on the server for **each individual user request**.\n\nTriggers for Dynamic Rendering:\n1. Calling dynamic API functions: `cookies()`, `headers()`, or `searchParams`.\n2. Fetch requests configured with `cache: "no-store"` or `revalidate: 0`.\n3. Opting out explicitly using `export const dynamic = "force-dynamic";`.',
      km: 'ក្នុង **Dynamic Rendering**, HTML ត្រូវបង្កើតឡើងលើ Server **រាល់ពេលមាន Request ពីអ្នកប្រើប្រាស់ម្នាក់ៗ**។\n\nកត្តាដែលធ្វើឱ្យ Route ក្លាយជា Dynamic Rendering៖\n១. ហៅប្រើ Dynamic APIs ដូចជា `cookies()`, `headers()`, ឬ `searchParams`\n២. ប្រើ Fetch ដែលមាន `cache: "no-store"`\n៣. ប្រកាស `export const dynamic = "force-dynamic";`'
    },
    tutorial: {
      en: 'Enforcing Dynamic Rendering:\n1. File: `app/profile/page.tsx`.\n2. Add segment config: `export const dynamic = "force-dynamic";`.\n3. Use `cookies()` to fetch user session: `const cookieStore = await cookies();`.\n4. Route is rendered fresh on every page load.',
      km: 'របៀបកំណត់ Dynamic Rendering ៖\n១. File៖ `app/profile/page.tsx`\n២. បន្ថែម Config៖ `export const dynamic = "force-dynamic";`\n៣. ប្រើប្រាស់ `cookies()` ដើមី្បឆែក Session\n៤. ទំព័រនឹងត្រូវ Render ថ្មីរាល់ពេល Load'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #f59e0b; padding: 12px; border-radius: 8px; }
    .badge { background: #d97706; font-size: 11px; padding: 2px 6px; border-radius: 4px; color: white; }
  </style>
</head>
<body>
  <h3>Dynamic Rendering (SSR)</h3>
  <div class="card">
    <span class="badge">REQUEST TIME HTML</span>
    <p>HTML rendered per-user request based on cookies, query params, or no-store data.</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Dynamic rendering is required for personalized dashboards, user profile settings, and live shopping cart checkouts where content changes based on logged-in cookie sessions.',
        km: 'Dynamic Rendering គឺចាំបាច់សម្រាប់ Dashboard ផ្ទាល់ខ្លួន, ការកំណត់ Profile, និង Shopping Cart ដែលទិន្នន័យផ្លាស់ប្តូរតាម Cookie Session របស់ User។'
      },
      code: `// File Path: app/user/dashboard/page.tsx (Dynamic Rendered Page)
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export default async function UserDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token');

  return (
    <div style={{ color: 'white', padding: '2rem' }}>
      <h1>Personalized Dashboard</h1>
      <p>Logged in session token: {token ? 'Active Session' : 'Guest'}</p>
    </div>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'Which export statement forces a Next.js route to use Dynamic Rendering at request time?',
        km: 'តើ Export Statement មួយណាដែលបង្ខំឱ្យ Next.js Route ប្រើប្រាស់ Dynamic Rendering ពេលមាន Request?'
      },
      solution: 'export const dynamic = "force-dynamic";'
    },
    quizQuestions: [
      {
        id: 'q-next-6-2',
        question: {
          en: 'When does Dynamic Rendering generate HTML for a route in Next.js?',
          km: 'តើ Dynamic Rendering បង្កើត HTML សម្រាប់ Route នៅពេលណា?'
        },
        options: [
          { id: '1', text: { en: 'At request time for each user request', km: 'ពេលមាន Request ពីអ្នកប្រើប្រាស់ម្នាក់ៗ' }, isCorrect: true },
          { id: '2', text: { en: 'At build time only', km: 'ពេល Build តែមួយមុខ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Dynamic Rendering computes HTML on the server during the incoming user request.',
          km: 'Dynamic Rendering គណនាបង្កើត HTML លើ Server ក្នុងអំឡុងពេលមាន Request។'
        }
      }
    ]
  },
  {
    id: 'next-hub-6-3',
    slug: 'generatestaticparams-dynamic-routes',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: {
      en: '6.3 generateStaticParams for Pre-rendering Dynamic Routes',
      km: '6.3 ប្រើប្រាស់ generateStaticParams សម្រាប់ Pre-rendering Dynamic Routes'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'When combining Dynamic Routes (`app/blog/[slug]/page.tsx`) with Static Rendering, use `generateStaticParams()`.\n\nHow `generateStaticParams()` works:\n1. Executes at build time (`npm run build`).\n2. Returns an array of parameter objects: `[{ slug: "post-1" }, { slug: "post-2" }]`.\n3. Next.js pre-renders and statically exports HTML for all specified dynamic routes in advance.',
      km: 'នៅពេលចង់បញ្ជូល Dynamic Routes (`app/blog/[slug]/page.tsx`) ជាមួយ Static Rendering, ត្រូវប្រើ `generateStaticParams()`។\n\nរបៀបដំណើរការ៖\n១. ដំណើការពេល Build (`npm run build`)\n២. បញ្ជូនត្រឡប់នូវ Array នៃ Parameter Objects៖ `[{ slug: "post-1" }, { slug: "post-2" }]`\n៣. Next.js នឹង Pre-render បង្កើត HTML សម្រាប់គ្រប់ Dynamic Routes ទាំងអស់ទុកជាមុន'
    },
    tutorial: {
      en: 'Implementing `generateStaticParams`:\n1. Open `app/blog/[slug]/page.tsx`.\n2. Export async function: `export async function generateStaticParams() { const posts = await getPosts(); return posts.map(p => ({ slug: p.slug })); }`.\n3. Next.js statically builds all blog posts ahead of time!',
      km: 'របៀបសរសេរ `generateStaticParams`៖\n១. បើក File `app/blog/[slug]/page.tsx`\n២. Export function៖ `export async function generateStaticParams() { const posts = await getPosts(); return posts.map(p => ({ slug: p.slug })); }`\n៣. Next.js នឹង Build គ្រប់ Blog Posts ទាំងអស់ទុកជាស្រេច'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #10b981; padding: 12px; border-radius: 8px; }
    .code { color: #38bdf8; }
  </style>
</head>
<body>
  <h3>generateStaticParams Export</h3>
  <div class="card">
    <p class="code">export async function generateStaticParams() {</p>
    <p style="padding-left:16px;">return [{ slug: 'post-1' }, { slug: 'post-2' }];</p>
    <p class="code">}</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Pre-rendering 1,000 blog posts or doc pages at build time using `generateStaticParams` ensures instant 10ms loading speeds for every reader worldwide.',
        km: 'ការ Pre-render អត្ថបទប្លុក ១,០០០ ប្រធានបទទុកជាមុន ជួយឱ្យអ្នកអានបើកមើលភ្លាម បង្ហាញភ្លាមត្រឹម ១០ms ប៉ុណ្ណោះ។'
      },
      code: `// File Path: app/blog/[slug]/page.tsx (SSG Dynamic Route)
export async function generateStaticParams() {
  // Fetch list of all blog slugs at build time
  return [
    { slug: 'intro-to-nextjs' },
    { slug: 'server-components-guide' },
  ];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div style={{ color: 'white', padding: '2rem' }}>
      <h1>Statically Generated Post: {slug}</h1>
    </div>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'What data structure must `generateStaticParams()` return?',
        km: 'តើ Data Structure ប្រភេទណាដែល `generateStaticParams()` ត្រូវត្រឡប់មកវិញ?'
      },
      solution: 'An array of parameter objects, e.g. Array<{ [key: string]: string }>.'
    },
    quizQuestions: [
      {
        id: 'q-next-6-3',
        question: {
          en: 'What function replaces legacy `getStaticPaths` in the Next.js App Router for dynamic SSG routes?',
          km: 'តើ Function មួយណាដែលជំនួស `getStaticPaths` ចាស់ ក្នុង Next.js App Router?'
        },
        options: [
          { id: '1', text: { en: 'generateStaticParams()', km: 'generateStaticParams()' }, isCorrect: true },
          { id: '2', text: { en: 'getStaticRoutes()', km: 'getStaticRoutes()' }, isCorrect: false }
        ],
        explanation: {
          en: '`generateStaticParams()` is the modern App Router function for pre-rendering dynamic route segments.',
          km: '`generateStaticParams()` គឺជា Function ទំនើបរបស់ App Router សម្រាប់ Pre-render Dynamic Routes។'
        }
      }
    ]
  },

  // Module 7 — Server Actions & Mutations
  {
    id: 'next-hub-7-1',
    slug: 'introduction-to-server-actions',
    moduleNumber: 7,
    lessonNumberInModule: 1,
    title: {
      en: '7.1 What Server Actions Are ("use server")',
      km: '7.1 ស្វែងយល់ពី Server Actions ("use server")'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: '**Server Actions** are asynchronous functions that execute on the server. They can be invoked from both Server and Client Components to handle form submissions and data mutations.\n\nWhy Server Actions are revolutionary:\n1. Replaces manual `fetch("/api/create", { method: "POST" })` boilerplate.\n2. Direct database mutations from form actions.\n3. Progressive enhancement: Forms work even before JavaScript hydramatically loads on slow networks.',
      km: '**Server Actions** គឺជា Asynchronous Functions ដែលរត់លើ Server។ ពួកវាអាចត្រូវបានហៅចេញពី Server ឬ Client Components ដើមី្បគ្រប់គ្រង Form Submissions និងការកែប្រែ Data (Mutations)។\n\nអត្ថប្រយោជន៍សំខាន់ៗ៖\n១. ជំនួសការសរសេរ `fetch("/api/...", { method: "POST" })` វែងឆ្ងាយ\n២. កែប្រែ Database ដោយផ្ទាល់តាមរយៈ Form actions\n៣. Progressive enhancement៖ Form អាចដើរបានទោះបីជា JS មិនទាន់ Load ចប់លើ Network យឺតក៏ដោយ'
    },
    tutorial: {
      en: 'Declaring a Server Action:\n1. Top line of function or file MUST use `"use server";`.\n2. Define async function: `async function createPost(formData: FormData) { "use server"; const title = formData.get("title"); await db.post.create({ title }); }`.\n3. Attach to HTML form: `<form action={createPost}>` .',
      km: 'របៀបសរសេរ Server Action ៖\n១. ជួរទី ១ នៃ Function ឬ File ត្រូវតែមាន `"use server";`\n២. បង្កើត async function ទទួល `formData`\n៣. ដាក់ភ្ជាប់ទៅកាន់ HTML Form៖ `<form action={createPost}>` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #a855f7; padding: 12px; border-radius: 8px; }
    .code { color: #a855f7; }
  </style>
</head>
<body>
  <h3>Server Action Directive</h3>
  <div class="card">
    <p class="code">async function addComment(formData: FormData) {</p>
    <p style="padding-left:16px; color:#38bdf8;">"use server";</p>
    <p style="padding-left:16px;">await db.insert(formData.get("comment"));</p>
    <p class="code">}</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Server Actions eliminate the need to create separate API route files just to perform simple form updates, drastically cutting down codebase complexity.',
        km: 'Server Actions ជួយកាត់បន្ថយការបង្កើត API Route Files ច្រើនស្មុគស្មាញ ដើម្បីតែធ្វើការ Update Form ធម្មតា។'
      },
      code: `// File Path: app/contact/page.tsx (Server Component)
export default function ContactPage() {
  async function submitForm(formData: FormData) {
    "use server";
    const email = formData.get('email');
    console.log('Sending message to:', email);
    // Directly mutate DB or send email here!
  }

  return (
    <form action={submitForm} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <input type="email" name="email" placeholder="Enter email" required style={{ padding: '8px' }} />
      <button type="submit" style={{ background: '#2563eb', color: 'white', padding: '8px', border: 'none', cursor: 'pointer' }}>
        Submit Action
      </button>
    </form>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'What directive directive string marks an inline function or file as a Server Action in Next.js?',
        km: 'តើ Directive String មួយណាសម្រាប់កំណត់ Function ឬ File ឱ្យទៅជា Server Action ក្នុង Next.js?'
      },
      solution: '"use server";'
    },
    quizQuestions: [
      {
        id: 'q-next-7-1',
        question: {
          en: 'Where do Server Actions marked with `"use server";` execute?',
          km: 'តើ Server Actions ដែលប្រកាសជាមួយ `"use server";` រត់នៅទីណា?'
        },
        options: [
          { id: '1', text: { en: 'On the server strictly', km: 'លើ Server តែមួយមុខ' }, isCorrect: true },
          { id: '2', text: { en: 'Inside browser DOM context', km: 'ក្នុង Browser DOM context' }, isCorrect: false }
        ],
        explanation: {
          en: 'Server Actions are compiled into secure RPC endpoints and executed strictly on the server.',
          km: 'Server Actions ត្រូវបាន Compile ទៅជា RPC Endpoints ហើយរត់លើ Server ដោយសុវត្ថិភាព។'
        }
      }
    ]
  },
  {
    id: 'next-hub-7-2',
    slug: 'form-handling-with-server-actions',
    moduleNumber: 7,
    lessonNumberInModule: 2,
    title: {
      en: '7.2 Handling Form Submission with Server Actions',
      km: '7.2 ការគ្រប់គ្រង Form Submission តាម Server Actions'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'HTML forms natively integrate with Server Actions via the `action` attribute (`<form action={serverAction}>`).\n\nForm Submission Features:\n1. Automatically receives standard web `FormData` object.\n2. Can use `useActionState` (or `useFormState`) in Client Components to manage form pending status, validation errors, and success messages.',
      km: 'HTML forms ភ្ជាប់ជាមួយ Server Actions តាមរយៈ `action` attribute (`<form action={serverAction}>`)។\n\nលក្ខណៈពិសេស Form Submission៖\n១. ទទួលអត្ថប្រយោជន៍ពី Web `FormData` object ដោយស្វ័យប្រវត្តិ\n២. អាចប្រើ `useActionState` ក្នុង Client Components ដើមី្បគ្រប់គ្រង Pending Status, Validation Errors, និង Success Messages'
    },
    tutorial: {
      en: 'Handling Form Inputs:\n1. Define input elements with `name` attribute (`<input name="username" />`).\n2. Inside action: `const username = formData.get("username") as string;`.\n3. Perform validation and database insertion.',
      km: 'របៀបទាញយក Form Inputs ៖\n១. កំណត់ input elements ដោយមាន `name` attribute (`<input name="username" />`)\n២. ក្នុង action៖ `const username = formData.get("username") as string;`\n៣. ផ្ទៀងផ្ទាត់ Validation និងរក្សាទុកក្នុង Database'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .form { background: #0f172a; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; }
    input, button { padding: 6px; margin: 4px 0; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="form">
    <h3>Server Action Form</h3>
    <code>&lt;form action={createTask}&gt;</code><br>
    <input type="text" placeholder="Task name" /><br>
    <button style="background:#2563eb; color:white; border:none;">Add Task</button>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Using Server Actions with native `FormData` means your web app can submit forms seamlessly without writing boilerplate event handlers like `e.preventDefault()`.',
        km: 'ការប្រើប្រាស់ Server Actions ជាមួយ `FormData` ជួយឱ្យ Form ដើរបានយ៉ាងរលូន ដោយមិនបាច់សរសេរ `e.preventDefault()` ស្មុគស្មាញឡើយ។'
      },
      code: `// File Path: app/actions/todo.ts ("use server" module file)
"use server";

import { revalidatePath } from 'next/cache';

export async function addTodo(formData: FormData) {
  const title = formData.get('title') as string;
  if (!title) return { error: 'Title is required' };

  console.log('Inserting todo into DB:', title);
  // Revalidate cache for home route
  revalidatePath('/');
}`
    },
    practiceExercise: {
      question: {
        en: 'How do you extract an input value named `"email"` from the `formData` parameter inside a Server Action?',
        km: 'តើអ្នកទាញយក Input Value ឈ្មោះ `"email"` ពី `formData` ក្នុង Server Action ដោយរបៀបណា?'
      },
      solution: 'const email = formData.get("email");'
    },
    quizQuestions: [
      {
        id: 'q-next-7-2',
        question: {
          en: 'What prop on an HTML `<form>` element connects directly to a Next.js Server Action function?',
          km: 'តើ Prop មួយណាលើ HTML `<form>` Element ដែលភ្ជាប់ទៅកាន់ Next.js Server Action Function ដោយផ្ទាល់?'
        },
        options: [
          { id: '1', text: { en: 'action={serverActionFunction}', km: 'action={serverActionFunction}' }, isCorrect: true },
          { id: '2', text: { en: 'onSubmit={serverActionFunction}', km: 'onSubmit={serverActionFunction}' }, isCorrect: false }
        ],
        explanation: {
          en: 'Next.js extends the standard HTML form `action` prop to accept Server Action functions directly.',
          km: 'Next.js ពង្រីកសមត្ថភាពលើ `action` prop នៃ Form ឱ្យទទួល Server Action Function ដោយផ្ទាល់។'
        }
      }
    ]
  },
  {
    id: 'next-hub-7-3',
    slug: 'revalidation-after-mutations',
    moduleNumber: 7,
    lessonNumberInModule: 3,
    title: {
      en: '7.3 Cache Revalidation (revalidatePath & revalidateTag)',
      km: '7.3 ការធ្វើ Refresh Cache ឡើងវិញ (revalidatePath & revalidateTag)'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'After mutating data in a Server Action (e.g. adding a new blog post), the static/cached UI must be updated.\n\nTwo Revalidation Helpers:\n1. `revalidatePath("/blog")`: Purges cached data and re-renders pages under a specific URL path.\n2. `revalidateTag("posts")`: Purges all `fetch()` requests tagged with `{ next: { tags: ["posts"] } }` regardless of where they are rendered.',
      km: 'បន្ទាប់ពីកែប្រែ Data ក្នុង Server Action រួច (ដូចជា បន្ថែម Blog Post ថ្មី), Cache UI ចាស់ត្រូវតែអាប់ដេត។\n\nHelper Functions ២ យ៉ាង៖\n១. `revalidatePath("/blog")`៖ លុប Cache និង Re-render ទំព័រក្រោម URL path កំណត់\n២. `revalidateTag("posts")`៖ លុប Cache លើគ្រប់ `fetch()` ទាំងឡាយណាដែលបាន Tag ពាក្យថា `"posts"`'
    },
    tutorial: {
      en: 'Revalidating Cache inside a Server Action:\n1. Import: `import { revalidatePath, revalidateTag } from "next/cache";`.\n2. Mutate DB.\n3. Call `revalidatePath("/products");` or `revalidateTag("cart-items");`.\n4. Next.js instantly serves updated data on the next UI frame.',
      km: 'របៀបសរសេរ Revalidation ក្នុង Server Action៖\n១. Import៖ `import { revalidatePath } from "next/cache";`\n២. កែប្រែ DB រួចរាល់\n៣. ហៅ `revalidatePath("/products");`\n៤. Next.js នឹងបង្ហាញ Data ថ្មីលើ UI ភ្លាមៗ'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #10b981; padding: 12px; border-radius: 8px; }
    .code { color: #10b981; }
  </style>
</head>
<body>
  <h3>Cache Purging Helpers</h3>
  <div class="card">
    <p class="code">import { revalidatePath } from 'next/cache';</p>
    <p>revalidatePath('/dashboard'); // Instant UI Refresh</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: '`revalidatePath` ensures that when an admin adds a new product, the public catalog page immediately reflects the change without forcing users to manually refresh their browser.',
        km: '`revalidatePath` ធានាថាពេល Admin បន្ថែមទំនិញថ្មី, ទំព័រលក់ទំនិញសាធារណៈនឹងបង្ហាញទំនិញនោះភ្លាមៗ ដោយអ្នកទិញមិនបាច់ Refresh ឡើយ។'
      },
      code: `// File Path: app/actions/product.ts (Server Action)
"use server";

import { revalidatePath } from 'next/cache';

export async function deleteProduct(productId: string) {
  console.log('Deleting product ID:', productId);
  // Delete from SQL database...

  // Purge cache for shop catalog page
  revalidatePath('/shop');
}`
    },
    practiceExercise: {
      question: {
        en: 'Which function purging method purges cache based on custom string tags associated with fetch requests?',
        km: 'តើ Function មួយណាដែលលុប Cache ផ្អែកលើ Custom String Tags ដែលកំណត់ក្នុង Fetch Requests?'
      },
      solution: 'revalidateTag(tag)'
    },
    quizQuestions: [
      {
        id: 'q-next-7-3',
        question: {
          en: 'Which module should you import `revalidatePath` from in Next.js?',
          km: 'តើត្រូវ Import `revalidatePath` ពី Module មួយណា ក្នុង Next.js?'
        },
        options: [
          { id: '1', text: { en: 'next/cache', km: 'next/cache' }, isCorrect: true },
          { id: '2', text: { en: 'next/navigation', km: 'next/navigation' }, isCorrect: false }
        ],
        explanation: {
          en: '`revalidatePath` and `revalidateTag` are exported from `next/cache`.',
          km: '`revalidatePath` និង `revalidateTag` ត្រូវបាន Export ចេញពី `next/cache`។'
        }
      }
    ]
  },

  // Module 8 — API Routes (Route Handlers)
  {
    id: 'next-hub-8-1',
    slug: 'creating-route-handlers',
    moduleNumber: 8,
    lessonNumberInModule: 1,
    title: {
      en: '8.1 Route Handlers (app/api/.../route.ts)',
      km: '8.1 ការបង្កើត Route Handlers (app/api/.../route.ts)'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Next.js **Route Handlers** allow you to create custom Web Request endpoints (RESTful APIs or webhooks).\n\nKey Rules:\n- Created inside `app/` directory inside files named `route.ts` (or `route.js`).\n- Cannot exist in the same route folder level as `page.tsx`.\n- Support standard HTTP methods by exporting named async functions: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`.',
      km: 'Next.js **Route Handlers** អនុញ្ញាតឱ្យអ្នកបង្កើត Custom RESTful APIs ឬ Webhooks។\n\nវិធានសំខាន់ៗ៖\n- បង្កើតខាងក្នុង `app/` directory ក្នុង file ឈ្មោះ `route.ts`\n- មិនអាចស្ថិតនៅ Folder ជាន់ស្មើជាមួយ `page.tsx` ឡើយ\n- គាំទ្រ HTTP methods ដោយ Export async functions ដូចជា ៖ `GET`, `POST`, `PUT`, `DELETE`'
    },
    tutorial: {
      en: 'Building a simple JSON API Route:\n1. Create file `app/api/health/route.ts`.\n2. Export `GET` handler: `export async function GET() { return NextResponse.json({ status: "ok" }); }`.\n3. Test endpoint in browser: `http://localhost:3000/api/health`.',
      km: 'របៀបបង្កើត JSON API Route ៖\n១. បង្កើត File `app/api/health/route.ts`\n២. Export `GET` handler៖ `export async function GET() { return NextResponse.json({ status: "ok" }); }`\n៣. តេស្តមើល Endpoint៖ `http://localhost:3000/api/health`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #38bdf8; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; }
  </style>
</head>
<body>
  <h3>API Route Handler</h3>
  <div class="card">
    <p>app/api/users/route.ts</p>
    <code>export async function GET(request: Request) { ... }</code>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Route Handlers are used to build public REST APIs for mobile applications (iOS/Android) or webhook receivers for payment providers like Stripe/PayWay.',
        km: 'Route Handlers ត្រូវប្រកបដោយប្រយោជន៍សម្រាប់បង្កើត REST APIs ឱ្យ Mobile Apps ឬទទួល Webhooks ពី Stripe/PayWay។'
      },
      code: `// File Path: app/api/users/route.ts (Route Handler)
import { NextResponse } from 'next/server';

export async function GET() {
  const users = [
    { id: 1, name: 'Borey' },
    { id: 2, name: 'Sopheak' }
  ];
  return NextResponse.json({ success: true, data: users });
}`
    },
    practiceExercise: {
      question: {
        en: 'Can a single folder contain both `page.tsx` and `route.ts` at the same level?',
        km: 'តើ Folder តែមួយអាចមានទាំង `page.tsx` និង `route.ts` នៅជាន់ស្មើគ្នាបានឬទេ?'
      },
      solution: 'No. Route handlers and page routes conflict if placed in the same directory segment.'
    },
    quizQuestions: [
      {
        id: 'q-next-8-1',
        question: {
          en: 'What is the required file name for defining API endpoints in the Next.js App Router?',
          km: 'តើ File Name ផ្លូវការសម្រាប់បង្កើត API Endpoints ក្នុង App Router គឺអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'route.ts', km: 'route.ts' }, isCorrect: true },
          { id: '2', text: { en: 'api.ts', km: 'api.ts' }, isCorrect: false },
          { id: '3', text: { en: 'endpoint.ts', km: 'endpoint.ts' }, isCorrect: false }
        ],
        explanation: {
          en: 'In the App Router, `route.ts` defines backend API Route Handlers.',
          km: 'ក្នុង App Router, `route.ts` គឺជា File ផ្លូវការសម្រាប់បង្កើត API Endpoints។'
        }
      }
    ]
  },
  {
    id: 'next-hub-8-2',
    slug: 'handling-get-post-requests',
    moduleNumber: 8,
    lessonNumberInModule: 2,
    title: {
      en: '8.2 Handling GET/POST Requests & JSON Responses',
      km: '8.2 ការគ្រប់គ្រង GET/POST Requests និង JSON Responses'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Route Handlers receive standard Web `NextRequest` objects and return `NextResponse` instances.\n\nHTTP Handlers:\n- `GET`: Query parameters via `request.nextUrl.searchParams`.\n- `POST`: Parse incoming JSON body via `await request.json()`.\n- Status codes: Pass custom status via `NextResponse.json(data, { status: 201 })`.',
      km: 'Route Handlers ទទួល `NextRequest` object និងបញ្ជូន `NextResponse` ត្រឡប់ទៅវិញ។\n\nHTTP Handlers៖\n- `GET`៖ ទាញយក Query parameters តាម `request.nextUrl.searchParams`\n- `POST`៖ ទាញយក JSON payload តាម `await request.json()`\n- Status codes៖ កំណត់ status តាម `NextResponse.json(data, { status: 201 })`'
    },
    tutorial: {
      en: 'Handling POST Request JSON Payload:\n1. Open `app/api/posts/route.ts`.\n2. Export `POST`: `export async function POST(req: NextRequest) { const body = await req.json(); return NextResponse.json({ created: body }, { status: 201 }); }`.',
      km: 'របៀបទទួល POST Request JSON Payload៖\n១. បើក File `app/api/posts/route.ts`\n២. Export `POST`៖ `export async function POST(req: NextRequest) { const body = await req.json(); return NextResponse.json({ created: body }, { status: 201 }); }`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #38bdf8; padding: 12px; border-radius: 8px; }
    .code { color: #22c55e; }
  </style>
</head>
<body>
  <h3>POST Route Handler Pattern</h3>
  <div class="card">
    <p class="code">export async function POST(request: NextRequest) {</p>
    <p style="padding-left:16px;">const body = await request.json();</p>
    <p style="padding-left:16px;">return NextResponse.json({ ok: true }, { status: 201 });</p>
    <p class="code">}</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Using standard Web Request and Response objects ensures your API Route Handlers behave identically across Cloud Run, Vercel Edge, or Node.js container environments.',
        km: 'ការប្រើប្រាស់ Web Request/Response ស្តង់ដារ ធានាថា API របស់អ្នករត់បានស្មើដៃគ្នាលើគ្រប់ Cloud Providers។'
      },
      code: `// File Path: app/api/feedback/route.ts (Route Handler)
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }
    
    return NextResponse.json({ success: true, message: 'Feedback received' }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }
}`
    },
    practiceExercise: {
      question: {
        en: 'How do you parse a JSON body sent in a POST request inside a Route Handler?',
        km: 'តើអ្នកបំប្លែង JSON body ក្នុង POST request ក្នុង Route Handler ដោយរបៀបណា?'
      },
      solution: 'const body = await request.json();'
    },
    quizQuestions: [
      {
        id: 'q-next-8-2',
        question: {
          en: 'How do you return a 201 Created JSON response from a Next.js Route Handler?',
          km: 'តើអ្នកបញ្ជូន Response 201 Created JSON ត្រឡប់ចេញពី Route Handler ដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'NextResponse.json({ success: true }, { status: 201 })', km: 'NextResponse.json({ success: true }, { status: 201 })' }, isCorrect: true },
          { id: '2', text: { en: 'res.send(201, { success: true })', km: 'res.send(201, { success: true })' }, isCorrect: false }
        ],
        explanation: {
          en: '`NextResponse.json(data, init)` takes response data and optional status init options.',
          km: '`NextResponse.json(data, init)` ទទួលទិន្នន័យ និងកំណត់ status code ជម្រើស។'
        }
      }
    ]
  },
  {
    id: 'next-hub-8-3',
    slug: 'route-handlers-vs-server-actions',
    moduleNumber: 8,
    lessonNumberInModule: 3,
    title: {
      en: '8.3 Route Handlers vs. Server Actions',
      km: '8.3 ការប្រៀបធៀប Route Handlers និង Server Actions'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Both Route Handlers and Server Actions execute on the server, but serve distinct architecture goals.\n\nWhen to use Route Handlers (`route.ts`):\n- Building public RESTful APIs for third-party consumers or mobile apps.\n- Handling Webhooks (Stripe, GitHub, Telegram Bots).\n- Streaming custom response types (PDFs, CSV downloads, RSS feeds).\n\nWhen to use Server Actions (`"use server"`):\n- Application UI mutations (Form submissions, likes, database inserts) called directly from React components.',
      km: 'ទាំង Route Handlers និង Server Actions សុទ្ធតែរត់លើ Server ប៉ុន្តែមានគោលបំណងខុសគ្នា៖\n\nពេលណាត្រូវប្រើ Route Handlers (`route.ts`)៖\n- បង្កើត Public REST APIs សម្រាប់ Mobile Apps ឬ ភាគីខាងក្រៅ\n- ទទួល Webhooks (Stripe, Telegram Bots)\n- Download Files (PDFs, CSVs)\n\nពេលណាត្រូវប្រើ Server Actions (`"use server"`)៖\n- កែប្រែ UI Data ក្នុង React (Form submissions, likes, inserts)'
    },
    tutorial: {
      en: 'Decision Matrix:\n- Internal React Form Submit? ➔ Use **Server Action**.\n- External Mobile App REST API? ➔ Use **Route Handler**.\n- Payment Webhook Callback? ➔ Use **Route Handler**.',
      km: 'ក្បួនជ្រើសរើស៖\n- Submit Form ផ្ទៃក្នុង React App ➔ ប្រើ **Server Action**\n- បង្កើត REST API ឱ្យ Mobile App ➔ ប្រើ **Route Handler**\n- ទទួល Payment Webhook ➔ ប្រើ **Route Handler**'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .box { background: #0f172a; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="grid">
    <div class="box">
      <h4 style="color:#38bdf8">Route Handler (route.ts)</h4>
      <p>Public REST APIs, Mobile Apps, Webhooks, File Downloads</p>
    </div>
    <div class="box">
      <h4 style="color:#a855f7">Server Action ("use server")</h4>
      <p>React Form Actions, UI State Mutations, Cache Revalidations</p>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Choosing Server Actions for internal UI forms saves writing endpoint routes and manual client fetch state, while Route Handlers preserve clean REST standards for public API integrations.',
        km: 'ការប្រើ Server Actions សម្រាប់ Form ផ្ទៃក្នុង ជួយសន្សំពេលវេលាសរសេរ API Endpoints ខណៈ Route Handlers ផ្តល់ភាពស្អាតបាតសម្រាប់ REST Standards។'
      },
      code: `// Route Handler Example for Webhooks (app/api/stripe/route.ts)
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.text();
  console.log('Received Stripe Webhook Event');
  return NextResponse.json({ received: true });
}`
    },
    practiceExercise: {
      question: {
        en: 'Which Next.js feature should you choose to handle an incoming Webhook notification from Stripe?',
        km: 'តើ Feature មួយណា ក្នុង Next.js ដែលអ្នកគួរជ្រើសរើសដើម្បីទទួល Webhook Notification ពី Stripe?'
      },
      solution: 'Route Handler (app/api/stripe/route.ts)'
    },
    quizQuestions: [
      {
        id: 'q-next-8-3',
        question: {
          en: 'Which feature is best suited for building public REST APIs for a mobile iOS/Android app?',
          km: 'តើ Feature មួយណាដែលស័ក្តិសមបំផុតសម្រាប់បង្កើត Public REST API ឱ្យ Mobile App?'
        },
        options: [
          { id: '1', text: { en: 'Route Handlers (route.ts)', km: 'Route Handlers (route.ts)' }, isCorrect: true },
          { id: '2', text: { en: 'Server Actions ("use server")', km: 'Server Actions ("use server")' }, isCorrect: false }
        ],
        explanation: {
          en: 'Route Handlers provide standard HTTP endpoints (GET, POST, etc.) accessible by external clients.',
          km: 'Route Handlers ផ្តល់ HTTP Endpoints ស្តង់ដារ ដែលអាចទាក់ទងបានពី Client ខាងក្រៅ។'
        }
      }
    ]
  }
];
