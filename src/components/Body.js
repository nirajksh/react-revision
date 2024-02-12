import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


function filterData(searchText,restaurantList){

const resData = restaurantList.filter((restaurant)=>restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
)
return resData;
}


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([])
  const [searchText, setSearchText] = useState("")

  

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await res.json();
    //console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants );

    setRestaurantList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestaurant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  console.log(restaurantList)
  


  //if(!restaurantList) return null
// if(filterRestaurant?.length===0)
// return <h2>No Match restaurants</h2>

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search">
        <input
         type="text"
          placeholder="Search Restaurant"
          value={searchText}
           onChange={(e)=>setSearchText(e.target.value)} />
        <button onClick={()=>{
        const data = filterData(searchText,restaurantList)
        setFilterRestaurant(data)
        }
        
        
        }>Search</button>
      </div>
      <div className="container">
        {filterRestaurant &&
          filterRestaurant.map((res) => {
            return(
            
           <Link to={"/restaurant/"+res.info.id}key={res.info.id}><RestaurantCard {...res.info}  /></Link> 
            )
          })}
      </div>
    </>
  );
};

export default Body;
