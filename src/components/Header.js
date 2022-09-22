import React from "react";
import { NavLink } from "react-router-dom";
import "./../sass/pages/home/_home.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="flexDiv">
          <div className="logo">
            <img src="../assets/image/logo.png" alt="" />
          </div>
          <div className="headerContent">
            <div className="cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>(1)</span>
            </div>
            <div className="login">
              <NavLink className="text-white" to="/">
                Login
              </NavLink>
            </div>
            <div className="register">
              <NavLink className="text-white" to="/register">
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
