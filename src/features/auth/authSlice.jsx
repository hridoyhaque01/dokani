import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   activePath: "",
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.email = "";
      state.password = "";
      localStorage.removeItem("genieAuth");
    },
  },
});

export default authSlice.reducer;
export const { setAuth, logout } = authSlice.actions;
