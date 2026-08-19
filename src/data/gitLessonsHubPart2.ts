import { FrontendLesson } from '../types/frontendClass';

export const GIT_LESSONS_PART2: FrontendLesson[] = [
  // ==========================================
  // MODULE 5: Pull Requests
  // ==========================================
  {
    id: 'git-l16',
    slug: 'what-is-a-pull-request',
    moduleNumber: 5,
    lessonNumberInModule: 1,
    title: {
      en: '5.1 What is a Pull Request & Why Teams Use Them',
      km: '5.1 យល់ដឹងអំពី Pull Request & ការងារក្រុម'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A Pull Request (PR) is a notification mechanism on GitHub asking teammates to review and approve proposed code changes from a feature branch before merging into the main branch.',
      km: 'Pull Request (PR) គឺជាការស្ើសុំសមាជិកក្រុម ឬ Senior Developer ឱ្យជួយពិនិត្យ និង អនុម័តកូដដែលអ្នកបានសរសេរលើ Feature Branch មុនពេល Merge ចូលក្នុង Main Branch។'
    },
    tutorial: {
      en: '- Direct pushing to `main` risk:\n  Can introduce breaking bugs directly into live production sites.\n- Pull Request workflow benefit:\n  Enforces peer code review, automated CI tests, and architectural discussion before code reaches main.',
      km: '- ហានិភ័យនៃ Push ចូល `main` ផ្ទាល់៖\n  អាចបង្កឱ្យបាក់ Web (Break Production Website) ភ្លាមៗ។\n- អត្ថប្រយោជន៍នៃ PR Workflow៖\n  តម្រូវឱ្យមានការស៊ើបអង្កេត Review កូដពីក្រុម និង Run តេស្តស្វ័យប្រវត្តិកុំឱ្យមាន Bug។'
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
    .status { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">🔀 GitHub Pull Request #42 Overview</div>
    <div>Title: <span style="color:#facc15">feat(auth): add Google & GitHub OAuth buttons</span></div>
    <div>Author: @dev-sokchan</div>
    <div>Branch: <span style="color:#a855f7">feature/oauth-login</span> -> <span style="color:#38bdf8">main</span></div>
    <br/>
    <div>Review status: <span class="status">✅ Approved by 2 Senior Engineers</span></div>
    <div>CI Status: <span class="status">✅ All tests passed (12/12)</span></div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Quality Assurance Gatekeeper',
        km: 'ទ្វារការពារគុណភាពកូដក្នុងក្រុមហ៊ុន'
      },
      description: {
        en: 'In modern software companies, branch protection rules prevent ANY developer from pushing code directly to `main` without an approved PR.',
        km: 'ក្នុងក្រុមហ៊ុនបច្ចេកវិទ្យា ច្បាប់ Branch Protection ការពារមិនឱ្យ Developer ណា Push ចូល `main` ផ្ទាល់ដោយគ្មាន PR ឡើយ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What is the primary objective of a Pull Request review?',
        km: 'តើអ្វីជាគោលបំណងចម្បងនៃការធ្វើ Pull Request Review?'
      },
      solution: 'To ensure code quality, catch potential bugs, verify logic, and share knowledge across team members before merging.'
    },
    quizQuestions: [
      {
        id: 'git-q16',
        question: {
          en: 'Why do engineering teams mandate Pull Requests instead of pushing directly to `main`?',
          km: 'ហេតុអ្វីបានជាក្រុម Developer បង្ខំឱ្យប្រើ Pull Request ជំនួសឱ្យ Push ចូល `main` ផ្ទាល់?'
        },
        options: [
          { id: '1', text: { en: 'To enforce peer code review, catch bugs early, and run automated tests', km: 'ដើម្បីពិនិត្យកូដជាក្រុម ការពារ Bug និង រត់តេស្តស្វ័យប្រវត្តិ' }, isCorrect: true },
          { id: '2', text: { en: 'Because GitHub charges money for direct pushes', km: 'ព្រោះ GitHub គិតលុយបើ Push ផ្ទាល់' }, isCorrect: false },
          { id: '3', text: { en: 'To compress PNG images', km: 'ដើម្បីបង្រួមរូបភាព' }, isCorrect: false }
        ],
        explanation: {
          en: 'PRs protect main branch stability and maintain code quality standards.',
          km: 'PR ការពារ `main` ឱ្យមានសុវត្ថិភាពខ្ពស់។'
        }
      }
    ]
  },

  {
    id: 'git-l17',
    slug: 'opening-a-pull-request-on-github',
    moduleNumber: 5,
    lessonNumberInModule: 2,
    title: {
      en: '5.2 Opening a Pull Request on GitHub',
      km: '5.2 របៀបបង្កើត Pull Request លើ GitHub'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'After pushing your feature branch to GitHub (`git push -u origin feature/xyz`), navigate to your repo page on GitHub, click "Compare & pull request", fill out the summary description, and submit.',
      km: 'បន្ទាប់ពី Push Feature Branch ទៅកាន់ GitHub រួចរាល់ អ្នកគ្រាន់តែបើកគេហទំព័រ Repo លើ GitHub ចុច "Compare & pull request" សរសេរការរៀបរាប់ និងចុច Submit។'
    },
    tutorial: {
      en: '- Step 1: Push feature branch:\n  `git push -u origin feature/add-cart` \n- Step 2: Open GitHub repository page in browser.\n- Step 3: Click yellow banner "Compare & pull request".\n- Step 4: Write clear description & click "Create pull request".',
      km: '- ជំហានទី ១៖ Push Feature Branch៖\n  `git push -u origin feature/add-cart` \n- ជំហានទី ២៖ បើកគេហទំព័រ GitHub Repo។\n- ជំហានទី ៣៖ ចុចប៊ូតុងលឿង "Compare & pull request"។\n- ជំហានទី ៤៖ សរសេរការរៀបរាប់ និងចុច "Create pull request"។'
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
    <div class="cmd">$ git push -u origin feature/shopping-cart</div>
    <div class="output">
To https://github.com/dev/my-app.git
 * [new branch]      feature/shopping-cart -> feature/shopping-cart
Branch 'feature/shopping-cart' set up to track remote branch 'feature/shopping-cart' from 'origin'.
<br/>
<span style="color:#4ade80">Create a pull request for 'feature/shopping-cart' on GitHub by visiting:</span>
<span style="color:#facc15">https://github.com/dev/my-app/pull/new/feature/shopping-cart</span>
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'PR Template Standards',
        km: 'ទម្រង់សរសេរ PR ក្នុងក្រុមហ៊ុន'
      },
      description: {
        en: 'Good PRs include screenshots/videos of UI changes, links to Jira/Trello issue tickets, and bullet points detailing modified files.',
        km: 'PR ដែលល្អ គួររួមបញ្ចូល រូបភាព Screenshot នៃ UI ថ្មី ដំណភ្ជាប់ទៅកាន់ Jira/Trello និង ការរៀបរាប់ចំណុចសំខាន់ៗដែលបានកែ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What CLI helper link does Git display in terminal output after pushing a new branch for the first time?',
        km: 'តើ Git បង្ហាញ Link អ្វីក្នុង Terminal បន្ទាប់ពី Push Branch ថ្មីលើកដំបូង?'
      },
      solution: 'A direct GitHub URL link to quickly create a pull request for that pushed branch.'
    },
    quizQuestions: [
      {
        id: 'git-q17',
        question: {
          en: 'What must you do BEFORE you can open a Pull Request on GitHub?',
          km: 'តើអ្នកត្រូវធ្វើអ្វីខ្លះជាមុន មុនពេលអាចបង្កើត Pull Request លើ GitHub បាន?'
        },
        options: [
          { id: '1', text: { en: 'Commit your local changes and push the branch to GitHub', km: 'Commit ការកែប្រែកូដ និង Push Branch នោះទៅកាន់ GitHub' }, isCorrect: true },
          { id: '2', text: { en: 'Delete your local repository', km: 'លុប Local Repository ចោល' }, isCorrect: false },
          { id: '3', text: { en: 'Reinstall Windows operating system', km: 'ដំឡើង Windows ឡើងវិញ' }, isCorrect: false }
        ],
        explanation: {
          en: 'You must push the branch containing your commits up to GitHub first.',
          km: 'អ្នកត្រូវ Push Branch ដែលមាន Commits ទៅ GitHub ជាមុនសិន។'
        }
      }
    ]
  },

  {
    id: 'git-l18',
    slug: 'reviewing-and-commenting-on-a-pr',
    moduleNumber: 5,
    lessonNumberInModule: 3,
    title: {
      en: '5.3 Reviewing & Commenting on a PR',
      km: '5.3 ការពិនិត្យ និង Comment លើ PR'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'In code reviews, teammates inspect the "Files changed" diff tab line-by-line, leave feedback or suggest changes, and select "Approve" or "Request changes".',
      km: 'ក្នុង Code Review សមាជិកក្រុមបើកមើល Tab "Files changed" ដើម្បីពិនិត្យបន្ទាត់កូដដែលបានផ្លាស់ប្តូរ បញ្ចេញមតិ (Comment) ឬ ចុច "Approve" ឬ "Request changes"។'
    },
    tutorial: {
      en: '- Step 1: Open PR -> Click "Files changed" tab.\n- Step 2: Hover over a line of code -> Click blue "+" icon to add inline comment.\n- Step 3: Click "Review changes" -> Choose "Approve" or "Request changes".',
      km: '- ជំហានទី ១៖ បើក PR -> ចុច Tab "Files changed"។\n- ជំហានទី ២៖ យក Mouse ចុចសញ្ញា "+" លើបន្ទាត់កូដដើម្បីសរសេរ Comment។\n- ជំហានទី ៣៖ ចុច "Review changes" -> ជ្រើសរើស "Approve" ឬ "Request changes"។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .add { color: #4ade80; background: rgba(74,222,128,0.1); }
    .del { color: #f87171; background: rgba(248,113,113,0.1); }
    .comment { color: #38bdf8; border-left: 2px solid #38bdf8; padding-left: 10px; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="term">
    <div style="color:#94a3b8">@@ -15,4 +15,6 @@ function calculateTotal(items)</div>
    <div class="del">-  return items.reduce((a,b) => a + b, 0);</div>
    <div class="add">+  // Added tax calculation</div>
    <div class="add">+  const subtotal = items.reduce((a,b) => a + b, 0);</div>
    <div class="add">+  return subtotal * 1.1;</div>
    <div class="comment">💬 @senior-lead: "Please extract 1.1 into a TAX_RATE constant file!"</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Constructive Peer Feedback',
        km: 'ការចែករំលែកចំណេះដឹងតាម Code Review'
      },
      description: {
        en: 'Code reviews are essential learning opportunities where senior engineers teach best practice patterns, edge cases, and performance optimizations to junior developers.',
        km: 'Code Review គឺជាឱកាសដ៏ល្អដែល Senior Engineers ចែករំលែកបទពិសោធន៍ បង្រៀនក្បួនសរសេរកូដស្អាតដល់ Junior Developers។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Where on GitHub can you view exact line-by-line code insertions and deletions in a Pull Request?',
        km: 'តើអ្នកអាចពិនិត្យមើលការបន្ថែម និងលុបបន្ទាត់កូដក្នុង PR នៅត្រង់ណាលើ GitHub?'
      },
      solution: 'Under the "Files changed" tab of the Pull Request.'
    },
    quizQuestions: [
      {
        id: 'git-q18',
        question: {
          en: 'Which review verdict signals to GitHub that you endorse merging the PR into main?',
          km: 'តើការជ្រើសរើសមួយណាពេល Review ដែលបញ្ជាក់ថាអ្នកយល់ព្រមឱ្យ Merge PR ចូល main?'
        },
        options: [
          { id: '1', text: { en: 'Approve', km: 'Approve' }, isCorrect: true },
          { id: '2', text: { en: 'Request changes', km: 'Request changes' }, isCorrect: false },
          { id: '3', text: { en: 'Comment only', km: 'Comment only' }, isCorrect: false }
        ],
        explanation: {
          en: 'An "Approve" verdict counts towards branch protection authorization requirements.',
          km: 'ការចុច "Approve" គឺជាការយល់ព្រមអនុញ្ញាតឱ្យ Merge។'
        }
      }
    ]
  },

  {
    id: 'git-l19',
    slug: 'merging-a-pull-request',
    moduleNumber: 5,
    lessonNumberInModule: 4,
    title: {
      en: '5.4 Merging a Pull Request',
      km: '5.4 ការ Merge Pull Request ចូល Main'
    },
    durationMinutes: 10,
    difficulty: 'Intermediate',
    explanation: {
      en: 'Once all review comments are addressed and approval is granted, click the green "Merge pull request" button on GitHub, then optionally delete the remote branch.',
      km: 'នៅពេល Comment ត្រូវបានដោះស្រាយ និងទទួលបានការ Approve រួចរាល់ អ្នកគ្រាន់តែចុចប៊ូតុងបៃតង "Merge pull request" លើ GitHub ហើយលុប Remote Branch ចោលបាន។'
    },
    tutorial: {
      en: '- Step 1: Confirm green checkmark "This branch has no conflicts with the base branch".\n- Step 2: Click "Merge pull request" -> "Confirm merge".\n- Step 3: Click "Delete branch" button to keep GitHub clean.\n- Step 4: Locally pull changes: `git switch main && git pull`',
      km: '- ជំហានទី ១៖ ផ្ទៀងផ្ទាត់សញ្ញាគ្រីសបៃតង "This branch has no conflicts".\n- ជំហានទី ២៖ ចុច "Merge pull request" -> "Confirm merge"។\n- ជំហានទី ៣៖ ចុច "Delete branch" លើ GitHub។\n- ជំហានទី ៤៖ Pull កូដថ្មីមក Computer៖ `git switch main && git pull` '
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .merged { color: #a855f7; font-weight: bold; font-size: 16px; }
    .cmd { color: #facc15; margin-top: 10px; }
    .output { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="merged">🟣 Pull Request #42 Merged and Closed!</div>
    <div style="color:#94a3b8; margin-top:4px">Merged commit e5f6g7h into main</div>
    <br/>
    <div class="cmd">$ git switch main && git pull origin main</div>
    <div class="output">
Switched to branch 'main'
From https://github.com/dev/my-app
 * branch            main       -> FETCH_HEAD
Updating a1b2c3d..e5f6g7h
Fast-forward
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Closing the Feature Loop',
        km: 'ការបញ្ចប់រង្វង់ការងារ Feature'
      },
      description: {
        en: 'Merging a PR triggers automated deployment pipelines (CI/CD) that build and deploy the newly merged code directly to live servers.',
        km: 'ការ Merge PR បញ្ចប់ដំណើរការកូដ និង ដើរប្រព័ន្ធ CI/CD ដំឡើង Website ផ្ទាល់លើ Server។'
      }
    },
    practiceExercise: {
      question: {
        en: 'After merging a PR on GitHub, what command should you run locally on your machine to sync your local `main` branch?',
        km: 'បន្ទាប់ពី Merge PR លើ GitHub តើ Command អ្វីដែលអ្នកត្រូវវាយលើ Computer ដើម្បី Update Local `main`?'
      },
      solution: 'git switch main && git pull'
    },
    quizQuestions: [
      {
        id: 'git-q19',
        question: {
          en: 'What should you do locally after a Pull Request is successfully merged into `main` on GitHub?',
          km: 'តើអ្នកគួរធ្វើអ្វីលើ Computer បន្ទាប់ពី PR ត្រូវបាន Merge ចូល `main` លើ GitHub រួចរាល់?'
        },
        options: [
          { id: '1', text: { en: 'Switch to local main branch and run `git pull` to fetch the merged changes', km: 'Switch ទៅកាន់ Local main branch និងវាយ `git pull` ដើម្បីទាញយកកូដថ្មី' }, isCorrect: true },
          { id: '2', text: { en: 'Re-initialize git using `git init`', km: 'វាយ `git init` ឡើងវិញ' }, isCorrect: false },
          { id: '3', text: { en: 'Delete your GitHub account', km: 'លុប Account GitHub' }, isCorrect: false }
        ],
        explanation: {
          en: '`git pull` updates your local main branch with the newly merged remote commits.',
          km: '`git pull` ទាញយកកូដដែលទើបតែ Merge រួចមកកុំព្យូទ័ររបស់អ្នក។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 6: Resolving Merge Conflicts
  // ==========================================
  {
    id: 'git-l20',
    slug: 'why-merge-conflicts-happen',
    moduleNumber: 6,
    lessonNumberInModule: 1,
    title: {
      en: '6.1 Why Merge Conflicts Happen',
      km: '6.1 មូលហេតុដែលនាំឱ្យកើត Merge Conflicts'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'A Merge Conflict occurs when Git cannot automatically reconcile differences between two commits because two developers modified the EXACT same lines in a file in conflicting ways.',
      km: 'Merge Conflict កើតឡើងនៅពេលដែល Git មិនអាច Merge កូដដោយស្វ័យប្រវត្តិបាន ដោយសារ Developer ២ នាក់ បានកែប្រែកូដលើបន្ទាត់ និង File តែមួយក្នុងពេលដំណាលគ្នា។'
    },
    tutorial: {
      en: '- Cause Scenario:\n  Developer A edits line 10 in `index.html` on `main` branch and pushes.\n  Developer B edits line 10 in `index.html` on `feature` branch.\n- When Developer B merges feature into main, Git halts and asks Developer B to resolve line 10 manually!',
      km: '- មូលហេតុ៖\n  Developer A កែបន្ទាត់ ១០ ក្នុង `index.html` លើ `main`\n  Developer B កែបន្ទាត់ ១០ ក្នុង `index.html` លើ `feature`\n- ពេល Merge បញ្ចូលគ្នា Git នឹងគាំង ហើយតម្រូវឱ្យជ្រើសរើសយកកូដមួយណាជារៀងរាល់បន្ទាត់!'
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
    .err { color: #f87171; font-weight: bold; }
  </style>
</head>
<body>
  <div class="term">
    <div class="cmd">$ git merge feature/header-redesign</div>
    <div class="err">
Auto-merging src/components/Navbar.js
CONFLICT (content): Merge conflict in src/components/Navbar.js
Automatic merge failed; fix conflicts and then commit the result.
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Normal Part of Software Engineering',
        km: 'រឿងធម្មតាក្នុងការងារអភិវឌ្ឍន៍ Software'
      },
      description: {
        en: 'Merge conflicts are not dangerous errors; they are simply Git\'s safe way of asking humans to clarify which version of the code is correct.',
        km: 'Merge Conflicts មិនមែនជា Error គ្រោះថ្នាក់ទេ វាគ្រាន់តែជាការសួរនាំរបស់ Git ដើម្បីឱ្យមនុស្សជាអ្នកសម្រេចចិត្តជ្រើសរើសកូដដែលត្រូវ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Under what specific circumstance does Git trigger a merge conflict?',
        km: 'តើស្ថិតក្នុងស្ថានភាពណាដែល Git បង្កើត Merge Conflict?'
      },
      solution: 'When two commits modify the exact same lines of code in conflicting ways, and Git cannot auto-determine which line takes priority.'
    },
    quizQuestions: [
      {
        id: 'git-q20',
        question: {
          en: 'Why does Git stop and report a merge conflict instead of making a guess?',
          km: 'ហេតុអ្វីបានជា Git បញ្ឈប់ និងប្រាប់ថាមាន Conflict ជំនួសឱ្យការស្មានជ្រើសរើសកូដដោយខ្លួនឯង?'
        },
        options: [
          { id: '1', text: { en: 'To prevent silently overwriting or breaking another developer\'s code logic', km: 'ដើម្បីការពារកុំឱ្យលុប ឬ បំផ្លាញកូដរបស់ Developer ម្នាក់ទៀតដោយមិនដឹងខ្លួន' }, isCorrect: true },
          { id: '2', text: { en: 'Because Git runs out of memory', km: 'ព្រោះ Git អស់ Memory' }, isCorrect: false },
          { id: '3', text: { en: 'Because your internet disconnected', km: 'ព្រោះដាច់ អ៊ីនធឺណិត' }, isCorrect: false }
        ],
        explanation: {
          en: 'Git prioritizes safety over blind guessing when code lines diverge.',
          km: 'Git ផ្តល់អាទិភាពលើ សុវត្ថិភាពកូដជាចម្បង។'
        }
      }
    ]
  },

  {
    id: 'git-l21',
    slug: 'reading-conflict-markers',
    moduleNumber: 6,
    lessonNumberInModule: 2,
    title: {
      en: '6.2 Reading Conflict Markers (<<<<<<<, =======, >>>>>>>)',
      km: '6.2 ការអាន Conflict Markers (<<<<<<<, =======, >>>>>>>)'
    },
    durationMinutes: 15,
    difficulty: 'Advanced',
    explanation: {
      en: 'When a conflict occurs, Git writes conflict marker symbols directly into the file: `<<<<<<< HEAD` (your current branch code), `=======` (separator), and `>>>>>>> branch-name` (incoming branch code).',
      km: 'នៅពេលមាន conflict, Git សរសេរសញ្ញាសម្គាល់ចូលក្នុង File ដោយផ្ទាល់៖ `<<<<<<< HEAD` (កូដលើ Branch អ្នកកំពុងឈរ), `=======` (របាំងខណ្ឌ), និង `>>>>>>> branch-name` (កូដដែលចង់ Merge ចូល)។'
    },
    tutorial: {
      en: '- `<<<<<<< HEAD`: Starts current branch changes.\n- `=======`: Separator between current and incoming code.\n- `>>>>>>> feature/new-ui`: Ends incoming branch changes.',
      km: '- `<<<<<<< HEAD`: ចាប់ផ្តើមកូដលើ Branch បច្ចុប្បន្ន។\n- `=======`: របាំងខណ្ឌចែករវាងកូដទាំងពីរ។\n- `>>>>>>> feature/new-ui`: បញ្ចប់កូដដែលចង់ Merge ចូល។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .head { color: #38bdf8; background: rgba(56,189,248,0.1); }
    .incoming { color: #a855f7; background: rgba(168,85,247,0.1); }
    .sep { color: #facc15; font-weight: bold; }
  </style>
</head>
<body>
  <div class="term">
    <div>function renderHeader() {</div>
    <div class="head">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Current Change)</div>
    <div class="head">  return &lt;h1 class="text-blue-500"&gt;Welcome Back&lt;/h1&gt;;</div>
    <div class="sep">=======</div>
    <div class="incoming">  return &lt;h1 class="text-indigo-600 font-bold"&gt;Welcome User&lt;/h1&gt;;</div>
    <div class="incoming">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/ui-refresh (Incoming Change)</div>
    <div>}</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'VS Code Conflict Helpers',
        km: 'ឧបករណ៍ដោះស្រាយ Conflict ក្នុង VS Code'
      },
      description: {
        en: 'VS Code automatically highlights conflict blocks with clickable buttons: "Accept Current Change", "Accept Incoming Change", or "Accept Both Changes".',
        km: 'VS Code មានប៊ូតុងជំនួយស្វ័យប្រវត្តិដូចជា "Accept Current Change", "Accept Incoming Change", ឬ "Accept Both Changes" ងាយស្រួលចុចជ្រើសរើស។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What marker separates the current branch code from the incoming branch code during a merge conflict?',
        km: 'តើសញ្ញាសម្គាល់មួយណាដែលខណ្ឌចែករវាងកូដបច្ចុប្បន្ន និងកូដថ្មីពេលមាន conflict?'
      },
      solution: '======='
    },
    quizQuestions: [
      {
        id: 'git-q21',
        question: {
          en: 'In a Git conflict marker block, what does `<<<<<<< HEAD` represent?',
          km: 'ក្នុង Block Conflict Marker តើ `<<<<<<< HEAD` តំណាងឱ្យអ្វី?'
        },
        options: [
          { id: '1', text: { en: 'The code existing on your currently active target branch', km: 'កូដដែលមានស្រាប់លើ Branch បច្ចុប្បន្នរបស់អ្នក' }, isCorrect: true },
          { id: '2', text: { en: 'An error from GitHub server', km: 'Error ពី GitHub Server' }, isCorrect: false },
          { id: '3', text: { en: 'A deleted file marker', km: 'សញ្ញាសម្គាល់ File ដែលបានលុប' }, isCorrect: false }
        ],
        explanation: {
          en: '`HEAD` points to the tip commit of your currently checked-out branch.',
          km: '`HEAD` តំណាងឱ្យ Commit លើ Branch បច្ចុប្បន្នរបស់អ្នក។'
        }
      }
    ]
  },

  {
    id: 'git-l22',
    slug: 'resolving-conflicts-manually',
    moduleNumber: 6,
    lessonNumberInModule: 3,
    title: {
      en: '6.3 Resolving Conflicts & Completing the Merge',
      km: '6.3 ការដោះស្រាយ Conflict ដោយដៃ និងប្រគល់កូដ'
    },
    durationMinutes: 20,
    difficulty: 'Advanced',
    explanation: {
      en: 'To resolve a conflict: 1) Edit the file to keep desired code lines and remove all conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), 2) Stage the file via `git add .`, and 3) Finalize with `git commit`.',
      km: 'ដើម្បីដោះស្រាយ conflict៖ ១) កែប្រែ File ដោយរក្សាតែកូដត្រឹមត្រូវ និង លុបសញ្ញា conflict markers ចោលទាំងអស់, ២) វាយ `git add .`, និង ៣) បញ្ចប់ដោយ `git commit`។'
    },
    tutorial: {
      en: '- Step 1: Open file, edit code to final state, remove marker lines.\n- Step 2: Stage resolved file:\n  `git add src/components/Navbar.js` \n- Step 3: Complete merge commit:\n  `git commit -m "fix: resolve merge conflict in Navbar component"`',
      km: '- ជំហានទី ១៖ បើក File ជ្រើសរើសកូដ និងលុបសញ្ញា Conflict Markers ចោល។\n- ជំហានទី ២៖ វាយ Stage ឯកសារ៖\n  `git add src/components/Navbar.js` \n- ជំហានទី ៣៖ Commit បញ្ចប់ Merge៖\n  `git commit -m "fix: resolve merge conflict in Navbar component"`'
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
    <div class="cmd">$ git add src/components/Navbar.js</div>
    <div class="cmd">$ git commit -m "fix: resolve navbar merge conflict"</div>
    <div class="output">
[main e5f6g7h] fix: resolve navbar merge conflict
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Testing After Conflict Resolution',
        km: 'ការធ្វើតេស្តកូដក្រោយដោះស្រាយ Conflict'
      },
      description: {
        en: 'Always run your local test suite or web server (`npm run dev`) immediately after resolving conflicts to verify the application still compiles cleanly.',
        km: 'ត្រូវរត់តេស្ត ឬ បើក Web Server (`npm run dev`) ភ្លាមៗបន្ទាប់ពីដោះស្រាយ Conflict រួច ដើម្បីប្រាកដថា Web ដើរស្រួល។'
      }
    },
    practiceExercise: {
      question: {
        en: 'After deleting conflict markers and saving your file, what command tells Git that the conflict in that file is resolved?',
        km: 'បន្ទាប់ពីលុប Conflict markers និង Save file រួច តើ Command មួយណាដែលប្រាប់ Git ថា Conflict ត្រូវ បានដោះស្រាយរួចរាល់?'
      },
      solution: 'git add <filename>'
    },
    quizQuestions: [
      {
        id: 'git-q22',
        question: {
          en: 'What are the exact 3 steps to finalize a merge conflict resolution?',
          km: 'តើ ៣ ជំហានត្រឹមត្រូវដើម្បីបញ្ចប់ការដោះស្រាយ Merge Conflict មានអ្វីខ្លះ?'
        },
        options: [
          { id: '1', text: { en: 'Edit file to remove markers -> `git add` -> `git commit`', km: 'កែ File លុប markers -> `git add` -> `git commit` ' }, isCorrect: true },
          { id: '2', text: { en: '`git reset --hard` -> `git push` -> `git status`', km: '`git reset --hard` -> `git push` -> `git status` ' }, isCorrect: false },
          { id: '3', text: { en: 'Delete project folder and clone again', km: 'លុប Project Folder ហើយ Clone ឡើងវិញ' }, isCorrect: false }
        ],
        explanation: {
          en: 'Editing code, staging, and committing completes the conflict resolution cycle.',
          km: 'ការកែប្រែកូដ Stage និង Commit បញ្ចប់ការដោះស្រាយ Conflict។'
        }
      }
    ]
  },

  // ==========================================
  // MODULE 7: .gitignore & Best Practices
  // ==========================================
  {
    id: 'git-l23',
    slug: 'what-is-gitignore',
    moduleNumber: 7,
    lessonNumberInModule: 1,
    title: {
      en: '7.1 What is .gitignore & Why it is Essential',
      km: '7.1 អ្វីទៅជា .gitignore និងសារៈសំខាន់របស់វា'
    },
    durationMinutes: 15,
    difficulty: 'Beginner',
    explanation: {
      en: 'A `.gitignore` file specifies intentionally untracked files that Git should ignore (e.g. `node_modules/`, build outputs like `dist/`, OS system files like `.DS_Store`, and environment secret files like `.env`).',
      km: '` .gitignore` គឺជា File ពិសេសដែលប្រាប់ Git កុំឱ្យតាមដាន ឬ Commit ឯកសារធ្ងន់ៗ ឬ ឯកសារសម្ងាត់ (ដូចជា `node_modules/`, `dist/`, `.DS_Store`, និង `.env`)។'
    },
    tutorial: {
      en: '- Create `.gitignore` file in project root.\n- Add rules line-by-line.\n- Git will completely hide ignored files from `git status` lists!',
      km: '- បង្កើត `.gitignore` file ក្នុង Root Folder។\n- សរសេរឈ្មោះ Folder/File មួយបន្ទាត់ៗ។\n- Git នឹងឈប់បង្ហាញឯកសារទាំងនោះក្នុង `git status`។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .comment { color: #64748b; }
    .rule { color: #facc15; }
  </style>
</head>
<body>
  <div class="term">
    <div class="comment"># Dependencies (Huge folders)</div>
    <div class="rule">node_modules/</div>
    <br/>
    <div class="comment"># Build Output</div>
    <div class="rule">dist/</div>
    <div class="rule">build/</div>
    <br/>
    <div class="comment"># Environment Secrets & Keys</div>
    <div class="rule">.env</div>
    <div class="rule">.env.local</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Preventing Repo Bloat',
        km: 'ការការពារ Repo កុំឱ្យធ្ងន់ពេក'
      },
      description: {
        en: 'Without `.gitignore`, pushing `node_modules` (500MB+) makes cloning extremely slow and clutters git repository history unnecessarily.',
        km: 'បើគ្មាន `.gitignore` ការ Push `node_modules` (500MB+) នឹងធ្វើឱ្យ Repo ធ្ងន់ យឺត និងពិបាក Clone។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Name two critical items that should ALWAYS be listed inside a frontend `.gitignore` file.',
        km: 'ប្រាប់ឈ្មោះ ២ យ៉ាងដែលត្រូវតែមានក្នុង `.gitignore` របស់ Frontend Project ជានិច្ច។'
      },
      solution: 'node_modules/ and .env'
    },
    quizQuestions: [
      {
        id: 'git-q23',
        question: {
          en: 'Why must `node_modules/` never be committed to a Git repository?',
          km: 'ហេតុអ្វីបានជាមិនត្រូវ Commit `node_modules/` ចូលក្នុង Git Repository ជាដាច់ខាត?'
        },
        options: [
          { id: '1', text: { en: 'Because it contains thousands of generated vendor files easily restored via `npm install`', km: 'ព្រោះវាមាន File រាប់ពាន់ដែលគេអាចទាញយកឡើងវិញបានងាយតាម `npm install`' }, isCorrect: true },
          { id: '2', text: { en: 'Because Git bans folders starting with letter n', km: 'ព្រោះ Git ហាម Folder ផ្តើមដោយអក្សរ n' }, isCorrect: false },
          { id: '3', text: { en: 'To delete npm', km: 'ដើម្បីលុប npm' }, isCorrect: false }
        ],
        explanation: {
          en: 'Package managers rebuild dependencies automatically based on package.json.',
          km: 'Package managers ទាញយក dependencies ដោយស្វ័យប្រវត្តិតាម package.json។'
        }
      }
    ]
  },

  {
    id: 'git-l24',
    slug: 'writing-a-gitignore-for-frontend',
    moduleNumber: 7,
    lessonNumberInModule: 2,
    title: {
      en: '7.2 Writing a .gitignore for Frontend Projects',
      km: '7.2 ការសរសេរ .gitignore សម្រាប់ Frontend Projects'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'A standard frontend `.gitignore` covers Node dependencies (`node_modules`), build output directories (`dist`, `.next`, `build`), environment variables (`.env*`), and OS system log files (`.DS_Store`, `npm-debug.log`).',
      km: '`.gitignore` ស្តង់ដារសម្រាប់ Frontend រួមមាន Node dependencies (`node_modules`), build directories (`dist`, `.next`), environment variables (`.env*`), និង OS logs (`.DS_Store`)។'
    },
    tutorial: {
      en: '- Example `.gitignore` file lines:\n  `node_modules/` \n  `dist/` \n  `.env` \n  `.env.local` \n  `.DS_Store` \n  `*.log`',
      km: '- ឧទាហរណ៍បន្ទាត់ក្នុង `.gitignore`៖\n  `node_modules/` \n  `dist/` \n  `.env` \n  `.env.local` \n  `.DS_Store` \n  `*.log` '
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
    <div class="cmd">$ cat .gitignore</div>
    <div class="output">
# Logs
*.log
npm-debug.log*

# Dependency directories
node_modules/

# Production build outputs
/dist
/build
/.next/

# Environment secrets
.env
.env*.local

# Editor directories
.vscode/*
!.vscode/settings.json
.DS_Store
    </div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Using .env.example as Template',
        km: 'ការប្រើប្រាស់ .env.example ជាគំរូ'
      },
      description: {
        en: 'Developers gitignore real `.env` secrets, but commit a safe `.env.example` file so teammates know which environment keys need configuration.',
        km: 'Developer ignore `.env` សម្ងាត់ ប៉ុន្តែ Commit ឯកសារ `.env.example` ដើម្បីប្រាប់ក្រុមពីឈ្មោះ Key ដែលត្រូវប្រើ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'What pattern wildcard rule in `.gitignore` ignores all log files ending in `.log`?',
        km: 'តើសញ្ញា Wildcard មួយណាដែល ignore រាល់ File ទាំងអស់ដែលបញ្ចប់ដោយ `.log`?'
      },
      solution: '*.log'
    },
    quizQuestions: [
      {
        id: 'git-q24',
        question: {
          en: 'How do you ignore an entire directory named `dist` in `.gitignore`?',
          km: 'តើអ្នកសរសេរដូចម្តេចដើម្បី ignore Folder ឈ្មោះ `dist` ទាំងមូលក្នុង `.gitignore`?'
        },
        options: [
          { id: '1', text: { en: 'dist/', km: 'dist/' }, isCorrect: true },
          { id: '2', text: { en: 'delete dist', km: 'delete dist' }, isCorrect: false },
          { id: '3', text: { en: 'ignore dist', km: 'ignore dist' }, isCorrect: false }
        ],
        explanation: {
          en: 'Adding a trailing slash `dist/` targets the folder and all its contents.',
          km: 'ការថែម សញ្ញាជ្រុង `dist/` សម្គាល់ការ ignore លើ Folder ទាំងមូល។'
        }
      }
    ]
  },

  {
    id: 'git-l25',
    slug: 'git-security-and-best-practices',
    moduleNumber: 7,
    lessonNumberInModule: 3,
    title: {
      en: '7.3 Git Security & Best Practices (Never Commit Credentials)',
      km: '7.3 ក្បួនប្រតិបត្តិល្អបំផុត និងការរក្សាការសម្ងាត់'
    },
    durationMinutes: 15,
    difficulty: 'Intermediate',
    explanation: {
      en: 'NEVER commit API keys, passwords, database credentials, or private SSH keys to Git. Once pushed to public GitHub repositories, automated bots steal credentials within seconds!',
      km: 'ហាម Commit API Keys, Passwords, Database Credentials ឬ Private Keys ចូល Git ជាដាច់ខាត! បើ Push ទៅ Public GitHub នោះ Bot នឹងលួចយក Key នោះភ្លាមៗក្នុងពេលប៉ុន្មានវិនាទី!'
    },
    tutorial: {
      en: '- Best Practice 1: Keep commits small, atomic, and single-purpose.\n- Best Practice 2: Write clear Conventional Commit messages.\n- Best Practice 3: Store API keys in `.env` and list `.env` inside `.gitignore`.\n- Best Practice 4: Always pull before pushing (`git pull --rebase`).',
      km: '- ក្បួនទី ១៖ Commit បន្តិចៗ រាល់ពេលធ្វើ Feature បានមួយៗ។\n- ក្បួនទី ២៖ សរសេរ Commit Message ឱ្យច្បាស់លាស់តាមស្តង់ដារ។\n- ក្បួនទី ៣៖ រក្សាទុក API Keys ក្នុង `.env` និង ignore វា។\n- ក្បួនទី ៤៖ Pull កូដថ្មីមុនពេល Push ជានិច្ច។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .warn { color: #f87171; font-weight: bold; }
    .ok { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="warn">⚠️ CRITICAL SECURITY WARNING</div>
    <div style="color:#94a3b8; margin-top:4px">
      Never commit sensitive secrets:
      - Stripe Secret Keys (sk_live_...)
      - AWS Access Keys (AKIA...)
      - Firebase Service Account JSON
      - Database Passwords
    </div>
    <br/>
    <div class="ok">✅ Safe Architecture:</div>
    <div>Use environment variables: process.env.STRIPE_SECRET_KEY</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'Secret Scanning on GitHub',
        km: 'ការស្កេនរកមើលការជ្រុះស្មើរ Key លើ GitHub'
      },
      description: {
        en: 'GitHub automatically scans pushes for leaked credentials. If you accidentally commit an AWS key, GitHub immediately emails you and revokes the compromised key.',
        km: 'GitHub មានប្រព័ន្ធស្កេនស្វ័យប្រវត្តិ។ ប្រសិនបើអ្នកជ្រុះ AWS Key ដោយអចេតនា GitHub នឹងផ្ញើ Email ប្រាប់ និងលុប Key នោះចោលភ្លាមៗ។'
      }
    },
    practiceExercise: {
      question: {
        en: 'If you accidentally commit a password to a public repository, is simply removing it in a new commit enough?',
        km: 'ប្រសិនបើអ្នកជ្រុះ Password ចូល Public Repo តើគ្រាន់តែលុបវាក្នុង Commit បន្ទាប់គ្រប់គ្រាន់ទេ?'
      },
      solution: 'No! Git history retains the previous commit snapshot. You must immediately invalidate/revoke the password and clean git history.'
    },
    quizQuestions: [
      {
        id: 'git-q25',
        question: {
          en: 'What should you do immediately if you accidentally push a live API secret key to GitHub?',
          km: 'តើអ្នកត្រូវធ្វើអ្វីភ្លាមៗ ប្រសិនបើជ្រុះ API Key ចូលក្នុង GitHub?'
        },
        options: [
          { id: '1', text: { en: 'Revoke/rotate the secret key immediately on the API service provider dashboard', km: 'ចូលទៅលុប/ប្តូរ (Revoke/Rotate) Secret Key នោះចោលភ្លាមៗលើ Dashboard របស់ API' }, isCorrect: true },
          { id: '2', text: { en: 'Do nothing and wait 2 months', km: 'មិនបាច់ធ្វើអ្វី រង់ចាំ ២ ខែ' }, isCorrect: false },
          { id: '3', text: { en: 'Turn off your laptop wifi', km: 'បិទ Wifi Computer' }, isCorrect: false }
        ],
        explanation: {
          en: 'Revoking the compromised key prevents unauthorized API usage by malicious bots.',
          km: 'ការលុប Key ចោលភ្លាមៗ ការពារកុំឱ្យ Bot យក Key ទៅប្រើខុសច្បាប់។'
        }
      }
    ]
  },

  // ==========================================
  // CAPSTONE MODULE: Push Real Project to GitHub
  // ==========================================
  {
    id: 'git-l26',
    slug: 'capstone-push-real-project-to-github',
    moduleNumber: 8,
    lessonNumberInModule: 1,
    title: {
      en: '8.1 Capstone — Push a Real Frontend Project to GitHub',
      km: '8.1 គម្រោង Capstone — ការ Push គម្រោងពិតទៅកាន់ GitHub'
    },
    durationMinutes: 30,
    difficulty: 'Intermediate',
    explanation: {
      en: 'In this complete guided Capstone module, you will take a real frontend project (e.g. HTML Bio page or JS To-Do app), initialize Git, stage files, write conventional commits, configure `.gitignore`, push to a new GitHub repository, create a feature branch, and open + merge a Pull Request!',
      km: 'ក្នុងគម្រោង Capstone នេះ អ្នកនឹងអនុវត្តការយក Frontend Project ពិតប្រាកដ បង្កើត Git Repo, Stage files, សរសេរ Conventional Commits, រៀបចំ `.gitignore`, Push ទៅ GitHub, បង្កើត Feature Branch, និង បង្កើត + Merge Pull Request!'
    },
    tutorial: {
      en: 'Step-by-step complete execution workflow:\n\n1. Initialize & Config:\n   `git init` \n   `echo "node_modules/\\n.env" > .gitignore` \n\n2. First Commit:\n   `git add .` \n   `git commit -m "feat: initial commit for todo app"` \n\n3. Connect Remote & Push:\n   `git remote add origin https://github.com/username/todo-app.git` \n   `git branch -M main` \n   `git push -u origin main` \n\n4. Create Feature Branch & Push PR:\n   `git switch -c feature/dark-mode` \n   `/* edit styles.css */` \n   `git add .` \n   `git commit -m "feat(ui): implement dark theme styles"` \n   `git push -u origin feature/dark-mode` \n\n5. Open Pull Request on GitHub & Merge into main!',
      km: 'លំហូរប្រតិបត្តិការពេញលេញជាជំហានៗ៖\n\n១. ចាប់ផ្តើម និងកំណត់ប្រព័ន្ធ៖\n   `git init` \n   `echo "node_modules/\\n.env" > .gitignore` \n\n២. Commit លើកដំបូង៖\n   `git add .` \n   `git commit -m "feat: initial commit for todo app"` \n\n៣. ភ្ជាប់ Remote & Push ទៅ GitHub៖\n   `git remote add origin https://github.com/username/todo-app.git` \n   `git branch -M main` \n   `git push -u origin main` \n\n៤. បង្កើត Feature Branch & Push PR៖\n   `git switch -c feature/dark-mode` \n   `/* កែប្រែ styles.css */` \n   `git add .` \n   `git commit -m "feat(ui): implement dark theme styles"` \n   `git push -u origin feature/dark-mode` \n\n៥. បង្កើត Pull Request លើ GitHub និង Merge ចូល main!'
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
    .ok { color: #4ade80; }
    .step { color: #38bdf8; font-weight: bold; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="term">
    <div class="step">🚀 Step 1: Initialize Git Repo & Add Files</div>
    <div class="cmd">$ git init</div>
    <div class="cmd">$ git add .</div>
    <div class="cmd">$ git commit -m "feat: initial project commit"</div>
    
    <div class="step">🌐 Step 2: Push to GitHub Remote</div>
    <div class="cmd">$ git remote add origin https://github.com/sokchan/frontend-todo-app.git</div>
    <div class="cmd">$ git push -u origin main</div>
    
    <div class="step">🌿 Step 3: Feature Branch & Pull Request</div>
    <div class="cmd">$ git switch -c feature/filter-search</div>
    <div class="cmd">$ git commit -m "feat(search): add instant task filtering"</div>
    <div class="cmd">$ git push -u origin feature/filter-search</div>
    
    <div class="ok">🎉 Capstone Complete! Pull Request merged on GitHub into main!</div>
  </div>
</body>
</html>`
    },
    realWorldExample: {
      title: {
        en: 'End-to-End Industry Workflow',
        km: 'ដំណើរការការងារឧស្សាហកម្មពេញលេញ'
      },
      description: {
        en: 'This capstone mirrors the exact daily workflow performed by professional frontend software engineers around the globe.',
        km: 'គម្រោង Capstone នេះឆ្លុះបញ្ចាំងពី ដំណើរការធ្វើការងារជាក់ស្តែងប្រចាំថ្ងៃរបស់ Professional Frontend Developers នៅគ្រប់ក្រុមហ៊ុនបច្ចេកវិទ្យា។'
      }
    },
    practiceExercise: {
      question: {
        en: 'Summarize the 5 core stages of a complete Git & GitHub feature lifecycle.',
        km: 'រៀបរាប់សង្ខេបពី ៥ ជំហានសំខាន់ៗនៃលំហូរការងារ Git & GitHub Feature Lifecycle'
      },
      solution: '1. git switch -c feature-branch, 2. code & git add/commit, 3. git push -u origin feature-branch, 4. Open PR & get code review approval on GitHub, 5. Merge PR into main & git pull locally.'
    },
    quizQuestions: [
      {
        id: 'git-q26',
        question: {
          en: 'What is the correct final step locally after merging your Capstone feature PR on GitHub?',
          km: 'តើអ្វីជាជំហានចុងក្រោយលើ កុំព្យូទ័រ បន្ទាប់ពី Merge Capstone feature PR លើ GitHub រួចរាល់?'
        },
        options: [
          { id: '1', text: { en: 'Switch back to `main` locally and run `git pull`', km: 'Switch ត្រឡប់មក `main` លើ Computer រួចវាយ `git pull` ' }, isCorrect: true },
          { id: '2', text: { en: 'Delete your project folder', km: 'លុប Project Folder' }, isCorrect: false },
          { id: '3', text: { en: 'Turn off your router', km: 'បិទ Router' }, isCorrect: false }
        ],
        explanation: {
          en: '`git pull` updates local main with the newly merged PR commit from GitHub.',
          km: '`git pull` ធ្វើបច្ចុប្បន្នភាព local main ដោយទាញយក PR ថ្មីពី GitHub។'
        }
      }
    ]
  }
];
