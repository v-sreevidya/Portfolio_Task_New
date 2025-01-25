import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./ProjectPage.css";
import image1 from "./../Assets/Images/grievance.jpeg";
import finalprojectimg from './../Assets/Images/finalproject.png';
import iotimg from './../Assets/Images/iot.png';
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const [typingDone, setTypingDone] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingDone(true);
    });
    
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (id) => {
   
    navigate(`/projects/${id}`);
  };

  return (
    <div className="ProjectPage">
      <div className="myProjectContainer">
        <p className={`myProjects ${typingDone ? "typing-done" : ""}`}>
          Projects I've Been Part Of
        </p>
      </div>

      <CardGroup>
        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>GRIEVANCE MANAGEMENT SYSTEM</Card.Title>
            </Card.Body>
            <Button onClick={() => handleNavigate('1f2a99da-8139-4eca-a138-1d5f88f6aaeb')}>Learn More</Button>
          </Card>
        </div>

        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={finalprojectimg} />
            <Card.Body>
              <Card.Title>IMPLEMENTATION OF MIL-STD-1553B BUS CONTROLLER</Card.Title>
            </Card.Body>
            <Button onClick={() => handleNavigate('5c34ac79-ceb5-480e-98cd-b5e8a043b719')}>Learn More</Button>
          </Card>
        </div>

        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={iotimg} />
            <Card.Body>
              <Card.Title>IoT BASED ELECTRICAL DEVICE CONTROL SYSTEM</Card.Title>
            </Card.Body>
            <Button onClick={() => handleNavigate('project3')}>Learn More</Button>
          </Card>
        </div>
      </CardGroup>
    </div>
  );
};

export default ProjectPage;
