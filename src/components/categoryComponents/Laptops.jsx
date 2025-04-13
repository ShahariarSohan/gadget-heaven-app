import React from "react";
import ProductCard from "../common/ProductCard";
import { useLoaderData } from "react-router-dom";

const Laptops = () => {
  const laptops = useLoaderData();
  const data = laptops.laptops;
  return (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {data?.map((singleData) => (
          <ProductCard
            key={singleData.product_id}
            singleData={singleData}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Laptops;
