---
layout: default
title: "home | My CTF Journey"
description: "Tracking my CTF progress, writeups, and resources."
custom_css: true
---

<style>
  .ctf-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  .ctf-card {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 1.5rem;
    transition: transform 0.2s;
  }
  .ctf-card:hover {
    transform: translateY(-5px);
  }
</style>

<div class="header-animation">
  <h1>🚩 Welcome to My CTF Playground!</h1>
  <p class="subtitle">Documenting my hacking adventures - one flag at a time</p>
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
    </ul>
  </div>

  <div class="ctf-card">
    <h2>📌 Quick Jumps</h2>
    <div class="link-bubbles">
      <a href="/notes" class="bubble">📝 Notes</a>
      <a href="/writeups" class="bubble">📖 Writeups</a>
      <a href="/resources" class="bubble">🧰 Toolbox</a>
      <a href="/about" class="bubble">🤔 About</a>
    </div>
  </div>
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