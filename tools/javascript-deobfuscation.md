---
layout: default
title: "Javascript Deobfuscation"
data_page: tools
---

<div class="terminal-header">
  <span class="prompt">$</span> <span class="cmd">cat javascript-deobfuscation.md</span>
</div>
# <span style="font-family: 'Fira Mono', monospace;">Javascript Deobfuscation</span>

<div class="resource-card">
  <h2>Reverse Engineering Tools</h2>
  <ul>
    <li><strong>Description:</strong> Helps analyze malwares mostly.</li>
    <li><strong>Common Uses:</strong> decoding, code analysis</li>
    <ul class="arrow-list"> <strong>Commands:</strong>
        <li> Hex encode: <code> echo "giberrish" | xxd -p</code></li>
        <li> Hex decode: <code> echo "6769626265726973680a" | xxd -p -r</code></li>
        <li> ROT 13: <code> echo "gibbersih" | tr 'A-Za-z' 'N-ZA-Mn-za-m'</code></li>

      </ul>
    <li><strong>Official Sites:</strong> <a href="https://jsconsole.com/" target="_blank">jsconsole</a>, <a href="https://prettier.io/playground/" target="_blank">prettier</a>, <a href="https://beautifier.io/" target="_blank">beautifier</a>,  <a href="http://www.jsnice.org/" target="_blank">jsnice</a></li>
  </ul>

</div>
<a href="/resources" class="back-link">&#8592; Back to Resources</a>