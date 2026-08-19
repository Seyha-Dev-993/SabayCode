/**
 * Client-Side Git Terminal State Machine Simulator
 * Simulates git commands line-by-line from a script.
 */

interface Commit {
  hash: string;
  msg: string;
  branch: string;
  files: string[];
  date: string;
}

export function runGitSimulation(codeStr: string, language: string): string {
  const lines = codeStr.split('\n').map(l => l.trim());
  const output: string[] = [];

  // State
  let initialized = false;
  let currentBranch = 'master';
  let branches: string[] = ['master'];
  let untrackedFiles = ['index.html', 'styles.css', 'README.md'];
  let stagedFiles: string[] = [];
  const commits: Commit[] = [];
  let stash: string[] = [];
  let remoteUrl = '';
  let sshKeysAdded = false;
  let username = 'Coder';
  let email = 'coder@example.com';
  let hasConflict = false;

  const getHash = () => Math.random().toString(16).substring(2, 9);
  const getDateString = () => {
    return new Date().toUTCString().replace('GMT', 'UTC');
  };

  for (let rawLine of lines) {
    if (!rawLine) continue;
    
    // Ignore comments in simulator code
    if (rawLine.startsWith('#') || rawLine.startsWith('//')) {
      output.push(rawLine);
      continue;
    }

    // Clean command line
    const line = rawLine.replace(/^\$\s*/, ''); // strip leading $
    output.push(`$ ${line}`);

    const parts = line.split(/\s+/);
    const cmd = parts[0];

    if (cmd !== 'git') {
      if (cmd === 'clear') {
        // No-op for mock console log
      } else if (cmd === 'cat') {
        const file = parts[1];
        if (!file) {
          output.push(`cat: missing file operand`);
        } else if (file === '.gitignore') {
          output.push(`node_modules/\n*.log\ndist/\n.env`);
        } else if (file === '.gitattributes') {
          output.push(`*.png filter=lfs diff=lfs merge=lfs -text\n*.mp4 filter=lfs diff=lfs merge=lfs -text`);
        } else {
          output.push(`[Content of ${file} file]`);
        }
      } else if (cmd === 'ssh-keygen') {
        output.push(`Generating public/private rsa key pair.\nYour identification has been saved in /home/coder/.ssh/id_rsa\nYour public key has been saved in /home/coder/.ssh/id_rsa.pub\nThe key fingerprint is:\nSHA256:abc123xyz789 Coder@Workspace\nThe key's randomart image is:\n+---[RSA 4096]----+\n|    .o.  .       |\n|   .  +oo .      |\n|  . .+=oo+ .     |\n|   +.++oo .      |\n|    S.+o .       |\n+----[SHA256]-----+`);
        sshKeysAdded = true;
      } else {
        output.push(`bash: ${cmd}: command not found`);
      }
      continue;
    }

    // It is a 'git' command
    const sub = parts[1];

    if (!sub) {
      output.push(`Usage: git [--version] [--help] <command> [<args>]`);
      continue;
    }

    // Guard on initialized repository (except init, clone, help, version)
    if (!initialized && sub !== 'init' && sub !== 'clone' && sub !== 'help' && sub !== 'version') {
      output.push(`fatal: not a git repository (or any of the parent directories): .git`);
      continue;
    }

    switch (sub) {
      case 'version':
        output.push(`git version 2.40.1`);
        break;

      case 'help':
        output.push(`These are common Git commands used in various situations:\n\nstart a working area\n   clone     Clone a repository into a new directory\n   init      Create an empty Git repository\n\nwork on the current change\n   add       Add file contents to the staging area\n   status    Show the working tree status\n\ngrow, mark and tweak your common history\n   branch    List, create, or delete branches\n   commit    Record changes to the repository\n   merge     Join two or more development histories together\n   rebase    Reapply commits on top of another base tip\n   reset     Reset current HEAD to the specified state`);
        break;

      case 'init':
        initialized = true;
        output.push(`Initialized empty Git repository in /workspace/.git/`);
        break;

      case 'config':
        // git config --global user.name "Your Name"
        if (line.includes('user.name')) {
          const match = line.match(/user\.name\s+["']?([^"']+)["']?/);
          if (match) username = match[1];
          output.push(`Configure global user.name set to "${username}"`);
        } else if (line.includes('user.email')) {
          const match = line.match(/user\.email\s+["']?([^"']+)["']?/);
          if (match) email = match[1];
          output.push(`Configure global user.email set to "${email}"`);
        } else {
          output.push(`user.name=${username}\nuser.email=${email}`);
        }
        break;

      case 'status':
        output.push(`On branch ${currentBranch}`);
        if (commits.length === 0) {
          output.push(`No commits yet`);
        }
        if (stagedFiles.length === 0 && untrackedFiles.length === 0) {
          output.push(`nothing to commit, working tree clean`);
        } else {
          if (stagedFiles.length > 0) {
            output.push(`Changes to be committed:\n  (use "git rm --cached <file>..." to unstage)\n\t\x1b[32mnew file:   ${stagedFiles.join('\n\tnew file:   ')}\x1b[0m`);
          }
          if (untrackedFiles.length > 0) {
            output.push(`Untracked files:\n  (use "git add <file>..." to include in what will be committed)\n\t\x1b[31m${untrackedFiles.join('\n\t')}\x1b[0m`);
          }
        }
        break;

      case 'add': {
        const file = parts[2];
        if (!file) {
          output.push(`Nothing specified, nothing added.`);
        } else if (file === '.' || file === '*') {
          stagedFiles = [...stagedFiles, ...untrackedFiles];
          untrackedFiles = [];
        } else {
          const idx = untrackedFiles.indexOf(file);
          if (idx !== -1) {
            stagedFiles.push(file);
            untrackedFiles.splice(idx, 1);
          } else {
            output.push(`Pathspec '${file}' did not match any files.`);
          }
        }
        break;
      }

      case 'commit': {
        if (stagedFiles.length === 0) {
          output.push(`On branch ${currentBranch}\nnothing added to commit but untracked files present (use "git add" to track)`);
          break;
        }
        let msg = 'Updated files';
        if (line.includes('-m')) {
          const match = line.match(/-m\s+["']?([^"']+)["']?/);
          if (match) msg = match[1];
        }
        const hash = getHash();
        const commit: Commit = {
          hash,
          msg,
          branch: currentBranch,
          files: [...stagedFiles],
          date: getDateString()
        };
        commits.unshift(commit); // add to start (newest first)
        output.push(`[${currentBranch} ${hash}] ${msg}\n ${stagedFiles.length} file(s) changed, 10 insertions(+)`);
        stagedFiles = [];
        break;
      }

      case 'log': {
        if (commits.length === 0) {
          output.push(`fatal: your current branch '${currentBranch}' does not have any commits yet`);
          break;
        }
        commits.forEach(c => {
          output.push(`commit ${c.hash}df8c2a938b8cd37c1d1aef83b (${currentBranch === c.branch ? 'HEAD -> ' + currentBranch : c.branch})\nAuthor: ${username} <${email}>\nDate: ${c.date}\n\n    ${c.msg}\n`);
        });
        break;
      }

      case 'branch': {
        const bName = parts[2];
        if (!bName) {
          branches.forEach(b => {
            if (b === currentBranch) {
              output.push(`* \x1b[32m${b}\x1b[0m`);
            } else {
              output.push(`  ${b}`);
            }
          });
        } else {
          if (!branches.includes(bName)) {
            branches.push(bName);
            output.push(`Branch '${bName}' created.`);
          } else {
            output.push(`fatal: A branch named '${bName}' already exists.`);
          }
        }
        break;
      }

      case 'checkout':
      case 'switch': {
        const bName = parts[2];
        if (!bName) {
          output.push(`fatal: branch name required`);
        } else if (bName === '-b' || bName === '-c') {
          const newB = parts[3];
          if (!newB) {
            output.push(`fatal: branch name required`);
          } else {
            branches.push(newB);
            currentBranch = newB;
            output.push(`Switched to a new branch '${newB}'`);
          }
        } else if (branches.includes(bName)) {
          currentBranch = bName;
          output.push(`Switched to branch '${bName}'`);
        } else {
          output.push(`error: pathspec '${bName}' did not match any file(s) known to git`);
        }
        break;
      }

      case 'merge': {
        const bName = parts[2];
        if (!bName) {
          output.push(`fatal: branch name required`);
        } else if (!branches.includes(bName)) {
          output.push(`merge: ${bName} - not something we can merge`);
        } else {
          if (line.includes('conflict') || hasConflict) {
            output.push(`Auto-merging conflicting_file.js\nCONFLICT (content): Merge conflict in conflicting_file.js\nAutomatic merge failed; fix conflicts and then commit the result.`);
            hasConflict = true;
          } else {
            output.push(`Updating ${getHash()}..${getHash()}\nFast-forward\n README.md | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)`);
          }
        }
        break;
      }

      case 'stash': {
        const subSub = parts[2];
        if (subSub === 'pop') {
          if (stash.length > 0) {
            const popped = stash.pop();
            output.push(`On branch ${currentBranch}\nDropped refs/stash@{0} (${popped})\nSwitched to stashed state.`);
          } else {
            output.push(`No stash entries found.`);
          }
        } else if (subSub === 'list') {
          if (stash.length > 0) {
            stash.forEach((s, idx) => {
              output.push(`stash@{${idx}}: WIP on ${currentBranch}: ${s}`);
            });
          } else {
            output.push(`No stash found.`);
          }
        } else {
          stash.push(`Saved working directory state`);
          output.push(`Saved working directory and index state WIP on ${currentBranch}: WIP commit msg`);
        }
        break;
      }

      case 'tag': {
        const tagName = parts[2];
        if (!tagName) {
          output.push(`v1.0.0\nv1.1.0-alpha`);
        } else {
          output.push(`Tag '${tagName}' applied to current commit.`);
        }
        break;
      }

      case 'remote': {
        const act = parts[2];
        if (act === 'add') {
          remoteUrl = parts[4] || '';
          output.push(`Remote origin added pointing to ${remoteUrl}`);
        } else {
          output.push(`origin\t${remoteUrl || 'https://github.com/user/project.git'} (fetch)\norigin\t${remoteUrl || 'https://github.com/user/project.git'} (push)`);
        }
        break;
      }

      case 'push': {
        const rem = parts[2] || 'origin';
        const br = parts[3] || currentBranch;
        output.push(`Enumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nWriting objects: 100% (3/3), 340 bytes, done.\nTotal 3 (delta 1), reused 0 (delta 0)\nTo ${remoteUrl || 'https://github.com/user/project.git'}\n * [new branch]      ${br} -> ${br}`);
        break;
      }

      case 'pull': {
        output.push(`From ${remoteUrl || 'https://github.com/user/project'}\n * branch            master     -> FETCH_HEAD\nAlready up to date.`);
        break;
      }

      case 'clone': {
        const url = parts[2];
        initialized = true;
        remoteUrl = url || '';
        output.push(`Cloning into 'repository'...\nremote: Enumerating objects: 24, done.\nremote: Counting objects: 100% (24/24), done.\nremote: Compressing objects: 100% (16/16), done.\nremote: Total 24 (delta 4), reused 20 (delta 2)\nReceiving objects: 100% (24/24), done.\nResolving deltas: 100% (4/4), done.`);
        break;
      }

      case 'revert': {
        const hash = parts[2] || 'HEAD';
        output.push(`[${currentBranch} ${getHash()}] Revert "Previous commit"\n 1 file changed, 1 deletion(-)`);
        break;
      }

      case 'reset': {
        const option = parts[2];
        if (option === '--hard') {
          output.push(`HEAD is now at ${getHash()} Reset linear history successfully.`);
        } else {
          output.push(`Unstaged changes after reset.`);
        }
        break;
      }

      case 'rebase': {
        output.push(`Successfully rebased and updated refs/heads/${currentBranch}.`);
        break;
      }

      case 'reflog': {
        output.push(`${getHash()} HEAD@{0}: checkout: moving from main to dev\n${getHash()} HEAD@{1}: commit: feat: design forms\n${getHash()} HEAD@{2}: commit: init repo`);
        break;
      }

      default:
        output.push(`Command 'git ${sub}' is recognized but simulated generally.\nOutput code: OK`);
        break;
    }
    
    output.push(''); // add spacer line
  }

  return output.join('\n');
}
