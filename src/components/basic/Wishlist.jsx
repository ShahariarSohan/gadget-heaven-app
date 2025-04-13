import React, { useState } from "react";
import { deleteWishlist, getWishlist } from "../../utils/LocalStorage";
import List from "../common/List";

const Wishlist = () => {
  const [showWishlists, setShowWishlists] = useState(getWishlist());
  const handleDeleteWishlist = (id) => {
    deleteWishlist(id);
    setShowWishlists(getWishlist());
  };
  return (
    <div className="container mx-auto p-10">
      <h3 className="text-xl font-bold">Wishlist</h3>
      <div className="space-y-10">
        {showWishlists.length === 0 ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold">No data available</h1>
          </div>
        ) : (
          showWishlists?.map((cart, idx) => (
            <List
              cart={cart}
              key={idx}
              handleDeleteWishlist={handleDeleteWishlist}
            ></List>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
