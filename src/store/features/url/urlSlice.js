import { createSlice } from "@reduxjs/toolkit";

const urlSlice = createSlice({
    name:"url",
    initialState:{
        url:"/",
    },
    reducers:{
        changeUrl: ( state, action) => {
            state.url = action.payload;
        }
    }
});

export default urlSlice.reducer;
export const  { changeUrl } = urlSlice.actions;