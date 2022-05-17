import React from "react";
import "./topusercomponent.css";
import { Avatar } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { Link, BrowserRouter } from "react-router-dom";

const TopUserItem = ({ user }) => {
  return (
    <div className="newUsersListItem" id="TopUsersItem">
      <img src={user.imgurl} alt="" className="newUsersImg" />
      <div className="newUsersUser">
        <span className="newUsersUserTitle">{user.username}</span>
        <span >{user.followers_count}</span>
      </div>
    </div>
  );
};

export default TopUserItem;
