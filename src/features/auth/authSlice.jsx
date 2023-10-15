import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  auth: undefined,
};

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.auth = action.payload.auth;
    },
    updateAuth: (state, action) => {
      state.auth = { ...state.auth, ...action.payload };
    },
    logout: (state) => {
      state.accessToken = undefined;
      state.auth = undefined;
      localStorage.removeItem("dokani");
    },
  },
});

export const { setAuth, logout, updateAuth } = adminSlice.actions;
export default adminSlice.reducer;
