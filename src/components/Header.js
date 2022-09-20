import React from "react";
import "./../sass/pages/home/_home.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="flexDiv">
          <div className="logo">
            <img src="./assets/image/logo.png" alt="" />
          </div>
          <div className="headerContent">
            <div className="cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>(1)</span>
            </div>
            <div className="login">
              <h3 className="authText">Login</h3>
            </div>
            <div className="register">
              <h3 className="authText">Register</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
