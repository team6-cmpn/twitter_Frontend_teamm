import React from "react";
import './Home.css';
import Sidebar from "./Sidebar/Sidebar";
import Trends from "./Widgets/Trends";
import "antd/dist/antd.css";
import Explore from "./Explore";
import FriendSuggestions from "./Widgets/FriendSuggestions/FriendSuggestions";
import TopicItem from "./Widgets/Topics/TopicItem/TopicItem";
//import WhoToFollow from "./WhoToFollow";

function Home() {
  return (
      <div className="twitter "> 
      
        <Sidebar />
          
        <Trends />  

         
     </div>
  );
}

export default Home;