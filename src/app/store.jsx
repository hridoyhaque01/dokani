import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import pathReducer from "../features/path/pathSlice";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    path: pathReducer,
    auth: authSlice,

  },
  middleware: (getDefaultMiddlewares) =>
  getDefaultMiddlewares().concat(apiSlice.middleware),
});
