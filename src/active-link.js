import { NavLink } from "react-router-dom";

// Note: isActive is destructured from default <NavLink> element
const navLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "600px" : "normal",
    color: isActive ? "pink" : "black",
  };
};

<nav>
  <NavLink style={navLinkStyles} end to="/">
    HOME
  </NavLink>
  <NavLink style={navLinkStyles} to="/about">
    ABOUT
  </NavLink>
  <NavLink style={navLinkStyles} to="/contact">
    CONTACT
  </NavLink>
  <NavLink style={navLinkStyles} to="/services">
    SERVICES
  </NavLink>
</nav>;
