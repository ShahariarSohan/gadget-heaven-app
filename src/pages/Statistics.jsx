import React, { useContext } from "react";
import Chart from "../components/basic/Chart";
import { ProductsContext } from "../layouts/MainLayout";
import { Helmet } from "react-helmet";

const Statistics = () => {
  const products = useContext(ProductsContext);
  const slicedProducts = products.slice(0, 10);
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven || Statistics</title>
      </Helmet>
      <div className="hero bg-[#9538E2] text-white min-h-80">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold">Statistics</h1>
            <p className="py-6 text-sm">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <Chart products={slicedProducts}></Chart>
    </div>
  );
};

export default Statistics;
