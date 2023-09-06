import { configureStore } from "@reduxjs/toolkit";
import navSlice from "../features/nav/navSlice";

export const store = configureStore({
  reducer: {
    nav: navSlice,
  },
});
