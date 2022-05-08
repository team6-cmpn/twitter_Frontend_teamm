import React from "react";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from 'react';

export default function Topbar() {
  return (
    <div className="topbar" id="AdminTopBar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone  />
          </div>
          <img src="https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/236785599_3035825320021503_7464080102625445644_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=HyFNYOwCBqkAX9UBsKp&_nc_ht=scontent.fcai19-4.fna&oh=00_AT9xvx5-fwh_YQyTF-tJafT0JHcIp5b0aE-BQlW8HBpZEQ&oe=6261AC1B" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
