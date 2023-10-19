import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const token = localStorage.getItem("accessToken");
export const subDepartmentApi = createApi({
  reducerPath: "subDepartment",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_REACT_API}/api/v1/subdepartment`,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
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
