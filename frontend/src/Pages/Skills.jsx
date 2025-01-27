import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJsSquare, faNode, faGit, faGithub, faJava } from '@fortawesome/free-brands-svg-icons';

const SkillsPage = () => {
  return (
    <div className="skills-page">
      
      <div className="skills-container">
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <div className="skills">
            <div className="skill-item">
              <FontAwesomeIcon icon={faReact} size="5x" />
              <p>React</p>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faHtml5} size="5x" />
              <p>HTML5</p>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faCss3Alt} size="5x" />
              <p>CSS3</p>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faJsSquare} size="5x" />
              <p>JavaScript</p>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faNode} size="5x" />
              <p>Node.js</p>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faGit} size="5x" />
              <p>Git</p>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faGithub} size="5x" />
              <p>GitHub</p>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faJava} size="5x" />
              <p>Java</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
