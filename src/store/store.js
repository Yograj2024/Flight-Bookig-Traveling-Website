import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "./features/storeDevidce-width/resize";

const store = configureStore({
    reducer : {
        screenSize : screenSizeReducer, // in key and value pair form 
    }
})

export default store;