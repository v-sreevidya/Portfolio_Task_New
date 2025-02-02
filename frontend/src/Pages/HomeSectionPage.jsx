import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faNode,
  faGit,
  faGithub,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import "./HomeSectionPage.css";

const HomeSectionPage = () => {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingDone(true);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1 className={`myProjects ${typingDone ? "typing-done" : ""}`}>
        Hello! This is Sreevidya V
      </h1>
      <h3>Full-Stack Developer</h3>
      <h5>Take a look around, and feel free to reach out!</h5>
      <div className="tech-icons">
        <FontAwesomeIcon icon={faReact} size="3x" />
        <FontAwesomeIcon icon={faHtml5} size="3x" />
        <FontAwesomeIcon icon={faCss3Alt} size="3x" />
        <FontAwesomeIcon icon={faJsSquare} size="3x" />
        <FontAwesomeIcon icon={faNode} size="3x" />
        <FontAwesomeIcon icon={faGit} size="3x" />
        <FontAwesomeIcon icon={faGithub} size="3x" />
        <FontAwesomeIcon icon={faJava} size="3x" />
      </div>
    </div>
  );
};

export default HomeSectionPage;
