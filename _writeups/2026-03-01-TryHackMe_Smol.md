---
layout: writeup
title: "TryHackMe Challenge: Smol"
description: "Test your enumeration skills on this boot to root machine."
difficulty: medium
event: "TryHackMe"
tags: [reconnaissance, web]
date: 2026-03-01
published: true
permalink: /writeups/2026-03-01-TryHackMe_Smol/
---

## Executive Summary
The objective of this report is to document the successful exploitation path for the TryHackMe challenge "Smol." The target is a WordPress-based virtual machine that includes a publicly known vulnerable plugin and a backdoored plugin. This exercise demonstrates the importance of secure plugin management, software patching, and source-code review in web application security.

## Objective
- Obtain the user flag from the target machine.
- Obtain the root flag from the target machine.

## Scope
- Target: WordPress web application hosted on the Smol VM.
- Focus: reconnaissance, application enumeration, vulnerability identification, exploitation, and privilege escalation.

## Challenge Description
The Smol machine is centered on a WordPress website. It is designed to teach reconnaissance and exploitation of WordPress plugin vulnerabilities, including backdoored third-party components. The challenge highlights how outdated or malicious plugins can expose a web application to compromise.

![smol challenge](/assets/img/smol.PNG){: .writeup-image }

## Methodology
1. Reconnaissance: Identify available services, web application endpoints, and WordPress components.
2. Enumeration: Enumerate plugins, themes, users, and potential misconfigurations.
3. Vulnerability analysis: Assess identified plugins for known vulnerabilities and malicious code.
4. Exploitation: Execute the exploit chain to obtain initial access and escalate privileges.
5. Validation: Confirm user and root flag acquisition.

## Key Findings
- The target is a WordPress site with a vulnerable plugin.
- The challenge includes a backdoored plugin, demonstrating the risk of installing untrusted third-party code.
- Successful exploitation leads to user-level access and subsequent privilege escalation to root.

## Technical Reconstruction
### Reconnaissance
- Describe the tools and techniques used to enumerate the target.
- Record discovered web application paths, WordPress version, and plugin list.
- Using *nmap*, a network mapping that allows us to see what ports are open and what services are running on those ports:
```bash
nmap -p- -A -T4 <ip-address>
```
- `-p-`: "scans for all 65,535 ports".
- `-A`: "scans aggressively, it includes `-sC` (script scanning), `-sV` (Version of the service running), `-O`(type of operating system)".
- `-T4`:<br>
![smol challenge](/assets/img/smol-recon1.PNG){: .writeup-image }<br>
- *results*:<br>
![smol challenge](/assets/img/smol-recon2.PNG){: .writeup-image }<br>
    - From above results we see that we have two open ports, `port 22` and `port 80`.
    - The blue highlighted section gives us a hint that we have to register the *Ip-Address* under */etc/hosts* as smol.thm, so we can be able to work with the able properly.
    ```bash
    sudo sh -c 'echo "<ip-address> smol.thm" >> /etc/hosts'
    ```
    - becareful `>>` appends, while `>` will overwrite the file.
- Hence the landing page:
![smol challenge](/assets/img/smol-recon3.PNG){: .writeup-image }<br>
    - Since the landing page is a blog posts about (Cross site scripting) XXS, (Remote Execution) RCE, and (Server Side Request Forgery) SSRF, it made sense to think or to have an idea that these are the techniques that the website is vulnerable to.



### Vulnerability Identification
- Document the specific vulnerable plugin or component.
- Note any backdoor behavior or malicious functionality observed in the plugin code.

### Exploitation
- Describe the exploit used, including payload construction and execution.
- Capture evidence of shell or code execution on the target.

### Privilege Escalation
- Describe the escalation path from user to root.
- Include specific commands or vulnerabilities leveraged.

## Evidence
- User flag:
- Root flag:

## Conclusions and Recommendations
- Summarize the security weaknesses identified.
- Recommend mitigation strategies, such as keeping WordPress plugins updated, auditing third-party code, and enforcing least privilege.

## References
- TryHackMe Smol challenge description.
- Known vulnerability advisories for the identified plugin(s).

# Recon
- 