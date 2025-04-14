import React from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ products }) => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold">Statistics</h2>
      <div className="w-full">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            width={1000}
            height={400}
            data={products}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="brand" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Scatter dataKey="rating" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
