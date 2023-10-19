import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const token = localStorage.getItem("accessToken");
export const productApi = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_REACT_API}/api/v1/product`,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  
  endpoints: (builder) => ({
    getProductByProductCode: builder.query({
      query: (product_code) => `/${product_code}`,
    }),
    getTopSellingProdcutsByDepartmentCode: builder.query({
      query: ({ departmentCode, count }) =>
        `/topsales/${departmentCode}/${count}`,
    }),
  }),
});

export const {
  useGetProductByProductCodeQuery,
  useGetTopSellingProdcutsByDepartmentCodeQuery,
} = productApi;
