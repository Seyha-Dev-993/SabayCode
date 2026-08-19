import { FrontendLesson } from '../types/frontendClass';

export const GIT_LESSONS_PART1: FrontendLesson[] = [
  // ==========================================
  // MODULE 1: Introduction & Setup
  // ==========================================
  {
    id: 'git-l1',
    slug: 'what-is-version-control',
    moduleNumber: 1,
    lessonNumberInModule: 1,
    title: {
      en: '1.1 What is Version Control & Problem it Solves',
      km: '1.1 អ្វីទៅជា Version Control និងការដោះស្រាយបញ្ហា'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'Version Control System (VCS) is software that tracks every modification to your code over time. It eliminates messy file names like "project_v1_final_FINAL.zip" and allows developers to safely rewind time, compare changes, and collaborate.',
      km: 'Version Control System (VCS) គឺជាកម្មវិធីតាមដានរាល់ការផ្លាស់ប្តូរកូដរបស់អ្នកតាមពេលវេលា។ វាដោះស្រាយបញ្ហាការដាក់ឈ្មោះរូបភាព/ឯកសាររញ៉េរញ៉ៃដូចជា "project_v1_final_FINAL.zip" ហើយអនុញ្ញាតឱ្យ Developer អាចត្រឡប់ថយក្រោយ និងសហការគ្នាយ៉ាងមានសុវត្ថិភាព។'
    },
    tutorial: {
      en: '- Traditional problematic approach:\n  `project_final.zip` -> `project_final_v2.zip` -> `project_REALLY_FINAL.zip` \n- Modern Git Version Control approach:\n  A single repository folder with a hidden `.git` database tracking clean, immutable Commit snapshots!',
      km: '- របៀបចាស់ដែលមានបញ្ហា៖\n  `project_final.zip` -> `project_final_v2.zip` -> `project_REALLY_FINAL.zip` \n- របៀបប្រើប្រាស់ Git ទំនើប៖\n  រក្សាទុកក្នុង Folder Repo តែមួយ ដោយមាន `.git` database តាមដានប្រវត្តិកូដយ៉ាងមានរបៀប!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5); }
    .title { color: #38bdf8; font-weight: bold; border-bottom: 1px solid #1e293b; padding-bottom: 8px; margin-bottom: 12px; }
    .cmd { color: #facc15; }
    .output { color: #94a3b8; margin-top: 6px; }
    .highlight { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">💻 Terminal — Git Snapshot vs Traditional Files</div>
    <div class="cmd">$ ls -la my-project/</div>
    <div class="output">
drwxr-xr-x  6 dev staff  192 Jul 30 09:00 .
drwxr-xr-x 12 dev staff  384 Jul 30 08:50 ..
<span class="highlight">drwxr-xr-x  8 dev staff  256 Jul 30 09:00 .git (Git Version History)</span>
-rw-r--r--  1 dev staff  520 Jul 30 09:00 index.html
-rw-r--r--  1 dev staff 1200 Jul 30 09:00 styles.css
-rw-r--r--  1 dev staff 2400 Jul 30 09:00 app.js
    </div>
    <br/>
    <div class="cmd">$ git status</div>
    <div class="output">
On branch main
Nothing to commit, working tree clean
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Undo Mistakes Without Panic',
        km: 'ការ Undo កូដដែលមាន Error ដោយគ្មានការព្រួយបារម្ភ'
      },
      description: {
        en: 'In professional companies, if a new code update crashes the website on a Friday, Git allows reverting to the previous working commit snapshot in under 10 seconds.',
        km: 'ក្នុងក្រុមហ៊ុនបច្ចេកវិទ្យា ប្រសិនបើការ Update កូដថ្មីធ្វើឱ្យ Web មានបញ្ហា Git អនុញ្ញាតឱ្យ Revert ត្រឡប់ទៅ Snapshot កូដដែលដើរស្រួលវិញក្នុងរយៈពេលក្រោម ១០ វិនាទី។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What is the core benefit of a distributed version control system like Git?',
        km: 'តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃ Distributed Version Control System ដូចជា Git?'
      },
      solution: 'Every developer has a full copy of the repository and its complete history locally, allowing offline work and safe branching.'
    },
    quizQuestions: [
      {
        id: 'git-q1',
        question: {
          en: 'Which problem does Git version control directly solve for software developers?',
          km: 'តើបញ្ហាអ្វីដែល Git Version Control ជួយដោះស្រាយដោយផ្ទាល់សម្រាប់ Developer?'
        },
        options: [
          { id: '1', text: { en: 'Tracking code changes, history, and eliminating messy manual duplicate files', km: 'ការតាមដានប្រវត្តិកូដ និងលុបបំបាត់ការចម្លង File រញ៉េរញ៉ៃ' }, isCorrect: true },
          { id: '2', text: { en: 'Compiling JavaScript code faster into WebAssembly', km: 'ការ Compile កូដ JavaScript ឱ្យលឿន' }, isCorrect: false },
          { id: '3', text: { en: 'Designing graphic logos for web applications', km: 'ការរចនា Logo សម្រាប់ Web' }, isCorrect: false }
        ],
        explanation: {
          en: 'Git tracks history cleanly inside a repository without creating duplicate zip folders.',
          km: 'Git តាមដានប្រវត្តិកូដយ៉ាងមានរបៀបក្នុង Repository ដោយមិនបាច់ Copy File ច្រើនឡើយ។'
        }
      }
    ]
  },

  {
    id: 'git-l2',
    slug: 'installing-git-version-check',
    moduleNumber: 1,
    lessonNumberInModule: 2,
    title: {
      en: '1.2 Installing Git & Checking Version (git --version)',
      km: '1.2 ការដំឡើង Git និងការពិនិត្យ Version (git --version)'
    },
    durationMinutes: 10,
    difficulty: 'Beginner',
    explanation: {
      en: 'Git can be installed on Windows (via Git Bash), macOS (via Homebrew or Xcode Tools), and Linux (via apt/yum). You verify installation using the `git --version` CLI command.',
      km: 'Git អាចដំឡើងលើ Windows (តាម Git Bash), macOS (តាម Homebrew ឬ Xcode CLI) និង Linux (តាម apt/yum)។ យើងផ្ទៀងផ្ទាត់ការដំឡើងដោយវាយ Command `git --version` ក្នុង Terminal។'
    },
    tutorial: {
      en: '- Windows: Download Git for Windows installer (includes Git Bash tool).\n- macOS: Run `brew install git` or run `git --version` in Terminal to prompt Xcode install.\n- Linux (Ubuntu/Debian): Run `sudo apt update && sudo apt install git`',
      km: '- Windows: ទាញយក Git for Windows (រួមមាន Git Bash)។\n- macOS: វាយ `brew install git` ឬវាយ `git --version` ក្នុង Terminal។\n- Linux: វាយ `sudo apt update && sudo apt install git`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .output { color: #4ade80; margin-top: 6px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ git --version</div>
    <div class="output">git version 2.43.0</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'System Readiness Check',
        km: 'ការពិនិត្យភាពរួចរាល់នៃកុំព្យូទ័រ'
      },
      description: {
        en: 'Before starting work at a new job or project, developers run `git --version` to ensure Git is available globally in their shell environment.',
        km: 'មុនពេលចាប់ផ្តើមធ្វើការងារលើ Project ថ្មី Developer តែងតែវាយ `git --version` ដើម្បីប្រាកដថា Git ត្រូវ បានដំឡើងរួចរាល់លើកុំព្យូទ័រ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write the command to check the installed version of Git.',
        km: 'សរសេរ Command សម្រាប់ពិនិត្យមើល Version របស់ Git ដែលបានដំឡើង។'
      },
      solution: 'git --version'
    },
    quizQuestions: [
      {
        id: 'git-q2',
        question: {
          en: 'Which CLI command verifies if Git is successfully installed on your machine?',
          km: 'តើ Command មួយណាដែលប្រើសម្រាប់ផ្ទៀងផ្ទាត់ថាតើ Git ត្រូវ បានដំឡើងរួចរាល់លើកុំព្យូទ័រ?'
        },
        options: [
          { id: '1', text: { en: 'git --version', km: 'git --version' }, isCorrect: true },
          { id: '2', text: { en: 'git check', km: 'git check' }, isCorrect: false },
          { id: '3', text: { en: 'git status', km: 'git status' }, isCorrect: false }
        ],
        explanation: {
          en: '`git --version` prints the installed release string of Git.',
          km: '`git --version` បង្ហាញ Version លេខរបស់ Git។'
        }
      }
    ]
  },

  {
    id: 'git-l3',
    slug: 'first-time-setup-git-config',
    moduleNumber: 1,
    lessonNumberInModule: 3,
    title: {
      en: '1.3 First-Time Setup (git config user.name & user.email)',
      km: '1.3 ការកំណត់អត្តសញ្ញាណដំបូង (git config user.name & user.email)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'When you install Git, you must configure your identity (name and email address). Every Git commit attaches this information permanently to uniquely identify who made each code change.',
      km: 'នៅពេលដំឡើង Git រួចរាល់ អ្នកត្រូវកំណត់អត្តសញ្ញាណ (ឈ្មោះ និង អ៊ីមែល)។ រាល់ Git Commit នឹងភ្ជាប់ព័ត៌មាននេះជានិច្ច ដើម្បីដឹងថាអ្នកណាជាអ្នកកែប្រែកូដនោះ។'
    },
    tutorial: {
      en: '- Set user name globally:\n  `git config --global user.name "Sok Chan"` \n- Set user email globally:\n  `git config --global user.email "sok.chan@example.com"` \n- Inspect stored settings:\n  `git config --list`',
      km: '- កំណត់ឈ្មោះ៖\n  `git config --global user.name "Sok Chan"` \n- កំណត់អ៊ីមែល៖\n  `git config --global user.email "sok.chan@example.com"` \n- មើលការកំណត់ទាំងអស់៖\n  `git config --list` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .output { color: #38bdf8; margin-top: 4px; margin-bottom: 12px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ git config --global user.name "Sok Chan"</div>
    <div class="cmd">$ git config --global user.email "sok.chan@example.com"</div>
    <br/>
    <div class="cmd">$ git config --list</div>
    <div class="output">
user.name=Sok Chan
user.email=sok.chan@example.com
core.editor=code --wait
init.defaultBranch=main
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Commit Attribution on GitHub',
        km: 'ការបង្ហាញឈ្មោះអ្នកកូដលើ GitHub'
      },
      description: {
        en: 'GitHub uses the email configured in `user.email` to match commits with your GitHub profile avatar and display your contributions graph.',
        km: 'GitHub ប្រើប្រាស់ Email ដែលកំណត់ក្នុង `user.email` ដើម្បីភ្ជាប់ Commit ទៅកាន់ Profile Avatar និង Contribution Graph របស់អ្នក។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write the command to configure your global Git username as "Dev Khmer".',
        km: 'សរសេរ Command ដើម្បីកំណត់ Global Git Username ជា "Dev Khmer"។'
      },
      solution: 'git config --global user.name "Dev Khmer"'
    },
    quizQuestions: [
      {
        id: 'git-q3',
        question: {
          en: 'Why is configuring `user.email` and `user.name` necessary after installing Git?',
          km: 'ហេតុអ្វីបានជាចាំបាច់ត្រូវកំណត់ `user.email` និង `user.name` បន្ទាប់ពីដំឡើង Git?'
        },
        options: [
          { id: '1', text: { en: 'Because every Git commit permanently embeds who authored the change', km: 'ព្រោះរាល់ Commit ទាំងអស់ត្រូវភ្ជាប់អត្តសញ្ញាណអ្នកកូដជានិច្ច' }, isCorrect: true },
          { id: '2', text: { en: 'To enable dark mode inside VS Code terminal', km: 'ដើម្បីប្តូរ Dark Mode ក្នុង Terminal' }, isCorrect: false },
          { id: '3', text: { en: 'To encrypt code files with passwords', km: 'ដើម្បីដាក់ Password លើ File' }, isCorrect: false }
        ],
        explanation: {
          en: 'Git commits record author name and email metadata for tracking transparency.',
          km: 'Git Commits រក្សាទុកឈ្មោះ និង Email របស់អ្នកកូដដើម្បីតម្លាភាពក្នុងការងារ។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 2: Repositories, Commits & Workflow
  // ==========================================
  {
    id: 'git-l4',
    slug: 'git-init-starting-a-repository',
    moduleNumber: 2,
    lessonNumberInModule: 1,
    title: {
      en: '2.1 git init — Starting a Repository',
      km: '2.1 git init — ការបង្កើត និងចាប់ផ្តើម Repository'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'A Git Repository (repo) is a project folder tracked by Git. Running `git init` inside a folder creates a hidden `.git` directory that stores all history, refs, and commit databases.',
      km: 'Git Repository (repo) គឺជា Folder គម្រោងដែលត្រូវបានតាមដានដោយ Git។ ការវាយ `git init` នៅក្នុង Folder នឹងបង្កើត Folder ស្ងាត់ឈ្មោះ `.git` ដែលផ្ទុកប្រវត្តិកូដទាំងអស់។'
    },
    tutorial: {
      en: '- Navigate to project folder:\n  `cd my-web-app` \n- Initialize repository:\n  `git init` \n- Verify directory structure:\n  Notice the hidden `.git` folder created.',
      km: '- បើក Folder Project៖\n  `cd my-web-app` \n- បង្កើត Git Repo៖\n  `git init` \n- ពិនិត្យ Folder ស្ងាត់ `.git` ដែលទើបនឹងកើត។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .output { color: #4ade80; margin-top: 6px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ mkdir my-web-app && cd my-web-app</div>
    <div class="cmd">$ git init</div>
    <div class="output">Initialized empty Git repository in /Users/dev/my-web-app/.git/</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Starting Every New Project',
        km: 'ការចាប់ផ្តើម Project ថ្មីៗ'
      },
      description: {
        en: 'Running `git init` is step #1 when creating any web app, mobile app, or backend service from scratch.',
        km: 'ការវាយ `git init` គឺជាជំហានទី ១ ជានិច្ចនៅពេលចាប់ផ្តើមបង្កើត Web ឬ Mobile App ថ្មីពីដំបូង។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What hidden folder does `git init` create to store project version history?',
        km: 'តើ Folder ស្ងាត់មួយណាដែល `git init` បង្កើតឡើងដើម្បី រក្សាទុកប្រវត្តិកូដ?'
      },
      solution: '.git'
    },
    quizQuestions: [
      {
        id: 'git-q4',
        question: {
          en: 'Which command transforms an ordinary project folder into a Git version-controlled repository?',
          km: 'តើ Command មួយណាដែលបំប្លែង Folder ធម្មតាឱ្យទៅជា Git Repository?'
        },
        options: [
          { id: '1', text: { en: 'git init', km: 'git init' }, isCorrect: true },
          { id: '2', text: { en: 'git start', km: 'git start' }, isCorrect: false },
          { id: '3', text: { en: 'git create', km: 'git create' }, isCorrect: false }
        ],
        explanation: {
          en: '`git init` initializes a new empty Git repository inside the working directory.',
          km: '`git init` ចាប់ផ្តើមបង្កើត Git Repository ថ្មី។'
        }
      }
    ]
  },

  {
    id: 'git-l5',
    slug: 'the-three-areas-git-add-commit',
    moduleNumber: 2,
    lessonNumberInModule: 2,
    title: {
      en: '2.2 The Three Areas (git add & git commit)',
      km: '2.2 តំបន់ទាំង៣ នៃ Git (git add & git commit)'
    },
    durationMinutes: 20,
    difficulty: 'Beginner',
    explanation: {
      en: 'Git manages code across 3 areas: 1) Working Directory (your modified files), 2) Staging Area (prepped files ready to commit via `git add`), and 3) Repository (saved permanent snapshots via `git commit`).',
      km: 'Git គ្រប់គ្រងកូដតាម ៣ តំបន់៖ ១) Working Directory (ឯកសារដែលកំពុងកែប្រែ), ២) Staging Area (ឯកសារដែលត្រៀមចង់ Save តាម `git add`), និង ៣) Repository (Snapshot ដែលបាន Save រួចរាល់តាម `git commit`)។'
    },
    tutorial: {
      en: '- Stage single file:\n  `git add index.html` \n- Stage all modified files:\n  `git add .` \n- Commit staged files with message:\n  `git commit -m "feat: add landing page layout"`',
      km: '- រៀបចំ File មួយ៖\n  `git add index.html` \n- រៀបចំ File ទាំងអស់៖\n  `git add .` \n- Commit Save ទុក៖\n  `git commit -m "feat: add landing page layout"`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .output { color: #38bdf8; margin-top: 6px; margin-bottom: 10px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ git add .</div>
    <div class="cmd">$ git commit -m "Initial commit with index.html"</div>
    <div class="output">
[main (root-commit) a1b2c3d] Initial commit with index.html
 1 file changed, 25 insertions(+)
 create mode 100644 index.html
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'The Shopping Cart Analogy',
        km: 'ការប្រៀបធៀប Staging Area ទៅនឹងកន្ត្រកទំនិញ'
      },
      description: {
        en: 'Think of `git add` as putting items into a shopping cart, and `git commit` as paying at checkout to finalize the order snapshot.',
        km: 'គិតថា `git add` ដូចជាការរើសអីវ៉ាន់ដាក់ចូលក្នុងកន្ត្រក ហើយ `git commit` គឺការទូទាត់ប្រាក់នៅបេឡាដើម្បីទទួលបានវិក្កយបត្រ Save ទុក។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which command stages all modified files in the current folder for commit?',
        km: 'តើ Command មួយណាសម្រាប់រៀបចំឯកសារ modified ទាំងអស់ក្នុង Folder ត្រៀម Commit?'
      },
      solution: 'git add .'
    },
    quizQuestions: [
      {
        id: 'git-q5',
        question: {
          en: 'What is the purpose of the Git Staging Area (index)?',
          km: 'តើអ្វីជាគោលបំណងនៃ Git Staging Area?'
        },
        options: [
          { id: '1', text: { en: 'To allow developers to selectively review and group changes before committing', km: 'ដើម្បីអនុញ្ញាតឱ្យជ្រើសរើស File ដែលចង់រៀបចំ និងផ្ទៀងផ្ទាត់មុនពេល Commit' }, isCorrect: true },
          { id: '2', text: { en: 'To automatically upload files to cloud servers', km: 'ដើម្បី Upload ឯកសារទៅ Cloud ដោយស្វ័យប្រវត្តិ' }, isCorrect: false },
          { id: '3', text: { en: 'To compile HTML into Javascript', km: 'ដើម្បី Compile HTML ទៅជា JavaScript' }, isCorrect: false }
        ],
        explanation: {
          en: 'The staging area lets you prepare exact atomic updates before recording them in history.',
          km: 'Staging Area ជួយឱ្យយើងរៀបចំកូដត្រឹមត្រូវមុនពេល Save ចូល History។'
        }
      }
    ]
  },

  {
    id: 'git-l6',
    slug: 'writing-good-commit-messages',
    moduleNumber: 2,
    lessonNumberInModule: 3,
    title: {
      en: '2.3 Writing Good Commit Messages',
      km: '2.3 ក្បួនសរសេរ Commit Message ឱ្យមានស្តង់ដារ'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'A good commit message concisely describes WHAT was changed and WHY. Professional engineering teams follow Conventional Commits prefixes like `feat:`, `fix:`, `docs:`, `style:`, and `refactor:`.',
      km: 'Commit Message ដែលល្អ ពណ៌នាច្បាស់លាស់ពីអ្វីដែលបានផ្លាស់ប្តូរ និង ហេតុអ្វី។ ក្រុមការងារអាជីពនិយមប្រើ Conventional Commits ដូចជា `feat:`, `fix:`, `docs:`, `style:` និង `refactor:`។'
    },
    tutorial: {
      en: '- Feature addition:\n  `git commit -m "feat: implement user login form"` \n- Bug fix:\n  `git commit -m "fix: resolve navbar alignment on mobile screens"` \n- Documentation update:\n  `git commit -m "docs: update README installation steps"`',
      km: '- បន្ថែម Feature ថ្មី៖\n  `git commit -m "feat: implement user login form"` \n- កែ Bug៖\n  `git commit -m "fix: resolve navbar alignment on mobile screens"` \n- បច្ចុប្បន្នភាព Document៖\n  `git commit -m "docs: update README installation steps"`'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .bad { color: #f87171; }
    .good { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="bad">❌ Bad Commit Messages:</div>
    <div>$ git commit -m "update code"</div>
    <div>$ git commit -m "fix stuff"</div>
    <div>$ git commit -m "asdfasdf"</div>
    <br/>
    <div class="good">✅ Good Conventional Commit Messages:</div>
    <div>$ git commit -m "feat(auth): add OAuth2 login flow"</div>
    <div>$ git commit -m "fix(cart): prevent duplicate checkout requests"</div>
    <div>$ git commit -m "refactor(api): optimize database query speeds"</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Automated Release Changelogs',
        km: 'ការបង្កើត Release Notes ដោយស្វ័យប្រវត្តិ'
      },
      description: {
        en: 'When team members write Conventional Commit messages, automated CI/CD tools can generate release notes and increment semver versions automatically.',
        km: 'ពេលសមាជិកក្រុមសរសេរ Conventional Commit ឧបករណ៍ CI/CD អាចបង្កើត Release Notes និងលេខ Version ដោយស្វ័យប្រវត្តិ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which Conventional Commit prefix should be used when fixing a crash bug?',
        km: 'តើ Prefix Conventional Commit មួយណាដែលត្រូវប្រើពេលកែ Bug?'
      },
      solution: 'fix:'
    },
    quizQuestions: [
      {
        id: 'git-q6',
        question: {
          en: 'Which commit message follows professional Conventional Commit standards for adding a new search feature?',
          km: 'តើ Commit message មួយណាដែលត្រឹមត្រូវតាមស្តង់ដារ Conventional Commit សម្រាប់បន្ថែម Feature ស្វែងរកថ្មី?'
        },
        options: [
          { id: '1', text: { en: 'git commit -m "feat: add instant product search input"', km: 'git commit -m "feat: add instant product search input"' }, isCorrect: true },
          { id: '2', text: { en: 'git commit -m "search done"', km: 'git commit -m "search done"' }, isCorrect: false },
          { id: '3', text: { en: 'git commit -m "changes"', km: 'git commit -m "changes"' }, isCorrect: false }
        ],
        explanation: {
          en: '`feat:` denotes a new functional feature update for users.',
          km: '`feat:` សម្គាល់ការបន្ថែម Feature ថ្មីសម្រាប់ User។'
        }
      }
    ]
  },

  {
    id: 'git-l7',
    slug: 'git-status-and-git-log',
    moduleNumber: 2,
    lessonNumberInModule: 4,
    title: {
      en: '2.4 git status and git log — Inspecting Repository History',
      km: '2.4 git status និង git log — ការពិនិត្យមើលស្ថានភាព និងប្រវត្តិ'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: '`git status` reveals the current state of files (untracked, modified, staged). `git log` shows the commit history timeline, including SHA hash IDs, author info, date, and commit messages.',
      km: '`git status` បង្ហាញស្ថានភាពបច្ចុប្បន្ននៃ File (Untracked, Modified, Staged)។ `git log` បង្ហាញប្រវត្តិកាលបរិច្ឆេទ Commits រួមមាន SHA Hash ID, ឈ្មោះអ្នកកូដ, និង Message។'
    },
    tutorial: {
      en: '- Check repository status:\n  `git status` \n- View full commit history:\n  `git log` \n- View compact single-line history:\n  `git log --oneline --graph`',
      km: '- ពិនិត្យស្ថានភាព៖\n  `git status` \n- មើលប្រវត្តិ Commits ទាំងអស់៖\n  `git log` \n- មើលប្រវត្តិសង្ខេបមួយបន្ទាត់៖\n  `git log --oneline --graph` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .hash { color: #f43f5e; }
    .branch { color: #38bdf8; }
    .msg { color: #f8fafc; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ git log --oneline</div>
    <div><span class="hash">c3d4e5f</span> <span class="branch">(HEAD -> main)</span> <span class="msg">docs: update readme API examples</span></div>
    <div><span class="hash">b2c3d4e</span> <span class="msg">fix: resolve cart count reset bug</span></div>
    <div><span class="hash">a1b2c3d</span> <span class="msg">feat: add landing page layout</span></div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Auditing Code Authorship',
        km: 'ការស៊ើបអង្កេតប្រវត្តិការកែប្រែកូដ'
      },
      description: {
        en: 'When diagnosing a newly introduced bug, developers use `git log` or `git blame` to pinpoint exactly which commit modified the breaking lines.',
        km: 'ពេលស្វែងរកដើមហេតុនៃ Bug ថ្មី Developer ប្រើប្រាស់ `git log` ឬ `git blame` ដើម្បីដឹងថា Commit មួយណា និងអ្នកណាជាអ្នកកែបន្ទាត់នោះ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which flag makes `git log` display each commit as a clean single line summary?',
        km: 'តើ Flag មួយណាដែលធ្វើឱ្យ `git log` បង្ហាញ Commit សង្ខេបត្រឹមតែមួយបន្ទាត់?'
      },
      solution: '--oneline'
    },
    quizQuestions: [
      {
        id: 'git-q7',
        question: {
          en: 'Which command shows modified untracked files in your working directory?',
          km: 'តើ Command មួយណាដែលបង្ហាញឯកសារដែលបានកែប្រែ និងមិនទាន់បាន Track ក្នុង Working Directory?'
        },
        options: [
          { id: '1', text: { en: 'git status', km: 'git status' }, isCorrect: true },
          { id: '2', text: { en: 'git log', km: 'git log' }, isCorrect: false },
          { id: '3', text: { en: 'git show', km: 'git show' }, isCorrect: false }
        ],
        explanation: {
          en: '`git status` inspects working tree state and staged file lists.',
          km: '`git status` ពិនិត្យមើលស្ថានភាព File ក្នុង Working Directory។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 3: Branching & Merging
  // ==========================================
  {
    id: 'git-l8',
    slug: 'understanding-branches',
    moduleNumber: 3,
    lessonNumberInModule: 1,
    title: {
      en: '3.1 Understanding Branches in Team Development',
      km: '3.1 យល់ដឹងអំពី Branches ក្នុងការងារក្រុម'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A Git Branch represents an independent line of development. The default branch is usually named `main`. Creating feature branches allows developers to safely test new ideas without breaking production code.',
      km: 'Git Branch តំណាងឱ្យខ្សែផ្លូវអភិវឌ្ឍន៍ដាច់ដោយឡែកមួយ។ Branch ដើមជាទូទៅឈ្មោះ `main`។ ការបង្កើត Feature Branch អនុញ្ញាតឱ្យ Developer ធ្វើតេស្ត Feature ថ្មីដោយមិនប៉ះពាល់កូដដើមឡើយ។'
    },
    tutorial: {
      en: '- View existing branches:\n  `git branch` \n- Visual model:\n  `main`:   A --- B --- C (Stable Production Code)\n               \\ \n  `feature`:    D --- E (Work in Progress)',
      km: '- មើល Branch ដែលមាន៖\n  `git branch` \n- គំរូបង្ហាញ៖\n  `main`:   A --- B --- C (កូដដើមដើរស្រួល)\n               \\ \n  `feature`:    D --- E (កូដកំពុងអភិវឌ្ឍ)'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .active { color: #4ade80; font-weight: bold; }
    .item { color: #94a3b8; margin-left: 10px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ git branch</div>
    <div class="active">* main</div>
    <div class="item">feature/dark-mode</div>
    <div class="item">fix/login-modal</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Isolated Feature Experimentation',
        km: 'ការធ្វើតេស្តកូដដោយមិនរំខានក្រុម'
      },
      description: {
        en: 'Multiple developers can work simultaneously on separate branches (`feature/cart`, `feature/payment`) without messing up each other\'s unreleased code.',
        km: 'Developer ច្រើននាក់អាចសរសេរកូដក្នុងពេលតែមួយលើ Branch ផ្សេងគ្នាដោយមិនជាន់កូដគ្នាឡើយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What character indicates your currently active branch when running `git branch`?',
        km: 'តើសញ្ញាអ្វីដែលសម្គាល់ Branch ដែលអ្នកកំពុងឈរលើ ពេលវាយ `git branch`?'
      },
      solution: 'An asterisk (*)'
    },
    quizQuestions: [
      {
        id: 'git-q8',
        question: {
          en: 'Why do development teams use feature branches instead of committing everything to `main`?',
          km: 'ហេតុអ្វីបានជាក្រុមការងារប្រើប្រាស់ Feature Branches ជំនួសឱ្យការ Commit លើ `main` ផ្ទាល់?'
        },
        options: [
          { id: '1', text: { en: 'To isolate incomplete work and keep production main branch stable', km: 'ដើម្បីបំបែកកូដដែលមិនទាន់ច្បាស់ និងរក្សា `main` ឱ្យដើរស្រួលជានិច្ច' }, isCorrect: true },
          { id: '2', text: { en: 'Because Git limits main branch to 10 commits only', km: 'ព្រោះ Git កំណត់ main ត្រឹម ១០ commits' }, isCorrect: false },
          { id: '3', text: { en: 'To speed up internet bandwidth', km: 'ដើម្បីបង្កើនល្បឿន អ៊ីនធឺណិត' }, isCorrect: false }
        ],
        explanation: {
          en: 'Feature branches isolate untested features until peer-reviewed and verified.',
          km: 'Feature Branches រក្សាទុកកូដតេស្តដាច់ដោយឡែករហូតដល់ Review រួច។'
        }
      }
    ]
  },

  {
    id: 'git-l9',
    slug: 'creating-switching-branches',
    moduleNumber: 3,
    lessonNumberInModule: 2,
    title: {
      en: '3.2 Creating & Switching Branches (git checkout -b / git switch)',
      km: '3.2 ការបង្កើត និងផ្លាស់ប្តូរ Branches (git checkout -b / git switch)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'You create and switch to a new branch using `git checkout -b <branch-name>` or modern `git switch -c <branch-name>`. Switching branches instantly updates your working files in VS Code to match that branch snapshot.',
      km: 'អ្នកបង្កើត និង ផ្លាស់ទៅ Branch ថ្មីតាមរយៈ `git checkout -b <branch-name>` ឬបែបទំនើប `git switch -c <branch-name>`។ ការផ្លាស់ Branch នឹងប្តូរ File ក្នុង VS Code ភ្លាមៗតាម Branch នោះ។'
    },
    tutorial: {
      en: '- Create and switch (Classic syntax):\n  `git checkout -b feature/user-profile` \n- Create and switch (Modern syntax):\n  `git switch -c feature/user-profile` \n- Switch back to main:\n  `git switch main`',
      km: '- បង្កើត និងផ្លាស់ (ទម្រង់ចាស់)៖\n  `git checkout -b feature/user-profile` \n- បង្កើត និងផ្លាស់ (ទម្រង់ទំនើប)៖\n  `git switch -c feature/user-profile` \n- ត្រឡប់ទៅកាន់ main៖\n  `git switch main` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .output { color: #38bdf8; margin-top: 6px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ git switch -c feature/auth-screen</div>
    <div class="output">Switched to a new branch 'feature/auth-screen'</div>
    <br/>
    <div class="cmd">$ git status</div>
    <div class="output">On branch feature/auth-screen<br/>nothing to commit, working tree clean</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Safe Emergency Hotfixes',
        km: 'ការកែសម្រួល Error បន្ទាន់ (Hotfix)'
      },
      description: {
        en: 'If a critical live bug occurs while you are halfway through a feature branch, you can switch back to `main`, spawn a `hotfix/login` branch, repair the bug, merge it, and resume your feature work without losing anything.',
        km: 'បើមាន Bug បន្ទាន់ពេលកំពុងសរសេរ Feature អ្នកអាច Switch ទៅ `main` បង្កើត branch `hotfix` ដើម្បីកែរហ័ស Merge រួច ហើយត្រឡប់មកសរសេរ Feature វិញបានយ៉ាងងាយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write the modern `git switch` command to create and jump to a branch named `feature/cart`.',
        km: 'សរសេរ Command `git switch` ទំនើបដើម្បីបង្កើត និងផ្លាស់ទៅកាន់ Branch ឈ្មោះ `feature/cart`'
      },
      solution: 'git switch -c feature/cart'
    },
    quizQuestions: [
      {
        id: 'git-q9',
        question: {
          en: 'Which command both creates a new branch AND switches your working directory to it in one step?',
          km: 'តើ Command មួយណាដែលបង្កើត Branch ថ្មីផង និង ផ្លាស់ទៅកាន់ Branch នោះក្នុងពេលតែមួយ?'
        },
        options: [
          { id: '1', text: { en: 'git checkout -b feature/new-page', km: 'git checkout -b feature/new-page' }, isCorrect: true },
          { id: '2', text: { en: 'git branch create feature/new-page', km: 'git branch create feature/new-page' }, isCorrect: false },
          { id: '3', text: { en: 'git move feature/new-page', km: 'git move feature/new-page' }, isCorrect: false }
        ],
        explanation: {
          en: 'The `-b` flag tells `git checkout` to create the branch first before switching.',
          km: 'Flag `-b` ប្រាប់ `git checkout` ឱ្យបង្កើត Branch មុនពេល Switch។'
        }
      }
    ]
  },

  {
    id: 'git-l10',
    slug: 'merging-branches-git-merge',
    moduleNumber: 3,
    lessonNumberInModule: 3,
    title: {
      en: '3.3 Merging a Branch (git merge)',
      km: '3.3 ការ Merge Branches (git merge)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Merging combines history from one branch into another. To integrate completed feature changes into `main`, switch to `main` first, then run `git merge <feature-branch>`.',
      km: 'Merging គឺជាការបញ្ចូលប្រវត្តិកូដពី Branch មួយទៅ Branch មួយទៀត។ ដើម្បីបញ្ចូល Feature ដែលធ្វើរួចរាល់ចូលក្នុង `main` អ្នកត្រូវ Switch ទៅ `main` រួចវាយ `git merge <feature-branch>`។'
    },
    tutorial: {
      en: '- Step 1: Switch to target branch:\n  `git switch main` \n- Step 2: Merge feature branch in:\n  `git merge feature/user-profile` \n- Result: Main incorporates all commits from feature/user-profile!',
      km: '- ជំហានទី ១៖ ផ្លាស់ទៅកាន់ Branch គោល៖\n  `git switch main` \n- ជំហានទី ២៖ Merge Feature ចូល៖\n  `git merge feature/user-profile` \n- លទ្ធផល៖ Main ទទួលបានរាល់ Commits ទាំងអស់ពី Feature!'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .output { color: #38bdf8; margin-top: 6px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ git switch main</div>
    <div class="output">Switched to branch 'main'</div>
    <br/>
    <div class="cmd">$ git merge feature/auth-screen</div>
    <div class="output">
Updating a1b2c3d..e5f6g7h
Fast-forward
 src/auth.js | 45 +++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 45 insertions(+)
 create mode 100644 src/auth.js
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Deploying Complete Features',
        km: 'ការប្រគល់ Feature ដែលបានសរសេររួច'
      },
      description: {
        en: 'When a feature passes review and QA testing, developers merge the feature branch into `main` so the deployment pipeline publishes it live.',
        km: 'នៅពេល Feature ធ្វើតេស្តរួចរាល់ Developer ធ្វើការ Merge ចូល `main` ដើម្បីឱ្យប្រព័ន្ធ Deploy កូដទៅកាន់ Website ផ្លូវការ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Before running `git merge feature/login`, which branch must you be currently standing on?',
        km: 'មុនពេលវាយ `git merge feature/login` តើអ្នកត្រូវឈរលើ Branch មួយណា?'
      },
      solution: 'The target destination branch (e.g., main or release branch)'
    },
    quizQuestions: [
      {
        id: 'git-q10',
        question: {
          en: 'What is a "Fast-forward" merge in Git?',
          km: 'តើអ្វីទៅជា "Fast-forward" merge ក្នុង Git?'
        },
        options: [
          { id: '1', text: { en: 'When the target branch pointer simply moves forward to the tip of the merged feature branch without new merge commits', km: 'នៅពេល Branch គោលដើរទៅមុខត្រង់តាម Feature Branch ដោយមិនបាច់បង្កើត Merge Commit ថ្មី' }, isCorrect: true },
          { id: '2', text: { en: 'When Git deletes the repo automatically', km: 'នៅពេល Git លុប Repo ដោយស្វ័យប្រវត្តិ' }, isCorrect: false },
          { id: '3', text: { en: 'When files are sent over 5G internet speeds', km: 'នៅពេលបញ្ជូនកូដតាម 5G' }, isCorrect: false }
        ],
        explanation: {
          en: 'Fast-forward occurs when no diverging commits occurred on main since the feature branch split.',
          km: 'Fast-forward កើតឡើងនៅពេល `main` គ្មាន Commit ថ្មីផ្សេងមកជាន់ពីមុខ។'
        }
      }
    ]
  },

  {
    id: 'git-l11',
    slug: 'deleting-merged-branches',
    moduleNumber: 3,
    lessonNumberInModule: 4,
    title: {
      en: '3.4 Deleting a Merged Branch (git branch -d)',
      km: '3.4 ការលុប Branch ដែលបាន Merge រួចរាល់ (git branch -d)'
    },
    durationMinutes: 10,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Once a feature branch is successfully merged into `main`, you should clean up local repository branches using `git branch -d <branch-name>`. Safe deletion prevents branch clutter.',
      km: 'បន្ទាប់ពី Feature Branch ត្រូវបាន Merge ចូល `main` រួចរាល់ អ្នកគួរតែសម្អាត និងលុប Branch ចាស់នោះចេញតាមរយៈ `git branch -d <branch-name>` ដើម្បីរក្សា Repository ឱ្យមានរបៀប។'
    },
    tutorial: {
      en: '- Safe delete merged branch:\n  `git branch -d feature/user-profile` \n- Force delete unmerged branch (Use with caution!):\n  `git branch -D stale-experiment`',
      km: '- លុប Branch ដែល Merge រួច (មានសុវត្ថិភាព)៖\n  `git branch -d feature/user-profile` \n- បង្ខំលុប Branch ដែលមិនទាន់ Merge (ប្រយ័ត្នបាត់កូដ!)៖\n  `git branch -D stale-experiment` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .output { color: #4ade80; margin-top: 6px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ git branch -d feature/auth-screen</div>
    <div class="output">Deleted branch feature/auth-screen (was e5f6g7h).</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Maintaining Clean Local Environment',
        km: 'ការរក្សាបរិស្ថានការងារឱ្យមានរបៀប'
      },
      description: {
        en: 'Deleting finished feature branches keeps `git branch` lists short and easy to navigate during daily standups.',
        km: 'ការលុប Branch ដែលបានធ្វើរួចរាល់ ជួយឱ្យ List នៃ Branch ខ្លី និងងាយស្រួលគ្រប់គ្រង។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which command safely deletes a local branch named `fix/navbar` only if it has already been merged?',
        km: 'តើ Command មួយណាសម្រាប់លុប Branch `fix/navbar` ដោយសុវត្ថិភាព ប្រសិនបើវាបាន Merge រួចរាល់?'
      },
      solution: 'git branch -d fix/navbar'
    },
    quizQuestions: [
      {
        id: 'git-q11',
        question: {
          en: 'What is the difference between `git branch -d` and `git branch -D`?',
          km: 'តើអ្វីជាភាពខុសគ្នារវាង `git branch -d` និង `git branch -D`?'
        },
        options: [
          { id: '1', text: { en: '`-d` checks if commits are merged before deleting; `-D` force deletes regardless of unmerged commits', km: '`-d` ពិនិត្យថាបាន Merge ឬនៅមុនលុប; `-D` បង្ខំលុបដោយមិនខ្វល់ថាបាន Merge ឬនៅឡើយ' }, isCorrect: true },
          { id: '2', text: { en: '`-d` deletes remote server repos; `-D` deletes local files', km: '`-d` លុបលើ Server; `-D` លុបលើ Computer' }, isCorrect: false },
          { id: '3', text: { en: '`-d` renames the branch', km: '`-d` ប្តូរឈ្មោះ Branch' }, isCorrect: false }
        ],
        explanation: {
          en: '`-d` prevents accidental loss of unmerged code work; `-D` overrides safety checks.',
          km: '`-d` ការពារកុំឱ្យបាត់បង់កូដដែលមិនទាន់បាន Merge; `-D` បង្ខំលុបភ្លាមៗ។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 4: Remote Repos & GitHub
  // ==========================================
  {
    id: 'git-l12',
    slug: 'creating-github-account-and-repo',
    moduleNumber: 4,
    lessonNumberInModule: 1,
    title: {
      en: '4.1 Creating a GitHub Account & New Remote Repository',
      km: '4.1 ការបង្កើត Account & Remote Repository លើ GitHub'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'GitHub is a cloud platform that hosts Git repositories online. It provides web UI collaboration tools like Pull Requests, Issue tracking, and automated GitHub Actions CI/CD.',
      km: 'GitHub គឺជា Cloud Platform សម្រាប់ផ្ទុក Git Repositories លើអ៊ីនធឺណិត។ វាផ្តល់ឧបករណ៍សហការដូចជា Pull Requests, Issue tracking, និង GitHub Actions CI/CD។'
    },
    tutorial: {
      en: '- Step 1: Sign up at github.com\n- Step 2: Click "+" icon -> "New repository"\n- Step 3: Enter repository name (e.g. `my-awesome-app`)\n- Step 4: Choose Public or Private -> Click "Create repository"',
      km: '- ជំហានទី ១៖ បង្កើត Account លើ github.com\n- ជំហានទី ២៖ ចុចសញ្ញា "+" -> "New repository"\n- ជំហានទី ៣៖ ដាក់ឈ្មោះ Repo (ឧ. `my-awesome-app`)\n- ជំហានទី ៤៖ ជ្រើសរើស Public ឬ Private -> ចុច "Create repository"'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .title { color: #38bdf8; font-weight: bold; margin-bottom: 8px; }
    .url { color: #facc15; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">🌐 GitHub New Repository Created!</div>
    <div>HTTPS URL: <span class="url">https://github.com/username/my-awesome-app.git</span></div>
    <div>SSH URL: <span class="url">git@github.com:username/my-awesome-app.git</span></div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Developer Portfolio Showcase',
        km: 'ការបង្ហាញស្នាដៃកូដ (Portfolio)'
      },
      description: {
        en: 'Employers review public GitHub repositories to evaluate candidate coding standards, project structure, and commit consistency.',
        km: 'ក្រុមហ៊ុនបច្ចេកវិទ្យា តែងតែពិនិត្យមើល Public GitHub របស់សេក្ខជន ដើម្បីវាយតម្លៃសមត្ថភាពសរសេរកូដ និងការរៀបចំ Project។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What is the main distinction between Git and GitHub?',
        km: 'តើអ្វីជាភាពខុសគ្នាចម្បងរវាង Git និង GitHub?'
      },
      solution: 'Git is the local CLI version control engine; GitHub is the cloud-hosted web service that stores Git repositories online.'
    },
    quizQuestions: [
      {
        id: 'git-q12',
        question: {
          en: 'Which statement accurately describes the relationship between Git and GitHub?',
          km: 'តើការរៀបរាប់មួយណាដែលត្រឹមត្រូវអំពីទំនាក់ទំនងរវាង Git និង GitHub?'
        },
        options: [
          { id: '1', text: { en: 'Git is the local version control software; GitHub is an online cloud hosting service for Git repos', km: 'Git ជាកម្មវិធី Version Control លើកុំព្យូទ័រ; GitHub ជាប្រព័ន្ធ Cloud សម្រាប់ផ្ទុក Git Repos លើ Web' }, isCorrect: true },
          { id: '2', text: { en: 'Git and GitHub are exact identical names for the same software', km: 'Git និង GitHub គឺជាឈ្មោះដូចគ្នាទាំងស្រុង' }, isCorrect: false },
          { id: '3', text: { en: 'GitHub replaces HTML and CSS languages', km: 'GitHub ជំនួស HTML និង CSS' }, isCorrect: false }
        ],
        explanation: {
          en: 'Git is the underlying tool; GitHub is the cloud platform.',
          km: 'Git គឺជាឧបករណ៍សហការ; GitHub គឺជា Cloud Platform។'
        }
      }
    ]
  },

  {
    id: 'git-l13',
    slug: 'connecting-local-repo-to-github',
    moduleNumber: 4,
    lessonNumberInModule: 2,
    title: {
      en: '4.2 Connecting Local Repo to GitHub (git remote add origin)',
      km: '4.2 ការភ្ជាប់ Local Repo ទៅកាន់ GitHub (git remote add origin)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'To push local code to GitHub, link your local repository to the remote cloud server URL using `git remote add origin <URL>`. The alias `origin` refers to the remote server.',
      km: 'ដើម្បីផ្ញើកូដពីកុំព្យូទ័រទៅ GitHub អ្នកត្រូវភ្ជាប់ Local Repo ទៅកាន់ Cloud Server URL តាមរយៈ `git remote add origin <URL>`។ Alias `origin` គឺជាឈ្មោះតំណាង Remote Server។'
    },
    tutorial: {
      en: '- Link local repo to remote URL:\n  `git remote add origin https://github.com/user/my-app.git` \n- Verify configured remotes:\n  `git remote -v` \n- Rename current branch to main if needed:\n  `git branch -M main`',
      km: '- ភ្ជាប់ Local Repo ទៅកាន់ Remote URL៖\n  `git remote add origin https://github.com/user/my-app.git` \n- ផ្ទៀងផ្ទាត់ Remote៖\n  `git remote -v` \n- ប្តូរឈ្មោះ Branch ទៅ main បើចាំបាច់៖\n  `git branch -M main` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .output { color: #38bdf8; margin-top: 6px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ git remote add origin https://github.com/dev/my-app.git</div>
    <div class="cmd">$ git remote -v</div>
    <div class="output">
origin  https://github.com/dev/my-app.git (fetch)
origin  https://github.com/dev/my-app.git (push)
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Establishing Central Source of Truth',
        km: 'ការបង្កើតទីតាំងផ្ទុកកូដកណ្តាល'
      },
      description: {
        en: 'Adding a remote `origin` establishes the GitHub repository as the central source of truth for your entire engineering team.',
        km: 'ការបន្ថែម Remote `origin` កំណត់ GitHub Repo ជាទីតាំងផ្ទុកកូដកណ្តាលសម្រាប់ក្រុមការងារទាំងមូល។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Which command lists all configured remote server shortcuts and their fetch/push URLs?',
        km: 'តើ Command មួយណាដែលបង្ហាញឈ្មោះ Remote Server ទាំងអស់ និង URLs របស់វា?'
      },
      solution: 'git remote -v'
    },
    quizQuestions: [
      {
        id: 'git-q13',
        question: {
          en: 'What does the alias `origin` conventionally represent in Git?',
          km: 'តើ Alias `origin` សម្គាល់អ្វីជានិមិត្តសញ្ញាក្នុង Git?'
        },
        options: [
          { id: '1', text: { en: 'The default short name alias for your primary remote repository on GitHub', km: 'ឈ្មោះកាត់តំណាងឱ្យ Remote Repository ចម្បងលើ GitHub' }, isCorrect: true },
          { id: '2', text: { en: 'The original author of JavaScript', km: 'ឈ្មោះអ្នកបង្កើត JavaScript' }, isCorrect: false },
          { id: '3', text: { en: 'A local backup folder in C: drive', km: 'Folder Backup ក្នុង C: drive' }, isCorrect: false }
        ],
        explanation: {
          en: '`origin` is the default alias assigned to the remote repository URL.',
          km: '`origin` គឺជា Alias ដើមសម្រាប់ Remote URL។'
        }
      }
    ]
  },

  {
    id: 'git-l14',
    slug: 'git-push-and-git-pull',
    moduleNumber: 4,
    lessonNumberInModule: 3,
    title: {
      en: '4.3 Pushing & Pulling Code (git push & git pull)',
      km: '4.3 ការ Push និង Pull កូដ (git push & git pull)'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: '`git push` uploads local commits to GitHub. `git pull` fetches and merges updates from GitHub down to your computer to keep your code in sync with teammates.',
      km: '`git push` បញ្ជូន Commits ពីកុំព្យូទ័រឡើងទៅ GitHub។ `git pull` ទាញយកបច្ចុប្បន្នភាពកូដពី GitHub មកកុំព្យូទ័រដើម្បីឱ្យកូដទាន់សម័យជាមួយក្រុម។'
    },
    tutorial: {
      en: '- First push setting upstream tracking:\n  `git push -u origin main` \n- Subsequent pushes on tracked branch:\n  `git push` \n- Pull latest changes from remote:\n  `git pull origin main`',
      km: '- Push លើកដំបូងភ្ជាប់ Upstream៖\n  `git push -u origin main` \n- Push លើកក្រោយៗ៖\n  `git push` \n- Pull ទាញយកកូដថ្មីពី GitHub៖\n  `git pull origin main` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .output { color: #4ade80; margin-top: 6px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ git push -u origin main</div>
    <div class="output">
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (5/5), 1.2 KiB | 1.2 MiB/s, done.
Total 5 (delta 0), reused 0 (delta 0)
To https://github.com/dev/my-app.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Daily Morning Sync Routine',
        km: 'ទម្លាប់ Sync កូដជារៀងរាល់ព្រឹក'
      },
      description: {
        en: 'Developers start every workday by running `git pull` to receive code updates pushed by teammates overnight before writing new features.',
        km: 'Developer តែងតែរត់ `git pull` នៅរាល់ព្រឹកដើម្បីទទួលបានកូដថ្មីៗដែលក្រុមការងារបាន Push មុនពេលចាប់ផ្តើមសរសេរកូដបន្ថែម។'
      }
    }, practiceExercise: {
      question: {
        en: 'Which command uploads local commits on the active branch to remote origin?',
        km: 'តើ Command មួយណាដែលបញ្ជូន Commits ពី Local ទៅកាន់ Remote Origin?'
      },
      solution: 'git push'
    },
    quizQuestions: [
      {
        id: 'git-q14',
        question: {
          en: 'What happens when you execute `git pull` in your terminal?',
          km: 'តើមានអ្វីកើតឡើងនៅពេលអ្នកវាយ `git pull` ក្នុង Terminal?'
        },
        options: [
          { id: '1', text: { en: 'It fetches changes from the remote server and automatically merges them into your current branch', km: 'វាទាញយកកូដថ្មីពី Remote Server ហើយ Merge ចូល Branch បច្ចុប្បន្នដោយស្វ័យប្រវត្តិ' }, isCorrect: true },
          { id: '2', text: { en: 'It deletes all local files in workspace', km: 'វាលុប File ទាំងអស់ក្នុង Computer' }, isCorrect: false },
          { id: '3', text: { en: 'It uploads local code to GitHub', km: 'វា Upload កូដទៅ GitHub' }, isCorrect: false }
        ],
        explanation: {
          en: '`git pull` combines `git fetch` (downloading) and `git merge` (integrating).',
          km: '`git pull` រួមបញ្ចូលគ្នា រវាង `git fetch` និង `git merge`។'
        }
      }
    ]
  },

  {
    id: 'git-l15',
    slug: 'cloning-an-existing-repo',
    moduleNumber: 4,
    lessonNumberInModule: 4,
    title: {
      en: '4.4 Cloning an Existing Repo (git clone)',
      km: '4.4 ការ Clone គម្រោងដែលមានស្រាប់ (git clone)'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: '`git clone <repository-url>` downloads an existing GitHub project to your local computer, initializing Git, establishing remote origin pointers, and checking out default branch files automatically.',
      km: '`git clone <repository-url>` ទាញយក Project ដែលមានស្រាប់លើ GitHub មកកុំព្យូទ័ររបស់អ្នក រួមទាំងប្រវត្តិកូដ និង ការកំណត់ Remote Origin ទាំងអស់ដោយស្វ័យប្រវត្តិ។'
    },
    tutorial: {
      en: '- Clone via HTTPS:\n  `git clone https://github.com/facebook/react.git` \n- Navigate into cloned directory:\n  `cd react` \n- Check branch & status:\n  `git status`',
      km: '- Clone តាម HTTPS៖\n  `git clone https://github.com/facebook/react.git` \n- បើក Folder ដែល Clone បាន៖\n  `cd react` \n- ពិនិត្យស្ថានភាព៖\n  `git status` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .cmd { color: #facc15; }
    .output { color: #38bdf8; margin-top: 6px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ git clone https://github.com/facebook/react.git</div>
    <div class="output">
Cloning into 'react'...
remote: Enumerating objects: 225430, done.
remote: Counting objects: 100% (89/89), done.
remote: Compressing objects: 100% (62/62), done.
remote: Total 225430 (delta 35), reused 54 (delta 25)
Receiving objects: 100% (225430/225430), 115.42 MiB | 12.5 MiB/s, done.
Resolving deltas: 100% (158420/158420), done.
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Onboarding New Team Members',
        km: 'ការចាប់ផ្តើមធ្វើការងាររបស់បុគ្គលិកថ្មី'
      },
      description: {
        en: 'When joining a new engineering team, developers clone the team repository onto their laptop to get the entire codebase running in minutes.',
        km: 'នៅពេលចូលធ្វើការក្នុងក្រុមហ៊ុនថ្មី បុគ្គលិកគ្រាន់តែ clone គម្រោងមក កុំព្យូទ័រខ្លួនឯង គឺអាចចាប់ផ្តើមសរសេរកូដបានភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Write the command to clone a repository located at `https://github.com/vuejs/core.git`.',
        km: 'សរសេរ Command ដើម្បី Clone Repository តាម URL `https://github.com/vuejs/core.git`'
      },
      solution: 'git clone https://github.com/vuejs/core.git'
    },
    quizQuestions: [
      {
        id: 'git-q15',
        question: {
          en: 'Which command downloads a full copy of a remote GitHub repository to your local disk?',
          km: 'តើ Command មួយណាដែលទាញយក Project ទាំងមូលពី GitHub មកកាន់ កុំព្យូទ័រ?'
        },
        options: [
          { id: '1', text: { en: 'git clone', km: 'git clone' }, isCorrect: true },
          { id: '2', text: { en: 'git copy', km: 'git copy' }, isCorrect: false },
          { id: '3', text: { en: 'git download', km: 'git download' }, isCorrect: false }
        ],
        explanation: {
          en: '`git clone` copies the repo, its history, and sets up remote `origin`.',
          km: '`git clone` ចម្លង Repo រួមទាំងប្រវត្តិកូដទាំងអស់។'
        }
      }
    ]
  }
];
