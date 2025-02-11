import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/AboutPage";
import Body from "./components/Body";
import ContactPage from "./components/ContactPage";
import DealPage from "./components/DealPage";
import DestinationInfo from "./components/DestinationInfo";
import DestinationPage from "./components/DestinationPage";
import Home from "./components/Home";
import Service from "./components/ServicePage";
import "./index.css";
import store from "./store/store";
import Cookies from "./components/Cookies";
import DisclaimerPolicy from "./components/DisclaimerPolicy";

const root=createRoot(document.getElementById("root"));

const Rout=createBrowserRouter([
    {
        path:"/",
        element:<Body/>,
        children:[
            { 
               path:"/",
               element:<Home/>
            },
            { 
                path:"/about-us",
                element:<About/>
            },
            { 
                path:"/services",
                element:<Service/>
            },
            { 
                path:"/best-deals",
                element:<DealPage/>
            },
            { 
                path:"/destination",
                element:<DestinationPage/>
            },
            { 
                path:"/contact-us",
                element:<ContactPage/>
            },
            { 
                path:"/FAQs",
                element:<ContactPage/>
            },
            {
                path:"/destination-info",
                element:<DestinationInfo/>
            },
            {
                path:"/cookies",
                element:<Cookies/>
            },{
                path:"/disclaimer-policy",
                element:<DisclaimerPolicy/>
            }
        ]
    }
]);

root.render(
    <Provider store = { store }>
        <RouterProvider router = { Rout }/>
    </Provider>
)
