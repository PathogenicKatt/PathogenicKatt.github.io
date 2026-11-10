---
layout: writeup
title: "Overthewire: Bandit level 03"
description: "The password for the next level is stored in a hidden file in the inhere directory."
difficulty: easy
event: "Overthewire"
tags: [bandit, hidden-file]
date: 2026-11-02
permalink: /writeups/2026-11-02-Overthewire_Bandit03/
---

## Executive Summary
Bandit Level 3 introduces the concept of hidden files in Unix-like systems. Unlike the previous levels, where the target file was visible in a standard directory listing, the password here is stored in a file that the shell's default `ls` output does not reveal. The level teaches how to list and access files whose names begin with a dot, a convention used for configuration files and credentials throughout Linux systems.

## Objective
- Authenticate to the Bandit server as `bandit3` using the password retrieved from the previous level.
- Navigate into the `inhere/` directory.
- Locate the hidden file containing the password for the next level.

## Scope
- Target: `bandit.labs.overthewire.org` on port `2220`.
- Focus: hidden files in Unix-like systems, directory listing options, basic file operations.

## Challenge Description
On login, the user is placed in a home directory containing a single subdirectory, `inhere`. Running `ls` inside it appears to show nothing, or only a placeholder, because the target file is hidden. By Unix convention, any filename beginning with a dot (`.`) is treated as hidden and omitted from `ls` output unless the `-a` flag is used. The challenge asks the player to recognize this convention and retrieve the password from the hidden file.

## Methodology
1. Reconnaissance: List the contents of `~/inhere/` with the default `ls` and observe what is (or isn't) shown.
2. Identification: Recognize that a directory can contain hidden entries not shown by default.
3. Extraction: List all entries, including hidden ones, and read the target file.
4. Validation: Confirm the password is printed and matches the expected format.

## Tools Used
- `ssh` -> Remote shell access                  
- `ls`  -> Directory listing, including hidden files 
- `cat` -> File content display                 

## Key Findings
- Unix-like systems treat filenames beginning with a dot as hidden by default.
- `ls -a` (or `ls -la`) reveals hidden entries, including the special `.` and `..` directory entries.
- Hidden files are common in real systems for storing configuration and secrets in plain view of anyone who knows to look.

## Technical Reconstruction

### Reconnaissance
Log in as `bandit3` using the password recovered in the previous level, then move into the challenge directory:

```bash
ssh bandit3@bandit.labs.overthewire.org -p 2220
cd inhere
ls
```

Default `ls` output is empty, suggesting an empty directory.

### Identification
An "empty" directory that is the target of a challenge is a strong hint that the relevant entries are hidden. In Unix, filenames starting with `.` are excluded from `ls` output unless explicitly requested.


### Flags Captured


## Remediation
Not applicable.

## Conclusion
Level 3 introduces a convention that appears everywhere in real systems: dotfiles. The most important takeaway is that hidden does not mean secure, a file beginning with `.` is simply excluded from a default listing, not protected from access. Anyone auditing a Linux system, whether defensively or during an engagement, should make `ls -la` a routine first step. The next level builds on this by shifting from visibility to content, requiring the player to distinguish human-readable files from binary data.