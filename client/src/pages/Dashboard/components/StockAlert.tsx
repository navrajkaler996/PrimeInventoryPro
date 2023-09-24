import * as React from "react";
import { useRef, useState, useCallback, RefObject } from "react";
import { SKELETON_STYLES, stockAlertKeys } from "../../../utils/constants";
import { ProductDataType } from "../utils/types";
import useStockAlert from "../hooks/useStockAlert";
import StockAlertSkeleton from "./StockAlertSkeleton";
import { DepartmentState } from "../../../features/departmentSlice";

//THIS COMPONENT CREATES A TABLE WHICH DISPLAYS THE PRODUCTS WITH STOCK ALERTS.
//////THIS TABLE IS CREATED ACCORDING TO DEPARTMENT OR SUBDEPARTMENT SELECTED.
const StockAlerts: React.FC<{
  currentDepartment: DepartmentState["activeDepartment"];
}> = ({ currentDepartment }) => {
  if (!currentDepartment?.department_code) return <StockAlertSkeleton />;

  const observer: RefObject<IntersectionObserver | null> = useRef(null);

  const [cursor, setCursor] = useState(undefined);

  //Executing the custom hook to fetch stock alert products using department_code/sub_department_code
  /////The code is used from currentDepartment which is fetched from redux store.
  /////It is written as "department_code" but can also have the value of sub_department_code.
  const { productData, productError, productIsLoading } = useStockAlert(
    currentDepartment.department_code,
    cursor
  );

  const lastProductId = useRef();

  React.useEffect(() => {
    if (productData?.length > 7) {
      lastProductId.current = productData[productData?.length - 1].product_id;
    }
  }, [productData]);

  React.useEffect(() => {}, [currentDepartment]);

  const lastProduct = useCallback(
    (node: HTMLElement | null) => {
      if (productIsLoading) return;
      let currentObserver = observer.current as IntersectionObserver | null;
      if (currentObserver) currentObserver?.disconnect();

      currentObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (lastProductId) {
            setCursor(lastProductId.current);
          }
        }
      });

      if (node) currentObserver.observe(node);
    },
    [productIsLoading]
  );

  return (
    <div id="dashboard__stockalerts">
      <div
        className=" max-w-[80rem] h-[31.5rem] bg-white  ml-[6rem] rounded-custom shadow-custom overflow-auto"
        style={productIsLoading ? SKELETON_STYLES : {}}>
        {!productIsLoading && (
          <>
            {" "}
            <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">Stock alert</h1>
            <hr className="m-[1.5rem] text-gray" />
            <div>
              <table className="table-fixed w-[100%] border-seperate border-spacing-y-3">
                <thead className="sticky top-0 bg-white">
                  <tr>
                    {stockAlertKeys?.map((key, index) => (
                      <th key={index}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-center capitalize">
                  {productData &&
                    productData?.length > 0 &&
                    productData?.map(
                      (product: ProductDataType["productData"], i: number) => {
                        if (i + 1 === productData.length) {
                          return (
                            <tr
                              className="mt-[4rem]"
                              key={product.product_code}
                              ref={(node) => lastProduct(node)}>
                              <td className="pt-3">{product.product_name}</td>
                              <td className="pt-3">{product.product_code}</td>
                              <td className="pt-3">
                                {product.sub_department_code}
                              </td>
                              <td className="pt-3">{product.total_quantity}</td>
                              <td className="pt-3">{product.cap}</td>
                              <td className="pt-3">
                                {product.cap - product.total_quantity}
                              </td>
                            </tr>
                          );
                        }

                        return (
                          <tr className="mt-[4rem]" key={product.product_code}>
                            <td className="pt-3">{product.product_name}</td>
                            <td className="pt-3">{product.product_code}</td>
                            <td className="pt-3">
                              {product.sub_department_code}
                            </td>
                            <td className="pt-3">{product.total_quantity}</td>
                            <td className="pt-3">{product.cap}</td>
                            <td className="pt-3">
                              {product.cap - product.total_quantity}
                            </td>
                          </tr>
                        );
                      }
                    )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(StockAlerts);
