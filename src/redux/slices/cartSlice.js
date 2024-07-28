import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        //1) function to add item to cart
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        //2) function to remove from cart
        removeFromCart: (state, action) => {
            return state.filter(item => item.id != action.payload)
        },
        //3) function to remove all item from cart after checkout
        emptyCheckoutCart (state){                     //this one without arrow fuction
            state=[]
        }


          
    }
})

export const {addToCart,removeFromCart,emptyCheckoutCart} = cartSlice.actions
export default cartSlice.reducer