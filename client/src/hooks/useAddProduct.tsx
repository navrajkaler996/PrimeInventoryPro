import { useState } from "react";
import { API_ENDPOINTS } from "../utils/constants";

const useAddProduct = () => {
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
    //If options are provided, productURL will be changed.
    if (Object.keys(options)?.length > 0 && options.api.length > 0) {
      if (options.api === "add") {
        productURL = `${API_ENDPOINTS.product_development}/add`;
      } 
    } else {
      productURL = `${API_ENDPOINTS.product_development}`;
    }

    const response = await fetch(productURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response?.json();

    if (Object.keys(data)?.length > 0 && Object.keys(data).includes("code")) {
      if (data?.code === "P2002") {
        setLoading(false);
        setRequestStatus({
          status: true,
          message: "Product could not be created!",
          type: "failed",
        });
      }
    } else {
      setLoading(false);
      setRequestStatus({
        status: true,
        message: "Product created successfully!",
        type: "success",
      });
    }
  };

  return { clickHandler, loading, requestStatus, error };
};

export default useAddProduct;
