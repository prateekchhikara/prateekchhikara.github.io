---
layout: archive
title: "Work Experience"
permalink: /work_ex/
author_profile: false
description: "Client-facing AI/ML work across industry use cases, research prototypes, and production systems."
prose: true
---

<div class="work-container">
    <div class="work-card">
        <div class="work-header">
            <div class="logo-container">
                <img src="{{ '/images/mistral-gradient.png' | relative_url }}" alt="Mistral AI Logo" class="work-logo" decoding="async"/>
            </div>
            <div class="work-info">
                <h2>Applied AI Engineer</h2>
                <a href="https://mistral.ai/" class="work-link">Mistral AI</a>
            </div>
            <div class="work-meta">
                <span class="work-date">Dec 2025 - Present</span>
                <span class="work-location">
                    <span class="location-icon">📍</span>
                    <span>Palo Alto, CA</span>
                    <span class="flag">🇺🇸</span>
                </span>
            </div>
        </div>
        <div class="work-details">
            <div class="work-content">
                <ul class="achievement-list">
                    <li>Partnering with clients across industries to translate business use cases into practical AI/ML solutions.</li>
                    <li>Building scalable pipelines, generating synthetic data, and fine-tuning foundational models for performance, reliability, and domain adaptation.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="work-card">
        <div class="work-header">
            <div class="logo-container">
                <img src="{{ '/images/mem0.jpeg' | relative_url }}" alt="Mem0 Logo" class="work-logo" loading="lazy" decoding="async"/>
            </div>
            <div class="work-info">
                <h2>Founding AI Engineer</h2>
                <a href="https://mem0.ai" class="work-link">Mem0.ai</a>
            </div>
            <div class="work-meta">
                <span class="work-date">July 2024 - Nov 2025</span>
                <span class="work-location">
                    <span class="location-icon">📍</span>
                    <span>San Francisco, CA</span>
                    <span class="flag">🇺🇸</span>
                </span>
            </div>
        </div>
        <div class="work-details">
            <div class="work-content">
                <ul class="achievement-list">
                    <li>Created a state-of-the-art memory solution for AI agents, enabling highly personalized interactions through adaptive context retention.</li>
                    <li>Engineered memory-centric LLM pipeline, boosting answer quality by <span class="highlight">26%</span> over OpenAI and slashing token/latency costs by <span class="highlight">90%</span>.</li>
                    <li>Designed scalable memory retrieval pipelines and set up evaluations to measure performance across add and search methods.</li>
                    <li>Implemented a Neo4j-based graph-memory for efficient entity storage and retrieval, boosting context awareness and response accuracy.</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="work-card">
        <div class="work-header">
            <div class="logo-container">
                <img src="{{ '/images/autoenhance.jpeg' | relative_url }}" alt="Autoenhance Logo" class="work-logo" loading="lazy" decoding="async"/>
            </div>
            <div class="work-info">
                <h2>AI Engineer Intern</h2>
                <a href="https://www.autoenhance.ai" class="work-link">Autoenhance.ai</a>
            </div>
            <div class="work-meta">
                <span class="work-date">Jan 2024 - July 2024</span>
                <span class="work-location">
                    <span class="location-icon">📍</span>
                    <span>London, UK</span>
                    <span class="flag">🇬🇧</span>
                    <span>[Remote]</span>
                </span>
            </div>
        </div>
        <div class="work-details">
            <div class="work-content">
                <ul class="achievement-list">
                    <li>Enhancing image quality globally and locally, focusing on selective detail enhancement and comprehensive filtering via deep learning.</li>
                    <li>Developed a deep learning network for detecting similar HDR bracket images, achieving artifact-free merging.</li>
                    <li>Engineering automated censoring for license plates, faces, and other sensitive data, ensuring image compliance with data protection laws.</li>
                </ul>
            </div>
            {% assign jamie = site.data.recommendations | where: "name", "Jamie McInally" | first %}
            <div class="work-recommendations">
                <figure class="work-recommendation">
                    <blockquote>{{ jamie.quote }}</blockquote>
                    <figcaption><img src="{{ jamie.image | relative_url }}" alt="" width="34" height="34" loading="lazy" decoding="async"><span><a href="{{ jamie.url }}">{{ jamie.name }}</a>{{ jamie.role }}</span></figcaption>
                </figure>
            </div>
        </div>
    </div>

    <div class="work-card">
        <div class="work-header">
            <div class="logo-container">
                <img src="{{ '/images/usc-isi.webp' | relative_url }}" alt="USC-ISI Logo" class="work-logo" loading="lazy" decoding="async"/>
            </div>
            <div class="work-info">
                <h2>Graduate Researcher</h2>
                <a href="https://www.isi.edu/" class="work-link">Information Sciences Institute</a>
            </div>
            <div class="work-meta">
                <span class="work-date">Aug 2022 - Dec 2023</span>
                <span class="work-location">
                    <span class="location-icon">📍</span>
                    <span>Marina del Rey, CA</span>
                    <span class="flag">🇺🇸</span>
                </span>
            </div>
        </div>
        <div class="work-details">
            <div class="work-content">
                <ul class="achievement-list">
                    <li>Utilized prompt engineering and memory-based approaches in large language models for text-based game playing.</li>
                    <li>Designed reinforcement learning agents with enhanced memory, language grounding, and object affordances. (<a href="https://arxiv.org/abs/2305.05091" class="publication-link">Published at KCap 2023</a>)</li>
                    <li>Enhanced visual question answering system by implementing visual cropping methods to focus specific region in images. (<a href="https://arxiv.org/abs/2310.16033" class="publication-link">Published at NeurIPS Workshop 2023</a>)</li>
                    <li>Developed a multimodal approach for recipe generation from food images using attention-based vision and language models. (<a href="https://arxiv.org/abs/2308.14391" class="publication-link">Published at WACV 2024</a>)</li>
                </ul>
            </div>
            {% assign filip = site.data.recommendations | where: "name", "Filip Ilievski" | first %}
            <div class="work-recommendations">
                <figure class="work-recommendation">
                    <blockquote>{{ filip.quote }}</blockquote>
                    <figcaption><img src="{{ filip.image | relative_url }}" alt="" width="34" height="34" loading="lazy" decoding="async"><span><a href="{{ filip.url }}">{{ filip.name }}</a>{{ filip.role }}</span></figcaption>
                </figure>
            </div>
        </div>
    </div>

    <div class="work-card">
        <div class="work-header">
            <div class="logo-container">
                <img src="{{ '/images/housing_logo.webp' | relative_url }}" alt="Housing.com Logo" class="work-logo" loading="lazy" decoding="async"/>
            </div>
            <div class="work-info">
                <h2>Data Scientist</h2>
                <a href="https://www.housing.com" class="work-link">Housing.com</a>
            </div>
            <div class="work-meta">
                <span class="work-date">July 2020 - Aug 2022</span>
                <span class="work-location">
                    <span class="location-icon">📍</span>
                    <span>Gurgaon, India</span>
                    <span class="flag">🇮🇳</span>
                </span>
            </div>
        </div>
        <div class="work-details">
            <div class="work-content">
                <ul class="achievement-list">
                    <li>Achieved <span class="highlight">92% precision</span> on fraud engine by leveraging historical and session-level attributes to block fake leads.</li>
                    <li>Developed a computer vision pipeline creating 3D floor plans from spherical projections, <span class="highlight">saving 400 work hours/month</span>.</li>
                    <li>Automated image auditing process, saving <span class="highlight">$40k/year</span> and increasing online traffic by <span class="highlight">12%</span>.</li>
                    <li>Devised an image classifier with <span class="highlight">93% precision</span> and <span class="highlight">89% recall</span>, labeling real-estate tags in real-time at <span class="highlight">6 FPS on CPU</span>. (<a href="https://medium.com/engineering-housing/re-tagger-a-light-weight-real-estate-image-classifier-43573d915b6" class="publication-link">Article</a>)</li>
                    <li>Published two research papers in top international conferences: <a href="https://link.springer.com/chapter/10.1007/978-3-031-26422-1_44" class="publication-link">ECML'22</a> and <a href="https://dl.acm.org/doi/abs/10.1145/3570991.3571060" class="publication-link">CODS-COMAD'23</a></li>
                </ul>
            </div>
            <div class="image-gallery">
                <a class="image-link" href="{{ '/images/carousel1-4.webp' | relative_url }}">
                    <img src="{{ '/images/carousel1-4-small.webp' | relative_url }}" alt="Real-estate image processing result preview 1" loading="lazy" decoding="async" width="160" height="120"/>
                </a>
                <a class="image-link" href="{{ '/images/carousel1-3.webp' | relative_url }}">
                    <img src="{{ '/images/carousel1-3-small.webp' | relative_url }}" alt="Real-estate image processing result preview 2" loading="lazy" decoding="async" width="160" height="120"/>
                </a>
                <a class="image-link" href="{{ '/images/carousel1-2.webp' | relative_url }}">
                    <img src="{{ '/images/carousel1-2-small.webp' | relative_url }}" alt="Real-estate image processing result preview 3" loading="lazy" decoding="async" width="160" height="120"/>
                </a>
                <a class="image-link" href="{{ '/images/carousel1-1.webp' | relative_url }}">
                    <img src="{{ '/images/carousel1-1-small.webp' | relative_url }}" alt="Real-estate image processing result preview 4" loading="lazy" decoding="async" width="160" height="120"/>
                </a>
            </div>
            {% assign chirag = site.data.recommendations | where: "name", "Chirag Sharma" | first %}
            {% assign anil = site.data.recommendations | where: "name", "Anil Goyal" | first %}
            <div class="work-recommendations work-recommendations--grid">
                <figure class="work-recommendation">
                    <blockquote>{{ chirag.quote }}</blockquote>
                    <figcaption><img src="{{ chirag.image | relative_url }}" alt="" width="34" height="34" loading="lazy" decoding="async"><span><a href="{{ chirag.url }}">{{ chirag.name }}</a>{{ chirag.role }}</span></figcaption>
                </figure>
                <figure class="work-recommendation">
                    <blockquote>{{ anil.quote }}</blockquote>
                    <figcaption><img src="{{ anil.image | relative_url }}" alt="" width="34" height="34" loading="lazy" decoding="async"><span><a href="{{ anil.url }}">{{ anil.name }}</a>{{ anil.role }}</span></figcaption>
                </figure>
            </div>
        </div>
    </div>

    <div class="work-card">
        <div class="work-header">
            <div class="logo-container">
                <img src="{{ '/images/proptiger.webp' | relative_url }}" alt="PropTiger Logo" class="work-logo" loading="lazy" decoding="async"/>
            </div>
            <div class="work-info">
                <h2>Data Scientist</h2>
                <a href="https://www.proptiger.com" class="work-link">PropTiger.com</a>
            </div>
            <div class="work-meta">
                <span class="work-date">Jan 2020 - July 2020</span>
                <span class="work-location">
                    <span class="location-icon">📍</span>
                    <span>Gurgaon, India</span>
                    <span class="flag">🇮🇳</span>
                </span>
            </div>
        </div>
        <div class="work-details">
            <div class="work-content">
                <ul class="achievement-list">
                    <li>Improved image quality (contrast, brightness, sharpness, blur) resulting in <span class="highlight">8% increase</span> in CTR on social media campaigns. <a href="https://medium.com/engineering-housing/real-estate-image-quality-enhancement-a9242b5b052c" class="publication-link">(Article)</a></li>
                    <li>Developed a No-Reference Image Quality Ranking tool to select the most visually appealing real estate property images. <a href="https://medium.com/engineering-housing/image-scoring-allocating-percentage-score-to-images-for-their-quality-6169abbf850e" class="publication-link">(Article)</a></li>
                    <li>Launched a service that extracts real-estate entity tags from WhatsApp group messages with <span class="highlight">87% f1-score</span>.</li>
                </ul>
            </div>
        </div>
    </div>
</div>
