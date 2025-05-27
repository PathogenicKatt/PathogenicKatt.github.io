---
layout: default
title: "home | My CTF Journey"
description: "Tracking my CTF progress, writeups, and resources."
custom_css: true
---


<div class="header-animation">
  <h1 style="text-align: center;">Welcome to "My Cybersecurity Journey"! ✨</h1>
  <p class="subtitle">"With Great Power Comes Great Responsibility!"-<strong>Acts 13</strong></p>
</div>

  <div class="ctf-card">
    <h2>🌐 Site Navigation</h2>
    <div class="link-bubbles">
      <a href="/notes" class="bubble">📝 Notes</a>
      <a href="/writeups" class="bubble">📖 Writeups</a>
      <a href="/resources" class="bubble">🧰 Toolbox</a>
      <a href="/about" class="bubble">🤔 About</a>
    </div>
  </div>


<div class="ctf-card">
    <h2>🔍 My Focus Areas</h2>
    <h3>Disclaimer: All this is done, ethically, i do not attempt or break systems without any approval to do so.</h3>
    <ul>
      <li>
        Web Exploitation
        <ul>
          <li>Finding and exploiting vulnerabilities in web applications, and authentication flaws.</li>
        </ul>
      </li>
      <li>
        Reverse Engineering
        <ul>
          <li>Analyzing binaries or software to understand their inner workings or to find vulnerabilities.</li>
        </ul>
      </li>
      <li>
        Cryptography
        <ul>
          <li>Breaking or designing secure cryptographic systems, and solving crypto-based CTF challenges.</li>
        </ul>
      </li>
      <li>
        Mobile Security
        <ul>
          <li>Assessing and exploiting security flaws in Android-for now.</li>
        </ul>
      </li>
      <li>
        Binary Exploitation
        <ul>
          <li>Exploiting memory corruption bugs (like buffer overflows) in compiled programs to gain control or leak data.</li>
        </ul>
      </li>
      <li>
        Forensics
        <ul>
          <li>Recovering and analyzing digital evidence from files, memory dumps, or network traffic.</li>
        </ul>
      </li>
    </ul>
</div>


<div class="ctf-card">
  <h2>🎯 Currently Learning</h2>
  <ul>
    <li>Advanced Binary Exploitation</li>
    <li>Binary Analysis with GDB</li>
    <li>Crackme programs from <a href="https://microcorruption.com/debugger/">Microcorruption</a> </li>
  </ul>
</div>

<h2>🔥 Recent Activity</h2>
<div class="post-feed">
  {% for post in site.posts limit:3 %}
    <article class="post-preview">
      <h3>{{ post.title }}</h3>
      <time>{{ post.date | date: "%b %d" }}</time>
      <a href="{{ post.url }}" class="post-link">Read →</a>
    </article>
  {% endfor %}
</div>


<div class="ctf-card">
  <h2>📬 Connect</h2>
  <div class="link-bubbles">
    <a href="https://github.com/PathogenicKatt" class="bubble" rel="noopener noreferrer">GitHub</a>
    <a href="mailto:katlehom814@gmail.com" class="bubble" rel="noopener noreferrer">Email</a>
  </div>
</div>


<div class="ctf-badge">
  <a href="https://ctftime.org/profile/PathogenicKatt" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/CTFTime-Profile-blue?style=for-the-badge" alt="CTFTime Profile">
  </a>
</div>