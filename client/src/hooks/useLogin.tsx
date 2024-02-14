import { useState } from "react";
import { createResponseMessage } from "../utils/helpers";
import { ProductURLDirector } from "./helpers/ProductURLBuilder";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState({
    status: false,
    message: "",
    type: "",
  });
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({});

  const clickHandler = async (
    body: any,
    options: {
      method: string;
      type: string;
    }
  ) => {
    setLoading(true);

    let loginURL = "";
    let method = "POST";

    const urlDirector = new ProductURLDirector(options.type, null);
    urlDirector.buildURL();

    loginURL = urlDirector.getProductURL();

    if (loginURL) {
      const response = await fetch(loginURL, {
        method: method,
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response?.json();
      setLoading(false);

      if (data?.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("loggedInUser", JSON.stringify(data.user));

        setUserData(data.user);
        const message = createResponseMessage("success", method);

        setRequestStatus({
          status: true,
          message: message,
          type: "success",
        });
        // const message = createResponseMessage("failed", method);

        setRequestStatus({
          status: true,
          message: data.message,
          type: "failed",
        });
      }
    }
  };

  return { clickHandler, loading, requestStatus, error, userData };
};

export default useLogin;
