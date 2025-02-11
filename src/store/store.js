import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "./features/storeDevidce-width/resizeSlice";
import urlReducer from "./features/url/urlSlice";

const store = configureStore({
    reducer : {
        screenSize : screenSizeReducer, // in key and value pair form 
        url : urlReducer,
    }
})

export default store;