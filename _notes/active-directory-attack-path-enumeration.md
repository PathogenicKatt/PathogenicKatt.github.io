---
layout: note
title: "Active Directory Attack Path Enumeration"
description: "process of automatically analyzing an active directory environment to find every possible chain of misconfigurations"
tags: [microsoft, AD, enumeration]
date: 2025-08-19
---

# Active Directory Attack Path Enumeration
- **What is Active Directory?**
    - Active Directory (AD) is a directory service developed by Microsoft for *managing users* and *resources* in Windows domain networks.
    - It stores information about network objects, such as users and computers, and provides authentication and authorization services to control access to these resources.
    - It's like a blueprint of Windows domain networks, it knows every user, every computer and all the rules.
    - **Has the following features:**Centralized Resource Management, Authentication and Authorization, Organizational Units (OUs), Group Policy, *Domain Services (DS)*, Scalability, Replication.
- **An Attack Path?**
    - It's a sequence of steps to get to the higher privilige access.
- **Enumeration?**
    - process of gathering information about a system or network to identify potential vulnerabilities and attack vectors. 
    - In this context, enumeration involves collecting data about users, groups, computers, and permissions within the *Directory Service*.
<br>
-> Hence, **Active Directory Attack Path Enumeration** is the process of automatically analyzing an AD environment to find every possible chain of misconfigurations, weak permissions, and user behaviors that could allow an attacker to gain high-level privileges.
<br>

- In essence, here is the diagram of the **Active Directory**, i mean it is important to understand what exactly *active directory* is:
![active-directory diagram](/assets/img/active-directory.jpg){: .writeup-image }

_For More details regarding "active directory" please checkout: <a href="/notes">notes</a>._

## Tool: BlackHound
- This is a typical tool used to help with this type of an attack.
- *Bloodhound* is a specialized *"sniffer dog"* for a corporate computer network.
- Helps visualize relationships and permissions within an AD environment, making it easier to identify potential attack paths that an adversary could exploit.
- Its main job is to find and point out where users' old, saved passwords might be stored insecurely.
    -  It specifically looks for a type of password storage called **Kerberos tickets**.
    - **Kerberos** is a network authentication protocol used in Active Directory environments to provide secure authentication for users and services. It uses *tickets* to allow users to access resources without repeatedly entering credentials.
- Blackhound is a *diagnostic tool*. It doesn't hack anything itself. It just performs a detailed check-up on the network and creates a report saying, "Here are the places you are most vulnerable to a specific, powerful type of attack".
<br>

_For More details regarding this tool please checkout: <a href="/resources">tools</a>._
