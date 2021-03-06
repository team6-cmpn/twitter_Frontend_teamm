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
/**statistics charts
 * 
 * this function returns a carousel item which have 2 items
 * first item for users per month in 2022
 * second item for showing tweets per years from starting our twitter clone
 * 
 */

   export default function BiaxialLineChart() {
//   const [tweetsPerMonth, setTweetsPerMonth] = useState(undefined);
//   useEffect(() => {
//     (async () => {
//       const resp = await GetDashBoard();
//       let temptweetsPerMonth = [...resp.data[9].tweets_Per_Month];
//       temptweetsPerMonth.forEach((element, index) => {
//         temptweetsPerMonth[index].month = element._id.month;
//       });
//       setTweetsPerMonth(temptweetsPerMonth);
//     })();
//   }, []);

  // const [tweetsPeryear, setTweetsPeryear] = useState(undefined);
  // useEffect(() => {
  //   (async () => {
  //     const resp = await GetDashBoard();
  //     let temptweetsPeryear = [...resp.data[10].tweets_Per_Year];
  //     temptweetsPeryear.forEach((element, index) => {
  //       temptweetsPeryear[index].year = element._id;
  //       temptweetsPeryear[index].totaltweets = element.totalTweets;
  //     });
  //     setTweetsPeryear(temptweetsPeryear);
  //   })();
  // }, []);

  // const [tweetsPerday, setTweetsPerday] = useState(undefined);
  // useEffect(() => {
  //   (async () => {
  //     const resp = await GetDashBoard();
  //     let temptweetsPerday = [...resp.data[12].new_Users_Per_Day];
  //     temptweetsPerday.forEach((element, index) => {
  //       temptweetsPerday[index].day = element._id.day;
  //     });
  //     setTweetsPerday(temptweetsPerday);
  //   })();
  // }, []);

  return (
    <div className="chartone">
      <Carousel className="carouselitem">
        <ResponsiveContainer width="100%" aspect={4 / 2}>
          <BarChart
            data={GetDashBoardstat()[9]?.tweets_Per_Month}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid />
            <XAxis dataKey="_id" />
            <YAxis domain={[0, (dataMax) => Number(dataMax) + 10]} />
            <Tooltip contentStyle={{backgroundColor:'#1DA1F2'}} />
            <Legend />
            <Bar dataKey="count" fill="#0A1C73" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" aspect={4 / 2}>
          <BarChart
            data={GetDashBoardstat()[10]?.tweets_Per_Year}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis  domain={[0, (dataMax) => Number(dataMax) + 10]} />
            <Tooltip contentStyle={{backgroundColor:'#1DA1F2'}} />
            <Legend />
            <Bar dataKey="totalTweets" fill="#0A1C73" />
          </BarChart>
        </ResponsiveContainer>

      </Carousel>
    </div>
  );
}
