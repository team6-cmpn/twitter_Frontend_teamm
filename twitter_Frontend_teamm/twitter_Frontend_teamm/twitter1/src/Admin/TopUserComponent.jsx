import React from "react";
import "./topusercomponent.css";
import { Avatar } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { Link, BrowserRouter } from "react-router-dom";

const TopUserItem = ({ user }) => {
  return (
    <li className="newUsersListItem">
      <img src={user.imgurl} alt="" className="newUsersImg" />
      <div className="newUsersUser">
        <span className="newUsersUsername">{user.name}</span>
        <span className="newUsersUserTitle">{user.username}</span>
      </div>
      <Link to="/BlockForm">
        <button className="newUsersButton">
          <Visibility className="newUsersIcon" />
          Display
        </button>
      </Link>
    </li>
  );
};

export default TopUserItem;
