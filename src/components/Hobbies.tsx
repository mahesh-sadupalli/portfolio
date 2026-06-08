import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faBookOpen, faUtensils } from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from './ScrollReveal';
import bicyclePhoto from '../assets/images/bicycle.jpeg';
import '../assets/styles/Hobbies.scss';

const hobbies = [
    {
        icon: faBicycle,
        title: "Cycling",
        description: "Every Sunday afternoon is a two-to-three hour escape into the jungle. Pedalling through Brandenburg's forests is how I reset after a week of training models.",
        color: "#22C55E"
    },
    {
        icon: faBookOpen,
        title: "Reading",
        description: "Love diving into history, anthropology, and spy thrillers. Currently reading The Hitchhiker's Guide to the Galaxy by Douglas Adams — absurdly brilliant.",
        color: "#3B82F6"
    },
    {
        icon: faUtensils,
        title: "Cooking",
        description: "Indian recipes are my specialty, and desserts are where I truly shine. You should try my apricot delight — it's dangerously good.",
        color: "#F59E0B"
    }
];

function Hobbies() {
    return (
        <div className="hobbies-section" id="hobbies">
            <div className="hobbies-inner">
                <ScrollReveal>
                    <span className="section-label">Beyond Code</span>
                    <h1 className="hobbies-heading">Life Outside Work</h1>
                </ScrollReveal>
                <div className="hobbies-layout">
                    <div className="hobbies-grid">
                        {hobbies.map((hobby, index) => (
                            <ScrollReveal key={index} delay={index * 120}>
                                <div className="hobby-card">
                                    <div className="hobby-icon" style={{ background: `${hobby.color}15`, color: hobby.color }}>
                                        <FontAwesomeIcon icon={hobby.icon} />
                                    </div>
                                    <h3>{hobby.title}</h3>
                                    <p>{hobby.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <ScrollReveal delay={150} direction="right">
                        <div className="hobbies-photo">
                            <img src={bicyclePhoto} alt="Mahesh cycling in Germany" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}

export default Hobbies;
