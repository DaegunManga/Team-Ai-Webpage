import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./App.css";
import About from "./pages/About.js";
import Nav from "./pages/Nav.js";
import Home from "./pages/home.js";
import Projects from "./pages/Projects.js";
import Pylearn from "./pages/Projects/pylearn.js";
import Chatbot from "./pages/Projects/chatbot.js";
import Stt from "./pages/Projects/stt.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
          <Route path="/pylearn" element={<Pylearn />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/stt" element={<Stt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
