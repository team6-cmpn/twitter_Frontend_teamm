import React from "react";
import Carousel from "react-elastic-carousel";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./biaxiallinechart.css";
import { GetTweetsPerMonth } from "../MockRegistrationAdmin";

export default function BiaxialLineChart() {
  var TweetsPerMonth = GetTweetsPerMonth();

  return (
    <div className="chartone">
      <Carousel>
        <ResponsiveContainer width="100%" aspect={4 / 2}>
          <BarChart
            data={TweetsPerMonth}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke="red " strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Retweets" fill="#8884d8" />
            <Bar dataKey="Tweets" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
        {/* <ResponsiveContainer width="100%" aspect={4 / 2}>
        <ComposedChart
          data={data2}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
        </ResponsiveContainer> */}
      </Carousel>
    </div>
  );
}
