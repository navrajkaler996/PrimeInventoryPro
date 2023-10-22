import { createSlice } from "@reduxjs/toolkit";
import { DepartmentState } from "./featureTypes";

const initialState: DepartmentState = {
  activeDepartment: {
    department_id: undefined,
    department_code: undefined,
    department_name: undefined,
    total_sub_departments: undefined,
    total_products: undefined,
    total_products_quantity: undefined,
    total_products_in_transit: undefined,
    stock_alert: undefined,
    direct_supervisor: undefined,
    parent_department_code: undefined,
    createdAt: undefined,
    updatedAt: undefined,
  },
};

//This slice is used to store data related to department.
/////activeDepartment reducer is used to store the current active department.
export const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    activeDepartment: (_state, action) => {
      return action.payload;
    },
  },
});

export const { activeDepartment } = departmentSlice.actions;

export default departmentSlice.reducer;
