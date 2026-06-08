import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faCode, faCloud, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import ScrollReveal from './ScrollReveal';
import '../assets/styles/Expertise.scss';

const skills = [
    {
        icon: faBrain,
        title: "AI/ML & Data Science",
        description: "Currently conducting Master's thesis research on neural network-based data compression at Rolls Royce, BTU, and TU Berlin, reaching 35.72 dB PSNR at up to 4,733:1 compression on streaming CFD data. Developing multimodal deep learning models at Robert Koch Institute using PyTorch and Vision Transformers, integrating satellite imagery with sociodemographic data for healthcare predictions with F1 scores of 0.75-0.85.",
        labels: ["PyTorch", "Scikit-Learn", "LangChain", "Spark", "ONNX", "PowerBI", "MLOps"],
        chipLabel: "Tech stack",
        featured: true
    },
    {
        icon: faCode,
        title: "Programming & Data Engineering",
        description: "Proficient in multiple programming languages with strong experience in data processing, database management, and building scalable data pipelines. Developed SQL databases for epidemiological research, conducted statistical analysis for healthcare studies, and built data processing systems for research and production environments.",
        labels: ["Python", "Java", "C", "SQL", "Git", "Linux", "Shell Scripting", "EDA", "ETL Pipelines", "PostgreSQL", "MongoDB", "FAISS", "Neo4j"],
        chipLabel: "Tech stack",
        featured: false
    },
    {
        icon: faCloud,
        title: "Cloud Infrastructure & DevOps",
        description: "Extensive experience deploying and managing cloud infrastructure with containerization, orchestration, and automation. Built CI/CD pipelines reducing deployment time by 66%, maintained 99.8% uptime, and containerized ML workloads for enterprise clients.",
        labels: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "CI/CD", "CloudWatch", "Prometheus"],
        chipLabel: "Tech stack",
        featured: false
    }
];

function Expertise() {
    return (
    <div className="expertise-section" id="expertise">
        <div className="news-ticker">
            <div className="news-ticker-track">
                <span className="news-ticker-item">&#127881; Just hit 28K+ followers on Instagram <a href="https://www.instagram.com/blackforesttlabs/" target="_blank" rel="noreferrer">@blackforesttlabs</a></span>
                <span className="news-ticker-item">&#127881; Just hit 28K+ followers on Instagram <a href="https://www.instagram.com/blackforesttlabs/" target="_blank" rel="noreferrer">@blackforesttlabs</a></span>
            </div>
        </div>
        <div className="expertise-inner">
            <ScrollReveal>
                <div className="expertise-intro">
                    <div className="expertise-intro-text">
                        <span className="section-label">About Me</span>
                        <h1 className="expertise-heading">What I Do</h1>
                        <p className="expertise-bio">I'm an AI engineer, systems thinker, and graduate researcher based in Germany. I hold a Master's in Artificial Intelligence and spend my days at the intersection of deep learning theory, architecture design, and real-world AI deployment.</p>
                        <p className="expertise-bio">While the industry celebrates the fastest prompters, I'm focused on becoming a <strong>deeper builder</strong> — studying where models fail, designing multimodal systems, and building neural networks from scratch to understand what every gradient update is doing and why.</p>
                    </div>
                    <div className="upcoming-schedule">
                        <div className="schedule-header">
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <span>Upcoming</span>
                        </div>
                        <div className="schedule-list">
                            <div className="schedule-item">
                                <span className="schedule-date">Jul 7–10</span>
                                <div className="schedule-info">
                                    <h4>AI for Good Conference</h4>
                                    <span className="schedule-location">Geneva, Switzerland</span>
                                </div>
                            </div>
                            <div className="schedule-item">
                                <span className="schedule-date">Jul 8–10</span>
                                <div className="schedule-info">
                                    <h4>WeAreDevelopers World Congress 2026</h4>
                                    <span className="schedule-location">Berlin, Germany</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
            <div className="expertise-bento">
                {skills.map((skill, index) => (
                    <ScrollReveal key={index} delay={index * 100} className="bento-card">
                        <div className="bento-card-inner">
                            <div className="bento-icon">
                                <FontAwesomeIcon icon={skill.icon} />
                            </div>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                            <div className="flex-chips">
                                <span className="chip-title">{skill.chipLabel}:</span>
                                {skill.labels.map((label, i) => (
                                    <Chip key={i} className='chip' label={label} />
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;