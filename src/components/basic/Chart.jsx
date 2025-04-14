import React from "react";
import { ComposedChart, ResponsiveContainer } from "recharts";

const Chart = ({ products }) => {
  const data = [];
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold">Statistics</h2>
      <div>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          ></ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
