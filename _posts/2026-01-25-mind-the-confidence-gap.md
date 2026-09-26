---
title: 'Mind the Confidence Gap: Overconfidence, Calibration, and Distractor Effects
  in Large Language Models'
date: '2026-01-25T18:51:10+00:00'
permalink: "/writing/mind-the-confidence-gap/"
category: technical
tags:
- Calibration
- LLMs
- Research
description: Why language models sound certain when they are wrong, and how structured
  distractors can help.
original_url: https://levelup.gitconnected.com/mind-the-confidence-gap-overconfidence-calibration-and-distractor-effects-in-large-language-5628a9a41096
canonical_url: https://levelup.gitconnected.com/mind-the-confidence-gap-overconfidence-calibration-and-distractor-effects-in-large-language-5628a9a41096
contents:
- id: section-1
  title: What is Calibration in plain English?
  level: 2
- id: section-2
  title: 'The key idea: what if we force the model to “consider the opposite”?'
  level: 2
- id: section-3
  title: Experimental setup (what we evaluated)
  level: 2
- id: section-4
  title: Findings of the Experiments
  level: 2
- id: section-5
  title: 'Finding 1: Overconfidence is widespread, even in strong models'
  level: 3
- id: section-6
  title: 'Finding 2: Distractors massively improve accuracy and often reduce ECE'
  level: 3
- id: section-7
  title: 'Finding 3: Bigger models get better-calibrated probabilities — not just
    better answers'
  level: 3
- id: section-8
  title: 'Finding 4 (the nuance): distractors can hurt calibration on easy questions'
  level: 3
- id: section-9
  title: 'Finding 5: “Person” questions are the most stubborn failure mode'
  level: 3
- id: section-10
  title: Limitations (what we were careful about)
  level: 2
- id: section-11
  title: 'Closing thought: calibration is the missing reliability layer'
  level: 2
---

{% raw %}
<p>Why LLMs Sound Sure Even When They are Wrong and How Distractors Help?</p><p>If you have used a large language model (LLM) for factual questions, you have probably seen this pattern: the model delivers an incorrect answer with the tone and confidence of someone who is absolutely sure they are right.<em> </em>For example, as illustrated in Figure 1, when asked “<em>Who received the IEEE Frank Rosenblatt Award in 2010?</em>”, a leading LLM confidently but incorrectly answers “<em>Geoffrey Hinton</em>” with a confidence of 93%, despite the correct answer being “<em>Michio Sugeno</em>”.</p><figure><img alt="Figure 1: An instance from SimpleQA dataset where an LLM assigns high confidence to an incorrect answer." src="{% endraw %}{{ '/images/writing/media-047.png' | relative_url }}{% raw %}" width="1024" height="781" loading="lazy" decoding="async"><figcaption>Figure 1: An instance from SimpleQA dataset where an LLM assigns high confidence to an incorrect answer.</figcaption></figure><p>That mismatch — <strong>high confidence when correctness is low</strong> — isn’t just annoying. In high-stakes settings (healthcare, finance, legal workflows), it is dangerous because humans tend to trust confident outputs. In my <a href="https://openreview.net/forum?id=lyaHnHDdZl">TMLR paper</a>, I studied this problem through the lens of <strong>calibration</strong>: <em>Does the model’s confidence actually reflect its likelihood of being correct?</em></p><p>This article walks through:</p><ul>
<li>what calibration really means (without heavy math),</li>
<li>what we found across <strong>9 major LLMs</strong> and <strong>3 QA datasets</strong>, and</li>
<li>a surprisingly effective intervention: <strong>structured distractors</strong>.</li>
</ul><p>If this article helped you or inspired your own research, please consider citing the paper.</p><div class="highlighter-rouge"><div class="highlight"><pre><code><span class="nc">@article</span><span class="p">{</span>
  <span class="nl">chhikara2025mind</span><span class="p">,</span>
  <span class="na">title</span><span class="p">=</span><span class="s">{Mind the Confidence Gap: Overconfidence, Calibration, and Distractor Effects in Large Language Models}</span><span class="p">,</span>
  <span class="na">author</span><span class="p">=</span><span class="s">{Prateek Chhikara}</span><span class="p">,</span>
  <span class="na">journal</span><span class="p">=</span><span class="s">{Transactions on Machine Learning Research}</span><span class="p">,</span>
  <span class="na">issn</span><span class="p">=</span><span class="s">{2835-8856}</span><span class="p">,</span>
  <span class="na">year</span><span class="p">=</span><span class="s">{2025}</span><span class="p">,</span>
  <span class="na">url</span><span class="p">=</span><span class="s">{https://openreview.net/forum?id=lyaHnHDdZl}</span><span class="p">,</span>
  <span class="na">note</span><span class="p">=</span><span class="s">{}</span>
<span class="p">}</span></code></pre></div></div><h2 id="section-1">What is Calibration in plain English?</h2><p>A model is <strong>well-calibrated</strong> if:</p><ul>
<li>When it says “<em>I am 80% confident</em>,” it’s correct about ~80% of the time.</li>
<li>When it says “<em>I am 30% confident</em>,” it’s correct about ~30% of the time.</li>
</ul><p>A model is <strong>overconfident</strong> if it routinely claims high confidence but gets many of those answers wrong. To quantify calibration error, we use a standard metric called <strong>Expected Calibration Error (ECE)</strong>: lower is better; 0 is perfect calibration.</p><h2 id="section-2">The key idea: what if we force the model to “<em>consider the opposite</em>”?</h2><p>In human psychology, one way to reduce overconfidence is to explicitly consider alternative hypotheses (“<em>consider the opposite</em>”). Inspired by this, we tested whether LLMs become better calibrated if they must answer in a setting that includes <strong>plausible wrong options</strong> — i.e., distractors. So we compared two prompting regimes:</p><ol>
<li>
<strong>Free-generation (baseline):</strong> The model produces an answer and a self-reported confidence score (0–100).</li>
<li>
<strong>Distractor-augmented (structured choices):</strong> For each question, we provide: <strong>1 correct answer, 3 plausible but incorrect distractors, and </strong>shuffled these options. The model must pick from the list and give confidence. Distractors were generated to match the correct answer’s type (person/date/number/place), be plausible, and be distinct.</li>
</ol><h2 id="section-3">Experimental setup (what we evaluated)</h2><p>We evaluated <strong>nine LLMs</strong> spanning:</p><ul>
<li>different scales (≈8B up to very large closed models),</li>
<li>architectures (dense vs MoE),</li>
<li>alignment regimes (SFT vs RLHF).</li>
</ul><p>We tested on <strong>three factual QA datasets</strong>:</p><ul>
<li>
<strong>SimpleQA</strong> (hard, short factoid questions),</li>
<li>
<strong>FaVIQ</strong> (moderate difficulty),</li>
<li>
<strong>TriviaQA</strong> (easier in this setup).</li>
</ul><p>Correctness was judged using a consistent LLM-judge setup (GPT-4o-mini) to avoid instability from weaker judges.</p><figure><img alt="Figure 2. Performance metrics of LLMs in the Normal (N) and Distractor (D) settings on the SimpleQA, FaVIQ, and TriviaQA datasets, including accuracy (correct), NOT_ATTEMPTED (na), ECE, and the number ofhelped (D_helped) and harmed (D_harmed) instances with their percentages." src="{% endraw %}{{ '/images/writing/media-048.png' | relative_url }}{% raw %}" width="1024" height="841" loading="lazy" decoding="async"><figcaption>Figure 2. Performance metrics of LLMs in the Normal (N) and Distractor (D) settings on the SimpleQA, FaVIQ, and TriviaQA datasets, including accuracy (correct), NOT_ATTEMPTED (na), ECE, and the number of<br>helped (D_helped) and harmed (D_harmed) instances with their percentages.</figcaption></figure><figure><img alt="Figure 3. Reliability diagrams (RDs) showing calibration performance in N (purple) and D (yellow) settings on the SimpleQA dataset. (y-axis: actual accuracy, x-axis: predicted confidence)" src="{% endraw %}{{ '/images/writing/media-049.png' | relative_url }}{% raw %}" width="1024" height="729" loading="lazy" decoding="async"><figcaption>Figure 3. Reliability diagrams (RDs) showing calibration performance in N (purple) and D (yellow) settings on the SimpleQA dataset. (y-axis: actual accuracy, x-axis: predicted confidence)</figcaption></figure><h2 id="section-4">Findings of the Experiments</h2><h3 id="section-5">Finding 1: Overconfidence is widespread, even in strong models</h3><p>On the hardest dataset (SimpleQA), even the strongest models are far from perfectly calibrated. For example, the paper notes GPT-4o achieves ~35% accuracy with non-trivial ECE in free-generation. The broader point: <strong>scale alone doesn’t eliminate miscalibration</strong> on hard factual queries.</p><h3 id="section-6">Finding 2: Distractors massively improve accuracy <em>and</em> often reduce ECE</h3><p>Adding structured distractors consistently boosts accuracy and generally reduces calibration error across models — especially on difficult datasets. A striking example on <strong>SimpleQA</strong>: <strong>GPT-4o-mini</strong> jumps from <strong>8.46% → 47.43% accuracy </strong>and ECE drops from <strong>0.750 → 0.320</strong> in the distractor setting.</p><h3 id="section-7">Finding 3: Bigger models get better-calibrated probabilities — not just better answers</h3><p>Small models can gain a lot of accuracy when you give options, but their confidence estimates often remain misaligned. In contrast, larger models tend to produce <strong>more trustworthy confidence scores</strong>, especially after structured prompting. A simple intuition: small models learn factual patterns faster than they learn to <strong>know when they know and </strong>larger models improve more at <strong>self-assessment</strong> — confidence that tracks correctness.</p><h3 id="section-8">Finding 4 (the nuance): distractors can hurt calibration on easy questions</h3><p>This is where the story gets interesting. On <strong>TriviaQA</strong> (the easiest dataset here), some large RLHF-tuned models show <strong>slight ECE increases</strong> under distractors even though accuracy still improves. The paper attributes this to “<em>confidence inflation</em>” on already-easy examples: multiple-choice framing can push the model into <em>overcommitting</em> (becoming even more certain).</p><figure><img alt="Figure 4: Performance (correct) of LLMs across different question types in both N (purple) and D (yellow) settings." src="{% endraw %}{{ '/images/writing/media-050.png' | relative_url }}{% raw %}" width="1024" height="964" loading="lazy" decoding="async"><figcaption>Figure 4: Performance (correct) of LLMs across different question types in both N (purple) and D (yellow) settings.</figcaption></figure><h3 id="section-9">Finding 5: “Person” questions are the most stubborn failure mode</h3><p>SimpleQA tags questions into Date/Number/Person/Place, and a consistent theme emerges: <strong>Person-based queries are the hardest. </strong>They are ambiguous (similar names, overlapping roles, contextual dependencies), and models often confuse related entities. Distractors help the most here (largest relative ECE drop across types), but person questions still remain a major calibration pain point across models.</p><h2 id="section-10">Limitations (what we were careful about)</h2><p>One important limitation: the distractors are generated using a fixed generator and the evaluation uses a fixed LLM judge for consistency. That reduces rubric drift but also means results are conditional on that generator/judge pairing. The paper mitigates this with plausibility checks and human spot-checking, and releases prompts/code for replication.</p><h2 id="section-11">Closing thought: calibration is the missing reliability layer</h2><p>Accuracy tells you <em>how often a model is right. </em>Calibration tells you <em>whether you can trust the model when it says it’s right.</em></p><p>And the core message from the paper is:</p><ul>
<li>Overconfidence is widespread in LLMs on factual QA.</li>
<li>
<strong>Structured distractors</strong> can significantly reduce miscalibration and improve accuracy</li>
<li>But calibration remains nuanced — especially across difficulty and question type.</li>
</ul><p>If you are interested in reproducing or extending the benchmark, the paper links to the public code repository.</p><p><a href="https://github.com/prateekchhikara/llms-calibration">GitHub - prateekchhikara/llms-calibration</a></p><hr>
{% endraw %}
