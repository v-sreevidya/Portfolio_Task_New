import React from "react";
import { HashRouter } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import HomePage from "./Pages/HomePage";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div>
        <NavbarComponent />

        <HomePage />
      </div>
    </HashRouter>
  );
}

export default App;
