import React from "react";
import "./twitterstatistics.css"

export default function Twiiterstatistics() {
  return (
    <div className="adminstatistics">
      <div className="adminstatisticsItem">
        <span className="adminstatisticsTitle">Number Of Tweets per day</span>
        <div className="staticsItemContainer">
            <span className="itemNum">200 Users</span>
        </div>
      </div>
      <div className="adminstatisticsItem">
        <span className="adminstatisticsTitle">Number Of Tweets</span>
        <div className="staticsItemContainer">
            <span className="itemNum">200 Tweets</span>
        </div>
      </div>
      <div className="adminstatisticsItem">
        <span className="adminstatisticsTitle">Number Of ReTweets</span>
        <div className="staticsItemContainer">
            <span className="itemNum">1000 Retweets</span>
        </div>
      </div>
    </div>
  );
}
