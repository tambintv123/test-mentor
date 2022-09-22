import { listProductsSlice } from "../reducer/getListProducts";
import { api } from "../../utils/apiUtil";

export const actGetListProduct = () => {
  const { listProductRequest, listProductSuccess } = listProductsSlice.actions;
  return (dispatch) => {
    dispatch(listProductRequest());
    api
      .get("Product")
      .then((res) => {
        dispatch(listProductSuccess(res.data.content));
      })
      .catch((err) => console.log(err));
  };
};
