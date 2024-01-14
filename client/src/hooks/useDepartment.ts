import { useEffect, useState } from "react";
import { ProductURLDirector } from "./helpers/ProductURLBuilder";
import { createApiResponseMessage } from "../utils/helpers";

const useDepartment = (
  departmentCode: string | undefined,
  options: {
    type: string;
  }
) => {
  const [departmentData, setDepartmentData] = useState();
  const [departmentIsLoading, setDepartmentIsLoading] = useState(false);
  const [departmentError, setDepartmentError] = useState(false);

  const [requestStatus, setRequestStatus] = useState({
    status: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    let departmentUrl;

    if (departmentCode || options?.type?.split("_")[1] === "ADMIN") {
      const urlDirector = new ProductURLDirector(
        options.type,
        departmentCode,
        undefined
      );

      urlDirector.buildURL();

      departmentUrl = urlDirector.getProductURL();

      if (departmentUrl) {
        setDepartmentIsLoading(true);
        const token = localStorage.getItem("accessToken");
        fetch(departmentUrl, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              setDepartmentIsLoading(false);
              setDepartmentData(data);
            }
          });
      }
    }
  }, [departmentCode]);

  const clickHandler = async (
    body: any,
    options: {
      method: string;
      type: string;
    }
  ) => {
    setDepartmentIsLoading(true);

    let departmentUrl = "";
    let method = "POST";

    const urlDirector = new ProductURLDirector(options.type, body?.store_code);
    urlDirector.buildURL();

    departmentUrl = urlDirector.getProductURL();
    console.log(departmentUrl, "aaa");
    if (departmentUrl) {
      const response = await fetch(departmentUrl, {
        method: method,
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("API request failed!");
      }

      const data = await response?.json();

      if (data?.department_id) {
        setDepartmentIsLoading(false);

        const message = createApiResponseMessage("success_product_request");
        setRequestStatus({
          status: true,
          message: message,
          type: "success",
        });

        return data;
      } else {
        setDepartmentIsLoading(false);
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
    departmentData,
    departmentIsLoading,
    requestStatus,
    departmentError,
  };
};

export default useDepartment;
