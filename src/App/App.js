import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import AboutMe from "../AboutMe/AboutMe";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<AboutMe />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
