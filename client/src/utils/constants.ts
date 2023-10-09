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

export const PRODUCT_TABLE_TYPES = {
  STOCK_ALERTS: "STOCK_ALERTS",
};

export const API_ENDPOINTS = {
  product_development: "http://localhost:3000/api/v1/product",
};

export const TOTAL_PRODUCT_COUNT = 15;
export const STOCK_ALERT_PRODUCT_COUNT = 12;

export const FLASH_MESSAGE_TYPES = {
  success: "#AAFF00",
  failed: "#FF0000",
};
