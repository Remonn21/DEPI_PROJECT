import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
   items: [],
};

const wishlistSlice = createSlice({
   name: "wishlist",
   initialState,
   reducers: {
      toggleWishList(state, action) {
         const product = action.payload;
         const existingItem = state.items.find(
            (item) => product._id === item._id,
         );
         if (!existingItem) {
            state.items.push(product);
            toast.info("item added to wishlist");
         } else {
            state.items = state.items.filter(
               (item) => item._id !== product._id,
            );
            toast.info("item removed from wishlist");
         }
      },
      //   removeFromWishlist(state, action) {
      //      const id = action.payload;
      //      state.items = state.items.filter((i) => i.id !== id);
      //   },
   },
});

export const { toggleWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
