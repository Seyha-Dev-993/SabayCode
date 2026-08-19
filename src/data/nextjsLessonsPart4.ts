import { Lesson } from '../types';

export const nextjsLessonsPart4: Lesson[] = [
  {
    id: "nextjs-css-support",
    title: { en: "Next.js - CSS Support", km: "Next.js - ការគាំទ្រ CSS" },
    content: {
      en: `# Integrated CSS Support
Next.js supports multiple styling methods right out of the box, letting you choose the pattern that best fits your workflow.

### Popular Styling Approaches:
1. **Tailwind CSS**: Pre-configured utility-first framework. Just add classes directly inside your JSX templates.
2. **CSS Modules**: Scopes class names locally to prevent name conflicts. Create files ending in \`.module.css\`:
   \`\`\`css
   /* Button.module.css */
   .btn { padding: 8px 12px; background: blue; }
   \`\`\`
   \`\`\`tsx
   import styles from './Button.module.css';
   export default function Button() {
     return <button className={styles.btn}>Click</button>;
   }
   \`\`\``,
      km: `# ការគាំទ្រស្ទីលតុបតែង (CSS Support)
Next.js គាំទ្រវិធីសាស្ត្ររៀបចំស្ទីលតុបតែង (Styling) ផ្សេងៗគ្នាជាច្រើន ដែលជួយសម្រួលដល់ការជ្រើសរើសរបៀបសរសេរកូដរបស់អ្នក។

### វិធីសាស្ត្រពេញនិយម៖
1. **Tailwind CSS**: ក្របខ័ណ្ឌប្រើប្រាស់ពាក្យគន្លឹះរហ័ស។ គ្រាន់តែសរសេរ class ក្នុង JSX។
2. **CSS Modules**: ជួយលាក់កូដ Class ឱ្យដំណើរការតែក្នុង component នោះ មិនប៉ះពាល់ដល់ឯកសារផ្សេង។ បង្កើតឯកសារចុងក្រោយដោយ \`.module.css\`៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>CSS Modules Compilation output</h4>
        <div style={{ padding: '12px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
          <span style={{ fontSize: '11px', color: '#64748b' }}>Original JSX: {"<div className={styles.card}>"}</span>
          <div style={{ fontSize: '20px', margin: '8px 0' }}>➔</div>
          <span style={{ fontSize: '11px', color: '#10b981', fontFamily: 'monospace' }}>Compiled HTML: {"<div class=\"Card_card__abc12\">"} (Safe from name collision!)</span>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-global-css",
    title: { en: "Next.js - Global CSS Support", km: "Next.js - Global CSS" },
    content: {
      en: `# Global CSS Stylesheet
To apply global styles (such as CSS resets, font configurations, or Tailwind classes) across all layouts, Next.js relies on a unified global stylesheet.

### Declaration Rules:
* The stylesheet is typically named **\`globals.css\`**.
* You must import this stylesheet directly inside your root **\`layout.tsx\`** file so that the styles are applied to every page on your site.

\`\`\`tsx
// app/layout.tsx
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
\`\`\``,
      km: `# ការប្រើប្រាស់ Global CSS (Global CSS Support)
ដើម្បីកំណត់ស្ទីលទូទាំងគេហទំព័រ (ដូចជា CSS Resets, global fonts ឬការកំណត់ថ្នាក់ Tailwind) Next.js ប្រើប្រាស់ឯកសារ CSS រួមគ្នា។

### លក្ខខណ្ឌនៃការប្រើប្រាស់៖
* ជាទូទៅឯកសារនេះត្រូវបានដាក់ឈ្មោះថា **\`globals.css\`**។
* អ្នកត្រូវនាំចូល (Import) ឯកសារនេះនៅក្នុង **\`layout.tsx\`** គោល ដើម្បីឱ្យវាគ្របដណ្តប់រាល់ទំព័រទាំងអស់៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Root Layout Hierarchy</h4>
        <div style={{ padding: '12px', border: '2px solid #000', borderRadius: '8px', backgroundColor: '#fafafa' }}>
          <code>📁 app/layout.tsx</code>
          <div style={{ border: '1px solid #10b981', padding: '8px', backgroundColor: '#f0fdf4', margin: '8px 0 0 0', borderRadius: '4px' }}>
            <span>import "./globals.css"; (Styles applied globally)</span>
            <div style={{ border: '1px dashed #4f46e5', padding: '6px', backgroundColor: '#f5f3ff', margin: '6px 0 0 0', borderRadius: '4px' }}>
              <span>📄 app/page.tsx (Inherits reset and theme colors)</span>
            </div>
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
    id: "nextjs-metadata",
    title: { en: "Next.js - Meta Data", km: "Next.js - ការកំណត់ Metadata" },
    content: {
      en: `# Integrated Metadata and SEO
Next.js has a built-in Metadata API that lets you easily define head tags (like title, description, and open graph) for optimal search indexing and sharing preview metrics.

### Two Metadata Patterns:
1. **Static Metadata**: Export a static \`metadata\` object in your layout or page:
   \`\`\`typescript
   export const metadata: Metadata = {
     title: 'Developer Portal',
     description: 'Secure dashboard',
   };
   \`\`\`
2. **Dynamic Metadata**: Generate metadata dynamically based on route parameters:
   \`\`\`typescript
   export async function generateMetadata({ params }) {
     const { id } = await params;
     const post = await fetchPost(id);
     return { title: post.title };
   }
   \`\`\``,
      km: `# ការកំណត់ SEO និង Metadata
Next.js ផ្តល់នូវ Metadata API មកជាមួយស្រាប់ ដើម្បីកំណត់កូដជំនួយ SEO (ដូចជា Title, Description, and Open Graph) សម្រាប់ម៉ាស៊ីនស្វែងរក និងបង្ហាញលទ្ធផលស្អាតពេលចែករំលែកតំណ។

### លំនាំទាំងពីរនៃការប្រើប្រាស់៖
1. **Static Metadata**: នាំចេញ Object \`metadata\` ឋិតិវន្តនៅក្នុង layout ឬ page៖
   \`\`\`typescript
   export const metadata: Metadata = {
     title: 'Developer Portal',
     description: 'Secure dashboard',
   };
   \`\`\`
2. **Dynamic Metadata**: បង្កើត metadata ឌីណាមិកផ្អែកលើ URL Params៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>SEO Meta Engine Preview</h4>
        <div style={{ border: '1px solid #e2e8f0', padding: '12px', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
          <span style={{ fontSize: '11px', color: '#64748b' }}>Google Search Result Card:</span>
          <h3 style={{ margin: '4px 0 2px 0', color: '#1a0dab', fontSize: '18px', fontWeight: 'normal', textDecoration: 'underline', cursor: 'pointer' }}>Developer Portal | Article Details</h3>
          <span style={{ fontSize: '12px', color: '#006621', display: 'block', marginBottom: '4px' }}>https://my-blog.com/posts/react-rendering</span>
          <p style={{ margin: 0, fontSize: '13px', color: '#545454' }}>
            Discover how server compilation enhances load metrics and secures sensitive key references.
          </p>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-error-handling",
    title: { en: "Next.js - Error Handling", km: "Next.js - ការគ្រប់គ្រងកំហុស" },
    content: {
      en: `# Graceful Error Boundaries
Next.js handles runtime errors using a dedicated **\`error.tsx\`** boundary file.

### How it works:
* The \`error.tsx\` component must be a **Client Component** (marked with \`"use client"\`).
* It automatically wraps its nested child page. If an error is thrown during rendering, the boundary catches it and displays a fallback UI instead of crashing the entire application.

\`\`\`tsx
"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void; // Function to attempt re-rendering
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  return (
    <div>
      <h3>An unexpected error occurred</h3>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
\`\`\``,
      km: `# ការគ្រប់គ្រងកំហុសបច្ចេកទេស (Error Handling)
Next.js ជួយការពារកម្មវិធីកុំឱ្យគាំងដោយសារតែកំហុសបច្ចេកទេសផ្សេងៗ តាមរយៈឯកសារពិសេសឈ្មោះ **\`error.tsx\`**។

### របៀបដំណើរការ៖
* សមាសភាគ \`error.tsx\` ត្រូវតែជា **Client Component** (ប្រើ \`"use client"\`)។
* វាដើរតួជាកម្រិតការពារ (Error Boundary)។ ប្រសិនបើកូដទំព័រខាងក្នុងមានកំហុស វានឹងស្ទាក់ចាប់យកមកបង្ហាញប៊ូតុងសាកល្បងឡើងវិញជំនួសវិញ៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [hasError, setHasError] = React.useState(false);

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Error Boundary Interception</h4>
        <div style={{ padding: '15px', borderRadius: '8px', border: '1px solid', backgroundColor: hasError ? '#fef2f2' : '#f0fdf4', borderColor: hasError ? '#fca5a5' : '#bbf7d0' }}>
          {!hasError ? (
            <div>
              <p style={{ margin: '0 0 10px 0', color: '#166534' }}>✓ Everything is running smoothly inside app/page.tsx</p>
              <button onClick={() => setHasError(true)} style={{ padding: '6px 12px', background: '#dc2626', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Simulate Runtime Error
              </button>
            </div>
          ) : (
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: '#991b1b' }}>📁 Intercepted by app/error.tsx</h4>
              <p style={{ fontSize: '13px', margin: '0 0 10px 0', color: '#7f1d1d' }}>Failed to resolve dashboard analytics database query thread.</p>
              <button onClick={() => setHasError(false)} style={{ padding: '6px 12px', background: '#1e293b', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Click to reset() rendering boundary
              </button>
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
    id: "nextjs-server-actions",
    title: { en: "Next.js - Server Actions", km: "Next.js - មុខងារ Server Actions" },
    content: {
      en: `# Server Actions
**Server Actions** let you write server-side code (like database queries or API mutations) directly inside your client-side forms, without needing to create API endpoints manually.

### Implementing Server Actions:
1. Define an asynchronous function and add the **\`"use server"\`** directive at the very top of it.
2. Pass the function directly into your form's \`action\` attribute:

\`\`\`tsx
export default function BlogPostForm() {
  async function createPost(formData: FormData) {
    "use server";
    
    const title = formData.get('title');
    // Save to database securely on the server!
    await db.posts.save({ title });
  }

  return (
    <form action={createPost}>
      <input name="title" required />
      <button type="submit">Publish Article</button>
    </form>
  );
}
\`\`\``,
      km: `# មុខងារដំណើរការលើ Server (Server Actions)
**Server Actions** អនុញ្ញាតឱ្យអ្នកសរសេរកូដដំណើរការលើ Server (ដូចជាការរក្សាទុកក្នុង database ឬការហៅ API សម្ងាត់) ដោយផ្ទាល់នៅក្នុង Form Client-side ដោយមិនបាច់បង្កើត API Endpoint ឡើយ។

### របៀបប្រើប្រាស់៖
1. បង្កើតអនុគមន៍ async រួចដាក់ឃ្លា **\`"use server"\`** នៅលើគេបង្អស់ក្នុងអនុគមន៍នោះ។
2. ភ្ជាប់អនុគមន៍នោះទៅកាន់ attribute \`action\` របស់ Form ផ្ទាល់តែម្តង៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [submitting, setSubmitting] = React.useState(false);
    const [msg, setMsg] = React.useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitting(true);
      setMsg("");
      setTimeout(() => {
        setSubmitting(false);
        setMsg("✓ Secure database transaction completed directly on Server! Zero API fetch endpoints required.");
      }, 1200);
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Vercel Server Actions pipeline</h4>
        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: '12px', color: '#64748b' }}>Post Content:</label>
          <input required placeholder="Typing secure article details..." style={{ width: '100%', padding: '8px', margin: '4px 0 10px 0', boxSizing: 'border-box' }} />
          <button type="submit" style={{ padding: '8px 16px', background: '#000', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            {submitting ? "Invoking Action on Server..." : "Submit Server Action"}
          </button>
        </form>
        {msg && <p style={{ fontSize: '12px', color: '#166534', marginTop: '10px', fontWeight: 'bold' }}>{msg}</p>}
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-fast-refresh",
    title: { en: "Next.js - Fast Refresh", km: "Next.js - មុខងារ Fast Refresh" },
    content: {
      en: `# Fast Refresh
**Fast Refresh** is a built-in development feature that gives you near-instant feedback for code changes without losing the component's state in your browser.

### Key Features:
* **Preserving State**: If you edit a component's styling or markup, the page will update instantly without resetting things like input fields or open modals.
* **Smart Recovery**: If you make a syntax error, Fast Refresh will display a clear error overlay. Once you fix the code, the overlay disappears and state is restored naturally.`,
      km: `# មុខងារធ្វើបច្ចុប្បន្នភាពរហ័ស (Fast Refresh)
**Fast Refresh** គឺជាមុខងារជំនួយសរសេរកូដដែលឆ្លុះបញ្ចាំងរាល់ការផ្លាស់ប្តូរកូដនៅលើអេក្រង់ភ្លាមៗ ដោយមិនធ្វើឱ្យបាត់បង់ស្ថានភាព (State) របស់ទំព័រឡើយ។

### លក្ខណៈសំខាន់ៗ៖
* **រក្សាទុក State**: ទោះបីជាអ្នកកែប្រែរចនាបថ ឬការបង្ហាញកូដ ទំព័រនឹងអាប់ដេតភ្លាមៗដោយមិនធ្វើឱ្យការបំពេញព័ត៌មានកន្លងមកត្រូវបាត់ឡើយ។
* **ស្តារឡើងវិញវៃឆ្លាត**: ប្រសិនបើសរសេរកូដខុស វានឹងលោតផ្ទាំង Error ប្រាប់។ ពេលកែកូដត្រូវវិញ ផ្ទាំងនោះនឹងបាត់ទៅវិញភ្លាមៗ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [text, setText] = React.useState("This text will be preserved even if you re-render!");
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Interactive Fast Refresh Tester</h4>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #cbd5e1', borderRadius: '4px' }}
        />
        <p style={{ fontSize: '11px', color: '#64748b', marginTop: '5px' }}>
          Inside local Vercel compiler, editing the parent CSS styles retains the input value above seamlessly.
        </p>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-internationalization",
    title: { en: "Next.js - Internationalization", km: "Next.js - ការបកប្រែពហុភាសា" },
    content: {
      en: `# Built-In Internationalization (i18n)
Next.js supports multi-language projects through dynamic subpaths (like \`/en/about\` or \`/km/about\`).

### Creating dynamic language segments:
Wrap your routes inside a dynamic **\`[lang]\`** folder directory:
* Folder: **\`app/[lang]/page.tsx\`**
* Mapped URLs: \`/en\` or \`/km\`

### Reading local parameters:
\`\`\`tsx
interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const dictionary = lang === 'km' ? khmerDict : englishDict;
  
  return <h1>{dictionary.welcome}</h1>;
}
\`\`\``,
      km: `# ការរៀបចំទំព័រពហុភាសា (Internationalization - i18n)
Next.js គាំទ្រការរៀបចំគេហទំព័រជាច្រើនភាសា តាមរយៈការបែងចែកផ្លូវ URL (ដូចជា \`/en/about\` ឬ \`/km/about\`)។

### របៀបបង្កើតថតភាសា៖
រៀបចំកូដទំព័រទាំងអស់នៅក្នុងថតឌីណាមិកឈ្មោះ **\`[lang]\`**៖
* រចនាសម្ព័ន្ធ៖ **\`app/[lang]/page.tsx\`**
* ផ្លូវ URL សម្រេច៖ \`/en\` ឬ \`/km\`

### របៀបហៅភាសាមកបង្ហាញ៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [lang, setLang] = React.useState("en");
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Multi-lingual i18n Segment Simulator</h4>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <button onClick={() => setLang('en')} style={{ padding: '6px 12px', background: lang === 'en' ? '#000' : '#e2e8f0', color: lang === 'en' ? '#fff' : '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>English Path (/en)</button>
          <button onClick={() => setLang('km')} style={{ padding: '6px 12px', background: lang === 'km' ? '#000' : '#e2e8f0', color: lang === 'km' ? '#fff' : '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Khmer Path (/km)</button>
        </div>

        <div style={{ padding: '12px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
          <strong>{lang === 'en' ? "Welcome to Next.js Learning Hub" : "សូមស្វាគមន៍មកកាន់មជ្ឈមណ្ឌលសិក្សា Next.js"}</strong>
          <p style={{ margin: '4px 0 0 0', fontSize: '11px', color: '#64748b' }}>Language segment active: {lang}</p>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-authentication",
    title: { en: "Next.js - Authentication", km: "Next.js - សុវត្ថិភាពចូលប្រព័ន្ធ" },
    content: {
      en: `# Authentication Strategies
Next.js supports multiple authentication models, from lightweight session-token checks to robust cloud-hosted authorization providers.

### Popular Libraries:
* **Auth.js (NextAuth)**: The official community standard. It provides built-in integration for database adapters and OAuth login providers (like Google or GitHub).
* **Clerk / Auth0**: Cloud-hosted authentication options that handle logins, registrations, and user profiles with ready-to-use layouts.`,
      km: `# ប្រព័ន្ធសុវត្ថិភាពចូលប្រព័ន្ធ (Authentication)
Next.js គាំទ្រគំរូការពារសុវត្ថិភាពជាច្រើនបែប ចាប់តាំងពីការពិនិត្យ Session Token ធម្មតា រហូតដល់ការប្រើប្រាស់សេវាកម្មពពក (Cloud Auth Providers)។

### បណ្ណាល័យពេញនិយម៖
* **Auth.js (NextAuth)**: បណ្ណាល័យស្តង់ដារសហគមន៍ដែលគាំទ្រយ៉ាងទូលំទូលាយសម្រាប់ការភ្ជាប់ទៅកាន់ Database និងគណនី Google/GitHub។
* **Clerk / Auth0**: សេវាកម្មគ្រប់គ្រងគណនីលើពពកដែលមានសុវត្ថិភាពខ្ពស់ និងរៀបចំប្លង់ Login ស្រាប់ៗ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Core Auth Handshake Flows</h4>
        <div style={{ padding: '16px', border: '1px dashed #4f46e5', borderRadius: '10px', backgroundColor: '#faf5ff' }}>
          <pre style={{ margin: 0, fontFamily: 'monospace', fontSize: '12px', color: '#5b21b6' }}>
{\`// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GitHubProvider({ clientId: process.env.GITHUB_ID })
  ]
});\`}
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
    id: "nextjs-session-management",
    title: { en: "Next.js - Session Management", km: "Next.js - ការគ្រប់គ្រង Session" },
    content: {
      en: `# Session Management
Session management tracks users across pages. In Next.js, this is accomplished using secure cookies and token verification.

### Session Models:
1. **Stateless (JWT)**: User details are encrypted into a JSON Web Token (JWT) and stored in a secure client cookie. The server validates the token cryptographically on each request without querying a database.
2. **Database-backed Sessions**: A unique session ID is stored in a cookie. The server queries your database on every request to verify the ID and fetch the user's details.`,
      km: `# ការគ្រប់គ្រងការតភ្ជាប់គណនី (Session Management)
Session Management ជួយតាមដានគណនីអ្នកប្រើប្រាស់ពេលប្តូរទំព័រ។ នៅក្នុង Next.js មុខងារនេះត្រូវបានដំណើរការតាមរយៈ Cookies សុវត្ថិភាព និងការពិនិត្យ Token។

### គំរូនៃ Sessions៖
1. **Stateless (JWT)**: ទិន្នន័យត្រូវបានកូដកម្មវិធីទៅជា Token រក្សាទុកក្នុង Cookie របស់ Client។ Server គ្រាន់តែអាន Token នេះដើម្បីផ្ទៀងផ្ទាត់ដោយមិនបាច់ឆែក Database។
2. **Database-backed Sessions**: លេខសម្គាល់ Session ID ត្រូវបានរក្សាទុកក្នុង Cookie ហើយ Server ត្រូវឆែកមើលក្នុង Database រាល់ពេលមានសកម្មភាពទំព័រ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Stateless JWT Encrypted Token Model</h4>
        <div style={{ padding: '12px', border: '1px solid #10b981', borderRadius: '6px', backgroundColor: '#f0fdf4' }}>
          <span style={{ fontSize: '11px', color: '#047857', display: 'block' }}>ENCRYPTED SESSION COOKIE:</span>
          <code style={{ fontSize: '12px', wordBreak: 'break-all', color: '#065f46' }}>
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5OTAxIiwicm9sZSI6ImF1dGhvciJ9
          </code>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-authorization",
    title: { en: "Next.js - Authorization", km: "Next.js - ការកំណត់សិទ្ធិប្រើប្រាស់" },
    content: {
      en: `# Access Control and Authorization
**Authorization** restricts page access based on user roles (such as restricting admin control panels to administrators).

### Secure Authorization Patterns:
1. **Middleware-level Protection**: Block access globally before rendering pages:
   \`\`\`typescript
   if (pathname.startsWith('/admin') && user.role !== 'admin') {
     return NextResponse.redirect(new URL('/denied', request.url));
   }
   \`\`\`
2. **Component-level Checks**: Inspect roles directly inside Server Components to hide specific UI parts:
   \`\`\`tsx
   const user = await getActiveSession();
   if (user.role === 'admin') {
     return <AdminConsole />;
   }
   \`\`\``,
      km: `# ការកំណត់សិទ្ធិប្រើប្រាស់ (Authorization)
**Authorization** គឺជាការកំណត់ និងបែងចែកកម្រិតអនុញ្ញាតឱ្យចូលប្រើប្រាស់ទំព័រនានាផ្អែកលើតួនាទី (Roles) របស់គណនីនីមួយៗ (ដូចជាការការពារទំព័រគ្រប់គ្រងទុកសម្រាប់តែ Admin)។

### របៀបការពារសុវត្ថិភាព៖
1. **Middleware-level Protection**: រារាំងជាសកលមុននឹងទំព័រចាប់ផ្តើមទាញយកកូដមកបង្ហាញ៖
   \`\`\`typescript
   if (pathname.startsWith('/admin') && user.role !== 'admin') {
     return NextResponse.redirect(new URL('/denied', request.url));
   }
   \`\`\`
2. **Component-level Checks**: ពិនិត្យមើលតួនាទីនៅក្នុងសមាសភាគដើម្បីលាក់ប៊ូតុងសំខាន់ៗ៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [role, setRole] = React.useState("guest");
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Access Control Role Simulator</h4>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
          {["guest", "editor", "admin"].map(r => (
            <button 
              key={r}
              onClick={() => setRole(r)}
              style={{ padding: '6px 12px', border: 'none', background: role === r ? '#4f46e5' : '#e2e8f0', color: role === r ? '#fff' : '#000', borderRadius: '4px', cursor: 'pointer', textTransform: 'capitalize' }}
            >
              {r}
            </button>
          ))}
        </div>

        <div style={{ padding: '12px', borderRadius: '6px', backgroundColor: role === 'admin' ? '#ecfdf5' : '#fffbeb', border: '1px solid', borderColor: role === 'admin' ? '#a7f3d0' : '#fde68a' }}>
          {role === "admin" ? (
            <div style={{ color: '#065f46' }}>🔑 <strong>Admin Panel Access Granted!</strong> Displaying security logs and billing tabs.</div>
          ) : (
            <div style={{ color: '#92400e' }}>⚠️ Access Restressed. Admin tabs are hidden for <strong>{role}</strong> roles.</div>
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
    id: "nextjs-caching",
    title: { en: "Next.js - Caching", km: "Next.js - ប្រព័ន្ធ Caching" },
    content: {
      en: `# Caching Mechanics
Next.js features a multi-layered caching system designed to optimize performance and lower hosting costs.

> 📚 **The Caching Pipeline**: In this 5-page sub-cluster (Caching ➔ Request Memoization), we will examine how all **four distinct cache layers** work together. They operate as a unified system, processing each request step-by-step.

### The Four Cache Layers:
* **Client Router Cache**: Stores route segments in browser memory.
* **Full Route Cache**: Caches HTML and Server Component payloads on the server at build time.
* **Data Cache**: Caches data fetched from external APIs or databases.
* **Request Memoization**: Deduplicates duplicate fetch requests within a single request lifecycle.

Understanding these caching layers is key to building fast, cost-effective full-stack applications with Next.js.`,
      km: `# ប្រព័ន្ធគ្រប់គ្រងការចងចាំ Caching
Next.js មានប្រព័ន្ធ Caching ជាច្រើនកម្រិតដែលរៀបចំឡើងជាពិសេស ដើម្បីបង្កើនល្បឿន និងកាត់បន្ថយការចំណាយលើការរក្សាទុក Server។

> 📚 **បំពង់បង្ហូរ Cache រួមគ្នា (The Caching Pipeline)**: នៅក្នុងមេរៀនជាក្រុមទាំង ៥ ទំព័រនេះ យើងនឹងរួមគ្នាសិក្សាពី **កម្រិត Caching ទាំងបួន** ដែលដើរតួជាប្រព័ន្ធឯកភាពមួយ ដំណើរការម្តងមួយកម្រិតៗរាល់ពេលមាន request ចូលមក។

### កម្រិត Caching ទាំងបួន៖
* **Client Router Cache**: រក្សាទុកបំណែកទំព័រនៅក្នុងម៉ាស៊ីន Browser របស់អ្នកអាន។
* **Full Route Cache**: រក្សាទុកកូដ HTML សម្រេចនៅលើ Server តាំងពីពេល Build កូដ។
* **Data Cache**: រក្សាទុកលទ្ធផលទាញយកពី API ខាងក្រៅ ឬ Database។
* **Request Memoization**: លុបចោលរាល់ការហៅ Fetch ជាន់គ្នាក្នុងការដំណើរការ Render តែមួយ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Unified Caching Simulator Component
  function CacheSimulator() {
    const [step, setStep] = React.useState(0);
    const [logs, setLogs] = React.useState([]);

    const runPipeline = () => {
      setStep(1);
      setLogs(["1. Request started... Checking Client Router Cache"]);
      
      setTimeout(() => {
        setStep(2);
        setLogs(prev => [...prev, "2. Cache Miss in browser ➔ Requesting Vercel server ➔ Checking Full Route Cache"]);
      }, 1000);

      setTimeout(() => {
        setStep(3);
        setLogs(prev => [...prev, "3. Cache Miss on server HTML ➔ Re-rendering Server Components ➔ Checking Data Cache"]);
      }, 2000);

      setTimeout(() => {
        setStep(4);
        setLogs(prev => [...prev, "4. Cache Hit in Data Cache! Returning API response without re-fetching external API!"]);
      }, 3000);

      setTimeout(() => {
        setStep(5);
        setLogs(prev => [...prev, "5. Request Memoization: Deduplicated 3 identical fetch() queries in the rendering tree."]);
      }, 4000);
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '15px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h3>▲ Unified NextJS Caching Engine Simulator</h3>
        <button onClick={runPipeline} style={{ padding: '8px 16px', background: '#000', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
          Fetch Product Page (Trigger Cache Pipeline)
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#64748b', display: 'block', marginBottom: '8px' }}>CACHE FLOW CHART:</span>
            {[
              { id: 1, name: "1. Client Router Cache (Browser RAM)" },
              { id: 2, name: "2. Full Route Cache (Server HTML)" },
              { id: 3, name: "3. Data Cache (API fetch response)" },
              { id: 4, name: "4. Request Memoization (Deduplication)" }
            ].map(l => (
              <div key={l.id} style={{ padding: '8px', marginBottom: '6px', borderRadius: '4px', border: '1px solid', backgroundColor: step === l.id ? '#ecfdf5' : '#f8fafc', borderColor: step === l.id ? '#10b981' : '#cbd5e1', fontSize: '12px', fontWeight: step === l.id ? 'bold' : 'normal' }}>
                {l.name} {step === l.id && "⚡"}
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: '#0f172a', padding: '12px', borderRadius: '8px', color: '#34d399', fontSize: '12px', height: '180px', overflowY: 'auto' }}>
            <span style={{ color: '#94a3b8', display: 'block', marginBottom: '8px' }}>REAL-TIME CACHING LOGS:</span>
            {logs.length === 0 ? (
              <span style={{ color: '#64748b' }}>Pipeline idle. Click fetch button...</span>
            ) : (
              logs.map((log, idx) => <div key={idx} style={{ padding: '3px 0', fontFamily: 'monospace' }}>{log}</div>)
            )}
          </div>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<CacheSimulator />);
</script>`
  },
  {
    id: "nextjs-data-caching",
    title: { en: "Next.js - Data Caching", km: "Next.js - Data Caching (Data Cache)" },
    content: {
      en: `# The Data Cache
The **Data Cache** is a persistent cache on Vercel's servers that saves data fetched from external APIs or databases across unique requests and deployments.

### Shared Caching Blueprint Extension:
In our product fetching example, the **Data Cache** ensures that our database is not overwhelmed by duplicate queries.

\`\`\`typescript
// Caches this product data on the server until it is explicitly revalidated
const res = await fetch('https://api.db/product/45', {
  next: { tags: ['products'] }
});
\`\`\`

### How to trigger updates:
To clear the Data Cache and fetch fresh data, you can use **\`revalidateTag\`** or **\`revalidatePath\`** inside a Server Action:

\`\`\`typescript
"use server";
import { revalidateTag } from 'next/cache';

export async function updateProduct() {
  // Clear the cached product data
  revalidateTag('products'); 
}
\`\`\``,
      km: `# ប្រព័ន្ធរក្សាទុកទិន្នន័យ (Data Cache)
**Data Cache** គឺជាប្រព័ន្ធរក្សាទុកទិន្នន័យជាប់នៅលើ Vercel servers ដែលជួយចងចាំទិន្នន័យដែលបានមកពីការហៅ APIs ខាងក្រៅ ឬ Database ឆ្លងកាត់ការស្នើសុំ និងការដាក់ដំណើរការផ្សេងៗគ្នា។

### គម្រោង Caching រួមគ្នា៖
នៅក្នុងការទាញយកទិន្នន័យផលិតផលរបស់យើង **Data Cache** ធានាថា Database របស់យើមិនត្រូវបានរំខានដោយការហៅទិន្នន័យដដែលៗពីអ្នកប្រើប្រាស់រាប់ម៉ឺននាក់ឡើយ។

\`\`\`typescript
// រក្សាទុកទិន្នន័យលើ Server រហូតដល់ត្រូវបានលុបចោល
const res = await fetch('https://api.db/product/45', {
  next: { tags: ['products'] }
});
\`\`\`

### របៀបសម្អាត Cache៖
អ្នកអាចសម្អាត Cache ដើម្បីទទួលបានទិន្នន័យថ្មីដោយប្រើប្រាស់ **\`revalidateTag\`** ឬ **\`revalidatePath\`** នៅក្នុង Server Action៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [status, setStatus] = React.useState("Data Cache: ACTIVE (Serving product details instantly)");
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Data Cache Controller</h4>
        <p style={{ fontSize: '13px', color: '#4b5563' }}>Simulates clearing the Data Cache in Next.js.</p>
        <button 
          onClick={() => {
            setStatus("Data Cache: REVALIDATING... (Fetching fresh data from database...)");
            setTimeout(() => setStatus("Data Cache: ACTIVE (Fresh product details cached successfully!)"), 1500);
          }}
          style={{ padding: '8px 16px', background: '#e11d48', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Simulate revalidateTag('products')
        </button>
        <div style={{ marginTop: '12px', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px', fontSize: '12px' }}>
          <strong>Status:</strong> {status}
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-router-caching",
    title: { en: "Next.js - Router Caching", km: "Next.js - Client Router Cache" },
    content: {
      en: `# The Client Router Cache
The **Router Cache** is a temporary cache that stores visited page layouts and route segments inside the client's browser memory (RAM).

### Shared Caching Blueprint Extension:
In our product catalog app, clicking back and forth between the Home page and product pages is completely instant because the browser already has those layouts saved in memory.

### Router Cache Duration:
* **Dynamic Routes**: Cached for **30 seconds** in browser memory.
* **Static Routes**: Cached for **5 minutes** in browser memory.

> **Tip**: Navigating via the \`<Link>\` component automatically checks this client-side cache first to make transitions feel instant.`,
      km: `# ការចងចាំនៅលើ Browser (Client Router Cache)
**Router Cache** គឺជាប្រព័ន្ធចងចាំបណ្តោះអាសន្នដែលរក្សាទុកប្លង់ទំព័រដែលបានចូលមើលរួច នៅក្នុងអង្គចងចាំ (RAM) របស់ Browser របស់ Client ផ្ទាល់តែម្តង។

### គម្រោង Caching រួមគ្នា៖
នៅក្នុងកម្មវិធីស្វែងរកផលិតផលរបស់យើង ការចុចត្រឡប់ទៅមកពីទំព័រដើមទៅកាន់ទំព័រផលិតផល គឺលឿនបំផុត (0ms) ដោយសារតែ Browser មិនបាច់សួរទៅកាន់ Server ទៀតឡើយ។

### រយៈពេលចងចាំ៖
* **Dynamic Routes**: រក្សាទុកបាន **៣០ វិនាទី** ក្នុង RAM។
* **Static Routes**: រក្សាទុកបាន **៥ នាទី** ក្នុង RAM។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [seconds, setSeconds] = React.useState(0);
    React.useEffect(() => {
      const interval = setInterval(() => setSeconds(s => s + 1), 1000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Client Router Cache Expiry Indicator</h4>
        <p style={{ fontSize: '13px' }}>Time since last page transition: <strong>{seconds}s</strong></p>
        <div style={{ padding: '12px', borderRadius: '6px', backgroundColor: seconds < 30 ? '#d1fae5' : '#fee2e2', color: seconds < 30 ? '#065f46' : '#991b1b', fontSize: '13px' }}>
          {seconds < 30 ? "⚡ Browser RAM Cache is FRESH. Back transitions will respond in 0ms." : "⚠️ Cache expired. Next transition will fetch fresh RSC payload from Vercel server."}
        </div>
        {seconds >= 30 && (
          <button onClick={() => setSeconds(0)} style={{ marginTop: '10px', padding: '6px 12px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Navigate (Refresh Cache)</button>
        )}
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-full-route-caching",
    title: { en: "Next.js - Full Route Caching", km: "Next.js - Full Route Caching" },
    content: {
      en: `# The Full Route Cache
The **Full Route Cache** caches the HTML skeleton and React Server Component (RSC) payloads on Vercel's servers at build time.

### Shared Caching Blueprint Extension:
When users visit our static product page, they don't have to wait for Vercel servers to compile the React code. The server simply grabs the pre-compiled HTML and delivers it instantly.

### When does it bypass?
The Full Route Cache is automatically bypassed if your page utilizes a **dynamic function**:
* Reading incoming request \`cookies()\`
* Inspecting custom query parameters
* Performing an uncached \`fetch()\` operation`,
      km: `# របៀបចងចាំទំព័រពេញលេញ (Full Route Cache)
**Full Route Cache** គឺជាការចងចាំដែលរក្សាទុកកូដ HTML សម្រេច និង React Server Component (RSC) payloads នៅលើ Vercel servers តាំងពីពេលដែលអ្នក build កូដគម្រោង (Build-time)។

### គម្រោង Caching រួមគ្នា៖
នៅពេលដែលអ្នកចូលទស្សនាទំព័រផលិតផលឋិតិវន្តរបស់យើង ម៉ាស៊ីនបម្រើមិនបាច់ចំណាយពេលរៀបចំ និង compile កូដ React ឡើងវិញឡើយ គឺវាផ្ញើទំព័រ HTML ដែលបានរៀបចំរួចជាស្រេចទៅកាន់ទូរស័ព្ទរបស់អ្នកភ្លាមៗ។

### ករណីណាដែលវាមិនធ្វើការចងចាំ?
Full Route Cache នឹងមិនដំណើរការឡើយ ប្រសិនបើទំព័រនោះប្រើប្រាស់ អនុគមន៍ឌីណាមិក៖
* ការអាន \`cookies()\` របស់ request ចូលមក
* ការអានតម្លៃ query parameters
* ការហៅ fetch() ដែលបិទការចងចាំ (no-store)`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Server Full Route Cache Status</h4>
        <div style={{ padding: '12px', backgroundColor: '#ecfdf5', border: '1px solid #10b981', borderRadius: '6px' }}>
          <strong>HTML & RSC Payload Status: PRE-COMPILED</strong>
          <p style={{ margin: '4px 0 0 0', fontSize: '11px', color: '#047857' }}>✓ Render occurred during "npm run build". Page delivery bypasses Node runtime compilation entirely.</p>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-request-memoization",
    title: { en: "Next.js - Request Memoization", km: "Next.js - ការលុបការហៅទិន្នន័យជាន់គ្នា" },
    content: {
      en: `# Request Memoization
**Request Memoization** is a performance optimization that automatically deduplicates duplicate \`fetch\` requests within a single render tree.

### Shared Caching Blueprint Finalization:
Suppose multiple components on your product page (such as the navigation, hero banner, and review section) all need to fetch the same product details:

\`\`\`tsx
// Inside Component A:
const data = await fetch('https://api.db/product/45');

// Inside Component B:
const data = await fetch('https://api.db/product/45');
\`\`\`

Next.js automatically intercepts the second call and returns the cached result from the first one. This prevents duplicate API requests over the network during a single request lifecycle!`,
      km: `# ការលុបការហៅទិន្នន័យជាន់គ្នា (Request Memoization)
**Request Memoization** គឺជាបច្ចេកទេសបង្កើនល្បឿនដែលលុបចោលរាល់ការហៅ \`fetch\` ជាន់គ្នាក្នុងការដំណើរការ Render ទំព័រតែមួយ។

### គម្រោង Caching រួមគ្នា៖
ឧបមាថានៅលើទំព័រផលិតផលរបស់យើង មាន components ផ្សេងៗគ្នាជាច្រើន (ដូចជា Navbar, Header, និង Reviews) ដែលត្រូវហៅទិន្នន័យផលិតផលដូចគ្នា៖

\`\`\`tsx
// នៅក្នុង Component A:
const data = await fetch('https://api.db/product/45');

// នៅក្នុង Component B:
const data = await fetch('https://api.db/product/45');
\`\`\`

Next.js នឹងស្ទាក់ចាប់ការហៅលើកទីពីរ រួចបញ្ជូនទិន្នន័យដែលបានមកពីការហៅលើកដំបូងឱ្យទៅប្រើប្រាស់ភ្លាមៗ ធ្វើឱ្យបណ្តាញមិនរវល់ទាញយករបស់ដដែលៗក្នុងពេលតែមួយឡើយ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [count, setCount] = React.useState(0);
    const [logs, setLogs] = React.useState([]);

    const triggerDuplicateFetch = () => {
      setCount(prev => prev + 1);
      const time = new Date().toLocaleTimeString();
      setLogs([
        \`[\${time}] Component A dispatched: fetch('/api/product/45') ➔ Executed over network\`,
        \`[\${time}] Component B dispatched: fetch('/api/product/45') ➔ ✓ Intercepted & Deduplicated (Returned from RAM!)\`,
        \`[\${time}] Component C dispatched: fetch('/api/product/45') ➔ ✓ Intercepted & Deduplicated (Returned from RAM!)\`
      ]);
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Request Memoization Tester</h4>
        <p style={{ fontSize: '12px', color: '#6b7280' }}>Click below to simulate 3 child components requesting the same API URL simultaneously.</p>
        <button onClick={triggerDuplicateFetch} style={{ padding: '8px 16px', background: '#000', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Simulate Parallel Component Render
        </button>

        {logs.length > 0 && (
          <div style={{ marginTop: '15px', backgroundColor: '#0f172a', padding: '12px', borderRadius: '6px', color: '#10b981', fontFamily: 'monospace', fontSize: '11px' }}>
            <strong>NETWORK DE-DUPLICATION LOGS (Batch #{count}):</strong>
            {logs.map((log, i) => <div key={i} style={{ marginTop: '4px' }}>{log}</div>)}
          </div>
        )}
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  }
];
