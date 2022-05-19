import React from "react";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";
import { DarkModeContext } from "../Components/context/darkModeContext";
import { useContext } from 'react';

/**
 * 
 * topbar of the admin pages
 * @returns 
 */
export default function Topbar() {
  return (
    <div className="topbar" id="AdminTopBar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <img src={localStorage.getItem("UserImg")} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
