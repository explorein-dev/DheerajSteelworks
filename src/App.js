import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyDishes from "./components/MyDishes";
import "./App.css";

import { parseExcelFile } from "./utils/excelParser";
const sheetUrl =
  "https://docs.google.com/spreadsheets/d/1uFwApLqntCTnJpWxLGW63Nw9Kgub8bKsAZRZAaDrSuA/export?format=xlsx";

function App() {
  const [myDishes, setMyDishes] = useState([]);
  const [showMyDishes, setShowMyDishes] = useState(false);
  const [menuData, setMenuData] = useState(null);
  const [filters, setFilters] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const loadMenuData = async () => {
      const { menuData, filters } = await parseExcelFile(sheetUrl);
      if (menuData) {
        setMenuData(menuData);
        setFilters(filters);
      }
    };
    loadMenuData();
  }, []);

  const addToMyDishes = (item) => {
    setMyDishes((prevDishes) => {
      const existingDish = prevDishes.find((dish) => dish.id === item.id);
      if (existingDish) {
        return prevDishes.map((dish) =>
          dish.id === item.id ? { ...dish, quantity: dish.quantity + 1 } : dish
        );
      } else {
        return [...prevDishes, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromMyDishes = (itemId) => {
    setMyDishes((prevDishes) =>
      prevDishes.filter((dish) => dish.id !== itemId)
    );
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromMyDishes(itemId);
    } else {
      setMyDishes((prevDishes) =>
        prevDishes.map((dish) =>
          dish.id === itemId ? { ...dish, quantity: newQuantity } : dish
        )
      );
    }
  };

  if (!menuData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {showMyDishes ? (
        <MyDishes
          myDishes={myDishes}
          removeFromMyDishes={removeFromMyDishes}
          updateQuantity={updateQuantity}
          setShowMyDishes={setShowMyDishes}
        />
      ) : (
        <>
          <Header myDishes={myDishes} setShowMyDishes={setShowMyDishes} />
          <Hero />
          <MenuSection
            menuData={menuData}
            filters={filters}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            addToMyDishes={addToMyDishes}
            filter={filter}
            setFilter={setFilter}
            myDishes={myDishes}
          />
          {/* <About /> */}
          {/* <Contact /> */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
