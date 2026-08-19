import { FrontendLesson } from '../types/frontendClass';

export const REACT_LESSONS_PART3: FrontendLesson[] = [
  // MODULE 9 — useEffect & Side Effects
  {
    id: 'react-9-1',
    slug: 'side-effects-and-useeffect-basics',
    moduleNumber: 9,
    lessonNumberInModule: 1,
    title: {
      en: '9.1 What Side Effects Mean & When `useEffect` Runs',
      km: '៩.១ អ្វីទៅជា Side Effects & ពេលណា `useEffect` ដំណើរការ'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'In React, rendering should be a pure calculation of UI. Any operation that interacts with the outside world—such as fetching data, modifying document title, setting up subscriptions, or DOM timers—is called a "Side Effect". The `useEffect` hook lets you run side effects after React renders.',
      km: 'ក្នុង React, ការ Render គួរបង្កើតតែ UI ប៉ុណ្ណោះ។ ប្រតិបត្តិការណាដែលទាក់ទងនឹងពិភពខាងក្រៅ—ដូចជា ទាញយកទិន្នន័យពី API, កែប្រែ document.title, ឬបង្កើត Timers—ត្រូវបានហៅថា "Side Effect"។ `useEffect` hook អនុញ្ញាតឱ្យយើង Run Side effects ក្រោយពេល React Render រួច។'
    },
    tutorial: {
      en: 'Basic Syntax:\nimport { useEffect } from "react";\n\nuseEffect(() => {\n  document.title = `Count: ${count}`;\n});',
      km: 'ទម្រង់ Syntax មូលដ្ឋាន:\nimport { useEffect } from "react";\n\nuseEffect(() => {\n  document.title = `Count: ${count}`;\n});'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function DocumentTitleEffect() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // Side effect: updating document title
    console.log("Effect executed! Count is:", count);
  }, [count]);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 text-center">
      <h3 className="text-md font-bold text-white">useEffect Document Title Sync</h3>
      <div className="text-2xl font-black text-sky-400">{count}</div>
      <button 
        onClick={() => setCount(prev => prev + 1)}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition"
      >
        Increment & Run Effect
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DocumentTitleEffect />);`
    },
    realWorldExample: {
      title: {
        en: 'External System Synchronization',
        km: 'ការធ្វើ Sync ទិន្នន័យជាមួយប្រព័ន្ធខាងក្រៅ'
      },
      description: {
        en: 'Logging analytics events, synchronizing browser tab titles, and initializing third-party chart widgets require `useEffect`.',
        km: 'ការផ្ញើ Analytics event, Sync browser tab title ឬចាត់ចែង Chart widgets ត្រូវការ `useEffect`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'When does `useEffect` callback function execute relative to browser layout paint?',
        km: 'តើ `useEffect` callback ដំណើរការនៅពេលណាធៀបនឹងការប្រកាសទំព័រលើ Browser?'
      },
      solution: `It executes asynchronously AFTER the DOM render paint is committed to screen.`
    },
    quizQuestions: [
      {
        id: 'r9-1-q1',
        question: {
          en: 'Which of the following operations is considered a React "Side Effect"?',
          km: 'តើប្រតិបត្តិការមួយណាដែលត្រូវបានចាត់ទុកជា "Side Effect" ក្នុង React?'
        },
        options: [
          { id: '1', text: { en: 'Fetching data from an external REST API', km: 'ទាញយកទិន្នន័យពី External REST API' }, isCorrect: true },
          { id: '2', text: { en: 'Calculating 2 + 2 inside JSX', km: 'ការគណនា 2 + 2 ក្នុង JSX' }, isCorrect: false }
        ],
        explanation: {
          en: 'Data fetching connects to external network resources, making it a side effect.',
          km: 'ការ ទាញយកទិន្នន័យពី Network ខាងក្រៅគឺជា Side effect។'
        }
      }
    ]
  },
  {
    id: 'react-9-2',
    slug: 'dependency-array-controlling-effect-execution',
    moduleNumber: 9,
    lessonNumberInModule: 2,
    title: {
      en: '9.2 The Dependency Array (Controlling When Effects Run)',
      km: '៩.២ Dependency Array (ការគ្រប់គ្រងពេលណា Effect Run)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The second argument to `useEffect` is the dependency array. 1) No array: Runs on EVERY render. 2) Empty array `[]`: Runs ONLY ONCE on initial mount. 3) Dependency array `[a, b]`: Runs on mount AND whenever `a` or `b` state/props change.',
      km: 'Argument ទីពីររបស់ `useEffect` គឺ Dependency Array។ ១) គ្មាន Array: Run រាល់ពេល Render។ ២) Array ទទេ `[]`: Run តែម្តងគត់ពេល Component Mount ដំបូង។ ៣) Array មានចន្លោះ `[a, b]`: Run ពេល Mount និងពេល `a` ឬ `b` ប្រែប្រួល។'
    },
    tutorial: {
      en: 'Dependency Modes:\n- useEffect(() => {})       // Every render!\n- useEffect(() => {}, [])   // On mount only!\n- useEffect(() => {}, [id]) // On mount + when id changes!',
      km: 'របៀបប្រើ Dependency:\n- useEffect(() => {})       // Run រាល់ Render!\n- useEffect(() => {}, [])   // Run តែពេល Mount ដំបូង!\n- useEffect(() => {}, [id]) // Run ពេល Mount + ពេល id ផ្លាស់ប្តូរ!'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function DependencyDemo() {
  const [userId, setUserId] = React.useState(1);
  const [log, setLog] = React.useState([]);

  React.useEffect(() => {
    setLog(prev => [...prev, \`Fetched user data for ID: \${userId}\`]);
  }, [userId]); // Only triggers when userId changes!

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h3 className="text-md font-bold text-white">Dependency Array Tracker</h3>
      <div className="flex gap-2">
        <button onClick={() => setUserId(1)} className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg">User #1</button>
        <button onClick={() => setUserId(2)} className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg">User #2</button>
        <button onClick={() => setUserId(3)} className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg">User #3</button>
      </div>
      <div className="p-3 bg-slate-950 rounded-xl font-mono text-xs text-emerald-400 space-y-1">
        {log.map((entry, idx) => <div key={idx}>› {entry}</div>)}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DependencyDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Data Refetching on Parameter Change',
        km: 'ការ Fetch ទិន្នន័យឡើងវិញពេល Parameter ប្រែប្រួល'
      },
      description: {
        en: 'Search filtering or pagination components refetch API data inside `useEffect` whenever `searchQuery` or `page` dependencies change.',
        km: 'ការធ្វើ Filter ឬ Pagination Fetch ទិន្នន័យពី API ឡើងវិញពេល `searchQuery` ឬ `page` ប្រែប្រួល។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What happens if you omit the dependency array completely from `useEffect(() => {})`?',
        km: 'តើមានអ្វីកើតឡើងបើសិនជាចោល Dependency array `useEffect(() => {})` ទាំងស្រុង?'
      },
      solution: `The effect function executes after EVERY single component render.`
    },
    quizQuestions: [
      {
        id: 'r9-2-q1',
        question: {
          en: 'How do you configure `useEffect` to execute ONLY ONCE when the component first mounts?',
          km: 'តើធ្វើដូចម្តេចដើម្បីឲ្យ `useEffect` Run តែម្តងគត់ពេល Component Mount ដំបូង?'
        },
        options: [
          { id: '1', text: { en: 'Pass an empty array [] as the second argument', km: 'បញ្ជូន Array ទទេ [] ជា Argument ទីពីរ' }, isCorrect: true },
          { id: '2', text: { en: 'Omit the second argument entirely', km: 'មិនបាច់ដាក់ Argument ទីពីរ' }, isCorrect: false }
        ],
        explanation: {
          en: 'An empty dependency array [] tells React the effect has no reactive dependencies, running only on mount.',
          km: 'Array ទទេ [] ប្រាប់ React ថាគ្មាន Reactive dependencies ទេ ដូច្នេះ Run តែពេល Mount ប៉ុណ្ណោះ។'
        }
      }
    ]
  },
  {
    id: 'react-9-3',
    slug: 'cleanup-functions-timers-subscriptions',
    moduleNumber: 9,
    lessonNumberInModule: 3,
    title: {
      en: '9.3 Cleanup Functions (Clearing Timers & Subscriptions)',
      km: '៩.៣ Cleanup Functions (ការសម្អាត Timers & Subscriptions)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'When a side effect creates long-running subscriptions, event listeners, or intervals, returning a cleanup function from `useEffect` prevents memory leaks. React calls the cleanup function when the component unmounts or before re-running the effect.',
      km: 'នៅពេល Side effect បង្កើត Event listeners, WebSockets ឬ Interval timers ការ Return Cleanup function ពី `useEffect` ជួយការពារ Memory Leak។ React នឹងហៅ Cleanup function ពេល Component unmount ឬមុនពេល Run effect ឡើងវិញ។'
    },
    tutorial: {
      en: 'Cleanup Pattern:\nuseEffect(() => {\n  const timer = setInterval(() => console.log("Tick"), 1000);\n  return () => clearInterval(timer); // 🧹 Cleanup on unmount!\n}, []);',
      km: 'ទម្រង់ Cleanup:\nuseEffect(() => {\n  const timer = setInterval(() => console.log("Tick"), 1000);\n  return () => clearInterval(timer); // 🧹 សម្អាតពេល Unmount!\n}, []);'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function TimerWidget() {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function returned from effect
    return () => {
      clearInterval(intervalId);
      console.log("Timer cleaned up safely!");
    };
  }, []);

  return (
    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-center font-mono">
      <div className="text-xs text-slate-400">Live Active Timer</div>
      <div className="text-2xl font-bold text-emerald-400">{seconds}s</div>
    </div>
  );
}

function TimerApp() {
  const [showTimer, setShowTimer] = React.useState(true);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <button 
        onClick={() => setShowTimer(!showTimer)}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-xs text-white font-bold rounded-xl"
      >
        {showTimer ? "Unmount Timer (Trigger Cleanup)" : "Mount Timer"}
      </button>

      {showTimer && <TimerWidget />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TimerApp />);`
    },
    realWorldExample: {
      title: {
        en: 'WebSocket & Resize Event Cleanup',
        km: 'ការសម្អាត WebSocket & Event Listeners'
      },
      description: {
        en: 'Real-time chat subscriptions and `window.addEventListener("resize", handler)` MUST unsubscribe inside effect cleanup functions to prevent memory leaks.',
        km: 'ការភ្ជាប់ WebSocket និង `window.addEventListener("resize")` ត្រូវតែ Unsubscribe ក្នុង Cleanup function ដើម្បីការពារមិនឱ្យស្ទះ Memory។'
      }
    },
    practiceExercise: {
      question: {
        en: 'How do you specify a cleanup function inside `useEffect`?',
        km: 'តើត្រូវប្រកាស Cleanup function ក្នុង `useEffect` ដោយរបៀបណា?'
      },
      solution: `By returning a function from the useEffect callback function.`
    },
    quizQuestions: [
      {
        id: 'r9-3-q1',
        question: {
          en: 'When does React invoke the cleanup function returned by `useEffect`?',
          km: 'តើ React ហៅ Cleanup function ដែល return ពី `useEffect` នៅពេលណា?'
        },
        options: [
          { id: '1', text: { en: 'Before component unmounts or before re-executing the effect on state change', km: 'មុនពេល Component Unmount ឬមុនពេល Run Effect ឡើងវិញ' }, isCorrect: true },
          { id: '2', text: { en: 'Immediately when the component first renders', km: 'ភ្លាមៗពេល Component Render ដំបូង' }, isCorrect: false }
        ],
        explanation: {
          en: 'Cleanup functions run during component unmounting or before the effect runs again.',
          km: 'Cleanup function ដំណើរការពេល Unmount ឬមុនពេល Effect Run ឡើងវិញ។'
        }
      }
    ]
  },

  // MODULE 10 — Lifting State Up & Component Communication
  {
    id: 'react-10-1',
    slug: 'sharing-state-between-sibling-components',
    moduleNumber: 10,
    lessonNumberInModule: 1,
    title: {
      en: '10.1 Sharing State Between Sibling Components',
      km: '១០.១ ការចែករំលែក State ចន្លោះ Sibling Components'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'When two sibling components need access to the same state, move the state up to their closest common parent component. The parent passes the state down as props to both siblings.',
      km: 'នៅពេលដែល Sibling Components ពីរត្រូវការប្រើប្រាស់ State ដូចគ្នា ត្រូវលើក State នោះឡើងទៅកាន់ Parent Component រួមរបស់វា។ Parent នឹងបាញ់ State ចុះក្រោមតាមរយៈ Props ទៅកាន់ Siblings ទាំងពីរ។'
    },
    tutorial: {
      en: 'Lifting State Flow:\nParent (holds state) ──► Passes prop to Sibling A\n                     └──► Passes prop to Sibling B',
      km: 'លំហូរ Lifting State:\nParent (កាន់កាប់ state) ──► បាញ់ prop ទៅ Sibling A\n                     └──► បាញ់ prop ទៅ Sibling B'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function InputSibling({ search, onSearchChange }) {
  return (
    <input 
      type="text" 
      value={search} 
      onChange={e => onSearchChange(e.target.value)}
      placeholder="Type filter term in Sibling A..."
      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 text-xs text-white rounded-xl"
    />
  );
}

function PreviewSibling({ search }) {
  return (
    <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-sky-400">
      Sibling B Preview: "{search || 'Type in Sibling A above...'}"
    </div>
  );
}

function ParentContainer() {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h3 className="text-md font-bold text-white">Lifting State Up Pattern</h3>
      <InputSibling search={searchTerm} onSearchChange={setSearchTerm} />
      <PreviewSibling search={searchTerm} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ParentContainer />);`
    },
    realWorldExample: {
      title: {
        en: 'Search Bar and Filtered List Integration',
        km: 'ការផ្សារភ្ជាប់ Search Bar និង Filtered List'
      },
      description: {
        en: 'A top search bar component and a product list component share search state held by their parent page layout.',
        km: 'Search bar component ខាងលើ និង Product list component ខាងក្រោម ចែករំលែក Search state ដែលកាន់កាប់ដោយ Parent page។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Where should state be placed when two sibling components both need to display or update it?',
        km: 'តើគួរប្រកាស State នៅឯណា បើសិនជា Sibling Components ពីរត្រូវការប្រើ ឬអាប់ដេតវា?'
      },
      solution: `In their closest common parent component.`
    },
    quizQuestions: [
      {
        id: 'r10-1-q1',
        question: {
          en: 'What is "Lifting State Up" in React?',
          km: 'តើអ្វីទៅជា "Lifting State Up" ក្នុង React?'
        },
        options: [
          { id: '1', text: { en: 'Moving shared state to the closest common parent component', km: 'ការផ្លាស់ទី Shared State ទៅកាន់ Closest common parent component' }, isCorrect: true },
          { id: '2', text: { en: 'Storing state in global browser cookies', km: 'ការ រក្សាទុក State ក្នុង Browser cookies' }, isCorrect: false }
        ],
        explanation: {
          en: 'Lifting state up shares state between siblings via their parent.',
          km: 'Lifting state up ចែករំលែក state ចន្លោះ siblings តាមរយៈ Parent។'
        }
      }
    ]
  },
  {
    id: 'react-10-2',
    slug: 'passing-callback-functions-down-as-props',
    moduleNumber: 10,
    lessonNumberInModule: 2,
    title: {
      en: '10.2 Passing Callback Functions Down as Props',
      km: '១០.២ ការបញ្ជូន Callback Functions ទៅកាន់ Child Components'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Child components communicate back up to parent components by invoking callback functions passed down via props. This allows children to request state changes without modifying parent state directly.',
      km: 'Child Component អាចផ្ញើសារ ឬប្រាប់ទៅកាន់ Parent Component វិញដោយហៅ Callback Function ដែលបានបញ្ជូនមកតាម Props។ វាអនុញ្ញាតឱ្យ Child ស្នើសុំអាប់ដេត State ដោយមិនចាំបាច់ប៉ះពាល់ Parent State ផ្ទាល់។'
    },
    tutorial: {
      en: 'Child Callback Pattern:\n// Parent defines handler and passes it:\n<ChildButton onDelete={handleDeleteUser} />\n\n// Child triggers handler:\n<button onClick={() => props.onDelete(id)}>Delete</button>',
      km: 'ទម្រង់ Child Callback:\n// Parent បង្កើត handler រួចផ្ញើតាម prop:\n<ChildButton onDelete={handleDeleteUser} />\n\n// Child ចុចប្រកាស handler:\n<button onClick={() => props.onDelete(id)}>Delete</button>'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function ActionButton({ label, onClickHandler }) {
  return (
    <button 
      onClick={onClickHandler}
      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition"
    >
      {label}
    </button>
  );
}

function CallbackParentDemo() {
  const [log, setLog] = React.useState("Waiting for child button action...");

  const handleChildClick = (buttonName) => {
    setLog(\`Parent notified: \${buttonName} clicked!\`);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <div className="p-3 bg-slate-950 rounded-xl text-xs font-mono text-emerald-400">
        {log}
      </div>
      <div className="flex gap-2">
        <ActionButton label="Save Draft" onClickHandler={() => handleChildClick("Save Draft")} />
        <ActionButton label="Publish Post" onClickHandler={() => handleChildClick("Publish Post")} />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CallbackParentDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Form Item Removal Callbacks',
        km: 'ការប្រើ Callbacks សម្រាប់លុបទិន្នន័យ'
      },
      description: {
        en: 'A list item component `<TaskItem onDelete={removeTask} />` calls `onDelete(task.id)` when clicked, signaling the parent list to filter out that task.',
        km: '`<TaskItem onDelete={removeTask} />` ហៅ `onDelete(task.id)` ពេលចុច លុប ដើម្បីប្រាប់ Parent List ឱ្យ Filter លុប Task នោះ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'How can a child component update a state variable owned by its parent component?',
        km: 'តើ Child Component អាចអាប់ដេត State របស់ Parent Component ដោយរបៀបណា?'
      },
      solution: `By invoking a state setter callback function passed down as a prop from the parent.`
    },
    quizQuestions: [
      {
        id: 'r10-2-q1',
        question: {
          en: 'How do child components pass events or data back up to parent components in React?',
          km: 'តើ Child Component បញ្ជូន Event ឬ Data ត្រឡប់ទៅ Parent វិញដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'By invoking a callback function passed down as a prop', km: 'ដោយហៅ Callback Function ដែលបានផ្ញើមកតាម Prop' }, isCorrect: true },
          { id: '2', text: { en: 'By modifying parent props directly', km: 'ដោយកែប្រែ Parent Props ផ្ទាល់' }, isCorrect: false }
        ],
        explanation: {
          en: 'Callbacks allow unidirectional data flow with bottom-up event notification.',
          km: 'Callback អនុញ្ញាតឱ្យមានលំហូរ Unidirectional Data Flow ជាមួយការជូនដំណឹង Event ពីក្រោមឡើងលើ។'
        }
      }
    ]
  },
  {
    id: 'react-10-3',
    slug: 'when-to-lift-state-vs-keep-local',
    moduleNumber: 10,
    lessonNumberInModule: 3,
    title: {
      en: '10.3 When to Lift State vs. When to Keep it Local',
      km: '១០.៣ ពេលណាត្រូវ Lift State & ពេលណាត្រូវទុកជា Local State'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Keep state local inside a component if no other components need to know about it (e.g., text input value before form submission, hover states). Lift state up ONLY when two or more components must stay synchronized around the same state.',
      km: 'ទុក State ជា Local ក្នុង Component បើសិនជាគ្មាន Component ផ្សេងទៀតត្រូវការប្រើវា (ដូចជា Text input មុន Submit, Hover state)។ Lift state ឡើងលើ លុះត្រាតែមាន Component ២ ឬច្រើនត្រូវការប្រើប្រាស់ State រួមគ្នា។'
    },
    tutorial: {
      en: 'Decision Matrix:\n- Hover/Focus/Input typing state ──► Keep Local Component State\n- Shopping cart count/Auth status ──► Lift State Up / Context',
      km: 'លក្ខខណ្ឌសម្រេចចិត្ត៖\n- Hover/Focus/Input typing state ──► ទុកជា Local Component State\n- Shopping cart count/Auth status ──► Lift State Up / Context'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function LocalInput() {
  // Local state - no other component needs to know about typing drafts!
  const [draft, setDraft] = React.useState("");

  return (
    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
      <div className="text-xs text-slate-400 font-bold">Local Component State (Self-contained)</div>
      <input 
        type="text" 
        value={draft} 
        onChange={e => setDraft(e.target.value)}
        placeholder="Type local draft..."
        className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 text-xs text-white rounded-lg"
      />
      <p className="text-[10px] text-slate-500 font-mono">Draft length: {draft.length}</p>
    </div>
  );
}

function LocalVsLiftedDemo() {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h3 className="text-md font-bold text-white">State Placement Best Practice</h3>
      <LocalInput />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<LocalVsLiftedDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Avoiding Unnecessary Re-renders',
        km: 'ការជៀសវាង Re-renders មិនចាំបាច់'
      },
      description: {
        en: 'Lifting state too high causes the entire application tree to re-render needlessly on every keystroke. Keep UI transient state as close as possible to where it is used.',
        km: 'ការលើក State ខ្ពស់ពេកនាំឱ្យ App ទាំងមូល Re-render ដោយឥតប្រយោជន៍។ ត្រូវទុក Transient State ឲ្យនៅជិតកន្លែងប្រើប្រាស់បំផុត។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Should a component\'s internal dropdown `isOpen` state be lifted to global state if no other components read it?',
        km: 'តើ `isOpen` state របស់ Dropdown គួរ Lift ទៅ Global state ទេ បើគ្មាន Component ផ្សេងអានវា?'
      },
      solution: `No, keep it local inside the Dropdown component.`
    },
    quizQuestions: [
      {
        id: 'r10-3-q1',
        question: {
          en: 'Where is the ideal location to declare a state variable in React?',
          km: 'តើទីតាំងដ៏ស័ក្តិសមបំផុតសម្រាប់ប្រកាស State Variable ក្នុង React នៅឯណា?'
        },
        options: [
          { id: '1', text: { en: 'In the lowest common ancestor component that actually needs the data', km: 'ក្នុង Lowest common ancestor component ដែលពិតជាត្រូវការទិន្នន័យ' }, isCorrect: true },
          { id: '2', text: { en: 'Always at the top-level root App component', km: 'តែងតែនៅ Top-level root App component' }, isCorrect: false }
        ],
        explanation: {
          en: 'Colocating state as close as possible to usage reduces extra re-renders.',
          km: 'ការប្រកាស State ជិតកន្លែងប្រើប្រាស់ ជួយកាត់បន្ថយ Re-renders មិនចាំបាច់។'
        }
      }
    ]
  },

  // MODULE 11 — Context API
  {
    id: 'react-11-1',
    slug: 'prop-drilling-problem',
    moduleNumber: 11,
    lessonNumberInModule: 1,
    title: {
      en: '11.1 The "Prop Drilling" Problem',
      km: '១១.១ បញ្ហា "Prop Drilling"'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: '"Prop Drilling" occurs when data must be passed through multiple nested intermediary components that do not actually need the data themselves, just to reach a deeply nested child component.',
      km: '"Prop Drilling" 发生នៅពេលទិន្នន័យត្រូវបាញ់ឆ្លងកាត់ Intermediary Components ជាច្រើនជាន់ដែលមិនត្រូវការប្រើទិន្នន័យនោះ គ្រាន់តែដើម្បីបញ្ជូនទៅឱ្យ Deeply nested child ខាងក្រោម។'
    },
    tutorial: {
      en: 'Prop Drilling Visual:\nApp (theme="dark") \n  └──► Layout (passes theme prop without using it!)\n         └──► Header (passes theme prop without using it!)\n                └──► ThemeButton (finally uses theme!)',
      km: 'លំហូរ Prop Drilling:\nApp (theme="dark") \n  └──► Layout (បញ្ជូន theme ទាំងមិនប្រើ!)\n         └──► Header (បញ្ជូន theme ទាំងមិនប្រើ!)\n                └──► ThemeButton (ទើបយក theme ទៅប្រើ!)'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function DeepChild({ theme }) {
  return (
    <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-amber-400">
      Deep Child received theme: "{theme}" via 3 layers of prop drilling!
    </div>
  );
}

function MiddleLayer({ theme }) {
  return <DeepChild theme={theme} />;
}

function TopLayer({ theme }) {
  return <MiddleLayer theme={theme} />;
}

function PropDrillingDemo() {
  const [theme] = React.useState("dark-emerald");

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h3 className="text-md font-bold text-white">Prop Drilling Illustration</h3>
      <TopLayer theme={theme} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PropDrillingDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Global App Theme and Auth Session',
        km: 'ការបញ្ជូន Theme ឬ User Session គ្រប់ជាន់'
      },
      description: {
        en: 'Passing user account information down through 10 layout layers makes component maintenance fragile and messy. React Context solves this.',
        km: 'ការបញ្ជូន User info ចុះក្រោម ១០ ជាន់ធ្វើឱ្យកូដពិបាកកែសម្រួល។ React Context ត្រូវបានបង្កើតឡើងដើម្បីដោះស្រាយបញ្ហានេះ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What architectural issue does React Context API solve?',
        km: 'តើ React Context API ដោះស្រាយបញ្ហាអ្វី?'
      },
      solution: `It eliminates Prop Drilling by providing a way to share data globally across the component tree.`
    },
    quizQuestions: [
      {
        id: 'r11-1-q1',
        question: {
          en: 'What is "Prop Drilling"?',
          km: 'តើអ្វីទៅជា "Prop Drilling"?'
        },
        options: [
          { id: '1', text: { en: 'Passing props through intermediate components that do not need them', km: 'ការបញ្ជូន Props ឆ្លងកាត់ Intermediate components ដែលមិនត្រូវការប្រើវា' }, isCorrect: true },
          { id: '2', text: { en: 'Creating infinite loops with useEffect', km: 'ការ បង្កើត infinite loops ជាមួយ useEffect' }, isCorrect: false }
        ],
        explanation: {
          en: 'Prop drilling clutter component interfaces when passing deep global props.',
          km: 'Prop drilling ធ្វើឱ្យ Component interface ស្មុគស្មាញពេលបាញ់ Props ចុះក្រោមជម្រៅជ្រៅ។'
        }
      }
    ]
  },
  {
    id: 'react-11-2',
    slug: 'creating-and-providing-context',
    moduleNumber: 11,
    lessonNumberInModule: 2,
    title: {
      en: '11.2 Creating and Providing Context (`createContext`, `Provider`)',
      km: '១១.២ ការបង្កើត និងផ្តល់ Context (`createContext`, `Provider`)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'React Context provides a way to pass data through the component tree without manually passing props at every level. Create context using `const ThemeContext = createContext(defaultValue);` and wrap parent elements with `<ThemeContext.Provider value={data}>`.',
      km: 'React Context ផ្តល់វិធីសាស្រ្តបញ្ជូនទិន្នន័យក្នុង Component tree ដោយមិនបាច់បាញ់ Props រាល់ជាន់។ បង្កើត Context ដោយ `const ThemeContext = createContext(defaultValue);` រួចច្រក Parent element ក្នុង `<ThemeContext.Provider value={data}>`។'
    },
    tutorial: {
      en: 'Creation & Provision:\nexport const ThemeContext = React.createContext("light");\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value="dark">\n      <Layout />\n    </ThemeContext.Provider>\n  );\n}',
      km: 'ការបង្កើត និងផ្តល់តម្លៃ:\nexport const ThemeContext = React.createContext("light");\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value="dark">\n      <Layout />\n    </ThemeContext.Provider>\n  );\n}'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `const ThemeContext = React.createContext("dark");

function CardContent() {
  const theme = React.useContext(ThemeContext);
  return (
    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-emerald-400">
      Direct Context Consumer: Active Theme = "{theme}"
    </div>
  );
}

function LayoutWrapper() {
  // Intermediate component does NOT need or pass any theme prop!
  return <CardContent />;
}

function ContextProviderDemo() {
  return (
    <ThemeContext.Provider value="cyberpunk-neon">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
        <h3 className="text-md font-bold text-white">Context Provider Broadcast</h3>
        <LayoutWrapper />
      </div>
    </ThemeContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ContextProviderDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Global App Settings Providers',
        km: 'ការប្រើ Providers សម្រាប់ព័ត៌មានទូទៅក្នុង App'
      },
      description: {
        en: 'Wrapping the root `<App />` component inside `<AuthProvider>`, `<ThemeProvider>`, and `<LanguageProvider>` supplies global state everywhere.',
        km: 'ការច្រក root `<App />` ក្នុង `<AuthProvider>`, `<ThemeProvider>` និង `<LanguageProvider>` ផ្តល់ Global State ទូទាំង App។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What React method creates a new Context object?',
        km: 'តើ React method មួយណាបង្កើត Context Object ថ្មី?'
      },
      solution: `React.createContext()`
    },
    quizQuestions: [
      {
        id: 'r11-2-q1',
        question: {
          en: 'Which component prop passes data to all child context consumers?',
          km: 'តើ Component prop មួយណាដែលបញ្ជូនទិន្នន័យទៅកាន់ Child context consumers ទាំងអស់?'
        },
        options: [
          { id: '1', text: { en: 'value prop on <Context.Provider value={data}>', km: 'value prop លើ <Context.Provider value={data}>' }, isCorrect: true },
          { id: '2', text: { en: 'data prop', km: 'data prop' }, isCorrect: false }
        ],
        explanation: {
          en: 'Context.Provider requires a "value" prop to broadcast state to subscribers.',
          km: 'Context.Provider ត្រូវការ "value" prop ដើម្បីចែកចាយ State។'
        }
      }
    ]
  },
  {
    id: 'react-11-3',
    slug: 'consuming-context-with-usecontext',
    moduleNumber: 11,
    lessonNumberInModule: 3,
    title: {
      en: '11.3 Consuming Context with `useContext` Hook',
      km: '១១.៣ ការប្រើប្រាស់ Context ជាមួយ `useContext` Hook'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The `useContext` hook lets function components read context value directly: `const data = useContext(MyContext);`. Whenever the Provider value updates, any component calling `useContext(MyContext)` automatically re-renders with fresh data.',
      km: '`useContext` hook អនុញ្ញាតឱ្យ Function Component អានតម្លៃពី Context បានផ្ទាល់៖ `const data = useContext(MyContext);`។ នៅពេលតម្លៃ Provider ត្រូវបានអាប់ដេត គ្រប់ Component ដែលហៅ `useContext` នឹង Re-render ដោយស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: 'Consumer Hook Syntax:\nimport { useContext } from "react";\nimport { UserContext } from "./UserContext";\n\nfunction Profile() {\n  const user = useContext(UserContext);\n  return <div>{user.name}</div>;\n}',
      km: 'ទម្រង់ Consumer Hook:\nimport { useContext } from "react";\nimport { UserContext } from "./UserContext";\n\nfunction Profile() {\n  const user = useContext(UserContext);\n  return <div>{user.name}</div>;\n}'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `const UserContext = React.createContext();

function UserBadge() {
  const user = React.useContext(UserContext);
  return (
    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
      <div>
        <div className="font-bold text-white">{user.name}</div>
        <div className="text-slate-400">{user.email}</div>
      </div>
      <span className="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-mono text-[10px] rounded font-bold">
        {user.role}
      </span>
    </div>
  );
}

function ContextConsumerDemo() {
  const [user] = React.useState({
    name: "Sokha Heng",
    email: "sokha@dev.kh",
    role: "ADMIN"
  });

  return (
    <UserContext.Provider value={user}>
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
        <h3 className="text-md font-bold text-white">useContext Hook Demo</h3>
        <UserBadge />
      </div>
    </UserContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ContextConsumerDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Authentication Context Hook',
        km: 'ការប្រើប្រាស់ Auth Context Hook'
      },
      description: {
        en: 'Custom context hooks like `useAuth()` allow any component to retrieve the current logged-in user profile or call `logout()` instantly.',
        km: 'Custom context hook ដូចជា `useAuth()` អនុញ្ញាតឱ្យគ្រប់ Component ទាញយក User profile ឬហៅ `logout()` ភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What argument must be passed to the `useContext()` hook?',
        km: 'តើ Argument អ្វីត្រូវផ្ញើទៅ `useContext()` hook?'
      },
      solution: `The Context object itself (created by React.createContext).`
    },
    quizQuestions: [
      {
        id: 'r11-3-q1',
        question: {
          en: 'What triggers a re-render in a component that calls `useContext(MyContext)`?',
          km: 'តើអ្វីធ្វើឱ្យ Component ដែលហៅ `useContext(MyContext)` ធ្វើការ Re-render?'
        },
        options: [
          { id: '1', text: { en: 'A change in the "value" prop provided by <MyContext.Provider value={...}>', km: 'ការកែប្រែតម្លៃ "value" prop ក្នុង <MyContext.Provider value={...}>' }, isCorrect: true },
          { id: '2', text: { en: 'Every standard mouse click on the document', km: 'រាល់ការចុច Mouse លើ Document' }, isCorrect: false }
        ],
        explanation: {
          en: 'When provider value changes, all subscribing useContext components re-render.',
          km: 'នៅពេលតម្លៃ Provider ផ្លាស់ប្តូរ គ្រប់ useContext Component ដែល Subscribe នឹង Re-render។'
        }
      }
    ]
  },

  // MODULE 12 — Custom Hooks
  {
    id: 'react-12-1',
    slug: 'why-custom-hooks-exist',
    moduleNumber: 12,
    lessonNumberInModule: 1,
    title: {
      en: '12.1 Why Custom Hooks Exist (Reusing Stateful Logic)',
      km: '១២.១ ហេតុអ្វីមាន Custom Hooks (ការប្រើ Stateful Logic ឡើងវិញ)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Custom Hooks are JavaScript functions whose names start with `use` and can call other React hooks. They allow you to extract and reuse stateful component logic (like data fetching, form state, media queries) across multiple components without duplicating code.',
      km: 'Custom Hooks គឺជា JavaScript Function ដែលមានឈ្មោះចាប់ផ្តើមដោយ `use` ហើយអាចហៅ React Hooks ផ្សេងទៀតបាន។ វាអនុញ្ញាតឱ្យយើងដក និងប្រើប្រាស់ Stateful Logic ឡើងវិញ ឆ្លងកាត់ Components ជាច្រើនដោយមិនបាច់សរសេរកូដជាន់គ្នា។'
    },
    tutorial: {
      en: 'Naming Convention:\nMust start with "use" prefix! (e.g. useWindowSize, useFetch, useLocalStorage)\n\nFunction Definition:\nfunction useCounter(initial = 0) {\n  const [count, setCount] = useState(initial);\n  const increment = () => setCount(c => c + 1);\n  return { count, increment };\n}',
      km: 'ច្បាប់ដាក់ឈ្មោះ៖\nត្រូវតែចាប់ផ្តើមដោយពាក្យ "use"! (ឧ. useWindowSize, useFetch, useLocalStorage)\n\nការប្រកាស Function:\nfunction useCounter(initial = 0) {\n  const [count, setCount] = useState(initial);\n  const increment = () => setCount(c => c + 1);\n  return { count, increment };\n}'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `// Custom Hook reusing counter logic
function useCounter(initialValue = 0) {
  const [count, setCount] = React.useState(initialValue);
  const increment = () => setCount(prev => prev + 1);
  const reset = () => setCount(initialValue);
  return { count, increment, reset };
}

function CustomHookDemo() {
  const counterA = useCounter(10);
  const counterB = useCounter(100);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h3 className="text-md font-bold text-white">Custom Hook Logic Reuse</h3>
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="text-xs text-slate-400">Counter A: {counterA.count}</div>
          <button onClick={counterA.increment} className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-lg">+1</button>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <div className="text-xs text-slate-400">Counter B: {counterB.count}</div>
          <button onClick={counterB.increment} className="px-3 py-1 bg-emerald-600 text-white text-xs rounded-lg">+1</button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CustomHookDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Shared Data Fetching & Window Resize Hooks',
        km: 'Custom Hooks សម្រាប់ Data Fetching'
      },
      description: {
        en: 'Utility hooks like `useFetch(url)` or `useOnlineStatus()` encapsulate state, effect subscriptions, and cleanup into clean reusable utilities.',
        km: 'Utility hooks ដូចជា `useFetch(url)` ឬ `useOnlineStatus()` ច្រក State, Effect និង Cleanup ទៅជា Reusable utilities។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What naming convention MUST custom hooks follow in React?',
        km: 'តើការដាក់ឈ្មោះ Custom Hook ត្រូវតាមច្បាប់អ្វី?'
      },
      solution: `The function name must start with the prefix 'use' (camelCase, e.g. useLocalStorage).`
    },
    quizQuestions: [
      {
        id: 'r12-1-q1',
        question: {
          en: 'Why do developers create Custom Hooks in React?',
          km: 'ហេតុអ្វីបានជា Developers បង្កើត Custom Hooks ក្នុង React?'
        },
        options: [
          { id: '1', text: { en: 'To share stateful logic between components without duplicating code', km: 'ដើម្បីចែករំលែក Stateful logic រវាង Components ដោយមិនសរសេរកូដត្រួតគ្នា' }, isCorrect: true },
          { id: '2', text: { en: 'To replace HTML tags with C++ code', km: 'ដើម្បីជំនួស HTML tags ដោយ C++' }, isCorrect: false }
        ],
        explanation: {
          en: 'Custom hooks reuse stateful logic cleanly across multiple components.',
          km: 'Custom hooks ប្រើប្រាស់ Stateful logic ឡើងវិញយ៉ាងស្អាតបាត។'
        }
      }
    ]
  },
  {
    id: 'react-12-2',
    slug: 'writing-simple-custom-hook-use-local-storage',
    moduleNumber: 12,
    lessonNumberInModule: 2,
    title: {
      en: '12.2 Writing a Simple Custom Hook (`useLocalStorage`)',
      km: '១២.២ ការសរសេរ Custom Hook (`useLocalStorage`)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A `useLocalStorage` custom hook syncs React state with browser `localStorage`. It initializes state from `localStorage.getItem()` and updates `localStorage.setItem()` inside a `useEffect` whenever the value changes.',
      km: '`useLocalStorage` custom hook ធ្វើ Sync រវាង React State ជាមួយ Browser `localStorage`។ វាបង្កើត State ដំបូងពី `localStorage.getItem()` និងធ្វើបច្ចុប្បន្នភាព `localStorage.setItem()` ក្នុង `useEffect` ពេលតម្លៃប្រែប្រួល។'
    },
    tutorial: {
      en: 'useLocalStorage Hook Pattern:\nfunction useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    const saved = localStorage.getItem(key);\n    return saved ? JSON.parse(saved) : initialValue;\n  });\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n  return [value, setValue];\n}',
      km: 'ទម្រង់ useLocalStorage Hook:\nfunction useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    const saved = localStorage.getItem(key);\n    return saved ? JSON.parse(saved) : initialValue;\n  });\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n  return [value, setValue];\n}'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function useLocalStorage(key, initialValue) {
  const [value, setValue] = React.useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }, [key, value]);

  return [value, setValue];
}

function LocalStorageHookDemo() {
  const [name, setName] = useLocalStorage("demo_username", "Sokha");

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h3 className="text-md font-bold text-white">useLocalStorage Persistence</h3>
      <div>
        <label className="text-xs text-slate-400 block mb-1">Persistent Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)}
          className="w-full px-3 py-2 bg-slate-950 border border-slate-700 text-xs text-white rounded-xl"
        />
      </div>
      <p className="text-xs text-emerald-400 font-mono">
        Value saved in localStorage under "demo_username"!
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<LocalStorageHookDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Persistent User Preferences',
        km: 'ការរក្សាទុក User Preferences ជាប់ជាអចិន្ត្រៃយ៍'
      },
      description: {
        en: 'Theme choices, language selections, and draft form inputs persist across page reloads using `useLocalStorage`.',
        km: 'ការជ្រើសរើស Theme, ភាសា និង Draft forms ត្រូវបានរក្សាទុកឆ្លងកាត់ Page reloads ដោយប្រើ `useLocalStorage`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What browser API allows data to persist across page reloads in client-side apps?',
        km: 'តើ Browser API មួយណាដែលរក្សាទុកទិន្នន័យបានឆ្លងកាត់ Page reload?'
      },
      solution: `window.localStorage`
    },
    quizQuestions: [
      {
        id: 'r12-2-q1',
        question: {
          en: 'Why do we pass a function initializer `useState(() => { ... })` when reading from localStorage?',
          km: 'ហេតុអ្វីបានជាយើងប្រើ Function Initializer `useState(() => { ... })` ពេលអានពី localStorage?'
        },
        options: [
          { id: '1', text: { en: 'Lazy initialization executes expensive localStorage reads ONLY on initial mount', km: 'Lazy initialization អាន localStorage តែម្តងគត់ពេល Mount ដំបូង' }, isCorrect: true },
          { id: '2', text: { en: 'It prevents React from rendering', km: 'វាការពារមិនឱ្យ React Render' }, isCorrect: false }
        ],
        explanation: {
          en: 'Lazy state initialization avoids reading disk/localStorage on every re-render.',
          km: 'Lazy state initialization ជៀសវាងការអាន disk/localStorage រាល់ពេល re-render។'
        }
      }
    ]
  },
  {
    id: 'react-12-3',
    slug: 'rules-of-hooks',
    moduleNumber: 12,
    lessonNumberInModule: 3,
    title: {
      en: '12.3 Rules of Hooks',
      km: '១២.៣ ច្បាប់នៃការប្រើប្រាស់ Hooks (Rules of Hooks)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'React enforces two mandatory Rules of Hooks: 1) ONLY call hooks at the TOP LEVEL of function components or custom hooks (never inside loops, conditions `if`, or nested functions). 2) ONLY call hooks from React function components or custom hooks.',
      km: 'React កំណត់ច្បាប់ធំៗ ២ សម្រាប់ Hooks៖ ១) ហៅ Hooks តែនៅ TOP LEVEL នៃ Function Component ឬ Custom Hook ប៉ុណ្ណោះ (ហាមហៅក្នុង Loops, Conditions `if` ឬ Nested functions)។ ២) ហៅ Hooks តែចេញពី React Function Components ឬ Custom Hooks ប៉ុណ្ណោះ។'
    },
    tutorial: {
      en: 'Violations vs Rules:\n// ❌ VIOLATION:\nif (isLoggedIn) { useEffect(...); }\n\n// ✅ CORRECT:\nuseEffect(() => {\n  if (isLoggedIn) { ... }\n}, [isLoggedIn]);',
      km: 'ការបំពានច្បាប់ និងទម្រង់ត្រូវ៖\n// ❌ បំពានច្បាប់៖\nif (isLoggedIn) { useEffect(...); }\n\n// ✅ ទម្រង់ត្រឹមត្រូវ៖\nuseEffect(() => {\n  if (isLoggedIn) { ... }\n}, [isLoggedIn]);'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function RulesOfHooksDemo() {
  // ✅ Rule 1: Called at top level
  const [count, setCount] = React.useState(0);

  // ✅ Rule 1: Condition inside effect, NOT effect inside condition!
  React.useEffect(() => {
    if (count > 5) {
      console.log("Count exceeded threshold!");
    }
  }, [count]);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 text-center">
      <h3 className="text-md font-bold text-white">Rules of Hooks Verification</h3>
      <div className="text-xl font-bold text-emerald-400">{count}</div>
      <button 
        onClick={() => setCount(prev => prev + 1)}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition"
      >
        Increment Safely
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RulesOfHooksDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Linter Enforcement with ESLint',
        km: 'ការប្រើប្រាស់ ESLint Plugin សម្រាប់ Hooks'
      },
      description: {
        en: 'The official `eslint-plugin-react-hooks` catches Rule of Hooks violations at build time before code reaches production.',
        km: '`eslint-plugin-react-hooks` ជួយស្វែងរក និងចាប់ Error ការបំពានច្បាប់ Hooks ក្នុងអំឡុងពេល Build។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Is it valid to call `useState()` inside an `if (condition)` block?',
        km: 'តើវាត្រឹមត្រូវទេបើហៅ `useState()` ក្នុង `if (condition)` block?'
      },
      solution: `No! Calling hooks inside conditional blocks violates the Rules of Hooks.`
    },
    quizQuestions: [
      {
        id: 'r12-3-q1',
        question: {
          en: 'Why must React Hooks strictly be called in the exact same order on every render?',
          km: 'ហេតុអ្វីបានជា React Hooks ត្រូវតែហៅក្នុងលំដាប់លំដោយដូចគ្នាទាំងស្រុងលើគ្រប់ Render?'
        },
        options: [
          { id: '1', text: { en: 'React relies on call order to pair state variables with their internal hook index', km: 'React អាស្រ័យលើ លំដាប់ Call order ដើម្បីផ្គូផ្គង State ជាមួយ Internal hook index' }, isCorrect: true },
          { id: '2', text: { en: 'Browsers do not support nested JavaScript functions', km: 'Browser មិនគាំទ្រ nested JavaScript functions' }, isCorrect: false }
        ],
        explanation: {
          en: 'React matches state calls to array indices based on top-level execution order.',
          km: 'React ផ្គូផ្គង State ទៅកាន់ Array index ដោយអាស្រ័យលើ Top-level execution order។'
        }
      }
    ]
  }
];
