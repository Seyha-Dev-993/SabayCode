import { FrontendLesson } from '../types/frontendClass';

export const REACT_LESSONS_PART1: FrontendLesson[] = [
  // MODULE 1 — ការណែនាំអំពី React & ការដំឡើង
  {
    id: 'react-1-1',
    slug: 'what-is-react-virtual-dom',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: {
      en: '1.1 What React is & Virtual DOM Architecture',
      km: '១.១ អ្វីទៅជា React & ស្ថាបត្យកម្ម Virtual DOM'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'React is an open-source JavaScript library created by Meta for building user interfaces with reusable components. Instead of modifying the browser DOM directly, React uses an in-memory Virtual DOM to compute changes efficiently before batch-updating the screen.',
      km: 'React គឺជា JavaScript Library ផ្អែកលើប្រភពបើកចំហ (Open-source) បង្កើតដោយ Meta សម្រាប់សាងសង់ User Interface ដោយប្រើប្រាស់ Reusable Components។ ជាជាងការកែប្រែ HTML DOM ផ្ទាល់ វប្រើប្រាស់ Virtual DOM នៅក្នុង Memory ដើម្បីគណនាភាពខុសគ្នានៃកូដយ៉ាងមានប្រសិទ្ធភាព មុនពេលបាញ់ Render ទៅអេក្រង់។'
    },
    tutorial: {
      en: '1. React splits complex UIs into independent, composable components.\n2. When state changes, React creates a new Virtual DOM tree.\n3. Diffing Algorithm compares the new tree with the previous snapshot.\n4. Only modified elements are updated in the real browser DOM.',
      km: '១. React បំបែក UI ដ៏ស្មុគស្មាញទៅជា Components តូចៗដែលឯករាជ្យពីគ្នា។\n២. នៅពេល State ផ្លាស់ប្តូរ React បង្កើត Virtual DOM Tree ថ្មីក្នុងមេម៉ូរី។\n៣. Diffing Algorithm ធ្វើការប្រៀបធៀប Tree ថ្មីជាមួយ Snapshot ចាស់។\n៤. មានតែ HTML Element ណាដែលប្រែប្រួលពិតប្រាកដប៉ុណ្ណោះដែលត្រូវ Re-render លើ DOM។'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function Header() {
  return (
    <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg border border-slate-800 text-center space-y-2">
      <h1 className="text-2xl font-black text-sky-400">⚛️ Welcome to React.js</h1>
      <p className="text-xs text-slate-400">Declarative, Component-Based UI Development</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Header />);`
    },
    realWorldExample: {
      title: {
        en: 'Virtual DOM Performance at Scale',
        km: 'ប្រសិទ្ធភាព Virtual DOM ក្នុង Web Apps ធំៗ'
      },
      description: {
        en: 'Platforms like Facebook and Netflix render thousands of interactive updates per second without lagging, thanks to Virtual DOM reconciliation.',
        km: 'កម្មវិធីធំៗដូចជា Facebook និង Netflix អាច Render ព័ត៌មានរាប់ពាន់ដងក្នុងមួយវិនាទីដោយមិនស្ទះ អរគុណដល់ Virtual DOM Diffing Algorithm។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Update the Header component to include a subtitle element with your name.',
        km: 'ចូរអាប់ដេត Header Component ដោយបន្ថែម Subtitle element បង្ហាញឈ្មោះរបស់អ្នក។'
      },
      solution: `function Header() {
  return (
    <div>
      <h1>⚛️ Welcome to React.js</h1>
      <p>Built by Sokha</p>
    </div>
  );
}`
    },
    quizQuestions: [
      {
        id: 'r1-1-q1',
        question: {
          en: 'Why does React use a Virtual DOM instead of updating the real DOM directly?',
          km: 'ហេតុអ្វីបានជា React ប្រើប្រាស់ Virtual DOM ជំនួសឱ្យការកែប្រែ Real DOM ផ្ទាល់?'
        },
        options: [
          { id: '1', text: { en: 'Virtual DOM updates are faster because in-memory operations avoid expensive DOM reflows', km: 'ការគណនាលើ Memory លឿនជាង និងកាត់បន្ថយការ Reflow លើ Browser DOM' }, isCorrect: true },
          { id: '2', text: { en: 'Browser DOM cannot process HTML tags', km: 'Browser DOM មិនអាចដំណើរការ HTML tags បាន' }, isCorrect: false }
        ],
        explanation: {
          en: 'In-memory DOM diffing minimizes actual browser reflow and repaint costs.',
          km: 'ការប្រៀបធៀប Virtual DOM ក្នុង Memory ជួយកាត់បន្ថយចំណាយនៃការ Repaint និង Reflow របស់ Browser។'
        }
      }
    ]
  },
  {
    id: 'react-1-2',
    slug: 'setting-up-vite-react',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: {
      en: '1.2 Setting Up a Project with Vite (`npm create vite@latest`)',
      km: '១.២ ការបង្កើត Project React ជាមួយ Vite'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Vite is a modern, ultra-fast frontend build tool that replaces legacy Create React App. It leverages native ES Modules and modern bundlers (esbuild and Rollup) to provide instant server startup and instant HMR.',
      km: 'Vite គឺជា Build Tool ជំនាន់ថ្មីដែលមានល្បឿនលឿនបំផុតសម្រាប់ជំនួស Create React App ចាស់។ វាប្រើប្រាស់ Native ES Modules និង esbuild ធ្វើឱ្យ Dev Server បើកភ្លាមៗ និងធ្វើ HMR (Hot Module Replacement) ភ្លាមៗ។'
    },
    tutorial: {
      en: 'Terminal Commands to initialize Vite React:\n1. npm create vite@latest my-react-app -- --template react\n2. cd my-react-app\n3. npm install\n4. npm run dev',
      km: 'ពាក្យបញ្ជាក្នុង Terminal សម្រាប់បង្កើត Vite React Project:\n១. npm create vite@latest my-react-app -- --template react\n២. cd my-react-app\n៣. npm install\n៤. npm run dev'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function ViteSetupCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3 font-mono text-xs">
      <div className="text-emerald-400 font-bold">$ npm create vite@latest my-app -- --template react</div>
      <div className="p-3 bg-slate-950 rounded-xl text-slate-300">
        ⚡ Vite v5.0 ready in 180ms<br />
        ➜ Local: http://localhost:5173/
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ViteSetupCard />);`
    },
    realWorldExample: {
      title: {
        en: 'Vite vs Create React App',
        km: 'ការប្រៀបធៀប Vite និង CRA'
      },
      description: {
        en: 'Standard industry React teams use Vite because Vite dev server boots up in milliseconds compared to CRA which takes tens of seconds.',
        km: 'ក្រុមហ៊ុនបច្ចេកវិទ្យាប្រើប្រាស់ Vite ព្រោះ Dev Server ដំណើរការក្នុងរយ:ពេល milliseconds ខណៈ CRA ចាយពេលរាប់សិបវិនាទី។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What command is used to start the local development server in a Vite React project?',
        km: 'តើពាក្យបញ្ជាអ្វីសម្រាប់បើក Dev Server ក្នុង Vite React Project?'
      },
      solution: `npm run dev`
    },
    quizQuestions: [
      {
        id: 'r1-2-q1',
        question: {
          en: 'Why is Vite faster than Webpack-based Create React App during local development?',
          km: 'ហេតុអ្វី Vite មានល្បឿនលឿនជាង Webpack-based CRA ក្នុងអំឡុងពេល Development?'
        },
        options: [
          { id: '1', text: { en: 'Vite serves source code over native ES modules without bundling everything upfront', km: 'Vite បញ្ជូន Source code តាម Native ES Modules ដោយមិនចាំបាច់ Bundle ទាំងអស់មុនឡើយ' }, isCorrect: true },
          { id: '2', text: { en: 'Vite bypasses JavaScript execution completely', km: 'Vite រំលងការ Run JavaScript ទាំងស្រុង' }, isCorrect: false }
        ],
        explanation: {
          en: 'Vite uses browser-native ESM so only updated modules are transformed on demand.',
          km: 'Vite ប្រើប្រាស់ Native ESM របស់ Browser ដូច្នេះវាស្វែងរក និង Transform តែ Module ដែលបានកែប្រែប៉ុណ្ណោះ។'
        }
      }
    ]
  },
  {
    id: 'react-1-3',
    slug: 'react-project-structure-overview',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: {
      en: '1.3 Project Structure Overview (`src/`, `App.jsx`, `main.jsx`)',
      km: '១.៣ រចនាសម្ព័ន្ធ Project របស់ React (`src/`, `App.jsx`, `main.jsx`)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A standard Vite React project contains `index.html` at the root, `src/main.jsx` as the JavaScript entry point initializing ReactDOM root, and `src/App.jsx` as the primary root component.',
      km: 'Vite React Project មាន `index.html` នៅ Root folder, `src/main.jsx` ជា Entry point សម្រាប់បើក ReactDOM root, និង `src/App.jsx` ជា Root Component ធំជាងគេនៃកម្មវិធី។'
    },
    tutorial: {
      en: 'Structure Map:\nindex.html -> <div id="root"></div>\nmain.jsx   -> ReactDOM.createRoot(document.getElementById("root")).render(<App />)\nApp.jsx    -> export default function App() { return <div /> }',
      km: 'ចំណុចតភ្ជាប់កូដ៖\nindex.html -> <div id="root"></div>\nmain.jsx   -> ReactDOM.createRoot(document.getElementById("root")).render(<App />)\nApp.jsx    -> export default function App() { return <div /> }'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function App() {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
      <div className="text-xs text-indigo-400 font-mono font-bold">src/App.jsx</div>
      <h2 className="text-xl font-extrabold text-white">Root Application Component</h2>
      <p className="text-xs text-slate-400">All sub-components are nested inside App.jsx</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);`
    },
    realWorldExample: {
      title: {
        en: 'Modular Component Architecture',
        km: 'ការរៀបចំ Folder ក្នុង Project ជាក់ស្តែង'
      },
      description: {
        en: 'In professional apps, developers organize sub-components inside `src/components/`, pages inside `src/pages/`, and shared logic in `src/hooks/`.',
        km: 'ក្នុង Project ជាក់ស្តែង Developers រៀបចំ Sub-components ក្នុង `src/components/`, Pages ក្នុង `src/pages/`, និង Custom hooks ក្នុង `src/hooks/`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'In which file is the `ReactDOM.createRoot()` method typically invoked in a Vite React project?',
        km: 'តើ Method `ReactDOM.createRoot()` ត្រូវហៅក្នុង File មួយណា?'
      },
      solution: `src/main.jsx`
    },
    quizQuestions: [
      {
        id: 'r1-3-q1',
        question: {
          en: 'Which file contains the target `<div id="root"></div>` element where React mounts?',
          km: 'តើ File មួយណាដែលមាន Element `<div id="root"></div>` សម្រាប់ React Mount ចូល?'
        },
        options: [
          { id: '1', text: { en: 'index.html', km: 'index.html' }, isCorrect: true },
          { id: '2', text: { en: 'App.jsx', km: 'App.jsx' }, isCorrect: false }
        ],
        explanation: {
          en: 'index.html is the root HTML document housing the div#root mount point.',
          km: 'index.html គឺជា Root HTML Document ដែលមាន div#root សម្រាប់ Mount React App។'
        }
      }
    ]
  },

  // MODULE 2 — JSX
  {
    id: 'react-2-1',
    slug: 'what-is-jsx-compilation',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: {
      en: '2.1 What JSX is & How it Compiles to JavaScript',
      km: '២.១ អ្វីទៅជា JSX & ការបំប្លែងទៅជា JavaScript'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup inside JavaScript files. Under the hood, Babel/esbuild compiles JSX elements into `React.createElement()` calls.',
      km: 'JSX (JavaScript XML) គឺជា Syntax Extension របស់ JavaScript ដែលអនុញ្ញាតឱ្យយើងសរសេរ Markup ដូច HTML នៅក្នុង JavaScript files។ នៅខាងក្រោយ ខ្នងកូដ JSX ត្រូវ compiling ដោយ Babel ឬ esbuild ទៅជា `React.createElement()`។'
    },
    tutorial: {
      en: 'JSX Syntax:\nconst element = <h1 className="title">Hello</h1>;\n\nCompiles To:\nconst element = React.createElement("h1", { className: "title" }, "Hello");',
      km: 'ទម្រង់ JSX Syntax:\nconst element = <h1 className="title">Hello</h1>;\n\nបំប្លែងទៅជាកូដដើម៖\nconst element = React.createElement("h1", { className: "title" }, "Hello");'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function JSXDemo() {
  const heading = <h2 className="text-xl font-bold text-sky-400">JSX Compiled Output</h2>;
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
      {heading}
      <p className="text-xs text-slate-300">This HTML markup is actually compiled to React.createElement()!</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<JSXDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Type-Safe Markup with JSX',
        km: 'ការសរសេរ Markup ប្រកបដោយ Type Safety'
      },
      description: {
        en: 'Because JSX is valid JavaScript, IDEs provide instant auto-completion, linting, and type checking for UI markup.',
        km: 'ដោយសារ JSX គឺជា JavaScript ពិត ប្រព័ន្ធ IDE ផ្តល់ការ Auto-complete និង Linting ពិនិត្យ Error Markup ភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write the compiled equivalent of `<p>Hello React</p>` using React.createElement.',
        km: 'សរសេរកូដសមមូលដែលបាន Compile រួចនៃ `<p>Hello React</p>` ដោយប្រើ React.createElement។'
      },
      solution: `React.createElement("p", null, "Hello React")`
    },
    quizQuestions: [
      {
        id: 'r2-1-q1',
        question: {
          en: 'What does JSX stand for?',
          km: 'តើ JSX មកពីពាក្យពេញអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'JavaScript XML', km: 'JavaScript XML' }, isCorrect: true },
          { id: '2', text: { en: 'Java Syntax Extension', km: 'Java Syntax Extension' }, isCorrect: false }
        ],
        explanation: {
          en: 'JSX stands for JavaScript XML.',
          km: 'JSX តំណាងឱ្យ JavaScript XML។'
        }
      }
    ]
  },
  {
    id: 'react-2-2',
    slug: 'embedding-expressions-in-jsx',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: {
      en: '2.2 Embedding Expressions in JSX (`{ }`)',
      km: '២.២ ការប្រើប្រាស់ JavaScript Expressions ក្នុង JSX (`{ }`)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'You can embed any valid JavaScript expression inside JSX by wrapping it in curly braces `{}`. This includes variables, function calls, arithmetic calculations, and ternary conditionals.',
      km: 'អ្នកអាចប្រើប្រាស់ JavaScript Expression ណាក៏បានក្នុង JSX ដោយច្រកវាក្នុងសញ្ញាវង់ក្រចក `{}`។ វាអាចជា Variables, Function Calls, ការគណនា និង Ternary Conditionals។'
    },
    tutorial: {
      en: 'Examples:\n1. Variable: {userName}\n2. Calculation: {price * 1.1}\n3. Function Call: {formatDate(new Date())}\n4. Ternary: {isLoggedIn ? "Welcome" : "Please Login"}',
      km: 'ឧទាហរណ៍៖\n១. Variable: {userName}\n២. Calculation: {price * 1.1}\n៣. Function Call: {formatDate(new Date())}\n៤. Ternary: {isLoggedIn ? "Welcome" : "Please Login"}'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function ExpressionDemo() {
  const user = { name: "Sokha", role: "Frontend Engineer", age: 24 };
  const itemsCount = 5;

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
      <h3 className="text-lg font-bold text-white">Developer: {user.name.toUpperCase()}</h3>
      <p className="text-xs text-indigo-400 font-mono">Role: {user.role} | Age: {user.age}</p>
      <div className="p-3 bg-slate-950 rounded-xl text-xs text-emerald-400 font-mono">
        Total Pending Tasks: {itemsCount * 2}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ExpressionDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Dynamic Data Interpolation',
        km: 'ការបង្ហាញទិន្នន័យ Dynamic ក្នុង UI'
      },
      description: {
        en: 'Displaying dynamic values like user account balances, current timestamps, or localized strings relies on JSX curly brace expression interpolation.',
        km: 'ការបង្ហាញទិន្នន័យប្រែប្រួលដូចជា សមតុល្យគណនី កាលបរិច្ឆេទ ឬឈ្មោះប្រវត្តិរូប គឺប្រើប្រាស់ JSX `{}` Interpolation។'
      }
    },
    practiceExercise: {
      question: {
        en: 'How do you render the result of multiplying `score` by 2 inside a JSX `<span>`?',
        km: 'តើត្រូវ Render លទ្ធផលគុណ `score` នឹង 2 ក្នុង JSX `<span>` ដោយរបៀបណា?'
      },
      solution: `<span>{score * 2}</span>`
    },
    quizQuestions: [
      {
        id: 'r2-2-q1',
        question: {
          en: 'Which syntax allows inserting dynamic JavaScript expressions inside JSX?',
          km: 'តើ Syntax មួយណាសម្រាប់បញ្ចូល JavaScript Expressions ក្នុង JSX?'
        },
        options: [
          { id: '1', text: { en: 'Curly braces { }', km: 'សញ្ញាវង់ក្រចក { }' }, isCorrect: true },
          { id: '2', text: { en: 'Double quotes " "', km: 'សញ្ញាសម្រង់ " "' }, isCorrect: false }
        ],
        explanation: {
          en: 'Curly braces {} evaluate JavaScript expressions directly inside JSX.',
          km: 'សញ្ញាវង់ក្រចក {} ត្រូវប្រើដើម្បីគណនា JavaScript Expression ក្នុង JSX។'
        }
      }
    ]
  },
  {
    id: 'react-2-3',
    slug: 'jsx-rules-class-name-fragments',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: {
      en: '2.3 JSX Rules (`className`, Single Root Element, Closing Tags)',
      km: '២.៣ ច្បាប់សំខាន់ៗនៃ JSX (`className`, Single Root, Closing Tags)'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'JSX enforces three core rules: 1) Must return a single root element (or Fragment `<>...</>`), 2) Close all tags explicitly (e.g. `<img />`, `<br />`), 3) Use camelCase HTML attributes like `className` instead of `class` and `htmlFor` instead of `for`.',
      km: 'JSX មានច្បាប់សំខាន់៣៖ ១) ត្រូវមាន Root Element តែមួយ (ឬប្រើ Fragment `<>...</>`), ២) ត្រូវបិទ Tag ទាំងអស់ (ដូចជា `<img />`, `<br />`), ៣) ប្រើ CamelCase attributes ដូចជា `className` ជំនួស `class` និង `htmlFor` ជំនួស `for`។'
    },
    tutorial: {
      en: 'Rule Summary:\n- Single Root: return (<><div>1</div><div>2</div></>);\n- Class Name: <div className="card"></div>\n- Self-closing: <input type="text" />',
      km: 'សង្ខេបច្បាប់៖\n- Single Root: return (<><div>1</div><div>2</div></>);\n- Class Name: <div className="card"></div>\n- Self-closing: <input type="text" />'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function JSXRulesDemo() {
  return (
    <React.Fragment>
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
        <h3 className="text-md font-bold text-emerald-400">✅ Valid JSX Fragment Root</h3>
        <label htmlFor="user-input" className="text-xs text-slate-300 block">Enter Name:</label>
        <input id="user-input" type="text" placeholder="Self-closing tag..." className="px-3 py-2 bg-slate-950 border border-slate-700 text-xs text-white rounded-xl w-full" />
      </div>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<JSXRulesDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Avoiding Unnecessary DOM Wrapper Nodes',
        km: 'ការជៀសវាងបង្កើត Extra DOM Nodes ជាមួយ Fragments'
      },
      description: {
        en: 'Using React Fragments (`<>...</>`) groups child elements without introducing extra `<div>` elements into the actual DOM hierarchy.',
        km: 'ការប្រើ React Fragments (`<>...</>`) ជួយប្រមូលផ្តុំ Child elements ដោយមិនចាំបាច់បង្កើត `<div>` ឥតប្រយោជន៍ក្នុង DOM Tree។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why is `className` used instead of `class` in JSX?',
        km: 'ហេតុអ្វីបានជាគេប្រើ `className` ជំនួសឱ្យ `class` ក្នុង JSX?'
      },
      solution: `Because 'class' is a reserved keyword in JavaScript.`
    },
    quizQuestions: [
      {
        id: 'r2-3-q1',
        question: {
          en: 'Which component tag allows returning multiple siblings without adding a wrapper div to the DOM?',
          km: 'តើ Tag មួយណាអនុញ្ញាតឱ្យត្រឡប់ Siblings ច្រើនដោយមិនបាច់ថែម Wrapper div ចូល DOM?'
        },
        options: [
          { id: '1', text: { en: '<React.Fragment> or <>...</>', km: '<React.Fragment> ឬ <>...</>' }, isCorrect: true },
          { id: '2', text: { en: '<div root>', km: '<div root>' }, isCorrect: false }
        ],
        explanation: {
          en: 'React Fragments let you group elements without adding extra nodes.',
          km: 'React Fragment ជួយប្រមូលផ្តុំ Elements ដោយមិនបង្កើត DOM node ថ្មីឡើយ។'
        }
      }
    ]
  },

  // MODULE 3 — Components & Props
  {
    id: 'react-3-1',
    slug: 'function-components-basics',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: {
      en: '3.1 Function Components',
      km: '៣.១ ការបង្កើត Function Components'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A React Function Component is a plain JavaScript function that accepts optional props as input and returns JSX markup describing what should appear on the screen. Component names MUST start with a capital letter.',
      km: 'React Function Component គឺជា JavaScript Function ធម្មតាដែលទទួល Props និងត្រឡប់ JSX សម្រាប់បង្ហាញលើអេក្រង់។ ឈ្មោះរបស់ Component ត្រូវតែចាប់ផ្តើមដោយអក្សរធំ (Capital Letter) ជានិច្ច។'
    },
    tutorial: {
      en: 'Syntax Rules:\n1. Capitalized name: function UserProfile() { ... }\n2. Return JSX elements\n3. Render as JSX tag: <UserProfile />',
      km: 'ច្បាប់នៃការបង្កើត៖\n១. ឈ្មោះអក្សរធំ៖ function UserProfile() { ... }\n២. Return JSX elements\n៣. ហៅប្រើជា JSX tag: <UserProfile />'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function Badge() {
  return <span className="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs rounded-full font-mono font-bold">PRO DEVELOPER</span>;
}

function UserCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
      <div>
        <h3 className="text-md font-bold text-white">Sokha Dev</h3>
        <p className="text-xs text-slate-400">Phnom Penh, Cambodia</p>
      </div>
      <Badge />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<UserCard />);`
    },
    realWorldExample: {
      title: {
        en: 'Modular UI Decomposition',
        km: 'ការបំបែក UI ជា Components'
      },
      description: {
        en: 'A modern dashboard breaks pages into modular components like `<Sidebar />`, `<Navbar />`, `<StatCard />`, and `<Table />`.',
        km: 'Dashboard ទំនើបបំបែកទំព័រជា Components តូចៗដូចជា `<Sidebar />`, `<Navbar />`, `<StatCard />`, និង `<Table />`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What happens if you name a component starting with a lowercase letter (e.g. `function card()`)?',
        km: 'តើមានអ្វីកើតឡើងបើបង្កើត Component ដោយអក្សរតូច (ឧ. `function card()`)?'
      },
      solution: `React treats it as a standard HTML tag instead of a custom component.`
    },
    quizQuestions: [
      {
        id: 'r3-1-q1',
        question: {
          en: 'What rule must React component names follow to distinguish them from standard HTML tags?',
          km: 'តើឈ្មោះរបស់ React Component ត្រូវមានលក្ខខណ្ឌអ្វីដើម្បីបែងចែកពី HTML tags ធម្មតា?'
        },
        options: [
          { id: '1', text: { en: 'Must start with a capital letter (PascalCase)', km: 'ត្រូវចាប់ផ្តើមដោយអក្សរធំ (PascalCase)' }, isCorrect: true },
          { id: '2', text: { en: 'Must end with .jsx', km: 'ត្រូវបញ្ចប់ដោយ .jsx' }, isCorrect: false }
        ],
        explanation: {
          en: 'React uses capital letters to differentiate custom components from native DOM tags.',
          km: 'React ប្រើប្រាស់អក្សរធំដើមពាក្យដើម្បីសម្គាល់ Custom Component ពី HTML Tag ដើម។'
        }
      }
    ]
  },
  {
    id: 'react-3-2',
    slug: 'passing-data-with-props',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: {
      en: '3.2 Passing Data with Props',
      km: '៣.២ ការបញ្ជូនទិន្នន័យតាមរយៈ Props'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Props (short for properties) allow parent components to pass data down to child components. Props are read-only (immutable) inputs passed as an object parameter.',
      km: 'Props (មកពីពាក្យ Properties) អនុញ្ញាតឱ្យ Parent Component បញ្ជូនទិន្នន័យទៅ Child Component។ Props គឺជា Read-only (Immutable) inputs ដែលត្រូវបានទទួលតាមរយៈ Object Parameter។'
    },
    tutorial: {
      en: 'Passing Props:\n<ProductCard title="Laptop" price={999} />\n\nReceiving Props (Destructuring):\nfunction ProductCard({ title, price }) {\n  return <div>{title} - ${price}</div>;\n}',
      km: 'របៀបបញ្ជូន Props:\n<ProductCard title="Laptop" price={999} />\n\nរបៀបទទួល Props (Destructuring):\nfunction ProductCard({ title, price }) {\n  return <div>{title} - ${price}</div>;\n}'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function StudentCard({ name, major, score }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center justify-between">
      <div>
        <h4 className="text-sm font-bold text-white">{name}</h4>
        <p className="text-xs text-slate-400">{major}</p>
      </div>
      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 font-mono text-xs rounded-xl font-bold border border-emerald-500/30">
        Score: {score}/100
      </span>
    </div>
  );
}

function StudentList() {
  return (
    <div className="space-y-3">
      <StudentCard name="Chan Dara" major="Computer Science" score={95} />
      <StudentCard name="Keo Bopha" major="Cybersecurity" score={88} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<StudentList />);`
    },
    realWorldExample: {
      title: {
        en: 'Reusable UI Components',
        km: 'ការប្រើ Reusable Components ឡើងវិញ'
      },
      description: {
        en: 'A single `<Button variant="primary" label="Save" />` component can render buttons with different colors and labels across an entire application.',
        km: 'Component តែមួយ `<Button variant="primary" label="Save" />` អាចប្រើសម្រាប់បង្កើត Button ពណ៌ និងអត្ថបទខុសៗគ្នាទូទាំងកម្មវិធី។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Can a child component directly modify the props it receives from a parent component?',
        km: 'តើ Child Component អាចកែប្រែ Props ដែលទទួលពី Parent ផ្ទាល់បានទេ?'
      },
      solution: `No, props are strictly read-only (immutable).`
    },
    quizQuestions: [
      {
        id: 'r3-2-q1',
        question: {
          en: 'Are props in React mutable or immutable?',
          km: 'តើ Props ក្នុង React អាចកែប្រែ (Mutable) ឬមិនអាចកែប្រែ (Immutable)?'
        },
        options: [
          { id: '1', text: { en: 'Immutable (Read-only)', km: 'Immutable (អានបានតែប៉ុណ្ណោះ)' }, isCorrect: true },
          { id: '2', text: { en: 'Mutable (Can be rewritten directly by child)', km: 'Mutable (អាចកែប្រែបានដោយ Child)' }, isCorrect: false }
        ],
        explanation: {
          en: 'Props must never be modified by the component receiving them.',
          km: 'Props មិនត្រូវកែប្រែដោយ Component ដែលទទួលវានោះទេ។'
        }
      }
    ]
  },
  {
    id: 'react-3-3',
    slug: 'children-prop-composing-components',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: {
      en: '3.3 `children` Prop & Composing Components',
      km: '៣.៣ `children` Prop & ការផ្សំរៀបចំ Components'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The `children` prop is a special prop that automatically captures whatever nested markup or elements are placed between a component\'s opening and closing tags. This enables generic wrapper containers like modals, cards, and layouts.',
      km: '`children` prop គឺជា Prop ពិសេសដែលប្រមូលយក Content ឬ Elements ទាំងឡាយណាដែលស្ថិតនៅចន្លោះ Opening និង Closing tags របស់ Component។ វាជួយបង្កើត Wrapper Containers ដូចជា Modals, Cards, និង Layouts។'
    },
    tutorial: {
      en: 'Container Definition:\nfunction Modal({ children }) {\n  return <div className="modal-body">{children}</div>;\n}\n\nUsage:\n<Modal><p>Nested content passed as children!</p></Modal>',
      km: 'ការបង្កើត Container:\nfunction Modal({ children }) {\n  return <div className="modal-body">{children}</div>;\n}\n\nរបៀបប្រើ៖\n<Modal><p>Nested content បញ្ជូនជា children!</p></Modal>'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function CardWrapper({ title, children }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
      <h3 className="text-sm font-bold text-sky-400 border-b border-slate-800 pb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

function App() {
  return (
    <CardWrapper title="User Profile Details">
      <p className="text-xs text-slate-300">Name: Nary</p>
      <p className="text-xs text-emerald-400 font-mono mt-1">Status: Active Subscription</p>
    </CardWrapper>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);`
    },
    realWorldExample: {
      title: {
        en: 'Layouts and Dialog Wrappers',
        km: 'ការប្រើ Layouts និង Dialog Wrappers'
      },
      description: {
        en: 'UI libraries rely heavily on the `children` prop to create flexible `<Card>`, `<Modal>`, and `<SidebarLayout>` components that wrap custom content.',
        km: 'UI Libraries ប្រើប្រាស់ `children` prop យ៉ាងច្រើនដើម្បីបង្កើត `<Card>`, `<Modal>` និង `<SidebarLayout>` wrappers។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What prop name receives content placed between `<Container>Content</Container>`?',
        km: 'តើ Prop ឈ្មោះអ្វីដែលទទួលបានទិន្នន័យក្នុងចន្លោះ `<Container>Content</Container>`?'
      },
      solution: `children`
    },
    quizQuestions: [
      {
        id: 'r3-3-q1',
        question: {
          en: 'How does a component access elements passed inside its opening and closing tags?',
          km: 'តើ Component ទទួលបាន Elements ក្នុងចន្លោះ opening & closing tags ដោយរបៀបណា?'
        },
        options: [
          { id: '1', text: { en: 'Via props.children', km: 'តាមរយៈ props.children' }, isCorrect: true },
          { id: '2', text: { en: 'Via props.innerHtml', km: 'តាមរយៈ props.innerHtml' }, isCorrect: false }
        ],
        explanation: {
          en: 'React automatically populates props.children with nested elements.',
          km: 'React បញ្ជូន Elements ក្នុងចន្លោះ Tags ចូល props.children ដោយស្វ័យប្រវត្តិ។'
        }
      }
    ]
  },

  // MODULE 4 — State with useState
  {
    id: 'react-4-1',
    slug: 'why-components-need-state',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: {
      en: '4.1 Why Components Need State',
      km: '៤.១ ហេតុអ្វីបានជា Component ត្រូវការ State'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'State is component-memory. Plain local JavaScript variables reset on every render and do not trigger a UI update when modified. Component state preserves data across renders and automatically triggers React to re-render the view when changed.',
      km: 'State គឺជា Memory របស់ Component។ JavaScript Variables ធម្មតានឹង Reset រាល់ពេល Render ហើយមិនធ្វើឱ្យ UI អាប់ដេតឡើយពេលកែប្រែ។ State រក្សាទុកទិន្នន័យឆ្លងកាត់ Render និងបញ្ជាឱ្យ React អាប់ដេតអេក្រង់ស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: 'Variable vs State:\nlet count = 0; count++; // ❌ No UI re-render!\nconst [count, setCount] = useState(0);\nsetCount(count + 1);    // ✅ Triggers UI update automatically!',
      km: 'ការប្រៀបធៀប Variable និង State:\nlet count = 0; count++; // ❌ មិន Re-render UI ទេ!\nconst [count, setCount] = useState(0);\nsetCount(count + 1);    // ✅ បញ្ជាឱ្យ Re-render UI ដោយស្វ័យប្រវត្តិ!'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function CounterComparison() {
  const [stateCount, setStateCount] = React.useState(0);
  let normalVar = 0;

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h3 className="text-md font-bold text-white">State vs Variable Demo</h3>
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <div className="text-xs text-slate-400">Normal Var</div>
          <div className="text-xl font-bold text-rose-400">{normalVar}</div>
        </div>
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <div className="text-xs text-slate-400">React State</div>
          <div className="text-xl font-bold text-emerald-400">{stateCount}</div>
        </div>
      </div>
      <button 
        onClick={() => { normalVar++; setStateCount(stateCount + 1); }}
        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition"
      >
        Increment State Count
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CounterComparison />);`
    },
    realWorldExample: {
      title: {
        en: 'Interactive UI States',
        km: 'ការគ្រប់គ្រង UI States ក្នុង App'
      },
      description: {
        en: 'Every interactive widget—like accordions, dark mode toggles, shopping cart counts, and search query inputs—requires component state.',
        km: 'រាល់ Widget អន្តរកម្មដូចជា Shopping cart count, Dark mode toggle, និង Search input សុទ្ធតែត្រូវការ State។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Why doesn\'t modifying a regular variable like `let x = 5; x = 10;` trigger a re-render in React?',
        km: 'ហេតុអ្វីបានជាការកែប្រែ Variable ធម្មតា មិនធ្វើឱ្យ React Re-render UI?'
      },
      solution: `Because React does not track normal variable mutations; it only watches state setter calls.`
    },
    quizQuestions: [
      {
        id: 'r4-1-q1',
        question: {
          en: 'What happens when a component\'s state changes via its setter function?',
          km: 'តើមានអ្វីកើតឡើងនៅពេល State របស់ Component ផ្លាស់ប្តូរតាមរយៈ Setter Function?'
        },
        options: [
          { id: '1', text: { en: 'React schedules a re-render of the component with the new state', km: 'React នឹងធ្វើការ Re-render Component ឡើងវិញជាមួយតម្លៃ State ថ្មី' }, isCorrect: true },
          { id: '2', text: { en: 'The entire browser reloads from the server', km: 'Browser នឹង Reload ទំព័រទាំងមូលឡើងវិញ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Updating state tells React to re-render that specific component subtree.',
          km: 'ការអាប់ដេត State បញ្ជាឱ្យ React Re-render Component នោះឡើងវិញ។'
        }
      }
    ]
  },
  {
    id: 'react-4-2',
    slug: 'use-state-syntax-updating-state',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: {
      en: '4.2 `useState` Syntax & Updating State',
      km: '៤.២ របៀបប្រើប្រាស់ `useState` Syntax & ការអាប់ដេត State'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'The `useState` hook returns an array with two elements: 1) The current state value, and 2) A setter function to update the state value. We use array destructuring `const [state, setState] = useState(initialValue);` to capture them.',
      km: '`useState` hook ត្រឡប់ Array ដែលមានធាតុ២៖ ១) តម្លៃ State បច្ចុប្បន្ន, ២) Setter Function សម្រាប់អាប់ដេត State។ យើងប្រើប្រាស់ Array Destructuring `const [state, setState] = useState(initialValue);`។'
    },
    tutorial: {
      en: 'Syntax:\nimport { useState } from "react";\nconst [count, setCount] = useState(0);\n\nSetter Usage:\n<button onClick={() => setCount(count + 1)}>Increment</button>',
      km: 'ទម្រង់ Syntax:\nimport { useState } from "react";\nconst [count, setCount] = useState(0);\n\nការប្រើ Setter:\n<button onClick={() => setCount(count + 1)}>Increment</button>'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function ToggleCard() {
  const [isOn, setIsOn] = React.useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-4">
      <h3 className="text-md font-bold text-white">Power Switch Indicator</h3>
      <div className={\`inline-block px-4 py-2 rounded-xl text-xs font-mono font-bold \${isOn ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'}\`}>
        STATUS: {isOn ? 'ONLINE' : 'OFFLINE'}
      </div>
      <div>
        <button 
          onClick={() => setIsOn(!isOn)}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition"
        >
          Toggle Power
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ToggleCard />);`
    },
    realWorldExample: {
      title: {
        en: 'Boolean Toggle State',
        km: 'ការគ្រប់គ្រង Boolean Toggle State'
      },
      description: {
        en: 'Toggling dropdown menus, sidebar collapse states, and dark/light themes uses `useState(false)` with setter negation `setIsOpen(!isOpen)`.',
        km: 'ការបើកបិទ Dropdown, Sidebar ឬ Theme គឺប្រើប្រាស់ `useState(false)` ជាមួយការបកប្រែតម្លៃ `setIsOpen(!isOpen)`។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write the `useState` declaration for a string state variable named `searchQuery` initialized to empty string.',
        km: 'សរសេរការប្រកាស `useState` សម្រាប់ string state មានឈ្មោះ `searchQuery` ដែលមានតម្លៃដើមទទេ ("")។'
      },
      solution: `const [searchQuery, setSearchQuery] = useState("");`
    },
    quizQuestions: [
      {
        id: 'r4-2-q1',
        question: {
          en: 'What does the array returned by `useState(0)` contain?',
          km: 'តើ Array ដែលត្រឡប់ចេញពី `useState(0)` មានធាតុអ្វីខ្លះ?'
        },
        options: [
          { id: '1', text: { en: '[currentStateValue, setterFunction]', km: '[currentStateValue, setterFunction]' }, isCorrect: true },
          { id: '2', text: { en: '[initialValue, previousValue]', km: '[initialValue, previousValue]' }, isCorrect: false }
        ],
        explanation: {
          en: 'useState returns a tuple containing current state and updater function.',
          km: 'useState ត្រឡប់ Tuple ដែលមានតម្លៃ State និង Setter Function។'
        }
      }
    ]
  },
  {
    id: 'react-4-3',
    slug: 'state-updates-asynchronous-pitfalls',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: {
      en: '4.3 Asynchronous State Updates & Functional Setters',
      km: '៤.៣ ការអាប់ដេត State ជា Asynchronous & Functional Setter'
    },
    durationMinutes: 20,
    difficulty: 'Intermediate',
    explanation: {
      en: 'State updates in React are batched and asynchronous. Accessing state immediately after calling its setter function will return the old value. To safely update state based on previous state, pass a updater function: `setCount(prev => prev + 1)`.',
      km: 'ការអាប់ដេត State ក្នុង React ធ្វើឡើងជា Batch និង Asynchronous។ ការទាញយកតម្លៃ State ភ្លាមៗក្រោយហៅ Setter នឹងទទួលបានតម្លៃចាស់។ ដើម្បីអាប់ដេតតម្លៃយោងតាម State ចាស់ដោយសុវត្ថិភាព ត្រូវប្រើប្រាស់ Functional Updater: `setCount(prev => prev + 1)`។'
    },
    tutorial: {
      en: 'Pitfall:\nsetCount(count + 1);\nsetCount(count + 1); // ❌ Result is +1, NOT +2!\n\nSafe Solution:\nsetCount(prev => prev + 1);\nsetCount(prev => prev + 1); // ✅ Result is +2!',
      km: 'បញ្ហាប្រឈម៖\nsetCount(count + 1);\nsetCount(count + 1); // ❌ លទ្ធផលឡើង +1 មិនមែន +2 ទេ!\n\nដំណោះស្រាយសុវត្ថិភាព៖\nsetCount(prev => prev + 1);\nsetCount(prev => prev + 1); // ✅ លទ្ធផលឡើង +2 ត្រឹមត្រូវ!'
    },
    starterCode: {
      html: `<div id="root"></div>`,
      js: `function FunctionalSetterDemo() {
  const [count, setCount] = React.useState(0);

  const addThree = () => {
    // Functional updates ensure batch updates accumulate correctly
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-4">
      <h3 className="text-md font-bold text-white">Functional Updater Example</h3>
      <div className="text-3xl font-black text-indigo-400">{count}</div>
      <button 
        onClick={addThree}
        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition"
      >
        Add +3 in Single Click
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FunctionalSetterDemo />);`
    },
    realWorldExample: {
      title: {
        en: 'Safe Sequential State Computations',
        km: 'ការគណនាបន្តបន្ទាប់ដោយសុវត្ថិភាព'
      },
      description: {
        en: 'When handling fast multiple user clicks or async callbacks, functional state updates prevent stale closure bugs.',
        km: 'នៅពេល User ចុច Button លឿនៗ ឬក្នុង Async callbacks ការប្រើ Functional updater ជួយការពារ Stale state bugs។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write a functional updater call that decrements `score` state by 5 safely.',
        km: 'សរសេរ Functional updater សម្រាប់បន្ថយ `score` ចំនួន 5 ដោយសុវត្ថិភាព។'
      },
      solution: `setScore(prev => prev - 5)`
    },
    quizQuestions: [
      {
        id: 'r4-3-q1',
        question: {
          en: 'Why should you use `setCount(prev => prev + 1)` when new state depends on previous state?',
          km: 'ហេតុអ្វីបានជាត្រូវប្រើ `setCount(prev => prev + 1)` នៅពេល State ថ្មីអាស្រ័យលើ State ចាស់?'
        },
        options: [
          { id: '1', text: { en: 'Functional updates guarantee receiving the latest evaluated state snapshot', km: 'Functional update ធានាថាទទួលបាន Snapshot នៃ State ចុងក្រោយបង្អស់' }, isCorrect: true },
          { id: '2', text: { en: 'Functional updates bypass React rendering logic', km: 'Functional update រំលង React rendering logic' }, isCorrect: false }
        ],
        explanation: {
          en: 'Functional state setters avoid stale closure issues during batched updates.',
          km: 'Functional updater ជួយជៀសវាងបញ្ហា Stale state ក្នុងអំឡុងពេល Batched updates។'
        }
      }
    ]
  }
];
