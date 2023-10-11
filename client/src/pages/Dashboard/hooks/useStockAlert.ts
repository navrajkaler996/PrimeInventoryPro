import { useEffect, useState } from "react";
import { ProductDataType } from "../utils/types";

//Custom hook to fetch products where stock_alert is true.
/////It is designed to work for departments as well as subdepartments
const useStockAlert = (
  departmentCode: String | null,
  cursor: Number | undefined
) => {
  //State to store products
  const [products, setProducts] = useState<ProductDataType["productData"][]>(
    []
  );
  //State to status of product fetching
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (cursor === undefined) setProducts([]);
    setLoading(true);
    setError(false);
    fetch(
      `${
        import.meta.env.VITE_REACT_API
      }/api/v1/product/stockalert/${departmentCode}/${cursor}`,
      {
        method: "GET",
      }
    )
      .then((response) => response?.json())
      .then((data) => {
        //If returned products are less than 8 and its the first API call
        /////This means, department has been changed from the dropdown
        if (cursor === undefined && data.length < 11) {
          setProducts(data);
        } else {
          setProducts((prevProducts) => {
            return [...new Set([...prevProducts, ...data])];
          });
        }
        setHasMore(data.length > 0);
        setLoading(false);
      });
  }, [departmentCode, cursor]);

  return { loading, error, products, hasMore };
};

export default useStockAlert;
