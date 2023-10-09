import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import pathReducer from "../features/path/pathSlice";

export const store = configureStore({
  reducer: {
    path: pathReducer,
    auth: authSlice,
  },
});
