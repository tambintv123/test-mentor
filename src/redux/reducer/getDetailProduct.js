import { createSlice } from "@reduxjs/toolkit";

export const getDetailProductSlice = createSlice({
  name: "detailProduct",
  initialState: {
    detailProduct: {},
  },
  reducers: {
    detailProductRequest: (state) => {
      state.detailProduct = {};
    },
    detailProductSuccess: (state, action) => {
      state.detailProduct = action.payload;
    },
  },
});

// export const { reducer } = getDetailProductSlice;
