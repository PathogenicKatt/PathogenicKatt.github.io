---
layout: writeup
title: "CTF Challenge: ARMssembly 0"
description: "What integer does this program print with arguments 182476535 and 3742084308?"
difficulty: medium
event: "PicoCTF"
tags: [rev, arm, misp]
date: 2025-11-27
---

## Challenge Overview:
- This was the following description for the challenge.
<br>

![Challenge screenshot](/assets/img/picoCTF_ARMssembly0.PNG){: .writeup-image }<br>

- There are definitely, many ways that this challange can be solved. 
- The most straight forward way is:

### Prerequisites
- Install the compiler and the emulator (qemu):
```bash
sudo apt install qemu-user-static && gcc-aarch64-linux-gnu
```
- From here we can just compile the binary and pass the arguments then get the value, but let us attempt to understand assembly:

## Static Analysis
![Challenge screenshot](/assets/img/picoCTF_ARMssembly0(1).PNG){: .writeup-image }<br>
- Looking at the assembly:
![Challenge screenshot](/assets/img/picoCTF_ARMssembly0(2).PNG){: .writeup-image }<br>
    - We see that initially the 1st argument "**182476535**" is stored in <code>w0</code> but later it is found in <code>w1</code>.
    - Same with the 2nd argument "**3742084308**", it is first stored in <code>w1</code> but later it is found in <code>w0</code>
    - Meaning the final results are: w0 = 3742084308; w1 = 182476535.
    - So when the <code>cmp</code> instruction gets executed; the first argument <code>w1</code> is checked if it less than second argument <code>w0</code>, and if true then the program will jump to <code>.L2</code>, for which it is true.
    - Then we see that <code>.L2</code> returns the second argument "**3742084308**", which is our answer.

## Through Compilation
![Challenge screenshot](/assets/img/picoCTF_ARMssembly0(3).PNG){: .writeup-image }<br>




