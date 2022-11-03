import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="app-contents">
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
