import { useEffect, useState } from "react";
import { ProductURLDirector } from "./helpers/ProductURLBuilder";
import { InventoryRequestType } from "../components/utils/types";

/////CUSTOM HOOK TO FETCH DATA RELATED TO INVENTORY REQUESTS
/////ACCEPTS FOUR PROPS
//employee_id: A string value used in the API
//cursor: A number used in the API for cusor-based pagination
//count: A number that defines how many records to fetch per API call
//options: An object which contains atleast two options: method, a string value which contains the method
//of the API request and type, a string value which is used to build the URL for the API call
const useInventoryRequest = (
  employee_id: number | undefined,
  cursor: number | undefined,
  count: number | 0,
  options: {
    method: string;
    type: string;
  }
) => {
  const [data, setData] = useState<InventoryRequestType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, _setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    let inventoryRequestUrl = "";

    //Using URLDirector to build the API URL according to the type provided
    //in options prop
    const urlDirector = new ProductURLDirector(options.type, employee_id, {
      cursor: cursor,
      count: count,
    });

    urlDirector.buildURL();

    inventoryRequestUrl = urlDirector.getProductURL();

    if (inventoryRequestUrl) {
      setLoading(true);
      const token = localStorage.getItem("accessToken");
      fetch(inventoryRequestUrl, {
        method: options.method,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          //This is for a special case when API returns less products than the cound value at its first call.
          /////There is no previous data, so no need to mere the incoming data with previous products.
          if (cursor === undefined && data.length < count - 1) {
            setData(data);
          } else {
            //Merging previous data with incoming data.
            setData((prevData) => {
              return [...new Set([...prevData, ...data])];
            });
          }
          setHasMore(data.length > 0);
          setLoading(false);
        });
    }
  }, [employee_id, cursor]);

  return { data, loading, error, hasMore };
};

export default useInventoryRequest;
