---
layout: default
title: "BloodHound"
data_page: tools
---

<div class="terminal-header">
  <span class="prompt">$</span> <span class="cmd">cat bloodhound.md</span>
</div>
# <span style="font-family: 'Fira Mono', monospace;">BloodHound</span>

<div class="resource-card">
  <h2>Active Directory Attack Path Enumeration Tool</h2>
  <ul>
    <li><strong>Description:</strong> A graphical tool that reveals the hidden and often unintended relationships within an Active Directory (AD) environment. It identifies attack paths that could allow attackers to escalate privileges and move laterally to achieve complete domain compromise (Domain Admin).</li>
    <li><strong>Common Uses:</strong> AD penetration testing, red teaming, purple teaming, and defensive security auditing.</li>
    <li><strong>Official Site:</strong> <a href="https://github.com/BloodHoundAD/BloodHound" target="_blank">github.com/BloodHoundAD/BloodHound</a></li>
  </ul>
</div>

### Core Components

BloodHound operates using a two-part system:

1.  **The Ingestors (Data Collectors):**
    *   **SharpHound:** The primary, modern data collector written in C#. It's the recommended tool.
    *   **BloodHound.py:** A Python-based ingestor, useful on Linux systems or when attacking from a non-Windows machine.
    *   **Function:** These scripts are executed on a compromised domain-joined host (even with low privileges). They query the AD domain controller via the LDAP protocol and collect vast amounts of data about users, groups, computers, permissions, sessions, and trusts.

2.  **The UI (The Analyst):**
    *   A graphical interface (built on Electron) that ingests the JSON files collected by the ingestor.
    *   It builds a graph database (using Neo4j) of all the objects and relationships.
    *   The UI allows you to visually query this graph to find complex attack paths.

### How It Works:

BloodHound's power comes from its use of **graph theory**. Instead of looking at permissions in isolation, it maps the relationships *between* all objects. It then uses algorithms to find the shortest path from a low-privileged starting point (e.g., a regular user account we've compromised) to a high-value target (e.g., the Domain Admins group).

We can right-click on any user or group and select "Find Shortest Paths to High Value Targets" to instantly see all possible privilege escalation routes.

### Common Attack Paths It Identifies

BloodHound automatically enumerates and highlights dangerous misconfigurations, including:

*   **Kerberoastable Users:** Users with Service Principal Names (SPNs) whose passwords can be requested and cracked offline.
*   **AS-REP Roastable Users:** Users who have "Do not require Kerberos preauthentication" enabled.
*   **Unconstrained Delegation:** Computers that can impersonate users to any service, potentially allowing credential theft of high-value accounts.
*   **Constrained Delegation:** Misconfigured delegation that allows a service to impersonate users to a specific set of services.
*   **Inbound ACL Rights:** Dangerous permissions like `GenericAll`, `GenericWrite`, `WriteOwner`, `WriteDACL`, and `ForceChangePassword` on users, groups, or computers.
*   **Group Membership:** Reveals nested group memberships that might not be obvious, showing how a user in a seemingly innocuous group is effectively a member of a privileged group.
*   **Session Enumeration:** Discovers which users are logged into which computers, crucial for lateral movement planning.

### Cheatsheet

```bash
# 1. Start the BloodHound UI and Neo4j database on our attacking machine (Kali)
sudo neo4j console
bloodhound

# 2. On a compromised Windows host, collect data with SharpHound (e.g., hosted on our SMB server)
# Common collection methods:
SharpHound.exe -c All --zipfilename loot.zip
SharpHound.exe -c Session,LoggedOn,Group,LocalGroup,ACL,ObjectProps,Trusts -d cyberlab.local
SharpHound.exe -c All --LdapUser <User> --LdapPass <Pass> # If you have creds but no shell
SharpHound.exe --CollectionMethod Stealth # Attempt to be quieter

# 3. In the BloodHound UI, upload the generated ZIP file.
# 4. Run built-in queries or manually explore the graph.
# 5. Right-click on high-value targets (marked with a trophy) or your owned users to find paths.
```
<a href="/resources" class="back-link">&#8592; Back to Resources</a>