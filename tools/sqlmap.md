---
layout: default
title: "SQLMap"
data_page: tools
---

<div class="terminal-header">
  <span class="prompt">$</span> <span class="cmd">cat sqlmap.md</span>
</div>
# <span style="font-family: 'Fira Mono', monospace;">SQLMap</span>

<div class="resource-card">
  <h2>Web Exploitation Tool</h2>
  <ul>
    <li><strong>Description:</strong> Automated tool for SQL injection and database takeover.</li>
    <li><strong>Common Uses:</strong> Detecting and exploiting SQL injection vulnerabilities.</li>
    <ul class="arrow-list"> <strong>Commands:</strong>
        <li> Basic scan: <code>sqlmap -u "http://target.com/page?id=1" --batch</code></li>
        <li> Dump database: <code>sqlmap -u "http://target.com/page?id=1" --dump</code></li>
      </ul>
    <li><strong>Official Site:</strong> <a href="https://sqlmap.org/" target="_blank">sqlmap.org</a></li>
  </ul>
</div>
<a href="/resources" class="back-link">&#8592; Back to Resources</a>