---
layout: note
title: "Introduction to Reverse Engineering"
description: "Analyze and Modify the behaviour of a program"
tags: [c, assembly, rev, ghidra, firmware]
date: 2025-07-21
---

# Introduction to Reverse Engineering
- Involves analyzing compiled or obfuscated programs to understand their behavior, extract hidden data, or manipulate execution to gain a flag.
- Understanding how the program works even without the source code.
- There are a few programming languages that you have understand in order to solve reverse engineering challenges, that is **c programming language**.

# C Programming Language
- The **C** language is a *must-know* for any modern programmer.
- Typical **C** code:
```c
int doubleNumber(int b){
    int x = 2 * b;
    return x;
}
```
- It is important to understand that **C** language is a *Low-level* programming language.
- *Low-level*, what does that even mean?
    - So, in the programming world, there are three levels, that we need to understand, and that is, of course *High-level*, *Assembly* and *Low-level*.
    - **High-Level** -> A programming language that is in the most human readable syntax, it is easier to understand, and a simpler example is *python*.
    - **Low-Level** -> A programming language that is very close to the hardware, gives you direct access to the computer resources. It is also human-readable. One of the example is **C**.
    - **Assembly** -> A language that is in 1:1 to machine code, works directly with the registers, memory, and CPU instructions. It is extremely difficult to read and understand. A few examples are **ARM**,**x86**,**x64** and **MIPS**.

- Take note of the following:
<table>
  <thead>
    <tr>
        <th>Feature</th>
      <th>Type</th>
      <th>Endianness</th>
      <th>Registers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>x86(32-bit)</td>
      <td>CISC</td>
      <td>Little</td>
      <td>EAX,EBX,...</td>
    </tr>
    <tr>
      <td>x64(x86-64)</td>
      <td>CISC</td>
      <td>Little</td>
      <td>RAX,RBX,...</td>
    </tr>
    <tr>
      <td>ARM(32/64)</td>
      <td>RISC</td>
      <td>Bi-endian(usually LE)</td>
      <td>R0-R12(ARM32),X0-X30(ARM64)</td>
    </tr>
    <tr>
      <td>MIPS</td>
      <td>RISC</td>
      <td>Bi-endian(BE)</td>
      <td>$0-$31</td>
    </tr>
  </tbody>
</table>
- Why do these matter actually?
1. **x86/x64** - **pwnable** challenges(buffer overflows, ROP)
2. **ARM** - **Android Reverse Engineering** or **IoT devices**
3. **MIPS** - Appears in **router hacking** challenges.

- Basically, the process is that a programmer writes the source code in **high-level language** -> Then the *compiler* will covert that the **high-level language** to **low-level language** -> Eventually, it will coverted to **assembly** and then lastly to **machine code(1's and 0's)**.

# Compiling (C)
- Because **C-programming language** is the most common langauge used in reverse engineering, it is important that we spend more time on it.
- Hence, we have to know how to compile a **C-programming language**.
- So, the main **compiler** in *C* is called **GCC(GNU C Compiler)**, and has the following syntax:
```bash
gcc -Wall filename.c -o filename
```
- `-Wall` just enables *warning messages*.
- `-o` output file.
- Therefore, when we run the file, we do the following:
```bash
./filename
```

# Assembly
- Assembly programming is very different from normal programming in that we have to worry about things that high level language programmers don’t have to worry about, like where something is stored and how it is stored in memory.
- Here is a typical syntax of **assembly**:
```assembly
label name operands ;comment
```
    - `label` - This is an optional personal name we give to a statement in our code.
    - `name` - This is the name of the operation we want to perform like (ADD, MOV etc).
    - `operands` - This is the optional list of parameters to the function.
    - `comment` - denoted by a semi-colon ";".

## Registers
- Before we can move to talking about different instructions in assembly language, we need to talk about a very important concept, **registers**.
- We have touched about them a little above, but here is the in-depth of it.
- What exactly is a **register**?
    - A register is just a small memory location that is physically next to the **CPU(Central Processing Unit)**, and can allow us to access the memory very fast.
- So, it is important to understand, otherwise we could have used the **main memory** to store our variables, but the problem is that, an **access** to the **main-memory** would be very slow.
- Also note that, there are 32-bit and 64-bit system architectures, and what this means is that:
    - **32-bit** system, which can allow us to store 32 bits of information and **64-bit** system, to store 64 bits of information.

## Some common Instructions
- Here is a list of common instructions in the X86-64 instruction set.
```arm
; Take two numbers and add them
MOV eax, 5
MOV ebx, 3
ADD eax, ebx
```
- `MOV` is the instruction that takes a **register**(*eax*) or data point(*5*) and puts it into the other **register**. It has the syntax as follows:
    - `MOV Dest, Source`
    - In our example above, the `Dest` is *eax* and the data-point is the `source`, meaning the value 5 will stored the eax register.
- `ADD` Then, we perform the ADD instruction that adds the two data points it is given.
    - `ADD Dest, Source`
- One key takeaway is that, we did not use the `Labels`.
- More instructions set: <br>
![arm instruction](/assets/img/arm-instruction-set.png)

## Big Endian vs Little Endian
- These are ways to store numbers or data in memory addresses.
- If two computers (one big-endian and other little-endian) exchange binary data **without conversion**, they'll misrepresent values.
- **Big-endian**(Big End First) -> **most significant byte** is stored at the **lowest memory address**
- You write it normally -> 1 2 3 4 (left-to-right)
- example: If we want to store 0x1234567:
```text
Adress: 0x100 0x101 0x102 0x103
Data:   12    34    56    78
```
    - `0x100` is our lowest memory address, hence from "0x12345678", we take it as normal, just as from left-to-right.
- **Little-endian**(Little End First) -> **least significant byte** is stored to the **lowest memory address**.
- example: If we want to store 0x12345678:
- Here, we reverse the order(right-to-left)
```text
Address: 0x100 0x101 0x102 0x103
Data:    78    56    34    12
```
    - `0x100` is the **lowest-memory**, hence from "0x12345678", we reverse it(from right-to-left).
- **Another Example**:
- Let’s use a 16-bit word as example , (0xFEED) in this case.
- Let’s also assume we are storing this word starting at address 0x4000.
- **Big-Endian**:
```text
Address: 0x4000 0x4001
Data:    FE     ED
```
- **Little-Endian**:
```text
Address: 0x4000 0x4001
Data:    ED     FE
```
- *Big Endian* is commonly used in **Networking application**, while *Little Endian* is most commonly used in **processors**.
