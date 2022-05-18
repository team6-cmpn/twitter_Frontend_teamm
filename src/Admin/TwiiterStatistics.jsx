import React from "react";
import "./twitterstatistics.css";
import {GetDashBoardstat} from "./MockRegistrationAdmin";
import { Tweets_lookup } from "../Components/homepage/backendFeed";


export default function Twiiterstatistics() {
  let staatic=[]
  staatic=GetDashBoardstat()
  console.log("dashboard",staatic)
  return (
    <div className="adminstatistics" id="TwitterStatisticsBlocks">
      <div className="adminstatisticsItem">
        <span className="adminstatisticsTitle">Number Of Users</span>
        <div className="staticsItemContainer">
          <span className="itemNum"> {staatic[2]?.all_Users_Count_withoutAdmins}  Users</span>
        </div>
      </div>  
      <div className="adminstatisticsItem">
        <span className="adminstatisticsTitle"> Number Of Tweets</span>
        <div className="staticsItemContainer">
          <span className="itemNum"> {staatic[1]?.all_Tweets_Count}  Tweets</span>
        </div>
      </div>
      <div className="adminstatisticsItem">
        <span className="adminstatisticsTitle">Number Of Tweets Per Day</span>
        <div className="staticsItemContainer">
          <span className="itemNum"> {staatic[11]?.tweets_Per_Day.length} Tweets</span>
        </div>
      </div>
      <div className="adminstatisticsItem">
        <span className="adminstatisticsTitle">Number Of Users During Week</span>
        <div className="staticsItemContainer">
          <span className="itemNum"> {staatic[7]?.new_Users_During_aWeek[0].count} Users</span>
        </div>
      </div>
    </div>
  );
}

// {staatic[2].all_Users_Count_withoutAdmins}
// {staatic[1].all_Tweets_Count} 
// {staatic[11].tweets_Per_Day.length} 