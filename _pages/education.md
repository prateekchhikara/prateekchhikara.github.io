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
                <img src="/images/usc-logo.webp" alt="USC Logo" class="education-logo" decoding="async"/>
            </div>
            <div class="education-info">
                <h2>Master of Science in Computer Science</h2>
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
            <details class="coursework-details">
                <summary class="section-title">📚 Coursework</summary>
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
            </details>
        </div>
    </div>

    <div class="education-card">
        <div class="education-header">
            <div class="logo-container">
                <img src="/images/thapar.webp" alt="Thapar Logo" class="education-logo" loading="lazy" decoding="async"/>
            </div>
            <div class="education-info">
                <h2>Bachelor of Engineering in Computer Engineering</h2>
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
            <details class="coursework-details">
                <summary class="section-title">🎯 Major Coursework</summary>
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
            </details>
            <div class="section-divider"></div>
            <details class="coursework-details">
                <summary class="section-title">🌟 Key Responsibilities</summary>
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
            </details>
        </div>
    </div>
</div>

<style>
.education-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 8px 8px 8px 58px;
    position: relative;
}

/* Timeline spine */
.education-container::before {
    content: '';
    position: absolute;
    left: 22px;
    top: 22px;
    bottom: 22px;
    width: 3px;
    background: linear-gradient(180deg, #e74c3c, #f39c12, #f1c40f);
    border-radius: 3px;
}

.education-card {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border-radius: 14px;
    padding: 18px 20px;
    margin-bottom: 22px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.05);
    position: relative;
}

/* Top accent bar */
.education-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #e74c3c, #f39c12, #f1c40f);
    border-radius: 14px 14px 0 0;
}

/* Timeline node dot */
.education-card::after {
    content: '';
    position: absolute;
    left: -44px;
    top: 24px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    border: 4px solid #e74c3c;
    box-shadow: 0 0 0 4px #fff, 0 2px 8px rgba(0, 0, 0, 0.18);
    z-index: 2;
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.education-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.education-card:hover::after {
    border-color: #f39c12;
    transform: scale(1.2);
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

.education-info h2 {
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
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 0.78em;
    flex-shrink: 0;
}

.education-date,
.education-location {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 11px;
    border-radius: 20px;
    font-weight: 600;
    white-space: nowrap;
    line-height: 1.5;
}

.education-date {
    background: #eaf2fa;
    color: #2471a3;
    font-style: normal;
}

.education-date::before {
    content: '🎓';
    font-size: 0.95em;
}

.education-location {
    background: #f0f2f4;
    color: #566573;
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

/* Collapsible coursework dropdown */
.coursework-details {
    margin-bottom: 12px;
}

.coursework-details > summary.section-title {
    cursor: pointer;
    list-style: none;
    user-select: none;
    padding: 8px 12px;
    border-radius: 10px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transition: background 0.3s ease;
}

.coursework-details > summary.section-title:hover {
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
}

.coursework-details > summary.section-title::-webkit-details-marker {
    display: none;
}

.coursework-details > summary.section-title::after {
    content: '▸';
    margin-left: auto;
    color: #2980b9;
    font-size: 0.9em;
    transition: transform 0.3s ease;
}

.coursework-details[open] > summary.section-title::after {
    transform: rotate(90deg);
}

.coursework-details[open] > summary.section-title {
    margin-bottom: 0;
    border-radius: 10px 10px 0 0;
}

.coursework-details > .coursework-grid,
.coursework-details > .responsibilities-container {
    margin: 0;
    padding: 12px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-top: none;
    border-radius: 0 0 10px 10px;
    background: rgba(248, 249, 250, 0.5);
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
        padding: 5px 5px 5px 32px;
    }

    .education-container::before {
        left: 10px;
    }

    .education-card {
        padding: 14px;
        margin-bottom: 16px;
    }

    .education-card::after {
        left: -28px;
        top: 20px;
        width: 14px;
        height: 14px;
    }

    .education-header {
        flex-direction: column;
        text-align: left;
        align-items: flex-start;
        gap: 10px;
    }

    .education-meta {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .education-details {
        margin-left: 0;
    }

    .coursework-grid {
        grid-template-columns: 1fr;
    }

    .responsibility-item {
        gap: 12px;
    }
}
</style>
