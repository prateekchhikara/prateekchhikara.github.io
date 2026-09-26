---
layout: archive
title: Profile
permalink: /profile/
prose: true
description: "A little more about my background, toolkit, and the people I’ve worked with."
---
<p>I’m an AI/ML engineer with experience across startups, research labs, and industry. I hold a Master’s degree in Computer Science from the University of Southern California, with a specialization in Artificial Intelligence.</p>
<p>My work spans natural language processing, computer vision, and AI infrastructure. I’ve published in venues including ICLR, ACL, NeurIPS workshops, WACV, ECML, ECAI, and TMLR.</p>
<p><a href="{{ '/work_ex/' | relative_url }}">Work experience →</a> &nbsp; <a href="{{ '/education/' | relative_url }}">Education →</a></p>
<h2>Toolkit</h2>
<dl class="profile-skills">
  <dt>Languages</dt><dd>Python, C++, R, MATLAB, SQL</dd>
  <dt>Machine learning</dt><dd>PyTorch, TensorFlow, Keras, ONNX, Hugging Face, NLTK, OpenCV, spaCy, LangChain, scikit-learn, PySpark, MLflow</dd>
  <dt>Engineering</dt><dd>HTML, CSS, JavaScript, Angular, Node.js, SwiftUI, Flask, Git, Docker, Gradio, OpenVINO, Jenkins, Postman, SonarQube</dd>
  <dt>Experimentation &amp; data</dt><dd>Databricks, Weights &amp; Biases, Google Analytics</dd>
  <dt>Cloud</dt><dd>AWS (EC2, S3, Lambda, SageMaker, RDS) and GCP (Compute Engine, Cloud Storage, Cloud Functions, BigQuery)</dd>
</dl>
<h2>From people I’ve worked with</h2>
{% for person in site.data.recommendations %}
<figure class="recommendation">
  <blockquote><p>{{ person.quote }}</p></blockquote>
  <figcaption><img src="{{ person.image | relative_url }}" alt="" width="38" height="38" loading="lazy"><span><a href="{{ person.url }}">{{ person.name }}</a>{{ person.role }}</span></figcaption>
</figure>
{% endfor %}
