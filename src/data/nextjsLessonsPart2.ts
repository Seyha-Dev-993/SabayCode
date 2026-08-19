import { Lesson } from '../types';

export const nextjsLessonsPart2: Lesson[] = [
  {
    id: "nextjs-routing",
    title: { en: "Next.js - Routing", km: "Next.js - ផ្លូវណែនាំ" },
    content: {
      en: `# Understanding File-Based Routing
In Next.js, files inside the **\`app/\`** directory map directly to public URLs. This is called **File-Based Routing**.

> 📚 **The Shared Blog Blueprint**: Throughout this 9-page Routing cluster, we will build and extend **one single shared app**—a developer blog with a nested dashboard, dynamic post slugs, parallel layouts, and modal interceptions. 

### The Base Folder Structure:
Our starting blog folder structure looks like this:
* \`app/page.tsx\` ➔ Mapped to \`/\` (Home Page)
* \`app/blog/page.tsx\` ➔ Mapped to \`/blog\` (List of Blog Posts)

### How Routing works under the hood:
Every route folder contains a file named \`page.tsx\` representing the primary UI. Next.js automatically bundles and code-splits these routes, only delivering the necessary JavaScript to the user when they visit that specific path.`,
      km: `# ស្វែងយល់ពី File-Based Routing
នៅក្នុង Next.js រាល់ថតកូដនៅក្នុងថត **\`app/\`** នឹងភ្ជាប់ទំនាក់ទំនងទៅកាន់អាសយដ្ឋាន URL ជាសាធារណៈ។

> 📚 **គ្រោងគម្រោងប្លុកមេ (Shared Blog Blueprint)**: នៅក្នុងមេរៀនប្រព័ន្ធរៀបចំផ្លូវទាំង ៩ ទំព័រនេះ យើងនឹងរួមគ្នាស្ថាបនា និងអភិវឌ្ឍ **គម្រោងតែមួយគត់** គឺ គេហទំព័រប្លុកអភិវឌ្ឍន៍ (Developer Blog) ដែលមានមុខងារ dashboard, ទំព័រអត្ថបទ (dynamic slug), ប្លង់ទន្ទឹមគ្នា (parallel layouts) និងផ្ទាំងជំនួយ (modal interception)។

### រចនាសម្ព័ន្ធថតកូដដំបូង៖
* \`app/page.tsx\` ➔ ភ្ជាប់ទៅកាន់ \`/\` (ទំព័រដើម)
* \`app/blog/page.tsx\` ➔ ភ្ជាប់ទៅកាន់ \`/blog\` (ទំព័របញ្ជីអត្ថបទ)`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Shared Blog App Simulation
  function BlogApp() {
    const [currentPath, setCurrentPath] = React.useState("/");
    
    return (
      <div style={{ fontFamily: 'sans-serif', border: '1px solid #cbd5e1', borderRadius: '12px', overflow: 'hidden' }}>
        {/* Mock Address Bar */}
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f5f9', padding: '10px', gap: '8px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'inline-block' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
          </div>
          <div style={{ flexGrow: 1, backgroundColor: '#ffffff', borderRadius: '6px', padding: '4px 8px', fontSize: '13px', border: '1px solid #cbd5e1', fontFamily: 'monospace' }}>
            http://localhost:3000{currentPath}
          </div>
        </div>

        {/* Content Viewport */}
        <div style={{ padding: '20px', backgroundColor: '#fff', minHeight: '180px' }}>
          <nav style={{ display: 'flex', gap: '15px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px', marginBottom: '15px' }}>
            <span onClick={() => setCurrentPath("/")} style={{ cursor: 'pointer', fontWeight: currentPath === '/' ? 'bold' : 'normal', color: currentPath === '/' ? '#000' : '#4b5563' }}>Home</span>
            <span onClick={() => setCurrentPath("/blog")} style={{ cursor: 'pointer', fontWeight: currentPath === '/blog' ? 'bold' : 'normal', color: currentPath === '/blog' ? '#000' : '#4b5563' }}>Blog Articles</span>
          </nav>

          {currentPath === "/" ? (
            <div>
              <h2 style={{ margin: '0 0 10px 0' }}>🏠 Dev Blog Home</h2>
              <p style={{ color: '#4b5563', fontSize: '14px' }}>Welcome to our shared developer blog app. Click the <strong>Blog Articles</strong> tab above to view the page router mapping.</p>
            </div>
          ) : (
            <div>
              <h2 style={{ margin: '0 0 10px 0' }}>📝 Recent Articles List</h2>
              <p style={{ color: '#4b5563', fontSize: '14px' }}>File route mapped: <code>app/blog/page.tsx</code></p>
              <ul>
                <li style={{ fontSize: '14px', margin: '4px 0', color: '#4f46e5' }}>Understanding Next.js Server Rendering</li>
                <li style={{ fontSize: '14px', margin: '4px 0', color: '#4f46e5' }}>Guide to CSS Modules vs Tailwind</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<BlogApp />);
</script>`
  },
  {
    id: "nextjs-nested-routing",
    title: { en: "Next.js - Nested Routing", km: "Next.js - ផ្លូវកូដត្រួតគ្នា" },
    content: {
      en: `# Creating Nested Routes
To nest routes inside Next.js, you simply create sub-folders inside each other.

### Shared Blog Blueprint Expansion:
We want to add an administration panel for our authors. Let's create:
* \`app/dashboard/page.tsx\` ➔ Mapped to \`/dashboard\`
* \`app/dashboard/settings/page.tsx\` ➔ Mapped to \`/dashboard/settings\`

### Layout Nesting Hierarchy:
Any subdirectory nested inside a route folder can inherit layout designs. If \`app/dashboard/layout.tsx\` defines a sidebar, both the primary dashboard and the nested setting page will automatically display that same sidebar without duplicate imports!`,
      km: `# ការបង្កើតផ្លូវត្រួតគ្នា (Nested Routes)
ដើម្បីបង្កើតផ្លូវ (Routes) ត្រួតគ្នានៅក្នុង Next.js អ្នកគ្រាន់តែបង្កើតថតរង (Sub-folders) នៅក្នុងថតកូដមេជាបន្តបន្ទាប់។

### ការពង្រីកគម្រោងប្លុកមេ៖
យើងចង់បន្ថែមផ្ទាំងគ្រប់គ្រងសម្រាប់អ្នកសរសេរអត្ថបទ៖
* \`app/dashboard/page.tsx\` ➔ ភ្ជាប់ទៅ \`/dashboard\`
* \`app/dashboard/settings/page.tsx\` ➔ ភ្ជាប់ទៅ \`/dashboard/settings\`

### ឋានានុក្រមប្លង់ត្រួតគ្នា៖
រាល់ថតរងទាំងអស់ដែលស្ថិតក្នុងថត Dashboard នឹងគ្របដណ្តប់ដោយ Layout មេរបស់ Dashboard។ ប្រសិនបើ \`app/dashboard/layout.tsx\` កំណត់ Sidebar នោះទាំងទំព័រ dashboard និង settings នឹងបង្ហាញ Sidebar នេះដូចគ្នា។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function BlogApp() {
    const [currentPath, setCurrentPath] = React.useState("/dashboard");
    
    return (
      <div style={{ fontFamily: 'sans-serif', border: '1px solid #cbd5e1', borderRadius: '12px', overflow: 'hidden' }}>
        {/* Browser Bar */}
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f5f9', padding: '10px', gap: '8px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ flexGrow: 1, backgroundColor: '#ffffff', borderRadius: '6px', padding: '4px 8px', fontSize: '13px', border: '1px solid #cbd5e1', fontFamily: 'monospace' }}>
            http://localhost:3000{currentPath}
          </div>
        </div>

        {/* Outer Application Layout with Sidebar */}
        <div style={{ display: 'flex', minHeight: '180px' }}>
          {/* Shared Dashboard Layout Sidebar */}
          <aside style={{ width: '120px', backgroundColor: '#0f172a', color: '#94a3b8', padding: '15px', fontSize: '13px' }}>
            <span style={{ color: '#fff', fontWeight: 'bold', display: 'block', marginBottom: '15px' }}>▲ DB Panel</span>
            <div onClick={() => setCurrentPath("/dashboard")} style={{ cursor: 'pointer', color: currentPath === '/dashboard' ? '#38bdf8' : '#94a3b8', marginBottom: '10px' }}>Dashboard</div>
            <div onClick={() => setCurrentPath("/dashboard/settings")} style={{ cursor: 'pointer', color: currentPath === '/dashboard/settings' ? '#38bdf8' : '#94a3b8' }}>Settings</div>
          </aside>

          {/* Page content panel */}
          <main style={{ flexGrow: 1, padding: '20px', backgroundColor: '#fff' }}>
            {currentPath === "/dashboard" ? (
              <div>
                <h3 style={{ margin: '0 0 10px 0' }}>📊 Author Stats Overview</h3>
                <p style={{ color: '#4b5563', fontSize: '13px' }}>File mapped: <code>app/dashboard/page.tsx</code></p>
                <div style={{ padding: '10px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', color: '#166534', fontSize: '12px' }}>
                  Total Articles: 14 | Monthly Views: 15.2k
                </div>
              </div>
            ) : (
              <div>
                <h3 style={{ margin: '0 0 10px 0' }}>⚙️ Dashboard Settings</h3>
                <p style={{ color: '#4b5563', fontSize: '13px' }}>File mapped: <code>app/dashboard/settings/page.tsx</code></p>
                <label style={{ fontSize: '12px', color: '#64748b' }}>Change Pen Name:</label>
                <input type="text" defaultValue="Seyha Dev" style={{ display: 'block', padding: '6px', border: '1px solid #cbd5e1', borderRadius: '4px', marginTop: '4px', fontSize: '12px' }} />
              </div>
            )}
          </main>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<BlogApp />);
</script>`
  },
  {
    id: "nextjs-dynamic-routing",
    title: { en: "Next.js - Dynamic Routing", km: "Next.js - ផ្លូវកូដបែបឌីណាមិក" },
    content: {
      en: `# Dynamic Segments ([slug])
When you don't know the exact segment names ahead of time (e.g. blog post identifiers or product names), you can use **Dynamic Segments**.

### Shared Blog Blueprint Expansion:
To render dynamic blog articles, wrap the folder name in square brackets:
* Folder path: **\`app/blog/[slug]/page.tsx\`**
* URL output: \`/blog/nextjs-introduction\` or \`/blog/tailwind-guide\`

### Accessing Route parameters:
Next.js feeds the dynamic segments directly into the page component via the \`params\` prop:

\`\`\`tsx
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  return <h2>Reading post: {slug}</h2>;
}
\`\`\``,
      km: `# ការកំណត់ផ្លូវបែបឌីណាមិក (Dynamic Segments)
នៅពេលដែលអ្នកមិនទាន់ដឹងច្បាស់ពីឈ្មោះផ្នែករបស់ URL (ដូចជាលេខកូដសម្គាល់ ឬឈ្មោះអត្ថបទ) អ្នកអាចប្រើប្រាស់ **Dynamic Segments**។

### ការពង្រីកគម្រោងប្លុកមេ៖
ដើម្បីបង្ហាញទំព័រអត្ថបទនីមួយៗឱ្យត្រូវទៅតាមចំណងជើង យើងបង្កើតថតកូដរុំដោយវង់ក្រចកជ្រុង៖
* ផ្លូវថតកូដ៖ **\`app/blog/[slug]/page.tsx\`**
* លទ្ធផល URL៖ \`/blog/nextjs-introduction\` ឬ \`/blog/tailwind-guide\`

### របៀបហៅលទ្ធផល URL៖
Next.js បញ្ជូនតម្លៃ Dynamic segment មកក្នុងសមាសភាគតាមរយៈ prop ឈ្មោះ \`params\`៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function BlogApp() {
    const [currentSlug, setCurrentSlug] = React.useState("react-rendering");
    
    return (
      <div style={{ fontFamily: 'sans-serif', border: '1px solid #cbd5e1', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f5f9', padding: '10px', gap: '8px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ flexGrow: 1, backgroundColor: '#ffffff', borderRadius: '6px', padding: '4px 8px', fontSize: '13px', border: '1px solid #cbd5e1', fontFamily: 'monospace' }}>
            http://localhost:3000/blog/{currentSlug}
          </div>
        </div>

        <div style={{ padding: '20px', backgroundColor: '#fff', minHeight: '180px' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <button onClick={() => setCurrentSlug("react-rendering")} style={{ padding: '4px 8px', fontSize: '11px', background: '#e2e8f0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>React Post</button>
            <button onClick={() => setCurrentSlug("nextjs-routing-guide")} style={{ padding: '4px 8px', fontSize: '11px', background: '#e2e8f0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Nextjs Post</button>
            <button onClick={() => setCurrentSlug("mastering-tailwind")} style={{ padding: '4px 8px', fontSize: '11px', background: '#e2e8f0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Tailwind Post</button>
          </div>

          <div style={{ padding: '12px', borderLeft: '4px solid #10b981', backgroundColor: '#f0fdf4' }}>
            <span style={{ fontSize: '11px', color: '#6b7280', display: 'block' }}>📁 MAPPED FILENAME: app/blog/[slug]/page.tsx</span>
            <h3 style={{ margin: '8px 0 4px 0', textTransform: 'capitalize' }}>
              {currentSlug.replace(/-/g, ' ')}
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: '#4b5563' }}>
              Current URL parameters value (params.slug): <code style={{ color: '#e11d48' }}>"{currentSlug}"</code>
            </p>
          </div>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<BlogApp />);
</script>`
  },
  {
    id: "nextjs-parallel-routing",
    title: { en: "Next.js - Parallel Routing", km: "Next.js - ផ្លូវកូដដំណើរការទន្ទឹមគ្នា" },
    content: {
      en: `# Parallel Routing (@slots)
**Parallel Routing** allows you to simultaneously display more than one independent view inside the same parent page layout.

### Shared Blog Blueprint Expansion:
For our dashboard landing page, we want to split the view into two dynamic panels: an **Analytics** board and a **Team** directory.
To do this, we use named slots prefixed with the **\`@\`** symbol:
* \`app/dashboard/@analytics/page.tsx\`
* \`app/dashboard/@team/page.tsx\`

### Integrating slots in the layout:
Next.js maps these folders as named properties directly into the dashboard's layout component:

\`\`\`tsx
// app/dashboard/layout.tsx
export default function Layout({
  children,
  analytics,
  team
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div style={{ display: 'flex', gap: '15px' }}>
        <div>{analytics}</div>
        <div>{team}</div>
      </div>
    </div>
  );
}
\`\`\``,
      km: `# ផ្លូវដំណើរការទន្ទឹមគ្នា (Parallel Routing - @slots)
**Parallel Routing** អនុញ្ញាតឱ្យអ្នកបង្ហាញផ្ទាំងទិដ្ឋភាពឯករាជ្យច្រើនជាងមួយក្នុងពេលតែមួយនៅលើប្លង់ទំព័រមេតែមួយ។

### ការពង្រីកគម្រោងប្លុកមេ៖
សម្រាប់ទំព័រគ្រប់គ្រង Dashboard យើងចង់បំបែកជាពីរផ្នែកស្វ័យប្រវត្ត៖ ផ្នែក **Analytics** និងផ្នែក **Team**។
យើងប្រើប្រាស់ឈ្មោះ Slots ដែលមានសញ្ញា **\`@\`** ពីមុខ៖
* \`app/dashboard/@analytics/page.tsx\`
* \`app/dashboard/@team/page.tsx\`

### ការបញ្ចូល Slots ទៅក្នុង Layout៖
Next.js នឹងបញ្ជូន Slots ទាំងនោះមកជា Properties ក្នុង Layout មេ៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function BlogApp() {
    return (
      <div style={{ fontFamily: 'sans-serif', border: '1px solid #cbd5e1', borderRadius: '12px', overflow: 'hidden' }}>
        {/* Mocking dashboard layout */}
        <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderBottom: '1px solid #e2e8f0' }}>
          <h4 style={{ margin: 0, color: '#0f172a' }}>📁 app/dashboard/layout.tsx Layout Grid</h4>
        </div>

        <div style={{ padding: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', backgroundColor: '#f3f4f6' }}>
          {/* Slot Analytics */}
          <div style={{ backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '15px' }}>
            <span style={{ fontSize: '10px', color: '#10b981', fontWeight: 'bold' }}>📂 @analytics/page.tsx</span>
            <h4 style={{ margin: '5px 0' }}>📈 Views Trend</h4>
            <div style={{ height: '50px', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'flex-end', gap: '5px', padding: '5px' }}>
              <div style={{ width: '15px', height: '20px', background: '#10b981' }}></div>
              <div style={{ width: '15px', height: '35px', background: '#10b981' }}></div>
              <div style={{ width: '15px', height: '48px', background: '#10b981' }}></div>
            </div>
          </div>

          {/* Slot Team */}
          <div style={{ backgroundColor: '#fff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '15px' }}>
            <span style={{ fontSize: '10px', color: '#4f46e5', fontWeight: 'bold' }}>📂 @team/page.tsx</span>
            <h4 style={{ margin: '5px 0' }}>👥 Active Authors</h4>
            <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '12px', color: '#4b5563' }}>
              <li>Seyha (Admin)</li>
              <li>Sophea (Editor)</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<BlogApp />);
</script>`
  },
  {
    id: "nextjs-imperative-routing",
    title: { en: "Next.js - Imperative Routing", km: "Next.js - ការបញ្ជាផ្លូវកូដ" },
    content: {
      en: `# Programmatic Navigation
While HTML anchor links are great, sometimes you need to trigger route transitions programmatically—such as after completing form submissions or API updates.

### Shared Blog Blueprint Expansion:
We want to add a "Save and Exit" button inside our blog author dashboard settings. To do this, we use the **\`useRouter\`** hook from **\`next/navigation\`**.

> **Important**: Because programmatic interaction requires client browser event loops, any file utilizing \`useRouter\` must be marked with the **\`"use client"\`** directive!

\`\`\`tsx
"use client";

import { useRouter } from 'next/navigation';

export default function SettingsForm() {
  const router = useRouter();
  
  const handleSave = async () => {
    // 1. Run database save API logic here...
    // 2. Imperatively push back to homepage
    router.push('/');
  };
  
  return <button onClick={handleSave}>Save & Exit</button>;
}
\`\`\``,
      km: `# ការនាំផ្លូវកម្មវិធី (Programmatic Navigation)
ខណៈដែលតំណភ្ជាប់ Link ល្អសម្រាប់ចុចទៅមក ពេលខ្លះអ្នកត្រូវបញ្ជាការផ្លាស់ប្តូរផ្លូវតាមរយៈកូដកម្មវិធី (ដូចជា បន្ទាប់ពីការរក្សាទុកទិន្នន័យ Form រួចរាល់)។

### ការពង្រីកគម្រោងប្លុកមេ៖
យើងចង់បន្ថែមប៊ូតុង "រក្សាទុក និងចាកចេញ" ក្នុងទំព័រ Settings របស់ Dashboard។ ដើម្បីធ្វើបែបនេះ យើងប្រើប្រាស់ Hook ឈ្មោះ **\`useRouter\`** មកពី **\`next/navigation\`**។

> **សំខាន់**: ដោយសារតែការរុករកទំព័រត្រូវការប្រើប្រាស់ព្រឹត្តិការណ៍របស់ Browser ឯកសារណាដែលប្រើ \`useRouter\` ត្រូវតែកំណត់ជា **\`"use client"\`** នៅលើគេបង្អស់!`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function BlogApp() {
    const [path, setPath] = React.useState("/dashboard/settings");
    const [saving, setSaving] = React.useState(false);

    const handleSaveAndExit = () => {
      setSaving(true);
      setTimeout(() => {
        setSaving(false);
        // Imperatively route back to home "/"
        setPath("/");
      }, 1200);
    };

    return (
      <div style={{ fontFamily: 'sans-serif', border: '1px solid #cbd5e1', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ backgroundColor: '#f1f5f9', padding: '10px', fontSize: '13px', fontFamily: 'monospace' }}>
          Current Route: http://localhost:3000{path}
        </div>

        <div style={{ padding: '20px', backgroundColor: '#fff', minHeight: '140px' }}>
          {path === "/dashboard/settings" ? (
            <div>
              <h3>⚙️ Authors Form Workspace</h3>
              <p style={{ fontSize: '13px', color: '#4b5563' }}>Click the button below to simulate programmatic redirecting.</p>
              <button 
                onClick={handleSaveAndExit}
                style={{ padding: '8px 16px', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
              >
                {saving ? "Saving configurations..." : "Save and Exit Router (Push Home)"}
              </button>
            </div>
          ) : (
            <div>
              <h3 style={{ color: '#10b981' }}>✓ Mapped Home Page!</h3>
              <p style={{ fontSize: '13px', color: '#4b5563' }}>Successfully routed programmatically using <code>router.push('/')</code>.</p>
              <button onClick={() => setPath("/dashboard/settings")} style={{ padding: '4px 10px', fontSize: '11px', background: '#cbd5e1', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Go Back</button>
            </div>
          )}
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<BlogApp />);
</script>`
  },
  {
    id: "nextjs-shallow-routing",
    title: { en: "Next.js - Shallow Routing", km: "Next.js - ផ្លូវកូដទឹករាក់" },
    content: {
      en: `# Shallow Routing
**Shallow Routing** is a technique that lets you update the URL query parameters without triggering full server data-fetching methods or causing full-page component layout hydration.

### Shared Blog Blueprint Expansion:
On our blog directory page, authors can filter posts by tags (e.g. \`?tag=typescript\`). 
In the App Router, this is accomplished seamlessly by combining browser window history APIs with Next.js's reactive **\`useSearchParams\`** hooks:

\`\`\`tsx
"use client";

import { usePathname, useSearchParams } from 'next/navigation';

export default function BlogFilters() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilter = (tag: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('tag', tag);
    
    // Updates the URL query safely in the browser without reloading
    window.history.pushState(null, '', \`\${pathname}?\${params.toString()}\`);
  };

  return <button onClick={() => handleFilter('react')}>Filter React</button>;
}
\`\`\``,
      km: `# ផ្លូវនាំទឹករាក់ (Shallow Routing)
**Shallow Routing** គឺជាបច្ចេកទេសផ្លាស់ប្តូរតម្លៃ Query របស់ URL (ដូចជា ?page=2) ដោយមិនបាច់ដំណើរការស៊ើបអង្កេត ឬទាញយកទិន្នន័យឡើងវិញពី Server ឬបង្កឱ្យទំព័រទាំងមូលត្រូវរៀបចំឡើងវិញឡើយ។

### ការពង្រីកគម្រោងប្លុកមេ៖
នៅលើទំព័របញ្ជីអត្ថបទ អ្នកអានអាចចម្រោះអត្ថបទតាមរយៈស្លាក (Tags) (ឧទាហរណ៍៖ \`?tag=typescript\`)។
នៅក្នុង App Router យើងអាចរួមបញ្ចូល Hook **\`useSearchParams\`** ជាមួយ HTML5 history API៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function BlogApp() {
    const [tag, setTag] = React.useState("all");
    
    return (
      <div style={{ fontFamily: 'sans-serif', border: '1px solid #cbd5e1', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ backgroundColor: '#f1f5f9', padding: '10px', fontSize: '13px', fontFamily: 'monospace' }}>
          URL Address: http://localhost:3000/blog{tag !== "all" ? "?tag=" + tag : ""}
        </div>

        <div style={{ padding: '20px', backgroundColor: '#fff' }}>
          <h4>Filter Posts (Shallow Update Demo)</h4>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
            {["all", "typescript", "react", "nextjs"].map(t => (
              <button 
                key={t}
                onClick={() => setTag(t)}
                style={{ padding: '6px 12px', background: tag === t ? '#10b981' : '#e2e8f0', color: tag === t ? '#fff' : '#000', border: 'none', borderRadius: '4px', cursor: 'pointer', textTransform: 'capitalize' }}
              >
                {t}
              </button>
            ))}
          </div>

          <div style={{ padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px', fontSize: '13px' }}>
            Current tag filter state: <strong>{tag}</strong>
            <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '11px' }}>✓ URL state successfully mirrored in browser history. Zero server queries dispatched.</p>
          </div>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<BlogApp />);
</script>`
  },
  {
    id: "nextjs-intercepting-routes",
    title: { en: "Next.js - Intercepting Routes", km: "Next.js - ផ្លូវស្ទាក់ចាប់" },
    content: {
      en: `# Intercepting Routes
**Intercepting Routes** allows you to load a route from another part of your application inside the current layout. This is commonly used to display a page as a overlay modal.

### Shared Blog Blueprint Expansion:
When users click on a blog image preview from the dashboard, we want to overlay a full-resolution modal without navigating away.
To do this, we use the **\`(.)\`** convention, which mimics relative folder navigation:
* Folder name: **\`app/dashboard/(.)image/page.tsx\`**

### Behavior rules:
1. **Soft Navigation**: Clicking a link will *intercept* the route and open it inside a beautiful modal container.
2. **Hard Refresh**: Sharing or refreshing that URL directly will bypass interception and load the full page component naturally.`,
      km: `# ផ្លូវស្ទាក់ចាប់ (Intercepting Routes)
**Intercepting Routes** អនុញ្ញាតឱ្យអ្នកស្ទាក់ចាប់ទំព័រផ្សេងទៀតមកបង្ហាញនៅក្នុង Layout បច្ចុប្បន្ន (ឧទាហរណ៍៖ បង្ហាញជាផ្ទាំង Modal អណ្តែត)។

### ការពង្រីកគម្រោងប្លុកមេ៖
នៅពេលដែលអ្នកប្រើប្រាស់ចុចលើរូបភាព Preview របស់អត្ថបទ យើងចង់ឱ្យវាលោតចេញជាផ្ទាំង Modal ធំភ្លាមៗដោយមិនបាច់ចាកចេញពីទំព័រចាស់។
យើងប្រើសញ្ញា **\`(.)\`** ដូចទៅនឹងការរុករកថតឯកសារ៖
* ឈ្មោះថតកូដ៖ **\`app/dashboard/(.)image/page.tsx\`**

### ច្បាប់លំហូរដំណើរការ៖
1. **ចុចធម្មតា (Soft Navigation)**: ស្ទាក់ចាប់យកមកបង្ហាញជា Modal Overlay។
2. **អាប់ដេតទំព័រ (Hard Refresh)**: បើកទំព័រពេញលេញធម្មតា។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function BlogApp() {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [isHardReload, setIsHardReload] = React.useState(false);

    return (
      <div style={{ fontFamily: 'sans-serif', border: '1px solid #cbd5e1', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
        <div style={{ backgroundColor: '#f1f5f9', padding: '10px', fontSize: '13px', fontFamily: 'monospace' }}>
          URL: http://localhost:3000/dashboard{modalOpen ? "/image" : ""}
        </div>

        <div style={{ padding: '20px', backgroundColor: '#fff', minHeight: '180px' }}>
          <h3>🎨 Interactive Intercepting Route Simulator</h3>
          <p style={{ fontSize: '13px', color: '#4b5563' }}>Inside: <code>app/dashboard/page.tsx</code></p>
          
          <div style={{ border: '1px solid #cbd5e1', padding: '10px', borderRadius: '8px', cursor: 'pointer', textAlign: 'center', backgroundColor: '#fafafa' }} onClick={() => { setModalOpen(true); setIsHardReload(false); }}>
            <span style={{ fontSize: '30px' }}>📷</span>
            <p style={{ margin: 0, fontSize: '12px', fontWeight: 'bold' }}>Click image to soft-route (Interception)</p>
          </div>

          {modalOpen && (
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', maxWidth: '300px', width: '100%', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 'bold' }}>📁 INTERCEPTED BY app/dashboard/(.)image/page.tsx</span>
                <p style={{ fontSize: '13px', margin: '10px 0' }}>This modal is displaying the image page without navigating away from dashboard!</p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                  <button onClick={() => setModalOpen(false)} style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', cursor: 'pointer' }}>Close Modal</button>
                  <button onClick={() => setIsHardReload(true)} style={{ padding: '4px 8px', borderRadius: '4px', background: '#e11d48', color: '#fff', border: 'none', cursor: 'pointer' }}>Trigger Hard Reload</button>
                </div>
              </div>
            </div>
          )}

          {isHardReload && (
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#fff', padding: '20px', textAlign: 'center' }}>
              <h3>🌄 Original Page (app/dashboard/image/page.tsx)</h3>
              <p style={{ fontSize: '13px' }}>A hard reload loads the page in full fullscreen width because route interception only happens during active client-side routing session.</p>
              <button onClick={() => { setIsHardReload(false); setModalOpen(false); }} style={{ padding: '6px 12px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Reset Simulator</button>
            </div>
          )}
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<BlogApp />);
</script>`
  },
  {
    id: "nextjs-redirecting",
    title: { en: "Next.js - Redirecting Routes", km: "Next.js - ការបង្វែរទំព័រ" },
    content: {
      en: `# Route Redirects
Next.js provides several standard options to redirect users from old paths to updated URL coordinates.

### Redirect Strategies:
1. **Dynamic Redirect Helper**: Trigger redirect instantly during page rendering:
   \`\`\`tsx
   import { redirect } from 'next/navigation';
   
   export default async function Page() {
     redirect('/dashboard'); // Instantly aborts and re-routes
   }
   \`\`\`
2. **Permanent Config Redirects**: Ideal for SEO path migrations inside \`next.config.js\`:
   \`\`\`javascript
   module.exports = {
     async redirects() {
       return [
         { source: '/old-blog', destination: '/blog', permanent: true }
       ];
     }
   }
   \`\`\``,
      km: `# ការបង្វែរទំព័រ (Redirects)
Next.js ផ្តល់នូវវិធីសាស្ត្រស្តង់ដារមួយចំនួនក្នុងការបង្វែរទិសដៅអ្នកប្រើប្រាស់ពីអាសយដ្ឋានចាស់ទៅកាន់អាសយដ្ឋានថ្មី។

### យុទ្ធសាស្ត្របង្វែរផ្លូវ៖
1. **Dynamic Redirect Helper**: បង្ខំបង្វែរទំព័រភ្លាមៗនៅពេលដំណើរការ Rendering៖
   \`\`\`tsx
   import { redirect } from 'next/navigation';
   
   export default async function Page() {
     redirect('/dashboard'); // បង្វែរផ្លូវជាបន្ទាន់
   }
   \`\`\`
2. **Permanent Config Redirects**: កំណត់នៅក្នុង \`next.config.js\` សម្រាប់បច្ចេកទេស SEO៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function BlogApp() {
    const [path, setPath] = React.useState("/old-blog");
    const [redirecting, setRedirecting] = React.useState(false);

    const triggerRedirect = () => {
      setRedirecting(true);
      setTimeout(() => {
        setPath("/blog");
        setRedirecting(false);
      }, 1500);
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Redirect Simulator</h4>
        <div style={{ backgroundColor: '#f1f5f9', padding: '10px', borderRadius: '6px', fontSize: '13px', fontFamily: 'monospace', marginBottom: '15px' }}>
          Current Location: http://localhost:3000{path}
        </div>

        {path === "/old-blog" ? (
          <div>
            <p style={{ color: '#ea580c', fontSize: '13px' }}>⚠️ Warning: You are visiting a legacy deprecated URL (/old-blog).</p>
            <button onClick={triggerRedirect} style={{ padding: '8px 16px', background: '#ea580c', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              {redirecting ? "Redirecting (HTTP 301)..." : "Simulate NextJS Redirect"}
            </button>
          </div>
        ) : (
          <div style={{ padding: '10px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', borderRadius: '6px', fontSize: '13px' }}>
            🎉 <strong>Arrived at /blog!</strong> Redirect succeeded successfully.
            <button onClick={() => setPath("/old-blog")} style={{ display: 'block', marginTop: '10px', fontSize: '11px', background: '#fff', border: '1px solid #cbd5e1', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', color: '#000' }}>Reset Demo</button>
          </div>
        )}
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<BlogApp />);
</script>`
  },
  {
    id: "nextjs-linking",
    title: { en: "Next.js - Navigation and Linking", km: "Next.js - តំណភ្ជាប់ទំព័រ" },
    content: {
      en: `# The Link Component (<Link>)
To navigate between routes, you should always use the custom **\`<Link>\`** component imported from **\`next/link\`** instead of the standard HTML \`<a>\` tag.

### Shared Blog Blueprint Finalization:
Let's link the home screen back to our blogs lists directory.

\`\`\`tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Blog Hub</h1>
      <Link href="/blog" prefetch={true}>
        Read Developer Articles
      </Link>
    </main>
  );
}
\`\`\`

### What makes <Link> special?
* **Prefetching**: Next.js automatically pre-downloads the code and data for linked pages as they enter the user's browser viewport, making route transitions feel completely instant!
* **No Hard Reload**: Performs clean client-side transitions without resetting state.`,
      km: `# របៀបប្រើប្រាស់ Link Component (<Link>)
ដើម្បីរុករក ឬឆ្លងទំព័រទៅមក អ្នកគួរតែប្រើប្រាស់សមាសភាគពិសេស **\`<Link>\`** ដែលនាំចូលពី **\`next/link\`** ជំនួសឱ្យ tag HTML \`<a>\` ធម្មតា។

### បញ្ចប់គម្រោងប្លុកមេ៖
តោះភ្ជាប់ទំព័រដើមទៅកាន់បញ្ជីអត្ថបទប្លុក៖

\`\`\`tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Blog Hub</h1>
      <Link href="/blog" prefetch={true}>
        Read Developer Articles
      </Link>
    </main>
  );
}
\`\`\`

### ភាពពិសេសរបស់ <Link>៖
* **Prefetching**: Next.js នឹងទាញយកទិន្នន័យទំព័រគោលដៅទុកជាមុន (Pre-download) នៅពេលតំណភ្ជាប់នោះអណ្តែតចូលមកក្នុងទិដ្ឋភាពភ្នែករបស់អ្នកប្រើប្រាស់។
* **គ្មានការផ្ទុកទំព័រឡើងវិញ (No Hard Reload)**: ឆ្លងទំព័របានរលូនល្អដោយមិនបាត់បង់ state។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function BlogApp() {
    const [path, setPath] = React.useState("/");
    const [prefetchMsg, setPrefetchMsg] = React.useState("Hover over the link below to trigger automated prefetching...");

    return (
      <div style={{ fontFamily: 'sans-serif', border: '1px solid #cbd5e1', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ backgroundColor: '#f1f5f9', padding: '10px', fontSize: '13px', fontFamily: 'monospace' }}>
          URL Bar: http://localhost:3000{path}
        </div>

        <div style={{ padding: '20px', backgroundColor: '#fff', minHeight: '140px' }}>
          {path === "/" ? (
            <div>
              <h3>🏠 Main Homepage</h3>
              <p style={{ fontSize: '11px', color: '#ea580c', fontWeight: 'bold' }}>{prefetchMsg}</p>
              
              <div 
                onClick={() => setPath("/blog")}
                onMouseEnter={() => setPrefetchMsg("⚡ Prefetch Activated! Blog assets preloaded in background background task.")}
                style={{ display: 'inline-block', padding: '10px 18px', background: '#000', color: '#fff', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}
              >
                Go to Blog Articles (Link Prefetch)
              </div>
            </div>
          ) : (
            <div>
              <h3>📝 Mapped Blog List View</h3>
              <p style={{ fontSize: '13px', color: '#4b5563' }}>Transited instantly with 0ms delay!</p>
              <button onClick={() => { setPath("/"); setPrefetchMsg("Hover over the link below to trigger automated prefetching..."); }} style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', cursor: 'pointer' }}>Return Home</button>
            </div>
          )}
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<BlogApp />);
</script>`
  },
  {
    id: "nextjs-typescript",
    title: { en: "Next.js - TypeScript", km: "Next.js - ការគាំទ្រ TypeScript" },
    content: {
      en: `# Integrated TypeScript Support
Next.js has first-class integration with **TypeScript**, providing fully automatic type configuration right out of the box.

### Key Benefits:
* **Configuration Sync**: Next.js automatically creates a configured \`tsconfig.json\` file whenever you create files ending in \`.ts\` or \`.tsx\`.
* **Plugin Assistance**: A custom Next.js compiler plugin compiles your routes in the background to guard layouts and params types.

\`\`\`typescript
import { Metadata } from 'next';

// Built-in Next.js type definition!
export const metadata: Metadata = {
  title: 'Secure Admin Console',
};
\`\`\``,
      km: `# ការគាំទ្រភាសា TypeScript
Next.js មានការគាំទ្រ និងរួមបញ្ចូលភាសា **TypeScript** លំដាប់ទីមួយ ដោយរៀបចំការកំណត់ផ្សេងៗដោយស្វ័យប្រវត្តិតែម្តង។

### អត្ថប្រយោជន៍ចម្បង៖
* **សមកាលកម្មការកំណត់ (Configuration Sync)**: Next.js បង្កើតឯកសារ \`tsconfig.json\` ដោយស្វ័យប្រវត្ត នៅពេលអ្នកបង្កើតឯកសារ \`.ts\` ឬ \`.tsx\`។
* **កម្មវិធីជំនួយរបស់ Compiler**: កម្មវិធីជំនួយរបស់ Next.js ជួយការពារសុវត្ថិភាពប្រភេទកូដ (Type Safety) របស់ parameters និង layouts ផ្សេងៗ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'monospace', backgroundColor: '#0f172a', color: '#38bdf8', padding: '20px', borderRadius: '12px' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#94a3b8' }}>TypeScript TSConfig Auto-Configuration</h4>
        <div style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '6px', fontSize: '12px', color: '#e2e8f0' }}>
          {"{\n  \"compilerOptions\": {\n    \"target\": \"es5\",\n    \"lib\": [\"dom\", \"dom.iterable\", \"esnext\"],\n    \"allowJs\": true,\n    \"skipLibCheck\": true,\n    \"strict\": true,\n    \"plugins\": [{ \"name\": \"next\" }]\n  }\n}"}
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-env-vars",
    title: { en: "Next.js - Environment Variables", km: "Next.js - អថេរបរិស្ថាន" },
    content: {
      en: `# Loading Environment Variables
Next.js has native support for **\`.env\`** environment configuration files, protecting your sensitive keys during local and deployed executions.

### File Load Priority:
Next.js will load settings from these filenames sequentially:
1. \`.env.development\` (active during development debugging)
2. \`.env.production\` (active during live production hosting)
3. \`.env.local\` (local workspace configuration override)

### Exposing Keys to the Browser:
By default, all environment keys are strictly server-side only. If you need to make a variable accessible in client browser pages, prefix the variable name with **\`NEXT_PUBLIC_\`**:

\`\`\`env
# Server secret (Hidden from browser)
STRIPE_API_SECRET=sk_live_abc123

# Client accessible key (Publicly visible)
NEXT_PUBLIC_ANALYTICS_ID=UA-998877
\`\`\``,
      km: `# ការប្រើប្រាស់អថេរបរិស្ថាន (Environment Variables)
Next.js គាំទ្រឯកសារកំណត់រចនាសម្ព័ន្ធ **\`.env\`** ជាលក្ខណៈដើម ដើម្បីការពារកូដសម្ងាត់ផ្សេងៗកុំឱ្យលេចធ្លាយ។

### លំដាប់អាទិភាពនៃការផ្ទុក៖
Next.js ស្វែងរក និងទាញយកទិន្នន័យពីឯកសារតាមលំដាប់លំដោយ៖
1. \`.env.development\` (ប្រើប្រាស់នៅពេលកំពុងសរសេរកូដ)
2. \`.env.production\` (ប្រើប្រាស់នៅពេលដាក់ឱ្យដំណើរការ)
3. \`.env.local\` (ប្រើប្រាស់នៅលើម៉ាស៊ីនផ្ទាល់ខ្លួន)

### ការបើកបង្ហាញកូដសម្ងាត់ទៅកាន់ Browser៖
ជាលំនាំដើម រាល់កូដទាំងអស់ត្រូវបានលាក់ទុកនៅលើ Server។ ប្រសិនបើចង់ឱ្យកូដនោះអាចមើលឃើញនៅលើ Browser ត្រូវបន្ថែមបុព្វបទ **\`NEXT_PUBLIC_\`** ពីមុខ៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Environment Separation (Client vs Server)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div style={{ padding: '12px', backgroundColor: '#fee2e2', border: '1px solid #fca5a5', borderRadius: '8px' }}>
            <span style={{ fontSize: '11px', color: '#b91c1c', fontWeight: 'bold' }}>🔒 SERVER ONLY SECRET</span>
            <p style={{ margin: '5px 0', fontSize: '13px', fontWeight: 'bold' }}>STRIPE_KEY=sk_9901</p>
            <p style={{ fontSize: '11px', color: '#991b1b', margin: 0 }}>Cannot be read by browser JS. Safe for credentials.</p>
          </div>
          <div style={{ padding: '12px', backgroundColor: '#d1fae5', border: '1px solid #6ee7b7', borderRadius: '8px' }}>
            <span style={{ fontSize: '11px', color: '#047857', fontWeight: 'bold' }}>🌐 PUBLIC FOR CLIENT</span>
            <p style={{ margin: '5px 0', fontSize: '13px', fontWeight: 'bold' }}>NEXT_PUBLIC_API=https://db.com</p>
            <p style={{ fontSize: '11px', color: '#065f46', margin: 0 }}>Can be parsed inside browser react files.</p>
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
    id: "nextjs-file-conventions",
    title: { en: "Next.js - File Conventions", km: "Next.js - លក្ខខណ្ឌឯកសារ" },
    content: {
      en: `# Route File Conventions
Next.js leverages specific filenames within each directory segment to define route-specific behaviors.

### Standard Filenames:
| Filename | Purpose | Execution |
| :--- | :--- | :--- |
| **\`layout.tsx\`** | Wrapper structure enclosing all nested child pages | Shared |
| **\`page.tsx\`** | Main visible UI mapped to path | Individual |
| **\`loading.tsx\`** | Loading suspension indicator skeleton layout | Async |
| **\`error.tsx\`** | Automatic error boundary interceptor component | Client |
| **\`not-found.tsx\`**| 404 response dashboard UI handler | Server/Client |
| **\`template.tsx\`**| Freshly re-rendered variant of a layout | Instanced |`,
      km: `# លក្ខខណ្ឌ និងឯកសារពិសេសរបស់ផ្លូវនាំ (File Conventions)
Next.js ប្រើប្រាស់ឈ្មោះឯកសារជាក់លាក់នៅក្នុងថតនីមួយៗ ដើម្បីកំណត់ឥរិយាបថផ្សេងៗរបស់ទំព័រ។

### ឈ្មោះឯកសារស្តង់ដារ៖
| ឈ្មោះឯកសារ | តួនាទីចម្បង | លក្ខណៈដំណើរការ |
| :--- | :--- | :--- |
| **\`layout.tsx\`** | ប្លង់រួមដែលរុំព័ទ្ធទំព័រទាំងអស់នៅក្នុងថតនោះ | ចែករំលែករួម |
| **\`page.tsx\`** | ផ្ទាំងទិដ្ឋភាពចម្បងដែលបង្ហាញលើ URL | ដាច់ដោយឡែក |
| **\`loading.tsx\`** | ប្លង់ជំនួយបង្ហាញពេលកំពុងរង់ចាំផ្ទុកទិន្នន័យ | ស្វ័យប្រវត្ត |
| **\`error.tsx\`** | ទំព័រស្ទាក់ចាប់កំហុសបច្ចេកទេស | Client Component |
| **\`not-found.tsx\`**| ទំព័របង្ហាញកូដ 404 ទំព័ររកមិនឃើញ | ស្វ័យប្រវត្ត |`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Route Pipeline Architecture</h3>
        <p style={{ fontSize: '13px', color: '#4b5563' }}>How files wrap around <code>page.tsx</code> inside Vercel:</p>
        <div style={{ padding: '12px', border: '1px solid #000', borderRadius: '10px', backgroundColor: '#fafafa' }}>
          <div style={{ border: '2px solid #ef4444', padding: '10px', borderRadius: '6px', backgroundColor: '#fef2f2', marginBottom: '8px' }}>
            📁 layout.tsx (Root wrap)
            <div style={{ border: '2px dashed #f59e0b', padding: '8px', borderRadius: '4px', backgroundColor: '#fffbeb', margin: '6px 0 0 0' }}>
              📁 error.tsx / loading.tsx (Boundary wrapper)
              <div style={{ border: '2px solid #10b981', padding: '8px', borderRadius: '4px', backgroundColor: '#f0fdf4', margin: '6px 0 0 0', fontWeight: 'bold' }}>
                📄 page.tsx (Core Content)
              </div>
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
    id: "nextjs-eslint",
    title: { en: "Next.js - ESLint", km: "Next.js - ការគាំទ្រ ESLint" },
    content: {
      en: `# Built-In ESLint Checking
Next.js provides an integrated **ESLint** configuration right out of the box, helping you enforce clean code and prevent build-breaking layout issues.

### The Standard Ruleset:
When running Vercel's linter checks, Next.js implements the \`eslint-config-next\` policy:
* **Next/google-font-display**: Ensures custom fonts declare optimized displays.
* **No-html-link-for-pages**: Prevents using raw \`<a>\` tags when you should be using Vercel's \`<Link>\` component instead.
* **No-img-element**: Warns against using standard HTML \`<img>\` tags instead of Next.js's optimized \`<Image>\` component.`,
      km: `# ការវិភាគកូដដោយស្វ័យប្រវត្ត (ESLint)
Next.js ផ្តល់មកជាមួយនូវប្រព័ន្ធ **ESLint** ដែលជួយត្រួតពិនិត្យ និងណែនាំការសរសេរកូដឱ្យមានរបៀបរៀបរយ និងការពារកំហុសដែលអាចកើតឡើងនៅពេលដំណើរការកម្មវិធី។

### ច្បាប់ស្តង់ដាររបស់ Next.js៖
នៅពេលពិនិត្យកូដ (Linting) គោលការណ៍ \`eslint-config-next\` នឹងចាប់ផ្តើមពិនិត្យ៖
* **Next/google-font-display**: ធានាការទាញយក font ដំណើរការលឿន។
* **No-html-link-for-pages**: ណែនាំកុំឱ្យប្រើ tag \`<a>\` ជំនួសដោយ tag \`<Link>\` វិញ។
* **No-img-element**: ណែនាំកុំឱ្យប្រើ tag \`<img>\` ធម្មតា ជំនួសដោយសមាសភាគ \`<Image>\` វិញ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'monospace', backgroundColor: '#1e293b', color: '#f87171', padding: '20px', borderRadius: '10px' }}>
        <p style={{ color: '#94a3b8', margin: '0 0 10px 0' }}>$ npm run lint</p>
        <div style={{ backgroundColor: '#0f172a', padding: '12px', borderRadius: '6px', border: '1px solid #f87171' }}>
          <p style={{ margin: 0, fontWeight: 'bold' }}>⚠️ Warning: Do not use standard &lt;img&gt; element.</p>
          <p style={{ margin: '5px 0 0 0', color: '#94a3b8', fontSize: '12px' }}>
            Replace standard HTML image elements with the NextJS custom &lt;Image&gt; component for dynamic responsive layout resizing. (next/no-img-element)
          </p>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  }
];
