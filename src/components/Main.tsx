import React, { useEffect, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';

function Main() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div className="hero-section">
        {/* Decorative grid pattern */}
        <div className="hero-grid-pattern" />

        {/* Floating accent shapes */}
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />

        <div className={`hero-content ${loaded ? 'hero-loaded' : ''}`}>
          <div className="hero-main">
            <div className="hero-text">
              <h1>
                <span className="hero-line hero-line-1">MAHESH</span>
                <span className="hero-line hero-line-2">SADUPALLI</span>
              </h1>
              <p className="hero-title">AI / Data Science <em>Engineer</em></p>
              <p className="hero-education">M.Sc. Artificial Intelligence @ BTU Cottbus-Senftenberg<br/>Visiting Student @ TU Berlin (Machine Learning, Deep Learning, Python for ML)<br/>BS Data Science @ IIT Madras</p>
            </div>

            <div className="hero-image-block">
              <div className="hero-image-wrapper">
                <img src="https://github.com/mahesh-sadupalli.png" alt="Mahesh Sadupalli" />
              </div>
            </div>
          </div>

          <div className="hero-footer">
            <div className="social_icons">
              <a href="https://github.com/mahesh-sadupalli" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/mahesh-sadupalli/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
              <a href="mailto:mahesh.sadupalli@gmail.com" target="_blank" rel="noreferrer" aria-label="Email"><EmailIcon/></a>
              <a href="https://www.instagram.com/blackforesttlabs/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon/></a>
            </div>
            <div className="hero-scroll-hint">
              <span>Scroll to explore</span>
              <div className="scroll-arrow">
                <div className="scroll-arrow-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
