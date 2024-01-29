import * as React from "react";
import { useRef, useState, useCallback, RefObject, useEffect } from "react";
import { useSelector } from "react-redux";

//Importing custom hooks

import useFetchProducts from "../../../hooks/useFetchProduct";

//Importing slice

//Importing utilities
import {
  STOCK_ALERT_KEYS,
  STOCK_ALERT_PRODUCT_COUNT,
} from "../../../utils/constants";
import ProductTable from "../../../components/ProductTable";

import { useNavigate } from "react-router-dom";

//THIS COMPONENT CREATES A TABLE WHICH DISPLAYS THE PRODUCTS WITH STOCK ALERTS.
//////THIS TABLE IS CREATED ACCORDING TO DEPARTMENT OR SUBDEPARTMENT SELECTED.
const StockAlerts: React.FC<{}> = () => {
  const navigate = useNavigate();
  //Extracting active department from the redux store.
  const currentDepartment = useSelector(
    (state: any) => state?.activeDepartment
  );

  const { store_code: storeCode } = useSelector(
    (state: any) => state?.loggedInUser
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

  //Using useFetchProduct custom hook to fetch the list of products.
  const {
    products: productData,
    loading: productIsLoading,
    error: productError,
    hasMore,
  } = useFetchProducts(
    currentDepartment?.department_code,
    storeCode,
    cursor,
    STOCK_ALERT_PRODUCT_COUNT,
    "",
    {
      api: "stockalert",
    }
  );

  //Tracking the product_id of the last rendered product for cursor.
  const lastProductId = useRef<number | undefined>();

  //Updating the lastProductId whenever productData changes.
  useEffect(() => {
    if (productData?.length > 11) {
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

  //Function that invokes when a row is clicked in the table
  const productClickHandler = (productCode: string) => {
    // setProductCode(productCode);
    navigate(`/inventory/product/${productCode}`);
  };

  return (
    <div id="dashboard__stockalerts" className="flex justify-center ">
      <div className="max-w-[80rem] w-[90%] h-[38rem] lg:ml-[6rem] bg-white  rounded-custom shadow-custom overflow-auto">
        <>
          {" "}
          <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">Stock alert</h1>
          <hr className="m-[1.5rem] text-gray" />
          <div>
            {/* Using reusable component: ProductTable to display the day */}
            <ProductTable
              productData={productData}
              productIsLoading={productIsLoading}
              productError={productError}
              options={{ lastProduct: lastProduct, keys: STOCK_ALERT_KEYS }}
              productClickHandler={productClickHandler}
            />
          </div>
        </>
      </div>
    </div>
  );
};

export default React.memo(StockAlerts);
