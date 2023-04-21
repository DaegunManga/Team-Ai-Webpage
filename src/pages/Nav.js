import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./nav.css";
import logo from "../image/ailogo.png";

function App() {
  return (
    <div>
      <header className="title-header">
        <Link to="/" className="tltle-text">
          <img src={logo} className="title-logo" alt="logo" />
        </Link>

        <Link to="About" className="tltle-text">
          About
        </Link>
        <Link to="Projects" className="tltle-text">
          Projects
        </Link>
      </header>
    </div>
  );
}

export default App;
