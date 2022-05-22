import React from "react";
import "./Home.css";
import Sidebar from "./Sidebar/Sidebar";
import Trends from "./Widgets/Trends";
import "antd/dist/antd.css";
import Home_feed from "./homepage/Home_feed";

function Home() {
  return (
    <div className="twitter ">
      <Sidebar />
      <Home_feed />
      <Trends />
    </div>
  );
}

export default Home;
