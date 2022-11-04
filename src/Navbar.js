import React, { useState, useRef, useEffect } from "react";
// import { menuLinks } from "./data";
import menuBars from "./images/icon-menu.svg";
import menuBarsClose from "./images/icon-menu-close.svg";
// import { FaBars } from "react-icons/fa";
import logo from "./images/logo.svg";
import "./index.css";
import Socialmedia from "./Socialmedia";
// import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuContainerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    // NOTE: The commented codes are used if the height of the menu container DEPENDS on the number of links in it and keeps growing if new items are added // WHILE: The uncommented codes means the menu container depends on the viewport height

    // const menuLinksHeight = menuRef.current.getBoundingClientRect().height;

    if (showMenu) {
      // menuContainerRef.current.style.height = `${menuLinksHeight}px`;

      menuContainerRef.current.style.height = `100vh`;
    } else {
      menuContainerRef.current.style.height = "0px";
    }
  }, [showMenu]);

  return (
    <header className="header">
      <section className="nav-section">
        <div className="logo-bars-container">
          <div className="logo-div" id="home">
            <img src={logo} alt="logo" className="logo" />
          </div>

          <div className="open-menu-bars-div">
            <img
              src={menuBars}
              alt="menu bars icon"
              className="open-menu-bars"
              onClick={() => setShowMenu(true)}
            />
          </div>
        </div>

        <div ref={menuContainerRef} className="nav-container">
          <nav ref={menuRef} className="nav">
            <div className="close-menu-icon-div">
              <img
                src={menuBarsClose}
                alt="menu bars icon"
                className="close-menu-icon"
                onClick={() => setShowMenu(false)}
              />
            </div>

            <div className="menu" onClick={() => setShowMenu(false)}>
              <Link to="#home" smooth className="link">
                Home
              </Link>
              <Link to="#new" smooth className="link">
                New
              </Link>
              <Link to="#new" smooth className="link">
                Popular
              </Link>
              <Link to="#trending" smooth className="link">
                Trending
              </Link>
              <Link to="#categories" smooth className="link">
                Categories
              </Link>
            </div>

            <div className="menu-social-container social-in-navbar">
              <Socialmedia />
            </div>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Navbar;
