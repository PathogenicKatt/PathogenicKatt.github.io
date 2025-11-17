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
  <h1 style="text-align: center; ">
     Low-Level Security Engineering
  </h1>
  <p style="text-align: center; padding-bottom: 1.5rem; margin: 0.5rem 0 0 0; font-size: 1rem; color: var(--text-secondary, #666); font-weight: 300;">
     Security research | CTF competitions | Faith
  </p>
</div>

  <div class="ctf-card" >
    <div class="link-bubbles">
      <a href="/about" class="bubble">About Me</a>
      <a href="/notes" class="bubble">Notes</a>
      <a href="/writeups" class="bubble">Writeups</a>
      <a href="/resources" class="bubble toolbox-bubble">Toolbox</a>
      <a href="/cves" class="bubble cve-bubble">CVEs</a>
      <a href="/christ" class="bubble christ-bubble">My Christ's Journey</a>
      
    </div>
  </div>

<div class="ctf-card">
  <div class="expertise-section">
    <i>Primary Expertise:</i>
    <p>
      <strong>Reverse Engineering</strong> — Specializing in mobile application analysis, and identifying security vulnerabilities in Android apps. <br><strong>Binary Exploitation</strong> — Discovering and exploiting memory corruption vulnerabilities, and other low-level security issues in compiled programs.
    </p>
  </div>

  <div class="expertise-section">
    <i >Secondary Focus:</i>
    <p>
      <strong>Digital Forensics</strong> — Investigation of digital artifacts, memory analysis, and incident response. <br> <strong>Artificial Intelligence</strong> — AI security, model vulnerabilities, and adversarial machine learning.
    </p>
  </div>

  <div class="expertise-section">
    <i>Additional Competencies:</i>
    <p>
      <strong>Web Exploitation</strong> — Understanding and identifying security vulnerabilities in web applications.
    </p>
  </div>
</div>

<h2 class="recent-activity-heading"> Recent Activity</h2>
<div class="post-feed">
  {% for post in site.posts limit:10 %}
    <article class="post-preview">
      <h3>{{ post.title }}</h3>
      <time>{{ post.date | date: "%b %d" }}</time>
      <a href="{{ post.url }}" class="post-link">Read →</a>
    </article>
  {% endfor %}
</div>

<div style="text-align:left; margin-top:0.1rem; margin-left:0.5rem; padding-bottom:3rem;">
  <a href="/all-activities/" class="bubble" style="font-size:0.8rem;">View All Posts</a>
</div>


