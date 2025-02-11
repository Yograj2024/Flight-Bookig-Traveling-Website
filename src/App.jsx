import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import store from "./store/store";
import Body from "./components/Body";
import Home from "./components/Home";
import About from "./components/sections/About";
import DealPage from "./components/pages/DealPage";
import DestinationPage from "./components/pages/DestinationPage";
import DestinationInfo from "./components/pages/DestinationInfo";
import PrivacyPolicy from "./components/policies/PrivacyPolicy";
import ServicePage from "./components/pages/ServicePage";
import ContactPage from "./components/pages/ContactPage";
import Cookies from "./components/policies/Cookies";
import DisclaimerPolicy from "./components/policies/DisclaimerPolicy";
import TermsAndCondition from "./components/policies/TermsAndCondition";
import RefundPolicy from "./components/policies/RefundPolicy"
import DataAndProtection from "./components/policies/DisclaimerPolicy"
import AboutPage from "./components/pages/about/AboutPage";
const root=createRoot(document.getElementById("root"));

const Rout=createBrowserRouter([
    {
        path:"/",
        element:<Body/>,
        children:[
            { path:"/", element:<Home/> },
            { path:"/about-us", element:<AboutPage/> },
            { path:"/services", element:<ServicePage/> },
            { path:"/best-deals", element:<DealPage/> },
            { path:"/destination", element:<DestinationPage/> },
            { path:"/contact-us", element:<ContactPage/> },
            { path:"/FAQs", element:<ContactPage/> },
            { path:"/destination-info", element:<DestinationInfo/> },
            { path:"/cookies", element:<Cookies/> },
            { path:"/disclaimer-policy", element:<DisclaimerPolicy/> },
            { path:"/terms-&-conditions", element:<TermsAndCondition/> },
            { path:"/refund-policy", element:<RefundPolicy/> },
            { path:"/data-protection-policy", element:<DataAndProtection/> },
            { path:"/privacy-policy",element:<PrivacyPolicy/> }
        ]
    }
]);

root.render(
    <Provider store = { store }>
        <RouterProvider router = { Rout }/>
    </Provider>
)
