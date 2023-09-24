import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const productApi = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/product",
  }),
  endpoints: (builder) => ({
    //API to fetch products using department_code/sub_department_code where stock_alert is true.
    getStockAlertProductByDepartmentCode: builder.query({
      query: ({ departmentCode, cursor }) =>
        `/stockalert/${departmentCode}/${cursor}`,

      keepUnusedDataFor: 0,

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        if (currentCache) {
          return [...currentCache, ...newItems];
        } else return [...newItems];
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
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
