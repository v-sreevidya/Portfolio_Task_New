import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./ProjectPage.css";
import image1 from "./../Assets/Images/grievance.jpeg";
import finalprojectimg from './../Assets/Images/finalproject.png';
import iotimg from './../Assets/Images/iot.png';
const ProjectPage = () => {
  const [typingDone, setTypingDone] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingDone(true);
    });
    
    return () => clearTimeout(timer);
  }, []);


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
            <Button>Learn More</Button>
          </Card>
        </div>

        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={finalprojectimg} />
            <Card.Body>
              <Card.Title>IMPLEMENTATION OF MIL-STD-1553B BUS CONTROLLER FOR THE TESTING OF AVIONICS SYSTEMS</Card.Title>
              
            </Card.Body>
            <Button>Learn More</Button>
          </Card>
        </div>

        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={iotimg} />
            <Card.Body>
              <Card.Title>IoT BASED ELECTRICAL DEVICE CONTROL SYSTEM</Card.Title>
              
            </Card.Body>
            <Button>Learn More</Button>
          </Card>
        </div>

        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Project Name 4</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Card.Text>
            </Card.Body>
            <Button>Learn More</Button>
          </Card>
        </div>
      </CardGroup>
    </div>
  );
};

export default ProjectPage;
