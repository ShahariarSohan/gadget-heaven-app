import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ProductCard from "../common/ProductCard";

const AllProducts = () => {
  const [show, setShow] = useState(false);
  const allProducts = useLoaderData();
  const data = allProducts.allProducts;
  return (
    <div className="space-y-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {show
          ? data
              ?.slice(0, 40)
              .map((singleData) => (
                <ProductCard
                  key={singleData.product_id}
                  singleData={singleData}
                ></ProductCard>
              ))
          : data
              ?.slice(0, 12)
              .map((singleData) => (
                <ProductCard
                  key={singleData.product_id}
                  singleData={singleData}
                ></ProductCard>
              ))}
      </div>
      <div onClick={() => setShow(!show)}>
        <Link href="" className="underline flex justify-center ">
          {show ? "Show Less" : "Show More"}
        </Link>
      </div>
    </div>
  );
};

export default AllProducts;
