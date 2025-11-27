---
layout: writeup
title: "CTF Challenge: ARMssembly 1"
description: "For what argument does this program print `win` with variables 83, 0 and 3?"
difficulty: medium
event: "PicoCTF"
tags: [rev, arm, misp]
date: 2025-11-27
---

## Challenge Overview:
- This was the following description for the challenge.
<br>

![Challenge screenshot](/assets/img/picoCTF_ARMssembly1.PNG){: .writeup-image }<br>

## Static Analysis:
![Challenge screenshot](/assets/img/picoCTF_ARMssembly1(1).PNG){: .writeup-image }<br>
- To explain a few instructions:
    - First the user-input; we that it is stored in the address <code>sp + 12</code>.
    - <code>wzr</code> is a zero register.
    - <code>lsl</code> left shift operator **<<**, shifts the bits of a number to the left by a specified number of positions for which in case no shift occurs because of the zero.
    - <code>sdiv</code> division operator **/** 
    - To make all this make sense; we need to look at the main function as well:<br>
    ![Challenge screenshot](/assets/img/picoCTF_ARMssembly1(3).PNG){: .writeup-image }<br>
    - The other instructions could be ignored as they are for the stack layout setup along with the prologue; i have highlighted what makes sense for us.
    - The user input argument is loaded in the <code>w0</code> register and also gets compared (<code>cmp</code>) with zero. The logic is that if the returned value from the function is not zero; then the program will jump to <code>.L4</code> where it will find the <code>.L1</code> label which points to *"you lose"* string.
    - But if the returned value is zero; then the program jumps to <code>.L0</code>, which points to the *"you win"* strings.

## The flag
![Challenge screenshot](/assets/img/picoCTF_ARMssembly1(2).PNG){: .writeup-image }<br>


