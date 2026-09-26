---
layout: archive
title: Projects
permalink: /projects/
description: "Agents, multimodal systems, and experiments in machine learning."
prose: true
---
<p class="row-meta">Ordered by public repository creation date.</p>
{% for project in site.data.projects %}
<article class="project-entry">
  <div class="project-index"><time datetime="{{ project.repository_created }}">{{ project.year }}</time></div>
  <div>
    <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
    <p>{{ project.summary | default: project.details.first }}</p>
    <details>
      <summary>Behind the project</summary>
      <ul>{% for detail in project.details %}<li>{{ detail }}</li>{% endfor %}</ul>
      <figure class="project-figure"><img src="{{ project.image | relative_url }}" alt="{{ project.title | escape }}" width="560" height="360" loading="lazy" decoding="async"></figure>
    </details>
    <div class="project-links"><a href="{{ project.url }}">View code ↗</a></div>
    <div class="project-tags">{{ project.tags | join: ' · ' }}</div>
  </div>
</article>
{% endfor %}
