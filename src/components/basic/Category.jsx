import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className=" flex items-center justify-center md:w-1/6 shadow-lg py-10  rounded-xl">
      <ul className="grid gap-3">
        <div>
          <Link to="allProducts">
            <button className="btn rounded-full w-52 hover:text-white hover:bg-primary ">
              All Products
            </button>
          </Link>
        </div>
        <div>
          <Link to="laptops">
            <button className="btn rounded-full w-52 hover:text-white hover:bg-primary ">
              Laptops
            </button>
          </Link>
        </div>
        <div>
          <Link to="phones">
            <button className="btn rounded-full w-52 hover:text-white hover:bg-primary ">
              Phones
            </button>
          </Link>
        </div>
        <div>
          <Link to="watches">
            <button className="btn rounded-full w-52 hover:text-white hover:bg-primary ">
              Watches
            </button>
          </Link>
        </div>
        <div>
          <Link to="accessories">
            <button className="btn rounded-full w-52 hover:text-white hover:bg-primary ">
              Accessories
            </button>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Category;
