---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

<div class="projects-intro">
  <p>A collection of projects that showcase my work in AI, machine learning, and software engineering.</p>
</div>

<style>
.projects-intro {
  max-width: 1200px;
  margin: 0 auto 18px;
  padding: 0 8px;
  color: #566573;
  font-size: 0.95em;
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.projects-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 20px;
  align-items: stretch;
}

/* Top accent bar */
.projects-card::before {
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

.projects-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.13);
}

.projects-image-wrap {
  width: 210px;
  min-width: 210px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
  align-self: stretch;
}

.projects-image {
  width: 100%;
  height: 100%;
  min-height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.projects-card:hover .projects-image {
  transform: scale(1.06);
}

.projects-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid #eef0f2;
}

.projects-title {
  font-weight: 700;
  font-size: 1.18em;
  line-height: 1.25;
  color: #1a2533;
  flex: 1;
}

.projects-links {
  flex-shrink: 0;
}

.code-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  text-decoration: none;
  padding: 6px 13px;
  background: #1a2533;
  color: #fff;
  border-radius: 20px;
  font-size: 0.78em;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.3s ease;
  white-space: nowrap;
}

.code-link:hover {
  background: #2980b9;
  color: #fff;
  text-decoration: none;
  transform: translateY(-1px);
}

.code-link i {
  font-size: 1.05em;
  line-height: 1;
}

.projects-description {
  list-style: none;
  padding: 0;
  margin: 0 0 12px 0;
}

.projects-description li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 7px;
  color: #2c3e50;
  line-height: 1.45;
  font-size: 0.85em;
}

.projects-description li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #2980b9;
  font-weight: bold;
  font-size: 0.9em;
}

.projects-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: auto;
  padding-top: 4px;
}

.tag {
  display: inline-block;
  padding: 3px 11px;
  background: #eaf2fa;
  color: #2471a3;
  border-radius: 20px;
  font-size: 0.72em;
  font-weight: 600;
  letter-spacing: 0.2px;
  white-space: nowrap;
}

.achievement {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #fdf3e7;
  color: #c0700f;
  padding: 2px 10px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.95em;
}

/* Responsive design */
@media (max-width: 1024px) {
  .projects-image-wrap {
    width: 170px;
    min-width: 170px;
  }
}

@media (max-width: 768px) {
  .projects-card {
    flex-direction: column;
  }

  .projects-image-wrap {
    width: 100%;
    min-width: unset;
  }

  .projects-image {
    height: 220px;
    min-height: unset;
  }
}

@media (max-width: 480px) {
  .projects-header {
    flex-direction: column;
  }

  .projects-title {
    font-size: 1.05em;
  }

  .projects-image {
    height: 180px;
  }
}
</style>

<div class="projects-container">
<div class="projects-grid">

  <div class="projects-card">
    <div class="projects-image-wrap">
      <img src="/images/sifra.png" alt="SIFRA: Super Intelligent & Friendly Responsive Agent" class="projects-image" loading="lazy" decoding="async">
    </div>
    <div class="projects-content">
      <div class="projects-header">
        <div class="projects-title">SIFRA: Super Intelligent &amp; Friendly Responsive Agent</div>
        <div class="projects-links">
          <a href="https://github.com/prateekchhikara/sifra" target="_blank" rel="noopener noreferrer" class="code-link" aria-label="SIFRA GitHub repository">
            <i class="fab fa-github" aria-hidden="true"></i> Code
          </a>
        </div>
      </div>
      <ul class="projects-description">
        <li>Implemented an AI agent using LangChain and RAG to seamlessly process and personalize user interactions from unstructured data.</li>
        <li>Applied generative AI methods to deliver highly adaptive, contextual, and tailored user experiences, significantly boosting engagement.</li>
      </ul>
      <div class="projects-tags">
        <span class="tag">LangChain</span>
        <span class="tag">RAG</span>
        <span class="tag">Generative AI</span>
        <span class="tag">LLM Agents</span>
      </div>
    </div>
  </div>

  <div class="projects-card">
    <div class="projects-image-wrap">
      <img src="/images/aisr.jpeg" alt="AISR: AI Sports Recap" class="projects-image" loading="lazy" decoding="async">
    </div>
    <div class="projects-content">
      <div class="projects-header">
        <div class="projects-title">AISR: AI Sports Recap</div>
        <div class="projects-links">
          <a href="https://github.com/prateekchhikara/sports-highlights/" target="_blank" rel="noopener noreferrer" class="code-link" aria-label="AI Sports Recap GitHub repository">
            <i class="fab fa-github" aria-hidden="true"></i> Code
          </a>
        </div>
      </div>
      <ul class="projects-description">
        <li>Developed an AI-powered tool that generates concise summaries and engaging highlight reels from sports press conference videos, enhancing fan and media experience.</li>
        <li>Integrated advanced NLP and video analysis models, including GPT-4 and Pegasus1 (from Twelve Labs), to automate post-game recaps, interview snippets, and social media content creation.</li>
        <li><span class="achievement">🏆 Secured second place at "Twelve Labs: Multimodal AI Media &amp; Entertainment" Hackathon</span></li>
      </ul>
      <div class="projects-tags">
        <span class="tag">GPT-4</span>
        <span class="tag">Pegasus 1</span>
        <span class="tag">Multimodal AI</span>
        <span class="tag">Video Analysis</span>
        <span class="tag">NLP</span>
      </div>
    </div>
  </div>

  <div class="projects-card">
    <div class="projects-image-wrap">
      <img src="/images/mario.png" alt="Super Mario Brothers Gameplay using Reinforcement Learning" class="projects-image" loading="lazy" decoding="async">
    </div>
    <div class="projects-content">
      <div class="projects-header">
        <div class="projects-title">Super Mario Brothers Gameplay using Reinforcement Learning</div>
        <div class="projects-links">
          <a href="https://github.com/prateekchhikara/supermario" target="_blank" rel="noopener noreferrer" class="code-link" aria-label="Super Mario reinforcement learning GitHub repository">
            <i class="fab fa-github" aria-hidden="true"></i> Code
          </a>
        </div>
      </div>
      <ul class="projects-description">
        <li>Utilized the Proximal Policy Optimization (PPO) algorithm to enhance gameplay strategies in "Super Mario Bros," leveraging the OpenAI Gym environment for robust and dynamic interaction.</li>
        <li>Employed frame extraction and grayscale conversion, integrating a history of the previous four frames with the current one for improved performance and analysis, with the agent designed to run for an extensive one million iterations.</li>
      </ul>
      <div class="projects-tags">
        <span class="tag">Reinforcement Learning</span>
        <span class="tag">PPO</span>
        <span class="tag">OpenAI Gym</span>
        <span class="tag">Python</span>
      </div>
    </div>
  </div>

  <div class="projects-card">
    <div class="projects-image-wrap">
      <img src="/images/hmm.png" alt="Hidden Markov Model for Part of Speech Tagging" class="projects-image" loading="lazy" decoding="async">
    </div>
    <div class="projects-content">
      <div class="projects-header">
        <div class="projects-title">Hidden Markov Model for Part of Speech Tagging</div>
        <div class="projects-links">
          <a href="https://github.com/prateekchhikara/POSTagging_HMM" target="_blank" rel="noopener noreferrer" class="code-link" aria-label="Hidden Markov Model POS tagging GitHub repository">
            <i class="fab fa-github" aria-hidden="true"></i> Code
          </a>
        </div>
      </div>
      <ul class="projects-description">
        <li>Implemented a Hidden Markov Model to perform Part of Speech (POS) tagging, leveraging the robustness of the Viterbi algorithm and greedy decoding for efficient and accurate analysis.</li>
        <li>Employed statistical methods to calculate transition and emission probabilities, ensuring a high level of precision in identifying the grammatical parts of speech in text data.</li>
      </ul>
      <div class="projects-tags">
        <span class="tag">HMM</span>
        <span class="tag">Viterbi</span>
        <span class="tag">NLP</span>
        <span class="tag">Python</span>
      </div>
    </div>
  </div>

  <div class="projects-card">
    <div class="projects-image-wrap">
      <img src="/images/vae.png" alt="Variational Autoencoders for Digit Generation" class="projects-image" loading="lazy" decoding="async">
    </div>
    <div class="projects-content">
      <div class="projects-header">
        <div class="projects-title">Variational Autoencoders for Digit Generation</div>
        <div class="projects-links">
          <a href="https://github.com/prateekchhikara/deep-learning-assignment2" target="_blank" rel="noopener noreferrer" class="code-link" aria-label="Variational autoencoders GitHub repository">
            <i class="fab fa-github" aria-hidden="true"></i> Code
          </a>
        </div>
      </div>
      <ul class="projects-description">
        <li>Developed a comprehensive project on "Variational Autoencoders for Digit Generation," focusing on the implementation and analysis of Variational Auto-Encoders (VAEs) in machine learning. VAEs are renowned for their likelihood maximization and unsupervised representation learning capabilities.</li>
        <li>Executed key tasks including setting up a PyTorch data loading pipeline, constructing an auto-encoder architecture, extending it to a VAE, tuning parameters, analyzing representations, and enhancing generative capabilities using the MNIST dataset of handwritten digits.</li>
      </ul>
      <div class="projects-tags">
        <span class="tag">VAE</span>
        <span class="tag">PyTorch</span>
        <span class="tag">MNIST</span>
        <span class="tag">Deep Learning</span>
      </div>
    </div>
  </div>

  <div class="projects-card">
    <div class="projects-image-wrap">
      <img src="/images/gan.png" alt="Generative Adversarial Networks for Image Generation" class="projects-image" loading="lazy" decoding="async">
    </div>
    <div class="projects-content">
      <div class="projects-header">
        <div class="projects-title">Generative Adversarial Networks for Image Generation</div>
        <div class="projects-links">
          <a href="https://github.com/prateekchhikara/deep-learning-assignment2" target="_blank" rel="noopener noreferrer" class="code-link" aria-label="Generative adversarial networks GitHub repository">
            <i class="fab fa-github" aria-hidden="true"></i> Code
          </a>
        </div>
      </div>
      <ul class="projects-description">
        <li>Implemented a Generative Adversarial Network (GAN) based on "Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks", utilizing the CIFAR-10 dataset for training, and developed both discriminator and generator components.</li>
        <li>Conducted a comprehensive training process with a robust loop, loss computation, and parameter updates, accompanied by activation maximization technique for visualization.</li>
        <li>Combined practical coding of advanced neural network architectures with theoretical analysis, resulting in a deepened understanding of GANs, all documented in the repository for reference.</li>
      </ul>
      <div class="projects-tags">
        <span class="tag">GAN</span>
        <span class="tag">DCGAN</span>
        <span class="tag">CIFAR-10</span>
        <span class="tag">PyTorch</span>
      </div>
    </div>
  </div>

  <div class="projects-card">
    <div class="projects-image-wrap">
      <img src="/images/white_balance.png" alt="Image White Balance Correction using Variational Autoencoders" class="projects-image" loading="lazy" decoding="async">
    </div>
    <div class="projects-content">
      <div class="projects-header">
        <div class="projects-title">Image White Balance Correction using Variational Autoencoders</div>
        <div class="projects-links">
          <a href="https://github.com/prateekchhikara/white_balance_correction" target="_blank" rel="noopener noreferrer" class="code-link" aria-label="White balance correction GitHub repository">
            <i class="fab fa-github" aria-hidden="true"></i> Code
          </a>
        </div>
      </div>
      <ul class="projects-description">
        <li>Implemented a Variational Autoencoder Model for white balance correction in images, focusing on neutralizing color casts caused by different lighting conditions to achieve natural and accurate colors.</li>
        <li>Utilized the Adobe White-Balanced Images Dataset, which includes 2,881 rendered images from various camera models, including mobile phones and a DSLR camera, for testing and experiments.</li>
        <li>Developed an encoder with convolutional layers and ReLU activation, a reparameterization technique for sampling from the latent space, and a decoder with linear and transposed convolutional layers, complemented by a loss function combining reconstruction loss and Kullback-Leibler (KL) Divergence loss.</li>
      </ul>
      <div class="projects-tags">
        <span class="tag">VAE</span>
        <span class="tag">Computer Vision</span>
        <span class="tag">PyTorch</span>
        <span class="tag">Image Processing</span>
      </div>
    </div>
  </div>

  <div class="projects-card">
    <div class="projects-image-wrap">
      <img src="/images/ner.png" alt="Bidirectional LSTM for Named Entity Recognition" class="projects-image" loading="lazy" decoding="async">
    </div>
    <div class="projects-content">
      <div class="projects-header">
        <div class="projects-title">Bidirectional LSTM for Named Entity Recognition</div>
        <div class="projects-links">
          <a href="https://github.com/prateekchhikara/NER_biLSTM" target="_blank" rel="noopener noreferrer" class="code-link" aria-label="Named entity recognition GitHub repository">
            <i class="fab fa-github" aria-hidden="true"></i> Code
          </a>
        </div>
      </div>
      <ul class="projects-description">
        <li>Implemented a Bidirectional LSTM (BLSTM) for Named Entity Recognition (NER) using GloVe word embeddings. Initialized neural network embeddings with GloVe vectors, addressing the case-insensitivity of GloVe by adding a boolean mask for case-sensitive NER recognition.</li>
        <li>Developed model architecture with components like Embedding, LSTM, Linear, Dropout, and ELU layers, and trained using hyperparameters such as a batch size of 64, SGD optimizer, and a learning rate of 0.5 over 50 epochs, achieving an accuracy of 98.43%.</li>
      </ul>
      <div class="projects-tags">
        <span class="tag">BiLSTM</span>
        <span class="tag">GloVe</span>
        <span class="tag">NER</span>
        <span class="tag">PyTorch</span>
        <span class="tag">NLP</span>
      </div>
    </div>
  </div>

</div>
</div>
