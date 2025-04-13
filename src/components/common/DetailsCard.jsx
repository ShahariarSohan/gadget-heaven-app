import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { addCart, addWishlist, getWishlist } from "../../utils/LocalStorage";
import toast from "react-hot-toast";
const DetailsCard = ({ product }) => {
  const [wishlists, setWishlists] = useState(getWishlist());
  const {
    product_id,
    product_title,
    product_image,
    description,
    price,
    specification,
    rating,
    availability,
  } = product;
  const handleCart = (cart) => {
    addCart(cart);
    toast.success("Product added to cart");
  };
  const handleWishlist = (wishlist) => {
    const isExist = wishlists?.find((item) => item.product_id === product_id);
    if (!isExist) {
      addWishlist(wishlist);
      setWishlists(getWishlist());
      return toast.success("Cart added to Wishlist");
    } else {
      return toast.error("Cart already added to Wishlist");
    }
  };
  return (
    <div>
      <div>
        <div className="flex flex-col gap-5 lg:flex-row">
          <img src={product_image} />
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{product_title}</h1>
            <p>Price : ${price}</p>
            <button className="btn text-primary rounded-full bg-white border border-primary">
              {availability ? "In stock" : "Not in stock"}
            </button>
            <p className=" text-sm">{description}</p>
            <div>
              <p className="mb-3 font-bold">Specification :</p>
              {specification.map((spec, idx) => (
                <p className="text-sm" key={idx}>
                  {spec}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div onClick={() => handleCart(product)}>
                <Link>
                  <button className="btn btn-primary text-white rounded-full">
                    Add To Cart <BsCart4 className="text-xl" />
                  </button>
                </Link>
              </div>
              <div
                onClick={() => handleWishlist(product)}
                className="w-12 h-12 rounded-full hover:shadow-lg shadow-md flex justify-center items-center"
              >
                <Link>
                  <FaRegHeart className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
