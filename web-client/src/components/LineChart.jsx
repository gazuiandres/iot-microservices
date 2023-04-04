import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip
} from "recharts";

const Chart = ({ data, nameKey, valueKey }) => {
  return (
    <ResponsiveContainer width="100%" >
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        {/* <CartesianGrid stroke="black" strokeDasharray="4 4" /> */}
        <XAxis stroke="black" dataKey={nameKey} />
        <YAxis stroke="black" />
        <Tooltip />
        <Line type="monotone" dataKey={valueKey} stroke="#DD2A2A" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
