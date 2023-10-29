import { useEffect, useState } from "react";
import { ProductURLDirector } from "./helpers/ProductURLBuilder";

const useDepartment = (
  departmentCode: string | undefined,
  options: {
    type: string;
  }
) => {
  const [departmentData, setDepartmentData] = useState();
  const [departmentIsLoading, setDepartmentIsLoading] = useState(false);
  const [departmentError, setDepartmentError] = useState(false);

  useEffect(() => {
    let departmentUrl;

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
  }, [departmentCode]);

  return { departmentData, departmentIsLoading, departmentError };
};

export default useDepartment;
