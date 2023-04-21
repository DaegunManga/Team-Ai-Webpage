import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./home.css";
import ldw from "../image/ldw.jpg";

function Home() {
  return (
    <div className="title">
      <body>
        <div className="body">
          <p>home</p>
          <img src={ldw} className="title-logo" alt="logo" />
        </div>
      </body>
    </div>
  );
}

export default Home;
