import React, { Component } from "react";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass"

// const About = ()=>{
//     return (
//         <div>
//             <h2>THis is about page</h2>
//             <Profile name={"niraj"}/> 
//             <ProfileClass name ={"niraj Singh"}/>
           
//        </div>
//     )
// }
class About extends Component{
    constructor(){
        super()
       // console.log("Parent - constructor")
    }

    // componentDidMount(){
    //     console.log("parent- componentDidMount")
    // }
    render(){
      //  console.log("parent-render")
        return(<div><h2>This is about Page </h2>
        <Profile name={"niraj"}/>
        <ProfileClass name={"niraj kumar singh"}/></div>)
    }
}

export default About;