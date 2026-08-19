import { Lesson } from '../types';

export const nextjsLessonsPart3: Lesson[] = [
  {
    id: "nextjs-api-routes",
    title: { en: "Next.js - API Routes", km: "Next.js - ផ្លូវ API (Pages Router)" },
    content: {
      en: `# Integrated API Routes
In the Pages Router, you can build a complete backend directly inside your project by creating files in the **\`pages/api/\`** directory.

### Writing an API Handler:
Any file inside \`pages/api/\` is mapped to the public route \`/api/*\` and exports a default request handler function:

\`\`\`typescript
// pages/api/user.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'Seyha', role: 'admin' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
\`\`\``,
      km: `# ផ្លូវបង្កើត API (API Routes)
នៅក្នុង Pages Router អ្នកអាចបង្កើត Backend ពេញលេញមួយដោយផ្ទាល់នៅក្នុងគម្រោងរបស់អ្នក ដោយគ្រាន់តែបង្កើតឯកសារនៅក្នុងថត **\`pages/api/\`**។

### របៀបសរសេរកូដ API Handler៖
រាល់ឯកសារក្នុងថត \`pages/api/\` នឹងក្លាយជាអាសយដ្ឋាន API \`/api/*\` ដោយស្វ័យប្រវត្ត៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [response, setResponse] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const callApi = () => {
      setLoading(true);
      setTimeout(() => {
        setResponse({ name: "Seyha", role: "admin", status: "Active" });
        setLoading(false);
      }, 800);
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h3>API Endpoint Invocation Simulator</h3>
        <p style={{ fontSize: '13px', color: '#4b5563' }}>Invoking route: <code>GET /api/user</code></p>
        <button onClick={callApi} style={{ padding: '8px 16px', background: '#000', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          {loading ? "Calling API..." : "Send GET Request"}
        </button>

        {response && (
          <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#f1f5f9', borderRadius: '6px' }}>
            <span style={{ fontSize: '11px', color: '#64748b', display: 'block', marginBottom: '5px' }}>HTTP STATUS: 200 OK</span>
            <pre style={{ margin: 0, fontSize: '12px', fontFamily: 'monospace' }}>
              {JSON.stringify(response, null, 2)}
            </pre>
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
    id: "nextjs-dynamic-api-routes",
    title: { en: "Next.js - Dynamic API Routes", km: "Next.js - ផ្លូវ API បែបឌីណាមិក" },
    content: {
      en: `# Dynamic URL Parameters in APIs
Just like visual pages, you can capture dynamic segments within your API endpoints by wrapping the file names in square brackets.

### File Naming Mapping:
* File path: **\`pages/api/posts/[id].ts\`**
* Mapped endpoint: \`/api/posts/45\` or \`/api/posts/99\`

### Capturing values:
Next.js injects the dynamic query segment directly into the request's query object:
\`\`\`typescript
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; // Captures "45"
  res.status(200).json({ postId: id, title: 'Optimized hydration guide' });
}
\`\`\``,
      km: `# ផ្នែកឌីណាមិកក្នុង API (Dynamic API Routes)
ដូចទៅនឹងទំព័រធម្មតាដែរ អ្នកអាចកំណត់ទទួលយកលក្ខខណ្ឌ URL បែបឌីណាមិកនៅក្នុង API របស់អ្នក ដោយប្រើប្រាស់វង់ក្រចកជ្រុង។

### របៀបដាក់ឈ្មោះឯកសារ៖
* ផ្លូវឯកសារ៖ **\`pages/api/posts/[id].ts\`**
* អាសយដ្ឋាន API៖ \`/api/posts/45\` ឬ \`/api/posts/99\`

### របៀបហៅប្រើប្រាស់តម្លៃ៖
Next.js នឹងបញ្ជូនតម្លៃនោះមកក្នុង \`req.query\` របស់អ្នក៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [postId, setPostId] = React.useState("22");
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Dynamic API Route Resolver</h4>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '12px', color: '#64748b' }}>Edit dynamic ID segment:</label>
          <input 
            type="number" 
            value={postId} 
            onChange={(e) => setPostId(e.target.value)} 
            style={{ display: 'block', padding: '6px', border: '1px solid #cbd5e1', borderRadius: '4px', marginTop: '4px' }}
          />
        </div>

        <div style={{ padding: '12px', backgroundColor: '#fdf2f8', border: '1px solid #fbcfe8', borderRadius: '6px' }}>
          <p style={{ margin: 0, fontSize: '12px', fontFamily: 'monospace', color: '#9d174d' }}>
            Endpoint: GET /api/posts/{postId}
          </p>
          <pre style={{ margin: '8px 0 0 0', fontSize: '12px', fontFamily: 'monospace', color: '#db2777' }}>
            {"{\n  \"postId\": \""}{postId}{"\",\n  \"success\": true,\n  \"author\": \"Seyha Dev\"\n}"}
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
    id: "nextjs-route-handlers",
    title: { en: "Next.js - Route Handlers", km: "Next.js - Route Handlers (App Router)" },
    content: {
      en: `# Route Handlers (App Router)
In the modern App Router, API routes are replaced by **Route Handlers**. Instead of a default export, you export specific named functions corresponding to standard HTTP verbs.

### Directory Rules:
* Filename must be named **\`route.ts\`**.
* Cannot exist inside the same directory as a \`page.tsx\` (to prevent routing conflicts).

\`\`\`typescript
// app/api/items/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ items: ['Keyboard', 'Mouse'] });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: 'Item created!', data: body }, { status: 210 });
}
\`\`\``,
      km: `# ប្រព័ន្ធ Route Handlers (App Router)
នៅក្នុង App Router ថ្មី ផ្លូវបង្កើត API ត្រូវបានជំនួសដោយ **Route Handlers**។ ជំនួសឱ្យការប្រើ default export អ្នកត្រូវបង្កើតអនុគមន៍ដែលតំណាងឱ្យ HTTP Verbs ផ្សេងៗ (GET, POST, PUT, DELETE)។

### ច្បាប់ប្រព័ន្ធថតកូដ៖
* ឈ្មោះឯកសារត្រូវតែជា **\`route.ts\`**។
* មិនត្រូវស្ថិតក្នុងថតជាមួយឯកសារ \`page.tsx\` ឡើយ ដើម្បីការពារការជាន់ផ្លូវ URL។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [logs, setLogs] = React.useState([]);

    const simulateRequest = (method) => {
      const time = new Date().toLocaleTimeString();
      let resMsg = "";
      if (method === 'GET') {
        resMsg = "NextResponse.json({ status: 'live' })";
      } else {
        resMsg = "NextResponse.json({ message: 'Data created!' }, { status: 201 })";
      }

      setLogs(prev => [\`[\${time}] \${method} Request dispatched ➔ Resolved with \${resMsg}\`, ...prev]);
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>App Router Route Handlers</h3>
        <p style={{ fontSize: '12px', color: '#6b7280' }}>Filename: <code>app/api/route.ts</code></p>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <button onClick={() => simulateRequest('GET')} style={{ padding: '6px 12px', background: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>GET Handler</button>
          <button onClick={() => simulateRequest('POST')} style={{ padding: '6px 12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>POST Handler</button>
        </div>

        <div style={{ backgroundColor: '#0f172a', color: '#34d399', padding: '12px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '12px', height: '100px', overflowY: 'auto' }}>
          {logs.length === 0 ? "Click any verb above to dispatch simulated HTTP handshakes..." : logs.map((log, i) => <div key={i}>{log}</div>)}
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-api-middlewares",
    title: { en: "Next.js - API MiddleWares", km: "Next.js - ការប្រើប្រាស់ Middleware" },
    content: {
      en: `# Endpoint Middlewares
Middlewares let you intercept and run custom logic (such as checking credentials or logging metrics) before a request is resolved.

### Global Middleware Location:
In Next.js, create a single file named **\`middleware.ts\`** directly inside your root directory:

\`\`\`typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/request';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  
  if (!token) {
    // Redirect unauthenticated request
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

// Limit middleware to run only on secure endpoints
export const config = {
  matcher: '/dashboard/:path*',
};
\`\`\``,
      km: `# ដំណើរការកាត់កណ្តាល (Middlewares)
Middleware អនុញ្ញាតឱ្យអ្នកស្ទាក់ចាប់ និងដំណើរការកូដផ្សេងៗ (ដូចជាការពិនិត្យសិទ្ធិ ឬកត់ត្រាទិន្នន័យ) មុនពេលការស្នើសុំ (Request) ត្រូវបានដោះស្រាយរួចរាល់។

### ទីតាំងឯកសារ៖
បង្កើតឯកសារតែមួយគត់ឈ្មោះថា **\`middleware.ts\`** នៅក្នុងថត Root នៃគម្រោងរបស់អ្នក៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [authorized, setAuthorized] = React.useState(false);
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Auth Middleware Checker (Dashboard Guard)</h4>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <button onClick={() => setAuthorized(true)} style={{ padding: '6px 12px', background: authorized ? '#10b981' : '#e2e8f0', color: authorized ? '#fff' : '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login (Set Token)</button>
          <button onClick={() => setAuthorized(false)} style={{ padding: '6px 12px', background: !authorized ? '#ef4444' : '#e2e8f0', color: !authorized ? '#fff' : '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Logout (Clear Token)</button>
        </div>

        <div style={{ padding: '12px', backgroundColor: authorized ? '#ecfdf5' : '#fef2f2', borderRadius: '6px', border: '1px solid', borderColor: authorized ? '#a7f3d0' : '#fca5a5' }}>
          <strong>Middleware Interceptor Action:</strong>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px' }}>
            {authorized ? "✅ Token Found. Route resolution: NextResponse.next() (Access Granted!)" : "❌ No Token. Route resolution: NextResponse.redirect('/login') (Access Denied!)"}
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
    id: "nextjs-response-helpers",
    title: { en: "Next.js - Response Helpers", km: "Next.js - អនុគមន៍ជំនួយឆ្លើយតប" },
    content: {
      en: `# Response Generation Helpers
Next.js provides clean helpers to structure JSON output, configure status codes, and set response headers easily.

### The NextResponse Object:
The \`NextResponse\` wrapper extends the standard Web API Response class with modern developer-friendly shorthand methods:

\`\`\`typescript
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { success: true, payload: [] },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    }
  );
}
\`\`\``,
      km: `# អនុគមន៍ជំនួយឆ្លើយតប (Response Helpers)
Next.js ផ្តល់នូវអនុគមន៍ជំនួយច្បាស់លាស់ដើម្បីរៀបចំរចនាសម្ព័ន្ធ JSON កំណត់ status codes និងកំណត់ headers ឆ្លើយតបទៅកាន់ Client វិញ។

### NextResponse Object៖
ថ្នាក់ \`NextResponse\` ពង្រីកសមត្ថភាពរបស់ Web API Response ធម្មតា ដោយបន្ថែម shorthand ងាយស្រួលសរសេរ៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>HTTP NextResponse Properties</h4>
        <div style={{ border: '1px solid #cbd5e1', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ backgroundColor: '#f1f5f9', padding: '8px 12px', fontSize: '12px', fontWeight: 'bold' }}>Headers & Options Payload</div>
          <pre style={{ margin: 0, padding: '12px', fontSize: '12px', fontFamily: 'monospace', backgroundColor: '#fff', color: '#4f46e5' }}>
{\`NextResponse.json({ success: true }, {
  status: 200,
  headers: {
    "X-Powered-By": "NextJS",
    "Access-Control-Allow-Origin": "*"
  }
})\`}
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
    id: "nextjs-cli-commands",
    title: { en: "Next.js - CLI Commands", km: "Next.js - បញ្ជាបញ្ជា CLI" },
    content: {
      en: `# Command Line Interface (CLI)
Vercel packages a unified **CLI toolchain** inside your \`package.json\` scripts:

### Standard Command Reference:
* **\`next dev\`**: Launches a local development server on port 3000 with hot-module reloading and real-time typescript lint checks.
* **\`next build\`**: Compiles and bundles production static assets, optimizing layouts and stripping unused packages.
* **\`next start\`**: Runs the optimized server after completing builds.
* **\`next lint\`**: Audits your workspace for warnings and accessibility issues.`,
      km: `# របៀបប្រើប្រាស់បញ្ជា CLI (CLI Commands)
Vercel ផ្តល់ឧបករណ៍បញ្ជាគម្រោង **CLI** មកជាមួយនៅក្នុងស្គ្រីប \`package.json\` របស់អ្នក៖

### បញ្ជាចម្បងៗ៖
* **\`next dev\`**: បើកដំណើរការ Server សម្រាប់សរសេរកូដនៅលើម៉ាស៊ីន (Local port 3000) ជាមួយ Hot module reloading។
* **\`next build\`**: រៀបចំផ្គុំកូដទាំងអស់ឱ្យទៅជាទ្រង់ទ្រាយសម្រេចសម្រាប់ការដាក់ឱ្យដំណើរការ (Production bundle)។
* **\`next start\`**: បើកដំណើរការ Server សម្រេចបន្ទាប់ពីបាន build រួច។
* **\`next lint\`**: ត្រួតពិនិត្យមើលកូដទាំងអស់ដើម្បីរកកំហុសឆ្គង។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'monospace', backgroundColor: '#1e293b', color: '#a7f3d0', padding: '15px', borderRadius: '10px' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#94a3b8', fontFamily: 'sans-serif' }}>Vercel CLI Commands Console</h4>
        <div>$ npm run build</div>
        <div style={{ color: '#f1f5f9', fontSize: '12px', margin: '5px 0' }}>
          <div>▲ Next.js 15.0 - Creating an optimized production build...</div>
          <div style={{ color: '#10b981' }}>✓ Compiled successfully</div>
          <div>📄 Route (app)           Size         First Load JS</div>
          <div>┌  /                    1.2 kB             84 kB</div>
          <div>└  /dashboard           2.4 kB             89 kB</div>
          <div style={{ color: '#10b981' }}>○ (Static)  rendered as static HTML</div>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-functions",
    title: { en: "Next.js - Functions", km: "Next.js - អនុគមន៍ជំនួយទូទៅ" },
    content: {
      en: `# Native Core Functions
Next.js provides several built-in utilities that let you access request headers and control navigation directly within Server Components.

### Common Utilities:
1. **\`cookies()\`**: Access, modify, or set client cookies directly on the server:
   \`\`\`typescript
   import { cookies } from 'next/headers';
   const store = await cookies();
   const theme = store.get('theme');
   \`\`\`
2. **\`headers()\`**: Inspect request headers to customize content (e.g., getting the client IP address):
   \`\`\`typescript
   import { headers } from 'next/headers';
   const headersList = await headers();
   const userAgent = headersList.get('user-agent');
   \`\`\``,
      km: `# អនុគមន៍ជំនួយជាប្រចាំ (Core Functions)
Next.js ផ្តល់នូវមុខងារ និងអនុគមន៍ដែលជួយអ្នកក្នុងការទទួលបានព័ត៌មានលម្អិត និងកែប្រែទិន្នន័យពីម៉ាស៊ីនបម្រើ។

### អនុគមន៍សំខាន់ៗ៖
1. **\`cookies()\`**: អាន ឬកែប្រែ cookies របស់ client ដោយផ្ទាល់នៅលើ Server៖
   \`\`\`typescript
   import { cookies } from 'next/headers';
   const store = await cookies();
   const theme = store.get('theme');
   \`\`\`
2. **\`headers()\`**: អានព័ត៌មាន Headers ដើម្បីកំណត់ការបង្ហាញកូដឱ្យត្រូវនឹង Browser៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>NextJS built-in Helpers Reference</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={{ border: '1px solid #cbd5e1', padding: '10px', borderRadius: '6px' }}>
            <strong>notFound()</strong>
            <p style={{ margin: '4px 0 0 0', fontSize: '11px', color: '#64748b' }}>Instantly aborts rendering and loads the customized app/not-found.tsx fallback layout.</p>
          </div>
          <div style={{ border: '1px solid #cbd5e1', padding: '10px', borderRadius: '6px' }}>
            <strong>redirect(path)</strong>
            <p style={{ margin: '4px 0 0 0', fontSize: '11px', color: '#64748b' }}>Triggers an instant HTTP server redirection to alternative page coordinates.</p>
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
    id: "nextjs-directives",
    title: { en: "Next.js - Directives", km: "Next.js - សេចក្តីណែនាំកូដ" },
    content: {
      en: `# Core Component Directives
Next.js leverages specific text directives declared at the very top of files to separate server and client-side processing.

### The Two Pillars:
1. **\`"use client"\`**: Signals that this file and all its nested imports should execute in the client's browser. It allows you to use React state, layout hooks, and standard browser APIs.
2. **\`"use server"\`**: Marks an asynchronous function to be compiled as a secure **Server Action** that can be invoked safely from client components.

> **Rule**: If a file does not declare any directive at the top, Next.js treats it as a Server Component by default!`,
      km: `# សេចក្តីណែនាំកូដចម្បង (Directives)
Next.js ប្រើប្រាស់សេចក្តីណែនាំកូដ (Directives) ដែលសរសេរនៅលើគេបង្អស់នៃឯកសារ ដើម្បីបែងចែកការដំណើរការរវាង Server និង Client។

### សសរទ្រូងទាំងពីរ៖
1. **\`"use client"\`**: ប្រាប់ថាឯកសារនេះត្រូវដំណើរការនៅលើ Browser (Client-side) ដើម្បីអាចប្រើប្រាស់ React state, hooks និង APIs របស់ Browser បាន។
2. **\`"use server"\`**: ប្រកាសអនុគមន៍ឱ្យក្លាយជា **Server Action** ដើម្បីអាចហៅដំណើរការកូដសម្ងាត់លើ Server ពី Client-side បានដោយសុវត្ថិភាព។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Directive Execution Division</h3>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ padding: '12px', border: '1px solid #cbd5e1', flex: 1, borderRadius: '8px', backgroundColor: '#fdf4ff' }}>
            <span style={{ fontSize: '11px', color: '#a21caf', fontWeight: 'bold' }}>"use client"</span>
            <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#701a75' }}>Activates useState, useRef, browser event triggers, and client-side page layouts.</p>
          </div>
          <div style={{ padding: '12px', border: '1px solid #cbd5e1', flex: 1, borderRadius: '8px', backgroundColor: '#f0fdfa' }}>
            <span style={{ fontSize: '11px', color: '#0d9488', fontWeight: 'bold' }}>"use server"</span>
            <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#0f766e' }}>Secures API tokens, executes server DB mutations, and processes file structures safely.</p>
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
    id: "nextjs-components",
    title: { en: "Next.js - Components", km: "Next.js - សមាសភាគចម្បងៗ" },
    content: {
      en: `# Built-In Custom Components
To optimize your site's performance and core web vitals, Next.js provides specialized React components that extend standard HTML elements.

### The Optimization Suite:
* **\`<Image />\`**: Automatically compresses files, prevents layout shifts, and lazy-loads images.
* **\`<Link />\`**: Prefetches pages in the background for instant navigation.
* **\`<Script />\`**: Controls how third-party scripts (like analytics) load.
* **\`<Form />\`**: Optimizes searches and filters by prefetching target pages on submit.`,
      km: `# សមាសភាគជំនួយស្វ័យប្រវត្ត (Custom Components)
ដើម្បីជួយបង្កើនប្រសិទ្ធភាពដំណើរការគេហទំព័រឱ្យលឿនបំផុត Next.js ផ្តល់សមាសភាគ React ពិសេសដែលជំនួសឱ្យ tags HTML ធម្មតា។

### បញ្ជីសមាសភាគសំខាន់ៗ៖
* **\`<Image />\`**: កាត់បន្ថយទំហំរូបភាពស្វ័យប្រវត្ត ការពារប្លង់កុំឱ្យរំកិល និងមានមុខងារ Lazy-load។
* **\`<Link />\`**: ទាញយកទិន្នន័យទំព័រគោលដៅទុកជាមុន (Prefetches)។
* **\`<Script />\`**: គ្រប់គ្រងល្បឿន និងរបៀបផ្ទុក JavaScript ពីខាងក្រៅ។
* **\`<Form />\`**: ជួយសម្រួលការស្វែងរកទិន្នន័យដោយ prefetch ទំព័រលទ្ធផលទុកមុន។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Optimization Component Suite</h3>
        <ul style={{ paddingLeft: '15px', fontSize: '13px' }}>
          <li><strong>Image</strong> (next/image) ➔ Compressed AVIF/WebP assets</li>
          <li><strong>Link</strong> (next/link) ➔ Dynamic background preloading</li>
          <li><strong>Script</strong> (next/script) ➔ Lazy third-party loading strategies</li>
          <li><strong>Form</strong> (next/form) ➔ Automated filter layout caching</li>
        </ul>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-image-component",
    title: { en: "Next.js - Image Component", km: "Next.js - សមាសភាគ Image" },
    content: {
      en: `# Core Image Optimization (<Image>)
The custom **\`Image\`** component from **\`next/image\`** automatically optimizes images, improving loading times and preventing layout shifts.

### Key Benefits:
1. **Size Optimization**: Automatically serves resized, compressed images (such as in WebP or AVIF format) depending on the user's device.
2. **Preventing Layout Shifts**: Requires you to specify the \`width\` and \`height\` (or use the \`fill\` property) so the browser knows the exact space to reserve before the image loads.
3. **Lazy Loading**: Images are only loaded when they are about to enter the viewport, saving network bandwidth.

\`\`\`tsx
import Image from 'next/image';

export default function Profile() {
  return (
    <Image
      src="/avatar.png"
      width={120}
      height={120}
      alt="User Profile"
      placeholder="blur" // Optional low-res fallback
    />
  );
}
\`\`\``,
      km: `# ការគ្រប់គ្រងរូបភាពឱ្យលឿន (<Image>)
សមាសភាគ **\`Image\`** ពិសេសមកពី **\`next/image\`** ធ្វើការពង្រីក និងសម្រួលទំហំរូបភាពស្វ័យប្រវត្ត ដើម្បីបង្កើនល្បឿនទំព័រ និងការពារកុំឱ្យរំកិលប្លង់រំខានភ្នែក។

### លក្ខណៈសំខាន់ៗ៖
1. **Size Optimization**: បង្កើតរូបភាពជាទ្រង់ទ្រាយ WebP/AVIF ដែលតូច និងច្បាស់ស្របទៅតាមអេក្រង់ឧបករណ៍។
2. **Preventing Layout Shifts**: តម្រូវឱ្យកំណត់ \`width\` និង \`height\` (ឬប្រើ \`fill\`) ដើម្បីឱ្យ Browser រក្សាប្លង់ប្រអប់ទំហំនោះទុកជាមុន។
3. **Lazy Loading**: ទាញយករូបភាពតែនៅពេលដែលវាជិតអណ្តែតដល់ភ្នែករបស់អ្នកមើលប៉ុណ្ណោះ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Optimized Image Demonstration</h4>
        <div style={{ position: 'relative', width: '100%', height: '140px', backgroundColor: '#cbd5e1', borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '11px', color: '#1e293b', fontWeight: 'bold', zIndex: 2, padding: '4px 8px', background: 'rgba(255,255,255,0.8)', borderRadius: '4px' }}>
            ⚡ next/image Fill Mode
          </span>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?w=600")', backgroundSize: 'cover', opacity: 0.8 }}></div>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-font-component",
    title: { en: "Next.js - Font Component", km: "Next.js - សមាសភាគ Font" },
    content: {
      en: `# Zero-Layout-Shift Fonts (<Font>)
The **\`next/font\`** module hosting system downloads and hosts Google Fonts locally within your application bundle.

### Why use next/font?
* **Zero layout shifts (CLS)**: The system adjusts font size ratios in the background so that replacing fallback fonts with Google Fonts doesn't cause page content to jump around.
* **Privacy and Offline**: No requests are sent to Google Font servers by the user's browser, which satisfies strict GDPR compliance.

\`\`\`tsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
\`\`\``,
      km: `# ការទាញយក Font កុំឱ្យរំកិលប្លង់ (<Font>)
ម៉ូឌុល **\`next/font\`** របស់ Next.js ទាញយក និងបញ្ចូលឯកសារ Google Fonts ទៅក្នុងគម្រោងកម្មវិធីរបស់អ្នកដោយស្វ័យប្រវត្ត និងមានប្រសិទ្ធភាពខ្ពស់។

### ហេតុអ្វីប្រើប្រាស់ next/font?
* **Zero Layout Shift**: Next.js បង្កើតទំហំ Font ជំនួសបណ្តោះអាសន្ន ដើម្បីកុំឱ្យមានការរំកិលអក្សរពេលកំពុងផ្ទុកទិន្នន័យ។
* **សុវត្ថិភាព និងល្បឿន**: មិនបាច់ផ្ញើ Request ទៅកាន់ server របស់ Google ឡើយ គឺអាន Font ពីក្នុងគម្រោងផ្ទាល់តែម្តង។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Automated Local Font Loading</h4>
        <div style={{ padding: '12px', backgroundColor: '#f0fdfa', border: '1px solid #5eead4', borderRadius: '6px' }}>
          <pre style={{ margin: 0, fontSize: '12px', fontFamily: 'monospace' }}>
{\`import { Space_Grotesk } from 'next/font/google';
const spaceFont = Space_Grotesk({ subsets: ['latin'] });\`}
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
    id: "nextjs-head-component",
    title: { en: "Next.js - Head Component", km: "Next.js - សមាសភាគ Head" },
    content: {
      en: `# Managing Document Metadata
Prior to the App Router, you managed document header elements (like page titles and description tags) using the legacy **\`Head\`** component from **\`next/head\`**.

### Legacy Page Router metadata:
\`\`\`tsx
import Head from 'next/head';

export default function LegacyPage() {
  return (
    <>
      <Head>
        <title>Portfolio Dashboard</title>
        <meta name="description" content="Secure author portal" />
      </Head>
      <main>Dashboard content...</main>
    </>
  );
}
\`\`\`

> **Note**: In the modern App Router, you should declare metadata using the dedicated **\`Metadata\`** API instead of using custom elements in your layouts.`,
      km: `# ការកំណត់ព័ត៌មានទំព័រ (Head Component)
កាលពីប្រើប្រាស់ Pages Router ចាស់ ការកំណត់ព័ត៌មានសម្រាប់ម៉ាស៊ីនស្វែងរក (ដូចជា Title និង SEO Meta tags) ត្រូវបានធ្វើឡើងដោយប្រើប្រាស់សមាសភាគ **\`Head\`** មកពី **\`next/head\`**។

### របៀបសរសេរកូដ៖
\`\`\`tsx
import Head from 'next/head';

export default function LegacyPage() {
  return (
    <>
      <Head>
        <title>Portfolio Dashboard</title>
        <meta name="description" content="Secure author portal" />
      </Head>
      <main>Dashboard content...</main>
    </>
  );
}
\`\`\``
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>HTML Metadata Header Injector</h4>
        <div style={{ padding: '12px', backgroundColor: '#f1f5f9', borderRadius: '6px' }}>
          <pre style={{ margin: 0, fontSize: '11px', fontFamily: 'monospace', color: '#0f172a' }}>
{\`<Head>
  <title>Developer Hub - Articles</title>
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
</Head>\`}
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
    id: "nextjs-form-component",
    title: { en: "Next.js - Form Component", km: "Next.js - សមាសភាគ Form" },
    content: {
      en: `# Smart Prefetched Forms (<Form>)
The new **\`Form\`** component from **\`next/form\`** extends standard HTML forms with client-side prefetching capabilities.

### Why use <Form>?
* **Prefetching**: Next.js automatically downloads the target search pages as soon as the form enters the user's viewport, making page transitions feel instant when they submit!
* **No full reloads**: Submitting the form updates search query params without causing a hard page reload.

\`\`\`tsx
import Form from 'next/form';

export default function SearchBar() {
  return (
    <Form action="/search">
      <input name="query" placeholder="Search blog articles..." />
      <button type="submit">Submit</button>
    </Form>
  );
}
\`\`\``,
      km: `# សមាសភាគ Form វៃឆ្លាត (<Form>)
សមាសភាគ **\`Form\`** ថ្មីមកពី **\`next/form\`** ពង្រីកសមត្ថភាពរបស់ Form HTML ធម្មតា ដោយបន្ថែមមុខងារទាញយកទិន្នន័យទំព័រលទ្ធផលស្វែងរកទុកជាមុន (Prefetching)។

### អត្ថប្រយោជន៍ចម្បង៖
* **Prefetching**: Next.js ទាញយកឯកសារទំព័រគោលដៅ (ឧទាហរណ៍៖ \`/search\`) ទុកមុនភ្លាមៗ ដើម្បីឆ្លើយតបលទ្ធផលទំព័រលឿនបំផុត។
* **គ្មានការផ្ទុកទំព័រឡើងវិញ**: បញ្ជូនព័ត៌មានស្វែងរកដោយមិនបាច់ដំណើរការ reload ទំព័រមេឡើយ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [status, setStatus] = React.useState("Waiting for query input...");
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Smart Form Prefetch Activity</h4>
        <input 
          placeholder="Search node modules..." 
          onChange={(e) => setStatus(e.target.value ? "⚡ Prefetching results for '/search?query=" + e.target.value + "'..." : "Waiting for query input...")}
          style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box' }}
        />
        <p style={{ fontSize: '11px', color: '#10b981', fontWeight: 'bold', marginTop: '8px' }}>{status}</p>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-link-component",
    title: { en: "Next.js - Link Component", km: "Next.js - សមាសភាគ Link ពេញលេញ" },
    content: {
      en: `# Deep-Dive: <Link> Attributes
The custom **\`Link\`** component provides several configuration parameters to customize how page transitions behave:

### Advanced Link Properties:
* **\`prefetch\`**: Controls whether Next.js preloads the page assets in the background. Defaults to \`true\`.
* **\`scroll\`**: Determines whether the browser should scroll back up to the top of the page after navigating. Defaults to \`true\`.
* **\`replace\`**: Replaces the current browser history entry instead of adding a new one, which is useful for wizards or auth transitions.

\`\`\`tsx
<Link href="/dashboard" replace={true} scroll={false} prefetch={true}>
  Go to Dashboard settings
</Link>
\`\`\``,
      km: `# ស្វែងយល់លម្អិត៖ លក្ខណៈរបស់ <Link>
សមាសភាគ **\`Link\`** មានលក្ខណៈសម្បត្តិលម្អិតជាច្រើនដើម្បីគ្រប់គ្រងឥរិយាបថនៃការផ្លាស់ប្តូរទំព័រ៖

### លក្ខណៈសម្បត្តិពិសេសៗ៖
* **\`prefetch\`**: កំណត់ការទាញយកកូដទំព័រគោលដៅទុកមុន។ តម្លៃលំនាំដើមគឺ \`true\`។
* **\`scroll\`**: កំណត់ថាត្រូវរមៀលអេក្រង់ទៅលើគេបង្អស់វិញបន្ទាប់ពីប្តូរទំព័រឬអត់។ តម្លៃលំនាំដើមគឺ \`true\`។
* **\`replace\`**: ជំនួស URL បច្ចុប្បន្ននៅក្នុងប្រវត្តិស្វែងរក (Browser history) តែម្តង ដោយមិនបង្កើតប្រវត្តិថ្មី។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Link Properties Mapping</h4>
        <div style={{ border: '1px solid #cbd5e1', borderRadius: '8px', padding: '12px', backgroundColor: '#fdfbf7' }}>
          <code style={{ fontSize: '12px', color: '#1e293b', display: 'block' }}>
            {"<Link href=\\"/dashboard\\" replace={true} scroll={false}>"}
          </code>
          <p style={{ fontSize: '11px', color: '#b45309', margin: '6px 0 0 0' }}>
            ✓ Browser history will be replaced dynamically, keeping scrolling locked exactly at current vertical coordinates.
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
    id: "nextjs-script-component",
    title: { en: "Next.js - Script Component", km: "Next.js - សមាសភាគ Script" },
    content: {
      en: `# External Script Management (<Script>)
The custom **\`Script\`** component from **\`next/script\`** lets you load and optimize third-party JavaScript files (like Google Analytics or ads) safely.

### Loading Strategies:
Use the \`strategy\` property to define exactly when the script should execute:
* **\`beforeInteractive\`**: Loads and executes the script before any Next.js code runs. Ideal for core security or polyfill libraries.
* **\`afterInteractive\`**: Loads immediately after the page becomes interactive (the default). Best for tag managers or analytics.
* **\`lazyOnload\`**: Defers loading the script until the page is fully idle, which is perfect for chat widgets or social media plugins.

\`\`\`tsx
import Script from 'next/script';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Script
        src="https://example.com/analytics.js"
        strategy="lazyOnload" // Defer to save bandwidth
      />
    </>
  );
}
\`\`\``,
      km: `# ការគ្រប់គ្រងស្គ្រីបពីខាងក្រៅ (<Script>)
សមាសភាគ **\`Script\`** មកពី **\`next/script\`** ជួយឱ្យអ្នកទាញយក និងដំណើរការស្គ្រីប JavaScript ពីខាងក្រៅ (ដូចជា Google Analytics) ដោយសុវត្ថិភាព និងមិនប៉ះពាល់ដល់ល្បឿនរបស់ទំព័រ។

### យុទ្ធសាស្ត្រនៃការផ្ទុក (Loading Strategies)៖
ប្រើប្រាស់ attribute \`strategy\` ដើម្បីកំណត់ពេលវេលាដំណើរការ៖
* **\`beforeInteractive\`**: ផ្ទុកស្គ្រីបមុនពេល Next.js ចាប់ផ្តើមរៀបចំទំព័រ។
* **\`afterInteractive\`**: ផ្ទុកស្គ្រីបភ្លាមៗបន្ទាប់ពីទំព័រអាចចុចកម្មវិធីបាន (លំនាំដើម)។
* **\`lazyOnload\`**: ពន្យារពេលផ្ទុករហូតដល់ទំព័រស្ងប់ស្ងាត់ (Idle) ល្អសម្រាប់ Chat widgets។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Script Loading Strategies</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
          <div style={{ padding: '8px', backgroundColor: '#e0f2fe', borderRadius: '6px', fontSize: '11px', textAlign: 'center' }}>
            <strong>beforeInteractive</strong>
            <p style={{ margin: '4px 0 0 0', color: '#0369a1' }}>Prioritized loading for core libraries.</p>
          </div>
          <div style={{ padding: '8px', backgroundColor: '#f0fdf4', borderRadius: '6px', fontSize: '11px', textAlign: 'center' }}>
            <strong>afterInteractive</strong>
            <p style={{ margin: '4px 0 0 0', color: '#15803d' }}>Immediate tracking execution.</p>
          </div>
          <div style={{ padding: '8px', backgroundColor: '#faf5ff', borderRadius: '6px', fontSize: '11px', textAlign: 'center' }}>
            <strong>lazyOnload</strong>
            <p style={{ margin: '4px 0 0 0', color: '#6b21a8' }}>Deferred support for chat widgets.</p>
          </div>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  }
];
