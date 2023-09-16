import { createSlice } from "@reduxjs/toolkit";

export interface DepartmentState {
  department_id: Number;
  department_code: String;
  department_name: String;
  total_sub_departments: Number;
  total_products: Number;
  total_products_quantity: Number;
  stock_alert: Boolean;
  direct_supervisor: String;
  createdAt: String;
  updatedAt: String;
}

const initialState = {
  activeDepartment: {},
};

export const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    departmentById: () => {
      return {
        activeDepartment: {
          department_id: 1,
          department_code: "DEPT001",
          department_name: "Example Department",
          total_sub_departments: 3,
          total_products: 100,
          total_products_quantity: 500,
          stock_alert: true,
          direct_supervisor: "John Doe",
          createdAt: "2023-09-15 06:02:15.486",
          updatedAt: "2023-09-15 06:02:15.486",
        },
      };
    },
  },
});

export const { departmentById } = departmentSlice.actions;

export default departmentSlice.reducer;
