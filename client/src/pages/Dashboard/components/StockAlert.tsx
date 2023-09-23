import * as React from "react";
import { useRef } from "react";
import { useGetStockAlertProductByDepartmentCodeQuery } from "../../../services/product";
import { SKELETON_STYLES, stockAlertKeys } from "../../../utils/constants";
import { ProductDataType } from "../utils/types";
import { useSelector } from "react-redux";

//THIS COMPONENT CREATES A TABLE WHICH DISPLAYS THE PRODUCTS WITH STOCK ALERTS.
//////THIS TABLE IS CREATED ACCORDING TO DEPARTMENT OR SUBDEPARTMENT SELECTED.
const StockAlerts: React.FC = () => {
  const ref = useRef();

  //Extracting the current active department from the store
  const currentDepartment = useSelector(
    (state: any) => state?.activeDepartment
  );

  //Executing hook to fetch stock alert products using department_code/sub_department_code
  /////The code is used from currentDepartment which is fetched from redux store.
  /////It is written as "department_code" but can also have the value of sub_department_code.
  const {
    data: productData,
    error: productError,
    isLoading: productIsLoading,
  } = useGetStockAlertProductByDepartmentCodeQuery(
    currentDepartment?.department_code
  );

  React.useEffect(() => {
    console.log(ref);
  }, [productData]);

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
                      (product: ProductDataType["productData"], i) => {
                        if (i === productData.length - 1) {
                          return (
                            <tr
                              className="mt-[4rem]"
                              key={product.product_code}
                              ref={ref}>
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
