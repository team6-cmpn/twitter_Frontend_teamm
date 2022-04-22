import React from "react";
import "./home.css";
import WelcomPage from "./WelcomPage/WelcomPage";
import BlockForm from "./Users/BlockForm";
import TopBar from "./TopBar";
import AdminSideBar from "./AdminSideBar";
export default function AdminHome() {
  return (
    <div id="WelcomePage">
      <TopBar />
      <div className="admincontainer">
        <AdminSideBar />
        <div className="adminhome">
          <WelcomPage />
        </div>
      </div>
    </div>
  );
}
