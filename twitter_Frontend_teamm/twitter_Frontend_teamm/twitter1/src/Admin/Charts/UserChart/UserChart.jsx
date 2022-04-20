import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import "./userchart.css";

const data01 = [
  { name: "Ages(20-25)", value: 400 },
  { name: "Ages(25-30)", value: 300 },
  { name: "Ages(30-35)", value: 300 },
  { name: "Ages(35-40)", value: 200 },
  { name: "Ages(40-50)", value: 278 },
  { name: "Ages(50-60)", value: 189 },
];

const data02 = [
  { name: "Ages(20-30)", value: 2400 },
  { name: "Ages(20-30)", value: 4567 },
  { name: "Ages(20-30)", value: 1398 },
  { name: "Ages(20-30)", value: 9800 },
  { name: "Ages(20-30)", value: 3908 },
  { name: "Ages(20-30)", value: 4800 },
];


export default function UserChart() {
  return (
    <div className="userchart">
      <ResponsiveContainer aspect={4/3}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#10BFCC"
            label
          />
          
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
