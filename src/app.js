import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass"
import RestaurentMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";
const InstaMart=lazy(()=>import("./components/instamart"))
/*
        Header
          -Logo
          -NavItems(RightSide)
          -Cart
        Body
         -SearchBar
         -RestaurentList
           -RestaurentCode
              -Image
              -Name
              -Rating
              -Cuisines
        Footer
          -links
          -copyright

     */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>

      },
      {
        path:"/about",
        element:<About/>,
        children:[
          {
          path:"profile",
          element:<Profile/>
          },
          {
            path:"profileclass",
            element:<ProfileClass/>
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurentMenu />
      },
      {
        path:"/instamart",
        element:<Suspense fallback={<Shimmer/>}><InstaMart/></Suspense> 
      },
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
