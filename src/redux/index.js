import { configureStore } from "@reduxjs/toolkit";
import reducer from "redux/reducer/getListProducts";
import { getDetailProductSlice } from "./reducer/getDetailProduct";
import { getRegisterSlice } from "./reducer/register";

const store = configureStore({
  reducer: {
    listProducts: reducer,
    detailProduct: getDetailProductSlice.reducer,
    register: getRegisterSlice.reducer,
  },
});

export default store;
