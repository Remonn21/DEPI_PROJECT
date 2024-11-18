import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user.slice";
import cartReducer from "./slice/cart.slice";
import wishlistReducer from "./slice/wishlist.slice";

export const loadState = () => {
   try {
      const serializedState = localStorage.getItem("reduxState");
      if (serializedState === null) {
         return undefined;
      }
      return JSON.parse(serializedState);
   } catch (err) {
      console.error("Could not load state", err);
      return undefined;
   }
};

export const saveState = (state) => {
   try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("reduxState", serializedState);
   } catch (err) {
      console.error("Could not save state", err);
   }
};

const persistedState = loadState();

const store = configureStore({
   reducer: {
      user: userReducer,
      cart: cartReducer,
      wishlist: wishlistReducer,
   },
   preloadedState: persistedState,
});

store.subscribe(() => {
   saveState({
      cart: store.getState().cart,
      user: store.getState().user,
      wishlist: store.getState().wishlist,
   });
});

export default store;
