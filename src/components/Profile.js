import React, { useEffect, useState } from "react";


const Profile = (props)=>{

    const [count,setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    // useEffect(()=>{

    //     const timer =setInterval(() => {
    //         console.log("set intervel calling")
    //     }, 1000);

    //     return ()=>{
    //         clearInterval(timer)
    //         console.log("useEffect return ")
    //     }




    // },[])



//console.log("render")

    return(<div>
    <h2>Profile class:{props.name}</h2>
    <h3>count:{count}</h3>
    <h4>count2:{count2}</h4>
    <button onClick={()=>setCount2(1)}>setCount2</button>
    </div>)
}

export default Profile;