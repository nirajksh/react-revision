import React from "react"
import ReactDOM from "react-dom/client"
const head = React.createElement("h1",{
    id:"title",

}
,"heading 1")

const head2 = React.createElement("h2",{
    id:"title",
},"heading 2")

const container = React.createElement("div",{
    id:"container",

},"container")

const container2 = React.createElement("div",{
    id:"title"
},[head,container,head2])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container2)