import React from "react";
import { getWishlist } from "../../utils/LocalStorage";
import Cart from "../common/Cart";

const Wishlist = () => {
  const carts = getWishlist();
  return (
    <div className="container mx-auto p-10">
      <h3 className="text-xl font-bold">Wishlist</h3>
      <div className="space-y-10">
        {carts?.map((cart, idx) => (
          <Cart cart={cart} key={idx}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
