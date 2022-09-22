import { createSlice } from "@reduxjs/toolkit";

export const getRegisterSlice = createSlice({
  name: "register",
  initialState: {
    register: {},
    error: null,
  },
  reducers: {
    getRegisterRequest: (state) => {
      state.register = {};
      state.error = null;
    },
    getRegisterSuccess: (state, action) => {
      state.register = action.payload;
    },
    getRegisterFailed: (state, action) => {
      state.register = {};
      state.error = action.payload;
    },
  },
});
