"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { month: "2024-01", users: 1 },
  { month: "2024-02", users: 2 },
  { month: "2024-03", users: 4 },
  { month: "2024-04", users: 3 },
  { month: "2024-05", users: 5 },
  { month: "2024-06", users: 1 },
  { month: "2024-07", users: 7 },
  { month: "2024-08", users: 3 },
  { month: "2024-09", users: 6 },
  { month: "2024-10", users: 5 },
];

const UserChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={mockData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
        <XAxis
          dataKey="month"
          tick={{ fontWeight: "bold", fontSize: 12, fill: "#6b6b6b" }}
          tickLine={false}
        />
        <YAxis tick={{ fontWeight: "bold", fontSize: 12, fill: "#6b6b6b" }} />
        <Tooltip
          wrapperStyle={{
            borderColor: "#f97316",
            boxShadow: "0px 0px 10px #f97316",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
          contentStyle={{ borderColor: "#f97316" }}
        />
        <Legend
          wrapperStyle={{
            fontWeight: "bold",
            fontSize: 14,
            color: "#f97316",
            marginTop: -10,
          }}
        />
        <Line
          type="monotone"
          dataKey="users"
          stroke="#f97316" // BunnyOrange 색상
          activeDot={{ r: 8 }}
          dot={{ stroke: "#f97316", strokeWidth: 3, fill: "#fff" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserChart;
