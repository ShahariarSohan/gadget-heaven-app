import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../common/ProductCard";

const Accessories = () => {
  const accessories = useLoaderData();
  const data = accessories.accessories;
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

export default Accessories;
