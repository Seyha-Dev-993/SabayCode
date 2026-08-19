import { FrontendLesson } from '../types/frontendClass';

export const REACT_LESSONS_PART4: FrontendLesson[] = [
  // MODULE 13 — React Router Basics
  {
    id: 'react-13-1',
    slug: 'setting-up-react-router-dom',
    moduleNumber: 13,
    lessonNumberInModule: 1,
    title: {
      en: '13.1 Setting Up `react-router-dom`',
      km: '១៣.១ ការដំឡើង និងរៀបចំ `react-router-dom`'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: '`react-router-dom` is the standard routing library for React web applications. It enables single-page navigation without reloading the browser page. Wrap your application root inside `<BrowserRouter>` to enable routing capabilities.',
      km: '`react-router-dom` គឺជា Standard Routing Library សម្រាប់ React Web Apps។ វាអនុញ្ញាតឱ្យផ្លាស់ប្តូរទំព័រ Single-Page ដោយមិនបាច់ Reload Browser ទំព័រឡើយ។ ត្រូវច្រក Root នៃ App ក្នុង `<BrowserRouter>` ដើម្បីបើក Routing។'
    },
    tutorial: {
      en: 'Installation & Setup:\n1. npm install react-router-dom\n2. Wrap app root:\n<BrowserRouter>\n  <App />\n</BrowserRouter>',
      km: 'ការដំឡើង និងរៀបចំ៖\n១. npm install react-router-dom\n២. ច្រក App Root:\n<BrowserRouter>\n  <App />\n</BrowserRouter>'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function RouterSetupDemo() {
  const [currentRoute, setCurrentRoute] = React.useState("Home");

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
        <h3 className="text-md font-bold text-white">React Router Shell</h3>
        <span className="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-mono text-[10px] rounded-lg border border-indigo-500/30">
          URL: /{currentRoute.toLowerCase()}
        </span>
      </div>

      <div className="flex gap-2">
        <button onClick={() => setCurrentRoute("Home")} className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg">Home</button>
        <button onClick={() => setCurrentRoute("About")} className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg">About</button>
        <button onClick={() => setCurrentRoute("Contact")} className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg">Contact</button>
      </div>

      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-emerald-400 font-mono">
        Active Page Component: &lt;{currentRoute}Page /&gt;
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RouterSetupDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Multi-View Single Page Applications',
        km: 'ការបង្កើត Single Page Multi-View Web Apps'
      },
      description: {
        en: 'Dashboards with `/dashboard`, `/analytics`, and `/settings` routes render different page views instantaneously using React Router.',
        km: 'Dashboards ដែលមាន `/dashboard`, `/analytics` និង `/settings` ផ្លាស់ប្តូរទំព័រភ្លាមៗដោយប្រើ React Router។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What top-level wrapper component from `react-router-dom` enables HTML5 history API navigation?',
        km: 'តើ Top-level wrapper component មួយណាពី `react-router-dom` ដែលបើកប្រព័ន្ធ History API navigation?'
      },
      solution: `<BrowserRouter>`
    },
    quizQuestions: [
      {
        id: 'r13-1-q1',
        question: {
          en: 'Which package provides routing components for React web applications?',
          km: 'តើ Package មួយណាដែលផ្តល់ Routing components សម្រាប់ React web applications?'
        },
        options: [
          { id: '1', text: { en: 'react-router-dom', km: 'react-router-dom' }, isCorrect: true },
          { id: '2', text: { en: 'react-dom-route', km: 'react-dom-route' }, isCorrect: false }
        ],
        explanation: {
          en: 'react-router-dom contains web-specific DOM routing bindings.',
          km: 'react-router-dom មាន Web-specific DOM routing bindings។'
        }
      }
    ]
  },
  {
    id: 'react-13-2',
    slug: 'defining-routes-link-navigation',
    moduleNumber: 13,
    lessonNumberInModule: 2,
    title: {
      en: '13.2 Defining Routes & `<Link>` Navigation',
      km: '១៣.២ ការកំណត់ Routes & ការប្រើប្រាស់ `<Link>` Navigation'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Define routes using `<Routes>` and `<Route path="..." element={<Component />} />`. For navigation between pages, use the `<Link to="...">` or `<NavLink to="...">` component instead of standard `<a>` tags to prevent full page reloads.',
      km: 'កំណត់ Routes ដោយប្រើ `<Routes>` និង `<Route path="..." element={<Component />} />`។ សម្រាប់ Navigation ចន្លោះទំព័រ ត្រូវប្រើប្រាស់ `<Link to="...">` ឬ `<NavLink to="...">` ជំនួសឱ្យ `<a>` tag ដើម្បីការពារមិនឱ្យ Reload ទំព័រ។'
    },
    tutorial: {
      en: 'Route Definition & Navigation:\n<Routes>\n  <Route path="/" element={<Home />} />\n  <Route path="/about" element={<About />} />\n</Routes>\n\n<Link to="/about">Go to About</Link>',
      km: 'ការប្រកាស Route & Navigation:\n<Routes>\n  <Route path="/" element={<Home />} />\n  <Route path="/about" element={<About />} />\n</Routes>\n\n<Link to="/about">ទៅកាន់ About</Link>'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function RouteLinkDemo() {
  const [activePath, setActivePath] = React.useState("/");

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <nav className="flex gap-4 border-b border-slate-800 pb-3 text-xs">
        <button 
          onClick={() => setActivePath("/")}
          className={\`font-bold \${activePath === "/" ? "text-sky-400 underline" : "text-slate-400"}\`}
        >
          &lt;Link to="/"&gt;Home&lt;/Link&gt;
        </button>
        <button 
          onClick={() => setActivePath("/products")}
          className={\`font-bold \${activePath === "/products" ? "text-sky-400 underline" : "text-slate-400"}\`}
        >
          &lt;Link to="/products"&gt;Products&lt;/Link&gt;
        </button>
      </nav>

      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs">
        {activePath === "/" && <div className="text-emerald-400">🏠 Rendered &lt;HomePage /&gt; component</div>}
        {activePath === "/products" && <div className="text-amber-300">📦 Rendered &lt;ProductsPage /&gt; component</div>}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RouteLinkDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Single Page Navigation',
        km: 'ការផ្លាស់ប្តូរទំព័រដោយមិនកើតមាន Page Reload'
      },
      description: {
        en: '`<Link to="/profile">` updates the browser URL bar instantly and renders the Profile view in milliseconds without refreshing scripts.',
        km: '`<Link to="/profile">` អាប់ដេត URL bar ភ្លាមៗ និង Render Profile view ដោយមិនចាំបាច់ Reload ឡើយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why should you use `<Link to="...">` instead of `<a href="...">` in React Router apps?',
        km: 'ហេតុអ្វីបានជាត្រូវប្រើ `<Link to="...">` ជំនួស `<a href="...">` ក្នុង React Router apps?'
      },
      solution: `Because '<a href>' triggers a full browser reload, whereas '<Link to>' captures navigation client-side without reloads.`
    },
    quizQuestions: [
      {
        id: 'r13-2-q1',
        question: {
          en: 'Which component is used in place of standard HTML `<a>` tags for client-side routing?',
          km: 'តើ Component មួយណាដែលត្រូវប្រើជំនួស HTML `<a>` tag សម្រាប់ Client-side routing?'
        },
        options: [
          { id: '1', text: { en: '<Link to="...">', km: '<Link to="...">' }, isCorrect: true },
          { id: '2', text: { en: '<Href path="...">', km: '<Href path="...">' }, isCorrect: false }
        ],
        explanation: {
          en: 'Link component intercepts navigation clicks to perform client-side routing.',
          km: 'Link component ចាប់យកការចុច Navigation ដើម្បីធ្វើ Client-side routing។'
        }
      }
    ]
  },
  {
    id: 'react-13-3',
    slug: 'route-parameters-nested-layouts',
    moduleNumber: 13,
    lessonNumberInModule: 3,
    title: {
      en: '13.3 Route Parameters (`useParams`) & Nested Layouts',
      km: '១៣.៣ Route Parameters (`useParams`) & Nested Layouts'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Dynamic routes use path parameters like `/users/:id`. The `useParams()` hook extracts these parameters inside child route components. Nested layouts use `<Outlet />` to render child routes inside shared parent shells (like navbars and sidebars).',
      km: 'Dynamic routes ប្រើប្រាស់ Path parameters ដូចជា `/users/:id`។ `useParams()` hook ទាញយក Parameters ទាំងនេះក្នុង Child route component។ Nested layouts ប្រើប្រាស់ `<Outlet />` ដើម្បីបង្ហាញ Child routes ក្នុង Parent shell រួម។'
    },
    tutorial: {
      en: 'Route Params Pattern:\n// Route definition:\n<Route path="/tasks/:id" element={<TaskDetail />} />\n\n// Component extraction:\nfunction TaskDetail() {\n  const { id } = useParams();\n  return <div>Task ID: {id}</div>;\n}',
      km: 'ទម្រង់ Route Params:\n// ការប្រកាស Route:\n<Route path="/tasks/:id" element={<TaskDetail />} />\n\n// ការទាញយកក្នុង Component:\nfunction TaskDetail() {\n  const { id } = useParams();\n  return <div>Task ID: {id}</div>;\n}'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function DynamicRouteDemo() {
  const [selectedId, setSelectedId] = React.useState("task-101");

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <div className="text-xs text-slate-400">Route Pattern: <code className="text-sky-400 font-bold">/tasks/:id</code></div>

      <div className="flex gap-2">
        <button onClick={() => setSelectedId("task-101")} className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg">Task #101</button>
        <button onClick={() => setSelectedId("task-202")} className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg">Task #202</button>
      </div>

      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
        <div className="text-[10px] text-indigo-400 font-mono font-bold">const { id } = useParams();</div>
        <div className="text-xs text-emerald-400 font-mono">
          Extracted Route Param: id = "{selectedId}"
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DynamicRouteDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'E-commerce Product Detail & Dashboard Layouts',
        km: 'ការបង្ហាញព័ត៌មានលម្អិតនៃទំនិញ'
      },
      description: {
        en: 'Product pages `/product/123` or user profile pages `/user/sokha` rely on `useParams()` to fetch product details matching the URL ID.',
        km: 'ទំព័រទំនិញ `/product/123` ប្រើប្រាស់ `useParams()` ដើម្បីទាញយកព័ត៌មានទំនិញដែលត្រូវនឹង ID ក្នុង URL។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which hook from `react-router-dom` accesses dynamic URL path parameters like `:id`?',
        km: 'តើ Hook មួយណាពី `react-router-dom` សម្រាប់ទាញយក Dynamic URL path parameters ដូចជា `:id`?'
      },
      solution: `useParams()`
    },
    quizQuestions: [
      {
        id: 'r13-3-q1',
        question: {
          en: 'Given a route `<Route path="/users/:username" element={<User />} />`, how does `<User />` read the username param?',
          km: 'សម្រាប់ route `<Route path="/users/:username" element={<User />} />` តើ `<User />` អានតម្លៃ username param តាមរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'const { username } = useParams();', km: 'const { username } = useParams();' }, isCorrect: true },
          { id: '2', text: { en: 'const username = props.param;', km: 'const username = props.param;' }, isCorrect: false }
        ],
        explanation: {
          en: 'useParams returns an object of key/value pairs of dynamic route parameters.',
          km: 'useParams ត្រឡប់ Object នៃ Key/Value pairs របស់ Dynamic route parameters។'
        }
      }
    ]
  },

  // MODULE 14 — Fetching Data in React
  {
    id: 'react-14-1',
    slug: 'fetching-data-inside-useeffect',
    moduleNumber: 14,
    lessonNumberInModule: 1,
    title: {
      en: '14.1 Fetching Data Inside `useEffect`',
      km: '១៤.១ ការ Fetch ទិន្នន័យក្នុង `useEffect`'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'To fetch data when a component mounts, trigger an async `fetch()` or `axios` call inside `useEffect` with an empty dependency array `[]`. Store the resolved JSON in state.',
      km: 'ដើម្បី Fetch ទិន្នន័យពេល Component Mount ដំបូង ត្រូវហៅ Async `fetch()` ក្នុង `useEffect` ជាមួយ Dependency array ទទេ `[]`។ រក្សាទុក JSON ដែលបានទទួលក្នុង State។'
    },
    tutorial: {
      en: 'Data Fetching Pattern:\nuseEffect(() => {\n  async function getData() {\n    const res = await fetch("https://api.example.com/items");\n    const data = await res.json();\n    setItems(data);\n  }\n  getData();\n}, []);',
      km: 'ទម្រង់ Fetch ទិន្នន័យ:\nuseEffect(() => {\n  async function getData() {\n    const res = await fetch("https://api.example.com/items");\n    const data = await res.json();\n    setItems(data);\n  }\n  getData();\n}, []);'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function FetchDataDemo() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    // Simulated async API fetch
    const timer = setTimeout(() => {
      setUsers([
        { id: 1, name: "Sokha Heng", role: "Lead Frontend Developer" },
        { id: 2, name: "Bopha Keo", role: "UI/UX Designer" }
      ]);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h3 className="text-md font-bold text-white">Async Data Fetching inside useEffect</h3>
      <div className="space-y-2">
        {users.map(u => (
          <div key={u.id} className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center text-xs">
            <span className="font-bold text-sky-400">{u.name}</span>
            <span className="text-slate-400 font-mono">{u.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FetchDataDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'REST API Integration',
        km: 'ការភ្ជាប់ទំនាក់ទំនងជាមួយ REST API'
      },
      description: {
        en: 'Connecting React apps to backend Express or Firebase REST APIs relies on data fetching inside `useEffect`.',
        km: 'ការភ្ជាប់ React App ទៅកាន់ Express ឬ Firebase REST APIs អាស្រ័យលើការ Fetch ទិន្នន័យក្នុង `useEffect`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why should the callback passed directly to `useEffect` NOT be marked as `async` (e.g. `useEffect(async () => {})`)?',
        km: 'ហេតុអ្វីមិនគួរដាក់ `async` លើ `useEffect` callback ផ្ទាល់?'
      },
      solution: `Because an async function returns a Promise, but useEffect expects either nothing or a cleanup function.`
    },
    quizQuestions: [
      {
        id: 'r14-1-q1',
        question: {
          en: 'How should an async data fetching function be called inside `useEffect`?',
          km: 'តើគួរហៅ Async data fetching function ក្នុង `useEffect` តាមរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'Define an inner async function and invoke it inside the effect', km: 'បង្កើត Inner async function រួចហៅវាក្នុង Effect' }, isCorrect: true },
          { id: '2', text: { en: 'Make the useEffect callback itself async directly', km: 'ដាក់ async លើ useEffect callback ផ្ទាល់' }, isCorrect: false }
        ],
        explanation: {
          en: 'The useEffect callback must return a cleanup function or void, not a Promise.',
          km: 'useEffect callback ត្រូវ Return cleanup function ឬ void មិនមែន Promise ឡើយ។'
        }
      }
    ]
  },
  {
    id: 'react-14-2',
    slug: 'handling-loading-error-states',
    moduleNumber: 14,
    lessonNumberInModule: 2,
    title: {
      en: '14.2 Handling Loading & Error States',
      km: '១៤.២ ការគ្រប់គ្រង Loading & Error States'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Professional data fetching requires managing three core states: 1) `data` (fetched payload), 2) `isLoading` (boolean spinner trigger), and 3) `error` (error string message if request fails).',
      km: 'ការ Fetch ទិន្នន័យស្តង់ដារតម្រូវឱ្យគ្រប់គ្រង State ចំនួន៣៖ ១) `data` (ទិន្នន័យ), ២) `isLoading` (បង្ហាញ Spinner), និង ៣) `error` (សារ Error ពេល Fetch បរាជ័យ)។'
    },
    tutorial: {
      en: 'Triple State Pattern:\nconst [data, setData] = useState(null);\nconst [isLoading, setIsLoading] = useState(true);\nconst [error, setError] = useState(null);\n\nif (isLoading) return <Spinner />;\nif (error) return <ErrorMessage message={error} />;',
      km: 'ទម្រង់ Triple State:\nconst [data, setData] = useState(null);\nconst [isLoading, setIsLoading] = useState(true);\nconst [error, setError] = useState(null);\n\nif (isLoading) return <Spinner />;\nif (error) return <ErrorMessage message={error} />;'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function LoadingErrorDemo() {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const loadData = (shouldFail = false) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    setTimeout(() => {
      if (shouldFail) {
        setError("Network response error 500: Server unavailable");
        setIsLoading(false);
      } else {
        setData("Fetched payload: 12 active users loaded.");
        setIsLoading(false);
      }
    }, 800);
  };

  React.useEffect(() => {
    loadData(false);
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <div className="flex gap-2">
        <button onClick={() => loadData(false)} className="px-3 py-1 bg-emerald-600 text-white text-xs rounded-lg">Trigger Success</button>
        <button onClick={() => loadData(true)} className="px-3 py-1 bg-rose-600 text-white text-xs rounded-lg">Trigger Error</button>
      </div>

      {isLoading && (
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-center text-xs text-sky-400 animate-pulse font-mono">
          ⏳ Loading data from API...
        </div>
      )}

      {error && (
        <div className="p-4 bg-rose-500/20 border border-rose-500/30 rounded-xl text-xs text-rose-400 font-mono">
          ⚠️ {error}
        </div>
      )}

      {data && (
        <div className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-xs text-emerald-400 font-mono">
          ✓ {data}
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<LoadingErrorDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Skeleton Loaders and Retry Banners',
        km: ' Skeleton Loaders & Retry Banners'
      },
      description: {
        en: 'Production dashboards display skeleton shimmer loaders during `isLoading` and present a "Try Again" button when `error` occurs.',
        km: 'Dashboards បង្ហាញ Skeleton shimmer loaders ពេល `isLoading` និងប៊ូតុង "Try Again" ពេលមាន `error`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What three state variables are standard when performing async network requests in React?',
        km: 'តើ State Variables ៣ ណាខ្លះដែលជាស្តង់ដារពេលធ្វើ Network request ក្នុង React?'
      },
      solution: `data, isLoading, and error`
    },
    quizQuestions: [
      {
        id: 'r14-2-q1',
        question: {
          en: 'Why is managing `isLoading` state crucial for User Experience during data fetching?',
          km: 'ហេតុអ្វីការគ្រប់គ្រង `isLoading` state មានសារៈសំខាន់សម្រាប់ UX ពេល Fetch ទិន្នន័យ?'
        },
        options: [
          { id: '1', text: { en: 'It informs users that background network requests are in progress', km: 'វាប្រាប់ User ថាទិន្នន័យកំពុងត្រូវបានទាញយកពី Network' }, isCorrect: true },
          { id: '2', text: { en: 'It accelerates internet speed', km: 'វាបង្កើនល្បឿន អ៊ីនធឺណិត' }, isCorrect: false }
        ],
        explanation: {
          en: 'Loading indicators provide visual feedback preventing users from assuming an app frozen.',
          km: 'Loading indicators ផ្តល់ព័ត៌មានដល់ User ការពារកុំឱ្យគិតថា App គាំង។'
        }
      }
    ]
  },
  {
    id: 'react-14-3',
    slug: 'data-fetching-libraries-tanstack-query-swr',
    moduleNumber: 14,
    lessonNumberInModule: 3,
    title: {
      en: '14.3 Overview of Data-Fetching Libraries (TanStack Query / SWR)',
      km: '១៤.៣ ទិដ្ឋភាពទូទៅនៃ Data-Fetching Libraries (TanStack Query / SWR)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'In enterprise production apps, libraries like TanStack Query (React Query) and SWR replace raw `useEffect` data fetching. They automatically handle background caching, deduplication, automatic refetching on window focus, and optimism mutations.',
      km: 'ក្នុង Production Apps ធំៗ Libraries ដូចជា TanStack Query (React Query) និង SWR ត្រូវប្រើយ៉ាងទូលំទូលាយជំនួស `useEffect` ធម្មតា។ វាជួយធ្វើ Caching ស្វ័យប្រវត្តិ, Refetch ពេលសកម្ម, និងគ្រប់គ្រង Mutations។'
    },
    tutorial: {
      en: 'TanStack Query Example:\nimport { useQuery } from "@tanstack/react-query";\n\nfunction UserList() {\n  const { data, isLoading, error } = useQuery({\n    queryKey: ["users"],\n    queryFn: () => fetch("/api/users").then(r => r.json())\n  });\n}',
      km: 'ឧទាហរណ៍ TanStack Query:\nimport { useQuery } from "@tanstack/react-query";\n\nfunction UserList() {\n  const { data, isLoading, error } = useQuery({\n    queryKey: ["users"],\n    queryFn: () => fetch("/api/users").then(r => r.json())\n  });\n}'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function DataLibraryBenefits() {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h3 className="text-md font-bold text-white">Why Production Apps Use TanStack Query</h3>
      <div className="space-y-2 text-xs">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center gap-2 text-emerald-400">
          <span>✓ Automatic Caching & Background Refetching</span>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center gap-2 text-emerald-400">
          <span>✓ Window Focus Refetching & Stale Time</span>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center gap-2 text-emerald-400">
          <span>✓ Simplified Mutations & Cache Invalidation</span>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DataLibraryBenefits />);`
    },
    realWorldExample: {
      title: {
        en: 'Enterprise Data Synchronization',
        km: 'ការធ្វើ Sync ទិន្នន័យក្នុង Enterprise Apps'
      },
      description: {
        en: 'Apps like GitHub and Vercel use TanStack Query so that switching browser tabs instantly refreshes stale dashboard metrics seamlessly.',
        km: 'Apps ធំៗដូចជា GitHub និង Vercel ប្រើប្រាស់ TanStack Query ដើម្បី Sync ទិន្នន័យស្វ័យប្រវត្តិ ពេល User បើក Tab ឡើងវិញ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Name two popular data-fetching and caching libraries used in production React applications.',
        km: 'ប្រាប់ឈ្មោះ ២ នៃ Data-fetching and caching libraries ដ៏ពេញនិយមក្នុង React។'
      },
      solution: `TanStack Query (React Query) and SWR`
    },
    quizQuestions: [
      {
        id: 'r14-3-q1',
        question: {
          en: 'What advantage does TanStack Query provide over manual `useEffect` data fetching?',
          km: 'តើ TanStack Query ផ្តល់ផលប្រយោជន៍អ្វីខ្លះលើសពី `useEffect` ធម្មតា?'
        },
        options: [
          { id: '1', text: { en: 'Automatic response caching, deduplication, and window focus refetching', km: 'ការធ្វើ Response Caching, Deduplication និង Refetch ស្វ័យប្រវត្តិ' }, isCorrect: true },
          { id: '2', text: { en: 'It converts React components into HTML files', km: 'វា បំប្លែង React components ទៅជា HTML files' }, isCorrect: false }
        ],
        explanation: {
          en: 'TanStack Query eliminates repetitive boilerplates for caching and syncing API data.',
          km: 'TanStack Query កាត់បន្ថយកូដដដែលៗ សម្រាប់ធ្វើ Caching និង Syncing API ទិន្នន័យ។'
        }
      }
    ]
  }
];
