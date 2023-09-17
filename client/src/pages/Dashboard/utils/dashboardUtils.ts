export const createCurrentDepartment = (departmentData: any) => {
  if (departmentData.sub_department_name) {
    return {
      department_name: departmentData.sub_department_name,
      department_code: departmentData.sub_department_code,
      department_id: departmentData.sub_department_id,
      total_sub_departments: null,
      total_products: departmentData.total_products,
      total_products_quantity: departmentData.total_products_quantity,
      stock_alert: departmentData.stock_alert,
      direct_supervisor: departmentData.sub_department_manager,
      parent_department_code: departmentData.department_code,
      createdAt: departmentData.createdAt,
      updatedAt: departmentData.updatedAt,
    };
  } else
    return {
      ...departmentData,
      parent_department_code: null,
    };
};
