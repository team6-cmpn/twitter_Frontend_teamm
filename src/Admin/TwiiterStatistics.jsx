import React from "react";
import "./twitterstatistics.css";
import { GetRequest } from "./MockRegistrationAdmin";
import { useEffect,useState } from 'react';
import GetNumUsers from "./MockRegistrationAdmin";

// var datanum=GetReques()
// var num = GetRequest();
// fetch('http://www.twi-jay.xyz:8000/numberofusers')
//   .then((res) => res.json())
//   .then((result) => {
//     // we received our list of posts
//     console.log(result);
// });

export default function Twiiterstatistics() {
  var statistcs=GetNumUsers();
  return (
    <div className="adminstatistics" id="TwitterStatisticsBlocks">
      <div className="adminstatisticsItem">
        <span className="adminstatisticsTitle">Number Of Tweets per day</span>
        <div className="staticsItemContainer">
          <span className="itemNum">{statistcs[0].TweetsPerDay} Tweets</span>
        </div>
      </div>  
      <div className="adminstatisticsItem">
        <span className="adminstatisticsTitle">Number Of Tweets</span>
        <div className="staticsItemContainer">
          <span className="itemNum">{statistcs[0].TotalNumberOfTweets} Tweets</span>
        </div>
      </div>
      <div className="adminstatisticsItem">
        <span className="adminstatisticsTitle">Number Of ReTweets</span>
        <div className="staticsItemContainer">
          <span className="itemNum">{statistcs[0].TotalNumberOfRetweets} Retweets</span>
        </div>
      </div>
    </div>
  );
}
