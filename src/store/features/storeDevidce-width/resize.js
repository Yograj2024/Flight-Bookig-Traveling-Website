import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    screenSize : window.innerWidth,
}

export const screenSizeSlice = createSlice ( {
    name:"screenSize",
    initialState,
    reducers:{
        setScreenSize : ( state, action ) => {
            state.screenSize = action.payload;
        }
        // other reducesrs
    }
})

export const { setScreenSize } = screenSizeSlice.actions;

export default screenSizeSlice.reducer;