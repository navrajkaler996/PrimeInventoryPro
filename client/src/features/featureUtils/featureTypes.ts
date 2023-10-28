export interface DepartmentState {
  activeDepartment: {
    department_id: Number | undefined;
    department_code: String | undefined;
    department_name: String | undefined;
    total_sub_departments: Number | undefined;
    total_products: Number | undefined;
    total_products_quantity: Number | undefined;
    total_products_in_transit: Number | undefined;
    stock_alert: Boolean | undefined;
    direct_supervisor: String | undefined;
    parent_department_code: String | undefined;
    createdAt: String | undefined;
    updatedAt: String | undefined;
  };
}

export interface UserState {
  employee_id: number | undefined;
  employee_name: string | undefined;
  employee_email: string | undefined;
  employee_designation: string | undefined;
  employee_role: string | undefined;
  employee_department_code: string | undefined;
}
