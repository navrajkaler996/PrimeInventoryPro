import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const departmentApi = createApi({
  reducerPath: "department",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_REACT_API}api/v1/department`,
  }),

  endpoints: (builder) => ({
    getByDepartmentCode: builder.query({
      query: (departmentCode) => `/${departmentCode}`,
    }),

    listDepartments: builder.query({
      query: () => `/list`,
    }),
  }),
});

export const { useGetByDepartmentCodeQuery, useListDepartmentsQuery } =
  departmentApi;
