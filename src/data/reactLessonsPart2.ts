import { FrontendLesson } from '../types/frontendClass';

export const REACT_LESSONS_PART2: FrontendLesson[] = [
  // MODULE 5 — Events in React
  {
    id: 'react-5-1',
    slug: 'handling-events-clicks-inputs-submits',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: {
      en: '5.1 Handling Events (Clicks, Inputs, Form Submits)',
      km: '៥.១ ការគ្រប់គ្រង Events (Clicks, Inputs, Form Submits)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'React handles events using camelCase attributes (e.g. `onClick`, `onChange`, `onSubmit`) and SyntheticEvent wrappers to ensure consistent cross-browser behavior.',
      km: 'React គ្រប់គ្រង Events ដោយប្រើ camelCase Attributes (ដូចជា `onClick`, `onChange`, `onSubmit`) និង SyntheticEvent Wrapper ដើម្បីធានាថាវា ដំណើរការដូចគ្នានៅលើគ្រប់ Browser។'
    },
    tutorial: {
      en: 'Syntax Comparison:\nHTML:  <button onclick="handleClick()">Click</button>\nReact: <button onClick={handleClick}>Click</button>',
      km: 'ការប្រៀបធៀប Syntax:\nHTML:  <button onclick="handleClick()">Click</button>\nReact: <button onClick={handleClick}>Click</button>'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function EventDemo() {
  const [msg, setMsg] = React.useState("Click or type below...");

  const handleClick = () => setMsg("Button Click Event Triggered! 🎉");
  const handleChange = (e) => setMsg(\`Typing: \${e.target.value}\`);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
      <div className="p-3 bg-slate-950 rounded-xl text-xs font-mono text-indigo-400">{msg}</div>
      <input 
        type="text" 
        onChange={handleChange} 
        placeholder="Type something..." 
        className="w-full px-3 py-2 bg-slate-950 border border-slate-700 text-xs text-white rounded-xl"
      />
      <button 
        onClick={handleClick}
        className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition"
      >
        Trigger Click Event
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<EventDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Synthetic Event System',
        km: 'ប្រព័ន្ធ Synthetic Event ក្នុង React'
      },
      description: {
        en: 'Synthetic Events wrap native browser events so `e.preventDefault()` and `e.stopPropagation()` behave identically in Chrome, Safari, and Firefox.',
        km: 'Synthetic Events ច្រកលើ Native Event ធ្វើឱ្យ `e.preventDefault()` ដំណើរការដូចគ្នាលើគ្រប់ Browser។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What React event listener attribute corresponds to the standard HTML `onchange` event?',
        km: 'តើ Attribute អ្វីក្នុង React ដែលសមមូលនឹង HTML `onchange`?'
      },
      solution: `onChange`
    },
    quizQuestions: [
      {
        id: 'r5-1-q1',
        question: {
          en: 'How are event listener attributes named in React JSX?',
          km: 'តើ Event Listener Attributes ក្នុង React JSX មានទម្រង់ឈ្មោះដូចម្តេច?'
        },
        options: [
          { id: '1', text: { en: 'camelCase (e.g. onClick, onChange)', km: 'camelCase (ឧ. onClick, onChange)' }, isCorrect: true },
          { id: '2', text: { en: 'lowercase (e.g. onclick, onchange)', km: 'lowercase (ឧ. onclick, onchange)' }, isCorrect: false }
        ],
        explanation: {
          en: 'React uses camelCase attribute names for event handlers.',
          km: 'React ប្រើប្រាស់ camelCase សម្រាប់ឈ្មោះ Event Handler Attributes។'
        }
      }
    ]
  },
  {
    id: 'react-5-2',
    slug: 'passing-arguments-to-event-handlers',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: {
      en: '5.2 Passing Arguments to Event Handlers',
      km: '៥.២ ការបញ្ជូន Arguments ទៅកាន់ Event Handlers'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'To pass arguments to an event handler function without invoking it immediately during render, wrap the function call inside an inline arrow function: `onClick={() => handleDelete(id)}`.',
      km: 'ដើម្បីបញ្ជូន Arguments ទៅកាន់ Event Handler Function ដោយមិនឱ្យវា Run ភ្លាមៗពេល Render ត្រូវច្រក Function Call នោះក្នុង Inline Arrow Function: `onClick={() => handleDelete(id)}`។'
    },
    tutorial: {
      en: 'Correct Pattern:\n<button onClick={() => deleteUser(5)}>Delete</button>\n\nIncorrect Pattern:\n<button onClick={deleteUser(5)}>Delete</button> // ❌ Invokes deleteUser(5) during render!',
      km: 'ទម្រង់ត្រឹមត្រូវ៖\n<button onClick={() => deleteUser(5)}>Delete</button>\n\nទម្រង់ខុស៖\n<button onClick={deleteUser(5)}>Delete</button> // ❌ វានឹង Run deleteUser(5) ភ្លាមពេល Render!'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function ArgumentDemo() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const selectCategory = (name) => {
    setSelectedCategory(name);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <div className="text-xs text-slate-400">Active Category: <span className="text-sky-400 font-bold">{selectedCategory}</span></div>
      <div className="flex gap-2">
        <button onClick={() => selectCategory("Laptops")} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg">Laptops</button>
        <button onClick={() => selectCategory("Phones")} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg">Phones</button>
        <button onClick={() => selectCategory("Audio")} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded-lg">Audio</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ArgumentDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Item Deletion & Selection Handlers',
        km: 'ការលុប ឬជ្រើសរើសទិន្នន័យក្នុង Table'
      },
      description: {
        en: 'Table rows with delete buttons pass item unique IDs to delete handlers using `<button onClick={() => removeItem(item.id)}>`.',
        km: 'ប៊ូតុងលុបទិន្នន័យក្នុង Table ប្រើប្រាស់ `<button onClick={() => removeItem(item.id)}>` ដើម្បីផ្ញើ Unique ID ទៅ Handler។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What happens if you write `onClick={handleDelete(item.id)}` instead of using an arrow function wrapper?',
        km: 'តើមានអ្វីកើតឡើងបើសរសេរ `onClick={handleDelete(item.id)}` ដោយមិនប្រើ Arrow function?'
      },
      solution: `It calls 'handleDelete' immediately when the component renders, causing unintended side effects or infinite re-renders.`
    },
    quizQuestions: [
      {
        id: 'r5-2-q1',
        question: {
          en: 'How should custom arguments be passed into an event handler in React JSX?',
          km: 'តើគួរបញ្ជូន Custom arguments ទៅកាន់ Event Handler ក្នុង React តាមរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'Wrap the handler call inside an arrow function: () => handler(arg)', km: 'ច្រក Function Call ក្នុង Arrow function: () => handler(arg)' }, isCorrect: true },
          { id: '2', text: { en: 'Call the handler directly: handler(arg)', km: 'ហៅ Function ផ្ទាល់: handler(arg)' }, isCorrect: false }
        ],
        explanation: {
          en: 'An arrow function wrapper defers execution until the event is fired.',
          km: 'Arrow function wrapper ពន្យារពេលការ Run រហូតដល់ Event ត្រូវបានលេចឡើង។'
        }
      }
    ]
  },
  {
    id: 'react-5-3',
    slug: 'controlled-inputs-value-state-binding',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: {
      en: '5.3 Controlled Inputs (Linking Input Value to State)',
      km: '៥.៣ Controlled Inputs (ការភ្ជាប់ Input Value ទៅ State)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'In React, a controlled component binds the `<input>` value to component state (`value={text}`) and updates state on every keystroke (`onChange={(e) => setText(e.target.value)}`). State acts as the single source of truth.',
      km: 'ក្នុង React, Controlled Component ភ្ជាប់តម្លៃ `<input>` ទៅកាន់ State (`value={text}`) និងអាប់ដេត State ពេល User ចុចកែប្រែ (`onChange={(e) => setText(e.target.value)}`)។ State គឺជា Single Source of Truth។'
    },
    tutorial: {
      en: 'Controlled Input Pattern:\nconst [email, setEmail] = useState("");\n\n<input \n  type="email" \n  value={email} \n  onChange={(e) => setEmail(e.target.value)} \n/>',
      km: 'ទម្រង់ Controlled Input:\nconst [email, setEmail] = useState("");\n\n<input \n  type="email" \n  value={email} \n  onChange={(e) => setEmail(e.target.value)} \n/>'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function ControlledInputDemo() {
  const [username, setUsername] = React.useState("");

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h3 className="text-md font-bold text-white">Controlled Form Field</h3>
      <div>
        <label className="text-xs text-slate-400 block mb-1">Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username..."
          className="w-full px-3 py-2 bg-slate-950 border border-slate-700 text-xs text-white rounded-xl focus:border-indigo-500 focus:outline-none"
        />
      </div>
      <div className="p-3 bg-slate-950 rounded-xl text-xs font-mono text-emerald-400">
        Live State Mirror: "{username}"
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ControlledInputDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Form Validation and Live Filtering',
        km: 'ការធ្វើ Validation និង Live Search'
      },
      description: {
        en: 'Controlled inputs allow instant search filtering as users type and enable real-time inline input validation.',
        km: 'Controlled inputs ជួយធ្វើ Live Search និងអាប់ដេត Validation Error ភ្លាមៗពេល User កំពុងសរសេរ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What two props make an `<input>` tag a controlled input in React?',
        km: 'តើ Props ២ ណាដែលធ្វើឱ្យ `<input>` tag ក្លាយជា Controlled input?'
      },
      solution: `value and onChange`
    },
    quizQuestions: [
      {
        id: 'r5-3-q1',
        question: {
          en: 'What is the "single source of truth" for input values in a controlled component?',
          km: 'តើអ្វីជា "Single source of truth" សម្រាប់តម្លៃ Input ក្នុង Controlled component?'
        },
        options: [
          { id: '1', text: { en: 'React component state', km: 'React component state' }, isCorrect: true },
          { id: '2', text: { en: 'Internal browser DOM input memory', km: 'Memory របស់ Browser DOM input' }, isCorrect: false }
        ],
        explanation: {
          en: 'React component state dictates the input value in controlled components.',
          km: 'React state ជាអ្នកកំណត់តម្លៃឱ្យ Input ក្នុង Controlled components។'
        }
      }
    ]
  },

  // MODULE 6 — Conditional Rendering
  {
    id: 'react-6-1',
    slug: 'if-ternary-conditional-rendering',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: {
      en: '6.1 Conditional Rendering with Ternary & `if` Statements',
      km: '៦.១ Conditional Rendering ដោយប្រើ Ternary & `if` Statements'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Conditional rendering allows React components to display different UI elements based on state or props. You can use standard JavaScript `if/else` logic before returning JSX, or inline ternary operators `condition ? <A /> : <B />`.',
      km: 'Conditional rendering អនុញ្ញាតឱ្យ React Component បង្ហាញ UI ខុសៗគ្នា ផ្អែកលើ State ឬ Props។ អ្នកអាចប្រើប្រាស់ `if/else` មុនពេល Return JSX ឬប្រើ Inline Ternary operator `condition ? <A /> : <B />`។'
    },
    tutorial: {
      en: 'Ternary Pattern:\nreturn (\n  <div>\n    {isLoggedIn ? <UserDashboard /> : <LoginForm />}\n  </div>\n);',
      km: 'ទម្រង់ Ternary:\nreturn (\n  <div>\n    {isLoggedIn ? <UserDashboard /> : <LoginForm />}\n  </div>\n);'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function AuthWidget() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 text-center">
      <h3 className="text-md font-bold text-white">Authentication Status</h3>
      
      {isLoggedIn ? (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl space-y-2">
          <p className="font-bold">Welcome back, Dara! 👋</p>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded-lg transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="p-4 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs rounded-xl space-y-2">
          <p>Please log in to access your dashboard.</p>
          <button 
            onClick={() => setIsLoggedIn(true)}
            className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition"
          >
            Log In
          </button>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AuthWidget />);`
    },
    realWorldExample: {
      title: {
        en: 'Auth & Role-Based UI',
        km: 'ការបង្ហាញ UI តាមសិទ្ធិ ឬការ Login'
      },
      description: {
        en: 'Displaying Admin panels vs Standard user views relies on ternary conditional evaluation based on `user.role === "admin"`.',
        km: 'ការបង្ហាញ Admin panel ធៀបនឹង Standard user គឺផ្អែកលើការត្រួតពិនិត្យ `user.role === "admin"`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write an inline ternary expression rendering "Active" if `status === true` else "Inactive".',
        km: 'សរសេរ Inline ternary បង្ហាញ "Active" បើ `status === true` បើមិនដូច្នោះទេបង្ហាញ "Inactive"។'
      },
      solution: `{status ? "Active" : "Inactive"}`
    },
    quizQuestions: [
      {
        id: 'r6-1-q1',
        question: {
          en: 'Which operator is best for inline binary conditional choices directly inside JSX?',
          km: 'តើ Operator មួយណាដែលល្អបំផុតសម្រាប់រើស UI ២ ជម្រើសក្នុង JSX?'
        },
        options: [
          { id: '1', text: { en: 'Ternary operator (condition ? <A/> : <B/>)', km: 'Ternary operator (condition ? <A/> : <B/>)' }, isCorrect: true },
          { id: '2', text: { en: 'Switch statement', km: 'Switch statement' }, isCorrect: false }
        ],
        explanation: {
          en: 'Ternary operator allows concise inline conditional rendering in JSX.',
          km: 'Ternary operator អនុញ្ញាតឱ្យធ្វើ Conditional rendering យ៉ាងខ្លីក្នុង JSX។'
        }
      }
    ]
  },
  {
    id: 'react-6-2',
    slug: 'short-circuit-and-and-conditional-rendering',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: {
      en: '6.2 `&&` Short-Circuit Conditional Rendering',
      km: '៦.២ ការប្រើប្រាស់ `&&` Short-Circuit Conditional Rendering'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The logical `&&` operator lets you render an element ONLY if a condition evaluates to `true`. If the condition is `false`, React skips rendering it entirely.',
      km: 'Logical `&&` operator អនុញ្ញាតឱ្យអ្នក Render Element តែនៅពេលដែលលក្ខខណ្ឌស្មើ `true` ប៉ុណ្ណោះ។ បើលក្ខខណ្ឌស្មើ `false` React នឹងមិន Render អ្វីទាំងអស់។'
    },
    tutorial: {
      en: 'Short-Circuit Pattern:\n{unreadCount > 0 && <Badge count={unreadCount} />}\n\n⚠️ Pitfall Warning:\n{items.length && <List />} // If items.length is 0, React renders "0" on screen!\nFix: {items.length > 0 && <List />}',
      km: 'ទម្រង់ Short-Circuit:\n{unreadCount > 0 && <Badge count={unreadCount} />}\n\n⚠️ ប្រយ័ត្នបញ្ហា៖\n{items.length && <List />} // បើ items.length = 0, React នឹងបង្ហាញលេខ "0" លើអេក្រង់!\nដំណោះស្រាយ៖ {items.length > 0 && <List />}'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function NotificationBadge() {
  const [unreadCount, setUnreadCount] = React.useState(3);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-md font-bold text-white flex items-center gap-2">
          <span>📬 Inbox</span>
          {unreadCount > 0 && (
            <span className="px-2 py-0.5 bg-rose-500 text-white text-[10px] font-black rounded-full animate-pulse">
              {unreadCount} NEW
            </span>
          )}
        </h3>
        <button 
          onClick={() => setUnreadCount(0)}
          className="text-xs text-sky-400 hover:underline"
        >
          Mark all read
        </button>
      </div>
      <p className="text-xs text-slate-400">
        {unreadCount > 0 ? "You have unread notifications!" : "Inbox zero! All caught up."}
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<NotificationBadge />);`
    },
    realWorldExample: {
      title: {
        en: 'Inline Badges and Warning Alerts',
        km: 'ការបង្ហាញ Alert ឬ Badge ពេលមានលក្ខខណ្ឌ'
      },
      description: {
        en: 'Rendering unread message counters, error toasts, and loading spinners relies on `hasError && <ErrorBanner />`.',
        km: 'ការបង្ហាញ Unread counter, Error toast និង Loading spinner ប្រើប្រាស់ `hasError && <ErrorBanner />`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why is `{items.length > 0 && <List />}` safer than `{items.length && <List />}`?',
        km: 'ហេតុអ្វី `{items.length > 0 && <List />}` មានសុវត្ថិភាពជាង `{items.length && <List />}`?'
      },
      solution: `Because when items.length is 0, '0 && <List />' evaluates to 0, causing React to render the number 0 on screen.`
    },
    quizQuestions: [
      {
        id: 'r6-2-q1',
        question: {
          en: 'What does `{isVerified && <Badge />}` render when `isVerified` is false?',
          km: 'តើ `{isVerified && <Badge />}` បង្ហាញអ្វីពេល `isVerified` ស្មើ false?'
        },
        options: [
          { id: '1', text: { en: 'Nothing (false values are ignored by React)', km: 'មិនបង្ហាញអ្វីទាំងអស់ (React អោយរំលង false)' }, isCorrect: true },
          { id: '2', text: { en: 'Renders empty string', km: 'បង្ហាញ empty string' }, isCorrect: false }
        ],
        explanation: {
          en: 'React ignores boolean false values during rendering.',
          km: 'React មិនបង្ហាញតម្លៃ Boolean false លើ DOM ឡើយ។'
        }
      }
    ]
  },
  {
    id: 'react-6-3',
    slug: 'rendering-empty-state-ui-patterns',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: {
      en: '6.3 Rendering Empty State UI Patterns',
      km: '៦.៣ ការបង្កើត Empty State UI Patterns'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'An Empty State UI pattern gracefully informs users when a list or search result contains zero items, guiding them on what action to take next instead of leaving a blank screen.',
      km: 'Empty State UI Pattern បង្ហាញព័ត៌មានយ៉ាងសមរម្យទៅកាន់ User នៅពេលបញ្ជី ឬ Search result មិនមានទិន្នន័យ ដោយណែនាំសកម្មភាពបន្ទាប់ ជាជាងទុកឱ្យអេក្រង់ទទេស្អាត។'
    },
    tutorial: {
      en: 'Empty State Pattern:\nif (items.length === 0) {\n  return <EmptyStateIllustration message="No items found" />;\n}',
      km: 'ទម្រង់ Empty State:\nif (items.length === 0) {\n  return <EmptyStateIllustration message="No items found" />;\n}'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function EmptyListDemo() {
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-md font-bold text-white">Task Tracker</h3>
        <button 
          onClick={() => setTodos(["Complete React Lesson", "Submit Homework"])}
          className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-xs text-white rounded-lg"
        >
          Add Demo Tasks
        </button>
      </div>

      {todos.length === 0 ? (
        <div className="p-8 text-center bg-slate-950 border border-dashed border-slate-800 rounded-xl space-y-2">
          <div className="text-2xl">📭</div>
          <h4 className="text-sm font-bold text-slate-300">No Tasks Available</h4>
          <p className="text-xs text-slate-500">Your task list is empty. Click button above to populate!</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {todos.map((t, idx) => (
            <li key={idx} className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-emerald-400 font-mono">
              ✓ {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<EmptyListDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'E-commerce Empty Cart State',
        km: 'Empty Cart UI ក្នុង E-commerce'
      },
      description: {
        en: 'Shopping carts display an illustration with a "Start Shopping" button when `cartItems.length === 0`.',
        km: 'កន្ត្រកទំនិញបង្ហាញ រូបភាព និងប៊ូតុង "Start Shopping" នៅពេល `cartItems.length === 0`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why is providing an Empty State UI better for User Experience (UX)?',
        km: 'ហេតុអ្វីការបង្កើត Empty State UI ផ្តល់ UX ល្អជាង?'
      },
      solution: `Because it prevents user confusion by explaining why no content is displayed and providing an action button to resolve it.`
    },
    quizQuestions: [
      {
        id: 'r6-3-q1',
        question: {
          en: 'What UI pattern prevents users from thinking an application crashed when data arrays are empty?',
          km: 'តើ UI Pattern មួយណាការពារមិនឱ្យ User គិតថា App មាន Error ពេល Array ទទេ?'
        },
        options: [
          { id: '1', text: { en: 'Empty State Pattern with helpful text & call-to-action', km: 'Empty State Pattern ដែលមានអត្ថបទណែនាំ និង Call-to-action button' }, isCorrect: true },
          { id: '2', text: { en: 'Infinite loading spinner', km: 'Infinite loading spinner' }, isCorrect: false }
        ],
        explanation: {
          en: 'Empty States explain missing content clearly and provide clear user action.',
          km: 'Empty State ពន្យល់អំពីអវត្តមានទិន្នន័យយ៉ាងច្បាស់ និងផ្តល់សកម្មភាពបន្ត។'
        }
      }
    ]
  },

  // MODULE 7 — Lists & Keys
  {
    id: 'react-7-1',
    slug: 'rendering-arrays-with-map',
    moduleNumber: 7,
    lessonNumberInModule: 1,
    title: {
      en: '7.1 Rendering Arrays with `.map()`',
      km: '៧.១ ការបង្ហាញបញ្ជីទិន្នន័យ (Arrays) ដោយប្រើ `.map()`'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'In React, we transform data arrays into lists of JSX elements using the standard JavaScript `.map()` array method.',
      km: 'ក្នុង React យើងបំប្លែង Data Array ទៅជាបញ្ជីនៃ JSX Elements ដោយប្រើប្រាស់ JavaScript `.map()` method។'
    },
    tutorial: {
      en: 'List Mapping Syntax:\nconst items = ["Apple", "Banana", "Cherry"];\nreturn (\n  <ul>\n    {items.map((item, index) => (\n      <li key={index}>{item}</li>\n    ))}\n  </ul>\n);',
      km: 'ទម្រង់ List Mapping:\nconst items = ["Apple", "Banana", "Cherry"];\nreturn (\n  <ul>\n    {items.map((item, index) => (\n      <li key={index}>{item}</li>\n    ))}\n  </ul>\n);'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function FrameworkList() {
  const frameworks = [
    { id: 'f1', name: 'React.js', category: 'Library' },
    { id: 'f2', name: 'Next.js', category: 'Framework' },
    { id: 'f3', name: 'Vite', category: 'Build Tool' }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
      <h3 className="text-md font-bold text-white">Frontend Ecosystem</h3>
      <div className="space-y-2">
        {frameworks.map((fw) => (
          <div key={fw.id} className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center text-xs">
            <span className="font-bold text-sky-400">{fw.name}</span>
            <span className="px-2 py-0.5 bg-slate-800 text-slate-300 font-mono rounded text-[10px]">{fw.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FrameworkList />);`
    },
    realWorldExample: {
      title: {
        en: 'Dynamic Feed and Table Rows',
        km: 'ការបង្ហាញ Feed ឬ Table Rows'
      },
      description: {
        en: 'Rendering social media posts, product search cards, or database rows uses `.map()` over fetched API JSON arrays.',
        km: 'ការបង្ហាញ Post លើ Social Media, Product Search Cards ឬ Table Rows ប្រើប្រាស់ `.map()` លើ API Data។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which array method is used to transform an array of data into JSX elements in React?',
        km: 'តើ Array method មួយណាប្រើសម្រាប់បំប្លែង Data Array ទៅជា JSX Elements?'
      },
      solution: `.map()`
    },
    quizQuestions: [
      {
        id: 'r7-1-q1',
        question: {
          en: 'Why is `.map()` preferred over `.forEach()` for rendering lists in JSX?',
          km: 'ហេតុអ្វីបានជាគេប្រើយក `.map()` ជំនួសឱ្យ `.forEach()` សម្រាប់បង្ហាញ List ក្នុង JSX?'
        },
        options: [
          { id: '1', text: { en: '.map() returns a new array of JSX elements, whereas .forEach() returns undefined', km: '.map() ត្រឡប់ Array ថ្មីនៃ JSX elements ខណៈ .forEach() ត្រឡប់ undefined' }, isCorrect: true },
          { id: '2', text: { en: '.map() mutates the original array', km: '.map() កែប្រែ Array ដើម' }, isCorrect: false }
        ],
        explanation: {
          en: '.map() returns an array which React renders directly inside JSX.',
          km: '.map() ត្រឡប់ Array នៃ JSX ដែល React អាចយកទៅ Render បន្តបាន។'
        }
      }
    ]
  },
  {
    id: 'react-7-2',
    slug: 'why-key-prop-matters-common-mistakes',
    moduleNumber: 7,
    lessonNumberInModule: 2,
    title: {
      en: '7.2 Why `key` Matters (and Common Key Mistakes)',
      km: '៧.២ ហេតុអ្វីបានជា `key` សំខាន់ (និងកំហុសដែលជួបញឹកញាប់)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Keys give React elements a stable identity during reconciliation. When rendering dynamic lists, every item MUST have a unique `key` prop (preferably a database ID like `item.id`). Avoid using array index as keys if items can be reordered, inserted, or deleted.',
      km: 'Keys ផ្តល់អត្តសញ្ញាណរឹងមាំដល់ React Elements ពេលប្រៀបធៀប Diffing។ ពេល Render បញ្ជី dynamic គ្រប់ Item ទាំងអស់ត្រូវតែមាន `key` តែមួយគត់ (ដូចជា Database ID `item.id`)។ ជៀសវាងការប្រើប្រាស់ Array Index ជា Key បើសិនជា Item អាចលុប ឬ Re-order។'
    },
    tutorial: {
      en: 'Best Practice:\n{users.map(u => <UserCard key={u.id} user={u} />)} ✅ Unique stable ID!\n\nAnti-pattern:\n{users.map((u, index) => <UserCard key={index} user={u} />)} ❌ Buggy on reorder!',
      km: 'ទម្រង់ល្អបំផុត៖\n{users.map(u => <UserCard key={u.id} user={u} />)} ✅ Unique stable ID!\n\nទម្រង់មិនល្អ៖\n{users.map((u, index) => <UserCard key={index} user={u} />)} ❌ អាចមាន Bug ពេល Re-order!'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function KeyDemo() {
  const [tasks, setTasks] = React.useState([
    { id: 't1', text: 'Master React JSX' },
    { id: 't2', text: 'Learn State Hooks' },
    { id: 't3', text: 'Understand Diffing & Keys' }
  ]);

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
      <h3 className="text-md font-bold text-white">Stable Key Identification</h3>
      <div className="space-y-2">
        {tasks.map((t) => (
          <div key={t.id} className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center text-xs">
            <span className="text-slate-300 font-mono">{t.text}</span>
            <button 
              onClick={() => removeTask(t.id)}
              className="text-rose-400 hover:text-rose-300 text-[10px] font-bold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<KeyDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Reordering and DOM State Preservation',
        km: 'ការតម្រៀបបញ្ជី និង State របស់ Form inputs'
      },
      description: {
        en: 'Using array indices as keys causes form inputs inside list items to retain wrong values when items are deleted or reordered.',
        km: 'ការប្រើប្រាស់ Array Index ជា Key នាំឱ្យ Form inputs រក្សាតម្លៃខុស ពេល Item ត្រូវបានលុប ឬ Re-order។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why shouldn\'t array index be used as a key when list items can be reordered or deleted?',
        km: 'ហេតុអ្វីមិនគួរប្រើ Array Index ជា Key ពេល List អាចត្រឹមត្រូវតាមការ Re-order ឬ Delete?'
      },
      solution: `Because array indices change position when items are reordered/deleted, causing React to mismatch component state to the wrong DOM node.`
    },
    quizQuestions: [
      {
        id: 'r7-2-q1',
        question: {
          en: 'What is the best value to pass as the `key` prop when mapping a list of items from a database?',
          km: 'តើតម្លៃមួយណាដែលល្អបំផុតសម្រាប់ប្រើប្រាស់ជា `key` prop ពេល Mapping បញ្ជីទិន្នន័យពី Database?'
        },
        options: [
          { id: '1', text: { en: 'Unique item ID from the database (e.g. item.id)', km: 'Unique item ID ពី Database (ឧ. item.id)' }, isCorrect: true },
          { id: '2', text: { en: 'Math.random() generated on every render', km: 'Math.random() ដែលបង្កើតពេល Render' }, isCorrect: false }
        ],
        explanation: {
          en: 'Unique stable IDs allow React to track list item identity accurately across renders.',
          km: 'Unique stable ID អនុញ្ញាតឱ្យ React ស្គាល់អត្តសញ្ញាណ Item បានត្រឹមត្រូវលើគ្រប់ Render។'
        }
      }
    ]
  },
  {
    id: 'react-7-3',
    slug: 'rendering-list-of-components-with-props',
    moduleNumber: 7,
    lessonNumberInModule: 3,
    title: {
      en: '7.3 Rendering a List of Components with Props from Data',
      km: '៧.៣ ការបង្ហាញបញ្ជីនៃ Components ដោយប្រើប្រាស់ Props ពី Data'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Combining list mapping with custom components enables clean, modular code where each item in an array maps directly to a reusable component instance.',
      km: 'ការបូកបញ្ចូលការ Map បញ្ជីទិន្នន័យ ជាមួយ Custom Components ជួយឱ្យកូដស្អាត មានរបៀបរៀបរយ ដោយធាតុនីមួយៗនៃ Array ត្រូវ Mapping ផ្ទាល់ទៅកាន់ Component Instance។'
    },
    tutorial: {
      en: 'Component Mapping:\n{products.map(p => (\n  <ProductCard key={p.id} item={p} onSelect={handleSelect} />\n))}',
      km: 'ទម្រង់ Component Mapping:\n{products.map(p => (\n  <ProductCard key={p.id} item={p} onSelect={handleSelect} />\n))}'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function CourseItem({ title, hours, difficulty }) {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center">
      <div>
        <h4 className="text-sm font-bold text-white">{title}</h4>
        <span className="text-xs text-slate-400">⏱ {hours} Hours</span>
      </div>
      <span className="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-bold rounded-lg uppercase">
        {difficulty}
      </span>
    </div>
  );
}

function CourseList() {
  const courses = [
    { id: 'c1', title: 'HTML5 & CSS3 Masterclass', hours: 12, difficulty: 'Beginner' },
    { id: 'c2', title: 'JavaScript ES6 Complete Guide', hours: 25, difficulty: 'Intermediate' },
    { id: 'c3', title: 'React.js Architecture & Hooks', hours: 18, difficulty: 'Intermediate' }
  ];

  return (
    <div className="space-y-3">
      {courses.map(c => (
        <CourseItem 
          key={c.id} 
          title={c.title} 
          hours={c.hours} 
          difficulty={c.difficulty} 
        />
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CourseList />);`
    },
    realWorldExample: {
      title: {
        en: 'Product Catalog Grids',
        km: 'ការបង្ហាញ Grid ទំនិញក្នុង E-Commerce'
      },
      description: {
        en: 'E-commerce product grids iterate over fetched arrays using `products.map(item => <ProductCard key={item.id} product={item} />)`.',
        km: 'បញ្ជីទំនិញក្នុង E-commerce ប្រើប្រាស់ `products.map(item => <ProductCard key={item.id} product={item} />)`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What prop must be explicitly passed to `<CourseItem />` inside `.map()` to prevent React key warnings?',
        km: 'តើ Prop មួយណាដែលត្រូវផ្ញើទៅ `<CourseItem />` ក្នុង `.map()` ដើម្បីកុំឱ្យមាន Warning?'
      },
      solution: `key prop (e.g. key={item.id})`
    },
    quizQuestions: [
      {
        id: 'r7-3-q1',
        question: {
          en: 'Where should the `key` prop be placed when mapping an array to custom child components?',
          km: 'តើ `key` prop ត្រូវដាក់នៅឯណា ពេល Mapping Array ទៅជា Custom child components?'
        },
        options: [
          { id: '1', text: { en: 'Directly on the outermost element/component inside the .map() callback', km: 'នៅលើ Element/Component ខាងក្រៅបង្អស់ក្នុង .map() callback' }, isCorrect: true },
          { id: '2', text: { en: 'Inside the child component\'s internal root div', km: 'នៅខាងក្នុង root div របស់ child component' }, isCorrect: false }
        ],
        explanation: {
          en: 'The key prop belongs on the element created directly inside the map iteration.',
          km: 'key prop ត្រូវដាក់លើ Element ណាដែលបង្កើតផ្ទាល់ក្នុង map iteration។'
        }
      }
    ]
  },

  // MODULE 8 — Forms in React
  {
    id: 'react-8-1',
    slug: 'controlled-form-inputs-text-checkbox-select',
    moduleNumber: 8,
    lessonNumberInModule: 1,
    title: {
      en: '8.1 Controlled Form Inputs (Text, Checkbox, Select)',
      km: '៨.១ Controlled Form Inputs (Text, Checkbox, Select)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Handling multiple input types in React requires binding text values to `e.target.value`, checkboxes to `e.target.checked`, and select dropdowns to `e.target.value`.',
      km: 'ការគ្រប់គ្រង Form Input ប្រភេទផ្សេងៗក្នុង React ត្រូវការភ្ជាប់ Text value ទៅ `e.target.value`, Checkbox ទៅ `e.target.checked`, និង Select dropdown ទៅ `e.target.value`។'
    },
    tutorial: {
      en: 'Binding Reference:\n- Text Input: <input type="text" value={name} onChange={e => setName(e.target.value)} />\n- Checkbox:   <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />\n- Select:     <select value={role} onChange={e => setRole(e.target.value)}></select>',
      km: 'ការភ្ជាប់ប្រភេទទិន្នន័យ៖\n- Text Input: <input type="text" value={name} onChange={e => setName(e.target.value)} />\n- Checkbox:   <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />\n- Select:     <select value={role} onChange={e => setRole(e.target.value)}></select>'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function FormInputsDemo() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    role: "Developer",
    acceptTerms: false
  });

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h3 className="text-md font-bold text-white">Multi-Input Control</h3>
      
      <div className="space-y-3 text-xs">
        <div>
          <label className="text-slate-400 block mb-1">Full Name:</label>
          <input 
            type="text" 
            value={formData.fullName} 
            onChange={e => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-700 text-white rounded-xl"
          />
        </div>

        <div>
          <label className="text-slate-400 block mb-1">Role:</label>
          <select 
            value={formData.role} 
            onChange={e => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-700 text-white rounded-xl"
          >
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Product Manager</option>
          </select>
        </div>

        <label className="flex items-center gap-2 cursor-pointer text-slate-300">
          <input 
            type="checkbox" 
            checked={formData.acceptTerms} 
            onChange={e => setFormData({ ...formData, acceptTerms: e.target.checked })}
            className="accent-indigo-500 rounded"
          />
          <span>I accept terms & conditions</span>
        </label>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl text-[11px] font-mono text-emerald-400">
        Form State: {JSON.stringify(formData)}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FormInputsDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'User Registration Forms',
        km: 'ទម្រង់បែបបទចុះឈ្មោះប្រវត្តិរូប'
      },
      description: {
        en: 'Registration portals bind state objects to multi-input forms to submit complete payloads to backend API endpoints.',
        km: 'ទម្រង់ចុះឈ្មោះព័ត៌មានភ្ជាប់ State Object ទៅកាន់ Inputs ច្រើនដើម្បីផ្ញើ Payload ទៅកាន់ Backend API។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which property on `e.target` gives the boolean state of a checkbox input?',
        km: 'តើ Property មួយណាលើ `e.target` ដែលផ្តល់តម្លៃ boolean របស់ Checkbox?'
      },
      solution: `e.target.checked`
    },
    quizQuestions: [
      {
        id: 'r8-1-q1',
        question: {
          en: 'How do you extract the value of a checkbox input inside its onChange handler?',
          km: 'តើត្រូវទាញយករ៉ាប់រងតម្លៃ Checkbox ក្នុង onChange handler ដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'e.target.checked', km: 'e.target.checked' }, isCorrect: true },
          { id: '2', text: { en: 'e.target.value', km: 'e.target.value' }, isCorrect: false }
        ],
        explanation: {
          en: 'Checkboxes store their toggle state in e.target.checked.',
          km: 'Checkbox រក្សាទុកតម្លៃ True/False ក្នុង e.target.checked។'
        }
      }
    ]
  },
  {
    id: 'react-8-2',
    slug: 'handling-form-submission',
    moduleNumber: 8,
    lessonNumberInModule: 2,
    title: {
      en: '8.2 Handling Form Submission (`e.preventDefault()`)',
      km: '៨.២ ការគ្រប់គ្រង Form Submission (`e.preventDefault()`)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'In single-page React apps, submitting a `<form>` triggers browser page reloads by default. You MUST call `e.preventDefault()` inside the `onSubmit` handler to stop browser reloads and handle submission asynchronously via JavaScript.',
      km: 'ក្នុង Single-page React app, ការ Submit `<form>` នឹងធ្វើឱ្យ Browser Reload ទំព័រដោយស្វ័យប្រវត្តិ។ អ្នកត្រូវតែហៅ `e.preventDefault()` ក្នុង `onSubmit` handler ដើម្បីឃាត់ការ Reload ទំព័រ ហើយចាត់ចែងទិន្នន័យតាម JavaScript។'
    },
    tutorial: {
      en: 'Form Submit Pattern:\nconst handleSubmit = (e) => {\n  e.preventDefault(); // 🛑 Stop browser full reload!\n  console.log("Submitting state payload:", data);\n};\n<form onSubmit={handleSubmit}>...</form>',
      km: 'ទម្រង់ Form Submit:\nconst handleSubmit = (e) => {\n  e.preventDefault(); // 🛑 ឃាត់ការ Full reload របស់ Browser!\n  console.log("Submitting state payload:", data);\n};\n<form onSubmit={handleSubmit}>...</form>'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function FormSubmitDemo() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h3 className="text-md font-bold text-white">Newsletter Subscription</h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="text-xs text-slate-400 block mb-1">Email Address:</label>
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            placeholder="developer@example.com"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-700 text-xs text-white rounded-xl"
            required
          />
        </div>
        <button 
          type="submit"
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition"
        >
          Subscribe Now
        </button>
      </form>

      {submitted && (
        <div className="p-3 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs rounded-xl font-mono">
          ✓ Subscribed successfully: {email}
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FormSubmitDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Async API Form Posting',
        km: 'ការផ្ញើ Form ទៅកាន់ API'
      },
      description: {
        en: 'Form handlers prevent default reload, send `fetch("/api/login", { body })` requests, and transition UI to loading states.',
        km: 'Form handlers ឃាត់ការ Reload, ផ្ញើ `fetch()` request និងបង្ហាញ Loading state លើ UI។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What method must be called on the event object `e` inside a form submission handler?',
        km: 'តើ Method អ្វីត្រូវហៅលើ Event Object `e` ក្នុង Form submission handler?'
      },
      solution: `e.preventDefault()`
    },
    quizQuestions: [
      {
        id: 'r8-2-q1',
        question: {
          en: 'Why is `e.preventDefault()` necessary inside a React form `onSubmit` handler?',
          km: 'ហេតុអ្វីបានជា `e.preventDefault()` ចាំបាច់ក្នុង React form `onSubmit` handler?'
        },
        options: [
          { id: '1', text: { en: 'It prevents the browser from refreshing the entire page on form submit', km: 'វាការពារមិនឱ្យ Browser Refresh ទំព័រទាំងមូលពេល Submit' }, isCorrect: true },
          { id: '2', text: { en: 'It clears form input fields automatically', km: 'វាលុបទិន្នន័យ Input ស្វ័យប្រវត្តិ' }, isCorrect: false }
        ],
        explanation: {
          en: 'e.preventDefault() cancels standard HTTP page GET/POST form navigation.',
          km: 'e.preventDefault() លុបចោលការធ្វើ Navigation Refresh ធម្មតារបស់ Browser HTML Form។'
        }
      }
    ]
  },
  {
    id: 'react-8-3',
    slug: 'basic-client-side-validation-patterns',
    moduleNumber: 8,
    lessonNumberInModule: 3,
    title: {
      en: '8.3 Basic Client-Side Validation Patterns',
      km: '៨.៣ គំរូការធ្វើ Client-Side Form Validation'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Client-side validation gives users instant feedback before submitting forms. You can validate state inside submit handlers or dynamically on change, storing error messages in dedicated state.',
      km: 'Client-side validation ផ្តល់ព័ត៌មានកែលម្អភ្លាមៗទៅកាន់ User មុនពេល Submit Form។ អ្នកអាចធ្វើ Validation ពេល Submit ឬពេល Change ដោយរក្សាទុកសារ Error ក្នុង State។'
    },
    tutorial: {
      en: 'Validation Pattern:\nconst [error, setError] = useState("");\nif (password.length < 8) {\n  setError("Password must be at least 8 characters!");\n  return;\n}',
      km: 'ទម្រង់ Validation:\nconst [error, setError] = useState("");\nif (password.length < 8) {\n  setError("Password ត្រូវមានយ៉ាងតិច 8 តួអក្សរ!");\n  return;\n}'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function FormValidationDemo() {
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState("");

  const handleValidation = (e) => {
    e.preventDefault();
    if (pass.length < 6) {
      setError("Password must be at least 6 characters long!");
    } else {
      setError("");
      alert("Password validation passed! ✅");
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h3 className="text-md font-bold text-white">Password Validation</h3>

      <form onSubmit={handleValidation} className="space-y-3">
        <div>
          <label className="text-xs text-slate-400 block mb-1">New Password:</label>
          <input 
            type="password" 
            value={pass} 
            onChange={e => setPass(e.target.value)}
            placeholder="Min 6 characters..."
            className="w-full px-3 py-2 bg-slate-950 border border-slate-700 text-xs text-white rounded-xl"
          />
        </div>

        {error && (
          <div className="p-2 bg-rose-500/20 border border-rose-500/30 text-rose-400 text-xs rounded-xl">
            ⚠️ {error}
          </div>
        )}

        <button 
          type="submit"
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition"
        >
          Validate Password
        </button>
      </form>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FormValidationDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Real-time Password Strength Checkers',
        km: 'ការពិនិត្យកម្រិតសុវត្ថិភាព ពាក្យសម្ងាត់'
      },
      description: {
        en: 'Form libraries like Formik or React Hook Form enforce schema validation (Zod/Yup) to validate email formats and password complexity before hitting APIs.',
        km: 'Form libraries ដូចជា React Hook Form ប្រើប្រាស់ Zod ឬ Yup validation schemas សម្រាប់ត្រួតពិនិត្យ Email & Password។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write an `if` condition checking if `email` state contains an `@` character.',
        km: 'សរសេរ `if` condition ពិនិត្យមើលថាតើ `email` state មានសញ្ញា `@` ឬទេ?'
      },
      solution: `if (!email.includes("@")) { setError("Invalid email address!"); }`
    },
    quizQuestions: [
      {
        id: 'r8-3-q1',
        question: {
          en: 'Where are validation error messages stored to display conditionally on the UI?',
          km: 'តើសារ Error validation គួររក្សាទុកនៅឯណាដើម្បីបង្ហាញលើ UI តាមលក្ខខណ្ឌ?'
        },
        options: [
          { id: '1', text: { en: 'In component state variables (e.g. const [error, setError] = useState(""))', km: 'ក្នុង Component State (ឧ. const [error, setError] = useState(""))' }, isCorrect: true },
          { id: '2', text: { en: 'In localStorage permanently', km: 'ក្នុង localStorage ជារៀងរហូត' }, isCorrect: false }
        ],
        explanation: {
          en: 'Storing errors in state triggers automatic re-renders when errors occur or clear.',
          km: 'ការរក្សាទុក Error ក្នុង State ធ្វើឱ្យ UI អាប់ដេតបង្ហាញ ឬលុប Error ស្វ័យប្រវត្តិ។'
        }
      }
    ]
  }
];
