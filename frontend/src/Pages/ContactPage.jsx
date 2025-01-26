import React, { useState } from "react";
import './ContactPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    let validationErrors = {};
    let isValid = true;
    if (!name) {
      validationErrors.name = "Full name is required.";
      isValid = false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      validationErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (!message) {
      validationErrors.message = "Message is required.";
      isValid = false;
    }

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const userData = {
      name: name,
      email: email,
      message: message,
    };

    axios
      .post('http://localhost:8080/api/users', userData)
      .then((response) => {
        
        setName(''); 
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending message!', error);
       
      });
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center">Any Comments?</h2>
        <form className="forms" onSubmit={handleSubmit}>
          <div className="detail">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="detail">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
             {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="detail">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Write your message"
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            ></textarea>
            {errors.message && <div className="error">{errors.message}</div>}
          </div>
          <button type="submit" className="btn btn-primary w-50">
            Submit
          </button>
        </form>
      </div>

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
    </>
  );
};

export default ContactPage;