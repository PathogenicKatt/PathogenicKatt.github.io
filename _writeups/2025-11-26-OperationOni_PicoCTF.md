---
layout: writeup
title: "CTF Challenge: Operation Oni"
description: "Download this disk image, find the key and log into the remote machine."
difficulty: medium
event: "PicoCTF"
tags: [forensics, disk, ssh]
date: 2025-11-26
---

<br>
<br>

## Notes
- A disk image typically has the following extensions (**.img**, **.dd**, **.vmdk**)
- They normally include hidden data and the common scenarios are:
    - Recover deleted files.
    - find hidden data in slack space.

## Challenge Overview:
- This was the following description for the challenge.
<br>

![Challenge screenshot](/assets/img/picoCTF_operationOni.PNG){: .writeup-image }<br>

## Disk file:
![Challenge screenshot](/assets/img/picoCTF_operationOni(1).PNG){: .writeup-image }<br>
- We see that, there are two partitions:
    - The first partition start from 2048
    - The second one, right after the first one *"206848"*
- from the below picture, the only useful partition is the second one and this is because we see that it contains the **/home** and the **/root** directory.<br>
![Challenge screenshot](/assets/img/picoCTF_operationOni(2).PNG){: .writeup-image }<br>







