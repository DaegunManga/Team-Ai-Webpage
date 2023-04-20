import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import logo from "./image/ailogo.png";
import ldw from "./image/ldw.jpg";

import "./App.css";
import About from "./about/about.js";

function App() {
  return (
    <div className="title">
      <header className="title-header">
        <img src={logo} className="title-logo" alt="logo" />

        <BrowserRouter>
          <Routes>
            <Route path="./about/about.js" element={<About />} />
          </Routes>

          <Link to="About" className="tltle-text">
            About
          </Link>
        </BrowserRouter>
      </header>

      <body>
        <div className="body">
          <img src={ldw} className="body-image" />
          <p></p>
        </div>
      </body>
    </div>
  );
}

export default App;
