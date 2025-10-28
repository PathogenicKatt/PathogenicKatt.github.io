---
layout: note
title: "Setting Up"
description: "establishing a well-structured testing infrastructure."
tags: [ virtualization, vpn, sandbox]
date: 2025-10-28
---

# Virtualization
- Virtualization is an **abstraction** of physical computing resources.
- The main advantage of virtualization is the abstraction layer between the physical resource and the virtual image.
- One of its key goals is to enable the execution of applications on systems that would not normally support them.
- In the context of virtualization, we typically distinguish between:
    - Hardware virtualization
    - Application virtualization
    - Storage virtualization
    - Data virtualization
    - Network virtualization

### Hardware Virtualization
- Hardware virtualization refers to technologies that allow hardware components to be accessed independently of their physical form through the use of hypervisor software.
- The best-known example of this is the virtual machine (VM):
    - A VM is a virtual computer that behaves like a physical computer, from its hardware to the operating system.
    - Virtual machines run as virtual guest systems on one or more physical systems referred to as **hosts**.
    - VirtualBox can also be enhanced with VirtualBox Guest Additions, which are a set of drivers and system applications designed to enhance the performance and usability of guest operating systems with VirtualBox.
    <br>
![hardware virtualization](/assets/img/htb-setting-up.PNG){: .writeup-image}

## Virtual Machines
- A virtual machine (VM) is a virtual operating system that runs on a host system (an actual physical computer system).
