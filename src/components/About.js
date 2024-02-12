import React from "react";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass"

const About = ()=>{
    return (
        <div>
            <h2>THis is about page</h2>
            <Profile name={"niraj"}/> 
            <ProfileClass name ={"niraj Singh"}/>
           
       </div>
    )
}

export default About;