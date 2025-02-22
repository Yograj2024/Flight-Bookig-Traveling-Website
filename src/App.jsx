import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Home from "./components/Home";
import AboutPage from "./components/pages/about/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import DealPage from "./components/pages/DealPage";
import DestinationInfo from "./components/pages/DestinationInfo";
import DestinationPage from "./components/pages/DestinationPage";
import Login from "./components/pages/login_signup/Login";
import SignUp from "./components/pages/login_signup/SignUp";
import ServicePage from "./components/pages/ServicePage";
import Cookies from "./components/policies/Cookies";
import DataAndProtection from "./components/policies/DataAndProtection";
import PrivacyPolicy from "./components/policies/PrivacyPolicy";
import RefundPolicy from "./components/policies/RefundPolicy";
import TermsAndCondition from "./components/policies/TermsAndCondition";
import "./index.css";
import store from "./store/store";
import NewCalander from "./NewCalander";
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
            { path:"/terms-&-conditions", element:<TermsAndCondition/> },
            { path:"/refund-policy", element:<RefundPolicy/> },
            { path:"/data-protection-policy", element:<DataAndProtection/> },
            { path:"/privacy-policy",element:<PrivacyPolicy/> }
        ]
    },
    { path:"/sign-up", element:<SignUp/> },
    { path:"/log-in", element:<Login/>},
    { path:"/calander", element:<NewCalander/>}
]);

root.render(
    <Provider store = { store }>
        <RouterProvider router = { Rout }/>
    </Provider>
)
