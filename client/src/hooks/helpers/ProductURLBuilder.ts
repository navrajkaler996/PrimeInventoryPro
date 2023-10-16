import { API_ENDPOINTS } from "../../utils/constants";

//ProductURLBuilder abstract class can be extended and implemented in other class to build a product url
//according to the method provided.
//This helper is created to implement the Open/Close SOLID principle.
abstract class ProductURLBuilder {
  abstract buildUrl(...args: Array<any>): string;
}

export class PostProductURLBuilder extends ProductURLBuilder {
  buildUrl(): string {
    return `${import.meta.env.VITE_REACT_API}/${
      API_ENDPOINTS.product_development
    }/add`;
  }
}

export class PutProductURLBuilder extends ProductURLBuilder {
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

export class ProductURLDirector {
  method: string;
  productCode: string | null;
  productURL: string;

  constructor(method: string, productCode: string | null) {
    this.method = method;
    this.productCode = productCode;
    this.productURL = "";
  }

  buildURL() {
    let urlBuilder;

    switch (this.method) {
      case "POST":
        urlBuilder = new PostProductURLBuilder();
        break;
      case "PUT":
        urlBuilder = new PutProductURLBuilder();
        break;
      case "DELETE":
        urlBuilder = new DeleteProductURLBuilder();
        break;
      default:
        throw new Error("Invalid method");
    }
    if (this.productCode)
      this.productURL = urlBuilder.buildUrl(this.productCode);
  }

  getProductURL(): string {
    return this.productURL;
  }
}
