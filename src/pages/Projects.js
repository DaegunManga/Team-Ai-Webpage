import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import { useScrollFadeIn } from "../animation.js";

import "./projects.css";

function App() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.4, 20),
  };
  return (
    <div>
      <div className="project_header">
        <h1 className="project_title" {...animatedItem[0]}>
          Team AI Projects
        </h1>
      </div>
      <div className="projects">
        <ol>
          <ul>Chatbot</ul>
          <ul>STT</ul>
        </ol>
      </div>
    </div>
  );
}

export default App;
