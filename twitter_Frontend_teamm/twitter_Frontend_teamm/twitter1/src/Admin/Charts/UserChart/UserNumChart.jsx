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
  GetDashBoardstat
} from "../../MockRegistrationAdmin";
import { useState,useEffect } from "react";

export default function UserNumChart() {
  const usersperyear = GetDashBoardstat()[4]?.users_Per_Year;
  // const [usersPerMonth, setUsersPerMonth] = useState(undefined);
  // const usersPerMonth= UserNumberMonthBack[3]?.users_Per_Month;
//   useEffect(() => {
//   (async () => {
//     const resp = await GetDashBoard();
//     let tempUsersPerMonth = [...resp.data[3].users_Per_Month];
//     tempUsersPerMonth.forEach((element, index) => {
//       tempUsersPerMonth[index].month = element._id.month;
//     });
//     setUsersPerMonth(tempUsersPerMonth);
//   })();
// }, []);

// useEffect(() => {
//   (async () => {
//     const resp = await GetDashBoard();
//     let tempUsersPerMonth = [...resp.data[4].users_Per_Month];
//     tempUsersPerMonth.forEach((element, index) => {
//       tempUsersPerMonth[index].month = element._id.month;
//     });
//     setUsersPerMonth(tempUsersPerMonth);
//   })();
// }, []);

const usersPerMonth=GetDashBoardstat()[3]?.users_Per_Month

  return (
    <div className="charts">
      <div className="chart">
        <h3 className="charttitle"> Number Of Users Per Month</h3>
        <ResponsiveContainer aspect={4 / 3}>
          <BarChart
            width={300}
            height={300}
            data={usersPerMonth}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart">
        <h3 className="charttitle"> Users Per Years</h3>
        <ResponsiveContainer aspect={4 / 3}>
          <LineChart
            width={500}
            height={300}
            data={usersperyear}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="totalUsers" stroke="#06562B" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
