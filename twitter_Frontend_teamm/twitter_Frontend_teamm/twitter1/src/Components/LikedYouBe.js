import React from "react";
import "./LikedYou.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Avatar } from "@material-ui/core";

const LikedYouBe = ({ liked }) => {
  return (
    <div className="likedYou" id="likedyou">
      <FavoriteIcon />
      <div>
        <div>
            <Avatar src={liked.notificationHeader.images} />
          
        </div>
        <span>
          <b>{liked.notificationHeader.text}</b>
        </span>
        <span>{liked.notificationContent.text}</span>
      </div>
    </div>
  );
};

export default LikedYouBe;