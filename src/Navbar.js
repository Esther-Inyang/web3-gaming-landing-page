import React, { useState, useRef, useEffect } from "react";
// import { menuLinks } from "./data";
import { FaBars } from "react-icons/fa";
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
    const menuLinksHeight = menuRef.current.getBoundingClientRect().height;

    if (showMenu) {
      menuContainerRef.current.style.height = `${menuLinksHeight}px`;
    } else {
      menuContainerRef.current.style.height = "0px";
    }
  }, [showMenu]);

  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     fontWeight: isActive ? "600px" : "200px",
  //     color: isActive ? "pink" : "black",
  //   };
  // };

  return (
    <header className="header">
      <section className="nav-section">
        <div ref={menuContainerRef} className="nav-container">
          <nav ref={menuRef} className="nav">
            <Link to="#" smooth className="link">
              HOME
            </Link>
            <Link to="#new" smooth className="link">
              NEW
            </Link>
            <Link to="#new" smooth className="link">
              POPULAR
            </Link>
            <Link to="#trending" smooth className="link">
              TRENDING
            </Link>
            <Link to="#categories" smooth className="link">
              CATEGORIES
            </Link>
          </nav>
        </div>

        <div className="logo-bars-container">
          <img src={logo} alt="logo" className="logo" />
          <button
            className="toggle-menu-bars"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaBars />
          </button>
        </div>

        {/* <div className="menu-container" ref={menuContainerRef}>
            <ul className="menu-ul" ref={menuRef}>
              {menuLinks.map((link) => {
                const { id, path, text } = link;
                return (
                  <li key={id} className="menu-li">
                    <a href={path} className="menu-link">
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div> */}
      </section>
      <div className="menu-social-container">
        <Socialmedia />
      </div>
    </header>
  );
}

export default Navbar;
