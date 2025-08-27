---
layout: default
title: "All Activities"
permalink: /all-activities/
---

<h1>All Activities</h1>
<div class="post-feed">
  {% for post in site.posts %}
    <article class="post-preview">
      <h3>{{ post.title }}</h3>
      <time>{{ post.date | date: "%B %d, %Y" }}</time>
      <a href="{{ post.url }}" class="post-link">Read →</a>
    </article>
  {% endfor %}
</div>