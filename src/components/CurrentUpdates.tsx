import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faLightbulb, faRocket, faBook, faStar } from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from './ScrollReveal';
import '../assets/styles/CurrentUpdates.scss';

const updates = [
    {
        icon: faBriefcase,
        category: "Work",
        title: "Research Associate @ Robert Koch Institut",
        description: "Building semantic healthcare data models (HL7 FHIR profiles) for DEMIS — turning clinical requirements into machine-readable specifications with FHIR Shorthand, and publishing validated implementation guides for public health data exchange.",
        status: "ongoing"
    },
    {
        icon: faGraduationCap,
        category: "Thesis",
        title: "Neural Network-Based Data Compression",
        description: "Wrapping up my Master's thesis on in-situ neural compression for streaming CFD data at Rolls Royce & BTU, reaching up to 4,733:1 compression — submitting June 2026.",
        status: "ongoing"
    },
    {
        icon: faLightbulb,
        category: "Learning",
        title: "Architecture Over Wrappers",
        description: "Deep-diving into transformer internals, attention mechanisms, and building LLM components from scratch — not just calling APIs.",
        status: "ongoing"
    },
    {
        icon: faRocket,
        category: "Community",
        title: "28K+ Followers on @blackforesttlabs",
        description: "Growing an Instagram community focused on making AI fundamentals genuinely understandable — one honest explanation at a time.",
        status: "milestone"
    },
    {
        icon: faBook,
        category: "Cool Stuff",
        title: "MLU-Explain & Visual Learning",
        description: "Exploring interactive ML education tools — visual explanations of bias-variance tradeoff, decision trees, and neural networks that make complex concepts click.",
        status: "ongoing"
    },
    {
        icon: faStar,
        category: "Open Source",
        title: "Contributing to PandasAI & Langfuse",
        description: "Active contributions to LLM tooling ecosystem — code reviews, bug fixes, and feature development for conversational data interfaces and LLM observability.",
        status: "ongoing"
    }
];

function CurrentUpdates() {
    return (
        <div className="updates-section" id="updates">
            <div className="updates-inner">
                <ScrollReveal>
                    <span className="section-label">Now</span>
                    <h1 className="updates-heading">What I'm Up To</h1>
                    <p className="updates-subtitle">A snapshot of what's keeping me busy right now.</p>
                </ScrollReveal>
                <div className="updates-grid">
                    {updates.map((update, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div className={`update-card update-${update.status}`}>
                                <div className="update-header">
                                    <div className="update-icon">
                                        <FontAwesomeIcon icon={update.icon} />
                                    </div>
                                    <span className={`update-status update-status-${update.status}`}>
                                        {update.status === 'ongoing' ? 'In Progress' : update.status === 'completed' ? 'Done' : 'Milestone'}
                                    </span>
                                </div>
                                <span className="update-category">{update.category}</span>
                                <h3>{update.title}</h3>
                                <p>{update.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CurrentUpdates;
