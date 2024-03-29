import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import AboutMe from "../AboutMe/AboutMe";
import EandE from "../EandE/EandE";
import Techs from "../Techs/Techs";
import Projects from "../Projects/Projects";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/EllerSkills" element={<Techs />}/>
          <Route path="/EllerExperience" element={<EandE />}/>
          <Route path="/EllerProjects" element={<Projects />}/>
          <Route path="/" element={<AboutMe />}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
