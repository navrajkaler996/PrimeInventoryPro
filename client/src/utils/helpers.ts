import { API_RESPONSE_MESSAGES } from "./constants";

export const filterFormData = (
  data: any,
  departmentList: any,
  subDepartmentList: any,
  storeCode: string
) => {
  delete data.errors;

  let filteredData: any = {};

  for (let key in data) {
    if (key === "product_name") {
      filteredData["product_name"] = data[key];
    } else if (key === "product_code") {
      filteredData["product_code"] = data[key];
    } else {
      filteredData[key.slice(8)] = data[key];
    }
  }

  if (departmentList && subDepartmentList) {
    let { department_code } = departmentList.find((department: any) => {
      if (department.department_name === data.product_department)
        return department.department_code;
    });

    let { sub_department_code } = subDepartmentList.find(
      (subDepartment: any) => {
        if (subDepartment.sub_department_name === data.product_sub_department)
          return subDepartment.sub_department_code;
      }
    );

    filteredData.department_code = department_code;
    filteredData.sub_department_code = sub_department_code;
    filteredData.pending_approval = true;

    delete filteredData.department;
    delete filteredData.sub_department;
  }
  //For editing
  else {
    filteredData.department_code = filteredData.department;
    filteredData.sub_department_code = filteredData.sub_department;
    // filteredData.total_quantity = filteredData.on_hands;
    delete filteredData.department;
    delete filteredData.sub_department;
    // delete filteredData.on_hands;
    filteredData.total_quantity = Number(filteredData.total_quantity);
  }

  filteredData.price = Number(filteredData.selling_price);
  filteredData.base_price = Number(filteredData.base_price);
  filteredData.selling_price = Number(filteredData.selling_price);
  filteredData.case_pack = Number(filteredData.case_pack);
  filteredData.cap = Number(filteredData.cap);
  filteredData.store_code = storeCode;

  return filteredData;
};

export function debounce(fn: Function, delay: number) {
  let id: number | undefined;

  return () => {
    if (id) clearTimeout(id);

    id = setTimeout(() => {
      fn(true);
    }, delay);
  };
}

export const createResponseMessage = (type: string, method: string) => {
  if (type === "success") {
    if (method === "POST") return "Product created successfully";
    if (method === "PUT" || method === "PATCH")
      return "Product updated successfully";
    if (method === "DELETE") return "Product deleted successfully";
  } else if (type === "failed") {
    if (method === "POST") return "Product could not be created!";
    if (method === "PUT" || method === "PATCH")
      return "Product could not be updated";
    if (method === "DELETE") return "Product could not be deleted";
  }

  return "Unknown response";
};

const apiResponseConfig = {
  success_inventory_request_approved:
    API_RESPONSE_MESSAGES.success_inventory_request_approved,
  success_inventory_request_rejected:
    API_RESPONSE_MESSAGES.success_inventory_request_rejected,
  success_product_request: API_RESPONSE_MESSAGES.success_product_request,
  failed_product_request: API_RESPONSE_MESSAGES.failed_product_request,
};

//Using open/close principle
export const createApiResponseMessage = (type: string) => {
  const response = apiResponseConfig[type as keyof typeof apiResponseConfig];
  return response || "Unknown response";
};

export const createInventoryRequestBody = (
  type: string,
  formData: any,
  filteredFormData: any,
  loggedInUser: any
) => {
  if (type === "ADD")
    return {
      request_type: "ADD",
      request_by_name: loggedInUser.employee_name,
      request_by_employee_id: loggedInUser.employee_id,
      request_for_employee_id: 1,
      request: `ADD ${formData.product_brand} ${formData.product_name} to ${formData.product_sub_department} (${formData.product_department})`,
      request_by_email: loggedInUser.employee_email,
      request_department_code: filteredFormData.department_code,
      request_sub_department_code: filteredFormData.sub_department_code,
      status: "PENDING_APPROVAL",
      product_code: undefined,
    };
};
