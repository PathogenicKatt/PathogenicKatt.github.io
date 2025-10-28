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
- A virtual machine (VM) is a **virtual operating system** that runs on a host system (an actual physical computer system).
- The physical hardware resources of the host system are allocated via **hypervisors**.
    - A hypervisor manages the hardware resources, and from the virtual machine's point of view, allocated computing power, RAM, hard disk capacity, and network connections are exclusively available.
    - In simple it is a software that creates and runs the virtualization.
        - It allocates and controls the sharing of a machine's resources; including storage space, RAM and CPU's. 
- From the application perspective, an operating system installed within the VM behaves as if installed directly on the hardware.
- VMs offer numerous advantages over running an operating system or application directly on a physical system:
    - Applications and services of a VM do not interfere with each other.
    - Complete independence of the guest system from the host system's operating system and the underlying physical hardware.
    - VMs can be moved or cloned to other systems by simple copying.
    - Hardware resources can be dynamically allocated via the hypervisor.
    - Better and more efficient utilization of existing hardware resources.

### Introduction to VirtualBox
- We can install VirtualBox from the command line, or download the installation file from the <a href="https://www.virtualbox.org/wiki/Downloads" target="_blank">official website</a> and install it manually.<br>
![hardware virtualization](/assets/img/htb-setting-up(1).PNG){: .writeup-image}
- VirtualBox is very common in private use.
- The installation is easy and usually requires no additional configuration for it to launch.
- We can download VirtualBox from their homepage: <a href="https://www.virtualbox.org/" target="_blank">https://www.virtualbox.og/<a><br>
![hardware virtualization](/assets/img/htb-setting-up(2).PNG){: .writeup-image}<br>
- *Alternatively, with Ubuntu Linux we can use the following commands to install both VirtualBox and the extension pack simultaneously:*
```bash
sudo apt install virtualbox virtualbox-ext-pack -y
```
- The VirtualBox extension pack enhances the overall functionality of VirtualBox with the following features:
    - USB 2.0/3.0 support
    - VirtualBox RDP
    - Disk Encryption
    - PXE Boot
    - NVMe support
![hardware virtualization](/assets/img/htb-setting-up(3).PNG){: .writeup-image}<br>


