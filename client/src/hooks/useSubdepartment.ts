import { useState } from "react";
import { ProductURLDirector } from "./helpers/ProductURLBuilder";
import { createApiResponseMessage } from "../utils/helpers";

const useSubdepartment = (
  departmentCode: string | undefined,
  options: {
    type: string;
  }
) => {
  const [subdepartmentData, setSubdepartmentData] = useState();
  const [subdepartmentIsLoading, setSubdepartmentIsLoading] = useState(false);
  const [subdepartmentError, setSubdepartmentError] = useState(false);

  const [requestStatus, setRequestStatus] = useState({
    status: false,
    message: "",
    type: "",
  });

  const clickHandler = async (
    body: any,
    options: {
      method: string;
      type: string;
    }
  ) => {
    setSubdepartmentIsLoading(true);

    let subdepartmentUrl = "";

    const urlDirector = new ProductURLDirector(options.type, body?.store_code);
    urlDirector.buildURL();

    subdepartmentUrl = urlDirector.getProductURL();

    if (subdepartmentUrl) {
      const response = await fetch(subdepartmentUrl, {
        method: options?.method,
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("API request failed!");
      }

      const data = await response?.json();

      if (data?.department_id) {
        setSubdepartmentIsLoading(false);

        const message = createApiResponseMessage("success_product_request");
        setRequestStatus({
          status: true,
          message: message,
          type: "success",
        });

        return data;
      } else {
        setSubdepartmentIsLoading(false);
        false;
        const message = createApiResponseMessage("failed_product_request");
        setRequestStatus({
          status: true,
          message: message,
          type: "failed",
        });
      }
    }
  };

  return {
    clickHandler,
    subdepartmentIsLoading,
    requestStatus,
    subdepartmentError,
  };
};

export default useSubdepartment;
