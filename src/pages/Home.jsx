import React from "react";
import Banner from "../components/basic/Banner";
import Category from "../components/basic/Category";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <h2 className="text-center font-bold text-2xl">
        Explore Cutting Edge Gadgets
      </h2>
      <div className="flex flex-col lg:flex-row gap-5 items-start my-10">
        <Category></Category>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
