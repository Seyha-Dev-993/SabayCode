import { ReferenceItem, Quiz, MiniProject } from '../types';

export const reactReferences: ReferenceItem[] = [
  {
    id: "ref-jsx-rules",
    syntax: "JSX Syntax Rules",
    desc: {
      en: "All tags must close. Class is className. For is htmlFor. Must have a single parent element or Fragment.",
      km: "រាល់ស្លាកកូដទាំងអស់ត្រូវតែបិទ។ Class ត្រូវប្ដូរជា className។ For ត្រូវប្ដូរជា htmlFor។ ត្រូវតែមាន Element រុំព័ទ្ធធំតែមួយ។"
    },
    example: "<>\n  <h1 className='title'>Title</h1>\n  <input type='text' />\n</>"
  },
  {
    id: "ref-usestate",
    syntax: "const [state, setState] = useState(initial);",
    desc: {
      en: "Declare state variables to track reactive values and trigger component updates dynamically.",
      km: "ប្រកាសអថេរ State ដើម្បីតាមដានតម្លៃប្រតិកម្ម និងដំណើរការ Render ឡើងវិញនូវសមាសភាគដោយស្វ័យប្រវត្ត។"
    },
    example: "const [count, setCount] = useState(0);\n// To update: setCount(count + 1);"
  },
  {
    id: "ref-useeffect",
    syntax: "useEffect(() => { ... }, [dependencies]);",
    desc: {
      en: "Handles API fetches, subscriptions, and localStorage caching. Empty dependencies [] run once on mount.",
      km: "គ្រប់គ្រងសកម្មភាពក្រៅប្រព័ន្ធ (API, Subscriptions, LocalStorage)។ ប្រសិនបើ [] ទទេ វានឹងដំណើរការតែម្ដងគត់ពេលបើកដំបូង។"
    },
    example: "useEffect(() => {\n  document.title = `Clicked ${count} times`;\n}, [count]);"
  },
  {
    id: "ref-usecontext",
    syntax: "const value = useContext(MyContext);",
    desc: {
      en: "Retrieves global values from context provider down the component tree, resolving prop-drilling.",
      km: "ទាញយកតម្លៃជាសកលពី Context Provider ទៅកាន់សមាសភាគកូនៗ ដោយមិនបាច់បញ្ជូន Props តាមគ្រប់សមាសភាគឡើយ។"
    },
    example: "const theme = useContext(ThemeContext);\n// Access values: theme.colors.primary"
  },
  {
    id: "ref-useref",
    syntax: "const elementRef = useRef(null);",
    desc: {
      en: "Targets actual HTML node references directly or persists helper state values without triggering re-renders.",
      km: "ភ្ជាប់ទៅកាន់ HTML element ផ្ទាល់ ឬរក្សាទុកតម្លៃជំនួយផ្សេងៗដោយមិនបាច់បង្កការ Render សមាសភាគជាថ្មី។"
    },
    example: "const inputRef = useRef(null);\n// Focus: inputRef.current.focus();"
  },
  {
    id: "ref-usereducer",
    syntax: "const [state, dispatch] = useReducer(reducer, initial);",
    desc: {
      en: "Manages complex state actions inside a central reducer handler function via dispatch events.",
      km: "គ្រប់គ្រងបម្រែបម្រួល State ស្មុគស្មាញជាច្រើននៅក្នុងអនុគមន៍ Reducer កណ្តាលតែមួយ តាមរយៈសកម្មភាព Dispatch។"
    },
    example: "dispatch({ type: 'ADD_TASK', payload: 'Buy milk' });"
  },
  {
    id: "ref-usecallback",
    syntax: "const memoizedCallback = useCallback(() => { ... }, [deps]);",
    desc: {
      en: "Memoizes/caches a function reference to prevent unnecessary re-renderings of downstream memo children.",
      km: "ចងចាំទុក (Memoize) យោងអនុគមន៍ ដើម្បីការពារកុំឱ្យសមាសភាគកូនធ្វើការ Render ឡើងវិញដោយឥតប្រយោជន៍។"
    },
    example: "const toggle = useCallback((id) => { doSomething(id); }, []);"
  },
  {
    id: "ref-usememo",
    syntax: "const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);",
    desc: {
      en: "Caches the output of a heavy calculation to prevent re-running computations on unrelated updates.",
      km: "ចងចាំទុក (Cache) លទ្ធផលចុងក្រោយនៃការគណនាស្មុគស្មាញ ដើម្បីកុំឱ្យវារត់គណនាជាថ្មីរាល់ពេល Render។"
    },
    example: "const stats = useMemo(() => calculateStats(tasks), [tasks]);"
  }
];

export const reactQuizzes: Quiz[] = [
  {
    id: "react-q1",
    question: {
      en: "What is the primary role of React's Virtual DOM?",
      km: "តើអ្វីទៅជាតួនាទីចម្បងរបស់ Virtual DOM នៅក្នុង React?"
    },
    options: {
      en: [
        "To compile modern ES6 code into older browser-compatible JS",
        "To update only the changed elements in the real DOM, making UI rendering highly efficient",
        "To serve static HTML files from server hosting backends",
        "To manage application stylesheets inside class components"
      ],
      km: [
        "ដើម្បីចងក្រងកូដ ES6 ទៅជាកូដ JavaScript ចាស់ៗដែលគាំទ្រលើគ្រប់ Browsers",
        "ដើម្បីធ្វើបច្ចុប្បន្នភាពតែធាតុណាដែលផ្លាស់ប្តូរនៅក្នុង DOM ពិតប្រាកដ ដែលជួយឱ្យល្បឿន UI លឿនបំផុត",
        "ដើម្បីបញ្ជូនឯកសារ HTML  جامد ពីម៉ាស៊ីនបម្រើ Server",
        "ដើម្បីគ្រប់គ្រងរចនាបថពណ៌ (Stylesheets) ខាងក្នុង Class components"
      ]
    },
    correctIndex: 1,
    explanation: {
      en: "React keeps a Virtual DOM tree in-memory. When states change, React computes the difference (diffing) and performs updates on only those specific DOM nodes that actually changed, rather than recreating the whole page.",
      km: "React រក្សាទុកគំរូ Virtual DOM នៅក្នុងមេម៉ូរី។ នៅពេលដែលទិន្នន័យផ្លាស់ប្តូរ React នឹងធ្វើការផ្ទៀងផ្ទាត់ស្វែងរកចំណុចខុសគ្នា ហើយធ្វើការកែប្រែតែផ្នែក DOM ណាដែលពាក់ព័ន្ធប៉ុណ្ណោះ ដែលធ្វើឱ្យមានប្រសិទ្ធភាពខ្ពស់។"
    }
  },
  {
    id: "react-q2",
    question: {
      en: "Where are you allowed to call React Hooks?",
      km: "តើអ្នកត្រូវបានអនុញ្ញាតឱ្យហៅប្រើប្រាស់ React Hooks នៅកន្លែងណាខ្លះ?"
    },
    options: {
      en: [
        "Inside any JavaScript file, function, loop, or conditional block",
        "Only at the top level of React function components or custom hooks",
        "Only inside legacy class component render() methods",
        "Inside inline HTML elements using standard event properties"
      ],
      km: [
        "នៅខាងក្នុងឯកសារ JavaScript ឬអនុគមន៍ រង្វិលជុំ និងលក្ខខណ្ឌណាផ្សេងទៀតក៏បាន",
        "តែនៅកម្រិតកំពូលបង្អស់ (Top level) នៃ React Function Components ឬ Custom Hooks ប៉ុណ្ណោះ",
        "តែនៅខាងក្នុងវិធីសាស្ត្រ render() របស់ Class component ពីមុនប៉ុណ្ណោះ",
        "នៅក្នុង inline HTML elements ដោយប្រើប្រាស់លក្ខណៈព្រឹត្តិការណ៍ធម្មតា"
      ]
    },
    correctIndex: 1,
    explanation: {
      en: "React Hooks have two strict rules: they must only be called at the very top level (never inside loops, nested if conditions, or helper functions) and they must only be called from functional components or custom hooks.",
      km: "React Hooks មានវិធានតឹងរ៉ឹងពីរ៖ ត្រូវតែហៅនៅកម្រិតកំពូលបង្អស់ (មិនអាចសរសេរក្នុង Loops, if conditions ឬ អនុគមន៍ត្រួតគ្នាឡើយ) ហើយត្រូវតែហៅចេញពី React functional component ឬ custom hook តែប៉ុណ្ណោះ។"
    }
  },
  {
    id: "react-q3",
    question: {
      en: "How does useEffect behave when passed an empty dependency array [] as its second argument?",
      km: "តើ useEffect មានសកម្មភាពដូចម្តេចនៅពេលដែលយើងបញ្ជូន Dependency array ទទេ [] ជាអាគុយម៉ង់ទីពីរ?"
    },
    options: {
      en: [
        "It crashes on runtime and displays compile-time warnings",
        "It runs on every single render cycle, mount, and update of any component state",
        "It runs only once when the component is initially mounted, mimicking componentDidMount",
        "It automatically saves all local component variables to the localStorage database"
      ],
      km: [
        "វានឹងគាំងនៅពេលដំណើរការ និងបង្ហាញការព្រមានផ្សេងៗ",
        "វានឹងដំណើរការនៅគ្រប់ Render cycle ទាំងអស់ ទាំងពេលបើកដំបូង និងពេលកែប្រែ State ណាមួយ",
        "វានឹងដំណើរការតែម្ដងគត់ នៅពេលសមាសភាគត្រូវបានបង្កើតឡើងដំបូង (Mount)",
        "វានឹងរក្សាទុកអថេរទាំងអស់ក្នុងសមាសភាគទៅកាន់ Local Storage ដោយស្វ័យប្រវត្ត"
      ]
    },
    correctIndex: 2,
    explanation: {
      en: "An empty dependency array tells React that the effect does not depend on any state variables. Therefore, it will execute exactly once when the component initially mounts, and never runs on subsequent state updates.",
      km: "Dependency array ទទេ [] ប្រាប់ React ថាផលប៉ះពាល់នេះមិនពឹងផ្អែកលើ State ណាមួយឡើយ។ ដូច្នេះ វានឹងដំណើរការតែម្ដងគត់នៅពេលសមាសភាគបើកដំបូង (Mount) ហើយមិនដំណើរការឡើងវិញឡើយទោះជា State ផ្សេងទៀតប្រែប្រួលក៏ដោយ។"
    }
  },
  {
    id: "react-q4",
    question: {
      en: "What is the key difference between Props and State in React?",
      km: "តើភាពខុសគ្នាជាសារវន្តរវាង Props និង State នៅក្នុង React គឺជាអ្វី?"
    },
    options: {
      en: [
        "Props are mutable and owned by the component; State is immutable and sent by parents",
        "Props are read-only variables passed down by parents; State represents local, mutable variables managed by the component itself",
        "Props are styled using CSS sheets; State is styled inline using style objects",
        "Props are only for class components; State is exclusively for modern function components"
      ],
      km: [
        "Props អាចកែប្រែបាន និងគ្រប់គ្រងដោយសមាសភាគផ្ទាល់ ឯ State មិនអាចកែប្រែបាន និងបញ្ជូនដោយសមាសភាគមេ",
        "Props គឺសម្រាប់តែអាន (Read-only) បញ្ជូនពីសមាសភាគមេចុះមក ឯ State តំណាងឱ្យទិន្នន័យផ្លាស់ប្តូរក្នុងតំបន់ដែលគ្រប់គ្រងដោយសមាសភាគខ្លួនឯង",
        "Props ត្រូវបានច្នៃម៉ូតដោយប្រើ CSS ឯ State ត្រូវប្រើ inline style objects",
        "Props គឺសម្រាប់តែ class components ប៉ុណ្ណោះ ឯ State គឺប្រើសម្រាប់តែ function components ទំនើប"
      ]
    },
    correctIndex: 1,
    explanation: {
      en: "Props (short for properties) are passed from parents down to child elements and are strictly read-only. State is local component storage that can be dynamically updated inside the component to represent interactive layouts.",
      km: "Props (មកពីពាក្យ properties) ត្រូវបានបញ្ជូនពីសមាសភាគមេទៅសមាសភាគកូន ហើយមានលក្ខណៈ Read-only (មិនអាចកែបានទេ)។ រីឯ State គឺជាទិន្នន័យផ្ទាល់ខ្លួនរបស់សមាសភាគ ដែលអាចកែប្រែបានតាមរយៈអនុគមន៍ updater ដើម្បីបង្ហាញ UI ឌីណាមិក។"
    }
  },
  {
    id: "react-q5",
    question: {
      en: "Why is a unique 'key' prop mandatory when rendering list elements using map()?",
      km: "ហេតុអ្វីបានជាការបញ្ជូន 'key' ពិសេសចាំបាច់ត្រូវតែមាននៅពេលបង្ហាញបញ្ជីទិន្នន័យ (Lists) ដោយប្រើ map()?"
    },
    options: {
      en: [
        "To compile JSX elements directly into responsive Tailwind CSS classes",
        "To allow child elements to inherit properties from Context Providers",
        "To help React identify, track, and update specific list items efficiently during DOM changes",
        "To format standard numbers into currency values automatically"
      ],
      km: [
        "ដើម្បីចងក្រងកូដ JSX ទៅជា Classes របស់ Tailwind CSS ដោយស្វ័យប្រវត្ត",
        "ដើម្បីអនុញ្ញាតឱ្យសមាសភាគកូនៗទទួលបានទិន្នន័យពី Context Providers",
        "ដើម្បីជួយឱ្យ React អាចកំណត់អត្តសញ្ញាណ តាមដាន និងធ្វើបច្ចុប្បន្នភាពធាតុជាក់លាក់ក្នុងបញ្ជីបានយ៉ាងលឿន",
        "ដើម្បីបំប្លែងតួលេខធម្មតាទៅជាតម្លៃលុយកាក់ដោយស្វ័យប្រវត្ត"
      ]
    },
    correctIndex: 2,
    explanation: {
      en: "Keys help React identify which items have changed, been added, or been removed. Providing a unique key is essential for efficient DOM synchronization, performance, and avoiding visual state misalignment bugs.",
      km: "Keys ជួយឱ្យ React ដឹងថាធាតុមួយណាត្រូវបានកែប្រែ បន្ថែម ឬលុបចោល។ ការផ្ដល់ Key ពិសេសជួយការពារបញ្ហា UI បង្ហាញខុសលំដាប់ និងជួយបង្កើនល្បឿនអាប់ដេត DOM។"
    }
  }
];

export const reactMiniProjects: MiniProject[] = [
  {
    id: "react-project-counter",
    title: { en: "Interactive Counter Workspace", km: "កម្មវិធីរាប់លេខអន្តរកម្ម Counter" },
    desc: {
      en: "Build a highly polished interactive counter component. Implement standard 'Increment', 'Decrement', and 'Reset' state modifications using the useState Hook.",
      km: "កសាងសមាសភាគរាប់លេខអន្តរកម្ម។ អនុវត្តមុខងារ 'បន្ថែម (+)', 'បន្ថយ (-)' និង 'កំណត់ឡើងវិញ (Reset)' ដោយប្រើប្រាស់ useState Hook និងរចនាស្ទីលឱ្យស្អាត។"
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function CounterApp() {
    // 1. Declare state here!
    
    return (
      <div style={{
        fontFamily: 'sans-serif',
        padding: '30px',
        textAlign: 'center',
        maxWidth: '300px',
        margin: 'auto',
        backgroundColor: '#fff',
        borderRadius: '12px',
        border: '1px solid #cbd5e1'
      }}>
        <h2>State Counter</h2>
        
        {/* Display count state here */}
        <div style={{ fontSize: '48px', fontWeight: 'bold', margin: '20px 0', color: '#4f46e5' }}>
          0
        </div>

        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <button style={{ padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>- Decrement</button>
          <button style={{ padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>Reset</button>
          <button style={{ padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>+ Increment</button>
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<CounterApp />);
</script>`,
    solutionCode: `<div id="root"></div>
<script type="text/babel">
  function CounterApp() {
    const [count, setCount] = React.useState(0);

    return (
      <div style={{
        fontFamily: 'sans-serif',
        padding: '30px',
        textAlign: 'center',
        maxWidth: '300px',
        margin: 'auto',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        border: '1px solid #e2e8f0'
      }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>State Counter</h2>
        
        <div style={{ fontSize: '48px', fontWeight: 'bold', margin: '20px 0', color: '#4f46e5' }}>
          {count}
        </div>

        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <button 
            onClick={() => setCount(count - 1)}
            style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            - Decrement
          </button>
          <button 
            onClick={() => setCount(0)}
            style={{ padding: '8px 16px', backgroundColor: '#64748b', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Reset
          </button>
          <button 
            onClick={() => setCount(count + 1)}
            style={{ padding: '8px 16px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            + Increment
          </button>
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<CounterApp />);
</script>`
  },
  {
    id: "react-project-todo",
    title: { en: "Dynamic To-Do Planner", km: "កម្មវិធីគ្រប់គ្រងគម្រោង To-Do Planner" },
    desc: {
      en: "Build a functioning list application. Students must declare state arrays, implement a controlled form to insert task items, and provide a toggle completion event.",
      km: "កសាងកម្មវិធីគ្រប់គ្រងបញ្ជីការងារ។ សិស្សត្រូវប្រកាស State ជា Array, អនុវត្ត Controlled Form ដើម្បីបន្ថែមធាតុថ្មី និងបង្កើតកម្មវិធីប្ដូរសភាពរួចរាល់ (Toggle completion)។"
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function PlannerApp() {
    // 1. Declare tasks array and input text states here!

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '350px', margin: 'auto' }}>
        <h3>My To-Do Planner</h3>
        
        {/* Write controlled form here */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
          <input type="text" placeholder="Add task..." style={{ flex: 1, padding: '8px' }} />
          <button style={{ padding: '8px' }}>Add</button>
        </div>

        {/* Render tasks list here */}
        <p style={{ color: '#94a3b8' }}>No tasks added yet.</p>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<PlannerApp />);
</script>`,
    solutionCode: `<div id="root"></div>
<script type="text/babel">
  function PlannerApp() {
    const [tasks, setTasks] = React.useState([
      { id: 1, text: "Attend React lecture", completed: false }
    ]);
    const [text, setText] = React.useState("");

    const handleAdd = (e) => {
      e.preventDefault();
      if (!text.trim()) return;
      setTasks([...tasks, { id: Date.now(), text: text, completed: false }]);
      setText("");
    };

    const toggleTask = (id) => {
      setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '350px', margin: 'auto', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#1e293b' }}>My To-Do Planner</h3>
        
        <form onSubmit={handleAdd} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
          <input 
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add task..." 
            style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }} 
          />
          <button type="submit" style={{ padding: '8px 12px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Add</button>
        </form>

        {tasks.length === 0 ? (
          <p style={{ color: '#94a3b8', textAlign: 'center' }}>No tasks added yet.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {tasks.map(t => (
              <li 
                key={t.id}
                onClick={() => toggleTask(t.id)}
                style={{
                  padding: '10px',
                  backgroundColor: t.completed ? '#ecfdf5' : '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  marginBottom: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  textDecoration: t.completed ? 'line-through' : 'none',
                  color: t.completed ? '#059669' : '#1e293b'
                }}
              >
                <span>{t.text}</span>
                <span>{t.completed ? "✓" : "⏳"}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<PlannerApp />);
</script>`
  }
];
