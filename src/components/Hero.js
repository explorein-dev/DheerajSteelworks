import React from 'react';
import './Hero.css';
import RonakElecricals from '../assets/images/RonakElecricals.png';
import { scrollToSection } from '../components/Header.js'; 


const Hero = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <br/> <span className="highlight"> Dheeraj Steelworks</span>
            </h1>
            <p className="hero-subtitle">
              Your Trusted Partner in Steel & Fabrication. Providing Steel Solutions for a Stronger Tomorrow.
            </p>
                          <div className="hero-features">
                <div className="feature">
                  <span className="feature-icon">🔌</span>
                  <span>Wide Range of Products</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">⚡</span>
                  <span>Trusted Brands</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🛠️</span>
                  <span>Quality & Reliability</span>
                </div>
              </div>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('menu')}>View Products</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card">
                <img className="rest-img" src={RonakElecricals} alt="Ronak Electricals" width={400} border-radius="20px"/>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;
