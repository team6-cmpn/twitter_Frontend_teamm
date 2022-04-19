import React, { PureComponent } from "react";
import "./usernumchart.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";

const data = [
  {
    name: "January",
    UserNum: 4000,
  },
  {
    name: "February",
    UserNum: 3000,
  },
  {
    name: "March",
    UserNum: 2000,
  },
  {
    name: "April",
    UserNum: 2780,
  },
  {
    name: "May",
    UserNum: 1890,
  },
  {
    name: "June",
    UserNum: 2390,
  },
  {
    name: "July",
    UserNum: 3490,
  },
];
const data2 = [
  {
    name: "January",
    GoogleSign: 4000,
    FacebookSign: 2400,
  },
  {
    name: "February",
    GoogleSign: 3000,
    FacebookSign: 1398,
  },
  {
    name: "March",
    GoogleSign: 2000,
    FacebookSign: 9800,
  },
  {
    name: "April",
    GoogleSign: 2780,
    FacebookSign: 3908,
  },
  {
    name: "May",
    GoogleSign: 1890,
    FacebookSign: 4800,
  },
  {
    name: "June",
    GoogleSign: 2390,
    FacebookSign: 3800,
  },
  {
    name: "July",
    GoogleSign: 3490,
    FacebookSign: 4300,
    },
];

export default function UserNumChart() {
  return (
    <div className="charts">
      <div className="chart">
        <h3 className="charttitle"> Number Of Users Per Month</h3>
        <ResponsiveContainer aspect={4 / 3}>
          <BarChart
            width={300}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="UserNum" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart">
        <h3 className="charttitle"> Signed Up Method</h3>
        <ResponsiveContainer aspect={4 / 3}>
          <LineChart
            width={500}
            height={300}
            data={data2}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="FacebookSign"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="GoogleSign" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
