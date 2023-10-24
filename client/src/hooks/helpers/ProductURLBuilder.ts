import { API_ENDPOINTS } from "../../utils/constants";

//ProductURLBuilder abstract class can be extended and implemented in other class to build a product url
//according to the type provided.
//This helper is created to implement the Open/Close SOLID principle.
abstract class ProductURLBuilder {
  abstract buildUrl(...args: Array<any>): string;
}

export class AddProductURLBuilder extends ProductURLBuilder {
  buildUrl(): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.product_development
    }/add`;
  }
}

export class EditProductURLBuilder extends ProductURLBuilder {
  buildUrl(): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.product_development
    }/update`;
  }
}

export class DeleteProductURLBuilder extends ProductURLBuilder {
  buildUrl(product_code: string): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.product_development
    }/delete/${product_code}`;
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
  buildUrl(department_code: string): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.department_development
    }/${department_code}`;
  }
}

export class GetSubdepartmentBuilder extends ProductURLBuilder {
  buildUrl(sub_department_code: string): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.sub_department_development
    }/${sub_department_code}`;
  }
}

export class ProductURLDirector {
  code: string | null;
  type: string | null;
  URL: string;

  constructor(type: string, code: string | null | undefined) {
    this.type = type;
    this.code = code;
    this.URL = "";
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
      default:
        throw new Error("Invalid type");
    }

    this.URL = urlBuilder.buildUrl(this.code);
  }

  getProductURL(): string {
    return this.URL;
  }
}
