export interface ButtonType {
  value: string;
  clickHandler: Function;
  disabled: boolean;
  styles: Object;
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
  data: any;
  clickHandler: Function;
}
