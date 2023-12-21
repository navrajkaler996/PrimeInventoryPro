import { useEffect, useState } from "react";
import { ProductURLDirector } from "./helpers/ProductURLBuilder";
import { ReceivingReportType } from "../pages/Dashboard/utils/types";

const useReceiving = (
  storeCode: string | undefined,
  cursor: number | undefined,
  count: number | 0,
  options: {
    type: string;
    method: string;
  }
) => {
  const [data, setData] = useState<ReceivingReportType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    let receivingUrl = "";
    if (storeCode) {
      const urlDirector = new ProductURLDirector(options.type, storeCode, {
        cursor: cursor,
        count: count,
      });

      urlDirector.buildURL();

      receivingUrl = urlDirector.getProductURL();

      if (receivingUrl) {
        setLoading(true);
        const token = localStorage.getItem("accessToken");

        fetch(receivingUrl, {
          method: options.method,
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response?.json())
          .then((data) => {
            //This is for a special case when API returns less products than the cound value at its first call.
            /////There is no previous data, so no need to mere the incoming data with previous products.
            if (cursor === undefined && data.length < count - 1) {
              setData(data);
            } else {
              setData((prevData) => {
                //Merging previous data with incoming data.
                return [...new Set([...prevData, ...data])];
              });
            }
            setHasMore(data.length > 0);
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            setError(error.error);
          });
      }
    }
  }, [storeCode, cursor]);

  return { data, loading, error, hasMore };
};

export default useReceiving;
