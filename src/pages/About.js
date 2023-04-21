import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useScrollFadeIn } from "../animation.js";

import "./about.css";
import org from "../image/organization.png";
import github from "../image/github.png";

function App() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.4, 20),
    1: useScrollFadeIn("up", 1, 0.4, 20),
    2: useScrollFadeIn("up", 1, 0.4, 20),
    3: useScrollFadeIn("up", 1, 0.4, 20),
    4: useScrollFadeIn("up", 1, 0.4, 20),
    5: useScrollFadeIn("up", 1, 0.4, 20),
    6: useScrollFadeIn("up", 1, 0.4, 20),
    7: useScrollFadeIn("up", 1, 0.4, 20),
    8: useScrollFadeIn("up", 1, 0.4, 20),
  };
  return (
    <div className="about">
      <body>
        <div className="body">
          <h1 {...animatedItem[0]}>Organization chart of Team</h1>
          <img src={org} {...animatedItem[1]} className="org" alt="logo" />
        </div>

        <div className="introduction">
          <div {...animatedItem[2]} className="dowon">
            <h2>Dowon Lee</h2>
            <h4>Chief director</h4>
            <a
              href="https://github.com/II-DW/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} className="githubimg" alt="face" />
            </a>
          </div>

          <div {...animatedItem[3]} className="juho">
            <h2>Juho Lee</h2>
            <h4>Director</h4>
            <a
              href="https://github.com/2ssunny/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} className="githubimg" alt="face" />
            </a>
          </div>

          <div {...animatedItem[4]} className="changbin">
            <h2>Changbin Lim</h2>
            <h4>Member</h4>
            <a
              href="https://github.com/DGchangbin"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} className="githubimg" alt="face" />
            </a>
          </div>

          <div {...animatedItem[5]} className="minkyu">
            <h2>Minkyu Kwon</h2>
            <h4>Member</h4>
            {/* <a
              href="https://github.com/DGchangbin"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} className="githubimg" alt="face" />
            </a> */}
          </div>

          <div {...animatedItem[6]} className="seungmo">
            <h2>Seungmo Im</h2>
            <h4>Member</h4>
            <a
              href="https://github.com/ImSeungMo"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} className="githubimg" alt="face" />
            </a>
          </div>

          <div {...animatedItem[7]} className="doyoung">
            <h2>Doyoung Kim</h2>
            <h4>Member</h4>
            <a
              href="https://github.com/Kimdoyeung"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} className="githubimg" alt="face" />
            </a>
          </div>

          <div {...animatedItem[8]} className="seunghan">
            <h2>Seunghan Park</h2>
            <h4>Member</h4>
            <a
              href="https://github.com/tmdgks1310"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} className="githubimg" alt="face" />
            </a>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
