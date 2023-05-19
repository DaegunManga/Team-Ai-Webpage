import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useScrollFadeIn } from "../animation.js";

import "./home.css";

function Home() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.4, 20),
  };
  return (
    <div className="title">
      <div className="titletext">
        <h1 {...animatedItem[0]}>Team AI of MANGA</h1>
      </div>
    </div>
  );
}

export default Home;
