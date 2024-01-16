import { useEffect, useState } from "react";
import { ProductURLDirector } from "./helpers/ProductURLBuilder";

const useSales = (
  product_code: string | undefined,
  body: { filterByDate: boolean },
  options: {
    type: string;
    method: string;
  }
) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (options.type?.length > 0) {
      let salesUrl = "";

      const urlDirector = new ProductURLDirector(
        options?.type,
        product_code,
        undefined
      );

      urlDirector.buildURL();

      salesUrl = urlDirector.getProductURL();

      console.log(salesUrl);

      if (salesUrl) {
        setLoading(true);

        const token = localStorage.getItem("accessToken");

        fetch(salesUrl, {
          method: options.method,
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response?.json())
          .then((data) => {
            setData(data.data);
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            setError(error.error);
          });
      }
    }
  }, [product_code]);

  return { data, loading, error };
};

export default useSales;
