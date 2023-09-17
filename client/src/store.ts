import { configureStore } from "@reduxjs/toolkit";
import departmentReducer from "./features/departmentSlice";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { departmentApi } from "./services/department";
import { subDepartmentsApi } from "./services/subdepartments";

export const store: any = configureStore({
  reducer: {
    departmentData: departmentReducer,
    [departmentApi.reducerPath]: departmentApi.reducer,

    [subDepartmentsApi.reducerPath]: subDepartmentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      departmentApi.middleware,
      subDepartmentsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
