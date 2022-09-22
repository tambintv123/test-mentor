import React from "react";
import { NavLink } from "react-router-dom";
import "./../sass/pages/home/_home.scss";

export default function Menu() {
  return (
    <div className="container">
      <div className=" navbar-nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active " : "inactive")}
          to="/men"
        >
          Men
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active " : "inactive")}
          to="/woman"
        >
          Woman
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active " : "inactive")}
          to="/kid"
        >
          Kid
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/sport"
        >
          Sport
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/logic"
        >
          Logic Page
        </NavLink>
      </div>
    </div>
  );
}
