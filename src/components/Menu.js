import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./../sass/pages/home/_home.scss";

export default function Menu() {
  const [isActive, setIsActive] = useState(true);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="container">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            isactive={isActive.toString()}
            onClick={handleIsActive}
            className="nav-link"
            style={({ isactive }) => ({
              textDecoration: isactive ? "underline" : "none",
              fontWeight: isactive ? "600" : "300",
              color: isactive ? "black" : "gray",
            })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            style={({ isactive }) => ({
              textDecoration: isactive ? "underline" : "none",
              fontWeight: isactive ? "600" : "300",
              color: isactive ? "black" : "gray",
            })}
            isactive={isActive.toString()}
            onClick={handleIsActive}
            to=""
          >
            Men
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            style={({ isactive }) => ({
              textDecoration: isactive ? "underline" : "none",
              fontWeight: isactive ? "600" : "300",
              color: isactive ? "black" : "gray",
            })}
            isactive={isActive.toString()}
            onClick={handleIsActive}
            to=""
          >
            Woman
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            style={({ isactive }) => ({
              textDecoration: isactive ? "underline" : "none",
              fontWeight: isactive ? "600" : "300",
              color: isactive ? "black" : "gray",
            })}
            isactive={isActive.toString()}
            onClick={handleIsActive}
            to=""
          >
            Kid
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            style={({ isactive }) => ({
              textDecoration: isactive ? "underline" : "none",
              fontWeight: isactive ? "600" : "300",
              color: isactive ? "black" : "gray",
            })}
            isactive={isActive.toString()}
            onClick={handleIsActive}
            to=""
          >
            Sport
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
