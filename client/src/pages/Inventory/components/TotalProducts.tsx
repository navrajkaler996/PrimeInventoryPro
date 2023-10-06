import * as React from "react";
import { RefObject, useCallback, useEffect, useRef } from "react";

//Importing reusable components
import ProductTable from "../../../components/ProductTable";

//Importing constants
import {
  TOTAL_PRODUCTS_KEYS,
  TOTAL_PRODUCT_COUNT,
} from "../../../utils/constants";

//Importing skeleton
import ProductTableSkeleton from "./ProductTableSkeleton";

//Importing types
import { TotalProductsType } from "../utils/types";

//RETURNS A TABLE WHICH LISTS ALL THE PRODUCTS IN THE ACTIVE DEPARTMENT OR SUBDEPARTMENT.
//It uses the data fetch by useProduct custom hook. This hook is being used in the parent component.
//Optimized using cursor-based infinite scroll.
const TotalProducts: React.FC<TotalProductsType> = ({
  productData,
  productIsLoading,
  productError,
  hasMore,
  cursor,
  setCursor,
}) => {
  //Ref for IntersectionObserver
  const observer: RefObject<IntersectionObserver | null> = useRef(null);

  //Ref to track the last product in the list.
  const lastProductId = useRef<number | undefined>();

  useEffect(() => {
    if (productData && productData?.length > TOTAL_PRODUCT_COUNT - 1) {
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

  return productIsLoading && cursor === undefined ? (
    <ProductTableSkeleton />
  ) : (
    <div
      id="inventory__total-products"
      className="w-[95%] bg-white md:mt-[4rem] ml-[auto] mr-[auto] shadow-custom rounded-custom">
      <h1 className="ml-[2rem] pt-[1rem] text-[2rem]">Total Products</h1>
      <hr className="m-[1.5rem] text-gray" />
      <div className="h-[35rem] overflow-auto">
        <ProductTable
          productData={productData}
          productIsLoading={productIsLoading}
          productError={productError}
          options={{ lastProduct: lastProduct, keys: TOTAL_PRODUCTS_KEYS }}
        />
        {productIsLoading && (
          <div className="text-center">
            <h2 className="pt-[1rem] pb-[1rem]">Loading...</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(TotalProducts);
