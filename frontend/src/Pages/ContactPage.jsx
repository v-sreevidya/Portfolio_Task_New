import React from 'react';
import './ContactPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const ContactPage = () => {

  return (
   

      <div className="containernew">
        <h2 className="text-center">Contact Me</h2>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sreevidya-v"
      >
          <FontAwesomeIcon icon={faLinkedinIn} size="3x" className="linkedin" />
          </a>
          <a href="mailto:sreevidya.vijayan@tarento.com">
          <FontAwesomeIcon icon={faEnvelope} size="3x" className="mail" />
          </a>
          <a href="https://github.com/v-sreevidya" >
          <FontAwesomeIcon icon={faGithub} size="3x" className="github" />
          </a>
          
        </div>
      </div>
    
  );
};

export default ContactPage;