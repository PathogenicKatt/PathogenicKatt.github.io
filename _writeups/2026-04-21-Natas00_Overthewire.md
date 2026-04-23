---
layout: writeup
title: "CTF Challenge: Natas 00"
description: "The goal of this level is for you to log into the game using SSH. "
difficulty: easy
event: "Overthewire"
tags: [ssh]
date: 2026-04-21
---

## Challenge Overview:
- This was the following description for the challenge. Also note that level 0 and level 1 are combined for this challenge.

![Challenge screenshot](/assets/img/OverthewireNatas0.PNG){: .writeup-image }<br>

![Challenge screenshot](/assets/img/OverthewireNatas0(3).PNG){: .writeup-image }<br>

## What is SSH?

**SSH (Secure Shell)** is a cryptographic network protocol used to securely connect to remote servers. It provides:
- **Encrypted communication**: All data sent between your computer and the remote server is encrypted
- **Remote command execution**: You can run commands on a remote machine as if you were sitting at its keyboard
- **Authentication**: Uses username/password or cryptographic key pairs to verify identity
- **Security**: Replaces insecure protocols like Telnet with authenticated, encrypted connections

SSH is one of the most fundamental tools in cybersecurity and system administration. For CTF challenges, SSH is often the entry point to access challenge servers.

## The Challenge

Your goal is to log into the **OverTheWire Bandit** challenge server using SSH with the following credentials:
- **Host**: `bandit.labs.overthewire.org`
- **Port**: `2220`
- **Username**: `bandit0`
- **Password**: `bandit0`

## SSH Command Breakdown

The command to connect via SSH is:

```bash
ssh -p 2220 bandit0@bandit.labs.overthewire.org
```

Let's break this down:
- `ssh`: The SSH command itself
- `-p 2220`: The `-p` flag specifies a custom port. By default, SSH runs on port 22, but this server uses port 2220
- `bandit0`: The username to log in with
- `@bandit.labs.overthewire.org`: The `@` symbol separates username from hostname (the server address)

![Challenge screenshot](/assets/img/OverthewireNatas0(1).PNG){: .writeup-image }<br>


### Enter the password
When prompted, type the password:
```
bandit0@bandit.labs.overthewire.org's password: 
```

Type `bandit0` (it won't show as you type for security)

After logging in, you'll be at the command prompt.

![Challenge screenshot](/assets/img/OverthewireNatas0(2).PNG){: .writeup-image }<br>

Now that we're connected, we need to find the password for the next level. Here's how:

### List the directory contents with `ls`

First, use the `ls` command to see what files are in the current directory:

- `ls`: Lists all files and directories in the current location
- The output shows there's a file called `readme` - this is likely where the password is hidden

### Read the file with `cat`

Use the `cat` command to display the contents of the `readme` file:

- `cat`: Short for "concatenate", this command reads and displays the contents of files
- `readme`: The filename to read

### Save the password

**Important**: Make sure to save this password somewhere on your machine because you'll need it for the next challenge (Bandit Level 1).

**Save to a text file using `cat` redirection**
```bash
PathogenicKatt@PathogenicKatt:~$ cat > next_passwd.txt
[Paste the password here]
```
Then press `Ctrl + D` to save and exit. This creates a file with the password.

- `cat >`: Redirects output to create/overwrite a file
- `next_passwd.txt`: The filename where the password will be saved
- Press `Ctrl + D`: Tells the system you're done typing


**Next step**: We are going to use the password we found to log in for Bandit Level 1!

