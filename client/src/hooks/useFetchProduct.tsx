import { useEffect, useState } from "react";

import { ProductDataType } from "../pages/Dashboard/utils/types";
import { API_ENDPOINTS } from "../utils/constants";

//CUSTOM HOOK TO FETCH PRODUCRS USING department_code/sub_department_code.
const useFetchProduct = (
  departmentCode: String | null,
  cursor: Number | undefined,
  count: number | 0,
  keyword: string | undefined,
  options: {
    api: string;
  }
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

  //useEffect will execute everytime cursor is changed.
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
    let productURL;
    //If options are provided, productURL will be changed.
    if (Object.keys(options)?.length > 0 && options.api.length > 0) {
      if (options.api === "stockalert") {
        productURL = `${import.meta.env.VITE_REACT_API}/${
          API_ENDPOINTS.product_development
        }/${options.api}/${departmentCode}/${cursor}/${count}`;
      }

      if (options.api === "search" && keyword && keyword?.length > 0) {
        productURL = `${import.meta.env.VITE_REACT_API}/${
          API_ENDPOINTS.product_development
        }${options.api}/${keyword}/${departmentCode}`;
      }
    } else {
      productURL = `${import.meta.env.VITE_REACT_API}/${
        API_ENDPOINTS.product_development
      }/${departmentCode}/${cursor}/${count}`;
    }

    if (productURL) {
      //Using fetch to make an API call.
      fetch(productURL, {
        method: "GET",
      })
        .then((response) => response?.json())
        .then((data) => {
          //This is for a special case when API returns less products than the cound value at its first call.
          /////There is no previous data, so no need to mere the incoming data with previous products.
          if (cursor === undefined && data.length < count - 1) {
            setProducts(data);
          } else {
            setProducts((prevProducts) => {
              //Merging previous data with incoming data.
              return [...new Set([...prevProducts, ...data])];
            });
          }
          setHasMore(data.length > 0);
          setLoading(false);
        });
    }
  }, [departmentCode, cursor, keyword]);

  return { products, loading, error, hasMore };
};

export default useFetchProduct;
