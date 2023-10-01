export const stockAlertKeys = [
  "Name",
  "Code",
  "Department",
  "On hands",
  "Cap",
  "Required",
];
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

export const TOTAL_PRODUCTS_KEYS = [
  "id",
  "name",
  "code",
  "price",
  "total quantity",
  "in transit",
  "department code",
  "total sales",
];

export const API_ENDPOINTS = {
  product_development: "http://localhost:3000/api/v1/product",
};

export const PRODUCT_COUNT = 15;
