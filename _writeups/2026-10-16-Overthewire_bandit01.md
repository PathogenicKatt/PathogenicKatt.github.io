---
layout: writeup
title: "OverTheWire: Bandit 01"
description: "The password for the next level is stored in a file called - located in the home directory"
difficulty: easy
event: "OverTheWire"
tags: [ ssh, bandit]
date: 2026-10-16 03:08:00 +0200
permalink: /writeups/2026-10-16-Overthewire_bandit01/
---

## Executive Summary
Bandit Level 1 introduces a subtle but important Linux pitfall: a file whose name is `-`. Because most command-line tools treat a leading dash as the start of an option, passing `-` directly to `cat` causes it to read from standard input instead of the intended file. The level teaches how to disambiguate a filename from an option by prefixing a path.

## Objective
- Authenticate to the Bandit server as `bandit1`.
- Read the password for the next level from a file whose name is `-`.

## Scope
- Target: `bandit.labs.overthewire.org` on port `2220`.
- Focus: shell argument parsing, special filenames, path disambiguation.

## Challenge Description
The player is given the password for `bandit1` (obtained from the previous level) and told that the next password is stored in a file in the home directory. On login, `ls` reveals a single file named `-`. Attempting `cat -` does not read the file — it waits for input from the keyboard, because `-` is interpreted as "read from stdin."

## Methodology
1. Reconnaissance: Log in and list the home directory.
2. Identification: Recognize `-` as a special filename.
3. Extraction: Prefix the filename with a path (`./-`) to break the option interpretation.
4. Validation: Confirm the password is printed.

## Tools Used
- `ssh`: Remote shell access                  
- `ls`: Directory listing                    
- `cat`: File content display                 

## Key Findings
- A file named `-` is valid on Linux but ambiguous when passed to most commands.
- `cat -` reads from **stdin**, not from a file called `-`.
- Prefixing a path (`./-`, or an absolute path) removes the ambiguity and forces the shell/tool to treat the argument as a filename.

## Technical Reconstruction

### Reconnaissance
Log in as `bandit1` using the password recovered in the previous level:

```bash
ssh bandit1@bandit.labs.overthewire.org -p 2220
```

![bandit-01](/assets/img/bandit-01.png){: .writeup-image}

A single file whose name is a single dash.

### Identification
The dash is the problem. In POSIX argument conventions, a leading `-` signals an option. Running:

```bash
cat -
```

does **not** read a file called `-`. Instead, `cat` interprets the dash as "read from standard input," and the shell hangs waiting for the user to type something until you `Ctrl+C` to exit or kill the session. As seen from the above picture.

### Extraction
To force the argument to be treated as a filename, supply it with a path prefix. The simplest is the current-directory prefix `./`:

```bash
cat ./-
```

That redacted string is the password for **Bandit2**.

### Flags Captured
- **Bandit2 password:** [REDACTED]

> The password is redacted in accordance with OverTheWire's published

## Remediation
- Not applicable.

## Conclusion
Level 1 is short but leaves a lasting lesson: in the shell, *position matters*. A dash at the start of an argument is an option; a dash after a path separator is a filename.