---
layout: default
title: "CTF Notes"
description: "My collection of cybersecurity notes and references"
custom_css: true
---

<div class="notes-header">
  <h1>Notes</h1>
  <p class="subtitle">"An investment in knowledge pays the best interest." - <strong>Benjamin Franklin</strong> </p>
</div>

<div class="notes-search">
  <input type="text" id="notesSearch" placeholder="Search notes...">
</div>

<div class="notes-grid">
  {% for note in site.notes %}
    <a href="{{ note.url }}" class="note-preview">
      <h3>{{ note.title }}</h3>
      <p>{{ note.description }}</p>
      <div class="note-tags">
        {% for tag in note.tags %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
    </a>
  {% endfor %}
</div>