import React from "react";
import CommonCard from "../common/CommonCard";
import { useLoaderData } from "react-router-dom";
const Phones = () => {
  const phones = useLoaderData();
  const data = phones.phones;
  return (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {data?.map((singleData) => (
          <CommonCard
            key={singleData.product_id}
            singleData={singleData}
          ></CommonCard>
        ))}
      </div>
    </div>
  );
};

export default Phones;
