import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const logo = "https://files.yappe.in/place/full/the-food-villa-5873411.webp";

const Header = () => {
  const [button, setButton] = useState(true);

  const isOnline = useOnline()



  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <img className="h-20" alt="logo" src={logo} />

      <div className="">
        <ul className="flex gap-2 font-bold py-8">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <li className="px-2">Cart</li>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">InstaMart</li>
          </Link>
        </ul>
        


      </div>
     <h1 data-testid="online-status"> {isOnline ? "✅" :"🔴"  }</h1>
      {button ? (
        <button className="mr-5 rounded-md p-1 font-semibold bg-slate-300" onClick={() => setButton(false)}>logout</button>
      ) : (
        <button className="mr-5  p-1rounded-md font-semibold bg-slate-300" onClick={() => setButton(true)}>login</button>
      )}
    </div>
  );
};
export default Header;
