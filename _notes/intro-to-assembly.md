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
- In addition to Intel x86, **ARM** is becoming more common, as most modern smartphones and some modern laptops like the M1 MacBook Pro feature ARM processors.

## Computer Architecture
- This architecture executes machine code to perform specific algorithms. It mainly consists of the following elements:
    - **Central Processing Unit (CPU)**
    - **Memory Unit**
    - **Input/Output Devices**
- Furthermore, the CPU itself consists of three main components:
    - **Control Unit (CU)**
    - **Arithmetic Logic Unit (ALU)**
    - **Registers**
![computer structure](/assets/img/htb-assembly(1).PNG){: .writeup-image}<br>
- Though very old, this architecture is still the basis of most modern computers, servers, and even smartphones.
- Assembly languages mainly work with the CPU and memory.
- Furthermore, basic and advanced binary exploitation requires a proper understanding of computer architecture.
    - With basic stack overflows, we only need to be aware of the general design.
    - Once we start using ROP and Heap exploits, our understanding should be profound.

### Memory
- A computer's memory (Primary Memory) is where the **temporary data** and **instructions of currently** running programs are **located**.
- It is the primary location the CPU uses to retrieve and process data.
- There are two main types of memory:
    - **Cache**
    - **Random Access Memory (RAM)**
- Cache memory is usually located within the CPU itself and hence is extremely fast compared to RAM, as it runs at the same *clock speed* as the CPU.
    - However, it is very *limited in size* and very sophisticated, and expensive to manufacture due to it being so close to the CPU core.
    - There are usually three levels of cache memory, depending on their closeness to the CPU core:
    <table>
    <thead>
        <tr>
            <th>Level</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>Level 1 Cache</code></td>
            <td>Usually in kilobytes, the fastest memory available, located in each CPU core. (Only registers are faster.)</td>
        </tr>
        <tr>
            <td><code>Level 2 Cache</code></td>
            <td>Usually in megabytes, extremely fast (but slower than L1), shared between all CPU cores.</td>
        </tr>
        <tr>
            <td><code>Level 3 Cache</code></td>
            <td>Usually in megabytes (larger than L2), faster than RAM but slower than L1/L2. (Not all CPUs use L3.)</td>
        </tr>
    </tbody>
    </table>

- **RAM**
- RAM is much larger than cache memory, coming in sizes ranging from gigabytes up to terabytes.
- RAM is also located far away from the CPU cores and is much slower than cache memory.
- Accessing data from RAM addresses takes many more instructions.
- In the past, with **32-bit addresses**, memory addresses were limited from **0x00000000** to **0xffffffff**.
- This meant that the maximum possible RAM size was 232 bytes, which is only 4 gigabytes, at which point we run out of unique addresses.
- With **64-bit addresses**, the range is now up to **0xffffffffffffffff**, with a theoretical maximum RAM size of 264 bytes, which is around 18.5 exabytes (18.5 million terabytes), so we shouldn't be running out of memory addresses anytime soon.
- When a program is run (done), all of its data and instructions are moved from the **storage unit** to the **RAM** to be accessed when needed by the CPU.
- The RAM is split into **4 segments**:
    ![RAM segments](/assets/img/htb-assembly(2).PNG){: .writeup-image}<br>

<table>
<thead>
    <tr>
        <th>Segment</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Stack</td>
        <td>Has a <i>Last-in First-out (LIFO)</i> design and is fixed in size. Data in it can only be accessed in a specific order by push-ing and pop-ing data.</td>
    </tr>
    <tr>
        <td>Heap</td>
        <td>Has a hierarchical design and is therefore much larger and more versatile in storing data (Meaning the data could be stored any where), as data can be stored and retrieved in any order.<i> However, this makes the heap slower than the Stack.</i></td>
    </tr>
    <tr>
        <td>Data</td>
        <td>Has to parts: <i>Data</i>, which is used to hold variables, <i>.bss</i>, which is used to hold unassigned variables (i.e., buffer memory for later allocation).</td>
    </tr>
    <tr>
        <td>Text</td>
        <td>Main assembly instructions are loaded into this segment to be fetched and executed by the CPU.</td>
    </tr>
</tbody>
</table>

## CPU Architecture
- The Central Processing Unit (CPU) is the main processing unit within a computer.
- The **CPU** contains both the ,
    - **Control Unit (CU)** Which is in charge of *moving and controlling data*, and the
    - **Arithmetic/Logic Unit (ALU)**, which is in charge of *performing various arithmetics* and *logical calculations* as requested by a program through the assembly instructions.
- The manner in which and how efficiently a *CPU processes* its instructions depends on its **Instruction Set Architecture (ISA)**.
    - **RISC architecture** is based on *processing more simple instructions*, which takes more cycles, but each cycle is shorter and *takes less power*.
    - **CISC architecture** is based on *fewer, more complex instructions*, which can finish the requested instructions in fewer cycles, but each instruction takes more time and power to be processed.

### Clock speed & Clock cycle
- Each CPU has a **clock speed** that indicates its overall speed.
- The **frequency** in which the cycles occur is counted, is **cycles per second (Hertz)**.
- If a CPU has a speed of 3.0 GHz, it can run 3 billion cycles every second (per core).<br>
![clock cycle](/assets/img/htb-assembly(3).PNG){: writeup-image}<br>
- **Instruction Cycle**:
    - An **instruction cycle** is the cycle the CPU takes to process a *single machine instruction*.<br>
![instruction cycle](/assets/img/htb-assembly(4).PNG){: writeup-image}<br><br>
- An instruction cycle consists of four stages: **Fetch**, **Decode**, **Execute**, and **Store**:
<table>
<thead>
    <tr>
        <th>Instruction</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>1. Fetch</td>
        <td>Takes the next instruction's address from the <i>Instruction Address Register (IAR)</i>, which tells it where the next instruction is located.</td>
    </tr>
    <tr>
        <td>2. Decode</td>
        <td>Takes the instruction from the IAR, and decodes it from binary to see what is required to be executed.</td>
    </tr>
    <tr>
        <td>3. Execute</td>
        <td>Fetch instruction operands from <i>register/memory</i>, and process the instruction in the ALU or CU.</td>
    </tr>
    <tr>
        <td>4. Store</td>
        <td>Store the new value in the destination operand.</td>
    </tr>
</tbody>
</table>

> All of the stages in the instruction cycle are carried out by the Control Unit, except when arithmetic instructions need to be executed "add, sub, ..etc", which are executed by the ALU. 

- Each Instruction Cycle takes multiple clock cycles to finish, depending on the CPU architecture and the complexity of the instruction.
- Once a single instruction cycle ends, the CU increments to the next instruction and runs the same cycle on it, and so on.<br><br>
![instruction cycle](/assets/img/htb-assembly(5).PNG){: writeup-image}<br>
- For example, if we were to execute the assembly instruction <code>add rax, 1</code>, it would run through an instruction cycle:
    1. **Fetch** the instruction from the **rip register**, 48 83 C0 01 (in binary).
    2. **Decode** '48 83 C0 01' to know it needs to **perform an add of 1 to the value at rax**.
    3. **Execute**: Get the current value at rax *(by CU)*, add 1 to it *(by the ALU)*.
    4. **Store** the new value **back to rax**.
- In the past, processors used to *process instructions sequentially*, so they had to wait for one instruction to finish to start the next.
- On the other hand, **modern processors** can process multiple instructions in **parallel** by having multiple instruction/clock cycles running at the same time.
- This is made possible by having a **multi-thread** and **multi-core** design.<br><br>
![modern processor](/assets/img/htb-assembly(6).PNG){: writeup-image}<br>

### Processor Specific
> It is important to understand that each processor has its own set of instructions and corresponding machine code.
- Even though we can tell that both instructions are similar and do the same thing, their syntax is different, and the locations of the source and destination operands are swapped as well. Still, both codes assemble the same machine code and perform the same instruction.
- So, each processor type has its Instruction Set Architectures, and each architecture can be further represented in several syntax formats
- If we want to know whether our Linux system supports x86_64 architecture, we can use the <code>lscpu</code> command:
    - **Manual**:<br>
![manual of lscpu](/assets/img/htb-assembly(7).PNG){: writeup-image}<br>
    - **Usage**:<br>
![usage of lscpu](/assets/img/htb-assembly(8).PNG){: writeup-image}<br>

- We can also use the uname -m command to get the CPU architecture.<br>
![usage of uname](/assets/img/htb-assembly(9).PNG){: writeup-image}<br>

## Instruction Set Architectures
- An **Instruction Set Architecture (ISA)** specifies the syntax and semantics of the assembly language on each architecture.
- **ISA** mainly consists of the following components:
    - **Instructions**
    - **Registers**
    - **Memory Addresses**
    - **Data types**
<br>
<table>
<thead>
    <tr>
        <th>Component</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Instruction</td>
        <td>The instruction to be processed in the opcode operand_list format. There are usually 1,2, or 3 comma-separated operands.</td>
        <td><code>add rax, 1</code>,<code>mov rsp, rax</code>, <code>push rax</code></td>
    </tr>
    <tr>
        <td>Registers</td>
        <td>Used to store operands, addresses, or instructions temporarily.</td>
        <td><code>rax</code>, <code>rsp</code>, <code>rip</code></td>
    </tr>
    <tr>
        <td>Memory Addresses</td>
        <td>The address in which data or instructions are stored. May point to memory or registers.</td>
        <td><code>0xffffffffaa8a25ff</code>, <code>0x44d0</code>, <code>$rax</code></td>
    </tr>
    <tr>
        <td>Data Types</td>
        <td>The type of stored data.</td>
        <td><code>byte</code>, <code>double word</code>, <code>word</code></td>
    </tr>
</tbody>
</table>
<br>

- There are two main Instruction Set Architectures that are widely used:
    - **Complex Instruction Set Computer (CISC)** - Used in Intel and AMD processors in most computers and servers.
    - **Reduced Instruction Set Computer (RISC)** - Used in ARM and Apple processors, in most smartphones, and some modern laptops.
### CISC
- The CISC architecture was one of the earliest ISA's ever developed.
- CISC architecture favors more complex instructions to be run at a time to reduce the overall number of instructions.
    - For example, suppose we were to add two registers with the 'add rax, rbx' instruction.
    - In that case, a CISC processor can do this in a *single 'Fetch-Decode-Execute-Store' instruction cycle*, without having to split it into multiple instructions to fetch rax, then fetch rbx, then add them, and then store them in `rax, each of which would take its own 'Fetch-Decode-Execute-Store' instruction cycle.
- Furthermore, even though it takes a single instruction cycle to execute a single instruction, as the instructions are more complex, each instruction cycle takes more clock cycles. This fact leads to more power consumption and heat to execute each instruction.

### RISC
- The RISC architecture favors splitting instructions into minor instructions, and so the CPU is designed only to handle simple instructions. 
- For example, the same previous add r1, r2, r3 instruction on a RISC processor would fetch r2, then fetch r3, add them, and finally store them in r1.
    - Every instruction of these takes an entire 'Fetch-Decode-Execute-Store' instruction cycle, which leads, as can be expected, to a larger number of total instructions per program, and hence a longer assembly code.
- The below diagram shows how CISC instructions take a variable amount of clock cycles, while RISC instructions take a fixed amount: <br><br>
![CISC vs RISC](/assets/img/htb-assembly(10).PNG){: writeup-image}<br>
- **CISC vs. RISC**

<table>
<thead>
    <tr>
        <th>Area</th>
        <th>CISC</th>
        <th>RISC</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Complexity</td>
        <td>Favors complex instructions.</td>
        <td>Favors simple instructions</td>
    </tr>
    <tr>
        <td>Length of instructions</td>
        <td>Longer instructions - Variable length 'multiples of 8-bits'</td>
        <td>Shorter instructions - Fixed length '32-bit/64-bit'</td>
    </tr>
    <tr>
        <td>Total instructions per program</td>
        <td>Fewer total instructions - Shorter code</td>
        <td>More total instructions - Longer code</td>
    </tr>
    <tr>
        <td>Optimization</td>
        <td>Relies on hardware optimization (in CPU)</td>
        <td>Relies on software optimization (in Assembly)</td>
    </tr>
    <tr>
        <td>Instruction Execution Time</td>
        <td>Variable - Multiple clock cycles</td>
        <td>Fixed - One clock cycle</td>
    </tr>
    <tr>
        <td>Instructions supported by CPU</td>
        <td>Many instructions (~1500)</td>
        <td>Fewer instructions (~200)</td>
    </tr>
    <tr>
        <td>Power Consumption</td>
        <td>High</td>
        <td>Very Low</td>
    </tr>
    <tr>
        <td>Examples</td>
        <td>Intel and AMD</td>
        <td>ARM, Apple</td>
    </tr>
</tbody>
</table>
<br>

