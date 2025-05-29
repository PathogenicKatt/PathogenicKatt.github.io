---
layout: writeup
title: "CTF Challenge: RustFixMe1"
description: "How I solved the RustFixMe1 challenge"
difficulty: easy
event: "PicoCTF"
tags: [programming, misc, general]
date: 2025-05-24
---

<br>
<br>

## Challenge Overview:
- This was the following description for the challenge.
<br>

![Challenge screenshot](/assets/img/rustFixMe1(1).PNG){: .writeup-image }

<br>

## Aproach:
<br>

![Challenge screenshot](/assets/img/rustFixMe1(2).PNG){: .writeup-image }


1. **importing the file**: After using the `wget` command, you should be able to see the *fixme1.tar.gz*. 
2. **Extracting the contents**: The following command should allow you to extract all the files from the folder.
    ```bash
        tar -xzf fixme1.tar.gz
    ```
    - The `tar` command is used to compress files in linux.
    - -x: I like to think of it as "extract".
    - -z: to be able unzip the file, since it ends with gz.
    - -f: reprsents a file, which in this case is  *fixme1.tar.gz*, it could be any file.