import React from 'react'
import  './Header.css'
import  '../../index.css'
import { Link } from "react-scroll"; 

const Header = () => {
  return (
      <section className="h-wrapper">
      <div className="h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="h-menu">
          <Link to="property" smooth={true} duration={500}>Property</Link>
          <Link to="contact" smooth={true} duration={500}>Contact us</Link>
         
          <button className="button">
            <Link to="register" smooth={true} duration={500} className="contact">
              Register
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Header