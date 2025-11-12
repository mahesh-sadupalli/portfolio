import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faCode, faCloud, faDatabase, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "PyTorch",
    "Scikit-Learn",
    "LangChain",
    "Spark",
    "ONNX",
    "PowerBI",
    "MLOps"
];

const labelsSecond = [
    "Python",
    "Java",
    "C",
    "SQL",
    "Git",
    "Linux",
    "Shell Scripting",
    "EDA",
    "ETL Pipelines"
];

const labelsThird = [
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "CI/CD",
    "CloudWatch",
    "Prometheus"
];

const labelsFourth = [
    "PostgreSQL",
    "MongoDB",
    "FAISS (Vector DB)",
    "Neo4j (Graph DB)",
    "SQL Databases",
    "Vector Databases",
    "Graph Databases"
];

const labelsFifth = [
    "PandasAI",
    "Langfuse",
    "Tiptap",
    "GitHub",
    "Open Source",
    "Code Review",
    "Documentation",
    "Community Building",
    "Bug Fixes",
    "Feature Development"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>AI/ML & Data Science</h3>
                    <p>Currently conducting Master's thesis research on neural network-based data compression at Rolls Royce, BTU, and TU Berlin, achieving 20-50x compression ratios. Developing multimodal deep learning models at Robert Koch Institute using PyTorch and Vision Transformers, integrating satellite imagery with sociodemographic data for healthcare predictions with F1 scores of 0.75-0.85.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Programming & Data Engineering</h3>
                    <p>Proficient in multiple programming languages with strong experience in data processing, database management, and building scalable data pipelines. Developed SQL databases for epidemiological research, conducted statistical analysis for healthcare studies, and built data processing systems for research and production environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud Infrastructure & DevOps</h3>
                    <p>Extensive experience deploying and managing cloud infrastructure with containerization, orchestration, and automation. Built CI/CD pipelines reducing deployment time by 66%, maintained 99.8% uptime, and containerized ML workloads for enterprise clients.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Databases & Storage Systems</h3>
                    <p>Hands-on experience with relational, NoSQL, vector, and graph databases. Built and managed database systems for epidemiological research, implemented vector databases for AI applications, and designed data storage solutions for scalable ML pipelines.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCodeBranch} size="3x"/>
                    <h3>Open Source Contributions</h3>
                    <p>Active contributor to open-source AI/ML projects with focus on improving developer tools and LLM frameworks. Contributing to PandasAI (conversational database interface), Langfuse (LLM engineering platform), and Tiptap (rich text editor framework). Engaged in code reviews, bug fixes, feature development, and documentation improvements.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Projects & Skills:</span>
                        {labelsFifth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;