import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import { useScrollFadeIn } from "../animation.js";

import "./projects.css";

function App() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.4, 20),
    1: useScrollFadeIn("up", 1, 0.4, 20),
    2: useScrollFadeIn("up", 1, 0.4, 20),
  };
  return (
    <div>
      <div className="project_header">
        <h1 className="project_title" {...animatedItem[0]}>
          Team AI Projects
        </h1>
        <br />
        <h3 className="project_explain" {...animatedItem[1]}>
          click text to link to project page
        </h3>
      </div>
      <div className="projects" {...animatedItem[2]}>
        <ul className="project_dot">
          <Link to="Pylearn" className="tltle-text">
            <li className="project-text">Learning Python with baekjoon</li>
          </Link>

          <Link to="Chatbot" className="tltle-text">
            <li className="project-text">Chatbot</li>
          </Link>
          <Link to="Stt" className="tltle-text">
            <li className="project-text">STT</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default App;
