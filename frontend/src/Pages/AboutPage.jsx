import React from "react";
import './AboutPage.css';
import profileimg from './../Assets/Images/image1.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
const AboutPage = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
       
        <div className="col-md-5">
          <img src={profileimg} alt="profile" className="round-img" />
        </div>

        
        <div className="col-md-7">
          <p className="aboutme">
            Hey there! This is Sreevidya, a budding Full-Stack Developer with a keen interest in creating efficient
            and user-friendly applications. I'm a proactive, dedicated, and disciplined individual, 
            who focuses on continuous improvement through adaptability and creativity. 
          </p>
         
          
          
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
