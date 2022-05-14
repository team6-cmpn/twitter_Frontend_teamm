import React from "react";
import "./statistics.css";
import TwiiterStatistics from "./TwiiterStatistics";
import BaxialComponent from "./Charts/BiaxialLineChart";
import TopUsers from "./TopFiveUsers";
import TopBar from "./TopBar";
import AdminSideBar from "./AdminSideBar";

export default function Statistics() {
  return (
    <div id="StatisticsPage">
      <TopBar />
      <div className="admincontainer">
        <AdminSideBar />
        <div className="satisticshome">
          <TwiiterStatistics />
          <BaxialComponent />
          <div className="statwidgets">
            <TopUsers />
          </div>
        </div>
      </div>
    </div>
  );
}
