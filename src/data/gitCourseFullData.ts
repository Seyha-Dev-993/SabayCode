import { FrontendCourse } from '../types/frontendClass';
import { GIT_LESSONS_PART1 } from './gitLessonsHubPart1';
import { GIT_LESSONS_PART2 } from './gitLessonsHubPart2';

const ALL_GIT_LESSONS = [...GIT_LESSONS_PART1, ...GIT_LESSONS_PART2];

export const GIT_COURSE_DATA: FrontendCourse = {
  id: 'git',
  title: {
    en: 'Git & GitHub Course',
    km: 'វគ្គសិក្សា Git & GitHub'
  },
  iconName: 'git',
  categoryId: 'tooling',
  difficulty: 'Beginner',
  shortDescription: {
    en: 'Master version control, repositories, commits, branching, merge conflicts, pull requests, and GitHub team workflows.',
    km: 'ស្ទាត់ជំនាញ Version Control, Repositories, Commits, Branches, Merge Conflicts, Pull Requests និងការងារក្រុមលើ GitHub។'
  },
  summary: {
    en: 'Git is the industry-standard distributed version control system used by software developers worldwide to track code history, collaborate safely via branches, and publish projects on GitHub.',
    km: 'Git គឺជាប្រព័ន្ធ Version Control ដ៏សំខាន់បំផុតដែល Developer គ្រប់រូបត្រូវប្រើប្រាស់ដើម្បីកត់ត្រាប្រវត្តិកូដ ធ្វើការជាក្រុមលើ Branches និងប្រគល់កូដលើ GitHub។'
  },
  estimatedHours: 5,
  lessonCount: ALL_GIT_LESSONS.length,
  cheatSheet: [
    {
      concept: 'git init',
      code: 'git init',
      explanation: {
        en: 'Initialize a new empty Git repository in current directory.',
        km: 'ចាប់ផ្តើមបង្កើត Git Repository ថ្មីក្នុង Folder បច្ចុប្បន្ន។'
      }
    },
    {
      concept: 'git add',
      code: 'git add .',
      explanation: {
        en: 'Stage all modified and untracked files for the next commit.',
        km: 'រៀបចំឯកសារដែលបានកែប្រែទាំងអស់ចូល Staging Area ត្រៀម Commit។'
      }
    },
    {
      concept: 'git commit',
      code: 'git commit -m "feat: add user login component"',
      explanation: {
        en: 'Record staged changes as a permanent snapshot with a descriptive message.',
        km: 'Save រក្សាទុក Snapshot នៃកូដជាមួយសារពណ៌នាច្បាស់លាស់។'
      }
    },
    {
      concept: 'git status',
      code: 'git status',
      explanation: {
        en: 'Show working tree status (untracked, modified, staged files).',
        km: 'បង្ហាញស្ថានភាពឯកសារក្នុង Working Directory និង Staging Area។'
      }
    },
    {
      concept: 'git log',
      code: 'git log --oneline --graph',
      explanation: {
        en: 'Display compact commit history graph.',
        km: 'បង្ហាញប្រវត្តិកាលបរិច្ឆេទ Commits ទាំងអស់សង្ខេបមួយបន្ទាត់។'
      }
    },
    {
      concept: 'git branch',
      code: 'git branch\ngit branch -d <branch-name>',
      explanation: {
        en: 'List local branches or safely delete a merged feature branch.',
        km: 'បង្ហាញបញ្ជី Branches ឬ លុប Branch ដែលបាន Merge រួចរាល់។'
      }
    },
    {
      concept: 'git switch / checkout',
      code: 'git switch -c feature/new-page\ngit checkout -b feature/new-page',
      explanation: {
        en: 'Create and switch to a new development feature branch.',
        km: 'បង្កើត និងផ្លាស់ទៅកាន់ Branch អភិវឌ្ឍន៍ Feature ថ្មី។'
      }
    },
    {
      concept: 'git merge',
      code: 'git switch main\ngit merge feature/new-page',
      explanation: {
        en: 'Integrate commits from feature branch into current branch.',
        km: 'បញ្ជូលប្រវត្តិកូដពី Feature Branch ចូលក្នុង Main Branch។'
      }
    },
    {
      concept: 'git remote',
      code: 'git remote add origin https://github.com/user/repo.git\ngit remote -v',
      explanation: {
        en: 'Link local repository to GitHub remote URL or view current remotes.',
        km: 'ភ្ជាប់ Local Repo ទៅកាន់ Remote Repository លើ GitHub។'
      }
    },
    {
      concept: 'git push',
      code: 'git push -u origin main',
      explanation: {
        en: 'Upload local commits to remote GitHub repository branch.',
        km: 'បញ្ជូន Commits ពី Computer ឡើងទៅកាន់ GitHub Repository។'
      }
    },
    {
      concept: 'git pull',
      code: 'git pull origin main',
      explanation: {
        en: 'Fetch latest changes from GitHub and merge into active local branch.',
        km: 'ទាញយកបច្ចុប្បន្នភាពកូដពី GitHub មក Merge ចូល Computer។'
      }
    },
    {
      concept: 'git clone',
      code: 'git clone https://github.com/user/repo.git',
      explanation: {
        en: 'Download an existing remote repository and full commit history locally.',
        km: 'ទាញយក Project ទាំងមូលពី GitHub មកកាន់ កុំព្យូទ័ររបស់អ្នក។'
      }
    },
    // Common Mistakes Section
    {
      concept: '❌ Common Mistake 1',
      code: 'git commit -m "update"',
      explanation: {
        en: 'Forgetting to run `git add .` before `git commit` resulting in nothing committed.',
        km: 'ភ្លេចវាយ `git add .` មុនពេល `git commit` បណ្តាលឱ្យគ្មានកូដណាត្រូវ បាន Save ទុកឡើយ។'
      }
    },
    {
      concept: '❌ Common Mistake 2',
      code: 'git push origin main (direct)',
      explanation: {
        en: 'Committing and pushing directly to `main` in a team environment without a Pull Request.',
        km: 'ការ Commit និង Push ចូល `main` ផ្ទាល់ក្នុងក្រុមដោយមិនបានបង្កើត Pull Request Review។'
      }
    },
    {
      concept: '❌ Common Mistake 3',
      code: 'git add .env',
      explanation: {
        en: 'Accidentally committing `.env` secret key files because they were missing from `.gitignore`.',
        km: 'ការជ្រុះ `.env` secret keys ចូល Git ព្រោះភ្លេចសរសេរ `.env` ក្នុង `.gitignore`។'
      }
    },
    {
      concept: '❌ Common Mistake 4',
      code: 'git push --force',
      explanation: {
        en: 'Force-pushing shared branches which can overwrite and destroy teammates\' commits.',
        km: 'ការប្រើ `git push --force` លើ Shared Branch ដែលអាចលុប ឬ បំផ្លាញកូដរបស់សមាជិកក្រុម។'
      }
    }
  ],
  quiz: [
    {
      id: 'q-git-order-1',
      question: {
        en: 'Put these 4 Git commands in the correct order to save and push changes to GitHub for the first time:',
        km: 'រៀបលំដាប់លំដោយ ៤ ជំហានខាងក្រោមឱ្យបានត្រឹមត្រូវដើម្បី Save និង Push កូដទៅ GitHub លើកដំបូង៖'
      },
      codeSnippet: '1) git commit -m "Initial commit"\n2) git init\n3) git push -u origin main\n4) git add .',
      options: [
        { id: '1', text: { en: '2 -> 4 -> 1 -> 3 (git init -> git add . -> git commit -> git push)', km: '2 -> 4 -> 1 -> 3 (git init -> git add . -> git commit -> git push)' }, isCorrect: true },
        { id: '2', text: { en: '1 -> 2 -> 3 -> 4 (git commit -> git init -> git push -> git add)', km: '1 -> 2 -> 3 -> 4' }, isCorrect: false },
        { id: '3', text: { en: '3 -> 4 -> 1 -> 2 (git push -> git add -> git commit -> git init)', km: '3 -> 4 -> 1 -> 2' }, isCorrect: false }
      ],
      explanation: {
        en: 'First initialize (`git init`), stage files (`git add .`), commit locally (`git commit`), and push to remote (`git push`).',
        km: 'លំដាប់ត្រឹមត្រូវ៖ init -> add -> commit -> push'
      }
    },
    {
      id: 'q-git-2',
      question: {
        en: 'Which command creates AND switches to a new branch named `feature/login`?',
        km: 'តើ Command មួយណាដែលបង្កើត និង ផ្លាស់ទៅកាន់ Branch ឈ្មោះ `feature/login`?'
      },
      options: [
        { id: '1', text: { en: 'git checkout -b feature/login', km: 'git checkout -b feature/login' }, isCorrect: true },
        { id: '2', text: { en: 'git branch feature/login', km: 'git branch feature/login' }, isCorrect: false },
        { id: '3', text: { en: 'git switch feature/login', km: 'git switch feature/login' }, isCorrect: false }
      ],
      explanation: {
        en: '`-b` creates the branch before checking it out. (`git switch -c feature/login` also works).',
        km: 'Flag `-b` បង្កើត Branch មុនពេល Switch។'
      }
    },
    {
      id: 'q-git-3',
      question: {
        en: 'What is the purpose of the `.gitignore` file?',
        km: 'តើអ្វីជាគោលបំណងនៃ File `.gitignore`?'
      },
      options: [
        { id: '1', text: { en: 'To list files and folders that Git should ignore and never track in commits', km: 'ដើម្បីបញ្ជាក់ពី File/Folder ដែលមិនត្រូវឱ្យ Git តាមដាន ឬ Commit' }, isCorrect: true },
        { id: '2', text: { en: 'To password protect the repository', km: 'ដើម្បីដាក់ Password លើ Repo' }, isCorrect: false },
        { id: '3', text: { en: 'To convert HTML into React JSX', km: 'ដើម្បីបំប្លែង HTML ទៅ React JSX' }, isCorrect: false }
      ],
      explanation: {
        en: '`.gitignore` prevents tracking generated files (`node_modules`, `dist`) and secrets (`.env`).',
        km: '`.gitignore` ការពារកុំឱ្យ Commit ឯកសារធ្ងន់ៗ និង Secret Keys។'
      }
    },
    {
      id: 'q-git-4',
      question: {
        en: 'What occurs during a Merge Conflict in Git?',
        km: 'តើមានអ្វីកើតឡើងនៅពេលកើតមាន Merge Conflict ក្នុង Git?'
      },
      options: [
        { id: '1', text: { en: 'Git halts merging because two commits modified the exact same lines in conflicting ways', km: 'Git បញ្ឈប់ការ Merge ព្រោះកូដត្រូវបានកែប្រែជាន់គ្នានៅលើបន្ទាត់តែមួយ' }, isCorrect: true },
        { id: '2', text: { en: 'Git automatically deletes the entire repository folder', km: 'Git លុប Repo ដោយស្វ័យប្រវត្តិ' }, isCorrect: false },
        { id: '3', text: { en: 'The computer restarts automatically', km: 'កុំព្យូទ័រ Re-start ខ្លួនឯង' }, isCorrect: false }
      ],
      explanation: {
        en: 'Git halts so the developer can manually inspect and resolve overlapping lines.',
        km: 'Git ផ្អាកដើម្បីឱ្យ Developer សម្រេចចិត្តជ្រើសរើសកូដដែលត្រូវ។'
      }
    },
    {
      id: 'q-git-5',
      question: {
        en: 'Why do software development teams rely on Pull Requests (PRs) on GitHub?',
        km: 'ហេតុអ្វីបានជាក្រុម Developer អាជីពប្រើប្រាស់ Pull Requests (PRs) លើ GitHub?'
      },
      options: [
        { id: '1', text: { en: 'To facilitate code reviews, verify automated CI tests, and maintain main branch stability', km: 'ដើម្បី Review កូដ ការពារ Bug និង រក្សា `main` ឱ្យដើរស្រួលជានិច្ច' }, isCorrect: true },
        { id: '2', text: { en: 'Because GitHub bans direct branch creation', km: 'ព្រោះ GitHub ហាមបង្កើត Branch' }, isCorrect: false },
        { id: '3', text: { en: 'To minify CSS files', km: 'ដើម្បីបង្រួម CSS' }, isCorrect: false }
      ],
      explanation: {
        en: 'PRs ensure peer code review before code gets merged into live production branches.',
        km: 'PR ធានាការ ពិនិត្យកូដត្រឹមត្រូវមុនពេល Merge ចូល Production។'
      }
    },
    {
      id: 'q-git-6',
      question: {
        en: 'Which command fetches the latest commits from GitHub and integrates them into your current local branch?',
        km: 'តើ Command មួយណាដែលទាញយកកូដថ្មីពី GitHub និង Merge ចូលក្នុង Computer របស់អ្នក?'
      },
      options: [
        { id: '1', text: { en: 'git pull', km: 'git pull' }, isCorrect: true },
        { id: '2', text: { en: 'git push', km: 'git push' }, isCorrect: false },
        { id: '3', text: { en: 'git clone', km: 'git clone' }, isCorrect: false }
      ],
      explanation: {
        en: '`git pull` combines downloading remote changes and merging into active branch.',
        km: '`git pull` ទាញយក និង Merge បច្ចុប្បន្នភាពកូដពី Remote។'
      }
    },
    {
      id: 'q-git-7',
      question: {
        en: 'Which line inside a conflict marker block represents the incoming changes from the branch being merged?',
        km: 'តើបន្ទាត់មួយណាក្នុង Conflict marker block ដែលតំណាងឱ្យកូដថ្មីដែលចង់ Merge ចូល?'
      },
      options: [
        { id: '1', text: { en: 'The code between ======= and >>>>>>> branch-name', km: 'កូដចន្លោះ ======= និង >>>>>>> branch-name' }, isCorrect: true },
        { id: '2', text: { en: 'The code between <<<<<<< HEAD and =======', km: 'កូដចន្លោះ <<<<<<< HEAD និង =======' }, isCorrect: false },
        { id: '3', text: { en: 'The entire file text', km: 'កូដក្នុង File ទាំងមូល' }, isCorrect: false }
      ],
      explanation: {
        en: 'Incoming branch changes reside between the `=======` divider and `>>>>>>> branch-name`.',
        km: 'កូដដែលចង់ Merge ចូល ស្ថិតនៅចន្លោះ `=======` និង `>>>>>>> branch-name`។'
      }
    },
    {
      id: 'q-git-8',
      question: {
        en: 'Which Conventional Commit message prefix signifies a bug fix update?',
        km: 'តើ Prefix មួយណាក្នុង Conventional Commit ដែលសម្គាល់ការកែសម្រួល Bug?'
      },
      options: [
        { id: '1', text: { en: 'fix:', km: 'fix:' }, isCorrect: true },
        { id: '2', text: { en: 'feat:', km: 'feat:' }, isCorrect: false },
        { id: '3', text: { en: 'docs:', km: 'docs:' }, isCorrect: false }
      ],
      explanation: {
        en: '`fix:` denotes bug resolution updates in Conventional Commit standards.',
        km: '`fix:` ប្រើសម្រាប់ប្រាប់ថាកូដនេះជាការកែ Bug។'
      }
    }
  ],
  capstoneProject: {
    title: {
      en: 'GitHub Repository Collaboration & Release Workflow',
      km: 'ដំណើរការសហការ និងប្រគល់កូដលើ GitHub Repository'
    },
    description: {
      en: 'In this hands-on Capstone, take your completed HTML or JavaScript project, initialize Git, configure `.gitignore`, commit changes, push to GitHub, create a feature branch, and open + merge a Pull Request.',
      km: 'ក្នុងគម្រោងអនុវត្ត Capstone នេះ អ្នកនឹងយក Project HTML ឬ JavaScript, បង្កើត Git Repo, សរសេរ `.gitignore`, Commit, Push ទៅ GitHub, បង្កើត Feature Branch, និង បង្កើត + Merge Pull Request។'
    },
    starterCode: {
      html: `<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 20px; }
    .term { background: #020617; border: 1px solid #334155; border-radius: 8px; padding: 15px; }
    .title { color: #38bdf8; font-weight: bold; margin-bottom: 10px; }
    .cmd { color: #facc15; }
    .ok { color: #4ade80; }
  </style>
</head>
<body>
  <div class="term">
    <div class="title">🚀 Capstone Step-by-Step Command Sequence</div>
    <div class="cmd">$ git init</div>
    <div class="cmd">$ echo "node_modules/\n.env" > .gitignore</div>
    <div class="cmd">$ git add .</div>
    <div class="cmd">$ git commit -m "feat: initial commit for capstone app"</div>
    <div class="cmd">$ git remote add origin https://github.com/username/capstone-project.git</div>
    <div class="cmd">$ git push -u origin main</div>
    <br/>
    <div class="cmd">$ git switch -c feature/add-dark-mode</div>
    <div class="cmd">$ git commit -m "feat(ui): add dark mode styling"</div>
    <div class="cmd">$ git push -u origin feature/add-dark-mode</div>
    <div class="ok">✅ Pull Request Created & Merged on GitHub!</div>
  </div>
</body>
</html>`
    }
  },
  lessons: ALL_GIT_LESSONS
};
