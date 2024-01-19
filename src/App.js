import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import "./index.css"

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

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Body/>)