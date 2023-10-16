export interface SearchBarType {
  keyword: string;
  changeHandler: Function;
}

export interface ProductDataType {
  //Type for a single product
  productData: {
    product_id: number;
    product_name: string;
    product_code: string;
    price: number;
    total_quantity: number;
    cap: number;
    product_stock_alert: boolean;
    sub_department_code: string;
    department_code: string;
    in_transit: boolean;
    total_sales: number;
  };
}

export interface TotalProductsType {
  productData: ProductDataType["productData"][] | undefined;
  productIsLoading: boolean;
  productError: Object;
  hasMore: boolean;
  cursor: number | undefined;
  setCursor: Function;
  productClickHandler: Function;
}

export interface AddToInventoryFormErrorsType {
  product_name: boolean;
  product_department: boolean;
  product_sub_department: boolean;
  product_manufacturer: boolean;
  product_base_price: boolean;
  product_selling_price: boolean;
  product_case_pack: boolean;
  product_cap: boolean;
  product_brand: boolean;
}

export interface AddToInventoryFormType {
  product_name: string;
  product_department: string;
  product_sub_department: string;
  product_manufacturer: string;
  product_brand: string;
  product_base_price: number;
  product_selling_price: number;
  product_case_pack: number;
  product_cap: number;
  errors: AddToInventoryFormErrorsType;
}

export interface EditToInventoryFormErrorsType {
  product_name: boolean;
  product_department: boolean;
  product_sub_department: boolean;
  product_manufacturer: boolean;
  product_base_price: boolean;
  product_selling_price: boolean;
  product_case_pack: boolean;
  product_cap: boolean;
  product_brand: boolean;
  product_total_quantity: boolean;
}

export interface EditToInventoryFormType {
  product_name: string;
  product_department: string;
  product_sub_department: string;
  product_manufacturer: string;
  product_brand: string;
  product_base_price: number;
  product_selling_price: number;
  product_case_pack: number;
  product_cap: number;
  product_total_quantity: number;
  product_code: string;
  errors: EditToInventoryFormErrorsType;
}
export interface LoginFormType {
  email: string;
  password: string;
  errors: LoginFormErrorsType;
}

export interface LoginFormErrorsType {
  email: boolean;
  password: boolean;
}

export interface ProductType {
  productCode: string;
}
