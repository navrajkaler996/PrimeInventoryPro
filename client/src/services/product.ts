import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const productApi = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/product",
  }),
  endpoints: (builder) => ({
    getStockAlertProductByDepartmentCode: builder.query({
      query: (departmentCode) => `/stockalert/${departmentCode}`,
    }),
    getTopSellingProdcutsByDepartmentCode: builder.query({
      query: ({ departmentCode, count }) =>
        `/topsales/${departmentCode}/${count}`,
    }),
  }),
});

export const {
  useGetStockAlertProductByDepartmentCodeQuery,
  useGetTopSellingProdcutsByDepartmentCodeQuery,
} = productApi;
