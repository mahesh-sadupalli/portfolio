import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCertificate } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Achievements.scss';

function Achievements() {
    return (
    <div className="container" id="achievements">
        <div className="achievements-container">
            <h1>Achievements & Certifications</h1>
            <div className="achievements-grid">
                <div className="achievement-card">
                    <FontAwesomeIcon icon={faTrophy} size="3x" className="achievement-icon"/>
                    <h3>EY Databeats Hackathon 2024</h3>
                    <p className="achievement-type">Competition Winner</p>
                    <p>Won the EY Databeats Hackathon 2024, demonstrating excellence in data science and AI problem-solving in a competitive environment.</p>
                </div>

                <div className="achievement-card">
                    <FontAwesomeIcon icon={faTrophy} size="3x" className="achievement-icon"/>
                    <h3>UN-ITU Young AI Leader</h3>
                    <p className="achievement-type">Recognition - Berlin Hub</p>
                    <p>Selected as a Young AI Leader by the United Nations International Telecommunication Union (ITU) Berlin Hub, recognizing contributions to AI research and innovation.</p>
                </div>

                <div className="achievement-card">
                    <FontAwesomeIcon icon={faCertificate} size="3x" className="achievement-icon"/>
                    <h3>Research Publications</h3>
                    <p className="achievement-type">Academic Contributions</p>
                    <p>Conducting cutting-edge research in neural network compression and multimodal deep learning, with ongoing work toward conference submissions including NeurIPS.</p>
                </div>

                <div className="achievement-card">
                    <FontAwesomeIcon icon={faCertificate} size="3x" className="achievement-icon"/>
                    <h3>Multi-Institutional Research</h3>
                    <p className="achievement-type">Collaborative Excellence</p>
                    <p>Successfully collaborating across multiple prestigious institutions including Rolls Royce, BTU Cottbus-Senftenberg, TU Berlin, Robert Koch Institute, and Friendship Systems.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Achievements;