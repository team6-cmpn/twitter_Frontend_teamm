import React, { useState } from "react";
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
import {
  GetTweetsPerMonth,
  GetDashBoard,
  GetDashBoardstat,
} from "../MockRegistrationAdmin";
import { useEffect } from "react";

export default function BiaxialLineChart() {
  const [tweetsPerMonth, setTweetsPerMonth] = useState(undefined);
  let d = [];

  useEffect(() => {
    (async () => {
      const resp = await GetDashBoard();
      let temptweetsPerMonth = [...resp.data[9].tweets_Per_Month];
      temptweetsPerMonth.forEach((element, index) => {
        temptweetsPerMonth[index].month = element._id.month;
      });
      console.log("tww", temptweetsPerMonth);
      d.push(temptweetsPerMonth);
      setTweetsPerMonth(temptweetsPerMonth);
    })();
  }, []);

  const [tweetsPeryear, setTweetsPeryear] = useState(undefined);
  useEffect(() => {
    (async () => {
      const resp = await GetDashBoard();
      let temptweetsPeryear = [...resp.data[10].tweets_Per_Year];
      temptweetsPeryear.forEach((element, index) => {
        temptweetsPeryear[index].year = element._id;
        temptweetsPeryear[index].totaltweets = element.totalTweets;
      });
      setTweetsPeryear(temptweetsPeryear);
    })();
  }, []);

  return (
    <div className="chartone">
      <Carousel>
        <ResponsiveContainer width="100%" aspect={4 / 2}>
          <BarChart
            data={tweetsPerMonth}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid />
            <XAxis dataKey="month" />
            <YAxis domain={[0, (dataMax) => Number(dataMax) + 50]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" aspect={4 / 2}>
          <BarChart
            data={tweetsPeryear}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke="red " strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totaltweets" fill="#33FF80" />
          </BarChart>
        </ResponsiveContainer>
      </Carousel>
    </div>
  );
}
