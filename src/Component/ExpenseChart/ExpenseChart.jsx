import React from "react";
import { PieChart, Pie, Legend, Cell, Label } from "recharts";

export default function ExpenseChart() {
  const data01 = [
    { name: "Food", value: 100, color: "#A000FF" },
    { name: "Entertainment", value: 350, color: "#FF9304" },
    { name: "Travel", value: 50, color: "#FDE006" }
  ];

  data01.sort((obj1, obj2) => {
    return obj2.value - obj1.value;
  });

  // Calculate angle for each sector
  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
  }
  return (
    <div className="pie-chart-container" style={{ width: "33%" }}>
      <PieChart width={250} height={250}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
          label = {renderCustomizedLabel}
          labelLine = {false}
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
}
