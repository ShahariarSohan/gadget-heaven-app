import React from "react";
import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col font-bold justify-center items-center">
      <Helmet>
        <title>Error</title>
      </Helmet>
      <img src="/error.jpg" alt="" />
    </div>
  );
};

export default Error;
