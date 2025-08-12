---
layout: default
title: "CTF Writeups"
description: "Detailed solutions to captured flags"
custom_css: true
---

<div class="writeups-header">
  <h1>CTF Writeups</h1>
  <p class="subtitle"><i>"Where curiosity meets the solution."</i></p>
</div>

<div class="writeups-search">
  <input type="text" id="writeupsSearch" placeholder="Search writeups...">
  <div class="difficulty-filter">
    <span>Filter:</span>
    <button class="difficulty-btn active" data-difficulty="all">All</button>
    <button class="difficulty-btn" data-difficulty="easy">Easy</button>
    <button class="difficulty-btn" data-difficulty="medium">Medium</button>
    <button class="difficulty-btn" data-difficulty="hard">Hard</button>
  </div>
</div>

<div class="writeups-grid">
  {% for writeup in site.writeups %}
    <a href="{{ writeup.url }}" class="writeup-card" data-difficulty="{{ writeup.difficulty | default: 'easy' }}">
      <div class="writeup-card-header">
        <h3>{{ writeup.title }}</h3>
        <span class="difficulty-badge {{ writeup.difficulty | default: 'easy' }}">
          {{ writeup.difficulty | capitalize | default: "Easy" }}
        </span>
      </div>
      <p>{{ writeup.description }}</p>
      <div class="writeup-meta">
        <span class="event">{{ writeup.event }}</span>
        <div class="writeup-tags">
          {% for tag in writeup.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
      </div>
    </a>
  {% endfor %}
</div>