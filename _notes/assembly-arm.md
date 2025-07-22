---
layout: note
title: "ARM"
description: "A privilege access to the hardware"
tags: [assembly, rev, mobile-hacking, firmware]
date: 2025-07-22
---

# ARM(32-bit)
-
- **What are bits, bytes and Hex**?
    - These concepts are very important to understand, because they used interchangebly, and can lead to confusion:
    - **Bit** -> Right, so a bit is a *one(1)* or *zero(0)*.
    - **Bytes** -> *1-byte* Represent *8-bits*, the following are examples of 1 byte: **00000000**, **01110011**. But there is a catch here: Each bit can hold 2 numbers, and we know that 1-byte is 8-bits, so how many numbers can 1-byte hold? The answer is **(2^8)** which is **256**.
    - **1 byte = 8 bits = 2 hex**: **11101001 = E9 = 1 byte**

## Memory Address
- The memory address is represented as **hexadecimal values**. <br>
![memory address](/assets/img/memory-address.png)
    - If you look at the memory address carefully, it is exactly what we just explained.
    - Remember each **4-bit** is represented by one **1-hex**.
    - Hence, we have a total of *32-bits* that we can work with.
