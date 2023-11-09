export const createCurrentDepartment = (departmentData: any) => {
  if (departmentData.store_name) {
    return {
      department_name: departmentData.store_name,
      department_code: departmentData.store_code,
      department_id: departmentData.store_id,
      total_sub_departments: null,
      total_products: departmentData.total_products,
      total_products_quantity: departmentData.total_products_quantity,
      total_products_in_transit: departmentData.total_products_in_transit,
      stock_alert: departmentData.stock_alert,
      direct_supervisor: departmentData.general_manager,
      parent_department_code: null,
      createdAt: departmentData.createdAt,
      updatedAt: departmentData.updatedAt,
    };
  }

  if (departmentData.sub_department_name) {
    return {
      department_name: departmentData.sub_department_name,
      department_code: departmentData.sub_department_code,
      department_id: departmentData.sub_department_id,
      total_sub_departments: null,
      total_products: departmentData.total_products,
      total_products_quantity: departmentData.total_products_quantity,
      total_products_in_transit: departmentData.total_products_in_transit,
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
