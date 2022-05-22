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
/**
 * 
 * this function returns 2 item 
 * first item for users per month in 2022
 * second item for showing users per years from starting our twitter clone
 * @returns 
 */

export default function UserNumChart() {
  const usersperyear = GetDashBoardstat()[4]?.users_Per_Year;
const usersPerMonth=GetDashBoardstat()[3]?.users_Per_Month
const sortedData = usersperyear?.sort((a,b) => a.x - b.x)
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
            <Tooltip contentStyle={{backgroundColor:'#1DA1F2'}} />
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
            data={sortedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id"  domain={[0, 10000]} />
            <YAxis />
            <Tooltip contentStyle={{backgroundColor:'#1DA1F2'}} />
            <Legend />
            <Line type="monotone" dataKey="totalUsers" stroke="#06562B" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
