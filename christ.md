---
layout: default
title: "My Christ's Journey"
permalink: /christ/
custom_css: true
---

<div class="christ-header-animation">
  <h1 style="text-align:center; color:#4b6cb3; animation: christFadeIn 2s;">My Christ's Journey ✝️</h1>
  <div id="random-verse" style="text-align:center; margin: 1.2rem 0; font-size:1.1rem; color:#319795; font-weight:bold;"></div>
 

<div class="ctf-card christ-card">
  <h2 style="color:#434190;">Bible Study Notes</h2>
  <div class="biblestudy-grid">
    {% for study in site.biblestudy reversed %}
      <div class="biblestudy-card">
        <h3>{{ study.title }}</h3>
        <p class="biblestudy-verse">{{ study.verse }}</p>
        <a href="{{ study.url }}" class="biblestudy-link">Read More →</a>
      </div>
    {% endfor %}
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    document.body.setAttribute('data-page', 'christ');
  });
</script>

