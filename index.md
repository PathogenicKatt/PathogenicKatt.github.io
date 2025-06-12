---
layout: default
title: "home | Cybersec & faith Journey"
description: "Tracking my CTF progress, and growing in spirit."
custom_css: true
---

<div class="verse-ticker-container">
  <div class="verse-ticker" id="verse-ticker"></div>
</div>
<div class="header-animation">
  <h1 style="text-align: center;">
     Cybersecurity & Purposeful Living 
  </h1>
  <p class="subtitle" style="text-align: center;">
    "Exploring digital defense, ethical hacking, and wisdom for personal skills, and the spirit."
  </p>
</div>

  <div class="ctf-card">
  <h4 style="color:rgb(238, 133, 114);">
  <strong>Disclaimer:</strong> "All activities described here are conducted with the highest ethical standards and proper authorization. I never attempt to access or test systems without explicit permission."
</h4>
    <h2>🌐 Site Navigation</h2>
    <div class="link-bubbles">
      <a href="/notes" class="bubble">📝 Notes</a>
      <a href="/writeups" class="bubble">📖 Writeups</a>
      <a href="/resources" class="bubble toolbox-bubble">🧰 Toolbox</a>
      <a href="/about" class="bubble">🤔 About</a>
      <a href="/christ" class="bubble christ-bubble">✝️ My Christ's Journey</a>
    </div>
  </div>


<div class="ctf-card">
    <h2> My Focus Areas</h2>
    <ul>
      <li>
        <strong>Web Exploitation</strong>
        <ul>
          <li>Finding and exploiting vulnerabilities in web applications, and authentication flaws.</li>
        </ul>
      </li>
      <li>
        <strong>Reverse Engineering</strong>
        <ul>
          <li>Analyzing binaries or software to understand their inner workings or to find vulnerabilities.</li>
        </ul>
      </li>
      <li>
        <strong>Cryptography</strong>
        <ul>
          <li>Breaking or designing secure cryptographic systems, and solving crypto-based CTF challenges.</li>
        </ul>
      </li>
      <li>
        <strong>Mobile Security</strong>
        <ul>
          <li>Assessing and exploiting security flaws in Android-for now.</li>
        </ul>
      </li>
      <li>
        <strong>Binary Exploitation</strong>
        <ul>
          <li>Exploiting memory corruption bugs (like buffer overflows) in compiled programs to gain control or leak data.</li>
        </ul>
      </li>
      <li>
        <strong>Forensics</strong>
        <ul>
          <li>Recovering and analyzing digital evidence from files, memory dumps, or network traffic.</li>
        </ul>
      </li>
    </ul>
</div>


<div class="ctf-card">
  <h2> Currently Learning </h2>
  <ul>
    <li>Advanced Binary Exploitation</li>
    <li>Binary Analysis with GDB</li>
    <li>Crackme programs from <a href="https://microcorruption.com/debugger/">Microcorruption</a> </li>
  </ul>
</div>

<h2> Recent Activity</h2>
<div class="post-feed">
  {% for post in site.posts limit:8 %}
    <article class="post-preview">
      <h3>{{ post.title }}</h3>
      <time>{{ post.date | date: "%b %d" }}</time>
      <a href="{{ post.url }}" class="post-link">Read →</a>
    </article>
  {% endfor %}
</div>

<div style="text-align:left; margin-top:1.5rem;">
  <a href="/all-activities/" class="bubble" style="font-size:0.8rem;">View All Posts →</a>
</div>


<div class="about-card">
  <h2>📬 Connect</h2>
  <div class="social-links">
    <a href="https://github.com/PathogenicKatt" class="social-link github" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-github"></i> GitHub
    </a>
    <a href="mailto:katlehom814@gmail.com" class="social-link email">
      <i class="fas fa-envelope"></i> Email
    </a>
  </div>
</div>


<div class="ctf-badge">
  <a href="https://ctftime.org/profile/PathogenicKatt" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/CTFTime-Profile-blue?style=for-the-badge" alt="CTFTime Profile">
  </a>
</div>