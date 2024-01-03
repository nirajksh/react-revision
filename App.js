import {createElement} from "react"
import ReactDOM from "react-dom/client"
const head = createElement(
   "h2",{id:"titile"},"namaste React"
)



const Head3=()=>{
    return(
        <div>{head}</div>
    )
}

const HeaderComponent =()=>{
    return(
        <div>
            {Head3()}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeaderComponent/>)