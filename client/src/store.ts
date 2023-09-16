import { configureStore } from "@reduxjs/toolkit";
import departmentReducer from "./features/departmentSlice";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { departmentByCodeApi } from "./services/department";

export const store = configureStore({
  reducer: {
    departmentData: departmentReducer,
    [departmentByCodeApi.reducerPath]: departmentByCodeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(departmentByCodeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
