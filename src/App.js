import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import "./index.css"
import Header from "./components/Header";
import Footer from "./components/Footer"

// const head = createElement(
//    "h2",{id:"titile"},"namaste React"

// )

// const head2=createElement(
//     "h2",{
//         title:"head2",
//         id:"heading",
//         hello:"world"
//     },"i have created heading two"
// )



// const Head3=()=>{
//     return(
//         <div>{head}</div>
//     )
// }

// const HeaderComponent =()=>{
//     return(
//         <div>
//             {head2}
//             {Head3()}
//         </div>
//     )
// }
const AppLayout=()=>{
    return(<>
    <Header/>
    <Body/>
    <Footer/>
    </>)
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)