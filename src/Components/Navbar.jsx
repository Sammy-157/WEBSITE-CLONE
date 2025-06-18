import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-main">
    <nav className="navbar-container">
      <div className="nav-left">
        <div className="ahoma-image">
        <img src="src/assets/Ahoma logo.png" alt="ahoma-logo"></img>
      </div>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/AboutUs">AboutUs</NavLink>
        </li>
        <li>
          <NavLink to="/ReachUs">ReachUs</NavLink>
        </li>
        <li>
          <NavLink to="/Support">Support</NavLink>
        </li>
      </ul>
      <div className="nav-right">
        <button className="signin-button">Sign in </button>
        <button className="Started-button">Get Started</button>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
