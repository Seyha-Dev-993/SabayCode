import { BackendCourse } from '../backendCoursesHubData';

export const PHP_BACKEND_COURSE_DATA: BackendCourse = {
  id: 'php',
  slug: 'php',
  title: {
    en: 'PHP — Language & Web Server Basics',
    km: 'ភាសា PHP និងមូលដ្ឋាន Web Server'
  },
  iconName: 'php',
  type: 'language',
  categoryId: 'languages',
  difficulty: 'Beginner',
  shortDescription: {
    en: 'The language behind a huge share of the web — learn it first, build real APIs next with Laravel.',
    km: 'ភាសាដែលនៅពីក្រោយចំណែកធំនៃគេហទំព័រពិភពលោក — រៀនវាមុន រួចទើបទៅសាង API ពិតប្រាកដជាមួយ Laravel។'
  },
  summary: {
    en: 'PHP is a server-side scripting language built specifically for the web, and despite being one of the older languages in this catalog, it still powers a massive share of the internet — WordPress alone runs over 40% of all websites, and PHP sits underneath it. Unlike Dart, Kotlin, or Swift, PHP was designed from day one to run on a web server and generate dynamic pages, so this course teaches the language and the basics of handling real web requests together — variables, control flow, functions, arrays, and object-oriented programming, plus how PHP reads form data, manages sessions, and responds to HTTP requests using its own built-in development server. By the end, you\'ll understand exactly how a PHP web request flows from browser to server and back, and you\'ll be ready to move directly into the Laravel course to build real, structured APIs and applications.',
    km: 'PHP ជាភាសា scripting ខាង server ដែលបង្កើតឡើងជាពិសេសសម្រាប់គេហទំព័រ ហើយទោះបីជាជាភាសាចាស់ជាងគេក្នុងកាតាឡុកនេះក៏ដោយ វានៅតែដំណើរការចំណែកធំនៃអ៊ីនធឺណិត — WordPress តែឯងដំណើរការជាង 40% នៃគេហទំព័រទាំងអស់ ហើយ PHP នៅពីក្រោមវា។ ខុសពី Dart, Kotlin ឬ Swift, PHP ត្រូវបានរចនាតាំងពីដើមឡើយឱ្យរត់លើ web server និងបង្កើតទំព័រ dynamic ដូច្នេះវគ្គសិក្សានេះបង្រៀនទាំងភាសា និង មូលដ្ឋាននៃការគ្រប់គ្រង web request ពិតប្រាកដជាមួយគ្នា — variables, control flow, functions, arrays និង object-oriented programming បូកនឹងរបៀបដែល PHP អានទិន្នន័យ form គ្រប់គ្រង session និងឆ្លើយតបទៅ HTTP request ដោយប្រើ built-in development server ផ្ទាល់ខ្លួន។ ចប់វគ្គនេះ អ្នកនឹងយល់ច្បាស់ពីរបៀបដែល PHP web request ហូរពី browser ទៅ server ហើយត្រឡប់មកវិញ ហើយត្រៀមខ្លួនចូលទៅវគ្គ Laravel ដើម្បីសាង API និងកម្មវិធីមានរចនាសម្ព័ន្ធពិតប្រាកដ។'
  },
  estimatedHours: 18,
  lessonCount: 30,
  usedFor: 'Laravel Prerequisites, WordPress Themes & Plugins, Custom Web Applications, REST APIs',
  realWorldApps: ['WordPress CMS', 'Wikipedia (MediaWiki)', 'Laravel Applications', 'E-commerce Platforms (Magento, WooCommerce)'],
  prerequisites: {
    en: 'None — true beginner course. No prior programming experience required, though any prior coding exposure (any language) will help you move faster.',
    km: 'គ្មាន — វគ្គសិក្សាសម្រាប់អ្នកទើបចាប់ផ្តើមពិតប្រាកដ។ មិនទាមទារបទពិសោធន៍សរសេរកូដពីមុនមកទេ ទោះបីជាការធ្លាប់ស្គាល់កូដខ្លះៗ (ភាសាណាក៏ដោយ) នឹងជួយឱ្យអ្នករៀនបានលឿនជាងមុន។'
  },
  whatYouWillLearn: {
    en: [
      "Set up PHP and run scripts locally using PHP's built-in development server",
      "Use variables, data types, and operators, including PHP's loose and strict comparison",
      "Write control flow logic with if/else, switch, and loops",
      "Build reusable functions, including default and variadic arguments",
      "Work with PHP's core data structure: the array (indexed and associative)",
      "Apply object-oriented programming: classes, constructors, inheritance, and interfaces",
      "Read form data with $_GET and $_POST, and understand the request/response cycle",
      "Manage state across requests with sessions and cookies",
      "Handle errors safely with try/catch and understand common PHP pitfalls",
      "Read and understand real PHP code found in production web projects"
    ],
    km: [
      "ដំឡើង PHP និងដំណើរការ Script ក្នុងម៉ាស៊ីនផ្ទាល់ខ្លួនដោយប្រើ Built-in Web Server របស់ PHP",
      "ប្រើប្រាស់អថេរ (Variables), ប្រភេទទិន្នន័យ (Data Types) និង ប្រមាណវិធីរួមទាំង Loose និង Strict Comparison",
      "សរសេរ Control Flow Logic ដោយប្រើ if/else, switch និង loops",
      "បង្កើត Reusable Functions រួមមាន Default Arguments និង Variadic Parameters",
      "ប្រើប្រាស់ទិន្នន័យចម្បងក្នុង PHP៖ Arrays (Indexed និង Associative)",
      "អនុវត្ត Object-Oriented Programming៖ Classes, Constructors, Inheritance និង Interfaces",
      "អានទិន្នន័យ Form ជាមួយ $_GET និង $_POST ព្រមទាំងយល់ពី Request/Response Cycle",
      "គ្រប់គ្រង State ឆ្លងកាត់ Request ដោយប្រើ Sessions និង Cookies",
      "ដោះស្រាយ Error ដោយសុវត្ថិភាពជាមួយ try/catch និងយល់ដឹងពី Pitfalls ក្នុង PHP",
      "អាន និងយល់ដឹងពីកូដ PHP ពិតប្រាកដដែលប្រើប្រាស់ក្នុង Production Projects"
    ]
  },
  toolsAndSetup: {
    en: "1. Install PHP (php.net/downloads) — verify with `php -v` in your terminal.\n2. Recommended: install VS Code + the PHP Intelephense extension for auto-completion and syntax highlighting.\n3. Run any script instantly using PHP's built-in server: `php -S localhost:8000` from your project folder.\n4. Create your first file: `index.php`, visit `http://localhost:8000` in your browser to see it run.",
    km: "១. ដំឡើង PHP (php.net/downloads) — ផ្ទៀងផ្ទាត់ដោយវាយ `php -v` ក្នុង Terminal។\n២. ណែនាំ៖ ដំឡើង VS Code + PHP Intelephense Extension សម្រាប់ជំនួយការសរសេរកូដ។\n៣. ដំណើរការ Script ភ្លាមៗដោយប្រើ Built-in Server: `php -S localhost:8000` ចេញពី Project Folder។\n៤. បង្កើត `index.php` រួចចូលទៅ `http://localhost:8000` ក្នុង Browser ដើម្បីមើលលទ្ធផល។"
  },
  cheatSheet: [
    {
      concept: 'PHP Opening Tag & Echo',
      code: `<?php\n$greeting = "Hello, World!";\necho $greeting;`,
      explanation: {
        en: 'PHP blocks start with <?php. echo outputs text to the web response.',
        km: 'កូដ PHP ផ្តើមដោយ <?php។ echo ប្រើសម្រាប់បញ្ជូនអត្ថបទទៅកាន់ Web Response។'
      }
    },
    {
      concept: 'Array & Foreach Loop',
      code: `$frameworks = ["Laravel", "Symfony", "WordPress"];\nforeach ($frameworks as $fw) {\n    echo "Framework: {$fw}\\n";\n}`,
      explanation: {
        en: 'Iterate over array elements cleanly with foreach.',
        km: 'រត់ Loop លើធាតុក្នុង Array ដោយប្រើប្រាស់ foreach។'
      }
    },
    {
      concept: 'Reading Form Data ($_POST)',
      code: `if ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    $name = trim($_POST['name'] ?? 'Guest');\n    $msg = trim($_POST['message'] ?? '');\n}`,
      explanation: {
        en: 'Read incoming form payload safely with the null coalescing operator ??.',
        km: 'អានទិន្នន័យ Form ផ្ញើតាម POST ដោយប្រើប្រាស់ ?? ដើម្បីការពារ Warning។'
      }
    },
    {
      concept: 'PHP 8 Class with Property Promotion',
      code: `class GuestbookEntry {\n    public function __construct(\n        public string $name,\n        public string $message,\n        public string $created_at = ''\n    ) {\n        $this->created_at = $created_at ?: date('Y-m-d H:i:s');\n    }\n}`,
      explanation: {
        en: 'PHP 8 constructor property promotion simplifies class definitions.',
        km: 'Constructor property promotion ក្នុង PHP 8 ជួយសម្រួលការប្រកាស Class ឱ្យខ្លី។'
      }
    }
  ],
  quiz: [
    {
      id: 'php-q1',
      question: {
        en: 'What happens if you omit the opening <?php tag in a .php file?',
        km: 'តើមានអ្វីកើតឡើងបើអ្នកភ្លេចដាក់ Opening Tag <?php ក្នុងឯកសារ .php?'
      },
      options: [
        { id: '1', text: { en: 'PHP throws a fatal syntax error', km: 'PHP នឹងបង្ហាញ Syntax Error' }, isCorrect: false },
        { id: '2', text: { en: 'PHP treats the entire file as plain text/HTML without executing PHP code', km: 'PHP នឹងចាត់ទុកឯកសារនោះជា Plain Text/HTML ដោយមិនដំណើរការកូដឡើយ' }, isCorrect: true },
        { id: '3', text: { en: 'The server crashes automatically', km: 'Server នឹង Crash ដោយស្វ័យប្រវត្តិ' }, isCorrect: false },
        { id: '4', text: { en: 'It defaults to running as JavaScript', km: 'វាដំណើរការជា JavaScript ជំនួសវិញ' }, isCorrect: false }
      ],
      explanation: {
        en: 'Without <?php, PHP passes all text directly through to the output as static text/HTML.',
        km: 'ដោយគ្មាន <?php, PHP នឹងបញ្ជូនអត្ថបទទាំងអស់ទៅ Output ជា Plain Text/HTML ដោយមិនបំផ្លែងឡើយ។'
      }
    },
    {
      id: 'php-q2',
      question: {
        en: 'Which superglobal array is used to access form data sent via HTTP POST method?',
        km: 'តើ Superglobal Array មួយណាដែលប្រើសម្រាប់អានទិន្នន័យ Form ផ្ញើតាម HTTP POST Method?'
      },
      options: [
        { id: '1', text: { en: '$_GET', km: '$_GET' }, isCorrect: false },
        { id: '2', text: { en: '$_POST', km: '$_POST' }, isCorrect: true },
        { id: '3', text: { en: '$_REQUEST_BODY', km: '$_REQUEST_BODY' }, isCorrect: false },
        { id: '4', text: { en: '$_SESSION', km: '$_SESSION' }, isCorrect: false }
      ],
      explanation: {
        en: '$_POST automatically collects values submitted through standard HTML forms using method="POST".',
        km: '$_POST ប្រមូលទិន្នន័យដែលផ្ញើចេញពី HTML Form ដែលប្រើ method="POST"។'
      }
    },
    {
      id: 'php-q3',
      question: {
        en: 'What is the purpose of the null coalescing operator ?? in PHP?',
        km: 'តើ Null Coalescing Operator ?? មានប្រយោជន៍អ្វីខ្លះក្នុង PHP?'
      },
      options: [
        { id: '1', text: { en: 'To compare two floating point numbers', km: 'ដើម្បីប្រៀបធៀបលេខ Floating point' }, isCorrect: false },
        { id: '2', text: { en: 'To return the left operand if set and not null, otherwise the right fallback operand', km: 'ដើម្បីបញ្ជូនតម្លៃខាងឆ្វេងបើមាន ហើយមិន null ឬបញ្ជូនតម្លៃ Fallback ខាងស្តាំបើគ្មាន' }, isCorrect: true },
        { id: '3', text: { en: 'To start a session context', km: 'ដើម្បីចាប់ផ្តើម Session' }, isCorrect: false },
        { id: '4', text: { en: 'To concatenate two string variables', km: 'ដើម្បីតភ្ជាប់ String ២ បញ្ចូលគ្នា' }, isCorrect: false }
      ],
      explanation: {
        en: '$val = $_POST[\'key\'] ?? \'default\' prevents undefined index warnings safely.',
        km: '$val = $_POST[\'key\'] ?? \'default\' ការពារ Undefined Index Warning ដោយសុវត្ថិភាព។'
      }
    }
  ],
  capstoneProject: {
    id: 'php-capstone-guestbook',
    slug: 'simple-guestbook',
    title: {
      en: 'Simple Guestbook — Form Handling, File Storage & Sessions',
      km: 'កម្មវិធី Simple Guestbook — Form Handling, File Storage & Sessions'
    },
    description: {
      en: 'Build a lightweight PHP web application where visitors submit their name and a message through an HTML form. Entries are parsed, validated, stored into a JSON file using a dedicated GuestbookEntry OOP class, and presented in reverse chronological order with session flash alerts.',
      km: 'បង្កើតកម្មវិធី PHP Web App តូចមួយដែលអ្នកចូលមើលអាចផ្ញើឈ្មោះ និងសារតាម HTML Form។ ទិន្នន័យត្រូវបានផ្ទៀងផ្ទាត់ រក្សាទុកក្នុង JSON File ដោយប្រើ Class GuestbookEntry និងបង្ហាញសារបញ្ជាក់តាម Session។'
    },
    starterCode: {
      language: 'php',
      code: `<?php
// Simple Guestbook Starter - index.php
session_start();

// TODO Step 1: Define GuestbookEntry class with $name, $message, $created_at
class GuestbookEntry {
    public function __construct(
        public string $name,
        public string $message,
        public string $created_at = ''
    ) {
        $this->created_at = $created_at ?: date('Y-m-d H:i:s');
    }
}

// TODO Step 2: Read $_POST input and append to data/entries.json
$error = '';
$success = $_SESSION['flash_success'] ?? '';
unset($_SESSION['flash_success']);

$entries = [];
$dataFile = __DIR__ . '/entries.json';
if (file_exists($dataFile)) {
    $raw = file_get_contents($dataFile);
    $entries = json_decode($raw, true) ?? [];
}

?>
<!DOCTYPE html>
<html>
<head><title>Simple Guestbook</title></head>
<body>
  <h1>Simple Guestbook</h1>
  <?php if ($success): ?><p style="color:green;"><?= htmlspecialchars($success) ?></p><?php endif; ?>
  
  <form method="POST">
    <input type="text" name="name" placeholder="Your Name" required><br>
    <textarea name="message" placeholder="Your Message" required></textarea><br>
    <button type="submit">Sign Guestbook</button>
  </form>

  <h2>Previous Messages (<?= count($entries) ?>)</h2>
  <ul>
    <?php foreach (array_reverse($entries) as $item): ?>
      <li><strong><?= htmlspecialchars($item['name']) ?></strong> (<?= $item['created_at'] ?>): <?= htmlspecialchars($item['message']) ?></li>
    <?php endforeach; ?>
  </ul>
</body>
</html>`
    },
    finalCode: `<?php
// Simple Guestbook - Completed index.php
session_start();

class GuestbookEntry {
    public function __construct(
        public string $name,
        public string $message,
        public string $created_at = ''
    ) {
        $this->created_at = $created_at ?: date('Y-m-d H:i:s');
    }

    public function toArray(): array {
        return [
            'name' => $this->name,
            'message' => $this->message,
            'created_at' => $this->created_at
        ];
    }
}

$dataFile = __DIR__ . '/entries.json';
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $message = trim($_POST['message'] ?? '');

    if (empty($name) || empty($message)) {
        $error = 'Both Name and Message are required.';
    } else {
        $entry = new GuestbookEntry($name, $message);
        
        $entries = [];
        if (file_exists($dataFile)) {
            $raw = file_get_contents($dataFile);
            $entries = json_decode($raw, true) ?? [];
        }

        $entries[] = $entry->toArray();
        file_put_contents($dataFile, json_encode($entries, JSON_PRETTY_PRINT));

        $_SESSION['flash_success'] = 'Thank you for signing our guestbook!';
        header('Location: index.php');
        exit;
    }
}

$success = $_SESSION['flash_success'] ?? '';
unset($_SESSION['flash_success']);

$entries = [];
if (file_exists($dataFile)) {
    $raw = file_get_contents($dataFile);
    $entries = json_decode($raw, true) ?? [];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simple Guestbook</title>
  <style>
    body { font-family: sans-serif; max-width: 600px; margin: 2rem auto; padding: 0 1rem; }
    .alert-success { background: #d1fae5; color: #065f46; padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem; }
    .alert-error { background: #fee2e2; color: #991b1b; padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem; }
    form div { margin-bottom: 0.75rem; }
    input, textarea { width: 100%; padding: 0.5rem; box-sizing: border-box; }
    button { background: #2563eb; color: #fff; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }
    .entry-card { border-bottom: 1px solid #e5e7eb; padding: 0.75rem 0; }
    .entry-meta { font-size: 0.85rem; color: #6b7280; }
  </style>
</head>
<body>
  <h1>Simple Guestbook</h1>

  <?php if ($success): ?>
    <div class="alert-success"><?= htmlspecialchars($success) ?></div>
  <?php endif; ?>

  <?php if ($error): ?>
    <div class="alert-error"><?= htmlspecialchars($error) ?></div>
  <?php endif; ?>

  <form method="POST" action="index.php">
    <div>
      <label>Your Name:</label>
      <input type="text" name="name" required value="<?= htmlspecialchars($_POST['name'] ?? '') ?>">
    </div>
    <div>
      <label>Message:</label>
      <textarea name="message" rows="4" required><?= htmlspecialchars($_POST['message'] ?? '') ?></textarea>
    </div>
    <button type="submit">Sign Guestbook</button>
  </form>

  <h2>Entries (<?= count($entries) ?>)</h2>
  <?php if (empty($entries)): ?>
    <p>No messages yet. Be the first to sign!</p>
  <?php else: ?>
    <?php foreach (array_reverse($entries) as $item): ?>
      <div class="entry-card">
        <strong><?= htmlspecialchars($item['name']) ?></strong>
        <span class="entry-meta">posted on <?= htmlspecialchars($item['created_at']) ?></span>
        <p><?= nl2br(htmlspecialchars($item['message'])) ?></p>
      </div>
    <?php endforeach; ?>
  <?php endif; ?>
</body>
</html>`,
    featureChecklist: {
      en: [
        'Interactive HTML form to capture user name and message',
        'GuestbookEntry PHP class wrapping input data with date generation',
        'POST request processing with basic empty field validation',
        'JSON file persistence using file_get_contents() and file_put_contents()',
        'Session flash notification handling for submit feedback',
        'Safe HTML escaping using htmlspecialchars() to prevent XSS attacks'
      ],
      km: [
        'HTML Form សម្រាប់ទទួលឈ្មោះ និងសារពីអ្នកប្រើប្រាស់',
        'PHP Class (GuestbookEntry) សម្រាប់រៀបចំទិន្នន័យ និងកាលបរិច្ឆេទ',
        'ការទទួល POST Request ជាមួយការផ្ទៀងផ្ទាត់ទិន្នន័យមិនឱ្យទទេ',
        'ការរក្សាទុកក្នុង JSON File ដោយប្រើ file_get_contents() និង file_put_contents()',
        'ការបង្ហាញសារបញ្ជាក់តាម Session (Session Flash Messages)',
        'ការការពារ XSS Attack ដោយប្រើ htmlspecialchars()'
      ]
    },
    sampleRequests: [
      {
        title: 'POST /index.php (Submit Guestbook Message)',
        method: 'POST',
        url: '/index.php',
        headers: { 'Content-Type': 'application/x-www-form-style' },
        body: 'name=Seyha&message=Great+PHP+course!+Ready+for+Laravel.',
        responseStatus: 302,
        responseBody: 'Redirect to index.php with $_SESSION[\'flash_success\'] set'
      }
    ]
  },
  modules: [
    {
      moduleNumber: 1,
      title: {
        en: 'Module 1: Introduction & Setup',
        km: 'មេរៀនទី ១៖ ការណែនាំ និងការដំឡើង'
      },
      description: {
        en: 'Understand what PHP is, install local PHP runtime, run scripts with built-in dev server, and output dynamic text.',
        km: 'យល់ដឹងពី PHP, ការដំឡើង PHP ក្នុងម៉ាស៊ីន, ការដំណើរការ Script ជាមួយ Built-in Server និងការបញ្ចេញទិន្នន័យ Dynamic។'
      },
      lessons: [
        {
          id: 'php-m1-l1',
          slug: 'what-is-php',
          moduleNumber: 1,
          lessonNumberInModule: 1,
          title: {
            en: '1.1 What is PHP and why it still powers so much of the web',
            km: '១.១ អ្វីទៅជា PHP ហើយហេតុអ្វីបានជាវានៅតែដំណើរការភាគច្រើននៃ Web?'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'By the end of this lesson you will be able to explain what PHP is and why it remains widely used despite being an older language.',
            km: 'យល់ដឹងច្បាស់ពី PHP និងមូលហេតុដែលវានៅតែត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយទូទាំងពិភពលោក។'
          },
          explanation: {
            en: 'PHP (originally "Personal Home Page," now "PHP: Hypertext Preprocessor") is a scripting language created in 1994 specifically to build dynamic web pages — pages whose content changes based on data, user input, or a database, rather than a static file. When a browser requests a .php page, the web server runs the PHP code on the server and sends back plain HTML, which is why PHP is called "server-side." It\'s the language behind WordPress, Wikipedia (via MediaWiki), Facebook\'s early codebase, and Laravel, one of the most popular backend frameworks in the world today. Learning PHP here, before any framework, means you understand exactly what Laravel is doing underneath its convenient tools in the next course.',
            km: 'PHP (ដើមឡើយហៅ "Personal Home Page" ឥឡូវហៅ "PHP: Hypertext Preprocessor") ជាភាសា scripting ដែលបង្កើតឡើងនៅឆ្នាំ 1994 ជាពិសេសសម្រាប់សាងទំព័រគេហទំព័រ dynamic — ទំព័រដែលមាតិកាផ្លាស់ប្តូរអាស្រ័យលើទិន្នន័យ ការបញ្ចូលរបស់អ្នកប្រើប្រាស់ ឬមូលដ្ឋានទិន្នន័យ ជំនួសឱ្យឯកសារឋិតិវន្ត។ នៅពេល browser ស្នើសុំទំព័រ .php ណាមួយ, web server រត់កូដ PHP នៅលើ server ហើយផ្ញើត្រឡប់ HTML សុទ្ធ ដែលនេះជាមូលហេតុដែល PHP ត្រូវបានហៅថា "server-side"។ វាជាភាសាដែលនៅពីក្រោយ WordPress, Wikipedia (តាមរយៈ MediaWiki), កូដដើមរបស់ Facebook និង Laravel ដែលជា framework backend ពេញនិយមបំផុតមួយក្នុងពិភពលោកសព្វថ្ងៃ។'
          },
          tutorial: {
            en: 'Write your first PHP tag and echo output:',
            km: 'សរសេរស្លាក PHP tag ដំបូង និងបញ្ជា echo៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
// hello.php
echo "Hello, PHP!";`
          },
          tips: {
            en: 'Forgetting the opening <?php tag causes PHP to output your code as plain text instead of executing it!',
            km: 'ការភ្លេច Opening <?php tag ធ្វើឱ្យ PHP បញ្ជូនកូដរបស់អ្នកជា Plain Text ជំនួសឱ្យការ Executing!'
          },
          realWorldExample: {
            title: {
              en: 'WordPress & Wikipedia Backend Engine',
              km: 'ម៉ាស៊ីនក្រោយនៃ WordPress & Wikipedia'
            },
            description: {
              en: 'Over 40% of all websites on the internet run on WordPress, powered directly by PHP server scripts rendering pages on the fly.',
              km: 'ជាង ៤០% នៃគេហទំព័រទាំងអស់នៅលើអ៊ីនធឺណិតរត់លើ WordPress ដែលដំណើរការដោយ PHP server scripts។'
            }
          }
        },
        {
          id: 'php-m1-l2',
          slug: 'installing-php-and-built-in-server',
          moduleNumber: 1,
          lessonNumberInModule: 2,
          title: {
            en: '1.2 Installing PHP and running your first script with the built-in server',
            km: '១.២ ការដំឡើង PHP និងការដំណើរការ Script ដំបូងជាមួយ Built-in Server'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Set up a working PHP environment and understand PHP\'s built-in development server.',
            km: 'រៀបចំបរិស្ថានកូដ PHP និងយល់ដឹងពីការប្រើប្រាស់ PHP built-in server។'
          },
          explanation: {
            en: 'Unlike some languages, PHP includes a lightweight built-in web server meant purely for local development — no separate web server software (like Apache or Nginx) needed to get started. This lets you write PHP files and immediately view them in a real browser, exactly how they\'d behave in production, which is a big part of what makes PHP approachable for beginners building web content.',
            km: 'ខុសពីភាសាផ្សេងទៀត PHP មានរួមបញ្ចូលនូវ Built-in Web Server ស្រាលសម្រាប់ Local Development — មិនបាច់ដំឡើង Apache ឬ Nginx នៅដំណាក់កាលដំបូងឡើយ។ នេះជួយឱ្យអ្នកអាចសរសេរឯកសារ PHP ហើយមើលលទ្ធផលក្នុង Browser ភ្លាមៗ។'
          },
          tutorial: {
            en: 'Steps to run PHP built-in server:\n1. Open terminal in project directory\n2. Run: php -S localhost:8000\n3. Visit http://localhost:8000 in your browser.',
            km: 'ជំហានរត់ PHP built-in server៖\n១. បើក Terminal ក្នុង Project Directory\n២. វាយ៖ php -S localhost:8000\n៣. ចូល http://localhost:8000 ក្នុង Browser។'
          },
          starterCode: {
            language: 'php',
            code: `<?php
// index.php
echo "It works! PHP Built-in Web Server is running smoothly.";`
          }
        },
        {
          id: 'php-m1-l3',
          slug: 'your-first-page-hello-php',
          moduleNumber: 1,
          lessonNumberInModule: 3,
          title: {
            en: '1.3 Your first page — "Hello, PHP!" in the browser',
            km: '១.៣ ទំព័រដំបូងរបស់អ្នក — "Hello, PHP!" ក្នុង Browser'
          },
          durationMinutes: 15,
          difficulty: 'Beginner',
          objective: {
            en: 'Write, run, and understand your first complete PHP page, including mixing PHP with HTML.',
            km: 'សរសេរ ដំណើរការ និងយល់ដឹងពីការលាយកូដ PHP ជាមួយ HTML ក្នុងទំព័រតែមួយ។'
          },
          explanation: {
            en: 'PHP code lives inside <?php ... ?> tags, and you can freely mix it with regular HTML in the same file — this is one of PHP\'s defining features and exactly how it was designed to be used for building web pages.',
            km: 'កូដ PHP ស្ថិតនៅក្នុងស្លាក <?php ... ?> ហើយអ្នកអាចលាយវាជាមួយ HTML បានដោយសេរីក្នុងឯកសារតែមួយ។ នេះជាចំណុចពិសេសចម្បងរបស់ PHP។'
          },
          tutorial: {
            en: 'Combine variables and HTML tags using PHP echo and short tags <?= $var ?>:',
            km: 'ផ្សំអថេរ និងស្លាក HTML ដោយប្រើ PHP echo និង Short Tag <?= $var ?>៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$name = "Seyha";
$age = 25;
?>
<!DOCTYPE html>
<html>
<body>
  <h1>Hello, my name is <?php echo $name; ?> and I am <?= $age ?> years old.</h1>
</body>
</html>`
          },
          practiceExercise: {
            question: {
              en: 'Declare a variable $favoriteFramework = "Laravel" and display it inside an <h2> heading.',
              km: 'ប្រកាសអថេរ $favoriteFramework = "Laravel" ហើយបង្ហាញវាក្នុងស្លាក <h2>។'
            },
            solution: `<?php
$favoriteFramework = "Laravel";
?>
<h2>My favorite framework is <?= $favoriteFramework ?>!</h2>`
          }
        }
      ]
    },
    {
      moduleNumber: 2,
      title: {
        en: 'Module 2: Language Fundamentals',
        km: 'មេរៀនទី ២៖ មូលដ្ឋានគ្រឹះនៃភាសា PHP'
      },
      description: {
        en: 'Variables, dollar sign syntax, scalar data types, strict vs loose equality operators, and string formatting.',
        km: 'អថេរ សញ្ញា $, ប្រភេទទិន្នន័យ, សញ្ញាប្រមាណវិធីស្មើ == និង ===, ព្រមទាំងការតភ្ជាប់ String។'
      },
      lessons: [
        {
          id: 'php-m2-l1',
          slug: 'variables-and-dollar-syntax',
          moduleNumber: 2,
          lessonNumberInModule: 1,
          title: {
            en: '2.1 Variables and PHP\'s $ syntax',
            km: '២.១ អថេរ និងទ្រង់ទ្រាយសញ្ញា $ ក្នុង PHP'
          },
          durationMinutes: 18,
          difficulty: 'Beginner',
          objective: {
            en: 'Declare and reassign variables using PHP\'s mandatory dollar sign prefix.',
            km: 'ប្រកាស និងផ្លាស់ប្តូរតម្លៃអថេរដោយប្រើសញ្ញា $។'
          },
          explanation: {
            en: 'Every variable name in PHP starts with a dollar sign `$`. Variable names are case-sensitive ($age and $Age are distinct). PHP is dynamically typed, meaning you do not need to specify the type explicitly upon creation.',
            km: 'អថេរគ្រប់រូបក្នុង PHP ត្រូវតែផ្តើមដោយសញ្ញា `$`។ ឈ្មោះអថេរមានភាព Case-sensitive ($age និង $Age ផ្សេងគ្នា)។ PHP ជាភាសា Dynamic Type។'
          },
          tutorial: {
            en: 'Declaring integer, string, and boolean variables:',
            km: 'ការប្រកាសអថេរ Integer, String និង Boolean៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$courseName = "PHP Web Basics";
$lessonCount = 30;
$isPublished = true;

echo "Course: " . $courseName . " | Lessons: " . $lessonCount;`
          }
        },
        {
          id: 'php-m2-l2',
          slug: 'data-types-in-php',
          moduleNumber: 2,
          lessonNumberInModule: 2,
          title: {
            en: '2.2 Data types (string, int, float, bool, null)',
            km: '២.២ ប្រភេទទិន្នន័យ (string, int, float, bool, null)'
          },
          durationMinutes: 18,
          difficulty: 'Beginner',
          objective: {
            en: 'Identify core scalar types and check variable types using var_dump() and gettype().',
            km: 'ស្គាល់ប្រភេទទិន្នន័យ Scalar ទាំងអស់ និងពិនិត្យមើលប្រភេទអថេរដោយប្រើ var_dump()។'
          },
          explanation: {
            en: 'PHP supports string, int, float (double), bool, null, array, object, and resource. `var_dump()` prints both the type and value of a variable, which is useful for debugging.',
            km: 'PHP មានប្រភេទទិន្នន័យ string, int, float, bool, null, array, object។ ប្រើប្រាស់ `var_dump()` សម្រាប់ពិនិត្យទិន្នន័យ និងប្រភេទអថេរពេល Debugging។'
          },
          tutorial: {
            en: 'Inspecting types with var_dump():',
            km: 'ពិនិត្យប្រភេទអថេរជាមួយ var_dump()៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$title = "Backend Master";
$rating = 4.9;
$active = true;
$emptyValue = null;

var_dump($title);
var_dump($rating);
var_dump($active);
var_dump($emptyValue);`
          }
        },
        {
          id: 'php-m2-l3',
          slug: 'operators-and-comparison',
          moduleNumber: 2,
          lessonNumberInModule: 3,
          title: {
            en: '2.3 Operators, including == vs ===',
            km: '២.៣ ប្រមាណវិធី រួមទាំងការប្រៀបធៀប == ជួប ==='
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Distinguish between loose comparison (==) and strict comparison (===) to prevent unexpected type coercion bugs.',
            km: 'យល់ពីភាពខុសគ្នារវាង Loose (==) និង Strict Comparison (===) ដើម្បីចៀសវាង Bugs។'
          },
          explanation: {
            en: 'The loose equality operator `==` performs type coercion before comparing ("5" == 5 is true). The strict equality operator `===` compares both value and type ("5" === 5 is false). Always prefer `===` in backend logic.',
            km: 'ប្រមាណវិធី `==` ធ្វើការបំប្លែងប្រភេទទិន្នន័យមុនប្រៀបធៀប ("5" == 5 គឺ true)។ ចំណែក `===` ប្រៀបធៀបទាំងតម្លៃ និងប្រភេទទិន្នន័យ ("5" === 5 គឺ false)។ គួរប្រើ `===` ជានិច្ច។'
          },
          tutorial: {
            en: 'Comparing loose vs strict equality:',
            km: 'ប្រៀបធៀប loose និង strict equality៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$strNumber = "100";
$intNumber = 100;

var_dump($strNumber == $intNumber);  // bool(true) - loose
var_dump($strNumber === $intNumber); // bool(false) - strict`
          }
        },
        {
          id: 'php-m2-l4',
          slug: 'string-interpolation-and-concatenation',
          moduleNumber: 2,
          lessonNumberInModule: 4,
          title: {
            en: '2.4 String interpolation and concatenation',
            km: '២.៤ ការប្រើប្រាស់ String Interpolation និង Concatenation'
          },
          durationMinutes: 18,
          difficulty: 'Beginner',
          objective: {
            en: 'Format strings cleanly using double quotes interpolation vs dot (.) concatenation.',
            km: 'ភ្ជាប់ និងរៀបចំ String តាមរយៈ Double Quotes Interpolation ឬសញ្ញាចុច (.) Concatenation។'
          },
          explanation: {
            en: 'Single quotes (\'...\') treat text literally without parsing variables. Double quotes ("...") parse variables directly inside the string ("Hello $name"). The dot operator (.) explicitly concatenates two strings.',
            km: 'Single quotes (\'...\') ចាត់ទុកអត្ថបទជា Plain text ដោយមិនបំផ្លែងអថេរឡើយ។ Double quotes ("...") បំផ្លែងអថេរក្នុង String ស្វ័យប្រវត្តិ ("Hello $name")។ សញ្ញាចុច (.) ប្រើសម្រាប់តភ្ជាប់ String។'
          },
          tutorial: {
            en: 'Comparing single quotes, double quotes, and dot operator:',
            km: 'ប្រៀបធៀប Single quotes, Double quotes និង Dot operator៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$user = "Khemara";
$role = "Developer";

// Concatenation
echo "User: " . $user . " (" . $role . ")\n";

// Double quotes interpolation
echo "User: {$user} ({$role})\n";`
          }
        },
        {
          id: 'php-m2-l5',
          slug: 'practice-mini-calculator',
          moduleNumber: 2,
          lessonNumberInModule: 5,
          title: {
            en: '2.5 Practice: mini calculator script',
            km: '២.៥ អនុវត្ត៖ Script គណនាលេខតូច (Mini Calculator)'
          },
          durationMinutes: 25,
          difficulty: 'Beginner',
          objective: {
            en: 'Combine variables, mathematical operators, and string formatting in a functional mini calculator script.',
            km: 'ផ្សំអថេរ ប្រមាណវិធីគណិតវិទ្យា និងការតភ្ជាប់ String ក្នុង Mini Calculator Script។'
          },
          explanation: {
            en: 'Write a script that accepts two numerical inputs and performs addition, subtraction, multiplication, division, and modulus operations with structured text output.',
            km: 'សរសេរ Script ទទួលលេខ ២ រួចធ្វើប្រមាណវិធីបូក ដក គុណ ចែក និងរកសំណល់ រួចបញ្ចេញលទ្ធផល។'
          },
          tutorial: {
            en: 'Implement calculation functions and display outputs:',
            km: 'បង្កើតការគណនា និងបង្ហាញលទ្ធផល៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$a = 15;
$b = 4;

echo "Addition: " . ($a + $b) . "\n";
echo "Subtraction: " . ($a - $b) . "\n";
echo "Multiplication: " . ($a * $b) . "\n";
echo "Division: " . ($a / $b) . "\n";
echo "Modulus (Remainder): " . ($a % $b) . "\n";`
          }
        }
      ]
    },
    {
      moduleNumber: 3,
      title: {
        en: 'Module 3: Control Flow',
        km: 'មេរៀនទី ៣៖ Control Flow (លក្ខខណ្ឌ និង Loop)'
      },
      description: {
        en: 'Branching logic with if/else/elseif, match expressions, switch statements, and iteration loops (for, while, foreach).',
        km: 'ការបែកខ្នែងលក្ខខណ្ឌ if/else, switch, match expression និងការរត់ Loop (for, while, foreach)។'
      },
      lessons: [
        {
          id: 'php-m3-l1',
          slug: 'if-else-elseif',
          moduleNumber: 3,
          lessonNumberInModule: 1,
          title: {
            en: '3.1 if / else / elseif',
            km: '៣.១ if / else / elseif'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Execute conditional logic blocks based on evaluate boolean expressions.',
            km: 'សរសេរលក្ខខណ្ឌ conditional logic ដោយប្រើ if, else និង elseif។'
          },
          explanation: {
            en: 'Conditional statements direct execution based on truth values. Combine conditions using logical AND (`&&`) and OR (`||`).',
            km: 'បញ្ជា Conditional គ្រប់គ្រងដំណើរការកូដតាមលក្ខខណ្ឌ។ ប្រើប្រាស់សញ្ញា AND (`&&`) និង OR (`||`) ដើម្បីផ្សំលក្ខខណ្ឌ។'
          },
          tutorial: {
            en: 'Evaluating student grades with elseif:',
            km: 'វាយតម្លៃពិន្ទុសិស្សជាមួយ elseif៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$score = 85;

if ($score >= 90) {
    echo "Grade: A";
} elseif ($score >= 80) {
    echo "Grade: B";
} elseif ($score >= 70) {
    echo "Grade: C";
} else {
    echo "Grade: Needs Improvement";
}`
          }
        },
        {
          id: 'php-m3-l2',
          slug: 'switch-statements',
          moduleNumber: 3,
          lessonNumberInModule: 2,
          title: {
            en: '3.2 switch statements and PHP 8 match expressions',
            km: '៣.២ switch statements និង PHP 8 match expressions'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Compare multiple potential values cleanly using switch and PHP 8 match expressions.',
            km: 'ប្រៀបធៀបតម្លៃច្រើនលក្ខខណ្ឌយ៉ាងរលូនដោយប្រើ switch និង PHP 8 match expression។'
          },
          explanation: {
            en: '`switch` compares a variable against multiple cases with `break` statements. PHP 8 introduced `match`, which is shorter, returns a value directly, and uses strict strict comparison without needing breaks.',
            km: '`switch` ប្រៀបធៀបអថេរជាមួយ Cases ជាច្រើន។ PHP 8 មានបន្ថែម `match` ដែលខ្លីជាង បញ្ជូនតម្លៃមកវិញភ្លាមៗ និងប្រើ Strict Comparison ដោយមិនបាច់ដាក់ break ឡើយ។'
          },
          tutorial: {
            en: 'Refactoring switch to match in PHP 8:',
            km: 'បំប្លែង switch ទៅជា match ក្នុង PHP 8៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$status = "paid";

// PHP 8 match expression
$message = match($status) {
    "pending" => "Awaiting payment...",
    "paid" => "Payment received! Processing order.",
    "failed" => "Payment failed. Please retry.",
    default => "Unknown status"
};

echo $message;`
          }
        },
        {
          id: 'php-m3-l3',
          slug: 'for-while-and-foreach-loops',
          moduleNumber: 3,
          lessonNumberInModule: 3,
          title: {
            en: '3.3 for, while, and foreach loops',
            km: '៣.៣ for, while, និង foreach loops'
          },
          durationMinutes: 22,
          difficulty: 'Beginner',
          objective: {
            en: 'Iterate over ranges and arrays using indexed loops and PHP\'s array-focused foreach construct.',
            km: 'រត់ Loop លើទិន្នន័យដោយប្រើ for, while និង foreach។'
          },
          explanation: {
            en: '`foreach` is PHP\'s primary loop for arrays. It iterates smoothly without requiring index management (`foreach ($items as $item)` or `foreach ($items as $key => $val)`).',
            km: '`foreach` ជា Loop ចម្បងសម្រាប់ Array ក្នុង PHP។ វាអាចរត់លើធាតុទិន្នន័យបានយ៉ាងរលូនដោយមិនបាច់គ្រប់គ្រង Index ដោយផ្ទាល់ឡើយ។'
          },
          tutorial: {
            en: 'Looping through array items using foreach:',
            km: 'រត់ Loop លើទិន្នន័យ Array ដោយប្រើ foreach៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$languages = ["PHP", "JavaScript", "Python", "SQL"];

foreach ($languages as $index => $lang) {
    echo ($index + 1) . ". " . $lang . "\n";
}`
          }
        },
        {
          id: 'php-m3-l4',
          slug: 'practice-fizzbuzz-in-php',
          moduleNumber: 3,
          lessonNumberInModule: 4,
          title: {
            en: '3.4 Practice: FizzBuzz in PHP',
            km: '៣.៤ អនុវត្ត៖ ដំណោះស្រាយ FizzBuzz ក្នុង PHP'
          },
          durationMinutes: 25,
          difficulty: 'Beginner',
          objective: {
            en: 'Implement the classic FizzBuzz algorithm combining loops, modulus operator, and conditions.',
            km: 'សរសេរកូដ FizzBuzz ដោយប្រើប្រាស់ Loop, Modulus operator និង លក្ខខណ្ឌ conditional។'
          },
          explanation: {
            en: 'Print numbers from 1 to 30. For multiples of 3, print "Fizz". For multiples of 5, print "Buzz". For multiples of both 3 and 5, print "FizzBuzz".',
            km: 'បង្ហាញលេខពី ១ ដល់ ៣០។ បើលេខចែកដាច់នឹង ៣ បង្ហាញ "Fizz", បើចែកដាច់នឹង ៥ បង្ហាញ "Buzz", បើចែកដាច់នឹងទាំង ២ បង្ហាញ "FizzBuzz"។'
          },
          tutorial: {
            en: 'Complete FizzBuzz logic using a for loop:',
            km: 'សរសើរកូដ FizzBuzz ពេញលេញដោយប្រើ for loop៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
for ($i = 1; $i <= 30; $i++) {
    if ($i % 3 === 0 && $i % 5 === 0) {
        echo "FizzBuzz\n";
    } elseif ($i % 3 === 0) {
        echo "Fizz\n";
    } elseif ($i % 5 === 0) {
        echo "Buzz\n";
    } else {
        echo $i . "\n";
    }
}`
          }
        }
      ]
    },
    {
      moduleNumber: 4,
      title: {
        en: 'Module 4: Functions',
        km: 'មេរៀនទី ៤៖ Functions ក្នុង PHP'
      },
      description: {
        en: 'Function declarations, parameters, return types, default arguments, variadic parameters, and PHP 8 arrow functions.',
        km: 'ការបង្កើត Function, Parameters, Return Types, Default values, Variadic parameters និង Arrow functions។'
      },
      lessons: [
        {
          id: 'php-m4-l1',
          slug: 'declaring-and-calling-functions',
          moduleNumber: 4,
          lessonNumberInModule: 1,
          title: {
            en: '4.1 Declaring and calling functions',
            km: '៤.១ ការបង្កើត និងហៅ Function មកប្រើ'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Define reusable code blocks with functions and process returned values.',
            km: 'បង្កើត Function សម្រាប់ប្រើប្រាស់ឡើងវិញ និងទទួលតម្លៃ Return។'
          },
          explanation: {
            en: 'Functions encapsulate reusable logic. Use `return` to send a calculated value back to the caller.',
            km: 'Function ប្រមូលផ្តុំ Logic ដែលអាចប្រើឡើងវិញបាន។ ប្រើ `return` ដើម្បីបញ្ជូនតម្លៃត្រឡប់មកវិញ។'
          },
          tutorial: {
            en: 'Writing custom functions:',
            km: 'ការសរសេរ Custom function៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
function calculateDiscount(float $price, float $percent): float {
    return $price - ($price * ($percent / 100));
}

$finalPrice = calculateDiscount(100.0, 15.0);
echo "Final Price: $" . $finalPrice;`
          }
        },
        {
          id: 'php-m4-l2',
          slug: 'default-arguments-and-type-hints',
          moduleNumber: 4,
          lessonNumberInModule: 2,
          title: {
            en: '4.2 Default arguments and type hints',
            km: '៤.២ Default arguments និង Type hints'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Enforce strict argument typing and supply default fallback parameter values.',
            km: 'កំណត់ Type ច្បាស់លាស់លើ Parameter និងផ្តល់តម្លៃ Default ស្វ័យប្រវត្តិ។'
          },
          explanation: {
            en: 'Type hints ensure functions receive expected types (int, string, bool, array, object). Default parameters allow calling functions with missing arguments.',
            km: 'Type hints ធានាថា Function ទទួលប្រភេទទិន្នន័យត្រឹមត្រូវ។ Default parameter អនុញ្ញាតឱ្យហៅ Function ដោយមិនបាច់បញ្ជូន Argument គ្រប់ក៏បាន។'
          },
          tutorial: {
            en: 'Combining type hints and optional parameters:',
            km: 'ផ្សំ Type hints និង Optional parameters៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
function greetUser(string $name, string $greeting = "Welcome"): string {
    return "{$greeting}, {$name}!";
}

echo greetUser("Sokha") . "\n";
echo greetUser("Bopha", "Good morning") . "\n";`
          }
        },
        {
          id: 'php-m4-l3',
          slug: 'variadic-functions-and-arrow-functions',
          moduleNumber: 4,
          lessonNumberInModule: 3,
          title: {
            en: '4.3 Variadic functions and arrow functions (fn)',
            km: '៤.៣ Variadic functions និង Arrow functions (fn)'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Accept variable numbers of arguments using the splat operator (...) and write concise single-expression closures with fn.',
            km: 'ទទួល Argument មិនកំនត់ដោយប្រើ Splat operator (...) និងសរសេរ Arrow function (fn)។'
          },
          explanation: {
            en: 'Variadic functions (`...$numbers`) collect any number of arguments into an array. Arrow functions (`fn($x) => $x * 2`) offer a short syntax for callbacks with auto-captured outer scope variables.',
            km: 'Variadic functions (`...$numbers`) ប្រមូល Argument ទាំងអស់ចូលក្នុង Array។ Arrow functions (`fn($x) => $x * 2`) ជាកូដខ្លីសម្រាប់ Callback។'
          },
          tutorial: {
            en: 'Using splat parameters and arrow function callbacks:',
            km: 'ប្រើប្រាស់ Splat parameters និង Arrow function callbacks៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
function sumAll(int ...$numbers): int {
    return array_sum($numbers);
}

echo "Sum: " . sumAll(10, 20, 30, 40) . "\n";

$multiply = fn(int $x, int $y) => $x * $y;
echo "Product: " . $multiply(6, 7);`
          }
        },
        {
          id: 'php-m4-l4',
          slug: 'practice-reusable-utility-functions',
          moduleNumber: 4,
          lessonNumberInModule: 4,
          title: {
            en: '4.4 Practice: build a set of reusable utility functions',
            km: '៤.៤ អនុវត្ត៖ បង្កើតសំណុំ Utility Functions សម្រាប់ប្រើឡើងវិញ'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Construct string formatting and input validation helpers as reusable PHP utilities.',
            km: 'បង្កើត Utility functions សម្រាប់រៀបចំ String និងដោះស្រាយ Validation។'
          },
          explanation: {
            en: 'Build helper functions like `slugify($text)`, `formatCurrency($amount)`, and `sanitizeInput($string)` commonly required in web applications.',
            km: 'បង្កើត Helper functions ដូចជា `slugify($text)`, `formatCurrency($amount)` និង `sanitizeInput($string)` ដែលត្រូវការជាចាំបាច់ក្នុង Web Apps។'
          },
          tutorial: {
            en: 'Writing string utility functions:',
            km: 'សរសេរ String utility functions៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
function slugify(string $text): string {
    $text = strtolower(trim($text));
    return preg_replace('/[^a-z0-9]+/', '-', $text);
}

function formatCurrency(float $amount, string $symbol = '$'): string {
    return $symbol . number_format($amount, 2);
}

echo slugify("PHP & Web Server Fundamentals 2026!") . "\n";
echo formatCurrency(1299.5);`
          }
        }
      ]
    },
    {
      moduleNumber: 5,
      title: {
        en: 'Module 5: Arrays',
        km: 'មេរៀនទី ៥៖ ទិន្នន័យ Arrays ក្នុង PHP'
      },
      description: {
        en: 'PHP\'s ultimate data structure: indexed arrays, key/value associative arrays, array mapping, filtering, reducing, and sorting.',
        km: 'ទិន្នន័យចម្បងក្នុង PHP៖ Indexed arrays, Associative arrays, array_map, array_filter, array_reduce និងការ Sort។'
      },
      lessons: [
        {
          id: 'php-m5-l1',
          slug: 'indexed-arrays',
          moduleNumber: 5,
          lessonNumberInModule: 1,
          title: {
            en: '5.1 Indexed arrays — creating, looping, common functions',
            km: '៥.១ Indexed arrays — ការបង្កើត ការរត់ Loop និង Functions ដែលប្រើញឹកញាប់'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Create, modify, and loop through ordered numerical-indexed arrays in PHP.',
            km: 'បង្កើត កែប្រែ និងរត់ Loop លើ Indexed Array តាមលំដាប់លេខ index។'
          },
          explanation: {
            en: 'Indexed arrays use zero-based integers as keys. Use `count()`, `array_push()`, `in_array()`, and `sort()` for manipulation.',
            km: 'Indexed arrays ប្រើប្រាស់លេខ Index ចាប់ពី ០។ ប្រើប្រាស់ `count()`, `array_push()`, `in_array()` និង `sort()` ដើម្បីរៀបចំ Array។'
          },
          tutorial: {
            en: 'Manipulating indexed array elements:',
            km: 'ការកែប្រែធាតុក្នុង Indexed array៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$cities = ["Phnom Penh", "Siem Reap", "Battambang"];
$cities[] = "Kampot"; // append

sort($cities);

foreach ($cities as $city) {
    echo "- {$city}\n";
}`
          }
        },
        {
          id: 'php-m5-l2',
          slug: 'associative-arrays',
          moduleNumber: 5,
          lessonNumberInModule: 2,
          title: {
            en: '5.2 Associative arrays — key/value data',
            km: '៥.២ Associative arrays — ទិន្នន័យ Key/Value'
          },
          durationMinutes: 22,
          difficulty: 'Beginner',
          objective: {
            en: 'Model structured records using custom string keys in PHP associative arrays.',
            km: 'រៀបចំទិន្នន័យជា Key-Value ក្នុង Associative arrays។'
          },
          explanation: {
            en: 'Associative arrays map descriptive string keys to values ($user = ["name" => "Sok", "role" => "Admin"]). They convert directly into JSON objects using `json_encode()`.',
            km: 'Associative arrays បង្កើតទំនាក់ទំនងរវាង String Key និងតម្លៃ។ វាអាចបំប្លែងទៅជា JSON Object យ៉ាងងាយតាម `json_encode()`។'
          },
          tutorial: {
            en: 'Creating and encoding associative arrays:',
            km: 'ការបង្កើត និង Encode Associative arrays៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$product = [
    "id" => "prod_101",
    "title" => "PHP Master Course",
    "price" => 49.99,
    "in_stock" => true
];

echo "Product: " . $product["title"] . " costs $" . $product["price"] . "\n";
echo json_encode($product);`
          }
        },
        {
          id: 'php-m5-l3',
          slug: 'common-array-functions',
          moduleNumber: 5,
          lessonNumberInModule: 3,
          title: {
            en: '5.3 Common array functions (array_map, array_filter, array_reduce)',
            km: '៥.៣ Array functions សំខាន់ៗ (array_map, array_filter, array_reduce)'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Transform, filter, and aggregate arrays immutably using PHP higher-order functions.',
            km: 'បំប្លែង តម្រង និងបូកសរុបទិន្នន័យក្នុង Array ដោយប្រើ Functional array functions។'
          },
          explanation: {
            en: '`array_map()` transforms every element. `array_filter()` extracts matching items. `array_reduce()` reduces an array into a single accumulated value.',
            km: '`array_map()` បំប្លែងគ្រប់ធាតុ។ `array_filter()` ជ្រើសរើសទិន្នន័យដែលត្រូវលក្ខខណ្ឌ។ `array_reduce()` បូកសរុប Array មកជាតម្លៃតែមួយ។'
          },
          tutorial: {
            en: 'Applying array_filter and array_map:',
            km: 'អនុវត្ត array_filter និង array_map៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$prices = [10, 25, 45, 80, 120];

// Filter prices > 30
$expensive = array_filter($prices, fn($p) => $p > 30);

// Add 10% tax
$taxed = array_map(fn($p) => $p * 1.10, $expensive);

print_r($taxed);`
          }
        },
        {
          id: 'php-m5-l4',
          slug: 'practice-word-frequency-counter',
          moduleNumber: 5,
          lessonNumberInModule: 4,
          title: {
            en: '5.4 Practice: word frequency counter',
            km: '៥.៤ អនុវត្ត៖ កម្មវិធីរាប់ពាក្យជាន់គ្នា (Word Frequency Counter)'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build a text parser that counts word occurrences using associative array key tracking.',
            km: 'បង្កើត កម្មវិធីភាគពាក្យក្នុងអត្ថបទដោយប្រើ Associative array key tracking។'
          },
          explanation: {
            en: 'Split text into words using `str_word_count()`, iterate over words, normalize to lowercase, and increment counts in an associative array.',
            km: 'បំបែកអត្ថបទជាពាក្យដោយប្រើ `str_word_count()`, រត់ Loop និងបូកចំនួនពាក្យក្នុង Associative array។'
          },
          tutorial: {
            en: 'Calculating word counts in a sentence:',
            km: 'គណនាចំនួនពាក្យក្នុងល្បះអត្ថបទ៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$paragraph = "PHP is awesome. PHP is fast and PHP powers the web!";
$words = str_word_count(strtolower($paragraph), 1);

$frequency = [];
foreach ($words as $word) {
    $frequency[$word] = ($frequency[$word] ?? 0) + 1;
}

arsort($frequency); // sort high to low
print_r($frequency);`
          }
        }
      ]
    },
    {
      moduleNumber: 6,
      title: {
        en: 'Module 6: Object-Oriented Programming (OOP)',
        km: 'មេរៀនទី ៦៖ Object-Oriented Programming (OOP)'
      },
      description: {
        en: 'Classes, constructors, property promotion, inheritance, interfaces, abstract classes, and visibility modifiers.',
        km: 'Classes, Constructors, Inheritance, Interfaces, Abstract classes និង Visibility (public, private, protected)។'
      },
      lessons: [
        {
          id: 'php-m6-l1',
          slug: 'classes-constructors-and-objects',
          moduleNumber: 6,
          lessonNumberInModule: 1,
          title: {
            en: '6.1 Classes, constructors, and objects',
            km: '៦.១ Classes, constructors, និង objects'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Create your own custom data type using a class, and create objects (instances) from it.',
            km: 'បង្កើត Custom class និងបង្កើត Objects (instances) ចេញពី Class នោះ។'
          },
          explanation: {
            en: 'Just like in Dart, Kotlin, Swift, and Java, a PHP class is a blueprint for creating objects that group related data (properties) and behavior (methods) together. Modern PHP (and Laravel especially) is heavily object-oriented, so getting comfortable with classes here, without any framework complexity, makes Laravel\'s models and controllers far easier to understand later.',
            km: 'ដូចក្នុង Dart, Kotlin, Swift ឬ Java ដែរ Class ក្នុង PHP គឺជាប្លង់មេសម្រាប់បង្កើត Objects ដែលប្រមូលផ្តុំទិន្នន័យ (properties) និងសកម្មភាព (methods) ចូលគ្នា។ Modern PHP (ជាពិសេស Laravel) អាស្រ័យលើ OOP យ៉ាងខ្លាំង។'
          },
          tutorial: {
            en: 'Creating a GuestbookEntry class with $this property access:',
            km: 'ការបង្កើត Class GuestbookEntry និងប្រើប្រាស់ $this៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
class GuestbookEntry {
    public string $name;
    public string $message;

    public function __construct(string $name, string $message) {
        $this->name = $name;
        $this->message = $message;
    }

    public function display(): string {
        return "{$this->name} says: {$this->message}";
    }
}

$entry = new GuestbookEntry("Seyha", "Loving this PHP course!");
echo $entry->display();`
          },
          practiceExercise: {
            question: {
              en: 'Add a timestamp property to GuestbookEntry, set automatically to current date/time in constructor using date("Y-m-d H:i:s").',
              km: 'បន្ថែម property $timestamp ទៅក្នុង GuestbookEntry ដែលកំណត់ស្វ័យប្រវត្តិតាម date("Y-m-d H:i:s")។'
            },
            solution: `<?php
class GuestbookEntry {
    public string $name;
    public string $message;
    public string $timestamp;

    public function __construct(string $name, string $message) {
        $this->name = $name;
        $this->message = $message;
        $this->timestamp = date('Y-m-d H:i:s');
    }

    public function display(): string {
        return "[{$this->timestamp}] {$this->name} says: {$this->message}";
    }
}`
          },
          tips: {
            en: 'Always use $this->propertyName inside methods to access class properties! Omiting $this-> leads to variable scope errors.',
            km: 'ត្រូវប្រើ $this->propertyName ជានិច្ចពេលចង់ទាញយក Property ក្នុង Method!'
          }
        },
        {
          id: 'php-m6-l2',
          slug: 'inheritance-and-extends',
          moduleNumber: 6,
          lessonNumberInModule: 2,
          title: {
            en: '6.2 Inheritance and extends',
            km: '៦.២ Inheritance និងពាក្យគន្លឹះ extends'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Share properties and methods across parent and child classes using inheritance.',
            km: 'ចែករំលែក Properties និង Methods ចេញពី Parent class ទៅកាន់ Child class តាមរយៈ Inheritance។'
          },
          explanation: {
            en: 'Use `extends` to derive child classes from parent classes. Child classes inherit parent properties/methods and can override them or call parent implementation via `parent::__construct()`.',
            km: 'ប្រើ `extends` ដើម្បីបង្កើត Child class ចេញពី Parent class។ Child class ទួលបាន Properties/Methods ពី Parent class ហើយអាច Override បាន។'
          },
          tutorial: {
            en: 'Extending a base User class:',
            km: 'ការ Extend ចេញពី Base User class៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
class BaseUser {
    public function __construct(public string $name, public string $email) {}
    
    public function getRole(): string {
        return "Standard User";
    }
}

class AdminUser extends BaseUser {
    public function getRole(): string {
        return "Administrator";
    }
}

$admin = new AdminUser("Dara", "dara@admin.com");
echo $admin->name . " is an " . $admin->getRole();`
          }
        },
        {
          id: 'php-m6-l3',
          slug: 'interfaces-and-abstract-classes',
          moduleNumber: 6,
          lessonNumberInModule: 3,
          title: {
            en: '6.3 Interfaces and abstract classes',
            km: '៦.៣ Interfaces និង Abstract classes'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Define formal contract signatures using interfaces and enforce concrete method implementations.',
            km: 'កំណត់ Contract Signatures ដោយប្រើ Interfaces និងបង្ខំឱ្យអនុវត្ត Method ជាក់ស្តែង។'
          },
          explanation: {
            en: '`interface` specifies what methods a class must implement without supplying logic. An `abstract class` can provide both declared abstract signatures and partial concrete method definitions.',
            km: '`interface` កំណត់សញ្ញាណ Method ដែល Class ត្រូវតែមាន។ `abstract class` អាចផ្តល់ទាំង Abstract signatures និង Concrete method ខ្លះៗ។'
          },
          tutorial: {
            en: 'Implementing a PaymentGatewayInterface:',
            km: 'អនុវត្ត PaymentGatewayInterface ជាក់ស្តែង៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
interface PaymentGatewayInterface {
    public function process(float $amount): bool;
}

class ABAPay implements PaymentGatewayInterface {
    public function process(float $amount): bool {
        echo "Processing ABA Pay payment of $" . $amount . "\n";
        return true;
    }
}

$payment = new ABAPay();
$payment->process(50.00);`
          }
        },
        {
          id: 'php-m6-l4',
          slug: 'visibility-public-private-protected',
          moduleNumber: 6,
          lessonNumberInModule: 4,
          title: {
            en: '6.4 Visibility: public, private, protected',
            km: '៦.៤ Visibility: public, private, protected'
          },
          durationMinutes: 20,
          difficulty: 'Intermediate',
          objective: {
            en: 'Encapsulate class state using access visibility keywords.',
            km: 'ការពារទិន្នន័យក្នុង Class ដោយប្រើបន្សំ Visibility keywords (Encapsulation)។'
          },
          explanation: {
            en: '`public` properties are accessible anywhere. `protected` properties are restricted to the class and its child classes. `private` properties are accessible strictly within the defining class.',
            km: '`public` អាចទាញប្រើបានគ្រប់កន្លែង។ `protected` ទាញប្រើបានតែក្នុង Class នោះ និង Child classes។ `private` ទាញប្រើបានតែក្នុង Class បង្កើតប៉ុណ្ណោះ។'
          },
          tutorial: {
            en: 'Encapsulating password hash inside BankAccount:',
            km: 'ការ Encapsulate ទិន្នន័យសម្ងាត់ក្នុង BankAccount៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
class BankAccount {
    private float $balance = 0.0;

    public function deposit(float $amount): void {
        if ($amount > 0) $this->balance += $amount;
    }

    public function getBalance(): float {
        return $this->balance;
    }
}

$acc = new BankAccount();
$acc->deposit(150.00);
echo "Balance: $" . $acc->getBalance();`
          }
        },
        {
          id: 'php-m6-l5',
          slug: 'practice-class-hierarchy-products',
          moduleNumber: 6,
          lessonNumberInModule: 5,
          title: {
            en: '6.5 Practice: build a small class hierarchy (Product → PhysicalProduct/DigitalProduct)',
            km: '៦.៥ អនុវត្ត៖ បង្កើតរចនាសម្ព័ន្ធ Class (Product → PhysicalProduct/DigitalProduct)'
          },
          durationMinutes: 30,
          difficulty: 'Intermediate',
          objective: {
            en: 'Design an e-commerce Product class hierarchy utilizing inheritance, encapsulation, and custom methods.',
            km: 'រចនារចនាសម្ព័ន្ធ E-commerce Product ដោយប្រើប្រាស់ Inheritance និង Encapsulation។'
          },
          explanation: {
            en: 'Base `Product` holds title and price. `PhysicalProduct` adds shipping weight. `DigitalProduct` adds download URL.',
            km: '`Product` មាន Title និង Price។ `PhysicalProduct` បន្ថែម Weight។ `DigitalProduct` បន្ថែម Download URL។'
          },
          tutorial: {
            en: 'Building product hierarchy:',
            km: 'ការសរសេរកូដរចនាសម្ព័ន្ធ Product៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
abstract class Product {
    public function __construct(public string $title, public float $price) {}
    abstract public function getDeliveryInfo(): string;
}

class DigitalProduct extends Product {
    public function __construct(string $title, float $price, public string $downloadUrl) {
        parent::__construct($title, $price);
    }

    public function getDeliveryInfo(): string {
        return "Instant Download Link: {$this->downloadUrl}";
    }
}

$ebook = new DigitalProduct("PHP Mastery Book", 19.99, "https://downloads.example.com/php.pdf");
echo $ebook->title . " — " . $ebook->getDeliveryInfo();`
          }
        }
      ]
    },
    {
      moduleNumber: 7,
      title: {
        en: 'Module 7: Web Server Basics',
        km: 'មេរៀនទី ៧៖ មូលដ្ឋានគ្រឹះ Web Server'
      },
      description: {
        en: 'The HTTP request/response cycle, reading $_GET and $_POST, managing state with $_SESSION and cookies, sanitizing input, and preventing XSS.',
        km: 'HTTP request/response cycle, ការអាន $_GET, $_POST, គ្រប់គ្រង State ដោយប្រើ $_SESSION, Cookies និងការការពារ XSS។'
      },
      lessons: [
        {
          id: 'php-m7-l1',
          slug: 'http-request-response-cycle-php',
          moduleNumber: 7,
          lessonNumberInModule: 1,
          title: {
            en: '7.1 The HTTP request/response cycle, explained for PHP',
            km: '៧.១ HTTP Request/Response Cycle សម្រាប់ PHP'
          },
          durationMinutes: 20,
          difficulty: 'Beginner',
          objective: {
            en: 'Understand how a web browser sends HTTP requests to PHP scripts and processes returned HTTP responses.',
            km: 'យល់ដឹងពីរបៀបដែល Browser បញ្ជូន HTTP Request មកកាន់ PHP និងទទួល HTTP Response ត្រឡប់ទៅវិញ។'
          },
          explanation: {
            en: 'Every web interaction begins with an HTTP Request (GET, POST, PUT, DELETE) containing URL parameters, headers, and body data. PHP receives this request, processes code, sets response status headers (200, 404, 500), and emits plain text, HTML, or JSON.',
            km: 'គ្រប់ការផ្ញើសារតាម Web ចាប់ផ្តើមដោយ HTTP Request (GET, POST...)។ PHP ទទួល Request, ដំណើរការកូដ, កំណត់ Status Headers (200, 404, 500) និងបញ្ជូន Plain text, HTML ឬ JSON ត្រឡប់ទៅវិញ។'
          },
          tutorial: {
            en: 'Inspecting HTTP request headers and setting custom status code:',
            km: 'ពិនិត្យ HTTP request headers និងកំណត់ Custom status code៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

http_response_code(200);
header('X-Powered-By: SabayCode-PHP');

echo "HTTP Method: {$method} | Requested URI: {$uri}";`
          }
        },
        {
          id: 'php-m7-l2',
          slug: 'reading-form-data-get-and-post',
          moduleNumber: 7,
          lessonNumberInModule: 2,
          title: {
            en: '7.2 Reading form data with $_GET and $_POST',
            km: '៧.២ ការអានទិន្នន័យ Form ជាមួយ $_GET និង $_POST'
          },
          durationMinutes: 22,
          difficulty: 'Beginner',
          objective: {
            en: 'Read data submitted by a user through an HTML form using PHP\'s superglobal arrays $_GET and $_POST.',
            km: 'អានទិន្នន័យដែលបញ្ចូលតាម HTML Form ដោយប្រើប្រាស់ Superglobal arrays $_GET និង $_POST។'
          },
          explanation: {
            en: 'When a user submits an HTML form, the browser sends that data to the server as part of the HTTP request. PHP automatically makes this data available in two special built-in arrays: $_GET for URL query parameters, and $_POST for HTTP body submissions. Use the null coalescing operator (??) to supply fallback default values safely.',
            km: 'ពេលអ្នកប្រើប្រាស់ផ្ញើ HTML Form, Browser ផ្ញើទិន្នន័យមកកាន់ Server។ PHP ប្រមូលទិន្នន័យចូលក្នុង Superglobal Arrays៖ $_GET សម្រាប់ Query parameters លើ URL និង $_POST សម្រាប់ Form Submissions។ ប្រើប្រាស់ ?? ដើម្បីការពារ Warning។'
          },
          tutorial: {
            en: 'Processing POST form submission:',
            km: 'ដំណើរការការផ្ញើ POST Form៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
// process.php — handles a submitted form
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? 'Anonymous';
    $message = $_POST['message'] ?? '';
    echo "Thanks, {$name}! You said: " . htmlspecialchars($message);
} else {
    echo "Please submit the HTML form via POST method.";
}`
          },
          practiceExercise: {
            question: {
              en: 'Add validation so that if message is empty, the script prints "Message cannot be empty".',
              km: 'បន្ថែម Validation បើ message ទទេ ឱ្យបង្ហាញសារ "Message cannot be empty"។'
            },
            solution: `<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? 'Anonymous';
    $message = trim($_POST['message'] ?? '');

    if ($message === '') {
        echo "Message cannot be empty";
    } else {
        echo "Thanks, {$name}! You said: " . htmlspecialchars($message);
    }
}`
          }
        },
        {
          id: 'php-m7-l3',
          slug: 'sessions-and-cookies',
          moduleNumber: 7,
          lessonNumberInModule: 3,
          title: {
            en: '7.3 Sessions and cookies — remembering data across requests',
            km: '៧.៣ Sessions និង Cookies — ការរក្សាទុកទិន្នន័យឆ្លងកាត់ Request'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Persist stateful session data between multiple HTTP requests using session_start() and $_SESSION.',
            km: 'រក្សាទិន្នន័យចងចាំឆ្លងកាត់ HTTP Requests ដោយប្រើ session_start() និង $_SESSION។'
          },
          explanation: {
            en: 'HTTP is stateless. `session_start()` stores a session ID in a browser cookie while keeping the actual data safely stored on the server in `$_SESSION`. Cookies store small pieces of data directly in the browser.',
            km: 'HTTP គ្មានការចងចាំ state ទេ។ `session_start()` បញ្ជូន Session ID ទៅរក្សាទុកក្នុង Cookie លើ Browser ខណៈទិន្នន័យពិតប្រាកដរក្សាទុកក្នុង `$_SESSION` លើ Server។'
          },
          tutorial: {
            en: 'Starting sessions and flash data storage:',
            km: 'ការចាប់ផ្តើម Session និងរក្សាទុក Flash data៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
session_start();

$_SESSION['user_id'] = 101;
$_SESSION['flash_msg'] = "Profile updated successfully!";

echo "Session stored for User: " . $_SESSION['user_id'];`
          }
        },
        {
          id: 'php-m7-l4',
          slug: 'input-validation-and-escaping-output',
          moduleNumber: 7,
          lessonNumberInModule: 4,
          title: {
            en: '7.4 Basic input validation and escaping output safely',
            km: '៧.៤ ការធ្វើ Input Validation និង Escaping Output ដោយសុវត្ថិភាព'
          },
          durationMinutes: 22,
          difficulty: 'Intermediate',
          objective: {
            en: 'Sanitize untrusted user input and neutralize Cross-Site Scripting (XSS) vulnerabilities using htmlspecialchars().',
            km: 'សម្អាតទិន្នន័យពីអ្នកប្រើប្រាស់ និងលុបបំបាត់ហានិភ័យ XSS ដោយប្រើ htmlspecialchars()។'
          },
          explanation: {
            en: 'Never render raw user input inside HTML. Unescaped input allows malicious users to inject JavaScript (`<script>alert("hacked")</script>`). `htmlspecialchars()` escapes quotes and XML characters safely.',
            km: 'កុំបង្ហាញទិន្នន័យទទេពីអ្នកប្រើប្រាស់ក្នុង HTML ដោយមិនបាន Escape។ ប្រើប្រាស់ `htmlspecialchars()` ដើម្បីបំប្លែងសញ្ញាពិសេស និងការពារ XSS Attack។'
          },
          tutorial: {
            en: 'Escaping malicious input strings:',
            km: 'ការ Escape អត្ថបទបញ្ចូលដែលមិនមានសុវត្ថិភាព៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$userComment = "<script>alert('XSS Attack!');</script>";

// UNSAFE: echo $userComment;
// SAFE:
echo "Escaped Comment: " . htmlspecialchars($userComment, ENT_QUOTES, 'UTF-8');`
          }
        },
        {
          id: 'php-m7-l5',
          slug: 'practice-simple-data-form',
          moduleNumber: 7,
          lessonNumberInModule: 5,
          title: {
            en: '7.5 Practice: build a simple form that stores and displays submitted data',
            km: '៧.៥ អនុវត្ត៖ បង្កើត Form ទទួល រក្សាទុក និងបង្ហាញទិន្នន័យ'
          },
          durationMinutes: 30,
          difficulty: 'Intermediate',
          objective: {
            en: 'Combine $_POST handling, validation, htmlspecialchars escaping, and file persistence into a mini functional web form.',
            km: 'ផ្សំការប្រើប្រាស់ $_POST, Validation, htmlspecialchars និង File persistence ទៅជា Web Form ពេញលេញ។'
          },
          explanation: {
            en: 'Build a page that handles form submission, appends input to a text file, and renders submitted entries safely underneath the form.',
            km: 'បង្កើតទំព័រដែលទទួលការផ្ញើ Form, បញ្ចូលទិន្នន័យទៅក្នុង Text file និងបង្ហាញលទ្ធផលមកវិញដោយសុវត្ថិភាព។'
          },
          tutorial: {
            en: 'Saving submitted name and note to text storage:',
            km: 'រក្សាទុកឈ្មោះ និងកំណត់ចំណាំទៅក្នុង Text storage៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
$file = 'notes.txt';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['note'])) {
    $note = date('Y-m-d H:i') . " — " . trim($_POST['note']) . "\n";
    file_put_contents($file, $note, FILE_APPEND);
}

$allNotes = file_exists($file) ? file_get_contents($file) : '';
?>
<form method="POST">
  <input type="text" name="note" placeholder="Enter note..." required>
  <button type="submit">Add Note</button>
</form>
<pre><?= htmlspecialchars($allNotes) ?></pre>`
          }
        }
      ]
    },
    {
      moduleNumber: 8,
      title: {
        en: 'Module 8: Capstone Project',
        km: 'មេរៀនទី ៨៖ គម្រោងបញ្ចប់ Capstone Project'
      },
      description: {
        en: 'Plan, design, build, and deploy the Simple Guestbook web application, applying OOP, $_POST form handling, file storage, and session state.',
        km: 'រៀបចំ រចនា និងសាងសង់កម្មវិធី Simple Guestbook Web App ពេញលេញដោយប្រើប្រាស់ OOP, $_POST, File storage និង Sessions។'
      },
      lessons: [
        {
          id: 'php-m8-l1',
          slug: 'planning-the-simple-guestbook',
          moduleNumber: 8,
          lessonNumberInModule: 1,
          title: {
            en: '8.1 Planning the Simple Guestbook (data model, pages, features)',
            km: '៨.១ ការរៀបចំផែនការ Simple Guestbook (Data model, ទំព័រ, Features)'
          },
          durationMinutes: 25,
          difficulty: 'Intermediate',
          objective: {
            en: 'Architect the data model, file storage layer, form processing flow, and session messaging for the guestbook capstone.',
            km: 'រចនារចនាសម្ព័ន្ធទិន្នន័យ រចនាសម្ព័ន្ធ File, លំហូរទទួល Form និង Session messaging សម្រាប់ Capstone។'
          },
          explanation: {
            en: 'Before writing code, define the `GuestbookEntry` class properties (name, message, created_at), plan the entries.json schema, specify validation rules, and sketch the HTML layout.',
            km: 'មុននឹងសរសេរកូដ ត្រូវប្រកាស Properties របស់ `GuestbookEntry` class (name, message, created_at), រៀបចំទម្រង់ entries.json, Validation rules និង HTML layout។'
          },
          tutorial: {
            en: 'Reviewing the guestbook system architecture:',
            km: 'ពិនិត្យមើលរចនាសម្ព័ន្ធប្រព័ន្ធ Simple Guestbook៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
// Data model draft
class GuestbookEntryBlueprint {
    public string $name;
    public string $message;
    public string $created_at;
}`
          }
        },
        {
          id: 'php-m8-l2',
          slug: 'building-the-simple-guestbook',
          moduleNumber: 8,
          lessonNumberInModule: 2,
          title: {
            en: '8.2 Building the Simple Guestbook (full guided build)',
            km: '៨.២ ការសាងសង់ Simple Guestbook ពេញលេញ (Full Guided Build)'
          },
          durationMinutes: 60,
          difficulty: 'Intermediate',
          objective: {
            en: 'Build the complete Simple Guestbook application combining everything learned from Modules 2 through 7.',
            km: 'សាងសង់កម្មវិធី Simple Guestbook ទាំងស្រុងដោយរួមបញ្ចូលរាល់ចំណេះដឹងពីមេរៀនទី ២ ដល់ ទី ៧។'
          },
          explanation: {
            en: 'Implement the full Guestbook application inside index.php: declare GuestbookEntry class, capture POST data, save to JSON, set session flash alerts, handle errors, and render saved entries safely.',
            km: 'សរសេរកូដពេញលេញក្នុង index.php៖ បង្កើត GuestbookEntry class, ទទួល POST data, រក្សាទុកក្នុង JSON, កំណត់ Session flash alerts និងបង្ហាញទិន្នន័យដោយសុវត្ថិភាព។'
          },
          tutorial: {
            en: 'Complete guestbook source code implementation:',
            km: 'កូដ Simple Guestbook ពេញលេញ៖'
          },
          starterCode: {
            language: 'php',
            code: `<?php
session_start();

class GuestbookEntry {
    public function __construct(
        public string $name,
        public string $message,
        public string $created_at = ''
    ) {
        $this->created_at = $created_at ?: date('Y-m-d H:i:s');
    }

    public function toArray(): array {
        return [
            'name' => $this->name,
            'message' => $this->message,
            'created_at' => $this->created_at
        ];
    }
}

$dataFile = __DIR__ . '/entries.json';
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $message = trim($_POST['message'] ?? '');

    if (empty($name) || empty($message)) {
        $error = 'Both Name and Message are required.';
    } else {
        $entry = new GuestbookEntry($name, $message);
        
        $entries = [];
        if (file_exists($dataFile)) {
            $raw = file_get_contents($dataFile);
            $entries = json_decode($raw, true) ?? [];
        }

        $entries[] = $entry->toArray();
        file_put_contents($dataFile, json_encode($entries, JSON_PRETTY_PRINT));

        $_SESSION['flash_success'] = 'Thank you for signing our guestbook!';
        header('Location: index.php');
        exit;
    }
}

$success = $_SESSION['flash_success'] ?? '';
unset($_SESSION['flash_success']);

$entries = [];
if (file_exists($dataFile)) {
    $raw = file_get_contents($dataFile);
    $entries = json_decode($raw, true) ?? [];
}
?>
<!DOCTYPE html>
<html>
<head><title>Simple Guestbook</title></head>
<body>
  <h1>Simple Guestbook</h1>
  <?php if ($success): ?><p style="color:green;"><?= htmlspecialchars($success) ?></p><?php endif; ?>
  <?php if ($error): ?><p style="color:red;"><?= htmlspecialchars($error) ?></p><?php endif; ?>

  <form method="POST">
    <input type="text" name="name" placeholder="Your Name" required><br>
    <textarea name="message" placeholder="Your Message" required></textarea><br>
    <button type="submit">Sign Guestbook</button>
  </form>

  <h2>Entries (<?= count($entries) ?>)</h2>
  <?php foreach (array_reverse($entries) as $item): ?>
    <div>
      <strong><?= htmlspecialchars($item['name']) ?></strong> (<?= $item['created_at'] ?>)
      <p><?= nl2br(htmlspecialchars($item['message'])) ?></p>
    </div>
  <?php endforeach; ?>
</body>
</html>`
          }
        }
      ]
    }
  ]
};
