import React from "react";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";
import { DarkModeContext } from "../Components/context/darkModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

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
          <Link to={`/profile`}>
            {" "}
            <img
              src={localStorage.getItem("UserImg")}
              alt=""
              className="topAvatar"
            ></img>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
