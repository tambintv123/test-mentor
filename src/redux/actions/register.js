import { api } from "utils/apiUtil";
import { getRegisterSlice } from "redux/reducer/register";

export const actRegister = (data, navigate) => {
  const { getRegisterRequest, getRegisterSuccess, getRegisterFailed } =
    getRegisterSlice.actions;
  return (dispatch) => {
    dispatch(getRegisterRequest());
    api
      .post(`Users/signup`, data)
      .then((res) => {
        dispatch(getRegisterSuccess(res.data.content));

        localStorage.setItem("User", JSON.stringify(res.data.content));
        navigate(-1);
      })
      .catch((err) => {
        dispatch(getRegisterFailed(err));
      });
  };
};
