import { ReferenceItem, Quiz, MiniProject } from '../types';

export const nextjsReferences: ReferenceItem[] = [
  {
    id: "next-ref-image",
    syntax: "<Image src={url} width={w} height={h} alt={desc} />",
    desc: {
      en: "Optimized Image component with built-in lazy loading and size scaling",
      km: "សមាសភាគរូបភាពដែលជួយសម្រួលទំហំស្វ័យប្រវត្ត និងផ្ទុកទិន្នន័យនៅពេលចាំបាច់"
    },
    example: '<Image src="/logo.png" width={150} height={150} alt="Brand Logo" />'
  },
  {
    id: "next-ref-link",
    syntax: "<Link href={path} prefetch={true}>Label</Link>",
    desc: {
      en: "Fast client-side navigation with background prefetching capability",
      km: "សមាសភាគផ្លាស់ប្តូរទំព័រលឿនរហ័ស ជាមួយការទាញយកទិន្នន័យទំព័រគោលដៅទុកជាមុន"
    },
    example: '<Link href="/dashboard" prefetch={true}>Go to Dashboard</Link>'
  },
  {
    id: "next-ref-router",
    syntax: "const router = useRouter(); router.push(path);",
    desc: {
      en: "Triggers programmatic client-side route transitions inside Client Components",
      km: "បញ្ជាឱ្យផ្លាស់ប្តូរទំព័រតាមរយៈកូដកម្មវិធី (សម្រាប់តែ Client Components)"
    },
    example: "const router = useRouter();\nconst handleExit = () => router.push('/');"
  },
  {
    id: "next-ref-cookies",
    syntax: "const cookieStore = await cookies(); cookieStore.get(name);",
    desc: {
      en: "Asynchronously reads or modifies cookies inside Server Components",
      km: "អាន ឬកែប្រែទិន្នន័យ Cookies នៅលើ Server (សម្រាប់តែ Server Components)"
    },
    example: "const store = await cookies();\nconst sessionToken = store.get('token');"
  },
  {
    id: "next-ref-actions",
    syntax: '"use server"; async function myAction(formData) { ... }',
    desc: {
      en: "Declares a secure Server Action to mutate database records from forms",
      km: "ប្រកាសមុខងារ Server Action សម្រាប់ដំណើរការទិន្នន័យលើ Server ពី Form"
    },
    example: '"use server";\nexport async function saveComment(formData: FormData) {\n  const comment = formData.get("comment");\n  await db.save(comment);\n}'
  }
];

export const nextjsQuizzes: Quiz[] = [
  {
    id: "next-q1",
    question: {
      en: "What does the abbreviation ISR stand for in the context of Next.js?",
      km: "តើអក្សរកាត់ ISR តំណាងឱ្យអ្វីនៅក្នុងប្រព័ន្ធ Next.js?"
    },
    options: {
      en: [
        "Incremental Static Regeneration: updating static pages in the background",
        "Instant Server Rendering: caching pages on local client device memory",
        "Integrated Session Router: managing secured authorization tokens",
        "Isolated State Recovery: backing up visual component parameters"
      ],
      km: [
        "Incremental Static Regeneration៖ ធ្វើបច្ចុប្បន្នភាពទំព័រឋិតិវន្តនៅខាងក្រោយ",
        "Instant Server Rendering៖ រក្សាទុកទំព័រនៅក្នុង RAM របស់ម៉ាស៊ីន Client",
        "Integrated Session Router៖ គ្រប់គ្រងគណនី និងសិទ្ធិចូលប្រើប្រាស់",
        "Isolated State Recovery៖ ស្តារស្ថានភាពរបស់សមាសភាគឡើងវិញ"
      ]
    },
    correctIndex: 0,
    explanation: {
      en: "ISR stands for Incremental Static Regeneration. It allows you to update static pages on Vercel's servers in the background without needing to rebuild your entire application.",
      km: "ISR មកពីពាក្យថា Incremental Static Regeneration។ វាអនុញ្ញាតឱ្យអ្នកធ្វើបច្ចុប្បន្នភាពទំព័រឋិតិវន្តនៅខាងក្រោយ ដោយមិនចាំបាច់កសាងកម្មវិធីទាំងមូលឡើងវិញឡើយ។"
    }
  },
  {
    id: "next-q2",
    question: {
      en: "Which directive converts a Server Component to a Client Component in the App Router?",
      km: "តើសេចក្តីណែនាំមួយណាដែលបំប្លែង Server Component ទៅជា Client Component នៅក្នុង App Router?"
    },
    options: {
      en: [
        "\"use client\" added at the very top of the file",
        "\"use browser\" configured inside next.config.js",
        "\"use state\" exported in layout templates",
        "\"use react\" imported from next/navigation"
      ],
      km: [
        "\"use client\" សរសេរនៅលើគេបង្អស់នៃឯកសារ",
        "\"use browser\" កំណត់នៅក្នុងឯកសារ next.config.js",
        "\"use state\" នាំចេញនៅក្នុង layout templates",
        "\"use react\" នាំចូលពី next/navigation"
      ]
    },
    correctIndex: 0,
    explanation: {
      en: "To declare a Client Component in the App Router, you must write the 'use client' directive at the very top of your file before any imports.",
      km: "ដើម្បីប្រកាសបង្កើត Client Component នៅក្នុង App Router អ្នកត្រូវសរសេរឃ្លា 'use client' នៅលើគេបង្អស់នៃឯកសារ មុនការនាំចូល imports ផ្សេងៗ។"
    }
  },
  {
    id: "next-q3",
    question: {
      en: "Which caching layer is responsible for deduplicating identical fetch requests within a single request lifecycle?",
      km: "តើកម្រិត Caching មួយណាដែលមានតួនាទីលុបចោលការហៅ Fetch ដដែលៗក្នុងពេល Render តែមួយ?"
    },
    options: {
      en: [
        "Request Memoization",
        "Data Cache",
        "Full Route Cache",
        "Client Router Cache"
      ],
      km: [
        "Request Memoization",
        "Data Cache",
        "Full Route Cache",
        "Client Router Cache"
      ]
    },
    correctIndex: 0,
    explanation: {
      en: "Request Memoization is a React rendering feature that automatically deduplicates fetch requests with identical inputs within a single server rendering tree lifecycle.",
      km: "Request Memoization គឺជាមុខងាររបស់ React ដែលជួយលុបចោលរាល់ការហៅ fetch ជាន់គ្នាក្នុងការដំណើរការ render ទំព័រតែមួយនៅលើ server។"
    }
  }
];

export const nextjsMiniProjects: MiniProject[] = [
  {
    id: "next-project-blog",
    title: {
      en: "Optimized Blog Layout",
      km: "ប្លង់គេហទំព័រប្លុកល្បឿនលឿន"
    },
    desc: {
      en: "Build an optimized blog homepage in Next.js using the custom Link component, optimized Image placeholders, and dynamic list bindings.",
      km: "សាងសង់ទំព័រដើមរបស់ប្លុកអភិវឌ្ឍន៍ល្បឿនលឿន ដោយប្រើប្រាស់សមាសភាគ Link, រូបភាព Image optimized និងការចងបញ្ជីអត្ថបទឌីណាមិក។"
    },
    starterCode: `// Step 1: Import the necessary custom optimization elements from Vercel
// import Link from 'next/link';
// import Image from 'next/image';

const POSTS = [
  { id: 1, title: "Modern Server Component Rendering", views: 4001, date: "July 12, 2026" },
  { id: 2, title: "Zero Layout Shift Fonts", views: 2314, date: "July 14, 2026" }
];

export default function BlogHome() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '600px', margin: 'auto' }}>
      {/* Step 2: Render a descriptive heading */}
      <h2>▲ Developer Blog Hub</h2>
      
      {/* Step 3: Complete the list mapping, wrapping each item in a fast <Link> wrapper */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
        {POSTS.map(post => (
          <div key={post.id} style={{ padding: '16px', border: '1px solid #cbd5e1', borderRadius: '8px', cursor: 'pointer' }}>
            {/* Wrap this title with <Link href={\`/blog/\${post.id}\`}> */}
            <h4 style={{ margin: '0 0 4px 0', color: '#4f46e5' }}>{post.title}</h4>
            <span style={{ fontSize: '12px', color: '#64748b' }}>{post.date} • {post.views} views</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
    solutionCode: `import Link from 'next/link';
import Image from 'next/image';

const POSTS = [
  { id: 1, title: "Modern Server Component Rendering", views: 4001, date: "July 12, 2026", slug: "modern-server-components" },
  { id: 2, title: "Zero Layout Shift Fonts", views: 2314, date: "July 14, 2026", slug: "zero-layout-shift" }
];

export default function BlogHome() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '30px', maxWidth: '600px', margin: 'auto', backgroundColor: '#fafafa', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <div style={{ position: 'relative', width: '50px', height: '50px', backgroundColor: '#e2e8f0', borderRadius: '50%', overflow: 'hidden' }}>
          <Image 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" 
            width={50} 
            height={50} 
            alt="Author Avatar" 
            style={{ borderRadius: '50%' }}
          />
        </div>
        <div>
          <h2 style={{ margin: 0, fontSize: '22px', color: '#0f172a' }}>▲ Developer Blog Hub</h2>
          <span style={{ fontSize: '13px', color: '#64748b' }}>Author: Seyha Dev</span>
        </div>
      </div>

      <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6' }}>
        Read optimized development tips and architecture reviews. Our layouts load in 0ms thanks to Vercel background prefetching!
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
        {POSTS.map(post => (
          <Link 
            key={post.id} 
            href={\`/blog/\${post.slug}\`} 
            prefetch={true}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#ffffff', transition: 'border-color 0.2s' }}>
              <h4 style={{ margin: '0 0 4px 0', color: '#4f46e5', fontSize: '16px' }}>{post.title}</h4>
              <span style={{ fontSize: '12px', color: '#64748b' }}>{post.date} • {post.views} views</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}`
  }
];
