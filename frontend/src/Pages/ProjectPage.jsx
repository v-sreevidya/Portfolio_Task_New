
import { Button, Card, CardGroup } from "react-bootstrap";
import "./ProjectPage.css";
import image1 from "./../Assets/Images/grievance.jpeg";
import finalprojectimg from './../Assets/Images/finalproject.png';
import iotimg from './../Assets/Images/iot.png';
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  
  
  const navigate = useNavigate();


  const handleNavigate = (id) => {
   
    navigate(`/projects/${id}`);
  };

  return (
    <div className="ProjectPage">
      <div className="myProjectContainer">
        <h3>
          Projects I've Been Part Of
        </h3>
      </div>

      <CardGroup>
        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>GRIEVANCE MANAGEMENT SYSTEM</Card.Title>
            </Card.Body>
            <Button 
            style={{
              backgroundColor: '#8CC84B',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease',
            }} onClick={() => handleNavigate('4d4df5b8-59e3-4569-8fab-7644bef7234f')} >Learn More</Button>
          </Card>
        </div>

        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={finalprojectimg} />
            <Card.Body>
              <Card.Title>IMPLEMENTATION OF MIL-STD-1553B BUS CONTROLLER FOR THE TESTING OF AVIONICS SYSTEMS</Card.Title>
            </Card.Body>
            <Button 
             style={{
              backgroundColor: '#8CC84B',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease',
            }}onClick={() => handleNavigate('5baa092c-48d1-496b-95c1-a59852e2265d')}>Learn More</Button>
          </Card>
        </div>

        <div className="custom-container">
          <Card className="styling-card">
            <Card.Img variant="top" src={iotimg} />
            <Card.Body>
              <Card.Title>IoT BASED ELECTRICAL DEVICE CONTROL SYSTEM</Card.Title>
            </Card.Body>
            <Button 
             style={{
              backgroundColor: '#8CC84B',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease',
            }}onClick={() => handleNavigate('9cdb25a3-6263-4ae3-a35a-3f85de40e7be')}>Learn More</Button>
          </Card>
        </div>
      </CardGroup>
    </div>
  );
};

export default ProjectPage;
