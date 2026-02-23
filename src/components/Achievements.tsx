import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCertificate } from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from './ScrollReveal';
import '../assets/styles/Achievements.scss';

const achievements = [
    {
        icon: faTrophy,
        title: "EY Databeats Hackathon 2024",
        type: "Participant",
        description: "Participated in the EY Databeats Hackathon 2024, tackling real-world data science and AI challenges in a competitive environment.",
        color: "#F59E0B"
    },
    {
        icon: faTrophy,
        title: "UN-ITU Young AI Leader",
        type: "Recognition — Berlin Hub",
        description: "Selected as a Young AI Leader by the United Nations International Telecommunication Union (ITU) Berlin Hub, recognizing contributions to AI research and innovation.",
        color: "#3B82F6"
    },
    {
        icon: faCertificate,
        title: "Research Publications",
        type: "Academic Contributions",
        description: "Conducting cutting-edge research in neural network compression and multimodal deep learning, with ongoing work toward conference submissions including NeurIPS.",
        color: "#8B5CF6"
    }
];

function Achievements() {
    return (
    <div className="achievements-section" id="achievements">
        <div className="achievements-inner">
            <ScrollReveal>
                <span className="section-label">Recognition</span>
                <h1 className="achievements-heading">Achievements</h1>
            </ScrollReveal>
            <div className="achievements-perspective-grid">
                {achievements.map((achievement, index) => (
                    <ScrollReveal key={index} delay={index * 150} direction={index % 2 === 0 ? 'left' : 'right'}>
                        <div className="achievement-3d-card">
                            <div className="achievement-card-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${achievement.color}15, transparent 70%)` }} />
                            <div className="achievement-accent-line" style={{ background: achievement.color }} />
                            <div className="achievement-icon-wrap" style={{ background: `${achievement.color}12`, color: achievement.color }}>
                                <FontAwesomeIcon icon={achievement.icon} />
                            </div>
                            <h3>{achievement.title}</h3>
                            <span className="achievement-type" style={{ color: achievement.color }}>{achievement.type}</span>
                            <p>{achievement.description}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Achievements;