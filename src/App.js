import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Socialmedia from "./Socialmedia";
import "./index.css";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="app-contents">
        <div>
          <Content />
        </div>
        <div className="social-component">
          <div>
            <Socialmedia />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
