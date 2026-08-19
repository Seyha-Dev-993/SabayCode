import { FrontendCourse, FrontendQuizQuestion } from '../types/frontendClass';
import { NEXTJS_HUB_LESSONS_PART1 } from './nextjsLessonsHubPart1';
import { NEXTJS_HUB_LESSONS_PART2 } from './nextjsLessonsHubPart2';
import { NEXTJS_HUB_LESSONS_PART3 } from './nextjsLessonsHubPart3';

const NEXTJS_CHEAT_SHEET = [
  {
    concept: 'Special File Conventions in App Router',
    code: `app/
 ├── page.tsx          # Defines unique route UI (mandatory)
 ├── layout.tsx        # Shared wrapper layout (html/body in root layout)
 ├── loading.tsx       # Instant Suspense fallback skeleton
 ├── error.tsx         # React Error Boundary ("use client" required)
 ├── not-found.tsx     # 404 custom error page
 └── api/.../route.ts  # Backend API Route Handler`,
    explanation: {
      en: 'The core special file names reserved by Next.js App Router for automatic layout wrapping, loading skeletons, error boundaries, and API handlers.',
      km: 'ឈ្មោះ Special Files ផ្លូវការរបស់ Next.js App Router សម្រាប់ Layouts, Loading Skeletons, Error Boundaries និង API Handlers។'
    }
  },
  {
    concept: 'Dynamic Route Segment Syntax',
    code: `// Route File: app/blog/[slug]/page.tsx
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <h1>Article: {slug}</h1>;
}`,
    explanation: {
      en: 'Foldered square bracket parameters `[slug]` match dynamic path segments. Async page components await `params`.',
      km: 'ការប្រើប្រាស់ Folder វង់ក្រចកជ្រុង `[slug]` សម្រាប់បង្កើត Dynamic URL Paths ដោយអានព័ត៌មានតាម `await params`។'
    }
  },
  {
    concept: 'Component Directives ("use client" vs "use server")',
    code: `// Top of Client Component file
"use client";
import { useState } from 'react'; // React hooks allowed!

// Top of Server Action file or inline function
"use server";
import { revalidatePath } from 'next/cache';
export async function updateTitle(formData: FormData) { ... }`,
    explanation: {
      en: '`"use client"` switches a component file to the client boundary; `"use server"` designates async functions as server actions.',
      km: '`"use client"` សម្រាប់បើកប្រើប្រាស់ Client Hooks / Event listeners; ឯ `"use server"` សម្រាប់បង្កើត Server Action សម្រាប់ Form Submissions។'
    }
  },
  {
    concept: 'Optimized Link & Image Components',
    code: `import Link from 'next/link';
import Image from 'next/image';

<Link href="/dashboard" className="text-blue-500 hover:underline">
  Go to Dashboard
</Link>

<Image 
  src="/hero.png" 
  alt="SabayCode Campus" 
  width={800} 
  height={400} 
  priority 
/>`,
    explanation: {
      en: '`<Link>` enables instant client-side route prefetching; `<Image>` optimizes images to WebP/AVIF and eliminates Cumulative Layout Shift (CLS).',
      km: '`<Link>` ជួយ Pre-fetch ទំព័របន្ទាប់ស្វ័យប្រវត្តិ; `<Image>` ជួយបំប្លែងរូបភាពទៅជា WebP និងការពារ CLS។'
    }
  },
  {
    concept: 'Data Fetching & Cache Control',
    code: `// Static Cached Fetch (Default)
const res = await fetch('https://api.example.com/posts');

// Dynamic Uncached Fetch (Always fresh on request)
const res = await fetch('https://api.example.com/live', { cache: 'no-store' });

// Incremental Static Regeneration (Revalidate every 60s)
const res = await fetch('https://api.example.com/news', { next: { revalidate: 60 } });`,
    explanation: {
      en: 'Next.js extends `fetch()` with caching and revalidation controls directly in Server Components.',
      km: 'Next.js ពង្រីកសមត្ថភាព `fetch()` ដើមី្បគ្រប់គ្រង Cache និង Revalidation ក្នុង Server Components ដោយផ្ទាល់។'
    }
  },
  {
    concept: 'Common Next.js Pitfalls & Fixes',
    code: `❌ Mistake: Using useState in Server Component
   Fix: Add "use client"; directive at the very top of the file.

❌ Mistake: Accessing process.env.DATABASE_URL inside "use client" file
   Fix: Keep secrets in Server Components or prefix public keys with NEXT_PUBLIC_.

❌ Mistake: Placing page.tsx and route.ts in the exact same folder
   Fix: Move API route to app/api/your-route/route.ts.`,
    explanation: {
      en: 'Frequently encountered developer errors when transitioning from traditional React or Pages Router to App Router.',
      km: 'កំហុសដែលជួបប្រទះញឹកញាប់ពេលសរសេរ App Router និងរបៀបដោះស្រាយត្រឹមត្រូវ។'
    }
  }
];

const NEXTJS_QUIZ_QUESTIONS: FrontendQuizQuestion[] = [
  {
    id: 'quiz-next-1',
    question: {
      en: 'What is the mandatory file name in Next.js App Router for rendering a public page view for a folder route?',
      km: 'តើ File Name ផ្លូវការដែលចាំបាច់បំផុតក្នុង Next.js App Router ដើមី្បបង្ហាញ UI ទំព័រគឺអ្វី?'
    },
    options: [
      { id: '1', text: { en: 'page.tsx', km: 'page.tsx' }, isCorrect: true },
      { id: '2', text: { en: 'index.tsx', km: 'index.tsx' }, isCorrect: false },
      { id: '3', text: { en: 'view.tsx', km: 'view.tsx' }, isCorrect: false },
      { id: '4', text: { en: 'main.tsx', km: 'main.tsx' }, isCorrect: false }
    ],
    explanation: {
      en: 'In the App Router, every public route segment requires a `page.tsx` file.',
      km: 'ក្នុង App Router, គ្រប់ Public Route Segment ទាំងអស់តម្រូវឱ្យមាន `page.tsx`។'
    }
  },
  {
    id: 'quiz-next-2',
    question: {
      en: 'By default, what type of components are created inside the `app/` directory in Next.js?',
      km: 'តើ Component ប្រភេទណាដែលជា Default ពេលបង្កើតក្នុង `app/` directory ក្នុង Next.js?'
    },
    options: [
      { id: '1', text: { en: 'React Server Components (RSC)', km: 'React Server Components (RSC)' }, isCorrect: true },
      { id: '2', text: { en: 'Client Components', km: 'Client Components' }, isCorrect: false },
      { id: '3', text: { en: 'Class Components', km: 'Class Components' }, isCorrect: false },
      { id: '4', text: { en: 'Service Workers', km: 'Service Workers' }, isCorrect: false }
    ],
    explanation: {
      en: 'All components inside the App Router default to React Server Components unless explicitly marked with `"use client"`.',
      km: 'គ្រប់ Component ក្នុង App Router ទាំងអស់ជា React Server Components ជា Default។'
    }
  },
  {
    id: 'quiz-next-3',
    question: {
      en: 'Which directive string converts a component file into a Client Component boundary in Next.js?',
      km: 'តើ Directive String មួយណាសម្រាប់កំណត់ Component ឱ្យទៅជា Client Component?'
    },
    options: [
      { id: '1', text: { en: '"use client";', km: '"use client";' }, isCorrect: true },
      { id: '2', text: { en: '"use browser";', km: '"use browser";' }, isCorrect: false },
      { id: '3', text: { en: '"client side";', km: '"client side";' }, isCorrect: false },
      { id: '4', text: { en: '"use react";', km: '"use react";' }, isCorrect: false }
    ],
    explanation: {
      en: '`"use client";` placed at the top of a file designates the module as a Client Component boundary.',
      km: '`"use client";` សរសេរនៅជួរលើគេ សម្រាប់កំណត់ Module ជា Client Component។'
    }
  },
  {
    id: 'quiz-next-4',
    question: {
      en: 'How do you create a dynamic parameter route matching `/products/123` in Next.js App Router?',
      km: 'តើអ្នកបង្កើត Dynamic Route Path សម្រាប់ `/products/123` ដោយរបៀបណា?'
    },
    options: [
      { id: '1', text: { en: 'app/products/[id]/page.tsx', km: 'app/products/[id]/page.tsx' }, isCorrect: true },
      { id: '2', text: { en: 'app/products/:id/page.tsx', km: 'app/products/:id/page.tsx' }, isCorrect: false },
      { id: '3', text: { en: 'app/products/$id/page.tsx', km: 'app/products/$id/page.tsx' }, isCorrect: false },
      { id: '4', text: { en: 'app/products/{id}/page.tsx', km: 'app/products/{id}/page.tsx' }, isCorrect: false }
    ],
    explanation: {
      en: 'Square brackets `[id]` define dynamic route segment folders in Next.js App Router.',
      km: 'វង់ក្រចកជ្រុង `[id]` ត្រូវបានប្រើប្រាស់សម្រាប់បង្កើត Dynamic Segment Folder។'
    }
  },
  {
    id: 'quiz-next-5',
    question: {
      en: 'Which component should be used for optimized navigation instead of standard HTML `<a>` tags?',
      km: 'តើ Component មួយណាដែលត្រូវបានប្រើប្រាស់ ជំនួសឱ្យ HTML `<a>` Tag ដើមី្ប Fast Prefetching Navigation?'
    },
    options: [
      { id: '1', text: { en: '<Link href="..."> from next/link', km: '<Link href="..."> ពី next/link' }, isCorrect: true },
      { id: '2', text: { en: '<Navigate to="..."> from react-router', km: '<Navigate to="..."> ពី react-router' }, isCorrect: false },
      { id: '3', text: { en: '<Route path="...">', km: '<Route path="...">' }, isCorrect: false }
    ],
    explanation: {
      en: '`<Link>` provides instant client-side route transitions and automatic background prefetching.',
      km: '`<Link>` ផ្តល់ការផ្លាស់ប្តូរទំព័រលឿនរហ័ស និងធ្វើការ Prefetching ស្វ័យប្រវត្តិ។'
    }
  },
  {
    id: 'quiz-next-6',
    question: {
      en: 'What directive marks an async function as a Server Action for direct database mutations?',
      km: 'តើ Directive មួយណាសម្រាប់ប្រកាស async function ជា Server Action សម្រាប់ទាក់ទង Database ដោយផ្ទាល់?'
    },
    options: [
      { id: '1', text: { en: '"use server";', km: '"use server";' }, isCorrect: true },
      { id: '2', text: { en: '"use action";', km: '"use action";' }, isCorrect: false },
      { id: '3', text: { en: '"use mutation";', km: '"use mutation";' }, isCorrect: false }
    ],
    explanation: {
      en: '`"use server";` marks functions or module files as Server Actions.',
      km: '`"use server";` កំណត់ Function ឬ File ឱ្យទៅជា Server Action។'
    }
  },
  {
    id: 'quiz-next-7',
    question: {
      en: 'Which prefix exposes an environment variable to Client Components in the browser?',
      km: 'តើ Prefix មួយណាដែលធ្វើឱ្យ Environment Variable អាចមើលឃើញក្នុង Client Components?'
    },
    options: [
      { id: '1', text: { en: 'NEXT_PUBLIC_', km: 'NEXT_PUBLIC_' }, isCorrect: true },
      { id: '2', text: { en: 'REACT_APP_', km: 'REACT_APP_' }, isCorrect: false },
      { id: '3', text: { en: 'PUBLIC_', km: 'PUBLIC_' }, isCorrect: false }
    ],
    explanation: {
      en: 'Only variables starting with `NEXT_PUBLIC_` are accessible on the browser client.',
      km: 'មានតែ Variable ដែលផ្តើមដោយ `NEXT_PUBLIC_` ប៉ុណ្ណោះដែលអាចប្រើលើ Browser បាន។'
    }
  },
  {
    id: 'quiz-next-8',
    question: {
      en: 'Which file convention defines an instant loading skeleton for a route segment?',
      km: 'តើ Special File មួយណាដែលបង្ហាញ Loading Skeleton ភ្លាមៗសម្រាប់ Route Segment?'
    },
    options: [
      { id: '1', text: { en: 'loading.tsx', km: 'loading.tsx' }, isCorrect: true },
      { id: '2', text: { en: 'skeleton.tsx', km: 'skeleton.tsx' }, isCorrect: false },
      { id: '3', text: { en: 'spinner.tsx', km: 'spinner.tsx' }, isCorrect: false }
    ],
    explanation: {
      en: '`loading.tsx` creates an automatic React Suspense fallback UI while page data is fetching.',
      km: '`loading.tsx` បង្កើត Loading UI ស្វ័យប្រវត្តិជាមួយ React Suspense។'
    }
  }
];

const ALL_NEXTJS_HUB_LESSONS = [
  ...NEXTJS_HUB_LESSONS_PART1,
  ...NEXTJS_HUB_LESSONS_PART2,
  ...NEXTJS_HUB_LESSONS_PART3
];

export const NEXTJS_COURSE_DATA: FrontendCourse = {
  id: 'nextjs',
  title: {
    en: 'Next.js App Router Mastery (bilingual)',
    km: 'វគ្គសិក្សា Next.js (App Router)'
  },
  iconName: 'nextjs',
  categoryId: 'frameworks',
  difficulty: 'Advanced',
  shortDescription: {
    en: 'Master full-stack Next.js App Router, Server Components, Data Fetching, and Server Actions.',
    km: 'រៀន Next.js App Router, Server Components, Data Fetching និង Server Actions ពេញលេញ។'
  },
  summary: {
    en: 'Comprehensive 12-hour advanced curriculum covering React Server Components, App Router file-based routes, Server Actions, API Route Handlers, optimization, and deployment.',
    km: 'មេរៀនស៊ីជម្រៅ ១២ ម៉ោង គ្របដណ្តប់លើ React Server Components, App Router file routing, Server Actions, API Route Handlers, Optimization និង Deployment។'
  },
  estimatedHours: 12,
  lessonCount: ALL_NEXTJS_HUB_LESSONS.length,
  cheatSheet: NEXTJS_CHEAT_SHEET,
  quiz: NEXTJS_QUIZ_QUESTIONS,
  capstoneProject: {
    title: {
      en: 'Full-Stack Blog Platform with Dynamic Routes',
      km: 'គម្រោង Capstone៖ បង្កើត Full-Stack Blog Platform ជាមួយ Next.js'
    },
    description: {
      en: 'Build a production Next.js Blog application featuring Server Components, `generateStaticParams()` pre-rendering, Server Actions for likes, dynamic metadata, and responsive layout styling.',
      km: 'បង្កើត Next.js Blog Platform ពេញលេញមួយដោយប្រើប្រាស់ Server Components, `generateStaticParams()`, Server Actions សម្រាប់ Like, Dynamic metadata, និង Responsive layout។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #38bdf8; padding: 16px; border-radius: 12px; }
    .btn { background: #ec4899; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <h2>🚀 Capstone: Next.js Blog Platform</h2>
    <p>Pre-rendered at build time with generateStaticParams()</p>
    <button class="btn">❤️ Like Article (Server Action)</button>
  </div>
</body>
</html>`
  }
  },
  lessons: ALL_NEXTJS_HUB_LESSONS
};
