import React, { useState } from "react";
import { Link } from "react-router-dom";

const logo = "https://files.yappe.in/place/full/the-food-villa-5873411.webp";

const Header = () => {
  const [button, setButton] = useState(true);

  return (
    <div className="logo">
      <img alt="logo" src={logo} />

      <div className="navItems">
        <ul>
          <Link to="/"><li>Home</li></Link>
          
          <Link to="/about"><li>About</li></Link>
          <li>Cart</li>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/instamart"><li>InstaMart</li></Link>  
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
