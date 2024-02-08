import {IMG_CDN_URL} from "../constant.js"

const RestaurantCard=({name,locality,cloudinaryImageId,avgRating})=>{
    console.log(name)
    return(<div className="container">
       <div className="card">
            <img className="res_img" alt="img" src={IMG_CDN_URL+cloudinaryImageId}/>
           <ul>
            <li>{name} </li>
            <li>{locality}</li>
            <li>Rating{avgRating}</li>
  
           </ul>
  
           </div>
    </div>)
  }

  export default RestaurantCard;