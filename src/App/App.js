import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import AboutMe from "../AboutMe/AboutMe";
import EandE from "../EandE/EandE";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/EllerExperience" element={<EandE />}/>
          <Route path="/" element={<AboutMe />}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
