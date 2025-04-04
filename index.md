---
layout: default
title: "home | My CTF Journey"
description: "Tracking my CTF progess, writeups, and resources."
---

# 🚩 Welcome to my CTF Notes!

Hey there! i'm documenting my **Capture The Flag (CTF)** journey here, focusing on:
- **Web Exploitation**
- **Reverse Engineering**
- **Cryptography**
- **Forensics**
- **Mobile Hacking**
- **Binary Exploitation**
- **Open Source Intelligence**

---

## 🔍 Quick Links
| Section      | Description          |
|-------------------------------------|
|[📄 Notes](/notes)    | Weekly Challenge summaries.
|[📖 Writeups](/writeups) | Detailed step-by-step solutions.
|[🧰 Resources](/resources) | Tools & Cheatsheets.
|[🙋‍♂️ About Me](/about)  | My background and Goals

---

## 📅 Latest Updates
{% for post in site.posts limit:3 %}
- **{{ post.date | date: "%b %d" }}**: [{{ post.title }}]({{ post.url }})
(% endfor %)
[View all notes ->](/notes)

---


[![CTFTime Profile](https://img.shields.io/badge/CTFTime-Profile-blue)](https://ctftime.org/profile/PathogenicKatt)

