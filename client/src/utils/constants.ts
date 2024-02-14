export const CHART_HEADINGS = {
  SALES_AND_EXPENSES: "Sales and expenses",
  PROFIT: "Profit",
};

export const ADMIN_PANEL_HEADINGS = {
  TOTAL_DEPARTMENTS: "Total Departments",
  TOTAL_SUBDEPARTMENTS: "Total Subdepartments",
  TOTAL_EMPLOYEES: "Total Employees",
};

export const DEPARTMENTS = [
  {
    department: "Fresh",
    subDepartments: ["Meats", "Produce", "Bakery", "Diary/Frozen"],
  },
];

export const SKELETON_STYLES = {
  animation: "custom-pulse .8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  opacity: "1",
};

export const TOTAL_PRODUCTS_KEYS = {
  id: "product_id",
  name: "product_name",
  code: "product_code",
  price: "price",
  "total quantity": "total_quantity",
  "in transit": "in_transit",
  "department code": "department_code",
  "total sales": "total_sales",
};

export const STOCK_ALERT_KEYS = {
  id: "product_id",
  name: "product_name",
  code: "product_code",
  department: "department_code",
  "on hands": "total_quantity",
  cap: "cap",
  "in transit": "in_transit",
};

export const INVENORY_REQUESTS_KEYS = {
  type: "request_type",
  "request by": "request_by_email",
  request: "request",
  "created at": "createdAt",
};

export const PRODUCT_TABLE_TYPES = {
  STOCK_ALERTS: "STOCK_ALERTS",
  INVENORY_REQUESTS: "INVENORY_REQUESTS",
};

export const RECEIVING_REPORTS_KEYS = {
  "report id": "report_id",
  "truck number": "truck_number",
  company: "trucking_company",
  "received at": "received_at",
  "quantity expected": "total_products_quantity_expected",
  "quantity received": "total_products_quantity_received",
};

export const IN_TRANSIT_KEYS = {
  "report id": "report_id",
  "truck number": "truck_number",
  company: "trucking_company",

  "quantity expected": "total_products_quantity_expected",
};

export const ADMIN_PANEL_DEPARTMENTS_KEYS = {
  id: "department_id",
  name: "department_name",
  code: "department_code",
  directsupervisor: "direct_supervisor",
  "total products": "total_products",
};

export const ADMIN_PANEL_SUBDEPARTMENTS_KEYS = {
  id: "sub_department_id",
  name: "sub_department_name",
  code: "sub_department_code",
  department: "department_code",
  "direct supervisor": "sub_department_manager",
  "total products": "total_products",
};

export const ADMIN_PANEL_EMPLOYEES_KEYS = {
  id: "employee_id",
  email: "employee_email",
  designation: "employee_designation",
  role: "employee_role",
  department: "employee_department_code",
};

export const API_ENDPOINTS = {
  product_development: "api/v1/product",
  auth_development: "api/v1/auth",
  department_development: "api/v1/department",
  sub_department_development: "api/v1/subdepartment",
  inventory_request_development: "api/v1/inventory-request",
  store_development: "api/v1/store",
  sales_development: "api/v1/sales",
  receiving_development: "api/v1/receiving",
  admin_development: "api/v1/admin",
  employee_development: "api/v1/employee",
};

export const TOTAL_PRODUCT_COUNT = 15;
export const STOCK_ALERT_PRODUCT_COUNT = 12;
export const INVENORY_REQUESTS_COUNT = 6;
export const RECEIVING_REPORT_COUNT = 10;

export const FLASH_MESSAGE_TYPES = {
  success: "#AAFF00",
  failed: "#FF0000",
};

export const FORM_VALIDATIONS = {
  name_min_length: 5,
};

export const INVENTORY_VIEWS = {
  PRODUCT_TABLE: "PRODUCT_TABLE",
  ADD_TO_INVENTORY: "ADD_TO_INVENTORY",
  PRODUCT: "PRODUCT",
};

export const FORM_ADD_BUTTON_STYLES = {
  width: "30rem",
  height: "3.5rem",
  fontSize: "1.1em",
  letterSpacing: "3px",
  margin: 0,
};

export const COLOR_CODE = {
  DANGER: "#FF0000",
  SUCCESS: "#AAFF00",
  FAILED: "#FF0000",
};

export const API_RESPONSE_MESSAGES = {
  success_inventory_request_approved: "Product request approved successfully!",
  success_inventory_request_rejected: "Product request rejected successfully!",
  success_product_request: "Product request sent for approval successfully!",
  failed_product_request: "Product request could not be sent!",
};

export const STORE_CODES = ["STORE001", "STORE002"];

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
