import { FrontendModule } from '../types/frontendClass';

export const FRONTEND_CLASS_INFO = {
  id: 'frontend-web-development',
  title: {
    en: 'Complete Frontend Web Development Bootcamp',
    km: 'វគ្គសិក្សា Frontend Web Development ពេញលេញ',
  },
  subtitle: {
    en: 'Master HTML5, CSS3, JavaScript ES6+, TypeScript, Tailwind CSS, React.js, Vue.js, SCSS & Modern Tooling from scratch.',
    km: 'សិក្សាស្ទាត់ជំនាញ HTML5, CSS3, JavaScript ES6+, TypeScript, Tailwind CSS, React.js, Vue.js, SCSS និង Tooling ទំនើបចាប់ពីកម្រិតដំបូង។',
  },
  badge: 'Beginner to Professional',
  rating: 4.9,
  reviewsCount: 1840,
  durationWeeks: 14,
  durationHours: 60,
  enrolledStudents: 14200,
  outcomes: {
    en: [
      'Build fully responsive, accessible, multi-page websites using semantic HTML5 and modern CSS3 (Flexbox & Grid).',
      'Master JavaScript ES6+ programming fundamentals, DOM manipulation, asynchronous programming, Promises, and Fetch API.',
      'Write scalable, type-safe frontend code using TypeScript interfaces, generics, and strict type checking.',
      'Style rapid production UIs using Tailwind CSS utility-first framework and Sass/SCSS preprocessors.',
      'Develop modern single-page applications (SPAs) with React.js (Hooks, State, Effects, Custom Hooks) and Vue.js.',
      'Use modern frontend tools including VS Code, Git, GitHub, Vite, npm, Browser DevTools, and deploy to Vercel/Netlify.',
    ],
    km: [
      'បង្កើតគេហទំព័រ Responsive និង Accessibility ដោយប្រើប្រាស់ HTML5 Semantic និង CSS3 Modern (Flexbox & Grid)។',
      'ស្ទាត់ជំនាញ JavaScript ES6+ មូលដ្ឋានគ្រឹះ, DOM Manipulation, Async/Await, Promises និង Fetch API។',
      'សរសេរកូដ Frontend មានសុវត្ថិភាពខ្ពស់ដោយប្រើ TypeScript Interfaces, Types និង Compiler Configs។',
      'ឌីហ្សាញ UI លឿនរហ័ស និងស្អាតបាតដោយប្រើប្រាស់ Tailwind CSS ព្រមទាំង Sass/SCSS Preprocessors។',
      'អភិវឌ្ឍន៍កម្មវិធី Web SPAs ទំនើបជាមួយ React.js (Hooks, State, React Router) និង Vue.js (Composition API)។',
      'ប្រើប្រាស់ឧបករណ៍អភិវឌ្ឍន៍ទំនើបដូចជា VS Code, Git, GitHub, Vite, npm, DevTools និងការប្រកាសផ្សាយ Deployment ទៅ Vercel/Netlify។',
    ],
  },
  prerequisites: {
    en: [
      'No prior programming experience required — designed for absolute beginners.',
      'A computer (Windows, macOS, or Linux) with a web browser and internet connection.',
      'Enthusiasm to learn and build real-world web projects!',
    ],
    km: [
      'មិនតម្រូវឱ្យមានបទពិសោធន៍សរសេរកូដពីមុនមកទេ — រចនាឡើងសម្រាប់អ្នកចាប់ផ្តើមដំបូង។',
      'កុំព្យូទ័រ (Windows, macOS, ឬ Linux) ដែលមាន Web Browser និងអ៊ីនធឺណិត។',
      'ការប្តេជ្ញាចិត្តរៀនសូត្រ និងអនុវត្តធ្វើ Project ជាក់ស្តែង!​',
    ],
  },
};

export const FRONTEND_MODULES: FrontendModule[] = [
  {
    id: 'm1',
    moduleNumber: 1,
    title: {
      en: 'Module 1: Web Foundations & Dev Environment',
      km: 'មេរៀនទី ១៖ មូលដ្ឋានគ្រឹះ Web & បរិស្ថានអភិវឌ្ឍន៍',
    },
    description: {
      en: 'Understand how the web works, setup VS Code, browser devtools, project file organization, and Git/GitHub basics.',
      km: 'យល់ដឹងពីដំណើរការ Web, ការដំឡើង VS Code, Browser DevTools, ការរៀបចំ Directory គម្រោង និង Git/GitHub មូលដ្ឋាន។',
    },
    lessons: [
      {
        id: 'm1-l1',
        slug: 'how-the-web-works',
        moduleNumber: 1,
        lessonNumberInModule: 1,
        title: {
          en: '1.1 How the Web Works (Client, Server & HTTP)',
          km: '១.១ របៀបដែល Web ដំណើរការ (Client, Server & HTTP)',
        },
        durationMinutes: 20,
        difficulty: 'Beginner',
        explanation: {
          en: 'Before writing frontend code, you must understand what happens when you type a URL into a browser address bar. The browser (Client) sends an HTTP Request over the internet to a remote Web Server holding HTML, CSS, JavaScript, and media files. The server processes the request and sends back an HTTP Response containing the requested assets.',
          km: 'មុនពេលសរសេរកូដ Frontend អ្នកត្រូវយល់ពីអ្វីដែលកើតឡើងនៅពេលបញ្ចូល URL ទៅកាន់ Web Browser។ Browser (Client) ផ្ញើ HTTP Request តាមអ៊ីនធឺណិតទៅកាន់ Web Server ដែលផ្ទុកឯកសារ HTML, CSS, JS និង Media។ Server ដំណើរការសំណើ រួចផ្ញើ HTTP Response ត្រឡប់មកវិញ។',
        },
        tutorial: {
          en: '1. Client (Browser): Executes HTML, CSS, JS rendered for user interface.\n2. Server: Responds with requested static files or API JSON data.\n3. DNS (Domain Name System): Translates human-friendly domain names (sabaycode.com) into IP addresses (192.0.2.1).\n4. HTTP/HTTPS Status Codes: 200 OK (Success), 404 Not Found (Missing Page), 500 Server Error.',
          km: '១. Client (Browser): ប្រតិបត្តិ HTML, CSS, JS សម្រាប់បង្ហាញ UI ដល់អ្នកប្រើប្រាស់។\n២. Server: ឆ្លើយតបនូវឯកសារ Static ឬទិន្នន័យ API JSON។\n៣. DNS: បកប្រែឈ្មោះ Domain (sabaycode.com) ទៅជាអាសយដ្ឋាន IP (192.0.2.1)។\n៤. HTTP Status Codes: 200 OK (ជោគជ័យ), 404 Not Found (រកមិនឃើញ), 500 Server Error (កំហុស Server)។',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html>
<head>
  <title>How the Web Works Demo</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 2rem; }
    .card { background: #1e293b; padding: 1.5rem; border-radius: 12px; border: 1px solid #334155; }
    .badge { background: #3b82f6; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">HTTP 200 OK</span>
    <h2>Client Request Received!</h2>
    <p>Your browser successfully requested and rendered this HTML page from the web server.</p>
  </div>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Inspecting Network Requests in Chrome DevTools', km: 'ការពិនិត្យមើល Network Requests ក្នុង Chrome DevTools' },
          description: {
            en: 'Open Chrome DevTools (F12 or Right Click -> Inspect), click the Network tab, reload any website, and view all HTTP requests, response headers, and payload sizes.',
            km: 'បើក Chrome DevTools (F12 ឬ ចុចស្តាំ -> Inspect) ចុច Tab "Network" រួច Refresh គេហទំព័រ ដើម្បីមើលរាល់ HTTP requests, headers និងទំហំ file។',
          },
          code: `// Simulating an HTTP Fetch request in JavaScript
fetch('https://api.github.com/users/octocat')
  .then(response => response.json())
  .then(data => console.log('Server Response:', data.name));`,
        },
        practiceExercise: {
          question: {
            en: 'Modify the card title in the editor above to display "HTTP Status: 200 OK - Welcome to Frontend Development".',
            km: 'កែប្រែចំណងជើង Card ខាងលើឱ្យបង្ហាញពាក្យ "HTTP Status: 200 OK - Welcome to Frontend Development"។',
          },
          solution: 'Change <h2>Client Request Received!</h2> to <h2>HTTP Status: 200 OK - Welcome to Frontend Development</h2> in the HTML editor above.',
        },
        quizQuestions: [
          {
            id: 'q1-1',
            question: { en: 'What is the role of the Client in web architecture?', km: 'តើ Client មានតួនាទីអ្វីខ្លះក្នុងស្ថាបត្យកម្ម Web?' },
            options: [
              { id: 'opt1', text: { en: 'Executes HTML, CSS, and JS to render the user interface', km: 'ប្រតិបត្តិ HTML, CSS, JS ដើមបង្ហាញ UI ដល់អ្នកប្រើ' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Stores database credentials safely', km: 'រក្សាទុកទិន្នន័យ Database Credentials' }, isCorrect: false },
              { id: 'opt3', text: { en: 'Generates IP addresses for domain names', km: 'បង្កើត IP Addresses សម្រាប់ Domain Names' }, isCorrect: false },
            ],
            explanation: { en: 'The client (browser) receives files from the server and renders the visual interface for the end-user.', km: 'Client (Browser) ទទួលឯកសារពី Server រួច Render បង្ហាញ UI ដល់អ្នកប្រើប្រាស់។' },
          },
        ],
      },
      {
        id: 'm1-l2',
        slug: 'dev-environment-vscode',
        moduleNumber: 1,
        lessonNumberInModule: 2,
        title: {
          en: '1.2 Dev Environment & DevTools (VS Code & Live Server)',
          km: '១.២ បរិស្ថានអភិវឌ្ឍន៍ & DevTools (VS Code & Live Server)',
        },
        durationMinutes: 25,
        difficulty: 'Beginner',
        explanation: {
          en: 'Professional frontend engineers use Visual Studio Code (VS Code) as their primary code editor alongside essential extensions like Prettier, ESLint, and Live Server. Live Server reloads your browser automatically whenever you save changes in your code editor.',
          km: 'អ្នកជំនាញ Frontend សរសេរកូដលើ Visual Studio Code (VS Code) ជាមួយ Extensions ដូចជា Prettier, ESLint និង Live Server ដែលជួយ Refresh គេហទំព័រស្វ័យប្រវត្តពេល Save កូដ។',
        },
        tutorial: {
          en: 'Recommended VS Code Extensions:\n1. Live Server: Instant local development server.\n2. Prettier: Automatic code formatter.\n3. Auto Rename Tag: Renames paired HTML tags automatically.\n4. Tailwind CSS IntelliSense: Autocomplete for Tailwind utility classes.',
          km: 'VS Code Extensions ដែលគួរមាន៖\n១. Live Server៖ Local Dev Server ដោយស្វ័យប្រវត្តិ។\n២. Prettier៖ រៀបចំទ្រង់ទ្រាយកូដឱ្យមានរបៀប។\n៣. Auto Rename Tag៖ ប្តូរឈ្មោះ Tag HTML គូស្វ័យប្រវត្តិ។\n៤. Tailwind CSS IntelliSense៖ ជំនួយការសរសេរ Tailwind។',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; background: #090d16; color: #38bdf8; padding: 20px; }
    .status { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <h1>VS Code Live Server Active</h1>
  <p>Status: <span class="status">Connected (Port 5500)</span></p>
  <p>Try editing this text and observe the immediate live preview update!</p>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Using Console & Elements Tab in DevTools', km: 'ការប្រើប្រាស់ Console & Elements Tab ក្នុង DevTools' },
          description: {
            en: 'Use elements tab to tweak styles dynamically live on any web page without editing original files.',
            km: 'ប្រើប្រាស់ Elements Tab ដើម្បីកែប្រែ Style បណ្តោះអាសន្នលើ Web Page ណាមួយបានភ្លាមៗ។',
          },
        },
        practiceExercise: {
          question: {
            en: 'Change the background color in the CSS above from #090d16 to #111827.',
            km: 'ប្តូរពណ៌ Background ក្នុង CSS ខាងលើពី #090d16 ទៅ #111827។',
          },
          solution: 'Update background: #111827; in the <style> block above.',
        },
        quizQuestions: [
          {
            id: 'q1-2',
            question: { en: 'What does the Live Server extension do in VS Code?', km: 'តើ Extension "Live Server" មានតួនាទីអ្វី?' },
            options: [
              { id: 'opt1', text: { en: 'Launches a local development server with live reload on save', km: 'បើក Local Server និងស្វ័យប្រវត្តិ Refresh ពេល Save កូដ' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Deploys your website directly to AWS Cloud', km: 'ប្រកាសផ្សាយ Website ទៅ AWS' }, isCorrect: false },
            ],
            explanation: { en: 'Live Server starts a local server and auto-refreshes the browser when files change.', km: 'Live Server បង្កើត Local Server និង Refresh Browser ស្វ័យប្រវត្តិពេល Save ឯកសារ។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm2',
    moduleNumber: 2,
    title: {
      en: 'Module 2: HTML5 — Document Structure & Semantics',
      km: 'មេរៀនទី ២៖ HTML5 — រចនាសម្ព័ន្ធ និង Semantic Elements',
    },
    description: {
      en: 'Master modern semantic HTML5 tags, text elements, media, forms, inputs, tables, and web accessibility standards.',
      km: 'ស្ទាត់ជំនាញ HTML5 Semantic tags, អត្ថបទ, រូបភាព, ទម្រង់ Form, តារាង និងស្តង់ដារ Web Accessibility (a11y)។',
    },
    lessons: [
      {
        id: 'm2-l1',
        slug: 'html5-semantic-structure',
        moduleNumber: 2,
        lessonNumberInModule: 1,
        title: {
          en: '2.1 Semantic HTML5 Elements (<header>, <nav>, <main>, <article>, <footer>)',
          km: '២.១ Semantic HTML5 Elements (<header>, <nav>, <main>, <article>, <footer>)',
        },
        durationMinutes: 30,
        difficulty: 'Beginner',
        explanation: {
          en: 'Semantic HTML means using tags that describe their meaning to both the browser and developer (e.g. <header>, <article>, <footer>) instead of generic non-semantic <div> tags everywhere. Semantic tags dramatically improve SEO, screen reader accessibility, and code readability.',
          km: 'Semantic HTML គឺជាការប្រើប្រាស់ HTML Tags ដែលមានន័យច្បាស់លាស់សម្រាប់ Browser និង Search Engine (ដូចជា <header>, <article>, <footer>) ជំនួសឱ្យការប្រើ <div> ទទេ។ វាជួយសម្រួលដល់ SEO និង Accessibility។',
        },
        tutorial: {
          en: 'Core Semantic Tags:\n- <header>: Top navigation or article heading bar\n- <nav>: Primary site navigation links\n- <main>: Primary unique content of the page\n- <section>: Grouping related thematic content\n- <article>: Self-contained independent content piece\n- <aside>: Sidebar or secondary content\n- <footer>: Bottom page info, copyright & links',
          km: 'Semantic Tags សំខាន់ៗ៖\n- <header>៖ ផ្នែកខាងលើ ឬ Navigation Bar\n- <nav>៖ តំណភ្ជាប់ Navigations ចម្បង\n- <main>៖ មាតិកាចម្បងនៃទំព័រ\n- <section>៖ ផ្នែកប្រធានបទដែលពាក់ព័ន្ធ\n- <article>៖ អត្ថបទឯករាជ្យ\n- <aside>៖ របារចំហៀង Sidebar\n- <footer>៖ ផ្នែកខាងក្រោម Footer',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic Layout Demo</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #020617; color: #e2e8f0; margin: 0; padding: 20px; }
    header, nav, main, footer { border: 1px solid #334155; padding: 15px; margin-bottom: 10px; border-radius: 8px; }
    header { background: #0f172a; }
    nav { background: #1e293b; }
    main { background: #0f172a; }
    footer { background: #020617; text-align: center; font-size: 12px; color: #94a3b8; }
  </style>
</head>
<body>
  <header>
    <h1>SabayCode Frontend Academy</h1>
  </header>
  
  <nav>
    <a href="#" style="color:#38bdf8; margin-right:15px;">Home</a>
    <a href="#" style="color:#38bdf8;">Modules</a>
  </nav>

  <main>
    <article>
      <h2>Welcome to Semantic HTML5</h2>
      <p>Semantic elements convey clear meaning to search engine crawlers and assistive technologies.</p>
    </article>
  </main>

  <footer>
    <p>&copy; 2026 SabayCode. All Rights Reserved.</p>
  </footer>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Accessibility & SEO Impact of Semantic Markup', km: 'ឥទ្ធិពលនៃ Semantic Markup ទៅលើ SEO និង Accessibility' },
          description: {
            en: 'Google Search crawlers prioritize page headers and main article tags when indexing keywords for ranking.',
            km: 'Google Search Crawlers ផ្តល់អទិភាពខ្ពស់លើ <main> និង <article> ក្នុងការចាត់ថ្នាក់អត្ថបទលើ Search Engine Ranking។',
          },
        },
        practiceExercise: {
          question: {
            en: 'Add an <aside> element inside the <main> block containing a short sidebar message "Tip: Always use semantics!".',
            km: 'បន្ថែម Element <aside> ខាងក្នុង <main> ដែលមានសារ "Tip: Always use semantics!"។',
          },
          solution: 'Insert <aside><p>Tip: Always use semantics!</p></aside> inside <main>.',
        },
        quizQuestions: [
          {
            id: 'q2-1',
            question: { en: 'Which tag should wrap the primary unique content of a web page?', km: 'តើ Tag មួយណាដែលត្រូវប្រើសម្រាប់ខ្ចប់មាតិកាចម្បងតែមួយគត់នៃទំព័រ?' },
            options: [
              { id: 'opt1', text: { en: '<main>', km: '<main>' }, isCorrect: true },
              { id: 'opt2', text: { en: '<div>', km: '<div>' }, isCorrect: false },
              { id: 'opt3', text: { en: '<section>', km: '<section>' }, isCorrect: false },
            ],
            explanation: { en: 'There should be only one <main> element per HTML document representing unique page content.', km: 'ក្នុងឯកសារ HTML មួយត្រូវមាន <main> តែមួយគត់សម្រាប់ផ្ទុកមាតិកាចម្បង។' },
          },
        ],
      },
      {
        id: 'm2-l2',
        slug: 'html5-forms-inputs',
        moduleNumber: 2,
        lessonNumberInModule: 2,
        title: {
          en: '2.2 Master Modern HTML5 Forms, Input Validation & Attributes',
          km: '២.២ ស្ទាត់ជំនាញ HTML5 Forms, Inputs & Validation',
        },
        durationMinutes: 35,
        difficulty: 'Beginner',
        explanation: {
          en: 'Forms are the primary method users interact with web applications (login, registration, search, checkout). HTML5 provides native input types (email, password, number, date, color) and validation attributes (required, minlength, pattern) without requiring custom JavaScript.',
          km: 'Forms គឺជាមធ្យមបាយចម្បងដែលអ្នកប្រើប្រាស់ផ្ញើប្រទាក់ទិន្នន័យ (Login, Sign up, Checkout)។ HTML5 មាន Input Types និង Validation Attributes ស្រាប់ៗដោយមិនចាំបាច់សរសេរ JS ឡើយ។',
        },
        tutorial: {
          en: 'Key Form Elements & Attributes:\n- <form action="/api/submit" method="POST">\n- <label for="email">Email Address</label>\n- <input type="email" id="email" required placeholder="name@example.com">\n- <input type="password" minlength="8">\n- <button type="submit">Submit Form</button>',
          km: 'Form Elements & Attributes សំខាន់ៗ៖\n- <form action="/api/submit" method="POST">\n- <label for="email">Email Address</label>\n- <input type="email" id="email" required placeholder="name@example.com">\n- <input type="password" minlength="8">\n- <button type="submit">Submit Form</button>',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 20px; }
    form { background: #1e293b; padding: 20px; border-radius: 12px; max-width: 320px; border: 1px solid #334155; }
    label { display: block; margin-top: 10px; font-size: 12px; font-weight: bold; color: #94a3b8; }
    input { width: 100%; padding: 8px; margin-top: 4px; border-radius: 6px; border: 1px solid #475569; background: #0f172a; color: white; box-sizing: border-box; }
    button { width: 100%; margin-top: 15px; padding: 10px; background: #6366f1; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
    button:hover { background: #4f46e5; }
  </style>
</head>
<body>
  <form onsubmit="alert('Form Submitted!'); return false;">
    <h3>Student Enrollment Form</h3>
    <label for="fullname">Full Name</label>
    <input type="text" id="fullname" required placeholder="e.g. Nan Seyha">

    <label for="email">Email Address</label>
    <input type="email" id="email" required placeholder="student@sabaycode.com">

    <button type="submit">Register Now</button>
  </form>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Accessible Form Field Association', km: 'ការភ្ជាប់ Label ជាមួយ Input តាមស្តង់ដារ Accessibility' },
          description: {
            en: 'Always connect <label for="input-id"> to <input id="input-id"> so screen readers announce the field label when focused.',
            km: 'ភ្ជាប់ <label for="id"> ជាមួយ <input id="id"> ជានិច្ច ដើម្បីឱ្យ Screen Reader អាប្រាប់ឈ្មោះ Field ពេលដៅចំនុច។',
          },
        },
        practiceExercise: {
          question: {
            en: 'Add a password field with required attribute and minlength="6".',
            km: 'បន្ថែម Input សម្រាប់ Password ដែលមាន required និង minlength="6"។',
          },
          solution: 'Add <label for="pwd">Password</label><input type="password" id="pwd" required minlength="6"> before the submit button.',
        },
        quizQuestions: [
          {
            id: 'q2-2',
            question: { en: 'Which HTML5 attribute makes an input field mandatory before form submission?', km: 'តើ Attribute មួយណាដែលតម្រូវឱ្យអ្នកប្រើបញ្ចូលទិន្នន័យជាដាច់ខាតមុន Submit?' },
            options: [
              { id: 'opt1', text: { en: 'required', km: 'required' }, isCorrect: true },
              { id: 'opt2', text: { en: 'mandatory', km: 'mandatory' }, isCorrect: false },
            ],
            explanation: { en: 'The required attribute triggers native browser error popups if the field is empty.', km: 'Attribute required នឹងបង្ហាញ Error ស្វ័យប្រវត្តិប្រសិនបើមិនបានបញ្ចូលទិន្នន័យ។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm3',
    moduleNumber: 3,
    title: {
      en: 'Module 3: CSS3 — Modern Layouts, Flexbox, Grid & Animations',
      km: 'មេរៀនទី ៣៖ CSS3 — ការដេគ័រ Modern Layouts, Flexbox, Grid & Animations',
    },
    description: {
      en: 'Master CSS selectors, box model, Flexbox, CSS Grid, media queries for responsive design, variables, and transitions.',
      km: 'ស្ទាត់ជំនាញ CSS Selectors, Box Model, Flexbox, CSS Grid, Responsive Design, CSS Variables និង Transitions/Animations។',
    },
    lessons: [
      {
        id: 'm3-l1',
        slug: 'css-flexbox-deep-dive',
        moduleNumber: 3,
        lessonNumberInModule: 1,
        title: {
          en: '3.1 CSS Flexbox Deep Dive (Axis, Alignment & Spacing)',
          km: '៣.១ CSS Flexbox (Main Axis, Cross Axis, Alignment & Gap)',
        },
        durationMinutes: 35,
        difficulty: 'Beginner',
        explanation: {
          en: 'Flexbox (Flexible Box Layout) is a 1-dimensional CSS layout model designed to distribute space along a single row or column. It eliminates floats and positioning hacks, making alignment and responsive distribution effortless.',
          km: 'Flexbox គឺជា CSS Layout 1D ដែលជួយតម្រៀប និងចែកចន្លោះ Elements ក្នុងជួរដេក (Row) ឬជួរឈរ (Column) ដោយងាយស្រួល និងរលូនបំផុត។',
        },
        tutorial: {
          en: 'Flex Container Properties:\n- display: flex;\n- flex-direction: row | column;\n- justify-content: flex-start | center | space-between | space-around;\n- align-items: stretch | center | flex-start | flex-end;\n- gap: 16px; (Defines spacing between items)',
          km: 'Flex Properties ចម្បងៗ៖\n- display: flex;\n- flex-direction: row | column;\n- justify-content: flex-start | center | space-between;\n- align-items: center | flex-start;\n- gap: 16px;',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; background: #020617; padding: 20px; color: white; }
    .flex-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      background: #0f172a;
      padding: 20px;
      border-radius: 12px;
      border: 1px solid #1e293b;
    }
    .card {
      background: #3b82f6;
      padding: 20px;
      border-radius: 8px;
      font-weight: bold;
      flex: 1;
      text-align: center;
    }
  </style>
</head>
<body>
  <h2>Flexbox Navigation Bar / Card Row</h2>
  <div class="flex-container">
    <div class="card">Item 1</div>
    <div class="card">Item 2</div>
    <div class="card">Item 3</div>
  </div>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Centering Any Element Vertically & Horizontally', km: 'ការកំណត់ Element ឱ្យស្ថិតនៅចំកណ្តាលបេះដូង' },
          description: {
            en: 'The classic snippet to center elements: display: flex; justify-content: center; align-items: center; min-height: 100vh;',
            km: 'វិធីសាស្ត្របុរាណដាក់ចំនុចកណ្តាល៖ display: flex; justify-content: center; align-items: center;',
          },
        },
        practiceExercise: {
          question: {
            en: 'Change justify-content in the flex-container from space-between to center.',
            km: 'ប្តូរ justify-content ក្នុង flex-container ពី space-between ទៅ center។',
          },
          solution: 'Update justify-content: center; in .flex-container CSS rule.',
        },
        quizQuestions: [
          {
            id: 'q3-1',
            question: { en: 'Which property sets spacing between items in a flex container?', km: 'តើ Property មួយណាដែលកំណត់ចន្លោះរវាង Items ក្នុង Flex Container?' },
            options: [
              { id: 'opt1', text: { en: 'gap', km: 'gap' }, isCorrect: true },
              { id: 'opt2', text: { en: 'margin-between', km: 'margin-between' }, isCorrect: false },
            ],
            explanation: { en: 'The gap property cleanly specifies distance between grid and flex items.', km: 'gap ប្រើសម្រាប់កំណត់ចន្លោះរវាង Flex ឬ Grid Items។' },
          },
        ],
      },
      {
        id: 'm3-l2',
        slug: 'css-grid-mastery',
        moduleNumber: 3,
        lessonNumberInModule: 2,
        title: {
          en: '3.2 CSS Grid Mastery (2D Layouts, Template Areas & Auto-Fit)',
          km: '៣.២ CSS Grid (2D Layouts, Grid Template Areas & Auto-Fit)',
        },
        durationMinutes: 40,
        difficulty: 'Intermediate',
        explanation: {
          en: 'CSS Grid is a powerful 2-dimensional layout system that manages rows AND columns simultaneously. It allows you to build complex dashboard grids, photo galleries, and page layouts without nested flex containers.',
          km: 'CSS Grid គឺជា 2D Layout System ដែលអាចគ្រប់គ្រងទាំងជួរដេក (Rows) និងជួរឈរ (Columns) ក្នុងពេលតែមួយយ៉ាងស្ទាត់ជំនាញ។',
        },
        tutorial: {
          en: 'Core Grid Properties:\n- display: grid;\n- grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n- gap: 20px;\n- grid-column: span 2;',
          km: 'Grid Properties ចម្បង៖\n- display: grid;\n- grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n- gap: 20px;\n- grid-column: span 2;',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; background: #0f172a; padding: 20px; color: white; }
    .grid-layout {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 15px;
    }
    .box {
      background: #1e293b;
      border: 1px solid #334155;
      padding: 25px;
      border-radius: 10px;
      text-align: center;
      font-weight: bold;
      color: #38bdf8;
    }
  </style>
</head>
<body>
  <h2>Responsive Responsive CSS Grid</h2>
  <div class="grid-layout">
    <div class="box">Card 1</div>
    <div class="box">Card 2</div>
    <div class="box">Card 3</div>
    <div class="box">Card 4</div>
  </div>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Auto-Responsive Photo Gallery', km: 'Photo Gallery ដែលបង្កើត Responsive ដោយស្វ័យប្រវត្តិ' },
          description: {
            en: 'grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) creates a responsive multi-column layout without media queries!',
            km: 'ប្រើ repeat(auto-fit, minmax(200px, 1fr)) ដើម្បីបង្កើត Grid Responsive ដោយមិនបាច់សរសេរ Media Queries!​',
          },
        },
        practiceExercise: {
          question: {
            en: 'Change the minmax value in grid-template-columns from 180px to 120px.',
            km: 'ប្តូរតម្លៃ minmax ក្នុង grid-template-columns ពី 180px ទៅ 120px។',
          },
          solution: 'Change minmax(180px, 1fr) to minmax(120px, 1fr) in CSS.',
        },
        quizQuestions: [
          {
            id: 'q3-2',
            question: { en: 'What is the main difference between Flexbox and CSS Grid?', km: 'តើអ្វីជាភាពខុសគ្នាចម្បងរវាង Flexbox និង CSS Grid?' },
            options: [
              { id: 'opt1', text: { en: 'Flexbox is 1D (rows OR columns), Grid is 2D (rows AND columns)', km: 'Flexbox គឺ 1D (ជួរដេក ឬជួរឈរ), Grid គឺ 2D (ទាំងជួរដេក និងជួរឈរ)' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Grid cannot align text', km: 'Grid មិនអាចតម្រៀបអត្ថបទបាន' }, isCorrect: false },
            ],
            explanation: { en: 'Flexbox lays out content in a single direction, whereas Grid operates along two axes at once.', km: 'Flexbox ដំណើរការលើទិសដៅ 1D ខណៈ Grid ដំណើរការលើអ័ក្ស 2D។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm4',
    moduleNumber: 4,
    title: {
      en: 'Module 4: JavaScript (ES6+) — Dynamic Interactivity & Async',
      km: 'មេរៀនទី ៤៖ JavaScript (ES6+) — អន្តរកម្ម និង Asynchronous JS',
    },
    description: {
      en: 'Learn core JavaScript syntax, functions, ES6+ features, DOM manipulation, events, Promises, async/await, and Fetch API.',
      km: 'រៀនកូដ JavaScript មូលដ្ឋាន, Functions, ES6+, DOM Manipulation, Events, Promises, Async/Await និង Fetch API។',
    },
    lessons: [
      {
        id: 'm4-l1',
        slug: 'js-fundamentals-dom',
        moduleNumber: 4,
        lessonNumberInModule: 1,
        title: {
          en: '4.1 JavaScript DOM Selection, Events & Manipulation',
          km: '៤.១ JavaScript DOM Selection, Events & Manipulation',
        },
        durationMinutes: 40,
        difficulty: 'Beginner',
        explanation: {
          en: 'The Document Object Model (DOM) is a programming interface representing HTML tags as objects in JavaScript. Using querySelector and addEventListener, JS can dynamically change styles, text content, create new elements, and react to user clicks or keypresses.',
          km: 'Document Object Model (DOM) គឺជាការចាត់ថ្នាក់ HTML ជា Objects ក្នុង JavaScript។ ការប្រើ document.querySelector និង addEventListener ជួយឱ្យយើងកែប្រែ UI និងឆ្លើយតបការចុចរបស់អ្នកប្រើប្រាស់។',
        },
        tutorial: {
          en: 'Core DOM Code Snippets:\n- const btn = document.querySelector("#myBtn");\n- const title = document.getElementById("title");\n- btn.addEventListener("click", () => {\n    title.textContent = "Clicked!";\n    title.classList.add("active");\n  });',
          km: 'DOM Snippets សំខាន់ៗ៖\n- const btn = document.querySelector("#myBtn");\n- const title = document.getElementById("title");\n- btn.addEventListener("click", () => {\n    title.textContent = "Clicked!";\n  });',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: white; padding: 20px; }
    .box { background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155; text-align: center; }
    button { background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="box">
    <h2 id="counterText">Count: 0</h2>
    <button id="incrementBtn">Increment Count</button>
  </div>

  <script>
    let count = 0;
    const text = document.getElementById("counterText");
    const btn = document.getElementById("incrementBtn");

    btn.addEventListener("click", () => {
      count++;
      text.textContent = "Count: " + count;
    });
  </script>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Building Dynamic Interactive Modals or Drawers', km: 'ការបង្កើត Popups/Modals ដោយប្រើ DOM Events' },
          description: {
            en: 'Toggling CSS classes (e.g. modal.classList.toggle("hidden")) is the standard way JavaScript triggers UI animations.',
            km: 'ការបន្ថែម ឬលុប Class តាម JS (classList.toggle("hidden")) គឺជាវិធីសាស្ត្រស្តង់ដារបង្កើត UI Modals។',
          },
        },
        practiceExercise: {
          question: {
            en: 'Add a "Reset" button in the script above that resets count to 0 when clicked.',
            km: 'បន្ថែម Button "Reset" ក្នុង Script ខាងលើដែលកំណត់ Count ទៅ 0 វិញពេលចុច។',
          },
          solution: 'Add button <button id="resetBtn">Reset</button> and JS listener resetBtn.addEventListener("click", () => { count = 0; text.textContent = "Count: 0"; });',
        },
        quizQuestions: [
          {
            id: 'q4-1',
            question: { en: 'Which method listens for user clicks on an HTML button element?', km: 'តើ Method មួយណាដែលស្តាប់តាមការចុចលើ HTML Button Element?' },
            options: [
              { id: 'opt1', text: { en: 'addEventListener("click", callback)', km: 'addEventListener("click", callback)' }, isCorrect: true },
              { id: 'opt2', text: { en: 'attachClick()', km: 'attachClick()' }, isCorrect: false },
            ],
            explanation: { en: 'addEventListener is the standard modern DOM method for handling mouse and keyboard events.', km: 'addEventListener គឺជា Method ស្តង់ដារទំនើបសម្រាប់ស្តាប់ Event។' },
          },
        ],
      },
      {
        id: 'm4-l2',
        slug: 'js-async-fetch-api',
        moduleNumber: 4,
        lessonNumberInModule: 2,
        title: {
          en: '4.2 Async JavaScript (Promises, Async/Await & Fetch API)',
          km: '៤.២ Asynchronous JS (Promises, Async/Await & Fetch API)',
        },
        durationMinutes: 45,
        difficulty: 'Intermediate',
        explanation: {
          en: 'Asynchronous JavaScript allows applications to request data from external backend REST APIs without freezing or blocking the user interface. Using modern async/await syntax with fetch makes asynchronous network code read cleanly like synchronous code.',
          km: 'Asynchronous JS អនុញ្ញាតឱ្យ Web App ផ្ញើ Request ទាញយកទិន្នន័យពី API ដោយមិនចាំបាច់កកស្ទះ UI ឡើយ។ ការប្រើ async/await ជួយឱ្យកូដមើលទៅរៀបរយ និងងាយយល់បំផុត។',
        },
        tutorial: {
          en: 'Async/Await Pattern:\nasync function loadUserData() {\n  try {\n    const response = await fetch("https://api.example.com/users");\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error("Fetch failed:", error);\n  }\n}',
          km: 'គំរូ Async/Await៖\nasync function loadUserData() {\n  try {\n    const response = await fetch("https://api.example.com/users");\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; padding: 20px; }
    .quote-card { background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155; }
    button { background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <div class="quote-card">
    <p id="quoteText">Click the button below to fetch a live programming advice from simulated API!</p>
    <button id="fetchBtn">Fetch Daily Quote</button>
  </div>

  <script>
    const btn = document.getElementById("fetchBtn");
    const quote = document.getElementById("quoteText");

    async function getQuote() {
      quote.textContent = "Loading from API...";
      try {
        // Simulating API fetch
        await new Promise(res => setTimeout(res, 800));
        quote.textContent = '"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra';
      } catch (err) {
        quote.textContent = "Error fetching quote.";
      }
    }

    btn.addEventListener("click", getQuote);
  </script>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Fetching Live Data in Single Page Apps', km: 'ការទាញយកទិន្នន័យផ្សាយផ្ទាល់ក្នុង Single Page Apps' },
          description: {
            en: 'Fetching JSON endpoints enables dynamic updates without reloading the browser page.',
            km: 'ទាញយក JSON ពី Server រួចបច្ចុប្បន្នភាព UI ដោយមិនបាច់ Refresh ទំព័រឡើយ។',
          },
        },
        practiceExercise: {
          question: {
            en: 'Modify the simulated quote text to display your favorite motivational developer quote.',
            km: 'កែប្រែសារ Quote ខាងលើទៅជាពាក្យស្លោកអភិវឌ្ឍន៍សូហ្វវែរដែលអ្នកពេញចិត្ត។',
          },
          solution: 'Update the string assigned to quote.textContent in the getQuote function.',
        },
        quizQuestions: [
          {
            id: 'q4-2',
            question: { en: 'What keyword pauses function execution inside an async function until a Promise settles?', km: 'តើ Keyword មួយណាដែលពន្យារពេលរង់ចាំ Promise ដំណើរការច្បាស់លាស់ក្នុង async function?' },
            options: [
              { id: 'opt1', text: { en: 'await', km: 'await' }, isCorrect: true },
              { id: 'opt2', text: { en: 'pause', km: 'pause' }, isCorrect: false },
            ],
            explanation: { en: 'await pauses async function execution until the Promise resolves or rejects.', km: 'await រង់ចាំដំណើរការ Promise រហូតទទួលបានលទ្ធផល ឬ Error។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm5',
    moduleNumber: 5,
    title: {
      en: 'Module 5: TypeScript for Frontend Engineers',
      km: 'មេរៀនទី ៥៖ TypeScript សម្រាប់ Frontend Engineers',
    },
    description: {
      en: 'Learn why TypeScript is essential for modern enterprise frontend development. Interfaces, types, function signatures, and generics.',
      km: 'យល់ដឹងពីសារៈសំខាន់នៃ TypeScript សម្រាប់គម្រោងធំៗ។ Interfaces, Type Aliases, Function Types និង Generics។',
    },
    lessons: [
      {
        id: 'm5-l1',
        slug: 'typescript-basics-interfaces',
        moduleNumber: 5,
        lessonNumberInModule: 1,
        title: {
          en: '5.1 Type Annotations, Interfaces & Custom Types',
          km: '៥.១ Type Annotations, Interfaces & Custom Types',
        },
        durationMinutes: 35,
        difficulty: 'Intermediate',
        explanation: {
          en: 'TypeScript is a typed superset of JavaScript that compiles down to clean plain JavaScript. By defining strict interfaces and types for user models, API responses, and function props, TypeScript catches bugs during development in your editor before your code ever runs in production.',
          km: 'TypeScript គឺជា JavaScript ដែលបន្ថែម Type Safety។ ការកំណត់ Interfaces សម្រាប់ Data Models ជួយទប់ស្កាត់ Bugs ចាប់តាំងពីពេលកំពុងសរសេរកូដក្នុង Editor ដំបូង។',
        },
        tutorial: {
          en: 'TypeScript Interface Example:\ninterface Student {\n  id: number;\n  name: string;\n  email: string;\n  isEnrolled: boolean;\n  skills?: string[]; // Optional property\n}\n\nfunction printStudent(student: Student): string {\n  return `${student.name} (${student.email})`;\n}',
          km: 'គំរូ TypeScript Interface៖\ninterface Student {\n  id: number;\n  name: string;\n  email: string;\n  isEnrolled: boolean;\n}\n\nfunction printStudent(student: Student): string {\n  return `${student.name} (${student.email})`;\n}',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; background: #0f172a; color: #a5f3fc; padding: 20px; }
    .card { background: #1e293b; padding: 15px; border-radius: 8px; border: 1px solid #334155; }
  </style>
</head>
<body>
  <div class="card">
    <h3>TypeScript Interface Compiled Output</h3>
    <p id="output">Loading student object...</p>
  </div>

  <script>
    // JS representation of typed TS object
    const student = {
      id: 101,
      name: "Nan Seyha",
      email: "seyha@sabaycode.com",
      isEnrolled: true
    };

    document.getElementById("output").textContent = 
      \`Student: \${student.name} | Status: \${student.isEnrolled ? "Active" : "Inactive"}\`;
  </script>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Typing API Response Contracts', km: 'ការកំណត់ Type ឱ្យទិន្នន័យទទួលបានពី API' },
          description: {
            en: 'Interfaces ensure developers never misspell property names like user.first_name vs user.firstName.',
            km: 'Interfaces ការពារកុំឱ្យសរសេរខុសឈ្មោះ Property ដូចជា user.first_name និង user.firstName។',
          },
        },
        practiceExercise: {
          question: {
            en: 'Add a new property "role" to the student object and display it in the card output.',
            km: 'បន្ថែម Property "role" ក្នុង student object រួចបង្ហាញវាក្នុង Card Output។',
          },
          solution: 'Add role: "Lead Developer" to student object and update output textContent.',
        },
        quizQuestions: [
          {
            id: 'q5-1',
            question: { en: 'What is the primary benefit of using TypeScript over plain JavaScript?', km: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការប្រើ TypeScript ធៀបនឹង JavaScript ធម្មតា?' },
            options: [
              { id: 'opt1', text: { en: 'Static type checking catches bugs at compile time', km: 'ការពិនិត្យ Type ជួយស្វែងរក និងទប់ស្កាត់ Bugs តាំងពីពេលសរសេរកូដ' }, isCorrect: true },
              { id: 'opt2', text: { en: 'TypeScript runs directly in web browsers without compilation', km: 'TypeScript ដើរលើ Browser ផ្ទាល់ដោយមិនបាច់ Compile' }, isCorrect: false },
            ],
            explanation: { en: 'TypeScript provides static typing and editor autocomplete, catching runtime errors before deployment.', km: 'TypeScript ជួយពិនិត្យប្រភេទទិន្នន័យ (Type Checking) ការពារកំហុសឆ្គងមុនពេល Deploy។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm6',
    moduleNumber: 6,
    title: {
      en: 'Module 6: Sass/SCSS — Advanced CSS Preprocessing',
      km: 'មេរៀនទី ៦៖ Sass/SCSS — បច្ចេកវិទ្យា Preprocessing ថ្នាក់ខ្ពស់',
    },
    description: {
      en: 'Learn SCSS syntax, variables, nesting selectors, partials (_filename.scss), mixins, functions, and architecture.',
      km: 'រៀន SCSS, Variables, Nesting, Partials (_file.scss), Mixins, Functions និងការរៀបចំ CSS Architecture។',
    },
    lessons: [
      {
        id: 'm6-l1',
        slug: 'scss-nesting-mixins',
        moduleNumber: 6,
        lessonNumberInModule: 1,
        title: {
          en: '6.1 SCSS Nesting, Variables & Reusable Mixins',
          km: '៦.១ SCSS Nesting, Variables & Mixins ប្រើប្រាស់ឡើងវិញ',
        },
        durationMinutes: 30,
        difficulty: 'Intermediate',
        explanation: {
          en: 'Sass (Syntactically Awesome Style Sheets) extends standard CSS with superpowers. SCSS nesting lets you write clean CSS hierarchy reflecting HTML DOM structure, while @mixin directives allow creating reusable parametric CSS function blocks.',
          km: 'Sass/SCSS បន្ថែមសមត្ថភាពអស្ចារ្យដល់ CSS។ Nesting ជួយឱ្យការសរសេរ CSS មានរចនាសម្ព័ន្ធដូច HTML ហើយ @mixin ជួយបង្កើត Reusable Blocks។',
        },
        tutorial: {
          en: 'SCSS Code Example:\n$primary-color: #6366f1;\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card {\n  background: #1e293b;\n  @include flex-center;\n  \n  h2 {\n    color: $primary-color;\n  }\n}',
          km: 'គំរូ SCSS Code៖\n$primary-color: #6366f1;\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card {\n  @include flex-center;\n  h2 { color: $primary-color; }\n}',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Compiled SCSS Output */
    :root { --primary: #6366f1; }
    body { font-family: sans-serif; background: #020617; color: white; padding: 20px; }
    .card-container { display: flex; gap: 15px; }
    .card-container .card {
      background: #0f172a;
      border: 1px solid #334155;
      padding: 15px;
      border-radius: 10px;
      flex: 1;
    }
    .card-container .card h3 { color: var(--primary); margin-top: 0; }
  </style>
</head>
<body>
  <h2>SCSS Nesting & Component Demo</h2>
  <div class="card-container">
    <div class="card">
      <h3>Card Title One</h3>
      <p>Clean nested SCSS compiled into standards-compliant CSS.</p>
    </div>
  </div>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Sass 7-1 Folder Architecture', km: 'ការរៀបចំអាគារ SCSS តាមស្តង់ដារ 7-1 Pattern' },
          description: {
            en: 'Large enterprise apps separate SCSS into abstract/, base/, components/, layout/, pages/, themes/, and main.scss.',
            km: 'គម្រោងធំៗបែងចែក SCSS ជា 7 Folders ដើមភាពងាយស្រួល Maintain ក្នុងរយៈពេលវែង។',
          },
        },
        practiceExercise: {
          question: {
            en: 'Add a hover style transition to .card that highlights border color with #6366f1.',
            km: 'បន្ថែម Hover transition លើ .card ឱ្យប្តូរពណ៌ Border ទៅ #6366f1។',
          },
          solution: 'Add .card-container .card:hover { border-color: #6366f1; transition: 0.3s; } in CSS.',
        },
        quizQuestions: [
          {
            id: 'q6-1',
            question: { en: 'Which Sass directive defines a reusable snippet of CSS rules?', km: 'តើ Directive មួយណាដែលបង្កើត Reusable CSS Snippet ក្នុង Sass?' },
            options: [
              { id: 'opt1', text: { en: '@mixin', km: '@mixin' }, isCorrect: true },
              { id: 'opt2', text: { en: '@define', km: '@define' }, isCorrect: false },
            ],
            explanation: { en: '@mixin defines reusable styles that can be included with @include.', km: '@mixin បង្កើត Style សារឡើងវិញដែលហៅប្រើតាម @include។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm7',
    moduleNumber: 7,
    title: {
      en: 'Module 7: Tailwind CSS — Utility-First Frontend Styling',
      km: 'មេរៀនទី ៧៖ Tailwind CSS — បច្ចេកវិទ្យា Utility-First CSS',
    },
    description: {
      en: 'Master utility-first workflow, responsive breakpoints (sm/md/lg/xl), custom theme configuration, and building modern UIs.',
      km: 'ស្ទាត់ជំនាញ Utility-First Styling, Responsive Breakpoints, Custom Theme Config និងការសាងសង់ UI លឿនរហ័ស។',
    },
    lessons: [
      {
        id: 'm7-l1',
        slug: 'tailwind-css-utility-first',
        moduleNumber: 7,
        lessonNumberInModule: 1,
        title: {
          en: '7.1 Tailwind CSS Core Utilities & Responsive Breakpoints',
          km: '៧.១ Tailwind CSS Core Utilities & Responsive Breakpoints',
        },
        durationMinutes: 35,
        difficulty: 'Beginner',
        explanation: {
          en: 'Tailwind CSS is a utility-first CSS framework packed with low-level classes like flex, pt-4, text-center, and bg-indigo-600. Instead of writing custom CSS class names, you construct entire responsive designs directly inside your HTML or React JSX components.',
          km: 'Tailwind CSS ផ្តល់នូវ Utility Classes ស្រាប់ៗដូចជា flex, pt-4, bg-indigo-600។ អ្នកអាចសរសេរ Style ទាំងអស់ផ្ទាល់ក្នុង HTML/JSX ដោយមិនបាច់បង្កើត CSS File ឡើយ។',
        },
        tutorial: {
          en: 'Common Tailwind Classes:\n- Layout: flex, grid, items-center, justify-between, gap-4\n- Spacing: p-4 (padding 1rem), my-6 (margin vertical 1.5rem)\n- Colors: bg-slate-900, text-indigo-400, border-slate-800\n- Responsive: sm:flex-row md:grid-cols-3 lg:text-xl',
          km: 'Tailwind Classes សំខាន់ៗ៖\n- Layout: flex, grid, items-center, justify-between\n- Spacing: p-4, mx-auto, space-y-4\n- Typography: text-xl, font-bold, text-slate-300\n- Responsive: sm:block, md:flex, lg:grid',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white p-6 font-sans">
  <div class="max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
    <div class="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
      Tailwind Active
    </div>
    <h2 class="text-2xl font-black text-white">Utility-First UI Card</h2>
    <p class="text-xs text-slate-400 leading-relaxed">
      Rapidly build modern web applications without ever leaving your HTML component markup.
    </p>
    <button class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition shadow-lg shadow-indigo-600/25">
      Get Started
    </button>
  </div>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Building Modern Glassmorphic Cards', km: 'ការបង្កើត Glassmorphic Cards ស្អាតបាតតាម Tailwind' },
          description: {
            en: 'Classes like bg-white/10 backdrop-blur-md border border-white/20 create instant translucent glass cards.',
            km: 'ប្រើ bg-white/10 backdrop-blur-md ដើម្បីបង្កើត Glassmorphism Card ដោយស្វ័យប្រវត្តិ។',
          },
        },
        practiceExercise: {
          question: {
            en: 'Change the button color from indigo (bg-indigo-600) to emerald green (bg-emerald-600).',
            km: 'ប្តូរពណ៌ Button ពី Indigo (bg-indigo-600) ទៅ Emerald Green (bg-emerald-600)។',
          },
          solution: 'Change bg-indigo-600 hover:bg-indigo-500 to bg-emerald-600 hover:bg-emerald-500.',
        },
        quizQuestions: [
          {
            id: 'q7-1',
            question: { en: 'Which prefix applies a Tailwind class specifically on medium screen width (768px+)?', km: 'តើ Prefix មួយណាដែលអនុវត្ត Tailwind Style លើ Screen ទំហំ Medium (768px ขึ้นไป)?' },
            options: [
              { id: 'opt1', text: { en: 'md:', km: 'md:' }, isCorrect: true },
              { id: 'opt2', text: { en: 'medium:', km: 'medium:' }, isCorrect: false },
            ],
            explanation: { en: 'md: prefix targets screens with min-width: 768px (tablets & desktop).', km: 'md: តំណាងឱ្យ Responsive Screen min-width: 768px។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm8',
    moduleNumber: 8,
    title: {
      en: 'Module 8: React.js — Modern Component Architecture',
      km: 'មេរៀនទី ៨៖ React.js — ស្ថាបត្យកម្ម Component ទំនើប',
    },
    description: {
      en: 'Master React components, JSX, props, state management (useState), side effects (useEffect), custom hooks, routing, and API integration.',
      km: 'ស្ទាត់ជំនាញ React Components, JSX, Props, State (useState), Effects (useEffect), Custom Hooks និង API Integration។',
    },
    lessons: [
      {
        id: 'm8-l1',
        slug: 'react-components-jsx-state',
        moduleNumber: 8,
        lessonNumberInModule: 1,
        title: {
          en: '8.1 React Components, JSX, Props & useState Hook',
          km: '៨.១ React Components, JSX, Props & useState Hook',
        },
        durationMinutes: 45,
        difficulty: 'Intermediate',
        explanation: {
          en: 'React is the most popular frontend JavaScript library in the world. It breaks UIs down into reusable functional components. State (managed via useState) holds dynamic application data; when state updates, React efficiently re-renders only affected DOM nodes.',
          km: 'React គឺជា Library ចម្បងគេបំផុតសម្រាប់អភិវឌ្ឍន៍ Web UI។ វាបែងចែក UI ជា Components តូចៗដែល Reusable។ State ជួយគ្រប់គ្រងទិន្នន័យ ដែលធ្វើឱ្យ UI បច្ចុប្បន្នភាពរលូន។',
        },
        tutorial: {
          en: 'React Component & Hook Pattern:\nimport React, { useState } from "react";\n\nexport function CounterApp({ initialValue = 0 }) {\n  const [count, setCount] = useState(initialValue);\n\n  return (\n    <div className="card">\n      <h2>Current Count: {count}</h2>\n      <button onClick={() => setCount(count + 1)}>+ Increment</button>\n    </div>\n  );\n}',
          km: 'គំរូ React Component & useState Hook៖\nimport React, { useState } from "react";\n\nexport function CounterApp() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <h2>Count: {count}</h2>\n      <button onClick={() => setCount(count + 1)}>+ Increment</button>\n    </div>\n  );\n}',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; background: #020617; color: white; padding: 20px; }
    .box { background: #0f172a; padding: 20px; border-radius: 12px; border: 1px solid #1e293b; max-width: 320px; text-align: center; }
    .btn { background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <div class="box">
    <h3>React Component Simulation</h3>
    <p id="stateVal">State Value: 0</p>
    <button class="btn" onclick="updateState()">Trigger useState()</button>
  </div>

  <script>
    let stateVal = 0;
    function updateState() {
      stateVal++;
      document.getElementById("stateVal").textContent = "State Value: " + stateVal;
    }
  </script>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Lifting State Up in Complex Form Wizards', km: 'ការលើក State (Lifting State Up) ក្នុង Form ស្មុគស្មាញ' },
          description: {
            en: 'Pass state setter callbacks down via props to allow child components to trigger parent state updates.',
            km: 'បញ្ជូន State Callback តាមរយៈ Props ដើមអនុញ្ញាតឱ្យ Child Component កែប្រែ State Parent។',
          },
        },
        practiceExercise: {
          question: {
            en: 'Add a decrement button that subtracts 1 from the state value.',
            km: 'បន្ថែម Button សម្រាប់ដក ១ ពីតម្លៃ State Value។',
          },
          solution: 'Add <button onclick="stateVal--; document.getElementById(\'stateVal\').textContent=\'State Value: \'+stateVal;">- Decrement</button>',
        },
        quizQuestions: [
          {
            id: 'q8-1',
            question: { en: 'Which React hook is used to create reactive state in a functional component?', km: 'តើ React Hook មួយណាដែលប្រើប្រាស់សម្រាប់បង្កើត Reactive State ក្នុង Functional Component?' },
            options: [
              { id: 'opt1', text: { en: 'useState', km: 'useState' }, isCorrect: true },
              { id: 'opt2', text: { en: 'useEffect', km: 'useEffect' }, isCorrect: false },
            ],
            explanation: { en: 'useState returns a state value and a state updater function.', km: 'useState ផ្តល់នូវ State Value និង Function សម្រាប់ប្តូរ State។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm9',
    moduleNumber: 9,
    title: {
      en: 'Module 9: Vue.js — Progressive Framework Track',
      km: 'មេរៀនទី ៩៖ Vue.js — វគ្គសិក្សា Progressive Framework',
    },
    description: {
      en: 'Learn Vue 3 fundamentals, Composition API, template directives (v-if, v-for, v-model), reactive refs, and React vs Vue comparison.',
      km: 'រៀន Vue 3 មូលដ្ឋាន, Composition API, Directives (v-if, v-for, v-model), Reactive refs និងការប្រៀបធៀប React vs Vue។',
    },
    lessons: [
      {
        id: 'm9-l1',
        slug: 'vue3-composition-api',
        moduleNumber: 9,
        lessonNumberInModule: 1,
        title: {
          en: '9.1 Vue 3 Essentials (Template Directives, Ref & Composition API)',
          km: '៩.១ Vue 3 មូលដ្ឋាន (Directives, Ref & Composition API)',
        },
        durationMinutes: 35,
        difficulty: 'Intermediate',
        explanation: {
          en: 'Vue.js is an approachable, versatile, and performant progressive JavaScript framework. With Vue 3 Composition API (<script setup>), you declare reactive state using ref() and bind variables seamlessly to templates using directives like v-model, v-if, and v-for.',
          km: 'Vue.js គឺជា Progressive JS Framework ដែលងាយស្រួលរៀន និងមានប្រសិទ្ធភាពខ្ពស់។ Vue 3 Composition API ប្រើប្រាស់ ref() សម្រាប់គ្រប់គ្រង Reactive State ជាមួយ Directives ដូចជា v-model, v-if និង v-for។',
        },
        tutorial: {
          en: 'Vue 3 Single File Component Example:\n<script setup>\nimport { ref } from "vue";\nconst message = ref("Hello Vue 3!");\n</script>\n\n<template>\n  <div>\n    <h1>{{ message }}</h1>\n    <input v-model="message" />\n  </div>\n</template>',
          km: 'គំរូ Vue 3 SFC (<script setup>)៖\n<script setup>\nimport { ref } from "vue";\nconst message = ref("Hello Vue 3!");\n</script>\n\n<template>\n  <div>\n    <h1>{{ message }}</h1>\n    <input v-model="message" />\n  </div>\n</template>',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <style>
    body { font-family: sans-serif; background: #020617; color: white; padding: 20px; }
    .card { background: #0f172a; border: 1px solid #1e293b; padding: 20px; border-radius: 12px; max-width: 340px; }
    input { width: 100%; padding: 8px; margin-top: 10px; border-radius: 6px; border: 1px solid #334155; background: #020617; color: white; box-sizing: border-box; }
  </style>
</head>
<body>
  <div id="app" class="card">
    <h2>{{ title }}</h2>
    <p>Live 2-Way Data Binding: {{ userInput }}</p>
    <input v-model="userInput" placeholder="Type something..." />
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const title = ref("Vue 3 Reactive Demo");
        const userInput = ref("Hello Vue Developer!");
        return { title, userInput };
      }
    }).mount("#app");
  </script>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Comparing React vs Vue Architectural Philosophy', km: 'ការប្រៀបធៀបទស្សនវិជ្ជារវាង React និង Vue' },
          description: {
            en: 'React favors pure JavaScript (JSX & explicit hooks), whereas Vue provides template directives with built-in 2-way data binding (v-model).',
            km: 'React ចូលចិត្ត JS សុទ្ធ (JSX) ខណៈ Vue ផ្តល់នូវ Template Directives និង 2-Way Binding ស្រាប់ៗ (v-model)។',
          },
        },
        practiceExercise: {
          question: {
            en: 'Change initial userInput value in setup() to "SabayCode Frontend Student".',
            km: 'ប្តូរតម្លៃដើមនៃ userInput ក្នុង setup() ទៅ "SabayCode Frontend Student"។',
          },
          solution: 'Update const userInput = ref("SabayCode Frontend Student"); in setup script.',
        },
        quizQuestions: [
          {
            id: 'q9-1',
            question: { en: 'Which directive provides two-way data binding on input elements in Vue?', km: 'តើ Directive មួយណាដែលផ្តល់នូវ 2-Way Data Binding លើ Input ក្នុង Vue?' },
            options: [
              { id: 'opt1', text: { en: 'v-model', km: 'v-model' }, isCorrect: true },
              { id: 'opt2', text: { en: 'v-bind', km: 'v-bind' }, isCorrect: false },
            ],
            explanation: { en: 'v-model automatically syncs user input field values with reactive state variables.', km: 'v-model ភ្ជាប់តម្លៃ Input ជាមួយ Reactive State ស្វ័យប្រវត្តិ។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm10',
    moduleNumber: 10,
    title: {
      en: 'Module 10: Modern Frontend Tooling, Vite & Deployment',
      km: 'មេរៀនទី ១០៖ ឧបករណ៍ Tooling ទំនើប, Vite & ការប្រកាសផ្សាយ',
    },
    description: {
      en: 'Understand Node package managers (npm/yarn), Vite build tool, DevTools performance profiling, and deploying static sites to Vercel or Netlify.',
      km: 'យល់ដឹងពី npm, Vite Build Tool, DevTools Performance Profiling និងការផ្សាយគេហទំព័រទៅកាន់ Vercel/Netlify។',
    },
    lessons: [
      {
        id: 'm10-l1',
        slug: 'npm-vite-deployment',
        moduleNumber: 10,
        lessonNumberInModule: 1,
        title: {
          en: '10.1 Package Managers (npm), Vite Bundler & Production Deploy',
          km: '១០.១ npm, Vite Bundler & ការប្រកាសផ្សាយទៅ Production',
        },
        durationMinutes: 30,
        difficulty: 'Intermediate',
        explanation: {
          en: 'Modern web applications rely on npm (Node Package Manager) to manage third-party libraries (Lucide Icons, Axios, Tailwind). Vite is the next-generation frontend build tool providing lightning-fast Instant Server Start and Hot Module Replacement (HMR). Once built (npm run build), static bundles are pushed to free hosting services like Vercel, Netlify, or GitHub Pages.',
          km: 'Web Apps ទំនើបប្រើប្រាស់ npm ដើមគ្រប់គ្រង Libraries។ Vite គឺជា Build Tool ជំនាន់ថ្មីដែលលឿនដូចផ្លេកបន្ទោរ។ ឯកសារដែល Build ដើមប្រកាសផ្សាយដោយឥតគិតថ្លៃលើ Vercel ឬ Netlify។',
        },
        tutorial: {
          en: 'Standard Project Command Sequence:\n1. npm create vite@latest my-app -- --template react-ts\n2. cd my-app && npm install\n3. npm run dev (Start local dev server)\n4. npm run build (Bundles production minified code into dist/ folder)\n5. Connect GitHub repository to Vercel/Netlify for auto-deploy on git push!',
          km: 'លំដាប់លំដោយបញ្ជាបង្កើត Project ទំនើប៖\n១. npm create vite@latest my-app -- --template react-ts\n២. cd my-app && npm install\n៣. npm run dev (បើក Local Dev Server)\n៤. npm run build (បង្កើត Minified Production កូដក្នុង dist/)\n៥. ភ្ជាប់ GitHub Repo ទៅកាន់ Vercel/Netlify ដើមប្រកាសផ្សាយ ស្វ័យប្រវត្តិ!​',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: monospace; background: #020617; color: #4ade80; padding: 20px; }
    .box { background: #0f172a; border: 1px solid #1e293b; padding: 15px; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="box">
    <h3>$ npm run build</h3>
    <p>vite v5.0.0 building for production...</p>
    <p>✓ 42 modules transformed.</p>
    <p>dist/index.html   0.45 kB</p>
    <p>dist/assets/index.js   142.10 kB │ gzip: 44.20 kB</p>
    <p style="color:#38bdf8;">✓ Built in 420ms. Ready for Vercel deployment!</p>
  </div>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Continuous Integration / Continuous Deployment (CI/CD)', km: 'ប្រព័ន្ធ CI/CD ស្វ័យប្រវត្តក្នុង GitHub & Vercel' },
          description: {
            en: 'Pushing code to main branch triggers automated GitHub actions tests and instant live site deployment.',
            km: 'រាល់ពេល Git Push ទៅ Main Branch ប្រព័ន្ធ Vercel នឹងប្រកាសផ្សាយគេហទំព័រថ្មីដោយស្វ័យប្រវត្តិ។',
          },
        },
        practiceExercise: {
          question: {
            en: 'Change the build time in the simulation output above to " Built in 280ms. Ready for Netlify deployment!".',
            km: 'កែប្រែពេលវេលា Build Time ខាងលើទៅជា "Built in 280ms. Ready for Netlify deployment!"។',
          },
          solution: 'Update the text string in the paragraph tag in the editor above.',
        },
        quizQuestions: [
          {
            id: 'q10-1',
            question: { en: 'Which directory folder contains the final optimized static files after running "npm run build"?', km: 'តើ Folder មួយណាដែលផ្ទុកឯកសារ Output ចុងក្រោយពេល Run "npm run build"?' },
            options: [
              { id: 'opt1', text: { en: 'dist/ (or build/)', km: 'dist/ (ឬ build/)' }, isCorrect: true },
              { id: 'opt2', text: { en: 'node_modules/', km: 'node_modules/' }, isCorrect: false },
            ],
            explanation: { en: 'The dist (distribution) folder contains minified CSS, JS, and HTML ready to serve on web hosts.', km: 'Folder dist ផ្ទុកឯកសារចុងក្រោយសម្រាប់ Upload ទៅកាន់ Web Host។' },
          },
        ],
      },
    ],
  },
  {
    id: 'm11',
    moduleNumber: 11,
    title: {
      en: 'Module 11: Portfolio Capstone Project & Certification',
      km: 'មេរៀនទី ១១៖ គម្រោងបញ្ចប់ការសិក្សា Capstone & វិញ្ញាបនបត្រ',
    },
    description: {
      en: 'Design, build, and deploy a full-featured responsive web application combining HTML5, CSS3/Tailwind, JavaScript/TypeScript, and React.',
      km: 'ឌីហ្សាញ បង្កើត និងប្រកាសផ្សាយ Web Application ពេញលេញរួមបញ្ចូល HTML5, CSS3/Tailwind, JS/TS និង React។',
    },
    lessons: [
      {
        id: 'm11-l1',
        slug: 'capstone-project-submission',
        moduleNumber: 11,
        lessonNumberInModule: 1,
        title: {
          en: '11.1 Full Stack Portfolio Capstone Brief & Submission',
          km: '១១.១ គម្រោង Portfolio Capstone និងការដាក់ស្នើ',
        },
        durationMinutes: 60,
        difficulty: 'Advanced',
        explanation: {
          en: 'Congratulations on reaching the final module of the Frontend Web Development Master Bootcamp! Your final capstone project requires building a complete responsive Web Application (e.g., E-Commerce Storefront, Task Management Dashboard, or Personal Developer Portfolio) adhering to clean code standards, responsive layout, and deployed live URL.',
          km: 'សូមអបអរសាទរដែលបានមកដល់មេរៀនចុងក្រោយនៃថ្នាក់រៀន Frontend Web Development! គម្រោង Capstone ចុងក្រោយតម្រូវឱ្យអ្នកបង្កើត Web App ពេញលេញ (ដូចជា E-Commerce, Dashboard, ឬ Personal Portfolio) ដែលបានប្រកាសផ្សាយលើ Web Host ផ្ទាល់។',
        },
        tutorial: {
          en: 'Capstone Project Deliverable Checklist:\n1. Semantic HTML5 & Accessibility compliance\n2. Responsive Tailwind CSS or Flexbox/Grid layout\n3. Interactive JS/TS logic or React state management\n4. Published live production link (Vercel, Netlify, or GitHub Pages)\n5. Clean GitHub Repository with a detailed README.md file',
          km: 'បញ្ជីតម្រូវការ Capstone Deliverables៖\n១. ប្រើប្រាស់ Semantic HTML5 & Accessibility\n២. Responsive Tailwind CSS ឬ Flexbox/Grid Layout\n៣. ប្រើប្រាស់ JS/TS ឬ React State Management\n៤. មាន Link ផ្សាយផ្ទាល់លើ Vercel/Netlify\n៥. មាន GitHub Repo ជាមួយ README.md ច្បាស់លាស់',
        },
        starterCode: {
          html: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white p-6 font-sans">
  <div class="max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 text-center">
    <div class="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
      ✓
    </div>
    <h2 class="text-3xl font-black text-white">Frontend Master Certification</h2>
    <p class="text-xs text-slate-300 leading-relaxed">
      Complete all lesson quizzes and submit your final capstone project to receive your official SabayCode Verified Certificate of Completion!
    </p>
    <div class="p-4 bg-slate-950 rounded-xl border border-slate-800 text-left space-y-2">
      <div class="text-xs font-bold text-indigo-400 font-mono">CAPSTONE STATUS</div>
      <div class="text-sm font-bold text-white">Ready for Official Review & Verification</div>
    </div>
  </div>
</body>
</html>`,
        },
        realWorldExample: {
          title: { en: 'Adding Capstone Project to Resume & LinkedIn', km: 'ការបន្ថែម Capstone Project ទៅក្នុង Resume & LinkedIn' },
          description: {
            en: 'Showcase your live production URL and GitHub repo link directly on your developer portfolio to land frontend job interviews.',
            km: 'បង្ហាញ Link គម្រោងផ្ទាល់ និង GitHub លើ Portfolio របស់អ្នកដើមទាក់ទាញឱកាសការងារសូហ្វវែរ។',
          },
        },
        practiceExercise: {
          question: {
            en: 'Ensure all previous module quizzes are completed before submitting the capstone.',
            km: 'សូមប្រាកដថាអ្នកបានឆ្លើយ Quizzes មេរៀនមុនៗទាំងអស់រួចរាល់មុនពេលបញ្ចប់។',
          },
          solution: 'Click Mark Complete on all modules to complete the 120-hour bootcamp certification!',
        },
        quizQuestions: [
          {
            id: 'q11-1',
            question: { en: 'What is the most crucial asset to include in your developer portfolio when applying for frontend engineering roles?', km: 'តើអ្វីជាទ្រព្យសកម្មសំខាន់បំផុតក្នុង Portfolio ពេលដាក់ពាក្យធ្វើការងារ Frontend Developer?' },
            options: [
              { id: 'opt1', text: { en: 'Live deployed web applications with clean source code on GitHub', km: 'គម្រោង Web Apps ដែលបានផ្សាយផ្ទាល់ និងមាន Source Code លើ GitHub' }, isCorrect: true },
              { id: 'opt2', text: { en: 'Text-only bullet list of programming keywords', km: 'បញ្ជីឈ្មោះពាក្យកូដទទេៗ' }, isCorrect: false },
            ],
            explanation: { en: 'Hiring managers prioritize reviewing live working products and clean code repositories on GitHub.', km: 'ក្រុមហ៊ុនមើលលើ Web Apps ដែលដើរពិតប្រាកដ និងភាពស្អាតបាតនៃកូដលើ GitHub។' },
          },
        ],
      },
    ],
  },
];
