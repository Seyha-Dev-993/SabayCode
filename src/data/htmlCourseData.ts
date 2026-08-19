import { FrontendCourse } from '../types/frontendClass';

export const HTML_COURSE_DATA: FrontendCourse = {
  id: 'html',
  title: { en: 'HTML5 Course', km: 'វគ្គសិក្សា HTML5' },
  iconName: 'html',
  categoryId: 'fundamentals',
  difficulty: 'Beginner',
  shortDescription: {
    en: 'Master HTML tags, semantics, forms, tables, media, and document structure.',
    km: 'ស្ទាត់ជំនាញ HTML tags, semantics, forms, tables, media, និងរចនាសម្ព័ន្ធ document។'
  },
  summary: {
    en: 'HTML (HyperText Markup Language) provides the structural skeleton for every page on the web. Learn semantic markup, accessibility, forms, and modern HTML5 APIs.',
    km: 'HTML គឺជាឆ្អឹងខ្នងនៃរចនាសម្ព័ន្ធទំព័រ Web ទាំងអស់។ សិក្សាពី Semantic tags, accessibility, forms និង HTML5 APIs។'
  },
  estimatedHours: 8,
  lessonCount: 30,
  cheatSheet: [
    {
      concept: 'Document Boilerplate',
      code: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ចំណងជើងទំព័រ</title>
</head>
<body>
  <h1>ជម្រាបសួរ Web World</h1>
</body>
</html>`,
      explanation: {
        en: 'Standard HTML5 document starting structure with UTF-8 and responsive viewport metadata.',
        km: 'រចនាសម្ព័ន្ធចាប់ផ្តើម HTML5 Standard ដែលមាន UTF-8 encoding និង Responsive viewport metadata។'
      }
    },
    {
      concept: 'Semantic Layout Tags',
      code: `<header>
  <nav><a href="#home">Home</a></nav>
</header>
<main>
  <section>
    <article>
      <h2>ចំណងជើង bài</h2>
    </article>
  </section>
</main>
<footer>
  <p>&copy; 2026 My Web Application</p>
</footer>`,
      explanation: {
        en: 'Meaningful structural elements that communicate page layout clearly to search engines and screen readers.',
        km: 'Tag ផ្នែករចនាសម្ព័ន្ធដែលមានន័យច្បាស់លាស់ ជួយដល់ SEO និង Screen Readers។'
      }
    },
    {
      concept: 'Form with Label & Validation',
      code: `<form action="/submit" method="POST">
  <label for="username">ឈ្មោះអ្នកប្រើប្រាស់:</label>
  <input type="text" id="username" name="username" required placeholder="បញ្ចូលឈ្មោះ...">
  
  <label for="email">អ៊ីមែល:</label>
  <input type="email" id="email" name="email" required placeholder="example@mail.com">
  
  <button type="submit">ផ្ញើទិន្នន័យ</button>
</form>`,
      explanation: {
        en: 'Interactive HTML form controls with accessibility labels and native input validation attributes.',
        km: 'ទម្រង់ Input សម្រាប់ទទួលទិន្នន័យពីអ្នកប្រើប្រាស់ ព្រមទាំងមាន Label និង Native Validation។'
      }
    },
    {
      concept: 'Tables with Semantic Headers',
      code: `<table border="1">
  <thead>
    <tr>
      <th>ល.រ</th>
      <th>ឈ្មោះ</th>
      <th>ជំនាញ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>១</td>
      <td>សុខា</td>
      <td>Frontend Developer</td>
    </tr>
  </tbody>
</table>`,
      explanation: {
        en: 'Structured data grid with strict table header and body layout tags.',
        km: 'ការរៀបចំទិន្នន័យជាតារាងដែលមាន thead, tbody, th, និង td ត្រឹមត្រូវ។'
      }
    },
    {
      concept: 'Responsive Image & Alt Text',
      code: `<img 
  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" 
  alt="កុំព្យូទ័រយួរដៃសម្រាប់សរសេរកូដ HTML" 
  width="600" 
  height="400" 
  loading="lazy"
/>`,
      explanation: {
        en: 'Self-closing image element with descriptive accessibility alt text, explicit dimensions, and lazy loading.',
        km: 'Tag បង្ហាញរូបភាពដែលមាន Alt text សម្រាប់ Accessibility និង Performance Optimization។'
      }
    },
    {
      concept: 'SEO Meta Tags & Favicon',
      code: `<meta name="description" content="វគ្គសិក្សា HTML5 មូលដ្ឋានគ្រឹះដល់កម្រិតខ្ពស់">
<meta property="og:title" content="HTML5 Frontend Development Course">
<meta property="og:image" content="https://example.com/banner.jpg">
<link rel="icon" href="/favicon.ico" type="image/x-icon">`,
      explanation: {
        en: 'Essential metadata for search engine indexing and social network sharing preview cards.',
        km: 'Meta tags សម្រាប់បង្កើន SEO លើ Search Engine និងការបង្ហាញរូបភាព Sharing លើ Social Media។'
      }
    },
    {
      concept: 'Common HTML Mistakes Mini-Checklist',
      code: `<!-- ❌ ខុស: ភ្លេច tag បិទ ឬ nesting ខុស -->
<p>អត្ថបទនេះ <b>មានអក្សរដិត </p></b>

<!-- ✅ ត្រូវ: Nesting ត្រឹមត្រូវតាមលំដាប់ -->
<p>អត្ថបទនេះ <b>មានអក្សរដិត</b></p>

<!-- ❌ ខុស: ភ្លេច alt attribute លើ img -->
<img src="logo.png">

<!-- ✅ ត្រូវ: តែងតែដាក់ alt attribute -->
<img src="logo.png" alt="ឡូហ្គោក្រុមហ៊ុន">`,
      explanation: {
        en: 'Key code formatting rules: proper element nesting and required accessibility attributes.',
        km: 'ច្បាប់សរសេរកូដសំខាន់ៗ៖ Nesting Element តាមលំដាប់ និងតែងតែដាក់ alt Attribute។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-html-1',
      question: {
        en: 'Which HTML5 element represents the main unique content of a document?',
        km: 'តើ HTML5 Element មួយណាដែលតំណាងឱ្យមាតិកាចម្បងតែមួយគត់នៃ document?'
      },
      codeSnippet: '<main>\n  <h1>រចនាសម្ព័ន្ធមាតិកាចម្បង</h1>\n</main>',
      options: [
        { id: '1', text: { en: '<main>', km: '<main>' }, isCorrect: true },
        { id: '2', text: { en: '<section>', km: '<section>' }, isCorrect: false },
        { id: '3', text: { en: '<div>', km: '<div>' }, isCorrect: false },
        { id: '4', text: { en: '<body>', km: '<body>' }, isCorrect: false }
      ],
      explanation: {
        en: 'The <main> tag specifies the main, unique content of the document and should not be repeated multiple times as a direct page container.',
        km: '<main> Tag ត្រូវបានប្រើសម្រាប់កំណត់មាតិកាចម្បងនៃគេហទំព័រដែលមិនជាន់គ្នាជាមួយ Header ឬ Footer។'
      }
    },
    {
      id: 'q-html-2',
      question: {
        en: 'What is the correct attribute used to specify an alternative text for an image if it fails to load?',
        km: 'តើ Attribute មួយណាដែលប្រើសម្រាប់បង្ហាញអត្ថបទជំនួស (Alt text) នៅពេលរូបភាពមិនដើរ?'
      },
      codeSnippet: '<img src="profile.jpg" ???="រូបថតប្រវត្តិរូប">',
      options: [
        { id: '1', text: { en: 'title', km: 'title' }, isCorrect: false },
        { id: '2', text: { en: 'alt', km: 'alt' }, isCorrect: true },
        { id: '3', text: { en: 'src', km: 'src' }, isCorrect: false },
        { id: '4', text: { en: 'description', km: 'description' }, isCorrect: false }
      ],
      explanation: {
        en: 'The alt attribute provides alternative text for images, crucial for screen reader accessibility and SEO.',
        km: 'Attribute `alt` ផ្តល់នូវអត្ថបទពិពណ៌នារូបភាពដែលសំខាន់បំផុតសម្រាប់ Screen Reader និង SEO។'
      }
    },
    {
      id: 'q-html-3',
      question: {
        en: 'Which input type attribute creates a clickable checkbox for selecting multiple options?',
        km: 'តើ `type` attribute មួយណាបង្កើត Checkbox សម្រាប់ជ្រើសរើសជម្រើសច្រើន?'
      },
      codeSnippet: '<input type="???" name="skill" value="html"> HTML5',
      options: [
        { id: '1', text: { en: 'type="radio"', km: 'type="radio"' }, isCorrect: false },
        { id: '2', text: { en: 'type="checkbox"', km: 'type="checkbox"' }, isCorrect: true },
        { id: '3', text: { en: 'type="button"', km: 'type="button"' }, isCorrect: false },
        { id: '4', text: { en: 'type="select"', km: 'type="select"' }, isCorrect: false }
      ],
      explanation: {
        en: 'The type="checkbox" allows users to select zero or more independent options from a group.',
        km: '`type="checkbox"` អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ជ្រើសរើសជម្រើសច្រើនក្នុងពេលតែមួយ។'
      }
    },
    {
      id: 'q-html-4',
      question: {
        en: 'How do you open a hyperlink in a new browser tab using the <a> tag?',
        km: 'តើត្រូវប្រើ Attribute អ្វីដើម្បីបើកតំណ Link ក្នុង Tab ថ្មីនៃ Browser?'
      },
      codeSnippet: '<a href="https://google.com" target="???">Google</a>',
      options: [
        { id: '1', text: { en: 'target="_blank"', km: 'target="_blank"' }, isCorrect: true },
        { id: '2', text: { en: 'target="_self"', km: 'target="_self"' }, isCorrect: false },
        { id: '3', text: { en: 'target="_new"', km: 'target="_new"' }, isCorrect: false },
        { id: '4', text: { en: 'open="newtab"', km: 'open="newtab"' }, isCorrect: false }
      ],
      explanation: {
        en: 'target="_blank" tells the browser to open the linked document in a new window or tab.',
        km: '`target="_blank"` បញ្ជាឱ្យ Browser បើក Link នោះនៅក្នុង Tab ថ្មី។'
      }
    },
    {
      id: 'q-html-5',
      question: {
        en: 'Which doctype declaration is required at the very top of an HTML5 document?',
        km: 'តើការប្រកាស DOCTYPE មួយណាដែលត្រឹមត្រូវសម្រាប់ឯកសារ HTML5?'
      },
      options: [
        { id: '1', text: { en: '<!DOCTYPE html>', km: '<!DOCTYPE html>' }, isCorrect: true },
        { id: '2', text: { en: '<!DOCTYPE HTML PUBLIC "...">', km: '<!DOCTYPE HTML PUBLIC "...">' }, isCorrect: false },
        { id: '3', text: { en: '<html doctype="5">', km: '<html doctype="5">' }, isCorrect: false },
        { id: '4', text: { en: '<?xml version="1.0"?>', km: '<?xml version="1.0"?>' }, isCorrect: false }
      ],
      explanation: {
        en: '<!DOCTYPE html> is the short, required preamble for all modern HTML5 documents.',
        km: '`<!DOCTYPE html>` គឺជាការប្រកាសស្តង់ដារខ្លី និងសាមញ្ញរបស់ HTML5។'
      }
    },
    {
      id: 'q-html-6',
      question: {
        en: 'Which HTML element is used to group table rows into a header section?',
        km: 'តើ Tag មួយណាប្រើសម្រាប់ប្រមូលផ្តុំជួរដេកក្បាលតារាង (Header rows)?'
      },
      options: [
        { id: '1', text: { en: '<thead>', km: '<thead>' }, isCorrect: true },
        { id: '2', text: { en: '<header>', km: '<header>' }, isCorrect: false },
        { id: '3', text: { en: '<th>', km: '<th>' }, isCorrect: false },
        { id: '4', text: { en: '<caption>', km: '<caption>' }, isCorrect: false }
      ],
      explanation: {
        en: '<thead> wraps the header rows of a <table> element.',
        km: '`<thead>` ប្រើសម្រាប់ក្តោបផ្នែកក្បាលនៃតារាង (`<table>`)។'
      }
    },
    {
      id: 'q-html-7',
      question: {
        en: 'What is the purpose of the <label> element for input controls?',
        km: 'តើ <label> element មានប្រយោជន៍អ្វីខ្លះសម្រាប់ Input Form?'
      },
      options: [
        { id: '1', text: { en: 'Provides clickable label text linked to input id and improves accessibility', km: 'ភ្ជាប់អត្ថបទទៅកាន់ Input id និងជួយដល់ Accessibility' }, isCorrect: true },
        { id: '2', text: { en: 'Styles the background color of the input field', km: 'តុបតែងពណ៌ផ្ទៃខាងក្រោយនៃ Input' }, isCorrect: false },
        { id: '3', text: { en: 'Submits form data directly to the database', km: 'ផ្ញើទិន្នន័យ Form ទៅកាន់ Database ដោយផ្ទាល់' }, isCorrect: false },
        { id: '4', text: { en: 'Creates a dropdown list', km: 'បង្កើតបញ្ជីទម្លាក់ចុះ (Dropdown)' }, isCorrect: false }
      ],
      explanation: {
        en: 'Using <label for="id"> binds text to inputs, making it clickable and easily read by screen readers.',
        km: '`label` ដែលមាន `for` attribute បង្កើតទំនាក់ទំនងរវាងអត្ថបទ និង Input field ជួយសម្រួលដល់អ្នកប្រើប្រាស់។'
      }
    },
    {
      id: 'q-html-8',
      question: {
        en: 'Which tag is an inline container used to style or script a specific span of text?',
        km: 'តើ Tag មួយណាជា Inline container ប្រើសម្រាប់កំណត់ Style លើអត្ថបទមួយផ្នែកខ្លី?'
      },
      options: [
        { id: '1', text: { en: '<span>', km: '<span>' }, isCorrect: true },
        { id: '2', text: { en: '<div>', km: '<div>' }, isCorrect: false },
        { id: '3', text: { en: '<section>', km: '<section>' }, isCorrect: false },
        { id: '4', text: { en: '<p>', km: '<p>' }, isCorrect: false }
      ],
      explanation: {
        en: '<span> is an inline non-semantic container that does not break onto a new line.',
        km: '`<span>` គឺជា Inline element ដែលមិនបង្កើតជួរថ្មី ហើយសមស្របសម្រាប់តុបតែងពាក្យ ឬអក្សរខ្លីៗ។'
      }
    }
  ],
  capstoneProject: {
    title: { en: 'Personal Developer Bio & Portfolio Page', km: 'ទំព័រ Personal Bio & Portfolio ផ្ទាល់ខ្លួន' },
    description: {
      en: 'Build a full one-page HTML site featuring a semantic header, navigation bar, about-me section, skills list, work experience table, interactive contact form with validation, and a structured footer.',
      km: 'បង្កើតទំព័រ HTML Bio ផ្ទាល់ខ្លួនដែលមាន Semantic Header, Navigation, About Section, List of Skills, Work Experience Table, Contact Form និង Semantic Footer។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>សុខា - Frontend Web Developer</title>
</head>
<body style="font-family: system-ui, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; color: #333;">

  <!-- 1. Semantic Header & Navigation -->
  <header style="border-bottom: 2px solid #3b82f6; padding-bottom: 15px; margin-bottom: 20px;">
    <h1>សុខា - Frontend Web Developer</h1>
    <p>អ្នកអភិវឌ្ឍន៍គេហទំព័រដែលចូលចិត្តបង្កើត UI ស្អាតបាត Accessibility និង Performance ខ្ពស់។</p>
    <nav>
      <a href="#about" style="margin-right: 15px; text-decoration: none; color: #2563eb; font-weight: bold;">អំពីខ្ញុំ</a>
      <a href="#skills" style="margin-right: 15px; text-decoration: none; color: #2563eb; font-weight: bold;">ជំនាញ</a>
      <a href="#experience" style="margin-right: 15px; text-decoration: none; color: #2563eb; font-weight: bold;">បទពិសោធន៍</a>
      <a href="#contact" style="text-decoration: none; color: #2563eb; font-weight: bold;">ទំនាក់ទំនង</a>
    </nav>
  </header>

  <!-- 2. Main Content Area -->
  <main>
    <!-- About Section -->
    <section id="about" style="margin-bottom: 30px;">
      <h2>១. អំពីខ្ញុំ (About Me)</h2>
      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="រូបថតប្រវត្តិរូប សុខា" width="150" height="150" style="border-radius: 50%; float: right; margin-left: 20px;">
      <p>ខ្ញុំបាទជា Frontend Developer ដែលមានបទពិសោធន៍សរសេរកូដ HTML5, CSS3 និង JavaScript។ ខ្ញុំស្រឡាញ់ការបង្កើត Web Application ដែលមានល្បឿនលឿន និងងាយស្រួលប្រើប្រាស់។</p>
    </section>

    <!-- Skills List Section -->
    <section id="skills" style="margin-bottom: 30px; clear: both;">
      <h2>២. បញ្ជីជំនាញបច្ចេកវិទ្យា (Technical Skills)</h2>
      <ul>
        <li><strong>HTML5:</strong> Semantic elements, Forms, Accessibility (a11y)</li>
        <li><strong>CSS3:</strong> Flexbox, Grid, Responsive Web Design</li>
        <li><strong>JavaScript:</strong> ES6+, DOM Manipulation, Async/Await</li>
      </ul>
    </section>

    <!-- Work Experience Table Section -->
    <section id="experience" style="margin-bottom: 30px;">
      <h2>៣. បទពិសោធន៍ការងារ (Work Experience)</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse; text-align: left;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th>ឆ្នាំ (Year)</th>
            <th>តួនាទី (Role)</th>
            <th>ក្រុមហ៊ុន (Company)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024 - បច្ចុប្បន្ន</td>
            <td>Frontend Developer</td>
            <td>Cambodia Tech Solutions</td>
          </tr>
          <tr>
            <td>2023 - 2024</td>
            <td>Junior Web Developer</td>
            <td>Angkor Digital Studio</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Contact Form Section -->
    <section id="contact" style="margin-bottom: 30px; background: #f9fafb; padding: 20px; border-radius: 8px;">
      <h2>៤. ទម្រង់ទំនាក់ទំនង (Contact Form)</h2>
      <form action="#" method="POST">
        <p>
          <label for="fullname">ឈ្មោះពេញ:</label><br>
          <input type="text" id="fullname" name="fullname" required placeholder="បញ្ចូលឈ្មោះ..." style="width: 100%; padding: 8px; margin-top: 5px;">
        </p>
        <p>
          <label for="email">អ៊ីមែល:</label><br>
          <input type="email" id="email" name="email" required placeholder="example@domain.com" style="width: 100%; padding: 8px; margin-top: 5px;">
        </p>
        <p>
          <label for="message">សាររបស់អ្នក:</label><br>
          <textarea id="message" name="message" rows="4" required placeholder="សរសេរសារនៅទីនេះ..." style="width: 100%; padding: 8px; margin-top: 5px;"></textarea>
        </p>
        <button type="submit" style="background: #2563eb; color: white; border: none; padding: 10px 20px; font-weight: bold; border-radius: 4px; cursor: pointer;">ផ្ញើសារ (Send Message)</button>
      </form>
    </section>
  </main>

  <!-- 3. Semantic Footer -->
  <footer style="border-top: 1px solid #e5e7eb; padding-top: 15px; text-align: center; color: #6b7280; font-size: 14px;">
    <p>&copy; 2026 សុខា Frontend Developer. រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
  </footer>

</body>
</html>`
    }
  },
  lessons: [
    // MODULE 1 — การណែនាំអំពី HTML5 & Elements
    {
      id: 'html-l1',
      slug: 'html-introduction',
      moduleNumber: 1,
      lessonNumberInModule: 1,
      title: { en: '1.1 What HTML is & How Web Renders It', km: '១.១ អ្វីជា HTML & របៀបដែល Web Render វា' },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'HTML (HyperText Markup Language) is the standard markup language used to structure web pages. Browsers parse HTML into a DOM (Document Object Model) tree to render text, links, and media.',
        km: 'HTML (HyperText Markup Language) គឺជាភាសាគ្រឹះដែលប្រើសម្រាប់កំណត់រចនាសម្ព័ន្ធមាតិកាគេហទំព័រ។ Web Browser អាន និងបកប្រែកូដ HTML ទៅជាដើមឈើ DOM (Document Object Model) ដើម្បីបង្ហាញរូបភាព អត្ថបទ និងតំណភ្ជាប់។'
      },
      tutorial: {
        en: '1. Open any text editor or this sandbox.\n2. Write plain text inside HTML tags like <h1> and <p>.\n3. The browser interprets <tags> as visual rules, not raw printed text.',
        km: '១. សរសេរកូដ HTML នៅក្នុង Tag ដូចជា <h1> និង <p>។\n២. Browser នឹងបកប្រែ Tag ទាំងនោះទៅជាចំណងជើងធំ និងកថាខណ្ឌអត្ថបទ។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h1>ស្វាគមន៍មកកាន់ពិភព HTML5</h1>
  <p>HTML ជួយបង្កើតរចនាសម្ព័ន្ធគេហទំព័រដំបូងគេបង្អស់។</p>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Viewing Source Code in Browser', km: 'ការពិនិត្យមើល Page Source លើ Web real' },
        description: {
          en: 'Every major website (Google, Facebook, YouTube) relies on HTML structure under the hood. Right-click any webpage and choose "View Page Source" to inspect its HTML tree.',
          km: 'គ្រប់គេហទំព័រទាំងអស់នៅលើពិភពលោកប្រើប្រាស់ HTML ជាគ្រឹះ។ អ្នកអាចចុចស្តាំលើ Webpage រួចជ្រើសយក "View Page Source" ដើម្បីមើលកូដ HTML។'
        }
      },
      practiceExercise: {
        question: { en: 'Add an h2 heading with text "អំពីខ្លួនខ្ញុំ" inside body.', km: 'បន្ថែម Tag <h2> ដែលមានពាក្យ "អំពីខ្លួនខ្ញុំ" នៅខាងក្នុង body។' },
        solution: '<h2>អំពីខ្លួនខ្ញុំ</h2>'
      },
      quizQuestions: [
        {
          id: 'qh1-1',
          question: { en: 'What does HTML stand for?', km: 'តើ HTML តំណាងឱ្យពាក្យពេញអ្វី?' },
          options: [
            { id: 'a', text: { en: 'HyperText Markup Language', km: 'HyperText Markup Language' }, isCorrect: true },
            { id: 'b', text: { en: 'High Tech Modern Language', km: 'High Tech Modern Language' }, isCorrect: false }
          ],
          explanation: { en: 'HTML stands for HyperText Markup Language.', km: 'HTML តំណាងឱ្យ HyperText Markup Language។' }
        }
      ]
    },
    {
      id: 'html-l2',
      slug: 'html-document-structure',
      moduleNumber: 1,
      lessonNumberInModule: 2,
      title: { en: '1.2 Basic Document Structure', km: '១.២ រចនាសម្ព័ន្ធមូលដ្ឋាននៃ Document' },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'An HTML document strictly requires a <!DOCTYPE html> declaration, an <html> root tag, a <head> section for metadata, and a <body> section for user-visible content.',
        km: 'ឯកសារ HTML Standard ត្រូវការជាចាំបាច់នូវ <!DOCTYPE html>, <html> root, <head> សម្រាប់រក្សាទុកព័ត៌មានជំនួយ (Metadata) និង <body> សម្រាប់បង្ហាញមាតិកាលើអេក្រង់។'
      },
      tutorial: {
        en: 'Always include charset="UTF-8" inside <head> to display Khmer characters and special symbols accurately without corrupt text rendering.',
        km: 'ត្រូវតែដាក់ <meta charset="UTF-8"> នៅខាងក្នុង <head> ជានិច្ច ដើម្បីឱ្យ Browser បង្ហាញអក្សរខ្មែរបានត្រឹមត្រូវ ១០០% ដោយមិនបែក Font។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>រចនាសម្ព័ន្ធ HTML5 ដំបូង</title>
</head>
<body>
  <h1>ទំព័រដើមនៃ Web Application</h1>
  <p>មាតិកាទាំងអស់ដែលអ្នកមើលឃើញលើ Browser គឺស្ថិតនៅក្នុង body tag។</p>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'UTF-8 Character Encoding for Khmer Language', km: 'សារៈសំខាន់នៃ UTF-8 Encoding សម្រាប់អក្សរខ្មែរ' },
        description: {
          en: 'Without UTF-8 encoding declaration, web browsers may display Khmer text as random unreadable symbols like "?????" or corrupted characters.',
          km: 'ប្រសិនបើគ្មាន Meta Charset UTF-8 ទេ Browser អាចនឹងបង្ហាញអក្សរខ្មែរទៅជាសញ្ញាសួរ ឬសញ្ញាប្រអប់ដែលមើលមិនយល់ឡើយ។'
        }
      },
      practiceExercise: {
        question: { en: 'Change the <title> tag text to "ប្រវត្តិរូបសង្ខេប".', km: 'ផ្លាស់ប្តូរអត្ថបទក្នុង Tag <title> ទៅជា "ប្រវត្តិរូបសង្ខេប"។' },
        solution: '<title>ប្រវត្តិរូបសង្ខេប</title>'
      },
      quizQuestions: [
        {
          id: 'qh1-2',
          question: { en: 'Which tag contains the visible content of a webpage?', km: 'តើ Tag មួយណាដែលផ្ទុកមាតិកាមើលឃើញលើអេក្រង់?' },
          options: [
            { id: 'a', text: { en: '<body>', km: '<body>' }, isCorrect: true },
            { id: 'b', text: { en: '<head>', km: '<head>' }, isCorrect: false }
          ],
          explanation: { en: 'All content rendered in the main viewport lives inside <body>.', km: 'មាតិកាដែលត្រូវបង្ហាញជូនអ្នកប្រើប្រាស់ គឺស្ថិតក្នុង <body>។' }
        }
      ]
    },
    {
      id: 'html-l3',
      slug: 'html-elements-tags-nesting',
      moduleNumber: 1,
      lessonNumberInModule: 3,
      title: { en: '1.3 Elements, Tags, and Nesting Rules', km: '១.៣ Elements, Tags និងច្បាប់ Nesting' },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'An HTML element consists of a start tag, content, and an end tag. Nesting means placing elements inside other elements in strict order (First Opened = Last Closed).',
        km: 'HTML Element ផ្សំឡើងពី Tag បើក, មាតិកា, និង Tag បិទ។ Nesting គឺជាការដាក់ Element មួយនៅក្នុង Element មួយទៀតដោយគោរពតាមលំដាប់ (បើកមុន ត្រូវបិទក្រោយគេ)។'
      },
      tutorial: {
        en: '1. Correct nesting: <p><b>អត្ថបទ</b></p>\n2. Incorrect nesting: <p><b>អត្ថបទ</p></b>',
        km: '១. សរសេរត្រឹមត្រូវ៖ <p><b>អត្ថបទ</b></p>\n២. សរសេរខុស៖ <p><b>អត្ថបទ</p></b>'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <div>
    <h2>បញ្ជីព័ត៌មាន</h2>
    <p>កថាខណ្ឌនេះស្ថិតនៅខាងក្នុង <b>div element</b> ត្រឹមត្រូវ។</p>
  </div>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Preventing Layout Bugs through Proper Nesting', km: 'ការការពារ Bug Layout ដោយសារសរសេរ Tag មិនត្រូវលំដាប់' },
        description: {
          en: 'Unclosed or incorrectly nested tags cause browsers to attempt auto-repairing the HTML DOM tree, often breaking visual designs unexpectedly.',
          km: 'ការភ្លេចបិទ Tag ឬ Nesting ខុស ធ្វើឱ្យ Browser ព្យាយាមជួសជុល DOM ដោយស្វ័យប្រវត្តិនាំឱ្យ Layout ដើរខុសប្រក្រតី។'
        }
      },
      practiceExercise: {
        question: { en: 'Nest a <strong> tag inside a <p> tag.', km: 'ដាក់ Tag <strong> នៅខាងក្នុង Tag <p> ឱ្យបានត្រឹមត្រូវ។' },
        solution: '<p>អត្ថបទ <strong style="color:red">សំខាន់</strong></p>'
      },
      quizQuestions: [
        {
          id: 'qh1-3',
          question: { en: 'Is <p><b>Text</p></b> correctly nested?', km: 'តើ <p><b>Text</p></b> ត្រូវបានសរសេរ Nesting ត្រឹមត្រូវទេ?' },
          options: [
            { id: 'a', text: { en: 'No, <b> must close before <p>', km: 'ទេ, <b> ត្រូវបិទមុន <p>' }, isCorrect: true },
            { id: 'b', text: { en: 'Yes, it is valid', km: 'បាទ/ចាស គឺត្រឹមត្រូវ' }, isCorrect: false }
          ],
          explanation: { en: 'Inner elements must close before outer wrapper elements close.', km: 'Tag នៅខាងក្នុងត្រូវតែបិទបញ្ចប់មុន Tag ដែលនៅខាងក្រៅ។' }
        }
      ]
    },

    // MODULE 2 — Text, Headings & Paragraphs
    {
      id: 'html-l4',
      slug: 'html-headings-outline',
      moduleNumber: 2,
      lessonNumberInModule: 1,
      title: { en: '2.1 Headings <h1>–<h6> and Document Hierarchy', km: '២.១ ក្បាលអត្ថបទ <h1>–<h6> និង Document Hierarchy' },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'HTML provides 6 levels of headings: <h1> (most important) down to <h6> (least important). Never skip heading levels (e.g. from <h1> straight to <h3>).',
        km: 'HTML មាន ៦ កម្រិតចំណងជើងចាប់ពី <h1> (សំខាន់បំផុត) រហូតដល់ <h6> (តូចបំផុត)។ មិនត្រូវរំលងកម្រិតចំណងជើងឡើយ (ឧទាហរណ៍៖ ពី <h1> ទៅ <h3> ដោយគ្មាន <h2>)។'
      },
      tutorial: {
        en: 'Each HTML page should ideally have exactly ONE <h1> heading representing the main page title for optimal SEO.',
        km: 'ទំព័រ Web នីមួយៗគប្បីមាន <h1> តែមួយគត់ដែលតំណាងឱ្យប្រធានបទធំជាងគេបង្អស់ ដើម្បីចំណេញ SEO។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h1>១. វគ្គសិក្សាអភិវឌ្ឍន៍គេហទំព័រ (H1)</h1>
  <h2>១.១ មូលដ្ឋានគ្រឹះ HTML5 (H2)</h2>
  <h3>១.១.១ ការប្រើប្រាស់ Headings (H3)</h3>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'SEO Document Heading Tree', km: 'ការរៀបចំ Heading Structure សម្រាប់ Google Search' },
        description: {
          en: 'Google indexing bots use heading hierarchy (H1, H2, H3) to understand the semantic structure and topics of your content.',
          km: 'Google Bot ស្កេនមើល H1, H2, H3 ដើម្បីយល់ដឹងពីប្រធានបទសំខាន់ៗនៃគេហទំព័ររបស់អ្នក។'
        }
      },
      practiceExercise: {
        question: { en: 'Create an h2 heading for "មាតិកាមេរៀន".', km: 'បង្កើត Tag <h2> សម្រាប់ពាក្យ "មាតិកាមេរៀន"។' },
        solution: '<h2>មាតិកាមេរៀន</h2>'
      },
      quizQuestions: [
        {
          id: 'qh2-1',
          question: { en: 'How many <h1> headings should typically exist on a page?', km: 'ជាទូទៅតើគួរមាន <h1> ប៉ុន្មាននៅលើទំព័រមួយ?' },
          options: [
            { id: 'a', text: { en: 'Exactly one main <h1>', km: 'មានតែមួយគត់ <h1>' }, isCorrect: true },
            { id: 'b', text: { en: 'As many as possible', km: 'ដាក់ប៉ុន្មានក៏បាន' }, isCorrect: false }
          ],
          explanation: { en: 'Having a single primary <h1> per page optimizes page topic structure for SEO.', km: 'ការមាន <h1> តែមួយផ្តល់នូវរចនាសម្ព័ន្ធ SEO ច្បាស់លាស់។' }
        }
      ]
    },
    {
      id: 'html-l5',
      slug: 'html-paragraphs-formatting',
      moduleNumber: 2,
      lessonNumberInModule: 2,
      title: { en: '2.2 Paragraphs, Line Breaks & Text Formatting', km: '២.២ កថាខណ្ឌ, Line Breaks & Text Formatting' },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Paragraphs <p> group blocks of text with automatic top/bottom margins. Use <br> for manual line breaks and semantic markup like <strong> (importance) and <em> (emphasis).',
        km: 'Tag <p> ប្រើសម្រាប់បង្កើតកថាខណ្ឌ។ ប្រើ <br> សម្រាប់ចុះបន្ទាត់ និងប្រើ <strong> (អក្សរដិតមានន័យធ្ងន់) ឬ <em> (អក្សរទ្រេត)។'
      },
      tutorial: {
        en: 'Use <strong> for semantic importance, not just visual bold styling (use CSS for pure styling).',
        km: 'ប្រើ <strong> នៅពេលអត្ថបទនោះមានសារៈសំខាន់ខ្លាំង មិនមែនត្រឹមតែចង់បានអក្សរដិតនោះឡើយ។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <p>នេះជាកថាខណ្ឌទីមួយដែលមាន <strong>អក្សរដិតសំខាន់</strong>។</p>
  <p>នេះជាកថាខណ្ឌទីពីរដែលមាន <em>អក្សរទ្រេត</em><br> និងមានការចុះបន្ទាត់ដោយប្រើ br tag។</p>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Accessibility Screen Reader Emphasis', km: 'ការបញ្ចេញសំឡេងរបស់ Screen Reader លើ Strong Tag' },
        description: {
          en: 'Screen readers alter speech tone when encountering <strong> and <em> tags to emphasize important words to visually impaired users.',
          km: 'Screen Reader នឹងប្តូរតុងសំឡេងសង្កត់ធ្ងន់នៅពេលអានជួប <strong> និង <em> ដើម្បីជំនួយដល់ជនពិការភ្នែក។'
        }
      },
      practiceExercise: {
        question: { en: 'Wrap the word "ចំណាំ" inside a <strong> tag.', km: 'ដាក់ពាក្យ "ចំណាំ" ទៅក្នុង <strong> tag។' },
        solution: '<strong>ចំណាំ</strong>'
      },
      quizQuestions: [
        {
          id: 'qh2-2',
          question: { en: 'Which tag creates a line break without starting a new paragraph?', km: 'តើ Tag មួយណាបង្កើតការចុះបន្ទាត់ដោយមិនបង្កើតកថាខណ្ឌថ្មី?' },
          options: [
            { id: 'a', text: { en: '<br>', km: '<br>' }, isCorrect: true },
            { id: 'b', text: { en: '<hr>', km: '<hr>' }, isCorrect: false }
          ],
          explanation: { en: '<br> inserts a simple line break inside existing text.', km: '<br> ប្រើសម្រាប់ចុះបន្ទាត់ក្នុងកថាខណ្ឌ។' }
        }
      ]
    },
    {
      id: 'html-l6',
      slug: 'html-comments-readability',
      moduleNumber: 2,
      lessonNumberInModule: 3,
      title: { en: '2.3 HTML Comments & Code Readability', km: '២.៣ HTML Comments & ការរក្សាកូដឱ្យងាយអាន' },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'HTML comments <!-- comment here --> are ignored by the browser renderer. They document code logic for team members and hide temporary markup during testing.',
        km: 'HTML Comments <!-- សារកត់ចំណាំ --> មិនត្រូវបង្ហាញលើ Browser ឡើយ។ វាប្រើសម្រាប់កត់ចំណាំពន្យល់ក្រុមការងារ ឬលាក់កូដបណ្តោះអាសន្ន។'
      },
      tutorial: {
        en: 'Syntax: <!-- Write your comment here -->\nNever place passwords or sensitive server credentials inside HTML comments!',
        km: 'ទម្រង់៖ <!-- សរសេរសារកត់ចំណាំទីនេះ -->\nហាមដាច់ខាតមិនត្រូវដាក់ Password ឬ Secret key ក្នុង Comment ឡើយព្រោះអ្នកណាក៏អាចមើលឃើញដែរ។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <!-- ផ្នែកក្បាលនៃគេហទំព័រ -->
  <h1>គេហទំព័រផ្លូវការ</h1>

  <!-- TODO: បន្ថែមទម្រង់ចុះឈ្មោះនៅសប្តាហ៍ក្រោយ -->
  <p>សូមស្វាគមន៍មកកាន់ប្រព័ន្ធរបស់យើង។</p>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Developer Team Code Documentation', km: 'ការកត់ចំណាំបែងចែកផ្នែកកូដក្នុងក្រុមការងារ' },
        description: {
          en: 'Professional developers use comments like <!-- Header Start --> and <!-- Header End --> to navigate large multi-section markup files easily.',
          km: 'Developer អាជីពប្រើ comment ដើម្បីកំណត់ផ្នែកចាប់ផ្តើម និងបញ្ចប់នៃ Component នីមួយៗ។'
        }
      },
      practiceExercise: {
        question: { en: 'Write an HTML comment saying "ផ្នែក Footer".', km: 'សរសេរ HTML Comment ដែលមានពាក្យ "ផ្នែក Footer"។' },
        solution: '<!-- ផ្នែក Footer -->'
      },
      quizQuestions: [
        {
          id: 'qh2-3',
          question: { en: 'Are HTML comments visible to users on the rendered webpage?', km: 'តើ HTML Comments ត្រូវបានបង្ហាញឱ្យអ្នកប្រើប្រាស់ឃើញលើអេក្រង់ទេ?' },
          options: [
            { id: 'a', text: { en: 'No, they are ignored by the browser', km: 'ទេ, Browser រំលងវាចោល' }, isCorrect: true },
            { id: 'b', text: { en: 'Yes, as red highlighted text', km: 'បាទ/ចាស បង្ហាញជាអក្សរពណ៌ក្រហម' }, isCorrect: false }
          ],
          explanation: { en: 'Browsers parse comments silently without rendering them.', km: 'Browser មិនបង្ហាញ comment លើអេក្រង់ឡើយ។' }
        }
      ]
    },

    // MODULE 3 — Links & Navigation
    {
      id: 'html-l7',
      slug: 'html-anchor-links',
      moduleNumber: 3,
      lessonNumberInModule: 1,
      title: { en: '3.1 The <a> Tag and href Attribute', km: '៣.១ Tag <a> និង href Attribute' },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Hyperlinks are created with the anchor tag <a> and the mandatory href attribute which specifies the destination URL or protocol (http, mailto, tel).',
        km: 'Hyperlink ត្រូវបានបង្កើតឡើងដោយប្រើ Tag <a> និង `href` attribute ដែលជាអាសយដ្ឋាន URL គោលដៅ ឬ Protocol (http, mailto, tel)។'
      },
      tutorial: {
        en: '1. Web link: <a href="https://google.com">Google</a>\n2. Email link: <a href="mailto:info@site.com">Send Email</a>\n3. Phone link: <a href="tel:+85512345678">Call Us</a>',
        km: '១. Link ទៅ Web: <a href="https://google.com">Google</a>\n២. Link ផ្ញើ Email: <a href="mailto:info@site.com">ផ្ញើអ៊ីមែល</a>'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>តំណភ្ជាប់សំខាន់ៗ</h2>
  <p>ចូលទៅកាន់ <a href="https://developer.mozilla.org">MDN Web Docs</a> ដើម្បីអានឯកសារ HTML។</p>
  <p>ទាក់ទងយើងតាមរយៈ <a href="mailto:support@example.com">Send Email</a></p>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Click-to-Call Phone Links for Mobile Users', km: 'ការបង្កើត Link ចុចខលទូរស័ព្ទភ្លាមៗលើ Smart Phone' },
        description: {
          en: 'Using <a href="tel:+85512345678"> allows smartphone users to dial your customer hotline directly with a single touch.',
          km: 'ការប្រើ `href="tel:..."` ធ្វើឱ្យអ្នកប្រើទូរស័ព្ទចុចលើ Link ហើយខលទៅកាន់ក្រុមហ៊ុនភ្លាមៗ។'
        }
      },
      practiceExercise: {
        question: { en: 'Create a link to "https://wikipedia.org" with text "Wikipedia".', km: 'បង្កើត Link ទៅកាន់ "https://wikipedia.org" ដែលមានពាក្យ "Wikipedia"។' },
        solution: '<a href="https://wikipedia.org">Wikipedia</a>'
      },
      quizQuestions: [
        {
          id: 'qh3-1',
          question: { en: 'Which attribute defines the link URL target in an <a> tag?', km: 'តើ Attribute មួយណាប្រើសម្រាប់កំណត់អាសយដ្ឋាន URL ក្នុង Tag <a>?' },
          options: [
            { id: 'a', text: { en: 'href', km: 'href' }, isCorrect: true },
            { id: 'b', text: { en: 'src', km: 'src' }, isCorrect: false }
          ],
          explanation: { en: 'href stands for Hypertext Reference.', km: 'href តំណាងឱ្យ Hypertext Reference។' }
        }
      ]
    },
    {
      id: 'html-l8',
      slug: 'html-absolute-relative-links',
      moduleNumber: 3,
      lessonNumberInModule: 2,
      title: { en: '3.2 Absolute vs. Relative Links', km: '៣.២ Absolute vs. Relative Links' },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Absolute URLs point to an external full address (https://domain.com/page), while Relative URLs point to internal project files (about.html, ./pages/contact.html).',
        km: 'Absolute URL ភ្ជាប់ទៅកាន់ Domain ខាងក្រៅពេញលេញ (https://...) ចំណែក Relative URL ភ្ជាប់ទៅកាន់ File ក្នុង Project ផ្ទាល់ខ្លួន (about.html, ./contact.html)។'
      },
      tutorial: {
        en: '1. Same folder: <a href="about.html">About</a>\n2. Subfolder: <a href="pages/contact.html">Contact</a>\n3. Parent folder: <a href="../index.html">Home</a>',
        km: '១. ក្នុង Folder ជាមួយគ្នា៖ about.html\n២. ក្នុង Subfolder៖ pages/contact.html\n៣. ថយក្រោយ ១ Folder៖ ../index.html'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <nav>
    <!-- Relative Links ក្នុង Project ផ្ទាល់ខ្លួន -->
    <a href="index.html">ទំព័រដើម</a> |
    <a href="about.html">អំពីយើង</a> |
    <!-- Absolute Link ទៅកាន់ Web ខាងក្រៅ -->
    <a href="https://github.com">GitHub</a>
  </nav>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Building Scalable Navigation Bars', km: 'ការសរសេរ Link ក្នុង Navbar សម្រាប់ Website ច្រើនទំព័រ' },
        description: {
          en: 'Relative paths allow your entire web project to be moved between domain names or hosted locally without breaking internal page links.',
          km: ' Relative Paths ធ្វើឱ្យ Project អ្នកអាចប្តូរ Domain ឬរត់លើ Localhost ដោយមិនបាក់ Link ឡើយ។'
        }
      },
      practiceExercise: {
        question: { en: 'Write a relative link pointing to "services.html".', km: 'សរសេរ Relative Link ភ្ជាប់ទៅកាន់ File "services.html"។' },
        solution: '<a href="services.html">សេវាកម្ម</a>'
      },
      quizQuestions: [
        {
          id: 'qh3-2',
          question: { en: 'Which URL type is best for linking internal project files?', km: 'តើប្រភេទ URL មួយណាដែលល្អបំផុតសម្រាប់ភ្ជាប់ File ផ្ទៃក្នុង Project?' },
          options: [
            { id: 'a', text: { en: 'Relative URL', km: 'Relative URL' }, isCorrect: true },
            { id: 'b', text: { en: 'Absolute URL', km: 'Absolute URL' }, isCorrect: false }
          ],
          explanation: { en: 'Relative paths stay intact regardless of server domain changes.', km: 'Relative URL មិនផ្លាស់ប្តូរទោះបីជាប្តូរ Domain ក៏ដោយ។' }
        }
      ]
    },
    {
      id: 'html-l9',
      slug: 'html-anchors-new-tabs',
      moduleNumber: 3,
      lessonNumberInModule: 3,
      title: { en: '3.3 Page Anchors & Target Attributes', km: '៣.៣ Page Anchors & Target Attributes' },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Use target="_blank" with rel="noopener noreferrer" to open links safely in a new tab. Use id anchors (#section-id) to jump smoothly to a specific location on the same page.',
        km: 'ប្រើ `target="_blank"` និង `rel="noopener noreferrer"` ដើម្បីបើក Link សុវត្ថិភាពក្នុង Tab ថ្មី។ ប្រើ Anchor (#id) ដើម្បីរំលងទៅកាន់ផ្នែកណាមួយក្នុងទំព័រតែមួយ។'
      },
      tutorial: {
        en: '1. Jump link: <a href="#contact">Go to Contact</a>\n2. Target element: <h2 id="contact">Contact Us</h2>',
        km: '១. Link ចុចរំលង៖ <a href="#contact">ទៅកាន់ Contact</a>\n២. Element គោលដៅ៖ <h2 id="contact">ទាក់ទងយើង</h2>'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <!-- Page Anchor Navigation -->
  <a href="#section2">រំលងទៅកាន់ផ្នែកទី ២</a> |
  <a href="https://google.com" target="_blank" rel="noopener">បើក Google ក្នុង Tab ថ្មី</a>

  <div style="margin-top: 100px;">
    <h2>ផ្នែកទី ១</h2>
    <p>មាតិកាផ្នែកទី ១...</p>
  </div>

  <div id="section2" style="margin-top: 100px;">
    <h2>ផ្នែកទី ២ (Goal Section)</h2>
    <p>អ្នកបានមកដល់ផ្នែកទី ២ ដោយជោគជ័យ!</p>
  </div>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Security Vulnerability Prevention with rel="noopener"', km: 'ការការពារ Security Risk ជាមួយ rel="noopener"' },
        description: {
          en: 'Without rel="noopener", new tabs opened via target="_blank" can manipulate the original parent tab location using window.opener (Tabnabbing attack).',
          km: 'ការដាក់ `rel="noopener"` ការពារ Tab ថ្មីមិនឱ្យ Hack ឬប្តូរអាសយដ្ឋាន Tab ចាស់របស់អ្នកឡើយ។'
        }
      },
      practiceExercise: {
        question: { en: 'Add target="_blank" to an <a> link.', km: 'បន្ថែម attribute target="_blank" ទៅកាន់ <a> link។' },
        solution: '<a href="https://example.com" target="_blank" rel="noopener">Link</a>'
      },
      quizQuestions: [
        {
          id: 'qh3-3',
          question: { en: 'Which target attribute opens a link in a new tab?', km: 'តើ Attribute មួយណាដែលបើក Link ក្នុង Tab ថ្មី?' },
          options: [
            { id: 'a', text: { en: 'target="_blank"', km: 'target="_blank"' }, isCorrect: true },
            { id: 'b', text: { en: 'target="_self"', km: 'target="_self"' }, isCorrect: false }
          ],
          explanation: { en: 'target="_blank" tells the browser to create a new tab for the destination.', km: 'target="_blank" បញ្ជាឱ្យ Browser បើក Tab ថ្មី។' }
        }
      ]
    },

    // MODULE 4 — Images & Media
    {
      id: 'html-l10',
      slug: 'html-images-alt-text',
      moduleNumber: 4,
      lessonNumberInModule: 1,
      title: { en: '4.1 The <img> Tag and Alt Text Importance', km: '៤.១ Tag <img> និងសារៈសំខាន់នៃ Alt Text' },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Images are void (self-closing) elements initialized with <img src="..." alt="...">. The alt text is crucial for accessibility screen readers and SEO indexing.',
        km: 'Tag <img> ជា Self-closing element ដែលមាន `src` (ប្រភពរូបភាព) និង `alt` (អត្ថបទពិពណ៌នារូបភាព) ដែលសំខាន់បំផុតសម្រាប់ Screen Readers និង SEO Search Engine។'
      },
      tutorial: {
        en: 'Always include meaningful alt text. If an image is purely decorative, use an empty alt="" attribute.',
        km: 'តែងតែសរសេរ alt text ដែលមានន័យ។ បើសិនជារូបភាពនោះគ្រាន់តែជារូបតុបតែង ត្រូវដាក់ alt="" ទំនេរ។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>រូបភាពក្នុង HTML5</h2>
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" 
    alt="កុំព្យូទ័រយួរដៃសម្រាប់សរសេរកូដ" 
    width="400" 
    height="250"
  >
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Google Image Search Indexing', km: 'ការបង្ហាញរូបភាពលើ Google Image Search' },
        description: {
          en: 'Google Image Search relies almost entirely on image alt attributes and surrounding context text to categorize and display search results.',
          km: 'Google ប្រើប្រាស់ Alt attribute ដើម្បីយល់ដឹងថារូបភាពនោះជាអ្វី និងបង្ហាញលើ Google Image Search។'
        }
      },
      practiceExercise: {
        question: { en: 'Add an img tag with src="logo.png" and alt="ក្រុមហ៊ុន ឡូហ្គោ".', km: 'បង្កើត Tag img ដែលមាន src="logo.png" និង alt="ក្រុមហ៊ុន ឡូហ្គោ"។' },
        solution: '<img src="logo.png" alt="ក្រុមហ៊ុន ឡូហ្គោ">'
      },
      quizQuestions: [
        {
          id: 'qh4-1',
          question: { en: 'Does the <img> element require a closing </img> tag?', km: 'តើ <img> Element ត្រូវការ Tag បិទ </img> ដែរឬទេ?' },
          options: [
            { id: 'a', text: { en: 'No, it is a self-closing void tag', km: 'ទេ, វាជា Self-closing tag' }, isCorrect: true },
            { id: 'b', text: { en: 'Yes, always', km: 'បាទ/ចាស ត្រូវតែមាន' }, isCorrect: false }
          ],
          explanation: { en: '<img> is a void element in HTML syntax.', km: '<img> គឺជា Self-closing Tag មិនបាច់មាន Tag បិទឡើយ។' }
        }
      ]
    },
    {
      id: 'html-l11',
      slug: 'html-responsive-images',
      moduleNumber: 4,
      lessonNumberInModule: 2,
      title: { en: '4.2 Responsive Images with srcset and Dimensions', km: '៤.២ Responsive Images ជាមួយ srcset & Dimensions' },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Specifying width and height prevents Cumulative Layout Shift (CLS). Use srcset and sizes attributes to serve high-density or smaller images dynamically based on device display resolution.',
        km: 'ការកំណត់ width និង height ការពារកុំឱ្យ Layout ញ័រ (CLS)។ ការប្រើ srcset អនុញ្ញាតឱ្យ Browser ជ្រើសរើសទំហំរូបភាពសមស្របតាមអេក្រង់ Smartphone ឬ Desktop។'
      },
      tutorial: {
        en: '<img src="small.jpg" srcset="small.jpg 500w, large.jpg 1000w" sizes="(max-width: 600px) 480px, 800px" alt="...">',
        km: 'កំណត់ srcset ជាមួយទំហំ Pixel ផ្សេងៗគ្នា ដើម្បីកាត់បន្ថយទិន្នន័យ Internet លើទូរស័ព្ទដៃ។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>Responsive Image</h2>
  <img 
    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600" 
    alt="កុំព្យូទ័របង្ហាញកូដ"
    width="600" 
    height="350"
    loading="lazy"
    style="max-width: 100%; height: auto;"
  >
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Mobile Data Savings via Responsive Images', km: 'ការសន្សំសំចៃទិន្នន័យ Internet លើ Mobile App' },
        description: {
          en: 'Serving smaller image files to smartphones saves battery power, network bandwidth, and speeds up page load time by up to 70%.',
          km: 'ការផ្ញើរូបភាពតូចទៅទូរស័ព្ទដៃជួយឱ្យ Web ដើរលឿនជាងមុន ៧០% និងសន្សំសំចៃ Data 3G/4G/5G។'
        }
      },
      practiceExercise: {
        question: { en: 'Add loading="lazy" attribute to an image.', km: 'បន្ថែម attribute loading="lazy" ទៅកាន់ img tag។' },
        solution: '<img src="photo.jpg" alt="Photo" loading="lazy">'
      },
      quizQuestions: [
        {
          id: 'qh4-2',
          question: { en: 'Why specify width and height attributes on images?', km: 'ហេតុអ្វីត្រូវកំណត់ width និង height លើរូបភាព?' },
          options: [
            { id: 'a', text: { en: 'Prevents Cumulative Layout Shift (CLS)', km: 'ការពារការញ័រ Layout (CLS)' }, isCorrect: true },
            { id: 'b', text: { en: 'Changes image file format', km: 'ផ្លាស់ប្តូរប្រភេទ File រូបភាព' }, isCorrect: false }
          ],
          explanation: { en: 'Setting aspect ratio dimensions reserves browser space before loading.', km: 'ការកំណត់ទំហំទុកមុន ជួយរក្សាទំហំអេក្រង់មិនឱ្យលោតញ័រ។' }
        }
      ]
    },
    {
      id: 'html-l12',
      slug: 'html-audio-video-media',
      moduleNumber: 4,
      lessonNumberInModule: 3,
      title: { en: '4.3 Audio & Video Embedding', km: '៤.៣ ការដាក់ Audio & Video ក្នុង HTML5' },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'HTML5 introduced native media players via <video> and <audio> elements with built-in playback controls (play, pause, volume, fullscreen).',
        km: 'HTML5 ផ្តល់ជូននូវ Media Player ផ្ទាល់ខ្លួនតាមរយៈ Tag <video> និង <audio> ដែលមានប៊ូតុង Control ស្រាប់ (Play, Pause, Volume, Fullscreen)។'
      },
      tutorial: {
        en: '<video controls width="100%">\n  <source src="movie.mp4" type="video/mp4">\n  Your browser does not support HTML5 video.\n</video>',
        km: 'ប្រើ <source> tag នៅខាងក្នុង video ដើម្បីទ្រទ្រង់ Format ច្រើនដូចជា MP4, WebM។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>HTML5 Native Video Player</h2>
  <video controls width="100%" poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97">
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
    Browser របស់អ្នកមិនទ្រទ្រង់ HTML5 Video ឡើយ។
  </video>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Custom Course Video Players', km: 'ការបង្កើត Video Player សម្រាប់ប្រព័ន្ធរៀន Online' },
        description: {
          en: 'Educational platforms use HTML5 video tags combined with JavaScript to track student video progress and auto-play next lessons.',
          km: 'ប្រព័ន្ធសិក្សាអនឡាញប្រើ HTML5 Video សម្រាប់ចាក់វីដេអូមេរៀន និងតាមដានរយះពេលរៀនរបស់សិស្ស។'
        }
      },
      practiceExercise: {
        question: { en: 'Create an <audio> tag with controls attribute.', km: 'បង្កើត Tag <audio> ដែលមាន attribute controls។' },
        solution: '<audio controls><source src="song.mp3" type="audio/mpeg"></audio>'
      },
      quizQuestions: [
        {
          id: 'qh4-3',
          question: { en: 'Which attribute displays default play/pause UI on media tags?', km: 'តើ Attribute មួយណាដែលបង្ហាញប៊ូតុង Play/Pause លើ Media tag?' },
          options: [
            { id: 'a', text: { en: 'controls', km: 'controls' }, isCorrect: true },
            { id: 'b', text: { en: 'autoplay', km: 'autoplay' }, isCorrect: false }
          ],
          explanation: { en: 'The controls boolean attribute renders browser-native media buttons.', km: 'controls attribute បង្ហាញប៊ូតុងបញ្ជាលើ Media Player។' }
        }
      ]
    },

    // MODULE 5 — Lists & Tables
    {
      id: 'html-l13',
      slug: 'html-ordered-unordered-lists',
      moduleNumber: 5,
      lessonNumberInModule: 1,
      title: { en: '5.1 Ordered (<ol>) and Unordered (<ul>) Lists', km: '៥.១ បញ្ជីមានលំដាប់ (<ol>) & គ្មានលំដាប់ (<ul>)' },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: 'Lists structure related items. Unordered lists <ul> use bullet points (disc/circle), while Ordered lists <ol> use numerical/alphabetical sequences. Each item must use an <li> child tag.',
        km: 'បញ្ជីប្រើសម្រាប់រៀបចំទិន្នន័យជាក្រុម។ <ul> បង្ហាញជាចំណុច Bullet ឯ <ol> បង្ហាញជាលេខរៀង (១, ២, ៣)។ រាល់ធាតុទាំងអស់ត្រូវស្ថិតក្នុង Tag <li>។'
      },
      tutorial: {
        en: '1. Unordered: <ul><li>ធាតុ ១</li><li>ធាតុ ២</li></ul>\n2. Ordered: <ol><li>ជំហាន ១</li><li>ជំហាន ២</li></ol>',
        km: '១. <ul> សម្រាប់បញ្ជីទូទៅ (គ្មានលំដាប់)\n២. <ol> សម្រាប់ជំហានអនុវត្ត (មានលេខរៀង)'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>បញ្ជីជំនាញ Frontend (Unordered)</h2>
  <ul>
    <li>HTML5 Semantic Markup</li>
    <li>CSS3 Flexbox & Grid</li>
    <li>JavaScript ES6+</li>
  </ul>

  <h2>ជំហានបង្កើត Website (Ordered)</h2>
  <ol>
    <li>សរសេរកូដរចនាសម្ព័ន្ធ HTML</li>
    <li>តុបតែង Style ដោយប្រើ CSS</li>
    <li>បន្ថែម Interaction ដោយប្រើ JavaScript</li>
  </ol>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Navigation Menu Markup', km: 'ការបង្កើត Navigation Menu ដោយប្រើ <ul> និង <li>' },
        description: {
          en: 'Almost all websites construct their top navigation menus using styled <ul> and <li> list tags for screen reader accessibility.',
          km: 'គេហទំព័រស្ទើរតែទាំងអស់សរសេរ Navigation Menu ដោយប្រើ <ul> និង <li> រួចតុបតែង Style តាម CSS។'
        }
      },
      practiceExercise: {
        question: { en: 'Create an ordered list (<ol>) with 2 list items.', km: 'បង្កើត បញ្ជីមានលេខរៀង (<ol>) ដែលមាន ២ ធាតុ (<li>)។' },
        solution: '<ol><li>ច្បាប់ទី ១</li><li>ច្បាប់ទី ២</li></ol>'
      },
      quizQuestions: [
        {
          id: 'qh5-1',
          question: { en: 'Which element represents an individual item inside a list?', km: 'តើ Element មួយណាដែលតំណាងឱ្យធាតុនីមួយៗក្នុងបញ្ជី?' },
          options: [
            { id: 'a', text: { en: '<li>', km: '<li>' }, isCorrect: true },
            { id: 'b', text: { en: '<item>', km: '<item>' }, isCorrect: false }
          ],
          explanation: { en: '<li> stands for List Item.', km: '<li> តំណាងឱ្យ List Item។' }
        }
      ]
    },
    {
      id: 'html-l14',
      slug: 'html-nested-lists',
      moduleNumber: 5,
      lessonNumberInModule: 2,
      title: { en: '5.2 Nested Lists Structure', km: '៥.២ រចនាសម្ព័ន្ធ Nested Lists' },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'A nested list is created by inserting a complete <ul> or <ol> list INSIDE an existing <li> parent item, forming multi-level menus or hierarchical outlines.',
        km: 'Nested list គឺជាការដាក់បញ្ជី <ul> ឬ <ol> នៅខាងក្នុង Tag <li> នៃបញ្ជីមួយទៀត ដើម្បីបង្កើតជាមាតិកាច្រើនកម្រិត (Sub-menu)។'
      },
      tutorial: {
        en: 'Correct pattern:\n<ul>\n  <li>Item 1\n    <ul>\n      <li>Sub-item 1.1</li>\n    </ul>\n  </li>\n</ul>',
        km: 'ត្រូវដាក់ <ul> ខាងក្នុង <li> នៃធាតុធំ មិនត្រូវដាក់ <ul> ក្រៅ <li> ឡើយ។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>មាតិកាវគ្គសិក្សា (Nested List)</h2>
  <ul>
    <li>មេរៀនទី ១: មូលដ្ឋានគ្រឹះ
      <ul>
        <li>១.១ ការណែនាំ HTML5</li>
        <li>១.២ រចនាសម្ព័ន្ធ Document</li>
      </ul>
    </li>
    <li>មេរៀនទី ២: ទម្រង់ Forms
      <ul>
        <li>២.១ Input Types</li>
        <li>២.២ Form Validation</li>
      </ul>
    </li>
  </ul>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Multi-Level Dropdown Navigation Menus', km: 'ការបង្កើត Dropdown Menu ច្រើនថ្នាក់' },
        description: {
          en: 'E-commerce category sidebar trees and dropdown navbar menus rely on nested list markup styled with CSS flexbox/grid.',
          km: 'E-commerce menu ដូចជា "សំលៀកបំពាក់ > បុរស > អាវយឺត" ត្រូវបានបង្កើតឡើងពី Nested lists។'
        }
      },
      practiceExercise: {
        question: { en: 'Nest an <ol> inside a <li> element.', km: 'សរសេរ Nested <ol> នៅខាងក្នុង <li> element។' },
        solution: '<ul><li>មាតិកាធំ<ol><li>មាតិកាតូច</li></ol></li></ul>'
      },
      quizQuestions: [
        {
          id: 'qh5-2',
          question: { en: 'Where must a child sub-list be placed when nesting?', km: 'តើ Sub-list ត្រូវស្ថិតនៅកន្លែងណាពេលធ្វើ Nesting?' },
          options: [
            { id: 'a', text: { en: 'Directly inside a parent <li> tag', km: 'នៅខាងក្នុង parent <li> tag ដោយផ្ទាល់' }, isCorrect: true },
            { id: 'b', text: { en: 'Between <ul> and <li> tags', km: 'នៅចន្លោះ <ul> និង <li>' }, isCorrect: false }
          ],
          explanation: { en: 'Sub-lists must strictly be child nodes of a parent <li> tag.', km: 'Sub-list ត្រូវស្ថិតនៅខាងក្នុង <li> Tag។' }
        }
      ]
    },
    {
      id: 'html-l15',
      slug: 'html-tables-structure',
      moduleNumber: 5,
      lessonNumberInModule: 3,
      title: { en: '5.3 HTML Tables: <table>, <tr>, <td>, <th>', km: '៥.៣ តារាង HTML: <table>, <tr>, <td>, <th>' },
      durationMinutes: 25,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Tables display structured grid data using <table>, table rows <tr>, table header cells <th>, and table data cells <td>. Use <thead> and <tbody> for strict semantic grouping.',
        km: 'តារាងប្រើសម្រាប់រៀបចំទិន្នន័យជាជួរដេក និងជួរឈរ។ ប្រើ <table>, <tr> (ជួរដេក), <th> (ក្បាលតារាង), <td> (ទិន្នន័យ) ព្រមទាំង <thead> និង <tbody>។'
      },
      tutorial: {
        en: 'Use colspan="N" to merge columns horizontally or rowspan="N" to merge rows vertically.',
        km: 'ប្រើ colspan="N" ដើម្បីច្របាច់ Column បញ្ចូលគ្នា ឬ rowspan="N" សម្រាប់ច្របាច់ Row បញ្ចូលគ្នា។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>តារាងលទ្ធផលសិក្សា</h2>
  <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr style="background-color: #f2f2f2;">
        <th>អត្តលេខ</th>
        <th>ឈ្មោះសិស្ស</th>
        <th>ពិន្ទុ HTML</th>
        <th>ស្ថានភាព</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>101</td>
        <td>ចាន់ថា</td>
        <td>95</td>
        <td>ជាប់ (Passed)</td>
      </tr>
      <tr>
        <td>102</td>
        <td>វិចិត្រ</td>
        <td>88</td>
        <td>ជាប់ (Passed)</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Financial Statements & Admin Analytics Grids', km: 'តារាងរបាយការណ៍ហិរញ្ញវត្ថុក្នុង Dashboard' },
        description: {
          en: 'Admin dashboards use HTML tables for displaying user accounts, transaction histories, and inventory stock balances.',
          km: 'Dashboard គ្រប់គ្រងក្រុមហ៊ុនប្រើតារាង HTML សម្រាប់បង្ហាញរបាយការណ៍ហិរញ្ញវត្ថុ និងបញ្ជីទំនិញ។'
        }
      },
      practiceExercise: {
        question: { en: 'Add a <th> header cell for "តម្លៃ (Price)".', km: 'បន្ថែម Tag <th> សម្រាប់ពាក្យ "តម្លៃ (Price)" ក្នុងក្បាលតារាង។' },
        solution: '<th>តម្លៃ (Price)</th>'
      },
      quizQuestions: [
        {
          id: 'qh5-3',
          question: { en: 'Which tag defines a header cell in an HTML table with bold centered text?', km: 'តើ Tag មួយណាដែលកំណត់ក្បាលតារាងដែលមានអក្សរដិតស្វ័យប្រវត្តិ?' },
          options: [
            { id: 'a', text: { en: '<th>', km: '<th>' }, isCorrect: true },
            { id: 'b', text: { en: '<td>', km: '<td>' }, isCorrect: false }
          ],
          explanation: { en: '<th> creates a bold, centered header cell for table columns.', km: '<th> បង្កើតក្បាលតារាងដែលមានអក្សរដិតចំកណ្តាល។' }
        }
      ]
    },

    // MODULE 6 — Forms & Input
    {
      id: 'html-l16',
      slug: 'html-form-basics',
      moduleNumber: 6,
      lessonNumberInModule: 1,
      title: { en: '6.1 The <form> Tag & Basic Inputs', km: '៦.១ Tag <form> និង Input មូលដ្ឋាន' },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'The <form> element wraps user controls and specifies data destination via action="/submit" and HTTP transmission methods (GET or POST).',
        km: 'Tag <form> ប្រើសម្រាប់ប្រមូលផ្តុំទម្រង់បញ្ចូលទិន្នន័យរបស់អ្នកប្រើប្រាស់ ដោយមាន `action` (អាសយដ្ឋាន Server) និង `method` (GET ឬ POST)។'
      },
      tutorial: {
        en: '1. Use GET for non-sensitive search queries.\n2. Use POST for passwords, logins, or sensitive form submissions.',
        km: '១. ប្រើ GET សម្រាប់ទម្រង់ស្វែងរកព័ត៌មានទូទៅ\n២. ប្រើ POST សម្រាប់ទម្រង់ Login, Password ឬការចុះឈ្មោះ'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>ទម្រង់ស្វែងរក (Search Form)</h2>
  <form action="/search" method="GET">
    <label for="q">ស្វែងរកព័ត៌មាន:</label>
    <input type="text" id="q" name="q" placeholder="បញ្ចូលពាក្យគន្លឹះ...">
    <button type="submit">ស្វែងរក</button>
  </form>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'E-commerce Product Search Form', km: 'ទម្រង់ស្វែងរកទំនិញលើ E-commerce Web' },
        description: {
          en: 'When searching products on Amazon or Shopee, <form method="GET"> appends search query parameters directly into the browser address bar URL.',
          km: 'នៅពេលស្វែងរកទំនិញ Form ប្រើ GET Method ដើម្បីបន្ថែមពាក្យស្វែងរកទៅក្នុង URL។'
        }
      },
      practiceExercise: {
        question: { en: 'Set action="/login" and method="POST" on a form.', km: 'កំណត់ action="/login" និង method="POST" លើ <form> tag។' },
        solution: '<form action="/login" method="POST"></form>'
      },
      quizQuestions: [
        {
          id: 'qh6-1',
          question: { en: 'Which HTTP method should be used for sensitive login data?', km: 'តើ Method មួយណាគួរប្រើសម្រាប់ទិន្នន័យ Login សំខាន់ៗ?' },
          options: [
            { id: 'a', text: { en: 'POST', km: 'POST' }, isCorrect: true },
            { id: 'b', text: { en: 'GET', km: 'GET' }, isCorrect: false }
          ],
          explanation: { en: 'POST sends data inside the request body, hiding credentials from the browser address bar.', km: 'POST ផ្ញើទិន្នន័យលាក់ក្នុង Request Body មិនបង្ហាញលើ URL ឡើយ។' }
        }
      ]
    },
    {
      id: 'html-l17',
      slug: 'html-input-types',
      moduleNumber: 6,
      lessonNumberInModule: 2,
      title: { en: '6.2 Input Types (Text, Email, Password, Date, Checkbox, Radio)', km: '៦.២ ប្រភេទ Input (Text, Email, Password, Date, Checkbox, Radio)' },
      durationMinutes: 25,
      difficulty: 'Beginner',
      explanation: {
        en: 'The type attribute alters input behavior: text, email, password (masked characters), date (calendar widget), checkbox (multi-select), and radio (single select within a group).',
        km: 'Attribute `type` ផ្លាស់ប្តូររូបរាង Input៖ text, email, password (លាក់អក្សរ), date (ប្រក្រតីទិន), checkbox (ជ្រើសរើសច្រើន), radio (ជ្រើសរើសបានតែមួយក្នុងក្រុម)។'
      },
      tutorial: {
        en: 'Radio buttons belong to the same group only if they share the exact same name attribute value (e.g. name="gender").',
        km: 'Radio buttons ស្ថិតក្នុងក្រុមតែមួយ លុះត្រាតែមាន `name` attribute ដូចគ្នាជានិច្ច (ឧទាហរណ៍៖ name="gender")។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>ទម្រង់ចុះឈ្មោះ (Registration Fields)</h2>
  <form>
    <p>
      <label>អ៊ីមែល:</label><br>
      <input type="email" placeholder="name@example.com">
    </p>
    <p>
      <label>លេខកូដសម្ងាត់:</label><br>
      <input type="password">
    </p>
    <p>
      <label>ថ្ងៃខែឆ្នាំកំណើត:</label><br>
      <input type="date">
    </p>
    <p>
      <label>ភេទ:</label><br>
      <input type="radio" id="m" name="gender" value="male"> <label for="m">ប្រុស</label>
      <input type="radio" id="f" name="gender" value="female"> <label for="f">ស្រី</label>
    </p>
  </form>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Mobile Native Keyboard Adaptation', km: 'ការបង្ហាញ Keyboard ស្វ័យប្រវត្តិតាមប្រភេទ Input លើ Smartphone' },
        description: {
          en: 'Using type="email" triggers the mobile keyboard to display @ and .com shortcuts, while type="tel" opens the numeric dial pad.',
          km: 'ការប្រើ `type="email"` បង្ខំឱ្យទូរស័ព្ទបង្ហាញ Keyboard មានសញ្ញា @ និង .com ស្រាប់។'
        }
      },
      practiceExercise: {
        question: { en: 'Create a password input field.', km: 'បង្កើត Input field សម្រាប់បញ្ចូល Password។' },
        solution: '<input type="password" name="password">'
      },
      quizQuestions: [
        {
          id: 'qh6-2',
          question: { en: 'Which input type attribute masks entered characters for security?', km: 'តើ type attribute មួយណាដែលលាក់អក្សរពេលបញ្ចូល?' },
          options: [
            { id: 'a', text: { en: 'type="password"', km: 'type="password"' }, isCorrect: true },
            { id: 'b', text: { en: 'type="hidden"', km: 'type="hidden"' }, isCorrect: false }
          ],
          explanation: { en: 'type="password" masks typed input characters visually.', km: 'type="password" លាក់អក្សរដែលបានបញ្ចូលជាចំណុចខ្មៅ។' }
        }
      ]
    },
    {
      id: 'html-l18',
      slug: 'html-labels-validation-attributes',
      moduleNumber: 6,
      lessonNumberInModule: 3,
      title: { en: '6.3 Labels, Placeholders & Native Validation', km: '៦.៣ Labels, Placeholders & Native Validation' },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use <label for="inputId"> to link labels to fields for screen readers and clickable text areas. Attributes like required, minlength, maxlength, pattern, and placeholder enforce instant client-side validation.',
        km: 'ប្រើ <label for="id"> ដើម្បីភ្ជាប់អត្ថបទទៅកាន់ Input id។ ប្រើ required, minlength, maxlength, និង pattern ដើម្បីធ្វើ Validation លើ Browser ដោយមិនបាច់សរសេរ JavaScript។'
      },
      tutorial: {
        en: '1. Label link: <label for="phone">ទូរស័ព្ទ:</label><input id="phone">\n2. Required: <input required>',
        km: '១. `for` លើ Label ត្រូវតែស្មើនឹង `id` របស់ Input\n២. បន្ថែម `required` ដើម្បីបង្ខំឱ្យបញ្ចូលទិន្នន័យ'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>Form ជាមួយ Native Validation</h2>
  <form>
    <p>
      <label for="username">ឈ្មោះអ្នកប្រើប្រាស់ (យ៉ាងតិច ៤ អក្សរ):</label><br>
      <input type="text" id="username" name="username" required minlength="4" placeholder="បញ្ចូលឈ្មោះ...">
    </p>
    <p>
      <label for="age">អាយុ (១៨ ដល់ ៩៩):</label><br>
      <input type="number" id="age" name="age" required min="18" max="99">
    </p>
    <button type="submit">ផ្ញើព័ត៌មាន</button>
  </form>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Reducing Invalid Form Submissions', km: 'ការកាត់បន្ថយទិន្នន័យខុសមុនផ្ញើទៅ Server' },
        description: {
          en: 'Browser-native validation catches empty required fields instantly before network traffic is sent to backend databases.',
          km: 'Native Validation ទប់ស្កាត់ការផ្ញើ Form ទទេទៅកាន់ Server ភ្លាមៗដោយស្វ័យប្រវត្តិ។'
        }
      },
      practiceExercise: {
        question: { en: 'Add required and minlength="6" to a text input.', km: 'បន្ថែម required និង minlength="6" ទៅកាន់ input field។' },
        solution: '<input type="text" required minlength="6">'
      },
      quizQuestions: [
        {
          id: 'qh6-3',
          question: { en: 'Which attribute prevents form submission if an input field is empty?', km: 'តើ Attribute មួយណាដែលហាមឃាត់ការផ្ញើ Form ប្រសិនបើ Input នៅទទេ?' },
          options: [
            { id: 'a', text: { en: 'required', km: 'required' }, isCorrect: true },
            { id: 'b', text: { en: 'disabled', km: 'disabled' }, isCorrect: false }
          ],
          explanation: { en: 'The required boolean attribute stops form submission until a value is provided.', km: 'required attribute បង្ខំឱ្យអ្នកប្រើប្រាស់បញ្ចូលទិន្នន័យជាដាច់ខាត។' }
        }
      ]
    },
    {
      id: 'html-l19',
      slug: 'html-buttons-form-submission',
      moduleNumber: 6,
      lessonNumberInModule: 4,
      title: { en: '6.4 Buttons & Submitting Forms', km: '៦.៤ Buttons & ការផ្ញើ Form' },
      durationMinutes: 15,
      difficulty: 'Beginner',
      explanation: {
        en: '<button type="submit"> submits form data, <button type="reset"> clears all inputs, and <button type="button"> is a generic element controlled via JavaScript custom click handlers.',
        km: 'Tag <button type="submit"> ប្រើសម្រាប់ផ្ញើទិន្នន័យ Form, <button type="reset"> សម្រាប់សម្អាតទិន្នន័យដើម, និង <button type="button"> សម្រាប់បញ្ជាតាម JavaScript។'
      },
      tutorial: {
        en: 'Always explicitly specify type="button" on non-submitting UI buttons inside forms to prevent unintended accidental form submission behavior.',
        km: 'តែងតែបញ្ជាក់ `type="button"` លើប៊ូតុងធម្មតា ដើម្បីការពារកុំឱ្យវាផ្ញើ Form ដោយចៃដន្យ។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>ប្រភេទ Buttons ក្នុង Form</h2>
  <form>
    <input type="text" placeholder="បញ្ចូលអត្ថបទ..." value="ទិន្នន័យសាកល្បង">
    <br><br>
    <button type="submit">ផ្ញើទិន្នន័យ (Submit)</button>
    <button type="reset">សម្អាតទម្រង់ (Reset)</button>
    <button type="button" onclick="alert('ប៊ូតុងធម្មតា')">ប៊ូតុងធម្មតា (Button)</button>
  </form>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Custom Action Buttons inside Shopping Carts', km: 'ការប្រើ ប៊ូតុងក្នុងកន្ត្រកទំនិញ' },
        description: {
          en: 'Shopping carts use <button type="button"> for quantity increment counters (+ / -) to avoid submitting the order payment form prematurely.',
          km: 'កន្ត្រកទំនិញប្រើ `type="button"` សម្រាប់ប៊ូតុងបង្កើន ឬបន្ថយចំនួនទំនិញ (+ / -)។'
        }
      },
      practiceExercise: {
        question: { en: 'Create a submit button with text "រក្សាទុក".', km: 'បង្កើត Submit button ដែលមានពាក្យ "រក្សាទុក"។' },
        solution: '<button type="submit">រក្សាទុក</button>'
      },
      quizQuestions: [
        {
          id: 'qh6-4',
          question: { en: 'What is the default type behavior of a <button> placed inside a <form>?', km: 'តើ Behavior ដើមនៃ <button> នៅក្នុង <form> ជាអ្វី?' },
          options: [
            { id: 'a', text: { en: 'type="submit"', km: 'type="submit"' }, isCorrect: true },
            { id: 'b', text: { en: 'type="button"', km: 'type="button"' }, isCorrect: false }
          ],
          explanation: { en: 'Buttons inside forms default to submit type unless explicitly changed.', km: 'ប៊ូតុងក្នុង Form មានប្រភេទដើមជា Submit ដោយស្វ័យប្រវត្តិ។' }
        }
      ]
    },

    // MODULE 7 — Semantic HTML5
    {
      id: 'html-l20',
      slug: 'html-why-semantics-matter',
      moduleNumber: 7,
      lessonNumberInModule: 1,
      title: { en: '7.1 Why Semantic HTML5 Tags Matter', km: '៧.១ ហេតុអ្វី Semantic HTML5 Tags សំខាន់ (SEO & Accessibility)' },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Semantic tags convey the inherent meaning of content to browsers, search engines, and assistive devices (screen readers), replacing generic uninformative <div> soup.',
        km: 'Semantic tags ផ្តល់ន័យច្បាស់លាស់នៃផ្នែកនីមួយៗលើគេហទំព័រទៅកាន់ Browser, Search Engine និង Screen Reader ជំនួសឱ្យការប្រើ <div> ច្រើនជាន់ដែលគ្មានន័យ។'
      },
      tutorial: {
        en: '1. Non-semantic: <div id="footer">...</div>\n2. Semantic HTML5: <footer>...</footer>',
        km: '១. គ្មានន័យ៖ <div id="footer">\n២. Semantic ត្រឹមត្រូវ៖ <footer>'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <!-- Semantic Page Skeleton -->
  <header>
    <h1>គេហទំព័របច្ចេកវិទ្យា</h1>
  </header>
  <main>
    <p>មាតិកាចម្បងនៃគេហទំព័រស្ថិតនៅទីនេះ។</p>
  </main>
  <footer>
    <p>&copy; 2026 រក្សាសិទ្ធិគ្រប់យ៉ាង</p>
  </footer>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Screen Reader Landmark Navigation', km: 'ការរំលងផ្នែកតាមរយៈ Landmark លើ Screen Reader' },
        description: {
          en: 'Visually impaired users rely on screen reader shortcuts to jump directly to <main> or <nav> landmarks instead of listening to every div element.',
          km: 'អ្នកពិការភ្នែកប្រើ Shortcut ដើម្បីរំលងទៅ <main> ឬ <nav> ភ្លាមៗដោយមិនបាច់ស្តាប់អានកូដ <div> ទាំងអស់ឡើយ។'
        }
      },
      practiceExercise: {
        question: { en: 'Wrap footer copyright text inside a <footer> element.', km: 'ដាក់អត្ថបទ Copyright ទៅក្នុង <footer> element។' },
        solution: '<footer><p>&copy; 2026</p></footer>'
      },
      quizQuestions: [
        {
          id: 'qh7-1',
          question: { en: 'Which element provides semantic meaning for page footer content?', km: 'តើ Element មួយណាផ្តល់ន័យ Semantic សម្រាប់ផ្នែកខាងក្រោមនៃទំព័រ (Footer)?' },
          options: [
            { id: 'a', text: { en: '<footer>', km: '<footer>' }, isCorrect: true },
            { id: 'b', text: { en: '<bottom>', km: '<bottom>' }, isCorrect: false }
          ],
          explanation: { en: '<footer> represents a footer for its nearest sectioning element.', km: '<footer> ជា Tag ស្តង់ដារ Semantic សម្រាប់ផ្នែកខាងក្រោម។' }
        }
      ]
    },
    {
      id: 'html-l21',
      slug: 'html-semantic-layout-elements',
      moduleNumber: 7,
      lessonNumberInModule: 2,
      title: { en: '7.2 Layout Elements: <header>, <nav>, <main>, <section>, <article>, <footer>', km: '៧.២ Tag រចនាសម្ព័ន្ធ៖ header, nav, main, section, article, footer' },
      durationMinutes: 25,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Use <header> for introduction/branding, <nav> for navigation, <main> for core unique content, <section> for thematic groupings, <article> for standalone reusable posts, and <footer> for page bottom info.',
        km: 'ប្រើ <header> សម្រាប់ Branding, <nav> សម្រាប់ Menu, <main> សម្រាប់មាតិកាចម្បង, <section> សម្រាប់ក្រុមប្រធានបទ, <article> សម្រាប់អត្ថបទឯករាជ្យ, និង <footer> សម្រាប់ព័ត៌មានខាងក្រោម។'
      },
      tutorial: {
        en: '<article> should make complete sense on its own if extracted and republished independently (e.g. blog post, product review, news article).',
        km: '<article> ត្រូវតែជាអត្ថបទពេញលេញមួយ ដែលអាចយកទៅចុះផ្សាយដាច់ដោយឡែកបាន (ឧទាហរណ៍៖ អត្ថបទព័ត៌មាន ឬ Blog Post)។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <header>
    <h2>ខ្មែរ Tech Blog</h2>
    <nav>
      <a href="#">ទំព័រដើម</a> | <a href="#">អត្ថបទ</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>អត្ថបទថ្មីៗ</h2>
      <article>
        <h3>ការមកដល់នៃ HTML5 Standard</h3>
        <p>HTML5 ផ្តល់នូវ Semantic tags យ៉ាងច្រើនសម្រាប់ Web Developers...</p>
      </article>
    </section>
  </main>

  <footer>
    <p>ទំនាក់ទំនង៖ contact@khmertech.com</p>
  </footer>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'News Portal Article Architecture', km: 'រចនាសម្ព័ន្ធគេហទំព័រព័ត៌មានធំៗ' },
        description: {
          en: 'Major news outlets (BBC, CNN) structure each news story inside an <article> tag with inner <header>, <section>, and <footer> components.',
          km: 'គេហទំព័រព័ត៌មានធំៗដាក់រាល់អត្ថបទព័ត៌មាននីមួយៗក្នុង <article> tag។'
        }
      },
      practiceExercise: {
        question: { en: 'Create a <section> containing an <h2> heading and a <p> paragraph.', km: 'បង្កើត <section> ដែលមាន <h2> heading និង <p> paragraph ខាងក្នុង។' },
        solution: '<section><h2>ចំណងជើង</h2><p>មាតិកា</p></section>'
      },
      quizQuestions: [
        {
          id: 'qh7-2',
          question: { en: 'Which element is ideal for a self-contained blog post or news story?', km: 'តើ Element មួយណាដែលស័ក្តិសមបំផុតសម្រាប់ Blog Post ឬអត្ថបទព័ត៌មាន?' },
          options: [
            { id: 'a', text: { en: '<article>', km: '<article>' }, isCorrect: true },
            { id: 'b', text: { en: '<div>', km: '<div>' }, isCorrect: false }
          ],
          explanation: { en: '<article> represents an independent, reusable composition.', km: '<article> តំណាងឱ្យអត្ថបទឯករាជ្យដែលអាចប្រើឡើងវិញបាន។' }
        }
      ]
    },
    {
      id: 'html-l22',
      slug: 'html-div-vs-span-vs-semantics',
      moduleNumber: 7,
      lessonNumberInModule: 3,
      title: { en: '7.3 <div> vs <span> vs Semantic Tags', km: '៧.៣ <div> vs <span> vs Semantic Tags — ពេលណាគួរប្រើមួយណា?' },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: '<div> is a block-level generic container, <span> is an inline generic container. Use them strictly as last resorts for pure CSS styling layout needs when no semantic tag fits.',
        km: '<div> គឺជា Block-level container គ្មានន័យ, <span> គឺជា Inline container គ្មានន័យ។ គួរប្រើពួកវាជាជម្រើសចុងក្រោយតែនៅពេលត្រូវការតុបតែង CSS Layout ប៉ុណ្ណោះ។'
      },
      tutorial: {
        en: '1. Semantic choice: Use <nav>, <main>, <header>, <button> first.\n2. Non-semantic layout choice: Use <div> for CSS Flex/Grid wrappers, and <span> for inline text highlight styling.',
        km: '១. ជ្រើសរើស Semantic Tag មុនគេជានិច្ច\n២. ប្រើ <div> និង <span> លុះត្រាតែគ្មាន Semantic Tag ណាសមស្របសម្រាប់តុបតែង Style'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <!-- Semantic Button -->
  <button>ចុចទីនេះ (Semantic)</button>

  <!-- Non-semantic text highlight styling using span -->
  <p>តម្លៃពិសេសត្រឹមតែ <span style="color: red; font-weight: bold;">$៩.៩៩</span> ប៉ុណ្ណោះ!</p>

  <!-- Pure CSS layout container using div -->
  <div style="background: #f0f0f0; padding: 10px; border-radius: 8px;">
    <p>ប្រអប់ Container សម្រាប់តុបតែង CSS</p>
  </div>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Refactoring Div Soup to Semantic HTML', km: 'ការកែសម្រួលកូដ Div Soup ឱ្យទៅជា Semantic Code' },
        description: {
          en: 'Replacing hundreds of nested <div class="nav-item"> elements with clean <nav> and <ul> markup reduces code clutter and improves maintainability.',
          km: 'ការប្តូរកូដ <div> ច្រើនជាន់មកជា Semantic Tag ជួយឱ្យកូដស្អាត ងាយស្រួល Read និងរៀបចំ CSS។'
        }
      },
      practiceExercise: {
        question: { en: 'Wrap the word "ចំណេញ" inside a <span> tag with red text style.', km: 'ដាក់ពាក្យ "ចំណេញ" ក្នុង <span> tag ជាមួយ style="color: red;"។' },
        solution: '<span style="color: red;">ចំណេញ</span>'
      },
      quizQuestions: [
        {
          id: 'qh7-3',
          question: { en: 'Is <div> a block-level or inline element by default?', km: 'តើ <div> ជា Block-level ឬ Inline element ដោយស្វ័យប្រវត្តិ?' },
          options: [
            { id: 'a', text: { en: 'Block-level', km: 'Block-level' }, isCorrect: true },
            { id: 'b', text: { en: 'Inline', km: 'Inline' }, isCorrect: false }
          ],
          explanation: { en: '<div> is a block-level container occupying full container width by default.', km: '<div> គឺជា Block element ដែលយកប្រវែងទទឹងពេញអេក្រង់។' }
        }
      ]
    },

    // MODULE 8 — Accessibility Basics in HTML
    {
      id: 'html-l23',
      slug: 'html-accessibility-basics',
      moduleNumber: 8,
      lessonNumberInModule: 1,
      title: { en: '8.1 Why Web Accessibility (a11y) Matters', km: '៨.១ ហេតុអ្វី Web Accessibility (a11y) មានសារៈសំខាន់' },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Web Accessibility (a11y) ensures that people with disabilities (visually impaired, screen reader users, motor disabilities) can perceive, understand, navigate, and interact with web applications effectively.',
        km: 'Web Accessibility (a11y) ធានាថាជនពិការ (ពិការភ្នែក ពិការត្រចៀក ឬប្រើប្រាស់តែ Keyboard) អាចចូលមើល និងប្រើប្រាស់ Web Application បានយ៉ាងរលូនដូចមនុស្សទូទៅ។'
      },
      tutorial: {
        en: 'Ensure all interactive elements (links, buttons, inputs) can be fully reached and operated using only the Keyboard Tab key.',
        km: 'ធានាថាគ្រប់ប៊ូតុង និង Link ទាំងអស់អាចចុចបានដោយប្រើប្រាស់តែ Keyboard Tab key (ដោយមិនបាច់ប្រើ Mouse)។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>Accessibility Keyboard Navigation Test</h2>
  <p>ព្យាយាមចុច Tab key លើ Keyboard ដើម្បីផ្លាស់ទីចំនុច Focus រវាង Elements ខាងក្រោម៖</p>
  
  <a href="#link1">តំណភ្ជាប់ទី ១</a><br><br>
  <button type="button">ប៊ូតុងចុចទី ២</button><br><br>
  <input type="text" placeholder="ប្រអប់បញ្ចូលទី ៣">
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Government & Enterprise Legal Accessibility Compliance', km: 'បទដ្ឋានច្បាប់ Accessibility សម្រាប់ក្រុមហ៊ុន និងរដ្ឋាភិបាល' },
        description: {
          en: 'Public websites in many countries are legally required to pass WCAG 2.1 AA accessibility guidelines so all citizens can access public services.',
          km: 'គេហទំព័ររដ្ឋាភិបាល និងក្រុមហ៊ុនធំៗត្រូវបានកំណត់ដោយច្បាប់ឱ្យគោរពតាមស្តង់ដារ WCAG Accessibility។'
        }
      },
      practiceExercise: {
        question: { en: 'Ensure a button has a clear visible text label for screen readers.', km: 'បង្កើត <button> ដែលមានអត្ថបទច្បាស់លាស់សម្រាប់ Screen Reader។' },
        solution: '<button type="button">បិទផ្ទាំងផ្ទាំងដំណឹង</button>'
      },
      quizQuestions: [
        {
          id: 'qh8-1',
          question: { en: 'What does the numeracy abbreviation "a11y" stand for in web development?', km: 'តើពាក្យកាត់ "a11y" តំណាងឱ្យពាក្យពេញអ្វី?' },
          options: [
            { id: 'a', text: { en: 'Accessibility (11 letters between A and Y)', km: 'Accessibility (មាន ១១ អក្សរចន្លោះ A និង Y)' }, isCorrect: true },
            { id: 'b', text: { en: 'Automated 11 Yields', km: 'Automated 11 Yields' }, isCorrect: false }
          ],
          explanation: { en: 'a11y stands for Accessibility (A + 11 characters + Y).', km: 'a11y គឺជាពាក្យកាត់នៃ Accessibility។' }
        }
      ]
    },
    {
      id: 'html-l24',
      slug: 'html-a11y-alt-labels-headings',
      moduleNumber: 8,
      lessonNumberInModule: 2,
      title: { en: '8.2 Screen Reader Accessibility: Alt Text, Labels & Heading Hierarchy', km: '៨.២ Accessible Elements: Alt Text, Labels & Heading Structure' },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Screen readers read pages sequentially. Missing image alt attributes, unlabelled input fields, or out-of-order headings break screen reader navigation flow for visually impaired users.',
        km: 'Screen Reader អានទំព័រតាមលំដាប់។ ការភ្លេច alt attribute, ការគ្មាន label លើ input ឬការរំលង Heading level ធ្វើឱ្យអ្នកពិការភ្នែកពិបាកយល់ពីមាតិកា។'
      },
      tutorial: {
        en: '1. Always use <label for="id"> for inputs.\n2. Always include descriptive alt="..." on images.\n3. Never skip headings (e.g. <h1> directly to <h4>).',
        km: '១. ប្រើ label for="id" ជានិច្ច\n២. បញ្ជាក់ alt text ដែលពិពណ៌នារូបភាព\n៣. មិនត្រូវរំលងកម្រិត Heading'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>ទម្រង់ទំនាក់ទំនង Accessible 100%</h2>
  <form>
    <label for="user-email">អាសយដ្ឋានអ៊ីមែលរបស់អ្នក:</label><br>
    <input type="email" id="user-email" name="email" required>
    
    <br><br>
    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="កុំព្យូទ័របង្ហាញកូដ HTML5">
  </form>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Accessible Banking Forms', km: 'ទម្រង់ផ្ទេរប្រាក់ក្នុង Mobile Banking' },
        description: {
          en: 'Mobile banking applications require precise input labeling so visually impaired clients can safely verify recipient account numbers via voice voiceover.',
          km: 'App ធនាគារត្រូវការ Label ច្បាស់លាស់ដើម្បីឱ្យ VoiceOver អានលេខគណនីឱ្យអ្នកពិការភ្នែកស្តាប់បានត្រឹមត្រូវ។'
        }
      },
      practiceExercise: {
        question: { en: 'Connect a <label> to an <input> using matching for and id attributes.', km: 'ភ្ជាប់ <label> ទៅ <input> ដោយប្រើ attribute for និង id ដូចគ្នា។' },
        solution: '<label for="age">អាយុ:</label><input type="number" id="age">'
      },
      quizQuestions: [
        {
          id: 'qh8-2',
          question: { en: 'Why is it important to connect a <label> to an <input> via matching for/id attributes?', km: 'ហេតុអ្វីត្រូវភ្ជាប់ <label> ទៅ <input> តាមរយៈ for/id attributes?' },
          options: [
            { id: 'a', text: { en: 'Allows screen readers to announce field name when focused and makes text label clickable', km: 'ជួយឱ្យ Screen Reader អានឈ្មោះ field និងធ្វើឱ្យអត្ថបទ label ចុចបាន' }, isCorrect: true },
            { id: 'b', text: { en: 'Changes font color automatically', km: 'ផ្លាស់ប្តូរពណ៌ Font ដោយស្វ័យប្រវត្តិ' }, isCorrect: false }
          ],
          explanation: { en: 'for/id linking improves accessibility and enlarges the interactive touch/click area.', km: 'ការភ្ជាប់ for/id ជួយទាំង Screen Reader និងបង្កើនទំហំចុចលើអេក្រង់។' }
        }
      ]
    },
    {
      id: 'html-l25',
      slug: 'html-aria-attributes-overview',
      moduleNumber: 8,
      lessonNumberInModule: 3,
      title: { en: '8.3 ARIA Attributes Overview (aria-label, aria-hidden, role)', km: '៨.៣ ARIA Attributes Overview (aria-label, aria-hidden, role)' },
      durationMinutes: 20,
      difficulty: 'Advanced',
      explanation: {
        en: 'ARIA (Accessible Rich Internet Applications) attributes supplement native HTML when built-in semantic tags cannot convey state (e.g. aria-expanded="true", aria-label="Close Modal", aria-hidden="true").',
        km: 'ARIA (Accessible Rich Internet Applications) គឺជា Attributes ពិសេសបន្ថែមលើ HTML ពេលបង្កើត Custom UI (ឧទាហរណ៍៖ aria-label="បិទផ្ទាំង", aria-expanded="true", aria-hidden="true")។'
      },
      tutorial: {
        en: 'Rule #1 of ARIA: Do not use ARIA if a native HTML element already exists! Use <button> instead of <div role="button"> whenever possible.',
        km: 'ច្បាប់ទី ១ នៃ ARIA៖ បើសិនជាមាន Tag HTML ស្រាប់ ហាមប្រើ ARIA! ត្រូវប្រើ <button> ជាជាងប្រើ <div role="button">។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>Icon Button ជាមួយ ARIA Label</h2>
  
  <!-- Icon button គ្មានអត្ថបទ ត្រូវតែមាន aria-label -->
  <button type="button" aria-label="បិទផ្ទាំងដំណឹង">
    ❌ <!-- Icon និមិត្តសញ្ញា -->
  </button>

  <!-- លាក់រូបភាពតុបតែងពី Screen Reader -->
  <span aria-hidden="true">🎨</span>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Accessible Modal Close Icon Buttons', km: 'ការបង្កើត ប៊ូតុង X បិទ Modal' },
        description: {
          en: 'Icon-only buttons (like an "X" close icon) lack visible inner text. Adding aria-label="Close dialog" allows screen readers to announce the button action clearly.',
          km: 'ប៊ូតុងរូបរូបសញ្ញា "X" គ្មានអត្ថបទឡើយ ដូច្នេះត្រូវតែមាន `aria-label="បិទ"` ដើម្បីឱ្យ Screen Reader អានប្រាប់អ្នកប្រើប្រាស់។'
        }
      },
      practiceExercise: {
        question: { en: 'Add aria-label="ស្វែងរក" to an icon search button.', km: 'បន្ថែម attribute aria-label="ស្វែងរក" ទៅកាន់ icon button។' },
        solution: '<button type="button" aria-label="ស្វែងរក">🔍</button>'
      },
      quizQuestions: [
        {
          id: 'qh8-3',
          question: { en: 'When should aria-label be used on a <button>?', km: 'តើពេលណាដែលគួរប្រើ aria-label លើ <button>?' },
          options: [
            { id: 'a', text: { en: 'When the button contains only an icon without visible text', km: 'នៅពេលប៊ូតុងមានតែ Icon រូបភាពដោយគ្មានអត្ថបទ' }, isCorrect: true },
            { id: 'b', text: { en: 'On every single HTML element', km: 'ប្រើលើគ្រប់ HTML Element ទាំងអស់' }, isCorrect: false }
          ],
          explanation: { en: 'aria-label provides text equivalent for visually silent controls like icon buttons.', km: 'aria-label ផ្តល់អត្ថបទជំនួសសម្រាប់ប៊ូតុងដែលគ្មានអក្សរ។' }
        }
      ]
    },

    // MODULE 9 — Meta Tags & SEO Basics
    {
      id: 'html-l26',
      slug: 'html-head-meta-tags',
      moduleNumber: 9,
      lessonNumberInModule: 1,
      title: { en: '9.1 The <head> Section, Meta Tags & Viewport', km: '៩.១ ផ្នែក <head>, Meta Tags & Viewport Settings' },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'The <head> element contains document metadata that is not rendered on the page canvas. Key tags include <meta charset="UTF-8"> and <meta name="viewport" content="width=device-width, initial-scale=1.0">.',
        km: 'ផ្នែក <head> ផ្ទុក Metadata ដែលមិនបង្ហាញលើអេក្រង់ឡើយ។ Tag សំខាន់ៗរួមមាន <meta charset="UTF-8"> និង <meta name="viewport" content="width=device-width, initial-scale=1.0"> សម្រាប់ Mobile Responsive។'
      },
      tutorial: {
        en: 'The viewport meta tag instructs mobile browser engines to set viewport width to the device screen width, preventing unwanted zoomed-out desktop rendering on phones.',
        km: 'Viewport Meta tag បញ្ជាឱ្យ Mobile Browser កំណត់ទំហំទំព័រឱ្យស្មើនឹងទំហំអេក្រង់ទូរស័ព្ទ បង្ការកុំឱ្យបង្រួមអក្សរតូចៗ។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>គេហទំព័រ Responsive</title>
</head>
<body>
  <h1>ទំព័រដែលទ្រទ្រង់ Mobile អេក្រង់តូច</h1>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Responsive Design Enabler', km: 'ការកំណត់ Viewport សម្រាប់គេហទំព័រ Mobile-Friendly' },
        description: {
          en: 'Without the viewport meta tag, mobile CSS media queries will not trigger properly on iOS Safari or Android Chrome.',
          km: 'បើគ្មាន Viewport Meta Tag ទេ នោះ CSS Media Queries នឹងមិនដំណើរការលើទូរស័ព្ទដៃឡើយ។'
        }
      },
      practiceExercise: {
        question: { en: 'Write the standard responsive viewport meta tag.', km: 'សរសេរ Standard Responsive Viewport Meta Tag។' },
        solution: '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
      },
      quizQuestions: [
        {
          id: 'qh9-1',
          question: { en: 'What is the purpose of <meta name="viewport" content="width=device-width, initial-scale=1.0">?', km: 'តើ Meta Viewport មានប្រយោជន៍អ្វី?' },
          options: [
            { id: 'a', text: { en: 'Configures responsive mobile screen rendering dimensions', km: 'កំណត់ទំហំទំព័រឱ្យត្រូវតាមអេក្រង់ទូរស័ព្ទដៃ' }, isCorrect: true },
            { id: 'b', text: { en: 'Connects a SQL database', km: 'ភ្ជាប់ទៅកាន់ SQL Database' }, isCorrect: false }
          ],
          explanation: { en: 'Viewport tag sets initial viewport scale to device pixel width.', km: 'Viewport Tag កំណត់ទំហំបង្ហាញឱ្យត្រូវតាមអេក្រង់ឧបករណ៍។' }
        }
      ]
    },
    {
      id: 'html-l27',
      slug: 'html-seo-titles-descriptions-og-tags',
      moduleNumber: 9,
      lessonNumberInModule: 2,
      title: { en: '9.2 Page Titles, SEO Description & Open Graph Social Tags', km: '៩.២ Page Titles, Meta Description & Open Graph Social Tags' },
      durationMinutes: 20,
      difficulty: 'Intermediate',
      explanation: {
        en: 'Page title and meta description tags control Google Search snippet results. Open Graph (og:title, og:image, og:description) tags control rich link preview cards when links are shared on Facebook, Telegram, or LinkedIn.',
        km: 'Page Title និង Meta Description គ្រប់គ្រងការបង្ហាញលើ Google Search។ Open Graph (og:title, og:image) គ្រប់គ្រងរូបភាព និងអត្ថបទ Preview នៅពេលគេ Share Link លើ Facebook ឬ Telegram។'
      },
      tutorial: {
        en: '<meta property="og:title" content="...">\n<meta property="og:description" content="...">\n<meta property="og:image" content="https://site.com/banner.jpg">',
        km: 'កំណត់ og:image ជាមួយ URL រូបភាព Banner សម្រាប់បង្ហាញពេល Share Link លើ Social Media។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>វគ្គសិក្សា HTML5 មូលដ្ឋានគ្រឹះ - Frontend Hub</title>
  <meta name="description" content="រៀន HTML5 ពីដំបូងរហូតដល់កម្រិតខ្ពស់ជាមួយមេរៀនភាសាខ្មែរ និងលំហាត់អនុវត្តកូដជាក់ស្តែង។">

  <!-- Open Graph / Social Media Preview -->
  <meta property="og:title" content="វគ្គសិក្សា HTML5 មូលដ្ឋានគ្រឹះ">
  <meta property="og:description" content="រៀន HTML5 ជាមួយមេរៀនភាសាខ្មែរ">
  <meta property="og:image" content="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200">
</head>
<body>
  <h1>ទំព័រវគ្គសិក្សា HTML5</h1>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Telegram & Facebook Rich Link Share Cards', km: 'ការបង្ហាញ Link Preview ស្អាតបាតលើ Telegram' },
        description: {
          en: 'When sharing a blog post URL on Telegram or Facebook, Open Graph tags automatically extract and render the article thumbnail image, title, and excerpt.',
          km: 'ពេល Share Link លើ Telegram នោះ Telegram នឹងទាញយករូបភាព និងចំណងជើងតាមរយៈ Open Graph Tags ដោយស្វ័យប្រវត្តិ។'
        }
      },
      practiceExercise: {
        question: { en: 'Add a meta description tag with text "រៀនសរសេរកូដ HTML5".', km: 'បន្ថែម meta description tag ដែលមានពាក្យ "រៀនសរសេរកូដ HTML5"។' },
        solution: '<meta name="description" content="រៀនសរសេរកូដ HTML5">'
      },
      quizQuestions: [
        {
          id: 'qh9-2',
          question: { en: 'Which meta tags control link preview cards on social networks?', km: 'តើ Meta tags ប្រភេទណាដែលគ្រប់គ្រង Link Preview លើ Social Network?' },
          options: [
            { id: 'a', text: { en: 'Open Graph (og:) tags', km: 'Open Graph (og:) tags' }, isCorrect: true },
            { id: 'b', text: { en: 'HTTP-equiv tags', km: 'HTTP-equiv tags' }, isCorrect: false }
          ],
          explanation: { en: 'Open Graph protocol metadata formats rich card social previews.', km: 'Open Graph tags ប្រើសម្រាប់បង្កើត Rich Link Preview លើ Social Media។' }
        }
      ]
    },
    {
      id: 'html-l28',
      slug: 'html-favicons-external-resources',
      moduleNumber: 9,
      lessonNumberInModule: 3,
      title: { en: '9.3 Favicons & Linking External Resources (CSS & JS)', km: '៩.៣ Favicons & ការភ្ជាប់ CSS/JS ខាងក្រៅ' },
      durationMinutes: 20,
      difficulty: 'Beginner',
      explanation: {
        en: 'Link external stylesheet files using <link rel="stylesheet" href="style.css">, load tab favicons using <link rel="icon">, and include JavaScript files using <script src="app.js" defer></script>.',
        km: 'ភ្ជាប់ CSS ខាងក្រៅតាមរយៈ <link rel="stylesheet" href="style.css">, ភ្ជាប់ Favicon តាមរយៈ <link rel="icon"> និងភ្ជាប់ JavaScript តាមរយៈ <script src="app.js" defer></script>។'
      },
      tutorial: {
        en: 'Always place <script defer> in the <head> or put standard <script> tags at the very bottom of <body> right before </body> to ensure HTML DOM elements parse before JavaScript executes.',
        km: 'ប្រើ `defer` attribute លើ script ឬដាក់ <script> នៅខាងក្រោមបង្អស់នៃ <body> ដើម្បីឱ្យ HTML Parse ចប់មុន JavaScript រត់។'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>ទំព័រភ្ជាប់ CSS/JS</title>
  
  <!-- 1. ភ្ជាប់ Favicon លើ Tab -->
  <link rel="icon" href="https://api.iconify.design/vscode-icons:file-type-html.svg" type="image/svg+xml">
  
  <!-- 2. ភ្ជាប់ External CSS Stylesheet -->
  <link rel="stylesheet" href="styles.css">

  <!-- 3. ភ្ជាប់ External JavaScript ជាមួយ defer attribute -->
  <script src="script.js" defer></script>
</head>
<body>
  <h1>ទំព័របានភ្ជាប់ឯកសារខាងក្រៅត្រឹមត្រូវ</h1>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Optimizing Page Load Performance with defer Scripts', km: 'ការបង្កើនល្បឿន Web Load ជាមួយ Defer Attribute' },
        description: {
          en: 'The defer attribute prevents render-blocking JavaScript errors by allowing the HTML document to parse fully in parallel while downloading JS files.',
          km: '`defer` ធ្វើឱ្យ Browser ទាញយក File JS ដោយមិនចាំបាច់បង្កកការបង្ហាញ HTML ឡើយ។'
        }
      },
      practiceExercise: {
        question: { en: 'Write a <link> tag connecting an external stylesheet named "main.css".', km: 'សរសេរ <link> tag ភ្ជាប់ទៅកាន់ External Stylesheet "main.css"។' },
        solution: '<link rel="stylesheet" href="main.css">'
      },
      quizQuestions: [
        {
          id: 'qh9-3',
          question: { en: 'What does the defer attribute do on a <script> tag?', km: 'តើ defer attribute លើ <script> tag មានតួនាទីអ្វី?' },
          options: [
            { id: 'a', text: { en: 'Executes script after HTML document parsing finishes', km: 'រត់ Script បន្ទាប់ពី HTML Document ត្រូវបាន Parse រួចរាល់' }, isCorrect: true },
            { id: 'b', text: { en: 'Deletes the script file after execution', km: 'លុប File Script ចោលបន្ទាប់ពីរត់រួច' }, isCorrect: false }
          ],
          explanation: { en: 'defer ensures JavaScript execution never blocks HTML DOM parsing.', km: 'defer ការពារកុំឱ្យ Script បង្កកការ Parse កូដ HTML។' }
        }
      ]
    },

    // MODULE 10 — HTML5 APIs Overview
    {
      id: 'html-l29',
      slug: 'html5-apis-overview',
      moduleNumber: 10,
      lessonNumberInModule: 1,
      title: { en: '10.1 HTML5 Browser APIs Overview (Geolocation, LocalStorage, Drag & Drop)', km: '១០.១ HTML5 Browser APIs Overview (Geolocation, LocalStorage, Drag & Drop)' },
      durationMinutes: 20,
      difficulty: 'Advanced',
      explanation: {
        en: 'Modern HTML5 introduces powerful browser APIs: Geolocation API (user device location), Web Storage API (localStorage/sessionStorage client data), and Drag & Drop API for interactive desktop-class web applications.',
        km: 'HTML5 ផ្តល់នូវ Browser APIs សំខាន់ៗ៖ Geolocation API (ស្វែងរកទីតាំង GPS), LocalStorage (រក្សាទុកទិន្នន័យលើ Browser), និង Drag & Drop API សម្រាប់អូសទម្លាក់ទិន្នន័យ។'
      },
      tutorial: {
        en: '1. LocalStorage example: localStorage.setItem("theme", "dark");\n2. Geolocation example: navigator.geolocation.getCurrentPosition(...)',
        km: '១. រក្សាទុកទិន្នន័យក្នុង Browser៖ localStorage.setItem("key", "value")\n២. ទាញយកទីតាំង GPS៖ navigator.geolocation.getCurrentPosition(...)'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<body>
  <h2>HTML5 Browser APIs Concept</h2>
  
  <p>1. LocalStorage: រក្សាទុក Dark/Light theme ឬ User Token</p>
  <p>2. Geolocation: ស្វែងរកទីតាំងបច្ចុប្បន្នលើផែនទី</p>
  <p>3. Drag & Drop: អូសទម្លាក់ឯកសារ Upload</p>

  <button type="button" onclick="alert('LocalStorage Supported: ' + typeof(Storage))">
    ពិនិត្យមើល Browser API Support
  </button>
</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Persistent User Dark Mode Preference', km: 'ការចងចាំ Dark Mode Preference លើ Browser' },
        description: {
          en: 'Websites like GitHub use HTML5 LocalStorage API to save your dark theme selection so your preference stays remembered when you refresh or revisit tomorrow.',
          km: 'GitHub ប្រើប្រាស់ HTML5 LocalStorage ដើម្បីចងចាំជម្រើស Dark Mode របស់អ្នកទោះបីជាបិទ Browser ក៏ដោយ។'
        }
      },
      practiceExercise: {
        question: { en: 'What API is used to store string data permanently in the browser?', km: 'តើ API មួយណាប្រើសម្រាប់ រក្សាទុកទិន្នន័យជាអចិន្ត្រៃយ៍លើ Browser?' },
        solution: 'localStorage.setItem("key", "value");'
      },
      quizQuestions: [
        {
          id: 'qh10-1',
          question: { en: 'Which HTML5 API allows storing key-value pairs locally in the browser with no expiration date?', km: 'តើ HTML5 API មួយណាដែលរក្សាទុកទិន្នន័យ Key-Value លើ Browser ដោយគ្មានថ្ងៃផុតកំណត់?' },
          options: [
            { id: 'a', text: { en: 'LocalStorage API', km: 'LocalStorage API' }, isCorrect: true },
            { id: 'b', text: { en: 'Cookie API', km: 'Cookie API' }, isCorrect: false }
          ],
          explanation: { en: 'localStorage keeps data stored across browser sessions until explicitly cleared.', km: 'localStorage រក្សាទុកទិន្នន័យរហូតដល់អ្នកប្រើប្រាស់លុបវាចោល។' }
        }
      ]
    },

    // CAPSTONE MODULE — Personal Bio Page
    {
      id: 'html-l30',
      slug: 'html-capstone-personal-bio-page',
      moduleNumber: 11,
      lessonNumberInModule: 1,
      title: { en: 'Capstone Project: Personal Bio & Resume Site', km: 'គម្រោង Capstone៖ បង្កើតទំព័រប្រវត្តិរូប Personal Bio Site' },
      durationMinutes: 45,
      difficulty: 'Advanced',
      explanation: {
        en: 'Combine everything you learned in the course to build a full semantic HTML5 personal bio site featuring navigation anchor links, profile image, skills table, and contact form with validation.',
        km: 'រួមបញ្ចូលរាល់ចំណេះដឹងដែលបានរៀនក្នុងវគ្គសិក្សាទាំងអស់ ដើម្បីបង្កើតទំព័រ HTML Personal Bio ពេញលេញមួយដែលមាន Header, Nav, Skills Table, និង Contact Form។'
      },
      tutorial: {
        en: '1. Use semantic elements: <header>, <nav>, <main>, <section>, <article>, <footer>.\n2. Include accessible image alt text and label attributes.\n3. Add native form input validation (required, type="email").',
        km: '១. ប្រើប្រាស់ Semantic elements ឱ្យបានត្រឹមត្រូវ\n២. បញ្ជាក់ alt text លើរូបភាព និង label លើគ្រប់ input\n៣. បន្ថែម native validation លើ Form'
      },
      starterCode: {
        html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ប្រវត្តិរូបសង្ខេប - Frontend Developer</title>
</head>
<body style="font-family: sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px;">

  <!-- Header Section -->
  <header style="border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
    <h1>សុខា - Web Developer</h1>
    <p>អ្នកបង្កើត Web Applications ដែលមាន Accessibility និង Performance ខ្ពស់។</p>
    <nav>
      <a href="#about">អំពីខ្ញុំ</a> |
      <a href="#skills">ជំនាញ</a> |
      <a href="#contact">ទំនាក់ទំនង</a>
    </nav>
  </header>

  <main>
    <!-- About Section -->
    <section id="about" style="margin-top: 20px;">
      <h2>អំពីខ្ញុំ</h2>
      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" alt="រូបថតប្រវត្តិរូប សុខា" width="120" height="120" style="border-radius: 50%;">
      <p>ខ្ញុំបាទជា Frontend Developer ដែលមានជំនាញលើ HTML5, CSS3 និង JavaScript។</p>
    </section>

    <!-- Skills Table Section -->
    <section id="skills" style="margin-top: 20px;">
      <h2>បញ្ជីជំនាញ</h2>
      <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr style="background: #f3f4f6;">
            <th>បច្ចេកវិទ្យា</th>
            <th>កម្រិតជំនាញ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML5 & Semantic Markup</td>
            <td>Advanced (ស្ទាត់ជំនាញ)</td>
          </tr>
          <tr>
            <td>CSS3 Flexbox & Grid</td>
            <td>Intermediate (មធ្យម)</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Contact Form Section -->
    <section id="contact" style="margin-top: 20px;">
      <h2>ទម្រង់ទំនាក់ទំនង</h2>
      <form action="#" method="POST">
        <p>
          <label for="name">ឈ្មោះពេញ:</label><br>
          <input type="text" id="name" name="name" required placeholder="បញ្ចូលឈ្មោះ...">
        </p>
        <p>
          <label for="email">អ៊ីមែល:</label><br>
          <input type="email" id="email" name="email" required placeholder="name@example.com">
        </p>
        <p>
          <label for="msg">សារ:</label><br>
          <textarea id="msg" name="msg" rows="4" required></textarea>
        </p>
        <button type="submit">ផ្ញើសារ (Send)</button>
      </form>
    </section>
  </main>

  <footer style="margin-top: 40px; border-top: 1px solid #ccc; padding-top: 10px; text-align: center;">
    <p>&copy; 2026 សុខា Frontend Developer</p>
  </footer>

</body>
</html>`
      },
      realWorldExample: {
        title: { en: 'Personal Portfolio & Resume Deployment', km: 'ការផ្សាយទំព័រ Portfolio ផ្ទាល់ខ្លួនលើ Web' },
        description: {
          en: 'You can host this exact semantic HTML bio page for free on GitHub Pages, Vercel, or Netlify as your live developer portfolio resume link!',
          km: 'អ្នកអាចយកទំព័រ HTML Bio នេះទៅ Deploy លើ GitHub Pages ឬ Vercel ដោយឥតគិតថ្លៃដើម្បីផ្ញើជូនក្រុមហ៊ុនការងារ។'
        }
      },
      practiceExercise: {
        question: { en: 'Verify that all 6 semantic landmarks (header, nav, main, section, article, footer) are present.', km: 'ពិនិត្យមើលថាតើទំព័រមាន Semantic landmarks គ្រប់គ្រាន់ហើយឬនៅ។' },
        solution: '<header><nav></nav></header><main><section><article></article></section></main><footer></footer>'
      },
      quizQuestions: [
        {
          id: 'qh11-1',
          question: { en: 'Which combination of HTML features creates a professional, accessible personal bio site?', km: 'តើចំណុចរួមបញ្ចូលមួយណាដែលបង្កើតបានជាគេហទំព័រ Bio ប្រកបដោយអាជីព?' },
          options: [
            { id: 'a', text: { en: 'Semantic layout tags + Accessible form labels + Alt text + Responsive viewport meta', km: 'Semantic layout tags + Accessible form labels + Alt text + Responsive viewport meta' }, isCorrect: true },
            { id: 'b', text: { en: 'Using only unlabelled <div> tags and inline style attributes', km: 'ប្រើតែ <div> គ្មាន label និងគ្មាន semantic tags' }, isCorrect: false }
          ],
          explanation: { en: 'A professional web app balances semantics, accessibility, validation, and metadata.', km: 'គេហទំព័រអាជីពត្រូវការរួមបញ្ចូល Semantics, Accessibility, និង Metadata ត្រឹមត្រូវ។' }
        }
      ]
    }
  ]
};
