import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className=" flex items-center justify-center w-full lg:w-1/6 md:h-96 shadow-lg p-5  rounded-xl">
      <ul className="grid gap-3">
        <div>
          <Link to="/">
            <button className="btn rounded-full w-36 hover:text-white hover:bg-primary ">
              All Products
            </button>
          </Link>
        </div>
        <div>
          <Link to="laptops">
            <button className="btn rounded-full w-36 hover:text-white hover:bg-primary ">
              Laptops
            </button>
          </Link>
        </div>
        <div>
          <Link to="phones">
            <button className="btn rounded-full w-36 hover:text-white hover:bg-primary ">
              Phones
            </button>
          </Link>
        </div>
        <div>
          <Link to="watches">
            <button className="btn rounded-full w-36 hover:text-white hover:bg-primary ">
              Watches
            </button>
          </Link>
        </div>
        <div>
          <Link to="accessories">
            <button className="btn rounded-full w-36 hover:text-white hover:bg-primary ">
              Accessories
            </button>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Category;
