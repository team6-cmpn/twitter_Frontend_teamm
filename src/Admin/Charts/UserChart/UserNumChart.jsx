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
import {GetNumberOfUsersOfMonth, GetSignedUpMethod} from "../../MockRegistrationAdmin";



export default function UserNumChart() {
  const usernumpermonth= GetNumberOfUsersOfMonth();
  const signedupmethodnum=GetSignedUpMethod()
  return (
    <div className="charts">
      <div className="chart">
        <h3 className="charttitle"> Number Of Users Per Month</h3>
        <ResponsiveContainer aspect={4 / 3}>
          <BarChart
            width={300}
            height={300}
            data={usernumpermonth}
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
            data={signedupmethodnum}
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