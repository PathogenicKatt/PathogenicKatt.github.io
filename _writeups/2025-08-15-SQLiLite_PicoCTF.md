---
layout: writeup
title: "PicoCTF Challenge: SQLiLite"
description: "Can you login to this website?"
difficulty: medium
event: "PicoCTF"
tags: [web, slqlite, login]
date: 2025-08-15
---

## Challenge Overview:
- The following was the description for the challenge:
    ![SQLiLite](/assets/img/sqlilite.PNG){: .writeup-image }

## Deep Dive
- Can we login?
- First we test, the behavior of the website:
    ![SQLiLite](/assets/img/sqlilite(1).PNG){: .writeup-image }
- clicking the login button:
    ![SQLiLite](/assets/img/sqlilite(2).PNG){: .writeup-image }
- hence, we can see that, the web uses some SQL. From here; just like any other hacker. This is what i did:
    - Common payload:
    ```sql
    username: admin' --
    password: gibberish
    ```
    - The password is ignored by the use of the sql comments "`--`". So everthing after the comment will be ignored:
    ![SQLiLite](/assets/img/sqlilite(3).PNG){: .writeup-image }
- Hence, the output:
![SQLiLite](/assets/img/sqlilite(4).PNG){: .writeup-image }

## The flag
- View the source code:
```text
Ctrl+u
```
    - On Windows.

![SQLiLite](/assets/img/sqlilite(5).PNG){: .writeup-image }



