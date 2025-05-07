import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/AboutUs">AboutUs</NavLink></li>
        <li><NavLink to="/ReachUs">ReachUs</NavLink></li>
        <li><NavLink to="/Support">Support</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
