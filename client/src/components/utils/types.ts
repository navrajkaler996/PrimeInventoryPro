export interface ButtonType {
  value: string;
  clickHandler: Function;
  disabled: boolean;
  styles: Object;
  loading: boolean;
}

export interface InventoryRequestType {
  request_id: number | undefined;
  request_type: string;
  request_by_name: string;
  request_by_employee_id: number;
  request_for_employee_id: number;
  request_by_email: string;
  request: string;
  request_department_code: string;
  request_sub_department_code: string;
  status: string;
  product_code: string;
  createdAt: Date;
}

export interface TableType {
  data: InventoryRequestType[];
  dataIsLoading: boolean;
  dataError: boolean | Object;
  options: {
    lastProduct: any;
    keys: Object;
  };
  clickHandler: Function;
}

export interface ModalType {
  data: InventoryRequestType;
  clickHandler: Function;
  isLoading: Boolean;
}

export interface ToastType {
  type: string;
  message: string;
  closeHandler: Function;
}

export interface SingleToastType {
  id: Date;
  message: string;
  type: string;
}

export interface ToastListType {
  data: SingleToastType[];
  closeHandler: Function;
}

export interface SalesType {
  sales_id: number;
  product_code: string;
  sales_amount: number;
  sales_date: string;
}

export interface SalesLineChartType {
  salesData: SalesType[];
}

export interface StoreSalesType {
  store_sales_id: number;
  store_code: string;
  total_sales: number;
  total_expenses: number;
  sales_date: string;
}
