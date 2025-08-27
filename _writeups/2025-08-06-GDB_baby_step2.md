---
layout: writeup
title: "PicoCTF Challenge: GDB Baby Step2"
description: "Can you figure out what is in the eax register at the end of the main function?"
difficulty: medium
event: "PicoCTF"
tags: [debugging, gdb, rev]
date: 2025-08-06
---


## Challenge Overview:
- The following was the description for the challenge:
    ![gdb baby step2](/assets/img/gdb-baby-step2(1).PNG){: .writeup-image }
    - This one is a bit tense.

## Deep dive:
![gdb baby step2](/assets/img/gdb-baby-step2.PNG){: .writeup-image }
- Looks like, the behavior of the program is still kinda the same.
- But it has been modified a little.
<br>

- **Starting GDB**:
![gdb baby step2](/assets/img/gdb-baby-step2(2).PNG){: .writeup-image }
    - We see that, we still have a main function.
- **Looking through the main function**
![gdb baby step2](/assets/img/gdb-baby-step2(3).PNG){: .writeup-image }
    - There is something to point here, our main function has multiple `eax` registers.
    - So the logic of the program, seems to be doing some computation, hence from the description we are told to look at the contents of the register `eax` at the end.
    - This is where i want to explain the `breakpoint`, using the breakpoint, pauses the execution. Notice the change of the values:
![gdb baby step2](/assets/img/gdb-baby-step2(4).PNG){: .writeup-image }
    - This tells us that after some computation the register `eax` has been modified.
    - Again, using `info register`, already provides us with the decimal value. so we do not have to.
    


