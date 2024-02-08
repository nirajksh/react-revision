import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../constant";




//https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf
const Body = () => {

 



  return (
    <div className="container">
     {
      restaurantData && restaurantData.map((res)=>{
        return <RestaurantCard {...res.info} key={res.info.id} />
      })

     }
    </div>
  );
};

export default Body;
