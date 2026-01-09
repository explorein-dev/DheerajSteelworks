import React, { useState } from "react";
import MenuItem from "./MenuItem";
import "./MenuSection.css";

const MenuSection = ({
  menuData,
  filters,
  activeCategory,
  setActiveCategory,
  addToMyDishes,
  filter,
  setFilter,
  myDishes,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const categories = ["All", ...Object.keys(menuData)];

  const dynamicFilters = [{ id: "all", name: "All" }, ...filters];

  const getFilteredItems = () => {
    let items = [];

    if (activeCategory === "All") {
      Object.values(menuData).forEach((category) => {
        items = items.concat(category);
      });
    } else {
      items = menuData[activeCategory] || [];
    }

    if (filter !== "all") {
      items = items.filter((item) => item[filter]);
    }

    if (searchTerm) {
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return items;
  };

  const filteredItems = getFilteredItems();

  return (
    <section id="menu" className="menu-section section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="menu-filters">
          <div className="category-filters">
            <h3>Categories</h3>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* <div className="dietary-filters">
            <h3>Filters</h3>
            <div className="filter-buttons">
              {dynamicFilters.map((filterOption) => (
                <button
                  key={filterOption.id}
                  className={`filter-btn ${
                    filter === filterOption.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setFilter(filterOption.id);
                  }}
                >
                  {filterOption.name}
                </button>
              ))}
            </div>
          </div> */}
        </div>

        <div className="menu-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              const dishInCart = myDishes.find((dish) => dish.id === item.id);
              const quantity = dishInCart ? dishInCart.quantity : 0;
              return (
                <MenuItem
                  key={item.id || item.name}
                  item={item}
                  addToMyDishes={addToMyDishes}
                  quantity={quantity}
                />
              );
            })
          ) : (
            <div className="no-items">
              <span className="no-items-icon">⚡</span>
              <h3>No items found</h3>
              <p>Try adjusting your filters to see more options</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
