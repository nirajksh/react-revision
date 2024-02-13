import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state={
        userInfo:{
            name:"dummy name ",
            location:"dummy location"
        }
    }
   
  }
//   componentDidMount(){
//     this.timer= setInterval(()=>{
//         console.log("child component set interval")
//     },1000)
//     console.log("child componentdidmount")
//   }
//   componentWillUnmount(){
//     clearInterval(this.timer)
//     console.log("child- componentWillUnmount")
//   }

  
  render() {
    const { count, count2 } = this.state;
    return (
      <>
        <h2>classComponrnts:{this.props.name}</h2>

        <h3>name:{this.state.userInfo.name}</h3>
        <h3>location:{this.state.userInfo.location}</h3>
        {/* <h3>count:{count}</h3>
        <h4>count2:{count2}</h4>

        <button
          onClick={() => {
            this.setState({
              count2: 1,
            });
          }}
        >
          setCount2
        </button> */}
      </>
    );
  }
}
export default Profile;
