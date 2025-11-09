import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/mahesh-sadupalli" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/mahesh-sadupalli/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:mahesh.sadupalli@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>Mahesh Sadupalli © 2025 | AI Research Scientist | Built with React & TypeScript</p>
    </footer>
  );
}

export default Footer;