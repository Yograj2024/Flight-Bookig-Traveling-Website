import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:"",
    },
    reducers:{
        addToCart: ( state, action ) => {
            // Add to cart logic here
            state.cartItems=action.payload;
        }
    }
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;     