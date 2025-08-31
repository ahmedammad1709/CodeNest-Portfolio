import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Innovative Digital <span className="neon-text">Solutions</span></h1>
          <p className="tagline">Transforming ideas into exceptional digital experiences</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn primary-btn">Get Started</a>
            <a href="#services" className="btn secondary-btn">Our Services</a>
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;