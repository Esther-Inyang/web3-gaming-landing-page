import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import hero from "./images/image-web-3-mobile.jpg";
import img1 from "./images/image-retro-pcs.jpg";
import img2 from "./images/image-top-laptops.jpg";
import img3 from "./images/image-gaming-growth.jpg";

function Content() {
  return (
    <main>
      <section className="content-section">
        <h1>content section</h1>
        <section className="hero-section">
          <div className="hero-img-div">
            <img src={hero} alt="hero" className="hero-img" />
          </div>
          <h1>The Bright Future of Web 3.0?</h1>
          <div>
            <p className="texts">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
        </section>
        <section className="whats-new-section">
          <h2 className="title-new">New</h2>

          <div className="new-text">
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <div className="underline"></div>
          </div>

          <div className="new-text">
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
            <div className="underline"></div>
          </div>

          <div className="new-text">
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
            <div className="underline"></div>
          </div>
        </section>

        <section className="product-review-section">
          <div className="review-container">
            <div className="product-img-div">
              <img src={img1} alt="about gaming" className="product-img" />
            </div>
            <div className="review">
              <h4 className="review-number">01</h4>
              <h4 className="product-title">Reviving Retro PCs</h4>
              <p className="review-text">
                What happens when old PCs are given modern upgrade
              </p>
            </div>
          </div>

          <div className="review-container">
            <div className="product-img-div">
              <img src={img2} alt="about gaming" className="product-img" />
            </div>
            <div className="review">
              <h4 className="review-no">02</h4>
              <h4 className="product-title">Top 10 Laptops of 2022</h4>
              <p className="review-text">
                Our best picks for various needs and budgets
              </p>
            </div>
          </div>

          <div className="review-container">
            <div className="product-img-div">
              <img src={img3} alt="about gaming" className="product-img" />
            </div>
            <div className="review">
              <h4 className="review-no">03</h4>
              <h4 className="product-title">The Growth of Gaming</h4>
              <p className="review-text">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </section>

        <div class="attribution">
          Challenge by{" "}
          <Link
            to="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </Link>
          . Coded by{" "}
          <Link to="https://www.github.com/esther-inyang">Your Name Here</Link>.
        </div>
      </section>
    </main>
  );
}

export default Content;
