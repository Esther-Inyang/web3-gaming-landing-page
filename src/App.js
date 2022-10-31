import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Socialmedia from "./Socialmedia";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <div className="app-contents">
        <div className="Router-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
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
