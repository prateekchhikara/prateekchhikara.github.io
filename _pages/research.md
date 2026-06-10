---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

<style>
/* ============ Shared ============ */
.pub-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8px;
}

.section-heading {
  text-align: center;
  margin: 34px 0 20px;
}

.section-heading span {
  display: inline-block;
  font-size: 1.5em;
  font-weight: 800;
  color: #1a2533;
  padding-bottom: 8px;
  position: relative;
}

.section-heading span::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 70px;
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(90deg, #e74c3c, #f39c12, #f1c40f);
}

/* ============ Featured publication cards ============ */
.publication-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 14px;
  padding: 18px;
  margin-bottom: 22px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 20px;
  align-items: stretch;
}

.publication-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #e74c3c, #f39c12, #f1c40f);
  border-radius: 14px 14px 0 0;
  z-index: 2;
}

.publication-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.13);
}

.publication-image-wrap {
  width: 230px;
  min-width: 230px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
  align-self: stretch;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.publication-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.publication-card:hover .publication-image {
  transform: scale(1.05);
}

.publication-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.publication-title {
  font-weight: 700;
  font-size: 1.12em;
  line-height: 1.3;
  margin-bottom: 10px;
}

.publication-title a {
  color: #1a2533;
  text-decoration: none;
  transition: color 0.3s ease;
}

.publication-title a:hover {
  color: #2980b9;
  text-decoration: none;
}

.publication-meta {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: 6px;
  background: #eaf2fa;
  color: #2471a3;
  padding: 3px 12px;
  border-radius: 20px;
  font-size: 0.74em;
  font-weight: 600;
  font-style: normal;
  margin-bottom: 10px;
}

.publication-meta::before {
  content: '📄';
  font-size: 0.95em;
}

.publication-excerpt {
  margin: 0 0 10px;
  color: #2c3e50;
  line-height: 1.55;
  font-size: 0.85em;
}

.featured-award {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: 5px;
  background: #fdf6e3;
  color: #b7791f;
  padding: 3px 11px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.78em;
  margin-bottom: 10px;
}

/* ============ Full publication list ============ */
.pub-rank {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82em;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #566573;
  background: #f0f2f4;
  padding: 4px 14px;
  border-radius: 20px;
  margin: 22px 0 14px;
}

.pub-entry {
  background: #ffffff;
  border: 1px solid #eef0f2;
  border-left: 4px solid #2980b9;
  border-radius: 10px;
  padding: 14px 16px;
  margin-bottom: 12px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-left-color 0.25s ease;
}

.pub-entry:hover {
  transform: translateX(3px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  border-left-color: #e74c3c;
}

.pub-entry-title {
  font-weight: 700;
  font-size: 0.98em;
  line-height: 1.35;
  margin-bottom: 4px;
}

.pub-entry-title a {
  color: #1a2533;
  text-decoration: none;
  transition: color 0.25s ease;
}

.pub-entry-title a:hover {
  color: #2980b9;
}

.pub-entry-venue {
  font-style: italic;
  color: #7f8c8d;
  font-size: 0.82em;
  margin-bottom: 3px;
}

.pub-entry-authors {
  color: #566573;
  font-size: 0.82em;
  margin-bottom: 9px;
}

.pub-entry-authors .me {
  color: #1a2533;
  font-weight: 700;
}

.pub-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 11px;
  border-radius: 20px;
  font-size: 0.72em;
  font-weight: 600;
  letter-spacing: 0.2px;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.2s ease, filter 0.2s ease;
}

a.badge:hover {
  transform: translateY(-1px);
  filter: brightness(0.96);
  text-decoration: none;
}

.badge-paper   { background: #efeafd; color: #6b46c1; }
.badge-workshop{ background: #eaf2fa; color: #2471a3; }
.badge-resource{ background: #f0f2f4; color: #566573; }
.badge-if      { background: #fdf3e7; color: #c0700f; }
.badge-award   { background: #fdf6e3; color: #b7791f; }

@media (max-width: 768px) {
  .publication-card {
    flex-direction: column;
  }
  .publication-image-wrap {
    width: 100%;
    min-width: unset;
  }
  .publication-image {
    height: 200px;
  }
}
</style>

<div class="pub-wrap">

<div class="section-heading"><span>Selected Publications</span></div>

  <div class="publication-card">
    <div class="publication-image-wrap">
      <img src="/images/calibration.webp" alt="Mind the confidence gap paper" class="publication-image" loading="lazy" decoding="async">
    </div>
    <div class="publication-content">
      <div class="publication-title">
        <a href="https://openreview.net/forum?id=lyaHnHDdZl" target="_blank" rel="noopener noreferrer">
          Mind the confidence gap: Overconfidence, calibration, and distractor effects in Large Language Models
        </a>
      </div>
      <span class="publication-meta">Transactions on Machine Learning Research (TMLR) · 2025</span>
      <div class="publication-excerpt">
        Demonstrates that distractor-augmented prompting substantially mitigates overconfidence in LLMs—yielding up to 460% relative accuracy gains and 90% reductions in expected calibration error—and derives principled guidelines for reliable, well-calibrated deployment.
      </div>
    </div>
  </div>

  <div class="publication-card">
    <div class="publication-image-wrap">
      <img src="/images/mem0_paper.webp" alt="Mem0 paper" class="publication-image" loading="lazy" decoding="async">
    </div>
    <div class="publication-content">
      <div class="publication-title">
        <a href="https://arxiv.org/abs/2504.19413" target="_blank" rel="noopener noreferrer">
          Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory
        </a>
      </div>
      <span class="publication-meta">European Conference on Artificial Intelligence (ECAI) · 2025</span>
      <div class="publication-excerpt">
        Proposes a scalable, memory-centric architecture that dynamically extracts, consolidates, and retrieves salient conversational information to augment long-term LLM context. On the LOCOMO benchmark it improves accuracy by up to 26% while reducing latency by 91% and token expenditure by over 90%.
      </div>
    </div>
  </div>

  <div class="publication-card">
    <div class="publication-image-wrap">
      <img src="/images/mllm_knows.webp" alt="MLLMs Know Where to Look paper" class="publication-image" loading="lazy" decoding="async">
    </div>
    <div class="publication-content">
      <div class="publication-title">
        <a href="https://openreview.net/forum?id=DgaY5mDdmT" target="_blank" rel="noopener noreferrer">
          MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs
        </a>
      </div>
      <span class="publication-meta">International Conference on Learning Representations (ICLR) · 2025</span>
      <div class="publication-excerpt">
        Establishes that the visual question-answering accuracy of MLLMs is highly sensitive to subject scale, and introduces training-free visual cropping techniques that enhance the perception of fine-grained details.
      </div>
    </div>
  </div>

  <div class="publication-card">
    <div class="publication-image-wrap">
      <img src="/images/wacv.webp" alt="FIRE paper" class="publication-image" loading="lazy" decoding="async">
    </div>
    <div class="publication-content">
      <div class="publication-title">
        <a href="https://openaccess.thecvf.com/content/WACV2024/html/Chhikara_FIRE_Food_Image_to_REcipe_Generation_WACV_2024_paper.html" target="_blank" rel="noopener noreferrer">
          FIRE: Food Image to REcipe generation
        </a>
      </div>
      <span class="publication-meta">IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) · 2024</span>
      <div class="publication-excerpt">
        Introduces FIRE, a multimodal framework that synthesizes food titles, ingredients, and cooking instructions from images by integrating BLIP, a Vision Transformer decoder, and T5—facilitating downstream applications such as recipe customization and recipe-to-code generation for automated cooking.
      </div>
    </div>
  </div>

  <div class="publication-card">
    <div class="publication-image-wrap">
      <img src="/images/kcap.webp" alt="KCap paper" class="publication-image" loading="lazy" decoding="async">
    </div>
    <div class="publication-content">
      <div class="publication-title">
        <a href="https://dl.acm.org/doi/10.1145/3587259.3627561" target="_blank" rel="noopener noreferrer">
          Knowledge-enhanced Agents for Interactive Text Games
        </a>
      </div>
      <span class="publication-meta">International Conference on Knowledge Capture (KCap) · 2023</span>
      <span class="featured-award">🏆 Best Student Paper Award</span>
      <div class="publication-excerpt">
        Presents a knowledge-injection framework that strengthens the functional grounding of reinforcement learning and language model agents in text-based games through knowledge graphs and memory of prior actions and object affordances, evaluated systematically across 10 ScienceWorld tasks.
      </div>
    </div>
  </div>

<div class="section-heading"><span>All Publications</span></div>

<p style="text-align:center; color:#566573; font-size:0.9em; margin-top:-8px;">
  You can find all my publications on <a href="https://scholar.google.com/citations?user=RQTJ_aIAAAAJ&hl" target="_blank" rel="noopener noreferrer">Google Scholar</a> or <a href="https://www.researchgate.net/profile/Prateek-Chhikara" target="_blank" rel="noopener noreferrer">ResearchGate</a>.
</p>

<div class="section-heading"><span>Conferences / Workshops</span></div>

<span class="pub-rank">CORE A*</span>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://openreview.net/forum?id=DgaY5mDdmT" target="_blank" rel="noopener noreferrer">MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs</a>
  </div>
  <div class="pub-entry-venue">International Conference on Learning Representations (ICLR) · 2025</div>
  <div class="pub-entry-authors">J Zhang, M Khayatkhoei, <span class="me">P Chhikara</span>, and F Ilievski</div>
  <div class="pub-badges">
    <a class="badge badge-paper" href="https://openreview.net/forum?id=DgaY5mDdmT" target="_blank" rel="noopener noreferrer">Main Conference Paper</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://openreview.net/forum?id=YrYcoV2dAk" target="_blank" rel="noopener noreferrer">Visual Cropping Improves Zero-Shot Question Answering of Multimodal Large Language Models</a>
  </div>
  <div class="pub-entry-venue">NeurIPS Workshop on Robustness of Few-shot and Zero-shot Learning in Foundation Models · 2023</div>
  <div class="pub-entry-authors">J Zhang, M Khayatkhoei, <span class="me">P Chhikara</span>, and F Ilievski</div>
  <div class="pub-badges">
    <a class="badge badge-workshop" href="https://openreview.net/forum?id=YrYcoV2dAk" target="_blank" rel="noopener noreferrer">Workshop Paper</a>
    <a class="badge badge-resource" href="https://drive.google.com/file/d/1CXwK4IQqOrEWjD_huOiOnrhzoN3sphZD/view?usp=sharing" target="_blank" rel="noopener noreferrer">Poster</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://aclanthology.org/2023.bionlp-1.18/" target="_blank" rel="noopener noreferrer">Privacy Aware Question-Answering System for Online Mental Health Risk Assessment</a>
  </div>
  <div class="pub-entry-venue">ACL Proceedings of the 22nd Workshop on Biomedical Language Processing · 2023</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, U Pasupulety, J Marshall, D Chaurasia, and S Kumari</div>
  <div class="pub-badges">
    <a class="badge badge-workshop" href="https://aclanthology.org/2023.bionlp-1.18/" target="_blank" rel="noopener noreferrer">Workshop Paper</a>
    <a class="badge badge-resource" href="https://drive.google.com/file/d/1tubM-8KApksVXA4pNzFCMR1VlvN7fB-2/view?usp=sharing" target="_blank" rel="noopener noreferrer">Presentation</a>
    <a class="badge badge-resource" href="https://drive.google.com/file/d/1f-G1bvK2EvSkPW2cJfVacUQ3gJk64MQx/view?usp=sharing" target="_blank" rel="noopener noreferrer">Poster</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://dl.acm.org/doi/abs/10.1145/3477090.3481051" target="_blank" rel="noopener noreferrer">Federated Learning-based Aerial Image Segmentation for collision-free Movement and Landing</a>
  </div>
  <div class="pub-entry-venue">Proceedings of the 4th ACM MobiCom Workshops · 2021</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, R Tekchandani, N Kumar, and S Tanwar</div>
  <div class="pub-badges">
    <a class="badge badge-workshop" href="https://dl.acm.org/doi/abs/10.1145/3477090.3481051" target="_blank" rel="noopener noreferrer">Workshop Paper</a>
  </div>
</div>

<span class="pub-rank">CORE A</span>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://arxiv.org/abs/2504.19413" target="_blank" rel="noopener noreferrer">Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory</a>
  </div>
  <div class="pub-entry-venue">European Conference on Artificial Intelligence (ECAI) · 2025</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, D Khant, S Aryan, T Singh, and D Yadav</div>
  <div class="pub-badges">
    <a class="badge badge-paper" href="https://arxiv.org/abs/2504.19413" target="_blank" rel="noopener noreferrer">Main Conference Paper</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://openaccess.thecvf.com/content/WACV2024/html/Chhikara_FIRE_Food_Image_to_REcipe_Generation_WACV_2024_paper.html" target="_blank" rel="noopener noreferrer">FIRE: Food Image to REcipe generation</a>
  </div>
  <div class="pub-entry-venue">IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) · 2024</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, D Chaurasia, Y Jiang, O Masur, and F Ilievski</div>
  <div class="pub-badges">
    <a class="badge badge-paper" href="https://openaccess.thecvf.com/content/WACV2024/html/Chhikara_FIRE_Food_Image_to_REcipe_Generation_WACV_2024_paper.html" target="_blank" rel="noopener noreferrer">Main Conference Paper</a>
    <a class="badge badge-resource" href="https://drive.google.com/file/d/1zf2NA6ga8PWndZAgu5QjSwO8EPsvt-yt/view?usp=sharing" target="_blank" rel="noopener noreferrer">Poster</a>
    <a class="badge badge-resource" href="https://docs.google.com/presentation/d/1bRYwpjBn6cgybcvtev1BNlqLS3iAbwr_8EA5vZ2wRHc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Presentation</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://link.springer.com/chapter/10.1007/978-3-031-26422-1_44" target="_blank" rel="noopener noreferrer">RE-Tagger: A light-weight Real-Estate Image Classifier</a>
  </div>
  <div class="pub-entry-venue">European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML-PKDD) · 2022</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, A Goyal, and C Sharma</div>
  <div class="pub-badges">
    <a class="badge badge-paper" href="https://link.springer.com/chapter/10.1007/978-3-031-26422-1_44" target="_blank" rel="noopener noreferrer">Main Conference Paper (Demo Track)</a>
    <a class="badge badge-resource" href="https://www.youtube.com/watch?v=eVWkU7yb-3M" target="_blank" rel="noopener noreferrer">Video</a>
  </div>
</div>

<span class="pub-rank">CORE B</span>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://dl.acm.org/doi/10.1145/3587259.3627561" target="_blank" rel="noopener noreferrer">Knowledge-enhanced Agents for Interactive Text Games</a>
  </div>
  <div class="pub-entry-venue">International Conference on Knowledge Capture (KCap) · 2023</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, J Zhang, F Ilievski, J Francis, and K Ma</div>
  <div class="pub-badges">
    <a class="badge badge-paper" href="https://dl.acm.org/doi/10.1145/3587259.3627561" target="_blank" rel="noopener noreferrer">Main Conference Paper</a>
    <a class="badge badge-resource" href="https://docs.google.com/presentation/d/1G8KG8qNLnWITcdfIONhAQDGnd2uqaO_djqGh7hwIXmo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Presentation</a>
    <span class="badge badge-award">🏆 Best Student Paper Award</span>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://dl.acm.org/doi/10.1145/3570991.3571060" target="_blank" rel="noopener noreferrer">DIGITOUR: Automatic Digital Tours for Real-Estate Properties</a>
  </div>
  <div class="pub-entry-venue">ACM CODS-COMAD · 2023</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, H Kuhar, A Goyal, and C Sharma</div>
  <div class="pub-badges">
    <a class="badge badge-paper" href="https://dl.acm.org/doi/10.1145/3570991.3571060" target="_blank" rel="noopener noreferrer">Main Conference Paper</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://ieeexplore.ieee.org/abstract/document/9685991" target="_blank" rel="noopener noreferrer">Federated Learning for Air Quality Index Prediction using UAV Swarm Networks</a>
  </div>
  <div class="pub-entry-venue">IEEE Global Communications Conference (GLOBECOM) · 2021</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, R Tekchandani, N Kumar, S Tanwar, and JJPC Rodrigues</div>
  <div class="pub-badges">
    <a class="badge badge-paper" href="https://ieeexplore.ieee.org/abstract/document/9685991" target="_blank" rel="noopener noreferrer">Main Conference Paper</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://ieeexplore.ieee.org/abstract/document/9024537" target="_blank" rel="noopener noreferrer">An efficient scheme for wireless charging of electric vehicles using RFID with an optimal path planning</a>
  </div>
  <div class="pub-entry-venue">IEEE Globecom Workshops (GC Wkshps) · 2019</div>
  <div class="pub-entry-authors">S Arora, S Goel, <span class="me">P Chhikara</span>, H Singh, N Kumar, and PS Rana</div>
  <div class="pub-badges">
    <a class="badge badge-workshop" href="https://ieeexplore.ieee.org/abstract/document/9024537" target="_blank" rel="noopener noreferrer">Workshop Paper</a>
  </div>
</div>

<span class="pub-rank">Unranked</span>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://arxiv.org/abs/2507.09751" target="_blank" rel="noopener noreferrer">Sound and Complete Neuro-symbolic Reasoning with LLM-Grounded Interpretations</a>
  </div>
  <div class="pub-entry-venue">International Conference on Neurosymbolic Learning and Reasoning (NeSy) · 2025</div>
  <div class="pub-entry-authors">BP Allen, <span class="me">P Chhikara</span>, TM Ferguson, F Ilievski, and P Groth</div>
  <div class="pub-badges">
    <a class="badge badge-paper" href="https://arxiv.org/abs/2507.09751" target="_blank" rel="noopener noreferrer">Main Conference Paper</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://ieeexplore.ieee.org/abstract/document/9077805" target="_blank" rel="noopener noreferrer">An ensemble approach for extractive text summarization</a>
  </div>
  <div class="pub-entry-venue">International Conference on Emerging Trends in Information Technology and Engineering · 2020</div>
  <div class="pub-entry-authors">P Singh, <span class="me">P Chhikara</span>, and J Singh</div>
  <div class="pub-badges">
    <a class="badge badge-paper" href="https://ieeexplore.ieee.org/abstract/document/9077805" target="_blank" rel="noopener noreferrer">Main Conference Paper</a>
  </div>
</div>

<div class="section-heading"><span>Journals</span></div>

<span class="pub-rank">Quartile 1 (Q1)</span>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://openreview.net/forum?id=lyaHnHDdZl" target="_blank" rel="noopener noreferrer">Mind the confidence gap: Overconfidence, calibration, and distractor effects in Large Language Models</a>
  </div>
  <div class="pub-entry-venue">Transactions on Machine Learning Research (TMLR) · 2025</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span></div>
  <div class="pub-badges">
    <a class="badge badge-paper" href="https://openreview.net/forum?id=lyaHnHDdZl" target="_blank" rel="noopener noreferrer">Journal Paper</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://ieeexplore.ieee.org/abstract/document/10509607" target="_blank" rel="noopener noreferrer">A Differentially Privacy Assisted Federated Learning Scheme to Preserve Data Privacy for IoMT Applications</a>
  </div>
  <div class="pub-entry-venue">IEEE Transactions on Network and Service Management · 2024</div>
  <div class="pub-entry-authors">A Barnawi, <span class="me">P Chhikara</span>, R Tekchandani, N Kumar, and B Alzahrani</div>
  <div class="pub-badges">
    <a class="badge badge-if" href="https://ieeexplore.ieee.org/abstract/document/10509607" target="_blank" rel="noopener noreferrer">Impact Factor: 4.7</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://www.sciencedirect.com/science/article/pii/S1047320323002717" target="_blank" rel="noopener noreferrer">Sea-Pix-GAN: Underwater image enhancement using adversarial neural network</a>
  </div>
  <div class="pub-entry-venue">Journal of Visual Communication and Image Representation · 2024</div>
  <div class="pub-entry-authors">D Chaurasia and <span class="me">P Chhikara</span></div>
  <div class="pub-badges">
    <a class="badge badge-if" href="https://www.sciencedirect.com/science/article/pii/S1047320323002717" target="_blank" rel="noopener noreferrer">Impact Factor: 2.6</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://ieeexplore.ieee.org/abstract/document/9409140" target="_blank" rel="noopener noreferrer">Federated learning and autonomous UAVs for hazardous zone detection and AQI prediction in IoT environment</a>
  </div>
  <div class="pub-entry-venue">IEEE Internet of Things Journal · 2021</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, R Tekchandani, N Kumar, M Guizani, and MM Hassan</div>
  <div class="pub-badges">
    <a class="badge badge-if" href="https://ieeexplore.ieee.org/abstract/document/9409140" target="_blank" rel="noopener noreferrer">Impact Factor: 8.2</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://www.sciencedirect.com/science/article/pii/S0167739X21001692" target="_blank" rel="noopener noreferrer">Artificial intelligence-enabled Internet of Things-based system for COVID-19 screening using aerial thermal imaging</a>
  </div>
  <div class="pub-entry-venue">Future Generation Computer Systems · 2021</div>
  <div class="pub-entry-authors">A Barnawi, <span class="me">P Chhikara</span>, R Tekchandani, N Kumar, and B Alzahrani</div>
  <div class="pub-badges">
    <a class="badge badge-if" href="https://www.sciencedirect.com/science/article/pii/S0167739X21001692" target="_blank" rel="noopener noreferrer">Impact Factor: 6.2</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://ieeexplore.ieee.org/abstract/document/9207753" target="_blank" rel="noopener noreferrer">DCNN-GA: A Deep Neural Net Architecture for Navigation of UAV in Indoor Environment</a>
  </div>
  <div class="pub-entry-venue">IEEE Internet of Things Journal · 2020</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, R Tekchandani, N Kumar, V Chamola, and M Guizani</div>
  <div class="pub-badges">
    <a class="badge badge-if" href="https://ieeexplore.ieee.org/abstract/document/9207753" target="_blank" rel="noopener noreferrer">Impact Factor: 8.2</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://ieeexplore.ieee.org/abstract/document/9253631" target="_blank" rel="noopener noreferrer">Federated Learning meets Human Emotions: a Decentralized Framework for Human-Computer Interaction for IoT Applications</a>
  </div>
  <div class="pub-entry-venue">IEEE Internet of Things Journal · 2020</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, P Singh, R Tekchandani, N Kumar, and M Guizani</div>
  <div class="pub-badges">
    <a class="badge badge-if" href="https://ieeexplore.ieee.org/abstract/document/9253631" target="_blank" rel="noopener noreferrer">Impact Factor: 8.2</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://ieeexplore.ieee.org/abstract/document/9253547" target="_blank" rel="noopener noreferrer">An Efficient Container Management Scheme for Resource Constrained Intelligent IoT Devices</a>
  </div>
  <div class="pub-entry-venue">IEEE Internet of Things Journal · 2020</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, R Tekchandani, N Kumar, and MS Obaidat</div>
  <div class="pub-badges">
    <a class="badge badge-if" href="https://ieeexplore.ieee.org/abstract/document/9253547" target="_blank" rel="noopener noreferrer">Impact Factor: 8.2</a>
  </div>
</div>

<span class="pub-rank">Quartile 2 (Q2)</span>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://link.springer.com/article/10.1007/s00607-022-01146-6" target="_blank" rel="noopener noreferrer">Adaptive federated learning scheme for recognition of malicious attacks in an IoT network</a>
  </div>
  <div class="pub-entry-venue">Computing · 2023</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, R Tekchandani, and N Kumar</div>
  <div class="pub-badges">
    <a class="badge badge-if" href="https://link.springer.com/article/10.1007/s00607-022-01146-6" target="_blank" rel="noopener noreferrer">Impact Factor: 3.3</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://link.springer.com/article/10.1007/s00530-021-00833-2" target="_blank" rel="noopener noreferrer">A CNN-based scheme for COVID-19 detection with emergency services provisions using an optimal path planning</a>
  </div>
  <div class="pub-entry-venue">Multimedia Systems · 2021</div>
  <div class="pub-entry-authors">A Barnawi, <span class="me">P Chhikara</span>, R Tekchandani, N Kumar, and M Boulares</div>
  <div class="pub-badges">
    <a class="badge badge-if" href="https://link.springer.com/article/10.1007/s00530-021-00833-2" target="_blank" rel="noopener noreferrer">Impact Factor: 3.5</a>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/spe.2876" target="_blank" rel="noopener noreferrer">Data dimensionality reduction techniques for Industry 4.0: Research results, challenges, and future research directions</a>
  </div>
  <div class="pub-entry-venue">Software: Practice and Experience · 2020</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, N Jain, R Tekchandani, and N Kumar</div>
  <div class="pub-badges">
    <a class="badge badge-if" href="https://onlinelibrary.wiley.com/doi/abs/10.1002/spe.2876" target="_blank" rel="noopener noreferrer">Impact Factor: 2.6</a>
  </div>
</div>

<span class="pub-rank">Quartile 3 (Q3)</span>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://journals.tubitak.gov.tr/elektrik/vol29/iss8/6/" target="_blank" rel="noopener noreferrer">A Deep Transfer Learning based model for Automatic Detection of COVID-19 from Chest X-Rays</a>
  </div>
  <div class="pub-entry-venue">Turkish Journal of Electrical Engineering and Computer Sciences · 2021</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, P Gupta, P Singh, and T Bhatia</div>
  <div class="pub-badges">
    <a class="badge badge-if" href="https://journals.tubitak.gov.tr/elektrik/vol29/iss8/6/" target="_blank" rel="noopener noreferrer">Impact Factor: 1.2</a>
  </div>
</div>

<div class="section-heading"><span>Book Chapter</span></div>

<div class="pub-entry">
  <div class="pub-entry-title">
    <a href="https://link.springer.com/chapter/10.1007/978-981-15-0339-9_13" target="_blank" rel="noopener noreferrer">Deep convolutional neural network with transfer learning for detecting pneumonia on chest X-rays</a>
  </div>
  <div class="pub-entry-venue">Advances in Bioinformatics, Multimedia, and Electronics Circuits and Signals · 2019</div>
  <div class="pub-entry-authors"><span class="me">P Chhikara</span>, P Singh, P Gupta, and T Bhatia</div>
  <div class="pub-badges">
    <a class="badge badge-resource" href="https://link.springer.com/chapter/10.1007/978-981-15-0339-9_13" target="_blank" rel="noopener noreferrer">Published Version</a>
  </div>
</div>

</div>
