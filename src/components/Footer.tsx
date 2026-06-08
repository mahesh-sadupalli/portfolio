import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Mahesh Sadupalli</h3>
            <p>AI / Data Science Engineer</p>
          </div>
          <div className="footer-social">
            <a href="https://github.com/mahesh-sadupalli" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mahesh-sadupalli/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
            <a href="mailto:mahesh.sadupalli@gmail.com" target="_blank" rel="noreferrer" aria-label="Email"><EmailIcon/></a>
            <a href="https://www.instagram.com/blackforesttlabs/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon/></a>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p>&copy; 2026 Mahesh Sadupalli. All rights reserved.</p>
          <p className="footer-built">Built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;