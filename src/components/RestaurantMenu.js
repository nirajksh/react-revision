import React from "react";
import { useParams } from "react-router-dom";
const RestaurantMenu = ()=>{

    const {resId} = useParams()
    console.log(resId)
    return (<div>
        <h3>restaurant Id :{resId}</h3>
        <h3>RestaurantMenu page</h3></div>)
}

export default RestaurantMenu;