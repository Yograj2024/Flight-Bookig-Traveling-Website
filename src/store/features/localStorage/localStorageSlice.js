import { createSlice } from "@reduxjs/toolkit";

const localStorageSlice = createSlice({
    name:"localStorage",
    initialState:{
        length:localStorage.length,
    },
    reducers:{
        updateLength: (state, action) => {
            state.lambai = action.payload;
        }
    }
});

export const { updateLength } = localStorageSlice.actions;
export default localStorageSlice.reducer;