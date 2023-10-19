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

export class ProductURLDirector {
  productCode: string | null;
  type: string | null;
  productURL: string;

  constructor(type: string, productCode: string | null) {
    this.type = type;
    this.productCode = productCode;
    this.productURL = "";
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
      default:
        throw new Error("Invalid type");
    }

    this.productURL = urlBuilder.buildUrl(this.productCode);
  }

  getProductURL(): string {
    return this.productURL;
  }
}
