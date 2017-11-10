---
layout: post
title:  "Some things about ctags"
date:   2017-11-09 21:03:47
categories: programming TIL
tags: vim git ctags
published: true
---
[Installing & using ctags in Vim][1]
===========

*TL;DR:*

    brew install ctags
    cd project root
    ctags -R .
    # or if you want to keep the tags file out of site
    ctags -R -f .git/tags .

then edit a file, put your cursor on an identifier and hit `<Ctrl>-]` to see it's definition.  Hit `<Ctrl>-t` to return to where you started.

[How to update your ctags with git hooks][3]
=====
by the always amazing [Tim Pope][2]

*TL;DR:*

in `.git/hooks/ctags`:

    #!/bin/sh
    set -e
    PATH="/usr/local/bin:$PATH"
    dir="`git rev-parse --git-dir`"
    trap 'rm -f "$dir/$$.tags"' EXIT
    git ls-files | \
      ctags --tag-relative -L - -f"$dir/$$.tags" --languages=-javascript,sql
    mv "$dir/$$.tags" "$dir/tags"

then in `post-commit`,`post-checkout`,and `post-merge` you have:

    #!/bin/sh
    .git/hooks/ctags >/dev/null 2>&1 &

make them all executable and Bob's your uncle, which in England means that your ctags will be updated wheneever you commit, checkout or merge.  Actually Tim puts it all in a template dir and `git init`s in his repo to install it which is smarter, but you get the idea. Read [his post][3].

[1]: https://andrew.stwrt.ca/posts/vim-ctags/
[2]: http://tpo.pe
[3]: http://tbaggery.com/2011/08/08/effortless-ctags-with-git.html
 
