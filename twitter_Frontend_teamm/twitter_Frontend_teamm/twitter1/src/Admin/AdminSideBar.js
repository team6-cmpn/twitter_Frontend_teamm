import React from "react";
import "./adminsidebar.css";
import { LineStyle, Timeline } from "@material-ui/icons";

import GroupIcon from "@material-ui/icons/Group";
import HomeIcon from "@material-ui/icons/Home";
import { Link, useLocation, Outlet } from "react-router-dom";
import Statistics from "./statistics";
/**
 * 
 * side bar that have the items that the users can 
 * trigger between pages of admin 
 * @returns 
 */

export default function AdminSideBar() {
  return (
    <div className="adminsidebar">
      <div className="adminsidebarWrapper">
        <div className="adminsidebarMenu">
          <h3 className="adminsidebarTitle">Dashboard</h3>
          <ul className="adminsidebarList">
            <li className="adminsidebarListItem active ">
              <a href="adminPage" id="AdminHomePage">
                <HomeIcon className="adminsidebarIcon" />
                Admin Home
              </a>
            </li>
            <li className="adminsidebarListItem" id="ADminStatistics">
              <a href="Statistics">
                <Timeline className="adminsidebarIcon" />
                Statistics
              </a>
            </li>
            <li className="adminsidebarListItem" id="AdminUsers">
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
