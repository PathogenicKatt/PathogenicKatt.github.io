---
layout: writeup
title: "CTF Challenge: Information"
description: "Files can always be changed in a secret way. Can you find the flag?"
difficulty: easy
event: "PicoCTF"
tags: [forensics, cryptography]
date: 2025-05-30
---

## Challenge Overview:
- This was the description for the challenge:
    ![Challenge screenshot](/assets/img/information(1).PNG){: .writeup-image }

## Approach:
![Challenge screenshot](/assets/img/information(2).PNG){: .writeup-image }

1. **Importing the file:**I always prefer to have open PicoCTF website on my local machine and then use the virtual machine to solve problems, as you can see i use the `wget` command to get the file.
2. **Viewing what we dealing with**:
    ![Challenge screenshot](/assets/img/information(3).PNG){: .writeup-image }
    - To open the picture you use the following command:
    ```bash
    eog cat.jpg
    ```
    - When viewed this picture, i thought of many approaches, such as *image steganography*- which involves hidden information inside the image.
    - But even before going there the standard approach always stays the same, that is to check the file type and the metadata.
3. **Further Analysis**: We need to verify and know what we are solving.
![Challenge screenshot](/assets/img/information(4).PNG){: .writeup-image }
- informaion about file:
    ```bash
    file cat.jpg
    ```
- Meta-data of the image:
    ```bash
    exiftool
    ```
- So now, we see strange things. That is when you know that it could be you the vulnerability or in this case, our hidden flag.
![Challenge screenshot](/assets/img/information(5).PNG){: .writeup-image }


    

