export interface DepartmentType {
  departmentData:
    | {
        createdAt: string;
        department_code: string;
        department_id: number;
        department_name: string;
        direct_supervisor: string;
        stock_alert: boolean;
        total_products: number;
        total_products_quantity: number;
        total_sub_departments: number;
        updatedAt: string;
      }
    | undefined;
  departmentError: Object | undefined;
  departmentIsLoading: Object | undefined;
  subDepartmentsData:
    | {
        sub_department_name: string;
        sub_department_code: string;
        department_code: string;
        total_products: number;
        total_products_quantity: number;
        stock_alert: boolean;
        sub_department_manager: string;
      }[]
    | undefined;
  subDepartmentsError: Object | undefined;
  subDepartmentsIsLoading: Object | undefined;
}
