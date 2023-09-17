import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const departmentApi = createApi({
  reducerPath: "departmentByCodeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/department",
  }),
  endpoints: (builder) => ({
    getByDepartmentCode: builder.query({
      query: (departmentCode) => `/${departmentCode}`,
    }),
  }),
});

export const { useGetByDepartmentCodeQuery } = departmentApi;
