---
layout: archive
title: "Education"
permalink: /education/
author_profile: true
---

<div class="education-card">
    <div class="education-header">
        <img src="/images/usc-logo.png" alt="usc logo" class="education-logo"/>
        <div class="education-info">
            <h3>Master of Science in Computer Science</h3>
            <a href="https://www.usc.edu" class="education-link">University of Southern California</a>
            <span class="education-date"> (August 2022 - May 2024)</span>
        </div>
    </div>
    <div class="education-details">
        <div class="education-gpa">GPA: 3.85/4.00</div>
        <h4>Coursework</h4>
        <div class="coursework-grid">
            <div class="coursework-item">Analysis of Algorithms (CSCI 570)</div>
            <div class="coursework-item">Database Systems (CSCI 585)</div>
            <div class="coursework-item">Web Technologies (CSCI 571)</div>
            <div class="coursework-item">Foundations of Artificial Intelligence (CSCI 561)</div>
            <div class="coursework-item">Machine Learning for Data Science (DSCI 552)</div>
            <div class="coursework-item">Applied Natural Language Processing (CSCI 544)</div>
            <div class="coursework-item">Deep Learning and Its Applications (CSCI 566)</div>
        </div>
    </div>
</div>

<hr />

<div class="education-card">
    <div class="education-header">
        <img src="/images/thapar.png" alt="thapar logo" class="education-logo"/>
        <div class="education-info">
            <h3>Bachelor of Engineering in Computer Engineering</h3>
            <a href="https://www.thapar.edu" class="education-link">Thapar Institute of Engineering and Technology</a>
            <span class="education-date"> (July 2016 - July 2020)</span>
        </div>
    </div>
    <div class="education-details">
        <div class="education-gpa">GPA: 9.64/10.00</div>
        <h4>Major Coursework</h4>
        <div class="coursework-grid">
            <div class="coursework-item">Machine Learning</div>
            <div class="coursework-item">Artificial Intelligence</div>
            <div class="coursework-item">Data Analytics & Visualization</div>
            <div class="coursework-item">Image Processing</div>
            <div class="coursework-item">Natural Language Processing</div>
            <div class="coursework-item">Deep Learning</div>
        </div>
        <h4>Responsibilities</h4>
        <ul class="responsibilities-list">
            <li>Worked in labs under the supervision of professors from the Computer Engineering Department. Conducted successful research and published papers in high-impact journals and conferences.</li>
            <li>Devised a course curriculum of 40 hrs under the Experiential Learning Centre of college, which introduced use-cases of robotic arm to first-year students. Prepared pre-workshop lectures, assisted students in projects and grading their work.</li>
            <li>During 2019's summer school, taught first-year students the fundamentals of Python and tutored them the concepts of Computer Vision (creating a CNN using Transfer Learning), creating a Blockchain, developing a cryptocurrency using OOPS in Python, and testing the built API using Postman.</li>
        </ul>
    </div>
</div>

<style>
.education-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
}

.education-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    border-top: 3px solid #2980b9;
}

.education-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.education-logo {
    width: 60px;
    height: 60px;
    margin-right: 20px;
    flex-shrink: 0;
    border-radius: 10px;
    object-fit: cover;
}

.education-info h3 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.3em;
}

.education-link {
    color:rgb(0, 149, 255);
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease;
}

.education-link:hover {
    color: #c0392b;
}

.education-date {
    color: #666;
    font-style: italic;
    font-size: 0.9em;
}

.education-details {
    margin-left: 80px;
}

.education-gpa {
    background-color: #f8f9fa;
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 20px;
    font-weight: bold;
}

.coursework-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;
    margin-bottom: 20px;
}

.coursework-item {
    background-color: #f8f9fa;
    padding: 10px;
    border-radius: 5px;
}

.responsibilities-list {
    margin: 0;
    padding-left: 20px;
}

.responsibilities-list li {
    margin-bottom: 10px;
    color: #2c3e50;
}
</style>
