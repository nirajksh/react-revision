import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

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

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "./contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
