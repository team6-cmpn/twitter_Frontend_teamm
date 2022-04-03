import React from "react";
import "./TopicItem.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const TopicItem = (props) => {
  return (
    <div >
      <div className="keyword__tweets">
        {props.category} 
      </div>
      <div className="keyword__name">
      <strong>#{props.title}</strong>
      </div> 
      <div className="keyword__tweets"> {props.numberoftweet} </div>
     
    </div>
  );
};

export default TopicItem;
