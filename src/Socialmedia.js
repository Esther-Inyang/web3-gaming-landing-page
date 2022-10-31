import React from "react";
import { socialLinks } from "./data";
import "./index.css";

const Socialmedia = () => {
  return (
    <section className="social-media-section">
      <div className="social-links-container">
        <ul className="social-links">
          {socialLinks.map((socialLink) => {
            const { id, url, icon } = socialLink;
            return (
              <li key={id} className="social-link-li">
                <a href={url} className="social-link">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Socialmedia;
