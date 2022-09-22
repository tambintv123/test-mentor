import { api } from "utils/apiUtil";
import { getRegisterSlice } from "redux/reducer/register";

export const actRegister = (data, navigate) => {
  const { getRegisterRequest, getRegisterSuccess } = getRegisterSlice.actions;
  return (dispatch) => {
    dispatch(getRegisterRequest());
    api
      .post(`Users/signup`, data)
      .then((res) => {
        dispatch(getRegisterSuccess(res.data.content));

        // localStorage.setItem("User", JSON.stringify(res.data.content));
        // navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  };
};
