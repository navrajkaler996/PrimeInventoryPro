import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: false,
  type: "",
  message: "",
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    displayToastMessage: (state, action) => {
      return action.payload;
    },
  },
});

export const { displayToastMessage } = toastSlice.actions;

export default toastSlice.reducer;
