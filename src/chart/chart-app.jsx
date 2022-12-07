import { useState } from "react";
import { useEffect } from "react";
import { LineChart, Line, Tooltip } from "recharts";
import MyBarChart from "./barChart";
const data = [
  { name: "Page A", uv: 30 },
  { name: "Page B", uv: 60 },
  { name: "Page C", uv: 35 },
  { name: "Page D", uv: 55 },
  { name: "Page D", uv: 40 },
];
const ChartApp = () => {
  const [height, setHeight] = useState(400);
  const [width, setWidth] = useState(400);
  // useEffect(() => {
  //   setInterval(() => {
  //     const random = Math.floor(Math.random() * 200) + 400;
  //     setHeight(random);
  //     setWidth(random);
  //   }, 1000);
  // }, []);
  return (
    <div>
      <h1>Chart</h1>
      {/* simple tiny chart  */}
      {/* <LineChart width={300} height={150} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Tooltip />
      </LineChart> */}
      <div>
        <MyBarChart />
      </div>
    </div>
  );
};

export default ChartApp;
