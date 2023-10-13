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
      body: JSON.stringify(body),
    });

    const data = await response?.json();

    if (data?.product_id) {
      setLoading(false);
      setRequestStatus({
        status: true,
        message: `Product ${
          method === "POST" ? "created" : "updated"
        } successfully!`,
        type: "success",
      });
    } else {
      setLoading(false);
      setRequestStatus({
        status: true,
        message: `Product could not be ${
          method === "POST" ? "created" : "updated"
        }`,
        type: "failed",
      });
    }
  };

  return { clickHandler, loading, requestStatus, error };
};

export default useProduct;
