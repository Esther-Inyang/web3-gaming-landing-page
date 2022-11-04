import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
// import hero from "./images/image-web-3-mobile.jpg";
import img1 from "./images/image-retro-pcs.jpg";
import img2 from "./images/image-top-laptops.jpg";
import img3 from "./images/image-gaming-growth.jpg";
import Socialmedia from "./Socialmedia";

function Content() {
  return (
    <main>
      <section className="content-section">
        <div className="content-center">
          <div className="hero-new-div">
            <section className="hero-section">
              <div className="hero-img-div">
                {/* <img src={hero} alt="hero" className="hero-img" /> */}
              </div>
              <div className="trending-section">
                <h1 className="trending-title" id="trending">
                  The Bright Future of Web 3.0?
                </h1>

                <div className="trending-text-div">
                  <p className="trending-text">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </p>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>
            </section>
            <section className="whats-new-section">
              <h2 className="title-new" id="new">
                New
              </h2>

              <div className="new-section__details">
                <h3>Hydrogen VS Electric Cars</h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                <div className="underline"></div>
              </div>

              <div className="new-section__details">
                <h3>The Downsides of AI Artistry</h3>
                <p>
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
                <div className="underline"></div>
              </div>

              <div className="new-section__details">
                <h3>Is VC Funding Drying Up?</h3>
                <p>
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </div>
            </section>
          </div>

          <section className="product-category-section">
            <div className="product-container">
              <div className="product-img-div">
                <img src={img1} alt="about gaming" className="product-img" />
              </div>
              <div className="product-details" id="categories">
                <h4 className="product-number">01</h4>
                <h4 className="product-title">Reviving Retro PCs</h4>
                <p className="product-text">
                  What happens when old PCs are given modern upgrade
                </p>
              </div>
            </div>

            <div className="product-container">
              <div className="product-img-div">
                <img src={img2} alt="about gaming" className="product-img" />
              </div>
              <div className="product-details">
                <h4 className="product-number">02</h4>
                <h4 className="product-title">Top 10 Laptops of 2022</h4>
                <p className="product-text">
                  Our best picks for various needs and budgets
                </p>
              </div>
            </div>

            <div className="product-container">
              <div className="product-img-div">
                <img src={img3} alt="about gaming" className="product-img" />
              </div>
              <div className="product-details">
                <h4 className="product-number">03</h4>
                <h4 className="product-title">The Growth of Gaming</h4>
                <p className="product-text">
                  How the pandemic has sparked fresh opportunities.
                </p>
              </div>
            </div>
          </section>

          <div className="social-in-content">
            <div>
              <Socialmedia />
            </div>
          </div>
        </div>
        <div className="attribution">
          <span>Challenge by</span>
          <Link
            to="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="attribution-link"
          >
            Frontend Mentor
          </Link>
          <span> . Coded by</span>
          <Link
            to="https://www.github.com/esther-inyang"
            className="attribution-link"
          >
            Dev Esti
          </Link>
          <span>.</span>
        </div>
      </section>
    </main>
  );
}

export default Content;
