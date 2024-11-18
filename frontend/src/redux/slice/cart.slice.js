import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
   items: [],
   total: 0,
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart(state, action) {
         const product = action.payload;
         const existingItem = state.items.find(
            (item) => product._id === item._id,
         );
         if (existingItem) {
            existingItem.quantity += product.quantity;
         } else {
            state.items.push(product);
         }
         toast.info("item added to cart");
         state.total += product.price * product.quantity;
      },
      removeFromCart(state, action) {
         const { id, quantity } = action.payload;
         console.log("working", id, quantity);
         const existingItem = state.items.find((item) => item._id === id);
         if (existingItem) {
            if (quantity && existingItem.quantity > quantity) {
               existingItem.quantity -= quantity;
               state.total -= existingItem.price * quantity;
            } else {
               state.total -= existingItem.price * existingItem.quantity;
               state.items = state.items.filter((item) => item._id !== id);
            }
            toast.info("item removed from cart");
         }
      },
      clearCart(state) {
         state.items = [];
         state.total = 0;
      },
   },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
