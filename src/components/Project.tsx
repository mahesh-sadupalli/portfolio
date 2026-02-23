import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import ScrollReveal from './ScrollReveal';
import '../assets/styles/Project.scss';

const projects = [
    {
        image: mock01,
        link: "https://github.com/mahesh-sadupalli/master-thesis",
        title: "Concurrent Neural Network Training for Compression of Spatio-Temporal Data",
        description: "Master's thesis at BTU Cottbus-Senftenberg developing an in-situ neural network-based compression framework for streaming CFD simulation data. Trained coordinate-based MLPs mapping (x, y, z, t) to flow field variables, achieving compression ratios up to 27,208:1.",
        tags: ["PyTorch", "Neural Networks", "CFD"]
    },
    {
        image: mock02,
        link: "https://github.com/mahesh-sadupalli/gan-artifact-detector",
        title: "GAN Optimization & Deepfake Detection",
        description: "Researched GANs/SRGAN/ESRGAN for image super-resolution using adaptive loss function optimization, achieving 15% improvement in training stability and 30% reduction in mode collapse. Developed deepfake detection framework achieving 94.2% accuracy.",
        tags: ["GANs", "Computer Vision", "Deep Learning"]
    },
    {
        image: mock04,
        link: "https://github.com/mahesh-sadupalli",
        title: "Multimodal Deep Learning for Healthcare",
        description: "Developing multimodal deep learning models at Robert Koch Institute using PyTorch, progressing from CNN baselines to Vision Transformers. Integrating satellite imagery with sociodemographic data for healthcare prediction tasks, achieving F1 scores of 0.75-0.85.",
        tags: ["Vision Transformers", "Healthcare AI", "PyTorch"]
    },
    {
        image: mock05,
        link: "https://github.com/minalbansal14/Machine_Learning_Projects/tree/f44b832151368f35f78a5e1c3199b6709edcbf3d/Anomaly%20Detection",
        title: "Anomaly Detection in Customer Data",
        description: "Implemented machine learning pipeline for anomaly detection at FU Berlin, utilizing data preprocessing techniques to reduce skewness from 11.11 to -0.73. Identified top 10 anomalies with isolation forest scoring.",
        tags: ["Anomaly Detection", "ML Pipeline", "Data Science"]
    }
];

function Project() {
    return(
    <div className="projects-section" id="projects">
        <div className="projects-inner">
            <ScrollReveal>
                <span className="section-label">Selected Work</span>
                <h1 className="projects-heading">Research & Projects</h1>
            </ScrollReveal>
            <div className="projects-showcase">
                {projects.map((project, index) => (
                    <ScrollReveal
                        key={index}
                        delay={index * 120}
                        direction={index % 2 === 0 ? 'left' : 'right'}
                        className="project-reveal"
                    >
                        <a href={project.link} target="_blank" rel="noreferrer" className="project-card-link">
                            <div className={`project-card project-card-${index}`}>
                                <div className="project-card-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-card-overlay">
                                        <span className="project-view-label">View Project &rarr;</span>
                                    </div>
                                </div>
                                <div className="project-card-body">
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </a>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Project;