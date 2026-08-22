import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import ScrollReveal from './ScrollReveal';
import '../assets/styles/Project.scss';

const projects = [
    {
        image: mock01,
        link: "https://github.com/mahesh-sadupalli/master-thesis",
        title: "Concurrent Neural Network Training for Compression of Spatio-Temporal Data",
        description: "Completed Master's thesis (grade 1.3) at BTU Cottbus-Senftenberg: an in-situ neural compression framework for streaming CFD data (vortex-shedding case, 300 timesteps, ~7.9M spatio-temporal samples). Benchmarked three architectures — coordinate-based INR, linear autoencoder, convolutional autoencoder — across three model sizes in offline and online modes on a single NVIDIA T4. Best quality: 37.97 dB PSNR (linear AE); best compression: 4,733:1 (INR, offline). Quantified catastrophic forgetting in streaming training — full-dataset PSNR collapses to 15.22 dB — and recovered +7.58 dB (→ 22.80 dB) with Experience Replay, while the Conv2D AE streams within 1.42 dB of its offline reference.",
        tags: ["PyTorch", "Implicit Neural Representations", "Continual Learning", "CFD"]
    },
    {
        image: mock03,
        link: "https://github.com/mahesh-sadupalli/moe-transformer-pallas",
        title: "10M-Parameter MoE Transformer with Custom Pallas Kernel",
        description: "A ~10M-parameter Mixture-of-Experts transformer built from scratch in JAX and trained end-to-end — top-k routing, expert dispatch/combine, and an auxiliary load-balancing loss. A custom Pallas kernel fuses the MoE hot path (gating → dispatch → expert matmul → combine) for a measurable speedup over the baseline. Covers the full stack from tokenization and attention to MoE routing, the optimizer and training loop, plus the scaling math behind compute / memory / communication tradeoffs.",
        tags: ["JAX", "Mixture-of-Experts", "Pallas Kernel", "From Scratch", "LLM"]
    },
    {
        image: mock02,
        link: "https://github.com/mahesh-sadupalli/ai-generated-media-detector",
        title: "AI-Generated Media Detector",
        description: "Compression-aware deepfake detection system with a dedicated Flux (Black Forest Labs) detector targeting MMDiT transformer artifacts — attention uniformity, flow matching residuals, and spectral fingerprints. Standard diffusion detectors achieve only 18-30% accuracy on Flux since U-Net-specific artifacts don't exist in transformer architectures. Uses FFT frequency-domain analysis, GLCM/LBP texture features, and explicit compression estimation to classify media as REAL, GAN-GENERATED, or DIFFUSION-GENERATED.",
        tags: ["Deepfake Detection", "Flux", "FFT", "Computer Vision", "Compression"]
    },
    {
        image: mock04,
        link: "https://github.com/mahesh-sadupalli/ml-projects/tree/main/multimodal-medsat",
        title: "Multimodal Deep Learning for Medical Prescription Prediction",
        description: "Predicts medical prescription prevalence across 33,755 areas in England by fusing Sentinel-2 satellite imagery with sociodemographic data using cross-attention multimodal learning. Exceeds MedSat (NeurIPS 2023) baselines by +66% average — Depression R²=0.806, Opioids R²=0.794, Diabetes R²=0.654.",
        tags: ["Cross-Attention Fusion", "Satellite Imagery", "Healthcare AI", "PyTorch"]
    },
    {
        image: mock05,
        link: "https://github.com/mahesh-sadupalli/ml-projects/tree/main/fno-dynamical-system",
        title: "Fourier Neural Operator for Dynamical Systems",
        description: "Learns PDE dynamics from snapshot data using Fourier Neural Operators that generalize across spatial resolutions. Achieves resolution invariance within ~3% error band across 4x resolution range with zero retraining. Transfer learning with just 32 trajectories yields 44% error reduction on shifted distributions.",
        tags: ["Fourier Neural Operator", "PDE", "Transfer Learning", "PyTorch"]
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
                            <div className="project-card-footer">
                                <a href={project.link} target="_blank" rel="noreferrer" className="mlu-button">
                                    View Project &rarr;
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Project;
