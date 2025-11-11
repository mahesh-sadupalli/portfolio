import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Research & Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/mahesh-sadupalli" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mahesh-sadupalli" target="_blank" rel="noreferrer"><h2>Neural Network Data Compression</h2></a>
                <p>Master's thesis research implementing fully connected autoencoders, Physics-Informed Neural Networks (PINNs), and Graph Neural Networks for industrial simulation data compression. Achieved 20-50x compression ratios with sub-1% reconstruction error and 80-90% memory footprint reduction.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mahesh-sadupalli/gan-artifact-detector" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mahesh-sadupalli/gan-artifact-detector" target="_blank" rel="noreferrer"><h2>GAN Optimization & Deepfake Detection</h2></a>
                <p>Researched GANs/SRGAN/ESRGAN for image super-resolution using adaptive loss function optimization, achieving 15% improvement in training stability and 30% reduction in mode collapse. Developed deepfake detection framework achieving 94.2% accuracy with 0.85 F1-score on FaceForensics++ and DFDC datasets.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mahesh-sadupalli/knowledge-graphs-object-detection" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mahesh-sadupalli/knowledge-graphs-object-detection" target="_blank" rel="noreferrer"><h2>Object Detection using Knowledge Graphs</h2></a>
                <p>This project demonstrates the integration of Knowledge Graphs with computer vision tasks, specifically object detection. The implementation showcases how semantic knowledge can enhance machine learning pipelines by providing structured, high-quality training data through SPARQL queries.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mahesh-sadupalli" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mahesh-sadupalli" target="_blank" rel="noreferrer"><h2>Multimodal Deep Learning for Healthcare</h2></a>
                <p>Developing multimodal deep learning models at Robert Koch Institute using PyTorch, progressing from CNN baselines to Vision Transformers. Integrating satellite imagery with sociodemographic data for healthcare prediction tasks, achieving F1 scores of 0.75-0.85 on epidemiological research datasets.</p>
            </div>
            <div className="project">
                <a href="https://github.com/minalbansal14/Machine_Learning_Projects/tree/f44b832151368f35f78a5e1c3199b6709edcbf3d/Anomaly%20Detection" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/minalbansal14/Machine_Learning_Projects/tree/f44b832151368f35f78a5e1c3199b6709edcbf3d/Anomaly%20Detection" target="_blank" rel="noreferrer"><h2>Anomaly Detection in Customer Data</h2></a>
                <p>Implemented machine learning pipeline for anomaly detection at FU Berlin, utilizing data preprocessing techniques to reduce skewness from 11.11 to -0.73. Identified top 10 anomalies with isolation forest scoring (scores up to 56.41), demonstrating model evaluation and validation expertise.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mahesh-sadupalli/adobe-image-processing-platform" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mahesh-sadupalli/adobe-image-processing-platform" target="_blank" rel="noreferrer"><h2>Enterprise Image Processing Platform</h2></a>
                <p>Built enterprise-grade microservices platform using Java 17, Spring Boot 3.2, and Docker with Nginx load balancer. Implemented computer vision algorithms for edge detection, image filters, and smart resizing. Integrated AWS S3 cloud storage, PostgreSQL database, and Redis caching with production-ready RESTful APIs.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;