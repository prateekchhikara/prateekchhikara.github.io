---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---


<!-- <center>  <h1> <u> Pre-prints </u> </h1> </center> -->


<!-- <hr />
<br> -->

## Selected Publications

<table style="width: 100%; border-collapse: collapse; border: none;">

  <tr>
    <td style="padding: 8px; vertical-align: top; border: none;">
      <img src="../images/mllm_knows.png" alt="Paper 1 Image" style="width: 350px; height: auto; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);">
    </td>
    <td style="width: 650px; padding: 8px; vertical-align: top; border: none;">
      <div style="font-weight: bold;">
        <a href="https://openreview.net/forum?id=DgaY5mDdmT" target="_blank" rel="noopener noreferrer">
          MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs
        </a>
      </div>
      <div style="font-style: italic;">International Conference on Learning Representations (ICLR) -- 2025</div>
      This work investigates Multimodal Large Language Models' (MLLMs) ability to perceive small versus large visual details in question answering tasks. The study shows that MLLMs' accuracy is sensitive to subject size and can be improved using visual cropping methods. These findings suggest caution and potential improvements for detail-sensitive applications. 
    </td>
  </tr>


  <tr>
    <td style="padding: 8px; vertical-align: top; border: none;">
      <img src="../images/wacv.png" alt="Paper 1 Image" style="width: 350px; height: auto; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);">
    </td>
    <td style="width: 650px; padding: 8px; vertical-align: top; border: none;">
      <div style="font-weight: bold;">
        <a href="https://openaccess.thecvf.com/content/WACV2024/html/Chhikara_FIRE_Food_Image_to_REcipe_Generation_WACV_2024_paper.html" target="_blank" rel="noopener noreferrer">
          FIRE: Food Image to REcipe generation
        </a>
      </div>
      <div style="font-style: italic;">IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) -- 2024</div>
      This paper introduces FIRE, a novel multimodal methodology for generating recipes from food images, contributing to the growing field of food computing. FIRE effectively produces food titles, ingredients, and cooking instructions using the BLIP model, a Vision Transformer with a decoder, and the T5 model. The paper also explores practical applications like recipe customization and recipe-to-code generation for automated cooking. 
    </td>
  </tr>

  <tr>
    <td style="padding: 8px; vertical-align: top; border: none;">
      <img src="../images/kcap.png" alt="Paper 1 Image" style="width: 350px; height: auto; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);">
    </td>
    <td style="width: 650px; padding: 8px; vertical-align: top; border: none;">
        <div style="font-weight: bold;">
            <a href="https://dl.acm.org/doi/10.1145/3587259.3627561" target="_blank" rel="noopener noreferrer">
              Knowledge-enhanced Agents for Interactive Text Games
            </a>
        </div>
        <div style="display: flex; align-items: center;">
            <div style="font-style: italic; margin-right: 10px;">
                International Conference on Knowledge Capture (KCap) -- 2023
            </div>
            <span style="color: red;">🏆🏆 Best Student Paper Award 🏆🏆 </span>
        </div>

      This paper introduces a knowledge-injection framework to enhance the functional grounding of agents in text-based games, addressing existing limitations in coherence, contextual awareness, and learning. It incorporates domain knowledge through memory of past actions and object affordances, aiding two types of agents: reinforcement learning and language model agents. The framework employs strategies like knowledge graphs and input encoding augmentations. Tested on 10 tasks in the ScienceWorld environment, the study reveals how task properties, model architectures, and domain knowledge interact in interactive contexts.
    </td>
  </tr>

  <tr>
    <td style="padding: 8px; vertical-align: top; border: none;">
      <img src="../images/acl_bionlp.png" alt="Paper 1 Image" style="width: 350px; height: auto; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);">
    </td>
    <td style="width: 650px; padding: 8px; vertical-align: top; border: none;">
      <div style="font-weight: bold;">
        <a href="https://aclanthology.org/2023.bionlp-1.18/" target="_blank" rel="noopener noreferrer">
          Privacy Aware Question-Answering System for Online Mental Health Risk Assessment
        </a>
      </div>
      <div style="font-style: italic;">ACL Workshop on Biomedical Natural Language Processing (BioNLP) -- 2023</div>
      This paper explores using pre-trained Language Models (LMs) for assessing mental health risk from social media data. A Question-Answering (QA) approach, utilizing the Unified-QA model, is proposed for analyzing two large mental health datasets. To ensure user privacy, the model is trained with differential privacy techniques. The results show that treating risk assessment as a QA task is effective for mental health scenarios, with minimal performance loss (less than 1%) due to privacy safeguards. This approach signifies a promising direction for creating privacy-conscious diagnostic systems in mental health.
    </td>
  </tr>

  <tr>
    <td style="padding: 8px; vertical-align: top; border: none;">
      <img src="../images/nips_romo.png" alt="Paper 1 Image" style="width: 350px; height: auto; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);">
    </td>
    <td style="width: 650px; padding: 8px; vertical-align: top; border: none;">
      <div style="font-weight: bold;">
          <a href="https://openreview.net/forum?id=YrYcoV2dAk" target="_blank" rel="noopener noreferrer">
            Visual Cropping Improves Zero-Shot Question Answering of Multimodal Large Language Models
          </a>
      </div>
      <div style="font-style: italic;">NeurIPS Workshop on Robustness of Few-shot and Zero-shot Learning in Foundation Models -- 2023</div>
      This paper examines the limitations of Multimodal Large Language Models (LLMs) in visual question answering (VQA), particularly their sensitivity to the size of visual details in images. The study finds that the zero-shot accuracy of these models decreases by up to 46% with smaller visual subjects. Human visual cropping is shown to mitigate this issue, indicating a causal relationship. The paper proposes three automatic visual cropping methods to enhance zero-shot performance in multimodal LLMs. These methods are evaluated on four VQA datasets and a VQAv2 subset focused on fine details. The results highlight the need for caution in using multimodal LLMs for detail-sensitive VQA tasks and suggest visual cropping as a viable solution for improving performance.
    </td>
  </tr>


  <tr>
    <td style="padding: 8px; vertical-align: top; border: none;">
      <img src="../images/cods.png" alt="Paper 1 Image" style="width: 350px; height: auto; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);">
    </td>
    <td style="width: 650px; padding: 8px; vertical-align: top; border: none;">
      <div style="font-weight: bold;">
        <a href="https://dl.acm.org/doi/10.1145/3570991.3571060" target="_blank" rel="noopener noreferrer">
          DIGITOUR: Automatic Digital Tours for Real-Estate Properties
        </a>
      </div>
      <div style="font-style: italic;">International Conference on Data Science & Management of Data (CODS-COMAD) -- 2023</div>
      This paper presents an automated pipeline for creating 3D virtual tours in real estate, addressing the time and cost challenges of manual annotation in traditional methods. It introduces a novel HSV-based coloring scheme for paper tags, placed in locations before capturing 360° equirectangular images. These tags are uniquely numbered and bi-colored, enhancing tag detection and digit recognition using YOLOv5 and a custom MobileNet architecture, respectively. The method links equirectangular images based on these detected tags, demonstrating its efficiency with a real-world dataset from Housing.com.
    </td>
  </tr>

  <tr>
    <td style="padding: 8px; vertical-align: top; border: none;">
      <img src="../images/ecml.png" alt="Paper 1 Image" style="width: 350px; height: auto; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);">
    </td>
    <td style="width: 650px; padding: 8px; vertical-align: top; border: none;">
      <div style="font-weight: bold;">
          <a href="https://link.springer.com/chapter/10.1007/978-3-031-26422-1_44" target="_blank" rel="noopener noreferrer">
            RE-Tagger: A light-weight Real-Estate Image Classifier
          </a>
      </div>
      <div style="font-style: italic;">European Conference on Machine Learning (ECML) -- 2022</div>
      Real-estate image tagging is one of the essential use-cases to save efforts involved in manual annotation and enhance the user experience. This paper proposes an end-to-end pipeline (referred to as RE-Tagger) for the real-estate image classification problem. We present a two-stage transfer learning approach using custom InceptionV3 architecture to classify images into different categories (i.e., bedroom, bathroom, kitchen, balcony, hall, and others). 
    </td>
  </tr>

  <!-- Repeat the pattern for more papers -->
</table>




<hr />

## All Publications


You can find all my publications at [Google Scholar](https://scholar.google.com/citations?user=RQTJ_aIAAAAJ&hl) or [ResearchGate](https://www.researchgate.net/profile/Prateek-Chhikara).

<center>  <h1> <u> Conferences / Workshops</u> </h1> </center>

## CORE A*

* J Zhang, M Khayatkhoei, **P Chhikara**, and F Ilievski. *'MLLMs Know Where to Look: Training-free Perception of Small Visual Details with Multimodal LLMs'*, 2025. **International Conference on Learning Representations (ICLR)**\
[[Accepted Version](https://openreview.net/forum?id=DgaY5mDdmT)]
[![Static Badge](https://img.shields.io/badge/-Main Conference Paper-purple)]()


* J Zhang, M Khayatkhoei, **P Chhikara**, and F Ilievski. *'Visual Cropping Improves Zero-Shot Question Answering of Multimodal Large Language Models'*, 2023. **NeurIPS Workshop on Robustness of Few-shot and Zero-shot Learning in Foundation Models**\
[[Published Version](https://openreview.net/forum?id=YrYcoV2dAk)][[Poster](https://drive.google.com/file/d/1CXwK4IQqOrEWjD_huOiOnrhzoN3sphZD/view?usp=sharing)]
[![Static Badge](https://img.shields.io/badge/-Workshop Paper-blue)]()

* **P Chhikara**, U Pasupulety, J Marshall, D Chaurasia, and S Kumari. *'Privacy Aware Question-Answering System for Online Mental Health Risk Assessment'*, 2023. **ACL Proceedings of the 22nd Workshop on Biomedical Language Processing**. \
[[Published Version](https://aclanthology.org/2023.bionlp-1.18/)][[Presentation](https://drive.google.com/file/d/1tubM-8KApksVXA4pNzFCMR1VlvN7fB-2/view?usp=sharing)][[Poster](https://drive.google.com/file/d/1f-G1bvK2EvSkPW2cJfVacUQ3gJk64MQx/view?usp=sharing)]
[![Static Badge](https://img.shields.io/badge/-Workshop Paper-blue)]()

* **P Chhikara**, R Tekchandani, N Kumar, and S Tanwar. *'Federated Learning-based Aerial Image Segmentation for collision-free Movement and Landing'*, 2021. **Proceedings of the 4th ACM MobiCom Workshops**. \
[[Published Version](https://dl.acm.org/doi/abs/10.1145/3477090.3481051)]
[![Static Badge](https://img.shields.io/badge/-Workshop Paper-blue)]()

## CORE A
* **P Chhikara**, D Chaurasia, Y Jiang, O Masur, and F Ilievski. *'FIRE: Food Image to REcipe generation'*, 2024. **IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)**.\
[[Published Version](https://openaccess.thecvf.com/content/WACV2024/html/Chhikara_FIRE_Food_Image_to_REcipe_Generation_WACV_2024_paper.html)][[Poster](https://drive.google.com/file/d/1zf2NA6ga8PWndZAgu5QjSwO8EPsvt-yt/view?usp=sharing)][[Presentation](https://docs.google.com/presentation/d/1bRYwpjBn6cgybcvtev1BNlqLS3iAbwr_8EA5vZ2wRHc/edit?usp=sharing)]
[![Static Badge](https://img.shields.io/badge/-Main Conference Paper-purple)]()

* **P Chhikara**, A Goyal, and C Sharma. *'RE-Tagger: A light-weight Real-Estate Image Classifier'*, 2022. **European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML-PKDD)**. \
[[Published Version](https://link.springer.com/chapter/10.1007/978-3-031-26422-1_44)][[Video](https://www.youtube.com/watch?v=eVWkU7yb-3M)]
[![Static Badge](https://img.shields.io/badge/-Main Conference Paper (Demo Track)-purple)]()

## CORE B
* **P Chhikara**, J Zhang, F Ilievski, J Francis, and K Ma. *'Knowledge-enhanced Agents for Interactive Text Games'*, 2023. **International Conference on Knowledge Capture (KCap)**.   <span style="color: red;">🏆🏆 Best Student Paper Award 🏆🏆</span>\
[[Published Version](https://dl.acm.org/doi/10.1145/3587259.3627561)][[Presentation](https://docs.google.com/presentation/d/1G8KG8qNLnWITcdfIONhAQDGnd2uqaO_djqGh7hwIXmo/edit?usp=sharing)]
[![Static Badge](https://img.shields.io/badge/-Main Conference Paper-purple)]()

* **P Chhikara**, H Kuhar, A Goyal, and C Sharma. *'DIGITOUR: Automatic Digital Tours for Real-Estate Properties'*, 2023. **ACM CODS-COMAD**. \
[[Published Version](https://dl.acm.org/doi/10.1145/3570991.3571060)]
[![Static Badge](https://img.shields.io/badge/-Main Conference Paper-purple)]()

* **P Chhikara**, R Tekchandani, N Kumar, S Tanwar, and JJPC Rodrigues. *'Federated Learning for Air Quality Index Prediction using UAV Swarm Networks'*, 2021. **IEEE Global Communications Conference (GLOBECOM)**. \
[[Published Version](https://ieeexplore.ieee.org/abstract/document/9685991)]
[![Static Badge](https://img.shields.io/badge/-Main Conference Paper-purple)]()

* S Arora, S Goel, **P Chhikara**, H Singh, N Kumar, and PS Rana. *'An efficient scheme for wireless charging of electric vehicles using RFID with an optimal path planning'*, 2019. **IEEE Globecom Workshops (GC Wkshps)**. \
[[Published Version](https://ieeexplore.ieee.org/abstract/document/9024537)]
[![Static Badge](https://img.shields.io/badge/-Workshop Paper-blue)]()

## Unranked
* P Singh, **P Chhikara**, and J Singh. *'An ensemble approach for extractive text summarization'*, 2020. **International Conference on Emerging Trends in Information Technology and Engineering**. \
[[Published Version](https://ieeexplore.ieee.org/abstract/document/9077805)]
[![Static Badge](https://img.shields.io/badge/-Main Conference Paper-purple)]()

<hr />
<br>



<center>  <h1> <u> Journals </u> </h1> </center>

## Quartile 1 (Q1) 

* A Barnawi, **P Chhikara**, R Tekchandani, N Kumar, and B Alzahrani. *'A Differentially Privacy Assisted Federated Learning Scheme to Preserve Data Privacy for IoMT Applications'*, 2024. **IEEE Transactions on Network and Service Management**.\
[[Impact Factor: 4.7](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=4275028)] [[Published Version](https://ieeexplore.ieee.org/abstract/document/10509607)]

* D Chaurasia and **P Chhikara**. *'Sea-Pix-GAN: Underwater image enhancement using adversarial neural network'*, 2024. **Journal of Visual Communication and Image Representation**. \
[[Impact Factor: 2.6](https://www.sciencedirect.com/journal/journal-of-visual-communication-and-image-representation)] [[Published Version](https://www.sciencedirect.com/science/article/pii/S1047320323002717)]

* **P Chhikara**, R Tekchandani, N Kumar, M Guizani, and MM Hassan. *'Federated learning and autonomous UAVs for hazardous zone detection and AQI prediction in IoT environment'*, 2021. **IEEE Internet of Things Journal**. \
[[Impact Factor: 8.2](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6488907)] [[Published Version](https://ieeexplore.ieee.org/abstract/document/9409140)]

* A Barnawi, **P Chhikara**, R Tekchandani, N Kumar, and B Alzahrani. *'Artificial intelligence-enabled Internet of Things-based system for COVID-19 screening using aerial thermal imaging'*, 2021. **Future Generation Computer Systems**.\
[[Impact Factor: 6.2](https://www.sciencedirect.com/journal/future-generation-computer-systems)] [[Published Version](https://www.sciencedirect.com/science/article/pii/S0167739X21001692)]

* **P Chhikara**, R Tekchandani, N Kumar, V Chamola, and M Guizani. *'DCNN-GA: A Deep Neural Net Architecture for Navigation of UAV in Indoor Environment'*, 2020. **IEEE Internet of Things Journal**. \
[[Impact Factor: 8.2](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6488907)] [[Published Version](https://ieeexplore.ieee.org/abstract/document/9207753)]

* **P Chhikara**, P Singh, R Tekchandani, N Kumar, and M Guizani. *'Federated Learning meets Human Emotions: a Decentralized Framework for Human-Computer Interaction for IoT Applications'*, 2020. **IEEE Internet of Things Journal**. \
[[Impact Factor: 8.2](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6488907)] [[Published Version](https://ieeexplore.ieee.org/abstract/document/9253631)]

* **P Chhikara**, R Tekchandani, N Kumar, and MS Obaidat. *'An Efficient Container Management Scheme for Resource Constrained Intelligent IoT Devices'*, 2020. **IEEE Internet of Things Journal**. \
[[Impact Factor: 8.2](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6488907)] [[Published Version](https://ieeexplore.ieee.org/abstract/document/9253547)]

## Quartile 2 (Q2)

* **P Chhikara**, R Tekchandani, and N Kumar. *'Adaptive federated learning scheme for recognition of malicious attacks in an IoT network'*, 2023. **Computing**. \
[[Impact Factor: 3.3](https://www.springer.com/journal/607)] [[Published Version](https://link.springer.com/article/10.1007/s00607-022-01146-6)]

* A Barnawi, **P Chhikara**, R Tekchandani, N Kumar, and M Boulares. *'A CNN-based scheme for COVID-19 detection with emergency services provisions using an optimal path planning'*, 2021. **Multimedia Systems**. \
[[Impact Factor: 3.5](https://www.springer.com/journal/530)] [[Published Version](https://link.springer.com/article/10.1007/s00530-021-00833-2)]

* **P Chhikara**, N Jain, R Tekchandani, and N Kumar. *'Data dimensionality reduction techniques for Industry 4.0: Research results, challenges, and future research directions'*, 2020. **Software: Practice and Experience**. \
[[Impact Factor: 2.6](https://onlinelibrary.wiley.com/journal/1097024x)] [[Published Version](https://onlinelibrary.wiley.com/doi/abs/10.1002/spe.2876)]

## Quartile 3 (Q3)

* **P Chhikara**, P Gupta, P Singh, and T Bhatia. *'A Deep Transfer Learning based model for Automatic Detection of COVID-19 from Chest X-Rays'*, 2021. **Turkish Journal of Electrical Engineering and Computer Sciences**. \
[[Impact Factor: 1.2](https://journals.tubitak.gov.tr/elektrik/)] [[Published Version](https://journals.tubitak.gov.tr/elektrik/vol29/iss8/6/)]
<hr />
<br>


<center>  <h1> <u> Book Chapter </u> </h1> </center>

* **P Chhikara**, P Singh, P Gupta, and T Bhatia. *'Deep convolutional neural network with transfer learning for detecting pneumonia on chest X-rays
'*, 2019. **Advances in Bioinformatics, Multimedia, and Electronics Circuits and Signals**. \
[[Published Version](https://link.springer.com/chapter/10.1007/978-981-15-0339-9_13)]