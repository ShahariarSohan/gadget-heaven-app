import React, { createContext } from "react";
import Nav from "../components/basic/Nav";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/basic/Footer";

export const ProductsContext = createContext();

export const MainLayout = () => {
  const allProducts = useLoaderData();
  const products = allProducts.allProducts;

  return (
    <div>
      <Nav></Nav>
      <ProductsContext.Provider value={products}>
        <Outlet></Outlet>
      </ProductsContext.Provider>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
