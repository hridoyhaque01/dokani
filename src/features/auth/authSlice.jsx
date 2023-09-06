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
  },
});

export default authSlice.reducer;
export const { setAuth } = authSlice.actions;
