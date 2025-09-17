import React from "react";
import { Link } from "react-scroll";        // for scroll
import { Link as RouterLink } from "react-router-dom";  // for routing
import "./Header.css";
import "../../index.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="h-menu">
          <Link to="property" smooth={true} duration={500}>Property</Link>
          <Link to="contact" smooth={true} duration={500}>Contact us</Link>

          
            <RouterLink to="/login" className="contact">
            Login
            </RouterLink>
             <button className="button">
            <RouterLink to="/register" className="contact">
              Register
            </RouterLink>
          </button>
      
        </div>
      </div>
    </section>
  );
};

export default Header;
