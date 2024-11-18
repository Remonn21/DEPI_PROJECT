import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isAuthenticated: false,
   info: {},
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      loginSuccess(state, action) {
         state.isAuthenticated = true;
         state.info = action.payload.user;
      },
      logout(state, action) {
         state.isAuthenticated = false;
         state.info = {};
      },
   },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
