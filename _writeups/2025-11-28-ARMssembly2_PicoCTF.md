---
layout: writeup
title: "CTF Challenge: ARMssembly 2"
description: "What integer does this program print with argument 2403814618?"
difficulty: hard
event: "PicoCTF"
tags: [rev, arm, misp]
date: 2025-11-28
---

## Challenge Overview:
- This was the following description for the challenge.
<br>

![Challenge screenshot](/assets/img/picoCTF_ARMssembly2.PNG){: .writeup-image }<br>

## Attached file:
![Challenge screenshot](/assets/img/picoCTF_ARMssembly2(1).PNG){: .writeup-image }<br>
- I've included the comments to kinda help understand the assembly, but what is important is that; i have been able to identify it as **loop**.
- But essentially, it checks if initially **zero** is less that the given input which is **2403814618** for which the **zero** will increment until the condition is false.
- The main function is not helpful in this case.

## The flag:
![Challenge screenshot](/assets/img/picoCTF_ARMssembly2(2).PNG){: .writeup-image }<br>


