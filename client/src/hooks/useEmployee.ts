import { useEffect, useState } from "react";
import { ProductURLDirector } from "./helpers/ProductURLBuilder";

const useEmployee = (employeeId: number | undefined, options: any) => {
  const [employeeData, setEmployeeData] = useState();
  const [employeeIsLoading, setemployeeIsLoading] = useState(false);
  const [employeeError, setEmployeeError] = useState(false);

  useEffect(() => {
    let employeeUrl;

    if (options?.type?.split("_")[1] === "ADMIN") {
      const urlDirector = new ProductURLDirector(
        options.type,
        employeeId,
        undefined
      );

      urlDirector.buildURL();

      employeeUrl = urlDirector.getProductURL();

      if (employeeUrl) {
        setemployeeIsLoading(true);
        const token = localStorage.getItem("accessToken");
        fetch(employeeUrl, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              setemployeeIsLoading(false);
              setEmployeeData(data);
            }
          });
      }
    }
  }, [employeeId]);

  return { employeeData, employeeError, employeeIsLoading };
};

export default useEmployee;
