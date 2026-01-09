import React from 'react';
import './MyDishes.css';

const MyDishes = ({ myDishes, removeFromMyDishes, updateQuantity, setShowMyDishes }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const getTotalPrice = () => {
    return myDishes.reduce((total, dish) => total + (dish.price * dish.quantity), 0);
  };

  const getTotalItems = () => {
    return myDishes.reduce((total, dish) => total + dish.quantity, 0);
  };

  if (myDishes.length === 0) {
    return (
      <section className="my-dishes section">
        <div className="container">
          <div className="my-dishes-header">
            <h2 className="section-title">My Products</h2>
            <button 
              className="close-btn"
              onClick={() => setShowMyDishes(false)}
            >
              ✕
            </button>
          </div>
          <div className="empty-cart">
            <span className="empty-icon">🔌</span>
            <h3>Your product list is empty</h3>
            <p>Add some products to get started!</p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setShowMyDishes(false);
                setTimeout(() => scrollToSection('menu'), 100);
              }}
            >
              Browse Products
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="my-dishes section">
      <div className="container">
        <div className="my-dishes-header">
          <h2 className="section-title">My Products ({getTotalItems()} items)</h2>
          <button 
            className="close-btn"
            onClick={() => setShowMyDishes(false)}
          >
            ✕
          </button>
        </div>

        <div className="dishes-list">
          {myDishes.map(dish => (
            <div key={dish.id} className="dish-item">
              <div className="dish-image">
              </div>
              
              <div className="dish-details">
                <h3 className="dish-name">{dish.name}</h3>
                <p className="dish-description">{dish.description}</p>
              </div>

              <div className="dish-controls">
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(dish.id, dish.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="quantity">{dish.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(dish.id, dish.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                {/* <div className="dish-price">₹{dish.price}</div>
                <div className="dish-total">₹{dish.price * dish.quantity}</div> */}
                <button 
                  className="remove-btn"
                  onClick={() => removeFromMyDishes(dish.id)}
                  title="Remove from My Dishes"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="dishes-summary">
          <div className="summary-row">
            <span>Total Items:</span>
            <span>{getTotalItems()}</span>
          </div>
          {/* <div className="summary-row total">
            <span>Total Amount:</span>
            <span>₹{getTotalPrice()}</span>
          </div> */}
          
          <div className="summary-actions">
            <button className="btn btn-primary" onClick={() => setShowMyDishes(false)}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyDishes;
