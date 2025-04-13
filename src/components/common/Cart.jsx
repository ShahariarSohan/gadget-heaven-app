import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = ({ cart }) => {
  const { product_title, product_image, description, price } = cart;
  return (
    <div>
      <div className="hero md:w-2/3 bg-base-200 min-h-32 p-5 rounded-lg mx-auto my-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <img src={product_image} className="w-36 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl font-bold">{product_title}</h1>
            <p className="py-6">{description}</p>
            <p>Price : $ {price}</p>
          </div>
          <div>
            <TiDeleteOutline className="text-2xl text-red-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
