import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faCode, faCloud, faAward } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "PyTorch",
    "Scikit-Learn",
    "LangChain",
    "Spark",
    "ONNX",
    "PowerBI",
    "Computer Vision",
    "Deep Learning",
    "CNNs",
    "Transformers",
    "Statistical Analysis"
];

const labelsSecond = [
    "Python",
    "Java",
    "C",
    "SQL",
    "Git",
    "Linux",
    "Shell Scripting",
    "Data Processing",
    "ETL Pipelines",
    "API Development"
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
    "Prometheus",
    "MLOps"
];

const labelsFourth = [
    "PostgreSQL",
    "MongoDB",
    "FAISS",
    "Pinecone",
    "Neo4j",
    "SQL Databases",
    "Vector Databases",
    "Graph Databases"
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
                    <FontAwesomeIcon icon={faAward} size="3x"/>
                    <h3>Databases & Storage Systems</h3>
                    <p>Hands-on experience with relational, NoSQL, vector, and graph databases. Built and managed database systems for epidemiological research, implemented vector databases for AI applications, and designed data storage solutions for scalable ML pipelines.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
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