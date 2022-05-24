import React, { useEffect, useState } from "react";
import "./topusercomponent.css";
import { Avatar } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { Link, BrowserRouter } from "react-router-dom";
import { GetAdminUserList, GetUserList } from "./MockRegistrationAdmin";
import Configure from "../Configure";

/**
 *
 * this function returns component for each top five users with most followers
 * 
 */

export default function TopUserItem({ user }) {
  function getuserid(){
    localStorage.setItem("clicked_userID",user._id)
  }
  return (
    <div className="newUsersListItem" id="TopUsersItem">
      <img
        src={`${Configure.backURL}${user.profile_image_url}`}
        alt=""
        className="topAvatar"
      ></img>
      <div onClick={getuserid} className="newUsersUser">
        <Link to={`/${user?.username}`}>
          <span style={{color:"black",marginRight: "111px"}} className="newUsersUserTitle">{user.username}</span>
        </Link>
      </div>
    </div>
  );
}
