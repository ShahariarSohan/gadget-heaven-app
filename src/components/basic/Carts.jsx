import React, { useEffect, useState } from "react";
import { deleteCart, getCart } from "../../utils/LocalStorage";
import Cart from "../common/Cart";

const Carts = () => {
  const [showCarts, setShowCarts] = useState(getCart());
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const addedProducts = getCart();
    const totalPrice = addedProducts.reduce(
      (previous, current) => previous + current.price,
      0
    );
    setPrice(totalPrice);
  }, []);
  const handleDeleteCart = (id) => {
    deleteCart(id);
    setShowCarts(getCart());
    const addedProducts = getCart();
    const totalPrice = addedProducts.reduce(
      (previous, current) => previous + current.price,
      0
    );
    setPrice(totalPrice);
  };
  const handleSortByPrice = () => {
    const carts = getCart();
    const sortByPrice = carts.sort((cart1, cart2) => cart2.price - cart1.price);
    setShowCarts(sortByPrice);
  };
  const handlePurchase = () => {
    setShowCarts(getCart());
  };

  return (
    <div className="container mx-auto p-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-xl font-bold">Cart</h3>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <p>Total Price : $ {price}</p>
          <button
            onClick={handleSortByPrice}
            className="btn btn-secondary hover:bg-white 
              hover:text-secondary w-32 rounded-full"
          >
            Sort by Price
          </button>
          <button
            onClick={handlePurchase}
            className="btn btn-secondary hover:bg-white 
              hover:text-secondary w-32 rounded-full"
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="space-y-10">
        {showCarts.length === 0 ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold">No data available</h1>
          </div>
        ) : (
          showCarts.map((cart, idx) => (
            <Cart
              cart={cart}
              key={idx}
              handleDeleteCart={handleDeleteCart}
            ></Cart>
          ))
        )}
      </div>
    </div>
  );
};

export default Carts;
