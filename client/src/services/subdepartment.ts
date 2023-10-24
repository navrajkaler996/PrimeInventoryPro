import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const subDepartmentApi = createApi({
  reducerPath: "subDepartment",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_REACT_API}/api/v1/subdepartment`,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("accessToken")}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSubDepartmentsByDepartmentCode: builder.query({
      query: (departmentCode) => `/list/${departmentCode}`,
    }),
    listSubDepartments: builder.query({
      query: () => `/list`,
    }),
    getBySubDepartmentCode: builder.query({
      query: (subDepartmentCode) => `/${subDepartmentCode}`,
    }),
  }),
});

export const {
  useListSubDepartmentsQuery,
  useGetSubDepartmentsByDepartmentCodeQuery,
  useGetBySubDepartmentCodeQuery,
} = subDepartmentApi;
