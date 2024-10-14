import React from 'react';


const MenuPage = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">OUR MENU</h1>
      <br />
      <br />
      <div className="image-wrapper">
        <img src="/delisarestaurant/delisa1.jpg" alt="Menu Page 1" />
        <img src="/delisarestaurant/delisa2.jpg" alt="Menu Page 2" />
        <img src="/delisarestaurant/delisa3.jpg" alt="Menu Page 3" />
      </div>

      {/* Footer */}
      <div className="footer">All rights reserved @2024</div>
    </div>
  );
};

export default MenuPage;
