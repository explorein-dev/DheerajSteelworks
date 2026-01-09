import React from 'react';
import './About.css';

const About = () => {
  const team = [
    {
      name: "Chef Marco Rossi",
      role: "Executive Chef",
      bio: "Award-winning chef with 15+ years of experience in fine dining",
      image: "👨‍🍳",
      specialties: ["Italian Cuisine", "French Techniques", "Farm-to-Table"]
    },
    {
      name: "Sarah Chen",
      role: "Pastry Chef",
      bio: "Creates exquisite desserts that are both beautiful and delicious",
      image: "👩‍🍳",
      specialties: ["French Pastries", "Chocolate Art", "Seasonal Desserts"]
    },
    {
      name: "David Thompson",
      role: "Sommelier",
      bio: "Expert wine pairing and curated selection from around the world",
      image: "🍷",
      specialties: ["Wine Pairing", "Craft Cocktails", "Wine Education"]
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "50+", label: "Awards Won" },
    { number: "1000+", label: "Happy Customers" },
    { number: "100%", label: "Fresh Ingredients" }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Gourmet Haven</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Founded in 2008, Gourmet Haven began as a small family restaurant with a big dream: 
              to create extraordinary dining experiences that celebrate the art of cooking and 
              the joy of sharing meals with loved ones.
            </p>
            <p>
              Today, we continue to honor our roots while embracing innovation, using only the 
              finest ingredients sourced from local farmers and artisans. Our commitment to 
              excellence has earned us recognition as one of the city's premier dining destinations.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🌱</span>
                <div>
                  <h4>Farm-to-Table</h4>
                  <p>Fresh ingredients from local farms</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">👨‍🍳</span>
                <div>
                  <h4>Expert Chefs</h4>
                  <p>Award-winning culinary team</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">🍷</span>
                <div>
                  <h4>Wine Selection</h4>
                  <p>Curated wines from around the world</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="image-grid">
              <div className="image-item large">
                <span className="image-emoji">🍽️</span>
                <div className="image-overlay">
                  <h4>Fine Dining</h4>
                  <p>Elegant atmosphere</p>
                </div>
              </div>
              <div className="image-item">
                <span className="image-emoji">👨‍🍳</span>
                <div className="image-overlay">
                  <h4>Expert Chefs</h4>
                </div>
              </div>
              <div className="image-item">
                <span className="image-emoji">🍷</span>
                <div className="image-overlay">
                  <h4>Wine Cellar</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="values-section">
          <h3>Our Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <span className="value-icon">🌟</span>
              <h4>Excellence</h4>
              <p>We strive for perfection in every dish we serve</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🤝</span>
              <h4>Community</h4>
              <p>Supporting local farmers and artisans</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🌍</span>
              <h4>Sustainability</h4>
              <p>Eco-friendly practices and responsible sourcing</p>
            </div>
            <div className="value-item">
              <span className="value-icon">💝</span>
              <h4>Hospitality</h4>
              <p>Making every guest feel special and welcome</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
