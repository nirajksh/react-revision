import React, { useState } from "react";

const logo = "https://files.yappe.in/place/full/the-food-villa-5873411.webp";

const Header = () => {
  const [button, setButton] = useState(true);

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
      {button ? (
        <button onClick={() => setButton(false)}>logout</button>
      ) : (
        <button onClick={() => setButton(true)}>login</button>
      )}
    </div>
  );
};
export default Header;
