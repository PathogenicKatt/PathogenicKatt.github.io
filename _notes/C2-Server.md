---
layout: note
title: "Command & Control (C2)"
description: "mechanisms used to communicate with and control compromised systems (often called “implants” or “bots”) within a target environment."
tags: [C2, exploits, implants, offensive, post-exploitation]
date: 2025-09-23
---

# Command & Control
-> **Command & Control (C2)** refers to the mechanisms attackers use to communicate with and control compromised systems (often called “implants” or “bots”) within a target environment.<br>
-> C2 is a critical component of most cyber attacks, especially in advanced persistent threats (APTs), ransomware campaigns, and other forms of post-exploitation activity.

## C2 Server
- A C2 server is the central hub that issues commands to infected hosts and receives data back from them.
- It acts as the attacker’s remote control panel, enabling them to:
    - Send instructions.
    - Receive exfiltrated data.
    - Update implants.
    - Monitor activity (logs, status reports).
    - Manage compromised devices.
    <br>
- **C2 Communication Channels**<br>
-> C2 servers communicate with implants using various protocols.<br>
    - HTTP/HTTPS: Mimics normal web traffic.
    - DNS tunneling: Encodes data in DNS queries/responses. Very stealthy.
<br>
- **C2 Architecture**
    - Centralized: One or a few servers control all implants.
    - Decentralized/P2P: Implants communicate with each other, making takedown harder.
    - Hybrid: Combines centralized and decentralized elements.

## C2 in Offensive Security
- **Common C2 Frameworks/Tools:**
    - Metasploit
    - Cobalt Strike
    - Sliver
- **Analysis Tools:**
```bash
# Network Analysis:
wireshark, tshark, tcpdump
# DNS Monitoring:
dnstop, dnschef
# Log Analysis:
awk, elasticsearch
```

- **Deep dive into Sliver**:
    - But first we need to understand what is *"mTLS (mutual Transport Layer Security)"*, an extension of **TLS** where both client and server authenticate each other with certificates.
    - **In Context**: *TLS*,it is only the server that has certificate (client verifies server) and *mTLS*, Both client AND server have certificates (mutual verification).
    - Right, but why use *mTLS*:
    -> Network Obfuscation: Looks like normal HTTPS traffic.
    -> Encrypted Traffic: All communication is encrypted.