import { useEffect, useState } from "react";
import { ProductDataType } from "../../Dashboard/utils/types";
import { API_ENDPOINTS } from "../../../utils/constants";

//CUSTOME HOOK TO FETCH PRODUCRS USING department_code/sub_department_code.
const useProducts = (
  departmentCode: String | null,
  cursor: Number | undefined,
  count: Number | 0,
  options: Object = {}
) => {
  //State to store products
  const [products, setProducts] = useState<ProductDataType["productData"][]>(
    []
  );
  //State to track the status of API.
  /////true when API is executed, false while it is executing.
  const [loading, setLoading] = useState(true);
  //State for error.
  const [error, setError] = useState(false);
  //State to track if there are more products to be fetched.
  /////Will be used to stop the infinite scroll.
  const [hasMore, setHasMore] = useState(false);

  //useEffect will execute everytime cursor is changed
  /////and cursor will change when table is scrolled to the last element.
  /////or when current department (department_code) is changed.
  useEffect(() => {
    //For first API call, cursor is undefined, so products array should be empty.
    if (cursor === undefined) setProducts([]);
    //Loading is true when API is called.
    setLoading(true);
    //Error is false when API is called.
    setError(false);
    //Variable to store the API URL
    let productURL = `${API_ENDPOINTS.product_development}/${departmentCode}/${cursor}/${count}`;
    //If options are provided, productURL will be changed.
    if (Object.keys(options)?.length > 0) {
    }

    //Using fetch to make an API call.
    fetch(productURL, {
      method: "GET",
    })
      .then((response) => response?.json())
      .then((data) => {
        //This is for a special case when API returns less products than the cound value at its first call.
        /////There is no previous data, so no need to mere the incoming data with previous products.
        if (cursor === undefined && data.length < count) {
          setProducts(data);
        } else {
          setProducts((prevProducts) => {
            //Merging previous data with incoming data.
            return [...new Set([...prevProducts, ...data])];
          });

          setHasMore(data.length > 0);
          setLoading(false);
        }
      });
  }, [departmentCode, cursor]);

  return { products, loading, error, hasMore };
};

export default useProducts;
