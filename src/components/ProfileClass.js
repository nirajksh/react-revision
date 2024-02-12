import React, { Component } from "react";



class Profile extends Component{
    constructor(){
        super()
            this.state={
                count:0,
                count2:0
            }
        
    }
    render(){
        const{count,count2}=this.state
        return(
            <>
            <h2>classComponrnts:{this.props.name}</h2>
            <h3>count:{count}</h3>
            <h4>count2:{count2}</h4>

            <button
            onClick={()=>{
                this.setState({
                    count2:1,
                })
            }}
            >setCount2</button>
            </>
        )
    }
}
export default Profile





