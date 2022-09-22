import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect, useDispatch, useSelector } from "react-redux";
import { actRegister } from "redux/actions/register";
import { Navigate, useNavigate } from "react-router-dom";
import "../../sass/pages/register/_register.scss";

function RegisterPageWrapper() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.register);
  const message = error?.response.data.message;
  return (
    <RegisterWithFormik
      error={message}
      dispatch={dispatch}
      navigate={navigate}
    />
  );
}

function RegisterPage(props) {
  const { error, errors, handleChange, handleSubmit } = props;
  if (localStorage.getItem("User")) {
    return <Navigate replace to="/" />;
  }
  console.log(props);

  const renderNoti = () => {
    return error && <div className="message">{error}</div>;
  };

  return (
    <div className="container">
      <h1 className="titleRegister">Register</h1>
      <div className="registerBox ">
        {renderNoti()}
        <form onSubmit={handleSubmit}>
          <div className="boxContent ">
            <div>
              <div className="boxInput">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email."
                  className=" input"
                />
                <div className="textError">{errors.email}</div>
              </div>
              <div className="boxInput">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password."
                  className=" input"
                />
                <div className="textError">{errors.password}</div>
              </div>
              <div className="boxInput">
                <label htmlFor="password" className="label">
                  Password confirm
                </label>
                <input
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  onChange={handleChange}
                  placeholder="Password Confirm."
                  className=" input"
                />
                <div className="textError">{errors.passwordConfirm}</div>
              </div>
            </div>
            <div>
              <div className="boxInput">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name."
                  onChange={handleChange}
                  className=" input"
                />
                <div className="textError">{errors.name}</div>
              </div>
              <div className="boxInput">
                <label htmlFor="phone" className="label">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  placeholder="Phone."
                  className=" input"
                />
                <div className="textError">{errors.phone}</div>
              </div>
              <div className="boxInput">
                <label htmlFor="gender" className="label">
                  Gender
                </label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value={true}
                  onChange={handleChange}
                  placeholder="Gender."
                  className="radioInput "
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value={false}
                  onChange={handleChange}
                  placeholder="Gender."
                  className="radioInput female"
                />
                <label htmlFor="female">Female</label>
                <div className="textError">{errors.gender}</div>
              </div>
            </div>
          </div>

          <button type="submit" className="btnSubmit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const RegisterWithFormik = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    name: "",
    phone: "",
    gender: true,
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required !")
      .email("Email is invalid !"),
    password: Yup.string()
      .min(6, "Password must have min 6 characters")
      .max(20, "Password must have max 20 characters"),
    passwordConfirm: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
    name: Yup.string().required("Name is required !"),
    phone: Yup.string().required("Phone is required !"),
    gender: Yup.string().required("Gender is required !"),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    props.dispatch(actRegister(values, props.navigate));
  },

  displayName: "Register",
})(RegisterPage);

export default connect()(RegisterPageWrapper);
