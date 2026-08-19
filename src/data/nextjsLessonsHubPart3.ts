import { FrontendLesson } from '../types/frontendClass';

export const NEXTJS_HUB_LESSONS_PART3: FrontendLesson[] = [
  // Module 9 — Styling in Next.js
  {
    id: 'next-hub-9-1',
    slug: 'global-css-and-css-modules',
    moduleNumber: 9,
    lessonNumberInModule: 1,
    title: {
      en: '9.1 Global CSS & CSS Modules (.module.css)',
      km: '9.1 Global CSS និង CSS Modules (.module.css)'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'Next.js supports multiple CSS styling approaches out of the box:\n\n1. Global CSS (`app/globals.css`): Applied globally across the app. Must be imported in `app/layout.tsx`.\n2. CSS Modules (`Button.module.css`): Locally scoped CSS styles that automatically generate unique class names to prevent CSS selector collisions.',
      km: 'Next.js គាំទ្រវិធីសាស្ត្រ Styling ច្រើនប្រភេទ៖\n\n១. Global CSS (`app/globals.css`)៖ អនុវត្តលើ App ទាំងមូល ដោយត្រូវ Import ក្នុង `app/layout.tsx`\n២. CSS Modules (`Button.module.css`)៖ កំណត់ Scope ក្នុង Component តែមួយដោយស្វ័យប្រវត្តិ ការពារការជាន់ Class Name គ្នា'
    },
    tutorial: {
      en: 'Using CSS Modules in Next.js:\n1. Create file `Button.module.css`: `.primary { background: #2563eb; color: white; }`.\n2. Import in component: `import styles from "./Button.module.css";`.\n3. Apply class: `<button className={styles.primary}>Click Me</button>`.',
      km: 'របៀបប្រើប្រាស់ CSS Modules ៖\n១. បង្កើត File `Button.module.css`៖ `.primary { background: #2563eb; }`\n២. Import ក្នុង component៖ `import styles from "./Button.module.css";`\n៣. ប្រើប្រាស់ class៖ `<button className={styles.primary}>ចុចទីនេះ</button>`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; }
    .class-name { color: #38bdf8; }
  </style>
</head>
<body>
  <h3>CSS Modules Class Scoping</h3>
  <div class="card">
    <p>Source Class: <code>.primary</code></p>
    <p>Compiled DOM Class: <code>.Button_primary__a8f9z</code></p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'CSS Modules guarantee that styling a `.title` class inside a Navbar component will never accidentally override a `.title` class in a Card component.',
        km: 'CSS Modules ធានាថាការសរសេរ class `.title` ក្នុង Navbar នឹងមិនទៅប៉ះពាល់ class `.title` ក្នុង Card ឡើយ។'
      },
      code: `/* File Path: app/components/Header.module.css */
.header {
  background-color: #0f172a;
  padding: 1rem;
  border-bottom: 1px solid #334155;
}

.title {
  color: #38bdf8;
  font-size: 1.5rem;
}

// File Path: app/components/Header.tsx
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>SabayCode Header</h1>
    </header>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'Where MUST Global CSS files (like `globals.css`) be imported in the Next.js App Router?',
        km: 'តើ Global CSS (ដូចជា `globals.css`) ត្រូវតែ Import នៅទីណា ក្នុង App Router?'
      },
      solution: 'Inside the Root Layout (app/layout.tsx).'
    },
    quizQuestions: [
      {
        id: 'q-next-9-1',
        question: {
          en: 'How do CSS Modules prevent style class collisions across components?',
          km: 'តើ CSS Modules ការពារការជាន់ Class Name គ្នារវាង Components ដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'By generating unique scoped class names at build time', km: 'ដោយបង្កើត Scoped Class Names ប្លែកៗគ្នានៅពេល Build' }, isCorrect: true },
          { id: '2', text: { en: 'By placing styles in shadow DOM', km: 'ដោយដាក់ Styles ក្នុង Shadow DOM' }, isCorrect: false }
        ],
        explanation: {
          en: 'CSS Modules hash class names (e.g. `Component_title__hash`) to guarantee uniqueness.',
          km: 'CSS Modules បំលែង Class Names ជា Hash ដើមី្បធានាភាពប្លែកគ្នាតែមួយ។'
        }
      }
    ]
  },
  {
    id: 'next-hub-9-2',
    slug: 'tailwind-css-in-nextjs',
    moduleNumber: 9,
    lessonNumberInModule: 2,
    title: {
      en: '9.2 Tailwind CSS Integration & Setup',
      km: '9.2 ការប្រើប្រាស់ Tailwind CSS ក្នុង Next.js'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'Tailwind CSS is the official recommended styling solution when creating a Next.js app with `create-next-app`.\n\nKey Advantages:\n1. Utility-first classes directly in JSX (`className="bg-slate-900 text-white p-4 rounded-xl"`).\n2. Automatic PostCSS purging of unused CSS for minimal production bundles.\n3. Native responsive prefixes (`md:flex`, `lg:grid-cols-3`) and dark mode support (`dark:bg-slate-950`).',
      km: 'Tailwind CSS គឺជា Styling Solution ដែលត្រូវបានណែនាំជាផ្លូវការពេលបង្កើត Next.js App។\n\nអត្ថប្រយោជន៍សំខាន់ៗ៖\n១. ប្រើប្រាស់ Utility classes ដោយផ្ទាល់ក្នុង JSX (`className="bg-slate-900 p-4"`)\n២. លុប CSS ដែលមិនបានប្រើប្រាស់ចេញស្វ័យប្រវត្តិពេល Build\n៣. គាំទ្រ Responsive (`md:flex`) និង Dark Mode (`dark:bg-slate-950`) យ៉ាងងាយស្រួល'
    },
    tutorial: {
      en: 'Tailwind CSS Setup in Next.js:\n1. Check `globals.css`: `@import "tailwindcss";` or `@tailwind base; @tailwind components; @tailwind utilities;`.\n2. Write Utility Classes directly in React components: `<div className="flex items-center justify-between p-6 bg-slate-900 text-white rounded-2xl">`.',
      km: 'របៀបកំណត់ Tailwind CSS ៖\n១. ពិនិត្យ `globals.css`៖ `@import "tailwindcss";`\n២. សរសេរ Utility Classes ក្នុង React Components៖ `<div className="flex items-center p-6 bg-slate-900 text-white">`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #3b82f6; padding: 16px; border-radius: 12px; }
    .badge { background: #2563eb; color: white; padding: 4px 8px; border-radius: 4px; font-size: 11px; }
  </style>
</head>
<body>
  <h3>Tailwind CSS Utility Classes</h3>
  <div class="card">
    <span class="badge">flex items-center justify-between p-4 bg-slate-900</span>
    <p>Utility-first CSS rendered in Next.js JSX components.</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Tailwind CSS accelerates UI development by 5x since developers never have to context-switch between React JSX files and separate CSS stylesheets.',
        km: 'Tailwind CSS ជួយបង្កើនល្បឿនបង្កើត UI រហូតដល់ ៥ ដង ដោយសារមិនបាច់ប្តូរចុះឡើងរវាង JSX និង CSS files។'
      },
      code: `// File Path: app/components/HeroCard.tsx (Server Component)
export default function HeroCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4 text-white shadow-xl">
      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-xs font-bold rounded-full">
        Next.js + Tailwind
      </span>
      <h2 className="text-3xl font-black tracking-tight">Modern Web Architecture</h2>
      <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl transition">
        Get Started
      </button>
    </div>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'What JSX attribute name is used in React/Next.js to assign Tailwind utility classes?',
        km: 'តើ JSX Attribute ឈ្មោះអ្វីដែលត្រូវប្រើក្នុង React/Next.js ដើម្បីដាក់ Tailwind Utility Classes?'
      },
      solution: 'className'
    },
    quizQuestions: [
      {
        id: 'q-next-9-2',
        question: {
          en: 'Which Tailwind prefix allows conditional styles for medium screen widths (e.g., tablets)?',
          km: 'តើ Prefix មួយណា ក្នុង Tailwind សម្រាប់កំណត់ Style លើអេក្រង់ទំហំមធ្យម (Tablets)?'
        },
        options: [
          { id: '1', text: { en: 'md:', km: 'md:' }, isCorrect: true },
          { id: '2', text: { en: 'tablet:', km: 'tablet:' }, isCorrect: false }
        ],
        explanation: {
          en: 'Tailwind uses mobile-first responsive breakpoints like `sm:`, `md:`, `lg:`, `xl:`.',
          km: 'Tailwind ប្រើប្រាស់ Breakpoints ដូចជា `sm:`, `md:`, `lg:`, `xl:`។'
        }
      }
    ]
  },
  {
    id: 'next-hub-9-3',
    slug: 'css-in-js-and-sass-options',
    moduleNumber: 9,
    lessonNumberInModule: 3,
    title: {
      en: '9.3 Styling Alternatives (Sass/SCSS & CSS-in-JS)',
      km: '9.3 ជម្រើស Styling ផ្សេងទៀត (Sass/SCSS & CSS-in-JS)'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'Next.js supports **Sass/SCSS** out of the box by installing `sass` (`npm i sass`).\n\nNotes on CSS-in-JS in App Router:\n- Traditional CSS-in-JS libraries that rely on runtime JavaScript injection (like `styled-components` or `emotion`) require `"use client"` boundaries.\n- Zero-runtime or CSS-based solutions (Tailwind, CSS Modules, Sass) are preferred for Server Components.',
      km: 'Next.js គាំទ្រ **Sass/SCSS** ភ្លាមៗដោយគ្រាន់តែដំឡើង `sass` (`npm i sass`)។\n\nចំណាំលើ CSS-in-JS ក្នុង App Router៖\n- CSS-in-JS ដូចជា `styled-components` ឬ `emotion` តម្រូវឱ្យប្រើប្រាស់ក្នុង `"use client"`\n- ដូច្នេះការប្រើប្រាស់ Tailwind, CSS Modules, ឬ Sass ត្រូវបានណែនាំជាងសម្រាប់ Server Components'
    },
    tutorial: {
      en: 'Using Sass in Next.js:\n1. Install: `npm install sass`.\n2. Create file `styles/custom.module.scss`.\n3. Write nested SCSS rules: `.card { &:hover { background: red; } }`.\n4. Import in component: `import styles from "./custom.module.scss";`.',
      km: 'របៀបប្រើប្រាស់ Sass ក្នុង Next.js ៖\n១. ដំឡើង៖ `npm install sass`\n២. បង្កើត File `styles/custom.module.scss`\n៣. សរសេរ SCSS ៖ `.card { &:hover { background: red; } }`\n៤. Import ក្នុង component'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #ec4899; padding: 12px; border-radius: 8px; }
  </style>
</head>
<body>
  <h3>Sass/SCSS Support in Next.js</h3>
  <div class="card">
    <p>File: custom.module.scss</p>
    <code>$primary: #ec4899; .card { background: $primary; }</code>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Choosing zero-runtime CSS tools (Tailwind / CSS Modules) keeps Server Components lightweight and avoids unnecessary JavaScript hydration overhead on mobile devices.',
        km: 'ការជ្រើសរើស Zero-runtime CSS (Tailwind/CSS Modules) ជួយឱ្យ Server Components ស្រាល និងរត់បានលឿនលើទូរស័ព្ទដៃ។'
      },
      code: `// File Path: app/components/SassButton.module.scss
$brand-color: #a855f7;

.btn {
  background-color: $brand-color;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  
  &:hover {
    background-color: darken($brand-color, 10%);
  }
}`
    },
    practiceExercise: {
      question: {
        en: 'Which npm package is required to enable `.scss` / `.sass` file compilation in Next.js?',
        km: 'តើ npm package មួយណាដែលចាំបាច់ដំឡើងដើម្បីប្រើប្រាស់ `.scss` files ក្នុង Next.js?'
      },
      solution: 'sass (npm install sass)'
    },
    quizQuestions: [
      {
        id: 'q-next-9-3',
        question: {
          en: 'Why are zero-runtime CSS solutions (Tailwind, CSS Modules) preferred over runtime CSS-in-JS in Next.js App Router?',
          km: 'ហេតុអ្វីបានជា Zero-runtime CSS (Tailwind) ត្រូវបានគេណែនាំជាង CSS-in-JS ក្នុង App Router?'
        },
        options: [
          { id: '1', text: { en: 'They work seamlessly in Server Components without requiring "use client"', km: 'វាដើរបានយ៉ាងល្អក្នុង Server Components ដោយមិនបាច់ប្រើ "use client"' }, isCorrect: true },
          { id: '2', text: { en: 'CSS-in-JS is completely unsupported in Next.js', km: 'CSS-in-JS មិនត្រូវបានគាំទ្រទាល់តែសោះ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Zero-runtime CSS works inside React Server Components without forcing client component boundaries.',
          km: 'Zero-runtime CSS ដើរបានក្នុង Server Components ដោយមិនបាច់ប្រើ Client boundary។'
        }
      }
    ]
  },

  // Module 10 — Images, Fonts & Optimization
  {
    id: 'next-hub-10-1',
    slug: 'next-image-component-optimization',
    moduleNumber: 10,
    lessonNumberInModule: 1,
    title: {
      en: '10.1 The <Image> Component & Optimization',
      km: '10.1 ការប្រើប្រាស់ <Image> Component & Image Optimization'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'The `<Image>` component from `next/image` extends HTML `<img>` with automatic performance optimizations:\n\n1. Size Optimization: Converts images automatically to modern formats (`WebP`, `AVIF`).\n2. Visual Stability: Automatically prevents Cumulative Layout Shift (CLS).\n3. Lazy Loading: Images load strictly when scrolling into the viewport.\n4. Responsive Resizing: Serves smaller images to mobile screens.',
      km: '`<Image>` component ពី `next/image` អភិវឌ្ឍលើ HTML `<img>` ដោយមានការ Optimize ល្បឿនស្វ័យប្រវត្តិ៖\n\n១. Size Optimization៖ បំប្លែងរូបភាពទៅជាទម្រង់ទំនើប (`WebP`, `AVIF`) ដោយស្វ័យប្រវត្តិ\n២. Visual Stability៖ ការពារបញ្ហាទំព័ររំកិលចុះឡើង (CLS)\n៣. Lazy Loading៖ Load រូបភាពលុះត្រាតែរមូរមកដល់\n៤. Responsive Resizing៖ ផ្ញើរូបភាពទំហំតូចទៅកាន់ទូរស័ព្ទដៃ'
    },
    tutorial: {
      en: 'Using `<Image>`:\n1. Import: `import Image from "next/image";`.\n2. Static Image: `import hero from "@/public/hero.png"; <Image src={hero} alt="Hero" />`.\n3. Remote URL: `<Image src="https://images.example.com/pic.jpg" alt="Pic" width={500} height={300} />` (Requires configuring domain in `next.config.mjs`).',
      km: 'របៀបប្រើប្រាស់ `<Image>` ៖\n១. Import៖ `import Image from "next/image";`\n២. Static Image៖ `import hero from "@/public/hero.png"; <Image src={hero} alt="Hero" />`\n៣. Remote URL៖ `<Image src="https://..." width={500} height={300} alt="..." />` (ត្រូវកំណត់ domain ក្នុង `next.config.mjs`) '
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
  <h3>next/image Optimization Features</h3>
  <div class="card">
    <span class="badge">Auto WebP Conversion • Zero CLS • Lazy Loading</span>
    <p>&lt;Image src="/logo.png" alt="Logo" width={200} height={50} /&gt;</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Using `<Image>` reduces raw 5MB PNG product photography down to 40KB WebP images, improving Google Lighthouse performance scores from 45 to 98.',
        km: 'ការប្រើប្រាស់ `<Image>` ជួយកាត់បន្ថយទំហំរូបភាពពី 5MB មកត្រឹម 40KB WebP បង្កើនពិន្ទុ Google Lighthouse ដល់ទៅ ៩៨%។'
      },
      code: `// File Path: app/about/page.tsx (Server Component)
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h2>SabayCode Campus</h2>
      <Image 
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
        alt="Coding Workspace"
        width={800}
        height={450}
        style={{ borderRadius: '16px' }}
      />
    </div>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'What two required numeric props must be provided to `<Image>` when using a remote image URL string?',
        km: 'តើ Props ចាំបាច់ពីរណាខ្លះដែលត្រូវផ្តល់ឱ្យ `<Image>` ពេលប្រើប្រាស់ Remote Image URL String?'
      },
      solution: 'width and height'
    },
    quizQuestions: [
      {
        id: 'q-next-10-1',
        question: {
          en: 'Why is `next/image` preferred over standard HTML `<img>` tags in Next.js?',
          km: 'ហេតុអ្វីបានជាគេនិយមប្រើ `next/image` ជាង HTML `<img>` Tag ធម្មតា?'
        },
        options: [
          { id: '1', text: { en: 'It automatically optimizes images, lazy loads, and prevents CLS', km: 'វា Optimize រូបភាពស្វ័យប្រវត្តិ, Lazy Load, និងការពារ CLS' }, isCorrect: true },
          { id: '2', text: { en: 'It makes images load without an internet connection', km: 'វាធ្វើឱ្យរូបភាពបង្ហាញដោយមិនបាច់ប្រើ Internet' }, isCorrect: false }
        ],
        explanation: {
          en: '`next/image` handles format conversion (WebP), resizing, lazy loading, and prevents Cumulative Layout Shift.',
          km: '`next/image` គ្រប់គ្រងការបំប្លែង Format, Lazy Loading, និងទប់ស្កាត់ CLS។'
        }
      }
    ]
  },
  {
    id: 'next-hub-10-2',
    slug: 'next-script-component',
    moduleNumber: 10,
    lessonNumberInModule: 2,
    title: {
      en: '10.2 Third-Party Scripts (<Script>)',
      km: '10.2 ការប្រើប្រាស់ Third-Party Scripts (<Script>)'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'The `<Script>` component from `next/script` manages loading strategies for third-party scripts (Google Analytics, Stripe, Ads, Chat widgets).\n\nLoading Strategies (`strategy` prop):\n1. `beforeInteractive`: Load before page hydration.\n2. `afterInteractive` (Default): Load immediately after page becomes interactive.\n3. `lazyOnload`: Load during browser idle time (great for chat widgets).\n4. `worker`: Load inside a web worker.',
      km: '`<Script>` component ពី `next/script` គ្រប់គ្រងយុទ្ធសាស្ត្រ Load Third-party Scripts (Google Analytics, Stripe, Chat Widgets)។\n\nLoading Strategies (`strategy` prop)៖\n១. `beforeInteractive`៖ Load មុនពេល Page Hydration\n២. `afterInteractive` (Default)៖ Load បន្ទាប់ពីទំព័រអាច Interactive បាន\n៣. `lazyOnload`៖ Load ពេល Browser ទំនេរ (ល្អសម្រាប់ Chat Widgets)\n៤. `worker`៖ Load ក្នុង Web Worker'
    },
    tutorial: {
      en: 'Using `<Script>` for Analytics:\n1. Import: `import Script from "next/script";`.\n2. Embed in `app/layout.tsx`: `<Script src="https://example.com/analytics.js" strategy="afterInteractive" />`.',
      km: 'របៀបប្រើប្រាស់ `<Script>` ៖\n១. Import៖ `import Script from "next/script";`\n២. ដាក់ក្នុង `app/layout.tsx`៖ `<Script src="https://..." strategy="afterInteractive" />`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; }
    .strat { color: #f59e0b; }
  </style>
</head>
<body>
  <h3>next/script Loading Strategies</h3>
  <div class="card">
    <p><code>&lt;Script src="..." <span class="strat">strategy="lazyOnload"</span> /&gt;</code></p>
    <small>Loads during browser idle time to avoid blocking initial render.</small>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Loading heavy third-party tracking scripts with `strategy="lazyOnload"` prevents ad scripts from delaying the core page load experience for users.',
        km: 'ការប្រើប្រាស់ `strategy="lazyOnload"` ការពារមិនឱ្យ Tracking Scripts បំផ្លាញល្បឿន Load ទំព័រដើមឡើយ។'
      },
      code: `// File Path: app/layout.tsx (Root Layout)
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'Which `Script` strategy attribute value loads the script during browser idle time?',
        km: 'តើ `strategy` value មួយណាដែល Load script ក្នុងអំឡុងពេល Browser ទំនេរ?'
      },
      solution: 'lazyOnload'
    },
    quizQuestions: [
      {
        id: 'q-next-10-2',
        question: {
          en: 'What is the default loading strategy for the Next.js `<Script>` component?',
          km: 'តើ Default Loading Strategy របស់ `<Script>` Component គឺអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'afterInteractive', km: 'afterInteractive' }, isCorrect: true },
          { id: '2', text: { en: 'beforeInteractive', km: 'beforeInteractive' }, isCorrect: false }
        ],
        explanation: {
          en: '`afterInteractive` is the default strategy, executing scripts after page hydration.',
          km: '`afterInteractive` គឺជា Default Strategy ដែលរត់បន្ទាប់ពី Page Hydration។'
        }
      }
    ]
  },
  {
    id: 'next-hub-10-3',
    slug: 'font-optimization-next-font',
    moduleNumber: 10,
    lessonNumberInModule: 3,
    title: {
      en: '10.3 Font Optimization with next/font',
      km: '10.3 ការបង្រួម Font Optimization ជាមួយ next/font'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'Next.js includes built-in font optimization via `next/font` (Google Fonts & Local Fonts).\n\nKey Advantages:\n1. Zero Layout Shift: Automatically inline font CSS at build time.\n2. Privacy & Performance: Self-hosts Google Fonts locally; no external network requests are made to Google servers at runtime.',
      km: 'Next.js មាន Font Optimization ស្រាប់តាមរយៈ `next/font` (Google Fonts & Local Fonts)។\n\nអត្ថប្រយោជន៍សំខាន់ៗ៖\n១. Zero Layout Shift៖ Inline Font CSS ស្វ័យប្រវត្តិពេល Build\n២. សុវត្ថិភាព & ល្បឿន៖ Download Google Fonts រក្សាទុកលើ Server ផ្ទាល់ ដោយមិនបាច់ផ្ញើ Request ទៅកាន់ Google ពេលរត់ឡើយ'
    },
    tutorial: {
      en: 'Configuring Google Font in Root Layout:\n1. Import font: `import { Plus_Jakarta_Sans } from "next/font/google";`.\n2. Initialize: `const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });`.\n3. Apply class to body: `<body className={jakarta.className}>`.',
      km: 'របៀបប្រើប្រាស់ Google Font ក្នុង Root Layout ៖\n១. Import font៖ `import { Plus_Jakarta_Sans } from "next/font/google";`\n២. Initialize៖ `const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });`\n៣. ដាក់ class លើ body៖ `<body className={jakarta.className}>`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #a855f7; padding: 12px; border-radius: 8px; }
  </style>
</head>
<body>
  <h3>next/font Google Fonts Self-Hosting</h3>
  <div class="card">
    <code>const inter = Inter({ subsets: ['latin'] });</code><br>
    <small>Downloaded at build time • 0 runtime network calls to Google</small>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Self-hosting Google Fonts via `next/font` satisfies GDPR privacy requirements and eliminates flash of unstyled text (FOUT).',
        km: '`next/font` ជួយសន្សំសំចៃពេល Load និងទប់ស្កាត់ការប្រែប្រួល Font ភ្លាមៗ (FOUT)។'
      },
      code: `// File Path: app/layout.tsx (Root Layout)
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body style={{ margin: 0, fontFamily: 'inherit' }}>{children}</body>
    </html>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'Do fonts loaded via `next/font/google` send runtime requests to Google servers when users visit your site?',
        km: 'តើ Fonts ដែលរៀបចំតាម `next/font/google` ផ្ញើ Request ទៅ Google Server ពេល User ចូលមើលឬទេ?'
      },
      solution: 'No. Fonts are downloaded at build time and self-hosted locally.'
    },
    quizQuestions: [
      {
        id: 'q-next-10-3',
        question: {
          en: 'How does `next/font` handle Google Fonts for maximum privacy and speed?',
          km: 'តើ `next/font` គ្រប់គ្រង Google Fonts យ៉ាងដូចម្តេចដើម្បីល្បឿន និងសុវត្ថិភាព?'
        },
        options: [
          { id: '1', text: { en: 'It downloads and self-hosts fonts at build time', km: 'វា Download និង Self-hosts Fonts នៅពេល Build' }, isCorrect: true },
          { id: '2', text: { en: 'It fetches fonts from external CDN on every page load', km: 'វា Fetch ពី CDN ខាងក្រៅរាល់ពេល Load' }, isCorrect: false }
        ],
        explanation: {
          en: '`next/font` downloads font files at build time and serves them as static assets.',
          km: '`next/font` ទាញយក Font ទុកពេល Build និងបង្ហាញជា Static assets។'
        }
      }
    ]
  },

  // Module 11 — Environment & Deployment
  {
    id: 'next-hub-11-1',
    slug: 'environment-variables-nextjs',
    moduleNumber: 11,
    lessonNumberInModule: 1,
    title: {
      en: '11.1 Environment Variables (.env.local, NEXT_PUBLIC_)',
      km: '11.1 Environment Variables (.env.local, NEXT_PUBLIC_)'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'Next.js supports built-in environment variables via `.env.local`.\n\nTwo Security Scopes:\n1. Server-Only Secrets (Default): Variables like `DATABASE_URL` or `STRIPE_SECRET_KEY` are ONLY accessible in Server Components and Route Handlers. They are never exposed to the client browser.\n2. Client Public Variables: Variables prefixed with `NEXT_PUBLIC_` (e.g. `NEXT_PUBLIC_ANALYTICS_ID`) are bundled into client-side JavaScript.',
      km: 'Next.js គាំទ្រ Environment Variables ស្រាប់តាម `.env.local`។\n\nកម្រិតសុវត្ថិភាព ២ យ៉ាង៖\n១. Server-Only Secrets (Default)៖ Variables ដូចជា `DATABASE_URL` ឬ `STRIPE_SECRET_KEY` អាចចូលប្រើបានតែក្នុង Server Components / Route Handlers ប៉ុណ្ណោះ (មិនជ្រាបទៅ Browser ឡើយ)\n២. Client Public Variables៖ Variables ដែលមាន Prefix `NEXT_PUBLIC_` នឹងត្រូវបាញ់ទៅកាន់ Client JavaScript'
    },
    tutorial: {
      en: 'Configuring Environment Variables:\n1. Create `.env.local` file in project root.\n2. Server Secret: `DATABASE_SECRET="sk_live_12345"`.\n3. Public Client Variable: `NEXT_PUBLIC_SITE_URL="https://sabaycode.com"`.\n4. Access in Node server: `process.env.DATABASE_SECRET`.',
      km: 'របៀបសរសេរ Environment Variables ៖\n១. បង្កើត File `.env.local` ក្នុង Root folder\n២. Server Secret៖ `DATABASE_SECRET="sk_live_12345"`\n៣. Public Client Variable៖ `NEXT_PUBLIC_SITE_URL="https://sabaycode.com"`\n៤. ទាញយកប្រើក្នុង Server៖ `process.env.DATABASE_SECRET`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; }
    .sec { color: #ef4444; }
    .pub { color: #22c55e; }
  </style>
</head>
<body>
  <h3>Environment Variables Security Scope</h3>
  <div class="card">
    <p><span class="sec">DATABASE_URL</span> ➔ Server-Only (Hidden from browser)</p>
    <p><span class="pub">NEXT_PUBLIC_API_URL</span> ➔ Exposed to Client JS</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Failing to keep database keys server-only can expose private credentials to attackers. Next.js protects non-prefixed variables automatically.',
        km: 'ការរក្សា Keys លើ Server-only ការពារមិនឱ្យជនខិលខូចទាញយក Database Credentials បានឡើយ។'
      },
      code: `// File Path: .env.local
DATABASE_URL="postgresql://admin:secret@localhost:5432/mydb"
NEXT_PUBLIC_APP_TITLE="SabayCode Learning Hub"

// File Path: app/page.tsx (Server Component)
export default function HomePage() {
  const title = process.env.NEXT_PUBLIC_APP_TITLE;
  const db = process.env.DATABASE_URL; // Safe in Server Component!
  return <div style={{ color: 'white' }}><h1>{title}</h1></div>;
}`
    },
    practiceExercise: {
      question: {
        en: 'What prefix MUST be added to an environment variable name to expose it to browser Client Components?',
        km: 'តើ Prefix មួយណាដែលត្រូវតែបន្ថែមពីមុខ Environment Variable Name ដើម្បីឱ្យប្រើក្នុង Client Components បាន?'
      },
      solution: 'NEXT_PUBLIC_'
    },
    quizQuestions: [
      {
        id: 'q-next-11-1',
        question: {
          en: 'Which environment variable is accessible inside a Client Component with `"use client"`?',
          km: 'តើ Environment Variable មួយណាដែល អាចចូលប្រើប្រាស់បានក្នុង Client Component?'
        },
        options: [
          { id: '1', text: { en: 'NEXT_PUBLIC_SUPABASE_URL', km: 'NEXT_PUBLIC_SUPABASE_URL' }, isCorrect: true },
          { id: '2', text: { en: 'DATABASE_SECRET_KEY', km: 'DATABASE_SECRET_KEY' }, isCorrect: false }
        ],
        explanation: {
          en: 'Only variables prefixed with `NEXT_PUBLIC_` are included in the client JS bundle.',
          km: 'មានតែ Variables ដែលមាន prefix `NEXT_PUBLIC_` ប៉ុណ្ណោះដែលត្រូវបានបាញ់ទៅ Client JS Bundle។'
        }
      }
    ]
  },
  {
    id: 'next-hub-11-2',
    slug: 'production-build-process',
    moduleNumber: 11,
    lessonNumberInModule: 2,
    title: {
      en: '11.2 Production Build Process (next build)',
      km: '11.2 ការទាញយក Production Build (next build)'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'To prepare your Next.js application for production, execute `npm run build` (which invokes `next build`).\n\nBuild Process Steps:\n1. Type-checks TypeScript code & runs linter.\n2. Compiles React Server Components & Client bundles.\n3. Analyzes routes and generates a output matrix: ○ Static routes vs. λ Dynamic routes.\n4. Output directory `.next/` contains production standalone build artifacts.',
      km: 'ដើម្បីរៀបចំ Next.js App សម្រាប់ Production, ត្រូវវាយបញ្ជា `npm run build` (ដែលហៅ `next build`)។\n\nជំហាននៃ Build Process៖\n១. ពិនិត្យ Type-checks TypeScript & Linter\n២. Compile React Server Components & Client bundles\n៣. វិភាគ Routes បំបែកជា ៖ ○ Static routes និង λ Dynamic routes\n៤. Output folder `.next/` ផ្ទុក Build Artifacts សម្រាប់ Deployment'
    },
    tutorial: {
      en: 'Building & Testing Production Build Locally:\n1. Build command: `npm run build`.\n2. Inspect terminal output table (Static ○ vs Dynamic λ).\n3. Start production server locally: `npm run start` (serves at `http://localhost:3000`).',
      km: 'របៀប Build & Test លើ Local Machine ៖\n១. បញ្ជា Build៖ `npm run build`\n២. ពិនិត្យមើលលទ្ធផលរវាង Static ○ និង Dynamic λ\n៣. ដំណើការ Production Server៖ `npm run start`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; }
    .stat { color: #10b981; }
    .dyn { color: #f59e0b; }
  </style>
</head>
<body>
  <h3>next build Terminal Output Table</h3>
  <div class="card">
    <p><span class="stat">○ /about</span> (Static SSG HTML)</p>
    <p><span class="dyn">λ /dashboard</span> (Dynamic Server-Rendered)</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Testing `npm run build` locally before pushing code catches syntax, missing import errors, or TypeScript type mismatches prior to triggering production CI/CD deployments.',
        km: 'ការតេស្ត `npm run build` លើ Local ជួយទប់ស្កាត់ Syntax Error ឬ Type Errors មុនពេល Deploy ទៅ Production។'
      },
      code: `// Package.json scripts
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}`
    },
    practiceExercise: {
      question: {
        en: 'Which CLI command starts the local production server after running `next build`?',
        km: 'តើ CLI Command មួយណាដែលដំណើការ Local Production Server បន្ទាប់ពី Build រួច?'
      },
      solution: 'next start (or npm run start)'
    },
    quizQuestions: [
      {
        id: 'q-next-11-2',
        question: {
          en: 'What symbol in `next build` CLI output indicates a route was statically generated as HTML?',
          km: 'តើនិមិត្តសញ្ញាអ្វីក្នុង `next build` Output ដែលបញ្ជាក់ថា Route នោះជា Static HTML?'
        },
        options: [
          { id: '1', text: { en: '○ (Static)', km: '○ (Static)' }, isCorrect: true },
          { id: '2', text: { en: 'λ (Dynamic)', km: 'λ (Dynamic)' }, isCorrect: false }
        ],
        explanation: {
          en: 'The circle symbol `○` denotes static routes generated at build time.',
          km: 'សញ្ញារង្វង់ `○` បញ្ជាក់ថាជា Static Route ដែលបង្កើតពេល Build។'
        }
      }
    ]
  },
  {
    id: 'next-hub-11-3',
    slug: 'deploying-to-vercel-and-cloud',
    moduleNumber: 11,
    lessonNumberInModule: 3,
    title: {
      en: '11.3 Deploying to Vercel & Cloud Hosting',
      km: '11.3 ការប្រកាសរត់ Deploy ទៅកាន់ Vercel & Cloud Hosting'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'Deploying a Next.js app to **Vercel** provides zero-configuration deployment, automatic SSL certificates, Edge CDN caching, and preview deployments for Git pull requests.\n\nDeployment Steps on Vercel:\n1. Push code to GitHub/GitLab.\n2. Import repository in Vercel Dashboard.\n3. Configure Environment Variables.\n4. Click Deploy — Vercel builds and hosts your app on a global Edge network in under 60 seconds.',
      km: 'ការ Deploy Next.js App ទៅ **Vercel** ផ្តល់នូវភាពងាយស្រួលបំផុត ដោយមាន SSL Certificate ស្វ័យប្រវត្តិ, Edge CDN Caching, និង Preview deployments។\n\nជំហាន Deploy ទៅ Vercel៖\n១. Push កូដទៅកាន់ GitHub\n២. Import Repository ក្នុង Vercel Dashboard\n៣. កំណត់ Environment Variables\n៤. ចុច Deploy — Vercel នឹង Build និង រត់ App លើ Global Edge Network ក្នុងពេលក្រោម ៦០ វិនាទី'
    },
    tutorial: {
      en: 'Deploying via Vercel CLI or GitHub:\n1. GitHub: Connect GitHub repo ➔ Click "Import" in Vercel ➔ Auto-deploys on every `git push`.\n2. CLI Method: Run `npx vercel` in terminal ➔ Follow interactive prompts.',
      km: 'របៀប Deploy តាម GitHub ឬ Vercel CLI ៖\n១. GitHub៖ ភ្ជាប់ GitHub Repo ➔ ចុច Import ក្នុង Vercel ➔ Auto-deploy រាល់ពេល `git push`\n២. CLI Method៖ វាយ `npx vercel` ក្នុង terminal'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #f8fafc; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #38bdf8; padding: 12px; border-radius: 8px; }
  </style>
</head>
<body>
  <h3>Vercel Git Integration Deployment</h3>
  <div class="card">
    <p><code>git push origin main</code></p>
    <p style="color:#10b981;">➔ Automatic Edge CDN Deployment in &lt;60s</p>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Why It Matters in Real Work', km: '🎯 ហេតុអ្វីសំខាន់ក្នុងការងារពិត' },
      description: {
        en: 'Vercel Preview Deployments generate a unique testing URL for every pull request, allowing team members to preview new features live before merging to production.',
        km: 'Vercel Preview Deployments បង្កើត URL តេស្តសម្រាប់គ្រប់ Pull Request ជួយឱ្យក្រុមការងារអាចពិនិត្យ Feature ថ្មីមុន Merge ទៅ Production។'
      },
      code: `// Deployment Output Confirmation
// https://my-sabaycode-app.vercel.app [Production Live]`
    },
    practiceExercise: {
      question: {
        en: 'What platform is created by the same creators of Next.js for zero-config global edge deployments?',
        km: 'តើ Platform មួយណាដែលបង្កើតឡើងដោយក្រុមអ្នកបង្កើត Next.js សម្រាប់ Zero-config Global Edge Deployments?'
      },
      solution: 'Vercel'
    },
    quizQuestions: [
      {
        id: 'q-next-11-3',
        question: {
          en: 'What triggers an automatic preview deployment when using Vercel with GitHub integration?',
          km: 'តើអ្វីជាអ្នកកំណត់ឱ្យ Vercel ធ្វើ Preview Deployment ស្វ័យប្រវត្តិពេលប្រើប្រាស់ជាមួយ GitHub?'
        },
        options: [
          { id: '1', text: { en: 'Pushing a commit or opening a Pull Request on Git', km: 'ការ Push commit ឬ បើក Pull Request លើ Git' }, isCorrect: true },
          { id: '2', text: { en: 'Manual SSH command execution', km: 'ការវាយបញ្ជា SSH ដោយដៃ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Vercel automatically listens to Git webhook events to trigger preview and production builds.',
          km: 'Vercel ទទួលដំណឹងពី Git Webhook ដើមី្បធ្វើការ Deploy ស្វ័យប្រវត្តិ។'
        }
      }
    ]
  },

  // Capstone Module — Blog Platform with Dynamic Routes
  {
    id: 'next-hub-capstone',
    slug: 'capstone-fullstack-blog-platform',
    moduleNumber: 12,
    lessonNumberInModule: 1,
    title: {
      en: 'Capstone Build: Full-Stack Blog Platform',
      km: 'គម្រោង Capstone៖ បង្កើត Full-Stack Blog Platform ជាមួយ Next.js'
    },
    durationMinutes: 45,
    difficulty: 'Advanced',
    explanation: {
      en: 'In this Capstone project, you will combine everything learned across the 11 modules into a production Next.js Blog Platform.\n\nProject Features:\n1. Home Page (`app/page.tsx`): Server Component fetching post list with `<Image>` preview thumbnails.\n2. Dynamic Article Route (`app/blog/[slug]/page.tsx`): Pre-renders posts at build time using `generateStaticParams()`.\n3. Shared Blog Layout (`app/blog/layout.tsx`): Shared header navigation bar.\n4. Client Like Button (`LikeButton.tsx`): `"use client"` component invoking a Server Action (`"use server"`) to persist likes.\n5. Custom Loading Skeleton (`loading.tsx`) & Error Boundary (`error.tsx`).\n6. Dynamic SEO Metadata (`generateMetadata`).',
      km: 'ក្នុងគម្រោង Capstone នេះ អ្នកនឹងបញ្ចូលចំណេះដឹងទាំងអស់ពី ១១ modules ដើមី្បបង្កើត Full-Stack Blog Application មួយពេញលេញ។\n\nFeatures នៃគម្រោង៖\n១. ទំព័រដើម (`app/page.tsx`)៖ Server Component ទាញយកបញ្ជីអត្ថបទ អមដោយ `<Image>`\n២. Dynamic Article Route (`app/blog/[slug]/page.tsx`)៖ Pre-render អត្ថបទពេល Build ដោយប្រើ `generateStaticParams()`\n៣. Shared Blog Layout (`app/blog/layout.tsx`)៖ Navbar ចែករំលែករួម\n៤. Client Like Button (`LikeButton.tsx`)៖ Client component ហៅប្រើ Server Action (`"use server"`)\n៥. Loading Skeleton (`loading.tsx`) & Error Boundary (`error.tsx`)\n៦. Dynamic SEO Metadata (`generateMetadata`) '
    },
    tutorial: {
      en: 'Guided Step-by-Step Architecture:\n1. `app/layout.tsx`: Root Layout loading Google Font.\n2. `app/page.tsx`: Async Server Component rendering hero banner and post cards.\n3. `app/blog/[slug]/page.tsx`: Dynamic post detail route with `generateStaticParams` & `generateMetadata`.\n4. `app/actions/like.ts`: Server action incrementing likes with `revalidatePath`.\n5. Test complete route interactions locally!',
      km: 'ជំហាននៃការសាងសង់៖\n១. `app/layout.tsx`៖ Root Layout ផ្ទុក Google Font\n២. `app/page.tsx`៖ Async Server Component បង្ហាញ បញ្ជី Posts\n៣. `app/blog/[slug]/page.tsx`៖ Dynamic post detail រួមជាមួយ `generateStaticParams` & `generateMetadata`\n៤. `app/actions/like.ts`៖ Server action អាប់ដេត Likes ជាមួយ `revalidatePath`\n៥. តេស្តដំណើរការ App ទាំងមូល'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: #f8fafc; padding: 20px; }
    .header { background: #0f172a; border: 1px solid #334155; padding: 16px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px; }
    .card { background: #0f172a; border: 1px solid #1e293b; padding: 16px; border-radius: 12px; }
    .btn { background: #ec4899; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; }
    .tag { background: #38bdf8; color: black; font-[11px] font-weight: bold; padding: 2px 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="header">
    <h2 style="margin:0;"> SabayCode Full-Stack Next.js Blog</h2>
    <span class="tag">App Router Capstone</span>
  </div>

  <div class="grid">
    <div class="card">
      <h3>🚀 Mastering Next.js App Router</h3>
      <p style="font-size:12px; color:#94a3b8;">Server Components • zero client bundle cost</p>
      <button class="btn">❤️ 24 Likes (Server Action)</button>
    </div>
    <div class="card">
      <h3>⚡ Server Components vs Client Components</h3>
      <p style="font-size:12px; color:#94a3b8;">Composition rules and interactive boundaries</p>
      <button class="btn">❤️ 18 Likes (Server Action)</button>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: { en: '🎯 Capstone Complete Implementation Blueprint', km: '🎯 ប្លង់កូដ Capstone ពេញលេញ' },
      description: {
        en: 'Here is the primary Server Component and Server Action code for the Capstone Blog Platform:',
        km: 'ខាងក្រោមនេះជាកូដចម្បងនៃ Server Component និង Server Action សម្រាប់ Capstone Blog Platform ៖'
      },
      code: `// File Path: app/actions/blog.ts
"use server";
import { revalidatePath } from 'next/cache';

export async function likePost(slug: string) {
  console.log('Incrementing likes in DB for post:', slug);
  revalidatePath(\`/blog/\${slug}\`);
}

// File Path: app/blog/[slug]/LikeButton.tsx
"use client";
import { likePost } from '@/app/actions/blog';

export default function LikeButton({ slug }: { slug: string }) {
  return (
    <button 
      onClick={() => likePost(slug)}
      style={{ background: '#ec4899', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
    >
      ❤️ Like Article
    </button>
  );
}`
    },
    practiceExercise: {
      question: {
        en: 'In this Capstone blog architecture, which component calls `revalidatePath` after a user likes a post?',
        km: 'ក្នុងស្ថាបត្យកម្ម Capstone នេះ តើ Component មួយណាដែលហៅ `revalidatePath` បន្ទាប់ពី User ចុច Like Post?'
      },
      solution: 'The Server Action function in app/actions/blog.ts.'
    },
    quizQuestions: [
      {
        id: 'q-next-capstone-1',
        question: {
          en: 'How does the Capstone blog pre-render dynamic blog posts at build time?',
          km: 'តើ Capstone blog ធ្វើការ Pre-render dynamic blog posts ពេល build ដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'By exporting generateStaticParams() from app/blog/[slug]/page.tsx', km: 'ដោយ Export generateStaticParams() ពី app/blog/[slug]/page.tsx' }, isCorrect: true },
          { id: '2', text: { en: 'By using getServerSideProps() in Pages Router', km: 'ដោយប្រើ getServerSideProps() ក្នុង Pages Router' }, isCorrect: false }
        ],
        explanation: {
          en: '`generateStaticParams()` pre-computes dynamic route parameters during the production build.',
          km: '`generateStaticParams()` គណនាបង្កើត parameter routes ទុកជាមុនពេល build។'
        }
      }
    ]
  }
];
