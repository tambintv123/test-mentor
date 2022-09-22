import { createSlice } from "@reduxjs/toolkit";

export const getRegisterSlice = createSlice({
  name: "register",
  initialState: {
    register: {},
  },
  reducers: {
    getRegisterRequest: (state) => {
      state.register = {};
    },
    getRegisterSuccess: (state, action) => {
      state.register = action.payload;
    },
  },
});
