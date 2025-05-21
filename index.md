---
layout: default
title: "home | My CTF Journey"
description: "Tracking my CTF progress, writeups, and resources."
custom_css: true
---


<div class="header-animation">
  <h1 style="text-align: center;"> ❤ Welcome to My Cybersecurity Journey! ❤</h1>
  <p class="subtitle">"A sluggard's appetite is never filled, but the desires of the diligent are fully satisfied."-<strong>Proverbs 13:4</strong></p>
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


<div class="ctf-grid">
  <div class="ctf-card">
    <h2>🔍 Focus Areas</h2>
    <ul class="skill-cloud">
      <li>Web Hacking</li>
      <li>Reverse Engineering</li>
      <li>Crypto Challenges</li>
      <li>Mobile Security</li>
      <li>Binary Exploits</li>
      <li>Forensics</li>

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

<div class="ctf-badge">
  <a href="https://ctftime.org/profile/PathogenicKatt" target="_blank">
    <img src="https://img.shields.io/badge/CTFTime-Profile-blue?style=for-the-badge" alt="CTFTime Profile">
  </a>
</div>