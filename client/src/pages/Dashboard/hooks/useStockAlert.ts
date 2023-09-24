import { useEffect, useState } from "react";
import { useGetStockAlertProductByDepartmentCodeQuery } from "../../../services/product";

const useStockAlert = (departmentCode: String, cursor: Number | undefined) => {
  const {
    data: productData,
    error: productError,
    isLoading: productIsLoading,
  } = useGetStockAlertProductByDepartmentCodeQuery({
    departmentCode,
    cursor,
  });

  const [products, setProducts] = useState([]);

  // useEffect(() => {}, [departmentCode, cursor]);

  return { productData, productError, productIsLoading };
};

export default useStockAlert;
