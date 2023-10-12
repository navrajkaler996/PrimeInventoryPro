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
