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
            date="2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Master Thesis Research</h3>
            <h4 className="vertical-timeline-element-subtitle">Rolls Royce | BTU Cottbus | TU Berlin | Friendship Systems</h4>
            <p>
              Neural Network-Based Data Compression: Implementing autoencoders, Physics-Informed Neural Networks (PINNs), and Graph Neural Networks for industrial simulation data, targeting 20-50x compression ratios with sub-1% reconstruction error.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Student Assistant - Data Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">FG33, Robert Koch Institute, Berlin</h4>
            <p>
              Project HELoCO: ICD-10-GM code integration with Microsoft SQL Server, developing automated ML pipelines for German diagnosis code standardization and epidemiological data processing.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 - June 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Student Assistant - Computer Vision</h3>
            <h4 className="vertical-timeline-element-subtitle">Robert Koch Institute - Zentrum für Künstliche Intelligenz in der Public Health, Wildau</h4>
            <p>
              NeurIPS MedSat Challenge: Involved in a project multimodal deep learning models integrating satellite imagery with healthcare data using computer vision and geospatial analysis techniques for public health predictions.
            </p>
          </VerticalTimelineElement>



          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2024 - Sept 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Student Assistant - Data Analysis</h3>
            <h4 className="vertical-timeline-element-subtitle">FG37, Robert Koch Institute, Berlin</h4>
            <p>
              Statistical analysis for Namibian WHO health data, developed Krankenhaus (German hospital) data matching system, and analyzed pre-COVID healthcare worker datasets for epidemiological research insights.
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
              AWS Infrastructure Management, Docker Containerization, Terraform IaC, CI/CD Pipeline Development with Jenkins, CloudWatch Monitoring, Prometheus Alerting. Maintained 99.8% uptime and reduced deployment time by 66%.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Oct 2022 - Present"
            iconStyle={{ background: '#e91e63', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">M.Sc. Artificial Intelligence</h3>
            <h4 className="vertical-timeline-element-subtitle">BTU Cottbus-Senftenberg, Germany</h4>
            <p>
              Statistics, Mathematics for AI, Algoritm and Data structures, Data Mining, Explainable AI, Scalable ML systems
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Oct 2023 - Present"
            iconStyle={{ background: '#e91e63', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Nebenhörerschaft</h3>
            <h4 className="vertical-timeline-element-subtitle">TU Berlin, Humboldt University Berlin</h4>
            <p>
              Courses attended: Machine Learning, Deep Learning, Python for Machine Learning, Knowledge Graphs in AI and Deep learning& NLP
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
              Concurrent degree program focusing on statistical methods, probability theory, data analysis, and machine learning fundamentals.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2020"
            iconStyle={{ background: '#e91e63', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">UPSC Civil Services Examination</h3>
            <h4 className="vertical-timeline-element-subtitle">Administrative Services, India</h4>
            <p>
              Dedicated preparation for the Union Public Service Commission (UPSC) Civil Services Examination, one of India's most competitive examinations. Rigorous interdisciplinary training in Science & Technology, Political Science, Anthropology, Sociology, Geography, History, Ethics, and International Relations. Cultivated advanced analytical thinking, policy research, and self-directed learning capabilities.
            </p>
          </VerticalTimelineElement>
          

          

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2014"
            iconStyle={{ background: '#e91e63', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech. Electronics & Communication</h3>
            <h4 className="vertical-timeline-element-subtitle">JNTU Hyderabad, India</h4>
            <p>
              Foundation in electronics engineering, communication systems, signal processing, and embedded systems design.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;