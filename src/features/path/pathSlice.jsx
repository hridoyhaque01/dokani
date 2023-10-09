import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePath: undefined,
  isSidebarActive: true,
};

const pathSlice = createSlice({
  name: "pathSlice",
  initialState,
  reducers: {
    setActivePath: (state, action) => {
      state.activePath = action.payload;
    },
    setActiveSidebar: (state, action) => {
      state.isSidebarActive = action.payload;
    },
  },
});

export default pathSlice.reducer;
export const { setActivePath, setActiveSidebar } = pathSlice.actions;
