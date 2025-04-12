import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Gadgets from "../components/Gadgets";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <div className="flex flex-col md:flex-row gap-5">
        <Category></Category>
        <Gadgets></Gadgets>
      </div>
    </div>
  );
};

export default Home;
