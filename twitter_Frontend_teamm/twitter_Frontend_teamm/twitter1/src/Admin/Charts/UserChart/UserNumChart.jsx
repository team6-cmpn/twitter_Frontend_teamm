import React from "react";
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
  Line,
} from "recharts";
import {
  GetNumberOfUsersOfMonth,
  GetSignedUpMethod,
  GetDashBoard,
} from "../../MockRegistrationAdmin";
import {Chart as ChartJs,BarElement} from 'chart.js'

ChartJs.register(
  BarElement
)

export default function UserNumChart() {
   const usernumpermonth = GetNumberOfUsersOfMonth();
   console.log(usernumpermonth)
  const signedupmethodnum = GetSignedUpMethod();
  var UserNumberMonthBack = GetDashBoard();
  var chartdata1=UserNumberMonthBack[3]?.users_Per_Month[0]?._id
  // console.log("total",total)
  // console.log("stat", UserNumberMonthBack);
  console.log("datacahrt",UserNumberMonthBack);
  // console.log("nameaxis",namexaxis?.total)

  return (
    <div className="charts">
      <div className="chart">
        <h3 className="charttitle"> Number Of Users Per Month</h3>
        <ResponsiveContainer aspect={4 / 3}>
          <BarChart
            width={300}
            height={300}
            data={chartdata1}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={chartdata1?.month}/>
            <YAxis  />
            <Tooltip />
            <Legend />
            <Bar dataKey={chartdata1?.year} fill="#82ca9d" />
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
