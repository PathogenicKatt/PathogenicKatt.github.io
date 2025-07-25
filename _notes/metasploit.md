---
layout: note
title: "Metasploit"
description: "Computer security testing tool"
tags: [exploits, payloads, pen-testing, automation]
date: 2025-07-24
---

# Introduction to Reverse Engineering
- Metasploit is a computer security project that provides information about security vulnerabilities and aids in penetration testing and IDS signature development.
- It is a widely used penetration testing frameworks.
- It is **particularly** to **test vulnerabilities** in systems, develop and execute **exploits** against targets, perform **post-exploitation activities**(like *privilege escalation*, *pivoting*, etc) and most importantly **automates penetration testing** tasks.

## Key Components
- `msfconsole` -> The main command-line interface(CLI) for interacting with Metasploit.
_This is where the magic happens, whe you use the the `use` command from the **msfconsole-cli** this is where you start_<br>
![use msfconole](/assets/img/use_msfconsole.PNG)
- **Exploits** -> Code that takes advantage of vulnerabilites.
- **Payload** -> Malicious code that gets executed after a successful exploitation like *reverse shell*.
- **Auxilliary Modules** -> assist penetration testers by providing a wide variety of functions, such as information gathering, network scanning, service enumeration, and vulnerability testing, Some common categories include scanners, brute-forcers, fuzzers, servers, dos (denial of service) modules, and proxy tools.
    - **Scanners(Port Scanning)**: Scanner modules are designed to scan and identify open ports, services, and vulnerabilities on remote systems. Hence for port scanning we us this module **auxiliary/scanner/portscan/tcp**.
        - Firstly we use the module:
        ```bash
        use auxiliary/scanner/portscan/tcp
        ```
        - secondly we set the local host
        ```bash
        msf auxiliary(portscan/tcp) > set RHOSTS 192.168.1.0/24
        ```
        - thirdly we set the number of threads
        ```bash
        msf auxiliary(portscan/tcp) > set THREADS 10
        ```
        - Lastly we run the module.
        ```bash
        msf auxiliary(portscan/tcp) > run
        ```
    - **Brute-force**
    - **Fuzzers**
    - **Denial of Service(Dos)**
    - **Servers**
    - **Proxy Tools**
- **Post-Exploitation Modules** -> Helps maintain access and gather more data,