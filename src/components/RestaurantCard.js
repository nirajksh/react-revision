import {IMG_CDN_URL} from "../constant.js"

const RestaurantCard=({name,locality,cloudinaryImageId,avgRating})=>{
//    console.log(name)
    return(<div className="bg">
       <div className="w-48 border-slate-400 rounded-md bg-slate-200 p-1 shadow-lg">
            <img className="res_img" alt="img" src={IMG_CDN_URL+cloudinaryImageId}/>
           <ul>
            <li className="font-bold">{name} </li>
            <li className="font-semibold">{locality}</li>
            <li className="font-semibold">Rating{avgRating}</li>
  
           </ul>
  
           </div>
    </div>)
  }

  export default RestaurantCard;