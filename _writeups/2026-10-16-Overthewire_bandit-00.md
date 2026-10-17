---
layout: writeup
title: "OverTheWire: Bandit 00"
description: "The goal of this level is for you to log into the game using SSH"
difficulty: easy
event: "OverTheWire"
tags: [linux, ssh]
date: 2026-10-16 02:05:00 +0200
permalink: /writeups/2026-10-16-Overthewire_bandit-00/
---

## Executive Summary
Bandit Level 0 is the entry point to the OverTheWire Bandit wargame. Its purpose is to verify that the player can connect to the game server over SSH on a non-standard port, navigate the home directory, and read a file. No exploitation is involved, this level establishes the foundational workflow used throughout the rest of the series.

## Objective
- Connect to the Bandit server as `bandit0`.
- Locate and read the file containing the password for the next level.

## Scope
- Target: `bandit.labs.overthewire.org` on port `2220`.
- Focus: SSH connectivity, basic Linux file operations.

## Challenge Description
Bandit is a beginner-friendly wargame hosted by OverTheWire. Each level provides a password to the next, and the player must use Linux commands to retrieve it. Level 0 is intentionally trivial, the goal is to make sure the player can connect and run commands, not to challenge them yet.

## Methodology
1. Reconnaissance: Identify the connection details and login credentials.
2. Access: Connect to the target via SSH on the specified port.
3. Enumeration: List the contents of the home directory.
4. Extraction: Read the file containing the next level's password.

## Tools Used
- `ssh`: Remote shell access 
- `ls`: Directory listing 
- `cat`: File content display 

## Key Findings
- The Bandit server listens on a **non-standard SSH port** (`2220`), reinforcing that port 22 should never be assumed.
- The home directory contains a single file named `readme`.
- The password for Bandit1 is stored in plaintext inside that file.

## Technical Reconstruction

### Reconnaissance
The challenge provides the connection string directly:

- **Host:** `bandit.labs.overthewire.org`
- **Port:** `2220`
- **Username:** `bandit0`
- **Password:** `bandit0`

The non-standard port is the first thing to notice. The default SSH
port is 22, so attempting a connection without `-p 2220` will fail or
hang.

### Access
Connect to the server with the `ssh` client:

```bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
```

### Output

![bandit-00](/assets/img/bandit-00.png){: .writeup-image}

### Remediation
- Not applicable.

### Comclusion
- Level 0 establishes the baseline workflow for the entire Bandit series.