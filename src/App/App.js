import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import AboutMe from "../AboutMe/AboutMe";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";


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
