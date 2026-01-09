import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ myDishes, setShowMyDishes }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Dheeraj Steelworks</h1>
            <span className="tagline">Steel & Fabrication</span>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
            <ul className="nav-list">
              <li>
                <button onClick={() => scrollToSection("hero")}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("menu")}>
                  Products
                </button>
              </li>
              {/* <li><button onClick={() => scrollToSection('about')}>About</button></li> */}
              <li>
                <button onClick={() => scrollToSection("contact")}>
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowMyDishes(true)}
                  className="my-dishes-btn"
                >
                  My Products{" "}
                  {myDishes.length > 0 &&
                    `(${myDishes.reduce(
                      (total, dish) => total + dish.quantity,
                      0
                    )})`}
                </button>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            {/* <button className="reservation-btn">Reserve Table</button> */}
            <button
              className="mobile-menu-btn menu-btn-relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
              {/* My Dishes counter badge on hamburger menu */}
              {myDishes.length > 0 && (
                <span className="my-dishes-counter-badge">
                  {myDishes.reduce((total, dish) => total + dish.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
