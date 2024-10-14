import React, { useState } from 'react';
import './Menu.css'; // Import the CSS file for styling

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <button className="menuBtn" onClick={toggleMenu}>
        OUR MENU
      </button>

      {isOpen && (
        <div className="menu">
          <h2>Our Menu</h2>
          <div className="menu-section">
            <h3>Appetizers</h3>
            <ul>
              <li>Bruschetta</li>
              <li>Calamari</li>
              <li>Stuffed Mushrooms</li>
            </ul>
          </div>
          <div className="menu-section">
            <h3>Main Courses</h3>
            <ul>
              <li>Grilled Salmon</li>
              <li>Steak</li>
              <li>Vegetarian Pasta</li>
            </ul>
          </div>
          <div className="menu-section">
            <h3>Desserts</h3>
            <ul>
              <li>Chocolate Lava Cake</li>
              <li>Tiramisu</li>
              <li>Cheesecake</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
