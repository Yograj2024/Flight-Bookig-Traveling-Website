import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import About from "./components/AboutPage";
import Body from "./components/Body";
import Main from "./components/Main";
import Service from "./components/ServicePage";
import DestinationPage from "./components/DestinationPage"
import DealPage from "./components/DealPage";
import ContactPage from "./components/ContactPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
           }
        ]
    }
])
root.render(<RouterProvider router={Rout}/>)
