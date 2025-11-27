import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MediumIcon from './MediumIcon';
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
            <a href="https://medium.com/@maheshsadupalli" target="_blank" rel="noreferrer"><MediumIcon/></a>
          </div>
          <h1>Mahesh Sadupalli</h1>
          <p>AI/Data science Engineer</p>
          <p>M.Sc. AI @ BTU Cottbus-Senftenberg | BS Data science @ IIT Madras</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/mahesh-sadupalli" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mahesh-sadupalli/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:mahesh.sadupalli@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://medium.com/@maheshsadupalli" target="_blank" rel="noreferrer"><MediumIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;