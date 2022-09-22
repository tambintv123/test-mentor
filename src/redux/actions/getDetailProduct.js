import { getDetailProductSlice } from "redux/reducer/getDetailProduct";
import { api } from "utils/apiUtil";

export const actGetDetailProduct = (id) => {
  const { detailProductRequest, detailProductSuccess } =
    getDetailProductSlice.actions;
  return (dispatch) => {
    dispatch(detailProductRequest());
    api
      .get(`Product/getbyid?id=${id}`)
      .then((res) => dispatch(detailProductSuccess(res.data.content)))
      .catch((err) => console.log(err));
  };
};
