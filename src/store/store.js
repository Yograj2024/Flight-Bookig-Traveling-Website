import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "./features/storeDevidce-width/resizeSlice";
import urlReducer from "./features/url/urlSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
    reducer : {
        screenSize : screenSizeReducer, // in key and value pair form 
        url : urlReducer,
        cart : cartReducer,
    }
})

export default store;