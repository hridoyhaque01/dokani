import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   activePath: "",
};

const navSlice = createSlice({
  name: "navSlice",
  initialState,
  reducers: {
    setActivePath: (state, action) => {
      //   state.activePath = action.payload;
      return action.payload;
    },
  },
});

export default navSlice.reducer;
export const { setActivePath } = navSlice.actions;
