---
layout: note
title: "Intro to Assembly"
description: "a low-level programming language that uses human-readable mnemonics to represent a computer's machine code instructions."
tags: [low-level, assembly, ARM, x86_64]
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

## Registers, Addresses, and Data Types
- Now that we understand general computer and processor architecture, we need to understand a few assembly elements before we start learning Assembly: **Registers**, **Memory Addresses**, **Address Endianness**, and **Data Types**.
- Each of these elements is important, and properly understanding them will help us avoid issues and hours of troubleshooting while writing and debugging assembly code.

### Registers
- As previously mentioned, each CPU core has a set of registers.
- The registers are the fastest components in any computer, as they are built within the CPU core.
- However, registers are very limited in size and can only hold a few bytes of data at a time. 
- There are two main types of registers we will be focusing on: **Data Registers** and **Pointer Registers**.

<table>
<thead>
    <tr>
        <th>Data Registers</th>
        <th>Pointer Registers</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><code>rax</code></td>
        <td>rbp</td>
    </tr>
    <tr>
        <td><code>rbx</code></td>
        <td>rsp</td>
    </tr>
    <tr>
        <td><code>rcx</code></td>
        <td>rip</td>
    </tr>
    <tr>
        <td><code>rdx</code></td>
    </tr>
    <tr>
        <td><code>r8</code></td>
    </tr>
    <tr>
        <td><code>r9</code></td>
    </tr>
    <tr>
        <td><code>r10</code></td>
    </tr>
</tbody>
</table>

- **Data Registers**: are usually used for storing instructions/syscall arguments. The primary data registers are: <code>rax</code>, <code>rbx</code>, <code>rcx</code>, and <code>rdx</code>. The <code>rdi</code> and <code>rsi<code> registers also exist and are usually used for the *instruction destination and source operands*. Then, we have secondary data registers that can be used when all previous registers are in use, which are <code>r8</code>, <code>r9</code>, and <code>r10</code>.
- **Pointer Registers**: are used to *store specific important address pointers*. The main pointer registers are the **Base Stack Pointer** <code>rbp</code>, which points to the beginning of the Stack, the Current **Stack Pointer** <code>rsp</code>, which *points to the current location* within the Stack (top of the Stack), and the **Instruction Pointer** <code>rip</code>, which *holds the address of the next instruction*.

### Sub-Registers
- Each **64-bit register** can be further divided into **smaller sub-registers** containing the lower bits, at **one byte 8-bits**, **2 bytes 16-bits**, and **4 bytes 32-bits**.
- Each sub-register can be used and accessed on its own, so we don't have to consume the full 64-bits if we have a smaller amount of data.<br>
![sub registers](/assets/img/htb-assembly(11).PNG){: .writeup-image}<br>
- Sub-registers can be accessed as:<br>
<table>
<thead>
    <tr>
        <th>Size in bits</th>
        <th>Size in bytes</th>
        <th>Name</th>
        <th>Example</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><code>16-bit</code></td>
        <td><code>2-bytes</code></td>
        <td>the base name</td>
        <td><code>ax</code></td>
    </tr>
    <tr>
        <td><code>8-bit</code></td>
        <td><code>1-byte</code></td>
        <td>the base name + and/or ends with <code>l</code></td>
        <td><code>al</code></td>
    </tr>
    <tr>
        <td><code>32-bits</code></td>
        <td><code>4-bytes</code></td>
        <td>the base name + and/or starts with e prefix</td>
        <td><code>eax</code></td>
    </tr>
    <tr>
        <td><code>64-bits</code></td>
        <td><code>8-bytes</code></td>
        <td>the base name + and/or starts with r prefix</td>
        <td><code>rax</code></td>
    </tr>
</tbody>
</table>

- For example, for the <code>bx</code> data register, the **16-bit** is <code>bx</code>,  so the **8-bit** is <code>bl</code>, the **32-bit** is <code>eax</code>, and the 64-bit would be **rbx**.
- This also applies to the base and stack pointers:
    - It's sub-register <code>bpl</code> is an **8-bit** 
    - The register <code>bp</code> is a **16-bit** (base name)
    - The register <code>ebp</code> is a **32-bit**
    - The register <code>rbp</code> is a **64-bit**
    - The above is the same for stack pointer.

- The **RFLAGS register** in the x86_64 architecture is a 64-bit status register that contains **condition flags** reflecting the outcome of various CPU operations.
- Flags include:
    - **Carry Flag (CF)**: *Indicates carry or borrow in arithmetic operations*.
    - **Zero Flag (ZF)**: *Set if the result of an operation is zero*.
    - **Sign Flag (SF)**: *Reflects the sign of the result (negative or positive)*.
    - **Overflow Flag (OF)**: *Set if signed overflow occurs*.
    - **Interrupt Enable Flag (IF)**: *Controls whether interrupts are enabled*.
    - **Direction Flag (DF)**: *Controls string operation direction*.
    - **Parity Flag (PF)**: *Indicates even parity of the least significant byte*.

### Memory Addresses
- **x86_64-bit processors** have 64-bit wide addresses that range from **0x0** to **0xffffffffffffffff**
-  There are several types of **address fetching (i.e., addressing modes)** in the x86 architecture:<br>
<table>
<thead>
    <tr>
        <th>Addressing Mode</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Immediate</td>
        <td>The value is given within the instruction</td>
        <td><code>ADD 7</code></td>
    </tr>
    <tr>
        <td>Register</td>
        <td>The register name that holds a value is given in the instruction.</td>
        <td><code>ADD eax</code></td>
    </tr>
    <tr>
        <td>Direct</td>
        <td>The direct full address is given in the instruction.</td>
        <td><code>ADD 0xffffffffaa8a25ff</code></td>
    </tr>
    <tr>
        <td>Indirect</td>
        <td>A reference pointer is given in the instruction.</td>
        <td><code>CALL 0x44d000</code> or <code>CALL [rax]</code></td>
    </tr>
    <tr>
        <td>Stack</td>
        <td>The address is on top of the stack</td>
        <td><code>ADD rsp</code></td>
    </tr>
</tbody>
</table>


### Address Endianness
- An address endianness is the order of its bytes in which they are stored or retrieved from memory. 
- There are two types of endianness: **Little-Endian** and **Big-Endian**.
- With **Little-Endian processors**, the *little-end byte* of the address is filled/retrieved first right-to-left, while with Big-Endian processors, the big-end byte is filled/retrieved first left-to-right.<br>
![address endianness](/assets/img/htb-assembly(12).jpg){: .writeup-image}<br>
- When retrieving the value, the processor has to use the same endianness used when storing them, or it will get the wrong value. 
- **NB**:
    - Intel/AMD which are 86_64-bit architecture use **Little Endian**:
    - **The important thing we need to take from this is knowing that our bytes are stored into memory from right-to-left.**

### Data Types
-  The following are the most common data types we will be using with instructions:
<table>
<thead>
    <tr>
        <th>Component</th>
        <th>Length</th>
        <th>Example</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>byte</td>
        <td>8-bits</td>
        <td>0xab</td>
    </tr>
    <tr>
        <td>word</td>
        <td>16-bits (2-bytes)</td>
        <td>0xabcd</td>
    </tr>
    <tr>
        <td>double word (dword)</td>
        <td>32-bits (4-bytes)</td>
        <td>0xabcdef12</td>
    </tr>
    <tr>
        <td>quad word (qword)</td>
        <td>64-bits (8-bytes)</td>
        <td>0xabcdef1234567890</td>
    </tr>
</tbody>
</table>

> *"Whenever we use a variable with a certain data type or use a data type with an instruction, both operands should be of the same size."*

- For example, we cannot use a variable of data type (byte) with <code>rax</code> as it is of data type 8-bytes; Hence in this case for a byte we have to use <code>al</code> which has the same size of 1 byte.

<table>
<thead>
    <tr>
        <th>Sub-Register</th>
        <th>Data Type</th>
    </tr>
</thead>
    <tr>
        <td><code>al</code></td>
        <td>byte</td>
    </tr>
    <tr>
        <td><code>bx</code></td>
        <td>word</td>
    </tr>
    <tr>
        <td><code>ebx</code></td>
        <td>dword</td>
    </tr>
    <tr>
        <td><code>rbx</code></td>
        <td>qword</td>
    </tr>
</table>

## Assemble File Structure
- Assembly code template:
```nasm
        global _start

        section .data
message: db     "Hello World"

        section .text
_start:
        mov     rax,1
        mov     rdi,1
        mov     rsi,message
        mov     rdx,18
        syscall 

        mov     rax,60
        mov     rdi,0
        syscall
```
- First, let's examine the way the code is distributed:<br>
![assebly file structure](/assets/img/htb-assembly(13).PNG){: .writeup-image}
- Looking at the vertical parts of the code, each line can have three elements:
<pre> 1. Labels      2. Instructions      3. Operands </pre>
- Next, if we look at the code line-by-line, we see that it has three main parts:
<table>
<thead>
    <tr>
        <th>Section</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><code>_global start</code></td>
        <td>This is a directive that directs the code to start executing at the _start label defined below.</td>
    </tr>
    <tr><code>section .data</code></tr>
    <tr>This is the <code>data</code> section, which should contain all of the variables.</tr>
    <tr>
        <td><code>section .text</code></td>
        <td>This is the <code>text</code> section containing all of the code to be executed.</td>
    </tr>
    <tr>
        <td></td>
    </tr>
</tbody>
</table>

- **directives**:
    - An Assembly code is **line-based**, which means that the file is processed line-by-line, executing the instruction of each line.
    - We see at the first line a directive <code>global _start</code>, which instructs the machine to start processing the instructions after the <code>_start</code> label.

- **Variables**:
    - Next, we have the <code>.data</code> section.
    - The <code>data</code> section holds our variables to make it easier for us to define variables and reuse them without writing them multiple times.
    - Once we run our program, all of our variables will be loaded into memory in the data segment.
    - We can define variables using <code>db</code> for a list of bytes, <code>dw</code> for a list of words, <code>dd</code> for a list of digits, and so on.
    - Furthermore, we can use the <code>equ</code> instruction with the **$** token to evaluate an expression, like the length of a defined variable's string.
        - However, the labels defined with the equ instruction are constants, and they cannot be changed later.
    - For example, the following code defines a variable and then defines a constant for its length:
    ```nasm
    section .data
        message db "Hello world!", 0x0a
        length  equ $-message
    ```
        - Note: the **$** token indicates the current distance from the beginning of the current section.
        - As the message variable is at the beginning of the <code>data</code> section, the current location, i.e,. value of **$**, equals the length of the string.
- **Code**:
    - This section holds all of the assembly instructions and loads them to the text memory segment. 
    - Once all instructions are loaded into the <code>text</code> segment, the processor starts executing them one after another.
    - The default convention is to have the <code>_start</code> label at the beginning of the <code>.text</code> section, which -as per the <code>global _start</code> directive- starts the main code that will be executed as the program runs.
    - The <code>text</code> segment within the memory is **read-only**, so we cannot write any variables within it. 
    - The <code>data</code> section, on the other hand, is **read/write**, which is why we write our variables to it.
    - However, the data segment within the memory is not executable, so any code we write to it cannot be executed.
    -  This separation is part of memory protections to mitigate things like **buffer overflows** and other types of **binary exploitation**.
> Tip: We can add comments to our assembly code with a semi-colon ;. We can use comments to explain the purpose of each part of the code, and what each line is doing. Doing so will save us a lot of time in the future if we ever revisit the code and need to understand it.

## Assemble & Disassemble
### Assemble
- we can assemble our code with **nasm**, we can **link** it using <code>ld</code> to utilize various OS features and libraries.
- Hence the following assembly code:<br>
![basic assembly code](/assets/img/htb-assembly(14).PNG){: .writeup-image}<br>
- And to assemble the code (Note: The <code>-f elf64</code> flag is used to note that we want to assemble a 64-bit assembly code. If we wanted to assemble a 32-bit code, we would use <code>-f elf</code>.):
```bash
nasm -f elf64 basic.s
```
- This should output a **basic.o** object file, which is then **assembled into machine code**, along with the details of all variables and sections. *This file is not executable just yet*.
- **Linking**
    - The final step is to link our file using <code>ld</code>.
    - The **basic.o object** file, though **assembled**, *still cannot be executed*.
    - This is because many **references** and **labels** used by **nasm** need to be *resolved into actual addresses*, along with *linking the file with various OS libraries* that may be needed.
    - FUN FACT: *This is why a Linux binary is called ELF, which stands for an Executable and Linkable Format*.
    - To link a file using <code>ld</code>, we can use the following command:
    ```bash
    ld -o basic.o basic
    ```

### Disassembling
- To disassemble a file, we will use the <code>objdump</code> tool, which dumps **machine code** from a file and **interprets** the assembly instruction of each hex code.
- We can disassemble a binary using the <code>-d</code> flag.
- Note: we will also use the flag <code>-M intel</code>, so that **objdump** would write the instructions in the **Intel syntax**, which we are using, as we discussed before (note the difference below).<br>
![objdump](/assets/img/htb-assembly(15).PNG){: .writeup-image}<br>
- from above we see that; nasm efficiently changed our **64-bit registers** to the **32-bit sub-registers** where possible, to use less memory when possible, like changing <code>mov rax, 1</code> to <code>mov eax,0x1</code>.
- The <code>-d</code> flag will only disassemble the **.text section** of our code.
- To **dump any strings**, we can use the <code>-s</code> flag, and add <code>-j .data</code> to only examine the **.data section** (This means that we also do not need to add <code>-M intel</code>).<br>
![objdump strings](/assets/img/htb-assembly(16).PNG){: .writeup-image}<br>
- Flag:<br>
![flag](/assets/img/htb-assembly(17).PNG){: .writeup-image}

## GNU Debugger (GDB)
- **Programs** written in **high-level languages** *can set breakpoints on specific lines and run the program through a debugger to monitor how they act*.
- With **Assembly**, we deal with **machine code** represented as **assembly instructions**, *so our breakpoints are set in the memory location in which our machine code is loaded*.
- To *debug our binaries*, we will be using a well-known debugger for Linux programs called **GNU Debugger (GDB)**.
- There are other similar debuggers for Linux, like **Radare** and **Hopper**, and for Windows, like **Immunity Debugger** and **WinGDB**.<br>
![gdb gef](/assets/img/htb-assembly(18).PNG){: .writeup-image}<br>
- As we can see, the output we got closely resembles our assembly code and the disassembly output we got from objdump in the previous section.
- **Having the memory address is critical for examining the variables/operands and setting breakpoints for a certain instruction.**
- You may notice through debugging that some memory addresses are in the form of **0x00000000004xxxxx**, rather than their raw address in memory **0xffffffffaa8a25ff**
    - This is due to **$rip-relative addressing** in **Position-Independent Executables (PIE)**, in which the memory addresses are used relative to their distance from the instruction pointer <code>$rip</code> within the program's own Virtual RAM, *rather than using raw memory addresses*.
    - This feature may be **disabled** to reduce the risk of **binary exploitation**.

## Debugging with GDB
- Now that we have the general information about our program, we will start running it and debugging it.
- Debugging consists mainly of four steps:
<table>
<thead>
    <tr>
        <th>Step</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Break</td>
        <td>Setting breakpoints at various points of interest.</td>
    </tr>
    <tr>
        <td>Examine</td>
        <td>Running the program and examining the state of the program at these points</td>
    </tr>
    <tr>
        <td>Step</td>
        <td>Moving through the program to examine how it acts with each instruction and with user input</td>
    </tr>
    <tr>
        <td>Modify</td>
        <td>Modify values in specific registers or addresses at specific breakpoints, to study how it would affect the execution</td>
    </tr>
</tbody>
</table>