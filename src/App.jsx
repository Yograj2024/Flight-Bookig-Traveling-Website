import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/AboutPage";
import Body from "./components/Body";
import Main from "./components/Main";
import Service from "./components/ServicePage";
import DestinationPage from "./components/DestinationPage"
import "./index.css";
import DealPage from "./components/DealPage";
import ContactPage from "./components/ContactPage";
import Tailwind from "./components/Tailwind";

const root=createRoot(document.getElementById("root"));

const Rout=createBrowserRouter([
    {
        path:"/",
        element:<Body/>,
        children:[
            { 
               path:"/",
               element:<Main/>
            },
           { 
               path:"/Home",
               element:<Main/>
           },
           { 
               path:"/About Us",
               element:<About/>
           },
           { 
               path:"/Services",
               element:<Service/>
           },
           { 
               path:"/Best Deals",
               element:<DealPage/>
           },
           { 
               path:"/Destination",
               element:<DestinationPage/>
           },
           { 
               path:"/Contact Us",
               element:<ContactPage/>
           },
           { 
               path:"/FAQs",
               element:<ContactPage/>
           },
           { 
               path:"/tailwind",
               element:<Tailwind/>
           },
        ]
    }
])
root.render(<RouterProvider router={Rout}/>)
