import * as React from "react";
import { useRef, useState, useCallback, RefObject, useEffect } from "react";
import { useSelector } from "react-redux";

//Importing custom hooks
import useStockAlert from "../hooks/useStockAlert";

//Importing slice
import { DepartmentState } from "../../../features/departmentSlice";

//Importing utilities
import { SKELETON_STYLES, stockAlertKeys } from "../../../utils/constants";
import { ProductDataType } from "../utils/types";

//THIS COMPONENT CREATES A TABLE WHICH DISPLAYS THE PRODUCTS WITH STOCK ALERTS.
//////THIS TABLE IS CREATED ACCORDING TO DEPARTMENT OR SUBDEPARTMENT SELECTED.
const StockAlerts: React.FC<{}> = () => {
  //Extracting active department from the redux store.
  const currentDepartment: DepartmentState["activeDepartment"] = useSelector(
    (state: any) => state?.activeDepartment
  );

  //Using IntersectionObserver API for infinite scroll
  const observer: RefObject<IntersectionObserver | null> = useRef(null);

  //Infinite scroll is cursor-based pagination
  /////For the first API call, cursor is set to undefined.
  /////It later changes to the product_id of the last product.
  const [cursor, setCursor] = useState<number | undefined>(undefined);

  //If the the department is changed for the dropdown, cursor is intialised to undefined.
  useEffect(() => {
    setCursor(undefined);
  }, [currentDepartment?.department_code]);

  //Using useStockAlert custom hook to fetch the list of products.
  const {
    loading: productIsLoading,
    error: productError,
    products: productData,
    hasMore,
  } = useStockAlert(currentDepartment.department_code, cursor);

  //Tracking the product_id of the last rendered product for cursor.
  const lastProductId = useRef<number | undefined>();

  //Updating the lastProductId whenever productData changes.
  useEffect(() => {
    if (productData?.length > 7) {
      lastProductId.current =
        productData[productData?.length - 1]["product_id"];
    } else {
      lastProductId.current = -1;
    }
  }, [productData]);

  //Using IntersectionObserver for infinite scroll
  const lastProduct = useCallback(
    (node: HTMLElement | null) => {
      if (productIsLoading) return;
      let currentObserver = observer.current as IntersectionObserver | null;
      if (currentObserver) currentObserver?.disconnect();

      currentObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          if (lastProductId && lastProductId.current != -1) {
            setCursor(lastProductId.current);
          }
        }
      });

      if (node) currentObserver.observe(node);
    },
    [productIsLoading, hasMore]
  );

  return (
    <div id="dashboard__stockalerts" className="flex justify-center ">
      <div className="max-w-[80rem] w-[90%] h-[31.5rem] lg:ml-[6rem] bg-white  rounded-custom shadow-custom overflow-auto">
        <>
          {" "}
          <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">Stock alert</h1>
          <hr className="m-[1.5rem] text-gray" />
          <div>
            <table className="table-auto w-[100%] text-[.7em] md:text-[1em] border-seperate border-spacing-y-3">
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
                {productIsLoading && hasMore && <p>loading...</p>}
              </tbody>
            </table>
          </div>
        </>
      </div>
    </div>
  );
};

export default React.memo(StockAlerts);
