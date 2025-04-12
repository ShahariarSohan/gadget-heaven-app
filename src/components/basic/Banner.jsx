import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="hero bg-[#9538E2] min-h-screen text-white lg:rounded-xl">
          <div className="hero-content text-center">
            <div className="space-y-10">
              <h1 className="text-4xl font-bold">
                Upgrade Your Tech Accessorize with <br />
                Gadget Heaven Accessories
              </h1>
              <p className="text-sm">
                Explore the latest gadgets that will take your experience to{" "}
                <br /> the next level. From smart devices to the coolest
                accessories, we have it all!
              </p>
              <div>
                <Link to="/dashboard">
                  <button className="btn rounded-full px-7 text-[#9538E2]">
                    Shop now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block w-3/4 bg-slate-100 bg-transparent  p-5 h-96 rounded-xl mx-auto -translate-y-1/4 ">
          <img src="/banner.jpg" alt="" className="w-full h-full rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
