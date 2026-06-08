import React from "react";
import ScrollReveal from './ScrollReveal';
import '../assets/styles/Resources.scss';

const resources = [
    {
        title: "MLU-Explain",
        description: "Visual, interactive explanations of core machine learning concepts by Amazon's Machine Learning University.",
        url: "https://mlu-explain.github.io/",
        tag: "Interactive"
    },
    {
        title: "TensorFlow Tutorials",
        description: "Official step-by-step guides covering everything from basics to advanced deep learning techniques.",
        url: "https://www.tensorflow.org/tutorials/",
        tag: "Tutorials"
    },
    {
        title: "TensorFlow Playground",
        description: "Tinker with a real neural network in your browser — visualize how layers, activation functions, and features shape learning.",
        url: "https://playground.tensorflow.org/",
        tag: "Playground"
    }
];

function Resources() {
    return (
        <div className="resources-section" id="resources">
            <div className="resources-inner">
                <ScrollReveal>
                    <span className="section-label">Learn & Explore</span>
                    <h1 className="resources-heading">Resources I Recommend</h1>
                    <p className="resources-subtitle">Curated tools and guides that helped shape my understanding of AI/ML fundamentals.</p>
                </ScrollReveal>
                <div className="resources-grid">
                    {resources.map((resource, index) => (
                        <ScrollReveal key={index} delay={index * 120}>
                            <a href={resource.url} target="_blank" rel="noreferrer" className="resource-card">
                                <span className="resource-tag">{resource.tag}</span>
                                <h3>{resource.title}</h3>
                                <p>{resource.description}</p>
                                <span className="mlu-button resource-button">Visit &rarr;</span>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Resources;
