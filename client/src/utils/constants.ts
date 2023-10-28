export const CHART_HEADINGS = {
  SALES_AND_EXPENSES: "Sales and expenses",
  PROFIT: "Profit",
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

export const API_ENDPOINTS = {
  product_development: "api/v1/product",
  auth_development: "api/v1/auth",
  department_development: "api/v1/department",
  sub_department_development: "api/v1/subdepartment",
  inventory_request_development: "api/v1/inventory-request",
};

export const TOTAL_PRODUCT_COUNT = 15;
export const STOCK_ALERT_PRODUCT_COUNT = 12;
export const INVENORY_REQUESTS_COUNT = 6;

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
