import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import ProjectPage from "./Pages/ProjectPage";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
