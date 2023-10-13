import { useState } from "react";
import { API_ENDPOINTS } from "../utils/constants";

const useProduct = () => {
  const [loading, setLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState({
    status: false,
    message: "",
    type: "",
  });
  const [error, _setError] = useState(false);

  const createResponseMessage = (type: string, method: string) => {
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

  const clickHandler = async (
    body: Object,
    options: {
      api: string;
    }
  ) => {
    setLoading(true);
    //Variable to store the API URL
    let productURL = "";
    let method = "";
    //If options are provided, productURL will be changed.
    if (Object.keys(options)?.length > 0 && options.api.length > 0) {
      if (options.api === "add") {
        productURL = `${import.meta.env.VITE_REACT_API}/${
          API_ENDPOINTS.product_development
        }/add`;
        method = "POST";
      } else if (options.api === "edit") {
        productURL = `${import.meta.env.VITE_REACT_API}/${
          API_ENDPOINTS.product_development
        }/update`;
        method = "PUT";
      } else if (options.api === "delete") {
        productURL = `${import.meta.env.VITE_REACT_API}/${
          API_ENDPOINTS.product_development
        }/delete/${body.product_code}`;
        method = "DELETE";
      }
    } else {
      productURL = `${import.meta.env.VITE_REACT_API}/${
        API_ENDPOINTS.product_development
      }`;
    }

    const response = await fetch(productURL, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: method === "DELETE" ? null : JSON.stringify(body),
    });

    const data = await response?.json();

    if (data?.product_id) {
      setLoading(false);

      const message = createResponseMessage("success", method);
      setRequestStatus({
        status: true,
        message: message,
        type: "success",
      });
    } else {
      setLoading(false);

      const message = createResponseMessage("failed", method);
      setRequestStatus({
        status: true,
        message: message,
        type: "failed",
      });
    }
  };

  return { clickHandler, loading, requestStatus, error };
};

export default useProduct;
