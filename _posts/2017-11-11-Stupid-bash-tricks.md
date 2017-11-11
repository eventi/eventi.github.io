---
layout: post
title:  "Stupid bash tricks"
date: 2017-11-11 00:22
categories: programming
tags: bash tips TIL

---

Stupid bash tricks
===

[echo to stderr][1]: `(>&2 echo "Here's an error that'll go to STDERR")`

[delete a function][2]: `unset -f function`

determine is a command is a function, alias, or binary: `type foo`

[1]:https://stackoverflow.com/questions/2990414/echo-that-outputs-to-stderr
[2]:https://stackoverflow.com/questions/245406/how-do-i-delete-a-bash-function
