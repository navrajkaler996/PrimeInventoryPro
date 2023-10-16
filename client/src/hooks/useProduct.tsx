import { useState } from "react";
import { ProductURLDirector } from "./helpers/ProductURLBuilder";
import { ProductDataType } from "../pages/Dashboard/utils/types";
import { createResponseMessage } from "./helpers/createResponseMessage";

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
    productCode: string | null,
    options: {
      api: string;
      method: string;
    }
  ) => {
    setLoading(true);

    //Using Open/Close principle
    const urlDirector = new ProductURLDirector(options.method, productCode);
    urlDirector.buildURL();
    let productURL = urlDirector.getProductURL();

    console.log(productURL);
    if (productURL && options.method) {
      const response = await fetch(productURL, {
        method: options.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: options.method === "DELETE" ? null : JSON.stringify(body),
      });

      const data = await response?.json();

      console.log(data);
      if (data?.product_id) {
        setLoading(false);

        const message = createResponseMessage("success", options.method);
        setRequestStatus({
          status: true,
          message: message,
          type: "success",
        });
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
