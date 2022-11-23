import { LineChart, Line } from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2460 },
  { name: "Page B", uv: 500, pv: 2100, amt: 2400 },
  { name: "Page C", uv: 200, pv: 3400, amt: 2300 },
  { name: "Page D", uv: 700, pv: 2600, amt: 2400 },
  { name: "Page E", uv: 100, pv: 1600, amt: 2490 },
  { name: "Page F", uv: 300, pv: 1900, amt: 1800 },
];
const ChartApp = () => {
  return (
    <div>
      <h1>Chart</h1>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default ChartApp;
