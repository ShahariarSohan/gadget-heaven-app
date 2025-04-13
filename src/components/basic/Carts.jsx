import React, { useState } from "react";
import { deleteCart, getCart } from "../../utils/LocalStorage";
import Cart from "../common/Cart";

const Carts = () => {
  const [showCarts, setShowCarts] = useState(getCart());

  const handleDeleteCart = (id) => {
    deleteCart(id);
    setShowCarts(getCart());
  };
  return (
    <div className="container mx-auto p-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-xl font-bold">Cart</h3>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <p>Total Price :</p>
          <button
            className="btn btn-secondary hover:bg-white 
              hover:text-secondary w-32 rounded-full"
          >
            Sort by Price
          </button>
          <button
            className="btn btn-secondary hover:bg-white 
              hover:text-secondary w-32 rounded-full"
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="space-y-10">
        {showCarts?.map((cart, idx) => (
          <Cart
            cart={cart}
            key={idx}
            handleDeleteCart={handleDeleteCart}
          ></Cart>
        ))}
      </div>
    </div>
  );
};

export default Carts;
