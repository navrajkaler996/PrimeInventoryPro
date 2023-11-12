import { configureStore } from "@reduxjs/toolkit";
import departmentReducer from "./features/departmentSlice";
import userReducer from "./features/userSlice";
import toastReducer from "./features/toastSlice";
import logoutReducer from "./features/logoutSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { departmentApi } from "./services/department";
import { subDepartmentApi } from "./services/subdepartment";
import { productApi } from "./services/product";

export const store: any = configureStore({
  reducer: {
    activeDepartment: departmentReducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [subDepartmentApi.reducerPath]: subDepartmentApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    loggedInUser: userReducer,
    displayToastMessage: toastReducer,
    logout: logoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      departmentApi.middleware,
      subDepartmentApi.middleware,
      productApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
