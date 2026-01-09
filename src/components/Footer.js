import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <h3>🏭 Dheeraj Steelworks</h3>
              <p>Building Stronger Structures</p>
            </div>
            <p className="footer-description">
              Your trusted destination for quality steel products, fabrication
              solutions, and construction essentials from leading brands.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">
                📘
              </a>
              <a href="#" className="social-link">
                📷
              </a>
              <a href="#" className="social-link">
                🐦
              </a>
              <a href="#" className="social-link">
                📺
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📍 Chandan Chowk, Nimbahera</p>
              <p>📞 +91 9460702461</p>
              <p>🕒 Mon–Sun: 10:30 AM – 9:30 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Dheeraj Steelworks. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
