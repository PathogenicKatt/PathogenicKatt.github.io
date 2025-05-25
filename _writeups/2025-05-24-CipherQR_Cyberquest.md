---
layout: writeup
title: "CTF Challenge: CipherQR"
description: "How I solved the CipherQR challenge"
difficulty: easy
event: "CyberQuest 2025"
tags: [forensics, misc, crypto]
date: 2025-05-24
---

<br>
<br>

## Challenge Overview
- This was the following description for the challeng:
<br>

![Challenge Screenshot](/assets/img/CipherQR(1).PNG){: .writeup-image }

<br>

## Approach:

![Recon Screenshot](/assets/img/CipherQR(2).PNG){: .writeup-image }

<br>

1. **File Check**: This is important to check what type of a file is it.
   ```bash
   file Q.rrrr.png
   ```
2. **Meta-Data**: "Data about data",tells us crucial info about the image. As you can see from the screenshot that there is an error with the file, by using the following command. Now, with that in mind, what came straight to my mind was  to check the format of the png.
   ```bash
   exiftool Q.rrrr.png
   ``` 
- By comparing the first 8 bytes(called the *Magic number*), of the normal png and the one that we have. <br>
- Starting with the normal png(every png must have the correct first 8 bytes), just like so:
   
   ![Recon Screenshot](/assets/img/PNG-Gradient_hex.png){: .writeup-image }
<br>

- But if we look at our given png(Q.rrrr.png):
   
   ![Recon Screenshot](/assets/img/CipherQR(3).PNG){: .writeup-image }

   - That output, is shown using the following command(You should see more than what i have shown):
   ```bash
   hexedit Q.rrrr.png
   ```


