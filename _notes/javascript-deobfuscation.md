---
layout: note
title: "Javascript Deobfuscation"
description: "Code deobfuscation is an important skill to learn if we want to be skilled in code analysis and reverse engineering."
tags: [code-analysis, decoding, rev, javascript]
date: 2025-08-28
---

# Introduction
- we often come across obfuscated code that wants to hide certain functionalities, like malware that utilizes obfuscated JavaScript code to retrieve its main payload. 
-  Without understanding what this code is doing, we may not know what exactly the code is doing, and hence may not be able to complete the red/blue team exercise.

## Source Code
- Most websites nowadays utilize JavaScript to perform their functions. 
- **HTML**:
    - Looking at the following website:
    ![htb-website](/assets/img/js-src-code.PNG){: .writeup-image }
    - pressing `[ctr+u]` from that website we get the following source code.
    ![htb-website](/assets/img/js-src-code(1).PNG){: .writeup-image }
    - Already we see a flag! and some `CSS`(which is just for style)
    - But what is important is the `secret.js` embeeded javascript file.
- **Javascript**: secret.js
    ![htb-website](/assets/img/js-src-code(2).PNG){: .writeup-image }
    - Hence, using a tool to *deobfuscate*:
    ![htb-website](/assets/img/js-src-code(3).PNG){: .writeup-image }
    - From hear again, i see a flag!
    - But , the reason behind this code obfuscation. What is it? How is it done? Where is it used?


