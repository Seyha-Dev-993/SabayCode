import { Topic } from '../types';

export const gitTopics: Topic[] = [
  {
    id: "git-tutorial",
    title: { en: "Git Tutorial", km: "មេរៀនគ្រឹះ Git" },
    lessons: [
      {
        id: "git-home",
        title: { en: "Git HOME", km: "ទំព័រដើម Git" },
        content: {
          en: `# Git HOME
Welcome to the comprehensive Git Version Control course! Git is a free, open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

> **Tip:** Learning Git is the single most valuable workflow skill for any developer. It allows you to track changes, collaborate seamlessly, and never lose your hard work.

### Common Syntax
\`\`\`bash
$ git --version
\`\`\`

### Worked Example
Run the version check to see your installed Git command release:
\`\`\`bash
$ git version
git version 2.40.1
\`\`\``,
          km: `# ទំព័រដើម Git
សូមស្វាគមន៍មកកាន់វគ្គសិក្សាគ្រប់គ្រងកំណែកូដ Git! Git គឺជាប្រព័ន្ធគ្រប់គ្រងកំណែកូដកម្រិតសកល និងឥតគិតថ្លៃ ដែលត្រូវបានរចនាឡើងដើម្បីតាមដានរាល់ការផ្លាស់ប្តូរឯកសារកូដរបស់អ្នក។

> **គន្លឹះ៖** ការរៀន Git គឺជាជំនាញការងារដ៏សំខាន់បំផុតសម្រាប់អ្នកសរសេរកម្មវិធី។ វាជួយការពារកុំឱ្យបាត់បង់កូដ និងធ្វើការងារជាក្រុមបានយ៉ាងរលូន។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git --version
\`\`\`

### ឧទាហរណ៍អនុវត្ត
ពិនិត្យកំណែរបស់ Git ដែលកំពុងប្រើប្រាស់៖
\`\`\`bash
$ git version
git version 2.40.1
\`\`\``
        },
        starterCode: `git version`
      },
      {
        id: "git-intro",
        title: { en: "Git Intro", km: "សេចក្តីផ្តើម Git" },
        content: {
          en: `# Git Intro
Git tracks file snapshots over time. Unlike old centralized systems, every Git directory on any computer is a full-fledged repository with complete history and tracking.

> **Tip:** Git doesn't just save copies of files; it stores compressed snapshot histories in a highly secure index directory (\`.git\`).

### Common Syntax
\`\`\`bash
$ git help
\`\`\`

### Worked Example
Request Git CLI assistance to view core developer tracking workflows:
\`\`\`bash
$ git help
\`\`\``,
          km: `# សេចក្តីផ្តើម Git
Git តាមដានរាល់ទិន្នន័យឯកសារក្នុងទម្រង់ Snapshots។ ខុសពីប្រព័ន្ធចាស់ៗ គ្រប់កុំព្យូទ័រដែលប្រើប្រាស់ Git មានឃ្លាំងផ្ទុកកូដពេញលេញមួយដោយខ្លួនឯង។

> **គន្លឹះ៖** Git មិនមែនគ្រាន់តែចម្លងឯកសារទុកនោះទេ ប៉ុន្តែវាបង្រួម និងរក្សាទុកប្រវត្តិកូដប្រកបដោយសុវត្ថិភាពក្នុងថត \`.git\`។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git help
\`\`\`

### ឧទាហរណ៍អនុវត្ត
ស្នើសុំជំនួយពី Git CLI ដើម្បីមើលលំហូរការងារស្នូល៖
\`\`\`bash
$ git help
\`\`\``
        },
        starterCode: `git help`
      },
      {
        id: "git-install",
        title: { en: "Git Install", km: "ការដំឡើង Git" },
        content: {
          en: `# Git Install
To run Git commands locally, download the installer for your operating system (Mac, Windows, or Linux) from the official website.

> **Tip:** On modern macOS, running \`git\` in the Terminal for the first time will automatically prompt you to install Xcode Command Line Tools.

### Common Command
\`\`\`bash
$ git --version
\`\`\``,
          km: `# ការដំឡើង Git
ដើម្បីប្រើប្រាស់ Git លើកុំព្យូទ័ររបស់អ្នក សូមទាញយកកម្មវិធីដំឡើងសម្រាប់ប្រព័ន្ធប្រតិបត្តិការ (Windows, Mac, Linux) ពីគេហទំព័រផ្លូវការ។

> **គន្លឹះ៖** លើប្រព័ន្ធ macOS គ្រាន់តែវាយពាក្យបញ្ជា \`git\` លើ Terminal លើកដំបូង វានឹងណែនាំឱ្យដំឡើង Xcode Command Line Tools ភ្លាមៗ។

### ពាក្យបញ្ជា
\`\`\`bash
$ git --version
\`\`\``
        },
        starterCode: `git --version`
      },
      {
        id: "git-config",
        title: { en: "Git Config", km: "ការកំណត់ Config" },
        content: {
          en: `# Git Config
Before creating commits, you must configure your personal identity (name and email) so that your authorship is recorded.

> **Tip:** Use the \`--global\` flag to apply these configurations to all future repositories on your machine.

### Common Syntax
\`\`\`bash
$ git config --global user.name "Your Name"
$ git config --global user.email "your.email@example.com"
\`\`\`

### Worked Example
Set up your git signature and verify current settings:
\`\`\`bash
$ git config --global user.name "John Doe"
$ git config --global user.email "john@example.com"
$ git config --list
\`\`\``,
          km: `# ការកំណត់ Config
មុនពេលធ្វើការរក្សាទុកកូដ (Commit) អ្នកត្រូវកំណត់អត្តសញ្ញាណផ្ទាល់ខ្លួន (ឈ្មោះ និងអ៊ីមែល) ដើម្បីដឹងថាអ្នកណាជាអ្នកកែប្រែ។

> **គន្លឹះ៖** ប្រើប្រាស់ flag \`--global\` ដើម្បីអនុវត្តការកំណត់នេះចំពោះគ្រប់គម្រោងទាំងអស់នៅលើកុំព្យូទ័ររបស់អ្នក។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git config --global user.name "ឈ្មោះរបស់អ្នក"
$ git config --global user.email "your.email@example.com"
\`\`\`

### ឧទាហរណ៍អនុវត្ត
កំណត់អត្តសញ្ញាណរបស់អ្នក និងបង្ហាញការកំណត់បច្ចុប្បន្ន៖
\`\`\`bash
$ git config --global user.name "John Doe"
$ git config --global user.email "john@example.com"
\`\`\``
        },
        starterCode: `git config --global user.name "Angkor Coder"
git config --global user.email "coder@angkor.com"
git config --list`
      },
      {
        id: "git-get-started",
        title: { en: "Git Get Started", km: "ការចាប់ផ្តើមដំបូង" },
        content: {
          en: `# Git Get Started
To track an existing project or start a fresh workspace, initialize a hidden local metadata directory called \`.git\`.

> **Tip:** Running \`git init\` inside an already initialized repository is safe; it will not overwrite your existing history or metadata.

### Common Syntax
\`\`\`bash
$ git init
\`\`\`

### Worked Example
Initialize a brand new local repository in your current working folder:
\`\`\`bash
$ git init
Initialized empty Git repository in /workspace/.git/
\`\`\``,
          km: `# ការចាប់ផ្តើមដំបូង
ដើម្បីចាប់ផ្តើមតាមដានគម្រោង ឬថតការងារណាមួយ អ្នកត្រូវបង្កើតថតលាក់ទិន្នន័យមេតា \`.git\` នៅក្នុងថតការងារនោះ។

> **គន្លឹះ៖** ការរត់ពាក្យបញ្ជា \`git init\` ក្នុងថតដែលមានស្រាប់មិនបង្កបញ្ហាអ្វីឡើយ វាមិនលុបប្រវត្តិចាស់របស់អ្នកចោលទេ។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git init
\`\`\`

### ឧទាហរណ៍អនុវត្ត
បង្កើតឃ្លាំងផ្ទុកកូដថ្មីស្រឡាងក្នុងថតបច្ចុប្បន្ន៖
\`\`\`bash
$ git init
Initialized empty Git repository in /workspace/.git/
\`\`\``
        },
        starterCode: `git init`
      },
      {
        id: "git-new-files",
        title: { en: "Git New Files", km: "ការបង្កើតឯកសារថ្មី" },
        content: {
          en: `# Git New Files
When you create new files in your project directory, Git views them as **untracked**. This means they are not yet part of Git's version snapshots.

> **Tip:** Running \`git status\` allows you to inspect which files are untracked (usually printed in red in the terminal).

### Common Syntax
\`\`\`bash
$ git status
\`\`\`

### Worked Example
Check repository status to see recently created untracked assets:
\`\`\`bash
$ git status
On branch master
No commits yet
Untracked files:
  index.html
  styles.css
\`\`\``,
          km: `# ការបង្កើតឯកសារថ្មី
នៅពេលអ្នកបង្កើតឯកសារថ្មីនៅក្នុងគម្រោង Git ចាត់ទុកពួកវាជា **Untracked** (មិនទាន់តាមដាន)។ មានន័យថាវាមិនទាន់ជាចំណែកនៃកំណែកូដឡើយ។

> **គន្លឹះ៖** រត់ \`git status\` ដើម្បីពិនិត្យមើលឯកសារណាខ្លះដែលមិនទាន់តាមដាន (ជាទូទៅបង្ហាញជាពណ៌ក្រហម)។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git status
\`\`\`

### ឧទាហរណ៍អនុវត្ត
ពិនិត្យស្ថានភាពឃ្លាំងកូដដើម្បីមើលឯកសារដែលទើបបង្កើតថ្មី៖
\`\`\`bash
$ git status
On branch master
No commits yet
Untracked files:
  index.html
  styles.css
\`\`\``
        },
        starterCode: `git init
git status`
      },
      {
        id: "git-staging",
        title: { en: "Git Staging", km: "ការរៀបចំ Staging" },
        content: {
          en: `# Git Staging
The Staging Area is a preview table representing the files you want to include in your next permanent snapshot commit.

> **Tip:** You can stage specific files with \`git add <filename>\` or stage everything with \`git add .\`.

### Common Syntax
\`\`\`bash
$ git add <filename>
$ git add .
\`\`\`

### Worked Example
Stage your HTML and CSS documents to prepare them for recording:
\`\`\`bash
$ git add index.html
$ git status
Changes to be committed:
  new file:   index.html
\`\`\``,
          km: `# ការរៀបចំ Staging
តំបន់ Staging គឺជាកន្លែងត្រៀមរៀបចំឯកសារ (ដូចជាកន្ត្រកទំនិញ) មុនពេលយើងសម្រេចចិត្តរក្សាទុកជាផ្លូវការនៅក្នុងប្រវត្តិ Commit។

> **គន្លឹះ៖** អ្នកអាចរៀបចំឯកសារជាក់លាក់ដោយសរសេរ \`git add ឈ្មោះឯកសារ\` ឬរៀបចំទាំងអស់ដោយប្រើ \`git add .\`។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git add <ឈ្មោះឯកសារ>
$ git add .
\`\`\`

### ឧទាហរណ៍អនុវត្ត
រៀបចំឯកសារ HTML និង CSS ដើម្បីត្រៀមរក្សាទុក៖
\`\`\`bash
$ git add index.html
$ git status
Changes to be committed:
  new file:   index.html
\`\`\``
        },
        starterCode: `git init
git add index.html
git status`
      },
      {
        id: "git-commit",
        title: { en: "Git Commit", km: "ការ Commit" },
        content: {
          en: `# Git Commit
A commit permanently records the staged snapshot in your repository's history, acting like a checkpoints catalog.

> **Tip:** Always write concise, descriptive commit messages in the present tense (e.g., "feat: add nav menu" rather than "added nav menu").

### Common Syntax
\`\`\`bash
$ git commit -m "Your descriptive commit message"
\`\`\`

### Worked Example
Commit your staged index file to create your very first repository checkpoint:
\`\`\`bash
$ git commit -m "Initial commit"
[master (root-commit) a1b2c3d] Initial commit
 1 file changed, 10 insertions(+)
\`\`\``,
          km: `# ការ Commit
ការ Commit គឺជាការរក្សាទុកឯកសារដែលបានរៀបចំទុកក្នុង Staging ទៅក្នុងប្រវត្តិកូដជាអចិន្ត្រៃយ៍ ដូចជាការរក្សាទុកវគ្គហ្គេម (Checkpoint)។

> **គន្លឹះ៖** គួរតែសរសេរសារ Commit ឱ្យខ្លី ខ្លឹមសារងាយយល់ និងជាបច្ចុប្បន្នកាល (ឧទាហរណ៍៖ "feat: add nav menu")។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git commit -m "សារបញ្ជាក់ការរក្សាទុក"
\`\`\`

### ឧទាហរណ៍អនុវត្ត
ធ្វើការ Commit លើកដំបូងបង្អស់សម្រាប់គម្រោង៖
\`\`\`bash
$ git commit -m "Initial commit"
[master (root-commit) a1b2c3d] Initial commit
 1 file changed, 10 insertions(+)
\`\`\``
        },
        starterCode: `git init
git add .
git commit -m "feat: setup basic layout skeleton"`
      },
      {
        id: "git-tagging",
        title: { en: "Git Tagging", km: "ការដាក់ស្លាក Tag" },
        content: {
          en: `# Git Tagging
Tags are reference pointers pointing to specific, meaningful commit milestones in history. They are most commonly used to mark release versions (e.g., \`v1.0.0\`).

> **Tip:** Annotated tags are stored as full objects containing author information, date, and messages; they are highly recommended for public releases.

### Common Syntax
\`\`\`bash
$ git tag -a v1.0.0 -m "Release version 1.0.0"
$ git tag
\`\`\`

### Worked Example
Tag your current stable commit release and view tags list:
\`\`\`bash
$ git tag v1.0.0
$ git tag
v1.0.0
\`\`\``,
          km: `# ការដាក់ស្លាក Tag
Tags គឺជាចំណុចសម្គាល់ពិសេសចង្អុលទៅកាន់ Commit សំខាន់ណាមួយក្នុងប្រវត្តិ។ ជាទូទៅវាត្រូវបានប្រើដើម្បីសម្គាល់កំណែចេញផ្សាយ (ឧទាហរណ៍៖ \`v1.0.0\`)។

> **គន្លឹះ៖** ស្លាកប្រភេទ Annotated Tags ផ្ទុកព័ត៌មានលម្អិតដូចជា ឈ្មោះអ្នកបង្កើត កាលបរិច្ឆេទ និងសារបញ្ជាក់ ហើយវាត្រូវបានណែនាំឱ្យប្រើប្រាស់។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git tag -a v1.0.0 -m "សារពន្យល់"
$ git tag
\`\`\`

### ឧទាហរណ៍អនុវត្ត
ដាក់ស្លាកកំណែចេញផ្សាយ និងពិនិត្យមើលបញ្ជីស្លាកដែលមាន៖
\`\`\`bash
$ git tag v1.0.0
$ git tag
v1.0.0
\`\`\``
        },
        starterCode: `git init
git add .
git commit -m "feat: stable deployment build"
git tag v1.0.0
git tag`
      },
      {
        id: "git-stash",
        title: { en: "Git Stash", km: "ការរក្សាទុកបណ្តោះអាសន្ន" },
        content: {
          en: `# Git Stash
Stashing lets you save your current uncommitted changes (both staged and unstaged) in a temporary drawer, leaving you with a clean working directory.

> **Tip:** Use \`git stash\` to quickly switch context/branch without being forced to commit incomplete code, then retrieve it using \`git stash pop\`.

### Common Syntax
\`\`\`bash
$ git stash
$ git stash pop
$ git stash list
\`\`\`

### Worked Example
Temporarily stash uncommitted changes to do urgent repairs:
\`\`\`bash
$ git stash
Saved working directory and index state WIP on master
$ git stash pop
On branch master
Dropped refs/stash@{0}
\`\`\``,
          km: `# ការរក្សាទុកបណ្តោះអាសន្ន (Stash)
ការ Stash ជួយអ្នករក្សាទុកកូដដែលកំពុងសរសេរមិនទាន់ហើយជាបណ្តោះអាសន្នទៅក្នុងថតទុកពិសេស ដើម្បីឱ្យថតការងាររបស់អ្នកស្អាតគ្មានការប្រែប្រួល។

> **គន្លឹះ៖** ប្រើ \`git stash\` ដើម្បីប្តូរទៅកាន់មេរៀន/Branch ផ្សេងដោយមិនបាច់ Commit កូដមិនទាន់រួចរាល់ រួចយកវាមកវិញដោយប្រើ \`git stash pop\`។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git stash
$ git stash pop
$ git stash list
\`\`\`

### ឧទាហរណ៍អនុវត្ត
សាកល្បងលាក់កូដជាបណ្តោះអាសន្ន និងទាញយកវាមកធ្វើបន្ត៖
\`\`\`bash
$ git stash
Saved working directory and index state WIP on master
$ git stash pop
\`\`\``
        },
        starterCode: `git init
git add index.html
git stash
git stash list
git stash pop`
      },
      {
        id: "git-history",
        title: { en: "Git History", km: "ប្រវត្តិកូដ" },
        content: {
          en: `# Git History
You can trace and explore your project's historical linear map through detailed commit timelines recorded by Git.

> **Tip:** Use the \`--oneline\` flag to get a highly readable, compact, single-line representation of your commit sequence.

### Common Syntax
\`\`\`bash
$ git log
$ git log --oneline
\`\`\`

### Worked Example
Inspect the history timeline to see previous repository checkpoints:
\`\`\`bash
$ git log --oneline
a1b2c3d (HEAD -> master) feat: setup basic layout skeleton
9f8e7d6 init: initial repository structure
\`\`\``,
          km: `# ប្រវត្តិកូដ (Git History)
អ្នកអាចតាមដាន និងរុករកប្រវត្តិការកែប្រែគម្រោងរបស់អ្នកយ៉ាងលម្អិត តាមរយៈប្រព័ន្ធកំណត់ត្រា Commits របស់ Git។

> **គន្លឹះ៖** ប្រើ flag \`--oneline\` ដើម្បីបង្ហាញប្រវត្តិជាទម្រង់ខ្លីល្មម ងាយស្រួលអានក្នុងមួយបន្ទាត់។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git log
$ git log --oneline
\`\`\`

### ឧទាហរណ៍អនុវត្ត
ពិនិត្យមើលប្រវត្តិនៃការរក្សាទុកកូដរបស់អ្នក៖
\`\`\`bash
$ git log --oneline
\`\`\``
        },
        starterCode: `git init
git add .
git commit -m "First commit"
git log --oneline`
      },
      {
        id: "git-help",
        title: { en: "Git Help", km: "ជំនួយ Git Help" },
        content: {
          en: `# Git Help
If you ever forget how to configure or execute specific commands, Git's integrated helper manual is always available right inside your terminal CLI.

> **Tip:** Append \`--help\` to any git subcommand to open the detailed official offline user documentation web/man pages.

### Common Syntax
\`\`\`bash
$ git help <command>
$ git <command> --help
\`\`\`

### Worked Example
Show instructions for configuring the commit command options:
\`\`\`bash
$ git help commit
\`\`\``,
          km: `# ជំនួយ Git Help
ប្រសិនបើអ្នកភ្លេចពាក្យបញ្ជា ឬជម្រើសណាមួយ ប្រព័ន្ធជំនួយរបស់ Git ត្រូវបានបង្កើតឡើងមកជាមួយស្រាប់ក្នុង Terminal របស់អ្នក។

> **គន្លឹះ៖** បន្ថែម \`--help\` ពីក្រោយពាក្យបញ្ជាណាមួយ ដើម្បីបើកមើលសៀវភៅណែនាំផ្លូវការលម្អិត។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git help <ពាក្យបញ្ជា>
$ git <ពាក្យបញ្ជា> --help
\`\`\`

### ឧទាហរណ៍អនុវត្ត
បើកទំព័រជំនួយពន្យល់ពីការប្រើប្រាស់ពាក្យបញ្ជា Commit៖
\`\`\`bash
$ git help commit
\`\`\``
        },
        starterCode: `git help add`
      },
      {
        id: "git-branch",
        title: { en: "Git Branch", km: "ប្រព័ន្ធមែកធាង Branch" },
        content: {
          en: `# Git Branch
Branches are lightweight pointers to work sandboxes, allowing you to build features or fix bugs in isolation from the main production line.

> **Tip:** The default primary master branch is called \`master\` or \`main\`. Create branches using \`git branch <name>\` and switch with \`git checkout <name>\`.

### Common Syntax
\`\`\`bash
$ git branch
$ git branch <branch-name>
$ git checkout <branch-name>
\`\`\`

### Worked Example
Create and enter a new branch named \`dev-ui\` to write user interfaces securely:
\`\`\`bash
$ git branch dev-ui
$ git checkout dev-ui
Switched to branch 'dev-ui'
\`\`\``,
          km: `# ប្រព័ន្ធមែកធាង Branch
Branches គឺជាមែកធាងកូដដាច់ដោយឡែក ដែលអនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍមុខងារថ្មីៗ ឬជួសជុលកំហុសកូដដោយមិនប៉ះពាល់ដល់មេឡើយ។

> **គន្លឹះ៖** មែកធាងមេលំនាំដើមត្រូវបានហៅថា \`master\` ឬ \`main\`។ បង្កើតមែកថ្មីដោយវាយ \`git branch ឈ្មោះ\` និងប្តូរទៅប្រើវាដោយវាយ \`git checkout ឈ្មោះ\`។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git branch
$ git branch <ឈ្មោះមែកធាង>
$ git checkout <ឈ្មោះមែកធាង>
\`\`\`

### ឧទាហរណ៍អនុវត្ត
បង្កើត និងប្តូរទៅកាន់មែកធាងថ្មីឈ្មោះ \`dev-ui\`៖
\`\`\`bash
$ git branch dev-ui
git checkout dev-ui
\`\`\``
        },
        starterCode: `git init
git branch dev-ui
git branch`
      },
      {
        id: "git-merge",
        title: { en: "Git Merge", km: "ការបញ្ចូលកូដ Merge" },
        content: {
          en: `# Git Merge
Merging integrates independent lines of development (e.g., merging feature branches back into the stable \`master\` production branch).

> **Tip:** When the destination branch has no new intervening commits, Git performs a fast, sequential "Fast-forward" merge.

### Common Syntax
\`\`\`bash
$ git checkout master
$ git merge <branch-to-integrate>
\`\`\`

### Worked Example
Merge the completed feature branch \`dev-ui\` back into your main branch:
\`\`\`bash
$ git checkout master
$ git merge dev-ui
Updating a1b2c3d..9f8e7d6
Fast-forward
\`\`\``,
          km: `# ការបញ្ចូលកូដ Merge
ការ Merge គឺជាការបញ្ចូលគ្នានៃប្រវត្តិកូដពីមែកធាងពីរ ឬច្រើន (ឧទាហរណ៍៖ ការបញ្ជូនកូដពីមែកធាងអភិវឌ្ឍន៍មកកាន់មែកធាងមេ \`master\`)។

> **គន្លឹះ៖** ប្រសិនបើមែកធាងមេមិនមានកូដកែប្រែថ្មីៗមកបន្ទាត់គ្នាទេ Git នឹងធ្វើការបញ្ជូនកូដទៅមុខលឿនដែលហៅថា "Fast-forward"។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git checkout master
$ git merge <ឈ្មោះមែកធាងចង់បញ្ចូល>
\`\`\`

### ឧទាហរណ៍អនុវត្ត
ត្រឡប់ទៅកាន់មែកធាងមេ និងបញ្ចូលកូដពីមែក \`dev-ui\`៖
\`\`\`bash
$ git checkout master
$ git merge dev-ui
\`\`\``
        },
        starterCode: `git init
git branch dev-ui
git checkout dev-ui
git checkout master
git merge dev-ui`
      },
      {
        id: "git-workflow",
        title: { en: "Git Workflow", km: "លំហូរការងារទូទៅ" },
        content: {
          en: `# Git Workflow
An ideal developer workflow involves three primary areas: the Working Directory, the Staging Area, and the local Git Repository (.git).

> **Tip:** The linear lifecycle is: Modify files (Working Directory) -> Stage changes (\`git add\`) -> Store permanently (\`git commit\`).

### Summary Diagram
- **Working Tree:** Writing and editing files.
- **Staging Index:** Compiling specific changes together.
- **Repository:** Permanent history ledger databases.`,
          km: `# លំហូរការងារទូទៅ (Git Workflow)
លំហូរការងារស្ដង់ដាររបស់ Git រួមមានតំបន់ធំៗចំនួន៣៖ Working Directory (កន្លែងសរសេរកូដ), Staging Area (កន្លែងរៀបចំកូដ), និង Repository (.git - ឃ្លាំងផ្ទុកកូដ)។

> **គន្លឹះ៖** ដំណើរជីវិតរបស់កូដគឺ៖ កែប្រែកូដ (Working Directory) -> រៀបចំកូដ (\`git add\`) -> រក្សាទុកកូដ (\`git commit\`)។

### ដ្យាក្រាមសង្ខេប
- **Working Tree៖** កំពុងសរសេរ និងកែសម្រួលឯកសារ។
- **Staging Index៖** កន្ត្រកប្រមូលកូដដែលបានកែរួច។
- **Repository៖** បញ្ជីប្រវត្តិកូដអចិន្ត្រៃយ៍។`
        },
        starterCode: `git status`
      },
      {
        id: "git-best-practices",
        title: { en: "Git Best Practices", km: "វិន័យល្អបំផុត" },
        content: {
          en: `# Git Best Practices
Keep your codebase healthy by committing logically atomic updates, avoiding massive "everything changes" commits, and testing frequently.

> **Tip:** Write clear, concise commit messages. Never commit generated build artifacts or third-party packages (like \`node_modules\`).

### Key Recommendations
1. **Commit Early & Often:** Small commits are easier to debug and revert.
2. **Never Commit Secrets:** Store passwords and keys in \`.env\` file environments.
3. **Pull Before You Push:** Always integrate peer changes first to stay aligned.`,
          km: `# វិន័យល្អបំផុត (Git Best Practices)
រក្សាឃ្លាំងកូដរបស់អ្នកឱ្យមានរបៀបរៀបរយ ដោយធ្វើការ Commit រាល់ពេលបញ្ចប់មុខងារតូចមួយ និងចៀសវាងការ Commit រួមគ្នាធំៗ។

> **គន្លឹះ៖** សរសេរសារឱ្យច្បាស់លាស់។ កុំ Commit ឯកសារដែលកើតឡើងពីការ Build ឬកញ្ចប់បណ្ណាល័យជំនួយ (ដូចជា \`node_modules\`)។

### វិន័យស្នូល
១. **Commit ឱ្យបានញឹកញាប់៖** ការ Commit តូចៗងាយស្រួលរកកំហុស និង Revert។
២. **កុំ Commit អាថ៌កំបាំង៖** រក្សាទុកលេខកូដ និង API Keys ក្នុងឯកសារ \`.env\`។
៣. **Pull មុនពេល Push៖** ទាញយកកូដថ្មីពីក្រុមការងារជានិច្ចដើម្បីចៀសវាងបញ្ហាទាស់គ្នា។`
        },
        starterCode: `git status`
      },
      {
        id: "git-glossary",
        title: { en: "Git Glossary", km: "សទ្ទានុក្រម Git" },
        content: {
          en: `# Git Glossary
Below is a compilation of foundational terms introduced across version control tracks:

- **Repository (Repo):** Project directory database containing all versions.
- **Commit:** A saved state checkpoint representing historical snapshots.
- **Branch:** Independent workspace pointer line.
- **Staging Area:** Intermediate index staging zone.
- **HEAD:** Pointer indicating your current active checkout branch.
- **Remote:** Collaborative repository hosted online (e.g., GitHub).`,
          km: `# សទ្ទានុក្រម Git
ខាងក្រោមនេះជាពាក្យគន្លឹះសំខាន់ៗដែលត្រូវបានប្រើប្រាស់នៅក្នុងប្រព័ន្ធគ្រប់គ្រងកំណែកូដ Git៖

- **Repository (Repo)៖** ឃ្លាំងផ្ទុកទិន្នន័យគម្រោងដែលផ្ទុកគ្រប់កំណែកូដ។
- **Commit៖** ការរក្សាទុកស្ថានភាពកូដមួយដំណាក់កាល។
- **Branch៖** មែកធាងការងារឯករាជ្យពីមែកធាងមេ។
- **Staging Area៖** តំបន់រៀបចំឯកសារបណ្តោះអាសន្នមុនពេល Commit។
- **HEAD៖** ទ្រនិចចង្អុលបង្ហាញទីតាំង Branch បច្ចុប្បន្នដែលអ្នកកំពុងឈរ។
- **Remote៖** ឃ្លាំងផ្ទុកកូដនៅលើអនឡាញ (ដូចជា GitHub)។`
        },
        starterCode: `git status`
      }
    ]
  },
  {
    id: "git-github",
    title: { en: "Git and GitHub", km: "Git និង GitHub" },
    lessons: [
      {
        id: "github-get-started",
        title: { en: "GitHub Get Started", km: "ការចាប់ផ្តើម GitHub" },
        content: {
          en: `# GitHub Get Started
GitHub is a cloud platform hosting Git repositories. Working with GitHub introduces a **Remote Host** actor.

> **Note:** Because this simulator operates in a browser sandbox, commands connecting to GitHub (like \`push\`, \`pull\`, \`clone\`) run against a **mocked remote** to teach workflows without requiring real network configurations.

### Common Syntax
\`\`\`bash
$ git remote -v
\`\`\`

### Worked Example
List configured remote URLs connected to your workspace:
\`\`\`bash
$ git remote -v
origin  https://github.com/user/project.git (fetch)
origin  https://github.com/user/project.git (push)
\`\`\``,
          km: `# ការចាប់ផ្តើម GitHub
GitHub គឺជាវេទិកាពពក (Cloud platform) សម្រាប់ផ្ទុកឃ្លាំងកូដ Git។ ការប្រើប្រាស់វាណែនាំឱ្យស្គាល់ពី **Remote Host** (ម៉ាស៊ីនបម្រើក្រៅ)។

> **សម្គាល់៖** ដោយសារតែកម្មវិធីនេះដំណើរការលើ Browser Sandbox រាល់ពាក្យបញ្ជាភ្ជាប់ទៅកាន់ GitHub (\`push\`, \`pull\`, \`clone\`) នឹងដំណើរការលើប្រព័ន្ធ **Mocked remote** ដើម្បីបង្រៀនអ្នកដោយមិនបាច់ភ្ជាប់អ៊ីនធឺណិតពិតប្រាកដ។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git remote -v
\`\`\`

### ឧទាហរណ៍អនុវត្ត
បង្ហាញតំណភ្ជាប់ឃ្លាំងកូដក្រៅដែលបានភ្ជាប់៖
\`\`\`bash
$ git remote -v
\`\`\``
        },
        starterCode: `git remote -v`
      },
      {
        id: "git-what-is-ssh",
        title: { en: "Git What is SSH?", km: "តើ SSH គឺជាអ្វី?" },
        content: {
          en: `# Git What is SSH?
SSH (Secure Shell) is an encrypted protocol providing highly secure authentication keys to authorize remote connections without sending raw passwords.

> **Tip:** SSH keys come in pairs: a **private key** (stored safely on your laptop) and a **public key** (shared with remote servers like GitHub).

### Common Syntax
To generate keys on your machine:
\`\`\`bash
$ ssh-keygen -t ed25519 -C "your.email@example.com"
\`\`\``,
          km: `# តើ SSH គឺជាអ្វី?
SSH (Secure Shell) គឺជាពិធីការអ៊ិនគ្រីបដែលផ្តល់នូវសោរអត្តសញ្ញាណមានសុវត្ថិភាពខ្ពស់ ដើម្បីអនុញ្ញាតការតភ្ជាប់ដោយមិនបាច់វាយលេខសម្ងាត់រាល់ពេល។

> **គន្លឹះ៖** សោរ SSH មកជាគូ៖ **Private key** (រក្សាទុកលើម៉ាស៊ីនរបស់អ្នក) និង **Public key** (ចែករំលែកជាមួយម៉ាស៊ីនបម្រើដូចជា GitHub)។

### វាក្យសម្ពន្ធទូទៅ
ដើម្បីបង្កើតសោរ SSH ថ្មី៖
\`\`\`bash
$ ssh-keygen
\`\`\``
        },
        starterCode: `ssh-keygen`
      },
      {
        id: "github-add-ssh",
        title: { en: "GitHub Add SSH", km: "ការបន្ថែម SSH ទៅ GitHub" },
        content: {
          en: `# GitHub Add SSH
Once you have generated your local SSH key pair, you must copy the **public key** (.pub) and add it to your GitHub profile settings under SSH keys.

> **Tip:** Never share or upload your private key (e.g. \`id_rsa\`). Only share the public key (\`id_rsa.pub\`).

### Common Syntax
Copy your public key:
\`\`\`bash
$ cat ~/.ssh/id_rsa.pub
\`\`\`

### Worked Example
Simulate displaying and configuring your public key signature:
\`\`\`bash
$ cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQ...
\`\`\``,
          km: `# ការបន្ថែម SSH ទៅ GitHub
នៅពេលអ្នកបង្កើតសោរ SSH រួចហើយ អ្នកត្រូវចម្លង **Public key** (.pub) ទៅដាក់ក្នុងប្រវត្តិរូបគណនី GitHub របស់អ្នក។

> **គន្លឹះ៖** កុំបង្ហោះ ឬឱ្យសោរឯកជន (Private key) ទៅកាន់នរណាម្នាក់ឱ្យសោះ។ ប្រើប្រាស់តែ Public key ប៉ុណ្ណោះ។

### វាក្យសម្ពន្ធទូទៅ
បង្ហាញកូដសោរសកលដើម្បីចម្លង៖
\`\`\`bash
$ cat ~/.ssh/id_rsa.pub
\`\`\`

### ឧទាហរណ៍អនុវត្ត
បង្ហាញសោរ SSH ដែលបានបង្កើតរួច៖
\`\`\`bash
$ cat .gitattributes
\`\`\``
        },
        starterCode: `cat .gitattributes`
      },
      {
        id: "github-set-remote",
        title: { en: "GitHub Set Remote", km: "ការភ្ជាប់ Remote URL" },
        content: {
          en: `# GitHub Set Remote
To map your existing local repository to a remote repository on GitHub, add a remote pointer alias named \`origin\`.

> **Tip:** You can name remote connections whatever you want, but \`origin\` is the standard alias for the central upstream repository.

### Common Syntax
\`\`\`bash
$ git remote add origin <remote-repository-URL>
\`\`\`

### Worked Example
Connect your local workspace to a mock GitHub repo:
\`\`\`bash
$ git remote add origin https://github.com/user/project.git
$ git remote -v
\`\`\``,
          km: `# ការភ្ជាប់ Remote URL
ដើម្បីភ្ជាប់ឃ្លាំងកូដក្នុងម៉ាស៊ីនរបស់អ្នក ទៅកាន់ឃ្លាំងកូដនៅលើ GitHub អ្នកត្រូវបន្ថែម pointer alias ដែលហៅថា \`origin\`។

> **គន្លឹះ៖** អ្នកអាចដាក់ឈ្មោះឱ្យ Remote តាមចិត្ត ប៉ុន្តែ \`origin\` គឺជាឈ្មោះស្តង់ដារសម្រាប់ឃ្លាំងកូដមេ។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git remote add origin <តំណភ្ជាប់ឃ្លាំងកូដលើអនឡាញ>
\`\`\`

### ឧទាហរណ៍អនុវត្ត
តភ្ជាប់ឃ្លាំងកូដបច្ចុប្បន្នទៅកាន់ GitHub Mock URL៖
\`\`\`bash
$ git remote add origin https://github.com/user/project.git
$ git remote -v
\`\`\``
        },
        starterCode: `git init
git remote add origin https://github.com/user/project.git
git remote -v`
      },
      {
        id: "github-edit-code",
        title: { en: "GitHub Edit Code", km: "កែប្រែកូដលើ GitHub" },
        content: {
          en: `# GitHub Edit Code
GitHub allows you to edit files directly in the browser. However, doing so creates a new commit on the remote, putting your local repository out of sync.

> **Tip:** When changes occur on GitHub, always run a pull command locally before trying to push any new work.

### Standard Flow
- Edit file on github.com (creates remote commit)
- Run pull command locally to sync changes.`,
          km: `# កែប្រែកូដលើ GitHub
GitHub អនុញ្ញាតឱ្យអ្នកកែសម្រួលឯកសារដោយផ្ទាល់នៅលើ Browser។ ទោះជាយ៉ាងណា ការធ្វើបែបនេះបង្កើត Commit ថ្មីនៅលើ Remote ដែលធ្វើឱ្យកូដក្នុងម៉ាស៊ីនរបស់អ្នកហួសសម័យ។

> **គន្លឹះ៖** នៅពេលមានការផ្លាស់ប្តូរនៅលើ GitHub ត្រូវប្រាកដថាទាញយក (Pull) មកក្នុងម៉ាស៊ីនមុនពេល Push ឡើងវិញ។

### លំហូរការងារ
- កែប្រែឯកសារលើ github.com (បង្កើត Remote Commit)
- រត់ពាក្យបញ្ជាទាញយកកូដក្នុងម៉ាស៊ីនផ្ទាល់។`
        },
        starterCode: `git status`
      },
      {
        id: "pull-from-github",
        title: { en: "Pull from GitHub", km: "ទាញកូដ Pull ពី GitHub" },
        content: {
          en: `# Pull from GitHub
Use \`git pull\` to fetch latest changes from a remote repository and automatically integrate them into your active branch.

> **Tip:** \`git pull\` is actually a combination of two commands: \`git fetch\` (downloading changes) and \`git merge\` (integrating them).

### Common Syntax
\`\`\`bash
$ git pull <remote> <branch>
\`\`\`

### Worked Example
Sync latest commits on master branch from your GitHub origin:
\`\`\`bash
$ git pull origin master
From https://github.com/user/project
 * branch            master     -> FETCH_HEAD
Already up to date.
\`\`\``,
          km: `# ទាញកូដ Pull ពី GitHub
ប្រើប្រាស់ \`git pull\` ដើម្បីទាញយកការផ្លាស់ប្តូរកូដថ្មីៗពី GitHub មកកាន់ម៉ាស៊ីនរបស់អ្នក និងបញ្ចូលវាទៅក្នុងមែកធាងបច្ចុប្បន្នដោយស្វ័យប្រវត្ត។

> **គន្លឹះ៖** តាមពិតទៅ \`git pull\` គឺជាការរួមបញ្ចូលគ្នានៃពាក្យបញ្ជាពីរ៖ \`git fetch\` (ទាញយកកូដ) និង \`git merge\` (បញ្ចូលគ្នា)។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git pull <ឈ្មោះ_remote> <ឈ្មោះ_branch>
\`\`\`

### ឧទាហរណ៍អនុវត្ត
ទាញយកកូដថ្មីពី origin master មកកាន់ម៉ាស៊ីនបច្ចុប្បន្ន៖
\`\`\`bash
$ git pull origin master
\`\`\``
        },
        starterCode: `git init
git remote add origin https://github.com/user/project.git
git pull origin master`
      },
      {
        id: "push-to-github",
        title: { en: "Push to GitHub", km: "ការបញ្ជូនកូដ Push" },
        content: {
          en: `# Push to GitHub
Use \`git push\` to transmit your local commits up to a remote repository so they can be securely archived and shared with peers.

> **Tip:** Use the \`-u\` flag (upstream) on your first push to link the local branch to the remote branch permanently.

### Common Syntax
\`\`\`bash
$ git push -u origin master
\`\`\`

### Worked Example
Upload your local commit history to your GitHub remote repository:
\`\`\`bash
$ git push origin master
Enumerating objects: 5, done.
Writing objects: 100% (3/3), done.
To https://github.com/user/project.git
 * [new branch]      master -> master
\`\`\``,
          km: `# ការបញ្ជូនកូដ Push ទៅ GitHub
ប្រើប្រាស់ \`git push\` ដើម្បីបញ្ជូន និងរក្សាទុក Commits ក្នុងម៉ាស៊ីនរបស់អ្នកឡើងទៅកាន់ GitHub ដើម្បីចែករំលែកជាមួយសហការី។

> **គន្លឹះ៖** ប្រើ flag \`-u\` (upstream) ក្នុងការ Push លើកដំបូងដើម្បីភ្ជាប់មែកធាងបច្ចុប្បន្នទៅកាន់ Remote ជាអចិន្ត្រៃយ៍។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git push -u origin master
\`\`\`

### ឧទាហរណ៍អនុវត្ត
បញ្ជូនប្រវត្តិកូដក្នុងម៉ាស៊ីនឡើងទៅកាន់ origin master៖
\`\`\`bash
$ git push origin master
\`\`\``
        },
        starterCode: `git init
git add .
git commit -m "feat: complete UI"
git remote add origin https://github.com/user/project.git
git push origin master`
      },
      {
        id: "github-branch",
        title: { en: "GitHub Branch", km: "មែកធាង Remote Branch" },
        content: {
          en: `# GitHub Branch
Just like local repositories, GitHub remote servers track independent feature branches so developers can isolate concurrent works.

> **Tip:** You can inspect remote-tracking branches by running the listing command with the \`-a\` flag to show all.

### Common Command
\`\`\`bash
$ git branch -a
\`\`\``,
          km: `# មែកធាង Remote Branch
ដូចគ្នានឹងឃ្លាំងកូដក្នុងម៉ាស៊ីនដែរ ម៉ាស៊ីនបម្រើ GitHub រក្សាទុកមែកធាង (Branches) ជាច្រើនដើម្បីឱ្យសមាជិកក្រុមនីមួយៗធ្វើការងាររៀងៗខ្លួន។

> **គន្លឹះ៖** អ្នកអាចពិនិត្យមើលរាល់មែកធាងទាំងអស់ (ទាំងក្នុងម៉ាស៊ីន និងលើ Remote) ដោយបន្ថែម flag \`-a\`។

### ពាក្យបញ្ជា
\`\`\`bash
$ git branch -a
\`\`\``
        },
        starterCode: `git branch -a`
      },
      {
        id: "pull-branch-from-github",
        title: { en: "Pull Branch from GitHub", km: "ទាញយកមែកធាង Branch" },
        content: {
          en: `# Pull Branch from GitHub
To work on a branch created by a teammate on GitHub, fetch the remote metadata and checkout a local tracking branch.

> **Tip:** \`git checkout -b <branch>\` will create and switch, but checkout automatically maps tracked remote matches.

### Common Syntax
\`\`\`bash
$ git fetch origin
$ git checkout -b <branch-name> origin/<branch-name>
\`\`\``,
          km: `# ទាញយកមែកធាង Branch ពី GitHub
ដើម្បីសហការ និងបន្តធ្វើការងារលើ Branch ដែលបង្កើតឡើងដោយសមាជិកក្រុមម្នាក់ទៀតលើ GitHub អ្នកត្រូវទាញយកព័ត៌មាន និងបង្កើតមែកធាងឆ្លុះ។

> **គន្លឹះ៖** \`git fetch origin\` ជួយទាញយករាល់ព័ត៌មានមែកធាងថ្មីៗទាំងអស់ពី Remote មកកុំព្យូទ័ររបស់អ្នកជាមុនសិន។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git fetch origin
$ git checkout <ឈ្មោះ_branch>
\`\`\``
        },
        starterCode: `git init
git remote add origin https://github.com/user/project.git
git checkout master`
      },
      {
        id: "push-branch-to-github",
        title: { en: "Push Branch to GitHub", km: "បញ្ជូនមែកធាង Branch" },
        content: {
          en: `# Push Branch to GitHub
To share a new feature branch you've created locally, push it to origin so teammates can view and review your work.

> **Tip:** Once pushed, GitHub will display an automatic prompt on your repository page to open a Pull Request.

### Common Syntax
\`\`\`bash
$ git push origin <branch-name>
\`\`\`

### Worked Example
Push your working branch \`dev-ui\` up to origin repository:
\`\`\`bash
$ git push origin dev-ui
 * [new branch]      dev-ui -> dev-ui
\`\`\``,
          km: `# បញ្ជូនមែកធាង Branch ទៅ GitHub
ដើម្បីចែករំលែក Branch ថ្មីដែលអ្នកបានបង្កើត និងសរសេរក្នុងម៉ាស៊ីនរបស់អ្នក ត្រូវធ្វើការ Push វាទៅកាន់ GitHub។

> **គន្លឹះ៖** បន្ទាប់ពី Push រួច GitHub នឹងបង្ហាញប៊ូតុងពិសេសមួយដើម្បីបង្កើត "Pull Request" ភ្លាមៗនៅលើវេទិកា។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git push origin <ឈ្មោះមែកធាង>
\`\`\`

### ឧទាហរណ៍អនុវត្ត
បញ្ជូនមែកធាង \`dev-ui\` ទៅកាន់ remote origin៖
\`\`\`bash
$ git push origin dev-ui
\`\`\``
        },
        starterCode: `git init
git branch dev-ui
git push origin dev-ui`
      },
      {
        id: "github-flow",
        title: { en: "GitHub Flow", km: "លំហូរការងារ GitHub Flow" },
        content: {
          en: `# GitHub Flow
GitHub Flow is a lightweight, branch-based workflow supporting teams and deployments.

> **Tip:** The flow is simple: Create branch -> Edit files -> Commit changes -> Open Pull Request -> Merge & Deploy.

### Key Milestones
1. **Branch:** Create a branch from \`main\`.
2. **Commit:** Write descriptive checkpoint revisions.
3. **Pull Request:** Open a thread to discuss and review code.
4. **Merge:** Integrate approved changes safely.`,
          km: `# លំហូរការងារ GitHub Flow
GitHub Flow គឺជាវិធីសាស្ត្រការងារស្តង់ដារដ៏ពេញនិយម និងមានប្រសិទ្ធភាពសម្រាប់ក្រុមការងារអភិវឌ្ឍន៍កម្មវិធី។

> **គន្លឹះ៖** ដំណើរការ៖ បង្កើត Branch -> សរសេរកូដ -> Commit -> បង្កើត Pull Request -> ត្រួតពិនិត្យ និង Merge។

### ដំណាក់កាលស្នូល
១. **Branch៖** បង្កើតមែកធាងចេញពី \`main\`។
២. **Commit៖** រក្សាទុកប្រវត្តិការងារឱ្យមានរបៀបរៀបរយ។
៣. **Pull Request៖** ពិភាក្សា និងពិនិត្យកូដជាមួយក្រុមការងារ។
៤. **Merge៖** បញ្ចូលកូដទៅកាន់ Branch មេ។`
        },
        starterCode: `git status`
      },
      {
        id: "github-pages",
        title: { en: "GitHub Pages", km: "សេវាកម្ម GitHub Pages" },
        content: {
          en: `# GitHub Pages
GitHub Pages allows you to host static websites directly from your GitHub repositories for free!

> **Tip:** Place an \`index.html\` file in the root of your repository, and enable Pages in the repository **Settings > Pages**.

### Core Requirements
- A public repository.
- An entry static document named \`index.html\`.
- Deployed under: \`https://<username>.github.io/<repo-name>/\`.`,
          km: `# សេវាកម្ម GitHub Pages
GitHub Pages គឺជាសេវាកម្មលំដាប់ពិភពលោក ដែលអនុញ្ញាតឱ្យអ្នកបង្កើតគេហទំព័រជាសាធារណៈដោយឥតគិតថ្លៃ ចេញពីគម្រោងរបស់អ្នក។

> **គន្លឹះ៖** គ្រាន់តែដាក់ឯកសារ \`index.html\` នៅផ្នែកខាងក្រៅបង្អស់នៃគម្រោង ហើយបើកដំណើរការវានៅក្នុង **Settings > Pages**។

### លក្ខខណ្ឌចាំបាច់
- គម្រោងជាលក្ខណៈ Public (សាធារណៈ)។
- មានឯកសារចំណុចចាប់ផ្តើមឈ្មោះ \`index.html\`។
- អាសយដ្ឋានគេហទំព័រ៖ \`https://ឈ្មោះអ្នកប្រើ.github.io/ឈ្មោះគម្រោង/\`។`
        },
        starterCode: `git status`
      },
      {
        id: "git-gui-clients",
        title: { en: "Git GUI Clients", km: "កម្មវិធី Git GUI" },
        content: {
          en: `# Git GUI Clients
While terminal CLI is powerful, graphical interfaces (GUIs) like GitHub Desktop, Sourcetree, or GitKraken can make branching and commits more visual.

> **Tip:** Most professional IDEs (like VS Code) have built-in visual Git panels which simplify staging, diff comparisons, and histories.

### Recommended GUI Tools
- **GitHub Desktop:** Cleanest and simplest for beginners.
- **Sourcetree:** Feature-rich client maintained by Atlassian.
- **VS Code Source Control:** Seamlessly integrated into your editor.`,
          km: `# កម្មវិធី Git GUI (លក្ខណៈ visual)
ទោះបីជាការសរសេរកូដបញ្ជាលើ Terminal មានអនុភាពខ្លាំង តែកម្មវិធីបង្ហាញរូបភាព (GUI) ដូចជា GitHub Desktop ឬ Sourcetree ជួយឱ្យការមើលកូដកាន់តែងាយ។

> **គន្លឹះ៖** ឧបករណ៍សរសេរកូដភាគច្រើន (ដូចជា VS Code) មានផ្ទាំងប្រព័ន្ធគ្រប់គ្រង Git មកជាមួយស្រាប់ ដែលជួយសម្រួលការប្រៀបធៀបកូដ។

### ឧបករណ៍ណែនាំ
- **GitHub Desktop៖** ងាយស្រួល និងស្អាតបំផុតសម្រាប់អ្នកទើបចាប់ផ្តើម។
- **Sourcetree៖** សម្បូរបែប និងរៀបចំដោយក្រុមហ៊ុន Atlassian។
- **VS Code Source Control៖** បង្កប់នៅក្នុងកម្មវិធីសរសេរកូដផ្ទាល់តែម្តង។`
        },
        starterCode: `git status`
      }
    ]
  },
  {
    id: "git-contribute",
    title: { en: "Git Contribute", km: "ការចូលរួមសហការកូដ" },
    lessons: [
      {
        id: "github-fork",
        title: { en: "GitHub Fork", km: "ការ Fork ឃ្លាំងកូដ" },
        content: {
          en: `# GitHub Fork
A **Fork** creates a personal cloud duplicate of someone else's public repository on your GitHub account, allowing you to modify code safely.

> **Tip:** Forking happens entirely in the cloud on github.com. Once forked, clone your personal copy to work on it locally.

### Key Flow
- Visit target repository on GitHub.
- Click the **Fork** button (top right).
- A replica repo is created in your personal account dashboard.`,
          km: `# ការ Fork ឃ្លាំងកូដ
ការ **Fork** គឺជាការចម្លងឃ្លាំងកូដរបស់អ្នកដទៃមកទុកក្នុងគណនី GitHub ផ្ទាល់ខ្លួនរបស់អ្នក ដើម្បីកែប្រែដោយសេរីដោយមិនប៉ះពាល់ដល់ម្ចាស់ដើមឡើយ។

> **គន្លឹះ៖** ការ Fork ត្រូវបានធ្វើឡើងនៅលើគេហទំព័រ github.com។ បន្ទាប់មក អ្នកអាច Clone ឃ្លាំងកូដផ្ទាល់ខ្លួននោះមកម៉ាស៊ីនរបស់អ្នក។

### ដំណាក់កាល
- ចូលទៅកាន់ឃ្លាំងកូដរបស់គម្រោងណាមួយលើ GitHub។
- ចុចលើប៊ូតុង **Fork** (នៅខាងស្តាំផ្នែកខាងលើ)។
- ឃ្លាំងកូដចម្លងនឹងលេចឡើងក្នុងគណនីរបស់អ្នក។`
        },
        starterCode: `git status`
      },
      {
        id: "git-clone-from-github",
        title: { en: "Git Clone from GitHub", km: "ការ Clone ឃ្លាំងកូដ" },
        content: {
          en: `# Git Clone from GitHub
Use \`git clone\` to download a full read-write copy of your newly forked repository from GitHub to your local machine.

> **Tip:** Cloned repositories are automatically connected back to their GitHub origin remote.

### Common Syntax
\`\`\`bash
$ git clone <repository-URL>
\`\`\`

### Worked Example
Clone your personal forked project down into your local system:
\`\`\`bash
$ git clone https://github.com/user/project-forked.git
Cloning into 'project-forked'...
remote: Total 24 (delta 4)
Receiving objects: 100% (24/24), done.
\`\`\``,
          km: `# ការ Clone ឃ្លាំងកូដពី GitHub
ប្រើប្រាស់ \`git clone\` ដើម្បីទាញយកគម្រោងទាំងមូលពី GitHub មកកាន់ម៉ាស៊ីនផ្ទាល់ខ្លួនរបស់អ្នកសម្រាប់សរសេរកូដបន្ត។

> **គន្លឹះ៖** ឃ្លាំងកូដដែលបានទាញយកនឹងត្រូវតភ្ជាប់ទំនាក់ទំនងជាស្វ័យប្រវត្តត្រឡប់ទៅកាន់ GitHub remote origin។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git clone <តំណភ្ជាប់ឃ្លាំងកូដ>
\`\`\`

### ឧទាហរណ៍អនុវត្ត
សាកល្បងទាញយកគម្រោងដែលបាន Fork រួចមកម៉ាស៊ីនរបស់អ្នក៖
\`\`\`bash
$ git clone https://github.com/user/project-forked.git
\`\`\``
        },
        starterCode: `git clone https://github.com/user/project-forked.git`
      },
      {
        id: "github-send-pull-request",
        title: { en: "GitHub Send Pull Request", km: "ការផ្ញើ Pull Request" },
        content: {
          en: `# GitHub Send Pull Request
A **Pull Request (PR)** allows you to formally submit your proposed code additions back to the original upstream project owner for review and merge.

> **Tip:** A clean contribution flow: Fork upstream -> Clone locally -> Write features -> Push to your fork -> Submit Pull Request on GitHub.

### Steps to Submit PR
1. **Push:** Send commits to your personal fork branch on GitHub.
2. **Open PR:** Visit the original repository on GitHub; click "Compare & pull request".
3. **Describe:** Explain the rationale and impact of your proposed adjustments clearly.`,
          km: `# ការផ្ញើ Pull Request (PR)
**Pull Request (PR)** គឺជាការស្នើសុំឱ្យម្ចាស់គម្រោងដើម ពិនិត្យ និងបញ្ចូលកូដដែលអ្នកបានកែលម្អរួច ទៅក្នុងគម្រោងចម្បងរបស់ពួកគេវិញ។

> **គន្លឹះ៖** លំហូរការងារល្អ៖ Fork -> Clone -> បន្ថែមមុខងារ -> Push ទៅ fork របស់អ្នក -> បើក Pull Request លើ GitHub។

### ជំហានបញ្ជូន PR
១. **Push៖** បញ្ជូនកូដទៅកាន់ Fork ផ្ទាល់ខ្លួនរបស់អ្នកលើ GitHub។
២. **Open PR៖** ចូលទៅកាន់គម្រោងដើម រួចចុចលើប៊ូតុង "Compare & pull request"។
៣. **ពន្យល់៖** សរសេរពន្យល់ពីអត្ថប្រយោជន៍ និងការកែប្រែកូដរបស់អ្នកឱ្យច្បាស់លាស់។`
        },
        starterCode: `git init
git add .
git commit -m "feat: improved performance"
git push origin feature-branch`
      }
    ]
  },
  {
    id: "git-undo",
    title: { en: "Git Undo", km: "ការត្រឡប់ថយក្រោយ" },
    lessons: [
      {
        id: "git-revert",
        title: { en: "Git Revert", km: "ការ Revert កូដ" },
        content: {
          en: `# Git Revert
Reverting undoes a previous commit by creating a brand **new commit** that applies opposite alterations. This preserves the historical timeline safely.

> **Tip:** Reverting is the safest way to undo on shared collaborative branches because it does not alter or erase existing history!

### Common Syntax
\`\`\`bash
$ git revert <commit-hash>
\`\`\`

### Worked Example
Undo changes made in commit \`a1b2c3d\` securely using opposite changes:
\`\`\`bash
$ git revert a1b2c3d
[master e5f6g7h] Revert "feat: setup basic layout skeleton"
 1 file changed, 1 deletion(-)
\`\`\``,
          km: `# ការ Revert កូដ
ការ Revert គឺជាការលុបចោលការប្រែប្រួលនៃ Commit ណាមួយដោយបង្កើត **Commit ថ្មីមួយផ្សេងទៀត** ដែលបញ្ច្រាសកូដមកវិញ។ វាជួយរក្សាប្រវត្តិការងារចាស់បានល្អ។

> **គន្លឹះ៖** Revert គឺជាវិធីសាស្ត្រលុបកូដមានសុវត្ថិភាពបំផុតលើ Branch រួមគ្នា ព្រោះវាមិនលុបប្រវត្តិចាស់ចោលឡើយ!

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git revert <កូដ_hash_នៃ_commit>
\`\`\`

### ឧទាហរណ៍អនុវត្ត
ធ្វើការ Revert លើ Commit ជាក់លាក់មួយ៖
\`\`\`bash
$ git revert a1b2c3d
\`\`\``
        },
        starterCode: `git init
git add .
git commit -m "Introduce bug"
git revert HEAD`
      },
      {
        id: "git-reset",
        title: { en: "Git Reset", km: "ការ Reset កូដ" },
        content: {
          en: `# Git Reset
Resetting rewinds your branch pointer backwards, effectively removing commits from your branch timeline.

> **Warning:** \`--hard\` is dangerous because it permanently discards all uncommitted modifications and rewound commits. Use \`--soft\` to keep changes.

### Common Options
- \`--soft:\` Rewinds timeline but preserves file updates in Staging.
- \`--hard:\` Erases commits AND working directory changes entirely.

### Common Syntax
\`\`\`bash
$ git reset --soft <commit-hash>
$ git reset --hard <commit-hash>
\`\`\``,
          km: `# ការ Reset កូដ
ការ Reset គឺជាការទាញទ្រនិច Branch ត្រឡប់ថយក្រោយ ដែលធ្វើឱ្យប្រវត្តិកូដមួយចំនួនត្រូវបានលុបចេញពីខ្សែបន្ទាត់ពេលវេលា។

> **ប្រុងប្រយ័ត្ន៖** ជម្រើស \`--hard\` គឺគ្រោះថ្នាក់ខ្លាំងណាស់ ព្រោះវាលុបចោលកូដកែប្រែទាំងអស់ចោល។ ប្រើ \`--soft\` ដើម្បីរក្សាកូដក្នុង Staging។

### ជម្រើសសំខាន់ៗ
- \`--soft៖\` ត្រឡប់ថយក្រោយតែរក្សាកូដក្នុង Staging មិនឱ្យបាត់។
- \`--hard៖\` លុបចោលទាំងស្រុងនូវ Commits និងកូដក្នុងម៉ាស៊ីនការងារ។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git reset --soft <កូដ_hash>
$ git reset --hard <កូដ_hash>
\`\`\``
        },
        starterCode: `git init
git reset --hard HEAD`
      },
      {
        id: "git-amend",
        title: { en: "Git Amend", km: "ការកែប្រែ Commit ចុងក្រោយ" },
        content: {
          en: `# Git Amend
If you just made a commit but realized you forgot a small detail or wrote a typo in the message, you can amend (update) the last commit.

> **Tip:** Only amend local commits that have not been pushed to GitHub yet. Rewriting shared history is highly disruptive.

### Common Syntax
\`\`\`bash
$ git commit --amend -m "New correct commit message"
\`\`\`

### Worked Example
Add a forgotten file and amend your last commit message:
\`\`\`bash
$ git add forgotten_style.css
$ git commit --amend -m "feat: complete navigation UI styles"
\`\`\``,
          km: `# ការកែប្រែ Commit ចុងក្រោយ
ប្រសិនបើអ្នកទើបតែធ្វើការ Commit រួចហើយរកឃើញថាភ្លេចដាក់ឯកសារ ឬសរសេរសារ Commit ខុស អ្នកអាចកែសម្រួលវាឡើងវិញបានដោយប្រើប្រាស់ Amend។

> **គន្លឹះ៖** គួរតែធ្វើការ Amend តែចំពោះកូដក្នុងម៉ាស៊ីនដែលមិនទាន់បាន Push ទៅកាន់ GitHub ប៉ុណ្ណោះ។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git commit --amend -m "សារកែតម្រូវថ្មី"
\`\`\`

### ឧទាហរណ៍អនុវត្ត
បញ្ចូលឯកសារបន្ថែម និងកែសារ Commit ចុងក្រោយ៖
\`\`\`bash
$ git commit --amend -m "feat: complete layout structure"
\`\`\``
        },
        starterCode: `git init
git add index.html
git commit -m "wip layouts"
git commit --amend -m "feat: complete setup architecture"`
      },
      {
        id: "git-rebase",
        title: { en: "Git Rebase", km: "ការរៀបគ្រឹះកូដ Rebase" },
        content: {
          en: `# Git Rebase
Rebasing reapplies commits from one branch on top of another base commit. It creates a completely linear, clean history timeline.

> **Tip:** Rebase makes your log incredibly beautiful, but never rebase public shared branches; only rebase local development branches.

### Common Syntax
\`\`\`bash
$ git checkout feature-branch
$ git rebase master
\`\`\`

### Worked Example
Move your feature commits directly on top of the newest master branch tip:
\`\`\`bash
$ git rebase master
Successfully rebased and updated refs/heads/feature-branch
\`\`\``,
          km: `# ការរៀបគ្រឹះកូដ Rebase
Rebase គឺជាការផ្លាស់ប្តូរចំណុចចាប់ផ្តើម (Base) នៃមែកធាងការងាររបស់អ្នក ទៅដាក់នៅលើ Commit ចុងក្រោយបង្អស់របស់មែកធាងមេ ដើម្បីឱ្យប្រវត្តិកូដជាខ្សែបន្ទាត់ត្រង់។

> **គន្លឹះ៖** Rebase ធ្វើឱ្យប្រវត្តិកូដស្អាតល្អ តែហាមប្រើប្រាស់វាលើ Branch រួមគ្នាដែលបាន Push ទៅ GitHub រួចហើយឱ្យសោះ។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git checkout <ឈ្មោះមែកធាង>
$ git rebase master
\`\`\`

### ឧទាហរណ៍អនុវត្ត
រៀបចំប្រវត្តិកូដឱ្យរត់បន្តពី master ចុងក្រោយ៖
\`\`\`bash
$ git rebase master
\`\`\``
        },
        starterCode: `git init
git rebase master`
      },
      {
        id: "git-reflog",
        title: { en: "Git Reflog", km: "ប្រវត្តិលម្អិត Reflog" },
        content: {
          en: `# Git Reflog
Reflog (Reference Log) tracks every single movement of the HEAD pointer, allowing you to recover deleted branches or lost commits easily.

> **Tip:** If you accidentally hard reset or delete a branch, run \`git reflog\` to find the commit hash where your work existed and recover it!

### Common Syntax
\`\`\`bash
$ git reflog
\`\`\`

### Worked Example
List recent movements of HEAD to pinpoint lost state revisions:
\`\`\`bash
$ git reflog
a1b2c3d HEAD@{0}: checkout: moving from master to dev-ui
9f8e7d6 HEAD@{1}: commit: feat: design forms
\`\`\``,
          km: `# ប្រវត្តិលម្អិត Reflog
Reflog (Reference Log) តាមដានរាល់ការផ្លាស់ប្តូរទាំងអស់នៃទ្រនិច HEAD (ដូចជាការប្តូរ Branch ឬ Reset)។ វាជាជំនួយការជួយសង្គ្រោះកូដដែលបាត់បង់។

> **គន្លឹះ៖** ទោះបីជាអ្នកបានប្រើប្រាស់ \`git reset --hard\` ក៏ដោយ ក៏អ្នកអាចស្វែងរក Commit Hash ដែលបាត់បង់តាមរយៈ \`git reflog\` ដើម្បីទាញវាមកវិញបានដែរ!

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git reflog
\`\`\`

### ឧទាហរណ៍អនុវត្ត
បង្ហាញរាល់ការធ្វើដំណើររបស់ HEAD កន្លងមក៖
\`\`\`bash
$ git reflog
\`\`\``
        },
        starterCode: `git reflog`
      },
      {
        id: "git-recovery",
        title: { en: "Git Recovery", km: "ការស្តារកូដឡើងវិញ" },
        content: {
          en: `# Git Recovery
Lost commits or broken states can be restored using Git's robust inner backup pointers.

> **Tip:** Once you identify the lost commit hash from reflog, restore it using checkout or by creating a brand new recovery branch.

### Common Syntax
To create a branch pointing to a lost commit:
\`\`\`bash
$ git checkout -b recovery-branch <lost-commit-hash>
\`\`\``,
          km: `# ការស្តារកូដឡើងវិញ (Git Recovery)
រាល់កូដដែលបានបាត់បង់ ឬ Commit ដែលបានលុបអាចត្រូវបានទាញយកមកវិញបានដោយប្រើប្រាស់ប្រព័ន្ធបម្រុងទុករបស់ Git។

> **គន្លឹះ៖** នៅពេលអ្នករកឃើញ Commit Hash ដែលបាត់ពី Reflog អ្នកអាចទាញវាមកវិញបានដោយបង្កើត Branch ថ្មីមួយចង្អុលចំទីនោះ។

### វាក្យសម្ពន្ធទូទៅ
បង្កើត Branch ថ្មីដើម្បីសង្គ្រោះកូដបាត់បង់៖
\`\`\`bash
$ git checkout -b recovery-branch <កូដ_hash_ដែលបាត់>
\`\`\``
        },
        starterCode: `git reflog`
      }
    ]
  },
  {
    id: "git-advanced",
    title: { en: "Git Advanced", km: "មេរៀនកម្រិតខ្ពស់ Advanced" },
    lessons: [
      {
        id: "git-gitignore",
        title: { en: "Git .gitignore", km: "ឯកសារ .gitignore" },
        content: {
          en: `# Git .gitignore
A \`.gitignore\` text file specifies intentionally untracked files that Git should ignore (e.g., node modules, build outputs, system files, passwords).

> **Tip:** Always create a \`.gitignore\` file at the very beginning of your project. If a file is already tracked, adding it to gitignore will not unstage it.

### Example File
\`\`\`text
node_modules/
dist/
.env
*.log
\`\`\`

### Common Syntax
\`\`\`bash
$ cat .gitignore
\`\`\``,
          km: `# ឯកសារ .gitignore
ឯកសារ \`.gitignore\` ត្រូវបានប្រើសម្រាប់កំណត់អត្តសញ្ញាណឯកសារ ឬថតដែលអ្នកមិនចង់ឱ្យ Git តាមដាន (ដូចជា បណ្ណាល័យជំនួយ លេខសម្ងាត់ ឬឯកសារ Build)។

> **គន្លឹះ៖** គួរតែបង្កើតឯកសារ \`.gitignore\` តាំងពីដំបូងបង្អស់។ ប្រសិនបើឯកសារធ្លាប់ត្រូវបានតាមដានរួចហើយ ការសរសេរឈ្មោះវាក្នុង gitignore មិនមានប្រសិទ្ធភាពទេ។

### គំរូឯកសារ .gitignore
\`\`\`text
node_modules/
dist/
.env
*.log
\`\`\`

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ cat .gitignore
\`\`\``
        },
        starterCode: `cat .gitignore`
      },
      {
        id: "git-gitattributes",
        title: { en: "Git .gitattributes", km: "ឯកសារ .gitattributes" },
        content: {
          en: `# Git .gitattributes
A \`.gitattributes\` file defines attributes on pathnames. It forces specific formatting configurations, line endings normalization, or binary parameters.

> **Tip:** Use attributes to prevent cross-platform line ending conflicts (Windows CRLF vs macOS LF) by forcing standard text behaviors.

### Example File
\`\`\`text
* text=auto
*.png -text
\`\`\`

### Common Command
\`\`\`bash
$ cat .gitattributes
\`\`\``,
          km: `# ឯកសារ .gitattributes
ឯកសារ \`.gitattributes\` កំណត់លក្ខណៈពិសេសលើឯកសារមួយចំនួន ដូចជាការតម្រូវឱ្យបញ្ចប់បន្ទាត់តាមលក្ខណៈពិសេស ឬចាត់ទុកឯកសារជារូបភាព/កូដ។

> **គន្លឹះ៖** ប្រើប្រាស់វាដើម្បីដោះស្រាយបញ្ហាបញ្ចប់បន្ទាត់រវាងប្រព័ន្ធប្រតិបត្តិការខុសគ្នា (Windows CRLF និង macOS LF)។

### គំរូឯកសារ
\`\`\`text
* text=auto
*.png -text
\`\`\`

### ពាក្យបញ្ជា
\`\`\`bash
$ cat .gitattributes
\`\`\``
        },
        starterCode: `cat .gitattributes`
      },
      {
        id: "git-lfs",
        title: { en: "Git Large File Storage (LFS)", km: "ប្រព័ន្ធផ្ទុកឯកសារធំ LFS" },
        content: {
          en: `# Git Large File Storage (LFS)
Git Large File Storage replaces massive digital files (audio, video, datasets) with tiny text pointers inside Git, archiving the real data on LFS servers.

> **Tip:** Git repos get incredibly slow when storing big assets. LFS solves this by only downloading assets when checking out branches.

### Common Syntax
To track large files:
\`\`\`bash
$ git lfs track "*.mp4"
$ git add .gitattributes
\`\`\``,
          km: `# ប្រព័ន្ធផ្ទុកឯកសារធំ (Git LFS)
Git Large File Storage (LFS) ជួយជំនួសឯកសារធំៗ (វីដេអូ សំឡេង ឯកសារទិន្នន័យ) ឱ្យទៅជា text pointers តូចៗ ដើម្បីកុំឱ្យឃ្លាំងកូដរបស់អ្នកឡើងទំហំធំពេក។

> **គន្លឹះ៖** ឃ្លាំងកូដ Git នឹងដំណើរការយឺតខ្លាំងបើផ្ទុកឯកសារធំៗ។ LFS ជួយដោះស្រាយបញ្ហានេះយ៉ាងមានប្រសិទ្ធភាព។

### វាក្យសម្ពន្ធទូទៅ
ដើម្បីកំណត់ឱ្យ LFS តាមដានឯកសារធំ៖
\`\`\`bash
$ git lfs track "*.mp4"
$ git add .gitattributes
\`\`\``
        },
        starterCode: `cat .gitattributes`
      },
      {
        id: "git-signing",
        title: { en: "Git Signing Commits/Tags", km: "ការចុះហត្ថលេខា Commits" },
        content: {
          en: `# Git Signing Commits/Tags
Cryptographic signing verifies that commits were truly written by you, preventing identity impersonation on collaborative platforms.

> **Tip:** Signed commits display a reassuring green "Verified" badge on GitHub, building trust in secure enterprise codebases.

### Common Syntax
To configure Git to sign commits with GPG keys:
\`\`\`bash
$ git config --global commit.gpgsign true
$ git commit -S -m "feat: secure commit signing"
\`\`\``,
          km: `# ការចុះហត្ថលេខា Commits/Tags (Signing)
ការចុះហត្ថលេខាអេឡិចត្រូនិចធានាថា Commit នោះពិតជាសរសេរឡើងដោយអ្នកផ្ទាល់ ដោយចៀសវាងការក្លែងបន្លំគណនីលើប្រព័ន្ធ GitHub។

> **គន្លឹះ៖** Commits ដែលបានចុះហត្ថលេខានឹងបង្ហាញផ្លាកពណ៌បៃតង "Verified" លើ GitHub ដែលជួយបង្កើនទំនុកចិត្តលើសុវត្ថិភាពកូដ។

### វាក្យសម្ពន្ធទូទៅ
កំណត់ឱ្យ Git ចុះហត្ថលេខា Commits ជាស្វ័យប្រវត្ត៖
\`\`\`bash
$ git config --global commit.gpgsign true
$ git commit -S -m "សាររបស់ Commit"
\`\`\``
        },
        starterCode: `git status`
      },
      {
        id: "git-cherrypick",
        title: { en: "Git Cherrypick & Patch", km: "ការបេះកូដ Cherry-pick" },
        content: {
          en: `# Git Cherry-pick & Patch
Cherry-picking allows you to select a specific individual commit from another branch and apply it directly onto your current active branch.

> **Tip:** Cherry-picking is highly useful when you want to migrate single hotfixes without merging an entire unstable development branch.

### Common Syntax
\`\`\`bash
$ git cherry-pick <commit-hash>
\`\`\`

### Worked Example
Copy commit checkpoint \`9f8e7d6\` from dev branch straight into your main branch:
\`\`\`bash
$ git cherry-pick 9f8e7d6
[master a1b2c3d] feat: design forms (cherry-picked)
\`\`\``,
          km: `# ការបេះកូដ Cherry-pick & Patch
Cherry-pick គឺជាការជ្រើសរើសយកតែ Commit ជាក់លាក់មួយណាពី Branch ផ្សេងមកដាក់ចូលក្នុង Branch បច្ចុប្បន្នរបស់អ្នក ដោយមិនបាច់បញ្ចូលគ្នា (Merge) ទាំងមូលឡើយ។

> **គន្លឹះ៖** Cherry-pick មានប្រយោជន៍ខ្លាំងណាស់នៅពេលចង់ទាញយកតែការជួសជុលកំហុសបន្ទាន់មួយពី Branch អភិវឌ្ឍន៍ មកកាន់ Branch មេ។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git cherry-pick <កូដ_hash_នៃ_commit>
\`\`\`

### ឧទាហរណ៍អនុវត្ត
ចម្លងតែ Commit \`9f8e7d6\` មកដាក់ក្នុង Branch master បច្ចុប្បន្ន៖
\`\`\`bash
$ git cherry-pick 9f8e7d6
\`\`\``
        },
        starterCode: `git init
git cherry-pick HEAD`
      },
      {
        id: "git-merge-conflicts",
        title: { en: "Git Merge Conflicts", km: "វិវាទកូដ Merge Conflicts" },
        content: {
          en: `# Git Merge Conflicts
A merge conflict occurs when two branches make contradictory edits to the exact same lines of a file, forcing Git to ask the programmer to resolve them manually.

> **Tip:** Git will decorate conflicting lines with separators (e.g. \`<<<<<<<\`, \`=======\`, \`>>>>>>>\`). Resolve the conflict in your editor and run \`git add\` to stage the resolution.

### Common Conflict Markers
\`\`\`text
<<<<<<< HEAD
Our local active line modifications
=======
Incoming conflicting branch modifications
>>>>>>> branch-name
\`\`\`

### Standard Solution Flow
1. Open the conflicting files.
2. Edit to keep the desired lines; remove conflict markers.
3. Stage (\`git add\`) and commit (\`git commit\`) to complete the merge.`,
          km: `# វិវាទកូដ (Merge Conflicts)
វិវាទកូដកើតឡើងនៅពេលដែល Branch ពីរខុសគ្នាធ្វើការកែប្រែបន្ទាត់កូដតែមួយក្នុងឯកសារតែមួយ ដែលធ្វើឱ្យ Git មិនដឹងថាត្រូវយកកូដខាងណា និងតម្រូវឱ្យយើងរើសដោយដៃ។

> **គន្លឹះ៖** Git នឹងសម្គាល់ចំណុចទាស់គ្នាដោយប្រើសញ្ញា (ដូចជា \`<<<<<<<\`, \`=======\`, \`>>>>>>>\`)។ កែសម្រួលរួចរត់ \`git add\` ដើម្បីបិទបញ្ចប់វិវាទ។

### ទម្រង់សញ្ញាទាស់គ្នា (Conflict Markers)
\`\`\`text
<<<<<<< HEAD
កូដបច្ចុប្បន្នរបស់អ្នក
=======
កូដថ្មីដែលបញ្ចូលមកទាស់គ្នា
>>>>>>> branch-name
\`\`\`

### ដំណោះស្រាយស្តង់ដារ
១. បើកឯកសារដែលមានបញ្ហាទាស់គ្នា។
២. សម្រេចចិត្តរើសយកកូដដែលចង់បាន រួចលុបសញ្ញាសម្គាល់ចោលឱ្យអស់។
៣. រត់ \`git add\` និង \`git commit\` ដើម្បីបញ្ចប់ការបញ្ចូលកូដ។`
        },
        starterCode: `git init
git merge conflict-branch`
      },
      {
        id: "git-cicd",
        title: { en: "Git CI/CD", km: "ការដំណើរការ CI/CD" },
        content: {
          en: `# Git CI/CD
Continuous Integration & Continuous Deployment (CI/CD) automates building, testing, and deploying your code whenever commits are pushed to GitHub.

> **Tip:** Integrating automated testing triggers on push ensures that bug-ridden contributions never make it to production systems.

### Minimal YAML Workflow Configuration Example
\`\`\`yaml
name: Test Runner
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm test
\`\`\``,
          km: `# ការដំណើរការ CI/CD (Git CI/CD)
CI/CD គឺជាប្រព័ន្ធស្វ័យប្រវត្តិកម្មដែលរត់ការសាកល្បងកូដ និងដាក់ឱ្យដំណើរការ (Deploy) ភ្លាមៗនៅពេលអ្នក Push កូដថ្មីទៅកាន់ GitHub។

> **គន្លឹះ៖** ការរៀបចំឱ្យរត់តេស្តស្វ័យប្រវត្តជួយទប់ស្កាត់កូដដែលមានកំហុសមិនឱ្យទៅដល់ដៃអ្នកប្រើប្រាស់ពិតប្រាកដ។

### គំរូការកំណត់ YAML Workflow ងាយៗ
\`\`\`yaml
name: Test Runner
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm test
\`\`\``
        },
        starterCode: `git status`
      },
      {
        id: "git-hooks",
        title: { en: "Git Hooks", km: "ប្រព័ន្ធត្រួតពិនិត្យ Git Hooks" },
        content: {
          en: `# Git Hooks
Git hooks are custom shell scripts executed automatically before or after key Git lifecycle events (such as validation prior to staging commits).

> **Tip:** Popular hooks include \`pre-commit\` (most often used to block formatting errors or secret key leakage from being committed).

### Common Hooks List
- \`pre-commit:\` Runs before commit metadata is authored.
- \`commit-msg:\` Validates commit message formatting styles.
- \`pre-push:\` Verifies builds prior to transmitting records up.`,
          km: `# ប្រព័ន្ធត្រួតពិនិត្យ Git Hooks
Git Hooks គឺជាស្គ្រីបស្វ័យប្រវត្តិដែលដំណើរការនៅពេលព្រឹត្តិការណ៍ណាមួយកើតឡើង (ឧទាហរណ៍៖ ការត្រួតពិនិត្យភាពត្រឹមត្រូវនៃកូដមុនពេលអនុញ្ញាតឱ្យ Commit)។

> **គន្លឹះ៖** ស្គ្រីបដែលពេញនិយមជាងគេគឺ \`pre-commit\` (ជួយលុបចោលការ Commit បើកូដមានកំហុស ឬមានលេចធ្លាយលេខសម្ងាត់)។

### ប្រភេទ Hooks សំខាន់ៗ
- \`pre-commit៖\` ដំណើរការមុនពេលបង្កើត Commit សារ។
- \`commit-msg៖\` ត្រួតពិនិត្យទម្រង់សាររបស់ Commit។
- \`pre-push៖\` ដំណើរការមុនពេល Push កូដឡើងទៅ Remote។`
        },
        starterCode: `git status`
      },
      {
        id: "git-submodules",
        title: { en: "Git Submodules", km: "ប្រព័ន្ធគម្រោងរង Submodules" },
        content: {
          en: `# Git Submodules
Git submodules allow you to keep another separate Git repository as a subdirectory embedded inside your main host project repository.

> **Tip:** Use submodules when importing external dependencies that are constantly updated separately from your code.

### Common Syntax
\`\`\`bash
$ git submodule add <repository-URL>
$ git submodule update --init --recursive
\`\`\``,
          km: `# ប្រព័ន្ធគម្រោងរង Submodules
Submodules អនុញ្ញាតឱ្យអ្នកបញ្ចូល និងរក្សាទុកឃ្លាំងកូដ Git ដាច់ដោយឡែកមួយទៀត ឱ្យទៅជាថតរងមួយនៅក្នុងគម្រោងចម្បងរបស់អ្នក។

> **គន្លឹះ៖** ប្រើប្រាស់ Submodules នៅពេលដែលអ្នកចង់ភ្ជាប់បណ្ណាល័យក្រៅដែលត្រូវការកែលម្អប្រចាំដាច់ដោយឡែកពីគម្រោងចម្បង។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git submodule add <តំណភ្ជាប់ឃ្លាំងកូដរង>
$ git submodule update --init --recursive
\`\`\``
        },
        starterCode: `git status`
      },
      {
        id: "git-remote-advanced",
        title: { en: "Git Remote Advanced", km: "ការគ្រប់គ្រង Remote កម្រិតខ្ពស់" },
        content: {
          en: `# Git Remote Advanced
Advanced remote management involves working with multiple remote pointers (e.g., maintaining \`origin\` for your fork and \`upstream\` for parent repos).

> **Tip:** Keep your local forks synchronized by pulling changes from upstream regularly and pushing them back to your origin fork.

### Common Syntax
\`\`\`bash
$ git remote add upstream <parent-repository-URL>
$ git fetch upstream
$ git merge upstream/master
\`\`\``,
          km: `# ការគ្រប់គ្រង Remote កម្រិតខ្ពស់
ការគ្រប់គ្រង Remote កម្រិតខ្ពស់ រួមមានការតភ្ជាប់ជាមួយ Remote pointers ជាច្រើនក្នុងពេលតែមួយ (ដូចជា \`origin\` សម្រាប់ fork ខ្លួនឯង និង \`upstream\` សម្រាប់គម្រោងមេ)។

> **គន្លឹះ៖** រក្សាគម្រោងដែលបាន Fork ឱ្យទាន់សម័យជានិច្ចដោយទាញកូដពី upstream រួច push ឡើងទៅ origin របស់អ្នក។

### វាក្យសម្ពន្ធទូទៅ
\`\`\`bash
$ git remote add upstream <តំណភ្ជាប់គម្រោងមេ>
$ git fetch upstream
$ git merge upstream/master
\`\`\``
        },
        starterCode: `git remote -v`
      }
    ]
  }
];
