import React from "react";
import { useLoaderData } from "react-router-dom";

const AllProducts = () => {
  const allProducts = useLoaderData();
  console.log(allProducts.allProducts);
  return <div>All Products</div>;
};

export default AllProducts;
