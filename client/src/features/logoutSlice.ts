import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {
    logout: (state, action) => {
      return action.payload;
    },
  },
});

export const { logout } = logoutSlice.actions;

export default logoutSlice.reducer;
