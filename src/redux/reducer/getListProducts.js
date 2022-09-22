import { createSlice } from "@reduxjs/toolkit";

export const listProductsSlice = createSlice({
  name: "listProducts",
  initialState: {
    listProducts: [],
  },
  reducers: {
    listProductRequest: (state, action) => {
      state.listProducts = [];
    },
    listProductSuccess: (state, action) => {
      state.listProducts = action.payload;
    },
  },
});

const { reducer } = listProductsSlice;
export default reducer;
