import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./featureTypes";

const initialState: UserState = {
  employee_name: undefined,
  employee_email: undefined,
  employee_designation: undefined,
  employee_role: undefined,
  employee_department: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedInUser: (_state, action) => {
      return action.payload;
    },
  },
});

export const { loggedInUser } = userSlice.actions;

export default userSlice.reducer;
