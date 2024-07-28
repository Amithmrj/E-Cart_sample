import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice= createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        //reduseersinte akath action
        //1) function to add item to wishlist
        addToWishlist:(state,action)=>{             //argument ond so action venam, acstionte payloadil ayirikkum arguments
            state.push(action.payload)

        },
        //2) function to remove from wishlist
        removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer