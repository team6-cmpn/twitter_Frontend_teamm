import React from "react";
import "./FollowedYou.css";
import UserIcon from "./UserIcon";
import { Avatar } from "@material-ui/core";

const FollowedYou = ({ followingUser }) => {
  return (
    <div className="followedYou">
      <UserIcon className="followedYouIcon" />
      <div>
        <Avatar src={followingUser.userImage} />
        <span>
          <b>{followingUser.name}</b> followed you
        </span>
      </div>
    </div>
  );
};

export default FollowedYou;
