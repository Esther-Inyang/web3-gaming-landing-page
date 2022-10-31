import React from "react";
import img1 from "./images/image-gaming-growth.jpg";
import "./index.css";

function Content() {
  return (
    <main>
      <section className="content-section">
        <h1>content section</h1>

        <img src={img1} alt="about gaming" className="img1" />
      </section>
    </main>
  );
}

export default Content;
