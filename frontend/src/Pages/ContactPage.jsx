import React from "react";
import './ContactPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
 const ContactPage = () =>{
    return (
      <>
    <div className="container ">
      <h2 className="text-center ">Any Comments?</h2>
      <form className="forms">  
        <div className="detail">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="detail">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="detail">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea className="form-control" id="message" rows="4" placeholder="Write your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-50">
          Submit
        </button>
      </form>
    </div>


    <div className="containernew ">
    <h2 className="text-center ">Contact Me</h2>
    <div className="social-icons">
                      <FontAwesomeIcon icon={faLinkedinIn} size="3x" className="linkedin" />
                      <FontAwesomeIcon icon={faEnvelope} size="3x" className="mail"/>
                      <FontAwesomeIcon icon={faGithub} size="3x" className="github"/>

                      
                      </div>


    </div>
    
    </>
  );
};
 
 export default ContactPage;