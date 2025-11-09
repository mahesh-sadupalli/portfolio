import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Master Thesis Research</h3>
            <h4 className="vertical-timeline-element-subtitle">Rolls Royce | BTU Cottbus | TU Berlin | Friendship Systems</h4>
            <p>
              Neural Network-Based Data Compression, Deep Learning, PyTorch, Physics-Informed Neural Networks, Graph Neural Networks
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Working Student - Data Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Robert Koch Institute, Berlin</h4>
            <p>
              Multimodal Deep Learning, Computer Vision, PyTorch, Vision Transformers, Statistical Analysis, SQL Database Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Oct 2022 - Mar 2026 (Expected)"
            iconStyle={{ background: '#e91e63', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">M.Sc. Artificial Intelligence</h3>
            <h4 className="vertical-timeline-element-subtitle">BTU Cottbus-Senftenberg, Germany</h4>
            <p>
              Visiting Student at TU Berlin (Oct 2023-Present). Focus: Neural Networks, Computer Vision, Deep Learning, Machine Learning
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sept 2023 - Aug 2027 (Expected)"
            iconStyle={{ background: '#e91e63', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">BS Data Science</h3>
            <h4 className="vertical-timeline-element-subtitle">IIT Madras, Online</h4>
            <p>
              Concurrent degree program focusing on statistical methods, data analysis, and machine learning fundamentals
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2018 - May 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cloud Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">HPC Consulting Pvt Ltd, Delhi</h4>
            <p>
              AWS Infrastructure, Docker, Terraform, CI/CD Pipelines, Kubernetes, Jenkins, CloudWatch, Prometheus
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sept 2007 - Jun 2011"
            iconStyle={{ background: '#e91e63', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech. Electronics & Communication</h3>
            <h4 className="vertical-timeline-element-subtitle">JNTU Hyderabad, India</h4>
            <p>
              Foundation in electronics, communication systems, and signal processing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;