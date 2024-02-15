import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Restaurant_Menu_API } from "../constant";
const RestaurantMenu = ()=>{

    const [restaurantMenu, setRestaurantMenu]= useState(null)
    const {resId} = useParams()

    useEffect(()=>{
        getRestaurantInfo()
    },[])

    async function getRestaurantInfo(){
        const data = await fetch(Restaurant_Menu_API+resId)
        const json = await data.json();
        console.log(json.data)
    }

    
    //console.log(resId)
    return (<div>
        <h3>restaurant Id :{resId}</h3>
        <h3>RestaurantMenu page</h3></div>)
}

export default RestaurantMenu;