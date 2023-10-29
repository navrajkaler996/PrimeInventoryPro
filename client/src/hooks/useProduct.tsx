import { useState } from "react";
import { ProductURLDirector } from "./helpers/ProductURLBuilder";
import { ProductDataType } from "../pages/Dashboard/utils/types";

const createResponseMessage = (type: string, method: string): string => {
  if (type === "success") {
    if (method === "POST") return "Product created successfully";
    if (method === "PUT") return "Product updated successfully";
    if (method === "DELETE") return "Product deleted successfully";
  } else if (type === "failed") {
    if (method === "POST") return "Product could not be created!";
    if (method === "PUT") return "Product could not be updated";
    if (method === "DELETE") return "Product could not be deleted";
  }

  return "Unknown response";
};

const useProduct = () => {
  const [loading, setLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState({
    status: false,
    message: "",
    type: "",
  });
  const [error, _setError] = useState(false);

  const clickHandler = async (
    body: ProductDataType["productData"] | undefined,
    productCode: number | string | null | undefined,
    options: {
      method: string;
      type: string;
    }
  ) => {
    setLoading(true);

    //Using Open/Close principle
    const urlDirector = new ProductURLDirector(
      options.type,
      productCode,
      undefined
    );
    urlDirector.buildURL();
    let productURL = urlDirector.getProductURL();

    if (productURL && options.method) {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(productURL, {
        method: options.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: options.method === "DELETE" ? null : JSON.stringify(body),
      });

      const data = await response?.json();

      if (data?.product_id) {
        setLoading(false);
        const message = createResponseMessage("success", options.method);
        setRequestStatus({
          status: true,
          message: message,
          type: "success",
        });

        return data;
      } else {
        setLoading(false);
        const message = createResponseMessage("failed", options.method);
        setRequestStatus({
          status: true,
          message: message,
          type: "failed",
        });
      }
    }
  };

  return { clickHandler, loading, requestStatus, error };
};

export default useProduct;
