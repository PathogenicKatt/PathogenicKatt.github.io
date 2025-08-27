---
layout: writeup
title: "PicoCTF Challenge: GDB Baby Step1"
description: "Can you figure out what is in the eax register at the end of the main function?"
difficulty: medium
event: "PicoCTF"
tags: [debugging, gdb, rev]
date: 2025-08-06
---


## Challenge Overview:
- The following was the description for the challenge:
    ![stepic challenge](/assets/img/gdb_baby_step1.PNG){: .writeup-image }

## Deep dive
- The approach is very straight forward
    ![stepic challenge](/assets/img/gdb-baby-step1(1).PNG){: .writeup-image }
    - The approach is kinda always the same.
    - Whenever you get a binary, you have to make it *executeable*, otherwise you won't be able to run.
- **Starting GDB**
    ![stepic challenge](/assets/img/gdb-baby-step1(2).PNG){: .writeup-image }
    - This step was unncessary but it always important to understand the behaviour of the program. You have to run it and see the output, and in our case, when we try to run the binary it just exits.
    - Futhermore we see that by using the `ltrace` command, which is very useful as well. It also tells us that the program just exits.
- **Following the instructions from the description**:
    ![stepic challenge](/assets/img/gdb-baby-step1(3).PNG){: .writeup-image }
    - Python script?
    ```bash
    python3 -c "print(int('0x86342',16))"
    ```
    - Takes the hex and converts it to a decimal. The `16` represent `hex`
    - `-c` allows us to execute python from the terminal.
    

