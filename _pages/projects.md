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
.projects-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 15px;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
}

.projects-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #e74c3c, #f39c12, #f1c40f);
  border-radius: 20px 20px 0 0;
}

.projects-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.projects-row {
  transition: all 0.3s ease-in-out;
  border-radius: 12px;
  margin-bottom: 0;
}

.projects-image {
  width: 200px;
  min-width: 200px;
  height: 200px;
  object-fit: cover;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  flex-shrink: 0;
}

.projects-content {
  flex: 1;
  padding: 0;
  vertical-align: top;
  border: none;
  display: flex;
  flex-direction: column;
}

.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  gap: 10px;
}

.projects-title {
  font-weight: bold;
  font-size: 1.05em;
  flex: 1;
}

.projects-title a {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s ease;
}

.projects-title a:hover {
  color: #1f5f8b;
  text-decoration: none;
}

.projects-description {
  margin: 10px 0;
  color: #555;
  line-height: 1.6;
  font-size: 0.85em;
}

.projects-description li {
  margin-bottom: 6px;
}

.projects-links {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-shrink: 0;
}

.github-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0;
  background: none;
  box-shadow: none;
  border-radius: 0;
}

.github-link:hover {
  transform: none;
  box-shadow: none;
}

.github-link img {
  height: auto;
  width: auto;
  max-height: 32px;
  max-width: 32px;
  margin: 0;
}

.achievement {
  color: #e74c3c;
  font-weight: 600;
}

</style>

<div class="projects-container">

<table style="width: 100%; border-collapse: collapse; border: none; box-sizing: border-box;">
  
  <tr class="projects-row">
    <td style="padding: 0; vertical-align: top; border: none; width: 100%; box-sizing: border-box;">
      <div class="projects-card">
        <img src="../images/sifra.png" alt="SIFRA: Super Intelligent & Friendly Responsive Agent" class="projects-image">
        <div class="projects-content">
          <div class="projects-header">
            <div class="projects-title">
              SIFRA: Super Intelligent & Friendly Responsive Agent
            </div>
            <div class="projects-links">
              <a href="https://github.com/prateekchhikara/sifra" target="_blank" class="github-link" title="GitHub Repository">
                <img src="https://github.com/favicon.ico" alt="GitHub" />
              </a>
            </div>
          </div>
          <ul class="projects-description">
            <li>Implemented an AI agent using LangChain and RAG to seamlessly process and personalize user interactions from unstructured data.</li>
            <li>Applied generative AI methods to deliver highly adaptive, contextual, and tailored user experiences, significantly boosting engagement.</li>
          </ul>
        </div>
      </div>
    </td>
  </tr>

  <tr class="projects-row">
    <td style="padding: 0; vertical-align: top; border: none; width: 100%; box-sizing: border-box;">
      <div class="projects-card">
        <img src="../images/aisr.jpeg" alt="AISR: AI Sports Recap" class="projects-image">
        <div class="projects-content">
          <div class="projects-header">
            <div class="projects-title">
              AISR: AI Sports Recap
            </div>
            <div class="projects-links">
              <a href="https://github.com/prateekchhikara/sports-highlights/" target="_blank" class="github-link" title="GitHub Repository">
                <img src="https://github.com/favicon.ico" alt="GitHub" />
              </a>
            </div>
          </div>
          <ul class="projects-description">
            <li>Developed an AI-powered tool that generates concise summaries and engaging highlight reels from sports press conference videos, enhancing fan and media experience.</li>
            <li>Integrated advanced NLP and video analysis models, including GPT-4 and Pegasus1 (from Twelve Labs), to automate post-game recaps, interview snippets, and social media content creation.</li>
            <li><span class="achievement">🏆 Secured second place at "Twelve Labs: Multimodal AI Media & Entertainment" Hackathon</span></li>
          </ul>
        </div>
      </div>
    </td>
  </tr>

  <tr class="projects-row">
    <td style="padding: 0; vertical-align: top; border: none; width: 100%; box-sizing: border-box;">
      <div class="projects-card">
        <img src="../images/mario.png" alt="Super Mario Brothers Gameplay using Reinforcement Learning" class="projects-image">
        <div class="projects-content">
          <div class="projects-header">
            <div class="projects-title">
              Super Mario Brothers Gameplay using Reinforcement Learning
            </div>
            <div class="projects-links">
              <a href="https://github.com/prateekchhikara/supermario" target="_blank" class="github-link" title="GitHub Repository">
                <img src="https://github.com/favicon.ico" alt="GitHub" />
              </a>
            </div>
          </div>
          <ul class="projects-description">
            <li>Utilized the Proximal Policy Optimization (PPO) algorithm to enhance gameplay strategies in "Super Mario Bros," leveraging the OpenAI Gym environment for robust and dynamic interaction.</li>
            <li>Employed frame extraction and grayscale conversion, integrating a history of the previous four frames with the current one for improved performance and analysis, with the agent designed to run for an extensive one million iterations.</li>
          </ul>
        </div>
      </div>
    </td>
  </tr>

  <tr class="projects-row">
    <td style="padding: 0; vertical-align: top; border: none; width: 100%; box-sizing: border-box;">
      <div class="projects-card">
        <img src="../images/hmm.png" alt="Hidden Markov Model for Part of Speech Tagging" class="projects-image">
        <div class="projects-content">
          <div class="projects-header">
            <div class="projects-title">
              Hidden Markov Model for Part of Speech Tagging
            </div>
            <div class="projects-links">
              <a href="https://github.com/prateekchhikara/POSTagging_HMM" target="_blank" class="github-link" title="GitHub Repository">
                <img src="https://github.com/favicon.ico" alt="GitHub" />
              </a>
            </div>
          </div>
          <ul class="projects-description">
            <li>Implemented a Hidden Markov Model to perform Part of Speech (POS) tagging, leveraging the robustness of the Viterbi algorithm and greedy decoding for efficient and accurate analysis.</li>
            <li>Employed statistical methods to calculate transition and emission probabilities, ensuring a high level of precision in identifying the grammatical parts of speech in text data.</li>
          </ul>
        </div>
      </div>
    </td>
  </tr>

  <tr class="projects-row">
    <td style="padding: 0; vertical-align: top; border: none; width: 100%; box-sizing: border-box;">
      <div class="projects-card">
        <img src="../images/vae.png" alt="Variational Autoencoders for Digit Generation" class="projects-image">
        <div class="projects-content">
          <div class="projects-header">
            <div class="projects-title">
              Variational Autoencoders for Digit Generation
            </div>
            <div class="projects-links">
              <a href="https://github.com/prateekchhikara/deep-learning-assignment2" target="_blank" class="github-link" title="GitHub Repository">
                <img src="https://github.com/favicon.ico" alt="GitHub" />
              </a>
            </div>
          </div>
          <ul class="projects-description">
            <li>Developed a comprehensive project on "Variational Autoencoders for Digit Generation," focusing on the implementation and analysis of Variational Auto-Encoders (VAEs) in machine learning. VAEs are renowned for their likelihood maximization and unsupervised representation learning capabilities.</li>
            <li>Executed key tasks including setting up a PyTorch data loading pipeline, constructing an auto-encoder architecture, extending it to a VAE, tuning parameters, analyzing representations, and enhancing generative capabilities using the MNIST dataset of handwritten digits.</li>
          </ul>
        </div>
      </div>
    </td>
  </tr>

  <tr class="projects-row">
    <td style="padding: 0; vertical-align: top; border: none; width: 100%; box-sizing: border-box;">
      <div class="projects-card">
        <img src="../images/gan.png" alt="Generative Adversarial Networks for Image Generation" class="projects-image">
        <div class="projects-content">
          <div class="projects-header">
            <div class="projects-title">
              Generative Adversarial Networks for Image Generation
            </div>
            <div class="projects-links">
              <a href="https://github.com/prateekchhikara/deep-learning-assignment2" target="_blank" class="github-link" title="GitHub Repository">
                <img src="https://github.com/favicon.ico" alt="GitHub" />
              </a>
            </div>
          </div>
          <ul class="projects-description">
            <li>Implemented a Generative Adversarial Network (GAN) based on "Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks", utilizing the CIFAR-10 dataset for training, and developed both discriminator and generator components.</li>
            <li>Conducted a comprehensive training process with a robust loop, loss computation, and parameter updates, accompanied by activation maximization technique for visualization.</li>
            <li>Combined practical coding of advanced neural network architectures with theoretical analysis, resulting in a deepened understanding of GANs, all documented in the repository for reference.</li>
          </ul>
        </div>
      </div>
    </td>
  </tr>

  <tr class="projects-row">
    <td style="padding: 0; vertical-align: top; border: none; width: 100%; box-sizing: border-box;">
      <div class="projects-card">
        <img src="../images/white_balance.png" alt="Image White Balance Correction using Variational Autoencoders" class="projects-image">
        <div class="projects-content">
          <div class="projects-header">
            <div class="projects-title">
              Image White Balance Correction using Variational Autoencoders
            </div>
            <div class="projects-links">
              <a href="https://github.com/prateekchhikara/white_balance_correction" target="_blank" class="github-link" title="GitHub Repository">
                <img src="https://github.com/favicon.ico" alt="GitHub" />
              </a>
            </div>
          </div>
          <ul class="projects-description">
            <li>Implemented a Variational Autoencoder Model for white balance correction in images, focusing on neutralizing color casts caused by different lighting conditions to achieve natural and accurate colors.</li>
            <li>Utilized the Adobe White-Balanced Images Dataset, which includes 2,881 rendered images from various camera models, including mobile phones and a DSLR camera, for testing and experiments.</li>
            <li>Developed an encoder with convolutional layers and ReLU activation, a reparameterization technique for sampling from the latent space, and a decoder with linear and transposed convolutional layers, complemented by a loss function combining reconstruction loss and Kullback-Leibler (KL) Divergence loss.</li>
          </ul>
        </div>
      </div>
    </td>
  </tr>

  <tr class="projects-row">
    <td style="padding: 0; vertical-align: top; border: none; width: 100%; box-sizing: border-box;">
      <div class="projects-card">
        <img src="../images/ner.png" alt="Bidirectional LSTM for Named Entity Recognition" class="projects-image">
        <div class="projects-content">
          <div class="projects-header">
            <div class="projects-title">
              Bidirectional LSTM for Named Entity Recognition
            </div>
            <div class="projects-links">
              <a href="https://github.com/prateekchhikara/NER_biLSTM" target="_blank" class="github-link" title="GitHub Repository">
                <img src="https://github.com/favicon.ico" alt="GitHub" />
              </a>
            </div>
          </div>
          <ul class="projects-description">
            <li>Implemented a Bidirectional LSTM (BLSTM) for Named Entity Recognition (NER) using GloVe word embeddings. Initialized neural network embeddings with GloVe vectors, addressing the case-insensitivity of GloVe by adding a boolean mask for case-sensitive NER recognition.</li>
            <li>Developed model architecture with components like Embedding, LSTM, Linear, Dropout, and ELU layers, and trained using hyperparameters such as a batch size of 64, SGD optimizer, and a learning rate of 0.5 over 50 epochs, achieving an accuracy of 98.43%.</li>
          </ul>
        </div>
      </div>
    </td>
  </tr>

</table>

</div>

<style>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px;
}

/* Responsive design */
@media (max-width: 1024px) {
  .projects-image {
    width: 160px;
    min-width: 160px;
    height: 160px;
  }
}

@media (max-width: 768px) {
  .projects-card {
    flex-direction: column;
    text-align: center;
    padding: 12px;
  }
  
  .projects-image {
    width: 100% !important;
    min-width: unset !important;
    height: 250px;
    object-fit: cover;
  }
  
  .projects-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .projects-card {
    padding: 12px;
    flex-direction: column;
  }
  
  .projects-image {
    width: 100% !important;
    min-width: unset !important;
    height: 180px;
  }
  
  .projects-title {
    font-size: 1rem;
  }
  
  .projects-description {
    font-size: 0.85rem;
  }
}
</style>


