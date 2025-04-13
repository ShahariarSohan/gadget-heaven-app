import React, { useState } from "react";
import { getCart, getWishlist } from "../utils/LocalStorage";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="hero bg-[#9538E2] text-white min-h-80">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="py-6 text-sm">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex justify-center gap-5 items-center">
              <Link to="carts">
                <button className="btn btn-secondary hover:bg-white hover:text-secondary w-32  rounded-full">
                  Cart
                </button>
              </Link>
              <Link to="wishlist">
                <button
                  className="btn btn-secondary hover:bg-white 
              hover:text-secondary w-32 rounded-full"
                >
                  Wishlist
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
