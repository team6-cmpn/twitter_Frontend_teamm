import React,{useEffect,useState} from "react";
import "./topusercomponent.css";
import { Avatar } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { Link, BrowserRouter } from "react-router-dom";
import { GetAdminUserList, GetUserList } from "./MockRegistrationAdmin";

/**
 *
 * this function returns component for each top five users with most followers
 * @returns
 */

export default function TopUserItem ({user}) {
  return (
    <div className="newUsersListItem" id="TopUsersItem">
      <div className="newUsersUser">
        <span className="newUsersUserTitle">{user.username}</span>
      </div>
    </div>
  );
};

