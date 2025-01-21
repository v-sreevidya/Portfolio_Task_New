import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./ProjectPage.css";
import image1 from "./../Assets/Images/image1.jpeg"; 
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
        <h1 className={`myProjects ${typingDone ? "typing-done" : ""}`}>
          Projects I've Been Part Of
        </h1>
      </div>

      <CardGroup>
        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Grievance Management System</Card.Title>
              <Card.Text>
                A website for registering grievance with regards to online shopping. It consisted of User interface,
                supervisor interface and assignee interface.
              </Card.Text>
            </Card.Body>
            <Button>Learn More</Button>
          </Card>
        </div>

        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Implementation of MIL-STD-1553B Bus Controller 
                for the Testing of Avionics Systems</Card.Title>
              <Card.Text>
                A software based implenetation of MIL-STD-1553B Bus Controllert ailored for the testing of
                avionics systems.
              </Card.Text>
            </Card.Body>
            <Button>Learn More</Button>
          </Card>
        </div>

        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>IoT Based Electrical Device Control System</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Card.Text>
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
