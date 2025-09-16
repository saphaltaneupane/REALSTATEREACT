import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
   
        <div className="footer-section">
          <img src="./logo.png" alt="logo" width={100} />
          <p>
            Homies RealState brings you the best properties at affordable prices. 
            Your dream home is just a step away.
          </p>
        </div>

      
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#property">Property</a></li>
            
      
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Kathmandu, Putalisadak</p>
          <p>📞 9876543210</p>
          <p>✉ hello@homies.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Homies RealState. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
