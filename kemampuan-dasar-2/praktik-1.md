```bash

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2 (master)
$ mkdir rhymes

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2 (master)
$ cd rhymes

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git init
Initialized empty Git repository in D:/praxis-academy/kemampuan-dasar-2/rhymes/.git/

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ touch README.txt

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git add README.txt

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git commit -m 'first commit.'
[master (root-commit) 5556e8b] first commit.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.txt

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ echo 'percobaan belajar revisi' >> README.txt

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        praktik-1.md

no changes added to commit (use "git add" and/or "git commit -a")

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git diff
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory
diff --git a/README.txt b/README.txt
index e69de29..a2f9254 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+percobaan belajar revisi

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git add README.txt
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git commit -m 'ga ngapa2in di README.txt'
[master b8e9cb3] ga ngapa2in di README.txt
 1 file changed, 1 insertion(+)

```

```
haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ echo '1' >all-around-the-mulberry-bush.txt

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ echo '6' >old-mother-hubbard.txt

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ ls
README.txt                        old-mother-hubbard.txt
all-around-the-mulberry-bush.txt  praktik-1.md

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ echo '9' >twinkle-twinkle.txt

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ echo '2' >hokey-pokey.txt

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ ls
README.txt                        hokey-pokey.txt         praktik-1.md
all-around-the-mulberry-bush.txt  old-mother-hubbard.txt  twinkle-twinkle.txt

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ echo '9' >jack-and-jill.txt

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git add all-around-the-mulberry-bush.txt
warning: LF will be replaced by CRLF in all-around-the-mulberry-bush.txt.
The file will have its original line endings in your working directory

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   all-around-the-mulberry-bush.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        hokey-pokey.txt
        jack-and-jill.txt
        old-mother-hubbard.txt
        praktik-1.md
        twinkle-twinkle.txt


haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git commit -m 'menambah all-around-the-mulberry-bush.txt'
[master 4836a0e] menambah all-around-the-mulberry-bush.txt
 1 file changed, 1 insertion(+)
 create mode 100644 all-around-the-mulberry-bush.txt

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ add jack-and-jill.txt
bash: add: command not found

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ commit -m 'menambah jack-and-jill.txt'
bash: commit: command not found

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ status
bash: status: command not found

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        hokey-pokey.txt
        jack-and-jill.txt
        old-mother-hubbard.txt
        praktik-1.md
        twinkle-twinkle.txt

nothing added to commit but untracked files present (use "git add" to track)

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git add jack-and-jill.txt
warning: LF will be replaced by CRLF in jack-and-jill.txt.
The file will have its original line endings in your working directory

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git add all-around-the-mulberry-bush.txt

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   jack-and-jill.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        hokey-pokey.txt
        old-mother-hubbard.txt
        praktik-1.md
        twinkle-twinkle.txt


haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git add
Nothing specified, nothing added.
hint: Maybe you wanted to say 'git add .'?
hint: Turn this message off by running
hint: "git config advice.addEmptyPathspec false"

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   jack-and-jill.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        hokey-pokey.txt
        old-mother-hubbard.txt
        praktik-1.md
        twinkle-twinkle.txt


haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git add
Nothing specified, nothing added.
hint: Maybe you wanted to say 'git add .'?
hint: Turn this message off by running
hint: "git config advice.addEmptyPathspec false"

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git add .
warning: LF will be replaced by CRLF in hokey-pokey.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in old-mother-hubbard.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in twinkle-twinkle.txt.
The file will have its original line endings in your working directory

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   hokey-pokey.txt
        new file:   jack-and-jill.txt
        new file:   old-mother-hubbard.txt
        new file:   praktik-1.md
        new file:   twinkle-twinkle.txt


haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git commit -m 'nambah semuanya'
[master ca11419] nambah semuanya
 5 files changed, 29 insertions(+)
 create mode 100644 hokey-pokey.txt
 create mode 100644 jack-and-jill.txt
 create mode 100644 old-mother-hubbard.txt
 create mode 100644 praktik-1.md
 create mode 100644 twinkle-twinkle.txt
bash: /mingw64/bin/git: Device or resource busy

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git log
commit ca11419d603be88ad4126b3c4b9f2b510207361d (HEAD -> master)
Author: ahmad haunan <akhmad.ha@students.amikom.ac.id>
Date:   Wed Feb 3 14:45:54 2021 +0700

    nambah semuanya

commit 4836a0ec4cb2492ebc4f54152a5954607bc9a926
Author: ahmad haunan <akhmad.ha@students.amikom.ac.id>
Date:   Wed Feb 3 14:41:50 2021 +0700

    menambah all-around-the-mulberry-bush.txt

commit b8e9cb3b0676146f797d52c95dd4dde222afad2e
Author: ahmad haunan <akhmad.ha@students.amikom.ac.id>
Date:   Wed Feb 3 14:30:16 2021 +0700

    ga ngapa2in di README.txt

commit 5556e8b3e4e94f3ebc8742d6f491e8746e28a8bd
Author: ahmad haunan <akhmad.ha@students.amikom.ac.id>
Date:   Wed Feb 3 14:23:05 2021 +0700

    first commit.

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git log --online
fatal: unrecognized argument: --online

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git log --oneline
ca11419 (HEAD -> master) nambah semuanya
4836a0e menambah all-around-the-mulberry-bush.txt
b8e9cb3 ga ngapa2in di README.txt
5556e8b first commit.

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git log -p
commit ca11419d603be88ad4126b3c4b9f2b510207361d (HEAD -> master)
Author: ahmad haunan <akhmad.ha@students.amikom.ac.id>
Date:   Wed Feb 3 14:45:54 2021 +0700

```

```

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git remote add origin
usage: git remote add [<options>] <name> <url>

    -f, --fetch           fetch the remote branches
    --tags                import all tags and associated objects when fetching
                          or do not fetch any tag at all (--no-tags)
    -t, --track <branch>  branch(es) to track
    -m, --master <branch>
                          master branch
    --mirror[=(push|fetch)]
                          set up remote as a mirror to push to or fetch from


haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git remote add origin https://github.com/akhauna/rhymes.git

haunan@DESKTOP-E9KGUUC MINGW64 /d/praxis-academy/kemampuan-dasar-2/rhymes (master)
$ git push -u origin master
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 2 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (15/15), 1.39 KiB | 158.00 KiB/s, done.
Total 15 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/akhauna/rhymes.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```