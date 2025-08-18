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
  <p class="subtitle" style="text-align: center;"><i>
    "Knowing is not enough; we must apply. Willing is not enough; we must do.</i> -<strong> Johann Wolfgang von Goethe</strong>
  </p>
</div>

  <div class="ctf-card">
    <h2>Site Navigation</h2>
    <div class="link-bubbles">
      <a href="/about" class="bubble">About Me</a>
      <a href="/notes" class="bubble">Notes</a>
      <a href="/writeups" class="bubble">Writeups</a>
      <a href="/resources" class="bubble toolbox-bubble">Toolbox</a>
      <a href="/christ" class="bubble christ-bubble">My Christ's Journey</a>
    </div>
  </div>


<div class="ctf-card">
<h2 style="margin: 0; padding: 0 0 12px 0; padding-bottom: 1px"> Focus Areas</h2>
<p style="margin: 0; padding: 0 0 12px 0; padding-bottom: 0"><i>Primary focus and deepest interest:</i></p>
  <ul>
    <strong>Forensics</strong>
      <ul class="arrow-list">
        <li>Recovering and analyzing digital evidence from files, memory dumps, or network traffic.
        </li>
      </ul>
    <strong>Reverse Engineering</strong>
      <ul class="arrow-list">
        <li>Analyzing binaries or software to understand their inner workings or to find vulnerabilities.
        </li>
      </ul>
    <strong>Binary Exploitation</strong>
      <ul class="arrow-list">
        <li>Exploiting memory corruption bugs (like <i>buffer overflows</i>) in compiled programs to gain control or leak data.
        </li>
      </ul>
  </ul>
<h2 style="margin: 0; padding: 0 0 12px 0; padding-bottom: 1px">Other Areas</h2>
<p style="margin: 0; padding: 0 0 12px 0; padding-bottom: 0"><i>Supporting knowledge and competencies:</i></p>
  <ul>
    <strong>Cryptography</strong>
      <ul class="arrow-list">
        <li>Breaking or designing secure cryptographic systems, and solving crypto-based CTF challenges.</li>
      </ul>
    <strong>Mobile Security</strong>
      <ul class="arrow-list">
        <li>Assessing and exploiting security flaws in Android.</li>
      </ul>
    <strong>Web Exploitation</strong>
      <ul class="arrow-list">
        <li>Finding and exploiting vulnerabilities in web applications, and authentication flaws.
        </li>
      </ul>
    </ul>
</div>


<div class="ctf-card">
  <h2> Currently Learning </h2>
  <ul>
    <li>
      <strong>Forensics</strong>
      <ul class="arrow-list">
        <li>Deep dive in memory particularly <strong><i>disk imaging</i></strong>.</li>
      </ul>
      <ul class="arrow-list">
        <li>Resources like <a href="https://trailofbits.github.io/ctf/forensics/index.html">trail of bits</a> and <a href="https://ctf101.org/forensics/what-is-disk-imaging/"> ctf101</a> are my primary resources. 
        </li>
      </ul>
    </li>
  </ul>
</div>

<h2 class="recent-activity-heading"> Recent Activity</h2>
<div class="post-feed">
  {% for post in site.posts limit:8 %}
    <article class="post-preview">
      <h3>{{ post.title }}</h3>
      <time>{{ post.date | date: "%b %d" }}</time>
      <a href="{{ post.url }}" class="post-link">Read →</a>
    </article>
  {% endfor %}
</div>

<div style="text-align:left; margin-top:0.3rem; margin-bottom:3rem;">
  <a href="/all-activities/" class="bubble" style="font-size:0.8rem;">View All Posts →</a>
</div>


