---
layout: article
title: "An article title"
description: "One sentence explaining what the reader will learn."
category: technical
tags: [AI, Engineering]
contents:
  - id: the-problem
    title: The problem
    level: 2
  - id: the-approach
    title: The approach
    level: 2
  - id: what-changed
    title: What changed
    level: 2
---

Start with the problem, the result, and why it matters.

## The problem

Explain the constraints and what the original system did. Link evidence to each claim.<sup><a href="#note-1" aria-label="Read note 1">1</a></sup>

{% include sidenote.html id="1" text="Use a sidenote for context that is useful but does not need to interrupt the main explanation. It moves below the text on smaller screens." %}

## The approach

Use a small example to explain a decision:

```python
def average(values):
    if not values:
        raise ValueError("Expected at least one value")
    return sum(values) / len(values)
```

{% include figure.html src="/images/mem0_paper.webp" alt="Overview of the Mem0 memory architecture" caption="Example figure. Replace the image, description, and caption with your own." %}

## What changed

Report measurements, limitations, and what you would explore next.

Keep the comparison explicit:

| Measurement | Baseline | Updated |
| --- | --- | --- |
| Replace with a real metric | — | — |
