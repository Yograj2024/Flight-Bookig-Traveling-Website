import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/AboutPage";
import Body from "./components/Body";
import ContactPage from "./components/ContactPage";
import DealPage from "./components/DealPage";
import DestinationPage from "./components/DestinationPage";
import Main from "./components/Main";
import Service from "./components/ServicePage";
import "./index.css";
import DestinationInfo from "./components/DestinationInfo";

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
            path:"/destinationInfo",
            element:<DestinationInfo/>
           }
        ]
    }
]);

root.render(
    <Provider store = { store }>
        <RouterProvider router={Rout}/>
    </Provider>
)
