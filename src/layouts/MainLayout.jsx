import React from "react";
import Nav from "../components/basic/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/basic/Footer";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
