import React from "react";
//import "../Widgets.css";
import "antd/dist/antd.css";
import { FaSistrix } from "react-icons/fa";
import FriendSuggestions from "./FriendSuggestions/FriendSuggestions";
import TopicItem from "./Topics/Topics";
//import "./FriendSuggestions/FriendSuggestionItem/FriendSuggestionItem.css";
const Trends = () => {
  return (
    <div >
      <div className="trends__search">
        <input
          type="text"
          className="trend__control"
          placeholder="Search Twitter"
        />
        <div className="trend__icon ">
          <FaSistrix className="search" />
        </div>
      </div> 
      <div>
      <TopicItem />
      <div>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
      <FriendSuggestions />
      </div>
    </div>
  );
};

export default Trends;
