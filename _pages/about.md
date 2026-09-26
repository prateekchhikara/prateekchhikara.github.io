---
layout: home
permalink: /
title: Prateek Chhikara
excerpt: "Applied AI Engineer at Mistral AI. Research and engineering across language, vision, and agent memory."
redirect_from:
  - /about/
  - /about.html
---
<section class="home-minimal" aria-labelledby="home-title">
  <div>
    <p class="eyebrow">Applied AI engineer · San Francisco</p>
    <h1 id="home-title">Prateek Chhikara<span class="title-period">.</span></h1>
    <p class="home-minimal__intro">I build AI systems that work beyond the demo.</p>
    <div class="home-bio">
      <p>I’m an Applied AI Engineer at <a href="https://mistral.ai/">Mistral AI</a>, working on production AI systems across language, vision, and agent memory.</p>
      <p>Previously, I was a founding AI engineer at <a href="https://mem0.ai/">Mem0</a> and a researcher at <a href="https://www.isi.edu/">USC’s Information Sciences Institute</a>. I’m interested in how we make models more reliable, more perceptive, and better at remembering what matters.</p>
    </div>
    <div class="home-minimal__links"><a href="{{ '/research/' | relative_url }}">Explore my research <span aria-hidden="true">↗</span></a><a href="mailto:{{ site.author.email }}">Get in touch <span aria-hidden="true">↗</span></a></div>
  </div>
  <figure class="home-portrait"><img src="{{ '/images/profile.webp' | relative_url }}" alt="Prateek Chhikara" width="180" height="210" fetchpriority="high"><figcaption>Engineer. Researcher. Artist.</figcaption></figure>
</section>
<div class="home-minimal__facts" aria-label="At a glance">
  <a href="{{ '/research/' | relative_url }}"><strong>25+</strong> publications</a>
  <a href="{{ site.author.googlescholar }}"><strong>2,000+</strong> citations</a>
  <a href="{{ '/work_ex/' | relative_url }}"><strong>5+</strong> years building AI</a>
  <a href="{{ '/education/' | relative_url }}"><strong>MS</strong> Computer Science, USC</a>
</div>
<section class="home-minimal__section" aria-labelledby="selected-heading">
  <div class="section-top"><h2 id="selected-heading">Selected research</h2><a href="{{ '/research/' | relative_url }}">All publications <span aria-hidden="true">→</span></a></div>
  <ol class="editorial-list">
    {% for item in site.data.selected_work %}
      <li><a class="editorial-row" href="{{ item.url }}"><div><span class="row-meta">{{ item.venue }}</span><h3>{{ item.title }}</h3><p>{{ item.summary }}</p></div><span class="row-arrow" aria-hidden="true">↗</span></a></li>
    {% endfor %}
  </ol>
</section>
<section class="home-minimal__section" aria-labelledby="writing-heading">
  <div class="section-top"><h2 id="writing-heading">Latest writing</h2><a href="{{ '/writing/' | relative_url }}">All writing <span aria-hidden="true">→</span></a></div>
  <ol class="editorial-list">
    {% for post in site.posts limit:3 %}
      <li><a class="editorial-row writing-preview" href="{{ post.url | relative_url }}"><h3>{{ post.title }}</h3><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b %-d, %Y' }}</time></a></li>
    {% endfor %}
  </ol>
</section>
<section class="home-minimal__section outside-section" aria-labelledby="outside-heading">
  <h2 id="outside-heading">Outside the terminal</h2>
  <p>I draw anime-inspired artwork and write about life, research, and the things I learn along the way. <a href="{{ '/artworks/' | relative_url }}">Visit the sketchbook <span aria-hidden="true">↗</span></a></p>
</section>
