import React, { useContext } from "react";
import { ProductsContext } from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/common/DetailsCard";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;
  const products = useContext(ProductsContext);
  const product = products.find((product) => product.product_id === id);
  return (
    <div>
      <div className="hero bg-[#9538E2] text-white min-h-80">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold">Product Details</h1>
            <p className="py-6 text-sm">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <div className=" w-3/4 bg-slate-50   p-5 rounded-xl mx-auto lg:-translate-y-1/4 ">
        <DetailsCard product={product} key={product.product_id}></DetailsCard>
      </div>
    </div>
  );
};

export default ProductDetails;
