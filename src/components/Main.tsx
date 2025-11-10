import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://github.com/mahesh-sadupalli.png" alt="Mahesh Sadupalli" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/mahesh-sadupalli" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mahesh-sadupalli/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:mahesh.sadupalli@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Mahesh Sadupalli</h1>
          <p>AI Research Scientist | M.Sc. AI @ BTU Cottbus-Senftenberg</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/mahesh-sadupalli" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mahesh-sadupalli/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:mahesh.sadupalli@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;