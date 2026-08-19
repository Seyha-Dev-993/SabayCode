import { Lesson } from '../types';

export const nextjsLessonsPart5: Lesson[] = [
  {
    id: "nextjs-optimizations",
    title: { en: "Next.js - Optimizations", km: "Next.js - ភាពប្រសើរឡើងនៃដំណើរការ" },
    content: {
      en: `# Optimization Overview
Next.js provides built-in tools and configurations designed to automatically optimize your application's Core Web Vitals, ensuring fast loading speeds and high search rankings.

### Core Areas of Optimization:
* **Asset Loading**: Optimizing images, fonts, and scripts to load efficiently.
* **Bundle Splitting**: Splitting your JavaScript code into smaller pieces so users only download what is needed.
* **Server Caching**: Reducing server response times by caching data and generated pages.`,
      km: `# ទិដ្ឋភាពទូទៅនៃការបង្កើនល្បឿន (Optimizations)
Next.js មានប្រព័ន្ធចម្រោះ និងការកំណត់ស្វ័យប្រវត្តជាច្រើន ដើម្បីជួយបង្កើនល្បឿនទំព័រឱ្យស្របទៅតាមស្តង់ដារ Core Web Vitals របស់ Google ដើម្បីទទួលបានចំណាត់ថ្នាក់ស្វែងរកខ្ពស់។

### ផ្នែកសំខាន់ៗដែលត្រូវបង្កើនប្រសិទ្ធភាព៖
* **Asset Loading**: ការទាញយករូបភាព Fonts និង Script ឱ្យមានប្រសិទ្ធភាពខ្ពស់។
* **Bundle Splitting**: បំបែកកូដ JavaScript ធំៗឱ្យទៅជាបំណែកតូចៗ ដើម្បីកុំឱ្យ Browser ត្រូវទាញយកអ្វីដែលមិនទាន់ត្រូវការ។
* **Server Caching**: កាត់បន្ថយពេលវេលាឆ្លើយតបរបស់ Server តាមរយៈប្រព័ន្ធចងចាំ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Core Web Vitals Scoring Target</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          <div style={{ padding: '10px', backgroundColor: '#ecfdf5', borderRadius: '8px', border: '1px solid #10b981', textAlign: 'center' }}>
            <span style={{ fontSize: '24px' }}>⚡</span>
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#047857' }}>LCP &lt; 2.5s</div>
            <p style={{ margin: '4px 0 0 0', fontSize: '10px', color: '#065f46' }}>Largest Contentful Paint</p>
          </div>
          <div style={{ padding: '10px', backgroundColor: '#ecfdf5', borderRadius: '8px', border: '1px solid #10b981', textAlign: 'center' }}>
            <span style={{ fontSize: '24px' }}>🛡️</span>
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#047857' }}>FID &lt; 100ms</div>
            <p style={{ margin: '4px 0 0 0', fontSize: '10px', color: '#065f46' }}>First Input Delay</p>
          </div>
          <div style={{ padding: '10px', backgroundColor: '#ecfdf5', borderRadius: '8px', border: '1px solid #10b981', textAlign: 'center' }}>
            <span style={{ fontSize: '24px' }}>📐</span>
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#047857' }}>CLS &lt; 0.1</div>
            <p style={{ margin: '4px 0 0 0', fontSize: '10px', color: '#065f46' }}>Cumulative Layout Shift</p>
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
    id: "nextjs-image-optimization",
    title: { en: "Next.js - Image Optimization", km: "Next.js - ការសម្រួលទំហំរូបភាព" },
    content: {
      en: `# Advanced Image Formats
Next.js supports automatic modern compression formats (like WebP and AVIF), serving the smallest possible file sizes based on browser capabilities.

### Enabling AVIF:
To enable advanced AVIF file compression, configure your \`next.config.js\` as follows:

\`\`\`javascript
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}
\`\`\`

AVIF images can be up to 20% smaller than WebP format files, helping your pages load even faster.`,
      km: `# ការប្រើប្រាស់ទ្រង់ទ្រាយរូបភាពទំនើប (Image Optimization)
Next.js គាំទ្រការបំប្លែងរូបភាពទៅជាទ្រង់ទ្រាយទំនើបៗដូចជា WebP និង AVIF ដោយស្វ័យប្រវត្ត ដែលជួយឱ្យរូបភាពមានទំហំតូចបំផុត ប៉ុន្តែរក្សាភាពច្បាស់ដដែល។

### របៀបបើកដំណើរការ AVIF៖
កំណត់នៅក្នុងឯកសារ \`next.config.js\` ដើម្បីគាំទ្រ AVIF៖

\`\`\`javascript
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}
\`\`\``
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Asset Formats and Sizes Comparison</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', fontSize: '12px', textAlign: 'center' }}>
          <div style={{ padding: '8px', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
            <strong>Raw JPG Image</strong>
            <p style={{ margin: '4px 0 0 0', color: '#dc2626', fontWeight: 'bold' }}>4.2 MB</p>
          </div>
          <div style={{ padding: '8px', border: '1px solid #10b981', borderRadius: '6px', backgroundColor: '#f0fdf4' }}>
            <strong>WebP optimized</strong>
            <p style={{ margin: '4px 0 0 0', color: '#10b981', fontWeight: 'bold' }}>320 KB</p>
          </div>
          <div style={{ padding: '8px', border: '1px solid #10b981', borderRadius: '6px', backgroundColor: '#ecfdf5' }}>
            <strong>AVIF optimized</strong>
            <p style={{ margin: '4px 0 0 0', color: '#059669', fontWeight: 'bold' }}>190 KB</p>
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
    id: "nextjs-lazy-loading",
    title: { en: "Next.js - Lazy Loading", km: "Next.js - ការផ្ទុកទិន្នន័យចាំបាច់" },
    content: {
      en: `# On-Demand Component Loading
**Lazy Loading** lets you defer loading client components and third-party libraries until they are actually needed, which significantly reduces your initial page load times.

### Using next/dynamic:
You can dynamically import client components using **\`next/dynamic\`**:

\`\`\`tsx
import dynamic from 'next/dynamic';

// Loads the chat widget dynamically only when requested!
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), {
  loading: () => <p>Loading chat widget...</p>,
  ssr: false, // Prevents rendering on the server
});

export default function Page() {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Chat</button>
      {open && <ChatWidget />}
    </div>
  );
}
\`\`\``,
      km: `# ការផ្ទុកសមាសភាគតាមតម្រូវការ (Lazy Loading)
**Lazy Loading** ជួយពន្យារពេលផ្ទុកសមាសភាគ ឬបណ្ណាល័យធំៗរហូតដល់ពេលដែលវាត្រូវបានហៅប្រើប្រាស់ជាក់ស្តែង ដែលជួយបង្កើនល្បឿនផ្ទុកទំព័រដំបូងរបស់កម្មវិធីយ៉ាងខ្លាំង។

### របៀបប្រើប្រាស់ next/dynamic៖
អ្នកអាចនាំចូលសមាសភាគមកប្រើប្រាស់បែបឌីណាមិកតាមរយៈ **\`next/dynamic\`**៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleOpenChat = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(true);
      }, 1000);
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Dynamic Code Splitting Simulator</h4>
        <p style={{ fontSize: '13px', color: '#4b5563' }}>The chat component bundle (45KB) is not loaded until you click the button below.</p>
        
        {!open ? (
          <button onClick={handleOpenChat} style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            {loading ? "Downloading JS Chunk..." : "Load Chat Widget"}
          </button>
        ) : (
          <div style={{ padding: '15px', backgroundColor: '#dbeafe', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
            <strong>💬 Live Chat Widget</strong>
            <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#1e40af' }}>JS bundle downloaded successfully! Component is now hydrated and active.</p>
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
    id: "nextjs-font-optimization",
    title: { en: "Next.js - Font Optimization", km: "Next.js - ការទាញយក Font" },
    content: {
      en: `# Local Fonts and Web Safety
In addition to Google Fonts, Next.js allows you to load custom local fonts safely using the **\`next/font/local\`** module.

### Loading Local Font Files:
Specify the local file paths of your font files (such as \`.woff2\` format files) inside your project files:

\`\`\`typescript
import localFont from 'next/font/local';

const khmerDisplayFont = localFont({
  src: './fonts/KhmerDisplay.woff2',
  variable: '--font-khmer-display',
});

export default function Layout({ children }) {
  return (
    <html lang="km" className={khmerDisplayFont.variable}>
      <body>{children}</body>
    </html>
  );
}
\`\`\``,
      km: `# ការកំណត់ Font ផ្ទាល់ខ្លួន (Font Optimization)
ក្រៅពី Google Fonts, Next.js អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ Font ផ្ទាល់ខ្លួនពីក្នុងគម្រោងកូដដោយសុវត្ថិភាពខ្ពស់ តាមរយៈម៉ូឌុល **\`next/font/local\`**។

### របៀបសរសេរកូដទាញយក៖
កំណត់ផ្លូវឯកសារ Font (ដូចជាឯកសារប្រភេទ \`.woff2\`) នៅក្នុងកូដរបស់អ្នក៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Local Font Declaration Blueprint</h4>
        <div style={{ padding: '12px', backgroundColor: '#faf5ff', border: '1px solid #d8b4fe', borderRadius: '6px' }}>
          <pre style={{ margin: 0, fontSize: '11px', fontFamily: 'monospace' }}>
{\`const myLocalFont = localFont({
  src: [
    { path: './fonts/Custom-Regular.woff2', weight: '400' },
    { path: './fonts/Custom-Bold.woff2', weight: '700' }
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
    id: "nextjs-video-optimization",
    title: { en: "Next.js - Video Optimization", km: "Next.js - ការសម្រួលវីដេអូ" },
    content: {
      en: `# Optimizing Video Delivery
Displaying high-definition videos can heavily slow down your site. Next.js recommends optimizing videos by configuring **lazy buffering** and **poster placeholders**.

### Best Practices:
* **Muted Autoplay**: Modern browsers block auto-playing videos unless they are muted.
* **Poster attribute**: Display a lightweight image fallback placeholder while the heavy video file buffer loads.

\`\`\`tsx
export default function VideoSection() {
  return (
    <video
      src="/demo.mp4"
      poster="/demo-thumbnail.png"
      muted
      autoPlay
      loop
      playsInline
      preload="none" // Prevent downloading until requested
    />
  );
}
\`\`\``,
      km: `# ការគ្រប់គ្រងវីដេអូឱ្យលឿន (Video Optimization)
ការដាក់វីដេអូច្បាស់ខ្លាំងអាចធ្វើឱ្យគេហទំព័រដើរយឺត។ Next.js ណែនាំឱ្យសម្រួលទំហំវីដេអូ និងប្រើប្រាស់ **Poster placeholders** ដើម្បីទប់ល្បឿនផ្ទុកទំព័រ។

### ច្បាប់គោលសំខាន់ៗ៖
* **Muted Autoplay**: Browser នឹងបិទមិនឱ្យវីដេអូដំណើរការឡើយ លុះត្រាតែអ្នកកំណត់ឱ្យវីដេអូនោះបិទសំឡេង (Muted)។
* **Poster attribute**: ដាក់រូបភាពតំណាងតូចមួយដើម្បីបង្ហាញ បណ្ដោះអាសន្នពេលវីដេអូកំពុងផ្ទុក។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h4>Optimized HTML5 Video Sandbox</h4>
        <div style={{ position: 'relative', width: '100%', height: '140px', backgroundColor: '#000', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: '#fff', textAlign: 'center', zIndex: 2 }}>
            <span style={{ fontSize: '30px' }}>▶</span>
            <p style={{ margin: '5px 0 0 0', fontSize: '11px', color: '#cbd5e1' }}>Muted Autoplay Enabled (Preload=none)</p>
          </div>
          {/* Mock poster cover */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600")', backgroundSize: 'cover', opacity: 0.4 }}></div>
        </div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-script-optimization",
    title: { en: "Next.js - Script Optimization", km: "Next.js - ការគ្រប់គ្រង Scripts" },
    content: {
      en: `# Advanced Script Optimization
Using the built-in **\`Script\`** component enables you to manage when external third-party scripts should load, preventing them from slowing down your site's initial loading speed.

### Comparative Strategies:
* **\`beforeInteractive\`**: Use only for scripts that must run before the page is interactive, such as security tokens or polyfills.
* **\`afterInteractive\`**: The default strategy. Runs immediately after the page loads, which is ideal for analytics packages like Google Analytics.
* **\`lazyOnload\`**: Runs during browser idle periods. Best for heavy widgets like live chat interfaces.`,
      km: `# របៀបកំណត់ល្បឿន Scripts (Script Optimization)
ការប្រើប្រាស់សមាសភាគ **\`Script\`** របស់ Next.js ជួយឱ្យអ្នកគ្រប់គ្រងពេលវេលាទាញយក និងដំណើរការ JavaScript ពីក្រៅគម្រោងបានយ៉ាងលម្អិត។

### ជម្រើសយុទ្ធសាស្ត្រ៖
* **\`beforeInteractive\`**: ប្រើប្រាស់សម្រាប់តែស្គ្រីបសំខាន់បំផុតដែលត្រូវដើរមុនគេបង្អស់។
* **\`afterInteractive\`**: ជាជម្រើសលំនាំដើម។ ដំណើរការភ្លាមបន្ទាប់ពីទំព័រផ្ទុកចប់ ល្អសម្រាប់កូដតាមដានស្ថិតិទំព័រ។
* **\`lazyOnload\`**: ពន្យារពេលរហូតដល់ទំព័រស្ងាត់ល្អ ល្អសម្រាប់ Chat widgets ធំៗ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Script Load Pipeline Simulation</h4>
        <div style={{ border: '1px solid #cbd5e1', padding: '12px', borderRadius: '8px', backgroundColor: '#fdfbf7' }}>
          <span style={{ fontSize: '11px', color: '#b45309', fontWeight: 'bold' }}>NETWORK DISPATCH SEQUENCING:</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px', fontSize: '12px' }}>
            <span style={{ color: '#0369a1' }}>1. beforeInteractive</span>
            <span>➔</span>
            <span style={{ color: '#15803d' }}>2. afterInteractive</span>
            <span>➔</span>
            <span style={{ color: '#6b21a8' }}>3. lazyOnload</span>
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
    id: "nextjs-memory-optimization",
    title: { en: "Next.js - Memory Optimization", km: "Next.js - ការគ្រប់គ្រងអង្គចងចាំ" },
    content: {
      en: `# Server Memory Optimization
Running full-stack Node environments can sometimes lead to high memory consumption on Vercel or cloud containers. Next.js provides tools to optimize memory usage.

### Tuning Node Garbage Collection:
For memory-restricted containers, configure your start scripts to limit heap memory and control garbage collection:

\`\`\`json
{
  "scripts": {
    "start": "node --max-old-space-size=1024 dist/server.cjs"
  }
}
\`\`\`

Limiting heap memory helps prevent containers from exceeding memory limits and crashing under heavy traffic.`,
      km: `# ការគ្រប់គ្រងអង្គចងចាំ Server (Memory Optimization)
ការដំណើរការកម្មវិធី Full-stack Node.js ពេលខ្លះអាចស៊ីអង្គចងចាំ (RAM) របស់ Server ច្រើន។ Next.js ផ្តល់ការកំណត់ដើម្បីជួយសម្រួលការប្រើប្រាស់ RAM នេះ។

### ការកំណត់ទំហំ Memory៖
សម្រាប់ Server តូចៗ អ្នកអាចកំណត់ទំហំ RAM អតិបរមាដែល Node.js អាចប្រើប្រាស់បាន នៅក្នុងស្គ្រីប \`package.json\`៖

\`\`\`json
{
  "scripts": {
    "start": "node --max-old-space-size=1024 dist/server.cjs"
  }
}
\`\`\``
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'monospace', backgroundColor: '#0f172a', color: '#38bdf8', padding: '20px', borderRadius: '12px' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#94a3b8', fontFamily: 'sans-serif' }}>NodeJS Heap Memory Status</h4>
        <div style={{ fontSize: '13px', color: '#10b981' }}>✓ Total Server RAM Allocated: 1024 MB</div>
        <div style={{ fontSize: '13px', color: '#38bdf8' }}>✓ Active heap usage: 145 MB</div>
        <div style={{ fontSize: '13px', color: '#f59e0b' }}>✓ Garbage collection: IDLE</div>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "nextjs-opentelemetry",
    title: { en: "Next.js - Using OpenTelemetry", km: "Next.js - ការប្រើប្រាស់ OpenTelemetry" },
    content: {
      en: `# Integrated Application Tracking
Next.js supports **OpenTelemetry (OTel)**, allowing you to trace server request lifecycles and monitor API performance.

### Enabling OpenTelemetry:
1. Turn on OpenTelemetry support inside your \`next.config.js\`:
   \`\`\`javascript
   module.exports = {
     experimental: {
       instrumentationHook: true,
     },
   }
   \`\`\`
2. Create an **\`instrumentation.ts\`** file in the root of your project to initialize your OTel exporters:
   \`\`\`typescript
   export function register() {
     // Initialize your observability tool (e.g. Honeycomb, Datadog)
   }
   \`\`\``,
      km: `# តាមដានសកម្មភាពកម្មវិធី (OpenTelemetry)
Next.js គាំទ្រការភ្ជាប់ទៅកាន់ប្រព័ន្ធ **OpenTelemetry (OTel)** ដើម្បីឱ្យអ្នកអាចតាមដានរាល់សកម្មភាពរបស់ Server និងវាស់ស្ទង់ល្បឿនរបស់ APIs ផ្សេងៗ។

### របៀបបើកដំណើរការ៖
1. បើកដំណើរការនៅក្នុងឯកសារ \`next.config.js\`៖
   \`\`\`javascript
   module.exports = {
     experimental: {
       instrumentationHook: true,
     },
   }
   \`\`\`
2. បង្កើតឯកសារ **\`instrumentation.ts\`** នៅខាងក្រៅគេបង្អស់ដើម្បីចាប់ផ្តើម OTel exporters៖`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>OTel Instrumentation Hook Setup</h4>
        <div style={{ padding: '12px', backgroundColor: '#ecfdf5', border: '1px solid #10b981', borderRadius: '6px' }}>
          <pre style={{ margin: 0, fontSize: '11px', fontFamily: 'monospace' }}>
{\`// instrumentation.ts
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./instrumentation-node');
  }
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
    id: "nextjs-package-bundling",
    title: { en: "Next.js - Package Bundling Optimization", km: "Next.js - ការសម្រួលកញ្ចប់កូដ" },
    content: {
      en: `# Advanced Package Bundling
When compiling full-stack projects, some server-only Node libraries (like database drivers or native utilities) should not be compiled into your client-side JavaScript bundles.

### Excluding Server Packages:
Use the **\`serverComponentsExternalPackages\`** option in your \`next.config.js\` to keep server-only dependencies out of client-side bundles:

\`\`\`javascript
module.exports = {
  experimental: {
    serverComponentsExternalPackages: ['sequelize', 'pg'],
  },
}
\`\`\`

This ensures database drivers and other server-only packages are never bundled into the code sent to users' browsers.`,
      km: `# ការសម្រួលកញ្ចប់កូដ (Package Bundling Optimization)
នៅពេល compile កូដ full-stack, បណ្ណាល័យខាង Server-only មួយចំនួន (ដូចជា Database drivers) មិនត្រូវយកមកលាយឡំ ឬ compile ចូលទៅក្នុងកញ្ចប់កូដ Client-side ឡើយ។

### របៀបដកកញ្ចប់កូដ Server ចេញ៖
កំណត់នៅក្នុងឯកសារ \`next.config.js\` តាមរយៈ \`serverComponentsExternalPackages\`៖

\`\`\`javascript
module.exports = {
  experimental: {
    serverComponentsExternalPackages: ['sequelize', 'pg'],
  },
}
\`\`\``
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h4>Compiler Bundler Exclude Blueprint</h4>
        <div style={{ padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
          <span style={{ fontSize: '11px', color: '#64748b' }}>Excluded Server Dependencies:</span>
          <div style={{ display: 'flex', gap: '10px', marginTop: '6px', fontSize: '12px' }}>
            <span style={{ padding: '4px 8px', background: '#e2e8f0', borderRadius: '4px' }}>sequelize (SQL Driver)</span>
            <span style={{ padding: '4px 8px', background: '#e2e8f0', borderRadius: '4px' }}>pg (PostgreSQL)</span>
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
