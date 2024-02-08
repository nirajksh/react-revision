import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../constant";

const Body = () => {
  return (
    <div className="container">
      {restaurantData &&
        restaurantData.map((res) => {
          return <RestaurantCard {...res.info} key={res.info.id} />;
        })}
    </div>
  );
};

export default Body;
