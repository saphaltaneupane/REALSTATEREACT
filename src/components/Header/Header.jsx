import React from "react";
import { Link } from "react-scroll";        
import { Link as RouterLink } from "react-router-dom";  
import "./Header.css";


const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-container">
        <img src="./logo.png" alt="logo" className="logo" />

        <nav className="nav-menu">
          <Link to="property" smooth={true} duration={500} className="nav-link">
            Property
          </Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            Contact us
          </Link>
          <Link to="about" smooth={true} duration={500} className="nav-link">About us</Link>
          <RouterLink to="/login" className="nav-link">
            Login
          </RouterLink>
          <RouterLink to="/register" className="btn-register">
            Register
          </RouterLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
