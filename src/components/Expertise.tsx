import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faCode, faCloud, faDatabase, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import ScrollReveal from './ScrollReveal';
import '../assets/styles/Expertise.scss';

const skills = [
    {
        icon: faBrain,
        title: "AI/ML & Data Science",
        description: "Currently conducting Master's thesis research on neural network-based data compression at Rolls Royce, BTU, and TU Berlin, achieving 20-50x compression ratios. Developing multimodal deep learning models at Robert Koch Institute using PyTorch and Vision Transformers, integrating satellite imagery with sociodemographic data for healthcare predictions with F1 scores of 0.75-0.85.",
        labels: ["PyTorch", "Scikit-Learn", "LangChain", "Spark", "ONNX", "PowerBI", "MLOps"],
        chipLabel: "Tech stack",
        featured: true
    },
    {
        icon: faCode,
        title: "Programming & Data Engineering",
        description: "Proficient in multiple programming languages with strong experience in data processing, database management, and building scalable data pipelines. Developed SQL databases for epidemiological research, conducted statistical analysis for healthcare studies, and built data processing systems for research and production environments.",
        labels: ["Python", "Java", "C", "SQL", "Git", "Linux", "Shell Scripting", "EDA", "ETL Pipelines"],
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
    },
    {
        icon: faDatabase,
        title: "Databases & Storage Systems",
        description: "Hands-on experience with relational, NoSQL, vector, and graph databases. Built and managed database systems for epidemiological research, implemented vector databases for AI applications, and designed data storage solutions for scalable ML pipelines.",
        labels: ["PostgreSQL", "MongoDB", "FAISS (Vector DB)", "Neo4j (Graph DB)", "SQL Databases", "Vector Databases", "Graph Databases"],
        chipLabel: "Tech stack",
        featured: false
    },
    {
        icon: faCodeBranch,
        title: "Open Source Contributions",
        description: "Active contributor to open-source AI/ML projects with focus on improving developer tools and LLM frameworks. Contributing to PandasAI (conversational database interface), Langfuse (LLM engineering platform), and Tiptap (rich text editor framework). Engaged in code reviews, bug fixes, feature development, and documentation improvements.",
        labels: ["PandasAI", "Langfuse", "Tiptap", "GitHub", "Open Source", "Code Review", "Documentation", "Community Building", "Bug Fixes", "Feature Development"],
        chipLabel: "Projects & Skills",
        featured: true
    }
];

function Expertise() {
    return (
    <div className="expertise-section" id="expertise">
        <div className="expertise-inner">
            <ScrollReveal>
                <span className="section-label">What I Do</span>
                <h1 className="expertise-heading">Expertise</h1>
            </ScrollReveal>
            <div className="expertise-bento">
                {skills.map((skill, index) => (
                    <ScrollReveal key={index} delay={index * 100} className={`bento-card ${skill.featured ? 'bento-featured' : ''}`}>
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