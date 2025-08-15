---
layout: writeup
title: "PicoCTF Challenge: More SQLi"
description: "Can you find the flag on this website."
difficulty: medium
event: "PicoCTF"
tags: [web, slq, login, burpsuite]
date: 2025-08-15
---

## Challenge Overview:
- The following was the description for the challenge:
    ![SQLiLite](/assets/img/moreSQLIi.PNG){: .writeup-image }

## Deep dive
- We first test the behavior of the website:
    ![SQLiLite](/assets/img/moreSQLi(1).PNG){: .writeup-image }
- The response:
    ![SQLiLite](/assets/img/moreSQLi(2).PNG){: .writeup-image }
- Right, so there is something important to note here; is that, the order of the user input is reversed, hence this makes the challenge, a bit tricky.
- And this means we cannot use the comment query to the username; for instance:
    ![SQLiLite](/assets/img/moreSQLi(3).PNG){: .writeup-image }
    - Check where i highlighted, that is is pointless to use a comment query there.
- After trying numerous payloads, i found the one that worked:
```sql
username: admin
password: ' OR 'x'='x' --
```
    - Response:
    ![SQLiLite](/assets/img/moreSQLi(4).PNG){: .writeup-image }
- We are logged in, but we have to hunt for the flag; after analyzing the source code i found nothing:
    ![SQLiLite](/assets/img/moreSQLi(5).PNG){: .writeup-image }
- After playing around with "devtools", and a tool that always go hand in hand with **web exploitation** is *burpsuite*.
    ![SQLiLite](/assets/img/moreSQLi(7).PNG){: .writeup-image }

## Burpsuite
- In this case, the flag was in plainsight in burbsuite:
    ![SQLiLite](/assets/img/moreSQLi(6).PNG){: .writeup-image }




