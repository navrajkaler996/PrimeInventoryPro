import { createSlice } from "@reduxjs/toolkit";

export interface DepartmentState {
  activeDepartment: {
    department_id: Number | null;
    department_code: String | null;
    department_name: String | null;
    total_sub_departments: Number | null;
    total_products: Number | null;
    total_products_quantity: Number | null;
    total_products_in_transit: Number;
    stock_alert: Boolean | null;
    direct_supervisor: String | null;
    parent_department_code: String | null;
    createdAt: String | null;
    updatedAt: String | null;
  };
}

const initialState = {
  // activeDepartment: {
  //   department_id: null,
  //   department_code: null,
  //   department_name: null,
  //   total_sub_departments: null,
  //   total_products: null,
  //   total_products_quantity: null,
  //   stock_alert: null,
  //   direct_supervisor: null,
  //   parent_department_code: null,
  //   createdAt: null,
  //   updatedAt: null,
  // },
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
