import React, { PureComponent } from "react";
import Carousel from "react-elastic-carousel";
import {
  BarChart,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import "./biaxiallinechart.css";
import { data,data2 } from "./dummyData";

export default function BiaxialLineChart() {


  return (
    <div className="chartone">
      <Carousel>
        <ResponsiveContainer width="100%" aspect={4 / 2}>
          <BarChart
            data={data}
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
        <ResponsiveContainer width="100%" aspect={4 / 2}>
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
        </ResponsiveContainer>
      </Carousel>
    </div>
  );
}
