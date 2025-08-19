---
layout: note
title: "Active Directory"
description: "A directory service for Windows network environments."
tags: [AD, windows, microsoft]
date: 2025-08-20
---

# Active Directory (AD)
_Active Directory (AD) is a directory service for Windows network environments._
- AD provides authentication and authorization functions within a Windows domain environment.
- It is designed to be *backward-compatible*, and many features are arguably not "secure by default," and it can be easily misconfigured.
- AD is essentially a sizeable read-only database accessible to all users within the domain, regardless of their privilege level. 
- **noPac attack (CVE-2021-42278 & CVE-2021-42287)**:
    - Kerberos: The authentication protocol used by AD.
    - TGT (Ticket Granting Ticket): A general pass.
    - TGS (Ticket Granting Service) Ticket: A specific pass for a specific service.
    - Computer Accounts: Every machine (servers, workstations) joined to the domain has an account.