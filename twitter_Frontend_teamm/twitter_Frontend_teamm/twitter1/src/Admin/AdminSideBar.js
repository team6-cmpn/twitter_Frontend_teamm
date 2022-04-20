import React from "react";
import "./adminsidebar.css";
import { LineStyle, Timeline } from "@material-ui/icons";

import GroupIcon from "@material-ui/icons/Group";
import HomeIcon from "@material-ui/icons/Home";
import { Link, useLocation, Outlet } from "react-router-dom";
import Statistics from "./statistics";

export default function AdminSideBar() {
  return (
    <div className="adminsidebar">
      <div className="adminsidebarWrapper">
        <div className="adminsidebarMenu">
          <h3 className="adminsidebarTitle">Dashboard</h3>
          <ul className="adminsidebarList">
            <li className="adminsidebarListItem active ">
              <a href="adminPage">
                <HomeIcon className="adminsidebarIcon" />
                Admin Home
              </a>
            </li>
            <li className="adminsidebarListItem">
              <a href="Statistics">
                <Timeline className="adminsidebarIcon" />
                Statistics
              </a>
            </li>
            <li className="adminsidebarListItem">
              <a href="Users">
                <GroupIcon className="adminsidebarIcon" />
                Users
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
