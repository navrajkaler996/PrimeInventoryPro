import { API_ENDPOINTS } from "../utils/constants";

const useAddProduct = () => {
  const clickHandler = async (
    body: Object,
    options: {
      api: string;
    }
  ) => {
    //Variable to store the API URL
    let productURL;
    //If options are provided, productURL will be changed.
    if (Object.keys(options)?.length > 0 && options.api.length > 0) {
      if (options.api === "add") {
        productURL = `${API_ENDPOINTS.product_development}/add`;
      }
    } else {
      productURL = `${API_ENDPOINTS.product_development}`;
    }

    fetch(productURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response?.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { clickHandler };
};

export default useAddProduct;
