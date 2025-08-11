---
layout: writeup
title: "PicoCTF Challenge: ARMseembly4"
description: "What integer does this program print with argument 3459413018? File: chall_4.S Flag format: picoCTF{XXXXXXXX} -> (hex, lowercase, no 0x, and 32 bits. ex. 5614267 would be picoCTF{0055aabb})"
difficulty: hard
event: "PicoCTF"
tags: [debugging, arm, rev]
date: 2025-08-11
---


## Challenge Overview:
- The following was the description for the challenge:
    ![ARMssembly](/assets/img/ARMssembly4.PNG){: .writeup-image }

### Deep dive
- Since this is ARM assembly, we cannot analyze it directly with standard gdb (which is for x86/x64).
- Hence, we have to install an ARM emulator(QEMU) and GCC which is a compiler.
```bash
sudo apt install qemu-user gcc-aarch64-linux-gnu
```
- Now, we have to compile this assembly to ARM.
```bash
aarch64-linux-gnu-gcc -static chall_4.S -o chall_4
```
    - `-static`: so that all libraries are bundled.
    - `.S`: an assembly extension.

## Running the Binary
- Testing the behavior of the program.
- But we are told that the program takes an argument.
- Using the QEMU emulator:
```bash
qemu-aarch64 ./chall_4 3459413018
```
![ARMssembly](/assets/img/ARMssembly4(1).PNG){: .writeup-image }

## Printing the flag according to the format
![ARMssembly](/assets/img/ARMssembly4(2).PNG){: .writeup-image }


