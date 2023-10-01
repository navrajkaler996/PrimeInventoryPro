import * as React from "react";
import { useSelector } from "react-redux";
import useProducts from "../hooks/useProducts";
import Table from "./ProductTable";
import { DepartmentState } from "../../../features/departmentSlice";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { PRODUCT_COUNT } from "../../../utils/constants";

const TotalProducts: React.FC = () => {
  //Fetching active department
  const currentDepartment: DepartmentState["activeDepartment"] = useSelector(
    (state: any) => state?.activeDepartment
  );

  const observer: RefObject<IntersectionObserver | null> = useRef(null);

  const [cursor, setCursor] = useState<number | undefined>(undefined);

  useEffect(() => {
    setCursor(undefined);
  }, [currentDepartment?.department_code]);

  const {
    products: productData,
    loading: productIsLoading,
    error: productError,
    hasMore,
  } = useProducts(
    currentDepartment?.department_code,
    cursor,
    PRODUCT_COUNT,
    {}
  );

  //Tracking the product_id of the last rendered product for cursor.
  const lastProductId = useRef<number | undefined>();

  useEffect(() => {
    if (productData?.length > PRODUCT_COUNT - 1) {
      lastProductId.current =
        productData[productData?.length - 1]["product_id"];
    } else lastProductId.current = -1;
  }, [productData]);

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
    <div
      id="inventory__total-products"
      className="w-[95%] bg-white md:mt-[7rem] ml-[auto] mr-[auto] shadow-custom rounded-custom">
      <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">Total Products</h1>
      <hr className="m-[1.5rem] text-gray" />
      <Table
        productData={productData}
        productIsLoading={productIsLoading}
        productError={productError}
        lastProduct={lastProduct}
      />
    </div>
  );
};

export default React.memo(TotalProducts);
