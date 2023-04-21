import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./App.css";
import About from "./pages/About.js";
import Nav from "./pages/Nav.js";
import Home from "./pages/home.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
