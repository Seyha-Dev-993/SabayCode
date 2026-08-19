import { FrontendCourse, FrontendQuizQuestion } from '../types/frontendClass';
import { REACT_LESSONS_PART1 } from './reactLessonsPart1';
import { REACT_LESSONS_PART2 } from './reactLessonsPart2';
import { REACT_LESSONS_PART3 } from './reactLessonsPart3';
import { REACT_LESSONS_PART4 } from './reactLessonsPart4';

const REACT_CHEAT_SHEET = [
  {
    concept: 'Functional Component & JSX',
    code: `function Welcome({ name }) {
  return (
    <div className="card">
      <h1>Hello, {name}!</h1>
    </div>
  );
}`,
    explanation: {
      en: 'React functional components return declarative JSX UI elements based on props.',
      km: 'React Functional Components ត្រឡប់ Declarative JSX UI ផ្អែកលើ Props។'
    }
  },
  {
    concept: 'State Management with useState',
    code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}`,
    explanation: {
      en: '`useState` preserves state variables across component re-renders.',
      km: '`useState` រក្សាទុកតម្លៃ State ឆ្លងកាត់ការ Re-render របស់ Component។'
    }
  },
  {
    concept: 'Side Effects with useEffect',
    code: `import { useEffect } from 'react';

useEffect(() => {
  document.title = \`Count: \${count}\`;
  return () => console.log("Cleanup on unmount");
}, [count]); // Runs when count changes`,
    explanation: {
      en: '`useEffect` performs side effects like fetching data, DOM mutations, or subscriptions.',
      km: '`useEffect` គ្រប់គ្រង Side effects ដូចជា Fetch ทិន្នន័យ, DOM Mutations ឬ Timers។'
    }
  },
  {
    concept: 'Global Context with useContext',
    code: `const ThemeContext = React.createContext("dark");

function ThemeCard() {
  const theme = React.useContext(ThemeContext);
  return <div>Active Theme: {theme}</div>;
}`,
    explanation: {
      en: 'Context API bypasses prop drilling to share global data (themes, auth) everywhere.',
      km: 'Context API ចែករំលែក Global Data ដោយមិនចាំបាច់ធ្វើ Prop Drilling។'
    }
  },
  {
    concept: 'Custom Hooks Pattern',
    code: `function useCounter(initial = 0) {
  const [val, setVal] = useState(initial);
  const inc = () => setVal(c => c + 1);
  return [val, inc];
}`,
    explanation: {
      en: 'Custom hooks start with "use" and reuse stateful logic cleanly across components.',
      km: 'Custom hooks ចាប់ផ្តើមដោយពាក្យ "use" ដើម្បីប្រើ Stateful Logic ឡើងវិញ។'
    }
  },
  {
    concept: 'Controlled Form Inputs',
    code: `const [email, setEmail] = useState("");

<input 
  type="email" 
  value={email} 
  onChange={(e) => setEmail(e.target.value)} 
/>`,
    explanation: {
      en: 'Controlled inputs bind input value and change handlers directly to state.',
      km: 'Controlled inputs ភ្ជាប់តម្លៃ Input និង Change Handler ទៅកាន់ State ផ្ទាល់។'
    }
  }
];

const REACT_QUIZ: FrontendQuizQuestion[] = [
  {
    id: 'q-react-full-1',
    question: {
      en: 'What is the Virtual DOM in React and what is its primary performance benefit?',
      km: 'តើអ្វីទៅជា Virtual DOM ក្នុង React ហើយតើផលប្រយោជន៍ Performance ចម្បងរបស់វាជាអ្វី?'
    },
    options: [
      { id: '1', text: { en: 'A lightweight in-memory representation of the real DOM that optimizes batch updates via diffing', km: 'ជា In-memory representation ស្រាលនៃ Real DOM ដែលជួយអាប់ដេត Batch តាម diffing' }, isCorrect: true },
      { id: '2', text: { en: 'A hardware accelerator built into graphics cards for fast browser rendering', km: 'ជា Hardware accelerator ក្នុង GPU' }, isCorrect: false }
    ],
    explanation: {
      en: 'The Virtual DOM compares previous and current UI trees to compute minimal real DOM updates.',
      km: 'Virtual DOM ប្រៀបធៀប UI Tree ចាស់ និងថ្មី ដើម្បីអាប់ដេត Real DOM ក្នុងចំនួនតិចបំផុត។'
    }
  },
  {
    id: 'q-react-full-2',
    question: {
      en: 'Why must JSX expressions contain exactly ONE top-level parent element or Fragment `<>...</>`?',
      km: 'ហេតុអ្វីបានជា JSX Expression ត្រូវតែមាន Top-level Parent Element ឬ Fragment `<>...</>` តែមួយគត់?'
    },
    options: [
      { id: '1', text: { en: 'JSX compiles down to JavaScript function calls (e.g. React.createElement) which must return a single root object', km: 'ព្រោះ JSX ត្រូវបាន Compile ទៅជា Function call របស់ JS ដែលអាច Return រូបរាង Root តែមួយ' }, isCorrect: true },
      { id: '2', text: { en: 'Browsers reject HTML elements without div wrappers', km: 'ព្រោះ Browser មិនទទួល HTML គ្មាន Div' }, isCorrect: false }
    ],
    explanation: {
      en: 'Every JSX expression compiles into a single `React.createElement()` call, which returns a single element object.',
      km: 'រាល់ JSX Expression ត្រូវបាន Transpile ទៅជា `React.createElement()` Call ដែល Return Object តែមួយ។'
    }
  },
  {
    id: 'q-react-full-3',
    question: {
      en: 'Which rule applies when updating state that depends on the previous state value in React?',
      km: 'តើត្រូវប្រកាន់ខ្ជាប់ច្បាប់អ្វី ពេលអាប់ដេត State ដែលអាស្រ័យលើតម្លៃ State ចាស់?'
    },
    options: [
      { id: '1', text: { en: 'Pass a callback function to the state setter: setCount(prevCount => prevCount + 1)', km: 'បញ្ជូន Callback function ទៅកាន់ State setter: setCount(prevCount => prevCount + 1)' }, isCorrect: true },
      { id: '2', text: { en: 'Mutate the state variable directly: count++', km: 'កែប្រែតម្លៃអថេរ State ផ្ទាល់: count++' }, isCorrect: false }
    ],
    explanation: {
      en: 'Functional state updates guarantee accurate calculations even during batched asynchronous updates.',
      km: 'Functional state updates ធានាការគណនាត្រឹមត្រូវ ទោះជាមាន Batched asynchronous updates ក៏ដោយ។'
    }
  },
  {
    id: 'q-react-full-4',
    question: {
      en: 'What is the primary function of the `key` prop when rendering arrays in React?',
      km: 'តើតួនាទីចម្បងរបស់ `key` prop ពេលបង្ហាញ Array ក្នុង React គឺអ្វី?'
    },
    options: [
      { id: '1', text: { en: 'It uniquely identifies list items so React can track additions, removals, and reorders during diffing', km: 'វាផ្តល់ អត្តសញ្ញាណ ដល់ List items ដើម្បីឱ្យ React ស្គាល់ការបន្ថែម លុប និងតម្រៀបឡើងវិញ' }, isCorrect: true },
      { id: '2', text: { en: 'It styles list items with unique background colors automatically', km: 'វា ដាក់ពណ៌ ស្វ័យប្រវត្តិ លើ List item' }, isCorrect: false }
    ],
    explanation: {
      en: 'Keys give list elements a stable identity across re-renders.',
      km: 'Keys ផ្តល់អត្តសញ្ញាណរឹងមាំដល់ List elements ពេល Re-render។'
    }
  },
  {
    id: 'q-react-full-5',
    question: {
      en: 'How do you configure `useEffect` to execute its callback ONLY when the component first mounts?',
      km: 'តើធ្វើដូចម្តេចដើម្បីកំណត់ `useEffect` ឱ្យ Run តែម្តងគត់ ពេល Component Mount ដំបូង?'
    },
    options: [
      { id: '1', text: { en: 'Pass an empty dependency array `[]` as the second argument', km: 'បញ្ជូន Dependency array ទទេ `[]` ជា Argument ទីពីរ' }, isCorrect: true },
      { id: '2', text: { en: 'Omit the second argument completely', km: 'មិនបាច់ដាក់ Argument ទីពីរ' }, isCorrect: false }
    ],
    explanation: {
      en: 'An empty dependency array `[]` indicates no reactive dependencies exist, so the effect runs only once on mount.',
      km: 'Array ទទេ `[]` ប្រាប់ React ថាគ្មាន Dependency ប្រែប្រួល ដូច្នេះវា Run តែពេល Mount ប៉ុណ្ណោះ។'
    }
  },
  {
    id: 'q-react-full-6',
    question: {
      en: 'What event method must be called inside a React form `onSubmit` handler to prevent browser page reload?',
      km: 'តើ Method អ្វីត្រូវហៅក្នុង React form `onSubmit` handler ដើម្បីការពារមិនឱ្យ Browser Reload ទំព័រ?'
    },
    options: [
      { id: '1', text: { en: 'e.preventDefault()', km: 'e.preventDefault()' }, isCorrect: true },
      { id: '2', text: { en: 'e.stopPropagation()', km: 'e.stopPropagation()' }, isCorrect: false }
    ],
    explanation: {
      en: '`e.preventDefault()` stops default HTML form HTTP submit navigation behavior.',
      km: '`e.preventDefault()` ឃាត់សកម្មភាព Reload ធម្មតារបស់ HTML form។'
    }
  },
  {
    id: 'q-react-full-7',
    question: {
      en: 'Which hook retrieves route parameters (like `:id`) defined in `react-router-dom` path declarations?',
      km: 'តើ Hook មួយណាសម្រាប់ទាញយក Route parameters (ដូចជា `:id`) ក្នុង `react-router-dom`?'
    },
    options: [
      { id: '1', text: { en: 'useParams()', km: 'useParams()' }, isCorrect: true },
      { id: '2', text: { en: 'useRouteMatch()', km: 'useRouteMatch()' }, isCorrect: false }
    ],
    explanation: {
      en: '`useParams()` returns an object mapping dynamic path parameters.',
      km: '`useParams()` ត្រឡប់ Object នៃ Dynamic Path Parameters។'
    }
  },
  {
    id: 'q-react-full-8',
    question: {
      en: 'What mandatory rule must custom hooks follow regarding naming in React?',
      km: 'តើច្បាប់ដាច់ខាតនៃការដាក់ឈ្មោះ Custom Hook ក្នុង React គឺអ្វី?'
    },
    options: [
      { id: '1', text: { en: 'The function name MUST start with the lowercase "use" prefix (e.g. useAuth)', km: 'ឈ្មោះ Function ត្រូវតែចាប់ផ្តើមដោយអក្សរ "use" (ឧ. useAuth)' }, isCorrect: true },
      { id: '2', text: { en: 'The function name must end with "Hook"', km: 'ឈ្មោះ Function ត្រូវតែបញ្ចប់ដោយ "Hook"' }, isCorrect: false }
    ],
    explanation: {
      en: 'The "use" prefix allows React linter rules to verify Rule of Hooks compliance.',
      km: 'ពាក្យ "use" នៅខាងដើមអនុញ្ញាតឱ្យ React Linter ផ្ទៀងផ្ទាត់ច្បាប់របស់ Hooks។'
    }
  }
];

export const REACT_COURSE_DATA: FrontendCourse = {
  id: 'react',
  title: {
    en: 'React.js Course',
    km: 'វគ្គសិក្សា React.js'
  },
  iconName: 'react',
  categoryId: 'frameworks',
  difficulty: 'Intermediate',
  shortDescription: {
    en: 'Master components, JSX, props, state, hooks, forms, context, router, and data fetching.',
    km: 'រៀនពី Components, JSX, Props, State, Hooks, Forms, Context API, React Router, និង Data Fetching។'
  },
  summary: {
    en: 'React is the world\'s most popular frontend library for building modern, interactive user interfaces with reusable component architecture, virtual DOM rendering, and hook-based state management.',
    km: 'React គឺជា Frontend Library ដែលពេញនិយមបំផុតលើពិភពលោកសម្រាប់បង្កើត User Interface ទំនើប និងលឿនរហ័ស ផ្អែកលើ Reusable Component Architecture និង Virtual DOM។'
  },
  estimatedHours: 10,
  lessonCount: 42, // 14 modules * 3 lessons = 42 lessons
  cheatSheet: REACT_CHEAT_SHEET,
  quiz: REACT_QUIZ,
  capstoneProject: {
    title: {
      en: 'Capstone Project: Multi-Page Task & Note Workspace App',
      km: 'គម្រោង Capstone: កម្មវិធី Multi-Page Task & Note Workspace'
    },
    description: {
      en: 'Build a production-grade multi-page React application with task creation, category filtering, search input, status toggling, local storage persistence, and simulated router navigation!',
      km: 'បង្កើត React App ពេញលេញដែលមានការបង្កើត Task, ការ Filter តាម Category, ការ Search, ការលុប/បន្ថែម Task, Persistence តាម LocalStorage និង Navigation Multi-Page!`}'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `// Multi-Page Task Workspace Capstone
function Header({ currentTab, setCurrentTab, taskCount }) {
  return (
    <header className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-10">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-black text-sm">
            ⚛
          </div>
          <h1 className="text-md font-bold text-white">React Workspace</h1>
        </div>

        <nav className="flex gap-2 text-xs">
          <button 
            onClick={() => setCurrentTab("tasks")}
            className={\`px-3 py-1.5 rounded-lg font-bold transition \${currentTab === "tasks" ? "bg-sky-600 text-white" : "bg-slate-800 text-slate-400"}\`}
          >
            Tasks ({taskCount})
          </button>
          <button 
            onClick={() => setCurrentTab("about")}
            className={\`px-3 py-1.5 rounded-lg font-bold transition \${currentTab === "about" ? "bg-sky-600 text-white" : "bg-slate-800 text-slate-400"}\`}
          >
            About
          </button>
        </nav>
      </div>
    </header>
  );
}

function TaskPage({ tasks, addTask, toggleTask, deleteTask }) {
  const [text, setText] = React.useState("");
  const [filter, setFilter] = React.useState("ALL");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === "ACTIVE") return !t.completed;
    if (filter === "DONE") return t.completed;
    return true;
  });

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input 
          type="text" 
          value={text} 
          onChange={e => setText(e.target.value)}
          placeholder="New React task..."
          className="flex-1 px-3 py-2 bg-slate-950 border border-slate-800 text-xs text-white rounded-xl focus:outline-none focus:border-sky-500"
        />
        <button type="submit" className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-xs font-bold text-white rounded-xl transition">
          Add
        </button>
      </form>

      <div className="flex gap-2 text-[11px]">
        {["ALL", "ACTIVE", "DONE"].map(f => (
          <button 
            key={f} 
            onClick={() => setFilter(f)}
            className={\`px-3 py-1 rounded-lg border font-mono transition \${filter === f ? "bg-slate-800 border-sky-500 text-sky-400 font-bold" : "border-slate-800 text-slate-500"}\`}
          >
            {f}
          </button>
        ))}
      </div>

      {filteredTasks.length === 0 ? (
        <div className="p-8 text-center bg-slate-950 border border-dashed border-slate-800 rounded-2xl text-xs text-slate-500 space-y-1">
          <div className="text-xl">📭</div>
          <p>No tasks matching filter "{filter}"</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map(t => (
            <li key={t.id} className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={t.completed} 
                  onChange={() => toggleTask(t.id)}
                  className="accent-sky-500 cursor-pointer"
                />
                <span className={t.completed ? "line-through text-slate-500 font-mono" : "text-slate-200 font-medium"}>
                  {t.title}
                </span>
              </div>
              <button onClick={() => deleteTask(t.id)} className="text-[10px] text-rose-400 hover:text-rose-300 font-bold">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function AboutPage() {
  return (
    <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-3 text-xs">
      <h2 className="text-sm font-bold text-white">About React.js Masterclass Capstone</h2>
      <p className="text-slate-400 leading-relaxed">
        This Capstone Project synthesizes all 14 React modules: JSX syntax, Functional Components, State lifting, Controlled inputs, Component mapping with keys, LocalStorage side-effects with useEffect, and Single Page Router navigation state!
      </p>
      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-emerald-400 font-mono text-[11px]">
        ✓ Built with React 18 & Tailwind CSS CDN
      </div>
    </div>
  );
}

function ReactCapstoneApp() {
  const [currentTab, setCurrentTab] = React.useState("tasks");
  const [tasks, setTasks] = React.useState(() => {
    try {
      const saved = localStorage.getItem("react_capstone_tasks");
      return saved ? JSON.parse(saved) : [
        { id: "1", title: "Master React JSX & Props", completed: true },
        { id: "2", title: "Understand useEffect & Lifecycle", completed: false },
        { id: "3", title: "Complete Capstone Project", completed: false }
      ];
    } catch (e) {
      return [];
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem("react_capstone_tasks", JSON.stringify(tasks));
    } catch (e) {}
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now().toString(), title, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} taskCount={tasks.length} />
      <main className="max-w-md mx-auto p-4">
        {currentTab === "tasks" ? (
          <TaskPage 
            tasks={tasks} 
            addTask={addTask} 
            toggleTask={toggleTask} 
            deleteTask={deleteTask} 
          />
        ) : (
          <AboutPage />
        )}
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ReactCapstoneApp />);`
    }
  },
  lessons: [
    ...REACT_LESSONS_PART1,
    ...REACT_LESSONS_PART2,
    ...REACT_LESSONS_PART3,
    ...REACT_LESSONS_PART4
  ]
};
