import React from 'react'
import '../Header/Header.css'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container h-container">
  {/* left */}
        <div className="hero-left">
          <h1>Find Your Dream Home</h1>
          <p>Beautiful, peaceful, and affordable properties just for you.</p>
          <button className="button">Explore Now</button>
        </div>

      {/* right */}
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
