# Mahesh Sadupalli - AI Research Portfolio 🚀

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## About This Portfolio

Personal portfolio website showcasing AI/ML research projects, technical expertise, and professional experience. Built with React, TypeScript, and SCSS.

**Live Site:** [https://mahesh-sadupalli.github.io/portfolio](https://mahesh-sadupalli.github.io/portfolio) *(Update this after deployment)*

![Portfolio Preview](./src/assets/images/screenshot.png)

## Features

✅ Responsive design optimized for all devices  
✅ Dark/Light mode toggle  
✅ Showcase for AI/ML research projects  
✅ Interactive timeline for career history  
✅ Technical skills visualization  
✅ Contact form integration  

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** SCSS, Material-UI
- **Animations:** React Vertical Timeline
- **Icons:** Font Awesome, Material Icons
- **Deployment:** GitHub Pages

## Project Structure
```
src/
├── components/          # React components
│   ├── Main.tsx        # Hero section
│   ├── Expertise.tsx   # Skills showcase
│   ├── Project.tsx     # Research projects
│   ├── Timeline.tsx    # Career & education
│   ├── Contact.tsx     # Contact form
│   ├── Navigation.tsx  # Navigation bar
│   └── Footer.tsx      # Footer
├── assets/
│   ├── styles/         # SCSS stylesheets
│   └── images/         # Project images
└── App.tsx             # Main application
```

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
    git clone https://github.com/mahesh-sadupalli/portfolio.git
    cd portfolio
```

2. Install dependencies:
```bash
    npm install
```

3. Start the development server:
```bash
    npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view in browser.

The page will hot-reload on edits.

## Customization Guide

### Update Personal Information

- **`Main.tsx`**: Name, title, bio, social links
- **`Expertise.tsx`**: Skills and technical stack
- **`Project.tsx`**: Research projects and descriptions
- **`Timeline.tsx`**: Work experience and education
- **`Contact.tsx`**: Contact form configuration
- **`Footer.tsx`**: Footer links and text

### Add Project Images

1. Place images in `src/assets/images/`
2. Import in `Project.tsx`:
```tsx
   import projectImage from '../assets/images/your-image.png';
```
3. Use in component:
```tsx
   <img src={projectImage} alt="Project Name" />
```

## Deployment to GitHub Pages

1. **Update `package.json`:**
```json
    {
        "homepage": "https://mahesh-sadupalli.github.io/portfolio",
        "scripts": {
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build"
        }
    }
```

2. **Install gh-pages:**
```bash
    npm install --save-dev gh-pages
```

3. **Deploy:**
```bash
    npm run deploy
```

4. **Access:** Your site will be live at `https://mahesh-sadupalli.github.io/portfolio`

## Alternative Deployment Options

- **Netlify:** Drag-and-drop build folder or connect GitHub repo
- **Vercel:** Import GitHub repository for automatic deployments
- **AWS S3 + CloudFront:** Host static site with CDN

## Featured Projects

- **Neural Network Data Compression** - 20-50x compression ratios with PINNs and GNNs
- **GAN Optimization & Deepfake Detection** - 94.2% accuracy on FaceForensics++
- **Neural Code Search with RAG** - 0.78 MRR using contrastive learning
- **Multimodal Deep Learning** - Healthcare prediction with Vision Transformers

## Contact

- **Email:** [mahesh.sadupalli@gmail.com](mailto:mahesh.sadupalli@gmail.com)
- **LinkedIn:** [linkedin.com/in/mahesh-sadupalli](https://linkedin.com/in/mahesh-sadupalli)
- **GitHub:** [github.com/mahesh-sadupalli](https://github.com/mahesh-sadupalli)
- **Location:** Cottbus, Germany

## License

This portfolio is open source and available under the MIT License.

## Acknowledgments

Portfolio template originally created by [Yuji Sato](https://github.com/yujisatojr/react-portfolio-template). Customized and extended for AI research showcase.

---

**⭐ If you found this portfolio helpful, consider giving it a star!**