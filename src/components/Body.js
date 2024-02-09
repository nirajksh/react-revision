import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../constant";

const Body = () => {
  return (
    <>
    <div className="search">
      <input type="text" placeholder="Search Restaurant"/>
      <button type="button">Search</button>
    </div>
    <div className="container">
      {restaurantData &&
        restaurantData.map((res) => {
          return <RestaurantCard {...res.info} key={res.info.id} />;
        })}
    </div>
    </>
  );
};

export default Body;
