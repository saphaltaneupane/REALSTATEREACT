import React from 'react'
import '../Header/Header.css'
import './Hero.css'
import { useNavigate } from 'react-router-dom';
import { Link, scroller } from "react-scroll";        
import { Link as RouterLink } from "react-router-dom";  

const Hero = () => {
  const Navigate = useNavigate();
  
  const handleclick = () => {
    scroller.scrollTo('property', {
      duration: 500,
      delay: 0,
      smooth: true,
     
    });
  }

  return (
    <section className="hero-wrapper">
      <div className="hero-container h-container">
  
        <div className="hero-left">
          <h1>Find Your Dream Home</h1>
          <p>Beautiful, peaceful, and affordable properties just for you.</p>
          <button className="button" onClick={handleclick}>Explore Now</button>
        </div>

        <div className="hero-right">
          <div className="hero-image-container">
            <img src="./homee.avif" alt="Dream Home" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero