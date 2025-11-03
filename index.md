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
     Low-Level Security Engineering
  </h1>
  <p class="subtitle" style="text-align: center;"><i>
    "Knowing is not enough; we must apply. Willing is not enough; we must do."</i> -<strong> Johann Wolfgang von Goethe</strong>
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
<h2 style="margin: 0; padding: 0 0 12px 0; padding-bottom: 1px"> Focus Areas</h2>
<p style="margin: 0; padding: 0 0 12px 0; padding-bottom: 0"><i>Primary expertise:</i></p>
      <ul class="arrow-list">
        <li><strong>Reverse Engineering</strong>: Specializing in mobile application analysis, uncovering app behaviors, and identifying security vulnerabilities in Android/iOS apps.
        </li>
      </ul>
      <ul class="arrow-list">
        <li><strong>Binary Exploitation</strong>: Discovering and exploiting memory corruption vulnerabilities, buffer overflows, and other low-level security issues in compiled programs.
        </li>
      </ul>
<br>
<p style="margin: 0; padding: 0 0 12px 0; padding-bottom: 0"><i>Secondary focus:</i></p>
      <ul class="arrow-list">
        <li><strong>Digital Forensics</strong>: Investigation of digital artifacts, memory analysis, and incident response.
        </li>
      </ul>
<br>
<p style="margin: 0; padding: 0 0 12px 0; padding-bottom: 0"><i>Additional competencies:</i></p>
      <ul class="arrow-list">
        <li><strong>Web Exploitation</strong>: Understanding and identifying security vulnerabilities in web applications.
        </li>
      </ul>
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


