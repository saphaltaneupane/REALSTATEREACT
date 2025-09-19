import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>About <span>Us</span></h1>
          <p>Your trusted partner in finding your dream property.</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="about-intro">
        <div className="about-intro-text">
          <h2>Who We Are</h2>
          <p>
            We are a leading real estate platform dedicated to helping you find the
            perfect home, apartment, or property investment. With years of
            experience in the market, our team ensures transparency, trust, and
            satisfaction at every step of your journey.
          </p>
        </div>
        <div className="about-intro-img">
          <img src="/home.avif" alt="Real Estate" />
        </div>
      </section>

    
      <section className="about-values">
        <div className="value-card">
          <h3>🏠 Our Mission</h3>
          <p>
            To simplify real estate by offering modern solutions and connecting
            clients with their ideal properties quickly and efficiently.
          </p>
        </div>
        <div className="value-card">
          <h3>🌍 Our Vision</h3>
          <p>
            To become the most trusted real estate brand, making property
            ownership accessible for everyone.
          </p>
        </div>
        <div className="value-card">
          <h3>🤝 Our Values</h3>
          <p>
            Integrity, transparency, and customer satisfaction guide us in
            everything we do.
          </p>
        </div>
      </section>
    </div>
  );
}
