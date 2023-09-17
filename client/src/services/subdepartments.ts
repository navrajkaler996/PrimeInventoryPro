import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const subDepartmentsApi = createApi({
  reducerPath: "subDepartmentsByDepartmentCodeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1/subdepartment",
  }),
  endpoints: (builder) => ({
    getSubDepartmentsByDepartmentCode: builder.query({
      query: (departmentCode) => `/${departmentCode}`,
    }),
  }),
});

export const { useGetSubDepartmentsByDepartmentCodeQuery } = subDepartmentsApi;
