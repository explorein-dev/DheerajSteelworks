import React, { useState } from "react";
import "./MenuItem.css";

const MenuItem = ({ item, addToMyDishes, quantity }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`menu-item ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="item-image">
        {/* <span className="item-emoji">{item.image}</span> */}
        <img src={item.image} alt={item.name} width={375} />
      </div>

      <div className="item-content">
        {/* <div className="item-badges">
          {item.popular && <span className="badge popular">⭐ Popular</span>}
          {item.spicy && <span className="badge spicy">🌶️ Spicy</span>}
          {item.vegetarian && <span className="badge vegetarian">🌱 Veg</span>}
        </div> */}
        <div className="item-header">
          <h3 className="item-name">{item.name}</h3>
          <span className="item-price">₹{item.price}</span>
        </div>

        <p className="item-description">{item.description}</p>

        <div className="item-actions">
          <button
            className="btn-add-to-cart"
            onClick={() => addToMyDishes(item)}
          >
            Add to My Products {quantity > 0 && `(${quantity})`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
