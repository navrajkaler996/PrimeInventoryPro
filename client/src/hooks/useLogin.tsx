import { useState } from "react";
import { API_ENDPOINTS } from "../utils/constants";
import { createResponseMessage } from "../utils/helpers";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState({
    status: false,
    message: "",
    type: "",
  });
  const [error, setError] = useState(false);

  const clickHandler = async (
    body: any,
    options: {
      api: string;
    }
  ) => {
    setLoading(true);

    let productURL = "";
    let method = "";

    if (Object.keys(options)?.length > 0 && options.api.length > 0) {
      if (options.api === "login") {
        productURL = `${import.meta.env.VITE_REACT_API}/${
          API_ENDPOINTS.product_development
        }/login`;

        method = "POST";
      }
    }

    if (productURL) {
      const response = await fetch(productURL, {
        method: method,
        headers: { "Content-type": "application/json" },
        body: body,
      });

      const data = await response?.json();
      setLoading(false);
      if (data?.employee_id) {
        const message = createResponseMessage("success", method);

        setRequestStatus({
          status: true,
          message: message,
          type: "success",
        });
      } else {
        const message = createResponseMessage("failed", method);

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

export default useLogin;
