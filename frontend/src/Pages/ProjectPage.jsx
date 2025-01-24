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
            <Button onClick={() => handleNavigate('f82c26cf-2245-41ee-84d3-1f61cd678b0e')}>Learn More</Button>
          </Card>
        </div>

        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={finalprojectimg} />
            <Card.Body>
              <Card.Title>IMPLEMENTATION OF MIL-STD-1553B BUS CONTROLLER</Card.Title>
            </Card.Body>
            <Button onClick={() => handleNavigate('project2')}>Learn More</Button>
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
