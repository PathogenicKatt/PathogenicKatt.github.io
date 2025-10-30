---
layout: note
title: "Intro to Networking"
description: "Practice of connecting computers and other devices to share data and resources."
tags: [ip address, ipv4, ipv6, subnetting]
date: 2025-10-30
---

# Introduction to Networking
## IP Address Classes
- IP address classes were the original system for dividing the vast range of possible IPv4 addresses into manageable groups for different sizes of networks (small, medium, large). 
- This system is called classful networking.
- **The Three Main Classes (A, B, and C)**
    - **Class A**:
        - First Bit: <code>0</code>
        - Range: 1.0.0.0 to 126.255.255.255
        - Subnet Mask: 255.0.0.0
        - Purpose: Designed for a handful of very large organizations.
        - How it works:
            - The first octet the 126 in <code>126.xxx.xxx.xxx</code> is the **Network part**, meaning there could be 126 Class A networks.
            - The last three octets are **the Host part**, and this allows for *16 million+ hosts per network*.
    - **Class B**:
        - First Two Bits: <code>10</code>
        - Range: 128.0.0.0 to 191.255.255.255
        - Subnet Mask: 255.255.0.0
        - Purpose: Designed for medium to large-sized organizations (like universities or large companies).
        - How it works:
            - The first two octets (e.g., 172.16 in 172.16.xxx.xxx) are the **Network part**.
            - The last two octets are the **Host part**, and this allows for *~65,000 hosts per network*.
    - **Class C**:
        - First Three Bits: <code>110</code>
        - Ranges: 192.0.0.0 to 223.225.255.255
        - Subnet Mask: 255.255.255.0
        - Purpose: Designed for small organizations.
        - How it works:
            - The first three octets (e.g., 192.168.1 in 192.168.1.xxx) are the **Network part**.
            - The last octet is the **Host part**, This allows for *only 254 hosts per network*, but there are millions of possible Class C networks.
- **The Two Other Classes (D & E)**
    - **Class D**
        - First Four Bits: <code>1110</code>
        - Purpose: **Multicasting** only. Used to send data to a group of computers, not a single one (e.g., video streaming). Not for individual devices.
    - **Class E**
        - First Four Bits: <code>1111</code>
        - Range: 240.0.0.0 to 255.255.255.255
        - Purpose: Reserved for **experimental** or future use. You will not see these in use on the public internet.

### Classless Inter-Domain Routing (CIDR)
- classful networking was replaced in 1993 by CIDR.
- **why?**
    - The class system was too rigid and wasted IP addresses.
    - A medium-sized company given a Class B address might only use 2,000 of its 65,000 available addresses, wasting the rest.
- CIDR is the modern system. It uses a slash notation (like /24, known as a subnet mask) to flexibly define where the network part ends and the host part begins, allowing for much more efficient use of addresses.
- CIDR gets rid of the fixed boundaries of Class A, B, and C.
    - Instead, it allows us to *split an IP address at any bit*, not just between the 1st, 2nd, or 3rd octet.
- **Deep dive**:
    - We've seen an IP address written like this: **192.168.1.1**
    - With CIDR, it looks like this: **192.168.1.0/24**:
        - **192.168.1.0** is the network address.
        - **/24** is the prefix length. It tells us how many bits in the address are used for the network portion.
            - An IPv4 address is 32 bits long (1 octet=> 8-bits: 4 octets => 32 bits).
            - The /24 means the first 24 bits are the network ID.
