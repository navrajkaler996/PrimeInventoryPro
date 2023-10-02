import * as React from "react";
import { TOTAL_PRODUCTS_KEYS } from "../utils/constants";
import { ProductDataType } from "../pages/Dashboard/utils/types";

interface ProductTableType {
  productData: ProductDataType["productData"][];
  productIsLoading: Boolean;
  productError: Object;
  lastProduct: Function;
}
//
const ProductTable: React.FC<ProductTableType> = ({
  productData,
  productIsLoading,
  productError,
  lastProduct,
}) => {
  return (
    <div className="h-[35rem] overflow-auto">
      <table className="table-auto w-[100%] text-[.7em] md:text-[1em] border-seperate border-spacing-y-3">
        <thead className="sticky top-0 bg-white">
          <tr>
            {TOTAL_PRODUCTS_KEYS?.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody className="text-center capitalize">
          {productData?.length > 0 &&
            productData?.map(
              (product: ProductDataType["productData"], i: number) => {
                if (i + 1 === productData.length) {
                  return (
                    <tr
                      className="mt-[4rem]"
                      key={product.product_code}
                      ref={(node) => lastProduct(node)}>
                      <td className="pt-3">{product.product_id}</td>
                      <td className="pt-3">{product.product_name}</td>
                      <td className="pt-3">{product.product_code}</td>
                      <td className="pt-3">{product.price}</td>
                      <td className="pt-3">{product.total_quantity}</td>
                      <td className="pt-3">
                        {product.in_transit ? "Yes" : "No"}
                      </td>
                      <td className="pt-3">{product.department_code}</td>

                      <td className="pt-3">{product.total_sales}</td>
                    </tr>
                  );
                }
                return (
                  <tr className="mt-[4rem]" key={product.product_code}>
                    <td className="pt-3">{product.product_id}</td>
                    <td className="pt-3">{product.product_name}</td>
                    <td className="pt-3">{product.product_code}</td>
                    <td className="pt-3">{product.price}</td>
                    <td className="pt-3">{product.total_quantity}</td>
                    <td className="pt-3">
                      {" "}
                      {product.in_transit ? "Yes" : "No"}
                    </td>
                    <td className="pt-3">{product.department_code}</td>

                    <td className="pt-3">{product.total_sales}</td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(ProductTable);
