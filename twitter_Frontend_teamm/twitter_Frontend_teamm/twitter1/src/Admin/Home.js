import React from "react";
import "./home.css";
import WelcomPage from "./WelcomPage/WelcomPage";
import TopBar from "./TopBar";
import AdminSideBar from "./AdminSideBar";
/**
 * 
 * this component returns welcome page including sidebar and topbar
 * @returns 
 */
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
