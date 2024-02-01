import { API_ENDPOINTS } from "../../utils/constants";

interface UrlBuilderOptionsType {
  cursor: number | undefined;
  count: number;
}

//ProductURLBuilder abstract class can be extended and implemented in other class to build a product url
//according to the type provided.
//This helper is created to implement the Open/Close SOLID principle.
abstract class ProductURLBuilder {
  abstract buildUrl(...args: Array<any>): string;
}

export class AddProductURLBuilder extends ProductURLBuilder {
  buildUrl(
    _code: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.product_development
    }/add`;
  }
}

export class EditProductURLBuilder extends ProductURLBuilder {
  buildUrl(
    _code: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.product_development
    }/update`;
  }
}

export class DeleteProductURLBuilder extends ProductURLBuilder {
  buildUrl(
    product_code: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.product_development
    }/delete/${product_code}`;
  }
}

export class DeleteByRequestIdProductURLBuilder extends ProductURLBuilder {
  buildUrl(
    request_id: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.product_development
    }/delete-by-request-id/${request_id}`;
  }
}

export class LoginAuthURLBuilder extends ProductURLBuilder {
  buildUrl(): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.auth_development
    }/login`;
  }
}

export class GetDepartmentBuilder extends ProductURLBuilder {
  buildUrl(
    department_code: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.department_development
    }/${department_code}`;
  }
}

export class GetSubdepartmentBuilder extends ProductURLBuilder {
  buildUrl(
    sub_department_code: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.sub_department_development
    }/${sub_department_code}`;
  }
}

export class GetInventoryRequestBuilder extends ProductURLBuilder {
  buildUrl(
    employee_id: string | number | null | undefined,
    options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.inventory_request_development
    }/list/${employee_id}/${options?.cursor}/${options?.count}`;
  }
}

export class AddInventoryRequestBuilder extends ProductURLBuilder {
  buildUrl(
    _employee_id: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.inventory_request_development
    }/add`;
  }
}

export class GetByRequestIdInventoryRequestBuilder extends ProductURLBuilder {
  buildUrl(
    request_id: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.inventory_request_development
    }/${request_id}`;
  }
}

export class UpdateInventoryRequestBuilder extends ProductURLBuilder {
  buildUrl(
    request_id: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.inventory_request_development
    }/${request_id}`;
  }
}

export class UpdatePendingApprovalProductBuilder extends ProductURLBuilder {
  buildUrl(
    request_id: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.product_development
    }/update-pending-approval/${request_id}`;
  }
}

export class GetStoreBuilder extends ProductURLBuilder {
  buildUrl(
    store_code: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.store_development
    }/${store_code}`;
  }
}

export class GetByLastOneYearSales extends ProductURLBuilder {
  buildUrl(
    product_code: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.sales_development
    }/${product_code}`;
  }
}

export class GetReceivingReports extends ProductURLBuilder {
  buildUrl(
    store_code: string | number | null | undefined,
    options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.receiving_development
    }/${store_code}/${options?.cursor}/${options?.count}`;
  }
}

export class GetAdminDepartments extends ProductURLBuilder {
  buildUrl(
    _store_code: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.department_development
    }/admin/list`;
  }
}

export class GetAdminEmployees extends ProductURLBuilder {
  buildUrl(
    _employee_id: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.employee_development
    }/admin/list`;
  }
}

export class AddAdminDepartmentURLBuilder extends ProductURLBuilder {
  buildUrl(
    store_code: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.department_development
    }/admin/add/${store_code}`;
  }
}

export class AddAdminSubdepartmentURLBuilder extends ProductURLBuilder {
  buildUrl(
    store_code: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.sub_department_development
    }/admin/add/${store_code}`;
  }
}

export class getMonthlySalesURLBuilder extends ProductURLBuilder {
  buildUrl(
    store_code: string | number | null | undefined,
    _options: UrlBuilderOptionsType | undefined
  ): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.sales_development
    }/monthly/${store_code}`;
  }
}

export class ProductURLDirector {
  code: string | number | null | undefined;
  type: string | null;
  URL: string;
  options: UrlBuilderOptionsType | undefined;

  constructor(
    type: string,
    code: string | number | null | undefined,
    options: UrlBuilderOptionsType | undefined
  ) {
    this.type = type;
    this.code = code;
    this.URL = "";
    this.options = options;
  }

  buildURL() {
    let urlBuilder;

    switch (this.type) {
      case "ADD_PRODUCT":
        urlBuilder = new AddProductURLBuilder();
        break;
      case "EDIT_PRODUCT":
        urlBuilder = new EditProductURLBuilder();
        break;
      case "DELETE_PRODUCT":
        urlBuilder = new DeleteProductURLBuilder();
        break;
      case "LOGIN_AUTH":
        urlBuilder = new LoginAuthURLBuilder();
        break;
      case "GET_DEPARTMENT":
        urlBuilder = new GetDepartmentBuilder();
        break;
      case "GET_SUB_DEPARTMENT":
        urlBuilder = new GetSubdepartmentBuilder();
        break;
      case "GET_INVENTORY_REQUEST":
        urlBuilder = new GetInventoryRequestBuilder();
        break;
      case "ADD_INVENTORY_REQUEST":
        urlBuilder = new AddInventoryRequestBuilder();
        break;
      case "GET_BY_REQUEST_ID_INVENTORY_REQUEST":
        urlBuilder = new GetByRequestIdInventoryRequestBuilder();
        break;
      case "UPDATE_INVENTORY_REQUEST":
        urlBuilder = new UpdateInventoryRequestBuilder();
        break;
      case "DELETE_BY_REQUEST_ID_PRODUCT":
        urlBuilder = new DeleteByRequestIdProductURLBuilder();
        break;
      case "UPDATE_PENDING_APPROVAL_PRODUCT":
        urlBuilder = new UpdatePendingApprovalProductBuilder();
        break;
      case "GET_STORE":
        urlBuilder = new GetStoreBuilder();
        break;
      case "GET_BY_LAST_ONE_YEAR_SALES":
        urlBuilder = new GetByLastOneYearSales();
        break;
      case "GET_RECEIVING_REPORTS":
        urlBuilder = new GetReceivingReports();
        break;
      case "GET_ADMIN_DEPARTMENTS":
        urlBuilder = new GetAdminDepartments();
        break;
      case "GET_ADMIN_EMPLOYEES":
        urlBuilder = new GetAdminEmployees();
        break;
      case "ADD_ADMIN_DEPARTMENT":
        urlBuilder = new AddAdminDepartmentURLBuilder();
        break;
      case "ADD_ADMIN_SUB_DEPARTMENT":
        urlBuilder = new AddAdminSubdepartmentURLBuilder();
        break;
      case "GET_MONTHLY_SALES":
        urlBuilder = new getMonthlySalesURLBuilder();
        break;
      default:
        throw new Error("Invalid type");
    }

    this.URL = urlBuilder.buildUrl(this.code, this.options);
  }

  getProductURL(): string {
    return this.URL;
  }
}
