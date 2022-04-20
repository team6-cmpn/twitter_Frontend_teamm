import React from "react";
import AdminUsers from "./Users/Users";
import "./finaluser.css";
import UserChart from "./Charts/UserChart/UserChart";
import UserNumChart from "./Charts/UserChart/UserNumChart";
import TopBar from "./TopBar";
import AdminSideBar from "./AdminSideBar";
export default function FinalUser() {
  return (
    <div>
      <TopBar />
      <div className="admincontainer">
        <AdminSideBar />
        <div className="UsersHome">
          <div className="UserWidget">
            <AdminUsers />
            <div className="Charts">
              <div className="UserChart">
                <h3>Ages Chart</h3>
                <UserChart />
              </div>
            </div>
          </div>
          <UserNumChart />
        </div>
      </div>
    </div>
  );
}
