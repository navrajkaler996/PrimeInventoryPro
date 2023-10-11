import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const subDepartmentApi = createApi({
  reducerPath: "subDepartment",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_REACT_API}api/v1/subdepartment`,
  }),
  endpoints: (builder) => ({
    getSubDepartmentsByDepartmentCode: builder.query({
      query: (departmentCode) => `/${departmentCode}`,
    }),
    listSubDepartments: builder.query({
      query: () => `/list`,
    }),
  }),
});

export const {
  useListSubDepartmentsQuery,
  useGetSubDepartmentsByDepartmentCodeQuery,
} = subDepartmentApi;
