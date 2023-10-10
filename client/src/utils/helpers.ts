export const filterFormData = (
  data: any,
  departmentList: any,
  subDepartmentList: any
) => {
  delete data.errors;

  let filteredData: any = {};

  for (let key in data) {
    if (key !== "product_name") {
      filteredData[key.slice(8)] = data[key];
    } else {
      filteredData["product_name"] = data[key];
    }
  }

  let { department_code } = departmentList.find((department: any) => {
    if (department.department_name === data.product_department)
      return department.department_code;
  });

  let { sub_department_code } = subDepartmentList.find((subDepartment: any) => {
    if (subDepartment.sub_department_name === data.product_sub_department)
      return subDepartment.sub_department_code;
  });

  filteredData.department_code = department_code;
  filteredData.sub_department_code = sub_department_code;

  delete filteredData.department;
  delete filteredData.sub_department;

  filteredData.price = Number(filteredData.selling_price);
  filteredData.base_price = Number(filteredData.base_price);
  filteredData.selling_price = Number(filteredData.selling_price);
  filteredData.case_pack = Number(filteredData.case_pack);
  filteredData.cap = Number(filteredData.cap);

  return filteredData;
};
