---
layout: writeup
title: "PicoCTF Challenge: GDB Test Drive"
description: "Can you get the flag?"
difficulty: medium
event: "PicoCTF"
tags: [debugging, gdb, rev]
date: 2025-08-05
---

## Challenge Overview:
- The following was the description for the challenge:
    ![stepic challenge](/assets/img/gdb-test-drive.PNG){: .writeup-image }
## Intro
- **GDB(GNU Project Debugger)** is a debugging tool. Allows us to walkthrough the binary, step by step, and see what actually happens inside the binary. We can set a breakpoint, to pause the execution of the program at a specific address. We can inspect the variable or a memory. It used again for *malware analysis*.
- **GDB** operates on *executable files* which are binary files produced by the compilation process.

## Deep dive
- The instructions are already mentioned from the description. I will explain them in details.
- **getting started**:
    ![gdb-test-drive](/assets/img/gdb-test-drive(1).PNG){: .writeup-image }
    - `not stripped` -> This is important because it makes debugging much easier. meaning we can see the function names otherwise we would see `main()` as `0x40100`. <br>
- **exeuting the binary**: 
    ![gdb-test-drive](/assets/img/gdb-test-drive(2).PNG){: .writeup-image }
    - `./` allows us to run the existing file in directory.
    - But, we get a permission denied, why is that?
    - This is where, `chmod`(change mode) comes in. it allows us the change the mode given to the binary.
    - The following command, makes the binary *"executable"*, in most cases we always have to do this for a binary file.
```bash
chmod +x gdbme
```
    ![gdb-test-drive](/assets/img/gdb-test-dirve(3).PNG){: .writeup-image }
    - See after running the `chmod` operation, the binary has changed the color and an `x` exist. 
<br>

- **analysis of the binary** <br>
    ![gdb-test-drive](/assets/img/gdb-test-drive(4).PNG){: .writeup-image }
    - The binary is finally running, but we already encounter a problem.
    - It looks like the program is sleeping, hence whatever we input or no matter how many times we hit `enter`, nothing happens.
    - By using `ltrace` which is a complement of GDB, it traces calls to shared library functions like `sleep` in this case, but other examples are `printf, strcmp`. Allowed us to quickly see that the first function being called is `sleep()`, so using GDB we have to jump this address to where the flag is.
    - starting our gdb:
    ```bash
    gdb ./gdbme
    ```
    - And this is what you have to see: <br>
    ![gdb-test-drive](/assets/img/gdb-test-drive(5).PNG){: .writeup-image }
    - right after that, i used the following command:
    ```gdb
    (gdb) disas main
    ```
    - Note that, it is not the same as from description, this is because i could not copy the flag, hence i went for this approach: <br>
    ![gdb-test-drive](/assets/img/gdb-test-drive(6).PNG){: .writeup-image }

- **final steps** <br>
    ![gdb-test-drive](/assets/img/gdb-test-drive(7).PNG){: .writeup-image }
    - so in this case, we see that even when i used `step`, we still got the information about the `sleep` function.

_More details regarding the use of GDB are found in my `/notes`_





     

