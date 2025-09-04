---
layout: default
title: "CVEs | Vulnerability Research"
description: "Documenting CVEs I've researched."
custom_css: true
---

<div class="header-animation">
  <h1 style="text-align: center;">
    Vulnerability Research
  </h1>
</div>

<div class="ctf-card">
  <div class="difficulty-filter">
    <span>Filter by Criticality:</span>
    <button class="difficulty-btn active" data-criticality="all">All</button>
    <button class="difficulty-btn" data-criticality="low">Low</button>
    <button class="difficulty-btn" data-criticality="medium">Medium</button>
    <button class="difficulty-btn" data-criticality="high">High</button>
    <button class="difficulty-btn" data-criticality="critical">Critical</button>
    </div>
    <div class="search-bar-container" style="text-align:center;">
    <input type="text" id="cvesSearch" class="writeups-search" placeholder="Search CVEs by ID, keyword, or description...">
  </div>
</div>

<div class="writeups-grid" id="cvesGrid">
  {% for cve in site.cves %}
    <div class="writeup-card cve-card" data-criticality="{{ cve.criticality | downcase }}">
      <div class="writeup-card-header">
        <span class="difficulty-badge criticality-badge {{ cve.criticality | downcase }}">
          {{ cve.criticality | capitalize }}
        </span>
        <span class="event">{{ cve.cve_id }}</span>
      </div>
      <h3>{{ cve.title }}</h3>
      <p>{{ cve.description | truncate: 120 }}</p>
      <a href="{{ cve.url }}" class="bubble" style="font-size:0.9rem;">Read Full Analysis</a>
    </div>
  {% endfor %}
</div>
