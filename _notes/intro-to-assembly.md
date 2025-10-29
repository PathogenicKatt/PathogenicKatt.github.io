---
layout: note
title: "Intro to Assembly"
description: "A high-level programming language; used for scripting and automating stuff."
tags: [low-level, assembly, python, scripting]
date: 2025-10-29
---

# Introduction to Assembly
-  Since the processor can only process binary data "i.e. **1's** and **0's**", it would be challenging for humans to interact with processors without referring to manuals to know which hex code runs which instruction.
- This is where Assembly language comes in, as a low-level language that can write direct instructions the processors can understand.
- By using Assembly, developers can write human-readable machine instructions, which are then assembled into their machine code equivalent, so that the processor can directly run them.
- For example, the Assembly code <code>'add rax, 1'</code> is much more intuitive and easier to remember than its equivalent machine shellcode <code>'4883C001'</code>, and easier to remember than the equivalent binary machine code <code>'01001000 10000011 11000000 00000001'</code>.
- As we can see, without Assembly language, it is very challenging to write machine instructions or directly interact with the processor.

## Compilation Stages
![compilation stage](/assets/img/htb-assembly.PNG){: .writeup-image}<br>
- Let's take a basic 'Hello World!' program that prints these words on the screen and show how it changes from high-level to machine code.
- In an interpreted language, like Python, it would be the following basic line:
```python
print("Hello World!")
```
- If we run this Python line, it would be essentially executing the following C code:
```C
#include <unistd.h>
int main(){
    write(1,"Hello World!",12); // 1-> stdout
    _exit(0);
}
```
- The above C code uses the Linux write syscall, built-in for processes to write to the screen. The same syscall called in Assembly looks like the following:
```nasm
mov rax,1
mov rdi,1
mov rsi,message
mov rdx,12
syscall
mov rax,60
mov rdi,0
syscall
```
- As we can see, when the write syscall is called in C or Assembly, both are using 1, the text, and 12 as the arguments.
- The previous Assembly code can be assembled into the following hex machine code (i.e., shellcode):
```shellcode
48 c7 c0 01
48 c7 c7 01
48 8b 34 25
48 c7 c2 0c
0f 05
48 c7 c0 3c
48 c7 c7 00
0f 05
```
- Finally, for the processor to execute the instructions linked to this machine, it would have to be translated into binary, which would look like the following:
```binary
01001000 11000111 11000000 00000001
01001000 11000111 11000111 00000001
01001000 10001011 00110100 00100101
01001000 11000111 11000010 00001100 
00001111 00000101
```
- A CPU uses different electrical charges for a 1 and a 0, and hence can calculate these instructions from the binary data once it receives them.

## Value for Pentesters
- Understanding assembly language instructions is critical for binary exploitation, which is an essential part of penetration testing.
- To disassemble, debug, and follow binary instructions in memory and find potential vulnerabilities, we must have a basic understanding of Assembly language and how it flows through the CPU components.
- NB: Learning **Intel x86 Assembly Language** is crucial for writing exploits for binaries on modern machines.
- In addition to Intel x86, ARM is becoming more common, as most modern smartphones and some modern laptops like the M1 MacBook Pro feature ARM processors.
