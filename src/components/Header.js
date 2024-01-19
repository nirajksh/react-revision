import React from "react";

const logo = "https://files.yappe.in/place/full/the-food-villa-5873411.webp";

const Header = () => {
  return (
    
      <div className="logo">
        <img alt="logo" src={logo} />
      
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Offers</li>
        </ul>
      </div>
      </div>
    
  );
};
export default Header;
