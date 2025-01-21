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
              <Card.Title>Project Name 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi error rem quia fugiat odio at, magnam doloribus alias
                repellendus corporis veniam iste tempora, eveniet ratione
                quidem. Provident placeat illum fugit?
              </Card.Text>
            </Card.Body>
            <Button>Learn More</Button>
          </Card>
        </div>

        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Project Name 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi error rem quia fugiat odio at, magnam doloribus alias
                repellendus corporis veniam iste tempora, eveniet ratione
                quidem. Provident placeat illum fugit?
              </Card.Text>
            </Card.Body>
            <Button>Learn More</Button>
          </Card>
        </div>

        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Project Name 3</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi error rem quia fugiat odio at, magnam doloribus alias
                repellendus corporis veniam iste tempora, eveniet ratione
                quidem. Provident placeat illum fugit?
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
                Excepturi error rem quia fugiat odio at, magnam doloribus alias
                repellendus corporis veniam iste tempora, eveniet ratione
                quidem. Provident placeat illum fugit?
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
