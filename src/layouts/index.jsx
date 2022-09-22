import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";
import Menu from "../components/Menu";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Menu />
      {props.children}
      <Footer />
    </>
  );
}
