---
layout: note
title: "Linux Fundamentals"
description: "A fundamental pillar in cybersecurity, renowned for its robustness, flexibility, and open-source nature."
tags: [filesystems, hacking-system, management, networking]
date: 2025-10-04
---

# Linux Fundamentals
## Linux Structure
- **What is Linux**: _Linux is an operating system, just like Windows, macOS, iOS, or Android._
    - **Operating System**-> An operating system (OS) is software that manages all the *hardware resources* of a computer, facilitating communication between software applications and hardware components.
    - Linux is available in over 600 distributions,  Some of the most popular and well-known being Ubuntu, Debian, Fedora, OpenSUSE, elementary, Manjaro, Gentoo Linux, RedHat, and Linux Mint.
    - It is less susceptible to malware than Windows operating systems and is very frequently updated.
    - The overall Android operating system that runs on smartphones and tablets is based on the Linux kernel, and because of this, Linux is the most widely installed operating system.
<br>

### Philosophy
- Linux follows five core principles:
<table>
  <thead>
    <tr>
      <th>Principle</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Everything is a file</td>
      <td>All configuration files for the various services running on the Linux operating system are stored in one or more text files.</td>
    </tr>
    <tr>
      <td>Small, single-purpose programs</td>
      <td>Linux offers many different tools that we will work with, which can be combined to work together.</td>
    </tr>
    <tr>
      <td>Ability to chain programs together to perform complex tasks</td>
      <td>The integration and combination of different tools enable us to carry out many large and complex tasks, such as processing or filtering specific data results.</td>
    </tr>
    <tr>
      <td>Avoid captive user interfaces</td>
      <td>Linux is designed to work mainly with the shell (or terminal), which gives the user greater control over the operating system.</td>
    </tr>
    <tr>
      <td>Configuration data stored in a text file</td>
      <td>An example of such a file is the /etc/passwd file, which stores all users registered on the system.</td>
    </tr>
  </tbody>
</table>

### Components
<table>
  <thead>
    <tr>
      <th>Component</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bootloader</td>
      <td>A piece of code that runs to guide the booting process to start the operating system. Parrot Linux uses the GRUB Bootloader.</td>
    </tr>
    <tr>
      <td>OS Kernel</td>
      <td>The kernel is the main component of an operating system. It manages the resources for system's I/O devices at the hardware level.</td>
    </tr>
    <tr>
      <td>Daemons</td>
      <td>Background services are called "daemons" in Linux. Their purpose is to ensure that key functions such as scheduling, printing, and multimedia are working correctly. These small programs load after we booted or log into the computer.</td>
    </tr>
    <tr>
      <td>OS Shell</td>
      <td>The operating system shell or the command language interpreter (also known as the command line) is the interface between the OS and the user. This interface allows the user to tell the OS what to do. The most commonly used shells are Bash, Tcsh/Csh, Ksh, Zsh, and Fish.</td>
    </tr>
    <tr>
      <td>Graphics server</td>
      <td>This provides a graphical sub-system (server) called "X" or "X-server" that allows graphical programs to run locally or remotely on the X-windowing system.</td>
    </tr>
    <tr>
      <td>Window Manager</td>
      <td>Also known as a graphical user interface (GUI). There are many options, including GNOME, KDE, MATE, Unity, and Cinnamon. A desktop environment usually has several applications, including file and web browsers. These allow the user to access and manage the essential and frequently accessed features and services of an operating system.</td>
    </tr>
    <tr>
      <td>Utilities</td>
      <td>Applications or utilities are programs that perform particular functions for the user or another program.</td>
    </tr>
  </tbody>
</table>

## Linux Architecture
- The Linux operating system can be broken down into layers:
<table>
  <thead>
    <tr>
      <th>Layer</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hardware</td>
      <td>Peripheral devices such as the system's RAM, hard drive, CPU, and others</td>
    </tr>
    <tr>
      <td>Kernel</td>
      <td>The core of the Linux operating system whose function is to virtualize and control common computer hardware resources like CPU, allocated memory, accessed data, and others. The kernel gives each process its own virtual resources and prevents/mitigates conflicts between different processes.</td>
    </tr>
    <tr>
      <td>Shell</td>
      <td>A command-line interface (CLI), also known as a shell that a user can enter commands into to execute the kernel's functions.</td>
    </tr>
    <tr>
      <td>System Utility</td>
      <td>Makes available to the user all of the operating system's functionality.</td>
    </tr>
  </tbody>
</table>

## File System Hierarchy
- The Linux operating system is structured in a tree-like hierarchy and is documented in the Filesystem Hierarchy Standard (FHS). Linux is structured with the following standard top-level directories:<br>
![file system](/assets/img/linuxFundamentals.PNG){: .writeup-image}<br>
<table>
  <thead>
    <tr>
      <th>Path</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>/</td>
      <td>The top-level directory is the root filesystem and contains all of the files required to boot the operating system before other filesystems are mounted, as well as the files required to boot the other filesystems. After boot, all of the other filesystems are mounted at standard mount points as subdirectories of the root.</td>
    </tr>
    <tr>
      <td>/bin</td>
      <td>Contains essential command binaries.</td>
    </tr>
    <tr>
      <td>/boot</td>
      <td>Consists of the static bootloader, kernel executable, and files required to boot the Linux OS.</td>
    </tr>
    <tr>
      <td>/dev</td>
      <td>Contains device files to facilitate access to every hardware device attached to the system.</td>
    </tr>
    <tr>
      <td>/etc</td>
      <td>Local system configuration files. Configuration files for installed applications may be saved here as well.</td>
    </tr>
    <tr>
      <td>/lib</td>
      <td>Shared library files that are required for system boot.</td>
    </tr>
    <tr>
      <td>/media</td>
      <td>External removable media devices such as USB drives are mounted here.</td>
    </tr>
    <tr>
      <td>/mnt</td>
      <td>Temporary mount point for regular filesystems.</td>
    </tr>
    <tr>
      <td>/opt</td>
      <td>Optional files such as third-party tools can be saved here.</td>
    </tr>
    <tr>
      <td>/home</td>
      <td>Each user on the system has a subdirectory here for storage.</td>
    </tr>
    <tr>
      <td>/var</td>
      <td>This directory contains variable data files such as log files, email in-boxes, web application related files, cron files, and more.</td>
    </tr>
    <tr>
      <td>/sbin</td>
      <td>This directory contains executables used for system administration (binary system files).</td>
    </tr>
    <tr>
      <td>/tmp</td>
      <td>The operating system and many programs use this directory to store temporary files. This directory is generally cleared upon system boot and may be deleted at other times without any warning.</td>
    </tr>
    <tr>
      <td>/sys</td>
      <td>Applications or utilities are programs that perform particular functions for the user or another program.</td>
    </tr>
    <tr>
      <td>/proc</td>
      <td>Applications or utilities are programs that perform particular functions for the user or another program.</td>
    </tr>
        <tr>
    <td>/root</td>
      <td>The home directory for the root user.</td>
    </tr>
    <tr>
      <td>/usr</td>
      <td>Contains executables, libraries, man files, etc.</td>
    </tr>
  </tbody>
</table>

## Shell
### Prompt Description
- The bash prompt is simple to understand. By default, it shows information like your username (who you are), your computer's name (hostname), and the folder/directory you're currently working in.<br>
![prompt description](/assets/img/linuxFundamentals(1).PNG){: .writeup-image}<br>
- The home directory for a user is marked with a tilde <~> and is the default folder when we log in:<br>
![prompt description](/assets/img/linuxFundamentals(2).PNG){: .writeup-image}<br>
- The dollar sign `<$>`, in this case, stands for a user. As soon as we log in as **root**, the character changes to a hash `<#>` and looks like this:<br>
![prompt description](/assets/img/linuxFundamentals(3).PNG){: .writeup-image}<br>
For example, when we upload and run a shell on the target system, we may not see the username, hostname, and current working directory. This may be due to the PS1 variable in the environment not being set correctly. In this case, we would see the following prompts:
- **Unprivileged - User Shell Prompt**:<br>
![prompt description](/assets/img/linuxFundamentals(4).PNG){: .writeup-image}<br>
- **Privileged - Root Shell Prompt**:<br>
![prompt description](/assets/img/linuxFundamentals(5).PNG){: .writeup-image}<br>
<br>
The **PS1** variable in Linux systems controls how your command prompt looks in the terminal. It's like a template that defines the text you see each time the system is ready for you to type a command.<br>
By customizing the **PS1** variable, you can change the prompt to display information such as your username, your computer's name, the current folder you're in, or even add colors and special characters.<br><br>
In addition to displaying basic information like your username and current folder, you can customize the command prompt to show other useful details such as the IP address, date, time, and the success or failure of the last command. <br>
The prompt can be customized using special characters and variables in the shell’s configuration file (.bashrc for the Bash shell). <br>
<table>
  <thead>
    <tr>
      <th>Special Character</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>/d</td>
      <td>Date (Mon Feb 6)</td>
    </tr>
    <tr>
      <td>/H</td>
      <td>Full hostname</td>
    </tr>
    <tr>
      <td>/j</td>
      <td>Number of jobs managed by the shell</td>
    </tr>
    <tr>
      <td>/n</td>
      <td>Newline</td>
    </tr>
    <tr>
      <td>/r</td>
      <td>Carriage return</td>
    </tr>
    <tr>
      <td>/s</td>
      <td>Name of the shell</td>
    </tr>
    <tr>
      <td>/t</td>
      <td>Current time 24-hour (HH:MM:SS)</td>
    </tr>
    <tr>
      <td>/T</td>
      <td>Current time 12-hour (HH:MM:SS)</td>
    </tr>
    <tr>
      <td>/@</td>
      <td>Current time</td>
    </tr>
    <tr>
      <td>/u</td>
      <td>Currenr username</td>
    </tr>
    <tr>
      <td>/w</td>
      <td>Full path of the current working directory</td>
    </tr>
  </tbody>
</table>

## Getting Help
We will always stumble across tools whose optional parameters we do not know from memory or tools we have never seen before. Therefore it is vital to know how we can help ourselves to get familiar with those tools. The first two ways are the **man pages** and the **help functions**.
- Manual (syntax):
```bash
man <tool>
```
- Help Function (Syntax):
<br>
![curl help](/assets/img/linuxFundamentals(6).PNG){: .writeup-image}
<br>

- But then it is not limited to just the **man pages** and **help functions**, but here are some interesting ones:
  - **whatis (syntax)**:
<br>
  ![curl help](/assets/img/linuxFundamentals(7).PNG){: .writeup-image}
```bash
whatis <tool>
``` 
  - **apropos** (which looks at the manual page and brings details where the same tool is used):
  <br>
  ![curl help](/assets/img/linuxFundamentals(8).PNG){: .writeup-image}

## System Information
it's important to understand the Linux structure, including **system details**, **processes**, **network configurations**, **users/user settings**, and **directories**, along with their related parameters. 


