---
layout: writeup
title: "CTF Challenge: flagAreStepic"
description: "A group of underground hackers might be using this legit site to communicate. Use your forensic techniques to uncover their message"
difficulty: medium
event: "PicoCTF"
tags: [forensics, steganography]
date: 2025-05-31
---

## Challenge Overview
- The following was the description for the challenge:
    ![stepic challenge](/assets/img/flagsAreStepic(1).PNG){: .writeup-image }

## Approach
- So if you go through the provided link. <br>
![stepic challenge](/assets/img/flagsAreStepic(2).PNG){: .writeup-image }
<br>

- From here, went straight to the source code.
![stepic challenge](/assets/img/flagsAreStepic(4).PNG){: .writeup-image }
 - After scrolling and trying to understand the source code. 
 - There was only one line that looked suspicious.
![stepic challenge](/assets/img/flagsAreStepic(5).PNG){: .writeup-image }
 
 1. **Analysis of image:**Immediately i thought of **image steganography**, So i tried to save the image first.
![stepic challenge](/assets/img/flagsAreStepic(6).PNG){: .writeup-image }
    - From here, as you can see, i wanted to confirm if the image exists in the URL 🙏.
        ![stepic challenge](/assets/img/flagsAreStepic(7).PNG){: .writeup-image }

2. **Detail Analysis:** From here, it just a matter of transferring the file from the local machine to the virtual machine(Kali Linux).

![stepic challenge](/assets/img/flagsAreStepic(8).PNG){: .writeup-image }

- Normally, i hate it when i have a png files, because the skills that i know about **image steganography**, are only limited to JPEG files. The steghide tool is only applicable for JPEG but not for PNG's.
    - So what now?
    - After numerous attempts!...i finally decided to look at the hint.
<br>
<br>
![stepic challenge](/assets/img/flagsAreStepic(3).PNG){: .writeup-image }
- The hint did not help much, but it did help with verification, that the image that i found was actually suspicious.
- I looked at the meta data again, i saw that the image size(14173x10630) is so insanely high, like that is not normal for an ordinary image especially in this case, a flag. So definitely there is something hidden in the image. 
- Again, because of the limited knowledge, i still struggled.
- As always, i had to make a research on what tools are used for retrieving information from a PNG file. 
- You can check out my notes for more information regarding the tool I found or just click the following link, it should take you to my notes: [forensics-stepic](/notes/forensics-stepic/).
- But yeah, apparently there is a specific tool for PNG's, and it also does not work for JPEG's 😆.
- And it is easy to use. <br>
<br>


3. **Flag:** 
<br>
![stepic challenge](/assets/img/flagsAreStepic(9).PNG){: .writeup-image }

    

    
