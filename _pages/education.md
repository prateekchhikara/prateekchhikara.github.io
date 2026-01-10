---
layout: archive
title: "Education"
permalink: /education/
author_profile: true
---

<div class="education-container">
    <div class="education-card">
        <div class="education-header">
            <div class="logo-container">
                <img src="/images/usc-logo.png" alt="USC Logo" class="education-logo"/>
            </div>
            <div class="education-info">
                <h3>Master of Science in Computer Science</h3>
                <a href="https://www.usc.edu" class="education-link">University of Southern California</a>
            </div>
            <div class="education-meta">
                <span class="education-date">August 2022 - May 2024</span>
                <span class="education-location">
                    <span class="location-icon">📍</span>
                    <span>Los Angeles, CA</span>
                    <span class="flag">🇺🇸</span>
                </span>
            </div>
        </div>
        <div class="education-details">
            <div class="gpa-badge">
                <span class="gpa-label">GPA</span>
                <span class="gpa-value">3.85/4.00</span>
            </div>
            <div class="section-divider"></div>
            <h4 class="section-title">📚 Coursework</h4>
            <div class="coursework-grid">
                <div class="coursework-item">
                    <span class="course-code">CSCI 570</span>
                    <span class="course-name">Analysis of Algorithms</span>
                </div>
                <div class="coursework-item">
                    <span class="course-code">CSCI 585</span>
                    <span class="course-name">Database Systems</span>
                </div>
                <div class="coursework-item">
                    <span class="course-code">CSCI 571</span>
                    <span class="course-name">Web Technologies</span>
                </div>
                <div class="coursework-item">
                    <span class="course-code">CSCI 561</span>
                    <span class="course-name">Foundations of Artificial Intelligence</span>
                </div>
                <div class="coursework-item">
                    <span class="course-code">DSCI 552</span>
                    <span class="course-name">Machine Learning for Data Science</span>
                </div>
                <div class="coursework-item">
                    <span class="course-code">CSCI 544</span>
                    <span class="course-name">Applied Natural Language Processing</span>
                </div>
                <div class="coursework-item">
                    <span class="course-code">CSCI 566</span>
                    <span class="course-name">Deep Learning and Its Applications</span>
                </div>
            </div>
        </div>
    </div>

    <div class="education-card">
        <div class="education-header">
            <div class="logo-container">
                <img src="/images/thapar.png" alt="Thapar Logo" class="education-logo"/>
            </div>
            <div class="education-info">
                <h3>Bachelor of Engineering in Computer Engineering</h3>
                <a href="https://www.thapar.edu" class="education-link">Thapar Institute of Engineering and Technology</a>
            </div>
            <div class="education-meta">
                <span class="education-date">July 2016 - July 2020</span>
                <span class="education-location">
                    <span class="location-icon">📍</span>
                    <span>Patiala, India</span>
                    <span class="flag">🇮🇳</span>
                </span>
            </div>
        </div>
        <div class="education-details">
            <div class="gpa-badge">
                <span class="gpa-label">GPA</span>
                <span class="gpa-value">9.64/10.00</span>
            </div>
            <div class="section-divider"></div>
            <h4 class="section-title">🎯 Major Coursework</h4>
            <div class="coursework-grid">
                <div class="coursework-item">
                    <span class="course-name">Machine Learning</span>
                </div>
                <div class="coursework-item">
                    <span class="course-name">Artificial Intelligence</span>
                </div>
                <div class="coursework-item">
                    <span class="course-name">Data Analytics & Visualization</span>
                </div>
                <div class="coursework-item">
                    <span class="course-name">Image Processing</span>
                </div>
                <div class="coursework-item">
                    <span class="course-name">Natural Language Processing</span>
                </div>
                <div class="coursework-item">
                    <span class="course-name">Deep Learning</span>
                </div>
            </div>
            <div class="section-divider"></div>
            <h4 class="section-title">🌟 Key Responsibilities</h4>
            <div class="responsibilities-container">
                <div class="responsibility-item">
                    <div class="responsibility-icon">🔬</div>
                    <div class="responsibility-content">
                        <strong>Research & Publications:</strong> Worked in labs under the supervision of professors from the Computer Engineering Department. Conducted successful research and published papers in high-impact journals and conferences.
                    </div>
                </div>
                <div class="responsibility-item">
                    <div class="responsibility-icon">📚</div>
                    <div class="responsibility-content">
                        <strong>Course Curriculum Development:</strong> Devised a course curriculum of 40 hrs under the Experiential Learning Centre of college, which introduced use-cases of robotic arm to first-year students. Prepared pre-workshop lectures, assisted students in projects and grading their work.
                    </div>
                </div>
                <div class="responsibility-item">
                    <div class="responsibility-icon">👨‍🏫</div>
                    <div class="responsibility-content">
                        <strong>Teaching & Mentoring:</strong> During 2019's summer school, taught first-year students the fundamentals of Python and tutored them the concepts of Computer Vision (creating a CNN using Transfer Learning), creating a Blockchain, developing a cryptocurrency using OOPS in Python, and testing the built API using Postman.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.education-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 8px;
}

.education-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
}

.education-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #e74c3c, #f39c12, #f1c40f);
    border-radius: 20px 20px 0 0;
}

.education-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.education-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 12px;
    gap: 12px;
}

.logo-container {
    width: 55px;
    height: 55px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
    flex-shrink: 0;
}

.education-logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
    border-radius: 6px;
}

.education-info {
    flex: 1;
    min-width: 0;
}

.education-info h3 {
    margin: 0 0 3px 0;
    color: #2c3e50;
    font-size: 1.05em;
    font-weight: 700;
    line-height: 1.2;
}

.education-link {
    color: #2980b9;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9em;
    transition: all 0.3s ease;
    display: inline-block;
    margin-bottom: 2px;
}

.education-link:hover {
    color: #1f5f8b;
    transform: translateX(3px);
}

.education-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    font-size: 0.8em;
    text-align: right;
    flex-shrink: 0;
}

.education-date {
    color: #7f8c8d;
    font-style: italic;
    font-weight: 500;
    white-space: nowrap;
}

.education-location {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #7f8c8d;
    font-weight: 500;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.location-icon {
    font-size: 0.9em;
}

.flag {
    font-size: 0.95em;
}

.education-details {
    margin-left: 0;
}

.gpa-badge {
    display: inline-flex;
    align-items: center;
    background: linear-gradient(135deg, #e74c3c, #e67e22);
    color: white;
    padding: 6px 12px;
    border-radius: 16px;
    margin-bottom: 12px;
    box-shadow: 0 3px 12px rgba(231, 76, 60, 0.25);
    font-weight: 600;
    font-size: 0.8em;
}

.gpa-label {
    margin-right: 6px;
    font-size: 0.75em;
    opacity: 0.9;
}

.gpa-value {
    font-size: 0.9em;
    font-weight: 700;
}

.section-divider {
    height: 1px;
    background: linear-gradient(90deg, #ecf0f1, #bdc3c7, #ecf0f1);
    margin: 12px 0;
    border-radius: 1px;
}

.section-title {
    color: #2c3e50;
    font-size: 1em;
    font-weight: 600;
    margin: 12px 0 10px 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.coursework-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 10px;
    margin-bottom: 12px;
}

.coursework-item {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.coursework-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
}

.course-code {
    font-size: 0.7em;
    color: #2980b9;
    font-weight: 600;
    font-family: 'Courier New', monospace;
}

.course-name {
    font-weight: 500;
    color: #2c3e50;
    line-height: 1.3;
    font-size: 0.85em;
}

.responsibilities-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.responsibility-item {
    display: flex;
    gap: 15px;
    align-items: flex-start;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 12px;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.responsibility-item:hover {
    transform: translateX(3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    background: linear-gradient(135deg, #e8f5e8 0%, #d4edda 100%);
}

.responsibility-icon {
    font-size: 1.3em;
    flex-shrink: 0;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 50%;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
}

.responsibility-content {
    flex: 1;
    line-height: 1.5;
    color: #2c3e50;
    font-size: 0.85em;
}

.responsibility-content strong {
    color: #2980b9;
    font-weight: 600;
}

@media (max-width: 768px) {
    .education-container {
        padding: 5px;
    }
    
    .education-card {
        padding: 12px;
        margin-bottom: 12px;
    }
    
    .education-header {
        flex-direction: column;
        text-align: center;
        align-items: center;
        gap: 10px;
    }
    
    .education-meta {
        align-items: center;
        text-align: center;
    }
    
    .education-details {
        margin-left: 0;
    }
    
    .coursework-grid {
        grid-template-columns: 1fr;
    }
    
    .responsibility-item {
        flex-direction: column;
        text-align: center;
        gap: 12px;
    }
}
</style>
