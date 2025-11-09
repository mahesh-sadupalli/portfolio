import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faChartLine, faCloud } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "PyTorch",
    "Scikit-Learn",
    "TensorFlow",
    "ONNX",
    "Computer Vision",
    "Deep Learning",
    "CNNs",
    "Transformers",
    "GANs",
    "Neural Networks",
    "LangChain",
    "RAG"
];

const labelsSecond = [
    "Python",
    "Java",
    "C",
    "SQL",
    "Git",
    "Linux",
    "Docker",
    "Jenkins",
    "PostgreSQL",
    "MongoDB",
    "FAISS",
    "Neo4j"
];

const labelsThird = [
    "AWS",
    "GCP",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Spark",
    "PowerBI",
    "MLOps",
    "CloudWatch",
    "Prometheus"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>AI/ML Research & Development</h3>
                    <p>Specialized in neural network architectures, computer vision, and deep learning. Currently researching neural network-based compression achieving 20-50x ratios with sub-1% error. Experienced with multimodal learning, transformers, and GANs across healthcare and vision domains.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Software Engineering & Data Systems</h3>
                    <p>Full-stack development expertise spanning backend systems, databases, and production ML pipelines. Built enterprise microservices, implemented CI/CD workflows, and developed scalable data processing systems for research and production environments.</p>
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
            </div>
        </div>
    </div>
    );
}

export default Expertise;