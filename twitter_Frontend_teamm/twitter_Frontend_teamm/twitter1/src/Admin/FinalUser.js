import React from "react";
import "./finaluser.css"
import AdminUsers from "./Users/Users";
import UserChart from "./Charts/UserChart/UserChart";
import UserNumChart from "./Charts/UserChart/UserNumChart";
import TopBar from "./TopBar";
import AdminSideBar from "./AdminSideBar";
export default function FinalUser() {
  return (
    <div id="FinalUsersPage">
      <TopBar />
      <div className="admincontainer">
        <AdminSideBar />
        <div className="UsersHome">
          <div className="UserWidget">
            <AdminUsers />
          </div>
          <UserNumChart />
          <div className="Charts">
            <div className="UserChart">
              <div className="agecharttitle">Ages Chart</div>
              <UserChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
