import * as React from "react";
import { ProductDataType } from "../pages/Dashboard/utils/types";
import { getValue } from "./utils/helper";

interface ProductTableType {
  productData: ProductDataType["productData"][] | undefined;
  productIsLoading: Boolean;
  productError: Object;
  options: {
    lastProduct: any;
    keys: Object;
  };
  productClickHandler: Function;
}

const ProductTable: React.FC<ProductTableType> = ({
  productData,
  options,
  productClickHandler,
}) => {
  return (
    <table className="table-auto w-[100%] text-[.7em] md:text-[1em] border-seperate border-spacing-y-3">
      <thead className="sticky top-0 bg-white">
        <tr>
          {Object.keys(options?.keys)?.length > 0 &&
            Object.keys(options?.keys)?.map((key) => <th key={key}>{key}</th>)}
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
                    className="mt-[4rem] hover:cursor-pointer hover:bg-gray "
                    id={product.product_code}
                    key={product.product_code}
                    ref={(node) => options?.lastProduct(node)}
                    onClick={(e) => productClickHandler(e.currentTarget.id)}>
                    {Object.values(options?.keys)?.map((value) => {
                      if (value === "in_transit")
                        return (
                          <td className="pt-3">
                            {getValue(product, value) ? "Yes" : "No"}
                          </td>
                        );
                      return (
                        <td className="pt-3">{getValue(product, value)}</td>
                      );
                    })}
                  </tr>
                );
              }

              return (
                <tr
                  className="mt-[4rem] hover:cursor-pointer hover:bg-gray"
                  id={product.product_code}
                  key={product.product_code}
                  onClick={(e) => productClickHandler(e.currentTarget.id)}>
                  {Object.values(options?.keys)?.map((value) => {
                    if (value === "in_transit")
                      return (
                        <td className="pt-3">
                          {getValue(product, value) ? "Yes" : "No"}
                        </td>
                      );
                    return <td className="pt-3">{getValue(product, value)}</td>;
                  })}
                </tr>
              );
            }
          )}
      </tbody>
    </table>
  );
};

export default React.memo(ProductTable);
